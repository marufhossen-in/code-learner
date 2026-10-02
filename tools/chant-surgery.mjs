/* Final chant surgery: strips duplicate-hyphen chant tokens, protecting real
 * technical terms; rewrites a few whole strings where stripping would read badly. */
import { readdirSync, readFileSync, writeFileSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
const ROOT = '/home/user/codeshikhon/src/content';
const PROTECT = new Set(['log-log', 'fifty-fifty', 'zig-zig', 'zig-zag', 'tic-tac', 'tick-tock', 'win-win', 'lose-lose', 'near-far']);
const walk = (d, acc = []) => { for (const e of readdirSync(d)) { const p = join(d, e); const st = statSync(p); if (st.isDirectory()) walk(p, acc); else if (extname(p) === '.ts') acc.push(p); } return acc; };
const WHOLE = new Map([
  ["predict a spiked pricey-spot, a lost outbid-bid, and a lapsed expired-deal.", "predict one spike-prone spot request, one bid that gets outbid, and one deal that expires unused."],
  ["The lost outbid-bid loses prices — prices are decorative.", "A lost bid loses nothing but the option — the price you wrote is decorative; the market price is real"],
  ["a spot review: pricey-spot line, outbid-bid line, expired-deal line, reclaimed-claim line", "a spot review with four lines: the spike, the outbid, the expiry, the reclaimed claim"],
  ["pricey-spotting spikes with bidding bid, outbid-bid guarantees outbid-bidding loses with pricing", "spot pricing spikes with the bid ladder; being outbid simply means the market priced higher"],
  ["Four lines, the bid gaveled — pricey-spot, outbid-bid, expired-deal, reclaimed-claim.", "Four lines and one gavel: the spike, the outbid, the expiry, the reclaim."],
  ["Sting-ing fruits on the theory", "Honey on the theory"],
  ["query string-string শব্দার্থ রাখে", "query string শব্দার্থ রাখে"],
  ["সফল-success, error-error), যাচাই-password", "সফল (success), ত্রুটি (error), যাচাই (password)"],
  ["ভুল-বহন body-বাহক ভুল-file করে: form-form বহন করে — JSON-parse get_json।", "ভুল বহন করে body-বাহক ফাইল: ফর্ম ঠিকঠাক থাকলে JSON-parse `get_json()` ধরে নেয়।"],
  ["আর জাহাজ-tag জাহাজ করে: static-static, cross-os, stamp-ver — জাহাজ জা", "আর ট্যাগ জাহাজকে আটকায়: static build, cross-compile, version stamp — জাহাজ জা"],
  ["WHY COUNT-COUNT ALARMS FAILED", "WHY THE COUNT-BASED ALARMS FAILED"],
]);
const files = walk(ROOT);
let strip = 0, whole = 0;
for (const f of files) {
  let s = readFileSync(f, 'utf8');
  const o = s;
  for (const [from, to] of WHOLE) { if (s.includes(from)) { s = s.split(from).join(to); whole++; } }
  s = s.replace(/([A-Za-z]{3,})-\1\b/g, (m0, w) => (PROTECT.has(m0) ? m0 : (strip++, w)));
  if (s !== o) { writeFileSync(f, s); }
}
console.log('whole-string replacements:', whole, '| dup tokens stripped:', strip);
