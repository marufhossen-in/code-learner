// the desk: one table, five questions a reviewer asks of any distributed design.
const rows = [
  { name: 'orders db', N: 5, W: 3, R: 3, target: 99.99 },
  { name: 'product cache', N: 3, W: 1, R: 1, target: 99.9 },
  { name: 'chat fan-out', N: 5, W: 2, R: 2, target: 99.95 },
  { name: 'ledger', N: 5, W: 5, R: 1, target: 99.99 }
];
const MIN_PER_MONTH = 43200;
for (const r of rows) {
  const quorum = r.W + r.R > r.N;
  const canLose = r.N - r.W + 1 > 0 ? Math.min(r.N - r.W, r.N - r.R) : 0;
  const budget = ((100 - r.target) / 100) * MIN_PER_MONTH;
  console.log(r.name.padEnd(14), 'W+R>N', quorum ? 'yes' : 'NO ', 'survives', canLose, 'down', 'budget', budget.toFixed(1), 'min/month');
}
