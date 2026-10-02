import type { Lesson } from '../../../lib/types';

export const TheNamesStatesValuesLesson: Lesson = {
  slug: 'the-names-states-values',
  tech: 'accessibility',
  title: {
    en: 'Accessible Names, States, Values & Live Regions',
    bn: 'অ্যাক্সেসিবল নেম, স্টেট, ভ্যালু ও লাইভ রিজিওন'
  },
  summary: {
    en: 'Every interactive element in the Accessibility Tree communicates four core properties: its Role, Accessible Name, State, and Value. If an element lacks a clear accessible name, screen reader users hear only its bare role, such as "button" or "link", without knowing what action it performs. The W3C Accessible Name and Description Computation (AccName 1.2) algorithm resolves an element label through a strict priority cascade: aria-labelledby takes top priority, followed by aria-label, native text content, and lastly title attributes. When interfaces change dynamically, developers must synchronize states like aria-expanded and aria-selected. In addition, asynchronous updates such as incoming chat messages or toast alerts require aria-live regions set to polite or assertive so that assistive technology announces them without requiring a full page refresh.',
    bn: 'অ্যাক্সেসিবিলিটি ট্রির প্রতিটি উপাদানের ৪টি প্রধান পরিচয় থাকে: রোল (Role), অ্যাক্সেসিবল নেম (Name), স্টেট (State), এবং ভ্যালু (Value)। কোনো উপাদানের নাম সঠিকভাবে নির্ধারণ করা না থাকলে স্ক্রিন রিডার কেবল "button" বা "link" উচ্চারণ করে, ফলে এটি কী কাজ করে তা দৃষ্টিহীন ব্যবহারকারী বুঝতে পারেন না। W3C অ্যাকনেম (AccName 1.2) অ্যালগরিদম একটি কঠোর অগ্রাধিকার মেনে নাম ঠিক করে: সবার আগে aria-labelledby, এরপর aria-label, তারপর নেটিভ টেক্সট এবং সবশেষে title অ্যাট্রিবিউট। মেনু বা ট্যাব খোলা হলে aria-expanded এবং aria-selected স্টেট পরিবর্তন করতে হয়। আর পেজ রিলোড না করে কোনো নতুন বার্তা বা নোটিফিকেশন আসলে তা স্ক্রিন রিডারকে জানাতে aria-live="polite" বা assertive লাইভ রিজিওন ব্যবহার করতে হয়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: How Screen Readers Identify Elements',
        bn: 'মূল ধারণা: স্ক্রিন রিডার কীভাবে উপাদান শনাক্ত করে'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Every interactive node inside the accessibility tree exposes four foundational properties to assistive software: role, accessible name, state, and value. When an icon button lacks an accessible name, assistive technology vocalizes only a generic role like "unlabelled button", concealing its real intent. Screen readers construct spoken announcements by combining the element role, accessible name, and current dynamic state into a single cohesive sentence.',
        bn: 'দৃষ্টিহীন বা স্বল্পদৃষ্টির মানুষের জন্য ব্রাউজারের অ্যাক্সেসিবিলিটি ট্রি প্রতিটি উপাদানের চারটি মূল বৈশিষ্ট্য প্রকাশ করে: ভূমিকা বা রোল, অ্যাক্সেসিবল নাম, স্টেট এবং ভ্যালু। কোনো আইকন বোতামে সুনির্দিষ্ট নাম না থাকলে স্ক্রিন রিডার কেবল "unlabelled button" উচ্চারণ করে, যা ব্যবহারকারীকে বিভ্রান্ত করে। অ্যাসিস্টিভ ডিভাইস রোল, নাম ও বর্তমান অবস্থা মিলিয়ে পূর্ণাঙ্গ বাক্য তৈরি করে ব্যবহারকারীকে নির্দেশ দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Accessible Name Computation (AccName)',
          def: {
            en: 'The W3C standardized algorithm that determines the text string representing an element in the accessibility tree',
            bn: 'W3C-এর নির্দিষ্ট নিয়ম যার মাধ্যমে অ্যাক্সেসিবিলিটি ট্রিতে যেকোনো এলিমেন্টের পরিচিতি নাম নির্ধারণ করা হয়'
          }
        },
        {
          term: 'aria-labelledby',
          def: {
            en: 'An ARIA attribute referencing the ID of another element whose visible text serves as the accessible name',
            bn: 'একটি অ্যাট্রিবিউট যা অন্য কোনো উপাদানের আইডি রেফারেন্স করে তার ভেতরের লেখাকে নিজের নাম হিসেবে গ্রহণ করে'
          }
        },
        {
          term: 'aria-live Regions',
          def: {
            en: 'DOM containers marked with aria-live="polite" or "assertive" instructing screen readers to announce asynchronous text updates',
            bn: 'এমন কিছু বিশেষ কন্টেইনার যা পেজ রিফ্রেশ ছাড়াই নতুন আসা তথ্য স্ক্রিন রিডারকে তৎক্ষণাৎ পড়ে শোনাতে নির্দেশ দেয়'
          }
        },
        {
          term: 'Dynamic ARIA States',
          def: {
            en: 'Attributes like aria-expanded, aria-selected, and aria-checked reflecting real-time user interface states',
            bn: 'aria-expanded বা aria-selected-এর মতো অ্যাট্রিবিউট যা উপাদানের তাৎক্ষণিক অবস্থা প্রকাশ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'accname-cascade-table',
      text: {
        en: 'The AccName 1.2 Hierarchy: Resolution Precedence',
        bn: 'অ্যাকনেম ১.২ এর অগ্রাধিকার স্তর'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Precedence Order of the W3C Accessible Name Computation Algorithm',
        bn: 'W3C অ্যাক্সেসিবল নেম অ্যালগরিদমের অগ্রাধিকার ক্রম'
      },
      head: [
        { en: 'Priority Rank', bn: 'অগ্রাধিকার' },
        { en: 'Source Attribute / Content', bn: 'তথ্যের উৎস' },
        { en: 'Behavior and Best Practice', bn: 'আচরণ ও উত্তম চর্চা' }
      ],
      rows: [
        [
          { en: 'Priority 1 (Highest)', bn: '১ম অগ্রাধিকার (সর্বোচ্চ)' },
          { en: 'aria-labelledby="element-id"', bn: 'aria-labelledby="element-id"' },
          { en: 'Overrides all other attributes; concatenates text content from referenced DOM IDs across the page', bn: 'সব অ্যাট্রিবিউটকে অগ্রাহ্য করে অন্য এলিমেন্টের লেখাকে নিজের নাম বানায়' }
        ],
        [
          { en: 'Priority 2', bn: '২য় অগ্রাধিকার' },
          { en: 'aria-label="Explicit Text Label"', bn: 'aria-label="সুনির্দিষ্ট লেখা"' },
          { en: 'Provides an explicit string override when no visible on-screen text exists (ideal for icon buttons)', bn: 'স্ক্রিনে কোনো লেখা না থাকলে সরাসরি নাম ঠিক করতে ব্যবহৃত হয় (যেমন আইকন বোতাম)' }
        ],
        [
          { en: 'Priority 3', bn: '৩য় অগ্রাধিকার' },
          { en: 'Native Text / Form Label / Image Alt', bn: 'নেটিভ টেক্সট / ফর্মের লেবেল / অল্টারনেটিভ টেক্সট' },
          { en: 'Default natural source: button innerText, associated <label for="...">, or img alt attribute', bn: 'স্বাভাবিক উৎস: বোতামের ভেতরের লেখা, ইনপুটের সাথে যুক্ত <label> অথবা ছবির alt লেখা' }
        ],
        [
          { en: 'Priority 4 (Lowest)', bn: '৪র্থ অগ্রাধিকার (সর্বনিম্ন)' },
          { en: 'title="Tooltip text"', bn: 'title="টুলটিপ টেক্সট"' },
          { en: 'Weakest fallback; ignored by many mobile screen readers and touch devices; avoid for naming', bn: 'সবচেয়ে দুর্বল উৎস; মোবাইল স্ক্রিন রিডার অনেক সময় এটি পড়ে না, তাই এটি এড়ানো উচিত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: AccName Cascade Resolution',
        bn: 'চালনাযোগ্য সিমুলেশন: অ্যাকনেম ক্যাসকেড মূল্যায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the priority cascade of the W3C AccName algorithm resolving an element with multiple competing label sources:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ডব্লিউথ্রিসি অ্যাকনেম অ্যালগরিদমের অগ্রাধিকার ক্রম অনুযায়ী সঠিক অ্যাক্সেসিবল নাম বাছাই করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'a11y-accname-sim',
      lang: 'javascript',
      code: `// W3C Accessible Name Computation (AccName) Simulator
function computeAccName(element) {
  if (element.ariaLabelledBy) return { name: element.ariaLabelledByText, source: 'ariaLabelledBy' };
  if (element.ariaLabel) return { name: element.ariaLabel, source: 'ariaLabel' };
  if (element.textContent) return { name: element.textContent.trim(), source: 'textContent' };
  if (element.title) return { name: element.title, source: 'title' };
  return { name: '', source: 'empty' };
}

// Button has both ariaLabel ("Shopping Bag with 3 items") and inner text ("Cart")
const sampleElement = {
  ariaLabelledBy: null,
  ariaLabel: 'Shopping Bag with 3 items',
  textContent: 'Cart',
  title: 'Click to open'
};

const result = computeAccName(sampleElement);

console.log('Resolved Accessible Name:', result.name);
// -> Resolved Accessible Name: Shopping Bag with 3 items

console.log('Winning priority attribute source:', result.source);
// -> Winning priority attribute source: ariaLabel`,
      caption: {
        en: 'Figure 1: The AccName engine chooses ariaLabel ("Shopping Bag with 3 items") over internal textContent ("Cart") due to higher cascade priority',
        bn: 'চিত্র ১: উচ্চ অগ্রাধিকারের কারণে অ্যাকনেম ইঞ্জিন টেক্সট ("Cart") বাদ দিয়ে ariaLabel ("Shopping Bag with 3 items") নির্বাচন করেছে'
      }
    },
    {
      type: 'heading',
      id: 'live-regions-guide',
      text: {
        en: 'Live Regions: Announcing Real-Time Updates',
        bn: 'লাইভ রিজিওন: তাৎক্ষণিক পরিবর্তনের ঘোষণা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Single-page applications (SPAs) frequently mutate the DOM asynchronously without triggering a traditional browser navigation. When a search filter returns 25 results, or when an error toast pops up, sighted visitors notice immediately. But screen reader users remain completely unaware unless the container is decorated with aria-live.',
        bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে পেজ রিলোড না করেই ডাটা বদলে যায়। কোনো সার্চে নতুন ২৫টি ফলাফল আসলে বা নোটিফিকেশন উঠলে চোখে দেখে বোঝা যায়। কিন্তু স্ক্রিন রিডার ব্যবহারকারী কিছুই জানতে পারেন না, যতক্ষণ না সেই অংশে aria-live ব্যবহার করা হয়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison Between aria-live Modes: Polite vs Assertive',
        bn: 'aria-live মোড: Polite বনাম Assertive এর তুলনা'
      },
      head: [
        { en: 'Live Mode', bn: 'লাইভ মোড' },
        { en: 'Announcement Behavior', bn: 'ঘোষণার ধরন' },
        { en: 'Recommended Use Cases', bn: 'উপযুক্ত ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'aria-live="polite"', bn: 'aria-live="polite"' },
          { en: 'Waits for user speech pauses before speaking; never interrupts current reading', bn: 'স্ক্রিন রিডার বর্তমান বাক্য শেষ করা পর্যন্ত অপেক্ষা করে; কখনোই কথায় বাধা দেয় না' },
          { en: 'Search result counters ("12 flights found"), shopping cart quantity updates, non-critical toasts', bn: 'অনুসন্ধানের ফলাফল গণনা ("১২টি ফলাফল"), কার্টের সংখ্যা আপডেট বা সাধারণ নোটিফিকেশন' }
        ],
        [
          { en: 'aria-live="assertive"', bn: 'aria-live="assertive"' },
          { en: 'Interrupts ongoing speech immediately to deliver the urgent message', bn: 'স্ক্রিন রিডারের চলমান কথা সাথে সাথে থামিয়ে জরুরি বার্তা শোনায়' },
          { en: 'Session timeout countdowns, network connection loss warnings, server fatal error alerts', bn: 'সেশন শেষ হওয়ার সতর্কবার্তা, ইন্টারনেট সংযোগ বিচ্ছিন্ন হওয়া বা মারাত্মক ত্রুটি' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-accname-priority-ex',
      kind: 'mcq',
      topic: 'Priority order in Accessible Name Computation',
      question: {
        en: 'If an element defines both aria-label="Search Catalog" and visible text content "Go", which name is announced by screen readers?',
        bn: 'কোনো বোতামে aria-label="Search Catalog" এবং ভেতরের লেখা "Go" উভয়ই থাকলে স্ক্রিন রিডার কোনটি পাঠ করবে?'
      },
      options: [
        {
          en: 'Search Catalog (aria-label takes precedence over native text content)',
          bn: 'Search Catalog (aria-label ভেতরের টেক্সটের চেয়ে বেশি অগ্রাধিকার পায়)'
        },
        {
          en: 'Go (text content takes precedence)',
          bn: 'Go (ভেতরের টেক্সট বেশি অগ্রাধিকার পায়)'
        },
        {
          en: 'Both words spoken simultaneously',
          bn: 'উভয় শব্দ একসাথে উচ্চারিত হবে'
        },
        {
          en: 'Neither word (speech is muted)',
          bn: 'কোনো শব্দই উচ্চারিত হবে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'AccName Priority 2 (aria-label) precedes Priority 3 (textContent).',
        bn: 'অ্যাকনেম অ্যালগরিদমে ২ নম্বর অগ্রাধিকার (aria-label) ৩ নম্বর অগ্রাধিকারের (textContent) চেয়ে আগে আসে।'
      },
      explanation: {
        en: 'According to the W3C AccName specification, aria-label takes precedence over native inner text content unless aria-labelledby is present.',
        bn: 'ডব্লিউথ্রিসি স্পেসিফিকেশন অনুযায়ী aria-label সবসময় ভেতরের লেখার উপর প্রাধান্য বিস্তার করে।'
      }
    },
    {
      id: 'a11y-live-polite-assertive-ex',
      kind: 'mcq',
      topic: 'Choosing between polite and assertive aria-live modes',
      question: {
        en: 'When should a developer choose aria-live="polite" instead of aria-live="assertive"?',
        bn: 'কখন ডেভেলপারের উচিত aria-live="assertive"-এর বদলে aria-live="polite" ব্যবহার করা?'
      },
      options: [
        {
          en: 'For non-critical updates like search results or item additions, allowing the user to finish reading before hearing the update',
          bn: 'সাধারণ আপডেট যেমন সার্চ রেজাল্ট বা কার্টে পণ্য যোগের ক্ষেত্রে, যাতে ব্যবহারকারীর চলমান পড়ায় বাধা না ঘটে'
        },
        {
          en: 'Only when displaying bank account balances',
          bn: 'শুধুমাত্র ব্যাংক অ্যাকাউন্টের ব্যালেন্স দেখানোর সময়'
        },
        {
          en: 'When the computer battery is at 1 percent',
          bn: 'কম্পিউটারের ব্যাটারি যখন ১ শতাংশে নামে'
        },
        {
          en: 'To make screen readers pronounce words in a whisper',
          bn: 'স্ক্রিন রিডারকে ফিসফিস করে কথা বলাতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Polite waits for an idle pause, avoiding rude speech interruptions.',
        bn: 'চলমান পড়া শেষ করার সুযোগ দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'aria-live="polite" queues messages until the screen reader is idle, preventing frustrating speech interruptions during normal navigation.',
        bn: 'polite মোড বার্তাটিকে সারিবদ্ধ রাখে এবং ব্যবহারকারী কোনো বিরতি নিলে তখনই পড়ে শোনায়।'
      }
    },
    {
      id: 'a11y-dynamic-expanded-ex',
      kind: 'mcq',
      topic: 'Synchronizing accordion state with aria-expanded',
      question: {
        en: 'When a user clicks an accordion header to reveal an FAQ answer, what ARIA attribute must JavaScript update?',
        bn: 'ব্যবহারকারী কোনো এফএকিউ (FAQ) ড্রপডাউন বোতামে ক্লিক করে উত্তর খুললে জাভাস্ক্রিপ্ট দিয়ে কোন অ্যাট্রিবিউট আপডেট করতে হয়?'
      },
      options: [
        {
          en: 'Toggle aria-expanded from "false" to "true"',
          bn: 'aria-expanded-কে "false" থেকে "true"-তে রূপান্তর করা'
        },
        {
          en: 'Change the CSS color to bright red',
          bn: 'সিএসএস রঙ পরিবর্তন করে লাল করা'
        },
        {
          en: 'Delete the HTML element from the DOM',
          bn: 'এইচটিএমএল উপাদানটিকে সম্পূর্ণ মুছে ফেলা'
        },
        {
          en: 'Reload the web page from the web server',
          bn: 'ওয়েব সার্ভার থেকে পুরো পেজটি পুনরায় লোড করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'The expanded state reflects collapsed versus open panels.',
        bn: 'প্যানেল খোলা বা বন্ধের অবস্থা নির্দেশক অ্যাট্রিবিউটের কথা ভাবুন।'
      },
      explanation: {
        en: 'Updating aria-expanded="true" immediately informs screen reader users that the collapsed panel has opened and its contents are now accessible.',
        bn: 'aria-expanded="true" করার ফলে দৃষ্টিহীন ব্যবহারকারী তৎক্ষণাৎ জানতে পারেন যে প্যানেলটি খুলেছে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-names-states-values',
    title: {
      en: 'Accessible Names, States & Live Regions Quiz',
      bn: 'অ্যাক্সেসিবল নেম, স্টেট ও লাইভ রিজিওন কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-aria-labelledby-multiple',
        kind: 'mcq',
        topic: 'Concatenating multiple elements using aria-labelledby',
        question: {
          en: 'Can aria-labelledby reference multiple DOM element IDs simultaneously, and how does the browser handle them?',
          bn: 'aria-labelledby কি একসাথে একাধিক আইডিকে রেফারেন্স করতে পারে এবং ব্রাউজার তা কীভাবে পরিচালনা করে?'
        },
        options: [
          {
            en: 'Yes, passing space-separated IDs concatenates their text content in sequence to build a compound accessible name',
            bn: 'হ্যাঁ, স্পেস দিয়ে একাধিক আইডি লিখলে ব্রাউজার তাদের সব লেখা পরপর যুক্ত করে একটি যৌথ নাম তৈরি করে'
          },
          {
            en: 'No, aria-labelledby crashes the browser if more than one ID is provided',
            bn: 'না, একাধিক আইডি দিলে ব্রাউজার ক্র্যাশ করে'
          },
          {
            en: 'Yes, but it only reads the first letter of each ID',
            bn: 'হ্যাঁ, তবে এটি কেবল প্রতিটি আইডির প্রথম অক্ষর পড়ে'
          },
          {
            en: 'No, only aria-label supports multiple values',
            bn: 'না, কেবল aria-label-এ একাধিক মান দেওয়া যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Space-separated list of IDs concatenated in order.',
          bn: 'স্পেস দিয়ে একাধিক আইডি যুক্ত করার কথা ভাবুন।'
        },
        explanation: {
          en: 'aria-labelledby="billing-label street-name" resolves the text of both elements into a single unified accessible name.',
          bn: 'স্পেস দিয়ে একাধিক আইডি উল্লেখ করলে ব্রাউজার ধারাবাহিকভাবে সবগুলো অংশের লেখা একত্রিত করে উচ্চারণ করে।'
        }
      },
      {
        id: 'q-a11y-icon-button-pitfall',
        kind: 'mcq',
        topic: 'Preventing the unlabelled icon button defect',
        question: {
          en: 'What occurs when a developer creates <button><svg ...></svg></button> without an aria-label or inner text?',
          bn: 'কোনো ডেভেলপার যদি aria-label বা ভেতরের টেক্সট ছাড়া কেবল <button><svg ...></svg></button> তৈরি করেন, তবে কী সমস্যা ঘটে?'
        },
        options: [
          {
            en: 'Screen readers announce it merely as "unlabelled button" or read the cryptic SVG path coordinates, leaving blind users unable to know what it does',
            bn: 'স্ক্রিন রিডার এটিকে শুধুমাত্র "unlabelled button" বলবে বা জটিল কো-অর্ডিনেট পড়বে, ফলে এর কাজ কী তা ব্যবহারকারী বুঝতে পারবেন না'
          },
          {
            en: 'The button automatically closes the browser window',
            bn: 'বোতামটি স্বয়ংক্রিয়ভাবে ব্রাউজার উইন্ডো বন্ধ করে দেয়'
          },
          {
            en: 'The web page switches into airplane mode',
            bn: 'ওয়েব পেজটি এয়ারপ্লেন মোডে চলে যায়'
          },
          {
            en: 'The operating system deletes the mouse driver',
            bn: 'অপারেটিং সিস্টেম মাউস ড্রাইভার মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Missing accessible names leave elements unlabelled.',
          bn: 'নামহীন বোতামের বিভ্রান্তির কথা ভাবুন।'
        },
        explanation: {
          en: 'All interactive elements require an accessible name. Without aria-label="Close" or text content, the button purpose is completely masked from screen readers.',
          bn: 'প্রতিটি বোতামের সুনির্দিষ্ট নাম থাকা আবশ্যক, অন্যথায় স্ক্রিন রিডার ব্যবহারকারীরা অন্ধকারে থাকেন।'
        }
      },
      {
        id: 'q-a11y-aria-describedby-use',
        kind: 'mcq',
        topic: 'Difference between aria-labelledby and aria-describedby',
        question: {
          en: 'How does aria-describedby differ from aria-labelledby in screen reader announcement timing?',
          bn: 'স্ক্রিন রিডারের কথা বলার ক্ষেত্রে aria-describedby এবং aria-labelledby-এর মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'aria-labelledby provides the primary element name spoken immediately, while aria-describedby provides secondary helper or error text announced after a brief pause',
            bn: 'aria-labelledby প্রধান নামটি সাথে সাথে শোনায়, আর aria-describedby সহায়ক বা ভুলের বিবরণ সামান্য বিরতি দিয়ে পরে পড়ে'
          },
          {
            en: 'aria-describedby is only compatible with video tags',
            bn: 'aria-describedby কেবল ভিডিও ট্যাগের সাথেই চলে'
          },
          {
            en: 'aria-labelledby translates words into Latin',
            bn: 'aria-labelledby লেখাকে ল্যাটিন ভাষায় অনুবাদ করে'
          },
          {
            en: 'There is no difference; they are exact duplicates',
            bn: 'এদের মধ্যে কোনো পার্থক্য নেই; দুটি সম্পূর্ণ একই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Primary identifier versus secondary descriptive instructions.',
          bn: 'মূল নাম বনাম বিস্তারিত বর্ণনার কথা ভাবুন।'
        },
        explanation: {
          en: 'The accessible name is the primary identifier. The accessible description provides auxiliary hints (such as "Password must be at least 8 characters") read after the name.',
          bn: 'লেবেল মূল নাম প্রকাশ করে, আর ডেসক্রিপশন কোনো সহায়ক নিয়মাবলী (যেমন "পাসওয়ার্ড অন্তত ৮ অক্ষরের হতে হবে") নামের পরে পড়ে শোনায়।'
        }
      },
      {
        id: 'q-a11y-aria-atomic-role',
        kind: 'mcq',
        topic: 'The purpose of aria-atomic in live regions',
        question: {
          en: 'What does aria-atomic="true" achieve when attached to an aria-live region?',
          bn: 'কোনো aria-live অংশে aria-atomic="true" যুক্ত করলে কী পরিবর্তন আসে?'
        },
        options: [
          {
            en: 'It forces assistive technology to announce the entire container contents as a unified message, rather than only reading the single changed child node',
            bn: 'এটি অ্যাসিস্টিভ ডিভাইসকে শুধু পরিবর্তিত শব্দটুকু না পড়ে পুরো কন্টেইনারের পুরো বার্তাটি একবারে শোনাতে বাধ্য করে'
          },
          {
            en: 'It splits the text into atomic chemical symbols',
            bn: 'এটি লেখাকে রাসায়নিক প্রতীকে রূপান্তর করে'
          },
          {
            en: 'It accelerates processor clock frequency',
            bn: 'এটি প্রসেসরের গতি বাড়িয়ে দেয়'
          },
          {
            en: 'It deletes all punctuation marks permanently',
            bn: 'এটি সব যতিচিহ্ন মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reading the entire container as one coherent whole.',
          bn: 'পুরো অংশটি একত্রে শোনার কথা ভাবুন।'
        },
        explanation: {
          en: 'Without aria-atomic="true", updating 3 of 10 items saved to 4 of 10 items saved might only vocalize 4, stripping necessary context.',
          bn: 'aria-atomic না থাকলে ৩ অফ ১০ আইটেম থেকে ৪ অফ ১০ আইটেম পরিবর্তনের সময় শুধু ৪ পড়তে পারে, যা প্রয়োজনীয় অর্থ প্রকাশ করে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-keyboard-door',
    tech: 'accessibility',
    title: {
      en: 'Keyboard Navigation, Focus Rings & Dialog Focus Traps',
      bn: 'কিবোর্ড নেভিগেশন, ফোকাস রিং ও ডায়ালগ ফোকাস ট্র্যাপ'
    }
  }
};
