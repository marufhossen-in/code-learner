// mkcode.mjs — turn a snippet spec into a lesson `code` block whose printed output is real.
//
//   node tools/audit/tmp/mkcode.mjs tools/audit/tmp/spec-menu.txt > tools/audit/tmp/out-menu.txt
//
// Spec format, repeated:
//   --- <lang> <filename>
//   <code, verbatim>
//   --- ...
// The code is executed with node (js) or bash (bash/sh); the captured stdout is pasted back into the
// block as a comment, so what a learner sees printed is what this tool actually observed.
import { readFileSync } from 'node:fs';
import { execFileSync, execSync } from 'node:child_process';
import { writeFileSync, mkdirSync } from 'node:fs';

const spec = readFileSync(process.argv[2], 'utf8');
const parts = spec.split(/^---\s*/m).map((p) => p.trim()).filter(Boolean);
const tmp = 'tools/audit/tmp/run';
mkdirSync(tmp, { recursive: true });
const blocks = [];
for (const part of parts) {
  const nl = part.indexOf('\n');
  const [lang, filename] = part.slice(0, nl).trim().split(/\s+/);
  const code = part.slice(nl + 1).replace(/\s+$/, '');
  const file = `${tmp}/${filename}`;
  writeFileSync(file, code + '\n');
  let out = '';
  try {
    if (lang === 'bash' || lang === 'sh') out = execSync(`bash ${file}`, { encoding: 'utf8', timeout: 20000 });
    else out = execFileSync(process.execPath, [file], { encoding: 'utf8', timeout: 20000 });
  } catch (e) {
    out = `ERROR ${(e.stderr || e.message || '').toString().split('\n').slice(0, 3).join(' / ')}`;
  }
  out = out.replace(/\s+$/, '');
  if (out.includes('```')) throw new Error('output contains a code fence');
  blocks.push({ lang, filename, code, out });
}
const esc = (s) => s.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$\{/g, '\\${');
const MARK = { js: '//', bash: '#', sh: '#', sql: '--', text: '' };
for (const b of blocks) {
  const mark = MARK[b.lang] ?? '//';
  const tail = b.out
    .split('\n')
    .map((l) => (mark ? `${mark} ${l}` : l))
    .join('\n');
  const codeWithOutput = `${b.code}\n\n${mark ? `${mark} --- what this file prints, one run ---\n` : ''}${tail}`;
  console.log(`    {
      type: 'code',
      lang: '${b.lang}',
      filename: '${b.filename}',
      code: \`${esc(codeWithOutput)}\`
    },`);
}
// also emit the plain blocks so a splice script can paste code + output together
writeFileSync(process.argv[2].replace('spec-', 'out-').replace('.txt', '.json'), JSON.stringify(blocks, null, 1));
