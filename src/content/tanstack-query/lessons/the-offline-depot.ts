import type { Lesson } from '../../../lib/types';

export const offlineDepotLesson: Lesson = {
  slug: 'the-offline-depot',
  tech: 'tanstack-query',
  title: {
    en: 'Offline & Persistence — persistQueryClient, Storage Persisters & Network Modes',
    bn: 'অফলাইন ও পারসিস্টেন্স — persistQueryClient, স্টোরেজ পারসিস্টিং ও নেটওয়ার্ক মোডস'
  },
  summary: {
    en: 'By default, TanStack Query stores all server state in browser RAM, meaning closing the tab or entering an area with no network connectivity wipes out the active cache. The persistence ecosystem—powered by persistQueryClient and PersistQueryClientProvider—enables web applications to serialize and write the query cache directly to long-term storage such as localStorage or IndexedDB. During application startup, the persister restores previously cached queries based on a defined maxAge policy, safely discarding expired entries. The buster parameter provides an automated migration mechanism to invalidate and purge outdated stored caches whenever frontend data schemas change. Furthermore, onlineManager and configurable networkMode options allow queries to gracefully pause while offline and automatically reconcile with the backend the instant connectivity returns.',
    bn: 'ডিফল্টভাবে TanStack Query সমস্ত সার্ভার স্টেট ব্রাউজারের র‍্যামে জমা রাখে, যার ফলে ট্যাব বন্ধ করলে বা ইন্টারনেট সংযোগ বিচ্ছিন্ন হলে সক্রিয় ক্যাশ হারিয়ে যায়। persistQueryClient এবং PersistQueryClientProvider দিয়ে তৈরি পারসিস্টেন্স ইকোসিস্টেম কোয়েরি ক্যাশকে সিরিয়ালাইজ করে লোকাল স্টোরেজ বা IndexedDB-তে সংরক্ষণ করতে দেয়। অ্যাপ্লিকেশন চালু হওয়ার সময় পারসিস্টার একটি নির্দিষ্ট maxAge নীতির ওপর ভিত্তি করে পূর্বে ক্যাশ করা ডেটা পুনরুদ্ধার করে এবং মেয়াদোত্তীর্ণ ডেটা বাতিল করে। buster প্যারামিটারের মাধ্যমে ফ্রন্টএন্ড স্কিমা পরিবর্তনের সাথে সাথে পুরোনো ক্যাশ স্বয়ংক্রিয়ভাবে মুছে নতুন করে শুরু করা যায়। তাছাড়া onlineManager এবং নেটওয়ার্ক মোডের মাধ্যমে অফলাইনে কোয়েরিগুলো শান্তভাবে পজ হয়ে থাকে এবং ইন্টারনেট আসামাত্র ব্যাকএন্ডের সাথে ডেটা সিঙ্ক করে নেয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Persistent Storage and Offline Resilience',
        bn: 'মূল ধারণা: স্থায়ী সংরক্ষণ ও অফলাইন স্থিতিশীলতা'
      }
    },
    {
      type: 'visual',
      id: 'cch'
    },
    {
      type: 'para',
      text: {
        en: 'When you build offline-capable web applications, relying solely on in-memory caching causes all saved data to vanish whenever a user closes the browser tab. Offline persistence bridges client-side caching with persistent device storage like browser local storage (localStorage) or IndexedDB. TanStack Query provides a robust persistence architecture through persistQueryClient, customizable storage persisters, and offline-aware network modes.',
        bn: 'যখন আপনি অফলাইন-সক্ষম ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন কেবল ইন-মেমোরি ক্যাশের ওপর নির্ভর করলে ব্যবহারকারী ব্রাউজার ট্যাব বন্ধ করলেই সমস্ত তথ্য মুছে যায়। অফলাইন পারসিস্টেন্স ক্লায়েন্ট-সাইড মেমোরি ক্যাশকে ডিভাইসের ব্রাউজার লোকাল স্টোরেজ (localStorage) বা IndexedDB-র সাথে যুক্ত করে ডেটা টিকিয়ে রাখে। TanStack Query তার persistQueryClient মেথড, স্টোরেজ পারসিস্টার এবং অফলাইন নেটওয়ার্ক মোডের মাধ্যমে একটি পূর্ণাঙ্গ অফলাইন আর্কিটেকচার সরবরাহ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'persistQueryClient',
          def: {
            en: 'Utility function that subscribes to the QueryCache, serializing and saving entries to long-term device storage',
            bn: 'ইউটিলিটি ফাংশন যা QueryCache পর্যবেক্ষণ করে এন্ট্রিগুলোকে সিরিয়ালাইজ করে ডিভাইসের দীর্ঘমেয়াদী স্টোরেজে সেভ করে'
          }
        },
        {
          term: 'maxAge',
          def: {
            en: 'Maximum duration in milliseconds that persisted storage entries are considered valid before being discarded during hydration',
            bn: 'মিলিসেকেন্ডে সর্বোচ্চ সময়সীমা যার বেশি পুরোনো সংরক্ষিত ডেটা হাইড্রেটের সময় বাতিল হিসেবে গণ্য হয়'
          }
        },
        {
          term: 'buster',
          def: {
            en: 'Cache version string used to invalidate and purge all existing persisted storage entries when client data shapes change',
            bn: 'ক্যাশ সংস্করণ স্ট্রিং যা ফ্রন্টএন্ড ডেটা মডেলে পরিবর্তন এলে পূর্বে সংরক্ষিত সমস্ত ক্যাশ মুছে ফেলতে ব্যবহৃত হয়'
          }
        },
        {
          term: 'networkMode',
          def: {
            en: 'Query execution policy governing behavior when no active internet connection is detected (online, always, offlineFirst)',
            bn: 'কোয়েরি চলার নীতি যা নির্ধারণ করে ইন্টারনেট সংযোগ না থাকলে কোয়েরি কীভাবে কাজ করবে (online, always, offlineFirst)'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'persister-mechanics',
      text: {
        en: 'Serialization and Storage with Persisters',
        bn: 'পারসিস্টার দিয়ে সিরিয়ালাইজেশন ও সংরক্ষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TanStack Query separates the storage engine from cache management using persister adapters. For synchronous browser storage like window.localStorage, developers use createSyncStoragePersister. For larger asynchronous storage engines like IndexedDB via idb-keyval, createAsyncStoragePersister is used. The persister throttles write operations using a configurable throttleTime (default 1000 milliseconds) to prevent blocking the main JavaScript thread during rapid cache mutations.',
        bn: 'TanStack Query পারসিস্টার অ্যাডাপ্টারের মাধ্যমে ক্যাশ ব্যবস্থাপনা থেকে মূল স্টোরেজ ইঞ্জিনকে আলাদা রাখে। ব্রাউজারের window.localStorage-এর মতো সিনক্রোনাস স্টোরেজের জন্য createSyncStoragePersister ব্যবহৃত হয়। আর IndexedDB-র মতো বড় অ্যাসিনক্রোনাস স্টোরেজের জন্য createAsyncStoragePersister ব্যবহার করা হয়। ঘনঘন ক্যাশ পরিবর্তনের সময় মূল জাভাস্ক্রিপ্ট থ্রেড যাতে আটকে না যায় সেজন্য পারসিস্টার একটি নির্দিষ্ট throttleTime (ডিফল্ট ১০০০ মিলিসেকেন্ড) বিরতিতে ডেটা সংরক্ষণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A vital architectural rule is that gcTime in QueryClient must outlast maxAge in the persister. If maxAge allows restoring 24 hours of data while gcTime is left at 5 minutes, queries unmounted for more than 5 minutes will be permanently garbage collected from memory, even though the persister would have otherwise kept them.',
        bn: 'একটি অত্যন্ত গুরুত্বপূর্ণ কাঠামোগত নিয়ম হলো QueryClient-এর gcTime অবশ্যই পারসিস্টারের maxAge-এর চেয়ে বড় বা সমান হতে হবে। যদি maxAge ২৪ ঘণ্টার ডেটা রাখার অনুমতি দেয় কিন্তু gcTime ৫ মিনিট রাখা হয়, তবে ৫ মিনিটের বেশি অব্যবহৃত থাকা কোয়েরিগুলো মেমোরি থেকে মুছে যাবে, যদিও পারসিস্টার সেগুলোকে ধরে রাখতে চেয়েছিল।'
      }
    },
    {
      type: 'heading',
      id: 'hydration-and-busters',
      text: {
        en: 'Hydration Lifecycle and Schema Invalidation with buster',
        bn: 'হাইড্রেশন লাইফসাইকেল ও buster দিয়ে স্কিমা ইনভ্যালিডেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the application boots, PersistQueryClientProvider reads stored data from disk and hydrates the QueryClient before rendering child components. Every rehydrated query retains its original dataUpdatedAt timestamp. Because the data was fetched in the past, it is treated as stale immediately: the user interface displays the cached content instantly without a loading spinner, while a background refetch is dispatched to check for server updates.',
        bn: 'অ্যাপ্লিকেশন শুরু হওয়ার সময় PersistQueryClientProvider স্টোরেজ থেকে ডেটা পড়ে চাইল্ড কম্পোনেন্ট রেন্ডার হওয়ার আগেই QueryClient-কে পূর্ণ করে। প্রতিটি পুনরুদ্ধার করা কোয়েরি তার আসল dataUpdatedAt টাইমস্ট্যাম্প ধরে রাখে। অতীতে ফেচ করা হওয়ায় এটি তাৎক্ষণিকভাবে বাসি হিসেবে গণ্য হয়: ফলে কোনো স্পিনার ছাড়াই আগের ডেটা সাথে সাথে স্ক্রিনে ভেসে ওঠে এবং নতুন ডেটা আনতে ব্যাকগ্রাউন্ডে রিফেচ শুরু হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When deploying a new version of an application that introduces breaking schema changes, reading old cached JSON from localStorage can cause runtime errors. The buster property solves this problem cleanly. By incrementing buster from v1 to v2, TanStack Query detects the mismatch during hydration, purges the incompatible persisted records from disk, and fetches clean data from the server.',
        bn: 'অ্যাপ্লিকেশনে ডেটা মডেলে বড় ধরনের পরিবর্তন এনে নতুন ভার্সন ডিপ্লয় করার সময় লোকাল স্টোরেজে থাকা পুরোনো জেএসন পড়লে রানটাইম ক্র্যাশ হতে পারে। buster প্রপার্টি এই সমস্যার মার্জিত সমাধান দেয়। buster-এর মান v১ থেকে বাড়িয়ে v২ করে দিলে TanStack Query হাইড্রেশনের সময় অমিল দেখতে পেয়ে স্টোরেজ থেকে পুরোনো সমস্ত রেকর্ড মুছে ফেলে এবং সার্ভার থেকে ফ্রেশ ডেটা নিয়ে আসে।'
      }
    },
    {
      type: 'heading',
      id: 'offline-network-modes',
      text: {
        en: 'Offline Resilience and networkMode Policies',
        bn: 'অফলাইন স্থিতিশীলতা ও networkMode নীতিসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TanStack Query continuously tracks device connectivity via onlineManager. When the browser loses internet connection, onlineManager transitions active queries to fetchStatus: "paused" instead of failing and triggering error retries. Once the browser fires the online event, all paused queries resume execution simultaneously.',
        bn: 'TanStack Query তার onlineManager-এর মাধ্যমে ডিভাইসের নেটওয়ার্ক সংযোগ সর্বদা পর্যবেক্ষণ করে। যখন ব্রাউজার ইন্টারনেট সংযোগ হারায়, তখন onlineManager ব্যর্থতা বা এরর রিট্রাই না ঘটিয়ে সক্রিয় কোয়েরিগুলোকে fetchStatus: "paused" স্টেটে নিয়ে যায়। পুনরায় ইন্টারনেট সংযোগ আসামাত্র সমস্ত পজ হওয়া কোয়েরি স্বয়ংক্রিয়ভাবে একযোগে চালু হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Developers can fine-tune query behavior during offline periods using the networkMode setting. In "online" mode (the default), queries will not execute queryFn unless an internet connection exists. In "always" mode, queries run unconditionally regardless of network state, which is essential for service worker caches or localhost testing. In "offlineFirst" mode, the query executes once and pauses retries if the initial request fails.',
        bn: 'অফলাইন পরিস্থিতিতে কোয়েরির আচরণ কেমন হবে তা ডেভেলপাররা networkMode সেটিং দিয়ে নির্ধারণ করতে পারেন। ডিফল্ট "online" মোডে ইন্টারনেট সংযোগ না থাকলে কোয়েরি কখনোই queryFn চালায় না। "always" মোডে নেটওয়ার্ক অবস্থা যাই হোক না কেন কোয়েরি পরিচালিত হয়, যা সার্ভিস ওয়ার্কার বা লোকালহোস্ট টেস্টে প্রয়োজন। আর "offlineFirst" মোডে প্রথমবার রিকোয়েস্ট পাঠিয়ে ব্যর্থ হলে পরবর্তী রিট্রাইগুলোকে পজ করে রাখা হয়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Storage Persistence Strategies',
        bn: 'কাঠামোগত তুলনা: স্টোরেজ পারসিস্টেন্স কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Sync Storage Persister', bn: 'Sync Storage Persister' },
        { en: 'Async Storage Persister', bn: 'Async Storage Persister' },
        { en: 'In-Memory Cache Only', bn: 'কেবল ইন-মেমোরি ক্যাশ' }
      ],
      rows: [
        [
          { en: 'Underlying Driver', bn: 'স্টোরেজ প্রযুক্তি' },
          { en: 'window.localStorage or sessionStorage', bn: 'window.localStorage অথবা sessionStorage' },
          { en: 'IndexedDB via idb-keyval or localforage', bn: 'idb-keyval বা localforage দিয়ে IndexedDB' },
          { en: 'JavaScript Heap Memory (RAM)', bn: 'জাভাস্ক্রিপ্ট হিপ মেমোরি (র‍্যাম)' }
        ],
        [
          { en: 'Capacity Limit', bn: 'ধারণক্ষমতা' },
          { en: 'Approximately 5MB string capacity', bn: 'প্রায় ৫ মেগাবাইট স্ট্রিং ধারণক্ষমতা' },
          { en: 'Hundreds of megabytes / gigabytes', bn: 'শত শত মেগাবাইট অথবা গিগাবাইট' },
          { en: 'Bounded by device available RAM', bn: 'ডিভাইসের উপলব্ধ র‍্যাম দ্বারা সীমিত' }
        ],
        [
          { en: 'Thread Blocking Risk', bn: 'থ্রেড ব্লকিং ঝুঁকি' },
          { en: 'Synchronous I/O can block UI if payloads exceed 2MB', bn: '২ মেগাবাইটের বেশি ডেটাতে সিনক্রোনাস I/O ইউআই সাময়িক আটকাতে পারে' },
          { en: 'Zero UI blocking; fully asynchronous worker I/O', bn: 'কোনো ইউআই ব্লকিং নেই; সম্পূর্ণ অ্যাসিনক্রোনাস I/O' },
          { en: 'None; fast direct pointer lookups in memory', bn: 'নেই; সরাসরি মেমোরিতে দ্রুত পয়েন্টার অ্যাক্সেস' }
        ],
        [
          { en: 'Persistence Across Sessions', bn: 'সেশন পরবর্তী স্থায়িত্ব' },
          { en: 'Persists indefinitely until cleared or maxAge expires', bn: 'মুছে না ফেলা পর্যন্ত বা maxAge শেষ না হওয়া পর্যন্ত টিকে থাকে' },
          { en: 'Persists indefinitely across browser restarts', bn: 'ব্রাউজার রিস্টার্টের পরও স্থায়ীভাবে বিদ্যমান থাকে' },
          { en: 'Completely destroyed on tab close or page reload', bn: 'ট্যাব বন্ধ বা রিলোডের সাথে সাথে ধ্বংস হয়ে যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Persistence, Buster & Offline Modes',
        bn: 'বাস্তব কোড সিমুলেশন: পারসিস্টেন্স, বাস্টার ও অফলাইন মোডস'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query persistQueryClient, dehydrate/hydrate & maxAge

class StorageMock {
  private store = new Map<string, string>();
  getItem(k: string) { return this.store.get(k) ?? null; }
  setItem(k: string, v: string) { this.store.set(k, v); }
  removeItem(k: string) { this.store.delete(k); }
}

function dehydrateCache(queries: Array<{ queryKey: unknown[]; data: any; dataUpdatedAt: number }>) {
  return {
    timestamp: Date.now(),
    buster: 'v2.1',
    queries: queries.map(q => ({
      queryKey: q.queryKey,
      data: q.data,
      dataUpdatedAt: q.dataUpdatedAt
    }))
  };
}

function hydrateCache(storage: StorageMock, key: string, maxAge: number, currentBuster: string) {
  const raw = storage.getItem(key);
  if (!raw) return { success: false, reason: 'empty_storage', rehydratedCount: 0 };

  const parsed = JSON.parse(raw);
  if (parsed.buster !== currentBuster) {
    storage.removeItem(key);
    return { success: false, reason: 'buster_mismatch', rehydratedCount: 0 };
  }

  const age = Date.now() - parsed.timestamp;
  if (age > maxAge) {
    storage.removeItem(key);
    return { success: false, reason: 'max_age_expired', rehydratedCount: 0 };
  }

  return {
    success: true,
    rehydratedCount: parsed.queries.length,
    queries: parsed.queries
  };
}

const storage = new StorageMock();
const storageKey = 'TQ_OFFLINE_CACHE';
const maxAge = 1000 * 60 * 60 * 24; // 24 hours in milliseconds

// 1. Initial queries in memory
const activeQueries = [
  { queryKey: ['user', 'profile'], data: { name: 'Sarah', role: 'engineer' }, dataUpdatedAt: Date.now() },
  { queryKey: ['settings', 'theme'], data: { darkMode: true, fontSize: 16 }, dataUpdatedAt: Date.now() }
];

// 2. Persist to storage
const serialized = dehydrateCache(activeQueries);
storage.setItem(storageKey, JSON.stringify(serialized));

// 3. Hydrate with matching buster 'v2.1'
const goodHydration = hydrateCache(storage, storageKey, maxAge, 'v2.1');

// 4. Simulate deployment with buster bump 'v2.2'
storage.setItem(storageKey, JSON.stringify(serialized));
const bumpedHydration = hydrateCache(storage, storageKey, maxAge, 'v2.2');

// 5. Offline network mode simulation
let isOnline = false;
function executeQueryWithNetworkMode(networkMode: string) {
  if (!isOnline && networkMode === 'online') {
    return 'paused';
  }
  return 'fetching';
}

console.log('Hydration with matching buster success:', goodHydration.success);
// -> Hydration with matching buster success: true
console.log('Rehydrated queries count:', goodHydration.rehydratedCount);
// -> Rehydrated queries count: 2
console.log('Hydration with bumped buster reason:', bumpedHydration.reason);
// -> Hydration with bumped buster reason: buster_mismatch
console.log('Storage wiped after buster mismatch:', storage.getItem(storageKey) === null);
// -> Storage wiped after buster mismatch: true
console.log('Query fetch status while offline under online mode:', executeQueryWithNetworkMode('online'));
// -> Query fetch status while offline under online mode: paused`,
      caption: {
        en: 'Simulation: hydrator successfully loads 2 queries with fontSize 16 and 24 hours maxAge; version bump v2.2 wipes mismatched v2.1 storage; offline query pauses',
        bn: 'সিমুলেশন: হাইড্রেটর fontSize ১৬ ও ২৪ ঘণ্টা maxAge সহ সফলভাবে ২ টি কোয়েরি লোড করে; v২.২ সংস্করণ v২.১ স্টোরেজ মুছে দেয়; অফলাইনে কোয়েরি পজ হয়'
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
        en: 'Rule 1: Always ensure gcTime is equal to or greater than maxAge. If gcTime is lower than maxAge, queries will be purged from memory during component unmounts despite being valid in persistent storage.',
        bn: 'নিয়ম ১: সর্বদা নিশ্চিত করুন gcTime যেন maxAge-এর সমান বা তার চেয়ে বেশি হয়। gcTime কম হলে কম্পোনেন্ট আনমাউন্ট হওয়ার সাথে সাথে মেমোরি থেকে ডেটা মুছে যাবে, যদিও স্টোরেজে ডেটা বৈধ ছিল।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Bump the buster string on every deployment that alters API schema models. Changing field types or structures without incrementing buster causes clients to hydrate incompatible legacy JSON, crashing the application.',
        bn: 'নিয়ম ২: এপিআই স্কিমা মডেলে পরিবর্তন এলে প্রতি ডিপ্লয়মেন্টে buster স্ট্রিং আপডেট করুন। buster না বাড়িয়ে ডেটার আকার বদলালে ব্যবহারকারীদের ব্রাউজারে পুরোনো অসঙ্গতিপূর্ণ ডেটা লোড হয়ে অ্যাপ ক্র্যাশ করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use dehydrateOptions to prevent persisting sensitive or transient queries. Avoid writing authentication tokens, credit card details, or ephemeral search input queries to unencrypted localStorage.',
        bn: 'নিয়ম ৩: সংবেদনশীল বা সাময়িক কোয়েরি সংরক্ষণ এড়াতে dehydrateOptions ব্যবহার করুন। পাসওয়ার্ড, অথেনটিকেশন টোকেন বা ক্রেডিট কার্ডের তথ্য কখনোই সাধারণ লোকাল স্টোরেজে সেভ করা উচিত নয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Prefer IndexedDB via createAsyncStoragePersister for enterprise applications. Synchronous localStorage has a 5MB storage ceiling and can block the browser UI thread during large serialization passes.',
        bn: 'নিয়ম ৪: বড় এন্টারপ্রাইজ অ্যাপ্লিকেশনে createAsyncStoragePersister দিয়ে IndexedDB ব্যবহার করুন। সিনক্রোনাস localStorage-এ মাত্র ৫ মেগাবাইট জায়গা থাকে এবং বড় ডেটা সেভ করার সময় ব্রাউজারের ইউআই আটকে যেতে পারে।'
      }
    }
  ],
  exercises: [
    {
      id: 'tq-off-ex1',
      kind: 'mcq',
      topic: 'gcTime and maxAge coordination in persistence',
      question: {
        en: 'What occurs if the QueryClient gcTime is configured to 5 minutes while the persister maxAge is set to 24 hours?',
        bn: 'QueryClient-এর gcTime যদি ৫ মিনিট এবং পারসিস্টারের maxAge যদি ২৪ ঘণ্টা সেট করা হয়, তবে কী ঘটবে?'
      },
      options: [
        {
          en: 'Inactive queries will be deleted from memory after 5 minutes of being unobserved, preventing them from benefiting from the full 24-hour persistent storage window',
          bn: 'অব্যবহৃত কোয়েরিগুলো ৫ মিনিট পর মেমোরি থেকে মুছে যাবে, ফলে স্টোরেজের পুরো ২৪ ঘণ্টার সুবিধা পাওয়া যাবে না'
        },
        {
          en: 'The application crashes with a persistent storage allocation error',
          bn: 'অ্যাপ্লিকেশনটি পারসিস্টেন্ট স্টোরেজ বরাদ্দকরণ ত্রুটি দেখিয়ে ক্র্যাশ করবে'
        },
        {
          en: 'TanStack Query forces the browser to remain awake overnight',
          bn: 'TanStack Query ব্রাউজারকে সারারাত চালু রাখতে বাধ্য করবে'
        },
        {
          en: 'All persistent queries are automatically converted to IndexedDB entries',
          bn: 'সমস্ত পারসিস্টেন্ট কোয়েরি স্বয়ংক্রিয়ভাবে IndexedDB এন্ট্রিতে রূপান্তরিত হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember that the in-memory garbage collector operates independently from persistent disk storage.',
        bn: 'মনে রাখবেন মেমোরি পরিষ্কারকারী গারবেজ কালেক্টর ডিস্ক স্টোরেজ থেকে সম্পূর্ণ স্বাধীনভাবে কাজ করে।'
      },
      explanation: {
        en: 'If gcTime is shorter than maxAge, TanStack Query will clean up inactive queries from RAM after 5 minutes, breaking the expected long-term caching behavior unless gcTime is increased.',
        bn: 'gcTime যদি maxAge-এর চেয়ে ছোট হয়, তবে ৫ মিনিট পর মেমোরি খালি হয়ে যাবে; ফলে দীর্ঘস্থায়ী সুবিধার জন্য gcTime বাড়ানো অপরিহার্য।'
      }
    },
    {
      id: 'tq-off-ex2',
      kind: 'mcq',
      topic: 'Cache invalidation via buster string',
      question: {
        en: 'What happens when an application boots up with a buster string that differs from the buster stored in localStorage?',
        bn: 'লোকাল স্টোরেজে সংরক্ষিত buster-এর সাথে অ্যাপ্লিকেশন বুটের সময় ঘোষিত buster ভিন্ন হলে কী ঘটে?'
      },
      options: [
        {
          en: 'TanStack Query discards and wipes the incompatible persisted storage records, allowing the app to fetch fresh clean server state',
          bn: 'TanStack Query অসঙ্গতিপূর্ণ পুরোনো রেকর্ড মুছে ফেলে দেয়, ফলে অ্যাপ সার্ভার থেকে ফ্রেশ ডেটা ফেচ করে নেয়'
        },
        {
          en: 'The user is immediately logged out and their session cookies are revoked',
          bn: 'ব্যবহারকারী সাথে সাথে লগআউট হয়ে যান এবং তার সেশন কুকিজ বাতিল হয়'
        },
        {
          en: 'TanStack Query attempts to merge the two schemas using heuristic artificial intelligence',
          bn: 'TanStack Query কৃত্রিম বুদ্ধিমত্তা দিয়ে দুটি স্কিমা মেলানোর চেষ্টা করে'
        },
        {
          en: 'The browser displays a fatal JavaScript runtime syntax warning',
          bn: 'ব্রাউজার একটি মারাত্মক জাভাস্ক্রিপ্ট রানটাইম সতর্কবার্তা প্রদর্শন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The buster acts as a cache version breaker to protect against breaking schema changes.',
        bn: 'buster একটি ক্যাশ ভার্সন ব্রেকার হিসেবে কাজ করে যা পরিবর্তিত স্কিমার ত্রুটি থেকে অ্যাপকে রক্ষা করে।'
      },
      explanation: {
        en: 'A buster mismatch signals that client data models have changed. TanStack Query automatically purges the outdated cache from disk to prevent deserialization errors.',
        bn: 'buster অমিল নির্দেশ করে ডেটা মডেল পরিবর্তিত হয়েছে। TanStack Query পার্সিং এরর ঠেকাতে ডিস্কের পুরোনো ক্যাশ পুরোপুরি মুছে ফেলে।'
      }
    },
    {
      id: 'tq-off-ex3',
      kind: 'mcq',
      topic: 'Network mode behavior when offline',
      question: {
        en: 'What is the default behavior of a query with networkMode: "online" when the client loses internet connectivity?',
        bn: 'ইন্টারনেট সংযোগ বিচ্ছিন্ন হলে networkMode: "online" থাকা কোনো কোয়েরির ডিফল্ট আচরণ কী হয়?'
      },
      options: [
        {
          en: 'The query pauses and transitions to fetchStatus: "paused", resuming automatically when internet connectivity is restored',
          bn: 'কোয়েরিটি পজ হয়ে fetchStatus: "paused" অবস্থায় চলে যায় এবং পুনরায় ইন্টারনেট আসামাত্র নিজে থেকেই সচল হয়'
        },
        {
          en: 'The query immediately throws a permanent fatal HTTP 500 network exception',
          bn: 'কোয়েরি সাথে সাথে একটি মারাত্মক এইচটিটিপি ৫০০ নেটওয়ার্ক এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'The query triggers an infinite loop of 100 retry requests per second',
          bn: 'কোয়েরিটি প্রতি সেকেন্ডে ১০০ টি রিট্রাই রিকোয়েস্টের ইনফিনিট লুপ শুরু করে'
        },
        {
          en: 'The query forces the browser to shut down immediately',
          bn: 'কোয়েরিটি ব্রাউজারকে সাথে সাথে বন্ধ হতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'TanStack Query pauses network requests while offline instead of spamming retries.',
        bn: 'অফলাইনে থাকাকালে বারবার রিট্রাই না পাঠিয়ে TanStack Query রিকোয়েস্ট পজ করে রাখে।'
      },
      explanation: {
        en: 'Under the default online networkMode, queries do not fail when disconnected. They pause gracefully until onlineManager detects that network connectivity has returned.',
        bn: 'ডিফল্ট online মোডে ইন্টারনেট না থাকলে কোয়েরি ব্যর্থ হয় না, বরং শান্তভাবে পজ থাকে যতক্ষণ না onlineManager পুনরায় সংযোগ শনাক্ত করে।'
      }
    },
    {
      id: 'tq-off-ex4',
      kind: 'mcq',
      topic: 'Hydration staleness lifecycle',
      question: {
        en: 'Why do queries rehydrated from persistent storage immediately display cached data while initiating a background refetch?',
        bn: 'স্থায়ী স্টোরেজ থেকে রিস্টোর করা কোয়েরিগুলো কেন সাথে সাথে ক্যাশ ডেটা দেখিয়ে ব্যাকগ্রাউন্ডে রিফেচ শুরু করে?'
      },
      options: [
        {
          en: 'Because rehydrated entries retain their historical dataUpdatedAt timestamp; since the timestamp is in the past, the data is born stale, providing instant UI while fetching updates',
          bn: 'কারণ পুনরুদ্ধার করা এন্ট্রিগুলো তাদের অতীতের dataUpdatedAt টাইমস্ট্যাম্প ধরে রাখে; ডেটা বাসি হওয়ায় তাৎক্ষণিক ইউআই দেখানোর পাশাপাশি ব্যাকগ্রাউন্ডে নতুন আপডেট আনে'
        },
        {
          en: 'Because persistent storage can only store encrypted cryptographic hashes, not raw data',
          bn: 'কারণ পারসিস্টেন্ট স্টোরেজে আসল ডেটার বদলে কেবল এনক্রিপ্ট করা ক্রিপ্টোগ্রাফিক হ্যাশ থাকে'
        },
        {
          en: 'Because TanStack Query deletes the cache immediately upon reading the first byte',
          bn: 'কারণ TanStack Query প্রথম বাইট পড়ার সাথে সাথেই ক্যাশ মুছে ফেলে'
        },
        {
          en: 'Because modern web browsers do not permit reading localStorage more than once',
          bn: 'কারণ আধুনিক ব্রাউজারগুলো লোকাল স্টোরেজ একবারের বেশি পড়তে দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stale data provides immediate screen rendering while background fetches guarantee freshness.',
        bn: 'বাসি ডেটা তাৎক্ষণিক স্ক্রিনে প্রদর্শন নিশ্চিত করে আর ব্যাকগ্রাউন্ড ফেচ সতেজতা নিশ্চিত করে।'
      },
      explanation: {
        en: 'Rehydration restores the true timestamp of the data. Because staleTime has usually elapsed, the data is marked as stale, allowing instantaneous rendering while an asynchronous update runs.',
        bn: 'হাইড্রেশন ডেটার আসল সময় ফিরিয়ে আনে। staleTime উত্তীর্ণ হওয়ায় ডেটাটি বাসি গণ্য হয়, ফলে ব্যবহারকারী সাথে সাথে স্ক্রিন দেখতে পান এবং ব্যাকগ্রাউন্ডে নতুন ডেটা চলে আসে।'
      }
    }
  ],
  quiz: {
    id: 'the-offline-depot-quiz',
    title: {
      en: 'Offline Resilience & Persistence Mastery Quiz',
      bn: 'অফলাইন স্থিতিশীলতা ও পারসিস্টেন্স মাস্টারি কুইজ'
    },
    questions: [
      {
        id: 'q-storage-throttle-time',
        kind: 'mcq',
        topic: 'throttleTime in storage persisters',
        question: {
          en: 'Why do storage persisters throttle serialization operations using throttleTime rather than writing on every cache change?',
          bn: 'স্টোরেজ পারসিস্টাররা প্রতিটি ক্যাশ পরিবর্তনে সাথে সাথে না লিখে কেন throttleTime ব্যবহার করে সংরক্ষণ কার্যক্রম সীমিত রাখে?'
        },
        options: [
          {
            en: 'Serializing large JSON caches to disk is synchronous and CPU-intensive; throttling prevents UI frame drops and thread blocking during frequent state updates',
            bn: 'বড় জেএসন ক্যাশ ডিস্কে সিরিয়ালাইজ করা সিপিইউ-নিবিড় কাজ; থ্রটলিং ঘনঘন পরিবর্তনের সময় ব্রাউজারের ইউআই আটকে যাওয়া বা ফ্রেম ড্রপ প্রতিরোধ করে'
          },
          {
            en: 'Because the HTML5 specification permits only one write to localStorage per calendar month',
            bn: 'কারণ এইচটিএমএল৫ স্পেসিফিকেশন অনুযায়ী মাসে কেবল একবার লোকাল স্টোরেজে লেখা যায়'
          },
          {
            en: 'Because disk storage will physically overheat if written to more than twice per second',
            bn: 'কারণ সেকেন্ডে দুবারের বেশি ডিস্কে লিখলে হার্ডডিস্ক অতিরিক্ত গরম হয়ে যায়'
          },
          {
            en: 'Because throttling automatically encrypts the data using public key cryptography',
            bn: 'কারণ থ্রটলিং স্বয়ংক্রিয়ভাবে পাবলিক কি ক্রিপ্টোগ্রাফি দিয়ে ডেটা এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider main thread performance and JSON serialization overhead.',
          bn: 'মেইন থ্রেড পারফরম্যান্স এবং জেএসন সিরিয়ালাইজেশনের ওভারহেডের কথা ভাবুন।'
        },
        explanation: {
          en: 'Frequent writes during batch fetches or mutations would repeatedly serialize the entire cache, blocking the main thread. Throttling aggregates writes into periodic batched flushes.',
          bn: 'ঘনঘন রিকোয়েস্টের সময় প্রতিবার পুরো ক্যাশ সিরিয়ালাইজ করলে মেইন থ্রেড ফ্রিজ হতে পারে। থ্রটলিং একাধিক পরিবর্তনকে একত্রিত করে নির্দিষ্ট সময় পরপর সংরক্ষণ করে।'
        }
      },
      {
        id: 'q-dehydrate-options-filtering',
        kind: 'mcq',
        topic: 'Filtering persisted queries with shouldDehydrateQuery',
        question: {
          en: 'How can developers prevent failed or error-state queries from being written to persistent storage?',
          bn: 'ডেভেলপাররা কীভাবে ব্যর্থ বা এরর-স্টেটে থাকা কোয়েরিগুলো পারসিস্টেন্ট স্টোরেজে লেখা থেকে প্রতিরোধ করতে পারেন?'
        },
        options: [
          {
            en: 'By providing shouldDehydrateQuery inside dehydrateOptions, returning true only for queries where query.state.status === "success"',
            bn: 'dehydrateOptions-এ shouldDehydrateQuery দিয়ে কেবল query.state.status === "success" থাকা কোয়েরির জন্য true রিটার্ন করে'
          },
          {
            en: 'By completely disabling network error logging in the browser settings',
            bn: 'ব্রাউজার সেটিংসে নেটওয়ার্ক এরর লগিং পুরোপুরি বন্ধ করে দিয়ে'
          },
          {
            en: 'By converting all failed HTTP responses into string literals',
            bn: 'সমস্ত ব্যর্থ এইচটিটিপি রেসপন্সকে স্ট্রিং লিটারেলে রূপান্তর করে'
          },
          {
            en: 'By installing a browser extension that blocks error events',
            bn: 'এরর ইভেন্ট ব্লক করে এমন একটি ব্রাউজার এক্সটেনশন ইনস্টল করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'dehydrateOptions provides a predicate function to filter which queries get serialized.',
          bn: 'dehydrateOptions একটি ফিল্টারিং ফাংশন দেয় যা ঠিক করে কোন কোয়েরিগুলো সেভ হবে।'
        },
        explanation: {
          en: 'Using shouldDehydrateQuery allows granular filtering so that only successfully resolved queries are saved to disk, keeping the persistent cache clean of transient error states.',
          bn: 'shouldDehydrateQuery ব্যবহার করে সূক্ষ্মভাবে ফিল্টার করা যায়, যার ফলে কেবল সফল কোয়েরিগুলো স্টোরেজে জমা হয় এবং সাময়িক এরর স্টেট ডিস্কে সেভ হয় না।'
        }
      },
      {
        id: 'q-offline-first-use-case',
        kind: 'mcq',
        topic: 'networkMode: "offlineFirst" operational model',
        question: {
          en: 'When is networkMode: "offlineFirst" particularly beneficial compared to default "online" mode?',
          bn: 'ডিফল্ট "online" মোডের তুলনায় networkMode: "offlineFirst" কখন বিশেষভাবে উপযোগী?'
        },
        options: [
          {
            en: 'When queries can be answered by local device caches, service workers, or offline SQLite databases before attempting an optional network sync',
            bn: 'যখন কোনো কোয়েরি স্থানীয় ডিভাইস ক্যাশ, সার্ভিস ওয়ার্কার বা অফলাইন ডেটাবেজ থেকে উত্তর দিতে পারে এবং নেটওয়ার্ক সিঙ্ককে ঐচ্ছিক রাখে'
          },
          {
            en: 'When the computer has no physical network card or Wi-Fi chip installed',
            bn: 'যখন কম্পিউটারে কোনো ফিজিক্যাল নেটওয়ার্ক কার্ড বা ওয়াই-ফাই চিপ ইনস্টল করা থাকে না'
          },
          {
            en: 'When the backend API server is written exclusively in Python 2.7',
            bn: 'যখন ব্যাকএন্ড এপিআই সার্ভারটি কেবল পাইথন ২.৭-এ লেখা থাকে'
          },
          {
            en: 'When all HTTP requests must bypass TLS encryption',
            bn: 'যখন সমস্ত এইচটিটিপি রিকোয়েস্টকে টিএলএস এনক্রিপশন বাইপাস করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about progressive web apps with service workers or local offline databases.',
          bn: 'সার্ভিস ওয়ার্কার বা স্থানীয় অফলাইন ডেটাবেজ সম্বলিত পিডব্লিউএ অ্যাপের কথা ভাবুন।'
        },
        explanation: {
          en: 'In offline-first architectures, the local layer (like a service worker cache) can fulfill the request even without active internet. "offlineFirst" allows queryFn to run once to attempt that local retrieval.',
          bn: 'অফলাইন-ফার্স্ট আর্কিটেকচারে সার্ভিস ওয়ার্কারের মতো স্থানীয় স্তর ইন্টারনেট ছাড়াই ডেটা সরবরাহ করতে পারে। "offlineFirst" মোড সেই স্থানীয় ডেটা আনার জন্য queryFn একবার চলার সুযোগ দেয়।'
        }
      },
      {
        id: 'q-online-manager-custom-listeners',
        kind: 'mcq',
        topic: 'Customizing onlineManager in non-browser environments',
        question: {
          en: 'How can onlineManager be customized for mobile platforms like React Native where window.addEventListener is unavailable?',
          bn: 'React Native-এর মতো মোবাইল প্ল্যাটফর্মে যেখানে window.addEventListener নেই, সেখানে onlineManager কীভাবে কাস্টমাইজ করা যায়?'
        },
        options: [
          {
            en: 'By invoking onlineManager.setEventListener with a subscription to native network libraries like @react-native-community/netinfo',
            bn: 'onlineManager.setEventListener-এ @react-native-community/netinfo-এর মতো নেটিভ নেটওয়ার্ক লাইব্রেরির সাবস্ক্রিপশন সংযুক্ত করে'
          },
          {
            en: 'By writing a custom C++ native bridge inside the Android operating system kernel',
            bn: 'অ্যান্ড্রয়েড অপারেটিং সিস্টেম কার্নেলের ভেতরে একটি কাস্টম সি++ নেটিভ ব্রিজ লিখে'
          },
          {
            en: 'By disabling all query caching across the entire mobile application',
            bn: 'পুরো মোবাইল অ্যাপ্লিকেশনে সমস্ত কোয়েরি ক্যাশিং পুরোপুরি নিষ্ক্রিয় করে'
          },
          {
            en: 'By running an automated shell script every minute via cron job',
            bn: 'ক্রন জবের মাধ্যমে প্রতি মিনিটে একটি স্বয়ংক্রিয় শেল স্ক্রিপ্ট চালিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'onlineManager exposes setEventListener to hook into platform-specific network events.',
          bn: 'প্ল্যাটফর্মের নির্দিষ্ট নেটওয়ার্ক ইভেন্ট যুক্ত করতে onlineManager-এ setEventListener মেথড রয়েছে।'
        },
        explanation: {
          en: 'TanStack Query is platform agnostic. Using onlineManager.setEventListener allows React Native developers to hook NetInfo directly into the connectivity lifecycle.',
          bn: 'TanStack Query যেকোনো প্ল্যাটফর্মে চলতে পারে। onlineManager.setEventListener ব্যবহার করে রিঅ্যাক্ট নেটিভ ডেভেলপাররা NetInfo সরাসরি কানেক্টিভিটি লাইফসাইকেলের সাথে যুক্ত করতে পারেন।'
        }
      }
    ]
  }
};
