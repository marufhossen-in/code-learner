import { describe, expect, it } from 'vitest';
import { GQL_BEATS, GQL_LAWS, gqlSteps, gqlSummary } from '../../components/visuals/graphqlSim';
import { getHub, allLessons } from '../../content';

describe('the graphql lab engine', () => {
  it('ships exactly four laws and a fixed 8-beat docket', () => {
    expect(GQL_LAWS.map((l) => l.id)).toEqual(['naive', 'batched', 'budgeted', 'cached']);
    expect(GQL_BEATS).toHaveLength(8);
    expect(GQL_BEATS[4].i).toBe(5); // the depth bomb
    expect(GQL_BEATS[4].query).toContain('friends');
    expect(GQL_BEATS[5].query).toContain('mutation');
    expect(GQL_BEATS[6].query).toContain('GetOrderHistory');
  });

  it('pins the forager ledger: honest resolvers, blind gate — 537 queries', () => {
    expect(gqlSummary('naive')).toMatchObject({
      dbQueries: 537, cacheHits: 0, rejected: 0, namedOps: 0, partialErrors: 1, bytesSent: 1350, maxDepth: 8,
    });
  });

  it('pins the batcher ledger: N+1 collapsed, but blind gate + full-text bytes', () => {
    expect(gqlSummary('batched')).toMatchObject({
      dbQueries: 23, cacheHits: 0, rejected: 0, namedOps: 0, bytesSent: 1350, maxDepth: 8,
    });
  });

  it('pins the gatekeeper ledger: the bomb dies at the gate — 15 queries, 160 bytes', () => {
    expect(gqlSummary('budgeted')).toMatchObject({
      dbQueries: 15, cacheHits: 0, rejected: 1, namedOps: 1, bytesSent: 160, maxDepth: 3,
    });
  });

  it('pins the librarian ledger: two shelf hits bring the database to 9', () => {
    expect(gqlSummary('cached')).toMatchObject({
      dbQueries: 9, cacheHits: 2, rejected: 1, namedOps: 1, bytesSent: 160, maxDepth: 3,
    });
  });

  it('verdict chains per law are pinned exactly', () => {
    expect(gqlSteps('naive').map((s) => s.verdict)).toEqual([
      'resolved', 'resolved', 'n-plus-one', 'n-plus-one', 'depth-bomb-executed', 'partial-error', 'anonymous-op', 'n-plus-one',
    ]);
    expect(gqlSteps('batched').map((s) => s.verdict)).toEqual([
      'resolved', 'resolved', 'batched', 'batched', 'depth-bomb-executed', 'partial-error', 'anonymous-op', 'batched',
    ]);
    expect(gqlSteps('budgeted').map((s) => s.verdict)).toEqual([
      'resolved', 'resolved', 'batched', 'batched', 'rejected', 'partial-error', 'named-op', 'persisted',
    ]);
    expect(gqlSteps('cached').map((s) => s.verdict)).toEqual([
      'resolved', 'resolved', 'batched', 'cache-hit', 'rejected', 'partial-error', 'named-op', 'cache-hit',
    ]);
  });

  it('the N+1 cascade arithmetic is pinned: beat 3 costs 7 naive / 3 batched / 3 everyone-else', () => {
    expect(gqlSteps('naive')[2].dbQueriesThisBeat).toBe(7);
    expect(gqlSteps('batched')[2].dbQueriesThisBeat).toBe(3);
    expect(gqlSteps('budgeted')[2].dbQueriesThisBeat).toBe(3);
    expect(gqlSteps('cached')[2].dbQueriesThisBeat).toBe(3);
  });

  it('the depth bomb costs 510 unbatched / 8 batched / 0 budgeted — and never executes under a ceiling', () => {
    expect(gqlSteps('naive')[4].dbQueriesThisBeat).toBe(510);
    expect(gqlSteps('batched')[4].dbQueriesThisBeat).toBe(8);
    expect(gqlSteps('budgeted')[4].dbQueriesThisBeat).toBe(0);
    expect(gqlSteps('cached')[4].dbQueriesThisBeat).toBe(0);
  });

  it('persisted IDs are the only text discipline: gate laws send 160 bytes, blind laws 1350', () => {
    expect(gqlSummary('naive').bytesSent).toBe(1350);
    expect(gqlSummary('batched').bytesSent).toBe(1350);
    expect(gqlSummary('budgeted').bytesSent).toBe(160);
    expect(gqlSummary('cached').bytesSent).toBe(160);
  });

  it('partial errors are law-independent: every school owes the errors[] shape', () => {
    for (const l of GQL_LAWS) {
      expect(gqlSummary(l.id).partialErrors).toBe(1);
      expect(gqlSteps(l.id)[5].verdict).toBe('partial-error');
    }
  });

  it('counters are monotone non-decreasing and cache hits only under the librarian', () => {
    for (const l of GQL_LAWS) {
      const steps = gqlSteps(l.id);
      for (let i = 1; i < steps.length; i++) {
        for (const k of ['dbQueries', 'cacheHits', 'rejected', 'namedOps', 'partialErrors', 'bytesSent'] as const) {
          expect(steps[i][k]).toBeGreaterThanOrEqual(steps[i - 1][k]);
        }
      }
      if (l.id !== 'cached') expect(gqlSummary(l.id).cacheHits).toBe(0);
    }
  });
});

