/* PASS-2: tangle-score + coverage audit. Loads every lesson object, scores
 * bn-prose English contamination (common-word runs), finds bn-in-en, bare
 * heads, lesson-count coverage vs 8-lesson house standard. Writes findings. */
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, basename } from 'node:path';
import { transformSync } from 'esbuild';
const ROOT = '/home/user/codeshikhon/src/content';
const TMP = '/tmp/audit/esm2';
mkdirSync(TMP, { recursive: true });

const BN = /[\u0980-\u09FF]/;
const COMMON = new Set(('the and but for with that this from they them have has had are was were be been being will would could should can may might must not your you our their its him her do does did done make made take takes using used use if then else when while where which who what how why all any each some more most other such only same than too very just now here there about above after again against because before below between both during few further into over under out off up down because first second third next last many much both said says tell told show shows shown give gives given get gets got keep keeps kept know knows known put puts let lets run runs work works working want wants need needs let call calls called come comes came go goes going back forward always never often sometimes really quite rather enough also even still yet again once upon while inside outside across along around away upon near far quick quickly slow slowly').split(' '));
const TECH_OK = /^(css|html|js|ts|api|apis|http|https|url|urls|uri|json|xml|sql|dom|sdk|cli|gpu|cpu|ram|cdn|dns|tcp|udp|tls|ssl|ssh|jwt|oauth|cors|csp|csrf|xss|ssrf|lru|ttl|sli|slo|sla|p99|p50|p95|regex|uuid|utf|ascii|yaml|toml|npm|npx|node|react|vue|angular|svelte|next|nuxt|vite|webpack|babel|eslint|prettier|tailwind|bootstrap|jquery|django|flask|fastapi|spring|laravel|rails|express|kubernetes|docker|terraform|ansible|nginx|redis|mongodb|mysql|postgres|postgresql|sqlite|grafana|prometheus|jaeger|lambda|s3|ec2|eks|gcs|gke|ack|aws|gcp|azure|linux|ubuntu|debian|bash|zsh|shell|git|github|gitlab|jest|vitest|cypress|playwright|webgl|svg|canvas|wasm|python|java|kotlin|swift|rust|golang|dart|scala|ruby|php|perl|c|cpp|csharp|typescript|javascript|w3schools|wcag|aria|idi|mdn|rfc|ansi|posix|ipv4|ipv6|macos|windows|android|ios|figma|es6|es2015|es2020|es2022|flexbox|grid|webkit|chromium|firefox|safari|edge|devtools|localhost|frontend|backend|fullstack|webapp|emoji|ide|ide's|vscode|vim|emacs|className|innerHTML|localStorage|sessionStorage|useState|useEffect|constructor|destructor|singleton|iterator|generator|async|await|promise|promises|callback|promisify|setTimeout|setInterval|requestAnimationFrame|fetch|axios|useState)$/i;

function isTangleWord(w) {
  const core = w.replace(/[^A-Za-z]/g, '');
  if (core.length < 3) return false;
  if (TECH_OK.test(core)) return false;
  if (/[A-Z][a-z]+/.test(core) && core.length > 1 && !/^[A-Z]{2,}$/.test(core)) return true; // Capitalized English word
  if (/^[a-z]+$/.test(core)) return true; // plain lowercase word (code identifiers have digits/-/dots usually)
  if (/^[a-z]+[A-Z]/.test(core)) return false; // camelCase = identifier
  if (/^[a-z][a-z0-9]*[-_.:\/][\w.:-]+$/.test(w)) return false; // kebab / path / dotted
  return true;
}
function tangleRuns(s) {
  const clean = s.replace(/`[^`]*`/g, ' ');
  const toks = clean.split(/(\s+)/);
  let runs = [], cur = [], curRaw = [];
  for (const t of toks) {
    if (!t.trim()) { if (cur.length >= 2) { runs.push([cur.join(' '), curRaw.join(' ')]); } cur = []; curRaw = []; continue; }
    const latin = /^[A-Za-z]/.test(t);
    if (latin && isTangleWord(t) && !COMMON.has(t.toLowerCase())) { cur.push(t.replace(/[^A-Za-z']/g, '')); curRaw.push(t); }
    else if (t === ',' || t === '.') { /* keep run alive across punctuation */ }
    else { if (cur.length >= 2) runs.push([cur.join(' '), curRaw.join(' ')]); cur = []; curRaw = []; }
  }
  if (cur.length >= 2) runs.push([cur.join(' '), curRaw.join(' ')]);
  return runs;
}
function isLText(v) { return v && typeof v === 'object' && !Array.isArray(v) && typeof v.en === 'string'; }

function walk(d, acc = []) { for (const e of readdirSync(d)) { const p = join(d, e); if (statSync(p).isDirectory()) walk(p, acc); else if (e.endsWith('.ts') && p.includes('/lessons/')) acc.push(p); } return acc; }
const files = walk(ROOT);
const byHub = new Map();
for (const f of files) { const h = relative(ROOT, f).split('/')[0]; if (!byHub.has(h)) byHub.set(h, []); byHub.get(h).push(f); }

const PROSE = new Set(['para', 'callout', 'tip', 'warning', 'note', 'analogy', 'story', 'insight', 'steps', 'list', 'table']);
const results = [];
let uid = 0;
for (const [hub, hfiles] of [...byHub.entries()].sort()) {
  const hubFindings = [];
  let bnProseFields = 0, tangledFields = 0;
  for (const f of hfiles) {
    let mod;
    try {
      let src = readFileSync(f, 'utf8').replace(/^import\s+type[^\n]*\n/gm, '');
      const js = transformSync(src, { loader: 'ts', format: 'esm' }).code;
      const out = join(TMP, `n${uid++}.mjs`);
      writeFileSync(out, js);
      mod = await import(out);
    } catch { hubFindings.push(['LOAD-FAIL', basename(f), '']); continue; }
    for (const [name, lesson] of Object.entries(mod)) {
      if (!lesson?.blocks) continue;
      const visit = (v, path, prose) => {
        if (typeof v === 'string') {
          if (path.endsWith('.bn') && prose && BN.test(v)) {
            bnProseFields++;
            const runs = tangleRuns(v);
            if (runs.length) { tangledFields++; for (const [w, raw] of runs.slice(0, 3)) hubFindings.push(['BN-TANGLE', `${lesson.slug}@${path}`, raw.slice(0, 90)]); }
          }
          if (path.endsWith('.en') && prose && /[\u0980-\u09FF]/.test(v)) hubFindings.push(['BN-in-EN', `${lesson.slug}@${path}`, v.slice(0, 70)]);
          return;
        }
        if (Array.isArray(v)) { v.forEach((x, i) => visit(x, `${path}[${i}]`, prose)); return; }
        if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) visit(x, `${path}.${k}`, prose);
      };
      (lesson.blocks || []).forEach((b, i) => {
        visit(b, `${i}(${b.type})`, PROSE.has(b.type) || b.type === 'keyterms');
        if (b.head && Array.isArray(b.head)) b.head.forEach((hcell, j) => { if (typeof hcell === 'string') hubFindings.push(['HEAD-STRING', `${lesson.slug}.blocks[${i}].head[${j}]`, hcell.slice(0, 40)]); });
      });
      hubFindings.push(...[]);
    }
  }
  const counts = hfiles.length;
  results.push({ hub, counts, bnProseFields, tangledFields, ratio: bnProseFields ? tangledFields / bnProseFields : 0, topFindings: hubFindings.slice(0, 8), totalFindings: hubFindings.length });
}
writeFileSync('/tmp/audit/pass2.json', JSON.stringify(results, null, 1));
const rows = results.sort((a, b) => (b.ratio - a.ratio) || (b.totalFindings - a.totalFindings));
console.log('HUB n | bnProseFields tangled ratio% | findings');
for (const r of rows) if (r.ratio > 0.12 || r.totalFindings > 3) console.log(String(r.counts).padStart(2), r.hub.padEnd(22), String(r.bnProseFields).padStart(5), String(r.tangledFields).padStart(5), (r.ratio * 100).toFixed(0).padStart(4) + '%', r.totalFindings);
console.log('\n=== SAMPLES from top hubs ===');
for (const r of rows.slice(0, 10)) { console.log('##', r.hub); for (const f of r.topFindings.slice(0, 5)) console.log('  ', f[0], f[1], '::', f[2]); }
