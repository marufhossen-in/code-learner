import type { Hub } from '../../lib/types';
import { TypesAndTheAnnotationLesson } from './lessons/types-and-the-annotation';
import { UnionsAndTheNarrowLesson } from './lessons/unions-and-the-narrow';
import { InterfacesAndTheShapeLesson } from './lessons/interfaces-and-the-shape';
import { GenericsAndTheParamLesson } from './lessons/generics-and-the-param';
import { GuardsAndThePredicateLesson } from './lessons/guards-and-the-predicate';
import { MappedAndTheUtilityLesson } from './lessons/mapped-and-the-utility';
import { ErrorsAndTheNeverLesson } from './lessons/errors-and-the-never';
import { TheTypedReleaseLesson } from './lessons/the-typed-release';

export const langTypescriptHub: Hub = {
  slug: 'lang-typescript',
  name: 'TypeScript',
  icon: '🔷',
  tagline: {
    en: 'Master enterprise-grade TypeScript from first annotations to advanced generics, mapped utility types, and strict production build configurations.',
    bn: 'প্রাথমিক টাইপ অ্যানোটেশন থেকে শুরু করে অ্যাডভান্সড জেনেরিক, ম্যাপড ইউটিলিটি টাইপ এবং কঠোর প্রোডাকশন কনফিগারেশন পর্যন্ত এন্টারপ্রাইজ-গ্রেড টাইপস্ক্রিপ্ট আয়ত্ত করুন।',
  },
  intro: {
    en: 'A comprehensive beginner-to-expert guide to modern TypeScript. Lesson 1 teaches primitive types, explicit annotations, and type erasure. Lesson 2 explores union types, literal types, and type narrowing. Lesson 3 structures objects using interfaces and structural typing. Lesson 4 scales reusable logic with generic type parameters. Lesson 5 enforces runtime safety through user-defined type predicates and discriminated unions. Lesson 6 transforms complex shapes with mapped and utility types. Lesson 7 guarantees exhaustiveness using the never type. Lesson 8 configures strict production compiler settings and declaration files.',
    bn: 'আধুনিক টাইপস্ক্রিপ্টের একটি পূর্ণাঙ্গ শিক্ষণীয় নির্দেশিকা। পাঠ ১ প্রিমিটিভ টাইপ, স্পষ্ট অ্যানোটেশন এবং টাইপ ইরেজার শেখায়। পাঠ ২ ইউনিয়ন টাইপ, লিটারেল টাইপ এবং টাইপ ন্যারোয়িং অনুসন্ধান করে। পাঠ ৩ ইন্টারফেস ও স্ট্রাকচারাল টাইপিং দিয়ে অবজেক্ট সাজায়। পাঠ ৪ জেনেরিক টাইপ প্যারামিটার দিয়ে পুনঃব্যবহারযোগ্য কোড তৈরি করে। পাঠ ৫ ইউজার-ডিফাইন্ড টাইপ প্রেডিকেট ও ডিসক্রিমিনেটেড ইউনিয়নের মাধ্যমে রানটাইম সুরক্ষা নিশ্চিত করে। পাঠ ৬ ম্যাপড ও ইউটিলিটি টাইপ দিয়ে জটিল অবজেক্ট রূপান্তর করে। পাঠ ৭ never টাইপ দিয়ে একজস্টিভনেস চেকিং নিশ্চিত করে। পাঠ ৮ প্রোডাকশন কম্পাইলার কনফিগারেশন ও ডিক্লারেশন ফাইল পরিচালনা শেখায়।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Foundations & Shapes (L1–L3)', bn: 'ধাপ ১ — ভিত্তি ও অবজেক্ট আকৃতি (পাঠ ১–৩)' },
      items: [
        { en: 'Primitives, annotations, inference, and compile-time type erasure', bn: 'প্রিমিটিভ টাইপ, অ্যানোটেশন, অনুমান এবং কম্পাইল-টাইম টাইপ ইরেজার' },
        { en: 'Union types, literal types, and control-flow narrowing with typeof', bn: 'ইউনিয়ন টাইপ, লিটারেল টাইপ এবং typeof দিয়ে কন্ট্রোল-ফ্লো ন্যারোয়িং' },
        { en: 'Interfaces, optional properties, readonly modifiers, and structural compatibility', bn: 'ইন্টারফেস, ঐচ্ছিক প্রপার্টি, readonly মডিফায়ার এবং স্ট্রাকচারাল টাইপিং' },
      ],
    },
    {
      title: { en: 'Stage 2 — Generics & Safety (L4–L6)', bn: 'ধাপ ২ — জেনেরিক ও সুরক্ষা ব্যবস্থা (পাঠ ৪–৬)' },
      items: [
        { en: 'Generic functions, type constraints with extends, and reusable interfaces', bn: 'জেনেরিক ফাংশন, extends কনস্ট্রেইন্ট এবং পুনঃব্যবহারযোগ্য ইন্টারফেস' },
        { en: 'Custom type guards, type predicates (is), and discriminated unions', bn: 'কাস্টম টাইপ গার্ড, টাইপ প্রেডিকেট (is) এবং ডিসক্রিমিনেটেড ইউনিয়ন' },
        { en: 'Mapped types, keyof operator, and standard utilities (Partial, Pick, Omit, Record)', bn: 'ম্যাপড টাইপ, keyof অপারেটর এবং স্ট্যান্ডার্ড ইউটিলিটি টাইপস' },
      ],
    },
    {
      title: { en: 'Stage 3 — Exhaustiveness & Release (L7–L8)', bn: 'ধাপ ৩ — একজস্টিভনেস ও প্রোডাকশন রিলিজ (পাঠ ৭–৮)' },
      items: [
        { en: 'The never bottom type, exhaustive switch checking, and strict null safety', bn: 'never বটম টাইপ, একজস্টিভ সুইচ চেকিং এবং স্ট্রিক্ট নাল সেফটি' },
        { en: 'Production tsconfig.json configuration, strict mode flags, and .d.ts declaration emit', bn: 'প্রোডাকশন tsconfig.json কনফিগারেশন, স্ট্রিক্ট মোড এবং .d.ts ফাইল তৈরি' },
      ],
    },
  ],
  lessons: [
    TypesAndTheAnnotationLesson,
    UnionsAndTheNarrowLesson,
    InterfacesAndTheShapeLesson,
    GenericsAndTheParamLesson,
    GuardsAndThePredicateLesson,
    MappedAndTheUtilityLesson,
    ErrorsAndTheNeverLesson,
    TheTypedReleaseLesson,
  ],
  references: [],
  projects: [
    {
      title: { en: 'Project 1 — Strongly Typed In-Memory Store', bn: 'প্রজেক্ট ১ — টাইপ-সুরক্ষিত ইন-মেমরি স্টোর' },
      brief: {
        en: 'Build a generic key-value store with support for schema validation, partial updates using Partial<T>, selective field queries using Pick<T, K>, and strict key constraint checking with keyof. Deliverable: a fully typed TypeScript class with complete unit test coverage.',
        bn: 'স্কিমা ভ্যালিডেশন, Partial<T> দিয়ে আংশিক আপডেট, Pick<T, K> দিয়ে ফিল্ড কুয়েরি এবং keyof দিয়ে সুরক্ষিত কি-ভ্যালু স্টোর তৈরি করুন। ডেলিভারেবল: ইউনিট টেস্টসহ একটি সম্পূর্ণ টাইপ-সুরক্ষিত টাইপস্ক্রিপ্ট ক্লাস।',
      },
    },
    {
      title: { en: 'Project 2 — Exhaustive Event-Driven State Machine', bn: 'প্রজেক্ট ২ — একজস্টিভ ইভেন্ট-চালিত স্টেট মেশিন' },
      brief: {
        en: 'Implement an enterprise payment processor state machine using discriminated unions for transitions, custom type predicates for event validation, and an exhaustive switch statement with never checking to prevent unhandled transition states.',
        bn: 'ট্রানজিশনের জন্য ডিসক্রিমিনেটেড ইউনিয়ন, ইভেন্ট যাচাইয়ে টাইপ প্রেডিকেট এবং never চেকিংসহ একটি পেমেন্ট প্রসেসর স্টেট মেশিন তৈরি করুন যা কোনো অবস্থাকেই অপরীক্ষিত রাখে না।',
      },
    },
  ],
  bestPractices: [
    { en: 'Always enable strict mode in tsconfig.json from project day one.', bn: 'প্রজেক্ট শুরুর প্রথম দিন থেকেই tsconfig.json-এ strict মোড সক্রিয় রাখুন।' },
    { en: 'Use unknown instead of any when handling external API payloads or user inputs.', bn: 'বাহ্যিক এপিআই পে-লোড বা ইনপুট গ্রহণের সময় any-এর বদলে unknown ব্যবহার করুন।' },
    { en: 'Enforce discriminated unions with explicit tag properties for multi-state domain entities.', bn: 'একাধিক অবস্থার ডোমেন সত্তা পরিচালনার জন্য ডিসক্রিমিনেটেড ইউনিয়ন ও ট্যাগ প্রপার্টি ব্যবহার করুন।' },
    { en: 'Apply never to the default branch of switch statements to enforce compile-time exhaustiveness.', bn: 'কম্পাইল-টাইম একজস্টিভনেস নিশ্চিত করতে switch স্টেটমেন্টের default শাখায় never প্রয়োগ করুন।' },
  ],
  interview: [
    {
      q: {
        en: 'What is type erasure, and what does it imply for TypeScript runtime performance and validation?',
        bn: 'টাইপ ইরেজার (Type Erasure) কী এবং এটি রানটাইম পারফরম্যান্স ও ডেটা ভ্যালিডেশনে কী প্রভাব ফেলে?',
      },
      a: {
        en: 'TypeScript types exist solely at compile time; during compilation, all type annotations, interfaces, and type aliases are completely stripped into plain JavaScript. This means TypeScript introduces zero runtime execution overhead and zero extra memory footprint, but it also means TypeScript cannot perform runtime data validation on API payloads without runtime schema libraries like Zod.',
        bn: 'টাইপস্ক্রিপ্টের সমস্ত টাইপ কেবল কম্পাইল-টাইমে বিদ্যমান থাকে; বিল্ডের সময় টাইপ অ্যানোটেশন, ইন্টারফেস ও অ্যালিয়াস সম্পূর্ণ মুছে সাধারণ জাভাস্ক্রিপ্টে পরিণত হয়। ফলে রানটাইমে কোনো বাড়তি মেমরি বা পারফরম্যান্স ওভারহেড থাকে না। তবে এর মানে হলো এপিআই থেকে আসা ডেটার রানটাইম ভ্যালিডেশনের জন্য Zod-এর মতো লাইব্রেরি প্রয়োজন।',
      },
    },
    {
      q: {
        en: 'How does structural typing in TypeScript differ from nominal typing in languages like Java or C#?',
        bn: 'জাভা বা সি#-এর নমিনাল টাইপিংয়ের সাথে টাইপস্ক্রিপ্টের স্ট্রাকচারাল টাইপিংয়ের পার্থক্য কী?',
      },
      a: {
        en: 'Nominal typing matches types based on explicit names and declarations (a class must implement an interface by name). TypeScript uses structural typing: two types are compatible if they share the same shape (properties and methods). If an object has all required properties with compatible types, TypeScript accepts it regardless of how or where it was instantiated.',
        bn: 'নমিনাল টাইপিং ক্লাসের সুনির্দিষ্ট নামের ভিত্তিতে টাইপ যাচাই করে। অন্যদিকে টাইপস্ক্রিপ্ট স্ট্রাকচারাল টাইপিং অনুসরণ করে: দুটি অবজেক্টের ভেতরের প্রপার্টি এবং মেথডের আকৃতি এক হলে তাদের টাইপ সামঞ্জস্যপূর্ণ ধরা হয়, অবজেক্টটি যে নামেই তৈরি করা হোক না কেন।',
      },
    },
    {
      q: {
        en: 'Why is unknown preferred over any when handling untrusted data from APIs or user inputs?',
        bn: 'এপিআই থেকে প্রাপ্ত তথ্যের ক্ষেত্রে any এর চেয়ে unknown কেন অধিক নিরাপদ?',
      },
      a: {
        en: 'any completely disables the type checker, allowing any property access or method call and propagating untyped code across the system. In contrast, unknown is type-safe: TypeScript forces developers to narrow the type (using typeof, instanceof, or custom type guards) before allowing any operations on the value, preventing runtime crashes.',
        bn: 'any টাইপ-চেকারকে সম্পূর্ণ বন্ধ করে দেয়, যা রানটাইমে মারাত্মক ত্রুটি ঘটাতে পারে। বিপরীতে unknown টাইপ-নিরাপত্তা বজায় রাখে: এর ওপর কোনো অপারেশন পরিচালনা করার পূর্বে টাইপস্ক্রিপ্ট টাইপ ন্যারোয়িং (যেমন typeof বা টাইপ গার্ড) বাধ্যতামূলক করে, যা ক্র্যাশ প্রতিরোধ করে।',
      },
    },
    {
      q: {
        en: 'What is exhaustiveness checking in TypeScript, and how does the never type enforce it?',
        bn: 'টাইপস্ক্রিপ্টে একজস্টিভনেস চেকিং (Exhaustiveness Checking) কী এবং never টাইপ এটি কীভাবে নিশ্চিত করে?',
      },
      a: {
        en: 'Exhaustiveness checking ensures all branches of a discriminated union are handled in a switch statement. By assigning the switch default branch to a variable of type never, the compiler raises a type error if a new union variant is added without a corresponding case handler. This catches unhandled states at compile time.',
        bn: 'এটি নিশ্চিত করে যে একটি ডিসক্রিমিনেটেড ইউনিয়নের সমস্ত সম্ভাব্য ভ্যারিয়েন্ট switch স্টেটমেন্টে বিবেচনা করা হয়েছে। switch-এর default শাখায় মানটি never টাইপের ভেরিয়েবলে অ্যাসাইন করলে, কোনো নতুন ভ্যারিয়েন্ট বাদ পড়লে কম্পাইলার লাল দাগ দিয়ে এরর দেখায়।',
      },
    },
  ],
  realWorld: [
    { en: 'Frontend SPAs (React, Next.js, Vue): compile-time type checking for component props, state hooks, and API responses.', bn: 'ফ্রন্টএন্ড ফ্রেমওয়ার্ক (React, Next.js, Vue): কম্পোনেন্ট প্রপ্স, স্টেট হুক এবং এপিআই রেসপন্সের কম্পাইল-টাইম টাইপ সুরক্ষা।' },
    { en: 'Backend services (Node.js, NestJS, Express): strongly typed service boundaries, database ORM models, and middleware validation.', bn: 'ব্যাকএন্ড সার্ভিস (Node.js, NestJS, Express): সার্ভিস বাউন্ডারি, ডেটাবেজ ওআরএম মডেল এবং মিডলওয়্যার ভ্যালিডেশন।' },
    { en: 'Full-stack monorepos: sharing shared entity types and API contracts between client and server without code duplication.', bn: 'ফুল-স্ট্যাক মনোরেপো: ক্লায়েন্ট ও সার্ভারের মধ্যে কোড ডুপ্লিকেশন ছাড়াই শেয়ার্ড এনটিটি টাইপ এবং এপিআই চুক্তি বিনিময়।' },
  ],
};
