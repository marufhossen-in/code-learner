// sims for the distributed-systems lessons: every number printed in the lessons must be the output
// of running these, so a learner who retypes the snippet gets the same figures.
const rngSeed = 20260926;
let s = rngSeed;
const rnd = () => { s = (s * 1103515245 + 12345) & 0x7fffffff; return s / 0x7fffffff; };

// ---- 1. quorum.mjs : how many reads come back stale at each (W,R) on 3 replicas ----
export function quorum(W, R) {
  const replicas = [null, null, null];
  let staleReads = 0, reads = 0;
  for (let i = 1; i <= 1000; i++) {
    const v = `v${i}`;
    const writeTo = [...replicas.keys()].sort(() => rnd() - 0.5).slice(0, W);
    for (const n of writeTo) replicas[n] = v;
    const readFrom = [...replicas.keys()].sort(() => rnd() - 0.5).slice(0, R);
    const seen = readFrom.map((n) => replicas[n]);
    if (!seen.includes(v)) staleReads++;
    reads++;
  }
  return { W, R, reads, staleReads, pct: (staleReads / reads) * 100 };
}

// ---- 2. tokens.mjs : one stream of 1,000 session operations, run twice. Only routing changes. ----
export function tokens({ pin }) {
  const ops = [];
  let r = rngSeed, writes = 0;
  const step = () => { r = (r * 1103515245 + 12345) & 0x7fffffff; return r / 0x7fffffff; };
  for (let i = 0; i < 1000; i++) {
    if (step() < 0.05) ops.push({ op: 'write', n: Math.floor(step() * 3), v: ++writes });
    else ops.push({ op: 'read', n: Math.floor(step() * 3) });
  }
  const replicas = [0, 0, 0];
  let seen = 0, regressions = 0;
  for (const o of ops) {
    if (o.op === 'write') { replicas[o.n] = o.v; continue; }
    let n = o.n;
    if (pin) {                                           // route to a replica at-or-above what I already saw
      const ok = replicas.map((v, idx) => [v, idx]).filter(([v]) => v >= seen);
      if (ok.length) n = ok[Math.floor(step() * ok.length)][1];
    }
    const v = replicas[n];
    if (v < seen) regressions++;                         // the session watched time run backwards
    seen = Math.max(seen, v);
  }
  return { pin, writes, reads: ops.length - writes, regressions };
}

// ---- 3. merge.mjs : two writers, one shared row. LWW drops a write; a version vector does not. ----
export function merge(rounds = 200) {
  let q = rngSeed;
  const jitter = () => { q = (q * 1103515245 + 12345) & 0x7fffffff; return q / 0x7fffffff; };
  const lww = { kept: 0, lost: 0 };
  const vv = { kept: 0, conflicts: 0 };
  for (let i = 1; i <= rounds; i++) {
    // A and B each write their own copy of the row without seeing the other: truly concurrent
    const a = { by: 'A', n: i, at: 1000 + i + Math.round(jitter() * 8) };   // wall clock, 0-8 ms skew
    const b = { by: 'B', n: i, at: 1000 + i + Math.round(jitter() * 8) };
    (a.at > b.at ? lww.kept++ : lww.lost++);                                  // the loser is gone, silently
    vv.conflicts++; vv.kept += 2;                                             // both kept, the app resolves
  }
  return { rounds, lww, vv };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  for (const [W, R] of [[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [2, 3], [3, 3]]) {
    const r = quorum(W, R);
    console.log(`W=${r.W} R=${r.R} W+R=${r.W + r.R}  stale ${r.staleReads} of ${r.reads} reads (${r.pct.toFixed(1)}%)`);
  }
  console.log('---');
  console.log(JSON.stringify(tokens({ pin: false })), JSON.stringify(tokens({ pin: true })));
  console.log('---');
  console.log(JSON.stringify(merge(200)));
}
