import { describe, expect, it } from 'vitest';
import { REST_BEATS, REST_LAWS, restSteps, restSummary } from '../../components/visuals/restSim';
import { getHub, findLesson } from '../../content';

describe('the rest lab engine', () => {
  it('ships exactly four laws and a fixed 10-beat docket', () => {
    expect(REST_LAWS.map((l) => l.id)).toEqual(['rpc', 'naive', 'pure', 'hyper']);
    expect(REST_BEATS).toHaveLength(10);
    expect(REST_BEATS[2].i).toBe(3); // create
    expect(REST_BEATS[7].i).toBe(8); // the retry
    expect(REST_BEATS[6].ideal).toBe('DELETE /orders/7 → 204');
    expect(REST_BEATS.filter((b) => b.cacheable).map((b) => b.i)).toEqual([1, 2, 4, 9, 10]);
  });

  it('pins the rpc ledger: verb-in-body costs everything the protocol prices', () => {
    const s = restSummary('rpc');
    expect(s).toMatchObject({
      calls: 10, overBytes: 32, verbed: 10, wrongStatuses: 3, dups: 1, cacheForfeits: 5, links: 0,
    });
  });

  it('pins the naive ledger: improvisation is cheaper than rpc and still liar-grade', () => {
    const s = restSummary('naive');
    expect(s).toMatchObject({
      calls: 11, overBytes: 8, verbed: 3, wrongStatuses: 3, dups: 1, cacheForfeits: 1, links: 0,
    });
  });

  it('pins the pure and hypermedia ledgers: same bill, hyper buys discoverability', () => {
    expect(restSummary('pure')).toMatchObject({
      calls: 10, overBytes: 0, verbed: 0, wrongStatuses: 0, dups: 0, cacheForfeits: 0, links: 0,
    });
    expect(restSummary('hyper')).toMatchObject({ links: 10 });
    expect(restSummary('hyper').calls).toBe(10);
  });

  it('verdict chains per law are pinned exactly', () => {
    expect(restSteps('rpc').map((s) => s.verdict)).toEqual([
      'rpc-envelope', 'rpc-envelope', 'rpc-envelope', 'rpc-envelope', 'rpc-envelope',
      'rpc-envelope', 'rpc-envelope', 'dup-write', 'overfetch', 'overfetch',
    ]);
    expect(restSteps('naive').map((s) => s.verdict)).toEqual([
      'verbed', 'verbed', 'status-lie', 'clean', 'wrong-method',
      'semantics-bent', 'unsafe-get', 'dup-write', 'overfetch', 'underfetch',
    ]);
    expect(restSteps('pure').map((s) => s.verdict)).toEqual([
      'clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'clean', 'deduped', 'clean', 'clean',
    ]);
    expect(restSteps('hyper').map((s) => s.verdict)).toEqual(restSteps('pure').map((s) => s.verdict));
  });

  it('statuses are honest only under grammar laws (201 create / 204 delete / 201 deduped)', () => {
    const rpc = restSteps('rpc');
    expect(rpc[2].status).toBe(200);
    expect(rpc[2].honestStatus).toBe(201);
    expect(rpc[6].honestStatus).toBe(204);
    const pure = restSteps('pure');
    expect(pure[2].status).toBe(201);
    expect(pure[6].status).toBe(204);
    expect(pure[7].verdict).toBe('deduped');
    expect(restSteps('naive')[7].verdict).toBe('dup-write');
  });

  it('the naive extra call is exactly the underfetch debt of beat 10', () => {
    const n = restSteps('naive');
    expect(n[9].verdict).toBe('underfetch');
    expect(n[9].calls).toBe(11);
    // +1 normal beat, +1 underfetch debt: the only two-step jump in the series
    expect(n[9].calls - n[8].calls).toBe(2);
    expect(n[8].calls).toBe(9);
  });

  it('counters are monotone non-decreasing across every law', () => {
    for (const law of REST_LAWS) {
      const steps = restSteps(law.id);
      for (let i = 1; i < steps.length; i++) {
        for (const k of ['calls', 'overBytes', 'verbed', 'wrongStatuses', 'dups', 'cacheForfeits', 'links'] as const) {
          expect(steps[i][k]).toBeGreaterThanOrEqual(steps[i - 1][k]);
        }
      }
    }
  });

  it('cache forfeits occur only on cacheable beats — or on the one armed GET', () => {
    const naive = restSteps('naive');
    for (const s of naive) {
      if (!s.beat.cacheable && s.verdict !== 'unsafe-get') {
        const prev = naive[naive.indexOf(s) - 1];
        if (prev) expect(s.cacheForfeits - prev.cacheForfeits, `beat ${s.beat.i}`).toBe(0);
      }
    }
    // beat 7's unsafe-get is the naive law's single forfeit — side effect poisoning the cache
    expect(naive[6].verdict).toBe('unsafe-get');
    expect(naive[6].cacheForfeits).toBe(1);
  });

  it('overfetch bytes come only from beats 9 and 10', () => {
    for (const law of ['rpc', 'naive'] as const) {
      const s = restSteps(law);
      expect(s[8].overBytes).toBe(8);
      expect(restSummary(law).overBytes).toBe(law === 'rpc' ? 32 : 8);
    }
  });
});

