import type { Lesson } from '../../../lib/types';

export const ProtocolsAndTheExtensionLesson: Lesson = {
  slug: 'protocols-and-the-extension',
  tech: 'swift',
  title: {
    en: 'Protocols, Extensions & Protocol-Oriented Architecture',
    bn: 'প্রটোকল, এক্সটেনশন এবং প্রটোকল-ওরিয়েন্টেড আর্কিটেকচার'
  },
  summary: {
    en: 'Master Protocol-Oriented Programming (POP) in Swift. Define decoupled capability contracts, provide default method implementations via protocol extensions, contrast static dispatch with opaque return types (some Protocol) against dynamic dispatch with existential containers (any Protocol), and design modular, composable architectures without inheritance hierarchies.',
    bn: 'Swift-এ প্রটোকল-ওরিয়েন্টেড প্রোগ্রামিং (POP) আয়ত্ত করুন। স্বতন্ত্র সক্ষমতা চুক্তি সংজ্ঞায়িত করা, প্রটোকল এক্সটেনশনের মাধ্যমে ডিফল্ট মেথড বাস্তবায়ন, ওপেক রিটার্ন টাইপ (some Protocol) বনাম এক্সিসটেনশিয়াল কনটেইনারের (any Protocol) স্ট্যাটিক ও ডায়নামিক ডিসপ্যাচের তুলনা এবং ইনহেরিটেন্স ছাড়াই মডুলার আর্কিটেকচার ডিজাইন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'pop-and-protocol-extensions-heading',
      text: {
        en: 'Protocol-Oriented Programming and Default Implementations',
        bn: 'প্রটোকল-ওরিয়েন্টেড প্রোগ্রামিং এবং ডিফল্ট ইমপ্লিমেন্টেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional object-oriented programming relies on rigid class inheritance hierarchies that force subclasses to inherit unwanted state and complex lifecycles. In Swift (Apple\'s type-safe compiled programming language), architecture is anchored by Protocol-Oriented Programming. A protocol declares a capability contract: blueprint methods and properties that any struct, class, or enum can adopt. Crucially, Swift permits extending protocols with concrete method implementations. When you author a protocol extension, every conforming type across the entire application gains that functionality automatically without duplicating code. This enables engineers to compose modular, horizontal capabilities across lightweight value types without coupling codebases to fragile base classes.',
        bn: 'প্রথাগত অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং অনমনীয় ক্লাস ইনহেরিটেন্স কাঠামোর ওপর নির্ভর করে, যা সাবক্লাসকে অনাকাঙ্ক্ষিত ফিল্ড এবং জটিল জীবনচক্র গ্রহণে বাধ্য করে। কিন্তু Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ আর্কিটেকচার পরিচালিত হয় প্রটোকল-ওরিয়েন্টেড প্রোগ্রামিংয়ের মাধ্যমে। একটি প্রটোকল মূলত একটি সক্ষমতার চুক্তি ঘোষণা করে: কিছু মেথড ও প্রোপার্টির ব্লুপ্রিন্ট যা যেকোনো স্ট্রাক্ট, ক্লাস বা এনাম গ্রহণ করতে পারে। সবচেয়ে যুগান্তকারী বিষয় হলো, Swift প্রটোকল এক্সটেনশনের মাধ্যমে সরাসরি মেথডের বাস্তবায়ন লেখার সুযোগ দেয়। কোনো প্রটোকল এক্সটেনশন লিখলে তা গ্রহণকারী প্রতিটি ডেটা টাইপ নিজে থেকেই সেই ক্ষমতা লাভ করে। এর ফলে ভঙ্গুর প্যারেন্ট ক্লাসের ওপর নির্ভর না করেই হালকা ভ্যালু টাইপগুলোকে অনুভূমিকভাবে সংযুক্ত করে শক্তিশালী সিস্টেম গঠন করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural difference between static opaque types (some Shape) and 40-byte dynamic existential containers (any Shape with 24-byte value buffer and witness table).',
        bn: 'চিত্র ১: স্ট্যাটিক ওপেক টাইপ (some Shape) এবং ৪০-বাইটের ডায়নামিক এক্সিসটেনশিয়াল কনটেইনারের (any Shape যাতে ২৪-বাইট বাফার ও উইটনেস টেবিল থাকে) স্থাপত্যিক পার্থক্য।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT OPAQUE TYPES (SOME) VS EXISTENTIAL CONTAINERS (ANY)</text>

  <!-- Left: Opaque Return Type (some Shape) -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Opaque Return Type: some Shape (Static Dispatch)</text>

    <!-- Source Signature -->
    <rect x="15" y="45" width="335" height="40" rx="5" fill="#0f172a" />
    <text x="25" y="69" fill="#38bdf8" font-size="11" font-family="monospace">func makeShape() -&gt; some Shape</text>

    <!-- Compiler Concrete Deduction -->
    <rect x="15" y="95" width="335" height="55" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="117" fill="#34d399" font-size="10" font-family="monospace">Compiler fixes 1 concrete type: Circle</text>
    <text x="25" y="135" fill="#cbd5e1" font-size="9" font-family="sans-serif">Exact memory footprint known at build time</text>

    <!-- Performance -->
    <rect x="15" y="160" width="335" height="60" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="182" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Zero Boxing Overhead:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="10" font-family="sans-serif">Direct CPU function call | Aggressive compiler inlining</text>
  </g>

  <!-- Right: Existential Box (any Shape) -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#d97706" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Existential Box: any Shape (Dynamic Dispatch)</text>

    <!-- Source Signature -->
    <rect x="15" y="45" width="335" height="40" rx="5" fill="#0f172a" />
    <text x="25" y="69" fill="#fbbf24" font-size="11" font-family="monospace">var shapes: [any Shape] = [...]</text>

    <!-- 40-byte Box Breakdown -->
    <g transform="translate(15, 95)">
      <!-- 24-byte Buffer -->
      <rect x="0" y="0" width="160" height="55" rx="5" fill="#0f172a" stroke="#f59e0b" />
      <text x="80" y="22" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">Value Buffer</text>
      <text x="80" y="42" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">3 Words (24 Bytes)</text>

      <!-- Metadata & PWT -->
      <rect x="170" y="0" width="165" height="55" rx="5" fill="#0f172a" stroke="#f59e0b" />
      <text x="252" y="22" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">Witness Table</text>
      <text x="252" y="42" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">2 Ptrs (16 Bytes)</text>
    </g>

    <!-- Performance -->
    <rect x="15" y="160" width="335" height="60" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="182" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Dynamic Dispatch Penalty:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="10" font-family="sans-serif">40-byte box + heap allocation if data exceeds 24 bytes</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'opaque-some-vs-existential-any-heading',
      text: {
        en: 'Opaque Types (some) versus Existential Containers (any)',
        bn: 'ওপেক টাইপ (some) বনাম এক্সিসটেনশিয়াল কনটেইনার (any)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern Swift draws a sharp technical boundary between opaque types and existential containers. When an API returns "some Protocol", the function guarantees to return exactly 1 concrete underlying type across all execution paths while hiding that type from the caller. Because the compiler knows the singular concrete type at compile time, it emits direct jump instructions with zero memory boxing overhead, powering SwiftUI\'s "some View" performance. In contrast, "any Protocol" creates an existential container: a dynamic 40-byte box containing a 3-word value buffer (24 bytes), a type metadata pointer (8 bytes), and a Protocol Witness Table pointer (8 bytes). While "any" allows storing heterogeneous collections, it incurs dynamic method lookup penalties and heap allocations if the value exceeds 24 bytes.',
        bn: 'আধুনিক Swift ওপেক টাইপ এবং এক্সিসটেনশিয়াল কনটেইনারের মধ্যে একটি সুস্পষ্ট প্রযুক্তিগত পার্থক্য নির্ধারণ করে। যখন কোনো ফাংশন "some Protocol" রিটার্ন করে, তখন ফাংশনটি কলারের কাছে নাম গোপন রেখে ভেতরে ঠিক ১ টি নির্দিষ্ট কংক্রিট টাইপ ফেরত দেয়। যেহেতু কম্পাইলার তৈরির সময়ই ভেতরের আসল টাইপটি জানে, তাই কোনো অতিরিক্ত বক্সিং মেমোরি খরচ ছাড়াই এটি সরাসরি স্ট্যাটিক জাম্প নির্দেশনা তৈরি করে, যা SwiftUI-এর "some View"-কে উচ্চ গতি প্রদান করে। অপরদিকে "any Protocol" একটি ডায়নামিক ৪০-বাইটের এক্সিসটেনশিয়াল কনটেইনার তৈরি করে, যার মধ্যে ৩-শব্দের ডেটা বাফার (২৪ বাইট), একটি মেটাডেটা পয়েন্টার (৮ বাইট) এবং একটি প্রটোকল উইটনেস টেবিল পয়েন্টার (৮ বাইট) থাকে। "any" বিভিন্ন ভিন্ন ভিন্ন টাইপ এক তালিকায় রাখার অনুমতি দিলেও এটি উইটনেস টেবিলের মাধ্যমে পরোক্ষ কল এবং ২৪ বাইটের বড় ডেটার ক্ষেত্রে হিপ মেমোরি বরাদ্দের ওভারহেড তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift Protocol conformance, extension default methods, and opaque vs existential dispatch.',
        bn: 'Swift প্রটোকল মান্যতা, এক্সটেনশন ডিফল্ট মেথড এবং ওপেক বনাম এক্সিসটেনশিয়াল ডিসপ্যাচের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Protocol-Oriented Programming and Opaque vs Existential Dispatch

export interface ShapeProtocol {
  area(): number;
  draw(): string;
}

// Concrete Implementations conforming to ShapeProtocol
export class Circle implements ShapeProtocol {
  constructor(public radius: number) {}
  area(): number { return Math.PI * this.radius * this.radius; }
  draw(): string { return 'Drawing Circle of radius: ' + this.radius; }
}

export class Rectangle implements ShapeProtocol {
  constructor(public width: number, public height: number) {}
  area(): number { return this.width * this.height; }
  draw(): string { return 'Drawing Rectangle: ' + this.width + 'x' + this.height; }
}

// Protocol Extension providing default implementation
export class ShapeExtensionHelper {
  public static printSummary(shape: ShapeProtocol): string {
    return '[Default Protocol Summary] Area = ' + shape.area().toFixed(2) + ' sq units';
  }
}

// 1. Opaque Return Type Simulation: "func makeShape() -> some Shape"
// Compiler knows the singular concrete type (Circle) at compile-time: direct call, zero box!
export class OpaqueTypeSimulator {
  public static makeOpaqueShape(): Circle {
    return new Circle(10);
  }

  public static invokeDirect(c: Circle): string {
    return '[Direct Static Dispatch] ' + c.draw();
  }
}

// 2. Existential Container Box Simulation: "var list: [any Shape]"
// Dynamic 40-byte box with 3-word value buffer (24B) + Metadata (8B) + Witness Table (8B)
export interface ExistentialBox {
  valueBufferBytes: number; // 24 bytes
  metadataPointer: number; // 8 bytes
  witnessTable: {
    areaFn: (inst: unknown) => number;
    drawFn: (inst: unknown) => string;
  }; // 8 bytes
  instance: unknown;
}

export class ExistentialBoxDispatcher {
  public static createBox(shape: ShapeProtocol): ExistentialBox {
    return {
      valueBufferBytes: 24,
      metadataPointer: 0x9000,
      witnessTable: {
        areaFn: (inst) => (inst as ShapeProtocol).area(),
        drawFn: (inst) => (inst as ShapeProtocol).draw()
      },
      instance: shape
    };
  }

  public static dispatchVirtual(box: ExistentialBox): string {
    // Indirect lookup via Protocol Witness Table
    return '[Dynamic Witness Table Call] ' + box.witnessTable.drawFn(box.instance);
  }
}

// Execution Demonstration
const circle = OpaqueTypeSimulator.makeOpaqueShape();
console.log(OpaqueTypeSimulator.invokeDirect(circle));
console.log(ShapeExtensionHelper.printSummary(circle));

// Heterogeneous collection via [any Shape] existentials
const existentialBoxes: ExistentialBox[] = [
  ExistentialBoxDispatcher.createBox(new Circle(5)),
  ExistentialBoxDispatcher.createBox(new Rectangle(20, 30))
];

console.log('Total Existential Shapes in List:', existentialBoxes.length); // 2
for (const box of existentialBoxes) {
  console.log(ExistentialBoxDispatcher.dispatchVirtual(box));
}`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Protocol-Oriented Programming',
          def: {
            en: 'Swift paradigm emphasizing composition, capability contracts, and protocol extensions over inheritance hierarchies.',
            bn: 'Swift প্রোগ্রামিং ধারা যা ইনহেরিটেন্সের বদলে কম্পোজিশন, চুক্তি এবং প্রটোকল এক্সটেনশনের ওপর জোর দেয়।'
          }
        },
        {
          term: 'Protocol Extension',
          def: {
            en: 'Mechanism providing concrete default method implementations to all types conforming to a given protocol.',
            bn: 'কৌশল যা কোনো প্রটোকল গ্রহণকারী সব টাইপকে স্বয়ংক্রিয়ভাবে তৈরি মেথড ব্যবহারের সুবিধা দেয়।'
          }
        },
        {
          term: 'Opaque Type (some)',
          def: {
            en: 'Static type abstraction where the compiler fixes 1 concrete type while hiding its identity, enabling direct dispatch.',
            bn: 'স্ট্যাটিক অ্যাবস্ট্রাকশন যাতে কম্পাইলার ঠিক ১ টি নির্দিষ্ট টাইপ স্থির রেখে সরাসরি দ্রুততম কল তৈরি করে।'
          }
        },
        {
          term: 'Existential Container (any)',
          def: {
            en: 'Dynamic 40-byte box holding diverse conforming types via value buffers and protocol witness table pointers.',
            bn: 'ডায়নামিক ৪০-বাইটের কনটেইনার যা উইটনেস টেবিল পয়েন্টার দিয়ে ভিন্ন ভিন্ন টাইপের অবজেক্ট ধারণ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'protocol-extension-default-implementation-ex1',
      kind: 'mcq',
      topic: 'protocol-extension-default-implementations',
      question: {
        en: 'How do protocol extensions revolutionize code reuse in Swift compared to traditional object-oriented base classes?',
        bn: 'প্রথাগত অবজেক্ট-ওরিয়েন্টেড বেস ক্লাসের তুলনায় প্রটোকল এক্সটেনশন কীভাবে Swift-এ কোডের পুনর্ব্যবহার সহজ করেছে?'
      },
      options: [
        {
          en: 'They provide concrete default method implementations that all conforming structs, classes, and enums inherit without requiring shared inheritance state',
          bn: 'তারা মেথডের সরাসরি ডিফল্ট বাস্তবায়ন সরবরাহ করে যা সমস্ত স্ট্রাক্ট, ক্লাস ও এনাম কোনো ক্ষতিকর ইনহেরিটেন্স ছাড়াই সরাসরি ব্যবহার করতে পারে'
        },
        {
          en: 'They convert all functions into 64-bit integer values',
          bn: 'তারা সমস্ত ফাংশনকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'They restrict methods to running only inside web browsers',
          bn: 'তারা মেথডগুলোকে কেবল ওয়েব ব্রাউজারের ভেতরে চলতে বাধ্য করে'
        },
        {
          en: 'Protocol extensions were deprecated in Swift 5.0',
          bn: 'Swift ৫.০ সংস্করণে প্রটোকল এক্সটেনশন বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Protocol extensions provide default implementations for all conforming types.',
        bn: 'যেকোনো ডেটা টাইপ প্রটোকলটি যুক্ত করলেই ফ্রিতে এক্সটেনশনের মেথড পেয়ে যায়।'
      },
      explanation: {
        en: 'Protocol extensions allow horizontal capability sharing across structs, enums, and classes without forcing them into a rigid single-inheritance hierarchy.',
        bn: 'এর ফলে বিভিন্ন ভ্যালু টাইপ নিজেদের স্বাধীন রেখে চমৎকারভাবে কোড শেয়ার করতে পারে।'
      }
    },
    {
      id: 'opaque-some-vs-existential-any-ex2',
      kind: 'mcq',
      topic: 'some-vs-any-protocol-performance-difference',
      question: {
        en: 'Why is "some View" preferred over "any View" in SwiftUI view hierarchies regarding performance?',
        bn: 'SwiftUI ভিউ হায়ারার্কিতে পারফরম্যান্সের দিক থেকে কেন "any View"-এর চেয়ে "some View" অধিক গ্রহণযোগ্য?'
      },
      options: [
        {
          en: '"some View" fixes 1 concrete type at compile time with zero boxing overhead and direct inlining; "any View" incurs a 40-byte existential box and dynamic heap dispatch',
          bn: '"some View" কোনো বক্সিং ওভারহেড ছাড়াই কম্পাইল-টাইমে ঠিক ১ টি নির্দিষ্ট টাইপ স্থির রেখে দ্রুত সরাসরি কল দেয়; আর "any View" ৪০-বাইটের বক্স ও হিপ মেমোরি খরচ করায়'
        },
        {
          en: 'Because some View can only be displayed on Apple TV devices',
          bn: 'কারণ some View কেবল অ্যাপল টিভি ডিভাইসে প্রদর্শিত হতে পারে'
        },
        {
          en: 'Because any View deletes the user interface after 5 seconds',
          bn: 'কারণ any View ৫ সেকেন্ড পর ইউজার ইন্টারফেস মুছে ফেলে'
        },
        {
          en: 'There is zero behavioral difference between some and any in Swift',
          bn: 'Swift-এ some এবং any এর মধ্যে কোনো আচরণগত পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'some enables static direct calls; any creates an existential container box.',
        bn: 'some কম্পাইল-টাইমে আসল টাইপ জেনে সরাসরি চালায়, আর any ডায়নামিক টেবিল খুঁজে চালায়।'
      },
      explanation: {
        en: 'SwiftUI renders 60 or 120 frames per second. The zero-cost static dispatch of "some View" avoids millions of unnecessary heap allocations caused by existential boxing.',
        bn: 'প্রতি সেকেন্ডে ৬০ বা ১২০ ফ্রেম মসৃণ রাখতে এই শূন্য-খরচের স্ট্যাটিক ডিসপ্যাচ অপরিহার্য।'
      }
    },
    {
      id: 'existential-container-memory-footprint-ex3',
      kind: 'mcq',
      topic: 'existential-container-memory-size',
      question: {
        en: 'What is the standard memory size and physical composition of a Swift existential container ("any Protocol") on a 64-bit architecture?',
        bn: 'একটি ৬৪-বিট আর্কিটেকচারে Swift এক্সিসটেনশিয়াল কনটেইনারের ("any Protocol") স্ট্যান্ডার্ড মেমোরি আকার ও গঠন কী?'
      },
      options: [
        {
          en: 'Exactly 40 bytes: a 3-word value buffer (24 bytes), a metadata pointer (8 bytes), and a Protocol Witness Table pointer (8 bytes)',
          bn: 'ঠিক ৪০ বাইট: একটি ৩-শব্দের ভ্যালু বাফার (২৪ বাইট), একটি মেটাডেটা পয়েন্টার (৮ বাইট) এবং একটি প্রটোকল উইটনেস টেবিল পয়েন্টার (৮ বাইট)'
        },
        {
          en: 'A single 4-byte integer index',
          bn: 'একটি একক ৪-বাইটের পূর্ণসংখ্যার ইনডেক্স'
        },
        {
          en: 'An unlimited number of gigabytes allocated on the hard drive',
          bn: 'হার্ড ড্রাইভে বরাদ্দকৃত সীমাহীন গিগাবাইট'
        },
        {
          en: 'Exactly 8 bytes mirroring an Int64 primitive',
          bn: 'একটি Int64 প্রিমিটিভের মতো ঠিক ৮ বাইট'
        }
      ],
      answer: 0,
      hint: {
        en: 'An existential container is 5 words: 3 for value buffer + 1 metadata + 1 witness table (5 x 8 = 40 bytes).',
        bn: 'এতে ৫ টি ওয়ার্ড থাকে: ৩ টি ভ্যালু বাফার + ১ টি মেটাডেটা + ১ টি উইটনেস টেবিল (৫ x ৮ = ৪০ বাইট)।'
      },
      explanation: {
        en: 'The 40-byte existential container accommodates small values inline. If a conforming type exceeds 24 bytes, the value buffer stores a pointer to heap memory.',
        bn: '২৪ বাইটের ছোট ডেটা ভেতরেই থাকে, আর বড় ডেটা হিপে পাঠিয়ে পয়েন্টার রেখে দেয়।'
      }
    },
    {
      id: 'protocol-witness-table-role-ex4',
      kind: 'mcq',
      topic: 'protocol-witness-table-dynamic-dispatch',
      question: {
        en: 'What critical runtime duty does the Protocol Witness Table (PWT) fulfill when invoking methods on an "any Protocol" instance?',
        bn: '"any Protocol" অবজেক্টে মেথড ডাকার সময় প্রটোকল উইটনেস টেবিল (PWT) কোন গুরুত্বপূর্ণ দায়িত্ব পালন করে?'
      },
      options: [
        {
          en: 'It stores function pointers mapping the protocol\'s abstract method requirements to the concrete type\'s physical implementations for dynamic dispatch',
          bn: 'এটি প্রটোকলের বিমূর্ত মেথডগুলোকে কংক্রিট টাইপের আসল মেথডের ঠিকানার সাথে মিলিয়ে দিয়ে রানটাইমে ডায়নামিক কল নিশ্চিত করে'
        },
        {
          en: 'It encrypts network data transmitted over Wi-Fi',
          bn: 'এটি ওয়াই-ফাই দিয়ে পাঠানো নেটওয়ার্ক ডেটা এনক্রিপ্ট করে'
        },
        {
          en: 'It formats source code files into JSON syntax',
          bn: 'এটি সোর্স কোড ফাইলকে জেএসন সিনট্যাক্সে রূপান্তর করে'
        },
        {
          en: 'Protocol witness tables were removed in Swift 6.0',
          bn: 'Swift ৬.০ সংস্করণে প্রটোকল উইটনেস টেবিল বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The witness table maps protocol requirements to concrete function addresses.',
        bn: 'কোন টাইপের কোন মেথডটি রানটাইমে ডাকতে হবে তার তালিকা থাকে এই টেবিলে।'
      },
      explanation: {
        en: 'Because an existential box can hold any conforming type, the PWT provides the indirection necessary to route method invocations to the correct concrete code.',
        bn: 'ফলে ভিন্ন ভিন্ন টাইপের অবজেক্ট থাকলেও সঠিক মেথডটি নিখুঁতভাবে খুঁজে নেওয়া সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-protocols-and-the-extension',
    title: {
      en: 'Swift Protocols & Architecture Quiz',
      bn: 'Swift প্রটোকল এবং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-associated-types-in-protocols',
        kind: 'mcq',
        topic: 'associated-types-protocol-generics',
        question: {
          en: 'What purpose does an "associatedtype" (such as "associatedtype Item") serve inside a Swift protocol declaration?',
          bn: 'একটি Swift প্রটোকল ঘোষণায় "associatedtype" (যেমন "associatedtype Item") কী উদ্দেশ্যে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'It acts as a generic type placeholder whose concrete type is deferred until a specific struct or class conforms to the protocol',
            bn: 'এটি একটি জেনেরিক টাইপ প্লেসহোল্ডার হিসেবে কাজ করে যার আসল কংক্রিট টাইপ কোনো স্ট্রাক্ট বা ক্লাস প্রটোকলটি গ্রহণ করার সময় নির্ধারিত হয়'
          },
          {
            en: 'It deletes the protocol after compilation completes',
            bn: 'কম্পাইলেশন শেষ হওয়ার পর এটি প্রটোকলটি মুছে ফেলে'
          },
          {
            en: 'It converts the protocol into a 16-bit floating point number',
            bn: 'এটি প্রটোকলটিকে একটি ১৬-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'associatedtype is only permitted inside Objective-C headers',
            bn: 'associatedtype কেবল অবজেক্টিভ-সি হেডারের ভেতরে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'associatedtype is a protocol-level generic placeholder.',
          bn: 'প্রটোকল লেখার সময় টাইপ নির্ধারণ না করে বাস্তবায়নের সময় টাইপ ঠিক করার সুবিধা দেয়।'
        },
        explanation: {
          en: 'Associated types provide generic flexibility to protocols (like Collection.Element), allowing diverse data structures to conform while binding their own payload types.',
          bn: 'এর মাধ্যমে একই প্রটোকল বিভিন্ন ধরণের ডেটার জন্য সুন্দরভাবে ব্যবহার করা যায়।'
        }
      },
      {
        id: 'quiz-primary-associated-types-swift-5-7',
        kind: 'mcq',
        topic: 'primary-associated-types-swift-5-7',
        question: {
          en: 'How did Swift 5.7 improve working with protocols with associated types using "Primary Associated Types" (e.g. "some Collection<String>")?',
          bn: 'Swift ৫.৭ কীভাবে "প্রাইমারি অ্যাসোসিয়েটেড টাইপস" (যেমন "some Collection<String>") প্রবর্তনের মাধ্যমে অ্যাসোসিয়েটেড টাইপযুক্ত প্রটোকল ব্যবহার সহজ করেছে?'
        },
        options: [
          {
            en: 'It allows developers to constrain associated types directly in opaque and existential positions ("some Protocol<Element>") without awkward where clauses',
            bn: 'এটি জটিল where ক্লজ ছাড়াই সরাসরি ওপেক ও এক্সিসটেনশিয়াল অবস্থানে অ্যাসোসিয়েটেড টাইপকে নির্দিষ্ট ("some Protocol<Element>") করার সুযোগ দেয়'
          },
          {
            en: 'It banned the use of structs in iOS apps',
            bn: 'এটি iOS অ্যাপে স্ট্রাক্ট ব্যবহার নিষিদ্ধ করেছে'
          },
          {
            en: 'It converts all collections into SQLite tables',
            bn: 'এটি সমস্ত কালেকশনকে SQLite টেবিলে রূপান্তর করে'
          },
          {
            en: 'Primary associated types require a paid Apple Developer license',
            bn: 'প্রাইমারি অ্যাসোসিয়েটেড টাইপের জন্য অর্থপ্রদত্ত অ্যাপল লাইসেন্স প্রয়োজন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Primary associated types enable generic-style angle brackets on protocols.',
          bn: 'জেনেরিকসের মতো সরাসরি ব্র্যাকেটে টাইপ লিখে কোড অনেক সহজ করা সম্ভব হয়েছে।'
        },
        explanation: {
          en: 'Before Swift 5.7, protocols with associated types could not be used with simple angle brackets. Primary associated types unlock concise, expressive type constraints.',
          bn: 'ফলে দীর্ঘ ও জটিল শর্ত না লিখে এক লাইনেই পরিষ্কার টাইপ বাউন্ড নির্ধারণ করা যায়।'
        }
      },
      {
        id: 'quiz-protocol-composition-ampersand',
        kind: 'mcq',
        topic: 'protocol-composition-ampersand-syntax',
        question: {
          en: 'What capability does protocol composition using the ampersand (e.g. "typealias Entity = Codable & Identifiable") deliver?',
          bn: 'অ্যান্ড চিহ্ন দিয়ে প্রটোকল কম্পোজিশন (যেমন "typealias Entity = Codable & Identifiable") কোন সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It combines multiple independent protocol requirements into a single composite type requirement without creating an explicit child protocol',
            bn: 'এটি কোনো নতুন চাইল্ড প্রটোকল তৈরি না করেই একাধিক স্বাধীন প্রটোকলের শর্তকে একটি একক যৌগিক টাইপ শর্তে একত্রিত করে'
          },
          {
            en: 'It doubles the network speed of the mobile device',
            bn: 'এটি মোবাইল ডিভাইসের নেটওয়ার্কের গতি দ্বিগুণ করে'
          },
          {
            en: 'It encrypts all stored properties on the flash drive',
            bn: 'এটি ফ্ল্যাশ ড্রাইভের সমস্ত প্রোপার্টি এনক্রিপ্ট করে'
          },
          {
            en: 'Protocol composition was deprecated in Swift 4.2',
            bn: 'Swift ৪.২ সংস্করণে প্রটোকল কম্পোজিশন বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '& combines multiple protocols into a single requirement.',
          bn: 'একাধিক সক্ষমতাকে একসাথে জুড়ে দিয়ে নিখুঁত চাহিদা পূরণ করা যায়।'
        },
        explanation: {
          en: 'Protocol composition allows functions to demand exactly the capabilities they need (e.g. Printable & Searchable) without polluting global protocol hierarchies.',
          bn: 'এর মাধ্যমে অযথা নতুন প্রটোকল না বানিয়েই একাধিক সুবিধার মেলবন্ধন ঘটানো যায়।'
        }
      },
      {
        id: 'quiz-synthesized-protocol-conformance-codable',
        kind: 'mcq',
        topic: 'compiler-synthesized-conformance-codable-equatable',
        question: {
          en: 'Under what condition does the Swift compiler automatically synthesize complete conformance for "Equatable", "Hashable", or "Codable"?',
          bn: 'কোন শর্তে Swift কম্পাইলার স্বয়ংক্রিয়ভাবে "Equatable", "Hashable" বা "Codable"-এর পূর্ণ বাস্তবায়ন তৈরি করে দেয়?'
        },
        options: [
          {
            en: 'When all stored properties of the struct or enum already conform to that respective protocol, eliminating the need to write manual boilerplate',
            bn: 'যখন স্ট্রাক্ট বা এনামের সমস্ত অভ্যন্তরীণ প্রোপার্টি ইতোমধ্যে সেই প্রটোকলটি মেনে চলে, ফলে বাড়তি কোনো কোড লিখতে হয় না'
          },
          {
            en: 'Only when the struct is marked with the @objc attribute',
            bn: 'কেবল তখনই যখন স্ট্রাক্টটিকে @objc অ্যাট্রিবিউট দিয়ে চিহ্নিত করা হয়'
          },
          {
            en: 'Only when compiling for 32-bit hardware architectures',
            bn: 'কেবল ৩২-বিট হার্ডওয়্যার আর্কিটেকচারের জন্য কোড তৈরির সময়'
          },
          {
            en: 'The compiler never synthesizes protocol conformances',
            bn: 'কম্পাইলার কখনোই স্বয়ংক্রিয়ভাবে প্রটোকল বাস্তবায়ন তৈরি করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The compiler synthesizes conformance if all stored properties conform.',
          bn: 'সব ফিল্ড নিয়ম মানলে কম্পাইলার নিজে থেকেই পুরো অবজেক্টের জন্য কোড লিখে নেয়।'
        },
        explanation: {
          en: 'Swift synthesizes equality, hashing, and JSON encoding/decoding automatically when all child properties conform, saving thousands of lines of boilerplate.',
          bn: 'এর ফলে হাজার হাজার লাইনের ক্লান্তিকর এনকোডিং-ডিকোডিং কোড লেখার ঝামেলা বেঁচে যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'enums-and-the-switch',
    title: {
      en: 'Enums with Associated Values & Pattern Matching',
      bn: 'অ্যাসোসিয়েটেড ভ্যালু সহ এনাম এবং প্যাটার্ন ম্যাচিং'
    }
  }
};
