// PBR Fresnel Reflectance & Texture Color Space Math Simulator

// Schlick's approximation for Fresnel reflectance: F = F0 + (1 - F0) * (1 - cosTheta)^5
function calculateFresnel(f0, cosTheta) {
  return f0 + (1 - f0) * Math.pow(1 - cosTheta, 5);
}

// Convert sRGB color component [0, 255] to Linear float [0, 1] for PBR shader
function sRGBToLinear(c) {
  const norm = c / 255;
  return norm <= 0.04045 ? norm / 12.92 : Math.pow((norm + 0.055) / 1.055, 2.4);
}

// Dielectric material (e.g. plastic, water, wood) has F0 ≈ 0.04
const f0Dielectric = 0.04;
// Metallic material (e.g. gold, chrome) has F0 ≈ 0.95
const f0Metal = 0.95;

// Direct view: normal dot view = 1.0 (0 degrees)
const directDielectric = calculateFresnel(f0Dielectric, 1.0);
// Glancing grazing angle: normal dot view = 0.1 (≈ 84.3 degrees)
const grazingDielectric = calculateFresnel(f0Dielectric, 0.1);

// Metallic grazing reflection
const grazingMetal = calculateFresnel(f0Metal, 0.1);

// Midtone gray sRGB (128 out of 255) to Linear space
const linearGray = sRGBToLinear(128);

console.log('Dielectric base reflectivity at direct 0-degree angle (F0):', directDielectric);
console.log('Dielectric reflectivity at glancing 84-degree grazing angle:', Number(grazingDielectric.toFixed(3)));
console.log('Metal reflectivity at glancing 84-degree grazing angle:', Number(grazingMetal.toFixed(3)));
console.log('Midtone sRGB value 128 converted to Linear PBR light space:', Number(linearGray.toFixed(3)));
console.log('Standard metallic parameter maximum value for pure conductors:', 1.0);
