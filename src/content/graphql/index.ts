import type { TechHub } from '../../lib/types';
import { grainInterviewLesson } from './lessons/the-grain-interview';
import { trustBudgetLesson } from './lessons/the-trust-budget';
import { schemaCourtLesson } from './lessons/the-schema-court';
import { resolverFoundryLesson } from './lessons/the-resolver-foundry';
import { mutationChapelLesson } from './lessons/the-mutation-chapel';
import { cacheGalleryLesson } from './lessons/the-cache-gallery';
import { subscriptionTideLesson } from './lessons/the-subscription-tide';
import { federationCourtLesson } from './lessons/the-federation-court';
import { evolutionLedgerLesson } from './lessons/the-evolution-ledger';

export const graphqlHub: TechHub = {
  slug: 'graphql' as never,
  name: 'GraphQL',
  icon: '⬡',
  tagline: {
    en: 'Declarative data fetching, schema-driven APIs, unified graph architecture, and real-time subscriptions.',
    bn: 'ঘোষণামূলক ডেটা ফেচিং, স্কিমা-চালিত এপিআই, সমন্বিত গ্রাফ আর্কিটেকচার এবং রিয়েল-টাইম সাবস্ক্রিপশন।'
  },
  intro: {
    en: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. By providing an explicit type system and allowing clients to request exactly what they need, GraphQL eliminates both over-fetching and under-fetching while consolidating disparate backend services into a single, cohesive graph endpoint.',
    bn: 'GraphQL হলো এপিআই-র জন্য একটি শক্তিশালী কোয়েরি ল্যাঙ্গুয়েজ এবং বিদ্যমান ডেটা দিয়ে সেই কোয়েরিগুলো সম্পন্ন করার একটি রানটাইম। একটি সুস্পষ্ট টাইপ সিস্টেম প্রদান করে এবং ক্লায়েন্টকে ঠিক যতটুকু তথ্য প্রয়োজন কেবল ততটুকুই চাওয়ার স্বাধীনতা দিয়ে GraphQL ডেটার অপচয় ও একাধিক নেটওয়ার্ক কলের ঝামেলা দূর করে এবং একাধিক ব্যাকএন্ড সার্ভিসকে একক গ্রাফ এন্ডপয়েন্টে সমন্বিত করে।'
  },
  roadmap: [
    {
      stage: 1,
      title: {
        en: 'Schema Foundations & Declarative Queries',
        bn: 'স্কিমা ভিত্তি ও ঘোষণামূলক কোয়েরি'
      },
      detail: {
        en: 'Master the GraphQL Schema Definition Language (SDL): define object types, scalar types, enums, interfaces, union types, and compose hierarchical selection queries with arguments.',
        bn: 'GraphQL স্কিমা ডেফিনিশন ল্যাঙ্গুয়েজ (SDL) আয়ত্ত করুন: অবজেক্ট টাইপ, স্কেলার টাইপ, এনাম, ইন্টারফেস ও ইউনিয়ন টাইপ তৈরি এবং আর্গুমেন্ট সহ হায়ারার্কিকাল সিলেকশন কোয়েরি লিখুন।'
      }
    },
    {
      stage: 2,
      title: {
        en: 'Execution Engine, Resolvers & DataLoader',
        bn: 'এক্সিকিউশন ইঞ্জিন, রিসলভার্স ও DataLoader'
      },
      detail: {
        en: 'Understand how the GraphQL engine walks query trees, implement field resolvers, and apply Facebook’s DataLoader pattern to eliminate N+1 database roundtrips via per-tick batching and caching.',
        bn: 'GraphQL ইঞ্জিন কীভাবে কোয়েরি ট্রি এক্সিকিউট করে তা জানুন, ফিল্ড রিসলভার তৈরি করুন এবং প্রতিটি টিকে ব্যাচিং ও ক্যাশিংয়ের মাধ্যমে N+1 সমস্যা দূর করতে DataLoader প্যাটার্ন প্রয়োগ করুন।'
      }
    },
    {
      stage: 3,
      title: {
        en: 'Mutations, Subscriptions & Normalized Caching',
        bn: 'মিউটেশন, সাবস্ক্রিপশন ও নরমালাইজড ক্যাশিং'
      },
      detail: {
        en: 'Design atomic mutations with structured error payloads, implement real-time subscriptions using WebSockets and SSE, and configure client-side normalized caches like Apollo Client and Relay.',
        bn: 'সুনির্দিষ্ট এরর পে-লোড সহ পারমাণবিক মিউটেশন তৈরি করুন, ওয়েবসকেট ও এসএসই দিয়ে রিয়েল-টাইম সাবস্ক্রিপশন বাস্তবায়ন করুন এবং Apollo ও Relay-র মতো ক্লায়েন্ট নরমালাইজড ক্যাশ কনফিগার করুন।'
      }
    },
    {
      stage: 4,
      title: {
        en: 'Apollo Federation, Security & Schema Evolution',
        bn: 'অ্যাপোলো ফেডারেশন, নিরাপত্তা ও স্কিমা বিবর্তন'
      },
      detail: {
        en: 'Scale distributed architectures using Apollo Federation and GraphOS Router, enforce depth and complexity security limits, deploy persisted queries, and manage non-breaking schema evolution with @deprecated.',
        bn: 'Apollo Federation ও রাউটার ব্যবহার করে ডিস্ট্রিবিউটেড সাবগ্রাফ স্কেল করুন, কুয়েরি ডেপথ ও কমপ্লেক্সিটি লিমিট দিয়ে নিরাপত্তা নিশ্চিত করুন, পারসিস্টেড কোয়েরি চালান এবং @deprecated দিয়ে স্কিমা আপডেট করুন।'
      }
    }
  ],
  references: [
    {
      group: { en: 'Core Schema & Query Primitives', bn: 'মূল স্কিমা ও কোয়েরি প্রিমিটিভস' },
      items: [
        {
          term: 'type Query / type Mutation',
          def: {
            en: 'Root operation entry points in GraphQL SDL defining all available read queries and write mutations.',
            bn: 'GraphQL SDL-এর মূল রুট অপারেশন এন্ট্রি পয়েন্ট যা সমস্ত রিড কোয়েরি এবং রাইট মিউটেশন সংজ্ঞায়িত করে।'
          }
        },
        {
          term: 'type Subscription',
          def: {
            en: 'Root operation type enabling continuous real-time data streaming over persistent WebSocket or SSE connections.',
            bn: 'রুট অপারেশন টাইপ যা স্থায়ী ওয়েবসকেট বা এসএসই সংযোগের মাধ্যমে রিয়েল-টাইম ডেটা স্ট্রিম করতে দেয়।'
          }
        },
        {
          term: 'DataLoader(batchFn)',
          def: {
            en: 'Utility class for per-request batching and memoization caching to solve the N+1 database query problem.',
            bn: 'প্রতি রিকোয়েস্টে ব্যাচিং ও মেমোইজেশন ক্যাশিং ইউটিলিটি যা ডেটাবেজের N+1 কোয়েরি সমস্যা চিরতরে দূর করে।'
          }
        }
      ]
    },
    {
      group: { en: 'Security & Optimization Directives', bn: 'নিরাপত্তা ও অপ্টিমাইজেশন ডিরেক্টিভস' },
      items: [
        {
          term: '@deprecated(reason: String)',
          def: {
            en: 'Schema directive flagging fields destined for removal without breaking backwards compatibility.',
            bn: 'স্কিমা নির্দেশক যা বিদ্যমান ক্লায়েন্ট না ভেঙে ভবিষ্যতে অপসারণযোগ্য ফিল্ডগুলোকে চিহ্নিত করে রাখে।'
          }
        },
        {
          term: 'Persisted Queries (APQ)',
          def: {
            en: 'Technique transmitting SHA-256 operation hashes instead of full query strings over the network to reduce payload size.',
            bn: 'কৌশল যা নেটওয়ার্কে বিশাল কোয়েরি পাঠাতে SHA-256 হ্যাশ পাঠিয়ে ব্যান্ডউইথ কমায় এবং নিরাপত্তা বৃদ্ধি করে।'
          }
        },
        {
          term: 'Query Complexity Ceiling',
          def: {
            en: 'Static AST analysis calculation evaluating structural cost before resolver execution to block recursive depth attacks.',
            bn: 'স্ট্যাটিক বিশ্লেষণ যা রিসলভার চলার আগেই কোয়েরির খরচ হিসাব করে ক্ষতিকর গভীরতার আক্রমণ প্রতিহত করে।'
          }
        }
      ]
    },
    {
      group: { en: 'Federation & Distributed Graph', bn: 'ফেডারেশন ও ডিস্ট্রিবিউটেড গ্রাফ' },
      items: [
        {
          term: '@key(fields: String!)',
          def: {
            en: 'Federation directive designating primary key fields used by the gateway router to resolve entities across subgraphs.',
            bn: 'ফেডারেশন নির্দেশক যা সাবগ্রাফজুড়ে সত্তা মেলানোর জন্য গেটওয়ে রাউটার দ্বারা ব্যবহৃত প্রাইমারি কি নির্দিষ্ট করে।'
          }
        },
        {
          term: 'Apollo Router / Gateway',
          def: {
            en: 'High-performance reverse proxy that composes distributed subgraphs into a unified supergraph endpoint.',
            bn: 'হাই-পারফরম্যান্স রিভার্স প্রক্সি যা একাধিক সাবগ্রাফকে একত্রিত করে ক্লায়েন্টের সামনে একটি একক সুপারগ্রাফ উপহার দেয়।'
          }
        }
      ]
    }
  ],
  lessons: [
    grainInterviewLesson,
    trustBudgetLesson,
    schemaCourtLesson,
    resolverFoundryLesson,
    mutationChapelLesson,
    cacheGalleryLesson,
    subscriptionTideLesson,
    federationCourtLesson,
    evolutionLedgerLesson
  ],
  projects: [
    {
      title: { en: 'Enterprise E-Commerce Graph with DataLoader', bn: 'DataLoader সহ এন্টারপ্রাইজ ই-কমার্স গ্রাফ' },
      difficulty: 'intermediate',
      brief: {
        en: 'Build a production GraphQL server for an e-commerce platform featuring catalog queries, customer carts, and DataLoader-powered relation resolvers that prevent N+1 cascades.',
        bn: 'ক্যাটালগ কোয়েরি, কাস্টমার কার্ট এবং N+1 সমস্যা রোধে DataLoader চালিত রিলেশন রিসলভার সহ একটি প্রোডাকশন গ্রেড GraphQL সার্ভার তৈরি করুন।'
      }
    },
    {
      title: { en: 'Real-Time Collaborative Workspace with Subscriptions', bn: 'সাবস্ক্রিপশন সহ রিয়েল-টাইম যৌথ ওয়ার্কস্পেস' },
      difficulty: 'advanced',
      brief: {
        en: 'Develop an interactive team chat and task assignment dashboard using GraphQL mutations with atomic payload unions, WebSockets subscriptions, and optimistic client cache updates.',
        bn: 'পারমাণবিক পে-লোড ইউনিয়ন, ওয়েবসকেট সাবস্ক্রিপশন এবং ক্লায়েন্ট অপটিমিস্টিক ক্যাশ আপডেট সহ একটি রিয়েল-টাইম টিম চ্যাট ও টাস্ক ড্যাশবোর্ড তৈরি করুন।'
      }
    },
    {
      title: { en: 'Distributed Subgraph Federation with Apollo Router', bn: 'Apollo Router সহ ডিস্ট্রিবিউটেড সাবগ্রাফ ফেডারেশন' },
      difficulty: 'advanced',
      brief: {
        en: 'Architect a federated supergraph composed of Users, Inventory, and Reviews subgraphs, using @key entity resolution, automated persisted queries, and strict depth analysis.',
        bn: '@key এনটিটি রেজোলিউশন, অটোমেটেড পারসিস্টেড কোয়েরি এবং কঠোর কুয়েরি গভীরতা বিশ্লেষণ সহ তিনটি পৃথক সাবগ্রাফের একটি ফেডারেটেড সুপারগ্রাফ আর্কিটেকচার তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: '1. Always Implement DataLoader for Relational Fields: Never run one SQL query per child list item; batch and deduplicate foreign keys using per-request DataLoader instances.',
      bn: '১. রিলেশনাল ফিল্ডে সর্বদা DataLoader ব্যবহার করুন: তালিকার প্রতিটি উপাদানের জন্য আলাদা এসকিউএল কোয়েরি না চালিয়ে রিকোয়েস্ট-লেভেলে DataLoader দিয়ে ব্যাচিং করুন।'
    },
    {
      en: '2. Enforce Query Depth and Complexity Limits: Calculate static AST costs at the gateway level before waking resolvers to prevent denial-of-service recursive attacks.',
      bn: '২. কোয়েরি গভীরতা ও জটিলতার সীমা প্রয়োগ করুন: ক্ষতিকর রিকার্সিভ আক্রমণ প্রতিরোধে রিসলভার ডাকার আগেই গেটওয়ে স্তরে স্ট্যাটিক কোয়েরি খরচ যাচাই করুন।'
    },
    {
      en: '3. Return Mutation Payloads with Clear User Errors: Instead of returning bare booleans, wrap mutation responses in objects containing the modified entity and an array of domain errors.',
      bn: '৩. মিউটেশনে স্পষ্ট এরর সহ অবজেক্ট পে-লোড ফেরত দিন: কেবল ট্রু/ফলস ফেরত না দিয়ে পরিবর্তিত রেকর্ড এবং নির্দিষ্ট ডোমেন এরর অ্যারে সহ স্ট্রাকচার্ড অবজেক্ট রিটার্ন করুন।'
    },
    {
      en: '4. Never Expose __schema Introspection in Production: Disable introspection on public production endpoints to avoid leaking internal data structures and field authorizations to adversaries.',
      bn: '৪. প্রোডাকশনে কখনো __schema ইন্ট্রোস্পেকশন উন্মুক্ত রাখবেন না: আক্রমণকারীদের কাছে অভ্যন্তরীণ স্কিমা মডেল ও অনুমোদন সংক্রান্ত তথ্য ফাঁস ঠেকাতে প্রোডাকশনে ইন্ট্রোস্পেকশন বন্ধ রাখুন।'
    },
    {
      en: '5. Adopt Additive Non-Breaking Schema Changes: Evolve existing schemas by adding optional fields and marking obsolete fields with @deprecated rather than renaming or deleting types.',
      bn: '৫. স্কিমা বিবর্তনে সবসময় নন-ব্রেকিং নীতি অনুসরণ করুন: ফিল্ড রিনেম বা ডিলিট করার বদলে নতুন অপশনাল ফিল্ড যোগ করুন এবং পুরোনো ফিল্ডে @deprecated ডিরেক্টিভ ব্যবহার করুন।'
    },
    {
      en: '6. Use Persisted Queries to Cut Bandwidth and Secure Operations: Transmit compact SHA-256 hashes instead of verbose query strings over the wire to protect backend endpoints.',
      bn: '৬. ব্যান্ডউইথ বাঁচাতে ও নিরাপত্তা নিশ্চিতে পারসিস্টেড কোয়েরি চালান: নেটওয়ার্কে দীর্ঘ টেক্সট কোয়েরির বদলে কমপ্যাক্ট SHA-256 হ্যাশ পাঠিয়ে এন্ডপয়েন্ট সুরক্ষিত রাখুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does GraphQL solve the over-fetching and under-fetching problems inherent in traditional REST APIs?',
        bn: 'চিরাচরিত REST এপিআই-র ওভার-ফেচিং ও আন্ডার-ফেচিং সমস্যা GraphQL কীভাবে সমাধান করে?'
      },
      a: {
        en: 'In REST, endpoints return fixed data payloads designed on the server. If a client needs only a user name, fetching /api/users/1 still downloads 50 unneeded database columns (over-fetching). Conversely, rendering a dashboard often requires chaining 5 separate REST calls (under-fetching). GraphQL solves this by making the client selection set the contractual invoice: clients declare precisely which fields they require, and the server resolves and returns that exact JSON tree in a single network roundtrip.',
        bn: 'REST-এ সার্ভারের তৈরি করা ফিক্সড ডেটা ফরম্যাট ফিরে আসে। ব্যবহারকারীর কেবল নাম লাগলে /api/users/1 ফেচ করলেও ৫০টি অপ্রয়োজনীয় কলাম চলে আসে (ওভার-ফেচিং)। আবার পুরো ড্যাশবোর্ড দেখাতে ৫টি আলাদা রিকোয়েস্ট পাঠাতে হয় (আন্ডার-ফেচিং)। GraphQL ক্লায়েন্টকে সুনির্দিষ্ট সিলেকশন সেট লেখার সার্বভৌমত্ব দেয়: ক্লায়েন্ট যা চায় ঠিক ততটুকুই সার্ভার একটিমাত্র নেটওয়ার্ক কলে জেএসন আকারে ফেরত পাঠায়।'
      }
    },
    {
      q: {
        en: 'What is the N+1 problem in GraphQL resolvers, and how does Facebook DataLoader eliminate it?',
        bn: 'GraphQL রিসলভারে N+1 সমস্যা কী এবং Facebook DataLoader কীভাবে এটি দূর করে?'
      },
      a: {
        en: 'Because GraphQL executes resolvers field-by-field, resolving an author field for a list of 50 books naively triggers 1 initial query for the books, followed by 50 independent SQL queries for each author (51 queries total). DataLoader eliminates this by decoupling data loading from resolver execution. It buffers all requested IDs within the current Node.js event loop microtask tick and coalesces them into a single batched SQL query using an IN clause, reducing 51 queries to just 2.',
        bn: 'GraphQL প্রতিটি ফিল্ডের জন্য আলাদা রিসলভার চালায়। ৫০টি বইয়ের লেখকের তথ্য আনতে গেলে বইয়ের জন্য ১টি এবং প্রতিটি লেখকের জন্য ৫০টি আলাদা এসকিউএল কোয়েরি চলে (মোট ৫১টি কোয়েরি)। DataLoader প্রতিটি ইভেন্ট লুপ টিকে আসা আইডিগুলোকে বাফার করে এবং সেগুলোকে একটিমাত্র ইনডেক্সড এসকিউএল IN ক্লজে একত্রিত করে চালায়, ফলে ৫১টি রিকোয়েস্ট মাত্র ২টিতে নেমে আসে।'
      }
    },
    {
      q: {
        en: 'How should engineering teams secure public GraphQL APIs against denial-of-service recursive queries?',
        bn: 'পাবলিক GraphQL এপিআই-কে ডিনায়াল-অব-সার্ভিস রিকার্সিভ কোয়েরির আক্রমণ থেকে ইঞ্জিনিয়ারিং টিম কীভাবে সুরক্ষিত রাখবে?'
      },
      a: {
        en: 'Teams deploy four complementary defensive layers: (1) Query Depth Limiting: statically inspects the Abstract Syntax Tree (AST) to reject queries exceeding a threshold like 5 nested levels; (2) Query Complexity Analysis: calculates a mathematical cost score based on requested fields and pagination multipliers, rejecting operations that exceed a budget; (3) Persisted Queries: restricts production traffic exclusively to pre-registered query hashes approved during build-time CI; and (4) Rate Limiting: throttles requests per client IP or API token based on accumulated complexity cost rather than raw HTTP request count.',
        bn: 'চারটি স্তরযুক্ত নিরাপত্তা ব্যবস্থা নেওয়া হয়: (১) কোয়েরি ডেপথ লিমিট: AST বিশ্লেষণ করে ৫ ধাপের বেশি গভীর নেস্টেড কোয়েরি প্রত্যাখ্যান করা; (২) কোয়েরি জটিলতা বিশ্লেষণ: প্রতিটি ফিল্ডের ওজন হিসাব করে নির্ধারিত বাজেটের বেশি জটিল কোয়েরি বাতিল করা; (৩) পারসিস্টেড কোয়েরি: প্রোডাকশনে কেবল সিআই দ্বারা অনুমোদিত হ্যাশ কোয়েরি চালানো; এবং (৪) রেট লিমিটিং: সাধারণ রিকোয়েস্ট সংখ্যার বদলে ক্লায়েন্টের ব্যয় করা জটিলতা স্কোরের ওপর ভিত্তি করে থ্রটলিং করা।'
      }
    },
    {
      q: {
        en: 'What is the architectural difference between a monolithic schema and Apollo Federation supergraph?',
        bn: 'মনোলিথিক স্কিমা এবং Apollo Federation সুপারগ্রাফের মধ্যে কাঠামোগত পার্থক্য কী?'
      },
      a: {
        en: 'In a monolithic GraphQL setup, all type definitions and resolvers reside in a single codebase maintained by a single server. In Apollo Federation, independent domain teams own and deploy separate GraphQL microservices called subgraphs (e.g. Products, Users, Shipping). A high-performance gateway router fetches each subgraph schema, stitches them into a unified supergraph using @key directives, and automatically constructs optimized query execution plans across services while presenting a single seamless endpoint to clients.',
        bn: 'মনোলিথিক স্কিমায় সমস্ত টাইপ ও রিসলভার একটিমাত্র কোডবেসে থাকে। Apollo Federation-এ বিভিন্ন টিম স্বাধীনভাবে নিজস্ব ডোমেনের মাইক্রোসার্ভিস সাবগ্রাফ (যেমন প্রোডাক্ট, ইউজার, শিপিং) তৈরি করে। একটি হাই-পারফরম্যান্স গেটওয়ে রাউটার @key ডিরেক্টিভ দিয়ে সমস্ত সাবগ্রাফকে একটি একক সুপারগ্রাফে সমন্বিত করে এবং ক্লায়েন্টকে নির্বিঘ্ন একক এপিআই এন্ডপয়েন্ট উপহার দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'GitHub API v4 is the industry benchmark for GraphQL, utilizing strict node-cost complexity rate limiting and exposing transparent point budgets on every query.',
      bn: 'GitHub API v4 হলো GraphQL-এর বৈশ্বিক মানদণ্ড, যা কঠোর নোড-খরচ ভিত্তিক জটিলতা রেট লিমিটিং এবং প্রতিটি কোয়েরিতে স্বচ্ছ পয়েন্ট বাজেট প্রদর্শন করে।'
    },
    {
      en: 'Shopify Storefront API powers thousands of global e-commerce checkouts, dynamically scaling complexity ceilings based on merchant subscription tiers.',
      bn: 'Shopify Storefront API বিশ্বজুড়ে হাজার হাজার ই-কমার্স সাইটের চেকআউট পরিচালনা করে এবং মার্চেন্ট সাবস্ক্রিপশন স্তরের ওপর ভিত্তি করে ডাইনামিক জটিলতা বাজেট নির্ধারণ করে।'
    },
    {
      en: 'Netflix utilizes Apollo Federation at massive enterprise scale, orchestrating hundreds of microservice subgraphs into a unified studio operations supergraph.',
      bn: 'Netflix বিশালাকার এন্টারপ্রাইজ স্কেলে Apollo Federation ব্যবহার করে শত শত মাইক্রোসার্ভিস সাবগ্রাফকে একটি সমন্বিত স্টুডিও অপারেশন সুপারগ্রাফে পরিচালনা করে।'
    },
    {
      en: 'Meta developed and deployed Relay with compiled build-time queries, fragment colocation, and deterministic persisted operations across billions of active mobile devices.',
      bn: 'Meta তাদের বিলিয়ন ডিভাইসের জন্য বিল্ড-টাইমে কোয়েরি কম্পাইল, ফ্র্যাগমেন্ট কো-লোকেশন এবং ডিটারমিনিস্টিক পারসিস্টেড অপারেশন সহ Relay ফ্রেমওয়ার্ক ব্যবহার করে।'
    }
  ]
};
