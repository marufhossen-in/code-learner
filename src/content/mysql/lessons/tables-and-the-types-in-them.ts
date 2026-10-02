import type { Lesson } from '../../../lib/types';

export const TablesAndTheTypesInThemLesson: Lesson = {
  slug: 'tables-and-the-types-in-them',
  tech: 'mysql',
  title: { en: 'Tables and the Types in Them', bn: 'table আর তার type' },
  summary: { en: 'CREATE TABLE is a promise about bytes. Choose integers, DECIMAL for money, VARCHAR sized by truth, and temporal types that survive a timezone argument — then read the result back with SHOW CREATE TABLE.', bn: 'CREATE TABLE অর্থ বাইট নিয়ে দেওয়া প্রতিশ্রুতি। পূর্ণসংখ্যা, টাকার জন্য DECIMAL, সত্যি মাপে VARCHAR, আর timezone-তর্কেও টিকে যাওয়া সময়ের type — শেষে SHOW CREATE TABLE দিয়ে পড়ে দেখুন।' },
  minutes: 11,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Tables and the Types in Them', bn: 'WHAT — table আর তার type' },
    },
    {
      type: 'para',
      text: { en: 'Write the table the way you would say it out loud: an id, a name that must exist, a price with two decimals, a flag, a created moment. MySQL 8 defaults to InnoDB and to utf8mb4_0900_ai_ci, so the key decisions are widths and nullability. VARCHAR(64) holds up to 64 characters in the chosen charset. For utf8mb4, that can consume up to 256 bytes of storage. Because index limits are measured strictly in bytes, very long VARCHAR columns cannot be indexed completely. CHAR(n) pads with spaces and suits fixed-width codes such as a country code (like two-letter BD or DE).', bn: 'table যেমন মুখে বলবেন তেমনই লিখুন: একটা id, একটি অবশ্য-থাকা নাম, দুই দশমিকের দাম, একটি flag, তৈরির একটা মুহূর্ত। MySQL 8 ডিফল্ট InnoDB আর utf8mb4_0900_ai_ci, তাই আসল সিদ্ধান্ত প্রস্থ আর nullability-র। VARCHAR(64) মানে নির্দিষ্ট charset-এ সর্বোচ্চ ৬৪ অক্ষর। utf8mb4-তে তা ২৫৬ byte পর্যন্ত জায়গা নিতে পারে। ইনডেক্সের সীমা byte-এ মাপা হয় বলে খুব দীর্ঘ VARCHAR কলাম পুরোপুরি ইনডেক্স করা যায় না। CHAR(n) ফাঁকা জায়গা padding করে, দুই অক্ষরের দেশের কোডের মতো (BD বা DE) সমপ্রস্থ জিনিসে মানানসই।' },
    },
    { type: 'heading', id: 'why', text: { en: 'WHY it matters', bn: 'কেন দরকার' } },
    {
      type: 'list',
      items: [
        {
          en: 'A column type decides the on-disk width, the maximum value, whether truncation is an error, and how much of an index the column pollutes.',
          bn: 'column-এর type ঠিক করে ডিস্কে কত জায়গা, সর্বোচ্চ মান, কেটে ফেলা হলে error কি না, আর index কতটা নোংরা হয়।',
        },
        {
          en: 'FLOAT is a binary approximation: 0.1 + 0.2 is not 0.3. DECIMAL stores digits exactly, which is the entire requirement of money.',
          bn: 'FLOAT বাইনারি আনুমানিক মান: 0.1 + 0.2 আসলে 0.3 নয়। DECIMAL অঙ্ক হুবহু রাখে — টাকার পুরো দাবিটুকুই এটা।',
        },
        {
          en: 'InnoDB packs a row into a page whose size is fixed at 16 KiB, and a row that does not fit moves off-page, costing an extra read for every access.',
          bn: 'InnoDB সারি 16 KiB-এর একটা page-এ গুজে রাখে; না-ধরলে সারি বাইরে থাকে, প্রতি পড়াতে অতিরিক্ত একটা read বহন করতে হয়।',
        },
      ],
    },
    {
      type: 'code',
      lang: 'sql',
      filename: 'schema.sql',
      code: `CREATE TABLE product (
  id          BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
  sku         CHAR(12)        NOT NULL,
  title       VARCHAR(120)    NOT NULL,
  price       DECIMAL(10,2)   NOT NULL DEFAULT 0.00,
  stock       INT             NOT NULL DEFAULT 0,
  active      TINYINT(1)      NOT NULL DEFAULT 1,
  created_at  TIMESTAMP       NOT NULL DEFAULT CURRENT_TIMESTAMP,
  notes       TEXT,
  PRIMARY KEY (id),
  UNIQUE KEY uq_sku (sku)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci;`,
      caption: { en: 'One surrogate key, one natural unique key, money in DECIMAL, and defaults so a plain INSERT always works.', bn: 'একটি surrogate key, একটি স্বাভাবিক unique key, টাকা DECIMAL-এ, আর default — যাতে সাধারণ INSERT সবসময় চলে।' },
    },
    {
      type: 'table',
      head: [
        { en: 'type', bn: 'type' },
        { en: 'bytes', bn: 'byte' },
        { en: 'holds', bn: 'কী ধরে' },
        { en: 'watch out', bn: 'সাবধান' },
      ],
      rows: [
        [
          { en: 'TINYINT', bn: 'TINYINT' },
          { en: '1', bn: '১' },
          { en: 'flags, small counts', bn: 'flag, ছোট গণনা' },
          { en: 'boolean is an alias for it', bn: 'boolean এরই alias' },
        ],
        [
          { en: 'INT', bn: 'INT' },
          { en: '4', bn: '৪' },
          { en: 'counts up to ~2.1e9', bn: 'প্রায় ২.১e৯ পর্যন্ত' },
          { en: ' UNSIGNED doubles the ceiling', bn: ' UNSIGNED ছাদ দ্বিগুণ' },
        ],
        [
          { en: 'BIGINT UNSIGNED', bn: 'BIGINT UNSIGNED' },
          { en: '8', bn: '৮' },
          { en: 'ids that grow forever', bn: 'যে id চিরকাল বাড়ে' },
          { en: 'no negative, no overflow at 4e18', bn: 'ঋণাত্মক নেই, ৪e১৮-এ ছাদ' },
        ],
        [
          { en: 'DECIMAL(10,2)', bn: 'DECIMAL(10,2)' },
          { en: '5', bn: '৫' },
          { en: 'money, exact', bn: 'টাকা, নির্ভুল' },
          { en: 'wider than you think for big sums', bn: 'বড় যোগফলে প্রস্থ ভুলবেন না' },
        ],
        [
          { en: 'VARCHAR(120)', bn: 'VARCHAR(120)' },
          { en: '1-2 + data', bn: '১-২ + data' },
          { en: 'text you can bound', bn: 'মাপা লেখা' },
          { en: 'index length is in bytes', bn: 'index-এর দৈর্ঘ্য byte-এ' },
        ],
        [
          { en: 'TIMESTAMP', bn: 'TIMESTAMP' },
          { en: '4', bn: '৪' },
          { en: 'instants, stored as UTC', bn: 'মুহূর্ত, UTC-তে থাকে' },
          { en: 'year 2038, per-session offset', bn: '২০৩৮ সাল, session অনুসারে offset' },
        ],
        [
          { en: 'DATETIME', bn: 'DATETIME' },
          { en: '5-8', bn: '৫-৮' },
          { en: 'wall-clock, no conversion', bn: 'ঘড়ির সময়, রূপান্তর নেই' },
          { en: 'you own the timezone logic', bn: 'timezones-এর হিসাব আপনার' },
        ],
        [
          { en: 'JSON', bn: 'JSON' },
          { en: 'variable', bn: 'বদলানো' },
          { en: 'semi-structured payload', bn: 'অর্ধ-গঠিত data' },
          { en: 'indexed only via generated columns', bn: 'শুধু generated column দিয়ে index' },
        ],
      ],
      caption: { en: 'Byte counts for InnoDB storage, not for the wire; NULL columns cost an extra null bitmap byte per eight columns.', bn: 'সংখ্যাগুলো InnoDB storage-এর, wire-এর নয়; প্রতি আট column-এ এক অতিরিক্ত null bitmap byte লাগে।' },
    },
    {
      type: 'compare',
      title: { en: 'Two ways to type the same column', bn: 'একই column-এর দুই ধরনের type' },
      left: {
        title: { en: 'The reflex', bn: 'অভ্যাস' },
        points: [
          {
            en: 'id INT — runs out at 2.1 billion and the app dies quietly at insert number 2,147,483,648.',
            bn: 'id INT — ২.১ বিলিয়নে শেষ, ২,১৪৭,৪৮৩,৬৪৮ নম্বর insert-এ app চুপচাপ মরে।',
          },
          {
            en: 'price FLOAT — the report is a cent off and nobody can explain it.',
            bn: 'price FLOAT — report এক পয়সা ওঠে-নামে, কেউ ব্যাখ্যা করতে পারে না।',
          },
          {
            en: 'title VARCHAR(255) — every index on it eats 1,020 bytes of the 3,072 budget.',
            bn: 'title VARCHAR(255) — এর প্রতি index ৩,০৭২ এর বাজেটে ১,০২০ byte খায়।',
          },
          {
            en: 'created_at DATETIME — three servers, three local times, one meaningless order.',
            bn: 'created_at DATETIME — তিন server, তিন সময়, অর্থহীন এক ক্রম।',
          },
        ],
      },
      right: {
        title: { en: 'The decision', bn: 'ভাবনা' },
        points: [
          {
            en: 'id BIGINT UNSIGNED — eight bytes now, no midnight in 2031.',
            bn: 'id BIGINT UNSIGNED — এখন আট byte, ২০৩১-এর মধ্যরাতে ভয় নেই।',
          },
          {
            en: 'price DECIMAL(10,2) — exact, summable, and honest in an invoice.',
            bn: 'price DECIMAL(10,2) — নির্ভুল, যোগ করা যায়, invoice-তে সোজা।',
          },
          {
            en: 'title VARCHAR(120) — because the longest real title is 84 characters.',
            bn: 'title VARCHAR(120) — কারণ আসল সবচেয়ে লম্বা নাম ৮৪ অক্ষর।',
          },
          {
            en: 'created_at TIMESTAMP UTC + a client that formats it — sorting is then global.',
            bn: 'created_at TIMESTAMP UTC + তা সাজানো client — ক্রম তখন সারা পৃথিবীতে মানে।',
          },
        ],
      },
    },
    {
      type: 'heading',
      id: 'mechanics',
      text: { en: 'HOW it runs — stage by stage', bn: 'কীভাবে চলে — ধাপে ধাপে' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1. Name the identity', bn: '১. পরিচয় ঠিক করুন' },
          text: { en: 'Surrogate BIGINT UNSIGNED AUTO_INCREMENT primary key, plus a UNIQUE key on the natural one (sku, email, slug).', bn: 'surrogate BIGINT UNSIGNED AUTO_INCREMENT primary key, আর স্বাভাবিকটির (sku, email, slug) উপর UNIQUE key।' },
        },
        {
          title: { en: '2. Type every fact exactly', bn: '২. প্রতিটি তথ্য সঠিক type-এ' },
          text: { en: 'Counts as integers, money as DECIMAL, short text as bounded VARCHAR, long prose as TEXT, flags as TINYINT.', bn: 'গণনা integer, টাকা DECIMAL, ছোট লেখা সীমাবদ্ধ VARCHAR, দীর্ঘ লেখা TEXT, flag TINYINT।' },
        },
        {
          title: { en: '3. Say what missing means', bn: '৩. না-থাকা মানে কী বলুন' },
          text: { en: 'NOT NULL plus a DEFAULT when absence is not a legal state; leave the column nullable only when you can answer what NULL means.', bn: 'অনুপস্থিতি বৈধ অবস্থা না-হলে NOT NULL + DEFAULT; column nullable রাখবেন শুধু NULL-এর অর্থ বলতে পারলে।' },
        },
        {
          title: { en: '4. Read it back', bn: '৪. পড়ে দেখুন' },
          text: { en: 'SHOW CREATE TABLE product — engine, charset, collation and every key, in the server’s own words.', bn: 'SHOW CREATE TABLE product — engine, charset, collation আর সব key, server-এর নিজের ভাষায়।' },
        },
      ],
    },
    {
      type: 'diagram',
      title: { en: 'Tables and the Types in Them: the moving parts', bn: 'table আর তার type: কাজের অংশগুলো' },
      svg: `<svg viewBox="0 0 660 346" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Tables and the Types in Them">
<defs><marker id="ar" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="currentColor"/></marker></defs>
<text x="336" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">WHAT HAPPENS</text>
<text x="42" y="32" font-size="10" font-weight="800" fill="currentColor" opacity="0.65">STAGE ORDER</text>
<rect x="24" y="44" width="300" height="46" rx="9" fill="hsl(205 72% 52%)" opacity="0.16" stroke="hsl(205 72% 52%)" stroke-width="1.6"/>
<text x="42" y="72" font-size="13" font-weight="700" fill="currentColor">1. Name the identity</text>
<rect x="336" y="44" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="64" font-size="11" fill="currentColor">Surrogate BIGINT UNSIGNED AUTO_INCREMENT</text>
<text x="352" y="79" font-size="11" fill="currentColor">primary key, plus a UNIQUE key on the natural…</text>
<path d="M174,90 L174,116" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="116" width="300" height="46" rx="9" fill="hsl(252 72% 52%)" opacity="0.16" stroke="hsl(252 72% 52%)" stroke-width="1.6"/>
<text x="42" y="144" font-size="13" font-weight="700" fill="currentColor">2. Type every fact exactly</text>
<rect x="336" y="116" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="136" font-size="11" fill="currentColor">Counts as integers, money as DECIMAL, short</text>
<text x="352" y="151" font-size="11" fill="currentColor">text as bounded VARCHAR, long prose as TEXT, …</text>
<path d="M174,162 L174,188" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="188" width="300" height="46" rx="9" fill="hsl(299 72% 52%)" opacity="0.16" stroke="hsl(299 72% 52%)" stroke-width="1.6"/>
<text x="42" y="216" font-size="13" font-weight="700" fill="currentColor">3. Say what missing means</text>
<rect x="336" y="188" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="208" font-size="11" fill="currentColor">NOT NULL plus a DEFAULT when absence is not a</text>
<text x="352" y="223" font-size="11" fill="currentColor">legal state; leave the column nullable only w…</text>
<path d="M174,234 L174,260" stroke="currentColor" stroke-width="1.6" marker-end="url(#ar)"/>
<rect x="24" y="260" width="300" height="46" rx="9" fill="hsl(346 72% 52%)" opacity="0.16" stroke="hsl(346 72% 52%)" stroke-width="1.6"/>
<text x="42" y="288" font-size="13" font-weight="700" fill="currentColor">4. Read it back</text>
<rect x="336" y="260" width="300" height="46" rx="9" fill="currentColor" opacity="0.06" stroke="currentColor" stroke-opacity="0.25"/>
<text x="352" y="280" font-size="11" fill="currentColor">SHOW CREATE TABLE product — engine, charset,</text>
<text x="352" y="295" font-size="11" fill="currentColor">collation and every key, in the server’s own …</text>
<text x="330" y="332" text-anchor="middle" font-size="11.5" font-weight="600" fill="currentColor" opacity="0.8">A column type is a contract with the future: widths and nullability are cheap to reason about t…</text>
</svg>`,
      caption: { en: 'A column type is a contract with the future: widths and nullability are cheap to reason about today and expensive to change at a hundred million rows.', bn: 'column-এর type ভবিষ্যতের সাথে চুক্তি: প্রস্থ আর nullability আজ ভেবে নিতে সস্তা, একশ কোটি সারিতে বদলাতে দামি।' },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: { en: 'A column type is a contract with the future: widths and nullability are cheap to reason about today and expensive to change at a hundred million rows.', bn: 'column-এর type ভবিষ্যতের সাথে চুক্তি: প্রস্থ আর nullability আজ ভেবে নিতে সস্তা, একশ কোটি সারিতে বদলাতে দামি।' },
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'TEXT for everything that might grow', bn: 'বেড়ে যেতে পারে ভেবে সব TEXT' },
      text: { en: 'TEXT columns cannot be indexed on their full length without a prefix, are pushed off-page when the row gets fat, and turn a sorted query into a filesort over temporary files.', bn: 'TEXT column পুরো দৈর্ঘ্যে prefix ছাড়া index হয় না, সারি মোটা হলে বাইরে ঠেলে দেওয়া হয়, আর sort করা query সাময়িক ফাইলে filesort হয়ে যায়।' },
    },
  ],
  exercises: [
    {
      id: 'tables-and-the-types-in-them-ex1',
      kind: 'mcq',
      topic: 'mysql: Tables and the Types in Them',
      question: { en: 'A column stores a price in taka. Which declaration is right?', bn: 'একটি column-এ টাকায় দাম থাকবে। কোন ঘোষণা ঠিক?' },
      options: [
        { en: 'FLOAT(10,2)', bn: 'FLOAT(10,2)' },
        { en: 'DECIMAL(10,2)', bn: 'DECIMAL(10,2)' },
        { en: 'VARCHAR(10)', bn: 'VARCHAR(10)' },
        { en: 'INT, storing poisha', bn: 'INT, পয়সা রেখে' },
      ],
      answer: 1,
      hint: { en: 'Binary fractions are the problem, not size.', bn: 'সমস্যা আকারের নয়, বাইনারি ভগ্নাংশের।' },
      explanation: { en: 'DECIMAL keeps decimal digits exactly, so 10.10 + 20.20 is 30.30. INT in poisha is also exact and common for payment ledgers; FLOAT is never right for money.', bn: 'DECIMAL দশমিকের অঙ্ক হুবহু রাখে, তাই 10.10 + 20.20 = 30.30। পয়সায় INT-ও নির্ভুল, payment ledger-এ প্রচলিত; টাকাতে FLOAT কখনো ঠিক নয়।' },
    },
    {
      id: 'tables-and-the-types-in-them-ex2',
      kind: 'predict',
      topic: 'mysql: Tables and the Types in Them',
      question: { en: 'The table has no explicit primary key but has a UNIQUE NOT NULL key on sku. What does SHOW CREATE TABLE report as the primary key?', bn: 'table-এ স্পষ্ট primary key নেই, কিন্তু sku-তে UNIQUE NOT NULL key আছে। SHOW CREATE TABLE কীকে primary key বলে?' },
      code: `CREATE TABLE t (
  sku CHAR(12) NOT NULL UNIQUE
);`,
      answer: 'none — sku is just a unique key',
      accept: [
        'none',
        'none — sku is just a unique key',
        'no primary key',
        'None',
        'none; sku stays a UNIQUE key',
      ],
      hint: { en: 'MySQL is not Postgres; it will not promote a unique key.', bn: 'MySQL Postgres নয়; unique key-কে পদোন্নতি দেয় না।' },
      explanation: { en: 'InnoDB silently creates a hidden 6-byte GEN_CLUST_INDEX unless there is a PRIMARY KEY or a single NOT NULL unique key usable as one. Here the table gets that hidden clustered index, and every secondary index points at it.', bn: 'PRIMARY KEY বা একক NOT NULL unique key না-থাকলে InnoDB গোপন ৬-byte GEN_CLUST_INDEX বানায়; এখানেও তা-ই হলো, আর প্রতি secondary index সেই গোপন key-কেই দেখে।' },
    },
    {
      id: 'tables-and-the-types-in-them-ex3',
      kind: 'mcq',
      topic: 'mysql: Tables and the Types in Them',
      question: { en: 'Why can an index on VARCHAR(5000) with utf8mb4 fail with error 1071?', bn: 'utf8mb4-তে VARCHAR(5000)-এর উপর index কেন 1071 error দিতে পারে?' },
      options: [
        { en: 'VARCHAR cannot be indexed at all', bn: 'VARCHAR মোটেই index হয় না' },
        {
          en: 'The key would need up to 20,000 bytes, past the 3,072-byte limit',
          bn: 'key-এর ২০,০০০ byte লাগতে পারে, ৩,০৭২-এর ছাদের বাইরে',
        },
        { en: 'Indexes only allow ASCII', bn: 'index শুধু ASCII-তে চলে' },
        { en: '5,000 characters is longer than TEXT', bn: '৫,০০০ অক্ষর TEXT-এর চেয়ে লম্বা' },
      ],
      answer: 1,
      hint: { en: 'Four bytes per character in utf8mb4.', bn: 'utf8mb4-তে প্রতি অক্ষরে চার byte।' },
      explanation: { en: 'InnoDB with DYNAMIC row format allows at most 3,072 index key bytes; 5,000 characters x 4 bytes is 20,000, so only a prefix index (col(768)) or a generated hash column works.', bn: 'DYNAMIC row format-এ InnoDB সর্বোচ্চ ৩,০৭২ byte index key দেয়; ৫,০০০ অক্ষর x ৪ byte = ২০,০০০, তাই prefix index (col(768)) বা generated hash column-ই উপায়।' },
    },
  ],
  quiz: {
    id: 'tables-and-the-types-in-them-quiz',
    title: { en: 'Quiz — Tables and the Types in Them', bn: 'কুইজ — table আর তার type' },
    questions: [
      {
        id: 'tables-and-the-types-in-them-q1',
        kind: 'mcq',
        topic: 'mysql: Tables and the Types in Them',
        question: { en: 'Which statement shows the exact definition of a table, including engine and charset?', bn: 'একটি table-এর হুবহু সংজ্ঞা — engine, charsetসহ — কোন বিবৃতি দেখায়?' },
        options: [
          { en: 'DESCRIBE t', bn: 'DESCRIBE t' },
          { en: 'SHOW CREATE TABLE t', bn: 'SHOW CREATE TABLE t' },
          { en: 'EXPLAIN t', bn: 'EXPLAIN t' },
          { en: 'LIST TABLE t', bn: 'LIST TABLE t' },
        ],
        answer: 1,
        hint: { en: 'It prints the DDL you would rerun.', bn: 'যে DDL আবার চালাতেন, সেটিই ছাপে।' },
        explanation: { en: 'SHOW CREATE TABLE prints the DDL; DESCRIBE prints only columns, nullability, keys and defaults.', bn: 'SHOW CREATE TABLE পুরো DDL ছাপে; DESCRIBE শুধু column, null, key আর default দেখায়।' },
      },
      {
        id: 'tables-and-the-types-in-them-q2',
        kind: 'mcq',
        topic: 'mysql: Tables and the Types in Them',
        question: { en: 'A column is INT UNSIGNED. What is its largest value?', bn: 'একটি column INT UNSIGNED। সর্বোচ্চ মান কত?' },
        options: [
          { en: '2,147,483,647', bn: '২,১৪৭,৪৮৩,৬৪৭' },
          { en: '4,294,967,295', bn: '৪,২৯৪,৯৬৭,২৯৫' },
          { en: '9,223,372,036,854,775,807', bn: '৯,২২৩,৩৭২,০৩৬,৮৫৪,৭৭৫,৮০৭' },
          { en: '65,535', bn: '৬৫,৫৩৫' },
        ],
        answer: 1,
        hint: { en: 'Unsigned doubles the top, drops the bottom.', bn: 'UNSIGNED নিচের অর্ধেক হারায়, ওপরেরটা দ্বিগুণ।' },
        explanation: { en: 'Four bytes unsigned: 0 to 4294967295 ; signed INT stops at 2147483647 ;', bn: 'চার byte unsigned: ০ থেকে ৪২৯৪৯৬৭২৯৫ ; signed INT ২১৪৭৪৮৩৬৪৭ এ থামে ;' },
      },
      {
        id: 'tables-and-the-types-in-them-q3',
        kind: 'mcq',
        topic: 'mysql: Tables and the Types in Them',
        question: { en: 'Why does VARCHAR(64) not mean 64 bytes of storage?', bn: 'VARCHAR(64) মানে ৬৪ byte জায়গা নয় — কেন?' },
        options: [
          { en: 'VARCHAR is fixed width', bn: 'VARCHAR সমপ্রস্থ' },
          {
            en: 'The number counts characters, and utf8mb4 uses one to four bytes each',
            bn: 'সংখ্যাটি অক্ষর গনে, আর utf8mb4-তে প্রতিটি এক থেকে চার byte',
          },
          { en: 'InnoDB stores only the first 16 characters', bn: 'InnoDB প্রথম ১৬টি অক্ষর রাখে' },
          { en: 'The charset prefix costs 64 bytes per row', bn: 'charset-এর উপসর্গে প্রতি সারিতে ৬৪ byte' },
        ],
        answer: 1,
        hint: { en: 'Think about a Bengali title.', bn: 'বাংলা নামটা ভাবুন।' },
        explanation: { en: 'Length is in characters; a Bengali character is three bytes in utf8mb4, so a 64-character title can occupy 192 bytes plus a 1-2 byte length prefix.', bn: 'দৈর্ঘ্য অক্ষরে মাপা; utf8mb4-তে একটি বাংলা অক্ষর তিন byte, তাই ৬৪ অক্ষরের নাম ১৯২ byte + ১-২ byte দৈর্ঘ্য-উপসর্গ নিতে পারে।' },
      },
      {
        id: 'tables-and-the-types-in-them-q4',
        kind: 'mcq',
        topic: 'mysql: Tables and the Types in Them',
        question: { en: 'What is stored when a NULL-able column is left out of an INSERT?', bn: 'nullable column একটি INSERT-এ বাদ দিলে কী থাকে?' },
        options: [
          { en: 'An empty string', bn: 'ফাঁকা string' },
          { en: 'Zero', bn: 'শূন্য' },
          { en: 'A NULL, recorded in the row’s null bitmap', bn: 'NULL, সারির null bitmap-এ চিহ্নিত' },
          { en: 'The column default, always', bn: 'সবসময় column-এর default' },
        ],
        answer: 2,
        hint: { en: 'The bitmap is why NULL is nearly free.', bn: 'bitmap-এর জন্যই NULL প্রায় বিনা খরচে।' },
        explanation: { en: 'InnoDB marks the column NULL in a per-row bitmap and stores no value; an explicit DEFAULT clause applies too, but only when DEFAULT is what the statement asks for.', bn: 'InnoDB প্রতি সারির bitmap-এ NULL চিহ্নিত করে, মান রাখে না; DEFAULT clause আছে, কিন্তু সেটিও তখনই লাগে যখন বিবৃতি DEFAULT চায়।' },
      },
    ],
  },
  nextLesson: {
    slug: 'keys-and-constraints',
    tech: 'mysql',
    title: { en: 'Keys and Constraints', bn: 'key আর constraint' },
  },
};