describe('the graphql hub content', () => {
  const CHAIN = [
    'the-grain-interview',
    'the-trust-budget',
    'the-schema-court',
    'the-resolver-foundry',
    'the-mutation-chapel',
    'the-cache-gallery',
    'the-subscription-tide',
    'the-federation-court',
    'the-evolution-ledger',
  ];

  it('is published under the registry slug with the nine-lesson chain', () => {
    const hub = getHub('graphql')!;
    expect(hub.name).toBe('GraphQL');
    expect(hub.lessons.map((l) => l.slug)).toEqual(CHAIN);
    for (let i = 0; i < CHAIN.length - 1; i++) {
      expect(hub.lessons[i].nextLesson?.slug).toBe(CHAIN[i + 1]);
    }
    // the capstone chains onward into the security-fundamentals hub
    expect(hub.lessons[8].nextLesson?.slug).toBe('security-thinking');
    expect(hub.lessons[8].nextLesson?.tech).toBe('security-fundamentals');
  });

  it('all nine lessons carry the house shape: 8+ canonical sections, the gql visual, bilingual throughout', () => {
    const hub = getHub('graphql')!;
    for (const l of hub.lessons) {
      const ids = l.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      for (const r of ['what', 'why', 'how', 'internal', 'result', 'debug', 'realworld', 'next']) {
        expect(ids, `${l.slug} missing section ${r}`).toContain(r);
      }
      const visualBlocks = l.blocks.filter((b) => b.type === 'visual');
      expect(visualBlocks.length, `${l.slug} must teach through the lab`).toBeGreaterThanOrEqual(1);
      for (const b of visualBlocks) {
        expect((b as { id: string }).id).toBe('gql');
      }
      expect(l.title.en.length, `${l.slug} title`).toBeGreaterThan(3);
      expect(l.title.bn.length, `${l.slug} title`).toBeGreaterThan(3);
      expect(l.summary.en.length, `${l.slug} summary`).toBeGreaterThan(80);
      expect(l.summary.bn.length, `${l.slug} summary`).toBeGreaterThan(80);
      expect(l.minutes, `${l.slug} minutes`).toBeGreaterThanOrEqual(18);
    }
  });

  it('the staircase starts with the two legacy anchors and stays on the shared lab bench', () => {
    const hub = getHub('graphql')!;
    expect(hub.lessons[0].slug).toBe('the-grain-interview');
    expect(hub.lessons[1].slug).toBe('the-trust-budget');
    // the deep seven carry the fuller assessment bench
    for (const slug of CHAIN.slice(2)) {
      const lesson = hub.lessons.find((l) => l.slug === slug)!;
      const extra = lesson.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id).filter((id) => id.startsWith('how-'));
      expect(extra.length, `${slug} needs its how- gallery section`).toBeGreaterThanOrEqual(1);
    }
  });

  it('ships the hub shell: references, roadmap stages, projects, practices, interview, real world', () => {
    const hub = getHub('graphql')!;
    expect((hub.references ?? []).length).toBe(5);
    for (const g of hub.references ?? []) {
      const items = g.items ?? [];
      expect(items.length).toBeGreaterThanOrEqual(4);
      for (const item of items) {
        expect(item.term.length).toBeGreaterThan(3);
        expect(item.def.en.length).toBeGreaterThan(20);
        expect(item.def.bn.length).toBeGreaterThan(20);
      }
    }
    expect(hub.roadmap.length).toBe(9);
    expect(hub.projects.length).toBe(3);
    for (const p of hub.projects) {
      expect((p.brief?.en ?? '').length).toBeGreaterThan(60);
      expect((p.brief?.bn ?? '').length).toBeGreaterThan(60);
    }
    expect(hub.bestPractices.length).toBeGreaterThanOrEqual(6);
    expect(hub.interview.length).toBe(4);
    expect(hub.realWorld.length).toBe(4);
    expect(hub.intro!.en.length).toBeGreaterThan(200);
    expect(hub.intro!.bn.length).toBeGreaterThan(200);
  });

  it('assessment suite is bilingual and fully pinned across the bench', () => {
    const hub = getHub('graphql')!;
    for (const l of hub.lessons) {
      expect(l.exercises.length, `${l.slug} exercises`).toBeGreaterThanOrEqual(3);
      expect(l.quiz.questions.length, `${l.slug} quiz`).toBeGreaterThanOrEqual(5);
      for (const ex of [...l.exercises, ...l.quiz.questions]) {
        expect(ex.question.en.length).toBeGreaterThan(10);
        expect(ex.question.bn.length).toBeGreaterThan(10);
        expect(ex.explanation.en.length).toBeGreaterThan(20);
        expect(ex.explanation.bn.length).toBeGreaterThan(20);
        if (ex.options) {
          expect(ex.options.length).toBeGreaterThanOrEqual(3);
          expect(typeof ex.answer).toBe('number');
          expect(ex.answer).toBeGreaterThanOrEqual(0);
          for (const o of ex.options) {
            expect(o.en.length).toBeGreaterThan(2);
            expect(o.bn.length).toBeGreaterThan(2);
          }
        }
      }
    }
    expect(allLessons().filter((l) => l.tech === 'graphql')).toHaveLength(9);
  });
});
