import { describe, it, expect } from 'vitest';
import { httpSteps, BEATS, HTTP_SCENES, type HttpScene, type HttpStep } from '../../components/visuals/httpSim';
import { getHub, allLessons } from '../../content';

const SCENES: HttpScene[] = ['naive', 'conditional', 'layered', 'strict'];
const at = (steps: HttpStep[], i: number) => steps.find((s) => s.i === i)!;

describe('the envelope ledger engine (http)', () => {
  it('offers four client laws, each with bilingual name + arc', () => {
    expect(Object.keys(HTTP_SCENES).sort()).toEqual([...SCENES].sort());
    for (const s of SCENES) {
      expect(HTTP_SCENES[s].name.en.length).toBeGreaterThan(3);
      expect(HTTP_SCENES[s].name.bn.length).toBeGreaterThan(3);
      expect(HTTP_SCENES[s].arc.en.length).toBeGreaterThan(40);
      expect(HTTP_SCENES[s].arc.bn.length).toBeGreaterThan(40);
    }
  });

  it('walks one fixed 12-beat conversation for every law', () => {
    expect(BEATS).toHaveLength(12);
    expect(BEATS.map((b) => b.i)).toEqual(Array.from({ length: 12 }, (_, k) => k + 1));
    for (const s of SCENES) {
      expect(httpSteps(s)).toHaveLength(12);
      expect(at(httpSteps(s), 12).requests).toBe(12);
    }
  });

  it('verdict vocabulary stays sealed and counters never decrease', () => {
    for (const s of SCENES) {
      const steps = httpSteps(s);
      const allowed = new Set([
        'fresh-fetch', 'refetch', 'not-modified', 'cache-hit', 'redirect',
        'method-rewritten', 'method-kept', 'challenge', 'retried', 'served',
      ]);
      for (const [k, st] of steps.entries()) {
        expect(allowed.has(st.verdict)).toBe(true);
        if (k > 0) {
          const p = steps[k - 1];
          expect(st.originHits).toBeGreaterThanOrEqual(p.originHits);
          expect(st.originBytes).toBeGreaterThanOrEqual(p.originBytes);
          expect(st.revalidations).toBeGreaterThanOrEqual(p.revalidations);
        }
      }
    }
  });

  it('naive: amnesia pays full postage — every beat is an origin trip', () => {
    const st = httpSteps('naive');
    const f = at(st, 12);
    expect(f.originHits).toBe(12);
    expect(f.originBytes).toBe(122300);
    expect(f.cacheHits).toBe(0);
    expect(f.revalidations).toBe(0);
    expect(f.notModified).toBe(0);
    // the second style.css knock takes all 8,000 bytes again
    expect(at(st, 5).verdict).toBe('refetch');
    expect(at(st, 5).seenStatus).toBe(200);
    // and the second logo knock, 45,000 more
    expect(at(st, 12).verdict).toBe('refetch');
  });

  it('conditional: two If-None-Match envelopes, two 304 answers, zero body bytes', () => {
    const st = httpSteps('conditional');
    const f = at(st, 12);
    expect(f.originHits).toBe(12); // the origin always answers
    expect(f.originBytes).toBe(69300); // but twice with nothing inside
    expect(f.revalidations).toBe(2);
    expect(f.notModified).toBe(2);
    expect(at(st, 5).seenStatus).toBe(304);
    expect(at(st, 5).askHeaders).toContainEqual({ k: 'If-None-Match', v: '"css-v7"' });
    expect(at(st, 12).askHeaders).toContainEqual({ k: 'If-None-Match', v: '"logo9"' });
    expect(at(st, 12).fromCache).toBe(false); // validator ≠ freshness law
  });

  it('layered: freshness arithmetic honored — beat 12 never reaches the origin', () => {
    const st = httpSteps('layered');
    const f = at(st, 12);
    expect(f.originHits).toBe(11);
    expect(f.cacheHits).toBe(1);
    expect(at(st, 12).verdict).toBe('cache-hit');
    expect(at(st, 12).fromCache).toBe(true);
    // stale style.css (the 60s lease died) goes through If-None-Match once → 304
    expect(at(st, 5).verdict).toBe('not-modified');
    expect(f.revalidations).toBe(1);
  });

  it('strict: same freshness discipline, but the POST is never demoted', () => {
    const st = httpSteps('strict');
    const f = at(st, 12);
    expect(f.rewrites).toBe(0);
    expect(at(st, 8).verdict).toBe('method-kept');
    expect(at(st, 9).verdict).toBe('method-kept');
    expect(at(st, 9).requestMethod).toBe('POST (kept)');
    expect(f.originHits).toBe(11);
    expect(f.cacheHits).toBe(1);
  });

  it('everyone else inherits the legacy 302 rewrite: POST → GET at the border', () => {
    for (const s of ['naive', 'conditional', 'layered'] as const) {
      const st = httpSteps(s);
      expect(at(st, 8).verdict).toBe('method-rewritten');
      expect(at(st, 9).requestMethod).toBe('GET (rewritten)');
    }
  });

  it('the 401 is a doorway, not an error: challenge → credentialed retry → 200', () => {
    for (const s of SCENES) {
      const st = httpSteps(s);
      expect(at(st, 10).verdict).toBe('challenge');
      expect(at(st, 10).seenStatus).toBe(401);
      expect(at(st, 10).beat.headers[0].k).toBe('WWW-Authenticate');
      expect(at(st, 11).verdict).toBe('retried');
      expect(at(st, 11).seenStatus).toBe(200);
      expect(at(st, 12).challenges).toBe(1);
    }
  });

  it('the contrast pin: who buys bandwidth back and how', () => {
    expect(at(httpSteps('naive'), 12).originBytes).toBe(122300);
    expect(at(httpSteps('conditional'), 12).originBytes).toBe(69300);
    expect(at(httpSteps('layered'), 12).originBytes).toBe(69300);
    expect(at(httpSteps('strict'), 12).originBytes).toBe(69300);
    // …but layered/strict paid one fewer origin trip than the validator
    expect(at(httpSteps('layered'), 12).originHits).toBe(11);
    expect(at(httpSteps('conditional'), 12).originHits).toBe(12);
  });

  it('both redirects are followed exactly once each', () => {
    for (const s of SCENES) expect(at(httpSteps(s), 12).redirects).toBe(2);
  });
});

