import type { Lesson } from '../../../lib/types';

export const PaintBehindGlassLesson: Lesson = {
  slug: 'paint-behind-glass',
  tech: 'web-components',
  title: {
    en: 'Shadow DOM Styling — CSS Variables, ::part, and Constructable Stylesheets',
    bn: 'শ্যাডো ডম স্টাইলিং — সিএসএস ভেরিয়েবল, ::part এবং কনস্ট্রাক্টেবল স্টাইলশিট'
  },
  summary: {
    en: 'While Shadow DOM prevents accidental style leaks, production applications need deliberate theming mechanisms. In this lesson, we explore how CSS custom properties traverse shadow boundaries to enable global themes. We also examine how the ::part pseudo-element exposes sub-elements safely, and how Constructable Stylesheets share parsed rules across component instances.',
    bn: 'শ্যাডো ডম অপ্রত্যাশিত স্টাইল লিকেজ প্রতিরোধ করলেও অ্যাপ্লিকেশনগুলোতে ইচ্ছাকৃত থিমিংয়ের প্রয়োজন হয়। এই পাঠে আমরা শিখব কীভাবে সিএসএস কাস্টম প্রপার্টি বা ভেরিয়েবল শ্যাডো বাউন্ডারি ভেদ করে গ্লোবাল থিম তৈরি করে। এছাড়া আমরা দেখব কীভাবে ::part নির্দিষ্ট অংশ নিরাপদে উন্মুক্ত করে এবং কনস্ট্রাক্টেবল স্টাইলশিট মেমোরি শেয়ার করে গতি বাড়ায়।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'styling-approaches-overview',
      text: {
        en: 'Theming Across the Shadow Boundary',
        bn: 'শ্যাডো বাউন্ডারি জুড়ে থিমিং পরিচালনা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design a component library, consumers must be able to customize colors, fonts, and borders to match their brand. Modern CSS provides three standardized ways to style components across shadow boundaries without breaking internal encapsulation: CSS Custom Properties, the ::part pseudo-element, and Constructable Stylesheets.',
        bn: 'একটি কম্পোনেন্ট লাইব্রেরি তৈরির সময় গ্রাহকদের নিজস্ব ব্র্যান্ড অনুযায়ী রং, ফন্ট এবং বর্ডার কাস্টমাইজ করার সুযোগ দিতে হয়। আধুনিক সিএসএস ভেতরের এনক্যাপসুলেশন অক্ষুণ্ণ রেখে শ্যাডো বাউন্ডারি পার হয়ে স্টাইল পরিবর্তনের তিনটি মানসম্মত উপায় দেয়: সিএসএস কাস্টম প্রপার্টি, ::part সিউডো-এলিমেন্ট এবং কনস্ট্রাক্টেবল স্টাইলশিট।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'CSS Custom Properties (--*)',
          def: {
            en: 'CSS variables that naturally inherit down the DOM hierarchy, crossing shadow boundaries transparently.',
            bn: 'সিএসএস ভেরিয়েবল যা স্বাভাবিকভাবেই ডম হায়ারার্কি জুড়ে প্রবাহিত হয় এবং কোনো বাধা ছাড়াই শ্যাডো বাউন্ডারি পার হতে পারে।'
          }
        },
        {
          term: '::part() Pseudo-Element',
          def: {
            en: 'A selector that targets an internal element explicitly marked with a part attribute inside a shadow tree.',
            bn: 'একটি সিলেক্টর যা শ্যাডো ট্রির ভেতরে part অ্যাট্রিবিউট দিয়ে চিহ্নিত নির্দিষ্ট অভ্যন্তরীণ উপাদানকে বাইরে থেকে স্টাইল করতে দেয়।'
          }
        },
        {
          term: 'exportparts Attribute',
          def: {
            en: 'An attribute that forwards parts declared inside a nested shadow root out through the parent shadow tree.',
            bn: 'একটি অ্যাট্রিবিউট যা নেস্টেড বা ভেতরের কোনো শ্যাডো রুটের পার্টকে বাইরের পেরেন্ট শ্যাডো ট্রির মাধ্যমে উন্মুক্ত করে দেয়।'
          }
        },
        {
          term: 'Constructable Stylesheets',
          def: {
            en: 'CSSStyleSheet instances created in JavaScript and assigned via adoptedStyleSheets to share parsed rules across instances.',
            bn: 'জাভাস্ক্রিপ্টে তৈরি CSSStyleSheet অবজেক্ট যা adoptedStyleSheets দিয়ে যুক্ত হয়ে হাজারো উপাদানে একবারে শেয়ার হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'theming-strategies',
      text: {
        en: 'Theming Strategies Compared',
        bn: 'বিভিন্ন থিমিং কৌশলের তুলনা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. CSS Custom Properties for Tokens: Use var(--btn-bg, #2563eb) for design tokens like colors, radius, and spacing. Outer pages set --btn-bg on :root or the component tag to update styles instantly.',
          bn: '১. টোকেনের জন্য সিএসএস ভেরিয়েবল: রং, রেডিয়াস ও স্পেসিংয়ের জন্য var(--btn-bg, #2563eb) ব্যবহার করুন। বাইরের পেজে :root বা উপাদানের ট্যাগে --btn-bg সেট করলেই ভেতরের চেহারা বদলে যায়।'
        },
        {
          en: '2. The ::part API for Structural Elements: Mark internal nodes like <button part="trigger">. Outer CSS can then write custom-dropdown::part(trigger) { box-shadow: 0 4px 6px rgba(0,0,0,0.1); } safely.',
          bn: '২. কাঠামোগত উপাদানের জন্য ::part: ভেতরের নোডে <button part="trigger"> লিখুন। এরপর বাইরের সিএসএসে custom-dropdown::part(trigger) { box-shadow: 0 4px 6px rgba(0,0,0,0.1); } লিখে নিরাপদে শ্যাডো বা বর্ডার পরিবর্তন করা যায়।'
        },
        {
          en: '3. Encapsulation Remains Intact: Outer CSS using ::part cannot inspect inner DOM nodes, change element tags, or attach malicious event listeners. It can only apply CSS declarations.',
          bn: '৩. এনক্যাপসুলেশন নিরাপদ থাকা: বাইরের সিএসএস ::part দিয়ে ভেতরের নোড দেখতে পারে না বা কোনো স্ক্রিপ্ট চালাতে পারে না। এটি শুধুমাত্র দৃশ্যমান সিএসএস প্রপার্টি প্রয়োগ করতে পারে।'
        },
        {
          en: '4. Memory Efficiency with adoptedStyleSheets: Instead of parsing identical <style> tags across 1000 buttons, parse 1 CSSStyleSheet object once and assign it to every shadowRoot.adoptedStyleSheets array.',
          bn: '৪. adoptedStyleSheets-এর মেমোরি দক্ষতা: ১০০০টি বাটনে আলাদা <style> ট্যাগ পার্স না করে, ১টি CSSStyleSheet অবজেক্ট পার্স করে প্রতিটি shadowRoot-এ শেয়ার করা হয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Component with ::part and Constructable Stylesheet',
        bn: '::part এবং কনস্ট্রাক্টেবল স্টাইলশিটসহ ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `// 1. Create a shared Constructable Stylesheet parsed once
const sharedSheet = new CSSStyleSheet();
sharedSheet.replaceSync(\`
  :host {
    display: inline-flex;
    font-family: system-ui, sans-serif;
  }
  .toggle-box {
    display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px 12px;
    background: var(--toggle-bg, #f1f5f9);
    border-radius: 20px;
    cursor: pointer;
  }
  .thumb {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: var(--thumb-color, #64748b);
    transition: transform 0.2s ease;
  }
  :host([checked]) .thumb {
    transform: translateX(12px);
    background: var(--thumb-active, #2563eb);
  }
\`);

// 2. Define custom element adopting the shared stylesheet
class CustomSwitch extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    // Adopt stylesheet directly into the shadow tree
    shadow.adoptedStyleSheets = [sharedSheet];

    shadow.innerHTML = \`
      <div class="toggle-box" part="container">
        <div class="thumb" part="thumb"></div>
        <span part="label"><slot>Off</slot></span>
      </div>
    \`;
  }
}

customElements.define('custom-switch', CustomSwitch);

// 3. Mount instance and verify adopted sheets count
const toggle = document.createElement('custom-switch');
document.body.appendChild(toggle);

console.log('Adopted stylesheets count:', toggle.shadowRoot.adoptedStyleSheets.length);
// -> Adopted stylesheets count: 1
console.log('Exposed thumb part:', Boolean(toggle.shadowRoot.querySelector('[part="thumb"]')));
// -> Exposed thumb part: true`,
      caption: {
        en: 'Sharing 1 constructable stylesheet with 16px thumb size across toggle components',
        bn: 'টগল কম্পোনেন্ট জুড়ে ১৬px থাম্ব আকারের ১টি শেয়ার্ড কনস্ট্রাক্টেবল স্টাইলশিট ব্যবহার করা'
      }
    },
    {
      type: 'heading',
      id: 'css-variables-vs-part',
      text: {
        en: 'CSS Custom Properties vs ::part() API',
        bn: 'সিএসএস কাস্টম প্রপার্টি বনাম ::part() এপিআই'
      }
    },
    {
      type: 'compare',
      left: {
        title: {
          en: 'CSS Custom Properties (--*)',
          bn: 'সিএসএস কাস্টম প্রপার্টি (--*)'
        },
        points: [
          {
            en: 'Designed for discrete values like colors, font sizes, and spacing.',
            bn: 'রং, ফন্ট সাইজ এবং মার্জিনের মতো নির্দিষ্ট মানের জন্য ডিজাইন করা।'
          },
          {
            en: 'Cascades down through all nested shadow roots automatically.',
            bn: 'সমস্ত নেস্টেড শ্যাডো রুটের ভেতর স্বয়ংক্রিয়ভাবে প্রবাহিত হয়।'
          },
          {
            en: 'Requires the component author to explicitly wire var(--name, fallback).',
            bn: 'কম্পোনেন্ট লেখককে কোডে var(--name, fallback) লিখে রাখতে হয়।'
          },
          {
            en: 'Cannot change structural properties like display or grid layouts directly.',
            bn: 'সরাসরি display বা গ্রিড লেআউটের কাঠামো পরিবর্তন করতে পারে না।'
          }
        ]
      },
      right: {
        title: {
          en: 'The ::part() Pseudo-Element',
          bn: '::part() সিউডো-এলিমেন্ট'
        },
        points: [
          {
            en: 'Allows styling arbitrary CSS properties on marked sub-elements.',
            bn: 'চিহ্নিত উপাদানটিতে যেকোনো সিএসএস প্রপার্টি প্রয়োগ করতে দেয়।'
          },
          {
            en: 'Stops at 1 shadow boundary unless explicitly forwarded with exportparts.',
            bn: 'exportparts না থাকলে এটি মাত্র ১টি শ্যাডো বাউন্ডারিতে কাজ করে।'
          },
          {
            en: 'Supports pseudo-classes like ::part(thumb):hover.',
            bn: '::part(thumb):hover-এর মতো সিউডো-ক্লাস সমর্থন করে।'
          },
          {
            en: 'Preserves DOM encapsulation; external scripts cannot select the node.',
            bn: 'ডম এনক্যাপসুলেশন বজায় রাখে; বাইরের স্ক্রিপ্ট উপাদানটি কুয়েরি করতে পারে না।'
          }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'wc-paint-ex1',
      kind: 'mcq',
      topic: 'css variables inheritance',
      question: {
        en: 'Why do CSS Custom Properties penetrate through Shadow DOM boundaries by default?',
        bn: 'সিএসএস কাস্টম প্রপার্টি কেন স্বাভাবিকভাবেই শ্যাডো ডম বাউন্ডারি ভেদ করে কাজ করে?'
      },
      options: [
        {
          en: 'CSS Custom Properties inherit down the DOM tree hierarchy, and shadow roots inherit styles from their host element',
          bn: 'সিএসএস কাস্টম প্রপার্টি ডম হায়ারার্কি অনুযায়ী প্রবাহিত হয় এবং শ্যাডো রুট হোস্ট এলিমেন্ট থেকে স্টাইল গ্রহণ করে'
        },
        {
          en: 'The browser runs a JavaScript transpiler to inline all variables at runtime',
          bn: 'ব্রাউজার রানটাইমে জাভাস্ক্রিপ্ট ট্রান্সপাইলার চালিয়ে ভেরিয়েবলগুলো ইনলাইন করে ফেলে'
        },
        {
          en: 'Variables are stored in a global SQLite database shared by all tabs',
          bn: 'ভেরিয়েবলগুলো সমস্ত ট্যাবের মাঝে একটি গ্লোবাল ডাটাবেজে জমা রাখা হয়'
        },
        {
          en: 'CSS variables only pierce shadow roots if marked with !important',
          bn: 'সিএসএস ভেরিয়েবল শুধুমাত্র !important লেখা থাকলেই শ্যাডো রুট ভেদ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Inheritable CSS properties flow naturally from parent nodes to children.',
        bn: 'ইনহেরিটেবল প্রপার্টি স্বাভাবিকভাবেই প্যারেন্ট থেকে চাইল্ডে নেমে আসে।'
      },
      explanation: {
        en: 'CSS variables inherit down the document tree. Since a shadow root is attached to a host element in the document tree, inherited properties cascade into the shadow tree effortlessly.',
        bn: 'সিএসএস ভেরিয়েবল বংশানুক্রমিকভাবে নিচে প্রবাহিত হয়। শ্যাডো রুটটি পেজের হোস্ট এলিমেন্টের সাথে যুক্ত থাকায় ভেরিয়েবলগুলো সহজেই ভেতরে চলে আসে।'
      }
    },
    {
      id: 'wc-paint-ex2',
      kind: 'mcq',
      topic: 'part pseudo-element scope',
      question: {
        en: 'What can an external stylesheet style using the custom-dialog::part(header) selector?',
        bn: 'custom-dialog::part(header) সিলেক্টরটি দিয়ে বাইরের স্টাইলশিট কী স্টাইল করতে পারে?'
      },
      options: [
        {
          en: 'Any CSS property applied directly to the internal element carrying part="header"',
          bn: 'part="header" অ্যাট্রিবিউট থাকা ভেতরের উপাদানটিতে যেকোনো সিএসএস প্রপার্টি'
        },
        {
          en: 'Only background-color and color; all other properties are rejected',
          bn: 'শুধুমাত্র background-color এবং color; অন্য সব প্রপার্টি বাতিল হয়'
        },
        {
          en: 'All descendant nodes nested underneath the header element',
          bn: 'হেডার উপাদানের ভেতরে থাকা সমস্ত সাব-চাইল্ড বা বংশধর নোড'
        },
        {
          en: 'The entire host document including header tags in other components',
          bn: 'অন্যান্য উপাদানের হেডার ট্যাগসহ পুরো ডকুমেন্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'The ::part selector targets the specifically marked element itself.',
        bn: '::part সিলেক্টর সরাসরি চিহ্নিত উপাদানটিকে স্টাইল করতে দেয়।'
      },
      explanation: {
        en: 'The ::part() pseudo-element allows full CSS styling on the designated element without exposing inner DOM structure or descendants to outside selectors.',
        bn: '::part() সিলেক্টর নির্দিষ্ট উপাদানে সম্পূর্ণ সিএসএস স্টাইল প্রয়োগের সুযোগ দেয়, কিন্তু ভেতরের ডম কাঠামো উন্মুক্ত করে না।'
      }
    },
    {
      id: 'wc-paint-ex3',
      kind: 'mcq',
      topic: 'exportparts attribute',
      question: {
        en: 'What is the role of the exportparts attribute in nested Web Components?',
        bn: 'নেস্টেড ওয়েব কম্পোনেন্টে exportparts অ্যাট্রিবিউটের কাজ কী?'
      },
      options: [
        {
          en: 'Forwarding part names from an inner component shadow root so outer documents can target them with ::part()',
          bn: 'ভেতরের কম্পোনেন্টের শ্যাডো রুটের পার্ট নামগুলোকে বাইরের দিকে ফরোয়ার্ড করা যাতে বাইরে থেকে ::part() দিয়ে স্টাইল করা যায়'
        },
        {
          en: 'Exporting JavaScript functions to Node.js backend servers',
          bn: 'ব্যাকএন্ড সার্ভারে জাভাস্ক্রিপ্ট ফাংশন এক্সপোর্ট করা'
        },
        {
          en: 'Compressing PNG images before saving to disk',
          bn: 'ডিস্কে সংরক্ষণ করার আগে পিএনজি ইমেজ কম্প্রেস করা'
        },
        {
          en: 'Removing shadow roots when exporting components to PDF files',
          bn: 'পিডিএফ ফাইলে এক্সপোর্ট করার সময় শ্যাডো রুট সরিয়ে ফেলা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Parts do not cross multiple shadow boundaries unless explicitly exported.',
        bn: 'স্পষ্টভাবে এক্সপোর্ট না করলে পার্ট একাধিক বাউন্ডারি পার হতে পারে না।'
      },
      explanation: {
        en: 'By default, ::part() pierces only 1 shadow boundary. If component A contains component B, component A must declare exportparts="innerPart: outerName" to expose it outside.',
        bn: 'ডিফল্টভাবে ::part() মাত্র ১টি শ্যাডো বাউন্ডারি ভেদ করে। নেস্টেড কম্পোনেন্টের পার্টকে বাইরে উন্মুক্ত করতে exportparts ব্যবহার করা হয়।'
      }
    },
    {
      id: 'wc-paint-ex4',
      kind: 'mcq',
      topic: 'constructable stylesheets performance',
      question: {
        en: 'Why do Constructable Stylesheets improve performance when creating thousands of custom elements?',
        bn: 'হাজার হাজার কাস্টম এলিমেন্ট তৈরির সময় কনস্ট্রাক্টেবল স্টাইলশিট কেন কর্মক্ষমতা বা পারফরম্যান্স বৃদ্ধি করে?'
      },
      options: [
        {
          en: 'The CSS is parsed into memory exactly once and shared by reference across all shadow roots in adoptedStyleSheets',
          bn: 'সিএসএস মেমোরিতে ঠিক একবার পার্স হয় এবং adoptedStyleSheets-এর মাধ্যমে সমস্ত শ্যাডো রুটে রেফারেন্স হিসেবে শেয়ার হয়'
        },
        {
          en: 'They bypass the browser CSS layout engine completely',
          bn: 'তারা ব্রাউজারের সিএসএস লেআউট ইঞ্জিনকে পুরোপুরি এড়িয়ে চলে'
        },
        {
          en: 'They execute directly on the GPU hardware thread',
          bn: 'তারা সরাসরি জিপিইউ হার্ডওয়্যার থ্রেডে রান হয়'
        },
        {
          en: 'They automatically convert all CSS selectors into XPath queries',
          bn: 'তারা সমস্ত সিএসএস সিলেক্টরকে এক্সপাথ কুয়েরিতে রূপান্তরিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Avoid repeated string parsing overhead across many component instances.',
        bn: 'বহু উপাদানের জন্য বারবার স্ট্রিং পার্স করার বাড়তি চাপ পরিহার করুন।'
      },
      explanation: {
        en: 'With traditional <style> tags, the browser parses the CSS string for every single element created. Constructable Stylesheets parse once, reducing CPU usage and memory footprint dramatically.',
        bn: 'সাধারণ <style> ট্যাগে ব্রাউজার প্রতিটি উপাদানের জন্য আলাদা করে সিএসএস পার্স করে। কিন্তু কনস্ট্রাক্টেবল স্টাইলশিট একবার পার্স হয়ে মেমোরি ও প্রসেসরের অপচয় কমায়।'
      }
    }
  ],
  quiz: {
    id: 'paint-quiz',
    title: {
      en: 'Shadow DOM Styling Quiz',
      bn: 'শ্যাডো ডম স্টাইলিং কুইজ'
    },
    questions: [
      {
        id: 'q-css-var-fallback',
        kind: 'mcq',
        topic: 'css variable fallback syntax',
        question: {
          en: 'In the declaration color: var(--card-color, #1e293b);, when is the color #1e293b used?',
          bn: 'color: var(--card-color, #1e293b); ঘোষণায় #1e293b রংটি কখন ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'When the --card-color custom property is undefined or not set on any ancestor element',
            bn: 'যখন কোনো পূর্বপুরুষ বা প্যারেন্ট উপাদানে --card-color কাস্টম প্রপার্টি সংজ্ঞায়িত বা সেট করা থাকে না'
          },
          {
            en: 'Only on mobile smartphone screens',
            bn: 'শুধুমাত্র মোবাইল স্মার্টফোনের স্ক্রিনে'
          },
          {
            en: 'When the user enables high contrast accessibility mode in their browser',
            bn: 'যখন ব্যবহারকারী ব্রাউজারে হাই-কন্ট্রাস্ট মোড চালু করে'
          },
          {
            en: 'Never; the fallback value is ignored by standard CSS parsers',
            bn: 'কখনোই না; স্ট্যান্ডার্ড সিএসএস পার্সার ফলব্যাক মানকে সম্পূর্ণ উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The second argument to var() serves as the default fallback value.',
          bn: 'var()-এর দ্বিতীয় আর্গুমেন্টটি ডিফল্ট ফলব্যাক মান হিসেবে কাজ করে।'
        },
        explanation: {
          en: 'If --card-color is not declared anywhere in the cascade hierarchy, the CSS engine falls back to the second parameter #1e293b.',
          bn: 'সিএসএস ক্যাসকেডে --card-color না পাওয়া গেলে ব্রাউজার দ্বিতীয় প্যারামিটার #1e293b মানটি ফলব্যাক হিসেবে গ্রহণ করে।'
        }
      },
      {
        id: 'q-part-combinators',
        kind: 'mcq',
        topic: 'part combinator limits',
        question: {
          en: 'Can external CSS select child tags within a part using combinators like my-element::part(box) span?',
          bn: 'বাইরের সিএসএস কি my-element::part(box) span-এর মতো কম্বিনেটর ব্যবহার করে পার্টের ভেতরের span সিলেক্ট করতে পারে?'
        },
        options: [
          {
            en: 'No, structural combinators cannot follow ::part(); only pseudo-classes like :hover or :focus are permitted',
            bn: 'না, ::part()-এর পরে কোনো কাঠামোগত কম্বিনেটর কাজ করে না; কেবল :hover বা :focus-এর মতো সিউডো-ক্লাস অনুমোদিত'
          },
          {
            en: 'Yes, any descendant selector works identically to regular CSS',
            bn: 'হ্যাঁ, সাধারণ সিএসএসের মতোই যেকোনো বংশধর সিলেক্টর কাজ করে'
          },
          {
            en: 'Only if the span has a class of .active',
            bn: 'শুধুমাত্র যদি span উপাদানে .active ক্লাস থাকে'
          },
          {
            en: 'Only when running inside Safari web browsers',
            bn: 'শুধুমাত্র সাফারি ওয়েব ব্রাউজারে চলার সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The specification limits ::part() to protect internal child encapsulation.',
          bn: 'স্পেসিফিকেশন ভেতরের গঠন গোপন রাখতে ::part-এর পর কম্বিনেটর নিষিদ্ধ করেছে।'
        },
        explanation: {
          en: 'The ::part() specification intentionally forbids selecting internal descendants (like ::part(box) span) to prevent consumers from relying on private internal markup implementations.',
          bn: 'স্পেসিফিকেশন ইচ্ছাকৃতভাবে ::part(box) span নিষিদ্ধ করেছে যাতে বাইরের ব্যবহারকারীরা ভেতরের প্রাইভেট গঠনের ওপর নির্ভরশীল না হয়ে পড়ে।'
        }
      },
      {
        id: 'q-adopted-stylesheets-mutability',
        kind: 'mcq',
        topic: 'adoptedStyleSheets array mutation',
        question: {
          en: 'How do you add a new stylesheet to shadowRoot.adoptedStyleSheets in JavaScript?',
          bn: 'জাভাস্ক্রিপ্টে shadowRoot.adoptedStyleSheets-এ নতুন স্টাইলশিট কীভাবে যুক্ত করতে হয়?'
        },
        options: [
          {
            en: 'By reassigning the array with the new sheet: shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, newSheet];',
            bn: 'নতুন শিটসহ সম্পূর্ণ অ্যারে পুনরায় অ্যাসাইন করে: shadowRoot.adoptedStyleSheets = [...shadowRoot.adoptedStyleSheets, newSheet];'
          },
          {
            en: 'By calling shadowRoot.adoptedStyleSheets.appendCSSString("...")',
            bn: 'shadowRoot.adoptedStyleSheets.appendCSSString("...") মেথড কল করে'
          },
          {
            en: 'By modifying the window.localStorage database',
            bn: 'window.localStorage ডাটাবেজ পরিবর্তন করে'
          },
          {
            en: 'Stylesheets cannot be modified after shadow root attachment',
            bn: 'শ্যাডো রুট যুক্ত করার পরে স্টাইলশিট কোনোভাবেই পরিবর্তন করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'adoptedStyleSheets is a frozen or observable array interface requiring reassignment or standard array operations.',
          bn: 'adoptedStyleSheets-এ পরিবর্তন আনতে সাধারণত সম্পূর্ণ অ্যারে পুনরায় সেট করতে হয়।'
        },
        explanation: {
          en: 'Reassigning the adoptedStyleSheets array with the updated list of CSSStyleSheet instances immediately applies the new rules to the shadow root.',
          bn: 'CSSStyleSheet ইনস্ট্যান্সের নতুন তালিকা দিয়ে adoptedStyleSheets পুনরায় অ্যাসাইন করলে তা সাথে সাথে শ্যাডো রুটে কার্যকর হয়।'
        }
      },
      {
        id: 'q-replace-vs-replacesync',
        kind: 'mcq',
        topic: 'sheet replace vs replaceSync',
        question: {
          en: 'What is the key operational difference between sheet.replace(css) and sheet.replaceSync(css)?',
          bn: 'sheet.replace(css) এবং sheet.replaceSync(css)-এর মধ্যে প্রধান কার্যপ্রণালীগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'replaceSync() executes synchronously on the current thread, while replace() returns a Promise that resolves asynchronously',
            bn: 'replaceSync() বর্তমান থ্রেডে সিঙ্ক্রোনাসভাবে কাজ করে, আর replace() একটি Promise প্রদান করে যা অ্যাসিনক্রোনাসভাবে সম্পন্ন হয়'
          },
          {
            en: 'replace() deletes the element from the DOM',
            bn: 'replace() উপাদানটিকে ডম থেকে মুছে ফেলে'
          },
          {
            en: 'replaceSync() cannot accept CSS variables',
            bn: 'replaceSync() সিএসএস ভেরিয়েবল গ্রহণ করতে পারে না'
          },
          {
            en: 'There is no difference between the two methods',
            bn: 'উভয় মেথডের মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Async replace allows external @import rules to load over the network before resolving.',
          bn: 'অ্যাসিনক্রোনাস replace বাইরের @import নিয়মগুলো নেটওয়ার্ক থেকে ডাউনলোড হতে দেয়।'
        },
        explanation: {
          en: 'replaceSync is synchronous and disallows external @import rules. replace returns a Promise, allowing remote CSS imports to resolve asynchronously before applying.',
          bn: 'replaceSync সিঙ্ক্রোনাস এবং এতে বাইরের @import চলে না। অন্যদিকে replace একটি Promise দেয় যা বাইরের সিএসএস লোড হওয়া পর্যন্ত অপেক্ষা করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'mail-across-the-wall',
    title: {
      en: 'Custom Events & Retargeting — Crossing the Shadow Boundary with composed and bubbles',
      bn: 'কাস্টম ইভেন্টস ও রিটার্গেটিং — composed এবং bubbles দিয়ে শ্যাডো বাউন্ডারি অতিক্রম'
    }
  }
};
