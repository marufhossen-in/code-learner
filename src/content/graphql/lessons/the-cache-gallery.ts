import type { Lesson } from '../../../lib/types';

export const cacheGalleryLesson: Lesson = {
  slug: 'the-cache-gallery',
  tech: 'graphql',
  title: {
    en: 'Client-Side Caching — Normalized Caches, Cache Invalidation & Directives',
    bn: 'ক্লায়েন্ট-সাইড ক্যাশিং — নরমালাইজড ক্যাশ, ক্যাশ ইনভ্যালিডেশন ও ডিরেক্টিভস'
  },
  summary: {
    en: 'Managing client-side server state efficiently is essential for building responsive web applications. Naive document caching stores responses by query string, causing state drift when two components display conflicting versions of the same record. Normalized caching engines—such as Apollo Client InMemoryCache and Relay Store—decompose hierarchical JSON responses into flat entity tables keyed by typename and id. By establishing a single source of truth across all components, updates made by mutations automatically propagate throughout the user interface. Configurable fetch policies dictate when the client reads from the local cache versus dispatching background network calls, while precise cache eviction and store resets protect against multi-tenant memory leaks upon user logout.',
    bn: 'দ্রুতগতির ওয়েব অ্যাপ্লিকেশন তৈরির জন্য ক্লায়েন্ট-সাইডে সার্ভার স্টেট দক্ষতার সাথে পরিচালনা করা অপরিহার্য। সাধারণ ডকুমেন্ট ক্যাশিং কোয়েরি স্ট্রিং ধরে পুরো রেসপন্স জমা রাখে, ফলে একই তথ্যের বিভিন্ন সংস্করণ দুটি ভিন্ন কম্পোনেন্টে অসঙ্গতি তৈরি করে। Apollo Client এবং Relay-র মতো নরমালাইজড ক্যাশিং ইঞ্জিনগুলো হায়ারার্কিকাল জেএসন রেসপন্সকে typename ও id দ্বারা সূচিত একটি সমতল এনটিটি টেবিলে বিভক্ত করে। সমস্ত কম্পোনেন্টের জন্য একটিমাত্র সর্বজনীন সত্য প্রতিষ্ঠা করায় কোনো মিউটেশনের মাধ্যমে ডেটা বদলালে তা স্বয়ংক্রিয়ভাবে পুরো ইউআই-তে ছড়িয়ে পড়ে। বিভিন্ন ফেচ পলিসির মাধ্যমে ক্লায়েন্ট লোকাল ক্যাশ থেকে পড়বে নাকি ব্যাকগ্রাউন্ড নেটওয়ার্ক কল পাঠাবে তা নিয়ন্ত্রণ করা যায়, এবং লগআউটের সময় স্টোরেজ রিসেট মাল্টি-টেন্যান্ট ডেটা ফাঁস হওয়া রোধ করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Document Caching vs Normalized Entity Stores',
        bn: 'মূল ধারণা: ডকুমেন্ট ক্যাশিং বনাম নরমালাইজড এনটিটি স্টোর'
      }
    },
    {
      type: 'visual',
      id: 'cch'
    },
    {
      type: 'para',
      text: {
        en: 'When you build complex single-page applications, managing client-side server state between network requests is essential for a fluid user experience. Traditional HTTP document caching stores raw response payloads by endpoint URL, which causes data inconsistency when two different components display conflicting versions of the same user. Client-side GraphQL libraries like Apollo Client and Relay solve this using normalized caching, converting tree-shaped JSON responses into a flat relational entity table.',
        bn: 'যখন আপনি জটিল সিঙ্গেল-পেজ অ্যাপ্লিকেশন তৈরি করেন, তখন নেটওয়ার্ক কলের মধ্যবর্তী সময়ে ক্লায়েন্ট-সাইডে সার্ভার স্টেট ধরে রাখা একটি গতিশীল অভিজ্ঞতার জন্য অত্যন্ত জরুরি। চিরাচরিত এইচটিটিপি ডকুমেন্ট ক্যাশ নির্দিষ্ট ইউআরএল ধরে পুরো রেসপন্স সেভ করে রাখে, যার ফলে একই ব্যবহারকারীর পরিবর্তিত তথ্য দুটি ভিন্ন কম্পোনেন্টে গরমিল হিসেবে দেখা দেয়। Apollo Client এবং Relay-র মতো ক্লায়েন্ট লাইব্রেরিগুলো নরমালাইজড ক্যাশিংয়ের মাধ্যমে ট্রি-আকারের জেএসন ডেটাকে একটি সমতল রিলেশনাল এনটিটি টেবিলে রূপান্তর করে এই সমস্যার সমাধান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Normalized Cache',
          def: {
            en: 'A client-side storage architecture that splits incoming JSON trees into distinct entity records keyed by __typename and id',
            bn: 'ক্লায়েন্ট-সাইড স্টোরেজ ব্যবস্থা যা আগত জেএসন ট্রিকে ভেঙে __typename এবং id দ্বারা সূচিত একক এনটিটি রেকর্ডে জমা রাখে'
          }
        },
        {
          term: 'Single Source of Truth',
          def: {
            en: 'The architectural principle where an entity resides in exactly one memory location, referenced by pointer across all components',
            bn: 'কাঠামোগত নীতি যেখানে একটি সত্তা মেমোরির কেবল একটি নির্দিষ্ট স্থানে থাকে এবং সমস্ত কম্পোনেন্ট পয়েন্টার দিয়ে তা ব্যবহার করে'
          }
        },
        {
          term: 'Fetch Policy',
          def: {
            en: 'Configuration rule instructing the GraphQL client whether to prioritize local cache or dispatch network requests',
            bn: 'কনফিগারেশন নীতি যা ক্লায়েন্টকে জানায় যে সে লোকাল ক্যাশকে অগ্রাধিকার দেবে নাকি নেটওয়ার্ক রিকোয়েস্ট পাঠাবে'
          }
        },
        {
          term: 'Cache Eviction',
          def: {
            en: 'The programmatic removal of obsolete entity records or dangling query references from the normalized client store',
            bn: 'নরমালাইজড ক্লায়েন্ট স্টোর থেকে অপ্রয়োজনীয় এনটিটি রেকর্ড বা অব্যবহৃত কোয়েরি রেফারেন্স প্রোগ্রামিংয়ের মাধ্যমে মুছে ফেলা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'normalization-process',
      text: {
        en: 'How Normalized Caches Eliminate State Drift',
        bn: 'নরমালাইজড ক্যাশ কীভাবে তথ্যের গরমিল দূর করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In naive document-based caching, running GetUserProfile stores { user: { id: "7", name: "Alice" } } under its own query string. Running GetTeamMembers stores another separate object for Alice under a different key. If Alice edits her name to Alice Walker via a mutation, updating only one query leaves the user seeing two conflicting names on the same screen—a bug known as state drift.',
        bn: 'সাধারণ ডকুমেন্ট ক্যাশিংয়ে GetUserProfile চালালে { user: { id: "7", name: "Alice" } } নিজস্ব কোয়েরি স্ট্রিংয়ের অধীনে সেভ হয়। আবার GetTeamMembers চালালে অ্যালিসের আরেকটি ভিন্ন কপি অন্য কি-র অধীনে জমা হয়। অ্যালিস যদি মিউটেশনের মাধ্যমে নাম পরিবর্তন করে Alice Walker বানান, তবে একটি কোয়েরি আপডেট হলেও অন্যটিতে পুরোনো নাম থেকে যায়—যাকে তথ্যের গরমিল বা স্টেট ড্রিফট বলা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Normalized caching eliminates this defect through structural decomposition. When a query payload arrives, the cache engine walks the tree, assigns a deterministic key to each entity (e.g. User:7), and stores it in a central flat table. The original query tree is rewritten to store only reference pointers like { __ref: "User:7" }. When a mutation updates User:7, every component observing that reference repaints automatically without refetching.',
        bn: 'নরমালাইজড ক্যাশিং কাঠামোগত বিভাজনের মাধ্যমে এই সমস্যা পুরোপুরি দূর করে। যখন কোনো রেসপন্স আসে, ক্যাশ ইঞ্জিন পুরো ট্রি বিশ্লেষণ করে প্রতিটি সত্তাকে একটি নির্দিষ্ট কি (যেমন User:7) দিয়ে কেন্দ্রীয় টেবিলে জমা করে। আর মূল কোয়েরি ট্রিতে কেবল { __ref: "User:7" } রেফারেন্স পয়েন্টার বসিয়ে দেওয়া হয়। ফলে মিউটেশনে একবার User:7 আপডেট হলেই সেই রেফারেন্স ব্যবহারকারী সমস্ত কম্পোনেন্ট নতুন তথ্য দিয়ে স্বয়ংক্রিয়ভাবে রেন্ডার হয়।'
      }
    },
    {
      type: 'heading',
      id: 'fetch-policies',
      text: {
        en: 'Mastering Fetch Policies in Apollo Client',
        bn: 'Apollo Client-এ ফেচ পলিসির কার্যকর প্রয়োগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Clients customize how queries interact with the cache using fetch policies. The default policy is cache-first: the client checks the normalized cache; if matching data exists, it returns immediately with zero network overhead. If the entry is missing, it fetches from the network and saves the response.',
        bn: 'ফেচ পলিসির মাধ্যমে ক্লায়েন্ট ঠিক করে কীভাবে কোয়েরি ক্যাশের সাথে সমন্বয় করবে। ডিফল্ট নীতি হলো cache-first: ক্লায়েন্ট প্রথমে নরমালাইজড ক্যাশ পরীক্ষা করে; প্রয়োজনীয় ডেটা থাকলে কোনো নেটওয়ার্ক কল ছাড়াই সাথে সাথে রিটার্ন করে। আর ডেটা না থাকলে নেটওয়ার্ক থেকে এনে ক্যাশে লিখে রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For real-time screens where fresh data is critical, cache-and-network returns the cached snapshot instantly to avoid blank loading spinners, while simultaneously sending a background HTTP fetch to reconcile latest updates. For sensitive workflows like checkout payments or live stock quantities, network-only or no-cache ensures that local cached entries are never mistakenly displayed.',
        bn: 'যেসব স্ক্রিনে তাত্ক্ষণিক প্রতিক্রিয়া এবং টাটকা তথ্য দুটোই প্রয়োজন, সেখানে cache-and-network ব্যবহার করা হয়। এটি কোনো স্পিনার ছাড়াই তাৎক্ষণিক ক্যাশ ডেটা দেখায় এবং একই সাথে ব্যাকগ্রাউন্ডে নেটওয়ার্ক কল পাঠিয়ে ডেটা হালনাগাদ করে। অন্যদিকে পেমেন্ট বা লাইভ স্টকের মতো সংবেদনশীল কাজে network-only বা no-cache নিশ্চিত করে যে ভুল করে পুরোনো বাসি ক্যাশ প্রদর্শিত হবে না।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Client-Side Caching Strategies',
        bn: 'কাঠামোগত তুলনা: ক্লায়েন্ট-সাইড ক্যাশিং কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Caching Model', bn: 'ক্যাশিং মডেল' },
        { en: 'Storage Organization', bn: 'সংরক্ষণের রূপ' },
        { en: 'Deduplication Ability', bn: 'ডিডুপ্লিকেশন ক্ষমতা' },
        { en: 'Mutation Update Mechanism', bn: 'মিউটেশন আপডেট পদ্ধতি' }
      ],
      rows: [
        [
          { en: 'Normalized Cache (Apollo/Relay)', bn: 'নরমালাইজড ক্যাশ (Apollo/Relay)' },
          { en: 'Flat entity table keyed by __typename:id with references', bn: '__typename:id দ্বারা সূচিত ফ্ল্যাট টেবিল ও রেফারেন্স' },
          { en: 'Complete; identical entities share single memory record', bn: 'নিখুঁত; অভিন্ন সত্তা একটিমাত্র মেমোরি রেকর্ড শেয়ার করে' },
          { en: 'Automatic updates across all observing components', bn: 'সমস্ত পর্যবেক্ষক কম্পোনেন্টে স্বয়ংক্রিয় লাইভ আপডেট' }
        ],
        [
          { en: 'Document Cache (HTTP / Naive)', bn: 'ডকুমেন্ট ক্যাশ (HTTP / সাধারণ)' },
          { en: 'Raw serialized JSON payloads keyed by full query URL', bn: 'সম্পূর্ণ কোয়েরি ইউআরএল দ্বারা সংরক্ষিত কাঁচা জেএসন' },
          { en: 'None; same entity duplicated across multiple query keys', bn: 'নেই; একই সত্তা একাধিক কোয়েরি কি-তে ডুপ্লিকেট থাকে' },
          { en: 'Requires manual refetching of all related query keys', bn: 'সমস্ত সম্পর্কিত কোয়েরি ম্যানুয়ালি পুনরায় রিফেচ করতে হয়' }
        ],
        [
          { en: 'Ephemeral In-Memory State', bn: 'সাময়িক ইন-মেমোরি স্টেট' },
          { en: 'Local component React useState or useReducer hooks', bn: 'স্থানীয় কম্পোনেন্ট রিঅ্যাক্ট useState বা useReducer' },
          { en: 'Isolated strictly to the mounting component lifecycle', bn: 'কেবলমাত্র সংশ্লিষ্ট কম্পোনেন্টের লাইফসাইকেলে সীমাবদ্ধ' },
          { en: 'Impossible to synchronize across distant UI widgets', bn: 'ভিন্ন ভিন্ন দূরবর্তী ইউআই উইজেটের মাঝে সিঙ্ক করা অসম্ভব' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Normalized Store Mechanics',
        bn: 'বাস্তব কোড সিমুলেশন: নরমালাইজড স্টোর কার্যপদ্ধতি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of GraphQL Normalized Cache in Node.js

class NormalizedCache {
  public entities = new Map<string, any>();

  // Normalizes an incoming tree into flat entity records keyed by __typename:id
  write(data: any): any {
    if (data === null || typeof data !== 'object') return data;

    if (Array.isArray(data)) {
      return data.map(item => this.write(item));
    }

    const { __typename, id } = data;
    const normalizedRecord: Record<string, any> = {};

    for (const [key, value] of Object.entries(data)) {
      if (value !== null && typeof value === 'object') {
        normalizedRecord[key] = this.write(value);
      } else {
        normalizedRecord[key] = value;
      }
    }

    if (__typename && id !== undefined) {
      const entityKey = __typename + ':' + id;
      const existing = this.entities.get(entityKey) || {};
      const merged = { ...existing, ...normalizedRecord };
      this.entities.set(entityKey, merged);
      return { __ref: entityKey };
    }

    return normalizedRecord;
  }

  // Direct entity update (e.g. from a mutation payload)
  updateEntity(typename: string, id: string, patch: Record<string, any>) {
    const key = typename + ':' + id;
    if (!this.entities.has(key)) return false;
    const current = this.entities.get(key);
    this.entities.set(key, { ...current, ...patch });
    return true;
  }
}

const cache = new NormalizedCache();

// 1. Ingesting Query 1: User Profile query (User ID 7)
const queryResponse1 = {
  user: {
    __typename: 'User',
    id: '7',
    name: 'Alice',
    role: 'Editor'
  }
};
const ref1 = cache.write(queryResponse1);

// 2. Ingesting Query 2: Team Members query (contains User 7 and User 8)
const queryResponse2 = {
  team: {
    __typename: 'Team',
    id: 'team_alpha',
    members: [
      { __typename: 'User', id: '7', name: 'Alice', role: 'Editor' },
      { __typename: 'User', id: '8', name: 'Bob', role: 'Viewer' }
    ]
  }
};
const ref2 = cache.write(queryResponse2);

// 3. Mutation updates User 7 name from 'Alice' to 'Alice Walker'
cache.updateEntity('User', '7', { name: 'Alice Walker' });

// 4. Verify that reading from User:7 reflects the change everywhere
const userRecord = cache.entities.get('User:7');
const totalStoredEntities = cache.entities.size;

console.log('Total normalized entities in store:', totalStoredEntities);
// -> Total normalized entities in store: 3
console.log('User 7 name updated in central store:', userRecord.name);
// -> User 7 name updated in central store: Alice Walker
console.log('User 7 role preserved:', userRecord.role);
// -> User 7 role preserved: Editor
console.log('Reference pointer exists:', ref1.user.__ref === 'User:7');
// -> Reference pointer exists: true`,
      caption: {
        en: 'Simulation: cache stores 3 normalized entities; updating User 7 to Alice Walker updates the shared pointer with role Editor',
        bn: 'সিমুলেশন: ক্যাশ ৩ টি নরমালাইজড এনটিটি সংরক্ষণ করে; ইউজার ৭ কে Alice Walker করলে রোল Editor সহ শেয়ার্ড পয়েন্টার আপডেট হয়'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always include id and __typename in every selection set. Normalized caches rely on __typename and id to compute global entity identity keys; omitting id forces the client to treat the payload as an un-normalizable document.',
        bn: 'নিয়ম ১: প্রতিটি সিলেকশন সেটে সর্বদা id এবং __typename অন্তর্ভুক্ত করুন। নরমালাইজড ক্যাশ গ্লোবাল এনটিটি কি তৈরি করতে এগুলোর ওপর নির্ভর করে; id বাদ দিলে ক্লায়েন্ট ডেটা নরমালাইজ করতে ব্যর্থ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Execute client.resetStore() immediately upon user logout. Failing to clear the normalized cache when a user logs out leaks authenticated profile data and private tenant records to subsequent users on shared devices.',
        bn: 'নিয়ম ২: ব্যবহারকারী লগআউট করার সাথে সাথে client.resetStore() চালান। লগআউটের সময় নরমালাইজড ক্যাশ খালি না করলে এক ব্যবহারকারীর ব্যক্তিগত তথ্য শেয়ার্ড ডিভাইসের পরবর্তী ব্যবহারকারীর কাছে ফাঁস হয়ে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use cache.evict() when deleting records. When a mutation deletes an item from the backend, calling cache.evict({ id: "Item:123" }) followed by cache.gc() removes the dangling reference and updates lists cleanly.',
        bn: 'নিয়ম ৩: রেকর্ড ডিলিট করার সময় cache.evict() ব্যবহার করুন। ব্যাকএন্ডে কোনো আইটেম মুছে ফেললে cache.evict({ id: "Item:123" }) এবং cache.gc() ডেকে ক্যাশ থেকে অব্যবহৃত রেফারেন্স নিখুঁতভাবে মুছে ফেলা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Choose cache-and-network for critical dashboard feeds. Combining immediate cached rendering with background network reconciliation gives users instantaneous response times while guaranteeing eventual consistency.',
        bn: 'নিয়ম ৪: গুরুত্বপূর্ণ ড্যাশবোর্ড ফিডে cache-and-network ব্যবহার করুন। তাত্ক্ষণিক ক্যাশ রেন্ডারিংয়ের সাথে ব্যাকগ্রাউন্ড নেটওয়ার্ক সিঙ্ক যুক্ত করলে ব্যবহারকারী চমৎকার গতি পান এবং ডেটা সবসময় আপ-টু-ডেট থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-cache-ex1',
      kind: 'mcq',
      topic: 'Entity identity generation in normalized caching',
      question: {
        en: 'How does Apollo Client InMemoryCache construct a unique global identity key for a cached entity by default?',
        bn: 'Apollo Client InMemoryCache ডিফল্টভাবে একটি ক্যাশ করা এনটিটির জন্য কীভাবে ইউনিক গ্লোবাল আইডেন্টিটি কি তৈরি করে?'
      },
      options: [
        {
          en: 'By concatenating the __typename and the id (or _id) field separated by a colon, such as User:7',
          bn: '__typename এবং id (বা _id) ফিল্ডকে একটি কোলন দিয়ে যুক্ত করে, যেমন User:7'
        },
        {
          en: 'By generating a random 128-bit UUID on every render pass',
          bn: 'প্রতিটি রেন্ডারে একটি নতুন র্যান্ডম ১২৮-বিট UUID তৈরি করে'
        },
        {
          en: 'By hashing the entire client HTML source code with MD5',
          bn: 'ক্লায়েন্টের পুরো এইচটিএমএল সোর্স কোডকে এমডি৫ দিয়ে হ্যাশ করে'
        },
        {
          en: 'By asking the operating system kernel for the memory pointer address',
          bn: 'অপারেটিং সিস্টেম কার্নেল থেকে মেমোরি পয়েন্টার ঠিকানা চেয়ে নিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look at the combination of GraphQL type name and unique database identifier.',
        bn: 'GraphQL টাইপের নাম এবং ডেটাবেজের ইউনিক আইডেন্টিফায়ারের সমন্বয় লক্ষ্য করুন।'
      },
      explanation: {
        en: 'By default, InMemoryCache combines __typename and id into a string like User:7. This establishes a unique global identifier across all queries in the application.',
        bn: 'ডিফল্টভাবে InMemoryCache অবজেক্টের __typename এবং id মিলিয়ে User:7-এর মতো স্ট্রিং বানায়, যা পুরো অ্যাপে সত্তাটির একক ঠিকানা হিসেবে কাজ করে।'
      }
    },
    {
      id: 'gql-cache-ex2',
      kind: 'mcq',
      topic: 'Solving state drift with normalized caching',
      question: {
        en: 'How does normalized caching prevent "state drift" where two UI components display conflicting data for the same user?',
        bn: 'নরমালাইজড ক্যাশিং কীভাবে তথ্যের গরমিল বা স্টেট ড্রিফট রোধ করে যেখানে দুটি ভিন্ন ইউআই কম্পোনেন্টে একই ইউজারের তথ্যের অমিল দেখা যেত?'
      },
      options: [
        {
          en: 'Both components point to the same normalized entity record in memory; updating the entity via mutation automatically repaints all subscribers',
          bn: 'উভয় কম্পোনেন্ট মেমোরিতে থাকা একই নরমালাইজড এনটিটি রেকর্ডকে নির্দেশ করে; মিউটেশনে সত্তাটি আপডেট হলে সমস্ত গ্রাহক কম্পোনেন্ট নিজে থেকেই রেন্ডার হয়'
        },
        {
          en: 'The client disables JavaScript execution on one of the components',
          bn: 'ক্লায়েন্ট যেকোনো একটি কম্পোনেন্টে জাভাস্ক্রিপ্ট চালানো সাময়িক বন্ধ করে দেয়'
        },
        {
          en: 'The server restarts the browser session whenever a drift is detected',
          bn: 'তথ্যের অমিল শনাক্ত হলে সার্ভার সাথে সাথে পুরো ব্রাউজার সেশন রিস্টার্ট করে'
        },
        {
          en: 'It saves every query in a separate encrypted SQL file on the hard drive',
          bn: 'এটি প্রতিটি কোয়েরিকে হার্ডডিস্কে আলাদা এনক্রিপ্ট করা এসকিউএল ফাইলে সেভ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single source of truth means there are no duplicate diverging copies.',
        bn: 'একক সত্যের ভাণ্ডার থাকার কারণে ডেটার কোনো ভিন্ন বা আলাদা কপি তৈরি হতে পারে না।'
      },
      explanation: {
        en: 'Because normalized caching maintains a single source of truth, updating an entity in the central store instantly reflects across every query and component referencing that entity.',
        bn: 'যেহেতু নরমালাইজড ক্যাশ একটিমাত্র কেন্দ্রীয় ভাণ্ডার রাখে, তাই কোনো সত্তা আপডেট হলে সেই সত্তা ব্যবহারকারী সমস্ত কোয়েরি ও কম্পোনেন্ট তাৎক্ষণিক নতুন ডেটা পেয়ে যায়।'
      }
    },
    {
      id: 'gql-cache-ex3',
      kind: 'mcq',
      topic: 'Behavior of cache-and-network fetch policy',
      question: {
        en: 'What is the user experience advantage of selecting the cache-and-network fetch policy in Apollo Client?',
        bn: 'Apollo Client-এ cache-and-network ফেচ পলিসি ব্যবহারের মূল ইউজার এক্সপেরিয়েন্স সুবিধা কী?'
      },
      options: [
        {
          en: 'It displays cached data immediately to prevent blank loading spinners, while dispatching a background network fetch to reconcile the latest updates',
          bn: 'এটি কোনো স্পিনার ছাড়াই তাৎক্ষণিক ক্যাশ ডেটা দেখায় এবং একই সাথে ব্যাকগ্রাউন্ডে নেটওয়ার্ক কল পাঠিয়ে সর্বশেষ ডেটা দিয়ে পর্দা হালনাগাদ করে'
        },
        {
          en: 'It forces the client to download the entire database to localStorage',
          bn: 'এটি ক্লায়েন্টকে পুরো ডেটাবেজ লোকাল স্টোরেজে ডাউনলোড করতে বাধ্য করে'
        },
        {
          en: 'It disables all network encryption to speed up packet delivery',
          bn: 'প্যাকেট ডেলিভারি দ্রুত করতে এটি সমস্ত নেটওয়ার্ক এনক্রিপশন বন্ধ করে দেয়'
        },
        {
          en: 'It only works when the client is disconnected from the internet',
          bn: 'এটি কেবল তখনই কাজ করে যখন ক্লায়েন্ট ইন্টারনেট সংযোগ বিচ্ছিন্ন থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fast initial render followed by an asynchronous background freshness check.',
        bn: 'দ্রুত প্রাথমিক রেন্ডারের পর ব্যাকগ্রাউন্ডে সতেজতা যাচাইয়ের সমন্বয়ের কথা ভাবুন।'
      },
      explanation: {
        en: 'cache-and-network provides the best of both worlds: zero-latency immediate rendering from local cache, combined with guaranteed freshness from the background network request.',
        bn: 'cache-and-network চমৎকার অভিজ্ঞতা দেয়: ক্যাশ থেকে তাৎক্ষণিক ডেটা দেখিয়ে স্ক্রিন সচল রাখে এবং ব্যাকগ্রাউন্ড রিকোয়েস্ট দিয়ে ডেটার সতেজতা নিশ্চিত করে।'
      }
    },
    {
      id: 'gql-cache-ex4',
      kind: 'mcq',
      topic: 'Security importance of resetStore on logout',
      question: {
        en: 'Why is invoking client.resetStore() essential when a user logs out of an application using Apollo Client?',
        bn: 'Apollo Client ব্যবহারকারী কোনো অ্যাপ থেকে ইউজার লগআউট করার সময় client.resetStore() কল করা কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'To clear private authenticated user data and tenant records from memory, preventing data leakage to subsequent users on the same device',
          bn: 'মেমোরি থেকে ব্যবহারকারীর ব্যক্তিগত ও টেন্যান্টের গোপন ডেটা মুছে ফেলতে, যাতে একই ডিভাইসের পরবর্তী ব্যবহারকারী সেই তথ্য না দেখতে পায়'
        },
        {
          en: 'To uninstall the web browser application from the operating system',
          bn: 'অপারেটিং সিস্টেম থেকে ওয়েব ব্রাউজার অ্যাপ্লিকেশনটি আনইনস্টল করে ফেলতে'
        },
        {
          en: 'To delete all HTML and CSS files stored on the backend cloud server',
          bn: 'ব্যাকএন্ড ক্লাউড সার্ভারে থাকা সমস্ত এইচটিএমএল ও সিএসএস ফাইল মুছে দিতে'
        },
        {
          en: 'Because Apollo Client crashes permanently if not reset every 30 minutes',
          bn: 'কারণ প্রতি ৩০ মিনিট পরপর রিসেট না করলে Apollo Client স্থায়ীভাবে ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about shared office computers or devices used by multiple people.',
        bn: 'শেয়ার্ড অফিসের কম্পিউটার বা একাধিক ব্যক্তির ব্যবহৃত ডিভাইসের নিরাপত্তার কথা ভাবুন।'
      },
      explanation: {
        en: 'Failing to reset the cache leaves the previous user private queries in memory. Subsequent users who log in on that device could view cached records from the previous session.',
        bn: 'ক্যাশ খালি না করলে আগের ব্যবহারকারীর ব্যক্তিগত তথ্য মেমোরিতে থেকে যায়। ফলে পরবর্তী কেউ লগইন করলে পুরোনো সেশনের গোপন তথ্য ফাঁস হয়ে যেতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'the-cache-gallery-quiz',
    title: {
      en: 'Normalized Caching & Cache Invalidation Quiz',
      bn: 'নরমালাইজড ক্যাশিং ও ক্যাশ ইনভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'q-cache-evict-gc',
        kind: 'mcq',
        topic: 'Dangling reference cleanup with cache.evict and cache.gc',
        question: {
          en: 'What is the purpose of running cache.gc() after calling cache.evict({ id }) in Apollo Client?',
          bn: 'Apollo Client-এ cache.evict({ id }) ডাকার পর cache.gc() চালানোর মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To garbage-collect and remove unreachable dangling references and orphaned records left behind after an entity is evicted',
            bn: 'কোনো সত্তা মুছে ফেলার পর তৈরি হওয়া সংযোগহীন বা এতিম রেফারেন্সগুলো মেমোরি থেকে পরিষ্কার করতে'
          },
          {
            en: 'To force the database server to perform a disk defragmentation',
            bn: 'ডেটাবেজ সার্ভারকে ডিস্ক ডিফ্র্যাগমেন্টেশন করতে বাধ্য করতে'
          },
          {
            en: 'To reinstall the Apollo Client npm dependency package',
            bn: 'Apollo Client-এর এনপিএম প্যাকেজটি নতুন করে ইনস্টল করতে'
          },
          {
            en: 'To delete all client bookmarks stored in the browser',
            bn: 'ব্রাউজারে সেভ করা ব্যবহারকারীর সমস্ত বুকমার্ক মুছে ফেলতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Removing an entity leaves references pointing to nowhere (dangling pointers).',
          bn: 'একটি এনটিটি মুছে দিলে অন্য তালিকায় থাকা তার রেফারেন্সগুলো সংযোগহীন হয়ে পড়ে।'
        },
        explanation: {
          en: 'cache.evict removes the specified entity. Calling cache.gc() walks the normalized graph and strips out dangling pointers to ensure the cache stays clean and consistent.',
          bn: 'cache.evict নির্দিষ্ট সত্তা মুছে দেয়। এরপর cache.gc() চালালে সংযোগহীন রেফারেন্সগুলো মেমোরি থেকে পুরোপুরি সাফ হয়ে ক্যাশ নিখুঁত থাকে।'
        }
      },
      {
        id: 'q-typename-id-customization',
        kind: 'mcq',
        topic: 'Customizing keyArgs and keyFields in TypePolicies',
        question: {
          en: 'How can developers configure Apollo Client InMemoryCache for entities that lack a standard id field (e.g. using isbn or composite keys)?',
          bn: 'যেসব সত্তায় সাধারণ id ফিল্ড থাকে না (যেমন isbn বা যৌথ কি), তাদের জন্য ডেভেলপাররা InMemoryCache কীভাবে কনফিগার করতে পারেন?'
        },
        options: [
          {
            en: 'By declaring custom keyFields inside TypePolicies (e.g. Book: { keyFields: ["isbn"] }) to define alternative identity generators',
            bn: 'TypePolicies-এর ভেতরে কাস্টম keyFields (যেমন Book: { keyFields: ["isbn"] }) ঘোষণা করে বিকল্প আইডেন্টিটি নির্ধারণ করে'
          },
          {
            en: 'By converting all database records into flat CSV files',
            bn: 'ডেটাবেজের সমস্ত রেকর্ডকে সাধারণ সিএসভি ফাইলে রূপান্তর করে'
          },
          {
            en: 'By completely disabling client-side caching across the entire application',
            bn: 'পুরো অ্যাপ্লিকেশনে ক্লায়েন্ট-সাইড ক্যাশিং পুরোপুরি বন্ধ করে দিয়ে'
          },
          {
            en: 'By requiring clients to send their physical passport numbers with each query',
            bn: 'প্রতিটি কোয়েরির সাথে ক্লায়েন্টকে পাসপোর্ট নম্বর পাঠানো বাধ্যতামূলক করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'TypePolicies allow customizing how entities are identified in cache.',
          bn: 'TypePolicies ক্যাশে কীভাবে সত্তা শনাক্ত হবে তা কাস্টমাইজ করার সুযোগ দেয়।'
        },
        explanation: {
          en: 'InMemoryCache allows configuring keyFields per type. Setting keyFields: ["isbn"] instructs the normalizer to construct keys like Book:9780132350884.',
          bn: 'InMemoryCache টাইপ প্রতি keyFields নির্ধারণ করার সুবিধা দেয়। keyFields: ["isbn"] দিলে ক্যাশ Book:9780132350884-এর মতো সুন্দর কি তৈরি করে।'
        }
      },
      {
        id: 'q-client-directive-usage',
        kind: 'mcq',
        topic: 'Client-side state management with @client directive',
        question: {
          en: 'What is the role of the @client directive in a GraphQL query document?',
          bn: 'একটি GraphQL কোয়েরি দলিলের ভেতরে @client নির্দেশকের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It instructs the GraphQL client to resolve that specific field locally from the client cache rather than transmitting it to the remote backend server',
            bn: 'এটি ক্লায়েন্টকে নির্দেশ করে সেই নির্দিষ্ট ফিল্ডটি রিমোট সার্ভারে না পাঠিয়ে স্থানীয় ক্লায়েন্ট ক্যাশ থেকে সমাধান করতে'
          },
          {
            en: 'It tells the server to charge the client bank account for executing the query',
            bn: 'এটি সার্ভারকে নির্দেশ দেয় কোয়েরি চালানোর জন্য ক্লায়েন্টের ব্যাংক থেকে চার্জ কাটতে'
          },
          {
            en: 'It forces the web page to reload every 5 seconds continuously',
            bn: 'এটি প্রতি ৫ সেকেন্ড পরপর ওয়েবপেজ রিলোড করতে বাধ্য করে'
          },
          {
            en: 'It restricts the query from running on mobile devices',
            bn: 'এটি মোবাইল ডিভাইসে কোয়েরিটি চালানো থেকে বিরত রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about local state (like isDarkMode or isSidebarOpen) managed alongside server data.',
          bn: 'সার্ভার ডেটার পাশাপাশি লোকাল স্টেট (যেমন ডার্ক মোড বা সাইডবার খোলা) পরিচালনার কথা ভাবুন।'
        },
        explanation: {
          en: 'The @client directive allows developers to mix client-only state (e.g. darkMode: Boolean @client) into standard GraphQL queries, unified under a single API.',
          bn: '@client নির্দেশকের মাধ্যমে সার্ভার কোয়েরির ভেতরেই লোকাল স্টেট (যেমন darkMode: Boolean @client) যুক্ত করা যায় এবং একটিমাত্র এপিআই দিয়ে তা পরিচালিত হয়।'
        }
      },
      {
        id: 'q-pagination-merge-functions',
        kind: 'mcq',
        topic: 'Pagination list concatenation with merge functions',
        question: {
          en: 'Why do paginated connection fields in Apollo Client require custom merge functions inside TypePolicies?',
          bn: 'Apollo Client-এ পৃষ্ঠাঙ্কিত কানেকশন ফিল্ডগুলোর জন্য TypePolicies-এর ভেতরে কাস্টম merge ফাংশন কেন প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'To concatenate incoming pages of items with previously fetched items rather than overwriting the entire list with the latest page',
            bn: 'সর্বশেষ পেজ দিয়ে আগের পুরো তালিকা মুছে ফেলার বদলে পূর্বের তথ্যের সাথে নতুন পেজের আইটেমগুলো জোড়া লাগাতে'
          },
          {
            en: 'Because Apollo Client cannot store more than 1 item in any array',
            bn: 'কারণ Apollo Client কোনো অ্যারেতে ১ টির বেশি আইটেম রাখতে পারে না'
          },
          {
            en: 'To translate English strings into foreign languages automatically',
            bn: 'ইংরেজি স্ট্রিংকে স্বয়ংক্রিয়ভাবে বিদেশি ভাষায় অনুবাদ করতে'
          },
          {
            en: 'To force the database to use binary search algorithms exclusively',
            bn: 'ডেটাবেজকে কেবল বাইনারি সার্চ অ্যালগরিদম ব্যবহার করতে বাধ্য করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Without a merge function, page 2 overwrites page 1 in the cache.',
          bn: 'merge ফাংশন না থাকলে পেজ ২ ক্যাশে এসে পেজ ১ এর ওপর বসে পুরোনো ডেটা মুছে দেয়।'
        },
        explanation: {
          en: 'By default, incoming query fields replace existing fields. A custom merge function instructs Apollo to append incoming page items to the existing array for infinite scrolling.',
          bn: 'ডিফল্টভাবে নতুন আসা ডেটা পুরোনো ফিল্ডকে প্রতিস্থাপন করে। কাস্টম merge ফাংশন অ্যাপোলোকে নির্দেশ দেয় নতুন পেজের ডেটা আগের তালিকার শেষে যোগ করে ইনফিনিট স্ক্রলিং বজায় রাখতে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-subscription-tide',
    title: {
      en: 'Real-Time GraphQL — Subscriptions, WebSockets & Server-Sent Events (SSE)',
      bn: 'রিয়েল-টাইম GraphQL — সাবস্ক্রিপশন, ওয়েবসকেট ও সার্ভার-সেন্ট ইভেন্টস (SSE)'
    }
  }
};
