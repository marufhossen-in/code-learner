import type { Lesson } from '../../../lib/types';

export const ClusteringLesson: Lesson = {
  slug: 'clustering',
  tech: 'machine-learning',
  title: {
    en: 'Clustering with k-Means',
    bn: 'K-means loop (নিকটতম-কেন্দ্রে বরাদ্দ, কেন্দ্র গড়ে সরান, পুনরাবৃত্তি)'
  },
  summary: {
    en: 'No labels, no teacher — just points begging for groups. You will learn the k-means loop (assign to nearest center, move centers to the mean, repeat), HEAR the elbow method pick k=2 on live data, and learn why scaling and round-blob bias decide every clustering result.',
    bn: 'Label নেই, শিক্ষক নেই — শুধু দল-চাওয়া বিন্দু। k-means loop (নিকটতম-কেন্দ্রে বরাদ্দ, কেন্দ্র গড়ে সরান, পুনরাবৃত্তি) শিখবেন, live ডেটায় elbow পদ্ধতিকে k=২ বাছতে শুনবেন, আর জানবেন কেন scaling ও গোল-blob পক্ষপাত প্রতি clustering-ফল ঠিক করে।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Groups nobody labeled', bn: 'WHAT — লেবেলহীন-দল' },
    },
    {
      type: 'para',
      text: {
        en: 'Clustering is unsupervised learning: the data arrives with no answers, and the algorithm invents groups. k-means — the workhorse — repeats two moves: (1) assign every point to its nearest center (centroid), (2) move each center to its group’s mean. Stop when nobody switches groups (convergence). Input: points + k. Output: k round-ish blobs. The ruler underneath is distance (usually Euclidean) — which is exactly why feature scale decides everything.',
        bn: 'Clustering unsupervised learning: ডেটা উত্তর-ছাড়া আসে, অ্যালগরিদম দল বানায়। k-means — কর্মঘোড়া — দুই চাল আবার করে: (১) প্রতি বিন্দু নিকটতম-কেন্দ্রে (centroid) বরাদ্দ, (২) প্রতি কেন্দ্র দলের গড়ে সরান। কেউ দল না-বদলালে থামুন (convergence)। ইনপুট: বিন্দু + k। আউটপুট: k গোল-মতো blob। নিচের স্কেল দূরত্ব (সাধারণত Euclidean) — ঠিক এজন্য feature-scale সব ঠিক করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Two centroids claim their blobs', bn: 'দুই centroid নিজ blob দাবি করে' },
      svg: `<svg viewBox="0 0 640 260" font-family="system-ui, sans-serif" role="img" aria-label="Two clusters with star centroids and assignment lines">
<rect x="0" y="0" width="640" height="260" fill="none"/>
<g fill="#2563eb">
<circle cx="120" cy="150" r="9"/><circle cx="160" cy="120" r="9"/><circle cx="180" cy="170" r="9"/><circle cx="140" cy="190" r="9"/>
</g>
<g fill="#dc2626">
<circle cx="450" cy="90" r="9"/><circle cx="490" cy="120" r="9"/><circle cx="470" cy="150" r="9"/><circle cx="510" cy="80" r="9"/>
</g>
<g stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3">
<line x1="150" y1="158" x2="120" y2="150"/><line x1="150" y1="158" x2="160" y2="120"/><line x1="150" y1="158" x2="180" y2="170"/><line x1="150" y1="158" x2="140" y2="190"/>
<line x1="480" y1="110" x2="450" y2="90"/><line x1="480" y1="110" x2="490" y2="120"/><line x1="480" y1="110" x2="470" y2="150"/><line x1="480" y1="110" x2="510" y2="80"/>
</g>
<g font-size="30" font-weight="800" text-anchor="middle">
<text x="150" y="170" fill="#1d4ed8">★</text>
<text x="480" y="122" fill="#b91c1c">★</text>
</g>
<g font-size="12" font-weight="700" fill="currentColor" text-anchor="middle">
<text x="150" y="230">centroid A (blue mean)</text>
<text x="480" y="230">centroid B (red mean)</text>
</g>
</svg>`,
      caption: {
        en: 'Assign (dashed) → move ★ to group means → repeat. Blobs tighten every round until stillness.',
        bn: 'বরাদ্দ (ড্যাশ) → ★ দল-গড়ে সরান → পুনরাবৃত্তি। প্রতি রাউন্ডে blob শক্ত হয় স্থিরতা পর্যন্ত।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Unsupervised', def: { en: 'Learning from unlabeled data: find structure, not answers.', bn: 'লেবেলহীন-ডেটায় শেখা: উত্তর নয়, কাঠামো খুঁজুন।' } },
        { term: 'Centroid', def: { en: 'A group’s center = mean of its members. Moves every round.', bn: 'দলের কেন্দ্র = সদস্য-গড়। প্রতি রাউন্ডে সরে।' } },
        { term: 'k', def: { en: 'YOU choose group count — the algorithm never discovers it.', bn: 'দল-সংখ্যা আপনিই বাছেন — অ্যালগরিদম কখনো আবিষ্কার করে না।' } },
        { term: 'Convergence', def: { en: 'Nobody switches groups: the loop’s stopping bell.', bn: 'কেউ দল বদলায় না: loop-এর থামা-ঘণ্টা।' } },
        { term: 'WCSS', def: { en: 'Within-cluster scatter: total squared distance to own center. Lower = tighter.', bn: 'দল-ভেতর ছড়ানো: নিজ-কেন্দ্রে মোট বর্গ-দূরত্ব। কম = শক্ত।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Discovery before labels exist', bn: 'WHY — Label-আগে আবিষ্কার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Labels cost money; raw data is free. Clustering extracts value from the 99% of data nobody annotated.', bn: 'Label-এ টাকা; কাঁচা-ডেটা ফ্রি। লেবেলহীন ৯৯% ডেটা থেকে clustering মূল্য তোলে।' },
        { en: 'Segmentation runs business: customer tiers, support triage, content shelves — all start as clusters.', bn: 'বিভাজন ব্যবসা চালায়: গ্রাহক-স্তর, সাপোর্ট-বাছাই, কনটেন্ট-তাক — সব cluster থেকে শুরু।' },
        { en: 'Compression and cleaning: 16M colors → 256 palette (quantization); lone points = anomalies worth a look.', bn: 'সংকোচন-পরিষ্কার: ১৬M রঙ → ২৫৬ প্যালেট (quantization); একা-বিন্দু = দেখার-যোগ্য anomaly।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — The 4-step loop', bn: 'HOW — ৪-ধাপ loop' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Pick k + starting centers', bn: '১. k + শুরু-কেন্দ্র বাছুন' }, text: { en: 'Guess k (elbow method helps); scatter k seeds across the data.', bn: 'k অনুমান করুন (elbow সাহায্য করে); ডেটাজুড়ে k বীজ ছড়ান।' } },
        { title: { en: '2. Assign to nearest', bn: '২. নিকটতমে বরাদ্দ' }, text: { en: 'Every point joins its closest centroid. Borders are invisible mid-lines.', bn: 'প্রতি বিন্দু নিকটতম-centroid-এ যোগ দেয়। সীমানা অদৃশ্য-মাঝরেখা।' } },
        { title: { en: '3. Move to the mean', bn: '৩. গড়ে সরান' }, text: { en: 'Each centroid jumps to its members’ average. Blobs tighten.', bn: 'প্রতি centroid সদস্য-গড়ে লাফ দেয়। Blob শক্ত হয়।' } },
        { title: { en: '4. Repeat to stillness', bn: '৪. স্থিরতা পর্যন্ত আবার' }, text: { en: 'No switches = converged. Restart a few seeds; keep the tightest (lowest WCSS).', bn: 'বদল নেই = converged। কয়েক বীজে আবার; সবচেয়ে-শক্তটা (সর্বনিম্ন WCSS) রাখুন।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The elbow picks k=2 live', bn: 'INSIDE — Elbow live-তে k=২ বাছে' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit runs real k-means on [2,3,4,20,22,24] for k = 1..4 and prints WCSS each time: 551.5 → 10 → 4 → 2.5. The cliff from 551.5 to 10, then flatness — that bend IS the elbow, screaming k=2. Change the data and re-run; watch the elbow follow the true groups.',
        bn: 'এই tryit [২,৩,৪,২০,২২,২৪]-এ k = ১..৪-তে আসল k-means চালিয়ে প্রতি বার WCSS ছাপে: ৫৫১.৫ → ১০ → ৪ → ২.৫। ৫৫১.৫ থেকে ১০-এ খাড়া, তারপর সমতল — ওই বাঁকই elbow, k=২ চিৎকার করে। ডেটা বদলে আবার চালান; elbow-কে সত্যি-দলের পিছু দেখুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'k-means + elbow table (edit DATA, press Run)', bn: 'k-means + elbow টেবিল (DATA বদলে Run)' },
      html: '<h3>WCSS for k = 1..4</h3>\n<pre id="out"></pre>\n<p>Console shows the final clusters for the elbow k.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #fefce8; border: 1px solid #fde68a; border-radius: 8px; padding: 10px; }',
      js: 'const DATA = [2, 3, 4, 20, 22, 24]; // ← try [1,2,3,4,30,31,32,33]\nconst run = (data, k) => {\n  const s = [...data].sort((a, b) => a - b);\n  let c = [];\n  for (let i = 0; i < k; i++) c.push(s[Math.round((i * (s.length - 1)) / (k - 1 || 1))]);\n  let assign = [];\n  for (let round = 0; round < 20; round++) {\n    assign = s.map(v => {\n      let bi = 0;\n      c.forEach((cc, i) => { if (Math.abs(v - cc) < Math.abs(v - c[bi])) bi = i; });\n      return bi;\n    });\n    const next = c.map((_, i) => {\n      const m = s.filter((_, j) => assign[j] === i);\n      return m.length ? m.reduce((a, b) => a + b, 0) / m.length : c[i];\n    });\n    if (next.every((v, i) => v === c[i])) break;\n    c = next;\n  }\n  const wcss = s.reduce((a, v, j) => a + (v - c[assign[j]]) ** 2, 0);\n  return { c, assign, wcss };\n};\nlet table = "k | WCSS    | centers\\n";\nconst res = [];\nfor (let k = 1; k <= 4; k++) {\n  const r = run(DATA, k);\n  res.push(r);\n  table += k + " | " + r.wcss.toFixed(1).padStart(6) + " | " + r.c.map(v => v.toFixed(1)).join(", ") + "\\n";\n}\ntable += "\\nElbow: the cliff then flatness. DATA above bends at k=2.";\ndocument.getElementById("out").textContent = table;\nconsole.log("k=2 clusters:", DATA.map(v => v + "→C" + res[1].assign[[...DATA].sort((a,b)=>a-b).indexOf(v)]).join(" "));',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Clustering instincts', bn: 'RESULT — Clustering-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'k-means = assign-nearest + move-to-mean until stillness. YOU supply k; the elbow argues for one.', bn: 'k-means = স্থিরতা পর্যন্ত নিকটতম-বরাদ্দ + গড়ে-সরানো। k আপনিই দেন; elbow একটা-পক্ষে যুক্তি দেয়।' },
        { en: 'Distance is the whole game: standardize features first, or the biggest unit bullies the blobs.', bn: 'দূরত্বই পুরো-খেলা: feature আগে standardize করুন, নইলে বড়-একক blob-কে ধমকায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Round blobs only', bn: 'DEBUG — শুধু গোল blob' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: '“k-means found the TRUE groups” (it found k round blobs)', bn: '“k-means আসল দল পেয়েছে” (k গোল blob পেয়েছে)' },
      text: {
        en: 'k-means assumes round, similar-sized groups — crescents, rings, and dense-vs-sparse pairs defeat it. Symptoms: elbow flat everywhere, centers landing in empty space. Cure: DBSCAN for shapes/density, Gaussian mixtures for stretched blobs — or better features first.',
        bn: 'k-means গোল, সমান-আকার দল ধরে নেয় — অর্ধচন্দ্র, বলয়, ঘন-বনাম-পাতলা জোড়া একে হারায়। লক্ষণ: সর্বত্র সমতল-elbow, খালি-জায়গায় কেন্দ্র। ওষুধ: আকৃতি/ঘনত্বে DBSCAN, টানা-blob-এ Gaussian mixture — বা আগে ভালো-feature।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Scale first, cluster second', bn: 'আগে scale, পরে cluster' },
      text: {
        en: 'Age (0–100) vs income (0–100000): raw distance hears ONLY income. Standardize (mean 0, spread 1) unless units already match. One line of scaling beats hours of k-tuning — the most skipped step in beginner clustering.',
        bn: 'বয়স (০–১০০) বনাম আয় (০–১০০০০০): কাঁচা-দূরত্ব শুধু আয় শোনে। একক না-মিললে standardize করুন (গড় ০, ছড়ানো ১)। scaling-এর এক লাইন ঘণ্টার k-টিউনিং হারায় — beginner clustering-এ সবচেয়ে এড়ানো-ধাপ।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Unlabeled value', bn: 'REAL WORLD — লেবেলহীন-মূল্য' },
    },
    {
      type: 'list',
      items: [
        { en: 'Marketing tiers: RFM rows → clusters become “champions / at-risk / lost” playbooks.', bn: 'বিপণন-স্তর: RFM-সারি → cluster “চ্যাম্পিয়ন / ঝুঁকিতে / হারানো” খেলাপুস্তক হয়।' },
        { en: 'Image palettes: pixels → 256 centroids compress photos (color quantization, GIF-style).', bn: 'ছবি-প্যালেট: পিক্সেল → ২৫৬ centroid ছবি সংকোচে (রঙ-quantization, GIF-ধাঁচ)।' },
        { en: 'Support triage: ticket text embeddings → clusters route bugs vs billing vs how-to.', bn: 'সাপোর্ট-বাছাই: টিকিট-পাঠ embedding → cluster বাগ বনাম বিলিং বনাম how-to পাঠায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Evaluation and Selection', bn: 'পরবর্তী — মূল্যায়ন ও মডেল নির্বাচন' },
    },
    {
      type: 'para',
      text: {
        en: 'You can fit lines, boundaries, trees, forests, and clusters. Lesson 6 asks the grown-up question: how do you GRADE them — and pick winners honestly? Train/test splits, cross-validation, and the metrics that stop accuracy from lying.',
        bn: 'রেখা, সীমানা, tree, forest, cluster ফিট করতে পারেন। পাঠ ৬ প্রাপ্তবয়স্ক-প্রশ্ন করে: গ্রেড দেবেন কীভাবে — সৎভাবে বিজয়ী বাছবেন? Train/test ভাগ, cross-validation, accuracy-মিথ্যা থামানো metric।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Assign points to closest centers and recompute the mean for each cluster.',
        bn: 'বিন্দুগুলোকে নিকটতম কেন্দ্রে বরাদ্দ করে প্রতিটি ক্লাস্টারের নতুন গড় হিসাব করো।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'kmeans_step.js',
      code: `const pts = [2, 4, 10, 12, 14];
let c1 = 3, c2 = 11; // initial centroids
const g1 = pts.filter(p => Math.abs(p - c1) <= Math.abs(p - c2));
const g2 = pts.filter(p => Math.abs(p - c1) > Math.abs(p - c2));
const newC1 = g1.reduce((a, b) => a + b, 0) / g1.length;
const newC2 = g2.reduce((a, b) => a + b, 0) / g2.length;
console.log(\`Cluster 1 mean: \${newC1.toFixed(1)}, Cluster 2 mean: \${newC2.toFixed(1)}\`);
// -> Cluster 1 mean: 3.0, Cluster 2 mean: 12.0`,
      caption: {
        en: 'Centroid 1 moves to 3.0 and centroid 2 moves to 12.0 after one iteration.',
        bn: 'এক ধাপের পর কেন্দ্র ১ মান ৩.০ এ এবং কেন্দ্র ২ মান ১২.০ এ সরে যায়।',
      },
    },
  ],
  exercises: [
    {
      id: 'clu-ex-1',
      kind: 'mcq',
      topic: 'kmeans-loop',
      question: { en: 'One k-means round = ?', bn: 'এক k-means রাউন্ড = ?' },
      options: [
        { en: 'Assign to nearest center, then move centers to group means', bn: 'নিকটতম-কেন্দ্রে বরাদ্দ, তারপর কেন্দ্র দল-গড়ে সরান' },
        { en: 'Pick new random labels for all rows', bn: 'সব সারিতে নতুন এলোমেলো-label বাছুন' },
        { en: 'Delete the farthest point', bn: 'দূরতম-বিন্দু মুছুন' },
        { en: 'Double k and restart', bn: 'k দ্বিগুণ করে আবার শুরু' },
      ],
      answer: 0,
      hint: { en: 'HOW steps 2–3.', bn: 'HOW ধাপ ২–৩।' },
      explanation: {
        en: 'Assign-then-average, repeated to stillness. Both moves shrink WCSS — that is why the loop must converge, never wander.',
        bn: 'বরাদ্দ-তারপর-গড়, স্থিরতা পর্যন্ত আবার। দুই চালই WCSS সংকোচে — এজন্য loop converge করতেই হবে, ঘুরতে পারে না।',
      },
    },
    {
      id: 'clu-ex-2',
      kind: 'mcq',
      topic: 'elbow-read',
      question: { en: 'Given WCSS values of 551.5 for k=1, 10 for k=2, 4 for k=3, and 2.5 for k=4, which k is the best elbow point?', bn: 'k = ১ এ WCSS ৫৫১.৫, k = ২ এ ১০, k = ৩ এ ৪, এবং k = ৪ এ ২.৫ হলে কোন k মানটি সেরা elbow পয়েন্ট?' },
      options: [
        { en: 'k=2 — cliff then flat', bn: 'k=২ — খাড়া তারপর সমতল' },
        { en: 'k=4 — lowest wins', bn: 'k=৪ — সর্বনিম্ন জেতে' },
        { en: 'k=1 — simplest', bn: 'k=১ — সরলতম' },
        { en: 'No elbow exists', bn: 'Elbow নেই' },
      ],
      answer: 0,
      hint: { en: 'Biggest drop, then diminishing.', bn: 'বড়-পতন, তারপর কমতে-থাকা।' },
      explanation: {
        en: '1→2 drops 541.5; 2→3 drops only 6. k=2 captures the real structure; beyond it you pay groups for crumbs. Elbow = the bend, never the minimum.',
        bn: '১ থেকে ২ এ ৫৪১.৫ পতন; ২ থেকে ৩ এ মাত্র ৬। k = ২ আসল-কাঠামো ধরে; পরে টুকরোর-দামে দল কেনেন। Elbow = বাঁক, কখনো সর্বনিম্ন নয়।',
      },
    },
    {
      id: 'clu-ex-3',
      kind: 'mcq',
      topic: 'scaling',
      question: { en: 'Clustering age (0–100) with income (0–100000) raw. What happens?', bn: 'বয়স (০–১০০) আয় (০–১০০০০০)-সহ কাঁচা cluster। কী হয়?' },
      options: [
        { en: 'Income dominates distance; age is ignored', bn: 'আয় দূরত্বে আধিপত্য করে; বয়স উপেক্ষিত' },
        { en: 'Age dominates instead', bn: 'বয়স বরং আধিপত্য করে' },
        { en: 'k-means auto-scales', bn: 'k-means স্বয়ং-scale করে' },
        { en: 'Nothing clusters', bn: 'কিছুই cluster হয় না' },
      ],
      answer: 0,
      hint: { en: 'DEBUG tip.', bn: 'DEBUG tip।' },
      explanation: {
        en: 'Euclidean distance adds raw gaps: a $5000 income gap dwarfs a 50-year age gap. Standardize first so both features get a vote.',
        bn: 'Euclidean দূরত্ব কাঁচা-ফাঁক যোগ করে: $৫০০০ আয়-ফাঁক ৫০-বছর বয়স-ফাঁককে বামন করে। আগে standardize করুন, দুই feature-ই ভোট পাক।',
      },
    },
    {
      id: 'clu-ex-4',
      kind: 'predict',
      topic: 'shape-fail',
      question: { en: 'Two crescent moons interlock; k-means k=2 draws a straight cut through both. Name the failure + one fix.', bn: 'দুই অর্ধচন্দ্র জড়ানো; k-means k=২ দুটোয় সোজা-কাট দেয়। ব্যর্থতা + এক সমাধান বলুন।' },
      answer: 'Round-blob bias: k-means only splits by nearest-center lines. Fix: DBSCAN (density shapes) or better features.',
      accept: ['round', 'blob', 'DBSCAN', 'density', 'shape'],
      hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
      explanation: {
        en: 'Nearest-center borders are straight mid-lines — crescents need curves. DBSCAN follows density, not centers, so it traces each moon.',
        bn: 'নিকটতম-কেন্দ্র সীমানা সোজা-মাঝরেখা — অর্ধচন্দ্রে বক্ররেখা লাগে। DBSCAN কেন্দ্র নয়, ঘনত্ব অনুসরণ করে, তাই প্রতি চাঁদ-রেখা আঁকে।',
      },
    },
  ],
  quiz: {
    id: 'clustering-quiz',
    title: { en: 'Lesson 5 exam', bn: 'পাঠ ৫ পরীক্ষা' },
    questions: [
      {
        id: 'cluq1',
        kind: 'mcq',
        topic: 'who-picks-k',
        question: { en: 'Who chooses k in k-means?', bn: 'k-means-এ k বাছে কে?' },
        options: [
          { en: 'You do — the algorithm takes it as input', bn: 'আপনি — অ্যালগরিদম ইনপুট নেয়' },
          { en: 'The algorithm discovers it', bn: 'অ্যালগরিদম আবিষ্কার করে' },
          { en: 'The data votes on it', bn: 'ডেটা ভোট দেয়' },
          { en: 'k is always 3', bn: 'k সবসময় ৩' },
        ],
        answer: 0,
        hint: { en: 'Keyterms: k.', bn: 'Keyterms: k।' },
        explanation: {
          en: 'k is a human decision (elbow, silhouette, or business need). k-means optimizes positions given k — it cannot question the count.',
          bn: 'k মানব-সিদ্ধান্ত (elbow, silhouette, বা ব্যবসা-প্রয়োজন)। k-means k-সাপেক্ষে অবস্থান optimize করে — সংখ্যা প্রশ্ন করতে পারে না।',
        },
      },
      {
        id: 'cluq2',
        kind: 'mcq',
        topic: 'converge-why',
        question: { en: 'Why must k-means converge (never loop forever)?', bn: 'k-means converge করতেই হবে কেন (চিরকাল loop নয়)?' },
        options: [
          { en: 'Every move shrinks WCSS; finite assignments exist', bn: 'প্রতি চাল WCSS সংকোচে; সীমিত-বরাদ্দ আছে' },
          { en: 'It runs exactly 10 rounds', bn: 'এটা ঠিক ১০ রাউন্ড চলে' },
          { en: 'Centroids get tired', bn: 'Centroid ক্লান্ত হয়' },
          { en: 'Random restarts prevent loops', bn: 'এলোমেলো-restart loop থামায়' },
        ],
        answer: 0,
        hint: { en: 'ex-1 explanation.', bn: 'ex-১ ব্যাখ্যা।' },
        explanation: {
          en: 'Both steps only decrease total scatter, and group assignments are finite — so the loop must hit bottom and stop. Local bottom, note: restarts hunt better ones.',
          bn: 'দুই ধাপই মোট-ছড়ানো কমায়, আর দল-বরাদ্দ সীমিত — তাই loop তলায় পৌঁছে থামতেই হবে। স্থানীয়-তলা, মনে রাখুন: restart ভালো-তলা শিকার করে।',
        },
      },
      {
        id: 'cluq3',
        kind: 'mcq',
        topic: 'restarts',
        question: { en: 'Why restart k-means from several seeds?', bn: 'কয়েক seed থেকে k-means আবার শুরু কেন?' },
        options: [
          { en: 'Bad seeds trap it in poor local minima; keep the tightest run', bn: 'খারাপ বীজ দুর্বল স্থানীয়-তলায় আটকায়; সবচেয়ে-শক্ত চালান রাখুন' },
          { en: 'To use more electricity', bn: 'বেশি-বিদ্যুৎ খরচে' },
          { en: 'Seeds change k', bn: 'Seed k বদলায়' },
          { en: 'One run is illegal', bn: 'এক চালান বেআইনি' },
        ],
        answer: 0,
        hint: { en: 'HOW step 4.', bn: 'HOW ধাপ ৪।' },
        explanation: {
          en: 'Convergence guarantees A bottom, not THE bottom. Multiple seeds explore; lowest WCSS wins. Cheap insurance — always take it.',
          bn: 'Convergence একটা-তলার নিশ্চয়তা দেয়, সেরা-তলার নয়। একাধিক seed অন্বেষণ করে; সর্বনিম্ন WCSS জেতে। সস্তা-বীমা — সবসময় নিন।',
        },
      },
      {
        id: 'cluq4',
        kind: 'predict',
        topic: 'quantization',
        question: { en: 'A photo’s pixels cluster into 256 centroids; each pixel is replaced by its centroid’s color. Name the technique + what shrinks.', bn: 'ছবির পিক্সেল ২৫৬ centroid-এ cluster; প্রতি পিক্সেল centroid-রঙে বদলায়। কৌশল + কী সংকোচে বলুন।' },
        answer: 'Color quantization: the palette (file size) shrinks — 16M colors down to 256.',
        accept: ['quantization', 'palette', 'colors', '256', 'compress', 'size'],
        hint: { en: 'WHY #3.', bn: 'WHY #৩।' },
        explanation: {
          en: 'k-means on RGB pixels with k=256 learns the photo’s best palette; storing indices (1 byte) instead of RGB triples compresses the file. GIFs live on this trick.',
          bn: 'RGB-পিক্সেলে k = ২৫৬ দিয়ে k-means ছবির সেরা-প্যালেট শেখে; RGB-ত্রয়ের বদলে সূচক (১ বাইট) রাখা ফাইল সংকোচে। GIF এই কৌশলে বাঁচে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'evaluation-selection',
    title: { en: 'Evaluation and Selection', bn: 'মূল্যায়ন ও নির্বাচন' },
  },
};