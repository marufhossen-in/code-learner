// 1,000 transactions, 3 participants. Sometimes the coordinator dies after collecting the votes.
let seed = 20260926;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
let crashes = 0, resolved = 0, blocked = 0, wrongAnswer = 0, splitCommit = 0;
for (let run = 0; run < 1000; run++) {
  const vote = [0, 1, 2].map(() => (rnd() < 0.15 ? 'no' : 'yes'));       // a locker that cannot lock says no
  const decision = vote.includes('no') ? 'abort' : 'commit';
  if (rnd() >= 0.4) { resolved++; continue; }                            // the coordinator lived: phase two was sent
  crashes++;
  const reachable = [0, 1, 2].map(() => rnd() > 0.25);                   // 1 in 4 nodes is deaf during the poll
  const asked = [0, 1, 2].filter((i) => reachable[i]);
  if (!asked.length) { blocked++; continue; }
  const guess = asked.some((i) => vote[i] === 'no') ? 'abort' : 'commit'; // the heuristic: commit unless a NO surfaces
  resolved++;
  if (guess !== decision) wrongAnswer++;                                 // it answered differently from the coordinator
  const final = [0, 1, 2].map((i) => (reachable[i] ? guess : decision));
  if (new Set(final).size > 1) splitCommit++;                             // one replica committed, another aborted
}
console.log('coordinator died in', crashes, 'of 1000 runs');
console.log('plain 2PC: all three block in every one of those runs:', crashes);
console.log('heuristic 2s wait + peer poll:', JSON.stringify({ unblocked: resolved - (1000 - crashes), stillBlocked: blocked, wrongAnswer, splitCommit }));
