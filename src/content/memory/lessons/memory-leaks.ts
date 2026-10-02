import type { Lesson } from '../../../lib/types';

export const MemoryLeaksLesson: Lesson = {
  slug: 'memory-leaks',
  tech: 'memory',
  title: {
    en: 'Memory Leaks: Root Causes, Profiling & V8 Heap Snapshots',
    bn: 'মেমোরি লিক: মূল কারণ, প্রোফাইলিং এবং V8 হিপ স্ন্যাপশট'
  },
  summary: {
    en: 'Uncover how memory leaks manifest in garbage-collected environments like Node.js and the browser. Understand why the presence of an automated GC does not prevent memory leaks: unintentional references anchored in GC roots keep dead data alive forever. Diagnose the four classic leak patterns, and master production debugging using Chrome DevTools Heap Snapshots and Retained Size analysis.',
    bn: 'Node.js এবং ওয়েব ব্রাউজারের মতো পরিচালিত পরিবেশে কীভাবে মেমোরি লিক ঘটে তা উদঘাটন করুন। স্বয়ংক্রিয় গার্বেজ কালেক্টর থাকা সত্ত্বেও কেন মেমোরি লিক হয় তা বুঝুন: GC রুটে অনিচ্ছাকৃত রেফারেন্স আটকে থাকলে অপ্রয়োজনীয় ডাটাও মেমোরিতে চিরকাল জীবিত থাকে। ৪ টি ক্লাসিক লিক প্যাটার্ন নির্ণয় করুন এবং Chrome DevTools হিপ স্ন্যাপশট ও রিটেইন্ড সাইজ বিশ্লেষণের মাধ্যমে প্রোডাকশন ডিবাগিং শিখুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'managed-language-leak-paradox',
      text: {
        en: 'The Paradox of Memory Leaks in Managed Languages',
        bn: 'পরিচালিত প্রোগ্রামিং ভাষায় মেমোরি লিকের জটিল বিভ্রান্তি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When your server application slows down and runs out of memory, many developers wonder why an automated garbage collector failed to save it. A garbage collector only reclaims objects that are completely unreachable from GC roots. If your application code inadvertently maintains a reference to an object you no longer need, the engine must assume that memory is still actively required.',
        bn: 'আপনার সার্ভার অ্যাপ্লিকেশন যখন ধীরগতির হয়ে মেমোরি ঘাটতিতে পড়ে, তখন অনেক ডেভেলপার অবাক হন যে স্বয়ংক্রিয় গার্বেজ কালেক্টর কেন মেমোরি রক্ষা করতে পারল না। একটি গার্বেজ কালেক্টর কেবল সেইসব অবজেক্টই মুক্ত করতে পারে যা GC রুট থেকে সম্পূর্ণ বিচ্ছিন্ন। আপনার অ্যাপ্লিকেশনের কোড যদি ভুলবশত এমন কোনো অবজেক্টের রেফারেন্স ধরে রাখে যা ভবিষ্যতে আর কখনোই কাজে লাগবে না, তবুও ইঞ্জিন মনে করে যে সেই মেমোরি এখনও প্রয়োজন এবং তা ধরে রাখে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Over hours or days of continuous traffic, these forgotten pointers accumulate millions of abandoned bytes. The memory footprint of the process climbs relentlessly until Node.js crashes with a JavaScript heap out of memory error or the Linux operating system kernel invokes the Out-Of-Memory Killer to terminate the process.',
        bn: 'কয়েক ঘণ্টা বা কয়েক দিন ধরে একটানা ট্রাফিকের ফলে এই ভুলে যাওয়া পয়েন্টারগুলো লাখ লাখ অতিরিক্ত বাইট জমা করতে থাকে। প্রসেসের মেমোরি ক্রমাগত বাড়তে থাকে যতক্ষণ না Node.js হিপ মেমোরি শেষ হয়ে ক্র্যাশ করে অথবা লিনাক্স অপারেটিং সিস্টেমের OOM কিলার বাধ্য হয়ে প্রসেসটি বন্ধ করে দেয়।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Unbounded Global Caches',
            bn: '১. সীমাহীন গ্লোবাল মেমোরি ক্যাশ'
          },
          text: {
            en: 'Pushing user requests or calculation results into a global Map without an eviction limit causes infinite memory expansion. Using an LRU cache or WeakMap prevents this vulnerability.',
            bn: 'মেমোরি খালি করার কোনো সীমা নির্ধারণ না করে গ্লোবাল ম্যাপে অনবরত ইউজার রিকোয়েস্ট জমা করতে থাকলে মেমোরি অসীমভাবে বাড়তে থাকে। LRU ক্যাশ বা WeakMap ব্যবহার করে এই ক্ষতিকর ঝুঁকি প্রতিরোধ করা যায়।'
          },
        },
        {
          title: {
            en: '2. Forgotten Event Listeners',
            bn: '২. অনিবন্ধিত ভুলে যাওয়া ইভেন্ট লিসেনার'
          },
          text: {
            en: 'Attaching listener callbacks with emitter.on() without calling removeListener() when a task completes retains the listener closure in memory permanently.',
            bn: 'কাজ সম্পন্ন হওয়ার পর removeListener() কল না করে emitter.on() দিয়ে লিসেনার যুক্ত রাখলে সেই লিসেনারের ভেতরের ক্লোজার ও ডাটা মেমোরিতে চিরকালের জন্য আটকে থাকে।'
          },
        },
        {
          title: {
            en: '3. Detached DOM Subtrees',
            bn: '৩. ডিটাচড DOM সাব-ট্রি নোড'
          },
          text: {
            en: 'In web browsers, removing an element from the document body while a JavaScript variable continues to point to it prevents the browser engine from garbage collecting the element.',
            bn: 'ওয়েব ব্রাউজারে ডকুমেন্টের বডি থেকে কোনো এলিমেন্ট মুছে ফেলার পরেও যদি একটি জাভাস্ক্রিপ্ট ভেরিয়েবল সেটিকে নির্দেশ করে থাকে, তবে ব্রাউজার ইঞ্জিন সেই এলিমেন্টের মেমোরি মুক্ত করতে পারে না।'
          },
        },
        {
          title: {
            en: '4. Lexical Closure Retention',
            bn: '৪. লেক্সিক্যাল ক্লোজার রিটেনশন'
          },
          text: {
            en: 'When an inner function survives in memory, the V8 JavaScript engine preserves its entire outer lexical scope, retaining all sibling variables captured in that context.',
            bn: 'একটি অভ্যন্তরীণ ফাংশন যখন মেমোরিতে টিকে থাকে, তখন V8 জাভাস্ক্রিপ্ট ইঞ্জিন তার সম্পূর্ণ বহিরাগত লেক্সিক্যাল স্কোপকে ধরে রাখে, যার ফলে সেই প্রেক্ষাপটে যুক্ত সব ভেরিয়েবল মেমোরিতে বন্দি থাকে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Memory Leak Anatomy: Shallow Size, Retained Size & Retaining Path Breakdown',
        bn: 'মেমোরি লিকের গঠন: শ্যালো সাইজ, রিটেইন্ড সাইজ এবং রিটেইনিং পাথ বিশ্লেষণ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Memory leak retaining path diagram showing shallow size versus retained size in Chrome DevTools">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">RETAINING PATH &amp; HEAP SNAPSHOT PROFILING</text>
  
  <!-- Left Side: Retaining Path from Root -->
  <g transform="translate(30, 50)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">GC ROOT TO LEAKED OBJECT GRAPH</text>
    
    <!-- Root -->
    <rect x="20" y="45" width="320" height="50" rx="6" fill="#0f172a" stroke="#0284c7"/>
    <text x="180" y="68" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">GC Root: global.eventRegistry</text>
    <text x="180" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Long-lived EventEmitter instance</text>
    
    <!-- Forgotten Listener -->
    <rect x="20" y="125" width="320" height="60" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="180" y="148" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Forgotten Listener Callback (Closure)</text>
    <text x="180" y="165" fill="#cbd5e1" font-size="9" text-anchor="middle">Shallow: 32 Bytes | Retained: 10,000,032 Bytes</text>
    <text x="180" y="177" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">LEAK ANCHOR: Never removed via off()</text>
    
    <!-- Massive Leaked Payload -->
    <rect x="20" y="215" width="320" height="70" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
    <text x="180" y="238" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">Captured Buffer: 10 MB Raw Data</text>
    <text x="180" y="258" fill="#fca5a5" font-size="9" text-anchor="middle">High-resolution image or PDF byte stream</text>
    <text x="180" y="272" fill="#fca5a5" font-size="9" text-anchor="middle">Should have died with client request!</text>
    
    <!-- Sever Edge Action -->
    <rect x="20" y="295" width="320" height="35" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="180" y="318" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Fix: emitter.removeListener() severs this edge</text>
  </g>
  
  <!-- Right Side: Chrome DevTools Profiling View -->
  <g transform="translate(420, 50)">
    <rect width="390" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="195" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">CHROME DEVTOOLS HEAP SNAPSHOT VIEW</text>
    
    <!-- Table Header -->
    <rect x="15" y="45" width="360" height="30" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="90" y="65" fill="#cbd5e1" font-size="10" font-weight="bold">Constructor</text>
    <text x="210" y="65" fill="#cbd5e1" font-size="10" font-weight="bold">Shallow</text>
    <text x="310" y="65" fill="#38bdf8" font-size="10" font-weight="bold">Retained</text>
    
    <!-- Row 1: The Culprit -->
    <rect x="15" y="82" width="360" height="40" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="25" y="106" fill="#ef4444" font-size="10" font-weight="bold">(closure) in reqHandler</text>
    <text x="210" y="106" fill="#cbd5e1" font-size="10">32 B</text>
    <text x="300" y="106" fill="#ef4444" font-size="11" font-weight="bold">52.4 MB (82%)</text>
    
    <!-- Row 2 -->
    <rect x="15" y="128" width="360" height="35" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="25" y="150" fill="#cbd5e1" font-size="10">ArrayBuffer</text>
    <text x="210" y="150" fill="#cbd5e1" font-size="10">50.0 MB</text>
    <text x="300" y="150" fill="#cbd5e1" font-size="10">50.0 MB</text>
    
    <!-- Row 3 -->
    <rect x="15" y="169" width="360" height="35" rx="4" fill="#0f172a" stroke="#334155"/>
    <text x="25" y="191" fill="#cbd5e1" font-size="10">Object</text>
    <text x="210" y="191" fill="#cbd5e1" font-size="10">1.2 MB</text>
    <text x="300" y="191" fill="#cbd5e1" font-size="10">2.1 MB</text>
    
    <!-- Diagnostic Rule Box -->
    <rect x="15" y="215" width="360" height="110" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="195" y="238" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">DIAGNOSTIC RULE</text>
    <text x="195" y="260" fill="#cbd5e1" font-size="10" text-anchor="middle">Small Shallow Size + Enormous Retained Size</text>
    <text x="195" y="278" fill="#cbd5e1" font-size="10" text-anchor="middle">points directly to the root object holding the leak!</text>
    <text x="195" y="300" fill="#38bdf8" font-size="10" text-anchor="middle">Sort by Retained Size descending to pinpoint culprits.</text>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Severing the edge between the GC root and the closure frees all retained downstream bytes</text>
</svg>`,
      caption: {
        en: 'A 32-byte closure callback can retain a 10MB buffer if anchored to a global root. Sorting DevTools by Retained Size exposes the leak.',
        bn: '৩২-বাইটের একটি ক্লোজার কলব্যাক গ্লোবাল রুটে যুক্ত থাকলে ১০ মেগাবাইট বাফার আটকে রাখতে পারে। DevTools-এ রিটেইন্ড সাইজ দিয়ে সাজালে লিক ধরা পড়ে।'
      },
    },
    {
      type: 'heading',
      id: 'leak-profiling-and-benchmark-code',
      text: {
        en: 'Memory Leak Diagnostic & Bounded Cache Benchmark',
        bn: 'মেমোরি লিক ডায়াগনস্টিক এবং বাউন্ডেড ক্যাশ বেঞ্চমার্ক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how memory leaks behave in practice, compare an unbounded array cache against an eviction-managed LRU cache. The following deterministic benchmark tracks simulated memory consumption across 1000 simulated client requests.',
        bn: 'বাস্তবে মেমোরি লিক কীভাবে ঘটে তা দেখতে একটি সীমাহীন অ্যারে ক্যাশের সাথে মেমোরি খালি করার ক্ষমতাসম্পন্ন LRU ক্যাশের তুলনা করুন। নিচের কোডটি ১০০০ টি সিমুলেটেড ক্লায়েন্ট রিকোয়েস্টের মাধ্যমে মেমোরি খরচের আচরণ প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'memory-leak-benchmark.js',
      code: `// Deterministic Memory Leak Diagnostic & Eviction Solution Benchmark
// Compares an unbounded leaky cache with an LRU bounded cache

class LeakyCacheService {
  constructor() {
    this.storage = []; // Leaks: array grows indefinitely
  }

  handleRequest(requestId, payloadBytes) {
    // Stores payload without eviction policy
    this.storage.push({
      id: requestId,
      bytes: payloadBytes,
      timestamp: Date.now()
    });
  }

  getRetainedBytes() {
    return this.storage.reduce((sum, item) => sum + item.bytes, 0);
  }
}

class BoundedLRUService {
  constructor(maxEntries = 5) {
    this.maxEntries = maxEntries;
    this.storage = new Map(); // Maintains insertion order
  }

  handleRequest(requestId, payloadBytes) {
    // Evicts oldest entry if capacity limit reached
    if (this.storage.size >= this.maxEntries) {
      const oldestKey = this.storage.keys().next().value;
      this.storage.delete(oldestKey);
    }

    this.storage.set(requestId, {
      bytes: payloadBytes,
      timestamp: Date.now()
    });
  }

  getRetainedBytes() {
    let sum = 0;
    for (const item of this.storage.values()) {
      sum += item.bytes;
    }
    return sum;
  }
}

const leakyService = new LeakyCacheService();
const boundedService = new BoundedLRUService(5); // Retains only newest 5 entries

console.log('=== Simulating 1000 API Requests with 1024-Byte Payloads ===');
const TOTAL_REQUESTS = 1000;
const PAYLOAD_SIZE = 1024; // 1KB per request

for (let i = 1; i <= TOTAL_REQUESTS; i++) {
  leakyService.handleRequest('req_' + i, PAYLOAD_SIZE);
  boundedService.handleRequest('req_' + i, PAYLOAD_SIZE);
}

console.log('Results after ' + TOTAL_REQUESTS + ' requests:');
console.log('Leaky Service:');
console.log('  Cached Items   :', leakyService.storage.length);
console.log('  Retained Bytes :', leakyService.getRetainedBytes(), 'bytes (~' + (leakyService.getRetainedBytes() / 1024) + ' KB)');

console.log('\\nBounded LRU Service:');
console.log('  Cached Items   :', boundedService.storage.size);
console.log('  Retained Bytes :', boundedService.getRetainedBytes(), 'bytes (' + (boundedService.getRetainedBytes() / 1024) + ' KB)');

console.log('\\nConclusion: Leaky cache retained 1000 items (1024000 bytes); bounded cache stabilized safely at 5 items (5120 bytes)!');`,
      caption: {
        en: 'The leaky service retains 1000 items (1024000 bytes), while the bounded cache caps retained memory at 5 items (5120 bytes).',
        bn: 'লিক হওয়া সার্ভিসটি ১০০০ টি আইটেম ( ১০২৪০০০ বাইট ) ধরে রাখে, আর বাউন্ডেড ক্যাশ ৫ টি আইটেমে ( ৫১২০ বাইট ) মেমোরি স্থিতিশীল রাখে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Shallow Size versus Retained Size in Chrome DevTools',
        bn: 'Chrome DevTools-এ শ্যালো সাইজ বনাম রিটেইন্ড সাইজ'
      },
      text: {
        en: 'When inspecting a Heap Snapshot in Chrome DevTools or Node Inspector, two critical columns guide your investigation: Shallow Size and Retained Size. Shallow Size represents the memory directly consumed by the object itself (typically 32 to 64 bytes). Retained Size represents the total volume of memory that would be instantly reclaimed if this object were destroyed, including all child references that can only be reached through it. Sorting the class type list by Retained Size in descending order instantly reveals the root culprit holding gigabytes of leaked memory.',
        bn: 'Chrome DevTools বা Node Inspector-এ হিপ স্ন্যাপশট পরীক্ষার সময় ২ টি অত্যন্ত গুরুত্বপূর্ণ কলাম আপনার অনুসন্ধানকে সহজ করে: শ্যালো সাইজ (Shallow Size) এবং রিটেইন্ড সাইজ (Retained Size)। শ্যালো সাইজ হলো অবজেক্টের নিজস্ব অভ্যন্তরীণ ডাটা ধারণ করতে সরাসরি ব্যবহৃত মেমোরি ( সাধারণত ৩২ থেকে ৬৪ বাইট )। রিটেইন্ড সাইজ হলো সেই মোট মেমোরির পরিমাণ যা এই অবজেক্টটি মুছে দিলে তাৎক্ষণিকভাবে সিস্টেমে ফিরে আসবে, যার মধ্যে এর মাধ্যমে যুক্ত সমস্ত চাইল্ড অবজেক্ট অন্তর্ভুক্ত। ক্লাস টাইপের তালিকাকে রিটেইন্ড সাইজের নিম্নগামী ক্রমানুসারে সাজালে চোখের পলকেই সেই মূল অপরাধী অবজেক্টটি ধরা পড়ে যা গিগাবাইট পরিমাণ মেমোরি আটকে রেখেছিল।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-leak-ex-1',
      kind: 'mcq',
      question: {
        en: 'Why do memory leaks occur in garbage-collected languages like JavaScript, Go, and Java?',
        bn: 'জাভাস্ক্রিপ্ট, গো এবং জাভার মতো স্বয়ংক্রিয় গার্বেজ সংগৃহীত ভাষাগুলোতেও কেন মেমোরি লিক ঘটে?'
      },
      options: [
        {
          en: 'Unintentional active references anchored to GC roots prevent the garbage collector from freeing abandoned heap objects',
          bn: 'GC রুটের সাথে যুক্ত অনিচ্ছাকৃত সক্রিয় রেফারেন্সগুলো গার্বেজ কালেক্টরকে অপ্রয়োজনীয় হিপ অবজেক্ট মুক্ত করতে বাধা দেয়',
        },
        {
          en: 'Because computer memory runs out of electrical voltage after 5 hours',
          bn: 'কারণ ৫ ঘণ্টা চলার পর কম্পিউটার মেমোরির বৈদ্যুতিক ভোল্টেজ শেষ হয়ে যায়',
        },
        {
          en: 'Because operating systems delete garbage collectors when files are saved',
          bn: 'কারণ ফাইল সংরক্ষণ করার সময় অপারেটিং সিস্টেম গার্বেজ কালেক্টর মুছে ফেলে',
        },
        {
          en: 'To make computer processors heat up and warm the room',
          bn: 'কম্পিউটার প্রসেসর গরম করে ঘরকে উষ্ণ রাখার উদ্দেশ্যে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Unintentional references keep unused objects reachable from GC roots.',
        bn: 'অনিচ্ছাকৃত রেফারেন্স অব্যবহৃত অবজেক্টগুলোকে রুটের সাথে যুক্ত রেখে দেয়।',
      },
      explanation: {
        en: 'A garbage collector only reclaims unreachable objects. If forgotten references remain attached to roots, the engine cannot reclaim the memory.',
        bn: 'গার্বেজ কালেক্টর কেবল সংযোগহীন অবজেক্ট মুক্ত করতে পারে। রুটে রেফারেন্স যুক্ত থাকলে মেমোরি মুক্ত করা সম্ভব হয় না।'
      },
    },
    {
      id: 'mem-leak-ex-2',
      kind: 'mcq',
      question: {
        en: 'In Chrome DevTools Heap Snapshots, what is the architectural difference between Shallow Size and Retained Size?',
        bn: 'Chrome DevTools হিপ স্ন্যাপশটে শ্যালো সাইজ এবং রিটেইন্ড সাইজের মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'Shallow Size is the memory held by the object itself; Retained Size is the total memory freed if that object and its exclusively owned children were deleted',
          bn: 'শ্যালো সাইজ হলো অবজেক্টের নিজস্ব অভ্যন্তরীণ মেমোরি; রিটেইন্ড সাইজ হলো সেই মোট মেমোরি যা অবজেক্ট ও তার অধীনস্থ চাইল্ড অবজেক্ট মুছে দিলে মুক্ত হবে',
        },
        {
          en: 'Shallow Size measures internet download speed; Retained Size measures upload speed',
          bn: 'শ্যালো সাইজ ইন্টারনেট ডাউনলোডের গতি মাপে; রিটেইন্ড সাইজ আপলোডের গতি মাপে',
        },
        {
          en: 'Shallow Size is measured in inches; Retained Size is measured in pounds',
          bn: 'শ্যালো সাইজ ইঞ্চিতে মাপা হয়; আর রিটেইন্ড সাইজ পাউন্ডে পরিমাপ করা হয়',
        },
        {
          en: 'Both terms describe the physical color depth of the monitor display',
          bn: 'উভয় পদই কম্পিউটার মনিটর ডিসপ্লের শারীরিক রঙের গভীরতা নির্দেশ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Shallow is self-size; Retained includes all dependent objects freed if severed.',
        bn: 'শ্যালো হলো নিজস্ব সাইজ; রিটেইন্ডের মধ্যে নির্ভরতা ছিন্ন হলে মুক্ত হওয়া সমস্ত মেমোরি অন্তর্ভুক্ত।',
      },
      explanation: {
        en: 'Retained size tells you how much total memory will be freed if you sever the reference to this object.',
        bn: 'রিটেইন্ড সাইজ জানায় একটি অবজেক্টের রেফারেন্স বিচ্ছিন্ন করলে সর্বমোট কত মেমোরি উদ্ধার করা সম্ভব।'
      },
    },
    {
      id: 'mem-leak-ex-3',
      kind: 'predict',
      question: {
        en: 'If a component registers an event listener and mounts 5 times without cleaning up, how many active listener callbacks remain retained in memory? (5). Type the number.',
        bn: 'একটি কম্পোনেন্ট যদি প্রতিবার ইভেন্ট লিসেনার যুক্ত করে এবং ৫ বার মাউন্ট হওয়ার পর কোনো ক্লিনআপ না করে, তবে মেমোরিতে কয়টি সক্রিয় লিসেনার কলব্যাক আটকে থাকবে? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'Without removal, 5 mounts accumulate 5 retained listeners.',
        bn: 'লিসেনার মুছে না দিলে ৫ বার মাউন্টে ঠিক ৫ টি লিসেনারই মেমোরিতে থাকবে।'
      },
      explanation: {
        en: 'Each mount appends an additional listener. Without off() cleanup, all 5 callbacks stay anchored in memory.',
        bn: 'প্রতিটি মাউন্টে একটি নতুন লিসেনার যুক্ত হয়। ক্লিনআপ না করলে ৫ টি কলব্যাকই মেমোরিতে থেকে যায়।'
      },
    },
    {
      id: 'mem-leak-ex-4',
      kind: 'mcq',
      question: {
        en: 'How does using a JavaScript WeakMap prevent memory leaks in object metadata caching?',
        bn: 'জাভাস্ক্রিপ্ট WeakMap ব্যবহার কীভাবে অবজেক্টের মেটাডাটা ক্যাশিংয়ে মেমোরি লিক প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'Keys in a WeakMap are held weakly, permitting the garbage collector to reclaim entries as soon as the key object has no other active references in the program',
          bn: 'WeakMap-এ কি (Key) গুলো দুর্বলভাবে যুক্ত থাকে, ফলে প্রোগ্রামে কি অবজেক্টটির অন্য কোনো রেফারেন্স না থাকলে গার্বেজ কালেক্টর সাথে সাথে এন্ট্রিটি মুছে মেমোরি মুক্ত করতে পারে',
        },
        {
          en: 'WeakMap encrypts all passwords using 512-bit military keys',
          bn: 'WeakMap ৫১২-বিট মিলিটারি কি ব্যবহার করে সমস্ত পাসওয়ার্ড এনক্রিপ্ট করে',
        },
        {
          en: 'WeakMap stores all data on physical paper printouts',
          bn: 'WeakMap সমস্ত ডাটা কাগজের ফিজিক্যাল প্রিন্টআউটে সংরক্ষণ করে',
        },
        {
          en: 'WeakMap stops the computer mouse from moving across the screen',
          bn: 'WeakMap স্ক্রিনে কম্পিউটারের মাউস নাড়াচাড়া করা বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Weak references do not prevent garbage collection when no other references exist.',
        bn: 'দুর্বল রেফারেন্স অবজেক্টের গার্বেজ কালেকশন হওয়াকে কোনোভাবেই আটকে রাখে না।',
      },
      explanation: {
        en: 'WeakMap holds weak references to keys, allowing garbage collection to clean up entries automatically without manual deletion.',
        bn: 'WeakMap কিসের ওপর দুর্বল রেফারেন্স রাখে, ফলে ম্যানুয়ালি মুছে না দিলেও গার্বেজ কালেকশন নিজে থেকেই মেমোরি পরিষ্কার করে নেয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Memory Leaks & Profiling Quiz',
      bn: 'মেমোরি লিক এবং প্রোফাইলিং কুইজ'
    },
    questions: [
      {
        id: 'mem-leak-qz-1',
        kind: 'mcq',
        topic: 'detached-dom-leak',
        question: {
          en: 'What technical situation defines a Detached DOM Tree memory leak in browser applications?',
          bn: 'ব্রাউজার অ্যাপ্লিকেশনে ডিটাচড DOM ট্রি মেমোরি লিকের প্রযুক্তিগত সংজ্ঞা কী?'
        },
        options: [
          {
            en: 'An HTML element has been removed from the visible document tree, but a JavaScript variable or array still maintains an active reference to it, trapping the element in memory',
            bn: 'একটি এইচটিএমএল এলিমেন্ট দৃশ্যমান ডকুমেন্ট থেকে সরিয়ে ফেলা হয়েছে, কিন্তু কোনো জাভাস্ক্রিপ্ট ভেরিয়েবল বা অ্যারে এখনও সেটিকে রেফারেন্স করে মেমোরিতে আটকে রেখেছে',
          },
          {
            en: 'The computer screen is physically unplugged from the HDMI port',
            bn: 'কম্পিউটার স্ক্রিন ফিজিক্যাল HDMI পোর্ট থেকে খুলে ফেলা হয়েছে',
          },
          {
            en: 'The browser visits a website that has no CSS stylesheets',
            bn: 'ব্রাউজার এমন একটি ওয়েবসাইটে গেছে যাতে কোনো সিএসএস স্টাইলশিট নেই',
          },
          {
            en: 'The user closes all windows and shuts down the computer',
            bn: 'ব্যবহারকারী সমস্ত উইন্ডো বন্ধ করে কম্পিউটার সম্পূর্ণ শাটডাউন করেছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Removed from DOM but still referenced in JavaScript variables.',
          bn: 'DOM থেকে অপসারিত হলেও জাভাস্ক্রিপ্ট ভেরিয়েবলে রেফারেন্স রয়ে গেছে।',
        },
        explanation: {
          en: 'Detached DOM nodes cannot be displayed on screen, but because JavaScript variables reference them, the browser cannot free their memory.',
          bn: 'ডিটাচড DOM নোড স্ক্রিনে দেখা যায় না, কিন্তু কোডে রেফারেন্স থেকে যাওয়ায় ব্রাউজার তাদের মেমোরি মুক্ত করতে পারে না।'
        },
      },
      {
        id: 'mem-leak-qz-2',
        kind: 'mcq',
        topic: 'retained-size-troubleshooting',
        question: {
          en: 'Why is sorting Chrome DevTools Heap Snapshots by Retained Size more effective for locating leaks than sorting by Shallow Size?',
          bn: 'হিপ স্ন্যাপশটে লিক খুঁজে পেতে শ্যালো সাইজের বদলে রিটেইন্ড সাইজ দিয়ে সাজানো কেন বেশি কার্যকর?'
        },
        options: [
          {
            en: 'The root cause of a leak is often a tiny 32-byte closure or event listener whose Shallow Size is small, but whose Retained Size anchors hundreds of megabytes of downstream buffers',
            bn: 'মেমোরি লিকের মূল হোতা প্রায়শই ৩২-বাইটের একটি ক্ষুদ্র ক্লোজার বা লিসেনার যার শ্যালো সাইজ সামান্য, কিন্তু যার রিটেইন্ড সাইজ শত শত মেগাবাইট বাফার আটকে রাখে',
          },
          {
            en: 'Because Shallow Size only measures files written in Python',
            bn: 'কারণ শ্যালো সাইজ কেবল পাইথনে লেখা ফাইলের মাপ পরিমাপ করতে পারে',
          },
          {
            en: 'Because Retained Size displays funny pictures of computer chips',
            bn: 'কারণ রিটেইন্ড সাইজ কম্পিউটার চিপের মজার ছবি প্রদর্শন করে',
          },
          {
            en: 'Because Chrome DevTools disables Shallow Size when inspecting servers',
            bn: 'কারণ সার্ভার পরীক্ষার সময় Chrome DevTools শ্যালো সাইজ নিষ্ক্রিয় করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Small objects can anchor massive downstream data structures.',
          bn: 'ক্ষুদ্র অবজেক্টও নিজের সাথে যুক্ত করে বিশাল মেমোরি আটকে রাখতে পারে।',
        },
        explanation: {
          en: 'Leaking roots (like event listeners) typically have tiny shallow sizes. Sorting by retained size immediately surfaces the object responsible for holding vast memory.',
          bn: 'লিক সৃষ্টিকারী রুটগুলোর নিজস্ব সাইজ সামান্য হলেও রিটেইন্ড সাইজ দিয়ে সাজালে তারা কত বিশাল মেমোরি আটকে রেখেছে তা স্পষ্ট হয়ে যায়।'
        },
      },
      {
        id: 'mem-leak-qz-3',
        kind: 'mcq',
        topic: 'oom-killer-node-heap',
        question: {
          en: 'What sequence of events transpires when a production Node.js backend process exhausts its configured heap memory limit?',
          bn: 'প্রোডাকশন Node.js ব্যাকএন্ড প্রসেস যখন তার নির্ধারিত হিপ মেমোরির সর্বোচ্চ সীমা অতিক্রম করে, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'V8 triggers emergency full garbage collections, CPU utilization spikes to 100 percent due to GC thrashing, and the process crashes with a fatal "JavaScript heap out of memory" error',
            bn: 'V8 জরুরি ফুল গার্বেজ কালেকশন শুরু করে, ঘন ঘন GC চলার কারণে সিপিইউ ব্যবহার ১০০ শতাংশে ওঠে এবং প্রসেসটি "JavaScript heap out of memory" এরর দিয়ে ক্র্যাশ করে',
          },
          {
            en: 'The operating system converts the server into a microwave oven',
            bn: 'অপারেটিং সিস্টেম সার্ভারটিকে একটি মাইক্রোওয়েভ ওভেনে রূপান্তরিত করে',
          },
          {
            en: 'The server begins playing pop music through the motherboard buzzer',
            bn: 'সার্ভার মাদারবোর্ড বাজার দিয়ে উচ্চস্বরে গান বাজানো শুরু করে',
          },
          {
            en: 'All text on the computer screen flips upside down permanently',
            bn: 'কম্পিউটার স্ক্রিনের সমস্ত টেক্সট চিরতরে উল্টো হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'GC thrashing spikes CPU to 100% followed by fatal out-of-memory crash.',
          bn: 'ঘন ঘন GC চলার কারণে সিপিইউ ১০০% এ পৌঁছায় এবং এরপর fatal ক্র্যাশ ঘটে।',
        },
        explanation: {
          en: 'Near heap exhaustion, V8 frantically runs major GCs back-to-back (thrashing CPU). When no memory can be reclaimed, the runtime crashes.',
          bn: 'হিপ শেষ হয়ে এলে V8 বারবার ফুল GC চালায় যা সিপিইউ ব্যস্ত করে ফেলে, এবং মেমোরি খালি না হওয়ায় সিস্টেম ক্র্যাশ করে।'
        },
      },
      {
        id: 'mem-leak-qz-4',
        kind: 'mcq',
        topic: 'lexical-closure-scope-leak',
        question: {
          en: 'How can JavaScript lexical closures inadvertently cause memory leaks in long-running applications?',
          bn: 'দীর্ঘ সময় ধরে চলা অ্যাপ্লিকেশনে জাভাস্ক্রিপ্ট লেক্সিক্যাল ক্লোজার কীভাবে অনিচ্ছাকৃতভাবে মেমোরি লিক সৃষ্টি করতে পারে?'
        },
        options: [
          {
            en: 'When multiple closures share a common outer lexical context, retaining even one small callback keeps all variables within that shared scope alive in memory',
            bn: 'একাধিক ক্লোজার যখন একটি সাধারণ আউটার লেক্সিক্যাল স্কোপ শেয়ার করে, তখন একটি ক্ষুদ্র কলব্যাক বেঁচে থাকলেও সেই স্কোপে থাকা সমস্ত ভেরিয়েবল মেমোরিতে থেকে যায়',
          },
          {
            en: 'Because closures turn digital numbers into analog electrical sparks',
            bn: 'কারণ ক্লোজার ডিজিটাল সংখ্যাকে এনালগ বৈদ্যুতিক স্পার্কে পরিণত করে',
          },
          {
            en: 'Because functions in JavaScript delete memory addresses every midnight',
            bn: 'কারণ জাভাস্ক্রিপ্টের ফাংশনগুলো প্রতিদিন মধ্যরাতে মেমোরি ঠিকানা মুছে ফেলে',
          },
          {
            en: 'Because closures require three keyboards connected to the server',
            bn: 'কারণ ক্লোজার ব্যবহারের জন্য সার্ভারে তিনটি কিবোর্ড যুক্ত থাকতে হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Shared lexical scope contexts retain all enclosed variables if one closure survives.',
          bn: 'শেয়ার্ড লেক্সিক্যাল স্কোপের একটি ক্লোজার বেঁচে থাকলেও স্কোপের সমস্ত ডাটা আটকে থাকে।',
        },
        explanation: {
          en: 'V8 optimizes closures by sharing a single context across inner functions. Retaining one inner function keeps the entire parent context alive.',
          bn: 'V8 অভ্যন্তরীণ ফাংশনগুলোর মাঝে একক কনটেক্সট শেয়ার করে। একটি ছোট ফাংশন সক্রিয় থাকলেও পুরো প্যারেন্ট কনটেক্সটের সব ভেরিয়েবল জীবিত থাকে।'
        },
      },
    ],
  },
  next: {
    slug: 'fragmentation',
    title: {
      en: 'Memory Fragmentation: Internal vs External & Slab Allocation',
      bn: 'মেমোরি ফ্র্যাগমেন্টেশন: ইন্টারনাল বনাম এক্সটারনাল এবং স্ল্যাব অ্যালোকেশন'
    },
  },
};
