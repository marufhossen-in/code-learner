import type { Lesson } from '../../../lib/types';

export const GarbageCollectionLesson: Lesson = {
  slug: 'garbage-collection',
  tech: 'memory',
  title: {
    en: 'Garbage Collection: Tracing, Generational & Reference Counting Internals',
    bn: 'গার্বেজ কালেকশন: ট্রেসিং, জেনারেশনাল এবং রেফারেন্স কাউন্টিং মেকানিজম'
  },
  summary: {
    en: 'Understand how automated memory management works in modern virtual machines like Node.js V8, JVM, Python, and Go. Contrast Reference Counting against Tracing Garbage Collection. Explore the Mark-and-Sweep algorithm, the Weak Generational Hypothesis dividing memory into Young and Old Generations, and discover how concurrent garbage collectors minimize Stop-the-World pauses.',
    bn: 'Node.js V8, JVM, Python এবং Go-এর মতো আধুনিক ভার্চুয়াল মেশিনে স্বয়ংক্রিয় মেমোরি ম্যানেজমেন্ট কীভাবে কাজ করে তা বুঝুন। রেফারেন্স কাউন্টিং বনাম ট্রেসিং গার্বেজ কালেকশনের তুলনা করুন। মার্ক-অ্যান্ড-সুইপ অ্যালগরিদম, মেমোরিকে ইয়ং ও ওল্ড জেনারেশনে বিভক্তকারী উইক জেনারেশনাল হাইপোথিসিস অন্বেষণ করুন এবং কনকারেন্ট কালেক্টর কীভাবে স্টপ-দ্য-ওয়ার্ল্ড পজ কমিয়ে আনে তা শিখুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'manual-memory-vs-automated-gc',
      text: {
        en: 'The Burden of Manual Allocation versus Automated Reclamation',
        bn: 'ম্যানুয়াল মেমোরি বরাদ্দের ঝুঁকি বনাম স্বয়ংক্রিয় গার্বেজ কালেকশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When writing applications in systems languages like C, developers must balance every memory allocation with a manual deallocation. Forgetting to free memory creates runaway memory leaks, while freeing too early produces catastrophic dangling pointers. Virtual machines eliminate this operational burden by incorporating an automated Garbage Collector (GC).',
        bn: 'সি-এর মতো সিস্টেম প্রোগ্রামিং ভাষায় অ্যাপ্লিকেশন লেখার সময় ডেভেলপারদের প্রতিটি মেমোরি বরাদ্দের বিপরীতে ম্যানুয়ালি মেমোরি মুক্ত করতে হয়। মেমোরি মুক্ত করতে ভুলে গেলে মারাত্মক মেমোরি লিক ঘটে, আবার সময়ের আগেই মুক্ত করে দিলে বিপজ্জনক ড্যাংলিং পয়েন্টার তৈরি হয়। আধুনিক ভার্চুয়াল মেশিনগুলো স্বয়ংক্রিয় গার্বেজ কালেক্টর যুক্ত করে ডেভেলপারদের এই ঝুঁকিপূর্ণ বোঝা থেকে সম্পূর্ণ মুক্তি দিয়েছে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The garbage collector monitors running software, identifies heap objects that are no longer accessible by any part of the program, and automatically reclaims their bytes for future allocations. Two foundational architectures dominate modern memory management: Reference Counting and Tracing Garbage Collection.',
        bn: 'গার্বেজ কালেক্টর চলমান সফটওয়্যার পর্যবেক্ষণ করে, হিপের যেসব অবজেক্ট প্রোগ্রামের কোনো অংশের দ্বারাই আর অ্যাক্সেসযোগ্য নয় সেগুলোকে শনাক্ত করে এবং ভবিষ্যৎ ব্যবহারের জন্য সেগুলোর মেমোরি স্বয়ংক্রিয়ভাবে মুক্ত করে দেয়। আধুনিক মেমোরি ম্যানেজমেন্টে মূলত দুটি প্রধান আর্কিটেকচার ব্যবহৃত হয়: রেফারেন্স কাউন্টিং এবং ট্রেসিং গার্বেজ কালেকশন।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Reference Counting & The Cyclic Leak Trap',
            bn: '১. রেফারেন্স কাউন্টিং এবং সাইক্লিক লিক ফাঁদ'
          },
          text: {
            en: 'In reference counting systems like Python and Swift, every memory allocation tracks the count of incoming pointers in its header. When the tally drops to zero, the allocated block is reclaimed immediately. However, if Node A references Node B and Node B references Node A, their counters never reach zero, creating an uncollected cyclic leak.',
            bn: 'পাইথন এবং সুইফটের মতো রেফারেন্স কাউন্টিং সিস্টেমে প্রতিটি মেমোরি ব্লক হেডারে পয়েন্টারের মোট হিসাব জমা রাখে। কাউন্টারের মান শূন্যে পৌঁছালে ব্লকটি সাথে সাথে সিস্টেমে মুক্ত হয়ে যায়। তবে নোড A যদি নোড B কে এবং B যদি A কে নির্দেশ করে, তবে তাদের কাউন্টার কখনোই শূন্য হয় না, ফলে মেমোরিতে স্থায়ী সাইক্লিক লিক তৈরি হয়।'
          },
        },
        {
          title: {
            en: '2. Tracing GC Roots & Pointer Reachability',
            bn: '২. ট্রেসিং GC রুটস এবং পয়েন্টার অ্যাক্সেসযোগ্যতা'
          },
          text: {
            en: 'Tracing collectors (Node.js V8, Java HotSpot, Go) resolve cycles by starting from known GC Roots: active thread stack frames, global variables, and CPU hardware registers. The engine follows outgoing pointers like a graph traversal; unreached objects are deemed dead regardless of mutual references.',
            bn: 'ট্রেসিং কালেক্টর ( যেমন Node.js V8, Java HotSpot, Go ) রুটস থেকে অনুসন্ধান শুরু করে এই সাইক্লিক সমস্যার সমাধান করে: সক্রিয় থ্রেড স্ট্যাক ফ্রেম, গ্লোবাল ভেরিয়েবল এবং সিপিইউ রেজিস্টার হলো GC রুট। ইঞ্জিন গ্রাফের মতো পয়েন্টার অনুসরণ করে; যেসব অবজেক্টে পৌঁছানো যায় না সেগুলোকে সরাসরি মৃত ঘোষণা করা হয়।'
          },
        },
        {
          title: {
            en: '3. The Mark-and-Sweep Engine',
            bn: '৩. মার্ক-অ্যান্ড-সুইপ ইঞ্জিন মেকানিজম'
          },
          text: {
            en: 'The tracing process operates in two distinct phases: Mark and Sweep. During the Mark phase, reachable objects have a header bit set to 1. During the Sweep phase, the collector scans the heap sequentially, freeing all unmarked memory blocks back to the free list.',
            bn: 'ট্রেসিং প্রক্রিয়াটি দুটি নির্দিষ্ট ধাপে পরিচালিত হয়: মার্ক এবং সুইপ। মার্ক ধাপে পৌঁছানো সম্ভব এমন প্রতিটি অবজেক্টের হেডারে ১ বিট ফ্ল্যাগ সেট করা হয়। পরবর্তী সুইপ ধাপে কালেক্টর হিপের প্রতিটি মেমোরি ব্লক পরীক্ষা করে আনমার্ক করা অবজেক্টগুলোকে ফ্রি লিস্টে ফেরত পাঠিয়ে মেমোরি মুক্ত করে।'
          },
        },
        {
          title: {
            en: '4. The Weak Generational Hypothesis',
            bn: '৪. উইক জেনারেশনাল হাইপোথিসিস'
          },
          text: {
            en: 'Computer science research demonstrates that over 90 percent of software objects die almost immediately after creation. Engines exploit this by splitting memory into Young (Nursery) and Old (Tenured) generations. Surviving 2 minor cycles promotes an object to the Old Generation.',
            bn: 'কম্পিউটার বিজ্ঞানের গবেষণায় প্রমাণিত হয়েছে যে সফটওয়্যারে তৈরি হওয়া ৯০ শতাংশেরও বেশি অবজেক্ট তৈরির কিছুক্ষণের মধ্যেই ধ্বংস হয়ে যায়। ইঞ্জিনগুলো এই সুযোগ কাজে লাগিয়ে মেমোরিকে ইয়ং এবং ওল্ড জেনারেশনে ভাগ করে। ২ টি মাইনর সাইকেলে টিকে থাকা অবজেক্ট ওল্ড জেনারেশনে প্রমোশন পায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Tracing Garbage Collection: GC Roots, Generational Heap & Cyclic Island Reclamation',
        bn: 'ট্রেসিং গার্বেজ কালেকশন: GC রুটস, জেনারেশনাল হিপ এবং সাইক্লিক আইল্যান্ড উদ্ধার'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Tracing garbage collector diagram showing GC roots, reachable objects, and uncollected cyclic islands">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">TRACING GARBAGE COLLECTION &amp; GENERATIONAL HEAP</text>
  
  <!-- GC Roots Box -->
  <g transform="translate(30, 50)">
    <rect width="210" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="105" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">GC ROOTS (ANCHORS)</text>
    
    <rect x="15" y="45" width="180" height="60" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="90" y="68" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Thread Call Stack</text>
    <text x="90" y="86" fill="#cbd5e1" font-size="9" text-anchor="middle">Active local variables</text>
    
    <rect x="15" y="115" width="180" height="60" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="90" y="138" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Global Variables</text>
    <text x="90" y="156" fill="#cbd5e1" font-size="9" text-anchor="middle">Window / Process env</text>
    
    <rect x="15" y="185" width="180" height="60" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="90" y="208" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">CPU Registers</text>
    <text x="90" y="226" fill="#cbd5e1" font-size="9" text-anchor="middle">Active pointer addresses</text>
    
    <rect x="15" y="255" width="180" height="65" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="90" y="278" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Root Traversal Rule</text>
    <text x="90" y="296" fill="#cbd5e1" font-size="9" text-anchor="middle">Objects unreached from</text>
    <text x="90" y="309" fill="#cbd5e1" font-size="9" text-anchor="middle">roots are ALWAYS garbage</text>
  </g>
  
  <!-- Young Generation Space -->
  <g transform="translate(270, 50)">
    <rect width="260" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="130" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">YOUNG GENERATION (NURSERY)</text>
    
    <!-- Live Object A -->
    <rect x="20" y="45" width="220" height="65" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="130" y="68" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Object A [Marked ALIVE]</text>
    <text x="130" y="88" fill="#cbd5e1" font-size="9" text-anchor="middle">Connected directly to stack root</text>
    <text x="130" y="101" fill="#38bdf8" font-size="9" text-anchor="middle">Age: 1 Minor Cycle</text>
    
    <!-- Live Object B -->
    <rect x="20" y="120" width="220" height="65" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="130" y="143" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">Object B [Marked ALIVE]</text>
    <text x="130" y="163" fill="#cbd5e1" font-size="9" text-anchor="middle">Referenced by Object A</text>
    <text x="130" y="176" fill="#38bdf8" font-size="9" text-anchor="middle">Age: 1 Minor Cycle</text>
    
    <!-- Promotion Banner -->
    <rect x="20" y="195" width="220" height="35" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="130" y="217" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Survive 2 cycles -> Promote to Old -></text>
    
    <!-- Transient Dead Objects -->
    <rect x="20" y="240" width="220" height="85" rx="6" fill="#450a0a" stroke="#ef4444" stroke-dasharray="4 4"/>
    <text x="130" y="265" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">90% Transient Trash</text>
    <text x="130" y="285" fill="#fca5a5" font-size="9" text-anchor="middle">Intermediate closures, promises,</text>
    <text x="130" y="299" fill="#fca5a5" font-size="9" text-anchor="middle">unreferenced string buffers</text>
    <text x="130" y="313" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">SWEPT IN &lt; 2 MS</text>
  </g>
  
  <!-- Old Generation & Cyclic Trash -->
  <g transform="translate(560, 50)">
    <rect width="250" height="340" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="125" y="26" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">OLD GENERATION &amp; CYCLES</text>
    
    <!-- Long lived singleton -->
    <rect x="15" y="45" width="220" height="65" rx="6" fill="#0f172a" stroke="#f59e0b"/>
    <text x="125" y="68" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">Database Connection Pool</text>
    <text x="125" y="88" fill="#cbd5e1" font-size="9" text-anchor="middle">Survives entire server lifecycle</text>
    <text x="125" y="101" fill="#94a3b8" font-size="9" text-anchor="middle">Age: 100+ Cycles (Tenured)</text>
    
    <!-- Cyclic Island -->
    <rect x="15" y="130" width="220" height="135" rx="6" fill="#18181b" stroke="#ef4444" stroke-width="2"/>
    <text x="125" y="152" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">CYCLIC REFERENCE ISLAND</text>
    
    <rect x="25" y="165" width="90" height="40" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="70" y="188" fill="#fca5a5" font-size="10" text-anchor="middle">Node X</text>
    
    <rect x="135" y="165" width="90" height="40" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="180" y="188" fill="#fca5a5" font-size="10" text-anchor="middle">Node Y</text>
    
    <!-- Cyclic arrows -->
    <line x1="115" y1="178" x2="135" y2="178" stroke="#ef4444" stroke-width="2"/>
    <line x1="135" y1="195" x2="115" y2="195" stroke="#ef4444" stroke-width="2"/>
    
    <text x="125" y="225" fill="#fca5a5" font-size="9" text-anchor="middle">X points to Y, Y points to X</text>
    <text x="125" y="239" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">NO ROOT REACHES THEM</text>
    <text x="125" y="253" fill="#ef4444" font-size="9" text-anchor="middle">Tracing GC reclaims them safely!</text>
    
    <!-- Major GC notice -->
    <rect x="15" y="280" width="220" height="45" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="125" y="300" fill="#94a3b8" font-size="9" text-anchor="middle">Major Full GC sweeps Old Gen</text>
    <text x="125" y="314" fill="#94a3b8" font-size="9" text-anchor="middle">Runs concurrently via worker threads</text>
  </g>
  
  <!-- Root pointer line -->
  <line x1="195" y1="125" x2="290" y2="125" stroke="#38bdf8" stroke-width="2"/>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Tracing collectors follow paths from roots; cyclic islands with zero root paths are safely freed</text>
</svg>`,
      caption: {
        en: 'Tracing garbage collectors traverse pointers from roots. Cyclic islands lacking root references are safely detected and reclaimed.',
        bn: 'ট্রেসিং গার্বেজ কালেক্টর রুট থেকে পয়েন্টার অনুসরণ করে। যেসব সাইক্লিক অবজেক্টে রুটের কোনো সংযোগ নেই সেগুলোকে শনাক্ত করে মেমোরি মুক্ত করা হয়।'
      },
    },
    {
      type: 'heading',
      id: 'mark-sweep-and-generational-code',
      text: {
        en: 'Generational Tracing GC Engine Simulation',
        bn: 'জেনারেশনাল ট্রেসিং GC ইঞ্জিন সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Modern engines avoid costly full-heap sweeps on every pass. By maintaining an aging counter, objects that survive initial nursery collections are promoted to the older generation space. The following code demonstrates reachability tracing, cyclic garbage collection, and generational survival.',
        bn: 'আধুনিক ভার্চুয়াল মেশিন প্রতিবার সম্পূর্ণ হিপ স্ক্যান করার মতো ধীরগতির ভুল করে না। অবজেক্টের বয়সে নজর রেখে যেসব অবজেক্ট প্রথমদিকের নার্সারি কালেকশনে বেঁচে যায় সেগুলোকে ওল্ড জেনারেশনে পাঠিয়ে দেওয়া হয়। নিচের কোডটি রুট অ্যাক্সেসিবিলিটি ট্রেসিং, সাইক্লিক গার্বেজ উদ্ধার এবং জেনারেশনাল সার্ভাইভাল নিখুঁতভাবে প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'tracing-garbage-collector.js',
      code: `// Deterministic Mark-and-Sweep & Generational Garbage Collector Simulator
// Solves cyclic references and demonstrates nursery-to-old promotion

class HeapObject {
  constructor(id, byteSize = 64) {
    this.id = id;
    this.byteSize = byteSize;
    this.pointers = [];   // Outgoing references
    this.marked = false;  // Mark bit
    this.cyclesSurvived = 0; // Generational age
    this.generation = 'Young';
  }
}

class RuntimeMemoryManager {
  constructor() {
    this.heap = new Map();
    this.roots = new Set(); // Stack variables, globals
  }

  allocate(id, byteSize) {
    const obj = new HeapObject(id, byteSize);
    this.heap.set(id, obj);
    return obj;
  }

  // Phase 1: Mark all reachable nodes starting from roots
  mark() {
    for (const obj of this.heap.values()) {
      obj.marked = false;
    }

    const queue = [...this.roots];
    while (queue.length > 0) {
      const rootId = queue.shift();
      const obj = this.heap.get(rootId);
      if (obj && !obj.marked) {
        obj.marked = true;
        for (const child of obj.pointers) {
          if (!child.marked) {
            queue.push(child.id);
          }
        }
      }
    }
  }

  // Phase 2: Sweep unvisited objects and age survivors
  sweep() {
    let reclaimedCount = 0;
    let reclaimedBytes = 0;
    const deadIds = [];

    for (const [id, obj] of this.heap) {
      if (!obj.marked) {
        deadIds.push(id);
        reclaimedCount++;
        reclaimedBytes += obj.byteSize;
      } else {
        // Generational aging: survive 2 cycles to reach Old Gen
        obj.cyclesSurvived++;
        if (obj.cyclesSurvived >= 2) {
          obj.generation = 'Old';
        }
      }
    }

    for (const id of deadIds) {
      this.heap.delete(id);
    }

    return { reclaimedCount, reclaimedBytes, liveCount: this.heap.size };
  }

  collect() {
    this.mark();
    return this.sweep();
  }
}

const runtime = new RuntimeMemoryManager();

console.log('=== Step 1: Allocating Live Objects & Roots ===');
const rootObj = runtime.allocate('user_session', 128);
const profileObj = runtime.allocate('user_profile', 256);
rootObj.pointers.push(profileObj);
runtime.roots.add('user_session'); // Anchored in stack frame

console.log('=== Step 2: Creating Isolated Cyclic Island ===');
const nodeA = runtime.allocate('cyclic_node_A', 64);
const nodeB = runtime.allocate('cyclic_node_B', 64);
nodeA.pointers.push(nodeB);
nodeB.pointers.push(nodeA); // Node A and B reference each other!
// Neither nodeA nor nodeB are added to runtime.roots

console.log('Total allocated objects in heap:', runtime.heap.size);

console.log('\\n=== Step 3: Triggering First Garbage Collection Cycle ===');
const sweep1 = runtime.collect();
console.log('Reclaimed dead objects :', sweep1.reclaimedCount, '(' + sweep1.reclaimedBytes + ' bytes freed)');
console.log('Surviving live objects :', sweep1.liveCount);
console.log('Cyclic Island Status   : Safely destroyed because roots could not reach it!');

console.log('\\n=== Step 4: Generational Promotion ===');
console.log('user_session Generation before Cycle 2:', runtime.heap.get('user_session').generation);
runtime.collect(); // Cycle 2
console.log('user_session Generation after Cycle 2 :', runtime.heap.get('user_session').generation);
console.log('Result: user_session survived 2 cycles and was promoted to Old Generation.');`,
      caption: {
        en: 'The GC simulator traverses live pointers, reclaims unreachable cyclic objects, and promotes survivors to the Old Generation after 2 cycles.',
        bn: 'GC সিমুলেটরটি লাইভ পয়েন্টার অনুসরণ করে, রুটহীন সাইক্লিক অবজেক্ট মুক্ত করে এবং ২ সাইকেল পর টিকে থাকা অবজেক্টকে ওল্ড জেনারেশনে প্রমোট করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Stop-The-World Latency & Modern Concurrent Marking',
        bn: 'স্টপ-দ্য-ওয়ার্ল্ড লেটেন্সি এবং আধুনিক কনকারেন্ট মার্কিং'
      },
      text: {
        en: 'In early runtime engines, garbage collection froze application execution entirely while tracing heap graphs—causing noticeable UI stutters and server latency spikes known as Stop-the-World pauses. Modern engines like Node.js V8 and Go utilize Concurrent Marking. Dedicated background helper threads trace and mark the heap graph simultaneously while the main application thread runs business logic, cutting pause times from hundreds of milliseconds to under 1 millisecond.',
        bn: 'প্রথমদিকের রানটাইম ইঞ্জিনগুলোতে গার্বেজ কালেকশন চলার সময় সম্পূর্ণ অ্যাপ্লিকেশন থমকে যেত, যাকে স্টপ-দ্য-ওয়ার্ল্ড পজ বলা হয়। এর ফলে ব্রাউজারে ল্যাগ এবং সার্ভারে লেটেন্সি স্পাইক দেখা দিত। বর্তমান Node.js V8 এবং Go-এর মতো আধুনিক ইঞ্জিনগুলো কনকারেন্ট মার্কিং ব্যবহার করে। ব্যাকগ্রাউন্ডের হেল্পার থ্রেডগুলো সমান্তরালভাবে মেমোরি গ্রাফ স্ক্যান করে আর মূল থ্রেডে কোনো বিরতি ছাড়াই কোড চলতে থাকে, যা পজের সময়কে শত শত মিলিসেকেন্ড থেকে কমিয়ে ১ মিলিসেকেন্ডের নিচে নিয়ে এসেছে।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-gc-ex-1',
      kind: 'predict',
      question: {
        en: 'According to the Weak Generational Hypothesis, approximately what percentage of newly allocated objects die almost immediately? (90). Type the number.',
        bn: 'উইক জেনারেশনাল হাইপোথিসিস অনুসারে, মেমোরিতে নতুন তৈরি হওয়া অবজেক্টগুলোর প্রায় শতকরা কত ভাগ দ্রুত ধ্বংস হয়ে যায়? ( ৯০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '90',
      hint: {
        en: 'Empirical research shows over 90 percent of objects are short-lived.',
        bn: 'গবেষণায় দেখা গেছে ৯০ শতাংশেরও বেশি অবজেক্ট ক্ষণস্থায়ী হয়।'
      },
      explanation: {
        en: 'The Weak Generational Hypothesis states that most objects die shortly after creation, making young generation collections highly efficient.',
        bn: 'উইক জেনারেশনাল হাইপোথিসিস নির্দেশ করে যে অধিকাংশ অবজেক্ট তৈরির কিছুক্ষণের মধ্যেই নষ্ট হয়ে যায়, ফলে ইয়ং জেনারেশন কালেকশন অত্যন্ত কার্যকর হয়।'
      },
    },
    {
      id: 'mem-gc-ex-2',
      kind: 'mcq',
      question: {
        en: 'What architectural vulnerability plagues naive Reference Counting garbage collectors?',
        bn: 'সাধারণ রেফারেন্স কাউন্টিং গার্বেজ কালেক্টরে কোন মারাত্মক আর্কিটেকচারাল ত্রুটি দেখা যায়?'
      },
      options: [
        {
          en: 'They cannot detect or reclaim cyclic dependencies where two unreachable objects point to each other, creating permanent memory leaks',
          bn: 'তারা সাইক্লিক ডিপেনডেন্সি শনাক্ত বা উদ্ধার করতে পারে না যেখানে দুটি অপ্রয়োজনীয় অবজেক্ট পরস্পরকে নির্দেশ করে থাকে, ফলে স্থায়ী মেমোরি লিক ঘটে',
        },
        {
          en: 'They delete the operating system audio drivers automatically',
          bn: 'তারা অপারেটিং সিস্টেমের অডিও ড্রাইভার স্বয়ংক্রিয়ভাবে মুছে ফেলে',
        },
        {
          en: 'They can only count numbers up to 10 before resetting',
          bn: 'তারা রিসেট হওয়ার আগে কেবল ১০ পর্যন্ত সংখ্যা গণনা করতে পারে',
        },
        {
          en: 'They require an active internet connection to allocate strings',
          bn: 'স্ট্রিং বরাদ্দ করার জন্য তাদের সক্রিয় ইন্টারনেট সংযোগের প্রয়োজন হয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Mutual references prevent reference counts from ever reaching zero.',
        bn: 'পারস্পরিক রেফারেন্সের কারণে কাউন্টারের মান কখনোই শূন্য হতে পারে না।',
      },
      explanation: {
        en: 'Reference counting fails when cyclic references form, because each object holds a reference to the other, keeping reference counts above zero indefinitely.',
        bn: 'সাইক্লিক রেফারেন্স তৈরি হলে রেফারেন্স কাউন্ট কখনোই শূন্য হয় না, ফলে অবজেক্টগুলো মেমোরিতে চিরকাল আটকে থাকে।'
      },
    },
    {
      id: 'mem-gc-ex-3',
      kind: 'mcq',
      question: {
        en: 'What are "GC Roots" in a modern Tracing Garbage Collector?',
        bn: 'একটি আধুনিক ট্রেসিং গার্বেজ কালেক্টরে "GC Roots" বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'The foundational set of active live pointers—including thread stack variables, CPU registers, and global objects—from which reachability traversal begins',
          bn: 'সক্রিয় লাইভ পয়েন্টারগুলোর ভিত্তিগত সেট—যার মধ্যে থ্রেড স্ট্যাক ভেরিয়েবল, সিপিইউ রেজিস্টার এবং গ্লোবাল অবজেক্ট অন্তর্ভুক্ত—যেখান থেকে ট্রেসিং শুরু হয়',
        },
        {
          en: 'The electrical wires connecting the motherboard to the power wall socket',
          bn: 'মাদারবোর্ডকে দেয়ালের পাওয়ার সকেটের সাথে যুক্তকারী বৈদ্যুতিক তারগুলো',
        },
        {
          en: 'The root folder where the computer installs video games',
          bn: 'কম্পিউটার যেখানে ভিডিও গেম ইন্সটল করে সেই রুট ফোল্ডার',
        },
        {
          en: 'The physical plastic feet supporting the computer case on the desk',
          bn: 'ডেস্কের ওপর কম্পিউটারের কেসিংকে ধরে রাখা প্লাস্টিকের নিচের পায়াগুলো',
        },
      ],
      answer: 0,
      hint: {
        en: 'The starting set of live pointer references (stacks, registers, globals).',
        bn: 'ট্রেসিং শুরুর লাইভ রেফারেন্সের মূল উৎস ( স্ট্যাক, রেজিস্টার, গ্লোবাল )।',
      },
      explanation: {
        en: 'GC Roots represent objects known to be alive. The collector traverses all pointers reachable from these roots to determine live memory.',
        bn: 'GC রুটস হলো নিশ্চিতভাবে জীবিত অবজেক্টের উৎস। এখান থেকে পয়েন্টার অনুসরণ করে বাকি সমস্ত লাইভ অবজেক্ট শনাক্ত করা হয়।'
      },
    },
    {
      id: 'mem-gc-ex-4',
      kind: 'predict',
      question: {
        en: 'If a generational collector promotes an object to the Old Generation after surviving 2 garbage collection cycles, how many cycles must it survive? (2). Type the number.',
        bn: 'একটি জেনারেশনাল কালেক্টর যদি ২ টি গার্বেজ কালেকশন সাইকেলে টিকে থাকার পর অবজেক্টকে ওল্ড জেনারেশনে প্রমোট করে, তবে কয়টি সাইকেল টিকে থাকতে হবে? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'Surviving 2 cycles triggers promotion: 2.',
        bn: '২ টি সাইকেলে টিকে থাকলেই প্রমোশন ঘটে: ২।'
      },
      explanation: {
        en: 'Surviving 2 collection passes in the Young Generation proves longevity, triggering promotion to the Old Generation.',
        bn: 'ইয়ং জেনারেশনে ২ টি কালেকশন সাইকেলে টিকে থাকা প্রমাণ করে অবজেক্টটি দীর্ঘস্থায়ী, ফলে এটি ওল্ড জেনারেশনে উত্তীর্ণ হয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Garbage Collection Internals Quiz',
      bn: 'গার্বেজ কালেকশন মেকানিজম কুইজ'
    },
    questions: [
      {
        id: 'mem-gc-qz-1',
        kind: 'mcq',
        topic: 'mark-sweep-phases',
        question: {
          en: 'What distinct operations occur during the Mark and Sweep phases of tracing garbage collection?',
          bn: 'ট্রেসিং গার্বেজ কালেকশনের মার্ক এবং সুইপ ধাপে কোন সুনির্দিষ্ট কাজগুলো সম্পন্ন হয়?'
        },
        options: [
          {
            en: 'The Mark phase traverses reachable objects from GC roots and flags them as alive; the Sweep phase scans heap memory and reclaims all unflagged blocks',
            bn: 'মার্ক ধাপে GC রুট থেকে সমস্ত সচল অবজেক্ট খুঁজে সেগুলোকে জীবিত চিহ্নিত করা হয়; সুইপ ধাপে হিপ স্ক্যান করে চিহ্নহীন বাকি অবজেক্টগুলোর মেমোরি মুক্ত করা হয়',
          },
          {
            en: 'The Mark phase deletes all files on disk; the Sweep phase formats the RAM',
            bn: 'মার্ক ধাপ ডিস্কের সমস্ত ফাইল মুছে দেয়; সুইপ ধাপ র‍্যামকে ফরম্যাট করে',
          },
          {
            en: 'The Mark phase calculates tax rates; the Sweep phase prints the receipts',
            bn: 'মার্ক ধাপ ট্যাক্সের হিসাব করে; সুইপ ধাপ রসিদ প্রিন্ট করে',
          },
          {
            en: 'The Mark phase switches off the monitor; the Sweep phase turns it back on',
            bn: 'মার্ক ধাপ মনিটর বন্ধ করে; সুইপ ধাপ তা পুনরায় চালু করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Mark reachable objects as alive, then sweep away unmarked dead objects.',
          bn: 'লাইভ অবজেক্টকে মার্ক করা এবং পরবর্তীতে আনমার্ক করা অপ্রয়োজনীয় অবজেক্ট সুইপ করা।',
        },
        explanation: {
          en: 'Tracing collectors mark reachable memory graphs first, then reclaim all unvisited garbage objects during the subsequent sweep.',
          bn: 'ট্রেসিং কালেক্টর প্রথমে লাইভ অবজেক্টগুলোকে মার্ক করে, তারপর সুইপ ধাপে অবহেলিত বাকি সব অবজেক্ট মুছে মেমোরি মুক্ত করে।'
        },
      },
      {
        id: 'mem-gc-qz-2',
        kind: 'mcq',
        topic: 'generational-gc-efficiency',
        question: {
          en: 'Why is Generational Garbage Collection far more CPU-efficient than scanning the entire heap on every collection pass?',
          bn: 'প্রতিটি কালেকশনে সম্পূর্ণ হিপ স্ক্যান করার তুলনায় জেনারেশনাল গার্বেজ কালেকশন কেন সিপিইউর জন্য অনেক বেশি সাশ্রয়ী?'
        },
        options: [
          {
            en: 'Because most objects die young, the collector can run fast, frequent minor collections on just the small Young Generation without inspecting the massive Old Generation',
            bn: 'কারণ অধিকাংশ অবজেক্ট দ্রুতই ধ্বংস হয়ে যায়, তাই কালেক্টর বিশাল ওল্ড জেনারেশন স্পর্শ না করেই কেবল ক্ষুদ্র ইয়ং জেনারেশনে দ্রুত মাইনর কালেকশন চালাতে পারে',
          },
          {
            en: 'Because the computer fan spins faster when memory is divided into generations',
            bn: 'কারণ মেমোরিকে প্রজন্মে ভাগ করলে কম্পিউটারের ফ্যান দ্রুত ঘোরে',
          },
          {
            en: 'Because older objects turn into silicon crystals that require no power',
            bn: 'কারণ পুরনো অবজেক্টগুলো সিলিকন ক্রিস্টালে রূপান্তরিত হয় যার কোনো বিদ্যুতের প্রয়োজন হয় না',
          },
          {
            en: 'Because generational garbage collectors run only when the user is asleep',
            bn: 'কারণ জেনারেশনাল গার্বেজ কালেক্টর কেবল ব্যবহারকারী ঘুমিয়ে থাকার সময় কাজ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Focusing sweeps on the high-churn Young Generation avoids inspecting the large Old Generation.',
          bn: 'ঘন ঘন পরিবর্তিত ইয়ং জেনারেশন পরিষ্কারের মাধ্যমে বিশাল ওল্ড জেনারেশনের স্ক্যান এড়ানো যায়।',
        },
        explanation: {
          en: 'Generational collectors achieve high throughput by isolating the small nursery space where high object death rates yield massive reclaimed memory in milliseconds.',
          bn: 'জেনারেশনাল কালেক্টর ক্ষুদ্র নার্সারি স্পেসের ওপর মনোযোগ দেয়, যেখানে বিপুল সংখ্যক ক্ষণস্থায়ী অবজেক্ট দ্রুত মুক্ত করে চমৎকার পারফরম্যান্স পাওয়া যায়।'
        },
      },
      {
        id: 'mem-gc-qz-3',
        kind: 'mcq',
        topic: 'concurrent-gc-marking',
        question: {
          en: 'How does modern Concurrent Marking in engines like V8 and Go prevent noticeable latency pauses in web applications and backend APIs?',
          bn: 'V8 এবং Go-এর মতো ইঞ্জিনে আধুনিক কনকারেন্ট মার্কিং কীভাবে ওয়েব অ্যাপ ও ব্যাকএন্ড এপিআইতে কোনো নোটিশযোগ্য লেটেন্সি বিরতি প্রতিরোধ করে?'
        },
        options: [
          {
            en: 'Background worker threads trace and mark the object graph concurrently while the main application thread continues executing business logic without stopping',
            bn: 'ব্যাকগ্রাউন্ডের কর্মী থ্রেডগুলো সমান্তরালভাবে অবজেক্ট গ্রাফ স্ক্যান ও মার্ক করতে থাকে, ফলে মূল অ্যাপ্লিকেশন থ্রেড না থেমেই অবিরাম কোড চালাতে পারে',
          },
          {
            en: 'By lowering screen resolution to 240p during collections',
            bn: 'কালেকশনের সময় স্ক্রিন রেজোলিউশন কমিয়ে ২৪০p তে নামিয়ে আনার মাধ্যমে',
          },
          {
            en: 'By discarding half of all database queries automatically',
            bn: 'ডাটাবেজের অর্ধেক কুয়েরি স্বয়ংক্রিয়ভাবে বাতিল করে দেওয়ার মাধ্যমে',
          },
          {
            en: 'By requiring users to press Enter twice before continuing',
            bn: 'সামনে এগিয়ে যাওয়ার আগে ব্যবহারকারীকে দুইবার এন্টার চাপতে বাধ্য করার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tracing happens on background threads in parallel with application execution.',
          bn: 'অ্যাপ্লিকেশনের কোড চলার সমান্তরালেই ব্যাকগ্রাউন্ড থ্রেডে ট্রেসিং সম্পন্ন হয়।',
        },
        explanation: {
          en: 'Concurrent garbage collection eliminates Stop-the-World pauses by performing pointer traversal on parallel helper threads.',
          bn: 'কনকারেন্ট গার্বেজ কালেকশন ব্যাকগ্রাউন্ড হেল্পার থ্রেডে গ্রাফ স্ক্যান করে দীর্ঘ স্টপ-দ্য-ওয়ার্ল্ড পজ সম্পূর্ণরূপে দূর করে।'
        },
      },
      {
        id: 'mem-gc-qz-4',
        kind: 'mcq',
        topic: 'go-runtime-gc-design',
        question: {
          en: 'Why does the Go programming language runtime use a non-moving concurrent collector rather than a moving generational collector like Java HotSpot?',
          bn: 'গো প্রোগ্রামিং ভাষার রানটাইম জাভা হটস্পটের মতো মুভিং জেনারেশনাল কালেক্টরের বদলে কেন নন-মুভিং কনকারেন্ট কালেক্টর ব্যবহার করে?'
        },
        options: [
          {
            en: 'Go compiles to native machine code with interior pointers into structs; moving objects in memory would require complex pointer rewrites, so Go prioritizes ultra-low sub-millisecond pause times over compaction',
            bn: 'গো সরাসরি নেটিভ মেশিন কোডে কম্পাইল হয় এবং স্ট্রাক্টের ভেতরে ইন্টেরিয়র পয়েন্টার রাখে; মেমোরিতে অবজেক্ট স্থানান্তরিত করলে পয়েন্টার জটিলতা বাড়ে, তাই গো কম্প্যাকশনের চেয়ে ১ মিলি-সেকেন্ডের কম লেটেন্সিকে অগ্রাধিকার দেয়',
          },
          {
            en: 'Because Go software can only run on machines without graphics cards',
            bn: 'কারণ গো সফটওয়্যার কেবল গ্রাফিক্স কার্ডবিহীন কম্পিউটারে চলতে পারে',
          },
          {
            en: 'Because Google prohibited the use of computer generations in 2009',
            bn: 'কারণ গুগল ২০০৯ সালে সফটওয়্যারে জেনারেশনাল মেমোরি ব্যবহার নিষিদ্ধ করেছিল',
          },
          {
            en: 'To ensure Go programs take 10 times more disk space when saved',
            bn: 'সংরক্ষণ করার সময় গো প্রোগ্রাম যেন ১০ গুণ বেশি ডিস্ক জায়গা দখল করে তা নিশ্চিত করতে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Go supports interior pointers and prioritizes sub-millisecond GC pauses.',
          bn: 'গো ইন্টেরিয়র পয়েন্টার সমর্থন করে এবং ১ মিলিসেকেন্ডের কম পজ সময়কে প্রাধান্য দেয়।',
        },
        explanation: {
          en: 'Go avoids moving objects to keep interior pointers valid and maintain predictable, ultra-low sub-millisecond latency for concurrent microservices.',
          bn: 'গো ইন্টেরিয়র পয়েন্টারকে অক্ষত রাখতে এবং মাইক্রোসার্ভিসে ১ মিলি-সেকেন্ডের কম লেটেন্সি দিতে নন-মুভিং ট্রাই-কালার কনকারেন্ট কালেক্টর ব্যবহার করে।'
        },
      },
    ],
  },
  next: {
    slug: 'memory-leaks',
    title: {
      en: 'Memory Leaks: Detection, Profiling & Heap Snapshots',
      bn: 'মেমোরি লিক: ডিটেকশন, প্রোফাইলিং এবং হিপ স্ন্যাপশট'
    },
  },
};
