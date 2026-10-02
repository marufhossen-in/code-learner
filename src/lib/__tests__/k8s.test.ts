import { describe, expect, it } from 'vitest';
import type { K8sAction, K8sState } from '../../components/visuals/k8sSim';
import { DEFAULT_DEPLOY, endpoints, initialK8sState, k8sReducer, nodeLoad } from '../../components/visuals/k8sSim';

function run(state: K8sState, ...actions: K8sAction[]): K8sState {
  return actions.reduce((s, a) => k8sReducer(s, a).state, state);
}
const APPLY: K8sAction = { type: 'apply', ...DEFAULT_DEPLOY };
const HAS_BN = /[ঀ-৿]/;

describe('the k8s register (desired vs observed)', () => {
  it('ships three nodes with node-c tainted dedicated=db', () => {
    const s = initialK8sState();
    expect(s.nodes.map((n) => n.name)).toEqual(['node-a', 'node-b', 'node-c']);
    expect(s.nodes[2].taints).toEqual(['dedicated=db']);
  });

  it('apply writes desire to the register — three records, all Pending, none Running', () => {
    const r = k8sReducer(initialK8sState(), APPLY);
    expect(r.ok).toBe(true);
    expect(r.state.pods).toHaveLength(3);
    expect(r.state.pods.every((p) => p.phase === 'Pending' && p.node === null)).toBe(true);
    expect(r.state.deployments[0].replicas).toBe(3);
    expect(HAS_BN.test(r.caption.bn)).toBe(true);
  });

  it('a duplicate apply under one name is refused', () => {
    const s = run(initialK8sState(), APPLY);
    const r = k8sReducer(s, APPLY);
    expect(r.ok).toBe(false);
    expect(r.state.pods).toHaveLength(3);
  });

  it('schedule binds every feasible pod and reserves its requests against node capacity', () => {
    const s = run(initialK8sState(), APPLY, { type: 'schedule' });
    expect(s.pods.every((p) => p.phase === 'Running' && p.ready && p.node !== null)).toBe(true);
    const load = nodeLoad(s, 'node-a');
    expect(load.cpu + nodeLoad(s, 'node-b').cpu).toBe(3000);
  });
});

describe('the scheduler arithmetic', () => {
  it('a pod fitting ONLY the tainted node stays Pending; the tolerating twin lands', () => {
    let s = run(initialK8sState(), APPLY, { type: 'schedule' });
    const fat: K8sAction = {
      type: 'apply', name: 'bulk', image: 'bulk:1', replicas: 1, cpu: 500, mem: 8192,
      labels: { app: 'bulk' },
    };
    s = run(s, fat);
    const r1 = k8sReducer(s, { type: 'schedule' });
    expect(r1.state.pods.find((p) => p.labels.app === 'bulk')!.phase).toBe('Pending');
    expect(r1.out.join(' ')).toContain('taint dedicated=db');
    const twin: K8sAction = {
      type: 'apply', name: 'bulkdb', image: 'bulk:1', replicas: 1, cpu: 500, mem: 8192,
      labels: { app: 'bulkdb' }, tolerations: ['dedicated=db'],
    };
    s = run(r1.state, twin, { type: 'schedule' });
    const landed = s.pods.find((p) => p.labels.app === 'bulkdb')!;
    expect(landed.phase).toBe('Running');
    expect(landed.node).toBe('node-c');
  });

  it('node crash: pods ruled feral, controller re-files the deficit on survivors — and one claim cannot afford a chair', () => {
    let s = run(initialK8sState(), APPLY, { type: 'schedule' });
    s = run(s, { type: 'crash', node: 'node-a' });
    s = run(s, { type: 'schedule' });
    const running = s.pods.filter((p) => p.phase === 'Running');
    const pending = s.pods.filter((p) => p.phase === 'Pending');
    expect(running.every((p) => p.node !== 'node-a')).toBe(true);
    expect(s.nodes[0].ready).toBe(false);
    expect(running.length + pending.length).toBe(3);
    expect(pending.length).toBe(1);
  });

  it('scale rewrites desire: down retires running pods with SIGTERM narrative, up files Pending claims', () => {
    let s = run(initialK8sState(), APPLY, { type: 'schedule' });
    const r = k8sReducer(s, { type: 'scale', name: 'ledger-api', replicas: 1 });
    expect(r.state.pods).toHaveLength(1);
    expect(r.out.join(' ')).toContain('SIGTERM');
    s = run(r.state, { type: 'scale', name: 'ledger-api', replicas: 4 });
    expect(s.pods.filter((p) => p.labels.app === 'ledger-api')).toHaveLength(4);
    expect(s.pods.filter((p) => p.phase === 'Pending')).toHaveLength(3);
  });

  it('scale on an unwritten deployment is refused politely', () => {
    const r = k8sReducer(initialK8sState(), { type: 'scale', name: 'ghost', replicas: 2 });
    expect(r.ok).toBe(false);
    expect(HAS_BN.test(r.caption.bn)).toBe(true);
  });
});

