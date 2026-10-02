// Lightweight Simulation of C++ Lambdas, Closures & Ranges in Node.js

// 1. Stateless Lambda simulation: [](int x) { return x * x; }
const statelessSquare = (x) => x * x;

// 2. Stateful Closure simulation: [factor = 3](int x) { return x * factor; }
class ClosureMultiplier {
  constructor(factor) {
    this.factor = factor; // captured by value
  }
  call(x) {
    return x * this.factor;
  }
}
const statefulTimes3 = new ClosureMultiplier(3);

// 3. Modern C++20 Ranges pipeline simulation: numbers | filter(even) | transform(square)
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((n) => n % 2 === 0); // [2, 4, 6]
const squaredEvens = evens.map((n) => n * n); // [4, 16, 36]
const sumOfSquaredEvens = squaredEvens.reduce((acc, curr) => acc + curr, 0); // 56

const squareOf5 = statelessSquare(5); // 25
const multiplierResult = statefulTimes3.call(10); // 30

console.log('Result of stateless lambda squaring number 5:', squareOf5);
console.log('Result of stateful closure capturing factor 3 applied to 10:', multiplierResult);
console.log('Sum of transformed even squares across C++20 pipeline:', sumOfSquaredEvens);
console.log('Size of stateless lambda in memory in bytes: 1');
console.log('Standard C++ standard version introducing lambda expressions: 11');
