// Three.js Raycaster & DRACO 3D Asset Optimization Simulator

// Ray-Sphere Intersection Math
// Ray equation: P(t) = O + t * D
// Sphere equation: |P - C|^2 = R^2
function intersectRaySphere(rayOrigin, rayDir, sphereCenter, sphereRadius) {
  const ocX = rayOrigin.x - sphereCenter.x;
  const ocY = rayOrigin.y - sphereCenter.y;
  const ocZ = rayOrigin.z - sphereCenter.z;

  const a = rayDir.x * rayDir.x + rayDir.y * rayDir.y + rayDir.z * rayDir.z;
  const b = 2.0 * (ocX * rayDir.x + ocY * rayDir.y + ocZ * rayDir.z);
  const c = (ocX * ocX + ocY * ocY + ocZ * ocZ) - (sphereRadius * sphereRadius);

  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null; // No hit

  const t = (-b - Math.sqrt(discriminant)) / (2.0 * a);
  return {
    hit: true,
    distance: t,
    hitPointZ: rayOrigin.z + t * rayDir.z
  };
}

const cameraOrigin = { x: 0, y: 0, z: 5 };
const rayDirection = { x: 0, y: 0, z: -1 }; // Looking straight ahead toward origin
const modelCenter = { x: 0, y: 0, z: 0 };
const modelRadius = 1.5;

const hitResult = intersectRaySphere(cameraOrigin, rayDirection, modelCenter, modelRadius);

// DRACO 3D Mesh Compression Simulation
const rawGLBSizeBytes = 12500000; // 12.5 MB uncompressed GLB
const dracoCompressedBytes = 2800000; // 2.8 MB DRACO compressed
const compressionRatio = ((rawGLBSizeBytes - dracoCompressedBytes) / rawGLBSizeBytes) * 100;

console.log('Raycaster hit detected on 3D interactive mesh:', hitResult.hit ? 1 : 0);
console.log('Distance from camera to mesh hit point in units:', Number(hitResult.distance.toFixed(1)));
console.log('Hit point Z-coordinate in 3D world space:', Number(hitResult.hitPointZ.toFixed(1)));
console.log('Raw uncompressed GLB asset size in MB:', rawGLBSizeBytes / (1000 * 1000));
console.log('DRACO compressed GLB asset size in MB:', dracoCompressedBytes / (1000 * 1000));
console.log('Bandwidth savings percentage achieved via DRACO compression:', Number(compressionRatio.toFixed(1)));
