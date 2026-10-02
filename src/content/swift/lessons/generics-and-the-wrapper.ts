import type { Lesson } from '../../../lib/types';

export const GenericsAndTheWrapperLesson: Lesson = {
  slug: 'generics-and-the-wrapper',
  tech: 'swift',
  title: {
    en: 'Generics, Associated Types & Property Wrappers',
    bn: 'জেনেরিকস, অ্যাসোসিয়েটেড টাইপস এবং প্রোপার্টি র‍্যাপারস'
  },
  summary: {
    en: 'Write flexible, reusable, and type-safe Swift code. Master generic functions and structs with where clause constraints, specialize monomorphic code through compiler devirtualization, design custom property wrappers (@Clamping, @Published) with wrappedValue and projectedValue ($), and explore modern parameter packs.',
    bn: 'নমনীয়, পুনর্ব্যবহারযোগ্য এবং শতভাগ টাইপ-নিরাপদ Swift কোড লিখুন। where ক্লজের সাহায্যে জেনেরিক ফাংশন ও স্ট্রাক্ট তৈরি, কম্পাইলার মনমরফিজম স্পেশালাইজেশন, wrappedValue এবং projectedValue ($) সহ কাস্টম প্রোপার্টি র‍্যাপার (@Clamping, @Published) তৈরি এবং প্যারামিটার প্যাকস অন্বেষণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'generics-and-specialization-heading',
      text: {
        en: 'Generics, Type Constraints, and Compiler Monomorphization',
        bn: 'জেনেরিকস, টাইপ কনস্ট্রেইন্ট এবং কম্পাইলার মনমরফাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Duplicating algorithms for every individual numeric or collection type inflates codebases and introduces copy-paste defects. In Swift (Apple\'s type-safe compiled programming language), generics empower developers to write reusable functions and data structures that work across any conforming type. By declaring generic placeholders parameterized with protocol constraints ("<Element: Comparable>"), algorithms maintain complete type safety without boxing values into unsafe void pointers. Under the hood, the Swift compiler performs monomorphization during optimization passes. When your code uses a generic Stack with integers, the compiler synthesizes a specialized binary copy tailored specifically to 64-bit integers, executing at native CPU speed.',
        bn: 'প্রতিটি আলাদা ডেটা টাইপের জন্য একই অ্যালগরিদম বারবার কপি-পেস্ট করা কোডবেসকে স্ফীত করে এবং ভুলের ঝুঁকি বাড়ায়। কিন্তু Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ জেনেরিকস ডেভেলপারদের এমন পুনর্ব্যবহারযোগ্য ফাংশন ও ডেটা স্ট্রাকচার লেখার ক্ষমতা দেয় যা যেকোনো নির্দিষ্ট টাইপের সাথে কাজ করতে পারে। প্রটোকল শর্তযুক্ত জেনেরিক প্লেসহোল্ডার ("<Element: Comparable>") ঘোষণার মাধ্যমে কোড কোনো অনিরাপদ পয়েন্টার ছাড়াই শতভাগ টাইপ নিরাপত্তা ধরে রাখে। পেছনের ইঞ্জিন হিসেবে Swift কম্পাইলার অপটিমাইজেশনের সময় "মনমরফাইজেশন" সম্পাদন করে। যখন আপনি ইন্টিজারের জন্য একটি জেনেরিক স্ট্যাক ব্যবহার করেন, তখন কম্পাইলার সরাসরি ৬৪-বিট ইন্টিজারের জন্য একটি ডেডিকেটেড মেশিন কোড কপি তৈরি করে, যা সরাসরি নেটিভ সিপিইউ গতিতে চলে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural anatomy of a Swift Property Wrapper showing the hidden backing storage (_volume), direct wrappedValue access, and projectedValue ($volume).',
        bn: 'চিত্র ১: Swift প্রোপার্টি র‍্যাপারের অভ্যন্তরীণ গঠন: গোপন স্টোরেজ (_volume), সরাসরি wrappedValue অ্যাক্সেস এবং projectedValue ($volume)।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT PROPERTY WRAPPER ANATOMY &amp; PROJECTION</text>

  <!-- Declaration Code Banner -->
  <g transform="translate(35, 55)">
    <rect width="770" height="42" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="25" y="26" fill="#38bdf8" font-size="12" font-family="monospace">@Clamping(min: 0, max: 100) var volume: Int = 50</text>
  </g>

  <!-- 3 Pillars of Property Wrapper -->
  <g transform="translate(35, 115)">
    <!-- 1. Backing Storage -->
    <rect x="0" y="0" width="240" height="185" rx="8" fill="#1e293b" stroke="#64748b" />
    <rect x="0" y="0" width="240" height="28" rx="8" fill="#334155" />
    <text x="120" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Hidden Backing Storage</text>

    <text x="15" y="55" fill="#f59e0b" font-size="12" font-family="monospace">_volume</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10" font-family="monospace">Type: Clamping&lt;Int&gt;</text>
    <text x="15" y="110" fill="#94a3b8" font-size="9" font-family="sans-serif">Synthesized by compiler</text>
    <text x="15" y="130" fill="#94a3b8" font-size="9" font-family="sans-serif">Stores min: 0, max: 100</text>
    <text x="15" y="150" fill="#94a3b8" font-size="9" font-family="sans-serif">Encapsulates validation rules</text>
  </g>

  <g transform="translate(300, 115)">
    <!-- 2. Direct Access (wrappedValue) -->
    <rect x="0" y="0" width="240" height="185" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect x="0" y="0" width="240" height="28" rx="8" fill="#059669" />
    <text x="120" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Direct Wrapped Value</text>

    <text x="15" y="55" fill="#34d399" font-size="12" font-family="monospace">volume (get / set)</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10" font-family="monospace">_volume.wrappedValue</text>
    <text x="15" y="110" fill="#38bdf8" font-size="9" font-family="sans-serif">Read: Returns clamped 50</text>
    <text x="15" y="130" fill="#38bdf8" font-size="9" font-family="sans-serif">Write: 120 clamped to 100</text>
    <text x="15" y="155" fill="#f8fafc" font-size="9" font-family="sans-serif">Seamless transparent usage</text>
  </g>

  <g transform="translate(565, 115)">
    <!-- 3. Projection ($prefix) -->
    <rect x="0" y="0" width="240" height="185" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect x="0" y="0" width="240" height="28" rx="8" fill="#9333ea" />
    <text x="120" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Projected Value ($prefix)</text>

    <text x="15" y="55" fill="#c084fc" font-size="12" font-family="monospace">$volume</text>
    <text x="15" y="80" fill="#cbd5e1" font-size="10" font-family="monospace">_volume.projectedValue</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="9" font-family="sans-serif">Exposes metadata interface</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="sans-serif">Returns Binding&lt;Int&gt; / Publisher</text>
    <text x="15" y="155" fill="#f8fafc" font-size="9" font-family="sans-serif">Powers SwiftUI 2-way bindings</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'property-wrappers-projected-value-heading',
      text: {
        en: 'Property Wrappers, Backing Storage, and Projections',
        bn: 'প্রোপার্টি র‍্যাপারস, ব্যাকিং স্টোরেজ এবং প্রজেকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Repetitive property management logic like data validation, persistence, and reactive binding often pollutes domain models. Swift property wrappers cleanly isolate this behavior behind an annotation. Declaring a struct with the "@propertyWrapper" attribute requires a stored or computed property named "wrappedValue". When applied to a property, the compiler synthesizes a hidden backing property prefixed with an underscore ("_volume") that manages storage. Optionally, the wrapper can define a "projectedValue" accessible via the dollar sign prefix ("$volume"). In SwiftUI, this projected value exposes two-way bindings or Combine publishers, enabling reactive UI bindings with zero boilerplate.',
        bn: 'ডেটা ভ্যালিডেশন, মেমোরিতে সংরক্ষণ এবং রিঅ্যাক্টিভ বাইন্ডিংয়ের মতো পুনরাবৃত্তিমূলক কোড প্রায়শই ডোমেন মডেলকে জটিল করে ফেলে। Swift প্রোপার্টি র‍্যাপার একটি সহজ অ্যানোটেশনের মাধ্যমে এই আচরণকে আলাদা করে রাখে। "@propertyWrapper" অ্যাট্রিবিউট দিয়ে কোনো স্ট্রাক্ট ঘোষণা করলে তাতে "wrappedValue" নামের একটি প্রোপার্টি থাকা বাধ্যতামূলক হয়। কোনো ভ্যারিয়েবলের ওপর এটি প্রয়োগ করলে কম্পাইলার একটি আন্ডারস্কোর যুক্ত গোপন স্টোরেজ ("_volume") তৈরি করে যা মান নিয়ন্ত্রণ করে। ইচ্ছাধীনভাবে র‍্যাপারে একটি "projectedValue"-ও রাখা যায় যা ডলার চিহ্ন ("$volume") দিয়ে অ্যাক্সেস করা হয়। SwiftUI-তে এই প্রজেকশন মূলত টু-ওয়ে বাইন্ডিং বা কম্বাইন পাবলিশার সরবরাহ করে, যা কোনো বাড়তি কোড ছাড়াই রিঅ্যাক্টিভ ইউআই তৈরি সম্ভব করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift generic collections with constraints and custom property wrapper with wrappedValue and projectedValue ($).',
        bn: 'শর্তযুক্ত Swift জেনেরিক কালেকশন এবং wrappedValue ও projectedValue ($) সহ কাস্টম প্রোপার্টি র‍্যাপারের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Generics, Monomorphic Specialization, and Property Wrappers

// 1. Generic Stack Simulation with Type Constraints
export class SwiftGenericStack<T> {
  private items: T[] = [];

  public push(item: T): void {
    this.items.push(item);
  }

  public pop(): T | undefined {
    return this.items.pop();
  }

  public peek(): T | undefined {
    return this.items[this.items.length - 1];
  }

  public get count(): number {
    return this.items.length;
  }
}

// 2. Swift Property Wrapper Simulation: @Clamping(min: 0, max: 100)
export class ClampingWrapper<T extends number> {
  private value: number;
  public minLimit: number;
  public maxLimit: number;

  constructor(initialValue: number, min: number, max: number) {
    this.minLimit = min;
    this.maxLimit = max;
    this.value = Math.max(min, Math.min(max, initialValue));
  }

  // wrappedValue: interceptor for direct property access
  public get wrappedValue(): number {
    return this.value;
  }

  public set wrappedValue(newValue: number) {
    this.value = Math.max(this.minLimit, Math.min(this.maxLimit, newValue));
  }

  // projectedValue ($ prefix): exposes secondary metadata or publisher interface
  public get projectedValue(): { min: number; max: number; wasClamped: (val: number) => boolean } {
    return {
      min: this.minLimit,
      max: this.maxLimit,
      wasClamped: (val: number) => val < this.minLimit || val > this.maxLimit
    };
  }
}

// Demonstration of compiler backing storage synthesis
export class AudioPlayerState {
  // Backing storage synthesized by compiler: _volume
  public _volume = new ClampingWrapper(50, 0, 100);

  // Direct property getter/setter delegates to wrappedValue
  public get volume(): number {
    return this._volume.wrappedValue;
  }

  public set volume(v: number) {
    this._volume.wrappedValue = v;
  }

  // Projected value accessor with $ prefix
  public get $volume() {
    return this._volume.projectedValue;
  }
}

// Execution Demonstration
const intStack = new SwiftGenericStack<number>();
intStack.push(10);
intStack.push(20);
intStack.push(30);
console.log('Stack Element Count:', intStack.count); // 3
console.log('Popped Top Value:', intStack.pop()); // 30

const player = new AudioPlayerState();
console.log('Initial Volume:', player.volume); // 50

// Attempt setting out of bounds
player.volume = 120;
console.log('Clamped Volume after 120 write:', player.volume); // 100

player.volume = -15;
console.log('Clamped Volume after -15 write:', player.volume); // 0

// Access projectedValue metadata via $volume
console.log('Projected Limits Range:', player.$volume.min, 'to', player.$volume.max); // 0 to 100
console.log('Was 120 clamped?:', player.$volume.wasClamped(120)); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Generics',
          def: {
            en: 'Facility allowing functions and types to operate over abstract type parameters with compile-time safety.',
            bn: 'সুবিধা যা ফাংশন ও টাইপগুলোকে বিমূর্ত টাইপ প্যারামিটারের সাহায্যে কম্পাইল-টাইম নিরাপত্তায় কাজ করতে দেয়।'
          }
        },
        {
          term: 'Monomorphization',
          def: {
            en: 'Compiler optimization synthesizing specialized machine code copies for concrete types used with generics.',
            bn: 'কম্পাইলার কৌশল যা জেনেরিক্সে ব্যবহৃত প্রতিটি নির্দিষ্ট টাইপের জন্য পৃথক দ্রুতগতির মেশিন কোড তৈরি করে।'
          }
        },
        {
          term: 'Property Wrapper',
          def: {
            en: 'Attribute (@propertyWrapper) encapsulating common access, validation, and storage patterns around a property.',
            bn: 'অ্যাট্রিবিউট যা প্রোপার্টির মান সংরক্ষণ, রূপান্তর ও যাচাইকরণের পুনরাবৃত্তিমূলক কোড সংকুচিত করে রাখে।'
          }
        },
        {
          term: 'Projected Value ($)',
          def: {
            en: 'Secondary value exposed by a property wrapper accessed using the dollar sign prefix, often binding reactive streams.',
            bn: 'প্রোপার্টি র‍্যাপারের প্রকাশিত দ্বিতীয় মান যা ডলার চিহ্ন দিয়ে অ্যাক্সেস করা হয়, যেমন টু-ওয়ে বাইন্ডিং।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'generics-monomorphization-speed-ex1',
      kind: 'mcq',
      topic: 'compiler-monomorphization-specialization-performance',
      question: {
        en: 'How does the Swift compiler ensure that generic structs (like Array<Int>) achieve native C-like execution speed without runtime boxing penalties?',
        bn: 'Swift কম্পাইলার কীভাবে নিশ্চিত করে যে জেনেরিক স্ট্রাক্ট (যেমন Array<Int>) কোনো রানটাইম বক্সিং খরচ ছাড়াই C-এর মতো নেটিভ গতি অর্জন করে?'
      },
      options: [
        {
          en: 'Through monomorphization specialization during optimization passes, emitting concrete dedicated machine instructions for specific types like 64-bit integers',
          bn: 'অপটিমাইজেশনের সময় মনমরফাইজেশন স্পেশালাইজেশনের মাধ্যমে, যা ৬৪-বিট ইন্টিজারের মতো নির্দিষ্ট টাইপের জন্য সরাসরি ডেডিকেটেড মেশিন নির্দেশ তৈরি করে'
        },
        {
          en: 'By disabling all CPU security checks',
          bn: 'সিপিইউ-এর সমস্ত সিকিউরিটি পরীক্ষা বন্ধ করে দিয়ে'
        },
        {
          en: 'By converting all arrays into JSON strings stored on disk',
          bn: 'সমস্ত অ্যারে-কে ডিস্কে সংরক্ষিত জেএসন স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'Generics are always interpreted at runtime with 10x slowdown',
          bn: 'জেনেরিকস সর্বদা ১০ গুণ ধীরগতিতে রানটাইমে ইন্টারপ্রেট করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Monomorphization generates specialized concrete code for each type used.',
        bn: 'আসল টাইপ চিনে কম্পাইলার প্রতিটি ডেটা টাইপের জন্য আলাদা নিখুঁত মেশিন কোড বানিয়ে নেয়।'
      },
      explanation: {
        en: 'Swift specializes generics by replacing abstract type parameters with concrete types at compile time, eliminating virtual lookups and runtime memory indirection.',
        bn: 'এর ফলে কোনো রানটাইম ওভারহেড ছাড়াই সর্বোচ্চ দ্রুতগতির এক্সিকিউশন নিশ্চিত হয়।'
      }
    },
    {
      id: 'property-wrapper-wrappedvalue-contract-ex2',
      kind: 'mcq',
      topic: 'property-wrapper-wrappedvalue-requirement',
      question: {
        en: 'What specific named property is strictly required to be implemented when defining a struct marked with the "@propertyWrapper" attribute?',
        bn: '"@propertyWrapper" অ্যাট্রিবিউট দিয়ে কোনো স্ট্রাক্ট তৈরির সময় কোন নামের প্রোপার্টি থাকা কঠোরভাবে বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'A stored or computed property named "wrappedValue" that provides the underlying get and set access logic',
          bn: '"wrappedValue" নামের একটি স্টোর্ড বা কম্পিউটেড প্রোপার্টি যা মান গ্রহণ ও প্রদানের মূল লজিক পরিচালনা করে'
        },
        {
          en: 'A function named "executeSQL"',
          bn: '"executeSQL" নামের একটি ফাংশন'
        },
        {
          en: 'A 32-bit floating point number named "pointerAddress"',
          bn: '"pointerAddress" নামের একটি ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যা'
        },
        {
          en: 'A string property named "description"',
          bn: '"description" নামের একটি স্ট্রিং প্রোপার্টি'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler looks for "wrappedValue" as the core payload property.',
        bn: 'র‍্যাপারের আসল মান ধারণ করতে wrappedValue নামটি থাকতেই হয়।'
      },
      explanation: {
        en: 'The @propertyWrapper specification requires a "wrappedValue" property. Any read or write to the annotated property is redirected by the compiler to this wrappedValue.',
        bn: 'বাইরে থেকে ভ্যারিয়েবল ব্যবহার করলে কম্পাইলার তা wrappedValue-তে পাঠিয়ে দেয়।'
      }
    },
    {
      id: 'projected-value-dollar-prefix-ex3',
      kind: 'mcq',
      topic: 'projected-value-dollar-prefix-usage',
      question: {
        en: 'How does a developer access the "projectedValue" exposed by a Swift property wrapper like SwiftUI\'s "@State"?',
        bn: 'SwiftUI-এর "@State"-এর মতো একটি Swift প্রোপার্টি র‍্যাপার দ্বারা প্রকাশিত "projectedValue" একজন ডেভেলপার কীভাবে অ্যাক্সেস করেন?'
      },
      options: [
        {
          en: 'By prefixing the property name with a dollar sign (e.g. "$volume"), which yields the wrapper\'s projected metadata or two-way Binding',
          bn: 'প্রোপার্টির নামের আগে একটি ডলার চিহ্ন যোগ করে (যেমন "$volume"), যা র‍্যাপারের প্রজেক্টেড মেটাডেটা বা টু-ওয়ে বাইন্ডিং ফেরত দেয়'
        },
        {
          en: 'By double-clicking the computer mouse on the screen',
          bn: 'কম্পিউটার মাউস দিয়ে স্ক্রিনের ওপর ডাবল-ক্লিক করে'
        },
        {
          en: 'By restarting the operating system kernel',
          bn: 'অপারেটিং সিস্টেম কার্নেল রিস্টার্ট করে'
        },
        {
          en: 'Projected values were deprecated in Swift 5.5',
          bn: 'Swift ৫.৫ সংস্করণে প্রজেক্টেড ভ্যালু বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The dollar sign ($) accesses the projectedValue of a property wrapper.',
        bn: 'ডলার চিহ্ন প্রজেকশন বা বাইন্ডিং বের করে আনার নির্দিষ্ট সিনট্যাক্স।'
      },
      explanation: {
        en: 'Prefixing a property with "$" provides direct access to its projectedValue, allowing SwiftUI components like Sliders or TextFields to establish reactive bindings.',
        bn: 'এর মাধ্যমে স্লাইডার বা টেক্সটফিল্ডের সাথে লাইভ ডেটা বাইন্ড করা সম্ভব হয়।'
      }
    },
    {
      id: 'backing-storage-underscore-prefix-ex4',
      kind: 'mcq',
      topic: 'property-wrapper-backing-storage-underscore',
      question: {
        en: 'When you declare "@Clamping var volume: Int = 50", what is the identifier and type of the backing storage property synthesized by the compiler?',
        bn: 'আপনি যখন "@Clamping var volume: Int = 50" ঘোষণা করেন, তখন কম্পাইলার দ্বারা তৈরি গোপন ব্যাকিং স্টোরেজের নাম ও টাইপ কী হয়?'
      },
      options: [
        {
          en: 'The property is named "_volume" with the type of the wrapper struct ("Clamping<Int>")',
          bn: 'প্রোপার্টিটির নাম হয় "_volume" এবং তার টাইপ হয় র‍্যাপার স্ট্রাক্টটির টাইপ ("Clamping<Int>")'
        },
        {
          en: 'The property is named "volume_backup" with type String',
          bn: 'প্রোপার্টিটির নাম হয় "volume_backup" এবং তার টাইপ হয় String'
        },
        {
          en: 'The property is an untyped 4-byte raw pointer',
          bn: 'প্রোপার্টিটি একটি আনটাইপড ৪-বাইটের র পয়েন্টার হয়'
        },
        {
          en: 'The compiler does not create backing storage',
          bn: 'কম্পাইলার কোনো ব্যাকিং স্টোরেজ তৈরি করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The compiler synthesizes an underscore-prefixed property (_name) holding the wrapper instance.',
        bn: 'নামের শুরুতে একটি আন্ডারস্কোর যুক্ত করে আসল অবজেক্টটি আড়ালে রাখা হয়।'
      },
      explanation: {
        en: 'The compiler generates a private stored property named "_volume" containing the actual wrapper struct instance, while "volume" becomes a computed property redirecting to wrappedValue.',
        bn: 'ফলে আসল র‍্যাপার অবজেক্টটি আন্ডারস্কোর দিয়ে সংরক্ষিত থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-generics-and-the-wrapper',
    title: {
      en: 'Swift Generics & Property Wrappers Quiz',
      bn: 'Swift জেনেরিকস এবং প্রোপার্টি র‍্যাপারস কুইজ'
    },
    questions: [
      {
        id: 'quiz-parameter-packs-swift-5-9',
        kind: 'mcq',
        topic: 'parameter-packs-variadic-generics-swift-5-9',
        question: {
          en: 'What architectural capability did "Parameter Packs" (variadic generics) introduce in Swift 5.9?',
          bn: 'Swift ৫.৯ সংস্করণে "প্যারামিটার প্যাকস" (ভ্যারিয়াডিক জেনেরিকস) কোন স্থাপত্যিক সুবিধা নিয়ে এসেছে?'
        },
        options: [
          {
            en: 'They allow generic functions and types to accept an arbitrary number of distinct, strongly typed generic type parameters ("each T") without tuple overloads',
            bn: 'তারা জেনেরিক ফাংশন ও টাইপগুলোকে যেকোনো সংখ্যক ভিন্ন ভিন্ন টাইপড জেনেরিক প্যারামিটার ("each T") গ্রহণের অনুমতি দেয় কোনো ম্যানুয়াল ওভারলোড ছাড়া'
          },
          {
            en: 'They compress iOS apps into ZIP files automatically',
            bn: 'তারা iOS অ্যাপগুলোকে স্বয়ংক্রিয়ভাবে জিপ ফাইলে সংকুচিত করে'
          },
          {
            en: 'They delete unused comments from the code',
            bn: 'তারা কোড থেকে অব্যবহৃত কমেন্ট মুছে ফেলে'
          },
          {
            en: 'Parameter packs are restricted strictly to Linux web frameworks',
            bn: 'প্যারামিটার প্যাক কেবল লিনাক্স ওয়েব ফ্রেমওয়ার্কে সীমাবদ্ধ'
          }
        ],
        answer: 0,
      hint: {
        en: 'Parameter packs allow abstracting over variable numbers of generic types.',
        bn: 'আগে যেমন বহু আলাদা ফাংশন লিখতে হতো, এখন একটি দিয়েই যেকোনো সংখ্যক টাইপ সামলানো যায়।'
      },
      explanation: {
        en: 'Before Swift 5.9, APIs like SwiftUI had to define overloads for tuples up to 10 elements. Parameter packs allow single signatures to handle any number of generic types cleanly.',
        bn: 'Swift ৫.৯-এর আগে ১০ টি উপাদান পর্যন্ত টাপলের জন্য আলাদা ওভারলোড লিখতে হতো; প্যারামিটার প্যাক সেই সীমাবদ্ধতা দূর করেছে।'
      }
      },
      {
        id: 'quiz-type-constraints-where-clauses',
        kind: 'mcq',
        topic: 'generic-where-clause-constraints',
        question: {
          en: 'Why do Swift software architects use generic "where" clauses instead of basic inheritance constraints?',
          bn: 'Swift সফটওয়্যার আর্কিটেক্টরা কেন সাধারণ ইনহেরিটেন্সের বদলে জেনেরিক "where" ক্লজ ব্যবহার করেন?'
        },
        options: [
          {
            en: 'Where clauses allow expressing rich, multidimensional constraints linking multiple associated types and protocols across diverse parameters simultaneously',
            bn: 'Where ক্লজ একাধিক প্যারামিটারের ভেতর অ্যাসোসিয়েটেড টাইপ এবং প্রটোকলের মধ্যকার জটিল বহু-মাত্রিক সম্পর্ক একসাথে প্রকাশ করতে পারে'
          },
          {
            en: 'Where clauses double the memory consumption of the iPhone',
            bn: 'Where ক্লজ আইফোনের মেমোরি খরচ দ্বিগুণ করে দেয়'
          },
          {
            en: 'Where clauses convert structs into Objective-C classes',
            bn: 'Where ক্লজ স্ট্রাক্টকে অবজেক্টিভ-সি ক্লাসে রূপান্তর করে'
          },
          {
            en: 'Where clauses were removed in Swift 5.0',
            bn: 'Swift ৫.০ সংস্করণে where ক্লজ বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Where clauses enable complex relationship constraints between generic types.',
          bn: 'একাধিক জেনেরিক টাইপের ভেতর নিখুঁত মিলবন্ধন তৈরি করার জন্য এটি অত্যন্ত শক্তিশালী।'
        },
        explanation: {
          en: 'Generic where clauses provide expressive power (e.g. where C1.Element == C2.Element, C1.Element: Equatable), enabling fine-grained compile-time algorithmic verification.',
          bn: 'এর মাধ্যমে কম্পাইলারকে দিয়ে সূক্ষ্ম টাইপ শর্ত পরীক্ষা করানো সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-property-wrapper-init-projected-value',
        kind: 'mcq',
        topic: 'property-wrapper-initialization-arguments',
        question: {
          en: 'How can arguments be passed to customize a property wrapper during property declaration (e.g. "@Storage(key: \\"user_id\\", defaultVal: 0)")?',
          bn: 'প্রোপার্টি ঘোষণার সময় কীভাবে আর্গুমেন্ট পাঠিয়ে প্রোপার্টি র‍্যাপার কাস্টমাইজ করা যায় (যেমন "@Storage(key: \\"user_id\\", defaultVal: 0)")?'
        },
        options: [
          {
            en: 'By defining custom initializers on the wrapper struct whose argument signatures match the parameters provided inside the parentheses of the annotation',
            bn: 'র‍্যাপার স্ট্রাক্টে এমন কাস্টম ইনিশিয়ালাইজার সংজ্ঞায়িত করে যার প্যারামিটারগুলো অ্যানোটেশনের বন্ধনীর ভেতরের আর্গুমেন্টের সাথে হুবহু মিলে যায়'
          },
          {
            en: 'By sending a network POST request to Apple headquarters',
            bn: 'অ্যাপল হেডকোয়ার্টারে একটি নেটওয়ার্ক পোস্ট রিকোয়েস্ট পাঠিয়ে'
          },
          {
            en: 'By formatting the source file with 4-space indentation',
            bn: 'সোর্স ফাইলটিকে ৪-স্পেস ইন্ডেন্টেশন দিয়ে সাজিয়ে'
          },
          {
            en: 'Property wrappers cannot accept custom arguments',
            bn: 'প্রোপার্টি র‍্যাপার কোনো কাস্টম আর্গুমেন্ট গ্রহণ করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The wrapper struct defines init(...) matching the annotation parameters.',
          bn: 'র‍্যাপারের ভেতরে init ফাংশন লিখে অ্যানোটেশনের মানগুলো গ্রহণ করা হয়।'
        },
        explanation: {
          en: 'Property wrapper annotations call matching initializers on the wrapper struct, enabling configurable parameters like database keys, min/max bounds, and default values.',
          bn: 'ফলে প্রতিটি প্রোপার্টির জন্য আলাদা আলাদা কনফিগারেশন সহজে যুক্ত করা যায়।'
        }
      },
      {
        id: 'quiz-dynamic-member-lookup-composition',
        kind: 'mcq',
        topic: 'dynamic-member-lookup-keypaths',
        question: {
          en: 'What feature does "@dynamicMemberLookup" with KeyPaths offer when combined with custom wrappers in Swift?',
          bn: 'Swift-এ কাস্টম র‍্যাপারের সাথে KeyPaths সহ "@dynamicMemberLookup" যুক্ত করলে কোন সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It enables dot-syntax access to the underlying wrapped object\'s properties through the outer container directly with complete compile-time type safety',
            bn: 'এটি শতভাগ টাইপ নিরাপত্তা বজায় রেখে বাইরের কনটেইনারের মাধ্যমে ভেতরের অবজেক্টের প্রোপার্টিতে সরাসরি ডট-সিনট্যাক্স অ্যাক্সেস প্রদান করে'
          },
          {
            en: 'It turns off the device display when brightness exceeds 50 percent',
            bn: 'উজ্জ্বলতা ৫০ শতাংশ ছাড়িয়ে গেলে এটি ডিভাইসের ডিসপ্লে বন্ধ করে দেয়'
          },
          {
            en: 'It encrypts all local Swift files with AES-256',
            bn: 'এটি সমস্ত লোকাল Swift ফাইলকে AES-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'dynamicMemberLookup is only allowed in Python scripts',
            bn: 'dynamicMemberLookup কেবল পাইথন স্ক্রিপ্টে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: '@dynamicMemberLookup forwards property access using type-safe KeyPaths.',
          bn: 'ভেতরের ডেটার ফিল্ডগুলোকে বাইরে থেকেই সরাসরি ডট দিয়ে ডাকার নিরাপদ মাধ্যম।'
        },
        explanation: {
          en: 'Combined with KeyPaths, dynamicMemberLookup allows wrappers to forward property access seamlessly without writing repetitive forwarding boilerplate for every member.',
          bn: 'এর ফলে অতিরিক্ত ফরোয়ার্ডিং কোড না লিখেও চমৎকার সাবলীল এপিআই তৈরি করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-swift-release',
    title: {
      en: 'Swift 6, Strict Concurrency & Production Tooling',
      bn: 'Swift ৬, স্ট্রিক্ট কনকারেন্সি এবং প্রোডাকশন টুলিং'
    }
  }
};
