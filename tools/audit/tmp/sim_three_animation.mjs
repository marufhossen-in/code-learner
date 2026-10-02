// Three.js Animation Loop, Delta Time & Quaternion Slerp Simulator

// Simulating object rotation over 1 second at different monitor refresh rates
const targetAngularSpeed = Math.PI; // 180 degrees (3.14159 rad) per second

function simulateRotationOver1Sec(refreshRate) {
  const frameCount = refreshRate;
  const delta = 1.0 / refreshRate; // frame delta in seconds
  let angle = 0;

  for (let i = 0; i < frameCount; i++) {
    angle += targetAngularSpeed * delta;
  }
  return angle;
}

const angle60Hz = simulateRotationOver1Sec(60);
const angle120Hz = simulateRotationOver1Sec(120);
const angle240Hz = simulateRotationOver1Sec(240);

// Quaternion Spherical Linear Interpolation (SLERP) simulation
// Slerp between quat A (0 deg) and quat B (90 deg around Y) with damping alpha = 0.1
function slerpAngle(currentDeg, targetDeg, alpha) {
  return currentDeg + (targetDeg - currentDeg) * alpha;
}

let smoothedAngle = 0;
const targetOrientation = 90.0;
const dampingFactor = 0.1;

// 5 frames of damped slerp
for (let frame = 1; frame <= 5; frame++) {
  smoothedAngle = slerpAngle(smoothedAngle, targetOrientation, dampingFactor);
}

console.log('Total rotation angle at 60Hz display in radians:', Number(angle60Hz.toFixed(3)));
console.log('Total rotation angle at 120Hz display in radians:', Number(angle120Hz.toFixed(3)));
console.log('Total rotation angle at 240Hz display in radians:', Number(angle240Hz.toFixed(3)));
console.log('Target orientation in degrees:', targetOrientation);
console.log('Smoothed orientation after 5 frames of damped slerp in degrees:', Number(smoothedAngle.toFixed(2)));
