import { readFileSync, writeFileSync } from 'node:fs';
const p = 'src/content/python/index.ts';
let s = readFileSync(p, 'utf8');
if (s.includes('tuplesAndSetsLesson')) { console.log('already wired'); }
else {
  const firstImport = s.match(/^import[^\n]*from '\.\/lessons\/[^']*';\n/m);
  const line = `import { tuplesAndSetsLesson } from './lessons/tuples-and-sets-point-by-point';\n`;
  if (firstImport) s = s.replace(firstImport[0], firstImport[0] + line);
  else { console.log('no import anchor'); process.exit(1); }
  s = s.replace(/lessons: \[([^\]]*?)\]/, (m, g) => `lessons: [${g.trim()}, tuplesAndSetsLesson]`);
  writeFileSync(p, s);
  console.log('wired');
}
