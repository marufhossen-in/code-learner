import type { Lesson } from '../../../lib/types';

export const thePageFestivalLesson: Lesson = {
  slug: 'the-page-festival',
  tech: 'trees',
  title: {
    en: 'B-Trees and B+ Trees — Multi-Way Disk Paging and Leaf Chains',
    bn: 'বি-ট্রি এবং বি+ ট্রি: মাল্টি-ওয়ে ডিস্ক পেজিং এবং লিফ চেইন'
  },
  summary: {
    en: 'While binary search trees optimize for in-memory pointer dereferences, persistent databases like MySQL, PostgreSQL, and SQLite must minimize disk I/O latency. Fetching a 4-kilobyte disk page takes microseconds, dwarfing nanosecond CPU operations. B-Trees and B+ Trees solve this by widening node branching factors to hundreds of keys per page, shrinking tree height to 3 or 4 levels across billions of records. We explore B+ Tree leaf chaining for ultra-fast sequential range scans and trace bottom-up page splitting mechanics.',
    bn: 'বাইনারি সার্চ ট্রি যেখানে ইন-মেমোরি পয়েন্টার জাম্পের জন্য উপযোগী, সেখানে MySQL, PostgreSQL এবং SQLite এর মতো ডাটাবেসকে ধীরগতির ডিস্ক I/O বিলম্ব কমাতে হয়। একটি ৪-কিলোবাইট ডিস্ক পেজ পড়তে মাইক্রোসেকেন্ড লাগে যা সিপিইউর ন্যানোসেকেন্ড গতির চেয়ে অনেক ধীর। বি-ট্রি এবং বি+ ট্রি প্রতি নোডে শত শত কি যুক্ত করে ট্রির উচ্চতা ৩ বা ৪ স্তরে সংকুচিত করে এই সমস্যার সমাধান করে। আমরা দ্রুত সিকোয়েনশিয়াল রেঞ্জ স্ক্যানের জন্য বি+ ট্রির লিফ চেইনিং এবং বটম-আপ পেজ স্প্লিটের কার্যপদ্ধতি বিশ্লেষণ করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-augmented-atlas',
    tech: 'trees',
    title: {
      en: 'Augmented Trees — Order-Statistic Trees, Segment Trees, and Interval Indices',
      bn: 'বর্ধিত ট্রি: অর্ডার-স্ট্যাটিস্টিক ট্রি, সেগমেন্ট ট্রি এবং ইন্টারভাল ইনডেক্স'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'disk-io-reality',
      text: {
        en: 'The Storage Hierarchy: Why Binary Trees Fail on Disk',
        bn: 'স্টোরেজ হায়ারার্কি: কেন ডিস্কে বাইনারি ট্রি ব্যর্থ হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-throughput database systems, data must persist reliably across power loss. Secondary storage mediums like Solid State Drives and hard disks do not read individual bytes; they transfer data in fixed hardware blocks of 4 kilobytes to 16 kilobytes known as disk pages.',
        bn: 'উচ্চ ক্ষমতার ডেটাবেস সিস্টেমে বিদ্যুৎ চলে গেলেও ডেটা সুরক্ষিত রাখার ব্যবস্থা থাকতে হয়। সলিড স্টেট ড্রাইভ (SSD) বা হার্ড ডিস্কের মতো স্টোরেজ মাধ্যমগুলো একক বাইটে ডেটা পড়ে না; তারা ৪ কিলোবাইট থেকে ১৬ কিলোবাইটের ডিস্ক পেজ বা ব্লকে ডেটা আদান-প্রদান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If a database indexed 1000000000 rows using an AVL tree, the tree height would reach 30 levels. Searching for a single record would require 30 separate disk page reads, taking dozens of milliseconds. B-Trees resolve this bottleneck by widening each node to hold hundreds of keys, collapsing tree height to 3 or 4 levels.',
        bn: 'একটি ডেটাবেস যদি ১০০০০০০০০০ সারির জন্য এভিএল ট্রি ব্যবহার করত, তবে ট্রির উচ্চতা ৩০ স্তরে পৌঁছে যেত। একটিমাত্র রেকর্ড খুঁজতে ৩০টি আলাদা ডিস্ক পেজ পড়তে হতো যা কয়েক মিলি-সেকেন্ড সময় নষ্ট করত। বি-ট্রি প্রতিটি নোডে শত শত কি রেখে ট্রির উচ্চতা মাত্র ৩ বা ৪ স্তরে সংকুচিত করে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'b-tree',
          def: {
            en: 'A self-balancing search tree where each node holds multiple keys and child pointers, designed to match hardware disk block sizes.',
            bn: 'একটি ব্যালান্সড সার্চ ট্রি যার প্রতিটি নোডে একাধিক কি এবং চাইল্ড পয়েন্টার থাকে, যা হার্ডওয়্যার ডিস্ক ব্লকের সাথে মিলিয়ে তৈরি।'
          }
        },
        {
          term: 'b-plus-tree',
          def: {
            en: 'A specialized variant where internal nodes hold only routing separators, and all data records reside in a horizontally linked leaf chain.',
            bn: 'বি-ট্রির একটি উন্নত রূপ যেখানে ভেতরের নোডে কেবল রাউটিং কি থাকে এবং সমস্ত ডেটা অনুভূমিকভাবে সংযুক্ত পাতার চেইনে থাকে।'
          }
        },
        {
          term: 'fan-out-factor',
          def: {
            en: 'The number of child pointers emanating from a single node, typically ranging from 100 to 500 in database storage engines.',
            bn: 'একটি নোড থেকে বের হওয়া চাইল্ড পয়েন্টারের সংখ্যা, যা ডেটাবেস ইঞ্জিনে সাধারণত ১০০ থেকে ৫০০ পর্যন্ত হয়।'
          }
        },
        {
          term: 'leaf-chaining',
          def: {
            en: 'A doubly linked list connecting all leaf pages sequentially, enabling streaming range queries without ascending parent nodes.',
            bn: 'সমস্ত পাতার পেজকে ক্রমান্বয়ে যুক্ত করা লিংকড লিস্ট যা প্যারেন্টে ফিরে না গিয়েও সরাসরি রেঞ্জ কোয়েরি করতে দেয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'tree'
    },
    {
      type: 'heading',
      id: 'btree-vs-bplus-table',
      text: {
        en: 'Architectural Comparison: B-Tree vs B+ Tree',
        bn: 'কাঠামোগত তুলনা: বি-ট্রি বনাম বি+ ট্রি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While classic B-Trees store data records across both internal and leaf nodes, modern database engines standardise exclusively on B+ Trees. In a B+ Tree, internal nodes act as pure routing directories containing only separator keys and page pointers, maximizing the fan-out factor. All data records are stored in leaves, linked sequentially for streaming range queries.',
        bn: 'সাধারণ বি-ট্রি ভেতরের নোড এবং পাতা উভয় জায়গাতেই ডেটা রেকর্ড জমা রাখলেও আধুনিক ডেটাবেস ইঞ্জিনগুলো কেবল বি+ ট্রি ব্যবহার করে। বি+ ট্রিতে ভেতরের নোডগুলো কেবল দিকনির্দেশক হিসেবে কি ও পয়েন্টার রাখে, যা চাইল্ডের সংখ্যা বা ফ্যান-আউট বাড়িয়ে দেয়। সমস্ত ডেটা কেবল পাতায় সংরক্ষিত থাকে এবং পাতাগুলো শিকলের মতো যুক্ত থাকায় রেঞ্জ কোয়েরি অত্যন্ত দ্রুত হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'কাঠামোগত দিক' },
        { en: 'Classic B-Tree', bn: 'সাধারণ বি-ট্রি' },
        { en: 'B+ Tree (Industry Standard)', bn: 'বি+ ট্রি (শিল্প স্ট্যান্ডার্ড)' }
      ],
      rows: [
        [
          { en: 'Data Payload Location', bn: 'ডেটা রেকর্ডের অবস্থান' },
          { en: 'Everywhere (internal and leaf nodes)', bn: 'সবখানে (ভেতরের নোড এবং পাতায়)' },
          { en: 'Exclusively in leaf pages', bn: 'শুধুমাত্র পাতার পেজে' }
        ],
        [
          { en: 'Range Query Execution', bn: 'রেঞ্জ কোয়েরি কার্যপদ্ধতি' },
          { en: 'Tree traversal jumping between disk levels', bn: 'ডিস্কের স্তরের মধ্যে ওঠানামা করে ট্রি ট্রাভার্সাল' },
          { en: 'Sequential linear scan across leaf chain', bn: 'লিফ চেইন ধরে সরাসরি ধারাবাহিক স্ক্যান' }
        ],
        [
          { en: 'Fan-out Capacity', bn: 'ফ্যান-আউট ক্ষমতা' },
          { en: 'Reduced by bulky data payloads in internal nodes', bn: 'ভেতরে ভারী ডেটা থাকায় চাইল্ড কম ধরে' },
          { en: 'Maximized (only compact routing keys stored)', bn: 'সর্বোচ্চ (ভেতরে কেবল ছোট কি ও পয়েন্টার)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-bplus-code',
      text: {
        en: 'Executable B+ Tree Leaf Chain Implementation',
        bn: 'বি+ ট্রি লিফ চেইনের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program constructs a B+ Tree with page splitting and executes a range query. Notice how the internal node stores separator key 30, and the range scan for keys between 20 and 45 streams horizontally across the leaf chain.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি পেজ স্প্লিটিংসহ একটি বি+ ট্রি তৈরি করে এবং রেঞ্জ কোয়েরি পরিচালনা করে। লক্ষ্য করুন কীভাবে ভেতরের নোডে সেপারেটর কি ৩০ থাকে এবং ২০ থেকে ৪৫ এর মধ্যবর্তী রেঞ্জ স্ক্যানটি পাতার চেইন ধরে অনুভূমিকভাবে ডেটা খুঁজে আনে।'
      }
    },
    {
      type: 'code',
      code: `class BPlusLeaf {
  constructor() {
    this.keys = [];
    this.values = [];
    this.next = null;
  }
}

class BPlusInternal {
  constructor() {
    this.keys = []; // routing separators
    this.children = [];
  }
}

class ToyBPlusTree {
  constructor(maxKeys = 3) {
    this.maxKeys = maxKeys;
    this.root = new BPlusLeaf();
  }

  insert(key, value) {
    if (this.root instanceof BPlusLeaf) {
      const leaf = this.root;
      let idx = 0;
      while (idx < leaf.keys.length && leaf.keys[idx] < key) idx++;
      leaf.keys.splice(idx, 0, key);
      leaf.values.splice(idx, 0, value);

      // Split if full
      if (leaf.keys.length > this.maxKeys) {
        const mid = Math.floor(leaf.keys.length / 2);
        const rightLeaf = new BPlusLeaf();
        rightLeaf.keys = leaf.keys.splice(mid);
        rightLeaf.values = leaf.values.splice(mid);
        rightLeaf.next = leaf.next;
        leaf.next = rightLeaf;

        const newRoot = new BPlusInternal();
        newRoot.keys = [rightLeaf.keys[0]];
        newRoot.children = [leaf, rightLeaf];
        this.root = newRoot;
      }
    } else {
      const internal = this.root;
      let childIdx = 0;
      if (key >= internal.keys[0]) childIdx = 1;
      const leaf = internal.children[childIdx];

      let idx = 0;
      while (idx < leaf.keys.length && leaf.keys[idx] < key) idx++;
      leaf.keys.splice(idx, 0, key);
      leaf.values.splice(idx, 0, value);
    }
  }

  rangeScan(low, high) {
    let curr = this.root;
    if (curr instanceof BPlusInternal) {
      let childIdx = 0;
      if (low >= curr.keys[0]) childIdx = 1;
      curr = curr.children[childIdx];
    }

    const results = [];
    while (curr) {
      for (let i = 0; i < curr.keys.length; i++) {
        if (curr.keys[i] >= low && curr.keys[i] <= high) {
          results.push({ key: curr.keys[i], val: curr.values[i] });
        } else if (curr.keys[i] > high) {
          return results;
        }
      }
      curr = curr.next;
    }
    return results;
  }
}

const db = new ToyBPlusTree(3);
db.insert(10, 'Record 10');
db.insert(20, 'Record 20');
db.insert(30, 'Record 30');
db.insert(40, 'Record 40');
db.insert(50, 'Record 50');

console.log('Root type:', db.root.constructor.name);
// Output: Root type: BPlusInternal
console.log('Internal separator key:', db.root.keys[0]);
// Output: Internal separator key: 30
console.log('Left leaf keys:', db.root.children[0].keys.join(', '));
// Output: Left leaf keys: 10, 20
console.log('Right leaf keys:', db.root.children[1].keys.join(', '));
// Output: Right leaf keys: 30, 40, 50

const range = db.rangeScan(20, 45);
console.log('Range scan [20, 45]:', range.map(r => r.key).join(', '));
// Output: Range scan [20, 45]: 20, 30, 40
console.log('Range scan matches count:', range.length);
// Output: Range scan matches count: 3`
    },
    {
      type: 'heading',
      id: 'buffer-pool-paging',
      text: {
        en: 'Buffer Pool Architecture: Bridging Disk Pages to RAM',
        bn: 'বাফার পুল আর্কিটেকচার: ডিস্ক পেজ এবং র্যামের সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To avoid hitting disk on every query, database engines maintain an in-memory buffer pool that caches hot B+ tree pages. Because the root and top-level internal pages are constantly accessed, they remain pinned permanently in fast RAM cache. As a result, searching a table with 1000000000 rows usually requires only 1 physical disk read to fetch the target leaf page.',
        bn: 'প্রতিটি কোয়েরিতে যাতে ডিস্কে যেতে না হয়, সেজন্য ডেটাবেস ইঞ্জিনগুলো মেমরিতে একটি বাফার পুল রাখে যা বহুল ব্যবহৃত বি+ ট্রি পেজগুলোকে ক্যাশ করে রাখে। যেহেতু রুট এবং ওপরের রাউটিং পেজগুলো বারবার ব্যবহৃত হয়, তাই তারা স্থায়ীভাবে দ্রুতগতির র্যামে সংরক্ষিত থাকে। ফলে ১০০০০০০০০০ সারির একটি টেবিলে কোনো তথ্য খুঁজতে সাধারণত মাত্র ১টি বাস্তব ডিস্ক রিডের প্রয়োজন হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Disk page alignment: B-Tree nodes match 4KB to 16KB disk blocks to minimize slow secondary storage read operations.',
          bn: 'ডিস্ক পেজ সমন্বয়: ধীরগতির ডিস্ক পড়া কমাতে বি-ট্রির নোডগুলো ৪কেবি থেকে ১৬কেবি ব্লকের সাথে মিলিয়ে তৈরি হয়।'
        },
        {
          en: 'Wide fan-out flattens tree: Branching factors of 200+ collapse the height of billion-row tables down to 3 or 4 levels.',
          bn: 'প্রশস্ত ফ্যান-আউটে চ্যাপ্টা ট্রি: ২০০+ ফ্যান-আউটের কারণে ১০০ কোটি সারির টেবিলও মাত্র ৩ বা ৪ স্তরের উচ্চতায় নেমে আসে।'
        },
        {
          en: 'B+ leaf chaining: Internal nodes hold only routing separators while leaves form a contiguous doubly-linked sequential scan chain.',
          bn: 'বি+ লিফ চেইনিং: ভেতরের নোডে কেবল রাউটিং কি থাকে এবং পাতাগুলো একটি অবিচ্ছিন্ন সিকোয়েনশিয়াল স্ক্যান চেইন গঠন করে।'
        },
        {
          en: 'Bottom-up growth: When pages overflow, the median key splits upward, guaranteeing that all leaves remain at identical depth.',
          bn: 'নিচ থেকে উপরে বৃদ্ধি: পেজ ভরে গেলে মাঝের কি ওপরে ওঠে, যা নিশ্চিত করে যে সমস্ত পাতা সর্বদা নিখুঁত সমান গভীরতায় থাকবে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pf-ex1',
      kind: 'mcq',
      topic: 'bplus-tree-range-scan-advantage',
      question: {
        en: 'Why is a range scan (e.g. WHERE id BETWEEN 100 AND 500) significantly faster in a B+ Tree than in a standard Binary Search Tree on disk?',
        bn: 'ডিস্কে একটি সাধারণ বাইনারি সার্চ ট্রির চেয়ে বি+ ট্রিতে কেন রেঞ্জ স্ক্যান (যেমন WHERE id BETWEEN 100 AND 500) অনেক দ্রুত সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'All leaf nodes in a B+ Tree are linked in a continuous horizontal chain, allowing the query to stream sequentially through pages without traversing back to parents',
          bn: 'বি+ ট্রির সমস্ত পাতার নোড একটি অনুভূমিক চেইনে যুক্ত থাকে, ফলে প্যারেন্ট নোডে ফিরে না গিয়েই সরাসরি এক পেজ থেকে অন্য পেজে পড়া যায়'
        },
        {
          en: 'Because B+ Trees convert range queries into SQL insert statements',
          bn: 'কারণ বি+ ট্রি রেঞ্জ কোয়েরিকে এসকিউএল ইনসার্টে রূপান্তর করে'
        },
        {
          en: 'Because B+ Trees do not store numbers greater than 100',
          bn: 'কারণ বি+ ট্রি ১০০ এর বেশি সংখ্যা সংরক্ষণ করে না'
        },
        {
          en: 'Because leaf chains bypass operating system storage drivers',
          bn: 'কারণ লিফ চেইন অপারেটিং সিস্টেম স্টোরেজ ড্রাইভার এড়িয়ে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look at how leaf pages are connected to each other side-by-side.',
        bn: 'পাতার পেজগুলো কীভাবে পাশাপাশি পরস্পরের সাথে যুক্ত থাকে তা লক্ষ্য করুন।'
      },
      explanation: {
        en: 'In a B+ tree, navigating to the starting leaf takes O(log_B n). Subsequent records are read via sequential disk streaming across the leaf chain.',
        bn: 'বি+ ট্রিতে প্রথম পাতায় যেতে O(log_B n) লাগে। এরপর পাতার চেইন ধরে সরাসরি সিকোয়েনশিয়াল ডিস্ক রিডের মাধ্যমে ডেটা পড়া যায়।'
      }
    },
    {
      id: 'pf-ex2',
      kind: 'mcq',
      topic: 'btree-node-page-size',
      question: {
        en: 'Why are B-Tree node sizes deliberately sized to match operating system disk pages (such as 4 kilobytes or 16 kilobytes)?',
        bn: 'কেন বি-ট্রি নোডের আকারকে অপারেটিং সিস্টেমের ডিস্ক পেজের সাথে (যেমন ৪ কিলোবাইট বা ১৬ কিলোবাইট) মিলিয়ে তৈরি করা হয়?'
      },
      options: [
        {
          en: 'Reading a disk page fetches the entire multi-key node in a single hardware I/O operation, maximizing data transfer per seek',
          bn: 'একটি ডিস্ক পেজ পড়লে একটিমাত্র I/O অপারেশনে পুরো নোডের শত শত কি একসাথে চলে আসে, যা প্রতি সিকে সর্বোচ্চ ডেটা সরবরাহ করে'
        },
        {
          en: 'Because smaller nodes cause the disk drive motor to overheat',
          bn: 'কারণ ছোট নোড ডিস্ক ড্রাইভ মোটরকে অতিরিক্ত গরম করে'
        },
        {
          en: 'Because JavaScript arrays cannot exceed 4 kilobytes in size',
          bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে ৪ কিলোবাইটের বেশি হতে পারে না'
        },
        {
          en: 'To allow nodes to be compressed with JPEG image algorithms',
          bn: 'নোডগুলোকে জেপেগ ইমেজ অ্যালগরিদম দিয়ে সংকুচিত করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Storage hardware transfers data in units of full pages, not individual bytes.',
        bn: 'স্টোরেজ হার্ডওয়্যার একক বাইটে নয়, সম্পূর্ণ পেজের এককে ডেটা স্থানান্তর করে।'
      },
      explanation: {
        en: 'Since the drive reads an entire 4KB page regardless of requested bytes, sizing the node to 4KB fills the transfer with useful index keys.',
        bn: 'যেহেতু ড্রাইভ প্রতিবার পুরো ৪কেবি পেজ পড়ে, তাই নোডের আকার ৪কেবি রাখলে একবারে প্রচুর দরকারী ইনডেক্স কি মেমরিতে চলে আসে।'
      }
    },
    {
      id: 'pf-ex3',
      kind: 'mcq',
      topic: 'page-split-median-promotion',
      question: {
        en: 'When a B-Tree node exceeds its maximum capacity during insertion, how is the overflow resolved?',
        bn: 'সন্নিবেশের সময় যখন একটি বি-ট্রি নোড তার ধারণক্ষমতা অতিক্রম করে, তখন কীভাবে সেই অতিরিক্ত চাপ সামাল দেওয়া হয়?'
      },
      options: [
        {
          en: 'The node splits into two half-full pages, and the median key is pushed upward into the parent node',
          bn: 'নোডটি বিভক্ত হয়ে দুটি অর্ধ-পূর্ণ পেজে পরিণত হয় এবং মাঝের মধ্যমা কি-টি ওপরে প্যারেন্ট নোডে উঠে যায়'
        },
        {
          en: 'The oldest key in the node is deleted permanently',
          bn: 'নোডের সবচেয়ে পুরোনো কি স্থায়ীভাবে মুছে ফেলা হয়'
        },
        {
          en: 'The tree crashes with an Out-of-Disk error',
          bn: 'ট্রিটি আউট-অব-ডিস্ক ত্রুটি দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The entire tree is recreated from scratch',
          bn: 'পুরো ট্রি শুরু থেকে পুনরায় তৈরি করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'B-Trees grow upward toward the root when pages overflow.',
        bn: 'পেজ উপচে পড়লে বি-ট্রি নিচ থেকে ওপরের রুটের দিকে বড় হয়।'
      },
      explanation: {
        en: 'Splitting keeps nodes at least half-full. Pushing the median up to the parent preserves balance and search properties across all levels.',
        bn: 'পেজ ভাগ করার ফলে নোডগুলো কমপক্ষে অর্ধেক পূর্ণ থাকে এবং মাঝের কি ওপরে ওঠায় সমস্ত স্তরের ভারসাম্য সুরক্ষিত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-page-festival-quiz',
    title: {
      en: 'B-Trees, B+ Trees, and Disk Paging Quiz',
      bn: 'বি-ট্রি, বি+ ট্রি এবং ডিস্ক পেজিং কুইজ'
    },
    questions: [
      {
        id: 'pf-q1',
        kind: 'mcq',
        topic: 'btree-height-calculation',
        question: {
          en: 'If a B-Tree has an average fan-out branching factor of 100, what is the maximum tree height needed to index 1000000 records?',
          bn: 'একটি বি-ট্রির গড় ফ্যান-আউট ব্রাঞ্চিং ফ্যাক্টর যদি ১০০ হয়, তবে ১০০০০০০ রেকর্ড ইনডেক্স করতে সর্বোচ্চ কত উচ্চতার প্রয়োজন হবে?'
        },
        options: [
          {
            en: 'Approximately 3 levels (log100(1000000) = 3)',
            bn: 'প্রায় ৩ স্তর (log100(১০০০০০০) = ৩)'
          },
          {
            en: 'Exactly 1000 levels',
            bn: 'ঠিক ১০০০ স্তর'
          },
          {
            en: '50 levels',
            bn: '৫০ স্তর'
          },
          {
            en: '1 level only',
            bn: 'মাত্র ১ স্তর'
          }
        ],
        answer: 0,
        hint: {
          en: '100^3 = 100 * 100 * 100 = 1000000.',
          bn: '১০০^৩ = ১০০ * ১০০ * ১০০ = ১০০০০০০।'
        },
        explanation: {
          en: 'Because each step branches 100 ways, 3 levels index 100^3 = 1000000 keys, requiring at most 3 page reads.',
          bn: 'প্রতি ধাপে ১০০টি শাখা তৈরি হওয়ায় মাত্র ৩টি স্তরেই ১০০^৩ = ১০০০০০০ কি রাখা যায়, যার জন্য সর্বোচ্চ ৩টি ডিস্ক রিড লাগে।'
        }
      },
      {
        id: 'pf-q2',
        kind: 'mcq',
        topic: 'bplus-internal-node-contents',
        question: {
          en: 'What information is stored inside the internal (non-leaf) nodes of a production B+ Tree?',
          bn: 'একটি প্রোডাকশন বি+ ট্রির ভেতরের (পাতা নয়) নোডগুলোতে কী কী তথ্য সংরক্ষিত থাকে?'
        },
        options: [
          {
            en: 'Routing separator keys and child page pointers only, with zero data row payloads',
            bn: 'কেবল রাউটিং সেপারেটর কি এবং চাইল্ড পেজ পয়েন্টার, কোনো ডেটা রেকর্ড থাকে না'
          },
          {
            en: 'Full table row records and binary attachments',
            bn: 'সম্পূর্ণ টেবিল রেকর্ড এবং বাইনারি ফাইল'
          },
          {
            en: 'Only null pointers',
            bn: 'কেবল নাল পয়েন্টার'
          },
          {
            en: 'Encrypted passwords exclusively',
            bn: 'কেবল এনক্রিপ্ট করা পাসওয়ার্ড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Internal nodes in a B+ tree exist solely to guide search queries to the correct leaf page.',
          bn: 'বি+ ট্রির ভেতরের নোডগুলো কেবল কোয়েরিকে সঠিক পাতার ঠিকানায় পৌঁছে দেওয়ার পথ নির্দেশ করে।'
        },
        explanation: {
          en: 'Excluding bulky row data from internal nodes maximizes fan-out, allowing thousands of page routes to fit into each 4KB routing page.',
          bn: 'ভেতরের নোড থেকে ভারী ডেটা বাদ দিলে ফ্যান-আউট বাড়ে এবং প্রতিটি ৪কেবি পেজে হাজার হাজার শাখার পথ ধরে রাখা যায়।'
        }
      },
      {
        id: 'pf-q3',
        kind: 'mcq',
        topic: 'buffer-pool-pinned-root',
        question: {
          en: 'Why do database management systems keep the root and top levels of a B+ Tree permanently pinned in RAM cache?',
          bn: 'ডেটাবেস ম্যানেজমেন্ট সিস্টেমগুলো কেন বি+ ট্রির রুট এবং ওপরের স্তরগুলোকে র্যাম ক্যাশে স্থায়ীভাবে পিন করে রাখে?'
        },
        options: [
          {
            en: 'Because virtually every query must pass through the root, caching it eliminates disk I/O for the upper levels of the tree',
            bn: 'যেহেতু প্রায় প্রতিটি কোয়েরি রুট দিয়েই শুরু হয়, তাই এটি ক্যাশ করে রাখলে ওপরের স্তরের ডিস্ক রিড পুরোপুরি দূর হয়'
          },
          {
            en: 'Because the operating system deletes roots if they are stored on disk',
            bn: 'কারণ ডিস্কে রাখলে অপারেটিং সিস্টেম রুট নোড মুছে ফেলে'
          },
          {
            en: 'Because B+ Tree roots consume 0 bytes of RAM',
            bn: 'কারণ বি+ ট্রি রুট ০ বাইট র্যাম খরচ করে'
          },
          {
            en: 'To prevent network hackers from stealing root passwords',
            bn: 'নেটওয়ার্ক হ্যাকারদের রুট পাসওয়ার্ড চুরি করা ঠেকাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If every search starts at page 0, reading page 0 from disk every millisecond would be a huge waste.',
          bn: 'প্রতিটি অনুসন্ধান যদি ০ নম্বর পেজ থেকে শুরু হয়, তবে প্রতিবার ডিস্ক থেকে তা পড়া মারাত্মক অপচয়।'
        },
        explanation: {
          en: 'Keeping the small root and top levels in memory ensures that searches only hit physical disk when reading the final leaf page.',
          bn: 'রুট ও ওপরের নোডগুলো মেমরিতে রাখায় পুরো অনুসন্ধানে কেবল শেষ পাতার পেজটি পড়ার জন্যই বাস্তব ডিস্কে হাত দিতে হয়।'
        }
      },
      {
        id: 'pf-q4',
        kind: 'mcq',
        topic: 'btree-growth-direction',
        question: {
          en: 'In which direction does a B-Tree grow when insertions cause repeated page splits?',
          bn: 'সন্নিবেশের কারণে যখন বারবার পেজ স্প্লিট হতে থাকে, তখন একটি বি-ট্রি কোন দিকে বৃদ্ধি পায়?'
        },
        options: [
          {
            en: 'Upward toward the root: when the root splits, a new root is created and the tree becomes one level taller for all nodes simultaneously',
            bn: 'উপরের দিকে রুটের দিকে: যখন রুট বিভক্ত হয় তখন নতুন রুট তৈরি হয় এবং সমস্ত নোডের জন্য ট্রি একসাথে এক স্তর লম্বা হয়'
          },
          {
            en: 'Downward: leaf nodes create uneven child extensions',
            bn: 'নিচের দিকে: পাতার নোডগুলো অসমান চাইল্ড তৈরি করে'
          },
          {
            en: 'Horizontally: only the width increases while height stays 1',
            bn: 'অনুভূমিকভাবে: কেবল প্রস্থ বাড়ে কিন্তু উচ্চতা ১ থাকে'
          },
          {
            en: 'In reverse order',
            bn: 'বিপরীত ক্রমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Do B-Trees add new leaves at the bottom or promote median keys upward?',
          bn: 'বি-ট্রি কি নিচে নতুন পাতা যোগ করে নাকি মাঝের কি ওপরে পাঠায়?'
        },
        explanation: {
          en: 'Unlike BSTs which grow downward at individual leaves, B-trees grow upward at the root when it splits, maintaining equal depth across all leaves.',
          bn: 'নিচে বাড়ে এমন বিএসটির মতো না হয়ে বি-ট্রি রুটের বিভাজনের মাধ্যমে ওপরে বাড়ে, ফলে সমস্ত পাতা নিখুঁতভাবে সমান গভীরতায় থাকে।'
        }
      }
    ]
  }
};