describe('the http hub content', () => {
  const CHAIN = [
    'the-verb-ledger',
    'the-freshness-exchange',
    'the-header-court',
    'the-negotiation-salon',
    'the-cookie-jar',
    'the-credential-tribunal',
    'the-partial-ledger',
    'the-redirect-bench',
    'the-idempotency-bench',
  ];

  it('is published under the registry slug with the nine-lesson chain', () => {
    const hub = getHub('http')!;
    expect(hub.name).toBe('HTTP');
    expect(hub.lessons.map((l) => l.slug)).toEqual(CHAIN);
    for (let i = 0; i < CHAIN.length - 1; i++) {
      expect(hub.lessons[i].nextLesson?.slug).toBe(CHAIN[i + 1]);
    }
    // the capstone chains onward into the rest hub
    expect(hub.lessons[8].nextLesson?.slug).toBe('the-resource-grammar');
    expect(hub.lessons[8].nextLesson?.tech).toBe('rest');
  });

  it('all nine lessons carry the house shape: 8 sections, one visual, bilingual throughout', () => {
    const hub = getHub('http')!;
    for (const l of hub.lessons) {
      const ids = l.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      for (const r of ['what', 'why', 'how', 'internal', 'result', 'debug', 'realworld', 'next']) {
        expect(ids, `${l.slug} missing section ${r}`).toContain(r);
      }
      const visualBlocks = l.blocks.filter((b) => b.type === 'visual');
      expect(visualBlocks.length, `${l.slug} must teach through the lab`).toBeGreaterThanOrEqual(1);
      expect(l.title.en.length, `${l.slug} title`).toBeGreaterThan(3);
      expect(l.title.bn.length, `${l.slug} title`).toBeGreaterThan(3);
      expect(l.summary.en.length, `${l.slug} summary`).toBeGreaterThan(80);
      expect(l.summary.bn.length, `${l.slug} summary`).toBeGreaterThan(80);
    }
  });

  it('ships the hub shell: references, roadmap stages, projects, practices, interview, real world', () => {
    const hub = getHub('http')!;
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
    expect(hub.bestPractices.length).toBeGreaterThanOrEqual(8);
    expect(hub.interview.length).toBe(5);
    expect(hub.realWorld.length).toBe(8);
  });

  it('assessment suite is bilingual and fully pinned across the bench', () => {
    const hub = getHub('http')!;
    for (const l of hub.lessons) {
      expect(l.exercises.length, `${l.slug} exercises`).toBeGreaterThanOrEqual(3);
      expect(l.quiz.questions.length, `${l.slug} quiz`).toBeGreaterThanOrEqual(5);
    }
    expect(allLessons().filter((l) => l.tech === 'http')).toHaveLength(9);
  });

  it('the staircase starts with the two legacy anchors and stays on the http visual bench', () => {
    const hub = getHub('http')!;
    expect(hub.lessons[0].slug).toBe('the-verb-ledger');
    expect(hub.lessons[1].slug).toBe('the-freshness-exchange');
    for (const l of hub.lessons) {
      for (const b of l.blocks.filter((b) => b.type === 'visual')) {
        expect((b as { id: string }).id).toBe('http');
        const scenario = (b as { scenario?: string }).scenario;
        expect([undefined, 'header-court', 'negotiation', 'cookie-jar']).toContain(scenario);
      }
    }
  });
});
