// Lightweight Simulation of C Arrays, Pointer Decay & Pointer Arithmetic in Node.js

class ArrayMemoryLayout {
  constructor(baseAddress, elementSizeBytes, elements) {
    this.baseAddress = baseAddress;
    this.elementSizeBytes = elementSizeBytes;
    this.elements = elements;
  }

  // Calculates address of index i
  addressOf(i) {
    const addrNum = parseInt(this.baseAddress, 16) + i * this.elementSizeBytes;
    return '0x' + addrNum.toString(16).toUpperCase();
  }

  totalBytes() {
    return this.elements.length * this.elementSizeBytes;
  }
}

const arr = [10, 20, 30, 40, 50];
const layout = new ArrayMemoryLayout('0x1000', 4, arr);

const totalArrayBytes = layout.totalBytes(); // 20 bytes
const decayedPointerSize = 8; // 8 bytes on 64-bit architecture

// Pointer arithmetic simulation
// ptr pointing to index 0
let pointerIndex = 0;
// Advance pointer by 2 (ptr + 2)
pointerIndex += 2;
const valAtPointerPlusTwo = arr[pointerIndex]; // 30
const addrAtPointerPlusTwo = layout.addressOf(pointerIndex); // 0x1008

// Subscript equivalence: arr[3] vs *(arr + 3)
const subscriptVal = arr[3];
const pointerArithmeticVal = arr[0 + 3];

console.log('Total array size in bytes for 5 integers:', totalArrayBytes);
console.log('Sizeof decayed pointer variable in bytes:', decayedPointerSize);
console.log('Address of element at index 2 (base + 2 * 4):', addrAtPointerPlusTwo);
console.log('Value accessed via pointer arithmetic (arr + 2):', valAtPointerPlusTwo);
console.log('Value accessed via subscript arr[3]:', subscriptVal);
console.log('Verification that arr[3] equals *(arr + 3):', subscriptVal === pointerArithmeticVal);
