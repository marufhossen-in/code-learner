// A and B edit the same row without seeing each other, 200 rounds. Two merge rules, two ledgers.
let seed = 20260926;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
let aKept = 0, bKept = 0, ties = 0;
for (let i = 1; i <= 200; i++) {
  const atA = 1000 + i + Math.round(rnd() * 8);       // A's clock, up to 8 ms ahead
  const atB = 1000 + i + Math.round(rnd() * 8);
  if (atA > atB) aKept++; else if (atB > atA) bKept++; else ties++;
}
console.log('last-write-wins, per round one write survives:', 'A kept', aKept, 'B kept', bKept, 'ties broken by node id', ties);
console.log('writes made 400, writes kept', aKept + bKept + ties, 'silently lost', 400 - (aKept + bKept + ties));
const keptByVectors = 400, conflicts = aKept + bKept + ties;
console.log('version vectors: writes kept', keptByVectors, 'conflicts handed to the app', conflicts);
