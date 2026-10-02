// 1,000 nodes, one knows the update. Each round every informed node pokes 3 peers at random.
let seed = 5150;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const n = 1000;
const informed = new Set([0]);
let round = 0, messages = 0;
while (informed.size < n && round < 200) {
  round++;
  const newly = [];
  for (const src of informed) {
    for (let k = 0; k < 3; k++) {
      messages++;
      const dst = (rnd() * n) | 0;
      if (!informed.has(dst)) newly.push(dst);
    }
  }
  for (const d of newly) informed.add(d);
  if (round <= 6 || informed.size >= n) console.log('round', round, 'informed', informed.size, 'messages so far', messages);
}
