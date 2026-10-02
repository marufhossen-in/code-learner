import type { Lesson } from '../../../lib/types';

export const ProxiesAndTheTrapLesson: Lesson = {
  slug: 'proxies-and-the-trap',
  tech: 'lang-javascript',
  title: {
    en: 'Proxies and the Trap — Metaprogramming, Reflect API, and Reactivity',
    bn: 'প্রক্সি ও ট্র্যাপ — মেটা-প্রোগ্রামিং, রিফ্লেক্ট এপিআই ও রিঅ্যাক্টিভিটি',
  },
  summary: {
    en: 'Master JavaScript metaprogramming with Proxies and the Reflect API: intercept property access with get and set traps, guarantee correct receiver context, enforce runtime validation rules, and understand how modern frameworks like Vue 3 implement reactive data binding.',
    bn: 'প্রক্সি ও রিফ্লেক্ট এপিআই দিয়ে জাভাস্ক্রিপ্ট মেটা-প্রোগ্রামিং আয়ত্ত করুন: get ও set ট্র্যাপ দিয়ে প্রপার্টি অ্যাক্সেস নিয়ন্ত্রণ, সঠিক রিসিভার কনটেক্সট নিশ্চিত করা, রানটাইম ভ্যালিডেশন এবং Vue 3 এর মতো আধুনিক ফ্রেমওয়ার্কের রিঅ্যাক্টিভ ডেটা বাইন্ডিং কৌশল।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Intercepting fundamental runtime operations', bn: 'WHAT — রানটাইমের মৌলিক অপারেশন নিয়ন্ত্রণ' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build reactive state engines, data validation schemas, or telemetry interceptors in modern JavaScript, Proxies provide the foundational metaprogramming capability to intercept and customize low-level object operations. By wrapping a target object with a Proxy instance and defining specialized trap handlers (such as get, set, and has), you can interpose custom logic whenever properties are read, written, or verified. Pairwise with the Reflect object—which mirrors every trap method with proper receiver context—Proxies eliminate intrusive getters and setters across entire object trees. Understanding this interception mechanism is what unlocks the reactive state models powering modern frameworks like Vue 3.',
        bn: 'যখন আপনি আধুনিক জাভাস্ক্রিপ্টে রিঅ্যাক্টিভ স্টেট ইঞ্জিন, ডেটা ভ্যালিডেশন স্কিমা বা টেলিমেট্রি ইন্টারসেপ্টর তৈরি করেন, তখন প্রক্সি অবজেক্টের নিম্ন-স্তরের কাজগুলো নিয়ন্ত্রণ ও কাস্টমাইজ করার মৌলিক মেটা-প্রোগ্রামিং সুবিধা দেয়। একটি টার্গেট অবজেক্টকে প্রক্সি দিয়ে ঘিরে বিশেষ ট্র্যাপ হ্যান্ডলার (যেমন get, set ও has) সংজ্ঞায়িত করে আপনি যেকোনো প্রপার্টি পড়া, লেখা বা যাচাই করার সময় নিজস্ব লজিক চালাতে পারেন। সঠিক রিসিভার কনটেক্সট নিশ্চিত করতে প্রতিটি ট্র্যাপের জন্য রিফ্লেক্ট অবজেক্টের পরিপূরক মেথড রয়েছে। এই ইন্টারসেপশন ব্যবস্থা আয়ত্ত করাই হলো Vue 3 এর মতো আধুনিক ফ্রেমওয়ার্কগুলোর রিঅ্যাক্টিভ স্টেট মডেলের আসল রহস্য।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Proxy trap intercepting client mutation and forwarding via Reflect', bn: 'প্রক্সি ট্র্যাপের মাধ্যমে ক্লায়েন্ট মিউটেশন নিয়ন্ত্রণ ও রিফ্লেক্ট দিয়ে পাঠানো' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript Proxy and Reflect interceptor diagram">
<rect x="25" y="45" width="140" height="130" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="95" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">CALLER SCRIPT</text>
<text x="35" y="98" font-family="monospace" font-size="9" fill="currentColor">proxy.cpu = 8;</text>
<text x="35" y="120" font-family="monospace" font-size="9" fill="currentColor">proxy.mem = 32;</text>
<text x="35" y="145" font-size="9" fill="#2563eb">Direct property write</text>

<line x1="165" y1="110" x2="225" y2="110" stroke="#2563eb" stroke-width="2"/>
<polygon points="225,106 235,110 225,114" fill="#2563eb"/>

<rect x="235" y="35" width="170" height="150" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="320" y="58" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">PROXY HANDLER TRAPS</text>
<text x="245" y="85" font-family="monospace" font-size="9" fill="currentColor">set(target, prop, val) {</text>
<text x="255" y="105" font-size="9" fill="#166534">1. Validate (val > 0)</text>
<text x="255" y="125" font-size="9" fill="#166534">2. Trigger reactivity</text>
<text x="255" y="145" font-family="monospace" font-size="9" fill="#166534">3. Reflect.set(...)</text>
<text x="245" y="165" font-family="monospace" font-size="9" fill="currentColor">}</text>

<line x1="405" y1="110" x2="465" y2="110" stroke="#16a34a" stroke-width="2"/>
<polygon points="465,106 475,110 465,114" fill="#16a34a"/>

<rect x="475" y="45" width="145" height="130" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="547" y="70" text-anchor="middle" font-size="11" font-weight="800" fill="#6b21a8">TARGET OBJECT</text>
<text x="485" y="98" font-family="monospace" font-size="9" fill="currentColor">cpuLimit = 8</text>
<text x="485" y="120" font-family="monospace" font-size="9" fill="currentColor">memoryLimit = 32</text>
<text x="485" y="145" font-size="9" fill="#6b21a8">Total: 40 units (2 fields)</text>

<text x="320" y="215" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Proxies intercept operations transparently; Reflect forwards calls with correct receiver context</text>
</svg>`,
      caption: {
        en: 'The Proxy traps set mutations on cpuLimit (8) and memoryLimit (32), validating assignments before forwarding to the target via Reflect.set to allocate 40 total units across 2 limits.',
        bn: 'প্রক্সি ট্র্যাপ cpuLimit (৮) ও memoryLimit (৩২) এর পরিবর্তন আটকে যাচাই করে এবং Reflect.set এর মাধ্যমে পাঠিয়ে ২টি লিমিটে মোট ৪০ ইউনিট বরাদ্দ নিশ্চিত করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Proxy',
          def: {
            en: 'A wrapper object that intercepts fundamental operations (reads, writes, calls) on a target object via handler traps.',
            bn: 'এমন একটি মোড়ক অবজেক্ট যা হ্যান্ডলার ট্র্যাপের মাধ্যমে টার্গেট অবজেক্টের মৌলিক কাজগুলো (পড়া, লেখা, কল) নিয়ন্ত্রণ করে।',
          },
        },
        {
          term: 'Handler trap',
          def: {
            en: 'An interception method defined on a proxy handler (such as get or set) invoked when an operation is performed.',
            bn: 'প্রক্সি হ্যান্ডলারে সংজ্ঞায়িত একটি বিশেষ মেথড (যেমন get বা set) যা কোনো অপারেশন চলাকালে স্বয়ংক্রিয়ভাবে চালু হয়।',
          },
        },
        {
          term: 'Reflect API',
          def: {
            en: 'A built-in object providing methods for interceptable JavaScript operations, forwarding calls to targets with correct receiver context.',
            bn: 'একটি বিল্ট-ইন অবজেক্ট যা প্রতিটি অপারেশনের পরিপূরক মেথড সরবরাহ করে সঠিক রিসিভার কনটেক্সটসহ টার্গেটে কল পাঠিয়ে দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Transparent reactivity and runtime schema validation', bn: 'কেন — স্বচ্ছ রিঅ্যাক্টিভিটি ও রানটাইম স্কিমা ভ্যালিডেশন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Automated dependency tracking: eliminate manual event listeners by capturing property reads inside computed effects automatically.', bn: 'স্বয়ংক্রিয় ডিপেনডেন্সি ট্র্যাকিং: কোনো ম্যানুয়াল ইভেন্ট লিসেনার ছাড়াই প্রপার্টি পড়ার সময় সরাসরি ডিপেনডেন্সি ট্র্যাক করা যায়।' },
        { en: 'Zero-overhead validation: intercept malformed strings or negative numbers before state mutations pollute persistent database records.', bn: 'তাৎক্ষণিক ভ্যালিডেশন: ভুল ডেটা বা নেতিবাচক সংখ্যা স্টেট স্টোরে ঢোকার পূর্বেই আটকে দিয়ে সিস্টেমকে নিরাপদ রাখা যায়।' },
        { en: 'Virtual property synthesis: implement negative array indexing (arr[-1]) or mock external services dynamically without hardcoding keys.', bn: 'ভার্চুয়াল প্রপার্টি তৈরি: হার্ডকোড না করেই নেগেটিভ অ্যারে ইনডেক্সিং (arr[-1]) বা মক সার্ভিসের মতো গতিশীল ফিচার তৈরি করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Intercepting with Proxies in 4 steps', bn: 'HOW — ৪টি ধাপে প্রক্সি দিয়ে নিয়ন্ত্রণ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Create target state', bn: '১. মূল অবজেক্ট তৈরি' }, text: { en: 'Instantiate the raw target object holding baseline state.', bn: 'প্রাথমিক স্টেট ধারণকারী মূল টার্গেট অবজেক্ট তৈরি করুন।' } },
        { title: { en: '2. Declare traps', bn: '২. ট্র্যাপ ঘোষণা' }, text: { en: 'Author get and set methods inside a handler object.', bn: 'একটি হ্যান্ডলার অবজেক্টে get ও set ট্র্যাপ মেথড সংজ্ঞায়িত করুন।' } },
        { title: { en: '3. Forward with Reflect', bn: '৩. রিফ্লেক্ট দিয়ে পাঠানো' }, text: { en: 'Invoke Reflect.get/set with target, prop, and receiver.', bn: 'সঠিক রিসিভারসহ Reflect.get ও Reflect.set মেথড কল করুন।' } },
        { title: { en: '4. Instantiate Proxy', bn: '৪. প্রক্সি ইনস্ট্যান্স তৈরি' }, text: { en: 'Wrap with new Proxy(target, handler) and expose proxy.', bn: 'new Proxy(target, handler) দিয়ে ঘিরে প্রক্সি উন্মুক্ত করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'proxy_validation_sim.js',
      code: `// Simulated reactive state store with validation traps
const storeTarget = { cpuLimit: 4, memoryLimit: 16 };
let writeInterceptions = 0;

const stateProxy = new Proxy(storeTarget, {
  get(target, prop, receiver) {
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    if (typeof value === "number" && value > 0) {
      writeInterceptions++;
      return Reflect.set(target, prop, value, receiver);
    }
    return false;
  }
});

// Perform 2 validated state mutations
stateProxy.cpuLimit = 8;     // mutation 1
stateProxy.memoryLimit = 32; // mutation 2

const totalAllocatedUnits = stateProxy.cpuLimit + stateProxy.memoryLimit;

console.log("JavaScript Proxy Metaprogramming Simulation:");
console.log("Validated write interceptions: " + writeInterceptions + " across 2 fields");
console.log("Updated CPU: " + stateProxy.cpuLimit + ", Memory: " + stateProxy.memoryLimit + "GB");
console.log("Total allocated capacity: " + totalAllocatedUnits + " units across 2 limits");

// Output:
// JavaScript Proxy Metaprogramming Simulation:
// Validated write interceptions: 2 across 2 fields
// Updated CPU: 8, Memory: 32GB
// Total allocated capacity: 40 units across 2 limits`,
      caption: {
        en: 'The simulation performs 2 validated mutations updating cpuLimit to 8 and memoryLimit to 32GB, summing to 40 total allocated units across 2 limits.',
        bn: 'সিমুলেশনটি ২টি বৈধ মিউটেশনের মাধ্যমে cpuLimit ৮ ও memoryLimit ৩২GB তে আপডেট করে ২টি লিমিটে মোট ৪০ ইউনিট বরাদ্দ রেকর্ড করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive proxy validation lab', bn: 'INSIDE — জীবন্ত প্রক্সি ভ্যালিডেশন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Test metaprogramming traps. Mutating cpuLimit to 8 and memoryLimit to 32 triggers 2 validated write interceptions, yielding an aggregated capacity of 40 units across 2 limits. Setting invalid strings or negative numbers is rejected cleanly by the trap handler before mutating state.',
        bn: 'মেটা-প্রোগ্রামিং ট্র্যাপ পরীক্ষা করুন। cpuLimit ৮ এবং memoryLimit ৩২ এ পরিবর্তনের ফলে ২টি সফল ভ্যালিডেশন ইন্টারসেপশন ঘটে, যা ২টি লিমিটে মোট ৪০ ইউনিট উৎপন্ন করে। ভুল স্ট্রিং বা নেতিবাচক সংখ্যা দিলে ট্র্যাপ তা সরাসরি আটকে দেয়।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Proxy lab (mutate limits, press Run)', bn: 'Proxy lab (লিমিট পরিবর্তন করুন, Run)' },
      html: '<h3>JavaScript Proxy Trap Validation</h3>\n<pre id="out"></pre>\n<p>Intercepting object mutations via Proxy set traps.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const t = { cpu: 4, mem: 16 };\nlet count = 0;\nconst p = new Proxy(t, { set(o, k, v) { if (v > 0) { count++; o[k] = v; return true; } return false; } });\np.cpu = 8;\np.mem = 32;\nconst tot = p.cpu + p.mem;\nconsole.log("total: " + tot);\ndocument.getElementById("out").textContent = "Writes: " + count + " · CPU: " + p.cpu + " · Mem: " + p.mem + "GB · Total: " + tot + " units (2 limits ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Metaprogramming architecture rules', bn: 'ফলাফল — মেটা-প্রোগ্রামিং আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Always forward with Reflect: pass receiver to Reflect.get and Reflect.set to ensure getter/setter this binds to the proxy instance.', bn: 'সর্বদা Reflect দিয়ে ফরোয়ার্ড করুন: রিসিভার পাস করলে গেটার ও সেটারে this এর মান সঠিকভাবে প্রক্সি ইনস্ট্যান্সে বজায় থাকে।' },
        { en: 'The set trap must return boolean: returning true indicates success; returning false in strict mode throws a TypeError.', bn: 'set ট্র্যাপে সর্বদা বুলিয়ান রিটার্ন করতে হবে: true দিলে সফল বোঝায় এবং স্ট্রিক্ট মোডে false দিলে TypeError দেখা দেয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common Proxy pitfalls', bn: 'ডিবাগ — প্রক্সি ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Loss of this binding without Reflect receiver', bn: 'Reflect রিসিভার ছাড়া this বাইন্ডিং হারিয়ে যাওয়া' },
      text: {
        en: 'If a target object contains a getter that references this.otherProp, calling target[prop] inside a get trap without Reflect.get(target, prop, receiver) will cause this inside the getter to point to the raw unproxied target rather than the reactive proxy.',
        bn: 'টার্গেট অবজেক্টের গেটারে যদি this.otherProp থাকে, তবে get ট্র্যাপে Reflect.get(target, prop, receiver) ছাড়া সরাসরি কল করলে this মূল টার্গেটকে নির্দেশ করে ফেলে এবং রিঅ্যাক্টিভিটি নষ্ট হয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Revocable proxies for security isolation via Proxy.revocable', bn: 'Proxy.revocable দিয়ে সাময়িক নিরাপদ স্যান্ডবক্স তৈরি' },
      text: {
        en: 'When passing sensitive objects into third-party plugins, construct them using const { proxy, revoke } = Proxy.revocable(target, handler). Once the plugin task completes, calling revoke() immediately severs all access, causing subsequent property reads to throw TypeErrors.',
        bn: 'থার্ড-পার্টি প্লাগইনে স্পর্শকাতর অবজেক্ট দেওয়ার সময় Proxy.revocable ব্যবহার করুন। প্লাগইনের কাজ শেষ হলে revoke() কল করলে সাথে সাথে প্রক্সির সমস্ত অ্যাক্সেস বন্ধ হয়ে যায়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production Proxy architectures', bn: 'বাস্তব ক্ষেত্র — আধুনিক ইন্ডাস্ট্রিয়াল প্রক্সি প্যাটার্ন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Vue 3 Reactivity system: the reactive() API wraps plain JavaScript objects in Proxies to intercept get/set calls for automatic UI rendering.', bn: 'Vue 3 রিঅ্যাক্টিভিটি: reactive() এপিআই সাধারণ অবজেক্টকে প্রক্সি দিয়ে ঘিরে ফেলে যাতে প্রপার্টি বদলালে স্বয়ংক্রিয়ভাবে ইউআই রিরেন্ডার হয়।' },
        { en: 'Immer immutable state: wraps draft states in Proxies to record write mutations, generating freeze-cloned immutable states cleanly.', bn: 'Immer লাইব্রেরি: ড্রাফট স্টেটকে প্রক্সি দিয়ে ট্র্যাক করে খুব সহজে অপরিবর্তনীয় স্টেট তৈরি করার সুবিধা প্রদান করে।' },
        { en: 'API client auto-routing: trpc and RPC clients utilize Proxies to construct remote endpoint URL strings dynamically on nested property chains.', bn: 'RPC ক্লায়েন্ট রাউটিং: tRPC এর মতো আধুনিক লাইব্রেরি প্রক্সি ব্যবহার করে নেস্টেড প্রপার্টি কল থেকে স্বয়ংক্রিয়ভাবে সার্ভার ইউআরএল তৈরি করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — The Script Release: Bundling and Production', bn: 'পরবর্তী পাঠ — স্ক্রিপ্ট রিলিজ: বান্ডলিং ও প্রোডাকশন' },
    },
    {
      type: 'para',
      text: {
        en: 'With metaprogramming and Proxies mastered, Lesson 8 concludes the hub with production deployment: modern bundlers (Vite, Rollup), production minification, source maps, and tree-shaken releases.',
        bn: 'মেটা-প্রোগ্রামিং ও প্রক্সি আয়ত্ত করার পর, পাঠ ৮ প্রোডাকশন ডিপ্লয়মেন্ট দিয়ে কোর্সটি সম্পন্ন করবে: আধুনিক বান্ডলার (Vite, Rollup), মিনিফিকেশন, সোর্স ম্যাপ এবং ট্রি-শেকেন রিলিজ।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-prx-ex-1',
      kind: 'mcq',
      topic: 'proxy-purpose',
      question: {
        en: 'What fundamental capability does the JavaScript Proxy object provide to modern software architects?',
        bn: 'আধুনিক সফটওয়্যার আর্কিটেক্টদের জন্য জাভাস্ক্রিপ্ট প্রক্সি অবজেক্ট কোন মৌলিক সুবিধাটি প্রদান করে?',
      },
      options: [
        {
          en: 'It wraps target objects to intercept and customize low-level operations like property reading, writing, and function invocation',
          bn: 'এটি টার্গেট অবজেক্টের প্রপার্টি পড়া, লেখা বা ফাংশন কলের মতো নিম্ন-স্তরের মৌলিক অপারেশন নিয়ন্ত্রণ ও কাস্টমাইজ করতে দেয়',
        },
        {
          en: 'It connects the computer directly to a remote satellite network',
          bn: 'এটি কম্পিউটারকে সরাসরি দূরবর্তী স্যাটেলাইট নেটওয়ার্কে সংযুক্ত করে',
        },
        {
          en: 'It replaces all CSS files with pure HTML code',
          bn: 'এটি সমস্ত সিএসএস ফাইলকে সাধারণ এইচটিএমএল কোড দিয়ে বদলে দেয়',
        },
        {
          en: 'It disables all JavaScript security checks in the operating system',
          bn: 'এটি অপারেটিং সিস্টেমের সমস্ত জাভাস্ক্রিপ্ট নিরাপত্তা যাচাই বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: { en: 'Proxies intercept object operations.', bn: 'প্রক্সি অবজেক্টের অপারেশনগুলো নিয়ন্ত্রণ করে।' },
      explanation: {
        en: 'A Proxy intercepts fundamental object operations using handler traps, enabling validation, logging, and reactivity.',
        bn: 'প্রক্সি হ্যান্ডলার ট্র্যাপের মাধ্যমে অবজেক্টের মৌলিক কাজগুলো আটকে ভ্যালিডেশন, লগিং ও রিঅ্যাক্টিভিটি যুক্ত করার সুযোগ দেয়।',
      },
    },
    {
      id: 'js-prx-ex-2',
      kind: 'mcq',
      topic: 'proxy-sim-capacity',
      question: {
        en: 'In our code walkthrough, what were the updated cpuLimit and memoryLimit values, and what was the total allocated capacity across the 2 limits?',
        bn: 'আমাদের কোড আলোচনায় আপডেট করা cpuLimit এবং memoryLimit এর মান কত ছিল এবং ২টি লিমিটে মোট বরাদ্দ ক্ষমতা কত ছিল?',
      },
      options: [
        { en: 'CPU = 8, Memory = 32GB, total allocated capacity = 40 units across 2 limits', bn: 'সিপিইউ = ৮, মেমরি = ৩২GB, ২টি লিমিটে মোট বরাদ্দ ক্ষমতা = ৪০ ইউনিট' },
        { en: 'CPU = 10, Memory = 50GB, total allocated capacity = 60 units across 2 limits', bn: 'সিপিইউ = ১০, মেমরি = ৫০GB, ২টি লিমিটে মোট বরাদ্দ ক্ষমতা = ৬০ ইউনিট' },
        { en: 'CPU = 2, Memory = 4GB, total allocated capacity = 6 units across 2 limits', bn: 'সিপিইউ = ২, মেমরি = ৪GB, ২টি লিমিটে মোট বরাদ্দ ক্ষমতা = ৬ ইউনিট' },
        { en: 'CPU = 0, Memory = 0GB, total allocated capacity = 0 units across 0 limits', bn: 'সিপিইউ = ০, মেমরি = ০GB, ০টি লিমিটে মোট বরাদ্দ ক্ষমতা = ০ ইউনিট' },
      ],
      answer: 0,
      hint: { en: '8 + 32 = 40 units across 2 limits.', bn: '৮ + ৩২ = ২টি লিমিটে ৪০ ইউনিট।' },
      explanation: {
        en: 'The simulation mutated cpuLimit to 8 and memoryLimit to 32, computing a total allocated capacity of 40 units across 2 limits.',
        bn: 'সিমুলেশনটিতে cpuLimit ৮ ও memoryLimit ৩২ নির্ধারণ করে ২টি লিমিটে মোট ৪০ ইউনিট বরাদ্দ হিসাব করা হয়েছিল।',
      },
    },
    {
      id: 'js-prx-ex-3',
      kind: 'mcq',
      topic: 'reflect-receiver-necessity',
      question: {
        en: 'Why is passing the receiver argument to Reflect.get(target, prop, receiver) critical inside a Proxy get trap?',
        bn: 'প্রক্সি get ট্র্যাপের ভেতরে Reflect.get(target, prop, receiver) এ receiver আর্গুমেন্টটি পাঠানো কেন অত্যন্ত গুরুত্বপূর্ণ?',
      },
      options: [
        {
          en: 'It ensures that any getters defined on the target execute with their this keyword bound to the Proxy instance rather than the raw target',
          bn: 'এটি নিশ্চিত করে যে টার্গেটের যেকোনো গেটারে this কিওয়ার্ডটি কাঁচা টার্গেটের বদলে প্রক্সি ইনস্ট্যান্সের সাথে যুক্ত থাকে',
        },
        {
          en: 'It encrypts the property value before writing to hard disk',
          bn: 'এটি হার্ডডিস্কে লেখার পূর্বে প্রপার্টির মান এনক্রিপ্ট করে',
        },
        {
          en: 'It disables JavaScript garbage collection during the read',
          bn: 'এটি পড়ার সময় জাভাস্ক্রিপ্ট গার্বেজ কালেকশন বন্ধ রাখে',
        },
        {
          en: 'It forces the browser to reload the web page immediately',
          bn: 'এটি ব্রাউজারকে সাথে সাথে ওয়েব পেজ রিলোড করতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: { en: 'Receiver preserves the correct this binding.', bn: 'রিসিভার সঠিক this বাইন্ডিং বজায় রাখে।' },
      explanation: {
        en: 'Passing receiver ensures getter methods access the proxy rather than the underlying target, maintaining reactive tracking.',
        bn: 'রিসিভার পাস করলে গেটার মেথডগুলো মূল টার্গেটের বদলে প্রক্সির সাথে সংযুক্ত থাকে, যা রিঅ্যাক্টিভ ট্র্যাকিং রক্ষা করে।',
      },
    },
    {
      id: 'js-prx-ex-4',
      kind: 'predict',
      topic: 'set-trap-return-type',
      question: {
        en: 'What boolean primitive value must a Proxy set trap return to indicate that the property write was successful (e.g. true)?',
        bn: 'প্রপার্টি লেখা সফল হয়েছে বোঝাতে প্রক্সি set ট্র্যাপকে কোন বুলিয়ান প্রিমিটিভ মানটি ফেরত দিতে হয় (যেমন true)?',
      },
      answer: 'true',
      accept: ['true', 'True'],
      hint: { en: 'Return true on success; false on failure.', bn: 'সফল হলে true ফেরত দিন; ব্যর্থ হলে false।' },
      explanation: {
        en: 'The Proxy set trap must return a boolean: true indicates success; false indicates failure (throwing a TypeError in strict mode).',
        bn: 'প্রক্সি set ট্র্যাপে অবশ্যই বুলিয়ান রিটার্ন করতে হয়: সফলতায় true এবং ব্যর্থতায় false (স্ট্রিক্ট মোডে যা TypeError তৈরি করে)।',
      },
    },
  ],
  quiz: {
    id: 'proxies-trap-quiz',
    title: { en: 'Lesson 7 exam', bn: 'পাঠ ৭ পরীক্ষা' },
    questions: [
      {
        id: 'js-prx-q1',
        kind: 'mcq',
        topic: 'reactivity-engine-core',
        question: {
          en: 'Which modern frontend JavaScript framework famously rebuilt its reactivity system around ECMAScript Proxies in its version 3 release?',
          bn: 'কোন আধুনিক ফ্রন্টএন্ড জাভাস্ক্রিপ্ট ফ্রেমওয়ার্কটি তার ভার্সন ৩ রিলিজের রিঅ্যাক্টিভিটি সিস্টেমকে ইসিএমএস্ক্রিপ্ট প্রক্সির ওপর ভিত্তি করে নতুনভাবে তৈরি করেছিল?',
        },
        options: [
          {
            en: 'Vue.js (Vue 3 reactive() API uses Proxies for automatic dependency tracking)',
            bn: 'Vue.js (Vue 3 এর reactive() এপিআই স্বয়ংক্রিয় ডিপেনডেন্সি ট্র্যাকিংয়ের জন্য প্রক্সি ব্যবহার করে)',
          },
          {
            en: 'jQuery 1.4',
            bn: 'জেকুয়েরি ১.৪ (jQuery 1.4)',
          },
          {
            en: 'Flash ActionScript 2',
            bn: 'ফ্ল্যাশ অ্যাকশনস্ক্রিপ্ট ২ (Flash ActionScript 2)',
          },
          {
            en: 'Apache HTTP Server',
            bn: 'অ্যাপাচি সার্ভার (Apache HTTP Server)',
          },
        ],
        answer: 0,
        hint: { en: 'Vue 3 utilizes Proxies.', bn: 'Vue 3 প্রক্সি ব্যবহার করে।' },
        explanation: {
          en: 'Vue 3 migrated from Object.defineProperty to Proxies for comprehensive object and array mutation reactivity.',
          bn: 'Vue 3 অবজেক্ট ও অ্যারেতে নিখুঁত রিঅ্যাক্টিভিটি নিশ্চিত করতে Object.defineProperty থেকে প্রক্সিতে স্থানান্তরিত হয়েছিল।',
        },
      },
      {
        id: 'js-prx-q2',
        kind: 'mcq',
        topic: 'capacity-sum-verify',
        question: {
          en: 'In our code walkthrough, what was the total allocated capacity computed from stateProxy.cpuLimit (8) plus stateProxy.memoryLimit (32)?',
          bn: 'আমাদের কোড আলোচনায় stateProxy.cpuLimit (৮) এবং stateProxy.memoryLimit (৩২) যোগ করে মোট কত বরাদ্দ ক্ষমতা হিসাব করা হয়েছিল?',
        },
        options: [
          { en: '40 units across 2 limits', bn: '২টি লিমিটে ৪০ ইউনিট' },
          { en: '100 units across 2 limits', bn: '২টি লিমিটে ১০০ ইউনিট' },
          { en: '20 units across 1 limit', bn: '১টি লিমিটে ২০ ইউনিট' },
          { en: '0 units across 0 limits', bn: '০টি লিমিটে ০ ইউনিট' },
        ],
        answer: 0,
        hint: { en: '8 + 32 = 40.', bn: '৮ + ৩২ = ৪০।' },
        explanation: {
          en: 'The simulation resolved cpuLimit 8 and memoryLimit 32, computing a total allocated capacity of 40 units across 2 limits.',
          bn: 'সিমুলেশনটিতে cpuLimit ৮ ও memoryLimit ৩২ যোগ করে ২টি লিমিটে মোট ৪০ ইউনিট পাওয়া গিয়েছিল।',
        },
      },
      {
        id: 'js-prx-q3',
        kind: 'mcq',
        topic: 'revocable-proxy-benefit',
        question: {
          en: 'What architectural security benefit does Proxy.revocable provide when executing untrusted third-party plugins?',
          bn: 'অবিশ্বস্ত থার্ড-পার্টি প্লাগইন চালানোর সময় Proxy.revocable কোন আর্কিটেকচারাল নিরাপত্তা সুবিধা প্রদান করে?',
        },
        options: [
          {
            en: 'Calling revoke() immediately and irrevocably severs all proxy access, throwing errors on subsequent property access attempts',
            bn: 'revoke() কল করার সাথে সাথে প্রক্সির সমস্ত অ্যাক্সেস চিরতরে বন্ধ হয়ে যায় এবং পরবর্তী যেকোনো অনুসন্ধানে এরর দেখায়',
          },
          {
            en: 'It deletes the operating system kernel',
            bn: 'এটি অপারেটিং সিস্টেমের কার্নেল মুছে দেয়',
          },
          {
            en: 'It doubles the RAM hardware capacity',
            bn: 'এটি র্যামের ধারণক্ষমতা দ্বিগুণ করে',
          },
          {
            en: 'It generates bitcoin automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে বিটকয়েন তৈরি করে',
          },
        ],
        answer: 0,
        hint: { en: 'Revoking severs access completely.', bn: 'রিভোক করলে সমস্ত প্রবেশাধিকার বন্ধ হয়ে যায়।' },
        explanation: {
          en: 'Proxy.revocable allows callers to shut off access to the underlying object once an operation finishes.',
          bn: 'Proxy.revocable কাজ শেষ হওয়া মাত্র মূল অবজেক্টের প্রবেশাধিকার চিরতরে বন্ধ করে দেওয়ার সুযোগ দেয়।',
        },
      },
      {
        id: 'js-prx-q4',
        kind: 'predict',
        topic: 'reflect-companion-object',
        question: {
          en: 'What built-in JavaScript object provides 1-to-1 mirror methods for forwarding proxy traps with correct receiver binding (e.g. Reflect)?',
          bn: 'সঠিক রিসিভার বাইন্ডিং সহ প্রক্সি ট্র্যাপ ফরোয়ার্ড করার জন্য কোন বিল্ট-ইন জাভাস্ক্রিপ্ট অবজেক্টটি ১-এর-১ পরিপূরক মেথড সরবরাহ করে (যেমন Reflect)?',
        },
        answer: 'Reflect',
        accept: ['Reflect', 'reflect'],
        hint: { en: 'Reflect API mirrors Proxy traps.', bn: 'Reflect এপিআই প্রক্সি ট্র্যাপের প্রতিচ্ছবি হিসেবে কাজ করে।' },
        explanation: {
          en: 'The Reflect global object hosts static methods matching every Proxy trap handler signature.',
          bn: 'Reflect গ্লোবাল অবজেক্ট প্রতিটি প্রক্সি ট্র্যাপ হ্যান্ডলারের সাথে মিল রেখে স্ট্যাটিক মেথড ধারণ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'the-script-release',
    title: { en: 'The Script Release — Bundling and Production', bn: 'স্ক্রিপ্ট রিলিজ — বান্ডলিং ও প্রোডাকশন' },
  },
};
