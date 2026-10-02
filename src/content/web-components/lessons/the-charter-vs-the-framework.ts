import type { Lesson } from '../../../lib/types';

export const TheCharterVsTheFrameworkLesson: Lesson = {
  slug: 'the-charter-vs-the-framework',
  tech: 'web-components',
  title: {
    en: 'Web Components vs Frameworks — Architecture, Interoperability, and Production Trade-offs',
    bn: 'ওয়েব কম্পোনেন্টস বনাম ফ্রেমওয়ার্ক — আর্কিটেকচার, ইন্টারঅপারেবিলিটি এবং প্রোডাকশন বিবেচনা'
  },
  summary: {
    en: 'Modern frontend development balances native browser capabilities against rich framework ecosystems like React, Vue, Angular, and Svelte. In this lesson, we analyze production trade-offs between Web Components and frontend frameworks. We evaluate cross-framework design systems, micro-frontend architectures, SSR with Declarative Shadow DOM, and practical interoperability patterns in enterprise applications.',
    bn: 'আধুনিক ফ্রন্টএন্ড ডেভেলপমেন্টে ব্রাউজারের নিজস্ব সক্ষমতা এবং রিঅ্যাক্ট, ভিউ, অ্যাঙ্গুলার ও স্ভেল্টের মতো ফ্রেমওয়ার্কের মধ্যে ভারসাম্য বজায় রাখতে হয়। এই পাঠে আমরা ওয়েব কম্পোনেন্ট এবং ফ্রন্টএন্ড ফ্রেমওয়ার্কের মধ্যে প্রোডাকশন পর্যায়ের সুবিধা-অসুবিধা বিশ্লেষণ করব। আমরা ক্রস-ফ্রেমওয়ার্ক ডিজাইন সিস্টেম, মাইক্রো-ফ্রন্টএন্ড আর্কিটেকচার, ডিক্লেয়ারেটিভ শ্যাডো ডম দিয়ে এসএসআর এবং এন্টারপ্রাইজ ইন্টিগ্রেশন কৌশল বিস্তারিত শিখব।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'architectural-overview',
      text: {
        en: 'The Architectural Divide: Native Standard vs Framework Runtime',
        bn: 'আর্কিটেকচারাল বিভাজন: নেটিভ স্ট্যান্ডার্ড বনাম ফ্রেমওয়ার্ক রানটাইম'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you choose a component technology for a company, you must balance long-term stability against developer velocity. Web Components are baked directly into the web platform, meaning components written today will render identically in browsers decades from now with zero external dependencies.',
        bn: 'কোনো প্রতিষ্ঠানের জন্য কম্পোনেন্ট প্রযুক্তি নির্বাচনের সময় দীর্ঘমেয়াদী স্থায়িত্ব এবং কাজের গতির মাঝে সঠিক ভারসাম্য প্রয়োজন। ওয়েব কম্পোনেন্টস সরাসরি ব্রাউজারের নিজস্ব স্ট্যান্ডার্ডের অংশ, যার অর্থ হলো আজ লেখা একটি উপাদান কোনো থার্ড-পার্টি লাইব্রেরি ছাড়াই কয়েক দশক পরেও অবিকল চলতে থাকবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Universal Interoperability',
          def: {
            en: 'The ability of custom elements to be consumed naturally inside React, Vue, Angular, Svelte, or plain vanilla HTML.',
            bn: 'কাস্টম উপাদানগুলোর এমন এক সার্বজনীন ক্ষমতা যার ফলে এগুলো রিঅ্যাক্ট, ভিউ, অ্যাঙ্গুলার, স্ভেল্ট বা সাধারণ এইচটিএমএলে সরাসরি ব্যবহার করা যায়।'
          }
        },
        {
          term: 'Micro-Frontend Architecture',
          def: {
            en: 'A pattern where independent teams build web apps using disparate frameworks while sharing a unified native component library.',
            bn: 'একটি স্থাপত্য কৌশল যেখানে ভিন্ন ভিন্ন টিম আলাদা ফ্রেমওয়ার্ক ব্যবহার করলেও একটি সাধারণ নেটিভ কম্পোনেন্ট লাইব্রেরি শেয়ার করতে পারে।'
          }
        },
        {
          term: 'Declarative Shadow DOM (DSD)',
          def: {
            en: 'Server-side rendering mechanism using <template shadowrootmode="open"> to emit shadow roots directly in HTML.',
            bn: 'সার্ভার-সাইড রেন্ডারিং কৌশল যেখানে <template shadowrootmode="open"> দিয়ে সরাসরি এইচটিএমএলেই শ্যাডো রুট তৈরি করা হয়।'
          }
        },
        {
          term: 'Zero Runtime Overhead',
          def: {
            en: 'Web components require no client-side virtual DOM engine or framework runtime bundles, reducing initial JavaScript payloads.',
            bn: 'ওয়েব কম্পোনেন্টে কোনো ভার্চুয়াল ডম বা ফ্রেমওয়ার্ক বান্ডেলের প্রয়োজন হয় না, যা ক্লায়েন্ট সাইডে জাভাস্ক্রিপ্টের আকার ব্যাপকভাবে কমায়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'trade-offs-matrix',
      text: {
        en: 'Production Comparison Matrix',
        bn: 'প্রোডাকশন পর্যায়ের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'বিষয়' },
        { en: 'Web Components (Standard)', bn: 'ওয়েব কম্পোনেন্টস (স্ট্যান্ডার্ড)' },
        { en: 'Frontend Frameworks (React/Vue)', bn: 'ফ্রন্টএন্ড ফ্রেমওয়ার্কস (রিঅ্যাক্ট/ভিউ)' }
      ],
      rows: [
        [
          { en: 'Longevity & Obsolescence', bn: 'স্থায়িত্ব ও সংস্করণ পরিবর্তন' },
          { en: 'Never obsolete; platform guarantees backward compatibility', bn: 'কখনোই অচল হয় না; ব্রাউজার সর্বদা সমর্থন বজায় রাখে' },
          { en: 'Subject to major version breaking changes and deprecations', bn: 'প্রতি কয়েক বছর পর পর মেজর ভার্সন পরিবর্তন ও কোড রিরাইট লাগে' }
        ],
        [
          { en: 'Runtime Bundle Size', bn: 'রানটাইম বান্ডেলের আকার' },
          { en: '0 KB base runtime; executes directly in browser C++ core', bn: '০ KB রানটাইম; ব্রাউজারের নিজস্ব C++ কোর ইঞ্জিনে রান হয়' },
          { en: '30 KB to 150 KB framework bundle required on load', bn: '৩০ KB থেকে ১৫০ KB পর্যন্ত ফ্রেমওয়ার্ক বান্ডেল লোড করতে হয়' }
        ],
        [
          { en: 'Reactivity & Templating', bn: 'রিয়্যাক্টিভিটি ও টেমপ্লেটিং' },
          { en: 'Manual DOM mutation or lightweight helpers (e.g. Lit)', bn: 'হাতে ডম আপডেট অথবা Lit-এর মতো ছোট সহায়ক টুল প্রয়োজন' },
          { en: 'Built-in declarative JSX, signals, and fine-grained reactivity', bn: 'জেএসএক্স (JSX), সিগন্যাল ও সমৃদ্ধ রিয়্যাক্টিভিটি ইঞ্জিন বিল্ট-ইন থাকে' }
        ],
        [
          { en: 'Ideal Use Cases', bn: 'আদর্শ ব্যবহারের ক্ষেত্র' },
          { en: 'Design systems, third-party widgets, and micro-frontends', bn: 'ডিজাইন সিস্টেম, থার্ড-পার্টি উইজেট এবং মাইক্রো-ফ্রন্টএন্ড' },
          { en: 'Complex dynamic applications, routing, and fast product MVPs', bn: 'জটিল অ্যাপ্লিকেশন, ডাইনামিক রাউটিং এবং দ্রুত প্রোডাক্ট তৈরি' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Cross-Framework Hybrid Integration Example',
        bn: 'ক্রস-ফ্রেমওয়ার্ক হাইব্রিড ইন্টিগ্রেশনের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `// 1. Universal Web Component design token button
class BrandButton extends HTMLElement {
  static get observedAttributes() {
    return ['variant'];
  }

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = \`
      <style>
        :host { display: inline-block; }
        button {
          font-family: system-ui, sans-serif;
          font-weight: 600;
          padding: 8px 16px;
          border-radius: 6px;
          border: 1px solid transparent;
          cursor: pointer;
        }
        :host([variant="primary"]) button {
          background: #2563eb;
          color: white;
        }
        :host([variant="secondary"]) button {
          background: #f1f5f9;
          color: #1e293b;
          border-color: #cbd5e1;
        }
      </style>
      <button><slot>Button</slot></button>
    \`;

    shadow.querySelector('button').addEventListener('click', () => {
      this.dispatchEvent(new CustomEvent('brand-click', {
        detail: { timestamp: Date.now() },
        bubbles: true,
        composed: true
      }));
    });
  }
}

customElements.define('brand-button', BrandButton);

// 2. Consume in React 19 / Modern Frameworks
// In React 19: <brand-button variant="primary" onbrand-click={handler}>Save</brand-button>
const btn = document.createElement('brand-button');
btn.setAttribute('variant', 'primary');
document.body.appendChild(btn);

console.log('Registered brand element:', customElements.get('brand-button') === BrandButton);
// -> Registered brand element: true
console.log('Button variant attribute:', btn.getAttribute('variant'));
// -> Button variant attribute: primary`,
      caption: {
        en: 'Authoring 1 universal brand button element consumed across all modern frameworks',
        bn: 'সকল আধুনিক ফ্রেমওয়ার্কে ব্যবহারের উপযোগী ১টি সার্বজনীন ব্র্যান্ড বাটন তৈরি করা'
      }
    },
    {
      type: 'heading',
      id: 'server-side-rendering',
      text: {
        en: 'Server-Side Rendering with Declarative Shadow DOM',
        bn: 'ডিক্লেয়ারেটিভ শ্যাডো ডম দিয়ে সার্ভার-সাইড রেন্ডারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Historically, Web Components suffered from an unstyled flash during initial page load because shadow roots could only be attached using client-side JavaScript. Modern browsers eliminate this with Declarative Shadow DOM, allowing servers to emit pre-rendered shadow trees directly in static HTML.',
        bn: 'অতীতে ক্লায়েন্ট-সাইড জাভাস্ক্রিপ্ট ছাড়া শ্যাডো রুট তৈরি করা যেত না বলে ওয়েব কম্পোনেন্টে প্রাথমিক লোডের সময় স্টাইলহীন ফ্ল্যাশ দেখা যেত। আধুনিক ব্রাউজারগুলো ডিক্লেয়ারেটিভ শ্যাডো ডমের মাধ্যমে এই সমস্যার সমাধান করেছে, যার ফলে সার্ভার সরাসরি স্ট্যাটিক এইচটিএমএলেই রেন্ডার করা শ্যাডো ট্রি পাঠাতে পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Instant First Contentful Paint: Browsers parse <template shadowrootmode="open"> instantly on the initial HTML streaming pass before any JavaScript downloads or runs.',
          bn: '১. দ্রুততম ফার্স্ট কনটেন্টফুল পেইন্ট: জাভাস্ক্রিপ্ট ডাউনলোড হওয়ার আগেই ব্রাউজার এইচটিএমএল স্ট্রিমিং চলাকালীন <template shadowrootmode="open"> সরাসরি পার্স করে রেন্ডার করে দেয়।'
        },
        {
          en: '2. Zero Client Flash: Search engine web crawlers and users with slow network connections see styled, encapsulated components immediately without unstyled content flickers.',
          bn: '২. ফ্লিকারহীন প্রাথমিক প্রদর্শন: ধীরগতির ইন্টারনেট ব্যবহারকারী এবং সার্চ ইঞ্জিন বট কোনো রকম ফ্লিকার বা বিকৃতি ছাড়াই সম্পূর্ণ স্টাইলসহ উপাদান দেখতে পায়।'
        },
        {
          en: '3. Seamless Hydration: When customElements.define runs later on the client, the browser attaches the existing shadow root rather than creating a duplicate, maintaining DOM node identity.',
          bn: '৩. মসৃণ হাইড্রেশন: ক্লায়েন্টে যখন পরবর্তীতে customElements.define কল হয়, ব্রাউজার নতুন রুট না বানিয়ে বিদ্যমান রুটকেই ক্লাসের সাথে যুক্ত করে নেয়।'
        },
        {
          en: '4. Enterprise Adoption: Adobe Spectrum, Salesforce Lightning, and GitHub Primer leverage this hybrid model to serve millions of enterprise users across varied framework stacks.',
          bn: '৪. এন্টারপ্রাইজ গ্রহণযোগ্যতা: অ্যাডোবি স্পেকট্রাম, সেলসফোর্স এবং গিটহাব এই হাইব্রিড মডেল ব্যবহার করে বিভিন্ন ফ্রেমওয়ার্কের লক্ষ লক্ষ ব্যবহারকারীকে স্থিতিশীল সেবা দিচ্ছে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'wc-vs-ex1',
      kind: 'mcq',
      topic: 'universal design systems',
      question: {
        en: 'Why do large technology companies choose Web Components for enterprise design systems?',
        bn: 'বৃহৎ প্রযুক্তি প্রতিষ্ঠানগুলো কেন তাদের এন্টারপ্রাইজ ডিজাইন সিস্টেমের জন্য ওয়েব কম্পোনেন্টস বেছে নেয়?'
      },
      options: [
        {
          en: 'Web Components can be shared seamlessly across teams using React, Vue, Angular, and vanilla HTML without rewriting',
          bn: 'পুনরায় কোড না লিখেও রিঅ্যাক্ট, ভিউ, অ্যাঙ্গুলার ও ভ্যানিলা এইচটিএমএল ব্যবহারকারী বিভিন্ন দলের মাঝে এটি শেয়ার করা যায়'
        },
        {
          en: 'Web Components automatically generate mobile native Android APK files',
          bn: 'ওয়েব কম্পোনেন্টস স্বয়ংক্রিয়ভাবে অ্যান্ড্রয়েডের জন্য নেটিভ APK ফাইল তৈরি করে'
        },
        {
          en: 'Web Components eliminate the need for writing CSS stylesheets completely',
          bn: 'ওয়েব কম্পোনেন্টস ব্যবহার করলে কোনো সিএসএস স্টাইলশিট লেখার প্রয়োজন হয় না'
        },
        {
          en: 'Web Components only function on high-end enterprise server hardware',
          bn: 'ওয়েব কম্পোনেন্টস শুধুমাত্র উচ্চ ক্ষমতাসম্পন্ন এন্টারপ্রাইজ সার্ভার হার্ডওয়্যারে চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single component implementation serves all application tech stacks.',
        bn: 'একবার তৈরি করা উপাদান সমস্ত অ্যাপ্লিকেশন স্ট্যাকে নির্বিঘ্নে কাজ করে।'
      },
      explanation: {
        en: 'Building design systems as Web Components prevents vendor lock-in. When a company upgrades frameworks or acquires products built in different stacks, the native design system continues to work across all applications.',
        bn: 'ওয়েব কম্পোনেন্ট দিয়ে ডিজাইন সিস্টেম তৈরি করলে ফ্রেমওয়ার্ক নির্ভরতা কেটে যায়। প্রতিষ্ঠান যেকোনো ফ্রেমওয়ার্ক পরিবর্তন করলেও ডিজাইন সিস্টেমের কোড পুনরায় লিখতে হয় না।'
      }
    },
    {
      id: 'wc-vs-ex2',
      kind: 'mcq',
      topic: 'react 19 custom elements',
      question: {
        en: 'How does React 19 improve interoperability with custom elements compared to older React versions?',
        bn: 'পূর্ববর্তী সংস্করণগুলোর তুলনায় রিঅ্যাক্ট ১৯ কীভাবে কাস্টম উপাদানের সাথে কাজ করার ক্ষমতা উন্নত করেছে?'
      },
      options: [
        {
          en: 'React 19 supports standard property assignment and native custom event listeners without requiring manual ref wrappers',
          bn: 'রিঅ্যাক্ট ১৯ কোনো ম্যানুয়াল রেফ র‍্যাপার ছাড়াই সরাসরি প্রোপার্টি অ্যাসাইনমেন্ট এবং কাস্টম ইভেন্ট লিসেনার সমর্থন করে'
        },
        {
          en: 'React 19 deletes the CustomElementRegistry to enforce React virtual DOM alone',
          bn: 'রিঅ্যাক্ট ১৯ কাস্টম এলিমেন্টস রেজিস্ট্রি মুছে ফেলে শুধু নিজস্ব ভার্চুয়াল ডম প্রয়োগ করে'
        },
        {
          en: 'React 19 converts all custom elements into SVG vector images',
          bn: 'রিঅ্যাক্ট ১৯ সমস্ত কাস্টম উপাদানকে এসভিজি ভেক্টর ইমেজে রূপান্তর করে'
        },
        {
          en: 'React 19 requires custom elements to be compiled into WebAssembly binaries',
          bn: 'রিঅ্যাক্ট ১৯ কাস্টম উপাদানগুলোকে ওয়েব-অ্যাসেম্বলিতে কম্পাইল করার বাধ্যবাধকতা দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Modern React resolves historical property-versus-attribute binding friction.',
        bn: 'আধুনিক রিঅ্যাক্ট প্রোপার্টি ও অ্যাট্রিবিউট বাইন্ডিংয়ের পুরোনো জটিলতা সমাধান করেছে।'
      },
      explanation: {
        en: 'Prior to React 19, React passed all JSX props as HTML attributes and failed to listen to custom lowercase events declaratively. React 19 natively checks property prototypes and supports custom events seamlessly.',
        bn: 'রিঅ্যাক্ট ১৯-এর আগে প্রপস পাস এবং কাস্টম ইভেন্ট শুনতে ঝামেলা হতো। রিঅ্যাক্ট ১৯ সরাসরি অবজেক্ট প্রোপার্টি চেক করে এবং কোনো অতিরিক্ত কোড ছাড়াই কাস্টম ইভেন্ট শোনে।'
      }
    },
    {
      id: 'wc-vs-ex3',
      kind: 'mcq',
      topic: 'declarative shadow dom ssr',
      question: {
        en: 'What HTML markup instructs the browser parser to immediately construct a shadow root during initial page streaming?',
        bn: 'প্রাথমিক পেজ স্ট্রিমিং চলাকালীন ব্রাউজারকে সাথে সাথে একটি শ্যাডো রুট তৈরি করতে কোন এইচটিএমএল মার্কআপটি নির্দেশ দেয়?'
      },
      options: [
        {
          en: '<template shadowrootmode="open">',
          bn: '<template shadowrootmode="open">'
        },
        {
          en: '<div class="shadow-root">',
          bn: '<div class="shadow-root">'
        },
        {
          en: '<script type="shadow/dom">',
          bn: '<script type="shadow/dom">'
        },
        {
          en: '<meta http-equiv="enable-shadow-dom">',
          bn: '<meta http-equiv="enable-shadow-dom">'
        }
      ],
      answer: 0,
      hint: {
        en: 'Declarative Shadow DOM uses the shadowrootmode attribute on the template element.',
        bn: 'ডিক্লেয়ারেটিভ শ্যাডো ডমে টেমপ্লেট ট্যাগে shadowrootmode অ্যাট্রিবিউট ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'The standard <template shadowrootmode="open"> enables Declarative Shadow DOM. The browser parser attaches the shadow root immediately while reading the HTML stream, achieving instant SSR rendering.',
        bn: '<template shadowrootmode="open"> ডিক্লেয়ারেটিভ শ্যাডো ডম চালু করে। ব্রাউজার কোনো ক্লায়েন্ট স্ক্রিপ্ট ছাড়াই এইচটিএমএল পার্স করার সময় সাথে সাথে শ্যাডো রুট রেন্ডার করে নেয়।'
      }
    },
    {
      id: 'wc-vs-ex4',
      kind: 'mcq',
      topic: 'micro-frontend stack isolation',
      question: {
        en: 'Why is Shadow DOM particularly beneficial in micro-frontend applications?',
        bn: 'মাইক্রো-ফ্রন্টএন্ড অ্যাপ্লিকেশনে শ্যাডো ডম কেন বিশেষভাবে উপকারী?'
      },
      options: [
        {
          en: 'It completely isolates component CSS styles so different micro-apps cannot accidentally corrupt each others styling',
          bn: 'এটি প্রতিটি মাইক্রো-অ্যাপের সিএসএস স্টাইলকে সম্পূর্ণ আলাদা রাখে যাতে একটির স্টাইল অন্যটিকে নষ্ট না করে'
        },
        {
          en: 'It forces all micro-apps to share a single global JavaScript scope',
          bn: 'এটি সমস্ত মাইক্রো-অ্যাপকে একটিমাত্র গ্লোবাল জাভাস্ক্রিপ্ট স্কোপ ব্যবহার করতে বাধ্য করে'
        },
        {
          en: 'It eliminates the need for HTTP network communication between backend services',
          bn: 'এটি ব্যাকএন্ড সার্ভিসের মাঝে কোনো নেটওয়ার্ক যোগাযোগের প্রয়োজনীয়তা দূর করে'
        },
        {
          en: 'It reduces browser memory consumption to 0 bytes',
          bn: 'এটি ব্রাউজারের মেমোরি খরচ 0 বাইটে নামিয়ে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Style encapsulation prevents CSS collisions between independent development teams.',
        bn: 'স্টাইল এনক্যাপসুলেশন স্বাধীন বিভিন্ন টিমের কোডের মধ্যে সিএসএস কনফ্লিক্ট প্রতিরোধ করে।'
      },
      explanation: {
        en: 'In micro-frontends, multiple teams deploy independently. Shadow DOM provides bulletproof CSS boundaries, ensuring one team styles never break another team widgets on the same page.',
        bn: 'মাইক্রো-ফ্রন্টএন্ডে বিভিন্ন দল স্বাধীনভাবে কোড প্রকাশ করে। শ্যাডো ডমের কঠোর সিএসএস সীমানা নিশ্চিত করে যে এক দলের স্টাইল কখনোই অন্য দলের উপাদানকে বিকৃত করতে পারবে না।'
      }
    }
  ],
  quiz: {
    id: 'charter-vs-framework-quiz',
    title: {
      en: 'Architecture & Framework Interop Quiz',
      bn: 'আর্কিটেকচার ও ফ্রেমওয়ার্ক ইন্টারঅপারেবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'q-when-framework-superior',
        kind: 'mcq',
        topic: 'when to choose frameworks',
        question: {
          en: 'In which scenario is a frontend framework (like React or Vue) typically superior to raw Web Components?',
          bn: 'কোন পরিস্থিতিতে সাধারণত সাধারণ ওয়েব কম্পোনেন্টের চেয়ে রিঅ্যাক্ট বা ভিউ-এর মতো ফ্রন্টএন্ড ফ্রেমওয়ার্ক বেশি উপযোগী?'
        },
        options: [
          {
            en: 'Building complex single-page apps requiring rich declarative state stores, router ecosystems, and rapid feature iteration',
            bn: 'জটিল সিঙ্গেল-পেজ অ্যাপ্লিকেশন যেখানে সমৃদ্ধ স্টেট ম্যানেজমেন্ট, রাউটিং ইকোসিস্টেম এবং দ্রুত ফিচার তৈরি করা প্রয়োজন'
          },
          {
            en: 'Distributing a third-party payment button across arbitrary customer websites',
            bn: 'গ্রাহকদের যেকোনো ওয়েবসাইটে ব্যবহারের জন্য থার্ড-পার্টি পেমেন্ট বাটন সরবরাহ করার ক্ষেত্রে'
          },
          {
            en: 'Creating a unified design system meant to survive 15 years across all technology stacks',
            bn: '১৫ বছর ধরে সমস্ত টেকনোলজি স্ট্যাকে টিকে থাকার উপযোগী একটি সার্বজনীন ডিজাইন সিস্টেম তৈরিতে'
          },
          {
            en: 'Developing plain static HTML landing pages with zero JavaScript dependencies',
            bn: 'কোনো জাভাস্ক্রিপ্ট নির্ভরতা ছাড়া সাধারণ স্ট্যাটিক এইচটিএমএল ল্যান্ডিং পেজ তৈরিতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Frameworks excel at high-level application orchestration and rapid product development.',
          bn: 'বড় অ্যাপ্লিকেশনের সমন্বয় এবং দ্রুত গতিতে ফিচার তৈরিতে ফ্রেমওয়ার্ক অতুলনীয়।'
        },
        explanation: {
          en: 'While Web Components provide excellent low-level primitives for leaf widgets and design systems, frameworks provide mature routing, state management, and compiler optimizations for complete application screens.',
          bn: 'ওয়েব কম্পোনেন্ট ডিজাইন সিস্টেমের জন্য সেরা হলেও, সম্পূর্ণ অ্যাপ্লিকেশন ব্যবস্থাপনা, জটিল রাউটিং এবং স্টেট নিয়ন্ত্রণের জন্য ফ্রেমওয়ার্কের সমৃদ্ধ ইকোসিস্টেম অনেক এগিয়ে।'
        }
      },
      {
        id: 'q-dsd-client-hydration',
        kind: 'mcq',
        topic: 'declarative shadow dom hydration',
        question: {
          en: 'What happens when customElements.define is called for an element that already contains a Declarative Shadow DOM root?',
          bn: 'ডিক্লেয়ারেটিভ শ্যাডো ডম রুটযুক্ত কোনো উপাদানের জন্য ক্লায়েন্টে customElements.define কল হলে কী ঘটে?'
        },
        options: [
          {
            en: 'The browser associates the class with the existing shadow root, upgrading event listeners without re-parsing markup',
            bn: 'ব্রাউজার বিদ্যমান শ্যাডো রুটের সাথে ক্লাসটিকে যুক্ত করে নেয় এবং পুনরায় মার্কআপ পার্স না করেই ইভেন্ট চালু করে'
          },
          {
            en: 'The browser throws a FatalDOMCollisionException error',
            bn: 'ব্রাউজার একটি FatalDOMCollisionException ত্রুটি তৈরি করে'
          },
          {
            en: 'The existing server markup is deleted and re-rendered from scratch',
            bn: 'সার্ভারের বিদ্যমান মার্কআপ মুছে ফেলে নতুন করে শুরু থেকে রেন্ডার করা হয়'
          },
          {
            en: 'The page redirects to the home URL automatically',
            bn: 'পেজটি স্বয়ংক্রিয়ভাবে হোম ইউআরএলে রিডাইরেক্ট হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hydration reuses the server-rendered DOM nodes cleanly.',
          bn: 'হাইড্রেশন প্রক্রিয়া সার্ভার থেকে আসা ডম নোডগুলোকেই সরাসরি ব্যবহার করে।'
        },
        explanation: {
          en: 'The browser automatically reuses the pre-existing shadow root established by <template shadowrootmode="open">, executing the constructor and lifecycle hooks seamlessly without content replacement.',
          bn: 'ব্রাউজার সার্ভারের তৈরি শ্যাডো রুটটিকেই সরাসরি ব্যবহার করে এবং কনস্ট্রাক্টর ও লাইফসাইকেল হুকগুলো কোনো ফ্লিকার ছাড়াই নির্বিঘ্নে চালু করে নেয়।'
        }
      },
      {
        id: 'q-bundle-economics',
        kind: 'mcq',
        topic: 'zero-runtime bundle economics',
        question: {
          en: 'Why do Web Components have a base runtime cost of 0 KB?',
          bn: 'ওয়েব কম্পোনেন্টের বেস রানটাইম খরচ কেন ০ KB হয়?'
        },
        options: [
          {
            en: 'All lifecycle methods, custom elements registries, and shadow DOM parsers are implemented natively in browser engine C++ code',
            bn: 'সমস্ত লাইফসাইকেল মেথড, রেজিস্ট্রি এবং শ্যাডো ডম পার্সার সরাসরি ব্রাউজার ইঞ্জিনের নেটিভ C++ কোডে তৈরি'
          },
          {
            en: 'Custom elements download their runtime from an unmetered cloud CDN',
            bn: 'কাস্টম উপাদানগুলো ক্লাউড সিডিএন থেকে অদৃশ্যভাবে তাদের রানটাইম ডাউনলোড করে'
          },
          {
            en: 'JavaScript files containing custom elements are never sent across the internet',
            bn: 'কাস্টম এলিমেন্টের জাভাস্ক্রিপ্ট ফাইল কখনোই ইন্টারনেটের মাধ্যমে প্রেরিত হয় না'
          },
          {
            en: 'Web Components are processed on the server and converted to static images',
            bn: 'ওয়েব কম্পোনেন্টস সার্ভারে প্রসেস হয়ে স্ট্যাটিক ছবিতে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Platform primitives run directly on the underlying browser binary.',
          bn: 'ওয়েব প্ল্যাটফর্মের নিজস্ব ফিচার ব্রাউজার বাইনারিতে সরাসরি রান হয়।'
        },
        explanation: {
          en: 'Because Web Components are W3C/WHATWG web standards, every browser ships the complete implementation inside its executable binary, requiring zero third-party runtime code to download.',
          bn: 'যেহেতু ওয়েব কম্পোনেন্টস অফিশিয়াল ওয়েব স্ট্যান্ডার্ড, তাই ব্রাউজারের নিজস্ব কোডেই সবকিছু প্রস্তুত থাকে। কোনো অতিরিক্ত থার্ড-পার্টি লাইব্রেরি ডাউনলোড করার দরকার হয় না।'
        }
      },
      {
        id: 'q-hybrid-architecture-verdict',
        kind: 'mcq',
        topic: 'hybrid architecture pattern',
        question: {
          en: 'What is the "hybrid architecture" pattern adopted by modern enterprise engineering teams?',
          bn: 'আধুনিক এন্টারপ্রাইজ ইঞ্জিনিয়ারিং টিমগুলোর ব্যবহৃত "হাইব্রিড আর্কিটেকচার" প্যাটার্নটি কী?'
        },
        options: [
          {
            en: 'Authoring core design system components as native Web Components and consuming them within application screens built in React, Vue, or Angular',
            bn: 'মূল ডিজাইন সিস্টেমের উপাদানগুলোকে নেটিভ ওয়েব কম্পোনেন্ট হিসেবে তৈরি করা এবং রিঅ্যাক্ট, ভিউ বা অ্যাঙ্গুলারে তৈরি পেজে সেগুলো ব্যবহার করা'
          },
          {
            en: 'Running half the user requests on Python and half on Ruby servers',
            bn: 'অর্ধেক রিকোয়েস্ট পাইথন এবং বাকি অর্ধেক রুবি সার্ভারে চালানো'
          },
          {
            en: 'Replacing all HTML elements with SVG canvas drawing contexts',
            bn: 'সমস্ত এইচটিএমএল উপাদানকে এসভিজি ক্যানভাস দিয়ে প্রতিস্থাপন করা'
          },
          {
            en: 'Translating frontend JavaScript code into C++ at runtime',
            bn: 'রানটাইমে ফ্রন্টএন্ড জাভাস্ক্রিপ্ট কোডকে C++-এ রূপান্তর করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Combine platform stability for reusable UI widgets with framework agility for complex business logic.',
          bn: 'ডিজাইন সিস্টেমে প্ল্যাটফর্মের স্থায়িত্ব এবং অ্যাপ্লিকেশন পেজে ফ্রেমওয়ার্কের সুবিধার সমন্বয়।'
        },
        explanation: {
          en: 'The hybrid architecture pairs the strengths of both paradigms: leaf UI widgets stay universally reusable and durable as native Web Components, while dynamic views and state workflows leverage frameworks.',
          bn: 'হাইব্রিড আর্কিটেকচার উভয় কৌশলের সেরা দিকগুলো যুক্ত করে: ইউআই বাটন ও উইজেট নেটিভ ওয়েব কম্পোনেন্ট হিসেবে সর্বত্র কাজ করে, আর জটিল পেজ লজিক ফ্রেমওয়ার্ক দিয়ে দ্রুত তৈরি হয়।'
        }
      }
    ]
  }
};
