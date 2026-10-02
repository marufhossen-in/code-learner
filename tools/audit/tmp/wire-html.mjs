import { readFileSync, writeFileSync } from 'node:fs';
const p = 'src/content/html/index.ts';
let s = readFileSync(p, 'utf8');
if (!s.includes('shelfOfOddmentsLesson')) {
  s = s.replace(/import \{ modernShelfLesson \}[^\n]*\n/, (m) => m + "import { shelfOfOddmentsLesson } from './lessons/the-shelf-of-oddments';\n");
  s = s.replace(/lessons: \[([^\]]*)\]/, (m, g) => `lessons: [${g.replace(/\s*$/, '')}, shelfOfOddmentsLesson]`);
  writeFileSync(p, s);
  console.log('wired');
} else console.log('already wired');
