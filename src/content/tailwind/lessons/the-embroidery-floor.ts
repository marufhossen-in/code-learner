import type { Lesson } from '../../../lib/types';

export const embroideryFloorLesson: Lesson = {
  slug: 'the-embroidery-floor',
  tech: 'tailwind',
  title: {
    en: 'Component Extraction & The Cascade — @layer Directives, @apply & Component Architecture',
    bn: 'কম্পোনেন্ট এক্সট্রাকশন ও ক্যাসকেড — @layer নির্দেশক, @apply ও উপাদান স্থাপত্য'
  },
  summary: {
    en: 'While composing atomic utility classes directly in HTML markup accelerates development, repeated class combinations across identical buttons and inputs eventually warrant abstraction. However, prematurely extracting custom classes using @apply re-introduces the naming fatigue and bloated stylesheets of legacy CSS. Tailwind CSS manages component architecture through three cascade layers: @layer base, @layer components, and @layer utilities. Because utilities are compiled after components in the cascade, individual atomic classes can always override component defaults without !important hacks. In modern web engineering, teams combine framework components like React or Vue with Class Variance Authority (CVA) to achieve type-safe, maintainable component design.',
    bn: 'সরাসরি এইচটিএমএল মার্কআপে ইউটিলিটি ক্লাস ব্যবহার করে দ্রুত কোড করা গেলেও একাধিক বাটন ও ইনপুটে একই ক্লাসের পুনরাবৃত্তি দূর করতে সঠিক সংগঠনের প্রয়োজন হয়। কিন্তু শুরুতেই @apply দিয়ে কাস্টম ক্লাস তৈরি করলে চিরাচরিত সিএসএসের অহেতুক নাম খোঁজা এবং ফাইলের আকার বৃদ্ধির পুরনো সমস্যাগুলো ফিরে আসে। Tailwind CSS তিনটি ক্যাসকেড স্তরের মাধ্যমে উপাদান পরিচালনা করে: @layer base, @layer components এবং @layer utilities। যেহেতু ক্যাসকেডে কম্পোনেন্টের পরে ইউটিলিটি অবস্থান করে, তাই যেকোনো একক ইউটিলিটি ক্লাস কোনো !important ছাড়াই কম্পোনেন্টের ডিফল্ট স্টাইল ওভাররাইড করতে পারে। আধুনিক ওয়েব ইঞ্জিনিয়ারিংয়ে দলগুলো রিঅ্যাক্ট বা ভিউ কম্পোনেন্টের সাথে Class Variance Authority (CVA) যুক্ত করে নিখুঁত উপাদান তৈরি করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Discipline of Component Abstraction',
        bn: 'মূল ধারণা: কম্পোনেন্ট অ্যাবস্ট্রাকশনের সঠিক নীতি'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build large web applications with Tailwind CSS, repeating identical strings of utility classes across multiple buttons or cards frequently tempts developers to extract custom CSS classes. However, premature abstraction can re-introduce the maintenance problems of traditional CSS, such as naming fatigue and stylesheet bloat. Modern component architecture balances utility composition with structured abstractions using the @layer directive, selective @apply usage, and reusable JavaScript template components.',
        bn: 'যখন আপনি Tailwind CSS দিয়ে বড় ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন একাধিক বাটন বা কার্ড জুড়ে একই রকম ইউটিলিটি ক্লাসের পুনরাবৃত্তি দেখে ডেভেলপাররা প্রায়শই কাস্টম সিএসএস ক্লাস বানাতে চান। কিন্তু অপরিণত অবস্থায় ক্লাস তৈরি করলে চিরাচরিত সিএসএসের পুরনো সমস্যা যেমন নাম খোঁজার ক্লান্তি এবং ফাইলের আকার বৃদ্ধির ঝামেলা ফিরে আসে। আধুনিক কম্পোনেন্ট আর্কিটেকচার @layer নির্দেশক, পরিমিত @apply ব্যবহার এবং পুনর্ব্যবহারযোগ্য ফ্রেমওয়ার্ক কম্পোনেন্টের মাধ্যমে ইউটিলিটি ক্লাস ও কাঠামোর চমৎকার ভারসাম্য তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@layer Directive',
          def: {
            en: 'Tailwind directive that assigns custom CSS rules into base, components, or utilities layers to control cascade specificity order',
            bn: 'Tailwind নির্দেশক যা কাস্টম সিএসএস রুলগুলোকে base, components বা utilities স্তরে সাজিয়ে ক্যাসকেডের অগ্রাধিকার নিয়ন্ত্রণ করে'
          }
        },
        {
          term: '@apply Directive',
          def: {
            en: 'Syntax allowing existing Tailwind utility classes to be inlined directly inside custom CSS selectors',
            bn: 'সিনট্যাক্স যা বিদ্যমান Tailwind ইউটিলিটি ক্লাসগুলোকে সরাসরি কাস্টম সিএসএস সিলেক্টরের ভেতরে যুক্ত করতে সাহায্য করে'
          }
        },
        {
          term: 'Cascade Hierarchy (Base < Components < Utilities)',
          def: {
            en: 'The fixed execution order ensuring atomic utilities always override component defaults without requiring !important declarations',
            bn: 'নির্দিষ্ট এক্সিকিউশন ক্রম যা নিশ্চিত করে একক ইউটিলিটি ক্লাস সর্বদা কোনো !important ছাড়াই কম্পোনেন্ট স্টাইল ওভাররাইড করতে পারে'
          }
        },
        {
          term: 'Class Variance Authority (CVA)',
          def: {
            en: 'Modern TypeScript library for composing component visual variants and sizes declaratively without writing custom CSS classes',
            bn: 'আধুনিক টাইপস্ক্রিপ্ট লাইব্রেরি যা কাস্টম সিএসএস ক্লাস না লিখেই কোডে উপাদানের বিভিন্ন রূপ ও আকার নির্ধারণ করতে সাহায্য করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'premature-abstraction',
      text: {
        en: 'Avoiding the Premature Abstraction Trap',
        bn: 'অপরিণত অ্যাবস্ট্রাকশনের ফাঁদ এড়ানো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common mistake made by developers transitioning from traditional CSS is extracting a custom class the second time they see duplicate classes. They create .card or .btn with twenty @apply utilities. Within weeks, they need a card with no shadow, leading to .card--no-shadow, recreating the exact BEM naming nightmare Tailwind was designed to eliminate.',
        bn: 'চিরাচরিত সিএসএস থেকে আসা ডেভেলপারদের একটি সাধারণ ভুল হলো দুবার ক্লাসের মিল দেখলেই সাথে সাথে কাস্টম ক্লাস তৈরি করা। তারা কুড়িটি @apply দিয়ে .card বা .btn তৈরি করেন। কয়েক সপ্তাহ পর ছায়াহীন কার্ড প্রয়োজন হলে তারা .card--no-shadow বানান, যা আবার সেই জটিল BEM নামকরণের নরক ফিরিয়ে আনে যা দূর করতেই Tailwind তৈরি হয়েছিল।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern component-driven development, duplication of markup is vastly cheaper than the wrong abstraction. Instead of creating custom CSS classes, extract reusable framework components like Button.tsx or Card.vue. This centralizes styles in one place while retaining full utility flexibility.',
        bn: 'আধুনিক কম্পোনেন্ট-ভিত্তিক ডেভেলপমেন্টে ভুল অ্যাবস্ট্রাকশন তৈরির চেয়ে মার্কআপে ক্লাসের পুনরাবৃত্তি অনেক কম ক্ষতিকর। কাস্টম সিএসএস ক্লাসের বদলে রিঅ্যাক্ট বা ভিউ কম্পোনেন্ট (যেমন Button.tsx বা Card.vue) তৈরি করুন। এটি সমস্ত স্টাইল এক স্থানে রাখে এবং ইউটিলিটি ক্লাসের পূর্ণ নমনীয়তা বজায় রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'three-cascade-layers',
      text: {
        en: 'The Three Cascade Layers: Base, Components, Utilities',
        bn: 'তিনটি ক্যাসকেড স্তর: বেস, কম্পোনেন্ট ও ইউটিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind organizes generated CSS into three distinct cascade tiers: @layer base, @layer components, and @layer utilities. The foundation tier contains default element resets (like Preflight margins and heading font weights). The components section houses custom class-based abstractions like .btn-primary.',
        bn: 'Tailwind তার সমস্ত সিএসএসকে তিনটি সুনির্দিষ্ট ক্যাসকেড স্তরে বিভক্ত করে: @layer base, @layer components এবং @layer utilities। বেস স্তরে থাকে ডিফল্ট এলিমেন্ট রিসেট (যেমন হেডিংয়ের মার্জিন বা ফন্ট সাইজ)। কম্পোনেন্ট স্তরে থাকে .btn-primary-এর মতো কাস্টম ক্লাস।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Crucially, @layer utilities is compiled at the very end of the stylesheet. Because it appears last in document order, any atomic utility—such as p-8 or m-0—takes precedence over classes in @layer components. If you write <button class="btn-primary p-8">, the button automatically renders with 32px padding instead of the component 16px default, without needing !important.',
        bn: 'সবচেয়ে গুরুত্বপূর্ণ হলো, @layer utilities স্টাইলশিটের একদম শেষে সংকলিত হয়। শেষে থাকার কারণে যেকোনো অ্যাটমিক ইউটিলিটি—যেমন p-8 বা m-0—কম্পোনেন্ট ক্লাসের চেয়ে বেশি অগ্রাধিকার পায়। আপনি <button class="btn-primary p-8"> লিখলে বাটনটি কম্পোনেন্টের ১৬ পিক্সেলের বদলে ইউটিলিটির ৩২ পিক্সেল প্যাডিং নিয়ে সুন্দরভাবে রেন্ডার হয়, কোনো !important ছাড়াই।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Component Extraction Strategies',
        bn: 'কাঠামোগত তুলনা: কম্পোনেন্ট এক্সট্রাকশন কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Extraction Strategy', bn: 'এক্সট্রাকশন কৌশল' },
        { en: 'Type Safety & Autocomplete', bn: 'টাইপ নিরাপত্তা ও অটোকমপ্লিট' },
        { en: 'CSS Bundle Impact', bn: 'সিএসএস বান্ডিলে প্রভাব' },
        { en: 'Overridability with Utilities', bn: 'ইউটিলিটি দিয়ে পরিবর্তনের সুবিধা' }
      ],
      rows: [
        [
          { en: 'Framework Component (React / Vue)', bn: 'ফ্রেমওয়ার্ক কম্পোনেন্ট (React / Vue)' },
          { en: 'Complete TypeScript interface for props and variants', bn: 'প্রপস ও ভ্যারিয়েন্টের জন্য নিখুঁত টাইপস্ক্রিপ্ট সমর্থন' },
          { en: 'Zero; uses existing compiled utility classes', bn: 'শূন্য; বিদ্যমান তৈরি ইউটিলিটি ক্লাস ব্যবহার করে' },
          { en: 'Seamless; pass additional className props', bn: 'অনায়াস; অতিরিক্ত className প্রপস পাঠালেই চলে' }
        ],
        [
          { en: 'CSS @apply in @layer components', bn: 'সিএসএস @apply (@layer components)' },
          { en: 'Weak; raw class string without type checking', bn: 'দুর্বল; টাইপ পরীক্ষা ছাড়া সাধারণ টেক্সট স্ট্রিং' },
          { en: 'Generates duplicate CSS declarations per class', bn: 'প্রতিটি নতুন ক্লাসের জন্য বাড়তি সিএসএস তৈরি করে' },
          { en: 'High; overridden cleanly by @layer utilities', bn: 'উচ্চ; @layer utilities দিয়ে সহজে ওভাররাইড হয়' }
        ],
        [
          { en: 'Class Variance Authority (CVA)', bn: 'ক্লাস ভ্যারিয়েন্স অথরিটি (CVA)' },
          { en: 'Strict compile-time validation for size/intent props', bn: 'সাইজ ও ভ্যারিয়েন্ট প্রপসের কঠোর কম্পাইল যাচাই' },
          { en: 'Zero CSS overhead; outputs pure utility strings', bn: 'শূন্য সিএসএস খরচ; সরাসরি ইউটিলিটি স্ট্রিং দেয়' },
          { en: 'Pair with tailwind-merge for conflict-free overrides', bn: 'tailwind-merge দিয়ে সংঘাতহীনভাবে ওভাররাইড হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Cascade Layer Priority & @apply',
        bn: 'বাস্তব কোড সিমুলেশন: ক্যাসকেড লেয়ার অগ্রাধিকার ও @apply'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind @layer Cascade Order & @apply in Node.js

class CascadeSimulator {
  public layers = {
    base: new Map<string, Record<string, string>>(),
    components: new Map<string, Record<string, string>>(),
    utilities: new Map<string, Record<string, string>>()
  };

  // Simulates @apply inside @layer components
  addComponent(selector: string, appliedClasses: string[]) {
    const rules: Record<string, string> = {};
    for (const cls of appliedClasses) {
      if (cls === 'p-4') rules['padding'] = '1rem /* 16px */';
      if (cls === 'bg-blue-600') rules['background-color'] = '#2563eb';
      if (cls === 'rounded-lg') rules['border-radius'] = '0.5rem /* 8px */';
      if (cls === 'text-white') rules['color'] = '#ffffff';
    }
    this.layers.components.set(selector, rules);
  }

  // Registers atomic utility in @layer utilities
  addUtility(selector: string, property: string, value: string) {
    this.layers.utilities.set(selector, { [property]: value });
  }

  // Resolves computed styles respecting cascade layer priority: components < utilities
  resolveElementStyles(elementClasses: string) {
    const computed: Record<string, string> = {};
    const tokens = elementClasses.split(/\\s+/).filter(Boolean);

    // 1. Apply component classes
    for (const token of tokens) {
      if (this.layers.components.has('.' + token)) {
        Object.assign(computed, this.layers.components.get('.' + token));
      }
    }

    // 2. Apply utility classes (Higher cascade priority in Tailwind!)
    for (const token of tokens) {
      if (this.layers.utilities.has('.' + token)) {
        Object.assign(computed, this.layers.utilities.get('.' + token));
      }
    }

    return computed;
  }
}

const sim = new CascadeSimulator();

// Register .btn-primary component using @apply: p-4, bg-blue-600, rounded-lg, text-white
sim.addComponent('.btn-primary', ['p-4', 'bg-blue-600', 'rounded-lg', 'text-white']);

// Register utility override: p-8 (padding 2rem / 32px)
sim.addUtility('.p-8', 'padding', '2rem /* 32px */');

// Button with component class AND an overriding utility class: 'btn-primary p-8'
const elementClasses = 'btn-primary p-8';
const styles = sim.resolveElementStyles(elementClasses);

console.log('Component background color:', styles['background-color']);
// -> Component background color: #2563eb
console.log('Effective padding after utility override:', styles['padding']);
// -> Effective padding after utility override: 2rem /* 32px */
console.log('Component border radius preserved:', styles['border-radius']);
// -> Component border radius preserved: 0.5rem /* 8px */
console.log('Utility successfully overrode component padding:', styles['padding'].includes('32px'));
// -> Utility successfully overrode component padding: true`,
      caption: {
        en: 'Simulation: .btn-primary default padding 1rem (16px) is overridden by utility .p-8 to 2rem (32px) with border-radius 0.5rem (8px) preserved',
        bn: 'সিমুলেশন: .btn-primary এর ডিফল্ট প্যাডিং ১ রেম (১৬ পিক্সেল) কে .p-8 ইউটিলিটি দিয়ে ২ রেম (৩২ পিক্সেল) এ ওভাররাইড করা হয় এবং ০.৫ রেম (৮ পিক্সেল) বর্ডার বজায় থাকে'
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
        en: 'Rule 1: Always encapsulate custom @apply classes inside @layer components. Defining unlayered classes breaks Tailwind cascade ordering, preventing utility overrides from working predictably.',
        bn: 'নিয়ম ১: কাস্টম @apply ক্লাস সর্বদা @layer components-এর ভেতরে রাখুন। লেয়ার ছাড়া ক্লাস লিখলে Tailwind-এর ক্যাসকেড নষ্ট হয় এবং ইউটিলিটি দিয়ে ওভাররাইড করা কঠিন হয়ে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Prefer framework components over @apply in React, Vue, and Svelte codebases. Encapsulating styles in reusable components preserves typed props and eliminates stylesheet bloat.',
        bn: 'নিয়ম ২: রিঅ্যাক্ট বা ভিউ অ্যাপ্লিকেশনে @apply-এর বদলে ফ্রেমওয়ার্ক কম্পোনেন্ট ব্যবহার করুন। কম্পোনেন্টে স্টাইল রাখলে টাইপস্ক্রিপ্ট প্রপসের সুবিধা পাওয়া যায় এবং সিএসএস ফাইলের আকার বাড়ে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use tailwind-merge when accepting dynamic className props in component libraries. Simple string concatenation causes conflicting classes (e.g. p-4 and p-6) to compete unpredictably.',
        bn: 'নিয়ম ৩: কম্পোনেন্টে ডাইনামিক className প্রপস গ্রহণের সময় tailwind-merge ব্যবহার করুন। সাধারণ স্ট্রিং জোড়া লাগালে পরস্পরবিরোধী ক্লাসের (যেমন p-4 ও p-6) মাঝে অপ্রত্যাশিত সংঘাত ঘটে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Never use @apply for one-off styles. If a collection of utility classes is only used once in your entire project, leave them directly on the markup where they are easily auditable.',
        bn: 'নিয়ম ৪: এককালীন ব্যবহারের জন্য কখনোই @apply লিখবেন না। কোনো স্টাইল যদি পুরো প্রজেক্টে কেবল একবারই ব্যবহার হয়, তবে তা সরাসরি এইচটিএমএল মার্কআপে রাখাই সবচেয়ে পরিষ্কার ও বুদ্ধিমানের কাজ।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-emb-ex1',
      kind: 'mcq',
      topic: 'Cascade priority of @layer utilities over @layer components',
      question: {
        en: 'Why does an atomic utility class like p-8 successfully override a component class like btn-primary that defines p-4 in Tailwind CSS?',
        bn: 'Tailwind CSS-এ p-4 সংজ্ঞায়িত থাকা btn-primary ক্লাসের ওপর p-8 ইউটিলিটি ক্লাসটি কেন সফলভাবে প্রাধান্য পায়?'
      },
      options: [
        {
          en: 'Because @layer utilities is compiled after @layer components in the final stylesheet, giving atomic utilities natural cascade precedence without !important hacks',
          bn: 'কারণ ফাইনাল স্টাইলশিটে @layer utilities স্তরটি @layer components-এর পরে সংকলিত হয়, ফলে কোনো !important ছাড়াই ইউটিলিটি ক্লাস স্বাভাবিকভাবেই অগ্রাধিকার পায়'
        },
        {
          en: 'Because p-8 uses 128-bit quantum encryption to disable the button styling',
          bn: 'কারণ p-8 ক্লাসটি বাটনের স্টাইল বন্ধ করতে ১২৮-বিট কোয়ান্টাম এনক্রিপশন ব্যবহার করে'
        },
        {
          en: 'Because component classes are automatically deleted after 5 seconds',
          bn: 'কারণ কম্পোনেন্ট ক্লাসগুলো ৫ সেকেন্ড পর ব্রাউজার থেকে নিজ থেকেই মুছে যায়'
        },
        {
          en: 'Because web browsers only recognize class names that contain numbers',
          bn: 'কারণ ওয়েব ব্রাউজার কেবল সেইসব ক্লাসের নাম চিনতে পারে যাতে সংখ্যা রয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stylesheet document order determines cascade precedence when specificity is equal.',
        bn: 'স্পেসিফিসিটি সমান হলে স্টাইলশিটে কোন রুলটি পরে আছে তা অগ্রাধিকার নির্ধারণ করে।'
      },
      explanation: {
        en: 'In CSS, when specificity is identical, the rule appearing later in the stylesheet wins. Tailwind places @layer utilities last, ensuring utilities always override components.',
        bn: 'সিএসএসে সমান ক্ষমতার সিলেক্টরের ক্ষেত্রে শেষের রুলটি জয়ী হয়। Tailwind ইউটিলিটি লেয়ারকে সবার শেষে রাখে, যার ফলে ইউটিলিটি ক্লাস অনায়াসে কম্পোনেন্টকে ওভাররাইড করে।'
      }
    },
    {
      id: 'tw-emb-ex2',
      kind: 'mcq',
      topic: 'Risks of premature @apply extraction',
      question: {
        en: 'What architectural trap occurs when a team prematurely extracts dozens of utility strings into custom CSS classes using @apply?',
        bn: 'কোনো টিম যদি অপরিণত অবস্থায় ডজন ডজন ইউটিলিটি স্ট্রিং @apply দিয়ে কাস্টম সিএসএস ক্লাসে পরিণত করে তবে কী সমস্যা দেখা দেয়?'
      },
      options: [
        {
          en: 'It re-creates the legacy CSS maintenance crisis with naming fatigue, ballooning stylesheet sizes, and loss of template readability',
          bn: 'এটি পুরোনো সিএসএসের মতো ক্লাসের নাম খোঁজার ক্লান্তি, ফাইলের অপ্রয়োজনীয় আকার বৃদ্ধি এবং কোডের পাঠযোগ্যতা নষ্ট হওয়ার সংকট ফিরিয়ে আনে'
        },
        {
          en: 'It causes the server operating system to crash immediately',
          bn: 'এর ফলে সার্ভারের অপারেটিং সিস্টেম সাথে সাথে ক্র্যাশ করে'
        },
        {
          en: 'It forces the client to download a new graphics driver',
          bn: 'এটি ক্লায়েন্টকে নতুন গ্রাফিক্স ড্রাইভার ডাউনলোড করতে বাধ্য করে'
        },
        {
          en: 'Because @apply is strictly illegal under W3C internet law',
          bn: 'কারণ W3C ইন্টারনেট আইনে @apply ব্যবহার করা সম্পূর্ণ বেআইনি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about having to invent names like .product-card-button--secondary.',
        bn: 'প্রতিটি উপাদানের জন্য নতুন নতুন ক্লাসের নাম আবিষ্কারের ঝামেলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Overusing @apply turns Tailwind back into messy traditional CSS. Duplicating utility classes across a few templates is vastly better than premature class extraction.',
        bn: '@apply-এর অতিরিক্ত ব্যবহার Tailwind-কে আবার সেই জটিল পুরোনো সিএসএসে পরিণত করে। ভুল ক্লাস বানানোর চেয়ে মার্কআপে ক্লাসের পুনরাবৃত্তি অনেক নিরাপদ।'
      }
    },
    {
      id: 'tw-emb-ex3',
      kind: 'mcq',
      topic: 'Role of tailwind-merge in component libraries',
      question: {
        en: 'Why is the tailwind-merge utility essential when creating reusable React or Vue components that accept custom className props?',
        bn: 'কাস্টম className গ্রহণকারী পুনর্ব্যবহারযোগ্য রিঅ্যাক্ট বা ভিউ কম্পোনেন্ট তৈরিতে tailwind-merge কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It intelligently resolves conflicting Tailwind utilities (such as p-4 and p-6), ensuring the overriding prop class always takes effect without order dependency',
          bn: 'এটি পরস্পরবিরোধী ক্লাসের (যেমন p-4 এবং p-6) সংঘাত বুদ্ধিমানের সাথে সমাধান করে এবং নিশ্চিত করে যে পাঠানো নতুন ক্লাসটি সঠিকভাবে কার্যকর হবে'
        },
        {
          en: 'It compresses image files before uploading them to cloud storage',
          bn: 'ক্লাউড স্টোরেজে আপলোডের আগে এটি ছবির ফাইলকে কমপ্রেস করে'
        },
        {
          en: 'It translates the component text from English to Spanish',
          bn: 'এটি কম্পোনেন্টের লেখাকে ইংরেজি থেকে স্প্যানিশ ভাষায় অনুবাদ করে'
        },
        {
          en: 'Because JavaScript arrays cannot hold more than 2 string items',
          bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারেতে ২ টির বেশি স্ট্রিং আইটেম রাখা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without tailwind-merge, both p-4 and p-6 exist in the class string, causing unpredictable CSS conflicts.',
        bn: 'tailwind-merge না থাকলে p-4 ও p-6 দুটোই ক্লাসে থেকে যায়, যা বিশৃঙ্খলা তৈরি করে।'
      },
      explanation: {
        en: 'Standard string joining leaves both conflicting classes in markup, making the winner dependent on CSS bundle order. tailwind-merge strips superseded classes.',
        bn: 'সাধারণভাবে স্ট্রিং জোড়া লাগালে দুটি বিপরীত ক্লাসই থেকে যায়। tailwind-merge পুরোনো ক্লাসটিকে সরিয়ে দিয়ে নতুন ক্লাসের প্রাধান্য নিশ্চিত করে।'
      }
    },
    {
      id: 'tw-emb-ex4',
      kind: 'mcq',
      topic: 'Encapsulating custom styles with @layer components',
      question: {
        en: 'Where should custom classes built with @apply be declared in your main CSS stylesheet?',
        bn: 'আপনার মূল সিএসএস ফাইলে @apply দিয়ে তৈরি কাস্টম ক্লাসগুলো কোথায় ঘোষণা করা উচিত?'
      },
      options: [
        {
          en: 'Inside an @layer components { ... } block to ensure proper cascade ordering and utility overridability',
          bn: '@layer components { ... } ব্লকের ভেতরে, যাতে সঠিক ক্যাসকেড ক্রম এবং ইউটিলিটি দিয়ে ওভাররাইড করার সুবিধা বজায় থাকে'
        },
        {
          en: 'Inside a random JavaScript console.log() statement',
          bn: 'একটি সাধারণ জাভাস্ক্রিপ্ট console.log() স্টেটমেন্টের ভেতরে'
        },
        {
          en: 'At the bottom of the HTML <body> tag using inline script tags',
          bn: 'এইচটিএমএল <body> ট্যাগের একদম নিচে স্ক্রিপ্ট ট্যাগ ব্যবহার করে'
        },
        {
          en: 'In an external Microsoft Word document on the hard drive',
          bn: 'হার্ডডিস্কে থাকা একটি মাইক্রোসফট ওয়ার্ড ফাইলের ভেতরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Wrapping custom rules in @layer components preserves Tailwind cascade.',
        bn: '@layer components-এ কাস্টম রুল রাখলে Tailwind-এর ক্যাসকেডের শৃঙ্খলা ঠিক থাকে।'
      },
      explanation: {
        en: 'Placing custom component rules in @layer components allows Tailwind to inject them into the stylesheet ahead of atomic utilities, preserving the cascade.',
        bn: '@layer components-এ কাস্টম রুল রাখলে Tailwind সেগুলোকে ইউটিলিটির ঠিক আগে বসায়, ফলে ক্যাসকেডের অগ্রাধিকার নিখুঁত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-embroidery-floor-quiz',
    title: {
      en: 'Component Extraction & @layer Cascade Quiz',
      bn: 'কম্পোনেন্ট এক্সট্রাকশন ও @layer ক্যাসকেড কুইজ'
    },
    questions: [
      {
        id: 'q-cva-declarative-variants',
        kind: 'mcq',
        topic: 'Declarative component design with Class Variance Authority',
        question: {
          en: 'What major advantage does Class Variance Authority (CVA) provide over hand-writing multiple @apply classes like .btn-primary and .btn-secondary?',
          bn: '.btn-primary বা .btn-secondary-এর মতো একাধিক @apply ক্লাস লেখার চেয়ে Class Variance Authority (CVA) কী বড় সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It defines component variants, sizes, and compound combinations directly in TypeScript with full type checking and zero extra CSS declarations',
            bn: 'এটি টাইপস্ক্রিপ্টের ভেতরে সরাসরি কম্পোনেন্টের ভ্যারিয়েন্ট ও সাইজ সংজ্ঞায়িত করে এবং কোনো বাড়তি সিএসএস না লিখে পূর্ণ টাইপ নিরাপত্তা দেয়'
          },
          {
            en: 'It increases the processing speed of the computer Central Processing Unit (CPU)',
            bn: 'এটি কম্পিউটারের সেন্ট্রাল প্রসেসিং ইউনিটের (সিপিইউ) কাজের গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It deletes all user passwords from the database automatically',
            bn: 'এটি ডেটাবেজ থেকে ব্যবহারকারীর সমস্ত পাসওয়ার্ড স্বয়ংক্রিয়ভাবে মুছে দেয়'
          },
          {
            en: 'Because CVA allows websites to run without any web hosting server',
            bn: 'কারণ CVA কোনো ওয়েব হোস্টিং সার্ভার ছাড়াই ওয়েবসাইট চালানোর সুযোগ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Type-safe variant props in modern React/Vue applications.',
          bn: 'আধুনিক অ্যাপ্লিকেশনে টাইপ-নিরাপদ ভ্যারিয়েন্ট প্রপসের সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'CVA allows developers to configure variants declaratively in JavaScript/TypeScript. It generates standard utility strings on the fly with compile-time safety.',
          bn: 'CVA কোডের ভেতরেই সুন্দরভাবে ভ্যারিয়েন্ট কনফিগার করতে সাহায্য করে। এটি কম্পাইল-টাইম টাইপ নিরাপত্তা দিয়ে সরাসরি স্ট্যান্ডার্ড ইউটিলিটি ক্লাস তৈরি করে।'
        }
      },
      {
        id: 'q-layer-base-element-resets',
        kind: 'mcq',
        topic: 'Custom element defaults in @layer base',
        question: {
          en: 'What type of styling belongs inside the @layer base { ... } block in Tailwind CSS?',
          bn: 'Tailwind CSS-এ @layer base { ... } ব্লকের ভেতরে কোন ধরনের স্টাইলিং রাখা উচিত?'
        },
        options: [
          {
            en: 'Global element resets and default HTML tag typography (such as setting default heading font weights or link colors across all h1, h2, a elements)',
            bn: 'গ্লোবাল এলিমেন্ট রিসেট এবং সাধারণ এইচটিএমএল ট্যাগের ডিফল্ট টাইপোগ্রাফি (যেমন সমস্ত h1, h2, বা a ট্যাগের ডিফল্ট ফন্ট বা লিংক কালার)'
          },
          {
            en: 'Complex interactive navigation dropdown widgets',
            bn: 'জটিল ইন্টারঅ্যাক্টিভ নেভিগেশন ড্রপডাউন উইজেট'
          },
          {
            en: 'Credit card payment processing verification forms',
            bn: 'ক্রেডিট কার্ড পেমেন্ট প্রসেসিংয়ের ভেরিফিকেশন ফর্ম'
          },
          {
            en: 'Full-screen 3D video game animations',
            bn: 'ফুল-স্ক্রিন থ্রিডি ভিডিও গেমের অ্যানিমেশন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Base styles target bare HTML tag selectors rather than class names.',
          bn: 'বেস স্টাইল ক্লাসের নামের বদলে সাধারণ এইচটিএমএল ট্যাগ সিলেক্টরকে টার্গেট করে।'
        },
        explanation: {
          en: '@layer base is designed for global HTML element defaults. It sits at the lowest cascade layer, allowing components and utilities to easily override it.',
          bn: '@layer base হলো এইচটিএমএল ট্যাগের মূল ডিফল্ট নির্ধারণের স্থান। এটি সবার নিচে থাকে যাতে কম্পোনেন্ট বা ইউটিলিটি দিয়ে সহজেই একে পরিবর্তন করা যায়।'
        }
      },
      {
        id: 'q-when-to-extract-components',
        kind: 'mcq',
        topic: 'The threshold rule for component extraction',
        question: {
          en: 'According to Tailwind best practices, when is the appropriate moment to extract a group of utilities into a reusable component?',
          bn: 'Tailwind-এর সেরা অনুশীলন অনুযায়ী, কখন একাধিক ইউটিলিটি ক্লাসকে একটি পুনর্ব্যবহারযোগ্য কম্পোনেন্টে রূপান্তর করার উপযুক্ত সময়?'
        },
        options: [
          {
            en: 'When a pattern is repeated across multiple screens and shares identical structural intent (e.g. primary buttons, form inputs, modal dialogs)',
            bn: 'যখন কোনো প্যাটার্ন একাধিক স্ক্রিনে বারবার ব্যবহৃত হয় এবং তাদের কাজের উদ্দেশ্য হুবহু এক থাকে (যেমন প্রাইমারি বাটন, ফর্ম ইনপুট, মোডাল)'
          },
          {
            en: 'Immediately on the very first HTML element you write in a new project',
            bn: 'নতুন প্রজেক্টের প্রথম যে কোনো এইচটিএমএল উপাদান লেখার সাথে সাথেই'
          },
          {
            en: 'Only on the 31st of December each calendar year',
            bn: 'প্রতিটি ক্যালেন্ডার বছরের কেবল ৩১শে ডিসেম্বর তারিখে'
          },
          {
            en: 'Never; extracting components is strictly forbidden under all circumstances',
            bn: 'কখনোই নয়; কোনো অবস্থাতেই কম্পোনেন্ট তৈরি করা সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Extract when there is real structural repetition across the product.',
          bn: 'প্রজেক্টে যখন সত্যিকার অর্থে কাঠামোগত পুনরাবৃত্তি ঘটে তখনই এক্সট্রাক্ট করুন।'
        },
        explanation: {
          en: 'Extracting too early creates brittle abstractions. Wait until a pattern has proven itself across multiple features before formalizing it as a component.',
          bn: 'তাড়াহুড়া করে ক্লাস বানালে তা সহজে নষ্ট হয়ে যায়। একাধিক জায়গায় ব্যবহারের নিশ্চিত প্রমাণ পাওয়ার পরই কেবল কম্পোনেন্ট তৈরি করা উচিত।'
        }
      },
      {
        id: 'q-css-variables-with-apply',
        kind: 'mcq',
        topic: 'Dynamic runtime theming with CSS variables and Tailwind',
        question: {
          en: 'How can developers combine CSS custom properties with Tailwind utility classes for dynamic runtime theme adjustments?',
          bn: 'ডাইনামিক থিম পরিবর্তনের জন্য ডেভেলপাররা কীভাবে সিএসএস ভ্যারিয়েবলের সাথে Tailwind ইউটিলিটি ক্লাসের সমন্বয় করতে পারেন?'
        },
        options: [
          {
            en: 'By mapping theme tokens in tailwind.config.js to CSS variables (e.g. primary: "var(--color-primary)"), allowing runtime color mutations via inline styles or JavaScript',
            bn: 'tailwind.config.js-এ থিম টোকেনগুলোকে সিএসএস ভ্যারিয়েবলে ম্যাপ করে (যেমন primary: "var(--color-primary)"), যার ফলে রানটাইমে সহজে রঙ বদলানো যায়'
          },
          {
            en: 'By rebooting the web server on every mouse movement',
            bn: 'মাউসের প্রতিটি নড়াচড়ায় ওয়েব সার্ভার রিস্টার্ট করার মাধ্যমে'
          },
          {
            en: 'By deleting the operating system graphics drivers',
            bn: 'অপারেটিং সিস্টেমের গ্রাফিক্স ড্রাইভার মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'Because CSS variables cannot be evaluated by Google Chrome',
            bn: 'কারণ গুগল ক্রোম কোনো সিএসএস ভ্যারিয়েবলের মান পড়তে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Token values referencing var(--custom-var) allow dynamic theme swaps.',
          bn: 'টোকেনের মানে var(--custom-var) বসালে কোড না কেটেই ডাইনামিক থিম চালানো যায়।'
        },
        explanation: {
          en: 'Configuring Tailwind tokens to reference CSS custom variables combines the speed of atomic classes with the dynamic runtime flexibility of CSS variables.',
          bn: 'Tailwind টোকেনকে সিএসএস ভ্যারিয়েবলের সাথে যুক্ত করলে অ্যাটমিক ক্লাসের গতির সাথে রানটাইমে থিম বদলানোর অসাধারণ সুবিধা পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-typography-parlor',
    title: {
      en: 'Typography, Forms & Official Plugins — @tailwindcss/typography, Forms & Aspect-Ratio',
      bn: 'টাইপোগ্রাফি, ফর্ম ও অফিসিয়াল প্লাগিন — @tailwindcss/typography, ফর্ম ও অ্যাসপেক্ট-রেশিও'
    }
  }
};
