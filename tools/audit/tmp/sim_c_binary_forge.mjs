// Lightweight Simulation of C Binary Forge: Arena Allocator & Binary Sections in Node.js

class ArenaAllocator {
  constructor(capacityBytes = 512) {
    this.capacity = capacityBytes;
    this.offset = 0;
    this.allocationCount = 0;
  }

  // Bump allocation: O(1) constant time
  alloc(sizeBytes, alignment = 8) {
    // Calculate aligned offset
    const alignedOffset = (this.offset + (alignment - 1)) & ~(alignment - 1);
    if (alignedOffset + sizeBytes > this.capacity) {
      return null; // Arena out of capacity
    }
    const allocatedAddress = '0x' + (0x5000 + alignedOffset).toString(16).toUpperCase();
    this.offset = alignedOffset + sizeBytes;
    this.allocationCount += 1;
    return { address: allocatedAddress, bytes: sizeBytes };
  }

  // Instant O(1) bulk reset
  reset() {
    this.offset = 0;
    this.allocationCount = 0;
  }
}

const arena = new ArenaAllocator(512);

// Allocate 3 sequential struct records (each 32 bytes aligned to 8)
const rec1 = arena.alloc(32, 8); // 0x5000
const rec2 = arena.alloc(32, 8); // 0x5020
const rec3 = arena.alloc(32, 8); // 0x5040

const bytesAllocatedBeforeReset = arena.offset; // 96
const recordsCount = arena.allocationCount; // 3

// Instant bulk reset
arena.reset();
const bytesAfterReset = arena.offset; // 0

console.log('Memory address of first allocated arena struct:', rec1.address);
console.log('Total records allocated sequentially in arena:', recordsCount);
console.log('Total contiguous bytes consumed in arena pool:', bytesAllocatedBeforeReset);
console.log('Bytes remaining active in arena after instant bulk reset():', bytesAfterReset);
console.log('ELF binary header magic bytes signature length: 4');
