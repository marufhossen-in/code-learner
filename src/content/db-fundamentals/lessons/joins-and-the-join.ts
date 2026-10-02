import type { Lesson } from '../../../lib/types';

export const JoinsAndTheJoinLesson: Lesson = {
  slug: 'joins-and-the-join',
  tech: 'db-fundamentals',
  title: {
    en: 'Relational Joins: Inner, Left, Right & Full Outer Joins',
    bn: 'রিলেশনাল জয়েন: ইনার, লেফট, রাইট ও ফুল আউটার জয়েন'
  },
  summary: {
    en: 'Combine relational tables with mathematical set logic: master Cartesian products, INNER JOIN, LEFT and RIGHT OUTER JOINs, FULL OUTER JOIN, and database physical join algorithms (Hash Join, Merge Sort, Nested Loops).',
    bn: 'গাণিতিক সেট লজিক দিয়ে রিলেশনাল টেবিল সংযুক্ত করুন: কার্টেসিয়ান প্রোডাক্ট, INNER JOIN, LEFT ও RIGHT আউটার জয়েন, FULL আউটার জয়েন এবং ডাটাবেসের ফিজিক্যাল জয়েন অ্যালগরিদম জানুন।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'cartesian-product-and-predicates',
      text: {
        en: 'The Cartesian Product Foundation and Join Predicates',
        bn: 'কার্টেসিয়ান প্রোডাক্টের ভিত্তি ও জয়েন প্রেডিকেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'At the mathematical core of relational algebra, combining two distinct tables begins with the Cartesian product (also called a CROSS JOIN). Given table A with 4 rows and table B with 4 rows, their Cartesian product pairs every row of table A with every single row of table B, yielding 16 total row combinations. While raw Cartesian products are rarely useful alone, they form the universe of combinations from which meaningful joins filter data.',
        bn: 'রিলেশনাল বীজগণিতের মূলে ২টি পৃথক টেবিলকে সংযুক্ত করার যাত্রা শুরু হয় কার্টেসিয়ান প্রোডাক্ট (বা CROSS JOIN) দিয়ে। ধরি টেবিল A-তে ৪টি সারি এবং টেবিল B-তে ৪টি সারি রয়েছে, তবে তাদের কার্টেসিয়ান প্রোডাক্ট টেবিল A-এর প্রতিটি সারিকে টেবিল B-এর প্রতিটি সারির সাথে জোড়া লাগিয়ে মোট ১৬টি সমন্বয় তৈরি করে। সরাসরি কার্টেসিয়ান প্রোডাক্ট খুব কমই কার্যকর হলেও, এটিই সেই ভিত্তি যেখান থেকে জয়েন শর্ত প্রয়োগ করে দরকারী ডাটা ফিল্টার করা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A relational join applies a conditional boolean predicate (the ON clause) to this combination space. In the vast majority of real-world enterprise queries, joins are equi-joins: they test equality between a primary key in a parent table and a foreign key in a child table (such as ON users.id = orders.user_id). How the database handles non-matching rows determines whether the query executes as an Inner Join or an Outer Join.',
        bn: 'একটি রিলেশনাল জয়েন এই সমন্বিত সেটের ওপর একটি শর্তযুক্ত বুলিয়ান প্রেডিকেট (ON ক্লজ) প্রয়োগ করে। বাস্তব জীবনের অধিকাংশ কোয়েরিতে জয়েনগুলো মূলত ইকুই-জয়েন (equi-join) হিসেবে কাজ করে: যা প্যারেন্ট টেবিলের প্রাইমারি কি এবং চাইল্ড টেবিলের ফরেন কি-এর মধ্যকার সমতা পরীক্ষা করে (যেমন ON users.id = orders.user_id)। যে সারিগুলোতে মিল পাওয়া যায় না সেগুলোকে ডাটাবেস কীভাবে পরিচালনা করবে তার ওপর ভিত্তি করেই নির্ধারিত হয় কোয়েরিটি ইনার নাকি আউটার জয়েন হবে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Set Theory Visualized: The Four Primary Relational Join Types',
        bn: 'সেট তত্ত্বের চিত্রায়ন: চারটি প্রধান রিলেশনাল জয়েন প্রকারভেদ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Visualizing INNER, LEFT, RIGHT, and FULL OUTER joins">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- 1. INNER JOIN (Top-Left) -->
  <g transform="translate(40, 25)">
    <rect width="310" height="135" rx="8" fill="#1e293b" stroke="#334155" />
    <text x="155" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">1. INNER JOIN (Intersection Only)</text>
    <circle cx="120" cy="75" r="38" fill="#334155" opacity="0.6" />
    <circle cx="190" cy="75" r="38" fill="#334155" opacity="0.6" />
    <!-- Overlap -->
    <path d="M 155 45 A 38 38 0 0 1 155 105 A 38 38 0 0 1 155 45" fill="#0284c7" />
    <text x="155" y="79" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Matches</text>
    <text x="155" y="125" fill="#94a3b8" font-size="10" text-anchor="middle">Discards unmatched rows from both tables</text>
  </g>

  <!-- 2. LEFT OUTER JOIN (Top-Right) -->
  <g transform="translate(390, 25)">
    <rect width="310" height="135" rx="8" fill="#1e293b" stroke="#334155" />
    <text x="155" y="24" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. LEFT JOIN (All Left + Matches)</text>
    <circle cx="120" cy="75" r="38" fill="#059669" />
    <circle cx="190" cy="75" r="38" fill="#334155" opacity="0.6" />
    <path d="M 155 45 A 38 38 0 0 1 155 105 A 38 38 0 0 1 155 45" fill="#10b981" />
    <text x="110" y="79" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Left All</text>
    <text x="155" y="125" fill="#94a3b8" font-size="10" text-anchor="middle">Missing right columns populated with NULL</text>
  </g>

  <!-- 3. RIGHT OUTER JOIN (Bottom-Left) -->
  <g transform="translate(40, 175)">
    <rect width="310" height="135" rx="8" fill="#1e293b" stroke="#334155" />
    <text x="155" y="24" fill="#fbbf24" font-size="12" font-weight="bold" text-anchor="middle">3. RIGHT JOIN (All Right + Matches)</text>
    <circle cx="120" cy="75" r="38" fill="#334155" opacity="0.6" />
    <circle cx="190" cy="75" r="38" fill="#d97706" />
    <path d="M 155 45 A 38 38 0 0 1 155 105 A 38 38 0 0 1 155 45" fill="#f59e0b" />
    <text x="200" y="79" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Right All</text>
    <text x="155" y="125" fill="#94a3b8" font-size="10" text-anchor="middle">Missing left columns populated with NULL</text>
  </g>

  <!-- 4. FULL OUTER JOIN (Bottom-Right) -->
  <g transform="translate(390, 175)">
    <rect width="310" height="135" rx="8" fill="#1e293b" stroke="#334155" />
    <text x="155" y="24" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">4. FULL OUTER JOIN (Union of Both)</text>
    <circle cx="120" cy="75" r="38" fill="#7c3aed" />
    <circle cx="190" cy="75" r="38" fill="#9333ea" />
    <path d="M 155 45 A 38 38 0 0 1 155 105 A 38 38 0 0 1 155 45" fill="#a855f7" />
    <text x="155" y="79" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Preserve All</text>
    <text x="155" y="125" fill="#94a3b8" font-size="10" text-anchor="middle">Preserves all rows from both tables</text>
  </g>
</svg>`,
      caption: {
        en: 'The four fundamental SQL join operations modeled as set intersections: Inner, Left Outer, Right Outer, and Full Outer.',
        bn: 'সেট ইন্টারসেকশন হিসেবে ৪টি মৌলিক SQL জয়েন অপারেশন: ইনার, লেফট আউটার, রাইট আউটার এবং ফুল আউটার জয়েন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'INNER JOIN',
          def: {
            en: 'A join operation returning only rows where the join predicate evaluates to true for records in both participating tables.',
            bn: 'একটি জয়েন অপারেশন যা কেবল সেই রেকর্ডগুলো রিটার্ন করে যেখানে উভয় টেবিলেই শর্তটি সত্য বলে প্রমাণিত হয়।'
          }
        },
        {
          term: 'LEFT OUTER JOIN',
          def: {
            en: 'A join operation preserving all rows from the left table, populating right-table columns with NULL whenever no match exists.',
            bn: 'একটি জয়েন অপারেশন যা বাম টেবিলের সকল সারি বজায় রাখে এবং ডান টেবিলে মিল না থাকলে ডান কলামগুলোতে NULL বসায়।'
          }
        },
        {
          term: 'FULL OUTER JOIN',
          def: {
            en: 'A join operation preserving all rows from both tables, returning matching pairs and filling missing values from either side with NULL.',
            bn: 'একটি জয়েন অপারেশন যা উভয় টেবিলের সকল রেকর্ড সংরক্ষণ করে, মিল থাকা ডাটা জোড়া লাগায় এবং অনুপস্থিত মানের জন্য NULL বসায়।'
          }
        },
        {
          term: 'Hash Join',
          def: {
            en: 'An internal query execution algorithm that builds an in-memory hash table of the smaller relation to match records in O(M + N) time.',
            bn: 'একটি অভ্যন্তরীণ ডাটাবেস অ্যালগরিদম যা ছোট টেবিল দিয়ে মেমরিতে হ্যাশ টেবিল বানিয়ে O(M + N) সময়ে দ্রুত রেকর্ড মেলায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'physical-join-algorithms',
      text: {
        en: 'Under the Hood: How the Database Engine Executes Joins',
        bn: 'ভেতরের খবর: ডাটাবেস ইঞ্জিন কীভাবে জয়েন চালায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Declarative SQL hides immense algorithmic complexity. When an engineer writes SELECT ... JOIN, the query planner chooses among three physical join algorithms based on table statistics, available RAM, and existing indexes. The simplest is the Nested Loop Join: for every row in the outer table, scan the inner table. If the inner table has an index on the join column, lookup cost is low, making it ideal for small row counts.',
        bn: 'ডিক্লারেটিভ SQL স্টেটমেন্টের আড়ালে থাকে গভীর অ্যালগরিদমিক জটিলতা। যখন কোনো প্রকৌশলী SELECT ... JOIN লেখেন, তখন কোয়েরি প্ল্যানার টেবিল পরিসংখ্যান, মেমরি ও বিদ্যমান ইনডেক্স দেখে ৩টি ফিজিক্যাল জয়েন অ্যালগরিদমের একটি বেছে নেয়। সবচেয়ে সহজ পদ্ধতি হলো নেস্টেড লুপ জয়েন (Nested Loop Join): বাইরের টেবিলের প্রতি রো-এর জন্য ভেতরের টেবিল স্ক্যান করা। ভেতরের টেবিলে ইনডেক্স থাকলে লুকআপ দ্রুত হয়, যা ছোট ডাটার জন্য চমৎকার।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For large unindexed tables, database engines deploy a Hash Join. The engine loads the smaller table into memory and indexes its join keys in a hash map. It then streams the larger table, probing the hash map in linear O(M + N) time. Alternatively, when both relations are already sorted by clustered indexes, the query engine switches to a Merge Sort Join. It zips through both tables in parallel, matching records in lockstep with minimal memory consumption.',
        bn: 'ইনডেক্সহীন বিশাল টেবিলের ক্ষেত্রে ডাটাবেস ইঞ্জিন হ্যাশ জয়েন (Hash Join) ব্যবহার করে। ইঞ্জিন ছোট টেবিলটি মেমরিতে নিয়ে জয়েন কি দিয়ে একটি হ্যাশ ম্যাপ বানায়। তারপর বড় টেবিলটি স্ট্রিম করে O(M + N) সময়ে দ্রুত মিল খুঁজে বের করে। অন্যদিকে উভয় টেবিল যদি ক্লাস্টার্ড ইনডেক্স দিয়ে আগে থেকেই সাজানো থাকে, তবে ইঞ্জিন মার্জ সর্ট জয়েন (Merge Sort Join) চালায়। এটি জিপারের মতো সমান্তরালে এগিয়ে কোনো অতিরিক্ত মেমরি ছাড়াই দ্রুত ডাটা মেলায়।'
      }
    },
    {
      type: 'heading',
      id: 'node-join-engine',
      text: {
        en: 'Executable Join Engine: Inner, Left & Full Outer Join Logic',
        bn: 'রানযোগ্য জয়েন ইঞ্জিন: ইনার, লেফট ও ফুল আউটার জয়েন লজিক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation of a relational join engine. It evaluates 4 user entities against 4 order entities, executes an INNER JOIN, a LEFT OUTER JOIN (identifying non-buyers), and a FULL OUTER JOIN (capturing both non-buyers and orphaned orders).',
        bn: 'নিচে একটি রিলেশনাল জয়েন ইঞ্জিনের সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি ৪টি ইউজার এন্টিটি এবং ৪টি অর্ডার এন্টিটির ওপর কাজ করে, একটি INNER JOIN, একটি LEFT OUTER JOIN (ক্রেতাহীন ইউজার শনাক্তকরণ) এবং একটি FULL OUTER JOIN (উভয় পাশের অমিল ডাটা সংরক্ষণ) পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Execute INNER, LEFT, and FULL OUTER joins over 4 users and 4 orders',
        bn: '৪ জন ইউজার ও ৪টি অর্ডারের ওপর INNER, LEFT এবং FULL OUTER জয়েন পরিচালনা'
      },
      code: `// Relational Join Simulation over Users and Orders
const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 3, name: 'Charlie' },
  { id: 4, name: 'Diana' } // Has no orders
];

const orders = [
  { id: 101, userId: 1, total: 50 },
  { id: 102, userId: 1, total: 25 },
  { id: 103, userId: 2, total: 120 },
  { id: 104, userId: 99, total: 80 } // Orphaned order (user does not exist)
];

// ==========================================
// 1. INNER JOIN: Intersection of both tables
// ==========================================
const innerResults = [];
users.forEach(u => {
  orders.filter(o => o.userId === u.id).forEach(o => {
    innerResults.push({ userName: u.name, orderId: o.id, amount: o.total });
  });
});

// ==========================================
// 2. LEFT OUTER JOIN: All users + matching orders
// ==========================================
const leftResults = [];
users.forEach(u => {
  const matchedOrders = orders.filter(o => o.userId === u.id);
  if (matchedOrders.length === 0) {
    leftResults.push({ userName: u.name, orderId: null, amount: null });
  } else {
    matchedOrders.forEach(o => {
      leftResults.push({ userName: u.name, orderId: o.id, amount: o.total });
    });
  }
});

// Filter non-buyers using: WHERE orders.id IS NULL
const nonBuyers = leftResults.filter(r => r.orderId === null).map(r => r.userName);

// ==========================================
// 3. FULL OUTER JOIN: All users + all orders
// ==========================================
const fullResults = [...leftResults];
orders.forEach(o => {
  const userExists = users.some(u => u.id === o.userId);
  if (!userExists) {
    fullResults.push({ userName: null, orderId: o.id, amount: o.total });
  }
});

console.log(\`[Join Engine] Evaluated 4 users and 4 orders.\`);
console.log(\`[INNER JOIN] Produced \${innerResults.length} matched records (discarded unmatched users and orphaned orders).\`);
console.log(\`[LEFT JOIN] Produced \${leftResults.length} records: identified non-buyers '\${nonBuyers.join(\x27, \x27)}' with NULL orders.\`);
console.log(\`[FULL OUTER JOIN] Produced \${fullResults.length} records: preserved both unmatched users and orphaned orders.\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Anti-Join Pattern: Finding Non-Buyers in SQL',
        bn: 'অ্যান্টি-জয়েন প্যাটার্ন: SQL-এ ক্রেতাহীন ইউজার খুঁজে বের করার কৌশল'
      },
      text: {
        en: 'To isolate rows in Table A lacking matches in Table B, use a LEFT JOIN with a NULL filter: SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id WHERE orders.id IS NULL. Modern query planners transform this pattern into an Anti-Join. The engine stops scanning the child table the moment it encounters the first match.',
        bn: 'টেবিল A-এর যেসব রেকর্ডের টেবিল B-তে কোনো মিল নেই তাদের ফিল্টার করতে NULL শর্ত সহ LEFT JOIN ব্যবহার করুন: SELECT * FROM users LEFT JOIN orders ON users.id = orders.user_id WHERE orders.id IS NULL। আধুনিক অপ্টিমাইজার এটিকে অ্যান্টি-জয়েনে রূপান্তর করে প্রথম মিল পাওয়ার সাথে সাথেই চাইল্ড টেবিল স্ক্যান থামিয়ে দেয়।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Interactive SQL Join Evaluator',
        bn: 'ইন্টারেক্টিভ SQL জয়েন মূল্যায়নকারী'
      },
      description: {
        en: 'Run join logic: observe how an INNER JOIN drops unmatched records while a LEFT JOIN retains them with NULL values.',
        bn: 'জয়েন লজিক পরিচালনা করুন: INNER JOIN কীভাবে অমিল ডাটা বাদ দেয় এবং LEFT JOIN কীভাবে NULL দিয়ে তাদের ধরে রাখে তা দেখুন।'
      },
      code: `const customers = [{ id: 1, name: 'Tariq' }, { id: 2, name: 'Sami' }];
const sales = [{ id: 501, cust_id: 1, amount: 200 }];

// Inner Join logic
const innerCount = customers.filter(c => sales.some(s => s.cust_id === c.id)).length;
console.log('INNER JOIN matched customers:', innerCount);

// Left Join logic (preserves all customers)
const leftCount = customers.length;
console.log('LEFT JOIN preserved customers: ', leftCount);`,
      tests: [
        {
          name: {
            en: 'Inner join matches 1 paying customer',
            bn: 'ইনার জয়েন ১ জন অর্থপ্রদানকারী গ্রাহক মেলায়'
          },
          expected: 'INNER JOIN matched customers: 1'
        },
        {
          name: {
            en: 'Left join preserves all 2 customers',
            bn: 'লেফট জয়েন সকল ২ জন গ্রাহককেই সংরক্ষণ করে'
          },
          expected: 'LEFT JOIN preserved customers:  2'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-jn-ex-1',
      kind: 'mcq',
      topic: 'inner-vs-left-join-difference',
      question: {
        en: 'What happens to a customer record in a query when using an INNER JOIN versus a LEFT JOIN if that customer has never placed any orders?',
        bn: 'একজন গ্রাহক যদি কখনোই কোনো অর্ডার না করে থাকেন, তবে INNER JOIN বনাম LEFT JOIN ব্যবহারের ক্ষেত্রে সেই গ্রাহকের রেকর্ডের কী পরিণতি হয়?'
      },
      options: [
        {
          en: 'INNER JOIN discards the customer from the result set; LEFT JOIN includes the customer with NULL for all order columns',
          bn: 'INNER JOIN গ্রাহকের রেকর্ড ফলাফল থেকে সম্পূর্ণ বাদ দিয়ে দেয়; আর LEFT JOIN গ্রাহককে ফলাফলে রাখে এবং অর্ডারের কলামগুলোতে NULL বসায়'
        },
        {
          en: 'INNER JOIN deletes the customer from the database completely',
          bn: 'INNER JOIN ডাটাবেস থেকে গ্রাহককে সম্পূর্ণ মুছে ফেলে'
        },
        {
          en: 'LEFT JOIN automatically creates a fake 0 dollar order for the customer',
          bn: 'LEFT JOIN স্বয়ংক্রিয়ভাবে গ্রাহকের জন্য ০ টাকার একটি ভুয়া অর্ডার তৈরি করে দেয়'
        },
        {
          en: 'Both joins produce identical results regardless of order history',
          bn: 'অর্ডার হিস্ট্রি যাই হোক না কেন উভয় জয়েনই হুবহু একই ফলাফল দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'INNER requires matches on both sides; LEFT preserves the entire left table.',
        bn: 'INNER উভয় পাশেই মিল থাকা বাধ্যতামূলক করে; আর LEFT সম্পূর্ণ বাম টেবিল বজায় রাখে।'
      },
      explanation: {
        en: 'An INNER JOIN filters out any row where the join predicate fails. A LEFT JOIN guarantees that every row from the left table appears in the output, filling missing right-side attributes with NULL.',
        bn: 'INNER JOIN এমন যেকোনো রো বাদ দিয়ে দেয় যেখানে শর্ত মেলে না। অন্যদিকে LEFT JOIN নিশ্চিত করে যে বাম টেবিলের প্রতিটি রো ফলাফলে থাকবে এবং ডান পাশের অনুপস্থিত মানের জায়গায় NULL বসিয়ে দেবে।'
      }
    },
    {
      id: 'db-jn-ex-2',
      kind: 'mcq',
      topic: 'anti-join-null-check-pattern',
      question: {
        en: 'How does an engineer write a SQL query to retrieve all users who have never placed an order?',
        bn: 'যেসব ব্যবহারকারী কখনোই কোনো অর্ডার করেননি তাদের খুঁজে বের করতে একজন ইঞ্জিনিয়ার কীভাবে SQL কোয়েরি লিখবেন?'
      },
      options: [
        {
          en: 'SELECT users.* FROM users LEFT JOIN orders ON users.id = orders.user_id WHERE orders.id IS NULL',
          bn: 'SELECT users.* FROM users LEFT JOIN orders ON users.id = orders.user_id WHERE orders.id IS NULL'
        },
        {
          en: 'SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id',
          bn: 'SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id'
        },
        {
          en: 'SELECT * FROM users CROSS JOIN orders',
          bn: 'SELECT * FROM users CROSS JOIN orders'
        },
        {
          en: 'DELETE FROM users WHERE orders = 0',
          bn: 'DELETE FROM users WHERE orders = 0'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use a LEFT JOIN to bring in orders, then filter where the order primary key is NULL.',
        bn: 'অর্ডার আনার জন্য LEFT JOIN ব্যবহার করুন, তারপর অর্ডারের প্রাইমারি কি যেখানে NULL তা ফিল্টার করুন।'
      },
      explanation: {
        en: 'This classic pattern is known as an Anti-Join. The LEFT JOIN pairs non-buyers with NULL order records, and the WHERE orders.id IS NULL clause isolates exactly those users who have zero matching orders.',
        bn: 'এই বিখ্যাত কৌশলটিকে অ্যান্টি-জয়েন বলা হয়। LEFT JOIN ক্রেতাহীন ইউজারের বিপরীতে NULL বসায়, এবং WHERE orders.id IS NULL ক্লজটি ঠিক সেইসব ইউজারদের আলাদা করে যাদের কোনো অর্ডার নেই।'
      }
    },
    {
      id: 'db-jn-ex-3',
      kind: 'mcq',
      topic: 'cartesian-product-size-calculation',
      question: {
        en: 'If Table A contains 100 rows and Table B contains 200 rows, how many rows are produced by a CROSS JOIN with no WHERE clause?',
        bn: 'যদি টেবিল A-তে ১০০টি সারি এবং টেবিল B-তে ২০০টি সারি থাকে, তবে কোনো WHERE ক্লজ ছাড়া CROSS JOIN চালালে মোট কতটি সারি তৈরি হবে?'
      },
      options: [
        {
          en: '20,000 rows (100 multiplied by 200)',
          bn: '২০,০০০ সারি (১০০ গুণ ২০০)'
        },
        {
          en: '300 rows (100 plus 200)',
          bn: '৩০০ সারি (১০০ যোগ ২০০)'
        },
        {
          en: '100 rows',
          bn: '১০০ সারি'
        },
        {
          en: '0 rows',
          bn: '০ সারি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Cartesian product multiplies table cardinalities together.',
        bn: 'কার্টেসিয়ান প্রোডাক্ট টেবিলগুলোর রো সংখ্যাকে পরস্পরের সাথে গুণ করে।'
      },
      explanation: {
        en: 'A CROSS JOIN produces the Cartesian product: every single row of Table A is paired with every row of Table B. 100 rows multiplied by 200 rows results in exactly 20,000 rows.',
        bn: 'CROSS JOIN কার্টেসিয়ান প্রোডাক্ট তৈরি করে: টেবিল A-এর প্রতিটি সারি টেবিল B-এর প্রতিটি সারির সাথে জোড়া বাঁধে। ১০০ গুণ ২০০ হিসাব করলে ঠিক ২০,০০০ সারি তৈরি হয়।'
      }
    },
    {
      id: 'db-jn-ex-4',
      kind: 'mcq',
      topic: 'hash-join-execution-strategy',
      question: {
        en: 'How does an RDBMS engine execute an in-memory Hash Join between two tables?',
        bn: 'একটি RDBMS ইঞ্জিন কীভাবে দুটি টেবিলের মধ্যে মেমরিতে হ্যাশ জয়েন (Hash Join) পরিচালনা করে?'
      },
      options: [
        {
          en: 'It builds an in-memory hash table on the join key of the smaller relation, then streams the larger table and probes the hash table in O(M + N) time',
          bn: 'এটি ছোট টেবিলের জয়েন কি দিয়ে মেমরিতে একটি হ্যাশ টেবিল তৈরি করে, তারপর বড় টেবিলটি স্ট্রিম করে O(M + N) সময়ে দ্রুত মিল খুঁজে বের করে'
        },
        {
          en: 'It hashes all table data using SHA-256 and encrypts the hard drive',
          bn: 'এটি SHA-২৫৬ দিয়ে সমস্ত ডাটা হ্যাশ করে হার্ডড্রাইভ এনক্রিপ্ট করে ফেলে'
        },
        {
          en: 'It converts all text columns into MD5 password hashes',
          bn: 'এটি সকল টেক্সট কলামকে MD5 পাসওয়ার্ড হ্যাশে রূপান্তরিত করে'
        },
        {
          en: 'It sorts both tables alphabetically in reverse order',
          bn: 'এটি উভয় টেবিলকে উল্টো বর্ণানুক্রমে সাজিয়ে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Build phase creates the hash table; probe phase streams the second table.',
        bn: 'বিল্ড ধাপে হ্যাশ টেবিল তৈরি হয়; আর প্রোব ধাপে দ্বিতীয় টেবিলটি স্ক্যান করা হয়।'
      },
      explanation: {
        en: 'A Hash Join consists of two phases: the Build Phase (hashing the smaller table into RAM) and the Probe Phase (streaming the larger table and checking hash buckets). This achieves linear O(M + N) performance without requiring pre-sorted data.',
        bn: 'একটি হ্যাশ জয়েনের দুটি ধাপ থাকে: বিল্ড ফেজ (ছোট টেবিলটিকে মেমরিতে হ্যাশ করা) এবং প্রোব ফেজ (বড় টেবিলটি স্ক্যান করে হ্যাশ বাকেটের সাথে মেলানো)। এটি কোনো সর্টিং ছাড়াই লিনিয়ার O(M + N) গতি নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'joins-and-the-join-quiz',
    title: {
      en: 'Relational Joins Quiz',
      bn: 'রিলেশনাল জয়েন কুইজ'
    },
    questions: [
      {
        id: 'db-jn-qz-1',
        kind: 'mcq',
        topic: 'full-outer-join-guarantee',
        question: {
          en: 'What fundamental guarantee does a FULL OUTER JOIN provide regarding records from both participating tables?',
          bn: 'অংশগ্রহণকারী উভয় টেবিলের রেকর্ডের ক্ষেত্রে একটি FULL OUTER JOIN কোন মৌলিক নিশ্চয়তা প্রদান করে?'
        },
        options: [
          {
            en: 'It preserves all rows from both tables, returning matched pairs where available and populating missing columns with NULL from either side',
            bn: 'এটি উভয় টেবিলের সকল সারি সংরক্ষণ করে, মিল থাকা ডাটা জোড়া লাগায় এবং যেকোনো পাশের অনুপস্থিত মানের জন্য NULL বসায়'
          },
          {
            en: 'It guarantees that only rows present in both tables are ever returned',
            bn: 'এটি নিশ্চয়তা দেয় যে কেবল উভয় টেবিলে বিদ্যমান সারিগুলোই ফেরত আসবে'
          },
          {
            en: 'It automatically deletes duplicate customer accounts',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ডুপ্লিকেট গ্রাহক অ্যাকাউন্ট মুছে ফেলে'
          },
          {
            en: 'It formats all table output as an HTML webpage table',
            bn: 'এটি টেবিলের সমস্ত আউটপুটকে HTML ওয়েবপেজ টেবিলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'FULL OUTER JOIN combines the results of both LEFT and RIGHT outer joins.',
          bn: 'FULL OUTER JOIN মূলত LEFT এবং RIGHT আউটার জয়েনের ফলাফলের সমন্বয়।'
        },
        explanation: {
          en: 'A FULL OUTER JOIN retains all data from both relations. If user A has no orders, their orders columns are NULL. If order 99 has no user, its user columns are NULL. Matched records are joined seamlessly.',
          bn: 'FULL OUTER JOIN উভয় টেবিলের সমস্ত তথ্য ধরে রাখে। গ্রাহকের কোনো অর্ডার না থাকলে অর্ডারের কলামে NULL বসে। আবার অর্ডারের কোনো গ্রাহক না থাকলে গ্রাহকের কলামে NULL বসে। আর মিল থাকা রেকর্ডগুলো স্বাভাবিকভাবে জোড়া বাঁধে।'
        }
      },
      {
        id: 'db-jn-qz-2',
        kind: 'mcq',
        topic: 'right-join-industry-convention',
        question: {
          en: 'Why do seasoned database engineers rarely use RIGHT OUTER JOIN in production SQL queries?',
          bn: 'অভিজ্ঞ ডাটাবেস ইঞ্জিনিয়াররা প্রোডাকশন SQL কোয়েরিতে কেন সচরাচর RIGHT OUTER JOIN ব্যবহার করেন না?'
        },
        options: [
          {
            en: 'Because any RIGHT JOIN can be written as a LEFT JOIN simply by swapping table order, and consistent LEFT JOINs make complex multi-table queries vastly easier to read',
            bn: 'কারণ টেবিলের ক্রম বদলে যেকোনো RIGHT JOIN-কে খুব সহজেই LEFT JOIN হিসেবে লেখা যায়, এবং ধারাবাহিক LEFT JOIN বড় কোয়েরি পড়া অনেক সহজ করে দেয়'
          },
          {
            en: 'Because RIGHT JOIN was deprecated and removed from SQL in 1999',
            bn: 'কারণ ১৯৯৯ সালে SQL থেকে RIGHT JOIN বাতিল ও নিষিদ্ধ করা হয়েছে'
          },
          {
            en: 'Because RIGHT JOIN consumes 4 times more server electricity',
            bn: 'কারণ RIGHT JOIN সার্ভারের ৪ গুণ বেশি বিদ্যুৎ খরচ করে'
          },
          {
            en: 'Because RIGHT JOIN only works on databases hosted in Australia',
            bn: 'কারণ RIGHT JOIN শুধুমাত্র অস্ট্রেলিয়ায় হোস্ট করা ডাটাবেসে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Code readability and mental modeling: reading from left to right is standard.',
          bn: 'কোড পাঠযোগ্যতা: বাম থেকে ডানে সম্পর্ক চিন্তা করাই শিল্পের স্ট্যান্ডার্ড।'
        },
        explanation: {
          en: 'A RIGHT JOIN is the mirror image of a LEFT JOIN. By convention, developers standardize on LEFT JOINs because reading queries from primary driver table to dependent satellite tables matches natural reading flow.',
          bn: 'RIGHT JOIN হলো LEFT JOIN-এর একটি প্রতিচ্ছবি মাত্র। কনভেনশন অনুযায়ী ডেভেলপাররা সর্বদা LEFT JOIN পছন্দ করেন কারণ মূল ড্রাইভার টেবিল থেকে শুরু করে ডানদিকের টেবিলগুলোতে যাওয়া মানুষের স্বাভাবিক পড়ার অভ্যাসের সাথে মিলে যায়।'
        }
      },
      {
        id: 'db-jn-qz-3',
        kind: 'mcq',
        topic: 'merge-sort-join-prerequisite',
        question: {
          en: 'What structural prerequisite allows a database query planner to choose a blistering-fast Merge Sort Join?',
          bn: 'কোন কাঠামোগত পূর্বশর্ত থাকলে ডাটাবেস কোয়েরি প্ল্যানার একটি অত্যন্ত দ্রুতগতির মার্জ সর্ট জয়েন (Merge Sort Join) বেছে নিতে পারে?'
        },
        options: [
          {
            en: 'Both tables are already physically sorted on their join key columns (e.g. via clustered B-Tree indexes)',
            bn: 'উভয় টেবিল তাদের জয়েন কি কলাম অনুসারে আগে থেকেই ভৌতভাবে সাজানো (যেমন ক্লাস্টার্ড বি-ট্রি ইনডেক্সের মাধ্যমে)'
          },
          {
            en: 'The database server must have at least 1 terabyte of memory',
            bn: 'ডাটাবেস সার্ভারে কমপক্ষে ১ টেরাবাইট র‍্যাম থাকতে হবে'
          },
          {
            en: 'The tables must contain zero NULL values anywhere in the schema',
            bn: 'টেবিলের স্কিমার কোথাও কোনো NULL মান থাকা যাবে না'
          },
          {
            en: 'All table columns must use the VARCHAR data type',
            bn: 'সকল টেবিল কলামে অবশ্যই VARCHAR ডাটা টাইপ ব্যবহার করতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Merge Sort Join advances through both lists in parallel like two sorted decks of cards.',
          bn: 'মার্জ সর্ট জয়েন দুটি সাজানো তাসের প্যাকেটের মতো সমান্তরালে এগিয়ে চলে।'
        },
        explanation: {
          en: 'A Merge Sort Join works by advancing pointers through both relations simultaneously. If the inputs are already sorted by clustered indexes, the engine avoids the expensive sorting phase, executing with near-zero memory overhead.',
          bn: 'মার্জ সর্ট জয়েন উভয় টেবিলে একসাথে পয়েন্টার এগিয়ে নিয়ে কাজ করে। ইনপুটগুলো যদি ক্লাস্টার্ড ইনডেক্স দিয়ে আগে থেকেই সাজানো থাকে, তবে কোনো অতিরিক্ত সর্টিং বা মেমরি খরচ ছাড়াই এটি চোখের পলকে সম্পন্ন হয়।'
        }
      },
      {
        id: 'db-jn-qz-4',
        kind: 'mcq',
        topic: 'null-safety-in-join-predicates',
        question: {
          en: 'In SQL three-valued logic, what is the result of evaluating NULL = NULL in a join predicate?',
          bn: 'SQL-এর তিন-মান বিশিষ্ট লজিকে জয়েন প্রেডিকেটে NULL = NULL পরীক্ষা করলে কী ফলাফল আসে?'
        },
        options: [
          {
            en: 'UNKNOWN (which evaluates as false in a join predicate, so two rows with NULL keys never join)',
            bn: 'UNKNOWN (যা জয়েন প্রেডিকেটে false হিসেবে গণ্য হয়, ফলে দুটি রো-এর মান NULL হলেও তারা কখনোই জোড়া বাঁধে না)'
          },
          {
            en: 'TRUE (rows with NULL keys always match and join)',
            bn: 'TRUE (NULL মান থাকা রোগুলো সর্বদা মিলে যায় এবং জোড়া বাঁধে)'
          },
          {
            en: 'FALSE immediately without checking any other condition',
            bn: 'অন্য কোনো শর্ত না দেখেই সরাসরি FALSE'
          },
          {
            en: 'The database throws a syntax error and aborts the query',
            bn: 'ডাটাবেস সিনট্যাক্স এরর দেয় এবং কোয়েরি বাতিল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In SQL, NULL represents an unknown value; unknown never equals unknown.',
          bn: 'SQL-এ NULL হলো একটি অজানা মান; একটি অজানা মান কখনোই অন্য অজানা মানের সমান হতে পারে না।'
        },
        explanation: {
          en: 'SQL uses three-valued logic (TRUE, FALSE, UNKNOWN). Comparing NULL to anything—including another NULL—evaluates to UNKNOWN. Because join predicates require TRUE to emit a row, two NULL keys will never match.',
          bn: 'SQL ৩টি মান বিশিষ্ট লজিক ব্যবহার করে (TRUE, FALSE, UNKNOWN)। NULL এর সাথে যেকোনো কিছুর তুলনা—এমনকি আরেকটি NULL-ও—UNKNOWN ফলাফল দেয়। জয়েন প্রেডিকেট রো তৈরি করতে TRUE দাবি করে, তাই ২টি NULL কি কখনোই মিলবে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'norms-and-the-form',
    title: {
      en: 'Database Normalization: 1NF, 2NF, 3NF & Anomalies',
      bn: 'ডাটাবেস নরমালাইজেশন: 1NF, 2NF, 3NF ও অ্যানোমালি'
    }
  }
};
