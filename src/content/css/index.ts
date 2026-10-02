import type { Hub } from '../../lib/types';
import { cascadeCourtLesson } from './lessons/the-cascade-court';
import { paintLedgerLesson } from './lessons/the-paint-ledger';
import { boxModelLesson } from './lessons/box-model';
import { positionMapsLesson } from './lessons/the-position-maps';
import { flexboxLesson } from './lessons/flexbox';
import { gridLesson } from './lessons/grid';
import { responsiveEstateLesson } from './lessons/the-responsive-estate';
import { motionHallLesson } from './lessons/the-motion-hall';
import { architectureLesson } from './lessons/the-architecture';

export const cssHub: Hub = {
  slug: 'css',
  name: 'CSS',
  icon: '🎨',
  tagline: {
    en: 'From documents to design: layout, color, motion and polish.',
    bn: 'ডকুমেন্ট থেকে ডিজাইন: লেআউট, রং, গতি আর মসৃণতা।',
  },
  about: {
    en: 'CSS is a rule engine, not a drawing tool: you declare constraints, and the browser solves them. This hub builds the two mental models that make CSS predictable — the box model (every element is nested rectangles) and the layout modes (flex, grid, flow) — then goes deep into responsive design, animation and maintainable architecture.',
    bn: 'CSS আঁকার টুল নয়, একটি নিয়ম-চালক ইঞ্জিন: আপনি শর্ত ঘোষণা করেন, ব্রাউজার সমাধান করে। এই হাবে গড়ে তোলা হয় দুটি মানসিক মডেল যা CSS-কে অনুমানযোগ্য করে — বক্স মডেল (প্রতিটি এলিমেন্ট ঘেরা আয়তক্ষেত্র) আর লেআউট মোড (flex, grid, flow) — তারপর গভীরে রেসপন্সিভ ডিজাইন, অ্যানিমেশন ও রক্ষণযোগ্য আর্কিটেকচার।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The language', bn: 'ধাপ ১ — ভাষাটি' },
      items: [
        { en: 'Selectors, specificity, cascade', bn: 'সিলেক্টর, স্পেসিফিসিটি, ক্যাসকেড' },
        { en: 'Colors, units (px/rem/%/vh), typography', bn: 'রং, ইউনিট (px/rem/%/vh), টাইপোগ্রাফি' },
        { en: 'The box model (lesson 1)', bn: 'বক্স মডেল (লেসন ১)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Layout', bn: 'ধাপ ২ — লেআউট' },
      items: [
        { en: 'Flexbox — one axis to rule (lesson 2)', bn: 'ফ্লেক্সবক্স — এক অ্যাক্সিসে সব (লেসন ২)' },
        { en: 'Grid — rows and columns together', bn: 'গ্রিড — সারি ও কলাম একসাথে' },
        { en: 'Positioning: relative, absolute, sticky', bn: 'পজিশনিং: relative, absolute, sticky' },
      ],
    },
    {
      title: { en: 'Stage 3 — Responsive', bn: 'ধাপ ৩ — রেসপন্সিভ' },
      items: [
        { en: 'Media queries & fluid type', bn: 'মিডিয়া কোয়েরি ও তরল টাইপ' },
        { en: 'Mobile-first workflow', bn: 'মোবাইল-ফার্স্ট কর্মপদ্ধতি' },
        { en: 'Images: srcset, object-fit', bn: 'ছবি: srcset, object-fit' },
      ],
    },
    {
      title: { en: 'Stage 4 — Craft', bn: 'ধাপ ৪ — কারুকাজ' },
      items: [
        { en: 'Transitions & keyframe animation', bn: 'ট্রানজিশন ও কীফ্রেম অ্যানিমেশন' },
        { en: 'Custom properties (design tokens like this platform!)', bn: 'কাস্টম প্রপার্টি (এই প্ল্যাটফর্মের মতো ডিজাইন টোকেন!)' },
        { en: 'Architecture: BEM, layers, design systems', bn: 'আর্কিটেকচার: BEM, লেয়ার, ডিজাইন সিস্টেম' },
      ],
    },
  ],
  lessons: [cascadeCourtLesson, paintLedgerLesson, boxModelLesson, positionMapsLesson, flexboxLesson, gridLesson, responsiveEstateLesson, motionHallLesson, architectureLesson],
  reference: [
    {
      group: 'Box',
      methods: [
        {
          name: 'box-sizing',
          signature: 'box-sizing: content-box | border-box',
          params: { en: 'Which layers width/height include.', bn: 'width/height কোন স্তর পর্যন্ত গণে।' },
          returns: {
            en: 'border-box = declared size is the outer size (recommended).',
            bn: 'border-box = ঘোষিত মাপই বাইরের মাপ (সুপারিশকৃত)।',
          },
          example: '*, *::before, *::after {\n  box-sizing: border-box;\n}',
          mistake: { en: 'Fixing each element separately instead of the global reset.', bn: 'গ্লোবাল রিসেটের বদলে আলাদা আলাদা ঠিক করা।' },
          related: ['width', 'padding'],
        },
        {
          name: 'margin',
          signature: 'margin: <1–4 values> | auto',
          params: { en: 'top right bottom left; auto centers with a width.', bn: 'উপর ডান নিচ বাম; width-সহ auto কেন্দ্রে আনে।' },
          returns: { en: 'Outside space; vertical margins can collapse.', bn: 'বাইরের ফাঁক; উল্লম্ব মার্জিন collapse হতে পারে।' },
          example: 'margin: 0 auto;  /* center block */\nmargin-block: 2rem;',
          related: ['padding', 'gap'],
        },
      ],
    },
    {
      group: 'Flex',
      methods: [
        {
          name: 'justify-content',
          signature: 'justify-content: flex-start | center | space-between | …',
          params: { en: 'Distribution of free space on the MAIN axis.', bn: 'মূল অ্যাক্সিসে ফাঁকা জায়গার বণ্টন।' },
          returns: { en: 'Positions items as a group along main.', bn: 'আইটেমগুলোকে দল হিসেবে মূল অ্যাক্সিসে বসায়।' },
          example: 'display: flex;\njustify-content: space-between;',
          mistake: {
            en: 'Expecting it to work when there is no free space left.',
            bn: 'ফাঁকা জায়গা না থাকলেও কাজ করবে — এই আশা করা।',
          },
          related: ['align-items', 'gap'],
        },
        {
          name: 'align-items',
          signature: 'align-items: stretch | center | flex-start | …',
          params: { en: 'Placement on the CROSS axis.', bn: 'ক্রস অ্যাক্সিসে বসানো।' },
          returns: { en: 'Aligns items within the line; default stretch.', bn: 'লাইনে আইটেম সোজাসুজি করে; ডিফল্ট stretch।' },
          example: 'display: flex;\nalign-items: center;',
          related: ['justify-content', 'align-self'],
        },
        {
          name: 'gap',
          signature: 'gap: <row> <column>',
          params: { en: 'Space BETWEEN items only.', bn: 'শুধু আইটেমের মাঝের ফাঁক।' },
          returns: { en: 'Lane spacing that never leaks to edges.', bn: 'লেনের ফাঁক, প্রান্তে ছড়ায় না।' },
          example: 'display: flex;\ngap: 16px;',
          related: ['margin', 'justify-content'],
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Responsive Dashboard', bn: 'রেসপন্সিভ ড্যাশবোর্ড' },
      diff: 'intermediate',
      desc: {
        en: 'Sidebar + grid of stat cards; collapses to a single column on mobile.',
        bn: 'সাইডবার + স্ট্যাট কার্ড গ্রিড; মোবাইলে এক কলামে সঙ্কুচিত।',
      },
    },
    {
      title: { en: 'Marketing Landing Page', bn: 'মার্কেটিং ল্যান্ডিং পেজ' },
      diff: 'beginner',
      desc: {
        en: 'Hero, features, pricing — flexbox throughout, one breakpoint.',
        bn: 'হিরো, ফিচার, প্রাইসিং — সর্বত্র ফ্লেক্সবক্স, একটি ব্রেকপয়েন্ট।',
      },
    },
    {
      title: { en: 'Mini Design System', bn: 'মিনি ডিজাইন সিস্টেম' },
      diff: 'advanced',
      desc: {
        en: 'Token variables + themed components + dark mode, like this platform.',
        bn: 'টোকেন ভেরিয়েবল + থিমড কম্পোনেন্ট + ডার্ক মোড — ঠিক এই প্ল্যাটফর্মের মতো।',
      },
    },
  ],
  bestPractices: [
    { en: 'Start with the border-box reset, always.', bn: 'সবসময় border-box রিসেট দিয়ে শুরু।' },
    { en: 'Layout with flex/grid; never floats for page structure.', bn: 'লেআউটে flex/grid; পেজ কাঠামোতে ফ্লোট নয়।' },
    { en: 'Use rem for type, px for borders, % and fr for tracks.', bn: 'টাইপে rem, বর্ডারে px, ট্র্যাকে % ও fr।' },
    { en: 'Mobile-first: base styles for small, min-width queries to grow.', bn: 'মোবাইল-ফার্স্ট: ছোটের জন্য বেস, বড় করতে min-width কোয়েরি।' },
    { en: 'Respect prefers-reduced-motion for animations.', bn: 'অ্যানিমেশনে prefers-reduced-motion মানুন।' },
    { en: 'Name things by purpose (.card), not by looks (.blue-box).', bn: 'চেহারা (.blue-box) নয়, উদ্দেশ্য (.card) দিয়ে নাম দিন।' },
  ],
  interview: [
    {
      q: { en: 'Explain the box model in 30 seconds.', bn: '৩০ সেকেন্ডে বক্স মডেল ব্যাখ্যা করুন।' },
      a: {
        en: 'Every element is content wrapped by padding, then border, then margin. Width applies to content by default; border-box makes it include padding+border.',
        bn: 'প্রতিটি এলিমেন্ট হলো কনটেন্ট, চারপাশে প্যাডিং, তারপর বর্ডার, তারপর মার্জিন। ডিফল্টে width কনটেন্টের; border-box-এ প্যাডিং+বর্ডারসহ।',
      },
    },
    {
      q: { en: 'justify-content vs align-items?', bn: 'justify-content বনাম align-items?' },
      a: {
        en: 'justify-content distributes free space on the MAIN axis; align-items positions items on the CROSS axis. Both rotate with flex-direction.',
        bn: 'justify-content মূল অ্যাক্সিসে ফাঁকা জায়গা ভাগ করে; align-items ক্রস অ্যাক্সিসে বসায়। flex-direction-এর সাথে দুটোই ঘোরে।',
      },
    },
    {
      q: { en: 'What is margin collapsing?', bn: 'মার্জিন collapsing কী?' },
      a: {
        en: 'Adjacent vertical margins merge into the larger one instead of adding up. Horizontal margins and flex/grid item margins never collapse.',
        bn: 'পাশাপাশি উল্লম্ব মার্জিন যোগ না হয়ে বড়টিতে মিলে যায়। আড়াআড়ি ও flex/grid আইটেমের মার্জিন collapse হয় না।',
      },
    },
    {
      q: { en: 'Specificity: which wins, .btn .active or #save?', bn: 'স্পেসিফিসিটি: কে জেতে, .btn .active না #save?' },
      a: {
        en: '#save — an ID outweighs any number of classes. Keep specificity flat; avoid IDs in selectors.',
        bn: '#save — একটি ID যেকোনো সংখ্যক ক্লাসকে হারায়। স্পেসিফিসিটি সমতল রাখুন; সিলেক্টরে ID এড়িয়ে চলুন।',
      },
    },
  ],
  realWorld: [
    { en: 'Every framework still compiles down to these declarations.', bn: 'প্রতিটি ফ্রেমওয়ার্ক শেষ পর্যন্ত এই ঘোষণাগুলোতেই কম্পাইল হয়।' },
    { en: 'Print stylesheets: the same box model paginates invoices and tickets.', bn: 'প্রিন্ট স্টাইলশিট: একই বক্স মডেল ইনভয়েস ও টিকিট ছাপায়।' },
    { en: 'Email CSS is 2006-era CSS — box model knowledge is survival there.', bn: 'ইমেইল CSS হলো ২০০৬-যুগের CSS — বক্স মডেল জানা সেখানে টিকে থাকার শর্ত।' },
    { en: 'DevTools’ Computed panel is this lesson, live on any site.', bn: 'DevTools-এর Computed প্যানেল এই লেসনই — যেকোনো সাইটে লাইভ।' },
  ],
};
