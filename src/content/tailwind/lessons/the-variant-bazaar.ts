import type { Lesson } from '../../../lib/types';

export const variantBazaarLesson: Lesson = {
  slug: 'the-variant-bazaar',
  tech: 'tailwind',
  title: {
    en: 'Pseudo-Classes & State Modifiers — Hover, Focus, Active, Group, Peer & Dark Mode',
    bn: 'সিউডো-ক্লাস ও স্টেট মডিফায়ার — হোভার, ফোকাস, গ্রুপ, পিয়ার ও ডার্ক মোড'
  },
  summary: {
    en: 'Interactive web applications require visual feedback that reflects user actions, focus states, and environmental preferences. Tailwind CSS encodes these dynamic interactions using variant prefixes attached directly to atomic utility classes. Core interaction modifiers like hover:, active:, and focus-visible: compile into standardized CSS pseudo-classes that preserve keyboard accessibility. Contextual modifiers—group for parent-driven updates and peer for sibling-driven changes—enable rich micro-interactions without writing custom JavaScript event handlers. Finally, first-class dark: variants allow applications to seamlessly re-theme between daylight and night-time palettes using either class-based toggles or operating system media queries.',
    bn: 'ইন্টারঅ্যাক্টিভ ওয়েব অ্যাপ্লিকেশনে ব্যবহারকারীর গতিবিধি, ফোকাস স্টেট ও ডিসপ্লে পছন্দের ওপর ভিত্তি করে উপাদানগুলোর চেহারা বদলানো প্রয়োজন। Tailwind CSS এই ইন্টারঅ্যাকশনগুলোকে সাধারণ ইউটিলিটি ক্লাসের সামনে যুক্ত হওয়া ভ্যারিয়েন্ট প্রিফিক্সের মাধ্যমে নিয়ন্ত্রণ করে। hover:, active: এবং focus-visible:-এর মতো প্রধান মডিফায়ারগুলো কীবোর্ড এক্সেসিবিলিটি ঠিক রেখে স্ট্যান্ডার্ড সিএসএস সিউডো-ক্লাসে রূপান্তরিত হয়। প্যারেন্ট উপাদানের জন্য group এবং পাশাপাশি থাকা সহোদরের জন্য peer মডিফায়ার কোনো জাভাস্ক্রিপ্ট ছাড়াই চমৎকার মাইক্রো-ইন্টারঅ্যাকশন তৈরি করে। পরিশেষে, dark: ভ্যারিয়েন্টের মাধ্যমে আলাদা স্টাইলশিট না লিখেই সহজে লাইট ও ডার্ক মোড পরিবর্তন করা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Interactive States and Variant Modifiers',
        bn: 'মূল ধারণা: ইন্টারঅ্যাক্টিভ স্টেট ও ভ্যারিয়েন্ট মডিফায়ার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build engaging web interfaces, interactive elements must visually respond to user gestures like hovering, keyboard focusing, active clicking, and night-time viewing. In traditional CSS, handling these states requires writing countless pseudo-class selectors and duplicating theme stylesheets. Tailwind CSS standardizes state styling using variant prefixes—such as hover:, focus-visible:, group-hover:, peer-checked:, and dark:—which seamlessly compile into standard CSS pseudo-classes while maintaining flat specificity.',
        bn: 'যখন আপনি আকর্ষণীয় ওয়েব ইন্টারফেস তৈরি করেন, তখন বাটন ও কার্ডের মতো উপাদানগুলোর মাউস হোভার, কীবোর্ড ফোকাস, ক্লিক এবং ডার্ক মোডের সাথে তাল মিলিয়ে রূপ পরিবর্তন করা প্রয়োজন হয়। চিরাচরিত সিএসএসে এগুলো করতে অগণিত সিউডো-ক্লাস সিলেক্টর এবং আলাদা ডার্ক মোড ফাইল লিখতে হতো। Tailwind CSS ভ্যারিয়েন্ট প্রিফিক্স—যেমন hover:, focus-visible:, group-hover:, peer-checked: ও dark:—ব্যবহার করে এই কাজ সহজ করে দেয়, যা সমতল স্পেসিফিসিটি বজায় রেখে সাধারণ সিএসএস সিউডো-ক্লাসে রূপান্তরিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'State Variant Prefix',
          def: {
            en: 'A modifier prepended to a utility class (such as hover:bg-blue-600) targeting specific pseudo-class circumstances',
            bn: 'ইউটিলিটি ক্লাসের সামনে বসা একটি প্রিফিক্স (যেমন hover:bg-blue-600) যা নির্দিষ্ট সিউডো-ক্লাসের মুহূর্তে সক্রিয় হয়'
          }
        },
        {
          term: 'focus-visible Modifier',
          def: {
            en: 'An accessibility-focused state variant that displays focus rings exclusively during keyboard tab navigation, avoiding mouse click rings',
            bn: 'এক্সেসিবিলিটি-বান্ধব ভ্যারিয়েন্ট যা কেবল কীবোর্ড ট্যাব দিয়ে এলে ফোকাস রিং দেখায় এবং মাউস ক্লিকে অনাবশ্যক রিং এড়িয়ে চলে'
          }
        },
        {
          term: 'group and group-hover',
          def: {
            en: 'Pattern where a parent element marked with group triggers coordinated styling changes on nested children using group-hover:',
            bn: 'এমন প্যাটার্ন যেখানে group চিহ্নিত প্যারেন্টের ওপর মাউস আনলে তার ভেতরের সন্তান উপাদানগুলো group-hover: দিয়ে পরিবর্তিত হয়'
          }
        },
        {
          term: 'peer and peer-checked',
          def: {
            en: 'Pattern where an element marked with peer alters the styling of subsequent siblings based on its checked or focus state',
            bn: 'এমন প্যাটার্ন যেখানে peer চিহ্নিত উপাদানের ফোকাস বা চেক অবস্থার ওপর ভিত্তি করে পেছনের সহোদর উপাদানগুলোর স্টাইল বদলায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'gesture-states',
      text: {
        en: 'Interaction Gestures: Hover, Focus, and Active',
        bn: 'ইন্টারঅ্যাকশন জেসচার: হোভার, ফোকাস ও অ্যাক্টিভ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every interactive button requires a progression of states. In Tailwind, a primary button is styled with bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-95. When a user hovers, the button subtly deepens in color; when clicked, active compresses it slightly to give satisfying tactile feedback.',
        bn: 'প্রতিটি ইন্টারঅ্যাক্টিভ বাটনের একটি সুনির্দিষ্ট স্টেট চক্র থাকে। Tailwind-এ একটি বাটনকে bg-blue-500 hover:bg-blue-600 active:bg-blue-700 active:scale-95 দিয়ে সাজানো হয়। মাউস আনলে রং একটু গাঢ় হয় এবং ক্লিক করলে active বাটনকে সামান্য সংকুচিত করে চমৎকার প্রতিক্রিয়া দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For keyboard navigation accessibility, always pair interactive elements with focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500. Using focus-visible ensures sighted mouse users do not see distracting focus rings upon normal clicks, while keyboard-assisted navigators receive a prominent visual outline.',
        bn: 'কীবোর্ড নেভিগেশন এক্সেসিবিলিটির জন্য সর্বদা focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 ব্যবহার করুন। এর ফলে মাউস ব্যবহারকারীরা সাধারণ ক্লিকে বিরক্তিকর রিং দেখেন না, কিন্তু কীবোর্ড নেভিগেটররা স্পষ্ট ও দৃশ্যমান ফোকাস রিং দেখতে পান।'
      }
    },
    {
      type: 'heading',
      id: 'group-peer-patterns',
      text: {
        en: 'Contextual Styling: The group and peer Architecture',
        bn: 'কনটেক্সটুয়াল স্টাইলিং: group ও peer আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In rich component designs, hovering over an entire card often requires nested elements—like an icon arrow or article title—to change appearance together. Marking the outer card with the group class allows nested children to listen to the parent state using group-hover:text-blue-600 group-hover:translate-x-1.',
        bn: 'আধুনিক কার্ড ডিজাইনে পুরো কার্ডের ওপর মাউস আনলে ভেতরের উপাদান—যেমন তীরের আইকন বা শিরোনাম—একসাথে বদলে যেতে হয়। বাইরের কার্ডটিতে group ক্লাস দিলে ভেতরের সন্তানরা group-hover:text-blue-600 group-hover:translate-x-1 দিয়ে প্যারেন্টের হোভারের সাথে সাথে নিজেদের সাজিয়ে নেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Similarly, styling sibling elements—such as custom checkbox cards or floating input labels—is accomplished via peer. In CSS, sibling selectors only operate in forward order. Placing peer on an input element lets subsequent label elements react automatically via peer-focus:-top-4 peer-focus:text-xs peer-checked:bg-blue-50, eliminating custom JavaScript.',
        bn: 'একইভাবে পাশাপাশি থাকা উপাদানের ক্ষেত্রে—যেমন কাস্টম চেকবক্স বা ভাসমান ইনপুট লেবেল—peer ব্যবহার করা হয়। সিএসএসে সহোদর সিলেক্টর কেবল সামনের দিকে কাজ করে। ইনপুটে peer দিলে তার ঠিক পেছনের লেবেল peer-focus:-top-4 বা peer-checked:bg-blue-50 দিয়ে কোনো জাভাস্ক্রিপ্ট ছাড়াই চমৎকারভাবে কাজ করে।'
      }
    },
    {
      type: 'heading',
      id: 'dark-mode-strategy',
      text: {
        en: 'Dark Mode: Media vs Class Strategy',
        bn: 'ডার্ক মোড: মিডিয়া বনাম ক্লাস কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Tailwind provides built-in dark: variant prefixes for night-time color schemes: bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100. Rather than loading an entirely separate dark stylesheet, the JIT engine generates media or selector-scoped rules in the exact same stylesheet.',
        bn: 'রাতের বেলার ডিজাইনের জন্য Tailwind-এ রয়েছে dark: ভ্যারিয়েন্ট: bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100। আলাদা ডার্ক সিএসএস ফাইল লোড করার বদলে JIT কম্পাইলার একই ফাইলের ভেতরে নিখুঁতভাবে এই রুলগুলো তৈরি করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Teams configure dark mode using either media or class strategy. The media strategy automatically follows the user operating system prefers-color-scheme setting. The class strategy triggers dark mode whenever a dark class is added to the HTML root, giving users complete manual control via a theme toggle button.',
        bn: 'ডার্ক মোড পরিচালনা করা যায় মিডিয়া বা ক্লাস কৌশলে। মিডিয়া কৌশল অপারেটিং সিস্টেমের ডার্ক মোড সেটিংস অনুসরণ করে। আর ক্লাস কৌশলে এইচটিএমএলের রুট ট্যাগটিতে dark ক্লাস যুক্ত হলেই ডার্ক মোড সক্রিয় হয়, যা ব্যবহারকারীকে টগল বাটনে চাপ দিয়ে মোড পরিবর্তনের পূর্ণ স্বাধীনতা দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Contextual State Modifiers',
        bn: 'কাঠামোগত তুলনা: কনটেক্সটুয়াল স্টেট মডিফায়ার'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Modifier Pattern', bn: 'মডিফায়ার প্যাটার্ন' },
        { en: 'Trigger Element', bn: 'সক্রিয়কারী উপাদান' },
        { en: 'Target Element', bn: 'লক্ষ্য উপাদান' },
        { en: 'Common Use Case', bn: 'উপযুক্ত ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Direct Pseudo-Class (hover:)', bn: 'সরাসরি সিউডো-ক্লাস (hover:)' },
          { en: 'The element itself', bn: 'উপাদানটি নিজে' },
          { en: 'The element itself', bn: 'উপাদানটি নিজে' },
          { en: 'Buttons, links, and standalone form controls', bn: 'বাটন, লিংক ও একক ফর্মের উপাদান' }
        ],
        [
          { en: 'Parent Group (group-hover:)', bn: 'প্যারেন্ট গ্রুপ (group-hover:)' },
          { en: 'Ancestor marked with group class', bn: 'group ক্লাস থাকা পূর্বপুরুষ উপাদান' },
          { en: 'Descendant marked with group-hover:', bn: 'group-hover: থাকা ভেতরের সন্তান' },
          { en: 'Hoverable cards animating internal icons and titles', bn: 'কার্ডে মাউস আনলে ভেতরের আইকন ও লেখা অ্যানিমেট করা' }
        ],
        [
          { en: 'Sibling Peer (peer-checked:)', bn: 'সহোদর পিয়ার (peer-checked:)' },
          { en: 'Preceding sibling marked with peer', bn: 'সামনে থাকা peer চিহ্নিত সহোদর উপাদান' },
          { en: 'Subsequent sibling marked with peer-*', bn: 'পেছনে থাকা peer-* চিহ্নিত সহোদর উপাদান' },
          { en: 'Floating form labels, custom switch toggles', bn: 'ভাসমান ফর্ম লেবেল ও কাস্টম চেকবক্স সুইচ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Variant Resolution & State Evaluation',
        bn: 'বাস্তব কোড সিমুলেশন: ভ্যারিয়েন্ট সমাধান ও স্টেট মূল্যায়ন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of Tailwind State Modifiers & Dark Mode in Node.js

class VariantEvaluator {
  private colorMap: Record<string, string> = {
    'bg-blue-500': '#3b82f6',
    'bg-blue-600': '#2563eb',
    'bg-slate-800': '#1e293b',
    'bg-white': '#ffffff'
  };

  // Evaluates background color based on interaction and theme state
  evaluateBackground(classes: string, state: { isHovered?: boolean; isDarkMode?: boolean } = {}) {
    const tokens = classes.split(/\\s+/).filter(Boolean);
    let baseBg = '#ffffff';
    let hoverBg: string | null = null;
    let darkBg: string | null = null;

    for (const token of tokens) {
      if (token.startsWith('bg-') && !token.includes(':')) {
        baseBg = this.colorMap[token] || baseBg;
      } else if (token.startsWith('hover:bg-')) {
        const raw = token.replace('hover:', '');
        hoverBg = this.colorMap[raw] || hoverBg;
      } else if (token.startsWith('dark:bg-')) {
        const raw = token.replace('dark:', '');
        darkBg = this.colorMap[raw] || darkBg;
      }
    }

    if (state.isDarkMode && darkBg) return darkBg;
    if (state.isHovered && hoverBg) return hoverBg;
    return baseBg;
  }
}

const evaluator = new VariantEvaluator();
const buttonClasses = 'bg-blue-500 hover:bg-blue-600 dark:bg-slate-800';

const defaultColor = evaluator.evaluateBackground(buttonClasses, { isHovered: false, isDarkMode: false });
const hoverColor = evaluator.evaluateBackground(buttonClasses, { isHovered: true, isDarkMode: false });
const darkColor = evaluator.evaluateBackground(buttonClasses, { isHovered: false, isDarkMode: true });

console.log('Default state background hex:', defaultColor);
// -> Default state background hex: #3b82f6
console.log('Hover state background hex:', hoverColor);
// -> Hover state background hex: #2563eb
console.log('Dark mode state background hex:', darkColor);
// -> Dark mode state background hex: #1e293b
console.log('Hover modifies base color:', defaultColor !== hoverColor);
// -> Hover modifies base color: true
console.log('Dark mode modifies base color:', defaultColor !== darkColor);
// -> Dark mode modifies base color: true`,
      caption: {
        en: 'Simulation: resolves #3b82f6 by default, #2563eb on hover, and #1e293b in dark mode; verifying state responsiveness',
        bn: 'সিমুলেশন: ডিফল্টে #3b82f6, হোভারে #2563eb এবং ডার্ক মোডে #1e293b সমাধান করে; স্টেট প্রতিক্রিয়ার কার্যকারিতা নিশ্চিত করে'
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
        en: 'Rule 1: Always use focus-visible instead of generic focus for interactive buttons. This preserves clean mouse click aesthetics while ensuring full accessibility for keyboard tab navigators.',
        bn: 'নিয়ম ১: ইন্টারঅ্যাক্টিভ বাটনে সাধারণ focus-এর বদলে focus-visible ব্যবহার করুন। এতে মাউস ক্লিকে অহেতুক বর্ডার আসে না কিন্তু কীবোর্ড দিয়ে নেভিগেট করলে স্পষ্ট ফোকাস দেখা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Name nested groups using the group/name syntax when nesting cards. Writing group/card and group/item avoids collision between parent and child hover states.',
        bn: 'নিয়ম ২: নেস্টেড কার্ডের ক্ষেত্রে group/name সিনট্যাক্স দিয়ে গ্রুপগুলোর নাম আলাদা করুন। group/card ও group/item লিখলে প্যারেন্ট ও চাইল্ডের হোভার স্টেটের মাঝে কোনো সংঘাত হয় না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Remember that peer modifiers only style subsequent DOM siblings. In CSS, an element marked with peer can never style an element positioned before it in the markup tree.',
        bn: 'নিয়ম ৩: মনে রাখবেন peer মডিফায়ার কেবল পেছনের সহোদরকেই স্টাইল করতে পারে। সিএসএসের নিয়মে peer চিহ্নিত উপাদানের আগের কোনো উপাদানকে স্টাইল করা অসম্ভব।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Choose the class strategy for dark mode in SaaS products. Toggling a dark class on the HTML root gives users manual control and allows persistent theme preferences via localStorage.',
        bn: 'নিয়ম ৪: আধুনিক অ্যাপ্লিকেশনে ডার্ক মোডের জন্য class কৌশল বেছে নিন। এইচটিএমএলের রুটে dark ক্লাস টগল করলে ব্যবহারকারী নিজের ইচ্ছামতো মোড বদলাতে পারেন এবং তা সেভ রাখা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'tw-var-ex1',
      kind: 'mcq',
      topic: 'focus-visible vs focus for accessibility',
      question: {
        en: 'Why is focus-visible:ring-2 preferred over focus:ring-2 for styling interactive buttons?',
        bn: 'ইন্টারঅ্যাক্টিভ বাটন স্টাইল করার সময় focus:ring-2-এর চেয়ে focus-visible:ring-2 কেন অধিক পছন্দনীয়?'
      },
      options: [
        {
          en: 'It displays the outline ring only when the user navigates using the keyboard (e.g. Tab key), avoiding ugly focus rings on regular mouse clicks while preserving accessibility',
          bn: 'এটি কেবল তখনই ফোকাস রিং দেখায় যখন ব্যবহারকারী কীবোর্ড ট্যাব দিয়ে আসেন, যার ফলে মাউস ক্লিকে কুৎসিত রিং আসে না এবং এক্সেসিবিলিটিও নিখুঁত থাকে'
        },
        {
          en: 'focus-visible makes all button text bold automatically',
          bn: 'focus-visible বাটনের সমস্ত লেখাকে নিজ থেকেই বোল্ড বা মোটা করে ফেলে'
        },
        {
          en: 'Because standard focus is completely prohibited by modern web browsers',
          bn: 'কারণ আধুনিক ব্রাউজারে সাধারণ focus ব্যবহার করা আইনত সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'focus-visible reduces the button click latency to zero milliseconds',
          bn: 'focus-visible বাটনের ক্লিকের সময়ক্ষেপণ কমিয়ে শূন্য মিলিসেকেন্ডে নামিয়ে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about keyboard navigators vs mouse click users.',
        bn: 'কীবোর্ড নেভিগেটর বনাম মাউস ক্লিক ব্যবহারকারীদের অভিজ্ঞতার কথা ভাবুন।'
      },
      explanation: {
        en: 'focus-visible is an accessibility standard. It alerts keyboard navigators to their location without showing distracting outlines to mouse users.',
        bn: 'focus-visible একটি এক্সেসিবিলিটি মানদণ্ড। এটি মাউস ব্যবহারকারীদের বিরক্ত না করে কীবোর্ড ব্যবহারকারীদের তাদের বর্তমান অবস্থান স্পষ্টভাবে জানিয়ে দেয়।'
      }
    },
    {
      id: 'tw-var-ex2',
      kind: 'mcq',
      topic: 'Coordinated parent-child hover with group',
      question: {
        en: 'How do you configure an arrow icon to shift right when the user hovers anywhere over its parent card container?',
        bn: 'ব্যবহারকারী কোনো কার্ডের যেকোনো স্থানে মাউস আনলে তার ভেতরের তীরের আইকনটি ডানে সরে যাবে—এটি কীভাবে তৈরি করবেন?'
      },
      options: [
        {
          en: 'Add group to the outer card container, and add group-hover:translate-x-1 to the nested arrow icon element',
          bn: 'বাইরের কার্ড কন্টেইনারে group যোগ করুন এবং ভেতরের তীরের আইকনটিতে group-hover:translate-x-1 যোগ করুন'
        },
        {
          en: 'Write custom JavaScript window event listeners in a separate script file',
          bn: 'আলাদা স্ক্রিপ্ট ফাইলে কাস্টম জাভাস্ক্রিপ্ট ইভেন্ট লিসেনার লিখে'
        },
        {
          en: 'Add hover:translate-x-1 directly to the HTML document body tag',
          bn: 'এইচটিএমএল ডকুমেন্টের বডি ট্যাগে সরাসরি hover:translate-x-1 যোগ করে'
        },
        {
          en: 'Because Tailwind does not support moving icons in any direction',
          bn: 'কারণ Tailwind কোনো আইকনকে কোনো দিকে স্থানান্তর করা সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mark parent with group; mark child with group-hover:.',
        bn: 'প্যারেন্টে group বসান; চাইল্ডে group-hover: দিন।'
      },
      explanation: {
        en: 'The group utility links children to their parent state. When the group container is hovered, all group-hover: children activate simultaneously.',
        bn: 'group ইউটিলিটি সন্তান উপাদানকে প্যারেন্টের স্টেটের সাথে যুক্ত করে। প্যারেন্টে মাউস আনলে সমস্ত group-hover: উপাদান একসাথে সক্রিয় হয়।'
      }
    },
    {
      id: 'tw-var-ex3',
      kind: 'mcq',
      topic: 'DOM order restriction for peer modifier',
      question: {
        en: 'What fundamental CSS rule restricts how the peer modifier operates between sibling elements in Tailwind CSS?',
        bn: 'সিএসএসের কোন মৌলিক নিয়মটি Tailwind-এ পাশাপাশি থাকা উপাদানে peer মডিফায়ারের কার্যপ্রণালী সীমাবদ্ধ করে?'
      },
      options: [
        {
          en: 'The element marked with peer must appear BEFORE the styled sibling in the DOM tree, because CSS subsequent-sibling selectors (~) only flow forward',
          bn: 'peer চিহ্নিত উপাদানটিকে অবশ্যই টার্গেট উপাদানের পূর্বে থাকতে হবে, কারণ সিএসএসের সহোদর সিলেক্টর (~) কেবল সামনের দিকে কাজ করে'
        },
        {
          en: 'peer only works between elements with identical tag names (e.g. div to div)',
          bn: 'peer কেবল অভিন্ন ট্যাগ থাকা উপাদানের মাঝেই চলে (যেমন div থেকে div)'
        },
        {
          en: 'The peer modifier can only be used on computers running Mac OS',
          bn: 'peer মডিফায়ার কেবল ম্যাক ওএস কম্পিউটারে ব্যবহার করা সম্ভব'
        },
        {
          en: 'peer requires the server to be running Node.js version 20 or higher',
          bn: 'peer চালানোর জন্য সার্ভারে নোড.জেএস ভার্সন ২০ বা তার বেশি থাকতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'CSS cannot select previous siblings, only following siblings.',
        bn: 'সিএসএস আগের সহোদরকে সিলেক্ট করতে পারে না, কেবল পরের সহোদরকে সিলেক্ট করতে পারে।'
      },
      explanation: {
        en: 'CSS only supports following-sibling combinators. The peer element must precede the peer-* element in the HTML document order.',
        bn: 'সিএসএস কেবল সামনের দিকে থাকা সহোদরকে সিলেক্ট করতে পারে। তাই এইচটিএমএলে peer উপাদানকে অবশ্যই peer-* উপাদানের আগে থাকতে হবে।'
      }
    },
    {
      id: 'tw-var-ex4',
      kind: 'mcq',
      topic: 'Dark mode class strategy mechanics',
      question: {
        en: 'How does the class strategy for dark mode enable manual theme toggling in Tailwind applications?',
        bn: 'Tailwind অ্যাপ্লিকেশনে ডার্ক মোডের class কৌশল কীভাবে ম্যানুয়াল থিম টগল করার সুবিধা দেয়?'
      },
      options: [
        {
          en: 'It activates dark: utility classes whenever the "dark" class is applied to the root <html> or <body> element, allowing JavaScript to toggle themes on button click',
          bn: 'রুট <html> বা <body> ট্যাগে "dark" ক্লাস যোগ করলেই এটি dark: ক্লাসগুলোকে সক্রিয় করে, ফলে জাভাস্ক্রিপ্ট বাটনে ক্লিক করে থিম টগল করা যায়'
        },
        {
          en: 'It dims the physical backlight of the user computer monitor',
          bn: 'এটি ব্যবহারকারীর কম্পিউটার স্ক্রিনের আসল ব্যাকলাইট ডিম করে দেয়'
        },
        {
          en: 'It turns off the room lights in the user house automatically',
          bn: 'এটি ব্যবহারকারীর ঘরের বাতি স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়'
        },
        {
          en: 'Because dark mode cannot be enabled without restarting the server',
          bn: 'কারণ সার্ভার রিস্টার্ট না করা পর্যন্ত ডার্ক মোড চালু করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Adding class="dark" to the root element unlocks all dark: variant rules.',
        bn: 'রুট এলিমেন্টে class="dark" যোগ করলে সমস্ত dark: ভ্যারিয়েন্ট খুলে যায়।'
      },
      explanation: {
        en: 'With darkMode: "class", Tailwind compiles dark: styles scoped under the .dark ancestor selector. Toggling the class dynamically enables manual themes.',
        bn: 'darkMode: "class" থাকলে Tailwind সমস্ত dark: স্টাইলকে .dark সিলেক্টরের আওতায় রাখে। রুটে ক্লাসটি টগল করলেই পুরো সাইটের থিম বদলে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-variant-bazaar-quiz',
    title: {
      en: 'State Modifiers & Pseudo-Classes Quiz',
      bn: 'স্টেট মডিফায়ার ও সিউডো-ক্লাস কুইজ'
    },
    questions: [
      {
        id: 'q-named-groups-nested-cards',
        kind: 'mcq',
        topic: 'Resolving nested hover collisions with named groups',
        question: {
          en: 'How do you avoid state conflicts when nesting an interactive button inside an already hovered card container in Tailwind?',
          bn: 'Tailwind-এ হোভার করা একটি কার্ডের ভেতরে আরেকটি ইন্টারঅ্যাক্টিভ বাটন বসালে স্টেট সংঘাত কীভাবে এড়ানো যায়?'
        },
        options: [
          {
            en: 'By assigning unique names to the groups using group/card on the outer wrapper and group-hover/card: on its specific targets',
            bn: 'গ্রুপগুলোর আলাদা নাম দিয়ে; যেমন বাইরের র‍্যাপারে group/card এবং নির্দিষ্ট লক্ষ্যে group-hover/card: ব্যবহার করে'
          },
          {
            en: 'By removing all CSS styling from the inner button component',
            bn: 'ভেতরের বাটন উপাদান থেকে সমস্ত সিএসএস স্টাইল মুছে ফেলে'
          },
          {
            en: 'By opening the button inside an isolated iframe element',
            bn: 'বাটনটিকে একটি সম্পূর্ণ আলাদা আইফ্রেমের ভেতরে ওপেন করে'
          },
          {
            en: 'Because Tailwind strictly forbids placing buttons inside cards',
            bn: 'কারণ Tailwind কার্ডের ভেতরে বাটন রাখা কঠোরভাবে নিষিদ্ধ করেছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use named groups like group/card to isolate hover scopes.',
          bn: 'হোভারের আওতা আলাদা করতে group/card-এর মতো নামযুক্ত গ্রুপ ব্যবহার করুন।'
        },
        explanation: {
          en: 'Named groups (group/{name}) isolate parent contexts. This prevents outer card hovers from colliding with inner button hover interactions.',
          bn: 'নামযুক্ত গ্রুপ (group/{name}) প্যারেন্টের স্টেট আলাদা রাখে। এর ফলে কার্ডের হোভার ভেতরের বাটনের নিজস্ব হোভারের সাথে কোনো সংঘাত সৃষ্টি করে না।'
        }
      },
      {
        id: 'q-active-tactile-feedback',
        kind: 'mcq',
        topic: 'Tactile press feedback with active:scale-95',
        question: {
          en: 'Why do modern web designers combine active:scale-95 with active:bg-blue-700 on clickable buttons?',
          bn: 'ক্লিকযোগ্য বাটনে আধুনিক ডিজাইনাররা active:bg-blue-700-এর সাথে কেন active:scale-95 যুক্ত করেন?'
        },
        options: [
          {
            en: 'It creates a satisfying physical depression effect when pressed, giving instant tactile confirmation that the click was registered',
            bn: 'চাপ দিলে বাটনটি সামান্য ডেবে গিয়ে একটি সন্তোষজনক অনুভূতি দেয়, যা ক্লিক গৃহীত হওয়ার তাৎক্ষণিক ইতিবাচক প্রমাণ দেয়'
          },
          {
            en: 'It deletes 5 percent of the computer memory RAM to speed up clicks',
            bn: 'ক্লিক দ্রুত করতে এটি কম্পিউটারের ৫ শতাংশ মেমোরি র্যাম খালি করে দেয়'
          },
          {
            en: 'Because scale-95 transforms the button into a 3D video game',
            bn: 'কারণ scale-95 বাটনটিকে একটি থ্রিডি ভিডিও গেমে রূপান্তরিত করে'
          },
          {
            en: 'To make the button unclickable for the next 10 minutes',
            bn: 'যাতে পরবর্তী ১০ মিনিট বাটনটিতে আর কোনো ক্লিক না করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Visual confirmation that an action was registered.',
          bn: 'একটি কাজ সম্পন্ন হওয়ার ভিজ্যুয়াল প্রমাণের কথা ভাবুন।'
        },
        explanation: {
          en: 'Combining scale compression with color deepening mimics real physical push buttons, delivering superior tactile feedback on interactive interfaces.',
          bn: 'রং গাঢ় করার সাথে বাটনকে সামান্য ডেবে দেওয়া আসল বাটনের মতো অনুভূতি তৈরি করে, যা চমৎকার ব্যবহারকারী অভিজ্ঞতা উপহার দেয়।'
        }
      },
      {
        id: 'q-structural-odd-even-tables',
        kind: 'mcq',
        topic: 'Zebra striping tables with odd: and even: variants',
        question: {
          en: 'How can developers implement accessible "zebra-striped" table rows without writing custom nth-child CSS rules in Tailwind?',
          bn: 'Tailwind-এ কাস্টম nth-child সিএসএস না লিখে ডেভেলপাররা কীভাবে সহজে টেবিলের সারিতে সাদাকালো জেব্রা স্ট্রাইপ দিতে পারেন?'
        },
        options: [
          {
            en: 'By adding odd:bg-white even:bg-slate-50 to the table row (<tr>) elements',
            bn: 'টেবিলের রো (<tr>) উপাদানে odd:bg-white even:bg-slate-50 ক্লাস যোগ করে'
          },
          {
            en: 'By painting alternate stripes onto the user monitor with a marker',
            bn: 'ব্যবহারকারীর কম্পিউটার স্ক্রিনে মার্কার দিয়ে দাগ টেনে দিয়ে'
          },
          {
            en: 'By creating two duplicate tables and hiding one of them in JavaScript',
            bn: 'দুটি ডুপ্লিকেট টেবিল তৈরি করে জাভাস্ক্রিপ্ট দিয়ে একটি লুকিয়ে রেখে'
          },
          {
            en: 'Because HTML tables cannot display background colors under any circumstances',
            bn: 'কারণ কোনো অবস্থাতেই এইচটিএমএল টেবিল ব্যাকগ্রাউন্ড কালার দেখাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The odd: and even: pseudo-class variants target alternate rows.',
          bn: 'odd: এবং even: সিউডো-ক্লাসগুলো পর্যায়ক্রমিক সারিগুলোকে টার্গেট করে।'
        },
        explanation: {
          en: 'Tailwind odd: and even: variants compile to :nth-child(odd) and :nth-child(even), making alternating row styles clean and declarative.',
          bn: 'Tailwind-এর odd: এবং even: ক্লাসগুলো সিএসএসের :nth-child(odd) ও :nth-child(even)-এ রূপান্তর হয়ে টেবিলে সহজে জেব্রা স্ট্রাইপ দেয়।'
        }
      },
      {
        id: 'q-disabled-button-states',
        kind: 'mcq',
        topic: 'Accessible disabled button styling with disabled: modifier',
        question: {
          en: 'Which class combination properly conveys to users that a form submit button is disabled and pending server submission?',
          bn: 'কোন ক্লাস কম্বিনেশনটি ব্যবহারকারীকে সঠিকভাবে বোঝায় যে ফর্মের বাটনটি নিষ্ক্রিয় এবং সার্ভারে সাবমিট হওয়ার অপেক্ষায় আছে?'
        },
        options: [
          {
            en: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none',
            bn: 'disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none'
          },
          {
            en: 'delete-button-permanently-from-dom',
            bn: 'delete-button-permanently-from-dom'
          },
          {
            en: 'invisible-hidden-secret-button',
            bn: 'invisible-hidden-secret-button'
          },
          {
            en: 'infinite-spin-rotate-forever',
            bn: 'infinite-spin-rotate-forever'
          }
        ],
        answer: 0,
        hint: {
          en: 'Faded opacity, not-allowed cursor, and preventing clicks.',
          bn: 'হালকা অস্বচ্ছতা, নিষিদ্ধ কার্সর এবং ক্লিক বন্ধ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Combining opacity-50 with cursor-not-allowed gives clear visual cues, while pointer-events-none prevents redundant accidental clicks.',
          bn: 'opacity-50 এবং cursor-not-allowed ব্যবহারের মাধ্যমে স্পষ্ট বার্তা দেওয়া হয় এবং pointer-events-none অনাকাঙ্ক্ষিত ক্লিক হওয়া আটকায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-embroidery-floor',
    title: {
      en: 'Component Extraction & The Cascade — @layer Directives, @apply & Component Architecture',
      bn: 'কম্পোনেন্ট এক্সট্রাকশন ও ক্যাসকেড — @layer নির্দেশক, @apply ও উপাদান স্থাপত্য'
    }
  }
};
