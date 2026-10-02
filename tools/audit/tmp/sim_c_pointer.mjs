// Lightweight Simulation of C Pointers and Memory Addresses in Node.js

class MemorySimulator {
  constructor() {
    this.memory = new Map();
  }

  // Allocates a simulated memory cell
  allocate(address, value) {
    this.memory.set(address, value);
  }

  read(address) {
    return this.memory.get(address);
  }

  write(address, value) {
    this.memory.set(address, value);
  }
}

// Simulating C memory layout
const mem = new MemorySimulator();

// Step 1: int x = 42; at address 0x1000
const addrX = '0x1000';
mem.allocate(addrX, 42);

// Step 2: int *p = &x; at address 0x1008 storing 0x1000
const addrP = '0x1008';
mem.allocate(addrP, addrX);

// Step 3: Dereferencing *p to read value
const readAddress = mem.read(addrP);
const dereferencedValue = mem.read(readAddress);

// Step 4: Mutating via pointer: *p = 99;
mem.write(readAddress, 99);
const updatedX = mem.read(addrX);

// Step 5: Simulating swap(&a, &b)
let a = 10;
let b = 20;

function swap(ptrA, ptrB) {
  const temp = mem.read(ptrA);
  mem.write(ptrA, mem.read(ptrB));
  mem.write(ptrB, temp);
}

const addrA = '0x2000';
const addrB = '0x2004';
mem.allocate(addrA, a);
mem.allocate(addrB, b);

swap(addrA, addrB);

console.log('Value of x at address 0x1000:', dereferencedValue);
console.log('Value of x after mutation via *p = 99:', updatedX);
console.log('Value of variable a after swap:', mem.read(addrA));
console.log('Value of variable b after swap:', mem.read(addrB));
console.log('Sizeof pointer on 64-bit architecture in bytes: 8');
