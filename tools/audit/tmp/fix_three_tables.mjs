import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const dir = 'src/content/threejs/lessons';
const files = readdirSync(dir).filter(f => f.endsWith('.ts'));

for (const f of files) {
  const p = join(dir, f);
  let content = readFileSync(p, 'utf8');

  // Convert type: 'comparison' to type: 'table'
  // Regex to match comparison block
  const compRegex = /\{\s*type:\s*'comparison',\s*title:\s*(\{[^}]+\}),\s*headers:\s*\{\s*aspect:\s*(\{[^}]+\}),\s*traditional:\s*(\{[^}]+\}),\s*modern:\s*(\{[^}]+\})\s*\},\s*rows:\s*\[([\s\S]*?)\]\s*\}/;
  
  const m = compRegex.exec(content);
  if (m) {
    const title = m[1];
    const h1 = m[2];
    const h2 = m[3];
    const h3 = m[4];
    const rawRows = m[5];

    // Extract each row object
    const rowObjs = [...rawRows.matchAll(/\{\s*aspect:\s*(\{[^}]+\}),\s*traditional:\s*(\{[^}]+\}),\s*modern:\s*(\{[^}]+\})\s*\}/g)];
    const newRows = rowObjs.map(r => `        [\n          ${r[1]},\n          ${r[2]},\n          ${r[3]}\n        ]`).join(',\n');

    const tableBlock = `{
      type: 'table',
      caption: ${title},
      head: [
        ${h1},
        ${h2},
        ${h3}
      ],
      rows: [
${newRows}
      ]
    }`;

    content = content.replace(m[0], tableBlock);
    writeFileSync(p, content, 'utf8');
    console.log(`Updated table in ${f}`);
  }
}
