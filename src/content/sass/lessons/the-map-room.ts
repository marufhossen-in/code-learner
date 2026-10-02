import type { Lesson } from '../../../lib/types';

export const TheMapRoomLesson: Lesson = {
  slug: 'the-map-room',
  tech: 'sass',
  title: {
    en: 'Sass Maps, Lists & Design Tokens — Key-Value Dictionaries, Iteration, and Deep Map Architecture',
    bn: 'Sass ম্যাপ, লিস্ট ও ডিজাইন টোকেন: কী-ভ্যালু ডিকশনারি, ইটারেশন এবং ডিপ ম্যাপ আর্কিটেকচার'
  },
  summary: {
    en: 'Sass maps and lists provide the structured data layer for modern design systems. Maps store ordered key-value pairs representing color palettes, spacing stairs, and responsive breakpoints. The built-in sass:map module offers safe functions like map.get, map.has-key, and map.merge to manipulate configuration data. Looping through maps with @each enables engineers to generate extensive utility suites and responsive grid layouts from a single centralized data source.',
    bn: 'Sass ম্যাপ এবং লিস্ট আধুনিক ডিজাইন সিস্টেমের সুসংগঠিত ডেটা লেয়ার হিসেবে কাজ করে। ম্যাপে রঙের প্যালেট, স্পেসিং স্কেল এবং রেসপনসিভ ব্রেকপয়েন্টের মতো কী-ভ্যালু জোড়া সাজানো থাকে। বিল্ট-ইন sass:map মডিউলের map.get, map.has-key এবং map.merge ফাংশন দিয়ে নিরাপদভাবে কনফিগারেশন পরিচালনা করা যায়। @each দিয়ে ম্যাপে লুপ চালিয়ে একটি একক ডেটা সোর্স থেকে শত শত ইউটিলিটি ক্লাস তৈরি করা যায়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What are Sass maps and lists?',
        bn: 'Sass ম্যাপ এবং লিস্ট কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Sass map is an immutable collection of key-value pairs enclosed in parentheses, such as ("primary": #2563eb, "secondary": #64748b). Lists represent ordered sequences of values separated by commas or spaces, like (10px, 20px, 30px). While plain variables hold single values, maps and lists act as structured databases for your stylesheets. You access map values by key using `map.get` from the sass:map module.',
        bn: 'Sass ম্যাপ হলো বন্ধনীতে আবদ্ধ কী-ভ্যালু জোড়ার একটি অপরিবর্তনীয় কালেকশন, যেমন ("primary": #2563eb, "secondary": #64748b)। লিস্ট হলো কমা বা স্পেস দিয়ে পৃথক করা মানের ক্রমিক তালিকা, যেমন (10px, 20px, 30px)। সাধারণ ভেরিয়েবল যেখানে একটি মাত্র মান রাখে, ম্যাপ ও লিস্ট সেখানে স্টাইলশিটের ডেটাবেস হিসেবে কাজ করে। sass:map মডিউলের `map.get` দিয়ে সহজে কী-এর মাধ্যমে মান পাওয়া যায়।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Sass map',
          def: {
            en: 'an associative collection of keys and values, defined as (key: value, ...)',
            bn: 'কী এবং মানের একটি সহযোগী কালেকশন, যা (কী: মান, ...) আকারে লেখা হয়'
          }
        },
        {
          term: 'map.get and map.has-key',
          def: {
            en: 'map.get retrieves a value by key (returning null if missing); map.has-key checks existence safely',
            bn: 'map.get কী দিয়ে মান আনে (না থাকলে null দেয়); map.has-key কোনো কী আছে কি না তা নিরাপদে যাচাই করে'
          }
        },
        {
          term: 'map.merge',
          def: {
            en: 'combines two maps into a new map; values in the second map override identical keys in the first',
            bn: 'দুটি ম্যাপকে যুক্ত করে নতুন ম্যাপ তৈরি করে; দ্বিতীয় ম্যাপের মান প্রথম ম্যাপের সমান কী-কে ওভাররাইড করে'
          }
        },
        {
          term: 'deep (nested) map',
          def: {
            en: 'a map containing nested child maps, queried using map.get($map, key1, key2) or map.deep-merge()',
            bn: 'ভেতরে সাব-ম্যাপ ধারণ করা বহু-স্তরের ম্যাপ, যা map.get($map, key1, key2) দিয়ে ব্যবহার করা হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why maps power design tokens and theme extensions',
        bn: 'কেন ম্যাপ ডিজাইন টোকেন ও থিম সম্প্রসারণের মূল চালিকাশক্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Design systems manage hundreds of colors, font sizes, and spacing intervals. Storing each token as an isolated variable like $color-1, $color-2 makes programmatic generation impossible. By organizing values into maps, you can loop through them with @each to generate consistent CSS classes automatically. Merging maps with map.merge allows consumers to add custom branding colors to existing framework palettes without erasing library defaults.',
        bn: 'ডিজাইন সিস্টেমে শত শত রং, ফন্ট সাইজ ও স্পেসিং পরিচালনা করতে হয়। প্রতিটি মানকে $color-1, $color-2 আকারে বিচ্ছিন্ন রাখলে স্বয়ংক্রিয় ক্লাস তৈরি অসম্ভব হয়ে পড়ে। মানগুলোকে ম্যাপে সাজিয়ে @each লুপের সাহায্যে এক নিমেষে সুসংগত CSS ক্লাস তৈরি করা যায়। map.merge ব্যবহারের মাধ্যমে ফ্রেমওয়ার্কের মূল রঙের তালিকা না চালিয়েই নতুন ব্র্যান্ডিং কালার সহজে যুক্ত করা যায়।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to create maps, query keys, and iterate through tokens',
        bn: 'কীভাবে ম্যাপ তৈরি করবেন, কী খুঁজবেন এবং টোকেন দিয়ে লুপ চালাবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Always import the sass:map module using @use "sass:map". Define your map with colon-separated key-value pairs inside parentheses. Query values using map.get($map, $key), and combine maps using map.merge($defaults, $custom). Loop over maps using @each $key, $value in $map, writing the key into class names via string interpolation (#{$key}).',
        bn: 'সর্বদা @use "sass:map" দিয়ে ম্যাপ মডিউল লোড করুন। বন্ধনীর ভেতরে কোলন দিয়ে কী ও মান লিখে ম্যাপ সংজ্ঞায়িত করুন। map.get($map, $key) দিয়ে মান আনুন এবং map.merge($defaults, $custom) দিয়ে ম্যাপ সংযুক্ত করুন। @each $key, $value in $map দিয়ে লুপ চালান এবং ইন্টারপোলেশন (#{$key}) দিয়ে ক্লাসের নাম নির্ধারণ করুন।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'map-tokens.scss',
      caption: {
        en: 'Map creation, safe querying with map.get, map.merge, and generating utility classes.',
        bn: 'ম্যাপ তৈরি, map.get দিয়ে মান অনুসন্ধান, map.merge এবং ইউটিলিটি ক্লাস তৈরির বাস্তব উদাহরণ।'
      },
      code: `@use "sass:map";

// 1. Central design token map
$default-theme: (
  "primary": #2563eb,
  "secondary": #64748b,
  "success": #10b981
);

// 2. Custom brand additions
$custom-theme: (
  "brand": #8b5cf6,
  "danger": #ef4444
);

// 3. Merging maps: combines both without erasing defaults
$merged-palette: map.merge($default-theme, $custom-theme);

// 4. Safe single-key lookup
$primary-color: map.get($merged-palette, "primary"); // #2563eb

// 5. Automated class generation via @each
@each $name, $color in $merged-palette {
  .badge-#{$name} {
    background-color: $color;
    color: #ffffff;
  }
}

// 6. Multi-dimensional (deep) map for breakpoints
$grid-breakpoints: (
  "sm": (width: 576px, container: 540px),
  "md": (width: 768px, container: 720px)
);

$md-container: map.get($grid-breakpoints, "md", "container"); // 720px`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Internal compiler mechanics: immutability and lookup tables',
        bn: 'কম্পাইলারের অভ্যন্তরীণ কার্যপ্রণালী: অপরিবর্তনীয়তা ও লুকআপ টেবিল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Sass maps are immutable value types stored as balanced red-black lookup trees inside Dart Sass. When you call map.merge or map.set, the original map in memory is never modified; instead, the compiler produces a brand-new map referencing the updated entries. Looking up missing keys returns null without throwing an exception, allowing developers to handle optional properties cleanly.',
        bn: 'Sass ম্যাপ হলো অপরিবর্তনীয় ডেটা টাইপ যা Dart Sass-এর ভেতর রেড-ব্ল্যাক ট্রিতে সংরক্ষিত থাকে। map.merge বা map.set কল করলে মেমরিতে থাকা মূল ম্যাপ কখনোই পরিবর্তিত হয় না; বরং কম্পাইলার নতুন একটি ম্যাপ তৈরি করে ফেরত দেয়। কোনো কী অনুপস্থিত থাকলে কম্পাইলার এরর না দিয়ে null ফেরত দেয়, যা ঐচ্ছিক মান ব্যবস্থাপনাকে সহজ করে।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices for design token maps',
        bn: 'ডিজাইন টোকেন ম্যাপের সেরা চর্চা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Always use map.has-key before reading user-provided tokens to catch misspelled keys and throw helpful errors.',
          bn: 'ব্যবহারকারীর পাঠানো টোকেন পড়ার আগে সর্বদা map.has-key ব্যবহার করুন যাতে ভুলের ক্ষেত্রে সহায়ক এরর দেখানো যায়।'
        },
        {
          en: 'Use map.merge to extend existing frameworks like Bootstrap rather than replacing entire variable maps.',
          bn: 'বুটস্ট্র্যাপের মতো ফ্রেমওয়ার্ক সম্প্রসারণ করতে পুরো ভেরিয়েবল না বদলে map.merge ব্যবহার করুন।'
        },
        {
          en: 'Quote map keys consistently (e.g., "primary", "secondary") to avoid unexpected token collision with CSS keywords.',
          bn: 'CSS কিওয়ার্ডের সাথে সংঘাত এড়াতে ম্যাপের কী-গুলোকে সর্বদা কোটেশনের মধ্যে ("primary") রাখুন।'
        },
        {
          en: 'Organize complex token hierarchies into nested maps (colors, spacing, typography) for clean separation of concerns.',
          bn: 'জটিল টোকেনগুলোকে কালার, স্পেসিং ও টাইপোগ্রাফি সাব-ম্যাপে সাজিয়ে পরিচ্ছন্ন রাখুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: silent null bugs from missing map keys',
        bn: 'সমস্যা সমাধান: অনুপস্থিত ম্যাপ কী থেকে নীরব null ত্রুটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A subtle bug occurs when querying a misspelled key with map.get, such as map.get($theme, "primry"). Because map.get returns null when a key is not found, Sass silently omits the property from the compiled CSS without throwing an error. The resulting button lacks a background color, but the build reports green. Guard critical reads with @if not map.has-key($map, $key) { @error "Invalid key"; } to catch typos immediately.',
        bn: 'একটি গোপন বাগ ঘটে যখন বানানে ভুল করে map.get($theme, "primry") লেখা হয়। যেহেতু কী না পেলে map.get সরাসরি null ফেরত দেয়, তাই Sass কোনো এরর না দেখিয়েই আউটপুট CSS থেকে প্রপার্টিটি বাদ দিয়ে দেয়। ফলে বাটনের ব্যাকগ্রাউন্ড থাকে না অথচ বিল্ড সফল দেখায়। এই সমস্যা রোধ করতে @if not map.has-key($map, $key) { @error "Invalid key"; } দিয়ে ইনপুট যাচাই করে নিন।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: Bootstrap $theme-colors and Style Dictionary',
        bn: 'বাস্তব স্থাপত্য: বুটস্ট্র্যাপ $theme-colors এবং স্টাইল ডিকশনারি'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bootstrap defines its entire core palette in $theme-colors, enabling developers to add brand colors using $theme-colors: map.merge($theme-colors, (brand: #6366f1)).',
          bn: 'বুটস্ট্র্যাপ $theme-colors-এ তার পুরো প্যালেট রাখে, যা ডেভেলপারদের $theme-colors: map.merge দিয়ে নিজস্ব ব্র্যান্ড কালার যুক্ত করতে দেয়।'
        },
        {
          en: 'Cross-platform design token engines like Style Dictionary convert Figma design JSON into nested Sass maps for web applications.',
          bn: 'স্টাইল ডিকশনারির মতো ইঞ্জিন ফিগমার JSON টোকেনকে স্বয়ংক্রিয়ভাবে ওয়েবের জন্য নেস্টেড Sass ম্যাপে রূপান্তর করে।'
        },
        {
          en: 'Typography token systems store font size, line height, and letter spacing together in multi-dimensional maps per responsive breakpoint.',
          bn: 'টাইপোগ্রাফি টোকেন সিস্টেম প্রতিটি ব্রেকপয়েন্টের জন্য ফন্ট সাইজ, লাইন হাইট ও লেটার স্পেসিং একসাথে নেস্টেড ম্যাপে রাখে।'
        },
        {
          en: 'Automated theme switchers walk color maps to emit corresponding CSS custom properties (:root { --color-primary: ...; }) alongside utility classes.',
          bn: 'থিম সুইচিং ইঞ্জিন কালার ম্যাপ ঘুরে ইউটিলিটি ক্লাসের পাশাপাশি সরাসরি নেটিভ CSS কাস্টম প্রপার্টি তৈরি করে দেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: modern Sass versus native CSS',
        bn: 'পরবর্তী ধাপ: আধুনিক Sass বনাম নেটিভ CSS'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you have mastered data structures and token pipelines with Sass maps and lists, you are ready for the ultimate architectural comparison. In the final lesson, we explore Modern Sass versus Native CSS: custom properties (var(--x)), native CSS nesting, cascade layers (@layer), and knowing when to use Sass versus vanilla CSS.',
        bn: 'এখন আপনি Sass ম্যাপ ও লিস্ট দিয়ে সুসংগঠিত ডেটা ও টোকেন আর্কিটেকচার পরিচালনায় পারদর্শী। সমাপনী ৮ম পাঠে আমরা আধুনিক Sass বনাম নেটিভ CSS-এর তুলনা করব: কাস্টম প্রপার্টি (var(--x)), নেটিভ নেস্টিং, ক্যাসকেড লেয়ার (@layer) এবং বিল্ড-টাইম বনাম রানটাইমের কৌশলগত ভারসাম্য।',
      }
    }
  ],
  exercises: [
    {
      id: 'map-ex-1',
      kind: 'mcq',
      topic: 'map.get return value',
      question: {
        en: 'What does map.get($map, "unknown-key") return if the key does not exist in the map?',
        bn: 'যদি ম্যাপে নির্দিষ্ট কী না থাকে, তবে map.get($map, "unknown-key") কী ফেরত দেয়?'
      },
      options: [
        {
          en: 'It returns null, causing Sass to omit any CSS property that evaluates to it.',
          bn: 'এটি null ফেরত দেয়, যার ফলে সংশ্লিষ্ট CSS প্রপার্টিটি আউটপুট থেকে বাদ পড়ে যায়।'
        },
        {
          en: 'It halts compilation immediately with a fatal KeyError.',
          bn: 'এটি মারাত্মক KeyError দেখিয়ে সাথে সাথে কম্পাইলেশন বন্ধ করে দেয়।'
        },
        {
          en: 'It returns an empty string "".',
          bn: 'এটি একটি খালি স্ট্রিং "" ফেরত দেয়।'
        },
        {
          en: 'It returns zero (0).',
          bn: 'এটি শূন্য (০) ফেরত দেয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sass maps return null when a key is missing instead of throwing an error.',
        bn: 'কী না থাকলে Sass ম্যাপ এরর না দিয়ে null ফেরত দেয়।'
      },
      explanation: {
        en: 'When a key is absent, map.get returns null. If a property is assigned null, Sass skips emitting that property, which can cause silent bugs if keys are misspelled.',
        bn: 'কী অনুপস্থিত থাকলে map.get null ফেরত দেয়। প্রপার্টির মান null হলে Sass সেই প্রপার্টি আউটপুটে বাদ দেয়, যা বানান ভুলের ক্ষেত্রে অদৃশ্য বাগ তৈরি করতে পারে।'
      }
    },
    {
      id: 'map-ex-2',
      kind: 'mcq',
      topic: 'map.merge behavior',
      question: {
        en: 'What happens when two maps merged with map.merge contain the same key?',
        bn: 'map.merge দিয়ে দুটি ম্যাপ সংযুক্ত করার সময় একই কী থাকলে কী ঘটে?'
      },
      options: [
        {
          en: 'The value from the second map overwrites the value from the first map for that key.',
          bn: 'সেই কী-এর জন্য দ্বিতীয় ম্যাপের মানটি প্রথম ম্যাপের মানকে ওভাররাইড করে।'
        },
        {
          en: 'The compiler throws a duplicate key error.',
          bn: 'কম্পাইলার ডুপ্লিকেট কী এরর প্রদর্শন করে।'
        },
        {
          en: 'Both values are combined into a comma-separated list.',
          bn: 'উভয় মান কমা দিয়ে যুক্ত হয়ে একটি লিস্টে পরিণত হয়।'
        },
        {
          en: 'The key is deleted from the resulting map.',
          bn: 'কীটি চূড়ান্ত ম্যাপ থেকে মুছে যায়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'The second map takes precedence over the first map.',
        bn: 'প্রথম ম্যাপের চেয়ে দ্বিতীয় ম্যাপের মান অগ্রাধিকার পায়।'
      },
      explanation: {
        en: 'In map.merge($map1, $map2), keys from $map2 take precedence. If a key exists in both maps, the returned map uses the value from $map2.',
        bn: 'map.merge($map1, $map2)-এ $map2-এর কী অগ্রাধিকার পায়। উভয় ম্যাপে একই কী থাকলে $map2-এর মানটি চূড়ান্ত ম্যাপে গৃহীত হয়।'
      }
    },
    {
      id: 'map-ex-3',
      kind: 'mcq',
      topic: 'sass list indexing',
      question: {
        en: 'In Sass, what is the starting index of lists when using list.nth($list, index)?',
        bn: 'Sass-এ list.nth($list, index) ব্যবহারের সময় লিস্টের প্রথম উপাদানের ইনডেক্স কত?'
      },
      options: [
        {
          en: 'Index 1 (Sass lists are 1-indexed, not 0-indexed).',
          bn: 'ইনডেক্স ১ (Sass লিস্ট ১ থেকে শুরু হয়, ০ থেকে নয়)।'
        },
        {
          en: 'Index 0 (like JavaScript arrays).',
          bn: 'ইনডেক্স ০ (জাভাস্ক্রিপ্ট অ্যারের মতো)।'
        },
        {
          en: 'Index -1.',
          bn: 'ইনডেক্স -১।'
        },
        {
          en: 'Lists in Sass do not support numeric indexing.',
          bn: 'Sass-এ লিস্ট সংখ্যাসূচক ইনডেক্সিং সমর্থন করে না।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Unlike most programming languages, Sass uses 1 for the first element.',
        bn: 'অন্যান্য ভাষার মতো ০ নয়, Sass-এ প্রথম উপাদানটির ইনডেক্স ১।'
      },
      explanation: {
        en: 'Sass uses 1-based indexing for lists. Calling list.nth($items, 1) returns the very first element of the list.',
        bn: 'Sass লিস্টের জন্য ১-ভিত্তিক ইনডেক্সিং ব্যবহার করে। list.nth($items, 1) কল করলে লিস্টের সর্বপ্রথম উপাদানটি পাওয়া যায়।'
      }
    },
    {
      id: 'map-ex-4',
      kind: 'predict',
      topic: 'predicting map.get output',
      question: {
        en: 'Predict the compiled color: $theme: ("brand": #6366f1); .btn { color: map.get($theme, "brand"); }',
        bn: '$theme: ("brand": #6366f1); .btn { color: map.get($theme, "brand"); } — এই কোডের color মান কত হবে?'
      },
      answer: 'color: #6366f1;',
      accept: [
        'color: #6366f1;',
        'color: #6366f1',
        '#6366f1'
      ],
      hint: {
        en: 'Look up the "brand" key in the $theme map.',
        bn: '$theme ম্যাপে "brand" কী-এর মানটি দেখুন।'
      },
      explanation: {
        en: 'map.get finds "brand" in $theme and returns #6366f1, emitting color: #6366f1;.',
        bn: 'map.get $theme থেকে "brand" খুঁজে নিয়ে #6366f1 ফেরত দেয়, ফলে color: #6366f1; তৈরি হয়।'
      }
    }
  ],
  quiz: {
    id: 'maps-quiz',
    title: {
      en: 'Maps and Design Tokens Quiz',
      bn: 'ম্যাপ এবং ডিজাইন টোকেন কুইজ'
    },
    questions: [
      {
        id: 'mapq1',
        kind: 'mcq',
        topic: 'has-key validation guard',
        question: {
          en: 'Why should library authors use map.has-key() before reading user-provided configuration maps?',
          bn: 'ব্যবহারকারীর পাঠানো কনফিগারেশন ম্যাপ পড়ার আগে লাইব্রেরি লেখকদের map.has-key() কেন ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'To verify that required keys exist and throw descriptive error messages rather than silently omitting CSS properties.',
            bn: 'প্রয়োজনীয় কী আছে কি না তা যাচাই করে অনুপস্থিত থাকলে প্রপার্টি বাদ পড়ার বদলে স্পষ্ট এরর দেখানোর জন্য।'
          },
          {
            en: 'Because Dart Sass crashes if map.has-key() is not called on every line.',
            bn: 'কারণ প্রতি লাইনে map.has-key() না ডাকলে Dart Sass ক্র্যাশ করে।'
          },
          {
            en: 'It encrypts the map keys against reverse engineering.',
            bn: 'এটি ম্যাপের কী-গুলোকে সুরক্ষিত রাখতে এনক্রিপ্ট করে।'
          },
          {
            en: 'It converts map keys into HTML data-attributes automatically.',
            bn: 'এটি ম্যাপের কী-গুলোকে স্বয়ংক্রিয়ভাবে HTML ডেটা-অ্যাট্রিবিউটে রূপান্তর করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Checking keys with map.has-key prevents silent null bugs caused by typos.',
          bn: 'map.has-key দিয়ে যাচাই করলে টাইপো সংক্রান্ত গোপন null বাগ রোধ করা যায়।'
        },
        explanation: {
          en: 'Guarding with map.has-key allows code to handle missing keys gracefully or throw clear @error messages when expected configuration is missing.',
          bn: 'map.has-key দিয়ে চেক করলে অনুপস্থিত কী সুন্দরভাবে পরিচালনা করা যায় বা @error দিয়ে সঠিক দিকনির্দেশনা দেওয়া যায়।'
        }
      },
      {
        id: 'mapq2',
        kind: 'mcq',
        topic: 'deep map nested query',
        question: {
          en: 'Given a nested map $colors: ("brand": ("primary": #2563eb)), how do you query the primary color in modern Sass?',
          bn: '$colors: ("brand": ("primary": #2563eb)) নেস্টেড ম্যাপ থেকে primary কালার কীভাবে অনুসন্ধান করবেন?'
        },
        options: [
          {
            en: 'map.get($colors, "brand", "primary")',
            bn: 'map.get($colors, "brand", "primary")'
          },
          {
            en: '$colors["brand"]["primary"]',
            bn: '$colors["brand"]["primary"]'
          },
          {
            en: 'map.query($colors, "brand.primary")',
            bn: 'map.query($colors, "brand.primary")'
          },
          {
            en: 'map.deep($colors, 1, 2)',
            bn: 'map.deep($colors, 1, 2)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pass sequential keys as additional arguments to map.get.',
          bn: 'map.get-এ অতিরিক্ত আর্গুমেন্ট হিসেবে ক্রমানুসারে কী-গুলো পাস করুন।'
        },
        explanation: {
          en: 'Dart Sass supports deep map lookups by passing successive keys to map.get($map, $key1, $key2), returning the nested leaf value directly.',
          bn: 'Dart Sass-এ map.get($map, $key1, $key2) আকারে একাধিক কী পাস করে সরাসরি নেস্টেড সাব-ম্যাপের মান আনা যায়।'
        }
      },
      {
        id: 'mapq3',
        kind: 'mcq',
        topic: 'map.keys and map.values',
        question: {
          en: 'What do map.keys($map) and map.values($map) return in Sass?',
          bn: 'Sass-এ map.keys($map) এবং map.values($map) কী ফেরত দেয়?'
        },
        options: [
          {
            en: 'map.keys returns a list of all keys; map.values returns a list of all corresponding values.',
            bn: 'map.keys সব কী-এর একটি লিস্ট দেয়; map.values সব সংশ্লিষ্ট মানের একটি লিস্ট দেয়।'
          },
          {
            en: 'Both return a single concatenated string separated by commas.',
            bn: 'উভয়েই কমা দিয়ে যুক্ত একটি একক স্ট্রিং ফেরত দেয়।'
          },
          {
            en: 'They return numeric counts of keys and values respectively.',
            bn: 'তারা যথাক্রমে কী এবং মানের সংখ্যাগত পরিমাণ ফেরত দেয়।'
          },
          {
            en: 'They sort the map alphabetically in place.',
            bn: 'তারা ম্যাপকে বর্ণানুক্রমিকভাবে সাজিয়ে দেয়।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Keys are returned as a list of identifiers; values as a list of data.',
          bn: 'কীগুলো নামের লিস্ট হিসেবে এবং মানগুলো ডেটার লিস্ট হিসেবে ফেরত আসে।'
        },
        explanation: {
          en: 'map.keys and map.values extract the key list and value list respectively, useful when performing list operations or inspecting dictionary contents.',
          bn: 'map.keys এবং map.values যথাক্রমে কী ও মানের তালিকা তৈরি করে, যা লিস্ট অপারেশন বা ডেটা বিশ্লেষণে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'mapq4',
        kind: 'mcq',
        topic: 'map immutability in memory',
        question: {
          en: 'When map.set($map, "new-key", 100px) is called, what happens to the original $map variable?',
          bn: 'map.set($map, "new-key", 100px) কল করা হলে মূল $map ভেরিয়েবলের কী ঘটে?'
        },
        options: [
          {
            en: 'The original map remains completely unchanged; map.set returns a new map containing the added key.',
            bn: 'মূল ম্যাপটি সম্পূর্ণ অপরিবর্তিত থাকে; map.set নতুন কী যুক্ত করে একটি নতুন ম্যাপ ফেরত দেয়।'
          },
          {
            en: 'The original map is mutated in place in memory.',
            bn: 'মেমরিতে থাকা মূল ম্যাপটি সরাসরি পরিবর্তিত হয়ে যায়।'
          },
          {
            en: 'The original map variable is deleted permanently.',
            bn: 'মূল ম্যাপ ভেরিয়েবলটি চিরতরে মুছে যায়।'
          },
          {
            en: 'Dart Sass logs a memory allocation warning.',
            bn: 'Dart Sass মেমরি বরাদ্দের সতর্কবার্তা প্রদর্শন করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sass values are immutable. Functions return new copies rather than mutating in place.',
          bn: 'Sass-এর মান অপরিবর্তনীয়। ফাংশনগুলো আগের মান না বদলে নতুন কপি তৈরি করে।'
        },
        explanation: {
          en: 'Sass data structures are immutable. To save the update, you must rebind the variable: $map: map.set($map, "new-key", 100px);.',
          bn: 'Sass ডেটা স্ট্রাকচার অপরিবর্তনীয়। পরিবর্তন সংরক্ষণ করতে পুনরায় ভেরিয়েবলে মান বাঁধতে হয়: $map: map.set($map, "new-key", 100px);।'
        }
      },
      {
        id: 'mapq5',
        kind: 'predict',
        topic: 'builtin module for map functions',
        question: {
          en: 'Which built-in Sass module must be imported via @use to access map.get and map.merge: sass:______?',
          bn: 'map.get এবং map.merge ব্যবহারের জন্য @use দিয়ে কোন বিল্ট-ইন Sass মডিউল লোড করতে হয়: sass:______?'
        },
        answer: 'map',
        accept: [
          'map',
          'sass:map'
        ],
        hint: {
          en: 'Enter the three-letter module name for map operations.',
          bn: 'ম্যাপ অপারেশনের তিন অক্ষরের মডিউল নামটি লিখুন।'
        },
        explanation: {
          en: 'The sass:map module provides all canonical map manipulation functions in modern Dart Sass.',
          bn: 'আধুনিক Dart Sass-এ ম্যাপ পরিচালনার সব অফিশিয়াল ফাংশন sass:map মডিউলে থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-loom-vs-the-native',
    title: {
      en: 'Modern Sass vs Native CSS: Custom Properties, Native Nesting, and Architecture',
      bn: 'আধুনিক Sass বনাম নেটিভ CSS: কাস্টম প্রপার্টি, নেটিভ নেস্টিং এবং আর্কিটেকচার'
    }
  }
};
