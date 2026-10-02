// the call stack is a stack: one frame per live call, and it only shrinks on return.
let frames = 0, peak = 0;
const fact = (n) => {
  frames++;
  peak = Math.max(peak, frames);
  const v = n <= 1 ? 1 : n * fact(n - 1);
  frames--;
  return v;
};
console.log('fact(10) =', fact(10), '| peak frames', peak, '| frames left open', frames);
