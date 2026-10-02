import type { Lesson } from '../../../lib/types';

export const templateCraftsmenLesson: Lesson = {
  slug: 'the-template-craftsmen',
  tech: 'angular',
  title: {
    en: 'Pipes & Directives — Pure Pipes, Attribute Directives & hostDirectives',
    bn: 'পাইপস ও ডিরেক্টিভস — পিওর পাইপস, অ্যাট্রিবিউট ডিরেক্টিভ ও hostDirectives'
  },
  summary: {
    en: 'Pipes and Directives empower Angular templates by transforming data presentations and attaching modular behaviors to DOM elements. In this lesson, you will master the memoized performance of pure pipes versus impure pipes, author custom attribute directives managing host events, and compose reusable standalone behaviors using hostDirectives.',
    bn: 'পাইপস ও ডিরেক্টিভস ডাটা রূপান্তর এবং ডম এলিমেন্টে নতুন আচরণ যুক্ত করে Angular টেমপ্লেটকে শক্তিশালী করে তোলে। এই পাঠে আপনি পিওর পাইপ বনাম ইমপিওর পাইপের মেমোইজেশন ও পারফরম্যান্স পার্থক্য, হোস্ট ইভেন্ট নিয়ন্ত্রক কাস্টম অ্যাট্রিবিউট ডিরেক্টিভ তৈরি এবং hostDirectives দিয়ে আচরণ সমন্বয় গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'pipes-and-directives-architecture',
      text: {
        en: 'The Template Transformation and Behavior Architecture',
        bn: 'টেমপ্লেট রূপান্তর ও আচরণ আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you construct user interfaces in Angular, templates should remain declarative rather than cluttered with complex data formatting algorithms or direct Document Object Model (DOM) manipulations. Pipes format display values directly inside expressions, while Directives attach behavior or manipulate DOM nodes. Modern Angular combines both with standalone composition through hostDirectives.',
        bn: 'যখন আপনি Angular-এ ইউজার ইন্টারফেস তৈরি করেন, তখন টেমপ্লেট যাতে পরিষ্কার থাকে সেজন্য জটিল ডাটা ফরম্যাটিং বা সরাসরি ডম (DOM) ম্যানিপুলেশন এড়িয়ে চলা উচিত। পাইপস টেমপ্লেটের ভেতরেই টেক্সট বা কারেন্সি সুন্দরভাবে রূপান্তর করে, আর ডিরেক্টিভস উপাদানগুলোতে নতুন আচরণ যুক্ত করে। আধুনিক Angular এই দুটিকে hostDirectives দিয়ে চমৎকারভাবে সমন্বয় করার সুযোগ দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Pure Pipe',
          def: {
            en: 'A pipe evaluated strictly when primitive input values change or object memory references change.',
            bn: 'একটি পাইপ যা কেবলমাত্র আদি মান পাল্টালে বা অবজেক্ট রেফারেন্স পরিবর্তন হলেই পুনরায় হিসাব করা হয়।'
          }
        },
        {
          term: 'Impure Pipe',
          def: {
            en: 'A pipe configured with pure: false that executes on every single change detection cycle.',
            bn: 'pure: false যুক্ত একটি পাইপ যা প্রতিটি চেঞ্জ ডিটেকশন চক্রেই অপ্রয়োজনীয়ভাবে বারবার কার্যকর হয়।'
          }
        },
        {
          term: 'Attribute Directive',
          def: {
            en: 'A directive that changes the appearance or behavior of an existing DOM element or component.',
            bn: 'একটি ডিরেক্টিভ যা কোনো বিদ্যমান ডম এলিমেন্টের ভিজ্যুয়াল রূপ বা ব্যবহারিক আচরণ পরিবর্তন করে।'
          }
        },
        {
          term: 'hostDirectives',
          def: {
            en: 'A component metadata feature composing multiple standalone directives directly onto the host element.',
            bn: 'একটি কম্পোনেন্ট মেটাডাটা যা ইনহেরিটেন্স ছাড়াই হোস্ট এলিমেন্টে একাধিক ডিরেক্টিভ যুক্ত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'pipes-and-directives-matrix',
      text: {
        en: 'Pipes and Directives Comparison Matrix',
        bn: 'পাইপস ও ডিরেক্টিভস তুলনা ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Mechanism', bn: 'মেকানিজম' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Primary Purpose', bn: 'প্রধান ব্যবহার' }
      ],
      rows: [
        [
          { en: 'Pure Pipe', bn: 'পিওর পাইপ' },
          { en: '{{ price | currency:"USD":"symbol":"1.2-2" }}', bn: '{{ price | currency:"USD":"symbol":"1.2-2" }}' },
          { en: 'Memoized formatting of numbers, dates, and strings', bn: 'সংখ্যা, তারিখ বা লেখার মেমোইজড সুন্দর রূপান্তর' }
        ],
        [
          { en: 'Impure Pipe (Warning)', bn: 'ইমপিওর পাইপ (সতর্কতা)' },
          { en: '@Pipe({ name: "filterItems", pure: false })', bn: '@Pipe({ name: "filterItems", pure: false })' },
          { en: 'Re-evaluates every tick; heavy performance penalty on large lists', bn: 'প্রতি টিক-এ পুনরায় চলে; বড় তালিকায় পারফরম্যান্সের ব্যাপক ক্ষতি করে' }
        ],
        [
          { en: 'Attribute Directive', bn: 'অ্যাট্রিবিউট ডিরেক্টিভ' },
          { en: '<button appDebounceClick (debounceClick)="save()">Save</button>', bn: '<button appDebounceClick (debounceClick)="save()">Save</button>' },
          { en: 'Attaches custom click debouncing or focus behavior to HTML element', bn: 'এইচটিএমএল এলিমেন্টে ডাবল ক্লিক প্রতিরোধ বা ফোকাস আচরণ যুক্ত করে' }
        ],
        [
          { en: 'hostDirectives Composition', bn: 'hostDirectives কম্পোজিশন' },
          { en: 'hostDirectives: [TooltipDirective, RippleDirective]', bn: 'hostDirectives: [TooltipDirective, RippleDirective]' },
          { en: 'Composes multiple reusable behaviors onto a single component host', bn: 'একটি উপাদানে একাধিক তৈরি আচরণ সুন্দরভাবে জোড়া দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'pipe-simulation-code',
      text: {
        en: 'Working Pure Pipe Memoization and Directive Simulation',
        bn: 'কার্যকরী পিওর পাইপ মেমোইজেশন ও ডিরেক্টিভ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Angular Pure Pipe Memoization and Directive Execution
class MockPurePipe {
  constructor(transformFn) {
    this.transformFn = transformFn;
    this.lastInput = undefined;
    this.cachedOutput = undefined;
    this.executionCount = 0;
  }

  // Pure Pipe: Re-evaluates ONLY when primitive value or reference changes
  transform(value) {
    if (value === this.lastInput) {
      return this.cachedOutput; // Memoized return
    }
    this.executionCount += 1;
    this.lastInput = value;
    this.cachedOutput = this.transformFn(value);
    return this.cachedOutput;
  }
}

// Instantiate Currency Formatting Pipe
const currencyPipe = new MockPurePipe(amount => '$' + amount.toFixed(2));

// 1. Initial transform on amount 49.5
const out1 = currencyPipe.transform(49.5);

// 2. Change detection runs again with identical amount 49.5 (Memoized!)
const out2 = currencyPipe.transform(49.5);

// 3. New amount 120.75 passed
const out3 = currencyPipe.transform(120.75);

console.log('Formatted currency string:', out1);
// -> Formatted currency string: $49.50
console.log('Memoized execution result:', out2);
// -> Memoized execution result: $49.50
console.log('Total pipe execution calculations:', currencyPipe.executionCount);
// -> Total pipe execution calculations: 2
console.log('Latest formatted currency output:', out3);
// -> Latest formatted currency output: $120.75`,
      caption: {
        en: 'Pure pipe caches identical input running only 2 times for 3 render passes',
        bn: 'পিওর পাইপ ক্যাশ করে ৩ টি রেন্ডারে মাত্র ২ বার হিসাব করে পারফরম্যান্স রক্ষা করছে'
      }
    },
    {
      type: 'heading',
      id: 'craftsmen-discipline-rules',
      text: {
        en: 'Pipes and Directives Performance Best Practices',
        bn: 'পাইপস ও ডিরেক্টিভস পারফরম্যান্সের সেরা নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Never author impure pipes for filtering or sorting arrays in Angular templates. An impure pipe runs on every single mouse movement, scroll event, and keystroke in the application, creating massive CPU churn. Perform filtering and sorting inside computed() signals or component services instead, leaving pipes strictly for pure transformations.',
        bn: 'Angular টেমপ্লেটে তালিকা ফিল্টার বা সাজানোর জন্য কখনোই ইমপিওর পাইপ তৈরি করবেন না। একটি ইমপিওর পাইপ প্রতিটি মাউস নড়াচড়া, স্ক্রল বা কীবোর্ড চাপে পুনরায় হিসাব চালায় যা প্রসেসরকে মারাত্মকভাবে ক্লান্ত করে। তালিকা ফিল্টার বা সাজানোর কাজ সর্বদা computed() সিগন্যালে করুন এবং পাইপকে কেবল বিশুদ্ধ মান রূপান্তরের কাজে ব্যবহার করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Keep Pipes Pure: Always set pure: true (the default) on @Pipe to leverage memoization and avoid wasted cycles.',
          bn: '১. পাইপ সর্বদা পিওর: মেমোইজেশনের সুবিধা নিতে পাইপে ডিফল্ট pure: true বজায় রাখুন।'
        },
        {
          en: '2. Avoid Filter and Sort Pipes: Filter and sort arrays in computed() signals rather than executing pipes inside @for loops.',
          bn: '২. ফিল্টার পাইপ পরিহার: @for লুপের ভেতর পাইপ না চালিয়ে computed() সিগন্যালে তালিকা ফিল্টার করুন।'
        },
        {
          en: '3. Use hostDirectives for Behaviors: Compose standalone directives directly onto components without modifying component templates.',
          bn: '৩. hostDirectives দিয়ে আচরণ যোগ: কম্পোনেন্টে আলাদা আচরণ যুক্ত করতে ইনহেরিটেন্সের বদলে hostDirectives ব্যবহার করুন।'
        },
        {
          en: '4. Clean Up Event Listeners: In custom directives, use DestroyRef or host binding rather than manually adding window listeners.',
          bn: '৪. নিরাপদ ইভেন্ট লিসেনার: ডিরেক্টিভে গ্লোবাল লিসেনার যোগ না করে host প্রোপার্টি বাইন্ডিং ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ng-cft-ex1',
      kind: 'mcq',
      topic: 'pure pipe memoization behavior across render cycles',
      question: {
        en: 'How does an Angular "Pure Pipe" achieve high performance when rendered multiple times in a template?',
        bn: 'টেমপ্লেটে একাধিকবার প্রদর্শিত হলেও একটি Angular "পিওর পাইপ" কীভাবে উচ্চ পারফরম্যান্স বজায় রাখে?'
      },
      options: [
        {
          en: 'It is memoized: Angular only executes the "transform()" method when it detects that the primitive input value or object reference has physically changed, reusing the cached output during identical checks',
          bn: 'এটি মেমোইজড থাকে: ইনপুটের আদি মান বা অবজেক্ট রেফারেন্স পরিবর্তন হলেই কেবল Angular এর "transform()" মেথড চালায়, অন্যথায় পূর্বের সংরক্ষিত উত্তর সরাসরি ফেরত দেয়'
        },
        {
          en: 'It deletes all CSS styles on the webpage',
          bn: 'এটি ওয়েবপেজের সমস্ত সিএসএস স্টাইল মুছে ফেলে'
        },
        {
          en: 'Pure pipes are executed on an external cloud mainframe server',
          bn: 'পিওর পাইপ একটি বহিরাগত ক্লাউড সার্ভারে চালানো হয়'
        },
        {
          en: 'It increases the computer fan speed to maximum',
          bn: 'এটি কম্পিউটারের ফ্যানের স্পিড সর্বোচ্চ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pure pipes only recompute when input values or object references change.',
        bn: 'ইনপুট না পাল্টালে পিওর পাইপ পুনরায় হিসাব না করে ক্যাশ থেকে মান দেয়।'
      },
      explanation: {
        en: 'Angular pure pipes use pure mathematical functions with memoization. If change detection runs but the pipe arguments are unchanged (by reference or primitive value), execution is skipped.',
        bn: 'পিওর পাইপ আর্গুমেন্ট না বদলালে পুনরায় চলে না। ফলে প্রতি সেকেন্ডে শতবার চেঞ্জ ডিটেকশন চললেও কোনো অতিরিক্ত ক্যালকুলেশন হয় না।'
      }
    },
    {
      id: 'ng-cft-ex2',
      kind: 'mcq',
      topic: 'severe performance penalty of impure pipes',
      question: {
        en: 'Why does the Angular documentation strongly advise against creating impure pipes ("pure: false") for filtering or sorting large lists?',
        bn: 'বড় তালিকা ফিল্টার বা সর্ট করার ক্ষেত্রে Angular ডকুমেন্টেশন কেন ইমপিওর পাইপ ("pure: false") তৈরি করতে কঠোরভাবে নিষেধ করে?'
      },
      options: [
        {
          en: 'An impure pipe re-executes on every single change detection tick (including every keystroke, mouse movement, and timer tick anywhere in the app), causing catastrophic CPU lag on large arrays',
          bn: 'একটি ইমপিওর পাইপ অ্যাপের যেকোনো স্থানে প্রতিটি ছোট মাউস নড়াচড়া, টাইপিং বা টাইমার টিক-এর সময় বারবার চলে, ফলে বড় তালিকায় এটি প্রসেসরের ওপর প্রচণ্ড চাপ ফেলে অ্যাপ ধীর করে দেয়'
        },
        {
          en: 'Because impure pipes are only supported in mobile phones',
          bn: 'কারণ ইমপিওর পাইপ কেবল মোবাইল ফোনেই কাজ করে'
        },
        {
          en: 'The compiler shuts down the internet connection',
          bn: 'কমপাইলার ইন্টারনেট সংযোগ বন্ধ করে দেয়'
        },
        {
          en: 'Impure pipes convert arrays into XML files',
          bn: 'ইমপিওর পাইপ অ্যারেকে এক্সএমএল ফাইলে পরিবর্তন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Impure pipes run on every change detection cycle, creating massive CPU overhead.',
        bn: 'ইমপিওর পাইপ প্রতিটি পরিবর্তনের সাথে সাথে বারবার চলায় কম্পিউটার হ্যাং হতে পারে।'
      },
      explanation: {
        en: 'Impure pipes cannot assume inputs are immutable, so they re-run on every change detection cycle. Filtering an array of 1000 items on every mouse move freezes the UI. Use computed() instead.',
        bn: 'ইমপিওর পাইপ প্রতি মুহূর্তে বারবার চলতে থাকে। ১০০০ আইটেমের ওপর প্রতি মিলিসেকেন্ডে লুপ চললে স্ক্রিন ফ্রিজ হয়ে যাবে। তাই computed() দিয়ে ফিল্টার করাই সঠিক।'
      }
    },
    {
      id: 'ng-cft-ex3',
      kind: 'mcq',
      topic: 'hostDirectives metadata composition pattern',
      question: {
        en: 'How does the "hostDirectives" feature simplify component composition in modern Angular?',
        bn: 'আধুনিক Angular-এ "hostDirectives" ফিচারটি কীভাবে কম্পোনেন্ট কম্পোজিশন সহজ করে দেয়?'
      },
      options: [
        {
          en: 'It applies standalone directives directly to the component\'s host element without requiring template markup, allowing components to inherit behaviors (like tooltips or ripple effects) cleanly via composition',
          bn: 'এটি টেমপ্লেটে বাড়তি ট্যাগ না লিখেই কম্পোনেন্টের মূল হোস্ট এলিমেন্টে সরাসরি ডিরেক্টিভ যুক্ত করে, ফলে টুলটিপ বা রিপল এফেক্টের মতো আচরণগুলো সহজে কম্পোজিশনের মাধ্যমে ব্যবহার করা যায়'
        },
        {
          en: 'It converts the Angular component into a C++ shared library',
          bn: 'এটি Angular কম্পোনেন্টটিকে একটি সি++ লাইব্রেরিতে রূপান্তর করে'
        },
        {
          en: 'hostDirectives permanently blocks user interaction',
          bn: 'hostDirectives ব্যবহারকারীর সমস্ত কাজ স্থায়ীভাবে আটকে দেয়'
        },
        {
          en: 'It reduces the battery life of mobile devices by 50%',
          bn: 'এটি মোবাইল ডিভাইসের ব্যাটারি ৫০% কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'hostDirectives attaches directives to the component host element via metadata.',
        bn: 'hostDirectives মেটাডাটা দিয়ে কম্পোনেন্টের হোস্ট এলিমেন্টে ডিরেক্টিভ জুড়ে দেয়।'
      },
      explanation: {
        en: 'Before hostDirectives, users had to remember to add directive attributes manually in HTML or use class inheritance. hostDirectives attaches behaviors directly at the component metadata level.',
        bn: 'আগে প্রতিটি ট্যাগে আলাদা করে ডিরেক্টিভ লিখতে হতো। এখন hostDirectives দিয়ে কম্পোনেন্টের ভেতরেই আচরণ যুক্ত করে দেওয়া যায়, ফলে টেমপ্লেট একদম পরিষ্কার থাকে।'
      }
    },
    {
      id: 'ng-cft-ex4',
      kind: 'mcq',
      topic: 'host property binding in modern directives vs HostBinding decorator',
      question: {
        en: 'What is the modern Angular recommendation for binding host properties and listeners in directives instead of using legacy "@HostBinding" and "@HostListener" decorators?',
        bn: 'পুরোনো "@HostBinding" এবং "@HostListener" ডেকোরেটরের বদলে আধুনিক Angular-এ ডিরেক্টিভের হোস্ট প্রোপার্টি ও লিসেনার যুক্ত করার আদর্শ নিয়ম কোনটি?'
      },
      options: [
        {
          en: 'Use the "host" metadata property in the @Directive decorator: "@Directive({ host: { \'[class.active]\': \'isActive()\', \'(click)\': \'handleClick()\' } })"',
          bn: '@Directive ডেকোরেটরের "host" মেটাডাটা প্রোপার্টি ব্যবহার করে: "@Directive({ host: { \'[class.active]\': \'isActive()\', \'(click)\': \'handleClick()\' } })"'
        },
        {
          en: 'Write raw JavaScript onclick attributes in index.html',
          bn: 'index.html ফাইলে সরাসরি onclick অ্যাট্রিবিউট লিখে'
        },
        {
          en: 'Host listeners are completely prohibited in modern Angular',
          bn: 'আধুনিক Angular-এ হোস্ট লিসেনার ব্যবহার করা সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'Send an email to the browser developer',
          bn: 'ব্রাউজার নির্মাতার ঠিকানায় একটি ইমেইল পাঠিয়ে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The host metadata object in @Directive unifies host property and event bindings.',
        bn: 'host মেটাডাটা অবজেক্টে এক সাথে সব ক্লাস ও ইভেন্ট সহজে সংজ্ঞায়িত করা যায়।'
      },
      explanation: {
        en: 'Angular prefers the host metadata object over @HostBinding and @HostListener decorators because it consolidates all host interactions into a single, clean declaration at the top of the file.',
        bn: '@HostBinding ডেকোরেটর কোড ছড়ানো-ছিটানো রাখত। host মেটাডাটা ব্যবহারের মাধ্যমে ডিরেক্টিভের শুরুতে এক জায়গায় সব ক্লাস ও ইভেন্ট সুন্দরভাবে গুছিয়ে রাখা যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-template-craftsmen-quiz',
    title: {
      en: 'Angular Pipes & Directives Architecture Quiz',
      bn: 'Angular পাইপস ও ডিরেক্টিভস আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-pipe-chaining-syntax',
        kind: 'mcq',
        topic: 'chaining multiple pipes in template expressions',
        question: {
          en: 'How does Angular evaluate chained pipes in a template expression: "{{ user.birthDate | date:\'yyyy-MM-dd\' | uppercase }}"?',
          bn: 'টেমপ্লেটে একাধিক পাইপ একসাথে দিলে (যেমন "{{ user.birthDate | date:\'yyyy-MM-dd\' | uppercase }}") Angular কীভাবে তা মূল্যায়ন করে?'
        },
        options: [
          {
            en: 'From left to right: the output of the date pipe is passed as the input into the uppercase pipe',
            bn: 'বাম থেকে ডানে: date পাইপের আউটপুট পরবর্তীতে uppercase পাইপের ইনপুট হিসেবে প্রবেশ করে'
          },
          {
            en: 'From right to left in reverse order',
            bn: 'ডান থেকে বামে উল্টো ক্রমে'
          },
          {
            en: 'Both pipes execute concurrently and overwrite each other',
            bn: 'উভয় পাইপ একসাথে চলে এবং একে অপরের মান মুছে দেয়'
          },
          {
            en: 'Chaining pipes is forbidden and causes a compiler error',
            bn: 'একাধিক পাইপ চেইন করা নিষিদ্ধ এবং কমপাইল এরর তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pipes execute sequentially from left to right.',
          bn: 'পাইপগুলো ধারাবাহিকভাবে বাম থেকে ডানে একের পর এক কাজ করে।'
        },
        explanation: {
          en: 'Pipes chain sequentially from left to right, similar to Unix pipes (|). The result of each transformation feeds directly into the next pipe in the expression.',
          bn: 'লিনাক্স কমান্ড পাইপের মতোই Angular পাইপ বাম থেকে ডানে ডাটা এগিয়ে দেয়। প্রথম পাইপ তারিখ ঠিক করে এবং দ্বিতীয় পাইপ তা বড় হাতের অক্ষরে রূপান্তর করে।'
        }
      },
      {
        id: 'q-async-pipe-vs-tosignal',
        kind: 'mcq',
        topic: 'async pipe versus toSignal comparison',
        question: {
          en: 'What architectural advantage does converting an Observable via "toSignal()" provide over using the traditional "| async" pipe in templates?',
          bn: 'টেমপ্লেটে প্রচলিত "| async" পাইপ ব্যবহারের তুলনায় "toSignal()" দিয়ে Observable রূপান্তর করার সুবিধা কী?'
        },
        options: [
          {
            en: 'toSignal() exposes data as a synchronous signal that can be read anywhere in TypeScript (computed, effects, methods) as well as the template, avoiding template clutter and repeated async pipe subscriptions',
            bn: 'toSignal() ডাটাকে একটি সিগন্যালে বদলে দেয় যা টেমপ্লেটের পাশাপাশি টাইপস্ক্রিপ্টের যেকোনো স্থানে (computed, effect) সরাসরি পড়া যায় এবং বারবার সাবস্ক্রাইব হওয়া রোধ করে'
          },
          {
            en: 'toSignal reduces the electricity usage of the computer by 90%',
            bn: 'toSignal কম্পিউটারের বিদ্যুৎ খরচ ৯০% কমিয়ে দেয়'
          },
          {
            en: 'The async pipe was deleted from modern Angular',
            bn: 'async পাইপকে আধুনিক Angular থেকে মুছে ফেলা হয়েছে'
          },
          {
            en: 'toSignal only works with numeric values, failing on strings',
            bn: 'toSignal কেবল সংখ্যার সাথে চলে এবং লেখার ক্ষেত্রে ব্যর্থ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Signals are synchronous and accessible in both TypeScript logic and HTML templates.',
          bn: 'সিগন্যাল সরাসরি টেমপ্লেট ও টাইপস্ক্রিপ্ট লজিক উভয় স্থানেই স্বাচ্ছন্দ্যে ব্যবহারযোগ্য।'
        },
        explanation: {
          en: 'The async pipe only works inside the template. toSignal creates a signal usable across TypeScript (in computed, effect, methods) without multiple subscriptions or unwrapping boilerplate.',
          bn: 'async পাইপ কেবল টেমপ্লেটেই কাজ করত কিন্তু কোডের ভেতর তা পাওয়া যেত না। toSignal পুরো কম্পোনেন্টে ডাটা উন্মুক্ত করে এবং টেমপ্লেটকে একদম সহজ ও পরিষ্কার রাখে।'
        }
      },
      {
        id: 'q-exportas-template-reference-variable',
        kind: 'mcq',
        topic: 'exportAs property in directives for template reference access',
        question: {
          en: 'What does configuring "exportAs: \'appTooltip\'" in a directive definition allow template authors to do?',
          bn: 'কোনো ডিরেক্টিভে "exportAs: \'appTooltip\'" দিলে টেমপ্লেট ডেভেলপাররা কী সুবিধা পান?'
        },
        options: [
          {
            en: 'It allows developers to instantiate a template reference variable pointing to the directive instance: "<div appTooltip exportAs=\"appTooltip\" #tooltip=\"appTooltip\">", enabling manual method calls in templates',
            bn: 'এটি টেমপ্লেটে একটি রেফারেন্স ভেরিয়েবল দিয়ে সরাসরি ডিরেক্টিভ ইনস্ট্যান্স ধরার সুযোগ দেয় (যেমন #tooltip="appTooltip"), ফলে টেমপ্লেট থেকেই ডিরেক্টিভের মেথড কল করা যায়'
          },
          {
            en: 'It exports the component into a downloadable ZIP archive',
            bn: 'এটি কম্পোনেন্টটিকে একটি জিপ ফাইলে রূপান্তর করে ডাউনলোড করার সুযোগ দেয়'
          },
          {
            en: 'It translates the directive name into 10 different languages',
            bn: 'এটি ডিরেক্টিভের নামকে ১০টি ভিন্ন ভাষায় অনুবাদ করে'
          },
          {
            en: 'exportAs disables all mouse click events on the element',
            bn: 'exportAs উপাদানটিতে সমস্ত মাউস ক্লিক বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'exportAs assigns a name for template reference variables to access the directive instance.',
          bn: 'exportAs দিয়ে টেমপ্লেটের হ্যাশ ভেরিয়েবলের মাধ্যমে ডিরেক্টিভের মেথড চালানো যায়।'
        },
        explanation: {
          en: 'Setting exportAs gives the directive a name in the template namespace. Authors can write #myDir="appTooltip" and call myDir.show() or myDir.hide() directly from buttons.',
          bn: 'exportAs টেমপ্লেটে ডিরেক্টিভের একটি নাম তৈরি করে। ফলে কোনো বাটনে ক্লিক করে সরাসরি ডিরেক্টিভের show() বা hide() মেথড চালানো অত্যন্ত সহজ হয়।'
        }
      },
      {
        id: 'q-renderer2-safe-dom-manipulation',
        kind: 'mcq',
        topic: 'Renderer2 abstraction for platform-safe DOM manipulation',
        question: {
          en: 'Why do enterprise Angular directives use "Renderer2" methods instead of manipulating native DOM elements directly via "element.nativeElement.style.color = \'red\'"?',
          bn: 'এন্টারপ্রাইজ Angular ডিরেক্টিভে সরাসরি ডম পরিবর্তন না করে "Renderer2" মেথড কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Renderer2 provides a platform-independent abstraction layer that works safely in Server-Side Rendering (SSR), web workers, and native mobile environments where direct DOM access is unavailable or insecure',
            bn: 'Renderer2 একটি প্ল্যাটফর্ম-নিরপেক্ষ বিমূর্ত স্তর দেয় যা Server-Side Rendering (SSR), ওয়েব ওয়ার্কার এবং মোবাইল অ্যাপে নিরাপদে চলে যেখানে সরাসরি ব্রাউজার ডম পাওয়া যায় না'
          },
          {
            en: 'Renderer2 doubles the download speed of video files',
            bn: 'Renderer2 ভিডিও ফাইলের ডাউনলোডের গতি দ্বিগুণ করে'
          },
          {
            en: 'Direct DOM manipulation is illegal according to the United Nations',
            bn: 'সরাসরি ডম পরিবর্তন করা আন্তর্জাতিক আইন অনুযায়ী নিষিদ্ধ'
          },
          {
            en: 'Renderer2 automatically encrypts all CSS styles',
            bn: 'Renderer2 নিজে থেকেই সমস্ত সিএসএস স্টাইল এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Renderer2 abstracts DOM operations for environments without a native browser document.',
          bn: 'Renderer2 সার্ভার-সাইড বা ওয়েব ওয়ার্কারের মতো ব্রাউজারহীন পরিবেশেও নিরাপদ ডম অপারেশন নিশ্চিত করে।'
        },
        explanation: {
          en: 'Accessing nativeElement directly creates tight coupling to the browser. In SSR (Angular Universal) or Web Workers, the browser DOM does not exist. Renderer2 abstracts these mutations safely.',
          bn: 'সার্ভারে নোড.জেএস চালনার সময় কোনো আসল ব্রাউজার ডম থাকে না। nativeElement লিখলে সার্ভারে ক্র্যাশ করবে, কিন্তু Renderer2 ব্যবহার করলে কোনো সমস্যা ছাড়াই নিরাপদে কোড চলবে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-change-detective',
    title: {
      en: 'Performance Optimization — OnPush, Deferrable Views & NgRx SignalStore',
      bn: 'পারফরম্যান্স অপ্টিমাইজেশন — OnPush, ডেফারেবল ভিউস ও NgRx SignalStore'
    }
  }
};
