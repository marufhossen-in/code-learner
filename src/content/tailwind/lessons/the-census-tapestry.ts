import type { Lesson } from '../../../lib/types';

export const censusTapestryLesson: Lesson = {
  slug: 'the-census-tapestry',
  tech: 'tailwind',
  title: {
    en: 'Custom Plugins & Arbitrary Properties — Extending Tailwind with matchUtilities & JIT Syntax',
    bn: 'কাস্টম প্লাগিন ও আরবিট্রারি প্রপার্টি — matchUtilities ও JIT সিনট্যাক্স'
  },
  summary: {
    en: 'As applications evolve, teams inevitably encounter specialized styling requirements that fall outside standard framework classes, such as text shadows, custom scrollbars, or complex 3D perspective transforms. Rather than retreating to disorganized external CSS files, Tailwind CSS provides structured extension mechanisms through arbitrary value syntax and custom plugins. Arbitrary values like top-[17px] and complex arbitrary variants like [&>*]:p-4 provide immediate escape hatches for unique design requirements. For reusable design patterns, the official plugin API empowers developers to register new utility families using addUtilities, addVariant, and matchUtilities, unlocking first-class support for responsive breakpoints and state variants.',
    bn: 'অ্যাপ্লিকেশন বড় হওয়ার সাথে সাথে ডেভেলপাররা প্রায়শই এমন কিছু বিশেষ স্টাইলের মুখোমুখি হন যা সাধারণ ক্লাসে থাকে না, যেমন টেক্সট শ্যাডো, কাস্টম স্ক্রলবার বা থ্রিডি রূপান্তর। এর জন্য এলোমেলো সিএসএস ফাইলে ফিরে যাওয়ার বদলে Tailwind CSS আরবিট্রারি ভ্যালু এবং কাস্টম প্লাগিনের মাধ্যমে সুশৃঙ্খল সমাধান দেয়। top-[17px] বা [&>*]:p-4-এর মতো আরবিট্রারি সিনট্যাক্স তাৎক্ষণিক বিশেষ প্রয়োজন মেটায়। আর পুনর্ব্যবহারযোগ্য স্টাইলের জন্য অফিশিয়াল প্লাগিন এপিআই addUtilities, addVariant এবং matchUtilities-এর মাধ্যমে নতুন ইউটিলিটি ক্লাস তৈরি করার পূর্ণ ক্ষমতা দেয় যা রেসপন্সিভ ব্রেকপয়েন্ট ও স্টেট ভ্যারিয়েন্টের সাথে নিখুঁতভাবে কাজ করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Extending Tailwind with Arbitrary Syntax and Plugins',
        bn: 'মূল ধারণা: আরবিট্রারি সিনট্যাক্স ও প্লাগিন দিয়ে Tailwind সম্প্রসারণ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you develop custom design systems, standard utility classes occasionally lack support for specialized CSS properties like text shadows, custom scrollbars, or complex grid tracks. Rather than abandoning utility-first conventions for custom external stylesheets, Tailwind CSS provides two powerful extension mechanisms: arbitrary property syntax and custom plugins. By authoring custom plugins using plugin helper functions like matchUtilities() and addUtilities(), developers can introduce first-class reusable utilities that seamlessly support responsive breakpoints and state variants.',
        bn: 'যখন আপনি কাস্টম ডিজাইন সিস্টেম তৈরি করেন, তখন টেক্সট শ্যাডো, কাস্টম স্ক্রলবার বা জটিল গ্রিড ট্র্যাকিংয়ের মতো বিশেষ সিএসএস প্রপার্টির জন্য সরাসরি ডিফল্ট ক্লাস নাও থাকতে পারে। এর জন্য ইউটিলিটি ক্লাস ছেড়ে আলাদা সিএসএস ফাইল লেখার বদলে Tailwind CSS দুটি শক্তিশালী সম্প্রসারণ ব্যবস্থা দেয়: আরবিট্রারি প্রপার্টি সিনট্যাক্স এবং কাস্টম প্লাগিন। matchUtilities এবং addUtilities দিয়ে কাস্টম প্লাগিন তৈরি করে ডেভেলপাররা এমন নতুন ইউটিলিটি ক্লাস উপহার দিতে পারেন যা স্বয়ংক্রিয়ভাবে রেসপন্সিভ ব্রেকপয়েন্ট ও স্টেট ভ্যারিয়েন্ট সমর্থন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Arbitrary Value Syntax',
          def: {
            en: 'Square bracket notation (e.g. top-[17px], bg-[#1da1f2]) compiling one-off CSS values on demand through the JIT compiler',
            bn: 'তৃতীয় বন্ধনী নোটেশন (যেমন top-[17px], bg-[#1da1f2]) যা JIT কম্পাইলারের মাধ্যমে সাথে সাথে কাস্টম সিএসএস রুল তৈরি করে'
          }
        },
        {
          term: 'Arbitrary Variants',
          def: {
            en: 'Selector expressions inside brackets (e.g. [&>*]:mb-4) that target specific child elements or compound states directly from HTML',
            bn: 'বন্ধনীতে লেখা সিলেক্টর (যেমন [&>*]:mb-4) যা এইচটিএমএল থেকেই সরাসরি চাইল্ড উপাদান বা বিশেষ স্টেটকে টার্গেট করতে পারে'
          }
        },
        {
          term: 'matchUtilities API',
          def: {
            en: 'Tailwind plugin function that registers dynamic parameterized utilities supporting both theme tokens and arbitrary values',
            bn: 'Tailwind প্লাগিন ফাংশন যা থিম টোকেন ও আরবিট্রারি মান উভয়টি গ্রহণকারী ডাইনামিক ইউটিলিটি ক্লাস তৈরি করে'
          }
        },
        {
          term: 'addVariant API',
          def: {
            en: 'Tailwind plugin function that creates custom state modifiers (such as composite hocus: combining hover and focus)',
            bn: 'Tailwind প্লাগিন ফাংশন যা নতুন কাস্টম স্টেট মডিফায়ার (যেমন হোভার ও ফোকাস একত্রকারী hocus:) তৈরি করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'arbitrary-values-mechanics',
      text: {
        en: 'Arbitrary Values and Type Hinting in JIT',
        bn: 'JIT-এ আরবিট্রারি ভ্যালু ও টাইপ হিন্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The JIT compiler introduced arbitrary values syntax to provide a seamless escape hatch when working with exact pixel specs from Figma designs. Writing h-[calc(100vh-4rem)] or bg-[#1da1f2] allows developers to remain in their template markup without creating throwaway CSS classes.',
        bn: 'ফিগমা ডিজাইনের হুবহু পিক্সেল মাপ নিয়ে কাজ করার সময় JIT কম্পাইলারের আরবিট্রারি ভ্যালু চমৎকার সুবিধা দেয়। h-[calc(100vh-4rem)] বা bg-[#1da1f2] লিখলে কোনো বাড়তি সিএসএস ক্লাস না বানিয়েই ডেভেলপাররা সরাসরি এইচটিএমএলে কাজ চালিয়ে যেতে পারেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In cases where a property name is ambiguous—such as text-[var(--custom-value)] which could represent a font-size or a text-color—Tailwind supports explicit type hints. Writing text-[length:var(--my-size)] instructs the engine to output font-size, while writing text-[color:var(--my-color)] forces color output.',
        bn: 'যখন কোনো প্রপার্টির ধরন অস্পষ্ট হয়—যেমন text-[var(--custom-value)] ফন্ট সাইজ নাকি লেখার রং তা বোঝা যায় না—তখন Tailwind টাইপ হিন্ট সমর্থন করে। text-[length:var(--my-size)] লিখলে ইঞ্জিন font-size তৈরি করে, আর text-[color:var(--my-color)] লিখলে color তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'custom-plugin-authoring',
      text: {
        en: 'Authoring Custom Plugins with matchUtilities',
        bn: 'matchUtilities দিয়ে কাস্টম প্লাগিন তৈরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a new styling utility is needed repeatedly across a team, authoring a custom Tailwind plugin is superior to writing static CSS. Plugins registered via plugin() in tailwind.config.js automatically inherit full variant support: they can be prefixed with md:, hover:, focus:, and dark: with zero extra effort.',
        bn: 'যখন কোনো নতুন স্টাইল পুরো টিমে বারবার প্রয়োজন হয়, তখন সাধারণ সিএসএস না লিখে কাস্টম প্লাগিন বানানো সবচেয়ে বুদ্ধিমানের কাজ। tailwind.config.js-এ প্লাগিন তৈরি করলে তা নিজ থেকেই md:, hover:, focus: এবং dark: প্রিফিক্স সমর্থন করে কোনো বাড়তি কোড ছাড়াই।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The matchUtilities function is the modern standard for parameterized plugins. By defining matchUtilities({ "text-shadow": (value) => ({ textShadow: value }) }, { values: theme("textShadow") }), Tailwind simultaneously generates theme-based classes like text-shadow-sm and supports arbitrary inputs like text-shadow-[0_2px_4px_#000].',
        bn: 'ডাইনামিক প্লাগিনের জন্য matchUtilities হলো আধুনিক মানদণ্ড। matchUtilities({ "text-shadow": (value) => ({ textShadow: value }) }, { values: theme("textShadow") }) সংজ্ঞায়িত করলে Tailwind একই সাথে থিমভিত্তিক ক্লাস (text-shadow-sm) এবং আরবিট্রারি ক্লাস (text-shadow-[0_2px_4px_#000]) উভয়টিই তাৎক্ষণিক তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Extension Methodologies',
        bn: 'কাঠামোগত তুলনা: এক্সটেনশন পদ্ধতি'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Extension Technique', bn: 'এক্সটেনশন কৌশল' },
        { en: 'Reusability Across App', bn: 'অ্যাপজুড়ে পুনর্ব্যবহারযোগ্যতা' },
        { en: 'Variant Prefix Support', bn: 'ভ্যারিয়েন্ট প্রিফিক্স সমর্থন' },
        { en: 'Ideal Use Case', bn: 'উপযুক্ত ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Arbitrary Value (w-[320px])', bn: 'আরবিট্রারি ভ্যালু (w-[320px])' },
          { en: 'Low; isolated to the specific HTML tag', bn: 'কম; কেবল নির্দিষ্ট ট্যাগে সীমাবদ্ধ' },
          { en: 'Full; supports hover:, md:, dark: prefixes', bn: 'সম্পূর্ণ; hover:, md:, dark: সবই চলে' },
          { en: 'Rare, one-off pixel dimensions from Figma mocks', bn: 'ডিজাইনের বিশেষ এককালীন পিক্সেল মাপ' }
        ],
        [
          { en: 'Custom Plugin (matchUtilities)', bn: 'কাস্টম প্লাগিন (matchUtilities)' },
          { en: 'High; published across the entire engineering team', bn: 'উচ্চ; পুরো টিমের সবাই ব্যবহার করতে পারে' },
          { en: 'Full; automatically inherits all responsive variants', bn: 'সম্পূর্ণ; সমস্ত ভ্যারিয়েন্ট নিজ থেকে কাজ করে' },
          { en: 'Missing CSS properties (text-shadow, scrollbars)', bn: 'অনুপস্থিত প্রপার্টি (টেক্সট শ্যাডো, স্ক্রলবার)' }
        ],
        [
          { en: 'Raw Custom CSS File', bn: 'আলাদা কাস্টম সিএসএস ফাইল' },
          { en: 'Medium; manual class names in external file', bn: 'মাঝারি; আলাদা ফাইলে ক্লাসের নাম লিখতে হয়' },
          { en: 'None; requires writing duplicate media queries manually', bn: 'নেই; নিজে হাতে আবার মিডিয়া কোয়েরি লিখতে হয়' },
          { en: 'Complex 3D animations or legacy system resets', bn: 'জটিল থ্রিডি অ্যানিমেশন বা পুরোনো কোড রিসেট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Custom Plugin & matchUtilities Engine',
        bn: 'বাস্তব কোড সিমুলেশন: কাস্টম প্লাগিন ও matchUtilities ইঞ্জিন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind Custom Plugin & matchUtilities in Node.js

class PluginEngine {
  public utilities = new Map<string, Record<string, string>>();
  public matchers = new Map<string, { generator: (v: string) => Record<string, string>; values: Record<string, string> }>();

  // Registers static utilities
  addUtilities(utilityMap: Record<string, Record<string, string>>) {
    for (const [cls, rules] of Object.entries(utilityMap)) {
      this.utilities.set(cls, rules);
    }
  }

  // Registers dynamic parameterized utilities (like matchUtilities)
  matchUtilities(name: string, generator: (v: string) => Record<string, string>, options: { values?: Record<string, string> } = {}) {
    this.matchers.set(name, { generator, values: options.values || {} });
  }

  // Resolves class token to CSS
  resolveToken(token: string) {
    if (this.utilities.has(token)) {
      return this.utilities.get(token);
    }

    // Check dynamic matchers
    for (const [prefix, { generator, values }] of this.matchers) {
      if (token.startsWith(prefix + '-[') && token.endsWith(']')) {
        // Arbitrary value
        const val = token.slice(prefix.length + 2, -1);
        return generator(val);
      } else if (token.startsWith(prefix + '-')) {
        // Theme value
        const key = token.replace(prefix + '-', '');
        if (values[key]) {
          return generator(values[key]);
        }
      }
    }

    return null;
  }
}

const engine = new PluginEngine();

// 1. Register static utility
engine.addUtilities({
  'scrollbar-none': { 'scrollbar-width': 'none', '-ms-overflow-style': 'none' }
});

// 2. Register dynamic text-shadow utility via matchUtilities
engine.matchUtilities('text-shadow', (value) => ({ 'text-shadow': value }), {
  values: {
    sm: '0 1px 2px rgba(0, 0, 0, 0.2)',
    lg: '0 4px 8px rgba(0, 0, 0, 0.4)'
  }
});

const staticRes = engine.resolveToken('scrollbar-none');
const themeRes = engine.resolveToken('text-shadow-sm');
const arbitraryRes = engine.resolveToken('text-shadow-[0_2px_4px_#000]');

console.log('Static utility scrollbar-none exists:', Boolean(staticRes));
// -> Static utility scrollbar-none exists: true
console.log('Dynamic text-shadow-sm generated value:', themeRes ? themeRes['text-shadow'] : null);
// -> Dynamic text-shadow-sm generated value: 0 1px 2px rgba(0, 0, 0, 0.2)
console.log('Arbitrary text-shadow generated value:', arbitraryRes ? arbitraryRes['text-shadow'] : null);
// -> Arbitrary text-shadow generated value: 0_2px_4px_#000
console.log('Total dynamic plugin matchers registered:', engine.matchers.size);
// -> Total dynamic plugin matchers registered: 1`,
      caption: {
        en: 'Simulation: registers static scrollbar-none and dynamic text-shadow with theme sm (0 1px 2px rgba(0, 0, 0, 0.2)) and arbitrary value',
        bn: 'সিমুলেশন: স্ট্যাটিক scrollbar-none এবং থিম sm (0 1px 2px rgba(0, 0, 0, 0.2)) ও আরবিট্রারি মানসহ ডাইনামিক text-shadow নিবন্ধন করে'
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
        en: 'Rule 1: Use type hints when arbitrary property values are ambiguous. Writing text-[length:var(--my-size)] versus text-[color:var(--my-color)] ensures the JIT compiler produces the intended CSS property.',
        bn: 'নিয়ম ১: অস্পষ্ট আরবিট্রারি মানের ক্ষেত্রে সর্বদা টাইপ হিন্ট ব্যবহার করুন। text-[length:var(--my-size)] বনাম text-[color:var(--my-color)] লিখলে ইঞ্জিন সঠিকভাবে কাঙ্ক্ষিত সিএসএস তৈরি করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Prefer custom plugins using matchUtilities over ad-hoc CSS files. Plugins automatically inherit all responsive prefixes (sm:, md:) and state variants (hover:, dark:) without manual coding.',
        bn: 'নিয়ম ২: বিচ্ছিন্ন সিএসএস ফাইলের বদলে matchUtilities দিয়ে কাস্টম প্লাগিন তৈরি করুন। প্লাগিনগুলো নিজ থেকেই সমস্ত রেসপন্সিভ (sm:, md:) ও স্টেট ভ্যারিয়েন্ট (hover:, dark:) সমর্থন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Replace spaces with underscores in arbitrary values. Because HTML classes are space-separated, writing grid-cols-[200px_1fr] uses underscores to represent CSS spaces.',
        bn: 'নিয়ম ৩: আরবিট্রারি মানের মাঝে স্পেসের বদলে আন্ডারস্কোর ব্যবহার করুন। যেহেতু এইচটিএমএল ক্লাস স্পেস দিয়ে আলাদা হয়, তাই grid-cols-[200px_1fr]-এ আন্ডারস্কোর স্পেস হিসেবে কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Create composite variants using addVariant for common interaction pairings. Registering addVariant("hocus", ["&:hover", "&:focus"]) allows concise hocus:bg-blue-600 declarations.',
        bn: 'নিয়ম ৪: সাধারণ স্টেট কম্বিনেশনের জন্য addVariant দিয়ে কম্পোজিট ভ্যারিয়েন্ট বানান। addVariant("hocus", ["&:hover", "&:focus"]) তৈরি করলে সহজে hocus:bg-blue-600 দিয়ে হোভার ও ফোকাস একসাথে করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-cen-ex1',
      kind: 'mcq',
      topic: 'Handling spaces in arbitrary values',
      question: {
        en: 'How do developers express spaces within CSS arbitrary values in Tailwind CSS (e.g. grid-template-columns: 200px 1fr)?',
        bn: 'Tailwind CSS-এ সিএসএস আরবিট্রারি মানের ভেতরের স্পেস কীভাবে লিখতে হয় (যেমন grid-template-columns: 200px 1fr)?'
      },
      options: [
        {
          en: 'By using underscores (_) instead of literal spaces, such as grid-cols-[200px_1fr], because spaces would break HTML class tokenization',
          bn: 'আসল স্পেসের বদলে আন্ডারস্কোর (_) ব্যবহার করে, যেমন grid-cols-[200px_1fr], কারণ সাধারণ স্পেস দিলে এইচটিএমএল ক্লাস ভেঙে যায়'
        },
        {
          en: 'By wrapping the space in double quotation marks inside the brackets',
          bn: 'বন্ধনীটির ভেতরে স্পেসকে ডাবল কোটেশনের মধ্যে আটকে দিয়ে'
        },
        {
          en: 'By typing the word "SPACE" in capital letters between dimensions',
          bn: 'মাপগুলোর মাঝে বড় হাতের অক্ষরে "SPACE" শব্দটি টাইপ করে'
        },
        {
          en: 'Because spaces in CSS values are completely forbidden by web browsers',
          bn: 'কারণ সিএসএস মানের মাঝে স্পেস রাখা কোনো ওয়েব ব্রাউজারে সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'HTML class attributes use spaces to separate distinct classes.',
        bn: 'এইচটিএমএলে একাধিক ক্লাসকে আলাদা করতে স্পেস ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Because HTML uses spaces as class separators, Tailwind substitutes underscores for spaces within arbitrary brackets (e.g. grid-cols-[200px_1fr]).',
        bn: 'যেহেতু এইচটিএমএলে স্পেস মানেই নতুন ক্লাস, তাই বন্ধনীর ভেতরের স্পেস বোঝাতে আন্ডারস্কোর (যেমন grid-cols-[200px_1fr]) ব্যবহার করা হয়।'
      }
    },
    {
      id: 'tw-cen-ex2',
      kind: 'mcq',
      topic: 'Arbitrary value type hinting',
      question: {
        en: 'When is type hinting required in arbitrary values (e.g. text-[color:var(--brand)])?',
        bn: 'আরবিট্রারি মানের ক্ষেত্রে কখন টাইপ হিন্ট দেওয়া আবশ্যক হয় (যেমন text-[color:var(--brand)])?'
      },
      options: [
        {
          en: 'When a utility prefix is ambiguous and can map to multiple distinct CSS properties (such as text- which can mean font-size or text color)',
          bn: 'যখন কোনো ক্লাসের প্রিফিক্স অস্পষ্ট হয় এবং একাধিক ভিন্ন সিএসএস প্রপার্টিকে নির্দেশ করতে পারে (যেমন text- দিয়ে ফন্ট সাইজ বা টেক্সট কালার দুটোই হতে পারে)'
        },
        {
          en: 'Only when developing mobile apps for Apple iOS devices',
          bn: 'কেবলমাত্র অ্যাপল আইওএস ডিভাইসের জন্য মোবাইল অ্যাপ তৈরির সময়'
        },
        {
          en: 'Whenever the CSS file size exceeds 500 megabytes',
          bn: 'যখনই সিএসএস ফাইলের আকার ৫০০ মেগাবাইট ছাড়িয়ে যায়'
        },
        {
          en: 'Type hinting is strictly required on every single Tailwind class',
          bn: 'Tailwind-এর প্রতিটি ক্লাসেই টাইপ হিন্ট দেওয়া বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Resolving ambiguity between length and color in text-* utilities.',
        bn: 'text-* ইউটিলিটিতে দৈর্ঘ্য বনাম রঙের দ্বিধা দূর করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Tailwind cannot deduce whether a CSS variable in text-[var(--x)] is a font size or color. Type hints like [color:var(--x)] disambiguate the property.',
        bn: 'text-[var(--x)]-এর ভ্যারিয়েবলটি ফন্ট সাইজ নাকি রঙ তা বোঝা যায় না। তাই [color:var(--x)] দিয়ে সুনির্দিষ্ট প্রপার্টি চিনিয়ে দিতে হয়।'
      }
    },
    {
      id: 'tw-cen-ex3',
      kind: 'mcq',
      topic: 'Advantage of matchUtilities for custom plugins',
      question: {
        en: 'Why is the matchUtilities plugin API superior to writing static CSS classes in an external stylesheet?',
        bn: 'বাইরের স্টাইলশিটে সাধারণ সিএসএস লেখার চেয়ে matchUtilities প্লাগিন এপিআই ব্যবহার করা কেন অনেক ভালো?'
      },
      options: [
        {
          en: 'It seamlessly generates both theme-configured classes and dynamic arbitrary value classes while automatically supporting all responsive (md:) and state (hover:) variants',
          bn: 'এটি একই সাথে থিম কনফিগার করা ক্লাস ও ডাইনামিক আরবিট্রারি ক্লাস উভয়ই তৈরি করে এবং স্বয়ংক্রিয়ভাবে সমস্ত রেসপন্সিভ (md:) ও স্টেট (hover:) ভ্যারিয়েন্ট সমর্থন করে'
        },
        {
          en: 'It eliminates the need for computer graphics processors (GPUs)',
          bn: 'এটি কম্পিউটারে কোনো গ্রাফিক্স কার্ড বা জিপিইউ থাকার প্রয়োজনীয়তা দূর করে'
        },
        {
          en: 'It makes database queries run 10 times faster in Node.js',
          bn: 'এটি নোড.জেএসে ডেটাবেজ কোয়েরির গতি ১০ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'Because static CSS files were officially banned by Google in 2025',
          bn: 'কারণ ২০২৫ সালে গুগল আনুষ্ঠানিকভাবে সাধারণ সিএসএস ফাইল নিষিদ্ধ করেছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Theme integration plus arbitrary value support and variant inheritance.',
        bn: 'থিমের সাথে যুক্ত থাকা এবং স্বয়ংক্রিয় ভ্যারিয়েন্ট সুবিধা পাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'matchUtilities generates fully integrated Tailwind utilities. They accept theme values, arbitrary values, and support every variant without writing extra CSS.',
        bn: 'matchUtilities পূর্ণাঙ্গ ইউটিলিটি ক্লাস বানায়। এটি থিমের মান ও আরবিট্রারি মান দুটোই নেয় এবং কোনো বাড়তি কোড ছাড়াই সমস্ত ভ্যারিয়েন্টে কাজ করে।'
      }
    },
    {
      id: 'tw-cen-ex4',
      kind: 'mcq',
      topic: 'Arbitrary variants targeting children',
      question: {
        en: 'What does the arbitrary variant class [&>*]:p-4 accomplish when placed on a container element?',
        bn: 'কোনো কন্টেইনার উপাদানে [&>*]:p-4 আরবিট্রারি ভ্যারিয়েন্ট ক্লাসটি দিলে কী কাজ সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'It applies padding of 1rem (16px) to every direct child element of that container without needing utility classes on each individual child',
          bn: 'প্রতিটি চাইল্ড উপাদানে আলাদা ক্লাস না বসিয়েই এটি সেই কন্টেইনারের ভেতরের প্রতিটি সরাসরি সন্তান উপাদানে ১ রেম (১৬px) প্যাডিং প্রয়োগ করে'
        },
        {
          en: 'It permanently deletes all child elements from the web browser DOM',
          bn: 'এটি ব্রাউজার ডম থেকে সমস্ত চাইল্ড উপাদানকে চিরতরে মুছে ফেলে'
        },
        {
          en: 'It converts all text into encrypted binary computer code',
          bn: 'এটি সমস্ত লেখাকে এনক্রিপ্ট করা বাইনারি কোডে রূপান্তর করে'
        },
        {
          en: 'Because arbitrary variants can only be executed on Linux operating systems',
          bn: 'কারণ আরবিট্রারি ভ্যারিয়েন্ট কেবল লিনাক্স অপারেটিং সিস্টেমে চালানো সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'The [&>*] selector targets all direct children of the element.',
        bn: '[&>*] সিলেক্টরটি উপাদানের সমস্ত সরাসরি সন্তানকে টার্গেট করে।'
      },
      explanation: {
        en: 'Arbitrary variants allow targeting child elements directly from markup using CSS selectors (e.g. & > *), eliminating tedious repetition on multiple children.',
        bn: 'আরবিট্রারি ভ্যারিয়েন্ট সরাসরি মার্কআপ থেকেই সিএসএস সিলেক্টর (& > *) দিয়ে চাইল্ড উপাদানকে স্টাইল করতে দেয়, ফলে বারবার একই ক্লাস লেখার ঝামেলা বাঁচে।'
      }
    }
  ],
  quiz: {
    id: 'the-census-tapestry-quiz',
    title: {
      en: 'Custom Plugins & Arbitrary Properties Quiz',
      bn: 'কাস্টম প্লাগিন ও আরবিট্রারি প্রপার্টি কুইজ'
    },
    questions: [
      {
        id: 'q-custom-composite-variants',
        kind: 'mcq',
        topic: 'Creating composite variants with addVariant',
        question: {
          en: 'How does authoring a custom variant using addVariant("hocus", ["&:hover", "&:focus"]) streamline interactive component styling?',
          bn: 'addVariant("hocus", ["&:hover", "&:focus"]) দিয়ে কাস্টম ভ্যারিয়েন্ট তৈরি করলে ইন্টারঅ্যাক্টিভ কম্পোনেন্ট স্টাইলিং কীভাবে সহজ হয়?'
        },
        options: [
          {
            en: 'It allows developers to write hocus:bg-blue-600 once to apply styles on both hover and focus states simultaneously, reducing repetitive class duplication',
            bn: 'এটি ডেভেলপারদের একবারে hocus:bg-blue-600 লেখার সুযোগ দেয় যা হোভার এবং ফোকাস উভয় অবস্থাতেই কাজ করে, ফলে ক্লাসের পুনরাবৃত্তি কমে'
          },
          {
            en: 'It automatically files trademark paperwork for the component design',
            bn: 'এটি কম্পোনেন্ট ডিজাইনের জন্য স্বয়ংক্রিয়ভাবে ট্রেডমার্ক পেপার ফাইল করে দেয়'
          },
          {
            en: 'It doubles the network speed of the client mobile phone',
            bn: 'এটি ক্লায়েন্টের মোবাইল ফোনের ইন্টারনেট স্পিড দ্বিগুণ করে ফেলে'
          },
          {
            en: 'Because hover and focus cannot be combined in standard CSS',
            bn: 'কারণ সাধারণ সিএসএসে হোভার এবং ফোকাসকে কখনো একসাথে করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'A composite modifier targeting multiple interaction states at once.',
          bn: 'একসাথে একাধিক ইন্টারঅ্যাকশন স্টেটকে টার্গেট করার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'Custom variants bundle multiple selectors. The hocus: variant activates on both pointer hover and keyboard focus, keeping class lists concise and accessible.',
          bn: 'কাস্টম ভ্যারিয়েন্ট একাধিক সিলেক্টরকে একসাথে বাঁধে। hocus: হোভার ও ফোকাস উভয় ক্ষেত্রে কাজ করে ক্লাস লিস্টকে ছোট ও কার্যকর রাখে।'
        }
      },
      {
        id: 'q-data-attribute-styling',
        kind: 'mcq',
        topic: 'Styling headless UI with data-attribute variants',
        question: {
          en: 'How can developers style accessible headless UI libraries (like Radix UI) based on state attributes like data-state="open"?',
          bn: 'অ্যাক্সেসিবল হেডলেস লাইব্রেরিগুলোর (যেমন Radix UI) data-state="open" অ্যাট্রিবিউটের ওপর ভিত্তি করে কীভাবে স্টাইল করা যায়?'
        },
        options: [
          {
            en: 'By using data attribute variants like data-[state=open]:bg-blue-100 or configuring custom data variants in tailwind.config.js',
            bn: 'data-[state=open]:bg-blue-100-এর মতো ডেটা অ্যাট্রিবিউট ভ্যারিয়েন্ট ব্যবহার করে অথবা কনফিগারেশনে কাস্টম ডেটা ভ্যারিয়েন্ট তৈরি করে'
          },
          {
            en: 'By writing inline JavaScript alert() popups for every user click',
            bn: 'প্রতিটি ক্লিকে জাভাস্ক্রিপ্ট alert() পপআপ তৈরি করে দিয়ে'
          },
          {
            en: 'By uninstalling Radix UI from the package.json dependencies',
            bn: 'প্রজেক্টের package.json থেকে Radix UI সম্পূর্ণ আনইনস্টল করে দিয়ে'
          },
          {
            en: 'Because data attributes can only be styled using Java programming code',
            bn: 'কারণ ডেটা অ্যাট্রিবিউট কেবল জাভা প্রোগ্রামিং কোড দিয়েই স্টাইল করা সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tailwind data-* variants target data attributes directly.',
          bn: 'Tailwind-এর data-* ভ্যারিয়েন্ট সরাসরি ডেটা অ্যাট্রিবিউটকে টার্গেট করে।'
        },
        explanation: {
          en: 'Tailwind natively supports data attributes. Writing data-[state=open]:rotate-180 animates elements based on state without writing custom CSS.',
          bn: 'Tailwind সরাসরি ডেটা অ্যাট্রিবিউট সমর্থন করে। data-[state=open]:rotate-180 লিখলে কোনো বাড়তি সিএসএস ছাড়াই স্টেট অনুযায়ী উপাদান অ্যানিমেট হয়।'
        }
      },
      {
        id: 'q-when-to-write-plugins',
        kind: 'mcq',
        topic: 'Deciding between arbitrary values and custom plugins',
        question: {
          en: 'When should an engineering organization migrate from using arbitrary values like text-[13px] to a formal theme token or custom plugin?',
          bn: 'কোনো ইঞ্জিনিয়ারিং টিমের কখন text-[13px]-এর মতো মান ছেড়ে আনুষ্ঠানিক থিম টোকেন বা কাস্টম প্লাগিনে চলে যাওয়া উচিত?'
        },
        options: [
          {
            en: 'When the value or pattern appears repeatedly across multiple files and components, signaling that it represents a missing design system token',
            bn: 'যখন কোনো মান বা প্যাটার্ন একাধিক ফাইল ও কম্পোনেন্টে বারবার ব্যবহৃত হতে থাকে, যা প্রমাণ করে যে এটি ডিজাইন সিস্টেমে ঘাটতি থাকা একটি প্রয়োজনীয় টোকেন'
          },
          {
            en: 'Only when the software application is launched on the Android Play Store',
            bn: 'কেবল তখনই যখন সফটওয়্যারটি অ্যান্ড্রয়েড প্লে স্টোরে রিলিজ করা হয়'
          },
          {
            en: 'Whenever the development team switches from Google Chrome to Firefox',
            bn: 'যখনই ডেভেলপমেন্ট টিম গুগল ক্রোম ছেড়ে ফায়ারফক্সে কাজ শুরু করে'
          },
          {
            en: 'Never; writing custom plugins is completely discouraged in modern web design',
            bn: 'কখনোই নয়; আধুনিক ওয়েব ডিজাইনে কাস্টম প্লাগিন লেখা একেবারেই নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Repeated arbitrary values indicate a design system token waiting to be named.',
          bn: 'বারবার একই আরবিট্রারি মান আসার অর্থ এটি একটি প্রাতিষ্ঠানিক টোকেন হওয়ার দাবি রাখে।'
        },
        explanation: {
          en: 'Arbitrary values are designed for rare one-offs. When the same exception appears across multiple components, formalizing it in the theme restores consistency.',
          bn: 'আরবিট্রারি মান এককালীন ব্যতিক্রমের জন্য তৈরি। একই ব্যতিক্রম বারবার দেখা দিলে থিমে তাকে টোকেন হিসেবে যুক্ত করাই সঠিক সিদ্ধান্ত।'
        }
      },
      {
        id: 'q-arbitrary-supports-queries',
        kind: 'mcq',
        topic: 'Progressive enhancement with arbitrary @supports variants',
        question: {
          en: 'How can developers apply progressive enhancement styles only if the browser supports a modern CSS feature like backdrop-filter?',
          bn: 'ব্রাউজার যদি backdrop-filter-এর মতো আধুনিক সিএসএস ফিচার সমর্থন করে কেবল তখনই স্টাইল কার্যকর হবে—এটি কীভাবে তৈরি করবেন?'
        },
        options: [
          {
            en: 'By using the arbitrary supports variant: [@supports(backdrop-filter:blur(0))]:backdrop-blur-md',
            bn: 'আরবিট্রারি supports ভ্যারিয়েন্ট ব্যবহার করে: [@supports(backdrop-filter:blur(0))]:backdrop-blur-md'
          },
          {
            en: 'By checking the user credit card score before rendering the page',
            bn: 'পেজ রেন্ডার করার আগে ব্যবহারকারীর ক্রেডিট কার্ডের স্কোর যাচাই করে'
          },
          {
            en: 'By completely disabling the website on older computer monitors',
            bn: 'পুরোনো কম্পিউটার মনিটরে ওয়েবসাইটটি দেখানো চিরতরে বন্ধ করে দিয়ে'
          },
          {
            en: 'Because @supports queries cannot be expressed in web development',
            bn: 'কারণ ওয়েব ডেভেলপমেন্টে কোনো @supports কোয়েরি লেখা সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The [@supports(...)] variant checks feature support directly from markup.',
          bn: '[@supports(...)] ভ্যারিয়েন্ট সরাসরি মার্কআপ থেকেই ব্রাউজারের ফিচার সমর্থন পরীক্ষা করে।'
        },
        explanation: {
          en: 'Tailwind allows embedding feature queries directly in class names. [@supports(...)]: only compiles and applies styles if the browser supports that specific CSS property.',
          bn: 'Tailwind সরাসরি ক্লাসের ভেতর ফিচার কোয়েরি লেখার সুবিধা দেয়। ব্রাউজার ফিচারটি সমর্থন করলেই কেবল [@supports(...)]: স্টাইলটি প্রয়োগ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-house-dress-rehearsal',
    title: {
      en: 'Production Optimization, Purging & Tailwind v4 Architecture — Tree-Shaking, Bundle Budgets & Best Practices',
      bn: 'প্রোডাকশন অপটিমাইজেশন, পার্জিং ও টেইলউইন্ড ৪ — ট্রি-শেকিং ও বান্ডিল বাজেট'
    }
  }
};
