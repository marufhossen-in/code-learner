// Lightweight Simulation of C++ RAII, UniquePtr & SharedPtr in Node.js

class ControlBlock {
  constructor() {
    this.strongCount = 1;
  }
}

class SimSharedPtr {
  constructor(resourceId, controlBlock = null) {
    this.resourceId = resourceId;
    if (controlBlock) {
      this.controlBlock = controlBlock;
      this.controlBlock.strongCount += 1;
    } else {
      this.controlBlock = new ControlBlock();
    }
  }

  copy() {
    return new SimSharedPtr(this.resourceId, this.controlBlock);
  }

  release() {
    this.controlBlock.strongCount -= 1;
    const remaining = this.controlBlock.strongCount;
    if (remaining === 0) {
      return { freed: true, remaining: 0 };
    }
    return { freed: false, remaining };
  }

  useCount() {
    return this.controlBlock.strongCount;
  }
}

// Simulating shared_ptr lifecycle
const sp1 = new SimSharedPtr('0x4000'); // count = 1
const initialCount = sp1.useCount();

const sp2 = sp1.copy(); // count = 2
const countAfterCopy = sp1.useCount();

const res1 = sp1.release(); // sp1 destroyed -> count = 1
const countAfterFirstRelease = res1.remaining;

const res2 = sp2.release(); // sp2 destroyed -> count = 0 -> FREED!
const countAfterFinalRelease = res2.remaining;

console.log('Shared pointer initial reference count upon creation:', initialCount);
console.log('Shared pointer reference count after creating second copy:', countAfterCopy);
console.log('Reference count after first pointer leaves scope:', countAfterFirstRelease);
console.log('Reference count after final owner leaves scope (freed):', countAfterFinalRelease);
console.log('Size of std::unique_ptr on 64-bit architecture in bytes: 8');
console.log('Size of std::shared_ptr on 64-bit architecture in bytes: 16');
