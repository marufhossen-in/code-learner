import type { Hub } from '../../lib/types';

import { swatchCounterLesson } from './lessons/the-swatch-counter';
import { masterPatternBookLesson } from './lessons/the-master-pattern-book';
import { fittingRoomsLesson } from './lessons/the-fitting-rooms';
import { variantBazaarLesson } from './lessons/the-variant-bazaar';
import { embroideryFloorLesson } from './lessons/the-embroidery-floor';
import { typographyParlorLesson } from './lessons/the-typography-parlor';
import { censusTapestryLesson } from './lessons/the-census-tapestry';
import { houseDressRehearsalLesson } from './lessons/the-house-dress-rehearsal';

export const tailwindHub: Hub = {
  slug: 'tailwind',
  name: 'Tailwind CSS',
  icon: '🌬️',
  tagline: {
    en: 'The atelier where every stitch is catalogued: compose pages from numbered swatches, fit them per room, and let the auditors burn every thread you never wore.',
    bn: 'সেই আঁটেলিয়ে, যেখানে প্রতি সেলাই সুচিবদ্ধ: সংখ্যাঙ্কিত সুয়াচ থেকে পৃষ্ঠা যোগ করুন, কক্ষে-কক্ষে ফিট করান, আর নিরীক্ষকদের পোড়াতে দিন প্রতিটি সুতো, যা আপনি কখনোই পরেননি।',
  },
  intro: {
    en: 'Tailwind CSS is the utility-first wager: stop writing bespoke pattern papers (semantic CSS files that rot) and start composing from a FIXED, versioned catalogue of single-purpose stitches. THE SWATCH COUNTER teaches the grammar itself — a class is one property at one value, composition replaces selectors, and specificity wars die by census (lesson 1). THE MASTER PATTERN BOOK owns the scale: theme as design tokens — color scales, spacing rhythm, fonts as signed fabric (lesson 2). THE FITTING ROOMS make one garment fit every body: mobile-first breakpoints sm/md/lg/xl as resize commissions that never fight (lesson 3). THE STATE FITTINGS dress the interaction: hover/focus/active rings, group and peer tailoring, dark: evening wardrobe (lesson 4). THE EMBROIDERY FLOOR extracts components honestly: @layer base/components/utilities, @apply as machine-stitch, and the discipline of NOT extracting too early (lesson 5). THE SPECIALISTS REGISTRY hires help: official plugins (typography, forms, aspect-ratio, container queries), arbitrary values as hand-measure, writing your own plugin (lesson 6). THE AUDIT VAULT runs the census: content globs, purge arithmetic, safelists, bundle budgets the CFO can read (lesson 7). THE BESPOKE HOUSE runs the whole atelier as a design system: tokens as law, plugins as house rules, docs as stitched spec (lesson 8). Beginner to expert: you never fight the framework — you fit it.',
    bn: 'Tailwind CSS হলো ইউটিলিটি-ফার্স্ট বাজি: বিশেষ-প্যাটার্ন-কাগজ লেখা বন্ধ করুন (পচে-যাওয়া সিম্যান্টিক-CSS-ফাইল), আর এক নির্দিষ্ট, সংস্করণিত সুচিপত্র থেকে এক-কাজের সেলাই যোগ করা শুরু করুন। সুয়াচ-কাউন্টার ব্যাকরণটিই শেখায় — একটি ক্লাস মানে একটি মানে-একটি প্রপার্টি, সিলেক্টরকে প্রতিস্থাপন করে যোগ, আর স্পেসিফিসিটি-যুদ্ধ মরে জনশুমারিতে (লেসন ১)। মাস্টার-প্যাটার্ন-বই মালিক স্কেলের: ডিজাইন-টোকেন হিসেবে থিম — রং-স্কেল, স্পেসিং-ছন্দ, স্বাক্ষরকৃত-কাপড় হিসেবে ফন্ট (লেসন ২)। ফিটিং-কক্ষেগুলো এক পোশাক ফিট করায় প্রতি শরীরে: মোবাইল-ফার্স্ট ব্রেকপয়েন্ট sm/md/lg/xl, রিসাইজ-কমিশন হিসেবে, যা কখনোই লড়ে না (লেসন ৩)। অবস্থা-ফিটিং ইন্টার‌্যাকশন পোষায়: hover/focus/active রিং, group ও peer টেলারিং, dark: সন্ধ্যা-পোশাক (লেসন ৪)। এমব্রয়ডারি-তলা কম্পোনেন্ট সৎভাবে বের করে: @layer base/components/utilities, যন্ত্র-সেলাই হিসেবে @apply, আর তাড়াতাড়ি-না-বের-করার শৃঙ্খলা (লেসন ৫)। বিশেষজ্ঞ-রেজিস্ট্রি সাহায্য নেয়: অফিসিয়াল প্লাগিন (টাইপোগ্রাফি, ফর্ম, অ্যাসপেক্ট-রেশিও, কন্টেইনার-কোয়েরি), হাতে-মাপ হিসেবে আরবিট্রারি-মান, নিজস্ব প্লাগিন লেখা (লেসন ৬)। নিরীক্ষণ-তিজোরি জনশুমারি চালায়: content-গ্লব, পার্জ-পাটিগণিত, সেফলিস্ট, যে বান্ডিল-বাজেট CFO পড়তে পারে (লেসন ৭)। বিশেষ-ঘর পুরো আঁটেলিয়ে চালায় ডিজাইন-সিস্টেম হিসেবে: আইন হিসেবে টোকেন, ঘরের-নিয়ম হিসেবে প্লাগিন, সেলাইকৃত-স্পেসিফিকেশন হিসেবে ডক (লেসন ৮)। নবাগত থেকে বিশেষজ্ঞ: আপনি ফ্রেমওয়ার্কের সঙ্গে লড়বেন না কখনোই — ফিট করাবেন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The counter', bn: 'ধাপ ১ — কাউন্টার' },
      items: [
        { en: 'Utility-first: composition over selectors (lesson 1)', bn: 'ইউটিলিটি-ফার্স্ট: সিলেক্টরের বদলে যোগ (লেসন ১)' },
        { en: 'Class anatomy: one property, one value, signed by scale', bn: 'ক্লাস-শরীরতত্ত্ব: এক প্রপার্টি, এক মান, স্কেলে-স্বাক্ষরিত' },
        { en: 'Specificity wars die by census, not by cleverness', bn: 'স্পেসিফিসিটি-যুদ্ধ মরে জনশুমারিতে, চালাকিতে নয়' },
        { en: 'The fixed catalogue as the anti-rot guarantee', bn: 'পচন-বিরোধী নিশ্চয়তা হিসেবে নির্দিষ্ট সুচিপত্র' },
      ],
    },
    {
      title: { en: 'Stage 2 — The pattern book', bn: 'ধাপ ২ — প্যাটার্ন-বই' },
      items: [
        { en: 'theme as tokens: colors, spacing, fonts (lesson 2)', bn: 'টোকেন হিসেবে theme: রং, স্পেসিং, ফন্ট (লেসন ২)' },
        { en: 'extend vs replace: bespoke without civil war', bn: 'extend বনাম replace: গৃহযুদ্ধ ছাড়া বিশেষায়ন' },
        { en: 'Fitting rooms: sm/md/lg/xl mobile-first (lesson 3)', bn: 'ফিটিং-কক্ষ: sm/md/lg/xl মোবাইল-ফার্স্ট (লেসন ৩)' },
        { en: 'State fittings: hover, focus, dark, group, peer (lesson 4)', bn: 'অবস্থা-ফিটিং: hover, focus, dark, group, peer (লেসন ৪)' },
      ],
    },
    {
      title: { en: 'Stage 3 — The floor', bn: 'ধাপ ৩ — তলা' },
      items: [
        { en: '@layer discipline: base, components, utilities (lesson 5)', bn: '@layer-শৃঙ্খলা: base, components, utilities (লেসন ৫)' },
        { en: '@apply as machine-stitch, extraction as last resort', bn: 'যন্ত্র-সেলাইরূপে @apply, শেষ-উপায়রূপে এক্সট্রাকশন' },
        { en: 'Specialists: official plugins and your own (lesson 6)', bn: 'বিশেষজ্ঞ: অফিসিয়াল প্লাগিন আর নিজেরটা (লেসন ৬)' },
        { en: 'Arbitrary values: the hand-measure that audits itself', bn: 'আরবিট্রারি-মান: স্বয়ং-নিরীক্ষিত হাতে-মাপ' },
      ],
    },
    {
      title: { en: 'Stage 4 — The vault & the house', bn: 'ধাপ ৪ — তিজোরি ও ঘর' },
      items: [
        { en: 'content globs and purge arithmetic (lesson 7)', bn: 'content-গ্লব ও পার্জ-পাটিগণিত (লেসন ৭)' },
        { en: 'Safelists for dynamic stitching, bundle budgets', bn: 'গতিশীল-সেলাইয়ে সেফলিস্ট, বান্ডিল-বাজেট' },
        { en: 'Tokens as law: the bespoke house pattern (lesson 8)', bn: 'আইন হিসেবে টোকেন: বিশেষ-ঘর-ধরন (লেসন ৮)' },
        { en: 'Plugin authorship and house rules as code', bn: 'প্লাগিন-লেখনি ও কোডে-গৃহনীতি' },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'AtelierShelf: the four-room storefront', bn: 'আঁটেলিয়েতাক: চার-কক্ষের দোকান-সম্মুখ' },
      brief: { en: 'Build a small marketing page using ONLY the swatch grammar — no bespoke CSS files, no inline styles: hero with clamped typography, a three-card feature row that collapses to one column in the smallest fitting room, and a sticky header. Deliverables: (a) every breakpoint change visible to an auditor reading the class list aloud, (b) zero custom media queries, (c) the production bundle under 10KB of generated CSS on the first audit. The acceptance gate: print the content glob and the generated class census — every class on the wall must appear on the page.', bn: 'কেবল সুয়াচ-ব্যাকরণে একটি ছোট মার্কেটিং-পৃষ্ঠা বানান — বিশেষ-CSS-ফাইল নয়, ইনলাইন-স্টাইল নয়: ক্ল্যাম্পকৃত টাইপোগ্রাফিসহ হিরো, তিন-কার্ডের ফিচার-সারি, যা ক্ষুদ্রতম ফিটিং-কক্ষে এক কলামে নেমে আসে, আর একটি স্টিকি হেডার। ডেলিভারেবল: (ক) প্রতি ব্রেকপয়েন্ট-বদল এমন নিরীক্ষকের কাছে দৃশ্যমান, যে ক্লাস-তালিকা জোরে পড়ছে, (খ) শূন্য কাস্টম মিডিয়া-কোয়েরি, (গ) প্রথম নিরীক্ষণেই তৈরি-CSS 10KB-এর নিচে। গ্রহণযোগ্যতা-ফাটক: content-গ্লব আর তৈরি-ক্লাস-জনশুমারি ছাপুন — দেয়ালের প্রতি ক্লাস পৃষ্ঠায় থাকতে হবে।' },
      difficulty: 'beginner',
    },
    {
      title: { en: 'TokenCourt: brand sovereignty end-to-end', bn: 'টোকেনকোর্ট: প্রান্তে-থেকে-প্রান্তে ব্র্যান্ড-সার্বভৌমত্ব' },
      brief: { en: 'Theme a SaaS dashboard from ONE pattern book: name five brand colors as tokens, extend the spacing scale with a 72r signature rhythm, plug in a custom font family, and assemble the entire dark mode evening wardrobe via dark: variants with class strategy. Then referee two civil wars: a teammate shipping an arbitrary-value color (hand-measure) where a token existed, and a withdrawn extraction (@apply) that broke a fitting room. Deliver the audit table: tokens count, tokens used, arbitrary escapes justified, purge percentage before and after.', bn: 'এক প্যাটার্ন-বই থেকে একটি SaaS ড্যাশবোর্ড থিম করুন: টোকেন হিসেবে পাঁচটি ব্র্যান্ড-রঙে নাম দিন, স্পেসিং-স্কেলে 72r-স্বাক্ষর-ছন্দ যোগ করুন, কাস্টম ফন্ট-পরিবার প্লাগ করুন, আর পুরো সন্ধ্যা-পোশাক dark: ভ্যারিয়েন্টে জোড়া দিন, class-কৌশলে। তারপর দুই গৃহযুদ্ধে রায় দিন: যে সতীর্থ হাতে-মাপ-রং (আরবিট্রারি) পাঠিয়েছে যেখানে টোকেন ছিল, আর একটি প্রত্যাহৃত এক্সট্রাকশন (@apply), যা একটি ফিটিং-কক্ষ ভেঙেছে। নিরীক্ষণ-টেবিল দিন: টোকেন-সংখ্যা, ব্যবহৃত-টোকেন, ন্যায্যকৃত-হাতে-মাপ-পলায়ন, আগে-পরে পার্জ-শতাংশ।' },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'HouseRules: the bespoke plugin atelier', bn: 'গৃহনিয়ম: বিশেষ প্লাগিন-আঁটেলিয়ে' },
      brief: { en: 'Author the house’s own plugin: a matchUtilities signature-stitch family (clamp-type-{min}-{max}), two component stitches (card-sheet, auditor-ring), and a base layer rule for selection color — shipped with typed defaults and one-line docs. Then run the full census: content globs audited, safelist reduced to regex with a comment naming who depends on it, budget table (dev vs prod CSS bytes) signed by the CFO role. Capstone gate: a new intern ships one section using ONLY house stitches and the catalogue — zero hand-measures, zero bespoke files.', bn: 'ঘরের নিজস্ব প্লাগিন রচনা করুন: একটি matchUtilities স্বাক্ষর-সেলাই-পরিবার (clamp-type-{min}-{max}), দুটি কম্পোনেন্ট-সেলাই (card-sheet, auditor-ring), আর সিলেকশন-রঙের জন্য বেস-স্তর-নিয়ম — টাইপকৃত ডিফল্ট আর এক-লাইনের ডকসহ। তারপর পূর্ণ জনশুমারি চালান: নিরীক্ষিত content-গ্লব, সেফলিস্ট রিজেক্সে সরু আকারে, মন্তব্যে বলা কে তার উপর নির্ভরশীল, বাজেট-টেবিল (dev বনাম prod CSS বাইট), CFO-ভূমিকায় স্বাক্ষরিত। চূড়ান্ত ফাটক: একজন নতুন ইন্টার্ন একটি সেকশন পাঠায়, ব্যবহার করে কেবল গৃহ-সেলাই ও সুচিপত্র — শূন্য হাতে-মাপ, শূন্য বিশেষ-ফাইল।' },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    { en: 'Compose at the counter, bespoke at the book: one-off styling belongs in swatches on the markup; system rules belong in theme tokens — never let a bespoke CSS file appear “temporarily”.', bn: 'কাউন্টারে যোগ, বইয়ে বিশেষায়ন: এককালীন স্টাইলিং মার্কআপের সুয়াচে থাকুক; সিস্টেম-নিয়ম থাকুক থিম-টোকেনে — একটি বিশেষ-CSS-ফাইল "অস্থায়ী" হিসেবে উদ্ভূত হতে দেবেন না কখনোই।' },
    { en: 'Fit mobile-first, enlarge by commission: unprefixed classes are the smallest fitting room; sm/md/lg are ordered commissions that never undo each other — the day two breakpoints fight, one of them was planning backwards.', bn: 'মোবাইল-আগে ফিট করান, কমিশনে বাড়ান: প্রিফিক্সহীন ক্লাস ক্ষুদ্রতম ফিটিং-কক্ষ; sm/md/lg ক্রমবদ্ধ-কমিশন, পরস্পর পূর্বাবস্থায় ফেরায় না কখনোই — দুই ব্রেকপয়েন্ট লড়ার দিন, একটির পরিকল্পনাই উল্টো ছিল।' },
    { en: 'Hand-measures audit themselves publicly: arbitrary values must answer “why is there no token for this?” in the same commit — five escapes in one file is a design-token missing, name it.', bn: 'হাতে-মাপ প্রকাশ্যে নিজেদের নিরীক্ষণ করে: আরবিট্রারি-মানকে একই কমিটে উত্তর দিতে হবে "এটির জন্য টোকেন নেই কেন" — এক ফাইলে পাঁচটি পলায়ন মানে একটিই ডিজাইন-টোকেন অনুপস্থিত, নাম দিন।' },
    { en: 'Extract only repeated tapestries: @apply is for components worn ten times (buttons, cards, badges), not for the second occurrence — premature extraction is bespoke CSS with extra steps.', bn: 'কেবল পুনরাবৃত্ত চিত্রপট বের করুন: @apply দশবার-পরা কম্পোনেন্টের (বোতাম, কার্ড, ব্যাজ), দ্বিতীয়-ঘটনার নয় — অকাল-এক্সট্রাকশন হলো অতিরিক্ত-ধাপসহ বিশেষ-CSS।' },
    { en: 'The census is law: content globs cover every file the shop ships, safelists name their dependents in comments, and the production bundle is budgeted like salary — purged, posted, audited.', bn: 'জনশুমারি আইন: content-গ্লব ঘরের-চালানকৃত প্রতি ফাইল ঘিরে, সেফলিস্ট মন্তব্যে তার নির্ভরশীলের নাম বলে, প্রোডাকশন-বান্ডিল বাজেটকৃত বেতনের মতো — পার্জকৃত, পোস্টকৃত, নিরীক্ষিত।' },
    { en: 'Evening wardrobe is a strategy, not a toggle: choose class-based dark: early, store the choice in one token-backed toggle, and test the night portrait of every screen it hangs on.', bn: 'সন্ধ্যা-পোশাক একটি কৌশল, টগল নয়: class-ভিত্তিক dark: আগেই বাছুন, পছন্দ রাখুন এক টোকেনসমর্থিত-টগলে, যে পর্দায় তা ঝুলবে প্রতিটির নৈশ-প্রতিকৃতি পরীক্ষা করুন।' },
  ],
  interview: [
    {
      q: { en: '“Utility-first CSS is just inline styles with extra steps.” Refute it with the catalogue arithmetic.', bn: '“ইউটিলিটি-ফার্স্ট CSS অতিরিক্ত-ধাপসহ ইনলাইন-স্টাইল মাত্র।” সুচিপত্র-পাটিগণিতে খণ্ডন করুন।' },
      a: { en: 'The arithmetic is three multiplications inline styles cannot do. (1) THE CATALOGUE: my classes address a FIXED scale — p-4 is always 16px, text-brand is always the signed token — so a wall that says p-4 in Dhaka and in a new hire’s diff means the same stitch; inline styles smuggle numbers, the catalogue publishes them. (2) THE VARIANTS: inline styles cannot express hover:, focus-visible:, md:, or dark: — the swatch grammar carries fitting rooms and evening wardrobes as first-class prefixes, audited in the same census. (3) THE BUNDLE: ten thousand repetitions of p-4 cost p-4 ONCE in the stylesheet; ten thousand style="padding:16px" cost ten thousand declarations — the purge keeper makes the stylesheet proportional to the breadth of the catalogue used, not to the size of the app. Bonus proof: component stories (Storybook, tests) inherit identical grammar — inline styles leak into every string comparison. The honest verdict: utility-first is inline-style VELOCITY with system invariants — the difference is the catalogue, and the catalogue is the entire argument.', bn: 'পাটিগণিত তিন গুণণ, ইনলাইন-স্টাইল যা কখনোই পারে না। (1) সুচিপত্র: আমার ক্লাস নির্দিষ্ট-স্কেলকে সম্বোধন করে — p-4 সবসময় ১৬px, text-brand সবসময় স্বাক্ষরকৃত-টোকেন — যে দেয়াল ঢাকায় p-4 বলে আর নতুন-নিয়োগের ডিফেও, একই সেলাই বোঝায়; ইনলাইন-স্টাইল সংখ্যা পাচার করে, সুচিপত্র তা প্রকাশ করে। (2) ভ্যারিয়েন্ট: ইনলাইন-স্টাইল hover:, focus-visible:, md:, dark: প্রকাশ করতে পারে না — সুয়াচ-ব্যাকরণ ফিটিং-কক্ষ-ও-সন্ধ্যা-পোশাক বহন করে প্রথম-শ্রেণীর-প্রিফিক্সরূপে, একই জনশুমারিতে নিরীক্ষিত। (3) বান্ডিল: p-4-এর দশ-হাজার পুনরাবৃত্তি স্টাইলশিটে মূল্য দেয় একবার; দশ-হাজার style="padding:16px" শোধ দেয় দশ-হাজার ঘোষণা — পার্জ-রক্ষী স্টাইলশিট রাখে ব্যবহৃত-সুচিপত্রের বিস্তারের-সমানুপাতিক, অ্যাপের আকারের নয়। পুরস্কার-প্রমাণ: কম্পোনেন্ট-স্টোরি অভিন্ন ব্যাকরণ উত্তরাধিকার পায় — ইনলাইন-স্টাইল ফাঁস হয় প্রতি স্ট্রিং-তুলনায়। সৎ-রায়: ইউটিলিটি-ফার্স্ট হলো সিস্টেম-নিয়তিসহ ইনলাইন-স্টাইল-বেগ — পার্থক্য সুচিপত্র, আর সুচিপত্রই সমগ্র যুক্তি।' },
    },
    {
      q: { en: 'A teammate proposes extracting a @apply component after the second usage. Your ruling?', bn: 'একজন সতীর্থ দ্বিতীয়-ব্যবহারের পর @apply-কম্পোনেন্ট বের করতে চান। আপনার রায়?' },
      a: { en: 'Twice is evidence, not tapestry. My ruling has three clauses. (1) COUNT THE COMMISSIONS, NOT THE OCCURRENCES: extract at ~10 wears across ~3 walls, or when the garment acquires a NAME in stakeholder speech (\"the auditor ring\") — names are certification. (2) THE EXTRACTION PRICE: every @apply component is a file every reader must open to read the markup — the markup stops being self-auditing at extraction, which is the entire reason we came to the atelier. (3) THE HONEST PATH: first wear is swatch; second wear is swatch with a comment if the compose is long; third wear starts a convention (template partial, snippet, or a house plugin once it earns one); tenth wear gets the machine-stitch. And the escape clause I always offer: if the SECOND usage already differs by one class, the garment is telling you it is a PATTERN not a PRODUCT — patterns live in the pattern book (tokens + docs), products live in the embroidery floor.', bn: 'দুইবার প্রমাণ, চিত্রপট নয়। আমার রায়ের তিন ধারা। (1) কমিশন গোনুন, ঘটনা নয়: ~১০ পরণে-৩ দেয়ালে বের করুন, বা বস্তু স্টেকহোল্ডার-ভাষায় নাম পেলে ("নিরীক্ষক-রিং") — নাম হলো প্রত্যয়ন। (2) এক্সট্রাকশন-মূল্য: প্রতি @apply-কম্পোনেন্ট এমন ফাইল, যা প্রতি পাঠককে মার্কআপ পড়তে খুলতে হয় — এক্সট্রাকশনে মার্কআপ স্বয়ং-নিরীক্ষাযোগ্য থাকা ছাড়ে, যা-ই আমরা আঁটেলিয়েতে এসেছিলাম বলে। (3) সৎ-পথ: প্রথম পরণ সুয়াচ; দ্বিতীয় পরণ মন্তব্যসহ সুয়াচ, যোগ দীর্ঘ হলে; তৃতীয় পরণ কনভেনশন শুরু করে (টেমপ্লেট-খণ্ড, স্নিপেট, নয় ঘরের-প্লাগিন, উপার্জন করলে); দশম পরণ যন্ত্র-সেলাই পায়। আর পলায়ন-ধারা, যা সবসময় অফার করি: দ্বিতীয় ব্যবহারই একটি ক্লাস ভিন্ন হলে, বস্তু বলছে তা প্যাটার্ন, পণ্য নয় — প্যাটার্ন থাকে প্যাটার্ন-বইয়ে (টোকেন + ডক), পণ্য এমব্রয়ডারি-তলায়।' },
    },
    {
      q: { en: 'How do you keep a large Tailwind codebase consistent across ten contributors?', bn: 'দশজন অবদানকারী জুড়ে বড় Tailwind-কোডবেস সামঞ্জস্যপূর্ণ রাখবেন কীভাবে?' },
      a: { en: 'Three instruments, all cheap, none optional. (1) TOKENS AS LAW: every reusable decision is a theme entry with a name — a contributor may escape (arbitrary value) but the escape must justify itself in the same commit; five escapes in one area is a missing token, and the review names it. (2) AUTOMATED CENSUS IN CI: prettier-plugin-tailwindcss sorts the class strings (order is a reading protocol, diffs become legible), eslint flags banned patterns (our rules: no text-[ without a typography cause, no hardcoded hex ever, hand-measures max 3 per file un-justified). (3) THE HOUSE PAGE: one page in the app that wears EVERY token and EVERY house stitch — auditors read it, designers sign it, and visual regression tests hang on it; when ten contributors dispute a change, the house page is the neutral referee. Process closes the triangle: tokens written in the book, stitches worn on the house page, escapes forced to testify in reviews — that is the entire governance model, and it scales past fifty contributors with no meetings.', bn: 'তিন যন্ত্র, সবই সস্তা, কোনোটিই ঐচ্ছিক নয়। (1) আইন হিসেবে টোকেন: প্রতি পুনর্ব্যবহার্য সিদ্ধান্ত নামকৃত থিম-এন্ট্রি — অবদানকারী পালাতে পারে (আরবিট্রারি-মান) কিন্তু পলায়নকে একই কমিটে ন্যায্যতা দিতে হবে; এক অঞ্চলে পাঁচ পলায়ন মানে অনুপস্থিত-টোকেন, রিভিউ তার নাম বলে। (2) CI-তে সয়ংক্রিয়-জনশুমারি: prettier-plugin-tailwindcss ক্লাস-স্ট্রিং সাজায় (ক্রম পাঠ-প্রোটোকল, ডিফ পাঠযোগ্য হয়), eslint নিষিদ্ধ-ধরন পতাকাঙ্কিত করে (আমাদের নিয়ম: টাইপোগ্রাফি-কারণ ছাড়া text-[ নয়, হার্ডকোডেড হেক্স কখনোই নয়, অ-ন্যায্যকৃত ফাইলপ্রতি সর্বোচ্চ ৩ হাতে-মাপ)। (3) গৃহ-পৃষ্ঠা: অ্যাপের এক পৃষ্ঠা, যা প্রতি টোকেন ও প্রতি গৃহ-সেলাই পরে — নিরীক্ষক তা পড়ে, ডিজাইনার তাতে সই করে, ভিজ্যুয়াল-রিগ্রেশন-টেস্ট তাতে ঝুলে; দশ অবদানকারী কোনো বদল নিয়ে দ্বিমত পোষণ করলে, গৃহ-পৃষ্ঠা নিরপেক্ষ রেফারি। প্রক্রিয়া ত্রিভুজটি পূর্ণ করে: বইয়ে-লেখা টোকেন, গৃহ-পৃষ্ঠায়-পরা সেলাই, রিভিউতে সাক্ষ্য দিতে-বাধ্য পলায়ন — এই পুরো শাসন-মডেল, পঞ্চাশ-অবদানকারী ছাড়িয়ে মিটিংহীন স্কেল করে।' },
    },
    {
      q: { en: 'Design says “make it look EXACTLY like the Figma mock, which uses a 13px font.” What do you do?', bn: 'ডিজাইন বলছে “Figma-মকের হুবহু দেখাও, যা ১৩px-ফন্ট ব্যবহার করে।” আপনি কী করবেন?' },
      a: { en: 'I open the pattern book, not the hand-measure drawer. First question: is 13px a garment or a TOKEN-missing? If the Figma uses 13px in five places, the typography scale is missing a step — the ruling is extend the scale (text-footnote: 13px with its line-height and letter-spacing as one signed token), and the design system now owns this decision for the entire future, including fitting rooms and evening wardrobe. If it is truly one worn-once ornament, one hand-measure text-[13px] with a comment naming the ornament is lawful — I have bought speed, paid one audit line. What I never do: ship 13px silently, or worse, “approximate” with 12px or 14px and hope nobody measures. The atelier’s whole grammar is an answer to this exact meeting: bespoke-looking UI with catalogue-grade consistency, where every exception must testify in writing. And the follow-up conversation with design is always the same, and always productive: “can 13px become a named step? then governing your future exemptions just got free.”', bn: 'আমি প্যাটার্ন-বই খুলি, হাতে-মাপ-ড্রয়ার নয়। প্রথম প্রশ্ন: 13px কি পোশাক নাকি টোকেন-ঘাটতি? Figma পাঁচ জায়গায় 13px ব্যবহার করলে, টাইপোগ্রাফি-স্কেল এক ধাপ হারিয়েছে — রায় স্কেল অতিরিক্ত করুন (text-footnote: 13px, তার লাইন-হাইট-ও-লেটার-স্পেসিংসহ এক স্বাক্ষরকৃত-টোকেনরূপে), ডিজাইন-সিস্টেম এখন পুরো ভবিষ্যতের জন্য এই সিদ্ধান্তের মালিক, ফিটিং-কক্ষ-ও-সন্ধ্যা-পোশাক সমেত। সত্যিকারে একবার-পরা অলংকার হলে, অলংকারের নামকরণকৃত-মন্তব্যসহ একটি হাতে-মাপ text-[13px] বৈধ — গতি কিনেছি, এক নিরীক্ষণ-লাইন মূল্য দিয়েছি। যা কখনোই করি না: নীরবে 13px পাঠানো, বা এরও খারাপ, 12px/14px দিয়ে "আনুমানিক", আশায় কেউ মাপবে না। আঁটেলিয়ের সমগ্র ব্যাকরণ হুবহু এই সভার উত্তর: সুচিপত্র-গ্রেড-সামঞ্জস্যে বিশেষ-দেখতে UI, যেখানে প্রতি ব্যতিক্রমকে লিখিতে সাক্ষ্য দিতে হয়। আর ডিজাইনের সঙ্গে পরবর্তী-কথোপকথন সবসময় একই ও ফলপ্রসূ: "13px কি নামকৃত-ধাপ হতে পারে? তাহলে আপনার ভবিষ্যৎ-ছাড় শাসন করা হলো বিনামূল্যে।"' },
    },
  ],
  realWorld: [
    { en: 'Design systems at scale: tokens govern multi-brand palettes, plugins encode house rules, the audit vault keeps production CSS under payroll-grade budgets.', bn: 'স্কেলে ডিজাইন-সিস্টেম: টোকেন বহু-ব্র্যান্ড-প্যালেট শাসন করে, প্লাগিন গৃহনীতি কোড করে, নিরীক্ষণ-তিজোরি প্রোডাকশন-CSS রাখে বেতন-গ্রেড বাজেটে।' },
    { en: 'SaaS dashboards and admin surfaces: fitting rooms and state fittings carry dense, responsive, role-heavy screens without a single civil war over specificity.', bn: 'SaaS ড্যাশবোর্ড-ও-অ্যাডমিন-পৃষ্ঠা: ফিটিং-কক্ষ-ও-অবস্থা-ফিটিং ঘন, প্রতিক্রিয়াশীল, ভূমিকাভারী পর্দা বহন করে, স্পেসিফিসিটি নিয়ে একটিও গৃহযুদ্ধ ছাড়া।' },
    { en: 'Marketing sites with designers-in-repo: the catalogue vocabulary lets designers write final UI in tickets — the markup is the spec, the site is the signature.', bn: 'রেপোতে-ডিজাইনারসহ মার্কেটিং-সাইট: সুচিপত্র-শব্দভাণ্ডার ডিজাইনারকে টিকিটেই চূড়ান্ত-UI লিখতে দেয় — মার্কআপই স্পেসিফিকেশন, সাইটই স্বাক্ষর।' },
    { en: 'Component libraries and Storybooks: house plugins publish signature stitches; consumers compose, never re-cut — the library’s census is published like an API.', bn: 'কম্পোনেন্ট-লাইব্রেরি-ও-স্টোরিবুক: গৃহ-প্লাগিন স্বাক্ষর-সেলাই প্রকাশ করে; ভোক্তারা যোগ করে, পুনঃকাটে না কখনোই — লাইব্রেরির জনশুমারি API-এর মতো প্রকাশিত।' },
    { en: 'Dark-mode products: evening wardrobe as a strategy-level decision — class strategy, token-backed toggles, and night portraits in the regression suite.', bn: 'ডার্ক-মোড-পণ্য: কৌশল-স্তরের সিদ্ধানরূপে সন্ধ্যা-পোশাক — class-কৌশল, টোকেনসমর্থিত-টগল, রিগ্রেশন-স্যুটে নৈশ-প্রতিকৃতি।' },
  ],
  lessons: [swatchCounterLesson, masterPatternBookLesson, fittingRoomsLesson, variantBazaarLesson, embroideryFloorLesson, typographyParlorLesson, censusTapestryLesson, houseDressRehearsalLesson],
  references: [],
};
