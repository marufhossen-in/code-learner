// Lightweight Simulation of Tailwind CSS JIT Utility Engine in Node.js

class TailwindJITEngine {
  constructor() {
    this.utilityMap = {
      'p-4': 'padding: 1rem /* 16px */;',
      'p-6': 'padding: 1.5rem /* 24px */;',
      'bg-white': 'background-color: rgb(255 255 255);',
      'bg-slate-900': 'background-color: rgb(15 23 42);',
      'rounded-xl': 'border-radius: 0.75rem /* 12px */;',
      'shadow-md': 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);',
      'flex': 'display: flex;',
      'items-center': 'align-items: center;'
    };
  }

  // Parses class string from HTML markup and compiles minimal CSS rules
  compileClasses(classString) {
    const tokens = classString.split(/\s+/).filter(Boolean);
    const rules = [];

    for (const token of tokens) {
      if (this.utilityMap[token]) {
        rules.push(`.${token} { ${this.utilityMap[token]} }`);
      } else if (token.startsWith('w-[') && token.endsWith(']')) {
        // Arbitrary value JIT syntax
        const val = token.slice(3, -1);
        rules.push(`.${token.replace('[', '\\[').replace(']', '\\]')} { width: ${val}; }`);
      }
    }

    return {
      tokensFound: tokens.length,
      generatedRulesCount: rules.length,
      cssOutput: rules.join('\n')
    };
  }
}

const engine = new TailwindJITEngine();
const htmlClasses = 'flex items-center p-4 bg-white rounded-xl shadow-md w-[320px]';
const result = engine.compileClasses(htmlClasses);

console.log('Total utility tokens scanned:', result.tokensFound);
console.log('Total JIT CSS rules generated:', result.generatedRulesCount);
console.log('Generated CSS contains padding 16px:', result.cssOutput.includes('16px'));
console.log('Generated CSS contains arbitrary width 320px:', result.cssOutput.includes('320px'));
