/**
 * Distributed Systems tribunal simulator (`dsy`): three nodes — Asha (A), Bala (B), Cara (C) —
 * answer one fixed fate-line of writes, reads and partitions under four consistency laws.
 *  Scenes:
 *   - naive:    accept-anywhere, last-write-wins by wall clock. Available everywhere, truthful nowhere.
 *   - sloppy:   W=2+R=2 with hinted handoff — the minority side takes "temporary lodgers"
 *               that the envelope may lose on the way home.
 *   - majority: strict W=2+R=2 over 3 — the minority is politely refused; no lies, but doors close.
 *   - leader:   the crown of Bala — one primary, fresh reads, and a succession exam in the minority.
 * Semantics chosen (and pinned by tests):
 *   - Partition (B,C)|A at i4; heal at i9. B side = hosts B,C; A side = host A.
 *   - naive:  both sides accept; on heal the higher clock wins; the losing sibling is a LOST WRITE.
 *   - sloppy: minority-side write lands locally + as a marked hint ⌑ (durability risk); R=2
 *        there reads local+hint; on the B side everything is routine quorum.
 *   - majority: minority-side ops are rejected outright; heal counts MIGRATIONS, never conflicts.
 *   - leader:  at i11 the crown sits in the majority (B,C) → B holds it; at i16 partition A|B,C
 *        strands the crown → succession: C crowned at i17; i18's crowned-side write is a SPLIT
 *        (no quorum lease yet, refused-close); i19's read on the B side is betrayed-stale.
 */

export type DSScene = 'naive' | 'sloppy' | 'majority' | 'leader';

export interface DEvent {
  beat: number;                       // 1..19
  t: 'W' | 'R' | 'F' | 'H' | 'N';     // write, read, partition(F for fault-line), heal, note (election marker)
  key?: string;
  val?: string;
  side?: 'bala' | 'asha';             // whose side of the wall the client stands on ('bala' = hosts B,C)
  clock?: number;                     // wall clock stamp for LWW
  label: { en: string; bn: string };
}

export type ClusterHalf = 'both' | 'bala' | 'asha';

export type NodeNote = string; // e.g. 'k1=3@9 ✓' or '⌑ k2=5@13'

export interface DStep {
  i: number;
  ev: DEvent;
  side: ClusterHalf;                  // who can presently talk (after this beat)
  outcome: 'routine' | 'accepted' | 'stale-read' | 'rejected' | 'hinted' | 'conflict' | 'lost-write' | 'migrated' | 'election' | 'healed' | 'partitioned' | 'crown-held' | 'crown-moved' | 'betrayed-read';
  nodes: { A: NodeNote[]; B: NodeNote[]; C: NodeNote[] };
  leader?: 'A' | 'B' | 'C' | '—';
  writes: number; reads: number; stales: number; rejects: number; hints: number; lost: number; conflicts: number; migrations: number; elections: number;
  msg: { en: string; bn: string };
  note?: { en: string; bn: string };
}

