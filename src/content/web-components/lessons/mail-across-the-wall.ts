import type { Lesson } from '../../../lib/types';

export const MailAcrossTheWallLesson: Lesson = {
  slug: 'mail-across-the-wall',
  tech: 'web-components',
  title: {
    en: 'Custom Events & Retargeting — Crossing the Shadow Boundary with composed and bubbles',
    bn: 'কাস্টম ইভেন্টস ও রিটার্গেটিং — composed এবং bubbles দিয়ে শ্যাডো বাউন্ডারি অতিক্রম'
  },
  summary: {
    en: 'Events provide the primary mechanism for Web Components to communicate state changes to parent applications. In this lesson, we explore how events traverse the shadow boundary, how the composed and bubbles flags control event propagation, how the browser automatically retargets event.target to preserve encapsulation. And how event.composedPath() inspects the full dispatch chain.',
    bn: 'ইভেন্টস হলো ওয়েব কম্পোনেন্টের স্টেট পরিবর্তন মূল অ্যাপ্লিকেশনে জানানোর প্রধান মাধ্যম। এই পাঠে আমরা শিখব কীভাবে ইভেন্ট শ্যাডো বাউন্ডারি পার হয়, কীভাবে composed এবং bubbles ফ্ল্যাগ ইভেন্ট বিস্তার নিয়ন্ত্রণ করে। কীভাবে ব্রাউজার স্বয়ংক্রিয়ভাবে event.target রিটার্গেট করে এনক্যাপসুলেশন বজায় রাখে এবং event.composedPath() দিয়ে সম্পূর্ণ ডিসপ্যাচ রুট কীভাবে দেখা যায়।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'events-overview',
      text: {
        en: 'Events Across Encapsulated Trees',
        bn: 'এনক্যাপসুলেটেড ট্রিতে ইভেন্ট পরিচালনা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build modular interfaces, an internal button inside a shadow root needs to notify the outer page without exposing internal implementation details. The DOM (Document Object Model) event system solves this through two fundamental mechanisms: the composed property flag and automatic event retargeting.',
        bn: 'মডুলার ইন্টারফেস তৈরির সময় শ্যাডো রুটের ভেতরের কোনো বাটনে ক্লিক হলে বাইরের পেজকে তা জানানো প্রয়োজন, কিন্তু ভেতরের সংবেদনশীল গঠন গোপন রাখা জরুরি। ব্রাউজারের DOM (ডকুমেন্ট অবজেক্ট মডেল) ইভেন্ট সিস্টেম এই সমস্যার সমাধান করে দুটি মূল উপায়ে: composed প্রোপার্টি ফ্ল্যাগ এবং স্বয়ংক্রিয় ইভেন্ট রিটার্গেটিং।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Event Retargeting',
          def: {
            en: 'The browser mechanism that rewrites event.target to the host custom element when an event crosses from shadow DOM to light DOM.',
            bn: 'ব্রাউজারের এমন একটি প্রক্রিয়া যার মাধ্যমে ইভেন্ট শ্যাডো ডম থেকে বাইরের লাইট ডমে আসার সময় event.target স্বয়ংক্রিয়ভাবে হোস্ট এলিমেন্টে রূপান্তরিত হয়।'
          }
        },
        {
          term: 'composed: true',
          def: {
            en: 'A boolean option on CustomEvent that permits the event to cross through shadow root boundaries out into the containing document.',
            bn: 'CustomEvent-এর একটি বুলিয়ান অপশন যা সত্য (true) থাকলে ইভেন্টটি শ্যাডো রুট বাউন্ডারি পার হয়ে বাইরের ডকুমেন্টে প্রবেশ করতে পারে।'
          }
        },
        {
          term: 'bubbles: true',
          def: {
            en: 'A boolean option on CustomEvent that allows the event to bubble upward through ancestor parent nodes.',
            bn: 'CustomEvent-এর একটি বুলিয়ান অপশন যা সত্য (true) থাকলে ইভেন্টটি পেরেন্ট নোডগুলোর মধ্য দিয়ে উপরের দিকে বাবল হতে পারে।'
          }
        },
        {
          term: 'event.composedPath()',
          def: {
            en: 'A method returning an ordered array of DOM nodes through which the event travels during its dispatch phase.',
            bn: 'একটি মেথড যা ইভেন্টটি চলার সময় যে যে ডম নোড অতিক্রম করে তাদের ক্রমানুসারে সাজানো একটি অ্যারে প্রদান করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'bubbles-vs-composed',
      text: {
        en: 'The Four Permutations of bubbles and composed',
        bn: 'bubbles এবং composed-এর চারটি কম্বিনেশন'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Configuration', bn: 'কনফিগারেশন' },
        { en: 'Propagation Boundary', bn: 'বিস্তারের সীমা' },
        { en: 'Typical Use Case', bn: 'সাধারণ ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'bubbles: false, composed: false', bn: 'bubbles: false, composed: false' },
          { en: 'Fires only on the dispatching node; stops immediately', bn: 'শুধুমাত্র মূল নোডে চালু হয়; সাথে সাথে থেমে যায়' },
          { en: 'Internal private component lifecycle notices', bn: 'কম্পোনেন্টের একান্ত ভেতরের লাইফসাইকেল বিজ্ঞপ্তি' }
        ],
        [
          { en: 'bubbles: true, composed: false', bn: 'bubbles: true, composed: false' },
          { en: 'Bubbles up inside the shadow root; stops at the shadowRoot boundary', bn: 'শ্যাডো রুটের ভেতর উপরে বাবল হয়; শ্যাডো বাউন্ডারিতে থেমে যায়' },
          { en: 'Sub-component coordination inside a single shadow tree', bn: 'একটি শ্যাডো ট্রির ভেতরের সাব-উপাদানগুলোর মাঝে যোগাযোগ' }
        ],
        [
          { en: 'bubbles: true, composed: true', bn: 'bubbles: true, composed: true' },
          { en: 'Bubbles inside the shadow root and escapes out into the document body', bn: 'শ্যাডো রুটে বাবল হয়ে বাইরের ডকুমেন্ট বডিতে ছড়িয়ে পড়ে' },
          { en: 'Standard UI events like user-change, item-selected, or modal-closed', bn: 'স্ট্যান্ডার্ড ইউআই ইভেন্ট যেমন মান পরিবর্তন বা মডাল বন্ধ হওয়া' }
        ],
        [
          { en: 'bubbles: false, composed: true', bn: 'bubbles: false, composed: true' },
          { en: 'Escapes directly to the host element without bubbling further', bn: 'বাবল না হয়ে সরাসরি হোস্ট উপাদানে গিয়ে থামে' },
          { en: 'Direct host-level notifications without ancestor noise', bn: 'অ্যান্সেস্টর নোডকে বিরক্ত না করে শুধু হোস্টে সরাসরি বার্তা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Dispatching and Handling Retargeted Events',
        bn: 'রিটার্গেটেড ইভেন্ট ডিসপ্যাচ ও হ্যান্ডেল করার ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `// 1. Create a counter component that dispatches composed events
class UserCounter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = \`
      <style>
        button {
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid #94a3b8;
          cursor: pointer;
        }
      </style>
      <button class="inc-btn">+ Increment</button>
      <span class="val">0</span>
    \`;

    const incBtn = shadow.querySelector('.inc-btn');
    const valDisplay = shadow.querySelector('.val');

    incBtn.addEventListener('click', (e) => {
      this.count += 1;
      valDisplay.textContent = this.count;

      // 2. Dispatch a composed and bubbling CustomEvent
      this.dispatchEvent(new CustomEvent('counter-change', {
        detail: { count: this.count, step: 1 },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('user-counter', UserCounter);

// 3. Mount instance and listen from outer document
const counter = document.createElement('user-counter');
document.body.appendChild(counter);

document.body.addEventListener('counter-change', (e) => {
  // Retargeting: outer listener sees host as target, not internal button
  console.log('Event heard outside on:', e.target.tagName);
  // -> Event heard outside on: USER-COUNTER
  console.log('Counter payload:', e.detail.count);
  // -> Counter payload: 1
  console.log('Path length:', e.composedPath().length > 0);
  // -> Path length: true
});

// Trigger click on internal button
counter.shadowRoot.querySelector('.inc-btn').click();`,
      caption: {
        en: 'Dispatching custom counter-change event with step 1 and composed retargeting',
        bn: '১ ধাপ ব্যবধানে counter-change কাস্টম ইভেন্ট ডিসপ্যাচ ও রিটার্গেটিং প্রদর্শন'
      }
    },
    {
      type: 'heading',
      id: 'composed-path-inspection',
      text: {
        en: 'Inspecting event.composedPath()',
        bn: 'event.composedPath() পরিদর্শন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The event.composedPath() method returns the complete hierarchy of nodes traversed by the event. In open mode, listeners can inspect the full chain from the initiating button up to window. In closed mode, nodes inside the closed shadow tree are concealed from outside listeners.',
        bn: 'event.composedPath() মেথডটি ইভেন্টটি যে যে নোড অতিক্রম করেছে তার সম্পূর্ণ তালিকা প্রদান করে। ওপেন মোডে বাইরের লিসেনারও ভেতরের নোড থেকে শুরু করে window পর্যন্ত সম্পূর্ণ পথ দেখতে পারে। কিন্তু ক্লোজড মোডে বাইরের লিসেনারদের কাছ থেকে ভেতরের নোডগুলো ছাঁটাই করে গোপন রাখা হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Event Target Outside: For outside listeners, event.target is always rewritten to the host element, hiding which internal element was clicked.',
          bn: '১. বাইরের ইভেন্ট টার্গেট: বাইরের লিসেনারদের জন্য event.target সর্বদা হোস্ট উপাদানে পরিবর্তিত হয়, ফলে ভেতরের কোন এলিমেন্টে ক্লিক করা হয়েছিল তা প্রকাশ পায় না।'
        },
        {
          en: '2. Event Target Inside: For listeners attached inside the shadow root, event.target points to the exact originating node (e.g. the button).',
          bn: '২. ভেতরের ইভেন্ট টার্গেট: শ্যাডো রুটের ভেতরের লিসেনারদের জন্য event.target মূল উপাদানের (যেমন বাটনের) সঠিক রেফারেন্স ধারণ করে।'
        },
        {
          en: '3. Data Payload in detail: Always store custom event payload data inside the detail object property (for example, { detail: { value: 42 } }).',
          bn: '৩. detail-এ ডেটা রাখা: কাস্টম ইভেন্টের সমস্ত ডেটা সর্বদা detail অবজেক্টের ভেতরে রাখুন (যেমন { detail: { value: 42 } })।'
        },
        {
          en: '4. Prevent Default Support: If an event has cancelable: true, an outside listener can call event.preventDefault() to cancel the default action.',
          bn: '৪. preventDefault সমর্থন: ইভেন্টে cancelable: true থাকলে বাইরের লিসেনার event.preventDefault() কল করে অভ্যন্তরীণ ডিফল্ট কাজ বাতিল করতে পারে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'wc-mail-ex1',
      kind: 'mcq',
      topic: 'composed flag default',
      question: {
        en: 'What is the default value of the composed property when instantiating new CustomEvent("my-event")?',
        bn: 'new CustomEvent("my-event") তৈরি করার সময় composed প্রোপার্টির ডিফল্ট মান কী থাকে?'
      },
      options: [
        {
          en: 'false, meaning the event cannot cross shadow DOM boundaries by default',
          bn: 'false, যার অর্থ হলো ডিফল্টভাবে ইভেন্টটি শ্যাডো ডম বাউন্ডারি পার হতে পারে না'
        },
        {
          en: 'true, allowing all custom events to bubble to the window by default',
          bn: 'true, যার ফলে সমস্ত কাস্টম ইভেন্ট স্বাভাবিকভাবেই window পর্যন্ত পৌঁছে যায়'
        },
        {
          en: 'null, causing the browser to prompt the user for permission',
          bn: 'null, যার ফলে ব্রাউজার ব্যবহারকারীর অনুমতি প্রার্থনা করে'
        },
        {
          en: 'undefined, which throws a ReferenceError in strict mode',
          bn: 'undefined, যা স্ট্রিক্ট মোডে ReferenceError তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Custom events default to staying contained within their originating boundary.',
        bn: 'কাস্টম ইভেন্ট ডিফল্টভাবে তার উৎপত্তিস্থলের সীমানার মধ্যেই আটকে থাকে।'
      },
      explanation: {
        en: 'CustomEvent defaults both bubbles and composed to false. To allow an event to leave a shadow root and reach page-level listeners, authors must explicitly set { bubbles: true, composed: true }.',
        bn: 'CustomEvent-এ bubbles এবং composed উভয়ই ডিফল্টভাবে false থাকে। বাইরের পেজে বার্তা পাঠাতে ডেভেলপারকে স্পষ্টভাবে { bubbles: true, composed: true } উল্লেখ করতে হয়।'
      }
    },
    {
      id: 'wc-mail-ex2',
      kind: 'mcq',
      topic: 'event retargeting guarantee',
      question: {
        en: 'When a button inside a shadow root is clicked and bubbles out, what is event.target from the document listener perspective?',
        bn: 'শ্যাডো রুটের ভেতরের বাটনে ক্লিকের পর ইভেন্টটি বাইরে আসলে ডকুমেন্টের লিসেনারের কাছে event.target কী হবে?'
      },
      options: [
        {
          en: 'The host custom element containing the shadow root',
          bn: 'শ্যাডো রুটটি যে কাস্টম হোস্ট উপাদানের সাথে যুক্ত সেই হোস্ট উপাদানটি'
        },
        {
          en: 'The internal <button> element inside the shadow tree',
          bn: 'শ্যাডো ট্রির ভেতরের আসল <button> উপাদানটি'
        },
        {
          en: 'The window object at the top of the browser viewport',
          bn: 'ব্রাউজার ভিউপোর্টের শীর্ষে থাকা window অবজেক্টটি'
        },
        {
          en: 'null, because encapsulation erases the target completely',
          bn: 'null, কারণ এনক্যাপসুলেশন টার্গেটকে পুরোপুরি মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Retargeting shields component internal DOM implementation from outer scripts.',
        bn: 'রিটার্গেটিং বাইরের স্ক্রিপ্ট থেকে কম্পোনেন্টের ভেতরের ডম গঠন গোপন রাখে।'
      },
      explanation: {
        en: 'To protect encapsulation, the browser rewrites event.target to point to the host element as the event crosses the shadow boundary, preventing outside scripts from depending on private nodes.',
        bn: 'এনক্যাপসুলেশন রক্ষা করতে ব্রাউজার ইভেন্ট শ্যাডো বাউন্ডারি পার হওয়ার সময় event.target-কে হোস্ট উপাদানে পরিবর্তন করে দেয়।'
      }
    },
    {
      id: 'wc-mail-ex3',
      kind: 'mcq',
      topic: 'composedPath return type',
      question: {
        en: 'What does event.composedPath() return when called on an active event?',
        bn: 'চলমান কোনো ইভেন্টে event.composedPath() কল করলে এটি কী প্রদান করে?'
      },
      options: [
        {
          en: 'An array of DOM nodes from the originating target up through ancestors to window',
          bn: 'ইভেন্টটির উৎপত্তিস্থল থেকে শুরু করে window পর্যন্ত সমস্ত ডম নোডের একটি ধারাবাহিক অ্যারে'
        },
        {
          en: 'A string representing the file path of the current JavaScript module',
          bn: 'বর্তমান জাভাস্ক্রিপ্ট মডিউলের ফাইল পাথ নির্দেশকারী একটি টেক্সট স্ট্রিং'
        },
        {
          en: 'An SVG path string containing coordinates for animation',
          bn: 'অ্যানিমেশনের জন্য স্থানাঙ্কযুক্ত একটি এসভিজি (SVG) পাথ স্ট্রিং'
        },
        {
          en: 'A boolean value indicating whether the event can be aborted',
          bn: 'ইভেন্টটি বাতিল করা যাবে কি না তা নির্দেশকারী একটি বুলিয়ান মান'
        }
      ],
      answer: 0,
      hint: {
        en: 'It tracks the dispatch route traversed across all DOM layers.',
        bn: 'এটি সমস্ত ডম স্তর জুড়ে ইভেন্ট চলার সম্পূর্ণ পথ রেকর্ড করে।'
      },
      explanation: {
        en: 'event.composedPath() produces an ordered array of EventTarget objects starting from the deepest target node up through host elements, document, and window.',
        bn: 'event.composedPath() গভীরতম নোড থেকে শুরু করে পেরেন্ট হোস্ট, ডকুমেন্ট ও উইন্ডো পর্যন্ত সমস্ত উপাদানের একটি অ্যারে দেয়।'
      }
    },
    {
      id: 'wc-mail-ex4',
      kind: 'mcq',
      topic: 'standard native ui events',
      question: {
        en: 'Do standard native browser UI events like click, keydown, and input have composed: true by default?',
        bn: 'click, keydown এবং input-এর মতো ব্রাউজারের নেটিভ ইউআই ইভেন্টগুলো কি স্বাভাবিকভাবেই composed: true থাকে?'
      },
      options: [
        {
          en: 'Yes, standard interactive user input events are composed by specification and naturally bubble out of shadow roots',
          bn: 'হ্যাঁ, স্পেসিফিকেশন অনুযায়ী ব্যবহারকারীর ইনপুট ইভেন্টগুলো composed থাকে এবং স্বাভাবিকভাবেই শ্যাডো রুট থেকে বাইরে আসে'
        },
        {
          en: 'No, native events never escape shadow roots under any circumstances',
          bn: 'না, কোনো অবস্থাতেই নেটিভ ইভেন্ট শ্যাডো রুট থেকে বের হতে পারে না'
        },
        {
          en: 'Only if the user clicks with the middle mouse button',
          bn: 'শুধুমাত্র যদি ব্যবহারকারী মাউসের মধ্যম বাটন দিয়ে ক্লিক করে'
        },
        {
          en: 'Only inside secure HTTPS connections',
          bn: 'শুধুমাত্র সুরক্ষিত এইচটিটিপিএস (HTTPS) কানেকশনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard user interaction events are designed to be heard by parent containers.',
        bn: 'ব্যবহারকারীর সাধারণ ক্লিক বা ইনপুট যাতে পেরেন্ট পেজ শুনতে পারে সেভাবেই এটি তৈরি।'
      },
      explanation: {
        en: 'The DOM standard designates user interaction events (click, focus, blur, input, keydown) as composed: true, so page event listeners can react to user gestures on custom components.',
        bn: 'ডম স্ট্যান্ডার্ড অনুযায়ী ক্লিক বা ইনপুটের মতো ইভেন্টগুলো composed: true থাকে, যাতে পেজ লেভেলে ব্যবহারকারীর কাজ শনাক্ত করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'mail-quiz',
    title: {
      en: 'Events & Retargeting Quiz',
      bn: 'ইভেন্টস ও রিটার্গেটিং কুইজ'
    },
    questions: [
      {
        id: 'q-custom-event-detail',
        kind: 'mcq',
        topic: 'custom event payload storage',
        question: {
          en: 'Where should authors place custom data when instantiating new CustomEvent()?',
          bn: 'new CustomEvent() তৈরি করার সময় ব্যবহারকারীকে নিজস্ব ডেটা কোথায় রাখা উচিত?'
        },
        options: [
          {
            en: 'Inside the detail property of the event initialization dictionary object',
            bn: 'ইভেন্ট ইনিশিয়ালাইজেশন ডিকশনারি অবজেক্টের detail প্রোপার্টির ভেতরে'
          },
          {
            en: 'Directly as top-level properties on the CustomEvent prototype',
            bn: 'সরাসরি CustomEvent প্রোটোটাইপের শীর্ষ প্রোপার্টি হিসেবে'
          },
          {
            en: 'Inside document.cookie formatted as url-encoded text',
            bn: 'document.cookie-র ভেতরে ইউআরএল-এনকোডেড টেক্সট আকারে'
          },
          {
            en: 'As a third argument string passed to addEventListener',
            bn: 'addEventListener-এ পাস করা তৃতীয় আর্গুমেন্ট স্ট্রিং হিসেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The CustomEvent constructor defines a specific detail option for payloads.',
          bn: 'CustomEvent কনস্ট্রাক্টরে ডেটা পাস করার জন্য detail অপশনটি নির্ধারিত।'
        },
        explanation: {
          en: 'The DOM standard reserves the detail property for custom event payloads, accessible as event.detail in listener callbacks.',
          bn: 'ডম স্ট্যান্ডার্ডে কাস্টম ডেটা বহনের জন্য detail প্রোপার্টি নির্ধারিত, যা লিসেনারে event.detail দিয়ে পড়া যায়।'
        }
      },
      {
        id: 'q-closed-mode-path',
        kind: 'mcq',
        topic: 'composedPath in closed shadow roots',
        question: {
          en: 'How does event.composedPath() behave when an event originates inside a closed shadow root and reaches an outside listener?',
          bn: 'ক্লোজড শ্যাডো রুটের ভেতর থেকে তৈরি হওয়া ইভেন্ট যখন বাইরের লিসেনারে পৌঁছায়, তখন event.composedPath() কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'The internal shadow nodes are stripped out; the returned array begins at the host element',
            bn: 'শ্যাডো রুটের ভেতরের নোডগুলো বাদ দেওয়া হয়; প্রাপ্ত অ্যারেটি হোস্ট উপাদান থেকে শুরু হয়'
          },
          {
            en: 'It throws a SecurityError exception immediately',
            bn: 'এটি সাথে সাথে একটি SecurityError এক্সেপশন প্রদান করে'
          },
          {
            en: 'It returns an empty array with length 0',
            bn: 'এটি শূন্য বা 0 দৈর্ঘ্যের একটি সম্পূর্ণ খালি অ্যারে দেয়'
          },
          {
            en: 'It returns internal nodes unmasked without restriction',
            bn: 'এটি কোনো বাধা ছাড়াই ভেতরের সমস্ত নোড উন্মুক্ত করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Closed mode encapsulation truncates the internal dispatch route from external visibility.',
          bn: 'ক্লোজড মোডের এনক্যাপসুলেশন বাইরের লিসেনারের কাছে ভেতরের রুট প্রদর্শন করে না।'
        },
        explanation: {
          en: 'For closed shadow roots, the browser filters composedPath() so that outside listeners only see elements starting from the host upwards, protecting closed tree encapsulation.',
          bn: 'ক্লোজড শ্যাডো রুটের ক্ষেত্রে ব্রাউজার composedPath() ফিল্টার করে দেয় যাতে বাইরের লিসেনার শুধুমাত্র হোস্ট এবং তার উপরের নোডগুলো দেখতে পায়।'
        }
      },
      {
        id: 'q-canceling-composed-events',
        kind: 'mcq',
        topic: 'cancelable composed events',
        question: {
          en: 'How can an outer document listener prevent an internal component action from proceeding?',
          bn: 'বাইরের ডকুমেন্টের একজন লিসেনার কীভাবে ভেতরের কম্পোনেন্টের কাজ এগিয়ে নেওয়া বাতিল করতে পারে?'
        },
        options: [
          {
            en: 'The component dispatches the event with cancelable: true, and the outside listener calls event.preventDefault()',
            bn: 'কম্পোনেন্ট cancelable: true সহ ইভেন্ট পাঠায় এবং বাইরের লিসেনার event.preventDefault() কল করে'
          },
          {
            en: 'The outside listener calls window.stop() to halt network traffic',
            bn: 'বাইরের লিসেনার নেটওয়ার্ক ট্রাফিক থামাতে window.stop() কল করে'
          },
          {
            en: 'The outside listener modifies the CSS display property to none',
            bn: 'বাইরের লিসেনার সিএসএস display প্রোপার্টি none করে দেয়'
          },
          {
            en: 'Custom element events cannot be canceled once dispatched',
            bn: 'একবার ডিসপ্যাচ করার পর কাস্টম এলিমেন্টের ইভেন্ট কোনোভাবেই বাতিল করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard preventDefault mechanism checks event.defaultPrevented.',
          bn: 'স্ট্যান্ডার্ড preventDefault মেকানিজম event.defaultPrevented চেক করে।'
        },
        explanation: {
          en: 'When an event is declared with cancelable: true, calling e.preventDefault() sets e.defaultPrevented to true. The component checks this flag before proceeding with its internal state transition.',
          bn: 'ইভেন্টে cancelable: true থাকলে e.preventDefault() কল করলে e.defaultPrevented সত্য হয়, যা দেখে কম্পোনেন্ট পরবর্তী পদক্ষেপ বাতিল করতে পারে।'
        }
      },
      {
        id: 'q-event-naming-convention',
        kind: 'mcq',
        topic: 'custom event naming conventions',
        question: {
          en: 'Which naming pattern is standard for custom events dispatched by Web Components?',
          bn: 'ওয়েব কম্পোনেন্ট থেকে পাঠানো কাস্টম ইভেন্টের নামের ক্ষেত্রে কোন নিয়মটি আদর্শ?'
        },
        options: [
          {
            en: 'All lowercase with hyphens, such as user-select or dialog-closed',
            bn: 'সম্পূর্ণ ছোট হাতের অক্ষর এবং হাইফেনযুক্ত, যেমন user-select বা dialog-closed'
          },
          {
            en: 'CamelCase prefixed with on, such as onUserSelect',
            bn: 'on প্রিফিক্সযুক্ত ক্যামেল-কেস (CamelCase), যেমন onUserSelect'
          },
          {
            en: 'UPPERCASE_SNAKE_CASE, such as USER_SELECT_ACTION',
            bn: 'বড় হাতের অক্ষরের স্নেক-কেস (UPPERCASE_SNAKE_CASE), যেমন USER_SELECT_ACTION'
          },
          {
            en: 'Namespace prefixes ending with colons, such as app:user:select',
            bn: 'কোলন দিয়ে শেষ হওয়া নেমস্পেস প্রিফিক্স, যেমন app:user:select'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consistent DOM event naming aligns with standard lowercase event conventions.',
          bn: 'ডম ইভেন্টের সাথে মিল রেখে সব ছোট হাতের অক্ষর ও হাইফেন ব্যবহার করা হয়।'
        },
        explanation: {
          en: 'Standard web components use lowercase hyphenated names (kebab-case) for custom events to avoid case-sensitivity issues in HTML attribute event handlers and ensure clean integration across frameworks.',
          bn: 'ফ্রেমওয়ার্কের সাথে ঝামেলাহীন ইন্টিগ্রেশন এবং এইচটিএমএলের সাথে সামঞ্জস্য বজায় রাখতে কাস্টম ইভেন্টের নামে ছোট হাতের কেবাব-কেস ব্যবহার করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-civic-paperwork',
    title: {
      en: 'Form-Associated Custom Elements — ElementInternals, Validation, and Lifecycle Hooks',
      bn: 'ফর্ম-অ্যাসোসিয়েটেড কাস্টম এলিমেন্টস — ElementInternals, ভ্যালিডেশন এবং লাইফসাইকেল হুক'
    }
  }
};
