// one primary, three backups. same order everywhere: one state. arrival order each: three states.
let seed = 2026;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const log = Array.from({ length: 200 }, (_, i) => 'w' + (i + 1));
const apply = (ops) => ops.reduce((s, o) => s + '|' + o, '');
const ordered = new Set([0, 1, 2].map(() => apply(log)));
const arrivals = new Set([0, 1, 2].map(() => apply([...log].sort(() => rnd() - 0.5))));
console.log('total order, 3 replicas:', ordered.size, 'distinct states after 200 writes');
console.log('each replica orders by arrival:', arrivals.size, 'distinct states, so reads disagree');
