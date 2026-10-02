import type { Lesson } from '../../../lib/types';

export const ExtensionsOnTheShelfLesson: Lesson = {
  slug: 'extensions-on-the-shelf',
  tech: 'flask',
  title: {
    en: 'Extensions & ORM — Flask-SQLAlchemy, Migrations & Sessions',
    bn: 'এক্সটেনশন ও ওআরএম — ফ্লাস্ক-এসকিউএলঅ্যালকেমি, মাইগ্রেশন ও সেশন'
  },
  summary: {
    en: 'Flask relies on modular extensions to integrate database persistence and schema migrations. In this lesson, you will master Flask-SQLAlchemy model declarations, relational mapping with foreign keys, transactional session lifecycles (commit and rollback), and schema evolution using Flask-Migrate with Alembic.',
    bn: 'ফ্লাস্ক ডাটাবেজ সংরক্ষণ এবং স্কিমা মাইগ্রেশনের জন্য মডিউলার এক্সটেনশনের ওপর নির্ভর করে। এই পাঠে আপনি Flask-SQLAlchemy মডেল ঘোষণা, ফরেন কি সহ রিলেশনাল ম্যাপিং, ট্রানজেকশনাল সেশন লাইফসাইকেল (commit ও rollback) এবং Alembic চালিত Flask-Migrate দিয়ে ডাটাবেজ স্কিমা পরিচালনা গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'sqlalchemy-extension-architecture',
      text: {
        en: 'The Flask-SQLAlchemy and Flask-Migrate Architecture',
        bn: 'ফ্লাস্ক-এসকিউএলঅ্যালকেমি ও ফ্লাস্ক-মাইগ্রেট আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your application persists structured business records, an Object-Relational Mapper (ORM) like Flask-SQLAlchemy (the database library) bridges Python classes with relational database engines. It provides declarative model mapping, manages thread-scoped database sessions, and coordinates with Flask-Migrate to track schema revisions, allowing database tables to evolve without loss of live data.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন গুরুত্বপূর্ণ ব্যবসায়িক তথ্য সংরক্ষণ করে, তখন Flask-SQLAlchemy (ডাটাবেজ লাইব্রেরি)-এর মতো একটি অবজেক্ট-রিলেশনাল ম্যাপার (ORM) পাইথন ক্লাসকে রিলেশনাল ডাটাবেজের সাথে সংযুক্ত করে। এটি ডিক্লেয়ারেটিভ মডেল ম্যাপিং প্রদান করে, থ্রেড-স্কোপড ডাটাবেজ সেশন পরিচালনা করে এবং Flask-Migrate-এর সাথে সমন্বয় করে স্কিমার পরিবর্তন ট্র্যাক করে, ফলে লাইভ ডাটা না হারিয়েই টেবিল আপডেট করা সম্ভব হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Flask-SQLAlchemy',
          def: {
            en: 'An extension providing convenient wrappers around SQLAlchemy ORM, including connection pooling and automatic session teardown.',
            bn: 'একটি এক্সটেনশন যা SQLAlchemy ওআরএম-এর চারপাশে সংযোগ পুলিং এবং রিকোয়েস্ট শেষে সেশন বন্ধ করার স্বয়ংক্রিয় সুবিধা দেয়।'
          }
        },
        {
          term: 'Scoped Session (db.session)',
          def: {
            en: 'A thread-local transactional workspace tracking pending object changes (add, commit, rollback) within the boundary of a single HTTP request.',
            bn: 'একটি থ্রেড-লোকাল ট্রানজেকশনাল ওয়ার্কস্পেস যা একক এইচটিটিপি রিকোয়েস্টের ভেতর অবজেক্ট পরিবর্তন (add, commit, rollback) পরিচালনা করে।'
          }
        },
        {
          term: 'Flask-Migrate (Alembic)',
          def: {
            en: 'An extension integrating the Alembic database migration toolkit into the Flask CLI for version-controlled schema upgrades.',
            bn: 'একটি এক্সটেনশন যা ফ্লাস্ক সিএলআই-তে Alembic মাইগ্রেশন যুক্ত করে ডাটাবেজের স্কিমা ভার্সন নিয়ন্ত্রণ ও আপগ্রেড করতে সাহায্য করে।'
          }
        },
        {
          term: 'db.relationship & foreign_key',
          def: {
            en: 'Constructs connecting related tables (one-to-many, many-to-many) allowing object-oriented navigation across records.',
            bn: 'এমন কিছু উপাদান যা টেবিলগুলোর মাঝে সম্পর্ক (one-to-many, many-to-many) তৈরি করে অবজেক্টের মাধ্যমে ডাটা এক্সেস করতে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'migration-commands-matrix',
      text: {
        en: 'Flask-Migrate CLI Command Matrix',
        bn: 'ফ্লাস্ক-মাইগ্রেট সিএলআই কমান্ড ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Command', bn: 'কমান্ড' },
        { en: 'Operation Performed', bn: 'সম্পাদিত অপারেশন' },
        { en: 'Lifecycle Stage', bn: 'লাইফসাইকেলের ধাপ' }
      ],
      rows: [
        [
          { en: 'flask db init', bn: 'flask db init' },
          { en: 'Initializes the "migrations" directory containing Alembic environment scripts', bn: 'Alembic এনভায়রনমেন্ট স্ক্রিপ্ট সহ "migrations" ফোল্ডার তৈরি করে' },
          { en: 'Run once at project inception', bn: 'প্রজেক্টের শুরুতে মাত্র একবার চলে' }
        ],
        [
          { en: 'flask db migrate -m "add posts"', bn: 'flask db migrate -m "add posts"' },
          { en: 'Detects model diffs and generates an ordered version migration script', bn: 'মডেলের পরিবর্তন শনাক্ত করে ক্রমিক ভার্সন ফাইল তৈরি করে' },
          { en: 'Run in development after model changes', bn: 'মডেল পরিবর্তনের পর লোকাল ডেভেলপমেন্টে চলে' }
        ],
        [
          { en: 'flask db upgrade', bn: 'flask db upgrade' },
          { en: 'Applies unapplied migration scripts against the target database', bn: 'ডাটাবেজে না চলা মাইগ্রেশন স্ক্রিপ্টগুলো কার্যকর করে' },
          { en: 'Run during CI/CD deployment before server launch', bn: 'সার্ভার চালুর ঠিক আগে সিআই/সিডি পাইপলাইনে চলে' }
        ],
        [
          { en: 'flask db downgrade', bn: 'flask db downgrade' },
          { en: 'Reverts the most recently applied migration script safely', bn: 'সবচেয়ে সাম্প্রতিক কার্যকর হওয়া মাইগ্রেশন স্ক্রিপ্ট রোলব্যাক করে' },
          { en: 'Used for testing rollbacks or emergency deployment aborts', bn: 'রোলব্যাক পরীক্ষা বা জরুরি ডেপ্লয়মেন্ট বাতিলে ব্যবহৃত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'orm-session-code',
      text: {
        en: 'Working Transactional Session and Rollback Simulation',
        bn: 'কার্যকরী ট্রানজেকশনাল সেশন ও রোলব্যাক সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Flask-SQLAlchemy Unit of Work and Rollback
class MockDatabaseSession {
  constructor() {
    this.committedRecords = [];
    this.pendingQueue = [];
  }

  add(record) {
    this.pendingQueue.push(record);
  }

  commit() {
    this.committedRecords.push(...this.pendingQueue);
    this.pendingQueue = [];
    return this.committedRecords.length;
  }

  rollback() {
    this.pendingQueue = []; // Discard pending uncommitted writes
    return this.committedRecords.length;
  }
}

// 1. Initializing database session
const dbSession = new MockDatabaseSession();

// 2. Successful user creation transaction
dbSession.add({ id: 1, username: 'alex', email: 'alex@example.com' });
dbSession.add({ id: 2, username: 'maria', email: 'maria@example.com' });
const committedCount = dbSession.commit();

// 3. Failed transaction with automatic rollback
try {
  dbSession.add({ id: 3, username: 'corrupted', email: null });
  // Simulating constraint failure
  throw new Error('NOT NULL constraint violated for column email');
} catch (err) {
  dbSession.rollback();
}

console.log('Successfully committed users count:', committedCount);
// -> Successfully committed users count: 2
console.log('Active committed records in database:', dbSession.committedRecords.length);
// -> Active committed records in database: 2
console.log('Pending uncommitted records after rollback:', dbSession.pendingQueue.length);
// -> Pending uncommitted records after rollback: 0`,
      caption: {
        en: 'Session commits 2 valid users and rolls back failed transaction leaving 0 pending',
        bn: 'সেশন ২টি বৈধ ইউজার সেভ করছে এবং রোলব্যাকের মাধ্যমে পেন্ডিং ডাটা ০ করছে'
      }
    },
    {
      type: 'heading',
      id: 'orm-best-practices',
      text: {
        en: 'Production ORM Patterns and Migration Rules',
        bn: 'প্রোডাকশন ওআরএম প্যাটার্ন ও মাইগ্রেশন নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production deployments, never invoke db.create_all() at server startup. While db.create_all() creates missing tables, it cannot alter existing columns, add indexes, or migrate historic records. Schema evolution must strictly be managed through Flask-Migrate revision scripts committed to version control.',
        bn: 'প্রোডাকশন পরিবেশে সার্ভার চালুর সময় কখনোই db.create_all() কল করবেন না। কারণ db.create_all() নতুন টেবিল বানালেও বিদ্যমান কলাম পরিবর্তন করতে, ইনডেক্স যোগ করতে বা পুরোনো ডাটা স্থানান্তর করতে পারে না। ডাটাবেজ স্কিমার পরিবর্তন সর্বদা গিট-এ কমিট করা Flask-Migrate স্ক্রিপ্ট দিয়েই পরিচালনা করা উচিত।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Never Use create_all in Production: Use Flask-Migrate (flask db upgrade) to apply schema changes without dropping live data.',
          bn: '১. প্রোডাকশনে create_all নয়: লাইভ ডাটা অক্ষুণ্ণ রেখে স্কিমা আপডেট করতে সর্বদা Flask-Migrate (flask db upgrade) চালান।'
        },
        {
          en: '2. Explicit Session Rollback on Errors: Catch exceptions during database writes and explicitly invoke db.session.rollback().',
          bn: '২. এররে স্পষ্ট রোলব্যাক: ডাটাবেজ রাইট করার সময় এক্সেপশন দেখা দিলে অবিলম্বে db.session.rollback() কল করুন।'
        },
        {
          en: '3. Add Indexes to Filter Columns: Declare index=True on ForeignKey columns and frequently queried attributes like email or slug.',
          bn: '৩. ফিল্টার কলামে ইনডেক্স: ForeignKey এবং সার্চে ব্যবহৃত কলামে (যেমন email বা slug) index=True ব্যবহার করুন।'
        },
        {
          en: '4. Paginate Large Queries: Never call .all() on unconstrained tables; always use db.paginate() to bound memory consumption.',
          bn: '৪. পেজিনেশন ব্যবহার বাধ্যতামূলক: বড় টেবিলে সরাসরি .all() কল না করে মেমরি বাঁচাতে db.paginate() ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fl-ext-ex1',
      kind: 'mcq',
      topic: 'create_all versus flask db upgrade in production',
      question: {
        en: 'Why is running "db.create_all()" inside production applications considered an anti-pattern compared to "flask db upgrade"?',
        bn: 'প্রোডাকশনে "flask db upgrade"-এর তুলনায় "db.create_all()" চালানোকে কেন একটি অ্যান্টি-প্যাটার্ন বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'db.create_all() only creates completely missing tables; it cannot add columns, rename fields, or migrate existing records in live production tables',
          bn: 'db.create_all() কেবল অনুপস্থিত নতুন টেবিল বানায়; এটি লাইভ টেবিলের কলাম পরিবর্তন বা পুরোনো ডাটা মাইগ্রেট করতে অক্ষম'
        },
        {
          en: 'db.create_all() deletes all records in the database every 10 minutes',
          bn: 'db.create_all() প্রতি ১০ মিনিটে ডাটাবেজের সব রেকর্ড মুছে ফেলে'
        },
        {
          en: 'It requires an active internet connection to download SQL scripts',
          bn: 'এটি এসকিউএল স্ক্রিপ্ট ডাউনলোডের জন্য সার্বক্ষণিক ইন্টারনেট সংযোগ দাবি করে'
        },
        {
          en: 'Python disables db.create_all() on Linux operating systems',
          bn: 'লিনাক্স অপারেটিং সিস্টেমে পাইথন db.create_all() নিষিদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'create_all ignores changes to already existing database tables.',
        bn: 'create_all আগেই তৈরি থাকা ডাটাবেজ টেবিলের কোনো নতুন পরিবর্তন ধরতে পারে না।'
      },
      explanation: {
        en: 'db.create_all() executes CREATE TABLE IF NOT EXISTS. If the table already exists, it ignores any new columns added in Python models. Migrations (Flask-Migrate) generate ALTER TABLE statements.',
        bn: 'db.create_all() শুধু নতুন টেবিল তৈরি করে। টেবিল আগেই থাকলে মডেলে নতুন কলাম যোগ করলেও তা ডাটাবেজে তৈরি হয় না। এর জন্য মাইগ্রেশন প্রয়োজন।'
      }
    },
    {
      id: 'fl-ext-ex2',
      kind: 'mcq',
      topic: 'handling failed transactions with db session rollback',
      question: {
        en: 'What is the required error-handling pattern when a database operation fails during "db.session.commit()"?',
        bn: '"db.session.commit()" চলার সময় ডাটাবেজ অপারেশন ব্যর্থ হলে কোন এরর-হ্যান্ডলিং প্যাটার্নটি অনুসরণ করা আবশ্যক?'
      },
      options: [
        {
          en: 'Wrap the commit in a try-except block and call "db.session.rollback()" inside the except block to reset the broken session state',
          bn: 'কমিটকে try-except ব্লকে মুড়ে except-এর ভেতর "db.session.rollback()" কল করতে হবে যাতে নষ্ট হওয়া সেশন পরিষ্কার হয়'
        },
        {
          en: 'Restart the operating system server immediately',
          bn: 'অবিলম্বে অপারেটিং সিস্টেম সার্ভার রিস্টার্ট করতে হবে'
        },
        {
          en: 'Delete the entire migrations folder from disk',
          bn: 'ডিস্ক থেকে সম্পূর্ণ migrations ফোল্ডারটি মুছে ফেলতে হবে'
        },
        {
          en: 'Retry the exact same commit in an infinite while loop',
          bn: 'একটি ইনফিনিট হোয়াইল লুপে বারবার একই কমিট চালাতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A failed transaction leaves the session in an unusable state until rolled back.',
        bn: 'ব্যর্থ ট্রানজেকশনের পর রোলব্যাক না করা পর্যন্ত সেশনটি আর ব্যবহারযোগ্য থাকে না।'
      },
      explanation: {
        en: 'When a database error occurs, the session remains in an active failed transaction. Calling db.session.rollback() aborts the transaction and returns the session to a clean state.',
        bn: 'ডাটাবেজে ত্রুটি হলে সেশনটি ব্যর্থ অবস্থায় আটকে থাকে। db.session.rollback() কল করলে ট্রানজেকশন বাতিল হয়ে সেশনটি আবার ফ্রেশ অবস্থায় ফিরে আসে।'
      }
    },
    {
      id: 'fl-ext-ex3',
      kind: 'mcq',
      topic: 'pagination memory optimization with db paginate',
      question: {
        en: 'Why should large queries use "db.paginate(page=1, per_page=20)" rather than "User.query.all()"?',
        bn: 'বড় টেবিলে "User.query.all()"-এর বদলে "db.paginate(page=1, per_page=20)" কেন ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'It executes SQL LIMIT and OFFSET queries to load only 20 records into Python RAM at a time, avoiding Out-Of-Memory crashes on million-row tables',
          bn: 'এটি এসকিউএল LIMIT ও OFFSET ব্যবহার করে মেমরিতে একবারে কেবল ২০টি রেকর্ড তোলে, ফলে বিশাল টেবিলেও মেমরি ক্র্যাশ হয় না'
        },
        {
          en: 'It converts the relational database into an Excel spreadsheet',
          bn: 'এটি রিলেশনাল ডাটাবেজকে এক্সেল স্প্রেডশীটে রূপান্তর করে'
        },
        {
          en: 'It encrypts database rows using AES-128',
          bn: 'এটি এইএস-১২৮ দিয়ে ডাটাবেজের রো এনক্রিপ্ট করে'
        },
        {
          en: 'db.paginate() is required by the HTTP 1.1 protocol specification',
          bn: 'এইচটিটিপি ১.১ স্পেসিফিকেশনে db.paginate() বাধ্যতামূলক করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pagination fetches slices of data using SQL LIMIT and OFFSET.',
        bn: 'পেজিনেশন এসকিউএল LIMIT ও OFFSET ব্যবহার করে নির্দিষ্ট পরিমাণের ডাটা তোলে।'
      },
      explanation: {
        en: 'Calling .all() loads every single database row into Python memory at once. Pagination bounds query results to small slices, preserving server memory.',
        bn: '.all() কল করলে সব রেকর্ড একসাথে পাইথন মেমরিতে চলে আসে যা সার্ভার ক্র্যাশ করাতে পারে। পেজিনেশন নির্দিষ্ট সংখ্যক ডাটা এনে সার্ভার নিরাপদ রাখে।'
      }
    },
    {
      id: 'fl-ext-ex4',
      kind: 'mcq',
      topic: 'database session teardown in flask',
      question: {
        en: 'How does Flask-SQLAlchemy prevent database connection leaks across concurrent web requests?',
        bn: 'একসাথে বহু রিকোয়েস্ট চললে Flask-SQLAlchemy কীভাবে ডাটাবেজ কানেকশন লিক হওয়া প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'It registers an @app.teardown_appcontext hook that automatically removes the thread-scoped session and returns the database connection back to the connection pool on request exit',
          bn: 'এটি একটি @app.teardown_appcontext হুক যুক্ত করে যা রিকোয়েস্ট শেষে থ্রেড-স্কোপড সেশন পরিষ্কার করে কানেকশনটি পুলে ফেরত পাঠিয়ে দেয়'
        },
        {
          en: 'It drops the database connection permanently and reconnects on every character typed',
          bn: 'এটি সংযোগ স্থায়ীভাবে বন্ধ করে দেয় এবং প্রতিটি অক্ষরের জন্য পুনরায় কানেক্ট করে'
        },
        {
          en: 'It writes connection logs to a floppy disk drive',
          bn: 'এটি ফ্লপি ডিস্কে কানেকশন সংক্রান্ত লগ লেখে'
        },
        {
          en: 'Connection pooling is not supported in SQLAlchemy',
          bn: 'SQLAlchemy-তে কানেকশন পুলিং সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Teardown hooks guarantee scoped sessions are removed after each request context ends.',
        bn: 'টিয়ারডাউন হুক নিশ্চিত করে যাতে প্রতিটি রিকোয়েস্ট শেষে সেশন নিজে থেকেই মুক্ত হয়ে যায়।'
      },
      explanation: {
        en: 'Flask-SQLAlchemy binds a teardown handler to the application context that calls db.session.remove(), releasing pooled database connections cleanly.',
        bn: 'Flask-SQLAlchemy একটি টিয়ারডাউন হ্যান্ডলার যুক্ত রাখে যা রিকোয়েস্ট শেষে db.session.remove() ডেকে ডাটাবেজ কানেকশন নিরাপদে ফেরত দেয়।'
      }
    }
  ],
  quiz: {
    id: 'extensions-on-the-shelf-quiz',
    title: {
      en: 'Flask Extensions, SQLAlchemy & Migrations Quiz',
      bn: 'ফ্লাস্ক এক্সটেনশন, এসকিউএলঅ্যালকেমি ও মাইগ্রেশন কুইজ'
    },
    questions: [
      {
        id: 'q-foreignkey-cascade-delete',
        kind: 'mcq',
        topic: 'relationship cascade behavior in sqlalchemy',
        question: {
          en: 'In Flask-SQLAlchemy, what does configuring "cascade=\'all, delete-orphan\'" on a parent relationship accomplish?',
          bn: 'Flask-SQLAlchemy-তে প্যারেন্ট রিলেশনশিপে "cascade=\'all, delete-orphan\'" সেট করলে কী ঘটে?'
        },
        options: [
          {
            en: 'When a parent record (e.g. User) is deleted, all associated child records (e.g. Posts) are automatically deleted, and children disassociated from the parent are also removed',
            bn: 'প্যারেন্ট রেকর্ড (যেমন User) মুছে দিলে তার সাথে সংশ্লিষ্ট সমস্ত চাইল্ড রেকর্ড (যেমন Posts) স্বয়ংক্রিয়ভাবে মুছে যায় এবং সংযোগ বিচ্ছিন্ন শিশু রেকর্ডগুলোও পরিষ্কার হয়'
          },
          {
            en: 'It duplicates the child records across multiple database tables',
            bn: 'এটি চাইল্ড রেকর্ডগুলোকে একাধিক ডাটাবেজ টেবিলে ডুপ্লিকেট করে'
          },
          {
            en: 'It prevents the parent record from ever being deleted',
            bn: 'এটি প্যারেন্ট রেকর্ডকে মুছে ফেলতে বাধা দেয়'
          },
          {
            en: 'It converts the database into an in-memory Redis key-value store',
            bn: 'এটি ডাটাবেজকে মেমরির রেডিস কি-ভ্যালু স্টোরে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Delete-orphan removes child objects when they lose their parent reference.',
          bn: 'Delete-orphan প্যারেন্টের রেফারেন্স না থাকা অপ্রয়োজনীয় চাইল্ড রেকর্ড মুছে ফেলে।'
        },
        explanation: {
          en: 'delete-orphan ensures that child objects cannot exist without an associated parent, automatically issuing SQL DELETE statements when relationships are severed.',
          bn: 'delete-orphan নিশ্চিত করে যাতে প্যারেন্ট ছাড়া চাইল্ড ডাটাবেজে পড়ে না থাকে। প্যারেন্ট মুছে গেলে বা লিংক ছুটলে চাইল্ড নিজে থেকেই মুছে যায়।'
        }
      },
      {
        id: 'q-flask-db-migrate-detection',
        kind: 'mcq',
        topic: 'how flask db migrate detects schema differences',
        question: {
          en: 'How does "flask db migrate" know which database changes need to be written into a new migration file?',
          bn: '"flask db migrate" কীভাবে বুঝতে পারে যে কোন কোন ডাটাবেজ পরিবর্তন নতুন মাইগ্রেশন ফাইলে লিখতে হবে?'
        },
        options: [
          {
            en: 'Alembic compares the current Python model metadata against the live database schema (stored in the alembic_version table), detecting differences in tables and columns',
            bn: 'Alembic বর্তমান পাইথন মডেলের মেটাডাটা লাইভ ডাটাবেজের স্কিমার (alembic_version টেবিলের অবস্থা) সাথে তুলনা করে কলাম ও টেবিলের পার্থক্য বের করে'
          },
          {
            en: 'It scans Git commit history for comments mentioning the word "database"',
            bn: 'এটি গিট কমিট হিস্ট্রিতে "database" লেখা আছে কিনা তা খোঁজে'
          },
          {
            en: 'It runs a deep learning model to predict what the schema should be',
            bn: 'এটি একটি ডিপ লার্নিং মডেল চালিয়ে স্কিমা কেমন হওয়া উচিত তা অনুমান করে'
          },
          {
            en: 'It relies on developer comments written in a text file named changes.txt',
            bn: 'এটি changes.txt ফাইলে ডেভেলপারের লেখা কমেন্টের ওপর নির্ভর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Alembic autogenerate inspects live database reflection against SQLAlchemy metadata.',
          bn: 'Alembic লাইভ ডাটাবেজ রিফ্লেকশনকে SQLAlchemy মেটাডাটার সাথে তুলনা করে।'
        },
        explanation: {
          en: 'Flask-Migrate uses Alembic\'s autogenerate feature. It reflects the live database structure and compares it against db.Model definitions to draft migration operations.',
          bn: 'Flask-Migrate লাইভ ডাটাবেজের অবস্থা এবং কোডের db.Model কাঠামোর মাঝে তুলনা চালায়। অমিল পেলেই স্বয়ংক্রিয়ভাবে মাইগ্রেশন কোড লিখে ফেলে।'
        }
      },
      {
        id: 'q-sqlalchemy-2-style-select',
        kind: 'mcq',
        topic: 'modern sqlalchemy 2 execution syntax in flask',
        question: {
          en: 'What is the modern SQLAlchemy 2.0-style syntax recommended in Flask-SQLAlchemy 3.x to fetch a single user by email?',
          bn: 'Flask-SQLAlchemy ৩.x-এ ইমেইল দিয়ে একটিমাত্র ইউজার তোলার জন্য প্রস্তাবিত আধুনিক SQLAlchemy ২.০ সিনট্যাক্স কোনটি?'
        },
        options: [
          {
            en: 'db.session.execute(db.select(User).filter_by(email="alex@example.com")).scalar_one_or_none()',
            bn: 'db.session.execute(db.select(User).filter_by(email="alex@example.com")).scalar_one_or_none()'
          },
          {
            en: 'User.objects.get(email="alex@example.com")',
            bn: 'User.objects.get(email="alex@example.com")'
          },
          {
            en: 'SELECT * FROM users WHERE email = "alex@example.com"',
            bn: 'SELECT * FROM users WHERE email = "alex@example.com"'
          },
          {
            en: 'app.find_record("users", "alex@example.com")',
            bn: 'app.find_record("users", "alex@example.com")'
          }
        ],
        answer: 0,
        hint: {
          en: 'SQLAlchemy 2.0 uses db.session.execute(db.select(...)).scalar_one_or_none().',
          bn: 'SQLAlchemy ২.০-তে db.session.execute(db.select(...)).scalar_one_or_none() ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'In Flask-SQLAlchemy 3.x, legacy User.query is soft-deprecated in favor of the explicit 2.0 style: db.session.execute(db.select(Model)).scalar_one_or_none().',
          bn: 'Flask-SQLAlchemy ৩.x সংস্করণে পুরোনো .query মেথডের বদলে স্পষ্ট ২.০ সিনট্যাক্স db.select() এবং execute() ব্যবহার করা মানসম্মত।'
        }
      },
      {
        id: 'q-database-uri-configuration-key',
        kind: 'mcq',
        topic: 'specifying database connection in flask config',
        question: {
          en: 'Which configuration key in Flask defines the database connection string (e.g. for PostgreSQL or SQLite)?',
          bn: 'ফ্লাস্ক কনফিগারেশনে ডাটাবেজ সংযোগ স্ট্রিং (যেমন PostgreSQL বা SQLite) নির্ধারণ করতে কোন কী-টি ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'SQLALCHEMY_DATABASE_URI',
            bn: 'SQLALCHEMY_DATABASE_URI'
          },
          {
            en: 'DATABASE_SOCKET_PATH',
            bn: 'DATABASE_SOCKET_PATH'
          },
          {
            en: 'FLASK_SQL_CONNECTION',
            bn: 'FLASK_SQL_CONNECTION'
          },
          {
            en: 'DB_HOST_STRING',
            bn: 'DB_HOST_STRING'
          }
        ],
        answer: 0,
        hint: {
          en: 'Flask-SQLAlchemy inspects SQLALCHEMY_DATABASE_URI for the engine connection string.',
          bn: 'Flask-SQLAlchemy ডাটাবেজ সংযোগ নির্ধারণে SQLALCHEMY_DATABASE_URI কী ব্যবহার করে।'
        },
        explanation: {
          en: 'app.config["SQLALCHEMY_DATABASE_URI"] sets the connection URI (e.g. "postgresql://user:pass@localhost:5432/mydb").',
          bn: 'app.config["SQLALCHEMY_DATABASE_URI"]-এ ডাটাবেজের ইউআরআই স্ট্রিং সেট করতে হয় যাতে ফ্লাস্ক ডাটাবেজ ইঞ্জিনের সাথে সংযুক্ত হতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'logins-at-the-flap',
    title: {
      en: 'Authentication & Session Security — Werkzeug Hashing, Tokens & Flask-Login',
      bn: 'অথেনটিকেশন ও সেশন সুরক্ষা — Werkzeug হ্যাশিং, টোকেন ও ফ্লাস্ক-লগইন'
    }
  }
};
