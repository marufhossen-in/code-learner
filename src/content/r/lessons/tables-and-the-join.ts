import type { Lesson } from '../../../lib/types';

export const TablesAndTheJoinLesson: Lesson = {
  slug: 'tables-and-the-join',
  tech: 'r',
  title: {
    en: 'Relational Joins & data.table: High-Performance In-Memory Analytics',
    bn: 'রিলেশনাল জয়েন ও data.table: উচ্চগতির ইন-মেমরি ডাটা অ্যানালিটিক্স'
  },
  summary: {
    en: 'Master relational data joins and high-performance in-memory processing in R: mutating joins (inner, left, right, full), filtering joins (semi, anti), fast I/O with fread/fwrite, and data.table syntax DT[i, j, by].',
    bn: 'R এ রিলেশনাল ডাটা জয়েন এবং উচ্চগতির ইন-মেমরি প্রসেসিংয়ে দক্ষতা: মিউটেটিং জয়েন (inner, left, right, full), ফিল্টারিং জয়েন (semi, anti), fread/fwrite দিয়ে দ্রুত I/O এবং data.table সিনট্যাক্স DT[i, j, by]।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'relational-joins',
      text: {
        en: '1. Relational Joins: Mutating vs Filtering Joins',
        bn: '১. রিলেশনাল জয়েন: মিউটেটিং বনাম ফিল্টারিং জয়েন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Real-world data science rarely lives in a single `CSV` file. Data is normalized across multiple relational tables connected by primary and foreign keys. In R, dplyr categorizes joins into 2 distinct groups:',
        bn: 'বাস্তব ক্ষেত্রে ডাটা সায়েন্সের তথ্য কেবল একটি একক `CSV` ফাইলে থাকে না। তথ্যগুলো প্রাইমারি ও ফরেন কি (keys) দিয়ে একাধিক রিলেশনাল টেবিলে বিভক্ত থাকে। R এ dplyr জয়েনগুলোকে ২টি প্রধান ভাগে ভাগ করে:'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Mutating joins merge columns from 2 tables based on common keys, while filtering joins use the second table solely to filter rows from the first table without altering its column structure:',
        bn: 'মিউটেটিং জয়েন সাধারণ কি এর ওপর ভিত্তি করে দুটি টেবিলের কলামগুলোকে একত্রিত করে, আর ফিল্টারিং জয়েন দ্বিতীয় টেবিলটিকে কেবল প্রথম টেবিলের সারি ছাঁকার জন্য ব্যবহার করে কোনো নতুন কলাম যোগ না করেই:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. left_join(x, y, by = "id"): Retains all rows from left table x, appending matching attributes from y or filling with NA.',
          bn: '১. left_join(x, y, by = "id"): বাম টেবিল x এর সমস্ত সারি অক্ষুণ্ণ রাখে এবং y থেকে মেলানো কলাম যোগ করে, অমিল স্থানে NA বসায়।'
        },
        {
          en: '2. inner_join(x, y, by = "id"): Retains only rows having matching keys in both tables.',
          bn: '২. inner_join(x, y, by = "id"): কেবল উভয় টেবিলেই উপস্থিত মিল থাকা কিযুক্ত সারিগুলোকে রাখে।'
        },
        {
          en: '3. semi_join(x, y, by = "id"): Keeps rows from x that have a match in y, without adding y columns or duplicating rows.',
          bn: '৩. semi_join(x, y, by = "id"): y এর সাথে মিল থাকা x এর সারিগুলোকে নির্বাচন করে, কোনো নতুন কলাম বা ডুপ্লিকেট তৈরি করে না।'
        },
        {
          en: '4. anti_join(x, y, by = "id"): Drops all rows in x that match keys in y, returning only orphaned or unmatched records.',
          bn: '৪. anti_join(x, y, by = "id"): y এর সাথে মিলে যাওয়া x এর تمام সারি বাদ দিয়ে কেবল অমিল বা এতিম রেকর্ডগুলোকে খুঁজে বের করে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'joins-and-datatable-diagram',
      title: {
        en: 'Relational Join Semantics & data.table DT[i, j, by] Syntax',
        bn: 'রিলেশনাল জয়েন সেমান্টিক্স এবং data.table এর DT[i, j, by] সিনট্যাক্স'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Relational Joins &amp; data.table In-Memory Architecture</text>' +
          '<!-- Column 1: Joins -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. RELATIONAL JOINS (dplyr)</text>' +
            '<rect x="15" y="45" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="10" font-weight="bold">left_join(users, orders, by = "id")</text>' +
            '<text x="25" y="88" fill="#cbd5e1" font-size="9">Keeps 100% of users; missing orders become NA</text>' +
            '<rect x="15" y="115" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="138" fill="#10b981" font-size="10" font-weight="bold">inner_join(users, orders, by = "id")</text>' +
            '<text x="25" y="158" fill="#cbd5e1" font-size="9">Intersection: only users who placed at least 1 order</text>' +
            '<rect x="15" y="185" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="208" fill="#f59e0b" font-size="10" font-weight="bold">semi_join(users, orders, by = "id")</text>' +
            '<text x="25" y="228" fill="#cbd5e1" font-size="9">Filters users; preserves original columns without duplicate rows</text>' +
            '<rect x="15" y="255" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="278" fill="#ef4444" font-size="10" font-weight="bold">anti_join(users, orders, by = "id")</text>' +
            '<text x="25" y="298" fill="#cbd5e1" font-size="9">Finds churned / non-purchasing users (orders key missing)</text>' +
          '</g>' +
          '<!-- Column 2: data.table DT[i, j, by] -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. data.table: DT[ i, j, by ]</text>' +
            '<rect x="15" y="45" width="330" height="90" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="70" fill="#facc15" font-size="13" font-weight="bold" font-family="monospace">DT[ i, j, by ]</text>' +
            '<text x="25" y="92" fill="#60a5fa" font-size="10">i  = Filter rows (WHERE in SQL)</text>' +
            '<text x="25" y="108" fill="#34d399" font-size="10">j  = Compute / Select columns (SELECT in SQL)</text>' +
            '<text x="25" y="124" fill="#fbbf24" font-size="10">by = Group observations (GROUP BY in SQL)</text>' +
            '<rect x="15" y="145" width="330" height="85" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="168" fill="#38bdf8" font-size="10" font-weight="bold">Modify In-Place (Zero Memory Copy):</text>' +
            '<text x="25" y="190" fill="#34d399" font-size="10" font-family="monospace">DT[, profit := revenue - cost]</text>' +
            '<text x="25" y="210" fill="#cbd5e1" font-size="9">&#x2022; Updates pointers in C memory; 0 bytes reallocated</text>' +
            '<rect x="15" y="240" width="330" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="262" fill="#fbbf24" font-size="10" font-weight="bold">Lightning Disk I/O with fread() / fwrite():</text>' +
            '<text x="25" y="282" fill="#cbd5e1" font-size="9">&#x2022; Multi-threaded C reader; loads 10GB CSV in 4s</text>' +
            '<text x="25" y="300" fill="#34d399" font-size="9">&#x2022; Up to 50x faster than base R read.csv()</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'datatable-power',
      text: {
        en: '2. The data.table Paradigm: In-Place Modification with :=',
        bn: '২. data.table এর গঠন: := দিয়ে ইন-প্লেস রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When datasets grow to tens of gigabytes and millions of rows, base data frames and standard workflows trigger massive memory bloat due to copy-on-modify semantics. The data.table package solves this with high-performance C pointers and the DT[i, j, by] query syntax.',
        bn: 'যখন ডাটা সেট কয়েক গিগাবাইট ও লক্ষাধিক সারির হয়, তখন কপি-অন-মডিফাই নিয়মের কারণে সাধারণ ডাটা ফ্রেমে র‍্যামের অপচয় ঘটে। data.table প্যাকেজটি উচ্চগতির C পয়েন্টার এবং DT[i, j, by] কোয়েরি সিনট্যাক্স দিয়ে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The assignment by reference operator (:=) modifies columns in-place without making a single copy of the entire table in RAM. Furthermore, fread() provides multi-threaded CSV parsing that loads gigabytes of data in seconds.',
        bn: 'রেফারেন্স অ্যাসাইনমেন্ট অপারেটর (:=) পুরো টেবিলের কোনো অনুলিপি তৈরি না করেই সরাসরি মেমরিতে কলাম পরিবর্তন করে। উপরন্তু, fread() মাল্টি-থ্রেডেড প্রসেসিংয়ের মাধ্যমে কয়েক সেকেন্ডে গিগাবাইট সাইজের CSV লোড করতে পারে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '3. Relational Joins & data.table Query Engine in TypeScript',
        bn: '৩. TypeScript এ রিলেশনাল জয়েন ও data.table কোয়েরি ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how relational joins (left_join, inner_join, anti_join) operate, along with simulating data.table\'s DT[i, j, by] in-place memory computation:',
        bn: 'নিচের TypeScript প্রোগ্রামটি রিলেশনাল জয়েন (left_join, inner_join, anti_join) এবং data.table এর DT[i, j, by] ইন-প্লেস মেমরি কোয়েরির কার্যপদ্ধতি প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of relational left_join, anti_join, and data.table DT[i, j, by] group aggregation.',
        bn: 'রিলেশনাল left_join, anti_join এবং data.table DT[i, j, by] গ্রুপ এগ্রিগেশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of R Relational Joins and data.table DT[i, j, by]

interface UserRow {
  userId: number;
  userName: string;
}

interface OrderRow {
  orderId: number;
  userId: number;
  amount: number;
}

// 1. Relational Joins Engine
function leftJoin(users: UserRow[], orders: OrderRow[]) {
  return users.map((u) => {
    const matchedOrders = orders.filter((o) => o.userId === u.userId);
    return {
      userId: u.userId,
      userName: u.userName,
      orders: matchedOrders.length > 0 ? matchedOrders : null
    };
  });
}

function antiJoin(users: UserRow[], orders: OrderRow[]) {
  // Returns users who have NO records in orders
  const orderUserIds = new Set(orders.map((o) => o.userId));
  return users.filter((u) => !orderUserIds.has(u.userId));
}

// 2. data.table DT[i, j, by] Engine
interface DTRecord {
  region: string;
  sales: number;
  cost: number;
  profit?: number;
}

class DataTable {
  public rows: DTRecord[];

  constructor(data: DTRecord[]) {
    this.rows = data;
  }

  // := operator: modify in-place by reference (0 copy)
  addProfitColumnInPlace(): DataTable {
    for (const r of this.rows) {
      r.profit = r.sales - r.cost;
    }
    return this;
  }

  // DT[i, j, by]: i (filter), j (aggregate), by (group)
  query(minSales: number) {
    // i: filter sales >= minSales
    const filtered = this.rows.filter((r) => r.sales >= minSales);

    // by: group by region
    const groups = new Map<string, DTRecord[]>();
    for (const r of filtered) {
      if (!groups.has(r.region)) {
        groups.set(r.region, []);
      }
      groups.get(r.region)!.push(r);
    }

    // j: compute sum(profit)
    const results: { region: string; totalProfit: number; count: number }[] = [];
    for (const [region, items] of groups.entries()) {
      const totProfit = items.reduce((sum, r) => sum + (r.profit || 0), 0);
      results.push({
        region,
        totalProfit: totProfit,
        count: items.length
      });
    }
    return results;
  }
}

// Demonstration
const users: UserRow[] = [
  { userId: 1, userName: 'Alice' },
  { userId: 2, userName: 'Bob' },
  { userId: 3, userName: 'Charlie' } // No orders
];

const orders: OrderRow[] = [
  { orderId: 101, userId: 1, amount: 250 },
  { orderId: 102, userId: 1, amount: 150 },
  { orderId: 103, userId: 2, amount: 400 }
];

// Execute Joins
const joined = leftJoin(users, orders);
console.log('Left join total users count: ' + joined.length); // -> 3

const orphanedUsers = antiJoin(users, orders);
console.log('Anti join orphaned users (no orders): ' + orphanedUsers.length); // -> 1
console.log('Orphan user name: ' + orphanedUsers[0].userName); // -> Charlie

// Execute data.table
const dt = new DataTable([
  { region: 'East', sales: 120, cost: 70 },
  { region: 'West', sales: 200, cost: 110 },
  { region: 'East', sales: 80, cost: 50 },
  { region: 'West', sales: 300, cost: 180 }
]);

// In-place := computation
dt.addProfitColumnInPlace();
console.log('First record in-place profit: ' + dt.rows[0].profit); // -> 50

// DT[sales >= 100, .(totProfit = sum(profit)), by = region]
const summary = dt.query(100);
console.log('Summarized regions count: ' + summary.length); // -> 2
for (const s of summary) {
  console.log('Region ' + s.region + ' profit: ' + s.totalProfit + ' (orders: ' + s.count + ')');
}`
    }
  ],
  exercises: [
    {
      id: 'table-ex-1',
      kind: 'mcq',
      question: {
        en: 'What is the primary operational difference between left_join() and anti_join() in dplyr?',
        bn: 'dplyr এ left_join() এবং anti_join() এর মধ্যে প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'left_join merges columns from both tables, while anti_join filters rows to find records in the first table with NO match in the second',
          bn: 'left_join উভয় টেবিলের কলাম যুক্ত করে, আর anti_join প্রথম টেবিলের যে রেকর্ডগুলোর দ্বিতীয় টেবিলে কোনো মিল নেই কেবল সেগুলোকে ছাঁকে'
        },
        {
          en: 'left_join only works on integer IDs, while anti_join only works on string names',
          bn: 'left_join কেবল ইন্টিজার আইডিতে কাজ করে, আর anti_join কেবল স্ট্রিং নামে কাজ করে'
        },
        {
          en: 'anti_join multiplies numbers by -1',
          bn: 'anti_join সমস্ত সংখ্যাকে -১ দিয়ে গুণ করে'
        },
        {
          en: 'left_join requires a remote PostgreSQL connection to run',
          bn: 'left_join চালানোর জন্য রিমোট PostgreSQL সংযোগ থাকা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Anti-join is a filtering join that finds unmatched orphaned records.',
        bn: 'অ্যান্টি-জয়েন একটি ফিল্টারিং জয়েন যা অমিল থাকা রেকর্ডগুলোকে শনাক্ত করে।'
      },
      explanation: {
        en: 'left_join is a mutating join adding columns from y to x. anti_join is a filtering join returning only rows in x that do not have a match in y.',
        bn: 'left_join নতুন কলাম যোগ করে, আর anti_join কেবল সেই সারিগুলো রাখে যাদের দ্বিতীয় টেবিলে কোনো মিল নেই।'
      }
    },
    {
      id: 'table-ex-2',
      kind: 'mcq',
      question: {
        en: 'In R data.table syntax DT[i, j, by], what role does the "j" slot represent?',
        bn: 'R data.table এর DT[i, j, by] সিনট্যাক্সে "j" স্লটটি কী ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'Specifies which columns to select, compute, or mutate (similar to SELECT in SQL)',
          bn: 'কোন কলামগুলো নির্বাচন, হিসাব বা রূপান্তর করা হবে তা নির্দিষ্ট করে (SQL এর SELECT এর মতো)'
        },
        {
          en: 'Specifies which rows to filter out (similar to WHERE in SQL)',
          bn: 'কোন সারিগুলো বাদ দেওয়া হবে তা নির্দিষ্ট করে (SQL এর WHERE এর মতো)'
        },
        {
          en: 'Sets the database JDBC driver port number',
          bn: 'ডাটাবেজের JDBC ড্রাইভার পোর্ট নম্বর নির্ধারণ করে'
        },
        {
          en: 'Specifies which CPU core to execute the job on',
          bn: 'কোন সিপিইউ কোরে কাজটি চলবে তা নির্ধারণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'i = WHERE (rows), j = SELECT (columns/calculations), by = GROUP BY.',
        bn: 'i = WHERE (সারি), j = SELECT (কলাম/হিসাব), by = GROUP BY।'
      },
      explanation: {
        en: 'In data.table syntax DT[i, j, by], i filters rows, j operates on columns (computing or selecting), and by designates grouping keys.',
        bn: 'data.table এ i সারি ফিল্টার করে, j কলাম নির্বাচন বা গণনা সম্পন্ন করে এবং by গ্রুপিং কি নির্দিষ্ট করে।'
      }
    },
    {
      id: 'table-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why is the := operator in data.table critical when transforming multi-gigabyte datasets?',
        bn: 'কয়েক গিগাবাইটের বিশাল ডাটা সেট রূপান্তরের ক্ষেত্রে data.table এর := অপারেটরটি কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'It modifies columns in-place by reference in C memory without copying the dataset in RAM',
          bn: 'এটি মেমরিতে ডাটার কোনো অনুলিপি তৈরি না করে সরাসরি C মেমরি রেফারেন্সে কলাম পরিবর্তন করে'
        },
        {
          en: 'It compresses the CSV file using gzip algorithms',
          bn: 'এটি gzip অ্যালগরিদম দিয়ে CSV ফাইল কম্প্রেস করে'
        },
        {
          en: 'It encrypts the entire dataframe using SHA-256',
          bn: 'এটি SHA-256 দিয়ে পুরো ডাটা ফ্রেমকে এনক্রিপ্ট করে'
        },
        {
          en: 'It automatically sends the data to an S3 bucket',
          bn: 'এটি নিজে থেকেই সমস্ত ডাটা S3 বাকেটে আপলোড করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Assignment by reference avoids expensive memory duplication.',
        bn: 'রেফারেন্সে রূপান্তর মেমরি কপি করার বিপুল চাপ থেকে মুক্তি দেয়।'
      },
      explanation: {
        en: 'The := assignment by reference operator adds or modifies columns directly within the existing memory allocation, avoiding duplicate RAM allocations.',
        bn: ':= অপারেটর বিদ্যমান মেমরিতে সরাসরি ইন-প্লেস আপডেট সম্পন্ন করে, ফলে নতুন করে র‍্যাম বরাদ্দের প্রয়োজন হয় না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tables-and-the-join',
    title: {
      en: 'Relational Joins and data.table Quiz',
      bn: 'রিলেশনাল জয়েন ও data.table কুইজ'
    },
    questions: [
      {
        id: 'table-q1',
        kind: 'mcq',
        question: {
          en: 'Which fast I/O function in the data.table package reads massive delimited files up to 50 times faster than base R read.csv()?',
          bn: 'data.table প্যাকেজের কোন দ্রুতগতির I/O ফাংশনটি বেস R এর read.csv() এর চেয়ে ৫০ গুণ দ্রুত বিশাল ফাইল লোড করতে পারে?'
        },
        options: [
          {
            en: 'fread()',
            bn: 'fread()'
          },
          {
            en: 'fast_csv()',
            bn: 'fast_csv()'
          },
          {
            en: 'read_stream()',
            bn: 'read_stream()'
          },
          {
            en: 'load_tabular()',
            bn: 'load_tabular()'
          }
        ],
        answer: 0,
        hint: {
          en: 'The function name starts with "f" for fast.',
          bn: 'ফাংশনের নামের শুরুতে দ্রুত বোঝাতে "f" রয়েছে।'
        },
        explanation: {
          en: 'fread() (fast read) is a multi-threaded C reader in data.table that detects delimiters, types, and headers automatically at maximum speed.',
          bn: 'fread() হলো data.table এর একটি মাল্টি-থ্রেডেড C রিডার যা স্বয়ংক্রিয়ভাবে ডেলিমিটার ও ডাটা টাইপ শনাক্ত করে দ্রুত ফাইল পড়ে।'
        }
      },
      {
        id: 'table-q2',
        kind: 'mcq',
        question: {
          en: 'What is the key characteristic of semi_join(x, y) compared to inner_join(x, y)?',
          bn: 'inner_join(x, y) এর তুলনায় semi_join(x, y) এর মূল বৈশিষ্ট্য কী?'
        },
        options: [
          {
            en: 'semi_join never duplicates rows from table x even if table y has multiple matching rows, and never adds y columns',
            bn: 'semi_join কখনো x এর সারিকে ডুপ্লিকেট করে না এমনকি y এ একাধিক মিল থাকলেও, এবং y এর কোনো কলাম যোগ করে না'
          },
          {
            en: 'semi_join only keeps rows where numbers are odd',
            bn: 'semi_join কেবল বিজোড় সংখ্যার সারিগুলো সংরক্ষণ করে'
          },
          {
            en: 'semi_join converts all strings into lowercase Latin characters',
            bn: 'semi_join તમામ স্ট্রিংকে ছোট হাতের ল্যাটিন অক্ষরে রূপান্তর করে'
          },
          {
            en: 'semi_join permanently deletes non-matching rows from the hard drive',
            bn: 'semi_join হার্ডডিস্ক থেকে চিরতরে অমিল সারিগুলো মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Filtering joins filter observations without altering columns or row multiplicity.',
          bn: 'ফিল্টারিং জয়েন কলাম বা সারির সংখ্যা বাড়ানো ছাড়াই কেবল সারি ছাঁকাই করে।'
        },
        explanation: {
          en: 'Unlike inner_join (which can duplicate rows when a key has 1:many matches and adds y columns), semi_join strictly filters x without row inflation or column addition.',
          bn: 'inner_join যেখানে নতুন কলাম ও ডুপ্লিকেট তৈরি করতে পারে, সেখানে semi_join কেবল ছাঁকনি হিসেবে কাজ করে x এর মূল গঠন ঠিক রাখে।'
        }
      },
      {
        id: 'table-q3',
        kind: 'mcq',
        question: {
          en: 'Which join retains all rows from both table x and table y, filling missing values on either side with NA?',
          bn: 'কোন জয়েনটি টেবিল x এবং টেবিল y উভয়ের تمام সারি অক্ষুণ্ণ রাখে এবং অমিল থাকা স্থানগুলোতে NA বসায়?'
        },
        options: [
          {
            en: 'full_join()',
            bn: 'full_join()'
          },
          {
            en: 'inner_join()',
            bn: 'inner_join()'
          },
          {
            en: 'semi_join()',
            bn: 'semi_join()'
          },
          {
            en: 'anti_join()',
            bn: 'anti_join()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Full join retains the union of all observations.',
          bn: 'ফুল জয়েন সমস্ত রেকর্ডের পূর্ণাঙ্গ সমন্বয় বজায় রাখে।'
        },
        explanation: {
          en: 'full_join() keeps all observations from both inputs, pairing matched keys and inserting NA where data is absent in either table.',
          bn: 'full_join() উভয় টেবিলের প্রতিটি সারি ধরে রাখে এবং যেখানে মিল থাকে না সেখানে NA বসায়।'
        }
      },
      {
        id: 'table-q4',
        kind: 'mcq',
        question: {
          en: 'In data.table, which special symbol inside "j" returns the number of rows in the current group (equivalent to n() in dplyr)?',
          bn: 'data.table এ বর্তমান গ্রুপের মোট সারির সংখ্যা জানতে "j" স্লটে কোন বিশেষ প্রতীকটি ব্যবহৃত হয় (যা dplyr এর n() এর সমতুল্য)?'
        },
        options: [
          {
            en: '.N',
            bn: '.N'
          },
          {
            en: '.SD',
            bn: '.SD'
          },
          {
            en: '.BY',
            bn: '.BY'
          },
          {
            en: '.GRP',
            bn: '.GRP'
          }
        ],
        answer: 0,
        hint: {
          en: '.N stands for Number of rows.',
          bn: '.N অক্ষরটি সারির মোট সংখ্যা (Number of rows) নির্দেশ করে।'
        },
        explanation: {
          en: 'In data.table, .N is a special built-in variable holding the number of observations in the current group.',
          bn: 'data.table এ .N একটি বিশেষ বিল্ট-ইন ভেরিয়েবল যা বর্তমান গ্রুপের সারির মোট সংখ্যা প্রদান করে।'
        }
      },
      {
        id: 'table-q5',
        kind: 'mcq',
        question: {
          en: 'What function sets key index columns on a data.table for lightning-fast binary search lookups?',
          bn: 'বিদ্যুৎগতির বাইনারি সার্চ লুকআপ নিশ্চিত করতে একটি data.table এ কি ইনডেক্স কলাম সেট করতে কোন ফাংশন ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'setkey(DT, col_name)',
            bn: 'setkey(DT, col_name)'
          },
          {
            en: 'create_index(DT, col_name)',
            bn: 'create_index(DT, col_name)'
          },
          {
            en: 'index_table(DT, col_name)',
            bn: 'index_table(DT, col_name)'
          },
          {
            en: 'optimize_hash(DT, col_name)',
            bn: 'optimize_hash(DT, col_name)'
          }
        ],
        answer: 0,
        hint: {
          en: 'setkey sorts the table in RAM and enables binary search.',
          bn: 'setkey মেমরিতে টেবিলটিকে সাজায় এবং বাইনারি সার্চ সক্রিয় করে।'
        },
        explanation: {
          en: 'setkey() sorts the data.table in place by the specified column(s) and creates a physical index enabling O(log N) binary search.',
          bn: 'setkey() ইন-প্লেসে টেবিলকে সর্ট করে ফিজিক্যাল ইনডেক্স তৈরি করে, যার ফলে বাইনারি সার্চ চালানো সম্ভব হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-r-release',
    title: {
      en: 'Production R & Capstone: Shiny Apps, Packages & REST APIs with Plumber',
      bn: 'প্রোডাকশন R এবং ক্যাপস্টোন: Shiny অ্যাপস, প্যাকেজেস ও Plumber দিয়ে REST API'
    }
  }
};
