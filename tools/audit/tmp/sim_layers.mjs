// Lightweight Simulation of Tailwind @layer Cascade Order & @apply in Node.js

class CascadeSimulator {
  constructor() {
    this.layers = {
      base: new Map(),
      components: new Map(),
      utilities: new Map()
    };
  }

  // Registers base styles
  addBase(selector, rules) {
    this.layers.base.set(selector, rules);
  }

  // Simulates @apply inside @layer components
  addComponent(selector, appliedClasses) {
    const rules = {};
    for (const cls of appliedClasses) {
      if (cls === 'p-4') rules['padding'] = '1rem /* 16px */';
      if (cls === 'bg-blue-600') rules['background-color'] = '#2563eb';
      if (cls === 'rounded-lg') rules['border-radius'] = '0.5rem /* 8px */';
      if (cls === 'text-white') rules['color'] = '#ffffff';
    }
    this.layers.components.set(selector, rules);
  }

  // Registers atomic utility
  addUtility(selector, property, value) {
    this.layers.utilities.set(selector, { [property]: value });
  }

  // Computes computed styles respecting cascade layer priority: base < components < utilities
  resolveElementStyles(elementClasses) {
    const computed = {};
    const tokens = elementClasses.split(/\s+/).filter(Boolean);

    // 1. Apply component classes
    for (const token of tokens) {
      if (this.layers.components.has(`.${token}`)) {
        Object.assign(computed, this.layers.components.get(`.${token}`));
      }
    }

    // 2. Apply utility classes (Higher cascade priority!)
    for (const token of tokens) {
      if (this.layers.utilities.has(`.${token}`)) {
        Object.assign(computed, this.layers.utilities.get(`.${token}`));
      }
    }

    return computed;
  }
}

const sim = new CascadeSimulator();

// Register .btn-primary component using @apply: p-4, bg-blue-600, rounded-lg, text-white
sim.addComponent('.btn-primary', ['p-4', 'bg-blue-600', 'rounded-lg', 'text-white']);

// Register utility override: p-8 (padding 2rem / 32px)
sim.addUtility('.p-8', 'padding', '2rem /* 32px */');

// Button with component class AND an overriding utility class: 'btn-primary p-8'
const elementClasses = 'btn-primary p-8';
const styles = sim.resolveElementStyles(elementClasses);

console.log('Component background color:', styles['background-color']);
console.log('Effective padding after utility override:', styles['padding']);
console.log('Component border radius preserved:', styles['border-radius']);
console.log('Utility successfully overrode component padding:', styles['padding'].includes('32px'));
