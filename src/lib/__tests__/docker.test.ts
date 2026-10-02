import { describe, expect, it } from 'vitest';
import { getHub, findLesson } from '../../content';
import { DEFAULT_DOCKERFILE } from '../../components/visuals/dockerSim';
import type { DockerAction, DockerState } from '../../components/visuals/dockerSim';
import { dockerReducer, initialDockerState, parseDockerfile } from '../../components/visuals/dockerSim';

function run(state: DockerState, ...actions: DockerAction[]): DockerState {
  return actions.reduce((s, a) => dockerReducer(s, a).state, state);
}
const LINES = DEFAULT_DOCKERFILE.split('\n');

describe('docker parser', () => {
  it('accepts the default Dockerfile', () => {
    const r = parseDockerfile(DEFAULT_DOCKERFILE);
    expect(r.errors).toHaveLength(0);
    expect(r.ok).toHaveLength(7);
  });
  it('rejects unknown instructions and missing FROM', () => {
    expect(parseDockerfile('FLY high').errors[0]).toContain('unknown instruction');
    expect(parseDockerfile('RUN echo hi').errors[0]).toContain('FROM');
    expect(parseDockerfile('COPY').errors[0]).toContain('argument');
  });
  it('ignores comments and blank lines', () => {
    const r = parseDockerfile('# hello\n\nFROM alpine\n');
    expect(r.ok).toHaveLength(1);
  });
});

describe('build cache (Section 11)', () => {
  it('first build has no cache; identical rebuild is fully cached', () => {
    const s1 = run(initialDockerState(), { type: 'build', lines: LINES, name: 'app:v1' });
    expect(s1.images[0].layers.every((l) => !l.cached)).toBe(true);
    const r = dockerReducer(s1, { type: 'build', lines: LINES, name: 'app:v1' });
    expect(r.state.images[0].layers.every((l) => l.cached)).toBe(true);
    expect(r.caption.bn).toContain('ক্যাশ');
  });
  it('changing one middle line busts cache from that line downward', () => {
    let s = run(initialDockerState(), { type: 'build', lines: LINES, name: 'app:v1' });
    const changed = [...LINES];
    changed[3] = 'RUN npm install --production';
    s = run(s, { type: 'build', lines: changed, name: 'app:v2' });
    const layers = s.images[s.images.length - 1].layers;
    expect(layers[0].cached && layers[1].cached && layers[2].cached).toBe(true);
    expect(layers[3].cached).toBe(false);
    expect(layers[4].cached && layers[5].cached && layers[6].cached).toBe(false);
  });
  it('invalid Dockerfiles fail like a real build', () => {
    const r = dockerReducer(initialDockerState(), { type: 'build', lines: ['FLY high'], name: 'x' });
    expect(r.ok).toBe(false);
    expect(r.state.images).toHaveLength(0);
  });
});

describe('containers', () => {
  const built = run(initialDockerState(), { type: 'build', lines: LINES, name: 'app:v1' });

  it('run creates a running container with the exposed port', () => {
    const s = run(built, { type: 'run' });
    expect(s.containers).toHaveLength(1);
    expect(s.containers[0].status).toBe('running');
    expect(s.containers[0].port).toBe('3000:3000');
  });
  it('rm refuses running containers but allows stopped ones', () => {
    let s = run(built, { type: 'run' });
    const id = s.containers[0].id;
    const refused = dockerReducer(s, { type: 'rm', id });
    expect(refused.ok).toBe(false);
    expect(refused.out.join(' ')).toContain('cannot remove');
    s = run(s, { type: 'stop', id }, { type: 'rm', id });
    expect(s.containers).toHaveLength(0);
  });
  it('rmi is refused while a container uses the image', () => {
    const s = run(built, { type: 'run' });
    const r = dockerReducer(s, { type: 'rmi', id: s.images[0].id });
    expect(r.ok).toBe(false);
    expect(r.state.images).toHaveLength(1);
  });
  it('one image, many containers — stop/start preserves identity', () => {
    let s = run(built, { type: 'run' }, { type: 'run' });
    expect(s.containers).toHaveLength(2);
    const id = s.containers[0].id;
    s = run(s, { type: 'stop', id }, { type: 'start', id });
    expect(s.containers.find((c) => c.id === id)!.status).toBe('running');
  });
});

describe('docker hub content (Section 3)', () => {
  const DOCKER_LESSONS = [
    'container-thinking', 'dockerfile-mastery', 'the-layer-ledger', 'the-runtime-register',
    'the-volume-economy', 'the-network-bridges', 'the-compose-ledger', 'the-hardened-manifest',
  ];

  it('is published under the registry slug with the eight-lesson chain', () => {
    const hub = getHub('docker');
    expect(hub).toBeDefined();
    expect(hub!.lessons.map((l) => l.slug)).toEqual(DOCKER_LESSONS);
    for (let i = 0; i < DOCKER_LESSONS.length - 1; i++) {
      const nx = hub!.lessons[i].nextLesson ?? hub!.lessons[i].next;
      expect(nx?.slug).toBe(DOCKER_LESSONS[i + 1]);
    }
    expect(hub!.lessons[7].nextLesson ?? hub!.lessons[7].next).toBeUndefined();
  });

  it('every deep lesson carries the canonical engine headings and the docker visual block', () => {
    for (const slug of DOCKER_LESSONS.slice(2)) {
      const lesson = findLesson('docker', slug)!;
      const ids = lesson.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      expect(ids.length).toBeGreaterThanOrEqual(8);
      expect(lesson.blocks.some((b) => (b.type === 'visual' && (b as { id: string }).id === 'docker') || b.type === 'diagram')).toBe(true);
      expect(lesson.exercises).toHaveLength(3);
      expect(lesson.quiz.questions.length).toBeGreaterThanOrEqual(4);
      expect(lesson.minutes).toBeGreaterThanOrEqual(18);
    }
  });

  it('new-lesson assessment suites are bilingual and fully pinned', () => {
    for (const slug of DOCKER_LESSONS.slice(2)) {
      const lesson = findLesson('docker', slug)!;
      expect(findLesson('docker', slug)!.summary.bn.length).toBeGreaterThan(100);
      for (const ex of [...lesson.exercises, ...lesson.quiz.questions]) {
        expect(ex.question.en.length).toBeGreaterThan(10);
        expect(ex.question.bn.length).toBeGreaterThan(10);
        expect(ex.explanation.en.length).toBeGreaterThan(20);
        expect(ex.explanation.bn.length).toBeGreaterThan(20);
        if (ex.options) {
          expect(ex.options.length).toBeGreaterThanOrEqual(3);
          expect(typeof ex.answer).toBe('number');
          expect(ex.answer as number).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });
});
