import type { Lesson } from '../../../lib/types';

export const TheSemanticFrameLesson: Lesson = {
  slug: 'the-semantic-frame',
  tech: 'accessibility',
  title: {
    en: 'HTML-First Semantics, The Accessibility Tree & ARIA Rules',
    bn: 'এইচটিএমএল-ফার্স্ট সিম্যান্টিক্স, অ্যাক্সেসিবিলিটি ট্রি ও এআরআইএ নিয়ম'
  },
  summary: {
    en: 'Modern browsers parse HTML into two parallel structures: the Document Object Model (DOM) for visual rendering and the Accessibility Tree for assistive technologies. Assistive software such as screen readers queries the Accessibility Tree to announce the role, accessible name, states, and values of interface components. This lesson explores the First Rule of ARIA: never use an ARIA role or property when a native semantic HTML element provides the required behavior out of the box. We contrast native elements like button, nav, and dialog against generic div elements wrapped in ARIA attributes. An ARIA div requires 82 bytes of markup and 120 lines of JavaScript to match a 34-byte native button. Semantic markup is both lighter and substantially more reliable.',
    bn: 'আধুনিক ব্রাউজার এইচটিএমএল কোড পার্স করে দুটি সমান্তরাল কাঠামো তৈরি করে: দৃশ্যমান রেন্ডারিংয়ের জন্য DOM এবং অ্যাসিস্টিভ ডিভাইসের জন্য অ্যাক্সেসিবিলিটি ট্রি (Accessibility Tree)। স্ক্রিন রিডার এই ট্রি থেকে প্রতিটি উপাদানের রোল, নাম, স্টেট ও ভ্যালু পাঠ করে ব্যবহারকারীকে শোনায়। এই পাঠে এআরআইএ (ARIA)-এর প্রথম স্বর্ণসূত্র ব্যাখ্যা করা হয়েছে: যখনই কোনো কাজের জন্য নেটিভ এইচটিএমএল এলিমেন্ট বিদ্যমান থাকে, তখন ভুলেও জেনেরিক ডিভে ARIA বসিয়ে তা অনুকরণের চেষ্টা করবেন না। একটি এআরআইএ ডিভে ৮২ বাইট মার্কআপ এবং ১২০ লাইন স্ক্রিপ্ট লাগে, যেখানে নেটিভ বোতাম মাত্র ৩৪ বাইটেই তৈরি হয়। তাই সিম্যান্টিক এইচটিএমএল অনেক হালকা ও নির্ভরযোগ্য।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Architecture: Two Trees Running in Parallel',
        bn: 'মূল আর্কিটেকচার: ব্রাউজারে সমান্তরাল দুটি ট্রি'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When a web browser loads a webpage, its rendering engine constructs the Document Object Model (DOM) to position elements on the visual screen. Concurrently, the engine translates those elements into an Accessibility Tree. Assistive tools like NVDA, JAWS, and Apple VoiceOver ignore visual styles like CSS colors and layouts; instead, they inspect the Accessibility Tree to convey interactive elements to blind and low-vision users.',
        bn: 'ব্রাউজার যখন কোনো ওয়েব পেজ লোড করে, তখন দৃশ্যমান উপাদানগুলো আঁকার জন্য DOM তৈরি হয়। একই সাথে ব্রাউজার ইঞ্জিন পর্দার আড়ালে আরেকটি সম্পূর্ণ কাঠামো গড়ে তোলে যার নাম অ্যাক্সেসিবিলিটি ট্রি (Accessibility Tree)। এনভিডিএ (NVDA), জজ (JAWS) বা অ্যাপল ভয়েসওভারের মতো স্ক্রিন রিডাররা সিএসএস-এর রঙ বা লেআউট দেখে না; তারা সরাসরি এই অ্যাক্সেসিবিলিটি ট্রি থেকে ইন্টারঅ্যাকটিভ উপাদানের নাম ও ধরন পড়ে দৃষ্টিহীন ব্যবহারকারীকে নির্দেশ দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Accessibility Tree (AOM)',
          def: {
            en: 'A parallel browser tree containing role, name, state, and value metadata derived from the DOM and exposed to platform accessibility APIs',
            bn: 'ব্রাউজারের তৈরি একটি সমান্তরাল ডেটা কাঠামো যা প্রতিটি উপাদানের ভূমিকা, নাম, অবস্থা ও মান অ্যাসিস্টিভ সফটওয়্যারের কাছে উন্মুক্ত করে'
          }
        },
        {
          term: 'The First Rule of ARIA',
          def: {
            en: 'If you can use a native HTML element or attribute with the semantics you require already built-in, do not use an ARIA role or property instead',
            bn: 'যদি কোনো কাজের জন্য বিল্ট-ইন নেটিভ এইচটিএমএল এলিমেন্ট বা অ্যাট্রিবিউট থাকে, তবে সেখানে কখনোই বিকল্প ARIA রোল ব্যবহার করবেন না'
          }
        },
        {
          term: 'Landmark Roles',
          def: {
            en: 'Semantic container regions (main, nav, header, footer, aside) allowing screen reader users to jump directly between major page sections',
            bn: 'এইচটিএমএল-এর মূল বিভাগ নির্দেশক এলিমেন্ট (main, nav, header, footer) যার মাধ্যমে স্ক্রিন রিডার ব্যবহারকারীরা পেজের মূল অংশে সরাসরি লাফ দিতে পারেন'
          }
        },
        {
          term: 'Accessible Name',
          def: {
            en: 'The human-readable label that assistive technologies speak when focused on an element, calculated via the W3C AccName algorithm',
            bn: 'যেকোনো উপাদানের উপর ফোকাস গেলে অ্যাসিস্টিভ ডিভাইস যে নামটি উচ্চারণ করে, যা W3C অ্যাকনেম অ্যালগরিদম দ্বারা নির্ধারিত হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'native-vs-aria-comparison',
      text: {
        en: 'Native HTML vs ARIA Div: Engineering Tradeoffs',
        bn: 'নেটিভ এইচটিএমএল বনাম এআরআইএ ডিভ: কারিগরি তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison Between Native Semantic Elements and Divs Augmented with ARIA',
        bn: 'নেটিভ সিম্যান্টিক এলিমেন্ট এবং ARIA যুক্ত ডিভ এলিমেন্টের তুলনা'
      },
      head: [
        { en: 'Feature Capability', bn: 'সুবিধা / বৈশিষ্ট্য' },
        { en: 'Native HTML Element (<button>)', bn: 'নেটিভ এইচটিএমএল (<button>)' },
        { en: 'Custom Div (<div role="button">)', bn: 'কাস্টম ডিভ (<div role="button">)' }
      ],
      rows: [
        [
          { en: 'Default Keyboard Focus', bn: 'স্বাভাবিক কিবোর্ড ফোকাস' },
          { en: 'Automatically focusable via Tab key with no code required', bn: 'ট্যাব কি চাপলেই কোনো কোড ছাড়াই নিজে ফোকাস পায়' },
          { en: 'Inaccessible by default; requires manual tabindex="0"', bn: 'স্বাভাবিকভাবে ফোকাসহীন; জোর করে tabindex="0" দিতে হয়' }
        ],
        [
          { en: 'Keyboard Activation', bn: 'কিবোর্ডের মাধ্যমে ক্লিক' },
          { en: 'Fires click event on Enter and Spacebar natively', bn: 'Enter ও Spacebar চাপলে কোনো বাড়তি কোড ছাড়াই ক্লিক ইভেন্ট চলে' },
          { en: 'Silent failure; requires manual JS keydown listener for keys 13 and 32', bn: 'কাজ করে না; কোড লিখে ১৩ এবং ৩২ নম্বর কী শনাক্ত করতে হয়' }
        ],
        [
          { en: 'Disabled State Behavior', bn: 'নিষ্ক্রিয় (Disabled) আচরণ' },
          { en: 'Adding disabled attribute drops focus and disables form submit', bn: 'disabled অ্যাট্রিবিউট দিলেই ফোকাস ও সাবমিট সম্পূর্ণ বন্ধ হয়' },
          { en: 'Requires manual aria-disabled and JS guards to prevent execution', bn: 'আলাদাভাবে aria-disabled লিখতে হয় এবং কোড দিয়ে ক্লিক ঠেকাতে হয়' }
        ],
        [
          { en: 'Form Integration', bn: 'ফর্ম সাবমিট ক্ষমতা' },
          { en: 'Triggers native form submit or reset within <form> tags', bn: 'ফর্মের ভেতরে রাখলে নিজে থেকেই ফর্ম সাবমিট করতে পারে' },
          { en: 'Completely disconnected from native HTML form lifecycles', bn: 'এইচটিএমএল ফর্মের সাথে কোনো সংযোগ থাকে না' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Markup Payload and Overhead Benchmark',
        bn: 'চালনাযোগ্য সিমুলেশন: মার্কআপ সাইজ ও ওভারহেড বেঞ্চমার্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script benchmarks the byte size of native semantic HTML compared to an ARIA-augmented generic container:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি নেটিভ সিম্যান্টিক এইচটিএমএল এবং এআরআইএ বসানো ডিভের বাইট সাইজ ও মেমোরি খরচের অনুপাত বের করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'a11y-native-vs-aria-sim',
      lang: 'javascript',
      code: `// Semantic HTML vs ARIA Div Byte Payload Comparison
const nativeHtml = '<button type="submit">Pay</button>';
const ariaDiv = '<div role="button" tabindex="0" class="btn" onkeydown="handleKey(event)">Pay</div>';

const nativeBytes = Buffer.byteLength(nativeHtml, 'utf8');
const ariaBytes = Buffer.byteLength(ariaDiv, 'utf8');
const overheadRatio = Number((ariaBytes / nativeBytes).toFixed(1));

console.log('Native semantic HTML button byte count:', nativeBytes);
// -> Native semantic HTML button byte count: 34

console.log('ARIA-augmented div button byte count:', ariaBytes);
// -> ARIA-augmented div button byte count: 82

console.log('Markup overhead multiplier for ARIA div:', overheadRatio);
// -> Markup overhead multiplier for ARIA div: 2.4`,
      caption: {
        en: 'Figure 1: Native button requires 34 bytes while an ARIA div consumes 82 bytes (a 2.4x overhead) before writing JavaScript keyboard listeners',
        bn: 'চিত্র ১: নেটিভ বোতামে ৩৪ বাইট লাগলেও এআরআইএ ডিভে ৮২ বাইট লাগে (২.৪ গুণ বৃদ্ধি), সাথে কিবোর্ড হ্যান্ডলারের অতিরিক্ত কোড তো রয়েছেই'
      }
    },
    {
      type: 'heading',
      id: 'landmarks-structure',
      text: {
        en: 'Document Landmarks: The Screen Reader Superhighway',
        bn: 'ডকুমেন্ট ল্যান্ডমার্ক: স্ক্রিন রিডারের দ্রুত চলাচলের পথ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Screen reader users do not read an entire web page linearly from top to bottom. Instead, assistive technology features shortcut commands (such as the Rotor in VoiceOver or letter D in NVDA) to jump between major landmark regions. If your web page is built solely with unsemantic div containers, the landmark menu remains empty, forcing blind users to tab through dozens of irrelevant navigation links to reach the main article.',
        bn: 'স্ক্রিন রিডার ব্যবহারকারীরা একটি ওয়েব পেজের শুরু থেকে শেষ পর্যন্ত লাইন ধরে পড়েন না। বরং তারা ভয়েসওভারের রোটার বা এনভিডিএ-র বিশেষ শর্টকাট কি চেপে সরাসরি ল্যান্ডমার্কে লাফ দেন। আপনি যদি সিম্যান্টিক ট্যাগের বদলে কেবল ডিভ ব্যবহার করেন, তবে এই ল্যান্ডমার্ক তালিকা সম্পূর্ণ খালি দেখাবে, ফলে মূল লেখায় পৌঁছাতে ব্যবহারকারীকে অপ্রয়োজনীয় শত শত লিঙ্কের মধ্য দিয়ে ট্যাপ করে যেতে হবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '<header> (role="banner")',
          def: {
            en: 'The top-level site identity container containing the logo and primary search bar',
            bn: 'ওয়েবসাইটের শীর্ষভাগের কন্টেইনার যেখানে লোগো ও মূল সার্চ বার অবস্থান করে'
          }
        },
        {
          term: '<nav> (role="navigation")',
          def: {
            en: 'A collection of navigational links allowing users to browse across the website',
            bn: 'ওয়েবসাইটে বিচরণের জন্য প্রয়োজনীয় লিঙ্কগুলোর তালিকা নির্দেশক ব্লক'
          }
        },
        {
          term: '<main> (role="main")',
          def: {
            en: 'The dominant, non-repeating content unique to the current document',
            bn: 'বর্তমান পেজের সবচেয়ে গুরুত্বপূর্ণ ও অনন্য মূল কন্টেন্ট নির্দেশক অংশ'
          }
        },
        {
          term: '<footer> (role="contentinfo")',
          def: {
            en: 'The bottom container with copyright notices, privacy terms, and legal disclosures',
            bn: 'পেজের পাদদেশ যেখানে কপিরাইট, প্রাইভেসি পলিসি এবং আইনি তথ্যাবলি থাকে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-aria-overhead-calc-ex',
      kind: 'mcq',
      topic: 'Markup overhead when replacing native HTML with ARIA divs',
      question: {
        en: 'According to the benchmark simulation, if a native button takes 34 bytes and an ARIA div takes 82 bytes, what is the markup overhead multiplier?',
        bn: 'বেঞ্চমার্ক সিমুলেশন অনুযায়ী একটি নেটিভ বোতামে ৩৪ বাইট এবং এআরআইএ ডিভে ৮২ বাইট লাগলে মার্কআপ বৃদ্ধির অনুপাত কত?'
      },
      options: [
        {
          en: '2.4x overhead multiplier',
          bn: '২.৪ গুণ বৃদ্ধি'
        },
        {
          en: '10x overhead multiplier',
          bn: '১০ গুণ বৃদ্ধি'
        },
        {
          en: '0.5x (smaller)',
          bn: '০.৫ গুণ (কম)'
        },
        {
          en: '100x overhead multiplier',
          bn: '১০০ গুণ বৃদ্ধি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide 82 by 34.',
        bn: '৮২ কে ৩৪ দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'The ARIA div consumes 2.4 times more markup than native HTML even before accounting for the dozens of lines of JavaScript required for keyboard listeners.',
        bn: 'কিবোর্ড ইভেন্ট হ্যান্ডলারের কোড বাদ দিলেও এআরআইএ ডিভ স্বাভাবিক এইচটিএমএলের চেয়ে ২.৪ গুণ বেশি জায়গা নষ্ট করে।'
      }
    },
    {
      id: 'a11y-first-rule-aria-ex',
      kind: 'mcq',
      topic: 'Applying the First Rule of ARIA',
      question: {
        en: 'What is the First Rule of ARIA defined by the W3C specification?',
        bn: 'W3C স্পেসিফিকেশন অনুযায়ী এআরআইএ (ARIA)-এর প্রথম নিয়মটি কী?'
      },
      options: [
        {
          en: 'Do not use ARIA roles or attributes if a native HTML element already provides the required semantics and functionality',
          bn: 'যদি কোনো নেটিভ এইচটিএমএল এলিমেন্টে কাঙ্ক্ষিত অর্থ ও সুবিধা পাওয়া যায়, তবে সেখানে কখনোই বাড়তি ARIA ব্যবহার করবেন না'
        },
        {
          en: 'Always wrap every single div in role="button"',
          bn: 'সবসময় প্রতিটি ডিভকে role="button" দিয়ে মুড়িয়ে রাখুন'
        },
        {
          en: 'Never write CSS on elements that contain ARIA tags',
          bn: 'যেসব এলিমেন্টে ARIA আছে সেখানে সিএসএস লিখবেন না'
        },
        {
          en: 'Only use ARIA on websites translated into French',
          bn: 'কেবলমাত্র ফরাসি ভাষায় অনুদিত ওয়েবসাইটে ARIA ব্যবহার করুন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Native HTML elements take precedence over ARIA attributes.',
        bn: 'নেটিভ এইচটিএমএল ট্যাগকে অগ্রাধিকার দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Native HTML elements provide built-in keyboard navigation, focus management, and accessibility tree roles automatically without fragile custom scripts.',
        bn: 'নেটিভ এইচটিএমএল নিজে থেকেই কিবোর্ড নেভিগেশন ও স্ক্রিন রিডারের সমস্ত সুবিধা নিখুঁতভাবে পরিচালনা করে।'
      }
    },
    {
      id: 'a11y-role-limitations-ex',
      kind: 'mcq',
      topic: 'Understanding what ARIA roles do and do not accomplish',
      question: {
        en: 'If a developer writes <div role="button">Click Me</div>, what does the browser NOT do automatically?',
        bn: 'যদি কোনো ডেভেলপার <div role="button">Click Me</div> লেখেন, তবে ব্রাউজার কোনটি নিজে থেকে করবে না?'
      },
      options: [
        {
          en: 'It does not make the element focusable via Tab and does not trigger clicks on Enter or Space keys',
          bn: 'এটি উপাদানটিকে ট্যাব কি দিয়ে ফোকাসযোগ্য করে না এবং এন্টার বা স্পেস চাপলে ক্লিক চালায় না'
        },
        {
          en: 'It does not change the accessibility role in the accessibility tree',
          bn: 'এটি অ্যাক্সেসিবিলিটি ট্রিতে উপাদানের ভূমিকা পরিবর্তন করে না'
        },
        {
          en: 'It does not display the text on the screen',
          bn: 'এটি স্ক্রিনে লেখা প্রদর্শন করে না'
        },
        {
          en: 'It does not allow CSS styling',
          bn: 'এটি সিএসএস স্টাইল প্রয়োগ করতে দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'ARIA modifies tree announcements, not browser behavior or keyboard event dispatching.',
        bn: 'এআরআইএ শুধুমাত্র ট্রির তথ্য বদলায়, ব্রাউজারের কাজের ধরন বা কিবোর্ড হ্যান্ডলিং ঠিক করে না।'
      },
      explanation: {
        en: 'ARIA only affects the accessibility tree metadata. It does not provide keyboard focusability, keydown dispatching, or native form integration.',
        bn: 'এআরআইএ ব্রাউজারের কোনো আচরণ পরিবর্তন করে না; কিবোর্ডে ফোকাস আনতে বা ক্লিক চালাতে আলাদা কোড লিখতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-semantic-frame',
    title: {
      en: 'HTML Semantics & Accessibility Tree Quiz',
      bn: 'এইচটিএমএল সিম্যান্টিক্স ও অ্যাক্সেসিবিলিটি ট্রি কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-screen-reader-tree',
        kind: 'mcq',
        topic: 'How screen readers interact with browser data models',
        question: {
          en: 'Which browser data structure do screen readers inspect to communicate user interface information?',
          bn: 'স্ক্রিন রিডার সফটওয়্যার ইন্টারফেসের তথ্য জানার জন্য ব্রাউজারের কোন কাঠামোটি পরীক্ষা করে?'
        },
        options: [
          {
            en: 'The Accessibility Tree (Accessibility Object Model)',
            bn: 'অ্যাক্সেসিবিলিটি ট্রি (Accessibility Object Model)'
          },
          {
            en: 'The CSS Box Model coordinates on GPU memory',
            bn: 'জিপিইউ মেমোরিতে থাকা সিএসএস বক্স মডেল'
          },
          {
            en: 'The raw HTTP byte stream buffer',
            bn: 'মূল এইচটিটিপি বাইট স্ট্রিম বাফার'
          },
          {
            en: 'The V8 JavaScript garbage collection heap',
            bn: 'ভি-৮ ইঞ্জিনের জাভাস্ক্রিপ্ট মেমোরি হিপ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The accessibility-specific tree derived from the DOM.',
          bn: 'অ্যাক্সেসিবিলিটির জন্য ব্রাউজারের তৈরি বিশেষ ট্রির কথা ভাবুন।'
        },
        explanation: {
          en: 'The browser generates an Accessibility Tree exposing roles, names, states, and values directly to platform assistive technology APIs.',
          bn: 'ব্রাউজার সরাসরি অ্যাক্সেসিবিলিটি ট্রির মাধ্যমে স্ক্রিন রিডারকে প্রতিটি উপাদানের যাবতীয় তথ্য সরবরাহ করে।'
        }
      },
      {
        id: 'q-a11y-landmark-navigation',
        kind: 'mcq',
        topic: 'Navigating efficiently using HTML landmark tags',
        question: {
          en: 'Why is wrapping the primary page article inside a <main> tag crucial for blind screen reader users?',
          bn: 'ওয়েব পেজের মূল লেখাকে <main> ট্যাগের ভেতরে রাখা দৃষ্টিহীন স্ক্রিন রিডার ব্যবহারকারীদের জন্য কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'It creates a recognized landmark allowing assistive software to skip repeating navigation headers and jump directly to unique content',
            bn: 'এটি একটি ল্যান্ডমার্ক তৈরি করে যা স্ক্রিন রিডারকে বারবার আসা হেডার এড়িয়ে সরাসরি মূল তথ্যে পৌঁছাতে সাহায্য করে'
          },
          {
            en: 'It prevents the web browser from downloading advertisements',
            bn: 'এটি ব্রাউজারে বিজ্ঞাপন লোড হওয়া ঠেকায়'
          },
          {
            en: 'It encrypts the text content using TLS certificates',
            bn: 'এটি পেজের লেখাকে এনক্রিপ্ট করে সুরক্ষিত রাখে'
          },
          {
            en: 'It forces the operating system to increase monitor brightness',
            bn: 'এটি মনিটরের আলো বাড়াতে অপারেটিং সিস্টেমকে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Landmarks allow users to jump past repeating top-level navigation.',
          bn: 'পুনরাবৃত্তিময় মেনু এড়িয়ে সরাসরি পড়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Landmarks give non-visual users the same ability to glance at page sections that sighted users enjoy visually.',
          bn: 'ল্যান্ডমার্ক থাকার ফলে দৃষ্টিহীন ব্যক্তিরা এক ক্লিকেই মেনু পার হয়ে মূল লেখার অংশে চলে যেতে পারেন।'
        }
      },
      {
        id: 'q-a11y-native-dialog-benefit',
        kind: 'mcq',
        topic: 'Benefits of native HTML5 dialog element',
        question: {
          en: 'What primary accessibility advantage does the native HTML5 <dialog> element provide when opened with showModal()?',
          bn: 'এইচটিএমএল-৫ এর <dialog> এলিমেন্ট showModal() দিয়ে খুললে কোন প্রধান অ্যাক্সেসিবিলিটি সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It automatically traps keyboard focus within the modal dialog and prevents background content interaction via the inert attribute',
            bn: 'এটি নিজে থেকেই মোডালের ভেতর কিবোর্ড ফোকাস আটকে রাখে এবং পেছনের অংশকে নিষ্ক্রিয় (inert) করে দেয়'
          },
          {
            en: 'It deletes all user cookies automatically',
            bn: 'এটি ইউজারের সমস্ত কুকি নিজে থেকে মুছে দেয়'
          },
          {
            en: 'It changes the font size of the entire website to 50 pixels',
            bn: 'এটি পুরো ওয়েবসাইটের লেখার আকার ৫০ পিক্সেল করে দেয়'
          },
          {
            en: 'It disables all internet network requests until closed',
            bn: 'এটি বন্ধ না হওয়া পর্যন্ত ইন্টারনেটের সব রিকোয়েস্ট থামিয়ে রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automatic focus trapping and background isolation.',
          bn: 'ফোকাস আটকে রাখা এবং পেছনের কনটেন্ট নিষ্ক্রিয় রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'The native dialog element handles focus trapping, Escape key dismissals, and background inerting natively without fragile custom JavaScript.',
          bn: 'নেটিভ ডায়ালগ কোনো বাড়তি স্ক্রিপ্ট ছাড়াই কিবোর্ড ফোকাস মোডালের ভেতরে রাখে এবং Escape চাপলে নিজে থেকেই বন্ধ হয়।'
        }
      },
      {
        id: 'q-a11y-aria-hidden-icon',
        kind: 'mcq',
        topic: 'Hiding decorative icons with aria-hidden',
        question: {
          en: 'Why should purely decorative visual icons next to clear text labels contain aria-hidden="true"?',
          bn: 'স্পষ্ট লেখার পাশে থাকা নিছক সাজসজ্জার আইকনগুলোতে aria-hidden="true" কেন ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'To prevent screen readers from announcing redundant or meaningless icon unicode characters that clutter speech output',
            bn: 'স্ক্রিন রিডার যাতে অপ্রয়োজনীয় বা বিভ্রান্তিকর আইকন কোড পড়ে অহেতুক শব্দদূষণ না ঘটায়'
          },
          {
            en: 'To make the icons load 10 times faster over cellular networks',
            bn: 'আইকনগুলোকে ইন্টারনেটে ১০ গুণ দ্রুত লোড করানোর জন্য'
          },
          {
            en: 'To prevent users from right-clicking and copying the icon',
            bn: 'ব্যবহারকারী যাতে রাইট ক্লিক করে আইকন কপি করতে না পারে'
          },
          {
            en: 'To force CSS animations to pause permanently',
            bn: 'সিএসএস অ্যানিমেশন স্থায়ীভাবে বন্ধ করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Suppressing noisy decorative elements from the accessibility tree.',
          bn: 'অ্যাক্সেসিবিলিটি ট্রি থেকে অপ্রয়োজনীয় সাজসজ্জা লুকানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'aria-hidden="true" strips the element from the accessibility tree so screen readers only announce the relevant text label.',
          bn: 'এই অ্যাট্রিবিউট দিলে স্ক্রিন রিডার সাজসজ্জার আইকন বাদ দিয়ে কেবল আসল লেখাটি পড়ে শোনায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-names-states-values',
    tech: 'accessibility',
    title: {
      en: 'Accessible Names, States, Values & Live Regions',
      bn: 'অ্যাক্সেসিবল নেম, স্টেট, ভ্যালু ও লাইভ রিজিওন'
    }
  }
};
