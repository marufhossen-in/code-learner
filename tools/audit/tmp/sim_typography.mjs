// Lightweight Simulation of Tailwind Typography Scale & Line-Height in Node.js

class TypographyScaleEngine {
  constructor() {
    this.typeScale = {
      'text-xs': { fontSize: '0.75rem /* 12px */', lineHeight: '1rem /* 16px */' },
      'text-sm': { fontSize: '0.875rem /* 14px */', lineHeight: '1.25rem /* 20px */' },
      'text-base': { fontSize: '1rem /* 16px */', lineHeight: '1.5rem /* 24px */' },
      'text-lg': { fontSize: '1.125rem /* 18px */', lineHeight: '1.75rem /* 28px */' },
      'text-xl': { fontSize: '1.25rem /* 20px */', lineHeight: '1.75rem /* 28px */' },
      'text-2xl': { fontSize: '1.5rem /* 24px */', lineHeight: '2rem /* 32px */' },
      'text-3xl': { fontSize: '1.875rem /* 30px */', lineHeight: '2.25rem /* 36px */' }
    };
  }

  resolveToken(token) {
    return this.typeScale[token] || null;
  }

  // Simulates line-clamp truncation
  truncateLines(text, maxChars) {
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars).trim() + '...';
  }
}

const engine = new TypographyScaleEngine();

const baseToken = engine.resolveToken('text-base');
const xlToken = engine.resolveToken('text-xl');
const text3xl = engine.resolveToken('text-3xl');

const articleText = 'Tailwind CSS utility-first typography creates harmonious vertical reading rhythm across articles.';
const clamped = engine.truncateLines(articleText, 45);

console.log('text-base font size:', baseToken.fontSize);
console.log('text-base paired line height:', baseToken.lineHeight);
console.log('text-3xl font size:', text3xl.fontSize);
console.log('Clamped text output:', clamped);
console.log('max-w-prose standard width characters: 65');
