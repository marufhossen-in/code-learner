import type { Lesson } from '../../../lib/types';

export const evolutionLedgerLesson: Lesson = {
  slug: 'the-evolution-ledger',
  tech: 'graphql',
  title: {
    en: 'Schema Evolution & Deprecation — Breaking Changes, Field Auditing & Versionless APIs',
    bn: 'স্কিমা বিবর্তন ও অবচয় — ব্রেকিং চেঞ্জ, ফিল্ড অডিটিং ও সংস্করণহীন এপিআই'
  },
  summary: {
    en: 'Unlike REST architectures that rely on URL-based versioning like /v1/ and /v2/, GraphQL APIs are designed to evolve continuously without breaking existing mobile and web clients. Safe schema evolution is governed by the additive law: adding new fields, types, or optional arguments is always non-breaking, whereas removing fields, narrowing types, or making arguments mandatory breaks active client operations. By leveraging the built-in @deprecated directive with descriptive deprecation reasons, backend teams formally announce impending changes. Schema registries and observability tools audit live production traffic to verify when queries stop requesting sunsetted fields, enabling completely risk-free field retirements.',
    bn: 'চিরাচরিত রেস্ট এপিআই যেখানে /v1/ বা /v2/-এর মতো ইউআরএল ভিত্তিক সংস্করণের ওপর নির্ভর করে, সেখানে GraphQL এপিআই ডিজাইন করা হয়েছে কোনো ক্লায়েন্ট না ভেঙে নিরবচ্ছিন্নভাবে বিবর্তিত হওয়ার জন্য। নিরাপদ স্কিমা বিবর্তন পরিপূরক নীতির ওপর প্রতিষ্ঠিত: নতুন ফিল্ড, টাইপ বা অপশনাল আর্গুমেন্ট যোগ করা সম্পূর্ণ নিরাপদ, কিন্তু ফিল্ড মুছে ফেলা, টাইপ পরিবর্তন করা বা আর্গুমেন্ট বাধ্যতামূলক করা ক্লায়েন্ট কোড ভেঙে ফেলে। সুনির্দিষ্ট কারণসহ @deprecated নির্দেশক ব্যবহারের মাধ্যমে ব্যাকএন্ড দলগুলো আসন্ন পরিবর্তনের ঘোষণা দেয়। স্কিমা রেজিস্ট্রি ও মনিটরিং টুল প্রোডাকশন ট্রাফিকের ওপর নজর রাখে এবং অপ্রচলিত ফিল্ডে রিকোয়েস্ট শূন্যে নেমে এলে সম্পূর্ণ ঝুঁকিমুক্তভাবে তা স্কিমা থেকে সরিয়ে নেওয়া হয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Versionless Continuous API Paradigm',
        bn: 'মূল ধারণা: সংস্করণহীন অবিচ্ছিন্ন এপিআই প্যারাডাইম'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you maintain web and mobile application programming interfaces (APIs) in production, evolving your backend data contracts without disrupting installed mobile client applications is a major engineering challenge. Unlike traditional Representational State Transfer (REST) architectures which force breaking transitions across explicit version endpoints, GraphQL is designed as an incrementally evolvable, versionless API. By adhering to additive evolution rules, marking sunsetting fields with the @deprecated directive, and auditing field usage traffic, you can continuously release updates without breaking existing clients.',
        bn: 'যখন আপনি প্রোডাকশনে ওয়েব ও মোবাইল এপিআই পরিচালনা করেন, তখন ব্যবহারকারীদের ইনস্টল করা মোবাইল অ্যাপ না ভেঙে ব্যাকএন্ড ডেটা মডেলে পরিবর্তন আনা একটি বিরাট ইঞ্জিনিয়ারিং চ্যালেঞ্জ। চিরাচরিত রেস্ট এপিআই যেখানে নির্দিষ্ট সংস্করণ নম্বরের মাধ্যমে বাধ্যতামূলক ব্রেকিং চেঞ্জ ঘটায়, সেখানে GraphQL তৈরি করা হয়েছে একটি নিরবচ্ছিন্ন বিবর্তনযোগ্য ও সংস্করণহীন এপিআই হিসেবে। পরিপূরক বিবর্তন নীতি মেনে চলে, অপ্রয়োজনীয় ফিল্ডে @deprecated নির্দেশক ব্যবহার করে এবং ট্রাফিকের হিসাব রেখে আপনি পুরোনো ক্লায়েন্ট অ্যাপ অক্ষুণ্ণ রেখেই প্রতিনিয়ত নতুন ফিচার উন্মুক্ত করতে পারেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Versionless API',
          def: {
            en: 'The architectural design philosophy where a single continuous GraphQL schema expands over time without incrementing URL version numbers',
            bn: 'স্থাপত্য দর্শন যেখানে ইউআরএল সংস্করণ নম্বর না বাড়িয়েই একটিমাত্র অবিচ্ছিন্ন GraphQL স্কিমা সময়ের সাথে সাথে পরিবর্ধিত হয়'
          }
        },
        {
          term: 'Additive Schema Evolution',
          def: {
            en: 'The principle that only additive alterations—introducing new fields, types, or optional arguments—are guaranteed to be safe and non-breaking',
            bn: 'এমন নীতি যা নির্দেশ করে যে কেবল পরিপূরক পরিবর্তন—যেমন নতুন ফিল্ড, টাইপ বা অপশনাল আর্গুমেন্ট যোগ করা—নিরাপদ এবং ব্রেকিং-মুক্ত'
          }
        },
        {
          term: '@deprecated Directive',
          def: {
            en: 'A built-in GraphQL schema directive marking obsolete fields or enum values with a machine-readable explanation and successor recommendation',
            bn: 'একটি বিল্ট-ইন GraphQL নির্দেশক যা পুরোনো ফিল্ড বা এনাম মানের ওপর মেশিন-পাঠযোগ্য কারণ ও বিকল্প ফিল্ডের পরামর্শ নির্দেশ করে'
          }
        },
        {
          term: 'Schema Registry Check',
          def: {
            en: 'Automated CI/CD validation comparing schema changes against actual recorded client operations to intercept breaking updates before deployment',
            bn: 'স্বয়ংক্রিয় সিআই ভ্যালিডেশন যা ডিপ্লয়ের আগেই ক্লায়েন্ট কোয়েরির সাথে স্কিমার পরিবর্তন তুলনা করে কোনো ব্রেকিং চেঞ্জ ধরা পড়লে আটকে দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'additive-vs-breaking',
      text: {
        en: 'The Additive Rule: Safe vs Breaking Schema Changes',
        bn: 'পরিপূরক নিয়ম: নিরাপদ বনাম ক্ষতিকর স্কিমা পরিবর্তন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because GraphQL clients explicitly declare the exact fields they require in their selection sets, the backend is free to introduce new types and fields without affecting existing operations. An older mobile application compiled two years ago ignores newly introduced schema fields and continues functioning properly.',
        bn: 'যেহেতু GraphQL ক্লায়েন্টরা তাদের সিলেকশন সেটে ঠিক কোন কোন ফিল্ড প্রয়োজন তা স্পষ্টভাবে উল্লেখ করে, তাই ব্যাকএন্ড দল পুরোনো ক্লায়েন্টকে প্রভাবিত না করেই নতুন নতুন ফিল্ড যুক্ত করতে পারে। দুই বছর আগে তৈরি একটি মোবাইল অ্যাপও নতুন ফিল্ডগুলো এড়িয়ে সুন্দরভাবে কাজ চালিয়ে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Conversely, breaking changes break active client queries immediately. Removing a field, renaming a field, changing a scalar type, making an optional argument mandatory, or removing an enum value invalidates the query document AST. If an older mobile client requests a removed field, the GraphQL validator rejects the entire operation.',
        bn: 'বিপরীতভাবে ক্ষতিকর বা ব্রেকিং চেঞ্জ পুরোনো ক্লায়েন্টকে সাথে সাথে অচল করে দেয়। কোনো ফিল্ড মুছে ফেলা, নাম পরিবর্তন করা, স্কেলার টাইপ বদলে ফেলা, কোনো অপশনাল আর্গুমেন্টকে আবশ্যক করা অথবা এনামের মান সরিয়ে দিলে কোয়েরি ভ্যালিডেশন ব্যর্থ হয়। পুরোনো মোবাইল অ্যাপ মুছে ফেলা ফিল্ডটি চাইলে সার্ভার পুরো রিকোয়েস্টই প্রত্যাখ্যান করে।'
      }
    },
    {
      type: 'heading',
      id: 'deprecation-lifecycle',
      text: {
        en: 'The Five-Stage Deprecation Lifecycle',
        bn: 'পাঁচ ধাপের ফিল্ড অবসর চক্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Safely sunsetting a GraphQL field follows a disciplined five-stage procedure. In the first stage, the new replacement attribute is introduced alongside the legacy entry. In the second stage, the older property is marked with @deprecated(reason: "Use fullName instead"). Schema exploration tools like GraphiQL visually strike through the obsolete item and surface the migration note.',
        bn: 'একটি ফিল্ড নিরাপদে সরিয়ে নেওয়ার জন্য পাঁচ ধাপের সুশৃঙ্খল পদ্ধতি অনুসরণ করা হয়। প্রথম ধাপে পুরোনো ফিল্ডের পাশাপাশি নতুন আধুনিক ফিল্ডটি যোগ করা হয়। দ্বিতীয় ধাপে পুরোনো ফিল্ডের গায়ে @deprecated(reason: "Use fullName instead") বসিয়ে দেওয়া হয়। গ্রাফাইকিউএল-এর মতো এক্সপ্লোরারে ডেভেলপাররা সাথে সাথে এই নোটিশ দেখতে পান।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the third stage, telemetry tools track real-world query usage to measure which client versions still request the deprecated field. In the fourth stage, engineering coordinates with client teams to migrate active operations to the modern field. Once the telemetry reports zero requests, the fifth stage cleanly deletes the field from the schema file.',
        bn: 'তৃতীয় ধাপে টেলিমেট্রি টুলের সাহায্যে মাপা হয় কোন কোন ক্লায়েন্ট অ্যাপ এখনো পুরোনো ফিল্ডে রিকোয়েস্ট পাঠাচ্ছে। চতুর্থ ধাপে ক্লায়েন্ট টিমদের সাথে সমন্বয় করে নতুন ফিল্ডে মাইগ্রেশন সম্পন্ন করা হয়। অবশেষে যখন ট্রাফিকের সংখ্যা শূন্যে নেমে আসে, তখন পঞ্চম ধাপে নিরাপদে ফিল্ডটি স্কিমা থেকে স্থায়ীভাবে মুছে দেওয়া হয়।'
      }
    },
    {
      type: 'heading',
      id: 'incremental-delivery',
      text: {
        en: 'Incremental Delivery: @defer and @stream Directives',
        bn: 'ইনক্রিমেন্টাল ডেলিভারি: @defer ও @stream নির্দেশক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, GraphQL operations returned a monolithic response: the slowest resolver in the query tree determined the response time for the entire screen. Modern GraphQL specifications introduce incremental delivery via the @defer and @stream directives.',
        bn: 'ঐতিহাসিকভাবে GraphQL কোয়েরি একটি একক প্যাকেটে পুরো রেসপন্স ফেরত দিত: যার ফলে কোয়েরির সবচেয়ে ধীরগতির রিসলভারটির কারণে পুরো স্ক্রিন লোড হতে দেরি হতো। আধুনিক GraphQL স্পেসিফিকেশন @defer এবং @stream নির্দেশকের মাধ্যমে ধাপে ধাপে ডেটা পাঠানোর চমৎকার সুবিধা নিয়ে এসেছে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'With @defer, a client flags heavy, slow fragments like product recommendations or user reviews. The server immediately returns the core product details in the initial HTTP chunk, and then streams the deferred fragments as multipart chunks over the same connection as they resolve.',
        bn: '@defer নির্দেশক ব্যবহার করে ক্লায়েন্ট ভারী বা ধীরগতির ফিল্ডগুলোকে (যেমন রিভিউ বা রিকমেন্ডেশন) চিহ্নিত করতে পারে। সার্ভার তখন প্রাথমিক মূল পণ্যের তথ্য দ্রুত ক্লায়েন্টকে পাঠিয়ে দেয় এবং বাকি ভারী ফিল্ডগুলো সম্পন্ন হওয়ামাত্র একই এইচটিটিপি সংযোগে দ্বিতীয় ধাপে পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: API Evolution Methodologies',
        bn: 'কাঠামোগত তুলনা: এপিআই বিবর্তন পদ্ধতি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Evolution Strategy', bn: 'বিবর্তন কৌশল' },
        { en: 'Client Impact on Release', bn: 'ক্লায়েন্টের ওপর প্রভাব' },
        { en: 'Server Maintenance Overhead', bn: 'সার্ভারে রক্ষণাবেক্ষণের খরচ' },
        { en: 'Field Usage Observability', bn: 'ফিল্ড ব্যবহারের পর্যবেক্ষণ' }
      ],
      rows: [
        [
          { en: 'Additive Evolution with @deprecated', bn: 'পরিপূরক বিবর্তন ও @deprecated' },
          { en: 'Zero disruption; older mobile clients operate indefinitely', bn: 'শূন্য বিঘ্ন; পুরোনো ক্লায়েন্ট নিরবচ্ছিন্নভাবে চলতে পারে' },
          { en: 'Single codebase; clean field retirement when traffic is zero', bn: 'একক কোডবেস; ট্রাফিক শূন্য হলে সহজে কোড মুছে ফেলা যায়' },
          { en: 'Granular; logs track exact field-level usage per client app', bn: 'নিখুঁত; ক্লায়েন্ট প্রতি ফিল্ড ব্যবহারের নিখুঁত লগ থাকে' }
        ],
        [
          { en: 'URL Versioning (/v1, /v2)', bn: 'ইউআরএল সংস্করণ (/v1, /v2)' },
          { en: 'High; forces total migration to new endpoints under deadlines', bn: 'উচ্চ; নির্দিষ্ট সময়ের মধ্যে ক্লায়েন্টকে নতুন এপিআইতে যেতে হয়' },
          { en: 'Heavy; multiple duplicate backend services running in parallel', bn: 'ভারী; সমান্তরালে একাধিক ডুপ্লিকেট ব্যাকএন্ড চালাতে হয়' },
          { en: 'Coarse; endpoints measured in bulk without field visibility', bn: 'স্থূল; পুরো এন্ডপয়েন্ট দেখা যায় কিন্তু ফিল্ড আলাদা বোঝা যায় না' }
        ],
        [
          { en: 'Direct Breaking In-Place Changes', bn: 'সরাসরি ব্রেকিং ইন-প্লেস পরিবর্তন' },
          { en: 'Catastrophic; immediate crash loops on older installed apps', bn: 'মারাত্মক; ইনস্টল করা পুরোনো মোবাইল অ্যাপে সাথে সাথে ক্র্যাশ ঘটে' },
          { en: 'Causes emergency hotfixes and urgent operational rollbacks', bn: 'জরুরি ভিত্তিতে হটফিক্স ও সিস্টেম রোলব্যাক করতে বাধ্য করে' },
          { en: 'Discovered only after severe production crash spikes', bn: 'প্রোডাকশনে বিশাল ক্র্যাশের পরেই কেবল ত্রুটি নজরে আসে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Schema Evolution Auditor',
        bn: 'বাস্তব কোড সিমুলেশন: স্কিমা বিবর্তন অডিটর'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of GraphQL Schema Evolution & Breaking Change Audit in Node.js

class SchemaAuditor {
  auditEvolution(oldSchema: any, newSchema: any) {
    const breaking: string[] = [];
    const safe: string[] = [];

    // Check for removed or modified types and fields
    for (const [typeName, oldType] of Object.entries<any>(oldSchema)) {
      if (!newSchema[typeName]) {
        breaking.push("Type '" + typeName + "' was removed");
        continue;
      }

      const newType = newSchema[typeName];

      // Check fields for removals or type mutations
      for (const [fieldName, oldFieldDef] of Object.entries<any>(oldType.fields)) {
        if (!newType.fields[fieldName]) {
          breaking.push("Field '" + typeName + "." + fieldName + "' was removed");
        } else {
          const newFieldDef = newType.fields[fieldName];
          if (oldFieldDef.type !== newFieldDef.type) {
            breaking.push(
              "Field '" + typeName + "." + fieldName + "' changed type from '" + oldFieldDef.type + "' to '" + newFieldDef.type + "'"
            );
          }
          if (newFieldDef.deprecated && !oldFieldDef.deprecated) {
            safe.push("Field '" + typeName + "." + fieldName + "' marked deprecated: \\"" + newFieldDef.deprecated + "\\"");
          }
        }
      }

      // Check newly added fields
      for (const [fieldName, newFieldDef] of Object.entries<any>(newType.fields)) {
        if (!oldType.fields[fieldName]) {
          safe.push("Field '" + typeName + "." + fieldName + "' added as new additive field");
        }
      }
    }

    return {
      breakingCount: breaking.length,
      safeCount: safe.length,
      breaking,
      safe
    };
  }
}

const auditor = new SchemaAuditor();

// Schema V1
const schemaV1 = {
  User: {
    fields: {
      id: { type: 'ID!' },
      name: { type: 'String' },
      email: { type: 'String!' }
    }
  }
};

// Schema V2: Evolved
// - 'name' is removed (breaking!)
// - 'email' type changed from 'String!' to 'Int' (breaking!)
// - 'fullName' added (safe additive!)
// - 'id' marked deprecated (safe!)
const schemaV2 = {
  User: {
    fields: {
      id: { type: 'ID!', deprecated: 'Migrating to global UUID' },
      fullName: { type: 'String' },
      email: { type: 'Int' }
    }
  }
};

const report = auditor.auditEvolution(schemaV1, schemaV2);

console.log('Total breaking changes detected:', report.breakingCount);
// -> Total breaking changes detected: 2
console.log('Total safe additive changes detected:', report.safeCount);
// -> Total safe additive changes detected: 2
console.log('First breaking reason:', report.breaking[0]);
// -> First breaking reason: Field 'User.name' was removed
console.log('Second breaking reason:', report.breaking[1]);
// -> Second breaking reason: Field 'User.email' changed type from 'String!' to 'Int'
console.log('First safe change:', report.safe[0]);
// -> First safe change: Field 'User.id' marked deprecated: "Migrating to global UUID"`,
      caption: {
        en: 'Simulation: auditor flags 2 breaking changes (removed name, type mutation on email) and 2 safe additive changes',
        bn: 'সিমুলেশন: অডিটর ২ টি ক্ষতিকর পরিবর্তন (নেম অপসারণ, ইমেইলের টাইপ বদল) ও ২ টি নিরাপদ পরিপূরক পরিবর্তন শনাক্ত করে'
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
        en: 'Rule 1: Always explain the migration path in @deprecated reasons. Never pass empty deprecation strings; provide the successor field name so client developers know exactly how to update their code.',
        bn: 'নিয়ম ১: @deprecated নির্দেশকে সর্বদা সুনির্দিষ্ট কারণ ও বিকল্প ফিল্ডের নাম লিখে দিন। খালি স্ট্রিং না দিয়ে বিকল্পের পথ দেখালে ক্লায়েন্ট ডেভেলপাররা সহজেই কোড আপডেট করে নিতে পারেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Integrate schema diffing tools like GraphQL Inspector into CI/CD. Automatically comparing schema pull requests against registered client queries blocks breaking changes before they reach staging.',
        bn: 'নিয়ম ২: সিআই/সিডি পাইপলাইনে GraphQL Inspector-এর মতো টুল যুক্ত করুন। পুল রিকোয়েস্টের স্কিমা পরিবর্তন ক্লায়েন্ট কোয়েরির সাথে তুলনা করলে কোনো ব্রেকিং চেঞ্জ থাকলে তা আগেই আটকে দেওয়া যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Never delete a deprecated field until production traffic reaches absolute zero. Monitor schema usage metrics across mobile app versions to verify that no legacy clients remain in the wild.',
        bn: 'নিয়ম ৩: প্রোডাকশনে ব্যবহার পুরোপুরি শূন্যে না পৌঁছানো পর্যন্ত কোনো অবচিত ফিল্ড মুছবেন না। বিভিন্ন মোবাইল অ্যাপ ভার্সনের ট্রাফিকের ওপর নজর রেখে নিশ্চিত হোন যে কোনো পুরোনো ক্লায়েন্ট সক্রিয় নেই।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Design clients as tolerant readers. Frontend code should never crash on unexpected enum values or unknown incoming fields, allowing backend schemas to grow safely over time.',
        bn: 'নিয়ম ৪: ক্লায়েন্ট অ্যাপকে সহনশীল পাঠক হিসেবে তৈরি করুন। ফ্রন্টএন্ড কোড যেন নতুন এনাম মান বা অতিরিক্ত ফিল্ড দেখে ক্র্যাশ না করে, যাতে ব্যাকএন্ড স্কিমা ভবিষ্যতে নিরাপদে পরিবর্ধন করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'gql-evo-ex1',
      kind: 'mcq',
      topic: 'The Additive Law in GraphQL schema evolution',
      question: {
        en: 'Why is adding a new field to an existing GraphQL object type considered completely safe and non-breaking?',
        bn: 'বিদ্যমান GraphQL অবজেক্ট টাইপে একটি নতুন ফিল্ড যুক্ত করাকে কেন সম্পূর্ণ নিরাপদ ও ব্রেকিং-মুক্ত বলে গণ্য করা হয়?'
      },
      options: [
        {
          en: 'Because GraphQL clients explicitly declare their selection sets; existing clients do not request the new field, so their response shape remains entirely unchanged',
          bn: 'কারণ ক্লায়েন্টরা নির্দিষ্ট সিলেকশন সেটে ফিল্ডের নাম উল্লেখ করে; বিদ্যমান ক্লায়েন্টরা নতুন ফিল্ডটি না চাওয়ায় তাদের রেসপন্স হুবহু আগের মতোই থাকে'
        },
        {
          en: 'Because GraphQL converts all new fields into CSS stylesheets automatically',
          bn: 'কারণ GraphQL স্বয়ংক্রিয়ভাবে সমস্ত নতুন ফিল্ডকে সিএসএস স্টাইলশিটে রূপান্তর করে'
        },
        {
          en: 'Because new fields can only be read on desktop computers and never on mobile phones',
          bn: 'কারণ নতুন ফিল্ডগুলো কেবল ডেস্কটপ কম্পিউটারে পড়া যায় এবং মোবাইলে পড়া যায় না'
        },
        {
          en: 'Because the database engine deletes older rows to make room for the new field',
          bn: 'কারণ নতুন ফিল্ডের জায়গা করতে ডেটাবেজ পুরোনো সারিগুলো মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clients only receive the exact fields they ask for in their document.',
        bn: 'ক্লায়েন্টরা তাদের কোয়েরিতে কেবল যে ফিল্ডগুলোর নাম লেখে কেবল সেগুলোর উত্তর পায়।'
      },
      explanation: {
        en: 'Under GraphQL selection set semantics, adding fields never alters the output of existing queries. Older clients continue receiving only their requested data.',
        bn: 'GraphQL সিলেকশন সেটের বৈশিষ্ট্যের কারণে নতুন ফিল্ড যোগ করলেও পুরোনো কোয়েরির ফলাফলে কোনো পরিবর্তন আসে না। পুরোনো অ্যাপ তাদের প্রয়োজনমতো ডেটা পেতেই থাকে।'
      }
    },
    {
      id: 'gql-evo-ex2',
      kind: 'mcq',
      topic: 'Dangerous breaking changes in GraphQL schemas',
      question: {
        en: 'Which of the following modifications constitutes a dangerous breaking change in a GraphQL schema?',
        bn: 'নিচের কোন পরিবর্তনটি একটি GraphQL স্কিমায় মারাত্মক ক্ষতিকর বা ব্রেকিং চেঞ্জ হিসেবে গণ্য হয়?'
      },
      options: [
        {
          en: 'Changing an existing nullable field to non-nullable (e.g. bio: String to bio: String!), or removing an existing field entirely',
          bn: 'বিদ্যমান নালেবল ফিল্ডকে নন-নালেবল করা (যেমন bio: String থেকে bio: String!), অথবা একটি ফিল্ড পুরোপুরি মুছে ফেলা'
        },
        {
          en: 'Adding a comprehensive markdown description to an existing type',
          bn: 'বিদ্যমান কোনো টাইপের ওপর বিস্তারিত মার্কডাউন বিবরণ বা কমেন্ট যোগ করা'
        },
        {
          en: 'Adding a new optional argument with a safe default value to a query',
          bn: 'কোনো কোয়েরিতে নিরাপদ ডিফল্ট মানসহ একটি নতুন ঐচ্ছিক বা অপশনাল আর্গুমেন্ট যোগ করা'
        },
        {
          en: 'Adding a @deprecated directive with a migration explanation',
          bn: 'মাইগ্রেশনের নির্দেশনাসহ কোনো ফিল্ডে @deprecated নির্দেশক যুক্ত করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Removing fields or restricting schema nullability breaks existing client assumptions.',
        bn: 'ফিল্ড মুছে ফেলা বা নালেবিলিটি কঠোর করলে পুরোনো ক্লায়েন্টের কোয়েরি ব্যর্থ হয়।'
      },
      explanation: {
        en: 'Removing a field or tightening nullability breaks validation and runtime contracts. Existing operations requesting removed fields are rejected by the server.',
        bn: 'ফিল্ড মুছে দিলে বা নালেবিলিটি কঠোর করলে চুক্তির ব্যত্যয় ঘটে। পুরোনো কোয়েরি যখন মুছে ফেলা ফিল্ড চায়, সার্ভার তখন রিকোয়েস্ট বাতিল করে দেয়।'
      }
    },
    {
      id: 'gql-evo-ex3',
      kind: 'mcq',
      topic: 'Using @deprecated for safe field sunsetting',
      question: {
        en: 'What is the primary role of the @deprecated directive in GraphQL schema design?',
        bn: 'GraphQL স্কিমা ডিজাইনে @deprecated নির্দেশকের মূল ভূমিকা কী?'
      },
      options: [
        {
          en: 'To signal to developers and tooling that a field is obsolete and will be retired, while providing a clear migration path to its replacement field',
          bn: 'ডেভেলপার ও টুলিংকে বার্তা দেওয়া যে এই ফিল্ডটি পুরোনো এবং ভবিষ্যতে বাদ যাবে, এবং একই সাথে নতুন বিকল্প ফিল্ডের সঠিক দিকনির্দেশনা দেওয়া'
        },
        {
          en: 'To immediately shut down the GraphQL server whenever the field is requested',
          bn: 'ফিল্ডটিতে কোনো রিকোয়েস্ট আসিবামাত্র সাথে সাথে পুরো সার্ভার বন্ধ করে দেওয়া'
        },
        {
          en: 'To double the network latency of queries requesting that specific field',
          bn: 'সেই নির্দিষ্ট ফিল্ড চাওয়া কোয়েরিগুলোর নেটওয়ার্ক লেটেন্সি দ্বিগুণ করে দেওয়া'
        },
        {
          en: 'To convert the field data into encrypted binary machine code',
          bn: 'ফিল্ডের সমস্ত ডেটাকে এনক্রিপ্ট করা বাইনারি কোডে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'It communicates impending retirement and recommends modern alternatives.',
        bn: 'এটি আসন্ন বাতিলের বার্তা দেয় এবং আধুনিক বিকল্প ব্যবহারের পরামর্শ দেয়।'
      },
      explanation: {
        en: '@deprecated surfaces warnings in developer IDEs and documentation without breaking running code, giving client developers time to migrate.',
        bn: '@deprecated কোনো কোড না ভেঙেই ডেভেলপারদের এডিটরে সতর্কবার্তা দেখায়, যার ফলে তারা সময় নিয়ে নতুন ফিল্ডে মাইগ্রেশন করে নিতে পারেন।'
      }
    },
    {
      id: 'gql-evo-ex4',
      kind: 'mcq',
      topic: 'Incremental delivery using @defer directive',
      question: {
        en: 'How does the @defer directive improve user-perceived performance for web applications?',
        bn: '@defer নির্দেশক কীভাবে ওয়েব অ্যাপ্লিকেশনের পারফরম্যান্স ও ব্যবহারকারীর অভিজ্ঞতা উন্নত করে?'
      },
      options: [
        {
          en: 'It allows the server to stream critical fast data immediately while deferring slow, heavy fragments to subsequent multipart response chunks',
          bn: 'এটি সার্ভারকে দ্রুতগতির মূল ডেটা তাৎক্ষণিক পাঠানোর সুযোগ দেয় এবং ধীরগতির ভারী অংশগুলো পরবর্তীতে মাল্টিপার্ট চাঙ্ক আকারে পাঠায়'
        },
        {
          en: 'It increases the download speed of the client home internet connection',
          bn: 'এটি ক্লায়েন্টের হোম ইন্টারনেটের ব্যান্ডউইথ ডাউনলোড স্পিড বাড়িয়ে দেয়'
        },
        {
          en: 'It automatically minifies all client JavaScript code on the fly',
          bn: 'এটি রিয়েল-টাইমে ক্লায়েন্টের সমস্ত জাভাস্ক্রিপ্ট কোড মিনিফাই করে ফেলে'
        },
        {
          en: 'It prevents web browsers from caching images on the user hard drive',
          bn: 'এটি ব্রাউজারকে ব্যবহারকারীর হার্ডডিস্কে ছবি ক্যাশ করা থেকে বিরত রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stream initial critical UI data first; stream slow fragments later.',
        bn: 'প্রথমে দ্রুত প্রাথমিক ইউআই ডেটা পাঠান; ধীরগতির ফিল্ডগুলো পরে পাঠিয়ে স্ক্রিন সচল রাখুন।'
      },
      explanation: {
        en: '@defer breaks the all-or-nothing execution bottleneck. Important viewport data renders immediately without waiting for slow auxiliary services.',
        bn: '@defer পুরো রেসপন্সের জন্য একসাথে অপেক্ষা করার বাধা দূর করে। ফলে গুরুত্বপূর্ণ তথ্য সাথে সাথে স্ক্রিনে ভেসে ওঠে কোনো বাড়তি দেরি ছাড়াই।'
      }
    }
  ],
  quiz: {
    id: 'the-evolution-ledger-quiz',
    title: {
      en: 'Schema Evolution & Deprecation Quiz',
      bn: 'স্কিমা বিবর্তন ও অবচয় কুইজ'
    },
    questions: [
      {
        id: 'q-schema-registry-ci-checks',
        kind: 'mcq',
        topic: 'Preventing outages with CI schema registry checks',
        question: {
          en: 'How does an automated schema registry check (e.g. Apollo Schema Checks or Hive) protect production deployments?',
          bn: 'স্বয়ংক্রিয় স্কিমা রেজিস্ট্রি চেক (যেমন Apollo Schema Checks বা Hive) কীভাবে প্রোডাকশন ডিপ্লয়মেন্ট সুরক্ষিত রাখে?'
        },
        options: [
          {
            en: 'By comparing proposed schema changes against historic client operation traffic, failing the CI build if a proposed deletion breaks active client operations',
            bn: 'প্রস্তাবিত স্কিমা পরিবর্তনকে অতীতে চলা ক্লায়েন্ট ট্রাফিকের সাথে তুলনা করে, এবং কোনো ফিল্ড মুছে ফেললে সক্রিয় কোনো ক্লায়েন্ট ভাঙার ঝুঁকি থাকলে সিআই বিল্ড আটকে দিয়ে'
          },
          {
            en: 'By requiring developers to physically sign a paper document at the company headquarters',
            bn: 'ডেভেলপারদের কোম্পানির প্রধান কার্যালয়ে গিয়ে সশরীরে কাগজে সই করতে বাধ্য করে'
          },
          {
            en: 'By deleting all unit tests from the project repository',
            bn: 'প্রজেক্ট রিপোজিটরি থেকে সমস্ত ইউনিট টেস্ট মুছে ফেলে'
          },
          {
            en: 'By restarting the production database cluster every midnight',
            bn: 'প্রতি মধ্যরাতে প্রোডাকশন ডেটাবেজ ক্লাস্টার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Comparing schema PRs against actual production query telemetry.',
          bn: 'স্কিমার পুল রিকোয়েস্টকে প্রোডাকশনের আসল কোয়েরি ডেটার সাথে তুলনা করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Schema checks cross-reference proposed changes with live query traffic. If someone removes a field that mobile apps still request, the pipeline rejects the pull request.',
          bn: 'স্কিমা চেক সরাসরি আসল ট্রাফিকের সাথে তুলনা করে। কেউ যদি এমন কোনো ফিল্ড মুছে দেয় যা কোনো মোবাইল অ্যাপ এখনো ব্যবহার করছে, পাইপলাইন সাথে সাথে তা আটকে দেয়।'
        }
      },
      {
        id: 'q-tolerant-reader-pattern',
        kind: 'mcq',
        topic: 'Designing clients as tolerant readers',
        question: {
          en: 'Why is it critical for GraphQL frontend clients to adopt the "Tolerant Reader" pattern when handling Enums?',
          bn: 'এনাম পরিচালনার ক্ষেত্রে GraphQL ফ্রন্টএন্ড ক্লায়েন্টগুলোর "সহনশীল পাঠক" বা Tolerant Reader প্যাটার্ন গ্রহণ করা কেন অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'Because backend schemas may introduce new enum members in the future; if the client code uses exhaustive switch statements without default fallbacks, the UI crashes',
            bn: 'কারণ ভবিষ্যতে ব্যাকএন্ডে নতুন এনাম মান যুক্ত হতে পারে; ক্লায়েন্ট যদি ডিফল্ট ফলব্যাক ছাড়া কঠোর সুইচ স্টেটমেন্ট চালায়, তবে ইউআই ক্র্যাশ করবে'
          },
          {
            en: 'Because enums are strictly forbidden by modern web browser standards',
            bn: 'কারণ আধুনিক ব্রাউজারের মানদণ্ডে এনাম ব্যবহার সম্পূর্ণ নিষিদ্ধ করা হয়েছে'
          },
          {
            en: 'To make the client application download 5 times slower on mobile phones',
            bn: 'যাতে ক্লায়েন্ট অ্যাপটি মোবাইলে ৫ গুণ ধীরগতিতে ডাউনলোড হয়'
          },
          {
            en: 'Because tolerant readers consume zero bytes of memory',
            bn: 'কারণ সহনশীল পাঠক কোনো মেমোরি খরচ করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Always include a fallback or default case when evaluating enum values.',
          bn: 'এনামের মান যাচাই করার সময় সর্বদা একটি ডিফল্ট ফলব্যাক ব্যবস্থা রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'If a backend introduces a new status enum (e.g. REFUNDED), an intolerant client that does not handle unknown values will throw runtime errors. Tolerant readers gracefully handle new members.',
          bn: 'ব্যাকএন্ডে নতুন এনাম যোগ হলে (যেমন REFUNDED) অসতর্ক ক্লায়েন্ট অ্যাপ রানটাইম এরর খায়। সহনশীল পাঠক অচেনা মান পেলেও সুন্দরভাবে ফলব্যাক হ্যান্ডেল করে।'
        }
      },
      {
        id: 'q-versionless-vs-rest-versioning',
        kind: 'mcq',
        topic: 'Architectural advantages of versionless GraphQL APIs',
        question: {
          en: 'What major organizational pain point does a versionless GraphQL API eliminate compared to traditional REST URL versioning (/v1, /v2, /v3)?',
          bn: 'চিরাচরিত রেস্ট ইউআরএল সংস্করণের (/v1, /v2, /v3) তুলনায় একটি সংস্করণহীন GraphQL এপিআই প্রতিষ্ঠানের কোন বিরাট ভোগান্তি দূর করে?'
        },
        options: [
          {
            en: 'It eliminates the massive engineering overhead of maintaining multiple legacy server versions in parallel and prevents forcing disruptive full-app rewrites on clients',
            bn: 'এটি সমান্তরালে একাধিক পুরোনো সার্ভার ভার্সন রক্ষণাবেক্ষণের বিরাট বোঝা দূর করে এবং ক্লায়েন্টদের ওপর বাধ্যতামূলক অ্যাপ রিরাইটের চাপ থেকে মুক্তি দেয়'
          },
          {
            en: 'It guarantees that cloud hosting servers never need electric power',
            bn: 'এটি নিশ্চিত করে যে ক্লাউড সার্ভারগুলোর কোনো বৈদ্যুতিক শক্তির প্রয়োজন হবে না'
          },
          {
            en: 'It turns all relational databases into simple HTML tables',
            bn: 'এটি সমস্ত রিলেশনাল ডেটাবেজকে সাধারণ এইচটিএমএল টেবিলে পরিণত করে'
          },
          {
            en: 'It allows developers to work without computer keyboards',
            bn: 'এটি ডেভেলপারদের কোনো কম্পিউটার কিবোর্ড ছাড়াই কাজ করার সুযোগ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Maintaining multiple parallel versions of an entire API burns engineering resources.',
          bn: 'একটি পুরো এপিআই-এর একাধিক পুরোনো সংস্করণ একসাথে বাঁচিয়ে রাখা ইঞ্জিনিয়ারিং শক্তি অপচয় করে।'
        },
        explanation: {
          en: 'REST versioning splits codebases and forces costly migrations. Versionless GraphQL lets single continuous schemas evolve incrementally through additive changes.',
          bn: 'রেস্ট সংস্করণ কোডবেসকে টুকরো টুকরো করে ব্যয়বহুল মাইগ্রেশনের চাপ তৈরি করে। সংস্করণহীন GraphQL একটিমাত্র স্কিমাকে মসৃণভাবে এগিয়ে নিয়ে যায়।'
        }
      },
      {
        id: 'q-grace-period-traffic-telemetry',
        kind: 'mcq',
        topic: 'Establishing deprecation grace periods using traffic telemetry',
        question: {
          en: 'When is it legally and architecturally safe to permanently delete a deprecated field from a production GraphQL schema?',
          bn: 'কখন একটি প্রোডাকশন GraphQL স্কিমা থেকে অবচিত বা deprecated ফিল্ড স্থায়ীভাবে মুছে ফেলা আইনত ও কাঠামোগতভাবে সম্পূর্ণ নিরাপদ?'
        },
        options: [
          {
            en: 'Only after continuous telemetry and schema usage monitoring confirm that exactly zero client requests across all supported client versions are asking for the field',
            bn: 'কেবল তখনই যখন নিরবচ্ছিন্ন টেলিমেট্রি ও মনিটরিং নিশ্চিত করে যে সমস্ত সমর্থিত ক্লায়েন্ট অ্যাপের কোনোটি থেকেই সেই ফিল্ডে আর কোনো রিকোয়েস্ট আসছে না'
          },
          {
            en: 'Exactly 24 hours after adding the @deprecated directive, regardless of client usage',
            bn: 'ক্লায়েন্টের ব্যবহারের কথা বিবেচনা না করেই @deprecated যোগ করার ঠিক ২৪ ঘণ্টা পর'
          },
          {
            en: 'Whenever a developer decides they dislike the name of the field',
            bn: 'যখনই কোনো ডেভেলপারের কাছে ফিল্ডের নামটি অপছন্দ মনে হয়'
          },
          {
            en: 'At the end of every calendar month automatically',
            bn: 'প্রতিটি ক্যালেন্ডার মাসের শেষে স্বয়ংক্রিয়ভাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Never delete until traffic reaches zero across all active versions.',
          bn: 'সমস্ত সক্রিয় ক্লায়েন্ট থেকে রিকোয়েস্ট শূন্যে না নামা পর্যন্ত কখনোই মুছবেন না।'
        },
        explanation: {
          en: 'Deleting a field while mobile applications still query it causes immediate runtime errors for those users. Field deletions must be backed by evidence of zero incoming requests.',
          bn: 'মোবাইল অ্যাপ ব্যবহার থাকা অবস্থায় ফিল্ড মুছে দিলে ব্যবহারকারীরা তাৎক্ষণিক ক্র্যাশ দেখতে পাবে। শূন্য রিকোয়েস্টের সুনির্দিষ্ট প্রমাণ পেলেই কেবল ফিল্ড মুছে ফেলা বৈধ।'
        }
      }
    ]
  }
};
