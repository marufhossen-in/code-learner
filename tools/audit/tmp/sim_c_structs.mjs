// Lightweight Simulation of C Struct Padding, Alignment & Union Memory in Node.js

class StructLayoutSimulator {
  static computeUnoptimizedLayout() {
    // struct Unoptimized { char a; int b; char c; };
    // char a: 1 byte at offset 0
    // padding: 3 bytes (offsets 1, 2, 3) to align int to multiple of 4
    // int b: 4 bytes at offset 4
    // char c: 1 byte at offset 8
    // trailing padding: 3 bytes (offsets 9, 10, 11) to align struct to max alignment (4)
    const totalBytes = 12;
    const paddingBytes = 6;
    return { totalBytes, paddingBytes };
  }

  static computeOptimizedLayout() {
    // struct Optimized { int b; char a; char c; };
    // int b: 4 bytes at offset 0
    // char a: 1 byte at offset 4
    // char c: 1 byte at offset 5
    // trailing padding: 2 bytes (offsets 6, 7) to align struct to max alignment (4)
    const totalBytes = 8;
    const paddingBytes = 2;
    return { totalBytes, paddingBytes };
  }

  static computeUnionSize() {
    // union Data { char c; int i; double d; };
    // size is max(sizeof(char), sizeof(int), sizeof(double)) = max(1, 4, 8) = 8
    return 8;
  }
}

const unoptimized = StructLayoutSimulator.computeUnoptimizedLayout();
const optimized = StructLayoutSimulator.computeOptimizedLayout();
const bytesSaved = unoptimized.totalBytes - optimized.totalBytes;
const unionSize = StructLayoutSimulator.computeUnionSize();

console.log('Unoptimized struct size in bytes with alignment padding:', unoptimized.totalBytes);
console.log('Optimized struct size in bytes after reordering fields:', optimized.totalBytes);
console.log('Total padding bytes saved per struct instance:', bytesSaved);
console.log('Size of union containing char, int, and double in bytes:', unionSize);
