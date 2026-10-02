// Lightweight Simulation of C Dynamic Heap Allocation (malloc, realloc, free) in Node.js

class SimulatedHeapAllocator {
  constructor(totalCapacityBytes = 1024) {
    this.capacity = totalCapacityBytes;
    this.usedBytes = 0;
    this.allocations = new Map();
    this.nextAddress = 0x3000;
  }

  malloc(sizeBytes) {
    if (this.usedBytes + sizeBytes > this.capacity) {
      return null; // OOM (Out of Memory) simulation
    }
    const addrHex = '0x' + this.nextAddress.toString(16).toUpperCase();
    this.allocations.set(addrHex, sizeBytes);
    this.usedBytes += sizeBytes;
    this.nextAddress += sizeBytes;
    return addrHex;
  }

  calloc(count, sizeBytes) {
    return this.malloc(count * sizeBytes);
  }

  realloc(addrHex, newSizeBytes) {
    if (!this.allocations.has(addrHex)) return null;
    const oldSize = this.allocations.get(addrHex);
    this.free(addrHex);
    return this.malloc(newSizeBytes);
  }

  free(addrHex) {
    if (this.allocations.has(addrHex)) {
      const size = this.allocations.get(addrHex);
      this.usedBytes -= size;
      this.allocations.delete(addrHex);
      return true;
    }
    return false;
  }
}

const heap = new SimulatedHeapAllocator(1024);

// Step 1: Allocate 128 bytes
const ptr1 = heap.malloc(128); // 0x3000
// Step 2: Allocate 256 bytes
const ptr2 = heap.malloc(256); // 0x3080

const bytesAfterTwoMallocs = heap.usedBytes; // 384

// Step 3: Free ptr2
heap.free(ptr2);
const bytesAfterFree = heap.usedBytes; // 128

// Step 4: Realloc ptr1 to 512 bytes
const ptr1Resized = heap.realloc(ptr1, 512);
const finalUsedBytes = heap.usedBytes; // 512

console.log('Heap memory address allocated for initial 128-byte buffer:', ptr1);
console.log('Total heap bytes used after allocating 128 and 256 bytes:', bytesAfterTwoMallocs);
console.log('Heap bytes remaining after calling free() on 256-byte buffer:', bytesAfterFree);
console.log('Total heap bytes consumed after reallocating to 512 bytes:', finalUsedBytes);
