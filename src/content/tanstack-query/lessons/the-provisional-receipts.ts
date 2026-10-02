import type { Lesson } from '../../../lib/types';

export const provisionalReceiptsLesson: Lesson = {
  slug: 'the-provisional-receipts',
  tech: 'tanstack-query',
  title: {
    en: 'Optimistic Updates — onMutate Snapshots, Rollbacks & UI Responsiveness',
    bn: 'অপটিমিস্টিক আপডেট — onMutate স্ন্যাপশট, রোলব্যাক ও ইউআই রেসপন্সিভনেস'
  },
  summary: {
    en: 'Optimistic updates provide the illusion of instant zero-latency UI responsiveness by updating the query cache before the server responds. In this lesson, you will master the 3-step transactional optimistic update pattern: cancel in-flight queries and snapshot cache state in onMutate, restore exact snapshots on error in onError, and reconcile client state with server truth in onSettled.',
    bn: 'অপটিমিস্টিক আপডেট সার্ভারের উত্তরের অপেক্ষা না করেই ক্যাশ আপডেট করে তাৎক্ষণিক জিরো-ল্যাটেন্সির অনুভূতি দেয়। এই পাঠে আপনি ৩-ধাপের ট্রানজ্যাকশনাল অপটিমিস্টিক আপডেট প্যাটার্ন শিখবেন: onMutate-এ চলমান কোয়েরি বাতিল ও স্ন্যাপশট গ্রহণ, onError-এ নিখুঁত রোলব্যাক এবং onSettled-এ সার্ভারের সত্যের সাথে ক্যাশের চূড়ান্ত সমন্বয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'optimistic-updates-architecture',
      text: {
        en: 'The Optimistic UI Architecture and Transactional Lifecycle',
        bn: 'অপটিমিস্টিক ইউআই আর্কিটেকচার ও ট্রানজ্যাকশনাল লাইফসাইকেল'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'In high-performance interactive web applications, waiting 300ms for a remote server roundtrip before updating a checkbox, like button, or Kanban card makes interfaces feel sluggish. Optimistic updates solve this by updating the user interface immediately assuming the network request will succeed. If the network call unexpectedly fails, TanStack Query automatically rolls back the cache to its exact previous state.',
        bn: 'উচ্চগতির আধুনিক ওয়েব অ্যাপ্লিকেশনে কোনো চেকবক্স, লাইক বাটন বা কানবান কার্ড সরানোর পর ৩০০ মিলিসেকেন্ড সার্ভারের উত্তরের অপেক্ষা করলে অ্যাপ ধীরগতির মনে হয়। অপটিমিস্টিক আপডেট সার্ভার রিকোয়েস্ট সফল হবে ধরে নিয়ে সাথে সাথে ইউআই পরিবর্তন করে এই সমস্যা দূর করে। আর নেটওয়ার্ক কোনো কারণে ফেইল করলে TanStack Query নিজে থেকেই ক্যাশকে আগের নিরাপদ অবস্থায় ফিরিয়ে নেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Optimistic Update',
          def: {
            en: 'Updating the client cache immediately upon user interaction before the server responds to the mutation.',
            bn: 'সার্ভারের উত্তরের জন্য অপেক্ষা না করে ইউজারের ক্লিকের সাথে সাথে ক্লায়েন্ট ক্যাশ আপডেট করার কৌশল।'
          }
        },
        {
          term: 'cancelQueries()',
          def: {
            en: 'A QueryClient method aborting active in-flight network requests to prevent overwriting optimistic cache updates.',
            bn: 'একটি মেথড যা চলমান নেটওয়ার্ক রিকোয়েস্ট বন্ধ করে যাতে পুরনো ডাটা এসে নতুন অপটিমিস্টিক ক্যাশ মুছে না দেয়।'
          }
        },
        {
          term: 'Context Snapshot',
          def: {
            en: 'An in-memory backup of cached data returned from onMutate to serve as a rollback reference if the mutation fails.',
            bn: 'onMutate থেকে রিটার্ন করা ক্যাশের ব্যাকআপ কপি যা নেটওয়ার্ক ব্যর্থ হলে রোলব্যাকের জন্য ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Reconciliation',
          def: {
            en: 'The final invalidation step in onSettled ensuring the client cache syncs with the authoritative server database.',
            bn: 'onSettled-এর চূড়ান্ত ইনভ্যালিডেশন যা নিশ্চিত করে যে ক্লায়েন্ট ক্যাশ সার্ভারের আসল ডাটার সাথে মিলে গেছে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'optimistic-pipeline-matrix',
      text: {
        en: 'The 3-Step Optimistic Update Pipeline Matrix',
        bn: '৩-ধাপের অপটিমিস্টিক আপডেট পাইপলাইন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Pipeline Stage', bn: 'পাইপলাইনের ধাপ' },
        { en: 'Callback Trigger', bn: 'কলব্যাক ট্রিগার' },
        { en: 'Engineering Responsibility', bn: 'মূল দায়িত্ব' }
      ],
      rows: [
        [
          { en: '1. Cancel & Snapshot', bn: '১. বাতিল ও স্ন্যাপশট' },
          { en: 'onMutate(newTodo)', bn: 'onMutate(newTodo)' },
          { en: 'cancelQueries(), getQueryData() snapshot, setQueryData() optimistic preview', bn: 'চলমান ফেচ বাতিল, ক্যাশ ব্যাকআপ সংরক্ষণ ও তাৎক্ষণিক অপটিমিস্টিক ডাটা স্থাপন' }
        ],
        [
          { en: '2. Error Rollback', bn: '২. এরর রোলব্যাক' },
          { en: 'onError(err, newTodo, context)', bn: 'onError(err, newTodo, context)' },
          { en: 'setQueryData(key, context.previousData) restoring original cached records', bn: 'context.previousData দিয়ে ক্যাশকে পূর্বের অবিকল অবস্থায় ফিরিয়ে নেওয়া' }
        ],
        [
          { en: '3. Reconcile Truth', bn: '৩. সত্যের সমন্বয়' },
          { en: 'onSettled()', bn: 'onSettled()' },
          { en: 'invalidateQueries() syncing permanent server IDs and backend timestamps', bn: 'invalidateQueries() চালিয়ে ডাটাবেজের স্থায়ী আইডি ও সময় সিঙ্ক করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'optimistic-simulation-code',
      text: {
        en: 'Working Optimistic Mutation and Rollback Simulation',
        bn: 'কার্যকরী অপটিমিস্টিক মিউটেশন ও রোলব্যাক সিমুলেশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query 3-Step Optimistic Update with Network Failure Rollback
class MockOptimisticEngine {
  constructor() {
    this.cache = [{ id: 1, text: 'Clean Architecture', completed: false }];
  }

  // Simulates optimistic mutation pipeline
  async executeOptimisticToggle(todoId, shouldSimulateFailure = false) {
    // Stage 1: Snapshot previous cache state
    const previousSnapshot = JSON.parse(JSON.stringify(this.cache));

    // Optimistically update local cache
    this.cache = this.cache.map(item => 
      item.id === todoId ? { ...item, completed: !item.completed } : item
    );
    const optimisticState = this.cache[0].completed;

    // Stage 2: Simulate network response or failure
    if (shouldSimulateFailure) {
      // Rollback to snapshot on error
      this.cache = previousSnapshot;
      return {
        status: 'rolled_back',
        optimisticWas: optimisticState,
        finalState: this.cache[0].completed
      };
    }

    // Stage 3: Network succeeded, state settled
    return {
      status: 'settled_success',
      optimisticWas: optimisticState,
      finalState: this.cache[0].completed
    };
  }
}

async function runOptimisticDemo() {
  const engine = new MockOptimisticEngine();

  // Test Case: Network request fails (Simulate 500 error)
  const failureResult = await engine.executeOptimisticToggle(1, true);

  console.log('Optimistic preview state applied:', failureResult.optimisticWas);
  // -> Optimistic preview state applied: true
  console.log('Mutation pipeline status after network error:', failureResult.status);
  // -> Mutation pipeline status after network error: rolled_back
  console.log('Final restored completed status after rollback:', failureResult.finalState);
  // -> Final restored completed status after rollback: false
}

runOptimisticDemo();`,
      caption: {
        en: 'Engine applies optimistic preview true, then rolls back to false after network error',
        bn: 'ইঞ্জিন অপটিমিস্টিক মান true বসায় এবং পরে নেটওয়ার্ক এররে রোলব্যাক করে false এ ফিরিয়ে নেয়'
      }
    },
    {
      type: 'heading',
      id: 'optimistic-discipline-rules',
      text: {
        en: 'Optimistic UI Best Practices and Invariant Rules',
        bn: 'অপটিমিস্টিক ইউআই সেরা অনুশীলন ও নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When authoring optimistic updates, never omit the cancelQueries() step inside onMutate. If a background refetch is already in flight when the user triggers a mutation, the resolving GET request will overwrite your optimistic UI preview with stale data before the mutation even finishes. Always await cancelQueries() before taking your snapshot.',
        bn: 'অপটিমিস্টিক আপডেট তৈরির সময় onMutate-এর ভেতর cancelQueries() কল করতে কখনোই ভুলবেন না। ইউজার ক্লিক করার সময় যদি ব্যাকগ্রাউন্ডে আগে থেকেই কোনো গেট রিকোয়েস্ট চলতে থাকে, তবে সেই পুরনো ডাটা এসে আপনার অপটিমিস্টিক প্রিভিউ মুছে ফেলবে। তাই স্ন্যাপশট নেওয়ার পূর্বেই সর্বদা cancelQueries() সম্পন্ন করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Await cancelQueries First: Always cancel in-flight queries inside onMutate before taking a cache snapshot.',
          bn: '১. আগে cancelQueries সম্পন্ন করুন: ক্যাশ স্ন্যাপশট নেওয়ার পূর্বে onMutate-এ চলমান কোয়েরি বাতিল করুন।'
        },
        {
          en: '2. Return Snapshot Context: Return { previousTodos } from onMutate so onError has access to the rollback payload.',
          bn: '২. স্ন্যাপশট অবজেক্ট রিটার্ন: onMutate থেকে স্ন্যাপশট রিটার্ন করুন যাতে onError হুক রোলব্যাক ডাটা পায়।'
        },
        {
          en: '3. Reconcile onSettled: Always invalidate the query key in onSettled to ensure client-server synchronization.',
          bn: '৩. onSettled-এ চূড়ান্ত ইনভ্যালিডেশন: সার্ভারের আসল ডাটার সাথে মেলাতে onSettled-এ অবশ্যই কি ইনভ্যালিডেট করুন।'
        },
        {
          en: '4. Assign Temporary IDs: For optimistically added list items, use temporary IDs (id: "tmp-" + Date.now()) until settled.',
          bn: '৪. অস্থায়ী আইডি প্রদান: নতুন আইটেম যোগ করার সময় সার্ভার আইডি না আসা পর্যন্ত সাময়িক ইউনিক আইডি ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tq-pro-ex1',
      kind: 'mcq',
      topic: 'crucial role of cancelQueries in onMutate',
      question: {
        en: 'Why is awaiting "queryClient.cancelQueries({ queryKey })" inside "onMutate" critical for reliable optimistic updates?',
        bn: 'নির্ভরযোগ্য অপটিমিস্টিক আপডেটের জন্য "onMutate"-এর ভেতর "queryClient.cancelQueries({ queryKey })" কল করা কেন অত্যন্ত গুরুত্বপূর্ণ?'
      },
      options: [
        {
          en: 'If a background re-fetch is already in-flight when the mutation starts, its eventual resolution would overwrite the optimistic UI state with stale data; canceling aborts pending fetches to protect the optimistic preview',
          bn: 'মিউটেশন শুরুর সময় যদি ব্যাকগ্রাউন্ডে কোনো রি-ফেচ চলতে থাকে, তবে তার পুরনো রেসপন্স এসে নতুন অপটিমিস্টিক ইউআই মুছে দেবে; ক্যানসেল করলে সেই পেন্ডিং রিকোয়েস্ট বন্ধ হয়ে ইউআই সুরক্ষিত থাকে'
        },
        {
          en: 'cancelQueries deletes all web browser cookies',
          bn: 'cancelQueries ব্রাউজারের সমস্ত কুকি মুছে ফেলে'
        },
        {
          en: 'It disconnects the user computer from the local WiFi router',
          bn: 'এটি ব্যবহারকারীর কম্পিউটারকে লোকাল ওয়াইফাই রাউটার থেকে বিচ্ছিন্ন করে'
        },
        {
          en: 'cancelQueries is required to format the hard drive file system',
          bn: 'হার্ডড্রাইভের ফাইল সিস্টেম ফরম্যাট করার জন্য cancelQueries আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'cancelQueries prevents in-flight GET requests from overwriting your optimistic cache writes.',
        bn: 'cancelQueries চলমান পুরনো রিকোয়েস্টকে অপটিমিস্টিক ডাটা মুছে ফেলা থেকে প্রতিহত করে।'
      },
      explanation: {
        en: 'If an existing GET query resolves after onMutate writes optimistic data, the incoming response will clobber the optimistic state. cancelQueries() aborts in-flight requests to eliminate this race condition.',
        bn: 'ইউজার ক্লিক করার ঠিক আগে চলা রিকোয়েস্ট যদি পরে উত্তর আনে, তবে নতুন অপটিমিস্টিক পরিবর্তন নষ্ট হয়ে যাবে। cancelQueries() আগের সব রিকোয়েস্ট বন্ধ করে এই বিশৃঙ্খলা আটকায়।'
      }
    },
    {
      id: 'tq-pro-ex2',
      kind: 'mcq',
      topic: 'restoring cache state in onError rollback',
      question: {
        en: 'How does the "onError" callback restore previous cache data when an optimistic mutation encounters a network failure?',
        bn: 'কোনো অপটিমিস্টিক মিউটেশন নেটওয়ার্ক ব্যর্থতার মুখে পড়লে "onError" কলব্যাক কীভাবে পূর্বের ক্যাশ ডাটা পুনরুদ্ধার করে?'
      },
      options: [
        {
          en: 'It reads the snapshot returned by onMutate from the "context" argument and restores it via: "queryClient.setQueryData(queryKey, context.previousData)"',
          bn: 'এটি "context" আর্গুমেন্ট থেকে onMutate-এর সংরক্ষিত স্ন্যাপশট পড়ে এবং "queryClient.setQueryData(queryKey, context.previousData)" দিয়ে আগের মান ফিরিয়ে দেয়'
        },
        {
          en: 'It prompts the user to type in the previous data manually',
          bn: 'এটি ব্যবহারকারীকে আগের তথ্যগুলো হাতে টাইপ করতে অনুরোধ জানায়'
        },
        {
          en: 'It reboots the operating system in recovery mode',
          bn: 'এটি অপারেটিং সিস্টেমকে রিকভারি মোডে রিবুট করে দেয়'
        },
        {
          en: 'Cache data cannot be rolled back after an optimistic write',
          bn: 'অপটিমিস্টিক লেখার পর ক্যাশ ডাটা আর কখনোই আগের অবস্থায় ফেরানো যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'onMutate returns a context object containing the snapshot; onError applies it via setQueryData.',
        bn: 'onMutate একটি কনটেক্সট স্ন্যাপশট দেয় যা onError-এ setQueryData দিয়ে ক্যাশে ফিরিয়ে আনা হয়।'
      },
      explanation: {
        en: 'Whatever value is returned from onMutate is passed to onError as its third context argument. Calling setQueryData with context.previousData cleanly reverts the cache to the pre-mutation state.',
        bn: 'onMutate যে অবজেক্ট রিটার্ন করে তা onError-এর ৩ নম্বর প্যারামিটার context হিসেবে আসে। context.previousData দিয়ে সাথে সাথে আগের অবস্থা ফিরিয়ে আনা যায়।'
      }
    },
    {
      id: 'tq-pro-ex3',
      kind: 'mcq',
      topic: 'managing temporary client IDs during optimistic list insertions',
      question: {
        en: 'When optimistically adding a new item to a list before the server assigns a permanent database ID, what is the recommended practice?',
        bn: 'ডাটাবেজ থেকে আসল আইডি আসার আগেই তালিকায় অপটিমিস্টিকভাবে নতুন আইটেম যোগ করার সময় কোন পদ্ধতিটি সুপারিশ করা হয়?'
      },
      options: [
        {
          en: 'Generate a temporary unique ID (e.g. "id: \'temp-\' + Date.now()") so React/Vue can track keys without collision, then let the subsequent onSettled invalidation replace it with the real database ID',
          bn: 'একটি সাময়িক ইউনিক আইডি দিন (যেমন "id: \'temp-\' + Date.now()") যাতে ডম কি-তে কোনো সংঘাত না হয়, পরবর্তীতে onSettled-এর ইনভ্যালিডেশনে সার্ভার থেকে আসল ডাটাবেজ আইডি এসে তা প্রতিস্থাপন করবে'
        },
        {
          en: 'Assign every item an ID of 0',
          bn: 'প্রতিটি আইটেমের আইডি হিসেবে ০ দিয়ে দিন'
        },
        {
          en: 'Leave the ID property undefined to crash the virtual DOM',
          bn: 'ভার্চুয়াল ডম ক্র্যাশ করাতে আইডি প্রোপার্টি আনডিফাইন্ড রেখে দিন'
        },
        {
          en: 'Optimistic additions cannot be performed on lists with IDs',
          bn: 'আইডি থাকা তালিকায় অপটিমিস্টিক সংযোজন করা একেবারেই অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Temporary IDs ensure stable rendering until the server responds with the permanent record.',
        bn: 'অস্থায়ী আইডি সার্ভার থেকে আসল ডাটা আসার পূর্ব পর্যন্ত উপাদানকে নিরাপদে রেন্ডার রাখতে সাহায্য করে।'
      },
      explanation: {
        en: 'Components need unique keys for list rendering. Generating a temporary client ID prevents render bugs. The eventual onSettled invalidation reconciles the list with real server-generated IDs.',
        bn: 'লুপ চালানোর জন্য ইউনিক কি আবশ্যক। Date.now() দিয়ে সাময়িক আইডি বসালে ইউজার তাৎক্ষণিক আইটেম দেখতে পায়, পরে সার্ভারের আসল আইডি এসে তা সুন্দরভাবে সিঙ্ক করে নেয়।'
      }
    },
    {
      id: 'tq-pro-ex4',
      kind: 'mcq',
      topic: 'reconciliation role of onSettled in optimistic workflows',
      question: {
        en: 'Why is "queryClient.invalidateQueries({ queryKey })" inside "onSettled" mandatory even when optimistic updates appear to succeed?',
        bn: 'অপটিমিস্টিক আপডেট সফল মনে হলেও "onSettled"-এর ভেতর "queryClient.invalidateQueries({ queryKey })" চালানো কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Because backend databases may generate computed columns, update timestamps, or apply business logic that the client could not anticipate; invalidation ensures the client reconciles with authoritative truth',
          bn: 'কারণ ব্যাকএন্ড ডাটাবেজ নিজে থেকে টাইমস্ট্যাম্প, হিসাবকৃত কলাম বা বিশেষ ব্যবসায়িক নিয়ম প্রয়োগ করতে পারে যা ক্লায়েন্ট জানত না; ইনভ্যালিডেশন সার্ভারের আসল সত্যের সাথে ক্যাশ মিলিয়ে দেয়'
        },
        {
          en: 'Because without onSettled, the computer monitor shuts off',
          bn: 'কারণ onSettled না দিলে কম্পিউটার মনিটর বন্ধ হয়ে যায়'
        },
        {
          en: 'onSettled is required to establish an SSL connection',
          bn: 'এসএসএল নিরাপদ সংযোগ স্থাপনের জন্য onSettled আবশ্যক'
        },
        {
          en: 'To force the browser to clear its DNS cache',
          bn: 'ব্রাউজারকে তার ডিএনএস ক্যাশ পরিষ্কার করতে বাধ্য করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'onSettled guarantees client cache parity with server-computed fields and authoritative timestamps.',
        bn: 'onSettled সার্ভারের নিজস্ব গণনা ও নির্ভুল তথ্যের সাথে ক্লায়েন্ট ক্যাশকে ১০০% সিঙ্ক রাখে।'
      },
      explanation: {
        en: 'Client optimistic projections are best-guess approximations. Server records have authoritative timestamps, database IDs, and backend triggers. Invalidation in onSettled locks in this final parity.',
        bn: 'ক্লায়েন্টের অপটিমিস্টিক ডাটা হলো একটি সুন্দর অনুমান। কিন্তু ডাটাবেজের আসল আইডি ও সময় নির্ভুলভাবে পেতে onSettled-এ রি-ফেচ চালিয়ে ফাইনাল সত্য প্রতিষ্ঠা করা জরুরি।'
      }
    }
  ],
  quiz: {
    id: 'the-provisional-receipts-quiz',
    title: {
      en: 'TanStack Query Optimistic Updates Quiz',
      bn: 'TanStack Query অপটিমিস্টিক আপডেট কুইজ'
    },
    questions: [
      {
        id: 'q-variables-in-usemutation-state',
        kind: 'mcq',
        topic: 'reading active mutation variables via mutation.variables for optimistic UI',
        question: {
          en: 'In modern TanStack Query, how can a component render an optimistic UI state directly from the mutation instance without manually editing the query cache?',
          bn: 'ক্যাশ সরাসরি ম্যানিপুলেট না করেও কীভাবে একটি কম্পোনেন্ট আধুনিক TanStack Query-তে মিউটেশন ইনস্ট্যান্স থেকে অপটিমিস্টিক ইউআই প্রদর্শন করতে পারে?'
        },
        options: [
          {
            en: 'Inspect "mutation.variables" while "mutation.isPending" is true to display the submitted pending data inline before the server responds',
            bn: '"mutation.isPending" সত্য থাকাকালীন "mutation.variables" পড়ে সার্ভারের উত্তরের আগেই ইনপুটের পেন্ডিং ডাটা স্ক্রিনে সরাসরি প্রদর্শন করে'
          },
          {
            en: 'Write the mutation variables to a physical USB thumb drive',
            bn: 'মিউটেশন ভেরিয়েবলগুলোকে একটি ইউএসবি ড্রাইভে লিখে রেখে'
          },
          {
            en: 'Variables are deleted as soon as mutate() is invoked',
            bn: 'mutate() কল করা মাত্রই সব ভেরিয়েবল মুছে ফেলা হয়'
          },
          {
            en: 'Optimistic UI without cache manipulation is strictly forbidden',
            bn: 'ক্যাশ ম্যানিপুলেশন ছাড়া অপটিমিস্টিক ইউআই বানানো সম্পূর্ণরূপে নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'mutation.variables holds the arguments passed to mutate() while isPending is true.',
          bn: 'isPending চলাকালীন mutate-এ পাঠানো ডাটা mutation.variables-এ পাওয়া যায়।'
        },
        explanation: {
          en: 'TanStack Query v5 makes simple optimistic UI easy via mutation.variables. While mutation.isPending is true, components can render the pending item directly without editing the cache.',
          bn: 'ছোটখাটো কাজের জন্য পুরো ক্যাশ না ঘেঁটে সরাসরি mutation.variables পড়েই পেন্ডিং বাটন বা টেক্সট দেখানো যায়। কাজ শেষ হলে তা নিজে থেকেই স্বাভাবিক হয়ে যায়।'
        }
      },
      {
        id: 'q-multiple-concurrent-optimistic-mutations',
        kind: 'mcq',
        topic: 'handling concurrent optimistic mutations on the same cache record',
        question: {
          en: 'When a user rapidly performs multiple optimistic mutations on the same list (e.g. adding 3 items in 2 seconds), how do snapshot rollbacks avoid race condition data corruption?',
          bn: 'ব্যবহারকারী খুব দ্রুত একই তালিকায় একাধিক অপটিমিস্টিক মিউটেশন চালালে (যেমন ২ সেকেন্ডে ৩টি আইটেম যোগ) স্ন্যাপশট রোলব্যাক কীভাবে ডাটা নষ্ট হওয়া রোধ করে?'
        },
        options: [
          {
            en: 'By keeping each mutation\'s context snapshot isolated and ensuring onSettled invalidates the master query key, reconciling any temporary snapshot discrepancies with server truth',
            bn: 'প্রতিটি মিউটেশনের কনটেক্সট স্ন্যাপশট আলাদা রেখে এবং onSettled-এ মাস্টার কি ইনভ্যালিডেট করে, ফলে সাময়িক অমিল হলেও সার্ভারের সত্য ডাটা এসে সবকিছু সঠিকভাবে সমন্বয় করে নেয়'
          },
          {
            en: 'TanStack Query blocks the user from clicking more than once per minute',
            bn: 'TanStack Query ব্যবহারকারীকে মিনিটে ১ বারের বেশি ক্লিক করতে বাধা দেয়'
          },
          {
            en: 'All concurrent mutations format the client browser memory',
            bn: 'একসাথে একাধিক মিউটেশন ক্লায়েন্ট ব্রাউজার মেমোরি ফরম্যাট করে দেয়'
          },
          {
            en: 'Concurrent mutations always delete all list records permanently',
            bn: 'একসাথে চলা মিউটেশন সবসময় তালিকার সব তথ্য চিরতরে মুছে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Isolated context snapshots paired with final onSettled invalidation reconcile rapid concurrent edits.',
          bn: 'পৃথক কনটেক্সট এবং onSettled ইনভ্যালিডেশন দ্রুতগতির একাধিক মিউটেশনের অমিল দূর করে।'
        },
        explanation: {
          en: 'Each mutation execution gets its own context closure. Even if intermediate rollbacks clash during rapid clicks, the final onSettled invalidation brings the local cache back into exact parity with the server.',
          bn: 'প্রতিটি ক্লিকের নিজস্ব কনটেক্সট থাকে। ব্যবহারকারী দ্রুত ক্লিক করলেও শেষ মিউটেশনের onSettled এসে সার্ভারের সঠিক তালিকা দিয়ে ক্যাশকে ১০০% নিখুঁত করে তোলে।'
        }
      },
      {
        id: 'q-toast-notifications-with-optimistic-errors',
        kind: 'mcq',
        topic: 'coordinating user notification toasts with optimistic rollbacks',
        question: {
          en: 'When an optimistic update fails and rolls back, where should error feedback toasts (e.g. "Failed to save changes") be triggered?',
          bn: 'কোনো অপটিমিস্টিক আপডেট ব্যর্থ হয়ে রোলব্যাক হলে এরর নোটিফিকেশন টোস্ট (যেমন "পরিবর্তন সেভ করা যায়নি") কোথায় ট্রিগার করা উচিত?'
        },
        options: [
          {
            en: 'Inside the "onError(error, variables, context)" callback of useMutation immediately after or alongside restoring the previous snapshot',
            bn: 'useMutation-এর "onError(error, variables, context)" কলব্যাকের ভেতর পূর্বের স্ন্যাপশট পুনরুদ্ধারের ঠিক পাশাপাশি'
          },
          {
            en: 'Inside the user desktop operating system notification registry',
            bn: 'ব্যবহারকারীর ডেস্কটপ অপারেটিং সিস্টেমের নোটিফিকেশন রেজিস্ট্রিতে'
          },
          {
            en: 'Inside an HTML comment tag in index.html',
            bn: 'index.html ফাইলের এইচটিএমএল কমেন্ট ট্যাগের ভেতর'
          },
          {
            en: 'Error toasts cannot be displayed when using TanStack Query',
            bn: 'TanStack Query ব্যবহার করার সময় কোনো এরর টোস্ট দেখানো সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'onError is the dedicated lifecycle hook for handling failures and showing user notifications.',
          bn: 'onError ব্যর্থতা সামলানো এবং ব্যবহারকারীকে সতর্কবার্তা দেখানোর জন্য আদর্শ জায়গা।'
        },
        explanation: {
          en: 'The onError callback receives the error and context snapshot. Restoring the snapshot reverts the visual UI, and firing a toast informs the user that their action could not be completed on the server.',
          bn: 'onError-এ ডাটা আগের অবস্থায় ফিরিয়ে নেওয়ার পাশাপাশি একটি সুন্দর টোস্ট বা পপআপ দেখিয়ে ব্যবহারকারীকে জানিয়ে দেওয়া হয় যে ইন্টারনেটের সমস্যার কারণে কাজটি সেভ হয়নি।'
        }
      },
      {
        id: 'q-canceling-queries-exact-key-targeting',
        kind: 'mcq',
        topic: 'targeting specific query keys during cancelQueries in optimistic mutations',
        question: {
          en: 'When calling "queryClient.cancelQueries({ queryKey })" in onMutate, why should developers target the specific resource key (e.g. [\'todos\', todoId]) rather than cancelling the entire application cache?',
          bn: 'onMutate-এ "queryClient.cancelQueries({ queryKey })" চালানোর সময় পুরো অ্যাপের সব কোয়েরি বন্ধ না করে সুনির্দিষ্ট রিসোর্স কি (যেমন [\'todos\', todoId]) টার্গেট করা কেন উচিত?'
        },
        options: [
          {
            en: 'Canceling globally halts un-related background fetches (like notifications or user profile queries) across unrelated views, wasting network effort and delaying fresh data elsewhere',
            bn: 'গ্লোবালি সব বাতিল করলে অন্য পেজের প্রয়োজনীয় ব্যাকগ্রাউন্ড রিকোয়েস্টও (যেমন নোটিফিকেশন বা প্রোফাইল ডাটা) বন্ধ হয়ে যায়, যার ফলে অপ্রয়োজনে অন্যান্য অংশের ডাটা পেতে দেরি হয়'
          },
          {
            en: 'Because global cancellation shuts down the client computer monitor',
            bn: 'কারণ গ্লোবাল বাতিলকরণ কম্পিউটার মনিটর বন্ধ করে দেয়'
          },
          {
            en: 'Targeting specific keys is forbidden by the TypeScript compiler',
            bn: 'নির্দিষ্ট কি টার্গেট করা টাইপস্ক্রিপ্ট কমপাইলার দ্বারা নিষিদ্ধ'
          },
          {
            en: 'cancelQueries requires entering a secret administrator PIN code',
            bn: 'cancelQueries চালানোর জন্য একটি গোপন অ্যাডমিন পিন কোড দিতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Surgical query cancellation ensures only the affected resource is paused.',
          bn: 'সুনির্দিষ্ট কি বাতিল করলে অন্যান্য দরকারী ব্যাকগ্রাউন্ড রিকোয়েস্ট অক্ষত থাকে।'
        },
        explanation: {
          en: 'Surgical scoping is a core tenant of TanStack Query. Only cancel queries directly touched by the mutation. Other background fetches (unread messages, analytics) should continue unhindered.',
          bn: 'শুধুমাত্র যে ডাটা পরিবর্তন হচ্ছে সেটির রিকোয়েস্ট বাতিল করাই সঠিক। নোটিফিকেশন বা ইউজারের অন্য ডাটা যাতে কোনো বাধা ছাড়া আসতে পারে সেজন্য সুনির্দিষ্ট কি ব্যবহার করা আবশ্যক।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-label-archive',
    title: {
      en: 'Query Key Factories — Hierarchical Keys, Typesafe Factories & Invalidation',
      bn: 'Query Key Factories — হায়ারার্কিক্যাল কি, টাইপ-সেফ ফ্যাক্টরি ও ইনভ্যালিডেশন'
    }
  }
};
