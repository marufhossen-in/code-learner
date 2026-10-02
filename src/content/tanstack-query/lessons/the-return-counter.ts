import type { Lesson } from '../../../lib/types';

export const returnCounterLesson: Lesson = {
  slug: 'the-return-counter',
  tech: 'tanstack-query',
  title: {
    en: 'Mutations & Invalidation — useMutation, onSuccess & Cache Eviction',
    bn: 'মিউটেশন ও ইনভ্যালিডেশন — useMutation, onSuccess ও ক্যাশ রিমুভাল'
  },
  summary: {
    en: 'While queries read remote server state, mutations modify remote data through POST, PUT, PATCH, and DELETE requests. In this lesson, you will master the useMutation hook, coordinate lifecycle callbacks like onSuccess and onError, execute surgical cache invalidations using queryClient.invalidateQueries, and directly patch cached records using setQueryData.',
    bn: 'কোয়েরি যেমন দূরবর্তী সার্ভার স্টেট পড়ে, মিউটেশন তেমনি POST, PUT, PATCH এবং DELETE রিকোয়েস্টের মাধ্যমে রিমোট ডাটা পরিবর্তন করে। এই পাঠে আপনি useMutation হুক, onSuccess ও onError লাইফসাইকেল কলব্যাক, queryClient.invalidateQueries দিয়ে সুনির্দিষ্ট ক্যাশ ইনভ্যালিডেশন এবং setQueryData দিয়ে সরাসরি ক্যাশ আপডেট গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'mutation-architecture',
      text: {
        en: 'The Mutation Pipeline and Invalidation Architecture',
        bn: 'মিউটেশন পাইপলাইন ও ইনভ্যালিডেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your application performs data mutations like creating an order, updating a profile, or deleting a record, remote changes must be synchronized back into the local query cache. Unlike queries that run automatically on component mount, mutations are imperative events triggered by user actions. TanStack Query uses useMutation to track loading state, handle network errors, and trigger targeted cache invalidations.',
        bn: 'যখন আপনার অ্যাপ্লিকেশন কোনো নতুন অর্ডার তৈরি, প্রোফাইল আপডেট বা ডাটা মুছে ফেলার কাজ করে, তখন রিমোট পরিবর্তনগুলোকে লোকাল ক্যাশের সাথে সিঙ্ক করতে হয়। কম্পোনেন্ট মাউন্ট হলে নিজে থেকে চলা কোয়েরির মতো না হয়ে মিউটেশন হলো ব্যবহারকারীর ক্লিকে সক্রিয় হওয়া ঘটনা। TanStack Query useMutation দিয়ে লোডিং স্টেট পর্যবেক্ষণ করে, এরর হ্যান্ডল করে এবং ক্যাশ ইনভ্যালিডেশন পরিচালনা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'useMutation',
          def: {
            en: 'The hook used to execute asynchronous data mutations (POST, PUT, DELETE) on a remote server.',
            bn: 'রিমোট সার্ভারে অ্যাসিনক্রোনাস ডাটা পরিবর্তন (POST, PUT, DELETE) সম্পন্ন করার মূল হুক।'
          }
        },
        {
          term: 'mutate() vs mutateAsync()',
          def: {
            en: 'mutate is a fire-and-forget callback using handlers; mutateAsync returns a Promise that must catch errors manually.',
            bn: 'mutate কলব্যাক ভিত্তিক হ্যান্ডলার ব্যবহার করে; mutateAsync একটি প্রমিজ দেয় যা নিজে ট্রাই-ক্যাচ দিয়ে হ্যান্ডল করতে হয়।'
          }
        },
        {
          term: 'invalidateQueries()',
          def: {
            en: 'A QueryClient method that marks matching queries as stale and immediately refetches active screen subscribers.',
            bn: 'একটি মেথড যা নির্দিষ্ট কোয়েরিকে বাসি চিহ্নিত করে এবং স্ক্রিনের সক্রিয় সাবস্ক্রাইবারদের সাথে সাথে রি-ফেচ করে।'
          }
        },
        {
          term: 'setQueryData()',
          def: {
            en: 'A synchronous method that directly updates or overrides the cached data for a specific queryKey.',
            bn: 'একটি সিঙ্ক্রোনাস মেথড যা কোনো নির্দিষ্ট queryKey-এর ক্যাশ ডাটাকে সরাসরি পরিবর্তন করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'mutation-callbacks-matrix',
      text: {
        en: 'Mutation Lifecycle Callbacks Matrix',
        bn: 'মিউটেশন লাইফসাইকেল কলব্যাকস ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Callback Name', bn: 'কলব্যাকের নাম' },
        { en: 'Execution Timing', bn: 'কখন কার্যকর হয়' },
        { en: 'Typical Engineering Task', bn: 'সাধারণ ব্যবহার' }
      ],
      rows: [
        [
          { en: 'onMutate(variables)', bn: 'onMutate(variables)' },
          { en: 'Fires immediately before the mutation function executes', bn: 'মিউটেশন ফাংশন নেটওয়ার্কে যাওয়ার ঠিক পূর্বে চলে' },
          { en: 'Cancels queries, takes snapshots of current cache, applies optimistic previews', bn: 'চলমান কোয়েরি বাতিল করে, ক্যাশের স্ন্যাপশট নেয় ও অপটিমিস্টিক ডাটা বসায়' }
        ],
        [
          { en: 'onSuccess(data, variables, context)', bn: 'onSuccess(data, variables, context)' },
          { en: 'Fires when remote server resolves with HTTP 2xx success', bn: 'সার্ভার থেকে সফল উত্তর (HTTP 2xx) আসলে চলে' },
          { en: 'Calls queryClient.invalidateQueries() and closes modal dialogues', bn: 'ক্যাশ ইনভ্যালিডেট করে এবং সফলতার নোটিফিকেশন বা মোডাল বন্ধ করে' }
        ],
        [
          { en: 'onError(error, variables, context)', bn: 'onError(error, variables, context)' },
          { en: 'Fires if mutation throws an error or returns HTTP 4xx/5xx', bn: 'রিকোয়েস্ট ব্যর্থ হলে বা এরর আসলে সক্রিয় হয়' },
          { en: 'Rolls back optimistic cache changes using context snapshot', bn: 'স্ন্যাপশটের সাহায্যে ক্যাশকে পূর্বের নিরাপদ অবস্থায় ফিরিয়ে নেয়' }
        ],
        [
          { en: 'onSettled(data, error, variables, context)', bn: 'onSettled(data, error, variables, context)' },
          { en: 'Always fires after mutation either succeeds or fails', bn: 'মিউটেশন সফল হোক বা ব্যর্থ হোক, সর্বদা সবার শেষে চলে' },
          { en: 'Final invalidation ensuring client cache matches authoritative server truth', bn: 'চূড়ান্ত ইনভ্যালিডেশন করে সার্ভারের সত্যের সাথে ক্যাশ মিলিয়ে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'mutation-simulation-code',
      text: {
        en: 'Working Mutation and Prefix Invalidation Simulation',
        bn: 'কার্যকরী মিউটেশন ও প্রিফিক্স ইনভ্যালিডেশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query Mutation Engine and Prefix Cache Invalidation
class MockQueryStore {
  constructor() {
    this.cache = new Map();
    this.invalidatedKeys = [];
  }

  setData(keyArray, data) {
    this.cache.set(JSON.stringify(keyArray), data);
  }

  getData(keyArray) {
    return this.cache.get(JSON.stringify(keyArray));
  }

  // Simulates invalidateQueries({ queryKey }) prefix matching
  invalidateQueries(targetPrefix) {
    const targetStr = JSON.stringify(targetPrefix).slice(0, -1); // Prefix string check
    let count = 0;

    for (const [keyStr] of this.cache.entries()) {
      if (keyStr.startsWith(targetStr)) {
        this.invalidatedKeys.push(keyStr);
        count += 1;
      }
    }
    return count;
  }
}

const store = new MockQueryStore();

// 1. Initial cached state: order list and single order detail
store.setData(['orders'], [{ id: 101, total: 50 }, { id: 102, total: 75 }]);
store.setData(['orders', 101], { id: 101, total: 50, status: 'pending' });

// 2. Execute mutation: Mark Order 101 as paid
function executePayOrderMutation(orderId) {
  // Simulate successful server update
  const currentDetail = store.getData(['orders', orderId]);
  currentDetail.status = 'paid';
  store.setData(['orders', orderId], currentDetail);

  // Invalidate all queries starting with ['orders'] prefix
  const affectedQueries = store.invalidateQueries(['orders']);
  return { success: true, affectedCount: affectedQueries };
}

const mutationResult = executePayOrderMutation(101);
const updatedDetail = store.getData(['orders', 101]);

console.log('Mutation executed successfully:', mutationResult.success);
// -> Mutation executed successfully: true
console.log('Total queries matching ["orders"] prefix invalidated:', mutationResult.affectedCount);
// -> Total queries matching ["orders"] prefix invalidated: 2
console.log('Updated order detail status in cache:', updatedDetail.status);
// -> Updated order detail status in cache: paid`,
      caption: {
        en: 'Mutation updates order 101 and invalidates 2 matching queries via ["orders"] prefix',
        bn: 'মিউটেশন অর্ডার ১০১ আপডেট করছে এবং ["orders"] প্রিফিক্স দিয়ে ২ টি কোয়েরি ইনভ্যালিডেট করছে'
      }
    },
    {
      type: 'heading',
      id: 'mutation-discipline-rules',
      text: {
        en: 'Mutation Best Practices and Invalidation Rules',
        bn: 'মিউটেশন সেরা অনুশীলন ও ইনভ্যালিডেশন নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When writing mutations, avoid manually calling refetch() directly on individual queries. Instead, invoke queryClient.invalidateQueries() with the appropriate query key prefix. Invalidation marks matching queries as stale; active queries currently visible on the user screen are refetched immediately, while inactive queries wait until navigated to, saving bandwidth.',
        bn: 'মিউটেশনের পরে সরাসরি refetch() কল করা পরিহার করুন। এর বদলে উপযুক্ত কি প্রিফিক্স দিয়ে queryClient.invalidateQueries() ব্যবহার করুন। ইনভ্যালিডেশন কোয়েরিকে বাসি চিহ্নিত করে; স্ক্রিনে থাকা সক্রিয় কম্পোনেন্ট সাথে সাথে ব্যাকগ্রাউন্ডে রি-ফেচ হয়, আর নিষ্ক্রিয় কম্পোনেন্টগুলো ব্যবহারকারী সেখানে যাওয়া পর্যন্ত অপেক্ষা করে ব্যান্ডউইথ সাশ্রয় করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Invalidate by Key Prefix: Invalidate broad prefixes like ["posts"] to refresh both collection and detail views surgically.',
          bn: '১. প্রিফিক্স দিয়ে ইনভ্যালিডেশন: কালেকশন ও সিঙ্গেল ভিউ উভয়ই রিফ্রেশ করতে ["posts"]-এর মতো প্রিফিক্স ইনভ্যালিডেট করুন।'
        },
        {
          en: '2. Prefer mutate Over mutateAsync: Use mutate with onSuccess callbacks; mutateAsync unhandled promise rejections can crash apps.',
          bn: '২. mutate প্রাধান্য দিন: mutate ব্যবহার করাই নিরাপদ; mutateAsync-এ ট্রাই-ক্যাচ না দিলে আনহ্যান্ডেলড প্রমিজ এরর হতে পারে।'
        },
        {
          en: '3. Return Promises in onSuccess: If onSuccess returns a promise (like invalidateQueries()), TanStack Query awaits it before settling.',
          bn: '৩. প্রমিজ রিটার্ন: onSuccess-এ invalidateQueries রিটার্ন করলে লাইব্রেরি রি-ফেচ শেষ হওয়া পর্যন্ত অপেক্ষা করে।'
        },
        {
          en: '4. Reset Mutation State on Modal Close: Invoke mutation.reset() when closing dialogue modals to clear previous errors.',
          bn: '৪. মিউটেশন রিসেট: মোডাল বন্ধের সময় mutation.reset() কল করুন যাতে পরবর্তীবার পুরনো এরর মেসেজ প্রদর্শিত না হয়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tq-ret-ex1',
      kind: 'mcq',
      topic: 'prefix matching in queryClient.invalidateQueries',
      question: {
        en: 'How does prefix matching work when invoking "queryClient.invalidateQueries({ queryKey: [\'todos\'] })"?',
        bn: '"queryClient.invalidateQueries({ queryKey: [\'todos\'] })" কল করলে প্রিফিক্স ম্যাচিং কীভাবে কাজ করে?'
      },
      options: [
        {
          en: 'It invalidates every query whose key starts with [\'todos\'], including [\'todos\'], [\'todos\', 1], and [\'todos\', { filter: \'completed\' }], re-fetching active screen observers automatically',
          bn: 'যেসব কোয়েরির কি [\'todos\'] দিয়ে শুরু হয়—যেমন [\'todos\'], [\'todos\', 1] এবং [\'todos\', { filter: \'completed\' }]—সবগুলোকে বাসি হিসেবে চিহ্নিত করে সক্রিয় উপাদানগুলোকে রি-ফেচ করে'
        },
        {
          en: 'It deletes all user passwords from the browser local storage',
          bn: 'এটি ব্রাউজার লোকাল স্টোরেজ থেকে সব ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে'
        },
        {
          en: 'It only invalidates queries that have failed with an HTTP 500 error',
          bn: 'এটি কেবলমাত্র সেইসব কোয়েরি বাতিল করে যা এইচটিটিপি ৫০০ এরর দিয়ে ব্যর্থ হয়েছে'
        },
        {
          en: 'Prefix matching only works when using the Chrome browser',
          bn: 'প্রিফিক্স ম্যাচিং কেবলমাত্র ক্রোম ব্রাউজার ব্যবহার করলেই চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Invalidation matches partial arrays by default, targeting all child query keys.',
        bn: 'ইনভ্যালিডেশন ডিফল্টভাবে আংশিক অ্যারে মিলিয়ে সব চাইল্ড কোয়েরি কি খুঁজে বের করে।'
      },
      explanation: {
        en: 'TanStack Query uses hierarchical prefix matching. Invalidating [\'todos\'] targets all queries that start with [\'todos\'], refreshing both lists and detail items without having to list each key manually.',
        bn: 'হায়ারার্কিক্যাল প্রিফিক্স ম্যাচিং অত্যন্ত শক্তিশালী। [\'todos\'] ইনভ্যালিডেট করলে তালিকা, ফিল্টার এবং সিঙ্গেল আইডি সবগুলো এক সাথে রিফ্রেশ হয়ে যায়।'
      }
    },
    {
      id: 'tq-ret-ex2',
      kind: 'mcq',
      topic: 'mutate versus mutateAsync error handling ergonomics',
      question: {
        en: 'Why is "mutate(variables)" generally preferred over "mutateAsync(variables)" in React component event handlers?',
        bn: 'রিঅ্যাক্ট কম্পোনেন্ট ইভেন্ট হ্যান্ডলারে সাধারণত "mutateAsync(variables)"-এর চেয়ে "mutate(variables)" ব্যবহার কেন বেশি পছন্দনীয়?'
      },
      options: [
        {
          en: '"mutate" manages error states internally through the onError callback and isError flag; "mutateAsync" returns a raw Promise, which will trigger an uncaught promise rejection crash if not caught with try/catch',
          bn: '"mutate" এরর স্টেটগুলোকে onError কলব্যাক ও isError ফ্ল্যাগ দিয়ে সুন্দরভাবে হ্যান্ডল করে; অন্যদিকে "mutateAsync" একটি র-প্রমিজ দেয়, যা try/catch দিয়ে না ধরলে পুরো অ্যাপ আনহ্যান্ডেলড এররে ক্র্যাশ করতে পারে'
        },
        {
          en: 'mutateAsync is 10 times slower than mutate over the internet',
          bn: 'mutateAsync ইন্টারনেটে mutate-এর চেয়ে ১০ গুণ ধীরগতির'
        },
        {
          en: 'mutateAsync was removed and banned in TanStack Query v5',
          bn: 'TanStack Query v5 থেকে mutateAsync সম্পূর্ণরূপে সরিয়ে ফেলা হয়েছে'
        },
        {
          en: 'mutate only accepts numbers while mutateAsync only accepts strings',
          bn: 'mutate কেবল সংখ্যা গ্রহণ করে আর mutateAsync কেবল লেখা গ্রহণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'mutateAsync returns a Promise that requires manual try/catch error handling.',
        bn: 'mutateAsync একটি প্রমিজ দেয় যা নিজে ট্রাই-ক্যাচ দিয়ে সামলাতে না পারলে সমস্যা হয়।'
      },
      explanation: {
        en: 'mutateAsync returns a Promise. If the mutation fails and the caller does not wrap it in try/catch or .catch(), an uncaught promise rejection occurs. mutate safely surfaces errors via isError.',
        bn: 'mutateAsync প্রমিজ রিটার্ন করে। নেটওয়ার্ক ফেইল করলে ক্যাচ ব্লক না থাকলে কনসোলে লাল এরর এসে অ্যাপ আটকে যেতে পারে। mutate নিজে থেকেই এরর স্টেট সামলে নেয়।'
      }
    },
    {
      id: 'tq-ret-ex3',
      kind: 'mcq',
      topic: 'purpose of queryClient.setQueryData for direct cache updates',
      question: {
        en: 'When should a developer use "queryClient.setQueryData(key, updater)" instead of "queryClient.invalidateQueries(key)"?',
        bn: 'কখন একজন ডেভেলপার "queryClient.invalidateQueries(key)"-এর বদলে "queryClient.setQueryData(key, updater)" ব্যবহার করবেন?'
      },
      options: [
        {
          en: 'When the mutation endpoint returns the complete updated object in its response and the developer wants to update the cache synchronously without making an additional HTTP GET roundtrip',
          bn: 'যখন সার্ভারের মিউটেশন রেসপন্সে পুরো নতুন অবজেক্টটি ফেরত আসে এবং ডেভেলপার কোনো অতিরিক্ত এইচটিটিপি গেট রিকোয়েস্ট না পাঠিয়ে সরাসরি ক্যাশ আপডেট করতে চান'
        },
        {
          en: 'When the computer monitor resolution is less than 1080p',
          bn: 'যখন কম্পিউটার মনিটরের রেজোলিউশন ১০৮০ পিক্সেলের কম হয়'
        },
        {
          en: 'setQueryData is used exclusively for playing audio podcasts',
          bn: 'setQueryData কেবল অডিও পডকাস্ট চালানোর জন্য ব্যবহৃত হয়'
        },
        {
          en: 'When deleting the entire operating system file system',
          bn: 'যখন পুরো অপারেটিং সিস্টেমের ফাইল সিস্টেম মুছে ফেলার দরকার হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'setQueryData directly writes returned mutation responses into the cache to save a GET request.',
        bn: 'মিউটেশনের উত্তরে নতুন ডাটা থাকলে setQueryData দিয়ে সরাসরি ক্যাশে বসালে আরেকটি গেট কল বাঁচে।'
      },
      explanation: {
        en: 'If a backend PATCH /users/1 returns the updated user, setQueryData(["user", 1], updatedUser) writes it to cache immediately. Invalidation would trigger an unnecessary secondary GET request.',
        bn: 'সার্ভার যদি আপডেট করার পর নতুন ডাটা উত্তর হিসেবে পাঠায়, তবে setQueryData দিয়ে ক্যাশে সরাসরি বসিয়ে দিলে দ্বিতীয়বার সার্ভারে রি-ফেচ পাঠানোর প্রয়োজন হয় না।'
      }
    },
    {
      id: 'tq-ret-ex4',
      kind: 'mcq',
      topic: 'exact matching flag in invalidateQueries',
      question: {
        en: 'How can a developer invalidate ONLY the exact query "[\'todos\']" without invalidating nested detail queries like "[\'todos\', 1]"?',
        bn: 'সাব-কোয়েরি "[\'todos\', 1]" স্পর্শ না করে কেবল হুবহু "[\'todos\']" কোয়েরিটি কীভাবে ইনভ্যালিডেট করা যায়?'
      },
      options: [
        {
          en: 'Pass the "{ exact: true }" option: "queryClient.invalidateQueries({ queryKey: [\'todos\'], exact: true })"',
          bn: '"{ exact: true }" অপশন ব্যবহার করে: "queryClient.invalidateQueries({ queryKey: [\'todos\'], exact: true })"'
        },
        {
          en: 'Write an infinite while loop calling window.location.reload()',
          bn: 'window.location.reload() ডেকে একটি অবিরাম হোয়াইল লুপ লিখে'
        },
        {
          en: 'Exact query matching is impossible in TanStack Query',
          bn: 'TanStack Query-তে হুবহু কি মেলানো একেবারেই অসম্ভব'
        },
        {
          en: 'Change the query key name to a random integer number',
          bn: 'কোয়েরি কি-র নাম একটি এলোমেলো পূর্ণসংখ্যায় বদলে দিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'exact: true disables prefix matching and targets only identical key arrays.',
        bn: 'exact: true প্রিফিক্স ম্যাচিং বন্ধ করে কেবল হুবহু একই কি-কে টার্গেট করে।'
      },
      explanation: {
        en: 'By default, invalidateQueries matches by prefix. Passing { exact: true } instructs the client to invalidate only queries whose keys strictly equal [\'todos\'], leaving [\'todos\', 1] untouched.',
        bn: 'ডিফল্টভাবে প্রিফিক্স ম্যাচিং চলে। exact: true দিলে লাইব্রেরি শুধু [\'todos\'] কালেকশন রিফ্রেশ করে কিন্তু সিঙ্গেল আইটেমের ক্যাশে কোনো হাত দেয় না।'
      }
    }
  ],
  quiz: {
    id: 'the-return-counter-quiz',
    title: {
      en: 'TanStack Query Mutations & Invalidation Quiz',
      bn: 'TanStack Query মিউটেশন ও ইনভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'q-mutation-reset-method',
        kind: 'mcq',
        topic: 'clearing mutation error and success states with mutation.reset()',
        question: {
          en: 'What does calling "mutation.reset()" accomplish in a component template or lifecycle?',
          bn: 'কম্পোনেন্টে "mutation.reset()" কল করলে কী কাজ সম্পন্ন হয়?'
        },
        options: [
          {
            en: 'It resets the mutation state machine back to its initial "idle" state, clearing any previous error or success messages from the component UI',
            bn: 'এটি মিউটেশন স্টেট মেশিনকে তার প্রাথমিক "idle" অবস্থায় ফিরিয়ে নেয় এবং ইউআই থেকে আগের সব এরর বা সাকসেস বার্তা পরিষ্কার করে'
          },
          {
            en: 'It deletes all user data from the remote PostgreSQL database',
            bn: 'এটি রিমোট পোস্টগ্রেসকিউএল ডাটাবেজ থেকে সমস্ত ব্যবহারকারীর তথ্য মুছে ফেলে'
          },
          {
            en: 'It resets the computer monitor screen refresh rate',
            bn: 'এটি কম্পিউটার মনিটরের রিফ্রেশ রেট রিসেট করে দেয়'
          },
          {
            en: 'mutation.reset() converts the mutation into a standard GET query',
            bn: 'mutation.reset() মিউটেশনকে একটি সাধারণ গেট কোয়েরিতে বদলে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'reset() restores the mutation state machine to its clean idle state.',
          bn: 'reset() মিউটেশনের আগের এরর বা স্ট্যাটাস মুছে ফ্রেশ অবস্থায় ফেরত নেয়।'
        },
        explanation: {
          en: 'When a modal closes after a failed mutation, lingering error messages look messy if reopened. Calling mutation.reset() clears the error and sets status back to "idle".',
          bn: 'মোডালে ভুল তথ্য দিয়ে এরর দেখার পর মোডাল বন্ধ করে আবার খুললে আগের এরর দেখা দৃষ্টিকটু। mutation.reset() দিয়ে তা মুছে ফ্রেশ মোডাল দেখানো যায়।'
        }
      },
      {
        id: 'q-mutation-scope-id-deduplication',
        kind: 'mcq',
        topic: 'mutationKey and scope for sequential mutation queuing',
        question: {
          en: 'Unlike queryKey which deduplicates multiple identical requests, what does specifying a "mutationKey" in useMutation primarily facilitate?',
          bn: 'queryKey যেমন একই রিকোয়েস্ট একাধিকবার যাওয়া আটকায়, সে তুলনায় useMutation-এ "mutationKey" ব্যবহারের প্রধান উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'It allows locating active mutations globally via queryClient.isMutating() or mutation cache listeners, and optionally scoping concurrent mutations via mutation scope IDs',
            bn: 'এটি queryClient.isMutating() দিয়ে গ্লোবালি কোনো মিউটেশন চলছে কিনা তা জানতে সাহায্য করে এবং কনকারেন্ট মিউটেশনগুলোকে স্কোপ আইডি দিয়ে সুশৃঙ্খলভাবে সাজায়'
          },
          {
            en: 'It deduplicates outgoing POST requests so only 1 user can order per day',
            bn: 'এটি আউটগোয়িং পোস্ট রিকোয়েস্ট আটকে দেয় যাতে দিনে মাত্র ১ জন ইউজার অর্ডার করতে পারে'
          },
          {
            en: 'It automatically encrypts the mutation payload with RSA keys',
            bn: 'এটি মিউটেশনের ডাটাকে স্বয়ংক্রিয়ভাবে আরএসএ কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'mutationKey is required on every mutation or TypeScript throws an error',
            bn: 'প্রতিটি মিউটেশনে mutationKey দেওয়া বাধ্যতামূলক নয়তো টাইপস্ক্রিপ্ট এরর দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'mutationKey provides a global identifier for tracking loading state and ordering.',
          bn: 'mutationKey পুরো অ্যাপে লোডিং স্টেট ট্র্যাক করতে এবং মিউটেশন চিনতে সাহায্য করে।'
        },
        explanation: {
          en: 'Mutations represent side-effect events and do not deduplicate by default. mutationKey allows tracking them via queryClient.isMutating({ mutationKey }) to show global save indicators.',
          bn: 'মিউটেশন হলো ইভেন্ট তাই একই বাটন দুবার চাপলে দুবারই যায়। mutationKey দিলে গ্লোবাল নেভবারে "Saving changes..." এমন লোডার সহজে দেখানো যায়।'
        }
      },
      {
        id: 'q-onsettled-guaranteed-execution',
        kind: 'mcq',
        topic: 'guaranteed execution of onSettled callback',
        question: {
          en: 'Why do senior engineers place final invalidation logic inside "onSettled" rather than strictly inside "onSuccess"?',
          bn: 'সিনিয়র ইঞ্জিনিয়াররা কেন চূড়ান্ত ইনভ্যালিডেশন কেবল "onSuccess"-এ না রেখে "onSettled"-এর ভেতর রাখেন?'
        },
        options: [
          {
            en: 'Because onSettled executes in BOTH success and error scenarios, guaranteeing that the local cache is always re-synchronized with the authoritative backend even if an optimistic update failed',
            bn: 'কারণ onSettled সফলতা এবং ব্যর্থতা উভয় ক্ষেত্রেই অবশ্যই চলে, যা নিশ্চিত করে যে অপটিমিস্টিক আপডেট ফেইল করলেও লোকাল ক্যাশ যেন সর্বদা সার্ভারের আসল তথ্যের সাথে সিঙ্ক হয়ে যায়'
          },
          {
            en: 'onSettled increases the download speed of CSS files by 300%',
            bn: 'onSettled সিএসএস ফাইলের ডাউনলোডের গতি ৩০০% বাড়িয়ে দেয়'
          },
          {
            en: 'onSuccess was completely deprecated in TanStack Query v5',
            bn: 'TanStack Query v5-এ onSuccess পুরোপুরি বাতিল করা হয়েছে'
          },
          {
            en: 'onSettled only executes when the browser is running on battery power',
            bn: 'onSettled কেবলমাত্র ব্রাউজার ব্যাটারি পাওয়ারে চললেই কার্যকর হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'onSettled always runs, making it the ultimate reconciliation safety net.',
          bn: 'onSettled সফলতা বা ব্যর্থতা নির্বিশেষে সর্বদা চলে ক্যাশের নির্ভুলতা নিশ্চিত করে।'
        },
        explanation: {
          en: 'If a mutation fails after an optimistic update, the rollback might have slight discrepancies. onSettled runs regardless of outcome, ensuring the cache reconciles with server truth.',
          bn: 'ব্যর্থ হলেও যেন ইউজার ভুল ডাটা না দেখে, সেজন্য onSettled-এ ইনভ্যালিডেট করে দিলে সার্ভারের সঠিক ডাটা এসে ক্যাশ পুরোপুরি ফ্রেশ হয়ে যায়।'
        }
      },
      {
        id: 'q-setquerydata-updater-function-pattern',
        kind: 'mcq',
        topic: 'functional updater pattern in setQueryData for state derivations',
        question: {
          en: 'Why is passing an updater function to "queryClient.setQueryData(key, old => [...old, newItem])" safer than reading and passing raw values directly?',
          bn: 'সরাসরি মান না পাঠিয়ে "queryClient.setQueryData(key, old => [...old, newItem])" এভাবে আপডেটার ফাংশন পাঠানো কেন বেশি নিরাপদ?'
        },
        options: [
          {
            en: 'The functional updater guarantees access to the latest atomic state of the cache at the exact moment of execution, preventing stale closure bugs and race conditions',
            bn: 'ফাংশনাল আপডেটার এক্সিকিউশনের ঠিক মুহূর্তে ক্যাশের সর্বশেষ মানের অ্যাক্সেস নিশ্চিত করে, ফলে স্টেল ক্লোজার বাগ এবং রেস কন্ডিশন সম্পূর্ণ প্রতিরোধ হয়'
          },
          {
            en: 'Updater functions compress the cached data using GZIP compression',
            bn: 'আপডেটার ফাংশন ক্যাশ করা ডাটাকে জিজিপ কম্প্রেশন দিয়ে সংকুচিত করে'
          },
          {
            en: 'Raw values are strictly forbidden by modern ECMAScript standards',
            bn: 'আধুনিক জাভাস্ক্রিপ্ট মানদণ্ডে সরাসরি মান পাঠানো পুরোপুরি নিষিদ্ধ'
          },
          {
            en: 'Updater functions allow the website to run without JavaScript',
            bn: 'আপডেটার ফাংশন কোনো জাভাস্ক্রিপ্ট ছাড়াই ওয়েবসাইট চলতে সাহায্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Functional updaters atomically receive the current cache value to avoid race conditions.',
          bn: 'আপডেটার ফাংশন বর্তমান মানকে প্যারামিটার হিসেবে নিয়ে রেস কন্ডিশন এড়িয়ে কাজ করে।'
        },
        explanation: {
          en: 'Reading getQueryData() and passing modified data can introduce race conditions if another update occurs in between. The updater function runs atomically with the latest cached value.',
          bn: 'আগে ডাটা পড়ে পরে বসালে মাঝের সময়ে অন্য কোনো পরিবর্তন মুছে যেতে পারে। old => ... দিলে ঠিক আপডেটের মুহূর্তের ডাটা পাওয়া যায় যা ১০০% নিরাপদ।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-provisional-receipts',
    title: {
      en: 'Optimistic Updates — onMutate Snapshots, Rollbacks & UI Responsiveness',
      bn: 'অপটিমিস্টিক আপডেট — onMutate স্ন্যাপশট, রোলব্যাক ও ইউআই রেসপন্সিভনেস'
    }
  }
};
