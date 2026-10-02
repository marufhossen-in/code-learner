import type { Lesson } from '../../../lib/types';

export const typographyParlorLesson: Lesson = {
  slug: 'the-typography-parlor',
  tech: 'tailwind',
  title: {
    en: 'Typography, Forms & Official Plugins — @tailwindcss/typography, Forms & Aspect-Ratio',
    bn: 'টাইপোগ্রাফি, ফর্ম ও অফিসিয়াল প্লাগিন — @tailwindcss/typography, ফর্ম ও অ্যাসপেক্ট-রেশিও'
  },
  summary: {
    en: 'Typography directly governs reading comprehension, visual hierarchy, and interface legibility across digital products. Tailwind CSS delivers calibrated typography scales where every font-size token is paired with an optimal line-height tuple, preventing cramped text and uneven baseline rhythm. Essential layout constraints like max-w-prose enforce the ideal 65-character line length to avoid reader eye fatigue, while modern utilities like text-balance and text-pretty eliminate awkward headline breaks and orphan words. For rendering raw markdown or CMS articles, the official @tailwindcss/typography plugin provides the .prose wrapper, automatically styling unstyled HTML elements with accessible spacing, lists, quotes, and dark-mode inversions.',
    bn: 'ডিজিটাল প্রোডাক্টে তথ্যের পাঠযোগ্যতা, ভিজ্যুয়াল স্তরবিন্যাস ও চোখের স্বাচ্ছন্দ্য নিশ্চিত করতে টাইপোগ্রাফির ভূমিকা অপরিসীম। Tailwind CSS একটি নিখুঁত টাইপোগ্রাফি স্কেল সরবরাহ করে যেখানে প্রতিটি ফন্ট-সাইজের সাথে উপযুক্ত লাইন-হাইটের জুটি থাকে, যা লেখাকে ঘেঁষাঘেঁষি হওয়া থেকে রক্ষা করে। max-w-prose-এর মতো পরিমাপক ৬৫ অক্ষরের আদর্শ লাইনের দৈর্ঘ্য বজায় রেখে পাঠকের চোখের ক্লান্তি দূর করে, এবং text-balance ও text-pretty শিরোনামের সৌন্দর্য বৃদ্ধি করে। মার্কডাউন বা সিএমএস থেকে আসা কনটেন্ট সুন্দরভাবে সাজাতে অফিশিয়াল @tailwindcss/typography প্লাগিন .prose ক্লাস দেয়, যা সাধারণ এইচটিএমএল ট্যাগগুলোকে স্বয়ংক্রিয়ভাবে আকর্ষণীয় স্টাইল ও ডার্ক মোডে সাজিয়ে তোলে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Typography Scale Tuples and Reading Flow',
        bn: 'মূল ধারণা: টাইপোগ্রাফি স্কেল ও পড়ার সাবলীল ছন্দ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design content-heavy applications like blogs, documentation portals, or news magazines, typography choices directly determine reading comfort and comprehension. Sizing text without proportional line-height creates cramped, unreadable paragraphs, while excessively wide lines force readers to lose their place when scanning back to the left margin. Tailwind CSS solves these challenges with calibrated font-size and line-height tuples, reading constraints like max-w-prose, and the official @tailwindcss/typography plugin.',
        bn: 'যখন আপনি ব্লগ, ডকুমেন্টেশন পোর্টাল বা অনলাইন পত্রিকার মতো কনটেন্ট-প্রধান অ্যাপ্লিকেশন ডিজাইন করেন, তখন টাইপোগ্রাফির মান সরাসরি পাঠযোগ্যতা ও ব্যবহারকারীর স্বাচ্ছন্দ্য নির্ধারণ করে। লাইনের উচ্চতা ঠিক না রেখে শুধু লেখার সাইজ বাড়ালে লেখা ঘেঁষাঘেঁষি হয়ে পড়ে, আর লাইন অতিরিক্ত চওড়া হলে বামে ফিরে পড়তে গিয়ে পাঠক খেই হারিয়ে ফেলেন। Tailwind CSS নিখুঁত ফন্ট-সাইজ ও লাইন-হাইট অনুপাত, max-w-prose-এর মতো রিডিং বাউন্ডারি এবং অফিশিয়াল @tailwindcss/typography প্লাগিনের মাধ্যমে এই সমস্যার আদর্শ সমাধান দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Font Size & Line Height Tuple',
          def: {
            en: 'Tailwind architecture where font-size utilities automatically package proportional line-heights (e.g. text-base applies 1rem font with 1.5rem leading)',
            bn: 'Tailwind-এর নিয়ম যেখানে ফন্ট সাইজ ক্লাসের সাথে উপযুক্ত লাইন হাইট নিজে থেকেই যুক্ত থাকে (যেমন text-base দেয় ১ রেম ফন্ট ও ১.৫ রেম লাইন হাইট)'
          }
        },
        {
          term: 'max-w-prose Constraint',
          def: {
            en: 'The optimal typographical line-length constraint of approximately 65 characters (65ch) preventing cognitive fatigue during prolonged reading',
            bn: 'প্রায় ৬৫ অক্ষরের (65ch) আদর্শ লাইন-দৈর্ঘ্য যা দীর্ঘ সময় পড়ার ক্ষেত্রে চোখের ক্লান্তি দূর করে'
          }
        },
        {
          term: '@tailwindcss/typography (.prose)',
          def: {
            en: 'Official plugin providing sensible, beautiful typographic styling for raw, unstyled HTML rendered from Markdown or headless CMS backends',
            bn: 'অফিসিয়াল প্লাগিন যা মার্কডাউন বা সিএমএস থেকে আসা সাধারণ এইচটিএমএল ট্যাগগুলোকে নিজে থেকেই সুন্দর টাইপোগ্রাফিতে সাজিয়ে তোলে'
          }
        },
        {
          term: 'text-balance and text-pretty',
          def: {
            en: 'Modern CSS text-wrap utilities that evenly distribute headline line-breaks and prevent single orphan words at the end of paragraphs',
            bn: 'আধুনিক সিএসএস ক্লাস যা শিরোনামের লাইনগুলোকে সমানভাবে ভাঙে এবং অনুচ্ছেদের শেষে একা কোনো শব্দ ঝুলে থাকা রোধ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'type-scale-tuples',
      text: {
        en: 'The Font Size & Line Height Tuple System',
        bn: 'ফন্ট সাইজ ও লাইন হাইটের যৌথ অনুপাত ব্যবস্থা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In basic CSS, changing font-size without adjusting line-height causes text lines to crash into one another. Tailwind resolves this by bundling proportional line-heights into each text utility. Calling text-sm applies 0.875rem (14px) with 1.25rem (20px) leading. Calling text-base applies 1rem (16px) with 1.5rem (24px) leading.',
        bn: 'সাধারণ সিএসএসে লাইন হাইট পরিবর্তন না করে কেবল ফন্ট সাইজ বাড়ালে এক লাইনের লেখা অন্য লাইনের গায়ে উঠে যায়। Tailwind প্রতিটি টেক্সট ক্লাসের সাথে উপযুক্ত লাইন হাইট বেঁধে দিয়ে এর সমাধান করে। text-sm দিলে ০.৮৭৫ রেম (১৪px) ফন্টের সাথে ১.২৫ রেম (২০px) লাইন হাইট বসে, আর text-base দিলে ১ রেম (১৬px) ফন্টের সাথে ১.৫ রেম (২৪px) হাইট বসে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For specialized headings or dense tabular data, developers can easily override the default paired line-height using leading utilities: leading-none for tightly locked display text, leading-snug for multi-line titles, or leading-relaxed for long-form explanatory paragraphs.',
        bn: 'বিশেষ শিরোনাম বা ঘন ডেটা টেবিলের জন্য ডেভেলপাররা চাইলে leading ইউটিলিটি দিয়ে ডিফল্ট লাইন হাইট বদলাতে পারেন: টাইট ডিসপ্লে লেখার জন্য leading-none, বড় শিরোনামের জন্য leading-snug এবং দীর্ঘ অনুচ্ছেদের জন্য leading-relaxed চমৎকার কাজ করে।'
      }
    },
    {
      type: 'heading',
      id: 'prose-plugin',
      text: {
        en: 'Styling Markdown and CMS Content with @tailwindcss/typography',
        bn: '@tailwindcss/typography দিয়ে মার্কডাউন ও CMS কনটেন্ট সাজানো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A major challenge in utility-first CSS arises when rendering rich-text content from external sources. Blog posts, Markdown files, and CMS API responses deliver raw HTML tags like <h1>, <p>, <blockquote>, and <ul> without class attributes. Manually attaching utility classes to every tag is impossible.',
        bn: 'বাইরের উৎস থেকে রিচ-টেক্সট কনটেন্ট রেন্ডার করার সময় ইউটিলিটি ক্লাসে সমস্যা দেখা দেয়। ব্লগ পোস্ট, মার্কডাউন ফাইল বা সিএমএস থেকে আসা ডেটায় সাধারণ <h1>, <p>, <blockquote> বা <ul> ট্যাগ থাকে কিন্তু কোনো ক্লাস থাকে না। প্রতিটি ট্যাগে হাতে হাতে ক্লাস বসানো অসম্ভব।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The official @tailwindcss/typography plugin solves this with the single .prose class. Wrapping the rendered HTML inside <article class="prose dark:prose-invert max-w-prose"> automatically applies typographic spacing, list bullets, blockquote borders, and dark mode inversions without writing a single line of custom CSS.',
        bn: 'অফিসিয়াল @tailwindcss/typography প্লাগিন একটিমাত্র .prose ক্লাসের মাধ্যমে এই সমস্যার সমাধান দেয়। রেন্ডার হওয়া এইচটিএমএলকে <article class="prose dark:prose-invert max-w-prose">-এর ভেতরে রাখলেই লেখাগুলো নিজে থেকেই নিখুঁত মার্জিন, লিস্ট বুলেট, কোটেশন বর্ডার ও ডার্ক মোড ধারণ করে নেয়।'
      }
    },
    {
      type: 'heading',
      id: 'text-wrapping-clamping',
      text: {
        en: 'Modern Wrapping, Balancing, and Multi-Line Truncation',
        bn: 'আধুনিক টেক্সট র‍্যাপিং, ব্যালান্সিং ও বহু-লাইন ট্রাংকেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In headline design, awkward line breaks can leave a single word dangling on the second line. The text-balance utility distributes line length symmetrically across rows, ensuring visually polished card titles and marketing headers.',
        bn: 'শিরোনাম ডিজাইনে অনেক সময় শেষ লাইনে বিশ্রীভাবে একটিমাত্র শব্দ ঝুলে থাকে। text-balance ইউটিলিটি সব লাইনের মাঝে লেখার দৈর্ঘ্য সমানভাবে ভাগ করে দিয়ে কার্ডের শিরোনামগুলোকে পরিপাটি করে তোলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Similarly, when summarizing article previews, developers rely on line-clamp utilities. Declaring line-clamp-2 or line-clamp-3 automatically clips overflowing text after the specified line count and appends an ellipsis (...), avoiding awkward container overflows.',
        bn: 'একইভাবে আর্টিকেলের প্রিভিউ দেখানোর জন্য line-clamp ইউটিলিটি ব্যবহার করা হয়। line-clamp-2 বা line-clamp-3 দিলে নির্দিষ্ট লাইনের পর বাড়তি লেখা কেটে গিয়ে স্বয়ংক্রিয়ভাবে ইলিপসিস (...) বসে যায়, যার ফলে বক্স উপচে পড়ার ভয় থাকে না।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Typography Management Strategies',
        bn: 'কাঠামোগত তুলনা: টাইপোগ্রাফি ব্যবস্থাপনা কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Typography Approach', bn: 'টাইপোগ্রাফি পদ্ধতি' },
        { en: 'Line Height Handling', bn: 'লাইন হাইট ব্যবস্থাপনা' },
        { en: 'Markdown / CMS Support', bn: 'মার্কডাউন বা CMS সমর্থন' },
        { en: 'Reading Width Discipline', bn: 'পড়ার প্রস্থের শৃঙ্খলা' }
      ],
      rows: [
        [
          { en: 'Tailwind Typography (.prose)', bn: 'টেইলউইন্ড টাইপোগ্রাফি (.prose)' },
          { en: 'Automated typographic scale with optimal vertical rhythm', bn: 'নিখুঁত উল্লম্ব ছন্দসহ স্বয়ংক্রিয় স্কেল অনুপাত' },
          { en: 'Complete; styles raw CMS and Markdown HTML natively', bn: 'নিখুঁত; কাঁচা সিএমএস ও মার্কডাউনকে সরাসরি সাজায়' },
          { en: 'Enforces max-w-prose (65 characters) out of the box', bn: 'স্বাভাবিকভাবেই max-w-prose (৬৫ অক্ষর) প্রয়োগ করে' }
        ],
        [
          { en: 'Atomic Class Utilities', bn: 'একক ইউটিলিটি ক্লাস' },
          { en: 'Font-size bundles proportional leading; overridable', bn: 'ফন্ট সাইজে ডিফল্ট লিডিং থাকে; ইচ্ছামতো বদলানো যায়' },
          { en: 'Requires writing classes on every single HTML tag', bn: 'প্রতিটি এইচটিএমএল ট্যাগে আলাদা করে ক্লাস লিখতে হয়' },
          { en: 'Manual; requires adding max-w-prose on paragraph containers', bn: 'ম্যানুয়াল; অনুচ্ছেদের কন্টেইনারে max-w-prose দিতে হয়' }
        ],
        [
          { en: 'Raw Vanilla CSS Selectors', bn: 'সাধারণ সিএসএস সিলেক্টর' },
          { en: 'Manual; requires maintaining separate line-height rules', bn: 'ম্যানুয়াল; আলাদা করে লাইন হাইটের হিসাব রাখতে হয়' },
          { en: 'Requires deep nested tag selectors (e.g. .article p)', bn: 'জটিল নেস্টেড সিলেক্টর লিখতে হয় (যেমন .article p)' },
          { en: 'Ad-hoc; developers frequently overlook max-width constraints', bn: 'এলোমেলো; ডেভেলপাররা প্রায়শই লাইনের দৈর্ঘ্যের কথা ভুলে যান' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Typography Scale & Line Clamp Resolver',
        bn: 'বাস্তব কোড সিমুলেশন: টাইপোগ্রাফি স্কেল ও লাইন ক্ল্যাম্প সমাধান'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind Typography Scale & Line-Height in Node.js

class TypographyScaleEngine {
  public typeScale: Record<string, { fontSize: string; lineHeight: string }> = {
    'text-xs': { fontSize: '0.75rem /* 12px */', lineHeight: '1rem /* 16px */' },
    'text-sm': { fontSize: '0.875rem /* 14px */', lineHeight: '1.25rem /* 20px */' },
    'text-base': { fontSize: '1rem /* 16px */', lineHeight: '1.5rem /* 24px */' },
    'text-lg': { fontSize: '1.125rem /* 18px */', lineHeight: '1.75rem /* 28px */' },
    'text-xl': { fontSize: '1.25rem /* 20px */', lineHeight: '1.75rem /* 28px */' },
    'text-2xl': { fontSize: '1.5rem /* 24px */', lineHeight: '2rem /* 32px */' },
    'text-3xl': { fontSize: '1.875rem /* 30px */', lineHeight: '2.25rem /* 36px */' }
  };

  resolveToken(token: string) {
    return this.typeScale[token] || null;
  }

  // Simulates line-clamp truncation
  truncateLines(text: string, maxChars: number) {
    if (text.length <= maxChars) return text;
    return text.slice(0, maxChars).trim() + '...';
  }
}

const engine = new TypographyScaleEngine();

const baseToken = engine.resolveToken('text-base');
const xlToken = engine.resolveToken('text-xl');
const text3xl = engine.resolveToken('text-3xl');

const articleText = 'Tailwind CSS utility-first typography creates harmonious vertical reading rhythm across articles.';
const clamped = engine.truncateLines(articleText, 45);

console.log('text-base font size:', baseToken?.fontSize);
// -> text-base font size: 1rem /* 16px */
console.log('text-base paired line height:', baseToken?.lineHeight);
// -> text-base paired line height: 1.5rem /* 24px */
console.log('text-3xl font size:', text3xl?.fontSize);
// -> text-3xl font size: 1.875rem /* 30px */
console.log('Clamped text output:', clamped);
// -> Clamped text output: Tailwind CSS utility-first typography creates...
console.log('max-w-prose standard width characters: 65');
// -> max-w-prose standard width characters: 65`,
      caption: {
        en: 'Simulation: text-base yields 1rem (16px) with 1.5rem (24px) leading; text-3xl yields 1.875rem (30px); max-w-prose sets 65 characters',
        bn: 'সিমুলেশন: text-base ১ রেম (১৬ পিক্সেল) ও ১.৫ রেম (২৪ পিক্সেল) লিডিং দেয়; text-3xl দেয় ১.৮৭৫ রেম (৩০ পিক্সেল); max-w-prose ৬৫ অক্ষর নির্ধারণ করে'
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
        en: 'Rule 1: Always apply max-w-prose to long-form body copy. Restricting reading lines to approximately 65 characters prevents cognitive fatigue and improves readability across widescreen displays.',
        bn: 'নিয়ম ১: দীর্ঘ আর্টিকেলে সর্বদা max-w-prose ব্যবহার করুন। লাইনের দৈর্ঘ্য প্রায় ৬৫ অক্ষরে সীমাবদ্ধ রাখলে বড় স্ক্রিনে পড়ার সময় চোখের ক্লান্তি দূর হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Use the @tailwindcss/typography plugin for user-generated or CMS content. Adding class="prose dark:prose-invert" styles Markdown HTML cleanly without polluting global stylesheet selectors.',
        bn: 'নিয়ম ২: ব্যবহারকারীর কনটেন্ট বা সিএমএস ডেটার জন্য @tailwindcss/typography প্লাগিন ব্যবহার করুন। class="prose dark:prose-invert" দিলে কোনো বাড়তি কোড ছাড়াই চমৎকার স্টাইল তৈরি হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Pair text-balance on marketing headlines and card titles. Distributing text evenly across rows prevents orphan words from awkwardly breaking onto a solitary line.',
        bn: 'নিয়ম ৩: প্রধান শিরোনাম ও কার্ড টাইটেলে text-balance ব্যবহার করুন। সব লাইনে লেখা সমানভাবে ভাগ করে দিলে শেষ লাইনে একা কোনো শব্দ ঝুলে থাকার বিশ্রী রূপ এড়ানো যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Standardize form inputs using @tailwindcss/forms. The forms plugin resets default browser input styling, making form elements effortless to customize using standard border and focus utilities.',
        bn: 'নিয়ম ৪: ফর্ম ইনপুটের জন্য @tailwindcss/forms প্লাগিন ব্যবহার করুন। এটি ব্রাউজারের খাপছাড়া ইনপুট স্টাইল রিসেট করে সাধারণ বর্ডার ও ফোকাস ক্লাস দিয়ে সহজে সাজানোর সুযোগ দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-typ-ex1',
      kind: 'mcq',
      topic: 'Optimal line length with max-w-prose',
      question: {
        en: 'What typographical purpose does the utility class max-w-prose serve in Tailwind CSS?',
        bn: 'Tailwind CSS-এ max-w-prose ইউটিলিটি ক্লাসটির মূল টাইপোগ্রাফিক্যাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It constrains the maximum width of text paragraphs to approximately 65 characters (65ch), preventing eye strain caused by reading overly wide lines on desktop monitors',
          bn: 'এটি অনুচ্ছেদের সর্বোচ্চ প্রস্থকে প্রায় ৬৫ অক্ষরে (65ch) সীমাবদ্ধ রাখে, যার ফলে ডেস্কটপ মনিটরে অতিরিক্ত চওড়া লাইন পড়ার চোখের ক্লান্তি দূর হয়'
        },
        {
          en: 'It translates the paragraph into rhyming poetry automatically',
          bn: 'এটি অনুচ্ছেদটিকে স্বয়ংক্রিয়ভাবে অন্ত্যমিলযুক্ত কবিতায় রূপান্তর করে'
        },
        {
          en: 'It prevents the text from ever being printed on physical paper',
          bn: 'এটি লেখাকে কখনো প্রিন্টারে প্রিন্ট হওয়া থেকে স্থায়ীভাবে বিরত রাখে'
        },
        {
          en: 'Because prose can only be displayed in Microsoft Word documents',
          bn: 'কারণ গদ্য কেবল মাইক্রোসফট ওয়ার্ড ফাইলে প্রদর্শিত হতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about comfortable reading width (about 65 characters per line).',
        bn: 'স্বস্তিদায়ক পড়ার মাপের কথা ভাবুন (প্রতি লাইনে প্রায় ৬৫ অক্ষর)।'
      },
      explanation: {
        en: 'Typographic research shows 45–75 characters is the optimal line length for readability. max-w-prose enforces roughly 65 characters (65ch) for natural reading.',
        bn: 'গবেষণায় দেখা গেছে ৪৫ থেকে ৭৫ অক্ষর হলো পড়ার জন্য সবচেয়ে আরামদায়ক মাপ। max-w-prose সাবলীল পাঠের জন্য প্রায় ৬৫ অক্ষর (65ch) নিশ্চিত করে।'
      }
    },
    {
      id: 'tw-typ-ex2',
      kind: 'mcq',
      topic: 'Role of @tailwindcss/typography (.prose)',
      question: {
        en: 'Why is the @tailwindcss/typography plugin essential when displaying Markdown or CMS articles in Tailwind projects?',
        bn: 'Tailwind প্রজেক্টে মার্কডাউন বা CMS আর্টিকেল প্রদর্শনের ক্ষেত্রে @tailwindcss/typography প্লাগিন কেন অপরিহার্য?'
      },
      options: [
        {
          en: 'It automatically applies beautiful, harmonious typography styles to unstyled HTML tags (such as <h1>, <p>, <blockquote>, <ul>) without needing class names on each tag',
          bn: 'এটি প্রতিটি ট্যাগে ক্লাস না বসিয়েই সাধারণ এইচটিএমএল ট্যাগগুলোকে (যেমন <h1>, <p>, <blockquote>, <ul>) স্বয়ংক্রিয়ভাবে আকর্ষণীয় টাইপোগ্রাফিতে সাজিয়ে তোলে'
        },
        {
          en: 'It corrects spelling and grammar mistakes in the article using machine learning',
          bn: 'এটি মেশিনের সাহায্যে আর্টিকেলের বানান ও ব্যাকরণের ভুল নিজে থেকে ঠিক করে দেয়'
        },
        {
          en: 'It encrypts the article text so only subscribers can decrypt it',
          bn: 'এটি আর্টিকেলের লেখাকে এনক্রিপ্ট করে যাতে শুধু সাবস্ক্রাইবাররা পড়তে পারে'
        },
        {
          en: 'Because raw HTML tags cannot be rendered by web browsers without a plugin',
          bn: 'কারণ কোনো প্লাগিন ছাড়া ব্রাউজার সাধারণ এইচটিএমএল ট্যাগ স্ক্রিনে দেখাতেই পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Raw HTML from Markdown lacks utility classes; .prose styles them automatically.',
        bn: 'মার্কডাউনের সাধারণ এইচটিএমএলে ক্লাস থাকে না; .prose নিজে থেকেই তা সাজিয়ে তোলে।'
      },
      explanation: {
        en: 'Markdown parsers emit raw HTML tags without classes. The .prose class provides comprehensive typography styles scoped directly to those unadorned tags.',
        bn: 'মার্কডাউন সাধারণ ট্যাগ তৈরি করে যাতে কোনো ক্লাস থাকে না। .prose ক্লাস সেইসব সাধারণ ট্যাগের ওপর নিজে থেকেই চমৎকার স্টাইল বসিয়ে দেয়।'
      }
    },
    {
      id: 'tw-typ-ex3',
      kind: 'mcq',
      topic: 'text-balance for headline wrapping',
      question: {
        en: 'What visual flaw does the text-balance utility eliminate in modern web headlines?',
        bn: 'আধুনিক ওয়েব শিরোনামে text-balance ইউটিলিটি কোন ভিজ্যুয়াল ত্রুটি দূর করে?'
      },
      options: [
        {
          en: 'It prevents uneven line lengths and unsightly orphan words by balancing the number of words evenly across wrapped lines',
          bn: 'এটি সব লাইনে লেখার দৈর্ঘ্য সমানভাবে ভাগ করে দেয় এবং শেষ লাইনে অনাকাঙ্ক্ষিত একা কোনো শব্দ ঝুলে থাকা রোধ করে'
        },
        {
          en: 'It forces all text letters to be capitalized in uppercase',
          bn: 'এটি সমস্ত লেখার অক্ষরগুলোকে বড় হাতের অক্ষরে রূপান্তর করতে বাধ্য করে'
        },
        {
          en: 'It automatically increases the volume of background audio music',
          bn: 'এটি ওয়েবসাইটের ব্যাকগ্রাউন্ড অডিওর সাউন্ড নিজ থেকেই বাড়িয়ে দেয়'
        },
        {
          en: 'It changes the font color to green whenever the user scrolls down',
          bn: 'ব্যবহারকারী স্ক্রোল করলেই এটি ফন্টের রং সবুজ রঙে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Balanced line wrapping distributes headline words symmetrically.',
        bn: 'ব্যালান্সড লাইন র‍্যাপিং শিরোনামের শব্দগুলোকে উভয় লাইনে সুন্দরভাবে ভাগ করে দেয়।'
      },
      explanation: {
        en: 'text-balance invokes the CSS text-wrap: balance algorithm, ensuring multi-line headlines break harmoniously rather than leaving a solitary word on the final line.',
        bn: 'text-balance সিএসএসের টেক্সট ব্যালান্স অ্যালগরিদম চালায়, যার ফলে শিরোনামগুলো বিশ্রীভাবে না ভেঙে সুন্দর সামঞ্জস্য নিয়ে ভাঙে।'
      }
    },
    {
      id: 'tw-typ-ex4',
      kind: 'mcq',
      topic: 'Multi-line truncation with line-clamp',
      question: {
        en: 'How does the utility class line-clamp-3 format overflowing paragraph text in a product card?',
        bn: 'একটি প্রোডাক্ট কার্ডে line-clamp-3 ইউটিলিটি ক্লাসটি অতিরিক্ত লেখাকে কীভাবে প্রদর্শন করে?'
      },
      options: [
        {
          en: 'It restricts the visible text to exactly 3 lines and truncates any remaining overflow with an ellipsis (...)',
          bn: 'এটি লেখাকে ঠিক ৩ লাইনের মধ্যে সীমাবদ্ধ রাখে এবং বাড়তি অংশ কেটে সেখানে একটি ইলিপসিস (...) বসিয়ে দেয়'
        },
        {
          en: 'It copies the text 3 times consecutively into the document',
          bn: 'এটি লেখাকে পরপর ৩ বার হুবহু কপি করে ডকুমেন্টে পেস্ট করে'
        },
        {
          en: 'It changes the text font size to 3 pixels on all devices',
          bn: 'এটি সমস্ত ডিভাইসে লেখার সাইজ কমিয়ে মাত্র ৩ পিক্সেল করে ফেলে'
        },
        {
          en: 'It divides the text among 3 different web browser tabs',
          bn: 'এটি লেখাকে ব্রাউজারের ৩টি ভিন্ন ট্যাবের মাঝে ভাগ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Truncating text at a specified number of lines with an ellipsis.',
        bn: 'নির্দিষ্ট লাইনের পর লেখা কেটে ইলিপসিস বসানোর কথা ভাবুন।'
      },
      explanation: {
        en: 'line-clamp-3 clips long text to three lines and appends an ellipsis (...), keeping card heights uniform without complex JavaScript substring logic.',
        bn: 'line-clamp-3 তিন লাইনের পর লেখা কেটে একটি ইলিপসিস বসায়, যার ফলে কোনো জাভাস্ক্রিপ্ট ছাড়াই সব কার্ডের উচ্চতা সমান থাকে।'
      }
    }
  ],
  quiz: {
    id: 'the-typography-parlor-quiz',
    title: {
      en: 'Typography, Forms & Layout Plugins Quiz',
      bn: 'টাইপোগ্রাফি, ফর্ম ও লেআউট প্লাগিন কুইজ'
    },
    questions: [
      {
        id: 'q-dark-prose-invert',
        kind: 'mcq',
        topic: 'Dark mode typography with dark:prose-invert',
        question: {
          en: 'When using the @tailwindcss/typography plugin, how do you invert text and headings for dark mode palettes?',
          bn: '@tailwindcss/typography প্লাগিন ব্যবহার করার সময় ডার্ক মোডের জন্য টেক্সট ও শিরোনাম কীভাবে উল্টে লাইট রঙে সাজাতে হয়?'
        },
        options: [
          {
            en: 'By adding the dark:prose-invert modifier to the element carrying the prose class (e.g. class="prose dark:prose-invert")',
            bn: 'prose ক্লাস থাকা এলিমেন্টে dark:prose-invert মডিফায়ার যুক্ত করে (যেমন class="prose dark:prose-invert")'
          },
          {
            en: 'By rewriting the entire markdown article in white ink manually',
            bn: 'পুরো মার্কডাউন আর্টিকেলটি নিজ হাতে সাদা কালিতে নতুন করে লিখে'
          },
          {
            en: 'By turning down the brightness of the user computer monitor',
            bn: 'ব্যবহারকারীর কম্পিউটার স্ক্রিনের উজ্জ্বলতা কমিয়ে দিয়ে'
          },
          {
            en: 'Because dark mode is incompatible with the typography plugin',
            bn: 'কারণ টাইপোগ্রাফি প্লাগিনের সাথে ডার্ক মোড ব্যবহার করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'The prose-invert modifier inverts typographical colors for dark backgrounds.',
          bn: 'prose-invert মডিফায়ার ডার্ক ব্যাকগ্রাউন্ডের জন্য লেখার রঙকে উল্টে দেয়।'
        },
        explanation: {
          en: 'Adding dark:prose-invert flips text, heading, link, and quote colors to light shades tailored for dark backgrounds, seamlessly supporting dark mode.',
          bn: 'dark:prose-invert যোগ করলে টেক্সট, শিরোনাম, লিংক ও কোটের রঙ ডার্ক ব্যাকগ্রাউন্ডের উপযোগী হালকা রঙে রূপান্তর হয়ে যায়।'
        }
      },
      {
        id: 'q-aspect-ratio-video-containers',
        kind: 'mcq',
        topic: 'Preventing cumulative layout shift with aspect-video',
        question: {
          en: 'Why is using aspect-video on responsive video containers superior to traditional padding-bottom percentage hacks?',
          bn: 'রেসপন্সিভ ভিডিওতে পুরোনো প্যাডিং-বটম হ্যাকের চেয়ে aspect-video ব্যবহার করা কেন অনেক ভালো?'
        },
        options: [
          {
            en: 'It uses modern native CSS aspect-ratio: 16 / 9, establishing intrinsic proportions that prevent cumulative layout shift (CLS) without extra wrapper elements',
            bn: 'এটি আধুনিক সিএসএসের aspect-ratio: 16 / 9 ব্যবহার করে, যা কোনো বাড়তি র‍্যাপার ছাড়াই লেআউট শিফট (CLS) হওয়া পুরোপুরি রোধ করে'
          },
          {
            en: 'It downloads video files 100 times faster over cellular networks',
            bn: 'এটি মোবাইল ইন্টারনেটে ভিডিও ফাইল ১০০ গুণ দ্রুত ডাউনলোড করে'
          },
          {
            en: 'Because padding-bottom was removed from CSS in HTML5',
            bn: 'কারণ এইচটিএমএল৫ আসার পর সিএসএস থেকে প্যাডিং-বটম তুলে নেওয়া হয়েছে'
          },
          {
            en: 'aspect-video forces YouTube videos to play in slow motion',
            bn: 'aspect-video ইউটিউব ভিডিওকে স্লো মোশনে চালাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native CSS aspect-ratio maintains proportional video dimensions.',
          bn: 'সিএসএসের নিজস্ব aspect-ratio অনুপাত বজায় রেখে লেআউটের কম্পন দূর করে।'
        },
        explanation: {
          en: 'The aspect-video utility uses CSS aspect-ratio: 16/9. It locks the dimensions immediately, preventing jarring cumulative layout shifts as media loads.',
          bn: 'aspect-video ইউটিলিটি aspect-ratio: 16/9 ব্যবহার করে। ভিডিও লোড হওয়ার আগেই এটি জায়গা ধরে রাখে, ফলে পেজ লাফিয়ে ওঠে না।'
        }
      },
      {
        id: 'q-tracking-letter-spacing-rules',
        kind: 'mcq',
        topic: 'Typographical rules for tracking (letter spacing)',
        question: {
          en: 'When should designers apply tracking-tight versus tracking-widest in interface typography?',
          bn: 'ইন্টারফেস টাইপোগ্রাফিতে ডিজাইনারদের কখন tracking-tight এবং কখন tracking-widest ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'Use tracking-tight on large display headlines where big letters feel loose, and tracking-widest on small uppercase labels or badges that need extra air to be legible',
            bn: 'বড় শিরোনামে tracking-tight ব্যবহার করুন যেখানে বড় অক্ষরগুলো ফাঁকা মনে হয়, আর ছোট বড়হাতের লেবেল বা ব্যাজে tracking-widest দিন যাতে লেখা সহজে পড়া যায়'
          },
          {
            en: 'Tracking should only be applied to numerical financial numbers',
            bn: 'ট্র্যাকিং কেবল আর্থিক ব্যাংক নম্বরের ক্ষেত্রেই ব্যবহার করা উচিত'
          },
          {
            en: 'Use tracking-widest on all body paragraphs to make them span 10 pages',
            bn: 'সব অনুচ্ছেদে tracking-widest দিন যাতে লেখা ১০ পাতা জুড়ে ছড়িয়ে যায়'
          },
          {
            en: 'Because tracking-tight deletes the space key on user keyboards',
            bn: 'কারণ tracking-tight ব্যবহারকারীর কিবোর্ডের স্পেস কি নিষ্ক্রিয় করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tighten large display text; expand tiny uppercase labels.',
          bn: 'বড় শিরোনাম আঁটসাঁট করুন; ছোট বড়হাতের ব্যাজে বাড়তি ফাঁকা দিন।'
        },
        explanation: {
          en: 'Large display fonts look best with tightened letter spacing (tracking-tight), whereas small all-caps labels require wide tracking (tracking-widest) for readability.',
          bn: 'বড় ফন্টের ক্ষেত্রে অক্ষরগুলো কাছাকাছি থাকলে (tracking-tight) সুন্দর দেখায়, আর ছোট অল-ক্যাপস লেবেলে অক্ষরের মাঝে বেশি ফাঁকা (tracking-widest) স্পষ্টতা বাড়ায়।'
        }
      },
      {
        id: 'q-forms-plugin-reset',
        kind: 'mcq',
        topic: 'Browser input normalization with @tailwindcss/forms',
        question: {
          en: 'What primary problem does the @tailwindcss/forms plugin solve for web form development?',
          bn: 'ওয়েব ফর্ম তৈরির ক্ষেত্রে @tailwindcss/forms প্লাগিন কোন প্রধান সমস্যার সমাধান করে?'
        },
        options: [
          {
            en: 'It strips inconsistent default browser form styles (like rounded borders, blue glows, and native arrows), replacing them with an easy-to-style neutral baseline',
            bn: 'এটি বিভিন্ন ব্রাউজারের বিশৃঙ্খল ডিফল্ট ফর্ম স্টাইল (যেমন অসম বর্ডার, নীল আভা বা ডিফল্ট তীর) মুছে দিয়ে সহজে স্টাইল করার উপযোগী নিরপেক্ষ ভিত্তি দেয়'
          },
          {
            en: 'It submits all form responses directly to the United States Congress',
            bn: 'এটি সমস্ত ফর্মের উত্তর সরাসরি আমেরিকার কংগ্রেসে জমা দিয়ে দেয়'
          },
          {
            en: 'It prevents users from typing numbers into password fields',
            bn: 'এটি পাসওয়ার্ড ফিল্ডে ব্যবহারকারীকে সংখ্যা টাইপ করা থেকে বিরত রাখে'
          },
          {
            en: 'Because forms cannot be created without writing PHP code',
            bn: 'কারণ পিএইচপি কোড না লিখে কোনো ওয়েব ফর্ম তৈরি করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Resetting native browser styling on checkboxes, inputs, and selects.',
          bn: 'চেকবক্স, ইনপুট ও সিলেক্টের ব্রাউজার-নির্দিষ্ট অদ্ভুত স্টাইল দূর করার কথা ভাবুন।'
        },
        explanation: {
          en: '@tailwindcss/forms normalizes form elements across browsers with neutral borders and shadows, making them easy to style using standard Tailwind utilities.',
          bn: '@tailwindcss/forms ব্রাউজারের খাপছাড়া ফর্ম স্টাইল রিসেট করে দেয়, ফলে সাধারণ Tailwind ইউটিলিটি দিয়ে সহজেই সুন্দর ইনপুট তৈরি করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-census-tapestry',
    title: {
      en: 'Custom Plugins & Arbitrary Properties — Extending Tailwind with matchUtilities & JIT Syntax',
      bn: 'কাস্টম প্লাগিন ও আরবিট্রারি প্রপার্টি — matchUtilities ও JIT সিনট্যাক্স'
    }
  }
};
