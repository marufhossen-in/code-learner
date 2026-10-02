// Lightweight Simulation of Tailwind Custom Plugin & matchUtilities in Node.js

class PluginEngine {
  constructor() {
    this.utilities = new Map();
    this.matchers = new Map();
  }

  // Registers static utilities
  addUtilities(utilityMap) {
    for (const [cls, rules] of Object.entries(utilityMap)) {
      this.utilities.set(cls, rules);
    }
  }

  // Registers dynamic parameterized utilities (like matchUtilities)
  matchUtilities(name, generator, { values = {} } = {}) {
    this.matchers.set(name, { generator, values });
  }

  // Resolves class token to CSS
  resolveToken(token) {
    if (this.utilities.has(token)) {
      return this.utilities.get(token);
    }

    // Check dynamic matchers
    for (const [prefix, { generator, values }] of this.matchers) {
      if (token.startsWith(`${prefix}-[` ) && token.endsWith(']')) {
        // Arbitrary value
        const val = token.slice(prefix.length + 2, -1);
        return generator(val);
      } else if (token.startsWith(`${prefix}-`)) {
        // Theme value
        const key = token.replace(`${prefix}-`, '');
        if (values[key]) {
          return generator(values[key]);
        }
      }
    }

    return null;
  }
}

const engine = new PluginEngine();

// 1. Register static utility
engine.addUtilities({
  'scrollbar-none': { 'scrollbar-width': 'none', '-ms-overflow-style': 'none' }
});

// 2. Register dynamic text-shadow utility via matchUtilities
engine.matchUtilities('text-shadow', (value) => ({ 'text-shadow': value }), {
  values: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.4)'
  }
});

const staticRes = engine.resolveToken('scrollbar-none');
const themeRes = engine.resolveToken('text-shadow-sm');
const arbitraryRes = engine.resolveToken('text-shadow-[0_2px_4px_#000]');

console.log('Static utility scrollbar-none exists:', Boolean(staticRes));
console.log('Dynamic text-shadow-sm generated value:', themeRes['text-shadow']);
console.log('Arbitrary text-shadow generated value:', arbitraryRes['text-shadow']);
console.log('Total dynamic plugin matchers registered:', engine.matchers.size);
