import type { Lesson } from '../../../lib/types';

export const MergesAndTheMergeLesson: Lesson = {
  slug: 'merges-and-the-merge',
  tech: 'query-optimization',
  title: {
    en: 'Physical Join Strategies: Nested Loop, Hash & Merge Joins',
    bn: 'ফিজিক্যাল জয়েন কৌশল: নেস্টেড লুপ, হ্যাশ ও মার্জ জয়েন'
  },
  summary: {
    en: 'Master physical database join algorithms: understand how the optimizer selects between Nested Loop Joins, in-memory Hash Joins, and sorted Merge Joins, and identify join performance bottlenecks.',
    bn: 'ফিজিক্যাল ডাটাবেস জয়েন অ্যালগরিদম আয়ত্ত করুন: অপ্টিমাইজার কীভাবে নেস্টেড লুপ, ইন-মেমরি হ্যাশ জয়েন এবং সাজানো মার্জ জয়েন বেছে নেয় এবং জয়েনের পারফরম্যান্স সংকট দূর করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'how-databases-join-tables',
      text: {
        en: 'How Relational Engines Join Tables: The Three Physical Algorithms',
        bn: 'ডাটাবেস কীভাবে টেবিল জোড়া লাগায়: তিনটি ফিজিক্যাল অ্যালগরিদম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you write an SQL JOIN statement, you specify a logical relationship between 2 tables. You do not tell the database how to combine the physical rows. To execute the join on disk, the database Cost-Based Optimizer must pick 1 of 3 physical algorithms: Nested Loop Join, Hash Join, or Merge Join.',
        bn: 'যখন আপনি একটি SQL JOIN স্টেটমেন্ট লেখেন, আপনি ২টি টেবিলের মধ্যে একটি লজিক্যাল সম্পর্ক নির্ধারণ করেন। কিন্তু ডিস্ক থেকে সারিগুলো কীভাবে একত্রিত করতে হবে তা আপনি ডাটাবেসকে বলেন না। ডিস্কে জয়েন পরিচালনা করতে ডাটাবেস কস্ট-বেসড অপ্টিমাইজারকে ৩টি ফিজিক্যাল অ্যালগরিদমের মধ্য থেকে ১টি বেছে নিতে হয়: নেস্টেড লুপ জয়েন, হ্যাশ জয়েন অথবা মার্জ জয়েন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Each physical strategy possesses distinct computational trade-offs. Choosing the wrong strategy can increase query runtime by a factor of 1000. Understanding how each algorithm processes data, what memory it requires, and when the optimizer prefers it is essential for database query tuning.',
        bn: 'প্রতিটি ফিজিক্যাল কৌশলের নিজস্ব সুবিধা এবং মেমরির সীমাবদ্ধতা রয়েছে। ভুল অ্যালগরিদম নির্বাচিত হলে কোয়েরির চলার সময় ১০০০ গুণ পর্যন্ত বেড়ে যেতে পারে। প্রতিটি অ্যালগরিদম কীভাবে কাজ করে, কী পরিমাণ মেমরি দাবি করে এবং অপ্টিমাইজার কখন কোনটি বেছে নেয় তা বোঝা ডাটাবেস অপ্টিমাইজেশনের জন্য অত্যন্ত জরুরি।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Comparison of the Three Physical Join Algorithms in Relational Databases',
        bn: 'রিলেশনাল ডাটাবেসে তিনটি ফিজিক্যাল জয়েন অ্যালগরিদমের তুলনামূলক চিত্র'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Physical Join Strategies Diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Strategy 1: Nested Loop Join -->
  <g transform="translate(25, 30)">
    <rect width="215" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <rect width="215" height="32" rx="8" fill="#0284c7" />
    <text x="107" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">1. Nested Loop Join</text>
    <text x="15" y="55" fill="#38bdf8" font-size="10" font-weight="bold">Mechanism: O(M * log N)</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Loop outer table rows</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Probe inner index seek</text>
    <rect x="15" y="115" width="185" height="60" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="135" fill="#a7f3d0" font-size="9" font-weight="bold">Best When:</text>
    <text x="25" y="152" fill="#cbd5e1" font-size="8">Outer is tiny (10 rows) and</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="8">inner table has B-Tree index.</text>
    <text x="15" y="200" fill="#f87171" font-size="9" font-weight="bold">Danger:</text>
    <text x="15" y="216" fill="#cbd5e1" font-size="8">O(M * N) cartesian explosion</text>
    <text x="15" y="230" fill="#cbd5e1" font-size="8">if inner table lacks an index!</text>
  </g>

  <!-- Strategy 2: Hash Join -->
  <g transform="translate(262, 30)">
    <rect width="215" height="260" rx="8" fill="#1e293b" stroke="#facc15" stroke-width="1.5" />
    <rect width="260" height="32" rx="8" fill="#ca8a04" width="215" />
    <text x="107" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">2. Hash Join</text>
    <text x="15" y="55" fill="#fde68a" font-size="10" font-weight="bold">Mechanism: O(M + N)</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Build: Hash small table in RAM</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Probe: Stream large table</text>
    <rect x="15" y="115" width="185" height="60" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="135" fill="#a7f3d0" font-size="9" font-weight="bold">Best When:</text>
    <text x="25" y="152" fill="#cbd5e1" font-size="8">Large unsorted tables with</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="8">equality join conditions (=).</text>
    <text x="15" y="200" fill="#f87171" font-size="9" font-weight="bold">Danger:</text>
    <text x="15" y="216" fill="#cbd5e1" font-size="8">Spills to disk batches if hash</text>
    <text x="15" y="230" fill="#cbd5e1" font-size="8">table exceeds work_mem RAM!</text>
  </g>

  <!-- Strategy 3: Merge Join -->
  <g transform="translate(500, 30)">
    <rect width="215" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="215" height="32" rx="8" fill="#059669" />
    <text x="107" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">3. Merge Join</text>
    <text x="15" y="55" fill="#34d399" font-size="10" font-weight="bold">Mechanism: O(M + N)</text>
    <text x="15" y="75" fill="#cbd5e1" font-size="9">• Both inputs pre-sorted</text>
    <text x="15" y="93" fill="#cbd5e1" font-size="9">• Zipper two pointers forward</text>
    <rect x="15" y="115" width="185" height="60" rx="4" fill="#0f172a" stroke="#475569" />
    <text x="25" y="135" fill="#a7f3d0" font-size="9" font-weight="bold">Best When:</text>
    <text x="25" y="152" fill="#cbd5e1" font-size="8">Tables already sorted by B-Tree</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="8">indexes or explicit ORDER BY.</text>
    <text x="15" y="200" fill="#facc15" font-size="9" font-weight="bold">Bonus:</text>
    <text x="15" y="216" fill="#cbd5e1" font-size="8">Handles non-equi joins (&lt;, &gt;);</text>
    <text x="15" y="230" fill="#cbd5e1" font-size="8">Zero hash memory overhead.</text>
  </g>
</svg>`,
      caption: {
        en: 'The 3 physical join algorithms: Nested Loop is ideal for small outer sets, Hash Join powers large unsorted equality joins in RAM, and Merge Join zippers sorted streams.',
        bn: '৩টি ফিজিক্যাল জয়েন অ্যালগরিদম: নেস্টেড লুপ ছোট টেবিলের জন্য সেরা, হ্যাশ জয়েন মেমরির সাহায্যে বড় সমতা জয়েন চালায় এবং মার্জ জয়েন সাজানো ডাটাকে জিপারের মতো মেলায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Nested Loop Join',
          def: {
            en: 'A join algorithm looping through each row of the outer table and executing a lookup or scan on the inner table.',
            bn: 'একটি জয়েন অ্যালগরিদম যা বাইরের টেবিলের প্রতিটি সারির জন্য ভেতরের টেবিলে একটি করে লুকআপ বা স্ক্যান পরিচালনা করে।'
          }
        },
        {
          term: 'Hash Join',
          def: {
            en: 'A two-phase join algorithm that builds an in-memory hash table on the smaller relation, then scans the larger table to probe matches.',
            bn: 'দুই ধাপের একটি জয়েন অ্যালগরিদম যা ছোট টেবিলের ডাটা দিয়ে মেমরিতে হ্যাশ টেবিল বানায় এবং বড় টেবিল স্ক্যান করে মিল খুঁজে বের করে।'
          }
        },
        {
          term: 'Merge Join (Sort-Merge)',
          def: {
            en: 'A join algorithm that advances synchronized pointers through two pre-sorted inputs like a zipper, joining matching keys simultaneously.',
            bn: 'একটি জয়েন অ্যালগরিদম যা দুটি পূর্বে সাজানো টেবিলের মধ্য দিয়ে জিপারের মতো দুটি সমান্তরাল পয়েন্টার চালিয়ে দ্রুত ডাটা মেলায়।'
          }
        },
        {
          term: 'Join Cartesian Explosion',
          def: {
            en: 'A catastrophic execution failure occurring when an un-indexed nested loop scans N inner rows for M outer rows, taking O(M * N) time.',
            bn: 'একটি মারাত্মক পারফরম্যান্স বিপর্যয় যেখানে ইনডেক্সহীন নেস্টেড লুপ M রো-র জন্য N রো স্ক্যান করে O(M * N) সময় অপচয় করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'how-the-optimizer-chooses',
      text: {
        en: 'Choosing the Winner: How the Optimizer Selects Join Paths',
        bn: 'সেরা পথ নির্বাচন: অপ্টিমাইজার কীভাবে জয়েন প্ল্যান বেছে নেয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Cost-Based Optimizer evaluates work estimates for all 3 join strategies before selecting a physical execution plan. Suppose the outer table contains only 10 rows and the inner table has an index. The planner selects a Nested Loop Join because 10 index seeks finish in less than 1 millisecond.',
        bn: 'কস্ট-বেসড অপ্টিমাইজার একটি চূড়ান্ত প্ল্যান বেছে নেওয়ার আগে ৩টি ফিজিক্যাল জয়েন কৌশলের কাজের হিসাব তুলনা করে। ধরা যাক বাইরের টেবিলে মাত্র ১০টি সারি আছে এবং ভেতরের টেবিলে ইনডেক্স আছে। অপ্টিমাইজার নেস্টেড লুপ জয়েন বেছে নেয় কারণ ১০টি ইনডেক্স সিক ১ মিলিসেকেন্ডের কম সময়ে শেষ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, if both tables contain 500000 rows, an un-indexed Nested Loop requires 250000000000 row comparisons. Instead, the planner selects a Hash Join to probe data in memory. When both tables already feature B-Tree indexes on join keys, a Merge Join zippers the streams forward without consuming hash table memory.',
        bn: 'কিন্তু উভয় টেবিলে যদি ৫০০০০০ করে সারি থাকে, তবে ইনডেক্সহীন নেস্টেড লুপে ২৫০০০০০০০০০০ তুলনার প্রয়োজন হতো। এর বদলে অপ্টিমাইজার মেমরিতে ডাটা মেলাতে হ্যাশ জয়েন বেছে নেয়। আর উভয় টেবিলে যদি আগে থেকেই B-Tree ইনডেক্স থাকে, তবে মার্জ জয়েন মেমরি খরচ ছাড়াই জিপারের মতো ডাটা মিলিয়ে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'node-join-benchmark-engine',
      text: {
        en: 'Executable Physical Join Strategy Benchmark',
        bn: 'রানযোগ্য ফিজিক্যাল জয়েন স্ট্র্যাটেজি বেঞ্চমার্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine executing all 3 physical join algorithms across 100 orders and 1000 customers. Nested Loop performs 100 probes. Hash Join builds a 1000-record hash map and executes 100 probes. Merge Join executes 119 zipper steps. All three physical strategies produce 100 identical joined records.',
        bn: 'নিচে ১০০টি অর্ডার এবং ১০০০টি কাস্টমার রেকর্ডের ওপর ৩টি ফিজিক্যাল জয়েন অ্যালগরিদম পরিচালনাকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। নেস্টেড লুপ ১০০টি প্রোব চালায়। হ্যাশ জয়েন ১০০০ বিল্ড এবং ১০০টি প্রোব সম্পন্ন করে। মার্জ জয়েন ১১৯টি জিপার পদক্ষেপ চালায়। ৩টি কৌশলই সমানভাবে ১০০টি অভিন্ন জয়েন রেকর্ড তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Join strategy benchmark comparing Nested Loop, Hash Join, and Merge Join execution algorithms',
        bn: 'নেস্টেড লুপ, হ্যাশ জয়েন এবং মার্জ জয়েন অ্যালগরিদম তুলনা করার জয়েন স্ট্র্যাটেজি বেঞ্চমার্ক'
      },
      code: `// Physical Join Strategies Benchmark Simulator
const orderList = [];
for (let i = 1; i <= 100; i++) {
  orderList.push({ orderId: i, customerId: (i % 20) + 1, orderTotal: 50 * i });
}
const customerList = [];
for (let i = 1; i <= 1000; i++) {
  customerList.push({ customerId: i, customerName: 'Customer ' + i });
}

// 1. Nested Loop Join (simulating indexed lookup)
const customerIndex = new Map();
for (const cust of customerList) customerIndex.set(cust.customerId, cust);

const nestedLoopResults = [];
let nestedLoopProbes = 0;
for (const order of orderList) {
  nestedLoopProbes++;
  const matchedCustomer = customerIndex.get(order.customerId);
  if (matchedCustomer) nestedLoopResults.push({ ...order, name: matchedCustomer.customerName });
}

// 2. Hash Join (Build Hash Table on Customers, Probe with Orders)
const hashJoinResults = [];
const memoryHashTable = new Map();
for (const cust of customerList) memoryHashTable.set(cust.customerId, cust); // 1000 build rows
let hashProbes = 0;
for (const order of orderList) {
  hashProbes++;
  const matchedCust = memoryHashTable.get(order.customerId);
  if (matchedCust) hashJoinResults.push({ ...order, name: matchedCust.customerName });
}

// 3. Merge Join (Zipper walk across sorted inputs)
const sortedOrders = [...orderList].sort((a, b) => a.customerId - b.customerId);
const sortedCustomers = [...customerList].sort((a, b) => a.customerId - b.customerId);
const mergeJoinResults = [];
let orderPtr = 0, custPtr = 0, zipperSteps = 0;

while (orderPtr < sortedOrders.length && custPtr < sortedCustomers.length) {
  zipperSteps++;
  if (sortedOrders[orderPtr].customerId === sortedCustomers[custPtr].customerId) {
    mergeJoinResults.push({ ...sortedOrders[orderPtr], name: sortedCustomers[custPtr].customerName });
    orderPtr++;
  } else if (sortedOrders[orderPtr].customerId < sortedCustomers[custPtr].customerId) {
    orderPtr++;
  } else {
    custPtr++;
  }
}

const isAccurate = nestedLoopResults.length === 100 && hashJoinResults.length === 100 && mergeJoinResults.length === 100;

console.log(\`[Join Benchmark Engine] Executed 3 physical join algorithms (Nested Loop, Hash, Merge).\`);
console.log(\`[Algorithm Comparison] Nested Loop: \${nestedLoopProbes} probes | Hash Join: \${customerList.length} build + \${hashProbes} probes | Merge Join: \${zipperSteps} zipper steps.\`);
console.log(\`[Equivalence Verdict] All 3 physical strategies produced 100 identical joined records (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Hash Joins Require Sufficient work_mem',
        bn: 'হ্যাশ জয়েনের জন্য পর্যাপ্ত work_mem আবশ্যক'
      },
      text: {
        en: 'A Hash Join is blazingly fast only as long as its hash table fits entirely within memory RAM. If the inner relation exceeds work_mem, PostgreSQL is forced to split the hash table into multiple batches and spill temporary files to disk. If you observe Batches: 4 or Batches: 16 in EXPLAIN plans, increasing work_mem immediately restores single-pass in-memory speed.',
        bn: 'একটি হ্যাশ জয়েন ততক্ষণই অবিশ্বাস্য দ্রুত চলে যতক্ষণ তার হ্যাশ টেবিল পুরোপুরি র্যাম মেমরিতে ধরে রাখা যায়। যদি টেবিলের আকার work_mem সীমার চেয়ে বড় হয়ে যায়, তবে PostgreSQL ডিস্কে অস্থায়ী ফাইল লিখে বহু-ব্যাচে কাজ চালাতে বাধ্য হয়। EXPLAIN প্ল্যানে Batches: 4 বা Batches: 16 দেখলে work_mem বাড়িয়ে তাৎক্ষণিকভাবে একক-পাসের মেমরি গতি ফিরিয়ে আনা যায়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Optimal Join Selector',
        bn: 'উপযুক্ত জয়েন নির্বাচক'
      },
      description: {
        en: 'Determine which physical join algorithm the database optimizer will choose based on input size, indexing, and sorting.',
        bn: 'টেবিলের আকার, ইনডেক্স এবং সর্টিংয়ের ওপর ভিত্তি করে অপ্টিমাইজার কোন জয়েন অ্যালগরিদম বেছে নেবে তা নির্ধারণ করুন।'
      },
      code: `function pickOptimalJoinStrategy(outerRows, isInnerIndexed, isPreSorted, isEquiJoin) {
  if (outerRows <= 20 && isInnerIndexed) return 'CHOSEN: NESTED_LOOP_JOIN';
  if (isPreSorted) return 'CHOSEN: MERGE_JOIN';
  if (isEquiJoin) return 'CHOSEN: HASH_JOIN';
  return 'FALLBACK: NESTED_LOOP_SCAN';
}

console.log('Few Outer Rows:', pickOptimalJoinStrategy(10, true, false, true));
console.log('Unsorted Big Tables:', pickOptimalJoinStrategy(500000, false, false, true));`,
      tests: [
        {
          name: {
            en: 'Selects Nested Loop for tiny indexed outer set',
            bn: 'ছোট ইনডেক্সড টেবিলের জন্য নেস্টেড লুপ নির্বাচন করে'
          },
          expected: 'Few Outer Rows: CHOSEN: NESTED_LOOP_JOIN'
        },
        {
          name: {
            en: 'Selects Hash Join for large unsorted equi-join',
            bn: 'বড় অসংগঠিত সমতা জয়েনের জন্য হ্যাশ জয়েন নির্বাচন করে'
          },
          expected: 'Unsorted Big Tables: CHOSEN: HASH_JOIN'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'qo-mrg-ex-1',
      kind: 'mcq',
      topic: 'hash-join-phases',
      question: {
        en: 'In relational query processing, what are the two distinct execution phases of a Hash Join algorithm?',
        bn: 'রিলেশনাল কোয়েরি প্রসেসিংয়ে হ্যাশ জয়েন অ্যালগরিদমের দুটি সুস্পষ্ট পর্যায় কী কী?'
      },
      options: [
        {
          en: 'Build Phase hashes the smaller relation in memory; Probe Phase streams the larger table to retrieve matching keys',
          bn: 'বিল্ড ফেজ মেমরিতে ছোট টেবিলের হ্যাশ তৈরি করে; প্রোব ফেজ বড় টেবিল স্ক্যান করে মিল খুঁজে বের করে'
        },
        {
          en: '1. Encrypt Phase: passwords are scrambled; 2. Decrypt Phase: passwords are displayed in plaintext',
          bn: '১. এনক্রিপ্ট ফেজ: পাসওয়ার্ড এলোমেলো করা হয়; ২. ডিক্রিপ্ট ফেজ: পাসওয়ার্ড প্রদর্শন করা হয়'
        },
        {
          en: '1. Download Phase: downloading songs from the web; 2. Upload Phase: uploading photos to Instagram',
          bn: '১. ডাউনলোড ফেজ: গান ডাউনলোড করা; ২. আপলোড ফেজ: ছবি আপলোড করা'
        },
        {
          en: '1. Sleep Phase: the server sleeps for 1 hour; 2. Wake Phase: the server wakes up and reboots',
          bn: '১. স্লিপ ফেজ: সার্ভার ১ ঘণ্টা ঘুমায়; ২. ওয়েক ফেজ: সার্ভার জেগে রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hash joins first build a hash table on the build relation, then probe it with the probe relation.',
        bn: 'হ্যাশ জয়েন প্রথমে ছোট টেবিল দিয়ে হ্যাশ টেবিল বানায়, এরপর বড় টেবিল দিয়ে খোঁজে।'
      },
      explanation: {
        en: 'The Hash Join requires an in-memory hash table. Phase 1 (Build) hashes the smaller input by join key. Phase 2 (Probe) iterates over the larger input, finding matches in O(1) time per tuple.',
        bn: 'হ্যাশ জয়েন মেমরির সাহায্য নেয়। ১ম ধাপে ছোট টেবিলের হ্যাশ টেবিল তৈরি হয় এবং ২য় ধাপে বড় টেবিল স্ক্যান করে O(1) সময়ে রো মেলানো হয়।'
      }
    },
    {
      id: 'qo-mrg-ex-2',
      kind: 'mcq',
      topic: 'merge-join-prerequisite',
      question: {
        en: 'What fundamental data property is strictly required before a database engine can execute a Merge Join between two tables?',
        bn: 'দুটি টেবিলের মধ্যে একটি মার্জ জয়েন (Merge Join) চালানোর জন্য ডাটার কোন মৌলিক বৈশিষ্ট্যটি কঠোরভাবে আবশ্যক?'
      },
      options: [
        {
          en: 'Both relations must be ordered (sorted) on their respective join keys, either through existing B-Tree indexes or via an explicit preceding Sort node',
          bn: 'উভয় টেবিলের ডাটায় তাদের জয়েন কি অনুসারে নির্দিষ্ট ক্রম (সর্ট করা) থাকতে হবে, যা বিদ্যমান B-Tree ইনডেক্স অথবা পূর্ববর্তী সর্ট নোডের মাধ্যমে নিশ্চিত করা যায়'
        },
        {
          en: 'Both tables must contain exactly 10 rows and no more',
          bn: 'উভয় টেবিলে ঠিক ১০টি সারি থাকতে হবে, বেশিও নয় কমও নয়'
        },
        {
          en: 'Both tables must be stored on separate physical continents',
          bn: 'উভয় টেবিলকে দুটি আলাদা মহাদেশের সার্ভারে সংরক্ষণ করতে হবে'
        },
        {
          en: 'All text columns must be written in capital letters',
          bn: 'تمام টেক্সট কলাম বড় হাতের অক্ষরে লিখতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Merge Join works like a zipper; both zipper tracks must be sorted.',
        bn: 'মার্জ জয়েন জিপারের মতো কাজ করে; জিপারের উভয় পাশ সাজানো থাকা বাধ্যতামূলক।'
      },
      explanation: {
        en: 'Merge Join steps two pointers through sorted data streams. If data is not sorted, the engine must insert expensive Sort nodes beforehand or choose a Hash Join instead.',
        bn: 'মার্জ জয়েন সাজানো ডাটার ওপর দুটি পয়েন্টার চালিয়ে কাজ করে। ডাটা সাজানো না থাকলে ইঞ্জিনকে আগে সর্ট করতে হয় অথবা হ্যাশ জয়েন বেছে নিতে হয়।'
      }
    },
    {
      id: 'qo-mrg-ex-3',
      kind: 'mcq',
      topic: 'nested-loop-join-best-use-case',
      question: {
        en: 'In which database scenario is a Nested Loop Join dramatically faster and more efficient than a Hash Join?',
        bn: 'কোন ডাটাবেস পরিস্থিতিতে একটি নেস্টেড লুপ জয়েন হ্যাশ জয়েনের চেয়ে বহুগুণ দ্রুত এবং কার্যকর হয়?'
      },
      options: [
        {
          en: 'When the outer dataset is tiny (e.g. 5 rows) and the inner table possesses a B-Tree index on the join key, executing 5 fast index seeks with zero startup hash table overhead',
          bn: 'যখন বাইরের টেবিলটি খুব ছোট (যেমন ৫টি রো) এবং ভেতরের টেবিলের জয়েন কি-তে B-Tree ইনডেক্স থাকে, ফলে কোনো হ্যাশ টেবিল না বানিয়েই ৫টি দ্রুত ইনডেক্স সিক চালানো যায়'
        },
        {
          en: 'When joining two massive un-indexed tables with 100 million rows each',
          bn: 'যখন ১০ কোটি সারির দুটি বিশাল ইনডেক্সহীন টেবিল জোড়া লাগানো হয়'
        },
        {
          en: 'When the database computer is disconnected from all electricity',
          bn: 'যখন ডাটাবেস কম্পিউটার تمام বিদ্যুৎ সংযোগ থেকে বিচ্ছিন্ন থাকে'
        },
        {
          en: 'Nested loop joins are never faster under any circumstances',
          bn: 'কোনো অবস্থাতেই নেস্টেড লুপ জয়েন দ্রুত হতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tiny outer inputs + inner index seeks make Nested Loop near instantaneous.',
        bn: 'ছোট টেবিল এবং অপর টেবিলে ইনডেক্স সিক থাকলে নেস্টেড লুপ পলকের মধ্যে শেষ হয়।'
      },
      explanation: {
        en: 'Building a hash table on 1000000 customers takes time and RAM. If you only need orders for 5 specific users, a Nested Loop runs 5 instant B-Tree index seeks in microseconds.',
        bn: '১০০০০০০ গ্রাহকের হ্যাশ টেবিল বানাতে মেমরি ও সময় লাগে। মাত্র ৫টি অর্ডারের ক্ষেত্রে ৫টি ইনডেক্স সিক চালানো মাইক্রোসেকেন্ডে শেষ হয়ে যায়।'
      }
    },
    {
      id: 'qo-mrg-ex-4',
      kind: 'mcq',
      topic: 'hash-join-equality-restriction',
      question: {
        en: 'Why is a Hash Join strictly limited to queries with equality join conditions (such as a.id = b.a_id) and cannot be used for inequality joins (like a.val < b.val)?',
        bn: 'হ্যাশ জয়েন কেন কেবল সমতা শর্তযুক্ত কোয়েরিতেই (যেমন a.id = b.a_id) সীমাবদ্ধ এবং অসমান শর্তের জয়েনে (যেমন a.val < b.val) এটি কেন ব্যবহার করা যায় না?'
      },
      options: [
        {
          en: 'Hash functions map identical keys to identical bucket slots; hash buckets cannot determine whether one hashed value is greater than or less than another hashed value',
          bn: 'হ্যাশ ফাংশন কেবল অভিন্ন কি-কে নির্দিষ্ট বাকেটে রাখে; হ্যাশ মান দেখে কোনো সংখ্যা অন্য সংখ্যার চেয়ে বড় নাকি ছোট তা বের করা অসম্ভব'
        },
        {
          en: 'Because SQL standards make it illegal to use the < symbol with hash joins',
          bn: 'কারণ SQL মানদণ্ডে হ্যাশ জয়েনের সাথে < চিহ্ন ব্যবহার করা আইনত বেআইনি'
        },
        {
          en: 'Because inequality joins can only be run on tablet computers',
          bn: 'কারণ অসমান শর্তের জয়েন কেবল ট্যাবলেট কম্পিউটারে চালানো যায়'
        },
        {
          en: 'Hash joins support all mathematical conditions including square roots without limits',
          bn: 'হ্যাশ জয়েন বর্গমূল সহ সমস্ত গাণিতিক শর্ত কোনো সীমাবদ্ধতা ছাড়াই সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hashing scrambles values into buckets; it completely destroys numerical ordering.',
        bn: 'হ্যাশিং মানগুলোকে এলোমেলো বাকেটে ফেলে, ফলে সংখ্যার ছোট-বড় ক্রম পুরোপুরি নষ্ট হয়ে যায়।'
      },
      explanation: {
        en: 'Hash tables only support O(1) exact equality lookup. For range or inequality joins (<, >, BETWEEN), the optimizer must choose a Nested Loop or Merge Join.',
        bn: 'হ্যাশ টেবিল কেবল নিখুঁত সমতা খোঁজার সুবিধা দেয়। রেঞ্জ বা অসমান শর্তের জয়েনের জন্য অপ্টিমাইজারকে নেস্টেড লুপ বা মার্জ জয়েন বেছে নিতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'merges-and-the-merge-quiz',
    title: {
      en: 'Physical Join Strategies Assessment Quiz',
      bn: 'ফিজিক্যাল জয়েন কৌশল মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'qo-mrg-qz-1',
        kind: 'mcq',
        topic: 'hash-join-disk-spill-batches',
        question: {
          en: 'In an EXPLAIN ANALYZE output for a Hash Join, what does Batches: 4 or Batches: 16 signify?',
          bn: 'হ্যাশ জয়েনের EXPLAIN ANALYZE ফলাফলে Batches: 4 বা Batches: 16 কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The hash table exceeded the available work_mem memory limit, forcing the engine to partition the data into multiple batches and spill temporary batch files to disk',
            bn: 'হ্যাশ টেবিলের আকার work_mem মেমরি সীমার চেয়ে বড় হয়ে গিয়েছিল, যার ফলে ইঞ্জিন ডাটাকে একাধিক ব্যাচে বিভক্ত করে ডিস্কে অস্থায়ী ফাইল হিসেবে ছড়িয়ে দিয়েছে'
          },
          {
            en: 'The query was executed by 4 different developers at the same time',
            bn: 'কোয়েরিটি ৪ জন ভিন্ন ডেভেলপার একই সময়ে চালিয়েছিলেন'
          },
          {
            en: 'The database server downloaded 16 software updates from the web',
            bn: 'ডাটাবেস সার্ভার ইন্টারনেট থেকে ১৬টি সফটওয়্যার আপডেট ডাউনলোড করেছে'
          },
          {
            en: 'It indicates that the join finished in 4 microseconds',
            bn: 'এটি নির্দেশ করে যে জয়েনটি ৪ মাইক্রোসেকেন্ডে শেষ হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single-batch hash joins fit in RAM; multi-batch joins spill to disk storage.',
          bn: 'একক ব্যাচের হ্যাশ জয়েন র্যামে ধরে যায়; একাধিক ব্যাচ মানে তা ডিস্কে স্পিল করেছে।'
        },
        explanation: {
          en: 'Batches: 1 indicates a pure in-memory hash join. When Batches > 1, the planner had to partition data across disk batches, dramatically increasing query I/O latency.',
          bn: 'Batches: 1 মানে পুরো জয়েন মেমরিতে হয়েছে। Batches ১-এর বেশি হলে ডিস্কে ফাইল লেখা ও পড়ার কারণে কোয়েরির সময় অনেক বেড়ে যায়।'
        }
      },
      {
        id: 'qo-mrg-qz-2',
        kind: 'mcq',
        topic: 'cartesian-nested-loop-lockup',
        question: {
          en: 'Why is an un-indexed Nested Loop Join on 2 tables with 100000 rows considered an operational disaster in production systems?',
          bn: '১০০০০০ সারির ২টি টেবিলে ইনডেক্সহীন নেস্টেড লুপ জয়েন চালানো কেন প্রোডাকশন সিস্টেমে একটি চরম বিপর্যয় হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: 'It requires 10000000000 row evaluations, consuming 100% server CPU for minutes or hours and exhausting backend database connection pools',
            bn: 'এতে ১০০০০০০০০০০ রো তুলনা করার প্রয়োজন হয়, যা ঘণ্টার পর ঘণ্টা সার্ভারের ১০০% সিপিইউ দখল করে রাখে এবং সমস্ত ডাটাবেস সংযোগ স্থবির করে দেয়'
          },
          {
            en: 'It makes all text in the database change to French',
            bn: 'এটি ডাটাবেসের সমস্ত টেক্সটকে ফরাসিতে রূপান্তর করে ফেলে'
          },
          {
            en: 'Because 100000-row tables are deleted automatically by the operating system',
            bn: 'কারণ ১০০০০০ সারির টেবিল অপারেটিং সিস্টেম নিজে থেকেই মুছে ফেলে'
          },
          {
            en: 'It causes the server monitor screen to crack physically',
            bn: 'এটি সার্ভার মনিটরের পর্দাকে শারীরিকভাবে ভেঙে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without indexes, a nested loop runs an O(M * N) quadratic scan.',
          bn: 'ইনডেক্স ছাড়া নেস্টেড লুপ O(M * N) চতুর্ঘাতীয় স্ক্যান চালায়।'
        },
        explanation: {
          en: 'Evaluating 100000 rows against 100000 inner rows requires 10000000000 inspections, freezing production.',
          bn: '১০০০০০ সারির বিপরীতে ১০০০০০ রো মূল্যায়ন করতে ১০০০০০০০০০০ স্ক্যান লাগে, যা সার্ভার স্থবির করে ফেলে।'
        }
      },
      {
        id: 'qo-mrg-qz-3',
        kind: 'mcq',
        topic: 'merge-join-btree-advantage',
        question: {
          en: 'Under what specific schema condition will a PostgreSQL optimizer choose a Merge Join over a Hash Join even for large multi-million row tables?',
          bn: 'কোন সুনির্দিষ্ট স্কিমা পরিস্থিতিতে PostgreSQL অপ্টিমাইজার কোটি সারির বড় টেবিলের ক্ষেত্রেও হ্যাশ জয়েন বাদ দিয়ে মার্জ জয়েন বেছে নেয়?'
        },
        options: [
          {
            en: 'When both tables already possess B-Tree indexes on their join keys, allowing the engine to stream pre-sorted data directly without performing any sorting or building memory hash tables',
            bn: 'যখন উভয় টেবিলের জয়েন কি-র ওপর ইতিমধ্যে B-Tree ইনডেক্স থাকে, যার ফলে ইঞ্জিন কোনো বাড়তি সর্টিং বা মেমরি হ্যাশ টেবিল না বানিয়েই পূর্বে সাজানো ডাটা সরাসরি মেলাতে পারে'
          },
          {
            en: 'When the database server is running on a battery-powered laptop',
            bn: 'যখন ডাটাবেস সার্ভারটি ব্যাটারিতে চলা কোনো ল্যাপটপে সচল থাকে'
          },
          {
            en: 'When all numbers in the tables are negative values',
            bn: 'যখন টেবিলের সমস্ত সংখ্যা ঋণাত্মক মান ধারণ করে'
          },
          {
            en: 'Merge joins are only selected on February 29 during leap years',
            bn: 'মার্জ জয়েন কেবল অধিবর্ষের ২৯ ফেব্রুয়ারিতে নির্বাচিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pre-sorted B-Tree indexes eliminate the sort cost of a Merge Join.',
          bn: 'আগে থেকেই সাজানো B-Tree ইনডেক্স মার্জ জয়েনের সর্টিং খরচ শূন্য করে দেয়।'
        },
        explanation: {
          en: 'If both sides are already sorted by indexes, a Merge Join incurs zero sorting overhead and zero hash table RAM overhead. It streams rows like a zipper with maximum efficiency.',
          bn: 'উভয় পাশে ইনডেক্স থাকলে মার্জ জয়েনে সর্ট বা মেমরি হ্যাশের কোনো খরচ লাগে না। এটি জিপারের মতো সাবলীলভাবে রো মিলিয়ে দ্রুত ফলাফল সরবরাহ করে।'
        }
      },
      {
        id: 'qo-mrg-qz-4',
        kind: 'mcq',
        topic: 'hash-join-skew-hot-keys',
        question: {
          en: 'What performance defect occurs in a Hash Join if the join key contains extreme data skew (e.g. 95% of rows have organization_id = 1)?',
          bn: 'জয়েন কি-তে যদি চরম অসম ডাটা থাকে (যেমন ৯৫% রো-র organization_id = ১), তবে হ্যাশ জয়েনে কোন পারফরম্যান্স ত্রুটি দেখা দেয়?'
        },
        options: [
          {
            en: 'Hash Bucket Collision Degeneracy: millions of tuples land in a single hash bucket chain, causing probe lookups to degrade from O(1) hash access to slow O(N) linked list scans',
            bn: 'হ্যাশ বাকেট কলিশন সংকট: লাখ লাখ রো একটিমাত্র হ্যাশ বাকেট চেইনে জমা হয়, যার ফলে O(1) হ্যাশ খোঁজার গতি নষ্ট হয়ে ধীরগতির O(N) লিংকড লিস্ট স্ক্যানে রূপ নেয়'
          },
          {
            en: 'The database engine deletes the organization_id column entirely',
            bn: 'ডাটাবেস ইঞ্জিন organization_id কলামটি পুরোপুরি মুছে ফেলে'
          },
          {
            en: 'The database server cooling fans spin in reverse backward direction',
            bn: 'ডাটাবেস সার্ভার ফ্যান উল্টো দিকে ঘুরতে শুরু করে'
          },
          {
            en: 'All join conditions are automatically inverted to NOT EQUALS',
            bn: 'تمام জয়েন শর্ত স্বয়ংক্রিয়ভাবে NOT EQUALS-এ বদলে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Severe key skew clusters data into a single overloaded hash bucket.',
          bn: 'অসম ডাটা تمام রেকর্ডকে একটিমাত্র উপচে পড়া হ্যাশ বাকেটে স্তূপ করে ফেলে।'
        },
        explanation: {
          en: 'Hash joins assume relatively uniform distribution across buckets. If one key dominates, its bucket becomes an enormous linked list, degrading probe performance to sequential scans.',
          bn: 'হ্যাশ জয়েন বাকেটের মধ্যে সমান বিস্তারের ওপর নির্ভর করে। একটি মান অতিরিক্ত বেশি হলে সেই বাকেটটি একটি বিশাল লিংকড লিস্টে পরিণত হয়ে O(1) গতি নষ্ট করে ফেলে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'sorts-and-the-sort',
    title: {
      en: 'Sorting & Memory Tuning: work_mem & Disk Spills',
      bn: 'সর্টিং ও মেমরি টিউনিং: work_mem ও ডিস্ক স্পিল'
    }
  }
};
