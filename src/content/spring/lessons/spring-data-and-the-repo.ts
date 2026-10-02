import type { Lesson } from '../../../lib/types';

export const SpringDataAndTheRepoLesson: Lesson = {
  slug: 'spring-data-and-the-repo',
  tech: 'spring',
  title: {
    en: 'Spring Data JPA, Repositories & Transactions',
    bn: 'স্প্রিং ডেটা JPA, রিপোজিটরি এবং ট্রানজ্যাকশন'
  },
  summary: {
    en: 'Master enterprise relational persistence with Spring Data JPA: eliminate boilerplate SQL with JpaRepository interfaces, express query criteria using derived method names, write complex JPQL/native queries with @Query, and govern ACID transaction boundaries using @Transactional.',
    bn: 'স্প্রিং ডেটা JPA দিয়ে এন্টারপ্রাইজ রিলেশনাল ডেটা পারসিস্টেন্স আয়ত্ত করুন: JpaRepository ইন্টারফেস দিয়ে বয়লারপ্লেট এসকিউএল দূরীকরণ, ডিরাইভড মেথড দিয়ে কুয়েরি তৈরি, @Query দিয়ে জটিল JPQL/নেটিভ কুয়েরি লিখন এবং @Transactional দিয়ে ACID ট্রানজ্যাকশন নিয়ন্ত্রণ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'repository-abstraction-and-derived-queries-heading',
      text: {
        en: 'The Repository Abstraction and Derived Query Method Generation',
        bn: 'রিপোজিটরি অ্যাবস্ট্রাকশন এবং ডিরাইভড কুয়েরি মেথড উৎপাদন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional JDBC (Java Database Connectivity) and ORM (Object-Relational Mapping) code required writing repetitive boilerplate Data Access Objects (DAOs) filled with CRUD (Create, Read, Update, Delete) queries. Spring Data JPA (Jakarta Persistence API) eliminates this boilerplate through the JpaRepository interface. Developers merely define an interface extending JpaRepository<Entity, Id>. At application startup, Spring analyzes the interface and synthesizes a dynamic runtime proxy implementing all CRUD methods. Furthermore, Spring parses method names using derived query keywords: declaring "findByEmailAndActiveTrue(String email)" automatically generates and executes the parameterized SQL query without writing a single line of implementation code.',
        bn: 'সনাতন JDBC (Java Database Connectivity) এবং ORM (Object-Relational Mapping) কোডে সাধারণ CRUD (Create, Read, Update, Delete) অপারেশনের জন্য বারবার একই ধরনের Data Access Objects (DAOs) লিখতে হতো। স্প্রিং ডেটা JPA (Jakarta Persistence API) এর JpaRepository ইন্টারফেসের মাধ্যমে এই ক্লান্তিকর বয়লারপ্লেট কোড পুরোপুরি নির্মূল করেছে। ডেভেলপারকে শুধুমাত্র JpaRepository<Entity, Id> এক্সটেন্ড করে একটি সাধারণ ইন্টারফেস তৈরি করতে হয়। অ্যাপ্লিকেশন চালুর সময় স্প্রিং এই ইন্টারফেস বিশ্লেষণ করে একটি ডায়নামিক রানটাইম প্রক্সি তৈরি করে যা সমস্ত CRUD মেথড নিজে থেকেই কার্যকর করে। তাছাড়া মেথডের নাম বিশ্লেষণ করে স্প্রিং স্বয়ংক্রিয়ভাবে কুয়েরি তৈরি করে: "findByEmailAndActiveTrue(String email)" মেথড লিখলেই কোনো কোড না লিখেও স্প্রিং নিজে থেকে প্যারামিটারাইজড এসকিউএল কুয়েরি তৈরি ও কার্যকর করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of Spring Data JPA: From service transactional boundaries to repository proxies, Hibernate ORM translation, and database commit.',
        bn: 'চিত্র ১: স্প্রিং ডেটা JPA এর আর্কিটেকচারাল পাইপলাইন: সার্ভিস ট্রানজ্যাকশন থেকে রিপোজিটরি প্রক্সি, হাইবারনেট ORM রূপান্তর এবং ডেটাবেস কমিটের কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING DATA JPA REPOSITORY &amp; TRANSACTION PIPELINE</text>

  <!-- Step 1: Service Transaction Boundary -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. @Transactional</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">@Service Layer</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Begins ACID boundary</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">AOP Proxy Intercept</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Atomic Business Unit</text>
  </g>

  <!-- Step 2: JpaRepository Interface -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Repository Proxy</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">interface UserRepo</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">  extends JpaRepo</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Derived Query Parser</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero SQL Boilerplate</text>
  </g>

  <!-- Step 3: Hibernate EntityManager -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. EntityManager</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Translates to SQL</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">1st-Level Cache</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Dirty Checking Flush</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Automatic Mutation Sync</text>
  </g>

  <!-- Step 4: ACID Commit / Rollback -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Commit/Rollback</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">conn.commit()</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Persists to Disk</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Rollback on RuntimeEx</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">ACID Data Integrity</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'jpql-pagination-and-transactions-heading',
      text: {
        en: 'Custom JPQL Queries, Pageable Pagination, and @Transactional',
        bn: 'কাস্টম JPQL কুয়েরি, Pageable পেজিনেশন এবং @Transactional'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For complex multi-table joins and aggregations, Spring Data JPA provides the @Query annotation, supporting object-oriented Jakarta Persistence Query Language (JPQL). JPQL queries reference Java entity names and fields rather than underlying database table and column names. To handle massive datasets without causing OutOfMemoryErrors, repositories accept Pageable parameters: "Page<User> findByActive(boolean active, Pageable pageable)". At the service tier, declaring "@Transactional" wraps method execution in an ACID transaction boundary. By default, Spring automatically commits the transaction upon normal completion and triggers an immediate rollback if any unchecked RuntimeException is thrown.',
        bn: 'একাধিক টেবিলের জটিল জয়েন এবং অ্যাগ্রিগেশন কুয়েরির জন্য স্প্রিং ডেটা JPA @Query অ্যানোটেশন প্রদান করে, যা অবজেক্ট-ভিত্তিক JPQL সমর্থন করে। JPQL কুয়েরি ডেটাবেস টেবিল বা কলামের নামের বদলে জাভা এনটিটি ও ফিল্ডের নামের ওপর কাজ করে। লক্ষ লক্ষ ডেটা মেমোরিতে লোড করে মেমোরি সংকট এড়াতে রিপোজিটরিতে Pageable প্যারামিটার ব্যবহার করা হয়: "Page<User> findByActive(boolean active, Pageable pageable)"। সার্ভিস স্তরে "@Transactional" ঘোষণা করলে মেথডটি একটি নিরাপদ ACID ট্রানজ্যাকশন সীমানার মধ্যে রান করে। ডিফল্টভাবে মেথড স্বাভাবিকভাবে শেষ হলে স্প্রিং স্বয়ংক্রিয়ভাবে ডেটাবেসে কমিট করে এবং কোনো আনচেকড RuntimeException ঘটলে তাৎক্ষণিকভাবে রোলব্যাক করে পূর্বের অবস্থায় ফিরে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Spring Data JPA repository proxy, derived query resolution, paginated execution, and @Transactional commit/rollback.',
        bn: 'স্প্রিং ডেটা JPA রিপোজিটরি প্রক্সি, ডিরাইভড কুয়েরি রেজোলিউশন, পেজিনেশন এবং ট্রানজ্যাকশন রোলব্যাকের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Spring Data JPA Repository Proxy and @Transactional Boundary

export interface UserEntity {
  id: number;
  email: string;
  balance: number;
  active: boolean;
}

export class SpringDataJpaProxySimulator {
  private users: UserEntity[] = [
    { id: 1, email: 'alice@example.com', balance: 500, active: true },
    { id: 2, email: 'bob@example.com', balance: 300, active: true },
    { id: 3, email: 'carol@example.com', balance: 150, active: false }
  ];

  // Derived Query: findByActiveTrue()
  public findByActiveTrue(): UserEntity[] {
    return this.users.filter(u => u.active);
  }

  // Paginated query: PageRequest.of(0, 20)
  public findActivePaginated(page: number, size: number): { content: UserEntity[]; totalElements: number } {
    const active = this.findByActiveTrue();
    const start = page * size;
    const content = active.slice(start, start + size);
    return { content, totalElements: active.length };
  }

  // Simulated @Transactional transfer operation
  public transferFunds(fromId: number, toId: number, amount: number): void {
    const sender = this.users.find(u => u.id === fromId);
    const receiver = this.users.find(u => u.id === toId);

    if (!sender || !receiver) throw new Error('EntityNotFoundException: user not found');
    if (sender.balance < amount) throw new Error('InsufficientFundsException: balance too low');

    // Mutating balances
    sender.balance -= amount;
    receiver.balance += amount;
    console.log('[Transactional] Transferred $' + amount + ' successfully. Committed.');
  }
}

// Execution demonstration
const repo = new SpringDataJpaProxySimulator();

// Querying paginated active users: page 0, size 20
const pageResult = repo.findActivePaginated(0, 20);
console.log('Total Active Users Found:', pageResult.totalElements); // 2
console.log('Paginated Content Count:', pageResult.content.length); // 2

// Executing transactional transfer
repo.transferFunds(1, 2, 100);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'JpaRepository',
          def: {
            en: 'Spring Data interface providing standardized CRUD, pagination, and sorting methods without writing boilerplate DAOs.',
            bn: 'স্প্রিং ডেটা ইন্টারফেস যা কোনো অতিরিক্ত কোড ছাড়াই সাধারণ CRUD, পেজিনেশন এবং সর্টিং মেথড সরবরাহ করে।'
          }
        },
        {
          term: 'Derived Query',
          def: {
            en: 'Query synthesized automatically by Spring Data through parsing repository method names like findByEmail.',
            bn: 'কুয়েরি যা রিপোজিটরি মেথডের নাম (যেমন findByEmail) বিশ্লেষণ করে স্প্রিং ডেটা নিজে থেকেই তৈরি করে নেয়।'
          }
        },
        {
          term: 'JPQL',
          def: {
            en: 'Jakarta Persistence Query Language operating over object entity models rather than relational database tables.',
            bn: 'অবজেক্ট-ভিত্তিক কুয়েরি ভাষা যা ডেটাবেস টেবিলের বদলে সরাসরি জাভা এনটিটির ওপর কাজ করে।'
          }
        },
        {
          term: '@Transactional',
          def: {
            en: 'Annotation demarcating an ACID transaction boundary that automatically commits on success and rolls back on RuntimeException.',
            bn: 'অ্যানোটেশন যা লেনদেনের ACID সীমানা নির্ধারণ করে সফলতায় কমিট এবং এরর দেখা দিলে স্বয়ংক্রিয় রোলব্যাক করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jparepository-interface-generic-parameters-ex1',
      kind: 'mcq',
      topic: 'jparepository-generic-type-arguments',
      question: {
        en: 'When creating an interface that extends JpaRepository<T, ID>, what do the generic type parameters T and ID represent?',
        bn: 'যখন কোনো ইন্টারফেস JpaRepository<T, ID> কে এক্সটেন্ড করে, তখন জেনেরিক টাইপ T এবং ID কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'T represents the JPA @Entity class type, and ID represents the data type of the entity primary key field',
          bn: 'T নির্দেশ করে JPA @Entity ক্লাসটিকে, এবং ID নির্দেশ করে সেই এনটিটির প্রাইমারি কি ফিল্ডের ডেটা টাইপকে'
        },
        {
          en: 'T represents the HTML page template and ID represents the CSS style ID',
          bn: 'T নির্দেশ করে এইচটিএমএল পেজকে এবং ID নির্দেশ করে সিএসএস স্টাইলকে'
        },
        {
          en: 'T is the database server IP address',
          bn: 'T হলো ডেটাবেস সার্ভারের আইপি ঠিকানা'
        },
        {
          en: 'ID must always be an integer 0 in all Java applications',
          bn: 'সব জাভা অ্যাপ্লিকেশনে ID অবশ্যই ০ পূর্ণসংখ্যা হতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'T is the managed entity; ID is the primary key type (e.g. Long, UUID).',
        bn: 'T হলো ম্যানেজড এনটিটি ক্লাস এবং ID হলো প্রাইমারি কি টাইপ (যেমন Long বা UUID)।'
      },
      explanation: {
        en: 'JpaRepository takes the entity class and its ID type, allowing Spring to generate strongly-typed CRUD methods.',
        bn: 'এনটিটি এবং আইডির টাইপ জানার পর স্প্রিং নিজে থেকেই সমস্ত টাইপ-সেফ মেথড তৈরি করতে পারে।'
      }
    },
    {
      id: 'derived-query-keyword-syntax-ex2',
      kind: 'mcq',
      topic: 'derived-query-method-naming-rules',
      question: {
        en: 'Which method name in a Spring Data repository automatically queries active users with a balance greater than a specified amount?',
        bn: 'স্প্রিং ডেটা রিপোজিটরিতে কোন মেথডের নাম লিখলে স্বয়ংক্রিয়ভাবে সক্রিয় এবং নির্দিষ্ট পরিমাণের বেশি ব্যালেন্সযুক্ত ব্যবহারকারীদের কুয়েরি করা যায়?'
      },
      options: [
        { en: 'findByActiveTrueAndBalanceGreaterThan(double amount)', bn: 'findByActiveTrueAndBalanceGreaterThan(double amount)' },
        { en: 'queryUsersWithActiveAndHighBalance(double amount)', bn: 'queryUsersWithActiveAndHighBalance(double amount)' },
        { en: 'selectFromUsersWhereBalanceIsMore(double amount)', bn: 'selectFromUsersWhereBalanceIsMore(double amount)' },
        { en: 'findSQLActiveUsers(double amount)', bn: 'findSQLActiveUsers(double amount)' }
      ],
      answer: 0,
      hint: {
        en: 'Spring Data parses keywords: findBy, ActiveTrue, And, BalanceGreaterThan.',
        bn: 'স্প্রিং ডেটা সুনির্দিষ্ট কি-ওয়ার্ড বিশ্লেষণ করে: findBy, ActiveTrue, And, BalanceGreaterThan।'
      },
      explanation: {
        en: 'Spring Data parses method names containing standard prefixes and operators, compiling them to SQL.',
        bn: 'সুনির্দিষ্ট নিয়ম মেনে মেথডের নাম লিখলে স্প্রিং নিজে থেকেই নিখুঁত এসকিউএল কুয়েরি বানিয়ে নেয়।'
      }
    },
    {
      id: 'transactional-rollback-default-behavior-ex3',
      kind: 'mcq',
      topic: 'transactional-rollback-for-runtime-exception',
      question: {
        en: 'By default, which type of exception causes Spring\'s @Transactional boundary to automatically roll back the active database transaction?',
        bn: 'ডিফল্টভাবে কোন ধরনের এক্সেপশন দেখা দিলে স্প্রিং-এর @Transactional বাউন্ডারি সক্রিয় ডেটাবেস লেনদেনকে স্বয়ংক্রিয়ভাবে রোলব্যাক করে?'
      },
      options: [
        {
          en: 'Unchecked exceptions (subclasses of RuntimeException and Error); checked exceptions do NOT trigger automatic rollback unless configured via rollbackFor',
          bn: 'আনচেকড এক্সেপশন (RuntimeException এবং Error এর সাবক্লাস); চেকড এক্সেপশন স্বয়ংক্রিয় রোলব্যাক ঘটায় না যদি না rollbackFor দিয়ে কনফিগার করা হয়'
        },
        {
          en: 'Checked exceptions like IOException only',
          bn: 'শুধুমাত্র IOException এর মতো চেকড এক্সেপশন'
        },
        {
          en: 'Transactions never roll back under any circumstance in Spring',
          bn: 'স্প্রিং-এ কোনো অবস্থাতেই লেনদেন কখনো রোলব্যাক হয় না'
        },
        {
          en: 'Rollback only occurs on the first day of the year',
          bn: 'রোলব্যাক কেবল বছরের প্রথম দিনে কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Spring rolls back automatically on RuntimeException and Error by default.',
        bn: 'ডিফল্টভাবে RuntimeException এবং Error দেখা দিলে স্প্রিং অবিলম্বে রোলব্যাক চালায়।'
      },
      explanation: {
        en: 'Spring @Transactional rolls back on unchecked RuntimeExceptions. To roll back on checked exceptions, declare @Transactional(rollbackFor = Exception.class).',
        bn: 'চেকড এররেও রোলব্যাক চাইলে স্পষ্টভাবে rollbackFor = Exception.class লিখে দিতে হয়।'
      }
    },
    {
      id: 'pageable-pagination-zero-based-ex4',
      kind: 'mcq',
      topic: 'pageable-page-index-zero-based',
      question: {
        en: 'What is the starting page index when requesting paginated data using "PageRequest.of(page, size)" in Spring Data?',
        bn: 'স্প্রিং ডেটাতে "PageRequest.of(page, size)" দিয়ে পেজিনেশন করার সময় প্রথম পেজের ইনডেক্স নম্বর কত থাকে?'
      },
      options: [
        { en: '0 (zero-based index: page 0 is the first page)', bn: '০ (শূন্য-ভিত্তিক ইনডেক্স: ০ নম্বর পেজ হলো প্রথম পেজ)' },
        { en: '1 (one-based index)', bn: '১ (এক-ভিত্তিক ইনডেক্স)' },
        { en: '100', bn: '১০০' },
        { en: '-1', bn: '-১' }
      ],
      answer: 0,
      hint: {
        en: 'Spring Data PageRequest is zero-based: page 0 returns the first slice.',
        bn: 'স্প্রিং ডেটা পেজিনেশন শূন্য থেকে শুরু হয়: ০ নম্বর পেজই হলো শুরুর পেজ।'
      },
      explanation: {
        en: 'PageRequest uses 0-based indexing: PageRequest.of(0, 20) requests the first 20 records.',
        bn: 'PageRequest.of(0, 20) কল করলে শুরুর ২০ টি রেকর্ড সম্বলিত প্রথম পেজটি পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-spring-data-and-the-repo',
    title: {
      en: 'Spring Data JPA & Transaction Management Mastery Quiz',
      bn: 'স্প্রিং ডেটা JPA এবং ট্রানজ্যাকশন ম্যানেজমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-n-plus-one-query-entitygraph',
        kind: 'mcq',
        topic: 'n-plus-one-problem-entitygraph-solution',
        question: {
          en: 'What is the "N+1 query problem" in JPA and which Spring Data annotation eliminates it by executing a single SQL join fetch?',
          bn: 'JPA-তে "N+1 কুয়েরি সমস্যা" কী এবং কোন স্প্রিং ডেটা অ্যানোটেশনটি একটি একক এসকিউএল জয়েন ফেচ চালিয়ে এই সমস্যা দূর করে?'
        },
        options: [
          {
            en: 'The N+1 problem occurs when querying 1 entity causes N additional child queries; @EntityGraph (or "JOIN FETCH") solves it by loading parent and children in a single unified SQL query',
            bn: 'N+1 সমস্যা ঘটে যখন ১ টি প্যারেন্ট খুঁজতে গিয়ে অতিরিক্ত N সংখ্যক চাইল্ড কুয়েরি চলে; @EntityGraph (বা "JOIN FETCH") একটি একক এসকিউএল জয়েনের মাধ্যমে প্যারেন্ট ও চাইল্ড উভয়কে একসাথে লোড করে এটি সমাধান করে'
          },
          {
            en: 'N+1 means the database runs out of disk storage',
            bn: 'N+1 কথাটির অর্থ হলো ডেটাবেসে হার্ড ডিস্কের জায়গা শেষ হয়ে যাওয়া'
          },
          {
            en: 'It is solved by restarting the database every 10 seconds',
            bn: 'প্রতি ১০ সেকেন্ড পরপর ডেটাবেস রিস্টার্ট করে এটি সমাধান করা হয়'
          },
          {
            en: 'N+1 only happens in SQLite databases',
            bn: 'N+1 কেবল SQLite ডেটাবেসে ঘটে'
          }
        ],
        answer: 0,
        hint: {
          en: '@EntityGraph instructs Hibernate to fetch associated collections eagerly using a SQL JOIN.',
          bn: '@EntityGraph হাইবারনেটকে নির্দেশ দেয় একটি একক জয়েনের মাধ্যমে সম্পর্কিত সমস্ত তথ্য তুলে আনতে।'
        },
        explanation: {
          en: '@EntityGraph prevents N+1 queries by configuring an explicit fetch plan that issues a single SQL JOIN rather than N secondary queries.',
          bn: 'বারবার ডেটাবেসে না গিয়ে একটি একক কুয়েরিতে সব ডেটা এনে @EntityGraph পারফরম্যান্স বহুলাংশে বাড়িয়ে দেয়।'
        }
      },
      {
        id: 'quiz-transactional-readonly-optimization',
        kind: 'mcq',
        topic: 'transactional-readonly-dirty-checking-disable',
        question: {
          en: 'What performance optimization occurs when marking a query method with "@Transactional(readOnly = true)" in Spring Data JPA?',
          bn: 'স্প্রিং ডেটা JPA-তে কোনো কুয়েরি মেথডে "@Transactional(readOnly = true)" যোগ করলে কোন পারফরম্যান্স অপটিমাইজেশন ঘটে?'
        },
        options: [
          {
            en: 'Hibernate disables dirty-checking snapshots and sets the JDBC connection to read-only, drastically cutting CPU and memory overhead during large reads',
            bn: 'হাইবারনেট ডাটি-চেকিং স্ন্যাপশট বন্ধ রাখে এবং JDBC কানেকশনকে রিড-অনলি মোডে রাখে, ফলে প্রচুর ডেটা পড়ার সময় সিপিইউ ও মেমোরি খরচ বিপুল হ্রাস পায়'
          },
          {
            en: 'It permanently deletes all writing permissions for the database user',
            bn: 'এটি ডেটাবেস ইউজারের সমস্ত লেখার অনুমতি চিরতরে মুছে ফেলে'
          },
          {
            en: 'It disables all internet access for the computer',
            bn: 'এটি কম্পিউটারের সমস্ত ইন্টারনেট সংযোগ বন্ধ করে দেয়'
          },
          {
            en: 'readOnly has zero effect on performance',
            bn: 'পারফরম্যান্সে readOnly এর কোনো প্রভাব নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'readOnly = true disables entity state dirty tracking in the persistence context.',
          bn: 'readOnly = true পারসিস্টেন্স কনটেক্সটে অযথা স্ন্যাপশট ও ডাটি চেকিং করা বন্ধ রাখে।'
        },
        explanation: {
          en: 'Marking transactions readOnly skips Hibernate snapshot creation and dirty checking flush cycles, boosting read throughput.',
          bn: 'অপ্রয়োজনীয় চেকিং বাদ যাওয়ায় রিড-অনলি ট্রানজ্যাকশনে মেমোরি সাশ্রয় হয় এবং ডেটাবেসের গতি বাড়ে।'
        }
      },
      {
        id: 'quiz-modifying-annotation-update-queries',
        kind: 'mcq',
        topic: 'modifying-annotation-update-delete',
        question: {
          en: 'Why is the @Modifying annotation required alongside @Query when executing an UPDATE or DELETE query in a Spring Data repository?',
          bn: 'স্প্রিং ডেটা রিপোজিটরিতে UPDATE বা DELETE কুয়েরি চালানোর সময় @Query এর সাথে @Modifying অ্যানোটেশনটি কেন আবশ্যক?'
        },
        options: [
          {
            en: 'It informs Spring Data that the query mutates data rather than selecting rows, invoking executeUpdate() rather than executeQuery() on the underlying JDBC statement',
            bn: 'এটি স্প্রিং ডেটাকে জানায় যে কুয়েরিটি ডেটা নির্বাচন করার বদলে পরিবর্তন করছে, ফলে JDBC স্টেটমেন্টে executeQuery() এর বদলে executeUpdate() কল হয়'
          },
          {
            en: 'It encrypts the database table with a password',
            bn: 'এটি ডেটাবেস টেবিলকে পাসওয়ার্ড দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It converts the SQL database into a MongoDB document store',
            bn: 'এটি রিলেশনাল ডেটাবেসকে মঙ্গোডিবিতে বদলে ফেলে'
          },
          {
            en: '@Modifying is only used for logging purposes',
            bn: '@Modifying কেবল লগিংয়ের কাজে ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: '@Modifying signals an INSERT/UPDATE/DELETE query execution.',
          bn: '@Modifying অ্যানোটেশনটি পরিবর্তনমূলক কুয়েরি কার্যকর করতে ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Without @Modifying, Spring assumes @Query is a SELECT query and invokes executeQuery(), triggering an exception on DML statements.',
          bn: '@Modifying ছাড়া স্প্রিং ভুলবশত সিলেক্ট কুয়েরি ভেবে ভুল মেথড চালায়; তাই ডিএমএল অপারেশনে এটি আবশ্যক।'
        }
      },
      {
        id: 'quiz-transactional-self-invocation-limitation',
        kind: 'mcq',
        topic: 'transactional-self-invocation-bypasses-proxy',
        question: {
          en: 'Why does calling a @Transactional method from another method inside the same class fail to trigger transaction management (known as the self-invocation problem)?',
          bn: 'একই ক্লাসের ভেতর একটি মেথড থেকে অপর একটি @Transactional মেথড কল করলে ট্রানজ্যাকশন কেন কার্যকর হয় না (যা সেলফ-ইনভোকেশন সমস্যা নামে পরিচিত)?'
        },
        options: [
          {
            en: 'Because Spring transactions rely on AOP dynamic proxies; calling a method internally via "this.method()" bypasses the outer proxy wrapper and invokes the raw target instance directly',
            bn: 'কারণ স্প্রিং ট্রানজ্যাকশন AOP ডায়নামিক প্রক্সির ওপর নির্ভরশীল; "this.method()" দিয়ে অভ্যন্তরীণ কল করলে প্রক্সি বাইপাস হয়ে সরাসরি মূল অবজেক্টের মেথড চলে'
          },
          {
            en: 'Because Java forbids calling methods in the same class',
            bn: 'কারণ জাভাতে একই ক্লাসের মেথড কল করা নিষিদ্ধ'
          },
          {
            en: 'Because transactions can only run once every 24 hours',
            bn: 'কারণ প্রতি ২৪ ঘণ্টায় ট্রানজ্যাকশন কেবল একবার চলতে পারে'
          },
          {
            en: 'Self-invocation was fixed in Java 1.2',
            bn: 'জাভা ১.২ সংস্করণে সেলফ-ইনভোকেশন ঠিক করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Internal "this" calls bypass Spring AOP proxies.',
          bn: 'অভ্যন্তরীণ "this" কল স্প্রিংয়ের প্রক্সি স্তরকে এড়িয়ে যায়, ফলে ট্রানজ্যাকশন শুরু হতে পারে না।'
        },
        explanation: {
          en: 'Spring AOP wraps beans in proxies. Direct intra-class method calls bypass the proxy, skipping the transaction interceptor entirely.',
          bn: 'প্রক্সি পার হয়ে সরাসরি কোড চলার কারণে ট্রানজ্যাকশন ম্যানেজার কাজ করার সুযোগ পায় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'spring-security',
    title: {
      en: 'Spring Security, JWT & Filter Chains',
      bn: 'স্প্রিং সিকিউরিটি, JWT এবং ফিল্টার চেইন'
    }
  }
};
