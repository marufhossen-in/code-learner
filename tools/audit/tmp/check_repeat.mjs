import { readFileSync } from 'fs';

const text = readFileSync('src/content/searching/lessons/beyond-halving.ts', 'utf8');

function wordsOf(s) {
  return (s.toLowerCase().match(/[\p{L}\p{M}\p{N}'’-]+/gu) || []).filter((w) => w.length >= 4);
}

const prose = [...text.matchAll(/(?:en|text|e|hint|why|note|summary|question):\s*'((?:[^'\\]|\\.)*)'/g)].map((m) => m[1]);

for (const p of prose) {
  const ws = wordsOf(p);
  const freq = new Map();
  for (const w of ws) freq.set(w.slice(0, 5), (freq.get(w.slice(0, 5)) || 0) + 1);
  for (const [w, n] of freq) {
    if (n >= 6) console.log('HOT WORD:', w, n, p.slice(0, 70));
  }
  const bi = new Map();
  for (let i = 0; i + 1 < ws.length; i++) {
    const k = `${ws[i].slice(0, 4)} ${ws[i + 1].slice(0, 4)}`;
    bi.set(k, (bi.get(k) || 0) + 1);
  }
  for (const [k, n] of bi) {
    if (n >= 4) console.log('HOT PAIR:', k, n, p.slice(0, 70));
  }
}
