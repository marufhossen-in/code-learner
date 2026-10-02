// Test simulations for all 8 Canvas lessons

// Sim 1: High-DPI Retina Canvas Buffer Sizing
function sim1() {
  const cssWidth = 400;
  const cssHeight = 300;
  const dpr = 2; // Retina 2x scale
  const bufferWidth = cssWidth * dpr; // 800
  const bufferHeight = cssHeight * dpr; // 600
  const totalPixels = bufferWidth * bufferHeight; // 480000
  return { cssWidth, cssHeight, dpr, bufferWidth, bufferHeight, totalPixels };
}

// Sim 2: Degrees to Radians Circle Math
function sim2() {
  const deg360 = 360;
  const deg180 = 180;
  const rad360 = Number(((deg360 * Math.PI) / 180).toFixed(2)); // 6.28
  const rad180 = Number(((deg180 * Math.PI) / 180).toFixed(2)); // 3.14
  return { deg360, rad360, deg180, rad180 };
}

// Sim 3: Transformation Matrix Point Coordinate Mapping
function sim3() {
  const x = 10;
  const y = 20;
  const dx = 50;
  const dy = 100;
  const scale = 2;
  const transformedX = (x * scale) + dx; // 70
  const transformedY = (y * scale) + dy; // 140
  return { x, y, dx, dy, scale, transformedX, transformedY };
}

// Sim 4: Linear Gradient Stop Value Interpolation
function sim4() {
  const startVal = 0;   // Pure black
  const endVal = 255;   // Pure white
  const position = 0.5; // Halfway (50%)
  const interpolated = Math.round(startVal + (endVal - startVal) * position); // 128
  return { startVal, endVal, position, interpolated };
}

// Sim 5: Animation Frame Delta Time & FPS
function sim5() {
  const prevTime = 1000;
  const currTime = 1016.67;
  const dt = Number((currTime - prevTime).toFixed(2)); // 16.67 ms
  const fps = Math.round(1000 / dt); // 60 FPS
  return { prevTime, currTime, dt, fps };
}

// Sim 6: ImageData RGBA Buffer & Byte Offset
function sim6() {
  const width = 200;
  const height = 100;
  const bytesPerPixel = 4; // RGBA
  const totalBytes = width * height * bytesPerPixel; // 80000 bytes
  const targetX = 10;
  const targetY = 20;
  const byteOffset = (targetY * width + targetX) * bytesPerPixel; // 16040
  return { width, height, bytesPerPixel, totalBytes, targetX, targetY, byteOffset };
}

// Sim 7: Pointer Coordinate Normalization
function sim7() {
  const clientX = 250;
  const clientY = 180;
  const rectLeft = 50;
  const rectTop = 30;
  const canvasX = clientX - rectLeft; // 200
  const canvasY = clientY - rectTop;  // 150
  return { clientX, clientY, rectLeft, rectTop, canvasX, canvasY };
}

// Sim 8: Undo/Redo Action Stack
function sim8() {
  const undoStack = ['stroke1', 'stroke2', 'stroke3']; // 3 strokes drawn
  const redoStack = [];
  // User undoes 1 stroke
  const popped = undoStack.pop();
  redoStack.push(popped);
  return {
    undoCount: undoStack.length, // 2
    redoCount: redoStack.length  // 1
  };
}

console.log('Sim 1:', sim1());
console.log('Sim 2:', sim2());
console.log('Sim 3:', sim3());
console.log('Sim 4:', sim4());
console.log('Sim 5:', sim5());
console.log('Sim 6:', sim6());
console.log('Sim 7:', sim7());
console.log('Sim 8:', sim8());
