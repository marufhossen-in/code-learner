import type { Lesson } from '../../../lib/types';

export const DoorsInTheWallLesson: Lesson = {
  slug: 'doors-in-the-wall',
  tech: 'web-components',
  title: {
    en: 'Templates & Slots — Content Projection, Named Slots, and the ::slotted Pseudo-Element',
    bn: 'টেমপ্লেট ও স্লট — কন্টেন্ট প্রজেকশন, নেইমড স্লট এবং ::slotted সিউডো-এলিমেন্ট'
  },
  summary: {
    en: 'HTML templates and slot elements enable composition in Web Components. The <template> tag holds inert HTML fragments that do not execute scripts or load media until cloned into the DOM. The <slot> element acts as a projection placeholder inside the shadow DOM where user-provided light DOM elements are rendered. In this lesson, we master default and named slots, fallback content, the slotchange event, and the strict styling rules of the ::slotted pseudo-element.',
    bn: 'এইচটিএমএল টেমপ্লেট ও স্লট উপাদানগুলো ওয়েব কম্পোনেন্টে কন্টেন্ট কম্পোজিশন বা মিশ্রণ ঘটায়। <template> ট্যাগ এমন নিষ্ক্রিয় মার্কআপ ধারণ করে যা ডমে ক্লোন করার আগ পর্যন্ত স্ক্রিপ্ট চালায় না বা ছবি লোড করে না। <slot> উপাদানটি শ্যাডো ডমের ভেতর প্লেসহোল্ডার হিসেবে কাজ করে যেখানে ব্যবহারকারীর দেওয়া সাধারণ উপাদানগুলো রেন্ডার হয়। এই পাঠে আমরা ডিফল্ট ও নেইমড স্লট, ফলব্যাক কন্টেন্ট, slotchange ইভেন্ট এবং ::slotted-এর স্টাইলিং নিয়ম শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'template-and-slots-overview',
      text: {
        en: 'The Building Blocks: <template> and <slot>',
        bn: 'মূল উপাদানসমূহ: <template> এবং <slot>'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you create reusable components, you often want users to pass custom text, icons, or action buttons into the component layout. Modern web standards provide the <template> element for stampable DOM (Document Object Model) prototypes and the <slot> element for projecting external markup into the shadow tree.',
        bn: 'পুনর্ব্যবহারযোগ্য কম্পোনেন্ট তৈরির সময় ব্যবহারকারী যাতে নিজস্ব টেক্সট, আইকন বা বাটন পাঠাতে পারেন তার ব্যবস্থা রাখা প্রয়োজন। আধুনিক ওয়েব স্ট্যান্ডার্ডে একাধিকবার ব্যবহারের উপযোগী ব্লুপ্রিন্টের জন্য <template> (DOM বা ডকুমেন্ট অবজেক্ট মডেল প্রোটোটাইপ) এবং বাইরের মার্কআপ শ্যাডো ট্রিতে দেখানোর জন্য <slot> উপাদান সরবরাহ করা হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '<template> Element',
          def: {
            en: 'An inert HTML element whose contents are parsed into a DocumentFragment but never rendered until explicitly cloned.',
            bn: 'একটি নিষ্ক্রিয় এইচটিএমএল উপাদান যার ভেতরের কোড DocumentFragment হিসেবে থাকে এবং ক্লোন না করা পর্যন্ত ব্রাউজারে প্রদর্শিত হয় না।'
          }
        },
        {
          term: 'Default Slot (<slot>)',
          def: {
            en: 'An unnamed slot that captures any light DOM child nodes that do not specify a slot attribute.',
            bn: 'একটি নামহীন স্লট যা কাস্টম উপাদানের ভেতরের যেকোনো সাধারণ চাইল্ড নোডকে ধারণ করে যেগুলোতে কোনো slot অ্যাট্রিবিউট নেই।'
          }
        },
        {
          term: 'Named Slot (<slot name="x">)',
          def: {
            en: 'A slot with a name attribute that selectively projects elements marked with matching slot="x" attributes.',
            bn: 'একটি নির্দিষ্ট নামযুক্ত স্লট যা শুধুমাত্র মিল থাকা slot="x" অ্যাট্রিবিউটযুক্ত চাইল্ড উপাদানগুলোকে প্রদর্শন করে।'
          }
        },
        {
          term: '::slotted() Pseudo-Element',
          def: {
            en: 'A CSS pseudo-element used inside shadow roots to apply styles directly to elements projected into a slot.',
            bn: 'শ্যাডো রুটের ভেতরের একটি সিএসএস সিউডো-এলিমেন্ট যা স্লটের মাধ্যমে আসা চাইল্ড উপাদানগুলোতে সরাসরি স্টাইল প্রয়োগ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'template-inertness-rules',
      text: {
        en: 'Inert Parsing and Content Cloning',
        bn: 'নিষ্ক্রিয় পার্সিং এবং কন্টেন্ট ক্লোনিং'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Zero Execution: Any <script> tags placed inside a <template> do not execute while parsing HTML. Scripts only run when the cloned fragment is actively inserted into the live document.',
          bn: '১. স্ক্রিপ্ট নিষ্ক্রিয় থাকা: <template>-এর ভেতরে থাকা <script> ট্যাগ পেজ পার্সিংয়ের সময় চলে না। যখন ক্লোন করা অংশটি লাইভ ডকুমেন্টে যুক্ত করা হয়, তখনই কেবল স্ক্রিপ্ট চালু হয়।'
        },
        {
          en: '2. No Network Fetches: Images with <img src="..."> or audio/video media inside a template do not trigger HTTP network requests until cloned and attached to the DOM.',
          bn: '২. নেটওয়ার্ক রিকোয়েস্ট না হওয়া: টেমপ্লেটের ভেতরের <img src="..."> বা মিডিয়া ফাইল ডমে ক্লোন করে যুক্ত করার আগ পর্যন্ত কোনো নেটওয়ার্ক রিকোয়েস্ট পাঠায় না।'
        },
        {
          en: '3. DocumentFragment Storage: The contents of the template are stored in template.content, which is a lightweight DocumentFragment containing live DOM nodes.',
          bn: '৩. DocumentFragment-এ সংরক্ষণ: টেমপ্লেটের অভ্যন্তরীণ কন্টেন্ট template.content প্রোপার্টিতে থাকে, যা মূলত একটি হালকা DocumentFragment অবজেক্ট।'
        },
        {
          en: '4. Deep Cloning: Use template.content.cloneNode(true) to create an independent copy for each component instance. The boolean true guarantees that all child nodes are cloned recursively.',
          bn: '৪. ডিপ ক্লোনিং: প্রতিটি কম্পোনেন্ট ইনস্ট্যান্সের জন্য template.content.cloneNode(true) ব্যবহার করা হয়। সত্য (true) মানটি নিশ্চিত করে যে সমস্ত চাইল্ড নোড পুনরাবৃত্তিমূলকভাবে ক্লোন হয়েছে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Card Component with Named Slots',
        bn: 'নেইমড স্লটসহ ব্যবহারিক কার্ড কম্পোনেন্ট'
      }
    },
    {
      type: 'code',
      code: `// 1. Create a component with named and default slots
class UserCard extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = \`
      <style>
        :host {
          display: block;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          padding: 16px;
          margin-bottom: 12px;
        }
        ::slotted(h3) {
          margin: 0 0 8px 0;
          color: #0f172a;
        }
        ::slotted(p) {
          color: #475569;
          line-height: 1.5;
        }
        .footer {
          margin-top: 12px;
          border-top: 1px dashed #e2e8f0;
          padding-top: 8px;
        }
      </style>
      <div class="card-box">
        <slot name="title"><h3>Default Title</h3></slot>
        <slot><p>Default body content goes here.</p></slot>
        <div class="footer">
          <slot name="actions"></slot>
        </div>
      </div>
    \`;
  }
}

customElements.define('user-card', UserCard);

// 2. Instantiate and project content
const card = document.createElement('user-card');
card.innerHTML = \`
  <h3 slot="title">Rahim Ahmed</h3>
  <p>Full-stack Web Developer based in Dhaka.</p>
  <button slot="actions">View Profile</button>
\`;
document.body.appendChild(card);

// 3. Inspect assigned elements through the slot API
const titleSlot = card.shadowRoot.querySelector('slot[name="title"]');
const assigned = titleSlot.assignedElements();
console.log('Assigned elements count:', assigned.length);
// -> Assigned elements count: 1
console.log('Assigned title text:', assigned[0].textContent);
// -> Assigned title text: Rahim Ahmed`,
      caption: {
        en: 'Defining a card component with 1 named title slot and 16px padding',
        bn: '১টি নেইমড টাইটেল স্লট ও ১৬px প্যাডিং দিয়ে একটি কার্ড কম্পোনেন্ট তৈরি করা'
      }
    },
    {
      type: 'heading',
      id: 'slotted-selector-rules',
      text: {
        en: 'Rules and Limitations of ::slotted()',
        bn: '::slotted()-এর নিয়ম ও সীমাবদ্ধতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The ::slotted() pseudo-element allows shadow styles to target projected light DOM elements. However, the browser strictly enforces encapsulation boundaries, limiting the reach of ::slotted to direct children only.',
        bn: '::slotted() সিউডো-এলিমেন্টটি শ্যাডো স্টাইলকে স্লটে আসা বাইরের উপাদানে প্রয়োগ করতে দেয়। কিন্তু ব্রাউজার এনক্যাপসুলেশন বজায় রাখতে ::slotted-এর ক্ষমতা শুধুমাত্র সরাসরি চাইল্ড উপাদানের মধ্যেই সীমাবদ্ধ রাখে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Selector Pattern', bn: 'সিলেক্টর প্যাটার্ন' },
        { en: 'Validity & Behavior', bn: 'বৈধতা ও আচরণ' },
        { en: 'Explanation', bn: 'ব্যাখ্যা' }
      ],
      rows: [
        [
          { en: '::slotted(h3)', bn: '::slotted(h3)' },
          { en: 'Valid (Targeted)', bn: 'বৈধ (টার্গেটেড)' },
          { en: 'Styles direct <h3> children assigned to the slot.', bn: 'স্লটে সরাসরি যুক্ত <h3> উপাদানে স্টাইল প্রয়োগ করে।' }
        ],
        [
          { en: '::slotted(.highlight)', bn: '::slotted(.highlight)' },
          { en: 'Valid (Targeted)', bn: 'বৈধ (টার্গেটেড)' },
          { en: 'Matches direct slotted elements that carry the .highlight class.', bn: 'সরাসরি যুক্ত যে উপাদানগুলোতে .highlight ক্লাস আছে তাদের টার্গেট করে।' }
        ],
        [
          { en: '::slotted(div span)', bn: '::slotted(div span)' },
          { en: 'Invalid (Ignored)', bn: 'অবৈধ (উপেক্ষিত)' },
          { en: 'Descendant selectors are forbidden inside ::slotted; child nodes are not reached.', bn: '::slotted-এর ভেতরে বংশধর বা ডিসেন্ডেন্ট সিলেক্টর নিষিদ্ধ; ভেতরের নোডে স্টাইল পৌঁছায় না।' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'wc-slot-ex1',
      kind: 'mcq',
      topic: 'template inertness',
      question: {
        en: 'Why does an <img src="avatar.png"> inside an un-cloned <template> not load over the network?',
        bn: 'ক্লোন না করা <template>-এর ভেতরের <img src="avatar.png"> কেন নেটওয়ার্কের মাধ্যমে লোড হয় না?'
      },
      options: [
        {
          en: 'Template contents are parsed into an inert DocumentFragment without initiating network requests',
          bn: 'টেমপ্লেটের ভেতরের কোড একটি নিষ্ক্রিয় DocumentFragment হিসেবে থাকে এবং কোনো নেটওয়ার্ক রিকোয়েস্ট পাঠায় না'
        },
        {
          en: 'The browser converts the image tag into an unparsed text comment',
          bn: 'ব্রাউজার ইমেজ ট্যাগটিকে একটি আন-পার্সড টেক্সট কমেন্টে রূপান্তর করে ফেলে'
        },
        {
          en: 'Images require a custom loading="lazy" attribute inside templates',
          bn: 'টেমপ্লেটের ভেতরে ছবির জন্য একটি কাস্টম loading="lazy" অ্যাট্রিবিউট থাকা বাধ্যতামূলক'
        },
        {
          en: 'Templates block all HTTP traffic until an explicit user click occurs',
          bn: 'ব্যবহারকারী সরাসরি ক্লিক না করা পর্যন্ত টেমপ্লেট সমস্ত এইচটিটিপি ট্রাফিক আটকে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The inert nature of templates suspends execution and media downloads.',
        bn: 'টেমপ্লেটের নিষ্ক্রিয় প্রকৃতির কারণে কোড এক্সিকিউশন ও মিডিয়া ডাউনলোড স্থগিত থাকে।'
      },
      explanation: {
        en: 'HTML templates are designed to be completely inert. Scripts do not run and assets do not fetch until elements are cloned into the document.',
        bn: 'এইচটিএমএল টেমপ্লেট সম্পূর্ণ নিষ্ক্রিয়ভাবে কাজ করার জন্য তৈরি। পেজে যুক্ত না করা পর্যন্ত এতে কোনো স্ক্রিপ্ট চলে না বা ফাইল লোড হয় না।'
      }
    },
    {
      id: 'wc-slot-ex2',
      kind: 'mcq',
      topic: 'fallback content display',
      question: {
        en: 'When does the fallback content placed inside a <slot>Default</slot> render on the page?',
        bn: '<slot>Default</slot>-এর ভেতরে রাখা ফলব্যাক কন্টেন্ট পেজে কখন রেন্ডার হয়?'
      },
      options: [
        {
          en: 'Only when the parent custom element provides zero matching child elements for that slot',
          bn: 'শুধুমাত্র তখনই যখন প্যারেন্ট কাস্টম উপাদানটি ওই স্লটের জন্য কোনো চাইল্ড উপাদান সরবরাহ করে না'
        },
        {
          en: 'It always renders alongside user-provided light DOM content as a suffix',
          bn: 'এটি সর্বদা ব্যবহারকারীর দেওয়া কন্টেন্টের সাথে অতিরিক্ত হিসেবে যুক্ত থাকে'
        },
        {
          en: 'Only when JavaScript throws a runtime error during execution',
          bn: 'শুধুমাত্র রানটাইমে জাভাস্ক্রিপ্টে কোনো এরর বা ত্রুটি দেখা দিলে'
        },
        {
          en: 'Never, because fallback text is reserved for automated screen readers only',
          bn: 'কখনোই না, কারণ ফলব্যাক টেক্সট কেবল স্বয়ংক্রিয় স্ক্রিন রিডারের জন্য সংরক্ষিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fallback content acts as a default placeholder when no slotted nodes are supplied.',
        bn: 'কোনো উপাদান পাস না করা হলে ফলব্যাক কন্টেন্ট ডিফল্ট টেক্সট হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'If nodes are assigned to a slot, the fallback content is suppressed. If no nodes are assigned, the browser renders the slot’s internal fallback nodes.',
        bn: 'স্লটে কোনো উপাদান যুক্ত হলে ফলব্যাক কন্টেন্ট লুকিয়ে যায়। আর কোনো উপাদান না দিলে ব্রাউজার স্বয়ংক্রিয়ভাবে ডিফল্ট ফলব্যাক কন্টেন্ট প্রদর্শন করে।'
      }
    },
    {
      id: 'wc-slot-ex3',
      kind: 'mcq',
      topic: 'slotted descendant limits',
      question: {
        en: 'Why does the CSS rule ::slotted(div p) { color: red; } fail to match paragraphs inside a slotted div?',
        bn: '::slotted(div p) { color: red; } সিএসএস রুলটি স্লট করা div-এর ভেতরের প্যারাগ্রাফকে কেন স্টাইল করতে পারে না?'
      },
      options: [
        {
          en: '::slotted() can only target top-level assigned elements; it cannot traverse into descendant elements',
          bn: '::slotted() শুধুমাত্র সরাসরি যুক্ত শীর্ষ উপাদানে কাজ করে; এটি ভেতরের বংশধর উপাদান স্পর্শ করতে পারে না'
        },
        {
          en: 'Paragraph elements cannot be projected into shadow DOM slots',
          bn: 'প্যারাগ্রাফ উপাদানগুলো শ্যাডো ডম স্লটে প্রজেক্ট করা সম্ভব নয়'
        },
        {
          en: 'The selector requires an !important declaration to trigger',
          bn: 'সিলেক্টরটি কার্যকর করার জন্য একটি !important ঘোষণার প্রয়োজন হয়'
        },
        {
          en: 'Shadow DOM does not support paragraph color styling properties',
          bn: 'শ্যাডো ডম প্যারাগ্রাফের কালার স্টাইলিং প্রপার্টি সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Encapsulation limits ::slotted to the immediate boundary node.',
        bn: 'এনক্যাপসুলেশন নীতির কারণে ::slotted কেবল বাইরের মূল উপাদানেই সীমাবদ্ধ থাকে।'
      },
      explanation: {
        en: 'The ::slotted selector pierces exactly 1 level of light DOM to style the assigned element itself. Descendant elements remain under the styling authority of the outer page.',
        bn: '::slotted সিলেক্টরটি ঠিক ১ স্তর পর্যন্ত কাজ করে সরাসরি যুক্ত উপাদানকে স্টাইল করে। ভেতরের উপাদানগুলোর স্টাইল বাইরের পেজের স্টাইলশিট দিয়েই নিয়ন্ত্রিত হয়।'
      }
    },
    {
      id: 'wc-slot-ex4',
      kind: 'mcq',
      topic: 'slotchange event trigger',
      question: {
        en: 'Which change triggers the slotchange event on a <slot> element?',
        bn: '<slot> উপাদানে slotchange ইভেন্টটি কোন পরিবর্তনের কারণে কার্যকর হয়?'
      },
      options: [
        {
          en: 'When elements assigned to the slot are added or removed from the host element',
          bn: 'যখন স্লটে যুক্ত থাকা উপাদানগুলো হোস্ট এলিমেন্টে নতুন করে যোগ করা হয় বা মুছে ফেলা হয়'
        },
        {
          en: 'When text inside an already assigned child is edited via innerHTML',
          bn: 'যখন পূর্বে যুক্ত থাকা চাইল্ড উপাদানের ভেতরের টেক্সট innerHTML দিয়ে পরিবর্তন করা হয়'
        },
        {
          en: 'When the user scrolls the viewport past the component',
          bn: 'যখন ব্যবহারকারী স্ক্রল করে কম্পোনেন্টটি পার হয়ে যায়'
        },
        {
          en: 'When CSS hover animations transition between states',
          bn: 'যখন সিএসএস হোভার অ্যানিমেশনের অবস্থা পরিবর্তিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The event monitors assigned node identity, not inner mutations.',
        bn: 'ইভেন্টটি উপাদানের সংযুক্তি পর্যবেক্ষণ করে, ভেতরের সামান্য টেক্সট পরিবর্তন নয়।'
      },
      explanation: {
        en: 'The slotchange event fires whenever the list of nodes assigned to a slot changes. Editing child text inside an assigned node does not fire slotchange.',
        bn: 'স্লটে যুক্ত থাকা নোডের তালিকায় পরিবর্তন ঘটলে slotchange ফায়ার হয়। যুক্ত থাকা নোডের ভেতরের টেক্সট এডিট করলে এই ইভেন্ট কার্যকর হয় না।'
      }
    }
  ],
  quiz: {
    id: 'doors-quiz',
    title: {
      en: 'Templates & Slots Mastery Quiz',
      bn: 'টেমপ্লেট ও স্লট বিষয়ক কুইজ'
    },
    questions: [
      {
        id: 'q-clone-node-true',
        kind: 'mcq',
        topic: 'template cloning argument',
        question: {
          en: 'Why is template.content.cloneNode(true) passed with true instead of false?',
          bn: 'template.content.cloneNode(true)-এ false-এর পরিবর্তে কেন true পাস করা হয়?'
        },
        options: [
          {
            en: 'true performs a deep clone, copying all child nodes, attributes, and text inside the template',
            bn: 'true গভীর ক্লোন (deep clone) করে, যা টেমপ্লেটের ভেতরের সমস্ত চাইল্ড নোড ও টেক্সট হুবহু কপি করে'
          },
          {
            en: 'true causes scripts inside the template to execute synchronously',
            bn: 'true দিলে টেমপ্লেটের ভেতরের স্ক্রিপ্টগুলো সিঙ্ক্রোনাসভাবে চলতে শুরু করে'
          },
          {
            en: 'false deletes the original template from memory permanently',
            bn: 'false দিলে মেমোরি থেকে মূল টেমপ্লেটটি চিরতরে মুছে যায়'
          },
          {
            en: 'true attaches an active WebSocket connection to the document',
            bn: 'true ডকুমেন্টের সাথে একটি সক্রিয় ওয়েবসকেট সংযোগ যুক্ত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deep cloning traverses the complete element hierarchy.',
          bn: 'ডিপ ক্লোন পুরো এলিমেন্ট কাঠামোটি সম্পূর্ণ কপি করে আনে।'
        },
        explanation: {
          en: 'Calling cloneNode(false) creates a shallow copy of the DocumentFragment without its child elements. Passing true ensures all template markup is preserved.',
          bn: 'cloneNode(false) দিলে চাইল্ড উপাদান ছাড়া শুধু খালি ফ্র্যাগমেন্ট কপি হয়। সমস্ত মার্কআপ পেতে true দেওয়া আবশ্যক।'
        }
      },
      {
        id: 'q-assigned-elements',
        kind: 'mcq',
        topic: 'assignedElements vs assignedNodes',
        question: {
          en: 'What is the key difference between slot.assignedElements() and slot.assignedNodes()?',
          bn: 'slot.assignedElements() এবং slot.assignedNodes()-এর মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          {
            en: 'assignedElements() returns only Element nodes (ignoring whitespace and text nodes), while assignedNodes() includes text and comments',
            bn: 'assignedElements() শুধুমাত্র Element নোড দেয় (স্পেস ও টেক্সট বাদ দিয়ে), আর assignedNodes() টেক্সট ও কমেন্টসহ সমস্ত নোড দেয়'
          },
          {
            en: 'assignedElements() converts HTML into JSON strings',
            bn: 'assignedElements() এইচটিএমএলকে জেএসন স্ট্রিংয়ে রূপান্তরিত করে'
          },
          {
            en: 'assignedNodes() can only be called from inside Web Workers',
            bn: 'assignedNodes() শুধুমাত্র ওয়েব ওয়ার্কারের ভেতর থেকে কল করা যায়'
          },
          {
            en: 'There is no difference; both methods return identical results',
            bn: 'কোনো পার্থক্য নেই; উভয় মেথড হুবহু একই ফলাফল প্রদান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Whitespace between HTML tags generates text nodes in assignedNodes().',
          bn: 'এইচটিএমএল ট্যাগের মাঝের ফাঁকা জায়গা assignedNodes()-এ টেক্সট নোড তৈরি করে।'
        },
        explanation: {
          en: 'assignedNodes() returns all assigned DOM nodes including text and comment nodes. assignedElements() filters the list to include only element tags.',
          bn: 'assignedNodes() টেক্সট এবং কমেন্ট নোডসহ সবকিছু রিটার্ন করে। অন্যদিকে assignedElements() শুধু এইচটিএমএল ট্যাগগুলো ফিল্টার করে দেয়।'
        }
      },
      {
        id: 'q-multiple-slots-name',
        kind: 'mcq',
        topic: 'matching multiple named slots',
        question: {
          en: 'What happens if multiple light DOM children have the same slot="header" attribute?',
          bn: 'একাধিক চাইল্ড উপাদানে যদি একই slot="header" অ্যাট্রিবিউট থাকে তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'All matching elements are projected into the <slot name="header"> in DOM order',
            bn: 'সমস্ত উপাদান তাদের ডম অর্ডার বা ক্রম অনুযায়ী <slot name="header">-এ প্রদর্শিত হবে'
          },
          {
            en: 'The browser throws a DuplicateSlotAssignmentError exception',
            bn: 'ব্রাউজার একটি DuplicateSlotAssignmentError এক্সেপশন প্রদান করবে'
          },
          {
            en: 'Only the very first child is shown; subsequent children are discarded',
            bn: 'শুধুমাত্র প্রথম উপাদানটি দেখা যাবে এবং বাকিগুলো বাতিল হয়ে যাবে'
          },
          {
            en: 'The slot converts into a modal dialog window',
            bn: 'স্লটটি একটি মডাল ডায়ালগ উইন্ডোতে রূপান্তরিত হয়ে যাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Slots accommodate multiple projected children seamlessly.',
          bn: 'একটি স্লটে একাধিক উপাদান স্বাভাবিকভাবেই ক্রমানুসারে বসে।'
        },
        explanation: {
          en: 'A slot can receive multiple child elements. They render consecutively inside the slot container according to their order in the light DOM.',
          bn: 'একটি স্লটে একাধিক উপাদান আসতে পারে। লাইট ডমে তারা যে ক্রমে সাজানো থাকে, স্লটের ভেতরেও ঠিক সেই ক্রমে পরপর প্রদর্শিত হয়।'
        }
      },
      {
        id: 'q-declarative-shadow-dom',
        kind: 'mcq',
        topic: 'declarative shadow dom',
        question: {
          en: 'How does Declarative Shadow DOM define a shadow root directly in server-rendered HTML?',
          bn: 'সার্ভার-রেন্ডার করা এইচটিএমএলে ডিক্লেয়ারেটিভ শ্যাডো ডম কীভাবে সরাসরি শ্যাডো রুট সংজ্ঞায়িত করে?'
        },
        options: [
          {
            en: 'Using <template shadowrootmode="open"> inside the custom element tag',
            bn: 'কাস্টম এলিমেন্টের ভেতরে <template shadowrootmode="open"> ব্যবহার করে'
          },
          {
            en: 'Using <shadow-root mode="open"> tags in HTML',
            bn: 'এইচটিএমএলে <shadow-root mode="open"> ট্যাগ ব্যবহার করে'
          },
          {
            en: 'Using inline script tags with document.attachShadowSync()',
            bn: 'ইনলাইন স্ক্রিপ্টে document.attachShadowSync() ব্যবহার করে'
          },
          {
            en: 'Declarative Shadow DOM is not supported in modern browsers',
            bn: 'আধুনিক ব্রাউজারগুলোতে ডিক্লেয়ারেটিভ শ্যাডো ডম সমর্থিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Look for the standard shadowrootmode attribute on the template element.',
          bn: 'টেমপ্লেট এলিমেন্টে shadowrootmode অ্যাট্রিবিউটটি লক্ষ্য করুন।'
        },
        explanation: {
          en: 'The shadowrootmode attribute on <template> instructs the browser parser to immediately attach a shadow root without requiring client-side JavaScript execution.',
          bn: '<template>-এ shadowrootmode অ্যাট্রিবিউট থাকলে ব্রাউজার ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট ছাড়াই সরাসরি শ্যাডো রুট যুক্ত করে নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-lifecycle-court',
    title: {
      en: 'Component Lifecycle — connectedCallback, disconnectedCallback, and observedAttributes',
      bn: 'কম্পোনেন্ট লাইফসাইকেল — connectedCallback, disconnectedCallback এবং observedAttributes'
    }
  }
};
