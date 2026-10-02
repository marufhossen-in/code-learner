import type { Lesson } from '../../../lib/types';

export const blueprintRoomsLesson: Lesson = {
  slug: 'the-blueprint-rooms',
  tech: 'angular',
  title: {
    en: 'Standalone Components & Modern Control Flow — @if, @for & @switch',
    bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্টস ও আধুনিক কন্ট্রোল ফ্লো — @if, @for ও @switch'
  },
  summary: {
    en: 'Modern Angular components are fully standalone, eliminating legacy NgModule files in favor of self-contained units. In this lesson, you will master the standalone component anatomy, utilize built-in declarative control flow (@if, @for with mandatory tracking, and @switch), and configure template data bindings across properties, events, and CSS classes.',
    bn: 'আধুনিক Angular কম্পোনেন্ট সম্পূর্ণ স্বয়ংসম্পূর্ণ, যা পুরোনো NgModule বাদ দিয়ে নিজস্ব মডিউলার ইউনিট গঠন করে। এই পাঠে আপনি স্ট্যান্ডঅ্যালোন কম্পোনেন্টের গঠন, বিল্ট-ইন ডিক্লেয়ারেটিভ কন্ট্রোল ফ্লো (@if, বাধ্যতামূলক ট্র্যাকিং সহ @for এবং @switch) এবং প্রপার্টি, ইভেন্ট ও সিএসএস ক্লাসে টেমপ্লেট ডাটা বাইন্ডিং গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'standalone-components-architecture',
      text: {
        en: 'The Standalone Component Architecture and Mental Model',
        bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্ট আর্কিটেকচার ও মূল ধারণা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern Angular applications, components are fully standalone, eliminating legacy NgModule containers in favor of self-contained units. A standalone component declares its own imports array, packaging template logic, scoped styles, and dependent directives together without intermediate configuration.',
        bn: 'যখন আপনি আধুনিক Angular অ্যাপ্লিকেশন তৈরি করেন, তখন কম্পোনেন্টগুলো সম্পূর্ণ স্বয়ংসম্পূর্ণ হয় এবং পুরোনো NgModule-এর বদলে সরাসরি মডিউলার হিসেবে কাজ করে। একটি স্ট্যান্ডঅ্যালোন কম্পোনেন্ট নিজেই তার imports অ্যারেতে প্রয়োজনীয় ডিরেক্টিভ ঘোষণা করে, ফলে কোড পরিষ্কার ও সহজে পুনর্ব্যবহারযোগ্য হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Standalone Component',
          def: {
            en: 'A self-contained component configured with standalone: true that directly imports its own template dependencies.',
            bn: 'standalone: true সহ তৈরি একটি স্বয়ংসম্পূর্ণ কম্পোনেন্ট যা নিজেই তার টেমপ্লেটের প্রয়োজনীয় উপাদান ইমপোর্ট করে।'
          }
        },
        {
          term: '@if / @else Block',
          def: {
            en: 'Built-in compiler control flow replacing legacy *ngIf, rendering branches conditionally with automatic type narrowing.',
            bn: 'পুরোনো *ngIf-এর বিকল্প বিল্ট-ইন কন্ট্রোল ফ্লো যা স্বয়ংক্রিয় টাইপ চেকিং সহ শর্তাধীন উপাদান প্রদর্শন করে।'
          }
        },
        {
          term: '@for ... track Block',
          def: {
            en: 'Built-in iteration block replacing *ngFor, enforcing a mandatory identity tracking expression for efficient DOM recycling.',
            bn: '*ngFor-এর বিকল্প বিল্ট-ইন লুপ যাতে ভার্চুয়াল ডম সুরক্ষায় বাধ্যতামূলক ট্র্যাকিং এক্সপ্রেশন দিতে হয়।'
          }
        },
        {
          term: '@empty Block',
          def: {
            en: 'An integrated fallback block inside @for rendered automatically whenever the iterated array contains 0 elements.',
            bn: '@for-এর ভেতরে থাকা একটি অল্টারনেটিভ ব্লক যা লুপের অ্যারেতে ০ টি উপাদান থাকলে স্ক্রিনে দৃশ্যমান হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'modern-control-flow-matrix',
      text: {
        en: 'Built-in Control Flow Syntax and Capabilities Matrix',
        bn: 'বিল্ট-ইন কন্ট্রোল ফ্লো সিনট্যাক্স ও সক্ষমতা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Modern Block Syntax', bn: 'আধুনিক ব্লক সিনট্যাক্স' },
        { en: 'Legacy Directive Equivalent', bn: 'পুরোনো ডিরেক্টিভ' },
        { en: 'Key Architectural Advantage', bn: 'মূল আর্কিটেকচারাল সুবিধা' }
      ],
      rows: [
        [
          { en: '@if (isAdmin()) { ... } @else { ... }', bn: '@if (isAdmin()) { ... } @else { ... }' },
          { en: '*ngIf="isAdmin(); else fallback"', bn: '*ngIf="isAdmin(); else fallback"' },
          { en: 'No ng-template boilerplate; built-in TypeScript type narrowing', bn: 'কোনো বাড়তি ট্যাগ লাগে না; টাইপস্ক্রিপ্ট টাইপ স্বয়ংক্রিয়ভাবে সুনির্দিষ্ট হয়' }
        ],
        [
          { en: '@for (item of items(); track item.id)', bn: '@for (item of items(); track item.id)' },
          { en: '*ngFor="let item of items; trackBy: fn"', bn: '*ngFor="let item of items; trackBy: fn"' },
          { en: 'Mandatory tracking prevents accidental DOM re-creation bugs', bn: 'বাধ্যতামূলক ট্র্যাকিং অহেতুক ডম নোড নতুন করে তৈরি হওয়া রোধ করে' }
        ],
        [
          { en: '@empty { <p>No items found</p> }', bn: '@empty { <p>No items found</p> }' },
          { en: 'Requires separate *ngIf="items.length === 0"', bn: 'আলাদা করে *ngIf="items.length === 0" লিখতে হতো' },
          { en: 'Built directly into @for; zero additional wrapper DOM tags', bn: '@for-এর ভেতর সরাসরি যুক্ত; বাড়তি কোনো ডম ট্যাগ প্রয়োজন হয় না' }
        ],
        [
          { en: '@switch (status()) { @case ("active") ... }', bn: '@switch (status()) { @case ("active") ... }' },
          { en: '[ngSwitch] and *ngSwitchCase', bn: '[ngSwitch] ও *ngSwitchCase' },
          { en: 'Native compiler syntax executing up to 90% faster than directives', bn: 'কমপাইলার সিনট্যাক্স যা সাধারণ ডিরেক্টিভের চেয়ে ৯০% পর্যন্ত দ্রুত চলে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'control-flow-simulation-code',
      text: {
        en: 'Working Control Flow and Identity Tracking Simulation',
        bn: 'কার্যকরী কন্ট্রোল ফ্লো ও আইডেন্টিটি ট্র্যাকিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular Built-in Control Flow Engine: @if and @for with track
class MockTemplateEngine {
  // Evaluates @if / @else branch
  evaluateIf(condition, thenContent, elseContent) {
    return condition ? thenContent : elseContent;
  }

  // Evaluates @for with mandatory identity track key
  evaluateFor(items, trackKeyFn, emptyContent) {
    if (!items || items.length === 0) {
      return { renderedCount: 0, output: emptyContent };
    }

    const trackedKeys = items.map(trackKeyFn);
    const renderedRows = items.map((item, idx) => {
      return { index: idx, id: trackKeyFn(item), name: item.name };
    });

    return {
      renderedCount: items.length,
      trackedKeys: trackedKeys,
      rows: renderedRows
    };
  }
}

const engine = new MockTemplateEngine();

// 1. Evaluate @if condition
const userRole = 'admin';
const authView = engine.evaluateIf(
  userRole === 'admin',
  'Admin Console Panel',
  'Standard User Dashboard'
);

// 2. Evaluate @for over an active inventory list
const products = [
  { id: 101, name: 'Mechanical Keyboard' },
  { id: 102, name: 'Ergonomic Mouse' },
  { id: 103, name: '4K Monitor' }
];

const loopResult = engine.evaluateFor(
  products,
  item => item.id,
  'No products available'
);

console.log('Evaluated @if branch view:', authView);
// -> Evaluated @if branch view: Admin Console Panel
console.log('Rendered row count in @for loop:', loopResult.renderedCount);
// -> Rendered row count in @for loop: 3
console.log('Tracked identity key for item 2:', loopResult.rows[1].id);
// -> Tracked identity key for item 2: 102`,
      caption: {
        en: 'Control flow engine selects Admin view and loops 3 products with identity tracking',
        bn: 'কন্ট্রোল ফ্লো ইঞ্জিন অ্যাডমিন ভিউ নির্বাচন করছে এবং ট্র্যাকিং সহ ৩ টি পণ্য লুপ করছে'
      }
    },
    {
      type: 'heading',
      id: 'template-discipline-rules',
      text: {
        en: 'Standalone Component Best Practices and Track Rules',
        bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্ট সেরা অনুশীলন ও ট্র্যাকিং নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most important rule when authoring modern Angular templates is choosing the right tracking expression in @for loops. Never track by $index on mutable lists where items are inserted, deleted, or sorted. Always track by a stable, unique identifier such as item.id to ensure Angular recycles existing DOM elements accurately.',
        bn: 'আধুনিক Angular টেমপ্লেট তৈরির সবচেয়ে গুরুত্বপূর্ণ নিয়ম হলো @for লুপে সঠিক ট্র্যাকিং এক্সপ্রেশন নির্ধারণ করা। পরিবর্তনশীল তালিকায় কখনোই $index দিয়ে ট্র্যাক করবেন না। সর্বদা ডাটাবেজ আইডি বা সুনির্দিষ্ট কী দিয়ে track item.id লিখুন, যাতে Angular অহেতুক ডম নোড পুনরায় না বানিয়ে দক্ষতার সাথে রিসাইকেল করতে পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Track by Unique Identity: Always write track item.id in @for loops; reserve $index strictly for static, immutable lists.',
          bn: '১. ইউনিক আইডিতে ট্র্যাকিং: @for লুপে সর্বদা track item.id দিন; শুধুমাত্র অপরিবর্তনশীল তালিকায় $index ব্যবহার করা যায়।'
        },
        {
          en: '2. Leverage @empty Blocks: Use the integrated @empty block inside @for instead of authoring redundant fallback container tags.',
          bn: '২. @empty ব্লকের ব্যবহার: খালি তালিকা প্রদর্শনে বাড়তি ট্যাগ না লিখে @for-এর নিজস্ব @empty ব্লক ব্যবহার করুন।'
        },
        {
          en: '3. Explicit Standalone Imports: In @Component({ imports: [CommonModule, ChildCard] }), only import the specific items used.',
          bn: '৩. সুনির্দিষ্ট ইমপোর্ট: imports অ্যারেতে কেবলমাত্র সেই কম্পোনেন্ট বা পাইপগুলো রাখুন যা টেমপ্লেটে ব্যবহৃত হয়েছে।'
        },
        {
          en: '4. Bind Properties via Square Brackets: Use [property]="value()" for inputs and (event)="handler()" for custom event outputs.',
          bn: '৪. বন্ধনীভিত্তিক বাইন্ডিং: প্রপার্টি বাইন্ডিংয়ে [property]="মান()" এবং ইভেন্ট লিসেনারে (event)="মেথড()" ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-blu-ex1',
      kind: 'mcq',
      topic: 'mandatory track expression in modern @for loops',
      question: {
        en: 'Why does the modern Angular template compiler produce a build error if a developer omits the "track" expression in an "@for" loop?',
        bn: 'কোনো ডেভেলপার "@for" লুপে "track" এক্সপ্রেশন বাদ দিলে আধুনিক Angular কমপাইলার কেন বিল্ড এরর দেয়?'
      },
      options: [
        {
          en: 'Tracking by unique identity is strictly mandatory in @for to prevent costly DOM re-rendering bugs and ensure optimal DOM element recycling during list mutations',
          bn: 'উপাদান কম-বেশি বা স্থান পরিবর্তনের সময় ডম নোড যাতে দক্ষতার সাথে পুনর্ব্যবহার হতে পারে এবং বাগ না হয়, সেজন্য @for লুপে ট্র্যাকিং সম্পূর্ণ বাধ্যতামূলক'
        },
        {
          en: 'Because track is a reserved keyword in the C programming language',
          bn: 'কারণ track হলো সি প্রোগ্রামিং ভাষার একটি সংরক্ষিত শব্দ'
        },
        {
          en: 'To force developers to install a third-party tracking plugin',
          bn: 'যাতে ডেভেলপাররা বাধ্য হয়ে থার্ড-পার্টি ট্র্যাকিং প্লাগইন ইনস্টল করে'
        },
        {
          en: 'Without track, the browser monitor turns off completely',
          bn: 'track না দিলে ব্রাউজার মনিটর পুরোপুরি বন্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'track ensures Angular accurately reconciles moving or deleted DOM nodes.',
        bn: 'track নিশ্চিত করে যে Angular ডম উপাদানগুলো মুছে না ফেলে সঠিক জায়গায় সরিয়ে নিতে পারে।'
      },
      explanation: {
        en: 'In legacy *ngFor, omitting trackBy was a common performance trap causing full DOM re-creation. Modern @for makes tracking mandatory, guaranteeing optimal diffing out of the box.',
        bn: 'আগের *ngFor-এ অনেকে trackBy দিতে ভুলে যেত, ফলে পারফরম্যান্স কমে যেত। আধুনিক @for-এ এটি বাধ্যতামূলক করায় শুরু থেকেই অ্যাপ্লিকেশন সর্বোচ্চ গতি পায়।'
      }
    },
    {
      id: 'ng-blu-ex2',
      kind: 'mcq',
      topic: 'danger of using $index as track expression on dynamic lists',
      question: {
        en: 'What dangerous visual bug occurs if you use "track $index" on a dynamic list where items can be deleted or inserted at the beginning?',
        bn: 'শুরুতে উপাদান যোগ বা মুছে ফেলার সুযোগ থাকা ডায়নামিক তালিকায় "track $index" ব্যবহার করলে কোন মারাত্মক ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'Angular associates DOM nodes with array positions rather than item identities; when an item is deleted, form inputs, checkboxes, or child component local states remain pinned to the wrong row',
          bn: 'Angular প্রতিটি ডম নোডকে আসল তথ্যের বদলে সূচক নম্বরের সাথে যুক্ত রাখে; ফলে একটি আইটেম মুছে ফেললে চেকবক্স বা ইনপুটের লেখা ভুল সারিতে আটকে থাকে'
        },
        {
          en: 'The website CSS styles are permanently deleted from the web server',
          bn: 'ওয়েবসাইটের সিএসএস স্টাইলগুলো ওয়েব সার্ভার থেকে মুছে যায়'
        },
        {
          en: 'The user computer restarts immediately without warning',
          bn: 'ব্যবহারকারীর কম্পিউটার কোনো সতর্কবার্তা ছাড়াই সাথে সাথে রিস্টার্ট নেয়'
        },
        {
          en: 'Array indices are converted into uppercase letters',
          bn: 'অ্যারে সূচকগুলো বড় হাতের অক্ষরে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Index-based tracking confuses DOM recycling when list elements shift positions.',
        bn: 'ইনডেক্স ট্র্যাকিং দিলে আইটেম নড়াচড়া করার সাথে সাথে ভেতরের ইনপুট স্টেট এলোমেলো হয়ে যায়।'
      },
      explanation: {
        en: 'Tracking by $index tells Angular that row 0 is always row 0. If item 0 is deleted, the old DOM node is reused for the next item, preserving stale input state and focus bugs.',
        bn: '$index দিলে প্রথম রো সর্বদা ০ থাকে। একটি আইটেম ডিলিট করলেও ০ নম্বর উপাদানটি অক্ষত ভেবে ভুল ডাটা প্রদর্শন করে। তাই আইটেমের নিজস্ব আইডি দিয়ে ট্র্যাক করা জরুরি।'
      }
    },
    {
      id: 'ng-blu-ex3',
      kind: 'mcq',
      topic: 'role of standalone true in modern angular components',
      question: {
        en: 'What architectural shift occurred when Angular made "standalone: true" the standard component model?',
        bn: 'Angular যখন "standalone: true"-কে আদর্শ কম্পোনেন্ট মডেল ঘোষণা করল, তখন কী ধরনের আর্কিটেকচারাল পরিবর্তন আসল?'
      },
      options: [
        {
          en: 'Components no longer need to be declared inside an NgModule; they manage their own dependencies directly via their "imports: [...]" array, simplifying code splitting and testing',
          bn: 'কম্পোনেন্টগুলোকে আর কোনো NgModule-এর ভেতর ঘোষণা করতে হয় না; তারা সরাসরি তাদের "imports: [...]" অ্যারেতে নির্ভরতা পরিচালনা করে কোড স্প্লিটিং ও টেস্টিং সহজ করে'
        },
        {
          en: 'Components can only run on computers disconnected from the internet',
          bn: 'কম্পোনেন্টগুলো কেবল ইন্টারনেট সংযোগহীন কম্পিউটারে চলতে পারে'
        },
        {
          en: 'HTML templates are completely forbidden in standalone components',
          bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্টে এইচটিএমএল টেমপ্লেট ব্যবহার করা সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'Components are automatically compiled into Python scripts',
          bn: 'কম্পোনেন্টগুলো স্বয়ংক্রিয়ভাবে পাইথন স্ক্রিপ্টে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standalone components remove the intermediate NgModule layer.',
        bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্ট মাঝের বাড়তি NgModule স্তরটি পুরোপুরি দূর করে দিয়েছে।'
      },
      explanation: {
        en: 'Standalone components eliminate the friction and mental overhead of NgModules. Each component is a modular, self-contained unit that can be imported directly into routing and other components.',
        bn: 'NgModule-এর জটিল ফাইল ব্যবস্থাপনা বাদ দিয়ে স্ট্যান্ডঅ্যালোন প্রতিটি কম্পোনেন্টকে স্বাধীন করেছে। ফলে সরাসরি কম্পোনেন্ট ধরে রাউটিং বা অন্য ফাইলে ইমপোর্ট করা যায়।'
      }
    },
    {
      id: 'ng-blu-ex4',
      kind: 'mcq',
      topic: 'property versus attribute binding in angular templates',
      question: {
        en: 'What is the technical difference between property binding "[disabled]=\"isDisabled()\"" and attribute binding "[attr.disabled]=\"isDisabled() ? \'\' : null\""?',
        bn: 'প্রপার্টি বাইন্ডিং "[disabled]=\"isDisabled()\"" এবং অ্যাট্রিবিউট বাইন্ডিং "[attr.disabled]=\"isDisabled() ? \'\' : null\""-এর মধ্যে প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'Property binding targets the DOM element property (in-memory JavaScript object property), while attribute binding targets the HTML attribute (initial markup attribute in the document)',
          bn: 'প্রপার্টি বাইন্ডিং সরাসরি ডম এলিমেন্টের মেমোরি অবজেক্ট প্রপার্টি পরিবর্তন করে, আর অ্যাট্রিবিউট বাইন্ডিং এইচটিএমএল মার্কআপের অ্যাট্রিবিউট নিয়ন্ত্রণ করে'
        },
        {
          en: 'Property binding only works with numbers while attribute binding only works with text',
          bn: 'প্রপার্টি বাইন্ডিং কেবল সংখ্যার সাথে চলে আর অ্যাট্রিবিউট বাইন্ডিং কেবল লেখার সাথে চলে'
        },
        {
          en: 'Attribute binding triggers a complete web browser refresh',
          bn: 'অ্যাট্রিবিউট বাইন্ডিং পুরো ওয়েব ব্রাউজার নতুন করে রিফ্রেশ করায়'
        },
        {
          en: 'There is no technical difference between properties and attributes in web browsers',
          bn: 'ওয়েব ব্রাউজারে প্রপার্টি ও অ্যাট্রিবিউটের মধ্যে কোনো প্রযুক্তিগত পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Properties belong to the DOM object; attributes belong to the HTML markup.',
        bn: 'প্রপার্টি থাকে ব্রাউজারের ডম অবজেক্টে; অ্যাট্রিবিউট থাকে এইচটিএমএল কোডে।'
      },
      explanation: {
        en: 'HTML attributes initialize DOM properties. Once initialized, properties represent live state. Angular binds to DOM properties via [prop] and uses [attr.name] only for pure HTML attributes like ARIA or SVG.',
        bn: 'এইচটিএমএল লোড হওয়ার পর ব্রাউজার প্রপার্টি তৈরি করে। Angular সরাসরি ডম প্রপার্টিতে মান বসায়, আর ARIA বা SVG-এর মতো প্রপার্টিহীন ক্ষেত্রে [attr.name] ব্যবহার করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'the-blueprint-rooms-quiz',
    title: {
      en: 'Standalone Components & Control Flow Quiz',
      bn: 'স্ট্যান্ডঅ্যালোন কম্পোনেন্টস ও কন্ট্রোল ফ্লো কুইজ'
    },
    questions: [
      {
        id: 'q-empty-block-ergonomics',
        kind: 'mcq',
        topic: 'built-in @empty fallback block ergonomics',
        question: {
          en: 'How does the "@empty" block simplify template code compared to legacy "*ngFor" and "*ngIf" combinations?',
          bn: 'পুরোনো "*ngFor" এবং "*ngIf"-এর সমন্বয়ের তুলনায় "@empty" ব্লক কীভাবে টেমপ্লেট কোড সহজ করে?'
        },
        options: [
          {
            en: 'It integrates directly into the @for loop, displaying fallback content automatically when the iterated array is empty without requiring separate condition checks or wrapper elements',
            bn: 'এটি সরাসরি @for লুপের ভেতরেই যুক্ত থাকে, ফলে কোনো আলাদা শর্ত বা বাড়তি কন্টেইনার ট্যাগ ছাড়াই তালিকা খালি থাকলে স্বয়ংক্রিয়ভাবে ফলব্যাক বার্তা দেখায়'
          },
          {
            en: 'It automatically fills the database with fake user accounts',
            bn: 'এটি ডাটাবেজে স্বয়ংক্রিয়ভাবে ভুয়া ব্যবহারকারী অ্যাকাউন্ট তৈরি করে দেয়'
          },
          {
            en: 'The @empty block forces the user to fill out a survey form',
            bn: '@empty ব্লক ব্যবহারকারীকে একটি জরিপ ফর্ম পূরণ করতে বাধ্য করে'
          },
          {
            en: '@empty can only display images, never text strings',
            bn: '@empty কেবল ছবি দেখাতে পারে, কোনো টেক্সট দেখাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: '@empty provides built-in fallback rendering when an iterated list is empty.',
          bn: '@empty তালিকা খালি থাকলে দেখানোর জন্য চমৎকার বিল্ট-ইন সমাধান।'
        },
        explanation: {
          en: 'Historically, displaying a "No items found" message required an extra *ngIf="items.length === 0" wrapper. The new @empty block attaches directly to @for with zero extra DOM nodes.',
          bn: 'আগে তালিকা খালি থাকলে লেখা দেখাতে আলাদা করে *ngIf লিখতে হতো। এখন @for-এর নিচেই @empty লিখে দিলে কোনো বাড়তি ট্যাগ ছাড়াই কাজ সুন্দরভাবে হয়ে যায়।'
        }
      },
      {
        id: 'q-type-narrowing-in-at-if',
        kind: 'mcq',
        topic: 'automatic typescript type narrowing inside @if blocks',
        question: {
          en: 'What TypeScript developer experience advantage does the "@if" block provide when checking nullable objects (e.g. "@if (user(); as u)")?',
          bn: 'নাল হতে পারে এমন অবজেক্ট যাচাইয়ে "@if (user(); as u)" ব্লক টাইপস্ক্রিপ্টে কোন বিশেষ সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It performs automatic type narrowing: inside the @if block, "u" is strictly typed as non-null and non-undefined without requiring optional chaining ("?.")',
            bn: 'এটি স্বয়ংক্রিয় টাইপ ন্যারোয়িং করে: ব্লকের ভেতরে "u" আর নাল বা আনডিফাইন্ড থাকে না, ফলে অপশনাল চেইনিং ("?.") ছাড়াই নিরাপদে প্রোপার্টি অ্যাক্সেস করা যায়'
          },
          {
            en: 'It disables all TypeScript compiler error checking',
            bn: 'এটি টাইপস্ক্রিপ্ট কমপাইলারের সমস্ত এরর চেকিং বন্ধ করে দেয়'
          },
          {
            en: 'It converts the object into a binary base64 string',
            bn: 'এটি অবজেক্টটিকে একটি বাইনারি বেস৬৪ স্ট্রিংয়ে বদলে দেয়'
          },
          {
            en: 'Type narrowing only works when using legacy Internet Explorer',
            bn: 'টাইপ ন্যারোয়িং কেবল পুরোনো ইন্টারনেট এক্সপ্লোরারেই সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'The Angular template compiler narrows nullable types automatically inside @if branches.',
          bn: 'Angular কমপাইলার @if ব্লকের ভেতরে নাল মান বাদ দিয়ে সঠিক টাইপ নিশ্চিত করে।'
        },
        explanation: {
          en: 'The Angular compiler recognizes @if blocks for TypeScript type narrowing. Binding the result with the "as" alias guarantees that child expressions receive strongly typed non-null references.',
          bn: '@if ব্লকের ভেতর টাইপস্ক্রিপ্ট বুঝতে পারে ডাটা অবশ্যই উপস্থিত আছে। ফলে টেমপ্লেটের ভেতরে user.name লিখতে কোনো সতর্কতা আসে না এবং কোড নিরাপদ থাকে।'
        }
      },
      {
        id: 'q-viewchild-signal-query',
        kind: 'mcq',
        topic: 'viewChild signal query API in modern Angular',
        question: {
          en: 'How do developers access a child component or DOM element in modern Angular (17.2+) using signals?',
          bn: 'আধুনিক Angular-এ (১৭.২+) সিগন্যাল ব্যবহার করে কোনো চাইল্ড কম্পোনেন্ট বা ডম উপাদান কীভাবে অ্যাক্সেস করা হয়?'
        },
        options: [
          {
            en: 'Use the "viewChild()" signal query function: "readonly submitBtn = viewChild<ElementRef>(\'submitBtn\');"',
            bn: '"viewChild()" সিগন্যাল কোয়েরি ফাংশন ব্যবহার করে: "readonly submitBtn = viewChild<ElementRef>(\'submitBtn\');"'
          },
          {
            en: 'Write "document.getElementById()" inside a while loop',
            bn: 'হোয়াইল লুপের ভেতর "document.getElementById()" লিখে'
          },
          {
            en: 'Send an HTTP POST request to the component template',
            bn: 'কম্পোনেন্ট টেমপ্লেটে একটি এইচটিটিপি পোস্ট রিকোয়েস্ট পাঠিয়ে'
          },
          {
            en: 'DOM query operations are forbidden in modern Angular',
            bn: 'আধুনিক Angular-এ কোনো ডম কোয়েরি করা একেবারেই নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'viewChild() returns a Signal containing the queried template element.',
          bn: 'viewChild() একটি সিগন্যাল রিটার্ন করে যার ভেতরে ডম উপাদানটির রেফারেন্স থাকে।'
        },
        explanation: {
          en: 'Angular 17.2 introduced signal queries: viewChild() and viewChildren(). They return Signal instances that automatically update as elements enter or leave the DOM, replacing legacy @ViewChild.',
          bn: 'পুরোনো @ViewChild ডেকোরেটরের বদলে viewChild() সিগন্যাল এসেছে। এটি ডম এলিমেন্টকে একটি সিগন্যালে পরিণত করে যা উপাদান এলে নিজে থেকেই আপডেট হয়ে যায়।'
        }
      },
      {
        id: 'q-hostdirectives-composition-pattern',
        kind: 'mcq',
        topic: 'hostDirectives component composition API',
        question: {
          en: 'What architectural power does the "hostDirectives" array in @Component provide to Angular developers?',
          bn: '@Component-এর "hostDirectives" অ্যারে Angular ডেভেলপারদের কোন আর্কিটেকচারাল সুবিধা দেয়?'
        },
        options: [
          {
            en: 'It enables directive composition: a component can apply standalone directives directly to its own host element without inheritance, exposing directive inputs and outputs as its own',
            bn: 'এটি ডিরেক্টিভ কম্পোজিশন সম্ভব করে: ইনহেরিটেন্সের ঝামেলা ছাড়াই একটি উপাদান তার নিজস্ব হোস্ট ট্যাগে সরাসরি ডিরেক্টিভ প্রয়োগ করতে পারে এবং তাদের ইনপুট-আউটপুট শেয়ার করতে পারে'
          },
          {
            en: 'It connects the computer directly to a web hosting server',
            bn: 'এটি কম্পিউটারকে সরাসরি একটি ওয়েব হোস্টিং সার্ভারের সাথে সংযুক্ত করে'
          },
          {
            en: 'It converts the component into an SVG vector graphic',
            bn: 'এটি উপাদানটিকে একটি এসভিজি ভেক্টর গ্রাফিকে রূপান্তর করে'
          },
          {
            en: 'hostDirectives can only be configured in corporate intranet apps',
            bn: 'hostDirectives কেবল অভ্যন্তরীণ অফিস নেটওয়ার্ক অ্যাপেই ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'hostDirectives allows composing multiple behaviors onto a component host element.',
          bn: 'hostDirectives একটি কম্পোনেন্টে একাধিক ভিন্ন ভিন্ন আচরণ একসাথে যুক্ত করার সুযোগ দেয়।'
        },
        explanation: {
          en: 'Directive composition via hostDirectives lets components inherit behaviors (like tooltip, dragging, or focus trapping) cleanly through composition rather than fragile class inheritance hierarchies.',
          bn: 'ক্লাস ইনহেরিটেন্সের বদলে কম্পোজিশন দিয়ে টুলটিপ বা ড্র্যাগিংয়ের মতো গুণাবলি সরাসরি হোস্ট এলিমেন্টে বসাতে hostDirectives ব্যবহার করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-utility-lines',
    title: {
      en: 'Dependency Injection & Services — @Injectable, inject() & Scopes',
      bn: 'ডিপেন্ডেন্সি ইনজেকশন ও সার্ভিসেস — @Injectable, inject() ও স্কোপস'
    }
  }
};
