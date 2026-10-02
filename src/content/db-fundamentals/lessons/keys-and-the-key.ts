import type { Lesson } from '../../../lib/types';

export const KeysAndTheKeyLesson: Lesson = {
  slug: 'keys-and-the-key',
  tech: 'db-fundamentals',
  title: {
    en: 'Primary, Composite & Foreign Keys: Referential Integrity',
    bn: 'প্রাইমারি, কম্পোজিট ও ফরেন কি: রেফারেন্সিয়াল ইন্টিগ্রিটি'
  },
  summary: {
    en: 'Master relational keys and integrity: candidate keys, natural vs surrogate keys (UUIDv4 vs UUIDv7), composite keys in junction tables, and foreign key cascade rules (RESTRICT, CASCADE, SET NULL).',
    bn: 'রিলেশনাল কি ও অখণ্ডতা আয়ত্ত করুন: ক্যান্ডিডেট কি, ন্যাচারাল বনাম সারোগেট কি (UUIDv4 বনাম UUIDv7), জাংশন টেবিলে কম্পোজিট কি এবং ফরেন কি ক্যাসকেড নিয়ম (RESTRICT, CASCADE, SET NULL)।'
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'superkeys-candidate-primary',
      text: {
        en: 'The Hierarchy of Keys: Superkeys, Candidate Keys & Primary Keys',
        bn: 'কি-এর অনুক্রম: সুপার-কি, ক্যান্ডিডেট কি ও প্রাইমারি কি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In relational database theory, identity is governed by mathematical key hierarchies. A superkey is any combination of attributes that uniquely distinguishes every tuple in a relation. A candidate key is a minimal superkey: no attribute can be removed from it without destroying its unique identification property. A table may have multiple candidate keys (such as an auto-increment id, a unique passport number, and an email address).',
        bn: 'রিলেশনাল ডাটাবেস তত্ত্বে ডাটার স্বকীয়তা গাণিতিক কি-এর অনুক্রম দ্বারা নিয়ন্ত্রিত হয়। একটি সুপার-কি হলো এমন যেকোনো এক বা একাধিক কলামের সমন্বয় যা একটি টেবিলের প্রতিটি সারির জন্য অনন্য। আর একটি ক্যান্ডিডেট কি হলো সবচেয়ে সংক্ষিপ্ত বা মিনিমাল সুপার-কি: এর থেকে কোনো কলাম বাদ দিলে এটি আর এককভাবে সারি শনাক্ত করতে পারে না। একটি টেবিলে একাধিক ক্যান্ডিডেট কি থাকতে পারে (যেমন একটি সিরিয়াল id, পাসপোর্ট নম্বর এবং ইমেইল ঠিকানা)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Database architects select exactly 1 candidate key to become the official primary key of the table. The primary key serves as the permanent, immutable anchor for the entity across the entire relational database schema. By definition, a primary key strictly forbids NULL values and requires all values to be uniquely indexed.',
        bn: 'ডাটাবেস ডিজাইনাররা এই ক্যান্ডিডেট কি-গুলোর মধ্য থেকে ঠিক ১টিকে নির্বাচন করে টেবিলের অফিসিয়াল প্রাইমারি কি হিসেবে নির্ধারণ করেন। প্রাইমারি কি পুরো ডাটাবেস স্কিমা জুড়ে সংশ্লিষ্ট তথ্যের একটি স্থায়ী ও অপরিবর্তনীয় পরিচয় হিসেবে কাজ করে। সংজ্ঞাগতভাবেই প্রাইমারি কি-তে কখনোই NULL মান থাকতে পারে না এবং এর প্রতিটি মান অনন্যভাবে ইনডেক্স করা বাধ্যতামূলক।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Referential Integrity: Primary Key to Foreign Key Linkage',
        bn: 'রেফারেন্সিয়াল ইন্টিগ্রিটি: প্রাইমারি কি থেকে ফরেন কি সংযোগ'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Primary Key to Foreign Key relationship diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Parent Table: Customers -->
  <g transform="translate(30, 30)">
    <rect width="210" height="180" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect x="0" y="0" width="210" height="36" rx="8" fill="#0284c7" />
    <text x="105" y="24" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Parent: Customers</text>

    <text x="20" y="62" fill="#38bdf8" font-size="11" font-weight="bold">id (PK) [INT]</text>
    <text x="20" y="86" fill="#cbd5e1" font-size="11">name [VARCHAR]</text>
    <text x="20" y="110" fill="#cbd5e1" font-size="11">email [VARCHAR, UQ]</text>
    <text x="20" y="134" fill="#cbd5e1" font-size="11">created_at [TIMESTAMPTZ]</text>

    <rect x="15" y="148" width="180" height="22" rx="4" fill="#0c4a6e" />
    <text x="105" y="163" fill="#7dd3fc" font-size="10" text-anchor="middle">Row: id = 1 ("Alice")</text>
  </g>

  <!-- Child Table: Orders -->
  <g transform="translate(265, 30)">
    <rect width="210" height="180" rx="8" fill="#1e293b" stroke="#a78bfa" stroke-width="2" />
    <rect x="0" y="0" width="210" height="36" rx="8" fill="#7c3aed" />
    <text x="105" y="24" fill="#ffffff" font-size="13" font-weight="bold" text-anchor="middle">Child: Orders</text>

    <text x="20" y="62" fill="#a78bfa" font-size="11" font-weight="bold">id (PK) [INT]</text>
    <text x="20" y="86" fill="#38bdf8" font-size="11" font-weight="bold">customer_id (FK) [INT]</text>
    <text x="20" y="110" fill="#cbd5e1" font-size="11">total_cents [INT]</text>
    <text x="20" y="134" fill="#cbd5e1" font-size="11">status [VARCHAR]</text>

    <rect x="15" y="148" width="180" height="22" rx="4" fill="#4c1d95" />
    <text x="105" y="163" fill="#ddd6fe" font-size="10" text-anchor="middle">Row: id = 101, customer_id = 1</text>
  </g>

  <!-- Junction Table: OrderItems (Composite PK) -->
  <g transform="translate(500, 30)">
    <rect width="210" height="180" rx="8" fill="#1e293b" stroke="#34d399" stroke-width="2" />
    <rect x="0" y="0" width="210" height="36" rx="8" fill="#059669" />
    <text x="105" y="24" fill="#ffffff" font-size="12" font-weight="bold" text-anchor="middle">Junction: OrderItems</text>

    <text x="20" y="62" fill="#34d399" font-size="11" font-weight="bold">order_id (PK, FK1)</text>
    <text x="20" y="86" fill="#34d399" font-size="11" font-weight="bold">product_id (PK, FK2)</text>
    <text x="20" y="110" fill="#cbd5e1" font-size="11">quantity [INT]</text>
    <text x="20" y="134" fill="#cbd5e1" font-size="11">unit_price [INT]</text>

    <rect x="15" y="148" width="180" height="22" rx="4" fill="#064e3b" />
    <text x="105" y="163" fill="#a7f3d0" font-size="10" text-anchor="middle">Composite PK: (order, prod)</text>
  </g>

  <!-- Relationship Arrows -->
  <path d="M 240 85 L 265 85" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 475 85 L 500 85" stroke="#a78bfa" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Constraint Rules Breakdown -->
  <g transform="translate(30, 230)">
    <rect width="680" height="75" rx="8" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="340" y="24" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Foreign Key Cascade Rules Guard the Hierarchy</text>
    <text x="340" y="46" fill="#94a3b8" font-size="11" text-anchor="middle">ON DELETE RESTRICT: Forbids deleting parent Customers while child Orders exist.</text>
    <text x="340" y="64" fill="#34d399" font-size="11" font-weight="600" text-anchor="middle">ON DELETE CASCADE: Deleting an Order automatically purges associated OrderItems junction rows.</text>
  </g>
</svg>`,
      caption: {
        en: 'Referential integrity hierarchy: Primary keys identify parents, foreign keys bind child records, and composite keys anchor junction tables.',
        bn: 'রেফারেন্সিয়াল ইন্টিগ্রিটির অনুক্রম: প্রাইমারি কি প্যারেন্ট শনাক্ত করে, ফরেন কি চাইল্ড রেকর্ড যুক্ত করে এবং কম্পোজিট কি জাংশন টেবিল ধরে রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Primary Key (PK)',
          def: {
            en: 'A column or combination of columns that uniquely and non-nullably identifies each row record in a database table.',
            bn: 'একটি কলাম বা কলামের সমন্বয় যা কোনো ডাটাবেস টেবিলের প্রতিটি সারিকে অনন্য ও নিশ্চিতভাবে (নাল ছাড়া) শনাক্ত করে।'
          }
        },
        {
          term: 'Foreign Key (FK)',
          def: {
            en: 'A column in a child table whose values must match an existing primary key value in an associated parent table.',
            bn: 'একটি চাইল্ড টেবিলের কলাম যার মান সংশ্লিষ্ট প্যারেন্ট টেবিলের বিদ্যমান প্রাইমারি কি-এর সাথে হুবহু মিলতে হয়।'
          }
        },
        {
          term: 'Composite Key',
          def: {
            en: 'A primary key constructed by combining 2 or more distinct columns to guarantee compound uniqueness across records.',
            bn: '২টি বা ততোধিক ভিন্ন কলামের সমন্বয়ে গঠিত একটি প্রাইমারি কি যা যৌথভাবে প্রতিটি রেকর্ডের স্বাতন্ত্র্য নিশ্চিত করে।'
          }
        },
        {
          term: 'Referential Integrity',
          def: {
            en: 'A relational database constraint guaranteeing that relationships between tables remain consistent and free of orphaned child rows.',
            bn: 'একটি রিলেশনাল ডাটাবেস কনস্ট্রেইন্ট যা টেবিলগুলোর মধ্যকার সম্পর্ক অটুট রাখে এবং সংযোগহীন এতিম সারি তৈরি হতে বাধা দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'natural-vs-surrogate-keys',
      text: {
        en: 'Natural Keys vs Surrogate Keys: The UUIDv4 vs UUIDv7 Tradeoff',
        bn: 'ন্যাচারাল কি বনাম সারোগেট কি: UUIDv4 বনাম UUIDv7 ট্রেডঅফ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A natural key is a pre-existing business attribute that happens to be unique, such as a taxpayer ID, passport number, or email address. Choosing natural keys as primary keys is notoriously dangerous in enterprise architecture. In the real world, people change their legal names and emails, government formats change, and companies merge. Updating a natural key forces the database to rewrite thousands of foreign keys across child tables in a massive, lock-heavy operation.',
        bn: 'ন্যাচারাল কি হলো এমন কোনো পূর্ব-বিদ্যমান ব্যবসায়িক বৈশিষ্ট্য যা স্বভাবতই অনন্য, যেমন ট্যাক্স আইডি, পাসপোর্ট নম্বর বা ইমেইল ঠিকানা। তবে এন্টারপ্রাইজ সিস্টেমে ন্যাচারাল কি-কে প্রাইমারি কি হিসেবে নির্বাচন করা মারাত্মক ঝুঁকিপূর্ণ। বাস্তব জীবনে মানুষের নাম বা ইমেইল পরিবর্তন হতে পারে, সরকারি আইডির ফরম্যাট বদলে যেতে পারে বা কোম্পানি একীভূত হতে পারে। ন্যাচারাল কি পরিবর্তন করলে শত শত চাইল্ড টেবিলে থাকা হাজার হাজার ফরেন কি আপডেট করতে হয় যা টেবিল লক করে ডাটাবেসের কার্যক্ষমতা ধীর করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Surrogate keys solve this by using meaningless, synthetic identifiers: either sequential 64-bit integers (BIGINT auto-increment) or Universally Unique Identifiers (UUIDs). While random UUIDv4 prevents sequence enumeration across microservices, it suffers from a devastating database performance penalty: completely random keys cause severe B-Tree index fragmentation and high disk page write amplification. Modern systems use UUIDv7, which embeds a 48-bit UNIX millisecond timestamp at the start, preserving sequential B-Tree append locality while maintaining global distributed uniqueness.',
        bn: 'সারোগেট কি অর্থহীন কৃত্রিম আইডেন্টিফায়ার ব্যবহারের মাধ্যমে এই সংকট সমাধান করে: হয় ক্রমিক ৬৪-বিট ইন্টিজার (BIGINT অটো-ইনক্রিমেন্ট) অথবা ইউনিভার্সাল ইউনিক আইডেন্টিফায়ার (UUID)। র্যান্ডম UUIDv4 মাইক্রোসার্ভিসে আইডি অনুমান করা ঠেকালেও ডাটাবেস পারফরম্যান্সে মারাত্মক ক্ষতি করে: সম্পূর্ণ এলোমেলো কি হওয়ায় বি-ট্রি ইনডেক্স খণ্ড-বিখণ্ড (fragmented) হয়ে যায় এবং ডিস্কের রাইট খরচ বহুগুণ বেড়ে যায়। আধুনিক সিস্টেমগুলো UUIDv7 ব্যবহার করে, যার শুরুতে ৪৮-বিট মিলিসেকেন্ড টাইমস্ট্যাম্প থাকে, যা বিশ্বব্যাপী অনন্যতার পাশাপাশি বি-ট্রি ইনডেক্সের অনুক্রমিক সংরক্ষণ গতি বজায় রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'node-key-engine',
      text: {
        en: 'Executable Key Engine: Foreign Key Cascades & Composite PK Enforcement',
        bn: 'রানযোগ্য কি ইঞ্জিন: ফরেন কি ক্যাসকেড ও কম্পোজিট PK প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js engine demonstrating relational key integrity. It initializes 3 relations (Authors, Books, and BookGenres), validates foreign key references, enforces composite primary key uniqueness, tests cascading deletes, and confirms delete restriction rules.',
        bn: 'নিচে রিলেশনাল কি অখণ্ডতা প্রদর্শনকারী একটি সম্পূর্ণ Node.js ইঞ্জিন দেওয়া হলো। এটি ৩টি রিলেশন (Authors, Books, এবং BookGenres) তৈরি করে, ফরেন কি রেফারেন্স যাচাই করে, কম্পোজিট প্রাইমারি কি-এর স্বাতন্ত্র্য নিশ্চিত করে, ক্যাসকেডিং ডিলিট পরীক্ষা করে এবং রেস্ট্রিক্ট নিয়ম কার্যকর করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Enforce primary and foreign key constraints across 3 relational tables with cascade and restrict logic',
        bn: 'ক্যাসকেড ও রেস্ট্রিক্ট লজিক সহ ৩টি রিলেশনাল টেবিলে প্রাইমারি ও ফরেন কি কনস্ট্রেইন্ট কার্যকরীকরণ'
      },
      code: `// Relational Key and Referential Integrity Simulation
const authors = [
  { id: 1, name: 'George Orwell' },
  { id: 2, name: 'Arthur C. Clarke' }
];

const books = [
  { id: 101, authorId: 1, title: '1984' },
  { id: 102, authorId: 1, title: 'Animal Farm' },
  { id: 103, authorId: 2, title: '2001: A Space Odyssey' }
];

// Junction table with Composite Primary Key: (bookId, genre)
let bookGenres = [
  { bookId: 101, genre: 'DYSTOPIAN' },
  { bookId: 101, genre: 'CLASSIC' },
  { bookId: 103, genre: 'SCI-FI' }
];

// Test 1: Orphan prevention - Block inserting book for non-existent author 999
let orphanBlocked = false;
try {
  const authorExists = authors.some(a => a.id === 999);
  if (!authorExists) {
    throw new Error('Foreign key violation: Author 999 does not exist');
  }
  books.push({ id: 104, authorId: 999, title: 'Ghost Book' });
} catch (err) {
  orphanBlocked = true;
}

// Test 2: Enforce Composite Primary Key uniqueness on (bookId, genre)
let duplicateJunctionBlocked = false;
try {
  const isDuplicate = bookGenres.some(bg => bg.bookId === 101 && bg.genre === 'DYSTOPIAN');
  if (isDuplicate) {
    throw new Error('Composite primary key violation on (bookId, genre)');
  }
  bookGenres.push({ bookId: 101, genre: 'DYSTOPIAN' });
} catch (err) {
  duplicateJunctionBlocked = true;
}

// Test 3: ON DELETE CASCADE - Deleting book 101 automatically deletes child bookGenres
const bookToDelete = 101;
const initialGenresCount = bookGenres.length;
bookGenres = bookGenres.filter(bg => bg.bookId !== bookToDelete);
const purgedGenresCount = initialGenresCount - bookGenres.length;

// Test 4: ON DELETE RESTRICT - Block deleting Author 1 while active books exist
let deleteAuthorBlocked = false;
try {
  const hasActiveBooks = books.some(b => b.authorId === 1);
  if (hasActiveBooks) {
    throw new Error('ON DELETE RESTRICT: Cannot delete author with existing child books');
  }
} catch (err) {
  deleteAuthorBlocked = true;
}

console.log('[Key Engine] Initialized 3 relations: Authors (PK), Books (PK + FK), BookGenres (Composite PK).');
console.log(\`[Integrity Check 1] Blocked orphan book referencing non-existent author_id 999 (1/1: \${orphanBlocked}).\`);
console.log(\`[Integrity Check 2] Enforced composite PK: duplicate (book 101, genre 'DYSTOPIAN') rejected (1/1: \${duplicateJunctionBlocked}).\`);
console.log(\`[Cascade Test] Deleting book 101 cascaded and purged \${purgedGenresCount} child junction records cleanly.\`);
console.log(\`[Restrict Test] Blocked author deletion while 2 books exist under ON DELETE RESTRICT (\${deleteAuthorBlocked}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'Production Practice: Always Index Your Foreign Keys',
        bn: 'প্রোডাকশন সেরা অনুশীলন: সর্বদা ফরেন কি ইনডেক্স করুন'
      },
      text: {
        en: 'Most relational engines build a unique search tree for PRIMARY KEY constraints by default, leaving secondary relation references unindexed. Adding an explicit B-Tree on foreign key columns (such as orders.customer_id) is vital to prevent full-table sequential scans during JOINs and parent row deletions.',
        bn: 'অধিকাংশ রিলেশনাল ডাটাবেস PRIMARY KEY-এর জন্য স্বয়ংক্রিয়ভাবে ইউনিক সার্চ ট্রি তৈরি করে, কিন্তু ফরেন রেফারেন্সগুলোকে ইনডেক্সহীন রাখে। জয়েন অপারেশন দ্রুত করতে এবং প্যারেন্ট রো ডিলিটের সময় সম্পূর্ণ টেবিল স্ক্যান এড়াতে ফরেন কি কলামে (যেমন orders.customer_id) স্পষ্ট বি-ট্রি ইনডেক্স তৈরি করা অত্যন্ত জরুরি।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Referential Integrity Checker Simulator',
        bn: 'রেফারেন্সিয়াল ইন্টিগ্রিটি চেকার সিমুলেটর'
      },
      description: {
        en: 'Test foreign key constraint rules: verify that references to valid parents succeed while invalid parent IDs are rejected.',
        bn: 'ফরেন কি কনস্ট্রেইন্ট পরীক্ষা করুন: বৈধ প্যারেন্ট আইডির রেফারেন্স গৃহীত হয় এবং ভুয়া আইডি বাতিল হয় কিনা তা দেখুন।'
      },
      code: `const parentUsers = [
  { id: 10, username: 'dev_lead' },
  { id: 20, username: 'sys_admin' }
];

function insertPost(postId, authorId, title) {
  // Check if foreign key exists in parentUsers
  const authorExists = parentUsers.some(u => u.id === authorId);
  if (!authorExists) {
    return 'FOREIGN_KEY_VIOLATION_ORPHAN_PREVENTED';
  }
  return \`POST_INSERTED_SUCCESSFULLY: \${title}\`;
}

console.log('Test 1 (Valid FK):', insertPost(101, 10, 'Scaling Relational Databases'));
console.log('Test 2 (Invalid FK):', insertPost(102, 999, 'Unpublished Draft'));`,
      tests: [
        {
          name: {
            en: 'Accepts valid foreign key referencing existing parent',
            bn: 'বিদ্যমান প্যারেন্টের সাথে যুক্ত সঠিক ফরেন কি গ্রহণ করে'
          },
          expected: 'Test 1 (Valid FK): POST_INSERTED_SUCCESSFULLY: Scaling Relational Databases'
        },
        {
          name: {
            en: 'Blocks foreign key referencing non-existent parent ID',
            bn: 'অনুপস্থিত প্যারেন্ট আইডির ফরেন কি রেফারেন্স বাতিল করে'
          },
          expected: 'Test 2 (Invalid FK): FOREIGN_KEY_VIOLATION_ORPHAN_PREVENTED'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'db-key-ex-1',
      kind: 'mcq',
      topic: 'cascade-rules-difference',
      question: {
        en: 'What is the operational difference between ON DELETE RESTRICT and ON DELETE CASCADE on a foreign key relationship?',
        bn: 'একটি ফরেন কি সম্পর্কের ক্ষেত্রে ON DELETE RESTRICT এবং ON DELETE CASCADE-এর মধ্যকার কার্যপদ্ধতির পার্থক্য কী?'
      },
      options: [
        {
          en: 'RESTRICT blocks deletion of the parent row if child records exist; CASCADE automatically deletes all associated child records when the parent is deleted',
          bn: 'RESTRICT চাইল্ড রেকর্ড থাকলে প্যারেন্ট রো মুছতে বাধা দেয়; আর CASCADE প্যারেন্ট রো মোছার সাথে সাথে সংশ্লিষ্ট সকল চাইল্ড রেকর্ড স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        },
        {
          en: 'RESTRICT encrypts the parent row, while CASCADE deletes the whole hard drive',
          bn: 'RESTRICT প্যারেন্ট রো এনক্রিপ্ট করে, আর CASCADE পুরো হার্ডড্রাইভ মুছে ফেলে'
        },
        {
          en: 'CASCADE can only be used on weekends, while RESTRICT runs on weekdays',
          bn: 'CASCADE কেবল ছুটির দিনে চালানো যায়, আর RESTRICT কর্মদিবসে চলে'
        },
        {
          en: 'RESTRICT converts text to numbers, while CASCADE converts numbers to text',
          bn: 'RESTRICT টেক্সটকে সংখ্যায় রূপান্তর করে, আর CASCADE সংখ্যাকে টেক্সটে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'RESTRICT protects children by stopping deletion; CASCADE purges children in lockstep.',
        bn: 'RESTRICT মোছা বন্ধ করে চাইল্ডকে রক্ষা করে; আর CASCADE একসাথে চাইল্ডগুলোকেও মুছে ফেলে।'
      },
      explanation: {
        en: 'ON DELETE RESTRICT aborts the DELETE transaction if any foreign key references the parent record, protecting against accidental data loss. ON DELETE CASCADE automatically propagates the deletion to all child rows.',
        bn: 'ON DELETE RESTRICT কোনো চাইল্ড রেকর্ড থাকলে প্যারেন্ট ডিলিট স্টেটমেন্ট বাতিল করে ডাটা ক্ষতি প্রতিরোধ করে। অন্যদিকে ON DELETE CASCADE প্যারেন্টের সাথে সাথে সকল চাইল্ড সারিতে স্বয়ংক্রিয়ভাবে ডিলিট কার্যকর করে।'
      }
    },
    {
      id: 'db-key-ex-2',
      kind: 'mcq',
      topic: 'uuidv7-vs-uuidv4-btree-advantage',
      question: {
        en: 'Why is time-ordered UUIDv7 dramatically superior to purely random UUIDv4 as a database primary key?',
        bn: 'ডাটাবেস প্রাইমারি কি হিসেবে সম্পূর্ণ এলোমেলো UUIDv4 এর চেয়ে সময়-অনুক্রমিক UUIDv7 কেন অনেক বেশি কার্যকর?'
      },
      options: [
        {
          en: 'UUIDv7 begins with a millisecond timestamp, maintaining sequential B-Tree insert locality and eliminating index page fragmentation',
          bn: 'UUIDv7 এর শুরুতে মিলিসেকেন্ড টাইমস্ট্যাম্প থাকে, যা অনুক্রমিক বি-ট্রি ইনসার্ট গতি বজায় রাখে এবং ইনডেক্স ফ্র্যাগমেন্টেশন রোধ করে'
        },
        {
          en: 'UUIDv7 uses only 1 byte of storage, while UUIDv4 uses 1 gigabyte',
          bn: 'UUIDv7 মাত্র ১ বাইট জায়গা নেয়, আর UUIDv4 ১ গিগাবাইট জায়গা নেয়'
        },
        {
          en: 'UUIDv7 does not require an operating system to run',
          bn: 'UUIDv7 চলার জন্য কোনো অপারেটিং সিস্টেমের প্রয়োজন হয় না'
        },
        {
          en: 'UUIDv4 can only store vowels, while UUIDv7 stores consonants',
          bn: 'UUIDv4 শুধুমাত্র স্বরবর্ণ রাখতে পারে, আর UUIDv7 ব্যঞ্জনবর্ণ রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'B-Tree indexes perform fastest when new keys are inserted sequentially at the right leaf.',
        bn: 'নতুন কি যখন ক্রমানুসারে ডানদিকের লিফ নোডে যুক্ত হয় তখন বি-ট্রি ইনডেক্স সবচেয়ে দ্রুত কাজ করে।'
      },
      explanation: {
        en: 'Random UUIDv4 values scatter inserts randomly throughout the B-Tree, causing constant page splits and severe cache eviction. UUIDv7 prefixes a 48-bit timestamp, ensuring inserts append sequentially to the B-Tree while retaining global uniqueness.',
        bn: 'এলোমেলো UUIDv4 মানগুলো বি-ট্রির বিভিন্ন অংশে ছড়িয়ে-ছিটিয়ে ইনসার্ট হয়, ফলে প্রচুর পেজ স্প্লিট ও মেমরি ক্যাশ অপচয় ঘটে। UUIDv7 শুরুতে ৪৮-বিট টাইমস্ট্যাম্প যুক্ত করায় ইনসার্টগুলো ক্রমানুসারে যুক্ত হয় এবং বিশ্বব্যাপী অনন্যতাও নিশ্চিত থাকে।'
      }
    },
    {
      id: 'db-key-ex-3',
      kind: 'mcq',
      topic: 'composite-key-junction-table',
      question: {
        en: 'Why do relational junction tables (like order_items or student_enrollments) use composite primary keys?',
        bn: 'রিলেশনাল জাংশন টেবিলগুলোতে (যেমন order_items বা enrollments) কেন কম্পোজিট প্রাইমারি কি ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'To enforce that the combination of foreign keys (e.g. order_id and product_id) is unique, preventing duplicate pairings in a single order',
          bn: 'ফরেন কি-গুলোর সমন্বয় (যেমন order_id এবং product_id) যেন অনন্য হয় তা নিশ্চিত করতে, যাতে একই অর্ডারে একই পণ্য দুইবার যুক্ত না হয়'
        },
        {
          en: 'Because SQL prohibits tables from having single-column primary keys',
          bn: 'কারণ SQL টেবিলে একক কলামের প্রাইমারি কি থাকা আইনত নিষিদ্ধ'
        },
        {
          en: 'To make table exports compress twice as fast',
          bn: 'টেবিল এক্সপোর্ট দ্বিগুণ দ্রুত কম্প্রেস করার সুবিধা দিতে'
        },
        {
          en: 'Because junction tables cannot hold numeric data types',
          bn: 'কারণ জাংশন টেবিল কোনো সংখ্যার ডাটা টাইপ সংরক্ষণ করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'A composite key prevents duplicate links between the same two parent records.',
        bn: 'একটি কম্পোজিট কি একই দুটি প্যারেন্ট রেকর্ডের মধ্যে ডুপ্লিকেট সংযোগ রোধ করে।'
      },
      explanation: {
        en: 'A composite primary key across (order_id, product_id) guarantees that each product can appear at most once per order, enforcing domain integrity without requiring artificial surrogate IDs.',
        bn: '(order_id, product_id) এর ওপর একটি কম্পোজিট প্রাইমারি কি নিশ্চিত করে যে একটি অর্ডারে নির্দিষ্ট পণ্যটি সর্বোচ্চ একবারই থাকতে পারবে, ফলে কৃত্রিম সারোগেট আইডি ছাড়াই ডাটার বিশুদ্ধতা রক্ষা পায়।'
      }
    },
    {
      id: 'db-key-ex-4',
      kind: 'mcq',
      topic: 'indexing-foreign-keys',
      question: {
        en: 'Why should software engineers always manually add a B-Tree index to foreign key columns in relational databases?',
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারদের কেন সর্বদা রিলেশনাল ডাটাবেসের ফরেন কি কলামগুলোতে ম্যানুয়ালি বি-ট্রি ইনডেক্স তৈরি করা উচিত?'
      },
      options: [
        {
          en: 'Because RDBMS engines do not automatically index foreign keys, leading to catastrophic sequential table scans during JOINs and parent deletions',
          bn: 'কারণ ডাটাবেস ইঞ্জিন স্বয়ংক্রিয়ভাবে ফরেন কি ইনডেক্স করে না, যার ফলে জয়েন এবং প্যারেন্ট রো ডিলিটের সময় মারাত্মক ফুল-টেবিল স্ক্যান ঘটে'
        },
        {
          en: 'Because foreign key columns are automatically deleted without an index',
          bn: 'কারণ ইনডেক্স না থাকলে ফরেন কি কলাম স্বয়ংক্রিয়ভাবে মুছে যায়'
        },
        {
          en: 'Because SQL syntax produces an error if foreign keys do not have indexes',
          bn: 'কারণ ফরেন কি-তে ইনডেক্স না থাকলে SQL সিনট্যাক্স এরর দেয়'
        },
        {
          en: 'Because indexes reduce the physical file size of the database by half',
          bn: 'কারণ ইনডেক্স ডাটাবেসের ভৌত ফাইলের আকার অর্ধেক কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Engines auto-index primary keys, but leave foreign keys unindexed by default.',
        bn: 'ডাটাবেস ইঞ্জিন প্রাইমারি কি স্বয়ংক্রিয়ভাবে ইনডেক্স করলেও ফরেন কি ডিফল্টভাবে ইনডেক্সহীন রাখে।'
      },
      explanation: {
        en: 'When deleting a parent row, the database must verify that no child rows reference it. Without an index on the foreign key column, this check requires a full sequential scan of the child table, creating severe database latency.',
        bn: 'প্যারেন্ট রো মোছার সময় ডাটাবেসকে নিশ্চিত হতে হয় কোনো চাইল্ড রো তাকে রেফারেন্স করছে কিনা। ফরেন কি কলামে ইনডেক্স না থাকলে এই পরীক্ষার জন্য সম্পূর্ণ চাইল্ড টেবিল স্ক্যান করতে হয়, যা ডাটাবেসকে অত্যন্ত ধীরগতির করে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'keys-and-the-key-quiz',
    title: {
      en: 'Primary, Composite & Foreign Keys Quiz',
      bn: 'প্রাইমারি, কম্পোজিট ও ফরেন কি কুইজ'
    },
    questions: [
      {
        id: 'db-key-qz-1',
        kind: 'mcq',
        topic: 'candidate-key-definition',
        question: {
          en: 'What mathematical definition distinguishes a candidate key from a general superkey?',
          bn: 'কোন গাণিতিক বৈশিষ্ট্য একটি ক্যান্ডিডেট কি-কে সাধারণ সুপার-কি থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'A candidate key is a minimal superkey containing no redundant attributes',
            bn: 'ক্যান্ডিডেট কি হলো একটি মিনিমাল সুপার-কি যাতে কোনো অপ্রয়োজনীয় বা অতিরিক্ত কলাম থাকে না'
          },
          {
            en: 'A candidate key can only contain negative numbers',
            bn: 'ক্যান্ডিডেট কি কেবল ঋণাত্মক সংখ্যা ধারণ করতে পারে'
          },
          {
            en: 'A candidate key must be written entirely in capital letters',
            bn: 'ক্যান্ডিডেট কি সম্পূর্ণ বড় হাতের অক্ষরে লিখতে হয়'
          },
          {
            en: 'A candidate key can only be queried on Linux servers',
            bn: 'ক্যান্ডিডেট কি শুধুমাত্র লিনাক্স সার্ভারে কোয়েরি করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Minimality: drop even 1 attribute and uniqueness is lost.',
          bn: 'মিনিমালিটি: মাত্র ১টি কলাম বাদ দিলেও স্বাতন্ত্র্য নষ্ট হয়ে যায়।'
        },
        explanation: {
          en: 'While any combination that uniquely identifies a row is a superkey, a candidate key is minimal: no subset of its attributes can uniquely identify tuples. The primary key is chosen from among the candidate keys.',
          bn: 'সারিকে এককভাবে শনাক্ত করতে পারে এমন যেকোনো সেট সুপার-কি হলেও ক্যান্ডিডেট কি হলো সবচেয়ে সংক্ষিপ্ত সেট: এর কোনো অংশ আলাদাভাবে সম্পূর্ণ সারি শনাক্ত করতে পারে না। ক্যান্ডিডেট কি-গুলোর মধ্য থেকেই প্রাইমারি কি বেছে নেওয়া হয়।'
        }
      },
      {
        id: 'db-key-qz-2',
        kind: 'mcq',
        topic: 'natural-key-drawback',
        question: {
          en: 'What is the primary architectural drawback of using a natural key (such as an email address) as a primary key?',
          bn: 'একটি ন্যাচারাল কি (যেমন ইমেইল ঠিকানা) প্রাইমারি কি হিসেবে ব্যবহারের প্রধান স্থাপত্যগত ত্রুটি কী?'
        },
        options: [
          {
            en: 'Real-world business values can change or require correction, causing cascading updates across all dependent child tables and index locks',
            bn: 'বাস্তব জীবনের ব্যবসায়িক মান পরিবর্তন হতে পারে, যার ফলে সকল নির্ভরশীল চাইল্ড টেবিলে ক্যাসকেডিং আপডেট চালাতে হয় এবং টেবিল লক হয়ে যায়'
          },
          {
            en: 'Natural keys cannot be sorted in alphabetical order',
            bn: 'ন্যাচারাল কি বর্ণানুক্রমিকভাবে সাজানো যায় না'
          },
          {
            en: 'Email addresses are permanently prohibited by SQL standards',
            bn: 'SQL স্ট্যান্ডার্ড দ্বারা ইমেইল ঠিকানা ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          },
          {
            en: 'Natural keys can only hold up to 3 characters of text',
            bn: 'ন্যাচারাল কি কেবল ৩ অক্ষরের টেক্সট ধারণ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Immutable surrogate IDs decouple system identity from mutable real-world values.',
          bn: 'অপরিবর্তনীয় সারোগেট আইডি পরিবর্তনশীল বাস্তব মান থেকে সিস্টেমের পরিচয়কে আলাদা রাখে।'
        },
        explanation: {
          en: 'If a customer changes their email address, updating a natural primary key cascades updates to millions of historical orders, invoices, and logs. Surrogate keys provide stable, immutable identities that never change.',
          bn: 'গ্রাহক ইমেইল পরিবর্তন করলে ন্যাচারাল প্রাইমারি কি পরিবর্তনের কারণে লক্ষ লক্ষ পুরোনো অর্ডার, ইনভয়েস ও লগে ক্যাসকেডিং আপডেট করতে হয়। সারোগেট কি এমন এক অপরিবর্তনীয় পরিচয় দেয় যা কখনোই বদলাতে হয় না।'
        }
      },
      {
        id: 'db-key-qz-3',
        kind: 'mcq',
        topic: 'on-delete-set-null-behavior',
        question: {
          en: 'What happens when a parent row is deleted under the ON DELETE SET NULL foreign key constraint rule?',
          bn: 'ON DELETE SET NULL ফরেন কি নিয়মের অধীনে প্যারেন্ট রো মুছে ফেললে কী ঘটে?'
        },
        options: [
          {
            en: 'The child rows are preserved, but their foreign key column values are automatically updated to NULL',
            bn: 'চাইল্ড রো মুছে যায় না, কিন্তু তাদের ফরেন কি কলামের মান স্বয়ংক্রিয়ভাবে NULL হয়ে যায়'
          },
          {
            en: 'All child rows are permanently deleted along with the parent',
            bn: 'প্যারেন্টের সাথে সাথে সকল চাইল্ড রো চিরতরে মুছে যায়'
          },
          {
            en: 'The database server immediately terminates the user database connection',
            bn: 'ডাটাবেস সার্ভার সাথে সাথে ব্যবহারকারীর সংযোগ বিচ্ছিন্ন করে দেয়'
          },
          {
            en: 'The parent row is moved to the recycle bin table',
            bn: 'প্যারেন্ট রো রিসাইকেল বিন টেবিলে স্থানান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Child records remain intact, but become disassociated from the deleted parent.',
          bn: 'চাইল্ড রেকর্ডগুলো অক্ষত থাকে, কিন্তু মুছে যাওয়া প্যারেন্ট থেকে সম্পর্কহীন হয়ে যায়।'
        },
        explanation: {
          en: 'ON DELETE SET NULL disassociates child rows without deleting them. For example, if a department is deleted, employee records are retained with department_id set to NULL.',
          bn: 'ON DELETE SET NULL চাইল্ড সারিগুলোকে মুছে না ফেলে সম্পর্কহীন করে দেয়। উদাহরণস্বরূপ, কোনো ডিপার্টমেন্ট মুছে ফেলা হলেও কর্মীদের রেকর্ড মুছে যায় না, কেবল তাদের department_id কলামে NULL বসে যায়।'
        }
      },
      {
        id: 'db-key-qz-4',
        kind: 'mcq',
        topic: 'referential-integrity-guarantee',
        question: {
          en: 'What fundamental guarantee does referential integrity provide in an RDBMS?',
          bn: 'একটি RDBMS-এ রেফারেন্সিয়াল ইন্টিগ্রিটি কোন মৌলিক নিশ্চয়তা প্রদান করে?'
        },
        options: [
          {
            en: 'No foreign key value can exist in a child table unless it matches a valid primary key in the parent table, preventing orphaned records',
            bn: 'প্যারেন্ট টেবিলে বৈধ প্রাইমারি কি না থাকলে চাইল্ড টেবিলে কোনো ফরেন কি থাকতে পারে না, যা সম্পর্কহীন এতিম সারি তৈরি হওয়া রোধ করে'
          },
          {
            en: 'All database queries are guaranteed to run in under 1 millisecond',
            bn: 'সকল ডাটাবেস কোয়েরি ১ মিলিসেকেন্ডের নিচে সম্পন্ন হওয়ার নিশ্চয়তা পায়'
          },
          {
            en: 'The database will automatically backup to the cloud every 10 minutes',
            bn: 'ডাটাবেস প্রতি ১০ মিনিট পর পর স্বয়ংক্রিয়ভাবে ক্লাউডে ব্যাকআপ নেবে'
          },
          {
            en: 'Passwords are encrypted with 512-bit military encryption',
            bn: 'পাসওয়ার্ডগুলো ৫১২-বিট মিলিটারি এনক্রিপশনে এনক্রিপ্ট হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It guarantees that all pointers and foreign references always point to existing data.',
          bn: 'এটি নিশ্চিত করে যে সকল ফরেন রেফারেন্স সর্বদা বিদ্যমান বৈধ ডাটাকেই নির্দেশ করছে।'
        },
        explanation: {
          en: 'Referential integrity guarantees that foreign keys always point to valid, existing parent rows. It makes it mathematically impossible to have an order pointing to a deleted customer or an invoice referencing a non-existent account.',
          bn: 'রেফারেন্সিয়াল ইন্টিগ্রিটি নিশ্চিত করে যে ফরেন কি সর্বদা বিদ্যমান বৈধ প্যারেন্ট সারিকেই নির্দেশ করে। এটি এমন কোনো পরিস্থিতি তৈরি হতে দেয় না যেখানে কোনো অর্ডার মুছে যাওয়া গ্রাহককে খুঁজছে বা কোনো ইনভয়েস অস্তিত্বহীন অ্যাকাউন্টকে নির্দেশ করছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'joins-and-the-join',
    title: {
      en: 'Relational Joins: Inner, Left, Right & Full Outer Joins',
      bn: 'রিলেশনাল জয়েন: ইনার, লেফট, রাইট ও ফুল আউটার জয়েন'
    }
  }
};
