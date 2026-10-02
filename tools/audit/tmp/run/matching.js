const src = 'f((x + [y) {z]})';
const pairs = { ')': '(', ']': '[', '}': '{' };
const stack = [];
let fault = -1, why = '';
for (let i = 0; i < src.length; i++) {
  const c = src[i];
  if (c === '(' || c === '[' || c === '{') stack.push([c, i]);
  else if (pairs[c]) {
    const top = stack.pop();
    if (!top) { fault = i; why = 'a closer with nothing open'; break; }
    if (top[0] !== pairs[c]) { fault = i; why = top[0] + ' at index ' + top[1] + ' was still open'; break; }
  }
}
console.log(src);
console.log(fault < 0 ? 'balanced' : 'first fault at index ' + fault + ': ' + why + '; stack still held ' + stack.length);
