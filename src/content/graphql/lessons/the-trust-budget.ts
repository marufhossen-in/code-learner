import type { Lesson } from '../../../lib/types';

export const trustBudgetLesson: Lesson = {
  slug: 'the-trust-budget',
  tech: 'graphql',
  title: {
    en: 'Query Complexity & Security — Depth Limiting, Cost Analysis & Persisted Queries',
    bn: 'কোয়েরি জটিলতা ও নিরাপত্তা — ডেপথ লিমিটিং, কস্ট অ্যানালাইসিস ও পারসিস্টেড কোয়েরিজ'
  },
  summary: {
    en: 'The immense flexibility of client-driven GraphQL selection sets introduces substantial security challenges that do not exist in traditional REST APIs. Because clients can compose arbitrarily deep and broad relational graphs, a single malicious or poorly formatted HTTP request can trigger exponential database roundtrips, causing total server denial of service. Production GraphQL architectures protect their infrastructure using mathematical pre-execution static analysis. Query Depth Limiting inspects the Abstract Syntax Tree (AST) to reject queries that exceed a defined nesting depth threshold before invoking any resolvers. Query Complexity Analysis calculates a numeric cost score by multiplying field weights with pagination arguments, enforcing an execution budget ceiling. For public production deployments, Persisted Queries replace raw query strings on the wire with pre-approved cryptographic SHA-256 hashes, drastically shrinking network bandwidth and eliminating the execution of arbitrary unapproved documents altogether.',
    bn: 'ক্লায়েন্ট-চালিত GraphQL সিলেকশন সেটের অবাধ স্বাধীনতা এমন কিছু বড় নিরাপত্তা ঝুঁকি তৈরি করে যা সাধারণ REST এপিআই-তে থাকে না। ক্লায়েন্ট নিজের ইচ্ছেমতো গভীর ও বিস্তৃত সম্পর্কযুক্ত গ্রাফ তৈরি করতে পারায় একটিমাত্র ক্ষতিকর বা ত্রুটিপূর্ণ রিকোয়েস্ট লক্ষ লক্ষ ডেটাবেজ কল ঘটিয়ে পুরো সার্ভার অচল করে দিতে পারে। প্রোডাকশন গ্রেড GraphQL আর্কিটেকচার কোনো রিসলভার ডাকার আগেই স্ট্যাটিক বিশ্লেষণের মাধ্যমে সার্ভার সুরক্ষিত রাখে। কোয়েরি ডেপথ লিমিটিং AST যাচাই করে নির্ধারিত গভীরতার বেশি নেস্টেড কোয়েরি সাথে সাথে বাতিল করে। কোয়েরি জটিলতা বিশ্লেষণ প্রতিটি ফিল্ডের ওজন ও পেজিনেশন সংখ্যার গুণফল দিয়ে একটি সামগ্রিক খরচ হিসাব করে বাজেট সিলিং প্রয়োগ করে। আর পাবলিক প্রোডাকশনে পারসিস্টেড কোয়েরি ব্যবহারের মাধ্যমে সরাসরি টেক্সট কোয়েরির বদলে পূর্ব-অনুমোদিত SHA-256 হ্যাশ আদান-প্রদান করা হয়, যা নেটওয়ার্ক ব্যান্ডউইথ বাঁচায় এবং অননুমোদিত কোয়েরি চালানো চিরতরে বন্ধ করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Security Vulnerabilities of Open Graphs',
        bn: 'মূল ধারণা: উন্মুক্ত গ্রাফের নিরাপত্তা ঝুঁকি'
      }
    },
    {
      type: 'visual',
      id: 'security'
    },
    {
      type: 'para',
      text: {
        en: 'When you expose a public GraphQL API, the very flexibility that empowers frontend developers can become a severe vulnerability in the hands of malicious actors. Unlike traditional REST (Representational State Transfer) endpoints where backend developers control database query volume, GraphQL allows clients to author arbitrarily complex nested documents. Without rigorous query validation, a single HTTP request can trigger exponential recursive database queries and crash your servers. Production GraphQL architectures defend themselves using three gatekeeper mechanisms: depth limiting, complexity cost analysis, and persisted query safe-listing.',
        bn: 'যখন আপনি একটি পাবলিক GraphQL এপিআই উন্মুক্ত করেন, তখন ক্লায়েন্ট ডেভেলপারদের দেওয়া সেই অবাধ স্বাধীনতাই আক্রমণকারীদের হাতে মারাত্মক বিপদের কারণ হতে পারে। চিরাচরিত REST (রিপ্রেজেন্টেশনাল স্টেট ট্রান্সফার) এন্ডপয়েন্টে যেখানে ব্যাকএন্ড ডেভেলপাররা ডেটাবেজ কোয়েরির পরিধি কঠোরভাবে নিয়ন্ত্রণ করেন, সেখানে GraphQL ক্লায়েন্টকে নিজের ইচ্ছেমতো জটিল নেস্টেড কোয়েরি লেখার সুযোগ দেয়। যথাযথ কোয়েরি যাচাইকরণ না থাকলে একটিমাত্র রিকোয়েস্ট দিয়েই হাজার হাজার রিকার্সিভ ডেটাবেজ কল ঘটিয়ে পুরো সার্ভার ক্র্যাশ করানো সম্ভব। প্রোডাকশন GraphQL আর্কিটেকচার এই ধরনের আক্রমণ ঠেকাতে তিনটি শক্তিশালী নিরাপত্তা স্তর প্রয়োগ করে: ডেপথ লিমিটিং (depth limiting), জটিলতা খরচ বিশ্লেষণ (complexity cost analysis), এবং পারসিস্টেড কোয়েরি সেফলিস্টিং (persisted query safe-listing)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Depth Bomb',
          def: {
            en: 'A recursive GraphQL query exploiting circular relationships to generate thousands of nested execution frames',
            bn: 'একটি রিকার্সিভ কোয়েরি যা চক্রাকার সম্পর্ককে কাজে লাগিয়ে হাজার হাজার নেস্টেড এক্সিকিউশন ফ্রেম তৈরি করে'
          }
        },
        {
          term: 'Query Depth Limiter',
          def: {
            en: 'Static AST analysis rule calculating the maximum distance from root to leaf, rejecting queries exceeding a depth threshold',
            bn: 'স্ট্যাটিক বিশ্লেষণ যা রুট থেকে শেষ লিফ পর্যন্ত দূরত্ব হিসাব করে নির্ধারিত সীমার বেশি গভীর কোয়েরি প্রত্যাখ্যান করে'
          }
        },
        {
          term: 'Complexity Cost Scoring',
          def: {
            en: 'Mathematical budget system calculating total execution cost by multiplying field weights with pagination arguments',
            bn: 'গাণিতিক বাজেট ব্যবস্থা যা ফিল্ডের ওজন এবং পেজিনেশন আর্গুমেন্ট গুণ করে মোট এক্সিকিউশন খরচ হিসাব করে'
          }
        },
        {
          term: 'Persisted Queries (APQ)',
          def: {
            en: 'Protocol optimization where client queries are hashed into SHA-256 digests and validated against an approved server safe-list',
            bn: 'প্রোটোকল ব্যবস্থা যেখানে ক্লায়েন্ট কোয়েরি SHA-256 হ্যাশে রূপান্তরিত হয়ে সার্ভারের অনুমোদিত নিরাপদ তালিকার সাথে যাচাই হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'depth-limiting',
      text: {
        en: 'Defeating Recursive Attacks with Query Depth Limiting',
        bn: 'কোয়েরি ডেপথ লিমিটিং দিয়ে রিকার্সিভ আক্রমণ প্রতিহতকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Relational data schemas frequently contain bidirectional relationships. For example, a customer has many orders, and each order references its owner. In standard GraphQL, an attacker can construct a recursive depth bomb: customer { orders { customer { orders } } }. If allowed to execute, this 10-level nest causes resolvers to fire thousands of cascading SQL queries, exhausting database connection pools.',
        bn: 'রিলেশনাল ডেটা স্কিমায় প্রায়শই দ্বিমুখী সম্পর্ক থাকে। যেমন একজন গ্রাহকের একাধিক অর্ডার থাকে এবং প্রতিটি অর্ডার তার মালিককে নির্দেশ করে। সাধারণ GraphQL-এ আক্রমণকারীরা customer { orders { customer { orders } } }-এর মতো রিকার্সিভ গভীরতার বোমা তৈরি করতে পারে। এটি চলতে দিলে ১০ স্তরের নেস্টেড কোয়েরির কারণে হাজার হাজার ক্যাসকেডিং এসকিউএল কোয়েরি চলে এবং ডেটাবেজের কানেকশন পুল মুহূর্তেই ফুরিয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Query Depth Limiting neutralizes this vector before any database query begins. By walking the Abstract Syntax Tree (AST) generated during request parsing, the gateway measures the longest path from root to leaf. If the calculated depth exceeds a configured threshold like 4 or 5 levels, the server terminates the request immediately with an HTTP 400 error, consuming zero database CPU cycles.',
        bn: 'কোয়েরি ডেপথ লিমিটিং কোনো ডেটাবেজ কোয়েরি শুরু হওয়ার আগেই এই আক্রমণ ধূলিসাৎ করে দেয়। রিকোয়েস্ট পার্স করার সময় তৈরি হওয়া Abstract Syntax Tree (AST) ট্রাভার্স করে গেটওয়ে রুট থেকে লিফ পর্যন্ত সবচেয়ে দীর্ঘ পথ মেপে নেয়। যদি হিসাবকৃত গভীরতা ৪ বা ৫ স্তরের সীমা অতিক্রম করে, তবে সার্ভার কোনো ডেটাবেজ রিসোর্স খরচ না করেই তাৎক্ষণিক HTTP 400 এরর দিয়ে রিকোয়েস্ট বাতিল করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'cost-analysis',
      text: {
        en: 'Mathematical Throttling with Query Complexity Analysis',
        bn: 'কোয়েরি জটিলতা বিশ্লেষণ দিয়ে গাণিতিক থ্রটলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While depth limiting catches vertical recursion, attackers can still construct expensive horizontal queries. For instance, consider a query requesting feed(first: 100) with comments(first: 100). Although its depth is only 3, it forces the server to compute and serialize 10000 nested comment objects in a single pass.',
        bn: 'ডেপথ লিমিটিং উল্লম্ব রিকার্শন আটকালেও আক্রমণকারীরা অনুভূমিকভাবে ব্যয়বহুল কোয়েরি তৈরি করতে পারে। উদাহরণস্বরূপ feed(first: 100) এবং comments(first: 100) যুক্ত একটি কোয়েরির কথা ধরা যাক। এর গভীরতা মাত্র ৩ হলেও এটি সার্ভারকে একবারে ১০০০০ নেস্টেড কমেন্ট অবজেক্ট প্রসেস ও সিরিয়ালাইজ করতে বাধ্য করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Query Complexity Analysis assigns numeric costs to schema fields. Scalar properties like id or name cost 1 point, while relational lists multiply child costs by their pagination limit. A feed with 50 items costing 4 points per item results in 201 points total. If the configured budget ceiling is 150 points, the gateway rejects the query at parse time, preserving backend database stability.',
        bn: 'কোয়েরি জটিলতা বিশ্লেষণ স্কিমার প্রতিটি ফিল্ডে সাংখ্যিক ওজন নির্ধারণ করে। সাধারণ স্কেলার প্রপার্টি যেমন id বা name এর খরচ ১ পয়েন্ট, কিন্তু রিলেশনাল লিস্ট ফিল্ডগুলো তাদের পেজিনেশন সংখ্যার সাথে চাইল্ড স্কোর গুণ করে। ৫০ টি আইটেমের একটি ফিডে আইটেম প্রতি ৪ একক ব্যয় হলে মোট খরচ দাঁড়ায় ২০১ পয়েন্ট। নির্ধারিত বাজেট সিলিং ১৫০ পয়েন্ট হলে গেটওয়ে পার্স করার সময়ই কোয়েরিটি বাতিল করে ডেটাবেজ সুরক্ষিত রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'persisted-queries',
      text: {
        en: 'Hardening Production with Persisted Queries (APQ)',
        bn: 'পারসিস্টেড কোয়েরি (APQ) দিয়ে প্রোডাকশন সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The definitive defense for production GraphQL APIs is Persisted Queries. During frontend compilation, build tools scan the codebase, extract every approved query, and generate unique SHA-256 cryptographic hashes registered into the backend gateway safe-list. During runtime, clients transmit only the 64-character hash alongside runtime variables.',
        bn: 'প্রোডাকশন GraphQL এপিআই-র চূড়ান্ত প্রতিরক্ষা ব্যবস্থা হলো পারসিস্টেড কোয়েরি। ফ্রন্টএন্ড কোড তৈরির সময় বিল্ড টুল সমস্ত অনুমোদিত কোয়েরি সংগ্রহ করে এবং সেগুলোর ইউনিক SHA-256 ক্রিপ্টোগ্রাফিক হ্যাশ তৈরি করে ব্যাকএন্ড গেটওয়ের নিরাপদ তালিকায় নিবন্ধন করে। রানটাইমে ক্লায়েন্ট কেবল ৬৪ অক্ষরের হ্যাশ এবং ভেরিয়েবল পাঠায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Persisted queries deliver dual advantages: payload size collapses from 1350 bytes to 160 bytes, slashing mobile bandwidth usage, and arbitrary query execution is completely blocked. If an attacker attempts to inject an unauthorized query string or depth bomb, the gateway immediately rejects the request because its hash is not present in the registered safe-list.',
        bn: 'পারসিস্টেড কোয়েরির দুটি বিরাট সুবিধা রয়েছে: প্রথমত পে-লোডের আকার ১৩৫০ বাইট থেকে ১৬০ বাইটে নেমে আসে যা মোবাইল ব্যান্ডউইথ বাঁচায়, এবং দ্বিতীয়ত অননুমোদিত কোয়েরি চালানো পুরোপুরি অসম্ভব হয়ে পড়ে। কোনো আক্রমণকারী নতুন কোয়েরি বা গভীরতার বোমা পাঠালে হ্যাশটি অনুমোদিত তালিকায় না থাকায় গেটওয়ে সাথে সাথে তা প্রত্যাখ্যান করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Security Defense Layers',
        bn: 'কাঠামোগত তুলনা: নিরাপত্তা প্রতিরক্ষা স্তর'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Defense Layer', bn: 'প্রতিরক্ষা স্তর' },
        { en: 'Primary Protection Target', bn: 'মূল সুরক্ষার লক্ষ্য' },
        { en: 'Evaluation Mechanism', bn: 'মূল্যায়ন পদ্ধতি' },
        { en: 'Runtime Database Impact', bn: 'ডেটাবেজের ওপর প্রভাব' }
      ],
      rows: [
        [
          { en: 'Query Depth Limiting', bn: 'কোয়েরি ডেপথ লিমিটিং' },
          { en: 'Vertical recursive circular relationship bombs', bn: 'উল্লম্ব রিকার্সিভ চক্রাকার সম্পর্কের আক্রমণ' },
          { en: 'Measures longest node path in parsed AST', bn: 'পার্স করা AST-র দীর্ঘতম নোড পথ পরিমাপ করে' },
          { en: 'Zero DB queries; rejected during request validation', bn: 'শূন্য ডিবি কোয়েরি; যাচাইয়ের সময়ই বাতিল হয়' }
        ],
        [
          { en: 'Complexity Cost Analysis', bn: 'জটিলতা খরচ বিশ্লেষণ' },
          { en: 'Horizontal high-volume fan-out pagination abuse', bn: 'অনুভূমিক বিশাল পেজিনেশন ও ফ্যান-আউট অপব্যবহার' },
          { en: 'Calculates points based on field weights and limits', bn: 'ফিল্ডের ওজন ও পেজিনেশন সংখ্যার গুণফল দিয়ে হিসাব হয়' },
          { en: 'Zero DB queries; rejected if total points exceed ceiling', bn: 'শূন্য ডিবি কোয়েরি; পয়েন্ট সিলিং ছাড়িয়ে গেলে বাতিল হয়' }
        ],
        [
          { en: 'Persisted Queries Safe-list', bn: 'পারসিস্টেড কোয়েরি নিরাপদ-তালিকা' },
          { en: 'Arbitrary attacker queries and network snooping', bn: 'আক্রমণকারীর মনগড়া কোয়েরি ও নেটওয়ার্ক নজরদারি' },
          { en: 'Exact SHA-256 hash match against pre-compiled registry', bn: 'নিবন্ধিত তালিকার সাথে SHA-256 হ্যাশ মেলানো হয়' },
          { en: 'Zero DB queries for unapproved hashes; shrinks payloads', bn: 'অননুমোদিত হ্যাশের জন্য শূন্য ডিবি কোয়েরি; ব্যান্ডউইথ বাঁচায়' }
        ],
        [
          { en: 'Introspection Shielding', bn: 'ইন্ট্রোস্পেকশন সুরক্ষা' },
          { en: 'Reconnaissance mapping of internal schema models', bn: 'অভ্যন্তরীণ স্কিমা মডেলের ওপর গোপন নজরদারি' },
          { en: 'Disables __schema and __type on production endpoints', bn: 'প্রোডাকশনে __schema ও __type কোয়েরি বন্ধ রাখে' },
          { en: 'Prevents leaking unpublished APIs and authorization rules', bn: 'অপ্রকাশিত এপিআই ও অনুমোদন সংক্রান্ত তথ্য ফাঁস ঠেকায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Depth & Cost Gatekeeper',
        bn: 'বাস্তব কোড সিমুলেশন: ডেপথ ও খরচ পরীক্ষণ গেটওয়ে'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of GraphQL Query Depth & Complexity Gatekeeper

interface FieldConfig {
  cost?: number;
  args?: { first?: number; id?: string };
  selections?: Record<string, FieldConfig>;
}

function analyzeQuery(ast: Record<string, FieldConfig>, depth: number = 1): { maxDepth: number; totalCost: number } {
  let maxDepth = depth;
  let totalCost = 0;

  for (const [field, config] of Object.entries(ast)) {
    const baseFieldCost = config.cost || 1;
    const multiplier = config.args?.first || 1;

    let childDepth = depth;
    let childCost = 0;

    if (config.selections) {
      const childAnalysis = analyzeQuery(config.selections, depth + 1);
      childDepth = childAnalysis.maxDepth;
      childCost = childAnalysis.totalCost;
    }

    maxDepth = Math.max(maxDepth, childDepth);
    totalCost += baseFieldCost + (multiplier * childCost);
  }

  return { maxDepth, totalCost };
}

function evaluateGate(ast: Record<string, FieldConfig>, maxDepthLimit = 4, maxCostLimit = 150) {
  const { maxDepth, totalCost } = analyzeQuery(ast);
  if (maxDepth > maxDepthLimit) {
    return {
      allowed: false,
      reason: 'DEPTH_LIMIT_EXCEEDED',
      maxDepth,
      limit: maxDepthLimit,
      totalCost
    };
  }
  if (totalCost > maxCostLimit) {
    return {
      allowed: false,
      reason: 'COST_LIMIT_EXCEEDED',
      maxDepth,
      totalCost,
      limit: maxCostLimit
    };
  }
  return {
    allowed: true,
    maxDepth,
    totalCost
  };
}

// 1. Safe Query: user with id 42 (depth 2, cost 3)
const safeQuery: Record<string, FieldConfig> = {
  user: {
    args: { id: '42' },
    cost: 1,
    selections: {
      id: { cost: 1 },
      name: { cost: 1 }
    }
  }
};

// 2. Depth Bomb: recursive author-books tree (depth 5 exceeds limit 4)
const depthBomb: Record<string, FieldConfig> = {
  author: {
    cost: 1,
    selections: {
      books: {
        cost: 2,
        selections: {
          author: {
            cost: 1,
            selections: {
              books: {
                cost: 2,
                selections: {
                  title: { cost: 1 }
                }
              }
            }
          }
        }
      }
    }
  }
};

// 3. Wide Multiplier Query: feed with first: 50 (cost 201 exceeds limit 150)
const wideQuery: Record<string, FieldConfig> = {
  feed: {
    args: { first: 50 },
    cost: 1,
    selections: {
      id: { cost: 1 },
      title: { cost: 1 },
      author: { cost: 2 } // 50 * 4 = 200 + 1 = 201
    }
  }
};

const safeResult = evaluateGate(safeQuery);
const depthResult = evaluateGate(depthBomb);
const costResult = evaluateGate(wideQuery);

console.log('Safe query allowed:', safeResult.allowed);
// -> Safe query allowed: true
console.log('Safe query depth:', safeResult.maxDepth);
// -> Safe query depth: 2
console.log('Safe query total cost:', safeResult.totalCost);
// -> Safe query total cost: 3

console.log('Depth bomb allowed:', depthResult.allowed);
// -> Depth bomb allowed: false
console.log('Depth bomb rejected depth:', depthResult.maxDepth);
// -> Depth bomb rejected depth: 5
console.log('Depth bomb limit:', depthResult.limit);
// -> Depth bomb limit: 4

console.log('Wide query allowed:', costResult.allowed);
// -> Wide query allowed: false
console.log('Wide query rejected total cost:', costResult.totalCost);
// -> Wide query rejected total cost: 201
console.log('Wide query cost limit:', costResult.limit);
// -> Wide query cost limit: 150`,
      caption: {
        en: 'Simulation: safe query with depth 2 and cost 3 passes; depth bomb with depth 5 exceeds limit 4; wide query with cost 201 exceeds limit 150',
        bn: 'সিমুলেশন: ডেপথ ২ ও খরচ ৩ এর নিরাপদ কোয়েরি গৃহীত; ডেপথ ৫ এর বোমা সীমা ৪ অতিক্রম করায় বাতিল; ২০১ খরচের কোয়েরি সীমা ১৫০ অতিক্রম করায় বাতিল'
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
        en: 'Rule 1: Always configure a query depth limiter between 5 and 7 levels. Legitimate frontend interfaces rarely require more than 5 levels of nested data; setting a strict depth ceiling blocks recursive denial-of-service attacks effortlessly.',
        bn: 'নিয়ম ১: কোয়েরির গভীরতার সীমা সর্বদা ৫ থেকে ৭ স্তরের মধ্যে নির্ধারণ করুন। সাধারণ ফ্রন্টএন্ডে ৫ স্তরের বেশি নেস্টেড ডেটার দরকার পড়ে না; একটি কঠোর সীমা নির্ধারণ রিকার্সিভ আক্রমণ অনায়াসে ঠেকিয়ে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never allow unconstrained pagination arguments. Always enforce a default and maximum limit (e.g. first: 10, max 50) on all connection and list fields to prevent multiplier cost explosions.',
        bn: 'নিয়ম ২: পেজিনেশন আর্গুমেন্ট কখনো সীমাহীন রাখবেন না। প্রতিটি তালিকা ফিল্ডে ডিফল্ট ও সর্বোচ্চ সীমা (যেমন first: ১০, সর্বোচ্চ ৫০) নির্ধারণ করুন যাতে গুণিতক খরচের বিস্ফোরণ না ঘটে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Enforce persisted query safe-lists in external public apps. By allowing only queries compiled into your production web and mobile apps, you convert an open execution environment into a secure closed world.',
        bn: 'নিয়ম ৩: পাবলিক অ্যাপ্লিকেশনে পারসিস্টেড কোয়েরির নিরাপদ-তালিকা বাধ্যতামূলক করুন। শুধুমাত্র অ্যাপের সাথে সংকলিত অনুমোদিত কোয়েরি চালাতে দিলে বহিরাগত আক্রমণকারীদের প্রবেশদ্বার চিরতরে বন্ধ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Disable __schema introspection in production environments. Introspection allows potential adversaries to dump your complete data model, uncover hidden administrative fields, and map attack surfaces.',
        bn: 'নিয়ম ৪: প্রোডাকশন পরিবেশে __schema ইন্ট্রোস্পেকশন বন্ধ রাখুন। ইন্ট্রোস্পেকশন চালু থাকলে যে কেউ পুরো ডেটা মডেলের নকশা নামিয়ে গোপন ফিল্ড ও সম্ভাব্য দুর্বলতার মানচিত্র তৈরি করতে পারে।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-trust-ex1',
      kind: 'mcq',
      topic: 'Query Depth Limiting mechanism',
      question: {
        en: 'At what phase of the GraphQL request lifecycle does Query Depth Limiting evaluate and reject an invalid request?',
        bn: 'GraphQL রিকোয়েস্ট লাইফসাইকেলের ঠিক কোন পর্যায়ে কোয়েরি ডেপথ লিমিটিং অবৈধ রিকোয়েস্ট যাচাই ও বাতিল করে?'
      },
      options: [
        {
          en: 'During the static AST validation phase before any database resolvers are executed',
          bn: 'স্ট্যাটিক AST ভ্যালিডেশন পর্যায়ে কোনো ডেটাবেজ রিসলভার চলার আগেই'
        },
        {
          en: 'After the database finishes executing all SQL joins in memory',
          bn: 'মেমোরিতে সমস্ত এসকিউএল জয়েন সম্পন্ন হওয়ার পর'
        },
        {
          en: 'While transmitting the completed JSON response across the TCP socket',
          bn: 'টিসিপি সকেট দিয়ে প্রস্তুতকৃত জেএসন রেসপন্স পাঠানোর সময়'
        },
        {
          en: 'Only after the client web browser reports a layout rendering freeze',
          bn: 'কেবলমাত্র ক্লায়েন্ট ব্রাউজার লেআউট ফ্রিজ হওয়ার তথ্য পাঠানোর পর'
        }
      ],
      answer: 0,
      hint: {
        en: 'To protect the database, security gates must run before resolvers wake up.',
        bn: 'ডেটাবেজকে বাঁচাতে নিরাপত্তা পরীক্ষণ রিসলভার ডাকার আগেই সম্পন্ন হতে হবে।'
      },
      explanation: {
        en: 'Depth limiting inspects the parsed Abstract Syntax Tree (AST) during request validation. Rejecting deep queries before execution protects backend databases from CPU starvation.',
        bn: 'ডেপথ লিমিটিং রিকোয়েস্ট যাচাইয়ের সময় পার্সকৃত AST পরীক্ষা করে। এক্সিকিউশনের আগেই গভীর কোয়েরি বাতিল করে এটি ডেটাবেজকে অতিরিক্ত কাজের চাপ থেকে বাঁচায়।'
      }
    },
    {
      id: 'gql-trust-ex2',
      kind: 'mcq',
      topic: 'Query Complexity Analysis pagination multipliers',
      question: {
        en: 'How does Query Complexity Analysis account for list fields that accept pagination arguments like first: 50?',
        bn: 'first: ৫০ এর মতো পেজিনেশন আর্গুমেন্ট গ্রহণকারী লিস্ট ফিল্ডের ক্ষেত্রে কোয়েরি জটিলতা বিশ্লেষণ কীভাবে হিসাব করে?'
      },
      options: [
        {
          en: 'It multiplies the total cost of all nested child fields by the requested pagination limit (50)',
          bn: 'এটি সমস্ত নেস্টেড চাইল্ড ফিল্ডের মোট খরচকে চাহিত পেজিনেশন সংখ্যা (৫০) দিয়ে গুণ করে'
        },
        {
          en: 'It completely ignores pagination arguments and treats all lists as 1 point',
          bn: 'এটি পেজিনেশন আর্গুমেন্ট পুরোপুরি উপেক্ষা করে সমস্ত লিস্টকে ১ পয়েন্ট ধরে নেয়'
        },
        {
          en: 'It divides the cost by 50 to encourage large batch downloads',
          bn: 'এটি বড় ব্যাচ ডাউনলোড উৎসাহিত করতে মোট খরচকে ৫০ দিয়ে ভাগ করে'
        },
        {
          en: 'It cancels the query immediately whenever any pagination argument is present',
          bn: 'যেকোনো পেজিনেশন আর্গুমেন্ট উপস্থিত থাকলেই কোয়েরি সাথে সাথে বাতিল করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A list with 50 items resolves child fields 50 times in the backend.',
        bn: '৫০ টি আইটেমের একটি তালিকা ব্যাকএন্ডে চাইল্ড ফিল্ডগুলোকে ৫০ বার প্রসেস করে।'
      },
      explanation: {
        en: 'Because a list of 50 items will cause each child field resolver to execute 50 times, complexity scoring multiplies child weights by the limit argument.',
        bn: '৫০ টি আইটেমের তালিকায় ভেতরের প্রতিটি ফিল্ড ৫০ বার এক্সিকিউট হয়, তাই জটিলতা স্কোরে চাইল্ড ফিল্ডের ওজনকে পেজিনেশন সংখ্যা দিয়ে গুণ করা হয়।'
      }
    },
    {
      id: 'gql-trust-ex3',
      kind: 'mcq',
      topic: 'Persisted Queries security benefits',
      question: {
        en: 'Why do Persisted Queries (APQ) provide stronger security than raw query strings in production?',
        bn: 'প্রোডাকশনে সাধারণ টেক্সট কোয়েরির চেয়ে পারসিস্টেড কোয়েরি (APQ) কেন বেশি নিরাপত্তা দেয়?'
      },
      options: [
        {
          en: 'Clients only transmit pre-approved cryptographic hashes, making arbitrary attacker-crafted queries impossible to execute',
          bn: 'ক্লায়েন্ট কেবল পূর্ব-অনুমোদিত ক্রিপ্টোগ্রাফিক হ্যাশ পাঠায়, যার ফলে আক্রমণকারীর তৈরি মনগড়া কোয়েরি চালানো অসম্ভব হয়ে পড়ে'
        },
        {
          en: 'Persisted queries encrypt the user password with quantum cryptography',
          bn: 'পারসিস্টেড কোয়েরি ব্যবহারকারীর পাসওয়ার্ড কোয়ান্টাম এনক্রিপশন দিয়ে সুরক্ষিত রাখে'
        },
        {
          en: 'They force the client to connect using satellite communication links',
          bn: 'এটি ক্লায়েন্টকে স্যাটেলাইট সংযোগের মাধ্যমে সার্ভারে যুক্ত হতে বাধ্য করে'
        },
        {
          en: 'They delete all database tables every 24 hours automatically',
          bn: 'এটি প্রতি ২৪ ঘণ্টা পরপর ডেটাবেজের সমস্ত টেবিল স্বয়ংক্রিয়ভাবে মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about a safe-list where unregistered query hashes are rejected at the gate.',
        bn: 'একটি নিরাপদ তালিকার কথা ভাবুন যেখানে অনিবন্ধিত কোয়েরি হ্যাশ ফাটকেই বাতিল হয়ে যায়।'
      },
      explanation: {
        en: 'With persisted queries and a strict safe-list, the server only executes queries known at build time. Attackers cannot inject arbitrary exploratory or denial-of-service queries.',
        bn: 'পারসিস্টেড কোয়েরি এবং নিরাপদ তালিকা থাকলে সার্ভার কেবল বিল্ড-টাইমে নিবন্ধিত কোয়েরি চালায়। ফলে কোনো বহিরাগত ব্যক্তি ক্ষতিকর কোয়েরি প্রবেশ করাতে পারে না।'
      }
    },
    {
      id: 'gql-trust-ex4',
      kind: 'mcq',
      topic: 'Risks of production introspection',
      question: {
        en: 'Why is it critical to disable schema introspection (__schema) on public production GraphQL endpoints?',
        bn: 'পাবলিক প্রোডাকশন GraphQL এন্ডপয়েন্টে স্কিমা ইন্ট্রোস্পেকশন (__schema) বন্ধ রাখা কেন জরুরি?'
      },
      options: [
        {
          en: 'Introspection exposes your complete type graph, documentation, and internal fields, facilitating adversary reconnaissance',
          bn: 'ইন্ট্রোস্পেকশন সম্পূর্ণ টাইপ গ্রাফ, ডকুমেন্টেশন ও অভ্যন্তরীণ ফিল্ড উন্মুক্ত করে আক্রমণকারীদের তথ্য অনুসন্ধানে সহায়তা করে'
        },
        {
          en: 'Introspection increases database storage costs by 500 percent',
          bn: 'ইন্ট্রোস্পেকশন ডেটাবেজ স্টোরেজের খরচ ৫০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'Modern web browsers fail to load websites if introspection is active',
          bn: 'ইন্ট্রোস্পেকশন চালু থাকলে আধুনিক ব্রাউজারগুলো ওয়েবসাইট লোড করতে ব্যর্থ হয়'
        },
        {
          en: 'Introspection converts all JSON data into plain text XML strings',
          bn: 'ইন্ট্রোস্পেকশন সমস্ত জেএসন ডেটাকে সাধারণ টেক্সট এক্সএমএল স্ট্রিংয়ে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Introspection acts as an open menu of every type and field in your system.',
        bn: 'ইন্ট্রোস্পেকশন আপনার সিস্টেমের প্রতিটি টাইপ ও ফিল্ডের উন্মুক্ত তালিকা সরবরাহ করে।'
      },
      explanation: {
        en: 'Leaving introspection enabled in production allows attackers to map every field, query, and mutation in your API, discovering private models and unhardened endpoints.',
        bn: 'প্রোডাকশনে ইন্ট্রোস্পেকশন চালু রাখলে আক্রমণকারীরা এপিআই-র সমস্ত মডেল ও ফিল্ডের মানচিত্র তৈরি করে গোপন ফিল্ড ও দুর্বলতার সন্ধান পেয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-trust-budget-quiz',
    title: {
      en: 'GraphQL Security & Resource Governance Quiz',
      bn: 'GraphQL নিরাপত্তা ও রিসোর্স গভর্ন্যান্স কুইজ'
    },
    questions: [
      {
        id: 'q-recursive-circular-schema',
        kind: 'mcq',
        topic: 'Preventing circular recursion in schema design',
        question: {
          en: 'Why do circular references in schema design (e.g. User -> Post -> User) require query depth limiting?',
          bn: 'স্কিমা ডিজাইনে চক্রাকার রেফারেন্স (যেমন User -> Post -> User) থাকলে কোয়েরি ডেপথ লিমিটিং কেন অপরিহার্য হয়?'
        },
        options: [
          {
            en: 'Without depth limits, a client can nest User and Post endlessly, triggering hundreds of sequential queries and exhausting server memory',
            bn: 'ডেপথ লিমিট না থাকলে ক্লায়েন্ট অবিরাম নেস্টিং করতে পারে, যা শত শত কোয়েরি চালিয়ে সার্ভারের মেমোরি ফুরিয়ে দিতে পারে'
          },
          {
            en: 'Circular references cause TypeScript to crash during npm install',
            bn: 'চক্রাকার রেফারেন্সের কারণে npm install চলাকালীন টাইপস্ক্রিপ্ট ক্র্যাশ করে'
          },
          {
            en: 'Because GraphQL forbids defining relationships between different types',
            bn: 'কারণ GraphQL ভিন্ন টাইপের মধ্যে কোনো সম্পর্ক তৈরি করতে নিষেধ করে'
          },
          {
            en: 'Circular schemas automatically corrupt client-side browser cookies',
            bn: 'চক্রাকার স্কিমা ক্লায়েন্টের ব্রাউজার কুকিজ স্বয়ংক্রিয়ভাবে নষ্ট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the combinatorial explosion of nested circular relationships.',
          bn: 'চক্রাকার সম্পর্কের নেস্টিংয়ে জ্যামিতিক হারে কোয়েরি বৃদ্ধির কথা চিন্তা করুন।'
        },
        explanation: {
          en: 'Circular relationships are natural in domain modeling, but clients can abuse them recursively. Depth limiting enforces an upper bound on how deep queries can nest.',
          bn: 'ডোমেন মডেলে দ্বিমুখী সম্পর্ক স্বাভাবিক হলেও ক্লায়েন্ট এর অপব্যবহার করতে পারে। ডেপথ লিমিটিং কোয়েরির গভীরতার একটি নিশ্চিত সর্বোচ্চ সীমা বেঁধে দেয়।'
        }
      },
      {
        id: 'q-rate-limiting-metric',
        kind: 'mcq',
        topic: 'Complexity-based vs request-based rate limiting',
        question: {
          en: 'Why is complexity-based rate limiting fairer and more effective for GraphQL than traditional request-count rate limiting?',
          bn: 'চিরাচরিত রিকোয়েস্ট সংখ্যার চেয়ে জটিলতা-ভিত্তিক রেট লিমিটিং GraphQL-এর জন্য কেন অধিকতর সুবিচারমূলক ও কার্যকর?'
        },
        options: [
          {
            en: 'A single complex GraphQL query can do the work of 50 simple queries; complexity-based limiting bills clients for actual server resource consumption',
            bn: 'একটিমাত্র জটিল কোয়েরি ৫০টি সাধারণ কোয়েরির সমান কাজ করতে পারে; জটিলতা-ভিত্তিক পদ্ধতি ক্লায়েন্টকে আসল সার্ভার খরচের ভিত্তিতে চার্জ করে'
          },
          {
            en: 'Request-count rate limiting requires running a dedicated Redis supercomputer',
            bn: 'রিকোয়েস্ট সংখ্যার রেট লিমিটিং করতে একটি ডেডিকেটেড রেডিস সুপারকম্পিউটার প্রয়োজন হয়'
          },
          {
            en: 'Complexity rate limiting only functions when using MySQL database tables',
            bn: 'জটিলতা রেট লিমিটিং কেবল MySQL ডেটাবেজের ক্ষেত্রে কাজ করে'
          },
          {
            en: 'Traditional rate limiting is forbidden by international HTTP standards',
            bn: 'আন্তর্জাতিক এইচটিটিপি মানদণ্ডে চিরাচরিত রেট লিমিটিং ব্যবহার নিষিদ্ধ করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Not all queries cost the same amount of CPU and database time.',
          bn: 'সব কোয়েরির সিপিইউ এবং ডেটাবেজ ব্যবহারের খরচ সমান হয় না।'
        },
        explanation: {
          en: 'In REST, 1 request roughly equals 1 resource. In GraphQL, 1 query might fetch 1 field or 10,000 records. Complexity rate limiting reflects real computational load.',
          bn: 'REST-এ ১টি রিকোয়েস্ট মানে সাধারণত ১টি কাজ। কিন্তু GraphQL-এ ১টি কোয়েরিতে ১টি ফিল্ড বা ১০,০০০ রেকর্ড থাকতে পারে। জটিলতা-ভিত্তিক লিমিট আসল কাজের প্রতিফলন ঘটায়।'
        }
      },
      {
        id: 'q-apq-network-efficiency',
        kind: 'mcq',
        topic: 'Automatic Persisted Queries bandwidth reduction',
        question: {
          en: 'How do Automatic Persisted Queries (APQ) improve mobile network performance?',
          bn: 'Automatic Persisted Queries (APQ) কীভাবে মোবাইল নেটওয়ার্কের পারফরম্যান্স বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'They replace verbose query strings with compact 64-character SHA-256 hashes, drastically reducing upstream request bandwidth',
            bn: 'তারা দীর্ঘ কোয়েরি স্ট্রিংকে কমপ্যাক্ট ৬৪ অক্ষরের SHA-256 হ্যাশ দিয়ে প্রতিস্থাপন করে আপস্ট্রিম নেটওয়ার্ক ব্যান্ডউইথ ব্যাপকভাবে কমায়'
          },
          {
            en: 'They automatically boost client smartphone 5G transmission power',
            bn: 'তারা ক্লায়েন্টের স্মার্টফোনের ফাইভ-জি সিগন্যালের ক্ষমতা বাড়িয়ে দেয়'
          },
          {
            en: 'They disable all mobile screen animations to conserve battery',
            bn: 'তারা ব্যাটারি বাঁচাতে সমস্ত মোবাইল স্ক্রিন অ্যানিমেশন বন্ধ করে দেয়'
          },
          {
            en: 'They compress all server database tables into zip archives',
            bn: 'তারা সার্ভার ডেটাবেজের সমস্ত টেবিল জিপ ফাইলে কম্প্রেস করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compare sending a 2KB GraphQL query document against a 64-character hash.',
          bn: 'একটি ২ কিলোবাইটের কোয়েরি টেক্সট পাঠানোর সাথে ৬৪ অক্ষরের হ্যাশ পাঠানোর তুলনা করুন।'
        },
        explanation: {
          en: 'Large queries consume significant uplink bandwidth on mobile devices. APQ sends a 64-character hash, allowing lightweight HTTP GET requests that can be cached on CDNs.',
          bn: 'মোবাইলে বড় কোয়েরি টেক্সট আপলোড করতে প্রচুর ব্যান্ডউইথ খরচ হয়। APQ মাত্র ৬৪ অক্ষরের হ্যাশ পাঠায়, যা সহজে সিডিএনে ক্যাশ করা যায়।'
        }
      },
      {
        id: 'q-graphql-error-path',
        kind: 'mcq',
        topic: 'Field error path reporting in GraphQL responses',
        question: {
          en: 'What information does the path property inside a GraphQL error object provide to frontend clients?',
          bn: 'একটি GraphQL এরর অবজেক্টের ভেতরের path প্রপার্টি ফ্রন্টএন্ড ক্লায়েন্টকে কী তথ্য সরবরাহ করে?'
        },
        options: [
          {
            en: 'The exact array sequence of field names and list indices indicating where the failure occurred in the response tree',
            bn: 'রেসপন্স ট্রির ঠিক কোন ফিল্ড বা লিস্ট ইনডেক্সে ত্রুটি ঘটেছে তা নির্দেশকারী সুনির্দিষ্ট ফিল্ড সিকোয়েন্স'
          },
          {
            en: 'The operating system file path of the server hard drive where code is saved',
            bn: 'সার্ভার হার্ডড্রাইভের যে ফাইল পাথে কোডটি সেভ করা আছে তার ঠিকানা'
          },
          {
            en: 'The physical GPS coordinates of the server hosting the database',
            bn: 'ডেটাবেজ পরিচালনাকারী সার্ভারের ফিজিক্যাল জিপিএস কোঅর্ডিনেট'
          },
          {
            en: 'The memory register address of the CPU instruction pointer',
            bn: 'সিপিইউ ইন্সট্রাকশন পয়েন্টারের মেমোরি রেজিস্টার ঠিকানা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about mapping errors to specific nested properties like ["user", "orders", 2, "total"].',
          bn: '["user", "orders", 2, "total"]-এর মতো সুনির্দিষ্ট নেস্টেড ফিল্ডে এরর ম্যাপিংয়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'The path array (e.g. ["user", "orders", 0, "total"]) informs the client precisely which nested node failed, enabling targeted error boundaries while rendering surviving branches.',
          bn: 'path অ্যারে (যেমন ["user", "orders", 0, "total"]) ক্লায়েন্টকে নির্দিষ্ট করে জানায় কোন নোডে ত্রুটি হয়েছে, ফলে অক্ষত অংশগুলো সুন্দরভাবে রেন্ডার করা সম্ভব হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-schema-court',
    title: {
      en: 'Schema Definition Language (SDL) — Types, Interfaces, Enums & Input Objects',
      bn: 'স্কিমা ডেফিনিশন ল্যাঙ্গুয়েজ (SDL) — টাইপস, ইন্টারফেসেস, এনামস ও ইনপুট অবজেক্টস'
    }
  }
};
