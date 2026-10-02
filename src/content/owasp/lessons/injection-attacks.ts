import type { Lesson } from '../../../lib/types';

export const InjectionAttacksLesson: Lesson = {
  slug: 'injection-attacks',
  tech: 'owasp',
  title: {
    en: 'Injection Attacks: SQL Injection, OS Commands & Parameterized Defense',
    bn: 'ইনজেকশন আক্রমণ: এসকিউএল ইনজেকশন, ওএস কমান্ড ও প্যারামিটারাইজড প্রতিরক্ষা'
  },
  summary: {
    en: 'Master the mechanics of injection vulnerabilities (OWASP A03:2021) and defensive secure query architecture. Understand how mixing untrusted input with interpreter command strings allows attackers to hijack database Abstract Syntax Trees (AST) or execute unauthorized shell binaries. Explore prepared statements, parameterized placeholding, and input validation. Inspect an executable Node.js query engine evaluating 4 database queries: 3 parameterized queries execute safely, while 1 raw string concatenation query suffers a catastrophic SQL injection leak.',
    bn: 'ইনজেকশন দুর্বলতার (OWASP A03:2021) অভ্যন্তরীণ মেকানিজম এবং সুরক্ষিত কোয়েরি আর্কিটেকচার আয়ত্ত করুন। ইন্টারপ্রেটার কমান্ডের সাথে ব্যবহারকারীর ইনপুট মিশিয়ে দিলে কীভাবে আক্রমণকারীরা ডাটাবেজের সিনট্যাক্স ট্রি (AST) বদলে দেয় বা ক্ষতিকর শেল কমান্ড চালায় তা শিখুন। প্রিপেয়ার্ড স্টেটমেন্ট, প্যারামিটারাইজড প্লেসহোল্ডিং এবং ইনপুট ভ্যালিডেশন বিশ্লেষণ করুন। ৪ টি ডাটাবেজ কোয়েরি মূল্যায়নকারী একটি কার্যকর Node.js ইঞ্জিন পরীক্ষা করুন: ৩ টি প্যারামিটারাইজড কোয়েরি নিরাপদে কার্যকর হয়, আর ১ টি সরাসরি স্ট্রিং জোড়া লাগানো কোয়েরি মারাত্মক এসকিউএল ইনজেকশনের শিকার হয়।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'root-cause-of-injection',
      text: {
        en: 'The Root Cause of Injection: Conflating Code with Untrusted Data',
        bn: 'ইনজেকশনের মূল কারণ: কোডের সাথে অনিয়ন্ত্রিত ইনপুটের সংমিশ্রণ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you write software, you must never mix trusted program code with untrusted user input. Injection flaws occur whenever your application takes user input and pastes it directly into command strings. An interpreter cannot tell where your program logic ends and where malicious input begins. This confusion allows attackers to alter query structures or execute operating system commands.',
        bn: 'সফটওয়্যার তৈরির সময় আপনাকে অবশ্যই নির্ভরযোগ্য প্রোগ্রাম কোডের সাথে ব্যবহারকারীর অনিয়ন্ত্রিত ইনপুট মেশানো থেকে বিরত থাকতে হবে। ইনজেকশন দুর্বলতা তখনই ঘটে যখন আপনার অ্যাপ্লিকেশন ব্যবহারকারীর ইনপুট নিয়ে সরাসরি কমান্ড স্ট্রিংয়ের সাথে জোড়া লাগিয়ে দেয়। ইন্টারপ্রেটার বুঝতে পারে না আপনার প্রোগ্রামের আসল কোড কোথায় শেষ হয়েছে আর হ্যাকারের ক্ষতিকর ইনপুট কোথা থেকে শুরু হয়েছে। এই বিভ্রান্তির কারণে আক্রমণকারীরা কোয়েরির গঠন বদলে দেয় বা অপারেটিং সিস্টেমের ক্ষতিকর কমান্ড চালিয়ে ফেলে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In classic SQL injection (SQLi), an attacker enters crafted characters like single quotes, dashes, or boolean statements such as "1 OR 1=1". When concatenated into raw SQL, these characters alter the structure of the database Abstract Syntax Tree (AST). Instead of checking a single record, the query logic forces the database to evaluate the WHERE clause as unconditionally true, dumping private tables or granting unauthorized access.',
        bn: 'ঐতিহ্যবাহী এসকিউএল ইনজেকশনে আক্রমণকারী একক কোটেশন বা "1 OR 1=1" এর মতো বুলিয়ান লজিক প্রবেশ করায়। স্ট্রিং কনক্যাটেনেশনের কারণে এই অক্ষরগুলো ডাটাবেজের সিনট্যাক্স ট্রির গঠন সম্পূর্ণ বদলে দেয়। নির্দিষ্ট ইউজারের আইডি খোঁজার বদলে পুরো WHERE ক্লজটি সত্যে রূপান্তরিত হয়ে যায়, ফলে এক ক্লিকেই পুরো ডাটাবেজ টেবিলের সমস্ত গোপন তথ্য ফাঁস হয়ে যায়।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Two-Phase Prepared Statements',
            bn: '১. দুই-ধাপের প্রিপেয়ার্ড স্টেটমেন্ট'
          },
          text: {
            en: 'Phase 1 sends the SQL template to the database engine with parameter placeholders (? or $1). The database parses, optimizes, and compiles the SQL syntax tree before any user data arrives.',
            bn: 'প্রথম ধাপে ডাটাবেজ ইঞ্জিনে প্লেসহোল্ডার (? বা $1) সহ কোয়েরির কাঠামো পাঠানো হয়। কোনো ডাটা পৌঁছানোর আগেই ডাটাবেজ সিনট্যাক্স ট্রি কম্পাইল ও অপ্টিমাইজ করে নেয়।'
          },
        },
        {
          title: {
            en: '2. Wire Protocol Value Binding',
            bn: '২. ওয়্যার প্রোটোকল ভ্যালু বাইন্ডিং'
          },
          text: {
            en: 'Phase 2 sends user input across the network protocol strictly as data literals. Even if the input contains quotes, semicolons, or SQL commands, the precompiled query tree treats it purely as text, never code.',
            bn: 'দ্বিতীয় ধাপে ব্যবহারকারীর ইনপুট নেটওয়ার্ক প্রোটোকলের মাধ্যমে খাঁটি ডাটা হিসেবে পাঠানো হয়। ইনপুটে কোটেশন বা এসকিউএল কমান্ড থাকলেও কম্পাইল করা ইঞ্জিন তাকে কেবল সাধারণ টেক্সট হিসেবে গণ্য করে।'
          },
        },
        {
          title: {
            en: '3. Safe Subprocess Execution',
            bn: '৩. নিরাপদ সাবপ্রসেস চালনা'
          },
          text: {
            en: 'Never use child_process.exec() which spawns a system shell (/bin/sh). Always use child_process.execFile() or spawn() with argument arrays so the shell cannot interpret command separators like semicolons or pipes.',
            bn: 'কখনোই child_process.exec() ব্যবহার করবেন না যা সিস্টেম শেল চালু করে। সর্বদা আর্গুমেন্ট অ্যারে সহ execFile() বা spawn() ব্যবহার করুন যাতে সেমিকোলন বা পাইপ দিয়ে দ্বিতীয় কোনো কমান্ড চালানো না যায়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'SQL Query Evaluation: 3 Parameterized Queries vs 1 Concatenated Injection',
        bn: 'এসকিউএল কোয়েরি নিরীক্ষা: ৩ টি প্যারামিটারাইজড কোয়েরি বনাম ১ টি ইনজেকশন আক্রমণ'
      },
      svg: `<svg viewBox="0 0 840 430" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Query security evaluation showing 3 parameterized queries passing and 1 concatenated query failing">
  <rect width="840" height="430" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DATABASE QUERY EXECUTION & INJECTION AUDIT</text>
  
  <!-- Left Side: Inbound Queries -->
  <g transform="translate(35, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#0284c7"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">4 DATABASE QUERIES EVALUATED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">Query 1: User Lookup by ID</text>
      <text x="12" y="36" fill="#ffffff" font-size="8">SELECT * FROM users WHERE id = ?</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Param: "42" (Mode: Prepared Statement)</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">Query 2: Product Search by Category</text>
      <text x="12" y="104" fill="#ffffff" font-size="8">SELECT * FROM products WHERE category = ?</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Param: "electronics" (Mode: Prepared Statement)</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">Query 3: User Role Verification</text>
      <text x="12" y="172" fill="#ffffff" font-size="8">SELECT * FROM permissions WHERE role = ?</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Param: "editor" (Mode: Prepared Statement)</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">Query 4: Legacy User Auth Query [VULNERABLE]</text>
      <text x="12" y="240" fill="#ffffff" font-size="8">SELECT * FROM accounts WHERE id = 1 OR 1=1</text>
      <text x="12" y="254" fill="#fecaca" font-size="7.5">Mode: Raw String Concatenation with Attacker Payload</text>
    </g>
  </g>
  
  <!-- Right Side: Engine Execution Verdicts -->
  <g transform="translate(435, 55)">
    <rect width="370" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <rect width="370" height="32" rx="8" fill="#059669"/>
    <text x="185" y="21" fill="#ffffff" font-size="11" font-weight="bold" text-anchor="middle">EXECUTION VERDICTS: 3 SAFE | 1 PWNED</text>
    
    <g transform="translate(12, 45)">
      <rect width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="20" fill="#6ee7b7" font-size="9" font-weight="bold">1. PASSED [✓] (Parameter Bound)</text>
      <text x="12" y="38" fill="#34d399" font-size="8">Precompiled SQL AST remains strictly immutable</text>
      <text x="12" y="50" fill="#a7f3d0" font-size="7.5">Result: Returns single user record 42</text>
      
      <rect y="68" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="88" fill="#6ee7b7" font-size="9" font-weight="bold">2. PASSED [✓] (Parameter Bound)</text>
      <text x="12" y="106" fill="#34d399" font-size="8">String quotes cannot escape placeholder context</text>
      <text x="12" y="118" fill="#a7f3d0" font-size="7.5">Result: Returns matching electronics catalog items</text>
      
      <rect y="136" width="346" height="58" rx="5" fill="#064e3b" stroke="#10b981"/>
      <text x="12" y="156" fill="#6ee7b7" font-size="9" font-weight="bold">3. PASSED [✓] (Parameter Bound)</text>
      <text x="12" y="174" fill="#34d399" font-size="8">Literal data cannot modify permissions syntax</text>
      <text x="12" y="186" fill="#a7f3d0" font-size="7.5">Result: Authenticates editor privileges safely</text>
      
      <rect y="204" width="346" height="68" rx="5" fill="#450a0a" stroke="#ef4444"/>
      <text x="12" y="224" fill="#fca5a5" font-size="9" font-weight="bold">4. INJECTION PWNED [✗ CRITICAL BREACH]</text>
      <text x="12" y="242" fill="#ef4444" font-size="8">SQL grammar hijacked: WHERE clause evaluates TRUE</text>
      <text x="12" y="256" fill="#fecaca" font-size="7.5">Result: Leaks all password hashes and database rows!</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Separating SQL grammar compilation from parameter transmission guarantees complete immunity to SQL injection</text>
</svg>`,
      caption: {
        en: 'The query evaluation engine inspects 4 database queries: 3 parameterized prepared queries execute safely, while 1 raw concatenated query suffers a critical SQL injection leak.',
        bn: 'কোয়েরি নিরীক্ষা ইঞ্জিন ৪ টি ডাটাবেজ কোয়েরি পরীক্ষা করে: ৩ টি প্যারামিটারাইজড কোয়েরি নিরাপদে কার্যকর হয়, আর ১ টি সরাসরি যুক্ত করা কোয়েরি মারাত্মক ইনজেকশনের কবলে পড়ে।'
      },
    },
    {
      type: 'heading',
      id: 'parameterized-query-engine-code',
      text: {
        en: 'Building a Parameterized Query & SQL Injection Defense Simulator in Node.js',
        bn: 'Node.js-এ প্যারামিটারাইজড কোয়েরি ও এসকিউএল ইনজেকশন প্রতিরোধ সিমুলেটর তৈরি'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'injection-defense-engine.js',
      code: `// Deterministic Database Query Security & Parameterized Defense Engine
class DatabaseQueryAuditor {
  // Evaluates database query strategy and detects SQL syntax alteration
  execute(queryConfig) {
    if (queryConfig.mode === 'PARAMETERIZED') {
      return {
        queryId: queryConfig.id,
        sqlTemplate: queryConfig.template,
        boundParameter: queryConfig.param,
        verdict: 'PASSED',
        securityLevel: 'SECURE',
        mechanism: 'Prepared statement binds value as literal data over wire protocol'
      };
    } else {
      // Unsafe string concatenation mode
      const renderedSql = queryConfig.template.replace('{INPUT}', queryConfig.param);
      const isSyntaxHijacked = /OR\\s+1\\s*=\\s*1|DROP\\s+TABLE|--/i.test(queryConfig.param);

      return {
        queryId: queryConfig.id,
        sqlTemplate: renderedSql,
        boundParameter: queryConfig.param,
        verdict: isSyntaxHijacked ? 'INJECTION_PWNED' : 'UNSAFE_CONCAT',
        securityLevel: 'CRITICAL_RISK',
        mechanism: 'SQL AST modified: boolean evaluation matches all rows unconditionally'
      };
    }
  }
}

const auditor = new DatabaseQueryAuditor();

// 4 distinct database queries evaluated for injection resilience
const queriesToAudit = [
  { id: 'Q1', template: 'SELECT * FROM users WHERE id = ?', param: '42', mode: 'PARAMETERIZED' },
  { id: 'Q2', template: 'SELECT * FROM products WHERE category = ?', param: 'electronics', mode: 'PARAMETERIZED' },
  { id: 'Q3', template: 'SELECT * FROM permissions WHERE role = ?', param: 'editor', mode: 'PARAMETERIZED' },
  { id: 'Q4', template: 'SELECT * FROM accounts WHERE id = {INPUT}', param: '1 OR 1=1', mode: 'CONCATENATED' }
];

let safeQueriesCount = 0;
let vulnerableQueriesCount = 0;

console.log('=== Database Query Security & Injection Audit ===\\n');
queriesToAudit.forEach((q, idx) => {
  const result = auditor.execute(q);

  if (result.verdict === 'PASSED') {
    safeQueriesCount++;
    console.log(\`[\${idx + 1}] SECURE [✓]: \${result.queryId}\`);
    console.log(\`    SQL:       \${result.sqlTemplate}\`);
    console.log(\`    Parameter: \${result.boundParameter}\`);
    console.log(\`    Status:    \${result.verdict} (\${result.mechanism})\\n\`);
  } else {
    vulnerableQueriesCount++;
    console.log(\`[\${idx + 1}] PWNED  [✗]: \${result.queryId}\`);
    console.log(\`    SQL:       \${result.sqlTemplate}\`);
    console.log(\`    Status:    \${result.verdict} (\${result.mechanism})\\n\`);
  }
});

console.log('=== Query Security Audit Summary ===');
console.log('Total Queries Evaluated:    ', queriesToAudit.length);
console.log('Safely Parameterized (Pass):', safeQueriesCount);
console.log('Vulnerable Injections (Fail):', vulnerableQueriesCount);`,
      caption: {
        en: 'The query auditor evaluates 4 queries: 3 parameterized queries pass cleanly, while 1 raw string concatenation query suffers an SQL injection breach.',
        bn: 'কোয়েরি অডিটর ৪ টি কোয়েরি মূল্যায়ন করে: ৩ টি প্যারামিটারাইজড কোয়েরি সফলভাবে উত্তীর্ণ হয়, আর ১ টি সরাসরি কনক্যাটেনেটেড কোয়েরি এসকিউএল ইনজেকশনের ফাঁদে পড়ে।'
      },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'ORMs Do Not Magically Eliminate SQL Injection',
        bn: 'ওআরএম (ORM) ব্যবহার করলেই স্বয়ংক্রিয়ভাবে ইনজেকশন দূর হয় না'
      },
      text: {
        en: 'Modern developers often believe that using an Object-Relational Mapper (such as Prisma, Sequelize, or TypeORM) provides total immunity from SQL injection. While standard ORM helper functions (e.g. user.findUnique({ where: { id } })) use prepared statements under the hood, almost every ORM provides raw query escape hatches (such as prisma.$queryRawUnsafe() or sequelize.query()). If developers concatenate strings inside raw queries, the application remains fully vulnerable to SQL injection.',
        bn: 'অনেকে মনে করেন প্রিজমা (Prisma) বা সিক্যুইলাইজের (Sequelize) মতো ওআরএম ব্যবহার করলে এসকিউএল ইনজেকশন অসম্ভব। ওআরএমের সাধারণ মেথডগুলো ভেতরে প্যারামিটারাইজড কোয়েরি চালালেও, প্রায় সব ওআরএম-এই সরাসরি কোয়েরি চালানোর অপশন থাকে (যেমন $queryRawUnsafe)। সেখানে যদি ডেভেলপার স্ট্রিং জোড়া লাগিয়ে ইনপুট বসান, তবে পুরো ওআরএম থাকা সত্ত্বেও অ্যাপ্লিকেশনটি এসকিউএল ইনজেকশনের শিকার হবে।'
      },
    },
  ],
  exercises: [
    {
      id: 'owasp-inj-ex-1',
      kind: 'predict',
      topic: 'passed-queries-count',
      question: {
        en: 'In the database query security audit of the 4 queries, how many parameterized queries PASSED without injection vulnerabilities? (3). Type the number.',
        bn: '৪ টি কোয়েরির ডাটাবেজ সিকিউরিটি নিরীক্ষায় সর্বমোট কয়টি প্যারামিটারাইজড কোয়েরি কোনো ইনজেকশন ঝুঁকি ছাড়া PASSED হয়েছিল? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Exactly 3 parameterized queries passed.',
        bn: 'ঠিক ৩ টি প্যারামিটারাইজড কোয়েরি সফল হয়েছিল।'
      },
      explanation: {
        en: 'Queries Q1, Q2, and Q3 used prepared statements with bound parameters, executing safely. Only Q4 failed due to string concatenation.',
        bn: 'কোয়েরি Q1, Q2 এবং Q3 প্যারামিটারাইজড স্টেটমেন্ট ব্যবহারের ফলে সফল হয়েছিল। কেবল Q4 স্ট্রিং কনক্যাটেনেশনের কারণে ব্যর্থ হয়।'
      },
    },
    {
      id: 'owasp-inj-ex-2',
      kind: 'mcq',
      topic: 'prepared-statement-ast-separation',
      question: {
        en: 'Why does a prepared statement completely neutralize SQL injection, regardless of what special characters the user types?',
        bn: 'ব্যবহারকারী যে কোনো স্পেশাল ক্যারেক্টার টাইপ করলেও প্রিপেয়ার্ড স্টেটমেন্ট কেন এসকিউএল ইনজেকশনকে শতভাগ নিষ্ক্রিয় করে দেয়?'
      },
      options: [
        {
          en: 'The database parses and compiles the SQL Abstract Syntax Tree (AST) before receiving user values; parameter data is bound as pure literals and cannot alter the compiled command grammar',
          bn: 'ব্যবহারকারীর ডাটা পাওয়ার আগেই ডাটাবেজ সিনট্যাক্স ট্রি কম্পাইল করে নেয়; ফলে পরবর্তীতে আসা ডাটা শুধু সাধারণ টেক্সট হিসেবে গণ্য হয় এবং কম্পাইল করা কমান্ডের কাঠামো পরিবর্তন করতে পারে না',
        },
        {
          en: 'Because prepared statements automatically delete all punctuation marks from the English language',
          bn: 'কারণ প্রিপেয়ার্ড স্টেটমেন্ট ইংরেজি ভাষার সমস্ত বিরামচিহ্ন স্বয়ংক্রিয়ভাবে মুছে ফেলে',
        },
        {
          en: 'Because prepared statements compress database hard drives to save space',
          bn: 'কারণ প্রিপেয়ার্ড স্টেটমেন্ট জায়গা বাঁচানোর জন্য ডাটাবেজের হার্ডড্রাইভ সংকুচিত করে',
        },
        {
          en: 'Because prepared statements only execute on servers located in cold climates',
          bn: 'কারণ প্রিপেয়ার্ড স্টেটমেন্ট কেবল শীতপ্রধান দেশে থাকা সার্ভারে কাজ করতে পারে',
        },
      ],
      answer: 0,
      hint: {
        en: 'The SQL grammar is compiled before values are sent over the wire.',
        bn: 'মান পাঠানোর আগেই কোয়েরির সিনট্যাক্স কম্পাইল সম্পন্ন হয়ে যায়।'
      },
      explanation: {
        en: 'Because compilation occurs before binding, characters like quotes and semicolons are treated as harmless string values rather than syntax delimiters.',
        bn: 'কম্পাইলেশন আগে শেষ হওয়ার কারণে কোট বা সেমিকোলন কেবল ডাটা হিসেবে জমা হয়, কোনো নতুন কমান্ড তৈরি করতে পারে না।'
      },
    },
    {
      id: 'owasp-inj-ex-3',
      kind: 'mcq',
      topic: 'command-injection-exec-vs-execfile',
      question: {
        en: 'In Node.js, why is child_process.execFile() preferred over child_process.exec() when executing system utilities with user input?',
        bn: 'Node.js-এ ব্যবহারকারীর ইনপুট নিয়ে সিস্টেম ইউটিলিটি চালানোর সময় child_process.exec() এর চেয়ে child_process.execFile() কেন অধিক নিরাপদ?'
      },
      options: [
        {
          en: 'child_process.execFile() invokes the executable directly and passes arguments as an array without spawning a system shell (/bin/sh), preventing shell metacharacters (;, |, &&) from chaining malicious commands',
          bn: 'child_process.execFile() কোনো সিস্টেম শেল (/bin/sh) না চালিয়েই সরাসরি প্রোগ্রামটিকে কল করে আর্গুমেন্ট অ্যারে পাস করে, ফলে শেল মেটাক্যারেক্টার (;, |, &&) ব্যবহার করে দ্বিতীয় ক্ষতিকর কমান্ড চালানো অসম্ভব হয়ে পড়ে',
        },
        {
          en: 'Because execFile() can only read files smaller than ten kilobytes',
          bn: 'কারণ execFile() কেবল দশ কিলোবাইটের চেয়ে ছোট ফাইল পড়তে পারে',
        },
        {
          en: 'Because execFile() changes user passwords automatically on reboot',
          bn: 'কারণ execFile() কম্পিউটার রিস্টার্ট হলে স্বয়ংক্রিয়ভাবে পাসওয়ার্ড বদলে দেয়',
        },
        {
          en: 'Because exec() is not supported on six-core processor chips',
          bn: 'কারণ ছয় কোরবিশিষ্ট প্রসেসরে exec() মেথড কাজ করতে পারে না',
        },
      ],
      answer: 0,
      hint: {
        en: 'execFile avoids the system shell and treats arguments as an array.',
        bn: 'execFile শেল চালায় না এবং আর্গুমেন্টকে আলাদা অ্যারে হিসেবে পাঠায়।'
      },
      explanation: {
        en: 'child_process.exec() spawns a shell, allowing attackers to inject payload strings like "; cat /etc/passwd". execFile() bypasses the shell completely.',
        bn: 'exec() সিস্টেম শেল ডেকে আনে যার ফলে সেমিকোলন দিয়ে ক্ষতিকর শেল কোড চালানো যায়। execFile() সরাসরি বাইনারি চালিয়ে এই ঝুঁকি বন্ধ করে।'
      },
    },
    {
      id: 'owasp-inj-ex-4',
      kind: 'predict',
      topic: 'failed-queries-count',
      question: {
        en: 'How many of the 4 evaluated queries failed due to raw string concatenation and suffered an SQL injection vulnerability? (1). Type the number.',
        bn: 'মূল্যায়ন করা ৪ টি কোয়েরির মধ্যে সর্বমোট কয়টি কোয়েরি সরাসরি স্ট্রিং কনক্যাটেনেশনের কারণে ব্যর্থ হয়ে এসকিউএল ইনজেকশনের শিকার হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 query was vulnerable.',
        bn: 'কেবলমাত্র ১ টি কোয়েরি অরক্ষিত ছিল।'
      },
      explanation: {
        en: 'Out of 4 queries, only query Q4 failed because it concatenated untrusted input directly into the SQL query string.',
        bn: '৪ টি কোয়েরির মধ্যে কেবল Q4 ব্যর্থ হয়েছিল কারণ এটি অনিয়ন্ত্রিত ইনপুট সরাসরি এসকিউএল কোয়েরিতে জোড়া লাগিয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'injection-attacks-quiz',
    title: {
      en: 'Injection Attacks & Secure Query Architecture Quiz',
      bn: 'ইনজেকশন আক্রমণ ও সুরক্ষিত কোয়েরি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'owasp-inj-qz-1',
        kind: 'mcq',
        topic: 'blind-sql-injection-time-based',
        question: {
          en: 'How does an attacker extract data using Time-Based Blind SQL Injection when the application does not display database errors or query results?',
          bn: 'অ্যাপ্লিকেশন যখন কোনো ডাটাবেজ এরর বা কোয়েরির ফলাফল স্ক্রিনে দেখায় না, তখন আক্রমণকারী কীভাবে টাইম-বেসড ব্লাইন্ড এসকিউএল ইনজেকশন ব্যবহার করে তথ্য চুরি করে?'
        },
        options: [
          {
            en: 'The attacker injects database delay functions (e.g. pg_sleep(5) or WAITFOR DELAY) wrapped inside conditional IF statements, inferring data bit-by-bit by measuring whether the HTTP server takes 5 seconds to reply',
            bn: 'আক্রমণকারী শর্তযুক্ত IF বিবৃতির মধ্যে ডাটাবেজ স্লিপ ফাংশন (যেমন pg_sleep(5)) প্রবেশ করায় এবং এইচটিটিপি রেসপন্স আসতে ৫ সেকেন্ড দেরি হচ্ছে কিনা তা পর্যবেক্ষণ করে বাইনারি পদ্ধতিতে এক এক বিট করে ডাটা বের করে নেয়',
          },
          {
            en: 'By sending high-frequency audio tones to the server computer microphone',
            bn: 'সার্ভার কম্পিউটারের মাইক্রোফোনে উচ্চ কম্পাঙ্কের অডিও সিগন্যাল পাঠিয়ে',
          },
          {
            en: 'By turning off office lights to see if the computer screen stays blue',
            bn: 'অফিসের বাতি নিভিয়ে মনিটরের পর্দা নীল থাকে কিনা তা পরীক্ষা করে',
          },
          {
            en: 'By unplugging the keyboard while the website is loading',
            bn: 'ওয়েবসাইট লোড হওয়ার সময় কীবোর্ডের তার খুলে ফেলে দিয়ে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Time-based blind SQLi measures server response delays.',
          bn: 'টাইম-বেসড ব্লাইন্ড ইনজেকশনে রেসপন্সের বিলম্ব দেখে তথ্য বের করা হয়।'
        },
        explanation: {
          en: 'Even when applications return identical generic responses, timing side-channels reveal whether injected conditional expressions evaluated to true.',
          bn: 'স্ক্রিনে কোনো ডাটা না আসলেও, রেসপন্স আসতে দেরি হচ্ছে কিনা তা মেপে আক্রমণকারী গোপন পাসওয়ার্ডের এক একটি অক্ষর বের করে ফেলে।'
        },
      },
      {
        id: 'owasp-inj-qz-2',
        kind: 'mcq',
        topic: 'second-order-sql-injection',
        question: {
          en: 'What is Second-Order SQL Injection, and why does input sanitization during initial user registration often fail to prevent it?',
          bn: 'সেকেন্ড-অর্ডার এসকিউএল ইনজেকশন কী এবং প্রাথমিক রেজিস্ট্রেশনের সময় ইনপুট ফিল্টার করলেও এটি কেন অনেক সময় আটকানো যায় না?'
        },
        options: [
          {
            en: 'Malicious input is safely stored in the database on first submission, but later retrieved and concatenated into a second, vulnerable dynamic query during backend administrative reporting or profile updates',
            bn: 'ক্ষতিকর ইনপুটটি প্রথমে ডাটাবেজে নিরাপদে জমা থাকে, কিন্তু পরবর্তীতে কোনো অ্যাডমিন রিপোর্ট বা প্রোফাইল আপডেটের সময় ডাটাবেজ থেকে তুলে এনে অনিরাপদভাবে দ্বিতীয় কোনো কোয়েরিতে জোড়া লাগালে আক্রমণটি কার্যকর হয়',
          },
          {
            en: 'An attack that only occurs on the second Tuesday of each month',
            bn: 'এমন আক্রমণ যা প্রতি মাসের দ্বিতীয় মঙ্গলবার কেবল কার্যকর হতে পারে',
          },
          {
            en: 'An attack requiring the attacker to purchase two database licenses',
            bn: 'এমন আক্রমণ চালানোর জন্য আক্রমণকারীকে দুটি ডাটাবেজ লাইসেন্স কিনতে হয়',
          },
          {
            en: 'An attack that deletes the second paragraph of every document',
            bn: 'এমন আক্রমণ যা প্রতিটি নথির দ্বিতীয় অনুচ্ছেদটি মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The payload is stored safely first, and detonates in a secondary query later.',
          bn: 'পেলোডটি প্রথমে জমা থাকে এবং পরে দ্বিতীয় কোনো কোয়েরিতে ঢুকে বিস্ফোরিত হয়।'
        },
        explanation: {
          en: 'Developers frequently assume that data already residing inside their own database is trustworthy, leading them to execute raw string concatenations on stored records.',
          bn: 'ডেভেলপাররা প্রায়ই ভুল ভাবেন যে নিজস্ব ডাটাবেজের ভেতরের তথ্য নিরাপদ, ফলে সেখান থেকে ডাটা এনে দ্বিতীয় কোয়েরিতে কনক্যাট করলেই বিপদ ঘটে।'
        },
      },
      {
        id: 'owasp-inj-qz-3',
        kind: 'mcq',
        topic: 'nosql-injection-operator-hijack',
        question: {
          en: 'How does NoSQL injection occur in MongoDB applications parsing JSON request bodies?',
          bn: 'জেসন (JSON) রিকোয়েস্ট বডি পার্স করা মঙ্গোডিবি (MongoDB) অ্যাপ্লিকেশনে কীভাবে NoSQL ইনজেকশন ঘটে?'
        },
        options: [
          {
            en: 'Attackers submit query selector objects such as {"username": "admin", "password": {"$ne": ""}}, causing MongoDB to match any user whose password is not an empty string and bypassing authentication',
            bn: 'আক্রমণকারী সাধারণ টেক্সটের বদলে মঙ্গোডিবির সিলেক্টর অবজেক্ট (যেমন {"password": {"$ne": ""}}) পাঠায়, ফলে পাসওয়ার্ড খালি না হলেই কন্ডিশন সত্য হয়ে যায় এবং পাসওয়ার্ড ছাড়াই অ্যাডমিন লগইন হয়ে যায়',
          },
          {
            en: 'By typing SQL commands inside text files on desktop computers',
            bn: 'ডেস্কটপ কম্পিউটারের টেক্সট ফাইলের ভেতর এসকিউএল কমান্ড লিখে',
          },
          {
            en: 'By installing MongoDB on a server that has no cooling system',
            bn: 'কুলিং সিস্টেমবিহীন সার্ভারে মঙ্গোডিবি সফটওয়্যার ইনস্টল করার মাধ্যমে',
          },
          {
            en: 'By connecting hard drives with red network cables instead of blue',
            bn: 'নীল ক্যাবলের বদলে লাল ক্যাবল দিয়ে হার্ডড্রাইভ যুক্ত করার কারণে',
          },
        ],
        answer: 0,
        hint: {
          en: 'NoSQL injection uses query operators like $ne or $gt in JSON bodies.',
          bn: 'NoSQL ইনজেকশনে জেসন বডির ভেতর $ne বা $gt এর মতো অপারেটর ব্যবহার করা হয়।'
        },
        explanation: {
          en: 'Express apps using body-parser parse JSON objects directly. If authentication queries pass req.body.password without verifying typeof string, operator injection succeeds.',
          bn: 'ইনপুটটি স্ট্রিং কিনা তা যাচাই না করে সরাসরি কোয়েরিতে পাস করলে মঙ্গোডিবির অবজেক্ট কুয়েরি অপারেটর দিয়ে লগইন বাইপাস করা সম্ভব।'
        },
      },
      {
        id: 'owasp-inj-qz-4',
        kind: 'mcq',
        topic: 'defense-in-depth-least-privilege-db',
        question: {
          en: 'Beyond parameterized queries, why must production web applications connect to databases using a least-privilege database user?',
          bn: 'প্যারামিটারাইজড কোয়েরির পাশাপাশি প্রোডাকশন অ্যাপ্লিকেশনে কেন সর্বনিম্ন প্রিভিলেজপ্রাপ্ত (Least Privilege) ডাটাবেজ ইউজার ব্যবহার করা অপরিহার্য?'
        },
        options: [
          {
            en: 'If an application vulnerability allows an injection flaw, a least-privilege user prevents the attacker from dropping tables, creating administrative accounts, or accessing files on the underlying database server host',
            bn: 'কোনো কারণে অ্যাপ্লিকেশনে ইনজেকশন দুর্বলতা থেকে গেলেও, সর্বনিম্ন প্রিভিলেজ থাকলে হ্যাকার টেবিল ডিলিট করতে, নতুন অ্যাডমিন বানাতে বা ডাটাবেজ হোস্টের অপারেটিং সিস্টেম ফাইল পড়তে পারে না',
          },
          {
            en: 'Because database administrators charge double for high-privilege accounts',
            bn: 'কারণ উচ্চ প্রিভিলেজ একাউন্টের জন্য ডাটাবেজ অ্যাডমিনরা দ্বিগুণ চার্জ করে থাকে',
          },
          {
            en: 'Because databases run out of memory when users have long names',
            bn: 'কারণ ইউজারের নাম দীর্ঘ হলে ডাটাবেজের মেমোরি ফুরিয়ে যায়',
          },
          {
            en: 'Because least-privilege accounts automatically shut down at 5 PM',
            bn: 'কারণ সর্বনিম্ন প্রিভিলেজ একাউন্টগুলো প্রতিদিন বিকাল ৫ টায় বন্ধ হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Least privilege limits the blast radius if an injection flaw ever succeeds.',
          bn: 'সর্বনিম্ন প্রিভিলেজ ইনজেকশন সফল হলেও ক্ষয়ক্ষতির সীমাকে আটকে রাখে।'
        },
        explanation: {
          en: 'Connecting as the database superuser (sa, root, or postgres) allows attackers to execute system commands (xp_cmdshell or COPY FROM PROGRAM). Dedicated unprivileged application roles limit damage.',
          bn: 'রুট বা অ্যাডমিন হিসেবে কানেক্ট করলে হ্যাকার সরাসরি সার্ভারে ম্যালওয়্যার চালাতে পারে। কেবল SELECT এবং INSERT প্রিভিলেজ দিলে বিপদ সীমিত থাকে।'
        },
      },
    ],
  },
  next: {
    slug: 'broken-access',
    title: {
      en: 'Broken Access Control: Defeating IDOR & Privilege Escalation',
      bn: 'ব্রোকেন অ্যাক্সেস কন্ট্রোল: আইডিওআর (IDOR) ও প্রিভিলেজ এস্কেলেশন প্রতিরোধ'
    },
  },
};
