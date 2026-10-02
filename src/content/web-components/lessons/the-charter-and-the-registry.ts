import type { Lesson } from '../../../lib/types';

export const TheCharterAndTheRegistryLesson: Lesson = {
  slug: 'the-charter-and-the-registry',
  tech: 'web-components',
  title: {
    en: 'Custom Elements Basics — Registration, Upgrades, and Naming Rules',
    bn: 'কাস্টম এলিমেন্টস পরিচিতি — রেজিস্ট্রেশন, আপগ্রেড এবং নামকরণের নিয়ম'
  },
  summary: {
    en: 'Web Components allow developers to build native reusable HTML elements across modern browsers without frameworks. In this lesson, we master autonomous custom elements by extending HTMLElement, registering tag names with customElements.define, enforcing hyphenated naming conventions, managing asynchronous DOM upgrades, and observing constructor safety rules.',
    bn: 'ওয়েব কম্পোনেন্টস ডেভেলপারদের কোনো ফ্রেমওয়ার্ক ছাড়াই আধুনিক ব্রাউজারে পুনর্ব্যবহারযোগ্য এইচটিএমএল উপাদান তৈরি করতে দেয়। এই পাঠে আমরা HTMLElement এক্সটেন্ড করে অটোনোমাস কাস্টম এলিমেন্ট তৈরি, customElements.define দিয়ে রেজিস্ট্রেশন, হাইফেনযুক্ত নামকরণের নিয়ম, অ্যাসিনক্রোনাস ডম আপগ্রেড এবং কনস্ট্রাক্টরের সুরক্ষা নিয়ম শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'custom-elements-overview',
      text: {
        en: 'Web Components & Autonomous Custom Elements',
        bn: 'ওয়েব কম্পোনেন্টস এবং অটোনোমাস কাস্টম এলিমেন্টস'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern web applications, browsers provide four native standards: Custom Elements, Shadow DOM, HTML Templates, and ElementInternals. Together, we can author custom HTML tags with native rendering performance, lifecycle hooks, and complete CSS encapsulation.',
        bn: 'আধুনিক ওয়েব অ্যাপ্লিকেশন তৈরির সময় ব্রাউজার আমাদের চারটি নিজস্ব স্ট্যান্ডার্ড সরবরাহ করে: কাস্টম এলিমেন্টস, শ্যাডো ডম, এইচটিএমএল টেমপ্লেট এবং এলিমেন্ট-ইন্টারনালস। আমরা একসাথে এই স্ট্যান্ডার্ডগুলো ব্যবহার করে নিজস্ব এইচটিএমএল ট্যাগ তৈরি, লাইফসাইকেল হুক পরিচালনা এবং সম্পূর্ণ সিএসএস এনক্যাপসুলেশন নিশ্চিত করতে পারি।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Autonomous Custom Element',
          def: {
            en: 'An independent HTML element that extends HTMLElement directly and uses a hyphenated tag name like <user-badge>.',
            bn: 'একটি স্বতন্ত্র এইচটিএমএল উপাদান যা সরাসরি HTMLElement এক্সটেন্ড করে এবং <user-badge>-এর মতো হাইফেনযুক্ত ট্যাগ নাম ব্যবহার করে।'
          }
        },
        {
          term: 'customElements.define()',
          def: {
            en: 'The global browser registry method that binds a custom tag name to an ES2015 class constructor.',
            bn: 'গ্লোবাল ব্রাউজার রেজিস্ট্রি মেথড যা একটি কাস্টম ট্যাগ নামকে একটি ES2015 ক্লাস কনস্ট্রাক্টরের সাথে যুক্ত করে।'
          }
        },
        {
          term: 'DOM Upgrade',
          def: {
            en: 'The internal process where existing un-upgraded DOM nodes are linked to their registered class implementation.',
            bn: 'ব্রাউজারের অভ্যন্তরীণ প্রক্রিয়া যার মাধ্যমে পেজে থাকা বিদ্যমান উপাদানগুলো তাদের নিবন্ধিত ক্লাস সংজ্ঞার সাথে সংযুক্ত হয়।'
          }
        },
        {
          term: ':defined / :not(:defined)',
          def: {
            en: 'CSS pseudo-classes that target custom elements based on whether their class has been registered in customElements.',
            bn: 'সিএসএস সিউডো-ক্লাস যা কাস্টম এলিমেন্টটি customElements রেজিস্ট্রিতে নিবন্ধিত হয়েছে কি না তার ভিত্তিতে স্টাইল প্রয়োগ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'registration-rules',
      text: {
        en: 'Registration Rules and Constructor Restraints',
        bn: 'রেজিস্ট্রেশনের নিয়মাবলী এবং কনস্ট্রাক্টরের সীমাবদ্ধতা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Hyphenated Tag Name: Every custom element tag must contain at least 1 ASCII hyphen (for example, user-card or app-header). This guarantees that custom tags will never collide with future standard HTML tags.',
          bn: '১. হাইফেনযুক্ত ট্যাগ নাম: প্রতিটি কাস্টম এলিমেন্ট ট্যাগে অন্তত ১টি ASCII হাইফেন থাকতে হবে (যেমন user-card বা app-header)। এটি নিশ্চিত করে যে কাস্টম ট্যাগ কখনোই ভবিষ্যতের আদর্শ এইচটিএমএল ট্যাগের সাথে সাংঘর্ষিক হবে না।'
        },
        {
          en: '2. Call super() first: The constructor must call super() before accessing this. Failure to invoke super() throws a ReferenceError immediately.',
          bn: '২. প্রথমে super() কল করুন: কনস্ট্রাক্টরের ভেতরে this অ্যাক্সেস করার আগে অবশ্যই super() কল করতে হবে। super() কল না করলে সাথে সাথে ReferenceError তৈরি হয়।'
        },
        {
          en: '3. Defer DOM Inspection: Never read child nodes or inspect outer attributes inside constructor(). The browser has not finished parsing child elements during instantiation.',
          bn: '৩. ডম পরিদর্শন স্থগিত রাখুন: constructor()-এর ভেতরে চাইল্ড নোড বা বাইরের অ্যাট্রিবিউট পড়া উচিত নয়। এলিমেন্ট তৈরি হওয়ার সময় ব্রাউজার চাইল্ড উপাদানগুলোর পার্সিং সম্পন্ন করে না।'
        },
        {
          en: '4. Prevent Duplicate Registrations: Calling customElements.define() twice with the same tag name throws a NotSupportedError exception. Always check customElements.get(tagName) before registering.',
          bn: '৪. পুনরাবৃত্ত রেজিস্ট্রেশন রোধ করুন: একই ট্যাগ নামে দুইবার customElements.define() কল করলে NotSupportedError ব্যতিক্রম ঘটে। রেজিস্ট্রেশনের আগে সর্বদা customElements.get(tagName) পরীক্ষা করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Custom Element Implementation',
        bn: 'কাস্টম এলিমেন্টের ব্যবহারিক কোড উদাহরণ'
      }
    },
    {
      type: 'code',
      code: `// 1. Define an autonomous custom element
class CounterBadge extends HTMLElement {
  constructor() {
    super();
    this.count = 10;
  }

  connectedCallback() {
    this.textContent = \`Count: \${this.count}\`;
  }
}

// 2. Register with the custom element registry
if (!customElements.get('counter-badge')) {
  customElements.define('counter-badge', CounterBadge);
}

// 3. Inspect registry status
console.log('Registered constructor:', customElements.get('counter-badge') === CounterBadge);
// -> Registered constructor: true

// 4. Create and test DOM element
const badge = document.createElement('counter-badge');
document.body.appendChild(badge);
console.log('Badge text:', badge.textContent);
// -> Badge text: Count: 10`,
      caption: {
        en: 'Defining, registering, and mounting a CounterBadge custom element with 10 initial count',
        bn: '১০ প্রাথমিক মান দিয়ে একটি CounterBadge কাস্টম এলিমেন্ট সংজ্ঞায়িত, নিবন্ধিত এবং মাউন্ট করা'
      }
    },
    {
      type: 'heading',
      id: 'upgrade-and-promises',
      text: {
        en: 'Asynchronous Upgrades and whenDefined()',
        bn: 'অ্যাসিনক্রোনাস আপগ্রেড এবং whenDefined()'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Browsers parse HTML documents sequentially. If an HTML tag like <user-card> appears in the document before its customElements.define() script loads, the browser creates an HTMLUnknownElement instance. When the class definition executes later, the browser upgrades every matching element in place.',
        bn: 'ব্রাউজার এইচটিএমএল ডকুমেন্ট ধারাবাহিকভাবে পার্স করে। যদি <user-card>-এর মতো ট্যাগ স্ক্রিপ্ট লোড হওয়ার আগেই ডকুমেন্টে থাকে, ব্রাউজার প্রথমে একটি সাধারণ নোড তৈরি করে। পরবর্তীতে যখন ক্লাস রেজিস্টার হয়, ব্রাউজার পেজের সকল উপাদানকে স্বয়ংক্রিয়ভাবে আপগ্রেড করে নেয়।'
      }
    },
    {
      type: 'code',
      code: `// Check registration promise
async function waitForElement(tagName) {
  console.log('Waiting for definition of:', tagName);
  // customElements.whenDefined returns a Promise resolving to the class constructor
  const elementClass = await customElements.whenDefined(tagName);
  console.log('Element defined successfully:', Boolean(elementClass));
  return elementClass;
}

// Register delayed tag after 100 milliseconds
setTimeout(() => {
  class StatusIndicator extends HTMLElement {}
  customElements.define('status-indicator', StatusIndicator);
}, 100);

waitForElement('status-indicator');
// -> Waiting for definition of: status-indicator
// -> Element defined successfully: true`,
      caption: {
        en: 'Awaiting component readiness using customElements.whenDefined with 100ms async delay',
        bn: '১০০ মিলিসেকেন্ড বিলম্বের পর customElements.whenDefined ব্যবহার করে কম্পোনেন্ট প্রস্তুত হওয়ার অপেক্ষা'
      }
    },
    {
      type: 'compare',
      left: {
        title: {
          en: 'Autonomous Custom Elements',
          bn: 'অটোনোমাস কাস্টম এলিমেন্টস'
        },
        points: [
          {
            en: 'Directly extends the base HTMLElement class.',
            bn: 'সরাসরি মূল HTMLElement ক্লাসটি এক্সটেন্ড করে।'
          },
          {
            en: 'Written as standalone custom tags like <user-card>.',
            bn: '<user-card>-এর মতো স্বতন্ত্র ট্যাগ হিসেবে লেখা হয়।'
          },
          {
            en: 'Supported across 100% of modern web browsers.',
            bn: 'সকল আধুনিক ওয়েব ব্রাউজারে ১০০% সমর্থিত।'
          },
          {
            en: 'Must handle its own accessibility roles and keyboard tabindex.',
            bn: 'নিজস্ব অ্যাক্সেসিবিলিটি রোল এবং কীবোর্ড ট্যাব-ইনডেক্স নিজে তৈরি করতে হয়।'
          }
        ]
      },
      right: {
        title: {
          en: 'Customized Built-in Elements',
          bn: 'কাস্টমাইজড বিল্ট-ইন এলিমেন্টস'
        },
        points: [
          {
            en: 'Extends specific HTML subclasses like HTMLButtonElement.',
            bn: 'নির্দিষ্ট এইচটিএমএল সাবক্লাস যেমন HTMLButtonElement এক্সটেন্ড করে।'
          },
          {
            en: 'Written as standard tags with an is attribute: <button is="fancy-btn">.',
            bn: 'is অ্যাট্রিবিউটসহ আদর্শ ট্যাগ হিসেবে লেখা হয়: <button is="fancy-btn">।'
          },
          {
            en: 'Inherits built-in accessibility, form participation, and keyboard focus.',
            bn: 'ব্রাউজারের ডিফল্ট অ্যাক্সেসিবিলিটি, ফর্ম অংশগ্রহণ এবং কীবোর্ড ফোকাস সুবিধা পায়।'
          },
          {
            en: 'Requires { extends: "button" } in customElements.define.',
            bn: 'customElements.define-এ { extends: "button" } উল্লেখ করতে হয়।'
          }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'wc-reg-ex1',
      kind: 'mcq',
      topic: 'hyphenated tag names',
      question: {
        en: 'Which tag name is valid for an autonomous custom element under the HTML specification?',
        bn: 'এইচটিএমএল স্পেসিফিকেশন অনুযায়ী অটোনোমাস কাস্টম এলিমেন্টের জন্য কোন ট্যাগ নামটি বৈধ?'
      },
      options: [
        {
          en: '<user-profile> (contains an ASCII hyphen and begins with a lowercase letter)',
          bn: '<user-profile> (একটি ASCII হাইফেন রয়েছে এবং ছোট হাতের অক্ষর দিয়ে শুরু হয়েছে)'
        },
        {
          en: '<userprofile> (single word without any hyphen)',
          bn: '<userprofile> (হাইফেন ছাড়া একক শব্দ)'
        },
        {
          en: '<2-counter> (begins with a numeric digit)',
          bn: '<2-counter> (সংখ্যা দিয়ে শুরু হয়েছে)'
        },
        {
          en: '<UserCard> (contains uppercase letters without hyphens)',
          bn: '<UserCard> (হাইফেন ছাড়া বড় হাতের অক্ষর রয়েছে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Custom tag names must always include at least 1 ASCII hyphen to prevent collisions.',
        bn: 'ভবিষ্যতের কনফ্লিক্ট এড়াতে কাস্টম ট্যাগ নামে অন্তত ১টি ASCII হাইফেন থাকতে হবে।'
      },
      explanation: {
        en: 'The specification requires all custom element tags to contain a hyphen. This guarantees that author-defined elements never collide with standard HTML tags introduced in future browser versions.',
        bn: 'স্পেসিফিকেশন অনুযায়ী কাস্টম এলিমেন্টে হাইফেন থাকা বাধ্যতামূলক। এটি নিশ্চিত করে যে ব্যবহারকারীর তৈরি ট্যাগ ভবিষ্যতে ব্রাউজারে আসা কোনো আদর্শ ট্যাগের সাথে সাংঘর্ষিক হবে না।'
      }
    },
    {
      id: 'wc-reg-ex2',
      kind: 'mcq',
      topic: 'constructor rules',
      question: {
        en: 'What is the required first line in a custom element class constructor?',
        bn: 'কাস্টম এলিমেন্ট ক্লাসের কনস্ট্রাক্টরে সর্বপ্রথম কোন লাইনটি লেখা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'super(); to initialize the HTMLElement superclass before accessing this',
          bn: 'super(); যার মাধ্যমে this অ্যাক্সেস করার পূর্বে HTMLElement ইনিশিয়ালাইজ হয়'
        },
        {
          en: 'this.attachShadow({ mode: "open" });',
          bn: 'this.attachShadow({ mode: "open" });'
        },
        {
          en: 'this.innerHTML = ""; to clear default content',
          bn: 'this.innerHTML = ""; যার মাধ্যমে পূর্ববর্তী কন্টেন্ট মোছা হয়'
        },
        {
          en: 'customElements.define("custom-tag", this);',
          bn: 'customElements.define("custom-tag", this);'
        }
      ],
      answer: 0,
      hint: {
        en: 'Derived classes in JavaScript must establish the prototype chain first.',
        bn: 'জাভাস্ক্রিপ্টে ইনহেরিট করা ক্লাসে প্রোটোটাইপ চেইন আগে তৈরি করতে হয়।'
      },
      explanation: {
        en: 'JavaScript enforces that derived constructors must invoke super() before accessing this. Failing to do so triggers a ReferenceError.',
        bn: 'জাভাস্ক্রিপ্টে ইনহেরিট করা ক্লাসে this অ্যাক্সেস করার আগে super() কল করা বাধ্যতামূলক, অন্যথায় ReferenceError ঘটে।'
      }
    },
    {
      id: 'wc-reg-ex3',
      kind: 'mcq',
      topic: 'registry errors',
      question: {
        en: 'What does customElements.define throw when called twice with the same tag name?',
        bn: 'একই ট্যাগ নাম দিয়ে দুইবার customElements.define কল করলে ব্রাউজার কোন ত্রুটি প্রদান করে?'
      },
      options: [
        {
          en: 'A NotSupportedError DOMException rejecting duplicate tag registration',
          bn: 'একটি NotSupportedError DOMException যা ডুপ্লিকেট ট্যাগ নিবন্ধন বাতিল করে'
        },
        {
          en: 'A TypeError indicating an invalid constructor function',
          bn: 'একটি TypeError যা অবৈধ কনস্ট্রাক্টর নির্দেশ করে'
        },
        {
          en: 'A SyntaxError in the JavaScript parser',
          bn: 'জাভাস্ক্রিপ্ট পার্সারে একটি SyntaxError'
        },
        {
          en: 'It silently ignores the second call without throwing anything',
          bn: 'কোনো ত্রুটি ছাড়া দ্বিতীয় কলটি নীরবে উপেক্ষা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The CustomElementRegistry protects tag names from being overwritten dynamically.',
        bn: 'কাস্টম এলিমেন্ট রেজিস্ট্রি রানটাইমে ট্যাগ নাম ওভাররাইট হওয়া থেকে রক্ষা করে।'
      },
      explanation: {
        en: 'Tag definitions are immutable. Registering the same tag name more than once throws a NotSupportedError to ensure stable element contracts.',
        bn: 'ট্যাগের সংজ্ঞা অপরিবর্তনীয়। একই নাম একাধিকবার রেজিস্টার করলে স্থিতিশীলতা বজায় রাখতে ব্রাউজার NotSupportedError তৈরি করে।'
      }
    },
    {
      id: 'wc-reg-ex4',
      kind: 'mcq',
      topic: 'upgrade styling',
      question: {
        en: 'Which CSS pseudo-class matches custom elements whose definitions have not yet loaded?',
        bn: 'কোন সিএসএস সিউডো-ক্লাসটি সেই উপাদানগুলোর সাথে মেলে যার সংজ্ঞা এখনও লোড হয়নি?'
      },
      options: [
        {
          en: ':not(:defined) matching un-upgraded custom elements',
          bn: ':not(:defined) যা অনিবন্ধিত বা আন-আপগ্রেডেড কাস্টম এলিমেন্টকে টার্গেট করে'
        },
        {
          en: ':empty targeting elements with zero child nodes',
          bn: ':empty যা শূন্য চাইল্ড নোড থাকা উপাদানকে টার্গেট করে'
        },
        {
          en: ':disabled matching disabled form inputs',
          bn: ':disabled যা নিষ্ক্রিয় ফর্ম ইনপুটকে টার্গেট করে'
        },
        {
          en: ':unresolved from legacy HTML imports',
          bn: ':unresolved যা পুরোনো অচল স্পেসিফিকেশনের অংশ'
        }
      ],
      answer: 0,
      hint: {
        en: 'The defined pseudo-class toggles from false to true upon registration.',
        bn: 'রেজিস্ট্রেশনের সাথে সাথে defined সিউডো-ক্লাস মিথ্যা থেকে সত্যে পরিবর্তিত হয়।'
      },
      explanation: {
        en: ':not(:defined) lets developers hide or display fallback skeletons for custom elements while their scripts are downloading over the network.',
        bn: ':not(:defined) ডেভেলপারদের স্ক্রিপ্ট ডাউনলোড হওয়া পর্যন্ত কাস্টম এলিমেন্ট লুকিয়ে রাখতে বা স্কেলিটন দেখাতে সাহায্য করে।'
      }
    }
  ],
  quiz: {
    id: 'charter-quiz',
    title: {
      en: 'Custom Elements & Registry Quiz',
      bn: 'কাস্টম এলিমেন্টস এবং রেজিস্ট্রি কুইজ'
    },
    questions: [
      {
        id: 'q-custom-tag-syntax',
        kind: 'mcq',
        topic: 'tag naming requirements',
        question: {
          en: 'Which requirement is strictly enforced for all custom element tag names?',
          bn: 'সকল কাস্টম এলিমেন্টের ট্যাগ নামের ক্ষেত্রে কোন নিয়মটি কঠোরভাবে প্রয়োগ করা হয়?'
        },
        options: [
          {
            en: 'Must contain an ASCII hyphen and begin with a lowercase ASCII letter',
            bn: 'অবশ্যই একটি ASCII হাইফেন থাকতে হবে এবং ছোট হাতের ASCII অক্ষর দিয়ে শুরু হতে হবে'
          },
          {
            en: 'Must start with the prefix "custom-" or "app-"',
            bn: 'অবশ্যই "custom-" বা "app-" প্রিফিক্স দিয়ে শুরু হতে হবে'
          },
          {
            en: 'Must end with "-element"',
            bn: 'অবশ্যই "-element" দিয়ে শেষ হতে হবে'
          },
          {
            en: 'Must be written using PascalCase syntax',
            bn: 'প্যাসকেল-কেস (PascalCase) সিনট্যাক্স ব্যবহার করে লিখতে হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hyphens are reserved to distinguish custom tags from standard platform tags.',
          bn: 'কাস্টম ট্যাগকে ব্রাউজারের স্ট্যান্ডার্ড ট্যাগ থেকে আলাদা করতে হাইফেন আবশ্যক।'
        },
        explanation: {
          en: 'The specification requires tag names to include a hyphen to ensure future standard tag compatibility.',
          bn: 'ভবিষ্যতের স্ট্যান্ডার্ড ট্যাগের সাথে সংঘর্ষ এড়াতে স্পেসিফিকেশন অনুসারে হাইফেন থাকা বাধ্যতামূলক।'
        }
      },
      {
        id: 'q-when-defined',
        kind: 'mcq',
        topic: 'asynchronous definition lookup',
        question: {
          en: 'What does customElements.whenDefined("tag-name") return?',
          bn: 'customElements.whenDefined("tag-name") মেথডটি কী রিটার্ন করে?'
        },
        options: [
          {
            en: 'A Promise that resolves with the registered class constructor when defined',
            bn: 'একটি Promise যা ট্যাগটি সংজ্ঞায়িত হলে নিবন্ধিত ক্লাস কনস্ট্রাক্টর দিয়ে সম্পন্ন হয়'
          },
          {
            en: 'A boolean value indicating if the tag is registered synchronously',
            bn: 'ট্যাগটি সিঙ্ক্রোনাসভাবে নিবন্ধিত কি না তা নির্দেশকারী একটি বুলিয়ান মান'
          },
          {
            en: 'A live NodeList of all matching instances in the document',
            bn: 'ডকুমেন্টে থাকা সমস্ত সংশ্লিষ্ট উপাদানের একটি লাইভ NodeList'
          },
          {
            en: 'The ShadowRoot object attached to the element',
            bn: 'উপাদানটির সাথে যুক্ত ShadowRoot অবজেক্ট'
          }
        ],
        answer: 0,
        hint: {
          en: 'It allows awaiting script execution asynchronously.',
          bn: 'এটি অ্যাসিনক্রোনাসভাবে স্ক্রিপ্ট এক্সিকিউশন পর্যন্ত অপেক্ষা করতে দেয়।'
        },
        explanation: {
          en: 'whenDefined returns a Promise that settles when customElements.define is executed.',
          bn: 'whenDefined একটি Promise দেয় যা customElements.define এক্সিকিউট হলে সমাধান হয়।'
        }
      },
      {
        id: 'q-constructor-dom',
        kind: 'mcq',
        topic: 'constructor timing',
        question: {
          en: 'Why should custom element constructors avoid inspecting element attributes?',
          bn: 'কাস্টম এলিমেন্টের কনস্ট্রাক্টরে কেন উপাদানটির অ্যাট্রিবিউট পরিদর্শন এড়িয়ে চলা উচিত?'
        },
        options: [
          {
            en: 'Attributes and child nodes are not yet available when constructor() executes',
            bn: 'constructor() চলার সময় অ্যাট্রিবিউট এবং চাইল্ড নোডগুলো ব্রাউজারে উপলব্ধ থাকে না'
          },
          {
            en: 'Reading attributes from this throws a fatal TypeError in JavaScript',
            bn: 'this থেকে অ্যাট্রিবিউট পড়লে জাভাস্ক্রিপ্টে একটি মারাত্মক TypeError ঘটে'
          },
          {
            en: 'Custom elements do not support standard HTML attributes',
            bn: 'কাস্টম উপাদানগুলো সাধারণ এইচটিএমএল অ্যাট্রিবিউট সমর্থন করে না'
          },
          {
            en: 'Attributes can only be modified through the CSS stylesheet engine',
            bn: 'অ্যাট্রিবিউট শুধুমাত্র সিএসএস স্টাইলশিটের মাধ্যমে পরিবর্তন করা সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'The browser instantiates the element before parsing its attributes and children.',
          bn: 'ব্রাউজার অ্যাট্রিবিউট ও চাইল্ড পার্স করার আগেই ইনস্ট্যান্স তৈরি করে।'
        },
        explanation: {
          en: 'Construction occurs before attribute parsing completes. Use connectedCallback instead.',
          bn: 'অ্যাট্রিবিউট পার্সিং শেষ হওয়ার আগেই কনস্ট্রাক্টর রান হয়। এর বদলে connectedCallback ব্যবহার করুন।'
        }
      },
      {
        id: 'q-customized-builtin',
        kind: 'mcq',
        topic: 'customized built-ins',
        question: {
          en: 'How are customized built-in elements declared in HTML markup?',
          bn: 'এইচটিএমএল মার্কআপে কাস্টমাইজড বিল্ট-ইন উপাদান কীভাবে লিখতে হয়?'
        },
        options: [
          {
            en: 'Using the native tag with the is attribute: <button is="super-btn">',
            bn: 'is অ্যাট্রিবিউটসহ নেটিভ ট্যাগ ব্যবহার করে: <button is="super-btn">'
          },
          {
            en: 'Using nested custom tags: <super-btn><button></button></super-btn>',
            bn: 'নেস্টেড কাস্টম ট্যাগ ব্যবহার করে: <super-btn><button></button></super-btn>'
          },
          {
            en: 'Using custom namespace prefixes: <html:button class="super">',
            bn: 'কাস্টম নেমস্পেস প্রিফিক্স দিয়ে: <html:button class="super">'
          },
          {
            en: 'Using the data-component attribute on a generic <div> tag',
            bn: 'সাধারণ <div> ট্যাগে data-component অ্যাট্রিবিউট ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The is attribute extends existing native elements while preserving built-in behavior.',
          bn: 'is অ্যাট্রিবিউট নেটিভ আচরণ অক্ষুণ্ণ রেখে নতুন ক্ষমতা যুক্ত করে।'
        },
        explanation: {
          en: 'Customized built-ins preserve native tag semantics and declare custom behavior via is="...".',
          bn: 'কাস্টমাইজড বিল্ট-ইন উপাদানগুলো নেটিভ ট্যাগের সুবিধা ধরে রাখে এবং is="..." দিয়ে যুক্ত হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-shadow-boundary',
    title: {
      en: 'Shadow DOM & Encapsulation — Boundaries, Open vs Closed Modes, and Host Selectors',
      bn: 'শ্যাডো ডম ও এনক্যাপসুলেশন — বাউন্ডারি, ওপেন বনাম ক্লোজড মোড এবং হোস্ট সিলেক্টর'
    }
  }
};
