// 200 emails counted by link. Spam and honest mail overlap, so a hand rule has to lose somewhere.
let seed = 4242;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const rows = Array.from({ length: 200 }, () => {
  const spam = rnd() < 0.45;
  const links = spam ? 1 + Math.round(rnd() * 6) : Math.round(rnd() * 3);
  return { links, spam: spam ? 1 : 0 };
});
const score = (predict) => rows.filter((r) => predict(r) === r.spam).length / rows.length;
let best = { t: 0, a: 0 };
for (let t = 0; t <= 8; t++) {
  const a = score((r) => (r.links > t ? 1 : 0));
  if (a > best.a) best = { t, a };
}
console.log('guessed rule, links > 4:', (score((r) => (r.links > 4 ? 1 : 0)) * 100).toFixed(1) + '% correct');
console.log('threshold learned by trying 0..8: links >' + best.t + ', ' + (best.a * 100).toFixed(1) + '% correct');
console.log('rows', rows.length, 'spam', rows.filter((r) => r.spam).length, 'overlap rows where a guess must fail', rows.filter((r) => (r.links > 4 ? 1 : 0) !== r.spam).length);
