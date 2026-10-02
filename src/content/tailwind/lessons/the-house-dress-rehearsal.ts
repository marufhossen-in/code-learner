import type { Lesson } from '../../../lib/types';

export const houseDressRehearsalLesson: Lesson = {
  slug: 'the-house-dress-rehearsal',
  tech: 'tailwind',
  title: {
    en: 'Production Optimization, Purging & Tailwind v4 Architecture — Tree-Shaking, Bundle Budgets & Best Practices',
    bn: 'প্রোডাকশন অপটিমাইজেশন, পার্জিং ও টেইলউইন্ড ৪ — ট্রি-শেকিং ও বান্ডিল বাজেট'
  },
  summary: {
    en: 'Deploying modern web applications requires ruthless asset optimization to guarantee lightning-fast page performance. Unlike traditional stylesheets that grow larger with every added feature, Tailwind CSS bundle sizes scale with the breadth of your design vocabulary rather than application volume. The build-time content scanner reads template files, extracts active utility class tokens, and discards millions of unused CSS declarations, producing minified production stylesheets that consistently remain under 10KB. Understanding how content scanning operates prevents common production defects like dynamic string concatenation bugs. Looking ahead, Tailwind CSS v4 revolutionizes the developer experience with the Oxide Rust engine, zero-configuration build tooling, and native CSS-first @theme declarations.',
    bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন সফলভাবে ডিপ্লয় করতে দ্রুতগতির পেজ লোডের জন্য ফাইলের আকার ক্ষুদ্র রাখা আবশ্যক। সাধারণ সিএসএসে নতুন পেজ যোগ করলে ফাইলের আকার বাড়লেও Tailwind CSS-এ ফাইলের আকার কোডের লাইনের ওপর নয় বরং ব্যবহৃত টোকেনের ওপর নির্ভর করে। বিল্ড-টাইমে এর কনটেন্ট স্ক্যানার টেমপ্লেট ফাইল পড়ে কেবল ব্যবহৃত ক্লাসগুলো সংগ্রহ করে এবং লাখ লাখ অপ্রয়োজনীয় সিএসএস বাদ দিয়ে দেয়, যার ফলে ফাইনাল ফাইলের আকার প্রায়শই ১০ কেবির নিচে থাকে। কনটেন্ট স্ক্যানিং কীভাবে কাজ করে তা জানা ডাইনামিক স্ট্রিং জনিত বাগ এড়াতে সহায়তা করে। অপরদিকে নতুন Tailwind CSS v4 এর Oxide রাস্ট ইঞ্জিন, কনফিগ-বিহীন টুলিং এবং নেটিভ সিএসএস @theme ঘোষণার মাধ্যমে ডেভেলপমেন্টকে আরও দ্রুতগতির করে তুলেছে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Production Tree-Shaking and Bundle Budgets',
        bn: 'মূল ধারণা: প্রোডাকশন ট্রি-শেকিং ও বান্ডিল বাজেট'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy a web application to production, delivering lightweight stylesheets is critical for fast page load speeds and search engine optimization. In traditional web development, CSS bundle sizes grow proportionally with every new feature added to the project. Tailwind CSS reverses this growth curve through content scanning and automatic tree-shaking. It compiles only the specific utility classes actually used in your templates into a minified production stylesheet that rarely exceeds 10KB.',
        bn: 'যখন আপনি কোনো ওয়েব অ্যাপ্লিকেশন প্রোডাকশনে ডিপ্লয় করেন, তখন দ্রুত পেজ লোড এবং সার্চ ইঞ্জিন অপ্টিমাইজেশনের জন্য ছোট আকারের স্টাইলশিট অত্যন্ত জরুরি। চিরাচরিত ওয়েব ডেভেলপমেন্টে প্রতিটি নতুন ফিচার বা পেজ যোগ করার সাথে সাথে সিএসএস ফাইলের আকার ক্রমাগত বাড়তেই থাকে। Tailwind CSS কনটেন্ট স্ক্যানিং এবং স্বয়ংক্রিয় ট্রি-শেকিংয়ের মাধ্যমে এই সমস্যার সমাধান দেয়। এটি আপনার টেমপ্লেটে ব্যবহৃত সুনির্দিষ্ট ইউটিলিটি ক্লাসগুলোকে খুঁজে নিয়ে একটি ক্ষুদ্র প্রোডাকশন স্টাইলশিট তৈরি করে যার আকার সাধারণত মাত্র ১০ কিলোবাইটের নিচে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Content Scanner (Purge)',
          def: {
            en: 'Build-time engine that extracts class string tokens from template files and generates CSS exclusively for matched utilities',
            bn: 'বিল্ড-টাইম ইঞ্জিন যা টেমপ্লেট ফাইল স্ক্যান করে ব্যবহৃত ক্লাসগুলো খুঁজে নেয় এবং কেবল সেগুলোর জন্যই সিএসএস তৈরি করে'
          }
        },
        {
          term: 'Vocabulary Scaling Law',
          def: {
            en: 'Principle where ten thousand repetitions of p-4 generate .p-4 exactly once, making bundle size depend on unique classes rather than HTML volume',
            bn: 'এমন নীতি যেখানে ১০,০০০ বার p-4 ব্যবহার করলেও সিএসএসে এটি মাত্র একবার আসে, ফলে ফাইলের আকার এইচটিএমএলের সংখ্যার ওপর বাড়ে না'
          }
        },
        {
          term: 'Safelist Configuration',
          def: {
            en: 'Explicit array in tailwind.config instructing the compiler to generate specific classes even if they do not appear as literals in templates',
            bn: 'কনফিগারেশনের একটি তালিকা যা কম্পাইলারকে নির্দেশ করে টেমপ্লেটে সরাসরি না থাকলেও নির্দিষ্ট ক্লাসগুলো তৈরি করে রাখতে'
          }
        },
        {
          term: 'Tailwind CSS v4 (Oxide Engine)',
          def: {
            en: 'Next-generation architecture written in Rust delivering sub-millisecond builds, zero-config detection, and native CSS @theme blocks',
            bn: 'রাস্টে তৈরি পরবর্তী প্রজন্মের আর্কিটেকচার যা মিলিসেকেন্ডে বিল্ড, কনফিগ ছাড়া কাজ এবং সিএসএসে সরাসরি @theme সুবিধা দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'content-scanning-mechanics',
      text: {
        en: 'How Content Scanning Works and the Dynamic Class Pitfall',
        bn: 'কনটেন্ট স্ক্যানিংয়ের কার্যপ্রণালী ও ডাইনামিক ক্লাসের ফাঁদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind build-time scanner reads all files declared in your content configuration. It uses a regular expression to match word characters without executing JavaScript. If a class name like bg-blue-600 appears as a literal string in your file, Tailwind generates the corresponding CSS rule in the production stylesheet.',
        bn: 'Tailwind-এর বিল্ড-টাইম স্ক্যানার কনফিগারেশনে উল্লিখিত সমস্ত ফাইল পড়ে। এটি কোনো জাভাস্ক্রিপ্ট রান না করে রেগুলার এক্সপ্রেশন দিয়ে ক্লাসের নাম খোঁজে। আপনার ফাইলে bg-blue-600 নামটি আস্ত স্ট্রিং হিসেবে থাকলে Tailwind প্রোডাকশন ফাইলে তার সিএসএস তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This static scanning mechanism explains why dynamic string concatenation breaks in production. Writing class="text-" + color + "-500" produces broken styles because the scanner sees fragmented strings rather than complete class tokens. Always write complete unbroken class literals, or declare dynamic regex patterns inside the safelist array in tailwind.config.js.',
        bn: 'এই স্ট্যাটিক স্ক্যানিংয়ের কারণেই স্ট্রিং জোড়া লাগিয়ে ক্লাস বানালে প্রোডাকশনে ডিজাইন ভেঙে যায়। class="text-" + color + "-500" লিখলে স্ক্যানার ভাঙা অংশ দেখে এবং কোনো সিএসএস তৈরি করে না। সর্বদা পুরো ক্লাসের নাম লিখুন, অথবা tailwind.config.js-এর safelist অ্যারেতে রেজেক্স প্যাটার্ন যুক্ত করে দিন।'
      }
    },
    {
      type: 'heading',
      id: 'bundle-budgets',
      text: {
        en: 'The Vocabulary Law: Why Tailwind Stylesheets Stay Under 10KB',
        bn: 'শব্দভাণ্ডারের নীতি: কেন Tailwind স্টাইলশিট ১০ কেবি-র নিচে থাকে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional CSS architectures, every new page requires new classes, causing stylesheet sizes to climb indefinitely from 200KB to over 2MB. In contrast, Tailwind CSS scales with the breadth of your design vocabulary rather than the number of pages.',
        bn: 'চিরাচরিত সিএসএসে প্রতিটি নতুন পেজের জন্য নতুন ক্লাস লিখতে হয়, ফলে ফাইলের আকার ২০০ কেবি থেকে বেড়ে ২ মেগাবাইট পর্যন্ত পৌঁছে যায়। অপরদিকে Tailwind CSS-এ ফাইলের আকার পেজের সংখ্যার ওপর নির্ভর করে না বরং ব্যবহৃত ডিজাইন টোকেনের বৈচিত্র্যের ওপর নির্ভর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Whether your web application contains 5 components or 5,000 components, utility classes like flex, p-4, items-center, and bg-white are declared exactly once in the compiled CSS. Because production web interfaces reuse the same consistent design system tokens, production bundles consistently weigh under 10KB gzipped.',
        bn: 'আপনার অ্যাপে ৫টি উপাদান থাকুক কিংবা ৫,০০০টি উপাদান থাকুক, flex, p-4, items-center এবং bg-white-এর মতো ইউটিলিটিগুলো সিএসএসে ঠিক একবারই তৈরি হয়। যেহেতু পুরো প্রজেক্টে একই ডিজাইন টোকেন বারবার ব্যবহৃত হয়, তাই প্রোডাকশনে জিপ করা ফাইলের আকার সবসময় ১০ কেবি-র নিচেই থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'tailwind-v4-preview',
      text: {
        en: 'The Tailwind CSS v4 Evolution: Oxide Engine and CSS-First Theme',
        bn: 'Tailwind CSS v4 বিবর্তন: Oxide ইঞ্জিন ও CSS-ফার্স্ট থিম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind CSS v4 introduces a major architectural evolution powered by the Oxide engine, completely rewritten in Rust. It compiles stylesheets up to ten times faster than v3 while consuming minimal memory during builds.',
        bn: 'Tailwind CSS v4 সম্পূর্ণ রাস্টে তৈরি Oxide ইঞ্জিনের মাধ্যমে একটি বড় কাঠামোগত পরিবর্তন এনেছে। এটি আগের ৩ নম্বর ভার্সনের চেয়ে দশ গুণ দ্রুতগতিতে সিএসএস তৈরি করে এবং মেমোরির খরচ অনেক কমিয়ে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Furthermore, v4 adopts a CSS-first configuration model, deprecating tailwind.config.js in favor of native CSS @theme blocks. You import Tailwind using @import "tailwindcss" and customize theme tokens directly inside your CSS file using modern CSS custom properties.',
        bn: 'তাছাড়া ৪ নম্বর ভার্সনে tailwind.config.js ফাইলের ঝামেলা দূর করে সরাসরি সিএসএসের ভেতরে @theme ব্লক ব্যবহারের ব্যবস্থা করা হয়েছে। @import "tailwindcss" লিখে সরাসরি সিএসএস ফাইলের ভেতরেই আধুনিক সিএসএস ভ্যারিয়েবল দিয়ে থিম কাস্টমাইজ করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Evolution of Tailwind Compilers',
        bn: 'কাঠামোগত তুলনা: Tailwind কম্পাইলারের বিবর্তন'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Framework Generation', bn: 'ফ্রেমওয়ার্ক প্রজন্ম' },
        { en: 'Build Engine', bn: 'বিল্ড ইঞ্জিন' },
        { en: 'Dev CSS File Size', bn: 'ডেভেলপমেন্টে ফাইলের আকার' },
        { en: 'Configuration Format', bn: 'কনফিগারেশনের রূপ' }
      ],
      rows: [
        [
          { en: 'Tailwind CSS v4 (Oxide)', bn: 'টেইলউইন্ড সিএসএস ৪ (Oxide)' },
          { en: 'Native Rust compiler with automatic file discovery', bn: 'নেটিভ রাস্ট কম্পাইলার ও স্বয়ংক্রিয় ফাইল শনাক্তকরণ' },
          { en: 'Zero bloat; instant on-demand sub-millisecond compilation', bn: 'কোনো বাড়তি আকার নেই; তাৎক্ষণিক মিলি-সেকেন্ড কম্পাইলেশন' },
          { en: 'Native CSS-first @theme declarations; zero JS config', bn: 'সিএসএসে সরাসরি @theme ঘোষণা; কোনো জাভাস্ক্রিপ্ট কনফিগ নেই' }
        ],
        [
          { en: 'Tailwind CSS v3 (JIT)', bn: 'টেইলউইন্ড সিএসএস ৩ (JIT)' },
          { en: 'Node.js JavaScript regex watcher', bn: 'নোড.জেএস জাভাস্ক্রিপ্ট রেজেক্স ওয়াচার' },
          { en: 'Lightweight; generates classes on the fly per save', bn: 'হালকা; ফাইল সেভ করার সাথে সাথে ক্লাস তৈরি করে' },
          { en: 'tailwind.config.js / tailwind.config.ts', bn: 'tailwind.config.js / tailwind.config.ts' }
        ],
        [
          { en: 'Tailwind CSS v2 (Classic)', bn: 'টেইলউইন্ড সিএসএস ২ (ক্লাসিক)' },
          { en: 'Ahead-Of-Time (AOT) PostCSS generator', bn: 'আগে থেকে তৈরি করে রাখা পোস্ট-সিএসএস জেনারেটর' },
          { en: 'Massive; 10MB+ development stylesheet without purging', bn: 'বিশালাকার; পার্জিং ছাড়া ডেভেলপমেন্টে ১০ মেগাবাইটের বেশি' },
          { en: 'tailwind.config.js with purge array configuration', bn: 'tailwind.config.js ফাইলের purge অ্যারে কনফিগারেশন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Purge Engine & Vocabulary Efficiency',
        bn: 'বাস্তব কোড সিমুলেশন: পার্জ ইঞ্জিন ও শব্দভাণ্ডারের দক্ষতা'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind Purge Engine & Bundle Size Efficiency in Node.js

class PurgeBundleSimulator {
  private utilityDefinitions: Record<string, string> = {
    'flex': 'display: flex;',
    'items-center': 'align-items: center;',
    'p-4': 'padding: 1rem;',
    'bg-white': 'background-color: #ffffff;',
    'rounded-xl': 'border-radius: 0.75rem;',
    'shadow-md': 'box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);',
    'hover:bg-slate-50': ':hover { background-color: #f8fafc; }',
    'text-slate-900': 'color: #0f172a;'
  };

  // Scans source content for unique utility classes
  purgeAndCompile(htmlContent: string) {
    const classAttrRegex = /class="([^"]+)"/g;
    const usedClasses = new Set<string>();
    let match: RegExpExecArray | null;

    while ((match = classAttrRegex.exec(htmlContent)) !== null) {
      const tokens = match[1].split(/\\s+/).filter(Boolean);
      for (const token of tokens) {
        if (this.utilityDefinitions[token]) {
          usedClasses.add(token);
        }
      }
    }

    const compiledRules: string[] = [];
    for (const cls of usedClasses) {
      compiledRules.push('.' + cls + ' { ' + this.utilityDefinitions[cls] + ' }');
    }

    const compiledCSS = compiledRules.join('\\n');
    return {
      uniqueClassesCount: usedClasses.size,
      compiledSizeBytes: Buffer.byteLength(compiledCSS, 'utf8'),
      css: compiledCSS
    };
  }
}

const simulator = new PurgeBundleSimulator();

// Simulating an application template repeating 1,000 card components
const singleCard = '<div class="flex items-center p-4 bg-white rounded-xl shadow-md hover:bg-slate-50 text-slate-900">Card Item</div>';
let fullPage = '';
for (let i = 0; i < 1000; i++) {
  fullPage += singleCard;
}

const result = simulator.purgeAndCompile(fullPage);

console.log('Total card components rendered on page: 1000');
// -> Total card components rendered on page: 1000
console.log('Total unique utility classes purged:', result.uniqueClassesCount);
// -> Total unique utility classes purged: 8
console.log('Generated production CSS size in bytes:', result.compiledSizeBytes);
// -> Generated production CSS size in bytes: 324
console.log('Production CSS size is under 10KB:', result.compiledSizeBytes < 10240);
// -> Production CSS size is under 10KB: true`,
      caption: {
        en: 'Simulation: 1000 card components generate only 8 unique purged utility classes totaling 324 bytes, well under 10KB',
        bn: 'সিমুলেশন: ১০০০ টি কার্ড উপাদান মাত্র ৮ টি অনন্য পার্জড ইউটিলিটি ক্লাস তৈরি করে যার মোট আকার ৩২৪ বাইট, যা ১০ কেবির অনেক নিচে'
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
        en: 'Rule 1: Always verify content globs cover all template files. If a directory containing HTML, JSX, or Vue files is omitted from the content array, Tailwind will not generate CSS for those components.',
        bn: 'নিয়ম ১: কনটেন্ট গ্লবে সমস্ত টেমপ্লেট ফাইল অন্তর্ভুক্ত আছে কিনা যাচাই করুন। এইচটিএমএল বা জেএসএক্স থাকা কোনো ফোল্ডার বাদ পড়লে সেইসব উপাদানের জন্য সিএসএস তৈরি হবে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never write dynamic class string concatenations. Write full literal strings or use lookup maps like { primary: "bg-blue-600", secondary: "bg-slate-600" } to ensure classes are discoverable by regex.',
        bn: 'নিয়ম ২: স্ট্রিং জোড়া লাগিয়ে ক্লাসের নাম বানাবেন না। পুরো ক্লাসের নাম লিখুন অথবা অবজেক্ট ম্যাপ { primary: "bg-blue-600" } ব্যবহার করুন যাতে রেজেক্স স্ক্যানার তা সহজে খুঁজে পায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use safelist sparingly for dynamic database-driven colors. Safelisting generates classes unconditionally, so keep safelist regex patterns narrow to prevent unnecessary CSS bundle inflation.',
        bn: 'নিয়ম ৩: ডেটাবেজ থেকে আসা রঙের জন্য সেফলিস্ট সতর্কভাবে ব্যবহার করুন। সেফলিস্টে থাকা ক্লাসগুলো সবসময় তৈরি হয়, তাই অতিরিক্ত ক্লাস যোগ করে ফাইলের আকার বাড়াবেন না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Audit production bundle budgets in CI. Enforce automated checks ensuring production minified CSS stays under 15KB to guarantee fast initial render performance across mobile networks.',
        bn: 'নিয়ম ৪: সিআই পাইপলাইনে প্রোডাকশন বান্ডিল বাজেট পরীক্ষা করুন। ফাইনাল সিএসএস ফাইলের আকার যেন ১৫ কেবির নিচে থাকে তা নিশ্চিত করলে মোবাইল ইন্টারনেটেও ওয়েবসাইট বিদ্যুৎ গতিতে লোড হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-house-ex1',
      kind: 'mcq',
      topic: 'Vocabulary Scaling Law in Tailwind CSS',
      question: {
        en: 'Why does a Tailwind CSS production stylesheet remain extraordinarily small (under 10KB) even as a website grows from 10 pages to 1,000 pages?',
        bn: 'একটি ওয়েবসাইট ১০ পেজ থেকে বেড়ে ১,০০০ পেজ হলেও Tailwind CSS-এর প্রোডাকশন স্টাইলশিটের আকার কেন অত্যন্ত ছোট (১০ কেবির নিচে) থাকে?'
      },
      options: [
        {
          en: 'Because utility classes are declared only once in CSS regardless of how many thousands of times they are repeated in HTML; bundle size scales with unique vocabulary, not page count',
          bn: 'কারণ এইচটিএমএলে হাজার বার ব্যবহার করলেও সিএসএসে প্রতিটি ইউটিলিটি ক্লাস ঠিক একবারই তৈরি হয়; ফাইলের আকার পেজের সংখ্যার ওপর নয় বরং অনন্য ক্লাসের সংখ্যার ওপর নির্ভর করে'
        },
        {
          en: 'Tailwind deletes older pages from the server hard drive as new ones are added',
          bn: 'নতুন পেজ যোগ হওয়ার সাথে সাথে Tailwind সার্ভার থেকে পুরোনো পেজগুলো মুছে দেয়'
        },
        {
          en: 'The web browser only downloads the CSS file when the computer is shut down',
          bn: 'কম্পিউটার বন্ধ করার সময়ই কেবল ওয়েব ব্রাউজার সিএসএস ফাইলটি ডাউনলোড করে'
        },
        {
          en: 'Because Tailwind limits websites to a maximum of 3 colors total',
          bn: 'কারণ Tailwind ওয়েবসাইটে মোট সর্বোচ্চ ৩টি রঙের বেশি ব্যবহার করতে দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Repeated classes in HTML generate zero additional CSS declarations.',
        bn: 'এইচটিএমএলে ক্লাসের পুনরাবৃত্তি সিএসএসে কোনো বাড়তি লাইন যোগ করে না।'
      },
      explanation: {
        en: 'Tailwind scales with design vocabulary. 10,000 instances of p-4 generate .p-4 once in the stylesheet. Expanding page count without new utility classes adds 0 bytes to CSS.',
        bn: 'Tailwind শব্দভাণ্ডারের ওপর স্কেল করে। ১০,০০০ বার p-4 লিখলেও সিএসএসে এটি মাত্র একবার আসে। নতুন ক্লাস না বাড়িয়ে শুধু পেজ বাড়ালে সিএসএস ফাইলের আকার 0 বাইট বাড়ে।'
      }
    },
    {
      id: 'tw-house-ex2',
      kind: 'mcq',
      topic: 'Safelist configuration in tailwind.config.js',
      question: {
        en: 'When is configuring the safelist array in tailwind.config.js genuinely necessary?',
        bn: 'tailwind.config.js ফাইলে কখন safelist অ্যারে কনফিগার করা সত্যিকার অর্থে প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'When class names are generated dynamically from external database records or runtime user input that cannot be analyzed statically during build time',
          bn: 'যখন ক্লাসের নামগুলো এক্সটার্নাল ডেটাবেজ রেকর্ড বা ব্যবহারকারীর ইনপুট থেকে ডাইনামিকভাবে তৈরি হয় যা বিল্ড টাইমে সোর্স কোডে খুঁজে পাওয়া সম্ভব নয়'
        },
        {
          en: 'On every single project to allow Google Chrome to access the internet',
          bn: 'গুগল ক্রোম যাতে ইন্টারনেটে ঢুকতে পারে সেজন্য প্রতিটি প্রজেক্টে বাধ্যতামূলকভাবে'
        },
        {
          en: 'To translate CSS property names into German automatically',
          bn: 'সিএসএস প্রপার্টির নামগুলোকে স্বয়ংক্রিয়ভাবে জার্মান ভাষায় অনুবাদ করতে'
        },
        {
          en: 'Whenever the web server is operating on battery power',
          bn: 'যখনই ওয়েব সার্ভারটি ব্যাটারি পাওয়ারে চলতে শুরু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Runtime database-driven classes that static scanners cannot discover.',
        bn: 'রানটাইমে ডেটাবেজ থেকে আসা ক্লাস যা স্ট্যাটিক স্ক্যানার খুঁজে পায় না।'
      },
      explanation: {
        en: 'If classes are fetched from an API or database at runtime, the static scanner cannot see them in source files. Adding them to safelist guarantees they are compiled.',
        bn: 'যদি রানটাইমে এপিআই বা ডেটাবেজ থেকে ক্লাস আসে তবে স্ক্যানার তা দেখতে পায় না। সেফলিস্টে দিলে কম্পাইলার নিশ্চিতভাবে সেই ক্লাসগুলো তৈরি করে রাখে।'
      }
    },
    {
      id: 'tw-house-ex3',
      kind: 'mcq',
      topic: 'Dynamic class string concatenation pitfall',
      question: {
        en: 'What occurs in production if a developer writes class="bg-" + color + "-500" in their React component?',
        bn: 'কোনো ডেভেলপার যদি তার রিঅ্যাক্ট কম্পোনেন্টে class="bg-" + color + "-500" লেখেন তবে প্রোডাকশনে কী সমস্যা ঘটবে?'
      },
      options: [
        {
          en: 'The static regex scanner fails to recognize the fragmented string as a valid class token, causing the background color CSS rule to not be generated',
          bn: 'স্ট্যাটিক রেজেক্স স্ক্যানার ভাঙা স্ট্রিংটিকে বৈধ ক্লাস হিসেবে চিনতে পারে না, যার ফলে ব্যাকগ্রাউন্ড রঙের সিএসএস রুলটি ফাইনাল ফাইলে তৈরিই হয় না'
        },
        {
          en: 'The client computer screen turns completely black permanently',
          bn: 'ক্লায়েন্টের কম্পিউটার স্ক্রিন চিরতরে সম্পূর্ণ কালো হয়ে যায়'
        },
        {
          en: 'The website automatically deletes all user cookies',
          bn: 'ওয়েবসাইটটি ব্যবহারকারীর সমস্ত কুকিজ নিজ থেকেই মুছে ফেলে'
        },
        {
          en: 'The React library throws a fatal syntax error and prevents page loading',
          bn: 'রিঅ্যাক্ট লাইব্রেরি মারাত্মক সিনট্যাক্স এরর দিয়ে পেজ লোড হওয়া বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The scanner extracts complete literal tokens without executing code.',
        bn: 'স্ক্যানার কোড রান না করে আস্ত স্ট্রিং টোকেন খুঁজে নেয়।'
      },
      explanation: {
        en: 'Tailwind regex scanner reads raw source files without executing JavaScript. Fragmented class strings like "bg-" + color cannot be matched.',
        bn: 'Tailwind রেজেক্স স্ক্যানার জাভাস্ক্রিপ্ট রান করে না। "bg-" + color-এর মতো ভাঙা স্ট্রিং সে চিনতে পারে না, তাই কোনো সিএসএস তৈরি হয় না।'
      }
    },
    {
      id: 'tw-house-ex4',
      kind: 'mcq',
      topic: 'Tailwind CSS v4 Oxide engine architecture',
      question: {
        en: 'What architectural leap does Tailwind CSS v4 bring with the new Oxide engine?',
        bn: 'নতুন Oxide ইঞ্জিনের মাধ্যমে Tailwind CSS v4 কোন বৈপ্লবিক কাঠামোগত পরিবর্তন এনেছে?'
      },
      options: [
        {
          en: 'A blazing-fast compiler rewritten in Rust providing sub-millisecond build times, automatic source file discovery, and native CSS @theme blocks with zero JavaScript configuration',
          bn: 'সম্পূর্ণ রাস্টে নতুন করে লেখা অত্যন্ত দ্রুতগতির কম্পাইলার যা মিলি-সেকেন্ডে বিল্ড, স্বয়ংক্রিয় ফাইল শনাক্তকরণ এবং কোনো কনফিগ ফাইল ছাড়াই সিএসএসে সরাসরি @theme সুবিধা দেয়'
        },
        {
          en: 'It completely eliminates the need for HTML markup in web development',
          bn: 'এটি ওয়েব ডেভেলপমেন্টে এইচটিএমএল মার্কআপ লেখার প্রয়োজনীয়তা দূর করে দেয়'
        },
        {
          en: 'It restricts web developers from using laptops and forces desktop towers',
          bn: 'এটি ডেভেলপারদের ল্যাপটপ ব্যবহার নিষিদ্ধ করে ডেস্কটপ টাওয়ার ব্যবহারে বাধ্য করে'
        },
        {
          en: 'Because v4 converts all web pages into PDF downloadable documents',
          bn: 'কারণ ৪ নম্বর ভার্সন সমস্ত ওয়েবপেজকে পিডিএফ ফাইলে রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rust compiler, sub-millisecond builds, and CSS-first configuration.',
        bn: 'রাস্ট কম্পাইলার, চোখের পলকে বিল্ড এবং সরাসরি সিএসএসে কনফিগারেশনের কথা ভাবুন।'
      },
      explanation: {
        en: 'Tailwind v4 is built on Oxide (Rust). It removes tailwind.config.js in favor of native CSS @theme declarations and provides unprecedented compilation speed.',
        bn: 'Tailwind v4 তৈরি হয়েছে Oxide (রাস্ট)-এর ওপর। এটি কনফিগ ফাইল তুলে দিয়ে সরাসরি সিএসএসে @theme ব্যবহারের সুযোগ দেয় এবং অবিশ্বাস্য গতি উপহার দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-house-dress-rehearsal-quiz',
    title: {
      en: 'Production Optimization & Tailwind v4 Quiz',
      bn: 'প্রোডাকশন অপটিমাইজেশন ও টেইলউইন্ড ৪ কুইজ'
    },
    questions: [
      {
        id: 'q-lookup-map-pattern',
        kind: 'mcq',
        topic: 'Safe dynamic class mapping with lookup objects',
        question: {
          en: 'How should developers structure dynamic color variants in React components to ensure Tailwind JIT discovers the classes?',
          bn: 'Tailwind JIT যাতে ক্লাসগুলো খুঁজে পায় সেজন্য রিঅ্যাক্ট কম্পোনেন্টে ডাইনামিক রঙের ভ্যারিয়েন্ট কীভাবে সাজানো উচিত?'
        },
        options: [
          {
            en: 'Use a static lookup object containing complete literal class names, such as const styles = { primary: "bg-blue-600", danger: "bg-red-600" }',
            bn: 'আস্ত ক্লাসের নাম সম্বলিত একটি স্ট্যাটিক অবজেক্ট ম্যাপ ব্যবহার করে, যেমন const styles = { primary: "bg-blue-600", danger: "bg-red-600" }'
          },
          {
            en: 'Concatenate the class name using Math.random() expressions',
            bn: 'Math.random() ব্যবহার করে ক্লাসের নাম জোড়া লাগিয়ে'
          },
          {
            en: 'Store the CSS class names in a password-protected zip file',
            bn: 'পাসওয়ার্ড দেওয়া জিপ ফাইলের ভেতরে ক্লাসের নাম সেভ করে রেখে'
          },
          {
            en: 'Write the class names in invisible ink on the developer monitor',
            bn: 'ডেভেলপারের মনিটরে অদৃশ্য কালিতে ক্লাসের নাম লিখে দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unbroken literal class strings in source code allow static regex extraction.',
          bn: 'সোর্স কোডে সম্পূর্ণ অক্ষত ক্লাসের নাম থাকলে স্ক্যানার সহজেই তা খুঁজে পায়।'
        },
        explanation: {
          en: 'A static lookup map ensures all possible class names exist as complete literal strings in source files, allowing the build-time regex scanner to detect and compile them.',
          bn: 'স্ট্যাটিক অবজেক্ট ম্যাপে সম্পূর্ণ অক্ষত নাম থাকায় বিল্ড-টাইম রেজেক্স স্ক্যানার অনায়াসে সব ক্লাস শনাক্ত করতে পারে এবং সিএসএস তৈরি করে।'
        }
      },
      {
        id: 'q-content-glob-omission-bug',
        kind: 'mcq',
        topic: 'Diagnosing missing styles caused by omitted content globs',
        question: {
          en: 'A developer creates a new components/modals/ directory with React files, but none of the Tailwind classes render in production. What is the root cause?',
          bn: 'একজন ডেভেলপার নতুন components/modals/ ডিরেক্টরি তৈরি করেছেন, কিন্তু প্রোডাকশনে কোনো Tailwind ক্লাস কাজ করছে না। এর মূল কারণ কী?'
        },
        options: [
          {
            en: 'The content array in tailwind.config.js omitted the new directory path, so the scanner never read those files to generate the corresponding CSS rules',
            bn: 'tailwind.config.js-এর content অ্যারেতে নতুন ফোল্ডারের পাথ বাদ পড়েছিল, ফলে স্ক্যানার সেই ফাইলগুলো পড়েনি এবং সিএসএসও তৈরি হয়নি'
          },
          {
            en: 'The developer computer ran out of electricity while saving the files',
            bn: 'ফাইল সেভ করার সময় ডেভেলপারের কম্পিউটারের বিদ্যুৎ চলে গিয়েছিল'
          },
          {
            en: 'React modals are legally prohibited from displaying colors in web browsers',
            bn: 'ব্রাউজারে রিঅ্যাক্ট মোডালে কোনো রং দেখানো আইনত নিষিদ্ধ'
          },
          {
            en: 'Because Tailwind CSS only works in the src/pages directory',
            bn: 'কারণ Tailwind CSS কেবল src/pages ফোল্ডারেই কাজ করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Files outside the content globs are invisible to the JIT scanner.',
          bn: 'content গ্লবের বাইরে থাকা ফাইলগুলো JIT স্ক্যানার দেখতে পায় না।'
        },
        explanation: {
          en: 'If a template directory is missing from content globs, Tailwind ignores it during compilation. Updating the glob pattern restores class discovery.',
          bn: 'content গ্লবে ফোল্ডারের নাম না থাকলে Tailwind তা পুরোপুরি উপেক্ষা করে। গ্লব প্যাটার্ন ঠিক করলেই ক্লাসগুলো আবার তৈরি হতে শুরু করে।'
        }
      },
      {
        id: 'q-v4-theme-custom-properties',
        kind: 'mcq',
        topic: 'Configuring theme tokens in Tailwind CSS v4',
        question: {
          en: 'How are design tokens defined in Tailwind CSS v4 compared to v3?',
          bn: 'Tailwind CSS v3-এর তুলনায় v4-এ ডিজাইন টোকেন কীভাবে সংজ্ঞায়িত করা হয়?'
        },
        options: [
          {
            en: 'Directly in the main CSS file using the @theme block with CSS custom properties (e.g. @theme { --color-primary: #3b82f6; }), eliminating tailwind.config.js',
            bn: 'সরাসরি মূল সিএসএস ফাইলে @theme ব্লক এবং সিএসএস ভ্যারিয়েবল দিয়ে (যেমন @theme { --color-primary: #3b82f6; }), যা tailwind.config.js তুলে দেয়'
          },
          {
            en: 'By sending a paper letter to the Tailwind CSS office in California',
            bn: 'ক্যালিফোর্নিয়ায় Tailwind CSS-এর প্রধান কার্যালয়ে চিঠি পাঠিয়ে'
          },
          {
            en: 'By converting all source code into binary machine assembly code',
            bn: 'সমস্ত সোর্স কোডকে বাইনারি মেশিন অ্যাসেম্বলি কোডে রূপান্তর করে'
          },
          {
            en: 'Because Tailwind v4 does not support any custom design tokens',
            bn: 'কারণ Tailwind v4 কোনো কাস্টম ডিজাইন টোকেন সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'CSS-first configuration with @theme in v4.',
          bn: 'v4-এ সরাসরি সিএসএসে @theme ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Tailwind v4 is CSS-first. Custom colors and tokens are declared in @theme blocks within your CSS stylesheet, standardizing on CSS custom properties.',
          bn: 'Tailwind v4 হলো সিএসএস-ফার্স্ট। কাস্টম টোকেন সরাসরি সিএসএস ফাইলের @theme ব্লকে লেখা হয়, যা কনফিগ ফাইলের ঝামেলা দূর করে।'
        }
      },
      {
        id: 'q-production-bundle-budgeting',
        kind: 'mcq',
        topic: 'Enforcing production bundle budgets in continuous integration (CI)',
        question: {
          en: 'Why should engineering teams maintain an automated bundle budget check (<15KB) for their production CSS in CI/CD pipelines?',
          bn: 'সিআই/সিডি পাইপলাইনে ইঞ্জিনিয়ারিং দলগুলোর কেন প্রোডাকশন সিএসএসের জন্য একটি বান্ডিল বাজেট (<১৫ কেবি) পরীক্ষা রাখা উচিত?'
        },
        options: [
          {
            en: 'To immediately intercept accidental bundle bloat caused by over-broad safelist patterns or unpurged third-party stylesheets before code deploys to production',
            bn: 'কোড ডিপ্লয় হওয়ার আগেই অসতর্কতাবশত সেফলিস্টের অতিরিক্ত বৃদ্ধি বা বাইরের অনিয়ন্ত্রিত সিএসএসের কারণে ফাইলের আকার বেড়ে যাওয়া রোধ করতে'
          },
          {
            en: 'Because web hosting servers refuse to store files larger than 15 kilobytes',
            bn: 'কারণ ওয়েব হোস্টিং সার্ভার ১৫ কিলোবাইটের বেশি বড় ফাইল সেভ করতে পারে না'
          },
          {
            en: 'To make sure developers receive automated text messages every 5 seconds',
            bn: 'যাতে ডেভেলপাররা প্রতি ৫ সেকেন্ড পর পর স্বয়ংক্রিয় এসএমএস পান'
          },
          {
            en: 'Because CSS files larger than 15KB cause web browser screens to freeze',
            bn: 'কারণ ১৫ কেবির বেশি বড় সিএসএস ফাইল ওয়েব ব্রাউজারকে ফ্রিজ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automated CI budgets prevent accidental CSS bloat from reaching users.',
          bn: 'স্বয়ংক্রিয় সিআই বাজেট অনাকাঙ্ক্ষিত ফাইলের স্ফীতি ব্যবহারকারীদের কাছে পৌঁছানো আটকায়।'
        },
        explanation: {
          en: 'Automated bundle budgets catch runaway safelists or rogue imports. Enforcing a strict budget in CI preserves lightning-fast load times for users.',
          bn: 'স্বয়ংক্রিয় বাজেট ভুল সেফলিস্ট বা অতিরিক্ত ইম্পোর্ট শনাক্ত করে আটকে দেয়। সিআই-তে বাজেট পরীক্ষা রাখলে সাইটের গতি সবসময় সুপারফাস্ট থাকে।'
        }
      }
    ]
  }
};
