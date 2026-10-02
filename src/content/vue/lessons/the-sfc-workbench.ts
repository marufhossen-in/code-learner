import type { Lesson } from '../../../lib/types';

export const sfcWorkbenchLesson: Lesson = {
  slug: 'the-sfc-workbench',
  tech: 'vue',
  title: {
    en: 'Single-File Components — <script setup>, Templates & Scoped Styles',
    bn: 'সিঙ্গল-ফাইল কম্পোনেন্টস — <script setup>, টেমপ্লেট ও স্কোপড স্টাইল'
  },
  summary: {
    en: 'Vue Single-File Components (SFC) unify markup, script logic, and encapsulated styles into a cohesive .vue file. In this lesson, you will master the ergonomic syntax of <script setup>, understand how template bindings auto-unwrap refs, explore scoped CSS encapsulation with data attributes, and style dynamic elements using v-bind in CSS.',
    bn: 'Vue সিঙ্গল-ফাইল কম্পোনেন্টস (SFC) মার্কআপ, স্ক্রিপ্ট লজিক এবং এনক্যাপসুলেটেড স্টাইলকে একটি একক .vue ফাইলে সুন্দরভাবে সমন্বয় করে। এই পাঠে আপনি <script setup>-এর আধুনিক সিনট্যাক্স, টেমপ্লেটে স্বয়ংক্রিয় ref আনর‍্যাপ, ডাটা অ্যাট্রিবিউট চালিত স্কোপড সিএসএস এবং সিএসএসে v-bind ব্যবহার করে ডায়নামিক স্টাইলিং গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'sfc-file-structure-architecture',
      text: {
        en: 'The Single-File Component Three-Tier Architecture',
        bn: 'সিঙ্গল-ফাইল কম্পোনেন্টের ত্রি-স্তরীয় আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you write Vue applications, the standard building block is the Single-File Component (SFC) with the .vue extension. An SFC brings together three specialized blocks: template for visual HTML structure, script setup for TypeScript logic and state, and style scoped for isolated component styling. The Vue compiler pre-compiles these three blocks into an optimized JavaScript module.',
        bn: 'যখন আপনি Vue অ্যাপ্লিকেশন তৈরি করেন, তখন প্রধান ভিত্তি হলো .vue এক্সটেনশনযুক্ত সিঙ্গল-ফাইল কম্পোনেন্ট (SFC)। একটি SFC তিনটি বিশেষ ব্লককে একত্র করে: ভিজ্যুয়াল এইচটিএমএল কাঠামোর জন্য template, টাইপস্ক্রিপ্ট লজিকের জন্য script setup এবং উপাদান-নির্দিষ্ট স্টাইলিংয়ের জন্য style scoped। Vue কমপাইলার এই তিনটি ব্লককে প্রক্রিয়া করে একটি একক দ্রুতগতির জাভাস্ক্রিপ্ট মডিউলে রূপান্তর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Single-File Component (SFC)',
          def: {
            en: 'A file format with the .vue extension enclosing template, script, and style blocks for a self-contained UI component.',
            bn: 'একটি ফাইল ফরম্যাট (.vue) যা একই ফাইলের ভেতর টেমপ্লেট, স্ক্রিপ্ট এবং সিএসএস স্টাইল ধারণ করে।'
          }
        },
        {
          term: '<script setup>',
          def: {
            en: 'The modern compile-time syntactic sugar for Composition API, automatically exposing top-level bindings to the template.',
            bn: 'কম্পোজিশন এপিআই-এর আধুনিক সিনট্যাক্স যা সব ভেরিয়েবল ও ফাংশনকে সরাসরি টেমপ্লেটে ব্যবহারযোগ্য করে তোলে।'
          }
        },
        {
          term: '<style scoped>',
          def: {
            en: 'A scoped CSS mechanism that rewrites selectors with unique data attributes, preventing style bleed across components.',
            bn: 'একটি সিএসএস এনক্যাপসুলেশন ব্যবস্থা যা ইউনিক ডাটা অ্যাট্রিবিউট ব্যবহার করে অন্য কম্পোনেন্টে স্টাইল ছড়িয়ে পড়া রোধ করে।'
          }
        },
        {
          term: 'CSS v-bind()',
          def: {
            en: 'A feature allowing CSS declarations to reference reactive component variables directly inside <style> blocks.',
            bn: 'একটি আধুনিক ফিচার যা সিএসএস ঘোষণার ভেতরে সরাসরি রিঅ্যাক্টিভ ভেরিয়েবলের মান ব্যবহারের সুবিধা দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'sfc-blocks-matrix',
      text: {
        en: 'Single-File Component Blocks and Compiler Behavior Matrix',
        bn: 'এসএফসি ব্লকসমূহ ও কমপাইলার আচরণ ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'SFC Tag Block', bn: 'ব্লকের নাম' },
        { en: 'Primary Responsibility', bn: 'প্রধান দায়িত্ব' },
        { en: 'Compilation Output', bn: 'কম্পাইলেশন ফলাফল' }
      ],
      rows: [
        [
          { en: '<template>', bn: '<template>' },
          { en: 'Declarative markup, reactive interpolations, and directives', bn: 'ঘোষণামূলক মার্কআপ, রিঅ্যাক্টিভ ডাটা ও ডিরেক্টিভ' },
          { en: 'Pre-compiled virtual DOM render function with patch flags', bn: 'অপটিমাইজড ভার্চুয়াল ডম রেন্ডার ফাংশন' }
        ],
        [
          { en: '<script setup>', bn: '<script setup>' },
          { en: 'State definitions, props, emits, and lifecycle hooks', bn: 'স্টেট তৈরি, প্রপস, ইভেন্ট ও লাইফসাইকেল হুক' },
          { en: 'Component setup() function with automatic binding exports', bn: 'স্বয়ংক্রিয় এক্সপোর্ট সহ কম্পোনেন্ট setup() ফাংশন' }
        ],
        [
          { en: '<style scoped>', bn: '<style scoped>' },
          { en: 'Component-specific styling isolated from global CSS', bn: 'গ্লোবাল সিএসএস থেকে সুরক্ষিত নিজস্ব স্টাইলিং' },
          { en: 'PostCSS transformed CSS with unique [data-v-xxxx] attributes', bn: 'ইউনিক [data-v-xxxx] অ্যাট্রিবিউটযুক্ত সিএসএস' }
        ],
        [
          { en: '<style module>', bn: '<style module>' },
          { en: 'CSS Modules exposing hashed class names via $style', bn: '$style-এর মাধ্যমে হ্যাশ করা ক্লাসনেম সরবরাহ' },
          { en: 'Scoped hashed class names mapped to a JavaScript object', bn: 'জাভাস্ক্রিপ্ট অবজেক্টে ম্যাপ করা নিরাপদ ক্লাসনেম' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'sfc-simulation-code',
      text: {
        en: 'Working SFC Compilation and Scoped Attribute Simulation',
        bn: 'কার্যকরী এসএফসি কম্পাইলেশন ও স্কোপড অ্যাট্রিবিউট সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Vue Single-File Component Compiler and Scoped CSS
class MockSFCCompiler {
  constructor(componentId) {
    this.componentId = componentId; // e.g. "7ba5bd90"
    this.scopeAttribute = 'data-v-' + componentId;
  }

  // 1. Compile scoped CSS: injects scope attribute into selectors
  compileScopedCss(cssRule) {
    // Transforms ".button { color: red; }" -> ".button[data-v-7ba5bd90] { color: red; }"
    return cssRule.replace(/([a-zA-Z0-9_.-]+)\s*\{/, '$1[' + this.scopeAttribute + '] {');
  }

  // 2. Compile template: stamps scope attribute onto root DOM nodes
  compileTemplate(htmlTag) {
    return htmlTag.replace('>', ' ' + this.scopeAttribute + '>');
  }
}

const compiler = new MockSFCCompiler('7ba5bd90');

// Compile button styles and markup
const originalCss = '.primary-btn { background: #42b883; color: white; }';
const originalHtml = '<button class="primary-btn">Submit</button>';

const compiledCss = compiler.compileScopedCss(originalCss);
const compiledHtml = compiler.compileTemplate(originalHtml);

console.log('Compiled scoped CSS rule:', compiledCss.slice(0, 30));
// -> Compiled scoped CSS rule: .primary-btn[data-v-7ba5bd90]
console.log('Compiled element HTML markup:', compiledHtml.slice(0, 30));
// -> Compiled element HTML markup: <button data-v-7ba5bd90 class=
console.log('Component scope identifier:', compiler.componentId);
// -> Component scope identifier: 7ba5bd90`,
      caption: {
        en: 'SFC compiler transforms button selector with data-v-7ba5bd90 scope attribute',
        bn: 'এসএফসি কমপাইলার data-v-7ba5bd90 স্কোপ অ্যাট্রিবিউট দিয়ে বাটন সিলেক্টর রূপান্তর করছে'
      }
    },
    {
      type: 'heading',
      id: 'scoped-styling-rules',
      text: {
        en: 'Scoped CSS Rules and Deep Selector Discipline',
        bn: 'স্কোপড সিএসএস নিয়মাবলী ও ডিপ সিলেক্টর শৃঙ্খলা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Scoped styling shields your components from accidental global CSS pollution. When you need to style deeply nested child components or rich-text HTML injected via v-html, standard scoped selectors will not match child elements. You must use the :deep() pseudo-class selector to explicitly pierce the encapsulation boundary without leaking styles globally.',
        bn: 'স্কোপড স্টাইলিং আপনার কম্পোনেন্টগুলোকে গ্লোবাল সিএসএসের ক্ষতিকর প্রভাব থেকে রক্ষা করে। যখন চাইল্ড কম্পোনেন্টের ভেতরের অংশ বা v-html দিয়ে যুক্ত করা টেক্সট স্টাইল করতে হয়, তখন সাধারণ স্কোপড সিলেক্টর কাজ করে না। অন্য কোনো পেজে স্টাইল না ছড়িয়ে কেবল ওই নির্দিষ্ট জায়গায় ঢুকতে :deep() সিউডো-ক্লাস সিলেক্টর ব্যবহার করতে হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Embrace <script setup>: Always write <script setup> in Vue 3 for concise syntax, superior TypeScript support, and zero return boilerplate.',
          bn: '১. <script setup> ব্যবহার: সংক্ষিপ্ত কোড, চমৎকার টাইপস্ক্রিপ্ট সুবিধা এবং বাড়তি রিটার্ন পরিহার করতে <script setup> ব্যবহার করুন।'
        },
        {
          en: '2. Default to Scoped Styles: Always add the scoped attribute to <style> tags to prevent accidental CSS style leakage across pages.',
          bn: '২. সর্বদা স্কোপড স্টাইল: অন্য পেজে সিএসএস ছড়িয়ে পড়া আটকাতে সর্বদা <style scoped> ব্যবহার করুন।'
        },
        {
          en: '3. Pierce Boundaries with :deep(): When targeting child component classes, write :deep(.child-class) instead of dropping the scoped attribute.',
          bn: '৩. :deep() দিয়ে চাইল্ডে স্টাইল: চাইল্ড উপাদানের ভেতরে স্টাইল দিতে স্কোপ না তুলে বরং :deep(.child-class) ব্যবহার করুন।'
        },
        {
          en: '4. Bind Reactive Styles with v-bind(): Use v-bind(color) directly inside CSS declarations for effortless dynamic theming.',
          bn: '৪. সিএসএসে v-bind এর ব্যবহার: ডায়নামিক থিম বা রঙের জন্য সিএসএস ফাইলের ভেতর সরাসরি v-bind(color) ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'vu-sfc-ex1',
      kind: 'mcq',
      topic: 'script setup automatic template exposure',
      question: {
        en: 'In a Vue Single-File Component using "<script setup>", how do you expose top-level variables and functions to the "<template>" block?',
        bn: 'Vue সিঙ্গল-ফাইল কম্পোনেন্টে "<script setup>" ব্যবহার করার সময় টেমপ্লেটের কাছে ভেরিয়েবল ও ফাংশন কীভাবে উন্মুক্ত করতে হয়?'
      },
      options: [
        {
          en: 'Any variable, ref, computed property, or function declared at the top level of <script setup> is automatically accessible in the template without requiring an explicit return statement',
          bn: '<script setup>-এর শীর্ষ স্তরে ঘোষিত যেকোনো ভেরিয়েবল, ref, computed বা ফাংশন কোনো বাড়তি return স্টেটমেন্ট ছাড়াই টেমপ্লেটে সরাসরি ব্যবহার করা যায়'
        },
        {
          en: 'You must export every variable using the "export default" statement',
          bn: 'প্রতিটি ভেরিয়েবলকে "export default" স্টেটমেন্ট দিয়ে এক্সপোর্ট করতে হয়'
        },
        {
          en: 'Variables must be saved to window.localStorage first',
          bn: 'ভেরিয়েবলগুলোকে আগে window.localStorage-এ সেভ করতে হয়'
        },
        {
          en: 'You must call "this.expose(myVar)" inside a constructor',
          bn: 'কনস্ট্রাক্টরের ভেতর "this.expose(myVar)" কল করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '<script setup> automatically exposes all top-level bindings to the template.',
        bn: '<script setup> সব শীর্ষ ভেরিয়েবলকে টেমপ্লেটের সাথে স্বয়ংক্রিয়ভাবে যুক্ত করে।'
      },
      explanation: {
        en: '<script setup> is a compile-time syntactic sugar. The compiler automatically wires all top-level variables and imported components to the template render function.',
        bn: '<script setup> হলো আধুনিক কম্পাইলার সুবিধা। এটি কোনো বাড়তি কোড ছাড়াই ফাইলের সব ভেরিয়েবল ও কম্পোনেন্টকে টেমপ্লেটের সাথে স্বয়ংক্রিয়ভাবে জুড়ে দেয়।'
      }
    },
    {
      id: 'vu-sfc-ex2',
      kind: 'mcq',
      topic: 'style scoped data attribute mechanism',
      question: {
        en: 'How does Vue implement CSS encapsulation when a developer adds the "scoped" attribute to "<style scoped>"?',
        bn: 'কোনো ডেভেলপার "<style scoped>" লিখলে Vue কীভাবে সিএসএস এনক্যাপসুলেশন বা আইসোলেশন কার্যকর করে?'
      },
      options: [
        {
          en: 'PostCSS transforms the CSS selectors by appending a unique component data attribute (e.g. [data-v-xxxx]) and stamps that same attribute onto the rendered HTML elements',
          bn: 'PostCSS প্রতিটি সিএসএস সিলেক্টরে একটি ইউনিক ডাটা অ্যাট্রিবিউট (যেমন [data-v-xxxx]) জুড়ে দেয় এবং রেন্ডার হওয়া এইচটিএমএলেও সেই একই অ্যাট্রিবিউট বসিয়ে দেয়'
        },
        {
          en: 'It moves all CSS styles into an encrypted database table',
          bn: 'এটি সমস্ত সিএসএস স্টাইলকে একটি এনক্রিপ্টেড ডাটাবেজে পাঠিয়ে দেয়'
        },
        {
          en: 'It disables all external CSS frameworks like Tailwind and Bootstrap',
          bn: 'এটি টেইলউইন্ড বা বুটস্ট্র্যাপের মতো সব সিএসএস ফ্রেমওয়ার্ক বন্ধ করে দেয়'
        },
        {
          en: 'The scoped attribute turns all fonts into monospace',
          bn: 'স্কোপড অ্যাট্রিবিউট সব ফন্টকে মনোস্পেস ফন্টে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Scoped CSS uses PostCSS to attach unique data-v-attributes to selectors and elements.',
        bn: 'স্কোপড সিএসএস ইউনিক data-v- অ্যাট্রিবিউট ব্যবহার করে স্টাইলকে সংশ্লিষ্ট উপাদানেই আটকে রাখে।'
      },
      explanation: {
        en: 'Vue transforms scoped CSS by attaching a deterministic data attribute (like data-v-7ba5bd90) to component DOM elements and CSS selectors, preventing style leakage.',
        bn: 'Vue প্রতিটি কম্পোনেন্টের জন্য একটি নির্দিষ্ট ডাটা অ্যাট্রিবিউট তৈরি করে এইচটিএমএল ও সিএসএসে বসায়, ফলে অন্য কোনো কম্পোনেন্টের স্টাইল নষ্ট হওয়ার ভয় থাকে না।'
      }
    },
    {
      id: 'vu-sfc-ex3',
      kind: 'mcq',
      topic: 'deep selector pseudo class in scoped css',
      question: {
        en: 'Which CSS pseudo-class selector allows a parent component to style elements inside a nested child component or raw v-html content from within "<style scoped>"?',
        bn: '"<style scoped>"-এর ভেতর থেকে কোনো চাইল্ড কম্পোনেন্ট বা v-html দিয়ে আসা কন্টেন্টের উপাদানে স্টাইল দিতে কোন সিউডো-ক্লাস ব্যবহার করা হয়?'
      },
      options: [
        {
          en: ':deep(.target-class)',
          bn: ':deep(.target-class)'
        },
        {
          en: '>>>.target-class (deprecated / deep)',
          bn: '>>>.target-class (পুরোনো সিনট্যাক্স)'
        },
        {
          en: ':root(.target-class)',
          bn: ':root(.target-class)'
        },
        {
          en: ':global-override(.target-class)',
          bn: ':global-override(.target-class)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use the standard :deep() selector in modern Vue 3.',
        bn: 'আধুনিক Vue ৩-এ প্রমিত :deep() সিলেক্টর ব্যবহার করা হয়।'
      },
      explanation: {
        en: ':deep() compiles so that the scoped data attribute is placed on the parent selector while targeting descendant elements: .parent[data-v-xxxx] .target-class.',
        bn: ':deep() ব্যবহার করলে প্যারেন্ট উপাদানে স্কোপড অ্যাট্রিবিউট বসে কিন্তু তার ভেতরের চাইল্ড ক্লাসটিকেও নিখুঁতভাবে স্টাইল করা সম্ভব হয়।'
      }
    },
    {
      id: 'vu-sfc-ex4',
      kind: 'mcq',
      topic: 'css v-bind reactive styling',
      question: {
        en: 'How does the "v-bind()" function work inside a "<style>" block in Vue Single-File Components?',
        bn: 'Vue সিঙ্গল-ফাইল কম্পোনেন্টের "<style>" ব্লকের ভেতর "v-bind()" ফাংশনটি কীভাবে কাজ করে?'
      },
      options: [
        {
          en: 'It binds a CSS property value to a reactive variable in the component script, automatically updating an inline CSS custom property whenever the reactive state mutates',
          bn: 'এটি সিএসএস প্রোপার্টির মানকে স্ক্রিপ্টের একটি রিঅ্যাক্টিভ ভেরিয়েবলের সাথে যুক্ত করে এবং ভেরিয়েবল পাল্টালে স্বয়ংক্রিয়ভাবে সিএসএস কাস্টম প্রোপার্টি আপডেট করে'
        },
        {
          en: 'It downloads new CSS files from Google over HTTP',
          bn: 'এটি গুগল থেকে এইচটিটিপিতে নতুন সিএসএস ফাইল ডাউনলোড করে'
        },
        {
          en: 'It turns CSS into binary machine code',
          bn: 'এটি সিএসএসকে বাইনারি মেশিন কোডে বদলে দেয়'
        },
        {
          en: 'v-bind cannot be used inside CSS style blocks',
          bn: 'সিএসএস স্টাইল ব্লকের ভেতর v-bind ব্যবহার করা অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'CSS v-bind links reactive script state to CSS custom properties seamlessly.',
        bn: 'সিএসএস v-bind স্ক্রিপ্টের ভেরিয়েবলকে সরাসরি সিএসএস কাস্টম ভেরিয়েবলে পরিণত করে।'
      },
      explanation: {
        en: 'Vue compiles style v-bind(color) into an inline CSS custom property on the component root element, ensuring instant, seamless style reactivity.',
        bn: 'Vue স্টাইলে থাকা v-bind-কে একটি ইনলাইন সিএসএস ভেরিয়েবলে রূপান্তর করে, ফলে স্ক্রিপ্টে রঙ বা মাপ বদলালে ব্রাউজারে সাথে সাথে স্টাইল বদলে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-sfc-workbench-quiz',
    title: {
      en: 'Vue Single-File Components & Scoped Styling Quiz',
      bn: 'Vue সিঙ্গল-ফাইল কম্পোনেন্টস ও স্কোপড স্টাইলিং কুইজ'
    },
    questions: [
      {
        id: 'q-sfc-template-auto-unwrapping-rules',
        kind: 'mcq',
        topic: 'template automatic unwrapping rules for top-level refs',
        question: {
          en: 'When a top-level ref is accessed inside a Vue template ("<h1>{{ title }}</h1>"), why is writing "{{ title.value }}" unnecessary and discouraged?',
          bn: 'টেমপ্লেটে শীর্ষ স্তরের ref ব্যবহারের সময় ("<h1>{{ title }}</h1>") কেন "{{ title.value }}" লেখার প্রয়োজন নেই?'
        },
        options: [
          {
            en: 'The Vue template compiler automatically unwraps top-level refs in template expressions, allowing clean and concise property access without manual .value syntax',
            bn: 'Vue টেমপ্লেট কমপাইলার নিজে থেকেই শীর্ষ স্তরের Ref-কে আনর‍্যাপ করে দেয়, যার ফলে টেমপ্লেটে বাড়তি .value লেখা ছাড়াই পরিষ্কার কোড লেখা যায়'
          },
          {
            en: 'Because writing .value causes the web browser to crash',
            bn: 'কারণ .value লিখলে ওয়েব ব্রাউজার ক্র্যাশ করে'
          },
          {
            en: 'Because HTML standards do not allow the dot symbol in text',
            bn: 'কারণ এইচটিএমএল স্ট্যান্ডার্ডে টেক্সটে ডট চিহ্নের ব্যবহার নিষিদ্ধ'
          },
          {
            en: 'Template auto-unwrapping only works on macOS computers',
            bn: 'টেমপ্লেট অটো-আনর‍্যাপিং কেবল ম্যাক কম্পিউটারে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Vue automatically unwraps top-level refs when evaluating template expressions.',
          bn: 'টেমপ্লেটে এক্সপ্রেশন মূল্যায়নের সময় Vue নিজে থেকেই রেফ অবজেক্টের মান খুলে দেয়।'
        },
        explanation: {
          en: 'In template evaluation context, top-level refs are automatically unwrapped. Writing title.value inside the template is redundant and clutters markup.',
          bn: 'টেমপ্লেটে Vue নিজে থেকেই .value পড়ে নেয়। তাই টেমপ্লেটে বাড়তি .value লেখার কোনো প্রয়োজন নেই, কোড পরিষ্কার থাকে।'
        }
      },
      {
        id: 'q-nested-property-ref-unwrapping-caveat',
        kind: 'mcq',
        topic: 'nested object ref unwrapping limitation in templates',
        question: {
          en: 'If you have an object "const state = { count: ref(0) }", does Vue automatically unwrap "state.count" in the template expression "{{ state.count }}"?',
          bn: 'যদি আপনার একটি অবজেক্ট থাকে "const state = { count: ref(0) }", তবে টেমপ্লেটে "{{ state.count }}" লিখলে কি Vue স্বয়ংক্রিয়ভাবে আনর‍্যাপ করবে?'
        },
        options: [
          {
            en: 'No: automatic template unwrapping only applies to top-level properties; for nested properties like state.count, you must write "{{ state.count.value }}" unless state itself is wrapped in reactive()',
            bn: 'না: স্বয়ংক্রিয় আনর‍্যাপ কেবল শীর্ষ স্তরের ভেরিয়েবলেই কাজ করে; state.count-এর মতো ভেতরের মানে "{{ state.count.value }}" লিখতে হয়, যদি না state নিজে reactive() হয়'
          },
          {
            en: 'Yes: Vue unwraps everything regardless of object nesting depth',
            bn: 'হ্যাঁ: অবজেক্ট যত গভীরই হোক না কেন Vue সবকিছু নিজে থেকেই আনর‍্যাপ করে'
          },
          {
            en: 'No: nested refs are completely illegal in JavaScript',
            bn: 'না: নেস্টেড রেফ জাভাস্ক্রিপ্টে পুরোপুরি অবৈধ'
          },
          {
            en: 'Automatic unwrapping deletes the object from memory',
            bn: 'স্বয়ংক্রিয় আনর‍্যাপিং মেমরি থেকে অবজেক্টটি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Only top-level refs are automatically unwrapped in template expressions.',
          bn: 'টেমপ্লেটে কেবল একদম শীর্ষ স্তরের রেফগুলোই স্বয়ংক্রিয়ভাবে আনর‍্যাপ হয়।'
        },
        explanation: {
          en: 'Automatic template unwrapping only occurs for top-level properties in the template scope. For plain objects containing refs, accessing a nested property requires .value.',
          bn: 'টেমপ্লেটের সরাসরি ভেরিয়েবলই কেবল নিজে থেকে আনর‍্যাপ হয়। সাধারণ অবজেক্টের ভেতরের রেফ পড়তে .value স্পষ্ট লিখতে হয়, অথবা পুরো অবজেক্টটিকে reactive() বানাতে হয়।'
        }
      },
      {
        id: 'q-style-module-use-case',
        kind: 'mcq',
        topic: 'using style module with the $style identifier',
        question: {
          en: 'What unique capability does "<style module>" provide that differs from standard "<style scoped>"?',
          bn: '"<style module>" ব্যবহার করলে কোন বিশেষ সুবিধা পাওয়া যায় যা সাধারণ "<style scoped>"-এ নেই?'
        },
        options: [
          {
            en: 'It compiles CSS classes into a JavaScript object exposed as "$style", allowing developers to bind dynamic classes programmatically (e.g. :class="$style.primary")',
            bn: 'এটি সিএসএস ক্লাসগুলোকে একটি জাভাস্ক্রিপ্ট অবজেক্টে রূপান্তর করে "$style" আকারে উন্মুক্ত করে, ফলে কোড থেকে সরাসরি ডায়নামিক ক্লাস বাইন্ড করা যায়'
          },
          {
            en: 'It encrypts the stylesheet with password protection',
            bn: 'এটি পাসওয়ার্ড দিয়ে সিএসএস ফাইল সুরক্ষিত করে'
          },
          {
            en: 'It converts CSS animations into MP4 video clips',
            bn: 'এটি সিএসএস অ্যানিমেশনকে এমপি৪ ভিডিওতে বদলে দেয়'
          },
          {
            en: 'Style module can only be used in jQuery applications',
            bn: 'স্টাইল মডিউল কেবল জেকুয়েরি প্রজেক্টেই ব্যবহার করা সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: '<style module> exposes CSS classes as a JavaScript object on the $style property.',
          bn: '<style module> সিএসএস ক্লাসগুলোকে $style অবজেক্টের মাধ্যমে কোডে ব্যবহারযোগ্য করে।'
        },
        explanation: {
          en: 'CSS Modules compiles classes into unique hashed strings and injects them as an object into the component ($style). This provides programmatic access to class names in templates and scripts.',
          bn: 'CSS Modules ক্লাসগুলোকে একটি জাভাস্ক্রিপ্ট অবজেক্টে পরিণত করে। ফলে টেমপ্লেট ও স্ক্রিপ্ট উভয় জায়গা থেকেই :class="$style.active" লিখে টাইপ-সেফ ক্লাস ব্যবহার করা যায়।'
        }
      },
      {
        id: 'q-slotted-pseudo-class-usage',
        kind: 'mcq',
        topic: 'using the :slotted pseudo-class for targeting slot content',
        question: {
          en: 'Which CSS selector allows a component with "<style scoped>" to style content passed into its "<slot>" by a parent component?',
          bn: '"<style scoped>" থাকা কোনো কম্পোনেন্ট প্যারেন্ট থেকে তার "<slot>"-এ আসা কন্টেন্টে স্টাইল দিতে কোন সিলেক্টর ব্যবহার করে?'
        },
        options: [
          {
            en: ':slotted(.slot-element)',
            bn: ':slotted(.slot-element)'
          },
          {
            en: ':parent-override(.slot-element)',
            bn: ':parent-override(.slot-element)'
          },
          {
            en: '::content-slot(.slot-element)',
            bn: '::content-slot(.slot-element)'
          },
          {
            en: '@slot-rules(.slot-element)',
            bn: '@slot-rules(.slot-element)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Vue provides the :slotted() pseudo-class specifically for slot content styling.',
          bn: 'স্লটের ভেতরে আসা কন্টেন্ট স্টাইল করতে Vue-তে :slotted() সিলেক্টর ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'By default, scoped styles do not affect slot content because it belongs to the parent. The :slotted() selector allows the receiving component to explicitly style its slotted elements.',
          bn: 'ডিফল্টভাবে স্লটের কন্টেন্ট প্যারেন্টের অধীনে থাকে। :slotted() ব্যবহার করলে চাইল্ড কম্পোনেন্টও তার স্লটে আসা কন্টেন্টে নির্দিষ্ট স্টাইল প্রয়োগ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-directive-grammar',
    title: {
      en: 'Template Directives — v-bind, v-on, v-if, v-for & v-model',
      bn: 'টেমপ্লেট ডিরেক্টিভস — v-bind, v-on, v-if, v-for ও v-model'
    }
  }
};
