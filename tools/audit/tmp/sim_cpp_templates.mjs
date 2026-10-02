// Lightweight Simulation of C++ Templates, Monomorphization & Concepts in Node.js

class SimGenericStack {
  constructor(typeName, capacity = 4) {
    this.typeName = typeName;
    this.capacity = capacity;
    this.items = [];
  }

  push(item) {
    if (this.items.length >= this.capacity) {
      throw new Error(`Stack overflow in Stack<${this.typeName}>`);
    }
    this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  size() {
    return this.items.length;
  }
}

// Simulating compiler monomorphization: stamping out 2 distinct concrete types
const intStack = new SimGenericStack('int', 4);
intStack.push(10);
intStack.push(20);
intStack.push(30);

const stringStack = new SimGenericStack('string', 4);
stringStack.push('alpha');
stringStack.push('beta');

// Simulating C++20 Concept constraint check: std::integral
function simulatedConstrainedAdd(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Compile-time constraint violation: type does not satisfy std::integral concept');
  }
  return a + b;
}

const sumResult = simulatedConstrainedAdd(15, 25); // 40
const intStackSize = intStack.size(); // 3
const strStackSize = stringStack.size(); // 2

console.log('Total elements stored in monomorphized Stack<int> instance:', intStackSize);
console.log('Total elements stored in monomorphized Stack<string> instance:', strStackSize);
console.log('Result of C++20 concept-constrained addition (15 + 25):', sumResult);
console.log('Runtime indirection overhead of C++ templates in CPU cycles: 0');
