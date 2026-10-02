import type { Lesson } from '../../../lib/types';

export const TheKeyboardDoorLesson: Lesson = {
  slug: 'the-keyboard-door',
  tech: 'accessibility',
  title: {
    en: 'Keyboard Navigation, Focus Indicators & Dialog Focus Traps',
    bn: 'কিবোর্ড নেভিগেশন, ফোকাস ইন্ডিকেটর ও ডায়ালগ ফোকাস ট্র্যাপ'
  },
  summary: {
    en: 'Keyboard operability is the single most critical technical prerequisite for digital accessibility. Assistive hardware like switch controllers, sip-and-puff tubes, and screen readers depend directly on browser keyboard event emulation. WCAG Success Criterion 2.1.1 mandates that all functionality must be operable via keyboard, while Criterion 2.1.2 forbids keyboard traps where focus cannot escape. In this lesson, you will master focus indicator styling with CSS focus-visible, analyze tabindex rules including why positive values are harmful, and implement robust modal dialog focus trapping. When an overlay opens with 3 interactive elements, pressing Tab on the final button must cycle focus forward to index 0, and pressing Shift+Tab on index 0 must wrap backward to index 2.',
    bn: 'ডিজিটাল অ্যাক্সেসিবিলিটির ক্ষেত্রে সবচেয়ে মৌলিক পূর্বশর্ত হলো কিবোর্ড দিয়ে ওয়েবসাইট পরিচালনা করার সক্ষমতা। স্ক্রিন রিডার, স্পেশাল সুইচ এবং মুখের বাতাসের কন্ট্রোলারের মতো সব সহায়ক প্রযুক্তি সরাসরি কিবোর্ড ইভেন্টের উপর নির্ভর করে কাজ করে। ডব্লিউসিএজি নিয়ম ২.১.১ অনুযায়ী সব ফিচার কিবোর্ডে ব্যবহারযোগ্য হতে হবে এবং ২.১.২ অনুযায়ী কিবোর্ড ট্র্যাপ তৈরি করা সম্পূর্ণ নিষিদ্ধ। এই পাঠে সিএসএস focus-visible দিয়ে দৃশ্যমান ফোকাস তৈরি, tabindex এর সঠিক প্রয়োগ এবং মোডাল ডায়ালগে ফোকাস ট্র্যাপ তৈরির কৌশল শেখানো হয়েছে। ৩টি উপাদান বিশিষ্ট একটি মোডালে শেষ বোতাম থেকে ট্যাব চাপলে ফোকাস শুরুতে ০ ইনডেক্সে ঘুরবে এবং শুরুতে শিফট-ট্যাব চাপলে আবার শেষ ২ নম্বর ইনডেক্সে ফিরে যাবে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Keyboard Accessibility is Non-Negotiable',
        bn: 'মূল ধারণা: কিবোর্ড অ্যাক্সেসিবিলিটি সবার জন্য আবশ্যিক'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'Every feature accessible with a computer mouse must be equally operable using solely a physical keyboard. Millions of people with motor disabilities, tremors, or repetitive strain injuries cannot operate a precision mouse cursor. Removing outline focus indicators via CSS leaves keyboard navigators blind, turning a website into a bewildering maze where users cannot tell which button is currently active.',
        bn: 'মাউস দিয়ে ওয়েবসাইটে যা যা করা যায়, তার প্রতিটি কাজ কেবল কিবোর্ড দিয়েও নির্ভুলভাবে সম্পন্ন করা যেতে হবে। প্যারালাইসিস, কাঁপুনি বা শারীরিক সীমাবদ্ধতার কারণে লাখ লাখ মানুষ মাউসের কার্সার নাড়তে পারেন না। সিএসএস দিয়ে ফোকাস আউটলাইন মুছে দিলে কিবোর্ড ব্যবহারকারীরা বুঝতে পারেন না বর্তমানে কোন বোতামে ফোকাস আছে, ফলে সাইটটি তাদের জন্য সম্পূর্ণ অকেজো হয়ে পড়ে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Focus Visible (:focus-visible)',
          def: {
            en: 'A modern CSS pseudo-class displaying visual focus outlines for keyboard navigation while suppressing them on mouse clicks',
            bn: 'সিএসএস-এর একটি আধুনিক সিউডো-ক্লাস যা মাউস ক্লিকে দাগ লুকিয়ে কেবল কিবোর্ড নেভিগেশনের সময় স্পষ্ট ফোকাস আউটলাইন দেখায়'
          }
        },
        {
          term: 'Focus Trap',
          def: {
            en: 'A programmatic containment loop ensuring Tab and Shift+Tab cycles stay strictly inside an active modal dialog until dismissed',
            bn: 'একটি কোডিং কৌশল যা সক্রিয় মোডাল বন্ধ না হওয়া পর্যন্ত কিবোর্ড ফোকাসকে মোডালের ভেতরের উপাদানগুলোর মধ্যেই আটকে রাখে'
          }
        },
        {
          term: 'Keyboard Trap Defect',
          def: {
            en: 'A severe accessibility violation where keyboard focus enters a widget or plugin but cannot be moved out via standard keys',
            bn: 'একটি মারাত্মক ত্রুটি যেখানে কিবোর্ড ফোকাস কোনো প্লাগইনে ঢুকলে স্ট্যান্ডার্ড কি চেপে আর সেখান থেকে বের হওয়া যায় না'
          }
        },
        {
          term: 'Skip Link',
          def: {
            en: 'A hidden anchor link at the top of a page that becomes visible on focus, allowing keyboard users to bypass repeating header links',
            bn: 'পেজের একদম শুরুতে লুকানো একটি লিঙ্ক যা ফোকাস পেলে দৃশ্যমান হয় এবং দীর্ঘ মেনু এড়িয়ে সরাসরি মূল কন্টেন্টে যেতে সাহায্য করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'tabindex-rules-table',
      text: {
        en: 'The Tabindex Blueprint: Rules and Anti-Patterns',
        bn: 'ট্যাবইনডেক্সের সঠিক নিয়ম ও অ্যান্টি-প্যাটার্ন'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Allowed Values for the HTML tabindex Attribute',
        bn: 'এইচটিএমএল tabindex অ্যাট্রিবিউটের গ্রহণযোগ্য মানসমূহ'
      },
      head: [
        { en: 'Attribute Value', bn: 'মান' },
        { en: 'Browser Tab Behavior', bn: 'কিবোর্ড ট্যাবের আচরণ' },
        { en: 'Standard Engineering Use Case', bn: 'ব্যবহারের উপযুক্ত ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'tabindex="0"', bn: 'tabindex="0"' },
          { en: 'Inserts the element into the natural document tab order based on DOM position', bn: 'এলিমেন্টটিকে তার স্বাভাবিক স্থান অনুযায়ী সাধারণ ট্যাব সিকোয়েন্সে অন্তর্ভুক্ত করে' },
          { en: 'Custom custom interactive widgets (tabs, sliders, switches) requiring keyboard focus', bn: 'কাস্টম স্লাইডার, সুইচ বা ট্যাবের মতো উপাদানে কিবোর্ড ফোকাস নিশ্চিত করতে' }
        ],
        [
          { en: 'tabindex="-1"', bn: 'tabindex="-1"' },
          { en: 'Removes element from tab order, but allows programmatic focus via element.focus()', bn: 'ট্যাব চেপে পৌঁছানো বন্ধ করে, তবে কোড লিখে element.focus() দিয়ে ফোকাস আনা যায়' },
          { en: 'Modal containers, error summary banners, and internal panel targets', bn: 'মোডাল কন্টেইনার, ফর্ম এরর সামারি বা কোনো সেকশনে কোড দিয়ে ফোকাস পাঠাতে' }
        ],
        [
          { en: 'tabindex="1" or higher (Anti-Pattern)', bn: 'tabindex="1" বা তদূর্ধ্ব (নিষিদ্ধ)' },
          { en: 'Forces element ahead of all natural DOM elements; severely scrambles focus sequence', bn: 'স্বাভাবিক ক্রম ভেঙে সবার আগে ফোকাস ছিনিয়ে নেয়; নেভিগেশনের শৃঙ্খলা নষ্ট করে' },
          { en: 'NEVER USE. Violates WCAG 2.4.3 Focus Order; always refactor the DOM order instead', bn: 'কখনোই ব্যবহার করবেন না; এটি ডব্লিউসিএজি নিয়ম ভঙ্গ করে, প্রয়োজনে এইচটিএমএল ক্রম ঠিক করুন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Modal Dialog Focus Ring Trapping',
        bn: 'চালনাযোগ্য সিমুলেশন: মোডাল ডায়ালগ ফোকাস ট্র্যাপ চক্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the cyclic focus wrapping algorithm of an accessible modal dialog containing 3 interactive elements:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৩টি বোতাম বিশিষ্ট একটি অ্যাক্সেসিবল মোডালে কিবোর্ড ফোকাস চক্রাকারে ঘোরার অ্যালগরিদম দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'a11y-focus-trap-sim',
      lang: 'javascript',
      code: `// Modal Dialog Cyclic Keyboard Focus Ring Simulator
const modalElements = ['closeButton', 'emailInput', 'confirmButton'];
const count = modalElements.length; // 3 interactive targets

function nextFocusIndex(currentIndex, isShiftTab) {
  if (isShiftTab) {
    // Wrap backward to end of list when at index 0
    return (currentIndex - 1 + count) % count;
  }
  // Wrap forward to index 0 when at final element
  return (currentIndex + 1) % count;
}

// User presses Tab on final confirmButton (index 2)
const forwardWrap = nextFocusIndex(2, false);
console.log('Forward Tab from confirmButton (index 2) wraps to index:', forwardWrap);
// -> Forward Tab from confirmButton (index 2) wraps to index: 0

// User presses Shift+Tab on initial closeButton (index 0)
const backwardWrap = nextFocusIndex(0, true);
console.log('Backward Shift+Tab from closeButton (index 0) wraps to index:', backwardWrap);
// -> Backward Shift+Tab from closeButton (index 0) wraps to index: 2`,
      caption: {
        en: 'Figure 1: Modal focus ring cycling: Tab on index 2 wraps forward to index 0, and Shift+Tab on index 0 wraps backward to index 2',
        bn: 'চিত্র ১: মোডালের ফোকাস রিং: ২ নম্বর ইনডেক্সে ট্যাব চাপলে ০ নম্বর ইনডেক্সে যায় এবং ০ নম্বর থেকে শিফট-ট্যাব চাপলে ২ নম্বর ইনডেক্সে ঘুরে আসে'
      }
    },
    {
      type: 'heading',
      id: 'css-focus-visible-guide',
      text: {
        en: 'Styling Without Breaking: The :focus-visible Standard',
        bn: 'ভাঙনহীন স্টাইলিং: সিএসএস :focus-visible মানদণ্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, designers disliked the default blue outline displayed when clicking buttons with a mouse. Developers frequently authored CSS rules like button { outline: none; }, inadvertently destroying keyboard accessibility for anyone navigating via the Tab key. The modern CSS :focus-visible pseudo-class resolves this tension permanently by applying distinct outlines only when the browser detects keyboard or assistive device interaction.',
        bn: 'অতীতে মাউসে ক্লিক করলে ব্রাউজারের ডিফল্ট নীল আউটলাইন দেখে ডিজাইনাররা বিরক্ত হতেন। ফলে অনেকেই button { outline: none; } লিখে ফোকাস দাগ সম্পূর্ণ মুছে ফেলতেন, যা কিবোর্ড ব্যবহারকারীদের জন্য মারাত্মক বিপত্তি ডেকে আনত। আধুনিক সিএসএস :focus-visible এই সমস্যার স্থায়ী সমাধান করেছে; এটি মাউস ক্লিকে দাগ লুকিয়ে রাখে কিন্তু কিবোর্ড বা বিশেষ ডিভাইস শনাক্ত করলেই স্পষ্ট আউটলাইন প্রদর্শন করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Focus Retention Rule',
          def: {
            en: 'When a modal dialog is dismissed via Escape key or Close button, focus must be returned to the exact trigger element that opened it',
            bn: 'মোডাল বন্ধ হলে কিবোর্ড ফোকাসকে অবিকল সেই বোতামটিতে ফেরত পাঠাতে হবে যা চেপে মোডালটি খোলা হয়েছিল'
          }
        },
        {
          term: 'The Inert Attribute',
          def: {
            en: 'A native HTML attribute placed on the background document marking it completely invisible and unclickable while a dialog is active',
            bn: 'এইচটিএমএল-এর একটি অ্যাট্রিবিউট যা ডায়ালগ খোলা থাকা অবস্থায় পেছনের সমস্ত অংশকে নিষ্ক্রিয় ও অপ্রাপ্য করে রাখে'
          }
        },
        {
          term: 'Roving Tabindex',
          def: {
            en: 'A focus management technique where one widget item has tabindex="0" while all sibling items have tabindex="-1", manipulated with arrow keys',
            bn: 'একটি ফোকাস নিয়ন্ত্রণ কৌশল যেখানে উইজেটের কেবল একটি উপাদানে tabindex="0" থাকে এবং বাকিগুলোতে tabindex="-1" রেখে তীর চিহ্নের কি দিয়ে ফোকাস পরিচালনা করা হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-focus-wrap-calc-ex',
      kind: 'mcq',
      topic: 'Modal focus wrap calculation with 3 elements',
      question: {
        en: 'In a modal dialog containing 3 interactive elements (indices 0, 1, 2), what is the destination index when the user presses Tab on index 2?',
        bn: '৩টি উপাদান বিশিষ্ট মোডালে (ইনডেক্স ০, ১, ২) ২ নম্বর ইনডেক্সে থাকা অবস্থায় ট্যাব চাপলে ফোকাস কোন ইনডেক্সে যাবে?'
      },
      options: [
        {
          en: 'Index 0 (wraps back to the first interactive element)',
          bn: '০ ইনডেক্সে (শুরুর প্রথম উপাদানে ফিরে যাবে)'
        },
        {
          en: 'Index 3 (offscreen background)',
          bn: '৩ নম্বর ইনডেক্সে (পেছনের পর্দায়)'
        },
        {
          en: 'Index 1 (the middle input)',
          bn: '১ নম্বর ইনডেক্সে (মাঝের উপাদানে)'
        },
        {
          en: 'Focus escapes to the browser URL address bar',
          bn: 'ফোকাস ব্রাউজারের ইউআরএল বারে চলে যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modulo arithmetic: (2 + 1) % 3 equals 0.',
        bn: '(২ + ১) % ৩ সমান ০।'
      },
      explanation: {
        en: 'An accessible modal traps focus by cycling back to index 0 rather than bleeding out into the background document.',
        bn: 'মোডাল ডায়ালগে শেষ উপাদান থেকে ট্যাব চাপলে পেছনের সাইটে না গিয়ে আবার মোডালের শুরুর ০ নম্বর বোতামে ফোকাস ফিরে আসে।'
      }
    },
    {
      id: 'a11y-positive-tabindex-ex',
      kind: 'mcq',
      topic: 'Why positive tabindex is considered a severe anti-pattern',
      question: {
        en: 'Why is using positive tabindex values (like tabindex="5") considered a severe engineering anti-pattern?',
        bn: 'ধনাত্মক সংখ্যা যেমন tabindex="5" ব্যবহার করা কেন একটি মারাত্মক ভুল হিসেবে গণ্য হয়?'
      },
      options: [
        {
          en: 'It overrides the natural DOM tab order, creating an unpredictable and jarring navigation sequence for keyboard users',
          bn: 'এটি স্বাভাবিক এইচটিএমএল ক্রম নষ্ট করে কিবোর্ড ব্যবহারকারীদের জন্য অত্যন্ত বিভ্রান্তিকর নেভিগেশন তৈরি করে'
        },
        {
          en: 'It causes the browser to delete the CSS stylesheet',
          bn: 'এটি ব্রাউজার থেকে সিএসএস স্টাইলশিট মুছে ফেলে'
        },
        {
          en: 'It makes the mouse cursor move backwards',
          bn: 'এটি মাউসের কার্সারকে উল্টো দিকে চালায়'
        },
        {
          en: 'It slows down the WiFi internet connection',
          bn: 'এটি ইন্টারনেটের গতি কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Positive tabindex hijacks the natural document reading and tab flow.',
        bn: 'এইচটিএমএল-এর স্বাভাবিক প্রবাহ নষ্ট করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Positive tabindex values disrupt the logical reading order. Developers should order HTML elements correctly in the DOM instead.',
        bn: 'পজিটিভ সংখ্যা স্বাভাবিক ফোকাস ক্রম ভেঙে ফেলে; এর বদলে এইচটিএমএল কোডের ক্রমানুসার ঠিক রাখা উচিত।'
      }
    },
    {
      id: 'a11y-focus-visible-purpose-ex',
      kind: 'mcq',
      topic: 'The engineering advantage of CSS :focus-visible',
      question: {
        en: 'How does CSS :focus-visible solve the conflict between visual design aesthetics and accessibility compliance?',
        bn: 'সিএসএস :focus-visible কীভাবে ডিজাইনের সৌন্দর্য এবং অ্যাক্সেসিবিলিটি উভয়ের মধ্যে সমাধান আনে?'
      },
      options: [
        {
          en: 'It suppresses outlines during mouse clicks while preserving high-contrast focus rings when navigating via keyboard',
          bn: 'এটি মাউসের ক্লিকে দাগ লুকিয়ে রাখে কিন্তু কিবোর্ড দিয়ে নেভিগেট করলে উজ্জ্বল ফোকাস রিং দেখায়'
        },
        {
          en: 'It removes all buttons from mobile phones',
          bn: 'এটি মোবাইল থেকে সব বোতাম সরিয়ে দেয়'
        },
        {
          en: 'It forces all users to browse in dark mode',
          bn: 'এটি সব ব্যবহারকারীকে ডার্ক মোডে ব্রাউজ করতে বাধ্য করে'
        },
        {
          en: 'It doubles the size of every image',
          bn: 'এটি প্রতিটি ছবির আকার দ্বিগুণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Keyboard users see focus outlines, while mouse clicks stay clean.',
        bn: 'কিবোর্ডে ফোকাস রিং প্রদর্শন এবং মাউসে তা লুকানোর কথা ভাবুন।'
      },
      explanation: {
        en: ':focus-visible provides smart heuristics, drawing outlines for keyboard navigators without annoying mouse users with focus rings.',
        bn: ':focus-visible মাউস ব্যবহারকারীদের বিরক্ত না করে কেবল কিবোর্ড ব্যবহারকারীদের জন্য স্পষ্ট ফোকাস আউটলাইন বজায় রাখে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-keyboard-door',
    title: {
      en: 'Keyboard Accessibility & Focus Management Quiz',
      bn: 'কিবোর্ড অ্যাক্সেসিবিলিটি ও ফোকাস ম্যানেজমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-modal-restore-focus',
        kind: 'mcq',
        topic: 'Restoring focus when closing an overlay modal',
        question: {
          en: 'When a user presses Escape to dismiss an open modal dialog, where must the keyboard focus return?',
          bn: 'ব্যবহারকারী Escape কি চেপে মোডাল ডায়ালগ বন্ধ করলে কিবোর্ড ফোকাস কোথায় ফেরত যাওয়া উচিত?'
        },
        options: [
          {
            en: 'Back to the exact trigger element that originally opened the modal',
            bn: 'ঠিক যে বোতামটিতে ক্লিক করে মোডালটি খোলা হয়েছিল সেখানেই'
          },
          {
            en: 'To the top of the browser document body tag',
            bn: 'ব্রাউজার পেজের একদম শীর্ষে body ট্যাগে'
          },
          {
            en: 'To the very last link in the footer',
            bn: 'ফুটারের একদম শেষ লিঙ্কে'
          },
          {
            en: 'Focus should be permanently destroyed and removed',
            bn: 'ফোকাস চিরতরে ধ্বংস বা মুছে ফেলা উচিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Return to the opener button so the user does not lose their place.',
          bn: 'ব্যবহারকারী যেখান থেকে মোডাল খুলেছিলেন সেখানে ফোকাস ফেরানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Restoring focus to the trigger prevents keyboard users from losing their position and having to tab all the way from the top again.',
          bn: 'আগের বোতামে ফোকাস ফেরত না দিলে ব্যবহারকারী পথ হারিয়ে ফেলেন এবং পুনরায় পুরো পেজ ট্যাপ করতে হয়।'
        }
      },
      {
        id: 'q-a11y-skip-link-function',
        kind: 'mcq',
        topic: 'How skip links benefit screen reader and keyboard visitors',
        question: {
          en: 'What is the primary function of a "Skip to Main Content" link placed at the very start of an HTML document?',
          bn: 'এইচটিএমএল ডকুমেন্টের শুরুতে "Skip to Main Content" লিঙ্কের মূল কাজ কী?'
        },
        options: [
          {
            en: 'It allows keyboard users to bypass dozens of repeating header and navigation links and jump directly to the primary article',
            bn: 'এটি কিবোর্ড ব্যবহারকারীদের বারবার আসা মেনু লিঙ্কগুলো এড়িয়ে সরাসরি পেজের মূল কন্টেন্টে যেতে দেয়'
          },
          {
            en: 'It skips loading images to save mobile data',
            bn: 'এটি মোবাইল ডাটা বাঁচাতে ছবি লোড করা বন্ধ করে'
          },
          {
            en: 'It speeds up server database transactions',
            bn: 'এটি ডাটাবেসের কাজের গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It logs the user out of their account',
            bn: 'এটি ব্যবহারকারীর অ্যাকাউন্ট লগআউট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bypassing repetitive navigation blocks.',
          bn: 'পুনরাবৃত্তিময় মেনু এড়িয়ে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Skip links spare keyboard users the repetitive fatigue of tabbing through 30 header links on every single page navigation.',
          bn: 'স্কিপ লিঙ্ক থাকার ফলে প্রতিটি পেজে গিয়ে বারবার ৩০ টির বেশি ট্যাব না চেপে সরাসরি পড়ার অংশে যাওয়া যায়।'
        }
      },
      {
        id: 'q-a11y-keyboard-trap-violation',
        kind: 'mcq',
        topic: 'Understanding WCAG Criterion 2.1.2 No Keyboard Trap',
        question: {
          en: 'Which scenario represents a catastrophic violation of WCAG Success Criterion 2.1.2 (No Keyboard Trap)?',
          bn: 'নিচের কোনটি ডব্লিউসিএজি ২.১.২ (No Keyboard Trap) নিয়মের একটি মারাত্মক লঙ্ঘন?'
        },
        options: [
          {
            en: 'A user tabs into a third-party video player or custom widget, but pressing Tab, Shift+Tab, or Escape fails to move focus back to the page',
            bn: 'ব্যবহারকারী কোনো ভিডিও প্লেয়ার বা উইজেটে ট্যাব দিয়ে ঢোকার পর ট্যাব বা এস্কেপ চেপে আর বাইরে বের হতে না পারা'
          },
          {
            en: 'A user types text into an input field successfully',
            bn: 'ব্যবহারকারী ইনপুট বক্সে সুন্দরভাবে লেখা টাইপ করা'
          },
          {
            en: 'A webpage takes 2 seconds to load over 4G networks',
            bn: 'ওয়েব পেজ লোড হতে ২ সেকেন্ড সময় লাগা'
          },
          {
            en: 'A button changes background color when hovered with a mouse',
            bn: 'মাউস রাখলে বোতামের রঙ বদলে যাওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Focus becomes hopelessly trapped with no key to escape.',
          bn: 'ফোকাস কোনো বাক্সে আটকে গিয়ে আর বের হতে না পারার কথা ভাবুন।'
        },
        explanation: {
          en: 'A keyboard trap completely halts navigation for disabled users, forcing them to close the browser tab or abandon the site.',
          bn: 'কিবোর্ড ট্র্যাপ ঘটলে ব্যবহারকারী আর কোনো দিকে যেতে পারেন না, ফলে তাকে সাইট ছেড়ে দিতে বাধ্য হতে হয়।'
        }
      },
      {
        id: 'q-a11y-inert-attribute-mechanics',
        kind: 'mcq',
        topic: 'How the HTML inert attribute assists dialog management',
        question: {
          en: 'How does applying the inert attribute to the background page container assist modal accessibility?',
          bn: 'পেছনের পেজ কন্টেইনারে inert অ্যাট্রিবিউট বসালে তা কীভাবে মোডাল অ্যাক্সেসিবিলিটিতে সাহায্য করে?'
        },
        options: [
          {
            en: 'It completely removes the background from the accessibility tree, prevents tab focus, and blocks mouse clicks outside the modal',
            bn: 'এটি পেছনের অংশকে অ্যাক্সেসিবিলিটি ট্রি থেকে সম্পূর্ণ লুকিয়ে ফেলে এবং কিবোর্ড ট্যাব ও মাউস ক্লিক পুরোপুরি আটকে দেয়'
          },
          {
            en: 'It converts all background text into Russian',
            bn: 'এটি পেছনের সব লেখাকে রুশ ভাষায় অনুবাদ করে'
          },
          {
            en: 'It increases the sound volume of the computer speakers',
            bn: 'এটি স্পিকারের শব্দের মাত্রা বাড়িয়ে দেয়'
          },
          {
            en: 'It prints the web page to a physical office printer',
            bn: 'এটি প্রিন্টার দিয়ে ওয়েব পেজটি প্রিন্ট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Inert disables pointer, tab, and screen reader access behind the modal.',
          bn: 'পেছনের কনটেন্টে ফোকাস এবং ক্লিক পুরোপুরি নিষ্ক্রিয় রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'The inert attribute ensures that screen readers cannot accidentally read or focus background content while a modal dialog is open.',
          bn: 'inert ব্যবহারের ফলে মোডাল চলাকালীন পেছনের কোনো উপাদানে ভুলবশত ফোকাস বা ক্লিক যাওয়ার কোনো সুযোগ থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'contrast-and-text',
    tech: 'accessibility',
    title: {
      en: 'Color Contrast Ratios, Reflow & Typography',
      bn: 'কালার কনট্রাস্ট রেশিও, রিফ্লো ও টাইপোগ্রাফি'
    }
  }
};
