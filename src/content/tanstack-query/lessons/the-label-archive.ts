import type { Lesson } from '../../../lib/types';

export const labelArchiveLesson: Lesson = {
  slug: 'the-label-archive',
  tech: 'tanstack-query',
  title: {
    en: 'Query Key Factories — Hierarchical Keys, Typesafe Factories & Invalidation',
    bn: 'Query Key Factories — হায়ারার্কিক্যাল কি, টাইপ-সেফ ফ্যাক্টরি ও ইনভ্যালিডেশন'
  },
  summary: {
    en: 'As applications scale, hand-typing query key arrays across components leads to typos and broken cache invalidations. In this lesson, you will master the Query Key Factory pattern: define hierarchical key topologies with TypeScript "as const" tuples, structure granular invalidation scopes, and ensure deterministic cache lookup across distributed feature modules.',
    bn: 'অ্যাপ্লিকেশন বড় হওয়ার সাথে সাথে বিভিন্ন ফাইলে হাতে কোয়েরি কি টাইপ করলে বানানে ভুল এবং ক্যাশ ইনভ্যালিডেশন ব্যর্থ হওয়ার ঝুঁকি থাকে। এই পাঠে আপনি Query Key Factory প্যাটার্ন শিখবেন: টাইপস্ক্রিপ্ট "as const" টাপল দিয়ে স্তরানুক্রমিক কি গঠন, সুনির্দিষ্ট ইনভ্যালিডেশন স্কোপিং এবং ফিচার মডিউলজুড়ে নির্ভুল ক্যাশ ট্র্যাকিং।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'query-key-factories-architecture',
      text: {
        en: 'The Query Key Factory Architecture and Hierarchy',
        bn: 'Query Key Factory আর্কিটেকচার ও স্তরবিন্যাস'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you manage complex server state in TanStack Query, the query key array (queryKey) acts as the unique memory address identifying a cached resource. When developers manually type raw string arrays across dozens of components, casing mismatches and subtle parameter reordering cause silent cache misses. Query Key Factories solve this by centralizing all query keys into typed, structured factory objects with hierarchical scopes.',
        bn: 'যখন আপনি TanStack Query-তে জটিল সার্ভার স্টেট পরিচালনা করেন, তখন কোয়েরি কি অ্যারে (queryKey) মেমোরিতে কোনো ক্যাশ করা তথ্যের একমাত্র ঠিকানা হিসেবে কাজ করে। বিভিন্ন ফাইলে হাতে অ্যারে টাইপ করলে ছোট-বড় হাতের অক্ষরের গরমিল বা আর্গুমেন্টের এলোমেলো ক্রমের কারণে ক্যাশ মিস হয়। Query Key Factories সমস্ত কি-কে একটি কেন্দ্রীয় ও টাইপ-সেফ ফ্যাক্টরি অবজেক্টে সাজিয়ে এই সমস্যার নিখুঁত সমাধান দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Query Key Factory',
          def: {
            en: 'A centralized pattern organizing query keys into hierarchical functions returning immutable "as const" tuples.',
            bn: 'একটি কেন্দ্রীয় প্যাটার্ন যা কোয়েরি কি-গুলোকে স্তরভিত্তিক ফাংশনে সাজিয়ে অপরিবর্তনশীল "as const" টাপল প্রদান করে।'
          }
        },
        {
          term: 'Hierarchical Key Scope',
          def: {
            en: 'Structuring keys from broadest scope to narrowest scope: [resource, scope, subScope, params].',
            bn: 'সবচেয়ে বড় পরিসর থেকে ক্ষুদ্রতম পরিসরে কি সাজানো: [রিসোর্স, স্কোপ, সাব-স্কোপ, প্যারামিটার]।'
          }
        },
        {
          term: 'as const Tuple',
          def: {
            en: 'A TypeScript assertion locking array elements into readonly literal tuples for strict type inference.',
            bn: 'একটি টাইপস্ক্রিপ্ট নির্দেশ যা অ্যারেকে রিড-অনলি লিটারাল টাপলে রূপান্তর করে নিখুঁত টাইপ সেফটি দেয়।'
          }
        },
        {
          term: 'Deterministic Hashing',
          def: {
            en: 'The algorithm TanStack Query uses to sort object properties so { a: 1, b: 2 } equals { b: 2, a: 1 } in keys.',
            bn: 'TanStack Query-র অ্যালগরিদম যা অবজেক্ট কি-গুলোকে সাজিয়ে নেয় যাতে ফিল্ড আগে-পরে থাকলেও একই ক্যাশ বোঝায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'key-hierarchy-matrix',
      text: {
        en: 'Hierarchical Key Factory Structure Matrix',
        bn: 'হায়ারার্কিক্যাল কি ফ্যাক্টরি গঠন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Key Level', bn: 'কি-র স্তর' },
        { en: 'Factory Definition', bn: 'ফ্যাক্টরি সংজ্ঞা' },
        { en: 'Invalidation Impact', bn: 'ইনভ্যালিডেশনের প্রভাব' }
      ],
      rows: [
        [
          { en: 'Root Scope (all)', bn: 'রুট স্কোপ (all)' },
          { en: 'all: ["users"] as const', bn: 'all: ["users"] as const' },
          { en: 'Invalidates EVERY user query (all lists, filters, and details)', bn: 'ইউজারের সমস্ত কোয়েরি (সব তালিকা ও বিস্তারিত) ইনভ্যালিডেট করে' }
        ],
        [
          { en: 'Lists Scope (lists)', bn: 'তালিকা স্কোপ (lists)' },
          { en: 'lists: () => [...userKeys.all, "list"] as const', bn: 'lists: () => [...userKeys.all, "list"] as const' },
          { en: 'Invalidates all list and search variations while keeping single details untouched', bn: 'সিঙ্গেল ইউজার অক্ষত রেখে সব তালিকা ও সার্চ ক্যাশ রিফ্রেশ করে' }
        ],
        [
          { en: 'Filtered List (list)', bn: 'ফিল্টার করা তালিকা (list)' },
          { en: 'list: (filter) => [...userKeys.lists(), { filter }] as const', bn: 'list: (filter) => [...userKeys.lists(), { filter }] as const' },
          { en: 'Targets only queries matching that exact filter criteria', bn: 'শুধুমাত্র সেই নির্দিষ্ট ফিল্টারের কোয়েরিকে টার্গেট করে' }
        ],
        [
          { en: 'Item Detail (detail)', bn: 'নির্দিষ্ট আইটেম (detail)' },
          { en: 'detail: (id) => [...userKeys.all, "detail", id] as const', bn: 'detail: (id) => [...userKeys.all, "detail", id] as const' },
          { en: 'Surgically invalidates only the single record for that ID', bn: 'সুনির্দিষ্টভাবে কেবল ওই আইডির একক রেকর্ডটি রিফ্রেশ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'factory-simulation-code',
      text: {
        en: 'Working Query Key Factory and Invalidation Matcher Simulation',
        bn: 'কার্যকরী Query Key Factory ও ইনভ্যালিডেশন ম্যাচিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query Key Factory and Scoped Prefix Invalidation
const userKeys = {
  all: ['users'],
  lists: () => [...userKeys.all, 'list'],
  list: (filters) => [...userKeys.lists(), { filters }],
  details: () => [...userKeys.all, 'detail'],
  detail: (id) => [...userKeys.details(), id]
};

class MockKeyRegistry {
  constructor() {
    this.activeKeys = [];
  }

  register(key) {
    this.activeKeys.push(key);
  }

  // Matches query keys by hierarchical prefix
  matchPrefix(targetPrefix) {
    return this.activeKeys.filter(activeKey => {
      if (targetPrefix.length > activeKey.length) return false;
      return targetPrefix.every((part, idx) => {
        if (typeof part === 'object' && part !== null) {
          return JSON.stringify(part) === JSON.stringify(activeKey[idx]);
        }
        return part === activeKey[idx];
      });
    });
  }
}

const registry = new MockKeyRegistry();

// 1. Register active application queries
registry.register(userKeys.list({ role: 'admin' }));
registry.register(userKeys.list({ role: 'editor' }));
registry.register(userKeys.detail(88));
registry.register(userKeys.detail(99));

// 2. Invalidate only lists scope: should match 2 list queries, skipping details
const matchedLists = registry.matchPrefix(userKeys.lists());

// 3. Invalidate specific user detail 88
const matchedDetail = registry.matchPrefix(userKeys.detail(88));

console.log('Total registered queries in cache:', registry.activeKeys.length);
// -> Total registered queries in cache: 4
console.log('Matched list queries count:', matchedLists.length);
// -> Matched list queries count: 2
console.log('Matched detail queries count for ID 88:', matchedDetail.length);
// -> Matched detail queries count for ID 88: 1
console.log('Target detail query key matched:', JSON.stringify(matchedDetail[0]));
// -> Target detail query key matched: ["users","detail",88]`,
      caption: {
        en: 'Factory scopes 4 queries: lists matches 2, and detail matches 1 query for ID 88',
        bn: 'ফ্যাক্টরি ৪টি কোয়েরি সাজায়: lists মিলে ২টিতে এবং detail মিলে আইডি ৮৮ এর ১টি কোয়েরিতে'
      }
    },
    {
      type: 'heading',
      id: 'factory-discipline-rules',
      text: {
        en: 'Query Key Factory Best Practices and Conventions',
        bn: 'Query Key Factory সেরা অনুশীলন ও নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never author ad-hoc array literals inside useQuery hooks. Create a dedicated queryKeys.ts file for every feature module (such as userKeys, productKeys, orderKeys). Centralizing key definitions prevents duplicate spelling mistakes, enables clean auto-completion, and guarantees that mutation invalidations target the exact same key hierarchy.',
        bn: 'useQuery হুকের ভেতর কখনো সরাসরি হাতে অ্যারে লিখবেন না। প্রতিটি ফিচারের জন্য একটি নির্দিষ্ট queryKeys.ts ফাইল তৈরি করুন (যেমন userKeys, productKeys)। কেন্দ্রীয় ফ্যাক্টরি বানানে ভুল হওয়া আটকায়, চমৎকার অটো-কমপ্লিশন দেয় এবং নিশ্চিত করে যে মিউটেশনের পর ইনভ্যালিডেশন হুবহু সঠিক কি-কে টার্গেট করছে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. One Factory per Feature: Export a dedicated key factory object for each distinct domain resource.',
          bn: '১. ফিচার প্রতি একটি ফ্যাক্টরি: প্রতিটি ডোমেইন রিসোর্সের জন্য একটি নির্দিষ্ট কি ফ্যাক্টরি অবজেক্ট বানান।'
        },
        {
          en: '2. Enforce as const Tuples: Always declare array literals with as const to preserve literal string types in TypeScript.',
          bn: '২. as const টাপল ব্যবহার: টাইপস্ক্রিপ্টে সঠিক লিটারাল টাইপ বজায় রাখতে সর্বদা as const ব্যবহার করুন।'
        },
        {
          en: '3. Follow Broad-to-Specific Order: Structure keys from general entity to specific filters: [entity, scope, params].',
          bn: '৩. সাধারণ থেকে সুনির্দিষ্ট ক্রম: সাধারণ নাম থেকে ফিল্টারে ক্রমান্বয়ে সাজান: [রিসোর্স, স্কোপ, প্যারামিটার]।'
        },
        {
          en: '4. Invalidate via Factory Methods: Never write queryClient.invalidateQueries(["users"]); call queryClient.invalidateQueries({ queryKey: userKeys.lists() }).',
          bn: '৪. ফ্যাক্টরি দিয়ে ইনভ্যালিডেট: হাতে অ্যারে না লিখে সর্বদা userKeys.lists() মেথড দিয়ে ইনভ্যালিডেট করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tq-lbl-ex1',
      kind: 'mcq',
      topic: 'architectural advantages of query key factory pattern',
      question: {
        en: 'What architectural problem does the Query Key Factory pattern solve in enterprise TanStack Query applications?',
        bn: 'এন্টারপ্রাইজ TanStack Query অ্যাপ্লিকেশনে Query Key Factory প্যাটার্ন কোন প্রধান আর্কিটেকচারাল সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It eliminates typo bugs and casing mismatches across distributed feature files, guarantees type safety via TypeScript const assertions, and provides clean hierarchical invalidation scopes',
          bn: 'এটি বিভিন্ন ফাইলের মাঝে বানানে ভুল ও অক্ষরের গরমিল দূর করে, টাইপস্ক্রিপ্ট const নির্দেশ দিয়ে টাইপ সেফটি দেয় এবং পরিষ্কার স্তরভিত্তিক ইনভ্যালিডেশন নিশ্চিত করে'
        },
        {
          en: 'It reduces the internet bandwidth cost of HTTP requests by 90%',
          bn: 'এটি এইচটিটিপি রিকোয়েস্টের ইন্টারনেট ব্যান্ডউইথ খরচ ৯০% কমিয়ে দেয়'
        },
        {
          en: 'Key factories automatically encrypt the database hard drive',
          bn: 'কি ফ্যাক্টরি ডাটাবেজের হার্ডড্রাইভ স্বয়ংক্রিয়ভাবে এনক্রিপ্ট করে'
        },
        {
          en: 'It prevents the browser from loading images',
          bn: 'এটি ব্রাউজারকে ছবি লোড করা থেকে বিরত রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Centralized key factories prevent typos and organize invalidation hierarchies.',
        bn: 'কেন্দ্রীয় কি ফ্যাক্টরি বানানে ভুল বাঁচায় এবং সুশৃঙ্খল ইনভ্যালিডেশন দেয়।'
      },
      explanation: {
        en: 'Scattering inline array literals leads to typos where one component writes [\'todos\'] and another writes [\'todo-list\']. Key factories centralize key generation into typed, reliable functions.',
        bn: 'হাতে লিখলে কেউ লেখে [\'todos\'] আবার অন্যজন লেখে [\'todo-list\'], ফলে ক্যাশ মেলে না। কি ফ্যাক্টরি সব কি এক জায়গায় রেখে টিমের সবাইকে একই মান ব্যবহারে বাধ্য করে।'
      }
    },
    {
      id: 'tq-lbl-ex2',
      kind: 'mcq',
      topic: 'hierarchical invalidation separating lists from details',
      question: {
        en: 'In a factory defined as: "all: [\'users\'], lists: () => [\'users\', \'list\'], details: () => [\'users\', \'detail\']", what is the benefit of calling "invalidateQueries({ queryKey: userKeys.lists() })"?',
        bn: '"all: [\'users\'], lists: () => [\'users\', \'list\'], details: () => [\'users\', \'detail\']" এভাবে সাজানো থাকলে "userKeys.lists()" ইনভ্যালিডেট করার সুবিধা কী?'
      },
      options: [
        {
          en: 'It invalidates all user search and filter lists without invalidating cached user detail profiles, saving unnecessary network requests for viewed user details',
          bn: 'এটি ব্যবহারকারীর সমস্ত তালিকা ও ফিল্টার ক্যাশ রিফ্রেশ করে কিন্তু বিস্তারিত প্রোফাইল ক্যাশে কোনো হাত দেয় না, ফলে অপ্রয়োজনীয় নেটওয়ার্ক রিকোয়েস্ট সাশ্রয় হয়'
        },
        {
          en: 'It resets the user computer timezone',
          bn: 'এটি ব্যবহারকারীর কম্পিউটারের টাইমজোন রিসেট করে'
        },
        {
          en: 'It turns the entire website background color to green',
          bn: 'এটি পুরো ওয়েবসাইটের ব্যাকগ্রাউন্ড রঙ সবুজ করে দেয়'
        },
        {
          en: 'userKeys.lists() deletes the user account from the backend database',
          bn: 'userKeys.lists() ব্যাকএন্ড ডাটাবেজ থেকে ব্যবহারকারীর অ্যাকাউন্ট মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Separating lists from details allows surgical invalidation of only the affected query tier.',
        bn: 'তালিকা ও বিস্তারিত আলাদা রাখলে কেবল পরিবর্তিত অংশই রি-ফেচ হয়, বাকিগুলো অক্ষত থাকে।'
      },
      explanation: {
        en: 'When a new item is created, existing lists need updating, but cached detail items (e.g. user 88) are still valid. Hierarchical scopes allow invalidating lists without evicting details.',
        bn: 'নতুন ইউজার যোগ করলে তালিকা বদলায় কিন্তু পুরনো ইউজারের প্রোফাইল তো বদলায় না। lists() ইনভ্যালিডেট করলে তালিকা নতুন করে আসে কিন্তু প্রোফাইল ক্যাশ মেমোরিতে নিরাপদে থাকে।'
      }
    },
    {
      id: 'tq-lbl-ex3',
      kind: 'mcq',
      topic: 'deterministic hashing of object properties in query keys',
      question: {
        en: 'Why do query keys "[\'items\', { page: 1, sort: \'asc\' }]" and "[\'items\', { sort: \'asc\', page: 1 }]" match the exact same cache entry in TanStack Query?',
        bn: 'TanStack Query-তে "[\'items\', { page: 1, sort: \'asc\' }]" এবং "[\'items\', { sort: \'asc\', page: 1 }]" কেন হুবহু একই ক্যাশ এন্ট্রি নির্দেশ করে?'
      },
      options: [
        {
          en: 'TanStack Query uses deterministic JSON hashing: object keys are sorted alphabetically before serializing, making key comparison immune to JavaScript object property insertion order',
          bn: 'TanStack Query ডিটারমিনিস্টিক জেএসএন হ্যাশিং ব্যবহার করে: সিরিয়ালাইজ করার আগে অবজেক্ট কি-গুলোকে বর্ণানুক্রমে সাজিয়ে নেওয়া হয়, ফলে অবজেক্ট প্রোপার্টি আগে-পরে থাকলেও একই ক্যাশ চিহ্নিত হয়'
        },
        {
          en: 'Because all JavaScript objects are converted into empty arrays',
          bn: 'কারণ সমস্ত জাভাস্ক্রিপ্ট অবজেক্ট খালি অ্যারেতে রূপান্তরিত হয়'
        },
        {
          en: 'TanStack Query completely ignores all objects in queryKey arrays',
          bn: 'TanStack Query কোয়েরি কি অ্যারের ভেতরের সব অবজেক্ট পুরোপুরি উপেক্ষা করে'
        },
        {
          en: 'It only works if the page number is set to 1',
          bn: 'এটি কেবল পেজ নম্বর ১ থাকলেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Object properties are sorted alphabetically during key serialization.',
        bn: 'ক্যাশ কি সিরিয়ালাইজ করার সময় অবজেক্টের ভেতরের ফিল্ডগুলো বর্ণানুক্রমে সাজানো হয়।'
      },
      explanation: {
        en: 'TanStack Query understands that JavaScript object key order is non-deterministic. It sorts object keys alphabetically during serialization so differences in object creation do not cause cache misses.',
        bn: 'জাভাস্ক্রিপ্টে অবজেক্টের কি আগে-পরে লেখা হতে পারে। লাইব্রেরি নিজে থেকে তা সাজিয়ে নেয় যাতে ফিল্ডের অবস্থানের পার্থক্যের কারণে অহেতুক নতুন নেটওয়ার্ক কল না হয়।'
      }
    },
    {
      id: 'tq-lbl-ex4',
      kind: 'mcq',
      topic: 'strict array order significance in query keys',
      question: {
        en: 'In contrast to object properties, why does array position matter in query keys (e.g. "[\'users\', 1]" versus "[1, \'users\']")?',
        bn: 'অবজেক্ট প্রোপার্টির বিপরীতে কোয়েরি কি-তে অ্যারের ক্রম কেন অত্যন্ত গুরুত্বপূর্ণ (যেমন "[\'users\', 1]" বনাম "[1, \'users\']")?'
      },
      options: [
        {
          en: 'Array index order is strictly preserved during serialization; [\'users\', 1] and [1, \'users\'] produce different serialized keys, and prefix matching relies on position 0 being the resource root',
          bn: 'অ্যারের সূচক ক্রম কঠোরভাবে বজায় থাকে; ফলে [\'users\', 1] এবং [1, \'users\'] দুটি সম্পূর্ণ ভিন্ন কি হিসেবে গণ্য হয় এবং প্রিফিক্স ইনভ্যালিডেশনের জন্য ০ নম্বর ঘরে মূল রিসোর্স নাম থাকা আবশ্যক'
        },
        {
          en: 'Arrays are forbidden in modern query keys',
          bn: 'আধুনিক কোয়েরি কি-তে অ্যারে ব্যবহার করা নিষিদ্ধ'
        },
        {
          en: 'Position 1 is automatically deleted by the compiler',
          bn: '১ নম্বর পজিশনটি কমপাইলার নিজে থেকেই মুছে ফেলে'
        },
        {
          en: 'Array order only matters on Linux operating systems',
          bn: 'অ্যারের ক্রম কেবল লিনাক্স অপারেটিং সিস্টেমেই প্রভাব ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Array position defines the hierarchy; position 0 must represent the top-level entity.',
        bn: 'অ্যারের অবস্থান হায়ারার্কি তৈরি করে; তাই শুরুর ঘরে মূল রিসোর্সের নাম থাকা জরুরি।'
      },
      explanation: {
        en: 'Query key hierarchy is positional: [entity, scope, params]. Array item ordering is strictly preserved during hashing, so reversing array items breaks both cache lookups and prefix matching.',
        bn: 'অ্যারের প্রথম উপাদান দিয়ে প্রিফিক্স ইনভ্যালিডেশন হয়। ক্রম উল্টে দিলে [\'users\'] দিয়ে ইনভ্যালিডেট করলে [1, \'users\'] খুঁজে পাওয়া যাবে না। তাই ক্রম নির্দিষ্ট রাখা জরুরি।'
      }
    }
  ],
  quiz: {
    id: 'the-label-archive-quiz',
    title: {
      en: 'TanStack Query Key Factories Quiz',
      bn: 'TanStack Query Key Factories কুইজ'
    },
    questions: [
      {
        id: 'q-as-const-type-safety-in-factories',
        kind: 'mcq',
        topic: 'TypeScript as const assertions in query key definitions',
        question: {
          en: 'Why is the "as const" assertion used when defining query keys in TypeScript (e.g. "[\'todos\'] as const")?',
          bn: 'টাইপস্ক্রিপ্টে কোয়েরি কি নির্ধারণের সময় "as const" কেন ব্যবহার করা হয় (যেমন "[\'todos\'] as const")?'
        },
        options: [
          {
            en: 'It infers a readonly tuple of literal types (readonly ["todos"]) rather than widening to "string[]", ensuring strict compile-time type verification in hooks and invalidation helpers',
            bn: 'এটি সাধারণ "string[]"-এ পরিণত না হয়ে সুনির্দিষ্ট লিটারাল টাপল (readonly ["todos"]) হিসেবে টাইপ নির্ধারণ করে, যা টাইপস্ক্রিপ্ট কমপাইলারে শতভাগ টাইপ সেফটি দেয়'
          },
          {
            en: 'It converts the TypeScript code into C++ binary code',
            bn: 'এটি টাইপস্ক্রিপ্ট কোডকে সি++ বাইনারি কোডে রূপান্তর করে'
          },
          {
            en: 'as const forces the web browser to reboot',
            bn: 'as const ওয়েব ব্রাউজারকে রিবুট হতে বাধ্য করে'
          },
          {
            en: 'Without as const, query keys cannot hold numbers',
            bn: 'as const না দিলে কোয়েরি কি কোনো সংখ্যা ধারণ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'as const preserves literal tuple types and prevents type widening to string[].',
          bn: 'as const টাইপ প্রশস্ত হওয়া রোধ করে হুবহু লিটারাল টাইপ ঠিক রাখে।'
        },
        explanation: {
          en: 'Without as const, TypeScript types [\'todos\'] as string[], losing literal identity. With as const, it becomes readonly [\'todos\'], enabling strict autocompletion and compile-time correctness.',
          bn: 'as const না দিলে টাইপস্ক্রিপ্ট একে সাধারণ স্ট্রিং অ্যারে ভাবে। as const দিলে সুনির্দিষ্ট লিটারাল টাইপ হিসেবে নিশ্চিত হয় যে ভুল কি দিলে কমপাইলার সাথে সাথে এরর দেবে।'
        }
      },
      {
        id: 'q-query-filter-predicate-options',
        kind: 'mcq',
        topic: 'custom predicate functions in queryClient.invalidateQueries',
        question: {
          en: 'How can a developer invalidate queries based on custom conditions (such as invalidating only queries that have more than 10 items cached)?',
          bn: 'কাস্টম শর্তের ওপর ভিত্তি করে (যেমন ক্যাশে ১০টির বেশি আইটেম থাকলে তবেই ইনভ্যালিডেট) কীভাবে কোয়েরি ইনভ্যালিডেট করা যায়?'
        },
        options: [
          {
            en: 'Provide a "predicate" function: "queryClient.invalidateQueries({ predicate: (query) => query.state.data?.length > 10 })"',
            bn: '"predicate" ফাংশন ব্যবহার করে: "queryClient.invalidateQueries({ predicate: (query) => query.state.data?.length > 10 })"'
          },
          {
            en: 'Write an SQL DELETE statement in the browser console',
            bn: 'ব্রাউজার কনসোলে একটি এসকিউএল ডিলিট স্টেটমেন্ট লিখে'
          },
          {
            en: 'Delete all temporary files from the operating system',
            bn: 'অপারেটিং সিস্টেমের সব টেম্পোরারি ফাইল মুছে ফেলে'
          },
          {
            en: 'Custom conditional invalidation is not supported in TanStack Query',
            bn: 'কাস্টম শর্তানুযায়ী ইনভ্যালিডেশন TanStack Query-তে সমর্থিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The predicate option allows programmatic filtering over Query instances during invalidation.',
          bn: 'predicate ফাংশন দিয়ে কোয়েরির ভেতরের ডাটা বা স্টেট দেখে সিদ্ধান্ত নেওয়া যায়।'
        },
        explanation: {
          en: 'The predicate option receives the Query instance. Developers can inspect query.queryKey, query.state.data, or query.state.dataUpdatedAt to programmatically decide which queries to invalidate.',
          bn: 'predicate ফাংশনটি প্রতিটি কোয়েরির অবস্থা পর্যবেক্ষণ করতে পারে। ডাটার পরিমাণ বা সময় বিবেচনা করে প্রোগ্রাম্যাটিকভাবে যেকোনো শর্তে ইনভ্যালিডেশন চালানো সম্ভব।'
        }
      },
      {
        id: 'q-lukas-mock-factory-library-pattern',
        kind: 'mcq',
        topic: '@lukemorales/query-key-factory community standard',
        question: {
          en: 'What does the popular "@lukemorales/query-key-factory" library provide to the TanStack Query community?',
          bn: 'জনপ্রিয় "@lukemorales/query-key-factory" লাইব্রেরিটি TanStack Query কমিউনিটিকে কী সুবিধা দেয়?'
        },
        options: [
          {
            en: 'A standardized, lightweight API (createQueryKeys) to construct strongly typed query key hierarchies with co-located queryFn definitions and automatic TypeScript inference',
            bn: 'টাইপ-সেফ কোয়েরি কি হায়ারার্কি তৈরি করার একটি আদর্শ হালকা এপিআই (createQueryKeys), যাতে কি-এর পাশাপাশি সরাসরি queryFn সংজ্ঞায়িত করা যায়'
          },
          {
            en: 'A tool to generate Bitcoin cryptocurrency in background web workers',
            bn: 'ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কারে বিটকয়েন তৈরি করার একটি টুল'
          },
          {
            en: 'It converts JavaScript queries into Python scripts',
            bn: 'এটি জাভাস্ক্রিপ্ট কোয়েরিকে পাইথন স্ক্রিপ্টে বদলে দেয়'
          },
          {
            en: 'A web browser built specifically for running TanStack Query',
            bn: 'TanStack Query চালানোর জন্য বিশেষভাবে তৈরি একটি ওয়েব ব্রাউজার'
          }
        ],
        answer: 0,
        hint: {
          en: 'createQueryKeys standardizes key factory definitions across modern applications.',
          bn: 'createQueryKeys আধুনিক অ্যাপ্লিকেশনে কি ফ্যাক্টরি লেখার আদর্শ কাঠামো প্রদান করে।'
        },
        explanation: {
          en: '@lukemorales/query-key-factory is a widely adopted community library providing createQueryKeys(). It formalizes key structures and couples them with their query functions in a clean, typesafe manner.',
          bn: 'এটি একটি জনপ্রিয় লাইব্রেরি যা প্রজেক্টে কি ফ্যাক্টরি তৈরি সহজ করে। এর ফলে কি এবং তার ফেচ ফাংশন একসাথে সুশৃঙ্খলভাবে রাখা যায় এবং টাইপস্ক্রিপ্ট নিখুঁত থাকে।'
        }
      },
      {
        id: 'q-refetch-type-all-active-inactive',
        kind: 'mcq',
        topic: 'refetchType option in invalidateQueries (active, inactive, all, none)',
        question: {
          en: 'What does setting "refetchType: \'none\'" do in "queryClient.invalidateQueries({ queryKey: [\'posts\'], refetchType: \'none\' })"?',
          bn: '"queryClient.invalidateQueries({ queryKey: [\'posts\'], refetchType: \'none\' })"-এ "refetchType: \'none\'" দিলে কী ঘটে?'
        },
        options: [
          {
            en: 'It marks matching queries as stale so they will re-fetch on future remounts or focus, but does NOT trigger an immediate network re-fetch for currently active screen observers',
            bn: 'এটি কোয়েরিগুলোকে বাসি চিহ্নিত করে যাতে ভবিষ্যতে পেজে ঢুকলে রি-ফেচ হয়, কিন্তু বর্তমানে স্ক্রিনে থাকা সক্রিয় উপাদানগুলোর জন্য এই মুহূর্তেই কোনো রি-ফেচ চালায় না'
          },
          {
            en: 'It permanently disables the posts endpoint on the web server',
            bn: 'এটি ওয়েব সার্ভারে পোস্ট এপিআই স্থায়ীভাবে বন্ধ করে দেয়'
          },
          {
            en: 'It deletes all cached posts and turns the screen white',
            bn: 'এটি ক্যাশের সব পোস্ট মুছে ফেলে পুরো স্ক্রিন সাদা করে দেয়'
          },
          {
            en: 'refetchType: none causes an immediate fatal error crash',
            bn: 'refetchType: none দিলে তাৎক্ষণিক ফ্যাটাল এরর ক্র্যাশ ঘটে'
          }
        ],
        answer: 0,
        hint: {
          en: 'refetchType: none marks queries stale without immediately firing network requests.',
          bn: 'refetchType: none সাথে সাথে রি-ফেচ না চালিয়ে কেবল বাসি হিসেবে দাগ দিয়ে রাখে।'
        },
        explanation: {
          en: 'By default, invalidateQueries refetches active queries immediately (refetchType: "active"). Setting refetchType: "none" marks them stale quietly, delaying the fetch until the next user interaction.',
          bn: 'ডিফল্টভাবে স্ক্রিনে থাকা আইটেম সাথে সাথে রি-ফেচ হয়। refetchType: "none" দিলে সাথে সাথে নেটওয়ার্ক কল না করে শুধু বাসি দাগ দিয়ে রাখে যা পরবর্তীতে দরকারমতো রি-ফেচ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-paged-freight',
    title: {
      en: 'Pagination & Infinite Queries — useInfiniteQuery & placeholderData',
      bn: 'পৃষ্ঠাঙ্কন ও ইনফিনিট কোয়েরি — useInfiniteQuery ও placeholderData'
    }
  }
};
