// same answer, two machines. One leans on the call stack, one carries its own.
let calls = 0;
const fibR = (n) => { calls++; return n < 2 ? n : fibR(n - 1) + fibR(n - 2); };
const memo = new Map();
let looks = 0;
const fibM = (n) => {
  looks++;
  if (memo.has(n)) return memo.get(n);
  const v = n < 2 ? n : fibM(n - 1) + fibM(n - 2);
  memo.set(n, v);
  return v;
};
console.log('fib(20) =', fibR(20), 'with', calls, 'calls');
console.log('fib(20) =', fibM(20), 'with', looks, 'calls and', memo.size, 'memo rows');
