import { describe, expect, it } from 'vitest';
import { dsSteps, EVENTS, DS_SCENES, type DSScene, type DStep } from '../../components/visuals/distsysSim';
import { getHub, allLessons } from '../../content';

const SCENES: DSScene[] = ['naive', 'sloppy', 'majority', 'leader'];
const at = (steps: DStep[], i: number) => steps.find((s) => s.i === i)!;

describe('the distributed choir engine (dsy)', () => {
  it('offers the four laws, each with name + arc, bilingual', () => {
    for (const s of SCENES) {
      expect(DS_SCENES[s].name.en.length).toBeGreaterThan(2);
      expect(DS_SCENES[s].name.bn.length).toBeGreaterThan(1);
      expect(DS_SCENES[s].arc.en.length).toBeGreaterThan(40);
      expect(DS_SCENES[s].arc.bn.length).toBeGreaterThan(20);
      expect(DS_SCENES[s].law.length).toBeGreaterThan(8);
    }
  });

  it('the fate-line is 19 beats: walls at 4 and 16, healings at 9 and 17', () => {
    expect(EVENTS).toHaveLength(19);
    expect(EVENTS[3].t).toBe('F');
    expect(EVENTS[15].t).toBe('F');
    expect(EVENTS[8].t).toBe('H');
    expect(EVENTS[16].t).toBe('H');
    expect(new Set(EVENTS.map((e) => e.beat)).size).toBe(19);
    expect(EVENTS.filter((e) => e.t === 'W')).toHaveLength(6);
    expect(EVENTS.filter((e) => e.t === 'R')).toHaveLength(8);
  });

  it('every scene walks all 19 beats with bilingual narration and growing ledgers', () => {
    for (const sc of SCENES) {
      const steps = dsSteps(sc);
      expect(steps).toHaveLength(19);
      expect(steps[0].i).toBe(1);
      expect(steps[18].i).toBe(19);
      for (const s of steps) {
        expect(s.msg.en.length).toBeGreaterThan(25);
        expect(s.msg.bn.length).toBeGreaterThan(10);
        expect(s.nodes.A).toBeInstanceOf(Array);
        expect(s.nodes.B).toBeInstanceOf(Array);
        expect(s.nodes.C).toBeInstanceOf(Array);
      }
      const counters = ['writes', 'reads'] as const;
      for (const c of counters) {
        let prev = 0;
        for (const s of steps) {
          expect(s[c]).toBeGreaterThanOrEqual(prev);
          prev = s[c];
        }
      }
      expect(steps.at(-1)!.writes).toBe(6);
      expect(steps.at(-1)!.reads).toBe(8);
    }
  });

  it('outcome vocabulary stays sealed', () => {
    for (const sc of SCENES) {
      for (const s of dsSteps(sc)) {
        expect([
          'routine', 'accepted', 'stale-read', 'rejected', 'hinted', 'conflict',
          'lost-write', 'migrated', 'election', 'healed', 'partitioned',
          'crown-held', 'crown-moved', 'betrayed-read',
        ]).toContain(s.outcome);
      }
    }
  });

  it('naive: the parallel truths of i5/i6, the divergent lamp of i8, the burial of i9', () => {
    const st = dsSteps('naive');
    expect(at(st, 6).nodes.B).toContain('k1=2@7');
    expect(at(st, 8).outcome).toBe('stale-read');
    expect(at(st, 9).outcome).toBe('lost-write');
    expect(at(st, 9).nodes.B).toContain('k1=3@9'); // sibling overwritten
    expect(at(st, 9).lost).toBe(1);
    expect(at(st, 19).lost).toBe(1);
    expect(at(st, 19).conflicts).toBe(1);
    expect(at(st, 19).rejects).toBe(0); // the law never closes a door — that is its confession
    expect(at(st, 19).hints).toBe(0);
    expect(at(st, 17).outcome).toBe('migrated');
    expect(at(st, 10).nodes.C).toContain('k1=3@9'); // post-burial world agrees
  });

  it('sloppy: one hinted lodger, one stale window, one homecoming duel — zero refusals, zero burials', () => {
    const st = dsSteps('sloppy');
    expect(at(st, 6).outcome).toBe('hinted');
    expect(at(st, 6).hints).toBe(1);
    expect(at(st, 6).nodes.A.some((n) => n.includes('⌑'))).toBe(true);
    expect(at(st, 8).outcome).toBe('stale-read');
    expect(at(st, 9).outcome).toBe('conflict');
    expect(at(st, 9).nodes.B).toContain('k1=3@9');
    expect(at(st, 9).nodes.A.some((n) => n.includes('⌑'))).toBe(false); // lodger naturalized
    expect(at(st, 19).hints).toBe(1);
    expect(at(st, 19).rejects).toBe(0);
    expect(at(st, 19).lost).toBe(0);
    expect(at(st, 19).conflicts).toBe(1);
    expect(at(st, 19).migrations).toBe(2);
    // second wall: A sits with B,C — no minority scream there
    expect(at(st, 13).outcome).toBe('accepted');
    expect(at(st, 13).hints).toBe(1);
  });

  it('majority: exactly two refusals (i6 write, i8 read), and healings that migrate without duels', () => {
    const st = dsSteps('majority');
    expect(at(st, 6).outcome).toBe('rejected');
    expect(at(st, 8).outcome).toBe('rejected');
    expect(at(st, 19).rejects).toBe(2);
    expect(at(st, 9).outcome).toBe('migrated');
    expect(at(st, 17).outcome).toBe('migrated');
    expect(at(st, 19).conflicts).toBe(0); // the whole point: no duel possible
    expect(at(st, 19).lost).toBe(0);
    expect(at(st, 19).stales).toBe(0);
    expect(at(st, 19).hints).toBe(0);
    // i13/i14: A beside B,C — accepted and read routinely (regression: firstWall bleed)
    expect(at(st, 13).outcome).toBe('accepted');
    expect(at(st, 13).nodes.A).toContain('k2=5@14');
    expect(at(st, 14).outcome).toBe('routine');
    expect(at(st, 3).outcome).toBe('routine'); // before any wall, no refusal
  });

  it('leader: the crown held at i11, stepped silently at i16, moved at i17, and the betrayed lamp at i19', () => {
    const st = dsSteps('leader');
    expect(at(st, 6).outcome).toBe('rejected'); // uncrowned side: the wall mutes A from the crown
    expect(at(st, 6).nodes.A).not.toContain('k1=3@9'); // A never saw it — the refusal was real
    expect(at(st, 1).leader).toBe('B');
    expect(at(st, 11).outcome).toBe('crown-held');
    expect(at(st, 16).outcome).toBe('partitioned');
    expect(at(st, 16).leader).toBe('—');
    expect(at(st, 16).elections).toBe(1);
    expect(at(st, 17).outcome).toBe('election');
    expect(at(st, 17).leader).toBe('C');
    expect(at(st, 17).elections).toBe(1);
    expect(at(st, 18).outcome).toBe('rejected');
    expect(at(st, 18).rejects).toBe(3); // i6 + i8 (first wall) + i18 (deposed crown attempt)
    expect(at(st, 18).nodes.C).toContain('k1=4@16'); // the retry landed on the true crown
    expect(at(st, 19).outcome).toBe('betrayed-read');
    expect(at(st, 19).stales).toBe(1);
    expect(at(st, 8).outcome).toBe('rejected'); // A cannot even ask the crown
    expect(at(st, 19).msg.en).toContain('2@7'); // B serves yesterday's log, world holds 4@16
    expect(at(st, 19).leader).toBe('C');
    // first wall: A hears the crown from afar — accepted, no minority scream
    expect(at(st, 6).outcome).toBe('rejected'); // uncrowned side: the wall mutes A from the crown
    expect(at(st, 6).nodes.A).not.toContain('k1=3@9'); // A never saw it — the refusal was real
  });

  it('contrast pin: who closes doors, who buries truths, who lodges hints', () => {
    expect(at(dsSteps('naive'), 19).rejects).toBe(0);   // doors always open
    expect(at(dsSteps('naive'), 19).lost).toBe(1);      // …and someone pays at the burial
    expect(at(dsSteps('sloppy'), 19).hints).toBe(1);    // lodgers, no refusals
    expect(at(dsSteps('sloppy'), 19).lost).toBe(0);
    expect(at(dsSteps('majority'), 19).rejects).toBe(2);// doors closed honestly
    expect(at(dsSteps('majority'), 19).lost).toBe(0);   // …so no one buries anything
  });
});

