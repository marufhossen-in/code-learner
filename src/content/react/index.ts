import type { Hub } from '../../lib/types';
import { rerenderLesson } from './lessons/rerender-model';
import { effectWardLesson } from './lessons/the-effect-ward';
import { stateVaultLesson } from './lessons/the-state-vault';
import { suspenseGalleryLesson } from './lessons/the-suspense-gallery';
import { formPressLesson } from './lessons/the-form-press';
import { compositionMillLesson } from './lessons/the-composition-mill';
import { serverFoundryLesson } from './lessons/the-server-foundry';
import { grandArchiveLesson } from './lessons/the-grand-archive';
import { thinkingInReactLesson } from './lessons/thinking-in-react';

export const reactHub: Hub = {
  slug: 'react',
  name: 'React',
  icon: '⚛️',
  tagline: {
    en: 'The UI engine that taught the web to re-run functions: components, state, reconciliation.',
    bn: 'ওয়েবকে ফাংশন পুনরায় চালাতে শেখানো UI ইঞ্জিন: কম্পোনেন্ট, স্টেট, reconciliation।',
  },
  about: {
    en: 'React is not "HTML in JavaScript" — it is an execution model. Your components are pure-ish functions of state that React re-invokes, diffs, and commits. This hub starts from the UI = f(state) worldview — components as functions, props as arguments, one-way flow with events climbing back up — then opens the re-render engine: reconciliation rules, keys as identity, memo as a shallow-equality contract, and the stale-closure traps inside hooks. Everything is paired with an interactive Re-render Lab where you press setState, shield subtrees with memo, and watch the render counters tally the damage.',
    bn: 'React শুধু "জাভাস্ক্রিপ্টের ভেতরে HTML" নয় — এটি একটি এক্সিকিউশন মডেল। আপনার কম্পোনেন্টগুলো স্টেটের অর্ধ-খাঁটি ফাংশন, যেগুলো React পুনরায় ডেকে, diff করে, কমিট করে। এই হাব শুরু হয় UI = f(state) দৃষ্টিভঙ্গি থেকে — ফাংশন হিসেবে কম্পোনেন্ট, আর্গুমেন্ট হিসেবে props, একমুখী প্রবাহ যেখানে ইভেন্ট ফিরে ওঠে — তারপর খোলা হয় রি-রেন্ডার ইঞ্জিন: reconciliation-এর নিয়ম, পরিচয় হিসেবে key, অগভীর-সমতার চুক্তি হিসেবে memo, আর হুকের ভেতরে stale-closure ফাঁদ। প্রতিটি ধারণার সঙ্গে আছে ইন্টারঅ্যাক্টিভ Re-render Lab — setState চাপুন, memo দিয়ে সাবট্রি ঢাকুন, আর রেন্ডার কাউন্টারে ক্ষতির হিসাব দেখুন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The worldview', bn: 'ধাপ ১ — দৃষ্টিভঙ্গি' },
      items: [
        { en: 'Components are functions; JSX is description (lesson 1)', bn: 'কম্পোনেন্ট হলো ফাংশন; JSX হলো বর্ণনা (লেসন ১)' },
        { en: 'UI = f(state): props down, events up', bn: 'UI = f(state): props নিচে, ইভেন্ট উপরে' },
        { en: 'Derived values > redundant state', bn: 'জন্মলব্ধ মান > অপ্রয়োজনীয় স্টেট' },
      ],
    },
    {
      title: { en: 'Stage 2 — The engine', bn: 'ধাপ ২ — ইঞ্জিন' },
      items: [
        { en: 'Render vs commit: cheap re-runs, costly DOM (lesson 2)', bn: 'রেন্ডার বনাম কমিট: সস্তা পুনরায় চালা, দামি DOM (লেসন ২)' },
        { en: 'Reconciliation by type + key', bn: 'টাইপ + key দিয়ে reconciliation' },
        { en: 'Why index keys corrupt reordered lists', bn: 'সারি-বদলকারী তালিকায় index key কেন ধ্বংস করে' },
      ],
    },
    {
      title: { en: 'Stage 3 — Optimization contracts', bn: 'ধাপ ৩ — অপ্টিমাইজেশন চুক্তি' },
      items: [
        { en: 'memo as shallow-equality pact', bn: 'অগভীর-সমতার চুক্তি হিসেবে memo' },
        { en: 'useMemo / useCallback: stabilizing references', bn: 'useMemo / useCallback: রেফারেন্স স্থিতিশীল করা' },
        { en: 'Composition and colocation beat premature memo', bn: 'অকাল-মেমোর চেয়ে কম্পোজিশন ও কোলোকেশন ভালো' },
      ],
    },
    {
      title: { en: 'Stage 4 — Hook mastery', bn: 'ধাপ ৪ — হুক দক্ষতা' },
      items: [
        { en: 'Stale closures and the updater form', bn: 'Stale closure ও আপডেটার রূপ' },
        { en: 'Effect deps as a synchronization manifest', bn: 'সিঙ্ক্রোনাইজেশন ইশতেহার হিসেবে effect deps' },
        { en: 'DevTools Profiler: measure, then optimize', bn: 'DevTools Profiler: মাপুন, তারপর অপ্টিমাইজ' },
      ],
    },
  ],
  lessons: [thinkingInReactLesson, rerenderLesson, effectWardLesson, stateVaultLesson, suspenseGalleryLesson, formPressLesson, compositionMillLesson, serverFoundryLesson, grandArchiveLesson],
  reference: [
    {
      group: 'Core hooks',
      methods: [
        {
          name: 'useState',
          signature: 'const [state, setState] = useState(initial)',
          params: { en: 'initial — the value (or lazy initializer function) for render #1.', bn: 'initial — রেন্ডার #১-এর মান (বা সুসান্ত আরম্ভক ফাংশন)।' },
          returns: { en: 'A pair: the current snapshot and a setter that schedules a re-render.', bn: 'এক জোড়া: বর্তমান স্ন্যাপশট আর এমন সেটার যা রি-রেন্ডারের সময় ঠিক করে।' },
          example: "const [count, setCount] = useState(0)\nsetCount(c => c + 1)  // updater reads the freshest value",
        },
        {
          name: 'useEffect',
          signature: 'useEffect(fn, deps)',
          params: { en: 'fn — side effect to run after commit; deps — values the callback closes over.', bn: 'fn — কমিটের পর চলা পার্শ্বপ্রতিক্রিয়া; deps — কলব্যাক যে মানগুলো বন্দি করে।' },
          returns: { en: 'Runs after paint; return a cleanup fn to undo (subscriptions, timers).', bn: 'পেইন্টের পর চলে; পূর্বাবস্থায় ফেরাতে cleanup ফাংশন ফেরত দিন (সাবস্ক্রিপশন, টাইমার)।' },
          example: "useEffect(() => {\n  const id = setInterval(tick, 1000)\n  return () => clearInterval(id)\n}, [])  // mount once, clean on unmount",
        },
        {
          name: 'useMemo',
          signature: 'const value = useMemo(fn, deps)',
          params: { en: 'fn — expensive computation; deps — when to recompute.', bn: 'fn — ব্যয়বহুল গণনা; deps — কখন পুনর্গণনা।' },
          returns: { en: 'A STABLE reference to the computed value until deps change.', bn: 'deps না বদলা পর্যন্ত গণিত মানের স্থিতিশীল রেফারেন্স।' },
          example: 'const data = useMemo(() => build(rows), [rows])',
        },
        {
          name: 'useCallback',
          signature: 'const cb = useCallback(fn, deps)',
          params: { en: 'fn — the function to freeze; deps — when to replace it.', bn: 'fn — হিমায়িত করার ফাংশন; deps — কখন বদলাবেন।' },
          returns: { en: 'The same function identity across renders (until deps change).', bn: 'রেন্ডারে রেন্ডারে একই ফাংশন পরিচয় (deps না বদললে)।' },
          example: 'const onDelete = useCallback((id) => setTodos(t => t.filter(x => x.id !== id)), [])',
        },
      ],
    },
    {
      group: 'React API',
      methods: [
        {
          name: 'memo',
          signature: 'const Wrapped = memo(Component)',
          params: { en: 'Component — a pure component that only renders if props change.', bn: 'Component — এমন খাঁটি কম্পোনেন্ট যা শুধু props বদলালে রেন্ডার হয়।' },
          returns: { en: 'A component that skips re-runs when props are shallow-equal.', bn: 'props অগভীরভাবে সমান হলে পুনরায় চালা বাদ দেয় এমন কম্পোনেন্ট।' },
          example: 'const Chart = memo(function Chart({ data }) { /* heavy */ })',
        },
        {
          name: 'createElement',
          signature: 'createElement(type, props, ...children)',
          params: { en: 'type — tag or component; props — attributes; children — nested elements.', bn: 'type — ট্যাগ বা কম্পোনেন্ট; props — অ্যাট্রিবিউট; children — নেস্টেড এলিমেন্ট।' },
          returns: { en: 'A plain object describing the UI — what JSX compiles to.', bn: 'UI-এর বর্ণনামূলক সাধারণ অবজেক্ট — JSX যাতে কম্পাইল হয়।' },
          example: "createElement('h1', { className: 'big' }, 'হ্যালো')",
        },
        {
          name: 'startTransition',
          signature: 'startTransition(() => setState(v))',
          params: { en: 'A function wrapping the non-urgent state update.', bn: 'অনাজুরি স্টেট আপডেট মোড়ানো একটি ফাংশন।' },
          returns: { en: 'Marks the update interruptible — typing stays smooth during heavy renders.', bn: 'আপডেটকে খণ্ডনযোগ্য চিহ্নিত করে — ভারী রেন্ডারেও টাইপিং মসৃণ থাকে।' },
          example: 'startTransition(() => setQuery(input.value))',
        },
      ],
    },
    {
      group: 'JSX essentials',
      methods: [
        {
          name: '{expression}',
          signature: '{value}',
          params: { en: 'Any JavaScript expression evaluated in this render.', bn: 'এই রেন্ডারে প্রকাশিত যেকোনো জাভাস্ক্রিপ্ট এক্সপ্রেশন।' },
          returns: { en: 'Interpolates values; null/false/undefined render nothing.', bn: 'মান বসায়; null/false/undefined কিছুই রেন্ডার করে না।' },
          example: '<p>{user ? user.name : "অতিথি"}</p>',
        },
        {
          name: 'key',
          signature: '<Item key={item.id} />',
          params: { en: 'A stable, unique-per-sibling string — an ID, not an index.', bn: 'স্থিতিশীল, ভাইদের মধ্যে অনন্য স্ট্রিং — আইডি, ইনডেক্স নয়।' },
          returns: { en: 'Identity for reconciliation: survives sorting and deletion.', bn: 'reconciliation-এর পরিচয়: সাজানো-মুছে ফেলা টিকে।' },
          example: 'todos.map(t => <li key={t.id}>{t.text}</li>)',
        },
        {
          name: 'children',
          signature: '<Layout>{content}</Layout>',
          params: { en: 'Everything nested between the tags arrives as props.children.', bn: 'ট্যাগের ভেতরে যা কিছু, সব props.children হিসেবে আসে।' },
          returns: { en: 'Composition: children do NOT re-render when the wrapper re-renders.', bn: 'কম্পোজিশন: মোড়ক রি-রেন্ডার হলেও children রি-রেন্ডার হয় না।' },
          example: '<Card><ExpensiveChart /></Card>  // চাইল্ড জাফিউরিতে ঠাণ্ডা থাকে',
        },
        {
          name: 'Fragment',
          signature: '<>…</>',
          params: { en: 'Groups siblings without adding a DOM node.', bn: 'DOM নোড না বাড়িয়ে ভাইদের একত্র করে।' },
          returns: { en: 'Multiple roots from one component; <Fragment key=…> allows keys in lists.', bn: 'এক কম্পোনেন্ট থেকে একাধিক রুট; তালিকায় key দিতে <Fragment key=…>।' },
          example: 'rows.map(r => <Fragment key={r.id}><dt>{r.k}</dt><dd>{r.v}</dd></Fragment>)',
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Counter Without a Counter', bn: 'কাউন্টার ছাড়াই কাউন্টার' },
      diff: 'beginner',
      desc: {
        en: 'Build a step-counter where ALL visible numbers are derived from ONE state array of clicks. Prove UI = f(state) by deleting every “total” variable.',
        bn: 'এমন ধাপ-কাউন্টার বানান যেখানে দৃশ্যমান প্রতিটি সংখ্যা ক্লিকের একটি মাত্র স্টেট অ্যারে থেকে জন্ম নেয়। প্রতিটি "মোট" ভেরিয়েবল মুছে UI = f(state) প্রমাণ করুন।',
      },
    },
    {
      title: { en: 'Re-render Budget App', bn: 'রি-রেন্ডার বাজেট অ্যাপ' },
      diff: 'intermediate',
      desc: {
        en: 'A todo list WITH a render-count display per row (trick: increment in useEffect). Now sort, filter, and delete — and get every row except the touched one to stay at its count, using keys + memo + stable props.',
        bn: 'টুডু তালিকা, সাথে সারিপ্রতি রেন্ডার-সংখ্যা প্রদর্শন (কৌশল: useEffect-এ বৃদ্ধি)। এবার সাজান, ছাঁকুন, মুছুন — আর key + memo + স্থির props দিয়ে স্পর্শিত সারি ছাড়া সবার সংখ্যা স্থির রাখুন।',
      },
    },
    {
      title: { en: 'Stale Closure Safari', bn: 'Stale Closure সাফারি' },
      diff: 'advanced',
      desc: {
        en: 'Deliberately write the five classic stale-closure bugs (interval, listener, debounce, async, subscribe) in tiny demos, screen-record each failure, then fix each with the updater form or correct deps. Your demo reel becomes a debugging interview artifact.',
        bn: 'ইচ্ছাকৃতভাবে পাঁচটি ক্লাসিক stale-closure বাগ লিখুন (ইন্টারভাল, লিসেনার, ডিবাউন্স, অ্যাসিংক, সাবস্ক্রাইব) ছোট ডেমোতে, প্রতিটি ব্যর্থতা রেকর্ড করুন, তারপর আপডেটার রূপ বা সঠিক deps দিয়ে ঠিক করুন। আপনার ডেমো রিলই হবে ডিবাগিং ইন্টারভিউর প্রমাণপত্র।',
      },
    },
  ],
  bestPractices: [
    { en: 'Mental model before tooling: state lives at the owner; intent travels up via callbacks.', bn: 'টুলের আগে মানসিক মডেল: স্টেট মালিকের কাছে; উদ্দেশ্য কলব্যাকে উপরে ওঠে।' },
    { en: 'Never mutate state; always produce new references so the diff can SEE the change.', bn: 'স্টেট কখনো মিউটেট নয়; সবসময় নতুন রেফারেন্স বানান যাতে diff পরিবর্তন দেখতে পায়।' },
    { en: 'Keys are identities from your DATA (ids), never from positions (index) — unless the list is static.', bn: 'key আসে আপনার ডেটা থেকে (আইডি), অবস্থান থেকে (ইনডেক্স) নয় — তালিকা স্থির না হলে কখনো নয়।' },
    { en: 'Compose before optimize: children and colocated state fix renders memo cannot.', bn: 'অপ্টিমাইজের আগে কম্পোজ: children আর কোলোকেটেড স্টেট এমন রেন্ডার ঠিক করে যা memo পারে না।' },
    { en: 'Every closure inside a hook owns ONE render’s variables — treat them as snapshots, not links.', bn: 'হুকের ভেতর প্রতিটি ক্লোজারের মালিকানায় একটি রেন্ডারের ভেরিয়েবল — এগুলোকে স্ন্যাপশট ভাবুন, লিংক নয়।' },
    { en: 'Measure with the Profiler before reaching for useMemo; unmeasured memo is debt.', bn: 'useMemo ছোঁয়ার আগে Profiler-এ মাপুন; না-মাপা memo হলো ঋণ।' },
  ],
  interview: [
    {
      q: { en: 'What happens between setState and the pixels changing?', bn: 'setState থেকে পিক্সেল বদলানো পর্যন্ত কী ঘটে?' },
      a: {
        en: 'setState schedules a render of the owning component and its subtree. React re-invokes those functions, producing a new element tree, reconciles it against the previous by type+key, computes the minimal DOM operations, and commits them — layout and paint follow from the browser side.',
        bn: 'setState মালিক কম্পোনেন্ট ও তার সাবট্রির রেন্ডারের সময় ঠিক করে। React সেই ফাংশনগুলো পুনরায় ডেকে নতুন এলিমেন্ট ট্রি বানায়, টাইপ+key দিয়ে আগেরটার সাথে reconcile করে, ন্যূনতম DOM কাজ বের করে কমিট করে — লেআউট ও পেইন্ট ব্রাউজারের পালা।',
      },
    },
    {
      q: { en: 'Why do index keys break reordered lists?', bn: 'সারি-বদলকারী তালিকায় index key কেন ভাঙে?' },
      a: {
        en: 'React matches children across renders by key. An index key claims identity = position, so after a sort, item #3’s DOM node (with its input state and focus) is patched to show item #7’s data. Identity must come from the data — a stable id survives reorder, deletion, and insertion.',
        bn: 'React রেন্ডারে রেন্ডারে চাইল্ড মেলায় key দিয়ে। index key দাবি করে পরিচয় = অবস্থান, তাই সাজানোর পর #৩ আইটেমের DOM নোড (ইনপুট স্টেট, ফোকাসসহ) প্যাচ হয়ে দেখায় #৭-এর ডেটা। পরিচয় আসতে হবে ডেটা থেকে — স্থায়ী আইডি সাজানো, মুছে ফেলা, ঢোকানো সব টিকে।',
      },
    },
    {
      q: { en: 'memo, useMemo, useCallback — what separates them?', bn: 'memo, useMemo, useCallback — পার্থক্য কোথায়?' },
      a: {
        en: 'memo wraps a component to skip renders when props are shallowly equal. useMemo memoizes a VALUE (usually to keep a reference stable so memo downstream stays honest). useCallback is useMemo specialized for functions. All three are the same contract: stable identity until deps change — useful only when that identity feeds reconciliation or equality.',
        bn: 'memo কম্পোনেন্ট মোড়ে যাতে props অগভীরভাবে সমান হলে রেন্ডার বাদ যায়। useMemo মান মেমো করে (সাধারণত রেফারেন্স স্থির রাখতে, যাতে নিচের memo সৎ থাকে)। useCallback হলো ফাংশনের জন্য বিশেষায়িত useMemo। তিনটিই এক চুক্তি: deps না বদললে স্থায়ী পরিচয় — কাজে লাগে কেবল যখন সেই পরিচয় খাওয়ানো হয় reconciliation বা সমতাকে।',
      },
    },
    {
      q: { en: 'A teammate’s counter stops at 1 inside setInterval. Diagnose in 30 seconds.', bn: 'সহকর্মীর কাউন্টার setInterval-এর ভেতরে ১-এ আটকে গেছে। ৩০ সেকেন্ডে নির্ণয় করুন।' },
      a: {
        en: 'Stale closure: the interval callback was created on render #1 and captured count = 0 forever, so count + 1 is eternally 1. Fix with the updater form setCount(c => c + 1), which React executes against the freshest state, or add count to deps and recreate the interval.',
        bn: 'Stale closure: ইন্টারভাল কলব্যাক তৈরি হয়েছিল রেন্ডার #১-এ আর বন্দি করেছে count = 0 চিরকালের জন্য, ফলে count + 1 অনন্তকাল ১। সমাধান আপডেটার রূপ setCount(c => c + 1), যা React সর্বশেষ স্টেটের বিরুদ্ধে চালায়, অথবা deps-এ count দিয়ে ইন্টারভাল পুনঃসৃষ্টি।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Every dashboard you have used (Notion, Linear, Vercel) is this lesson in production: state trees, derived views, and aggressive composition to avoid re-render storms.',
      bn: 'আপনার ব্যবহৃত প্রতিটি ড্যাশবোর্ড (Notion, Linear, Vercel) প্রোডাকশনে এই লেসনই: স্টেট ট্রি, জন্মলব্ধ ভিউ, আর রি-রেন্ডার ঝড় এড়াতে তীব্র কম্পোজিশন।',
    },
    {
      en: 'React Server Components run the SAME render machinery on the server and stream the description as HTML — the mental model you built here transfers unchanged.',
      bn: 'React Server Components সার্ভারে হুবহু এই রেন্ডার কল কাঁচল চালিয়ে বর্ণনা HTML হিসেবে স্ট্রিম করে — এখানে গড়া মানসিক মডেল অক্ষত সঙ্গে যায়।',
    },
    {
      en: 'React Native renders to native views, not DOM — but reconciliation, keys, and memo behave identically. One mental model, every screen.',
      bn: 'React Native রেন্ডার করে নেটিভ ভিউতে, DOM-এ নয় — কিন্তু reconciliation, key আর memo হুবহু আচরণ করে। এক মানসিক মডেল, সব স্ক্রিন।',
    },
    {
      en: 'The “highlight re-renders” option in React DevTools turns the Re-render Lab into an overlay on YOUR production app — the best debugging weapon most teams never enable.',
      bn: 'React DevTools-এর "highlight re-renders" অপশন Re-render Lab-কে আপনার প্রোডাকশন অ্যাপের ওপর ওভারলে বানিয়ে দেয় — বেশিরভাগ দল যে সেরা ডিবাগিং অস্ত্রটি কখনো চালুই করে না।',
    },
  ],
};
