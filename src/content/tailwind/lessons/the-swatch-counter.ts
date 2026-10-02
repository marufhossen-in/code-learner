import type { Lesson } from '../../../lib/types';

export const swatchCounterLesson: Lesson = {
  slug: 'the-swatch-counter',
  tech: 'tailwind',
  title: {
    en: 'Utility-First CSS & The JIT Compiler — Atomic Classes, Specificity Wars & Micro-Layouts',
    bn: 'ইউটিলিটি-ফার্স্ট CSS ও JIT কম্পাইলার — অ্যাটমিক ক্লাস, স্পেসিফিসিটি যুদ্ধ ও মাইক্রো-লেআউট'
  },
  summary: {
    en: 'Traditional web development forces developers to constantly invent arbitrary semantic class names, maintain bloated external stylesheets, and fight cascade specificity battles using !important overrides. Tailwind CSS replaces this friction with a utility-first architecture: composing interfaces directly in HTML using atomic, single-purpose utility classes mapped to an immutable design token scale. Powered by a high-speed Just-In-Time (JIT) compiler, Tailwind scans source templates on the fly, generating only the exact CSS rules needed in real time while unlocking dynamic arbitrary values syntax. With flat class-level specificity and zero orphan stylesheet bloat, modifying or removing UI components becomes completely predictable and risk-free.',
    bn: 'চিরাচরিত ওয়েব ডেভেলপমেন্টে ডেভেলপারদের প্রতিনিয়ত মনগড়া সিম্যান্টিক ক্লাসের নাম খুঁজতে হয়, বিশালাকার বাহ্যিক স্টাইলশিট পরিচালনা করতে হয় এবং !important দিয়ে স্পেসিফিসিটি বিরোধ মেটাতে হয়। Tailwind CSS এই ভোগান্তি দূর করে একটি আধুনিক ইউটিলিটি-ফার্স্ট আর্কিটেকচার উপহার দেয়: যেখানে সরাসরি এইচটিএমএল মার্কআপের ভেতরে সুনির্দিষ্ট অ্যাটমিক ক্লাস যুক্ত করে দ্রুত ইন্টারফেস তৈরি করা যায়। এর শক্তিশালী জাস্ট-ইন-টাইম (JIT) কম্পাইলার তাৎক্ষণিকভাবে সোর্স টেমপ্লেট স্ক্যান করে প্রয়োজন অনুযায়ী নিখুঁত সিএসএস রুল তৈরি করে এবং আরবিট্রারি ভ্যালুর সুবিধা দেয়। সমতল স্পেসিফিসিটি এবং অতিরিক্ত কোডের ঝুঁকি না থাকায় যেকোনো কম্পোনেন্ট পরিবর্তন বা মুছে ফেলা সম্পূর্ণ নিরাপদ হয়ে ওঠে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Utility-First Paradigm vs Semantic CSS',
        bn: 'মূল ধারণা: ইউটিলিটি-ফার্স্ট পদ্ধতি বনাম সিম্যান্টিক CSS'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you style modern web user interfaces, writing custom semantic CSS files often leads to ballooning stylesheets, naming fatigue, and stubborn specificity wars. Traditional methodologies like Block Element Modifier (BEM) require you to invent endless class names and fight the cascade across nested selectors. Tailwind CSS solves this through a utility-first methodology: composing single-purpose atomic classes directly within your HTML markup, backed by a fast Just-In-Time (JIT) compiler that generates exact styles on demand.',
        bn: 'যখন আপনি আধুনিক ওয়েব ইউজার ইন্টারফেস তৈরি করেন, তখন আলাদা কাস্টম সিএসএস ফাইল লেখা প্রায়শই ফাইলের আকার বৃদ্ধি, ক্লাসের নাম খোঁজার ক্লান্তি এবং সিলেক্টরের স্পেসিফিসিটি যুদ্ধের জন্ম দেয়। BEM-এর মতো প্রচলিত পদ্ধতিতে অগণিত ক্লাসের নাম উদ্ভাবন করতে হয় এবং নেস্টেড সিলেক্টরে ক্যাসকেডের সাথে লড়াই করতে হয়। Tailwind CSS একটি ইউটিলিটি-ফার্স্ট পদ্ধতির মাধ্যমে এই সমস্যার সমাধান দেয়: যেখানে সরাসরি এইচটিএমএল মার্কআপের ভেতরে একক কাজের উপযোগী অ্যাটমিক ক্লাস যুক্ত করা হয় এবং একটি দ্রুতগতির জাস্ট-ইন-টাইম (JIT) কম্পাইলার প্রয়োজন অনুযায়ী নিখুঁত স্টাইল তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Utility-First CSS',
          def: {
            en: 'Styling architecture where small, single-purpose classes (e.g. p-4, bg-white, flex) are composed directly within HTML markup',
            bn: 'স্টাইলিং ব্যবস্থা যেখানে ছোট একক কাজের উপযোগী ক্লাস (যেমন p-4, bg-white, flex) সরাসরি এইচটিএমএলে যুক্ত করা হয়'
          }
        },
        {
          term: 'Just-In-Time (JIT) Engine',
          def: {
            en: 'Tailwind compilation engine that scans template files on the fly and generates only the exact CSS declarations referenced in markup',
            bn: 'Tailwind-এর কম্পাইলার যা সাথে সাথে সোর্স ফাইল স্ক্যান করে মার্কআপে ব্যবহৃত সিএসএস রুলগুলো তাৎক্ষণিক তৈরি করে'
          }
        },
        {
          term: 'Flat Specificity',
          def: {
            en: 'The property where every utility rule possesses an identical single-class specificity score of (0, 1, 0), eliminating selector wars',
            bn: 'এমন বৈশিষ্ট্য যেখানে প্রতিটি ইউটিলিটি ক্লাসের ক্ষমতা সমান (০, ১, ০) হওয়ায় সিলেক্টরের অগ্রাধিকার নিয়ে কোনো সংঘাত থাকে না'
          }
        },
        {
          term: 'Arbitrary Value Syntax',
          def: {
            en: 'Square-bracket notation (such as top-[17px] or w-[320px]) allowing developers to escape design tokens for rare pixel-perfect requirements',
            bn: 'তৃতীয় বন্ধনী নোটেশন (যেমন top-[17px] বা w-[320px]) যা বিশেষ প্রয়োজনে সরাসরি সুনির্দিষ্ট পিক্সেল মান ব্যবহারের সুযোগ দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why-utility-first',
      text: {
        en: 'Eliminating Specificity Wars and Dead CSS Accumulation',
        bn: 'স্পেসিফিসিটি যুদ্ধ ও অপ্রয়োজনীয় CSS জমা হওয়া রোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional CSS architectures, stylesheets grow monotonically. As projects scale, developers become afraid to delete or modify existing CSS selectors like .user-card-header h3 because it is impossible to know which other pages might inadvertently break. Over time, selectors become deeply nested, forcing developers to resort to !important to override stubborn parent rules.',
        bn: 'প্রচলিত সিএসএস ব্যবস্থায় ফাইলের আকার কেবল বাড়তেই থাকে। প্রজেক্ট বড় হলে ডেভেলপাররা পুরোনো সিলেক্টর (যেমন .user-card-header h3) মুছতে ভয় পান, কারণ অন্য কোন পেজের ডিজাইন ভেঙে যেতে পারে তা বোঝা যায় না। সময়ের সাথে সাথে সিলেক্টরগুলো এত বেশি জটিল হয়ে ওঠে যে বাধ্য হয়ে ডেভেলপারদের !important ব্যবহার করে স্টাইল ওভাররাইড করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind CSS eliminates this maintenance crisis completely. Because styles are applied using single-purpose utility classes directly on HTML elements, every rule shares the exact same single-class specificity. When you delete an HTML component or feature, all of its styling is removed instantly, leaving zero orphan stylesheet debt behind.',
        bn: 'Tailwind CSS এই রক্ষণাবেক্ষণের সংকট পুরোপুরি দূর করে। যেহেতু এইচটিএমএল এলিমেন্টে সরাসরি একক কাজের ইউটিলিটি ক্লাস বসানো হয়, তাই প্রতিটি রুলের অগ্রাধিকার হুবহু সমান থাকে। যখন আপনি কোনো এইচটিএমএল কম্পোনেন্ট বা ফিচার মুছে ফেলেন, তখন তার সমস্ত স্টাইলিং সাথে সাথে দূর হয়ে যায় এবং ফাইলে কোনো বাড়তি সিএসএস জমে থাকে না।'
      }
    },
    {
      type: 'heading',
      id: 'jit-mechanics',
      text: {
        en: 'The Just-In-Time (JIT) Compilation Engine',
        bn: 'জাস্ট-ইন-টাইম (JIT) কম্পাইলেশন ইঞ্জিনের কার্যপ্রণালী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In legacy Tailwind versions, the framework generated tens of thousands of CSS variations ahead of time, resulting in massive 10MB development files that slowed browser developer tools. Modern Tailwind incorporates a built-in JIT engine that operates as a lightning-fast build-step watcher.',
        bn: 'পুরোনো সংস্করণে Tailwind আগে থেকেই হাজার হাজার সিএসএস ভ্যারিয়েশন বানিয়ে রাখত, যার ফলে ডেভেলপমেন্টে ফাইল প্রায় ১০ মেগাবাইট হয়ে ব্রাউজারকে ধীরগতির করে দিত। আধুনিক Tailwind-এ একটি দ্রুতগতির JIT ইঞ্জিন যুক্ত করা হয়েছে যা ফাইল সেভ করার সাথে সাথে ব্যাকগ্রাউন্ডে কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The JIT compiler uses regular expressions to scan your JavaScript, TypeScript, JSX, Vue, or HTML files for class strings. Whenever you write a class like p-4 or an arbitrary value like w-[320px], the compiler creates the matching CSS declaration on the fly. This architecture keeps production CSS bundles extraordinarily small—often under 10KB total.',
        bn: 'এই JIT কম্পাইলার রেগুলার এক্সপ্রেশন দিয়ে আপনার জাভাস্ক্রিপ্ট, টাইপস্ক্রিপ্ট, রিঅ্যাক্ট বা এইচটিএমএল ফাইল স্ক্যান করে ক্লাসের নাম খুঁজে বের করে। আপনি যখনই p-4 বা w-[320px]-এর মতো মান লেখেন, কম্পাইলার তাৎক্ষণিক তার সিএসএস তৈরি করে নেয়। এর ফলে প্রোডাকশন সিএসএস ফাইলের আকার অত্যন্ত ক্ষুদ্র—সাধারণত মাত্র ১০ কিলোবাইটেরও কম হয়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Web Styling Approaches',
        bn: 'কাঠামোগত তুলনা: ওয়েব স্টাইলিং পদ্ধতি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Styling Paradigm', bn: 'স্টাইলিং পদ্ধতি' },
        { en: 'Selector Specificity', bn: 'সিলেক্টর স্পেসিফিসিটি' },
        { en: 'Dead CSS Accumulation', bn: 'অপ্রয়োজনীয় সিএসএস জমা' },
        { en: 'Maintenance & Refactoring', bn: 'রক্ষণাবেক্ষণ ও পরিবর্তন' }
      ],
      rows: [
        [
          { en: 'Tailwind CSS (Utility-First)', bn: 'টেইলউইন্ড সিএসএস (ইউটিলিটি-ফার্স্ট)' },
          { en: 'Flat single-class specificity (0, 1, 0) across all rules', bn: 'সমস্ত রুলের জন্য সমতল একক ক্লাস স্পেসিফিসিটি (০, ১, ০)' },
          { en: 'Zero; unused classes are never compiled into final bundle', bn: 'শূন্য; অব্যবহৃত ক্লাস কখনোই ফাইনাল বান্ডিলে তৈরি হয় না' },
          { en: 'Effortless; delete HTML markup and styling is purged', bn: 'অনায়াস; মার্কআপ মুছলেই স্টাইলিং স্বয়ংক্রিয়ভাবে মুছে যায়' }
        ],
        [
          { en: 'Traditional BEM Semantic CSS', bn: 'চিরাচরিত BEM সিম্যান্টিক সিএসএস' },
          { en: 'Escalating hierarchy leading to nested selector fights', bn: 'ক্রমবর্ধমান জটিলতা যা নেস্টেড সিলেক্টরে সংঘাত ঘটায়' },
          { en: 'High; developers fear deleting old selectors from .css', bn: 'উচ্চ; ডেভেলপাররা পুরোনো সিলেক্টর মুছতে সাহস পান না' },
          { en: 'High friction; requires synchronized edits across two files', bn: 'কঠিন; একই সাথে দুটি ভিন্ন ফাইলে পরিবর্তন করতে হয়' }
        ],
        [
          { en: 'Inline Styles (style="...")', bn: 'ইনলাইন স্টাইল (style="...")' },
          { en: 'Highest specificity (1, 0, 0, 0); cannot use pseudo-classes', bn: 'সর্বোচ্চ স্পেসিফিসিটি (1, 0, 0, 0); সিউডো-ক্লাস বা মিডিয়া কোয়েরি চলে না' },
          { en: 'No external stylesheet; inflates HTML DOM size heavily', bn: 'আলাদা ফাইল নেই; কিন্তু এইচটিএমএল ডমের আকার অনেক বাড়িয়ে দেয়' },
          { en: 'Painful; no media queries, hover states, or design tokens', bn: 'কষ্টসাধ্য; হোভার স্টেট, রেসপন্সিভ ব্রেকপয়েন্ট বা থিম কাজ করে না' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: JIT Compiler & Atomic CSS Generation',
        bn: 'বাস্তব কোড সিমুলেশন: JIT কম্পাইলার ও অ্যাটমিক CSS উৎপাদন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind CSS JIT Utility Engine in Node.js

class TailwindJITEngine {
  private utilityMap: Record<string, string> = {
    'p-4': 'padding: 1rem /* 16px */;',
    'p-6': 'padding: 1.5rem /* 24px */;',
    'bg-white': 'background-color: rgb(255 255 255);',
    'bg-slate-900': 'background-color: rgb(15 23 42);',
    'rounded-xl': 'border-radius: 0.75rem /* 12px */;',
    'shadow-md': 'box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);',
    'flex': 'display: flex;',
    'items-center': 'align-items: center;'
  };

  // Parses class string from HTML markup and compiles minimal CSS rules
  compileClasses(classString: string) {
    const tokens = classString.split(/\\s+/).filter(Boolean);
    const rules: string[] = [];

    for (const token of tokens) {
      if (this.utilityMap[token]) {
        rules.push('.' + token + ' { ' + this.utilityMap[token] + ' }');
      } else if (token.startsWith('w-[') && token.endsWith(']')) {
        // Arbitrary value JIT syntax
        const val = token.slice(3, -1);
        const escaped = token.replace('[', '\\\\[').replace(']', '\\\\]');
        rules.push('.' + escaped + ' { width: ' + val + '; }');
      }
    }

    return {
      tokensFound: tokens.length,
      generatedRulesCount: rules.length,
      cssOutput: rules.join('\\n')
    };
  }
}

const engine = new TailwindJITEngine();
const htmlClasses = 'flex items-center p-4 bg-white rounded-xl shadow-md w-[320px]';
const result = engine.compileClasses(htmlClasses);

console.log('Total utility tokens scanned:', result.tokensFound);
// -> Total utility tokens scanned: 7
console.log('Total JIT CSS rules generated:', result.generatedRulesCount);
// -> Total JIT CSS rules generated: 7
console.log('Generated CSS contains padding 16px:', result.cssOutput.includes('16px'));
// -> Generated CSS contains padding 16px: true
console.log('Generated CSS contains arbitrary width 320px:', result.cssOutput.includes('320px'));
// -> Generated CSS contains arbitrary width 320px: true`,
      caption: {
        en: 'Simulation: scans 7 tokens, generating 7 exact JIT CSS rules including padding 16px and arbitrary width 320px',
        bn: 'সিমুলেশন: ৭ টি টোকেন স্ক্যান করে ১৬ পিক্সেল প্যাডিং ও ৩২০ পিক্সেল প্রস্থের আরবিট্রারি রুলসহ মোট ৭ টি JIT CSS রুল তৈরি করে'
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
        en: 'Rule 1: Never dynamically construct class names using string concatenation. Writing class="text-" + color + "-500" prevents the JIT regex scanner from detecting class names during static analysis.',
        bn: 'নিয়ম ১: স্ট্রিং জোড়া লাগিয়ে ডাইনামিক ক্লাসের নাম তৈরি করবেন না। class="text-" + color + "-500" লিখলে JIT কম্পাইলারের স্ট্যাটিক স্ক্যানার কোড থেকে ক্লাসের নাম খুঁজে পেতে ব্যর্থ হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Prefer design token classes over arbitrary values whenever possible. Use p-4 instead of p-[16px] to maintain consistent vertical rhythm and spacing discipline across the development team.',
        bn: 'নিয়ম ২: আরবিট্রারি ভ্যালুর চেয়ে সর্বদা ডিজাইন টোকেন ক্লাসকে প্রাধান্য দিন। ডিজাইনের সামঞ্জস্য বজায় রাখতে p-[16px]-এর বদলে অফিশিয়াল p-4 ব্যবহার করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Enforce class sorting in CI using the official Prettier plugin. Running prettier-plugin-tailwindcss standardizes class ordering across all contributors, eliminating noisy git diffs.',
        bn: 'নিয়ম ৩: অফিশিয়াল Prettier প্লাগিন দিয়ে স্বয়ংক্রিয়ভাবে ক্লাসের ক্রম ঠিক রাখুন। prettier-plugin-tailwindcss ব্যবহার করলে সমস্ত ডেভেলপারের কোড একরকম থাকবে এবং গিট ডিফ পরিষ্কার থাকবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Avoid prematurely extracting utility classes into custom CSS files. Reusing markup components (e.g. React or Vue components) is cleaner and more maintainable than creating custom @apply abstractions.',
        bn: 'নিয়ম ৪: শুরুতেই ইউটিলিটি ক্লাসগুলোকে কাস্টম সিএসএস ফাইলে সরিয়ে নেবেন না। কাস্টম @apply ক্লাসের বদলে রিঅ্যাক্ট বা ভিউ কম্পোনেন্ট তৈরি করা অনেক বেশি কার্যকর ও টেকসই।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-swatch-ex1',
      kind: 'mcq',
      topic: 'Utility-first CSS vs BEM methodology',
      question: {
        en: 'Why does Tailwind CSS utility-first approach prevent dead CSS accumulation compared to traditional BEM stylesheets?',
        bn: 'চিরাচরিত BEM স্টাইলশিটের তুলনায় Tailwind CSS-এর ইউটিলিটি-ফার্স্ট পদ্ধতি কেন অপ্রয়োজনীয় সিএসএস জমা হওয়া রোধ করে?'
      },
      options: [
        {
          en: 'Styles are tied directly to HTML elements; deleting or modifying markup automatically removes the styling without leaving orphaned CSS rules behind',
          bn: 'স্টাইল সরাসরি এইচটিএমএল উপাদানের সাথে যুক্ত থাকে; ফলে মার্কআপ মুছে ফেললে কোনো অকেজো সিএসএস রুল অবশিষ্ট না থেকেই স্টাইল দূর হয়ে যায়'
        },
        {
          en: 'Tailwind deletes your source code files automatically when they reach 1 megabyte',
          bn: 'ফাইলের আকার ১ মেগাবাইট ছুঁলেই Tailwind সোর্স কোড নিজ থেকে মুছে ফেলে'
        },
        {
          en: 'BEM CSS files can only be read on Linux servers and fail on Windows',
          bn: 'BEM সিএসএস কেবল লিনাক্স সার্ভারেই পড়া যায় এবং উইন্ডোজে অচল হয়ে পড়ে'
        },
        {
          en: 'Because Tailwind disables the browser developer tools permanently',
          bn: 'কারণ Tailwind ব্রাউজারের ডেভেলপার টুলস স্থায়ীভাবে বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when you delete an HTML component styled with utility classes.',
        bn: 'ইউটিলিটি ক্লাস দিয়ে তৈরি কোনো এইচটিএমএল উপাদান মুছে দিলে কী ঘটে তা চিন্তা করুন।'
      },
      explanation: {
        en: 'Because utility classes are atomic and reusable, styles live directly on the markup. Deleting markup purges the styles without creating orphan stylesheet bloat.',
        bn: 'যেহেতু ইউটিলিটি ক্লাসগুলো সরাসরি মার্কআপের ওপর থাকে, তাই মার্কআপ মুছে ফেলার সাথে সাথে স্টাইলিংও দূর হয়ে যায় এবং বাড়তি সিএসএস ফাইলের আকার বাড়ে না।'
      }
    },
    {
      id: 'tw-swatch-ex2',
      kind: 'mcq',
      topic: 'Flat specificity in Tailwind CSS',
      question: {
        en: 'What does "flat specificity" mean in the context of Tailwind CSS utility classes?',
        bn: 'Tailwind CSS ইউটিলিটি ক্লাসের ক্ষেত্রে "সমতল স্পেসিফিসিটি" বা Flat Specificity কথাটির অর্থ কী?'
      },
      options: [
        {
          en: 'Every utility rule possesses the exact same single-class selector weight of (0, 1, 0), completely eliminating nested selector conflicts and !important wars',
          bn: 'প্রতিটি ইউটিলিটি ক্লাসের সিলেক্টর পাওয়ার হুবহু সমান (০, ১, ০), যার ফলে নেস্টেড সিলেক্টরের বিরোধ ও !important-এর যুদ্ধ চিরতরে বন্ধ হয়ে যায়'
        },
        {
          en: 'All HTML elements are rendered with a 2D flat appearance with no 3D transforms',
          bn: 'সমস্ত এইচটিএমএল উপাদানকে কোনো থ্রিডি রূপান্তর ছাড়াই ফ্ল্যাট আকারে প্রদর্শন করা হয়'
        },
        {
          en: 'The website can only be viewed on flat desktop computer monitors',
          bn: 'ওয়েবসাইটটি কেবল সমতল ডেস্কটপ কম্পিউটার স্ক্রিনেই প্রদর্শন করা সম্ভব'
        },
        {
          en: 'It compresses all image files into flat bitmap textures',
          bn: 'এটি সমস্ত ছবির ফাইলকে কমপ্রেস করে ফ্ল্যাট বিটম্যাপে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Class-level specificity ensures all utility rules compete on equal footing.',
        bn: 'একক ক্লাস স্পেসিফিসিটি নিশ্চিত করে যে সমস্ত রুল সমমর্যাদায় অবস্থান করে।'
      },
      explanation: {
        en: 'Every generated utility rule has the weight of a single class. This guarantees that CSS specificity wars between competing selectors are eliminated by design.',
        bn: 'প্রতিটি তৈরি হওয়া ইউটিলিটি ক্লাসের শক্তি ঠিক একটি একক ক্লাসের সমান। এর ফলে বিভিন্ন সিলেক্টরের মাঝে অগ্রাধিকারের সংঘাত গোড়া থেকেই নির্মূল হয়।'
      }
    },
    {
      id: 'tw-swatch-ex3',
      kind: 'mcq',
      topic: 'How the JIT compiler scans templates',
      question: {
        en: 'Why should developers avoid writing dynamic class names like class={"text-" + color + "-500"} in Tailwind CSS?',
        bn: 'Tailwind CSS-এ কেন class={"text-" + color + "-500"}-এর মতো ডাইনামিক নাম লেখা থেকে বিরত থাকা উচিত?'
      },
      options: [
        {
          en: 'The JIT compiler scans source files with static regex pattern matching; fragmented class names cannot be detected, causing the CSS rule to not be generated',
          bn: 'JIT কম্পাইলার স্ট্যাটিক রেজেক্সের মাধ্যমে কোড স্ক্যান করে; ফলে আংশিক বা ভাঙা ক্লাসের নাম সে চিনতে পারে না এবং প্রয়োজনীয় সিএসএস তৈরি হয় না'
        },
        {
          en: 'JavaScript engines crash when string concatenation is used inside JSX',
          bn: 'জেএসএক্স-এর ভেতরে স্ট্রিং জোড়া লাগালে জাভাস্ক্রিপ্ট ইঞ্জিন সাথে সাথে ক্র্যাশ করে'
        },
        {
          en: 'Tailwind CSS does not support any text colors ending in 500',
          bn: 'Tailwind CSS-এ ৫০০ দিয়ে শেষ হওয়া কোনো টেক্সট কালার সমর্থন করে না'
        },
        {
          en: 'Because dynamic classes cause web servers to lose internet connectivity',
          bn: 'কারণ ডাইনামিক ক্লাসের কারণে ওয়েব সার্ভারের ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The JIT engine reads source code as static text without executing JavaScript.',
        bn: 'JIT ইঞ্জিন কোড রান না করে সাধারণ টেক্সট হিসেবে পড়ে ক্লাসের নাম খোঁজে।'
      },
      explanation: {
        en: 'Tailwind JIT scans source files using regular expressions. It does not execute JavaScript, so complete class names must exist as unbroken strings in the source code.',
        bn: 'Tailwind JIT রেজেক্স দিয়ে ফাইল স্ক্যান করে। এটি জাভাস্ক্রিপ্ট রান করে না, তাই সোর্স কোডে ক্লাসের পুরো নামটি আস্ত স্ট্রিং হিসেবে থাকা আবশ্যক।'
      }
    },
    {
      id: 'tw-swatch-ex4',
      kind: 'mcq',
      topic: 'Arbitrary values syntax in Tailwind CSS',
      question: {
        en: 'When should arbitrary values syntax (such as top-[17px] or bg-[#1da1f2]) be used in Tailwind projects?',
        bn: 'Tailwind প্রজেক্টে কখন আরবিট্রারি ভ্যালু সিনট্যাক্স (যেমন top-[17px] বা bg-[#1da1f2]) ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'Sparingly, for one-off pixel-perfect requirements or legacy integrations where a matching design token does not exist in the configured theme',
          bn: 'খুব সতর্কতার সাথে, কেবলমাত্র বিশেষ পিক্সেল-পারফেক্ট প্রয়োজন বা পুরোনো কোডের ক্ষেত্রে যেখানে থিমে কোনো নির্দিষ্ট ডিজাইন টোকেন নেই'
        },
        {
          en: 'On every single HTML element instead of standard utility classes',
          bn: 'সাধারণ ইউটিলিটি ক্লাসের বদলে প্রতিটি এইচটিএমএল উপাদানে বাধ্যতামূলকভাবে'
        },
        {
          en: 'Only when developing mobile apps for Android devices',
          bn: 'কেবলমাত্র অ্যান্ড্রয়েড ডিভাইসের জন্য মোবাইল অ্যাপ তৈরির সময়'
        },
        {
          en: 'Whenever the web application requires SQL database queries',
          bn: 'যখনই ওয়েব অ্যাপ্লিকেশনে এসকিউএল ডেটাবেজ কোয়েরি চালানোর প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use design tokens for consistency; use arbitrary values only for exceptional edge cases.',
        bn: 'সামঞ্জস্যের জন্য টোকেন ব্যবহার করুন; কেবল ব্যতিক্রমী প্রয়োজনে আরবিট্রারি মান নিন।'
      },
      explanation: {
        en: 'Arbitrary values give developers escape hatches for edge cases without leaving the utility syntax. However, standard design tokens should be preferred for consistency.',
        bn: 'আরবিট্রারি ভ্যালু ডেভেলপারদের বিশেষ ক্ষেত্রে নিয়ম ভাঙার সুযোগ দেয়। তবে পুরো প্রজেক্টে সামঞ্জস্য বজায় রাখতে নিয়মিত ডিজাইন টোকেন ব্যবহার করাই শ্রেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-swatch-counter-quiz',
    title: {
      en: 'Utility-First CSS & JIT Compiler Quiz',
      bn: 'ইউটিলিটি-ফার্স্ট CSS ও JIT কম্পাইলার কুইজ'
    },
    questions: [
      {
        id: 'q-jit-performance-benefit',
        kind: 'mcq',
        topic: 'JIT compilation speed and production bundle sizes',
        question: {
          en: 'How does Tailwind Just-In-Time (JIT) compiler ensure production stylesheets remain extremely small (often under 10KB)?',
          bn: 'Tailwind-এর জাস্ট-ইন-টাইম (JIT) কম্পাইলার কীভাবে নিশ্চিত করে যে প্রোডাকশন স্টাইলশিটের আকার অত্যন্ত ক্ষুদ্র (প্রায়শই ১০ কেবি-র নিচে) থাকবে?'
        },
        options: [
          {
            en: 'It scans templates and compiles only the specific utility classes actually used in markup, completely discarding the rest of the framework catalogue',
            bn: 'এটি টেমপ্লেট স্ক্যান করে কেবলমাত্র মার্কআপে ব্যবহৃত সুনির্দিষ্ট ক্লাসগুলোই তৈরি করে এবং ফ্রেমওয়ার্কের বাকি সমস্ত অপ্রয়োজনীয় রুল সম্পূর্ণ বাদ দেয়'
          },
          {
            en: 'It deletes all user comments and HTML attributes from production builds',
            bn: 'এটি প্রোডাকশন বিল্ড থেকে ব্যবহারকারীর সমস্ত কমেন্ট ও এইচটিএমএল অ্যাট্রিবিউট মুছে ফেলে'
          },
          {
            en: 'It limits the maximum number of CSS rules on any website to exactly 5',
            bn: 'এটি যেকোনো ওয়েবসাইটে সিএসএস রুলের মোট সংখ্যা কঠোরভাবে মাত্র ৫টিতে সীমাবদ্ধ রাখে'
          },
          {
            en: 'It converts CSS stylesheets into compressed MP3 audio files',
            bn: 'এটি সিএসএস স্টাইলশিটকে কমপ্রেস করে এমপিথ্রি অডিও ফাইলে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'On-demand compilation generates only referenced classes.',
          bn: 'প্রয়োজনভিত্তিক কম্পাইলেশন কেবল উল্লেখিত ক্লাসগুলোকেই তৈরি করে।'
        },
        explanation: {
          en: 'Unlike legacy ahead-of-time generation, the JIT engine generates CSS on demand based exclusively on classes discovered during template file scanning.',
          bn: 'পুরোনো পদ্ধতির বিপরীতে JIT ইঞ্জিন টেমপ্লেট ফাইল স্ক্যান করে কেবল খুঁজে পাওয়া ক্লাসগুলোর জন্যই সিএসএস তৈরি করে, ফলে ফাইলের আকার অনেক ছোট থাকে।'
        }
      },
      {
        id: 'q-prettier-sorting-importance',
        kind: 'mcq',
        topic: 'Class sorting consistency with prettier-plugin-tailwindcss',
        question: {
          en: 'Why is automated class sorting using prettier-plugin-tailwindcss recommended for large software teams?',
          bn: 'বড় সফটওয়্যার টিমে prettier-plugin-tailwindcss দিয়ে ক্লাসের ক্রম স্বয়ংক্রিয়ভাবে সাজানো কেন সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'It establishes a predictable reading order for utilities and prevents noisy git diffs caused by developers adding classes in different arbitrary sequences',
            bn: 'এটি ইউটিলিটি ক্লাসের একটি সুনির্দিষ্ট ক্রম তৈরি করে এবং ডেভেলপারদের এলোমেলোভাবে ক্লাস যোগ করার কারণে হওয়া বিভ্রান্তিকর গিট ডিফ দূর করে'
          },
          {
            en: 'It speeds up client broadband download bandwidth by 50 percent',
            bn: 'এটি ক্লায়েন্টের ব্রডব্যান্ড ডাউনলোড স্পিড ৫০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'It encrypts the HTML source code to hide it from search engines',
            bn: 'এটি সার্চ ইঞ্জিনের কাছ থেকে এইচটিএমএল কোড লুকানোর জন্য তা এনক্রিপ্ট করে'
          },
          {
            en: 'Because browsers reject HTML elements with more than 3 classes',
            bn: 'কারণ ৩ টির বেশি ক্লাস থাকা এইচটিএমএল উপাদান ব্রাউজার প্রত্যাখ্যান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consistent class ordering makes code reviews clean and diffs readable.',
          bn: 'একই রকম ক্লাসের ক্রম কোড রিভিউ সহজ করে এবং গিট ডিফ পরিষ্কার রাখে।'
        },
        explanation: {
          en: 'Sorting classes automatically ensures everyone follows the exact same ordering convention. Diffs only show real changes rather than accidental class reorderings.',
          bn: 'স্বয়ংক্রিয়ভাবে ক্লাস সাজালে সবাই একই নিয়ম মেনে চলে। ফলে গিট ডিফে কেবল আসল পরিবর্তনগুলোই দেখা যায়, এলোমেলো ক্লাসের স্থানান্তর নয়।'
        }
      },
      {
        id: 'q-design-token-rhythm',
        kind: 'mcq',
        topic: 'Design tokens vs arbitrary pixel values',
        question: {
          en: 'What major design system problem arises when developers overuse arbitrary values like p-[15px] instead of standard tokens like p-4?',
          bn: 'স্ট্যান্ডার্ড টোকেন p-4-এর বদলে ডেভেলপাররা যখন p-[15px]-এর মতো আরবিট্রারি মান অতিরিক্ত ব্যবহার করে তখন ডিজাইন সিস্টেমে কী বড় সমস্যা দেখা দেয়?'
        },
        options: [
          {
            en: 'It breaks visual consistency and spacing rhythm across pages, creating chaotic micro-spacing variations that degrade interface quality',
            bn: 'এটি বিভিন্ন পেজের মাঝে ভিজ্যুয়াল সামঞ্জস্য ও স্পেসিংয়ের ছন্দ নষ্ট করে এবং বিশৃঙ্খল পার্থক্যের সৃষ্টি করে যা ইন্টারফেসের মান কমিয়ে দেয়'
          },
          {
            en: 'It causes the server hard disk to run out of storage space',
            bn: 'এর ফলে সার্ভারের হার্ডডিস্কের সমস্ত খালি জায়গা ফুরিয়ে যায়'
          },
          {
            en: 'It forces the client browser to refresh every 2 seconds',
            bn: 'এটি ক্লায়েন্ট ব্রাউজারকে প্রতি ২ সেকেন্ড পরপর রিলোড হতে বাধ্য করে'
          },
          {
            en: 'It transforms all text into uppercase letters automatically',
            bn: 'এটি সমস্ত লেখাকে স্বয়ংক্রিয়ভাবে বড় হাতের অক্ষরে পরিণত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Design tokens enforce a cohesive aesthetic and spacing harmony.',
          bn: 'ডিজাইন টোকেন পুরো অ্যাপে নান্দনিক ভারসাম্য ও স্পেসিংয়ের শৃঙ্খলা বজায় রাখে।'
        },
        explanation: {
          en: 'Design systems rely on constraints. Replacing curated scales with chaotic arbitrary numbers produces disjointed UI spacing and destroys visual harmony.',
          bn: 'ডিজাইন সিস্টেমের মূল ভিত্তি হলো নির্দিষ্ট নিয়ম। সুনির্দিষ্ট স্কেলের বদলে ইচ্ছেমতো সংখ্যা বসালে ইউআইয়ের শ্রী নষ্ট হয় এবং ডিজাইনের ছন্দ হারিয়ে যায়।'
        }
      },
      {
        id: 'q-utility-vs-inline-styles',
        kind: 'mcq',
        topic: 'Capabilities of utility classes over inline styles',
        question: {
          en: 'Why is utility-first CSS vastly more capable and powerful than writing inline styles (e.g. style="padding: 16px")?',
          bn: 'ইনলাইন স্টাইল (যেমন style="padding: 16px") লেখার চেয়ে ইউটিলিটি-ফার্স্ট CSS কেন অনেক বেশি শক্তিশালী ও কার্যকর?'
        },
        options: [
          {
            en: 'Utility classes seamlessly support pseudo-classes (hover:, focus:), responsive media queries (md:, lg:), dark mode variants (dark:), and CSS custom properties',
            bn: 'ইউটিলিটি ক্লাসগুলো অনায়াসে সিউডো-ক্লাস (hover:, focus:), রেসপন্সিভ মিডিয়া কোয়েরি (md:, lg:), ডার্ক মোড ভ্যারিয়েন্ট (dark:) ও ভ্যারিয়েবল সমর্থন করে'
          },
          {
            en: 'Inline styles are completely forbidden by modern web standards and rejected by Chrome',
            bn: 'আধুনিক ওয়েব স্ট্যান্ডার্ডে ইনলাইন স্টাইল পুরোপুরি নিষিদ্ধ এবং ক্রোম তা বাতিল করে দেয়'
          },
          {
            en: 'Inline styles cause client computers to shut down unexpectedly',
            bn: 'ইনলাইন স্টাইল ব্যবহার করলে ক্লায়েন্টের কম্পিউটার হঠাৎ বন্ধ হয়ে যায়'
          },
          {
            en: 'Utility classes can only be executed by high-end graphics cards (GPUs)',
            bn: 'ইউটিলিটি ক্লাস কেবল উচ্চক্ষমতাসম্পন্ন গ্রাফিক্স কার্ড (GPU) দিয়েই চালানো সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about hover states, responsive breakpoints, and dark mode.',
          bn: 'হোভার স্টেট, রেসপন্সিভ ব্রেকপয়েন্ট এবং ডার্ক মোডের কথা ভাবুন।'
        },
        explanation: {
          en: 'Inline styles cannot handle hover states, media query breakpoints, or dark mode. Tailwind utility classes give you the full power of modern CSS with inline-like velocity.',
          bn: 'ইনলাইন স্টাইলে হোভার, মিডিয়া কোয়েরি বা ডার্ক মোড করা যায় না। Tailwind ইউটিলিটি ক্লাস আধুনিক সিএসএসের সমস্ত ক্ষমতা ইনলাইন স্টাইলের মতো দ্রুতগতিতে ব্যবহারের সুযোগ দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-master-pattern-book',
    title: {
      en: 'Design Tokens & Theme Customization — Spacing Scale, Color Palette & Extending Tailwind',
      bn: 'ডিজাইন টোকেন ও থিম কাস্টমাইজেশন — স্পেসিং স্কেল, কালার প্যালেট ও টেইলউইন্ড এক্সটেনশন'
    }
  }
};