describe('the rest hub content', () => {
  const CHAIN = [
    'the-resource-grammar',
    'the-payload-economy',
    'the-hierarchy-court',
    'the-transfer-altar',
    'the-problem-docket',
    'the-reading-window',
    'the-epoch-ledger',
    'the-link-bazaar',
    'the-contract-court',
  ];

  it('is published under the registry slug with the nine-lesson chain', () => {
    const hub = getHub('rest');
    expect(hub).toBeDefined();
    expect(hub!.name).toBe('REST');
    expect(hub!.lessons.map((l) => l.slug)).toEqual(CHAIN);
    for (let i = 0; i < CHAIN.length - 1; i++) {
      expect(hub!.lessons[i].nextLesson?.slug).toBe(CHAIN[i + 1]);
    }
    // the capstone chains onward into the graphql hub
    expect(hub!.lessons[8].nextLesson?.slug).toBe('the-schema-court');
    expect(hub!.lessons[8].nextLesson?.tech).toBe('graphql');
  });

  it('all nine lessons carry the house shape: 8 sections, one rest visual, bilingual throughout', () => {
    for (const slug of CHAIN) {
      const lesson = findLesson('rest', slug)!;
      expect(lesson).toBeDefined();
      const ids = lesson.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      for (const r of ['what', 'why', 'how', 'internal', 'result', 'debug', 'realworld', 'next']) {
        expect(ids, `${slug} missing section ${r}`).toContain(r);
      }
      expect(lesson.blocks.some((b) => b.type === 'visual' && (b as { id: string }).id === 'rest'), `${slug} must teach through the rest lab`).toBe(true);
      expect(lesson.exercises.length, `${slug} exercises`).toBeGreaterThanOrEqual(3);
      expect(lesson.quiz.questions.length, `${slug} quiz`).toBeGreaterThanOrEqual(5);
      expect(lesson.minutes).toBeGreaterThanOrEqual(18);
      expect(lesson.summary.en.length).toBeGreaterThan(80);
      expect(lesson.summary.bn.length).toBeGreaterThan(80);
    }
  });

  it('ships the hub shell: references, roadmap stages, projects, practices, interview, real world', () => {
    const hub = getHub('rest')!;
    expect(hub.references).toHaveLength(5);
    for (const g of hub.references ?? []) {
      const items = g.items ?? [];
      expect(items.length).toBeGreaterThanOrEqual(4);
      for (const item of items) {
        expect(item.term.length).toBeGreaterThan(3);
        expect(item.def.en.length).toBeGreaterThan(20);
        expect(item.def.bn.length).toBeGreaterThan(20);
      }
    }
    expect(hub.roadmap).toHaveLength(9);
    expect(hub.projects).toHaveLength(3);
    for (const p of hub.projects) {
      expect((p.brief?.en ?? '').length).toBeGreaterThan(60);
      expect((p.brief?.bn ?? '').length).toBeGreaterThan(60);
    }
    expect(hub.bestPractices.length).toBeGreaterThanOrEqual(8);
    expect(hub.interview).toHaveLength(5);
    expect(hub.realWorld).toHaveLength(8);
    expect(hub.intro!.en.length).toBeGreaterThan(200);
    expect(hub.intro!.bn.length).toBeGreaterThan(200);
  });

  it('assessment suite is bilingual and fully pinned', () => {
    for (const lesson of getHub('rest')!.lessons) {
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
