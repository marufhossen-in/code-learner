import type { Lesson } from '../../../lib/types';

export const grainInterviewLesson: Lesson = {
  slug: 'the-grain-interview',
  tech: 'graphql',
  title: {
    en: 'Introduction to GraphQL — Queries, Fields & the Schema-First Philosophy',
    bn: 'GraphQL পরিচিতি — কোয়েরি, ফিল্ডস ও স্কিমা-ফার্স্ট দর্শন'
  },
  summary: {
    en: 'Traditional REST APIs require clients to accept fixed response payloads and coordinate multiple endpoint requests to assemble composite user views. GraphQL revolutionizes client-server interaction by providing a strongly typed query language that gives frontend clients total authority over response shapes. At its core lies the GraphQL Schema Definition Language (SDL), establishing a strict contractual agreement between client and server. Through hierarchical selection sets, clients specify the exact fields and nested relationships they require, completely eliminating over-fetching and under-fetching in a single HTTP POST request. By pairing client query documents with a server-side resolver execution tree, GraphQL transforms complex relational database queries into a predictable, self-documenting JSON response that mirrors the request silhouette perfectly.',
    bn: 'চিরাচরিত REST এপিআই ক্লায়েন্টকে সার্ভারের নির্ধারিত ফিক্সড ডেটা গ্রহণ করতে বাধ্য করে এবং একটিমাত্র স্ক্রিন সাজাতে একাধিক এন্ডপয়েন্টে রিকোয়েস্ট পাঠাতে হয়। GraphQL একটি শক্তিশালী টাইপযুক্ত কোয়েরি ল্যাঙ্গুয়েজ উপহার দিয়ে এই পদ্ধতিতে বৈপ্লবিক পরিবর্তন এনেছে, যা ফ্রন্টএন্ড ক্লায়েন্টকে রেসপন্সের আকারের ওপর পূর্ণ নিয়ন্ত্রণ দেয়। এর কেন্দ্রে রয়েছে Schema Definition Language (SDL), যা ক্লায়েন্ট ও সার্ভারের মধ্যে একটি সুনির্দিষ্ট চুক্তি প্রতিষ্ঠা করে। হায়ারার্কিকাল সিলেকশন সেটের মাধ্যমে ক্লায়েন্ট তার প্রয়োজনীয় ফিল্ড ও সম্পর্কগুলো স্পষ্টভাবে উল্লেখ করে, ফলে একটিমাত্র HTTP POST রিকোয়েস্টেই ওভার-ফেচিং ও আন্ডার-ফেচিং পুরোপুরি দূর হয়। ক্লায়েন্টের কোয়েরির সাথে সার্ভারের রিসলভার এক্সিকিউশন ট্রি যুক্ত করে GraphQL জটিল ডেটাবেজ কোয়েরিকে একটি সুনির্দিষ্ট ও স্ব-বর্ণিত জেএসন রেসপন্সে রূপান্তর করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Declarative Data Fetching vs Fixed Endpoints',
        bn: 'মূল ধারণা: ঘোষণামূলক ডেটা ফেচিং বনাম নির্দিষ্ট এন্ডপয়েন্ট'
      }
    },
    {
      type: 'visual',
      id: 'gql'
    },
    {
      type: 'para',
      text: {
        en: 'When you design modern client-server architectures, traditional REST (Representational State Transfer) endpoints force frontend applications to accept rigid, predetermined data structures. If a mobile view only needs a user name, fetching from a typical REST endpoint transmits dozens of irrelevant database columns across the cellular network. GraphQL fundamentally solves this by introducing a declarative query language where the client specifies the exact shape of the response it requires.',
        bn: 'যখন আপনি আধুনিক ক্লায়েন্ট-সার্ভার আর্কিটেকচার ডিজাইন করেন, তখন চিরাচরিত REST (রিপ্রেজেন্টেশনাল স্টেট ট্রান্সফার) এন্ডপয়েন্টগুলো ফ্রন্টএন্ড অ্যাপ্লিকেশনকে পূর্বনির্ধারিত অনমনীয় ডেটা কাঠামো গ্রহণে বাধ্য করে। একটি মোবাইল স্ক্রিনে যদি কেবল ব্যবহারকারীর নাম দেখানোর প্রয়োজন হয়, তবে সাধারণ REST এন্ডপয়েন্ট থেকে ফেচ করলে নেটওয়ার্ক দিয়ে ডজন ডজন অপ্রয়োজনীয় কলাম পরিবাহিত হয়। GraphQL একটি ঘোষণামূলক কোয়েরি ল্যাঙ্গুয়েজ প্রবর্তনের মাধ্যমে এর সমাধান করে, যেখানে ক্লায়েন্ট নিজেই ঠিক করে দেয় তার রেসপন্সের আকার কেমন হবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Over-fetching',
          def: {
            en: 'Downloading surplus fields and unnecessary payload bytes that the client UI never displays or utilizes',
            bn: 'অতিরিক্ত ফিল্ড ও অপ্রয়োজনীয় ডেটা ডাউনলোড করা যা ক্লায়েন্ট ইউআই কখনোই প্রদর্শন বা ব্যবহার করে না'
          }
        },
        {
          term: 'Under-fetching',
          def: {
            en: 'When a single API endpoint returns insufficient data, forcing the client to chain multiple sequential roundtrips',
            bn: 'একটিমাত্র এপিআই এন্ডপয়েন্ট থেকে পর্যাপ্ত তথ্য না পাওয়া, যার ফলে একাধিক ধারাবাহিক নেটওয়ার্ক কল করতে হয়'
          }
        },
        {
          term: 'Selection Set',
          def: {
            en: 'The nested tree of fields declared inside a GraphQL query specifying exactly which values the server must return',
            bn: 'একটি GraphQL কোয়েরির ভেতরের নেস্টেড ফিল্ড ট্রি যা সার্ভারকে ঠিক কোন কোন মান ফেরত দিতে হবে তা নির্ধারণ করে'
          }
        },
        {
          term: 'Schema Definition Language (SDL)',
          def: {
            en: 'The formal, human-readable syntax used to define types, fields, relationships, and operations in a GraphQL schema',
            bn: 'GraphQL স্কিমায় বিভিন্ন টাইপ, ফিল্ড, সম্পর্ক ও অপারেশন সংজ্ঞায়িত করার আনুষ্ঠানিক ও পাঠযোগ্য সিনট্যাক্স'
          }
        },
        {
          term: 'Field Resolver',
          def: {
            en: 'A server-side function responsible for fetching and computing the value for a single field in the schema',
            bn: 'সার্ভার-সাইড ফাংশন যা স্কিমার প্রতিটি একক ফিল্ডের জন্য প্রয়োজনীয় ডেটা সংগ্রহ ও হিসাব করার দায়িত্ব পালন করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'rest-limitations',
      text: {
        en: 'The Dual Failures of REST: Over-fetching and Under-fetching',
        bn: 'REST-এর দ্বৈত সীমাবদ্ধতা: ওভার-ফেচিং ও আন্ডার-ফেচিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider an e-commerce mobile application rendering a customer profile with recent order totals. In a classic REST architecture, the client begins by requesting GET /api/users/1. The backend server serializes the entire user table row, returning 40 fields including billing addresses, phone numbers, password hashes, and profile settings. The mobile screen consumes only the name string, while the remaining 39 fields waste cellular bandwidth and battery life.',
        bn: 'একটি ই-কমার্স মোবাইল অ্যাপ্লিকেশনের কথা বিবেচনা করুন যা গ্রাহকের প্রোফাইল ও সাম্প্রতিক অর্ডারের মোট মূল্য প্রদর্শন করে। সাধারণ REST আর্কিটেকচারে ক্লায়েন্ট প্রথমে GET /api/users/1 রিকোয়েস্ট পাঠায়। ব্যাকএন্ড সার্ভার পুরো ইউজার টেবিল রো সিরিয়ালাইজ করে ঠিকানা, ফোন নম্বর ও সেটিংস সহ মোট ৪০ টি ফিল্ড ফেরত পাঠায়। মোবাইল স্ক্রিনে কেবল নামের প্রয়োজন হলেও বাকি ৩৯ টি ফিল্ড অযথা ইন্টারনেট ব্যান্ডউইথ ও ব্যাটারি নষ্ট করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Furthermore, the user profile endpoint does not include order line items. The client must dispatch a second HTTP call to GET /api/users/1/orders to retrieve order IDs, followed by 5 separate GET requests to GET /api/orders/{id} to obtain item totals. This cascade of 7 sequential network roundtrips—known as under-fetching—creates visible loading spinners and layout shift on sluggish mobile networks.',
        bn: 'অধিকন্তু ব্যবহারকারী প্রোফাইল এন্ডপয়েন্টে অর্ডারের বিস্তারিত তথ্য থাকে না। অর্ডার আইডি পেতে ক্লায়েন্টকে দ্বিতীয় রিকোয়েস্ট পাঠাতে হয় GET /api/users/1/orders-এ, এবং এরপর আইটেমের মোট মূল্য জানতে আরো ৫ টি আলাদা GET রিকোয়েস্ট পাঠাতে হয়। আন্ডার-ফেচিং নামে পরিচিত এই ৭ টি ধারাবাহিক নেটওয়ার্ক কলের কারণে ধীরগতির মোবাইলে লোডিং স্পিনার ও লেআউট জাম্প দেখা দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'graphql-contract',
      text: {
        en: 'The GraphQL Solution: Single Endpoint and Response Symmetry',
        bn: 'GraphQL সমাধান: একক এন্ডপয়েন্ট ও রেসপন্স সামঞ্জস্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GraphQL replaces dozens of specialized REST endpoints with a single unified gateway, customarily mounted at POST /graphql. The client authors a query document that mirrors the exact hierarchical JSON tree it expects to receive. When requesting user name and order totals, the client defines a selection set asking strictly for those fields.',
        bn: 'GraphQL ডজন ডজন আলাদা REST এন্ডপয়েন্ট বাতিল করে সাধারণত POST /graphql পাথে একটিমাত্র সমন্বিত গেটওয়ে স্থাপন করে। ক্লায়েন্ট নিজেই একটি কোয়েরি দলিল তৈরি করে যা তার প্রত্যাশিত জেএসন ট্রির হুবহু প্রতিরূপ। কেবল ব্যবহারকারীর নাম ও অর্ডারের মোট মূল্য দরকার হলে ক্লায়েন্ট সিলেকশন সেটে শুধুমাত্র সেই ফিল্ডগুলোই উল্লেখ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because GraphQL enforces response symmetry, the structure of the returned JSON mirrors the client query document perfectly. If the query requests { user { name orders { total } } }, the response is guaranteed to contain a user object holding an array of orders with total numbers. Fields not mentioned in the selection set are never evaluated by resolvers and never transmitted over the wire.',
        bn: 'যেহেতু GraphQL রেসপন্সের নিখুঁত সামঞ্জস্য নিশ্চিত করে, তাই ফেরত আসা জেএসন ডেটা ক্লায়েন্টের কোয়েরির হুবহু অনুরূপ হয়। কোয়েরিতে { user { name orders { total } } } চাওয়া হলে রেসপন্সে নিশ্চিতভাবে একটি user অবজেক্টের ভেতর total সংখ্যা সম্বলিত orders অ্যারে পাওয়া যায়। সিলেকশন সেটে উল্লেখ না থাকা ফিল্ডগুলো সার্ভার কখনো প্রসেস করে না এবং ইন্টারনেটে পাঠায় না।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: REST vs GraphQL',
        bn: 'কাঠামোগত তুলনা: REST বনাম GraphQL'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'কাঠামোগত মাত্রা' },
        { en: 'REST API', bn: 'REST এপিআই' },
        { en: 'GraphQL API', bn: 'GraphQL এপিআই' }
      ],
      rows: [
        [
          { en: 'Endpoint Structure', bn: 'এন্ডপয়েন্ট কাঠামো' },
          { en: 'Multiple endpoints (/users, /orders, /products)', bn: 'একাধিক এন্ডপয়েন্ট (/users, /orders, /products)' },
          { en: 'Single unified gateway endpoint (POST /graphql)', bn: 'একক সমন্বিত গেটওয়ে এন্ডপয়েন্ট (POST /graphql)' }
        ],
        [
          { en: 'Payload Shape Authority', bn: 'ডেটা কাঠামোর নিয়ন্ত্রণ' },
          { en: 'Server dictates fixed response formats', bn: 'সার্ভার পূর্বনির্ধারিত অপরিবর্তনীয় ডেটা ফরম্যাট চাপিয়ে দেয়' },
          { en: 'Client declares exact required fields via selection set', bn: 'সিলেকশন সেটের মাধ্যমে ক্লায়েন্ট ঠিক কোন কোন ফিল্ড লাগবে তা নির্ধারণ করে' }
        ],
        [
          { en: 'Network Roundtrips', bn: 'নেটওয়ার্ক কলের সংখ্যা' },
          { en: 'Frequent waterfalls (chaining 3 to 7 requests for 1 screen)', bn: 'ঘনঘন ওয়াটারফল (১টি স্ক্রিনের জন্য ৩ থেকে ৭ টি ধারাবাহিক কল)' },
          { en: 'Single request resolves arbitrary nested graph relations', bn: 'একটিমাত্র রিকোয়েস্টে যেকোনো জটিল সম্পর্কের তথ্য চলে আসে' }
        ],
        [
          { en: 'Schema Contract & Typing', bn: 'স্কিমা চুক্তি ও টাইপিং' },
          { en: 'Optional secondary docs (OpenAPI/Swagger JSON)', bn: 'ঐচ্ছিক সহায়ক ডকুমেন্টেশন (OpenAPI/Swagger)' },
          { en: 'Mandatory strict Schema Definition Language (SDL)', bn: 'বাধ্যতামূলক ও কঠোর Schema Definition Language (SDL)' }
        ],
        [
          { en: 'HTTP Status Usage', bn: 'এইচটিটিপি স্ট্যাটাস কোড' },
          { en: 'Relies heavily on HTTP semantics (200, 201, 404, 500)', bn: 'এইচটিটিপি স্ট্যাটাসের ওপর নির্ভরশীল (200, 201, 404, 500)' },
          { en: 'Standard 200 OK carrying structured { data, errors }', bn: 'স্ট্যান্ডার্ড 200 OK যাতে কাঠামোগত { data, errors } থাকে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: GraphQL Query Tree Execution',
        bn: 'বাস্তব কোড সিমুলেশন: GraphQL কোয়েরি ট্রি এক্সিকিউশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight GraphQL Execution Simulation in Node.js

const mockDatabase = {
  users: [
    { id: '1', name: 'Zubair', email: 'zubair@example.com', role: 'admin', salary: 120000 },
    { id: '2', name: 'Ayesha', email: 'ayesha@example.com', role: 'engineer', salary: 95000 }
  ],
  orders: [
    { id: '101', userId: '1', total: 250, status: 'DELIVERED' },
    { id: '102', userId: '1', total: 80, status: 'SHIPPED' },
    { id: '103', userId: '2', total: 420, status: 'PROCESSING' }
  ]
};

// Resolvers map matching GraphQL SDL types
const resolvers = {
  Query: {
    user: (parent: unknown, args: { id: string }) => mockDatabase.users.find(u => u.id === args.id),
    users: () => mockDatabase.users
  },
  User: {
    orders: (parent: { id: string }) => mockDatabase.orders.filter(o => o.userId === parent.id)
  }
};

// Simplified executor simulating GraphQL tree traversal
function executeGraphQL(queryAst: Record<string, any>, rootResolvers: typeof resolvers) {
  const result: Record<string, any> = {};
  for (const [opField, fieldConfig] of Object.entries(queryAst)) {
    const queryResolver = (rootResolvers.Query as any)[opField];
    const resolvedRoot = queryResolver(null, fieldConfig.args);
    if (!resolvedRoot) {
      result[opField] = null;
      continue;
    }

    if (fieldConfig.selections) {
      result[opField] = projectFields(resolvedRoot, fieldConfig.selections, rootResolvers.User);
    } else {
      result[opField] = resolvedRoot;
    }
  }
  return result;
}

function projectFields(entity: Record<string, any>, selections: Record<string, any>, typeResolvers: Record<string, Function> = {}) {
  const output: Record<string, any> = {};
  for (const [field, subSelection] of Object.entries(selections)) {
    if (typeResolvers[field]) {
      const nested = typeResolvers[field](entity);
      if (Array.isArray(nested) && subSelection.selections) {
        output[field] = nested.map(item => projectFields(item, subSelection.selections));
      } else {
        output[field] = nested;
      }
    } else if (field in entity) {
      output[field] = entity[field];
    }
  }
  return output;
}

// 1. Client Query: requests ONLY name, role, and orders with total
const clientAst = {
  user: {
    args: { id: '1' },
    selections: {
      name: true,
      role: true,
      orders: {
        selections: {
          id: true,
          total: true
        }
      }
    }
  }
};

const executionResponse = executeGraphQL(clientAst, resolvers);

console.log('Resolved user name:', executionResponse.user.name);
// -> Resolved user name: Zubair
console.log('Resolved user role:', executionResponse.user.role);
// -> Resolved user role: admin
console.log('Unrequested field salary is excluded:', executionResponse.user.salary === undefined);
// -> Unrequested field salary is excluded: true
console.log('Resolved orders count:', executionResponse.user.orders.length);
// -> Resolved orders count: 2
console.log('Resolved first order total:', executionResponse.user.orders[0].total);
// -> Resolved first order total: 250
console.log('Full response payload:', JSON.stringify(executionResponse));
// -> Full response payload: {"user":{"name":"Zubair","role":"admin","orders":[{"id":"101","total":250},{"id":"102","total":80}]}}`,
      caption: {
        en: 'Simulation: client requests user 1 with 2 orders (totals 250 and 80) excluding salary, proving zero over-fetch',
        bn: 'সিমুলেশন: ক্লায়েন্ট স্যালারি বাদ দিয়ে ২৫০ ও ৮০ মূল্যের ২ টি অর্ডার সহ ইউজার ১ ফেচ করে ওভার-ফেচিং রোধ প্রমাণ করে'
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
        en: 'Rule 1: Always design schemas around client needs rather than 1-to-1 database mirrors. Exposing raw SQL tables directly as GraphQL types creates leaky abstractions and makes backend schema migrations painful.',
        bn: 'নিয়ম ১: ডেটাবেজ টেবিলের হুবহু অনুকরণ না করে ক্লায়েন্টের ব্যবহারিক চাহিদার ওপর ভিত্তি করে স্কিমা ডিজাইন করুন। সরাসরি এসকিউএল টেবিল প্রকাশ করলে ব্যাকএন্ডের অভ্যন্তরীণ পরিবর্তন জটিল হয়ে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Name operations explicitly in production queries. Instead of anonymous queries like query { user { id } }, write query GetUserProfile($id: ID!) { user(id: $id) { id } }. Named operations are required for logging, performance tracing, and APQ caching.',
        bn: 'নিয়ম ২: প্রোডাকশনের কোয়েরিতে সর্বদা অপারেশন নাম ব্যবহার করুন। বেনামী কোয়েরির বদলে query GetUserProfile($id: ID!) লিখুন। লগিং, ট্রেসিং এবং ক্যাশিং সুবিধার জন্য অপারেশনের নাম থাকা আবশ্যক।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Keep mutation inputs grouped inside dedicated Input Objects. Rather than passing 8 separate scalar parameters to a mutation, wrap them in a single CreateUserInput type to allow non-breaking field additions later.',
        bn: 'নিয়ম ৩: মিউটেশনের ইনপুটগুলোকে ডেডিকেটেড Input Object-এ রাখুন। মিউটেশনে ৮ টি আলাদা আর্গুমেন্ট না পাঠিয়ে CreateUserInput অবজেক্টে পাঠালে ভবিষ্যতে নতুন ফিল্ড যোগ করা সহজ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Do not return bare primitives from root mutations. Always return a payload object containing the mutated entity and any user-facing errors, enabling client caches to update smoothly.',
        bn: 'নিয়ম ৪: রুট মিউটেশন থেকে সাধারণ প্রিমিটিভ টাইপ ফেরত দেবেন না। পরিবর্তিত এনটিটি এবং এরর তথ্য সম্বলিত অবজেক্ট ফেরত দিলে ক্লায়েন্টের নরমালাইজড ক্যাশ সহজে আপডেট হতে পারে।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-grain-ex1',
      kind: 'mcq',
      topic: 'Solving over-fetching with selection sets',
      question: {
        en: 'How does GraphQL eliminate the over-fetching problem commonly seen in traditional REST APIs?',
        bn: 'চিরাচরিত REST এপিআই-তে বিদ্যমান ওভার-ফেচিং সমস্যা GraphQL কীভাবে দূর করে?'
      },
      options: [
        {
          en: 'Clients specify a selection set declaring precisely which fields to return, and the server resolves only those fields',
          bn: 'ক্লায়েন্ট একটি সিলেকশন সেটে ঠিক কোন কোন ফিল্ড লাগবে তা ঘোষণা করে এবং সার্ভার কেবল সেই ফিল্ডগুলোই ফেরত পাঠায়'
        },
        {
          en: 'The server compresses all HTTP responses with brotli compression to reduce byte size',
          bn: 'সার্ভার ফাইলের আকার কমাতে সমস্ত এইচটিটিপি রেসপন্স ব্রোটলি দিয়ে কম্প্রেস করে'
        },
        {
          en: 'The GraphQL engine converts all database text strings into short integer codes',
          bn: 'GraphQL ইঞ্জিন ডেটাবেজের সমস্ত টেক্সট স্ট্রিংকে সংক্ষিপ্ত ইন্টিজার কোডে রূপান্তর করে'
        },
        {
          en: 'Clients are forbidden from requesting more than 3 fields in any single query',
          bn: 'একটি কোয়েরিতে ক্লায়েন্টকে ৩ টির বেশি ফিল্ড চাইতে নিষেধ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about client-driven selection sets vs server-mandated payloads.',
        bn: 'সার্ভার-নির্ধারিত ফরম্যাটের বিপরীতে ক্লায়েন্ট-চালিত সিলেকশন সেটের কথা ভাবুন।'
      },
      explanation: {
        en: 'In GraphQL, the client defines the selection set. The server executes resolvers only for the requested fields, preventing surplus data transfer.',
        bn: 'GraphQL-এ ক্লায়েন্ট নিজে সিলেকশন সেট লিখে দেয়। সার্ভার কেবল চাহিত ফিল্ডগুলোর রিসলভার চালায়, ফলে বাড়তি কোনো ডেটা আসে না।'
      }
    },
    {
      id: 'gql-grain-ex2',
      kind: 'mcq',
      topic: 'Solving under-fetching via nested relationships',
      question: {
        en: 'What architectural feature of GraphQL prevents the under-fetching problem where clients must chain multiple REST calls?',
        bn: 'GraphQL-এর কোন কাঠামোগত বৈশিষ্ট্য আন্ডার-ফেচিং প্রতিরোধ করে যেখানে ক্লায়েন্টকে একাধিক REST কল করতে হতো?'
      },
      options: [
        {
          en: 'Hierarchical query documents allowing clients to fetch parent entities and nested relationships in a single network roundtrip',
          bn: 'হায়ারার্কিকাল কোয়েরি যার মাধ্যমে ক্লায়েন্ট প্যারেন্ট এনটিটি এবং তার সাথে সম্পর্কিত নেস্টেড ডেটা একটিমাত্র রিকোয়েস্টে আনতে পারে'
        },
        {
          en: 'A background web worker that silently downloads every endpoint on the server',
          bn: 'একটি ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কার যা সার্ভারের সমস্ত এন্ডপয়েন্ট নিজে থেকেই ডাউনলোড করে নেয়'
        },
        {
          en: 'Automatic HTTP redirection to the database storage engine',
          bn: 'ডেটাবেজ স্টোরেজ ইঞ্জিনে স্বয়ংক্রিয় এইচটিটিপি রিডাইরেকশন'
        },
        {
          en: 'Converting relational tables into flat CSV strings before sending',
          bn: 'ডেটা পাঠানোর আগে রিলেশনাল টেবিলগুলোকে সাধারণ সিএসভি স্ট্রিংয়ে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider querying nested graph connections like user { orders { items } } in one operation.',
        bn: 'একটি অপারেশনে user { orders { items } }-এর মতো নেস্টেড গ্রাফ ফেচ করার কথা চিন্তা করুন।'
      },
      explanation: {
        en: 'Clients can traverse relationships in a single query document. The GraphQL engine executes the entire tree and returns the composite result in one HTTP response.',
        bn: 'ক্লায়েন্ট একটি কোয়েরির ভেতরেই একাধিক সম্পর্কযুক্ত ডেটা চাইতে পারে। সার্ভার পুরো ট্রি প্রসেস করে একটিমাত্র রেসপন্সে সব তথ্য পাঠিয়ে দেয়।'
      }
    },
    {
      id: 'gql-grain-ex3',
      kind: 'mcq',
      topic: 'Role of Schema Definition Language (SDL)',
      question: {
        en: 'What role does the Schema Definition Language (SDL) play in a GraphQL application?',
        bn: 'একটি GraphQL অ্যাপ্লিকেশনে Schema Definition Language (SDL) কী ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It serves as a strongly-typed contract defining all types, fields, queries, and mutations available on the server',
          bn: 'এটি একটি কঠোর টাইপযুক্ত চুক্তি হিসেবে কাজ করে যা সার্ভারের সমস্ত উপলব্ধ টাইপ, ফিল্ড, কোয়েরি ও মিউটেশন নির্ধারণ করে'
        },
        {
          en: 'It is a proprietary compiled binary code format used exclusively by Meta data centers',
          bn: 'এটি মেটার নিজস্ব একটি কম্পাইল্ড বাইনারি ফরম্যাট যা কেবল তাদের ডেটাসেন্টারে চলে'
        },
        {
          en: 'It generates HTML templates for web browsers to render web pages directly',
          bn: 'এটি ব্রাউজারে সরাসরি ওয়েবপেজ প্রদর্শনের জন্য এইচটিএমএল টেমপ্লেট তৈরি করে'
        },
        {
          en: 'It replaces SQL queries by directly compiling to machine assembly code',
          bn: 'এটি এসকিউএল প্রতিস্থাপন করে সরাসরি মেশিন অ্যাসেম্বলি কোডে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about the type-safe agreement between client developers and backend developers.',
        bn: 'ক্লায়েন্ট ও ব্যাকএন্ড ডেভেলপারদের মধ্যকার টাইপ-সেফ চুক্তির কথা ভাবুন।'
      },
      explanation: {
        en: 'The SDL defines the exact shape of the API. It is used for query validation, tooling autocompletion, documentation, and automated type generation.',
        bn: 'SDL এপিআই-র সার্বিক কাঠামো নির্ধারণ করে। এটি কোয়েরি যাচাই, অটো-কমপ্লিশন, ডকুমেন্টেশন এবং টাইপস্ক্রিপ্ট টাইপ তৈরিতে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'gql-grain-ex4',
      kind: 'mcq',
      topic: 'Response symmetry in GraphQL',
      question: {
        en: 'What is meant by the principle of "Response Symmetry" in GraphQL?',
        bn: 'GraphQL-এ "Response Symmetry" বা রেসপন্স সামঞ্জস্য নীতি বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'The returned JSON data structure mirrors the exact silhouette and field hierarchy declared in the client query document',
          bn: 'ফেরত আসা জেএসন ডেটার কাঠামো ক্লায়েন্টের পাঠানো কোয়েরি দলিলের হুবহু অনুরূপ ও সামঞ্জস্যপূর্ণ হয়'
        },
        {
          en: 'The server must return the exact same number of bytes as the incoming HTTP header',
          bn: 'আগত এইচটিটিপি হেডারের সমান সংখ্যক বাইট সার্ভারকে ফেরত পাঠাতে হয়'
        },
        {
          en: 'Queries and mutations must be executed in symmetrical alternating pairs',
          bn: 'কোয়েরি ও মিউটেশনকে পর্যায়ক্রমে জোড়ায় জোড়ায় চালাতে হয়'
        },
        {
          en: 'Client and server must have identical CPU hardware architectures',
          bn: 'ক্লায়েন্ট এবং সার্ভারের সিপিইউ হার্ডওয়্যার আর্কিটেকচার হুবহু একই হতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look at how the shape of the request predicts the shape of the JSON response.',
        bn: 'রিকোয়েস্টের আকৃতি কীভাবে রেসপন্স জেএসনের আকৃতি ঠিক করে তা দেখুন।'
      },
      explanation: {
        en: 'Response symmetry means frontend developers can predict the exact JSON structure of the answer simply by looking at the query document.',
        bn: 'রেসপন্স সামঞ্জস্যের কারণে কোয়েরি দলিল দেখেই ফ্রন্টএন্ড ডেভেলপার নিশ্চিতভাবে বুঝতে পারেন উত্তরের জেএসন ডেটা দেখতে কেমন হবে।'
      }
    }
  ],
  quiz: {
    id: 'the-grain-interview-quiz',
    title: {
      en: 'GraphQL Fundamentals & Query Architecture Quiz',
      bn: 'GraphQL ফান্ডামেন্টালস ও কোয়েরি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-http-method-graphql',
        kind: 'mcq',
        topic: 'Standard HTTP method for GraphQL queries',
        question: {
          en: 'Why do most production GraphQL clients transmit queries using HTTP POST rather than HTTP GET?',
          bn: 'বেশিরভাগ প্রোডাকশন GraphQL ক্লায়েন্ট কেন HTTP GET-এর বদলে POST দিয়ে কোয়েরি পাঠায়?'
        },
        options: [
          {
            en: 'Complex queries with nested selection sets and variables can easily exceed HTTP GET URL length limitations in browsers and proxies',
            bn: 'নেস্টেড সিলেকশন সেট ও ভেরিয়েবল সম্বলিত বিশদ কোয়েরি ব্রাউজার ও প্রক্সির GET ইউআরএল দৈর্ঘ্যের সীমা ছাড়িয়ে যেতে পারে'
          },
          {
            en: 'HTTP GET is deprecated in HTTP/2 and HTTP/3 specifications',
            bn: 'HTTP/2 এবং HTTP/3 স্পেসিফিকেশনে HTTP GET বাতিল করা হয়েছে'
          },
          {
            en: 'POST requests cannot be inspected by browser developer tools',
            bn: 'ব্রাউজার ডেভেলপার টুলস দিয়ে POST রিকোয়েস্ট পরীক্ষা করা যায় না'
          },
          {
            en: 'GraphQL specifications make HTTP POST mandatory for all network communications',
            bn: 'GraphQL স্পেসিফিকেশন অনুযায়ী সমস্ত নেটওয়ার্ক যোগাযোগের জন্য POST বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the size of long query documents and URL length limits.',
          bn: 'দীর্ঘ কোয়েরি ডকুমেন্টের আকার এবং ইউআরএল দৈর্ঘ্যের সীমাবদ্ধতার কথা ভাবুন।'
        },
        explanation: {
          en: 'Large queries with fragments and variables often reach several kilobytes, exceeding URL length limits for GET requests. POST carries the query safely in the request body.',
          bn: 'ফ্র্যাগমেন্ট ও ভেরিয়েবল সহ বড় কোয়েরি কয়েক কিলোবাইট পর্যন্ত হতে পারে, যা GET ইউআরএলের সীমা পার করে। তাই বডিতে ডেটা পাঠাতে POST ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-field-resolver-responsibility',
        kind: 'mcq',
        topic: 'Field resolver execution hierarchy',
        question: {
          en: 'How does the GraphQL execution engine resolve fields requested in a nested query?',
          bn: 'একটি নেস্টেড কোয়েরিতে চাওয়া ফিল্ডগুলো GraphQL এক্সিকিউশন ইঞ্জিন কীভাবে সমাধান করে?'
        },
        options: [
          {
            en: 'It walks the query tree depth-first, passing the parent object to each child field resolver function',
            bn: 'এটি কোয়েরি ট্রি ডেপথ-ফার্স্ট পদ্ধতিতে ট্রাভার্স করে এবং প্রতিটি চাইল্ড ফিল্ডের রিসলভার ফাংশনে প্যারেন্ট অবজেক্ট পাস করে'
          },
          {
            en: 'It executes all resolvers in parallel using a random thread scheduler',
            bn: 'এটি একটি র‍্যান্ডম থ্রেড শিডিউলার দিয়ে সমস্ত রিসলভার সমান্তরালে চালায়'
          },
          {
            en: 'It executes a single giant SQL query generated by an artificial neural network',
            bn: 'এটি নিউরাল নেটওয়ার্কের তৈরি একটিমাত্র বিশালাকার এসকিউএল কোয়েরি চালায়'
          },
          {
            en: 'It downloads the entire server database to the client browser first',
            bn: 'এটি প্রথমে পুরো সার্ভার ডেটাবেজ ক্লায়েন্ট ব্রাউজারে ডাউনলোড করে নেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about parent-child relationships and recursive resolver walks.',
          bn: 'প্যারেন্ট-চাইল্ড সম্পর্ক এবং রিকার্সিভ রিসলভার ট্রাভার্সালের কথা চিন্তা করুন।'
        },
        explanation: {
          en: 'GraphQL executes resolvers hierarchically. The root Query resolver produces parent data, which flows downward as the parent argument to subsequent child resolvers.',
          bn: 'GraphQL ধাপে ধাপে রিসলভার চালায়। রুট কোয়েরি রিসলভার মূল ডেটা তৈরি করে, যা নিচের চাইল্ড রিসলভারগুলোতে parent আর্গুমেন্ট হিসেবে চলে যায়।'
        }
      },
      {
        id: 'q-root-operation-types',
        kind: 'mcq',
        topic: 'Three root operation types in GraphQL',
        question: {
          en: 'What are the three canonical root operation types defined in the GraphQL specification?',
          bn: 'GraphQL স্পেসিফিকেশনে স্বীকৃত ৩ টি মূল রুট অপারেশন টাইপ কী কী?'
        },
        options: [
          {
            en: 'Query (read operations), Mutation (write operations), and Subscription (real-time push streams)',
            bn: 'Query (পড়ার জন্য), Mutation (লেখার জন্য), এবং Subscription (রিয়েল-টাইম পুশ স্ট্রিম)'
          },
          {
            en: 'Get, Put, and Delete',
            bn: 'Get, Put, এবং Delete'
          },
          {
            en: 'Select, Insert, and Update',
            bn: 'Select, Insert, এবং Update'
          },
          {
            en: 'Fetch, Patch, and Stream',
            bn: 'Fetch, Patch, এবং Stream'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of read, write, and event-driven operations in GraphQL SDL.',
          bn: 'GraphQL SDL-এ পড়া, লেখা এবং ইভেন্ট-চালিত অপারেশনের কথা ভাবুন।'
        },
        explanation: {
          en: 'The GraphQL specification establishes Query for reading data, Mutation for writing or modifying state, and Subscription for continuous event streams.',
          bn: 'GraphQL স্পেসিফিকেশনে পড়ার জন্য Query, পরিবর্তনের জন্য Mutation এবং লাইভ ইভেন্টের জন্য Subscription এই ৩ টি রুট টাইপ নির্ধারিত।'
        }
      },
      {
        id: 'q-graphql-partial-errors',
        kind: 'mcq',
        topic: 'Partial success and error handling in GraphQL',
        question: {
          en: 'What distinguishes GraphQL error handling from traditional HTTP REST error codes?',
          bn: 'GraphQL-এর এরর হ্যান্ডলিং চিরাচরিত HTTP REST এরর কোড থেকে কীভাবে আলাদা?'
        },
        options: [
          {
            en: 'GraphQL supports partial success by returning an HTTP 200 containing both valid data for successful branches and an errors array for failed fields',
            bn: 'GraphQL আংশিক সাফল্য সমর্থন করে; এটি HTTP 200 স্ট্যাটাস সহ সফল ব্রাঞ্চের জন্য data এবং ব্যর্থ ফিল্ডের জন্য errors অ্যারে একসাথে ফেরত দেয়'
          },
          {
            en: 'GraphQL completely suppresses all errors and never notifies the client',
            bn: 'GraphQL সমস্ত এরর গোপন রাখে এবং ক্লায়েন্টকে কখনো জানায় না'
          },
          {
            en: 'GraphQL returns a 404 whenever any single nested field fails',
            bn: 'যেকোনো একটি নেস্টেড ফিল্ড ব্যর্থ হলেই GraphQL ৪০৪ স্ট্যাটাস দেয়'
          },
          {
            en: 'GraphQL aborts the entire TCP socket connection upon any resolver error',
            bn: 'রিসলভারে সামান্য ত্রুটি হলেই GraphQL পুরো টিসিপি সকেট বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider the { data, errors } envelope returned under HTTP 200.',
          bn: 'HTTP ২০০ এর অধীনে ফিরে আসা { data, errors } কাঠামোর কথা বিবেচনা করুন।'
        },
        explanation: {
          en: 'In GraphQL, if one field resolver throws an error, sibling fields still resolve successfully. The response returns HTTP 200 with data for surviving subtrees and errors detailing the failure.',
          bn: 'GraphQL-এ একটি ফিল্ড ব্যর্থ হলেও বাকি ফিল্ডগুলো সফলভাবে কাজ করে। ফলে HTTP ২০০ এর সাথে সফল অংশের জন্য data এবং ব্যর্থ অংশের জন্য errors উভয়ই একসাথে পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-trust-budget',
    title: {
      en: 'Query Complexity & Security — Depth Limiting, Cost Analysis & Persisted Queries',
      bn: 'কোয়েরি জটিলতা ও নিরাপত্তা — ডেপথ লিমিটিং, কস্ট অ্যানালাইসিস ও পারসিস্টেড কোয়েরিজ'
    }
  }
};
