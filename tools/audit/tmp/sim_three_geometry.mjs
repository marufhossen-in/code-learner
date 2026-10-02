// Three.js BufferGeometry & Vector Math Simulator

class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  distanceTo(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    const dz = this.z - v.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
}

// Simulating Indexed vs Non-Indexed BufferGeometry for a 3D Cube (6 faces * 2 triangles = 12 triangles)
const trianglesCount = 12;

// Non-indexed: 3 vertices per triangle = 36 vertices total
const nonIndexedVertexCount = trianglesCount * 3; // 36 vertices
const nonIndexedFloats = nonIndexedVertexCount * 3; // 108 floats (x, y, z)
const nonIndexedBytes = nonIndexedFloats * 4; // 432 bytes in Float32Array

// Indexed: Unique vertices of a cube = 8 vertices
const indexedVertexCount = 8;
const indexedFloats = indexedVertexCount * 3; // 24 floats
const indexCount = trianglesCount * 3; // 36 indices
const indexedBytes = (indexedFloats * 4) + (indexCount * 2); // 96 bytes (Float32) + 72 bytes (Uint16) = 168 bytes

const memorySavingsPercent = ((nonIndexedBytes - indexedBytes) / nonIndexedBytes) * 100;

const vA = new Vector3(0, 0, 0);
const vB = new Vector3(3, 4, 0);
const distanceBetweenAandB = vA.distanceTo(vB);

console.log('Total triangles in standard 3D BoxGeometry:', trianglesCount);
console.log('Unique vertices required in Indexed BufferGeometry:', indexedVertexCount);
console.log('Total vertices required in Non-Indexed BufferGeometry:', nonIndexedVertexCount);
console.log('Calculated Euclidean distance between Vector A and Vector B:', distanceBetweenAandB);
console.log('Memory savings percentage using Indexed BufferGeometry:', Number(memorySavingsPercent.toFixed(1)));
