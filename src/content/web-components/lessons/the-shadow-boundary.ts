import type { Lesson } from '../../../lib/types';

export const TheShadowBoundaryLesson: Lesson = {
  slug: 'the-shadow-boundary',
  tech: 'web-components',
  title: {
    en: 'Shadow DOM & Encapsulation — Boundaries, Open vs Closed Modes, and Host Selectors',
    bn: 'শ্যাডো ডম ও এনক্যাপসুলেশন — বাউন্ডারি, ওপেন বনাম ক্লোজড মোড এবং হোস্ট সিলেক্টর'
  },
  summary: {
    en: 'Shadow DOM creates a private, isolated DOM subtree attached to a custom element. This boundary prevents external page styles from accidentally bleeding into the component, stops internal component styles from leaking out, and shields internal child nodes from document query selectors. In this lesson, we master attaching shadow roots, choosing between open and closed modes, and styling the host element using :host and :host-context.',
    bn: 'শ্যাডো ডম একটি কাস্টম উপাদানের সাথে যুক্ত একটি ব্যক্তিগত এবং বিচ্ছিন্ন সাব-ট্রি তৈরি করে। এই বাউন্ডারিটি বাইরের পেজ স্টাইলকে কম্পোনেন্টের ভেতর ঢুকতে বাধা দেয়, ভেতরের স্টাইল বাইরে ছড়াতে দেয় না এবং ভেতরের নোডগুলোকে সাধারণ কুয়েরি থেকে রক্ষা করে। এই পাঠে আমরা শ্যাডো রুট যুক্ত করা, ওপেন বনাম ক্লোজড মোড বেছে নেওয়া এবং :host ও :host-context ব্যবহার করে হোস্ট উপাদান স্টাইল করা শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'shadow-dom-overview',
      text: {
        en: 'What is Shadow DOM and Why Do We Need It?',
        bn: 'শ্যাডো ডম কী এবং কেন আমাদের এটি প্রয়োজন?'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build reusable UI widgets, global CSS collisions pose a major risk. A global button rule on the page can easily distort your custom widget. By attaching a shadow root with attachShadow({ mode: "open" }), the browser establishes a strict encapsulation boundary around your component markup and styles.',
        bn: 'পুনর্ব্যবহারযোগ্য ইউআই কম্পোনেন্ট তৈরির সময় গ্লোবাল সিএসএস কনফ্লিক্ট একটি বড় সমস্যা তৈরি করে। পেজের একটি সাধারণ বাটন স্টাইল সহজেই আপনার কাস্টম উইজেট নষ্ট করতে পারে। attachShadow({ mode: "open" }) দিয়ে একটি শ্যাডো রুট তৈরি করলে ব্রাউজার আপনার মার্কআপ ও স্টাইলের চারপাশে একটি সুরক্ষিত বাউন্ডারি তৈরি করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Shadow Root',
          def: {
            en: 'The root node of a shadow DOM subtree that isolates internal DOM nodes and styles from the outer document.',
            bn: 'শ্যাডো ডম সাব-ট্রির মূল নোড যা অভ্যন্তরীণ ডম নোড এবং স্টাইলগুলোকে বাইরের ডকুমেন্ট থেকে সম্পূর্ণ আলাদা রাখে।'
          }
        },
        {
          term: 'Light DOM',
          def: {
            en: 'The standard DOM tree created by regular HTML markup or child nodes declared between the custom element tags.',
            bn: 'সাধারণ এইচটিএমএল মার্কআপ বা কাস্টম এলিমেন্টের ভেতর সরাসরি লেখা সাধারণ চাইল্ড নোডগুলোর ডম কাঠামো।'
          }
        },
        {
          term: 'attachShadow({ mode })',
          def: {
            en: 'The HTMLElement method that creates and attaches a private ShadowRoot to the target host element.',
            bn: 'HTMLElement-এর নিজস্ব মেথড যা টার্গেট হোস্ট এলিমেন্টের সাথে একটি প্রাইভেট ShadowRoot তৈরি ও যুক্ত করে।'
          }
        },
        {
          term: ':host Selector',
          def: {
            en: 'A CSS pseudo-class function used inside the shadow root to target and style the outer containing custom element.',
            bn: 'শ্যাডো রুটের ভেতরের একটি সিএসএস সিউডো-ক্লাস যা বাইরের কাস্টম হোস্ট উপাদানকে টার্গেট করে স্টাইল প্রয়োগ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'open-vs-closed-modes',
      text: {
        en: 'Open Mode vs Closed Mode Architecture',
        bn: 'ওপেন মোড বনাম ক্লোজড মোড আর্কিটেকচার'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Open Mode (mode: "open"): The attached shadow root is directly accessible from external JavaScript via element.shadowRoot. This allows developer tools, automated test suites, and accessibility frameworks to inspect internals.',
          bn: '১. ওপেন মোড (mode: "open"): যুক্ত করা শ্যাডো রুটটি বাইরের জাভাস্ক্রিপ্ট থেকে element.shadowRoot দিয়ে সরাসরি অ্যাক্সেস করা যায়। এটি ডেভেলপার টুলস, টেস্ট সুইট এবং অ্যাক্সেসিবিলিটি ফ্রেমওয়ার্ককে পরিদর্শন করার সুযোগ দেয়।'
        },
        {
          en: '2. Closed Mode (mode: "closed"): External access via element.shadowRoot returns null. The component author must manually retain the reference in a private variable or Symbol to access the shadow tree.',
          bn: '২. ক্লোজড মোড (mode: "closed"): বাইরের স্ক্রিপ্ট থেকে element.shadowRoot পড়লে নাল (null) পাওয়া যায়। কম্পোনেন্ট লেখককে শ্যাডো ট্রিতে কাজ করার জন্য নিজস্ব প্রাইভেট ভেরিয়েবল বা সিম্বলে রেফারেন্স সংরক্ষণ করতে হয়।'
        },
        {
          en: '3. Security Fallacy: Closed mode does not provide cryptographic or sandbox security. External code running on the same page can intercept Element.prototype.attachShadow before components initialize.',
          bn: '৩. নিরাপত্তার ভুল ধারণা: ক্লোজড মোড কোনো নিশ্চিত নিরাপত্তা বা স্যান্ডবক্স তৈরি করে না। একই পেজে চলা বাইরের স্ক্রিপ্ট attachShadow মেথড ইন্টারসেপ্ট করে ভেতরের রেফারেন্স বের করে নিতে পারে।'
        },
        {
          en: '4. Best Practice: Always prefer mode: "open" in design systems and production component libraries to maintain testability and accessibility tooling compatibility.',
          bn: '৪. সর্বোত্তম অনুশীলন: ডিজাইন সিস্টেম এবং প্রোডাকশন কম্পোনেন্ট লাইব্রেরিতে টেস্টিং ও অ্যাক্সেসিবিলিটি নিশ্চিত করতে সর্বদা mode: "open" ব্যবহার করা শ্রেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Shadow DOM Implementation',
        bn: 'শ্যাডো ডমের ব্যবহারিক কোড উদাহরণ'
      }
    },
    {
      type: 'code',
      code: `// 1. Create a custom button with an isolated Shadow Root
class FancyButton extends HTMLElement {
  constructor() {
    super();
    // Attach an open shadow root
    const shadow = this.attachShadow({ mode: 'open' });

    // Inner styles are completely scoped to this shadow tree
    shadow.innerHTML = \`
      <style>
        :host {
          display: inline-block;
          margin: 4px;
        }
        :host([disabled]) {
          opacity: 0.5;
          pointer-events: none;
        }
        button {
          background: #2563eb;
          color: white;
          padding: 8px 16px;
          border-radius: 6px;
          border: none;
          cursor: pointer;
        }
      </style>
      <button class="btn-core">
        <slot>Click Me</slot>
      </button>
    \`;
  }
}

customElements.define('fancy-button', FancyButton);

// 2. Instantiate and inspect encapsulation
const btn = document.createElement('fancy-button');
document.body.appendChild(btn);

// Open mode reveals shadowRoot reference
console.log('Has shadow root:', Boolean(btn.shadowRoot));
// -> Has shadow root: true

// Page querySelector cannot penetrate shadow boundary
console.log('Query from document:', document.querySelector('.btn-core'));
// -> Query from document: null

// Query from shadowRoot locates internal button
console.log('Query from shadow root:', btn.shadowRoot.querySelector('.btn-core') !== null);
// -> Query from shadow root: true`,
      caption: {
        en: 'Encapsulating markup and styles using attachShadow with 8px padding and scoped selectors',
        bn: 'attachShadow ব্যবহার করে ৮px প্যাডিং ও স্কোপড সিলেক্টর দিয়ে মার্কআপ ও স্টাইল এনক্যাপসুলেট করা'
      }
    },
    {
      type: 'heading',
      id: 'host-styling-rules',
      text: {
        en: 'Styling the Host Element (:host, :host(), and :host-context())',
        bn: 'হোস্ট উপাদানের স্টাইলিং (:host, :host(), এবং :host-context())'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The custom element itself is known as the host element. Because the host lives on the boundary between the light DOM and the shadow DOM, CSS inside the shadow root uses the :host pseudo-class to style it.',
        bn: 'কাস্টম এলিমেন্টটিকে নিজে হোস্ট এলিমেন্ট হিসেবে গণ্য করা হয়। যেহেতু হোস্ট উপাদানটি লাইট ডম এবং শ্যাডো ডমের সংযোগস্থলে থাকে, তাই শ্যাডো রুটের ভেতর থেকে সিএসএস :host সিউডো-ক্লাস ব্যবহার করে একে স্টাইল করা হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Selector', bn: 'সিলেক্টর' },
        { en: 'Target & Condition', bn: 'টার্গেট ও শর্ত' },
        { en: 'Example Use Case', bn: 'ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: ':host', bn: ':host' },
          { en: 'Matches the custom element itself in all default states', bn: 'সব স্বাভাবিক অবস্থায় কাস্টম এলিমেন্টটিকে টার্গেট করে' },
          { en: ':host { display: block; border-radius: 8px; }', bn: ':host { display: block; border-radius: 8px; }' }
        ],
        [
          { en: ':host(selector)', bn: ':host(selector)' },
          { en: 'Matches the host only when it satisfies an internal class or attribute', bn: 'হোস্টে নির্দিষ্ট ক্লাস বা অ্যাট্রিবিউট থাকলে তবেই মেলে' },
          { en: ':host([theme="dark"]) { background: #1e293b; }', bn: ':host([theme="dark"]) { background: #1e293b; }' }
        ],
        [
          { en: ':host-context(selector)', bn: ':host-context(selector)' },
          { en: 'Matches the host when any ancestor up the light DOM tree matches', bn: 'বাইরের কোনো প্যারেন্ট বা অ্যান্সেস্টর এলিমেন্টে শর্ত মিললে কাজ করে' },
          { en: ':host-context(.dark-mode) button { color: #f8fafc; }', bn: ':host-context(.dark-mode) button { color: #f8fafc; }' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'wc-sh-ex1',
      kind: 'mcq',
      topic: 'shadow root mode differences',
      question: {
        en: 'What does element.shadowRoot return when attachShadow({ mode: "closed" }) is used?',
        bn: 'attachShadow({ mode: "closed" }) ব্যবহার করা হলে element.shadowRoot কী রিটার্ন করে?'
      },
      options: [
        {
          en: 'null, hiding the internal shadow root reference from external JavaScript',
          bn: 'null, যার ফলে বাইরের জাভাস্ক্রিপ্ট ভেতরের শ্যাডো রুটের রেফারেন্স দেখতে পায় না'
        },
        {
          en: 'undefined, throwing a ReferenceError on property access',
          bn: 'undefined, যার ফলে প্রোপার্টি রিড করতে গেলে ReferenceError ঘটে'
        },
        {
          en: 'A read-only snapshot copy of the internal shadow tree',
          bn: 'অভ্যন্তরীণ শ্যাডো ট্রির একটি রিড-অনলি স্ন্যাপশট কপি'
        },
        {
          en: 'The standard HTMLElement host object itself',
          bn: 'মূল স্ট্যান্ডার্ড HTMLElement হোস্ট অবজেক্টটি নিজে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Closed mode explicitly withholds the root reference on the host node.',
        bn: 'ক্লোজড মোড হোস্ট নোডের রেফারেন্স গোপন রেখে নাল পাঠায়।'
      },
      explanation: {
        en: 'In closed mode, element.shadowRoot evaluates to null. The component constructor must store the root internally if it needs future access.',
        bn: 'ক্লোজড মোডে element.shadowRoot সর্বদা নাল রিটার্ন করে। পরবর্তীতে ব্যবহারের জন্য কনস্ট্রাক্টরে নিজস্ব ভেরিয়েবলে এটি সংরক্ষণ করতে হয়।'
      }
    },
    {
      id: 'wc-sh-ex2',
      kind: 'mcq',
      topic: 'style encapsulation scope',
      question: {
        en: 'How do styles declared inside a shadow root affect outer elements on the webpage?',
        bn: 'শ্যাডো রুটের ভেতরে ঘোষিত স্টাইলগুলো ওয়েবপেজের বাইরের উপাদানকে কীভাবে প্রভাবিত করে?'
      },
      options: [
        {
          en: 'They never bleed out into the outer page; styles remain strictly scoped to the shadow tree',
          bn: 'সেগুলো কখনোই বাইরের পেজে ছড়ায় না; স্টাইল শুধুমাত্র শ্যাডো ট্রির ভেতরেই সীমাবদ্ধ থাকে'
        },
        {
          en: 'They override global styles with high specificity across the entire document',
          bn: 'উচ্চ স্পেসিফিসিটির কারণে তারা পুরো ডকুমেন্টের গ্লোবাল স্টাইলকে ওভাররাইড করে ফেলে'
        },
        {
          en: 'They apply only to elements that share the same tag name in the light DOM',
          bn: 'লাইট ডমে থাকা একই ট্যাগ নামের উপাদানগুলোতে স্বয়ংক্রিয়ভাবে প্রয়োগ হয়'
        },
        {
          en: 'They are ignored by the browser unless marked with !important',
          bn: '!important চিহ্ন ছাড়া ব্রাউজার এগুলোকে সম্পূর্ণ উপেক্ষা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Shadow DOM boundaries isolate CSS in both inbound and outbound directions.',
        bn: 'শ্যাডো ডম বাউন্ডারি সিএসএসকে ভেতরে ঢোকা ও বাইরে বের হওয়া উভয় দিক থেকেই রক্ষা করে।'
      },
      explanation: {
        en: 'Style isolation is a foundational guarantee of Shadow DOM. Selectors inside the shadow root cannot reach nodes in the light DOM or adjacent shadow roots.',
        bn: 'স্টাইল বিচ্ছিন্নতা হলো শ্যাডো ডমের প্রধান বৈশিষ্ট্য। শ্যাডো রুটের ভেতরের সিলেক্টর লাইট ডম বা অন্য কোনো শ্যাডো রুটের নোডকে পরিবর্তন করতে পারে না।'
      }
    },
    {
      id: 'wc-sh-ex3',
      kind: 'mcq',
      topic: 'host styling selector',
      question: {
        en: 'Which CSS selector styles the custom element when it has an active attribute on itself?',
        bn: 'কাস্টম এলিমেন্টের গায়ে active অ্যাট্রিবিউট থাকলে শ্যাডো রুটের ভেতর থেকে কোন সিলেক্টরে স্টাইল করা হয়?'
      },
      options: [
        {
          en: ':host([active]) targeting the host element when the attribute is present',
          bn: ':host([active]) যা উপাদানটির গায়ে অ্যাট্রিবিউটটি থাকলে হোস্টকে স্টাইল করে'
        },
        {
          en: ':root([active]) targeting the document root node',
          bn: ':root([active]) যা ডকুমেন্টের মূল রুটকে নির্দেশ করে'
        },
        {
          en: 'shadow([active]) targeting the inner shadow root',
          bn: 'shadow([active]) যা ভেতরের শ্যাডো রুটকে নির্দেশ করে'
        },
        {
          en: 'self::active targeting the current execution scope',
          bn: 'self::active যা বর্তমান স্কোপ নির্দেশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use the :host pseudo-class with a compound attribute condition.',
        bn: ':host সিউডো-ক্লাসের ভেতর অ্যাট্রিবিউট শর্ত যুক্ত করুন।'
      },
      explanation: {
        en: ':host([active]) matches the containing custom element when it matches the selector argument inside the parenthesis.',
        bn: ':host([active]) কাস্টম এলিমেন্টটিকে তখনই সিলেক্ট করে যখন বন্ধনীর ভেতরের শর্তটি হোস্ট এলিমেন্টে সত্য হয়।'
      }
    },
    {
      id: 'wc-sh-ex4',
      kind: 'mcq',
      topic: 'query selector piercing',
      question: {
        en: 'What does document.querySelector("button") return if all buttons are inside shadow roots?',
        bn: 'পেজের সমস্ত বাটন যদি শ্যাডো রুটের ভেতরে থাকে, তবে document.querySelector("button") কী রিটার্ন করবে?'
      },
      options: [
        {
          en: 'null, because document queries do not pierce through shadow boundaries',
          bn: 'null, কারণ ডকুমেন্টের সাধারণ কুয়েরি শ্যাডো বাউন্ডারি ভেদ করতে পারে না'
        },
        {
          en: 'The first button found inside the first custom element on the page',
          bn: 'পেজের প্রথম কাস্টম উপাদানের ভেতরের প্রথম বাটনটি'
        },
        {
          en: 'An array of all buttons found across every shadow tree',
          bn: 'প্রতিটি শ্যাডো ট্রিতে পাওয়া সমস্ত বাটনের একটি অ্যারে'
        },
        {
          en: 'A DOMException indicating access denied',
          bn: 'একটি DOMException যা অ্যাক্সেস অস্বীকৃতি নির্দেশ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'DOM query APIs treat shadow boundaries as encapsulation fences.',
        bn: 'ডম কুয়েরি এপিআই শ্যাডো বাউন্ডারিকে একটি দুর্ভেদ্য প্রাচীর হিসেবে বিবেচনা করে।'
      },
      explanation: {
        en: 'Standard DOM query methods like querySelector and getElementById respect encapsulation boundaries and stop at the host element.',
        bn: 'querySelector এবং getElementById-এর মতো স্ট্যান্ডার্ড মেথডগুলো এনক্যাপসুলেশন মেনে চলে এবং হোস্ট এলিমেন্টেই থেমে যায়।'
      }
    }
  ],
  quiz: {
    id: 'boundary-quiz',
    title: {
      en: 'Shadow DOM & Boundaries Quiz',
      bn: 'শ্যাডো ডম এবং বাউন্ডারি কুইজ'
    },
    questions: [
      {
        id: 'q-attach-shadow-targets',
        kind: 'mcq',
        topic: 'attachShadow capability',
        question: {
          en: 'Can a shadow root be attached to any arbitrary HTML element like <input> or <img>?',
          bn: 'যেকোনো সাধারণ এইচটিএমএল উপাদান যেমন <input> বা <img>-এ কি শ্যাডো রুট যুক্ত করা যায়?'
        },
        options: [
          {
            en: 'No, only custom elements and a specific whitelist of native elements (such as <div>, <article>, <section>) support attachShadow',
            bn: 'না, শুধুমাত্র কাস্টম এলিমেন্টস এবং নেটিভ উপাদানের একটি নির্দিষ্ট তালিকা (যেমন <div>, <article>, <section>) attachShadow সমর্থন করে'
          },
          {
            en: 'Yes, all HTML elements support attaching shadow roots without exception',
            bn: 'হ্যাঁ, সমস্ত এইচটিএমএল উপাদান কোনো ব্যতিক্রম ছাড়াই শ্যাডো রুট সমর্থন করে'
          },
          {
            en: 'Only SVG elements support shadow roots',
            bn: 'শুধুমাত্র এসভিজি (SVG) উপাদান শ্যাডো রুট সমর্থন করে'
          },
          {
            en: 'Only elements declared inside an iframe support shadow roots',
            bn: 'শুধুমাত্র আইফ্রেমের (iframe) ভেতরের উপাদানগুলো শ্যাডো রুট সমর্থন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The specification forbids shadow roots on void elements and form inputs.',
          bn: 'স্পেসিফিকেশন অনুযায়ী ভয়েড এলিমেন্ট ও ফর্ম ইনপুটে শ্যাডো রুট নিষিদ্ধ।'
        },
        explanation: {
          en: 'The DOM standard restricts attachShadow to autonomous custom elements and a safe subset of standard containers like div, span, p, and main. Elements with native internal rendering (like input, img, textarea) reject attachShadow.',
          bn: 'ডম স্ট্যান্ডার্ড অনুযায়ী attachShadow শুধু কাস্টম উপাদান এবং div, span, p-এর মতো নির্দিষ্ট কন্টেইনারে চলে। নিজস্ব রেন্ডারিং থাকা উপাদানে এটি কল করলে ত্রুটি ঘটে।'
        }
      },
      {
        id: 'q-host-context',
        kind: 'mcq',
        topic: 'host-context selector',
        question: {
          en: 'What is the purpose of the :host-context() pseudo-class selector?',
          bn: ':host-context() সিউডো-ক্লাস সিলেক্টরের মূল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To style the component conditionally when an ancestor element matches a selector (such as a parent theme class)',
            bn: 'বাইরের কোনো প্যারেন্ট বা পূর্বপুরুষ উপাদানে নির্দিষ্ট সিলেক্টর (যেমন থিম ক্লাস) থাকলে কম্পোনেন্টকে স্টাইল করা'
          },
          {
            en: 'To query child elements assigned through slots',
            bn: 'স্লটের মাধ্যমে আসা চাইল্ড উপাদানগুলোকে কুয়েরি করা'
          },
          {
            en: 'To inject external stylesheets into third-party iframes',
            bn: 'থার্ড-পার্টি আইফ্রেমে বাইরের স্টাইলশিট ইনজেক্ট করা'
          },
          {
            en: 'To trigger JavaScript event listeners across component instances',
            bn: 'কম্পোনেন্ট ইনস্ট্যান্সের মাঝে জাভাস্ক্রিপ্ট ইভেন্ট লিসেনার চালু করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'It enables adaptive theming based on page context (for example, .theme-dark body).',
          bn: 'এটি পেজের থিমের ওপর ভিত্তি করে কম্পোনেন্টের চেহারা পরিবর্তন করতে সাহায্য করে।'
        },
        explanation: {
          en: ':host-context(s) checks whether the custom element or any of its ancestors match the selector s, enabling context-aware theming.',
          bn: ':host-context(s) পরীক্ষা করে হোস্ট এলিমেন্ট বা তার কোনো প্যারেন্টে সিলেক্টরটি মেলে কি না, যা থিমিংয়ের ক্ষেত্রে অত্যন্ত কার্যকর।'
        }
      },
      {
        id: 'q-open-mode-access',
        kind: 'mcq',
        topic: 'open mode inspection',
        question: {
          en: 'Why do most production design systems prefer open mode over closed mode?',
          bn: 'বেশিরভাগ প্রোডাকশন ডিজাইন সিস্টেম কেন ক্লোজড মোডের চেয়ে ওপেন মোড পছন্দ করে?'
        },
        options: [
          {
            en: 'Open mode allows testing frameworks, DevTools, and automated tooling to inspect and interact with the shadow tree',
            bn: 'ওপেন মোড টেস্টিং ফ্রেমওয়ার্ক, ডেভ-টুলস এবং স্বয়ংক্রিয় টুলগুলোকে শ্যাডো ট্রি পরিদর্শন ও পরীক্ষা করতে দেয়'
          },
          {
            en: 'Open mode renders 50% faster in modern browser engines',
            bn: 'ওপেন মোড আধুনিক ব্রাউজার ইঞ্জিনে ৫০% দ্রুত রেন্ডার হয়'
          },
          {
            en: 'Closed mode prevents any CSS styles from rendering inside the shadow tree',
            bn: 'ক্লোজড মোড শ্যাডো ট্রির ভেতরে যেকোনো সিএসএস স্টাইল রেন্ডার হতে বাধা দেয়'
          },
          {
            en: 'Closed mode is completely deprecated in modern web standards',
            bn: 'আধুনিক ওয়েব স্ট্যান্ডার্ডে ক্লোজড মোড সম্পূর্ণ বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Tooling interoperability and testability are crucial for enterprise UI libraries.',
          bn: 'অটোমেশন ও টেস্টিং সুবিধার জন্য ওপেন মোড অত্যন্ত গুরুত্বপূর্ণ।'
        },
        explanation: {
          en: 'Open mode allows automated test runners like Playwright and Cypress to inspect shadow contents directly while preserving CSS style encapsulation.',
          bn: 'ওপেন মোড সিএসএস এনক্যাপসুলেশন বজায় রেখেও প্লে-রাইট বা সাইপ্রেসের মতো টেস্টিং টুলগুলোকে উপাদান পরীক্ষা করতে দেয়।'
        }
      },
      {
        id: 'q-encapsulation-limits',
        kind: 'mcq',
        topic: 'inherited styles',
        question: {
          en: 'Which types of CSS properties naturally inherit across shadow boundaries from the parent document?',
          bn: 'কোন ধরনের সিএসএস প্রপার্টি প্যারেন্ট ডকুমেন্ট থেকে স্বাভাবিকভাবে শ্যাডো বাউন্ডারি ভেদ করে ইনহেরিট হয়?'
        },
        options: [
          {
            en: 'Inheritable text properties like color, font-family, and CSS custom properties (variables)',
            bn: 'ইনহেরিটেবল টেক্সট প্রপার্টি যেমন color, font-family এবং CSS কাস্টম প্রপার্টি (ভেরিয়েবল)'
          },
          {
            en: 'Box-model properties like padding, margin, border, and width',
            bn: 'বক্স-মডেল প্রপার্টি যেমন padding, margin, border এবং width'
          },
          {
            en: 'Positioning properties like top, left, and position: absolute',
            bn: 'পজিশনিং প্রপার্টি যেমন top, left এবং position: absolute'
          },
          {
            en: 'Zero CSS properties can penetrate a shadow boundary under any condition',
            bn: 'কোনো সিএসএস প্রপার্টি কোনো অবস্থাতেই শ্যাডো বাউন্ডারি ভেদ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Typography and design tokens cascade downward by default in CSS.',
          bn: 'টাইপোগ্রাফি এবং কালার টোকেন সিএসএসে স্বাভাবিকভাবেই নিচের দিকে প্রবাহিত হয়।'
        },
        explanation: {
          en: 'Properties that naturally inherit across DOM trees (such as font-family and color) and CSS custom properties (--*) traverse shadow boundaries to allow global typography and theming.',
          bn: 'যেসব প্রপার্টি স্বাভাবিকভাবেই বংশানুক্রমিক (যেমন ফন্ট এবং কালার) এবং সিএসএস ভেরিয়েবলগুলো থিমিংয়ের সুবিধার্থে শ্যাডো বাউন্ডারি পার হতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'doors-in-the-wall',
    title: {
      en: 'Templates & Slots — Content Projection, Named Slots, and the ::slotted Pseudo-Element',
      bn: 'টেমপ্লেট ও স্লট — কন্টেন্ট প্রজেকশন, নেইমড স্লট এবং ::slotted সিউডো-এলিমেন্ট'
    }
  }
};
