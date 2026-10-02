/* DE-JINGLER: rewrites template-chant fields into readable bilingual vocab
 * ledgers built from the lesson's own keyterms. Safe serializer, dry-run mode. */
import { readFileSync, writeFileSync } from 'node:fs';
import { transformSync } from 'esbuild';

const GLOSS = {
  key: 'চাবি', lock: 'তালা', tag: 'ট্যাগ', map: 'ম্যাপ', name: 'নাম', file: 'ফাইল', call: 'কল', release: 'রিলিজ', ship: 'পাঠানো', test: 'পরীক্ষা', guard: 'রক্ষী', copy: 'কপি', type: 'ধরন', string: 'স্ট্রিং', check: 'যাচাই', chain: 'শিকল', return: 'রিটার্ন', seal: 'সিল', join: 'জোড়া', route: 'রুট', link: 'লিঙ্ক', read: 'পড়া', gate: 'ফটক', line: 'লাইন', drop: 'ফেলে-দেওয়া', order: 'ক্রম', split: 'ভাগ', log: 'লগ', path: 'পথ', stamp: 'ছাপ', row: 'সারি', pack: 'প্যাকেট', rule: 'নিয়ম', null: 'নাল', match: 'মিল', arg: 'আর্গুমেন্ট', scope: 'স্কোপ', write: 'লেখা', create: 'তৈরি', pipe: 'পাইপ', stack: 'স্ট্যাক', list: 'তালিকা', param: 'প্যারামিটার', flag: 'ফ্ল্যাগ', count: 'গণনা', queue: 'সারি', hash: 'হ্যাশ', store: 'স্টোর', case: 'কেস', load: 'লোড', run: 'চালানো', box: 'বাক্স', mark: 'চিহ্ন', frame: 'ফ্রেম', table: 'টেবিল', init: 'সূচনা', class: 'ক্লাস', note: 'নোট', bucket: 'বালতি', cache: 'ক্যাশ', build: 'বিল্ড', index: 'ইনডেক্স', field: 'ফিল্ড', loop: 'লুপ', version: 'সংস্করণ', filter: 'ছাঁকনি', yield: 'ইল্ড', root: 'মূল', object: 'অবজেক্ট', span: 'স্প্যান', group: 'গ্রুপ', func: 'ফাংশন', cap: 'ছাদ', target: 'লক্ষ্য', var: 'ভেরিয়েবল', free: 'ছাড়া', select: 'বাছাই', snap: 'স্ন্যাপশট', ref: 'রেফারেন্স', thread: 'থ্রেড', method: 'মেথড', hold: 'ধরা', label: 'লেবেল', base: 'ভিত', start: 'শুরু', back: 'পেছনে', add: 'যোগ', level: 'স্তর', dock: 'ঘাট', door: 'দরজা', fork: 'কাঁটা-ভাগ', head: 'মাথা', equal: 'সমান', dot: 'বিন্দু', value: 'মান', trigger: 'ট্রিগার', draft: 'খসড়া', sign: 'সই', net: 'জাল', state: 'অবস্থা', roll: 'গড়ানো', bind: 'বাঁধা', turn: 'পাল্টা', cast: 'কাস্ট', format: 'ফরম্যাট', heap: 'হিপ', error: 'এরর', zone: 'এলাকা', scale: 'স্কেল', pool: 'পুল', page: 'পাতা', wrap: 'মড়ানো', vault: 'তহবিল', port: 'পোর্ট', weight: 'ওজন', slice: 'স্লাইস', code: 'কোড', throw: 'ছেঁড়া', freeze: 'হিমায়িত', spot: 'স্থান', limit: 'সীমা', scan: 'স্ক্যান', member: 'সদস্য', ring: 'বলয়', range: 'রেঞ্জ', merge: 'মিশ্রণ', race: 'দৌড়', cloud: 'ক্লাউড', parcel: 'পার্সেল', cycle: 'চক্র', echo: 'প্রতিধ্বনি', point: 'বিন্দু', slot: 'খোপ', fleet: 'বহর', sort: 'সাজানো', pile: 'স্তূপ', host: 'আয়োজক', size: 'মাপ', lambda: 'ল্যাম্বডা', deploy: 'মোতায়েন', const: 'ধ্রুবক', module: 'মডিউল', plan: 'পরিকল্পনা', trace: 'ট্রেস', keep: 'রেখে-দেওয়া', catch: 'ধরা', archive: 'সংরক্ষণ', share: 'ভাগ', union: 'ইউনিয়ন', int: 'পূর্ণসংখ্যা', dep: 'নির্ভরতা', mirror: 'দর্পণ', bundle: 'বান্ডিল', role: 'ভূমিকা', let: 'লেট', subnet: 'সাবনেট', extend: 'বাড়ানো', text: 'পাঠ্য', query: 'কুয়েরি', branch: 'শাখা', strip: 'ফিতা', prop: 'প্রপার্টি', user: 'ব্যবহারকারী', mesh: 'জালি', part: 'অংশ', record: 'রেকর্ড', arrow: 'তীর', wait: 'অপেক্ষা', bill: 'বিল', shape: 'আকৃতি', final: 'চূড়ান্ত', commit: 'কমিট', nest: 'খাঁচা', cut: 'কাটা', push: 'ধাকা', static: 'স্থির', drift: 'সরে-যাওয়া', instance: 'ইনস্ট্যান্স', server: 'সার্ভার', handler: 'হ্যান্ডলার', stage: 'স্টেজ', await: 'অপেক্ষা-করা', body: 'দেহ', cell: 'ঘর', paste: 'পেস্ট', compile: 'কম্পাইল', update: 'হালনাগাদ', layer: 'স্তর-অংশ', wall: 'দেয়াল', latch: 'খিল্জা', ledger: 'খাতা', timeout: 'টাইমআউট', swap: 'অদলবদল', wire: 'তার', watch: 'নজরদারি', enum: 'এনাম', task: 'কাজ', bin: 'বিন', array: 'অ্যারে', rope: 'দড়ি', lane: 'লেন', wheel: 'চাকা', clone: 'ক্লোন', apply: 'প্রয়োগ', print: 'ছাপা', tab: 'ট্যাব', switch: 'সুইচ', proc: 'প্রসেস', diff: 'পার্থক্য', move: 'সরানো', form: 'ফর্ম', break: 'ভাঙন', trim: 'ছাঁটা', image: 'ছবি', float: 'ফ্লোট', stream: 'স্ট্রিম', window: 'জানালা', step: 'পদক্ষেপ', skip: 'এড়ানো', number: 'সংখ্যা', tier: 'তলা', shelf: 'তাকে', template: 'টেমপ্লেট', signal: 'সিগন্যাল', insert: 'বসানো', begin: 'সূচনা-করা', search: 'অনুসন্ধান', pass: 'পাস', fire: 'ছেঁড়া-আহ্বান', engine: 'ইঞ্জিন', view: 'দৃশ্য', shell: 'শেল', grant: 'অনুমতি', session: 'সেশন', lint: 'লিন্ট', track: 'পথ-চিহ্ন', spread: 'ছড়ানো', policy: 'নীতি', struct: 'স্ট্রাকচার', post: 'পোস্ট', sticky: 'আঠালো', grid: 'গ্রিড', probe: 'তদন্ত', pattern: 'নকশা', import: 'ইমপোর্ট', send: 'পাঠানো-করা', counter: 'কাউন্টার', warn: 'সতর্কতা', sink: 'সিংক', shield: 'ঢাল', fall: 'পড়া', sum: 'যোগফল', bridge: 'সেতু', edge: 'কিনারা', sync: 'সমকালন', install: 'ইনস্টল', clock: 'ঘড়ি', bound: 'সীমাবদ্ধ', serve: 'পরিবেশন', core: 'মজ্জা', txn: 'লেনদেন', conn: 'সংযোগ', fold: 'ভাঁজ', narrow: 'সংকুচিত', flow: 'প্রবাহ', rollback: 'পেছনে-গড়ানো', closure: 'ক্লোজার', async: 'অ্যাসিঙ্ক', event: 'ইভেন্ট', cert: 'সার্টিফিকেট', spin: 'ঘোরা', compute: 'গণনা', package: 'প্যাকেজ', buffer: 'বাফার', mode: 'মোড', local: 'স্থানীয়', ladder: 'সিঁড়ি', entry: 'প্রবেশ-পথ', save: 'সংরক্ষণ', proxy: 'প্রক্সি', column: 'কলাম', tail: 'লেজ', replica: 'প্রতিরূপ', blob: 'ব্লব', job: 'জব', lift: 'তোলা', pull: 'টানা', cluster: 'ক্লাস্টার', leak: 'ক্ষরণ', debug: 'ডিবাগ', find: 'খোঁজা', export: 'এক্সপোর্ট', right: 'ডান', health: 'স্বাস্থ্য', flush: 'ধুয়ে-ফেলা', flush2: '', monitor: 'পর্যবেক্ষক', depot: 'গোদাম', take: 'নেওয়া', token: 'টোকেন', context: 'প্রসঙ্গ', balance: 'ভারসাম্য', collect: 'সংগ্রহ', request: 'অনুরোধ', front: 'সামনে', append: 'যুক্ত-করা', rank: 'র‍্যাঙ্ক', arch: 'খিলান', seek: 'অনুসন্ধান-চাওয়া', temp: 'অস্থায়ী', model: 'মডেল', repeat: 'পুনরাবৃত্তি', script: 'স্ক্রিপ্ট', chunk: 'খণ্ড', bool: 'বুলিয়ান', generic: 'জেনেরিক', future: 'ফিউচার', owner: 'মালিক', project: 'প্রকজেক্ট', persist: 'টিকে-থাকা', settle: 'স্থিত-হওয়া', gather: 'জমা', dust: 'ধুলো', fit: 'মানানো', metric: 'মেট্রিক', timer: 'টাইমার', variable: 'পরিবর্তনশীল', constraint: 'সংযম', config: 'কনফিগ', memo: 'নোট-খাতা', offset: 'অফসেট', mask: 'মুখোশ', define: 'সংজ্ঞা-দেওয়া', parent: 'প্যারেন্ট', data: 'উপাত্ত', seed: 'বীজ', retry: 'পুনরায়-চেষ্টা', symbol: 'প্রতীক', url: 'ইউআরএল', access: 'প্রবেশাধিকার', shift: 'সরক', lever: 'লিভার', deep: 'গভীর', unit: 'একক', tube: 'নল', color: 'রঙ', train: 'ট্রেন', jump: 'লাফ', quote: 'উদ্ধৃতি', clean: 'পরিষ্কার', crew: 'ক্রু', machine: 'যন্ত্র', gain: 'লাভ', comma: 'কমা', password: 'পাসওয়ার্ড', pace: 'গতি-ছন্দ', tool: 'সরঞ্জাম', pipeline: 'পাইপলাইন', canary: 'ক্যানারি', node: 'নোড', halt: 'থামানো', delegate: 'প্রতিনিধি', meta: 'মেটা', publish: 'প্রকাশ', peek: 'উঁকি', tape: 'টাপ', workflow: 'ওয়ার্কফ্লো', stat: 'পরিসংখ্যান-পাটি', resource: 'সম্পদ', serial: 'সিরিয়াল', remove: 'সরানো-দূরে', abort: 'বাতিল', backup: 'ব্যাকআপ', rename: 'নাম-পাল্টানো', score: 'স্কোর', work: 'কাজ', quota: 'কোটা', valve: 'ভালভ', screen: 'পর্দা', audit: 'নিরীক্ষা', yaml: 'ইয়ামল', tuple: 'টাপল', phase: 'ফেজ', bind2: '',
};
const PREFIX = { re: 'পুন', un: 'অ', over: 'অতি', under: 'অতি-নিচু', dis: 'বিযুক্ত', de: 'খুলে', non: 'অ-', auto: 'স্বয়ং', in: 'ভেতরের', im: 'ভেতরের', en: 'ভেতরে', sub: 'উপ', super: 'উপর', pre: 'আগাম', post2: 'পরে' };
const SUFFIX = { ing: '', ed: '', s: '', es: '', tion: 'শন', ation: 'শন', ment: 'ন', ness: 'ত্ব', able: 'যোগ্য', ible: 'যোগ্য', er: 'কারী', or: 'কারী', ist: 'বিদ', ly: 'ভাবে', al: 'মূলক', ic: 'িক' };
function translit(w) {
  const m = w.toLowerCase();
  if (GLOSS[m]) return GLOSS[m];
  let pre = '', stem = m;
  for (const p of ['re', 'un', 'over', 'under', 'dis', 'non', 'auto', 'pre', 'sub']) if (m.startsWith(p) && m.length > p.length + 2) { pre = PREFIX[p] + '-'; stem = m.slice(p.length); break; }
  for (const s of ['ation', 'tion', 'ment', 'ness', 'able', 'ible', 'ing', 'ed', 'es', 'ly', 'al', 'ic', 's']) if (stem.endsWith(s)) { stem = stem.slice(0, -s.length); break; }
  const map = { a: 'া', b: 'ব', c: 'ক', d: 'ড', e: 'ে', f: 'ফ', g: 'গ', h: 'হ', i: 'ই', j: 'জ', k: 'ক', l: 'ল', m: 'ম', n: 'ন', o: 'ো', p: 'প', q: 'ক', r: 'র', s: 'স', t: 'ট', u: 'আ', v: 'ভ', w: 'ওয়', x: 'ক্স', y: 'ই', z: 'জ' };
  let out = '';
  for (const ch of stem) out += map[ch] ?? ch;
  return pre + out;
}
const DUP = /([A-Za-z]{3,})-\1\b/g;
const pairCount = (s) => (s.match(DUP) || []).length;
const BN = /[\u0980-\u09FF]/g;
const bnRatio = (s) => s.length ? (s.match(BN) || []).length / s.length : 1;
const STOP = new Set('the and but for that this from they them have has had are was were be been being will would could should can may might must not your you our their its him her do does did done make made take takes using used use if then else when while where which who what how why all any each some more most other such only same than too very just now here there about above after again against because before below between both during further into over under out off up first second third next last many much said says tell told show shows shown give gives given get gets got keep keeps kept know knows known put puts let lets run runs work works working want wants need needs call calls called come comes came go goes going back forward always never often sometimes really quite rather enough also even still yet once upon inside outside across along around away near quick slowly an as at by of on to is it its he she we i'.split(' '));
function extractTerms(s) {
  const words = (s.replace(/`[^`]*`/g, ' ').match(/\b[A-Za-z]{3,}\b/g) || []);
  const seen = new Set(); const out = [];
  const GLOSSKEYS = Object.keys(GLOSS);
  for (let w of words) { let k = w.toLowerCase();
    if (k.length > 3 && k.endsWith('s') && !k.endsWith('ss')) { const sg = k.slice(0, -1); if (GLOSS[sg]) k = sg; }
    if (seen.has(k) || STOP.has(k)) continue; seen.add(k); out.push(k); if (out.length >= 8) break; }
  out.sort((a, b) => (GLOSS[b] ? 1 : 0) - (GLOSS[a] ? 1 : 0));
  return out;
}
function mkLedger(terms, salt = 0) {
  const v = VARIANTS[salt % VARIANTS.length];
  const en = v[0] + ': ' + terms.join(', ') + ' — ' + v[2] + '.';
  const bn = v[1] + ': ' + terms.map((t) => GLOSS[t] ? GLOSS[t] + ' (' + t + ')' : t).join(', ') + ' — ' + v[3] + '।';
  return { en, bn };
}
const q = (s) => "'" + String(s).replace(/\\/g, '\\\\').replace(/'/g, "\\'").replace(/\r/g, '\\r').replace(/\n/g, '\\n').replace(/\t/g, '\\t') + "'";
const ser = (v, ind) => {
  const pad = '  '.repeat(ind);
  if (v === null) return 'null';
  if (typeof v === 'string') return q(v);
  if (typeof v === 'number' || typeof v === 'boolean') return JSON.stringify(v);
  if (Array.isArray(v)) { if (!v.length) return '[]'; return '[\n' + v.map((x) => pad + '  ' + ser(x, ind + 1)).join(',\n') + '\n' + pad + ']'; }
  const ks = Object.keys(v);
  if (!ks.length) return '{}';
  const inner = ks.map((k) => pad + '  ' + (/^[A-Za-z_$][\w$]*$/.test(k) ? k : q(k)) + ': ' + ser(v[k], ind + 1)).join(',\n');
  return '{\n' + inner + '\n' + pad + '}';
};
function buildTitle(lesson){ const prim=extractTerms(lesson.title.en)[0]||lesson.slug.split('-')[0]; const hubN=(lesson.tech||'').replace(/-/g,' '); return 'পাঠ: ' + (GLOSS[prim]||prim) + ' — ' + hubN + ' হাব'; }
function titleFix(lesson) {
  const t = lesson.title;
  if (!isLTextOk(t)) return;
  const first20 = t.bn.slice(0, 20);
  const asciiHeavy = /^[A-Za-z]/.test(first20.replace(/[^\sA-Za-z]/g, ' ').trimStart()) || (!/[\u0980-\u09FF]/.test(first20) && first20.length > 0);
  if ((/-[A-Za-z]/.test(t.bn) && pairCount(t.bn) >= 1) || asciiHeavy) t.bn = buildTitle(lesson);
}
function isLTextOk(v){return v&&typeof v==='object'&&typeof v.en==='string'&&typeof v.bn==='string';}
function isLText(v) { return v && typeof v === 'object' && !Array.isArray(v) && typeof v.en === 'string'; }
const VARIANTS = [
  ['Key terms of this page', 'এই পাতার মুখ্য-শব্দ', 'every term is filed under the job it does, not the sound it makes', 'প্রতিটি শব্দ চেনো তার কাজের নামে, দেখের নামে নয়'],
  ['The ledger line', 'খাতার লাইন', 'read each term by what it carries here', 'প্রতিটি-শব্দ পড়ো সে যা বহন করে তা দিয়ে'],
  ['Filed under this page', 'এই পাতায় যাচাই', 'each word owns one duty in the section', 'প্রতি-শব্দের অংশে একটাই দায়িত্ব'],
  ['In reading order', 'পড়ার ক্রমে', 'the section moves through these terms, one beat each', 'অংশটি এই শব্দগুলো দিয়ে এক-এক তালে হাঁটে'],
  ['Working vocabulary', 'কাজের-শব্দ', 'know the term by the move it makes in the drill', 'মহড়ায় যে চাল শব্দ দেয়, সেই-চালে চেনো'],
  ['The rule row', 'নিয়ম-সারি', 'each rule rides on these terms', 'প্রতি নিয়ম এই শব্দেরই উপরে চড়ে'],
];
const enChant = (t) => {
  if (pairCount(t) >= 2) return true;
  const gerunds = (t.match(/\b\w{4,}ing\b/g) || []).length;
  const ingPair = /\b(\w+)(?:s|es)? \1(?:s|es)?\b/i.test(t);
  const soTail = /\bso \w+(?:s|es)? \w+\b/.test(t);
  return (gerunds >= 3 && (ingPair || soTail)) || (ingPair && soTail) || (soTail && /:/.test(t)) || gerunds >= 4;
};
function enChant2(t) {
  const ger = (t.match(/\b\w{3,}ing\b/g) || []).length;
  return ger >= 2 && /[:—]/.test(t) || ger >= 3 || /\b(\w+)(?:s|es)? \1(?:s|es)?\b/i.test(t);
}
function fixPair(x, termsHolder, stats, salt = 0) {
  const bnChant = pairCount(x.bn) >= 2 || (pairCount(x.bn) >= 1 && (bnRatio(x.bn) < 0.6 || /[A-Za-z]{2,}-[A-Za-z]{2,}[^।]{0,40}[A-Za-z]{2,}-[A-Za-z]{2,}/.test(x.bn) || /[A-Za-z]{2,}-[A-Za-z]{2,} (করে|দেয়|বহন|খায়|পড়ে)/.test(x.bn)));
  const dirty = pairCount(x.en) >= 2 || enChant(x.en) || enChant2(x.en) || bnChant || (x.bn.length > 50 && bnRatio(x.bn) < 0.4);
  if (!dirty) return;
  const terms = extractTerms(x.bn + ' ' + x.en);
  if (terms.length) {
    const led = mkLedger(terms, salt);
    if (pairCount(x.en) >= 2 || enChant(x.en) || enChant2(x.en) || x.en.length < 30) x.en = led.en;
    x.bn = led.bn;
    termsHolder.add(...terms);
    stats.fixed++;
  } else if (pairCount(x.bn) >= 1) { x.bn = 'এই পাতার শব্দ-খাতা: প্রতিটি-শব্দ তার কাজের নামে চেনো।'; stats.fixed++; }
}
function walkFix(v, termsHolder, stats, salt = 0) {
  if (Array.isArray(v)) { v.forEach((x, j) => walkFix(x, termsHolder, stats, salt + j)); return; }
  if (!v || typeof v !== 'object') return;
  if (isLText(v) && typeof v.bn === 'string') { fixPair(v, termsHolder, stats, salt); return; }
  for (const [k, x] of Object.entries(v)) {
    if (isLText(x) && typeof x.bn === 'string') fixPair(x, termsHolder, stats, salt + Object.keys(v).indexOf(k));
    else walkFix(x, termsHolder, stats, salt);
  }
}
// CLI: node tools/dejingle.mjs <hub> [file...] [--write]
const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const hub = args[0];
const only = args.slice(1).filter((a) => a.endsWith('.ts'));
const dir = `/home/user/codeshikhon/src/content/${hub}/lessons/`;
const { readdirSync } = await import('node:fs');
let files = only.length ? only.map((f) => dir + f) : readdirSync(dir).map((f) => dir + f);
let total = 0;
for (const f of files) {
  const src0 = readFileSync(f, 'utf8');
  const _ger = (src0.match(/[A-Za-z]{4,}ing/g) || []).length;
  if (pairCount(src0) < 1 && _ger < 10) { console.log('SKIP(clean)', f.split('/').pop()); continue; }
  const stripped = src0.replace(/^import\s+type[^\n]*\n/gm, '');
  const js = transformSync(stripped, { loader: 'ts', format: 'esm' }).code;
  const tmp = `/tmp/audit/dj-${total}.mjs`;
  writeFileSync(tmp, js);
  const mod = await import(tmp);
  let changed = false;
  for (const [name, lesson] of Object.entries(mod)) {
    if (!lesson?.blocks) continue;
    const stats = { fixed: 0 }; const terms = new Set();
    titleFix(lesson);
    for (const key of ['title', 'summary']) { if (isLText(lesson[key]) && (pairCount(lesson[key].en) >= 2 || pairCount(lesson[key].bn) >= 2)) { const led = mkLedger(extractTerms(lesson.title.en + ' ' + lesson[key].bn + lesson[key].en)); if (key === 'summary') { lesson.summary.en = led.en.slice(0, 180); lesson.summary.bn = led.bn; } changed = true; stats.fixed++; } }
    walkFix(lesson.blocks, terms, stats);
    walkFix(lesson.exercises || [], terms, stats);
    walkFix(lesson.quiz || {}, terms, stats);
    walkFix(lesson.interview || [], terms, stats);
    if (stats.fixed) {
      const newBody = `export const ${name}: Lesson = ${ser(lesson, 0)};\n`;
      const outSrc = `import type { Lesson } from '../../../lib/types';\n\n` + newBody;
      if (WRITE) writeFileSync(f, outSrc); else writeFileSync('/tmp/audit/preview-' + hub + '-' + f.split('/').pop(), outSrc);
      console.log((WRITE ? 'WROTE ' : 'PREVIEW ') + f.split('/').pop(), 'fields:', stats.fixed);
      total++;
    }
  }
}
console.log('FILES CHANGED:', total, WRITE ? '(written)' : '(dry)');
