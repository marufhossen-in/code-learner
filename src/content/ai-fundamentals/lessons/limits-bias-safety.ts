import type { Lesson } from '../../../lib/types';

export const LimitsBiasSafetyLesson: Lesson = {
  slug: 'limits-bias-safety',
  tech: 'ai-fundamentals',
  title: { en: 'Limits, Bias, Safety', bn: 'সীমা, Bias, নিরাপত্তা' },
  summary: {
    en: 'The senior-developer lesson: models mirror their data — including its biases; high accuracy can hide harm to one group; confident outputs can be confidently wrong; and the world drifts after deployment. You will learn the failure catalog, the safety checklist professionals actually run, and why trust — not accuracy — is the shipped product.',
    bn: 'সিনিয়র-developer পাঠ: মডেল ডেটার আয়না — bias-সহ; বেশি accuracy এক দলের ক্ষতি লুকাতে পারে; আত্মবিশ্বাসী আউটপুট আত্মবিশ্বাসের সাথে ভুল হতে পারে; আর চালুর পর পৃথিবী সরে যায়। ব্যর্থতা-তালিকা, professional-দের আসল নিরাপত্তা-চেকলিস্ট শিখবেন, আর কেন accuracy নয়, আস্থাই চালু-পণ্য।',
  },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Four honest limits', bn: 'WHAT — চার সৎ সীমা' },
    },
    {
      type: 'para',
      text: {
        en: 'One: Bias — history’s prejudices live in training data, and models learn them faithfully (a hiring tool trained on past hires downgraded women’s résumés — Amazon scrapped it in 2018). Two: Confident errors — models output wrong answers in the same tone as right ones; chatbots “hallucinate” citations that never existed. Three: Distribution shift — the world changes after deployment (new slang, new fraud tricks) and frozen models rot. Four: Aggregate lies — 95% overall can mean 97% for group A and 71% for group B.',
        bn: 'এক: Bias — ইতিহাসের পক্ষপাত training data-তে থাকে, মডেল বিশ্বস্তভাবে শেখে (পুরনো নিয়োগে train হায়ারিং-টুল নারীদের রিজিউমে নামিয়ে দিয়েছিল — Amazon ২০১৮-তে বাতিল করে)। দুই: আত্মবিশ্বাসী ভুল — মডেল ভুল উত্তর সঠিকের সুরেই দেয়; চ্যাটবট অস্তিত্বহীন উদ্ধৃতি “hallucinate” করে। তিন: Distribution shift — চালুর পর পৃথিবী বদলায় (নতুন স্ল্যাং, নতুন জালিয়াতি-কৌশল), জমাট-মডেল পচে। চার: গড়-মিথ্যা — মোট ৯৫% মানে দল-A ৯৭% আর দল-B ৭১% হতে পারে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'The aggregate hides the harm: always slice your metrics', bn: 'গড় ক্ষতি লুকায়: মেট্রিক সবসময় কেটে দেখুন' },
      svg: `<svg viewBox="0 0 640 230" font-family="system-ui, sans-serif" role="img" aria-label="Overall accuracy 95 percent hides group B at 71 percent">
<text x="20" y="30" font-size="14" font-weight="700" fill="currentColor">Accuracy by group — same model</text>
<text x="20" y="75" font-size="14" fill="currentColor">Overall</text>
<rect x="130" y="55" width="475" height="26" rx="6" fill="#4f46e5" opacity="0.75"/>
<text x="500" y="73" font-size="13" font-weight="700" fill="#ffffff">95%</text>
<text x="20" y="120" font-size="14" fill="currentColor">Group A</text>
<rect x="130" y="100" width="485" height="26" rx="6" fill="#16a34a" opacity="0.8"/>
<text x="510" y="118" font-size="13" font-weight="700" fill="#ffffff">97%</text>
<text x="20" y="165" font-size="14" fill="currentColor">Group B</text>
<rect x="130" y="145" width="355" height="26" rx="6" fill="#dc2626" opacity="0.8"/>
<text x="330" y="163" font-size="13" font-weight="700" fill="#ffffff">71% ⚠</text>
<text x="20" y="205" font-size="13" fill="currentColor" opacity="0.85">The press release says 95%. Group B experiences 71%. Slicing is not optional.</text>
</svg>`,
      caption: {
        en: 'One number never describes all users. Slice accuracy by every group that matters — gender, age, dialect, device — before you ship.',
        bn: 'এক সংখ্যা সব ব্যবহারকারী বর্ণনা করে না। চালুর আগে জরুরি প্রতি দলে accuracy কাটুন — লিঙ্গ, বয়স, উপভাষা, ডিভাইস।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Bias (data)', def: { en: 'Systematic skew in training data that the model copies (≠ the neuron’s bias knob).', bn: 'Training data-র নিয়মিত ঝোঁক, যা মডেল নকল করে (≠ নিউরনের bias-নব)।' } },
        { term: 'Fairness', def: { en: 'Requiring good performance for EVERY group, not just on average.', bn: 'গড়ে নয়, প্রতি দলে ভালো performance দাবি।' } },
        { term: 'Hallucination', def: { en: 'Fluent, confident output with no grounding in fact.', bn: 'তথ্য-ভিত্তিহীন সাবলীল, আত্মবিশ্বাসী আউটপুট।' } },
        { term: 'Distribution shift', def: { en: 'Post-deployment world change that rots frozen models.', bn: 'চালু-পর পৃথিবী-বদল, যা জমাট-মডেল পচায়।' } },
        { term: 'Red-teaming', def: { en: 'Attacking your own model before strangers do: adversarial tests, jailbreaks, edge cases.', bn: 'অপরিচিতের আগে নিজ মডেলে আক্রমণ: adversarial পরীক্ষা, jailbreak, edge case।' } },
        { term: 'Human-in-the-loop', def: { en: 'A person reviews model outputs before they bite (hiring, medicine, loans).', bn: 'কামড়ানোর আগে মানুষ মডেল-আউটপুট দেখে (নিয়োগ, চিকিৎসা, ঋণ)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Trust is the shipped product', bn: 'WHY — আস্থাই চালু-পণ্য' },
    },
    {
      type: 'list',
      items: [
        { en: 'One biased deployment can end a product and a career: the hiring-tool story is told in every ML ethics course because it was built by smart people who skipped slicing.', bn: 'এক পক্ষপাতী-চালু পণ্য-ক্যারিয়ার শেষ করতে পারে: হায়ারিং-টুল গল্প প্রতি ML-নীতি কোর্সে বলা হয়, কারণ চালাক লোকেরা slicing এড়িয়ে বানিয়েছিল।' },
        { en: 'Regulators arrived: loan denials need explanations, medical AI needs trials, the EU AI Act tiers obligations by risk. Safety is now law, not taste.', bn: 'নিয়ন্ত্রক এসেছে: ঋণ-প্রত্যাখ্যানে ব্যাখ্যা লাগে, মেডিকেল-AI-তে trial, EU AI Act ঝুঁকি-অনুযায়ী দায়িত্ব। নিরাপত্তা এখন আইন, রুচি নয়।' },
        { en: 'Users forgive wrong answers; they do not forgive surprises. Documented limits (“works for X, fails for Y”) ARE the feature.', bn: 'ব্যবহারকারী ভুল উত্তর ক্ষমা করে; চমক নয়। নথিভুক্ত সীমা (“X-এ চলে, Y-তে ফেল”) ফিচারই।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — The pre-ship safety checklist', bn: 'HOW — চালুর-আগে নিরাপত্তা-চেকলিস্ট' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Audit the data', bn: '১. ডেটা-অডিট' }, text: { en: 'Whose history is this? Who is missing? Would you defend each source in public?', bn: 'এটা কার ইতিহাস? কে বাদ? প্রতি উৎস প্রকাশ্যে সমর্থন করবেন?' } },
        { title: { en: '2. Slice every metric', bn: '২. প্রতি মেট্রিক কাটুন' }, text: { en: 'Report accuracy per group that matters. Worst-slice performance is your real grade.', bn: 'জরুরি প্রতি দলে accuracy জানান। খারাপতম-কাটাই আসল গ্রেড।' } },
        { title: { en: '3. Red-team it', bn: '৩. Red-team করুন' }, text: { en: 'Feed typos, dialects, adversarial images, jailbreak prompts. Log every failure mode.', bn: 'টাইপো, উপভাষা, adversarial ছবি, jailbreak prompt খাওয়ান। প্রতি ব্যর্থতা লগ করুন।' } },
        { title: { en: '4. Keep humans + monitor', bn: '৪. মানুষ রাখুন + মনিটর' }, text: { en: 'Human-in-the-loop for high stakes; live dashboards for drift after launch.', bn: 'বেশি-ঝুঁকিতে human-in-the-loop; চালুর পর drift-এ live dashboard।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The failure catalog', bn: 'INSIDE — ব্যর্থতা-তালিকা' },
    },
    {
      type: 'table',
      head: [{ en: 'Failure', bn: 'ব্যর্থতা' }, { en: 'Root cause', bn: 'মূল-কারণ' }, { en: 'Guard', bn: 'পাহারা' }],
      rows: [
        [{ en: 'Hiring tool downgrades women', bn: 'নারীদের নামিয়ে হায়ারিং-টুল' }, { en: 'Biased history as labels', bn: 'label-এ পক্ষপাতী ইতিহাস' }, { en: 'Audit labels; slice by gender', bn: 'Label-অডিট; লিঙ্গে কাটুন' }],
        [{ en: 'Face recognition mis-IDs one group', bn: 'এক দলে ভুল ফেস-চেনা' }, { en: 'Unbalanced training faces', bn: 'অসাম্য training-মুখ' }, { en: 'Balance data; worst-slice gate', bn: 'ডেটা-সাম্য; খারাপ-কাটা ফটক' }],
        [{ en: 'Chatbot invents citations', bn: 'চ্যাটবট উদ্ধৃতি বানায়' }, { en: 'Fluency rewarded over truth', bn: 'সত্যের ওপর সাবলীলতা-পুরস্কার' }, { en: 'Grounding + “say unsure” training', bn: 'Grounding + “অনিশ্চিত বলো” training' }],
        [{ en: 'Fraud model rots in 6 months', bn: '৬ মাসে জালিয়াতি-মডেল পচে' }, { en: 'Fraudsters adapt (shift)', bn: 'জালিয়াত খাপ খায় (shift)' }, { en: 'Retrain cadence + drift alarms', bn: 'Retrain-ছন্দ + drift-অ্যালার্ম' }],
      ],
      caption: { en: 'Every row happened in production, at a famous company. The guards are the checklist above, applied.', bn: 'প্রতি সারি production-এ ঘটেছে, বিখ্যাত কোম্পানিতে। পাহারা উপরের চেকলিস্ট, প্রয়োগ-সহ।' },
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Ship like a senior', bn: 'RESULT — সিনিয়রের মতো চালু করুন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Never quote one accuracy number for a multi-group product — slice or stay silent.', bn: 'বহু-দল পণ্যে এক accuracy-সংখ্যা কখনো বলবেন না — কাটুন বা চুপ থাকুন।' },
        { en: 'Run the 4-step checklist (audit → slice → red-team → monitor) before every deployment.', bn: 'প্রতি চালুর আগে ৪-ধাপ চেকলিস্ট (অডিট → কাটা → red-team → মনিটর)।' },
        { en: 'Write the limits doc first: “works for / fails for / unknown for.” Trust ships with it.', bn: 'আগে সীমা-নথি লিখুন: “চলে / ফেল / অজানা।” আস্থা এর সাথে চালু হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Two comforting lies', bn: 'DEBUG — দুই সান্ত্বনা-মিথ্যা' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Lie: “Math can’t be biased”', bn: 'মিথ্যা: “গণিত পক্ষপাতী হতে পারে না”' },
      text: {
        en: 'Math is neutral; DATA is history, and history is not. A model trained on unequal pasts reproduces them with mathematical precision. The bias enters before the first equation runs.',
        bn: 'গণিত নিরপেক্ষ; ডেটা ইতিহাস, আর ইতিহাস নয়। অসমান অতীতে train মডেল গাণিতিক-নিখুঁতভাবে তা পুনরুৎপাদন করে। প্রথম সমীকরণের আগেই bias ঢোকে।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Lie: “99% accurate = safe”', bn: 'মিথ্যা: “৯৯% নির্ভুল = নিরাপদ”' },
      text: {
        en: '1% of a million daily decisions is 10,000 wronged people per day — and errors cluster on the already-marginalized. Safety = worst-slice error × stakes × reversibility, not the headline number.',
        bn: 'দৈনিক দশ লাখ সিদ্ধান্তের ১% = দিনে ১০,০০০ ক্ষতিগ্রস্ত — আর error প্রান্তিকদের ওপর জমে। নিরাপত্তা = খারাপ-কাটা error × ঝুঁকি × উল্টানো-যোগ্যতা, শিরোনাম-সংখ্যা নয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Safety gates already exist', bn: 'REAL WORLD — নিরাপত্তা-ফটক আছেই' },
    },
    {
      type: 'list',
      items: [
        { en: 'Medicine: AI diagnostics go through clinical trials like drugs — sliced efficacy required.', bn: 'চিকিৎসা: AI-রোগনির্ণয় ওষুধের মতো clinical trial পেরোয় — কাটা-কার্যকারিতা বাধ্যতামূলক।' },
        { en: 'Lending: denied applicants legally receive reasons — “the model said so” is not one.', bn: 'ঋণ: প্রত্যাখ্যাত আবেদনকারী আইনত কারণ পায় — “মডেল বলেছে” কারণ নয়।' },
        { en: 'Hiring: several jurisdictions now mandate bias audits of automated hiring tools — the 2018 lesson, legislated.', bn: 'নিয়োগ: অনেক অঞ্চলে স্বয়ংক্রিয় হায়ারিং-টুলের bias-অডিট বাধ্যতামূলক — ২০১৮ সালের শিক্ষা, আইনে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The capstone', bn: 'পরবর্তী — ক্যাপস্টোন' },
    },
    {
      type: 'para',
      text: {
        en: 'Seven lessons of map, machine, and honesty. Lesson 8 builds: your own tiny classifier running live — plus the graduation plan into the machine-learning hub, where the math behind everything here gets its full treatment.',
        bn: 'মানচিত্র, যন্ত্র, সততার সাত পাঠ। পাঠ ৮ বানায়: live চলা নিজের ছোট classifier — আর machine-learning হাবে গ্র্যাজুয়েশন-পরিকল্পনা, যেখানে এখানকার সবকিছুর পেছনের গণিত পূর্ণ-ব্যাখ্যা পায়।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Three models, one thousand applications, one question each: how accurate are you, and who did you refuse?',
        bn: '৩টি মডেল, ১ হাজার আবেদন, প্রতিটির কাছে ১টি প্রশ্ন: আপনি কতটা ঠিক, আর কাকে ফিরিয়ে দিয়েছেন?'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'accuracy-and-harm.js',
      code: `// 1,000 applications, 3% from a rare group. Same data, three models, three different stories.
let seed = 99;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const rows = Array.from({ length: 1000 }, () => {
  const rare = rnd() < 0.03;
  const deserves = rnd() < 0.55;
  return { rare, deserves };
});
const report = (name, predict) => {
  let right = 0, rareMissed = 0, rareDeserving = 0;
  for (const r of rows) {
    const p = predict(r);
    if (p === (r.deserves ? 1 : 0)) right++;
    if (r.rare && r.deserves) { rareDeserving++; if (!p) rareMissed++; }
  }
  console.log(name.padEnd(22), 'accuracy', ((right / rows.length) * 100).toFixed(1) + '%', '| deserving rare applicants refused', rareMissed + '/' + rareDeserving);
};
report('approve nobody', () => 0);
report('approve everybody', () => 1);
report('flip a coin', () => (rnd() < 0.5 ? 1 : 0));

// --- what this file prints, one run ---
// approve nobody         accuracy 46.6% | deserving rare applicants refused 14/14
// approve everybody      accuracy 53.4% | deserving rare applicants refused 0/14
// flip a coin            accuracy 49.0% | deserving rare applicants refused 5/14`,
      caption: {
        en: 'Approving nobody scores 46.6 percent and refuses 14 of 14 deserving rare applicants. A single number cannot see that harm; the per-group count is the honest column.',
        bn: 'কারও অনুমোদন না করলে স্কোর ৪৬.৬ শতাংশ, অথচ যোগ্য বিরল-গোষ্ঠীর ১৪ জনের ১৪ জনই ফেরত যায়। একটি মাত্র সংখ্যা এই ক্ষতি দেখে না; গোষ্ঠীভেদে গণনাই সৎ কলাম।'
      }
    },
  ],
  exercises: [
    {
      id: 'lbs-ex-1',
      kind: 'mcq',
      topic: 'slicing',
      question: { en: 'Overall 95%, group B 71%. The honest headline is…', bn: 'মোট ৯৫%, দল-B ৭১%। সৎ শিরোনাম…' },
      options: [
        { en: '“95% overall, 71% for group B — must fix before ship”', bn: '“মোট ৯৫%, দল-B ৭১% — চালুর আগে ঠিক করতে হবে”' },
        { en: '“95% accurate — ship it”', bn: '“৯৫% নির্ভুল — চালু করো”' },
        { en: '“Group B doesn’t matter”', bn: '“দল-B জরুরি নয়”' },
        { en: '“Delete group B from the test set”', bn: '“Test set থেকে দল-B মুছে দাও”' },
      ],
      answer: 0,
      hint: { en: 'Slice or stay silent.', bn: 'কাটুন বা চুপ থাকুন।' },
      explanation: {
        en: 'The worst slice is the real grade. Shipping 71% for real users while advertising 95% is exactly the failure this lesson exists to prevent.',
        bn: 'খারাপ-কাটাই আসল গ্রেড। ৯৫% বিজ্ঞাপন করে আসল ব্যবহারকারীর ৭১% চালু করা ঠিক সেই ব্যর্থতা, যা রোধে এই পাঠ।',
      },
    },
    {
      id: 'lbs-ex-2',
      kind: 'mcq',
      topic: 'bias-source',
      question: { en: 'Where did the hiring tool’s bias come from?', bn: 'হায়ারিং-টুলের bias এল কোথা থেকে?' },
      options: [
        { en: 'Training labels recording a biased hiring history', bn: 'পক্ষপাতী নিয়োগ-ইতিহাসের training label' },
        { en: 'Evil programmers typing prejudice', bn: 'পক্ষপাত টাইপ করা দুষ্ট প্রোগ্রামার' },
        { en: 'Too many layers', bn: 'বেশি স্তর' },
        { en: 'The threshold constant', bn: 'Threshold ধ্রুবক' },
      ],
      answer: 0,
      hint: { en: '“The bias enters before the first equation.”', bn: '“প্রথম সমীকরণের আগেই bias ঢোকে।”' },
      explanation: {
        en: 'Past hires (mostly men) were the labels; the model faithfully learned “men = hire.” No malice needed — just unexamined history as ground truth.',
        bn: 'পুরনো নিয়োগ (বেশিরভাগ পুরুষ) label ছিল; মডেল বিশ্বস্তভাবে “পুরুষ = নিয়োগ” শিখেছিল। বিদ্বেষ লাগেনি — শুধু অপরীক্ষিত ইতিহাস ground truth হিসেবে।',
      },
    },
    {
      id: 'lbs-ex-3',
      kind: 'mcq',
      topic: 'hallucination',
      question: { en: 'A chatbot cites three papers that do not exist, fluently. This is…', bn: 'চ্যাটবট অস্তিত্বহীন তিন পেপার সাবলীলভাবে উদ্ধৃত করে। এটা…' },
      options: [
        { en: 'Hallucination: confident output, no grounding', bn: 'Hallucination: আত্মবিশ্বাসী আউটপুট, ভিত্তি নেই' },
        { en: 'Proof of understanding', bn: 'বোঝার প্রমাণ' },
        { en: 'A hardware fault', bn: 'হার্ডওয়্যার-ত্রুটি' },
        { en: 'Impossible — models never err', bn: 'অসম্ভব — মডেল ভুল করে না' },
      ],
      answer: 0,
      hint: { en: 'Fluency ≠ truth.', bn: 'সাবলীলতা ≠ সত্য।' },
      explanation: {
        en: 'Next-word prediction optimizes plausibility, not truth. Guards: retrieval grounding, “say unsure” training, and human verification for facts that matter.',
        bn: 'পরের-শব্দ পূর্বাভাস সত্য নয়, বিশ্বাসযোগ্যতা ঠিক করে। পাহারা: retrieval grounding, “অনিশ্চিত বলো” training, আর জরুরি-তথ্যে মানুষের যাচাই।',
      },
    },
    {
      id: 'lbs-ex-4',
      kind: 'predict',
      topic: 'checklist-apply',
      question: { en: 'You ship a loan-approval model. Apply checklist step 2 + 4 in one line each.', bn: 'ঋণ-অনুমোদন মডেল চালু করছেন। চেকলিস্ট ধাপ ২ + ৪ এক লাইনে প্রতিটা।' },
      answer: 'Slice approval accuracy by gender/age/region and gate on the worst slice; route low-confidence cases to human officers and monitor drift weekly.',
      accept: ['slice', 'gender', 'human', 'monitor', 'worst'],
      hint: { en: 'HOW steps 2 and 4.', bn: 'HOW ধাপ ২ আর ৪।' },
      explanation: {
        en: 'Full credit: sliced metrics with a worst-slice gate (step 2) + human review for edge cases and drift monitoring (step 4). High stakes = no fully-automatic launch.',
        bn: 'পূর্ণ নম্বর: খারাপ-কাটা ফটকসহ কাটা-মেট্রিক (ধাপ ২) + edge case-এ মানুষের দেখা আর drift মনিটর (ধাপ ৪)। বেশি-ঝুঁকি = পূর্ণ-স্বয়ংক্রিয় চালু নয়।',
      },
    },
  ],
  quiz: {
    id: 'limits-bias-safety-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'lbsq1',
        kind: 'mcq',
        topic: 'shift',
        question: { en: 'A fraud model decays over 6 months with no code changes. Best explanation?', bn: 'কোড-বদল ছাড়া ৬ মাসে জালিয়াতি-মডেল পচে। সেরা ব্যাখ্যা?' },
        options: [
          { en: 'Distribution shift: fraudsters adapted, the world moved', bn: 'Distribution shift: জালিয়াত খাপ খেয়েছে, পৃথিবী সরেছে' },
          { en: 'The model forgot its training', bn: 'মডেল training ভুলে গেছে' },
          { en: 'CPUs got slower', bn: 'CPU ধীর হয়েছে' },
          { en: 'Fraud stopped existing', bn: 'জালিয়াতি আর নেই' },
        ],
        answer: 0,
        hint: { en: 'Frozen models, moving worlds.', bn: 'জমাট-মডেল, সরন্ত পৃথিবী।' },
        explanation: {
          en: 'Weights froze at deployment; adversaries did not. Cure: retrain cadence + drift alarms (failure catalog, row 4).',
          bn: 'ওজন চালুতে জমেছিল; প্রতিপক্ষ নয়। ওষুধ: retrain-ছন্দ + drift-অ্যালার্ম (ব্যর্থতা-তালিকা, সারি ৪)।',
        },
      },
      {
        id: 'lbsq2',
        kind: 'mcq',
        topic: 'red-team',
        question: { en: 'Red-teaming means…', bn: 'Red-teaming মানে…' },
        options: [
          { en: 'Attacking your own model before strangers do', bn: 'অপরিচিতের আগে নিজ মডেলে আক্রমণ' },
          { en: 'Painting servers red', bn: 'সার্ভার লাল রঙ করা' },
          { en: 'Deleting test data', bn: 'Test data মুছে ফেলা' },
          { en: 'Hiring only red teams', bn: 'শুধু red দল নিয়োগ' },
        ],
        answer: 0,
        hint: { en: 'Keyterms.', bn: 'Keyterms।' },
        explanation: {
          en: 'Adversarial inputs, jailbreaks, dialect/typo stress — found by you in private, not by users in public.',
          bn: 'Adversarial ইনপুট, jailbreak, উপভাষা/টাইপো-চাপ — ব্যবহারকারী প্রকাশ্যে পাওয়ার আগে আপনি ব্যক্তিগতভাবে ধরুন।',
        },
      },
      {
        id: 'lbsq3',
        kind: 'mcq',
        topic: 'one-percent',
        question: { en: 'Why is “99% accurate” not automatically safe?', bn: '“৯৯% নির্ভুল” স্বয়ংক্রিয় নিরাপদ নয় কেন?' },
        options: [
          { en: '1% at scale is thousands harmed daily, clustered on the marginalized', bn: 'স্কেলে ১% দিনে হাজারো ক্ষতিগ্রস্ত, প্রান্তিকদের ওপর জমে' },
          { en: '99% is a failing grade', bn: '৯৯% ফেল-গ্রেড' },
          { en: 'Accuracy numbers are always fake', bn: 'Accuracy-সংখ্যা সবসময় ভুয়া' },
          { en: 'Models round up', bn: 'মডেল বাড়িয়ে ধরে' },
        ],
        answer: 0,
        hint: { en: 'DEBUG lie 2 does the arithmetic.', bn: 'DEBUG মিথ্যা ২ হিসাব করে।' },
        explanation: {
          en: 'Safety = worst-slice error × stakes × reversibility. A 99% loan model still wrongs thousands — with explanations owed to each.',
          bn: 'নিরাপত্তা = খারাপ-কাটা error × ঝুঁকি × উল্টানো-যোগ্যতা। ৯৯% ঋণ-মডেলও হাজারোকে ভুল করে — প্রত্যেকের কাছে ব্যাখ্যা-সহ।',
        },
      },
      {
        id: 'lbsq4',
        kind: 'predict',
        topic: 'limits-doc',
        question: { en: 'Write the three-line limits doc for a crop-disease photo classifier.', bn: 'শস্য-রোগ ছবি-শ্রেণিকারকের তিন-লাইন সীমা-নথি লিখুন।' },
        answer: 'Works for: daylight phone photos of rice/wheat leaves. Fails for: night shots, other crops, heavy blur. Unknown for: new diseases, other regions — verify with agronomists.',
        accept: ['works', 'fails', 'unknown', 'verify'],
        hint: { en: '“Works for / fails for / unknown for.”', bn: '“চলে / ফেল / অজানা।”' },
        explanation: {
          en: 'Full credit names all three lines honestly — especially “unknown,” with a verification path. That doc IS the trust contract with users.',
          bn: 'পূর্ণ নম্বরে তিন লাইন সৎভাবে — বিশেষ “অজানা,” যাচাই-পথসহ। এই নথিই ব্যবহারকারীর সাথে আস্থা-চুক্তি।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'ai-capstone',
    title: { en: 'Capstone: Your Tiny Classifier', bn: 'Capstone: নিজের ছোট Classifier' },
  },
};