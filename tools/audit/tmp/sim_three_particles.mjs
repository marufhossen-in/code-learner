// Three.js InstancedMesh vs Individual Mesh Performance Simulator

const objectCount = 10000;
const cpuOverheadPerDrawCallMs = 0.0025; // 2.5 microseconds per WebGL draw call state switch

// 10,000 separate Mesh objects
const separateDrawCalls = objectCount;
const separateCpuTimeMs = separateDrawCalls * cpuOverheadPerDrawCallMs;

// 1 InstancedMesh with 10,000 instances
const instancedDrawCalls = 1;
const instancedCpuTimeMs = instancedDrawCalls * cpuOverheadPerDrawCallMs;

// Draw call reduction factor
const reductionFactor = separateDrawCalls / instancedDrawCalls;

// 60FPS frame budget is 16.66ms
const frameBudgetMs = 16.66;
const separateCpuBudgetPercent = (separateCpuTimeMs / frameBudgetMs) * 100;
const instancedCpuBudgetPercent = (instancedCpuTimeMs / frameBudgetMs) * 100;

console.log('Total objects to render in 3D scene:', objectCount);
console.log('Draw calls required for separate Mesh objects:', separateDrawCalls);
console.log('Draw calls required for single InstancedMesh:', instancedDrawCalls);
console.log('CPU draw call overhead for separate meshes in ms:', separateCpuTimeMs);
console.log('CPU budget percentage consumed by separate draw calls at 60FPS:', Number(separateCpuBudgetPercent.toFixed(1)));
console.log('CPU budget percentage consumed by InstancedMesh at 60FPS:', Number(instancedCpuBudgetPercent.toFixed(4)));
