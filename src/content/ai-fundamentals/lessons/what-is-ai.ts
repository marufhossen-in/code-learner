import type { Lesson } from '../../../lib/types';

export const WhatIsAiLesson: Lesson = {
  slug: 'what-is-ai',
  tech: 'ai-fundamentals',
  title: {
    en: 'What AI Really Is',
    bn: 'AI হলো এমন সফটওয়্যার, যা দেখে, শোনে, সিদ্ধান্ত নেয় — AI Fundamentals'
  },
  summary: {
    en: 'AI is software that does tasks we once thought needed a human brain — seeing, listening, deciding. This lesson draws the honest map: what AI can and cannot do, narrow vs general AI, and where machine learning and deep learning sit inside the picture.',
    bn: 'AI হলো এমন সফটওয়্যার, যা দেখে, শোনে, সিদ্ধান্ত নেয় — এমন কাজ, যা আগে শুধু মানুষের মস্তিষ্কই পারত বলে ভাবা হতো। এই পাঠে সৎ মানচিত্র আঁকব: AI কী পারে আর কী পারে না, narrow বনাম general AI, আর machine learning ও deep learning এই ছবির কোথায় বসে।',
  },
  minutes: 12,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Software that learns its job', bn: 'WHAT — কাজ শিখে নেওয়া সফটওয়্যার' },
    },
    {
      type: 'para',
      text: {
        en: 'Ordinary software follows rules you write: if this condition holds, do that. AI software is different — you show it thousands of examples and it figures out its own rules. A spam filter was never taught “emails with the word lottery are spam”; it saw a million emails and learned the pattern by itself.',
        bn: 'সাধারণ সফটওয়্যার আপনার লেখা নিয়ম মেনে চলে: এই শর্ত মিললে ওই কাজ করো। AI সফটওয়্যার আলাদা — আপনি একে হাজারো উদাহরণ দেখান, আর সে নিজেই নিয়ম বের করে নেয়। স্প্যাম ফিল্টারকে কেউ শেখায়নি “lottery শব্দ থাকলেই স্প্যাম”; সে দশ লাখ ইমেইল দেখে নিজেই প্যাটার্ন শিখেছে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'AI ⊃ Machine Learning ⊃ Deep Learning', bn: 'AI ⊃ মেশিন লার্নিং ⊃ ডিপ লার্নিং' },
      svg: `<svg viewBox="0 0 640 300" font-family="system-ui, sans-serif" role="img" aria-label="AI contains machine learning, which contains deep learning">
<circle cx="170" cy="150" r="125" fill="#4f46e5" opacity="0.10" stroke="#4f46e5" stroke-width="2"/>
<circle cx="170" cy="150" r="86" fill="#4f46e5" opacity="0.16" stroke="#4f46e5" stroke-width="2"/>
<circle cx="170" cy="150" r="48" fill="#4f46e5" opacity="0.28" stroke="#4f46e5" stroke-width="2"/>
<text x="170" y="52" text-anchor="middle" font-size="16" font-weight="700" fill="currentColor">Artificial Intelligence</text>
<text x="170" y="102" text-anchor="middle" font-size="14" font-weight="600" fill="currentColor">Machine Learning</text>
<text x="170" y="145" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Deep</text>
<text x="170" y="162" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">Learning</text>
<text x="330" y="70" font-size="15" font-weight="700" fill="currentColor">Reading this diagram</text>
<text x="330" y="100" font-size="14" fill="currentColor">• AI = any machine doing a “smart” task</text>
<text x="330" y="128" font-size="14" fill="currentColor">• ML = AI that learns from examples</text>
<text x="330" y="156" font-size="14" fill="currentColor">• DL = ML with multi-layer neural nets</text>
<text x="330" y="196" font-size="14" fill="currentColor">All deep learning is ML. All ML is AI.</text>
<text x="330" y="224" font-size="14" fill="currentColor">The reverse is NOT true.</text>
<text x="330" y="264" font-size="13" fill="currentColor" opacity="0.75">This hub: AI → ML ideas. Next hubs: ML → DL.</text>
</svg>`,
      caption: {
        en: 'Deep learning is a subset of machine learning, which is a subset of AI. Most “AI” you meet is machine learning.',
        bn: 'Deep learning হলো machine learning-এর অংশ, আর machine learning AI-এর অংশ। আপনি যেসব “AI” দেখেন, তার প্রায় সবই machine learning।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'AI', def: { en: 'Software doing tasks that seem to need human intelligence: seeing, listening, deciding.', bn: 'মানুষের বুদ্ধি লাগে মনে হয় এমন কাজ করা সফটওয়্যার: দেখা, শোনা, সিদ্ধান্ত।' } },
        { term: 'Narrow AI', def: { en: 'AI good at ONE job (spam filtering, face unlock). All real AI today is narrow.', bn: 'একটা কাজে ভালো AI (স্প্যাম ফিল্টার, ফেস আনলক)। আজকের সব বাস্তব AI-ই narrow।' } },
        { term: 'General AI', def: { en: 'A machine that learns ANY job like a human. Does not exist yet — research goal.', bn: 'মানুষের মতো যেকোনো কাজ শেখা যন্ত্র। এখনো বানানো হয়নি — গবেষণার লক্ষ্য।' } },
        { term: 'Machine Learning', def: { en: 'AI built by learning patterns from examples instead of hand-written rules.', bn: 'হাতে-লেখা নিয়ম নয়, উদাহরণ থেকে প্যাটার্ন শিখে বানানো AI।' } },
        { term: 'Deep Learning', def: { en: 'Machine learning with neural networks many layers deep. Needs lots of data.', bn: 'অনেক লেয়ারের নিউরাল নেটওয়ার্ক দিয়ে machine learning। অনেক ডেটা লাগে।' } },
        { term: 'Model', def: { en: 'The finished, trained artifact: data goes in, predictions come out.', bn: 'প্রশিক্ষণ-শেষে তৈরি জিনিস: ডেটা ঢোকে, prediction বেরোয়।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Why learn this now', bn: 'WHY — এখনই কেন শিখবেন' },
    },
    {
      type: 'list',
      items: [
        { en: 'AI is becoming infrastructure, like electricity: every field — medicine, farming, banking, education — will use it, and someone must understand it.', bn: 'AI বিদ্যুতের মতো অবকাঠামো হচ্ছে: চিকিৎসা, কৃষি, ব্যাংক, শিক্ষা — সব খাতে লাগবে, আর কাউকে না কাউকে এটা বুঝতে হবে।' },
        { en: 'Understanding beats both fear and hype: you will know which “AI” claims are real and which are marketing.', bn: 'বোঝা ভয় আর হাইপ — দুটোরই চেয়ে ভালো: কোন “AI” দাবি আসল আর কোনটা মার্কেটিং, আপনি ধরতে পারবেন।' },
        { en: 'It is the highest-leverage skill in software today: one trained model can serve millions of users.', bn: 'সফটওয়্যারে আজ এটাই সবচেয়ে লাভজনক দক্ষতা: একটা trained model লাখো ব্যবহারকারীকে সেবা দিতে পারে।' },
        { en: 'You need no advanced math to START: this hub builds intuition first, math later.', bn: 'শুরু করতে উচ্চতর গণিত লাগে না: এই হাব আগে intuition গড়ে, গণিত পরে।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — How this hub teaches', bn: 'HOW — এই হাব কীভাবে শেখায়' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: 'L1–L2: the map', bn: 'L1–L2: মানচিত্র' }, text: { en: 'What AI is, and the one big idea behind all learning machines.', bn: 'AI কী, আর সব learning machine-এর পেছনের একটাই বড় ধারণা।' } },
        { title: { en: 'L3–L5: hands on', bn: 'L3–L5: হাতে-কলমে' }, text: { en: 'Data, the perceptron, and the training loop — with code you run in your browser.', bn: 'ডেটা, perceptron, আর training loop — ব্রাউজারেই চালানো কোডসহ।' } },
        { title: { en: 'L6–L7: depth', bn: 'L6–L7: গভীরতা' }, text: { en: 'From one neuron to deep networks; then the honest limits: bias, mistakes, safety.', bn: 'একটা নিউরন থেকে deep network; তারপর সৎ সীমা: bias, ভুল, নিরাপত্তা।' } },
        { title: { en: 'L8: build', bn: 'L8: বানানো' }, text: { en: 'A capstone: your own tiny classifier, running live on this site.', bn: 'Capstone: আপনার নিজের ছোট classifier, এই সাইটেই live চলবে।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Rules vs learning, and 70 years in 5 beats', bn: 'INSIDE — নিয়ম বনাম শেখা, আর ৫ ধাপে ৭০ বছর' },
    },
    {
      type: 'para',
      text: {
        en: 'Traditional programming: human writes rules, computer applies them. Machine learning flips it: human shows examples, computer WRITES the rules. That flip is the entire field — everything else is detail about how the computer writes good rules instead of bad ones.',
        bn: 'প্রচলিত প্রোগ্রামিং: মানুষ নিয়ম লেখে, কম্পিউটার প্রয়োগ করে। Machine learning এটা উল্টে দেয়: মানুষ উদাহরণ দেখায়, কম্পিউটার নিয়ম লেখে। এই উল্টোটাই পুরো ফিল্ড — বাকি সব হলো কম্পিউটার কীভাবে খারাপ নয়, ভালো নিয়ম লিখবে, তার খুঁটিনাটি।',
      },
    },
    {
      type: 'compare',
      title: { en: 'Same job — sorting fruit photos — two philosophies', bn: 'একই কাজ — ফলের ছবি বাছাই — দুই দর্শন' },
      left: {
        title: { en: 'Hand-written rules (breaks)', bn: 'হাতে-লেখা নিয়ম (ভাঙে)' },
        points: [
          { en: '“If red pixels > 60% → apple.” Fails on green apples, bad lighting, bananas.', bn: '“লাল পিক্সেল > ৬০% → আপেল।” সবুজ আপেল, খারাপ আলো, কলায় ফেল করে।' },
          { en: 'Every exception needs a new rule; rules rot as the world changes.', bn: 'প্রতি ব্যতিক্রমে নতুন নিয়ম লাগে; পৃথিবী বদলালে নিয়ম পচে যায়।' },
        ],
      },
      right: {
        title: { en: 'Learned from examples (adapts)', bn: 'উদাহরণ থেকে শেখা (খাপ খায়)' },
        points: [
          { en: 'Show 10,000 labeled fruit photos; the model finds its own signals.', bn: '১০,০০০ লেবেল-লাগানো ফলের ছবি দেখান; মডেল নিজেই সংকেত খুঁজে নেয়।' },
          { en: 'New fruit? Add photos and retrain — no rule surgery.', bn: 'নতুন ফল? ছবি যোগ করে আবার train করুন — নিয়ম কাটাছেঁড়া নয়।' },
        ],
      },
    },
    {
      type: 'para',
      text: {
        en: 'The 70-year arc in five beats: 1956 — the term “AI” is coined, optimism explodes. 1970s–90s — “AI winters”: promises fail, funding freezes. 2012 — deep learning wins image recognition by a mile; winter ends. 2017 — the Transformer paper quietly rewrites the field. 2022 — ChatGPT puts AI in everyone’s pocket. Lesson: progress comes in waves; fundamentals outlive every wave.',
        bn: '৫ ধাপে ৭০ বছরের গল্প: ১৯৫৬ — “AI” নামের জন্ম, আশার বিস্ফোরণ। ১৯৭০–৯০ — “AI winter”: প্রতিশ্রুতি ভাঙে, ফান্ড জমে যায়। ২০১২ — ছবি-চেনায় deep learning অনেক এগিয়ে জেতে; winter শেষ। ২০১৭ — Transformer পেপার নীরবে ফিল্ড বদলে দেয়। ২০২২ — ChatGPT সবার পকেটে AI পৌঁছে দেয়। শিক্ষা: অগ্রগতি ঢেউয়ে আসে; মৌলিক জ্ঞান সব ঢেউ পার করে।',
      },
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — What you take from lesson 1', bn: 'RESULT — পাঠ ১ থেকে যা নিলেন' },
    },
    {
      type: 'list',
      items: [
        { en: 'The one-sentence definition: AI learns its rules from examples; ordinary software is handed its rules.', bn: 'এক-বাক্যের সংজ্ঞা: AI উদাহরণ থেকে নিয়ম শেখে; সাধারণ সফটওয়্যারকে নিয়ম ধরিয়ে দেওয়া হয়।' },
        { en: 'The nesting: deep learning ⊂ machine learning ⊂ AI — and all deployed AI today is narrow.', bn: 'ভেতরে-ভেতরে: deep learning ⊂ machine learning ⊂ AI — আর আজকের সব চালু AI-ই narrow।' },
        { en: 'Three questions for any AI claim: What examples did it learn from? What job exactly? How is it tested?', bn: 'যেকোনো AI-দাবির জন্য তিন প্রশ্ন: কী উদাহরণ থেকে শিখেছে? ঠিক কী কাজ? কীভাবে পরীক্ষা করা হয়?' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Three myths to delete', bn: 'DEBUG — মুছে ফেলার মতো তিন ভুল ধারণা' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Myth 1: “AI thinks like a human”', bn: 'ভুল ১: “AI মানুষের মতো ভাবে”' },
      text: {
        en: 'No. A chess engine does not “want” to win; a chatbot does not “understand” you. They compute patterns. Treating them as people is the fastest way to be fooled by them.',
        bn: 'না। দাবার ইঞ্জিন “জিততে চায়” না; চ্যাটবট আপনাকে “বোঝে” না। তারা প্যাটার্ন হিসাব করে। এদের মানুষ ভাবাই এদের কাছে বোকা বনার দ্রুততম পথ।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Myth 2: “More data always wins”', bn: 'ভুল ২: “বেশি ডেটা মানেই জয়”' },
      text: {
        en: 'Bad data teaches bad lessons confidently. A million mislabeled photos produce a confident mislabeler. Quality and honesty of data beat quantity — lesson 3 is entirely about this.',
        bn: 'খারাপ ডেটা আত্মবিশ্বাসের সাথে খারাপ শিক্ষা দেয়। দশ লাখ ভুল-লেবেলের ছবি তৈরি করে আত্মবিশ্বাসী ভুল-লেবেলার। ডেটার মান আর সততা পরিমাণকে হারায় — পাঠ ৩ পুরোটাই এ নিয়ে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — AI you already met today', bn: 'REAL WORLD — আজই যেসব AI দেখেছেন' },
    },
    {
      type: 'table',
      head: [{ en: 'Moment', bn: 'মুহূর্ত' }, { en: 'The AI', bn: 'AI-টি' }, { en: 'Job (narrow!)', bn: 'কাজ (narrow!)' }],
      rows: [
        [{ en: 'Unlocking your phone', bn: 'ফোন আনলক' }, { en: 'Face unlock', bn: 'ফেস আনলক' }, { en: '“Is this the owner’s face?”', bn: '“এটা কি মালিকের মুখ?”' }],
        [{ en: 'Typing a message', bn: 'মেসেজ লেখা' }, { en: 'Keyboard suggestions', bn: 'কিবোর্ড সাজেশন' }, { en: '“What word comes next?”', bn: '“পরে কী শব্দ আসবে?”' }],
        [{ en: 'Opening maps', bn: 'ম্যাপ খোলা' }, { en: 'ETA prediction', bn: 'ETA পূর্বাভাস' }, { en: '“How long will this trip take?”', bn: '“এই যাত্রায় কতক্ষণ লাগবে?”' }],
        [{ en: 'Skipping spam', bn: 'স্প্যাম এড়ানো' }, { en: 'Spam filter', bn: 'স্প্যাম ফিল্টার' }, { en: '“Wanted or junk?”', bn: '“দরকারি না আবর্জনা?”' }],
      ],
      caption: { en: 'Notice: each does exactly one job. That is narrow AI — and it runs the modern world.', bn: 'লক্ষ্য করুন: প্রতিটা ঠিক একটা কাজ করে। এটাই narrow AI — আর এটাই আধুনিক বিশ্ব চালায়।' },
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — How machines learn', bn: 'NEXT — মেশিন কীভাবে শেখে' },
    },
    {
      type: 'para',
      text: {
        en: 'You know WHAT AI is. Lesson 2 opens the engine: the three ways machines learn — supervised, unsupervised, reinforcement — and the vocabulary (feature, label, model, prediction) every later lesson speaks.',
        bn: 'AI কী, জানলেন। পাঠ ২ ইঞ্জিন খুলবে: মেশিনের শেখার তিন পথ — supervised, unsupervised, reinforcement — আর শব্দভাণ্ডার (feature, label, model, prediction), যা পরের সব পাঠে লাগবে।',
      },
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'One file, twenty lines, no library. It measures a guessed rule against the best threshold a loop can find, and prints both.',
        bn: 'একটি ফাইল, কুড়ি লাইন, কোনো লাইব্রেরি নয়। এটি একটি অনুমান-নিয়মের সঙ্গে লুপ-বাছাই সেরা থ্রেশহোল্ড মিলিয়ে দেখায়, দুটোর ফলই ছাপে।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'rule-vs-learn.js',
      code: `// 200 emails counted by link. Spam and honest mail overlap, so a hand rule has to lose somewhere.
let seed = 4242;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const rows = Array.from({ length: 200 }, () => {
  const spam = rnd() < 0.45;
  const links = spam ? 1 + Math.round(rnd() * 6) : Math.round(rnd() * 3);
  return { links, spam: spam ? 1 : 0 };
});
const score = (predict) => rows.filter((r) => predict(r) === r.spam).length / rows.length;
let best = { t: 0, a: 0 };
for (let t = 0; t <= 8; t++) {
  const a = score((r) => (r.links > t ? 1 : 0));
  if (a > best.a) best = { t, a };
}
console.log('guessed rule, links > 4:', (score((r) => (r.links > 4 ? 1 : 0)) * 100).toFixed(1) + '% correct');
console.log('threshold learned by trying 0..8: links >' + best.t + ', ' + (best.a * 100).toFixed(1) + '% correct');
console.log('rows', rows.length, 'spam', rows.filter((r) => r.spam).length, 'overlap rows where a guess must fail', rows.filter((r) => (r.links > 4 ? 1 : 0) !== r.spam).length);

// --- what this file prints, one run ---
// guessed rule, links > 4: 74.5% correct
// threshold learned by trying 0..8: links >3, 81.5% correct
// rows 200 spam 90 overlap rows where a guess must fail 51`,
      caption: {
        en: 'Learning here is a for loop over eight thresholds, and it gains seven points. The machine found no hidden law: it measured the same data more patiently than the guess did.',
        bn: 'এখানে শেখা মানে ৮টি থ্রেশহোল্ডের উপর একটি for loop, আর তা ৭ পয়েন্ট এগিয়ে যায়। মেশিন কোনো গোপন নিয়ম আবিষ্কার করেনি; অনুমানের চেয়ে ধৈর্যে একই ডেটা মাপে।'
      }
    },
  ],
  exercises: [
    {
      id: 'wai-ex-1',
      kind: 'mcq',
      topic: 'narrow-ai',
      question: { en: 'Which of these is narrow AI?', bn: 'এগুলোর মধ্যে কোনটা narrow AI?' },
      options: [
        { en: 'A spam filter that only sorts email', bn: 'স্প্যাম ফিল্টার, যা শুধু ইমেইল বাছে' },
        { en: 'A robot that learns any job like a human', bn: 'রোবট, যা মানুষের মতো যেকোনো কাজ শেখে' },
        { en: 'A pocket calculator', bn: 'পকেট ক্যালকুলেটর' },
        { en: 'A printed road map', bn: 'ছাপা রোড ম্যাপ' },
      ],
      answer: 0,
      hint: { en: 'Narrow = exactly one learned job.', bn: 'Narrow = ঠিক একটা শেখা কাজ।' },
      explanation: {
        en: 'The spam filter learns one job from examples: narrow AI. The robot is general AI (does not exist). The calculator and map follow fixed rules with no learning — not AI at all.',
        bn: 'স্প্যাম ফিল্টার উদাহরণ থেকে একটা কাজ শেখে: narrow AI। রোবট general AI (নেই)। ক্যালকুলেটর আর ম্যাপ নির্দিষ্ট নিয়ম মেনে চলে, শেখে না — এগুলো AI-ই নয়।',
      },
    },
    {
      id: 'wai-ex-2',
      kind: 'mcq',
      topic: 'nesting',
      question: { en: 'How do AI, ML, and deep learning relate?', bn: 'AI, ML আর deep learning-এর সম্পর্ক কী?' },
      options: [
        { en: 'Deep learning ⊂ ML ⊂ AI', bn: 'ডিপ লার্নিং ⊂ ML ⊂ AI' },
        { en: 'AI ⊂ ML ⊂ deep learning', bn: 'AI ⊂ ML ⊂ ডিপ লার্নিং' },
        { en: 'They are three names for the same thing', bn: 'একই জিনিসের তিন নাম' },
        { en: 'ML and deep learning replaced AI', bn: 'ML আর deep learning AI-কে বদলে দিয়েছে' },
      ],
      answer: 0,
      hint: { en: 'Look at the lesson diagram: circles inside circles.', bn: 'পাঠের চিত্র দেখুন: বৃত্তের ভেতর বৃত্ত।' },
      explanation: {
        en: 'AI is the biggest circle (any “smart” task). ML is the part that learns from examples. Deep learning is ML done with multi-layer neural networks.',
        bn: 'AI সবচেয়ে বড় বৃত্ত (“স্মার্ট” যেকোনো কাজ)। ML সেই অংশ, যা উদাহরণ থেকে শেখে। Deep learning হলো বহু-লেয়ার নিউরাল নেটওয়ার্কের ML।',
      },
    },
    {
      id: 'wai-ex-3',
      kind: 'mcq',
      topic: 'rules-vs-learning',
      question: { en: 'A fruit sorter fails on every green apple. The hand-written-rules fix and the ML fix differ how?', bn: 'ফল-বাছাই সবুজ আপেলে ফেল করে। হাতে-লেখা ফিক্স আর ML ফিক্সের পার্থক্য কী?' },
      options: [
        { en: 'Rules: patch code per exception. ML: add green-apple photos, retrain.', bn: 'নিয়ম: ব্যতিক্রমে কোড প্যাচ। ML: সবুজ-আপেলের ছবি যোগ, retrain।' },
        { en: 'Both require rewriting the whole program', bn: 'দুটোতেই পুরো প্রোগ্রাম নতুন করে লিখতে হয়' },
        { en: 'ML needs no new examples ever', bn: 'ML-এ কখনো নতুন উদাহরণ লাগে না' },
        { en: 'Rules adapt automatically to new fruit', bn: 'নিয়ম নতুন ফলে নিজে খাপ খায়' },
      ],
      answer: 0,
      hint: { en: 'Who writes the new rule in each philosophy?', bn: 'প্রতি দর্শনে নতুন নিয়ম লেখে কে?' },
      explanation: {
        en: 'With rules, the programmer writes each patch. With ML, new examples teach the model — the computer updates its own rules. That is the flip lesson 1 is built on.',
        bn: 'নিয়মে প্রোগ্রামার প্রতি প্যাচ লেখে। ML-এ নতুন উদাহরণ মডেলকে শেখায় — কম্পিউটার নিজের নিয়ম নিজে হালনাগাদ করে। এই উল্টোটাই পাঠ ১ এর ভিত্তি।',
      },
    },
    {
      id: 'wai-ex-4',
      kind: 'predict',
      topic: 'honest-questions',
      question: { en: 'A startup claims “our AI reads résumés better than humans.” Name the FIRST honest question to ask, and why it matters most.', bn: 'এক স্টার্টআপ দাবি করে “আমাদের AI মানুষের চেয়ে ভালো রিজিউমে পড়ে।” প্রথম সৎ প্রশ্নটা কী হবে, আর কেন এটাই সবচেয়ে জরুরি?' },
      answer: 'What examples (résumés + hiring outcomes) did it learn from — because biased or narrow training data makes a confident biased judge.',
      accept: ['examples', 'training data', 'learn from', 'résumés'],
      hint: { en: 'Lesson 1’s three questions — which comes first?', bn: 'পাঠ ১ এর তিন প্রশ্ন — প্রথমটা কোনটা?' },
      explanation: {
        en: 'Always ask about training data first: if it learned from one company’s past hires, it cloned that company’s biases. No honest answer about data → no trust in the claim.',
        bn: 'সবসময় আগে training data নিয়ে প্রশ্ন: এক কোম্পানির পুরনো নিয়োগ থেকে শিখলে সে ওই কোম্পানির পক্ষপাতই নকল করেছে। ডেটা নিয়ে সৎ উত্তর নেই → দাবিতে আস্থা নেই।',
      },
    },
  ],
  quiz: {
    id: 'what-is-ai-quiz',
    title: { en: 'Lesson 1 exam', bn: 'পাঠ ১ পরীক্ষা' },
    questions: [
      {
        id: 'waiq1',
        kind: 'mcq',
        topic: 'definition',
        question: { en: 'Best one-sentence definition of AI?', bn: 'AI-এর সেরা এক-বাক্য সংজ্ঞা?' },
        options: [
          { en: 'Software that learns its rules from examples', bn: 'উদাহরণ থেকে নিয়ম শেখা সফটওয়্যার' },
          { en: 'Any program running on a fast computer', bn: 'দ্রুত কম্পিউটারে চলা যেকোনো প্রোগ্রাম' },
          { en: 'Robots that look like humans', bn: 'মানুষের মতো দেখতে রোবট' },
          { en: 'Software with many if-statements', bn: 'অনেক if-statement-ওয়ালা সফটওয়্যার' },
        ],
        answer: 0,
        hint: { en: 'Rules: handed over, or learned?', bn: 'নিয়ম: ধরিয়ে দেওয়া, না শেখা?' },
        explanation: {
          en: 'Learning rules from examples is the defining flip. Speed, shape, and rule-count are irrelevant.',
          bn: 'উদাহরণ থেকে নিয়ম শেখাই নির্ণায়ক উল্টো-পথ। গতি, আকৃতি, নিয়মের সংখ্যা অপ্রাসঙ্গিক।',
        },
      },
      {
        id: 'waiq2',
        kind: 'mcq',
        topic: 'general-ai',
        question: { en: 'Which statement about general AI is true today?', bn: 'General AI নিয়ে আজ কোন বক্তব্য সত্য?' },
        options: [
          { en: 'It does not exist yet; all deployed AI is narrow', bn: 'এখনো নেই; চালু সব AI narrow' },
          { en: 'Every chatbot is general AI', bn: 'প্রতি চ্যাটবট general AI' },
          { en: 'It was achieved in 2022', bn: '২০২২ সালে অর্জিত হয়েছে' },
          { en: 'It means AI running on phones', bn: 'মানে ফোনে চলা AI' },
        ],
        answer: 0,
        hint: { en: 'Myth 1 in DEBUG.', bn: 'DEBUG-এর ভুল ১।' },
        explanation: {
          en: 'Chatbots are narrow (one job: next-word prediction, however fluent). Human-like general learning remains a research goal.',
          bn: 'চ্যাটবট narrow (এক কাজ: পরের-শব্দ পূর্বাভাস, যত সাবলীলই হোক)। মানুষের মতো সাধারণ শেখা এখনো গবেষণার লক্ষ্য।',
        },
      },
      {
        id: 'waiq3',
        kind: 'mcq',
        topic: 'history',
        question: { en: 'What ended the last “AI winter”?', bn: 'শেষ “AI winter” কী শেষ করেছিল?' },
        options: [
          { en: 'Deep learning decisively winning image recognition (~2012)', bn: 'ছবি-চেনায় deep learning-এর নির্ণায়ক জয় (~২০১২)' },
          { en: 'The invention of the keyboard', bn: 'কিবোর্ড আবিষ্কার' },
          { en: 'Printing the first AI textbook', bn: 'প্রথম AI পাঠ্যবই ছাপা' },
          { en: 'Banning hand-written rules', bn: 'হাতে-লেখা নিয়ম নিষিদ্ধ করা' },
        ],
        answer: 0,
        hint: { en: 'Five beats — which beat melted the winter?', bn: 'পাঁচ ধাপ — কোন ধাপে winter গলেছিল?' },
        explanation: {
          en: 'Around 2012, deep neural networks crushed image benchmarks. Data + GPUs + deep nets ended the freeze.',
          bn: '২০১২ সালের দিকে deep neural network ছবির benchmark গুঁড়িয়ে দেয়। ডেটা + GPU + deep net জমাট শেষ করে।',
        },
      },
      {
        id: 'waiq4',
        kind: 'predict',
        topic: 'apply',
        question: { en: 'Your friend says “my keyboard AI understands me.” Correct them in one precise sentence using lesson-1 vocabulary.', bn: 'বন্ধু বলে “আমার কিবোর্ড-AI আমাকে বোঝে।” পাঠ-১-এর শব্দে এক নির্ভুল বাক্যে শুধরে দিন।' },
        answer: 'It is narrow AI predicting the next word from typing examples — pattern computation, not human understanding.',
        accept: ['narrow', 'next word', 'predict', 'pattern'],
        hint: { en: 'One job, learned from examples — name it.', bn: 'এক কাজ, উদাহরণ থেকে শেখা — নাম বলুন।' },
        explanation: {
          en: 'Full credit names: narrow AI, the single job (next-word prediction), and denies human-like understanding. Fluency ≠ comprehension.',
          bn: 'পূর্ণ নম্বরে থাকবে: narrow AI, একক কাজ (পরের-শব্দ পূর্বাভাস), আর মানুষের মতো বোঝার অস্বীকার। সাবলীলতা ≠ উপলব্ধি।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'how-machines-learn',
    title: { en: 'How Machines Learn', bn: 'মেশিন কীভাবে শেখে' },
  },
};