import type { Lesson } from '../../../lib/types';

export const TraitsAndTheGenericLesson: Lesson = {
  slug: 'traits-and-the-generic',
  tech: 'lang-rust',
  title: {
    en: 'Traits, Generics & Dynamic Dispatch',
    bn: 'ট্রেইটস, জেনেরিকস এবং ডায়নামিক ডিসপ্যাচ'
  },
  summary: {
    en: 'Define shared interfaces and abstractions in Rust using traits. Compare static monomorphization with dynamic vtable dispatch (dyn Trait), apply multiple trait bounds with where clauses, implement standard traits like Display and Drop, and understand orphan rules.',
    bn: 'ট্রেইট ব্যবহার করে Rust-এ শেয়ার্ড ইন্টারফেস এবং বিমূর্ততা সংজ্ঞায়িত করুন। স্ট্যাটিক মনোমর্ফাইজেশনের সাথে ডায়নামিক ভি-টেবিল ডিসপ্যাচ (dyn Trait)-এর তুলনা, where ক্লজ সহ একাধিক ট্রেইট বাউন্ড প্রয়োগ, Display ও Drop ইমপ্লিমেন্টেশন এবং অরফান রুলসের বিশদ বিশ্লেষণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'traits-and-monomorphization-heading',
      text: {
        en: 'Trait Definitions, Generics, and Static Monomorphization',
        bn: 'ট্রেইটের সংজ্ঞা, জেনেরিকস এবং স্ট্যাটিক মনোমর্ফাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In object-oriented languages like Java or C#, interfaces dictate polymorphic behavior through virtual method tables by default. In Rust (the memory-safe systems programming language), polymorphic contracts are defined via traits. A trait declares method signatures that disparate types can implement to guarantee uniform capabilities. When a function specifies generic parameters constrained by trait bounds (such as "fn print<T: Display>(item: T)"), Rust utilizes static dispatch known as monomorphization. During compilation, the compiler inspects every concrete type supplied to the generic function and generates dedicated native machine code for each type. This yields zero runtime dispatch overhead, enabling aggressive compiler function inlining at the expense of slight binary file growth.',
        bn: 'Java বা C#-এর মতো অবজেক্ট-ওরিয়েন্টেড ভাষায় ইন্টারফেস সাধারণত ডিফল্টভাবে ভার্চুয়াল মেথড টেবিল দিয়ে পলিমরফিজম পরিচালনা করে। কিন্তু Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা) পলিমরফিক চুক্তি সংজ্ঞায়িত করে ট্রেইটের মাধ্যমে। একটি ট্রেইট মেথডের সিগনেচার ঘোষণা করে যা যেকোনো ডেটা টাইপ ইমপ্লিমেন্ট করতে পারে। যখন কোনো ফাংশন ট্রেইট বাউন্ড যুক্ত জেনেরিক প্যারামিটার গ্রহণ করে (যেমন "fn print<T: Display>(item: T)"), তখন Rust মনোমর্ফাইজেশন নামের স্ট্যাটিক ডিসপ্যাচ পদ্ধতি প্রয়োগ করে। কম্পাইলেশনের সময় কম্পাইলার প্রতিটি ব্যবহৃত কংক্রিট টাইপ পরীক্ষা করে এবং প্রতিটির জন্য আলাদা নেটিভ মেশিন কোড কপি তৈরি করে। এর ফলে রানটাইমে অতিরিক্ত কোনো সময় খরচ হয় না এবং সরাসরি কোড ইনলাইনিং সম্ভব হয়, যদিও বাইনারি সাইজ কিছুটা বাড়ে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between Static Dispatch (monomorphization) and Dynamic Dispatch (16-byte fat pointer with 8-byte data and 8-byte vtable pointer).',
        bn: 'চিত্র ১: স্ট্যাটিক ডিসপ্যাচ (মনোমর্ফাইজেশন) এবং ডায়নামিক ডিসপ্যাচ (১৬-বাইট ফ্যাট পয়েন্টার যাতে ৮-বাইট ডেটা ও ৮-বাইট ভি-টেবিল পয়েন্টার থাকে)-এর স্থাপত্যিক তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">STATIC MONOMORPHIZATION VS DYNAMIC VTABLE DISPATCH</text>

  <!-- Left: Static Dispatch -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Static Dispatch (impl Trait / Generics)</text>

    <!-- Source Generic -->
    <rect x="15" y="45" width="335" height="35" rx="5" fill="#0f172a" />
    <text x="25" y="67" fill="#38bdf8" font-size="10" font-family="monospace">fn render&lt;T: Widget&gt;(item: T) { item.draw(); }</text>

    <!-- Compiler Monomorphization Process -->
    <rect x="15" y="90" width="335" height="70" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="110" fill="#94a3b8" font-size="9" font-family="sans-serif">Compiler specializes 2 concrete binary functions:</text>
    <text x="25" y="130" fill="#34d399" font-size="10" font-family="monospace">1. render_button(item: Button)</text>
    <text x="25" y="148" fill="#34d399" font-size="10" font-family="monospace">2. render_panel(item: Panel)</text>

    <!-- Performance outcome -->
    <rect x="15" y="170" width="335" height="50" rx="5" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" />
    <text x="25" y="190" fill="#38bdf8" font-size="10" font-family="monospace">Direct CPU Call Instruction</text>
    <text x="25" y="208" fill="#f8fafc" font-size="10" font-family="sans-serif">0 ns lookup penalty | Fully inlinable machine code</text>
  </g>

  <!-- Right: Dynamic Dispatch -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Dynamic Dispatch (&amp;dyn Trait / Box&lt;dyn&gt;)</text>

    <!-- Source dyn -->
    <rect x="15" y="45" width="335" height="35" rx="5" fill="#0f172a" />
    <text x="25" y="67" fill="#fbbf24" font-size="10" font-family="monospace">fn render(item: &amp;dyn Widget) { item.draw(); }</text>

    <!-- 16-byte Fat Pointer Details -->
    <rect x="15" y="90" width="160" height="70" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="22" y="112" fill="#fbbf24" font-size="10" font-family="monospace">Data Pointer (8 B)</text>
    <text x="22" y="135" fill="#94a3b8" font-size="9" font-family="sans-serif">Points to instance</text>
    <text x="22" y="150" fill="#cbd5e1" font-size="9" font-family="sans-serif">data on Heap/Stack</text>

    <rect x="190" y="90" width="160" height="70" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="197" y="112" fill="#fbbf24" font-size="10" font-family="monospace">Vtable Pointer (8 B)</text>
    <text x="197" y="135" fill="#94a3b8" font-size="9" font-family="sans-serif">Points to virtual</text>
    <text x="197" y="150" fill="#cbd5e1" font-size="9" font-family="sans-serif">method table &amp; drop</text>

    <!-- Dynamic outcome -->
    <rect x="15" y="170" width="335" height="50" rx="5" fill="#d97706" fill-opacity="0.2" stroke="#f59e0b" />
    <text x="25" y="190" fill="#fbbf24" font-size="10" font-family="monospace">Indirect Call via Vtable Function Pointer</text>
    <text x="25" y="208" fill="#f8fafc" font-size="10" font-family="sans-serif">Allows heterogeneous collections: Vec&lt;Box&lt;dyn Widget&gt;&gt;</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'dynamic-dispatch-and-coherence-heading',
      text: {
        en: 'Dynamic Dispatch (dyn Trait) and the Orphan Rule',
        bn: 'ডায়নামিক ডিসপ্যাচ (dyn Trait) এবং অরফান রুল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While static monomorphization delivers blistering execution speed, it fails when an application requires heterogeneous collections. A Rust vector requires every element to occupy the exact same byte width. To store diverse types conforming to the same trait within a single collection, developers use trait objects formulated as "&dyn Trait" or "Box<dyn Trait>". A trait object operates as a 16-byte fat pointer consisting of an 8-byte pointer to the underlying data alongside an 8-byte pointer to a vtable (virtual method table). Furthermore, Rust protects the ecosystem through the Orphan Rule: you can implement a trait for a given type if and only if either the trait or the type is local to your current crate. This rule forbids two independent dependencies from authoring conflicting implementations for external types.',
        bn: 'স্ট্যাটিক মনোমর্ফাইজেশন দুর্দান্ত গতি প্রদান করলেও বিভিন্ন ধরণের অবজেক্ট এক তালিকায় রাখার সময় তা ব্যর্থ হয়। একটি Rust ভেক্টরে প্রতিটি উপাদানের সাইজ সমান হতে হয়। একই ট্রেইট পূরণকারী একাধিক ভিন্ন টাইপকে এক তালিকায় সংরক্ষণ করতে ডেভেলপাররা "&dyn Trait" বা "Box<dyn Trait>" ব্যবহার করেন। একটি ট্রেইট অবজেক্ট ১৬-বাইটের ফ্যাট পয়েন্টার হিসেবে কাজ করে, যার মধ্যে ৮-বাইট ডেটা নির্দেশ করে এবং অন্য ৮-বাইট একটি ভার্চুয়াল মেথড টেবিল (ভি-টেবিল) নির্দেশ করে। উপরন্তু, Rust তার ইকোসিস্টেমকে সুরক্ষিত রাখতে অরফান রুল প্রয়োগ করে: আপনি কেবল তখনই কোনো টাইপের জন্য ট্রেইট ইমপ্লিমেন্ট করতে পারবেন যখন ট্রেইট অথবা টাইপটির অন্তত একটি আপনার নিজস্ব প্রজেক্ট বা ক্রেটের ভেতরে থাকবে। এই কঠোর নিয়ম বহিরাগত দুই লাইব্রেরির মধ্যে সাংঘর্ষিক কোড তৈরি চিরতরে বন্ধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust static monomorphization versus 16-byte fat pointer dynamic dispatch.',
        bn: 'Rust স্ট্যাটিক মনোমর্ফাইজেশন বনাম ১৬-বাইট ফ্যাট পয়েন্টার ডায়নামিক ডিসপ্যাচের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Trait Dispatch: Static Monomorphization vs Dynamic Vtable

export interface WidgetTrait {
  draw(): string;
  byteSize(): number;
}

export class ButtonWidget implements WidgetTrait {
  constructor(public label: string) {}
  draw(): string { return 'Rendered Button: ' + this.label; }
  byteSize(): number { return 32; }
}

export class PanelWidget implements WidgetTrait {
  constructor(public title: string, public width: number) {}
  draw(): string { return 'Rendered Panel: ' + this.title + ' (' + this.width + 'px)'; }
  byteSize(): number { return 64; }
}

// 1. Static Dispatch Simulation (Monomorphization generates specialized functions)
export class MonomorphicRenderer {
  // Direct specialized execution without vtable indirection
  static renderButtonDirect(btn: ButtonWidget): string {
    return '[Static Dispatch Direct Call] ' + btn.draw();
  }

  static renderPanelDirect(panel: PanelWidget): string {
    return '[Static Dispatch Direct Call] ' + panel.draw();
  }
}

// 2. Dynamic Dispatch Simulation (16-Byte Fat Pointer containing Data + Vtable)
export interface FatPointerTraitObject {
  dataAddress: number; // 8-byte pointer to heap instance
  vtable: {
    drawFn: (data: unknown) => string;
    sizeFn: (data: unknown) => number;
    dropFn: (data: unknown) => void;
  }; // 8-byte pointer to virtual table
  instanceData: unknown;
}

export class DynamicTraitDispatcher {
  public static createTraitObject(widget: WidgetTrait, heapAddress: number): FatPointerTraitObject {
    return {
      dataAddress: heapAddress,
      vtable: {
        drawFn: (data: unknown) => (data as WidgetTrait).draw(),
        sizeFn: (data: unknown) => (data as WidgetTrait).byteSize(),
        dropFn: () => console.log('Dropped instance at heap address:', heapAddress)
      },
      instanceData: widget
    };
  }

  public static invokeVirtualMethod(obj: FatPointerTraitObject): string {
    // Indirect lookup through vtable pointer
    return '[Dynamic Vtable Indirect Call] ' + obj.vtable.drawFn(obj.instanceData);
  }
}

// Execution
const btn = new ButtonWidget('Submit Order');
const pnl = new PanelWidget('User Dashboard', 1024);

// Static calls (0 ns indirect lookup, resolved at compile-time)
console.log(MonomorphicRenderer.renderButtonDirect(btn));
console.log(MonomorphicRenderer.renderPanelDirect(pnl));

// Heterogeneous collection via Trait Objects (Dynamic Dispatch)
const traitObjects: FatPointerTraitObject[] = [
  DynamicTraitDispatcher.createTraitObject(btn, 1001),
  DynamicTraitDispatcher.createTraitObject(pnl, 1002)
];

console.log('Total Trait Objects in Vector:', traitObjects.length); // 2
for (const obj of traitObjects) {
  console.log(DynamicTraitDispatcher.invokeVirtualMethod(obj));
}`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Trait',
          def: {
            en: 'A contract defining method signatures and behaviors that multiple types can implement in Rust.',
            bn: 'একটি চুক্তি যা মেথড সিগনেচার এবং আচরণ নির্ধারণ করে যা একাধিক টাইপ ইমপ্লিমেন্ট করতে পারে।'
          }
        },
        {
          term: 'Monomorphization',
          def: {
            en: 'Compile-time code generation producing specialized machine code for each concrete type, yielding zero runtime overhead.',
            bn: 'কম্পাইল-টাইম প্রক্রিয়া যা প্রতিটি সুনির্দিষ্ট টাইপের জন্য আলাদা নেটিভ কোড তৈরি করে শূন্য ওভারহেড নিশ্চিত করে।'
          }
        },
        {
          term: 'Dynamic Dispatch (dyn)',
          def: {
            en: 'Runtime polymorphic method invocation using a 16-byte fat pointer (8-byte data pointer + 8-byte vtable pointer).',
            bn: 'রানটাইম পলিমরফিক মেথড কল যা ১৬-বাইটের ফ্যাট পয়েন্টার (৮-বাইট ডেটা + ৮-বাইট ভি-টেবিল) দ্বারা সম্পন্ন হয়।'
          }
        },
        {
          term: 'Orphan Rule',
          def: {
            en: 'Coherence rule ensuring a trait can only be implemented if either the trait or the target type is local to the crate.',
            bn: 'নিয়ম যা নিশ্চিত করে যে ট্রেইট বা টাইপ দুটির যেকোনো একটি বর্তমান ক্রেটের নিজস্ব না হলে তা ইমপ্লিমেন্ট করা যাবে না।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'static-monomorphization-overhead-ex1',
      kind: 'mcq',
      topic: 'static-dispatch-monomorphization-performance',
      question: {
        en: 'How does Rust achieve zero runtime dispatch overhead when invoking generic functions with trait bounds ("fn run<T: Trait>(item: T)")?',
        bn: 'ট্রেইট বাউন্ড যুক্ত জেনেরিক ফাংশন ("fn run<T: Trait>(item: T)") কলের ক্ষেত্রে Rust কীভাবে শূন্য রানটাইম ওভারহেড অর্জন করে?'
      },
      options: [
        {
          en: 'Through monomorphization: the compiler inspects every concrete type used and compiles dedicated, direct-calling machine code for each type',
          bn: 'মনোমর্ফাইজেশনের মাধ্যমে: কম্পাইলার প্রতিটি ব্যবহৃত নির্দিষ্ট টাইপ পরীক্ষা করে এবং প্রতিটির জন্য সরাসরি কলযোগ্য আলাদা নেটিভ মেশিন কোড কম্পাইল করে'
        },
        {
          en: 'By converting all structs into 64-bit integer values',
          bn: 'সমস্ত স্ট্রাক্টকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'By relying on a runtime garbage collection daemon',
          bn: 'একটি ব্যাকগ্রাউন্ড রানটাইম গার্বেজ কালেকশন ডেমন ব্যবহার করে'
        },
        {
          en: 'Monomorphization executes only inside virtual machines',
          bn: 'মনোমর্ফাইজেশন কেবল ভার্চুয়াল মেশিনের ভেতরে কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler duplicates function bodies for each concrete type used.',
        bn: 'কম্পাইলার কোড তৈরির সময়ই প্রতিটি ডেটা টাইপের জন্য আলাদা নিখুঁত ফাংশন তৈরি করে রাখে।'
      },
      explanation: {
        en: 'Monomorphization trades compilation time and binary size for peak runtime performance, turning polymorphic calls into direct CPU jump instructions.',
        bn: 'এর ফলে রানটাইমে টেবিল খুঁজে সময় নষ্ট করতে হয় না, সরাসরি নির্দেশনায় কাজ হয়।'
      }
    },
    {
      id: 'trait-object-fat-pointer-size-ex2',
      kind: 'mcq',
      topic: 'trait-object-fat-pointer-layout',
      question: {
        en: 'What is the standard memory footprint and physical structure of a dynamic trait object reference ("&dyn Trait") on a 64-bit architecture?',
        bn: 'একটি ৬৪-বিট আর্কিটেকচারে ডায়নামিক ট্রেইট অবজেক্ট রেফারেন্সের ("&dyn Trait") আদর্শ মেমোরি আকার এবং অভ্যন্তরীণ কাঠামো কী?'
      },
      options: [
        {
          en: 'A 16-byte fat pointer containing an 8-byte pointer to the concrete instance data and an 8-byte pointer to the virtual method table (vtable)',
          bn: 'একটি ১৬-বাইট ফ্যাট পয়েন্টার যার মধ্যে ৮-বাইট ডেটা নির্দেশকারী পয়েন্টার এবং ৮-বাইট ভার্চুয়াল মেথড টেবিল (ভি-টেবিল) পয়েন্টার থাকে'
        },
        {
          en: 'A single 4-byte floating point number',
          bn: 'একটি সাধারণ ৪-বাইট ফ্লোটিং পয়েন্ট সংখ্যা'
        },
        {
          en: 'An unlimited number of bytes allocated in CPU cache registers',
          bn: 'সিপিইউ ক্যাশ রেজিস্টারে বরাদ্দকৃত সীমাহীন বাইট'
        },
        {
          en: 'Exactly 24 bytes mirroring an owned String header',
          bn: 'একটি ওনড String হেডারের মতো ঠিক ২৪ বাইট'
        }
      ],
      answer: 0,
      hint: {
        en: 'A trait object fat pointer contains 2 pointers: 8 bytes for data and 8 bytes for vtable (16 bytes total).',
        bn: 'এতে ২ টি পয়েন্টার রয়েছে: ডেটার জন্য ৮ বাইট এবং ভি-টেবিলের জন্য ৮ বাইট (মোট ১৬ বাইট)।'
      },
      explanation: {
        en: 'Because the compiler cannot know the concrete size of the underlying type behind dyn Trait at compile time, the fat pointer bundles the vtable pointer alongside the instance pointer.',
        bn: 'ভি-টেবিলের পয়েন্টারটি রানটাইমে সঠিক মেথড খুঁজে বের করার পথ দেখিয়ে দেয়।'
      }
    },
    {
      id: 'orphan-rule-coherence-ex3',
      kind: 'mcq',
      topic: 'orphan-rule-coherence-guarantee',
      question: {
        en: 'What fundamental ecosystem safety guarantee is established by Rust\'s Orphan Rule regarding trait implementations?',
        bn: 'ট্রেইট ইমপ্লিমেন্টেশনের ক্ষেত্রে Rust-এর অরফান রুল ইকোসিস্টেমে কোন মৌলিক নিরাপত্তা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'You can implement a trait on a type ONLY IF either the trait or the target type is defined within your own local crate, preventing conflicting third-party implementations',
          bn: 'আপনি কেবল তখনই একটি টাইপের ওপর ট্রেইট প্রয়োগ করতে পারবেন যখন ট্রেইট অথবা টাইপটির অন্তত একটি আপনার নিজস্ব প্রজেক্টে সংজ্ঞায়িত থাকে, যা বাহ্যিক লাইব্রেরির মধ্যে সংঘাত রোধ করে'
        },
        {
          en: 'Structs without parent classes are automatically destroyed',
          bn: 'প্যারেন্ট ক্লাস ছাড়া তৈরি স্ট্রাক্টগুলো নিজে থেকেই ধ্বংস হয়ে যায়'
        },
        {
          en: 'Traits must be written in assembly language',
          bn: 'ট্রেইটগুলোকে অবশ্যই অ্যাসেম্বলি ভাষায় লিখতে হয়'
        },
        {
          en: 'The Orphan Rule was deprecated in Rust 2015',
          bn: 'Rust ২০১৫ সংস্করণে অরফান রুল বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Either the trait or the type must be local to your crate (coherence).',
        bn: 'হয় ট্রেইট নয় টাইপ—যেকোনো একটিকে নিজের কোডের ভেতরে জন্ম নিতে হবে।'
      },
      explanation: {
        en: 'Without the orphan rule, two external crates could implement the standard Display trait for standard Vec, causing an irreconcilable ambiguity when compiled together.',
        bn: 'এ নিয়ম না থাকলে একই টাইপে দুটি ভিন্ন লাইব্রেরি একই ট্রেইট বসালে পুরো প্রোগ্রাম অচল হয়ে যেত।'
      }
    },
    {
      id: 'object-safety-requirements-ex4',
      kind: 'mcq',
      topic: 'trait-object-safety-rules',
      question: {
        en: 'Which of the following conditions is strictly required for a Rust trait to be "Object Safe" (usable as "dyn Trait")?',
        bn: 'একটি Rust ট্রেইট "অবজেক্ট সেফ" (অর্থাৎ "dyn Trait" হিসেবে ব্যবহারযোগ্য) হওয়ার জন্য নিচের কোন শর্তটি পূরণ করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'None of the trait\'s methods return the concrete "Self" type, and methods do not introduce generic type parameters',
          bn: 'ট্রেইটের কোনো মেথড কংক্রিট "Self" টাইপ রিটার্ন করতে পারবে না এবং মেথডগুলোতে নিজস্ব জেনেরিক টাইপ প্যারামিটার থাকতে পারবে না'
        },
        {
          en: 'The trait must implement the 32-bit integer addition operator',
          bn: 'ট্রেইটটিকে অবশ্যই ৩২-বিট পূর্ণসংখ্যা যোগের অপারেটর বাস্তবায়ন করতে হবে'
        },
        {
          en: 'The trait must be annotated with the extern keyword',
          bn: 'ট্রেইটটিকে অবশ্যই extern কি-ওয়ার্ড দিয়ে চিহ্নিত করতে হবে'
        },
        {
          en: 'Every method must take exactly 10 parameters',
          bn: 'প্রতিটি মেথডে ঠিক ১০ টি প্যারামিটার থাকতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returning Self or using method generics breaks the fixed layout of the vtable.',
        bn: 'ভি-টেবিলের নির্দিষ্ট সাইজ ধরে রাখার জন্য মেথড থেকে Self ফেরত দেওয়া বা জেনেরিক রাখা নিষিদ্ধ।'
      },
      explanation: {
        en: 'If a method returns Self, the compiler would not know how much space to allocate for the return value behind a dynamic pointer. Thus, Self-returning methods forfeit object safety.',
        bn: 'কারণ ডায়নামিক পয়েন্টারের আড়ালে থাকা ডেটার সঠিক সাইজ কম্পাইলার আগে থেকে অনুমান করতে পারে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-traits-and-the-generic',
    title: {
      en: 'Rust Traits & Polymorphism Quiz',
      bn: 'Rust ট্রেইটস এবং পলিমরফিজম কুইজ'
    },
    questions: [
      {
        id: 'quiz-where-clause-readability-advantage',
        kind: 'mcq',
        topic: 'where-clause-multiple-trait-bounds',
        question: {
          en: 'Why do seasoned Rust engineers utilize "where" clauses when defining complex generic trait bounds on functions?',
          bn: 'অভিজ্ঞ Rust ইঞ্জিনিয়াররা জটিল জেনেরিক ট্রেইট বাউন্ড সংজ্ঞায়িত করার সময় কেন "where" ক্লজ ব্যবহার করেন?'
        },
        options: [
          {
            en: 'Where clauses separate elaborate trait constraints from the parameter list, making signatures with multiple generic bounds readable and clean',
            bn: 'Where ক্লজ জটিল ট্রেইটের শর্তগুলোকে প্যারামিটার তালিকা থেকে আলাদা করে নিচে রাখে, ফলে একাধিক জেনেরিক বাউন্ডযুক্ত কোড অত্যন্ত পাঠযোগ্য ও পরিচ্ছন্ন থাকে'
          },
          {
            en: 'Where clauses run SQL database queries during compilation',
            bn: 'Where ক্লজ কম্পাইলেশনের সময় এসকিউএল ডাটাবেজ কোয়েরি চালায়'
          },
          {
            en: 'Where clauses disable the borrow checker inside that function',
            bn: 'Where ক্লজ সেই ফাংশনের ভেতরে বরো চেকারকে নিষ্ক্রিয় করে দেয়'
          },
          {
            en: 'Where clauses reduce memory usage from 16 bytes to 8 bytes',
            bn: 'Where ক্লজ মেমোরি ব্যবহার ১৬ বাইট থেকে কমিয়ে ৮ বাইটে নামিয়ে আনে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where clauses relocate long constraints after the return type arrow.',
          bn: 'প্যারামিটারের ভিড় এড়িয়ে ফাংশন স্বাক্ষরের শেষে শর্ত সাজাতে এটি কাজে লাগে।'
        },
        explanation: {
          en: 'When a function binds multiple generics with multiple traits, inlining them directly in the bracket syntax causes unreadable code. The where clause neatly clarifies each bound.',
          bn: 'এর ফলে কোডের আসল উদ্দেশ্য সহজেই বোঝা যায়।'
        }
      },
      {
        id: 'quiz-blanket-implementation-idiom',
        kind: 'mcq',
        topic: 'blanket-implementations-standard-library',
        question: {
          en: 'What is a "blanket implementation" in Rust (such as "impl<T: Display> ToString for T")?',
          bn: 'Rust-এ "ব্ল্যাঙ্কেট ইমপ্লিমেন্টেশন" (যেমন "impl<T: Display> ToString for T") বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'An implementation block that automatically applies a trait to ANY type that satisfies a prerequisite trait bound across the entire program',
            bn: 'এমন একটি ইমপ্লিমেন্টেশন ব্লক যা কোনো প্রাথমিক ট্রেইট পূরণকারী যেকোনো টাইপের ওপর স্বয়ংক্রিয়ভাবে আরেকটি নতুন ট্রেইট প্রয়োগ করে দেয়'
          },
          {
            en: 'A macro that encrypts source code on disk',
            bn: 'এমন একটি ম্যাক্রো যা ডিস্কে সোর্স কোড এনক্রিপ্ট করে'
          },
          {
            en: 'A tool that deletes unused trait declarations',
            bn: 'একটি টুল যা অব্যবহৃত ট্রেইট ঘোষণাগুলো মুছে ফেলে'
          },
          {
            en: 'Blanket implementations are only permitted inside the Linux kernel',
            bn: 'ব্ল্যাঙ্কেট ইমপ্লিমেন্টেশন কেবল লিনাক্স কার্নেলের ভেতরে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'A blanket impl provides a trait to all types satisfying another trait.',
          bn: 'যেমন Display পূরণ করা যেকোনো টাইপ নিজে থেকেই ToString মেথডের সুবিধা পেয়ে যায়।'
        },
        explanation: {
          en: 'Blanket implementations represent a hallmark of Rust design: because every type implementing Display has a text representation, the standard library blankets ToString across them all automatically.',
          bn: 'এর ফলে ডেভেলপারদের প্রতিটি টাইপের জন্য আলাদা করে টু-স্ট্রিং লিখতে হয় না।'
        }
      },
      {
        id: 'quiz-heterogeneous-collections-box-dyn',
        kind: 'mcq',
        topic: 'vector-heterogeneous-trait-objects',
        question: {
          en: 'Why is "Vec<Box<dyn Widget>>" permitted in Rust whereas "Vec<dyn Widget>" causes a fatal compile-time error?',
          bn: 'Rust-এ "Vec<Box<dyn Widget>>" গ্রহণযোগ্য হলেও কেন "Vec<dyn Widget>" মারাত্মক কম্পাইল এরর তৈরি করে?'
        },
        options: [
          {
            en: '"dyn Widget" is an unsized dynamically sized type (DST) whose size cannot be known at compile time, whereas "Box<dyn Widget>" is a sized pointer occupying a fixed 16 bytes',
            bn: '"dyn Widget" হলো একটি অনির্ধারিত আকারের টাইপ (DST) যার সাইজ কম্পাইল-টাইমে জানা সম্ভব নয়, কিন্তু "Box<dyn Widget>" হলো একটি নির্দিষ্ট ১৬-বাইটের ফিক্সড সাইজ পয়েন্টার'
          },
          {
            en: 'Vectors can only hold data created by web browsers',
            bn: 'ভেক্টর কেবল ওয়েব ব্রাউজারের তৈরি ডেটা ধারণ করতে পারে'
          },
          {
            en: 'Because Box converts trait objects into binary strings',
            bn: 'কারণ Box ট্রেইট অবজেক্টগুলোকে বাইনারি স্ট্রিংয়ে রূপান্তরিত করে'
          },
          {
            en: 'Vec was modified to reject dynamic types in Rust 2021',
            bn: 'Rust ২০২১ সংস্করণে ভেক্টর থেকে ডায়নামিক টাইপ বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rust collections require types with compile-time known size (Sized trait).',
          bn: 'ভেক্টরের প্রতিটি স্লটে সমান মাপের ঘর থাকতে হয়, যা ১৬-বাইটের Box নিশ্চিত করে।'
        },
        explanation: {
          en: 'Every element in a vector must occupy an identical, known byte offset. Since dyn Widget has unknown size, wrapping it in Box yields a fixed 16-byte fat pointer.',
          bn: 'বক্স ব্যবহারের মাধ্যমে বিভিন্ন সাইজের ডেটাকে একটি নির্দিষ্ট ১৬-বাইট পয়েন্টারে বেঁধে ভেক্টরে রাখা যায়।'
        }
      },
      {
        id: 'quiz-supertraits-subtyping-hierarchy',
        kind: 'mcq',
        topic: 'supertraits-trait-inheritance-concept',
        question: {
          en: 'How does Rust represent trait inheritance or prerequisites through "supertraits" (such as "trait Sub: Super")?',
          bn: 'Rust কীভাবে "সুপারট্রেইট" (যেমন "trait Sub: Super") সিনট্যাক্সের মাধ্যমে ট্রেইটের পূর্বশর্ত বা উত্তরাধিকার প্রকাশ করে?'
        },
        options: [
          {
            en: 'Any type attempting to implement trait Sub is strictly required to also implement trait Super, establishing an explicit capability dependency',
            bn: 'যেকোনো টাইপ যদি Sub ট্রেইট ইমপ্লিমেন্ট করতে চায়, তবে তাকে অবশ্যই পূর্বে Super ট্রেইটটিও ইমপ্লিমেন্ট করতে হবে, যা একটি স্পষ্ট নির্ভরশীলতা তৈরি করে'
          },
          {
            en: 'The compiler deletes all methods in the Super trait',
            bn: 'কম্পাইলার Super ট্রেইটের সমস্ত মেথড মুছে ফেলে'
          },
          {
            en: 'It copies private C++ classes into the Rust crate',
            bn: 'এটি প্রাইভেট C++ ক্লাসগুলোকে Rust ক্রেটের ভেতরে কপি করে নেয়'
          },
          {
            en: 'Supertraits can only be declared inside executable main functions',
            bn: 'সুপারট্রেইট কেবল এক্সিকিউটেবল মেইন ফাংশনের ভেতরে ঘোষণা করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'trait Sub: Super requires implementing Super before Sub can be implemented.',
          bn: 'সাব ট্রেইটের মেথড ব্যবহার করার আগে সুপার ট্রেইটের মেথড বাস্তবায়ন করা আবশ্যিক।'
        },
        explanation: {
          en: 'Supertraits allow traits to rely on foundational behaviors provided by other traits (such as requiring Eq whenever PartialEq is assumed), ensuring cohesive API contracts.',
          bn: 'এর মাধ্যমে ট্রেইটের মধ্যে একটি সুশৃঙ্খল স্তরভিত্তিক সম্পর্ক গড়ে ওঠে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'results-and-the-question',
    title: {
      en: 'Error Handling, Result & The ? Operator',
      bn: 'এরর হ্যান্ডলিং, Result এবং ? অপারেটর'
    }
  }
};
