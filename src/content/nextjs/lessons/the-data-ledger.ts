import type { Lesson } from '../../../lib/types';

export const dataLedgerLesson: Lesson = {
  slug: 'the-data-ledger',
  tech: 'nextjs',
  title: {
    en: 'Data Fetching & Caching — force-cache, revalidate & On-Demand Tags',
    bn: 'ডাটা ফেচিং ও ক্যাশিং — force-cache, revalidate ও অন-ডিমান্ড ট্যাগ'
  },
  summary: {
    en: 'Next.js extends the native fetch API to provide declarative caching controls across static and dynamic rendering. In this lesson, you will master the difference between force-cache and no-store, configure time-based ISR with revalidate seconds, organize cache boundaries with cache tags, and purge stale entries on demand using revalidateTag and revalidatePath.',
    bn: 'Next.js নেটিভ fetch এপিআই-কে বর্ধিত করে স্ট্যাটিক ও ডায়নামিক রেন্ডারিংয়ে উন্নত ক্যাশ নিয়ন্ত্রণ ব্যবস্থা প্রদান করে। এই পাঠে আপনি force-cache ও no-store-এর পার্থক্য, সেকেন্ডে revalidate দিয়ে সময়ভিত্তিক ISR কনফিগারেশন, ক্যাশ ট্যাগ দিয়ে ডাটা গ্রুপিং এবং revalidateTag ও revalidatePath দিয়ে অন-ডিমান্ড ক্যাশ রিফ্রেশ গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'nextjs-data-cache-architecture',
      text: {
        en: 'The Next.js Data Cache and Invalidation Architecture',
        bn: 'Next.js ডাটা ক্যাশ ও ইনভ্যালিডেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you fetch data on the server in Next.js, the framework intercepts HTTP requests through an integrated Data Cache. This persistent cache survives incoming user requests and server deployments. By attaching cache directives to fetch options, you can choose between immutable static storage, periodic background revalidation, or fully dynamic live requests.',
        bn: 'যখন আপনি Next.js সার্ভারে ডাটা ফেচ করেন, তখন ফ্রেমওয়ার্ক একটি অভ্যন্তরীণ ডাটা ক্যাশের মাধ্যমে এইচটিটিপি রিকোয়েস্ট পরিচালনা করে। এই স্থায়ী ক্যাশ সার্ভার রিস্টার্টের পরেও তথ্য ধরে রাখতে পারে। fetch অপশনে ক্যাশ ডিরেক্টিভ যোগ করে আপনি স্থায়ী স্ট্যাটিক স্টোরেজ, পর্যায়ক্রমিক ব্যাকগ্রাউন্ড রিভ্যালিডেশন বা তাৎক্ষণিক লাইভ ডাটা লোডের সিদ্ধান্ত নিতে পারেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Data Cache',
          def: {
            en: 'A persistent server-side cache that stores fetch responses across requests and deployments until invalidated.',
            bn: 'একটি স্থায়ী সার্ভার-সাইড ক্যাশ যা ইনভ্যালিডেট না করা পর্যন্ত একাধিক রিকোয়েস্টে fetch রেসপন্স জমা রাখে।'
          }
        },
        {
          term: 'force-cache vs no-store',
          def: {
            en: 'force-cache serves cached responses permanently; no-store skips the cache to fetch fresh data on every request.',
            bn: 'force-cache স্থায়ীভাবে ক্যাশ করা রেসপন্স পরিবেশন করে; no-store ক্যাশ এড়িয়ে প্রতিটি রিকোয়েস্টে তাজা ডাটা আনে।'
          }
        },
        {
          term: 'revalidate: N (ISR)',
          def: {
            en: 'Time-based cache invalidation that serves cached data while asynchronously updating stale entries after N seconds.',
            bn: 'সময়ভিত্তিক ক্যাশ নিয়ন্ত্রণ যা N সেকেন্ড পার হলে ব্যাকগ্রাউন্ডে নতুন ডাটা এনে ক্যাশ আপডেট করে নেয়।'
          }
        },
        {
          term: 'revalidateTag()',
          def: {
            en: 'An on-demand cache purging function that invalidates all cached fetch requests tagged with a specific string label.',
            bn: 'একটি অন-ডিমান্ড ক্যাশ মুছে ফেলার ফাংশন যা নির্দিষ্ট ট্যাগযুক্ত সমস্ত ক্যাশ ডাটা এক নিমেষে খালি করে দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'cache-strategies-matrix',
      text: {
        en: 'Data Fetching Cache Configuration Matrix',
        bn: 'ডাটা ফেচিং ক্যাশ কনফিগারেশন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Configuration Syntax', bn: 'সিনট্যাক্স' },
        { en: 'Cache Behavior', bn: 'ক্যাশের আচরণ' },
        { en: 'Target Production Workload', bn: 'উপযুক্ত কাজের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'fetch(url, { cache: "force-cache" })', bn: 'fetch(url, { cache: "force-cache" })' },
          { en: 'Cached permanently in Data Cache (static)', bn: 'ডাটা ক্যাশে স্থায়ীভাবে সংরক্ষিত থাকে' },
          { en: 'Static marketing pages, legal disclosures, terms', bn: 'মার্কেটিং পেজ, ব্যবহারের শর্তাবলী, নিয়মাবলী' }
        ],
        [
          { en: 'fetch(url, { cache: "no-store" })', bn: 'fetch(url, { cache: "no-store" })' },
          { en: 'Bypasses cache; fetches fresh on every request', bn: 'ক্যাশ এড়িয়ে প্রতিবার সরাসরি নেটওয়ার্ক থেকে আনে' },
          { en: 'Shopping carts, user profiles, real-time analytics', bn: 'শপিং কার্ট, ইউজার প্রোফাইল, লাইভ মেট্রিক্স' }
        ],
        [
          { en: 'fetch(url, { next: { revalidate: 300 } })', bn: 'fetch(url, { next: { revalidate: 300 } })' },
          { en: 'Serves cache for 300 seconds; then refreshes in background', bn: '৩০০ সেকেন্ড ক্যাশ রাখে; এরপর ব্যাকগ্রাউন্ডে রিফ্রেশ করে' },
          { en: 'Product catalogs, blog articles, news listings', bn: 'প্রোডাক্ট ক্যাটালগ, ব্লগ পোস্ট, সংবাদ তালিকা' }
        ],
        [
          { en: 'fetch(url, { next: { tags: ["products"] } })', bn: 'fetch(url, { next: { tags: ["products"] } })' },
          { en: 'Cached until revalidateTag("products") is triggered', bn: 'revalidateTag("products") না ডাকা পর্যন্ত ক্যাশ থাকে' },
          { en: 'Inventory items updated through CMS webhooks or forms', bn: 'সিএমএস বা ফর্ম দিয়ে আপডেট হওয়া পণ্যের তালিকা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'cache-simulation-code',
      text: {
        en: 'Working Next.js Data Cache and On-Demand Invalidation Simulation',
        bn: 'কার্যকরী Next.js ডাটা ক্যাশ ও অন-ডিমান্ড ইনভ্যালিডেশন সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js Data Cache, Tags, and On-Demand Invalidation
class MockNextDataCache {
  constructor() {
    this.store = new Map();
    this.networkRequests = 0;
  }

  async fetch(url, options = {}) {
    const isNoStore = options.cache === 'no-store';
    const tags = options.next?.tags || [];

    if (!isNoStore && this.store.has(url)) {
      return { data: this.store.get(url).data, cached: true };
    }

    // Cache miss or no-store: execute simulated network request
    this.networkRequests += 1;
    const freshData = { url, timestamp: Date.now(), itemCount: 25 };

    if (!isNoStore) {
      this.store.set(url, { data: freshData, tags });
    }

    return { data: freshData, cached: false };
  }

  revalidateTag(tag) {
    let purgedCount = 0;
    for (const [key, value] of this.store.entries()) {
      if (value.tags.includes(tag)) {
        this.store.delete(key);
        purgedCount += 1;
      }
    }
    return purgedCount;
  }
}

const dataCache = new MockNextDataCache();

// 1. Initial fetch: cache miss triggers network request 1
const res1 = await dataCache.fetch('/api/products', { next: { tags: ['products'] } });

// 2. Second fetch: cache hit returns data with zero network requests
const res2 = await dataCache.fetch('/api/products', { next: { tags: ['products'] } });

// 3. User updates inventory: trigger on-demand revalidation
const purged = dataCache.revalidateTag('products');

// 4. Third fetch after purge: cache miss triggers network request 2
const res3 = await dataCache.fetch('/api/products', { next: { tags: ['products'] } });

console.log('First fetch cached status:', res1.cached);
// -> First fetch cached status: false
console.log('Second fetch cached status:', res2.cached);
// -> Second fetch cached status: true
console.log('Total tags purged on mutation:', purged);
// -> Total tags purged on mutation: 1
console.log('Total real network requests executed:', dataCache.networkRequests);
// -> Total real network requests executed: 2`,
      caption: {
        en: 'Data cache serves second read from memory and executes 2 total network requests after tag purge',
        bn: 'ডাটা ক্যাশ দ্বিতীয় পাঠ মেমরি থেকে চালায় এবং ট্যাগ মুছে ফেলার পর সর্বমোট ২টি নেটওয়ার্ক রিকোয়েস্ট সম্পন্ন হয়'
      }
    },
    {
      type: 'heading',
      id: 'cache-discipline-rules',
      text: {
        en: 'Request Memoization and Cache Invalidation Rules',
        bn: 'রিকোয়েস্ট মেমোইজেশন ও ক্যাশ ইনভ্যালিডেশন নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Next.js automatically deduplicates identical fetch requests made across multiple components during a single server render. If a root layout and a deeply nested page both fetch the same user profile URL with the same parameters, Next.js performs the network query exactly 1 time. For non-fetch database queries, you can wrap functions in React cache() to achieve the same memoization.',
        bn: 'একক সার্ভার রেন্ডারের সময় একাধিক কম্পোনেন্ট থেকে একই fetch রিকোয়েস্ট পাঠানো হলে Next.js স্বয়ংক্রিয়ভাবে তা ডেডুপ্লিকেট করে। যদি রুট লেআউট এবং ভেতরের একটি পেজ উভয়ই একই ইউজারের ডাটা কল করে, তবে Next.js নেটওয়ার্কে কেবল ১ বারই কুয়েরি পাঠায়। সাধারণ ডাটাবেজ কোয়েরির ক্ষেত্রে React cache() ফাংশনে কোড মুড়িয়ে হুবহু একই সুবিধা পাওয়া যায়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Group Related Fetches with Tags: Add descriptive tags like tags: ["inventory"] so CMS webhooks can invalidate all related caches at once.',
          bn: '১. ট্যাগের সাহায্যে গ্রুপিং: tags: ["inventory"]-এর মতো অর্থপূর্ণ ট্যাগ দিন যাতে সিএমএস পরিবর্তনের পর এক সাথে সম্পর্কিত সব ক্যাশ মোছা যায়।'
        },
        {
          en: '2. Invalidate After Mutations: Always call revalidatePath or revalidateTag inside Server Actions right after database write operations.',
          bn: '২. মিউটেশনের পর ক্যাশ বাতিল: ডাটাবেজে পরিবর্তনের ঠিক পরপরই সার্ভার অ্যাকশনে revalidatePath বা revalidateTag ডাকুন।'
        },
        {
          en: '3. Never Cache Auth Data: Always set cache: "no-store" on endpoints returning personalized user account data or active shopping carts.',
          bn: '৩. পার্সোনালাইজড ডাটায় no-store: ব্যবহারকারীর ব্যক্তিগত অ্যাকাউন্ট বা শপিং কার্টের মতো সংবেদনশীল ডাটায় সর্বদা no-store ব্যবহার করুন।'
        },
        {
          en: '4. Wrap DB Queries in React cache: Use React cache() to prevent duplicate database roundtrips when different components read the same record.',
          bn: '৪. ডাটাবেজে React cache: একাধিক কম্পোনেন্ট থেকে একই ডাটাবেজ রো পড়া হলে অতিরিক্ত কুয়েরি এড়াতে React cache() ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-dat-ex1',
      kind: 'mcq',
      topic: 'force-cache default behavior in nextjs fetch',
      question: {
        en: 'What does specifying "fetch(url, { cache: \'force-cache\' })" instruct Next.js to do?',
        bn: '"fetch(url, { cache: \'force-cache\' })" উল্লেখ করলে Next.js-কে কী করার নির্দেশ দেওয়া হয়?'
      },
      options: [
        {
          en: 'Look for a matching response in the persistent Data Cache; if found, return it immediately without issuing a network request, enabling fast static generation',
          bn: 'স্থায়ী ডাটা ক্যাশে বিদ্যমান রেসপন্স খুঁজে দেখা; পাওয়া গেলে নেটওয়ার্ক কল ছাড়াই তাৎক্ষণিক ফেরত দেওয়া, যা দ্রুতগতির স্ট্যাটিক পেজ বানাতে সাহায্য করে'
        },
        {
          en: 'Delete all files from the operating system disk cache',
          bn: 'অপারেটিং সিস্টেমের ডিস্ক ক্যাশ থেকে সব ফাইল মুছে দেওয়া'
        },
        {
          en: 'Force the user to clear their browser history',
          bn: 'ব্যবহারকারীকে ব্রাউজারের হিস্ট্রি মুছতে বাধ্য করা'
        },
        {
          en: 'Encrypt the database with SSL certificates',
          bn: 'এসএসএল সার্টিফিকেট দিয়ে ডাটাবেজ এনক্রিপ্ট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'force-cache retrieves data from the Data Cache and persists it across builds.',
        bn: 'force-cache স্থায়ী ডাটা ক্যাশ থেকে তথ্য তোলে এবং নেটওয়ার্ক রিকোয়েস্ট বাঁচায়।'
      },
      explanation: {
        en: 'force-cache tells Next.js to cache the response in its Data Cache. It fulfills subsequent requests from cache without re-fetching from the network until explicitly invalidated.',
        bn: 'force-cache নির্দেশ দেয় যাতে রেসপন্সটি স্থায়ী ডাটা ক্যাশে জমা থাকে। ফলে পরবর্তীতে নেটওয়ার্কে নতুন করে না পাঠিয়ে ক্যাশ থেকেই অতি দ্রুত তা পরিবেশন করা যায়।'
      }
    },
    {
      id: 'nx-dat-ex2',
      kind: 'mcq',
      topic: 'revalidate seconds meaning in nextjs fetch',
      question: {
        en: 'In "fetch(url, { next: { revalidate: 60 } })", what does the number 60 represent?',
        bn: '"fetch(url, { next: { revalidate: 60 } })"-এ ৬০ সংখ্যাটি কী প্রকাশ করে?'
      },
      options: [
        {
          en: 'The cache lifespan in seconds: the cached response is served for 60 seconds; requests after 60 seconds trigger a background re-fetch to refresh the cache (ISR)',
          bn: 'ক্যাশের জীবনকাল সেকেন্ডের হিসাবে: ৬০ সেকেন্ড পর্যন্ত ক্যাশ করা ডাটা দেওয়া হবে; ৬০ সেকেন্ড পর নতুন রিকোয়েস্ট এলে ব্যাকগ্রাউন্ডে ক্যাশ রিফ্রেশ হবে (ISR)'
        },
        {
          en: 'The server will delay sending the response for 60 seconds',
          bn: 'সার্ভার রেসপন্স পাঠাতে ৬০ সেকেন্ড বিলম্ব করবে'
        },
        {
          en: 'The client browser will freeze for 60 milliseconds',
          bn: 'ক্লায়েন্ট ব্রাউজার ৬০ মিলি-সেকেন্ডের জন্য ফ্রিজ হয়ে থাকবে'
        },
        {
          en: 'The maximum allowed length of the URL query string is 60 characters',
          bn: 'ইউআরএল কোয়েরি স্ট্রিংয়ের সর্বোচ্চ দৈর্ঘ্য ৬০ ক্যারেক্টার'
        }
      ],
      answer: 0,
      hint: {
        en: 'revalidate: 60 configures a 60-second time-to-live for Incremental Static Regeneration.',
        bn: 'revalidate: ৬০ নির্দেশ করে যে ক্যাশটি ৬০ সেকেন্ড তাজা থাকবে।'
      },
      explanation: {
        en: 'This configures time-based revalidation (ISR). For 60 seconds, cached data is served. Any request arriving after 60 seconds triggers a stale-while-revalidate background refresh.',
        bn: 'এটি সময়ভিত্তিক রিক্যাশ বা ISR চালু করে। ৬০ সেকেন্ড পর্যন্ত দ্রুত ক্যাশ ডাটা দেখানো হয় এবং মেয়াদ শেষ হলে পেছনের ব্যাকগ্রাউন্ডে নতুন ডাটা দিয়ে ক্যাশ আপডেট হয়।'
      }
    },
    {
      id: 'nx-dat-ex3',
      kind: 'mcq',
      topic: 'ondemand cache invalidation with revalidatetag',
      question: {
        en: 'How does "revalidateTag(\'products\')" differ from time-based revalidation in Next.js applications?',
        bn: 'Next.js অ্যাপ্লিকেশনে সময়ভিত্তিক রিভ্যালিডেশনের তুলনায় "revalidateTag(\'products\')"-এর কাজের তফাত কী?'
      },
      options: [
        {
          en: 'It purges cached data on-demand immediately when an event occurs (such as a database mutation or CMS webhook), rather than waiting for a fixed time interval to expire',
          bn: 'এটি নির্দিষ্ট সময় পেরিয়ে যাওয়ার অপেক্ষায় না থেকে কোনো ঘটনা ঘটার (যেমন ডাটাবেজ আপডেট বা সিএমএস ওয়েবহুক) সাথে সাথে অন-ডিমান্ড ক্যাশ খালি করে দেয়'
        },
        {
          en: 'It permanently deletes all product records from the database',
          bn: 'এটি ডাটাবেজ থেকে পণ্যের সমস্ত রেকর্ড চিরতরে মুছে ফেলে'
        },
        {
          en: 'It changes the HTML title tag of the browser window',
          bn: 'এটি ব্রাউজার উইন্ডোর এইচটিএমএল title ট্যাগ বদলে দেয়'
        },
        {
          en: 'revalidateTag can only be called from inside a mobile smartphone app',
          bn: 'revalidateTag কেবল মোবাইল ফোনের অ্যাপের ভেতর থেকেই কল করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'revalidateTag provides instant on-demand cache invalidation after mutations.',
        bn: 'revalidateTag কোনো পরিবর্তনের সাথে সাথেই তৎক্ষণাৎ ক্যাশ বাতিল করার সুবিধা দেয়।'
      },
      explanation: {
        en: 'On-demand revalidation with revalidateTag purges matching cache records instantaneously. The very next visitor receives fresh data without waiting for time intervals.',
        bn: 'revalidateTag নির্দিষ্ট ট্যাগযুক্ত ক্যাশ তৎক্ষণাৎ মুছে দেয়। ফলে টাইমারের অপেক্ষায় না থেকে পরবর্তী ভিজিটর সাথে সাথেই একদম তাজা ডাটা দেখতে পান।'
      }
    },
    {
      id: 'nx-dat-ex4',
      kind: 'mcq',
      topic: 'automatic request memoization in react server components',
      question: {
        en: 'If both a layout and a child page execute "fetch(\'https://api.example.com/user\')" with identical options during the same request, how many real HTTP requests does Next.js make?',
        bn: 'যদি একই রিকোয়েস্টে একটি লেআউট এবং তার চাইল্ড পেজ উভয়ই হুবহু একই অপশনে fetch কল করে, তবে Next.js মোট কয়টি আসল নেটওয়ার্ক রিকোয়েস্ট পাঠায়?'
      },
      options: [
        {
          en: 'Exactly 1 real HTTP request, because React automatically memoizes and deduplicates identical fetch requests during a single render pass',
          bn: 'হুবহু ১টি আসল নেটওয়ার্ক রিকোয়েস্ট, কারণ একক রেন্ডারের সময় রিঅ্যাক্ট নিজে থেকেই একই fetch রিকোয়েস্ট মেমোইজ করে ডেডুপ্লিকেট করে নেয়'
        },
        {
          en: '2 separate HTTP requests sent concurrently',
          bn: 'একসাথে পাঠানো ২টি আলাদা নেটওয়ার্ক রিকোয়েস্ট'
        },
        {
          en: '0 requests because the server refuses duplicate URLs',
          bn: 'শূন্য রিকোয়েস্ট কারণ সার্ভার ডুপ্লিকেট ইউআরএল প্রত্যাখ্যান করে'
        },
        {
          en: '4 requests because each component retries twice',
          bn: '৪টি রিকোয়েস্ট কারণ প্রতিটি কম্পোনেন্ট দুইবার চেষ্টা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'React memoizes fetch requests during a single render pass.',
        bn: 'একক রেন্ডারিংয়ের সময় রিঅ্যাক্ট একই fetch রিকোয়েস্ট স্বয়ংক্রিয়ভাবে মেমোইজ করে রাখে।'
      },
      explanation: {
        en: 'During a single server render, React automatically deduplicates identical fetch GET requests. Layouts and pages can independently request the data they need without paying a network penalty.',
        bn: 'একক সার্ভার রেন্ডারের সময় রিঅ্যাক্ট একই fetch রিকোয়েস্ট মেমোইজ করে। ফলে লেআউট ও পেজ আলাদাভাবে ডাটা চাইলেও সার্ভার মাত্র ১ বারই আসল কুয়েরি পাঠায়।'
      }
    }
  ],
  quiz: {
    id: 'the-data-ledger-quiz',
    title: {
      en: 'Next.js Data Fetching, Caching & Revalidation Quiz',
      bn: 'Next.js ডাটা ফেচিং, ক্যাশিং ও রিভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'q-revalidatepath-vs-revalidatetag',
        kind: 'mcq',
        topic: 'comparing revalidatePath versus revalidateTag scope',
        question: {
          en: 'When should you choose "revalidateTag" over "revalidatePath" for cache invalidation?',
          bn: 'ক্যাশ ইনভ্যালিডেশনের ক্ষেত্রে "revalidatePath"-এর চেয়ে "revalidateTag" বেছে নেওয়া কখন অধিকতর উপযুক্ত?'
        },
        options: [
          {
            en: 'When the modified data appears across multiple different routes (e.g. updating a product that appears on the home page, category listings, and search results), invalidating the single tag purges all affected pages simultaneously',
            bn: 'যখন পরিবর্তিত ডাটা একাধিক ভিন্ন রুটে বিদ্যমান থাকে (যেমন একটি পণ্য যা হোম পেজ, ক্যাটাগরি পেজ ও সার্চে থাকে), তখন একক ট্যাগটি বাতিল করলে সমস্ত পেজের ক্যাশ একসাথে পরিষ্কার হয়ে যায়'
          },
          {
            en: 'revalidateTag can only be used on Windows computers',
            bn: 'revalidateTag কেবল উইন্ডোজ কম্পিউটারে ব্যবহার করা যায়'
          },
          {
            en: 'revalidatePath is deprecated in all versions of Next.js',
            bn: 'revalidatePath নেক্সট.জেএস-এর সব ভার্সনে বাতিল করা হয়েছে'
          },
          {
            en: 'There is no difference in capability or scope between the two functions',
            bn: 'উভয় ফাংশনের ক্ষমতা বা কার্যক্ষেত্রে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'revalidateTag invalidates by entity across all paths; revalidatePath invalidates a specific URL.',
          bn: 'revalidateTag সব রুটের নির্দিষ্ট ডাটা মোছে; revalidatePath কেবল একটি নির্দিষ্ট ইউআরএল মোছে।'
        },
        explanation: {
          en: 'revalidatePath targets a specific URL tree, whereas revalidateTag targets data across any route that fetched it with that tag. Tags provide clean decoupled entity invalidation.',
          bn: 'revalidatePath একটি নির্দিষ্ট পেজের ইউআই খালি করে। কিন্তু revalidateTag পুরো ওয়েবসাইটের যেখানে যেখানে ওই ট্যাগযুক্ত ডাটা আছে, সব একবারে তাজা করে তোলে।'
        }
      },
      {
        id: 'q-react-cache-for-database-queries',
        kind: 'mcq',
        topic: 'using React cache to deduplicate database queries',
        question: {
          en: 'Why do developers wrap database helper functions in "import { cache } from \'react\';" when querying PostgreSQL or MongoDB directly in Server Components?',
          bn: 'সার্ভার কম্পোনেন্টে সরাসরি পোস্টগ্রেস বা মঙ্গোডিবি কোয়েরি করার সময় হেল্পার ফাংশনকে "import { cache } from \'react\';" দিয়ে কেন মোড়ানো হয়?'
        },
        options: [
          {
            en: 'Native fetch requests are deduplicated automatically, but direct database/ORM queries are not; React cache() memoizes the database query per render pass so multiple components can call it without sending redundant SQL queries',
            bn: 'সাধারণ fetch রিকোয়েস্ট স্বয়ংক্রিয়ভাবে ডেডুপ্লিকেট হলেও ওআরএম বা ডাটাবেজ কোয়েরি তা হয় না; React cache() সেগুলোকে মেমোইজ করে যাতে একাধিক কম্পোনেন্ট কল করলেও বারবার এসকিউএল না চলে'
          },
          {
            en: 'It encrypts the database query with SHA-256',
            bn: 'এটি ডাটাবেজ কোয়েরিকে SHA-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It converts the SQL database into an Excel spreadsheet',
            bn: 'এটি এসকিউএল ডাটাবেজকে এক্সেল ফাইলে বদলে দেয়'
          },
          {
            en: 'React cache() shuts down the database connection pool',
            bn: 'React cache() ডাটাবেজ কানেকশন পুল বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'React cache() provides per-request memoization for non-fetch database calls.',
          bn: 'React cache() নন-ফেচ ডাটাবেজ কলের জন্য রিকোয়েস্টভিত্তিক মেমোইজেশন দেয়।'
        },
        explanation: {
          en: 'Next.js patches fetch, but cannot automatically patch direct database drivers (Prisma, Drizzle, Mongoose). Wrapping queries in React cache() gives them the same single-request memoization.',
          bn: 'Next.js সরাসরি ডাটাবেজ কোয়েরি ডেডুপ করতে পারে না। React cache() দিয়ে ফাংশনটি মুড়িয়ে নিলে একই রিকোয়েস্টে একাধিক কম্পোনেন্ট কল করলেও ডাটাবেজে মাত্র একবারই কোয়েরি যায়।'
        }
      },
      {
        id: 'q-nextjs15-fetch-default-caching',
        kind: 'mcq',
        topic: 'nextjs 15 default fetch caching policy',
        question: {
          en: 'What major change did Next.js 15 introduce regarding the default caching behavior of "fetch()" requests?',
          bn: 'নেক্সট.জেএস ১৫-এ "fetch()" রিকোয়েস্টের ডিফল্ট ক্যাশিং আচরণের ক্ষেত্রে কোন বড় পরিবর্তন আনা হয়েছে?'
        },
        options: [
          {
            en: 'fetch requests now default to "no-store" (uncached) rather than "force-cache", aligning with developer expectations that requests should fetch fresh data unless explicitly cached',
            bn: 'fetch রিকোয়েস্টগুলো এখন ডিফল্টভাবে "force-cache"-এর বদলে "no-store" (ক্যাশহীন) হিসেবে কাজ করে, ফলে স্পষ্ট নির্দেশনা ছাড়া ডাটা অযথা ক্যাশ হয়ে থাকে না'
          },
          {
            en: 'fetch requests can only download image files',
            bn: 'fetch রিকোয়েস্ট কেবল ইমেজ ফাইল ডাউনলোড করতে পারে'
          },
          {
            en: 'fetch was removed and replaced by XMLHTTPRequest',
            bn: 'fetch তুলে দিয়ে XMLHTTPRequest ব্যবহার চালু করা হয়েছে'
          },
          {
            en: 'fetch requests now cost $1 per invocation',
            bn: 'প্রতিটি fetch কলে ১ ডলার ফি কাটা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Next.js 15 flipped the default fetch cache from force-cache to no-store.',
          bn: 'নেক্সট.জেএস ১৫ ডিফল্ট ক্যাশ নীতি force-cache থেকে বদলে no-store করেছে।'
        },
        explanation: {
          en: 'In response to developer feedback, Next.js 15 made fetch requests un-cached (no-store) by default. Developers must explicitly opt into caching via force-cache or next: { revalidate }.',
          bn: 'ডেভেলপারদের সুবিধার জন্য নেক্সট.জেএস ১৫-এ ডিফল্টভাবে ক্যাশিং বন্ধ রাখা হয়েছে। এখন প্রয়োজন অনুসারে স্পষ্টভাবে force-cache বা revalidate দিয়ে ক্যাশ অন করতে হয়।'
        }
      },
      {
        id: 'q-stale-while-revalidate-visitor-experience',
        kind: 'mcq',
        topic: 'stale-while-revalidate user experience during background update',
        question: {
          en: 'When a user visits a page whose "revalidate: 60" cache expired 5 seconds ago, what does that user immediately experience?',
          bn: 'কোনো পেজের "revalidate: 60" ক্যাশের মেয়াদ ৫ সেকেন্ড আগে শেষ হওয়ার পর কোনো ভিজিটর পেজে ঢুকলে তাৎক্ষণিকভাবে কী দেখতে পাবেন?'
        },
        options: [
          {
            en: 'The user receives the stale cached page instantly without waiting; in the background, Next.js triggers a regeneration so subsequent visitors see the updated page',
            bn: 'ব্যবহারকারী কোনো বিলম্ব ছাড়াই চোখের পলকে আগের ক্যাশ করা পেজটি দেখতে পাবেন; আর ব্যাকগ্রাউন্ডে Next.js নতুন ডাটা তৈরি করে রাখবে যাতে পরের ভিজিটর তাজা পেজ পান'
          },
          {
            en: 'The browser displays an HTTP 500 internal server error page',
            bn: 'ব্রাউজার এইচটিটিপি ৫০০ ইন্টারনাল সার্ভার এরর পেজ প্রদর্শন করবে'
          },
          {
            en: 'The user must wait 60 seconds before any content appears on screen',
            bn: 'স্ক্রিনে কোনো কন্টেন্ট আসার আগে ব্যবহারকারীকে ৬০ সেকেন্ড অপেক্ষা করতে হবে'
          },
          {
            en: 'The web browser automatically closes itself',
            bn: 'ওয়েব ব্রাউজার নিজে থেকেই বন্ধ হয়ে যাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stale-While-Revalidate prioritizes instant user response over synchronous waiting.',
          bn: 'Stale-While-Revalidate পদ্ধতিতে ইউজারকে আটকে না রেখে সাথে সাথে পুরনো ডাটা দেখানো হয় আর ব্যাকগ্রাউন্ডে নতুন ডাটা আসে।'
        },
        explanation: {
          en: 'This is the classic stale-while-revalidate pattern. The current visitor receives the cached version immediately (zero latency penalty), while Next.js revalidates in the background.',
          bn: 'এটি ক্লাসিক Stale-While-Revalidate আর্কিটেকচার। ভিজিটর মুহূর্তের মধ্যে আগের ক্যাশ ডাটা পেয়ে যান, ফলে কোনো ল্যাগ হয় না; আর ব্যাকগ্রাউন্ডে নতুন ডাটা ক্যাশে বসে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-rendering-assembly',
    title: {
      en: 'Rendering Strategies — Static, Dynamic, ISR & Streaming Suspense',
      bn: 'রেন্ডারিং কৌশল — স্ট্যাটিক, ডায়নামিক, ISR ও স্ট্রিমিং সাসপেন্স'
    }
  }
};
