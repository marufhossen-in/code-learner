import type { Lesson } from '../../../lib/types';

export const harborRehearsalLesson: Lesson = {
  slug: 'the-harbor-rehearsal',
  tech: 'web-apis',
  title: {
    en: 'Web APIs Capstone — Building an Offline-First Progressive Application',
    bn: 'ওয়েব এপিআই ক্যাপস্টোন: অফলাইন-ফার্স্ট প্রোগ্রেসিভ অ্যাপ্লিকেশন নির্মাণ'
  },
  summary: {
    en: 'Building resilient web applications requires orchestrating the full suite of native browser APIs into a harmonious, offline-capable architecture. In this capstone lesson, you will synthesize the entire Web APIs toolkit into an enterprise offline-first system. You will integrate Fetch and AbortController for network resilience, IndexedDB for local caching, and IntersectionObserver for layout-thrash-free rendering. You will also offload heavy background tasks to Web Workers, coordinate tabs with BroadcastChannel, and manage network proxying via Service Workers. Master the unified audit checklist, performance profiling, and defensive error-handling patterns. Implement an executable offline-first synchronization coordinator in TypeScript.',
    bn: 'একটি স্থিতিস্থাপক ওয়েব অ্যাপ্লিকেশন তৈরি করতে ব্রাউজারের নেটিভ এপিআইগুলোকে একটি সুশৃঙ্খল অফলাইন-বান্ধব আর্কিটেকচারে সাজাতে হয়। এই ক্যাপস্টোন পাঠে আপনি পুরো Web APIs সরঞ্জামগুলো একত্রিত করে একটি এন্টারপ্রাইজ মানের অফলাইন-ফার্স্ট সিস্টেম তৈরি করবেন। এখানে Fetch ও AbortController দিয়ে নেটওয়ার্ক হ্যান্ডলিং, IndexedDB-তে ক্যাশিং এবং IntersectionObserver দিয়ে রেন্ডারিং সমন্বয় করা হবে। পাশাপাশি Web Workers দিয়ে ব্যাকগ্রাউন্ড প্রসেসিং, BroadcastChannel দিয়ে ট্যাব সিঙ্ক এবং Service Workers দিয়ে অফলাইন প্রক্সি পরিচালনা শিখবেন। পারফরম্যান্স প্রোফাইলিং এবং নিরাপদ এরর হ্যান্ডলিংয়ের সর্বোত্তম নিয়ম জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর অফলাইন সিঙ্ক্রোনাইজেশন কোঅর্ডিনেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'offline-first-blueprint-overview',
      text: {
        en: 'The Offline-First Architectural Blueprint',
        bn: 'অফলাইন-ফার্স্ট আর্কিটেকচারাল ব্লুপ্রিন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern progressive web applications, designing for network resilience from the beginning is the key to enterprise reliability.',
        bn: 'আধুনিক প্রোগ্রেসিভ ওয়েব অ্যাপ্লিকেশন তৈরি করার সময় শুরু থেকেই নেটওয়ার্কের উত্থান-পতন মাথায় রেখে নকশা করাই এন্টারপ্রাইজ নির্ভরযোগ্যতার মূল চাবিকাঠি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'True architectural resilience requires combining multiple specialized Web APIs into a unified application lifecycle. The user interface renders smooth 60fps lists and lazy-loaded media using IntersectionObserver and ResizeObserver. When users input data while offline on a subway train, changes are persisted atomically into local IndexedDB object stores. A Dedicated Web Worker crunches heavy document parsing and encryption in the background, keeping the main thread completely unblocked. As soon as the browser detects restored internet connectivity via the online event, a synchronization worker reads pending records from IndexedDB and dispatches them via Fetch equipped with AbortController timeouts. A Service Worker intercepts network traffic to serve cached application shells, while BroadcastChannel synchronizes state across multiple open tabs.',
        bn: 'একটি প্রকৃত স্থিতিস্থাপক অ্যাপ্লিকেশন তৈরি করতে ব্রাউজারের বিভিন্ন এপিআইকে একসাথে কার্যকরভাবে যুক্ত করতে হয়। ইউজার ইন্টারফেসে ৬০ ফ্রেমে দ্রুত ছবি ও অসীম তালিকা লোড করতে IntersectionObserver ও ResizeObserver কাজ করে। ব্যবহারকারী যখন সাবওয়েতে বা অফলাইনে ডেটা এন্ট্রি করেন, তখন তথ্যগুলো নিরাপদে IndexedDB-তে সংরক্ষিত হয়। একটি ডেডিকেটেড Web Worker মূল থ্রেডকে সম্পূর্ণ মুক্ত রেখে ব্যাকগ্রাউন্ডে ভারী ডেটা প্রসেসিং সম্পন্ন করে। যখনই ব্রাউজার অনলাইন ইভেন্টের মাধ্যমে ইন্টারনেট সংযোগ ফিরে পাওয়ার খবর পায়, অমনি একটি সিঙ্ক প্রসেস IndexedDB থেকে জমে থাকা ডেটা পড়ে AbortController যুক্ত Fetch-এর মাধ্যমে সার্ভারে পাঠিয়ে দেয়। এর পাশাপাশি Service Worker অফলাইন ক্যাশ থেকে মূল পেজ প্রদর্শন করে এবং BroadcastChannel একাধিক খোলা ট্যাবের মধ্যে ডেটার সামঞ্জস্য বজায় রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'offline-first-architecture',
          def: {
            en: 'An architectural design paradigm ensuring web applications remain fully functional without internet access, storing data in IndexedDB and syncing upon reconnection.',
            bn: 'এমন একটি আধুনিক আর্কিটেকচার যা ইন্টারনেট সংযোগ না থাকলেও অ্যাপ্লিকেশন পুরোপুরি সচল রাখে এবং অনলাইনে এলে ডেটাবেস সার্ভারের সাথে সমন্বয় করে।'
          }
        },
        {
          term: 'broadcast-channel-api',
          def: {
            en: 'A lightweight publish-subscribe messaging channel enabling simple, direct communication between all open tabs, windows, and workers of the same origin.',
            bn: 'একটি সহজ পাব/সাব চ্যানেল যার মাধ্যমে একই ওয়েবসাইটের একাধিক খোলা ট্যাব, উইন্ডো এবং ব্যাকগ্রাউন্ড ওয়ার্কার নিজেদের মধ্যে সরাসরি বার্তা পাঠাতে পারে।'
          }
        },
        {
          term: 'cache-storage-api',
          def: {
            en: 'A programmable request-response caching interface managed by Service Workers to store static HTML, CSS, JavaScript, and font assets for offline retrieval.',
            bn: 'সার্ভিস ওয়ার্কারের নিয়ন্ত্রিত একটি বিশেষ ক্যাশ যা অফলাইনে ব্যবহারের জন্য এইচটিএমএল, সিএসএস ও জাভাস্ক্রিপ্ট ফাইলগুলো মেমরিতে জমা রাখে।'
          }
        },
        {
          term: 'background-sync-api',
          def: {
            en: 'A Service Worker interface that defers network requests until the user device regains stable internet connectivity, preventing lost submissions.',
            bn: 'সার্ভিস ওয়ার্কারের একটি বিশেষ ক্ষমতা যা ইন্টারনেট সংযোগ ফিরে না আসা পর্যন্ত প্রয়োজনীয় নেটওয়ার্ক রিকোয়েস্টগুলোকে নিরাপদে অপেক্ষায় রাখে।'
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
      id: 'web-apis-integration-matrix-table',
      text: {
        en: 'The Web APIs Integration Matrix: Architecture Tiers',
        bn: 'ওয়েব এপিআই সমন্বয় মেট্রিক্স: আর্কিটেকচারাল স্তরসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production progressive web applications partition architectural responsibilities across dedicated native browser tiers.',
        bn: 'প্রোডাকশন মানের প্রোগ্রেসিভ ওয়েব অ্যাপ্লিকেশনগুলো তাদের আর্কিটেকচারাল দায়িত্বগুলো সুনির্দিষ্ট নেটিভ ব্রাউজার স্তরে ভাগ করে নেয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Layer', bn: 'আর্কিটেকচারাল স্তর' },
        { en: 'Primary Web APIs Utilized', bn: 'ব্যবহৃত প্রধান ওয়েব এপিআইসমূহ' },
        { en: 'Core Responsibility', bn: 'প্রধান দায়িত্ব' },
        { en: 'Defensive Failure Handling', bn: 'ব্যর্থতা প্রতিরোধের কৌশল' }
      ],
      rows: [
        [
          { en: 'User Interface Layer', bn: 'ইউজার ইন্টারফেস স্তর' },
          { en: 'IntersectionObserver, ResizeObserver', bn: 'IntersectionObserver, ResizeObserver' },
          { en: 'Lazy-loading images and responsive container-aware widgets', bn: 'ছবি লেজি লোড করা এবং রেসপন্সিভ কন্টেইনার কম্পোনেন্ট পরিচালনা' },
          { en: 'Unobserve individual items on load; disconnect observer on unmount', bn: 'লোড শেষে unobserve করা; কম্পোনেন্ট আনমাউন্টে disconnect কল করা' }
        ],
        [
          { en: 'Local Persistence Layer', bn: 'লোকাল স্টোরেজ স্তর' },
          { en: 'IndexedDB, localStorage', bn: 'IndexedDB, localStorage' },
          { en: 'Persisting offline form drafts, user preferences, and datasets', bn: 'অফলাইন ফর্ম ড্রাফট, ব্যবহারকারীর পছন্দ এবং ক্যাশ ডেটা জমা রাখা' },
          { en: 'Handle QuotaExceededError defensively; manage database migrations', bn: 'QuotaExceededError হ্যান্ডেল করা; ডেটাবেস স্কিমা আপগ্রেড পরিচালনা' }
        ],
        [
          { en: 'Background Compute Layer', bn: 'ব্যাকগ্রাউন্ড প্রসেসিং স্তর' },
          { en: 'Web Workers, Transferable Objects', bn: 'Web Workers, Transferable Objects' },
          { en: 'Heavy calculations: cryptography, data compression, image parsing', bn: 'ভারী কাজ: ক্রিপ্টোগ্রাফি, ফাইল কম্প্রেশন ও ইমেজ ফিল্টারিং' },
          { en: 'Zero-copy ArrayBuffer ownership transfer; terminate idle workers', bn: 'জিরো-কপি মেমরি স্থানান্তর; কাজ শেষে ওয়ার্কার টার্মিনেট করা' }
        ],
        [
          { en: 'Network & Proxy Layer', bn: 'নেটওয়ার্ক ও প্রক্সি স্তর' },
          { en: 'Fetch API, AbortController, Service Worker', bn: 'Fetch API, AbortController, Service Worker' },
          { en: 'Offline asset caching and robust HTTP synchronization with server', bn: 'অফলাইন ক্যাশিং এবং সার্ভারের সাথে নির্ভরযোগ্য ডেটা সিঙ্ক্রোনাইজেশন' },
          { en: 'AbortSignal.timeout for dead connections; Stale-While-Revalidate caching', bn: 'টাইমআউট দিয়ে সংযোগ বাতিল; Stale-While-Revalidate ক্যাশিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-offline-sync-code',
      text: {
        en: 'Executable Offline-First Synchronization Simulation',
        bn: 'অফলাইন-ফার্স্ট সিঙ্ক্রোনাইজেশনের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an offline synchronization coordinator processes a queue of 3 pending local records, verifying network status and syncing them to a remote server.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি অফলাইন সিঙ্ক কোঅর্ডিনেটর বাস্তবায়ন করে যা ৩টি স্থানীয় ড্রাফট রেকর্ডকে নেটওয়ার্ক সংযোগ পাওয়ার পর সফলভাবে সার্ভারে সিঙ্ক করে।'
      }
    },
    {
      type: 'code',
      code: `// Resilient Offline-First Synchronization Coordinator

interface PendingRecord {
  id: string;
  title: string;
}

interface SyncSummary {
  totalQueued: number;
  syncedCount: number;
  remainingCount: number;
  status: string;
}

function processOfflineSynchronization(
  queue: PendingRecord[],
  isOnline: boolean = true
): SyncSummary {
  // If the browser is currently offline, defer synchronization cleanly
  if (!isOnline) {
    return {
      totalQueued: queue.length,
      syncedCount: 0,
      remainingCount: queue.length,
      status: 'offline_deferred'
    };
  }

  // When online, process each pending record in the sync pipeline
  let successfullySynced = 0;

  for (const record of queue) {
    // In production, each record is transmitted via fetch with an AbortSignal timeout
    if (record.id && record.title) {
      successfullySynced++;
    }
  }

  return {
    totalQueued: queue.length,
    syncedCount: successfullySynced,
    remainingCount: queue.length - successfullySynced,
    status: 'sync_successful'
  };
}

const localQueue: PendingRecord[] = [
  { id: 'draft-101', title: 'Site Survey Report' },
  { id: 'draft-102', title: 'Inspection Checklist' },
  { id: 'draft-103', title: 'Equipment Inventory' }
];

const report = processOfflineSynchronization(localQueue, true);

console.log('Total offline records queued:', report.totalQueued);
console.log('Successfully synchronized records:', report.syncedCount);
console.log('Pending records remaining in queue:', report.remainingCount);
console.log('Synchronization coordinator status:', report.status);

// prints: Total offline records queued: 3
// prints: Successfully synchronized records: 3
// prints: Pending records remaining in queue: 0
// prints: Synchronization coordinator status: sync_successful`
    },
    {
      type: 'heading',
      id: 'defensive-architecture-and-polyfills',
      text: {
        en: 'Defensive Architecture: Graceful Degradation and Feature Detection',
        bn: 'সুরক্ষা আর্কিটেকচার: গ্রেসফুল ডিগ্রেডেশন ও ফিচার ডিটেকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The golden rule of enterprise frontend engineering is: never assume an API is universally available. Users may open your application inside privacy-hardened browsers, private browsing modes (which frequently disable Service Workers and restrict IndexedDB), or embedded webviews with restricted permissions. Robust architectures wrap Web API invocations in explicit feature checks (e.g. "if (\'serviceWorker\' in navigator)"). If an advanced API is disabled or unsupported, the application must degrade gracefully: falling back to standard network requests without crashing the page or blocking critical user workflows.',
        bn: 'এন্টারপ্রাইজ ফ্রন্টএন্ড ইঞ্জিনিয়ারিংয়ের সুবর্ণ নিয়ম হলো: কোনো এপিআই সব ব্রাউজারে সার্বজনীনভাবে পাওয়া যাবে তা কখনোই আগে থেকে নিশ্চিত ধরে নেবেন না। ব্যবহারকারীরা আপনার ওয়েবসাইটটি কোনো প্রাইভেট ব্রাউজিং মোডে (যেখানে প্রায়শই সার্ভিস ওয়ার্কার বন্ধ থাকে এবং IndexedDB সীমিত থাকে) বা ইন-অ্যাপ ওয়েবভিউতে খুলতে পারেন। একটি নির্ভরযোগ্য আর্কিটেকচার প্রতিটি ওয়েব এপিআই ডাকার আগে সুনির্দিষ্ট ফিচার চেক করে (যেমন "if (\'serviceWorker\' in navigator)")। কোনো উন্নত এপিআই অনুপলব্ধ থাকলে অ্যাপ্লিকেশনটিকে অবশ্যই গ্রেসফুল ডিগ্রেডেশনের মাধ্যমে সাধারণ নেটওয়ার্ক কলে ফিরে যেতে হবে, পেজ ক্র্যাশ না করে বা ব্যবহারকারীর কাজের ক্ষতি না করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Architect for offline-first: Treat network availability as an enhancement; store core user data locally in IndexedDB first.',
          bn: 'অফলাইন-ফার্স্ট আর্কিটেকচার গড়ুন: ইন্টারনেটকে বাড়তি সুবিধা মনে করুন; মূল ডেটা আগে স্থানীয় IndexedDB-তে জমা রাখুন।'
        },
        {
          en: 'Coordinate tabs with BroadcastChannel: Broadcast updates across tabs to keep application state synchronized in real time.',
          bn: 'BroadcastChannel দিয়ে ট্যাব সিঙ্ক রাখুন: এক ট্যাবের পরিবর্তন অন্য সব ট্যাবে তাৎক্ষণিকভাবে জানিয়ে স্টেট আপডেট রাখুন।'
        },
        {
          en: 'Offload heavy compute to Web Workers: Maintain smooth 60fps animations by running expensive processing on secondary threads.',
          bn: 'ভারী কাজ ওয়ার্কারে সরান: ব্যাকগ্রাউন্ড থ্রেডে ডেটা প্রসেসিং চালিয়ে মূল পেজের অ্যানিমেশন সর্বদা ৬০ ফ্রেমে সচল রাখুন।'
        },
        {
          en: 'Always implement defensive fallbacks: Combine feature detection with graceful degradation to support private modes and older devices.',
          bn: 'সবসময় বিকল্প ফলব্যাক রাখুন: প্রাইভেট ব্রাউজিং বা পুরনো ডিভাইসে ক্র্যাশ এড়াতে ফিচার ডিটেকশনের সাথে ফলব্যাক নিশ্চিত করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'hr-ex1',
      kind: 'mcq',
      topic: 'offline-first-data-flow',
      question: {
        en: 'In an enterprise offline-first architecture, what is the recommended data flow when a user submits a form while working on a mobile device?',
        bn: 'একটি এন্টারপ্রাইজ অফলাইন-ফার্স্ট আর্কিটেকচারে যখন কোনো ব্যবহারকারী ফর্ম পূরণ করেন, তখন কোন সঠিক ক্রমে ডেটা প্রক্রিয়া করা উচিত?'
      },
      options: [
        {
          en: 'Write the record immediately to local IndexedDB and update the UI instantly (optimistic UI); queue a background synchronization task to transmit the record to the server via fetch when network connectivity is detected',
          bn: 'তাত্ক্ষণিকভাবে ডেটাটি লোকাল IndexedDB-তে লিখে ইউআই আপডেট করা (অপটিমিস্টিক ইউআই); এবং ইন্টারনেট সংযোগ পাওয়া মাত্রই ব্যাকগ্রাউন্ডে fetch-এর মাধ্যমে সার্ভারে ডেটা পাঠানোর একটি সিঙ্ক টাস্ক সারিবদ্ধ করা'
        },
        {
          en: 'Display a fatal error screen and format the mobile phone storage',
          bn: 'একটি মারাত্মক এরর দেখিয়ে মোবাইল ফোন ফরম্যাট করে ফেলা'
        },
        {
          en: 'Halt the browser until the user walks to an internet cafe',
          bn: 'ব্যবহারকারী সাইবার ক্যাফেতে না যাওয়া পর্যন্ত ব্রাউজার আটকে রাখা'
        },
        {
          en: 'Because offline forms require approval from the International Postal Union',
          bn: 'কারণ অফলাইন ফর্মে আন্তর্জাতিক ডাক সংস্থার অনুমোদনের প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Save locally first -> update UI immediately -> sync to remote server in background.',
        bn: 'আগে লোকাল ডেটাবেসে সংরক্ষণ -> সাথে সাথে ইউআই পরিবর্তন -> ব্যাকগ্রাউন্ডে সার্ভারে সিঙ্ক।'
      },
      explanation: {
        en: 'Writing to IndexedDB first guarantees zero data loss and delivers instant feedback, decoupling user interactions from network latency.',
        bn: 'আগে IndexedDB-তে লিখলে কোনো ডেটা হারানোর ঝুঁকি থাকে না এবং ব্যবহারকারী মুহূর্তেই প্রতিক্রিয়া দেখতে পান।'
      }
    },
    {
      id: 'hr-ex2',
      kind: 'mcq',
      topic: 'broadcast-channel-multi-tab-synchronization',
      question: {
        en: 'How does the BroadcastChannel API simplify cross-tab synchronization compared to listening to localStorage "storage" events?',
        bn: 'localStorage "storage" ইভেন্টের তুলনায় BroadcastChannel API কীভাবে একাধিক ট্যাবের মধ্যকার যোগাযোগকে অনেক বেশি সহজ ও কার্যকর করে তোলে?'
      },
      options: [
        {
          en: 'BroadcastChannel is a dedicated bidirectional publish-subscribe bus that passes complex JavaScript objects directly between tabs and Web Workers without writing dummy keys to disk or serializing strings to localStorage',
          bn: 'BroadcastChannel হলো একটি নিবেদিত দ্বিমুখী পাব/সাব চ্যানেল যা ডিস্কে কোনো অপ্রয়োজনীয় কি না লিখে বা স্ট্রিংয়ে রূপান্তর না করেই সরাসরি জটিল অবজেক্ট একাধিক ট্যাব ও ওয়ার্কারের মধ্যে বিনিময় করতে পারে'
        },
        {
          en: 'BroadcastChannel reduces computer electrical power consumption by 90 percent',
          bn: 'BroadcastChannel কম্পিউটারের বিদ্যুৎ খরচ ৯০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Because BroadcastChannel was declared mandatory by the United Nations in 2023',
          bn: 'কারণ ২০২৩ সালে জাতিসংঘ BroadcastChannel বাধ্যতামূলক করেছিল'
        },
        {
          en: 'BroadcastChannel only works on computers located in the same office room',
          bn: 'BroadcastChannel কেবল একই অফিস রুমে থাকা কম্পিউটারে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct messaging without disk writes: postMessage() directly to a named channel.',
        bn: 'ডিস্কে কোনো ফাইল না লিখে সরাসরি নামযুক্ত চ্যানেলে বার্তা পাঠানো।'
      },
      explanation: {
        en: 'BroadcastChannel allows direct in-memory message multicasting across contexts of the same origin without storage disk side-effects.',
        bn: 'BroadcastChannel মেমরির মাধ্যমে সরাসরি বার্তা ছড়িয়ে দেয়, ফলে ডিস্কের ওপর কোনো অযথা চাপ পড়ে না।'
      }
    },
    {
      id: 'hr-ex3',
      kind: 'mcq',
      topic: 'service-worker-cache-storage-pwa',
      question: {
        en: 'What role does the CacheStorage API play in a Progressive Web Application (PWA) managed by a Service Worker?',
        bn: 'একটি সার্ভিস ওয়ার্কারের অধীনে চলা প্রোগ্রেসিভ ওয়েব অ্যাপ্লিকেশনে (PWA) CacheStorage API কোন ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It stores complete HTTP Request/Response pairs (HTML, CSS, JS, fonts, images) persistently on the client, allowing the Service Worker to serve the full application shell instantly when offline',
          bn: 'এটি সম্পূর্ণ HTTP Request ও Response জোড়া (HTML, CSS, JS, ফন্ট ও ছবি) ক্লায়েন্টে স্থায়ীভাবে জমা রাখে, যার ফলে অফলাইনেও সার্ভিস ওয়ার্কার পুরো ওয়েবসাইটটি চোখের পলকে লোড করতে পারে'
        },
        {
          en: 'CacheStorage replaces computer RAM with paper notebook pages',
          bn: 'CacheStorage কম্পিউটারের র‍্যামের বদলে কাগজের খাতা ব্যবহার করে'
        },
        {
          en: 'Because CacheStorage deletes all user account passwords every 24 hours',
          bn: 'কারণ CacheStorage প্রতি ২৪ ঘণ্টা পরপর ব্যবহারকারীর পাসওয়ার্ড মুছে দেয়'
        },
        {
          en: 'CacheStorage reduces internet download speeds to zero bytes per second',
          bn: 'CacheStorage ইন্টারনেটের গতি শূন্য বাইটে নামিয়ে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'CacheStorage stores HTTP pairs on disk so the page opens even with airplane mode on.',
        bn: 'CacheStorage ইন্টারনেট বন্ধ থাকা অবস্থাতেও পুরো সাইটটি দ্রুত লোড করার জন্য প্রয়োজনীয় ফাইল জমা রাখে।'
      },
      explanation: {
        en: 'CacheStorage provides programmatic HTTP caching under Service Worker control, enabling instant offline asset delivery.',
        bn: 'CacheStorage সার্ভিস ওয়ার্কারকে নেটওয়ার্ক রিকোয়েস্ট অফলাইন মেমরি থেকে সরাসরি সরবরাহ করার পূর্ণ ক্ষমতা দেয়।'
      }
    },
    {
      id: 'hr-ex4',
      kind: 'mcq',
      topic: 'private-browsing-mode-storage-restrictions',
      question: {
        en: 'Why must enterprise web applications implement defensive fallbacks when using client-side storage APIs like IndexedDB and Service Workers?',
        bn: 'IndexedDB এবং Service Worker-এর মতো ক্লায়েন্ট-সাইড স্টোরেজ এপিআই ব্যবহারের সময় এন্টারপ্রাইজ ওয়েব অ্যাপ্লিকেশনে কেন সবসময় সতর্কতামূলক ফলব্যাক রাখা উচিত?'
      },
      options: [
        {
          en: 'In private browsing (Incognito) modes, certain embedded webviews, or restricted corporate environments, browsers may disable Service Workers or severely restrict storage quotas, throwing security exceptions if not caught',
          bn: 'প্রাইভেট বা ইনকগনিটো ব্রাউজিং মোডে, বিভিন্ন মোবাইল ওয়েবভিউতে বা কঠোর কর্পোরেট নেটওয়ার্কে ব্রাউজার সার্ভিস ওয়ার্কার বন্ধ রাখতে পারে বা স্টোরেজ কোটা আটকে দিতে পারে, যা হ্যান্ডেল না করলে কোড ক্র্যাশ করে'
        },
        {
          en: 'Because private browsing permanently damages the client computer display',
          bn: 'কারণ প্রাইভেট ব্রাউজিং মনিটরের ডিসপ্লে নষ্ট করে ফেলে'
        },
        {
          en: 'Private browsing was made illegal by international copyright treaties in 2022',
          bn: 'কারণ ২০২২ সালে আন্তর্জাতিক কপিরাইট আইনে প্রাইভেট ব্রাউজিং নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'To prevent computer cooling fans from spinning too fast',
          bn: 'যাতে কম্পিউটারের কুলিং ফ্যান অতিরিক্ত দ্রুত না ঘোরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Incognito modes often disable persistence. Always use feature checks and try/catch around storage initialization.',
        bn: 'ইনকগনিটো মোডে অনেক ফিচার বন্ধ থাকতে পারে; তাই সবসময় ফিচার চেক ও try/catch ব্যবহার করা উচিত।'
      },
      explanation: {
        en: 'Private modes restrict persistent client storage to prevent cross-session tracking; defensive fallbacks guarantee application reliability.',
        bn: 'প্রাইভেট মোডের সীমাবদ্ধতার মুখেও অ্যাপ্লিকেশন যাতে স্বাভাবিকভাবে চলতে পারে সেজন্য প্রতিরক্ষামূলক ফলব্যাক রাখা আবশ্যক।'
      }
    }
  ],
  quiz: {
    id: 'harbor-rehearsal-quiz',
    title: {
      en: 'Web APIs Capstone, Architecture Synthesis, and Offline-First Quiz',
      bn: 'ওয়েব এপিআই ক্যাপস্টোন, আর্কিটেকচার সমন্বয় ও অফলাইন-ফার্স্ট কুইজ'
    },
    questions: [
      {
        id: 'hrq-q1',
        kind: 'mcq',
        topic: 'capstone-api-synthesis-roles',
        question: {
          en: 'In a complete offline-first architecture, what is the specific role of the Service Worker versus a Dedicated Web Worker?',
          bn: 'একটি পূর্ণাঙ্গ অফলাইন-ফার্স্ট আর্কিটেকচারে সার্ভিস ওয়ার্কার এবং ডেডিকেটেড ওয়েব ওয়ার্কারের মধ্যকার নির্দিষ্ট ভূমিকা কী?'
        },
        options: [
          {
            en: 'The Service Worker acts as a client-side network proxy that intercepts fetch requests and manages offline caches; the Dedicated Web Worker runs heavy computational math (like image processing or parsing) off the main thread',
            bn: 'সার্ভিস ওয়ার্কার একটি ক্লায়েন্ট-সাইড নেটওয়ার্ক প্রক্সি হিসেবে রিকোয়েস্ট আটকায় এবং অফলাইন ক্যাশ পরিচালনা করে; আর ডেডিকেটেড ওয়েব ওয়ার্কার মূল থ্রেড মুক্ত রাখতে ব্যাকগ্রাউন্ডে ভারী গাণিতিক হিসাব বা ফাইল পার্সিং সম্পন্ন করে'
          },
          {
            en: 'There is no difference; Service Workers and Web Workers are identical synonyms',
            bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই; দুটি একই জিনিস'
          },
          {
            en: 'Service Workers are written in C++ while Web Workers are written in Python',
            bn: 'সার্ভিস ওয়ার্কার সি++ ভাষায় এবং ওয়েব ওয়ার্কার পাইথনে লেখা'
          },
          {
            en: 'Web Workers can only run on mobile phones while Service Workers only run on servers',
            bn: 'ওয়েব ওয়ার্কার কেবল মোবাইলে এবং সার্ভিস ওয়ার্কার কেবল সার্ভারে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Service Worker = Network proxy + Offline caches. Web Worker = Heavy background CPU crunching.',
          bn: 'সার্ভিস ওয়ার্কার নেটওয়ার্ক প্রক্সি ও অফলাইন ক্যাশ সামলায়; আর ওয়েব ওয়ার্কার ভারী সিপিইউ প্রসেসিং করে।'
        },
        explanation: {
          en: 'Service Workers intercept network traffic across the origin; Web Workers provide multithreaded compute pipelines for the active page.',
          bn: 'সার্ভিস ওয়ার্কার নেটওয়ার্ক ট্র্যাফিক নিয়ন্ত্রণ করে আর ওয়েব ওয়ার্কার পেজের ভারী কাজ ব্যাকগ্রাউন্ড থ্রেডে সরিয়ে দেয়।'
        }
      },
      {
        id: 'hrq-q2',
        kind: 'mcq',
        topic: 'optimistic-ui-indexeddb-reconciliation',
        question: {
          en: 'What is "Optimistic UI", and how does it rely on client storage like IndexedDB to deliver instantaneous responsiveness?',
          bn: '"অপটিমিস্টিক ইউআই" (Optimistic UI) কী, এবং এটি কীভাবে তাত্ক্ষণিক রেসপন্স দিতে IndexedDB-এর মতো ক্লায়েন্ট স্টোরেজের ওপর নির্ভর করে?'
        },
        options: [
          {
            en: 'The application updates the local UI and writes changes to IndexedDB immediately under the assumption that the server write will succeed, reconciling with the remote server asynchronously in the background',
            bn: 'সার্ভারে সফলভাবে সেভ হবে এই আশায় অ্যাপটি সাথে সাথে লোকাল ইউআই আপডেট করে এবং IndexedDB-তে ডেটা লিখে ফেলে, পরে ব্যাকগ্রাউন্ডে দূরবর্তী সার্ভারের সাথে হিসাব মিলিয়ে নেয়'
          },
          {
            en: 'Optimistic UI formats the user device storage if any error occurs',
            bn: 'অপটিমিস্টিক ইউআই কোনো এরর হলে ডিভাইসের স্টোরেজ ফরম্যাট করে ফেলে'
          },
          {
            en: 'Because optimistic UI converts all numbers into positive values only',
            bn: 'কারণ অপটিমিস্টিক ইউআই সব সংখ্যাকে ধনাত্মক মানে রূপান্তর করে'
          },
          {
            en: 'Optimistic UI was made mandatory by international web treaties in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে অপটিমিস্টিক ইউআই বাধ্যতামূলক করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Update screen immediately without waiting 500ms for the server to reply. Reconcile in the background.',
          bn: 'সার্ভারের উত্তরের জন্য অপেক্ষা না করে সাথে সাথে স্ক্রিন আপডেট করা এবং ব্যাকগ্রাউন্ডে ডেটা সিঙ্ক করা।'
        },
        explanation: {
          en: 'Optimistic UI eliminates perceptible network latency by committing changes locally first, rolling back or retrying only if remote sync fails.',
          bn: 'অপটিমিস্টিক ইউআই নেটওয়ার্ক বিলম্ব দূর করে ব্যবহারকারীকে চোখের পলকে রেসপন্স দেয়।'
        }
      },
      {
        id: 'hrq-q3',
        kind: 'mcq',
        topic: 'sendbeacon-capstone-exit-auditing',
        question: {
          en: 'In our complete capstone progressive web application, why is navigator.sendBeacon() dispatched during the "pagehide" event rather than "unload"?',
          bn: 'আমাদের পূর্ণাঙ্গ ক্যাপস্টোন ওয়েব অ্যাপ্লিকেশনে কেন "unload"-এর বদলে "pagehide" ইভেন্টের সময় navigator.sendBeacon() চালানো হয়?'
        },
        options: [
          {
            en: 'Modern mobile browsers frequently suspend or discard background tabs without ever firing the legacy "unload" event; "pagehide" is reliably dispatched on all modern desktop and mobile browsers',
            bn: 'আধুনিক মোবাইল ব্রাউজারগুলো সেকেলে "unload" ইভেন্ট না চালিয়েই ব্যাকগ্রাউন্ডের ট্যাব বন্ধ বা মেমরি থেকে ফেলে দিতে পারে; কিন্তু "pagehide" সমস্ত আধুনিক ডেস্কটপ ও মোবাইলে নির্ভরযোগ্যভাবে ফায়ার হয়'
          },
          {
            en: 'Because pagehide increases internet bandwidth speeds by 400 percent',
            bn: 'কারণ pagehide ইন্টারনেটের গতি ৪০০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'pagehide permanently encrypts all user files on exit',
            bn: 'pagehide পেজ বন্ধের সময় সমস্ত ফাইল এনক্রিপ্ট করে'
          },
          {
            en: 'The unload event was banned by the International Postal Union in 2022',
            bn: 'কারণ ২০২২ সালে আন্তর্জাতিক ডাক সংস্থা unload নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern browsers optimize mobile memory. The "unload" event is deprecated and unreliable on mobile. Always use "pagehide".',
          bn: 'মোবাইলে "unload" ইভেন্ট নির্ভরযোগ্য নয়; আধুনিক স্ট্যান্ডার্ডে সর্বদা "pagehide" ব্যবহারের নির্দেশ দেওয়া হয়েছে।'
        },
        explanation: {
          en: 'The W3C and browser vendors recommend pagehide for session cleanup because unload is incompatible with the Back/Forward Cache (bfcache).',
          bn: 'pagehide ইভেন্ট ব্যাক/ফরোয়ার্ড ক্যাশের (bfcache) সাথে চমৎকারভাবে কাজ করে এবং মোবাইলেও শতভাগ নির্ভরযোগ্য।'
        }
      },
      {
        id: 'hrq-q4',
        kind: 'mcq',
        topic: 'intersection-observer-ad-viewability-auditing',
        question: {
          en: 'How do media companies use IntersectionObserver to mathematically verify "Ad Viewability" under international advertising standards (e.g. 50% visible for at least 1 second)?',
          bn: 'আন্তর্জাতিক বিজ্ঞাপন নীতিমালা (যেমন কমপক্ষে ১ সেকেন্ড ধরে ৫০% অংশ দৃশ্যমান থাকা) অনুসারে মিডিয়া কোম্পানিগুলো কীভাবে IntersectionObserver দিয়ে বিজ্ঞাপনের ভিউয়ারশিপ পরিমাপ করে?'
        },
        options: [
          {
            en: 'They set threshold: [0.5]; when intersectionRatio >= 0.5, a timer is started; if the element remains continuously visible for 1000ms, the impression is certified and logged',
            bn: 'তারা threshold: [০.৫] সেট করে; যখন ৫০% অংশ দৃশ্যমান হয় তখন একটি টাইমার চালু করা হয়; যদি উপাদানটি একটানা ১০০০ মিলিসেকেন্ড দৃশ্যমান থাকে, তবে ভিউয়ারশিপ নিশ্চিত করে লগ করা হয়'
          },
          {
            en: 'By turning on the user webcam to track their eye movements',
            bn: 'ওয়েবক্যাম চালু করে ব্যবহারকারীর চোখের নড়াচড়া দেখে'
          },
          {
            en: 'Ad viewability queries format the client device hard drive',
            bn: 'বিজ্ঞাপন কোয়েরি ক্লায়েন্টের ড্রাইভ ফরম্যাট করে ফেলে'
          },
          {
            en: 'Because ad viewability was invented by international shipping companies',
            bn: 'কারণ আন্তর্জাতিক শিপিং কোম্পানি এটি তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Threshold at 0.5 + duration timer = standardized viewability certification.',
          bn: '৫০% থ্রেশহোল্ড এবং নির্দিষ্ট সময় ধরে দৃশ্যমানতা পর্যবেক্ষণ আন্তর্জাতিক বিজ্ঞাপনের স্ট্যান্ডার্ড।'
        },
        explanation: {
          en: 'IntersectionObserver provides exact intersection ratios without layout thrashing, allowing verifiable, compliant impression telemetry.',
          bn: 'ইন্টারসেকশন অবজারভার কোনো লেআউট থ্র্যাশ ছাড়াই নিখুঁত অনুপাত পরিমাপ করে নির্ভরযোগ্য অ্যানালিটিক্স সরবরাহ করে।'
        }
      }
    ]
  }
};
