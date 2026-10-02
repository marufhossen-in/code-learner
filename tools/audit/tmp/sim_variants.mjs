// Lightweight Simulation of Tailwind State Modifiers & Dark Mode in Node.js

class VariantEvaluator {
  constructor() {
    this.colorMap = {
      'bg-blue-500': '#3b82f6',
      'bg-blue-600': '#2563eb',
      'bg-slate-800': '#1e293b',
      'bg-white': '#ffffff'
    };
  }

  // Evaluates background color based on interaction and theme state
  evaluateBackground(classes, { isHovered = false, isDarkMode = false } = {}) {
    const tokens = classes.split(/\s+/).filter(Boolean);
    let baseBg = '#ffffff';
    let hoverBg = null;
    let darkBg = null;

    for (const token of tokens) {
      if (token.startsWith('bg-') && !token.includes(':')) {
        baseBg = this.colorMap[token] || baseBg;
      } else if (token.startsWith('hover:bg-')) {
        const raw = token.replace('hover:', '');
        hoverBg = this.colorMap[raw] || hoverBg;
      } else if (token.startsWith('dark:bg-')) {
        const raw = token.replace('dark:', '');
        darkBg = this.colorMap[raw] || darkBg;
      }
    }

    if (isDarkMode && darkBg) return darkBg;
    if (isHovered && hoverBg) return hoverBg;
    return baseBg;
  }
}

const evaluator = new VariantEvaluator();
const buttonClasses = 'bg-blue-500 hover:bg-blue-600 dark:bg-slate-800';

const defaultColor = evaluator.evaluateBackground(buttonClasses, { isHovered: false, isDarkMode: false });
const hoverColor = evaluator.evaluateBackground(buttonClasses, { isHovered: true, isDarkMode: false });
const darkColor = evaluator.evaluateBackground(buttonClasses, { isHovered: false, isDarkMode: true });

console.log('Default state background hex:', defaultColor);
console.log('Hover state background hex:', hoverColor);
console.log('Dark mode state background hex:', darkColor);
console.log('Hover modifies base color:', defaultColor !== hoverColor);
console.log('Dark mode modifies base color:', defaultColor !== darkColor);
