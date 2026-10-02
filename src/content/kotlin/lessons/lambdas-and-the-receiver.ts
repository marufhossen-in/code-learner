import type { Lesson } from '../../../lib/types';

export const LambdasAndTheReceiverLesson: Lesson = {
  slug: 'lambdas-and-the-receiver',
  tech: 'kotlin',
  title: {
    en: 'High-Order Functions & Lambdas with Receiver',
    bn: 'হায়ার-অর্ডার ফাংশন এবং ল্যাম্বডা উইথ রিসিভার'
  },
  summary: {
    en: 'Harness the functional expressive power of Kotlin. Understand first-class functions and trailing lambda syntax, optimize closure allocations using the inline modifier (with crossinline and noinline), and unlock declarative type-safe builders and domain-specific languages (DSLs) using lambdas with receiver (T.() -> Unit).',
    bn: 'Kotlin-এর ফাংশনাল সক্ষমতা সম্পূর্ণ আয়ত্ত করুন। ফার্স্ট-ক্লাস ফাংশন এবং ট্রেইলিং ল্যাম্বডা সিনট্যাক্স, inline মডিফায়ার (crossinline ও noinline সহ) দিয়ে ক্লোজার মেমোরি খরচ অপটিমাইজেশন এবং ল্যাম্বডা উইথ রিসিভার (T.() -> Unit) ব্যবহার করে টাইপ-সেফ ডোমেন-স্পেসিফিক ল্যাঙ্গুয়েজ (DSL) নির্মাণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'high-order-functions-and-inlining-heading',
      text: {
        en: 'High-Order Functions, Inlining, and Zero-Cost Closures',
        bn: 'হায়ার-অর্ডার ফাংশন, ইনলাইনিং এবং শূন্য-খরচের ক্লোজার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In object-centric languages, passing executable behavior traditionally required verbose anonymous inner classes. In Kotlin (JetBrains\' modern statically typed programming language), functions are genuine first-class citizens that can be accepted as arguments and returned dynamically. When the final parameter of a function is a lambda closure, Kotlin permits trailing lambda syntax, moving the braces outside the argument parentheses. On virtual machine runtimes, each lambda typically allocates an anonymous Function object on the heap, adding memory pressure. To eliminate this overhead, developers prepend the "inline" modifier. The compiler copies both the higher-order function and the lambda body directly into the call site, delivering zero object allocations and native execution speed.',
        bn: 'অবজেক্ট-প্রধান প্রোগ্রামিংয়ে কোনো আচরণ বা লজিক অন্য মেথডে পাঠাতে দীর্ঘ অ্যানোনিমাস ইনার ক্লাস লিখতে হতো। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ ফাংশন হলো পূর্ণ প্রথম শ্রেণির নাগরিক, যা অন্য ফাংশনকে প্যারামিটার হিসেবে গ্রহণ করতে বা রিটার্ন করতে পারে। ফাংশনের শেষ প্যারামিটারটি ল্যাম্বডা হলে Kotlin ব্র্যাকেটের বাইরে কোড ব্লক লেখার ট্রেইলিং ল্যাম্বডা সিনট্যাক্স সমর্থন করে। ভার্চুয়াল মেশিনে প্রতিটি সাধারণ ল্যাম্বডা হিপে একটি নতুন অবজেক্ট তৈরি করে মেমোরির ওপর চাপ বাড়ায়। এই অপচয় রোধ করতে Kotlin "inline" মডিফায়ার সরবরাহ করে। কম্পাইলার ফাংশন এবং ল্যাম্বডার বাইটকোড সরাসরি কল করার স্থানে বসিয়ে দেয়, ফলে কোনো বাড়তি অবজেক্ট তৈরি ছাড়াই সরাসরি সর্বোচ্চ নেটিভ গতি পাওয়া যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural difference between standard virtual lambda allocation and zero-overhead compiler inlining, alongside lambdas with receiver (T.() -> Unit).',
        bn: 'চিত্র ১: সাধারণ ল্যাম্বডার মেমোরি বরাদ্দ বনাম শূন্য-ওভারহেডের কম্পাইলার ইনলাইনিং এবং ল্যাম্বডা উইথ রিসিভারের (T.() -> Unit) স্থাপত্যিক রূপ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN INLINE FUNCTIONS &amp; LAMBDAS WITH RECEIVER</text>

  <!-- Left: Standard Lambda Overhead -->
  <g transform="translate(35, 65)">
    <rect width="235" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="235" height="30" rx="8" fill="#b91c1c" />
    <text x="117" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Standard Lambda: Heap Box</text>

    <text x="15" y="55" fill="#f87171" font-size="11" font-family="monospace">fun repeat(block: ()-&gt;Unit)</text>

    <!-- Heap Object -->
    <rect x="15" y="70" width="205" height="70" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="93" fill="#f87171" font-size="10" font-family="monospace">new Function0() Object</text>
    <text x="25" y="112" fill="#cbd5e1" font-size="9" font-family="sans-serif">Allocated on JVM Heap</text>
    <text x="25" y="127" fill="#cbd5e1" font-size="9" font-family="sans-serif">Virtual interface method call</text>

    <!-- Penalty -->
    <rect x="15" y="155" width="205" height="65" rx="5" fill="#ef4444" fill-opacity="0.15" />
    <text x="25" y="178" fill="#f87171" font-size="10" font-family="sans-serif" font-weight="bold">Garbage Collection Load:</text>
    <text x="25" y="196" fill="#f8fafc" font-size="9" font-family="sans-serif">Object allocation per loop call</text>
    <text x="25" y="210" fill="#cbd5e1" font-size="9" font-family="sans-serif">Adds memory pressure</text>
  </g>

  <!-- Center: Inline Zero-Cost -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#059669" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">inline Function: Zero Cost</text>

    <text x="15" y="55" fill="#34d399" font-size="11" font-family="monospace">inline fun repeat(block: ...)</text>

    <!-- Direct Inlining -->
    <rect x="15" y="70" width="210" height="70" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="93" fill="#34d399" font-size="10" font-family="monospace">Call-Site Code Injection</text>
    <text x="25" y="112" fill="#cbd5e1" font-size="9" font-family="sans-serif">Bytecode spliced directly</text>
    <text x="25" y="127" fill="#cbd5e1" font-size="9" font-family="sans-serif">into caller function</text>

    <!-- Benefit -->
    <rect x="15" y="155" width="210" height="65" rx="5" fill="#059669" fill-opacity="0.2" />
    <text x="25" y="178" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Zero Heap Allocation:</text>
    <text x="25" y="196" fill="#f8fafc" font-size="9" font-family="sans-serif">Zero object allocations!</text>
    <text x="25" y="210" fill="#cbd5e1" font-size="9" font-family="sans-serif">Permits non-local return jumps</text>
  </g>

  <!-- Right: Lambda with Receiver DSL -->
  <g transform="translate(570, 65)">
    <rect width="235" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="235" height="30" rx="8" fill="#9333ea" />
    <text x="117" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Lambda With Receiver: DSL</text>

    <text x="15" y="55" fill="#c084fc" font-size="11" font-family="monospace">init: HTMLBuilder.() -&gt; Unit</text>

    <!-- Receiver Scope -->
    <rect x="15" y="70" width="205" height="70" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="93" fill="#c084fc" font-size="10" font-family="monospace">this = HTMLBuilder</text>
    <text x="25" y="112" fill="#cbd5e1" font-size="9" font-family="sans-serif">Direct access to methods</text>
    <text x="25" y="127" fill="#cbd5e1" font-size="9" font-family="sans-serif">without typing "it." prefix</text>

    <!-- Declarative Power -->
    <rect x="15" y="155" width="205" height="65" rx="5" fill="#9333ea" fill-opacity="0.2" />
    <text x="25" y="178" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">Type-Safe Builders:</text>
    <text x="25" y="196" fill="#f8fafc" font-size="9" font-family="sans-serif">Powers Gradle, Compose,</text>
    <text x="25" y="210" fill="#cbd5e1" font-size="9" font-family="sans-serif">Ktor routing, and HTML DSLs</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'lambdas-with-receiver-dsl-heading',
      text: {
        en: 'Lambdas with Receiver and Declarative Type-Safe DSLs',
        bn: 'ল্যাম্বডা উইথ রিসিভার এবং ডিক্লেয়ারেটিভ টাইপ-সেফ DSL'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While standard lambdas take parameters via an explicit variable or implicit "it", Kotlin introduces a game-changing concept: lambdas with receiver. Declared as "T.() -> R", this signature transforms the specified type T into the implicit "this" context inside the closure body. Within the braces, developers can call methods on T directly without prefixing every invocation with an object identifier. This capability powers Kotlin\'s standard scope functions (like apply and with) and enables the construction of declarative Type-Safe Builders. Frameworks like Jetpack Compose, Ktor HTTP routing, and the Gradle Kotlin DSL rely entirely on lambdas with receiver to create clean, nesting configuration trees with compile-time type safety.',
        bn: 'সাধারণ ল্যাম্বডায় প্যারামিটার ব্যবহারের জন্য স্পষ্ট ভেরিয়েবল বা "it" লিখতে হলেও, Kotlin এতে যোগ করেছে একটি যুগান্তকারী ধারণা: ল্যাম্বডা উইথ রিসিভার। "T.() -> R" আকারে ঘোষিত এই সিগনেচারটি নির্দিষ্ট টাইপ T-কে ক্লোজার ব্লকের নিজস্ব "this" বানিয়ে দেয়। এর ফলে ব্লকের ভেতরে থাকা অবস্থায় অবজেক্টের নাম না লিখে সরাসরি তার প্রোপার্টি ও মেথড ডাকা যায়। এই ক্ষমতাটি Kotlin-এর স্ট্যান্ডার্ড স্কোপ ফাংশনগুলোর (যেমন apply ও with) পাশাপাশি টাইপ-সেফ বিল্ডার তৈরির ভিত্তি। Jetpack Compose, Ktor নেটওয়ার্ক রাউটিং এবং Gradle বিল্ড স্ক্রিপ্ট সম্পূর্ণভাবে এই ল্যাম্বডা উইথ রিসিভারের ওপর নির্ভর করে সুন্দর ও নেস্টেড কনফিগারেশন ট্রি গঠন করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin high-order functions, compiler inlining eliminating heap allocation objects, and an HTML/Config Type-Safe Builder engine powered by lambdas with receiver.',
        bn: 'Kotlin হায়ার-অর্ডার ফাংশন, অবজেক্ট তৈরি রোধকারী ইনলাইনিং এবং ল্যাম্বডা উইথ রিসিভার চালিত টাইপ-সেফ DSL ইঞ্জিনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Inlined High-Order Functions and Lambdas with Receiver (T.() -> Unit)

// 1. Simulating High-Order Functions & Inline Optimization
export class KotlinInliningSimulator {
  // Simulates non-inlined function: incurs heap allocation per invocation
  public static executeStandard(block: () => string): { result: string; heapAllocations: number } {
    return {
      result: block(),
      heapAllocations: 1 // Simulated new Function0() object on JVM heap
    };
  }

  // Simulates inline function: zero object allocation, code spliced directly!
  public static executeInlined(block: () => string): { result: string; heapAllocations: number } {
    // In real Kotlin bytecode, this function call and lambda are erased and spliced into caller
    return {
      result: block(),
      heapAllocations: 0 // Zero heap allocations!
    };
  }
}

// 2. Simulating Lambdas with Receiver: HTML / UI Type-Safe Builder DSL
// T.() -> Unit allows calling methods directly on "this"
export class HTMLTagElement {
  public children: HTMLTagElement[] = [];
  public textContent = '';

  constructor(public tagName: string) {}

  public tag(name: string, init: (builder: HTMLTagElement) => void): HTMLTagElement {
    const child = new HTMLTagElement(name);
    init(child); // Simulates executing lambda with receiver where "this" = child
    this.children.push(child);
    return child;
  }

  public text(content: string): void {
    this.textContent = content;
  }

  public render(indent = 0): string {
    const pad = '  '.repeat(indent);
    let output = pad + '<' + this.tagName + '>';
    if (this.textContent) output += this.textContent;
    if (this.children.length > 0) {
      output += '\n';
      for (const c of this.children) {
        output += c.render(indent + 1) + '\n';
      }
      output += pad;
    }
    output += '</' + this.tagName + '>';
    return output;
  }
}

// Top-level HTML DSL entry point
export function html(init: (builder: HTMLTagElement) => void): string {
  const root = new HTMLTagElement('html');
  init(root);
  return root.render();
}

// Execution Demonstration
const standardExec = KotlinInliningSimulator.executeStandard(() => 'Data computed.');
console.log('Standard Lambda Heap Allocations:', standardExec.heapAllocations); // 1

const inlinedExec = KotlinInliningSimulator.executeInlined(() => 'Data computed.');
console.log('Inlined Lambda Heap Allocations:', inlinedExec.heapAllocations); // 0

// Demonstrating Declarative Type-Safe DSL with Lambdas with Receiver
const renderedMarkup = html((page) => {
  page.tag('head', (h) => {
    h.tag('title', (t) => t.text('Kotlin Hub Learning'));
  });
  page.tag('body', (b) => {
    b.tag('h1', (h1) => h1.text('Welcome to Kotlin'));
    b.tag('p', (p) => p.text('Zero-overhead builders with lambdas with receiver.'));
  });
});

console.log('Rendered Declarative DSL Output:');
console.log(renderedMarkup);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'High-Order Function',
          def: {
            en: 'Function that accepts another function as an argument or returns a function as its output.',
            bn: 'ফাংশন যা অন্য কোনো ফাংশনকে প্যারামিটার হিসেবে গ্রহণ করে বা ফলাফল হিসেবে নতুন ফাংশন ফেরত দেয়।'
          }
        },
        {
          term: 'Trailing Lambda',
          def: {
            en: 'Syntactic sugar placing a lambda code block outside the parameter parentheses when it is the final argument.',
            bn: 'সিনট্যাক্স সুবিধা যা ফাংশনের শেষ আর্গুমেন্ট ল্যাম্বডা হলে বন্ধনীর বাইরে কোড ব্লক লেখার অনুমতি দেয়।'
          }
        },
        {
          term: 'Inline Modifier',
          def: {
            en: 'Keyword instructing the compiler to splice the function body and lambda directly into the call-site, eliminating allocations.',
            bn: 'কি-ওয়ার্ড যা কম্পাইলারকে ফাংশন ও ল্যাম্বডার কোড সরাসরি কল-সাইটে বসিয়ে মেমোরি খরচ শূন্য করার নির্দেশ দেয়।'
          }
        },
        {
          term: 'Lambda with Receiver',
          def: {
            en: 'Function literal declared with a receiver type (T.() -> Unit) binding the target object to "this" inside the block.',
            bn: 'ফাংশন লিটারেল যা ব্লকের ভেতরে নির্দিষ্ট অবজেক্টকে "this" হিসেবে উপস্থাপন করে টাইপ-সেফ DSL তৈরি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'trailing-lambda-syntax-sugar-ex1',
      kind: 'mcq',
      topic: 'trailing-lambda-syntax-rules',
      question: {
        en: 'Under what condition does Kotlin permit writing a lambda closure outside the function call parentheses (trailing lambda syntax)?',
        bn: 'কোন শর্তে Kotlin ফাংশন কলের বন্ধনীর বাইরে ল্যাম্বডা কোড ব্লক লেখার অনুমতি দেয় (ট্রেইলিং ল্যাম্বডা সিনট্যাক্স)?'
      },
      options: [
        {
          en: 'When the lambda closure is the last argument in the function parameter list (e.g. list.filter { it > 10 })',
          bn: 'যখন ল্যাম্বডা ক্লোজারটি ফাংশনের প্যারামিটার তালিকার সর্বশেষ আর্গুমেন্ট হয় (যেমন list.filter { it > 10 })'
        },
        {
          en: 'Only when running inside an Android background service',
          bn: 'কেবল অ্যান্ড্রয়েড ব্যাকগ্রাউন্ড সার্ভিসের ভেতর চলার সময়'
        },
        {
          en: 'Only if the lambda accepts exactly 5 parameters',
          bn: 'কেবল তখনই যদি ল্যাম্বডা ঠিক ৫ টি প্যারামিটার গ্রহণ করে'
        },
        {
          en: 'Trailing lambda syntax was banned in Kotlin 1.3',
          bn: 'Kotlin ১.৩ সংস্করণে ট্রেইলিং ল্যাম্বডা সিনট্যাক্স নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trailing lambda applies when the lambda is the final parameter.',
        bn: 'প্যারামিটার লিস্টের শেষ সদস্যটি ল্যাম্বডা হলেই বন্ধনীর বাইরে সেকেন্ড ব্র্যাকেট বসে।'
      },
      explanation: {
        en: 'Trailing lambda syntax provides clean, readable code reminiscent of built-in control structures, powering intuitive APIs like filter, map, and coroutine builders.',
        bn: 'এর মাধ্যমে কোড দেখতে সাধারণ if বা for লুপের মতো সহজ ও সাবলীল মনে হয়।'
      }
    },
    {
      id: 'inline-modifier-bytecode-benefit-ex2',
      kind: 'mcq',
      topic: 'inline-modifier-performance-optimization',
      question: {
        en: 'How does marking a higher-order function with the "inline" modifier enhance execution speed and memory efficiency on the JVM?',
        bn: 'হায়ার-অর্ডার ফাংশনে "inline" মডিফায়ার যুক্ত করলে কীভাবে JVM-এ এক্সিকিউশন গতি এবং মেমোরির দক্ষতা বৃদ্ধি পায়?'
      },
      options: [
        {
          en: 'The compiler splices the bytecode of both the function and its lambda argument directly into the call-site, eliminating Function object heap allocations and virtual call indirection',
          bn: 'কম্পাইলার ফাংশন এবং ল্যাম্বডার বাইটকোড সরাসরি কল-সাইটে বসিয়ে দেয়, ফলে কোনো বাড়তি অবজেক্ট তৈরি হয় না এবং ভার্চুয়াল মেথড কলের ধীরগতি দূর হয়'
        },
        {
          en: 'It accelerates the physical CPU clock frequency by 10 percent',
          bn: 'এটি সিপিইউ ঘড়ির গতি ১০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'It formats source code with 2-space indentation automatically',
          bn: 'এটি সোর্স কোড স্বয়ংক্রিয়ভাবে ২-স্পেস ইন্ডেন্টেশন দিয়ে সাজায়'
        },
        {
          en: 'inline functions can only be called from C++ files',
          bn: 'inline ফাংশন কেবল C++ ফাইল থেকে ডাকা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'inline copies bytecode to the call-site, avoiding object allocation.',
        bn: 'অবজেক্ট না বানিয়ে সরাসরি কোড বসিয়ে দেওয়ায় মেমোরি খরচ শূন্যে নেমে আসে।'
      },
      explanation: {
        en: 'Standard lambdas create anonymous class instances. Inlining eliminates this GC overhead entirely, making high-order functional abstractions as fast as hand-written loops.',
        bn: 'ফলে সাধারণ লুপের মতোই দ্রুত গতিতে আধুনিক ফাংশনাল কোড চালানো সম্ভব হয়।'
      }
    },
    {
      id: 'lambda-with-receiver-this-context-ex3',
      kind: 'mcq',
      topic: 'lambda-with-receiver-implicit-this-scope',
      question: {
        en: 'What unique architectural behavior differentiates a "lambda with receiver" (e.g. "StringBuilder.() -> Unit") from a standard lambda ("(StringBuilder) -> Unit")?',
        bn: 'একটি সাধারণ ল্যাম্বডার ("(StringBuilder) -> Unit") তুলনায় "ল্যাম্বডা উইথ রিসিভার" (যেমন "StringBuilder.() -> Unit") কোন স্বতন্ত্র সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'Inside the lambda body, the receiver instance becomes the implicit "this", allowing developers to invoke its methods directly without an explicit parameter reference',
          bn: 'ল্যাম্বডা ব্লকের ভেতরে রিসিভার অবজেক্টটি স্বয়ংক্রিয়ভাবে "this" হয়ে যায়, ফলে কোনো প্যারামিটারের নাম না লিখে সরাসরি তার মেথডগুলো ডাকা যায়'
        },
        {
          en: 'It deletes the StringBuilder from the device storage',
          bn: 'এটি ডিভাইস স্টোরেজ থেকে StringBuilder মুছে ফেলে'
        },
        {
          en: 'It converts the lambda into an SQL database index',
          bn: 'এটি ল্যাম্বডাকে একটি এসকিউএল ডাটাবেজ ইনডেক্সে রূপান্তর করে'
        },
        {
          en: 'Lambdas with receiver are restricted to Kotlin Native only',
          bn: 'ল্যাম্বডা উইথ রিসিভার কেবল Kotlin Native-এ সীমাবদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'In a lambda with receiver, the receiver is bound to "this".',
        bn: 'ব্লকের ভেতর অবজেক্টটি নিজেই this হয়ে যায়, ফলে ডট ছাড়াই মেথড ডাকা যায়।'
      },
      explanation: {
        en: 'Lambdas with receiver bind the receiver object as "this", enabling clean, declarative builder syntaxes that form the backbone of Kotlin Type-Safe DSLs.',
        bn: 'এর মাধ্যমে ডিক্লেয়ারেটিভ বিল্ডার ও চমৎকার কনফিগারেশন কোড তৈরি করা সম্ভব হয়।'
      }
    },
    {
      id: 'crossinline-modifier-nonlocal-returns-ex4',
      kind: 'mcq',
      topic: 'crossinline-modifier-nonlocal-return-prevention',
      question: {
        en: 'Why is the "crossinline" modifier strictly required when an inlined lambda is passed to another execution context (like a nested runnable or coroutine)?',
        bn: 'একটি ইনলাইনড ল্যাম্বডা যখন অন্য কোনো এক্সিকিউশন কনটেক্সটে (যেমন নেস্টেড রানেবল বা কোরুটিন) পাঠানো হয়, তখন কেন "crossinline" লেখা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'It preserves inlining performance while prohibiting non-local "return" statements that would illegally attempt to return from the outer enclosing function from a different thread',
          bn: 'এটি ইনলাইনিংয়ের সুবিধা বজায় রেখে নন-লোকাল "return" স্টেটমেন্ট নিষিদ্ধ করে, যাতে অন্য থ্রেড থেকে বাইরের ফাংশন থামিয়ে বের হওয়ার বিপজ্জনক চেষ্টা রোধ করা যায়'
        },
        {
          en: 'It converts the phone into a Bluetooth beacon',
          bn: 'এটি ফোনটিকে একটি ব্লুটুথ বিকনে রূপান্তর করে'
        },
        {
          en: 'It compresses the APK file into a 7z archive',
          bn: 'এটি এপিকে ফাইলটিকে একটি 7z আর্কাইভে সংকুচিত করে'
        },
        {
          en: 'crossinline was deprecated in Kotlin 1.5',
          bn: 'Kotlin ১.৫ সংস্করণে crossinline বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'crossinline disallows non-local returns when lambdas run in nested contexts.',
        bn: 'অন্য থ্রেড থেকে সরাসরি বাইরের ফাংশন থেকে বের হওয়া ঠেকাতে এটি বসে।'
      },
      explanation: {
        en: 'Inlined lambdas normally allow non-local returns. When the lambda executes inside an asynchronous callback or object literal, crossinline prevents illegal control flow jumps.',
        bn: 'ফলে থ্রেডের সীমানা অতিক্রম করে বিপজ্জনক জাম্প তৈরি হওয়ার ঝুঁকি বন্ধ হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-lambdas-and-the-receiver',
    title: {
      en: 'Kotlin Lambdas & DSLs Quiz',
      bn: 'Kotlin ল্যাম্বডা এবং DSL কুইজ'
    },
    questions: [
      {
        id: 'quiz-scope-functions-apply-vs-also',
        kind: 'mcq',
        topic: 'scope-functions-apply-vs-also-difference',
        question: {
          en: 'What is the architectural distinction between Kotlin scope functions "apply" and "also"?',
          bn: 'Kotlin স্কোপ ফাংশন "apply" এবং "also"-এর মধ্যে স্থাপত্যিক পার্থক্য কী?'
        },
        options: [
          {
            en: '"apply" provides the context object as "this" (lambda with receiver) and returns the object; "also" provides it as "it" (standard argument) and returns the object',
            bn: '"apply" কনটেক্সট অবজেক্টটিকে "this" হিসেবে উপস্থাপন করে (ল্যাম্বডা উইথ রিসিভার) এবং অবজেক্টটি ফেরত দেয়; আর "also" এটিকে "it" হিসেবে দেয় এবং অবজেক্টটি ফেরত দেয়'
          },
          {
            en: '"apply" runs on the GPU, while "also" runs on the hard drive',
            bn: '"apply" জিপিইউতে চলে, আর "also" হার্ড ড্রাইভে চলে'
          },
          {
            en: '"also" deletes the object after 10 milliseconds',
            bn: '"also" ১০ মিলিসেকেন্ড পর অবজেক্টটি মুছে ফেলে'
          },
          {
            en: 'apply and also are identical in every bytecode instruction',
            bn: 'apply এবং also প্রতিটি বাইটকোড নির্দেশনায় হুবহু এক'
          }
        ],
        answer: 0,
        hint: {
          en: 'apply uses "this" (receiver); also uses "it" (parameter). Both return the context object.',
          bn: 'কনফিগারেশনের জন্য apply (this) সেরা, আর লগিং বা সাইড-ইফেক্টের জন্য also (it) সেরা।'
        },
        explanation: {
          en: 'Use apply for configuring object properties (this.title = "...", this.width = 100). Use also for side-effects like logging or auditing without mutating the object.',
          bn: 'ফলে অবজেক্টের স্টেট কনফিগার করা এবং লগিংয়ের জন্য পরিষ্কার পার্থক্য বজায় থাকে।'
        }
      },
      {
        id: 'quiz-noinline-modifier-rationale',
        kind: 'mcq',
        topic: 'noinline-modifier-partial-inlining',
        question: {
          en: 'When should a Kotlin developer mark a parameter with "noinline" inside an inline function?',
          bn: 'একটি ইনলাইন ফাংশনের ভেতর কখন একজন ডেভেলপার কোনো প্যারামিটারকে "noinline" দিয়ে চিহ্নিত করবেন?'
        },
        options: [
          {
            en: 'When one specific lambda parameter needs to be stored in a variable, passed to a non-inline function, or returned from the function as an object',
            bn: 'যখন কোনো একটি নির্দিষ্ট ল্যাম্বডাকে কোনো ভ্যারিয়েবলে সংরক্ষণ করতে হয়, নন-ইনলাইন ফাংশনে পাঠাতে হয় বা অবজেক্ট হিসেবে রিটার্ন করতে হয়'
          },
          {
            en: 'When the developer wants to turn off syntax highlighting',
            bn: 'যখন ডেভেলপার সিনট্যাক্স হাইলাইটিং বন্ধ করতে চান'
          },
          {
            en: 'When running code on low battery power',
            bn: 'কম ব্যাটারি পাওয়ারে কোড চালানোর সময়'
          },
          {
            en: 'noinline is only supported in Kotlin JS',
            bn: 'noinline কেবল Kotlin JS-এ সমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'noinline prevents inlining for lambdas that need to exist as real objects.',
          bn: 'ল্যাম্বডাটিকে আসল অবজেক্ট হিসেবে ধরে রাখার প্রয়োজন হলে noinline ব্যবহার করতে হয়।'
        },
        explanation: {
          en: 'Inlined lambdas cannot be stored as object references because they cease to exist as objects. Marking a parameter noinline preserves its object identity on the heap.',
          bn: 'এর ফলে অবজেক্ট হিসেবে রেফারেন্স ধরে রাখা বা অন্য কোথাও পাঠানো সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-dsl-marker-annotation-purpose',
        kind: 'mcq',
        topic: 'dslmarker-annotation-scope-control',
        question: {
          en: 'What architectural protection does the "@DslMarker" meta-annotation enforce in complex Kotlin DSL builders?',
          bn: 'জটিল Kotlin DSL বিল্ডারে "@DslMarker" মেটা-অ্যানোটেশন কোন স্থাপত্যিক নিরাপত্তা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'It prevents outer receiver members from being implicitly called within nested inner builder scopes, eliminating accidental context leaking across DSL levels',
            bn: 'এটি নেস্টেড ইনার বিল্ডারের ভেতর থেকে বাইরের রিসিভারের মেথডগুলো অজান্তে কল করা বন্ধ করে, ফলে ডিএসএলের স্তরগুলোর মাঝে ভুল ডেটা ওভাররাইড রোধ হয়'
          },
          {
            en: 'It doubles the network bandwidth of the mobile device',
            bn: 'এটি মোবাইল ডিভাইসের নেটওয়ার্ক ব্যান্ডউইথ দ্বিগুণ করে'
          },
          {
            en: 'It encrypts the DSL code into base64',
            bn: 'এটি ডিএসএল কোডটিকে বেস৬৪-এ এনক্রিপ্ট করে'
          },
          {
            en: '@DslMarker was deprecated in Kotlin 1.4',
            bn: 'Kotlin ১.৪ সংস্করণে @DslMarker বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '@DslMarker prevents accidental access to outer receivers in nested scopes.',
          bn: 'ভেতরের ব্লকে কাজ করার সময় যাতে বাইরের ব্লকের ফিল্ড ভুল করে বদলে না যায়, তা ঠেকায়।'
        },
        explanation: {
          en: 'Without @DslMarker, writing nested HTML or Gradle DSLs risks invoking outer builder methods by mistake. The annotation confines implicit "this" calls strictly to the immediate scope.',
          bn: 'এর ফলে নেস্টেড কোড লেখার সময় বিভ্রান্তি দূর হয় এবং কোডের সঠিকতা নিশ্চিত হয়।'
        }
      },
      {
        id: 'quiz-anonymous-functions-vs-lambdas',
        kind: 'mcq',
        topic: 'anonymous-functions-explicit-return-type',
        question: {
          en: 'Why would an engineer prefer an "anonymous function" ("fun(x: Int): Int { return x * 2 }") over a standard lambda in Kotlin?',
          bn: 'একজন ইঞ্জিনিয়ার কেন Kotlin-এ সাধারণ ল্যাম্বডার বদলে "অ্যানোনিমাস ফাংশন" ("fun(x: Int): Int { return x * 2 }") ব্যবহার করতে পছন্দ করবেন?'
        },
        options: [
          {
            en: 'When explicit return types are required or when a standard local "return" statement is needed without qualifying label returns (@run)',
            bn: 'যখন রিটার্ন টাইপ স্পষ্টভাবে ঘোষণা করা প্রয়োজন হয় অথবা কোনো জটিল লেবেল (@run) ছাড়া সরাসরি সাধারণ "return" স্টেটমেন্ট ব্যবহারের দরকার পড়ে'
          },
          {
            en: 'Because anonymous functions use 0 bytes of RAM memory',
            bn: 'কারণ অ্যানোনিমাস ফাংশন ০ বাইট র‍্যাম মেমোরি ব্যবহার করে'
          },
          {
            en: 'Because lambdas cannot accept integer parameters',
            bn: 'কারণ ল্যাম্বডা কোনো পূর্ণসংখ্যা প্যারামিটার নিতে পারে না'
          },
          {
            en: 'Anonymous functions are only allowed in Java files',
            bn: 'অ্যানোনিমাস ফাংশন কেবল জাভা ফাইলে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'Anonymous functions allow specifying explicit return types and standard returns.',
          bn: 'স্পষ্ট রিটার্ন টাইপ লিখতে এবং সরাসরি return কি-ওয়ার্ড ব্যবহার করতে এটি দরকারি।'
        },
        explanation: {
          en: 'In a lambda, an unqualified return exits the enclosing function. In an anonymous function, return exits only the anonymous function itself, matching traditional method behavior.',
          bn: 'ফলে মূল ফাংশন থেকে বের না হয়ে কেবল বর্তমান ফাংশন থেকেই নিরাপদে রিটার্ন করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'classes-and-the-sealed',
    title: {
      en: 'Classes, Interfaces & Sealed Hierarchies',
      bn: 'ক্লাস, ইন্টারফেস এবং সিল্ড হায়ারার্কি'
    }
  }
};
