import type { Lesson } from '../../../lib/types';

export const schemaCourtLesson: Lesson = {
  slug: 'the-schema-court',
  tech: 'graphql',
  title: {
    en: 'Schema Definition Language (SDL) — Types, Interfaces, Enums & Nullability',
    bn: 'স্কিমা ডেফিনিশন ল্যাঙ্গুয়েজ (SDL) — টাইপস, ইন্টারফেসেস, এনামস ও নাল্যাবিলিটি'
  },
  summary: {
    en: 'The GraphQL Schema Definition Language (SDL) establishes an immutable, strongly typed contract that governs all client-server communications. Every operation is statically validated against the schema before execution, ensuring type safety across mobile and web applications. GraphQL provides five fundamental scalar types alongside custom scalars for specialized domain formats. Beyond basic object types, SDL supports polymorphism through interfaces and union types, separating input mutations from output profiles. Crucially, nullability serves as error geography rather than mere data validation. A nullable field absorbs resolver failures locally, preserving the surrounding document. In contrast, a non-nullable field propagates errors upward to its nearest nullable parent, where unhandled failures can collapse entire query responses into blank screens.',
    bn: 'GraphQL Schema Definition Language (SDL) একটি অপরিবর্তনীয় ও কঠোর টাইপযুক্ত চুক্তি প্রতিষ্ঠা করে যা সমস্ত ক্লায়েন্ট-সার্ভার যোগাযোগ নিয়ন্ত্রণ করে। প্রতিটি কোয়েরি এক্সিকিউশনের পূর্বেই স্কিমার বিপরীতে যাচাই করা হয়, যা ওয়েব ও মোবাইল উভয় প্ল্যাটফর্মে টাইপ নিরাপত্তা নিশ্চিত করে। GraphQL পাঁচটি মৌলিক স্কেলার টাইপ এবং বিশেষ ডোমেনের জন্য কাস্টম স্কেলারের সুবিধা দেয়। সাধারণ অবজেক্ট টাইপ ছাড়াও SDL ইন্টারফেস ও ইউনিয়নের মাধ্যমে বহুরূপতা সমর্থন করে এবং আউটপুট থেকে ইনপুট অবজেক্টকে কঠোরভাবে আলাদা রাখে। সবচেয়ে গুরুত্বপূর্ণ হলো নাল্যাবিলিটি কেবল ডেটা ভ্যালিডেশন নয়, এটি মূলত এরর নিয়ন্ত্রণ ভূগোল হিসেবে কাজ করে। একটি nullable ফিল্ড ব্যর্থতাকে নিজের মধ্যে সীমাবদ্ধ রেখে বাকি স্ক্রিন অক্ষত রাখে; কিন্তু একটি non-nullable ফিল্ডে এরর ঘটলে তা ওপরের দিকে ধাবিত হয়ে পুরো রেসপন্স ধ্বংস করে দিতে পারে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Schema as Executable Law',
        bn: 'মূল ধারণা: কার্যকর আইন হিসেবে স্কিমা'
      }
    },
    {
      type: 'visual',
      id: 'gql'
    },
    {
      type: 'para',
      text: {
        en: 'When you design a GraphQL API, the Schema Definition Language (SDL) serves as the executable constitution of your entire distributed system. Unlike loose REST (Representational State Transfer) JSON responses where property types fluctuate without warning, GraphQL schemas enforce strict type validation before a single database resolver wakes up. Understanding how to structure scalar types, object types, interfaces, unions, and nullability contracts ensures your backend remains resilient against breaking schema migrations.',
        bn: 'যখন আপনি একটি GraphQL এপিআই ডিজাইন করেন, তখন Schema Definition Language (SDL) আপনার পুরো ডিস্ট্রিবিউটেড সিস্টেমের কার্যকর সংবিধান হিসেবে কাজ করে। সাধারণ REST (রিপ্রেজেন্টেশনাল স্টেট ট্রান্সফার) জেএসন রেসপন্সে যেখানে প্রপার্টির টাইপ হঠাৎ বদলে যাওয়ার ঝুঁকি থাকে, সেখানে GraphQL স্কিমা কোনো ডেটাবেজ রিসলভার জাগার আগেই কঠোর টাইপ যাচাই সম্পন্ন করে। স্কেলার টাইপ, অবজেক্ট টাইপ, ইন্টারফেস, ইউনিয়ন এবং নাল্যাবিলিটি চুক্তি কীভাবে সাজাতে হয় তা জানা আপনার ব্যাকএন্ডকে অপ্রত্যাশিত ক্র্যাশ থেকে সুরক্ষিত রাখে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Scalar Types',
          def: {
            en: 'Primitive leaf values in GraphQL that resolve to concrete data without nested child fields (Int, Float, String, Boolean, ID)',
            bn: 'GraphQL-এর আদিম লিফ ভ্যালু যা কোনো নেস্টেড চাইল্ড ফিল্ড ছাড়াই সরাসরি মান প্রদান করে (Int, Float, String, Boolean, ID)'
          }
        },
        {
          term: 'Interface',
          def: {
            en: 'An abstract type defining a mandatory set of fields that multiple concrete object types must implement',
            bn: 'একটি বিমূর্ত টাইপ যা নির্দিষ্ট কিছু ফিল্ডের চুক্তি নির্ধারণ করে এবং একাধিক অবজেক্ট টাইপ তা বাস্তবায়ন করে'
          }
        },
        {
          term: 'Union Type',
          def: {
            en: 'A polymorphic type representing an object that can be one of several distinct types without sharing common fields',
            bn: 'একটি পলিমরফিক টাইপ যা সাধারণ ফিল্ড ভাগাভাগি না করেই একাধিক ভিন্ন টাইপের যেকোনো একটি হতে পারে'
          }
        },
        {
          term: 'Input Object Type',
          def: {
            en: 'A specialized object type used exclusively as arguments to mutations or queries, restricted from interfaces and unions',
            bn: 'বিশেষায়িত অবজেক্ট টাইপ যা কেবল মিউটেশন বা কোয়েরির আর্গুমেন্ট হিসেবে ব্যবহৃত হয় এবং ইন্টারফেস সমর্থন করে না'
          }
        },
        {
          term: 'Non-null Assertion (!)',
          def: {
            en: 'Type modifier guaranteeing that a field or argument can never resolve to null, triggering error propagation if violated',
            bn: 'টাইপ মডিফায়ার যা নিশ্চিত করে ফিল্ডের মান কখনো null হতে পারে না; লঙ্ঘিত হলে ওপরের দিকে এরর ছড়িয়ে পড়ে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'polymorphism',
      text: {
        en: 'Polymorphism in GraphQL: Interfaces versus Union Types',
        bn: 'GraphQL-এ পলিমরফিজম: ইন্টারফেস বনাম ইউনিয়ন টাইপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Domain models often involve entities sharing common properties while possessing unique attributes. GraphQL provides two distinct mechanisms for polymorphism: Interfaces and Unions. An interface establishes a shared field contract. For example, interface Character requires id and name. Both Human and Droid implement this interface, allowing clients to query id and name directly, using inline fragments like ... on Droid { primaryFunction } only for specialized fields.',
        bn: 'বাস্তব ডেটা মডেলে প্রায়শই কিছু সাধারণ ফিল্ডের পাশাপাশি বিশেষ বৈশিষ্ট্য থাকে। GraphQL পলিমরফিজমের জন্য দুটি স্বতন্ত্র ব্যবস্থা দেয়: ইন্টারফেস এবং ইউনিয়ন। একটি ইন্টারফেস সাধারণ ফিল্ডের চুক্তি প্রতিষ্ঠা করে। যেমন interface Character-এ id ও name থাকা বাধ্যতামূলক। Human এবং Droid উভয়ই এটি বাস্তবায়ন করায় ক্লায়েন্ট সরাসরি id ও name চাইতে পারে এবং কেবল বিশেষ ফিল্ডের জন্য ... on Droid { primaryFunction }-এর মতো ইনলাইন ফ্র্যাগমেন্ট ব্যবহার করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In contrast, Union types group objects that do not share any common fields. A search bar might return users, products, or articles. Declaring union SearchResult = User | Product | Article allows the query to resolve to any of these three distinct shapes. Because they share no guaranteed schema fields, the client must use inline fragments on every union member to extract properties.',
        bn: 'অন্যদিকে ইউনিয়ন টাইপ এমন অবজেক্টগুলোকে একত্রিত করে যাদের মধ্যে কোনো সাধারণ ফিল্ড থাকে না। যেমন একটি সার্চ বারে ইউজার, প্রোডাক্ট বা আর্টিকেল আসতে পারে। union SearchResult = User | Product | Article ঘোষণা করলে কোয়েরি এই তিনটির যেকোনো একটি ফেরত দিতে পারে। এদের মাঝে কোনো সর্বজনীন ফিল্ড না থাকায় ক্লায়েন্টকে প্রতিটি মেম্বারের জন্য আলাদা ইনলাইন ফ্র্যাগমেন্ট দিয়ে ফিল্ড রিড করতে হয়।'
      }
    },
    {
      type: 'heading',
      id: 'nullability-geography',
      text: {
        en: 'Nullability as Error Geography: Local Absorption vs Cascading Collapse',
        bn: 'এরর নিয়ন্ত্রণ ভূগোল হিসেবে নাল্যাবিলিটি: স্থানীয় শোষণ বনাম ক্যাসকেডিং পতন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In GraphQL SDL, fields are nullable by default. Appending an exclamation mark (e.g. name: String!) marks a field as non-nullable. Many developers reflexively mark all fields non-nullable, believing it creates cleaner frontend code. In production, this practice is dangerous because nullability is not just validation; it is an error containment contract.',
        bn: 'GraphQL SDL-এ প্রতিটি ফিল্ড ডিফল্টভাবে nullable বা শূন্য হতে সক্ষম। একটি বিস্ময়সূচক চিহ্ন যোগ করলে (যেমন name: String!) ফিল্ডটি non-nullable হয়। অনেক ডেভেলপার সব ফিল্ডে নির্দ্বিধায় বিস্ময়সূচক চিহ্ন বসিয়ে দেন। প্রোডাকশনে এটি মারাত্মক বিপজ্জনক কারণ নাল্যাবিলিটি কেবল ডেটা ভ্যালিডেশন নয়, এটি মূলত এরর নিয়ন্ত্রণের সীমানা নির্ধারণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a field resolver throws an error, the GraphQL execution engine checks its nullability. If the field is nullable, the engine sets that single field to null, appends an entry to the errors array, and renders all other sibling fields normally. But if the failing field is non-nullable, GraphQL cannot legally return null. The error bubbles upward to the nearest nullable ancestor, wiping out entire parent objects and converting small partial failures into full-page whiteouts.',
        bn: 'কোনো ফিল্ডের রিসলভারে ত্রুটি দেখা দিলে GraphQL ইঞ্জিন তার নাল্যাবিলিটি পরীক্ষা করে। ফিল্ডটি nullable হলে ইঞ্জিন কেবল সেই ফিল্ডটিকে null করে errors অ্যারেতে ত্রুটি লিখে দেয় এবং বাকি সমস্ত ফিল্ড স্বাভাবিকভাবে রেন্ডার করে। কিন্তু ব্যর্থ ফিল্ডটি non-nullable হলে GraphQL কোনোভাবেই null দিতে পারে না। তখন এররটি লাফিয়ে ওপরের নিকটতম nullable পূর্বসূরির কাছে চলে যায় এবং পুরো প্যারেন্ট অবজেক্টকে null বানিয়ে ফেলে, যার ফলে ছোট ভুলের কারণে পুরো পেজ ফাঁকা হয়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: SDL Type Constructs',
        bn: 'কাঠামোগত তুলনা: SDL টাইপ কনস্ট্রাক্টস'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Construct Type', bn: 'কনস্ট্রাক্ট টাইপ' },
        { en: 'Primary Usage', bn: 'মূল ব্যবহার' },
        { en: 'Polymorphism Capability', bn: 'পলিমরফিজম ক্ষমতা' },
        { en: 'Fragment Requirement', bn: 'ফ্র্যাগমেন্ট প্রয়োজনীয়তা' }
      ],
      rows: [
        [
          { en: 'Object Type (type)', bn: 'অবজেক্ট টাইপ (type)' },
          { en: 'Defines output entities returned by queries and resolvers', bn: 'কোয়েরি ও রিসলভার দ্বারা ফেরত দেওয়া আউটপুট এনটিটি' },
          { en: 'Can implement one or more interfaces', bn: 'এক বা একাধিক ইন্টারফেস বাস্তবায়ন করতে পারে' },
          { en: 'None; queried directly using field names', bn: 'নেই; সরাসরি ফিল্ডের নাম লিখে কোয়েরি করা যায়' }
        ],
        [
          { en: 'Input Object (input)', bn: 'ইনপুট অবজেক্ট (input)' },
          { en: 'Carries structured arguments into mutations and queries', bn: 'মিউটেশন ও কোয়েরিতে কাঠামোগত আর্গুমেন্ট পাঠায়' },
          { en: 'Strictly prohibited from interfaces or unions', bn: 'ইন্টারফেস বা ইউনিয়ন সমর্থন পুরোপুরি নিষিদ্ধ' },
          { en: 'None; passed as scalar/object variable trees', bn: 'নেই; ভেরিয়েবল ট্রি হিসেবে সরাসরি পাস করা হয়' }
        ],
        [
          { en: 'Interface (interface)', bn: 'ইন্টারফেস (interface)' },
          { en: 'Guarantees shared fields across multiple concrete types', bn: 'একাধিক কনক্রিট টাইপের মধ্যে সাধারণ ফিল্ডের নিশ্চয়তা দেয়' },
          { en: 'Shared contract enforced at compilation time', bn: 'কম্পাইল টাইমে সাধারণ চুক্তি বাধ্যতামূলক করে' },
          { en: 'Inline fragments required only for specialized fields', bn: 'কেবল বিশেষ ফিল্ডের জন্য ইনলাইন ফ্র্যাগমেন্ট লাগে' }
        ],
        [
          { en: 'Union Type (union)', bn: 'ইউনিয়ন টাইপ (union)' },
          { en: 'Groups unrelated types under a single polymorphic response', bn: 'ভিন্নধর্মী টাইপগুলোকে একক রেসপন্সের অধীনে দলবদ্ধ করে' },
          { en: 'Closed-world set of distinct object types', bn: 'বিভিন্ন অবজেক্ট টাইপের একটি সীমাবদ্ধ সেট' },
          { en: 'Mandatory inline fragments on every member type', bn: 'প্রতিটি মেম্বার টাইপের ওপর ইনলাইন ফ্র্যাগমেন্ট বাধ্যতামূলক' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Nullability & Error Bubbling Mechanics',
        bn: 'বাস্তব কোড সিমুলেশন: নাল্যাবিলিটি ও এরর বাবলিং কার্যপদ্ধতি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Simulation of GraphQL Nullability and Error Bubbling

function resolveField(schema: Record<string, string>, fieldName: string, value: any, shouldFail = false) {
  const isNonNull = schema[fieldName]?.endsWith('!') ?? false;

  if (shouldFail || value === null || value === undefined) {
    if (isNonNull) {
      throw new Error('Cannot return null for non-nullable field: ' + fieldName);
    }
    return null;
  }
  return value;
}

// Case 1: Nullable field fails (Error is absorbed locally)
function simulateNullableFailure() {
  const schema = {
    id: 'ID!',
    name: 'String!',
    avatarUrl: 'String' // Nullable field
  };

  const errors: Array<{ field: string; message: string }> = [];
  const result: Record<string, any> = { id: 'usr_1', name: 'Kabir' };

  try {
    result.avatarUrl = resolveField(schema, 'avatarUrl', null, true);
  } catch (err: any) {
    errors.push({ field: 'avatarUrl', message: err.message });
  }

  return {
    data: result,
    errorsCount: errors.length,
    avatarValue: result.avatarUrl
  };
}

// Case 2: Non-nullable field fails (Error bubbles up and wipes parent)
function simulateNonNullFailure() {
  const schema = {
    id: 'ID!',
    name: 'String!', // Non-nullable field fails
    email: 'String!'
  };

  const errors: Array<{ field: string; message: string }> = [];
  let userRecord: Record<string, any> | null = { id: 'usr_2', email: 'ayesha@test.com' };

  try {
    userRecord.name = resolveField(schema, 'name', null, true);
  } catch (err: any) {
    errors.push({ field: 'name', message: err.message });
    // Error bubbles to parent root: userRecord collapses to null!
    userRecord = null;
  }

  return {
    data: userRecord,
    errorsCount: errors.length
  };
}

const case1 = simulateNullableFailure();
const case2 = simulateNonNullFailure();

console.log('Case 1 (Nullable): user data preserved:', case1.data !== null);
// -> Case 1 (Nullable): user data preserved: true
console.log('Case 1 (Nullable): avatarUrl absorbed as null:', case1.avatarValue === null);
// -> Case 1 (Nullable): avatarUrl absorbed as null: true
console.log('Case 1 (Nullable): errors count:', case1.errorsCount);
// -> Case 1 (Nullable): errors count: 0

console.log('Case 2 (Non-nullable): user record collapsed to null:', case2.data === null);
// -> Case 2 (Non-nullable): user record collapsed to null: true
console.log('Case 2 (Non-nullable): errors count:', case2.errorsCount);
// -> Case 2 (Non-nullable): errors count: 1`,
      caption: {
        en: 'Simulation: nullable failure in Case 1 preserves user with 0 errors; non-nullable failure in Case 2 collapses record with 1 error',
        bn: 'সিমুলেশন: কেস ১ এ nullable ব্যর্থতা ০ এরর সহ ডেটা বাঁচায়; কেস ২ এ non-nullable ব্যর্থতা ১ এরর সহ রেকর্ড মুছে দেয়'
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
        en: 'Rule 1: Keep external microservice integrations nullable. Any field that depends on a third-party payment gateway, external search cluster, or caching service must be nullable so external outages do not bring down your core user experience.',
        bn: 'নিয়ম ১: বহিরাগত মাইক্রোসার্ভিস ইন্টিগ্রেশন ফিল্ডগুলোকে সর্বদা nullable রাখুন। পেমেন্ট গেটওয়ে বা সার্চ ইঞ্জিনের ওপর নির্ভরশীল ফিল্ড nullable থাকলে তৃতীয় পক্ষের সার্ভার ডাউন হলেও আপনার মূল অ্যাপ চালু থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Model list nullability carefully with [Item!]!. In almost all application interfaces, a list should be an array of non-null items; [Item!]! ensures the array exists and contains no null entries, simplifying client state.',
        bn: 'নিয়ম ২: তালিকার নাল্যাবিলিটি [Item!]! দিয়ে সতর্কভাবে সাজান। প্রায় সব ইউআই-তে তালিকার উপাদানগুলো নিখুঁত হওয়া দরকার; [Item!]! নিশ্চিত করে যে অ্যারে উপস্থিত থাকবে এবং তার ভেতরে কোনো null আইটেম থাকবে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use Result unions for domain mutation outcomes. Instead of returning raw entities, declare union CreateUserPayload = UserSuccess | EmailAlreadyInUseError to provide exhaustive type-safe error handling for frontend clients.',
        bn: 'নিয়ম ৩: ডোমেন মিউটেশনের ক্ষেত্রে রেজাল্ট ইউনিয়ন ব্যবহার করুন। সাধারণ এনটিটির বদলে union CreateUserPayload = UserSuccess | EmailAlreadyInUseError দিলে ফ্রন্টএন্ডে প্রতিটি ত্রুটি টাইপ-সেফভাবে হ্যান্ডেল করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Never delete or rename enum values. Enums represent a closed world in client code; removing an enum value breaks frontend TypeScript switch statements, causing runtime rendering failures.',
        bn: 'নিয়ম ৪: এনাম মান কখনো মুছে ফেলবেন না বা রিনেম করবেন না। ক্লায়েন্ট কোডে এনাম একটি সীমাবদ্ধ জগৎ; কোনো মান মুছে ফেললে ক্লায়েন্টের switch স্টেটমেন্ট ভেঙে পড়ে এবং রানটাইম ক্র্যাশ ঘটে।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-court-ex1',
      kind: 'mcq',
      topic: 'Nullability and error bubbling mechanics',
      question: {
        en: 'What happens when a field resolver throws an unhandled error for a field declared as non-nullable (e.g. name: String!)?',
        bn: 'একটি non-nullable ফিল্ডের (যেমন name: String!) রিসলভারে হ্যান্ডেল না করা এরর দেখা দিলে কী ঘটে?'
      },
      options: [
        {
          en: 'The error bubbles up to the nearest nullable ancestor in the query tree, setting that entire parent object to null',
          bn: 'এররটি কোয়েরি ট্রির নিকটতম nullable পূর্বসূরির কাছে ধাবিত হয় এবং পুরো প্যারেন্ট অবজেক্টকে null করে দেয়'
        },
        {
          en: 'GraphQL silently replaces the missing string with the empty string "" and continues execution',
          bn: 'GraphQL কোনো সংকেত ছাড়াই অনুপস্থিত স্ট্রিংকে ফাঁকা স্ট্রিং "" বানিয়ে কাজ চালিয়ে যায়'
        },
        {
          en: 'The server restarts the Node.js process immediately to clear memory',
          bn: 'মেমোরি খালি করতে সার্ভার সাথে সাথে নোড জেএস প্রসেস রিস্টার্ট করে'
        },
        {
          en: 'The client web browser crashes with an unhandled WebAssembly memory allocation exception',
          bn: 'ক্লায়েন্ট ব্রাউজার ওয়েবঅ্যাসেম্বলি মেমোরি বরাদ্দের ত্রুটি দেখিয়ে ক্র্যাশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'GraphQL cannot return null for a non-nullable field, so the parent must absorb the null.',
        bn: 'non-nullable ফিল্ডে null দেওয়া অবৈধ হওয়ায় প্যারেন্ট অবজেক্টকে সেই null গ্রহণ করতে হয়।'
      },
      explanation: {
        en: 'Because GraphQL contracts forbid returning null for a non-nullable field, the nullability failure bubbles upward until it reaches a nullable parent object.',
        bn: 'যেহেতু চুক্তিতে non-nullable ফিল্ডে null ফেরত দেওয়া নিষিদ্ধ, তাই ব্যর্থতা ওপরের দিকে উঠে নিকটবর্তী প্রথম nullable প্যারেন্টে গিয়ে পুরো অবজেক্ট মুছে দেয়।'
      }
    },
    {
      id: 'gql-court-ex2',
      kind: 'mcq',
      topic: 'Interfaces versus Unions distinction',
      question: {
        en: 'What is the primary structural difference between an Interface and a Union type in GraphQL SDL?',
        bn: 'GraphQL SDL-এ একটি Interface এবং Union টাইপের মধ্যে প্রধান কাঠামোগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'Interfaces mandate a set of common fields shared across implementers, whereas Unions group disparate object types that share no common fields',
          bn: 'ইন্টারফেস বাস্তবায়নকারীদের মধ্যে সাধারণ ফিল্ড থাকা বাধ্যতামূলক করে, অন্যদিকে ইউনিয়ন এমন সব টাইপকে দলবদ্ধ করে যাদের সাধারণ ফিল্ড নেই'
        },
        {
          en: 'Interfaces can only be used with numbers, while Unions only accept strings',
          bn: 'ইন্টারফেস কেবল সংখ্যায় ব্যবহৃত হয় আর ইউনিয়ন কেবল স্ট্রিং গ্রহণ করে'
        },
        {
          en: 'Unions can be passed as mutation inputs, while Interfaces cannot',
          bn: 'ইউনিয়নকে মিউটেশনের ইনপুট হিসেবে পাঠানো যায় কিন্তু ইন্টারফেসকে পাঠানো যায় না'
        },
        {
          en: 'There is no functional or architectural difference between them',
          bn: 'এদের মধ্যে কোনো কাঠামোগত বা বাস্তবিক পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about shared fields that can be queried directly versus inline fragments.',
        bn: 'সরাসরি কোয়েরি করা যায় এমন সাধারণ ফিল্ড বনাম ইনলাইন ফ্র্যাগমেন্টের কথা ভাবুন।'
      },
      explanation: {
        en: 'Interfaces define shared fields that can be queried directly on the interface. Unions have no shared fields, requiring inline fragments on concrete member types.',
        bn: 'ইন্টারফেসের সাধারণ ফিল্ডগুলো সরাসরি চাওয়া যায়। কিন্তু ইউনিয়নে কোনো সাধারণ ফিল্ড না থাকায় প্রতিটি সদস্যের ওপর ইনলাইন ফ্র্যাগমেন্ট ব্যবহার করতে হয়।'
      }
    },
    {
      id: 'gql-court-ex3',
      kind: 'mcq',
      topic: 'Input Object restrictions',
      question: {
        en: 'Why does GraphQL strictly prohibit Input Object types from implementing Interfaces or participating in Unions?',
        bn: 'GraphQL কেন Input Object টাইপগুলোকে ইন্টারফেস বা ইউনিয়নে যুক্ত হতে কঠোরভাবে নিষেধ করে?'
      },
      options: [
        {
          en: 'To ensure deterministic, unambiguous static validation of client input arguments before query execution begins',
          bn: 'কোয়েরি এক্সিকিউশন শুরু হওয়ার আগেই ক্লায়েন্টের আর্গুমেন্টগুলোর দ্ব্যর্থহীন ও নির্দিষ্ট স্ট্যাটিক যাচাই নিশ্চিত করতে'
        },
        {
          en: 'Because input objects are compiled into WebGL shaders that do not support pointers',
          bn: 'কারণ ইনপুট অবজেক্ট ওয়েবজিএল শেডারে কম্পাইল হয় যা পয়েন্টার সমর্থন করে না'
        },
        {
          en: 'Because JSON does not support transmitting objects over HTTP POST',
          bn: 'কারণ জেএসন ফরম্যাট এইচটিটিপি POST দিয়ে অবজেক্ট পাঠাতে পারে না'
        },
        {
          en: 'To force all mutations to accept only scalar numbers',
          bn: 'সমস্ত মিউটেশন যাতে কেবল স্কেলার সংখ্যা গ্রহণ করে তা বাধ্য করতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Input arguments must be unambiguous and validated statically before resolvers run.',
        bn: 'রিসলভার চলার আগেই ইনপুট আর্গুমেন্ট স্পষ্ট ও স্ট্যাটিকভাবে যাচাইযোগ্য হতে হয়।'
      },
      explanation: {
        en: 'Input arguments must be strictly and deterministically validated at parse time. Allowing polymorphic inputs would complicate static validation and type coercion.',
        bn: 'ইনপুট আর্গুমেন্ট পার্স করার সময়ই সুনির্দিষ্টভাবে যাচাই হতে হয়। বহুরূপী ইনপুট অনুমোদন করলে স্ট্যাটিক যাচাইকরণ জটিল হয়ে পড়ে।'
      }
    },
    {
      id: 'gql-court-ex4',
      kind: 'mcq',
      topic: 'List nullability configurations',
      question: {
        en: 'What guarantee does the syntax [User!]! provide to frontend developers consuming a GraphQL query?',
        bn: '[User!]! সিনট্যাক্সটি কোনো GraphQL কোয়েরি ব্যবহারকারী ফ্রন্টএন্ড ডেভেলপারকে কী নিশ্চয়তা দেয়?'
      },
      options: [
        {
          en: 'The list itself will never be null, and every element inside the list is guaranteed to be a non-null User object',
          bn: 'তালিকাটি নিজে কখনো null হবে না এবং তালিকার ভেতরের প্রতিটি উপাদান নিশ্চিতভাবে একটি non-null User অবজেক্ট হবে'
        },
        {
          en: 'The list will always contain at least 100 User records',
          bn: 'তালিকায় সর্বদা কমপক্ষে ১০০ টি ইউজার রেকর্ড থাকবে'
        },
        {
          en: 'The User objects will be sorted alphabetically by email address',
          bn: 'ইউজার অবজেক্টগুলো ইমেইল ঠিকানা অনুযায়ী বর্ণানুক্রমে সাজানো থাকবে'
        },
        {
          en: 'The query will execute synchronously inside the browser memory heap',
          bn: 'কোয়েরিটি ব্রাউজার মেমোরি হিপে সম্পূর্ণ সিনক্রোনাসভাবে চলবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The outer exclamation marks the list; the inner exclamation marks the items.',
        bn: 'বাইরের বিস্ময়সূচক চিহ্ন তালিকার নিশ্চয়তা দেয়; ভেতরেরটি আইটেমের নিশ্চয়তা দেয়।'
      },
      explanation: {
        en: '[User!]! guarantees that the field always returns an array (empty or populated) and that no elements in the array are null, eliminating nested null checks in frontend JSX.',
        bn: '[User!]! নিশ্চিত করে যে ফিল্ডটি সর্বদা একটি অ্যারে ফেরত দেবে এবং ভেতরের কোনো উপাদান কখনো null হবে না, ফলে ফ্রন্টএন্ড কোডে বাড়তি নাল-চেকের ঝামেলা দূর হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-schema-court-quiz',
    title: {
      en: 'GraphQL Schema Design & Nullability Quiz',
      bn: 'GraphQL স্কিমা ডিজাইন ও নাল্যাবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'q-enum-evolution-safety',
        kind: 'mcq',
        topic: 'Enum evolution rule: add-only covenant',
        question: {
          en: 'Why is deleting or renaming an enum value in a production GraphQL schema strictly forbidden?',
          bn: 'প্রোডাকশন GraphQL স্কিমায় কোনো এনাম মান মুছে ফেলা বা রিনেম করা কেন কঠোরভাবে নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Client applications contain compiled TypeScript switch statements; removing an enum value causes unhandled runtime exceptions in active apps',
            bn: 'ক্লায়েন্ট অ্যাপে টাইপস্ক্রিপ্ট switch স্টেটমেন্ট থাকে; এনাম মান মুছে ফেললে সক্রিয় অ্যাপগুলোতে অপ্রত্যাশিত রানটাইম এরর ঘটে'
          },
          {
            en: 'Enums are permanently saved in client hardware ROM chips',
            bn: 'এনাম মানগুলো ক্লায়েন্টের হার্ডওয়্যার রম চিপে স্থায়ীভাবে লেখা থাকে'
          },
          {
            en: 'GraphQL schemas automatically lock after being published for 1 hour',
            bn: '১ ঘণ্টা প্রকাশিত থাকার পর GraphQL স্কিমা স্বয়ংক্রিয়ভাবে লক হয়ে যায়'
          },
          {
            en: 'Database foreign keys cannot support string enumeration types',
            bn: 'ডেটাবেজের ফরেন কি স্ট্রিং এনাম টাইপ সমর্থন করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about active mobile apps running older client versions in the wild.',
          bn: 'ব্যবহারকারীদের ফোনে ইনস্টল থাকা অ্যাপের পুরোনো সংস্করণের কথা ভাবুন।'
        },
        explanation: {
          en: 'Mobile apps cannot be forced to update simultaneously. If you remove an enum value that an older client expects, client deserialization will fail, crashing the application.',
          bn: 'মোবাইল অ্যাপ সবার ফোনে একসাথে আপডেট করানো যায় না। পুরোনো অ্যাপের চাওয়া কোনো এনাম মুছে দিলে ক্লায়েন্ট ক্র্যাশ করে।'
        }
      },
      {
        id: 'q-custom-scalar-validation',
        kind: 'mcq',
        topic: 'Custom scalars and validation responsibility',
        question: {
          en: 'Why do production GraphQL architectures introduce custom scalars like scalar DateTime or scalar URL?',
          bn: 'প্রোডাকশন GraphQL আর্কিটেকচারে scalar DateTime বা scalar URL-এর মতো কাস্টম স্কেলার কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'They enforce format validation and serialization rules at the schema boundary, preventing invalid dates or malformed URLs from entering resolvers',
            bn: 'তারা স্কিমার সীমানায় ফরম্যাট যাচাই ও সিরিয়ালাইজেশন নিশ্চিত করে, ফলে অবৈধ তারিখ বা বিকৃত ইউআরএল রিসলভারে প্রবেশ করতে পারে না'
          },
          {
            en: 'Custom scalars make HTTP requests travel faster than the speed of light',
            bn: 'কাস্টম স্কেলারের কারণে এইচটিটিপি রিকোয়েস্ট আলোর গতির চেয়ে দ্রুত ভ্রমণ করে'
          },
          {
            en: 'Standard GraphQL does not support text strings or numbers',
            bn: 'সাধারণ GraphQL কোনো টেক্সট স্ট্রিং বা সংখ্যা সমর্থন করে না'
          },
          {
            en: 'They compress all server database tables into compact audio files',
            bn: 'তারা সার্ভার ডেটাবেজের সমস্ত টেবিল কমপ্যাক্ট অডিও ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Custom scalars validate input strings against regular expressions or parser functions.',
          bn: 'কাস্টম স্কেলার রেগুলার এক্সপ্রেশন বা পার্সার দিয়ে ইনপুট স্ট্রিংয়ের সত্যতা যাচাই করে।'
        },
        explanation: {
          en: 'Custom scalars serialize and parse values on the fly, rejecting malformed timestamps or URLs during request validation before backend database logic executes.',
          bn: 'কাস্টম স্কেলার রানটাইমে ডেটা পার্স ও ভ্যালিডেট করে, ফলে বিকৃত ডেটা ব্যাকএন্ড ডেটাবেজ লজিকে যাওয়ার আগেই পার্সিং পর্যায়ে আটকে যায়।'
        }
      },
      {
        id: 'q-mutation-result-union',
        kind: 'mcq',
        topic: 'Result-or-Error union modeling pattern',
        question: {
          en: 'What architectural advantage does modeling mutation outcomes as a Union (e.g. UserSuccess | ValidationError) offer?',
          bn: 'মিউটেশনের ফলাফলকে ইউনিয়ন (যেমন UserSuccess | ValidationError) হিসেবে সাজালে কী কাঠামোগত সুবিধা মেলে?'
        },
        options: [
          {
            en: 'It turns domain business errors into explicit, strongly typed payload data that clients can handle with exhaustive pattern matching',
            bn: 'এটি ডোমেনের ব্যবসায়িক ভুলগুলোকে সুস্পষ্ট ও টাইপযুক্ত ডেটায় রূপান্তর করে যা ক্লায়েন্ট প্যাটার্ন ম্যাচিং দিয়ে অনায়াসে সামলাতে পারে'
          },
          {
            en: 'It automatically fixes all syntax bugs in the backend server code',
            bn: 'এটি ব্যাকএন্ড সার্ভারের কোডের সমস্ত সিনট্যাক্স ভুল স্বয়ংক্রিয়ভাবে ঠিক করে দেয়'
          },
          {
            en: 'It reduces the total number of lines in the database schema',
            bn: 'এটি ডেটাবেজ স্কিমার মোট লাইনের সংখ্যা কমিয়ে ফেলে'
          },
          {
            en: 'It allows mutations to run without an active internet connection',
            bn: 'এটি কোনো ইন্টারনেট সংযোগ ছাড়াই মিউটেশন চালানোর সুবিধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about expected business errors (invalid email) vs unexpected system crashes (DB down).',
          bn: 'প্রত্যাশিত ব্যবসায়িক ত্রুটি (যেমন ভুল ইমেইল) বনাম অপ্রত্যাশিত সার্ভার ক্র্যাশের পার্থক্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'Expected domain errors (e.g. username taken) are modeled as data in a union, reserving GraphQL top-level errors strictly for catastrophic unexpected infrastructure failures.',
          bn: 'প্রত্যাশিত ভুলগুলো (যেমন ইউজারনেম ইতিমধ্যে ব্যবহৃত) ইউনিয়নের ভেতরে স্বাভাবিক ডেটা হিসেবে পাঠানো হয়, যা ক্লায়েন্ট সহজে দেখাতে পারে।'
        }
      },
      {
        id: 'q-nullability-blast-radius',
        kind: 'mcq',
        topic: 'Minimizing error blast radius with strategic nullability',
        question: {
          en: 'How should an API architect design nullability to minimize the blast radius of partial backend service failures?',
          bn: 'আংশিক ব্যাকএন্ড সার্ভিস ডাউন হলেও এরর ব্লাস্ট রেডিয়াস বা ক্ষতির পরিধি কমাতে একজন এপিআই আর্কিটেক্টের কীভাবে নাল্যাবিলিটি ডিজাইন করা উচিত?'
        },
        options: [
          {
            en: 'Keep root and composite relation fields nullable so that failures in downstream subservices only collapse their own subtree, leaving the rest of the UI intact',
            bn: 'রুট ও কম্পোজিট রিলেশন ফিল্ডগুলোকে nullable রাখা যাতে কোনো সার্ভিস ডাউন হলে কেবল তার নিজস্ব অংশটি খালি হয় এবং বাকি ইউআই অক্ষত থাকে'
          },
          {
            en: 'Mark every single field in the entire schema as non-nullable with !',
            bn: 'পুরো স্কিমার প্রতিটি ফিল্ডে জোরপূর্বক ! দিয়ে non-nullable করা'
          },
          {
            en: 'Disable all error logging across the entire cloud cluster',
            bn: 'পুরো ক্লাউড ক্লাস্টারে সমস্ত এরর লগিং পুরোপুরি নিষ্ক্রিয় করা'
          },
          {
            en: 'Convert all database relationships into flat text files on disk',
            bn: 'ডেটাবেজের সমস্ত সম্পর্ককে ডিস্কে সাধারণ টেক্সট ফাইলে রূপান্তর করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Nullable boundaries prevent errors from escalating and destroying sibling data.',
          bn: 'Nullable সীমানা এররকে ওপরের দিকে উঠে পাশের ভালো ডেটা নষ্ট করতে দেয় না।'
        },
        explanation: {
          en: 'Making composite fields nullable provides error boundaries in the data graph. If an recommendations service is down, only recommendations resolves to null, allowing the main profile to render.',
          bn: 'কম্পোজিট ফিল্ডগুলোকে nullable রাখলে গ্রাফে এরর বাউন্ডারি তৈরি হয়। রিকমেন্ডেশন সার্ভিস ডাউন হলে কেবল সেই অংশটি null হবে, কিন্তু মূল প্রোফাইল পেজ ঠিকমতো প্রদর্শিত হবে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-resolver-foundry',
    title: {
      en: 'Resolvers & DataLoader — Execution Tree, Batching & Solving the N+1 Problem',
      bn: 'রিসলভার্স ও DataLoader — এক্সিকিউশন ট্রি, ব্যাচিং ও N+1 সমস্যা সমাধান'
    }
  }
};
