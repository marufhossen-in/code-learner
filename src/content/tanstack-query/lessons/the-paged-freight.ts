import type { Lesson } from '../../../lib/types';

export const pagedFreightLesson: Lesson = {
  slug: 'the-paged-freight',
  tech: 'tanstack-query',
  title: {
    en: 'Pagination & Infinite Queries — keepPreviousData, placeholderData & Cursor Feeds',
    bn: 'পৃষ্ঠাঙ্কন ও অসীম স্ক্রলিং — keepPreviousData, placeholderData ও কার্সর ফিডস'
  },
  summary: {
    en: 'Loading data in discrete chunks is essential for building fast and scalable web applications. When fetching paginated catalogs, TanStack Query stores each page under its own query key, such as ["products", { page: 2 }]. Switching pages without careful handling triggers sudden loading spinners and layout shifts. TanStack Query v5 solves this using placeholderData with keepPreviousData, which retains the previous page data on screen while the new page loads in the background, accompanied by the isPlaceholderData indicator. For continuous feeds, social timelines, and chat streams, TanStack Query provides useInfiniteQuery. Instead of separate cache entries, useInfiniteQuery accumulates pages into a single structure containing pages and pageParams arrays. By declaring getNextPageParam and getPreviousPageParam, developers can seamlessly paginate forwards and backwards using fetchNextPage and hasNextPage. Version 5 introduces the maxPages option, preventing runaway memory consumption on long-scrolling mobile feeds by automatically trimming distant pages from the active cache.',
    bn: 'ওয়েব অ্যাপ্লিকেশনে প্রচুর তথ্য দ্রুত ও দক্ষতার সাথে প্রদর্শনের জন্য পেজিনেশন ও ইনফিনিট স্ক্রলিং অত্যন্ত জরুরি। সাধারণ পৃষ্ঠাঙ্কিত তালিকায় TanStack Query প্রতিটি পৃষ্ঠাকে আলাদা কি-তে জমা করে, যেমন ["products", { page: 2 }]। তবে পেজ বদলানোর সময় হঠাৎ লোডিং স্পিনার ও লেআউট শিফট ব্যবহারকারীর অভিজ্ঞতা নষ্ট করে। TanStack Query v5-এ placeholderData: keepPreviousData ব্যবহারের মাধ্যমে নতুন পেজ ফেচ হওয়ার সময়ও পুরোনো পেজের তথ্য স্ক্রিনে ধরে রাখা হয় এবং isPlaceholderData ফ্ল্যাগের সাহায্যে মৃদু লোডার দেখানো যায়। অন্যদিকে সোশ্যাল ফিড ও চ্যাট হিস্ট্রির জন্য রয়েছে useInfiniteQuery। এটি আলাদা কি তৈরি না করে একটি একক ক্যাশ এন্ট্রিতে pages ও pageParams অ্যারেতে ডেটা জমা করে। getNextPageParam ও getPreviousPageParam ঘোষণার মাধ্যমে fetchNextPage ও hasNextPage দিয়ে অনায়াসে সামনে বা পেছনে পেজিনেশন চালানো যায়। v5-এ যুক্ত হওয়া maxPages অপশনের মাধ্যমে দীর্ঘ স্ক্রলিংয়ে মেমোরি নিয়ন্ত্রিত রাখা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Pagination vs Infinite Scrolling',
        bn: 'মূল ধারণা: পৃষ্ঠাঙ্কন বনাম অসীম স্ক্রলিং'
      }
    },
    {
      type: 'visual',
      id: 'cch'
    },
    {
      type: 'para',
      text: {
        en: 'When you build data-heavy web applications, loading thousands of records at once overloads the network and degrades browser performance. Pagination divides large datasets into manageable chunks, but navigating between pages often creates layout shifts and jarring loading spinners. TanStack Query v5 provides two distinct paradigms to solve this: standard pagination powered by keepPreviousData, and infinite scrolling powered by useInfiniteQuery.',
        bn: 'যখন আপনি প্রচুর তথ্যযুক্ত ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন একসাথে হাজার হাজার রেকর্ড লোড করলে নেটওয়ার্কের ওপর চাপ পড়ে এবং ব্রাউজারের গতি কমে যায়। পেজিনেশন বা পৃষ্ঠাঙ্কন বড় ডেটাসেটকে ছোট ছোট খণ্ডে বিভক্ত করে, কিন্তু পেজ পরিবর্তনের সময় হঠাৎ লোডিং স্পিনার ও লেআউট শিফট ব্যবহারকারীর অভিজ্ঞতা নষ্ট করে। TanStack Query v5 এই সমস্যা সমাধানে দুটি চমৎকার ব্যবস্থা দেয়: keepPreviousData দিয়ে মসৃণ পেজিনেশন এবং useInfiniteQuery দিয়ে অসীম স্ক্রলিং।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'keepPreviousData',
          def: {
            en: 'A built-in identity function for placeholderData in v5 that retains previous page data while new queryKey resolves',
            bn: 'v5-এ placeholderData-র জন্য একটি বিল্ট-ইন আইডেন্টিটি ফাংশন যা নতুন queryKey ফেচ হওয়ার সময় আগের পেজের ডেটা ধরে রাখে'
          }
        },
        {
          term: 'isPlaceholderData',
          def: {
            en: 'Boolean flag indicating whether the current rendered data is temporary placeholder data from a prior queryKey',
            bn: 'বুলিয়ান ফ্ল্যাগ যা নির্দেশ করে প্রদর্শিত ডেটাটি পূর্ববর্তী কোনো queryKey থেকে আসা অস্থায়ী প্লেসহোল্ডার ডেটা কি না'
          }
        },
        {
          term: 'useInfiniteQuery',
          def: {
            en: 'Hook for continuous feeds storing accumulated pages and pageParams arrays under a single query key',
            bn: 'ধারাবাহিক ফিডের হুক যা একক কোয়েরি কি-র অধীনে সঞ্চিত pages ও pageParams অ্যারে সংরক্ষণ করে'
          }
        },
        {
          term: 'getNextPageParam',
          def: {
            en: 'Function receiving the last fetched page to compute and return the next cursor param, or undefined when exhausted',
            bn: 'ফাংশন যা শেষ ফেচ করা পেজ পর্যবেক্ষণ করে পরবর্তী কার্সর রিটার্ন করে, অথবা ডেটা শেষ হলে undefined ফেরত দেয়'
          }
        },
        {
          term: 'maxPages',
          def: {
            en: 'TanStack Query v5 option restricting the maximum number of loaded pages held in memory simultaneously',
            bn: 'TanStack Query v5-এর অপশন যা মেমোরিতে একসাথে সর্বোচ্চ কতটি পেজ জমা থাকবে তা সীমাবদ্ধ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'pagination-mechanics',
      text: {
        en: 'Smooth Standard Pagination with placeholderData',
        bn: 'placeholderData সহ মসৃণ সাধারণ পৃষ্ঠাঙ্কন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In standard pagination, each page owns its independent entry in the query cache. When a user clicks from page 1 to page 2, the query key changes from ["products", { page: 1 }] to ["products", { page: 2 }]. Without special handling, page 2 enters the hard loading state where data is undefined, unmounting the table and showing a blank skeleton.',
        bn: 'সাধারণ পৃষ্ঠাঙ্কনে প্রতিটি পেজের কোয়েরি ক্যাশে নিজস্ব স্বতন্ত্র এন্ট্রি থাকে। যখন ব্যবহারকারী পেজ 1 থেকে পেজ 2 এ যান, তখন কোয়েরি কি পরিবর্তিত হয়ে ["products", { page: 1 }] থেকে ["products", { page: 2 }] হয়। কোনো বিশেষ ব্যবস্থা না থাকলে পেজ 2 হার্ড লোডিং স্টেটে চলে যায় যেখানে ডেটা থাকে না, ফলে টেবিলটি উধাও হয়ে ব্ল্যাংক স্কেলিটন ভেসে ওঠে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'TanStack Query v5 eliminates this jitter through the placeholderData option. In previous versions, developers used keepPreviousData: true. In v5, TanStack Query provides an explicit helper function named keepPreviousData imported directly from @tanstack/react-query. Passing placeholderData: keepPreviousData tells TanStack Query to keep rendering the data of page 1 while the fetch for page 2 is in flight.',
        bn: 'TanStack Query v5 এই কাঁপুনি বা জাম্প পুরোপুরি দূর করে placeholderData অপশনের মাধ্যমে। আগের ভার্সনে ডেভেলপাররা keepPreviousData: true লিখতেন। কিন্তু v5-এ সরাসরি @tanstack/react-query থেকে keepPreviousData হেল্পার ফাংশন ইমপোর্ট করা হয়। placeholderData: keepPreviousData লিখে দিলে পেজ 2 এর নেটওয়ার্ক রিকোয়েস্ট চলাকালীনও পেজ 1 এর ডেটা স্ক্রিনে দৃশ্যমান থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To inform users that a background fetch is running, TanStack Query exposes the isPlaceholderData flag. When isPlaceholderData is true, developers can dim the table opacity to 0.6 and disable the Next Page button so users cannot double-click before page 2 arrives. Once page 2 resolves, isPlaceholderData flips to false and the new rows appear instantly without any layout jump.',
        bn: 'ব্যাকগ্রাউন্ডে ফেচ চলছে তা বোঝাতে TanStack Query exposes isPlaceholderData ফ্ল্যাগ প্রদান করে। যখন isPlaceholderData সত্য হয়, ডেভেলপাররা টেবিলের অপাসিটি কিছুটা কমিয়ে দিতে পারেন এবং নেক্সট বাটন নিষ্ক্রিয় রাখতে পারেন যাতে পেজ 2 আসার আগে ব্যবহারকারী বারবার ক্লিক না করেন। পেজ 2 চলে আসামাত্র isPlaceholderData আবার মিথ্যা হয় এবং টেবিলটি নতুন তথ্যে ভরে ওঠে কোনো লেআউট জাম্প ছাড়াই।'
      }
    },
    {
      type: 'heading',
      id: 'infinite-queries',
      text: {
        en: 'Continuous Cursor Feeds with useInfiniteQuery',
        bn: 'useInfiniteQuery দিয়ে অবিচ্ছিন্ন কার্সর ফিডস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Social media timelines, infinite scroll lists, and messaging applications require continuous data appending rather than replacing previous pages. The useInfiniteQuery hook manages this by grouping all loaded pages under a single query key. The returned data object contains two arrays: data.pages containing each fetched page payload, and data.pageParams recording the cursor parameters used to fetch each page.',
        bn: 'সোশ্যাল মিডিয়া টাইমলাইন, ইনফিনিট স্ক্রল তালিকা ও মেসেজিং অ্যাপ্লিকেশনে পূর্ববর্তী পেজ মুছে ফেলার বদলে নিচে নতুন ডেটা যোগ করতে হয়। useInfiniteQuery হুক একটি একক কোয়েরি কি-র অধীনে সব পেজ একত্রিত করে এটি পরিচালনা করে। রিটার্ন করা data অবজেক্টে দুটি অ্যারে থাকে: data.pages যেখানে প্রতিটি পেজের পে-লোড থাকে, এবং data.pageParams যেখানে ফেচ করতে ব্যবহৃত কার্সর প্যারামিটার সংরক্ষিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In TanStack Query v5, initialPageParam is strictly required. For cursor-based pagination, you define initialPageParam: 0 or initialPageParam: null. The getNextPageParam callback receives the last page and computes the cursor for the subsequent request. When all server records have been loaded, getNextPageParam returns undefined or null. This automatically sets hasNextPage to false, signaling the user interface to hide the Load More trigger.',
        bn: 'TanStack Query v5-এ initialPageParam উল্লেখ করা বাধ্যতামূলক। কার্সর-ভিত্তিক পেজিনেশনের জন্য initialPageParam: 0 বা initialPageParam: null ঘোষণা করতে হয়। getNextPageParam কলব্যাকটি শেষ পেজটি গ্রহণ করে এবং পরবর্তী রিকোয়েস্টের কার্সর তৈরি করে। সার্ভারের সব রেকর্ড শেষ হয়ে গেলে getNextPageParam রিটার্ন করে undefined বা null। এর ফলে hasNextPage স্বয়ংক্রিয়ভাবে false হয়ে যায় এবং ইউজার ইন্টারফেসে লোড মোর বাটন লুকিয়ে ফেলা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A major breakthrough in TanStack Query v5 is the maxPages setting. In earlier versions, scrolling through 50 pages of an infinite feed accumulated thousands of DOM nodes and massive objects in memory, causing browser crashes on mobile devices. Setting maxPages: 3 instructs TanStack Query to maintain at most 3 pages in memory window at any time, trimming older pages as the user scrolls downwards.',
        bn: 'TanStack Query v5-এর একটি যুগান্তকারী সংযোজন হলো maxPages সেটিং। আগের সংস্করণে কোনো ফিডে 50 টি পেজ স্ক্রল করলে হাজার হাজার অবজেক্ট মেমোরিতে জমে মোবাইল ব্রাউজার ক্র্যাশ করত। maxPages: 3 সেট করে দিলে TanStack Query মেমোরি উইন্ডোতে সর্বোচ্চ 3 টি পেজ সচল রাখে এবং নিচে স্ক্রল করার সাথে সাথে পুরোনো পেজগুলো ট্রিম করে ফেলে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: useQuery vs useInfiniteQuery',
        bn: 'কাঠামোগত তুলনা: useQuery বনাম useInfiniteQuery'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Feature Dimension', bn: 'বৈশিষ্ট্যের মাত্রা' },
        { en: 'Standard useQuery Pagination', bn: 'স্ট্যান্ডার্ড useQuery পৃষ্ঠাঙ্কন' },
        { en: 'useInfiniteQuery Feed', bn: 'useInfiniteQuery ফিড' }
      ],
      rows: [
        [
          { en: 'Query Key Structure', bn: 'কোয়েরি কি-র গঠন' },
          { en: 'Page number inside key: ["items", { page }]', bn: 'কি-র ভেতরে পেজ সংখ্যা: ["items", { page }]' },
          { en: 'Single key for entire feed: ["items", "feed"]', bn: 'পুরো ফিডের জন্য একক কি: ["items", "feed"]' }
        ],
        [
          { en: 'Cached Data Shape', bn: 'ক্যাশ করা তথ্যের আকার' },
          { en: 'Single page object: { items: [], total: 3 }', bn: 'একক পেজ অবজেক্ট: { items: [], total: 3 }' },
          { en: 'Accumulated structure: { pages: [], pageParams: [] }', bn: 'সংগৃহীত কাঠামো: { pages: [], pageParams: [] }' }
        ],
        [
          { en: 'Page Transition UX', bn: 'পেজ ট্রানজিশন অভিজ্ঞতা' },
          { en: 'placeholderData: keepPreviousData prevents unmount', bn: 'placeholderData: keepPreviousData আনমাউন্ট রোধ করে' },
          { en: 'Infinite scroll or Load More appends items below', bn: 'ইনফিনিট স্ক্রল বা লোড মোর নিচে নতুন তথ্য যোগ করে' }
        ],
        [
          { en: 'Memory Footprint', bn: 'মেমোরি খরচ' },
          { en: 'Each page is garbage collected separately via gcTime', bn: 'প্রতিটি পেজ gcTime দ্বারা স্বাধীনভাবে পরিষ্কার হয়' },
          { en: 'All pages share one cache entry; bounded by maxPages', bn: 'সব পেজ একক এন্ট্রিতে থাকে; maxPages দ্বারা সীমিত থাকে' }
        ],
        [
          { en: 'Target User Interface', bn: 'উপযুক্ত ইউজার ইন্টারফেস' },
          { en: 'E-commerce tables, admin grids, numbered pagination', bn: 'ই-কমার্স টেবিল, অ্যাডমিন গ্রিড, সংখ্যাঙ্কিত পেজিনেশন' },
          { en: 'Twitter feeds, Instagram timelines, live chat history', bn: 'সোশ্যাল মিডিয়া ফিড, ইন্সটাগ্রাম টাইমলাইন, লাইভ চ্যাট হিস্ট্রি' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Pagination & Infinite Query Mechanics',
        bn: 'বাস্তব কোড সিমুলেশন: পেজিনেশন ও ইনফিনিট কোয়েরি কার্যপদ্ধতি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of TanStack Query Pagination & useInfiniteQuery behavior

class QueryCacheMock {
  private queries = new Map<string, { data: any; updatedAt: number }>();

  getQuery(keyStr: string) {
    return this.queries.get(keyStr);
  }

  setQuery(keyStr: string, data: any) {
    this.queries.set(keyStr, { data, updatedAt: Date.now() });
  }
}

// 1. Simulating Pagination with keepPreviousData
function simulatePagination() {
  const cache = new QueryCacheMock();
  const logs: Array<{ page: number; isPlaceholder: boolean; itemsCount: number; firstItem: string | null }> = [];

  // Page 1 is already cached
  cache.setQuery('["products",{"page":1}]', {
    items: ['Laptop', 'Mouse', 'Keyboard'],
    totalPages: 3,
    currentPage: 1
  });

  // User navigates from Page 1 to Page 2
  const currentPage = 2;
  const targetKey = JSON.stringify(['products', { page: currentPage }]);
  const previousKey = JSON.stringify(['products', { page: 1 }]);

  // TanStack Query v5 placeholderData: keepPreviousData logic
  let activeData = cache.getQuery(targetKey)?.data;
  let isPlaceholderData = false;

  if (!activeData) {
    const prevQuery = cache.getQuery(previousKey);
    if (prevQuery) {
      activeData = prevQuery.data;
      isPlaceholderData = true;
    }
  }

  logs.push({
    page: currentPage,
    isPlaceholder: isPlaceholderData,
    itemsCount: activeData ? activeData.items.length : 0,
    firstItem: activeData ? activeData.items[0] : null
  });

  // Now Page 2 arrives from the network
  cache.setQuery(targetKey, {
    items: ['Monitor', 'Headphones', 'Webcam'],
    totalPages: 3,
    currentPage: 2
  });

  activeData = cache.getQuery(targetKey)!.data;
  isPlaceholderData = false;

  logs.push({
    page: currentPage,
    isPlaceholder: isPlaceholderData,
    itemsCount: activeData.items.length,
    firstItem: activeData.items[0]
  });

  return logs;
}

// 2. Simulating useInfiniteQuery with maxPages
function simulateInfiniteQuery() {
  const allDatabasePosts = [
    { id: 101, title: 'Intro to React' },
    { id: 102, title: 'TanStack Query Basics' },
    { id: 103, title: 'Mutations & Invalidation' },
    { id: 104, title: 'Optimistic UI' },
    { id: 105, title: 'Query Key Factories' },
    { id: 106, title: 'Infinite Scroll Mastery' }
  ];

  const pageSize = 2;

  function fetchPostsPage(pageParam: number) {
    const start = pageParam * pageSize;
    const items = allDatabasePosts.slice(start, start + pageSize);
    const nextCursor = (start + pageSize < allDatabasePosts.length) ? pageParam + 1 : undefined;
    return { items, nextCursor };
  }

  const infiniteData: { pages: Array<{ items: typeof allDatabasePosts; nextCursor?: number }>; pageParams: number[] } = {
    pages: [],
    pageParams: []
  };

  const maxPages = 2; // Keep at most 2 pages in memory
  let currentCursor: number | undefined = 0;

  // Fetch Page 0
  const page0 = fetchPostsPage(currentCursor);
  infiniteData.pages.push(page0);
  infiniteData.pageParams.push(currentCursor);
  currentCursor = page0.nextCursor;

  // Fetch Page 1
  const page1 = fetchPostsPage(currentCursor!);
  infiniteData.pages.push(page1);
  infiniteData.pageParams.push(currentCursor!);
  currentCursor = page1.nextCursor;

  // Fetch Page 2 (with maxPages = 2, oldest page drops out from memory window)
  const page2 = fetchPostsPage(currentCursor!);
  infiniteData.pages.push(page2);
  infiniteData.pageParams.push(currentCursor!);
  currentCursor = page2.nextCursor;

  if (infiniteData.pages.length > maxPages) {
    infiniteData.pages.shift();
    infiniteData.pageParams.shift();
  }

  const flattenedPostCount = infiniteData.pages.flatMap(p => p.items).length;
  const hasMore = currentCursor !== undefined;

  return {
    retainedPagesCount: infiniteData.pages.length,
    firstRetainedPostId: infiniteData.pages[0].items[0].id,
    lastRetainedPostId: infiniteData.pages[1].items[1].id,
    totalVisiblePosts: flattenedPostCount,
    hasMore
  };
}

const paginationResults = simulatePagination();
console.log('Pagination Step 1 (Loading Page 2 with placeholderData):');
console.log('isPlaceholderData:', paginationResults[0].isPlaceholder);
// -> isPlaceholderData: true
console.log('Rendered items count:', paginationResults[0].itemsCount);
// -> Rendered items count: 3
console.log('Rendered first item:', paginationResults[0].firstItem);
// -> Rendered first item: Laptop

console.log('Pagination Step 2 (Page 2 resolved):');
console.log('isPlaceholderData:', paginationResults[1].isPlaceholder);
// -> isPlaceholderData: false
console.log('Rendered items count:', paginationResults[1].itemsCount);
// -> Rendered items count: 3
console.log('Rendered first item:', paginationResults[1].firstItem);
// -> Rendered first item: Monitor

const infiniteResults = simulateInfiniteQuery();
console.log('Infinite Query with maxPages 2:');
console.log('Retained pages in memory:', infiniteResults.retainedPagesCount);
// -> Retained pages in memory: 2
console.log('First retained post ID:', infiniteResults.firstRetainedPostId);
// -> First retained post ID: 103
console.log('Last retained post ID:', infiniteResults.lastRetainedPostId);
// -> Last retained post ID: 106
console.log('Total visible posts in memory window:', infiniteResults.totalVisiblePosts);
// -> Total visible posts in memory window: 4
console.log('Has next page available:', infiniteResults.hasMore);
// -> Has next page available: false`,
      caption: {
        en: 'Simulation: pagination retains 3 items during fetch; infinite query retains 2 pages and 4 posts with maxPages 2',
        bn: 'সিমুলেশন: পেজিনেশন ফেচ চলাকালে ৩ টি আইটেম ধরে রাখে; ইনফিনিট কোয়েরি maxPages ২ দিয়ে ২ টি পেজ ও ৪ টি পোস্ট রাখে'
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
        en: 'Rule 1: Always disable pagination controls when isPlaceholderData is true. If a user rapidly clicks page 2 then page 3 before page 2 resolves, multiple redundant queries trigger in rapid succession, wasting client network bandwidth and server CPU cycles.',
        bn: 'নিয়ম ১: isPlaceholderData সত্য থাকাকালীন সর্বদা পেজিনেশন বাটন ডিজেবল রাখুন। পেজ ২ লোড হওয়ার আগেই ব্যবহারকারী পেজ ৩ এ ক্লিক করলে অপ্রয়োজনীয় একাধিক রিকোয়েস্ট নেটওয়ার্ক ট্র্যাফিক ও সার্ভারের ওপর অযথা চাপ সৃষ্টি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never hardcode arithmetic page increments in getNextPageParam. Instead of assuming next = page + 1, always rely on the backend cursor payload such as lastPage.nextCursor. When the database runs out of items, returning undefined stops useInfiniteQuery gracefully without triggering 404 errors.',
        bn: 'নিয়ম ২: getNextPageParam-এ কখনো অনুমানের ওপর page + ১ যোগ করবেন না। বরং সর্বদা ব্যাকএন্ডের রেসপন্স থেকে lastPage.nextCursor পড়ুন। ডেটা শেষ হলে undefined রিটার্ন করলে useInfiniteQuery শান্তভাবে বন্ধ হয় এবং কোনো ৪০৪ ত্রুটি ঘটে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Set initialPageParam explicitly in TanStack Query v5. Leaving initialPageParam undefined causes TypeScript compilation errors and unexpected runtime behavior because v5 requires a deterministic starting cursor for infinite feeds.',
        bn: 'নিয়ম ৩: TanStack Query v5-এ initialPageParam স্পষ্টভাবে নির্ধারণ করুন। এটি বাদ দিলে টাইপস্ক্রিপ্ট কম্পাইলেশন ত্রুটি দেখা দেবে কারণ v5-এ ইনফিনিট ফিডের জন্য একটি নির্দিষ্ট প্রারম্ভিক কার্সর থাকা বাধ্যতামূলক।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Apply maxPages for feeds targeting mobile devices. Constraining memory to 3 or 4 pages ensures smooth 60fps scrolling and prevents out-of-memory crashes on low-powered mobile smartphones.',
        bn: 'নিয়ম ৪: মোবাইল ডিভাইসের জন্য উদ্দিষ্ট ফিডে maxPages ব্যবহার করুন। মেমোরিকে ৩ বা ৪ টি পেজে সীমাবদ্ধ রাখলে মসৃণ স্ক্রলিং বজায় থাকে এবং ফোনের মেমোরি ফুরিয়ে যাওয়া রোধ করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'tq-paged-ex1',
      kind: 'mcq',
      topic: 'Pagination placeholder configuration in TanStack Query v5',
      question: {
        en: 'What is the correct configuration in TanStack Query v5 to retain previous page data while fetching the next page?',
        bn: 'TanStack Query v5-এ পরবর্তী পেজ ফেচ করার সময় পূর্ববর্তী পেজের ডেটা স্ক্রিনে ধরে রাখার সঠিক কনফিগারেশন কোনটি?'
      },
      options: [
        {
          en: 'placeholderData: keepPreviousData imported directly from @tanstack/react-query',
          bn: 'placeholderData: keepPreviousData যা সরাসরি @tanstack/react-query থেকে ইমপোর্ট করা হয়'
        },
        {
          en: 'keepPreviousData: true declared inside the query options object',
          bn: 'কোয়েরি অপশন অবজেক্টে keepPreviousData: true ঘোষণা করা'
        },
        {
          en: 'staleTime: Infinity set on the page query',
          bn: 'পেজ কোয়েরিতে staleTime: Infinity নির্ধারণ করা'
        },
        {
          en: 'suspense: true with an empty fallback container',
          bn: 'suspense: true সাথে একটি ফাঁকা ফলব্যাক কন্টেইনার'
        }
      ],
      answer: 0,
      hint: {
        en: 'TanStack Query v5 replaced the boolean keepPreviousData option with a helper function passed to placeholderData.',
        bn: 'TanStack Query v5-এ বুলিয়ান keepPreviousData অপশনটি বাদ দিয়ে placeholderData-র জন্য হেল্পার ফাংশন আনা হয়েছে।'
      },
      explanation: {
        en: 'In TanStack Query v5, keepPreviousData is a functional identity helper passed to placeholderData. It smoothly preserves the previous query snapshot while the next page loads in the background.',
        bn: 'TanStack Query v5-এ keepPreviousData হলো একটি ফাংশনাল হেল্পার যা placeholderData-তে পাস করতে হয়। এটি পরবর্তী পেজ লোড হওয়ার সময় পূর্বের ডেটা নিখুঁতভাবে স্ক্রিনে প্রদর্শন করে।'
      }
    },
    {
      id: 'tq-paged-ex2',
      kind: 'mcq',
      topic: 'Graceful infinite query termination with getNextPageParam',
      question: {
        en: 'How should getNextPageParam signal that there are no further pages available in an infinite query?',
        bn: 'একটি ইনফিনিট কোয়েরিতে getNextPageParam কীভাবে সংকেত দেয় যে আর কোনো পেজ অবশিষ্ট নেই?'
      },
      options: [
        {
          en: 'Return undefined or null from the getNextPageParam callback function',
          bn: 'getNextPageParam কলব্যাক ফাংশন থেকে undefined অথবা null রিটার্ন করার মাধ্যমে'
        },
        {
          en: 'Throw an HTTP 404 exception from inside queryFn',
          bn: 'queryFn-এর ভেতর থেকে HTTP ৪০৪ এক্সেপশন ছুড়ে মারার মাধ্যমে'
        },
        {
          en: 'Return an empty array [] from getNextPageParam',
          bn: 'getNextPageParam থেকে একটি ফাঁকা অ্যারে [] রিটার্ন করার মাধ্যমে'
        },
        {
          en: 'Call queryClient.cancelQueries() immediately',
          bn: 'সরাসরি queryClient.cancelQueries() কল করার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returning undefined or null signals that no next page parameter exists.',
        bn: 'undefined বা null রিটার্ন করলে বোঝায় পরবর্তী পেজের জন্য কোনো প্যারামিটার নেই।'
      },
      explanation: {
        en: 'When getNextPageParam returns undefined or null, TanStack Query recognizes that the dataset has reached its end and automatically sets hasNextPage to false.',
        bn: 'getNextPageParam যখন undefined বা null রিটার্ন করে, তখন TanStack Query বোঝে ডেটাসেট সমাপ্ত এবং স্বয়ংক্রিয়ভাবে hasNextPage-কে false করে দেয়।'
      }
    },
    {
      id: 'tq-paged-ex3',
      kind: 'mcq',
      topic: 'Client-side memory management using maxPages',
      question: {
        en: 'What architectural problem does the maxPages option solve in TanStack Query v5?',
        bn: 'TanStack Query v5-এ maxPages অপশনটি কোন কাঠামোগত সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It limits the maximum number of pages retained in memory cache to prevent runaway RAM consumption on mobile devices',
          bn: 'এটি মেমোরি ক্যাশে সংরক্ষিত পেজের সর্বোচ্চ সংখ্যা সীমিত রাখে যাতে মোবাইল ডিভাইসে অতিরিক্ত র‍্যাম খরচ না হয়'
        },
        {
          en: 'It limits the number of rows returned by the backend SQL database query',
          bn: 'এটি ব্যাকএন্ড এসকিউএল ডেটাবেজ কোয়েরি দ্বারা ফেরত আসা রো-এর সংখ্যা সীমিত করে'
        },
        {
          en: 'It automatically renders pagination buttons 1 through N in the document body',
          bn: 'এটি ডকুমেন্টের বডিতে ১ থেকে N পর্যন্ত স্বয়ংক্রিয়ভাবে পেজিনেশন বাটন রেন্ডার করে'
        },
        {
          en: 'It forces the client to refetch page 1 every 5 seconds',
          bn: 'এটি ক্লায়েন্টকে প্রতি ৫ সেকেন্ড পরপর পেজ ১ রিফেচ করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about memory bounding when scrolling through dozens of pages on mobile phones.',
        bn: 'মোবাইল ফোনে ডজন ডজন পেজ স্ক্রল করার সময় মেমোরি সীমাবদ্ধতার কথা ভাবুন।'
      },
      explanation: {
        en: 'In long continuous scrolling lists, accumulating 50 or more pages bloats browser RAM. Setting maxPages trims distant pages from the active cache array, keeping memory footprint constant.',
        bn: 'দীর্ঘ ইনফিনিট স্ক্রলিংয়ে ৫০ বা ততোধিক পেজ জমে গেলে ব্রাউজারের র‍্যাম ভরে যায়। maxPages সেট করলে দূরের পেজগুলো ক্যাশ থেকে সরিয়ে মেমোরি খরচ সর্বদা সীমিত রাখা যায়।'
      }
    },
    {
      id: 'tq-paged-ex4',
      kind: 'mcq',
      topic: 'useInfiniteQuery returned data structure',
      question: {
        en: 'What is the structure of the data object returned by the useInfiniteQuery hook?',
        bn: 'useInfiniteQuery হুক থেকে প্রাপ্ত data অবজেক্টের অভ্যন্তরীণ গঠন কেমন হয়?'
      },
      options: [
        {
          en: 'An object containing two arrays: pages for all fetched page payloads, and pageParams for the cursor arguments',
          bn: 'একটি অবজেক্ট যাতে দুটি অ্যারে থাকে: সমস্ত পেজের জন্য pages, এবং কার্সর আর্গুমেন্টের জন্য pageParams'
        },
        {
          en: 'A single flat array where all fetched items are permanently concatenated',
          bn: 'একটিমাত্র সমতল অ্যারে যেখানে সমস্ত ফেচ করা আইটেম স্থায়ীভাবে জোড়া লাগানো থাকে'
        },
        {
          en: 'A linked list of unresolved browser network promises',
          bn: 'ব্রাউজার নেটওয়ার্ক প্রমিজের একটি অনিষ্পন্ন লিঙ্কড লিস্ট'
        },
        {
          en: 'A binary search tree indexed by primary database keys',
          bn: 'প্রাইমারি ডেটাবেজ কি দ্বারা সূচিত একটি বাইনারি সার্চ ট্রি'
        }
      ],
      answer: 0,
      hint: {
        en: 'The returned structure separates individual page payloads from the parameters used to fetch them.',
        bn: 'রিটার্ন করা কাঠামো প্রতিটি পেজের ডেটা এবং তা আনতে ব্যবহৃত প্যারামিটারকে দুটি পৃথক অ্যারেতে রাখে।'
      },
      explanation: {
        en: 'useInfiniteQuery structures accumulated feed data into data.pages (array of page responses) and data.pageParams (array of used cursor parameters).',
        bn: 'useInfiniteQuery তার ডেটাকে data.pages (প্রতিটি পেজের রেসপন্স) এবং data.pageParams (ব্যবহৃত কার্সর প্যারামিটার) এই দুই অ্যারেতে সংরক্ষণ করে।'
      }
    }
  ],
  quiz: {
    id: 'the-paged-freight-quiz',
    title: {
      en: 'Pagination & Infinite Feeds Mastery Quiz',
      bn: 'পৃষ্ঠাঙ্কন ও অসীম ফিডস মাস্টারি কুইজ'
    },
    questions: [
      {
        id: 'q-placeholder-vs-loading',
        kind: 'mcq',
        topic: 'isPlaceholderData flag behavior during pagination',
        question: {
          en: 'How does the isPlaceholderData boolean allow frontend developers to improve the pagination user experience?',
          bn: 'isPlaceholderData বুলিয়ান ফ্ল্যাগটি কীভাবে ফ্রন্টএন্ড ডেভেলপারদের পেজিনেশনের অভিজ্ঞতা উন্নত করতে সাহায্য করে?'
        },
        options: [
          {
            en: 'It enables developers to keep the previous page visible while dimming opacity and disabling buttons, preventing blank loading flickers',
            bn: 'এটি ডেভেলপারদের পূর্ববর্তী পেজ দৃশ্যমান রেখে অপাসিটি হালকা কমাতে এবং বাটন নিষ্ক্রিয় রাখতে দেয়, ফলে ব্ল্যাংক লোডিং ফ্লিকার প্রতিরোধ হয়'
          },
          {
            en: 'It automatically converts numbered pagination into an infinite scroll timeline',
            bn: 'এটি স্বয়ংক্রিয়ভাবে সংখ্যাঙ্কিত পেজিনেশনকে ইনফিনিট স্ক্রল টাইমলাইনে রূপান্তরিত করে'
          },
          {
            en: 'It triggers an immediate browser reload if the next page takes longer than 2 seconds',
            bn: 'পরবর্তী পেজ আসতে ২ সেকেন্ডের বেশি সময় লাগলে এটি ব্রাউজার রিলোড করে দেয়'
          },
          {
            en: 'It deletes all cached records from indexedDB storage',
            bn: 'এটি indexedDB স্টোরেজ থেকে সমস্ত ক্যাশ করা রেকর্ড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider visual feedback during the transition window before the new page query resolves.',
          bn: 'নতুন পেজের কোয়েরি আসার পূর্ববর্তী ট্রানজিশন উইন্ডোতে ভিজ্যুয়াল সংকেতের কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'When isPlaceholderData is true, the user continues seeing the previous page table instead of a jarring empty space, while disabled controls prevent accidental duplicate navigation.',
          bn: 'isPlaceholderData সত্য থাকলে ব্যবহারকারী হঠাৎ ফাঁকা স্ক্রিন দেখার বদলে পুরোনো পেজের টেবিল দেখতে পান এবং বাটন বন্ধ থাকায় ভুল করে ডাবল ক্লিক করতে পারেন না।'
        }
      },
      {
        id: 'q-initial-page-param-v5',
        kind: 'mcq',
        topic: 'initialPageParam requirement in TanStack Query v5',
        question: {
          en: 'Why is initialPageParam strictly mandatory when declaring useInfiniteQuery in TanStack Query v5?',
          bn: 'TanStack Query v5-এ useInfiniteQuery ঘোষণার সময় initialPageParam কেন কঠোরভাবে বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'It defines the deterministic initial cursor passed to queryFn for fetching the very first page of the feed',
            bn: 'এটি ফিডের সর্বপ্রথম পেজটি আনার জন্য queryFn-এ পাস করা নির্দিষ্ট প্রাথমিক কার্সর নির্ধারণ করে'
          },
          {
            en: 'It determines the total number of CPU threads assigned to the fetch pipeline',
            bn: 'এটি ফেচ পাইপলাইনে বরাদ্দকৃত মোট সিপিইউ থ্রেডের সংখ্যা নির্ধারণ করে'
          },
          {
            en: 'It encrypts the payload using AES-256 before transmitting over HTTPS',
            bn: 'এটি এইচটিটিপিএস দিয়ে পাঠানোর আগে ডেটা এইএস-২৫৬ দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It forces the server to return all available database rows in a single batch',
            bn: 'এটি সার্ভারকে সমস্ত ডেটাবেজ রো একবারে ফেরত পাঠাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The first page request requires a concrete starting parameter.',
          bn: 'প্রথম পেজ রিকোয়েস্ট পাঠানোর জন্য একটি সুনির্দিষ্ট শুরুর প্যারামিটার প্রয়োজন।'
        },
        explanation: {
          en: 'In v5, omitting initialPageParam is a TypeScript compile error. Providing an explicit starting cursor ensures predictable execution for the first page fetch.',
          bn: 'v5-এ initialPageParam বাদ দিলে টাইপস্ক্রিপ্ট কম্পাইল এরর দেয়। একটি স্পষ্ট শুরুর কার্সর প্রদান প্রথম পেজ ফেচকে সুনির্দিষ্ট ও নির্ভরযোগ্য করে তোলে।'
        }
      },
      {
        id: 'q-cursor-vs-offset',
        kind: 'mcq',
        topic: 'cursor-based pagination versus offset pagination in feeds',
        question: {
          en: 'Why is cursor-based pagination strongly preferred over offset pagination for real-time infinite feeds?',
          bn: 'রিয়েল-টাইম ইনফিনিট ফিডের জন্য অফসেট পেজিনেশনের চেয়ে কার্সর-ভিত্তিক পেজিনেশন কেন ব্যাপকভাবে পছন্দনীয়?'
        },
        options: [
          {
            en: 'Cursor-based pagination avoids duplicate or skipped items when new records are inserted at the top of the feed',
            bn: 'ফিডের শীর্ষে নতুন রেকর্ড যুক্ত হলে কার্সর-ভিত্তিক পেজিনেশন আইটেম ডুপ্লিকেট বা বাদ পড়ে যাওয়া প্রতিরোধ করে'
          },
          {
            en: 'Offset pagination cannot handle more than 10 items in total',
            bn: 'অফসেট পেজিনেশন সর্বমোট ১০ টির বেশি আইটেম পরিচালনা করতে পারে না'
          },
          {
            en: 'Cursor pagination completely disables the need for database indexing',
            bn: 'কার্সর পেজিনেশন ডেটাবেজে ইনডেক্সিং করার প্রয়োজনীয়তা পুরোপুরি দূর করে দেয়'
          },
          {
            en: 'Offset pagination only functions with XML payloads and fails with JSON',
            bn: 'অফসেট পেজিনেশন কেবল এক্সএমএল ডেটার সাথে চলে এবং জেএসনে ব্যর্থ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about what happens when someone publishes a new tweet while you are scrolling through offset 20.',
          bn: 'আপনি যখন ২০ নম্বর অফসেটে স্ক্রল করছেন তখন নতুন কোনো পোস্ট পাবলিশ হলে কী হয় তা চিন্তা করুন।'
        },
        explanation: {
          en: 'With offset pagination, newly inserted records shift all existing rows down, causing the next page to fetch duplicates. Cursors point to immutable record anchors, guaranteeing consistency.',
          bn: 'অফসেট পেজিনেশনে নতুন পোস্ট এলে আগের সব রো নিচে নেমে যায়, ফলে পরবর্তী পেজে ডুপ্লিকেট ডেটা চলে আসে। কার্সর নির্দিষ্ট অপরিবর্তনীয় রেকর্ডে নোঙর করে ডেটার ধারাবাহিকতা নিশ্চিত করে।'
        }
      },
      {
        id: 'q-max-pages-windowing',
        kind: 'mcq',
        topic: 'Bidirectional scrolling and maxPages windowing behavior',
        question: {
          en: 'When maxPages is set to 2 and a user fetches page 3, what happens to the accumulated pages in cache?',
          bn: 'যখন maxPages মান ২ সেট করা থাকে এবং ব্যবহারকারী ৩ নম্বর পেজ ফেচ করেন, তখন ক্যাশে জমাকৃত পেজগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'Page 1 is dropped from the active memory cache array, leaving only page 2 and page 3 in RAM',
            bn: '১ নম্বর পেজটি সক্রিয় মেমোরি ক্যাশ অ্যারে থেকে সরিয়ে দেওয়া হয়, ফলে র‍্যামে কেবল ২ ও ৩ নম্বর পেজ থাকে'
          },
          {
            en: 'The entire application terminates with an uncaught memory allocation error',
            bn: 'মেমোরি বরাদ্দের ত্রুটি দেখিয়ে পুরো অ্যাপ্লিকেশন বন্ধ হয়ে যায়'
          },
          {
            en: 'The query client triggers a permanent wipe of all user cookies and tokens',
            bn: 'কোয়েরি ক্লায়েন্ট ব্যবহারকারীর সমস্ত কুকিজ ও টোকেন চিরতরে মুছে ফেলে'
          },
          {
            en: 'All 3 pages are retained and maxPages is automatically ignored by the runtime',
            bn: '৩ টি পেজই রেখে দেওয়া হয় এবং রানটাইম maxPages অপশনটি পুরোপুরি উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'maxPages acts as a sliding window over the accumulated pages array.',
          bn: 'maxPages সঞ্চিত পেজ অ্যারের ওপর একটি স্লাইডিং উইন্ডো হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'Setting maxPages instructs TanStack Query to act as a sliding window. When the number of pages exceeds maxPages, the furthest page is trimmed from memory, maintaining bounded footprint.',
          bn: 'maxPages নির্ধারণ করলে TanStack Query একটি স্লাইডিং উইন্ডোর মতো কাজ করে। পেজের সংখ্যা maxPages অতিক্রম করলে সবচেয়ে পুরোনো পেজটি মেমোরি থেকে ট্রিম হয়ে যায় এবং মেমোরি সুরক্ষিত থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-dawn-dock',
    title: {
      en: 'Prefetching & Route Loaders — prefetchQuery, ensureQueryData & initialData',
      bn: 'প্রিফেচিং ও রুট লোডার্স — prefetchQuery, ensureQueryData ও initialData'
    }
  }
};
