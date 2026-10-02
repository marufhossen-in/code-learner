import type { Lesson } from '../../../lib/types';

export const masterPatternBookLesson: Lesson = {
  slug: 'the-master-pattern-book',
  tech: 'tailwind',
  title: {
    en: 'Design Tokens & Theme Customization — Spacing Scale, Color Palette & Extending Tailwind',
    bn: 'ডিজাইন টোকেন ও থিম কাস্টমাইজেশন — স্পেসিং স্কেল, কালার প্যালেট ও টেইলউইন্ড এক্সটেনশন'
  },
  summary: {
    en: 'Building scalable user interfaces requires disciplined visual constraints rather than uncoordinated aesthetic choices. In Tailwind CSS, design tokens act as the single source of truth for your entire design system, codifying colors, spacing, typography, border radii, and shadows. The 4px spacing scale provides mathematical rhythm where 1 unit corresponds to 0.25rem (4px), guaranteeing consistent margins and paddings. The default 50-to-950 color scale establishes accessible contrast ratios across light and dark modes. Through tailwind.config.js, teams use theme.extend to seamlessly integrate corporate brand colors and custom typography without accidentally destroying default framework utilities.',
    bn: 'স্কেলেবল ইউজার ইন্টারফেস তৈরির জন্য এলোমেলো পছন্দের বদলে সুশৃঙ্খল ডিজাইনের নিয়মাবলি অত্যন্ত জরুরি। Tailwind CSS-এ ডিজাইন টোকেন পুরো ডিজাইন সিস্টেমের একক নির্ভরযোগ্য ভিত্তি হিসেবে কাজ করে, যা রং, স্পেসিং, ফন্ট, বর্ডার রেডিয়াস ও ছায়াকে সংজ্ঞায়িত করে। এর ৪ পিক্সেল স্পেসিং স্কেল গাণিতিক ছন্দ উপহার দেয় যেখানে ১ ইউনিট সমান ০.২৫ রেম (৪ পিক্সেল), যা মার্জিন ও প্যাডিংয়ে নিখুঁত সামঞ্জস্য নিশ্চিত করে। ৫০ থেকে ৯৫০ পর্যন্ত বিস্তৃত কালার স্কেল লাইট ও ডার্ক মোডে চমৎকার বৈসাদৃশ্য তৈরি করে। tailwind.config.js ফাইলের theme.extend ব্যবহারের মাধ্যমে ডিফল্ট ইউটিলিটি না মুছেই নিজস্ব ব্র্যান্ডের রং ও ফন্ট অনায়াসে যুক্ত করা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Design Tokens as the Foundation of Visual Systems',
        bn: 'মূল ধারণা: ভিজ্যুয়াল সিস্টেমের ভিত্তি হিসেবে ডিজাইন টোকেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design a scalable web application across multiple developers, maintaining visual harmony requires strict design constraints rather than arbitrary values. Design tokens establish an immutable vocabulary for colors, spacing, typography, and elevations throughout your project. In Tailwind CSS, the project configuration file (tailwind.config.js) acts as your design token registry, translating mathematical spacing scales and curated color shades into predictable utility classes.',
        bn: 'যখন আপনি একাধিক ডেভেলপারের সমন্বয়ে একটি স্কেলেবল ওয়েব অ্যাপ্লিকেশন তৈরি করেন, তখন ডিজাইনের নান্দনিক সামঞ্জস্য বজায় রাখতে ইচ্ছামতো মান ব্যবহারের বদলে সুনির্দিষ্ট নিয়ম থাকা অপরিহার্য। ডিজাইন টোকেন পুরো প্রজেক্টে রং, স্পেসিং, ফন্ট এবং ছায়ার জন্য একটি অপরিবর্তনীয় মানদণ্ড তৈরি করে। Tailwind CSS-এ tailwind.config.js ফাইলটি ডিজাইন টোকেন রেজিস্ট্রি হিসেবে কাজ করে, যা গাণিতিক স্পেসিং স্কেল ও রঙের শেডগুলোকে সুবিন্যস্ত ইউটিলিটি ক্লাসে রূপান্তর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Design Tokens',
          def: {
            en: 'Named, immutable variables storing visual values (colors, spacing, shadows) that enforce design system constraints across codebases',
            bn: 'নির্দিষ্ট নামযুক্ত অপরিবর্তনীয় ভ্যারিয়েবল যা রং, স্পেসিং বা ছায়ার মান ধারণ করে পুরো কোডবেসে ডিজাইনের সমতা রক্ষা করে'
          }
        },
        {
          term: '4px Spacing Unit Scale',
          def: {
            en: 'Tailwind standard spacing arithmetic where 1 unit represents 0.25rem (4px), creating consistent spatial proportions across layouts',
            bn: 'Tailwind-এর স্পেসিং পরিমাপ যেখানে ১ ইউনিট সমান ০.২৫ রেম (৪ পিক্সেল), যা লেআউটে চমৎকার ভারসাম্য বজায় রাখে'
          }
        },
        {
          term: 'Color Palette (50-950)',
          def: {
            en: 'Harmonious color scales numbered from 50 (lightest tint) to 950 (deepest shade) optimized for contrast and dark mode',
            bn: '৫০ (সবচেয়ে হালকা) থেকে ৯৫০ (সবচেয়ে গাঢ়) পর্যন্ত বিস্তৃত রঙের স্কেল যা লাইট ও ডার্ক মোডে সহজে মানিয়ে যায়'
          }
        },
        {
          term: 'theme.extend',
          def: {
            en: 'Tailwind configuration method that appends custom tokens while preserving all existing default framework colors and spacing utilities',
            bn: 'Tailwind কনফিগারেশন পদ্ধতি যা ডিফল্ট রং ও স্পেসিং অক্ষুণ্ণ রেখে নতুন কাস্টম টোকেন যুক্ত করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'spacing-rhythm',
      text: {
        en: 'The 4px Spacing Scale and Spatial Rhythm',
        bn: '৪ পিক্সেল স্পেসিং স্কেল ও স্থানিক ছন্দ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common flaw in web styling is micro-spacing chaos, where different developers use random paddings like 13px, 17px, or 21px. Tailwind prevents this chaos through a strict 4px spacing scale. One spacing unit equals 0.25rem, which computes to 4px under the standard 16px browser base font.',
        bn: 'ওয়েব ডিজাইনের একটি বড় সমস্যা হলো এলোমেলো স্পেসিং, যেখানে ভিন্ন ভিন্ন ডেভেলপার ১৩, ১৭ বা ২১ পিক্সেলের মতো খামখেয়ালি প্যাডিং ব্যবহার করেন। Tailwind এর সমাধানে একটি ৪ পিক্সেল স্কেল দেয়। এখানে ১ ইউনিট সমান ০.২৫ রেম, যা ব্রাউজারের ১৬ পিক্সেল বেস ফন্টে ঠিক ৪ পিক্সেল হিসাব করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This geometric progression scales gracefully: p-1 produces 4px, p-2 gives 8px, p-4 gives 16px, p-6 gives 24px, and p-8 produces 32px. Because all spacing utilities (margin, padding, gap, width, height) share this identical ladder, complex layouts naturally snap into an aesthetically pleasing vertical and horizontal rhythm.',
        bn: 'এই গাণিতিক অনুপাত খুব সুন্দরভাবে বাড়ে: p-1 দেয় ৪ পিক্সেল, p-2 দেয় ৮ পিক্সেল, p-4 দেয় ১৬ পিক্সেল, p-6 দেয় ২৪ পিক্সেল এবং p-8 দেয় ৩২ পিক্সেল। যেহেতু সমস্ত স্পেসিং (মার্জিন, প্যাডিং, গ্যাপ, প্রস্থ, উচ্চতা) একই স্কেল মেনে চলে, তাই জটিল ইন্টারফেসের মাঝেও নিখুঁত ভারসাম্য বজায় থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'color-palette',
      text: {
        en: 'The 50–950 Color System and Purpose-Based Naming',
        bn: '৫০–৯৫০ কালার সিস্টেম ও উদ্দেশ্য-ভিত্তিক নামকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind ships with curated color palettes—including slate, zinc, indigo, and emerald—each structured into eleven calibrated shades from 50 to 950. The lightest shades (50 and 100) are designed for subtle card backgrounds, while mid-tones (500 and 600) serve as prominent action buttons, and dark shades (800 and 950) provide high-contrast text and dark mode backgrounds.',
        bn: 'Tailwind-এ রয়েছে চমৎকার কালার প্যালেট—যেমন slate, zinc, indigo এবং emerald—যার প্রতিটিতে ৫০ থেকে ৯৫০ পর্যন্ত এগারোটি নিখুঁত শেড রয়েছে। হালকা শেডগুলো (৫০ ও ১০০) কার্ড ব্যাকগ্রাউন্ডের জন্য, মাঝারি শেডগুলো (৫০০ ও ৬০০) বাটনের জন্য এবং গাঢ় শেডগুলো (৮০০ ও ৯৫০) টেক্সট ও ডার্ক মোডের জন্য তৈরি।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production design systems practice purpose-based naming (semantic tokens) over literal color names. Instead of naming a brand blue color blue-600, alias it in tailwind.config.js as primary-600 or brand-600. When your company undergoes a future rebrand from blue to emerald green, updating the configuration token re-themes the entire application with zero changes to your template markup.',
        bn: 'প্রোডাকশন সিস্টেমে রঙের আক্ষরিক নামের বদলে উদ্দেশ্য-ভিত্তিক বা সিম্যান্টিক নাম ব্যবহার করা হয়। নীল রঙকে সরাসরি blue-600 না ডেকে tailwind.config.js-এ primary-600 বা brand-600 নাম দিন। ভবিষ্যতে কোম্পানির ব্র্যান্ডিং পরিবর্তন হয়ে নীল থেকে সবুজ হলেও কনফিগারেশন ফাইলে একবার পরিবর্তন করলেই পুরো ওয়েবসাইট নিজে থেকেই নতুন রঙে সেজে ওঠে।'
      }
    },
    {
      type: 'heading',
      id: 'extend-vs-replace',
      text: {
        en: 'Configuring theme.extend vs theme Replacement',
        bn: 'theme.extend বনাম theme প্রতিস্থাপনের পার্থক্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When customizing tailwind.config.js, understanding the distinction between theme and theme.extend is critical. If you declare colors directly inside theme: { colors: { brand: "#3b82f6" } }, Tailwind overwrites the entire default color system. Utility classes like bg-white, text-slate-700, and border-gray-200 suddenly disappear from your generated stylesheet.',
        bn: 'tailwind.config.js ফাইল কাস্টমাইজ করার সময় theme এবং theme.extend-এর পার্থক্য জানা অত্যন্ত জরুরি। আপনি যদি সরাসরি theme: { colors: { brand: "#3b82f6" } } লিখে দেন, তবে Tailwind সমস্ত ডিফল্ট রং মুছে ফেলে। ফলে bg-white বা text-slate-700-এর মতো মৌলিক ক্লাসগুলোও সিএসএস থেকে হারিয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To safely add brand tokens while keeping framework defaults, always place your additions inside theme.extend: { colors: { brand: "#3b82f6" } }. This additive approach preserves the entire standard catalogue while granting your application access to custom brand colors, custom font families, and extended spacing values.',
        bn: 'ডিফল্ট মান অক্ষুণ্ণ রেখে নতুন ব্র্যান্ড টোকেন যুক্ত করতে সর্বদা theme.extend: { colors: { brand: "#3b82f6" } } ব্যবহার করুন। এই পরিপূরক পদ্ধতিটি সমস্ত স্ট্যান্ডার্ড ক্লাস ঠিক রেখে আপনার প্রজেক্টে নতুন কাস্টম রং, ফন্ট এবং অতিরিক্ত স্পেসিং স্কেল যুক্ত করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Design Token Strategies',
        bn: 'কাঠামোগত তুলনা: ডিজাইন টোকেন কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Strategy Dimension', bn: 'কৌশলের মাত্রা' },
        { en: 'Hardcoded CSS Values', bn: 'হার্ডকোডেড সিএসএস মান' },
        { en: 'Raw CSS Custom Properties', bn: 'সাধারণ সিএসএস ভ্যারিয়েবল' },
        { en: 'Tailwind Design Tokens', bn: 'টেইলউইন্ড ডিজাইন টোকেন' }
      ],
      rows: [
        [
          { en: 'Consistency Enforcement', bn: 'সামঞ্জস্য নিশ্চিতকরণ' },
          { en: 'None; developers guess arbitrary pixels and colors', bn: 'নেই; ডেভেলপাররা আন্দাজে পিক্সেল ও রং বসান' },
          { en: 'Manual; requires developers to remember variable names', bn: 'ম্যানুয়াল; ভ্যারিয়েবলের নাম মুখস্থ রাখতে হয়' },
          { en: 'Complete; autocompletion suggests curated scale rungs', bn: 'নিখুঁত; অটোকমপ্লিট নির্দিষ্ট স্কেলের পরামর্শ দেয়' }
        ],
        [
          { en: 'Theme Extensibility', bn: 'থিম সম্প্রসারণ যোগ্যতা' },
          { en: 'Impossible; requires editing thousands of CSS lines', bn: 'অসম্ভব; হাজার হাজার লাইনে গিয়ে পরিবর্তন করতে হয়' },
          { en: 'Flexible; update root CSS custom variables at runtime', bn: 'নমনীয়; রানটাইমে রুট ভ্যারিয়েবল বদলানো যায়' },
          { en: 'Structured; single source of truth in tailwind.config', bn: 'সুশৃঙ্খল; কনফিগ ফাইলে একক নির্ভরযোগ্য ভিত্তি' }
        ],
        [
          { en: 'Compile-Time Validation', bn: 'কম্পাইল-টাইম যাচাইকরণ' },
          { en: 'None; typo in hex value silently breaks visual design', bn: 'নেই; হেক্স কোডে ভুল হলে নীরবে ডিজাইন নষ্ট হয়' },
          { en: 'Weak; typos in var(--my-val) fail silently at runtime', bn: 'দুর্বল; ভ্যারিয়েবলের বানানে ভুল হলে কিছু দেখা যায় না' },
          { en: 'Strong; IDE extensions flag invalid token class names', bn: 'শক্তিশালী; আইডিই ভুল ক্লাস লিখলে সাথে সাথে সতর্ক করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Design Token Resolution Engine',
        bn: 'বাস্তব কোড সিমুলেশন: ডিজাইন টোকেন সমাধান ইঞ্জিন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind Design Tokens & Theme Resolution in Node.js

class TokenEngine {
  public defaultTheme: any;
  public resolvedTheme: any;

  constructor(config: any = {}) {
    // Default base tokens
    this.defaultTheme = {
      spacing: {
        '1': '0.25rem /* 4px */',
        '2': '0.5rem /* 8px */',
        '4': '1rem /* 16px */',
        '6': '1.5rem /* 24px */',
        '8': '2rem /* 32px */'
      },
      colors: {
        white: '#ffffff',
        black: '#000000',
        slate: { '500': '#64748b', '900': '#0f172a' }
      }
    };

    // Merge theme extensions
    this.resolvedTheme = this.resolveConfig(config);
  }

  resolveConfig(config: any) {
    const extend = config.theme?.extend || {};
    return {
      spacing: { ...this.defaultTheme.spacing, ...(extend.spacing || {}) },
      colors: { ...this.defaultTheme.colors, ...(extend.colors || {}) }
    };
  }

  resolveSpacing(key: string) {
    return this.resolvedTheme.spacing[key] || null;
  }

  resolveColor(family: string, shade?: string) {
    const fam = this.resolvedTheme.colors[family];
    if (!fam) return null;
    return typeof fam === 'object' && shade ? fam[shade] : fam;
  }
}

// User configuration extending brand colors and custom spacing rhythm
const customConfig = {
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem /* 72px */'
      },
      colors: {
        primary: {
          '50': '#eff6ff',
          '500': '#3b82f6',
          '900': '#1e3a8a'
        }
      }
    }
  }
};

const engine = new TokenEngine(customConfig);

const p4Val = engine.resolveSpacing('4');
const p18Val = engine.resolveSpacing('18');
const primary500 = engine.resolveColor('primary', '500');
const defaultWhite = engine.resolveColor('white');

console.log('Standard spacing 4 value:', p4Val);
// -> Standard spacing 4 value: 1rem /* 16px */
console.log('Extended spacing 18 value:', p18Val);
// -> Extended spacing 18 value: 4.5rem /* 72px */
console.log('Custom brand primary 500 hex:', primary500);
// -> Custom brand primary 500 hex: #3b82f6
console.log('Preserved default white hex:', defaultWhite);
// -> Preserved default white hex: #ffffff
console.log('Total spacing tokens available:', Object.keys(engine.resolvedTheme.spacing).length);
// -> Total spacing tokens available: 6`,
      caption: {
        en: 'Simulation: standard spacing 4 resolves to 1rem (16px); custom 18 resolves to 4.5rem (72px); total 6 spacing tokens available',
        bn: 'সিমুলেশন: স্ট্যান্ডার্ড স্পেসিং ৪ সমাধান হয় ১ রেম (১৬ পিক্সেল); কাস্টম ১৮ হয় ৪.৫ রেম (৭২ পিক্সেল); মোট ৬ টি স্পেসিং টোকেন বিদ্যমান'
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
        en: 'Rule 1: Always add custom tokens under theme.extend. Declaring tokens directly on the theme object wipes out all default Tailwind utilities like standard colors and spacing.',
        bn: 'নিয়ম ১: কাস্টম টোকেন সর্বদা theme.extend-এর অধীনে রাখুন। সরাসরি theme অবজেক্টে লিখলে ডিফল্ট রং ও স্পেসিং মুছে গিয়ে সাইটের ডিজাইন ভেঙে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Adopt semantic color names like primary, secondary, and accent. Purpose-based naming allows future company rebranding without having to search and replace thousands of markup files.',
        bn: 'নিয়ম ২: সরাসরি রঙের নামের বদলে primary, secondary ও accent-এর মতো সিম্যান্টিক নাম ব্যবহার করুন। এতে ভবিষ্যতে ব্র্যান্ড রঙ বদলালেও কোড ফাইলের হাজার হাজার ক্লাস বদলাতে হয় না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Maintain fallback font chains in fontFamily declarations. Always include standard system fonts (e.g. ui-sans-serif, system-ui, sans-serif) after custom web fonts to prevent layout shift during font loading.',
        bn: 'নিয়ম ৩: ফন্ট ফ্যামিলি ঘোষণার সময় সর্বদা ব্যাকআপ ফন্টের তালিকা রাখুন। কাস্টম ফন্টের পেছনে ui-sans-serif ও sans-serif রাখলে ফন্ট লোড হতে দেরি হলেও লেখা সুন্দরভাবে প্রদর্শিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Standardize on the 4px mathematical scale for component spacing. Avoid mixing arbitrary margins and paddings with standard tokens to ensure visually harmonious layouts across the application.',
        bn: 'নিয়ম ৪: কম্পোনেন্ট স্পেসিংয়ের জন্য ৪ পিক্সেল স্কেল কঠোরভাবে মেনে চলুন। ইচ্ছেমতো পিক্সেল না বসিয়ে স্ট্যান্ডার্ড স্কেল ব্যবহার করলে পুরো ওয়েবসাইটে নিখুঁত ভারসাম্য বজায় থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-book-ex1',
      kind: 'mcq',
      topic: 'Tailwind 4px spacing unit arithmetic',
      question: {
        en: 'In Tailwind CSS standard configuration, what CSS padding value does the utility class p-4 generate?',
        bn: 'Tailwind CSS-এর স্ট্যান্ডার্ড কনফিগারেশনে p-4 ইউটিলিটি ক্লাসটি কোন CSS প্যাডিং মান তৈরি করে?'
      },
      options: [
        {
          en: '1rem, which evaluates to exactly 16px under the standard 16px browser base font',
          bn: '১ রেম, যা ব্রাউজারের স্ট্যান্ডার্ড ১৬ পিক্সেল বেস ফন্টে ঠিক ১৬ পিক্সেল হয়'
        },
        {
          en: '4 percent of the viewport width',
          bn: 'ভিউোর্টের প্রস্থের ৪ শতাংশ'
        },
        {
          en: '400 millimeters of physical screen space',
          bn: 'স্ক্রিনের ৪০০ মিলিমিটার জায়গা'
        },
        {
          en: 'Exactly 4 points in Adobe Photoshop measurements',
          bn: 'ফটোশপ পরিমাপে ঠিক ৪ পয়েন্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'Each Tailwind spacing unit equals 0.25rem (4px). Multiply 4 by 4px.',
        bn: 'প্রতিটি ইউনিট ০.২৫ রেম বা ৪ পিক্সেল। ৪ কে ৪ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Tailwind spacing scale multiplies the token index by 0.25rem. Therefore, 4 times 0.25rem equals 1rem (16px).',
        bn: 'Tailwind স্পেসিং স্কেল প্রতি ইউনিটের জন্য ০.২৫ রেম বরাদ্দ করে। ফলে ৪ গুণ ০.২৫ রেম সমান ১ রেম (১৬ পিক্সেল)।'
      }
    },
    {
      id: 'tw-book-ex2',
      kind: 'mcq',
      topic: 'Difference between theme and theme.extend',
      question: {
        en: 'What dangerous side effect occurs if a developer adds custom colors under theme: { colors: {...} } instead of theme: { extend: { colors: {...} } } in tailwind.config.js?',
        bn: 'tailwind.config.js ফাইলে theme: { extend: { colors: {...} } }-এর বদলে theme: { colors: {...} } লিখলে কী মারাত্মক ক্ষতি হয়?'
      },
      options: [
        {
          en: 'Tailwind completely overwrites and deletes the default color palette, making core classes like bg-white and text-slate-900 unavailable',
          bn: 'Tailwind ডিফল্ট কালার প্যালেট পুরোপুরি মুছে ফেলে, ফলে bg-white এবং text-slate-900-এর মতো মৌলিক ক্লাসগুলো আর কাজ করে না'
        },
        {
          en: 'The client computer reboots into safe mode',
          bn: 'ক্লায়েন্টের কম্পিউটার সেফ মোডে রিস্টার্ট নেয়'
        },
        {
          en: 'The website automatically prints itself on the office printer',
          bn: 'ওয়েবসাইটটি অফিসের প্রিন্টারে নিজ থেকে প্রিন্ট হতে শুরু করে'
        },
        {
          en: 'It doubles the size of all JPEG images on the server',
          bn: 'এটি সার্ভারের সমস্ত ছবির আকার দ্বিগুণ করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without extend, you replace rather than supplement the default configuration.',
        bn: 'extend না লিখলে ডিফল্ট কনফিগারেশন পরিবর্ধন না হয়ে পুরোপুরি প্রতিস্থাপিত হয়ে যায়।'
      },
      explanation: {
        en: 'Placing configurations directly on theme overrides defaults entirely. Using theme.extend merges your custom tokens while preserving all built-in framework colors and scales.',
        bn: 'সরাসরি theme-এ লিখলে ডিফল্ট মান সম্পূর্ণ মুছে যায়। theme.extend ব্যবহার করলে ডিফল্ট মান ঠিক রেখে নতুন টোকেন সুন্দরভাবে যুক্ত হয়।'
      }
    },
    {
      id: 'tw-book-ex3',
      kind: 'mcq',
      topic: 'Purpose-based naming for design tokens',
      question: {
        en: 'Why do production design systems prefer semantic purpose-based names (e.g. primary-500) over literal color names (e.g. blue-500)?',
        bn: 'প্রোডাকশন ডিজাইন সিস্টেমে আক্ষরিক নামের (যেমন blue-500) চেয়ে কেন সিম্যান্টিক বা উদ্দেশ্য-ভিত্তিক নাম (যেমন primary-500) অধিক পছন্দ করা হয়?'
      },
      options: [
        {
          en: 'It isolates design intent from concrete color values, allowing global rebranding without rewriting class names across hundreds of template files',
          bn: 'এটি রঙের মানের সাথে ব্যবহারের উদ্দেশ্যকে পৃথক রাখে, যার ফলে শত শত ফাইল না কেটেই ভবিষ্যতে কেবল কনফিগারেশন বদলে রি-ব্র্যান্ডিং করা যায়'
        },
        {
          en: 'Semantic names compile 20 times faster in the JavaScript V8 engine',
          bn: 'সিম্যান্টিক নাম জাভাস্ক্রিপ্ট V8 ইঞ্জিনে ২০ গুণ দ্রুতগতিতে চলে'
        },
        {
          en: 'Because web browsers only display text that is colored blue',
          bn: 'কারণ ওয়েব ব্রাউজার কেবল নীল রঙের লেখাই প্রদর্শন করতে পারে'
        },
        {
          en: 'To hide the CSS stylesheet from frontend web developers',
          bn: 'যাতে ফ্রন্টএন্ড ডেভেলপারদের কাছ থেকে সিএসএস স্টাইলশিট গোপন রাখা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when a company changes its primary color from blue to purple.',
        bn: 'কোম্পানি যখন তার প্রধান ব্র্যান্ডের রং নীল থেকে বেগুনি করে তখন কী ঘটে তা ভাবুন।'
      },
      explanation: {
        en: 'Purpose-based naming decouples styling intent from visual values. Changing primary-500 from blue to indigo updates the entire app instantaneously.',
        bn: 'উদ্দেশ্য-ভিত্তিক নামকরণ আসল রঙের মান থেকে ডিজাইনকে আলাদা রাখে। primary-500-এর মান নীল থেকে বেগুনি করলেই পুরো সাইট এক নিমিষে বদলে যায়।'
      }
    },
    {
      id: 'tw-book-ex4',
      kind: 'mcq',
      topic: 'The 50 to 950 color scale',
      question: {
        en: 'How is the numerical 50–950 shade scale structured in Tailwind CSS?',
        bn: 'Tailwind CSS-এ ৫০–৯৫০ সংখ্যাভিত্তিক শেড স্কেল কীভাবে বিন্যস্ত থাকে?'
      },
      options: [
        {
          en: '50 is the lightest tint (ideal for backgrounds) progressing up to 950 as the deepest shade (ideal for high-contrast text and dark mode)',
          bn: '50 হলো সবচেয়ে হালকা আভা (ব্যাকগ্রাউন্ডের জন্য চমৎকার) যা ধাপে ধাপে বেড়ে 950 এ গিয়ে সবচেয়ে গাঢ় রঙে পরিণত হয় (টেক্সট ও ডার্ক মোডের জন্য উপযোগী)'
        },
        {
          en: '50 represents 50 percent opacity on transparent glass',
          bn: '৫০ মানে স্বচ্ছ কাঁচের ওপর ৫০ শতাংশ অপাসিটি'
        },
        {
          en: 'The numbers represent the year the color was invented (1950 to 1995)',
          bn: 'সংখ্যাগুলো যে সালে রং আবিষ্কৃত হয়েছিল তা নির্দেশ করে (১৯৫০ থেকে ১৯৯৫)'
        },
        {
          en: '950 means the color can only be viewed at 9:50 PM in the evening',
          bn: '৯৫০ মানে রংটি কেবল রাত ৯টা ৫০ মিনিটে দেখতে পাওয়া যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Smaller numbers are light tints; larger numbers are deep, dark shades.',
        bn: 'ছোট সংখ্যাগুলো হালকা রং এবং বড় সংখ্যাগুলো গাঢ় রং প্রকাশ করে।'
      },
      explanation: {
        en: 'Tailwind color scale ranges from 50 (subtle tint) to 950 (deepest shade), providing mathematically tuned shades for accessible UI design.',
        bn: 'Tailwind রঙের স্কেল ৫০ (সবচেয়ে হালকা) থেকে ৯৫০ (সবচেয়ে গাঢ়) পর্যন্ত বিস্তৃত, যা অ্যাক্সেসিবল ডিজাইনের জন্য উপযুক্ত রঙের শেড দেয়।'
      }
    }
  ],
  quiz: {
    id: 'the-master-pattern-book-quiz',
    title: {
      en: 'Design Tokens & Theme Customization Quiz',
      bn: 'ডিজাইন টোকেন ও থিম কাস্টমাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'q-font-fallback-chains',
        kind: 'mcq',
        topic: 'System font fallback chains in fontFamily',
        question: {
          en: 'Why is it essential to provide a fallback font chain (e.g. ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]) in fontFamily configuration?',
          bn: 'fontFamily কনফিগারেশনে কেন ব্যাকআপ ফন্ট চেইন (যেমন ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]) রাখা অপরিহার্য?'
        },
        options: [
          {
            en: 'If the primary web font fails to load or experiences network latency, the browser gracefully renders native system fonts without causing layout distortion',
            bn: 'যদি মূল ওয়েব ফন্ট লোড হতে ব্যর্থ হয় বা দেরি হয়, তবে ব্রাউজার লেআউট নষ্ট না করে সুন্দরভাবে ডিভাইসের নিজস্ব ফন্ট ব্যবহার করতে পারে'
          },
          {
            en: 'Because Chrome will not render any text unless 4 font names are provided',
            bn: 'কারণ ৪ টি ফন্টের নাম না দেওয়া পর্যন্ত ক্রোম কোনো লেখাই স্ক্রিনে দেখায় না'
          },
          {
            en: 'To make the text file 4 times smaller on the web server disk',
            bn: 'ওয়েব সার্ভারের ডিস্কে টেক্সট ফাইলের আকার ৪ গুণ ছোট করতে'
          },
          {
            en: 'Fallback chains automatically translate text into four languages',
            bn: 'ব্যাকআপ চেইন লেখাকে স্বয়ংক্রিয়ভাবে ৪টি ভাষায় অনুবাদ করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Graceful degradation when web fonts take time to download.',
          bn: 'ওয়েব ফন্ট লোড হতে সময় নিলে বিকল্প ফন্ট ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'Fallback chains guarantee graceful degradation. If custom web fonts fail or download slowly, clean system fonts maintain visual readability.',
          bn: 'ফলব্যাক চেইন ফন্ট না পেলেও সুন্দর বিকল্প নিশ্চিত করে। কাস্টম ফন্ট আটকে গেলেও সিস্টেম ফন্ট লেখা পরিষ্কারভাবে উপস্থাপন করে।'
        }
      },
      {
        id: 'q-box-shadow-elevation-tokens',
        kind: 'mcq',
        topic: 'Customizing boxShadow elevation tokens in theme.extend',
        question: {
          en: 'How can an engineering team register a custom multi-layered card elevation token in tailwind.config.js?',
          bn: 'একটি ইঞ্জিনিয়ারিং টিম tailwind.config.js-এ কীভাবে কাস্টম মাল্টি-লেয়ার কার্ড এলিভেশন টোকেন যুক্ত করতে পারে?'
        },
        options: [
          {
            en: 'By adding custom shadow strings inside theme.extend.boxShadow (e.g. card: "0 2px 4px rgba(0,0,0,0.05), 0 10px 15px rgba(0,0,0,0.1)")',
            bn: 'theme.extend.boxShadow-এর ভেতরে কাস্টম ছায়ার মান ঘোষণা করে (যেমন card: "0 2px 4px rgba(0,0,0,0.05), 0 10px 15px rgba(0,0,0,0.1)")'
          },
          {
            en: 'By installing an external Adobe Illustrator desktop application',
            bn: 'কম্পিউটারে অ্যাডোবি ইলাস্ট্রেটর সফটওয়্যার ইনস্টল করার মাধ্যমে'
          },
          {
            en: 'By converting all website images into vector SVG files',
            bn: 'ওয়েবসাইটের সমস্ত ছবিকে ভেক্টর এসভিজি ফাইলে রূপান্তর করে'
          },
          {
            en: 'By deleting the tailwind.config.js file completely',
            bn: 'tailwind.config.js ফাইলটি সম্পূর্ণ মুছে ফেলে দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'theme.extend.boxShadow registers custom shadow utilities like shadow-card.',
          bn: 'theme.extend.boxShadow নতুন ছায়া ক্লাস যেমন shadow-card তৈরি করতে সাহায্য করে।'
        },
        explanation: {
          en: 'Defining shadow tokens under theme.extend.boxShadow creates custom utility classes like shadow-card, keeping multi-layered elevation consistent.',
          bn: 'theme.extend.boxShadow-এ নতুন টোকেন দিলে shadow-card-এর মতো নতুন ইউটিলিটি ক্লাস তৈরি হয় যা সব জায়গায় ছায়ার সমতা বজায় রাখে।'
        }
      },
      {
        id: 'q-border-radius-theme-extension',
        kind: 'mcq',
        topic: 'Standardizing corner curves with borderRadius tokens',
        question: {
          en: 'What advantage does extending borderRadius under theme.extend offer to a company design system?',
          bn: 'theme.extend-এর আওতায় borderRadius বাড়ানোর মাধ্যমে কোম্পানির ডিজাইন সিস্টেমে কী সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It standardizes corner curvatures across all buttons, modals, and input fields under named tokens like rounded-brand, preventing mismatched curves',
            bn: 'এটি rounded-brand-এর মতো টোকেন দিয়ে সমস্ত বাটন, ইনপুট ও মোডালের কোণার বক্রতায় সমতা আনে এবং অমিল দূর করে'
          },
          {
            en: 'It turns all rectangular HTML boxes into perfect 3D spheres',
            bn: 'এটি সমস্ত আয়তাকার বক্সকে নিখুঁত থ্রিডি গোলকে পরিণত করে'
          },
          {
            en: 'It speeds up database SQL queries by 30 percent',
            bn: 'এটি ডেটাবেজের এসকিউএল কোয়েরির গতি ৩০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'It disables all rounded corners permanently in every web browser',
            bn: 'এটি সমস্ত ওয়েব ব্রাউজারে গোল কোণা চিরতরে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cohesive corner radius across all interactive elements.',
          bn: 'সমস্ত ইন্টারঅ্যাক্টিভ উপাদানে কোণার মাপের মিল থাকার কথা ভাবুন।'
        },
        explanation: {
          en: 'Custom borderRadius tokens ensure all UI components share the exact same branded corner radius, creating a unified product experience.',
          bn: 'কাস্টম borderRadius টোকেন সমস্ত কম্পোনেন্টে একই ব্র্যান্ডেড কোণার বক্রতা নিশ্চিত করে একটি সামঞ্জস্যপূর্ণ অভিজ্ঞতা দেয়।'
        }
      },
      {
        id: 'q-escape-hatch-governance',
        kind: 'mcq',
        topic: 'Design token governance and escape hatches',
        question: {
          en: 'In an enterprise codebase, what does it indicate when a developer is repeatedly using arbitrary values like p-[18px] in multiple template files?',
          bn: 'একটি বড় সফটওয়্যার প্রজেক্টে কোনো ডেভেলপার যদি একাধিক ফাইলে বারবার p-[18px]-এর মতো মান ব্যবহার করেন তবে তা কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The spacing scale is missing a required design token; the team should extend tailwind.config.js with a named token rather than continuing to scatter arbitrary escapes',
            bn: 'স্পেসিং স্কেলে একটি প্রয়োজনীয় টোকেনের ঘাটতি রয়েছে; দলটির উচিত ইচ্ছামতো সংখ্যা না লিখে কনফিগারেশনে একটি নির্দিষ্ট টোকেন যোগ করা'
          },
          {
            en: 'The developer computer is infected with a computer virus',
            bn: 'ডেভেলপারের কম্পিউটারটিতে কোনো ক্ষতিকর ভাইরাস আক্রমণ করেছে'
          },
          {
            en: 'The web browser is unable to display colors accurately',
            bn: 'ওয়েব ব্রাউজারটি সঠিকভাবে কোনো রং দেখাতে ব্যর্থ হচ্ছে'
          },
          {
            en: 'Tailwind CSS is incompatible with web servers',
            bn: 'Tailwind CSS কোনো ওয়েব সার্ভারের সাথে কাজ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Repeated arbitrary values signal a missing design token in the theme.',
          bn: 'বারবার একই আরবিট্রারি মান লেখার অর্থ থিমে নির্দিষ্ট টোকেন নেই।'
        },
        explanation: {
          en: 'If an arbitrary value appears repeatedly, it indicates a design system gap. The correct remedy is to formalize it as a token in tailwind.config.js.',
          bn: 'একই আরবিট্রারি মান বারবার এলে বুঝতে হবে এটি ডিজাইন সিস্টেমের অংশ হওয়া উচিত। সমাধান হলো কনফিগ ফাইলে একে আনুষ্ঠানিক টোকেন হিসেবে যোগ করা।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-fitting-rooms',
    title: {
      en: 'Responsive Design & Modern Layouts — Mobile-First Breakpoints, Flexbox & CSS Grid',
      bn: 'রেসপন্সিভ ডিজাইন ও আধুনিক লেআউট — মোবাইল-ফার্স্ট ব্রেকপয়েন্ট, ফ্লেক্সবক্স ও গ্রিড'
    }
  }
};
