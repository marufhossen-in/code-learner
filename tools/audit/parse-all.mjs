#!/usr/bin/env node
/**
 * Parse every content file with esbuild (transform only — a full build is too heavy for this
 * box). Any syntax error the editors would hit shows up here first.
 *   node tools/audit/parse-all.mjs
 */
import { readFileSync, readdirSync, statSync, mkdirSync, rmSync, writeFileSync } from 'node:fs';
import { transformSync } from 'esbuild';
import { join } from 'node:path';

const ROOT = process.argv[2] ?? 'src/content';
function walk(d, out = []) {
  for (const e of readdirSync(d)) {
    const p = join(d, e);
    if (statSync(p).isDirectory()) walk(p, out);
    else if (p.endsWith('.ts')) out.push(p);
  }
  return out;
}
const tmp = '.cache/parse-all';
try { rmSync(tmp, { recursive: true, force: true }); } catch {}
mkdirSync(tmp, { recursive: true });
let files = [];
try { files = walk(ROOT); } catch { console.log('no such directory:', ROOT); process.exit(2); }
let failed = 0;
const fails = [];
for (const f of files) {
  const out = tmp + '/' + f.replace(/[/.]/g, '_') + '.js';
  try {
    writeFileSync(out, transformSync(readFileSync(f, 'utf8'), { loader: 'ts', format: 'esm' }).code);
    rmSync(out);
  } catch (e) {
    failed++;
    fails.push(`${f}: ${String(e?.message ?? e).split('\n')[0].slice(0, 160)}`);
  }
}
rmSync(tmp, { recursive: true, force: true });
console.log(`files ${files.length} | parse failures ${failed}`);
for (const f of fails.slice(0, 30)) console.log(f);
process.exit(failed ? 1 : 0);
