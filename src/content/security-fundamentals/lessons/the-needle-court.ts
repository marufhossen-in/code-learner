import type { Lesson } from '../../../lib/types';

export const needleCourtLesson: Lesson = {
  slug: 'the-needle-court',
  tech: 'security-fundamentals',
  title: {
    en: 'SQL Injection & Parameterized Queries — Preventing Database Syntax Hijacking',
    bn: 'এসকিউএল ইনজেকশন ও প্যারামিটারাইজড কোয়েরি: ডেটাবেস সিনট্যাক্স হাইজ্যাকিং প্রতিরোধ'
  },
  summary: {
    en: 'SQL Injection occurs when untrusted user input is directly concatenated into database query strings, allowing attackers to manipulate SQL grammar and execute arbitrary commands. In this lesson, you will dissect how syntax confusion turns user data into executable instructions. Understand classic authentication bypasses, blind boolean extraction, and union-based exfiltration. Master the one true mathematical remedy: parameterized queries and prepared statements that transmit code and data on separate channels. Implement an executable SQL query compiler simulation in TypeScript that proves parameterized defense stops 100 percent of injection attempts.',
    bn: 'এসকিউএল ইনজেকশন ঘটে যখন ব্যবহারকারীর অবিশ্বস্ত ইনপুটকে সরাসরি ডেটাবেস কোয়েরি স্ট্রিংয়ের সাথে জোড়া লাগানো হয়, যার ফলে আক্রমণকারী এসকিউএল ব্যাকরণ নিয়ন্ত্রণ করে যেকোনো অননুমোদিত কমান্ড চালাতে পারে। এই পাঠে আপনি কীভাবে ডেটা কমান্ডে রূপান্তরিত হয় তার পেছনের ব্যাকরণিক বিভ্রান্তি ব্যবচ্ছেদ করবেন। ক্লাসিক লগইন বাইপাস, ব্লাইন্ড বুলিয়ান এক্সট্রাকশন এবং ইউনিয়ন-ভিত্তিক আক্রমণ বিশদভাবে বিশ্লেষণ করা হয়েছে। এর একমাত্র কার্যকরী ক্রিপ্টোগ্রাফিক সমাধান হলো প্যারামিটারাইজড কোয়েরি ও প্রিপেয়ার্ড স্টেটমেন্ট, যা কোড এবং ডেটাকে সম্পূর্ণ পৃথক চ্যানেলে প্রেরণ করে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর এসকিউএল কম্পাইলার সিমুলেশন বাস্তবায়ন করা হয়েছে যা প্রমাণ করে প্যারামিটারাইজড পদ্ধতি ১০০ শতাংশ ইনজেকশন আক্রমণ প্রতিহত করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'anatomy-of-syntax-confusion',
      text: {
        en: 'The Anatomy of Syntax Confusion: How Data Becomes Code',
        bn: 'সিনট্যাক্স বিভ্রান্তির ব্যবচ্ছেদ: কীভাবে ডেটা কোডে রূপান্তরিত হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'SQL injection is a devastating vulnerability that allows attackers to manipulate database query syntax directly. It has consistently ranked on the Open Worldwide Application Security Project (OWASP) Top 10 list for over 20 years.',
        bn: 'এসকিউএল ইনজেকশন হলো এমন এক মারাত্মক দুর্বলতা যা আক্রমণকারীকে ডেটাবেস কোয়েরির ব্যাকরণ সরাসরি পরিবর্তন করার সুযোগ দেয়। এটি বিগত ২০ বছরেরও বেশি সময় ধরে ওপেন ওয়েব অ্যাপ্লিকেশন সিকিউরিটি প্রজেক্টের (OWASP) শীর্ষ ১০ তালিকায় অবস্থান করছে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a developer glues user strings into an SQL command using string concatenation, the database parser cannot distinguish commands from literal data. An attacker can insert a quote to close the string, inject an OR 1=1 clause, and append comment dashes (--) to bypass logic. Parameterized queries fix this completely: the query structure is pre-compiled, and user values travel on a separate channel as inert data.',
        bn: 'ডেভেলপার যখন স্ট্রিং কনক্যাটেনেশনের মাধ্যমে এসকিউএল কোয়েরি তৈরি করেন, তখন ডেটাবেসের পার্সার নির্দেশ ও তথ্যের মধ্যকার পার্থক্য বুঝতে পারে না। একজন আক্রমণকারী কোটেশন দিয়ে আগের লেখা শেষ করে OR ১=১ শর্ত এবং কমেন্ট ড্যাশ (--) দিয়ে কোড বদলে ফেলতে পারে। প্যারামিটারাইজড কোয়েরি এই সমস্যা সম্পূর্ণ দূর করে: কোয়েরির ব্যাকরণ আগেই তৈরি হয় এবং ব্যবহারকারীর ডেটা পৃথক চ্যানেলে কেবল সাধারণ তথ্য হিসেবে প্রবেশ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'sql-injection',
          def: {
            en: 'A security vulnerability where malicious SQL commands are inserted into data-entry fields, manipulating the backend database query structure.',
            bn: 'একটি নিরাপত্তা দুর্বলতা যেখানে ইনপুট ফিল্ডে ক্ষতিকর এসকিউএল কোড প্রবেশ করিয়ে ব্যাকএন্ড ডেটাবেসের কোয়েরির গঠন বদলে ফেলা হয়।'
          }
        },
        {
          term: 'parameterized-query',
          def: {
            en: 'A database programming technique where SQL code is pre-compiled with positional placeholders ($1, ?, :param) and values are bound separately as inert literals.',
            bn: 'একটি ডেটাবেস প্রোগ্রামিং কৌশল যেখানে এসকিউএল কোড আগে থেকেই স্থানধারক ($1, ?) দিয়ে তৈরি থাকে এবং ডেটা সম্পূর্ণ পৃথকভাবে যুক্ত হয়।'
          }
        },
        {
          term: 'blind-sqli',
          def: {
            en: 'An injection technique where the application displays no database errors, but attackers extract records bit-by-bit using boolean true/false conditions or time delays.',
            bn: 'এমন এক ইনজেকশন কৌশল যেখানে স্ক্রিনে কোনো ত্রুটি না দেখা গেলেও আক্রমণকারী বুলিয়ান সত্য/মিথ্যা বা সময়ের বিলম্ব ঘটিয়ে তথ্য বের করে আনে।'
          }
        },
        {
          term: 'second-order-sqli',
          def: {
            en: 'An attack where a malicious payload is stored safely into a database via a parameterized query, but later detonates when read and concatenated by a secondary query.',
            bn: 'এমন এক আক্রমণ যেখানে ক্ষতিকর কোড প্রথমবারে নিরাপদে ডেটাবেসে জমা হয়, কিন্তু পরবর্তীতে অন্য কোনো কোড তা কনক্যাটেনেশনের মাধ্যমে চালানোর সময় বিস্ফোরিত হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'security'
    },
    {
      type: 'heading',
      id: 'concatenation-vs-parameterization',
      text: {
        en: 'Vulnerable Concatenation vs Immune Parameterization',
        bn: 'ঝুঁকিপূর্ণ কনক্যাটেনেশন বনাম সুরক্ষিত প্যারামিটারাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Examining different query building approaches reveals why string escaping repeatedly fails while protocol-level parameterization remains completely unbreakable.',
        bn: 'বিভিন্ন কোয়েরি তৈরির পদ্ধতি পর্যালোচনা করলেই বোঝা যায় কেন স্ট্রিং এসকেপিং বারবার ব্যর্থ হয় অথচ প্রোটোকল স্তরের প্যারামিটারাইজেশন সম্পূর্ণ অভেদ্য থাকে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Implementation Strategy', bn: 'বাস্তবায়ন কৌশল' },
        { en: 'Query Construction Pattern', bn: 'কোয়েরি তৈরির ধরন' },
        { en: 'Vulnerability Risk Level', bn: 'ঝুঁকির মাত্রা' },
        { en: 'Root Cause of Exploitation or Immunity', bn: 'ব্যর্থতা বা সুরক্ষার মূল কারণ' }
      ],
      rows: [
        [
          { en: 'String Concatenation', bn: 'স্ট্রিং কনক্যাটেনেশন' },
          { en: 'SELECT * FROM users WHERE id = \' + input', bn: 'SELECT * FROM users WHERE id = \' + input' },
          { en: 'Extreme: 100% exploitable by quotes and comment tokens', bn: 'চরম ঝুঁকি: কোটেশন দিয়ে ১০০% শোষণযোগ্য' },
          { en: 'Data bytes enter parser directly as grammar instructions', bn: 'ডেটা সরাসরি ডেটাবেস পার্সারে কোড বা ব্যাকরণ হিসেবে ঢোকে' }
        ],
        [
          { en: 'Manual String Escaping', bn: 'ম্যানুয়াল স্ট্রিং এসকেপিং' },
          { en: 'SELECT * FROM users WHERE id = \' + escape(input)', bn: 'SELECT * FROM users WHERE id = \' + escape(input)' },
          { en: 'High: fails on multi-byte encodings and numeric parameters', bn: 'উচ্চ ঝুঁকি: মাল্টি-বাইট এনকোডিং বা সংখ্যায় ব্যর্থ হয়' },
          { en: 'Escaping treats symptoms; numeric fields need no quotes to inject', bn: 'এসকেপিং উপসর্গ সারায়; সংখ্যার ফিল্ডে কোটেশন ছাড়াই কোড চলে' }
        ],
        [
          { en: 'Parameterized Queries', bn: 'প্যারামিটারাইজড কোয়েরি' },
          { en: 'SELECT * FROM users WHERE id = $1, [input]', bn: 'SELECT * FROM users WHERE id = $1, [input]' },
          { en: 'Zero: mathematically immune to syntax alteration', bn: 'শূন্য ঝুঁকি: ব্যাকরণ পরিবর্তনের কোনো সুযোগ নেই' },
          { en: 'SQL template compiles first; values bound as inert literals', bn: 'কোয়েরির ছাঁচ আগে তৈরি হয়; ডেটা কেবল তথ্য হিসেবে প্রবেশ করে' }
        ],
        [
          { en: 'ORM Raw Query Escape Hatches', bn: 'ওআরএম র কোয়েরি হ্যাচ' },
          { en: 'prisma.$queryRawUnsafe(`SELECT ... ${input}`)', bn: 'prisma.$queryRawUnsafe(`SELECT ... ${input}`)' },
          { en: 'Extreme: bypasses all ORM type-safety mechanisms', bn: 'চরম ঝুঁকি: ওআরএম-এর সমস্ত টাইপ সেফটি নষ্ট করে' },
          { en: 'Developers mistakenly assume ORMs protect un-parameterized raw calls', bn: 'ডেভেলপাররা ভুল করে ভাবেন ওআরএম র কোডকেও সুরক্ষিত রাখে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-sqli-defense-code',
      text: {
        en: 'Executable SQL Injection and Parameterized Defense Simulation',
        bn: 'এসকিউএল ইনজেকশন ও প্যারামিটারাইজড ডিফেন্সের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program contrasts vulnerable string concatenation with parameterized prepared statements, demonstrating why parameterized queries completely neutralize attack payloads.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ঝুঁকিপূর্ণ স্ট্রিং কনক্যাটেনেশন এবং সুরক্ষিত প্যারামিটারাইজড স্টেটমেন্টের তুলনা করে দেখায় কীভাবে প্যারামিটারাইজেশন আক্রমণ সম্পূর্ণ নিষ্ক্রিয় করে দেয়।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Unsafe Concatenation vs Safe Parameterization

interface QueryResult {
  sqlText: string;
  syntaxExploited: boolean;
  recordsExfiltrated: number;
}

// 1. Vulnerable implementation: String Concatenation
function runUnsafeQuery(userInput: string): QueryResult {
  const query = "SELECT * FROM users WHERE email = '" + userInput + "'";

  // If payload contains quote and OR operator, syntax gets hijacked
  const syntaxExploited = query.includes("' OR ") || query.includes("--");
  const recordsExfiltrated = syntaxExploited ? 100 : 0;

  return {
    sqlText: query,
    syntaxExploited,
    recordsExfiltrated
  };
}

// 2. Secure implementation: Parameterized Query
function runParameterizedQuery(userInput: string): QueryResult {
  // Query template is fixed and pre-compiled
  const queryTemplate = 'SELECT * FROM users WHERE email = $1';
  const boundParameters = [userInput];

  // Parameters are bound as raw literal values, never parsed as SQL grammar
  const syntaxExploited = false;
  const recordsExfiltrated = userInput === 'admin@example.com' ? 1 : 0;

  return {
    sqlText: queryTemplate + ' [Params: ' + boundParameters[0] + ']',
    syntaxExploited,
    recordsExfiltrated
  };
}

const attackPayload = "admin@example.com' OR 1=1 --";

const unsafeAttempt = runUnsafeQuery(attackPayload);
const safeAttempt = runParameterizedQuery(attackPayload);

console.log('Unsafe query records leaked:', unsafeAttempt.recordsExfiltrated);
console.log('Safe parameterized records matched:', safeAttempt.recordsExfiltrated);
console.log('Parameterized syntax modified:', safeAttempt.syntaxExploited);

// prints: Unsafe query records leaked: 100
// prints: Safe parameterized records matched: 0
// prints: Parameterized syntax modified: false`
    },
    {
      type: 'heading',
      id: 'defense-in-depth-sqli',
      text: {
        en: 'Defense-in-Depth: Least Privilege and Error Hygiene',
        bn: 'বহুস্তরী নিরাপত্তা: ন্যূনতম অধিকার এবং এরর সচেতনতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While parameterized queries are the primary defense, enterprise systems implement complementary layers of defense-in-depth. Database accounts utilized by web applications must enforce the Principle of Least Privilege: granting SELECT, INSERT, and UPDATE capabilities on necessary tables while completely stripping administrative privileges such as DROP, ALTER, and GRANT. Furthermore, strict error hygiene must prevent raw database driver error messages from leaking into public HTTP responses. Attackers utilize database syntax error traces to enumerate table schemas, column names, and software versions.',
        bn: 'প্যারামিটারাইজড কোয়েরি প্রধান প্রতিরক্ষা হলেও এন্টারপ্রাইজ সিস্টেমে বহুস্তরী নিরাপত্তা (Defense-in-Depth) নিশ্চিত করতে হয়। অ্যাপ্লিকেশন যে ডেটাবেস ব্যবহারকারী দিয়ে সংযুক্ত হয়, তাকে কেবল প্রয়োজনীয় টেবিলে SELECT, INSERT এবং UPDATE করার অনুমতি দিতে হবে; কোনোভাবেই DROP, ALTER বা GRANT এর মতো প্রশাসনিক ক্ষমতা দেওয়া যাবে না। তাছাড়া ওয়েবসাইটের এরর পেজে কখনোই ডেটাবেসের সরাসরি এরর বা স্ট্যাক ট্রেস দেখানো যাবে না। আক্রমণকারীরা এসব ত্রুটির বার্তা দেখেই ডেটাবেসের টেবিল, কলামের নাম ও ব্যবহৃত সফটওয়্যারের সংস্করণ জেনে ফেলে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Parameterize every query: Separate SQL grammar from untrusted data using prepared statement placeholders ($1, ?).',
          bn: 'প্রতিটি কোয়েরি প্যারামিটারাইজ করুন: স্থানধারক ($1, ?) ব্যবহার করে এসকিউএল কোড ও ব্যবহারকারীর তথ্য আলাদা রাখুন।'
        },
        {
          en: 'Never rely on escaping: Blacklists and manual character escaping fail against multi-byte encodings and numeric fields.',
          bn: 'এসকেপিংয়ের ওপর নির্ভর করবেন না: ব্লকলিস্ট বা অক্ষর পরিবর্তন পদ্ধতি জটিল এনকোডিং বা সংখ্যার ফিল্ডে সহজেই ব্যর্থ হয়।'
        },
        {
          en: 'Beware ORM raw escape hatches: Tools like Prisma and TypeORM are only safe when raw queries use parameterized tagged templates.',
          bn: 'ওআরএম-এর র কুয়েরি ব্যবহারে সতর্ক থাকুন: প্রিজমা বা টাইপ-ওআরএম তখনই নিরাপদ যখন তাদের র কুয়েরিতে প্যারামিটার ব্যবহার করা হয়।'
        },
        {
          en: 'Enforce database least privilege: Web application database users should never possess DROP, ALTER, or superuser permissions.',
          bn: 'ডেটাবেসে ন্যূনতম অধিকার দিন: ওয়েব অ্যাপ্লিকেশনের ডেটাবেস ইউজারকে কখনো টেবিল মোছা (DROP) বা কাঠামোগত পরিবর্তনের ক্ষমতা দেবেন না।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-script-tribunal',
    tech: 'security-fundamentals',
    title: {
      en: 'Cross-Site Scripting (XSS) — Defending Client Execution Contexts',
      bn: 'ক্রস-সাইট স্ক্রিপ্টিং (XSS): ক্লায়েন্ট এক্সিকিউশন কনটেক্সট সুরক্ষা'
    }
  },
  exercises: [
    {
      id: 'needle-ex1',
      kind: 'mcq',
      topic: 'parameterized-queries-mechanism',
      question: {
        en: 'Why does passing user input as a parameter in a prepared statement (such as using $1 or ?) completely prevent SQL injection attacks?',
        bn: 'প্রিপেয়ার্ড স্টেটমেন্টে স্থানধারক (যেমন $1 বা ?) দিয়ে ইনপুট পাঠালে কেন এসকিউএল ইনজেকশন আক্রমণ সম্পূর্ণ অসম্ভব হয়ে যায়?'
      },
      options: [
        {
          en: 'The database parses and compiles the SQL query structure before binding user input, treating parameters strictly as literal values that cannot alter query grammar',
          bn: 'ডেটাবেস ব্যবহারকারীর ইনপুট নেওয়ার আগেই কোয়েরির ব্যাকরণ ও গঠন কম্পাইল করে নেয়, ফলে পাঠানো মান কেবল সাধারণ ডেটা হিসেবে থাকে এবং কোডের কোনো পরিবর্তন করতে পারে না'
        },
        {
          en: 'Prepared statements automatically delete all punctuation marks from the English language',
          bn: 'প্রিপেয়ার্ড স্টেটমেন্ট ইংরেজি ভাষার সমস্ত বিরামচিহ্ন নিজে থেকেই মুছে ফেলে'
        },
        {
          en: 'Because prepared statements encrypt the entire hard drive on every database query',
          bn: 'কারণ প্রিপেয়ার্ড স্টেটমেন্ট প্রতিবার কোয়েরি চালানোর সময় পুরো হার্ড ড্রাইভ এনক্রিপ্ট করে'
        },
        {
          en: 'Parameters reduce database memory usage to exactly zero bytes',
          bn: 'প্যারামিটার ব্যবহার করলে ডেটাবেসের মেমরি খরচ শূন্য বাইটে নেমে আসে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The grammar is parsed first. The values arrive second. They travel in separate pipes.',
        bn: 'ব্যাকরণ আগেই তৈরি হয়ে যায়; ডেটা পরে আসে। দুটো ভিন্ন পাইপ দিয়ে ভ্রমণ করে।'
      },
      explanation: {
        en: 'By separating SQL compilation from parameter binding, data can never cross the architectural boundary into executable syntax.',
        bn: 'এসকিউএল কোড তৈরি এবং ডেটা পাঠানো আলাদা হওয়ায় কোনো তথ্য কখনোই নির্দেশ বা কোড হিসেবে কার্যকর হতে পারে না।'
      }
    },
    {
      id: 'needle-ex2',
      kind: 'mcq',
      topic: 'escaping-failure-modes',
      question: {
        en: 'Why is manual string escaping (such as wrapping quotes or escaping apostrophes) considered an insufficient defense against SQL injection?',
        bn: 'ম্যানুয়াল স্ট্রিং এসকেপিং (যেমন কোটেশন আটকে দেওয়া বা অ্যাপোস্ট্রফি পরিবর্তন করা) কেন এসকিউএল ইনজেকশনের বিরুদ্ধে অপর্যাপ্ত?'
      },
      options: [
        {
          en: 'Escaping treats symptoms rather than the root cause; numeric inputs require no quotes to inject syntax, and character-encoding tricks can bypass string filters',
          bn: 'এসকেপিং সমস্যার মূলে আঘাত করে না; সংখ্যার ইনপুটে কোনো কোটেশন ছাড়াই কোড চালানো যায় এবং জটিল এনকোডিং কৌশলে ফিল্টার ফাঁকি দেওয়া সম্ভব'
        },
        {
          en: 'Escaping doubles the physical weight of server computer racks',
          bn: 'এসকেপিং ব্যবহার করলে সার্ভারের কম্পিউটার র‍্যাকের ওজন দ্বিগুণ হয়ে যায়'
        },
        {
          en: 'Because SQL databases crash whenever an escaped string contains letters',
          bn: 'কারণ এসকেপ করা লেখায় কোনো অক্ষর থাকলে ডেটাবেস সার্ভার ক্র্যাশ করে'
        },
        {
          en: 'Escaping was outlawed by the International Standards Organization in 1999',
          bn: 'কারণ ১৯৯৯ সালে আন্তর্জাতিক মান সংস্থা এসকেপিং নিষিদ্ধ করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider: SELECT * FROM items WHERE category_id = 5 OR 1=1. No quotes were used anywhere in the payload.',
        bn: 'লক্ষ্য করুন: সংখ্যার ফিল্ডে কোনো কোটেশন চিহ্ন ছাড়াই ৫ OR ১=১ যোগ করা সম্ভব; সেখানে কোটেশন আটকানো কোনো কাজেই আসে না।'
      },
      explanation: {
        en: 'Numeric injection contexts and character-set conversion vulnerabilities allow attackers to bypass sanitizers without triggering escaping.',
        bn: 'সংখ্যার ইনপুট এবং এনকোডিং বিভ্রান্তির কারণে এসকেপিং কোনো পূর্ণাঙ্গ ও নির্ভরযোগ্য নিরাপত্তা দিতে পারে না।'
      }
    },
    {
      id: 'needle-ex3',
      kind: 'mcq',
      topic: 'second-order-sql-injection',
      question: {
        en: 'What sequence of events characterizes a Second-Order SQL Injection vulnerability?',
        bn: 'সেকেন্ড-অর্ডার এসকিউএল ইনজেকশন দুর্বলতার ক্ষেত্রে কোন ধারাবাহিক ঘটনাগুলো ঘটে?'
      },
      options: [
        {
          en: 'A malicious payload is safely stored in the database via a parameterized query, but later read and concatenated into a separate, un-parameterized SQL query by a different subsystem',
          bn: 'একটি ক্ষতিকর কোড প্রথমবার প্যারামিটারাইজড কোয়েরির মাধ্যমে নিরাপদে ডেটাবেসে জমা হয়, কিন্তু পরবর্তীতে অন্য কোনো কোড তা কনক্যাটেনেশনের মাধ্যমে চালানোর সময় আক্রমণটি ঘটে'
        },
        {
          en: 'An attacker uses two computers simultaneously to submit the same form',
          bn: 'আক্রমণকারী একসাথে দুটি কম্পিউটার ব্যবহার করে একই ফর্ম জমা দেয়'
        },
        {
          en: 'The database server crashes twice in succession within two seconds',
          bn: 'ডেটাবেস সার্ভার দুই সেকেন্ডের মধ্যে পরপর দুইবার ক্র্যাশ করে'
        },
        {
          en: 'The web application sends two identical receipts to the user email',
          bn: 'অ্যাপ্লিকেশনটি ব্যবহারকারীর ইমেইলে দুটি একই ধরনের রসিদ পাঠিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The payload is dormant on arrival. It detonates only when another developer queries it with string concatenation.',
        bn: 'ডেটাবেসে ঢোকার সময় কোনো ক্ষতি হয় না; অন্য কোনো কোড যখন আবার স্ট্রিং জোড়া লাগিয়ে এটি ব্যবহার করে তখন ক্ষতি হয়।'
      },
      explanation: {
        en: 'Second-order injection demonstrates why developers must parameterize ALL queries, including queries operating on internal database rows.',
        bn: 'সেকেন্ড-অর্ডার ইনজেকশন প্রমাণ করে যে ডেটাবেসের অভ্যন্তরীণ তথ্য ব্যবহারের সময়ও সব কোয়েরি প্যারামিটারাইজ করা আবশ্যক।'
      }
    },
    {
      id: 'needle-ex4',
      kind: 'mcq',
      topic: 'least-privilege-database-permissions',
      question: {
        en: 'How does enforcing the Principle of Least Privilege on database user accounts mitigate the impact of an accidental SQL injection vulnerability?',
        bn: 'ডেটাবেস ব্যবহারকারীর ওপর "ন্যূনতম অধিকার নীতি" প্রয়োগ করলে অসাবধানতাবশত কোনো এসকিউএল ইনজেকশন দুর্বলতা তৈরি হলেও ক্ষতি কীভাবে কমে যায়?'
      },
      options: [
        {
          en: 'Restricting web application database users to SELECT, INSERT, and UPDATE prevents an attacker from executing destructive DROP TABLE, ALTER, or administrative commands',
          bn: 'ওয়েব ব্যবহারকারীকে কেবল SELECT, INSERT ও UPDATE-এর অনুমতি দিলে আক্রমণকারী চাইলেও সম্পূর্ণ টেবিল মুছে ফেলা (DROP TABLE) বা ডেটাবেস নষ্ট করার কমান্ড চালাতে পারে না'
        },
        {
          en: 'It causes the database CPU speed to permanently accelerate by 100 percent',
          bn: 'এটি ডেটাবেসের প্রসেসরের গতি স্থায়ীভাবে ১০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It turns all database tables into read-only PDF document files',
          bn: 'এটি সমস্ত ডেটাবেস টেবিলকে শুধু পড়ার উপযোগী পিডিএফ ফাইলে রূপান্তর করে'
        },
        {
          en: 'Least privilege prevents users from registering duplicate email accounts',
          bn: 'এটি ব্যবহারকারীকে একাধিক অ্যাকাউন্ট খোলা থেকে বিরত রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the database connection user cannot DROP tables, an injected DROP TABLE command simply fails.',
        bn: 'কানেকশন ইউজারের যদি টেবিল মোছার ক্ষমতাই না থাকে, তবে আক্রমণকারী চাইলেও টেবিল মুছে ফেলতে পারবে না।'
      },
      explanation: {
        en: 'Least privilege limits blast radius: an attacker cannot execute administrative commands if the database connection user lacks the rights.',
        bn: 'ন্যূনতম অধিকার ক্ষতির পরিধি কমিয়ে রাখে: ইউজারের অনুমতি না থাকলে আক্রমণকারী কোনো ধ্বংসাত্মক প্রশাসনিক কমান্ড চালাতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'needle-court-quiz',
    title: {
      en: 'SQL Injection and Parameterized Database Defense Quiz',
      bn: 'এসকিউএল ইনজেকশন ও প্যারামিটারাইজড ডিফেন্স কুইজ'
    },
    questions: [
      {
        id: 'nc-q1',
        kind: 'mcq',
        topic: 'classic-login-bypass-sqli',
        question: {
          en: 'In the classic authentication bypass attack WHERE user = \'admin\' OR 1=1 --\', what role do the double dashes (--) play in the injected query?',
          bn: 'ক্লাসিক লগইন বাইপাস আক্রমণে (WHERE user = \'admin\' OR 1=1 --\') ডাবল ড্যাশ (--) চিহ্নটি কোয়েরিতে কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'They indicate an SQL comment delimiter, instructing the database parser to completely ignore the remainder of the query (such as password checks)',
            bn: 'এটি এসকিউএল কমেন্ট বা মন্তব্যের নির্দেশক, যা ডেটাবেস পার্সারকে কোয়েরির বাকি অংশ (যেমন পাসওয়ার্ড যাচাইয়ের শর্ত) সম্পূর্ণরূপে উপেক্ষা করতে বলে'
          },
          {
            en: 'They instruct the operating system to send an email to the administrator',
            bn: 'এটি অপারেটিং সিস্টেমকে অ্যাডমিনের কাছে একটি ইমেইল পাঠাতে নির্দেশ দেয়'
          },
          {
            en: 'They subtract the number 1 from the total user count in the database',
            bn: 'এটি ডেটাবেস থেকে মোট ব্যবহারকারীর সংখ্যা থেকে ১ কমিয়ে দেয়'
          },
          {
            en: 'They convert the SQL database from MySQL to PostgreSQL in real time',
            bn: 'এটি ডেটাবেসকে সাথে সাথে মাইএসকিউএল থেকে পোস্টগ্রেসকিউএলে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Double-dash is a comment token in SQL standard syntax: everything following it is ignored.',
          bn: 'এসকিউএলে ডাবল ড্যাশ মানে মন্তব্য: এর পরের কোনো লেখাই ডেটাবেস আর পড়ে না।'
        },
        explanation: {
          en: 'Comment delimiters truncate the original developer query, neutralizing subsequent constraints such as AND password = hash.',
          bn: 'কমেন্ট চিহ্ন কোয়েরির পরবর্তী সমস্ত শর্ত (যেমন পাসওয়ার্ড মেলানো) নিষ্ক্রিয় করে লগইন বাইপাস সফল করে তোলে।'
        }
      },
      {
        id: 'nc-q2',
        kind: 'mcq',
        topic: 'orm-raw-query-risks',
        question: {
          en: 'Why do modern web applications using Object-Relational Mappers (ORMs like Prisma or TypeORM) still fall victim to SQL injection vulnerabilities?',
          bn: 'আধুনিক ওআরএম (যেমন Prisma বা TypeORM) ব্যবহার করা সত্ত্বেও কেন অনেক ওয়েবসাইট এসকিউএল ইনজেকশনের শিকার হয়?'
        },
        options: [
          {
            en: 'Developers frequently bypass ORM query builders using raw escape-hatch methods (such as queryRawUnsafe) and directly concatenate untrusted strings into the raw SQL',
            bn: 'ডেভেলপাররা প্রায়শই ওআরএম-এর সাধারণ পদ্ধতির বাইরে গিয়ে র কোয়েরি মেথড (যেমন queryRawUnsafe) ব্যবহার করেন এবং সেখানে ব্যবহারকারীর স্ট্রিং জোড়া লাগান'
          },
          {
            en: 'ORMs were secretly designed to transmit all database records to public pastebins',
            bn: 'ওআরএম সমস্ত ডেটাবেস রেকর্ড স্বয়ংক্রিয়ভাবে ইন্টারনেটে প্রকাশ করার জন্য তৈরি হয়েছিল'
          },
          {
            en: 'Because ORMs only operate on computer monitors manufactured before 2010',
            bn: 'কারণ ওআরএম কেবল ২০১০ সালের আগের মনিটরে কাজ করতে পারে'
          },
          {
            en: 'ORMs convert all text variables into random numbers during execution',
            bn: 'ওআরএম কোড চলার সময় সব টেক্সটকে এলোমেলো সংখ্যায় বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The danger lies in the escape hatches: raw SQL methods that developers use when query builders feel restrictive.',
          bn: 'বিপদ লুকিয়ে থাকে র কোয়েরির মধ্যে: যখন ডেভেলপার সাধারণ ওআরএম মেথড বাদ দিয়ে সরাসরি টেক্সট কোয়েরি লেখেন।'
        },
        explanation: {
          en: 'Raw SQL escape hatches bypass ORM compile-time safety and type validation, reintroducing string concatenation vulnerabilities.',
          bn: 'র কোয়েরি ওআরএম-এর স্বাভাবিক সুরক্ষা ব্যবস্থা পাশ কাটিয়ে স্ট্রিং কনক্যাটেনেশনের ঝুঁকি পুনরায় ফিরিয়ে আনে।'
        }
      },
      {
        id: 'nc-q3',
        kind: 'mcq',
        topic: 'database-error-message-leaks',
        question: {
          en: 'Why must production web servers suppress raw database error messages and stack traces from appearing on public-facing web pages?',
          bn: 'প্রোডাকশন সার্ভারে কেন ডেটাবেসের সরাসরি এরর বার্তা বা স্ট্যাক ট্রেস ব্যবহারকারীর স্ক্রিনে দেখানো নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Error messages leak internal database schemas, column names, driver versions, and syntax snippets, helping attackers refine and automate injection attacks',
            bn: 'ত্রুটির বার্তাগুলো ডেটাবেসের ভেতরের গঠন, টেবিল ও কলামের নাম এবং সফটওয়্যারের সংস্করণ প্রকাশ করে দেয়, যা আক্রমণকারীকে আক্রমণ নিখুঁত করতে সাহায্য করে'
          },
          {
            en: 'Error messages cause the web browser font size to permanently shrink',
            bn: 'ত্রুটির বার্তা দেখালে ব্রাউজারের ফন্ট সাইজ স্থায়ীভাবে ছোট হয়ে যায়'
          },
          {
            en: 'Because web browsers automatically shut down upon receiving error text',
            bn: 'কারণ ত্রুটির বার্তা পেলে ব্রাউজার নিজে থেকেই বন্ধ হয়ে যায়'
          },
          {
            en: 'International copyright law forbids showing database table names on monitors',
            bn: 'কারণ আন্তর্জাতিক আইনে টেবিলের নাম মনিটরে দেখানো সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never give the attacker diagnostic information. Raw errors reveal your exact schema structure.',
          bn: 'আক্রমণকারীকে কোনো তথ্য দেবেন না; সরাসরি এরর বার্তা আপনার ডেটাবেসের গোপন গঠন ফাঁস করে দেয়।'
        },
        explanation: {
          en: 'Error-based SQL injection relies on detailed driver error traces to exfiltrate database contents through error strings.',
          bn: 'এরর-ভিত্তিক এসকিউএল ইনজেকশনে আক্রমণকারী ইচ্ছাকৃত ভুল করে ডেটাবেসের ত্রুটির বার্তার মাধ্যমে ভেতরের তথ্য পড়ে ফেলে।'
        }
      },
      {
        id: 'nc-q4',
        kind: 'mcq',
        topic: 'stored-procedures-and-injection',
        question: {
          en: 'Under what circumstance can a database Stored Procedure still be vulnerable to SQL injection?',
          bn: 'কোন পরিস্থিতিতে ডেটাবেসের একটি স্টোর্ড প্রসিডিউর (Stored Procedure) থাকা সত্ত্বেও তা এসকিউএল ইনজেকশনে আক্রান্ত হতে পারে?'
        },
        options: [
          {
            en: 'If the stored procedure internally constructs dynamic SQL by concatenating parameter strings and executing them via an EXECUTE or EVAL command',
            bn: 'যদি স্টোর্ড প্রসিডিউরের ভেতরে প্যারামিটারগুলোকে সরাসরি স্ট্রিং কনক্যাটেনেশনের মাধ্যমে জোড়া লাগিয়ে ডাইনামিক EXECUTE কমান্ড চালানো হয়'
          },
          {
            en: 'If the stored procedure is executed on a Tuesday or Thursday',
            bn: 'যদি স্টোর্ড প্রসিডিউরটি মঙ্গলবার বা বৃহস্পতিবার চালানো হয়'
          },
          {
            en: 'Because stored procedures consume more than 50 megabytes of network bandwidth',
            bn: 'কারণ স্টোর্ড প্রসিডিউরে ৫০ মেগাবাইটের বেশি ইন্টারনেট খরচ হয়'
          },
          {
            en: 'Stored procedures are always vulnerable regardless of implementation',
            bn: 'সব স্টোর্ড প্রসিডিউরই সবসময় ঝুঁকিপূর্ণ থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dynamic SQL inside a stored procedure is just concatenation in a different location.',
          bn: 'প্রসিডিউরের ভেতরে যদি ডাইনামিক কোয়েরি জোড়া লাগানো হয়, তবে ঝুঁকি একই থাকে।'
        },
        explanation: {
          en: 'Stored procedures only protect against SQL injection when they use static parameterized queries; dynamic internal concatenation reintroduces vulnerability.',
          bn: 'স্টোর্ড প্রসিডিউর কেবল তখনই সুরক্ষা দেয় যখন তা প্যারামিটারাইজড হয়; ভেতরে ডাইনামিক স্ট্রিং জোড়া লাগালে ঝুঁকি থেকে যায়।'
        }
      }
    ]
  }
};
