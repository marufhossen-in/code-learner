import type { Lesson } from '../../../lib/types';

export const PdosAndTheQueryLesson: Lesson = {
  slug: 'pdos-and-the-query',
  tech: 'lang-php',
  title: {
    en: 'PDO Database API, Prepared Statements & Transactions',
    bn: 'PDO ডেটাবেস এপিআই, প্রিপেয়ার্ড স্টেটমেন্ট এবং ট্রানজ্যাকশন'
  },
  summary: {
    en: 'Master enterprise database persistence in PHP with PDO. Learn to configure DSN connections, eliminate SQL injection using prepared statements with bound parameters (:param), execute atomic transactions, and map records into typed classes using FETCH_CLASS.',
    bn: 'পিএইচপিতে PDO ডেটাবেস পারসিস্টেন্স আয়ত্ত করুন। DSN কনফিগারেশন, প্রিপেয়ার্ড স্টেটমেন্ট ও প্যারামিটার বাইন্ডিং (:param) দিয়ে এসকিউএল ইনজেকশন প্রতিরোধ, অ্যাটমিক ট্রানজ্যাকশন এবং FETCH_CLASS দিয়ে অবজেক্ট ম্যাপিং শিখুন।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'pdo-architecture-and-statements-heading',
      text: {
        en: 'The PDO Abstraction Layer, Prepared Statements, and SQL Injection Immunity',
        bn: 'PDO অ্যাবস্ট্রাকশন লেয়ার, প্রিপেয়ার্ড স্টেটমেন্ট এবং এসকিউএল ইনজেকশন প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the backend programming language) Data Objects (PDO) provides a consistent, high-performance database abstraction layer supporting MySQL, PostgreSQL, SQLite, and Oracle. Connecting requires a Data Source Name (DSN) string alongside driver options, crucially setting PDO::ATTR_ERRMODE to PDO::ERRMODE_EXCEPTION to surface SQL failures as catchable PDOExceptions. To guarantee immunity from SQL injection vulnerabilities, queries must never interpolate raw variables; instead, developers prepare statement templates and bind values using named placeholders (:email) or positional markers (?).',
        bn: 'পিএইচপি (ব্যাকএন্ড প্রোগ্রামিং ভাষা) ডেটা অবজেক্টস (PDO) হলো একটি অত্যন্ত কার্যকরী ডেটাবেস অ্যাবস্ট্রাকশন লেয়ার যা মাইএসকিউএল, পোস্টগ্রেসকিউএল, এসকিউলাইট এবং ওরাকল সমর্থন করে। ডেটাবেসে সংযোগ করতে একটি Data Source Name (DSN) স্ট্রিং প্রয়োজন হয় এবং যেকোনো ত্রুটি যেন পিএইচপি এক্সেপশন হিসেবে ধরা যায় সেজন্য PDO::ATTR_ERRMODE কে PDO::ERRMODE_EXCEPTION এ সেট করতে হয়। এসকিউএল ইনজেকশনের ঝুঁকি চিরতরে দূর করতে কোয়েরির ভেতরে কখনোই সরাসরি ভেরিয়েবল বসানো উচিত নয়; বরং প্রিপেয়ার্ড স্টেটমেন্ট তৈরি করে নেইমড প্লেসহোল্ডার (:email) বা প্রশ্নবোধক চিহ্নে (?) ডেটা বাইন্ড করতে হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural separation between SQL query preparation, parameter binding, and ACID transaction commits in PDO.',
        bn: 'চিত্র ১: PDO তে এসকিউএল কুয়েরি প্রস্তুতি, প্যারামিটার বাইন্ডিং এবং ট্রানজ্যাকশন কমিটের অভ্যন্তরীণ ধাপসমূহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PDO PREPARED STATEMENT &amp; TRANSACTION FLOW</text>

  <!-- Step 1: DSN & Connect -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. DSN Connection</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">mysql:host=127.0.0.1;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">dbname=store;utf8mb4</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">ERRMODE_EXCEPTION</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">TCP Handshake OK</text>
  </g>

  <!-- Step 2: Prepare Template -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. SQL Preparation</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">SELECT * FROM users</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">WHERE email = :email</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">DB compiles plan</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">AST syntax sealed</text>
  </g>

  <!-- Step 3: Bind Values -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Parameter Binding</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">:email =&gt; 'dev@test'</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Literal byte stream</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Zero SQL injection</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Safe data transfer</text>
  </g>

  <!-- Step 4: Transaction Commit -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Transaction</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">beginTransaction()</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">commit() / rollBack()</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">FETCH_ASSOC / CLASS</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Atomic &amp; Durable</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'acid-transactions-and-fetch-modes-heading',
      text: {
        en: 'Atomic Transactions and Typed Entity Mapping with FETCH_CLASS',
        bn: 'অ্যাটমিক ট্রানজ্যাকশন এবং FETCH_CLASS দিয়ে অবজেক্ট ম্যাপিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For operations spanning multiple related database queries (such as transferring money between 2 accounts), PDO provides transactional integrity through beginTransaction(), commit(), and rollBack(). Wrapping these queries in a try-catch block guarantees that if any query fails, the entire transaction is rolled back, preventing orphaned or corrupt database records. Additionally, PDO supports powerful retrieval fetch modes: while PDO::FETCH_ASSOC returns associative arrays, PDO::FETCH_CLASS dynamically instantiates typed entity classes, populating private properties directly.',
        bn: 'একাধিক পরস্পর সম্পর্কিত কোয়েরি সম্পন্ন করার ক্ষেত্রে (যেমন ২ টি একাউন্টের মধ্যে টাকা স্থানান্তর) PDO ট্রানজ্যাকশনের অখণ্ডতা নিশ্চিত করতে beginTransaction(), commit() এবং rollBack() সুবিধা দেয়। একটি try-catch ব্লকের ভেতর এই কোয়েরিগুলো চালালে কোনো একটিতে সমস্যা হলেও সম্পূর্ণ পরিবর্তনটি রোলব্যাক হয়ে পূর্বাবস্থায় ফিরে যায়, যার ফলে ডেটাবেসের অখণ্ডতা অক্ষত থাকে। তদুপরি PDO তে বিভিন্ন ফেচ মোড রয়েছে: যেমন PDO::FETCH_ASSOC কি-ভিত্তিক অ্যারে প্রদান করে, আর PDO::FETCH_CLASS স্বয়ংক্রিয়ভাবে নির্দিষ্ট ক্লাসের অবজেক্ট তৈরি করে সরাসরি প্রপার্টিগুলো পূরণ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PDO prepared statement parameter binding, balance transfer transactions, and associative record fetching.',
        bn: 'PDO প্রিপেয়ার্ড স্টেটমেন্ট বাইন্ডিং, ব্যাংক ব্যালেন্স ট্রানজ্যাকশন এবং অ্যাসোসিয়েটিভ রেকর্ড ফেচ করার সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP PDO Prepared Statements and ACID Transactions in TypeScript

interface AccountRecord {
  id: number;
  owner: string;
  balance: number;
}

export class PdoSimulator {
  private accounts: Map<number, AccountRecord> = new Map();
  private inTransaction: boolean = false;
  private snapshot: Map<number, AccountRecord> | null = null;

  constructor() {
    this.accounts.set(1, { id: 1, owner: 'Karim', balance: 1000 });
    this.accounts.set(2, { id: 2, owner: 'Rahim', balance: 500 });
  }

  // Simulating $pdo->beginTransaction()
  public beginTransaction(): void {
    this.inTransaction = true;
    this.snapshot = new Map(JSON.parse(JSON.stringify(Array.from(this.accounts.entries()))));
  }

  // Simulating $pdo->commit()
  public commit(): void {
    this.inTransaction = false;
    this.snapshot = null;
  }

  // Simulating $pdo->rollBack()
  public rollBack(): void {
    if (this.snapshot) {
      this.accounts = this.snapshot;
      this.snapshot = null;
    }
    this.inTransaction = false;
  }

  // Simulating $stmt->execute([':amount' => $val, ':id' => $id])
  public transfer(fromId: number, toId: number, amount: number): boolean {
    this.beginTransaction();
    try {
      const from = this.accounts.get(fromId);
      const to = this.accounts.get(toId);

      if (!from || !to || from.balance < amount) {
        throw new Error('Insufficient funds or invalid account');
      }

      from.balance -= amount;
      to.balance += amount;
      this.commit();
      return true;
    } catch (err) {
      this.rollBack();
      return false;
    }
  }

  public getAccount(id: number): AccountRecord | undefined {
    return this.accounts.get(id);
  }
}

// Executing demonstrations
const db = new PdoSimulator();

// Transfer 300 from Karim (1) to Rahim (2)
const success = db.transfer(1, 2, 300);
console.log('Transfer Succeeded:', success); // true

const karim = db.getAccount(1);
const rahim = db.getAccount(2);
console.log('Karim Balance after Transfer:', karim?.balance); // 700
console.log('Rahim Balance after Transfer:', rahim?.balance); // 800`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Data Source Name (DSN)',
          def: {
            en: 'Connection string identifying database driver, host address, port, database name, and character encoding.',
            bn: 'কানেকশন স্ট্রিং যা ডেটাবেস ড্রাইভার, হোস্ট আইপি, পোর্ট, ডেটাবেসের নাম এবং ক্যারেক্টার সেট নির্ধারণ করে।'
          }
        },
        {
          term: 'Prepared Statement',
          def: {
            en: 'Precompiled SQL template compiled by the database server before parameters are bound and executed.',
            bn: 'ডেটাবেস সার্ভারে পূর্বেই সংকলিত এসকিউএল কাঠামো যাতে মান বাইন্ড করে নিরাপদ কোয়েরি চালানো হয়।'
          }
        },
        {
          term: 'ACID Transaction',
          def: {
            en: 'Unit of database work guaranteeing Atomicity, Consistency, Isolation, and Durability via commit and rollback operations.',
            bn: 'ডেটাবেস অপারেশনের এমন এক রূপ যা সমস্ত পরিবর্তন পুরোপুরি সম্পন্ন হওয়া অথবা ত্রুটিতে পূর্বাবস্থায় ফিরে যাওয়া নিশ্চিত করে।'
          }
        },
        {
          term: 'PDO::FETCH_CLASS',
          def: {
            en: 'Fetch mode automatically mapping returned database rows into newly created instances of a specified class.',
            bn: 'বিশেষ ফেচ মোড যা ডেটাবেস থেকে প্রাপ্ত প্রতিটি সারিকে স্বয়ংক্রিয়ভাবে একটি ক্লাসের অবজেক্টে রূপান্তর করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'prepared-statement-security-ex1',
      kind: 'mcq',
      topic: 'prepared-statements-sql-injection-immunity',
      question: {
        en: 'Why do PDO prepared statements with bound parameters completely neutralize SQL injection vulnerabilities?',
        bn: 'প্যারামিটার বাইন্ডিং সহ PDO প্রিপেয়ার্ড স্টেটমেন্ট কেন এসকিউএল ইনজেকশনের ঝুঁকি সম্পূর্ণ দূর করে?'
      },
      options: [
        {
          en: 'The database engine compiles the SQL syntax structure before parameters arrive, treating bound values strictly as data literals rather than executable SQL syntax',
          bn: 'ডেটাবেস ইঞ্জিন প্যারামিটার আসার আগেই এসকিউএল স্ট্রাকচার কম্পাইল করে নেয়, ফলে পাঠানো মানগুলোকে কেবল সাধারণ টেক্সট হিসেবে দেখে, কোড হিসেবে নয়'
        },
        {
          en: 'Prepared statements delete quotes from the internet',
          bn: 'প্রিপেয়ার্ড স্টেটমেন্ট ইন্টারনেট থেকে কোটেশন মার্ক মুছে ফেলে'
        },
        {
          en: 'They restrict SQL queries to 5 characters',
          bn: 'তারা এসকিউএল কোয়েরির দৈর্ঘ্য ৫ অক্ষরে সীমাবদ্ধ করে'
        },
        {
          en: 'They store all data in text files instead of a database',
          bn: 'তারা ডেটাবেসের বদলে সাধারণ টেক্সট ফাইলে সমস্ত তথ্য সংরক্ষণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The database parser treats bound parameter payloads strictly as literal values, never as syntax commands.',
        bn: 'ডেটাবেস প্যারামিটারের ভেতরের তথ্যকে কেবলমাত্র সাধারণ মান হিসেবে গ্রহণ করে, কোনো কমান্ড হিসেবে রান করে না।'
      },
      explanation: {
        en: 'Because query structure is pre-parsed, input containing SQL keywords cannot alter the Abstract Syntax Tree grammar.',
        bn: 'কোয়েরির গঠন আগে থেকেই তৈরি থাকায় ইনপুটের ভেতর ক্ষতিকারক কোড থাকলেও তা কমান্ড হিসেবে চলতে পারে না।'
      }
    },
    {
      id: 'errmode-exception-configuration-ex2',
      kind: 'mcq',
      topic: 'pdo-attr-errmode-exception',
      question: {
        en: 'What occurs when PDO::ATTR_ERRMODE is set to PDO::ERRMODE_EXCEPTION and a database query fails?',
        bn: 'PDO::ATTR_ERRMODE কে PDO::ERRMODE_EXCEPTION সেট করা থাকলে কোনো কোয়েরি ব্যর্থ হলে কী ঘটে?'
      },
      options: [
        {
          en: 'PDO throws a catchable PDOException containing the exact database error message and state code',
          bn: 'PDO একটি হ্যান্ডেলযোগ্য PDOException তৈরি করে যাতে ডেটাবেস এরর মেসেজ এবং এরর কোড উল্লেখ থাকে'
        },
        {
          en: 'PHP terminates silently without any output or error indication',
          bn: 'কোনো এরর মেসেজ না দিয়ে পিএইচপি নীরবে বন্ধ হয়ে যায়'
        },
        {
          en: 'The server reboots immediately',
          bn: 'সার্ভার সাথে সাথে রিবুট হয়'
        },
        {
          en: 'The database automatically deletes all tables',
          bn: 'ডেটাবেস স্বয়ংক্রিয়ভাবে সব টেবিল ডিলিট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ERRMODE_EXCEPTION converts SQL errors into standard catchable exceptions.',
        bn: 'ERRMODE_EXCEPTION ডেটাবেসের ভুলগুলোকে স্ট্যান্ডার্ড পিএইচপি এক্সেপশনে রূপান্তর করে।'
      },
      explanation: {
        en: 'Exceptions allow structured try-catch error management and reliable transaction rollbacks.',
        bn: 'এক্সেপশন ব্যবহারের ফলে try-catch ব্লকের মাধ্যমে ডেটাবেসের ভুলগুলো সহজে সামলানো যায়।'
      }
    },
    {
      id: 'acid-transaction-rollback-ex3',
      kind: 'mcq',
      topic: 'pdo-rollback-atomic-consistency',
      question: {
        en: 'What is the outcome of calling $pdo->rollBack() inside a catch block during a failed balance transfer?',
        bn: 'ব্যালেন্স ট্রান্সফার ব্যর্থ হলে catch ব্লকের ভেতর $pdo->rollBack() কল করলে কী ফলাফল অর্জিত হয়?'
      },
      options: [
        {
          en: 'All database modifications executed since beginTransaction() are entirely undone, restoring the database to its pre-transaction state',
          bn: 'beginTransaction() এর পর থেকে হওয়া সমস্ত ডেটাবেস পরিবর্তন পুরোপুরি বাতিল হয়ে ডেটাবেস পূর্বের অবস্থায় ফিরে যায়'
        },
        {
          en: 'Only the last single query is reverted',
          bn: 'কেবলমাত্র সর্বশেষ কোয়েরিটি বাতিল হয়'
        },
        {
          en: 'The bank accounts are deleted permanently',
          bn: 'ব্যাংক অ্যাকাউন্টগুলো স্থায়ীভাবে মুছে যায়'
        },
        {
          en: 'The database server disconnects from the internet for 1 hour',
          bn: 'ডেটাবেস সার্ভার ১ ঘণ্টার জন্য ইন্টারনেট থেকে বিচ্ছিন্ন হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rollback reverts all pending transaction queries atomically.',
        bn: 'রোলব্যাক ট্রানজ্যাকশনের অন্তর্ভুক্ত সমস্ত পরিবর্তন একবারে বাতিল করে দেয়।'
      },
      explanation: {
        en: 'Calling rollBack restores data consistency by discarding partial uncommitted mutations.',
        bn: 'rollBack অসম্পূর্ণ কোনো পরিবর্তন জমা হতে না দিয়ে ডেটাবেসের সঠিকতা বজায় রাখে।'
      }
    },
    {
      id: 'fetch-class-mapping-ex4',
      kind: 'mcq',
      topic: 'pdo-fetch-class-mapping',
      question: {
        en: 'How does PDO::FETCH_CLASS instantiate class properties when mapping database rows to an entity object?',
        bn: 'ডেটাবেসের রেকর্ডকে অবজেক্টে রূপান্তর করার সময় PDO::FETCH_CLASS কীভাবে ক্লাসের প্রপার্টি পূরণ করে?'
      },
      options: [
        {
          en: 'It directly maps table column names to matching object properties (including private properties) before calling the constructor by default',
          bn: 'এটি ডিফল্টভাবে কনস্ট্রাক্টর ডাকার পূর্বেই টেবিলের কলামগুলোর নাম সরাসরি অবজেক্টের সংশ্লিষ্ট প্রপার্টিতে (প্রাইভেট সহ) বসিয়ে দেয়'
        },
        {
          en: 'It prints the records onto a physical printer',
          bn: 'এটি রেকর্ডগুলো সরাসরি কাগজের প্রিন্টারে পাঠায়'
        },
        {
          en: 'It converts every field into a global string',
          bn: 'এটি প্রতিটি ফিল্ডকে গ্লোবাল স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'FETCH_CLASS is unsupported in PHP',
          bn: 'FETCH_CLASS পিএইচপিতে কাজ করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'PDO uses engine reflection to set instance fields matching database column aliases.',
        bn: 'PDO কলামের নামের সাথে মিলিয়ে অবজেক্টের অভ্যন্তরীণ প্রপার্টিগুলো সরাসরি পূরণ করে।'
      },
      explanation: {
        en: 'FETCH_CLASS instantiates the class and populates matching fields directly from the fetched row.',
        bn: 'FETCH_CLASS সুনির্দিষ্ট ক্লাসের অবজেক্ট তৈরি করে তাতে কলামের মান বসিয়ে প্রদান করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-pdos-and-the-query',
    title: {
      en: 'PHP PDO Database API and Transactions Quiz',
      bn: 'পিএইচপি PDO ডেটাবেস এপিআই এবং ট্রানজ্যাকশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-emulated-prepares-security-risk',
        kind: 'mcq',
        topic: 'pdo-emulate-prepares-flag',
        question: {
          en: 'Why is setting PDO::ATTR_EMULATE_PREPARES => false recommended for maximum security?',
          bn: 'সর্বোচ্চ নিরাপত্তার জন্য PDO::ATTR_EMULATE_PREPARES => false রাখা বাঞ্ছনীয় কেন?'
        },
        options: [
          {
            en: 'It instructs PDO to use true native database server-side prepared statements rather than emulating parameter substitutions with local string quoting',
            bn: 'এটি পিএইচপিকে স্থানীয়ভাবে স্ট্রিং কোট না করে সরাসরি ডেটাবেস সার্ভারের আসল নেটিভ প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহার করতে নির্দেশ দেয়'
          },
          {
            en: 'It compresses queries into ZIP files',
            bn: 'এটি কোয়েরিগুলোকে জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'It encrypts the database server password with SHA-1',
            bn: 'এটি ডেটাবেসের পাসওয়ার্ড SHA-1 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'Emulating prepares increases memory consumption by 90 percent',
            bn: 'ইমুলেশন মেমোরি খরচ ৯০ শতাংশ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Disabling emulation ensures the database server itself compiles the SQL statement before parameters arrive.',
          bn: 'ইমুলেশন বন্ধ রাখলে ডেটাবেস সার্ভার নিজে কোয়েরি কম্পাইল করে নিরাপত্তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Disabling emulated prepares enforces true database-level statement isolation, defending against edge-case charset exploits.',
          bn: 'নেটিভ প্রিপেয়ার্ড স্টেটমেন্ট ক্যারেক্টার সেট ভিত্তিক জটিল হ্যাকিং প্রচেষ্টা থেকে সুরক্ষিত রাখে।'
        }
      },
      {
        id: 'quiz-last-insert-id-retrieval',
        kind: 'mcq',
        topic: 'pdo-last-insert-id',
        question: {
          en: 'Which method returns the auto-increment primary key ID generated by the most recent INSERT statement in PDO?',
          bn: 'PDO তে সাম্প্রতিক INSERT স্টেটমেন্ট দ্বারা তৈরি হওয়া অটো-ইনক্রিমেন্ট প্রাইমারি কি আইডি পাওয়ার জন্য কোন মেথডটি ব্যবহার করা হয়?'
        },
        options: [
          { en: '$pdo->lastInsertId()', bn: '$pdo->lastInsertId()' },
          { en: '$pdo->getPrimaryKey()', bn: '$pdo->getPrimaryKey()' },
          { en: '$pdo->latestId()', bn: '$pdo->latestId()' },
          { en: '$pdo->insertedIndex()', bn: '$pdo->insertedIndex()' }
        ],
        answer: 0,
        hint: {
          en: 'The method specifically fetches the last inserted sequence or auto-increment identifier.',
          bn: 'এই মেথডটি সদ্য যুক্ত হওয়া রেকর্ডের অটো-ইনক্রিমেন্ট আইডি উদ্ধার করে।'
        },
        explanation: {
          en: '$pdo->lastInsertId() retrieves the auto-generated identifier of the row inserted within the active database connection.',
          bn: '$pdo->lastInsertId() বর্তমান কানেকশনে শেষ প্রবেশ করানো রেকর্ডের প্রাইমারি কি প্রদান করে।'
        }
      },
      {
        id: 'quiz-named-vs-positional-placeholders',
        kind: 'mcq',
        topic: 'pdo-placeholder-types',
        question: {
          en: 'Can named placeholders (:email) and positional placeholders (?) be mixed together inside the same PDO query string?',
          bn: 'একই PDO কোয়েরি স্ট্রিংয়ের ভেতরে কি নেইমড প্লেসহোল্ডার (:email) এবং পজিশনাল প্লেসহোল্ডার (?) একসাথে মেশানো যায়?'
        },
        options: [
          {
            en: 'No, PDO strictly forbids mixing named and positional placeholders in a single query statement, throwing a PDOException',
            bn: 'না, PDO একটি কোয়েরিতে নেইমড এবং পজিশনাল প্লেসহোল্ডার একসাথে মেশানো কঠোরভাবে নিষিদ্ধ করেছে এবং এমন করলে PDOException দেয়'
          },
          {
            en: 'Yes, they can be freely mixed without restriction',
            bn: 'হ্যাঁ, কোনো বাধা ছাড়াই তাদের ইচ্ছামতো একসাথে মেশানো যায়'
          },
          {
            en: 'Only if the query contains fewer than 3 parameters',
            bn: 'কেবল কোয়েরিতে ৩ টির কম প্যারামিটার থাকলে'
          },
          {
            en: 'Only on PostgreSQL databases',
            bn: 'কেবল পোস্টগ্রেসকিউএল ডেটাবেসে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Choose either named (:param) or positional (?) parameter styles for each SQL query, never both.',
          bn: 'প্রতিটি কোয়েরিতে কেবল এক ধরনের প্লেসহোল্ডার ব্যবহার করুন, উভয়টি একসাথে নয়।'
        },
        explanation: {
          en: 'Mixing parameter placeholder styles confuses parameter binders, violating PDO query grammar specifications.',
          bn: 'উভয় স্টাইল একসাথে মেশালে প্যারামিটার ম্যাপিংয়ে জটিলতা তৈরি হয় যা PDO সমর্থন করে না।'
        }
      },
      {
        id: 'quiz-fetch-column-single-value',
        kind: 'mcq',
        topic: 'pdo-fetch-column-usage',
        question: {
          en: 'Which PDOStatement method efficiently retrieves a single scalar value from the next row (e.g. for SELECT COUNT(*) FROM users)?',
          bn: 'SELECT COUNT(*) FROM users এর মতো কোয়েরি থেকে সরাসরি একটি একক সংখ্যা পাওয়ার জন্য PDOStatement এর কোন মেথডটি সবচেয়ে কার্যকর?'
        },
        options: [
          { en: '$stmt->fetchColumn()', bn: '$stmt->fetchColumn()' },
          { en: '$stmt->fetchSingle()', bn: '$stmt->fetchSingle()' },
          { en: '$stmt->getOne()', bn: '$stmt->getOne()' },
          { en: '$stmt->scalar()', bn: '$stmt->scalar()' }
        ],
        answer: 0,
        hint: {
          en: 'fetchColumn returns a single column from the current result row.',
          bn: 'fetchColumn বর্তমান সারির নির্দিষ্ট একটি কলামের মান ফেরত দেয়।'
        },
        explanation: {
          en: '$stmt->fetchColumn(0) extracts the 0-indexed column directly, avoiding array allocation overhead for scalar queries.',
          bn: '$stmt->fetchColumn(0) সরাসরি একটি একক মান রিটার্ন করে কোনো অপ্রয়োজনীয় অ্যারে তৈরি না করেই।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'composers-and-the-autoload',
    title: {
      en: 'Composer, PSR-4 Autoloading & Namespaces',
      bn: 'কম্পোজার, PSR-4 অটোলোডিং এবং নেমস্পেস'
    }
  }
};
