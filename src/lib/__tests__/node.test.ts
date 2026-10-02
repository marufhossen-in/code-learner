import { describe, expect, it } from 'vitest';
import { NODE_BEATS, NODE_LAWS, nodeSteps, nodeSummary } from '../../components/visuals/nodeSim';
import { getHub, findLesson } from '../../content';

describe('the node lab engine', () => {
  it('ships exactly four laws and a fixed 8-beat docket', () => {
    expect(NODE_LAWS.map((l) => l.id)).toEqual(['blocker', 'careless', 'chained', 'streamed']);
    expect(NODE_BEATS).toHaveLength(8);
    expect(NODE_BEATS[1].route).toContain('bcrypt');
    expect(NODE_BEATS[4].route).toContain('download');
    expect(NODE_BEATS[6].route).toContain('async-throw');
    expect(NODE_BEATS[7].route).toContain('50');
  });

  it('pins the blocker ledger: the loop held hostage, then nobody home', () => {
    expect(nodeSummary('blocker')).toMatchObject({
      blockedMs: 898, maxLatencyMs: 30000, hungRequests: 51, swallowedErrors: 1,
      errorHandlerHits: 1, memoryPeakMB: 90, throughputRps: 0,
    });
  });

  it('pins the careless ledger: async habit without contract — 2 hangs, 2 swallowed truths', () => {
    expect(nodeSummary('careless')).toMatchObject({
      blockedMs: 20408, maxLatencyMs: 30000, hungRequests: 2, swallowedErrors: 2,
      errorHandlerHits: 0, memoryPeakMB: 90, throughputRps: 3,
    });
  });

  it('pins the chain-keeper ledger: survival without speed caps — same burst bill, zero hangs', () => {
    expect(nodeSummary('chained')).toMatchObject({
      blockedMs: 20408, maxLatencyMs: 20000, hungRequests: 0, swallowedErrors: 0,
      errorHandlerHits: 2, memoryPeakMB: 90, throughputRps: 3,
    });
  });

  it('pins the streamer ledger: worker pool + backpressure + honest shedding — 19 rps, 42MB', () => {
    expect(nodeSummary('streamed')).toMatchObject({
      blockedMs: 8, maxLatencyMs: 1600, hungRequests: 0, swallowedErrors: 0,
      errorHandlerHits: 2, memoryPeakMB: 42, throughputRps: 19,
    });
  });

  it('verdict chains per law are pinned exactly', () => {
    expect(nodeSteps('blocker').map((s) => s.verdict)).toEqual([
      'served', 'blocked', 'blocked', 'blocked', 'buffered', 'error-propagated', 'crashed', 'refused',
    ]);
    expect(nodeSteps('careless').map((s) => s.verdict)).toEqual([
      'served', 'served', 'blocked', 'blocked', 'buffered', 'hung', 'swallowed', 'queued',
    ]);
    expect(nodeSteps('chained').map((s) => s.verdict)).toEqual([
      'served', 'served', 'blocked', 'blocked', 'buffered', 'error-propagated', 'error-propagated', 'queued',
    ]);
    expect(nodeSteps('streamed').map((s) => s.verdict)).toEqual([
      'served', 'served', 'blocked', 'worker-offloaded', 'streamed', 'error-propagated', 'error-propagated', 'load-shed',
    ]);
  });

  it('the sync cascade is pinned: blocker stalls 90+8+400+400=898 and never unreels', () => {
    expect(nodeSteps('blocker')[1].blockedMsThisBeat).toBe(90);
    expect(nodeSteps('blocker')[2].blockedMsThisBeat).toBe(8);
    expect(nodeSteps('blocker')[3].blockedMsThisBeat).toBe(400);
    expect(nodeSteps('blocker')[4].blockedMsThisBeat).toBe(400);
    expect(nodeSteps('blocker')[4].blockedMs).toBe(898);
  });

  it('the burst arithmetic is pinned: 50×400=20,000ms tail for non-streamers; streamer sheds honestly', () => {
    expect(nodeSteps('careless')[7].blockedMsThisBeat).toBe(20000);
    expect(nodeSteps('chained')[7].blockedMsThisBeat).toBe(20000);
    expect(nodeSteps('chained')[7].latencyMsThisBeat).toBe(20000);
    expect(nodeSteps('streamed')[7].latencyMsThisBeat).toBe(1600);
    expect(nodeSteps('blocker')[7].verdict).toBe('refused');
  });

  it('async does not beat CPU: careless and chained pay the same 20408ms stall — only the pool law escapes', () => {
    expect(nodeSummary('careless').blockedMs).toBe(20408);
    expect(nodeSummary('chained').blockedMs).toBe(20408);
    expect(nodeSummary('streamed').blockedMs).toBe(8);
  });

  it('the chain buys survival not speed: careless vs chained differ ONLY on hang/swallow/error-home counters', () => {
    const c = nodeSummary('careless');
    const k = nodeSummary('chained');
    expect(c.blockedMs).toBe(k.blockedMs);
    expect(c.throughputRps).toBe(k.throughputRps);
    expect(c.memoryPeakMB).toBe(k.memoryPeakMB);
    expect(k.hungRequests).toBe(0);
    expect(k.swallowedErrors).toBe(0);
    expect(k.errorHandlerHits).toBe(2);
    expect(c.errorHandlerHits).toBe(0);
    expect(c.hungRequests).toBe(2);
    expect(c.swallowedErrors).toBe(2);
  });

  it('ledgers are monotonic and only Rx peaks descend nowhere', () => {
    for (const l of NODE_LAWS) {
      const steps = nodeSteps(l.id);
      for (let i = 1; i < steps.length; i++) {
        expect(steps[i].blockedMs).toBeGreaterThanOrEqual(steps[i - 1].blockedMs);
        expect(steps[i].hungRequests).toBeGreaterThanOrEqual(steps[i - 1].hungRequests);
        expect(steps[i].swallowedErrors).toBeGreaterThanOrEqual(steps[i - 1].swallowedErrors);
        expect(steps[i].errorHandlerHits).toBeGreaterThanOrEqual(steps[i - 1].errorHandlerHits);
        expect(steps[i].maxLatencyMs).toBeGreaterThanOrEqual(steps[i - 1].maxLatencyMs);
        expect(steps[i].memoryPeakMB).toBeGreaterThanOrEqual(steps[i - 1].memoryPeakMB);
      }
    }
  });

  it('the sync-throw mercy is law-exclusive: only the blocker gets a free error catch before dying', () => {
    expect(nodeSteps('blocker')[5].verdict).toBe('error-propagated');
    expect(nodeSteps('blocker')[5].errorHandlerHits).toBe(1);
    expect(nodeSteps('careless')[5].verdict).toBe('hung');
  });
});

