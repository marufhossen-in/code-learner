// Lightweight Simulation of C++20 Lock-Free SPSC Ring Buffer & Concurrency in Node.js

class AtomicRingBuffer {
  constructor(capacity = 8) {
    this.capacity = capacity;
    this.buffer = new Array(capacity).fill(null);
    this.head = 0; // Producer write index (atomic)
    this.tail = 0; // Consumer read index (atomic)
    this.totalPushed = 0;
    this.totalPopped = 0;
  }

  // Producer push (acquire-release order simulation)
  push(item) {
    const nextHead = (this.head + 1) % this.capacity;
    if (nextHead === this.tail) {
      return false; // Buffer full
    }
    this.buffer[this.head] = item;
    this.head = nextHead;
    this.totalPushed += 1;
    return true;
  }

  // Consumer pop (acquire-release order simulation)
  pop() {
    if (this.head === this.tail) {
      return null; // Buffer empty
    }
    const item = this.buffer[this.tail];
    this.buffer[this.tail] = null;
    this.tail = (this.tail + 1) % this.capacity;
    this.totalPopped += 1;
    return item;
  }

  occupancy() {
    return (this.head - this.tail + this.capacity) % this.capacity;
  }
}

const ring = new AtomicRingBuffer(8);

// Producer pushes 4 messages
ring.push(100);
ring.push(200);
ring.push(300);
ring.push(400);

// Consumer pops 2 messages
const firstRead = ring.pop(); // 100
const secondRead = ring.pop(); // 200

const remainingItems = ring.occupancy(); // 2
const totalItemsPushed = ring.totalPushed; // 4
const totalItemsPopped = ring.totalPopped; // 2

console.log('First message consumed from atomic ring buffer:', firstRead);
console.log('Second message consumed from atomic ring buffer:', secondRead);
console.log('Unconsumed messages lingering in ring buffer pool:', remainingItems);
console.log('Total messages successfully written by producer:', totalItemsPushed);
console.log('C++ standard introducing std::jthread and cooperative cancellation: 20');
