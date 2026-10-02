// turn an unsorted array into a heap bottom-up, counting every swap a sift-down makes.
const a = [9, 4, 7, 1, 12, 3, 8, 5];
let swaps = 0;
const down = (i, n) => {
  for (;;) {
    const l = 2 * i + 1, r = l + 1;
    let big = i;
    if (l < n && a[l] > a[big]) big = l;
    if (r < n && a[r] > a[big]) big = r;
    if (big === i) return;
    [a[i], a[big]] = [a[big], a[i]];
    swaps++; i = big;
  }
};
for (let i = (a.length >> 1) - 1; i >= 0; i--) down(i, a.length);
console.log('heap array:', a.join(' '), '| swaps', swaps, 'for', a.length, 'items');
const pop = () => {
  const top = a[0];
  const last = a.pop();
  if (!a.length) return top;                       // the last item left: nothing to sift
  a[0] = last;
  let i = 0; for (;;) { const l = 2 * i + 1, r = l + 1; let big = i; if (l < a.length && a[l] > a[big]) big = l; if (r < a.length && a[r] > a[big]) big = r; if (big === i) break; [a[i], a[big]] = [a[big], a[i]]; i = big; } return top; };
const out = [];
while (a.length) out.push(pop());
console.log('popped in order:', out.join(' '), '| that is a sort with', swaps, 'swap steps from heapify plus 8 pops');
