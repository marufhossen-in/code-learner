// one tab, back and forward. Visiting a new page throws away the whole future.
const hist = ['a.html'];
let cur = 0;
const visit = (u) => { hist.length = cur + 1; hist.push(u); cur = hist.length - 1; };
const back = () => (cur > 0 ? hist[--cur] : null);
const fwd = () => (cur < hist.length - 1 ? hist[++cur] : null);
visit('b.html');
visit('c.html');
console.log('two visits:', hist.join(' > '), '| showing', hist[cur]);
console.log('back:', back(), 'back:', back(), 'back:', back());
console.log('forward once more:', fwd());
visit('d.html');
console.log('history now:', hist.join(' > '), '- length', hist.length, ', cursor', cur);
