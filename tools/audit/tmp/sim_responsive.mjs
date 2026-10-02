// Lightweight Simulation of Tailwind Mobile-First Breakpoints & Grid in Node.js

class ResponsiveResolver {
  constructor() {
    this.breakpoints = {
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      '2xl': 1536
    };
  }

  // Evaluates which grid-cols utility is active for a given screen width
  resolveGridCols(classList, viewportWidth) {
    const tokens = classList.split(/\s+/).filter(Boolean);
    let activeCols = 1; // Base default (mobile-first)

    for (const token of tokens) {
      if (token.startsWith('grid-cols-')) {
        activeCols = parseInt(token.replace('grid-cols-', ''), 10);
      } else if (token.includes(':grid-cols-')) {
        const [prefix, colToken] = token.split(':');
        const minWidth = this.breakpoints[prefix];
        if (minWidth && viewportWidth >= minWidth) {
          activeCols = parseInt(colToken.replace('grid-cols-', ''), 10);
        }
      }
    }

    return activeCols;
  }
}

const resolver = new ResponsiveResolver();
const classes = 'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4';

const colsAt400 = resolver.resolveGridCols(classes, 400); // Mobile phone
const colsAt700 = resolver.resolveGridCols(classes, 700); // Phablet / sm
const colsAt800 = resolver.resolveGridCols(classes, 800); // Tablet / md
const colsAt1200 = resolver.resolveGridCols(classes, 1200); // Laptop / lg

console.log('Active columns at 400px (mobile base):', colsAt400);
console.log('Active columns at 700px (sm breakpoint):', colsAt700);
console.log('Active columns at 800px (md breakpoint):', colsAt800);
console.log('Active columns at 1200px (lg breakpoint):', colsAt1200);
console.log('Scale factor from mobile to desktop:', colsAt1200 / colsAt400);