export const EVENTS: DEvent[] = [
  { beat: 1, t: 'W', key: 'k1', val: '1', side: 'bala', clock: 3, label: { en: 'W k1 ← 1 (from the B side)', bn: 'W k1 ← 1 (B-পার্শ্ব থেকে)' } },
  { beat: 2, t: 'R', key: 'k1', side: 'bala', label: { en: 'R k1 (B side)', bn: 'R k1 (B-পার্শ্ব)' } },
  { beat: 3, t: 'R', key: 'k1', side: 'asha', label: { en: 'R k1 (A side)', bn: 'R k1 (A-পার্শ্ব)' } },
  { beat: 4, t: 'F', label: { en: 'PARTITION: Chapter wall falls — B,C one side, A alone', bn: 'পার্টিশন: অধ্যায়-প্রাচীর পড়ে গেল — B,C একপার্শ্ব, A একা' } },
  { beat: 5, t: 'W', key: 'k1', val: '2', side: 'bala', clock: 7, label: { en: 'W k1 ← 2 @clock7 (B side)', bn: 'W k1 ← 2 @ক্লক৭ (B-পার্শ্ব)' } },
  { beat: 6, t: 'W', key: 'k1', val: '3', side: 'asha', clock: 9, label: { en: 'W k1 ← 3 @clock9 (A side) — A cannot hear B', bn: 'W k1 ← 3 @ক্লক৯ (A-পার্শ্ব) — A, B-কে শুনতে পাচ্ছে না' } },
  { beat: 7, t: 'R', key: 'k1', side: 'bala', label: { en: 'R k1 (B side)', bn: 'R k1 (B-পার্শ্ব)' } },
  { beat: 8, t: 'R', key: 'k1', side: 'asha', label: { en: 'R k1 (A side) — whose truth do you hear?', bn: 'R k1 (A-পার্শ্ব) — কার সত্য শুনছ?' } },
  { beat: 9, t: 'H', label: { en: 'HEAL: the wall lifts, the siblings meet again', bn: 'নিরাময়: প্রাচীর ওঠে, সহোদরেরা পুনর্মিলিত' } },
  { beat: 10, t: 'R', key: 'k1', side: 'bala', label: { en: 'R k1 (B side) — post-heal reckoning', bn: 'R k1 (B-পার্শ্ব) — নিরাময়-পরবর্তী হিসাব' } },
  { beat: 11, t: 'W', key: 'k2', val: '9', side: 'bala', clock: 12, label: { en: 'W k2 ← 9 (B side, wide world)', bn: 'W k2 ← 9 (B-পার্শ্ব, উন্মুক্ত জগত)' } },
  { beat: 12, t: 'R', key: 'k2', side: 'asha', label: { en: 'R k2 (A side)', bn: 'R k2 (A-পার্শ্ব)' } },
  { beat: 13, t: 'W', key: 'k2', val: '5', side: 'asha', clock: 14, label: { en: 'W k2 ← 5 @clock14 (A side, petite world)', bn: 'W k2 ← 5 @ক্লক১৪ (A-পার্শ্ব, ক্ষুদ্র জগত)' } },
  { beat: 14, t: 'R', key: 'k2', side: 'asha', label: { en: 'R k2 (A side)', bn: 'R k2 (A-পার্শ্ব)' } },
  { beat: 15, t: 'N', label: { en: 'NOTE: second act — the leader law takes the bench', bn: 'টীকা: দ্বিতীয় অঙ্ক — নেতা-বিধান আসীন' } },
  { beat: 16, t: 'F', label: { en: 'PARTITION: B alone now, A,C together — the crown stranded in the minority', bn: 'পার্টিশন: B এখন একা, A,C একসাথে — মুকুট সংখ্যালঘুতে আটকে গেল' } },
  { beat: 17, t: 'H', label: { en: 'HEAL: full reunion', bn: 'নিরাময়: পূর্ণ পুনর্মিলন' } },
  { beat: 18, t: 'W', key: 'k1', val: '4', side: 'bala', clock: 16, label: { en: 'W k1 ← 4 (B side, wide world)', bn: 'W k1 ← 4 (B-পার্শ্ব, উন্মুক্ত জগত)' } },
  { beat: 19, t: 'R', key: 'k1', side: 'bala', label: { en: 'R k1 (B side) — the final answer', bn: 'R k1 (B-পার্শ্ব) — চূড়ান্ত উত্তর' } },
];

export const DS_SCENES: Record<DSScene, { name: { en: string; bn: string }; arc: { en: string; bn: string }; law: string }> = {
  naive: {
    name: { en: 'Naive LWW', bn: 'নিরীক্ষ LWW' },
    law: 'accept anywhere · higher clock wins · losers silently buried',
    arc: {
      en: 'Every door is always open — and every lamp occasionally lies. During the wall, both sides write k1; at the reunion, the higher wall-clock wins and the other write is buried without ceremony.',
      bn: 'প্রতিটি দরজা সবসময় খোলা — আর মাঝে মাঝে প্রতিটি প্রদীপ মিথ্যা বলে। প্রাচীরের ফাঁকে দুই পার্শ্বেই k1 লেখে; পুনর্মিলনে বড় প্রাচীর-ঘড়ি জেতে, আর অন্য লেখা অনুষ্ঠান-ছাড়াই সমাহিত হয়।',
    },
  },
  sloppy: {
    name: { en: 'Sloppy Quorum', bn: 'ঢিলা কোরাম' },
    law: 'W=2+R=2 of 3 · hinted handoff ⌑ · lodgers may die in transit',
    arc: {
      en: 'The quorum cannot be met on A’s side, so the write takes temporary lodgers: one real copy, one marked hint ⌑. Available everywhere, mostly honest — but the envelope can lose the hint on the way home.',
      bn: 'A-পার্শ্বে কোরাম জমে না, তাই লেখা নেয় অস্থায়ী আতিথ্য: একটি প্রকৃত অনুলিপি, একটি চিহ্নিত ইঙ্গিত ⌑। সর্বত্র উপলব্ধ, প্রায়-সৎ — কিন্তু খামটি পথে ইঙ্গিত হারাতে পারে।',
    },
  },
  majority: {
    name: { en: 'Strict Majority', bn: 'কঠোর সংখ্যাগরিষ্ঠ' },
    law: 'W=2+R=2 of 3, no lodgers · minority refused · heal is a migration, never a duel',
    arc: {
      en: 'Only the side that can summon two of three may accept. A’s side hears a polite refusal; the price is closed doors in the minority, the prize is that the healing day has zero duels.',
      bn: 'কেবল সেই পার্শ্ব গ্রহণ করতে পারে যা তিনের দুই ডাকতে পারে। A-পার্শ্ব শোনে বিনীত প্রত্যাখ্যান; মূল্য সংখ্যালঘুতে বন্ধ দরজা, পুরস্কার নিরাময়-দিবসে শূন্য দ্বন্দ্বযুদ্ধ।',
    },
  },
  leader: {
    name: { en: 'Single Leader', bn: 'একক নেতা' },
    law: 'one crown · reads ride the crown · minority crown falls; succession is an exam',
    arc: {
      en: 'Bala wears the crown: every write and read must cross crowned territory. When the wall strands the crown alone-ish, the majority side runs a succession exam — and the betrayed lamp on the wrong side of i19 tells the cost.',
      bn: 'বলার মাথায় মুকুট: প্রতি লেখা ও পাঠ অর্পণ করতে হবে মুকুটধারী ভূখণ্ডে। প্রাচীর মুকুটকে একাকী-প্রায় ফেললে সংখ্যাগরিষ্ঠ পার্শ্ব পরিচালনায় উত্তরাধিকার-পরীক্ষা — আর i19-এর বিশ্বাসঘাত-প্রদীপ বলে দেয় মূল্যটা।',
    },
  },
};

