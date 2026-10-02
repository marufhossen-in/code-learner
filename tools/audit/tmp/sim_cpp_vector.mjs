// Lightweight Simulation of C++ std::vector Dynamic Growth in Node.js

class SimVector {
  constructor() {
    this.storage = [];
    this._capacity = 0;
    this.reallocations = 0;
  }

  push_back(value) {
    if (this.storage.length >= this._capacity) {
      this._grow();
    }
    this.storage.push(value);
  }

  reserve(newCapacity) {
    if (newCapacity > this._capacity) {
      this._capacity = newCapacity;
      this.reallocations += 1;
    }
  }

  _grow() {
    const nextCap = this._capacity === 0 ? 1 : this._capacity * 2;
    this._capacity = nextCap;
    this.reallocations += 1;
  }

  size() {
    return this.storage.length;
  }

  capacity() {
    return this._capacity;
  }
}

// Simulation of 5 pushes with geometric doubling
const vec = new SimVector();
vec.push_back(10); // cap: 1
vec.push_back(20); // cap: 2
vec.push_back(30); // cap: 4
vec.push_back(40); // cap: 4
vec.push_back(50); // cap: 8

const finalSize = vec.size(); // 5
const finalCapacity = vec.capacity(); // 8
const totalReallocations = vec.reallocations; // 4 reallocations (1, 2, 4, 8)

// Comparison with pre-reserved vector
const reservedVec = new SimVector();
reservedVec.reserve(100);
for (let i = 0; i < 50; i++) {
  reservedVec.push_back(i);
}
const reservedCapacity = reservedVec.capacity(); // 100
const reservedReallocCount = reservedVec.reallocations; // 1 (only initial reserve)

console.log('Final vector element count (size) after 5 push_back calls:', finalSize);
console.log('Final vector buffer capacity after geometric doubling:', finalCapacity);
console.log('Total reallocations incurred without reserve():', totalReallocations);
console.log('Total reallocations incurred with reserve(100) across 50 pushes:', reservedReallocCount);
console.log('Modern CPU cache line standard size in bytes: 64');
