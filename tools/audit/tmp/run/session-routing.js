// one session, one fixed stream of 1,000 operations, played twice. Only read routing differs.
let seed = 7;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const ops = [];
let writes = 0;
for (let i = 0; i < 1000; i++) ops.push(rnd() < 0.05 ? { op: 'w', n: (rnd() * 3) | 0, v: ++writes } : { op: 'r', n: (rnd() * 3) | 0 });
const play = (pin) => {
  seed = 99;                          // both modes roll the same routing dice
  const reps = [0, 0, 0];
  let seen = 0, back = 0;
  for (const o of ops) {
    if (o.op === 'w') { reps[o.n] = o.v; continue; }
    let n = o.n;
    if (pin) {
      const ok = reps.map((v, i) => [v, i]).filter(([v]) => v >= seen);
      if (ok.length) n = ok[(rnd() * ok.length) | 0][1];      // a replica at least as new as what I saw
    }
    if (reps[n] < seen) back++;                                // the session watched the count go down
    seen = Math.max(seen, reps[n]);
  }
  return { pin, writes, reads: 1000 - writes, back };
};
console.log(JSON.stringify(play(false)));
console.log(JSON.stringify(play(true)));
