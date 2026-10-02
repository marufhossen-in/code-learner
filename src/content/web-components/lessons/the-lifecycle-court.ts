import type { Lesson } from '../../../lib/types';

export const TheLifecycleCourtLesson: Lesson = {
  slug: 'the-lifecycle-court',
  tech: 'web-components',
  title: {
    en: 'Component Lifecycle — connectedCallback, disconnectedCallback, and observedAttributes',
    bn: 'কম্পোনেন্ট লাইফসাইকেল — connectedCallback, disconnectedCallback এবং observedAttributes'
  },
  summary: {
    en: 'Web Components provide four standardized lifecycle hooks that execute at distinct phases of an element existence. In this lesson, we explore connectedCallback for DOM setup, disconnectedCallback for memory leak teardown, observedAttributes and attributeChangedCallback for reactive updates, and adoptedCallback for document migration across iframes.',
    bn: 'ওয়েব কম্পোনেন্টস চারটি স্ট্যান্ডার্ড লাইফসাইকেল হুক সরবরাহ করে যা একটি উপাদানের বিভিন্ন ধাপে স্বয়ংক্রিয়ভাবে কার্যকর হয়। এই পাঠে আমরা ডম সংযোগের জন্য connectedCallback, মেমোরি লিক রোধে disconnectedCallback, রিয়্যাক্টিভ আপডেটের জন্য observedAttributes ও attributeChangedCallback এবং আইফ্রেমের মাঝে স্থানান্তরের জন্য adoptedCallback বিস্তারিত শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'lifecycle-overview',
      text: {
        en: 'The Four Native Lifecycle Callbacks',
        bn: 'চারটি নেটিভ লাইফসাইকেল কলব্যাক'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you manage interactive widgets, you must initialize resources when the element enters the screen and release them when it leaves. Standard custom elements rely on four lifecycle callbacks to handle mounting, unmounting, attribute updates, and document adoption safely.',
        bn: 'ইন্টারেক্টিভ উইজেট নিয়ন্ত্রণের সময় পেজে উপাদান যুক্ত হলে রিসোর্স চালু করা এবং উপাদান মুছে গেলে তা বন্ধ করা আবশ্যক। স্ট্যান্ডার্ড কাস্টম এলিমেন্ট এই মাউন্টিং, আনমাউন্টিং, অ্যাট্রিবিউট পরিবর্তন ও ডকুমেন্ট স্থানান্তর পরিচালনার জন্য চারটি নির্দিষ্ট লাইফসাইকেল কলব্যাক ব্যবহার করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'connectedCallback()',
          def: {
            en: 'Invoked each time the custom element is appended into a document-connected DOM tree.',
            bn: 'কাস্টম উপাদানটি যখনই একটি সক্রিয় ডকুমেন্টের ডম ট্রিতে যুক্ত হয়, তখনই এই মেথডটি কার্যকর হয়।'
          }
        },
        {
          term: 'disconnectedCallback()',
          def: {
            en: 'Invoked each time the custom element is detached or removed from the live document.',
            bn: 'কাস্টম উপাদানটি যখনই লাইভ ডকুমেন্ট থেকে বিচ্ছিন্ন বা অপসারণ করা হয়, তখনই এই মেথডটি কার্যকর হয়।'
          }
        },
        {
          term: 'attributeChangedCallback()',
          def: {
            en: 'Invoked whenever an attribute listed in observedAttributes is added, modified, or removed.',
            bn: 'observedAttributes তালিকায় উল্লেখিত কোনো অ্যাট্রিবিউটের মান যোগ, পরিবর্তন বা মুছে ফেলা হলে এটি কার্যকর হয়।'
          }
        },
        {
          term: 'static observedAttributes',
          def: {
            en: 'A static getter returning an array of attribute names that the browser must monitor for changes.',
            bn: 'একটি স্ট্যাটিক গেটার যা এমন অ্যাট্রিবিউট নামের তালিকা প্রদান করে যার পরিবর্তনের ওপর ব্রাউজার নজর রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'lifecycle-best-practices',
      text: {
        en: 'Setup, Teardown, and Memory Hygiene',
        bn: 'সেটআপ, টিয়ারডাউন এবং মেমোরি সুরক্ষা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Defer Work to connectedCallback: Avoid fetching data or rendering initial DOM inside constructor(). Perform data loading and event attachment inside connectedCallback when element ancestry is stable.',
          bn: '১. কাজ connectedCallback-এ রাখুন: constructor()-এর ভেতরে ডেটা ফেচ বা ডম রেন্ডারিং এড়িয়ে চলুন। এলিমেন্টের অবস্থান ডমে নিশ্চিত হলে connectedCallback-এর ভেতর ডেটা লোড ও ইভেন্ট যুক্ত করুন।'
        },
        {
          en: '2. Clean Up in disconnectedCallback: Always clear setInterval timers, disconnect MutationObservers, and remove window resize listeners inside disconnectedCallback to prevent memory leaks.',
          bn: '২. disconnectedCallback-এ রিসোর্স মুছুন: মেমোরি লিক রোধ করতে disconnectedCallback-এর ভেতরে সর্বদা setInterval টাইমার বন্ধ করুন এবং উইন্ডো লিসেনার বা অবজার্ভার রিমুভ করুন।'
        },
        {
          en: '3. Moves Trigger Both Hooks: When a node is moved using parentNode.appendChild(node), the browser invokes disconnectedCallback first and then immediately fires connectedCallback.',
          bn: '৩. স্থানান্তরে উভয় হুক রান হয়: যখন parentNode.appendChild(node) দিয়ে একটি উপাদান সরানো হয়, ব্রাউজার প্রথমে disconnectedCallback চালায় এবং পরে সাথে সাথে connectedCallback চালায়।'
        },
        {
          en: '4. Guard Against Self-Triggers: Inside attributeChangedCallback, check if oldValue === newValue before updating state to avoid infinite rendering cycles.',
          bn: '৪. পুনরাবৃত্তি রোধ করুন: অনন্ত লুপ বা ইনফিনিট সাইকেল এড়াতে attributeChangedCallback-এর শুরুতে oldValue === newValue কি না তা যাচাই করে নিন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'A Reactive Live Timer Component',
        bn: 'একটি রিয়্যাক্টিভ লাইভ টাইমার কম্পোনেন্ট'
      }
    },
    {
      type: 'code',
      code: `// 1. Create a reactive timer custom element
class LiveTimer extends HTMLElement {
  static get observedAttributes() {
    return ['interval'];
  }

  constructor() {
    super();
    this.seconds = 0;
    this.timerId = null;
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    const delay = parseInt(this.getAttribute('interval') || '1000', 10);
    this.render();
    this.timerId = setInterval(() => {
      this.seconds += 1;
      this.render();
      console.log('Timer tick:', this.seconds);
    }, delay);
  }

  disconnectedCallback() {
    // Teardown timer to prevent background memory leaks
    if (this.timerId) {
      clearInterval(this.timerId);
      this.timerId = null;
      console.log('Timer cleared successfully');
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;
    if (name === 'interval' && this.timerId) {
      // Restart timer with new interval duration
      clearInterval(this.timerId);
      this.connectedCallback();
      console.log('Interval updated:', newValue);
    }
  }

  render() {
    this.shadowRoot.innerHTML = \`<span>Elapsed: \${this.seconds}s</span>\`;
  }
}

customElements.define('live-timer', LiveTimer);

// 2. Mount and verify lifecycle execution
const timer = document.createElement('live-timer');
timer.setAttribute('interval', '500');
document.body.appendChild(timer);
// -> Timer tick: 1

// 3. Remove node to verify teardown
document.body.removeChild(timer);
// -> Timer cleared successfully`,
      caption: {
        en: 'Managing timers and state updates with 1000ms fallback interval',
        bn: '১০০০ মিলিসেকেন্ড ফলব্যাক ব্যবধানে টাইমার ও স্টেট নিয়ন্ত্রণ করা'
      }
    },
    {
      type: 'heading',
      id: 'attributes-vs-properties',
      text: {
        en: 'Reflecting Properties to Attributes',
        bn: 'প্রোপার্টি ও অ্যাট্রিবিউটের মধ্যকার প্রতিফলন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'HTML attributes are serialized strings in the markup, while JavaScript properties are live memory values. Idiomatic custom elements maintain synchronization between properties and observed attributes using getters and setters.',
        bn: 'এইচটিএমএল অ্যাট্রিবিউট মূলত মার্কআপে থাকা টেক্সট স্ট্রিং, আর জাভাস্ক্রিপ্ট প্রোপার্টি হলো লাইভ মেমোরি ভ্যালু। আদর্শ কাস্টম এলিমেন্ট গেটার এবং সেটার ব্যবহার করে প্রোপার্টি ও অ্যাট্রিবিউটের মধ্যে স্বয়ংক্রিয় সমন্বয় বজায় রাখে।'
      }
    },
    {
      type: 'compare',
      left: {
        title: {
          en: 'HTML Attributes',
          bn: 'এইচটিএমএল অ্যাট্রিবিউট'
        },
        points: [
          {
            en: 'Written directly inside HTML markup: <live-timer interval="500">.',
            bn: 'সরাসরি এইচটিএমএল মার্কআপে লেখা হয়: <live-timer interval="500">।'
          },
          {
            en: 'Values are always strings or boolean presence indicators.',
            bn: 'মানগুলো সর্বদা স্ট্রিং অথবা কেবল উপস্থিতির নির্দেশক হয়।'
          },
          {
            en: 'Changes trigger attributeChangedCallback if declared in observedAttributes.',
            bn: 'observedAttributes-এ তালিকাভুক্ত থাকলে এর পরিবর্তন কলব্যাক সক্রিয় করে।'
          },
          {
            en: 'Inspected with getAttribute() and set with setAttribute().',
            bn: 'getAttribute() দিয়ে মান দেখা যায় এবং setAttribute() দিয়ে সেট করা হয়।'
          }
        ]
      },
      right: {
        title: {
          en: 'JavaScript Properties',
          bn: 'জাভাস্ক্রিপ্ট প্রোপার্টি'
        },
        points: [
          {
            en: 'Accessed via dot notation: element.interval = 500.',
            bn: 'ডট নোটেশন দিয়ে অ্যাক্সেস করা হয়: element.interval = 500।'
          },
          {
            en: 'Can hold complex types like objects, arrays, and functions.',
            bn: 'অবজেক্ট, অ্যারে ও ফাংশনের মতো জটিল ডেটা টাইপ ধারণ করতে পারে।'
          },
          {
            en: 'Getters and setters reflect updates back to setAttribute() when needed.',
            bn: 'প্রয়োজনে গেটার ও সেটার সেগুলোকে setAttribute()-এ সিঙ্ক করে নেয়।'
          },
          {
            en: 'Fast execution in memory without DOM string serialization overhead.',
            bn: 'স্ট্রিং রূপান্তর ছাড়া দ্রুত মেমোরিতে সরাসরি কার্যকর হয়।'
          }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'wc-life-ex1',
      kind: 'mcq',
      topic: 'connectedCallback role',
      question: {
        en: 'What is the primary responsibility of the connectedCallback() method?',
        bn: 'connectedCallback() মেথডের প্রধান দায়িত্ব কী?'
      },
      options: [
        {
          en: 'Initializing DOM nodes, starting timers, and attaching event listeners when inserted into the document',
          bn: 'ডকুমেন্টে যুক্ত হওয়ার পর ডম নোড তৈরি করা, টাইমার চালু করা এবং ইভেন্ট লিসেনার সেটআপ করা'
        },
        {
          en: 'Registering the custom tag with the browser customElements registry',
          bn: 'ব্রাউজারের কাস্টম এলিমেন্টস রেজিস্ট্রিতে নতুন ট্যাগটি রেজিস্টার করা'
        },
        {
          en: 'Compiling SCSS stylesheets into minified CSS rules',
          bn: 'SCSS স্টাইলশিটকে মিনিফাইড সিএসএস রুলে কম্পাইল করা'
        },
        {
          en: 'Overriding constructor prototype inheritance methods',
          bn: 'কনস্ট্রাক্টরের প্রোটোটাইপ ইনহেরিটেন্স মেথডগুলো ওভাররাইড করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'connectedCallback fires once the node is attached to the active document.',
        bn: 'নোডটি সক্রিয় ডকুমেন্টে যুক্ত হওয়ার পর connectedCallback চালু হয়।'
      },
      explanation: {
        en: 'connectedCallback is the lifecycle hook for DOM setup. Because the element is now connected to the DOM tree, it can safely query parents, render children, and subscribe to external events.',
        bn: 'connectedCallback ডম সেটআপের জন্য ব্যবহৃত হয়। এলিমেন্টটি পেজে যুক্ত থাকায় এটি নিরাপদে পেরেন্ট দেখতে পারে এবং ইভেন্ট লিসেনার যুক্ত করতে পারে।'
      }
    },
    {
      id: 'wc-life-ex2',
      kind: 'mcq',
      topic: 'disconnectedCallback cleanup',
      question: {
        en: 'What occurs if a component forgets to remove a window scroll event listener in disconnectedCallback()?',
        bn: 'একটি উপাদান যদি disconnectedCallback()-এ উইন্ডো স্ক্রল লিসেনার সরাতে ভুলে যায় তবে কী ঘটে?'
      },
      options: [
        {
          en: 'A memory leak occurs because the window listener retains a reference to the unmounted element',
          bn: 'একটি মেমোরি লিক ঘটে কারণ উইন্ডো লিসেনারটি সরানো উপাদানের রেফারেন্স ধরে রাখে'
        },
        {
          en: 'The browser immediately halts JavaScript execution with a FatalError',
          bn: 'ব্রাউজার সাথে সাথে FatalError দিয়ে জাভাস্ক্রিপ্ট চালানো বন্ধ করে দেয়'
        },
        {
          en: 'The element automatically reattaches itself back to document.body',
          bn: 'উপাদানটি স্বয়ংক্রিয়ভাবে document.body-তে আবার যুক্ত হয়ে যায়'
        },
        {
          en: 'All other event listeners on the webpage are deleted',
          bn: 'ওয়েবপেজের অন্যান্য সমস্ত ইভেন্ট লিসেনার নিজে থেকেই মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Retained references on global objects prevent garbage collection.',
        bn: 'গ্লোবাল অবজেক্টে আটকে থাকা রেফারেন্সের কারণে মেমোরি খালি হতে পারে না।'
      },
      explanation: {
        en: 'Window or document-level listeners keep references to the detached component in memory. Without cleanup in disconnectedCallback, garbage collection is prevented, causing memory leaks.',
        bn: 'উইন্ডো বা ডকুমেন্ট লেভেলের লিসেনার উপাদানটির রেফারেন্স ধরে রাখে। disconnectedCallback-এ এটি না সরালে গার্বেজ কালেক্টর মেমোরি মুক্ত করতে পারে না।'
      }
    },
    {
      id: 'wc-life-ex3',
      kind: 'mcq',
      topic: 'observedAttributes static getter',
      question: {
        en: 'Why must observedAttributes be declared as a static getter on the class?',
        bn: 'observedAttributes কেন ক্লাসে একটি স্ট্যাটিক গেটার হিসেবে ঘোষণা করতে হয়?'
      },
      options: [
        {
          en: 'The browser checks observed attributes on the class definition before any instances are constructed',
          bn: 'কোনো ইনস্ট্যান্স তৈরি হওয়ার আগেই ব্রাউজার ক্লাস থেকে পর্যবেক্ষণযোগ্য অ্যাট্রিবিউট তালিকা পড়ে নেয়'
        },
        {
          en: 'Static getters execute inside a dedicated background service worker',
          bn: 'স্ট্যাটিক গেটার ব্যাকগ্রাউন্ড সার্ভিস ওয়ার্কারের ভেতরে রান হয়'
        },
        {
          en: 'To make the attribute values private and unchangeable by users',
          bn: 'অ্যাট্রিবিউটের মানগুলোকে প্রাইভেট করে ব্যবহারকারীর পরিবর্তন রোধ করতে'
        },
        {
          en: 'It is optional; an instance property provides the same behavior',
          bn: 'এটি বাধ্যতামূলক নয়; ইনস্ট্যান্স প্রোপার্টি দিয়েও একই কাজ করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The registry reads this property directly off the constructor.',
        bn: 'রেজিস্ট্রি সরাসরি কনস্ট্রাক্টর ফাংশন থেকে এই প্রোপার্টিটি পড়ে।'
      },
      explanation: {
        en: 'When customElements.define registers a component, the browser reads Constructor.observedAttributes to register attribute mutation hooks ahead of time.',
        bn: 'customElements.define যখন একটি কম্পোনেন্ট রেজিস্টার করে, ব্রাউজার আগেই Constructor.observedAttributes পড়ে মিউটেশন হুক প্রস্তুত করে।'
      }
    },
    {
      id: 'wc-life-ex4',
      kind: 'mcq',
      topic: 'moving nodes lifecycle order',
      question: {
        en: 'When document.body.appendChild(existingElement) moves an element, in what order do callbacks fire?',
        bn: 'document.body.appendChild(existingElement) দিয়ে একটি উপাদান সরালে কলব্যাকগুলো কোন ক্রমে চালু হয়?'
      },
      options: [
        {
          en: 'disconnectedCallback fires first from its old position, followed by connectedCallback in its new position',
          bn: 'পুরোনো স্থান থেকে প্রথমে disconnectedCallback চলে, এরপর নতুন স্থানে connectedCallback চলে'
        },
        {
          en: 'connectedCallback fires first, followed by disconnectedCallback',
          bn: 'প্রথমে connectedCallback চলে, এরপর disconnectedCallback চলে'
        },
        {
          en: 'Only adoptedCallback fires because the node moved within the page',
          bn: 'শুধুমাত্র adoptedCallback চলে কারণ নোডটি পেজের ভেতরেই নড়াচড়া করেছে'
        },
        {
          en: 'Neither callback fires because the element was not created anew',
          bn: 'কোনো কলব্যাকই চলে না কারণ উপাদানটি নতুন করে তৈরি করা হয়নি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Moving a node detaches it from its prior parent before inserting it into the new one.',
        bn: 'একটি নোড সরালে নতুন স্থানে ঢোকানোর আগে পুরোনো স্থান থেকে এটি বিচ্ছিন্ন হয়।'
      },
      explanation: {
        en: 'DOM appendChild automatically removes the node from its previous parent first (firing disconnectedCallback) and then inserts it into the new parent (firing connectedCallback).',
        bn: 'appendChild মেথড উপাদানটিকে প্রথমে পুরোনো পেরেন্ট থেকে আলাদা করে (disconnectedCallback চালু করে) এবং পরে নতুন পেরেন্টে যুক্ত করে (connectedCallback চালু করে)।'
      }
    }
  ],
  quiz: {
    id: 'lifecycle-quiz',
    title: {
      en: 'Lifecycle & State Management Quiz',
      bn: 'লাইফসাইকেল ও স্টেট ম্যানেজমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'q-adopted-callback',
        kind: 'mcq',
        topic: 'adoptedCallback use cases',
        question: {
          en: 'Under what specific condition is adoptedCallback() triggered?',
          bn: 'কোন নির্দিষ্ট পরিস্থিতিতে adoptedCallback() কার্যকর হয়?'
        },
        options: [
          {
            en: 'When an element is moved to a different document using document.adoptNode() (such as across iframes)',
            bn: 'যখন document.adoptNode() ব্যবহার করে একটি উপাদানকে অন্য ডকুমেন্টে (যেমন আইফ্রেমের মাঝে) স্থানান্তর করা হয়'
          },
          {
            en: 'When a parent component passes new children into a slot',
            bn: 'যখন কোনো পেরেন্ট কম্পোনেন্ট স্লটের ভেতরে নতুন চাইল্ড উপাদান পাঠায়'
          },
          {
            en: 'When the browser adopts modern ES2026 JavaScript features',
            bn: 'যখন ব্রাউজার আধুনিক জাভাস্ক্রিপ্ট ফিচার গ্রহণ করে'
          },
          {
            en: 'When a CSS media query transitions from light to dark theme',
            bn: 'যখন সিএসএস মিডিয়া কুয়েরি লাইট থেকে ডার্ক থিমে পরিবর্তিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Document ownership changes happen when elements cross iframe boundaries.',
          bn: 'আইফ্রেম সীমানা পার হওয়ার সময় ডকুমেন্টের মালিকানা পরিবর্তিত হয়।'
        },
        explanation: {
          en: 'adoptedCallback is dedicated to document boundary changes. When an element is adopted from an iframe or external document via adoptNode(), this callback executes.',
          bn: 'adoptedCallback শুধুমাত্র ডকুমেন্টের সীমানা পরিবর্তনের জন্য ব্যবহৃত হয়। adoptNode() দিয়ে আইফ্রেম থেকে উপাদান আনলে এই মেথড চালু হয়।'
        }
      },
      {
        id: 'q-attribute-changed-unlisted',
        kind: 'mcq',
        topic: 'unlisted attribute mutations',
        question: {
          en: 'What happens when setAttribute("data-count", "5") is called for an attribute not in observedAttributes?',
          bn: 'observedAttributes-এ না থাকা কোনো অ্যাট্রিবিউটে setAttribute("data-count", "5") কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'The DOM attribute updates normally, but attributeChangedCallback is never called',
            bn: 'ডম অ্যাট্রিবিউটটি স্বাভাবিকভাবেই আপডেট হয়, কিন্তু attributeChangedCallback কখনোই চালু হয় না'
          },
          {
            en: 'The browser throws an UnobservedAttributeError exception',
            bn: 'ব্রাউজার একটি UnobservedAttributeError এক্সেপশন প্রদান করে'
          },
          {
            en: 'The attribute value is discarded and reset to empty string',
            bn: 'অ্যাট্রিবিউটের মান বাতিল হয়ে খালি স্ট্রিংয়ে পরিণত হয়'
          },
          {
            en: 'The component is unmounted and disconnected immediately',
            bn: 'কম্পোনেন্টটি সাথে সাথে আনমাউন্ট ও বিচ্ছিন্ন হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Only registered observed attributes notify the component of changes.',
          bn: 'শুধুমাত্র তালিকায় থাকা অ্যাট্রিবিউটগুলোই পরিবর্তন হলে কম্পোনেন্টকে জানায়।'
        },
        explanation: {
          en: 'Attributes not returned by static get observedAttributes() are modified silently on the DOM node. The browser does not dispatch attributeChangedCallback for unobserved names.',
          bn: 'observedAttributes-এ না থাকা নামগুলোর মান ডমে পরিবর্তিত হলেও ব্রাউজার কোনো attributeChangedCallback কল করে না।'
        }
      },
      {
        id: 'q-attribute-changed-upgrade',
        kind: 'mcq',
        topic: 'initial attributeChangedCallback timing',
        question: {
          en: 'Does attributeChangedCallback() fire during initial element upgrade for attributes already present in HTML?',
          bn: 'এইচটিএমএলে পূর্ব থেকেই থাকা অ্যাট্রিবিউটের জন্য এলিমেন্ট আপগ্রেডের সময় কি attributeChangedCallback() চালু হয়?'
        },
        options: [
          {
            en: 'Yes, it fires once during upgrade with oldValue set to null and newValue set to the HTML attribute value',
            bn: 'হ্যাঁ, আপগ্রেডের সময় oldValue-তে null এবং newValue-তে পূর্বের মান নিয়ে এটি একবার চালু হয়'
          },
          {
            en: 'No, it only fires on subsequent mutations initiated after connectedCallback completes',
            bn: 'না, connectedCallback শেষ হওয়ার পরে করা পরিবর্তনের জন্যই কেবল এটি চালু হয়'
          },
          {
            en: 'Only if the attribute was declared with the data- prefix in HTML',
            bn: 'শুধুমাত্র যদি এইচটিএমএলে অ্যাট্রিবিউটটি data- প্রিফিক্স দিয়ে লেখা হয়ে থাকে'
          },
          {
            en: 'It fires only after a user interaction event like a button click',
            bn: 'এটি শুধুমাত্র বাটনে ক্লিকের মতো ব্যবহারকারীর কোনো ইন্টারঅ্যাকশনের পর চালু হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Upgrading an element syncs initial declarative attribute values.',
          bn: 'এলিমেন্ট আপগ্রেড হওয়ার সময় প্রাথমিক অ্যাট্রিবিউট মানগুলো সমন্বয় হয়।'
        },
        explanation: {
          en: 'When an element with observed attributes is upgraded, the browser invokes attributeChangedCallback for each matching attribute present, setting oldValue to null.',
          bn: 'পূর্বে ঘোষিত অ্যাট্রিবিউটসহ কোনো উপাদান আপগ্রেড হলে ব্রাউজার oldValue নাল (null) রেখে প্রতিটির জন্য এই কলব্যাকটি চালায়।'
        }
      },
      {
        id: 'q-property-attribute-sync',
        kind: 'mcq',
        topic: 'preventing infinite update loops',
        question: {
          en: 'How do custom element setters prevent infinite loops when reflecting property changes to setAttribute()?',
          bn: 'প্রোপার্টি পরিবর্তনের সময় setAttribute() কল করলে যাতে ইনফিনিট লুপ না হয়, তা কীভাবে রোধ করা হয়?'
        },
        options: [
          {
            en: 'By checking if the current attribute value matches the new value before invoking setAttribute()',
            bn: 'setAttribute() কল করার পূর্বে বর্তমান মান ও নতুন মান একই কি না তা যাচাই করার মাধ্যমে'
          },
          {
            en: 'By wrapping all setters inside a setTimeout(fn, 1000) delay',
            bn: 'সমস্ত সেটারকে ১০০০ মিলিসেকেন্ডের setTimeout দিয়ে মুড়ে রাখার মাধ্যমে'
          },
          {
            en: 'By deleting the attribute before setting the property',
            bn: 'প্রোপার্টি সেট করার আগে অ্যাট্রিবিউটটি সম্পূর্ণরূপে মুছে ফেলে'
          },
          {
            en: 'Infinite loops are impossible in Web Components by browser design',
            bn: 'ব্রাউজারের নিজস্ব নকশার কারণে ওয়েব কম্পোনেন্টে ইনফিনিট লুপ হওয়া অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'A simple value equality check breaks cyclic trigger cascades.',
          bn: 'মান সমান কি না তা যাচাই করলেই চক্রাকার লুপ ভেঙে যায়।'
        },
        explanation: {
          en: 'Without an equality guard (if this.getAttribute("prop") === String(val) return;), setting a property calls setAttribute, which triggers attributeChangedCallback, which sets the property again infinitely.',
          bn: 'মান সমান কি না তা পরীক্ষা না করলে সেটার থেকে setAttribute এবং setAttribute থেকে আবার সেটার এভাবে অনন্ত সাইকেল তৈরি হতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'paint-behind-glass',
    title: {
      en: 'Shadow DOM Styling — CSS Variables, ::part, and Constructable Stylesheets',
      bn: 'শ্যাডো ডম স্টাইলিং — সিএসএস ভেরিয়েবল, ::part এবং কনস্ট্রাক্টেবল স্টাইলশিট'
    }
  }
};
