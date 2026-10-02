import type { Lesson } from '../../../lib/types';

export const DatabasesOnTheSideLesson: Lesson = {
  slug: 'databases-on-the-side',
  tech: 'fastapi',
  title: {
    en: 'Async Databases — SQLAlchemy 2.0, asyncpg & Transactions',
    bn: 'অ্যাসিনক্রোনাস ডাটাবেজ — SQLAlchemy ২.০, asyncpg ও ট্রানজেকশন'
  },
  summary: {
    en: 'Integrating high-performance relational databases into FastAPI requires asynchronous drivers and transactional session management. In this lesson, you will master SQLAlchemy 2.0 AsyncEngine setup, asyncpg drivers, yield-based session dependencies, non-blocking queries, and avoiding MissingGreenlet errors with selectinload.',
    bn: 'FastAPI-তে উচ্চ গতির রিলেশনাল ডাটাবেজ যুক্ত করতে অ্যাসিনক্রোনাস ড্রাইভার এবং ট্রানজেকশনাল সেশন ম্যানেজমেন্ট অপরিহার্য। এই পাঠে আপনি SQLAlchemy ২.০ AsyncEngine সেটআপ, asyncpg ড্রাইভার, yield-ভিত্তিক সেশন ডিপেন্ডেন্সি, নন-ব্লকিং কুয়েরি এবং selectinload দিয়ে MissingGreenlet এরর প্রতিরোধ গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'async-database-architecture',
      text: {
        en: 'The Async Database and Connection Pooling Architecture',
        bn: 'অ্যাসিনক্রোনাস ডাটাবেজ ও কানেকশন পুলিং আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your FastAPI application executes database operations, traditional synchronous drivers block worker threads during I/O roundtrips. Asynchronous drivers like asyncpg communicate over non-blocking TCP sockets, allowing an AsyncEngine to multiplex hundreds of concurrent queries across a single event loop thread without thread starvation.',
        bn: 'যখন আপনার FastAPI অ্যাপ্লিকেশন ডাটাবেজ অপারেশন সম্পন্ন করে, তখন পুরোনো সিনক্রোনাস ড্রাইভারগুলো ডাটা আদান-প্রদানের সময় পুরো থ্রেড আটকে রাখে। কিন্তু asyncpg-এর মতো অ্যাসিনক্রোনাস ড্রাইভারগুলো নন-ব্লকিং টিসিপি সকেট ব্যবহার করে, যার ফলে একটিমাত্র ইভেন্ট লুপ থ্রেড কোনো বিলম্ব ছাড়াই একসাথে শত শত ডাটাবেজ কোয়েরি স্বচ্ছন্দে পরিচালনা করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'AsyncEngine & async_sessionmaker',
          def: {
            en: 'The core SQLAlchemy 2.0 objects managing asynchronous connection pools and generating thread-safe AsyncSession workspaces.',
            bn: 'SQLAlchemy ২.০-এর মূল অবজেক্ট যা অ্যাসিনক্রোনাস কানেকশন পুল পরিচালনা করে এবং থ্রেড-সেফ AsyncSession তৈরি করে।'
          }
        },
        {
          term: 'asyncpg Driver',
          def: {
            en: 'The fastest PostgreSQL client library for Python, communicating natively with Postgres over asynchronous asyncio sockets.',
            bn: 'পাইথনের জন্য সবচেয়ে দ্রুতগতির পোস্টগ্রেস ড্রাইভার যা asyncio সকেটের মাধ্যমে সম্পূর্ণ নন-ব্লকিংভাবে ডাটাবেজের সাথে যোগাযোগ করে।'
          }
        },
        {
          term: 'selectinload Eager Loading',
          def: {
            en: 'An async-safe relationship loading strategy issuing a secondary SELECT IN query, eliminating MissingGreenlet lazy-loading errors.',
            bn: 'অ্যাসিনক্রোনাস ডাটাবেজের জন্য নিরাপদ কৌশল যা SELECT IN দিয়ে রিলেশনাল ডাটা একত্রে আনে এবং MissingGreenlet এরর রোধ করে।'
          }
        },
        {
          term: 'AsyncSession Lifecycle',
          def: {
            en: 'A transactional unit of work yielded by a FastAPI dependency, executing commit on success and rollback on failure.',
            bn: 'একটি ট্রানজেকশনাল ইউনিট যা FastAPI ডিপেন্ডেন্সি সরবরাহ করে এবং কাজ সফল হলে commit ও ব্যর্থ হলে rollback নিশ্চিত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'async-vs-sync-matrix',
      text: {
        en: 'Synchronous Versus Asynchronous Database Stack Matrix',
        bn: 'সিনক্রোনাস বনাম অ্যাসিনক্রোনাস ডাটাবেজ স্ট্যাক ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Layer', bn: 'আর্কিটেকচারাল স্তর' },
        { en: 'Legacy Synchronous Stack', bn: 'পুরোনো সিনক্রোনাস স্ট্যাক' },
        { en: 'Modern Asynchronous Stack', bn: 'আধুনিক অ্যাসিনক্রোনাস স্ট্যাক' }
      ],
      rows: [
        [
          { en: 'PostgreSQL Driver', bn: 'পোস্টগ্রেস ড্রাইভার' },
          { en: 'psycopg2 (blocks OS thread on socket wait)', bn: 'psycopg2 (সকেটের জন্য অপেক্ষা করে থ্রেড আটকে রাখে)' },
          { en: 'asyncpg (yields control to event loop on socket wait)', bn: 'asyncpg (ডাটার অপেক্ষায় ইভেন্ট লুপ ছেড়ে দেয়)' }
        ],
        [
          { en: 'Engine Construction', bn: 'ইঞ্জিন তৈরি' },
          { en: 'create_engine("postgresql://...")', bn: 'create_engine("postgresql://...")' },
          { en: 'create_async_engine("postgresql+asyncpg://...")', bn: 'create_async_engine("postgresql+asyncpg://...")' }
        ],
        [
          { en: 'Relationship Loading', bn: 'সম্পর্কিত ডাটা লোড' },
          { en: 'Lazy loading: user.items fetches on attribute access', bn: 'লেজি লোডিং: এট্রিবিউট ডাকার সময় ব্যাকগ্রাউন্ডে কোয়েরি চলে' },
          { en: 'Explicit eager loading: select(User).options(selectinload(User.items))', bn: 'স্পষ্ট ইগার লোডিং: selectinload দিয়ে আগে থেকেই ডাটা লোড' }
        ],
        [
          { en: 'Transaction Management', bn: 'ট্রানজেকশন পরিচালনা' },
          { en: 'session.commit() and session.rollback()', bn: 'session.commit() এবং session.rollback()' },
          { en: 'await session.commit() and await session.rollback()', bn: 'await session.commit() এবং await session.rollback()' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'async-session-simulation-code',
      text: {
        en: 'Working Async Database Session and selectinload Simulation',
        bn: 'কার্যকরী অ্যাসিঙ্ক ডাটাবেজ সেশন ও selectinload সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Async Database Transaction and Eager Loading
class MockAsyncSession {
  constructor() {
    this.inTransaction = true;
    this.queriesExecuted = 0;
  }

  async executeQuery(sql) {
    this.queriesExecuted += 1;
    // Simulating non-blocking database query
    return {
      rowCount: 1,
      rows: [{ id: 10, username: 'alex', itemsCount: 4 }]
    };
  }

  async commit() {
    this.inTransaction = false;
    return true;
  }

  async rollback() {
    this.inTransaction = false;
    return true;
  }
}

// 1. Simulating async database dependency
async function* getAsyncDb() {
  const session = new MockAsyncSession();
  try {
    yield session;
    await session.commit();
  } catch (err) {
    await session.rollback();
    throw err;
  }
}

// 2. Simulating route handler fetching user with eager relations
const sessionGen = getAsyncDb();
const db = (await sessionGen.next()).value;

const result = await db.executeQuery('SELECT * FROM users WHERE id = 10');
const eagerResult = await db.executeQuery('SELECT * FROM items WHERE user_id = 10'); // selectinload
await sessionGen.next(); // Commit transaction

console.log('User identifier retrieved:', result.rows[0].id);
// -> User identifier retrieved: 10
console.log('Eager loaded items count:', result.rows[0].itemsCount);
// -> Eager loaded items count: 4
console.log('Total non-blocking queries executed:', db.queriesExecuted);
// -> Total non-blocking queries executed: 2`,
      caption: {
        en: 'Async session retrieving user 10 with 4 items using 2 non-blocking queries',
        bn: 'অ্যাসিঙ্ক সেশনে ২টি নন-ব্লকিং কোয়েরি চালিয়ে ৪টি আইটেম সহ ইউজার ১০ লোড হচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'missinggreenlet-and-eager-loading',
      text: {
        en: 'Avoiding MissingGreenlet Errors in Async SQLAlchemy',
        bn: 'অ্যাসিঙ্ক SQLAlchemy-তে MissingGreenlet এরর প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In synchronous SQLAlchemy, inspecting a relationship like user.items transparently executes a background SQL query. In asynchronous SQLAlchemy, implicit I/O inside attribute access is impossible because attribute lookups cannot be awaited, triggering a fatal MissingGreenlet error. Developers must always load related entities explicitly using selectinload or joinedload.',
        bn: 'সিনক্রোনাস SQLAlchemy-তে user.items-এর মতো সম্পর্কে হাত দিলে নিজে থেকেই একটি ব্যাকগ্রাউন্ড কোয়েরি চলে ডাটা আসত। কিন্তু অ্যাসিনক্রোনাস SQLAlchemy-তে অবজেক্টের ভেতর থেকে পরোক্ষ কোয়েরি চালানো অসম্ভব, কারণ সাধারণ ডট-অ্যাক্সেসে await লেখা যায় না; ফলে MissingGreenlet ক্র্যাশ ঘটে। তাই সর্বদা selectinload বা joinedload দিয়ে সম্পর্কের ডাটা একবারে তুলে আনতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Always Use selectinload: Pre-load child relationships with .options(selectinload(Model.relation)) to eliminate MissingGreenlet crashes.',
          bn: '১. selectinload ব্যবহার বাধ্যতামূলক: MissingGreenlet ক্র্যাশ এড়াতে .options(selectinload(Model.relation)) দিয়ে ডাটা লোড করুন।'
        },
        {
          en: '2. Set expire_on_commit=False: Always pass expire_on_commit=False to async_sessionmaker so committed objects remain readable after commit.',
          bn: '২. expire_on_commit=False দিন: কমিটের পরেও অবজেক্টের মান সচল রাখতে async_sessionmaker-এ expire_on_commit=False ব্যবহার করুন।'
        },
        {
          en: '3. Yield Sessions in Dependencies: Wrap async database sessions in dependency generators with try-finally blocks for safe teardown.',
          bn: '৩. ডিপেন্ডেন্সিতে সেশন yield করুন: নিরাপদে সংযোগ বন্ধ ও রোলব্যাক করতে try-finally ব্লকের ভেতর সেশন পরিচালনা করুন।'
        },
        {
          en: '4. Tune Async Pool Limits: Configure pool_size=20 and max_overflow=10 on create_async_engine to prevent database connection exhaustion.',
          bn: '৪. কানেকশন পুল নিয়ন্ত্রণ: ডাটাবেজের ওপর মাত্রাতিরিক্ত চাপ ঠেকাতে pool_size=20 ও max_overflow=10 সীমা বেঁধে দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-db-ex1',
      kind: 'mcq',
      topic: 'missinggreenlet error cause in async sqlalchemy',
      question: {
        en: 'Why does attempting to access an unloaded relationship attribute like "user.orders" inside an async route cause a "MissingGreenlet" error in SQLAlchemy 2.0?',
        bn: 'অ্যাসিনক্রোনাস রুটে "user.orders"-এর মতো আনলোড সম্পর্কের অবজেক্ট সরাসরি এক্সেস করলে SQLAlchemy ২.০-তে কেন "MissingGreenlet" এরর দেখা দেয়?'
      },
      options: [
        {
          en: 'Async SQLAlchemy cannot lazily load relationships on attribute access because property lookups in Python cannot be awaited (non-awaitable); relationships must be eagerly loaded in the initial query using selectinload',
          bn: 'অ্যাসিনক্রোনাস SQLAlchemy ডট-অ্যাক্সেসে লেজি লোড করতে পারে না কারণ পাইথনে প্রোপার্টি রিডিংয়ে await ব্যবহার অসম্ভব; তাই selectinload দিয়ে শুরুতেই ডাটা তুলতে হয়'
        },
        {
          en: 'The PostgreSQL database is missing the greenlet extension',
          bn: 'পোস্টগ্রেস ডাটাবেজে greenlet এক্সটেনশনটি ইনস্টল করা নেই'
        },
        {
          en: 'The database server run out of physical disk space',
          bn: 'ডাটাবেজ সার্ভারের সমস্ত হার্ডডিস্ক মেমরি শেষ হয়ে গেছে'
        },
        {
          en: 'Python 3 does not support object-oriented programming',
          bn: 'পাইথন ৩ অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Attribute access like obj.relation cannot use the "await" keyword, breaking async I/O.',
        bn: 'obj.relation পড়ার সময় await লেখা যায় না, যার ফলে অ্যাসিনক্রোনাস সিস্টেমে কোয়েরি চালানো সম্ভব হয় না।'
      },
      explanation: {
        en: 'Lazy loading requires triggering an I/O operation during attribute access. Since Python does not support "await obj.attribute", SQLAlchemy raises MissingGreenlet. Using selectinload fixes this.',
        bn: 'লেজি লোডিংয়ে অবজেক্ট পড়ার সময় নতুন কোয়েরি চলে। কিন্তু পাইথন সিনট্যাক্সে প্রোপার্টিতে await দেওয়া যায় না বলে MissingGreenlet এরর আসে; selectinload এটি সমাধান করে।'
      }
    },
    {
      id: 'fa-db-ex2',
      kind: 'mcq',
      topic: 'expire_on_commit false setting in async sqlalchemy',
      question: {
        en: 'Why is setting "expire_on_commit=False" mandatory when configuring async_sessionmaker in FastAPI?',
        bn: 'FastAPI-তে async_sessionmaker কনফিগার করার সময় "expire_on_commit=False" নির্ধারণ করা কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'By default, SQLAlchemy expires all model attributes after commit, triggering lazy re-fetch queries on subsequent access; in async mode, these re-fetches trigger MissingGreenlet errors unless expire_on_commit is False',
          bn: 'ডিফল্টভাবে কমিটের পর SQLAlchemy মডেলের ডাটা খালি করে দেয় যা পরে পড়তে গেলে পুনরায় কোয়েরি টানে; অ্যাসিঙ্ক মোডে এটি MissingGreenlet এরর দেয় যদি expire_on_commit=False না থাকে'
        },
        {
          en: 'It accelerates database queries by 1000 percent',
          bn: 'এটি ডাটাবেজ কোয়েরির গতি ১০০০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'It converts the database from PostgreSQL to MySQL',
          bn: 'এটি ডাটাবেজকে পোস্টগ্রেস থেকে মাইএসকিউএলে বদলে দেয়'
        },
        {
          en: 'It disables SQL injection protection',
          bn: 'এটি এসকিউএল ইনজেকশন সুরক্ষা বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'expire_on_commit=False preserves in-memory model attributes after a transaction commits.',
        bn: 'expire_on_commit=False দিলে ট্রানজেকশন কমিট হওয়ার পরেও মেমরিতে মডেলের মানগুলো সংরক্ষিত থাকে।'
      },
      explanation: {
        en: 'If expire_on_commit is True, accessing model attributes after commit causes an implicit re-query. In async mode, this raises MissingGreenlet. Setting it to False keeps attributes cached.',
        bn: 'expire_on_commit চালু থাকলে কমিটের পর আবার ডাটা পড়তে গেলে ব্যাকগ্রাউন্ড কোয়েরি রান হয় যা অ্যাসিঙ্কে এরর ঘটায়। False দিলে মেমরির ডাটা ঠিক থাকে।'
      }
    },
    {
      id: 'fa-db-ex3',
      kind: 'mcq',
      topic: 'proper asyncpg connection uri scheme',
      question: {
        en: 'Which database connection URI scheme instructs SQLAlchemy 2.0 to use the asynchronous asyncpg driver with PostgreSQL?',
        bn: 'পোস্টগ্রেসের সাথে অ্যাসিনক্রোনাস asyncpg ড্রাইভার ব্যবহারের জন্য SQLAlchemy ২.০-তে কোন কানেকশন ইউআরআই স্কিমটি ব্যবহার করতে হয়?'
      },
      options: [
        {
          en: 'postgresql+asyncpg://user:password@localhost:5432/dbname',
          bn: 'postgresql+asyncpg://user:password@localhost:5432/dbname'
        },
        {
          en: 'postgres://async:password@localhost:5432/dbname',
          bn: 'postgres://async:password@localhost:5432/dbname'
        },
        {
          en: 'asyncpg+tcp://localhost:5432/dbname',
          bn: 'asyncpg+tcp://localhost:5432/dbname'
        },
        {
          en: 'sql+postgres+fastapi://localhost/dbname',
          bn: 'sql+postgres+fastapi://localhost/dbname'
        }
      ],
      answer: 0,
      hint: {
        en: 'SQLAlchemy uses dialect+driver:// syntax (postgresql+asyncpg).',
        bn: 'SQLAlchemy-তে dialect+driver:// সিনট্যাক্স (postgresql+asyncpg) ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'SQLAlchemy connection strings specify the database dialect and the driver separated by a plus: postgresql+asyncpg://.',
        bn: 'SQLAlchemy-তে ডাটাবেজের নাম ও ড্রাইভার প্লাস চিহ্ন দিয়ে লিখতে হয়: postgresql+asyncpg://।'
      }
    },
    {
      id: 'fa-db-ex4',
      kind: 'mcq',
      topic: 'async session rollback on exception',
      question: {
        en: 'In an async database dependency generator, what happens inside the "except" block when an exception is raised by the route handler?',
        bn: 'একটি অ্যাসিঙ্ক ডাটাবেজ ডিপেন্ডেন্সিতে ভিউ ফাংশন এক্সেপশন তুললে "except" ব্লকের ভেতরে কী পদক্ষেপ নেওয়া উচিত?'
      },
      options: [
        {
          en: 'Await "await session.rollback()" to abort the uncommitted transaction and re-raise the exception so FastAPI can return the proper HTTP error response',
          bn: '"await session.rollback()" কল করে অসমাপ্ত ট্রানজেকশন বাতিল করা এবং এক্সেপশন পুনরায় ছুড়ে দেওয়া যাতে FastAPI সঠিক এইচটিটিপি এরর পাঠাতে পারে'
        },
        {
          en: 'Commit the broken data anyway to avoid losing records',
          bn: 'ডাটা হারানোর ভয়ে নষ্ট ডাটাও জোর করে কমিট করে দেওয়া'
        },
        {
          en: 'Delete the database schema from the operating system',
          bn: 'অপারেটিং সিস্টেম থেকে ডাটাবেজ স্কিমা মুছে ফেলা'
        },
        {
          en: 'Restart the Uvicorn web server immediately',
          bn: 'সাথে সাথে Uvicorn ওয়েব সার্ভার রিস্টার্ট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Failed transactions must be rolled back asynchronously with await session.rollback().',
        bn: 'ব্যর্থ ট্রানজেকশনকে অবশ্যই await session.rollback() দিয়ে বাতিল করতে হয়।'
      },
      explanation: {
        en: 'If an error occurs, the database session must be rolled back with await session.rollback() to leave the connection pool in a healthy, unpolluted state.',
        bn: 'ত্রুটি দেখা দিলে await session.rollback() কল করা আবশ্যক যাতে অসমাপ্ত পরিবর্তন বাতিল হয়ে ডাটাবেজ সেশন সুস্থ ও পরিচ্ছন্ন থাকে।'
      }
    }
  ],
  quiz: {
    id: 'databases-on-the-side-quiz',
    title: {
      en: 'FastAPI Async Databases & SQLAlchemy Quiz',
      bn: 'FastAPI অ্যাসিনক্রোনাস ডাটাবেজ ও SQLAlchemy কুইজ'
    },
    questions: [
      {
        id: 'q-selectinload-vs-joinedload',
        kind: 'mcq',
        topic: 'selectinload versus joinedload for one-to-many relationships',
        question: {
          en: 'Why is "selectinload" generally preferred over "joinedload" when eagerly loading one-to-many relationships in SQLAlchemy 2.0?',
          bn: 'SQLAlchemy ২.০-তে one-to-many সম্পর্কের ডাটা ইগার লোড করার সময় "joinedload"-এর চেয়ে "selectinload" কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'joinedload uses an SQL LEFT OUTER JOIN that duplicates parent table rows for every child record, creating massive Cartesian product bloat in memory; selectinload executes 2 clean queries (SELECT ... WHERE id IN (...)) avoiding data multiplication',
            bn: 'joinedload এসকিউএল LEFT JOIN দিয়ে প্রতিটি চাইল্ডের জন্য প্যারেন্ট রো ডুপ্লিকেট করে মেমরিতে চাপ বাড়ায়; selectinload ২টি পরিচ্ছন্ন কুয়েরি (WHERE id IN (...)) দিয়ে ডাটা দ্বিগুণ না করেই দ্রুত লোড করে'
          },
          {
            en: 'selectinload deletes the database indexes automatically',
            bn: 'selectinload নিজে থেকেই ডাটাবেজের ইনডেক্স মুছে ফেলে'
          },
          {
            en: 'joinedload cannot be used with PostgreSQL databases',
            bn: 'joinedload পোস্টগ্রেস ডাটাবেজে চালানো যায় না'
          },
          {
            en: 'There is no difference in query execution or memory performance',
            bn: 'কোয়েরি এক্সিকিউশন বা মেমরি খরচে কোনো তফাত নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'selectinload avoids the Cartesian product problem of SQL joins on one-to-many tables.',
          bn: 'selectinload এসকিউএল জয়েনের ফলে তৈরি হওয়া অনাকাঙ্ক্ষিত ডুপ্লিকেট রো সমস্যা দূর করে।'
        },
        explanation: {
          en: 'For collections (one-to-many), joinedload multiplies parent data across joined rows. selectinload executes a single query for parents and one query with WHERE id IN (...) for children, maximizing efficiency.',
          bn: 'one-to-many সম্পর্কে joinedload দিলে প্যারেন্ট ডাটা বারবার আসে যা মেমরির অপচয় ঘটায়। selectinload দুটি পরিষ্কার কুয়েরি দিয়ে অত্যন্ত দ্রুত ও সুনির্দিষ্টভাবে ডাটা আনে।'
        }
      },
      {
        id: 'q-scalar-one-or-none-vs-scalars-all',
        kind: 'mcq',
        topic: 'scalar_one_or_none versus scalars all in sqlalchemy 2',
        question: {
          en: 'What is the distinction between "result.scalar_one_or_none()" and "result.scalars().all()" when processing query results in async SQLAlchemy?',
          bn: 'অ্যাসিঙ্ক SQLAlchemy-তে "result.scalar_one_or_none()" এবং "result.scalars().all()"-এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'scalar_one_or_none() returns a single model instance or None (raising an error if multiple rows match), while scalars().all() returns a Python list containing all matching model objects',
            bn: 'scalar_one_or_none() একটিমাত্র অবজেক্ট বা None দেয় (একাধিক রো মিললে এরর দেয়), আর scalars().all() সমস্ত ম্যাচ করা অবজেক্টের একটি পাইথন লিস্ট ফেরত দেয়'
          },
          {
            en: 'scalar_one_or_none() executes the query asynchronously, while scalars().all() is synchronous',
            bn: 'scalar_one_or_none() অ্যাসিনক্রোনাস আর scalars().all() সিনক্রোনাস'
          },
          {
            en: 'scalars().all() drops the table after reading',
            bn: 'scalars().all() ডাটা পড়ার পর টেবিল মুছে ফেলে'
          },
          {
            en: 'They are identical aliases for the exact same function',
            bn: 'তারা হুবহু একই ফাংশনের দুটি সমার্থক নাম'
          }
        ],
        answer: 0,
        hint: {
          en: 'scalar_one_or_none fetches 0 or 1 row; scalars().all() fetches all matching rows.',
          bn: 'scalar_one_or_none ০ বা ১ টি রেকর্ড তোলে; scalars().all() সব রেকর্ড তোলে।'
        },
        explanation: {
          en: 'scalar_one_or_none() is tailored for unique lookups (like by ID or email). scalars().all() extracts the scalar objects from all rows into a list.',
          bn: 'আইডি বা ইমেইল দিয়ে একক অবজেক্ট খুঁজতে scalar_one_or_none() ব্যবহৃত হয়। আর তালিকার সব অবজেক্ট লিস্ট আকারে পেতে scalars().all() ব্যবহার করা হয়।'
        }
      },
      {
        id: 'q-connection-pool-exhaustion-causes',
        kind: 'mcq',
        topic: 'preventing connection pool starvation in async fastapi',
        question: {
          en: 'What causes database connection pool exhaustion in high-traffic FastAPI deployments?',
          bn: 'উচ্চ ট্রাফিকের FastAPI ডেপ্লয়মেন্টে ডাটাবেজ কানেকশন পুল নিঃশেষ বা শেষ হয়ে যাওয়ার প্রধান কারণ কী?'
        },
        options: [
          {
            en: 'Failing to close or teardown database sessions in route dependencies, or holding database connections open while awaiting slow external HTTP API calls',
            bn: 'ডিপেন্ডেন্সিতে সেশন বন্ধ না করা বা টিয়ারডাউন মিস করা, অথবা ডাটাবেজ কানেকশন ধরে রেখে ধীরগতির বাহ্যিক এপিআই কলের জন্য অপেক্ষা করা'
          },
          {
            en: 'Setting the PostgreSQL port to 5432',
            bn: 'পোস্টগ্রেসের পোর্ট ৫৪৩২ নির্ধারণ করা'
          },
          {
            en: 'Writing queries using uppercase SQL keywords (SELECT, WHERE)',
            bn: 'বড় হাতের অক্ষরে এসকিউএল কোয়েরি লেখা'
          },
          {
            en: 'Having more than 5 columns in a database table',
            bn: 'ডাটাবেজ টেবিলে ৫টির বেশি কলাম থাকা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unreleased connections or long-held transactions quickly exhaust available pool connections.',
          bn: 'কানেকশন রিলিজ না করলে বা অযথা ধরে রাখলে দ্রুত পুলের সব কানেকশন শেষ হয়ে যায়।'
        },
        explanation: {
          en: 'If endpoints forget to close sessions or perform long-lived external I/O while holding a transaction, connections cannot return to the pool, starving subsequent requests.',
          bn: 'টিয়ারডাউন ছাড়া সেশন ফেলে রাখলে বা ডাটাবেজ ওপেন রেখে বাহ্যিক কল করলে কানেকশন আটকে থাকে, যার ফলে নতুন রিকোয়েস্ট কানেকশন না পেয়ে এরর দেয়।'
        }
      },
      {
        id: 'q-declarative-base-async-mapped-column',
        kind: 'mcq',
        topic: 'modern mapped_column type annotation syntax in sqlalchemy 2',
        question: {
          en: 'What is the modern SQLAlchemy 2.0 syntax for declaring an integer primary key column named "id" on a declarative model?',
          bn: 'SQLAlchemy ২.০-তে ডিক্লেয়ারেটিভ মডেলে "id" নামের একটি পূর্ণসংখ্যা প্রাইমারি কি কলাম ঘোষণার আধুনিক সিনট্যাক্স কোনটি?'
        },
        options: [
          {
            en: 'id: Mapped[int] = mapped_column(primary_key=True)',
            bn: 'id: Mapped[int] = mapped_column(primary_key=True)'
          },
          {
            en: 'id = db.Column(db.Integer, primary_key=True)',
            bn: 'id = db.Column(db.Integer, primary_key=True)'
          },
          {
            en: 'id = IntField(auto_increment=True)',
            bn: 'id = IntField(auto_increment=True)'
          },
          {
            en: 'id: PrimaryKey[int]',
            bn: 'id: PrimaryKey[int]'
          }
        ],
        answer: 0,
        hint: {
          en: 'SQLAlchemy 2.0 uses type-annotated Mapped[type] = mapped_column(...).',
          bn: 'SQLAlchemy ২.০-তে Mapped[type] = mapped_column(...) সিনট্যাক্স ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'SQLAlchemy 2.0 introduced PEP 484-compliant type annotations using Mapped[T] and mapped_column(), enabling full IDE autocomplete and type safety.',
          bn: 'SQLAlchemy ২.০-তে Mapped[int] = mapped_column(primary_key=True) সিনট্যাক্স প্রবর্তিত হয়েছে, যা কোডে নিখুঁত টাইপ সেফটি ও অটো-কমপ্লিট সুবিধা নিশ্চিত করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-docs-serve',
    title: {
      en: 'OpenAPI Documentation & Production — Uvicorn, Gunicorn & Docker',
      bn: 'OpenAPI ডকুমেন্টেশন ও প্রোডাকশন — Uvicorn, Gunicorn ও ডকার'
    }
  }
};
