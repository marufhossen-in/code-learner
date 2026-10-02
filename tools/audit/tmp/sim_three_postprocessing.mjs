// Three.js Post-Processing & UnrealBloomPass Luminance Extraction Simulator

// Relative luminance formula per ITU-R BT.709
function calculateLuminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// UnrealBloomPass threshold function
function extractBloom(luminance, threshold = 0.85, smoothWidth = 0.1) {
  if (luminance <= threshold) return 0;
  // Soft knee thresholding
  const excess = luminance - threshold;
  return Math.min(1.0, excess / smoothWidth);
}

// Pixel A: standard diffuse surface (R: 0.6, G: 0.5, B: 0.4)
const lumA = calculateLuminance(0.6, 0.5, 0.4);
const bloomA = extractBloom(lumA, 0.85);

// Pixel B: intense neon emissive laser (R: 1.0, G: 0.95, B: 0.9)
const lumB = calculateLuminance(1.0, 0.95, 0.9);
const bloomB = extractBloom(lumB, 0.85);

// Pixel C: ultra-bright HDR specular point (R: 2.5, G: 2.2, B: 2.0)
const lumC = calculateLuminance(2.5, 2.2, 2.0);
const bloomC = extractBloom(lumC, 0.85);

console.log('Luminance of standard surface pixel:', Number(lumA.toFixed(3)));
console.log('Bloom extraction factor for standard surface (threshold 0.85):', bloomA);
console.log('Luminance of neon emissive laser pixel:', Number(lumB.toFixed(3)));
console.log('Bloom extraction factor for neon emissive laser:', Number(bloomB.toFixed(3)));
console.log('Luminance of HDR specular highlight pixel:', Number(lumC.toFixed(3)));
console.log('Bloom extraction factor for HDR specular highlight:', bloomC);