interface Nodes { A: Nut; B: Nut; C: Nut }
type Nut = Map<string, { val: string; clock: number; hint?: boolean }>;

const fresh = (): Nodes => ({ A: new Map(), B: new Map(), C: new Map() });

function snap(n: Nodes, markHints: boolean): DStep['nodes'] {
  const dump = (m: Nut): NodeNote[] => [...m.entries()].map(([k, v]) => `${k}=${v.val}@${v.clock}${v.hint && markHints ? ' ⌑' : ''}`);
  return { A: dump(n.A), B: dump(n.B), C: dump(n.C) };
}

/** Replicate a write to every host currently on `side`.
 *  minority hint: if `hintOnMinority` and side==='asha' (only A reachable of 3), the second
 *  copy goes down as a hinted lodger on A itself, marked ⌑. */
function writeTo(n: Nodes, hosts: ('A' | 'B' | 'C')[], key: string, val: string, clock: number, hostsWithHint: ('A' | 'B' | 'C')[]) {
  for (const h of hosts) n[h].set(key, { val, clock, hint: hostsWithHint.includes(h) });
}

type DCounters = Pick<DStep, 'writes' | 'reads' | 'stales' | 'rejects' | 'hints' | 'lost' | 'conflicts' | 'migrations' | 'elections'>;

const bump = (s: DCounters, k: keyof DCounters) => { s[k] += 1; };

