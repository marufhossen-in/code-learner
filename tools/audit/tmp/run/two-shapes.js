// same 15 keys, two insertion orders. Height is the price you pay for sorted input.
const make = (keys) => {
  const root = { };
  const nodes = [];
  const ins = (node, k, depth) => {
    node.k = k; node.d = depth; nodes.push(node);
    return node;
  };
  const tree = {};
  let height = 0;
  for (const k of keys) {
    let cur = tree, depth = 0;
    if (cur.k === undefined) { cur.k = k; cur.d = 1; height = 1; continue; }
    for (;;) {
      depth++;
      const go = k < cur.k ? 'l' : 'r';
      if (!cur[go]) { cur[go] = { k, d: depth + 1 }; height = Math.max(height, depth + 1); break; }
      cur = cur[go];
    }
  }
  return { height, nodes: Object.keys(tree).length };
};
const sorted = Array.from({ length: 15 }, (_, i) => i + 1);
const mixed = [8, 3, 12, 1, 5, 10, 14, 2, 4, 6, 7, 9, 11, 13, 15];
console.log('insert 1..15 in order   -> height', make(sorted).height);
console.log('insert the same keys shuffled -> height', make(mixed).height);
