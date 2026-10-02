// 1,000 approvals, 3% from a rare group. One model always says no: watch accuracy and harm split apart.
let seed = 99;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const rows = Array.from({ length: 1000 }, () => {
  const rare = rnd() < 0.03;
  const deserves = rnd() < (rare ? 0.62 : 0.55);       // the rare group is not less deserving
  return { rare, deserves };
});
const rate = (p) => {
  let tp = 0, fp = 0, fn = 0, tn = 0;
  for (const r of rows) { const pred = rnd() < p ? 1 : 0; if (pred && r.deserves) tp++; else if (pred) fp++; else if (r.deserves) fn++; else tn++; }
  const acc = (tp + tn) / rows.length, recall = tp / (tp + fn || 1);
  const rareFn = rows.filter((r) => r.rare && !r.deserves === false && predNo(r)).length;
  return { acc, recall };
};
function predNo() { return false; }
const always = { tp: 0, fp: 0, fn: rows.filter((r) => r.deserves).length, tn: rows.filter((r) => !r.deserves).length };
const accAlways = (always.tp + always.tn) / rows.length;
console.log('model that approves nothing: accuracy', (accAlways * 100).toFixed(1) + '%', 'recall for deserving applicants', '0.0%');
console.log('rows', rows.length, 'deserving', always.fn, 'rare-group rows', rows.filter((r) => r.rare).length);
