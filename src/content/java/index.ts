import type { Hub } from '../../lib/types';
import { TheJvmAndTheBytecodeLesson } from './lessons/the-jvm-and-the-bytecode';
import { ClassesAndTheObjectLesson } from './lessons/classes-and-the-object';
import { CollectionsAndTheListLesson } from './lessons/collections-and-the-list';
import { ExceptionsAndTheCatchLesson } from './lessons/exceptions-and-the-catch';
import { StreamsAndTheLambdaLesson } from './lessons/streams-and-the-lambda';
import { ThreadsAndTheLockLesson } from './lessons/threads-and-the-lock';
import { JdbcAndTheRowLesson } from './lessons/jdbc-and-the-row';
import { TheJarServeLesson } from './lessons/the-jar-serve';

export const javaHub: Hub = {
  slug: 'java',
  name: 'Java Enterprise',
  icon: '☕',
  tagline: {
    en: 'Master enterprise software engineering with Java: JVM bytecode architecture, object-oriented design, Collections, functional Streams, concurrency locks, JDBC persistence, and high-performance production packaging.',
    bn: 'জাভা দিয়ে এন্টারপ্রাইজ সফটওয়্যার ইঞ্জিনিয়ারিং আয়ত্ত করুন: JVM বাইটকোড আর্কিটেকচার, অবজেক্ট-ওরিয়েন্টেড ডিজাইন, কালেকশনস ফ্রেমওয়ার্ক, ফাংশনাল স্ট্রিমস, কনকারেন্সি লক, JDBC পারসিস্টেন্স এবং প্রোডাকশন প্যাকেজিং।'
  },
  intro: {
    en: 'Java is an industry-standard, statically typed, class-based object-oriented language that powers global banking infrastructure, cloud microservices, Android platforms, and enterprise data backends. Designed on the "Write Once, Run Anywhere" (WORA) philosophy, Java compiles source code into platform-independent bytecode executed by the Java Virtual Machine (JVM). This 8-lesson curriculum spans core runtime fundamentals, collections, modern stream pipelines, multithreading synchronization, database transactions, and production deployment packaging.',
    bn: 'জাভা হলো একটি শক্তিশালী, স্ট্যাটিক টাইপযুক্ত এবং অবজেক্ট-ওরিয়েন্টেড ভাষা যা বিশ্বজুড়ে ব্যাংকিং পরিকাঠামো, ক্লাউড মাইক্রোসার্ভিস, অ্যান্ড্রয়েড প্ল্যাটফর্ম এবং এন্টারপ্রাইজ ব্যাকএন্ড পরিচালনায় ব্যবহৃত হয়। "Write Once, Run Anywhere" নীতির ওপর প্রতিষ্ঠিত জাভা কোডকে প্ল্যাটফর্ম-স্বাধীন বাইটকোডে কম্পাইল করে যা জাভা ভার্চুয়াল মেশিন (JVM) দ্বারা পরিচালিত হয়। এই ৮ পাঠের পূর্ণাঙ্গ ট্র্যাকে রানটাইম মেমোরি, কালেকশনস, আধুনিক স্ট্রিম পাইপলাইন, মাল্টি-থ্রেডিং সিঙ্ক্রোনাইজেশন, ডেটাবেস ট্রানজ্যাকশন এবং প্রোডাকশন প্যাকেজিং বিশদভাবে শেখানো হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: JVM Bytecode Engine, OOP & Collections Framework',
        bn: 'ধাপ ১: JVM বাইটকোড ইঞ্জিন, OOP এবং কালেকশনস ফ্রেমওয়ার্ক'
      },
      items: [
        {
          en: 'The JVM & Bytecode: ClassLoaders, bytecode verification, JIT compilation (C1/C2), and Garbage Collection memory generational layout (Lesson 1)',
          bn: 'JVM ও বাইটকোড: ক্লাস-লোডার, বাইটকোড ভেরিফিকেশন, JIT কম্পাইলেশন এবং গার্বেজ কালেকশন মেমোরি লেআউট (পাঠ ১)'
        },
        {
          en: 'Classes & Objects: Encapsulation, inheritance, polymorphism, abstract contracts, interface default methods, and Java records (Lesson 2)',
          bn: 'ক্লাস ও অবজেক্ট: এনক্যাপসুলেশন, ইনহেরিটেন্স, পলিমরফিজম, ইন্টারফেস ডিফল্ট মেথড এবং জাভা রেকর্ডস (পাঠ ২)'
        },
        {
          en: 'Collections & Lists: ArrayList vs LinkedList, HashSet hashing, HashMap bucket collision trees, and ConcurrentHashMap (Lesson 3)',
          bn: 'কালেকশন ও লিস্ট: ArrayList বনাম LinkedList, HashSet হ্যাশিং, HashMap বাকেট কলিশন ট্রি এবং ConcurrentHashMap (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Exception Architecture & Functional Stream Pipelines',
        bn: 'ধাপ ২: এক্সেপশন আর্কিটেকচার এবং ফাংশনাল স্ট্রিম পাইপলাইন'
      },
      items: [
        {
          en: 'Exceptions & Recovery: Checked vs unchecked exceptions, try-with-resources AutoCloseable protocol, and custom failure hierarchies (Lesson 4)',
          bn: 'এক্সেপশন ও রিকভারি: চেকড বনাম আনচেকড এক্সেপশন, try-with-resources AutoCloseable প্রোটোকল এবং কাস্টম এক্সেপশন (পাঠ ৪)'
        },
        {
          en: 'Streams & Lambdas: Java 8+ functional interfaces, map-filter-reduce streaming pipelines, collectors, and Optional monads (Lesson 5)',
          bn: 'স্ট্রিম ও ল্যাম্বডা: ফাংশনাল ইন্টারফেস, map-filter-reduce পাইপলাইন, কালেক্টরস এবং Optional মোনাড (পাঠ ৫)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Concurrency, Thread Synchronization & Deadlock Defense',
        bn: 'ধাপ ৩: কনকারেন্সি, থ্রেড সিঙ্ক্রোনাইজেশন এবং ডেডলক প্রতিরোধ'
      },
      items: [
        {
          en: 'Threads & Locks: Thread lifecycle, synchronized blocks, ReentrantLock, ExecutorService thread pools, and atomic variables (Lesson 6)',
          bn: 'থ্রেড ও লক: থ্রেড লাইফসাইকেল, synchronized ব্লক, ReentrantLock, ExecutorService থ্রেড পুল এবং অ্যাটমিক ভেরিয়েবল (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: Enterprise Persistence & Production JAR Deployment',
        bn: 'ধাপ ৪: এন্টারপ্রাইজ পারসিস্টেন্স এবং প্রোডাকশন JAR ডিপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'JDBC & Persistence: Connection pooling with HikariCP, PreparedStatement parameter binding, and ACID transaction rollbacks (Lesson 7)',
          bn: 'JDBC ও পারসিস্টেন্স: HikariCP কানেকশন পুলিং, PreparedStatement বাইন্ডিং এবং ACID ট্রানজ্যাকশন রোলব্যাক (পাঠ ৭)'
        },
        {
          en: 'The JAR Serve: Maven/Gradle build lifecycle, executable Fat JARs, JVM flags (-Xms, -Xmx), and containerized Docker runtime (Lesson 8)',
          bn: 'JAR পরিবেশন: মাভেন/গ্রেডল বিল্ড লাইফসাইকেল, এক্সিকিউটেবল ফ্যাট জার, JVM ফ্ল্যাগ (-Xms, -Xmx) এবং ডকার রানটাইম (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheJvmAndTheBytecodeLesson,
    ClassesAndTheObjectLesson,
    CollectionsAndTheListLesson,
    ExceptionsAndTheCatchLesson,
    StreamsAndTheLambdaLesson,
    ThreadsAndTheLockLesson,
    JdbcAndTheRowLesson,
    TheJarServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Project 1: Enterprise Transactional Banking Gateway with HikariCP and JDBC',
        bn: 'প্রজেক্ট ১: HikariCP এবং JDBC সমন্বয়ে প্রাতিষ্ঠানিক ব্যাংকিং লেনদেন গেটওয়ে'
      },
      brief: {
        en: 'Develop an enterprise database transaction management engine in Java 17. Configure a high-performance HikariCP connection pool, enforce parameterized SQL queries across 5 financial tables via PreparedStatement to eliminate injection, and orchestrate atomic balance transfers with commit and rollback exception handling.',
        bn: 'জাভা ১৭ ব্যবহার করে একটি এন্টারপ্রাইজ ডেটাবেস লেনদেন ব্যবস্থাপনা ইঞ্জিন তৈরি করুন। উচ্চ-গতির HikariCP কানেকশন পুল কনফিগার করুন, PreparedStatement এর মাধ্যমে ৫ টি টেবিলে নিরাপদ কুয়েরি নিশ্চিত করুন এবং ট্রানজ্যাকশন রোলব্যাক সহ ব্যাংক ব্যালেন্স স্থানান্তর বাস্তবায়ন করুন।'
      }
    },
    {
      title: {
        en: 'Project 2: Concurrent Telemetry Aggregator with Streams and ExecutorService',
        bn: 'প্রজেক্ট ২: স্ট্রিমস এবং ExecutorService সমন্বয়ে সমান্তরাল টেলিমেট্রি এগ্রিগেটর'
      },
      brief: {
        en: 'Build a multi-threaded data ingestion service processing 10000 sensor telemetry records. Distribute tasks across a fixed thread pool of 8 worker threads, filter and transform payloads using parallel Stream pipelines, and prevent race conditions using AtomicLong counters and ConcurrentHashMap caches.',
        bn: '১০০০০ সেন্সর ডেটা প্রসেসিংয়ের জন্য একটি মাল্টি-থ্রেডেড টেলিমেট্রি সার্ভিস তৈরি করুন। ৮ টি ওয়ার্কার থ্রেডের ফিক্সড থ্রেড পুলে কাজ বণ্টন করুন, প্যারালাল স্ট্রিম পাইপলাইন দিয়ে ডেটা ফিল্টার করুন এবং AtomicLong ও ConcurrentHashMap দিয়ে রেস কন্ডিশন প্রতিরোধ করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always use try-with-resources blocks for AutoCloseable resources (files, sockets, database statements) to guarantee deterministic socket and connection cleanup.',
      bn: 'ফাইল, নেটওয়ার্ক সকেট ও ডেটাবেস কানেকশনের মতো রিসোর্সগুলো স্বয়ংক্রিয়ভাবে বন্ধ করতে সর্বদা try-with-resources ব্লক ব্যবহার করুন।'
    },
    {
      en: 'Always bind dynamic SQL query values using PreparedStatement placeholders (?) rather than string concatenation to prevent SQL injection vulnerabilities.',
      bn: 'এসকিউএল ইনজেকশনের ঝুঁকি এড়াতে স্ট্রিং যোগ করার বদলে সর্বদা PreparedStatement প্লেসহোল্ডার (?) ব্যবহার করে প্যারামিটার বাইন্ড করুন।'
    },
    {
      en: 'Prefer unmodifiable Collections (List.of(), Set.of(), Map.of()) for entity constants to enforce thread safety and prevent accidental mutation.',
      bn: 'থ্রেড নিরাপত্তা নিশ্চিত করতে এবং অনিচ্ছাকৃত পরিবর্তন রোধ করতে কনস্ট্যান্ট কালেকশনের ক্ষেত্রে অপরিবর্তনীয় List.of(), Set.of() ও Map.of() ব্যবহার করুন।'
    },
    {
      en: 'Never catch generic Throwable or swallow exceptions with empty catch blocks; always catch specific checked exceptions and log the stack trace.',
      bn: 'কখনোই সাধারণ Throwable ক্যাচ করবেন না বা খালি catch ব্লক রাখবেন না; সর্বদা নির্দিষ্ট এক্সেপশন ধরে সঠিক লগ সংরক্ষণ করুন।'
    },
    {
      en: 'Always configure production JVM memory heap bounds explicitly using -Xms and -Xmx flags to avoid unpredictable out-of-memory container terminations.',
      bn: 'সার্ভারে মেমোরি সংকট ও ক্র্যাশ এড়াতে -Xms এবং -Xmx ফ্ল্যাগ ব্যবহার করে প্রোডাকশন JVM হিপ মেমোরির সীমা সুনির্দিষ্টভাবে নির্ধারণ করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does the JVM Garbage Collector manage memory across generational heap regions (Eden, Survivor, Tenured)?',
        bn: 'JVM গার্বেজ কালেক্টর কীভাবে বিভিন্ন প্রজন্মের হিপ মেমোরিতে (ইডেন, সারভাইভার, টেনিউর্ড) মেমোরি পরিচালনা করে?'
      },
      a: {
        en: 'The JVM divides heap memory into Young Generation (composed of 1 Eden space and 2 Survivor spaces: S0 and S1) and Old Generation (Tenured). New objects are allocated in Eden. When Eden fills, a Minor GC runs, copying surviving live objects into a Survivor space while purging dead references. Objects that survive multiple GC collection cycles (exceeding the aging threshold, typically 15 cycles) are promoted to the Tenured Old Generation. When the Old Generation fills, a Major or Full GC executes to reclaim long-lived memory, which can introduce brief application pauses.',
        bn: 'JVM হিপ মেমোরিকে ইয়ং জেনারেশন (১ টি ইডেন এবং ২ টি সারভাইভার স্পেস: S0 ও S1) এবং ওল্ড জেনারেশনে (টেনিউর্ড) ভাগ করে। নতুন তৈরি অবজেক্টগুলো প্রথমে ইডেনে যায়। ইডেন পূর্ণ হলে মাইনর জিসি চলে জীবিত অবজেক্টগুলোকে সারভাইভারে সরিয়ে বাকি মেমোরি পরিষ্কার করে দেয়। যে অবজেক্টগুলো বারবার বেঁচে থাকে (সাধারণত ১৫ বার জিসি চক্র অতিক্রম করে) সেগুলোকে ওল্ড জেনারেশনে স্থানান্তরিত করা হয়। ওল্ড জেনারেশন পূর্ণ হলে দীর্ঘস্থায়ী মেমোরি পরিষ্কার করতে ফুল জিসি পরিচালিত হয়।'
      }
    },
    {
      q: {
        en: 'How does Java HashMap resolve hash collisions internally, and what occurs at threshold 8?',
        bn: 'জাভা HashMap কীভাবে অভ্যন্তরীণ হ্যাশ সংঘাত সমাধান করে এবং ৮ এর থ্রেশহোল্ডে কী পরিবর্তন ঘটে?'
      },
      a: {
        en: 'Java HashMap computes bucket array indices using key.hashCode() mapped through an internal bitwise spread function. When multiple distinct keys hash to the identical bucket index, HashMap initially resolves collisions by chaining entries into a singly linked list. When a single bucket chain accumulates 8 or more entries and the total table capacity reaches at least 64 buckets, Java converts the linked list into a balanced Red-Black Tree. This converts worst-case lookup latency from linear O(N) time into logarithmic O(log N) time, defending against HashDoS degradation.',
        bn: 'জাভা HashMap কি-এর হ্যাশকোড হিসাব করে নির্দিষ্ট বাকেটে ডেটা জমা রাখে। যখন ভিন্ন ভিন্ন কি একই বাকেটে পড়ে, তখন প্রাথমিকভাবে লিংকড লিস্ট চেইনিংয়ের মাধ্যমে সংঘাত মেটানো হয়। তবে কোনো বাকেটে উপাদানের সংখ্যা ৮ বা তার বেশি হলে এবং মোট টেবিল ক্যাপাসিটি অন্তত ৬৪ হলে, জাভা সেই লিংকড লিস্টটিকে একটি ব্যালেন্সড রেড-ব্ল্যাক ট্রিতে রূপান্তর করে। এর ফলে খোঁজার সময় O(N) থেকে দ্রুত O(log N) এ নেমে আসে যা সিস্টেমের কর্মক্ষমতা বজায় রাখে।'
      }
    },
    {
      q: {
        en: 'What is the architectural distinction between Checked Exceptions and Unchecked Exceptions in Java?',
        bn: 'জাভাতে চেকড এক্সেপশন এবং আনচেকড এক্সেপশনের মধ্যে স্থাপত্যিক পার্থক্য কী?'
      },
      a: {
        en: 'Checked Exceptions inherit directly from java.lang.Exception (excluding RuntimeException). The Java compiler enforces that checked exceptions (such as IOException or SQLException) must either be caught within a try-catch block or declared in the method signature using the "throws" keyword. They represent recoverable environmental failures outside program control. Unchecked Exceptions inherit from java.lang.RuntimeException or java.lang.Error (like NullPointerException or IllegalArgumentException). They are not enforced at compile time and typically signal programming logic flaws that should be prevented rather than caught.',
        bn: 'চেকড এক্সেপশন সরাসরি java.lang.Exception থেকে ইনহেরিট করে (RuntimeException বাদে)। জাভা কম্পাইলার নিশ্চিত করে যে চেকড এক্সেপশনগুলো (যেমন IOException বা SQLException) অবশ্যই try-catch দিয়ে ধরতে হবে অথবা মেথড সিগনেচারে "throws" কিওয়ার্ড দিয়ে ঘোষণা করতে হবে। এগুলো বাইরের পরিবেশগত ভুল নির্দেশ করে। অন্যদিকে আনচেকড এক্সেপশন java.lang.RuntimeException থেকে আসে (যেমন NullPointerException)। এগুলো কম্পাইলার বাধ্যতামূলক করে না এবং সাধারণত কোডের লজিক্যাল ভুল নির্দেশ করে।'
      }
    },
    {
      q: {
        en: 'How do Java 21 Virtual Threads (Project Loom) revolutionize high-throughput concurrent server architectures?',
        bn: 'জাভা ২১ এর ভার্চুয়াল থ্রেড (প্রজেক্ট লুম) কীভাবে উচ্চ-ক্ষমতার কনকারেন্ট সার্ভার আর্কিটেকচারে বৈপ্লবিক পরিবর্তন এনেছে?'
      },
      a: {
        en: 'Traditional platform threads in Java map 1:1 to operating system kernel threads, each consuming roughly 1 megabyte of dedicated stack memory and incurring kernel context-switching overhead, capping active server threads to a few thousand. Java 21 Virtual Threads are ultra-lightweight user-mode threads managed directly by the JVM runtime. Thousands or even 1000000 virtual threads can run concurrently mounted onto a small carrier pool of OS threads. When a virtual thread executes a blocking socket or database read, the JVM unmounts it from the carrier thread without blocking the underlying OS thread, delivering non-blocking reactive throughput with simple synchronous coding styles.',
        bn: 'প্রচলিত প্ল্যাটফর্ম থ্রেড অপারেটিং সিস্টেমের কার্নেল থ্রেডের সাথে ১:১ ম্যাপ করে চলে এবং প্রতিটি থ্রেড প্রায় ১ মেগাবাইট মেমোরি খরচ করে, ফলে সার্ভারে কয়েক হাজারের বেশি থ্রেড চালানো কঠিন হয়। জাভা ২১ এর ভার্চুয়াল থ্রেড হলো JVM দ্বারা পরিচালিত অত্যন্ত হালকা ইউজার-মোড থ্রেড। অল্প কয়েকটি ওএস থ্রেডের ওপর নির্ভর করে সার্ভারে একসাথে ১০ লাখ (১০০০০০০) ভার্চুয়াল থ্রেড চালানো সম্ভব। কোনো ভার্চুয়াল থ্রেড নেটওয়ার্ক বা ডেটাবেস কলের জন্য অপেক্ষা করলে JVM ওএস থ্রেডটিকে মুক্ত করে অন্য কাজে লাগায়, ফলে কোনো ব্লকিং ছাড়াই জটিল সিস্টেমে অবিশ্বাস্য সমান্তরাল গতি অর্জিত হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Core Banking Infrastructure: Processing millions of daily multi-currency ledger transactions with ACID JDBC persistence and distributed locking.',
      bn: 'মূল ব্যাংকিং পরিকাঠামো: নির্ভরযোগ্য JDBC ট্রানজ্যাকশন এবং ডিস্ট্রিবিউটেড লকিং দিয়ে প্রতিদিন লাখ লাখ আর্থিক লেনদেন পরিচালনা।'
    },
    {
      en: 'High-Throughput Microservice Meshes: Powering low-latency distributed APIs handling 50000+ requests per second using Spring Boot and virtual threads.',
      bn: 'উচ্চ-গতির মাইক্রোসার্ভিস মেশ: স্প্রিং বুট এবং ভার্চুয়াল থ্রেড ব্যবহার করে প্রতি সেকেন্ডে ৫০০০০ এর বেশি এপিআই রিকোয়েস্ট পরিচালনা।'
    },
    {
      en: 'Big Data Streaming Platforms: Ingesting and processing petabytes of real-time event telemetry using Apache Kafka, Apache Flink, and Spark.',
      bn: 'বিগ ডেটা স্ট্রিমিং প্ল্যাটফর্ম: অ্যাপাচি কাফকা এবং স্পার্ক ব্যবহার করে পেটাবাইট পরিমাণের রিয়েল-টাইম ইভেন্ট প্রসেসিং।'
    },
    {
      en: 'Enterprise Trading Engines: Executing algorithmic financial stock trades with sub-millisecond execution times utilizing low-pause JVM garbage collectors.',
      bn: 'শেয়ার বাজার ট্রেডিং ইঞ্জিন: লো-পজ JVM গার্বেজ কালেক্টর ব্যবহার করে মিলিসেকেন্ডের ভগ্নাংশে শেয়ার কেনাবেচার অর্ডার কার্যকর করা।'
    }
  ]
};
