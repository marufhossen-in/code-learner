import type { Lesson } from '../../../lib/types';

export const theSurveyedVerdictLesson: Lesson = {
  slug: 'the-surveyed-verdict',
  tech: 'trees',
  title: {
    en: 'Database Indexing Architectures — B+ Trees, Scans, and Query Planners',
    bn: 'ডেটাবেস ইনডেক্সিং আর্কিটেকচার: বি+ ট্রি, স্ক্যান এবং কোয়েরি প্ল্যানার'
  },
  summary: {
    en: 'Every major relational database engine relies on tree structures to avoid scanning millions of rows sequentially. When queries execute, the database query planner chooses between full table scans, point index seeks, and B+ Tree range scans. While hash indexes achieve O(1) point lookups, they fail on range queries, ordering, and prefix searches. We analyze index-only covering scans, explain how B+ Tree leaf chains power ORDER BY clauses without in-memory sorting passes, and demystify EXPLAIN query execution plans.',
    bn: 'প্রতিটি প্রধান রিলেশনাল ডেটাবেস ইঞ্জিন লক্ষ লক্ষ সারি ক্রমান্বয়ে স্ক্যান করা এড়াতে ট্রি কাঠামোর ওপর নির্ভর করে। কোয়েরি চালানোর সময় ডেটাবেস কোয়েরি প্ল্যানার ফুল টেবিল স্ক্যান, পয়েন্ট ইনডেক্স এবং বি+ ট্রি রেঞ্জ স্ক্যানের মধ্যে সবচেয়ে উপযুক্ত পথটি বেছে নেয়। হ্যাশ ইনডেক্স O(1) সময়ে নির্দিষ্ট উপাদান খুঁজে দিলেও পরিসীমা কোয়েরি ও সাজানোর ক্ষেত্রে ব্যর্থ হয়। আমরা কভারিং ইনডেক্স বিশ্লেষণ করি, দেখাই কীভাবে বি+ ট্রি কোনো বাড়তি সর্টিং ছাড়াই ORDER BY কার্যকর করে এবং EXPLAIN প্ল্যান উন্মোচন করি।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-concurrent-grove',
    tech: 'trees',
    title: {
      en: 'Concurrent Trees — Lock-Free Traversal and B-Link Invariants',
      bn: 'সমবর্তী ট্রি: লক-ফ্রি ট্রাভার্সাল এবং বি-লিংক ইনভেরিয়েন্ট'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'query-planner-role',
      text: {
        en: 'The Database Engine: From SQL to Tree Traversal',
        bn: 'ডেটাবেস ইঞ্জিন: এসকিউএল থেকে ট্রি ট্রাভার্সালে রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you write declarative SQL queries, you specify what data you want, leaving retrieval mechanics to the engine. Under the hood, the database query planner inspects table statistics and available indexes to construct an execution plan that reads the minimal number of disk blocks.',
        bn: 'যখন আপনি ডিক্লেয়ারেটিভ এসকিউএল কোয়েরি লেখেন, তখন আপনি কেবল কী ডেটা চান তা উল্লেখ করেন, কীভাবে তা আনতে হবে তা ইঞ্জিনের ওপর ছেড়ে দেন। অভ্যন্তরীণভাবে ডেটাবেস কোয়েরি প্ল্যানার টেবিলের পরিসংখ্যান এবং ইনডেক্সগুলো দেখে একটি এক্সিকিউশন প্ল্যান তৈরি করে যা সর্বনিম্ন সংখ্যক ডিস্ক ব্লক পড়ে তথ্য সরবরাহ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Without an index, the engine must execute a Full Table Scan, reading every disk block sequentially in O(N) time. With a B+ Tree index, the engine performs a point seek from root to leaf in O(log_B N) steps, reducing disk reads from 1000000 blocks down to 3 or 4 pages.',
        bn: 'ইনডেক্স ছাড়া ইঞ্জিনটিকে ফুল টেবিল স্ক্যান চালাতে হয়, যেখানে O(N) সময়ে টেবিলের প্রতিটি ডিস্ক পেজ পড়তে হয়। কিন্তু একটি বি+ ট্রি ইনডেক্স থাকলে ইঞ্জিন মাত্র ৩ বা ৪টি পেজ পড়ে O(log_B N) ধাপে কাঙ্ক্ষিত সারিতে পৌঁছায়, যা ১০০০০০০ ব্লকের বিশাল চাপকে নিমিষেই দূর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'full-table-scan',
          def: {
            en: 'A brute-force strategy that reads every disk page in a table sequentially in linear O(N) time when no suitable index exists.',
            bn: 'কোনো উপযুক্ত ইনডেক্স না থাকলে O(N) সময়ে টেবিলের প্রতিটি ডিস্ক পেজ ক্রমান্বয়ে পড়ার ধীরগতির কৌশল।'
          }
        },
        {
          term: 'index-point-seek',
          def: {
            en: 'Navigating from the B+ Tree root down to a specific leaf page in O(log_B N) steps to retrieve a single row.',
            bn: 'একটি নির্দিষ্ট সারি পেতে B+ ট্রির রুট থেকে নির্দিষ্ট পাতায় মাত্র O(log_B N) ধাপে নেমে আসা।'
          }
        },
        {
          term: 'index-range-scan',
          def: {
            en: 'Navigating to a starting boundary in the B+ Tree and streaming horizontally along the leaf chain for range queries.',
            bn: 'বি+ ট্রির শুরুর পাতায় নেমে লিফ চেইন ধরে সরাসরি অনুভূমিকভাবে নির্দিষ্ট পরিসীমা স্ক্যান করা।'
          }
        },
        {
          term: 'covering-index',
          def: {
            en: 'An index containing all columns requested by a query, satisfying the query without reading underlying table data pages.',
            bn: 'এমন একটি ইনডেক্স যাতে কোয়েরির প্রয়োজনীয় সব কলাম থাকে, ফলে মূল টেবিলের পেজ না পড়েই উত্তর পাওয়া যায়।'
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
      id: 'index-types-table',
      text: {
        en: 'Architectural Comparison: B+ Tree Index vs Hash Index',
        bn: 'কাঠামোগত তুলনা: বি+ ট্রি ইনডেক্স বনাম হ্যাশ ইনডেক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Beginners often ask why databases do not use Hash tables everywhere since hash lookups are O(1) on average. While hash indexes excel at exact point matches, they completely fail for range queries, sorting, and prefix lookups. B+ Trees provide consistent performance across all query patterns.',
        bn: 'অনেকে প্রশ্ন করেন হ্যাশ টেবিল O(1) সময়ে কাজ করা সত্ত্বেও ডেটাবেস কেন সর্বত্র হ্যাশ ব্যবহার করে না। যদিও হ্যাশ ইনডেক্স নির্দিষ্ট পয়েন্ট খোঁজার জন্য দারুণ, কিন্তু পরিসীমা কোয়েরি, সাজানো বা প্রিফিক্স অনুসন্ধানে এটি পুরোপুরি অকেজো। বি+ ট্রি সব ধরনের কোয়েরিতে সুষম ও উচ্চ কার্যক্ষমতা প্রদান করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'SQL Operation', bn: 'এসকিউএল অপারেশন' },
        { en: 'B+ Tree Index Performance', bn: 'বি+ ট্রি ইনডেক্স কার্যক্ষমতা' },
        { en: 'Hash Index Performance', bn: 'হ্যাশ ইনডেক্স কার্যক্ষমতা' }
      ],
      rows: [
        [
          { en: 'Point Equality (WHERE id = 50)', bn: 'নির্দিষ্ট মান (WHERE id = ৫০)' },
          { en: 'O(log_B N) ~3 disk reads', bn: 'O(log_B N) ~৩ ডিস্ক রিড' },
          { en: 'O(1) average lookup', bn: 'O(1) গড় লুকআপ' }
        ],
        [
          { en: 'Range Query (BETWEEN 20 AND 30)', bn: 'পরিসীমা কোয়েরি (BETWEEN ২০ AND ৩০)' },
          { en: 'O(log_B N + K) streaming leaf scan', bn: 'O(log_B N + K) লিফ স্ক্যান' },
          { en: 'O(N) full table scan (fails)', bn: 'O(N) ফুল স্ক্যান (ব্যর্থ)' }
        ],
        [
          { en: 'Ordering (ORDER BY age LIMIT 10)', bn: 'সাজানো (ORDER BY age LIMIT ১০)' },
          { en: 'O(1) pre-sorted leaf access', bn: 'O(1) পূর্ব-সাজানো পাতা পড়া' },
          { en: 'O(N log N) full sort pass (fails)', bn: 'O(N log N) পুরো সাজানো (ব্যর্থ)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-planner-code',
      text: {
        en: 'Executable Query Planner Simulation',
        bn: 'কোয়েরি প্ল্যানার সিমুলেশনের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models query planning across 1000 table rows. A full table scan inspects every single record sequentially, whereas the B+ Tree index scan satisfies the range query in only 4 disk page accesses.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ১০০০টি টেবিল সারির ওপর কোয়েরি প্ল্যানিং পরিচালনা করে। ফুল টেবিল স্ক্যান প্রতিটি রেকর্ড একটি একটি করে পড়ে, যেখানে বি+ ট্রি ইনডেক্স স্ক্যান মাত্র ৪টি ডিস্ক পেজ অ্যাক্সেসের মাধ্যমেই সম্পূর্ণ পরিসীমার ফলাফল এনে দেয়।'
      }
    },
    {
      type: 'code',
      code: `class MockDatabase {
  constructor() {
    this.table = [];
    this.bPlusIndex = new Map();
  }

  insert(id, name, age) {
    const row = { id, name, age };
    this.table.push(row);
    this.bPlusIndex.set(age, row);
  }

  fullTableScan(minAge, maxAge) {
    let pagesInspected = 0;
    const matches = [];
    for (const row of this.table) {
      pagesInspected++;
      if (row.age >= minAge && row.age <= maxAge) {
        matches.push(row);
      }
    }
    return { matches, pagesInspected };
  }

  indexRangeScan(minAge, maxAge) {
    let indexPagesRead = 3; // 3 I/Os to descend B+ tree
    const matches = [];
    const sortedAges = [...this.bPlusIndex.keys()].sort((a, b) => a - b);
    for (const age of sortedAges) {
      if (age >= minAge && age <= maxAge) {
        matches.push(this.bPlusIndex.get(age));
      } else if (age > maxAge) {
        break;
      }
    }
    indexPagesRead += Math.ceil(matches.length / 10);
    return { matches, pagesInspected: indexPagesRead };
  }
}

const db = new MockDatabase();
for (let i = 1; i <= 1000; i++) {
  db.insert(i, \`User_\${i}\`, (i % 80) + 10);
}

const q1 = db.fullTableScan(25, 30);
console.log(\`Full Table Scan: Found \${q1.matches.length} rows, Pages Inspected: \${q1.pagesInspected}\`);
// Output: Full Table Scan: Found 78 rows, Pages Inspected: 1000

const q2 = db.indexRangeScan(25, 30);
console.log(\`B+ Tree Index Scan: Found \${q2.matches.length} rows, Pages Inspected: \${q2.pagesInspected}\`);
// Output: B+ Tree Index Scan: Found 6 rows, Pages Inspected: 4`
    },
    {
      type: 'heading',
      id: 'explain-plan-auditing',
      text: {
        en: 'Auditing Real Execution Plans: EXPLAIN in SQLite and MySQL',
        bn: 'বাস্তব কোয়েরি প্ল্যান নিরীক্ষণ: SQLite এবং MySQL এ EXPLAIN'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Senior backend engineers verify index usage by prefixing SQL queries with EXPLAIN QUERY PLAN. An output showing SEARCH TABLE ... USING INDEX confirms that the B+ tree was traversed. In contrast, an output showing SCAN TABLE flags an unindexed query that forces an expensive full table scan, alerting engineers to add the missing index.',
        bn: 'অভিজ্ঞ ব্যাকএন্ড ইঞ্জিনিয়াররা কোয়েরির আগে EXPLAIN QUERY PLAN লিখে ইনডেক্স ব্যবহারের সত্যতা যাচাই করেন। আউটপুটে SEARCH TABLE ... USING INDEX দেখালে নিশ্চিত হওয়া যায় যে বি+ ট্রি ব্যবহৃত হয়েছে। অন্যদিকে SCAN TABLE দেখালে বোঝা যায় যে কোনো ইনডেক্স নেই এবং সম্পূর্ণ টেবিল স্ক্যান হচ্ছে, যা দেখে ইঞ্জিনিয়াররা নতুন ইনডেক্স যুক্ত করেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'B+ Tree versatility: Outperforms hash indexes by supporting point lookups, range streaming, ordering, and prefix searches.',
          bn: 'বি+ ট্রির বহুমুখিতা: পয়েন্ট অনুসন্ধান, রেঞ্জ স্ট্রিমিং, সাজানো এবং প্রিফিক্স সার্চ সমর্থন করে হ্যাশকে ছাড়িয়ে যায়।'
        },
        {
          en: 'Drastic I/O reduction: Replaces linear O(N) table scans with logarithmic O(log_B N) page seeks, typically taking 3 or 4 reads.',
          bn: 'বিশাল I/O সাশ্রয়: রৈখিক O(N) স্ক্যানের বদলে লগারিদমিক O(log_B N) পেজ রিড ব্যবহার করে মাত্র ৩ বা ৪ ধাপে তথ্য আনে।'
        },
        {
          en: 'Covering index efficiency: Queries satisfied entirely from index pages eliminate secondary table data page fetches.',
          bn: 'কভারিং ইনডেক্সের সুবিধা: ইনডেক্স পেজ থেকেই সমস্ত কলামের উত্তর পাওয়া গেলে মূল টেবিলের পেজ পড়ার প্রয়োজন হয় না।'
        },
        {
          en: 'EXPLAIN verification: Running execution plans exposes whether queries traverse B+ tree indexes or waste resources on table scans.',
          bn: 'EXPLAIN দিয়ে যাচাই: এক্সিকিউশন প্ল্যান পরীক্ষা করে সহজেই বোঝা যায় কোয়েরি বি+ ট্রি ব্যবহার করছে নাকি স্ক্যানে অপচয় ঘটাচ্ছে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sv-ex1',
      kind: 'mcq',
      topic: 'covering-index-advantage',
      question: {
        en: 'What is a Covering Index (Index-Only Scan), and why does it improve database query performance?',
        bn: 'কভারিং ইনডেক্স (ইনডেক্স-অনলি স্ক্যান) কী এবং এটি কেন ডেটাবেস কোয়েরির কর্মক্ষমতা বহুগুণ বাড়িয়ে দেয়?'
      },
      options: [
        {
          en: 'An index that contains all columns requested by the SELECT clause, allowing the database to answer the query entirely from index pages without fetching table data rows',
          bn: 'এমন একটি ইনডেক্স যাতে SELECT ক্লজের সমস্ত কলাম সংরক্ষিত থাকে, ফলে মূল টেবিলের ডেটা পেজ না পড়েই কেবল ইনডেক্স পেজ থেকে উত্তর দেওয়া যায়'
        },
        {
          en: 'An index that encrypts disk files with AES-256',
          bn: 'একটি ইনডেক্স যা এইএস-২৫৬ দিয়ে ডিস্ক ফাইল এনক্রিপ্ট করে'
        },
        {
          en: 'An index that converts SQL queries into JSON responses',
          bn: 'একটি ইনডেক্স যা এসকিউএল কোয়েরিকে জেএসএন উত্তরে রূপান্তর করে'
        },
        {
          en: 'An index that deletes duplicate primary keys',
          bn: 'একটি ইনডেক্স যা ডুপ্লিকেট প্রাইমারি কি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the B+ tree index leaf already contains the user name and email, does the engine need to visit the main table?',
        bn: 'বি+ ট্রির পাতায় যদি ইতিমধ্যে নাম ও ইমেইল থাকে, তবে ইঞ্জিনের কি মূল টেবিলে যাওয়ার প্রয়োজন আছে?'
      },
      explanation: {
        en: 'A covering index satisfies the query directly from the leaf pages of the index, cutting disk I/O operations in half.',
        bn: 'কভারিং ইনডেক্স সরাসরি ইনডেক্স পাতা থেকেই সমস্ত তথ্যের উত্তর দেয়, যার ফলে ডিস্কের I/O খরচ অর্ধেক কমে যায়।'
      }
    },
    {
      id: 'sv-ex2',
      kind: 'mcq',
      topic: 'hash-vs-btree-limitations',
      question: {
        en: 'Why is a Hash index unable to accelerate a query containing an `ORDER BY created_at` clause?',
        bn: 'একটি হ্যাশ ইনডেক্স কেন `ORDER BY created_at` ক্লজযুক্ত কোয়েরিকে দ্রুত করতে পুরোপুরি অক্ষম?'
      },
      options: [
        {
          en: 'Hash functions scatter keys pseudo-randomly across buckets, destroying relative ordering and forcing the engine to perform a full sort pass',
          bn: 'হ্যাশ ফাংশন কি-গুলোকে এলোমেলোভাবে বাকেটে ছড়িয়ে দেয় যা স্বাভাবিক ক্রম নষ্ট করে এবং ইঞ্জিনকে পুরো ডেটা নতুন করে সাজাতে বাধ্য করে'
        },
        {
          en: 'Because hash tables only work with string values',
          bn: 'কারণ হ্যাশ টেবিল কেবল স্ট্রিং মানে কাজ করে'
        },
        {
          en: 'Because hash indexes cannot be stored on SSD drives',
          bn: 'কারণ হ্যাশ ইনডেক্স এসএসডি ড্রাইভে রাখা যায় না'
        },
        {
          en: 'Because hash indexes require 64-bit floating point numbers',
          bn: 'কারণ হ্যাশ ইনডেক্সে ৬৪-বিট দশমিক সংখ্যা প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Do adjacent keys (like 10 and 11) end up in adjacent hash buckets?',
        bn: 'পাশাপাশি থাকা মানগুলো (যেমন ১০ এবং ১১) কি পাশাপাশি হ্যাশ বাকেটে জমা হয়?'
      },
      explanation: {
        en: 'Hashing eliminates ordering. In contrast, B+ Tree leaf pages are sorted by key, satisfying ORDER BY in O(1) time without sorting.',
        bn: 'হ্যাশিং কোনো ক্রম রক্ষা করে না। কিন্তু বি+ ট্রির পাতাগুলো সাজানো থাকায় বাড়তি সর্টিং ছাড়াই O(1) সময়ে ORDER BY সম্পন্ন হয়।'
      }
    },
    {
      id: 'sv-ex3',
      kind: 'mcq',
      topic: 'explain-query-plan-indicator',
      question: {
        en: 'In SQLite and MySQL execution plans, what phrase warns engineers that a query lacks an index and is reading every record sequentially?',
        bn: 'SQLite এবং MySQL এর এক্সিকিউশন প্ল্যানে কোন বাক্যাংশটি সতর্ক করে যে কোয়েরিতে কোনো ইনডেক্স নেই এবং সমস্ত রেকর্ড ক্রমান্বয়ে পড়া হচ্ছে?'
      },
      options: [
        {
          en: 'SCAN TABLE (or type: ALL in MySQL), indicating a full table scan',
          bn: 'SCAN TABLE (বা MySQL এ type: ALL), যা ফুল টেবিল স্ক্যানের ইঙ্গিত দেয়'
        },
        {
          en: 'SEARCH TABLE USING INDEX',
          bn: 'SEARCH TABLE USING INDEX'
        },
        {
          en: 'COVERING INDEX SCAN',
          bn: 'COVERING INDEX SCAN'
        },
        {
          en: 'PRIMARY KEY LOOKUP',
          bn: 'PRIMARY KEY LOOKUP'
        }
      ],
      answer: 0,
      hint: {
        en: 'SCAN means reading all rows; SEARCH means traversing an index tree.',
        bn: 'SCAN মানে সব সারি পড়া; SEARCH মানে ইনডেক্স ট্রি ধরে অনুসন্ধান করা।'
      },
      explanation: {
        en: 'SCAN TABLE indicates that every page of the table was read sequentially in O(N) time because no matching B+ tree index was available.',
        bn: 'SCAN TABLE নির্দেশ করে যে কোনো বি+ ট্রি ইনডেক্স না থাকায় O(N) সময়ে টেবিলের প্রতিটি পেজ ক্রমান্বয়ে স্ক্যান করা হয়েছে।'
      }
    }
  ],
  quiz: {
    id: 'the-surveyed-verdict-quiz',
    title: {
      en: 'Database Indexing and B+ Trees Quiz',
      bn: 'ডেটাবেস ইনডেক্সিং এবং বি+ ট্রি কুইজ'
    },
    questions: [
      {
        id: 'sv-q1',
        kind: 'mcq',
        topic: 'bplus-tree-order-by-elimination',
        question: {
          en: 'How does an index on column `age` allow a query with `ORDER BY age LIMIT 5` to return in O(1) time?',
          bn: '`age` কলামে থাকা একটি ইনডেক্স কীভাবে `ORDER BY age LIMIT 5` কোয়েরিকে O(1) সময়ে ফলাফল দিতে সাহায্য করে?'
        },
        options: [
          {
            en: 'The B+ Tree leaf chain is already sorted by age; the engine simply reads the first 5 entries from the leftmost leaf page',
            bn: 'বি+ ট্রির পাতার চেইন আগে থেকেই বয়স অনুযায়ী সাজানো থাকে; ইঞ্জিন কেবল সবচেয়ে বামের পাতা থেকে প্রথম ৫টি এন্ট্রি পড়ে নেয়'
          },
          {
            en: 'It runs Quickselect on the entire table in memory',
            bn: 'এটি মেমরিতে সম্পূর্ণ টেবিলের ওপর কুইকসিলেক্ট চালায়'
          },
          {
            en: 'It deletes all rows where age is greater than 5',
            bn: 'এটি ৫ এর বেশি বয়সের সমস্ত সারি মুছে ফেলে'
          },
          {
            en: 'It converts the table into a hash map',
            bn: 'এটি টেবিলটিকে একটি হ্যাশ ম্যাপে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where do the smallest elements sit in a B+ Tree leaf chain?',
          bn: 'বি+ ট্রির লিফ চেইনে সবচেয়ে ছোট উপাদানগুলো কোথায় অবস্থান করে?'
        },
        explanation: {
          en: 'Because B+ Tree leaves maintain sorted order, queries requesting sorted extremes avoid sorting algorithms completely.',
          bn: 'বি+ ট্রির পাতাগুলো সাজানো থাকায় চরম মানগুলোর জন্য কোনো বাড়তি সর্টিং অ্যালগরিদম চালানোর প্রয়োজন হয় না।'
        }
      },
      {
        id: 'sv-q2',
        kind: 'mcq',
        topic: 'bplus-tree-prefix-search',
        question: {
          en: 'Can a B+ Tree index on column `username` accelerate a wildcard search like `WHERE username LIKE \'john%\'`?',
          bn: '`username` কলামে থাকা বি+ ট্রি ইনডেক্স কি `WHERE username LIKE \'john%\'` এর মতো ওয়াইল্ডকার্ড অনুসন্ধানকে দ্রুত করতে পারে?'
        },
        options: [
          {
            en: 'Yes, because prefix strings preserve lexicographical order, allowing the tree to seek to \'john\' and scan matching leaves',
            bn: 'হ্যাঁ, কারণ প্রিফিক্স স্ট্রিং অভিধানের ক্রম রক্ষা করে, যা ট্রিকে \'john\' এ নেমে মিলে যাওয়া পাতাগুলো স্ক্যান করতে দেয়'
          },
          {
            en: 'No, trees cannot store text strings',
            bn: 'না, ট্রি টেক্সট স্ট্রিং সংরক্ষণ করতে পারে না'
          },
          {
            en: 'No, wildcard searches always force a full table scan',
            bn: 'না, ওয়াইল্ডকার্ড অনুসন্ধান সর্বদা ফুল টেবিল স্ক্যান ঘটায়'
          },
          {
            en: 'Only if the username is written in capital letters',
            bn: 'কেবল যদি ব্যবহারকারীর নাম বড় হাতের অক্ষরে লেখা থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Words starting with \'john\' are clustered together alphabetically in the index leaves.',
          bn: '\'john\' দিয়ে শুরু হওয়া সমস্ত শব্দ ইনডেক্সের পাতায় বর্ণানুক্রমিকভাবে একসাথে জমা থাকে।'
        },
        explanation: {
          en: 'Prefix searches behave identically to range queries (`BETWEEN \'john\' AND \'joho\'`), leveraging the sorted leaf chain.',
          bn: 'প্রিফিক্স অনুসন্ধান মূলত রেঞ্জ কোয়েরির মতো কাজ করে এবং সাজানো লিফ চেইনের সুবিধা নিয়ে দ্রুত উত্তর দেয়।'
        }
      },
      {
        id: 'sv-q3',
        kind: 'mcq',
        topic: 'point-lookup-io-count',
        question: {
          en: 'In a production database table containing 100000000 rows indexed by a B+ Tree with fan-out 100, how many disk pages are fetched in the worst case for a primary key seek?',
          bn: '১০০ ফ্যান-আউট বিশিষ্ট বি+ ট্রি দ্বারা ইনডেক্স করা ১০০০০০০০০ সারির টেবিলে একটি প্রাইমারি কি খুঁজতে সবচেয়ে খারাপ ক্ষেত্রে কতটি ডিস্ক পেজ পড়তে হয়?'
        },
        options: [
          {
            en: 'At most 4 disk page reads, corresponding to the shallow height of the B+ Tree',
            bn: 'সর্বোচ্চ ৪টি ডিস্ক পেজ রিড, যা বি+ ট্রির অগভীর উচ্চতার সমান'
          },
          {
            en: '100000000 disk page reads',
            bn: '১০০০০০০০০ ডিস্ক পেজ রিড'
          },
          {
            en: 'Zero page reads',
            bn: 'শূন্য পেজ রিড'
          },
          {
            en: 'Exactly 10000 page reads',
            bn: 'ঠিক ১০০০০ পেজ রিড'
          }
        ],
        answer: 0,
        hint: {
          en: '100^4 = 100000000.',
          bn: '১০০^৪ = ১০০০০০০০০।'
        },
        explanation: {
          en: 'With a fanout of 100, 4 levels accommodate 100^4 = 100000000 rows. A point seek traverses at most 4 pages from root to leaf.',
          bn: '১০০ ফ্যান-আউটে ৪টি স্তরে ১০০^৪ = ১০০০০০০০০ সারি ধরে। ফলে রুট থেকে পাতা পর্যন্ত সর্বোচ্চ ৪টি পেজ পড়েই মান পাওয়া যায়।'
        }
      },
      {
        id: 'sv-q4',
        kind: 'mcq',
        topic: 'index-write-amplification-cost',
        question: {
          en: 'What is the downside of creating too many B+ Tree indexes on a database table that experiences frequent write operations?',
          bn: 'ঘন ঘন লেখা হয় এমন একটি ডেটাবেস টেবিলে অতিরিক্ত বি+ ট্রি ইনডেক্স তৈরি করার প্রধান অসুবিধা কী?'
        },
        options: [
          {
            en: 'Write performance slows down because every INSERT, UPDATE, or DELETE must modify and potentially split multiple B+ tree index pages',
            bn: 'লেখার গতি ধীর হয়ে যায় কারণ প্রতিটি INSERT, UPDATE বা DELETE এর জন্য একাধিক বি+ ট্রি ইনডেক্স পেজ আপডেট এবং স্প্লিট করতে হয়'
          },
          {
            en: 'Read queries stop working completely',
            bn: 'পঠন কোয়েরি পুরোপুরি বন্ধ হয়ে যায়'
          },
          {
            en: 'The database deletes the primary key automatically',
            bn: 'ডেটাবেস স্বয়ংক্রিয়ভাবে প্রাইমারি কি মুছে ফেলে'
          },
          {
            en: 'Table rows become corrupted with negative numbers',
            bn: 'টেবিলের সারিগুলো ঋণাত্মক সংখ্যায় নষ্ট হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Every secondary index is an independent B+ tree that must stay synchronized with table changes.',
          bn: 'প্রতিটি সেকেন্ডারি ইনডেক্স একটি পৃথক বি+ ট্রি যাকে টেবিলের পরিবর্তনের সাথে সবসময় সিঙ্ক রাখতে হয়।'
        },
        explanation: {
          en: 'While indexes speed up reads, each write must update every relevant index tree, increasing write amplification and disk I/O.',
          bn: 'ইনডেক্স পড়া দ্রুত করলেও প্রতিবার লেখার সময় সমস্ত ইনডেক্স ট্রি আপডেট করতে হয় যা রাইট অ্যাম্প্লিফিকেশন ও ডিস্ক খরচ বাড়ায়।'
        }
      }
    ]
  }
};
