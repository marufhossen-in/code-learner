import type { Lesson } from '../../../lib/types';

export const warehouseClerksLesson: Lesson = {
  slug: 'the-warehouse-clerks',
  tech: 'tanstack-query',
  title: {
    en: 'Overview of TanStack Query — QueryClient, useQuery & Caching Clocks',
    bn: 'TanStack Query পরিচিতি — QueryClient, useQuery ও ক্যাশিং ঘড়ি'
  },
  summary: {
    en: 'TanStack Query is the dedicated asynchronous state management engine that treats remote API data as cached server state. In this lesson, you will master the global QueryClient registry, declare queries with useQuery, differentiate the two caching clocks (staleTime versus gcTime), and navigate the query status state machine.',
    bn: 'TanStack Query হলো একটি বিশেষ অ্যাসিনক্রোনাস স্টেট ম্যানেজমেন্ট ইঞ্জিন যা রিমোট এপিআই ডাটাকে ক্যাশ করা সার্ভার স্টেট হিসেবে পরিচালনা করে। এই পাঠে আপনি গ্লোবাল QueryClient রেজিস্ট্রি, useQuery দিয়ে কোয়েরি ঘোষণা, দুটি ক্যাশিং ঘড়ির (staleTime বনাম gcTime) সুনির্দিষ্ট পার্থক্য এবং কোয়েরি স্ট্যাটাস স্টেট মেশিন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'tanstack-query-core-architecture',
      text: {
        en: 'The Server State Caching Architecture and Mental Model',
        bn: 'সার্ভার স্টেট ক্যাশিং আর্কিটেকচার ও মূল ধারণা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build web applications that fetch data from remote servers, treating that asynchronous payload as local component state leads to repetitive boilerplate and race conditions. TanStack Query establishes an in-memory server state cache governed by explicit freshness policies. By declaring queries with queryKey arrays and asynchronous query functions, multiple components share cached data seamlessly without duplicate network calls.',
        bn: 'যখন আপনি দূরবর্তী সার্ভার থেকে ডাটা সংগ্রহকারী ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন সেই অ্যাসিনক্রোনাস ডাটাকে সাধারণ ক্লায়েন্ট স্টেট হিসেবে পরিচালনা করলে কোড জটিল হয় এবং রেস কন্ডিশনের সৃষ্টি হয়। TanStack Query একটি ইন-মেমোরি সার্ভার স্টেট ক্যাশ তৈরি করে যা সুনির্দিষ্ট সতেজতা নীতি মেনে চলে। queryKey অ্যারে এবং queryFn দিয়ে কোয়েরি ঘোষণা করার মাধ্যমে একাধিক কম্পোনেন্ট একই ডাটা শেয়ার করতে পারে কোনো বাড়তি নেটওয়ার্ক রিকোয়েস্ট ছাড়াই।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'QueryClient',
          def: {
            en: 'The central cache coordinator storing all queries, mutations, and subscriber listener registrations in memory.',
            bn: 'কেন্দ্রীয় ক্যাশ কোঅর্ডিনেটর যা মেমোরিতে সমস্ত কোয়েরি, মিউটেশন এবং সাবস্ক্রাইবার লিসেনার নিবন্ধন সংরক্ষণ করে।'
          }
        },
        {
          term: 'queryKey',
          def: {
            en: 'A serializable array uniquely identifying a query cache entry and all of its input dependencies.',
            bn: 'একটি সুনির্দিষ্ট অ্যারে যা একটি কোয়েরির ক্যাশ এন্ট্রি এবং তার সমস্ত ইনপুট ভেরিয়েবলকে স্বতন্ত্রভাবে চিহ্নিত করে।'
          }
        },
        {
          term: 'staleTime',
          def: {
            en: 'The duration in milliseconds before cached data is considered stale and re-fetched on trigger events.',
            bn: 'কত মিলিসেকেন্ড ডাটা সতেজ থাকবে এবং রি-ফেচিং এড়াবে তার নির্দিষ্ট সময়সীমা।'
          }
        },
        {
          term: 'gcTime',
          def: {
            en: 'The garbage collection duration in milliseconds before inactive, unobserved cache records are deleted from RAM.',
            bn: 'সব কম্পোনেন্ট আনমাউন্ট হওয়ার পর অব্যবহৃত ক্যাশ মেমোরি থেকে মুছে ফেলার নিষ্ক্রিয় সময়সীমা।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'staletime-vs-gctime-matrix',
      text: {
        en: 'The Two Caching Clocks Comparison Matrix',
        bn: 'দুটি ক্যাশিং ঘড়ির তুলনা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Clock Dimension', bn: 'ঘড়ির মাত্রা' },
        { en: 'staleTime (Freshness Window)', bn: 'staleTime (সতেজতার সময়সীমা)' },
        { en: 'gcTime (Garbage Collection)', bn: 'gcTime (মেমোরি পরিষ্কারের সময়)' }
      ],
      rows: [
        [
          { en: 'Default Value in v5', bn: 'v5-এ ডিফল্ট মান' },
          { en: '0 milliseconds (stale immediately upon fetch)', bn: '০ মিলিসেকেন্ড (আসার সাথে সাথেই বাসি হিসেবে গণ্য)' },
          { en: '300,000 milliseconds (5 minutes in RAM)', bn: '৩০০,০০০ মিলিসেকেন্ড (মেমোরিতে ৫ মিনিট)' }
        ],
        [
          { en: 'Operational Role', bn: 'কাজের ধরন' },
          { en: 'Governs network traffic: avoids refetching during remounts', bn: 'নেটওয়ার্ক ট্রাফিক নিয়ন্ত্রণ করে: রিমাউন্টে রিকোয়েস্ট থামায়' },
          { en: 'Governs RAM footprint: deletes unmounted inactive cache records', bn: 'মেমোরি খরচ নিয়ন্ত্রণ করে: অব্যবহৃত পুরনো ক্যাশ মুছে দেয়' }
        ],
        [
          { en: 'When Clock Ticks', bn: 'কখন সময় গোনা শুরু হয়' },
          { en: 'Ticks as soon as the queryFn successfully resolves data', bn: 'সফলভাবে এপিআই ডাটা আসার সাথে সাথে সময় গোনা শুরু হয়' },
          { en: 'Ticks only after ALL subscribing components unmount', bn: 'সবগুলো সাবস্ক্রাইবার কম্পোনেন্ট স্ক্রিন থেকে মুছে গেলে শুরু হয়' }
        ],
        [
          { en: 'Extreme Value Effect', bn: 'চরম মানের প্রভাব' },
          { en: 'staleTime: Infinity serves data permanently without network checks', bn: 'staleTime: Infinity দিলে কখনোই পুনরায় নেটওয়ার্ক কল হয় না' },
          { en: 'gcTime: 0 deletes inactive cache immediately upon unmount', bn: 'gcTime: ০ দিলে আনমাউন্ট হওয়ার সাথে সাথে মেমোরি খালি হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'query-simulation-code',
      text: {
        en: 'Working Query Cache and Clock Evaluation Simulation',
        bn: 'কার্যকরী কোয়েরি ক্যাশ ও ঘড়ি মূল্যায়ন সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query Cache Engine, Deduplication, and Clocks
class MockQueryCache {
  constructor() {
    this.cache = new Map();
    this.networkFetchCount = 0;
  }

  // Executes query: deduplicates in-flight calls and checks staleTime
  async fetchQuery(key, fetcher, staleTimeMs = 5000) {
    const serializedKey = JSON.stringify(key);
    const now = 10000; // Simulated current timestamp (10,000ms)

    if (this.cache.has(serializedKey)) {
      const entry = this.cache.get(serializedKey);
      const isFresh = (now - entry.fetchedAt) < staleTimeMs;

      if (isFresh) {
        // Return cached data immediately with 0 network calls
        return { data: entry.data, fromCache: true, fresh: true };
      }
    }

    // Execute network fetch
    this.networkFetchCount += 1;
    const result = await fetcher();
    this.cache.set(serializedKey, {
      data: result,
      fetchedAt: now
    });

    return { data: result, fromCache: false, fresh: true };
  }
}

async function runSimulation() {
  const queryEngine = new MockQueryCache();
  const userFetcher = async () => ({ id: 42, username: 'senior_architect' });

  // 1. Initial request from User Profile Component (Network executed)
  const res1 = await queryEngine.fetchQuery(['user', 42], userFetcher, 5000);

  // 2. Second request from Sidebar Component within staleTime (Cached!)
  const res2 = await queryEngine.fetchQuery(['user', 42], userFetcher, 5000);

  console.log('Request 1 served from cache:', res1.fromCache);
  // -> Request 1 served from cache: false
  console.log('Request 2 served from cache:', res2.fromCache);
  // -> Request 2 served from cache: true
  console.log('Total network roundtrips executed:', queryEngine.networkFetchCount);
  // -> Total network roundtrips executed: 1
  console.log('Fetched user record identifier:', res2.data.id);
  // -> Fetched user record identifier: 42
}

runSimulation();`,
      caption: {
        en: 'Cache engine serves 2 component queries executing only 1 network fetch for user 42',
        bn: 'ক্যাশ ইঞ্জিন ব্যবহারকারী ৪২ এর জন্য মাত্র ১ বার ফেচ করে ২টি কম্পোনেন্টে ডাটা সরবরাহ করছে'
      }
    },
    {
      type: 'heading',
      id: 'query-discipline-rules',
      text: {
        en: 'Query Engineering Best Practices and Rules',
        bn: 'কোয়েরি ইঞ্জিনিয়ারিং সেরা অনুশীলন ও নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In TanStack Query, the queryKey array represents the identity of your data. Any variable used inside the queryFn—such as IDs, page numbers, sorting criteria, or filters—must be included in the queryKey. Omitting variables from the key causes subtle cache collision bugs where different parameters share the same stale data.',
        bn: 'TanStack Query-তে queryKey অ্যারে হলো ডাটার প্রকৃত পরিচয়। queryFn-এর ভেতরে ব্যবহৃত প্রতিটি পরিবর্তনশীল তথ্য—যেমন আইডি, পেজ নম্বর, সাজানোর নিয়ম বা ফিল্টার—অবশ্যই queryKey-তে রাখতে হবে। কি থেকে ভেরিয়েবল বাদ দিলে দুটি ভিন্ন ফিল্টারের ডাটা একই ক্যাশ কি শেয়ার করে মারাত্মক ভুলের সৃষ্টি করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Include All Filter Dependencies: Every variable consumed inside queryFn must be passed in the queryKey array.',
          bn: '১. সব ডিপেন্ডেন্সি queryKey-তে: queryFn-এ ব্যবহৃত সব প্যারামিটার queryKey অ্যারেতে অন্তর্ভুক্ত করুন।'
        },
        {
          en: '2. Distinguish isPending vs isFetching: Use isPending for initial loading skeletons and isFetching for subtle background spinners.',
          bn: '২. বাতি দুটির পার্থক্য: প্রথমবার লোডের জন্য isPending এবং ব্যাকগ্রাউন্ড রি-ফেচে হালকা স্পিনারে isFetching ব্যবহার করুন।'
        },
        {
          en: '3. Set Intentional staleTime: Avoid zero staleTime for static reference data; configure minutes or hours to prevent server overload.',
          bn: '৩. উপযুক্ত staleTime: স্থির ডাটায় ডিফল্ট ০ না রেখে কয়েক মিনিট বা ঘণ্টা দিন যাতে সার্ভারে অযথা চাপ না পড়ে।'
        },
        {
          en: '4. Pass AbortSignal to Fetch: Modern queryFn functions receive { signal }; wire it directly to fetch to allow automatic cancellations.',
          bn: '৪. AbortSignal ব্যবহার: queryFn-এর { signal } ফেচ কলে পাস করুন যাতে কম্পোনেন্ট আনমাউন্ট হলে রিকোয়েস্ট বাতিল হতে পারে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tq-war-ex1',
      kind: 'mcq',
      topic: 'staleTime versus gcTime architectural distinction',
      question: {
        en: 'What is the precise operational difference between "staleTime" and "gcTime" in TanStack Query v5?',
        bn: 'TanStack Query v5-এ "staleTime" এবং "gcTime"-এর মধ্যে সুনির্দিষ্ট অপারেশনাল পার্থক্য কী?'
      },
      options: [
        {
          en: 'staleTime defines how long data is considered fresh before re-fetching, whereas gcTime defines how long unused, unobserved data remains in RAM before being deleted from memory',
          bn: 'staleTime নির্ধারণ করে পুনরায় রি-ফেচ করার পূর্বে ডাটা কতক্ষণ সতেজ থাকবে, আর gcTime নির্ধারণ করে সব কম্পোনেন্ট আনমাউন্ট হওয়ার পর অব্যবহৃত ডাটা র্যামে কতক্ষণ টিকে থাকবে'
        },
        {
          en: 'staleTime is measured in days while gcTime is measured in microseconds',
          bn: 'staleTime দিনে মাপা হয় আর gcTime মাইক্রোসেকেন্ডে মাপা হয়'
        },
        {
          en: 'gcTime only works on computers connected to optical fiber internet',
          bn: 'gcTime কেবল অপটিক্যাল ফাইবার ইন্টারনেট সংযুক্ত কম্পিউটারে কাজ করে'
        },
        {
          en: 'staleTime deletes the database while gcTime restores the database',
          bn: 'staleTime ডাটাবেজ মুছে দেয় আর gcTime ডাটাবেজ পুনরুদ্ধার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'staleTime controls network refetching behavior; gcTime controls memory garbage collection.',
        bn: 'staleTime নেটওয়ার্ক রিকোয়েস্ট নিয়ন্ত্রণ করে; gcTime মেমোরি খালি করার কাজ করে।'
      },
      explanation: {
        en: 'staleTime dictates when cached data needs a background refresh upon remount or window focus. gcTime governs memory management, determining when unobserved cache entries are garbage-collected.',
        bn: 'staleTime ঠিক করে কখন সার্ভারে নতুন রিকোয়েস্ট পাঠাতে হবে। আর gcTime ঠিক করে কোনো পেজ থেকে বের হয়ে গেলে কত মিনিট পর সেই ডাটা মেমোরি থেকে মুছে ফেলা হবে।'
      }
    },
    {
      id: 'tq-war-ex2',
      kind: 'mcq',
      topic: 'difference between isPending and isFetching status flags',
      question: {
        en: 'How does the "isPending" boolean flag differ from "isFetching" in modern TanStack Query v5?',
        bn: 'আধুনিক TanStack Query v5-এ "isPending" ফ্ল্যাগটি "isFetching" থেকে কীভাবে আলাদা?'
      },
      options: [
        {
          en: '"isPending" is true when there is NO cached data at all (first load), whereas "isFetching" is true whenever an asynchronous network request is actively in-flight (including background re-fetches)',
          bn: '"isPending" কেবল তখনই সত্য হয় যখন ক্যাশে কোনো ডাটায় থাকে না (প্রথম লোড), আর যেকোনো নেটওয়ার্ক রিকোয়েস্ট বা ব্যাকগ্রাউন্ড রি-ফেচ চলাকালীন "isFetching" সত্য হয়'
        },
        {
          en: 'isPending only works on mobile phones while isFetching only works on desktops',
          bn: 'isPending কেবল মোবাইলে কাজ করে আর isFetching কেবল ডেস্কটপে কাজ করে'
        },
        {
          en: 'isFetching permanently blocks user mouse clicks',
          bn: 'isFetching ব্যবহারকারীর মাউস ক্লিক চিরতরে আটকে দেয়'
        },
        {
          en: 'There is no difference between isPending and isFetching',
          bn: 'isPending এবং isFetching-এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'isPending represents lack of data; isFetching represents an active network runner.',
        bn: 'isPending মানে ডাটা একেবারেই নেই; isFetching মানে নেটওয়ার্কে কাজ চলছে।'
      },
      explanation: {
        en: 'In v5, isPending means status === "pending" (no cached data yet, show skeleton). isFetching means fetchStatus === "fetching" (network call active, show subtle spinner while displaying existing cache).',
        bn: 'প্রথমবার পেজ খুললে ডাটা না থাকায় isPending সত্য হয় (স্কেলিটন লোডার দেখান)। পরবর্তীতে ব্যাকগ্রাউন্ডে রি-ফেচ হলে পুরনো ডাটা ঠিক রেখে isFetching দিয়ে ছোট লোডার দেখানো যায়।'
      }
    },
    {
      id: 'tq-war-ex3',
      kind: 'mcq',
      topic: 'importance of including variables in queryKey array',
      question: {
        en: 'What dangerous bug occurs if a component fetches users filtered by status ("status") but specifies a static key: "queryKey: [\'users\']"?',
        bn: 'কোনো কম্পোনেন্ট যদি স্ট্যাটাস দিয়ে ব্যবহারকারী টানে কিন্তু স্ট্যাটিক কি দেয়: "queryKey: [\'users\']", তবে কোন মারাত্মক ভুল ঘটে?'
      },
      options: [
        {
          en: 'TanStack Query treats all filter statuses as the exact same cache entry; when the status filter changes, the query will NOT trigger a re-fetch and will display stale data from the previous filter',
          bn: 'TanStack Query সব ফিল্টারকে একই ক্যাশ এন্ট্রি মনে করে; ফলে ফিল্টার পরিবর্তন করলেও কোনো রি-ফেচ হবে না এবং পূর্বের ফিল্টারের ভুল ডাটা স্ক্রিনে আটকে থাকবে'
        },
        {
          en: 'The user computer power supply burns out physically',
          bn: 'ব্যবহারকারীর কম্পিউটারের পাওয়ার সাপ্লাই পুড়ে যায়'
        },
        {
          en: 'The browser completely deletes all JavaScript files',
          bn: 'ব্রাউজার সমস্ত জাভাস্ক্রিপ্ট ফাইল মুছে ফেলে'
        },
        {
          en: 'The queryKey is automatically translated into French',
          bn: 'queryKey নিজে থেকেই ফরাসি ভাষায় অনুবাদ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The queryKey is the cache identity; missing variables cause cache collisions.',
        bn: 'queryKey হলো ক্যাশের পরিচয়; এতে ফিল্টার না দিলে ভুল ডাটা ক্যাশ থেকে প্রদর্শিত হবে।'
      },
      explanation: {
        en: 'The queryKey array uniquely indexes the cache. If a variable that changes the queryFn result is omitted from queryKey, TanStack Query cannot know the query parameters changed, causing stale data bugs.',
        bn: 'queryKey দিয়ে ক্যাশ সংরক্ষিত হয়। ফিল্টার পরিবর্তন হলেও যদি কি না বদলায়, তবে লাইব্রেরি ভাববে ডাটা একই আছে এবং নতুন রিকোয়েস্ট পাঠাবে না। তাই [\'users\', status] দেওয়া বাধ্যতামূলক।'
      }
    },
    {
      id: 'tq-war-ex4',
      kind: 'mcq',
      topic: 'canceling network requests with AbortSignal in queryFn',
      question: {
        en: 'How can a developer leverage the "{ signal }" argument passed into the "queryFn" callback in modern TanStack Query?',
        bn: 'আধুনিক TanStack Query-তে "queryFn" কলব্যাকে আসা "{ signal }" আর্গুমেন্টটি একজন ডেভেলপার কীভাবে কাজে লাগাতে পারেন?'
      },
      options: [
        {
          en: 'Forward it directly to the native fetch call: "fetch(url, { signal })", allowing the browser to automatically abort the network request if the component unmounts or the query becomes obsolete',
          bn: 'এটি সরাসরি ফেচ কলে পাস করে: "fetch(url, { signal })", যার ফলে কম্পোনেন্ট আনমাউন্ট হলে বা কোয়েরি বাতিল হলে ব্রাউজার নিজে থেকেই নেটওয়ার্ক রিকোয়েস্ট মাঝপথে বন্ধ করে দেয়'
        },
        {
          en: 'Convert the signal into an MP3 audio file',
          bn: 'সিগন্যালটিকে একটি এমপিথ্রি অডিও ফাইলে রূপান্তর করে'
        },
        {
          en: 'Pass the signal into the CSS stylesheet file',
          bn: 'সিগন্যালটিকে সিএসএস স্টাইলশিট ফাইলে পাস করে'
        },
        {
          en: 'Network request cancellation is impossible in modern browsers',
          bn: 'আধুনিক ওয়েব ব্রাউজারে নেটওয়ার্ক রিকোয়েস্ট বাতিল করা একেবারেই অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Passing { signal } to fetch wires automated cancellation directly into browser networking.',
        bn: 'ফেচ কলে { signal } দিলে অপ্রয়োজনীয় রিকোয়েস্ট স্বয়ংক্রিয়ভাবে বাতিল হয়ে ব্যান্ডউইথ বাঁচায়।'
      },
      explanation: {
        en: 'TanStack Query creates an AbortController for every query. Passing its signal to fetch(url, { signal }) ensures that if a user navigates away mid-request, network bandwidth is not wasted.',
        bn: 'ইউজার কোনো পেজ থেকে বের হয়ে গেলে মাঝপথে থাকা রিকোয়েস্ট চালিয়ে রাখার কোনো অর্থ হয় না। { signal } দিলে ব্রাউজার সাথে সাথে রিকোয়েস্ট বন্ধ করে সার্ভার ও ব্যান্ডউইথ রক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'the-warehouse-clerks-quiz',
    title: {
      en: 'TanStack Query Core Architecture Quiz',
      bn: 'TanStack Query কোর আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-query-key-serialization-order',
        kind: 'mcq',
        topic: 'deterministic query key serialization and object key ordering',
        question: {
          en: 'How does TanStack Query serialize queryKey arrays containing objects (e.g. [\'todos\', { status, page }])?',
          bn: 'অবজেক্ট সহ queryKey অ্যারে (যেমন [\'todos\', { status, page }]) TanStack Query কীভাবে সিরিয়ালাইজ করে?'
        },
        options: [
          {
            en: 'Array item order is strictly preserved, but object keys inside the array are deterministically sorted; therefore [\'todos\', { a: 1, b: 2 }] and [\'todos\', { b: 2, a: 1 }] resolve to the exact same cache entry',
            bn: 'অ্যারের আইটেমের ক্রম কঠোরভাবে বজায় থাকে, কিন্তু ভেতরের অবজেক্টের কি-গুলো সাজিয়ে নেওয়া হয়; ফলে [\'todos\', { a: 1, b: 2 }] এবং [\'todos\', { b: 2, a: 1 }] হুবহু একই ক্যাশ হিসেবে গৃহীত হয়'
          },
          {
            en: 'Object keys cause a fatal runtime crash in TanStack Query',
            bn: 'অবজেক্ট কি দিলে TanStack Query রানটাইমে ক্র্যাশ করে'
          },
          {
            en: 'Keys are hashed using MD5 encryption into a 128-bit integer',
            bn: 'কি-গুলোকে এমডি৫ এনক্রিপশন দিয়ে ১২৮-বিট সংখ্যায় রূপান্তর করা হয়'
          },
          {
            en: 'Array item order is randomly shuffled on every render',
            bn: 'প্রতি রেন্ডারে অ্যারের উপাদানগুলোর ক্রম এলোমেলো হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Array position matters; object key ordering inside objects does not matter.',
          bn: 'অ্যারের পজিশন গুরুত্বপূর্ণ; তবে ভেতরের অবজেক্টের কি আগে-পরে থাকলেও একই ধরা হয়।'
        },
        explanation: {
          en: 'TanStack Query hashes keys deterministically. Array index position is strictly preserved, but object keys are sorted alphabetically so that differing property order does not cause cache misses.',
          bn: 'অ্যারের প্রথম ও দ্বিতীয় স্থানের ক্রম গুরুত্বপূর্ণ। কিন্তু অবজেক্টের ভেতর { page, sort } বা { sort, page } যেভাবেই লেখা হোক না কেন, লাইব্রেরি নিজে সাজিয়ে একই ক্যাশ শনাক্ত করে।'
        }
      },
      {
        id: 'q-queryclient-defaultoptions-hierarchy',
        kind: 'mcq',
        topic: 'global defaultOptions configuration hierarchy in QueryClient',
        question: {
          en: 'How can an engineering team configure global caching defaults (such as staleTime: 60000) for all queries across their entire application?',
          bn: 'একটি ইঞ্জিনিয়ারিং টিম কীভাবে পুরো অ্যাপ্লিকেশনের সব কোয়েরির জন্য গ্লোবাল ডিফল্ট (যেমন staleTime: 60000) একবারে সেট করতে পারে?'
        },
        options: [
          {
            en: 'Provide "defaultOptions" when creating the QueryClient instance: "new QueryClient({ defaultOptions: { queries: { staleTime: 60000 } } })"',
            bn: 'QueryClient তৈরির সময় "defaultOptions" দিয়ে: "new QueryClient({ defaultOptions: { queries: { staleTime: 60000 } } })"'
          },
          {
            en: 'Hardcode staleTime into the operating system bootloader',
            bn: 'কম্পিউটারের অপারেটিং সিস্টেম বুটলোডারে staleTime লিখে দিয়ে'
          },
          {
            en: 'Global defaults are strictly forbidden in TanStack Query',
            bn: 'TanStack Query-তে গ্লোবাল ডিফল্ট ব্যবহার করা সম্পূর্ণ নিষিদ্ধ'
          },
          {
            en: 'Rewrite the browser networking stack in C++',
            bn: 'ব্রাউজার নেটওয়ার্কিং কোড নতুন করে সি++ এ লিখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'QueryClient constructor accepts defaultOptions to set global policy.',
          bn: 'QueryClient তৈরিতে defaultOptions দিয়ে পুরো অ্যাপের সাধারণ নিয়ম ঠিক করা হয়।'
        },
        explanation: {
          en: 'QueryClient({ defaultOptions: { queries: { staleTime: 60000, retry: 2 } } }) establishes application-wide policies. Individual useQuery hooks can override these defaults when needed.',
          bn: 'QueryClient-এর ভেতরে defaultOptions দিলে সব কম্পোনেন্ট নিজে থেকেই সেই সেটিংস পায়। কোনো নির্দিষ্ট পেজে ব্যতিক্রম দরকার হলে সেখানে আলাদা করে ওভাররাইড করা যায়।'
        }
      },
      {
        id: 'q-enabled-option-dependent-queries',
        kind: 'mcq',
        topic: 'gating dependent queries using the enabled boolean flag',
        question: {
          en: 'How can a developer prevent a query from firing until a required prerequisite variable (such as "userId") is available?',
          bn: 'কোনো প্রয়োজনীয় ভেরিয়েবল (যেমন "userId") না আসা পর্যন্ত একটি কোয়েরি যাতে চালু না হয়, তা কীভাবে আটকানো যায়?'
        },
        options: [
          {
            en: 'Set the "enabled" option: "useQuery({ queryKey: [\'user\', userId], queryFn: () => fetchUser(userId), enabled: !!userId })"',
            bn: '"enabled" অপশন ব্যবহার করে: "useQuery({ queryKey: [\'user\', userId], queryFn: () => fetchUser(userId), enabled: !!userId })"'
          },
          {
            en: 'Wrap the component in an infinite while loop',
            bn: 'কম্পোনেন্টটিকে একটি অবিরাম হোয়াইল লুপের ভেতর মুড়িয়ে'
          },
          {
            en: 'Disable the computer WiFi network card',
            bn: 'কম্পিউটারের ওয়াইফাই নেটওয়ার্ক কার্ড নিষ্ক্রিয় করে'
          },
          {
            en: 'Throw a fatal JavaScript exception if userId is null',
            bn: 'userId নাল থাকলে একটি মারাত্মক জাভাস্ক্রিপ্ট এক্সেপশন ছুড়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'enabled: false completely pauses query execution until the boolean evaluates to true.',
          bn: 'enabled: false থাকলে শর্ত সত্য না হওয়া পর্যন্ত কোয়েরি রিকোয়েস্ট পাঠানো বন্ধ থাকে।'
        },
        explanation: {
          en: 'The enabled option controls query execution. Setting enabled: !!userId prevents the query from firing with undefined parameters, resolving dependent query waterfalls cleanly.',
          bn: 'আগে আইডি পাওয়া না গেলে এপিআই রিকোয়েস্টে এরর আসত। enabled: !!userId দিলে আইডি উপস্থিত হলেই কেবল লাইব্রেরি রিকোয়েস্ট পাঠায়, অন্যথায় অপেক্ষা করে।'
        }
      },
      {
        id: 'q-window-focus-refetching-configuration',
        kind: 'mcq',
        topic: 'refetchOnWindowFocus automatic synchronization behavior',
        question: {
          en: 'What causes TanStack Query to automatically trigger a background re-fetch when a user switches tabs and returns to your web application?',
          bn: 'ব্যবহারকারী অন্য ট্যাবে গিয়ে আবার আপনার ওয়েব অ্যাপ্লিকেশনে ফিরে এলে TanStack Query কেন স্বয়ংক্রিয়ভাবে ব্যাকগ্রাউন্ড রি-ফেচ চালায়?'
        },
        options: [
          {
            en: 'The "refetchOnWindowFocus" feature (enabled by default) listens to browser focus events and re-fetches any active queries whose data has exceeded its "staleTime" window',
            bn: '"refetchOnWindowFocus" ফিচারটি (ডিফল্টভাবে চালু) ব্রাউজারের ফোকাস ইভেন্ট পর্যবেক্ষণ করে এবং যে কোয়েরিগুলোর "staleTime" শেষ হয়ে গেছে তাদের ব্যাকগ্রাউন্ডে রি-ফেচ করে'
          },
          {
            en: 'The user monitor screen physically turns off and restarts',
            bn: 'ব্যবহারকারীর মনিটর স্ক্রিন বন্ধ হয়ে পুনরায় রিস্টার্ট নেয়'
          },
          {
            en: 'TanStack Query deletes the operating system display drivers',
            bn: 'TanStack Query অপারেটিং সিস্টেমের ডিসপ্লে ড্রাইভার মুছে ফেলে'
          },
          {
            en: 'Window focus re-fetching only works on Saturday mornings',
            bn: 'উইন্ডো ফোকাস রি-ফেচিং কেবল শনিবার সকালে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'refetchOnWindowFocus automatically synchronizes stale data when users return to the app.',
          bn: 'refetchOnWindowFocus ব্যবহারকারী ট্যাবে ফিরলে বাসি ডাটা স্বয়ংক্রিয়ভাবে আপডেট করে।'
        },
        explanation: {
          en: 'When users leave and return to a tab, remote data may have changed. TanStack Query automatically refetches stale active queries on window focus, keeping data synchronized without page reloads.',
          bn: 'ইউজার অন্য ট্যাবে থাকার সময় সার্ভারের ডাটা বদলে যেতে পারে। ট্যাবে ফিরে আসা মাত্রই লাইব্রেরি লক্ষ্য করে ডাটা পুরনো কিনা; পুরনো হলে সাথে সাথে নতুন ডাটা এনে স্ক্রিন আপডেট করে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-return-counter',
    title: {
      en: 'Mutations & Invalidation — useMutation, onSuccess & Cache Eviction',
      bn: 'মিউটেশন ও ইনভ্যালিডেশন — useMutation, onSuccess ও ক্যাশ রিমুভাল'
    }
  }
};
