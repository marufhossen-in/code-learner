import type { Lesson } from '../../../lib/types';

export const gridLesson: Lesson = {
  slug: 'grid',
  tech: 'css',
  title: {
    en: 'CSS Grid',
    bn: 'সত্যিকারের দ্বিমাত্রিক লেআউট: আগে সারি-কলামের ক্যানভাস বানান, তারপর'
  },
  summary: {
    en: 'True two-dimensional layout: define the rows and columns first, then let content flow into the canvas.',
    bn: 'সত্যিকারের দ্বিমাত্রিক লেআউট: আগে সারি-কলামের ক্যানভাস বানান, তারপর কনটেন্ট সেখানে বইয়ে দিন।',
  },
  minutes: 16,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — What is grid?', bn: 'WHAT — গ্রিড কী?' },
    },
    {
      type: 'para',
      text: {
        en: 'Grid is the layout mode for two dimensions at once. Flexbox asks how items share a single line, whereas grid asks what the whole canvas looks like. You declare explicit tracks using grid-template-columns and grid-template-rows, and the browser creates numbered grid lines and the cells between them. Items then flow into those cells automatically, or you place them precisely across tracks.',
        bn: 'গ্রিড হলো একসাথে দুই মাত্রার লেআউট মোড। ফ্লেক্সবক্স জানতে চায় আইটেমগুলো এক লাইনে কীভাবে বসবে, আর গ্রিড জানতে চায় পুরো ক্যানভাসটা দেখতে কেমন হবে। আপনি grid-template-columns এবং grid-template-rows দিয়ে ট্র্যাক নির্ধারণ করেন, আর ব্রাউজার সংখ্যাযুক্ত গ্রিড লাইন তৈরি করে। আইটেমগুলো স্বয়ংক্রিয়ভাবে বা নির্দিষ্ট নিয়মে সেখানে বসে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Track', def: { en: 'One row or column forming the space between two parallel grid lines.', bn: '২টি সমান্তরাল গ্রিড লাইনের মাঝের ১টি সারি বা কলামের ফাঁকা ট্র্যাক।' } },
        { term: 'Cell', def: { en: 'The space between four lines — the unit.', bn: 'চার লাইনের মাঝের জায়গা — একক ঘর।' } },
        { term: 'fr', def: { en: 'Fraction of FREE space, after fixed sizes are paid.', bn: 'নির্দিষ্ট মাপ শেষে ফাঁকা জায়গার ভগ্নাংশ।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — When grid beats flexbox', bn: 'WHY — কখন গ্রিড ফ্লেক্সবক্সকে হারায়' },
    },
    {
      type: 'list',
      items: [
        { en: 'Page skeletons: header/sidebar/main/footer regions.', bn: 'পেজের কাঠামো: হেডার/সাইডবার/মেইন/ফুটার অঞ্চল।' },
        { en: 'Galleries and card walls that stay aligned BOTH ways.', bn: 'গ্যালারি ও কার্ডের সারি — দুইদিকেই সারিবদ্ধ।' },
        { en: 'A featured item spanning tracks, without markup gymnastics.', bn: 'ফিচার্ড আইটেম কয়েক ট্র্যাক জুড়ে — মার্কআপ কসরত ছাড়াই।' },
        { en: 'Overlapping elements (text on image) without position: absolute.', bn: 'একের উপর এক (ছবির উপর টেক্সট) — position: absolute ছাড়াই।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Lines, tracks, fr', bn: 'HOW — লাইন, ট্র্যাক, fr' },
    },
    {
      type: 'code',
      lang: 'css',
      code: `.page {
  display: grid;
  grid-template-columns: 240px 1fr;   /* sidebar + flexible main */
  grid-template-rows: auto 1fr auto;  /* header / content / footer */
  gap: 16px;
  min-height: 100vh;
}

.header { grid-column: 1 / -1; }      /* from line 1 to the last line */
.footer { grid-column: 1 / -1; }

.gallery {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr; /* shares of FREE width: 2/4, 1/4, 1/4 */
  gap: 12px;
}`,
    },
    {
      type: 'visual',
      id: 'grid',
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNAL — How the browser sizes tracks', bn: 'INTERNAL — ব্রাউজার ট্র্যাকের মাপ নেয় কীভাবে' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Fixed tracks first', bn: 'আগে নির্দিষ্ট ট্র্যাক' },
          text: {
            en: 'px, rem and other absolute tracks reserve their exact space.',
            bn: 'px, rem ও অন্য নির্দিষ্ট ট্র্যাক নিখুঁত জায়গা সংরক্ষণ করে।',
          },
        },
        {
          title: { en: 'Content-based tracks', bn: 'কনটেন্টনির্ভর ট্র্যাক' },
          text: {
            en: 'auto, min-content and max-content are measured against what they must hold.',
            bn: 'auto, min-content, max-content — ধারণ করতে হবে এমন জিনিসের বিপরীতে মাপা হয়।',
          },
        },
        {
          title: { en: 'The fr distribution', bn: 'fr বণ্টন' },
          text: {
            en: 'Whatever space remains is divided by fr shares: 2fr gets twice each 1fr. fr means “fraction of FREE space”, not “fraction of the container”.',
            bn: 'যা বাকি থাকে fr ভাগে ভাগ হয়: 2fr পায় প্রতিটি 1fr-এর দ্বিগুণ। fr অর্থ “ফাঁকা জায়গার ভগ্নাংশ”, “কন্টেইনারের ভগ্নাংশ” নয়।',
          },
        },
        {
          title: { en: 'Auto-placement', bn: 'অটো-প্লেসমেন্ট' },
          text: {
            en: 'Unplaced items fill cells in order — skipping none by default, “dense” packing optional. Placed items (span or line numbers) are honored first.',
            bn: 'স্থানহীন আইটেম ক্রমে ঘর ভরে — ডিফল্টে কিছু বাদ নয়, চাইলে “dense” প্যাকিং। বসানো আইটেম (span বা লাইন নম্বর) আগে মানা হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — The canvas stays put', bn: 'RESULT — ক্যানভাস স্থির থাকে' },
    },
    {
      type: 'para',
      text: {
        en: 'The deep win over flexbox: alignment survives content. Remove one card from a grid gallery and the rest keep their columns; a featured span never pushes the rhythm off. The canvas is owned by the CONTAINER, not negotiated between siblings — which is why grid scales to whole-application layouts while flexbox shines inside components.',
        bn: 'ফ্লেক্সবক্সের চেয়ে গভীর জয়: কনটেন্ট বদলালেও সারিবন্ধন টিকে থাকে। গ্রিড গ্যালারি থেকে একটি কার্ড সরালে বাকিগুলো কলামে থাকে; ফিচার্ড span ছন্দ ভাঙে না। ক্যানভাসের মালিক কন্টেইনার — ভাইবোনদের দর-কষাকষি নয় — এইজন্যই গ্রিড পুরো-অ্যাপ লেআউটে স্কেল করে, আর ফ্লেক্সবক্স কম্পোনেন্টের ভেতরে ঝলমল করে।',
      },
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Grid gotchas', bn: 'DEBUG — গ্রিডের ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: '“fr is broken — my 1fr column is huge!”', bn: '“fr ভাঙা — 1fr কলাম বিশাল!”' },
      text: {
        en: 'fr tracks have an automatic minimum of their CONTENT (auto). A long word or wide image inflates the track. Fix: minmax(0, 1fr) to allow shrinking below content.',
        bn: 'fr ট্র্যাকের ন্যূনতম হলো তার কনটেন্ট (auto)। লম্বা শব্দ বা চওড়া ছবি ট্র্যাক ফুলিয়ে দেয়। সমাধান: minmax(0, 1fr) — কনটেন্টের চেয়ে ছোট হওয়ার অনুমতি।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Line numbers vs track numbers', bn: 'লাইন নম্বর বনাম ট্র্যাক নম্বর' },
      text: {
        en: 'grid-column: 1 / 3 means “from LINE 1 to LINE 3” — that is TWO tracks, not three. Three columns have four lines. span 2 is often clearer.',
        bn: 'grid-column: 1 / 3 অর্থ “লাইন ১ থেকে লাইন ৩” — অর্থাৎ দুই ট্র্যাক, তিন নয়। তিন কলামের চার লাইন। span 2 প্রায়শই পরিষ্কার।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Firefox has a grid inspector', bn: 'ফায়ারফক্সে আছে গ্রিড ইনস্পেক্টর' },
      text: {
        en: 'DevTools → Layout → Grid overlays lines, numbers and areas on your page. Debug grids visually, never by counting in your head.',
        bn: 'DevTools → Layout → Grid আপনার পেজে লাইন, নম্বর ও এরিয়া দেখায়। মাথায় গুনে নয়, চোখে দেখে গ্রিড ডিবাগ করুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Where grid runs production', bn: 'REAL WORLD — প্রোডাকশনে গ্রিড যেখানে চলে' },
    },
    {
      type: 'list',
      items: [
        { en: 'Admin dashboards: the very layout of THIS learning platform.', bn: 'অ্যাডমিন ড্যাশবোর্ড: এই লার্নিং প্ল্যাটফর্মেরই কাঠামো।' },
        { en: 'Photo galleries (Unsplash-style) with spans and dense packing.', bn: 'ফটো গ্যালারি (Unsplash-ধাঁচের) — span ও dense প্যাকিংসহ।' },
        { en: 'Card walls in e-commerce that keep prices and buttons aligned.', bn: 'ই-কমার্সের কার্ড — দাম ও বাটন সারিবদ্ধ রাখা।' },
        { en: 'Editor/IDE shells: panels, gutters, and a center canvas.', bn: 'এডিটর/IDE শেল: প্যানেল, গাটার আর মাঝখানের ক্যানভাস।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The full layout toolkit', bn: 'NEXT — পূর্ণ লেআউট টুলকিট' },
    },
    {
      type: 'list',
      items: [
        { en: 'grid-template-areas — name your regions.', bn: 'grid-template-areas — অঞ্চলের নাম দিন।' },
        { en: 'Responsive grids — auto-fill / auto-fit with minmax.', bn: 'রেসপন্সিভ গ্রিড — minmax-সহ auto-fill / auto-fit।' },
        { en: 'When to choose grid vs flexbox, with real layouts.', bn: 'কখন গ্রিড, কখন ফ্লেক্সবক্স — বাস্তব লেআউট দিয়ে।' },
      ],
    },
  ],
  nextLesson: {
    slug: 'css-responsive',
    tech: 'css',
    title: { en: 'Responsive Web Design: Viewports, Media Queries, and Fluid Layouts', bn: 'রেসপন্সিভ ওয়েব ডিজাইন: ভিউপোর্ট, মিডিয়া কোয়েরি এবং ফ্লুইড লেআউট' }
  },
  exercises: [
    {
      id: 'css-grid-ex1',
      kind: 'predict',
      topic: 'fr',
      question: {
        en: 'In a 900px container with gap 0, how wide is the first column?',
        bn: 'gap 0 সহ 900px কন্টেইনারে প্রথম কলাম কত চওড়া?',
      },
      code: `.grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}`,
      options: [
        { en: '300px', bn: '300px' },
        { en: '450px', bn: '450px' },
        { en: '200px', bn: '200px' },
        { en: '600px', bn: '600px' },
      ],
      answer: 1,
      hint: { en: 'Total shares = 4. First takes 2 of them.', bn: 'মোট ভাগ = ৪। প্রথমটি নেয় ২ ভাগ।' },
      explanation: {
        en: '2+1+1 = 4 shares of free space. 900/4 = 225 per share; the 2fr column gets 450px.',
        bn: '2+1+1 = ফাঁকা জায়গার ৪ ভাগ। 900/4 = ভাগপ্রতি 225; 2fr কলাম পায় 450px।',
      },
    },
    {
      id: 'css-grid-ex2',
      kind: 'mcq',
      topic: 'lines',
      question: {
        en: 'grid-column: 2 / 4 spans how many tracks?',
        bn: 'grid-column: 2 / 4 কয়টি ট্র্যাক জুড়ে?',
      },
      options: [
        { en: 'Four', bn: 'চারটি' },
        { en: 'Three', bn: 'তিনটি' },
        { en: 'Two', bn: 'দুইটি' },
        { en: 'One', bn: 'একটি' },
      ],
      answer: 2,
      hint: { en: 'Count LINES, then cells between them.', bn: 'লাইন গুনুন, তারপর মাঝের ঘর।' },
      explanation: {
        en: 'Lines 2→4 enclose two cells (between 2-3 and 3-4). Use span 2 for clarity.',
        bn: 'লাইন 2→4 মাঝে রাখে দুই ঘর (২-৩ ও ৩-৪)। পরিষ্কার লেখায় span 2।',
      },
    },
    {
      id: 'css-grid-ex3',
      kind: 'fill',
      topic: 'template',
      question: {
        en: 'Make three equal flexible columns:',
        bn: 'তিনটি সমান নমনীয় কলাম বানান:',
      },
      code: `.cards {
  display: grid;
  grid-template-columns: ______;
  gap: 12px;
}`,
      answer: '1fr 1fr 1fr',
      accept: ['1fr 1fr 1fr', 'repeat(3, 1fr)', 'repeat(3,1fr)'],
      hint: { en: 'fr units, or a repeat() of three.', bn: 'fr ইউনিট, অথবা তিনবারের repeat()।' },
      explanation: {
        en: 'Both 1fr 1fr 1fr and repeat(3, 1fr) split free space into three equal tracks.',
        bn: '1fr 1fr 1fr ও repeat(3, 1fr) — দুটোই ফাঁকা জায়গা তিন সমান ট্র্যাকে ভাগ করে।',
      },
      solution: 'repeat(3, 1fr)',
    },
    {
      id: 'css-grid-ex4',
      kind: 'mcq',
      topic: 'debug',
      question: {
        en: 'A 1fr column grows huge because of a wide image inside. Correct fix?',
        bn: 'ভেতরের চওড়া ছবিতে 1fr কলাম বিশাল হয়ে যাচ্ছে। সঠিক সমাধান?',
      },
      options: [
        { en: 'grid-template-columns: minmax(0, 1fr)', bn: 'grid-template-columns: minmax(0, 1fr)' },
        { en: 'grid-template-columns: 1fr !important', bn: 'grid-template-columns: 1fr !important' },
        { en: 'Remove display: grid', bn: 'display: grid সরিয়ে দিন' },
        { en: 'Make the gap smaller', bn: 'gap ছোট করুন' },
      ],
      answer: 0,
      hint: { en: 'fr inherits an auto minimum from content.', bn: 'fr কনটেন্ট থেকে auto ন্যূনতম পায়।' },
      explanation: {
        en: 'Plain 1fr means minmax(auto, 1fr) — content sets a floor. minmax(0, 1fr) drops the floor to zero so the track obeys its share.',
        bn: 'খাঁটি 1fr অর্থ minmax(auto, 1fr) — কনটেন্ট মেঝে ঠিক করে দেয়। minmax(0, 1fr) মেঝে শূন্য করে ট্র্যাককে তার ভাগ মানতে বাধ্য করে।',
      },
    },
  ],
  quiz: {
    id: 'css-grid-quiz',
    title: { en: 'Grid Quiz', bn: 'গ্রিড কুইজ' },
    questions: [
      {
        id: 'css-grid-q1',
        kind: 'predict',
        topic: 'template',
        question: {
          en: 'How many columns does this create?',
          bn: 'এটি কয়টি কলাম বানায়?',
        },
        code: `grid-template-columns: repeat(3, minmax(80px, 1fr));`,
        options: [
          { en: '1', bn: '১' },
          { en: '3', bn: '৩' },
          { en: '80', bn: '৮০' },
          { en: 'Depends on content', bn: 'কনটেন্টের উপর নির্ভর' },
        ],
        answer: 1,
        hint: { en: 'repeat(3, …) is a count.', bn: 'repeat(3, …) একটি সংখ্যা।' },
        explanation: {
          en: 'repeat(3, X) writes X three times: three columns, each at least 80px wide and at most one equal share.',
          bn: 'repeat(3, X) মানে X তিনবার: তিন কলাম, প্রতিটি অন্তত 80px, সর্বোচ্চ সমান এক ভাগ।',
        },
      },
      {
        id: 'css-grid-q2',
        kind: 'mcq',
        topic: 'concept',
        question: {
          en: 'The strongest reason to pick grid over flexbox for a page skeleton:',
          bn: 'পেজ কাঠামোতে ফ্লেক্সবক্সের বদলে গ্রিড বেছে নেওয়ার সবচেয়ে শক্তিশালী কারণ:',
        },
        options: [
          { en: 'Grid is newer, therefore better', bn: 'গ্রিড নতুন, তাই ভালো' },
          {
            en: 'The container owns a 2D canvas — alignment survives content changes in both axes',
            bn: 'কন্টেইনার 2D ক্যানভাসের মালিক — দুই অ্যাক্সিসেই কন্টেন্ট বদলালেও সারিবন্ধন টিকে থাকে',
          },
          { en: 'Flexbox cannot do columns', bn: 'ফ্লেক্সবক্স কলাম পারে না' },
          { en: 'Grid needs no media queries ever', bn: 'গ্রিডে কখনো মিডিয়া কোয়েরি লাগে না' },
        ],
        answer: 1,
        hint: { en: 'Two dimensions, owned by the parent.', bn: 'দুই মাত্রা, মালিক প্যারেন্ট।' },
        explanation: {
          en: 'Grid defines rows AND columns at the container level; children snap into the canvas instead of negotiating with siblings.',
          bn: 'গ্রিড কন্টেইনার-লেভেলে সারি ও কলাম বানায়; চাইল্ডরা ভাইবোনের সাথে দর-কষাকষি না করে ক্যানভাসে বসে যায়।',
        },
      },
      {
        id: 'css-grid-q3',
        kind: 'predict',
        topic: 'placement',
        question: {
          en: 'With grid-column: 1 / -1, the item stretches…',
          bn: 'grid-column: 1 / -1 দিলে আইটেমটি প্রসারিত হয়…',
        },
        options: [
          { en: 'to the second column', bn: 'দ্বিতীয় কলাম পর্যন্ত' },
          { en: 'across ALL columns', bn: 'সব কলাম জুড়ে' },
          { en: 'nowhere — negative is invalid', bn: 'না কোথাও — ঋণাত্মক অবৈধ' },
          { en: 'across all rows instead', bn: 'বরং সব সারি জুড়ে' },
        ],
        answer: 1,
        hint: { en: '-1 means the last line.', bn: '-1 অর্থ শেষ লাইন।' },
        explanation: {
          en: 'Line 1 to the LAST line spans every column — the classic full-width header/footer declaration.',
          bn: 'লাইন ১ থেকে শেষ লাইন মানে সব কলাম — ফুল-উইডথ হেডার/ফুটারের ক্লাসিক ঘোষণা।',
        },
      },
      {
        id: 'css-grid-q4',
        kind: 'mcq',
        topic: 'fr',
        question: {
          en: 'fr is best described as…',
          bn: 'fr-এর সবচেয়ে সঠিক বর্ণনা…',
        },
        options: [
          { en: 'a fraction of the container width', bn: 'কন্টেইনার প্রস্থের ভগ্নাংশ' },
          { en: 'a share of the FREE space after fixed tracks', bn: 'নির্দিষ্ট ট্র্যাকের পর ফাঁকা জায়গার ভাগ' },
          { en: 'a fraction unit like %', bn: '%-এর মতো ভগ্নাংশ ইউনিট' },
          { en: 'fixed pixels converted to ratios', bn: 'অনুপাতে রূপান্তরিত নির্দিষ্ট পিক্সেল' },
        ],
        answer: 1,
        hint: { en: 'Fixed and content sizes are paid first.', bn: 'নির্দিষ্ট ও কনটেন্ট মাপ আগে দেওয়া হয়।' },
        explanation: {
          en: 'fr divides what REMAINS after fixed and content-sized tracks — unlike %, which speaks of the whole container.',
          bn: 'নির্দিষ্ট ও কনটেন্ট-মাপের ট্র্যাকের পর যা থাকে fr সেটা ভাগ করে — %-এর মতো পুরো কন্টেইনার নয়।',
        },
      },
    ],
  },

  next: { slug: 'css-responsive', title: { en: 'The Responsive Estate', bn: 'রেসপন্সিভ-এস্টেট' } },
};
