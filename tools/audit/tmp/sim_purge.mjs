// Lightweight Simulation of Tailwind Purge Engine & Bundle Size Efficiency in Node.js

class PurgeBundleSimulator {
  constructor() {
    this.utilityDefinitions = {
      'flex': 'display: flex;',
      'items-center': 'align-items: center;',
      'p-4': 'padding: 1rem;',
      'bg-white': 'background-color: #ffffff;',
      'rounded-xl': 'border-radius: 0.75rem;',
      'shadow-md': 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);',
      'hover:bg-slate-50': ':hover { background-color: #f8fafc; }',
      'text-slate-900': 'color: #0f172a;'
    };
  }

  // Scans source content for unique utility classes
  purgeAndCompile(htmlContent) {
    const classAttrRegex = /class="([^"]+)"/g;
    const usedClasses = new Set();
    let match;

    while ((match = classAttrRegex.exec(htmlContent)) !== null) {
      const tokens = match[1].split(/\s+/).filter(Boolean);
      for (const token of tokens) {
        if (this.utilityDefinitions[token]) {
          usedClasses.add(token);
        }
      }
    }

    const compiledRules = [];
    for (const cls of usedClasses) {
      compiledRules.push(`.${cls} { ${this.utilityDefinitions[cls]} }`);
    }

    const compiledCSS = compiledRules.join('\n');
    return {
      uniqueClassesCount: usedClasses.size,
      compiledSizeBytes: Buffer.byteLength(compiledCSS, 'utf8'),
      css: compiledCSS
    };
  }
}

const simulator = new PurgeBundleSimulator();

// Simulating an application template repeating 1,000 card components
const singleCard = '<div class="flex items-center p-4 bg-white rounded-xl shadow-md hover:bg-slate-50 text-slate-900">Card Item</div>';
const fullPage = singleCard.repeat(1000);

const result = simulator.purgeAndCompile(fullPage);

console.log('Total card components rendered on page: 1000');
console.log('Total unique utility classes purged:', result.uniqueClassesCount);
console.log('Generated production CSS size in bytes:', result.compiledSizeBytes);
console.log('Production CSS size is under 10KB:', result.compiledSizeBytes < 10240);
