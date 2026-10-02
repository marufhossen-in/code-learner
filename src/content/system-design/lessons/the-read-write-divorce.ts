import type { Lesson } from '../../../lib/types';

export const readWriteDivorceLesson: Lesson = {
  slug: 'the-read-write-divorce',
  tech: 'system-design',
  title: {
    en: 'Read-Write Separation & CQRS — Master-Replica, Materialized Views, and Event Sourcing',
    bn: 'রিড-রাইট পৃথকীকরণ ও CQRS: মাস্টার-রেপ্লিকা, মেটেরিয়ালাইজড ভিউ ও ইভেন্ট সোর্সিং'
  },
  summary: {
    en: 'In modern web platforms, read traffic typically outnumbers write operations by 100 to 1 or more. Designing a single relational schema to handle both high-frequency transactional writes and complex aggregation reads leads to lock contention and performance bottlenecks. In this lesson, you will master the architectural separation of reads and writes: Master-Replica routing, Command Query Responsibility Segregation (CQRS), Materialized Views, and Event Sourcing. Analyze the Fan-out-on-Write (Push) versus Fan-out-on-Read (Pull) dilemma in social media news feeds, and understand how hybrid architectures solve the celebrity follower problem. Implement an executable Fan-out simulation in TypeScript.',
    bn: 'আধুনিক ওয়েব প্ল্যাটফর্মে পড়ার রিকোয়েস্ট (Read) লেখার (Write) চেয়ে সাধারণত ১০০ গুণ (১০০:১ অনুপাত) বা তারও বেশি হয়ে থাকে। একটিমাত্র ডেটাবেস স্কিমা দিয়ে দ্রুতগতির রাইট এবং জটিল রিড কুয়েরি একসাথে সামলাতে গেলে লক কনটেনশন ও সিস্টেমের গতি কমে যাওয়ার মতো সমস্যা দেখা দেয়। এই পাঠে আপনি রিড এবং রাইট আলাদা করার মূল কৌশলগুলো শিখবেন: মাস্টার-রেপ্লিকা রাউটিং, CQRS (Command Query Responsibility Segregation), মেটেরিয়ালাইজড ভিউ এবং ইভেন্ট সোর্সিং। সোশ্যাল মিডিয়ার নিউজফিড তৈরিতে ফ্যান-আউট অন রাইট (পুশ) বনাম ফ্যান-আউট অন রিড (পুল)-এর সুবিধা-অসুবিধা এবং তারকা ব্যবহারকারীদের জন্য হাইব্রিড আর্কিটেকচার কীভাবে কাজ করে তা বিশদভাবে বিশ্লেষণ করা হয়েছে। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর ফ্যান-আউট সিমুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'read-write-asymmetry-and-contention',
      text: {
        en: 'The Asymmetry of Reads and Writes: Why Shared Models Fail',
        bn: 'রিড এবং রাইটের বৈষম্য: একক মডেল কেন ভেঙে পড়ে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you analyze the traffic profile of consumer platforms like Twitter, Instagram, or YouTube, you discover that read operations exceed write operations by orders of magnitude (often 100:1 or 1000:1).',
        bn: 'টুইটার, ইনস্টাগ্রাম বা ইউটিউবের মতো প্ল্যাটফর্মের ট্র্যাফিক বিশ্লেষণ করলে দেখা যায় যে তথ্য পড়ার সংখ্যা ডেটা লেখার চেয়ে বহুগুণ বেশি (প্রায়শই ১০০:১ বা ১০০০:১)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Read queries want denormalized, pre-joined data structures: timeline feeds, user profile cards, and real-time counter metrics. In contrast, write transactions require strict normalization, ACID consistency, row-level locks, and foreign key validations to guarantee integrity. Forcing both opposing workloads onto a single database table causes table-lock contention, slow query planning, and degraded performance. High-scale architectures separate read and write paths completely: transactional writes land on a dedicated primary database, while asynchronous replication streams updates to read-optimized replicas and search caches.',
        bn: 'রিড কোয়েরিগুলো চায় ডিনর্মালাইজড এবং আগে থেকেই সাজিয়ে রাখা ডেটা: যেমন হোম ফিড, প্রোফাইল কার্ড এবং রিয়েল-টাইম লাইক কাউন্টার। অন্যদিকে রাইট অপারেশনগুলো চায় কঠোর নরমালাইজেশন, ACID নিশ্চয়তা, রো-লেভেল লক এবং রেফারেন্সিয়াল ইন্টিগ্রিটি। এই দুটি সম্পূর্ণ বিপরীতধর্মী কাজকে একটিমাত্র ডেটাবেস টেবিলে চাপিয়ে দিলে টেবিল লক জ্যাম তৈরি হয় এবং সিস্টেম ধীরগতির হয়ে পড়ে। বড় সিস্টেমগুলো তাই রিড এবং রাইট পথকে সম্পূর্ণ আলাদা করে ফেলে: সমস্ত ডেটা লেখার কাজ হয় মূল প্রাইমারি ডেটাবেসে, আর রেপ্লিকেশনের মাধ্যমে একাধিক অপ্টিমাইজড রিড-রেপ্লিকা ও ক্যাশে ডেটা পৌঁছে দেওয়া হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'read-write-separation',
          def: {
            en: 'An architectural topology where write operations route exclusively to a primary database (Leader), while read queries load-balance across multiple read replicas (Followers).',
            bn: 'এমন এক ডেটাবেস কাঠামো যেখানে লেখার সমস্ত কাজ মূল লিডারে যায় এবং পড়ার সমস্ত কোয়েরি একাধিক রিড-রেপ্লিকার মধ্যে ভাগ করে দেওয়া হয়।'
          }
        },
        {
          term: 'cqrs-pattern',
          def: {
            en: 'Command Query Responsibility Segregation: a design pattern using completely separate data models for updating records (Commands) and reading views (Queries).',
            bn: 'কমান্ড কোয়েরি রেসপনসিবিলিটি সেগ্রিগেশন: ডেটা পরিবর্তন করার মডেল (Commands) এবং তথ্য প্রদর্শন করার মডেল (Queries) সম্পূর্ণ আলাদা রাখার ডিজাইন প্যাটার্ন।'
          }
        },
        {
          term: 'fan-out-on-write',
          def: {
            en: 'The Push model for news feeds: when an author creates a post, the system immediately writes a copy into the timeline inbox of every single follower.',
            bn: 'নিউজফিডের পুশ মডেল: লেখক যখন একটি পোস্ট দেন, সাথে সাথে তার প্রতিটি ফলোয়ারের ফিড বক্সে পোস্টটির একটি অনুলিপি জমা করে দেওয়া হয়।'
          }
        },
        {
          term: 'fan-out-on-read',
          def: {
            en: 'The Pull model for news feeds: posts are saved only in the author table; when a follower opens their feed, the system dynamically queries and merges posts from everyone they follow.',
            bn: 'নিউজফিডের পুল মডেল: পোস্ট কেবল লেখকের টেবিলেই থাকে; কোনো ফলোয়ার যখন ফিড ওপেন করেন, তখন তিনি যাদের ফলো করেন তাদের সবার পোস্ট খুঁজে এনে সাজানো হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'feed-tradeoffs-push-pull-hybrid',
      text: {
        en: 'News Feed Architecture: Push vs Pull vs Hybrid',
        bn: 'নিউজফিড আর্কিটেকচার: পুশ বনাম পুল বনাম হাইব্রিড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The classic architectural challenge in read-write separation is the social media news feed, where the ratio of followers per creator spans from 10 to over 50000000.',
        bn: 'রিড-রাইট পৃথকীকরণের সবচেয়ে বড় চ্যালেঞ্জ দেখা যায় সোশ্যাল মিডিয়া নিউজফিডে, যেখানে একজন সাধারণ ব্যবহারকারীর ১০ জন অনুসারী থাকতে পারে, আবার কোনো তারকার ৫০ মিলিয়নের বেশি অনুসারী থাকতে পারে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feed Architecture Model', bn: 'ফিড আর্কিটেকচার মডেল' },
        { en: 'Write Overhead (When Author Posts)', bn: 'রাইট খরচ (পোস্ট তৈরির সময়)' },
        { en: 'Read Overhead (When User Opens Feed)', bn: 'রিড খরচ (ফিড খোলার সময়)' },
        { en: 'Architectural Vulnerability', bn: 'আর্কিটেকচারাল দুর্বলতা' }
      ],
      rows: [
        [
          { en: 'Fan-out-on-Write (Push)', bn: 'ফ্যান-আউট অন রাইট (পুশ)' },
          { en: 'High: requires N writes to database inboxes, where N is follower count', bn: 'উচ্চ: N সংখ্যক ফলোয়ারের ইনবক্সে N বার ডেটা লিখতে হয়' },
          { en: 'Ultra-fast O(1): reads pre-computed feed directly from follower inbox', bn: 'খুব দ্রুত O(1): ফলোয়ারের ইনবক্স থেকে সরাসরি রেডিমেড ফিড পড়ে ফেলে' },
          { en: 'Celebrity bottleneck: a creator with 50000000 followers triggers 50000000 writes on 1 post', bn: 'তারকা বিপর্যয়: ৫০০০০০০০ অনুসারীর ১টি পোস্টেই ৫০০০০০০০ রাইট লাগে' }
        ],
        [
          { en: 'Fan-out-on-Read (Pull)', bn: 'ফ্যান-আউট অন রিড (পুল)' },
          { en: 'Ultra-fast O(1): writes single row to author posts table', bn: 'খুব দ্রুত O(1): লেখকের টেবিলে কেবল একটিমাত্র রো লেখা হয়' },
          { en: 'High: must fetch and sort recent posts from hundreds of followed authors', bn: 'উচ্চ: ফলো করা শত শত মানুষের পোস্ট খুঁজে এনে মেমরিতে সাজাতে হয়' },
          { en: 'Slow feed load times; crushes database CPU when millions of users open feeds', bn: 'ফিড লোড হতে দেরি হয়; লাখ লাখ ব্যবহারকারী একসাথে ফিড খুললে সার্ভার ধীর হয়ে যায়' }
        ],
        [
          { en: 'Hybrid Architecture', bn: 'হাইব্রিড আর্কিটেকচার' },
          { en: 'Adaptive: Push for standard users; single write for high-follower celebrities', bn: 'ভারসাম্যপূর্ণ: সাধারণের জন্য পুশ; তারকার পোস্টের জন্য কেবল ১টি রাইট' },
          { en: 'Fast: fetch pre-computed inbox and merge celebrity posts dynamically in memory', bn: 'দ্রুত: সাধারণ ফিড ইনবক্স থেকে এনে মেমরিতে তারকার পোস্টের সাথে মিলিয়ে নেওয়া হয়' },
          { en: 'Higher code complexity to manage two distinct read and write code paths', bn: 'দুটি আলাদা রিড ও রাইট পাথ পরিচালনা করতে কোডের জটিলতা কিছুটা বৃদ্ধি পায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-fanout-simulation-code',
      text: {
        en: 'Executable Fan-Out Comparison Simulation',
        bn: 'ফ্যান-আউট সিমুলেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program compares the physical write operations triggered by a standard user with 500 followers versus a celebrity creator with 1000000 followers under Push versus Hybrid architectures.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ৫০০ অনুসারী থাকা একজন সাধারণ ব্যবহারকারী এবং ১০০০০০০ অনুসারী থাকা একজন তারকার পোস্টের ক্ষেত্রে পুশ বনাম হাইব্রিড আর্কিটেকচারের রাইট অপারেশনের পার্থক্য তুলনা করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Feed Fan-Out Write Overhead

interface FanoutMetrics {
  followerCount: number;
  pushModelWrites: number;
  hybridModelWrites: number;
}

function computeFeedFanout(
  followers: number,
  celebrityThreshold: number = 25000
): FanoutMetrics {
  // Pure Push (Fan-out on Write): 1 write per follower inbox
  const pushModelWrites = followers;

  // Hybrid Model:
  // If author has <= 25,000 followers, push to all inboxes (cheap)
  // If author is a celebrity (> 25,000 followers), write once to author feed;
  // followers pull celebrity posts dynamically at read time.
  const hybridModelWrites =
    followers > celebrityThreshold ? 1 : followers;

  return {
    followerCount: followers,
    pushModelWrites,
    hybridModelWrites
  };
}

const regularUser = computeFeedFanout(500);
const celebrityUser = computeFeedFanout(1000000);

console.log('Regular user (500 followers) Push writes:', regularUser.pushModelWrites);
console.log('Regular user (500 followers) Hybrid writes:', regularUser.hybridModelWrites);
console.log('Celebrity (1000000 followers) Push writes:', celebrityUser.pushModelWrites);
console.log('Celebrity (1000000 followers) Hybrid writes:', celebrityUser.hybridModelWrites);

// prints: Regular user (500 followers) Push writes: 500
// prints: Regular user (500 followers) Hybrid writes: 500
// prints: Celebrity (1000000 followers) Push writes: 1000000
// prints: Celebrity (1000000 followers) Hybrid writes: 1`
    },
    {
      type: 'heading',
      id: 'cqrs-and-event-sourcing-foundations',
      text: {
        en: 'CQRS and Event Sourcing: Rebuilding Views from Immutable Logs',
        bn: 'CQRS এবং ইভেন্ট সোর্সিং: অপরিবর্তনীয় লগ থেকে ভিউ তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Command Query Responsibility Segregation (CQRS) splits the application into two distinct layers: the Command service (which validates domain business rules, handles mutations, and appends state events) and the Query service (which serves fast, denormalized read views). Event Sourcing pairs naturally with CQRS: instead of storing only current row state, every state change is recorded as an immutable append-only event (e.g. "AccountCreated", "MoneyDeposited", "MoneyWithdrawn"). Background workers listen to these events and project them into read-optimized SQL tables, Elasticsearch indices, or Redis caches. If the read schema changes, teams replay the event stream from day 1 to rebuild the entire read database with zero downtime.',
        bn: 'কমান্ড কোয়েরি রেসপনসিবিলিটি সেগ্রিগেশন (CQRS) পুরো অ্যাপ্লিকেশনকে ২টি আলাদা স্তরে ভাগ করে: কমান্ড সার্ভিস (যা ব্যবসার নিয়ম পরীক্ষা করে এবং ডেটা পরিবর্তন করে) এবং কোয়েরি সার্ভিস (যা ব্যবহারকারীকে দ্রুত সাজানো ডেটা প্রদর্শন করে)। ইভেন্ট সোর্সিং পদ্ধতিটি CQRS-এর সাথে চমৎকারভাবে কাজ করে: ডেটাবেসে কেবল শেষ অবস্থা জমা না রেখে প্রতিটি পরিবর্তনকে একটি অপরিবর্তনীয় ইভেন্ট হিসেবে লিখে রাখা হয় (যেমন "অ্যাকাউন্ট তৈরি", "টাকা জমা", "টাকা উত্তোলন")। ব্যাকগ্রাউন্ড ওয়ার্কাররা এই ইভেন্টগুলো শুনে মেটেরিয়ালাইজড ভিউ, সার্চ ইঞ্জিন বা ক্যাশ আপডেট করে। ভবিষ্যতে রিড ডেটাবেসের কাঠামো বদলালে ১ নম্বর দিন থেকে সব ইভেন্ট আবার চালিয়ে কোনো ডাউনটাইম ছাড়াই সম্পূর্ণ নতুন ভিউ তৈরি করা সম্ভব হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Separate reads from writes: Direct heavy write traffic to a transactional Leader and scale read traffic across replica pools.',
          bn: 'রিড ও রাইট আলাদা করুন: লেখার চাপ মূল লিডার ডেটাবেসে দিন এবং পড়ার চাপ রেপ্লিকা পুলের মধ্যে ভাগ করে দিন।'
        },
        {
          en: 'Use Push for standard users: Pre-compute inboxes for accounts with modest followers to guarantee sub-millisecond feed delivery.',
          bn: 'সাধারণ ব্যবহারকারীদের জন্য পুশ ব্যবহার করুন: সাব-মিলিসেকেন্ডে ফিড দেখাতে সাধারণ একাউন্টের পোস্ট আগে থেকেই ইনবক্সে জমা করুন।'
        },
        {
          en: 'Switch to Pull for celebrities: Prevent write storms by writing celebrity posts once and dynamically merging them on read.',
          bn: 'তারকাদের জন্য পুলে রূপান্তর করুন: একযোগে লাখ লাখ রাইট এড়াতে তারকার পোস্ট একবার লিখে পড়ার সময় তা ফিডে যোগ করুন।'
        },
        {
          en: 'CQRS enables specialized data models: Optimize commands for transactional safety and queries for lightning-fast reads.',
          bn: 'CQRS কাজের উপযোগী মডেল তৈরি করে: কমান্ডকে লেনদেনের নিরাপত্তার জন্য এবং কোয়েরিকে অতি দ্রুত পড়ার জন্য অপ্টিমাইজ করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-partition-ledger',
    tech: 'system-design',
    title: {
      en: 'Database Sharding & Partitioning — Horizontal Scaling, Shard Keys, and Consistent Hashing',
      bn: 'ডেটাবেস শার্ডিং ও পার্টিশনিং: শার্ড কি ও কনসিস্টেন্ট হ্যাশিং'
    }
  },
  exercises: [
    {
      id: 'rw-ex1',
      kind: 'mcq',
      topic: 'celebrity-push-write-explosion',
      question: {
        en: 'In a social network using pure Fan-out-on-Write (Push model), what catastrophic failure occurs when an account with 50 million (50000000) followers publishes a new post?',
        bn: 'একটি সোশ্যাল নেটওয়ার্কে যদি কেবল ফ্যান-আউট অন রাইট (পুশ মডেল) ব্যবহার করা হয়, তবে ৫০ মিলিয়ন (৫০০০০০০০) অনুসারী থাকা কোনো ব্যক্তি একটি পোস্ট দিলে কী বিপর্যয় ঘটবে?'
      },
      options: [
        {
          en: 'The posting service must generate and insert 50 million (50000000) individual database records into follower inboxes, overwhelming message queues and bringing down database write pipelines',
          bn: 'পোস্টিং সার্ভিসকে সাথে সাথে ৫০ মিলিয়ন (৫০০০০০০০) ফলোয়ারের ইনবক্সে ৫০ মিলিয়ন রেকর্ড লিখতে হয়, যার ফলে মেসেজ কিউ ও ডেটাবেস সার্ভার অতিরিক্ত চাপে ভেঙে পড়ে'
        },
        {
          en: 'The user mobile phone battery discharges to zero percent instantly',
          bn: 'ব্যবহারকারীর মোবাইল ফোনের ব্যাটারি মুহূর্তের মধ্যে শূন্য শতাংশ হয়ে যায়'
        },
        {
          en: 'Because push models format the hard drives of all internet users',
          bn: 'কারণ পুশ মডেল ইন্টারনেটের সব ব্যবহারকারীর হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
        },
        {
          en: 'The post is automatically translated into Latin poetry',
          bn: 'পোস্টটি নিজে থেকেই ল্যাটিন কবিতায় রূপান্তরিত হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: '1 post multiplied by 50,000,000 followers = 50,000,000 database writes.',
        bn: '১টি পোস্টকে ৫০,০০০,০০০ দিয়ে গুণ করলে এক সেকেন্ডে ৫ কোটি ডেটাবেস রাইট লাগে।'
      },
      explanation: {
        en: 'Pure push models break at high fan-out ratios; hybrid architectures mitigate this by falling back to pull for celebrity accounts.',
        bn: 'অনুসারীর সংখ্যা বিপুল হলে পুশ মডেল অচল হয়ে পড়ে; হাইব্রিড মডেলে তারকাদের জন্য পুল পদ্ধতি ব্যবহার করে এই সমস্যা মেটানো হয়।'
      }
    },
    {
      id: 'rw-ex2',
      kind: 'mcq',
      topic: 'cqrs-read-model-benefit',
      question: {
        en: 'What is the primary operational advantage of Command Query Responsibility Segregation (CQRS) in enterprise architectures?',
        bn: 'এন্টারপ্রাইজ আর্কিটেকচারে CQRS (Command Query Responsibility Segregation) ব্যবহারের প্রধান প্রযুক্তিগত সুবিধা কী?'
      },
      options: [
        {
          en: 'It allows write models to be optimized strictly for business validation and transactional safety, while read models are denormalized and independently scaled for ultra-fast queries',
          bn: 'এটি ডেটা লেখার মডেলকে নিয়ম পরীক্ষা ও লেনদেনের নিরাপত্তার জন্য এবং পড়ার মডেলকে ডিনর্মালাইজ করে স্বাধীনভাবে অতি দ্রুত কোয়েরি করার উপযোগী করে তোলার সুযোগ দেয়'
        },
        {
          en: 'CQRS eliminates the need for software developers and system administrators',
          bn: 'CQRS ব্যবহারের ফলে কোনো সফটওয়্যার ডেভেলপার বা সিস্টেম অ্যাডমিনিস্ট্রেটরের প্রয়োজন হয় না'
        },
        {
          en: 'Because CQRS enables database servers to operate without electric power',
          bn: 'কারণ CQRS-এর মাধ্যমে ডেটাবেস সার্ভার কোনো বিদ্যুৎ ছাড়াই চলতে পারে'
        },
        {
          en: 'CQRS was made mandatory by international maritime treaties in 2023',
          bn: 'কারণ ২০২৩ সালে আন্তর্জাতিক নৌ আইনে CQRS বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Writes and reads have completely different access patterns. CQRS decouples their schemas.',
        bn: 'পড়া ও লেখার কাজের ধরন সম্পূর্ণ ভিন্ন; CQRS উভয়ের জন্য আলাদা উপযুক্ত কাঠামো নিশ্চিত করে।'
      },
      explanation: {
        en: 'CQRS decouples write throughput from read complexity, allowing specialized data stores (e.g. PostgreSQL for writes, Elasticsearch for reads).',
        bn: 'CQRS রিড এবং রাইটকে আলাদা করে বিশেষায়িত ডেটাবেস (যেমন লেখার জন্য PostgreSQL এবং খোঁজার জন্য Elasticsearch) ব্যবহারের সুবিধা দেয়।'
      }
    },
    {
      id: 'rw-ex3',
      kind: 'mcq',
      topic: 'event-sourcing-replay-auditability',
      question: {
        en: 'How does Event Sourcing fundamentally change how application state is stored compared to traditional CRUD database architectures?',
        bn: 'ঐতিহ্যবাহী CRUD ডেটাবেসের তুলনায় ইভেন্ট সোর্সিং (Event Sourcing) কীভাবে সিস্টেমের তথ্য সংরক্ষণের পদ্ধতিতে আমূল পরিবর্তন আনে?'
      },
      options: [
        {
          en: 'Instead of overwriting rows with current state, Event Sourcing records every state transition as an immutable, append-only domain event, providing 100% auditability and complete historical replay',
          bn: 'টেবিলের রো বারবার ওভাররাইট না করে প্রতিটি পরিবর্তনকে অপরিবর্তনীয় ইভেন্ট হিসেবে ক্রমানুসারে লিখে রাখা হয়, যা ১০০% অডিট সুবিধা এবং অতীত অবস্থা পুনরায় তৈরির ক্ষমতা দেয়'
        },
        {
          en: 'Event sourcing replaces computer processors with paper ledger books',
          bn: 'ইভেন্ট সোর্সিং কম্পিউটারের বদলে কাগজের খাতা ব্যবহার করতে বাধ্য করে'
        },
        {
          en: 'Because event sourcing erases the database every midnight',
          bn: 'কারণ ইভেন্ট সোর্সিং প্রতি মধ্যরাতে ডেটাবেস মুছে ফেলে'
        },
        {
          en: 'Event sourcing reduces internet network speeds by 90 percent',
          bn: 'ইভেন্ট সোর্সিং ইন্টারনেটের গতি ৯০ শতাংশ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bank statement ledger vs current account balance: a ledger records every deposit and withdrawal forever.',
        bn: 'ব্যাংকের অ্যাকাউন্টে শুধু বর্তমান ব্যালেন্স না দেখে প্রতিটি জমার এবং উত্তোলনের স্টেটমেন্ট রাখা।'
      },
      explanation: {
        en: 'Event Sourcing captures business intent as an immutable log, eliminating destructive updates and enabling historical projections.',
        bn: 'ইভেন্ট সোর্সিং প্রতিটি পদক্ষেপের নিখুঁত ইতিহাস সংরক্ষণ করে, ফলে যেকোনো সময় অতীতের যেকোনো অবস্থার রূপায়ন করা যায়।'
      }
    },
    {
      id: 'rw-ex4',
      kind: 'mcq',
      topic: 'materialized-view-refresh-tradeoff',
      question: {
        en: 'Why do data architects use Materialized Views instead of standard database SQL views for complex analytical reporting queries?',
        bn: 'জটিল অ্যানালিটিক্যাল রিপোর্টিং কোয়েরির জন্য ডেটা প্রকৌশলীরা সাধারণ SQL ভিউয়ের বদলে কেন "মেটেরিয়ালাইজড ভিউ" (Materialized View) ব্যবহার করেন?'
      },
      options: [
        {
          en: 'Standard views recompute complex joins on every single query execution; Materialized Views persist the pre-computed query results physically to disk, serving instant reads at the cost of periodic refresh overhead',
          bn: 'সাধারণ ভিউ প্রতিবার কোয়েরি করার সময় নতুন করে হিসাব চালায়; মেটেরিয়ালাইজড ভিউ হিসাব করা ফলাফল ডিস্কে সংরক্ষণ করে রাখে, ফলে রিফ্রেশ খরচের বিনিময়ে মুহূর্তে উত্তর পাওয়া যায়'
        },
        {
          en: 'Materialized views reduce server room temperatures by 20 degrees',
          bn: 'মেটেরিয়ালাইজড ভিউ সার্ভার রুমের তাপমাত্রা ২০ ডিগ্রি কমিয়ে দেয়'
        },
        {
          en: 'Because standard SQL views were outlawed in 2021',
          bn: 'কারণ ২০২১ সালে সাধারণ এসকিউএল ভিউ নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'Materialized views permanently format the client hard drive on read',
          bn: 'মেটেরিয়ালাইজড ভিউ পড়ার সময় ক্লায়েন্টের ড্রাইভ ফরম্যাট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compute once, read many times. A materialized view caches the result on disk.',
        bn: 'হিসাব একবার, পড়া বহুবার; মেটেরিয়ালাইজড ভিউ ফলাফল ডিস্কে লিখে রাখে।'
      },
      explanation: {
        en: 'Materialized views store pre-calculated query snapshots on disk, delivering instant read performance for expensive aggregations.',
        bn: 'মেটেরিয়ালাইজড ভিউ জটিল হিসাবের ফলাফল আগে থেকেই জমিয়ে রাখে, যার ফলে অত্যন্ত দ্রুত ফলাফল পাওয়া সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'read-write-divorce-quiz',
    title: {
      en: 'Read-Write Separation, CQRS, and News Feed Architecture Quiz',
      bn: 'রিড-রাইট পৃথকীকরণ, CQRS ও নিউজফিড আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'rwd-q1',
        kind: 'mcq',
        topic: 'hybrid-newsfeed-merging-logic',
        question: {
          en: 'In a Hybrid news feed architecture, how does the system construct the final timeline when a user opens their mobile app?',
          bn: 'একটি হাইব্রিড নিউজফিড আর্কিটেকচারে যখন কোনো ব্যবহারকারী মোবাইল অ্যাপ খোলেন, তখন সিস্টেম কীভাবে তার চূড়ান্ত টাইমলাইন তৈরি করে?'
        },
        options: [
          {
            en: 'The app retrieves the user pre-computed inbox (containing posts from standard creators) and merges it in memory with the recent posts of followed celebrities pulled from cache, sorted chronologically',
            bn: 'অ্যাপটি ব্যবহারকারীর আগে থেকে তৈরি থাকা ফিড ইনবক্স (সাধারণ বন্ধুদের পোস্ট) আনে এবং ক্যাশ থেকে তার অনুসরণ করা তারকাদের সাম্প্রতিক পোস্ট টেনে এনে মেমরিতে সময়ের ক্রমানুসারে মিলিয়ে প্রদর্শন করে'
          },
          {
            en: 'The system turns off user internet access for 5 minutes to download posts',
            bn: 'পোস্ট ডাউনলোড করতে সিস্টেম ৫ মিনিটের জন্য ব্যবহারকারীর ইন্টারনেট সংযোগ বন্ধ করে দেয়'
          },
          {
            en: 'Because hybrid news feeds format client device storage on every refresh',
            bn: 'কারণ হাইব্রিড ফিড প্রতিটি রিফ্রেশে ক্লায়েন্টের মেমরি ফরম্যাট করে'
          },
          {
            en: 'The mobile app displays only posts written in binary numbers',
            bn: 'মোবাইল অ্যাপ কেবল বাইনারি সংখ্যায় লেখা পোস্ট প্রদর্শন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pre-computed feed (Push) + real-time celebrity posts (Pull) merged together on the fly.',
          bn: 'আগে থেকে সাজানো সাধারণ বন্ধুদের পোস্টের সাথে ক্যাশ থেকে তারকাদের পোস্ট তাৎক্ষণিকভাবে মেমরিতে মেশানো হয়।'
        },
        explanation: {
          en: 'Hybrid feeds combine the sub-millisecond speed of push inboxes with the write protection of pull for high-follower creators.',
          bn: 'হাইব্রিড ফিড পুশের গতি এবং পুলের নিরাপত্তা একসাথে নিশ্চিত করে বিশাল স্কেলেও নিরবচ্ছিন্ন অভিজ্ঞতা দেয়।'
        }
      },
      {
        id: 'rwd-q2',
        kind: 'mcq',
        topic: 'read-your-own-writes-solution',
        question: {
          en: 'When implementing Master-Replica read-write separation, what architecture pattern ensures a user sees their newly submitted comment immediately despite replication lag?',
          bn: 'মাস্টার-রেপ্লিকা রিড-রাইট পৃথকীকরণে রেপ্লিকেশন ল্যাগ থাকা সত্ত্বেও কোনো ব্যবহারকারী তার সদ্য করা মন্তব্য সাথে সাথে দেখতে পাওয়া কীভাবে নিশ্চিত করা হয়?'
        },
        options: [
          {
            en: 'Read-Your-Own-Writes consistency: routing read requests for that specific user to the Master database (or returning the updated state from client memory/cache) for a few seconds following their write',
            bn: 'রিড-ইউর-ওন-রাইটস নিশ্চয়তা: কোনো ব্যবহারকারী তথ্য পরিবর্তনের পর পরবর্তী কয়েক সেকেন্ডের জন্য তার রিড কোয়েরি সরাসরি মূল মাস্টার ডেটাবেসে পাঠানো অথবা ক্লায়েন্টের লোকাল মেমরি থেকে দেখানো'
          },
          {
            en: 'Shutting down all replica databases permanently',
            bn: 'সমস্ত রেপ্লিকা ডেটাবেস স্থায়ীভাবে বন্ধ করে দেওয়া'
          },
          {
            en: 'Because read-your-own-writes formats the server hard drive',
            bn: 'কারণ এতে সার্ভারের হার্ড ড্রাইভ ফরম্যাট হয়ে যায়'
          },
          {
            en: 'By converting all database comments into numerical coordinates',
            bn: 'ডেটাবেসের সমস্ত মন্তব্যকে ভৌগোলিক স্থানাঙ্কে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Route the author reads to the Master for 5-10 seconds; everyone else reads from Replicas.',
          bn: 'মন্তব্যকারীকে সাময়িকভাবে মাস্টার থেকে পড়তে দেওয়া হয়; বাকিরা রেপ্লিকা থেকে পড়লেও কোনো সমস্যা হয় না।'
        },
        explanation: {
          en: 'Replication lag only breaks user perception if they do not see their own changes; routing author queries to the Leader preserves consistency.',
          bn: 'লেখক যাতে নিজের পরিবর্তন সাথে সাথে দেখতে পান সেজন্য সাময়িক মাস্টার রাউটিং ব্যবহার করে চমৎকার ইউজার এক্সপেরিয়েন্স দেওয়া হয়।'
        }
      },
      {
        id: 'rwd-q3',
        kind: 'mcq',
        topic: 'event-sourcing-snapshotting',
        question: {
          en: 'In Event Sourced systems with accounts that have accumulated over 100000 transactions, why is "Snapshotting" required to prevent slow system startup?',
          bn: '১০০০০০ এর বেশি লেনদেন থাকা অ্যাকাউন্টের ক্ষেত্রে ইভেন্ট সোর্সড সিস্টেমে ধীরগতি এড়াতে কেন "স্ন্যাপশট" (Snapshotting) তৈরি করা আবশ্যক?'
        },
        options: [
          {
            en: 'Replaying 100000 events sequentially from the beginning to compute current balance takes seconds; a periodic snapshot saves the balance at event N so replay only needs to process subsequent events',
            bn: 'বর্তমান ব্যালেন্স বের করতে শুরু থেকে ১০০০০০টি ইভেন্ট পরপর চালানো প্রচুর সময় নষ্ট করে; পর্যায়ক্রমিক স্ন্যাপশট একটি নির্দিষ্ট ধাপ পর্যন্ত ব্যালেন্স জমিয়ে রাখে, যাতে শুধু শেষের কয়েকটি ইভেন্ট প্রসেস করলেই হয়'
          },
          {
            en: 'Snapshotting compresses all database passwords into single letters',
            bn: 'স্ন্যাপশট সমস্ত পাসওয়ার্ড এক অক্ষরের শব্দে রূপান্তর করে'
          },
          {
            en: 'Because replaying events causes computer monitors to lose color',
            bn: 'কারণ ইভেন্ট রিপ্লে করলে মনিটরের রঙ নষ্ট হয়ে যায়'
          },
          {
            en: 'Snapshotting was made mandatory by international aviation treaties in 2022',
            bn: 'কারণ ২০২২ সালে আন্তর্জাতিক বিমান আইনে স্ন্যাপশট বাধ্যতামূলক করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'If you have 1000000 events, start from the latest snapshot at event 999900 and replay only 100 events.',
          bn: '১০০০০০০ ইভেন্ট থাকলে ৯৯৯৯০০ নম্বর স্ন্যাপশট থেকে মাত্র ১০০টি ইভেন্ট চালালেই বর্তমান অবস্থা পাওয়া যায়।'
        },
        explanation: {
          en: 'Snapshots bound event replay duration, ensuring constant-time recovery for long-lived aggregate entities.',
          bn: 'স্ন্যাপশট রিপ্লে করার সময় কমিয়ে এনে দীর্ঘদিনের পুরোনো হিসাবের ক্ষেত্রেও তাৎক্ষণিক পুনরুদ্ধার নিশ্চিত করে।'
        }
      },
      {
        id: 'rwd-q4',
        kind: 'mcq',
        topic: 'asynchronous-materialized-view-tradeoff',
        question: {
          en: 'What architectural tradeoff must engineers accept when updating Materialized Views asynchronously via an event queue rather than synchronously inside the transaction?',
          bn: 'লেনদেনের ভেতরে সিঙ্ক্রোনাসভাবে না করে মেসেজ কিউয়ের মাধ্যমে অ্যাসিঙ্ক্রোনাসভাবে মেটেরিয়ালাইজড ভিউ আপডেট করলে প্রকৌশলীদের কোন আপস মেনে নিতে হয়?'
        },
        options: [
          {
            en: 'Eventual Consistency: write transactions complete with ultra-low latency, but there is a brief millisecond-to-second window where the materialized read view does not yet reflect the latest write',
            bn: 'ইভেনচুয়াল কনসিস্টেন্সি: লেখার কাজ অতি দ্রুত সাব-মিলিসেকেন্ডে শেষ হলেও কয়েক মুহূর্ত বা সেকেন্ডের একটি ক্ষুদ্র ব্যবধান থাকে যখন রিড ভিউতে সদ্য লিখিত ডেটা তাৎক্ষণিকভাবে দেখা যায় না'
          },
          {
            en: 'Asynchronous updates increase server electrical current consumption by 400 percent',
            bn: 'অ্যাসিঙ্ক্রোনাস আপডেটের ফলে সার্ভারের বিদ্যুৎ খরচ ৪০০ শতাংশ বেড়ে যায়'
          },
          {
            en: 'Because asynchronous views disconnect all client internet modems',
            bn: 'কারণ এতে ক্লায়েন্টের ইন্টারনেট মডেমের সংযোগ বিচ্ছিন্ন হয়ে যায়'
          },
          {
            en: 'Materialized views permanently disable database backup systems',
            bn: 'মেটেরিয়ালাইজড ভিউ ব্যাকআপ সিস্টেম চিরতরে নিষ্ক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Writes are fast, but reads might be a few milliseconds behind. This is the definition of Eventual Consistency.',
          bn: 'লেখার গতি অসম্ভব দ্রুত, কিন্তু পড়ার ক্ষেত্রে সামান্য কয়েক মিলিসেকেন্ড পিছিয়ে থাকতে পারে (ইভেনচুয়াল কনসিস্টেন্সি)।'
        },
        explanation: {
          en: 'Asynchronous projections decouple write path latency from read view rendering, accepting momentary staleness for high throughput.',
          bn: 'অ্যাসিঙ্ক্রোনাস প্রজেকশন লেখার গতি বহুগুণ বাড়িয়ে দেয়, যার বিনিময়ে ক্ষণস্থায়ী সাময়িক বিলম্ব মেনে নিতে হয়।'
        }
      }
    ]
  }
};
