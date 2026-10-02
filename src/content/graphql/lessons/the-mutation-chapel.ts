import type { Lesson } from '../../../lib/types';

export const mutationChapelLesson: Lesson = {
  slug: 'the-mutation-chapel',
  tech: 'graphql',
  title: {
    en: 'Mutations & Input Unions — Atomic Writes, Custom Error Payloads & Idempotency',
    bn: 'মিউটেশন ও ইনপুট ইউনিয়ন — পারমাণবিক রাইট, এরর পে-লোড ও আইডেমপোটেন্সি'
  },
  summary: {
    en: 'While GraphQL queries handle read operations through concurrent resolver execution, mutations govern all state-modifying write operations. To prevent unpredictable race conditions between interdependent side effects, the GraphQL specification mandates that root mutation fields must execute strictly in serial order. Modern schema design replaces monolithic update mutations with fine-grained, intent-revealing verb phrases wrapped in dedicated Input Objects. Rather than relying on HTTP error codes or generic top-level errors, production mutations return structured payload objects containing the modified entity alongside strongly typed userErrors. Furthermore, by incorporating clientMutationId or idempotency keys, servers safely deduplicate retried network requests, ensuring that intermittent mobile disconnects never result in duplicate billing charges or corrupted application state.',
    bn: 'GraphQL কোয়েরি সমান্তরাল রিসলভারের মাধ্যমে ডেটা পড়ার কাজ করলেও সমস্ত ডেটা পরিবর্তনের দায়িত্ব থাকে মিউটেশনের ওপর। একাধিক কাজের মাঝে রেস কন্ডিশন এড়াতে GraphQL স্পেসিফিকেশন কঠোরভাবে নির্দেশ করে যে রুট মিউটেশন ফিল্ডগুলো অবশ্যই ধারাবাহিকভাবে একের পর এক চলতে হবে। আধুনিক স্কিমা ডিজাইনে একটিমাত্র বিশাল মিউটেশন এড়িয়ে সুনির্দিষ্ট কাজের জন্য পৃথক ক্রিয়াপদ-ভিত্তিক মিউটেশন এবং ডেডিকেটেড Input Object ব্যবহার করা হয়। সাধারণ এইচটিটিপি এরর কোডের ওপর নির্ভর না করে প্রোডাকশন মিউটেশন পরিবর্তিত এনটিটি এবং টাইপযুক্ত userErrors সহ স্ট্রাকচার্ড পে-লোড ফেরত দেয়। এছাড়া clientMutationId বা আইডেমপোটেন্সি কি ব্যবহারের মাধ্যমে সার্ভার ডুপ্লিকেট রিকোয়েস্ট প্রতিরোধ করে, যার ফলে দুর্বল মোবাইল নেটওয়ার্কেও একই পেমেন্ট দুবার কেটে নেওয়ার ঝুঁকি থাকে না।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Serial Execution and State Mutations',
        bn: 'মূল ধারণা: ধারাবাহিক এক্সিকিউশন ও স্টেট মিউটেশন'
      }
    },
    {
      type: 'visual',
      id: 'form-valid'
    },
    {
      type: 'para',
      text: {
        en: 'When you design state-altering operations in a web API, mutations represent the write side of the GraphQL architecture. Unlike queries where multiple root fields execute concurrently in parallel, the GraphQL specification mandates that root mutation fields execute strictly in serial order. Understanding how to structure atomic payloads, handle domain validation errors with userErrors, and enforce idempotency ensures your backend prevents race conditions and duplicate writes.',
        bn: 'যখন আপনি কোনো ওয়েব এপিআই-তে ডেটা পরিবর্তনকারী অপারেশন ডিজাইন করেন, তখন মিউটেশন হলো GraphQL আর্কিটেকচারের রাইট-সাইড। যেক্ষেত্রে কোয়েরির একাধিক ফিল্ড সমান্তরালে বা প্যারালালে চলে, সেক্ষেত্রে GraphQL স্পেসিফিকেশন অনুযায়ী মিউটেশনের রুট ফিল্ডগুলো কঠোরভাবে ক্রমানুসারে একের পর এক চলতে বাধ্য। পারমাণবিক পে-লোড তৈরি, userErrors দিয়ে ডোমেন ভ্যালিডেশন এরর পরিচালনা এবং আইডেমপোটেন্সি প্রয়োগ কীভাবে করতে হয় তা জানা আপনার ব্যাকএন্ডে ডেটাবেজ রেস কন্ডিশন ও ডুপ্লিকেট রাইট পুরোপুরি প্রতিরোধ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Serial Execution Guarantee',
          def: {
            en: 'The GraphQL specification rule requiring root mutation fields to execute one after another in exact document order',
            bn: 'GraphQL স্পেসিফিকেশনের নিয়ম যা রুট মিউটেশন ফিল্ডগুলোকে দলিলের ক্রমানুসারে একের পর এক চালাতে বাধ্য করে'
          }
        },
        {
          term: 'Mutation Payload Pattern',
          def: {
            en: 'Design convention where mutations return dedicated wrapper objects containing the mutated entity and user-facing error arrays',
            bn: 'ডিজাইন প্যাটার্ন যেখানে মিউটেশন সরাসরি রেকর্ড না দিয়ে পরিবর্তিত রেকর্ড ও এরর অ্যারে সম্বলিত র‍্যাপার অবজেক্ট ফেরত দেয়'
          }
        },
        {
          term: 'userErrors Field',
          def: {
            en: 'A strongly-typed array within a mutation payload carrying domain validation failures (message and field path) to client UI forms',
            bn: 'মিউটেশন পে-লোডের একটি টাইপযুক্ত অ্যারে যা ক্লায়েন্ট ফর্মের জন্য সুনির্দিষ্ট ভ্যালিডেশন এরর বহন করে'
          }
        },
        {
          term: 'Idempotency Key',
          def: {
            en: 'A unique client-generated token ensuring that network-retried mutation calls do not execute duplicate state changes',
            bn: 'একটি ক্লায়েন্ট-জেনারেটেড ইউনিক টোকেন যা নিশ্চিত করে নেটওয়ার্ক ব্যর্থতায় পুনরায় পাঠানো কল ডুপ্লিকেট রাইট ঘটাবে না'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'serial-execution',
      text: {
        en: 'The Serial Execution Rule vs Concurrent Queries',
        bn: 'ধারাবাহিক এক্সিকিউশন নীতি বনাম সমান্তরাল কোয়েরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In GraphQL Query operations, all root fields execute concurrently in parallel using asynchronous promises. If a query requests userProfile and latestNews, both resolvers run at the same time to minimize latency. However, for Mutation operations, this concurrent behavior would cause race conditions. If a client submits depositFunds followed by withdrawFunds in the same document, running them simultaneously could result in an invalid balance calculation.',
        bn: 'GraphQL Query অপারেশনে সমস্ত রুট ফিল্ড প্রমিজের মাধ্যমে সমান্তরালে বা প্যারালালে চলে। কোয়েরিতে userProfile এবং latestNews চাইলে দুটি রিসলভারই একসাথে কাজ শুরু করে যাতে সময় বাঁচে। কিন্তু Mutation অপারেশনে সমান্তরালভাবে চালালে মারাত্মক রেস কন্ডিশন তৈরি হবে। ক্লায়েন্ট একই রিকোয়েস্টে depositFunds এবং withdrawFunds পাঠালে দুটি একসাথে চললে ভুল ব্যালান্স তৈরি হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To guarantee data integrity, the GraphQL specification mandates that root mutation fields execute sequentially. The engine awaits the complete resolution of the first mutation field—including all its nested selection set resolvers—before waking the second root mutation. This ensures that every database transaction commits before the subsequent dependent step begins.',
        bn: 'ডেটার সঠিকতা নিশ্চিতে GraphQL স্পেসিফিকেশন নির্দেশ দেয় যে রুট মিউটেশনগুলো একের পর এক চলবে। ইঞ্জিন প্রথম মিউটেশনের সমস্ত চাইল্ড রিসলভারের কাজ পুরোপুরি শেষ হওয়ার পরই কেবল দ্বিতীয় মিউটেশনের কাজ শুরু করে। ফলে প্রতিটি ডেটাবেজ ট্রানজ্যাকশন নিরাপদে সম্পন্ন হওয়ার পরেই পরবর্তী ধাপ পরিচালিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'payload-pattern',
      text: {
        en: 'The Mutation Payload Pattern and userErrors',
        bn: 'মিউটেশন পে-লোড প্যাটার্ন ও userErrors'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Early GraphQL implementations often returned bare entity objects like User or simple booleans from mutations. In production, this pattern causes difficulties: what happens when an email is already taken? Throwing a top-level GraphQL error treats an expected validation failure as an unhandled system crash, polluting error monitoring tools like Sentry.',
        bn: 'শুরুর দিকে GraphQL মিউটেশন থেকে সরাসরি User অবজেক্ট বা বুলিয়ান মান ফেরত দেওয়া হতো। কিন্তু কোনো ইমেইল যদি আগেই ব্যবহৃত হয়ে থাকে তবে কী হবে? টপ-লেভেল এরর ছুড়ে দিলে সেন্ট্রির মতো মনিটরিং টুলে সাধারণ ফর্ম ভ্যালিডেশনও সার্ভার ক্র্যাশ হিসেবে রেকর্ড হতে থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The industry standard is the Mutation Payload Pattern. Every mutation returns a dedicated object type: type RegisterUserPayload { user: User userErrors: [UserError!]! }. When a validation check fails, the resolver returns user: null with an array of userErrors explaining which form field failed. This allows frontend client components to render helpful inline error alerts without triggering global crash boundaries.',
        bn: 'শিল্পের সর্বজনীন মানদণ্ড হলো মিউটেশন পে-লোড প্যাটার্ন। প্রতিটি মিউটেশন একটি নির্দিষ্ট অবজেক্ট ফেরত দেয়: type RegisterUserPayload { user: User userErrors: [UserError!]! }। ভ্যালিডেশন ব্যর্থ হলে রিসলভার user: null এবং কোন ফিল্ডে ভুল হয়েছে তা জানিয়ে userErrors পাঠায়। ফলে ফ্রন্টএন্ডে ব্যবহারকারীকে সহজে ফর্ম এরর দেখানো যায় কোনো ক্র্যাশ বাউন্ডিং ছাড়াই।'
      }
    },
    {
      type: 'heading',
      id: 'idempotency-keys',
      text: {
        en: 'Idempotency and Network Resilience with clientMutationId',
        bn: 'clientMutationId দিয়ে আইডেমপোটেন্সি ও নেটওয়ার্ক সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Mobile connections frequently fail at the final hop: the server completes a payment charge and writes to the database, but the cellular tower drops before the HTTP success response reaches the phone. If the user clicks Submit Order again or the mobile client automatically retries, the server naively charges the credit card a second time.',
        bn: 'মোবাইল ইন্টারনেটে প্রায়শই শেষ মুহূর্তে সংযোগ বিচ্ছিন্ন হয়: সার্ভার পেমেন্ট কেটে ডেটাবেজে লিখে ফেলল, কিন্তু ফোনের কাছে রেসপন্স পৌঁছানোর আগেই টাওয়ারের কানেকশন চলে গেল। তখন ব্যবহারকারী আবার সাবমিট বাটনে চাপ দিলে বা অ্যাপ নিজে থেকে রিট্রাই করলে একই কার্ডে দ্বিতীয়বার টাকা কেটে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Idempotency solves this through a clientMutationId or idempotencyKey argument. When the server receives an idempotency key, it checks an atomic cache like Redis. If the key was processed within the last 24 hours, the server skips the database write entirely and returns the cached mutation payload immediately, guaranteeing safe retries across distributed networks.',
        bn: 'আইডেমপোটেন্সি কি বা clientMutationId এই সমস্যার স্থায়ী সমাধান দেয়। সার্ভার যখন একটি আইডেমপোটেন্সি কি পায়, তখন রেডিসের মতো দ্রুত ক্যাশ পরীক্ষা করে। গত ২৪ ঘণ্টার মধ্যে সেই কি দিয়ে কাজ হয়ে থাকলে সার্ভার নতুন করে ডেটাবেজে না লিখে আগের সেভ করা রেসপন্স ফেরত পাঠিয়ে দেয়, যা ডুপ্লিকেট পেমেন্ট পুরোপুরি বন্ধ করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Mutation Response Paradigms',
        bn: 'কাঠামোগত তুলনা: মিউটেশন রেসপন্স পদ্ধতি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Pattern Dimension', bn: 'প্যাটার্ন মাত্রা' },
        { en: 'Bare Entity Return', bn: 'সরাসরি এনটিটি রিটার্ন' },
        { en: 'Dedicated Payload Pattern', bn: 'ডেডিকেটেড পে-লোড প্যাটার্ন' },
        { en: 'Result Union Pattern', bn: 'রেজাল্ট ইউনিয়ন প্যাটার্ন' }
      ],
      rows: [
        [
          { en: 'Return Signature', bn: 'রিটার্ন টাইপ' },
          { en: 'createUser(input): User!', bn: 'createUser(input): User!' },
          { en: 'createUser(input): CreateUserPayload!', bn: 'createUser(input): CreateUserPayload!' },
          { en: 'createUser(input): CreateUserResult!', bn: 'createUser(input): CreateUserResult!' }
        ],
        [
          { en: 'Domain Error Strategy', bn: 'ব্যবসায়িক এরর ব্যবস্থাপনা' },
          { en: 'Must throw top-level GraphQL errors', bn: 'টপ-লেভেল এরর ছুড়ে মারতে বাধ্য হয়' },
          { en: 'Structured userErrors array inside payload', bn: 'পে-লোডের ভেতরে টাইপযুক্ত userErrors অ্যারে' },
          { en: 'Exhaustive polymorphic error types in union', bn: 'ইউনিয়নে সুনির্দিষ্ট পলিমরফিক এরর অবজেক্ট' }
        ],
        [
          { en: 'Client Schema Extensibility', bn: 'ভবিষ্যৎ সম্প্রসারণ সুবিধা' },
          { en: 'Very poor; breaking changes required for metadata', bn: 'খুবই দুর্বল; বাড়তি তথ্যের জন্য স্কিমা ভাঙতে হয়' },
          { en: 'Excellent; add fields like clientMutationId easily', bn: 'চমৎকার; নতুন ফিল্ড অনায়াসে যোগ করা যায়' },
          { en: 'Excellent; add new error union members safely', bn: 'চমৎকার; নতুন এরর টাইপ সহজে যুক্ত করা যায়' }
        ],
        [
          { en: 'Client Handling Complexity', bn: 'ক্লায়েন্টে কোডের জটিলতা' },
          { en: 'Simple when successful; breaks on errors', bn: 'সফল হলে সহজ; কিন্তু এররে সমস্যা হয়' },
          { en: 'Balanced; simple checks on payload.userErrors', bn: 'ভারসাম্যপূর্ণ; userErrors দিয়ে সহজে ফর্ম হ্যান্ডেল হয়' },
          { en: 'Requires inline fragments (... on Success)', bn: 'ইনলাইন ফ্র্যাগমেন্ট দিয়ে টাইপ ন্যারোয়িং লাগে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Serial Mutations & Idempotency',
        bn: 'বাস্তব কোড সিমুলেশন: ধারাবাহিক মিউটেশন ও আইডেমপোটেন্সি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of GraphQL Serial Mutations & Idempotency in Node.js

class MutationEngine {
  private database: Array<{ id: string; title: string; content: string }> = [];
  private idempotencyStore = new Map<string, any>();
  public dbInsertCount = 0;

  async createPost(input: { title: string; content: string; idempotencyKey?: string }) {
    // 1. Check idempotency store for existing execution
    if (input.idempotencyKey && this.idempotencyStore.has(input.idempotencyKey)) {
      return {
        ...this.idempotencyStore.get(input.idempotencyKey),
        wasCached: true
      };
    }

    // 2. Business domain validation
    const userErrors: Array<{ field: string; message: string }> = [];
    if (!input.title || input.title.length < 5) {
      userErrors.push({ field: 'title', message: 'Title must be at least 5 characters' });
      return { post: null, userErrors, wasCached: false };
    }

    // 3. Database write execution
    this.dbInsertCount++;
    const post = { id: String(this.database.length + 1), title: input.title, content: input.content };
    this.database.push(post);

    const payload = {
      post,
      userErrors: [],
      wasCached: false
    };

    if (input.idempotencyKey) {
      this.idempotencyStore.set(input.idempotencyKey, payload);
    }

    return payload;
  }
}

async function run() {
  const engine = new MutationEngine();

  // 1. Invalid input: title too short
  const invalidRes = await engine.createPost({ title: 'Hi', content: 'Short test' });

  // 2. Valid input with idempotency key
  const validKey = 'idem_key_999';
  const firstCall = await engine.createPost({
    title: 'Mastering GraphQL Mutations',
    content: 'Full deep dive into serial writes',
    idempotencyKey: validKey
  });

  // 3. Retrying the same valid call with same idempotency key (simulating network retry)
  const retryCall = await engine.createPost({
    title: 'Mastering GraphQL Mutations',
    content: 'Full deep dive into serial writes',
    idempotencyKey: validKey
  });

  console.log('Invalid mutation errors count:', invalidRes.userErrors.length);
  // -> Invalid mutation errors count: 1
  console.log('Invalid mutation error field:', invalidRes.userErrors[0].field);
  // -> Invalid mutation error field: title
  console.log('First call wasCached:', firstCall.wasCached);
  // -> First call wasCached: false
  console.log('First call created post ID:', firstCall.post.id);
  // -> First call created post ID: 1
  console.log('Retry call wasCached:', retryCall.wasCached);
  // -> Retry call wasCached: true
  console.log('Retry call post ID identical:', retryCall.post.id === firstCall.post.id);
  // -> Retry call post ID identical: true
  console.log('Total database inserts executed:', engine.dbInsertCount);
  // -> Total database inserts executed: 1
}

run();`,
      caption: {
        en: 'Simulation: invalid input triggers 1 error on title; first call creates post 1; retry call is cached with 1 total database insert',
        bn: 'সিমুলেশন: ভুল ইনপুটে title ফিল্ডে ১ টি এরর হয়; প্রথম কল পোস্ট ১ তৈরি করে; রিট্রাই ক্যাশ থেকে আসায় মোট ডেটাবেজ ইনসার্ট হয় মাত্র ১ টি'
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
        en: 'Rule 1: Always encapsulate mutation arguments inside a single input object. Declaring input: UpdateEmailInput! ensures future optional parameters can be added without breaking existing client queries.',
        bn: 'নিয়ম ১: মিউটেশনের সমস্ত আর্গুমেন্ট একটিমাত্র ইনপুট অবজেক্টের ভেতরে রাখুন। input: UpdateEmailInput! ব্যবহার করলে ভবিষ্যতে পুরোনো ক্লায়েন্ট কোড না ভেঙেই নতুন অপশনাল প্যারামিটার যোগ করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never return bare scalars or raw booleans from root mutations. Always return a structured payload object containing the modified entity and userErrors to support client normalized cache updates.',
        bn: 'নিয়ম ২: মিউটেশন থেকে সাধারণ বুলিয়ান বা স্কেলার মান ফেরত দেবেন না। সর্বদা পরিবর্তিত এনটিটি এবং userErrors সম্বলিত পে-লোড অবজেক্ট দিন যাতে ক্লায়েন্টের ক্যাশ সুন্দরভাবে আপডেট হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Enforce idempotency keys on financial and order mutations. Generating unique idempotency tokens on the frontend ensures that network timeouts and repeated clicks cannot trigger duplicate charges.',
        bn: 'নিয়ম ৩: আর্থিক লেনদেন ও অর্ডার মিউটেশনে আইডেমপোটেন্সি কি বাধ্যতামূলক করুন। ফ্রন্টএন্ড থেকে ইউনিক টোকেন পাঠালে নেটওয়ার্ক ডিসকানেক্টের পর রিট্রাই করলেও একই পেমেন্ট দুবার কাটার ঝুঁকি থাকে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Keep mutation naming specific and verb-oriented. Avoid monolithic generic mutations like updateUser; prefer granular, intent-revealing actions like changeUserPassword or updateShippingAddress.',
        bn: 'নিয়ম ৪: মিউটেশনের নাম সুনির্দিষ্ট এবং ক্রিয়াপদ-ভিত্তিক রাখুন। updateUser-এর মতো বিশাল জেনেরিক মিউটেশন এড়িয়ে changeUserPassword বা updateShippingAddress-এর মতো সুনির্দিষ্ট অ্যাকশন ব্যবহার করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-chapel-ex1',
      kind: 'mcq',
      topic: 'Serial execution rule for root mutations',
      question: {
        en: 'How does the GraphQL execution engine process multiple root mutation fields declared in a single document?',
        bn: 'একটিমাত্র ডকুমেন্টে একাধিক রুট মিউটেশন ফিল্ড থাকলে GraphQL এক্সিকিউশন ইঞ্জিন সেগুলোকে কীভাবে পরিচালনা করে?'
      },
      options: [
        {
          en: 'It executes them strictly serially, completing each mutation entirely before starting the next to avoid race conditions',
          bn: 'রেস কন্ডিশন এড়াতে এটি কঠোরভাবে ধারাবাহিকভাবে চলে এবং একটি মিউটেশন পুরোপুরি শেষ হওয়ার পরই কেবল পরবর্তীটি শুরু করে'
        },
        {
          en: 'It executes all mutations concurrently in parallel to maximize database throughput',
          bn: 'ডেটাবেজের গতি বাড়াতে এটি সমস্ত মিউটেশন একযোগে সমান্তরালে বা প্যারালালে চালায়'
        },
        {
          en: 'It shuffles the mutation order randomly on every execution pass',
          bn: 'প্রতিবার চালানোর সময় এটি মিউটেশনগুলোর ক্রম এলোমেলোভাবে অদলবদল করে'
        },
        {
          en: 'It only executes the first mutation and silently ignores all subsequent root fields',
          bn: 'এটি কেবল প্রথম মিউটেশনটি চালায় এবং পেছনের সমস্ত ফিল্ড সম্পূর্ণ উপেক্ষা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mutations alter server state, so execution order matters greatly.',
        bn: 'মিউটেশন সার্ভারের ডেটা পরিবর্তন করে, তাই এদের চলার ক্রম অত্যন্ত গুরুত্বপূর্ণ।'
      },
      explanation: {
        en: 'The GraphQL specification strictly mandates serial execution for root mutation fields. This guarantees transactional predictability when sequential state mutations are combined.',
        bn: 'GraphQL স্পেসিফিকেশন রুট মিউটেশনের জন্য ধারাবাহিক এক্সিকিউশন বাধ্যতামূলক করেছে। এটি পরপর একাধিক স্টেট পরিবর্তনের ক্ষেত্রে ট্রানজ্যাকশনের নির্ভরযোগ্যতা নিশ্চিত করে।'
      }
    },
    {
      id: 'gql-chapel-ex2',
      kind: 'mcq',
      topic: 'Handling domain validation errors with userErrors',
      question: {
        en: 'Why do production GraphQL architectures return userErrors inside the mutation payload instead of throwing top-level errors?',
        bn: 'প্রোডাকশন GraphQL আর্কিটেকচারে টপ-লেভেল এরর না ছুড়ে কেন মিউটেশন পে-লোডের ভেতরে userErrors ফেরত দেওয়া হয়?'
      },
      options: [
        {
          en: 'Expected validation failures are normal business outcomes, not system crashes; modeling them in payload data allows safe inline UI rendering without polluting APM error alerts',
          bn: 'প্রত্যাশিত ভ্যালিডেশন ব্যর্থতা স্বাভাবিক ব্যবসায়িক ঘটনা, সিস্টেম ক্র্যাশ নয়; পে-লোডে ডেটা হিসেবে পাঠালে ইউআই সহজেই তা দেখাতে পারে এবং মনিটরিং টুলে ভুল অ্যালার্ট জমে না'
        },
        {
          en: 'Top-level GraphQL errors cause the client operating system to reboot',
          bn: 'টপ-লেভেল এরর ঘটলে ক্লায়েন্টের অপারেটিং সিস্টেম রিবুট হয়ে যায়'
        },
        {
          en: 'GraphQL SDL does not support error logging under any circumstance',
          bn: 'GraphQL SDL কোনো অবস্থাতেই এরর লগিং সমর্থন করে না'
        },
        {
          en: 'Because userErrors can only be parsed by artificial intelligence models',
          bn: 'কারণ userErrors কেবল কৃত্রিম বুদ্ধিমত্তা মডেল দিয়েই পার্স করা সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Distinguish between expected form mistakes (e.g. invalid password) and system failures (DB down).',
        bn: 'প্রত্যাশিত ফর্মের ভুল (যেমন দুর্বল পাসওয়ার্ড) এবং সিস্টেম ব্যর্থতার (যেমন ডিবি ডাউন) মধ্যে পার্থক্য করুন।'
      },
      explanation: {
        en: 'Expected domain validation failures are part of the application contract. Returning them in data allows forms to highlight invalid fields without breaking the GraphQL response.',
        bn: 'প্রত্যাশিত ভ্যালিডেশন ব্যর্থতা অ্যাপের চুক্তির স্বাভাবিক অংশ। ডেটা আকারে পাঠালে ক্লায়েন্ট ফর্ম সহজে ভুল ফিল্ড চিহ্নিত করতে পারে কোনো ক্র্যাশ ছাড়াই।'
      }
    },
    {
      id: 'gql-chapel-ex3',
      kind: 'mcq',
      topic: 'Role of idempotency keys in mutations',
      question: {
        en: 'What critical problem does an idempotency key (or clientMutationId) solve for GraphQL mutations?',
        bn: 'একটি আইডেমপোটেন্সি কি (বা clientMutationId) GraphQL মিউটেশনের কোন মারাত্মক সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It prevents duplicate side effects (such as double-charging a credit card) when a client retries a request after an intermittent network timeout',
          bn: 'নেটওয়ার্ক বিচ্ছিন্নতার পর ক্লায়েন্ট পুনরায় রিকোয়েস্ট পাঠালে ডুপ্লিকেট সাইড-ইফেক্ট (যেমন একই কার্ডে দুবার চার্জ কাটা) হওয়া প্রতিরোধ করে'
        },
        {
          en: 'It compresses the mutation payload to 1 byte on the network wire',
          bn: 'এটি নেটওয়ার্কে মিউটেশনের আকার কমিয়ে মাত্র ১ বাইট করে ফেলে'
        },
        {
          en: 'It automatically translates English mutations into Bengali in real time',
          bn: 'এটি রিয়েল-টাইমে ইংরেজি মিউটেশনকে স্বয়ংক্রিয়ভাবে বাংলায় অনুবাদ করে'
        },
        {
          en: 'It deletes all user passwords from the server memory heap',
          bn: 'এটি সার্ভারের মেমোরি হিপ থেকে সমস্ত পাসওয়ার্ড মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when a cellular connection drops right after the server writes to the DB.',
        bn: 'সার্ভারে লেখার পরপরই মোবাইল ইন্টারনেট চলে গেলে কী ঘটে তা চিন্তা করুন।'
      },
      explanation: {
        en: 'If a network disconnects before the client receives the success response, retrying with the same idempotency key instructs the server to return the cached result instead of re-executing.',
        bn: 'সাফল্যের রেসপন্স পৌঁছানোর আগেই কানেকশন কেটে গেলে একই আইডেমপোটেন্সি কি দিয়ে রিট্রাই করলে সার্ভার পুনরায় কাজ না চালিয়ে আগের ক্যাশ ফলাফল ফেরত দেয়।'
      }
    },
    {
      id: 'gql-chapel-ex4',
      kind: 'mcq',
      topic: 'The Mutation Payload Pattern advantages',
      question: {
        en: 'Why is the Mutation Payload Pattern (e.g. type CreatePostPayload { post: Post userErrors: [UserError!]! }) preferred over returning Post directly?',
        bn: 'সরাসরি Post ফেরত দেওয়ার চেয়ে Mutation Payload Pattern (যেমন CreatePostPayload) কেন অধিক পছন্দনীয়?'
      },
      options: [
        {
          en: 'It allows adding metadata, domain errors, and client IDs to the mutation response in the future without breaking existing schema contracts',
          bn: 'এটি বিদ্যমান স্কিমা না ভেঙেই ভবিষ্যতে মিউটেশন রেসপন্সে মেটাডেটা, ব্যবসায়িক এরর ও ক্লায়েন্ট আইডি যোগ করার চমৎকার সুযোগ দেয়'
        },
        {
          en: 'It prevents the backend from executing any SQL database queries',
          bn: 'এটি ব্যাকএন্ডকে কোনো এসকিউএল ডেটাবেজ কোয়েরি চালানো থেকে বিরত রাখে'
        },
        {
          en: 'It reduces the total number of CPU instructions executed by the client',
          bn: 'এটি ক্লায়েন্টের সিপিইউ নির্দেশনার মোট সংখ্যা কমিয়ে দেয়'
        },
        {
          en: 'It is strictly enforced by the W3C HTML5 browser specification',
          bn: 'এটি W3C HTML5 ব্রাউজার স্পেসিফিকেশন দ্বারা কঠোরভাবে বাধ্যতামূলক করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returning an object wrapper provides extensibility for future schema evolution.',
        bn: 'একটি অবজেক্ট র‍্যাপার ফেরত দিলে ভবিষ্যতে নতুন ফিল্ড যোগ করার দারুণ নমনীয়তা পাওয়া যায়।'
      },
      explanation: {
        en: 'Returning a dedicated payload object ensures your schema is future-proof. You can add new diagnostic fields or metadata without altering the root return type.',
        bn: 'ডেডিকেটেড পে-লোড অবজেক্ট স্কিমাকে দীর্ঘস্থায়ী করে। রুট টাইপ পরিবর্তন না করেই ভবিষ্যতে প্রয়োজনীয় অতিরিক্ত ফিল্ড বা মেটাডেটা যুক্ত করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-mutation-chapel-quiz',
    title: {
      en: 'GraphQL Mutations & Atomic Writes Quiz',
      bn: 'GraphQL মিউটেশন ও পারমাণবিক রাইট কুইজ'
    },
    questions: [
      {
        id: 'q-mutation-naming-conventions',
        kind: 'mcq',
        topic: 'Specific intent-revealing mutation design',
        question: {
          en: 'Why do GraphQL design guidelines discourage monolithic generic mutations like updateUser in favor of specific mutations like updateEmailAddress?',
          bn: 'GraphQL নির্দেশিকায় updateUser-এর মতো জেনেরিক মিউটেশনের বদলে updateEmailAddress-এর মতো সুনির্দিষ্ট মিউটেশন ব্যবহার করতে কেন উৎসাহিত করা হয়?'
        },
        options: [
          {
            en: 'Specific verb-based mutations clearly convey caller intent, simplify authorization and validation rules, and prevent unintended side effects on unrelated fields',
            bn: 'সুনির্দিষ্ট ক্রিয়াপদ-ভিত্তিক মিউটেশন স্পষ্ট উদ্দেশ্য প্রকাশ করে, নিরাপত্তা ও ভ্যালিডেশন সহজ করে এবং অপ্রাসঙ্গিক ফিল্ডে অনাকাঙ্ক্ষিত পরিবর্তন প্রতিরোধ করে'
          },
          {
            en: 'GraphQL servers reject any mutation name longer than 10 characters',
            bn: '১০ অক্ষরের বেশি দীর্ঘ যেকোনো মিউটেশন নাম GraphQL সার্ভার বাতিল করে দেয়'
          },
          {
            en: 'Because monolithic mutations cannot be executed inside web browsers',
            bn: 'কারণ জেনেরিক মিউটেশনগুলো কোনো ওয়েব ব্রাউজারে চালানো যায় না'
          },
          {
            en: 'To make the schema documentation completely invisible to frontend developers',
            bn: 'যাতে স্কিমা ডকুমেন্টেশন ফ্রন্টএন্ড ডেভেলপারদের কাছে পুরোপুরি অদৃশ্য থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider auditing, security permissions, and validation logic on specific user actions.',
          bn: 'সুনির্দিষ্ট ইউজার অ্যাকশনের অডিটিং, নিরাপত্তা পারমিশন ও ভ্যালিডেশনের কথা ভাবুন।'
        },
        explanation: {
          en: 'A monolithic updateUser mutation with 20 optional fields makes validation complex and auditing obscure. Specific mutations isolate business intent cleanly.',
          bn: '২০টি অপশনাল ফিল্ড সম্বলিত updateUser মিউটেশন ভ্যালিডেশন ও অডিটিং জটিল করে ফেলে। সুনির্দিষ্ট মিউটেশন ব্যবসায়িক উদ্দেশ্যকে স্পষ্টভাবে পৃথক রাখে।'
        }
      },
      {
        id: 'q-client-mutation-id-echo',
        kind: 'mcq',
        topic: 'Echoing clientMutationId in responses',
        question: {
          en: 'Why do relay-compliant GraphQL mutations accept and return clientMutationId?',
          bn: 'Relay-অনুমোদিত GraphQL মিউটেশন কেন clientMutationId গ্রহণ করে এবং রেসপন্সে হুবহু তা ফেরত পাঠায়?'
        },
        options: [
          {
            en: 'It enables the frontend client to correlate asynchronous responses with the original request and verify that the intended operation completed',
            bn: 'এটি ফ্রন্টএন্ড ক্লায়েন্টকে অ্যাসিনক্রোনাস রেসপন্সের সাথে মূল রিকোয়েস্ট মেলানোর এবং নির্দিষ্ট কাজটি সম্পন্ন হয়েছে কিনা তা যাচাই করার সুবিধা দেয়'
          },
          {
            en: 'It encrypts the GraphQL response using AES-256 before network transmission',
            bn: 'এটি নেটওয়ার্কে পাঠানোর আগে রেসপন্সকে এইএস-২৫৬ দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It forces the client to download a new version of the React library',
            bn: 'এটি ক্লায়েন্টকে রিঅ্যাক্ট লাইব্রেরির নতুন সংস্করণ ডাউনলোড করতে বাধ্য করে'
          },
          {
            en: 'It allows the server to change the user IP address dynamically',
            bn: 'এটি সার্ভারকে ব্যবহারকারীর আইপি ঠিকানা ডাইনামিকভাবে পরিবর্তন করার সুযোগ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about matching client-side optimistic UI state with completed server responses.',
          bn: 'ক্লায়েন্টের অপটিমিস্টিক ইউআই স্টেটের সাথে সার্ভার রেসপন্স মেলানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Echoing clientMutationId allows client frameworks to identify precisely which in-flight mutation resolved, making optimistic updates and cache reconciliation seamless.',
          bn: 'clientMutationId ফেরত পাঠানোর মাধ্যমে ক্লায়েন্ট ফ্রেমওয়ার্ক নিশ্চিতভাবে জানতে পারে কোন মিউটেশনটি সফল হয়েছে, যা ক্যাশ আপডেটে সহায়তা করে।'
        }
      },
      {
        id: 'q-optimistic-mutation-rollback',
        kind: 'mcq',
        topic: 'Optimistic UI updates and mutation failure handling',
        question: {
          en: 'What architectural step must a client cache take if an optimistic UI update fails during mutation execution?',
          bn: 'মিউটেশন চলাকালীন অপটিমিস্টিক ইউআই আপডেট ব্যর্থ হলে ক্লায়েন্ট ক্যাশকে কোন কাঠামোগত পদক্ষেপ নিতে হয়?'
        },
        options: [
          {
            en: 'Roll back the optimistic changes to the previous snapshot state and display the returned userErrors to the user',
            bn: 'অপটিমিস্টিক পরিবর্তনগুলো পূর্ববর্তী স্ন্যাপশট অবস্থায় রোলব্যাক করা এবং প্রাপ্ত userErrors ব্যবহারকারীর সামনে প্রদর্শন করা'
          },
          {
            en: 'Delete all client cookies and refresh the entire web page immediately',
            bn: 'সমস্ত ক্লায়েন্ট কুকিজ মুছে সাথে সাথে পুরো ওয়েবপেজ রিলোড করা'
          },
          {
            en: 'Force the database server to shut down to prevent data corruption',
            bn: 'ডেটা নষ্ট হওয়া ঠেকাতে ডেটাবেজ সার্ভার জোরপূর্বক বন্ধ করে দেওয়া'
          },
          {
            en: 'Silently ignore the failure and keep the incorrect optimistic data on screen',
            bn: 'ব্যর্থতা পুরোপুরি চেপে গিয়ে ভুল ডেটা স্ক্রিনে রেখে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Optimistic data is a temporary loan that must be repaid or rolled back on failure.',
          bn: 'অপটিমিস্টিক ডেটা হলো একটি সাময়িক প্রতিশ্রুতি যা ব্যর্থ হলে ফিরিয়ে নিতে হয়।'
        },
        explanation: {
          en: 'Client caches like Apollo Client take a snapshot before applying optimistic data. If the server returns an error, the client rolls back to the snapshot and surfaces the error.',
          bn: 'Apollo Client-এর মতো ক্লায়েন্ট ক্যাশ অপটিমিস্টিক ডেটা দেখানোর আগে একটি স্ন্যাপশট রাখে। সার্ভার এরর দিলে ক্যাশ আগের অবস্থায় ফিরে যায় এবং এরর মেসেজ দেখায়।'
        }
      },
      {
        id: 'q-transaction-boundaries-resolvers',
        kind: 'mcq',
        topic: 'Database transaction boundaries in mutations',
        question: {
          en: 'Where should database transaction boundaries (BEGIN, COMMIT, ROLLBACK) be managed in a GraphQL mutation?',
          bn: 'একটি GraphQL মিউটেশনে ডেটাবেজ ট্রানজ্যাকশন বাউন্ডারি (BEGIN, COMMIT, ROLLBACK) কোথায় পরিচালনা করা উচিত?'
        },
        options: [
          {
            en: 'Inside the domain service layer executed by the root mutation resolver, ensuring all side effects commit or roll back atomically',
            bn: 'রুট মিউটেশন রিসলভারের আওতাধীন ডোমেন সার্ভিস স্তরে, যাতে সমস্ত পরিবর্তন পারমাণবিকভাবে সেভ হয় অথবা রোলব্যাক হয়'
          },
          {
            en: 'Inside individual child field resolvers across the query tree',
            bn: 'কোয়েরি ট্রির প্রতিটি পৃথক চাইল্ড ফিল্ড রিসলভারের ভেতরে'
          },
          {
            en: 'In the client web browser before the HTTP request is dispatched',
            bn: 'এইচটিটিপি রিকোয়েস্ট পাঠানোর আগেই ক্লায়েন্ট ওয়েব ব্রাউজারের ভেতরে'
          },
          {
            en: 'Inside the HTTP reverse proxy gateway configuration file',
            bn: 'এইচটিটিপি রিভার্স প্রক্সি গেটওয়ের কনফিগারেশন ফাইলের ভেতরে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mutations coordinate multiple DB writes that must succeed or fail together.',
          bn: 'মিউটেশন একাধিক ডেটাবেজ পরিবর্তন পরিচালনা করে যা একসাথে সফল বা ব্যর্থ হতে হয়।'
        },
        explanation: {
          en: 'Transaction boundaries must reside in the root mutation service. Managing transactions in child field resolvers risks partial writes and uncoordinated rollbacks.',
          bn: 'ট্রানজ্যাকশন সর্বদা রুট মিউটেশনের সার্ভিস স্তরে থাকতে হয়। চাইল্ড ফিল্ডে ট্রানজ্যাকশন পরিচালনা করলে ডেটাবেজে আংশিক ও অসঙ্গতিপূর্ণ ডেটা সেভ হওয়ার ঝুঁকি থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-cache-gallery',
    title: {
      en: 'Client-Side Caching — Normalized Caches, Cache Invalidation & Directives',
      bn: 'ক্লায়েন্ট-সাইড ক্যাশিং — নরমালাইজড ক্যাশ, ক্যাশ ইনভ্যালিডেশন ও ডিরেক্টিভস'
    }
  }
};
