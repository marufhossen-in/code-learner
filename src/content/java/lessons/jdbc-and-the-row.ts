import type { Lesson } from '../../../lib/types';

export const JdbcAndTheRowLesson: Lesson = {
  slug: 'jdbc-and-the-row',
  tech: 'java',
  title: {
    en: 'JDBC, Connection Pooling & Transaction Management',
    bn: 'JDBC, কানেকশন পুলিং এবং ট্রানজ্যাকশন ম্যানেজমেন্ট'
  },
  summary: {
    en: 'Master enterprise database connectivity in Java: architect reliable data access layers using JDBC interfaces, prevent SQL injection vulnerabilities using PreparedStatement parameterization, optimize throughput with HikariCP connection pooling, and govern ACID transactions with manual commit and rollback boundaries.',
    bn: 'জাভাতে এন্টারপ্রাইজ ডেটাবেস কানেক্টিভিটি আয়ত্ত করুন: JDBC ইন্টারফেস ব্যবহার করে নির্ভরযোগ্য ডেটা এক্সেস লেয়ার গঠন, PreparedStatement দিয়ে SQL ইনজেকশন প্রতিরোধ, HikariCP কানেকশন পুলিং দিয়ে থ্রুপুট বৃদ্ধি এবং ম্যানুয়াল কমিট ও রোলব্যাকের মাধ্যমে ACID ট্রানজ্যাকশন নিয়ন্ত্রণ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'jdbc-architecture-and-preparedstatement-heading',
      text: {
        en: 'The JDBC API Architecture and PreparedStatement SQL Injection Defense',
        bn: 'JDBC এপিআই আর্কিটেকচার এবং PreparedStatement দ্বারা SQL ইনজেকশন প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Java Database Connectivity (JDBC) establishes a vendor-neutral abstraction layer over relational database engines via the "java.sql" package. The fundamental interfaces include DataSource, Connection, PreparedStatement, and ResultSet. Concatenating user inputs into raw SQL statements opens critical SQL Injection vulnerabilities. In contrast, PreparedStatement transmits SQL queries with positional parameter markers ("?") to the database server to be precompiled into an execution plan once. User arguments are then transmitted separately as pure data values, neutralizing code injection exploits and enhancing query execution speed.',
        bn: 'জাভা ডেটাবেস কানেক্টিভিটি (JDBC) "java.sql" প্যাকেজের মাধ্যমে যেকোনো রিলেশনাল ডেটাবেসের সাথে যোগাযোগের একটি সার্বজনীন কাঠামো প্রদান করে। এর মূল ইন্টারফেসগুলোর মধ্যে রয়েছে DataSource, Connection, PreparedStatement, এবং ResultSet। সাধারণ স্ট্রিং জোড়া লাগিয়ে এসকিউএল লিখলে তা সিস্টেমে মারাত্মক SQL Injection ঝুঁকি তৈরি করে। এর বিপরীতে PreparedStatement প্রশ্নবোধক চিহ্নযুক্ত ("?") কুয়েরি পাঠিয়ে ডেটাবেস সার্ভারে আগেই একটি অপটিমাইজড প্ল্যান তৈরি করে নেয়। এরপর ব্যবহারকারীর ইনপুটগুলোকে কেবল খাঁটি ডেটা হিসেবে পাঠানো হয়, যার ফলে কোড ইনজেকশনের সুযোগ থাকে না এবং ডেটাবেসের গতি বহুলাংশে বৃদ্ধি পায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural pipeline of modern enterprise JDBC: Application repository utilizing HikariCP pool, PreparedStatement binding, and ACID transaction boundaries.',
        bn: 'চিত্র ১: আধুনিক এন্টারপ্রাইজ JDBC পাইপলাইন: HikariCP কানেকশন পুল, PreparedStatement বাইন্ডিং এবং ACID ট্রানজ্যাকশন নিয়ন্ত্রণের কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">MODERN JDBC PIPELINE: HIKARICP, PREPAREDSTATEMENT &amp; TRANSACTIONS</text>

  <!-- Step 1: Application Repository -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Repository Layer</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">UserRepository.java</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Business Logics</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">dataSource.getConn()</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Data Access Objects</text>
  </g>

  <!-- Step 2: HikariCP Pool -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. HikariCP Pool</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Pre-warmed TCP Sockets</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Eliminates Handshakes</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero-Allocation Pool</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Ultra-High Throughput</text>
  </g>

  <!-- Step 3: PreparedStatement -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. PreparedStatement</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">SELECT * WHERE id=?</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">stmt.setInt(1, 42)</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Pre-compiled Plan</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero SQL Injection</text>
  </g>

  <!-- Step 4: ACID Transactions -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. ACID Boundaries</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">setAutoCommit(false)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">conn.commit()</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">conn.rollback()</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Atomic Guarantee</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'connection-pooling-and-transactions-heading',
      text: {
        en: 'HikariCP Connection Pooling and ACID Transaction Boundaries',
        bn: 'HikariCP কানেকশন পুলিং এবং ACID ট্রানজ্যাকশন বাউন্ডারি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Creating a fresh physical TCP connection for every incoming HTTP request introduces immense latency from network handshakes, SSL/TLS negotiation, and database backend thread spawning. High-performance enterprise applications employ HikariCP, a lightweight connection pool maintaining warm persistent database connections ready for immediate checkout. Furthermore, ensuring financial integrity demands strict transactional atomicity: calling connection.setAutoCommit(false) begins a manual transaction block. If all modifications succeed, connection.commit() persists changes to disk; if any SQLException occurs, catch blocks invoke connection.rollback() to restore initial state.',
        bn: 'প্রতিটি নতুন এইচটিটিপি রিকোয়েস্টের জন্য ডেটাবেসের সাথে নতুন TCP সংযোগ তৈরি করলে নেটওয়ার্ক হ্যান্ডশেক ও সিকিউরিটি ভেরিফিকেশনের কারণে সিস্টেমের গতি চরমভাবে হ্রাস পায়। হাই-পারফরম্যান্স এন্টারপ্রাইজ সিস্টেমে তাই HikariCP ব্যবহার করা হয়, যা আগে থেকেই তৈরি থাকা কানেকশন প্রস্তুত রাখে। এছাড়াও আর্থিক বা স্পর্শকাতর তথ্যের সুরক্ষায় লেনদেনের অ্যাটোমিসিটি অপরিহার্য: connection.setAutoCommit(false) মেথড ডেকে ম্যানুয়াল ট্রানজ্যাকশন শুরু করা হয়। সমস্ত কাজ সফলভাবে সম্পন্ন হলে connection.commit() দিয়ে পরিবর্তন স্থায়ী করা হয়; আর কোনো সমস্যা দেখা দিলে catch ব্লকে connection.rollback() কল করে পূর্বের অবস্থায় ফিরে যাওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of JDBC connection pooling, PreparedStatement parameterized execution, and ACID transactional commit/rollback.',
        bn: 'JDBC কানেকশন পুলিং, প্যারামিটারাইজড কুয়েরি এক্সিকিউশন এবং ট্রানজ্যাকশন রোলব্যাকের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of JDBC Connection Pooling and ACID Transaction Manager

export interface DatabaseRow {
  id: number;
  username: string;
  balance: number;
}

export class MockConnection {
  public autoCommit: boolean = true;
  public inTransaction: boolean = false;
  private balances: Map<number, number> = new Map([[1, 500], [2, 100]]);
  private stagedChanges: Map<number, number> = new Map();

  public setAutoCommit(flag: boolean): void {
    this.autoCommit = flag;
    this.inTransaction = !flag;
  }

  // PreparedStatement simulated execution
  public transferFunds(fromId: number, toId: number, amount: number): void {
    const fromBal = this.balances.get(fromId) ?? 0;
    if (fromBal < amount) {
      throw new Error('SQLException: Insufficient funds');
    }
    this.stagedChanges.set(fromId, fromBal - amount);
    this.stagedChanges.set(toId, (this.balances.get(toId) ?? 0) + amount);
  }

  public commit(): void {
    for (const [id, newBal] of this.stagedChanges.entries()) {
      this.balances.set(id, newBal);
    }
    this.stagedChanges.clear();
    console.log('[JDBC] Transaction successfully committed.');
  }

  public rollback(): void {
    this.stagedChanges.clear();
    console.log('[JDBC] Transaction rolled back cleanly.');
  }

  public getBalance(id: number): number {
    return this.balances.get(id) ?? 0;
  }
}

// Transaction execution demo
const conn = new MockConnection();
conn.setAutoCommit(false);

try {
  conn.transferFunds(1, 2, 150);
  conn.commit();
} catch (err) {
  conn.rollback();
} finally {
  conn.setAutoCommit(true);
}

console.log('Account 1 Balance:', conn.getBalance(1)); // 350
console.log('Account 2 Balance:', conn.getBalance(2)); // 250`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'JDBC',
          def: {
            en: 'Java Database Connectivity API providing standard vendor-independent relational database access.',
            bn: 'জাভা ডেটাবেস কানেক্টিভিটি এপিআই যা রিলেশনাল ডেটাবেসে কাজ করার সার্বজনীন প্ল্যাটফর্ম দেয়।'
          }
        },
        {
          term: 'PreparedStatement',
          def: {
            en: 'Precompiled SQL statement interface preventing SQL injection and caching database execution plans.',
            bn: 'প্রি-কম্পাইল্ড এসকিউএল ইন্টারফেস যা এসকিউএল ইনজেকশন প্রতিরোধ করে এবং ডেটাবেসের গতি বাড়ায়।'
          }
        },
        {
          term: 'HikariCP',
          def: {
            en: 'Ultra-fast, zero-overhead JDBC connection pool library widely adopted in enterprise production.',
            bn: 'অত্যন্ত দ্রুত এবং নির্ভরযোগ্য কানেকশন পুল যা প্রোডাকশন অ্যাপ্লিকেশনে ব্যাপকভাবে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'ACID Transaction',
          def: {
            en: 'Set of properties (Atomicity, Consistency, Isolation, Durability) guaranteeing reliable database operations.',
            bn: '৪ টি মৌলিক বৈশিষ্ট্য (অ্যাটোমিসিটি, কনসিস্টেন্সি, আইসোলেশন, ডিউরেবিলিটি) যা ডেটাবেসের নিরাপত্তা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sql-injection-preparedstatement-defense-ex1',
      kind: 'mcq',
      topic: 'preparedstatement-sql-injection-prevention',
      question: {
        en: 'Why does PreparedStatement eliminate SQL injection vulnerabilities compared to regular Statement in JDBC?',
        bn: 'সাধারণ Statement এর তুলনায় PreparedStatement কীভাবে JDBC-তে SQL ইনজেকশন পুরোপুরি বন্ধ করে?'
      },
      options: [
        {
          en: 'It precompiles the SQL query structure on the database server and treats parameter values strictly as data, never as executable SQL commands',
          bn: 'এটি ডেটাবেস সার্ভারে আগে থেকেই কুয়েরির মূল গঠন প্রি-কম্পাইল করে নেয় এবং ইনপুট ভ্যালুগুলোকে কেবল সাধারণ ডেটা হিসেবে দেখে, কখনোই কোড হিসেবে নয়'
        },
        {
          en: 'It encrypts all database passwords with SHA-256',
          bn: 'এটি সব ডেটাবেস পাসওয়ার্ড SHA-256 দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'PreparedStatement automatically removes all spaces from input strings',
          bn: 'PreparedStatement ইনপুট থেকে সব স্পেস নিজে থেকে মুছে ফেলে'
        },
        {
          en: 'It rejects all queries longer than 50 characters',
          bn: '৫০ অক্ষরের চেয়ে বড় সব কুয়েরি এটি বাতিল করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'PreparedStatement separates query compilation from parameter values.',
        bn: 'PreparedStatement কুয়েরির সিনট্যাক্স থেকে ইনপুট ডেটাকে সম্পূর্ণ আলাদা রাখে।'
      },
      explanation: {
        en: 'Because query syntax is compiled before inputs are supplied, malicious inputs cannot alter SQL execution logic.',
        bn: 'কুয়েরি আগে কম্পাইল হওয়ায় কোনো ক্ষতিকর ইনপুট কুয়েরির মূল কাঠামো পরিবর্তন করতে পারে না।'
      }
    },
    {
      id: 'connection-pooling-hikaricp-benefit-ex2',
      kind: 'mcq',
      topic: 'connection-pooling-benefits-hikaricp',
      question: {
        en: 'What is the primary performance benefit of using a connection pool like HikariCP instead of DriverManager.getConnection()?',
        bn: 'DriverManager.getConnection() এর বদলে HikariCP এর মতো কানেকশন পুল ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        {
          en: 'It reuses pre-warmed database connections, eliminating the expensive overhead of creating new TCP connections and TLS handshakes on every request',
          bn: 'এটি আগে থেকে তৈরি থাকা ডেটাবেস সংযোগ পুনরায় ব্যবহার করে, ফলে প্রতি রিকোয়েস্টে নতুন TCP সংযোগ ও TLS হ্যান্ডশেকের সময় অপচয় হয় না'
        },
        {
          en: 'It makes the database engine free of charge',
          bn: 'এটি ডেটাবেস ইঞ্জিনকে বিনামূল্যে ব্যবহার করার সুযোগ দেয়'
        },
        {
          en: 'It doubles the physical memory of the computer hardware',
          bn: 'এটি কম্পিউটারের হার্ডওয়্যারের র্যাম দ্বিগুণ করে দেয়'
        },
        {
          en: 'It converts SQL databases into NoSQL document stores',
          bn: 'এটি রিলেশনাল ডেটাবেসকে NoSQL ডেটাবেসে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reusing persistent TCP sockets avoids connection setup costs.',
        bn: 'আগে থেকে সংযুক্ত সকেট ব্যবহার করলে নতুন সংযোগ তৈরির অপচয় সম্পূর্ণ দূর হয়।'
      },
      explanation: {
        en: 'Creating physical DB connections is costly. Connection pooling maintains a pool of active connections for high throughput.',
        bn: 'ডেটাবেস সংযোগ স্থাপন অত্যন্ত সময়সাপেক্ষ; পুলিংয়ের মাধ্যমে তাৎক্ষণিক সংযোগ নিশ্চিত হয়।'
      }
    },
    {
      id: 'jdbc-manual-transaction-begin-method-ex3',
      kind: 'mcq',
      topic: 'jdbc-transaction-demarcation',
      question: {
        en: 'Which method on java.sql.Connection must be called to disable automatic commit and begin a manual transaction?',
        bn: 'স্বয়ংক্রিয় কমিট বন্ধ করে ম্যানুয়াল ট্রানজ্যাকশন শুরু করতে java.sql.Connection এ কোন মেথডটি কল করতে হয়?'
      },
      options: [
        { en: 'connection.setAutoCommit(false)', bn: 'connection.setAutoCommit(false)' },
        { en: 'connection.startTransaction()', bn: 'connection.startTransaction()' },
        { en: 'connection.beginACID()', bn: 'connection.beginACID()' },
        { en: 'connection.disableCommit()', bn: 'connection.disableCommit()' }
      ],
      answer: 0,
      hint: {
        en: 'Disabling auto-commit turns each subsequent statement into a member of a transaction.',
        bn: 'auto-commit কে false করলেই ম্যানুয়াল ট্রানজ্যাকশন মোড চালু হয়।'
      },
      explanation: {
        en: 'By default JDBC connections auto-commit each statement; calling setAutoCommit(false) initiates a manual transaction.',
        bn: 'ডিফল্টভাবে প্রতিটি কুয়েরি একা একাই কমিট হয়ে যায়; setAutoCommit(false) কল করলে ম্যানুয়াল ট্রানজ্যাকশন শুরু হয়।'
      }
    },
    {
      id: 'resultset-next-cursor-iteration-ex4',
      kind: 'mcq',
      topic: 'resultset-cursor-mechanics',
      question: {
        en: 'What does the method resultSet.next() return when iterating through query results in JDBC?',
        bn: 'JDBC-তে কুয়েরির ফলাফল পড়ার সময় resultSet.next() মেথডটি কী রিটার্ন করে?'
      },
      options: [
        {
          en: 'true if the cursor successfully advances to a valid next row, or false if there are no more rows',
          bn: 'true যদি কার্সরটি সফলভাবে পরবর্তী সারিতে যেতে পারে, অথবা false যদি আর কোনো সারি অবশিষ্ট না থাকে'
        },
        {
          en: 'The row count as an integer',
          bn: 'সারির সংখ্যা পূর্ণসংখ্যা হিসেবে'
        },
        {
          en: 'The name of the database table',
          bn: 'ডেটাবেস টেবিলের নাম'
        },
        {
          en: 'A byte array of raw database disk blocks',
          bn: 'ডিস্কের কাঁচা বাইট অ্যারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'next() advances the cursor and returns a boolean indication of row presence.',
        bn: 'next() কার্সরকে সামনের সারিতে এগিয়ে নেয় এবং সারি আছে কি না তা বুলিয়ান দিয়ে জানায়।'
      },
      explanation: {
        en: 'resultSet.next() moves the cursor forward one row and returns false once all rows have been exhausted.',
        bn: 'পরের সারি থাকলে এটি true প্রদান করে, আর সমস্ত সারি পড়া শেষ হলে এটি false রিটার্ন করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-jdbc-and-the-row',
    title: {
      en: 'JDBC, Connection Pooling & Transactions Quiz',
      bn: 'JDBC, কানেকশন পুলিং এবং ট্রানজ্যাকশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-batch-updates-preparedstatement',
        kind: 'mcq',
        topic: 'batch-updates-network-roundtrips',
        question: {
          en: 'Why is using preparedStatement.addBatch() and executeBatch() significantly faster when inserting 1000 records than executing individual insert queries?',
          bn: 'আলাদা আলাদা ১০০০ টি কুয়েরি চালানোর চেয়ে preparedStatement.addBatch() এবং executeBatch() ব্যবহার করা অনেক বেশি দ্রুত কেন?'
        },
        options: [
          {
            en: 'It bundles multiple commands into a single network round-trip to the database, minimizing latency overhead',
            bn: 'এটি বহু কুয়েরিকে একটি একক নেটওয়ার্ক প্যাকেটে ডেটাবেসে পাঠায়, ফলে বারবার নেটওয়ার্ক অপেক্ষার সময় বেঁচে যায়'
          },
          {
            en: 'It bypasses database authentication completely',
            bn: 'এটি ডেটাবেসের লগইন প্রক্রিয়া পুরোপুরি উপেক্ষা করে'
          },
          {
            en: 'It stores records inside local browser localStorage',
            bn: 'এটি ব্রাউজারের লোকাল স্টোরেজে ডেটা সেভ করে'
          },
          {
            en: 'Batching automatically disables database indexing',
            bn: 'ব্যাচিং নিজে থেকে ডেটাবেস ইনডেক্স বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Batching combines network transmissions into unified round-trips.',
          bn: 'ব্যাচিং একাধিক কুয়েরি একসাথে পাঠিয়ে নেটওয়ার্কের অযথা কালক্ষেপণ রোধ করে।'
        },
        explanation: {
          en: 'Executing queries one-by-one requires a network round-trip per row; executeBatch sends them in bulk.',
          bn: 'প্রতিটি সারির জন্য আলাদা নেটওয়ার্ক ট্রিপ না করে ব্যাচে পাঠালে সিস্টেম বহুগুণ দ্রুত কাজ করে।'
        }
      },
      {
        id: 'quiz-transaction-isolation-levels-dirty-read',
        kind: 'mcq',
        topic: 'transaction-isolation-dirty-read-prevention',
        question: {
          en: 'Which standard SQL transaction isolation level prevents dirty reads by allowing transactions to only read committed data?',
          bn: 'কোন ট্রানজ্যাকশন আইসোলেশন লেভেল ডার্টি রিড প্রতিরোধ করে যাতে কেবল ইতিমধ্যে কমিট করা ডেটাই পড়া যায়?'
        },
        options: [
          { en: 'TRANSACTION_READ_COMMITTED', bn: 'TRANSACTION_READ_COMMITTED' },
          { en: 'TRANSACTION_READ_UNCOMMITTED', bn: 'TRANSACTION_READ_UNCOMMITTED' },
          { en: 'TRANSACTION_NONE', bn: 'TRANSACTION_NONE' },
          { en: 'TRANSACTION_SNAPSHOT_DISABLED', bn: 'TRANSACTION_SNAPSHOT_DISABLED' }
        ],
        answer: 0,
        hint: {
          en: 'Read Committed guarantees no uncommitted "dirty" data is read.',
          bn: 'Read Committed লেভেলে অপরিবর্তিত বা অপূর্ণাঙ্গ কোনো ডেটা পড়া সম্ভব নয়।'
        },
        explanation: {
          en: 'READ_COMMITTED prohibits dirty reads by ensuring queries only observe rows already permanently committed by other transactions.',
          bn: 'অন্য ট্রানজ্যাকশন স্থায়ীভাবে ডেটা কমিট না করা পর্যন্ত এই লেভেলে তা দৃশ্যমান হয় না।'
        }
      },
      {
        id: 'quiz-try-with-resources-jdbc-connection-leak',
        kind: 'mcq',
        topic: 'try-with-resources-connection-leak-prevention',
        question: {
          en: 'What critical risk is averted by declaring Connection, PreparedStatement, and ResultSet inside try-with-resources?',
          bn: 'try-with-resources এর ভেতর Connection, PreparedStatement এবং ResultSet ঘোষণা করলে কোন মারাত্মক ঝুঁকি প্রতিরোধ হয়?'
        },
        options: [
          {
            en: 'Connection pool exhaustion leaks where orphaned connections remain open forever, eventually causing the entire application to hang',
            bn: 'কানেকশন পুল খালি হয়ে যাওয়া রোধ হয়, যাতে অব্যবহৃত কানেকশন আটকে না থেকে অ্যাপ্লিকেশনের ক্র্যাশ হওয়া প্রতিহত হয়'
          },
          {
            en: 'Accidental database table deletion',
            bn: 'দুর্ঘটনাবশত ডেটাবেস টেবিল মুছে যাওয়া'
          },
          {
            en: 'Incompatible SQL dialect syntax errors',
            bn: 'ভুল এসকিউএল সিনট্যাক্স এরর'
          },
          {
            en: 'Hard disk space fragmentation',
            bn: 'হার্ড ডিস্কের স্পেস বিভক্ত হয়ে যাওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unclosed connections exhaust connection pools, locking out new requests.',
          bn: 'কানেকশন বন্ধ না করলে পুলের সব সংযোগ শেষ হয়ে যায় এবং অ্যাপ হ্যাং করে।'
        },
        explanation: {
          en: 'Try-with-resources guarantees close() is executed on connections, returning them safely to the pool even during runtime exceptions.',
          bn: 'এরর হলেও try-with-resources নিশ্চিত করে যে প্রতিটি কানেকশন পুলে নিরাপদে ফেরত গেছে।'
        }
      },
      {
        id: 'quiz-datasource-vs-drivermanager',
        kind: 'mcq',
        topic: 'datasource-vs-drivermanager-enterprise-standard',
        question: {
          en: 'Why is javax.sql.DataSource preferred over java.sql.DriverManager in enterprise Java applications?',
          bn: 'এন্টারপ্রাইজ জাভা অ্যাপ্লিকেশনে java.sql.DriverManager এর চেয়ে javax.sql.DataSource কেন বেশি গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'DataSource supports transparent connection pooling, distributed JTA transactions, and dependency injection, whereas DriverManager creates slow unpooled connections',
            bn: 'DataSource স্বয়ংক্রিয় কানেকশন পুলিং, ডিস্ট্রিবিউটেড ট্রানজ্যাকশন এবং ডিপেন্ডেন্সি ইনজেকশন সমর্থন করে, যেখানে DriverManager অত্যন্ত ধীরগতির পুলহীন কানেকশন দেয়'
          },
          {
            en: 'DriverManager was removed from the Java language completely',
            bn: 'DriverManager জাভা ল্যাঙ্গুয়েজ থেকে সম্পূর্ণ মুছে ফেলা হয়েছে'
          },
          {
            en: 'DataSource runs exclusively in the browser',
            bn: 'DataSource শুধুমাত্র ব্রাউজারে রান করে'
          },
          {
            en: 'DriverManager does not support SQL SELECT statements',
            bn: 'DriverManager এসকিউএল SELECT স্টেটমেন্ট সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'DataSource provides configurable pooling and enterprise infrastructure integration.',
          bn: 'DataSource কানেকশন পুলিং এবং এন্টারপ্রাইজ ফ্রেমওয়ার্কের সাথে সুন্দরভাবে যুক্ত হতে পারে।'
        },
        explanation: {
          en: 'DataSource is an enterprise interface configured via dependency injection and backed by pools like HikariCP.',
          bn: 'DataSource ফ্রেমওয়ার্কে কনফিগার করা সহজ এবং এটি HikariCP এর মতো পুল ব্যবহার করে সর্বোচ্চ কর্মক্ষমতা নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-jar-serve',
    title: {
      en: 'Packaging, JLink Runtimes & Cloud Deployment',
      bn: 'প্যাকেজিং, JLink রানটাইম এবং ক্লাউড ডিপ্লয়মেন্ট'
    }
  }
};
