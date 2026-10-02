// three replicas. each round writes v_i to W of them, then reads R of them: a miss is a stale read.
let seed = 20260926;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const pick = (k) => [0, 1, 2].map((n) => [rnd(), n]).sort((x, y) => x[0] - y[0]).slice(0, k).map(([, n]) => n);
for (const [W, R] of [[1, 1], [2, 1], [1, 2], [2, 2], [3, 1], [2, 3]]) {
  seed = 20260926;                    // same shuffle stream, so only W and R change
  const reps = [null, null, null];
  let stale = 0;
  for (let i = 1; i <= 1000; i++) {
    const v = 'v' + i;
    for (const n of pick(W)) reps[n] = v;
    if (!pick(R).some((n) => reps[n] === v)) stale++;
  }
  console.log('W=' + W, 'R=' + R, 'W+R=' + (W + R), 'N=3 ->', 'stale', stale, 'of 1000');
}
