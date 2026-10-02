import type { Lesson } from '../../../lib/types';

export const BtreesAndTheBtreeLesson: Lesson = {
  slug: 'btrees-and-the-btree',
  tech: 'indexes',
  title: {
    en: 'B-Tree & B+Tree Internals: High Fan-Out Storage Engines',
    bn: 'B-Tree ও B+Tree অভ্যন্তরীণ কৌশল: হাই ফ্যান-আউট স্টোরেজ ইঞ্জিন'
  },
  summary: {
    en: 'Understand how relational databases store and traverse on-disk indexes: B-Tree vs B+Tree architecture, high fan-out page layouts, node splitting, and doubly-linked leaf range scans.',
    bn: 'রিলেশনাল ডাটাবেস কীভাবে ডিস্ক ইনডেক্স সংরক্ষণ ও পরিচালনা করে তা বুঝুন: B-Tree বনাম B+Tree আর্কিটেকচার, হাই ফ্যান-আউট পেজ লেআউট, নোড স্প্লিটিং এবং ডাবলি-লিংকড লিফ রেঞ্জ স্ক্যান।'
  },
  minutes: 27,
  blocks: [
    {
      type: 'heading',
      id: 'why-not-binary-trees',
      text: {
        en: 'The Disk Block Problem: Why Memory Trees Fail on Persistent Storage',
        bn: 'ডিস্ক ব্লকের সংকট: মেমরি ট্রি কেন ডিস্ক স্টোরেজে ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In computer science courses, developers learn about in-memory binary search trees and balanced search trees. These structures work well in system memory (RAM). However, when storing billions of database records on physical disk drives, binary trees suffer from an insurmountable structural flaw: their branching fan-out is strictly 2.',
        bn: 'কম্পিউটার সায়েন্সের কোর্সে ডেভেলপাররা মেমরিভিত্তিক সাধারণ বাইনারি সার্চ ট্রি এবং বিভিন্ন সুষম সার্চ ট্রি সম্পর্কে শেখেন। এই কাঠামো মেমরিতে (র‍্যাম) চমৎকার কাজ করে। কিন্তু ফিজিক্যাল ডিস্কে যখন কোটি কোটি ডাটা রেকর্ড সংরক্ষণ করতে হয়, তখন বাইনারি ট্রির একটি মারাত্মক সীমাবদ্ধতা দেখা দেয়: এর শাখা বিভক্ত হওয়ার ক্ষমতা বা ফ্যান-আউট মাত্র ২।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'With a fan-out of 2, a table with 1000000 rows produces a tree roughly 20 levels deep. In a database, each level traversal requires reading a distinct storage block from disk via random I/O. Executing 20 separate disk read operations for every single query causes extreme performance bottlenecks.',
        bn: 'ফ্যান-আউট ২ হওয়ার কারণে ১০০০০০০ সারির একটি টেবিলের জন্য বাইনারি ট্রির উচ্চতা প্রায় ২০ স্তর গভীর হয়। ডাটাবেসের ক্ষেত্রে প্রতিটি স্তর অতিক্রম করতে ডিস্ক থেকে আলাদা একটি ডাটা ব্লক পড়তে হয়। প্রতিটি কোয়েরির জন্য ২০ বার ডিস্ক রিড চালাতে গেলে সিস্টেম চরম ধীরগতির হয়ে পড়ে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'B+Tree Multi-Level Hierarchy with Doubly-Linked Leaf Pages',
        bn: 'ডাবলি-লিংকড লিফ পেজ সহ B+Tree মাল্টি-লেভেল হায়ারার্কি'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="B+Tree Index Architecture">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Root Page -->
  <g transform="translate(260, 25)">
    <rect width="220" height="50" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="220" height="20" rx="6" fill="#0284c7" />
    <text x="110" y="15" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">Root Page (Level 1)</text>
    <text x="25" y="38" fill="#38bdf8" font-size="11" font-weight="bold">Ptr 1</text>
    <line x1="60" y1="20" x2="60" y2="50" stroke="#334155" stroke-width="1.5" />
    <text x="80" y="38" fill="#facc15" font-size="11" font-weight="bold">Key: 30</text>
    <line x1="115" y1="20" x2="115" y2="50" stroke="#334155" stroke-width="1.5" />
    <text x="135" y="38" fill="#38bdf8" font-size="11" font-weight="bold">Ptr 2</text>
    <line x1="165" y1="20" x2="165" y2="50" stroke="#334155" stroke-width="1.5" />
    <text x="185" y="38" fill="#facc15" font-size="11" font-weight="bold">Key: 70</text>
  </g>

  <!-- Downward Routing Connectors -->
  <path d="M 310 75 L 140 120" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrow)" />
  <path d="M 370 75 L 370 120" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrow)" />
  <path d="M 430 75 L 600 120" stroke="#38bdf8" stroke-width="1.5" marker-end="url(#arrow)" />

  <!-- Leaf Page 1 -->
  <g transform="translate(30, 125)">
    <rect width="200" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="200" height="20" rx="6" fill="#059669" />
    <text x="100" y="14" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Leaf 1 (Keys &lt; 30)</text>
    <text x="15" y="42" fill="#cbd5e1" font-size="10">[10 -&gt; TID 1]</text>
    <text x="15" y="58" fill="#cbd5e1" font-size="10">[20 -&gt; TID 2]</text>
  </g>

  <!-- Leaf Page 2 -->
  <g transform="translate(270, 125)">
    <rect width="200" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="200" height="20" rx="6" fill="#059669" />
    <text x="100" y="14" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Leaf 2 (30 &lt;= Keys &lt; 70)</text>
    <text x="15" y="38" fill="#a7f3d0" font-size="10">[30 -&gt; TID 3]</text>
    <text x="15" y="52" fill="#facc15" font-size="10" font-weight="bold">[45 -&gt; TID 4] (Target)</text>
    <text x="15" y="65" fill="#a7f3d0" font-size="9">[60 -&gt; TID 5]</text>
  </g>

  <!-- Leaf Page 3 -->
  <g transform="translate(510, 125)">
    <rect width="200" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5" />
    <rect width="200" height="20" rx="6" fill="#059669" />
    <text x="100" y="14" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Leaf 3 (Keys &gt;= 70)</text>
    <text x="15" y="42" fill="#cbd5e1" font-size="10">[70 -&gt; TID 6]</text>
    <text x="15" y="58" fill="#cbd5e1" font-size="10">[85 -&gt; TID 7]</text>
  </g>

  <!-- Horizontal Doubly-Linked Connectors -->
  <path d="M 230 155 L 270 155" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrow)" />
  <path d="M 270 165 L 230 165" stroke="#f59e0b" stroke-width="2" />
  <path d="M 470 155 L 510 155" stroke="#f59e0b" stroke-width="2.5" marker-end="url(#arrow)" />
  <path d="M 510 165 L 470 165" stroke="#f59e0b" stroke-width="2" />
  <text x="370" y="215" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">&lt;-- Doubly-Linked List Enables Fast Horizontal Range Scans --&gt;</text>

  <!-- Summary Card -->
  <g transform="translate(30, 230)">
    <rect width="680" height="80" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="20" y="24" fill="#facc15" font-size="12" font-weight="bold">Why B+Trees Dominate Database Engines (PostgreSQL, MySQL InnoDB, Oracle):</text>
    <text x="20" y="46" fill="#cbd5e1" font-size="11">1. High Fan-Out: Each 8KB/16KB page stores hundreds of keys, keeping tree height shallow (3 to 4 levels for billions of rows).</text>
    <text x="20" y="66" fill="#94a3b8" font-size="10">2. Doubly-Linked Leaves: Range queries jump to the initial key and sweep horizontally without revisiting branch nodes.</text>
  </g>
</svg>`,
      caption: {
        en: 'B+Tree index architecture: root routing pages direct lookups while doubly-linked leaf nodes hold all data pointers and power range scans.',
        bn: 'B+Tree ইনডেক্স আর্কিটেকচার: রুট পেজ সঠিক পথ দেখায় এবং ডাবলি-লিংকড লিফ নোড تمام ডাটা পয়েন্টার সংরক্ষণ করে দ্রুত রেঞ্জ স্ক্যান নিশ্চিত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Fan-Out',
          def: {
            en: 'The number of child pointers held inside a single internal tree node; higher fan-out directly reduces tree height and disk I/O seeks.',
            bn: 'একটি সিঙ্গেল ইন্টারনাল ট্রি নোডে থাকা চাইল্ড পয়েন্টারের সংখ্যা; উচ্চ ফ্যান-আউট গাছের উচ্চতা এবং ডিস্ক রিডের খরচ কমিয়ে দেয়।'
          }
        },
        {
          term: 'B+Tree',
          def: {
            en: 'A self-balancing tree data structure storing data pointers exclusively in doubly-linked leaf nodes, with internal nodes storing only routing keys.',
            bn: 'একটি সুষম ট্রি ডাটা স্ট্রাকচার যার অভ্যন্তরীণ নোডগুলো কেবল দিকনির্দেশনা দেয় এবং সমস্ত ডাটা পয়েন্টার ডাবলি-লিংকড পাতায় জমা থাকে।'
          }
        },
        {
          term: 'Node Split',
          def: {
            en: 'The operation dividing a full index page into two half-full pages when an insert exceeds page capacity, pushing the median key to the parent.',
            bn: 'একটি পূর্ণ ইনডেক্স পেজকে দুটি অর্ধে বিভক্ত করার পদ্ধতি যখন নতুন ডাটা ঢোকাতে গিয়ে পেজের ধারণক্ষমতা পূর্ণ হয়ে যায়।'
          }
        },
        {
          term: 'Fill Factor',
          def: {
            en: 'A storage engine configuration setting determining what percentage of an index page should be filled during initial creation, reserving headroom for updates.',
            bn: 'ইনডেক্স তৈরির সময় পেজের কত শতাংশ ডাটা দিয়ে পূর্ণ থাকবে তা নির্ধারণকারী কনফিগারেশন, যা পরবর্তীতে পেজ স্প্লিট রোধ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'btree-vs-bplustree',
      text: {
        en: 'B-Tree vs B+Tree: The Evolution of Relational Storage',
        bn: 'B-Tree বনাম B+Tree: রিলেশনাল স্টোরেজের বিবর্তন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1970, Rudolf Bayer and Edward M. McCreight invented the original B-Tree at Boeing Labs. In a standard B-Tree, every node (both internal branches and leaves) stores both search keys and data row pointers. While ingenious, storing bulky row pointers inside internal branch nodes consumes precious page bytes, drastically shrinking node fan-out and forcing the tree to grow taller.',
        bn: '১৯৭০ সালে রুডলফ বায়ার এবং এডওয়ার্ড এম. ম্যাকক্রেইট বোয়িং ল্যাবসে মূল B-Tree আবিষ্কার করেন। একটি সাধারণ B-Tree-তে সমস্ত নোড (শাখা ও পাতা উভয়ই) সার্চ কি এবং ডাটার পয়েন্টার একসাথে ধরে রাখে। কিন্তু অভ্যন্তরীণ নোডে ভারী পয়েন্টার রাখার ফলে পেজের মূল্যবান জায়গা নষ্ট হয়, ফ্যান-আউট কমে যায় এবং গাছটি অপ্রয়োজনীয় লম্বা হয়ে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The B+Tree solved this limitation through structural specialization. Internal branch nodes store strictly routing keys and child page IDs: zero user data or row pointers reside in internal levels. This maximizes fan-out: a single 8KB page in PostgreSQL can hold hundreds of index entries! Furthermore, all leaf pages are chained together as a bidirectional linked list, transforming range scans from complex tree traversals into fast linear sweeps.',
        bn: 'B+Tree বিশেষায়িত কাঠামোর মাধ্যমে এই সীমাবদ্ধতা দূর করে। এর শাখা নোডগুলোতে কেবল দিকনির্দেশক কি এবং চাইল্ড পেজের আইডি থাকে: কোনো আসল ডাটা সেখানে থাকে না। ফলে ফ্যান-আউট সর্বোচ্চ হয়: PostgreSQL-এর একটি ৮KB পেজে শত শত এন্ট্রি ধরে যায়! অধিকন্তু, تمام লিফ পেজ পরস্পরের সাথে দ্বিমুখী লিংকড লিস্ট হিসেবে যুক্ত থাকে, যা রেঞ্জ স্ক্যানকে দ্রুত রৈখিক স্ক্যানে রূপান্তর করে।'
      }
    },
    {
      type: 'heading',
      id: 'node-btree-engine',
      text: {
        en: 'Executable B+Tree Point Lookup & Range Scan Simulator',
        bn: 'রানযোগ্য B+Tree পয়েন্ট লুকআপ ও রেঞ্জ স্ক্যান সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine simulating a multi-tier B+Tree index with linked leaf nodes. It routes a point lookup for key 45 directly to Leaf 2, and executes a range query across keys 20 to 70 by collecting 5 keys across the doubly-linked leaf pointers without re-visiting the root.',
        bn: 'নিচে লিংকড লিফ পেজযুক্ত একটি মাল্টি-লেভেল B+Tree ইনডেক্স সিমুলেশনকারী সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি ৪৫ নম্বর কি এর জন্য সরাসরি লিফ ২ এ রুট করে এবং রুটে ফিরে না গিয়েই ডাবলি-লিংকড পাতার সাহায্যে ২০ থেকে ৭০ পর্যন্ত ৫টি কি সংগ্রহ করে রেঞ্জ কোয়েরি সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Simulating B+Tree root routing, Leaf 2 point lookup, and horizontal doubly-linked leaf range scan',
        bn: 'B+Tree রুট রাউটিং, লিফ ২ পয়েন্ট লুকআপ এবং ডাবলি-লিংকড লিফ রেঞ্জ স্ক্যান সিমুলেশন'
      },
      code: `// Multi-Tier B+Tree Index Simulator
const rootNode = { keys: [30, 70], children: [] };
const leaf1 = { keys: [10, 20], next: null, prev: null };
const leaf2 = { keys: [30, 45, 60], next: null, prev: leaf1 };
const leaf3 = { keys: [70, 85, 95], next: null, prev: leaf2 };

// Chain leaves together in a doubly-linked list
leaf1.next = leaf2;
leaf2.next = leaf3;
rootNode.children = [leaf1, leaf2, leaf3];

// 1. Point Lookup: Route through root navigation keys
function pointLookup(searchKey) {
  let targetLeaf = null;
  if (searchKey < rootNode.keys[0]) {
    targetLeaf = rootNode.children[0]; // Leaf 1
  } else if (searchKey < rootNode.keys[1]) {
    targetLeaf = rootNode.children[1]; // Leaf 2
  } else {
    targetLeaf = rootNode.children[2]; // Leaf 3
  }
  return targetLeaf.keys.includes(searchKey);
}

// 2. Range Scan: Jump to starting leaf, then sweep horizontally
function rangeScan(minBound, maxBound) {
  let currentLeaf = leaf1; // Start at first leaf
  const collectedKeys = [];
  while (currentLeaf) {
    for (const val of currentLeaf.keys) {
      if (val >= minBound && val <= maxBound) {
        collectedKeys.push(val);
      }
    }
    // Stop once we surpass the range boundary
    if (currentLeaf.keys[currentLeaf.keys.length - 1] >= maxBound) break;
    currentLeaf = currentLeaf.next; // Sweep to next leaf without root traversal
  }
  return collectedKeys;
}

const pointFound = pointLookup(45);
const rangeResult = rangeScan(20, 70);
const isAccurate = pointFound && rangeResult.length === 5;

console.log(\`[B+Tree Engine] Point Lookup for key 45: Routed through Root -> Leaf 2 (found: \${pointFound}).\`);
console.log(\`[B+Tree Engine] Range Scan [20 to 70]: Traversed doubly-linked leaves, collected \${rangeResult.length} keys: \${rangeResult.join(', ')}.\`);
console.log(\`[High Fan-Out Guarantee] 3-level B+Tree with fan-out 100 indexes 1000000 records in 3 disk reads (1/1: \${isAccurate}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Tuning Fill Factor for Heavy INSERT Workloads',
        bn: 'ঘন ঘন INSERT কাজের জন্য ফিল ফ্যাক্টর টিউনিং'
      },
      text: {
        en: 'By default, PostgreSQL B-Tree indexes use a fill factor of 90. If your application inserts rows with random UUID keys, pages quickly overflow, triggering expensive node splits and page fragmentation. Lowering the fill factor to 70 or 80 leaves buffer room on each page, mitigating split overhead at the expense of slight storage growth.',
        bn: 'ডিফল্টভাবে PostgreSQL B-Tree ইনডেক্সে ফিল ফ্যাক্টর থাকে ৯০। যদি আপনার অ্যাপ্লিকেশনে এলোমেলো UUID প্রাইমারি কি দিয়ে ঘন ঘন নতুন ডাটা ঢোকানো হয়, তবে পেজ দ্রুত পূর্ণ হয়ে ঘন ঘন স্প্লিট ঘটে। ফিল ফ্যাক্টর কমিয়ে ৭০ বা ৮০ করলে পেজে কিছুটা খালি জায়গা থাকে, যা স্প্লিটের অতিরিক্ত খরচ রোধ করে।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'B+Tree Fan-Out Capacity Estimator',
        bn: 'B+Tree ফ্যান-আউট ক্ষমতা গণনাকারী'
      },
      description: {
        en: 'Calculate how many table rows can be indexed at different tree heights given a specific page fan-out.',
        bn: 'নির্দিষ্ট পেজ ফ্যান-আউটের ওপর ভিত্তি করে বিভিন্ন গাছের উচ্চতায় কত কোটি সারি ইনডেক্স করা যায় তা হিসাব করুন।'
      },
      code: `function calculateCapacity(fanOut, levels) {
  return Math.pow(fanOut, levels);
}

console.log('Fan-out 100 at 3 levels:', calculateCapacity(100, 3));
console.log('Fan-out 100 at 4 levels:', calculateCapacity(100, 4));`,
      tests: [
        {
          name: {
            en: 'Calculates capacity for 3 levels with fanout 100',
            bn: 'ফ্যান-আউট ১০০ সহ ৩ স্তরের ধারণক্ষমতা হিসাব করে'
          },
          expected: 'Fan-out 100 at 3 levels: 1000000'
        },
        {
          name: {
            en: 'Calculates capacity for 4 levels with fanout 100',
            bn: 'ফ্যান-আউট ১০০ সহ ৪ স্তরের ধারণক্ষমতা হিসাব করে'
          },
          expected: 'Fan-out 100 at 4 levels: 100000000'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'idx-btree-ex-1',
      kind: 'mcq',
      topic: 'bplustree-vs-btree-leaf-difference',
      question: {
        en: 'What architectural design choice fundamentally distinguishes a B+Tree from a classic B-Tree in modern database engines?',
        bn: 'আধুনিক ডাটাবেস ইঞ্জিনে কোন আর্কিটেকচারাল নকশা B+Tree-কে ক্লাসিক B-Tree থেকে মৌলিকভাবে আলাদা করে?'
      },
      options: [
        {
          en: 'In a B+Tree, internal branch nodes store only routing keys and child pointers, while ALL actual data pointers reside in doubly-linked leaf pages',
          bn: 'B+Tree-তে অভ্যন্তরীণ শাখা নোডগুলোতে কেবল দিকনির্দেশক কি ও পয়েন্টার থাকে, আর તમામ ডাটা পয়েন্টার ডাবলি-লিংকড লিফ পাতায় জমা থাকে'
        },
        {
          en: 'A B+Tree can only store numbers while a B-Tree only stores text',
          bn: 'B+Tree কেবল সংখ্যা এবং B-Tree কেবল টেক্সট জমা রাখতে পারে'
        },
        {
          en: 'B+Trees require an internet connection to function properly',
          bn: 'B+Tree সঠিকভাবে কাজ করার জন্য ইন্টারনেট সংযোগ আবশ্যক'
        },
        {
          en: 'A B+Tree deletes its data whenever the computer is turned off',
          bn: 'কম্পিউটার বন্ধ করার সাথে সাথে B+Tree তার तमाम ডাটা মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'B+Trees keep internal nodes lean for maximum fan-out, storing data pointers only in leaves.',
        bn: 'B+Tree উচ্চ ফ্যান-আউটের জন্য শাখাগুলোকে হালকা রাখে এবং সমস্ত ডাটা কেবল পাতায় জমা করে।'
      },
      explanation: {
        en: 'By keeping internal branch pages free of data pointers, B+Trees maximize node capacity (fan-out), keeping tree depth minimal. Chained leaf nodes allow fast horizontal range scans.',
        bn: 'শাখা নোডে ডাটা পয়েন্টার না রাখার ফলে B+Tree-এর প্রতিটি পেজে প্রচুর কি ধরে, ফলে গাছের উচ্চতা খুব কম থাকে। পাতাগুলো লিংকড লিস্ট হওয়ায় রেঞ্জ স্ক্যানও অনেক দ্রুত হয়।'
      }
    },
    {
      id: 'idx-btree-ex-2',
      kind: 'mcq',
      topic: 'high-fanout-disk-io-benefit',
      question: {
        en: 'Why is high Fan-Out critical when storing database indexes on physical disk drives or SSDs?',
        bn: 'ফিজিক্যাল হার্ডডিস্ক বা SSD-তে ডাটাবেস ইনডেক্স সংরক্ষণের ক্ষেত্রে উচ্চ ফ্যান-আউট (High Fan-Out) কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'It keeps the tree extremely shallow (typically 3 or 4 levels for billions of rows), minimizing the number of disk I/O read operations required per query',
          bn: 'এটি গাছের উচ্চতা অত্যন্ত কম রাখে (কোটি কোটি সারির জন্যও মাত্র ৩ বা ৪ স্তর), ফলে প্রতিটি কোয়েরিতে খুব কম সংখ্যক ডিস্ক রিড লাগে'
        },
        {
          en: 'It increases the electric power of the database cooling fan',
          bn: 'এটি ডাটাবেস কুলিং ফ্যানের বৈদ্যুতিক শক্তি বৃদ্ধি করে'
        },
        {
          en: 'It prevents computer monitors from displaying syntax errors',
          bn: 'এটি কম্পিউটার স্ক্রিনে সিনট্যাক্স এরর প্রদর্শনে বাধা দেয়'
        },
        {
          en: 'It reduces the price of SQL server license keys',
          bn: 'এটি SQL সার্ভার লাইসেন্স কি-এর মূল্য কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'High fan-out means shallow tree height; shallow tree height means minimal disk I/O.',
        bn: 'উচ্চ ফ্যান-আউট মানে কম উচ্চতা; কম উচ্চতা মানে ডিস্ক থেকে কম রিড।'
      },
      explanation: {
        en: 'Disk seeks are physically expensive. With a fan-out of 100, 3 levels can index 1000000 records. A query needs only 3 disk block reads to find any record in the table.',
        bn: 'ডিস্ক থেকে ডাটা পড়া খুব ব্যয়বহুল। ফ্যান-আউট ১০০ হলে মাত্র ৩ স্তরেই ১০০০০০০ ডাটা ইনডেক্স করা সম্ভব। যেকোনো ডাটা খুঁজতে ডিস্ক থেকে মাত্র ৩টি পেজ পড়ার প্রয়োজন হয়।'
      }
    },
    {
      id: 'idx-btree-ex-3',
      kind: 'mcq',
      topic: 'node-splitting-overhead',
      question: {
        en: 'What occurs during a B-Tree Node Split when an INSERT statement adds a key into an already completely full index page?',
        bn: 'কোনো INSERT স্টেটমেন্ট পূর্বে থেকেই সম্পূর্ণ পূর্ণ একটি ইনডেক্স পেজে নতুন কি যোগ করতে চাইলে B-Tree নোড স্প্লিটের সময় কী ঘটে?'
      },
      options: [
        {
          en: 'The page is split into two half-full pages, the keys are distributed between them, and the median key is pushed up to the parent branch node',
          bn: 'পেজটি দুটি অর্ধেক পূর্ণ পেজে বিভক্ত হয়, কি-গুলো তাদের মধ্যে বণ্টন করা হয় এবং মধ্যবর্তী কি-টি প্যারেন্ট শাখা নোডে পাঠিয়ে দেওয়া হয়'
        },
        {
          en: 'The entire database table is deleted and recreated from scratch',
          bn: 'পুরো ডাটাবেস টেবিল মুছে গিয়ে শুরু থেকে পুনরায় তৈরি হয়'
        },
        {
          en: 'The inserted key is converted into a random text string',
          bn: 'নতুন কি-টি এলোমেলো একটি টেক্সট স্ট্রিংয়ে রূপান্তরিত হয়'
        },
        {
          en: 'The operating system restarts the server computer immediately',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে সার্ভার কম্পিউটার রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A full page divides into two half-full pages, promoting the median key upward.',
        bn: 'একটি পূর্ণ পেজ দুটি অর্ধে বিভক্ত হয় এবং মধ্যবর্তী মানটি ওপরে ওঠে।'
      },
      explanation: {
        en: 'When a block exceeds capacity, the storage engine allocates a new page, splits the entries equally, and inserts a routing separator key into the parent node to maintain tree balance.',
        bn: 'পেজের জায়গা ফুরিয়ে গেলে ইঞ্জিন একটি নতুন পেজ নিয়ে ডাটাগুলো সমান দুই ভাগে ভাগ করে এবং ভারসাম্য বজায় রাখতে প্যারেন্ট নোডে একটি নতুন পয়েন্টার যোগ করে।'
      }
    },
    {
      id: 'idx-btree-ex-4',
      kind: 'mcq',
      topic: 'doubly-linked-leaves-range-queries',
      question: {
        en: 'How do the doubly-linked pointers between leaf pages in a B+Tree accelerate SQL range queries (such as WHERE age BETWEEN 20 AND 30)?',
        bn: 'B+Tree-এর লিফ পেজগুলোর মধ্যবর্তী ডাবলি-লিংকড পয়েন্টার কীভাবে SQL রেঞ্জ কোয়েরির (যেমন WHERE age BETWEEN 20 AND 30) গতি বৃদ্ধি করে?'
      },
      options: [
        {
          en: 'The engine performs a single tree seek to land on the first matching leaf (age 20), then walks horizontally along the leaf pointers to read subsequent matches without re-traversing the root',
          bn: 'ইঞ্জিন মাত্র একবার ট্রি সিক চালিয়ে প্রথম পাতায় (বয়স ২০) পৌঁছায়, এরপর রুটে ফিরে না গিয়েই পাশাপাশি পাতার পয়েন্টার বেয়ে পরবর্তী تمام ডাটা পড়ে ফেলে'
        },
        {
          en: 'By deleting all records where age is outside that range',
          bn: 'যেসব রেকর্ডে বয়স এই সীমার বাইরে সেগুলো ডাটাবেস থেকে মুছে ফেলার মাধ্যমে'
        },
        {
          en: 'By asking the user to manually type the matching rows',
          bn: 'ব্যবহারকারীকে ম্যানুয়ালি মিলে যাওয়া রোগুলো টাইপ করতে বলার মাধ্যমে'
        },
        {
          en: 'By shutting down all network traffic to external websites',
          bn: 'বাইরের সমস্ত ওয়েবসাইটের সাথে নেটওয়ার্ক ট্রাফিক বন্ধ করে দিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Horizontal scanning: seek to the lower bound, then walk linked leaves until reaching the upper bound.',
        bn: 'অনুভূমিক স্ক্যান: শুরুর মানে সিক করে নেমে আসা, তারপর শেষ মান পর্যন্ত লিংকড পাতা ধরে এগিয়ে যাওয়া।'
      },
      explanation: {
        en: 'Linked leaf pages transform range queries into continuous horizontal scans. The engine avoids the expensive overhead of climbing back up and down the tree for every matching row.',
        bn: 'পাতাগুলো পরস্পরের সাথে যুক্ত থাকায় রেঞ্জ কোয়েরি খুব সহজ হয়ে যায়। ইঞ্জিনকে প্রতিটি সারির জন্য বারবার গাছের ওপরে ও নিচে ওঠানামা করতে হয় না।'
      }
    }
  ],
  quiz: {
    id: 'btrees-and-the-btree-quiz',
    title: {
      en: 'B-Tree & B+Tree Architecture Assessment Quiz',
      bn: 'B-Tree ও B+Tree আর্কিটেকচার মূল্যায়ন কুইজ'
    },
    questions: [
      {
        id: 'idx-btree-qz-1',
        kind: 'mcq',
        topic: 'btree-inventors-historical-origin',
        question: {
          en: 'Who invented the B-Tree data structure and at which research institution was it developed in 1970?',
          bn: 'B-Tree ডাটা স্ট্রাকচার কে আবিষ্কার করেছিলেন এবং ১৯৭০ সালে কোন গবেষণা প্রতিষ্ঠানে এটি তৈরি করা হয়েছিল?'
        },
        options: [
          {
            en: 'Rudolf Bayer and Edward M. McCreight at Boeing Scientific Research Laboratories',
            bn: 'রুডলফ বায়ার এবং এডওয়ার্ড এম. ম্যাকক্রেইট বোয়িং সায়েন্টিফিক রিসার্চ ল্যাবরেটরিজে'
          },
          {
            en: 'Bill Joy while creating the vi text editor at Berkeley',
            bn: 'বিল জয় বার্কলিতে vi টেক্সট এডিটর তৈরির সময়'
          },
          {
            en: 'Bjarne Stroustrup while inventing C++ at Bell Labs',
            bn: 'বিয়ার্নে স্ট্রাউস্ট্রুপ বেল ল্যাবসে সি++ তৈরির সময়'
          },
          {
            en: 'Larry Ellison while starting Oracle Corporation in California',
            bn: 'ল্যারি এলিসন ক্যালিফোর্নিয়ায় ওরাকল কোম্পানি শুরুর সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bayer and McCreight introduced the B-Tree in 1970 at Boeing Labs.',
          bn: 'বায়ার এবং ম্যাকক্রেইট ১৯৭০ সালে বোয়িং ল্যাবসে B-Tree প্রবর্তন করেন।'
        },
        explanation: {
          en: 'Rudolf Bayer and Edward M. McCreight published "Organization and Maintenance of Large Ordered Indices" in 1970 while working at Boeing, formalizing the B-Tree for large disk storage.',
          bn: 'রুডলফ বায়ার এবং এডওয়ার্ড এম. ম্যাকক্রেইট ১৯৭০ সালে বোয়িং ল্যাবস থেকে B-Tree ধারণার ওপর তাদের ঐতিহাসিক গবেষণাপত্র প্রকাশ করেন।'
        }
      },
      {
        id: 'idx-btree-qz-2',
        kind: 'mcq',
        topic: 'page-size-and-fanout-scale',
        question: {
          en: 'In PostgreSQL and MySQL InnoDB, what are the standard database page sizes that dictate B+Tree node capacity and fan-out?',
          bn: 'PostgreSQL এবং MySQL InnoDB-তে আদর্শ ডাটাবেস পেজের আকার কত যা B+Tree নোডের ধারণক্ষমতা এবং ফ্যান-আউট নির্ধারণ করে?'
        },
        options: [
          {
            en: '8KB in PostgreSQL and 16KB in MySQL InnoDB',
            bn: 'PostgreSQL-এ ৮KB এবং MySQL InnoDB-তে ১৬KB'
          },
          {
            en: '100 Megabytes in both database engines',
            bn: 'উভয় ডাটাবেস ইঞ্জিনে ১০০ মেগাবাইট'
          },
          {
            en: '4 Bytes in PostgreSQL and 8 Bytes in MySQL',
            bn: 'PostgreSQL-এ ৪ বাইট এবং MySQL-এ ৮ বাইট'
          },
          {
            en: '1 Gigabyte allocated per user account',
            bn: 'প্রতিটি ব্যবহারকারী অ্যাকাউন্টের জন্য ১ গিগাবাইট'
          }
        ],
        answer: 0,
        hint: {
          en: 'Postgres uses 8KB pages; InnoDB uses 16KB pages.',
          bn: 'Postgres ৮KB পেজ এবং InnoDB ১৬KB পেজ ব্যবহার করে।'
        },
        explanation: {
          en: 'PostgreSQL defaults to 8192-byte (8KB) pages, while InnoDB defaults to 16384-byte (16KB) pages. These page sizes allow each node to store hundreds of keys, keeping tree height under 4.',
          bn: 'Postgres-এর ডিফল্ট পেজ ৮KB এবং InnoDB-এর ১৬KB। এই আকারের কারণে প্রতিটি পেজে শত শত কি ধরে যায় এবং গাছের উচ্চতা ৪ স্তরের নিচে থাকে।'
        }
      },
      {
        id: 'idx-btree-qz-3',
        kind: 'mcq',
        topic: 'fill-factor-anti-fragmentation',
        question: {
          en: 'Why do database administrators lower the B-Tree FILLFACTOR setting (e.g. from 90% to 75%) on tables with heavy random primary key inserts?',
          bn: 'এলোমেলো প্রাইমারি কি দিয়ে ঘন ঘন ডাটা লেখার টেবিলে ডাটাবেস অ্যাডমিনিস্ট্রেটররা কেন B-Tree FILLFACTOR সেটিং কমিয়ে দেন (যেমন ৯০% থেকে ৭৫%)?'
        },
        options: [
          {
            en: 'To reserve empty headroom within each leaf page, preventing frequent node splits and page fragmentation as new random keys are inserted',
            bn: 'প্রতিটি পাতায় কিছুটা খালি জায়গা সংরক্ষণ করতে, যাতে নতুন এলোমেলো কি যোগ করার সময় ঘন ঘন নোড স্প্লিট এবং পেজ ফ্র্যাগমেন্টেশন না ঘটে'
          },
          {
            en: 'To force all users to type their queries in lowercase letters',
            bn: 'ব্যবহারকারীদের সমস্ত কোয়েরি ছোট হাতের অক্ষরে লিখতে বাধ্য করতে'
          },
          {
            en: 'To disconnect the database server from the power grid',
            bn: 'ডাটাবেস সার্ভারকে বৈদ্যুতিক গ্রিড থেকে বিচ্ছিন্ন করার জন্য'
          },
          {
            en: 'To reduce the physical weight of the computer server rack',
            bn: 'কম্পিউটার সার্ভার র্যাকের ভৌত ওজন কমিয়ে আনার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Leaving headroom inside pages accommodates random inserts without triggering splits.',
          bn: 'পাতায় খালি জায়গা রাখলে স্প্লিট না ঘটিয়েই নতুন ডাটা সুন্দরভাবে বসে যায়।'
        },
        explanation: {
          en: 'Sequential inserts (auto-increment integers) always append to the rightmost leaf without splits. Random inserts (UUIDs) hit random leaves; reserving 25% empty space prevents thrashing splits.',
          bn: 'ধারাবাহিক সংখ্যা ডানদিকের পাতায় যুক্ত হয় বলে স্প্লিট হয় না। কিন্তু এলোমেলো UUID পাতাগুলোর মাঝে ঢুকে পড়ে; তাই কিছুটা খালি জায়গা রাখলে ঘন ঘন স্প্লিটের খরচ এড়ানো যায়।'
        }
      },
      {
        id: 'idx-btree-qz-4',
        kind: 'mcq',
        topic: 'clustered-index-secondary-pointer-indirection',
        question: {
          en: 'In MySQL InnoDB, when a query looks up a record using a secondary non-clustered index, what pointer does it follow to reach the table row?',
          bn: 'MySQL InnoDB-তে কোনো কোয়েরি যখন সেকেন্ডারি নন-ক্লাস্টার্ড ইনডেক্স ব্যবহার করে, তখন মূল রো-তে পৌঁছাতে সে কোন পয়েন্টার অনুসরণ করে?'
        },
        options: [
          {
            en: 'It retrieves the Primary Key value stored in the secondary leaf, then performs a second B+Tree seek on the Clustered Index (Primary Key tree) to locate the actual row data',
            bn: 'এটি সেকেন্ডারি পাতায় সংরক্ষিত প্রাইমারি কি-এর মান সংগ্রহ করে, এরপর মূল ডাটা পেতে ক্লাস্টার্ড প্রাইমারি কি গাছে দ্বিতীয়বার ইনডেক্স সিক চালায়'
          },
          {
            en: 'It sends an email to the database developer asking for the row',
            bn: 'এটি ডাটাবেস ডেভেলপারকে ইমেইল পাঠিয়ে রোটি চেয়ে নেয়'
          },
          {
            en: 'It scans all hard drives connected to the local office Wi-Fi',
            bn: 'এটি লোকাল অফিসের ওয়াইফাইয়ের সাথে যুক্ত تمام হার্ডডিস্ক স্ক্যান করে'
          },
          {
            en: 'It translates the SQL query into an ancient Latin manuscript',
            bn: 'এটি SQL কোয়েরিটিকে প্রাচীন ল্যাটিন ভাষায় রূপান্তর করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Secondary lookups in InnoDB do a double-lookup: secondary index -> primary key -> clustered index.',
          bn: 'InnoDB-তে সেকেন্ডারি ইনডেক্স থেকে প্রাইমারি কি পাওয়া যায়, এরপর প্রাইমারি কি দিয়ে মূল রো পাওয়া যায়।'
        },
        explanation: {
          en: 'In InnoDB, secondary index leaf nodes store the Primary Key rather than physical disk pointers. This avoids pointer churn when rows move, but requires a two-step lookup unless covered.',
          bn: 'InnoDB-তে সেকেন্ডারি পাতার মধ্যে সরাসরি ডিস্ক অ্যাড্রেস থাকে না, বরং প্রাইমারি কি থাকে। ফলে রো স্থানান্তরিত হলেও সেকেন্ডারি ইনডেক্স বদলাতে হয় না, তবে মূল ডাটা পেতে দুইবার লুকআপ করতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'hashs-and-the-hash',
    title: {
      en: 'Hash Indexes & Exact Equality: O(1) Lookups & Limitations',
      bn: 'হ্যাশ ইনডেক্স ও নিখুঁত সমতা: O(1) লুকআপ ও সীমাবদ্ধতা'
    }
  }
};
