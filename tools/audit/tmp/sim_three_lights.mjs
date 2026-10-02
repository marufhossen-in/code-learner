// Light Attenuation, Shadow Map VRAM & ACES Filmic Tone Mapping Simulator

// Physically based quadratic decay: I(d) = I0 / (1 + decay * d^2)
function calculateLightIntensity(i0, distance, decay = 2) {
  return i0 / (1 + decay * Math.pow(distance, 2));
}

// ACES Filmic Tone Mapping curve approximation: maps HDR input [0, inf) to LDR [0, 1]
function acesFilmicToneMapping(x) {
  const a = 2.51;
  const b = 0.03;
  const c = 2.43;
  const d = 0.59;
  const e = 0.14;
  return Math.min(1.0, Math.max(0.0, (x * (a * x + b)) / (x * (c * x + d) + e)));
}

// Shadow Map Memory calculation
function calculateShadowMapMemoryMB(resolution, isCubeMap = false) {
  const bytesPerPixel = 4; // 32-bit float depth texture
  const faces = isCubeMap ? 6 : 1;
  const totalBytes = resolution * resolution * bytesPerPixel * faces;
  return totalBytes / (1024 * 1024);
}

const sourceIntensity = 100.0;
const intensityAt1m = calculateLightIntensity(sourceIntensity, 1.0);
const intensityAt4m = calculateLightIntensity(sourceIntensity, 4.0);

const directionalShadowMB = calculateShadowMapMemoryMB(2048, false);
const pointLightShadowMB = calculateShadowMapMemoryMB(1024, true);

// Tone mapping an overexposed HDR highlight (value = 4.0)
const mappedHighlight = acesFilmicToneMapping(4.0);

console.log('Light intensity at 1 meter distance in lux units:', Number(intensityAt1m.toFixed(2)));
console.log('Light intensity at 4 meter distance following inverse square decay:', Number(intensityAt4m.toFixed(2)));
console.log('VRAM memory consumption for 2048x2048 DirectionalLight shadow map in MB:', directionalShadowMB);
console.log('VRAM memory consumption for 1024x1024 PointLight 6-sided cubemap shadow in MB:', pointLightShadowMB);
console.log('Tone-mapped LDR value for HDR highlight intensity 4.0 using ACES curve:', Number(mappedHighlight.toFixed(3)));