describe('the name contract and the health gate', () => {
  it('service endpoints are exactly the selector-matched RUNNING+READY pods', () => {
    let s = run(initialK8sState(), APPLY, { type: 'schedule' });
    s = run(s, { type: 'service', name: 'ledger-api', selector: { app: 'ledger-api' } });
    expect(endpoints(s, 'ledger-api')).toHaveLength(3);
    s = run(s, { type: 'probe', podId: s.pods[0].id, ok: false });
    expect(endpoints(s, 'ledger-api')).toHaveLength(2);
    expect(endpoints(s, 'ledger-api')).not.toContain(s.pods[0].id);
  });

  it('rollout rewrites the register once and retires pods one surge at a time — never below replicas', () => {
    let s = run(initialK8sState(), APPLY, { type: 'schedule' });
    s = run(s, { type: 'service', name: 'api', selector: { app: 'ledger-api' } });
    const r = k8sReducer(s, { type: 'rollout', name: 'ledger-api', image: 'myapp:1.3' });
    expect(r.state.pods).toHaveLength(3);
    expect(r.state.pods.every((p) => p.image === 'myapp:1.3' && p.ready)).toBe(true);
    expect(endpoints(r.state, 'api')).toHaveLength(3);
    expect(r.out.join(' ')).toContain('surge');
  });
});

describe('kubernetes hub content (Section 3)', () => {
  it('is published under the registry slug with the progressive lesson chain', async () => {
    const { getHub } = await import('../../content');
    const hub = getHub('kubernetes');
    expect(hub).toBeDefined();
    expect(hub!.name).toBe('Kubernetes');
    expect(hub!.lessons.length).toBeGreaterThanOrEqual(2);
    for (let i = 0; i < hub!.lessons.length - 1; i++) {
      const nx = hub!.lessons[i].nextLesson ?? hub!.lessons[i].next;
      expect(nx?.slug).toBe(hub!.lessons[i + 1].slug);
    }
  });

  it('every deep lesson carries the canonical engine headings and the kubernetes visual block', async () => {
    const { getHub } = await import('../../content');
    for (const lesson of getHub('kubernetes')!.lessons) {
      const ids = lesson.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      expect(ids).toEqual(['what', 'why', 'how', 'visual', 'internal', 'result', 'debug', 'realworld', 'next']);
      expect(lesson.blocks.some((b) => b.type === 'visual' && (b as { id: string }).id === 'kubernetes')).toBe(true);
      expect(lesson.exercises).toHaveLength(3);
      expect(lesson.quiz.questions).toHaveLength(5);
      expect(lesson.minutes).toBeGreaterThanOrEqual(18);
    }
  });

  it('assessment suites are bilingual and fully pinned', async () => {
    const { getHub } = await import('../../content');
    for (const lesson of getHub('kubernetes')!.lessons) {
      expect(lesson.summary.bn.length).toBeGreaterThan(100);
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
