// Lightweight Simulation of C Buffered Stream I/O vs Direct POSIX Syscalls in Node.js

class BufferedStreamSimulator {
  constructor(bufferSize = 64) {
    this.bufferSize = bufferSize;
    this.buffer = [];
    this.kernelSyscalls = 0;
    this.bytesWrittenToDisk = 0;
  }

  writeChar(char) {
    this.buffer.push(char);
    if (this.buffer.length >= this.bufferSize) {
      this.flush();
    }
  }

  flush() {
    if (this.buffer.length > 0) {
      this.kernelSyscalls += 1;
      this.bytesWrittenToDisk += this.buffer.length;
      this.buffer = [];
    }
  }
}

// Comparison simulation
const stream = new BufferedStreamSimulator(64);

// Write 100 individual characters through buffered stream
for (let i = 0; i < 100; i++) {
  stream.writeChar('A');
}
// Flush remaining buffer
stream.flush();

// Direct unbuffered POSIX syscall count for the same 100 writes
const directSyscalls = 100;

console.log('Total characters written to simulated disk file:', stream.bytesWrittenToDisk);
console.log('Kernel system calls triggered by buffered stream I/O:', stream.kernelSyscalls);
console.log('Kernel system calls required by direct unbuffered write():', directSyscalls);
console.log('System call reduction factor through user-space buffering:', directSyscalls / stream.kernelSyscalls);
console.log('Standard POSIX file descriptor for stdout:', 1);
