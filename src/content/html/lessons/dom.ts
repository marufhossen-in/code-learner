import type { Lesson } from '../../../lib/types';

export const domLesson: Lesson = {
  slug: 'dom-essentials',
  tech: 'html',
  title: {
    en: 'HTML & the DOM',
    bn: 'সার্ভারের টেক্সট কীভাবে ব্রাউজারে জীবন্ত অবজেক্ট-ট্রি হয়ে ওঠে — HTML'
  },
  summary: {
    en: 'How text on a server becomes a living tree of objects in the browser — the foundation under every framework you will ever use.',
    bn: 'সার্ভারের টেক্সট কীভাবে ব্রাউজারে জীবন্ত অবজেক্ট-ট্রি হয়ে ওঠে — আপনার ব্যবহার করা প্রতিটি ফ্রেমওয়ার্কের ভিত্তি।',
  },
  minutes: 15,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — What is the DOM?', bn: 'WHAT — DOM কী?' },
    },
    {
      type: 'para',
      text: {
        en: 'HTML is just text — a string of characters sitting in a .html file or travelling over the network. The DOM (Document Object Model) is what the browser builds from that text: a live tree of objects that JavaScript can read and change. Change the DOM, and the page visually updates. HTML is the blueprint; the DOM is the building.',
        bn: 'HTML শুধুই টেক্সট — একটি .html ফাইলে পড়ে থাকা বা নেটওয়ার্ক দিয়ে ভ্রমণ করা অক্ষরের স্ট্রিং। DOM (Document Object Model) হলো সেই টেক্সট থেকে ব্রাউজারের তৈরি জিনিস: জীবন্ত অবজেক্টের একটি ট্রি, যা জাভাস্ক্রিপ্ট পড়তে ও বদলাতে পারে। DOM বদলালেই পেজ চোখের সামনে বদলে যায়। HTML হলো নকশা; DOM হলো ভবন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Node',
          def: {
            en: 'One member of the tree: element, text, comment, document.',
            bn: 'ট্রির একটি সদস্য: এলিমেন্ট, টেক্সট, কমেন্ট, ডকুমেন্ট।',
          },
        },
        {
          term: 'Element',
          def: {
            en: 'A node created by a tag (<p>, <div>…) with attributes and children.',
            bn: 'ট্যাগ দিয়ে তৈরি নোড (<p>, <div>…) — অ্যাট্রিবিউট ও চাইল্ডসহ।',
          },
        },
        {
          term: 'Semantic HTML',
          def: {
            en: 'Tags that describe MEANING (header, nav, article), not just looks.',
            bn: 'যেসব ট্যাগ শুধু চেহারা নয়, অর্থ বলে দেয় (header, nav, article)।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Why does it matter?', bn: 'WHY — এত গুরুত্বপূর্ণ কেন?' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'JavaScript can only touch the page THROUGH the DOM — every framework (React too) ultimately updates DOM nodes.',
          bn: 'জাভাস্ক্রিপ্ট পেজে হাত দিতে পারে কেবল DOM-এর মাধ্যমে — প্রতিটি ফ্রেমওয়ার্ক (React-ও) শেষ পর্যন্ত DOM নোডই আপডেট করে।',
        },
        {
          en: 'Screen readers announce the page from the DOM’s meaning — semantic tags decide what blind users hear.',
          bn: 'স্ক্রিন রিডার DOM-এর অর্থ থেকে পেজ পাঠ করে — দৃষ্টিপ্রতিবন্ধী ব্যবহারকারী কী শুনবেন তা ঠিক করে সিমান্টিক ট্যাগ।',
        },
        {
          en: 'Search engines rank structure they can understand.',
          bn: 'সার্চ ইঞ্জিন এমন কাঠামোকে এগিয়ে রাখে যা সে বোঝে।',
        },
        {
          en: 'Every layout, event and animation you will ever build sits on these nodes.',
          bn: 'আপনার বানানো প্রতিটি লেআউট, ইভেন্ট ও অ্যানিমেশন এই নোডগুলোর উপরই দাঁড়িয়ে।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — A semantic page', bn: 'HOW — একটি সিমান্টিক পেজ' },
    },
    {
      type: 'code',
      lang: 'html',
      code: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>My first page</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
    </header>

    <main>
      <article>
        <h1>Why semantic tags win</h1>
        <p>They give <strong>meaning</strong> to structure.</p>
        <img src="cat.jpg" alt="A sleeping orange cat" />
      </article>
    </main>

    <footer>© 2026</footer>
  </body>
</html>`,
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNAL — Text becomes a tree', bn: 'INTERNAL — টেক্সট থেকে ট্রি' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: 'Bytes → characters → tokens', bn: 'বাইট → ক্যারেক্টার → টোকেন' },
          text: {
            en: 'The network delivers bytes. The charset turns them into characters; the tokenizer cuts them into tokens: StartTag(p), Attribute(id), Text, EndTag(p)…',
            bn: 'নেটওয়ার্ক থেকে আসে বাইট। charset সেগুলোকে অক্ষরে বদলায়; টোকেনাইজার টোকেনে কাটে: StartTag(p), Attribute(id), Text, EndTag(p)…',
          },
        },
        {
          title: { en: 'Tokens → nodes → tree', bn: 'টোকেন → নোড → ট্রি' },
          text: {
            en: 'The tree builder pushes elements onto a stack of open elements. Mis-nested HTML (<b><i></b></i>) is silently REPAIRED here — the DOM you inspect is the fixed version.',
            bn: 'ট্রি বিল্ডার এলিমেন্টগুলো খোলা এলিমেন্টের স্ট্যাকে ঢোকায়। ভুল নেস্টিং (<b><i></b></i>) এখানেই চুপচাপ ঠিক হয়ে যায় — inspect-এ দেখা DOM হলো সেই সংশোধিত সংস্করণ।',
          },
        },
        {
          title: { en: 'Incremental rendering', bn: 'ক্রমবর্ধমান রেন্ডারিং' },
          text: {
            en: 'Parsing happens as data arrives — that is why a page can appear before it finishes downloading.',
            bn: 'ডেটা আসতেই পার্সিং হয় — ডাউনলোড শেষ হওয়ার আগেই পেজ দেখা যায় এই কারণে।',
          },
        },
        {
          title: { en: 'Scripts can block', bn: 'স্ক্রিপ্ট আটকাতে পারে' },
          text: {
            en: 'A classic <script> PAUSES HTML parsing (the script might document.write). defer/async exist precisely to fix this.',
            bn: 'সাধারণ <script> HTML পার্সিং থামিয়ে দেয় (script document.write করতে পারে)। defer/async ঠিক এটাই ঠিক করতে এসেছে।',
          },
        },
      ],
    },
    {
      type: 'visual',
      id: 'pipeline',
    },
    {
      type: 'heading',
      id: 'code',
      text: { en: 'CODE — Div soup vs structure', bn: 'CODE — div-সুপ বনাম কাঠামো' },
    },
    {
      type: 'code',
      lang: 'html',
      code: `<!-- BAD: "div soup" — the browser and screen readers learn nothing -->
<div class="header">
  <div class="nav"><div class="link">Home</div></div>
</div>
<div class="article">
  <div class="title">News</div>
  <div class="text">Something happened.</div>
</div>

<!-- GOOD: same look, but now it MEANS something -->
<header>
  <nav><a href="/">Home</a></nav>
</header>
<article>
  <h1>News</h1>
  <p>Something happened.</p>
</article>`,
    },
    {
      type: 'visual',
      id: 'dom-tree',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Same pixels, different universe', bn: 'RESULT — একই পিক্সেল, ভিন্ন জগত' },
    },
    {
      type: 'para',
      text: {
        en: 'Both versions can look identical to a sighted user. But the second creates an accessibility tree with landmarks (banner, navigation, main, article), gives keyboard users a working link, lets search engines extract the headline, and makes your CSS easier to target. The DOM is an API — write for its consumers, not just for eyes.',
        bn: 'দৃষ্টিসম্পন্ন ব্যবহারকারীর কাছে দুটো একই দেখাতে পারে। কিন্তু দ্বিতীয়টি বানায় অ্যাক্সেসিবিলিটি ট্রি — ল্যান্ডমার্কসহ (banner, navigation, main, article), কিবোর্ড ব্যবহারকারীদের দেয় কার্যকর লিংক, সার্চ ইঞ্জিনকে দেয় শিরোনাম, আর CSS-কে করে সহজ টার্গেটযোগ্য। DOM একটি API — শুধু চোখের জন্য নয়, তার ভোক্তাদের জন্য লিখুন।',
      },
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Mistakes that bite', bn: 'DEBUG — যেসব ভুল কামড়ায়' },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Missing alt text', bn: 'alt টেক্সট না দেওয়া' },
      text: {
        en: '<img> without alt is read as the FILENAME by screen readers and shows nothing when the image fails. Decorative image? Use alt="".',
        bn: 'alt ছাড়া <img> স্ক্রিন রিডার ফাইলের নাম পড়ে শোনায়, ছবি না এলে কিছুই দেখায় না। শুধু সাজসজ্জার ছবি? alt="" ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Div/span as fake buttons', bn: 'div/span দিয়ে নকল বাটন' },
      text: {
        en: 'A <div onclick> is not focusable, has no Enter/Space activation, and announces nothing. Use <button> — it is free accessibility.',
        bn: '<div onclick> ফোকাসযোগ্য নয়, Enter/Space-এ চলে না, কিছুই ঘোষণা করে না। <button> ব্যবহার করুন — ফ্রি অ্যাক্সেসিবিলিটি।',
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Block inside inline', bn: 'ইনলাইনের ভেতরে ব্লক' },
      text: {
        en: 'Putting <div> inside <p> is invalid — the parser will auto-close the <p> early and your layout breaks “randomly”. Inspect the DOM: it is the truth, your source is not.',
        bn: '<p>-র ভেতরে <div> অবৈধ — পার্সার <p> আগেই বন্ধ করে দেবে আর লেআউট “হঠাৎ” ভেঙে যাবে। DOM inspect করুন: সেটিই সত্য, সোর্স কোড নয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Where this pays rent', bn: 'REAL WORLD — যেখানে এটি কাজে লাগে' },
    },
    {
      type: 'list',
      items: [
        {
          en: 'React’s Virtual DOM is an optimization LAYER ABOVE this — the browser still receives real DOM updates.',
          bn: 'React-এর Virtual DOM এর উপরের অপটিমাইজেশন স্তর — ব্রাউজার শেষ পর্যন্ত আসল DOM আপডেটই পায়।',
        },
        {
          en: 'DevTools “Elements” tab IS the DOM — debugging here beats staring at source.',
          bn: 'DevTools-এর “Elements” ট্যাবই DOM — সোর্স তাকিয়ে থাকার চেয়ে এখানে ডিবাগ করা ভালো।',
        },
        {
          en: 'SEO: Google renders your DOM; landmark structure feeds featured snippets.',
          bn: 'SEO: Google আপনার DOM-ই রেন্ডার করে; ল্যান্ডমার্ক কাঠামো ফিচার্ড স্নিপেট খাওয়ায়।',
        },
        {
          en: 'Error trackers record “where in the DOM” a broken selector pointed.',
          bn: 'এরর ট্র্যাকার রেকর্ড করে ভাঙা সিলেক্টর DOM-এর কোথায় নির্দেশ করছিল।',
        },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Continue', bn: 'NEXT — এগিয়ে যান' },
    },
    {
      type: 'list',
      items: [
        { en: 'CSS box model — how DOM nodes get their size.', bn: 'CSS বক্স মডেল — DOM নোড মাপ পায় কীভাবে।' },
        { en: 'DOM APIs with JavaScript — query, change, create.', bn: 'জাভাস্ক্রিপ্টে DOM API — খোঁজা, বদলানো, তৈরি।' },
        { en: 'Events — how clicks travel through the tree.', bn: 'ইভেন্ট — ক্লিক ট্রি দিয়ে কীভাবে ভ্রমণ করে।' },
      ],
    },
  ],
  nextLesson: {
    slug: 'forms',
    tech: 'html',
    title: { en: 'Forms & Native Validation', bn: 'ফর্ম ও নেটিভ ভ্যালিডেশন' }
  },
  exercises: [
    {
      id: 'html-dom-ex1',
      kind: 'mcq',
      topic: 'concept',
      question: { en: 'Which statement is TRUE?', bn: 'কোন বক্তব্যটি ঠিক?' },
      options: [
        { en: 'HTML and the DOM are the same thing', bn: 'HTML আর DOM একই জিনিস' },
        {
          en: 'The DOM is the live object tree the browser builds from HTML (and may differ from the source)',
          bn: 'DOM হলো HTML থেকে ব্রাউজারের তৈরি জীবন্ত অবজেক্ট-ট্রি (সোর্স থেকে ভিন্ন হতে পারে)',
        },
        { en: 'The DOM is a CSS concept', bn: 'DOM হলো CSS-এর ধারণা' },
        { en: 'The DOM only exists when JavaScript runs', bn: 'জাভাস্ক্রিপ্ট চললেই কেবল DOM থাকে' },
      ],
      answer: 1,
      hint: { en: 'The parser repairs broken HTML.', bn: 'পার্সার ভাঙা HTML ঠিক করে দেয়।' },
      explanation: {
        en: 'The browser parses HTML into a DOM, fixing errors on the way — so “view source” and “inspect element” can show different structures.',
        bn: 'ব্রাউজার HTML পার্স করে DOM বানায়, পথে ভুলগুলো ঠিক করে — তাই “view source” আর “inspect element” ভিন্ন কাঠামো দেখাতে পারে।',
      },
    },
    {
      id: 'html-dom-ex2',
      kind: 'predict',
      topic: 'parser',
      question: { en: 'The browser meets <banana>Hello</banana>. What happens?', bn: 'ব্রাউজার <banana>Hello</banana> পেলে কী হয়?' },
      options: [
        { en: 'The page crashes', bn: 'পেজ ক্র্যাশ করে' },
        { en: 'The tag is ignored and “Hello” is dropped', bn: 'ট্যাগ বাদ যায়, “Hello” হারিয়ে যায়' },
        {
          en: 'An unknown element is created, displayed inline, containing “Hello”',
          bn: 'অজানা একটি এলিমেন্ট তৈরি হয়, ইনলাইনে দেখায়, “Hello”-সহ',
        },
        { en: 'The browser shows an error page', bn: 'ব্রাউজার এরর পেজ দেখায়' },
      ],
      answer: 2,
      hint: { en: 'HTML parsers are famously forgiving.', bn: 'HTML পার্সার ক্ষমাশীলতার জন্য বিখ্যাত।' },
      explanation: {
        en: 'Unknown tags become HTMLUnknownElement nodes — styled as inline by default. This tolerance is why old browsers survive new tags.',
        bn: 'অজানা ট্যাগ HTMLUnknownElement নোড হয় — ডিফল্টে ইনলাইন। এই সহিষ্ণুতার কারণেই পুরোনো ব্রাউজার নতুন ট্যাগ সামলায়।',
      },
    },
    {
      id: 'html-dom-ex3',
      kind: 'fill',
      topic: 'accessibility',
      question: {
        en: 'Fill the attribute that describes this image to screen readers:',
        bn: 'স্ক্রিন রিডারে ছবিটি বর্ণনা করার অ্যাট্রিবিউটটি পূরণ করুন:',
      },
      code: `<img src="chart.png" ___="Sales doubled in 2026" />`,
      answer: 'alt',
      accept: ['alt'],
      hint: { en: 'Three letters.', bn: 'তিন অক্ষর।' },
      explanation: {
        en: 'alt provides alternative text. Without it, screen readers announce the filename instead of the meaning.',
        bn: 'alt বিকল্প টেক্সট দেয়। ছাড়া স্ক্রিন রিডার অর্থের বদলে ফাইলের নাম পড়ে।',
      },
      solution: 'alt',
    },
    {
      id: 'html-dom-ex4',
      kind: 'mcq',
      topic: 'semantics',
      question: {
        en: 'You need a clickable action (not navigation). Best choice?',
        bn: 'ক্লিকযোগ্য একটি অ্যাকশন দরকার (নেভিগেশন নয়)। সেরা বিকল্প?',
      },
      options: [
        { en: '<div onclick="…">', bn: '<div onclick="…">' },
        { en: '<span onclick="…">', bn: '<span onclick="…">' },
        { en: '<a href="#">', bn: '<a href="#">' },
        { en: '<button type="button">', bn: '<button type="button">' },
      ],
      answer: 3,
      hint: { en: 'Keyboard focus + Enter/Space should work for free.', bn: 'কিবোর্ড ফোকাস ও Enter/Space ফ্রিতে কাজ করা উচিত।' },
      explanation: {
        en: '<button> gives focus, key activation and correct screen-reader role out of the box. Links (<a>) are for going somewhere.',
        bn: '<button> ফোকাস, কি-অ্যাক্টিভেশন ও সঠিক স্ক্রিন-রিডার ভূমিকা ফ্রিতে দেয়। লিংক (<a>) কোথাও যাওয়ার জন্য।',
      },
    },
  ],
  quiz: {
    id: 'html-dom-quiz',
    title: { en: 'HTML & DOM Quiz', bn: 'HTML ও DOM কুইজ' },
    questions: [
      {
        id: 'html-dom-q1',
        kind: 'mcq',
        topic: 'structure',
        question: { en: 'Where does <title> render?', bn: '<title> কোথায় দেখা যায়?' },
        options: [
          { en: 'At the top of the page body', bn: 'পেজ বডির উপরে' },
          { en: 'In the browser tab / window title', bn: 'ব্রাউজার ট্যাব / উইন্ডোর নামে' },
          { en: 'In the footer', bn: 'ফুটারে' },
          { en: 'Nowhere — it is metadata for servers only', bn: 'কোথাওই নয় — শুধু সার্ভারের মেটাডেটা' },
        ],
        answer: 1,
        hint: { en: 'It lives in <head>.', bn: 'এটি <head>-এ থাকে।' },
        explanation: {
          en: '<head> metadata is not rendered in the page; <title> appears in the tab, history and search results.',
          bn: '<head>-এর মেটাডেটা পেজে রেন্ডার হয় না; <title> ট্যাবে, হিস্টোরি ও সার্চ রেজাল্টে দেখায়।',
        },
      },
      {
        id: 'html-dom-q2',
        kind: 'predict',
        topic: 'parser',
        question: {
          en: 'What does the DOM look like after this parses?',
          bn: 'পার্স হওয়ার পর DOM কেমন দেখায়?',
        },
        code: `<p>one<div>two</div>three`,
        options: [
          { en: 'div nested inside p, text “three” inside div', bn: 'p-র ভেতরে div, “three” div-এর ভেতরে' },
          {
            en: 'p auto-closes: p(“one”), then div(“two”), then trailing text “three”',
            bn: 'p অটো-ক্লোজ: p(“one”), তারপর div(“two”), তারপর টেক্সট “three”',
          },
          { en: 'A parse error, nothing renders', bn: 'পার্স এরর, কিছুই দেখায় না' },
          { en: 'Everything inside one p', bn: 'সবই একটি p-র ভেতরে' },
        ],
        answer: 1,
        hint: { en: '<p> cannot contain block elements.', bn: '<p> ব্লক এলিমেন্ট ধারণ করতে পারে না।' },
        explanation: {
          en: 'When <div> opens, the parser implicitly closes <p>. The text “three” lands outside both. Always verify with Inspect.',
          bn: '<div> খুললেই পার্সার <p> সিলেন্টলি বন্ধ করে দেয়। “three” বাইরে চলে যায়। Inspect দিয়ে যাচাই করুন।',
        },
      },
      {
        id: 'html-dom-q3',
        kind: 'mcq',
        topic: 'concept',
        question: {
          en: 'What does the web development acronym DOM stand for?',
          bn: 'ওয়েব ডেভেলপমেন্টে বহুল ব্যবহৃত DOM শব্দটির পূর্ণরূপ কী?'
        },
        options: [
          { en: 'Document Object Model', bn: 'ডকুমেন্ট অবজেক্ট মডেল (Document Object Model)' },
          { en: 'Data Object Mapping', bn: 'ডেটা অবজেক্ট ম্যাপিং (Data Object Mapping)' },
          { en: 'Document Order Method', bn: 'ডকুমেন্ট অর্ডার মেথড (Document Order Method)' },
          { en: 'Direct Object Memory', bn: 'ডিরেক্ট অবজেক্ট মেমোরি (Direct Object Memory)' },
        ],
        answer: 0,
        hint: { en: 'It models a document as objects.', bn: 'ডকুমেন্টকে অবজেক্ট হিসেবে মডেল করে।' },
        explanation: {
          en: 'Document Object Model — a language-neutral, live object representation of the document.',
          bn: 'Document Object Model — ডকুমেন্টের ভাষা-নিরপেক্ষ, জীবন্ত অবজেক্ট উপস্থাপনা।',
        },
      },
      {
        id: 'html-dom-q4',
        kind: 'mcq',
        topic: 'semantics',
        question: {
          en: 'The MAIN unique content of a page belongs in…',
          bn: 'পেজের প্রধান অনন্য কনটেন্ট থাকা উচিত…',
        },
        options: [
          { en: '<content>', bn: '<content>' },
          { en: '<main>', bn: '<main>' },
          { en: '<body2>', bn: '<body2>' },
          { en: '<section class="main"> only', bn: 'শুধু <section class="main">' },
        ],
        answer: 1,
        hint: { en: 'One per page.', bn: 'পেজে একটি।' },
        explanation: {
          en: '<main> is the landmark assistive tech can jump to. Only one per page, not nested in header/footer.',
          bn: '<main> হলো সেই ল্যান্ডমার্ক যেখানে অ্যাসিস্টিভ টেক লাফিয়ে যেতে পারে। পেজে একটি, header/footer-এর ভেতরে নয়।',
        },
      },
    ],
  },
  next: { slug: 'forms', title: { en: 'Forms & Validation', bn: 'ফর্ম ও ভ্যালিডেশন' } },
};
