import type { Lesson } from '../../../lib/types';

export const dawnDockLesson: Lesson = {
  slug: 'the-dawn-dock',
  tech: 'tanstack-query',
  title: {
    en: 'Prefetching & Route Loaders — prefetchQuery, ensureQueryData & initialData',
    bn: 'প্রিফেচিং ও রুট লোডার্স — prefetchQuery, ensureQueryData ও initialData'
  },
  summary: {
    en: 'Anticipating user intent before page navigation turns sluggish web applications into instantaneous experiences. When a user hovers over a navigation link or opens a dropdown menu, waiting until the target component mounts introduces avoidable network round trips. TanStack Query provides three specialized primitives to eliminate this latency. The prefetchQuery method runs an asynchronous background fetch without subscribing to the component lifecycle, warming the cache before user navigation. For modern route loaders in React Router or TanStack Router, ensureQueryData guarantees that fresh data is either read directly from cache or fetched and awaited before rendering the route. When navigating from master lists to detail pages, initialData allows developers to seed the detail cache using records already present in the list query. By providing initialDataUpdatedAt, TanStack Query accurately calculates cache freshness based on when the parent list was fetched, preventing redundant refetches and eliminating blank loading spinners.',
    bn: 'ব্যবহারকারী পেজ পরিবর্তনের আগেই তার অভিপ্রায় অনুমান করতে পারলে ধীরগতির ওয়েব অ্যাপ্লিকেশনও তাৎক্ষণিক গতিশীল রূপ নেয়। যখন কোনো ইউজার লিংকের ওপর মাউস হোভার করেন বা ড্রপডাউন মেনু খোলেন, তখন সংশ্লিষ্ট কম্পোনেন্ট মাউন্ট হওয়া পর্যন্ত অপেক্ষা করলে অযথা নেটওয়ার্ক বিলম্ব ঘটে। TanStack Query এই বিলম্ব দূর করতে তিনটি বিশেষ ব্যবস্থা প্রদান করে। prefetchQuery মেথড ব্যাকগ্রাউন্ডে অ্যাসিনক্রোনাস ফেচ চালিয়ে ক্যাশকে প্রস্তুত রাখে কোনো কম্পোনেন্ট সাবস্ক্রিপশন ছাড়াই। React Router বা TanStack Router-এর আধুনিক রুট লোডারের জন্য ensureQueryData নিশ্চিত করে যে ক্যাশে টাটকা ডেটা থাকলে তা সাথে সাথে ফেরত দেওয়া হবে, নয়তো নেটওয়ার্ক থেকে ফেচ করে অপেক্ষা করা হবে। আবার তালিকা থেকে বিস্তারিত পেজে যাওয়ার সময় initialData দিয়ে আগের তালিকা থেকে ডেটা নিয়ে ক্যাশে বসিয়ে দেওয়া যায়। এর সাথে initialDataUpdatedAt উল্লেখ করলে মূল তালিকাটি ঠিক কখন ফেচ করা হয়েছিল সেই অনুযায়ী সতেজতার সময় হিসাব করা হয়, ফলে অনাকাঙ্ক্ষিত রিফেচ ও ফাঁকা স্পিনার পুরোপুরি বন্ধ হয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Anticipatory Data Fetching',
        bn: 'মূল ধারণা: প্রত্যাশিত ডেটা ফেচিং'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you design high-performance web applications, waiting for user clicks before fetching data creates unnecessary loading delays. Users frequently signal their intent seconds before clicking, through mouse hovers, tab focuses, or router navigation transitions. TanStack Query provides three specialized application programming interfaces (APIs) to anticipate user actions: prefetchQuery for background warming, ensureQueryData for route loaders, and initialData for instantaneous cache seeding.',
        bn: 'যখন আপনি হাই-পারফরম্যান্স ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন ব্যবহারকারীর ক্লিকের জন্য অপেক্ষা করে ডেটা ফেচ করলে অযথা লোডিং বিলম্ব তৈরি হয়। মাউস হোভার, ট্যাব ফোকাস বা রাউটার নেভিগেশনের মাধ্যমে ব্যবহারকারী প্রায়শই ক্লিকের কয়েক সেকেন্ড আগেই নিজের উদ্দেশ্য প্রকাশ করেন। TanStack Query ব্যবহারকারীর এই প্রত্যাশিত চাহিদাকে কাজে লাগাতে তিনটি বিশেষ অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস (এপিআই) দেয়: ব্যাকগ্রাউন্ড প্রি-ওয়ার্মিংয়ের জন্য prefetchQuery, রুট লোডারের জন্য ensureQueryData এবং তাৎক্ষণিক ক্যাশ সিডিংয়ের জন্য initialData।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'prefetchQuery',
          def: {
            en: 'Asynchronous fire-and-forget QueryClient method to fetch and cache data before component mounting',
            bn: 'QueryClient-এর ফায়ার-অ্যান্ড-ফরগেট অ্যাসিনক্রোনাস মেথড যা কম্পোনেন্ট মাউন্ট হওয়ার আগেই ডেটা এনে ক্যাশে জমা করে'
          }
        },
        {
          term: 'ensureQueryData',
          def: {
            en: 'QueryClient method returning cached data if fresh or executing queryFn if absent or stale, ideal for route loaders',
            bn: 'QueryClient মেথড যা ক্যাশের ডেটা টাটকা থাকলে সরাসরি ফেরত দেয় নয়তো ফেচ করে অপেক্ষা করে; রুট লোডারের জন্য আদর্শ'
          }
        },
        {
          term: 'initialData',
          def: {
            en: 'Synchronous data supplied to useQuery that enters the cache permanently as genuine server data',
            bn: 'useQuery-তে সরবরাহকৃত সিনক্রোনাস ডেটা যা স্থায়ীভাবে বাস্তব সার্ভার ডেটা হিসেবে ক্যাশে প্রবেশ করে'
          }
        },
        {
          term: 'initialDataUpdatedAt',
          def: {
            en: 'Timestamp parameter informing TanStack Query when the seeded initialData was originally fetched by its parent query',
            bn: 'টাইমস্ট্যাম্প প্যারামিটার যা TanStack Query-কে জানায় যে প্রাথমিক ডেটাটি মূল কোয়েরিতে ঠিক কখন ফেচ করা হয়েছিল'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'prefetch-mechanics',
      text: {
        en: 'Background Warming with queryClient.prefetchQuery',
        bn: 'queryClient.prefetchQuery দিয়ে ব্যাকগ্রাউন্ড ওয়ার্মিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The prefetchQuery method is designed for opportunistic data loading triggered by user gestures such as hovering over a navigation link or opening a tab preview. When prefetchQuery executes, it initiates a network fetch and stores the resulting payload directly in the query cache under the designated queryKey. Because it does not establish a persistent component subscription, it returns Promise<void> and swallows network errors silently to avoid unhandled promise rejections.',
        bn: 'prefetchQuery মেথডটি ব্যবহারকারীর মাউস হোভার বা ট্যাব প্রিভিউ খোলার মতো অনুমিত পদক্ষেপের ভিত্তিতে ডেটা আনার জন্য তৈরি। এটি চলার সাথে সাথে নেটওয়ার্ক কল করে প্রাপ্ত ডেটা নির্দিষ্ট queryKey-র অধীনে সরাসরি কোয়েরি ক্যাশে সংরক্ষণ করে। কোনো কম্পোনেন্ট সাবস্ক্রিপশন তৈরি না করায় এটি Promise<void> ফেরত দেয় এবং রিকোয়েস্টে কোনো ত্রুটি হলে তা নীরবে সামলে নেয় যাতে অ্যাপ্লিকেশন ক্র্যাশ না করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A critical pitfall when using prefetchQuery is the default staleTime of 0 milliseconds. If you prefetch data on link hover with default settings, the data becomes stale immediately upon arrival. When the user completes the click 500 milliseconds later and mounts the target page, useQuery detects stale data and triggers another background network refetch. To make prefetching effective, always supply a non-zero staleTime such as 30000 or 60000 milliseconds to keep the cache warm.',
        bn: 'prefetchQuery ব্যবহারের সময় একটি মারাত্মক ভুল হলো staleTime-এর ডিফল্ট মান 0 মিলিসেকেন্ড থাকা। লিংকে হোভার করার সময় ডিফল্ট সেটিংসে প্রিফেচ করলে ডেটা আসার সাথে সাথেই বাসি হয়ে যায়। এরপর ৫০০ মিলিসেকেন্ড পর ইউজার ক্লিক করে পেজে ঢুকলে useQuery ডাটা বাসি দেখে সাথে সাথে দ্বিতীয়বার নেটওয়ার্ক রিকোয়েস্ট পাঠিয়ে দেয়। প্রিফেচিং কার্যকর করতে সর্বদা একটি নন-জিরো staleTime যেমন 30000 বা 60000 মিলিসেকেন্ড দিন যাতে ক্যাশ টাটকা থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'ensure-query-data',
      text: {
        en: 'Guaranteed Route Loading with queryClient.ensureQueryData',
        bn: 'queryClient.ensureQueryData দিয়ে নিশ্চিত রুট লোডিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern client-side frameworks like React Router and TanStack Router offer route loaders that execute before rendering the destination view. While prefetchQuery returns void, ensureQueryData returns Promise<TData>. If a fresh matching query already exists in the cache, ensureQueryData returns the cached value synchronously without touching the network. If the entry is missing or stale, it fetches the resource, writes it to cache, and resolves the promise.',
        bn: 'React Router ও TanStack Router-এর মতো আধুনিক ফ্রেমওয়ার্ক রুট লোডার সরবরাহ করে যা গন্তব্যের পেজ রেন্ডার হওয়ার আগেই চলে। যেখানে prefetchQuery কোনো ভ্যালু ছাড়া void ফেরত দেয়, সেখানে ensureQueryData সরাসরি Promise<TData> রিটার্ন করে। ক্যাশে যদি সতেজ ডেটা উপস্থিত থাকে, তবে এটি নেটওয়ার্কে হাত না দিয়ে ক্যাশ ডেটা ফেরত দেয়। আর ক্যাশে ডেটা না থাকলে বা বাসি হলে এটি ডেটা ফেচ করে ক্যাশে লেখে এবং প্রমিজ সমাধান করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike prefetchQuery, ensureQueryData throws an exception if the network fetch fails. This guarantees that router error boundaries can intercept 404 or 500 server responses cleanly before the user enters the page. When the route component subsequently calls useQuery with the exact same queryKey, the query status is instantly set to success without any initial loading spinner or layout shift.',
        bn: 'prefetchQuery-র বিপরীতভাবে, ensureQueryData-তে নেটওয়ার্ক ব্যর্থ হলে এটি এক্সেপশন ছুড়ে দেয়। ফলে ব্যবহারকারী পেজে ঢোকার আগেই রাউটারের এরর বাউন্ডারি ৪০৪ বা ৫০০ সার্ভার এরর সঠিকভাবে ধরতে পারে। পরবর্তী সময়ে রুট কম্পোনেন্ট হুবহু একই queryKey দিয়ে useQuery কল করলে কোনো স্পিনার বা লেআউট পরিবর্তন ছাড়াই স্টেট তাৎক্ষণিক success হয়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'initial-data',
      text: {
        en: 'Instant Seeding with initialData and initialDataUpdatedAt',
        bn: 'initialData ও initialDataUpdatedAt দিয়ে তাৎক্ষণিক সিডিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In many master-detail interfaces, the master list query already holds a summary version of each item. When navigating to an article detail view with ID 42, fetching from scratch leaves the screen blank. Using initialData, developers can extract the item from the existing list query cache: initialData: () => queryClient.getQueryData<Article[]>(["articles", "list"])?.find(a => a.id === 42). The user sees the detail view immediately on click.',
        bn: 'অনেক তালিকা ও বিস্তারিত ইন্টারফেসে মূল তালিকায় প্রতিটি আইটেমের সারসংক্ষেপ ডেটা আগেই থাকে। আইডি ৪২ এর আর্টিকেলে ঢোকার সময় নতুন করে পুরো ফেচ করার অপেক্ষা করলে স্ক্রিন ফাঁকা থাকে। initialData ব্যবহার করে ডেভেলপাররা বিদ্যমান তালিকা ক্যাশ থেকে আইটেমটি নিয়ে সিড করতে পারেন: initialData: () => queryClient.getQueryData<Article[]>(["articles", "list"])?.find(a => a.id === 42)। ফলে ক্লিকে তাৎক্ষণিক ডেটা ভেসে ওঠে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To maintain accurate cache invalidation clocks, always couple initialData with initialDataUpdatedAt. By declaring initialDataUpdatedAt: () => queryClient.getQueryState(["articles", "list"])?.dataUpdatedAt, TanStack Query calculates staleness using the actual timestamp of the list fetch rather than resetting the clock to the moment of navigation. If the list was fetched 5 minutes ago and staleTime is 1 minute, TanStack Query immediately triggers a background refetch while displaying the seeded data.',
        bn: 'ক্যাশের সতেজতার সময় সঠিক রাখতে সর্বদা initialData-র সাথে initialDataUpdatedAt ব্যবহার করুন। initialDataUpdatedAt: () => queryClient.getQueryState(["articles", "list"])?.dataUpdatedAt লিখে দিলে TanStack Query নেভিগেশনের সময়ের বদলে মূল তালিকাটি যখন ফেচ হয়েছিল সেই সময় থেকে হিসাব করে। যদি তালিকাটি ৫ মিনিট আগে ফেচ হয়ে থাকে এবং staleTime ১ মিনিট হয়, তবে TanStack Query সিড করা ডেটা স্ক্রিনে রেখে ব্যাকগ্রাউন্ডে রিফেচ চালিয়ে নতুন ডেটা আনে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Prefetching & Seeding Primitives',
        bn: 'কাঠামোগত তুলনা: প্রিফেচিং ও সিডিং প্রিমিটিভস'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'prefetchQuery', bn: 'prefetchQuery' },
        { en: 'ensureQueryData', bn: 'ensureQueryData' },
        { en: 'initialData', bn: 'initialData' }
      ],
      rows: [
        [
          { en: 'Return Value', bn: 'রিটার্ন ভ্যালু' },
          { en: 'Promise<void>', bn: 'Promise<void>' },
          { en: 'Promise<TData>', bn: 'Promise<TData>' },
          { en: 'Synchronous TData | undefined', bn: 'সিনক্রোনাস TData | undefined' }
        ],
        [
          { en: 'Execution Context', bn: 'চালানোর স্থান' },
          { en: 'User gestures: hover, pagination next page, tab preview', bn: 'ইউজার ইভেন্ট: হোভার, পরবর্তী পেজ প্রি-ওয়ার্ম, ট্যাব প্রিভিউ' },
          { en: 'Route loaders: React Router loader, TanStack Router loader', bn: 'রুট লোডার: রিঅ্যাক্ট রাউটার লোডার, টানস্ট্যাক রাউটার লোডার' },
          { en: 'Component useQuery options during initial render', bn: 'প্রাথমিক রেন্ডারের সময় কম্পোনেন্ট useQuery অপশনে' }
        ],
        [
          { en: 'Error Handling Behavior', bn: 'ত্রুটি নিয়ন্ত্রণের আচরণ' },
          { en: 'Catches and swallows errors silently without crashing', bn: 'ক্র্যাশ না করে নীরবে ত্রুটি এড়িয়ে যায়' },
          { en: 'Throws errors so route ErrorBoundaries intercept failures', bn: 'এক্সেপশন ছোড়ে যাতে রাউটার এরর বাউন্ডারি ধরতে পারে' },
          { en: 'Pure synchronous execution; never throws network errors', bn: 'সম্পূর্ণ সিনক্রোনাস; কোনো নেটওয়ার্ক ত্রুটি হয় না' }
        ],
        [
          { en: 'Cache Storage Impact', bn: 'ক্যাশ সংরক্ষণে প্রভাব' },
          { en: 'Writes full entry into query cache asynchronously', bn: 'অ্যাসিনক্রোনাসভাবে পুরো এন্ট্রি কোয়েরি ক্যাশে লেখে' },
          { en: 'Reads existing cache or writes new entry asynchronously', bn: 'বিদ্যমান ক্যাশ পড়ে অথবা নতুন এন্ট্রি অ্যাসিনক্রোনাসভাবে লেখে' },
          { en: 'Permanently seeds the query cache with real data on mount', bn: 'মাউন্টের সময় বাস্তব ডেটা দিয়ে স্থায়ীভাবে ক্যাশ পূর্ণ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Prefetching & Route Loader Mechanics',
        bn: 'বাস্তব কোড সিমুলেশন: প্রিফেচিং ও রুট লোডার কার্যপদ্ধতি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query prefetchQuery, ensureQueryData & initialData

class QueryCacheMock {
  private store = new Map<string, { data: any; updatedAt: number; state: string }>();

  get(key: unknown[]) {
    return this.store.get(JSON.stringify(key));
  }

  set(key: unknown[], data: any, updatedAt: number = Date.now()) {
    this.store.set(JSON.stringify(key), { data, updatedAt, state: 'success' });
  }

  isFresh(entry: { updatedAt: number } | undefined, staleTime: number): boolean {
    if (!entry) return false;
    return (Date.now() - entry.updatedAt) < staleTime;
  }
}

class QueryClientMock {
  public cache = new QueryCacheMock();
  public fetchCount = 0;

  async prefetchQuery({ queryKey, queryFn, staleTime = 0 }: { queryKey: unknown[]; queryFn: () => Promise<any>; staleTime?: number }) {
    const existing = this.cache.get(queryKey);
    if (existing && this.cache.isFresh(existing, staleTime)) {
      return; // Already fresh, skip network fetch
    }
    this.fetchCount++;
    const data = await queryFn();
    this.cache.set(queryKey, data);
  }

  async ensureQueryData({ queryKey, queryFn, staleTime = 0 }: { queryKey: unknown[]; queryFn: () => Promise<any>; staleTime?: number }) {
    const existing = this.cache.get(queryKey);
    if (existing && this.cache.isFresh(existing, staleTime)) {
      return existing.data;
    }
    this.fetchCount++;
    const data = await queryFn();
    this.cache.set(queryKey, data);
    return data;
  }

  seedInitialData(detailKey: unknown[], listKey: unknown[], id: number, staleTime: number) {
    const listEntry = this.cache.get(listKey);
    if (!listEntry) return null;

    const matchedItem = listEntry.data.find((item: any) => item.id === id);
    if (!matchedItem) return null;

    // Seed into cache with the list's historical updatedAt
    this.cache.set(detailKey, matchedItem, listEntry.updatedAt);
    const isStillFresh = this.cache.isFresh(this.cache.get(detailKey), staleTime);

    return {
      seededItem: matchedItem,
      listUpdatedAt: listEntry.updatedAt,
      isFresh: isStillFresh
    };
  }
}

async function run() {
  const client = new QueryClientMock();
  const listKey = ['articles', 'list'];
  const detailKey = ['articles', 'detail', 42];

  // 1. Populate list cache (fetched 5 seconds ago)
  client.cache.set(listKey, [
    { id: 41, title: 'React Server Components' },
    { id: 42, title: 'TanStack Query Prefetching' },
    { id: 43, title: 'Next.js App Router' }
  ], Date.now() - 5000);

  // 2. prefetchQuery on hover with staleTime 30s
  await client.prefetchQuery({
    queryKey: ['articles', 'detail', 43],
    queryFn: async () => ({ id: 43, title: 'Next.js App Router', views: 1200 }),
    staleTime: 30000
  });

  const prefetchedEntry = client.cache.get(['articles', 'detail', 43]);

  // 3. ensureQueryData in route loader for article 43 (reuses warm cache)
  const ensureResult = await client.ensureQueryData({
    queryKey: ['articles', 'detail', 43],
    queryFn: async () => ({ id: 43, title: 'Next.js App Router (Network)', views: 1250 }),
    staleTime: 30000
  });

  // 4. Seeding initialData from list cache for article 42
  const seeded = client.seedInitialData(detailKey, listKey, 42, 10000);

  console.log('Prefetch fetch count after first run:', client.fetchCount);
  // -> Prefetch fetch count after first run: 1
  console.log('Prefetched article ID 43 views:', prefetchedEntry.data.views);
  // -> Prefetched article ID 43 views: 1200
  console.log('ensureQueryData re-used cache (views):', ensureResult.views);
  // -> ensureQueryData re-used cache (views): 1200
  console.log('ensureQueryData did NOT increment fetchCount:', client.fetchCount);
  // -> ensureQueryData did NOT increment fetchCount: 1
  console.log('Seeded article 42 title:', seeded.seededItem.title);
  // -> Seeded article 42 title: TanStack Query Prefetching
  console.log('Seeded article 42 is fresh (staleTime 10s > 5s elapsed):', seeded.isFresh);
  // -> Seeded article 42 is fresh (staleTime 10s > 5s elapsed): true
}

run();`,
      caption: {
        en: 'Simulation: prefetchQuery fetches 1 request for article 43 with 1200 views; ensureQueryData reuses cache without extra fetch; initialData seeds article 42 with 10s staleTime',
        bn: 'সিমুলেশন: prefetchQuery আর্টিকেল ৪৩ এর জন্য ১২০০ ভিউ সহ ১ টি ফেচ করে; ensureQueryData রিফেচ ছাড়া ক্যাশ ব্যবহার করে; initialData ১০ সেকেন্ড staleTime দিয়ে আর্টিকেল ৪২ সিড করে'
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
        en: 'Rule 1: Always supply a non-zero staleTime when invoking prefetchQuery. With the default staleTime of 0, the cached resource becomes stale the instant it arrives, forcing useQuery to issue an unnecessary background fetch when the target view mounts.',
        bn: 'নিয়ম ১: prefetchQuery ডাকার সময় সর্বদা একটি নন-জিরো staleTime দিন। staleTime 0 থাকলে ডেটা আসামাত্র বাসি হয়ে যায়, যার ফলে লক্ষ্য পেজে ঢোকার পর useQuery আবার অনর্থক ব্যাকগ্রাউন্ড ফেচ শুরু করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Prefer ensureQueryData inside route loaders. Unlike prefetchQuery which returns void, ensureQueryData returns the resolved data and throws network errors, allowing router error boundaries to intercept failures cleanly before rendering.',
        bn: 'নিয়ম ২: রুট লোডারের ভেতর সর্বদা ensureQueryData ব্যবহার করুন। prefetchQuery কোনো ডেটা না দিলেও ensureQueryData সরাসরি ডেটা ফেরত দেয় এবং ত্রুটি ঘটলে এক্সেপশন ছোড়ে, যাতে পেজ দেখানোর আগেই রাউটার এরর বাউন্ডারি তা ধরতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Always pair initialData with initialDataUpdatedAt. Seeding data from a list query without specifying when the list was originally fetched resets the freshness timer, causing stale data to masquerade as fresh.',
        bn: 'নিয়ম ৩: initialData-র সাথে সর্বদা initialDataUpdatedAt উল্লেখ করুন। তালিকা থেকে ডেটা সিড করার সময় মূল তালিকাটি কখন ফেচ হয়েছিল তা না জানালে টাইমার নতুন করে শুরু হয়, ফলে বাসি ডেটা ভুল করে টাটকা হিসেবে গণ্য হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Avoid speculative over-prefetching on mobile devices. Prefetching hundreds of links simultaneously consumes user mobile data quotas and exhausts browser connection pools; limit prefetching to direct user gestures like hovers or the immediate next page.',
        bn: 'নিয়ম ৪: মোবাইল ডিভাইসে অতিরিক্ত প্রিফেচ করা এড়িয়ে চলুন। একসাথে শত শত লিংক প্রিফেচ করলে ব্যবহারকারীর ইন্টারনেট ডেটা নষ্ট হয় এবং ব্রাউজারের কানেকশন পুল ব্যস্ত হয়ে পড়ে; কেবল মাউস হোভার বা পরবর্তী পেজের মতো নিশ্চিত পদক্ষেপে প্রিফেচ সীমাবদ্ধ রাখুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'tq-dawn-ex1',
      kind: 'mcq',
      topic: 'staleTime configuration in prefetchQuery',
      question: {
        en: 'Why is setting an explicit staleTime necessary when using queryClient.prefetchQuery on link hover?',
        bn: 'লিংক হোভারে queryClient.prefetchQuery ব্যবহারের সময় একটি স্পষ্ট staleTime নির্ধারণ করা কেন আবশ্যক?'
      },
      options: [
        {
          en: 'Because the default staleTime is 0, which makes the prefetched data stale immediately, causing useQuery to immediately refetch upon page mount',
          bn: 'কারণ ডিফল্ট staleTime হলো ০, যার ফলে প্রিফেচ করা ডেটা আসামাত্র বাসি হয়ে যায় এবং পেজ মাউন্ট হওয়ার সাথে সাথে useQuery পুনরায় ফেচ শুরু করে'
        },
        {
          en: 'Because prefetchQuery fails with a syntax error if staleTime is omitted',
          bn: 'কারণ staleTime বাদ দিলে prefetchQuery সিনট্যাক্স এরর দিয়ে বন্ধ হয়ে যায়'
        },
        {
          en: 'Because staleTime controls whether the browser saves data to hard disk',
          bn: 'কারণ staleTime নিয়ন্ত্রণ করে ব্রাউজার হার্ডডিস্কে ডেটা সংরক্ষণ করবে কি না'
        },
        {
          en: 'Because prefetchQuery only supports WebSocket protocols and requires a ping interval',
          bn: 'কারণ prefetchQuery কেবল ওয়েবসকেট প্রোটোকলে চলে এবং পিং ইন্টারভাল প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens to freshly fetched data when staleTime defaults to zero.',
        bn: 'ডিফল্ট staleTime শূন্য থাকলে নতুন আসা ডেটার অবস্থা কী হয় তা ভাবুন।'
      },
      explanation: {
        en: 'With staleTime: 0, data is considered stale immediately upon receipt. When the user completes the navigation click, useQuery triggers an unwanted background refetch unless staleTime was declared.',
        bn: 'staleTime: ০ হলে ডেটা আসার সাথে সাথেই বাসি হিসেবে গণ্য হয়। ব্যবহারকারী ক্লিক করে পেজে ঢুকলে useQuery অপ্রয়োজনীয় ব্যাকগ্রাউন্ড রিফেচ শুরু করে, যদি না স্পষ্ট staleTime দেওয়া থাকে।'
      }
    },
    {
      id: 'tq-dawn-ex2',
      kind: 'mcq',
      topic: 'ensureQueryData in route loaders',
      question: {
        en: 'What makes ensureQueryData superior to prefetchQuery for use inside route loaders?',
        bn: 'রুট লোডারের ভেতর ব্যবহারের ক্ষেত্রে prefetchQuery-র চেয়ে ensureQueryData কেন উৎকৃষ্ট?'
      },
      options: [
        {
          en: 'ensureQueryData returns the resolved data or throws on failure, allowing router error boundaries to intercept errors before rendering',
          bn: 'ensureQueryData সমাধানকৃত ডেটা ফেরত দেয় অথবা ব্যর্থতায় এক্সেপশন ছোড়ে, যাতে পেজ দেখানোর আগেই রাউটার এরর বাউন্ডারি ত্রুটি ধরতে পারে'
        },
        {
          en: 'ensureQueryData executes 10 times faster than all standard HTTP queries',
          bn: 'ensureQueryData সাধারণ সমস্ত এইচটিটিপি কোয়েরির চেয়ে ১০ গুণ দ্রুত চলে'
        },
        {
          en: 'ensureQueryData automatically clears all cookies before navigation',
          bn: 'ensureQueryData নেভিগেশনের পূর্বে সমস্ত কুকিজ স্বয়ংক্রিয়ভাবে মুছে দেয়'
        },
        {
          en: 'ensureQueryData only works in serverless Node.js environments',
          bn: 'ensureQueryData কেবল সার্ভারলেস নোড জেএস পরিবেশে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider return types and exception throwing behavior in route transitions.',
        bn: 'রুট ট্রানজিশনে রিটার্ন ভ্যালু এবং এরর হ্যান্ডলিং আচরণের কথা চিন্তা করুন।'
      },
      explanation: {
        en: 'prefetchQuery returns Promise<void> and swallows errors. ensureQueryData returns Promise<TData> and throws on network failure, ensuring proper router lifecycle integration.',
        bn: 'prefetchQuery কোনো ডেটা ছাড়া Promise<void> ফেরত দেয় এবং এরর চেপে যায়। কিন্তু ensureQueryData ডেটা প্রদান করে এবং ব্যর্থ হলে এরর ছোড়ে, যা রাউটার নিয়ন্ত্রণের জন্য অত্যন্ত কার্যকর।'
      }
    },
    {
      id: 'tq-dawn-ex3',
      kind: 'mcq',
      topic: 'Role of initialDataUpdatedAt in cache freshness',
      question: {
        en: 'What is the critical purpose of providing initialDataUpdatedAt when seeding useQuery with initialData?',
        bn: 'initialData দিয়ে useQuery সিড করার সময় initialDataUpdatedAt উল্লেখ করার মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It informs TanStack Query of the historical fetch timestamp so freshness clocks calculate staleness from the original request rather than the current navigation moment',
          bn: 'এটি TanStack Query-কে মূল ফেচের আসল সময় জানায় যাতে বর্তমান মুহূর্তের বদলে আগের রিকোয়েস্টের সময় থেকে সতেজতার হিসাব করা যায়'
        },
        {
          en: 'It converts all timestamp strings into Unix epoch numbers',
          bn: 'এটি সমস্ত টাইমস্ট্যাম্প স্ট্রিংকে ইউনিক্স ইপক সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'It forces the browser to synchronize system clock with the NTP time server',
          bn: 'এটি ব্রাউজারকে এনটিপি টাইম সার্ভারের সাথে সিস্টেম ক্লক সিঙ্ক করতে বাধ্য করে'
        },
        {
          en: 'It encrypts the cached record using the client operating system key',
          bn: 'এটি অপারেটিং সিস্টেমের কি ব্যবহার করে ক্যাশ করা রেকর্ড এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without this option, TanStack Query assumes the seeded data was created right now.',
        bn: 'এই অপশন ছাড়া TanStack Query মনে করে সিড করা ডেটাটি এইমাত্র তৈরি হয়েছে।'
      },
      explanation: {
        en: 'If initialDataUpdatedAt is omitted, TanStack Query assigns Date.now() to the entry, falsely treating old data as brand new and suppressing necessary background updates.',
        bn: 'initialDataUpdatedAt না দিলে TanStack Query বর্তমান সময়কে ডেটার সময় ধরে নেয়, ফলে পুরোনো ডেটাও ভুলভাবে একদম নতুন হিসেবে গণ্য হয় এবং প্রয়োজনীয় ব্যাকগ্রাউন্ড রিফেচ বন্ধ থাকে।'
      }
    },
    {
      id: 'tq-dawn-ex4',
      kind: 'mcq',
      topic: 'initialData versus placeholderData distinction',
      question: {
        en: 'How does initialData fundamentally differ from placeholderData in TanStack Query?',
        bn: 'TanStack Query-তে initialData মূলত কোন দিক থেকে placeholderData থেকে আলাদা?'
      },
      options: [
        {
          en: 'initialData is permanently written to the query cache as genuine server state, whereas placeholderData is temporary UI display state that is never written to cache',
          bn: 'initialData স্থায়ীভাবে আসল সার্ভার স্টেট হিসেবে ক্যাশে লেখা হয়, অন্যদিকে placeholderData হলো অস্থায়ী ইউআই স্টেট যা ক্যাশে কখনোই জমা হয় না'
        },
        {
          en: 'initialData only works with strings, while placeholderData only accepts numbers',
          bn: 'initialData কেবল স্ট্রিংয়ে কাজ করে আর placeholderData কেবল সংখ্যায় চলে'
        },
        {
          en: 'placeholderData persists across browser restarts, while initialData deletes immediately',
          bn: 'placeholderData ব্রাউজার রিস্টার্টের পরও থাকে আর initialData সাথে সাথে মুছে যায়'
        },
        {
          en: 'There is no functional or architectural difference between them',
          bn: 'এদের মধ্যে কোনো কাঠামোগত বা বাস্তবিক পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about whether the data enters the central QueryCache store.',
        bn: 'ডেটাটি মূল কোয়েরি ক্যাশ স্টোরে জমা হয় কি না সে কথা ভাবুন।'
      },
      explanation: {
        en: 'initialData enters the query cache permanently and sets the query status to success. placeholderData is purely cosmetic rendering scaffolding that does not alter the underlying cache.',
        bn: 'initialData স্থায়ীভাবে ক্যাশে জমা হয়ে কোয়েরি স্ট্যাটাস success করে দেয়। অন্যদিকে placeholderData কেবল সাময়িক প্রদর্শনের জন্য ব্যবহৃত হয় এবং ক্যাশ স্টোরে কোনো প্রভাব ফেলে না।'
      }
    }
  ],
  quiz: {
    id: 'the-dawn-dock-quiz',
    title: {
      en: 'Prefetching & Route Pre-warming Quiz',
      bn: 'প্রিফেচিং ও রুট প্রি-ওয়ার্মিং কুইজ'
    },
    questions: [
      {
        id: 'q-prefetch-silent-failures',
        kind: 'mcq',
        topic: 'Silent error handling in prefetchQuery',
        question: {
          en: 'Why does queryClient.prefetchQuery deliberately swallow fetch errors instead of throwing them to the caller?',
          bn: 'queryClient.prefetchQuery কেন ফেচ এরর ছুড়ে না দিয়ে উদ্দেশ্যপ্রণোদিতভাবে তা নীরবে সামলে নেয়?'
        },
        options: [
          {
            en: 'Prefetching is speculative optimization; network failures on speculative background tasks should not trigger unhandled promise rejections or break user interactions',
            bn: 'প্রিফেচিং হলো সম্ভাব্য পারফরম্যান্স অপ্টিমাইজেশন; ব্যাকগ্রাউন্ড কাজের ব্যর্থতা ব্যবহারকারীর ইন্টার‍্যাকশন নষ্ট করা বা অ্যাপ্লিকেশন ক্র্যাশ করানো উচিত নয়'
          },
          {
            en: 'Because JavaScript try-catch statements do not support async functions',
            bn: 'কারণ জাভাস্ক্রিপ্ট try-catch স্টেটমেন্ট অ্যাসিনক্রোনাস ফাংশন সমর্থন করে না'
          },
          {
            en: 'Because prefetchQuery uses an internal mock service worker that never fails',
            bn: 'কারণ prefetchQuery একটি অভ্যন্তরীণ মক সার্ভিস ওয়ার্কার ব্যবহার করে যা কখনো ব্যর্থ হয় না'
          },
          {
            en: 'Because all HTTP errors are automatically converted to HTTP 200 responses',
            bn: 'কারণ সমস্ত এইচটিটিপি এরর স্বয়ংক্রিয়ভাবে এইচটিটিপি ২০০ রেসপন্সে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the impact of speculative background task errors on user interface stability.',
          bn: 'সম্ভাব্য ব্যাকগ্রাউন্ড কাজের ত্রুটি ইউজার ইন্টারফেসের স্থিতিশীলতায় কী প্রভাব ফেলে তা ভাবুন।'
        },
        explanation: {
          en: 'Prefetching anticipates potential user actions. If a hover-triggered fetch fails due to a temporary glitch, throwing would crash the UI. Instead, the real fetch occurs when the user actually navigates.',
          bn: 'প্রিফেচিং কেবল সম্ভাব্য কাজের আগাম প্রস্তুতি। হোভারের সময় নেটওয়ার্ক সমস্যা হলে ক্র্যাশ না ঘটিয়ে আসল ফেচটি ব্যবহারকারী পেজে ক্লিক করার মুহূর্ত পর্যন্ত স্থগিত রাখা হয়।'
        }
      },
      {
        id: 'q-route-loader-ensure-query-data',
        kind: 'mcq',
        topic: 'Synchronous cache hits in ensureQueryData',
        question: {
          en: 'What occurs when ensureQueryData is invoked for a query whose data is already fresh in cache?',
          bn: 'ক্যাশে ইতিমধ্যে সতেজ থাকা কোনো কোয়েরির জন্য ensureQueryData কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It immediately returns the existing cached data without executing queryFn or making a network request',
            bn: 'এটি queryFn না চালিয়ে বা নেটওয়ার্ক রিকোয়েস্ট না পাঠিয়ে সাথে সাথে বিদ্যমান ক্যাশ ডেটা ফেরত দেয়'
          },
          {
            en: 'It clears the cache entry and downloads fresh data from scratch',
            bn: 'এটি ক্যাশ এন্ট্রি মুছে ফেলে শুরু থেকে নতুন ডেটা ডাউনলোড করে'
          },
          {
            en: 'It throws a duplicate cache key runtime error',
            bn: 'এটি ডুপ্লিকেট ক্যাশ কি জনিত রানটাইম এরর ছুড়ে দেয়'
          },
          {
            en: 'It duplicates the query key into a secondary hidden storage area',
            bn: 'এটি কোয়েরি কি-টিকে একটি গোপন দ্বিতীয় স্টোরেজে ডুপ্লিকেট করে রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ensureQueryData optimizes for performance by honoring cache freshness.',
          bn: 'ensureQueryData ক্যাশের সতেজতাকে প্রাধান্য দিয়ে সর্বোচ্চ পারফরম্যান্স নিশ্চিত করে।'
        },
        explanation: {
          en: 'If matching fresh data resides in the cache, ensureQueryData skips the queryFn execution entirely and returns the cached data immediately.',
          bn: 'ক্যাশে যদি সঠিক ও টাটকা তথ্য থাকে, তবে ensureQueryData কোনো নেটওয়ার্ক ফেচ না চালিয়ে সরাসরি ক্যাশ ডেটা সমাধান করে দেয়।'
        }
      },
      {
        id: 'q-seeding-detail-from-list',
        kind: 'mcq',
        topic: 'Partial data warning when seeding detail views',
        question: {
          en: 'What architectural precaution should developers observe when seeding a detail query from a list query using initialData?',
          bn: 'initialData দিয়ে তালিকা কোয়েরি থেকে বিস্তারিত কোয়েরি সিড করার সময় ডেভেলপারদের কোন বিষয়ে সতর্ক থাকা উচিত?'
        },
        options: [
          {
            en: 'List queries often return partial summaries; if the detail view requires fields not present in the list item, initialData provides incomplete state until background fetch completes',
            bn: 'তালিকায় প্রায়শই সংক্ষিপ্ত ডেটা থাকে; বিস্তারিত পেজে যদি এমন ফিল্ড লাগে যা তালিকায় ছিল না, তবে ব্যাকগ্রাউন্ড ফেচ শেষ না হওয়া পর্যন্ত initialData অসম্পূর্ণ স্টেট প্রদর্শন করতে পারে'
          },
          {
            en: 'initialData causes permanent memory corruption if the detail item has an ID greater than 100',
            bn: 'বিস্তারিত আইটেমের আইডি ১০০-র বেশি হলে initialData মেমোরি নষ্ট করে দেয়'
          },
          {
            en: 'TanStack Query prevents the use of initialData for any query containing numbers',
            bn: 'TanStack Query সংখ্যাযুক্ত কোনো কোয়েরিতে initialData ব্যবহার করতে দেয় না'
          },
          {
            en: 'List items must always be converted to base64 strings before passing to initialData',
            bn: 'initialData-তে পাঠানোর পূর্বে তালিকার উপাদানগুলোকে সর্বদা বেস৬৪ স্ট্রিংয়ে রূপান্তর করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the differences in schema shape between summary list payloads and full detail records.',
          bn: 'সংক্ষিপ্ত তালিকা ও পূর্ণাঙ্গ বিস্তারিত রেকর্ডের ডেটা কাঠামোর পার্থক্যের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'If a list endpoint returns only id and name, while the detail endpoint includes full biography and settings, UI components must safely handle missing nested properties during initial render.',
          bn: 'তালিকায় যদি শুধু আইডি ও নাম থাকে এবং বিস্তারিত পেজে বিশদ বিবরণ দরকার হয়, তবে ব্যাকগ্রাউন্ড ফেচ শেষ হওয়ার আগে অসম্পূর্ণ ফিল্ডগুলো সতর্কতার সাথে হ্যান্ডেল করতে হয়।'
        }
      },
      {
        id: 'q-prefetch-invalidation-interaction',
        kind: 'mcq',
        topic: 'Interaction between prefetching and query invalidation',
        question: {
          en: 'What happens if queryClient.invalidateQueries() runs immediately after a prefetchQuery finishes?',
          bn: 'prefetchQuery শেষ হওয়ার পরপরই যদি queryClient.invalidateQueries() চালানো হয় তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The prefetched entry is marked as stale, meaning the next component mounting with useQuery will trigger an immediate background refetch',
            bn: 'প্রিফেচ করা এন্ট্রিটি বাসি হিসেবে চিহ্নিত হয়, ফলে পরবর্তী সময়ে useQuery মাউন্ট হলে সাথে সাথে ব্যাকগ্রাউন্ড রিফেচ শুরু হবে'
          },
          {
            en: 'The entire browser history is erased',
            bn: 'পুরো ব্রাউজার হিস্ট্রি মুছে যায়'
          },
          {
            en: 'The invalidation call throws an uncaught race condition exception',
            bn: 'ইনভ্যালিডেশন কলটি রেস কন্ডিশন এক্সেপশন ছুড়ে মারবে'
          },
          {
            en: 'TanStack Query permanently blocks prefetching for the remainder of the session',
            bn: 'TanStack Query পুরো সেশনের জন্য প্রিফেচিং সুবিধা স্থায়ীভাবে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Invalidation resets the staleness state of matching cache records.',
          bn: 'ইনভ্যালিডেশন সংশ্লিষ্ট ক্যাশ রেকর্ডের সতেজতা বাতি নিভিয়ে বাসি করে দেয়।'
        },
        explanation: {
          en: 'Invalidating marks matching cached queries as stale. Even if prefetchQuery populated the cache seconds earlier, the invalidated status causes useQuery to immediately refetch upon mount.',
          bn: 'ইনভ্যালিডেশন ক্যাশ এন্ট্রিকে বাসি চিহ্নিত করে। ফলে একটু আগেই প্রিফেচ করা হলেও useQuery মাউন্ট হওয়ার সাথে সাথে পুনরায় সার্ভারে নতুন রিকোয়েস্ট পাঠায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-quality-desk',
    title: {
      en: 'Fine-Grained Reactivity — Structural Sharing, Selectors & notifyOnChangeProps',
      bn: 'সূক্ষ্ম রিঅ্যাক্টিভিটি — স্ট্রাকচারাল শেয়ারিং, সিলেক্টরস ও notifyOnChangeProps'
    }
  }
};
