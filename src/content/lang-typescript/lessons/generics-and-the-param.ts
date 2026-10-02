import type { Lesson } from '../../../lib/types';

export const GenericsAndTheParamLesson: Lesson = {
  slug: 'generics-and-the-param',
  tech: 'lang-typescript',
  title: {
    en: 'Generics and Type Parameters — Reusable, Safe Abstractions',
    bn: 'জেনেরিক ও টাইপ প্যারামিটার — পুনর্ব্যবহারযোগ্য ও নিরাপদ অ্যাবস্ট্রাকশন',
  },
  summary: {
    en: 'Master TypeScript generics and type parameters: build reusable functions, interfaces, and classes with <T>, apply generic constraints with extends, enforce property lookups using keyof, and eliminate redundant type duplication across data stores.',
    bn: 'টাইপস্ক্রিপ্ট জেনেরিক ও টাইপ প্যারামিটার আয়ত্ত করুন: <T> দিয়ে পুনর্ব্যবহারযোগ্য ফাংশন, ইন্টারফেস ও ক্লাস তৈরি, extends দিয়ে জেনেরিক সীমাবদ্ধতা প্রয়োগ, keyof দিয়ে প্রপার্টি লুকআপ সুরক্ষা এবং ডেটা স্টোরে অপ্রয়োজনীয় টাইপ পুনরাবৃত্তি দূরীকরণ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Parameterizing types for maximum reusability', bn: 'WHAT — পুনর্ব্যবহারের জন্য টাইপ প্যারামিটারাইজেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build scalable components and libraries in TypeScript, you often need functions and data structures that work across multiple data types without sacrificing type safety. Instead of resorting to any, generics introduce type parameters like <T> that act as variables for types rather than runtime values. The caller supplies or allows the compiler to infer the actual type, while your function preserves complete compile-time validation, autocompletion, and return type integrity.',
        bn: 'যখন আপনি টাইপস্ক্রিপ্টে বড় আকারের কম্পোনেন্ট বা লাইব্রেরি তৈরি করেন, তখন আপনাকে প্রায়ই এমন ফাংশন ও ডেটা স্ট্রাকচার লিখতে হয় যা টাইপ নিরাপত্তা নষ্ট না করেই বিভিন্ন ধরনের ডেটার সাথে কাজ করতে পারে। any এর মতো অনিরাপদ সমাধান ব্যবহারের বদলে জেনেরিক <T> এর মতো টাইপ প্যারামিটার চালু করে, যা রানটাইম মানের পরিবর্তে টাইপের ভেরিয়েবল হিসেবে কাজ করে। ব্যবহারকারী নির্দিষ্ট টাইপ প্রদান করে অথবা কম্পাইলার নিজে থেকে তা অনুমান করে নেয়, ফলে আপনার ফাংশনে সম্পূর্ণ কম্পাইল-টাইম যাচাই, অটোকমপ্লিশন এবং রিটার্ন টাইপের নিরাপত্তা বজায় থাকে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Type preservation through generic type parameters', bn: 'জেনেরিক টাইপ প্যারামিটারের মাধ্যমে টাইপ সংরক্ষণ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript generic type parameter flow">
<rect x="20" y="30" width="220" height="90" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="130" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">GENERIC DEFINITION</text>
<text x="35" y="80" font-family="monospace" font-size="11" fill="currentColor">class Store&lt;T extends Id&gt; {</text>
<text x="50" y="100" font-family="monospace" font-size="11" fill="currentColor">  get(id: number): T;</text>
<text x="35" y="115" font-family="monospace" font-size="11" fill="currentColor">}</text>

<line x1="240" y1="75" x2="350" y2="75" stroke="#4f46e5" stroke-width="2"/>
<polygon points="350,70 365,75 350,80" fill="#4f46e5"/>

<rect x="370" y="20" width="250" height="180" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="495" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#166534">INSTANTIATED CALL SITES</text>
<text x="385" y="75" font-family="monospace" font-size="11" fill="currentColor">new Store&lt;Product&gt;();</text>
<text x="385" y="95" font-size="11" fill="#166534">→ get(id) returns Product ✓</text>
<text x="385" y="115" font-size="10" fill="#166534">  Full IDE autocomplete: .price</text>

<line x1="385" y1="130" x2="605" y2="130" stroke="#cbd5e1" stroke-width="1"/>
<text x="385" y="150" font-family="monospace" font-size="11" fill="currentColor">new Store&lt;User&gt;();</text>
<text x="385" y="170" font-size="11" fill="#166534">→ get(id) returns User ✓</text>
<text x="385" y="190" font-size="10" fill="#166534">  Full IDE autocomplete: .email</text>

<rect x="40" y="150" width="280" height="50" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="180" y="170" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">No any casting required</text>
<text x="180" y="188" text-anchor="middle" font-size="10" fill="#854d0e">Exact shapes preserved for each caller</text>
</svg>`,
      caption: {
        en: 'Generics act as type blueprints. Instantiating Store with Product yields a store returning Products, while instantiating with User yields a store returning Users, guaranteeing complete type safety.',
        bn: 'জেনেরিক টাইপের ব্লুপ্রিন্ট হিসেবে কাজ করে। Product দিয়ে Store তৈরি করলে তা Product রিটার্ন করে এবং User দিয়ে তৈরি করলে User রিটার্ন করে, যা পূর্ণাঙ্গ টাইপ নিরাপত্তা দেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Generic type parameter',
          def: {
            en: 'A placeholder identifier (conventionally <T>) representing a type that will be specified when the function, interface, or class is instantiated.',
            bn: 'একটি প্লেসহোল্ডার শনাক্তকারী (সাধারণত <T>) যা এমন একটি টাইপকে নির্দেশ করে যা ফাংশন, ইন্টারফেস বা ক্লাস ব্যবহারের সময় নির্ধারিত হবে।',
          },
        },
        {
          term: 'Generic constraint',
          def: {
            en: 'A rule defined with the extends keyword (e.g. <T extends Identifiable>) that restricts type arguments to those fulfilling a specific shape.',
            bn: 'extends কিওয়ার্ড দিয়ে নির্ধারিত একটি নিয়ম (যেমন <T extends Identifiable>) যা টাইপ আর্গুমেন্টকে নির্দিষ্ট গঠন পূরণ করার শর্তে সীমাবদ্ধ করে।',
          },
        },
        {
          term: 'keyof operator',
          def: {
            en: 'A TypeScript operator that extracts the literal union of all known property keys from an object type.',
            bn: 'টাইপস্ক্রিপ্টের একটি অপারেটর যা কোনো অবজেক্ট টাইপের সমস্ত জানা প্রপার্টি নামের লিটারেল ইউনিয়ন তৈরি করে।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Eliminate dangerous casts and duplicated logic', bn: 'কেন — বিপজ্জনক কাস্টিং ও কোড ডুপ্লিকেশন দূর করা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Preserve input-to-output type relationships: functions return the precise type passed in, unlocking autocomplete without manual casts.', bn: 'ইনপুট ও আউটপুট টাইপের সম্পর্ক রক্ষা: কোনো কাস্টিং ছাড়াই ফাংশন ইনপুটের সঠিক টাইপ ফেরত দেয় এবং পূর্ণ অটো-কমপ্লিশন পাওয়া যায়।' },
        { en: 'Reusability across enterprise domains: generic data structures (caches, queues, repositories) serve all models with zero code duplication.', bn: 'ডোমেনজুড়ে পুনর্ব্যবহারযোগ্যতা: জেনেরিক ডেটা স্ট্রাকচার (ক্যাশ, কিউ, রিপোজিটরি) কোনো ডুপ্লিকেশন ছাড়াই সব মডেলের জন্য কাজ করে।' },
        { en: 'Type-safe property indexing: combining <T, K extends keyof T> guarantees property lookups are verified at compile time.', bn: 'টাইপ-নিরাপদ প্রপার্টি ইনডেক্সিং: <T, K extends keyof T> সমন্বয় করে প্রপার্টি অ্যাক্সেস নিশ্চিত করা হয়, ফলে রানটাইমে আনডিফাইন্ড ভ্যালুর ঝুঁকি থাকে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Generic patterns in 4 steps', bn: 'HOW — ৪টি ধাপে জেনেরিক কৌশল' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Introduce type parameter', bn: '১. টাইপ প্যারামিটার ঘোষণা' }, text: { en: 'Place <T> after the function or class name as a placeholder.', bn: 'ফাংশন বা ক্লাসের নামের পরে প্লেসহোল্ডার হিসেবে <T> যুক্ত করুন।' } },
        { title: { en: '2. Bind signatures', bn: '২. সিগনেচারে ব্যবহার' }, text: { en: 'Use T as parameter types and return types.', bn: 'প্যারামিটার এবং রিটার্ন টাইপ হিসেবে T ব্যবহার করুন।' } },
        { title: { en: '3. Enforce constraints', bn: '৩. সীমাবদ্ধতা প্রয়োগ' }, text: { en: 'Add extends (e.g. <T extends Identifiable>) to require essential fields.', bn: 'আবশ্যক ফিল্ড নিশ্চিত করতে extends (যেমন <T extends Identifiable>) যোগ করুন।' } },
        { title: { en: '4. Constrain keys', bn: '৪. প্রপার্টি কী সীমাবদ্ধকরণ' }, text: { en: 'Use <K extends keyof T> to allow only valid object property names.', bn: '<K extends keyof T> ব্যবহার করে কেবল বৈধ অবজেক্ট প্রপার্টির নাম অনুমোদিত করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'generic_store_sim.ts',
      code: `interface Identifiable {
  id: number;
}

class EntityStore<T extends Identifiable> {
  private items = new Map<number, T>();

  add(item: T): void {
    this.items.set(item.id, item);
  }

  get(id: number): T | undefined {
    return this.items.get(id);
  }

  count(): number {
    return this.items.size;
  }
}

interface Product extends Identifiable {
  name: string;
  price: number;
}

// 1. Create a specialized product store
const store = new EntityStore<Product>();
store.add({ id: 1, name: "Keyboard", price: 75 });
store.add({ id: 2, name: "Mouse", price: 25 });
store.add({ id: 3, name: "Monitor", price: 200 });

console.log("Generic Entity Store Output:");
console.log("Total products stored: " + store.count());
const p2 = store.get(2);
console.log("Fetched item id 2: " + (p2 ? p2.name : "none") + ", price: $" + (p2 ? p2.price : 0));
const totalInventoryValue = 75 + 25 + 200;
console.log("Total inventory value: $" + totalInventoryValue);

// Output:
// Generic Entity Store Output:
// Total products stored: 3
// Fetched item id 2: Mouse, price: $25
// Total inventory value: $300`,
      caption: {
        en: 'The simulation illustrates a generic EntityStore storing 3 products (Keyboard 75, Mouse 25, Monitor 200) yielding a total inventory value of 300 dollars, with item ID 2 retrieved safely as a typed Product.',
        bn: 'সিমুলেশনটি একটি জেনেরিক EntityStore এ ৩টি পণ্য (কিবোর্ড ৭৫, মাউস ২৫, মনিটর ২০০) সংরক্ষণ করে মোট ৩০০ ডলারের ইনভেন্টরি ভ্যালু দেখায়, যেখানে আইডি ২ এর পণ্যটি টাইপ-নিরাপদ প্রোডাক্ট হিসেবে পড়া হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive generic store lab', bn: 'INSIDE — জীবন্ত জেনেরিক স্টোর ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'This simulator demonstrates generic container typing. Three products with prices 75, 25, and 200 dollars populate the store, totalling 300 dollars in inventory. The compiler guarantees that get(2) returns an object known to have a name and price, without manual type assertions.',
        bn: 'এই সিমুলেটরটি জেনেরিক কন্টেইনার টাইপিং প্রদর্শন করে। ৭৫, ২৫ এবং ২০০ ডলার মূল্যের ৩টি পণ্য স্টোরে সংরক্ষিত হয়, যার মোট ইনভেন্টরি মূল্য ৩০০ ডলার। কম্পাইলার নিশ্চিত করে যে get(2) রিটার্ন করা অবজেক্টের নিশ্চিতভাবেই name ও price রয়েছে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Generic store lab (modify products, press Run)', bn: 'Generic store lab (পণ্য পরিবর্তন করুন, Run)' },
      html: '<h3>Generic EntityStore Simulator</h3>\n<pre id="out"></pre>\n<p>Generic constraint preserves item types.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const items = [{ id: 1, name: "Keyboard", price: 75 }, { id: 2, name: "Mouse", price: 25 }, { id: 3, name: "Monitor", price: 200 }];\nconst total = items.reduce((acc, item) => acc + item.price, 0);\nconsole.log("Total value: " + total);\ndocument.getElementById("out").textContent = "Stored: " + items.length + " products · Total value: $" + total + " · ID 2: " + items[1].name + " ($" + items[1].price + ")";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Generic architectural principles', bn: 'ফলাফল — জেনেরিক আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Type parameterization avoids runtime penalties while guaranteeing that callers receive their exact input types upon return.', bn: 'টাইপ প্যারামিটারাইজেশন রানটাইমে কোনো বাড়তি খরচ ছাড়াই কলারকে তার সঠিক ইনপুট টাইপ রিটার্ন নিশ্চিত করে।' },
        { en: 'Generic constraints (<T extends Shape>) prevent indiscriminate use and enable safe access to common required properties.', bn: 'জেনেরিক সীমাবদ্ধতা (<T extends Shape>) যথেচ্ছ ব্যবহার ঠেকায় এবং প্রয়োজনীয় প্রপার্টিতে নিরাপদ অ্যাক্সেস নিশ্চিত করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common generic pitfalls', bn: 'ডিবাগ — জেনেরিকের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Overusing generics for simple parameters', bn: 'সাধারণ প্যারামিটারে জেনেরিকের অপব্যবহার' },
      text: {
        en: 'Adding unnecessary type parameters to simple helper functions increases cognitive load without benefits. When T appears only once in the parameter list and is not returned, omit the generic syntax and type the argument directly.',
        bn: 'সাধারণ হেল্পার ফাংশনে অপ্রয়োজনীয় টাইপ প্যারামিটার যোগ করলে কোড অযথা জটিল হয়। যখন T কেবল প্যারামিটারে একবার ব্যবহৃত হয় এবং রিটার্ন করা হয় না, তখন জেনেরিক সিনট্যাক্স বাদ দিয়ে সরাসরি আর্গুমেন্টের টাইপ লিখে ফেলাই শ্রেয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Missing constraint on keyof lookups', bn: 'keyof লুকআপে সীমাবদ্ধতা মিস করা' },
      text: {
        en: 'When looking up a property dynamically, writing function getProp<T>(obj: T, key: string) loses safety. Cure: write function getProp<T, K extends keyof T>(obj: T, key: K): T[K] to validate keys at compile time.',
        bn: 'গতিশীলভাবে প্রপার্টি খোঁজার সময় function getProp<T>(obj: T, key: string) লিখলে টাইপ নিরাপত্তা নষ্ট হয়। প্রতিকার: compile-time এ কী যাচাই করতে function getProp<T, K extends keyof T>(obj: T, key: K): T[K] লিখুন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Generics in modern production', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল কোডে জেনেরিক' },
    },
    {
      type: 'list',
      items: [
        { en: 'React useState and useRef hooks: useState<User | null>(null) creates strongly typed component states across lifecycle renders.', bn: 'React হুকস: useState<User | null>(null) লাইফসাইকেল রেন্ডারে কম্পোনেন্টের টাইপ-নিরাপদ স্টেট বজায় রাখে।' },
        { en: 'Axios and HTTP fetch clients: axios.get<ApiResponse<User>>("/api/user") validates JSON payloads directly into TypeScript interfaces.', bn: 'Axios ও HTTP ক্লায়েন্ট: axios.get<ApiResponse<User>>("/api/user") জেসন ডেটাকে সরাসরি টাইপস্ক্রিপ্ট ইন্টারফেসে রূপান্তর করে।' },
        { en: 'State management stores (Zustand, Pinia, Redux Toolkit): createStore<AppState>() guarantees action and state alignment across the app.', bn: 'স্টেট স্টোর (Zustand, Pinia, Redux): createStore<AppState>() অ্যাপজুড়ে অ্যাকশন ও স্টেটের পূর্ণ সামঞ্জস্য রক্ষা করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Type Guards and Predicates', bn: 'পরবর্তী পাঠ — টাইপ গার্ড ও প্রেডিকেট' },
    },
    {
      type: 'para',
      text: {
        en: 'With generics mastered, Lesson 5 delves into custom user-defined type guards (arg is Type), the satisfies operator, and advanced runtime narrowing patterns.',
        bn: 'জেনেরিক আয়ত্ত করার পর, পাঠ ৫ কাস্টম ইউজার-ডিফাইন্ড টাইপ গার্ড (arg is Type), satisfies অপারেটর এবং অ্যাডভান্সড রানটাইম ন্যারোয়িং প্যাটার্ন শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-gen-ex-1',
      kind: 'mcq',
      topic: 'generic-syntax',
      question: {
        en: 'Which syntax properly declares a generic function that accepts an argument of type T and returns a value of the same type T?',
        bn: 'কোন সিনট্যাক্সটি সঠিকভাবে একটি জেনেরিক ফাংশন ঘোষণা করে যা T টাইপের আর্গুমেন্ট গ্রহণ করে এবং একই T টাইপের মান ফেরত দেয়?',
      },
      options: [
        { en: 'function identity<T>(arg: T): T { return arg; }', bn: 'function identity<T>(arg: T): T { return arg; }' },
        { en: 'function identity(arg: <T>): T { return arg; }', bn: 'function identity(arg: <T>): T { return arg; }' },
        { en: 'generic function identity(arg: T) { return arg; }', bn: 'generic function identity(arg: T) { return arg; }' },
        { en: 'function identity<T>(arg: any): any { return arg; }', bn: 'function identity<T>(arg: any): any { return arg; }' },
      ],
      answer: 0,
      hint: { en: 'Angle brackets <T> follow the function name before the parameter list.', bn: 'ফাংশনের নামের পরে এবং প্যারামিটার তালিকার আগে অ্যাঙ্গেল ব্র্যাকেট <T> বসে।' },
      explanation: {
        en: 'Declaring <T> immediately after the function name establishes T as a type parameter across the parameter list and return type.',
        bn: 'ফাংশনের নামের ঠিক পর <T> দিলে তা প্যারামিটার ও রিটার্ন টাইপ উভয়ের জন্য T কে একটি টাইপ প্যারামিটার হিসেবে সংজ্ঞায়িত করে।',
      },
    },
    {
      id: 'ts-gen-ex-2',
      kind: 'mcq',
      topic: 'inventory-calc',
      question: {
        en: 'In our code simulation, what was the total inventory value calculated across the 3 products (Keyboard 75, Mouse 25, Monitor 200)?',
        bn: 'আমাদের কোড সিমুলেশনে, ৩টি পণ্যের (কিবোর্ড ৭৫, মাউস ২৫, মনিটর ২০০) মোট ইনভেন্টরি ভ্যালু কত হিসাব করা হয়েছিল?',
      },
      options: [
        { en: 'Total inventory value: $300 across 3 products', bn: '৩টি পণ্যের মোট ইনভেন্টরি ভ্যালু: $৩০০' },
        { en: 'Total inventory value: $150 across 2 products', bn: '২টি পণ্যের মোট ইনভেন্টরি ভ্যালু: $১৫০' },
        { en: 'Total inventory value: $500 across 5 products', bn: '৫টি পণ্যের মোট ইনভেন্টরি ভ্যালু: $৫০০' },
        { en: 'Total inventory value: $100 across 1 product', bn: '১টি পণ্যের মোট ইনভেন্টরি ভ্যালু: $১০০' },
      ],
      answer: 0,
      hint: { en: '75 + 25 + 200 = 300 dollars.', bn: '৭৫ + ২৫ + ২০০ = ৩০০ ডলার।' },
      explanation: {
        en: 'Adding 75 + 25 + 200 yields a total inventory value of 300 dollars for the 3 stored products.',
        bn: '৭৫ + ২৫ + ২০০ যোগ করলে সংরক্ষিত ৩টি পণ্যের মোট ইনভেন্টরি মূল্য দাঁড়ায় ৩০০ ডলার।',
      },
    },
    {
      id: 'ts-gen-ex-3',
      kind: 'mcq',
      topic: 'keyof-lookup',
      question: {
        en: 'What does the constraint <K extends keyof T> accomplish in a generic property lookup helper?',
        bn: 'একটি জেনেরিক প্রপার্টি লুকআপ হেল্পারে <K extends keyof T> সীমাবদ্ধতা কী কাজ করে?',
      },
      options: [
        {
          en: 'It restricts key parameter K to only the valid property names that actually exist on object type T',
          bn: 'এটি কী প্যারামিটার K কে কেবল অবজেক্ট টাইপ T তে বিদ্যমান থাকা বৈধ প্রপার্টি নামের মধ্যেই সীমাবদ্ধ করে',
        },
        {
          en: 'It encrypts the key parameter with RSA-2048 encryption',
          bn: 'এটি কী প্যারামিটারকে আরএসএ-২০৪৮ দিয়ে এনক্রিপ্ট করে',
        },
        {
          en: 'It deletes all properties from object T at runtime',
          bn: 'এটি রানটাইমে অবজেক্ট T থেকে সমস্ত প্রপার্টি মুছে ফেলে',
        },
        {
          en: 'It doubles the execution speed of the V8 JavaScript compiler',
          bn: 'এটি V8 জাভাস্ক্রিপ্ট কম্পাইলারের গতি দ্বিগুণ করে',
        },
      ],
      answer: 0,
      hint: { en: 'keyof produces a union of property names on T.', bn: 'keyof T এর প্রপার্টি নামের একটি ইউনিয়ন তৈরি করে।' },
      explanation: {
        en: 'K extends keyof T ensures that any key passed to the function is a valid member of T, preventing typoed property errors at compile time.',
        bn: 'K extends keyof T নিশ্চিত করে যে ফাংশনে পাস করা যেকোনো কী T এর একটি বৈধ সদস্য, ফলে কম্পাইল-টাইমেই ভুলের সমাধান হয়।',
      },
    },
    {
      id: 'ts-gen-ex-4',
      kind: 'predict',
      topic: 'constraint-keyword',
      question: {
        en: 'Which TypeScript keyword is used to restrict a generic type parameter to a required interface (e.g. <T ... Identifiable>)?',
        bn: 'কোন টাইপস্ক্রিপ্ট কিওয়ার্ডটি জেনেরিক টাইপ প্যারামিটারকে নির্দিষ্ট ইন্টারফেসে সীমাবদ্ধ করতে ব্যবহৃত হয় (যেমন <T ... Identifiable>)?',
      },
      answer: 'extends',
      accept: ['extends', 'extend'],
      hint: { en: 'The same keyword used by interfaces for inheritance.', bn: 'ইন্টারফেস ইনহেরিটেন্সে ব্যবহৃত একই কিওয়ার্ড।' },
      explanation: {
        en: 'The extends keyword specifies a generic constraint, requiring that any provided type must satisfy that base shape.',
        bn: 'extends কিওয়ার্ড জেনেরিক সীমাবদ্ধতা তৈরি করে, যা দাবি করে যে প্রদত্ত যেকোনো টাইপকে অবশ্যই সেই মূল গঠন পূরণ করতে হবে।',
      },
    },
  ],
  quiz: {
    id: 'generics-param-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'ts-gen-q1',
        kind: 'mcq',
        topic: 'generics-advantage',
        question: {
          en: 'Why are generics preferred over using any for reusable data structures in TypeScript?',
          bn: 'টাইপস্ক্রিপ্টে পুনর্ব্যবহারযোগ্য ডেটা স্ট্রাকচারের জন্য any এর চেয়ে জেনেরিক কেন শ্রেয়?',
        },
        options: [
          {
            en: 'Generics preserve exact data types and autocomplete without requiring runtime type assertions',
            bn: 'জেনেরিক কোনো রানটাইম টাইপ অ্যাসারশন ছাড়াই সুনির্দিষ্ট ডেটা টাইপ এবং এডিটর অটোকমপ্লিশন অক্ষুণ্ণ রাখে',
          },
          {
            en: 'Generics run in separate background worker threads',
            bn: 'জেনেরিক আলাদা ব্যাকগ্রাউন্ড ওয়ার্কার থ্রেডে চলে',
          },
          {
            en: 'any causes JavaScript engines to refuse execution completely',
            bn: 'any ব্যবহার করলে জাভাস্ক্রিপ্ট ইঞ্জিন কোড চালানো সম্পূর্ণ বন্ধ করে দেয়',
          },
          {
            en: 'Generics compress the compiled JavaScript file size by half',
            bn: 'জেনেরিক কম্পাইল করা জাভাস্ক্রিপ্ট ফাইলের আকার অর্ধেক কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: { en: 'Generics preserve type information that any throws away.', bn: 'জেনেরিক টাইপ তথ্য সংরক্ষণ করে যা any ফেলে দেয়।' },
        explanation: {
          en: 'Using any turns off type checking, whereas generics remember and track the exact types passed in, preventing bugs.',
          bn: 'any টাইপ চেকার বন্ধ করে দেয়, কিন্তু জেনেরিক ইনপুটের সঠিক টাইপ মনে রাখে এবং ট্র্যাক করে ভুল প্রতিরোধ করে।',
        },
      },
      {
        id: 'ts-gen-q2',
        kind: 'mcq',
        topic: 'product-price',
        question: {
          en: 'In our code simulation, what was the price of item ID 2 (the Mouse) stored in the EntityStore?',
          bn: 'আমাদের কোড সিমুলেশনে EntityStore এ সংরক্ষিত আইডি ২ এর পণ্যটির (মাউস) মূল্য কত ছিল?',
        },
        options: [
          { en: '$25 for item ID 2 (Mouse)', bn: 'আইডি ২ পণ্যের (মাউস) মূল্য $২৫' },
          { en: '$75 for item ID 2 (Mouse)', bn: 'আইডি ২ পণ্যের (মাউস) মূল্য $৭৫' },
          { en: '$200 for item ID 2 (Mouse)', bn: 'আইডি ২ পণ্যের (মাউস) মূল্য $২০০' },
          { en: '$0 for item ID 2 (Mouse)', bn: 'আইডি ২ পণ্যের (মাউস) মূল্য $০' },
        ],
        answer: 0,
        hint: { en: 'Keyboard was 75, Mouse was 25, Monitor was 200.', bn: 'কিবোর্ড ৭৫, মাউস ২৫, মনিটর ২০০।' },
        explanation: {
          en: 'Item ID 2 was explicitly declared as Mouse with price: 25 dollars.',
          bn: 'আইডি ২ পণ্যটি মাউস হিসেবে এবং এর মূল্য স্পষ্টভাবেই ২৫ ডলার ঘোষণা করা হয়েছিল।',
        },
      },
      {
        id: 'ts-gen-q3',
        kind: 'mcq',
        topic: 'default-generic',
        question: {
          en: 'What does syntax like interface ApiResponse<T = string> represent in TypeScript?',
          bn: 'টাইপস্ক্রিপ্টে interface ApiResponse<T = string> সিনট্যাক্সটি কী প্রকাশ করে?',
        },
        options: [
          {
            en: 'A generic type with a default type argument of string if the caller does not provide one',
            bn: 'একটি জেনেরিক টাইপ যাতে কলার কোনো টাইপ না দিলে ডিফল্ট হিসেবে string ব্যবহৃত হয়',
          },
          {
            en: 'An error because generics cannot have default values',
            bn: 'একটি ভুল কারণ জেনেরিকে ডিফল্ট মান থাকতে পারে না',
          },
          {
            en: 'A variable that can only ever store the string "ApiResponse"',
            bn: 'এমন একটি ভেরিয়েবল যা কেবল "ApiResponse" স্ট্রিংটি ধারণ করতে পারে',
          },
          {
            en: 'A command instructing the browser to execute a network request',
            bn: 'ব্রাউজারকে নেটওয়ার্ক রিকোয়েস্ট পাঠানোর নির্দেশ প্রদানকারী কমান্ড',
          },
        ],
        answer: 0,
        hint: { en: '= string specifies a default fallback type.', bn: '= string একটি ডিফল্ট ফলব্যাক টাইপ নির্ধারণ করে।' },
        explanation: {
          en: 'Generic parameters can specify default types using = DefaultType, used when the consumer omits the type argument.',
          bn: 'জেনেরিক প্যারামিটারে = DefaultType দিয়ে ডিফল্ট টাইপ উল্লেখ করা যায়, যা কলার টাইপ উল্লেখ না করলে প্রযোজ্য হয়।',
        },
      },
      {
        id: 'ts-gen-q4',
        kind: 'predict',
        topic: 'letter-convention',
        question: {
          en: 'What single capital letter is universally used by convention as the first generic type parameter identifier?',
          bn: 'কনভেনশন অনুযায়ী প্রথম জেনেরিক টাইপ প্যারামিটার শনাক্তকারী হিসেবে সাধারণত কোন একক বড় হাতের অক্ষরটি ব্যবহৃত হয়?',
        },
        answer: 'T',
        accept: ['T', '<T>'],
        hint: { en: 'The letter standing for Type.', bn: 'Type শব্দের আদ্যক্ষর।' },
        explanation: {
          en: 'By convention across programming languages, T (standing for Type) is the primary generic placeholder name.',
          bn: 'প্রোগ্রামিং ভাষার প্রচলিত নিয়ম অনুসারে Type শব্দের প্রতীক হিসেবে T কে প্রধান জেনেরিক প্লেসহোল্ডার হিসেবে ব্যবহার করা হয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'guards-and-the-predicate',
    title: { en: 'Type Guards and Predicates', bn: 'টাইপ গার্ড ও প্রেডিকেট' },
  },
};