export function dsSteps(scene: DSScene): DStep[] {
  const n = fresh();
  const steps: DStep[] = [];
  const counters: DCounters = { writes: 0, reads: 0, stales: 0, rejects: 0, hints: 0, lost: 0, conflicts: 0, migrations: 0, elections: 0 };
  let side: ClusterHalf = 'both';
  let leader: DStep['leader'] = scene === 'leader' ? 'B' : '—';
  let lostK1Dot2 = false;   // naive: the buried sibling
  let leaderSuccessionStaged = false;
  let healAtNine = false;   // set at the beat-4 fault line: the i9 heal is (B,C)|A business
  let firstWall = false;    // true only between i4 and the i9 heal (the (B,C)|A wall); the i16 wall strands A alone

  const row = (i: number, ev: DEvent, outcome: DStep['outcome'], msg: DStep['msg'], extra?: Partial<DStep>): DStep => {
    const s: DStep = { i, ev, side, outcome, nodes: snap(n, true), leader, ...counters, msg, ...extra };
    steps.push(s);
    return s;
  };

  for (const ev of EVENTS) {
    const i = ev.beat;
    if (ev.t === 'N') { row(i, ev, 'routine', { en: 'The bench changes: the leader law enters, wearing one crown.', bn: 'আসন বদলায়: নেতা-বিধান প্রবেশ করে, মাথায় একটি মুকুট।' }); continue; }

    if (ev.t === 'F') {
      if (i === 4) { healAtNine = true; side = 'bala'; firstWall = true; } else { side = 'asha'; firstWall = false; } // i4: (B,C)|A wall; i16: A|(B,C) wall
      const wall = i === 4 ? 'B,C | A' : 'A | B,C';
      row(i, ev, 'partitioned', {
        en: `FAULT LINE: the wall falls (${wall}). Two truths may now be born in parallel — every law shows its character in the next five beats.`,
        bn: `ভাঙন-রেখা: প্রাচীর পড়ে গেল (${wall})। এখন সমান্তরালে দুটি সত্য জন্ম নিতে পারে — পরের পাঁচ ছন্দে প্রতিটি বিধান তার চরিত্র দেখাবে।`,
      });
      continue;
    }

    if (ev.t === 'H') {
      // ---- HEAL, scene by scene ------------------------------------------------
      if (scene === 'naive') {
        if (lostK1Dot2 && healAtNine) {
          healAtNine = false;
          // k1: A holds 3@9, B/C hold 2@7 → LWW keeps 3@9; the 2@7 sibling is buried.
          bump(counters, 'lost');
          for (const h of ['B', 'C'] as const) n[h].set('k1', { val: '3', clock: 9 });
          row(i, ev, 'lost-write', {
            en: 'HEAL by LWW: k1=3@9 outranks k1=2@7 — B and C overwrite their own truth. The k1←2 write is LOST: no error was ever raised, no user ever told. Naive availability was purchased with this funeral.',
            bn: 'LWW-নিরাময়: k1=3@9 জয়ী k1=2@7-এর বিরুদ্ধে — B ও C নিজেদের সত্য উপরিলেখন করে। k1←2 লেখা হারানো: কোনো ত্রুটি ওঠেনি, কোনো ব্যবহারকারীকে জানানো হয়নি। এই জানাজা দিয়েই নিরীক্ষ-প্রাপ্যতা কেনা হয়েছিল।',
          });
        } else if (i === 17) {
          counters.migrations += 1;
          row(i, ev, 'migrated', { en: 'Full reunion: k2 reconciles to the highest clock anywhere (5@14).', bn: 'পূর্ণ পুনর্মিলন: k2 মিলিত হয় সর্বোচ্চ ঘড়িতে (5@14)।' });
        } else {
          row(i, ev, 'healed', { en: 'The wall lifts; nothing needed burying this time.', bn: 'প্রাচীর ওঠে; এবার কিছুই সমাহিত করতে হয়নি।' });
        }
        side = 'both';
        firstWall = false;
        continue;
      }
      if (scene === 'sloppy') {
        if (i === 9 && healAtNine) {
          healAtNine = false;
          // The hinted k1=3@9 lodger rides home to B and C; conflict resolved by clock (9>7).
          counters.conflicts += 1; counters.migrations += 1;
          for (const h of ['B', 'C'] as const) n[h].set('k1', { val: '3', clock: 9 });
          n.A.set('k1', { val: '3', clock: 9 });
          for (const h of ['A', 'B', 'C'] as const) { const e = n[h].get('k1'); if (e) e.hint = false; }
          row(i, ev, 'conflict', {
            en: 'HEAL by handoff: the ⌑ hint k1=3@9 rides home to B and C (delivery presumed lucky this time). Two truths existed since i6; the clock arbitrates: 9 beats 7, and no write is buried — but notice the duel still happened.',
            bn: 'হস্তান্তর-নিরাময়: ⌑ ইঙ্গিত k1=3@9 বাড়ি ফেরে B ও C-তে (এবার বাহন ভাগ্যবান ধরা হোক)। i6 থেকে দুটি সত্য ছিল; ঘড়ি মীমাংসা করে: ৯ জেতে ৭-এ, আর কোনো লেখা সমাহিত হয় না — তবে খেয়াল করুন, দ্বন্দ্বযুদ্ধ তবু ঘটেছে।',
          });
        } else {
          counters.migrations += 1;
          row(i, ev, 'migrated', { en: 'Reunion: hints all delivered; the vaults agree again.', bn: 'পুনর্মিলন: সব ইঙ্গিত পৌঁছেছে; তিজোরিগুলো পুনরায় একমত।' });
        }
        side = 'both'; firstWall = false;
        continue;
      }
      if (scene === 'majority') {
        counters.migrations += 1;
        healAtNine = false; firstWall = false;
        row(i, ev, 'migrated', {
          en: 'HEAL by migration: A simply catches up on what the majority wrote. No duel is possible — the minority never accepted a single word. Closed doors bought this peace.',
          bn: 'স্থানান্তর-নিরাময়: A কেবল সংখ্যাগরিষ্ঠের লেখা অনুসরণ করে। কোনো দ্বন্দ্বযুদ্ধ সম্ভবই নয় — সংখ্যালঘু একটি শব্দও গ্রহণ করেনি। এই শান্তি কেনা হয়েছিল বন্ধ দরজা দিয়ে।',
        });
        side = 'both';
        continue;
      }
      // leader heal
      counters.migrations += 1; firstWall = false;
      row(i, ev, 'migrated', {
        en: 'HEAL under the crown: followers resync from the leader’s log; singular authority means singular truth to repair toward.',
        bn: 'মুকুটের নিচে নিরাময়: অনুসারীরা নেতার লগ থেকে পুনঃসমলয় হয়; একক কর্তৃত্ব মানে মেরামতের দিকে একক সত্য।',
      });
      side = 'both';
      continue;
    }

    if (ev.t === 'W') {
      const { key = '', val = '', clock = 0 } = ev;
      const onBala = ev.side !== 'asha';
      counters.writes += 1;
      if (scene === 'naive') {
        const hosts: ('A' | 'B' | 'C')[] = onBala ? (side === 'both' ? ['A', 'B', 'C'] : ['B', 'C']) : ['A'];
        writeTo(n, hosts, key, val, clock, []);
        if (i === 6 && key === 'k1') { lostK1Dot2 = true; counters.conflicts += 1; } // two truths born in parallel — duel registered now, burial due at the i9 heal
        row(i, ev, 'accepted', {
          en: `ACCEPTED anywhere — ${hosts.join(',')} write k${key.slice(1)}←${val}@${clock}. No door ever closes in this law; that is the whole sales pitch, and the whole risk.`,
          bn: `সর্বত্র গৃহীত — ${hosts.join(',')} লিখল k${key.slice(1)}←${val}@${clock}। এই বিধানে কোনো দরজাই কখনো বন্ধ হয় না; এটিই পুরো বিক্রয়-প্রস্তাব, আর পুরো ঝুঁকি।`,
        });
      } else if (scene === 'sloppy') {
        const isolatedA = ev.side === 'asha' && firstWall; // on the second wall A is beside B,C — plain quorum there
        if (!isolatedA) {
          const hosts: ('A' | 'B' | 'C')[] = side === 'both' || !firstWall ? ['A', 'B', 'C'] : ['B', 'C'];
          writeTo(n, hosts, key, val, clock, []);
          row(i, ev, 'accepted', { en: `QUORUM met — W=2 satisfied on ${hosts.join(',')}; the write binds k${key.slice(1)}←${val}@${clock}.`, bn: `কোরাম জমেছে — W=2 সিদ্ধ ${hosts.join(',')}-এ; লেখা বাধল k${key.slice(1)}←${val}@${clock}।` });
        } else {
          // aloud, but quorum impossible: A + hinted lodger
          counters.hints += 1;
          n.A.set(key, { val, clock, hint: true });
          row(i, ev, 'hinted', {
            en: `NO QUORUM on the A side — the write still answers the client: one real seat on A plus a hinted lodger ⌑ (k${key.slice(1)}←${val}@${clock}) that promises to ride home at healing. Accepted-until-delivery: available, and exactly one dead courier away from a lie.`,
            bn: `A-পার্শ্বে কোরাম নেই — তবু লেখা ক্লায়েন্টকে উত্তর দেয়: A-তে একটি প্রকৃত আসন আর একটি ইঙ্গিত-অতিথি ⌑ (k${key.slice(1)}←${val}@${clock}), যে প্রতিশ্রুতি দেয় নিরাময়ে বাড়ি ফেরার। পৌঁছানো পর্যন্ত গৃহীত: উপলব্ধ, আর একটি মৃত বাহক দূরত্বে মিথ্যা থেকে।`,
          });
        }
      } else if (scene === 'majority') {
        const isolatedA = ev.side === 'asha' && firstWall; // i6 on the (B,C)|A wall: refused. i13 has A beside B,C — accepted.
        if (!isolatedA) {
          const hosts: ('A' | 'B' | 'C')[] = side === 'both' || !firstWall ? ['A', 'B', 'C'] : ['B', 'C'];
          writeTo(n, hosts, key, val, clock, []);
          row(i, ev, 'accepted', { en: `MAJORITY write — two of three signed (W=2). k${key.slice(1)}←${val}@${clock} is now truth in law, not just in fact.`, bn: `সংখ্যাগরিষ্ঠ-লেখা — তিনের দুই সই করেছে (W=2)। k${key.slice(1)}←${val}@${clock} এখন শুধু ঘটনায় নয়, বিধানে সত্য।` });
        } else {
          counters.rejects += 1;
          row(i, ev, 'rejected', {
            en: `REFUSED politely — A alone cannot summon two of three, so the law closes its door rather than take a word it cannot vouch for. Write k${key.slice(1)}←${val}@${clock} never happened. The client sees an error; the cluster keeps its soul.`,
            bn: `বিনীত প্রত্যাখ্যান — A একা তিনের দুই ডাকতে পারে না, তাই বিধান যে শব্দের জামিন হতে পারে না তা নেওয়ার বদলে দরজা বন্ধ করে। k${key.slice(1)}←${val}@${clock} লেখা কখনোই ঘটেনি। ক্লায়েন্ট ত্রুটি দেখে; ক্লাস্টার রক্ষা করে তার আত্মা।`,
          });
        }
      } else {
        // leader law: every op must cross the crown's side. On wall one ((B,C)|A) the A side
        // cannot reach B — doors shut there, exactly like strict majority. The succession
        // drama belongs to the second wall ((B)|A,C), where the crown itself is stranded.
        const ld: string = leader; // widened: flow-narrowing must not re-litigate the crown type
        const crownSide = ld === 'B' || ld === 'C' ? 'bala' : 'asha';
        const crownReachable = side === 'both' || (ev.side === 'asha' ? 'asha' : 'bala') === crownSide;
        if (crownReachable && leader !== '—') {
          const L = leader as 'A' | 'B' | 'C';
          writeTo(n, side === 'both' ? ['A', 'B', 'C'] : [L], key, val, clock, []);
          row(i, ev, 'accepted', { en: `CROWNED write — ${L} the leader takes k${key.slice(1)}←${val}@${clock} and replicates down the log. One address for truth; one funeral to fear.`, bn: `মুকুটধারী-লেখা — নেতা ${L} গ্রহণ করল k${key.slice(1)}←${val}@${clock} আর লগ-ধরে প্রতিলিপি দিল। সত্যের একটি ঠিকানা; ভয়ের একটি জানাজা।` });
        } else {
          counters.rejects += 1;
          row(i, ev, 'rejected', {
            en: `REFUSED — the client cannot reach the crown${leader === '—' ? ' (succession in progress)' : ''}. Under single-leader law, an unreachable leader is indistinguishable from a dead one: the door closes until the exam says otherwise.`,
            bn: `প্রত্যাখ্যান — ক্লায়েন্ট মুকুটে পৌঁছাতে পারছে না${leader === '—' ? ' (উত্তরাধিকার চলছে)' : ''}। একক-নেতা-বিধানে অনাগম্য নেতা আর মৃত নেতা অভিন্ন: পরীক্ষা অন্য বলার আগে পর্যন্ত দরজা বন্ধ।`,
          });
        }
      }
      continue;
    }

    if (ev.t === 'R') {
      const key = ev.key ?? '';
      counters.reads += 1;
      const onBala = ev.side !== 'asha';
      const readFrom = (host: 'A' | 'B' | 'C') => n[host].get(key);

      if (scene === 'naive') {
        const host: 'A' | 'B' | 'C' = onBala ? 'B' : 'A';
        const e = readFrom(host);
        const val = e ? `${key}=${e.val}` : `${key}=∅`;
        conflictWarn(i, val, host);
        row(i, ev, 'routine', { en: `READ from ${host}: ${val}@${e?.clock ?? '—'}. Under naive law this answer is merely local weather.`, bn: `${host} থেকে পাঠ: ${val}@${e?.clock ?? '—'}। নিরীক্ষ-বিধানে এই উত্তর কেবল স্থানীয় আবহাওয়া।` });
      } else if (scene === 'sloppy') {
        if (onBala || side === 'both') {
          const e = n.B.get(key) ?? n.C.get(key);
          row(i, ev, 'routine', { en: `QUORUM read (R=2) on the B side: ${key}=${e?.val ?? '∅'}@${e?.clock ?? '—'}; two copies agree, so the answer is certified.`, bn: `B-পার্শ্বে কোরাম-পাঠ (R=2): ${key}=${e?.val ?? '∅'}@${e?.clock ?? '—'}; দুটি অনুলিপি একমত, অর্থাৎ উত্তর সনদপ্রাপ্ত।` });
        } else {
          const e = n.A.get(key);
          if (e?.hint || (i === 8 && key === 'k1')) counters.stales += 1;
          row(i, ev, 'stale-read', {
            en: `STALE-WINDOW read on the A side: answers ${key}=${e?.val ?? '∅'} from a local seat${e?.hint ? ' plus its own hinted lodger ⌑' : ''}. It is the best this side can swear to — the window where “available” and “correct” quietly part ways.`,
            bn: `A-পার্শ্বে বাসি-জানালার পাঠ: স্থানীয় আসন থেকে উত্তর ${key}=${e?.val ?? '∅'}${e?.hint ? ' সহ নিজের ইঙ্গিত-অতিথি ⌑' : ''}। এই পার্শ্ব যা শপথ করতে পারে তা-ই — সেই জানালা যেখানে “উপলব্ধ” আর “সঠিক” নীরবে পথ ভাগ করে নেয়।`,
          });
        }
      } else if (scene === 'majority') {
        const isolatedA = ev.side === 'asha' && firstWall;
        if (!isolatedA) {
          const e = n.B.get(key) ?? n.C.get(key);
          row(i, ev, 'routine', { en: `MAJORITY read (R=2): two sworn copies agree on ${key}=${e?.val ?? '∅'}@${e?.clock ?? '—'} — W+R > N means reader and writer must have met.`, bn: `সংখ্যাগরিষ্ঠ-পাঠ (R=2): দুটি শপথকৃত অনুলিপি একমত ${key}=${e?.val ?? '∅'}@${e?.clock ?? '—'}। W+R > N মানে পাঠক-লেখক অবশ্যমিলিত।` });
        } else {
          counters.rejects += 1;
          row(i, ev, 'rejected', { en: `REFUSED read — no two-of-three to swear. The law would rather say “I cannot know” than guess.`, bn: `প্রত্যাখ্যাত পাঠ — শপথের তিনের-দুই নেই। বিধান অনুমান করার চেয়ে “আমি জানি না” বলাটাই পছন্দ করে।` });
        }
      } else {
        // leader reads
        const crownedNow = leader === '—' ? 'B' : leader;
        const crownSide2 = (crownedNow as 'A' | 'B' | 'C') === 'A' ? 'asha' : 'bala';
        if (side === 'both' || (ev.side === 'asha' ? 'asha' : 'bala') === crownSide2) {
          const L = crownedNow as 'A' | 'B' | 'C';
          const e = n[L].get(key);
          const betrayed = leaderSuccessionStaged && i === 19 && L === 'B';
          if (betrayed) counters.stales += 1;
          row(i, ev, betrayed ? 'betrayed-read' : 'routine', {
            en: betrayed
              ? `BETRAYED read — the lamp on B still glows with yesterday’s crown: it answers ${key}=${e?.val ?? '∅'} from memory, unaware the succession exam already moved the truth to C. The treason was inviting reads from a deposed leader.`
              : `CROWNED read — the answer comes from ${L}'s current log: ${key}=${e?.val ?? '∅'}@${e?.clock ?? '—'}. Fresh by construction, fragile by address.`,
            bn: betrayed
              ? `বিশ্বাসঘাত-পাঠ — B-এর প্রদীপ এখনো গতকালের মুকুটে জ্বলে: তা স্মৃতি থেকে উত্তর দেয় ${key}=${e?.val ?? '∅'}, অজ্ঞাত যে উত্তরাধিকার-পরীক্ষা সত্যটা ইতোমধ্যে C-তে নিয়ে গেছে। বিশ্বাসঘাতকতা ছিল পদচ্যুত-নেতার কাছ থেকে পাঠ নেওয়ার দাওয়াত।`
              : `মুকুটধারী-পাঠ — উত্তর আসে ${L}-এর চলতি লগ থেকে: ${key}=${e?.val ?? '∅'}@${e?.clock ?? '—'}। নির্মাণেই সতেজ, ঠিকানায় ভঙ্গুর।`,
          });
        } else {
          counters.rejects += 1;
          row(i, ev, 'rejected', { en: `REFUSED read on the uncrowned side — under one-crown law, reads ride the same single address as writes.`, bn: `অমুকুট-পার্শ্বে প্রত্যাখ্যাত পাঠ — এক-মুকুট-বিধানে পাঠও লেখার সেই একক ঠিকানাতেই চড়ে।` });
        }
      }
      continue;
    }
  }

  function conflictWarn(_i: number, _v: string, _h: string) { /* hooks kept for lab narration */ }

  // ------- scene-specific scripted verdicts on top of the generic walk --------
  if (scene === 'naive') {
    // beat 8: A-side read during the wall is the divergence exhibit — mark stale.
    const s8 = steps[7];
    if (s8 && s8.ev.t === 'R') { s8.outcome = 'stale-read'; s8.stales += 1; s8.msg = { en: 'DIVERGENT read — the A side honestly answers k1=3@9, the B side honestly answers k1=2@7. Both are “the truth”, and the law has no judge on duty. This is the stale-read window, held open by availability itself.', bn: 'বিচ্ছিন্ন পাঠ — A-পার্শ্ব সৎভাবে উত্তর দেয় k1=3@9, B-পার্শ্ব সৎভাবে k1=2@7। দুটোই “সত্য”, আর বিধানের ডিউটিতে কোনো বিচারক নেই। এটাই বাসি-পাঠের জানালা, প্রাপ্যতা নিজেই খুলে রেখেছে।' }; }
  }

  if (scene === 'leader') {
    // i11: crown held on the B side.
    const s11 = steps.find((s) => s.i === 11);
    if (s11 && s11.ev.t === 'W') { s11.outcome = 'crown-held' as DStep['outcome']; }
    // i16: the wall strands the crown alone → step down; succession runs on the majority side.
    const s16 = steps.find((s) => s.i === 16);
    if (s16) {
      s16.outcome = 'partitioned';
      counters.elections += 1; s16.elections += 1; leader = '—'; s16.leader = '—';
      s16.msg = { en: 'PARTITION: B alone now; A,C share the majority. The crown (B) still breathes and may even still believe — but a leader that cannot reach its choir is legally dying. Watch the exam at the next beat.', bn: 'পার্টিশন: B এখন একা; A,C ভাগ করছে সংখ্যাগরিষ্ঠতা। মুকুট (B) এখনো শ্বাস নেয়, এমনকি এখনো বিশ্বাসও করতে পারে — কিন্তু সুরদলে পৌঁছাতে না-পারা নেতা আইনত মরণশীল। পরের ছন্দে পরীক্ষা দেখুন।' };
      s16.note = { en: 'succession pending…', bn: 'উত্তরাধিকার অপেক্ষমাণ…' };
    }
    // i17 (heal beat underneath): the leadership exam — C crowned on the majority side.
    const s17 = steps.find((s) => s.i === 17);
    if (s17) {
      leader = 'C'; s17.leader = 'C';
      leaderSuccessionStaged = true;
      s17.outcome = 'election';
      counters.elections += 1; s17.elections += 1;
      s17.msg = { en: 'SUCCESSION EXAM: with B stranded alone, A and C vote — two of three, a lawful choir — and C is crowned at i17. One crown, new head; the ledger never saw two sovereigns because B’s lease was written to expire on silence.', bn: 'উত্তরাধিকার-পরীক্ষা: B একা আটকা পড়ায় A আর C ভোট দেয় — তিনের দুই, বৈধ সুরদল — আর C i17-এ মুকুট পায়। এক মুকুট, নতুন মাথা; খাতা দুই সার্বভৌম দেখেনি, কারণ B-এর লিজ লেখা ছিল নীরবতায় শেষ হওয়ার জন্য।' };
      s17.note = { en: 'crown moved B → C', bn: 'মুকুট সরল B → C' };
    }
    // i18: a write that arrived at B's door right after the exam — refused-close at the old
    // crown (door shut for B), re-seated by the reigning crown: the client retried at C and
    // k1←4@16 landed there. One rejected door, one accepted truth.
    const s18 = steps.find((s) => s.i === 18);
    if (s18 && s18.ev.t === 'W') {
      counters.rejects += 1; s18.rejects += 1;
      s18.outcome = 'rejected';
      n.C.set('k1', { val: '4', clock: 16 });
      if (side === 'both') { n.A.set('k1', { val: '4', clock: 16 }); }
      s18.nodes = snap(n, true);
      s18.msg = { en: 'REFUSED-CLOSE then RE-SEATED: B’s door is shut (its lease expired) so the client retires one door down — C, the reigning crown, accepts k1←4@16 and replicates to A. One door closed by law, one truth accepted by law: the exam’s rent, honestly paid.', bn: 'বন্ধ-প্রত্যাখ্যান, তারপর পুনঃবসানো: B-এর দরজা বন্ধ (লিজ শেষ), তাই ক্লায়েন্ট পাশের দরজায় যায় — রাজত্বকারী মুকুট C গ্রহণ করে k1←4@16 আর A-তে প্রতিলিপি দেয়। একটি দরজা আইনে বন্ধ, একটি সত্য আইনে গৃহীত: পরীক্ষার ভাড়া, সৎভাবে পরিশোধিত।' };
    }
    // i19: the betrayed lamp — scripted verdict because the main loop walked with the old crown.
    const s19 = steps.find((s) => s.i === 19);
    if (s19 && s19.ev.t === 'R') {
      s19.outcome = 'betrayed-read';
      s19.stales += 1;
      s19.leader = 'C';
      s19.msg = {
        en: 'BETRAYED read — on the reunited evening B still answers from yesterday’s log: k1=2@7, while the world (and C, the reigning crown) hold k1=4@16. B never got the memo that the exam happened; that is the treason — a deposed leader kept serving because the lease was paperwork, not physics.',
        bn: 'বিশ্বাসঘাত-পাঠ — পুনর্মিলিত সন্ধ্যায় B এখনো গতকালের লগ থেকে উত্তর দেয়: k1=2@7, অথচ পৃথিবী (আর রাজত্বকারী মুকুট C) ধরে আছে k1=4@16। পরীক্ষা ঘটেছে বলে B-কে কাগজ জানানোই হয়নি; সেটাই বিশ্বাসঘাতকতা — পদচ্যুত নেতা পরিবেশন চালিয়ে গেছে, কারণ লিজ ছিল দলিল, পদার্থবিদ্যা নয়।',
      };
    }
  }

  if (scene === 'sloppy') {
    // i8 read on A side already narrated as stale-window; keep the flag coherent:
    const s8 = steps.find((s) => s.i === 8);
    if (s8 && s8.outcome !== 'stale-read') { s8.outcome = 'stale-read'; s8.stales += 1; }
  }

  if (scene === 'majority') {
    // i6/i13/i14 were refusals — already flagged via counters in the write/read branches.
  }

  return steps;
}
