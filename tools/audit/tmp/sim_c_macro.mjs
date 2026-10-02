// Lightweight Simulation of C Preprocessor Macros & Precedence Traps in Node.js

class PreprocessorSimulator {
  // Simulates #define SQUARE_NAIVE(x) x * x
  // For input "2 + 3", naive expansion becomes: 2 + 3 * 2 + 3
  static squareNaive(xVal, a, b) {
    // a + b = 2 + 3
    // evaluation: a + (b * a) + b = 2 + (3 * 2) + 3 = 11
    return a + b * a + b;
  }

  // Simulates #define SQUARE_SAFE(x) ((x) * (x))
  static squareSafe(xVal) {
    return xVal * xVal;
  }

  // Simulates Stringification #x
  static stringify(expr) {
    return `"${expr}"`;
  }

  // Simulates Token Pasting a ## b
  static tokenPaste(prefix, suffix) {
    return `${prefix}${suffix}`;
  }
}

const naiveResult = PreprocessorSimulator.squareNaive(5, 2, 3); // 11
const safeResult = PreprocessorSimulator.squareSafe(2 + 3); // 25
const stringified = PreprocessorSimulator.stringify('MAX_BUFFER'); // "MAX_BUFFER"
const pastedToken = PreprocessorSimulator.tokenPaste('handle_', 'click'); // "handle_click"

console.log('Unparenthesized macro SQUARE(2 + 3) evaluation result:', naiveResult);
console.log('Defensively parenthesized macro ((2 + 3) * (2 + 3)) result:', safeResult);
console.log('Stringification # operator on identifier MAX_BUFFER:', stringified);
console.log('Token pasting ## operator combining handle_ and click:', pastedToken);
console.log('Total stages in the standard C build pipeline: 4');
