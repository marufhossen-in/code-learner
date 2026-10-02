import type { Lesson } from '../../../lib/types';

export const PrototypesAndTheChainLesson: Lesson = {
  slug: 'prototypes-and-the-chain',
  tech: 'lang-javascript',
  title: {
    en: 'Prototypes and the Chain — Prototypal Inheritance, Delegation, and Classes',
    bn: 'প্রোটোটাইপ ও চেইন — প্রোটোটাইপাল ইনহেরিটেন্স, ডেলিগেশন ও ক্লাস',
  },
  summary: {
    en: 'Master JavaScript prototypal inheritance: understand how property lookups traverse the prototype chain, create memory-efficient shared methods with Object.create, demystify modern ECMAScript class syntax, and use Object.hasOwn to distinguish direct properties from inherited traits.',
    bn: 'জাভাস্ক্রিপ্ট প্রোটোটাইপাল ইনহেরিটেন্স আয়ত্ত করুন: প্রোটোটাইপ চেইনে প্রপার্টি অনুসন্ধান, Object.create দিয়ে মেমরি-সাশ্রয়ী শেয়ার্ড মেথড গঠন, আধুনিক ইসিএমএস্ক্রিপ্ট ক্লাস এবং অবজেক্টের নিজস্ব প্রপার্টি আলাদা করতে Object.hasOwn এর ব্যবহার।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Dynamic delegation through the prototype chain', bn: 'WHAT — প্রোটোটাইপ চেইনের মাধ্যমে গতিশীল ডেলিগেশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build object-oriented structures in JavaScript, understanding the prototype chain is essential because JavaScript does not implement classical class-based inheritance under the hood. Instead, JavaScript relies on dynamic prototypal delegation: every object contains an internal link to another prototype object. When your code accesses a property or method that does not exist directly on an instance, the engine traverses upward along the prototype chain until it finds the definition or hits null. Modern class syntax provides an ergonomic syntax over this foundational delegation architecture, allowing you to share high-performance methods across thousands of instances without duplicating function allocations.',
        bn: 'যখন আপনি জাভাস্ক্রিপ্টে অবজেক্ট-ওরিয়েন্টেড কাঠামো তৈরি করেন, তখন প্রোটোটাইপ চেইন বোঝা অত্যন্ত জরুরি কারণ জাভাস্ক্রিপ্ট ভেতরে ক্লাসিক্যাল ক্লাস-ভিত্তিক ইনহেরিটেন্স অনুসরণ করে না। এর বদলে জাভাস্ক্রিপ্ট গতিশীল প্রোটোটাইপাল ডেলিগেশনের ওপর নির্ভর করে: প্রতিটি অবজেক্টে অন্য একটি প্রোটোটাইপ অবজেক্টের অভ্যন্তরীণ লিঙ্ক থাকে। যখন আপনার কোড কোনো অবজেক্টের সরাসরি অনুপস্থিত প্রপার্টি বা মেথড অনুসন্ধান করে, তখন ইঞ্জিন প্রোটোটাইপ চেইন বেয়ে ওপরে ওঠে যতক্ষণ না সংজ্ঞাটি পাওয়া যায় বা null এ পৌঁছায়। আধুনিক ক্লাস সিনট্যাক্স এই কাঠামোর ওপর সহজ সিনট্যাক্স প্রদান করে, যা হাজার হাজার ইনস্ট্যান্সে মেথড ডুপ্লিকেট না করে মেমরি সাশ্রয় করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Traversal along the prototype chain terminating at null', bn: 'null এ শেষ হওয়া প্রোটোটাইপ চেইনের অনুসন্ধান প্রবাহ' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="JavaScript prototype chain delegation diagram">
<rect x="20" y="50" width="130" height="120" rx="6" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="85" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">tempSensor</text>
<text x="30" y="105" font-family="monospace" font-size="9" fill="currentColor">watts = 15</text>
<text x="30" y="125" font-family="monospace" font-size="9" fill="currentColor">reading = 75</text>
<text x="30" y="150" font-size="9" fill="#2563eb">[[Prototype]] ↓</text>

<line x1="150" y1="110" x2="190" y2="110" stroke="#2563eb" stroke-width="2"/>
<polygon points="190,106 200,110 190,114" fill="#2563eb"/>

<rect x="200" y="50" width="135" height="120" rx="6" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="267" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">sensorProto</text>
<text x="210" y="105" font-family="monospace" font-size="9" fill="currentColor">readTelemetry()</text>
<text x="210" y="150" font-size="9" fill="#166534">[[Prototype]] ↓</text>

<line x1="335" y1="110" x2="375" y2="110" stroke="#16a34a" stroke-width="2"/>
<polygon points="375,106 385,110 375,114" fill="#16a34a"/>

<rect x="385" y="50" width="130" height="120" rx="6" fill="#faf5ff" stroke="#7e22ce" stroke-width="2"/>
<text x="450" y="75" text-anchor="middle" font-size="11" font-weight="800" fill="#6b21a8">deviceProto</text>
<text x="395" y="105" font-family="monospace" font-size="9" fill="currentColor">getPowerRating()</text>
<text x="395" y="150" font-size="9" fill="#7e22ce">[[Prototype]] ↓</text>

<line x1="515" y1="110" x2="555" y2="110" stroke="#7e22ce" stroke-width="2"/>
<polygon points="555,106 565,110 555,114" fill="#7e22ce"/>

<rect x="565" y="80" width="60" height="60" rx="6" fill="#f1f5f9" stroke="#64748b" stroke-width="2"/>
<text x="595" y="115" text-anchor="middle" font-size="11" font-weight="800" fill="#334155">null</text>

<text x="320" y="210" text-anchor="middle" font-size="11" font-weight="600" fill="currentColor">Property lookups ascend from instance to prototype ancestors until hitting null</text>
</svg>`,
      caption: {
        en: 'Property lookups walk upward from tempSensor to sensorProto, deviceProto, and Object.prototype before terminating at null if unresolved.',
        bn: 'প্রপার্টি অনুসন্ধান tempSensor থেকে sensorProto, deviceProto এবং Object.prototype হয়ে ওপরে ওঠে এবং না পাওয়া গেলে শেষ পর্যন্ত null এ পৌঁছায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Prototype chain',
          def: {
            en: 'The linked series of prototype objects traversed by the runtime when looking up properties or methods.',
            bn: 'প্রপার্টি বা মেথড অনুসন্ধানের সময় রানটাইম কর্তৃক পর্যায়ক্রমে অনুসরণ করা প্রোটোটাইপ অবজেক্টের সংযুক্ত চেইন।',
          },
        },
        {
          term: 'Prototypal delegation',
          def: {
            en: 'An inheritance pattern where objects delegate missing property inquiries upward to their prototype rather than copying properties.',
            bn: 'এমন একটি ইনহেরিটেন্স কাঠামো যেখানে অবজেক্ট প্রপার্টি কপি না করে অনুপস্থিত প্রপার্টির অনুসন্ধান প্রোটোটাইপের কাছে অর্পণ করে।',
          },
        },
        {
          term: 'Property shadowing',
          def: {
            en: 'Defining a property directly on a child object that hides or overrides a same-named property on its prototype.',
            bn: 'সন্তান অবজেক্টে সরাসরি এমন প্রপার্টি সংজ্ঞায়িত করা যা তার প্রোটোটাইপের একই নামের প্রপার্টিকে আড়াল করে দেয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Memory efficiency and dynamic inheritance', bn: 'কেন — মেমরি দক্ষতা ও গতিশীল উত্তরাধিকার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Dramatic memory reduction: allocating methods on a prototype shares one single function instance across millions of created records.', bn: 'অসাধারণ মেমরি সাশ্রয়: প্রোটোটাইপে মেথড রাখলে লক্ষাধিক অবজেক্টের জন্য কেবল একটিমাত্র শেয়ার্ড ফাংশন মেমরিতে বরাদ্দ হয়।' },
        { en: 'Dynamic runtime patching: modifying a prototype method immediately updates execution behavior across all active application objects.', bn: 'গতিশীল রানটাইম প্যাচিং: প্রোটোটাইপে একটি মেথড পরিবর্তন করলে সাথে সাথে সমস্ত জীবিত অবজেক্টে নতুন আচরণ কার্যকর হয়।' },
        { en: 'Reliable key auditing: Object.hasOwn guarantees dictionary lookups do not accidentally match inherited built-in Object properties.', bn: 'নির্ভরযোগ্য কি অডিটিং: Object.hasOwn নিশ্চিত করে যে ডিকশনারি লুকেআপে প্রোটোটাইপের অন্তর্নির্মিত মেথডগুলো ভুলবশত নিজস্ব ডেটা হিসেবে গণ্য হবে না।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Delegating with prototypes in 4 steps', bn: 'HOW — ৪টি ধাপে প্রোটোটাইপ ডেলিগেশন' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Define prototype methods', bn: '১. প্রোটোটাইপ মেথড ঘোষণা' }, text: { en: 'Author reusable shared operations in a common prototype object.', bn: 'একটি সাধারণ প্রোটোটাইপ অবজেক্টে পুনর্ব্যবহারযোগ্য মেথডগুলো সংজ্ঞায়িত করুন।' } },
        { title: { en: '2. Link child prototype', bn: '২. চাইল্ড প্রোটোটাইপ সংযোগ' }, text: { en: 'Use Object.create(parentProto) to establish chain delegation.', bn: 'Object.create(parentProto) দিয়ে চেইন ডেলিগেশন তৈরি করুন।' } },
        { title: { en: '3. Attach direct fields', bn: '৩. নিজস্ব প্রপার্টি যুক্তকরণ' }, text: { en: 'Assign unique data attributes directly onto the child instance.', bn: 'চাইল্ড ইনস্ট্যান্সে সরাসরি স্বতন্ত্র ডেটা প্রপার্টি বরাদ্দ করুন।' } },
        { title: { en: '4. Check ownership', bn: '৪. মালিকানা যাচাই' }, text: { en: 'Audit properties using Object.hasOwn(instance, prop) for safety.', bn: 'নিরাপত্তার জন্য Object.hasOwn(instance, prop) দিয়ে প্রপার্টি যাচাই করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'prototype_chain_sim.js',
      code: `// Base prototype definition
const deviceProto = {
  getPowerRating() {
    return this.watts;
  }
};

// Child prototype linking via Object.create
const sensorProto = Object.create(deviceProto);
sensorProto.readTelemetry = function() {
  return this.reading;
};

// Instance creation
const tempSensor = Object.create(sensorProto);
tempSensor.watts = 15;
tempSensor.reading = 75;

// Direct property vs Prototype lookup
const hasOwnReading = Object.hasOwn(tempSensor, "reading");
const hasOwnPower = Object.hasOwn(tempSensor, "getPowerRating");
const totalMetric = tempSensor.getPowerRating() + tempSensor.readTelemetry();

console.log("Prototype Chain Delegation Results:");
console.log("tempSensor own reading: " + hasOwnReading + ", own getPowerRating: " + hasOwnPower);
console.log("Power: " + tempSensor.getPowerRating() + "W, Reading: " + tempSensor.readTelemetry() + "F");
console.log("Total metric sum: " + totalMetric + " across 2 measurements");

// Output:
// Prototype Chain Delegation Results:
// tempSensor own reading: true, own getPowerRating: false
// Power: 15W, Reading: 75F
// Total metric sum: 90 across 2 measurements`,
      caption: {
        en: 'The simulation links tempSensor through sensorProto to deviceProto: reading 75 degrees and power 15 watts sum to 90 across 2 measurements. Object.hasOwn proves reading is direct while getPowerRating is inherited.',
        bn: 'সিমুলেশনটি tempSensor কে sensorProto ও deviceProto এর সাথে সংযুক্ত করে: ৭৫ ডিগ্রি রিডিং ও ১৫ ওয়াট পাওয়ার যোগ হয়ে ২টি পরিমাপে মোট ৯০ তৈরি করে। Object.hasOwn প্রমাণ করে reading নিজস্ব এবং getPowerRating উত্তরাধিকার সূত্রে প্রাপ্ত।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive prototype delegation lab', bn: 'INSIDE — জীবন্ত প্রোটোটাইপ ডেলিগেশন ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect prototype chain lookup live. Notice how tempSensor retrieves reading directly as an own property, but delegates getPowerRating up through sensorProto into deviceProto. Combining power 15 watts with telemetry 75 degrees produces an aggregated sum of 90 across 2 measurements. Object.hasOwn verifies direct ownership.',
        bn: 'সরাসরি প্রোটোটাইপ চেইনের অনুসন্ধান প্রবাহ পরীক্ষা করুন। লক্ষ্য করুন কীভাবে tempSensor সরাসরি নিজস্ব প্রপার্টি হিসেবে reading গ্রহণ করে, কিন্তু getPowerRating মেথডের জন্য sensorProto পেরিয়ে deviceProto তে পৌঁছায়। ১৫ ওয়াট পাওয়ার এবং ৭৫ ডিগ্রি টেলিমেট্রি যোগ হয়ে ২টি পরিমাপে মোট ৯০ উৎপন্ন করে। Object.hasOwn নিজস্ব মালিকানা নিশ্চিত করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Prototype delegation lab (test properties, press Run)', bn: 'Prototype delegation lab (প্রপার্টি যাচাই করুন, Run)' },
      html: '<h3>JavaScript Prototype Chain</h3>\n<pre id="out"></pre>\n<p>Delegating properties upward through the prototype chain.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const dev = { getP() { return this.w; } };\nconst sens = Object.create(dev);\nsens.getT = function() { return this.r; };\nconst inst = Object.create(sens);\ninst.w = 15;\ninst.r = 75;\nconst tot = inst.getP() + inst.getT();\nconsole.log("total: " + tot);\ndocument.getElementById("out").textContent = "Own reading: " + Object.hasOwn(inst, "r") + " · Own power: " + Object.hasOwn(inst, "getP") + " · Sum: " + tot + " (2 measurements ✓)";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Prototypal architecture rules', bn: 'ফলাফল — প্রোটোটাইপাল আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Classes are syntax over prototypes: ES6 class and extends compile down to standard prototype chain links and [[Prototype]] assignments.', bn: 'ক্লাস মূলত প্রোটোটাইপের ওপর সিনট্যাক্স: ইএস৬ class এবং extends সাধারণ প্রোটোটাইপ চেইন লিঙ্ক হিসেবে কাজ করে।' },
        { en: 'Prefer Object.hasOwn over Object.prototype.hasOwnProperty: Object.hasOwn is immune to objects created with Object.create(null).', bn: 'Object.prototype.hasOwnProperty এর চেয়ে Object.hasOwn বেছে নিন: এটি Object.create(null) দিয়ে তৈরি অবজেক্টেও ত্রুটিহীনভাবে কাজ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common prototype pitfalls', bn: 'ডিবাগ — প্রোটোটাইপ ব্যবহারের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Never mutate Object.prototype directly in library code', bn: 'লাইব্রেরি কোডে সরাসরি Object.prototype পরিবর্তন করবেন না' },
      text: {
        en: 'Adding custom helper methods directly to Object.prototype is called prototype pollution: it pollutes every object in the runtime, causing for...in loops to iterate over unintended keys and breaking third-party dependencies.',
        bn: 'Object.prototype এ সরাসরি কাস্টম মেথড যুক্ত করাকে প্রোটোটাইপ পলিউশন বলা হয়: এটি রানটাইমের প্রতিটি অবজেক্টকে দূষিত করে এবং for...in লুপে অনাকাঙ্ক্ষিত কি প্রদর্শন করে তৃতীয় পক্ষের লাইব্রেরি অচল করে দিতে পারে।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Safe dictionary objects without prototypes via Object.create(null)', bn: 'Object.create(null) দিয়ে নিরাপদ ডিকশনারি অবজেক্ট তৈরি' },
      text: {
        en: 'When creating hash maps or dictionaries to store arbitrary user keys, invoke Object.create(null). This produces a pure dictionary that does not inherit toString or other built-in prototype keys, blocking prototype injection exploits.',
        bn: 'যেকোনো ব্যবহারকারী কি সংরক্ষণের জন্য হ্যাশ ম্যাপ তৈরি করতে Object.create(null) ব্যবহার করুন। এটি একটি খাঁটি ডিকশনারি তৈরি করে যা toString বা অন্যান্য প্রোটোটাইপ মেথড ইনহেরিট করে না, ফলে ইনজেকশন আক্রমণ প্রতিরোধ হয়।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production prototype patterns', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল প্রোটোটাইপ ব্যবহারের ক্ষেত্র' },
    },
    {
      type: 'list',
      items: [
        { en: 'DOM element inheritance: HTMLInputElement inherits from HTMLElement, which inherits from Element, Node, and EventTarget.', bn: 'ডম এলিমেন্ট উত্তরাধিকার: HTMLInputElement ক্লাসটি HTMLElement থেকে ইনহেরিট করে, যা Element, Node ও EventTarget থেকে উদ্ভূত।' },
        { en: 'Custom error subclasses: extending built-in Error (class HttpError extends Error) sets up prototype delegation for stack traces.', bn: 'কাস্টম এরর ক্লাস: বিল্ট-ইন Error ক্লাসকে extends করে কাস্টম এরর বানালে স্ট্যাক ট্রেস অক্ষত রাখার প্রোটোটাইপ ডেলিগেশন কার্যকর হয়।' },
        { en: 'Polyfilling legacy environments: core-js polyfills modern ECMAScript standard methods by augmenting standard prototypes.', bn: 'পলিমরফিজম ও পলিফিল: কোর-জেএস লাইব্রেরি আদর্শ প্রোটোটাইপগুলোতে মেথড যুক্ত করে পুরনো ব্রাউজারে আধুনিক সুবিধা সরবরাহ করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Promises and the Event Loop', bn: 'পরবর্তী পাঠ — প্রমিজ ও ইভেন্ট লুপ' },
    },
    {
      type: 'para',
      text: {
        en: 'With prototypes and delegation mastered, Lesson 4 dives into asynchronous JavaScript: the single-threaded Event Loop, microtasks versus macrotasks, and managing concurrency with Promises.',
        bn: 'প্রোটোটাইপ ও ডেলিগেশন আয়ত্ত করার পর, পাঠ ৪ অ্যাসিঙ্ক্রোনাস জাভাস্ক্রিপ্টে প্রবেশ করবে: একক-থ্রেডেড ইভেন্ট লুপ, মাইক্রোটাস্ক বনাম ম্যাক্রোটাস্ক এবং প্রমিজ দিয়ে কনকারেন্সি পরিচালনা।',
      },
    },
  ],
  exercises: [
    {
      id: 'js-proto-ex-1',
      kind: 'mcq',
      topic: 'delegation-mechanism',
      question: {
        en: 'When a property or method is accessed on a JavaScript object but not found on the instance itself, where does the runtime search next?',
        bn: 'কোনো জাভাস্ক্রিপ্ট অবজেক্টের সরাসরি প্রপার্টি না থাকলে রানটাইম পরবর্তীতে কোথায় অনুসন্ধান চালায়?',
      },
      options: [
        {
          en: 'It traverses upward along the linked prototype chain until finding the property or hitting null',
          bn: 'এটি প্রোটোটাইপ চেইন বেয়ে ওপরে ওঠে যতক্ষণ না প্রপার্টিটি পাওয়া যায় বা null এ পৌঁছায়',
        },
        {
          en: 'It immediately throws a FatalCompilationError',
          bn: 'এটি সাথে সাথে FatalCompilationError ছুড়ে দেয়',
        },
        {
          en: 'It searches through local disk files on the host computer',
          bn: 'এটি হোস্ট কম্পিউটারের লোকাল ডিস্ক ফাইলগুলোতে খোঁজা শুরু করে',
        },
        {
          en: 'It queries an external DNS server for missing property keys',
          bn: 'এটি অনুপস্থিত প্রপার্টির জন্য একটি বাহ্যিক ডিএনএস সার্ভারে কুয়েরি পাঠায়',
        },
      ],
      answer: 0,
      hint: { en: 'It climbs the prototype chain.', bn: 'এটি প্রোটোটাইপ চেইন বেয়ে ওপরে ওঠে।' },
      explanation: {
        en: 'JavaScript property access delegates up the prototype chain until the key is found or null is reached.',
        bn: 'জাভাস্ক্রিপ্ট প্রপার্টি অ্যাক্সেস প্রোটোটাইপ চেইন বেয়ে ওপরে ওঠে যতক্ষণ না কি-টি পাওয়া যায় অথবা null এ পৌঁছায়।',
      },
    },
    {
      id: 'js-proto-ex-2',
      kind: 'mcq',
      topic: 'proto-sim-metrics',
      question: {
        en: 'In our code walkthrough, what were the power rating and telemetry reading on tempSensor, and what was their total sum across the 2 measurements?',
        bn: 'আমাদের কোড আলোচনায় tempSensor এর পাওয়ার রেটিং ও টেলিমেট্রি রিডিং কত ছিল এবং ২টি পরিমাপে তাদের মোট সমষ্টি কত ছিল?',
      },
      options: [
        { en: 'Power = 15W, Reading = 75F, total sum = 90 across 2 measurements', bn: 'পাওয়ার = ১৫ ওয়াট, রিডিং = ৭৫ ডিগ্রি, ২টি পরিমাপে মোট সমষ্টি = ৯০' },
        { en: 'Power = 100W, Reading = 200F, total sum = 300 across 2 measurements', bn: 'পাওয়ার = ১০০ ওয়াট, রিডিং = ২০০ ডিগ্রি, ২টি পরিমাপে মোট সমষ্টি = ৩০০' },
        { en: 'Power = 5W, Reading = 10F, total sum = 15 across 2 measurements', bn: 'পাওয়ার = ৫ ওয়াট, রিডিং = ১০ ডিগ্রি, ২টি পরিমাপে মোট সমষ্টি = ১৫' },
        { en: 'Power = 0W, Reading = 0F, total sum = 0 across 0 measurements', bn: 'পাওয়ার = ০ ওয়াট, রিডিং = ০ ডিগ্রি, ০টি পরিমাপে মোট সমষ্টি = ০' },
      ],
      answer: 0,
      hint: { en: '15 + 75 = 90.', bn: '১৫ + ৭৫ = ৯০।' },
      explanation: {
        en: 'The simulation set watts to 15 and reading to 75, calculating a total metric of 90 across 2 measurements.',
        bn: 'সিমুলেশনটি watts ১৫ এবং reading ৭৫ নির্ধারণ করে ২টি পরিমাপে মোট ৯০ হিসাব করেছিল।',
      },
    },
    {
      id: 'js-proto-ex-3',
      kind: 'mcq',
      topic: 'hasown-vs-hasownproperty',
      question: {
        en: 'Why is Object.hasOwn(obj, prop) preferred over calling obj.hasOwnProperty(prop) in modern JavaScript codebases?',
        bn: 'আধুনিক জাভাস্ক্রিপ্ট কোডবেসে obj.hasOwnProperty(prop) কল করার চেয়ে Object.hasOwn(obj, prop) ব্যবহার কেন উত্তম?',
      },
      options: [
        {
          en: 'Object.hasOwn works reliably even on objects created with Object.create(null) that lack prototype methods',
          bn: 'Object.hasOwn মেথডটি Object.create(null) দিয়ে তৈরি অবজেক্টেও নিরাপদে কাজ করে যার কোনো প্রোটোটাইপ মেথড থাকে না',
        },
        {
          en: 'Object.hasOwn encrypts the property name in RAM',
          bn: 'Object.hasOwn র্যামে প্রপার্টির নাম এনক্রিপ্ট করে রাখে',
        },
        {
          en: 'Object.prototype was deprecated in ECMAScript 2022',
          bn: '২০২২ সালের ইসিএমএস্ক্রিপ্টে Object.prototype বাতিল করা হয়েছে',
        },
        {
          en: 'Object.hasOwn runs on a separate GPU thread',
          bn: 'Object.hasOwn একটি আলাদা জিপিইউ থ্রেডে পরিচালিত হয়',
        },
      ],
      answer: 0,
      hint: { en: 'Null prototype objects do not inherit hasOwnProperty.', bn: 'নাল প্রোটোটাইপ অবজেক্টগুলো hasOwnProperty ইনহেরিট করে না।' },
      explanation: {
        en: 'Objects created without a prototype throw TypeError if hasOwnProperty is called directly, whereas static Object.hasOwn handles them safely.',
        bn: 'প্রোটোটাইপ ছাড়া তৈরি অবজেক্টে সরাসরি hasOwnProperty কল করলে TypeError ঘটে, যেখানে স্ট্যাটিক Object.hasOwn নিরাপদে কাজ করে।',
      },
    },
    {
      id: 'js-proto-ex-4',
      kind: 'predict',
      topic: 'end-of-prototype-chain',
      question: {
        en: 'What terminal primitive value resides at the very end of every standard JavaScript prototype chain (Object.prototype.__proto__)?',
        bn: 'প্রতিটি স্ট্যান্ডার্ড জাভাস্ক্রিপ্ট প্রোটোটাইপ চেইনের সর্বশেষে (Object.prototype.__proto__) কোন প্রান্তিক প্রিমিটিভ মানটি অবস্থান করে?',
      },
      answer: 'null',
      accept: ['null', 'Null'],
      hint: { en: 'The top of the chain has no further prototype.', bn: 'চেইনের শীর্ষে আর কোনো প্রোটোটাইপ থাকে না।' },
      explanation: {
        en: 'The prototype chain always terminates with null, indicating that no further ancestors exist to query.',
        bn: 'প্রোটোটাইপ চেইন সর্বদা null এ গিয়ে শেষ হয়, যা নির্দেশ করে ওপরে অনুসন্ধানের মতো আর কোনো অভিভাবক অবজেক্ট নেই।',
      },
    },
  ],
  quiz: {
    id: 'prototypes-chain-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'js-proto-q1',
        kind: 'mcq',
        topic: 'memory-sharing-benefit',
        question: {
          en: 'What is the primary architectural memory benefit of attaching methods to a prototype rather than inside an instance constructor?',
          bn: 'ইনস্ট্যান্স মেথড তৈরির বদলে প্রোটোটাইপে মেথড যুক্ত করার প্রাথমিক মেমরি সুবিধা কী?',
        },
        options: [
          {
            en: 'All created instances share one single function in memory instead of allocating separate function copies per instance',
            bn: 'প্রতিটি ইনস্ট্যান্সে আলাদা ফাংশন তৈরি করার পরিবর্তে মেমরিতে একটিমাত্র একক ফাংশন সমস্ত ইনস্ট্যান্সের মধ্যে শেয়ার করা হয়',
          },
          {
            en: 'It eliminates the need for JavaScript engines to compile bytecode',
            bn: 'এটি জাভাস্ক্রিপ্ট ইঞ্জিনের বাইটকোড কম্পাইল করার প্রয়োজনীয়তা দূর করে',
          },
          {
            en: 'It reduces TCP payload sizes over HTTP networks',
            bn: 'এটি এইচটিটিপি নেটওয়ার্কে টিসিপি পেলোড সাইজ কমিয়ে দেয়',
          },
          {
            en: 'It compresses images automatically on the client side',
            bn: 'এটি ক্লায়েন্ট সাইডে স্বয়ংক্রিয়ভাবে ছবি কম্প্রেস করে',
          },
        ],
        answer: 0,
        hint: { en: 'Prototypes share one function reference.', bn: 'প্রোটোটাইপ একটিমাত্র ফাংশন রেফারেন্স শেয়ার করে।' },
        explanation: {
          en: 'Methods declared on a prototype are shared across all instances via delegation, preserving heap memory.',
          bn: 'প্রোটোটাইপে ঘোষিত মেথডগুলো ডেলিগেশনের মাধ্যমে সমস্ত ইনস্ট্যান্স শেয়ার করে, ফলে প্রচুর হিপ মেমরি সাশ্রয় হয়।',
        },
      },
      {
        id: 'js-proto-q2',
        kind: 'mcq',
        topic: 'metrics-sum-verify',
        question: {
          en: 'In our code walkthrough, what was the total metric sum computed by tempSensor.getPowerRating() plus tempSensor.readTelemetry()?',
          bn: 'আমাদের কোড আলোচনায় tempSensor.getPowerRating() এবং tempSensor.readTelemetry() যোগ করে মোট কত মেট্রিক পাওয়া গিয়েছিল?',
        },
        options: [
          { en: '90 across 2 measurements (15 watts + 75 degrees)', bn: '২টি পরিমাপে ৯০ (১৫ ওয়াট + ৭৫ ডিগ্রি)' },
          { en: '100 across 2 measurements', bn: '২টি পরিমাপে ১০০' },
          { en: '50 across 1 measurement', bn: '১টি পরিমাপে ৫০' },
          { en: '0 across 0 measurements', bn: '০টি পরিমাপে ০' },
        ],
        answer: 0,
        hint: { en: '15 + 75 = 90.', bn: '১৫ + ৭৫ = ৯০।' },
        explanation: {
          en: 'tempSensor resolved watts (15) and reading (75), which summed to 90 across 2 measurements.',
          bn: 'tempSensor এর watts (১৫) ও reading (৭৫) যোগ হয়ে ২টি পরিমাপে মোট ৯০ তৈরি করেছিল।',
        },
      },
      {
        id: 'js-proto-q3',
        kind: 'mcq',
        topic: 'prototype-pollution-hazard',
        question: {
          en: 'What security risk is introduced when code mutates Object.prototype with external unsanitized user inputs?',
          bn: 'বাহ্যিক অপরিশোধিত ইনপুট দিয়ে Object.prototype পরিবর্তন করলে কী ধরনের নিরাপত্তা ঝুঁকি তৈরি হয়?',
        },
        options: [
          {
            en: 'Prototype pollution: injected properties become accessible on every object in the application, leading to logic bypasses or remote code execution',
            bn: 'প্রোটোটাইপ পলিউশন: ইনজেক্ট করা প্রপার্টি অ্যাপ্লিকেশনের প্রতিটি অবজেক্টে দৃশ্যমান হয়ে পড়ে, যা নিরাপত্তা ফাঁক বা দূরবর্তী কোড এক্সিকিউশন ঘটাতে পারে',
          },
          {
            en: 'The browser screen resolution will be forcibly reset to 640x480',
            bn: 'ব্রাউজারের স্ক্রিন রেজোলিউশন জোরপূর্বক ৬৪০x৪৮০ তে নেমে যাবে',
          },
          {
            en: 'CSS stylesheets will immediately stop rendering colors',
            bn: 'সিএসএস স্টাইলশিটে সাথে সাথে রঙ দেখানো বন্ধ হয়ে যাবে',
          },
          {
            en: 'HTTP requests will be blocked by the operating system audio mixer',
            bn: 'অপারেটিং সিস্টেমের অডিও মিক্সার দ্বারা এইচটিটিপি রিকোয়েস্ট ব্লক হয়ে যাবে',
          },
        ],
        answer: 0,
        hint: { en: 'It is called prototype pollution.', bn: 'একে প্রোটোটাইপ পলিউশন বলা হয়।' },
        explanation: {
          en: 'Prototype pollution allows attackers to alter application logic or bypass authentication checks across all objects.',
          bn: 'প্রোটোটাইপ পলিউশন আক্রমণকারীদের সমস্ত অবজেক্টে অনাকাঙ্ক্ষিত আচরণ ঢুকিয়ে নিরাপত্তা বাইপাস করার সুযোগ দেয়।',
        },
      },
      {
        id: 'js-proto-q4',
        kind: 'predict',
        topic: 'static-factory-method',
        question: {
          en: 'Which standard static method on Object explicitly creates a new object with a designated prototype ancestor (e.g. Object.create)?',
          bn: 'Object এর কোন আদর্শ স্ট্যাটিক মেথডটি স্পষ্টভাবে একটি নির্দিষ্ট প্রোটোটাইপ অভিভাবকযুক্ত নতুন অবজেক্ট তৈরি করে (যেমন Object.create)?',
        },
        answer: 'Object.create',
        accept: ['Object.create', 'create', 'Object.create()'],
        hint: { en: 'Object.c...', bn: 'Object.c... দিয়ে শুরু।' },
        explanation: {
          en: 'Object.create(proto) constructs a fresh object whose internal [[Prototype]] points directly to proto.',
          bn: 'Object.create(proto) একটি নতুন অবজেক্ট তৈরি করে যার অভ্যন্তরীণ [[Prototype]] সরাসরি proto কে নির্দেশ করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'promises-and-the-then',
    title: { en: 'Promises and the Event Loop', bn: 'প্রমিজ ও ইভেন্ট লুপ' },
  },
};
