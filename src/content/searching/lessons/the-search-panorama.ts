import type { Lesson } from '../../../lib/types';

export const theSearchPanoramaLesson: Lesson = {
  slug: 'the-search-panorama',
  tech: 'searching',
  title: {
    en: 'The Search Panorama: Architecture, Trade-Offs & Fallbacks',
    bn: 'সার্চ প্যানোরামা: আর্কিটেকচার, ট্রেড-অফ ও ফলব্যাক'
  },
  summary: {
    en: 'The search panorama provides a unified architectural decision framework synthesizing all searching disciplines. Searching efficiency is determined by structural constraints and data invariants. Linear search provides a provably optimal baseline on unordered collections. Binary search halves 1D sorted intervals, while lower bound and upper bound provide exact positional semantics. Specialized variations like jump search, exponential search, and interpolation optimize for hardware prefetchers, unbounded streams, and uniform distributions. Multidimensional saddleback eliminates matrix rows and columns in linear perimeter time, and skip lists offer concurrent probabilistic navigation.',
    bn: 'এই প্যানোরামা সমস্ত অনুসন্ধান কৌশলকে একত্রিত করে একটি সমন্বিত আর্কিটেকচারাল সিদ্ধান্ত কাঠামো সরবরাহ করে। অ্যালগরিদমের কার্যক্ষমতা ডেটার কাঠামোগত শর্ত এবং ইনভেরিয়ান্ট দ্বারা নির্ধারিত হয়। অগোছালো সংগ্রহে লিনিয়ার স্ক্যানিং একটি গাণিতিকভাবে সর্বোত্তম ভিত্তি প্রদান করে। বাইনারি বিভাজন ১ডি সাজানো ব্যবধানকে অর্ধেকে কমায়, যেখানে লোয়ার ও আপার বাউন্ড সুনির্দিষ্ট অবস্থানের নিশ্চয়তা দেয়। জাম্প স্টেপিং, এক্সপোনেনশিয়াল গ্যালোপিং এবং ইন্টারপোলেশন প্রোবিং যথাক্রমে হার্ডওয়্যার প্রিফেচার, অজানা দৈর্ঘ্যের স্ট্রিম এবং সুষম বণ্টনের সুবিধা কাজে লাগায়। বহুমাত্রিক স্যাডলব্যাক রৈখিক পরিসীমা সময়ে ম্যাট্রিক্সের সারি ও কলাম বাদ দেয় এবং স্কিপ লিস্ট সমান্তরাল সম্ভাব্যতা-ভিত্তিক পরিদর্শনের সুযোগ দেয়।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The Search Hierarchy: Invariants Dictate Performance',
        bn: 'সার্চ ক্রমবিন্যাস: ইনভেরিয়ান্টই কর্মক্ষমতা নির্ধারণ করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every searching algorithm is defined by the mathematical guarantees it assumes about data layout. When no assumptions can be made about ordering or structure, sequential inspection via linear search is the only sound choice. Introducing sorting transforms search complexity from linear O(n) to logarithmic O(log n) through systematic candidate elimination. When physical CPU cache lines or data distributions are known, algorithms like jump search and interpolation search further refine performance. In multidimensional domains, simultaneous row and column ordering reduces search effort from area complexity to perimeter complexity. Designing high-throughput software requires matching each query to the exact structural guarantee available.',
        bn: 'প্রতিটি সার্চ অ্যালগরিদম উপাত্তের বিন্যাস সম্পর্কে গৃহীত গাণিতিক শর্ত বা ইনভেরিয়ান্টের ওপর ভিত্তি করে কাজ করে। যখন উপাত্তের ক্রম বা কাঠামো সম্পর্কে কোনো নিশ্চয়তা থাকে না, তখন লিনিয়ার সার্চের মাধ্যমে ধারাবাহিক পরিদর্শনই একমাত্র গ্রহণযোগ্য কৌশল। সাজানো বিন্যাস যুক্ত হলে সুশৃঙ্খল প্রার্থী বর্জনের মাধ্যমে অনুসন্ধানের জটিলতা রৈখিক O(n) থেকে লগারিদমিক O(log n) এ নেমে আসে। যখন সিপিইউ ক্যাশ লাইন বা ডেটার পরিসংখ্যানিক বণ্টন জানা থাকে, তখন জাম্প সার্চ এবং ইন্টারপোলেশন সার্চ কার্যক্ষমতাকে আরও বাড়িয়ে তোলে। বহুমাত্রিক ক্ষেত্রে সারি ও কলাম উভয়ের সাজানো বৈশিষ্ট্য অনুসন্ধানের শ্রমকে ক্ষেত্রফল জটিলতা থেকে পরিসীমা জটিলতায় নামিয়ে আনে। উচ্চগতির সফটওয়্যার তৈরির জন্য প্রতিটি কোয়েরির সাথে বিদ্যমান কাঠামোগত শর্তের নিখুঁত সমন্বয় ঘটানো অপরিহার্য।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Search Decision Matrix',
          def: {
            en: 'An engineering framework that selects the optimal searching algorithm based on ordering, dimensions, distribution, and hardware memory physics.',
            bn: 'একটি প্রকৌশল কাঠামো যা ডেটার ক্রম, মাত্রা, বণ্টন এবং হার্ডওয়্যার মেমরি কাঠামোর ওপর ভিত্তি করে সর্বোত্তম সার্চ অ্যালগরিদম বেছে নেয়।'
          }
        },
        {
          term: 'Perimeter Elimination',
          def: {
            en: 'Reducing search operations in a 2D matrix to O(m + n) steps by eliminating entire rows or columns at each decision point.',
            bn: 'প্রতিটি সিদ্ধান্ত বিন্দুতে একটি সম্পূর্ণ সারি বা কলাম বাদ দিয়ে ২ডি ম্যাট্রিক্সে অনুসন্ধানকে O(m + n) পদক্ষেপে নামিয়ে আনার কৌশল।'
          }
        },
        {
          term: 'Parametric Inversion',
          def: {
            en: 'Converting an optimization question into monotonic boolean evaluations over an abstract answer interval in O(n * log(range)) time.',
            bn: 'একটি অপ্টিমাইজেশন প্রশ্নকে কাল্পনিক উত্তর ব্যবধানে একমুখী বুলিয়ান মূল্যায়নে রূপান্তর করে O(n * log(range)) সময়ে সমাধানের পদ্ধতি।'
          }
        },
        {
          term: 'Probabilistic Express Tier',
          def: {
            en: 'Multi-level forward links in a skip list that provide logarithmic navigation across non-contiguous linked memory nodes.',
            bn: 'স্কিপ লিস্টের বহুমাত্রিক সম্মুখবর্তী লিংক যা বিচ্ছিন্ন লিঙ্কড মেমরিতে লগারিদমিক পরিদর্শনের সুবিধা প্রদান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'architectural-matrix',
      text: {
        en: 'The Comprehensive Algorithm Selection Matrix',
        bn: 'সার্বিক অ্যালগরিদম নির্বাচন ম্যাট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Software architects must choose searching strategies based on concrete application constraints. For unordered memory collections with fewer than 50 elements, sentinel linear search minimizes instruction overhead and branch mispredictions. For large sorted static arrays, standard binary search or lower bound provides optimal logarithmic efficiency. In streaming environments where array capacity is unknown, exponential search bounds the search window before bisecting. When data points follow a uniform numerical distribution, interpolation search achieves near-instantaneous O(log log n) lookups. For dynamic concurrent collections requiring high-frequency insertions and deletions without lock contention, skip lists surpass balanced search trees. For 2D matrices sorted along both axes, saddleback search resolves queries in O(m + n) perimeter steps.',
        bn: 'সফটওয়্যার আর্কিটেক্টদের অ্যাপ্লিকেশনের সুনির্দিষ্ট বাস্তব সীমাবদ্ধতার ওপর ভিত্তি করে উপযুক্ত অনুসন্ধান কৌশল নির্বাচন করতে হয়। ৫০টির কম উপাদান বিশিষ্ট অগোছালো মেমরি সংগ্রহের জন্য সেন্টিনেল স্ক্যানিং নির্দেশনা জটিলতা ও ব্রাঞ্চ ভুলের ঝুঁকি কমায়। বড় আকারের সাজানো স্ট্যাটিক অ্যারের ক্ষেত্রে স্ট্যান্ডার্ড বাইনারি মেথড বা লোয়ার বাউন্ড সর্বোত্তম লগারিদমিক গতি নিশ্চিত করে। স্ট্রিমিং পরিবেশে যেখানে অ্যারের দৈর্ঘ্য পূর্বে জানা থাকে না, সেখানে এক্সপোনেনশিয়াল গ্যালোপিং বাইসেকশনের পূর্বে পরিধি সীমিত করে নেয়। ডেটা যখন সুষম সাংখ্যিক বণ্টন অনুসরণ করে, তখন ইন্টারপোলেশন প্রোবিং প্রায় তাৎক্ষণিক O(log log n) সমাধান উপহার দেয়। লক জটিলতা ছাড়া উচ্চগতির সন্নিবেশ ও মোছার প্রয়োজন হয় এমন গতিশীল সমান্তরাল সংগ্রহের জন্য স্কিপ লিস্ট ব্যালান্সড ট্রির চেয়ে বেশি কার্যকর। আর উভয় অক্ষে সাজানো ২ডি ম্যাট্রিক্সের ক্ষেত্রে স্যাডলব্যাক পদ্ধতি O(m + n) পরিসীমা পদক্ষেপে কোয়েরি সমাধান করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Algorithm', bn: 'অ্যালগরিদম' },
        { en: 'Best Time', bn: 'সর্বোত্তম সময়' },
        { en: 'Worst Time', bn: 'সবচেয়ে খারাপ সময়' },
        { en: 'Primary System Use Case', bn: 'প্রধান ব্যবহার ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Linear Sentinel', bn: 'লিনিয়ার সেন্টিনেল' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'Unordered small buffers and tight inner loops', bn: 'অগোছালো ছোট বাফার ও দ্রুত ভেতরের লুপ' }
        ],
        [
          { en: 'Binary Search', bn: 'বাইনারি সার্চ' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(log n)', bn: 'O(log n)' },
          { en: 'Sorted static arrays and B-Tree index pages', bn: 'সাজানো স্ট্যাটিক অ্যারে ও B-ট্রি ইনডেক্স পেজ' }
        ],
        [
          { en: 'Jump Search', bn: 'জাম্প সার্চ' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(sqrt(n))', bn: 'O(sqrt(n))' },
          { en: 'Systems dominated by sequential memory cache lines', bn: 'ধারাবাহিক মেমরি ক্যাশ প্রাধান্য পাওয়া সিস্টেম' }
        ],
        [
          { en: 'Exponential Search', bn: 'এক্সপোনেনশিয়াল সার্চ' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(log i)', bn: 'O(log i)' },
          { en: 'Unbounded network streams and timestamp logs', bn: 'অজানা দৈর্ঘ্যের নেটওয়ার্ক স্ট্রিম ও লগ' }
        ],
        [
          { en: 'Interpolation Search', bn: 'ইন্টারপোলেশন সার্চ' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'Uniform numerical sensor data and phonebooks', bn: 'সুষম সাংখ্যিক সেন্সর ডেটা ও ডিরেক্টরি' }
        ],
        [
          { en: 'KMP Pattern Search', bn: 'KMP প্যাটার্ন সার্চ' },
          { en: 'O(n)', bn: 'O(n)' },
          { en: 'O(n + m)', bn: 'O(n + m)' },
          { en: 'Streaming non-seekable text and compiler lexers', bn: 'নন-সিক্যাবল টেক্সট স্ট্রিম ও কম্পাইলার লেক্সার' }
        ],
        [
          { en: 'Skip List', bn: 'স্কিপ লিস্ট' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(n) probabilistic', bn: 'O(n) সম্ভাব্যতা' },
          { en: 'Concurrent in-memory engines (Redis zset, RocksDB)', bn: 'সমান্তরাল মেমরি ইঞ্জিন (Redis zset, RocksDB)' }
        ],
        [
          { en: 'Saddleback Search', bn: 'স্যাডলব্যাক সার্চ' },
          { en: 'O(1)', bn: 'O(1)' },
          { en: 'O(m + n)', bn: 'O(m + n)' },
          { en: '2D Young Tableaus and geospatial tile grids', bn: '২ডি ইয়াং ট্যাবলিউ ও জিওস্প্যাশিয়াল গ্রিড' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'dispatch-engine',
      text: {
        en: 'Architectural Dispatch Engine Implementation',
        bn: 'আর্কিটেকচারাল ডিসপ্যাচ ইঞ্জিন বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In large-scale search infrastructure, an automated routing layer evaluates query characteristics and storage layouts to dispatch requests to the optimal algorithm. The dispatch engine checks whether the collection is two-dimensional, whether elements are sorted, whether numerical values follow uniform spacing, and whether input streams are non-seekable. By encapsulating these heuristics into a unified dispatch routine, client applications obtain peak throughput without hardcoding algorithm selections across modules.',
        bn: 'বৃহৎ মাত্রার সার্চ অবকাঠামোতে একটি স্বয়ংক্রিয় রাউটিং স্তর কোয়েরির বৈশিষ্ট্য এবং স্টোরেজ বিন্যাস বিশ্লেষণ করে সঠিক অ্যালগরিদমে রিকোয়েস্ট পাঠিয়ে দেয়। ডিসপ্যাচ ইঞ্জিনটি পরীক্ষা করে যে সংগ্রহটি দ্বিমাত্রিক কি না, উপাদানগুলো সাজানো কি না, সাংখ্যিক মানগুলো সুষমভাবে বণ্টিত কি না এবং ইনপুট স্ট্রিমটি রিওয়াইন্ডযোগ্য কি না। এই সিদ্ধান্তগুলোকে একটি সমন্বিত ডিসপ্যাচ রুটিনে রূপান্তর করলে ক্লায়েন্ট অ্যাপ্লিকেশনগুলো প্রতিটি মডিউলে পৃথকভাবে কোড না লিখেও সর্বোচ্চ গতি ও পারফরম্যান্স উপভোগ করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'search-dispatcher.ts',
      caption: {
        en: 'Unified search dispatch engine selecting optimal algorithms based on structural constraints.',
        bn: 'কাঠামোগত শর্তের ওপর ভিত্তি করে সর্বোত্তম অ্যালগরিদম নির্বাচনকারী ডিসপ্যাচ ইঞ্জিন।'
      },
      code: `export interface QueryContext {
  is2D?: boolean;
  isSorted?: boolean;
  isUniform?: boolean;
  isStreaming?: boolean;
  isTextPattern?: boolean;
  elementCount: number;
}

export function dispatchSearchStrategy(ctx: QueryContext): string {
  if (ctx.isTextPattern) {
    return ctx.isStreaming ? 'KMP (Linear Streaming)' : 'Rabin-Karp (Rolling Hash)';
  }

  if (ctx.is2D) {
    return ctx.isSorted ? 'Saddleback Matrix Search O(m + n)' : 'Brute Force 2D Scan O(m * n)';
  }

  if (!ctx.isSorted) {
    return ctx.elementCount < 50 ? 'Sentinel Linear Search' : 'Unsorted Linear Scan O(n)';
  }

  // Collection is 1D and Sorted
  if (ctx.isStreaming) {
    return 'Exponential Galloping Search O(log i)';
  }

  if (ctx.isUniform && ctx.elementCount > 100) {
    return 'Interpolation Search O(log log n)';
  }

  return 'Standard Binary Search / Lower Bound O(log n)';
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Routing Industrial Search Workloads',
        bn: 'এক্সিকিউশন ট্রেস: শিল্পপর্যায়ের সার্চ ওয়ার্কলোড রাউটিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We trace our architectural dispatcher across four real-world production workloads. Workload 1 evaluates an unsorted in-memory cache of 20 elements, selecting Sentinel Linear Search to eliminate branch checks. Workload 2 inspects a sorted real-time network stream of logs, correctly choosing Exponential Galloping Search in O(log i) time. Workload 3 evaluates a sensor telemetry array of 1000 items with uniform integer spacing, routing to Interpolation Search in O(log log n) time. Workload 4 routes a 500 by 500 sorted terrain matrix, selecting 2D Saddleback Search to resolve lookups within 1000 perimeter comparisons.',
        bn: 'আমরা চারটি বাস্তব শিল্পপর্যায়ের কাজের ক্ষেত্রে আমাদের ডিসপ্যাচার পরিচালনা করি। ওয়ার্কলোড 1 এ ২০টি উপাদানের একটি অগোছালো মেমরি ক্যাশ যাচাই করে ব্রাঞ্চিং শর্ত কমাতে সেন্টিনেল লিনিয়ার সার্চ বেছে নেওয়া হয়। ওয়ার্কলোড 2 এ রিয়েল-টাইম লগ স্ট্রিম পরীক্ষা করে O(log i) সময়ে এক্সপোনেনশিয়াল গ্যালোপিং সার্চ নির্বাচন করা হয়। ওয়ার্কলোড 3 এ ১০০০ উপাদানের সুষম সেন্সর ডেটাসেটে O(log log n) সময়ে ইন্টারপোলেশন সার্চ নির্ধারণ করা হয়। আর ওয়ার্কলোড 4 এ ৫০০ গুণ ৫০০ আকারের সাজানো ভূখণ্ড ম্যাট্রিক্সে সর্বোচ্চ ১০০০ পরিসীমা তুলনায় সমাধান দিতে ২ডি স্যাডলব্যাক সার্চ বেছে নেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-dispatch.ts',
      caption: {
        en: 'Execution output of the architectural dispatch engine across four scenarios.',
        bn: 'চারটি ভিন্ন বাস্তব ক্ষেত্রে আর্কিটেকচারাল ডিসপ্যাচ ইঞ্জিনের সঠিক আউটপুট।'
      },
      code: `// Test 1: Small unsorted cache (20 items)
// Context: { elementCount: 20, isSorted: false }
// Result:  "Sentinel Linear Search" (O(n) without inner boundary branch)

// Test 2: Unbounded live log stream (100,000+ entries)
// Context: { elementCount: 100000, isSorted: true, isStreaming: true }
// Result:  "Exponential Galloping Search O(log i)"

// Test 3: Sensor telemetry with uniform distribution (1000 items)
// Context: { elementCount: 1000, isSorted: true, isUniform: true }
// Result:  "Interpolation Search O(log log n)"

// Test 4: Geospatial elevation grid (500x500 rows and columns sorted)
// Context: { elementCount: 250000, is2D: true, isSorted: true }
// Result:  "Saddleback Matrix Search O(m + n)" (max 1000 probes)`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing the Comprehensive Search Landscape',
        bn: 'সার্বিক সার্চ ল্যান্ডস্কেপের ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'open-frontiers',
      text: {
        en: 'Open Engineering Frontiers: Fuzzy Search and Inverted Indexes',
        bn: 'উন্মুক্ত প্রকৌশল দিগন্ত: ফাজি সার্চ ও ইনভার্টেড ইনডেক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While this searching hub establishes the core deterministic and probabilistic lookup algorithms, modern large-scale applications extend into specialized domains. Approximate fuzzy searching operates over edit distance metrics (Levenshtein distance) using BK-trees and finite-state automata to correct user typos in real time. Information retrieval engines (like Lucene and Elasticsearch) utilize inverted indexes and BM25 relevance ranking algorithms to query billions of documents. Understanding the fundamental complexity bounds of linear, logarithmic, and perimeter search provides the mathematical foundation required to master these advanced information retrieval architectures.',
        bn: 'যদিও এই সার্চিং হাব মূল সুনির্দিষ্ট এবং সম্ভাব্যতা-ভিত্তিক সন্ধান অ্যালগরিদমগুলো প্রতিষ্ঠা করেছে, তবুও আধুনিক বৃহৎ সিস্টেমগুলো বিশেষায়িত ক্ষেত্রে আরও বিস্তৃত হয়। ফাজি সার্চ ব্যবহারকারীর টাইপো বা বানান ভুল রিয়েল-টাইমে সংশোধন করতে BK-ট্রি এবং ফাইনাইট স্টেট অটোমাটা ব্যবহার করে এডিট ডিসট্যান্স (Levenshtein distance) হিসাব করে। তথ্য পুনরুদ্ধার ইঞ্জিনগুলো (যেমন Lucene ও Elasticsearch) কোটি কোটি নথিতে দ্রুত অনুসন্ধানের জন্য ইনভার্টেড ইনডেক্স এবং BM25 প্রাসঙ্গিকতা র‍্যাংকিং অ্যালগরিদম ব্যবহার করে। লিনিয়ার, লগারিদমিক এবং পরিসীমা অনুসন্ধানের এই মৌলিক জটিলতার সীমা আয়ত্ত করাই আধুনিক উন্নত সার্চ ইঞ্জিন স্থাপত্যের ভিত্তি তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Mastering the Science of Searching',
        bn: 'সারসংক্ষেপ: সার্চিং বিজ্ঞানে দক্ষতা অর্জন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Searching is the foundational craft of reducing problem spaces through proven structural invariants. From simple linear scans to logarithmic bisection, proportional interpolation, and multidimensional saddlebacks, every algorithm balances comparison count with CPU cache efficiency. Selecting the right algorithm transforms intractable brute-force workloads into instantaneous, scalable computational systems.',
        bn: 'সার্চিং হলো প্রমাণিত কাঠামোগত শর্তের মাধ্যমে সমস্যার পরিধি সংকুচিত করার একটি মৌলিক বিজ্ঞান। সাধারণ লিনিয়ার স্ক্যান থেকে শুরু করে লগারিদমিক বাইসেকশন, আনুপাতিক ইন্টারপোলেশন এবং বহুমাত্রিক স্যাডলব্যাক পর্যন্ত প্রতিটি অ্যালগরিদম তুলনার সংখ্যার সাথে সিপিইউ ক্যাশের দক্ষতার চমৎকার সমন্বয় ঘটায়। সঠিক অ্যালগরিদম নির্বাচন দুঃসাধ্য ব্রুট-ফোর্স কাজের চাপকে তাৎক্ষণিক ও পরিমাপযোগ্য কম্পিউটেশনাল সিস্টেমে রূপান্তরিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'spn-ex1',
      kind: 'mcq',
      topic: 'search algorithm selection',
      question: {
        en: 'An application needs to search for numerical timestamps in an unbounded streaming file where the total record count n is unknown and queries frequently seek recent records near the start. Which algorithm is optimal?',
        bn: 'একটি অ্যাপ্লিকেশনে অজানা দৈর্ঘ্যের স্ট্রিমিং ফাইলে সাংখ্যিক টাইমস্ট্যাম্প খুঁজতে হবে যেখানে মোট রেকর্ড সংখ্যা n অজানা এবং কোয়েরিগুলো প্রায়শই শুরুর দিকের সাম্প্রতিক রেকর্ড খুঁজে থাকে। কোন অ্যালগরিদমটি সর্বোত্তম?'
      },
      options: [
        {
          en: 'Exponential search, because it dynamically brackets the target by doubling intervals in O(log i) time where i is the target index',
          bn: 'এক্সপোনেনশিয়াল সার্চ, কারণ এটি ইনডেক্স দ্বিগুণ করে O(log i) সময়ে গতিশীলভাবে টার্গেটকে সীমাবদ্ধ করে যেখানে i হলো টার্গেটের ইনডেক্স'
        },
        {
          en: 'Standard binary search using an arbitrary upper bound of 1000000000',
          bn: '১০০০000000 এর মতো একটি কাল্পনিক আপার বাউন্ড ধরে নিয়ে স্ট্যান্ডার্ড বাইনারি সার্চ'
        },
        {
          en: 'Linear search scanning the entire stream from beginning to end',
          bn: 'শুরু থেকে শেষ পর্যন্ত পুরো স্ট্রিম স্ক্যানকারী লিনিয়ার সার্চ'
        },
        {
          en: 'Ternary search using continuous float trisections',
          bn: 'অবিচ্ছিন্ন ফ্লোট ট্রাইসেকশন ব্যবহারকারী টার্নারি সার্চ'
        }
      ],
      answer: 0,
      hint: {
        en: 'When n is unknown, we need an algorithm whose complexity depends on target index i rather than total size n.',
        bn: 'যখন n অজানা থাকে, তখন আমাদের এমন অ্যালগরিদম দরকার যার জটিলতা মোট সাইজ n এর বদলে টার্গেট ইনডেক্স i এর ওপর নির্ভর করে।'
      },
      explanation: {
        en: 'Exponential search doubles its bound (1, 2, 4, 8, ...) until finding an interval encompassing the target, completing in O(log i) time without requiring knowledge of total size n.',
        bn: 'এক্সপোনেনশিয়াল সার্চ ব্যবধান দ্বিগুণ (১, ২, ৪, ৮, ...) করে টার্গেটকে একটি সীমায় আবদ্ধ করে এবং মোট সাইজ n জানা না থাকলেও মাত্র O(log i) সময়ে কাজ শেষ করে।'
      }
    },
    {
      id: 'spn-ex2',
      kind: 'predict',
      topic: 'matrix vs flat binary search',
      question: {
        en: 'For a 1000 by 1000 matrix where every row is sorted and every column is sorted, saddleback search takes at most how many comparisons?',
        bn: '১০০০ গুণ ১০০০ আকারের একটি ম্যাট্রিক্সে যেখানে প্রতিটি সারি এবং কলাম সাজানো রয়েছে, সেখানে স্যাডলব্যাক সার্চে সর্বোচ্চ কয়টি তুলনা লাগে?'
      },
      options: [
        {
          en: '2000 comparisons (m + n = 1000 + 1000)',
          bn: '২০০০টি তুলনা (m + n = ১০০০ + ১০০০)'
        },
        {
          en: '1000000 comparisons',
          bn: '১০০০০০০টি তুলনা'
        },
        {
          en: '10000 comparisons',
          bn: '১০০০০টি তুলনা'
        },
        {
          en: '20 comparisons',
          bn: '২০টি তুলনা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Saddleback search scales with the perimeter: m + n.',
        bn: 'স্যাডলব্যাক সার্চ পরিসীমার সাথে বাড়ে: m + n।'
      },
      explanation: {
        en: 'Because saddleback search eliminates a row or a column with each probe, it can make at most m down moves and n left moves, totaling m + n = 1000 + 1000 = 2000 comparisons.',
        bn: 'যেহেতু স্যাডলব্যাক সার্চ প্রতি পরীক্ষায় একটি সারি বা কলাম বাদ দেয়, তাই এটি সর্বোচ্চ m বার নিচে এবং n বার বামে যেতে পারে, যার ফলে মোট m + n = ১০০০ + ১০০০ = ২০০০টি তুলনা লাগে।'
      }
    },
    {
      id: 'spn-ex3',
      kind: 'mcq',
      topic: 'hash table vs sorted search trade-off',
      question: {
        en: 'Under which application workload is a sorted array with binary search strictly superior to an in-memory hash table?',
        bn: 'কোন ধরনের অ্যাপ্লিকেশনের ক্ষেত্রে ইন-মেমরি হ্যাশ টেবিলের চেয়ে বাইনারি সার্চ সহ সাজানো অ্যারে নিশ্চিতভাবে শ্রেষ্ঠত্ব প্রমাণ করে?'
      },
      options: [
        {
          en: 'Workloads executing frequent range queries (finding keys between A and B) and requiring zero memory overhead for bucket pointers',
          bn: 'যেখানে ঘনঘন রেঞ্জ কোয়েরি (A এবং B এর মধ্যকার কী খোঁজা) চালাতে হয় এবং বাকেট পয়েন্টারের মেমরি অপচয় রোধ করা প্রয়োজন'
        },
        {
          en: 'Workloads executing only single exact equality lookups on random strings',
          bn: 'যেখানে শুধুমাত্র এলোমেলো স্ট্রিংয়ের একক সমতাভিত্তিক অনুসন্ধান পরিচালিত হয়'
        },
        {
          en: 'Workloads inserting 1000000 unordered items per second without ever reading',
          bn: 'যেখানে কখনো না পড়ে প্রতি সেকেন্ডে ১০০০০০০টি অগোছালো উপাদান সংরক্ষণ করা হয়'
        },
        {
          en: 'Workloads running on GPUs that do not support conditional branch statements',
          bn: 'কন্ডিশনাল ব্রাঞ্চিং সমর্থন করে না এমন জিপিইউতে পরিচালিত ওয়ার্কলোড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hash tables cannot find all keys between 100 and 200 without checking all buckets.',
        bn: 'হ্যাশ টেবিল সব বাকেট পরীক্ষা না করে ১০০ থেকে ২০০ এর মধ্যকার সব কী খুঁজে বের করতে পারে না।'
      },
      explanation: {
        en: 'Hash functions scatter keys randomly, destroying sequential order. A sorted array supports O(log n) boundary detection for range scans and consumes zero pointer overhead, whereas hash tables only support O(1) point lookups.',
        bn: 'হ্যাশ ফাংশন কী এর ধারাবাহিক ক্রম ধ্বংস করে দেয়। কিন্তু একটি সাজানো অ্যারে রেঞ্জ স্ক্যানের জন্য O(log n) বাউন্ডারি শনাক্তকরণ সমর্থন করে এবং কোনো অতিরিক্ত পয়েন্টার মেমরি নেয় না।'
      }
    }
  ],
  quiz: {
    id: 'search-panorama-quiz',
    title: {
      en: 'The Search Panorama & Architecture Quiz',
      bn: 'সার্চ প্যানোরামা ও আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'spnq1',
        kind: 'mcq',
        topic: 'asymptotic hierarchy',
        question: {
          en: 'Which of the following correctly orders searching complexities from fastest to slowest on large datasets?',
          bn: 'বৃহৎ ডেটাসেটে সবচেয়ে দ্রুত থেকে সবচেয়ে ধীরগতির দিকে নিচের কোন ক্রমটি সার্চ কমপ্লেক্সিটিকে সঠিকভাবে সাজিয়েছে?'
        },
        options: [
          {
            en: 'O(1) < O(log log n) < O(log n) < O(sqrt(n)) < O(n)',
            bn: 'O(1) < O(log log n) < O(log n) < O(sqrt(n)) < O(n)'
          },
          {
            en: 'O(n) < O(sqrt(n)) < O(log n) < O(log log n) < O(1)',
            bn: 'O(n) < O(sqrt(n)) < O(log n) < O(log log n) < O(1)'
          },
          {
            en: 'O(1) < O(n) < O(log n) < O(sqrt(n)) < O(log log n)',
            bn: 'O(1) < O(n) < O(log n) < O(sqrt(n)) < O(log log n)'
          },
          {
            en: 'O(log n) < O(1) < O(log log n) < O(n) < O(sqrt(n))',
            bn: 'O(log n) < O(1) < O(log log n) < O(n) < O(sqrt(n))'
          }
        ],
        answer: 0,
        hint: {
          en: 'Constant is fastest, followed by double-logarithmic (interpolation), logarithmic (binary), square root (jump), and linear.',
          bn: 'কনস্ট্যান্ট সবচেয়ে দ্রুত, তারপর ডাবল-লগারিদমিক (ইন্টারপোলেশন), লগারিদমিক (বাইনারি), বর্গমূল (জাম্প) এবং লিনিয়ার।'
        },
        explanation: {
          en: 'As n grows to infinity, O(1) hash lookup is fastest, followed by O(log log n) uniform interpolation, O(log n) binary search, O(sqrt(n)) jump search, and O(n) linear search.',
          bn: 'n এর মান বৃদ্ধির সাথে সাথে O(1) হ্যাশ সবচেয়ে দ্রুত হয়, তারপর O(log log n) ইন্টারপোলেশন, O(log n) বাইনারি সার্চ, O(sqrt(n)) জাম্প সার্চ এবং O(n) লিনিয়ার সার্চ।'
        }
      },
      {
        id: 'spnq2',
        kind: 'mcq',
        topic: 'decision problem transformation',
        question: {
          en: 'What mathematical principle enables parametric search to solve complex continuous and discrete optimization problems in logarithmic time?',
          bn: 'কোন গাণিতিক নীতির কারণে প্যারামেট্রিক সার্চ জটিল অপ্টিমাইজেশন সমস্যাগুলোকে লগারিদমিক সময়ে সমাধান করতে পারে?'
        },
        options: [
          {
            en: 'Monotonicity: if a decision predicate is monotonic across candidate answers, binary search can find the exact transition boundary in logarithmic rounds',
            bn: 'একমুখিতা বা মনোটনিসিটি: সিদ্ধান্ত প্রেডিকেট সম্ভাব্য উত্তরের পরিধিতে একমুখী হলে বাইনারি সার্চ লগারিদমিক রাউন্ডে সঠিক রূপান্তর সীমানা খুঁজে নিতে পারে'
          },
          {
            en: 'Polynomial factorization of matrix determinants',
            bn: 'ম্যাট্রিক্স নির্ণায়কের পলিনোমিয়াল উৎপাদকে বিশ্লেষণ'
          },
          {
            en: 'Linear regression analysis of floating-point numbers',
            bn: 'ফ্লোটিং-পয়েন্ট সংখ্যার লিনিয়ার রিগ্রেশন বিশ্লেষণ'
          },
          {
            en: 'Randomized sorting using quicksort pivot selection',
            bn: 'কুইকসর্ট পিভট নির্বাচনের মাধ্যমে এলোমেলো সাজানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of how the predicate canShip(capacity) transitions from false to true exactly once.',
          bn: 'canShip(capacity) প্রেডিকেট কীভাবে ঠিক একবার false থেকে true তে রূপান্তরিত হয় তা ভাবুন।'
        },
        explanation: {
          en: 'Parametric search inverts optimization problems into monotonic decision checks. Because the answer space is monotonic, logarithmic bisection isolates the boundary threshold efficiently.',
          bn: 'প্যারামেট্রিক সার্চ অপ্টিমাইজেশন সমস্যাকে একমুখী সিদ্ধান্ত পরীক্ষায় রূপান্তর করে। উত্তরের পরিধি একমুখী হওয়ায় লগারিদমিক বাইসেকশন অত্যন্ত দ্রুত রূপান্তরের প্রান্তিক মান চিহ্নিত করে।'
        }
      },
      {
        id: 'spnq3',
        kind: 'mcq',
        topic: 'skip list concurrency benefit',
        question: {
          en: 'Why do modern high-throughput databases implement in-memory MemTables using concurrent skip lists rather than self-balancing Red-Black trees?',
          bn: 'আধুনিক উচ্চগতির ডেটাবেস ইঞ্জিনগুলো কেন সেলফ-ব্যালান্সিং রেড-ব্ল্যাক ট্রির পরিবর্তে সমান্তরাল স্কিপ লিস্ট ব্যবহার করে মেমটেবিল তৈরি করে?'
        },
        options: [
          {
            en: 'Skip lists avoid global tree rebalancing rotations, permitting non-blocking lock-free concurrent updates through localized pointer CAS operations',
            bn: 'স্কিপ লিস্ট কোনো সার্বিক ট্রি ঘূর্ণন পরিচালনা করে না, ফলে স্থানীয় পয়েন্টার CAS অপারেশনের মাধ্যমে এটি নন-ব্লকিং লক-মুক্ত সমান্তরাল রাইটিং নিশ্চিত করে'
          },
          {
            en: 'Skip lists eliminate all memory consumption on hard disks',
            bn: 'স্কিপ লিস্ট হার্ড ডিস্কের সমস্ত মেমরি অপচয় রোধ করে'
          },
          {
            en: 'Red-Black trees require 100 times more CPU registers to compile',
            bn: 'রেড-ব্ল্যাক ট্রি কম্পাইল করতে ১০০ গুণ বেশি সিপিইউ রেজিস্টার প্রয়োজন হয়'
          },
          {
            en: 'Skip lists are natively built into the Linux kernel kernel-space',
            bn: 'স্কিপ লিস্ট লিনাক্স কার্নেলের কার্নেল-স্পেসে প্রাকৃতিকভাবে অন্তর্ভুক্ত থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the locking scope: local pointer updates versus tree rotations that propagate to the root.',
          bn: 'লকিংয়ের ব্যাপ্তি বিবেচনা করুন: স্থানীয় পয়েন্টার আপডেট বনাম রুট পর্যন্ত বিস্তৃত ট্রি ঘূর্ণন।'
        },
        explanation: {
          en: 'In Red-Black trees, inserting an element can trigger rotations that require locking large subtrees up to the root. In skip lists, insertions only alter adjacent pointers, enabling scalable lock-free concurrency.',
          bn: 'রেড-ব্ল্যাক ট্রিতে নতুন উপাদানের কারণে রুট পর্যন্ত বড় সাব-ট্রি লক করতে হয়। কিন্তু স্কিপ লিস্টে কেবল সংলগ্ন পয়েন্টারগুলো পরিবর্তিত হওয়ায় লক-মুক্ত সমান্তরাল ব্যবস্থাপনা অত্যন্ত কার্যকরভাবে পরিচালনা করা যায়।'
        }
      },
      {
        id: 'spnq4',
        kind: 'mcq',
        topic: 'hardware prefetcher physics',
        question: {
          en: 'Why does jump search with O(sqrt(n)) comparisons sometimes outperform binary search with O(log n) comparisons on massive sequential arrays?',
          bn: 'বিশাল আকারের ধারাবাহিক অ্যারেতে তাত্ত্বিকভাবে O(sqrt(n)) তুলনা থাকা সত্ত্বেও জাম্প সার্চ কেন O(log n) বাইনারি সার্চের চেয়ে দ্রুত চলতে পারে?'
        },
        options: [
          {
            en: 'Jump search accesses memory in strictly forward sequential strides that CPU hardware prefetchers can load into L1 cache, avoiding random scattered cache misses',
            bn: 'জাম্প সার্চ ধারাবাহিকভাবে সামনের দিকে মেমরি অ্যাক্সেস করে যা সিপিইউ প্রিফেচার সরাসরি L1 ক্যাশে লোড করতে পারে, ফলে এলোমেলো ক্যাশ মিস এড়ানো যায়'
          },
          {
            en: 'Jump search skips the arithmetic logic unit entirely during execution',
            bn: 'জাম্প সার্চ এক্সিকিউশনের সময় অ্যারিথমেটিক লজিক ইউনিটকে সম্পূর্ণ উপেক্ষা করে'
          },
          {
            en: 'Binary search is restricted to arrays smaller than 1024 elements',
            bn: 'বাইনারি সার্চ ১০২৪ উপাদানের চেয়ে ছোট অ্যারেতে সীমাবদ্ধ থাকে'
          },
          {
            en: 'Square root calculations run in zero nanoseconds on modern microprocessors',
            bn: 'আধুনিক মাইক্রোপ্রসেসরে বর্গমূল গণনা শূন্য ন্যানোসেকেন্ডে সম্পন্ন হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hardware cache lines fetch 64 contiguous bytes. Scattered probes waste 56 bytes per fetch.',
          bn: 'হার্ডওয়্যার ক্যাশ লাইন ৬৪টি সংলগ্ন বাইট একসাথে আনে। এলোমেলো মেমরি সন্ধানে প্রতিবারে ৫৬ বাইট নষ্ট হয়।'
        },
        explanation: {
          en: 'Binary search probes memory addresses scattered across megabytes of RAM, resulting in frequent cache misses. Jump search advances sequentially forward, achieving near 100 percent cache prefetch hit rates.',
          bn: 'বাইনারি সার্চ মেমরির বহুদূরবর্তী স্থানে প্রোব করায় বারবার ক্যাশ মিস ঘটে। জাম্প সার্চ ধারাবাহিকভাবে সামনের দিকে চলায় প্রায় ১০০ শতাংশ ক্যাশ প্রিফেচ হিট রেট অর্জিত হয়।'
        }
      },
      {
        id: 'spnq5',
        kind: 'mcq',
        topic: 'kmp vs naive comparison',
        question: {
          en: 'What fundamental difference guarantees that KMP operates in O(n + m) time while naive search degrades to O(n * m)?',
          bn: 'কোন মৌলিক পার্থক্যের কারণে KMP নিশ্চিতভাবে O(n + m) সময়ে কাজ করে যেখানে নাইভ সার্চ O(n * m) এ নেমে যায়?'
        },
        options: [
          {
            en: 'KMP precomputes pattern prefix-suffix symmetries in an LPS table, ensuring the text pointer never rewinds after a mismatch',
            bn: 'KMP প্যাটার্নের প্রিফিক্স-সাফিক্স প্রতিসাম্য পূর্বে LPS টেবিলে সংরক্ষণ করে, যার ফলে কোনো অমিলের পর টেক্সট পয়েন্টার কখনোই পেছনে ফেরে না'
          },
          {
            en: 'KMP converts strings into encrypted hash integers',
            bn: 'KMP স্ট্রিংগুলোকে এনক্রিপ্ট করা হ্যাশ পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'Naive search sorts the text before scanning',
            bn: 'নাইভ সার্চ স্ক্যান করার পূর্বে টেক্সট সাজিয়ে নেয়'
          },
          {
            en: 'KMP runs only on single-core embedded systems',
            bn: 'KMP শুধুমাত্র সিঙ্গেল-কোর এমবেডেড সিস্টেমে পরিচালিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Naive search resets i back to the start of the mismatch. KMP never decrements i.',
          bn: 'নাইভ সার্চ অমিলের পর i কে পুনরায় শুরুতে ফিরিয়ে নেয়। KMP কখনো i এর মান কমায় না।'
        },
        explanation: {
          en: 'Naive search rewinds the text pointer on every mismatch, repeating comparisons quadratically. KMP uses the LPS table to advance the pattern while text pointer i strictly advances, bounding text operations to O(n).',
          bn: 'নাইভ সার্চ প্রতিটি অমিলের পর টেক্সট পয়েন্টার পেছনে ফিরিয়ে নিয়ে দ্বিঘাত হারে একই তুলনা বারবার চালায়। KMP পূর্বগণিত LPS টেবিল ব্যবহার করে টেক্সট পয়েন্টার i কে সর্বদা সামনের দিকে এগিয়ে নিয়ে মোট কাজ O(n) এ সীমাবদ্ধ রাখে।'
        }
      }
    ]
  }
};
