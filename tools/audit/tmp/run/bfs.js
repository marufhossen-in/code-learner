// a friend graph: distances are a queue property, not a recursion property.
const edges = { a: ['b', 'c'], b: ['a', 'd'], c: ['a', 'd', 'e'], d: ['b', 'c', 'f'], e: ['c', 'f'], f: ['d', 'e'] };
const from = 'a';
const dist = new Map([[from, 0]]);
const q = [from];
while (q.length) {
  const here = q.shift();
  for (const nxt of edges[here]) {
    if (dist.has(nxt)) continue;
    dist.set(nxt, dist.get(here) + 1);
    q.push(nxt);
  }
}
console.log([...dist.entries()].map(([k, v]) => k + ':' + v).join(' '));
const ring = [0, 1, 2, 3];
let head = 0, tail = 0, full = false, writes = 0;
const put = (v) => { ring[tail] = v; writes++; tail = (tail + 1) % ring.length; if (tail === head) full = true; };
put('j1'); put('j2'); put('j3'); put('j4');
console.log('ring of 4 after 4 puts:', JSON.stringify(ring), 'head', head, 'tail', tail, 'full', full, '| wrapped writes', writes);