describe('the node hub content', () => {
  const NODE_LESSONS = [
    'the-loop-ledger', 'the-middleware-vows', 'the-first-server', 'the-module-grain',
    'the-file-economy', 'the-dependency-ledger', 'the-evented-backbone', 'the-production-ledger',
  ];

  it('is published under the registry slug with the eight-lesson curriculum chain', () => {
    const hub = getHub('node');
    expect(hub).toBeDefined();
    expect(hub!.name).toBe('Node.js & Express');
    expect(hub!.lessons.map((l) => l.slug)).toEqual(NODE_LESSONS);
    for (let i = 0; i < NODE_LESSONS.length - 1; i++) {
      expect(hub!.lessons[i].nextLesson?.slug).toBe(NODE_LESSONS[i + 1]);
    }
    expect(hub!.lessons[7].nextLesson).toBeUndefined();
  });

  it('every lesson carries the canonical engine headings and the node visual block', () => {
    for (const slug of NODE_LESSONS) {
      const lesson = findLesson('node', slug)!;
      expect(lesson).toBeDefined();
      const ids = lesson.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      expect(ids.length).toBeGreaterThanOrEqual(8);
      expect(lesson.blocks.some((b) => (b.type === 'visual' && (b as { id: string }).id === 'node') || b.type === 'diagram')).toBe(true);
      expect(lesson.exercises).toHaveLength(3);
      expect(lesson.quiz.questions.length).toBeGreaterThanOrEqual(4);
      expect(lesson.minutes).toBeGreaterThanOrEqual(18);
    }
  });

  it('ships the hub shell: references, roadmap stages, projects, practices, interview, real world', () => {
    const hub = getHub('node')!;
    expect(hub.references).toHaveLength(2);
    expect(hub.roadmap).toHaveLength(4);
    expect(hub.projects).toHaveLength(3);
    expect(hub.bestPractices.length).toBeGreaterThanOrEqual(6);
    expect(hub.interview).toHaveLength(4);
    expect(hub.realWorld).toHaveLength(4);
    expect(hub.intro!.en.length).toBeGreaterThan(200);
    expect(hub.intro!.bn.length).toBeGreaterThan(200);
  });

  it('assessment suite is bilingual and fully pinned', () => {
    for (const lesson of getHub('node')!.lessons) {
      for (const ex of [...lesson.exercises, ...lesson.quiz.questions]) {
        expect(ex.question.en.length).toBeGreaterThan(10);
        expect(ex.question.bn.length).toBeGreaterThan(10);
        expect(ex.explanation.en.length).toBeGreaterThan(20);
        expect(ex.explanation.bn.length).toBeGreaterThan(20);
        if (ex.options) {
          expect(ex.options.length).toBeGreaterThanOrEqual(3);
          expect(typeof ex.answer).toBe('number');
          expect(ex.answer).toBeGreaterThanOrEqual(0);
        }
      }
    }
  });
});
