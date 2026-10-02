// Lightweight Simulation of C Call Stack, Stack Frames & Recursion in Node.js

class StackFrame {
  constructor(functionName, returnAddress, locals) {
    this.functionName = functionName;
    this.returnAddress = returnAddress;
    this.locals = locals;
  }
}

class CallStackSimulator {
  constructor(maxDepth = 1000) {
    this.frames = [];
    this.maxDepth = maxDepth;
    this.peakDepth = 0;
  }

  push(frame) {
    if (this.frames.length >= this.maxDepth) {
      throw new Error('Segmentation Fault: Stack Overflow (Exceeded maximum call stack limit)');
    }
    this.frames.push(frame);
    if (this.frames.length > this.peakDepth) {
      this.peakDepth = this.frames.length;
    }
  }

  pop() {
    return this.frames.pop();
  }

  currentDepth() {
    return this.frames.length;
  }
}

const stack = new CallStackSimulator();

// Push main frame
stack.push(new StackFrame('main', '0x0000', { status: 0 }));

// Recursive factorial function simulating call stack frames
function simulatedFactorial(n, retAddr) {
  stack.push(new StackFrame(`factorial(${n})`, retAddr, { n }));
  let result;
  if (n <= 1) {
    result = 1;
  } else {
    result = n * simulatedFactorial(n - 1, '0x4010');
  }
  stack.pop();
  return result;
}

const factOf3 = simulatedFactorial(3, '0x4000');
const peakFrames = stack.peakDepth;
const finalFramesRemaining = stack.currentDepth();

console.log('Factorial of 3 computed via recursive stack frames:', factOf3);
console.log('Peak stack frames active during recursion:', peakFrames);
console.log('Stack frames remaining after function returns to main:', finalFramesRemaining);
console.log('First 6 integer arguments passed via fast CPU registers on x86-64: 6');
