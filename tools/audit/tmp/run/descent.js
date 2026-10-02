// y = 3x + 7 with noise. Learn a and b by gradient descent, watching the loss fall.
let seed = 7;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const pts = Array.from({ length: 40 }, (_, i) => {
  const x = i / 4;
  return { x, y: 3 * x + 7 + (rnd() - 0.5) * 2 };
});
let a = 0, b = 0;
const rate = 0.02;
const loss = () => pts.reduce((s, p) => s + (a * p.x + b - p.y) ** 2, 0) / pts.length;
for (let epoch = 0; epoch <= 200; epoch++) {
  let ga = 0, gb = 0;
  for (const p of pts) { const e = a * p.x + b - p.y; ga += 2 * e * p.x; gb += 2 * e; }
  a -= rate * ga / pts.length;
  b -= rate * gb / pts.length;
  if (epoch % 50 === 0) console.log('epoch', String(epoch).padStart(3), 'loss', loss().toFixed(3), 'a', a.toFixed(2), 'b', b.toFixed(2));
}
