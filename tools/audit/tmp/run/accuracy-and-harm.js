// 1,000 applications, 3% from a rare group. Same data, three models, three different stories.
let seed = 99;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const rows = Array.from({ length: 1000 }, () => {
  const rare = rnd() < 0.03;
  const deserves = rnd() < 0.55;
  return { rare, deserves };
});
const report = (name, predict) => {
  let right = 0, rareMissed = 0, rareDeserving = 0;
  for (const r of rows) {
    const p = predict(r);
    if (p === (r.deserves ? 1 : 0)) right++;
    if (r.rare && r.deserves) { rareDeserving++; if (!p) rareMissed++; }
  }
  console.log(name.padEnd(22), 'accuracy', ((right / rows.length) * 100).toFixed(1) + '%', '| deserving rare applicants refused', rareMissed + '/' + rareDeserving);
};
report('approve nobody', () => 0);
report('approve everybody', () => 1);
report('flip a coin', () => (rnd() < 0.5 ? 1 : 0));
