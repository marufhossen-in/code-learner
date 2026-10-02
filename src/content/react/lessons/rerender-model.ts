import type { Lesson } from '../../../lib/types';

export const rerenderLesson: Lesson = {
  slug: 'rerender-model',
  tech: 'react',
  title: {
    en: 'Rerender Model — State changes, everything below re-runs, the diff decides',
    bn: 'রি-রেন্ডার ইঞ্জিন: reconciliation, key ও memo'
  },
  summary: {
    en: 'State changes, everything below re-runs, the diff decides what the DOM feels. Master what triggers a render, how React matches old to new, and which optimizations (memo, useMemo) you should reach for — and when they lie.',
    bn: 'স্টেট বদলায়, নিচের সব পুনরায় চলে, আর diff ঠিক করে DOM কী অনুভব করবে। কী রেন্ডার ঘটায়, React পুরনো-নতুন মেলায় কীভাবে, আর কোন অপ্টিমাইজেশন (memo, useMemo) কখন নেবেন — আর কখন সেগুলো মিথ্যা বলে — সব এখানে।',
  },
  minutes: 35,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT is a render, truly?', bn: 'একটি রেন্ডার আসলে কী?' } },
    {
      type: 'para',
      text: {
        en: 'A render is simply React calling your component function. Nothing more romantic than that. Calling setState anywhere in a component schedules a re-run of that component and, by default, every component below it in the tree. The output is a fresh description (the new `JSX` UI element tree). React then reconciles the output: walking old and new trees side by side. When type and key match, it patches props and text. When types differ, it unmounts the old subtree and mounts a fresh one. Only after computing the minimal instruction set does React touch the real browser `DOM` during the commit phase. Renders are cheap; commits are costly.',
        bn: 'রেন্ডার মানে হলো React আপনার কম্পোনেন্ট ফাংশনকে কল করছে। কোনো কম্পোনেন্টে setState কল করার অর্থ হলো সেই কম্পোনেন্ট এবং তার নিচের সব কম্পোনেন্টকে পুনরায় চালানোর শিডিউল করা। এর আউটপুট হলো একটি নতুন `JSX` UI ট্রি। এরপর React রিকনসাইল করে পুরনো ও নতুন ট্রি মেলায়। টাইপ ও key একই থাকলে কেবল পরিবর্তিত অংশ প্যাচ করা হয়, আর টাইপ আলাদা হলে পুরনো ট্রি ধ্বংস করে নতুন ট্রি বসানো হয়। সবশেষে কমিট ফেজে খুব সতর্কতার সাথে ব্রাউজার `DOM` পরিবর্তন করা হয়। রেন্ডার সস্তা হলেও কমিট ব্যয়বহুল।',
      },
    },
    {
      type: 'keyterms',
      items: [
        { term: 'render', def: { en: 'Calling your function; produces the new UI description.', bn: 'আপনার ফাংশনকে ডাকা; উত্পন্ন হয় নতুন UI বর্ণনা।' } },
        { term: 'reconciliation', def: { en: 'The diff: matching old tree to new by type + key.', bn: 'diff: টাইপ + key দিয়ে পুরনো ট্রি নতুনের সাথে মেলানো।' } },
        { term: 'commit', def: { en: 'Applying the minimal DOM mutations. Cheap renders, costly commits.', bn: 'ন্যূনতম DOM পরিবর্তনগুলো বসানো। সস্তা রেন্ডার, দামি কমিট।' } },
        { term: 'memo', def: { en: 'Component wrapper: skip re-render if props are shallow-equal.', bn: 'কম্পোনেন্ট মোড়ক: props অগভীরভাবে সমান হলে রি-রেন্ডার বাদ।' } },
      ],
    },
    { type: 'heading', id: 'why', text: { en: 'WHY everything re-renders by default', bn: 'কেন ডিফল্টে সবই রি-রেন্ডার হয়' } },
    {
      type: 'para',
      text: {
        en: 'Because it is CORRECT for free: if a parent could produce different JSX for a child, skipping the child risks stale screen-time. React chooses to re-run everything below the changed state, trusting that pure functions are fast to re-invoke. This is the trade — your CPU work (re-running) buys exactness (never stale UI). It also explains the cardinal performance question: “Which subtree am I making re-run?” Answer that with the tree in your head — or the DevTools Profiler — and 90% of slowness evaporates before you ever memo anything.',
        bn: 'কারণ এটি অবৈতনিকভাবে সঠিক: প্যারেন্ট যদি চাইল্ডের জন্য ভিন্ন JSX দিতে পারে, চাইল্ড বাদ দিলে স্ক্রিনে পুরনো দৃশ্যের ঝুঁকি। React বেছে নেয় বদলানো স্টেটের নিচের সবই পুনরায় চালানো, আস্থা রেখে খাঁটি ফাংশন দ্রুত চলে। এইটাই লেনদেন — আপনার CPU-কাজ (পুনরায় চালা) কিনে এনে নির্ভুলতা (কখনো পুরনো UI নয়)। এ থেকেই পারফরম্যান্সের মূল প্রশ্ন: "আমি কোন সাবট্রিকে পুনরায় চালাচ্ছি?" উত্তর খুঁজুন মাথার ট্রিতে — বা DevTools Profiler-এ — তাহলে memo ছোঁয়ার আগেই ৯০% ধীরতা উধাও।',
      },
    },
    { type: 'heading', id: 'how', text: { en: 'HOW reconciliation reads your JSX', bn: 'reconciliation আপনার JSX পড়ে যেভাবে' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Step 1 — Type check', bn: 'ধাপ ১ — টাইপ পরীক্ষা' }, text: { en: '<div>… vs <span>… or Counter vs Panel: type differs → destroy the old subtree entirely, state included.', bn: '<div>… বনাম <span>… বা Counter বনাম Panel: টাইপ ভিন্ন → পুরনো সাবট্রি সম্পূর্ণ ধ্বংস, স্টেটসহ।' } },
        { title: { en: 'Step 2 — Key match', bn: 'ধাপ ২ — key মেলানো' }, text: { en: 'Assemble children by key before comparing. Reorders become moves, not rebuilds.', bn: 'তুলনার আগে চাইল্ড key দিয়ে জোড় করা। সরে যাওয়া হয়ে যায় পুনর্নির্মাণ নয়।' } },
        { title: { en: 'Step 3 — Patch', bn: 'ধাপ ৩ — প্যাচ' }, text: { en: 'Same type + same key but changed props → set new attributes, swap text nodes.', bn: 'একই টাইপ + একই key কিন্তু বদলানো props → নতুন অ্যাট্রিবিউট, টেক্সট নোড বদলানো।' } },
        { title: { en: 'Step 4 — Commit whitelist', bn: 'ধাপ ৪ — কমিট শ্বেতপত্র' }, text: { en: 'Only differing parts queue DOM mutations; untouched subtrees commit nothing.', bn: 'শুধু ভিন্ন অংশ DOM পরিবর্তনের কিউতে; অস্পর্শিত সাবট্রি কিছু কমিট করে না।' } },
      ],
    },
    {
      type: 'code',
      lang: 'tsx',
      code: `// sBAD: index keys in a sortable list — React reuses the WRONG <input>
items.map((item, i) => <Row key={i} item={item} />)

// ✅ GOOD: stable identity survives sorting
items.map((item) => <Row key={item.id} item={item} />)

// ❌ Premature: memo on everything
const Row = memo(({ item }) => <li>{item.name}</li>)   // props change every render anyway

// ✅ Correct: memo where a heavy child receives STABLE props
const Chart = memo(function Chart({ data }) {  /* expensive */ })
// …and keep data stable with useMemo, or memo is a lie:
const data = useMemo(() => build(rows), [rows])

// ❌ The stale-closure classic
useEffect(() => {
  const id = setInterval(() => setCount(count + 1), 1000)  // count frozen at 0
}, [])
// ✅ updater form never stales
useEffect(() => {
  const id = setInterval(() => setCount(c => c + 1), 1000)
  return () => clearInterval(id)
}, [])`,
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNAL: Fiber, two trees, and the interruptible render', bn: 'ভেতরের কথা: ফাইবার, দুই ট্রি, আর খণ্ডনযোগ্য রেন্ডার' },
    },
    {
      type: 'para',
      text: {
        en: 'React keeps TWO element trees: the current (what the screen shows) and the workInProgress (the one being built after setState). The data structure walking them is a Fiber — a linked-list of nodes (child, sibling, return), not a recursive tree, precisely so the walk can PAUSE between two nodes and resume later. That pause is the “concurrent” superpower: when an urgent input event arrives mid-render, React abandons the workInProgress tree, handles the typing first, then rebuilds. This is why renders must be pure — React may call your function and THROW THE RESULT AWAY, or call it twice in development (StrictMode) to surface hidden side effects. The commit phase, by contrast, is always synchronous and atomic: one flicker being visible would mean half-updated UI, so the DOM mutations apply in one uninterruptible sweep.',
        bn: 'React দুটি এলিমেন্ট ট্রি ধরে রাখে: current (স্ক্রিনে যা দেখা যায়) আর workInProgress (setState-এর পর যা নির্মাণাধীন)। এগুলো হেঁটে বেড়ানো কাঠামো হলো ফাইবার — নোডের লিংকড-লিস্ট (child, sibling, return), রিকার্সিভ ট্রি নয়, তবুই যাতে হাঁটা দুই নোডের মাঝে থামিয়ে পরে আবার শুরু করা যায়। এই থামাই "কনকারেন্ট" অধিক্ষমতা: রেন্ডারের মাঝে জরুরি ইনপুট এলে React workInProgress ট্রি ফেলে দিয়ে আগে টাইপিং সামলায়, তারপর নতুন করে বানায়। এইজন্যেই রেন্ডার খাঁটি হতে হবে — React আপনার ফাংশন ডেকে ফলাফল ফেলে দিতে পারে, বা ডেভেলপমেন্টে দুইবার ডাকতে পারে (StrictMode) লুকানো পার্শ্বপ্রতিক্রিয়া ধরতে। বিপরীতে কমিট ফেজ সবসময় সিঙ্ক্রোনাস ও অবিভাজ্য: একটি ঝিলিক দৃশ্যমান মানেই অর্ধ-আপডেটেড UI, তাই DOM পরিবর্তন বসে এক অখণ্ডনীয় ঝটকায়।',
      },
    },
    { type: 'heading', id: 'visual', text: { en: 'VISUAL: press, shield, count', bn: 'ভিজ্যুয়াল: চাপুন, ঢাকুন, গুনুন' } },
    { type: 'visual', id: 'react-render' },
    {
      type: 'para',
      text: {
        en: 'The lesson continues the same lab. Shield List, press count++ — Counter still burns but List+Item stay cold. Now press “type a letter in text” with Item shielded: it burns anyway, because text IS its prop. memo checks YOUR contract with React; it does not forgive changed props.',
        bn: 'লেসন একই ল্যাবে চলে। List ঢেকে count++ চাপুন — Counter জ্বলে কিন্তু List+Item ঠাণ্ডা থাকে। এবার Item ঢেকে "এক অক্ষর লিখুন" চাপুন: তবুও জ্বলে, কারণ text-ই তার prop। memo React-এর সাথে আপনার চুক্তিই পরখ করে; বদলানো props-কে ক্ষমা করে না।',
      },
    },
    { type: 'heading', id: 'result', text: { en: 'RESULT: a mental performance model', bn: 'ফলাফল: মাথায় তৈরি একটি পারফরম্যান্স মডেল' } },
    {
      type: 'list',
      items: [
        { en: 'Predict renders by asking: state changed WHERE, and what sits below it?', bn: 'রেন্ডার অনুমান করার প্রশ্ন: স্টেট বদলেছে কোথায়, আর তার নিচে কী বসে?' },
        { en: 'Reach for composition (children/closing) before memo; restructure beats optimize.', bn: 'memo-র আগে কম্পোজিশনে যান (children); কাঠামো বদলানো অপ্টিমাইজকে হারিয়ে।' },
        { en: 'memo + unstable props (new object/array/lambda per render) = useless decoration.', bn: 'memo + অস্থিতিশীল props (প্রতি রেন্ডারে নতুন অবজেক্ট/অ্যারে/ল্যাম্বডা) = নিরকর্মা সাজসজ্জা।' },
      ],
    },
    { type: 'heading', id: 'debug', text: { en: 'DEBUGGING drill: the interval that stops at 1', bn: 'ডিবাগিং অনুশীলন: 1 এ গিয়ে থামা ইন্টারভাল' } },
    {
      type: 'para',
      text: {
        en: 'Symptom: interval counter shows 1 forever. Hypothesis tree: closure captured the FIRST render’s count (0), so count + 1 is always 1. Evidence hunt: log inside the callback — count is 0 every tick even as the screen shows 1. This is a STALE CLOSURE: the function inside useEffect was born on render #1 and carries render #1’s variables for eternity. Fix with the updater form (setCount(c => c + 1)) — the updater runs at TIP-OF-QUEUE, always reading the freshest state. Second fix: add count to the deps array and reset the interval — choose the updater form; it expresses intent better.',
        bn: 'লক্ষণ: ইন্টারভাল কাউন্টার চিরকাল ১ দেখায়। প্রকল্প গাছ: ক্লোজার বন্দি করেছে প্রথম রেন্ডারের count (0), তাই count + 1 সবসময় ১। প্রমাণ শিকার: কলব্যাকে লগ — প্রতি টিকে count ০, যদিও স্ক্রিনে ১। এটি STALE CLOSURE: useEffect-এর ভেতরের ফাংশন জন্মেছিল রেন্ডার #১-এ আর চিরকাল বয়ে বেড়ায় রেন্ডার #১-এর ভেরিয়েবল। সমাধান আপডেটার রূপে (setCount(c => c + 1)) — আপডেটার চলে কিউ-র মাথায়, সবসময় সর্বশেষ স্টেট পড়ে। দ্বিতীয় সমাধান: deps-এ count দিয়ে ইন্টারভাল পুনঃস্থাপন — বেছে নিন আপডেটার রূপ; উদ্দেশ্য সেটিতে স্পষ্ট।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      text: {
        en: 'Changing state in render — if (x) setX(...) in the function body — creates an infinite loop of render → state → render. State belongs to events and effects.',
        bn: 'রেন্ডারের ভেতরে স্টেট বদলানো — if (x) setX(...) ফাংশন বডিতে — তৈরি করে অসীম লুপ: রেন্ডার → স্টেট → রেন্ডার। স্টেট ইভেন্ট আর effect-এর।',
      },
    },
    { type: 'heading', id: 'realworld', text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' } },
    {
      type: 'list',
      items: [
        { en: 'React DevTools “highlight re-renders” turns this entire lesson into a light show on YOUR app.', bn: 'React DevTools-এর “highlight re-renders” এই পুরো লেসনকে আপনার অ্যাপে আলোর প্রদর্শনী বানায়।' },
        { en: 'Server Components move the render to the server — commit becomes HTML streaming.', bn: 'সার্ভার কম্পোনেন্ট রেন্ডার সরিয়ে নেয় সার্ভারে — কমিট হয়ে যায় HTML স্ট্রিমিং।' },
        { en: 'startTransition marks updates non-urgent so typing stays responsive during heavy renders.', bn: 'startTransition ভারী রেন্ডারের সময় টাইপিং সচল রাখতে আপডেটকে অনাজুরি চিহ্নিত করে।' },
      ],
    },
    { type: 'heading', id: 'next', text: { en: 'NEXT: where this model takes you', bn: 'পরবর্তী: এই মডেল আপনাকে কোথায় নিয়ে যায়' } },
    {
      type: 'para',
      text: {
        en: 'The hub roadmap points to stage 3 (useMemo / useCallback stabilization contracts) and stage 4 (effects as synchronization, the Profiler ritual). Beyond React itself, this mental model is the doorway to Server Components and to Next.js — where the render/commit split becomes server/stream vs client hydration. And whenever the app outgrows one tree of props, the roadmaps page shows how React connects outward: state managers, routers, and data-fetching layers are all just strategies for answering the same question you now ask instinctively. WHERE does the state live, and WHAT re-runs when it changes?',
        bn: 'হাব রোডম্যাপে ধাপ ৩ (useMemo / useCallback চুক্তি) এবং ধাপ ৪ (ইফেক্ট ও Profiler) আলোচনা করা হয়েছে। এই মানসিক মডেলটি Server Components এবং ক্লায়েন্ট হাইড্রেশনের ক্ষেত্রেও সমভাবে প্রযোজ্য। রোডম্যাপের পথ ধরে স্টেট ম্যানেজার, রাউটার এবং ডেটা ফেচিং স্তরগুলো যুক্ত থাকে। এখন থেকে আপনি সবসময় জিজ্ঞেস করবেন: স্টেট থাকে কোথায় এবং পরিবর্তনের সাথে সাথে কোন সাবট্রি রি-রেন্ডার হয়?',
      },
    },
  ],
  nextLesson: {
    slug: 'the-effect-ward',
    tech: 'react',
    title: { en: 'Effect Ward — Effects open its windows after the paint dries', bn: 'ইফেক্ট-ওয়ার্ড: useEffect, ক্লিনআপ ও সিস্টেম-সিঙ্ক' }
  },
  exercises: [
    {
      id: 'rerender-ex1',
      kind: 'predict',
      topic: 'cascade',
      question: { en: 'setName at the App root. Which functions re-run by default?', bn: 'রুট App-এ setName। ডিফল্টে কোন ফাংশনগুলো পুনরায় চলবে?' },
      options: [
        { en: 'Only App', bn: 'শুধু App' },
        { en: 'App and EVERY component beneath it', bn: 'App এবং তার নিচের প্রতিটি কম্পোনেন্ট' },
        { en: 'Only components that use name', bn: 'শুধু যেগুলো name ব্যবহার করে' },
      ],
      answer: 1,
      hint: { en: 'React cannot know what you intend — so it re-verifies the whole subtree.', bn: 'React আপনার উদ্দেশ্য জানতে পারে না — তাই পুরো সাবট্রি পুনরায় যাচাই করে।' },
      explanation: { en: 'Default cascade: state owner + all descendants re-render. memo narrows it.', bn: 'ডিফল্ট ক্যাসকেড: স্টেট-মালিক + সব বংশধর রি-রেন্ডার। memo সেটা সংকীর্ণ করে।' },
    },
    {
      id: 'rerender-ex2',
      kind: 'mcq',
      topic: 'memo',
      question: { en: 'When does memo actually skip a render?', bn: 'memo আসলে কখন রেন্ডার বাদ দেয়?' },
      options: [
        { en: 'Always — that is its job', bn: 'সবসময় — কাজই এটা' },
        { en: 'When props are shallowly equal to last render’s', bn: 'props গত রেন্ডারের সাথে অগভীরভাবে সমান হলে' },
        { en: 'Only for class components', bn: 'শুধু ক্লাস কম্পোনেন্টের জন্য' },
      ],
      answer: 1,
      hint: { en: 'Basket changed contents → shallow check fails → render happens.', bn: 'ঝুড়ির ভেতরে বদল → অগভীর পরীক্ষা ফেল → রেন্ডার হয়।' },
      explanation: { en: 'memo is a shallow-props equality pact. New references every render break the pact.', bn: "memo অগভীর-props সমতার চুক্তি। প্রতি রেন্ডারে নতুন রেফারেন্স চুক্তি ভাঙে।" },
    },
    {
      id: 'rerender-ex3',
      kind: 'predict',
      topic: 'stale closure',
      question: { en: 'count=0; setInterval(() => setCount(count + 1), 1000) with [] deps. After 5 seconds…', bn: 'count=0; setInterval(() => setCount(count + 1), 1000), deps []। ৫ সেকেন্ড পর…' },
      options: [
        { en: '5', bn: '5' },
        { en: '1 — the closure captured count=0 forever', bn: '1 — ক্লোজার চিরকালের জন্য count=0 বন্দি করেছে' },
        { en: '0', bn: '0' },
      ],
      answer: 1,
      hint: { en: 'Functions capture VARIABLES at creation; renders capture at render time.', bn: 'সৃষ্টির মুহূর্তে ফাংশন ভেরিয়েবল বন্দি করে; রেন্ডার করে রেন্ডার-সময়ে।' },
      explanation: { en: 'Stale closure. Fix: setCount(c => c + 1) — the updater always sees the freshest value.', bn: 'Stale closure। সমাধান: setCount(c => c + 1) — আপডেটার সবসময় সর্বশেষ মান দেখে।' },
    },
    {
      id: 'rerender-ex4',
      kind: 'fill',
      topic: 'reconciliation',
      question: { en: 'React matches old and new children by ____ first, then by position.', bn: 'React পুরনো-নতুন চাইল্ড মেলায় আগে ____ দিয়ে, তারপর অবস্থানে।' },
      answer: 'key',
      accept: ['key', 'keys'],
      hint: { en: 'The identity attribute.', bn: 'পরিচয়-অ্যাট্রিবিউটটি।' },
      explanation: { en: 'Keys pair up children; then index. That pair decides move vs rebuild.', bn: 'key চাইল্ড জোড় করে; তারপর ইনডেক্স। সেই জোড় ঠিক করে সরানো বনাম পুনর্নির্মাণ।' },
      solution: 'key',
    },
  ],
  quiz: {
    id: 'rerender-quiz',
    title: { en: 'Quiz: inside the engine', bn: 'কুইজ: ইঞ্জিনের ভেতর' },
    questions: [
      {
        id: 'rerender-q1',
        kind: 'mcq',
        topic: 'model',
        question: { en: '“Rendering” in React means…', bn: 'React-এ “রেন্ডারিং” মানে…' },
        options: [
          { en: 'Painting pixels to the screen', bn: 'স্ক্রিনে পিক্সেল আঁকা' },
          { en: 'Calling your component functions to get the new UI description', bn: 'নতুন UI বর্ণনা পেতে আপনার কম্পোনেন্ট ফাংশন ডাকা' },
          { en: 'Writing innerHTML', bn: 'innerHTML লেখা' },
        ],
        answer: 1,
        hint: { en: 'Painting is the browser’s job (commit).', bn: 'পিক্সেল আঁকা ব্রাউজারের কাজ (কমিট)।' },
        explanation: { en: 'Render = function execution. Commit = DOM mutation. Pipeline people paint.', bn: 'রেন্ডার = ফাংশন চালা। কমিট = DOM পরিবর্তন। পিক্সেল আঁকে পাইপলাইন।' },
      },
      {
        id: 'rerender-q2',
        kind: 'predict',
        topic: 'keys',
        question: { en: 'Using key={index} on a list that REORDERS causes…', bn: 'সারি-বদলকারী তালিকায় key={index} ব্যবহার করলে হয়…' },
        options: [
          { en: 'Nothing — index is always safe', bn: 'কিছু নয় — ইনডেক্স সবসময় নিরাপদ' },
          { en: 'React reuses DOM nodes for the WRONG items; input focus/state jump between rows', bn: 'React ভুল আইটেমের জন্য DOM পুনর্ব্যবহার করে; ইনপুট ফোকাস/স্টেট সারিতে সারিতে লাফায়' },
          { en: 'A compile error', bn: 'কম্পাইল এরর' },
        ],
        answer: 1,
        hint: { en: 'Identity follows the index. The index did not move. The data did.', bn: 'পরিচয় index-ই অনুসরণ করে। index সরেনি। সরেছে ডেটা।' },
        explanation: { en: 'Index keys bind identity to position; stable ids bind identity to data.', bn: 'index key পরিচয় বাঁধে অবস্থানে; স্থায়ী আইডি বাঁধে ডেটায়।' },
      },
      {
        id: 'rerender-q3',
        kind: 'mcq',
        topic: 'optimization',
        question: { en: 'memo(Component) with props={{ user }} rebuilt every render is…', bn: 'প্রতি রেন্ডারে নতুন {{ user }} props দিলে memo(Component) হলো…' },
        options: [
          { en: 'Perfect optimization', bn: 'নিখুঁত অপ্টিমাইজেশন' },
          { en: 'Dead code — the new object defeats shallow equality', bn: 'মৃত কোড — নতুন অবজেক্ট অগভীর সমতাকে হারায়' },
          { en: 'A syntax error', bn: 'সিনট্যাক্স এরর' },
        ],
        answer: 1,
        hint: { en: 'memo + useMemo/useCallback are partners in the same contract.', bn: 'memo + useMemo/useCallback একই চুক্তির সঙ্গী।' },
        explanation: { en: 'Protect memo with stable props (useMemo/useCallback), or pre-compute above.', bn: 'অস্থিরকে স্থায়ী রূপ দিন (useMemo/useCallback), নয়তো উপরে প্রাক-গণনা করুন।' },
      },
      {
        id: 'rerender-q4',
        kind: 'mcq',
        topic: 'loop',
        question: { en: 'Calling setState unconditionally inside the component body yields…', bn: 'কম্পোনেন্ট বডির ভেতরে শর্তহীন setState দিলে পাওয়া যায়…' },
        options: [
          { en: 'A single extra render', bn: 'একবার অতিরিক্ত রেন্ডার' },
          { en: 'An infinite render loop', bn: 'অসীম রেন্ডার লুপ' },
          { en: 'Nothing — React ignores it', bn: 'কিছু নয় — React উপেক্ষা করে' },
        ],
        answer: 1,
        hint: { en: 'Render → setState → schedule render → setState → …', bn: 'রেন্ডার → setState → রেন্ডার-সময়সূচি → setState → …' },
        explanation: { en: 'State changes belong in event handlers and effects — not in the render path.', bn: 'স্টেট পরিবর্তন ইভেন্ট হ্যান্ডলার আর effect-এর — রেন্ডার পথে নয়।' },
      },
    ],
  },
  next: {
    slug: 'the-effect-ward',
    title: { en: 'The Effect Ward: useEffect, cleanup and syncing with systems', bn: 'ইফেক্ট-ওয়ার্ড: useEffect, ক্লিনআপ ও সিস্টেম-সিঙ্ক' },
  },
};