describe('the distributed-systems hub content', () => {
  it('is published under the registry slug with the eight-lesson chain', () => {
    const hub = getHub('distributed-systems')!;
    expect(hub.name).toBe('Distributed Systems');
    expect(hub.lessons.map((l) => l.slug)).toEqual(['the-partition-ledger', 'the-consensus-choir', 'the-replication-log', 'the-consistency-menu', 'time-without-clocks', 'the-gossip-parish', 'the-two-phase-duel', 'distributed-systems-capstone']);
    expect(hub.lessons[0].nextLesson?.slug).toBe('the-consensus-choir');
    expect(hub.lessons[1].nextLesson?.slug).toBe('the-replication-log');
    expect(hub.lessons[2].nextLesson?.slug).toBe('the-consistency-menu');
    expect(hub.lessons[3].nextLesson?.slug).toBe('time-without-clocks');
    expect(hub.lessons[4].nextLesson?.slug).toBe('the-gossip-parish');
    expect(hub.lessons[5].nextLesson?.slug).toBe('the-two-phase-duel');
    expect(hub.lessons[6].nextLesson?.slug).toBe('distributed-systems-capstone');
    expect(hub.lessons[7].nextLesson).toBeUndefined(); // the treaty desk signs last — the choir dismisses its own singers
  });

  it('all eight lessons teach through the dsy lab and carry the 9-heading house shape', () => {
    const hub = getHub('distributed-systems')!;
    for (const l of hub.lessons) {
      const ids = l.blocks.filter((b) => b.type === 'heading').map((b) => (b as { id: string }).id);
      const visualBlocks = l.blocks.filter((b) => b.type === 'visual');
      expect(visualBlocks.length).toBeGreaterThanOrEqual(1);
      expect(ids).toEqual(['what', 'why', 'how', 'visual', 'internal', 'result', 'debug', 'realworld', 'next']);
    }
  });

  it('ships the hub shell: references, roadmap stages, projects, best practices, interview, real world', () => {
    const hub = getHub('distributed-systems')!;
    expect((hub.references ?? []).length).toBe(2);
    expect(hub.roadmap.length).toBe(4);
    expect(hub.projects.length).toBe(3);
    expect(hub.bestPractices.length).toBeGreaterThanOrEqual(6);
    expect(hub.interview.length).toBe(4);
    expect(hub.realWorld.length).toBe(4);
    expect(hub.intro?.en.length).toBeGreaterThan(200);
    expect(hub.intro?.bn.length).toBeGreaterThan(200);
  });

  it('assessment suite is bilingual and fully pinned', () => {
    const [l1, l2, l3, l4, l5, l6, l7, l8] = getHub('distributed-systems')!.lessons;
    expect(l1.exercises.map((e) => e.id)).toEqual(['dsy-ex1', 'dsy-ex2', 'dsy-ex3']);
    expect(l2.exercises.map((e) => e.id)).toEqual(['dsy-ce1', 'dsy-ce2', 'dsy-ce3']);
    expect(l3.exercises.map((e) => e.id)).toEqual(['dsy3-ex1', 'dsy3-ex2', 'dsy3-ex3']);
    expect(l4.exercises.map((e) => e.id)).toEqual(['dsy4-ex1', 'dsy4-ex2', 'dsy4-ex3']);
    expect(l5.exercises.map((e) => e.id)).toEqual(['dsy5-ex1', 'dsy5-ex2', 'dsy5-ex3']);
    expect(l6.exercises.map((e) => e.id)).toEqual(['dsy6-ex1', 'dsy6-ex2', 'dsy6-ex3']);
    expect(l7.exercises.map((e) => e.id)).toEqual(['dsy7-ex1', 'dsy7-ex2', 'dsy7-ex3']);
    expect(l8.exercises.map((e) => e.id)).toEqual(['dsy8-ex1', 'dsy8-ex2', 'dsy8-ex3']);
    expect(l1.quiz.questions).toHaveLength(5);
    expect(l2.quiz.questions).toHaveLength(5);
    expect(l3.quiz.questions).toHaveLength(5);
    expect(l4.quiz.questions).toHaveLength(5);
    expect(l5.quiz.questions).toHaveLength(5);
    expect(l6.quiz.questions).toHaveLength(5);
    expect(l7.quiz.questions).toHaveLength(5);
    expect(l8.quiz.questions).toHaveLength(5);
    // every distributed-systems lesson across the registry stays registered
    expect(allLessons().filter((l) => l.tech === 'distributed-systems')).toHaveLength(8);
  });
});
