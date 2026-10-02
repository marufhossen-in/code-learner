// Lightweight Simulation of Tailwind Design Tokens & Theme Resolution in Node.js

class TokenEngine {
  constructor(config = {}) {
    // Default base tokens
    this.defaultTheme = {
      spacing: {
        '1': '0.25rem /* 4px */',
        '2': '0.5rem /* 8px */',
        '4': '1rem /* 16px */',
        '6': '1.5rem /* 24px */',
        '8': '2rem /* 32px */'
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        slate: { '500': '#64748b', '900': '#0f172a' }
      }
    };

    // Merge theme extensions
    this.resolvedTheme = this.resolveConfig(config);
  }

  resolveConfig(config) {
    const extend = config.theme?.extend || {};
    return {
      spacing: { ...this.defaultTheme.spacing, ...(extend.spacing || {}) },
      colors: { ...this.defaultTheme.colors, ...(extend.colors || {}) }
    };
  }

  // Resolves a utility key to its token value
  resolveSpacing(key) {
    return this.resolvedTheme.spacing[key] || null;
  }

  resolveColor(family, shade) {
    const fam = this.resolvedTheme.colors[family];
    if (!fam) return null;
    return typeof fam === 'object' ? fam[shade] : fam;
  }
}

// User configuration extending brand colors and custom spacing rhythm
const customConfig = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem /* 72px */'
      },
      colors: {
        primary: {
          '50': '#eff6ff',
          '500': '#3b82f6',
          '900': '#1e3a8a'
        }
      }
    }
  }
};

const engine = new TokenEngine(customConfig);

const p4Val = engine.resolveSpacing('4');
const p18Val = engine.resolveSpacing('18');
const primary500 = engine.resolveColor('primary', '500');
const defaultWhite = engine.resolveColor('white');

console.log('Standard spacing 4 value:', p4Val);
console.log('Extended spacing 18 value:', p18Val);
console.log('Custom brand primary 500 hex:', primary500);
console.log('Preserved default white hex:', defaultWhite);
console.log('Total spacing tokens available:', Object.keys(engine.resolvedTheme.spacing).length);
