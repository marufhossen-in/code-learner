import type { Lesson } from '../../../lib/types';

export const InheritanceAndTheVirtualLesson: Lesson = {
  slug: 'inheritance-and-the-virtual',
  tech: 'cpp',
  title: {
    en: 'Inheritance, Polymorphism & Virtual Tables — Dynamic Dispatch & Abstract Interfaces',
    bn: 'ইনহেরিটেন্স, পলিমরফিজম ও ভার্চুয়াল টেবিল — ডাইনামিক ডিসপ্যাচ ও অ্যাবস্ট্রাক্ট ইন্টারফেস'
  },
  summary: {
    en: 'Dynamic polymorphism and inheritance in C++ provide the bedrock for modular, extensible object-oriented architectures. By declaring member functions virtual, base classes define interface contracts that derived classes override with specialized behavior. Under the hood, the compiler orchestrates runtime dynamic dispatch via Virtual Method Tables (vtables) and hidden per-instance 8-byte virtual pointers (vptables). Pure virtual functions (= 0) establish abstract interfaces that mandate concrete implementations in subclasses. Crucially, declaring base class destructors virtual is a strict mandate; deleting derived objects polymorphically through base pointers without a virtual destructor results in undefined behavior and leaked resources.',
    bn: 'C++ এ ডাইনামিক পলিমরফিজম ও ইনহেরিটেন্স মডুলার ও সহজে সম্প্রসারণযোগ্য অবজেক্ট ওরিয়েন্টেড আর্কিটেকচারের মূল ভিত্তি প্রদান করে। মেম্বার ফাংশনকে virtual ঘোষণার মাধ্যমে বেস ক্লাস একটি ইন্টারফেস তৈরি করে যা চাইল্ড ক্লাসগুলো নিজস্ব প্রয়োজনমতো ওভাররাইড করতে পারে। নেপথ্যে কম্পাইলার ভার্চুয়াল মেথড টেবিল (vtable) এবং প্রতিটি অবজেক্টের ভেতর লুকানো ৮-বাইটের ভার্চুয়াল পয়েন্টারের (vptr) সাহায্যে রানটাইম ডাইনামিক ডিসপ্যাচ পরিচালনা করে। পিওর ভার্চুয়াল ফাংশন (= 0) খাঁটি অ্যাবস্ট্রাক্ট ইন্টারফেস প্রতিষ্ঠা করে যা চাইল্ড ক্লাসে বাস্তবায়ন করা বাধ্যতামূলক। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, বেস ক্লাসের ডেস্ট্রাক্টরকে সর্বদা virtual ঘোষণা করতে হয়; ভার্চুয়াল ডেস্ট্রাক্টর ছাড়া বেস পয়েন্টার দিয়ে চাইল্ড অবজেক্ট ডিলিট করলে মারাত্মক অনির্ধারিত আচরণ এবং মেমোরি লিক ঘটে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Dynamic Polymorphism and Class Hierarchies',
        bn: 'মূল ধারণা: ডাইনামিক পলিমরফিজম ও ক্লাস হায়ারার্কি'
      }
    },
    {
      type: 'visual',
      id: 'dom-tree'
    },
    {
      type: 'para',
      text: {
        en: 'When you model complex domain architectures in C++, object-oriented polymorphism allows programs to treat distinct derived types through a unified base interface. While static polymorphism with templates resolves types at compile time, dynamic polymorphism enables runtime decisions where objects of different shapes or behaviors execute appropriate logic through virtual method dispatch.',
        bn: 'C++ এ যখন আপনি জটিল সিস্টেম বা ডোমেন আর্কিটেকচার ডিজাইন করেন, তখন অবজেক্ট ওরিয়েন্টেড পলিমরফিজম একটি সাধারণ বেস ইন্টারফেসের মাধ্যমে বিভিন্ন স্বতন্ত্র চাইল্ড ক্লাসকে ব্যবহারের সুযোগ দেয়। টেমপ্লেটের স্ট্যাটিক পলিমরফিজম যেখানে কম্পাইল টাইমে টাইপ নির্ধারণ করে, সেখানে ডাইনামিক পলিমরফিজম ভার্চুয়াল মেথড ডিসপ্যাচের মাধ্যমে রানটাইমে বিভিন্ন অবজেক্টের জন্য উপযুক্ত নিজস্ব লজিক চালানোর স্বাধীনতা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Function',
          def: {
            en: 'A member function declared with the virtual keyword whose execution resolution is deferred to runtime dynamic dispatch',
            bn: 'virtual কিওয়ার্ড দিয়ে ঘোষিত মেম্বার ফাংশন যার এক্সিকিউশন সিদ্ধান্ত কম্পাইল টাইমে না নিয়ে রানটাইমে ডাইনামিক ডিসপ্যাচের ওপর ছেড়ে দেওয়া হয়'
          }
        },
        {
          term: 'Virtual Table (vtable)',
          def: {
            en: 'A compiler-generated static lookup table of function pointers created per polymorphic class to resolve virtual calls',
            bn: 'প্রতিটি পলিমরফিক ক্লাসের জন্য কম্পাইলার কর্তৃক তৈরি করা ফাংশন পয়েন্টারের স্ট্যাটিক টেবিল যা ভার্চুয়াল কল পরিচালনার পথ দেখায়'
          }
        },
        {
          term: 'Virtual Pointer (vptr)',
          def: {
            en: 'A hidden 8-byte pointer embedded at offset 0 inside each polymorphic object instance pointing to its class vtable',
            bn: 'প্রতিটি পলিমরফিক অবজেক্টের শুরুতে থাকা একটি লুকানো ৮-বাইটের মেমোরি পয়েন্টার যা ওই ক্লাসের নিজস্ব vtable-কে নির্দেশ করে'
          }
        },
        {
          term: 'Pure Virtual Function (= 0)',
          def: {
            en: 'A virtual function declaration with no base body that renders the class abstract, mandating derived implementation',
            bn: 'কোনো বডি ছাড়া ঘোষিত ভার্চুয়াল ফাংশন (= 0) যা ক্লাসটিকে খাঁটি অ্যাবস্ট্রাক্ট বানায় এবং চাইল্ড ক্লাসে বাস্তবায়ন করা বাধ্যতামূলক করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'vtable-mechanics',
      text: {
        en: 'The Virtual Method Table (vtable): Two-Step Indirection',
        bn: 'ভার্চুয়াল মেথড টেবিল (vtable): দুই ধাপের ইনডিরেকশন কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a class declares any virtual function, the compiler inserts a hidden 8-byte virtual pointer (vptr) into every instantiated object. Calling shape->draw() does not jump to a fixed instruction address; it resolves dynamically through two sequential memory lookups.',
        bn: 'কোনো ক্লাসে একটি ভার্চুয়াল ফাংশন ঘোষণা করার সাথে সাথে কম্পাইলার প্রতিটি তৈরি হওয়া অবজেক্টে একটি গোপন ৮-বাইটের ভার্চুয়াল পয়েন্টার (vptr) বসিয়ে দেয়। shape->draw() কল করলে তা সরাসরি কোনো নির্দিষ্ট ঠিকানায় জাম্প করে না; বরং দুটি ধারাবাহিক মেমোরি অনুসন্ধানের মাধ্যমে সঠিক কোডে পৌঁছায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'First, the CPU dereferences shape to read its vptr. Second, it indexes the vtable at the fixed offset for draw() to load the concrete function pointer and executes the call. This indirection incurs a minor overhead of a few nanoseconds, delivering boundless architectural flexibility.',
        bn: 'প্রথমে সিপিইউ shape পয়েন্টারটি পড়ে তার ভেতরের vptr খুঁজে নেয়। দ্বিতীয়ত, এটি vtable-এর নির্দিষ্ট অফসেট থেকে draw()-এর আসল ফাংশন পয়েন্টার লোড করে এক্সিকিউট করে। এই সামান্য দুই ধাপের ইনডিরেকশনে মাত্র কয়েক ন্যানোসেকেন্ড সময় লাগলেও এটি সফটওয়্যারে অসীম আর্কিটেকচারাল নমনীয়তা প্রদান করে।'
      }
    },
    {
      type: 'heading',
      id: 'virtual-destructor-mandate',
      text: {
        en: 'The Virtual Destructor Mandate: Preventing Resource Leaks',
        bn: 'ভার্চুয়াল ডেস্ট্রাক্টরের অপরিহার্যতা: মেমোরি বিপর্যয় রোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Whenever a class serves as a polymorphic base, its destructor must be declared virtual: virtual ~Base() = default;. Without a virtual destructor, executing delete basePtr invokes only the Base destructor, leaving derived member buffers completely unfreed in RAM.',
        bn: 'যেকোনো ক্লাস যখন পলিমরফিক বেস ক্লাস হিসেবে কাজ করে, তখন তার ডেস্ট্রাক্টরকে সর্বদা virtual ঘোষণা করতে হয়: virtual ~Base() = default;। ভার্চুয়াল ডেস্ট্রাক্টর না থাকলে delete basePtr চালালে কেবল বেস ক্লাসের ডেস্ট্রাক্টর চলবে, আর চাইল্ড ক্লাসের নিজস্ব মেমোরি র্যামে সম্পূর্ণ অবমুক্তহীন অবস্থায় আটকে থাকবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A virtual destructor ensures the runtime queries the object vtable, executing the derived destructor first to free child resources before tearing down the base class frame cleanly.',
        bn: 'একটি ভার্চুয়াল ডেস্ট্রাক্টর নিশ্চিত করে যে রানটাইম vtable অনুসন্ধান করে প্রথমে চাইল্ড ক্লাসের নিজস্ব রিসোর্সগুলো মুক্ত করবে এবং এরপর সুশৃঙ্খলভাবে বেস ক্লাসের ফ্রেমটি পরিষ্কার করবে।'
      }
    },
    {
      type: 'heading',
      id: 'override-and-final',
      text: {
        en: 'C++11 override and final: Eliminating Subtle Typos',
        bn: 'C++11 override ও final: অসতর্ক ভুল দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In legacy C++, a minor typo in a derived function signature (such as void draw(int) const instead of void draw(int)) silently created a brand-new overloaded method rather than overriding the virtual base. The code compiled cleanly, but runtime polymorphic dispatch silently failed.',
        bn: 'অতীতে পুরোনো C++ এ চাইল্ড ক্লাসের ফাংশন সিগনেচারে সামান্য অমিল থাকলে (যেমন void draw(int) এর বদলে void draw(int) const) কম্পাইলার কোনো এরর না দিয়ে নিঃশব্দে একটি সম্পূর্ণ নতুন ওভারলোড বানিয়ে নিত। কোড কম্পাইল হলেও রানটাইমে পলিমরফিজম সম্পূর্ণ ব্যর্থ হতো।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The modern override specifier instructs the compiler to verify that an exact match exists in the base class, throwing an immediate compile error if signatures diverge. The companion final specifier forbids derived classes from overriding a specific method or inheriting from a class.',
        bn: 'আধুনিক override স্পেসিফায়ার কম্পাইলারকে কঠোরভাবে যাচাই করতে বলে যে বেস ক্লাসে হুবহু একই নামের ভার্চুয়াল মেথড আছে কিনা, সামান্য অমিল পেলেই কম্পাইলেশন বন্ধ করে এরর দেওয়া হয়। একইভাবে final স্পেসিফায়ার কোনো নির্দিষ্ট মেথডকে পুনরায় ওভাররাইড করা বা চাইল্ড ক্লাস বানানো পুরোপুরি নিষিদ্ধ করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Dynamic vs Static Polymorphism',
        bn: 'কাঠামোগত তুলনা: ডাইনামিক বনাম স্ট্যাটিক পলিমরফিজম'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Dynamic Polymorphism (virtual)', bn: 'ডাইনামিক পলিমরফিজম (virtual)' },
        { en: 'Static Polymorphism (Templates / CRTP)', bn: 'স্ট্যাটিক পলিমরফিজম (Templates / CRTP)' }
      ],
      rows: [
        [
          { en: 'Resolution Timing', bn: 'সিদ্ধান্তের সময়' },
          { en: 'Runtime via vtable function pointer lookup', bn: 'রানটাইমে vtable ফাংশন পয়েন্টার ধরে' },
          { en: 'Compile time via template monomorphization', bn: 'কম্পাইল টাইমে টেমপ্লেট মনোমর্ফাইজেশনে' }
        ],
        [
          { en: 'Per-Object Memory Overhead', bn: 'অবজেক্ট প্রতি মেমোরি খরচ' },
          { en: '8 bytes per instance for hidden vptr', bn: 'লুকানো vptr-এর জন্য প্রতি ইনস্ট্যান্সে ৮ বাইট' },
          { en: 'Zero bytes (no vptr, no vtable)', bn: 'শূন্য বাইট (কোনো vptr বা vtable নেই)' }
        ],
        [
          { en: 'Heterogeneous Collections', bn: 'ভিন্ন অবজেক্টের সমন্বিত কালেকশন' },
          { en: 'Supported: std::vector<std::unique_ptr<Base>>', bn: 'সমর্থিত: std::vector<std::unique_ptr<Base>>' },
          { en: 'Requires std::variant or separate monomorphized types', bn: 'std::variant বা আলাদা মনোমর্ফাইজড টাইপ লাগে' }
        ],
        [
          { en: 'Inlining Capability', bn: 'ফাংশন ইনলাইনিং সুবিধা' },
          { en: 'Rarely inlined due to runtime dynamic address', bn: 'রানটাইম অ্যাড্রেসের কারণে সচরাচর ইনলাইন হয় না' },
          { en: 'Aggressively inlined by optimizing compiler', bn: 'কম্পাইলার দ্বারা অত্যন্ত দক্ষতার সাথে ইনলাইন হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: VTable Dispatch & Shape Hierarchy',
        bn: 'বাস্তব কোড সিমুলেশন: VTable ডিসপ্যাচ ও শেপ হায়ারার্কি'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ Virtual Tables, Polymorphism & vptr in Node.js

// Simulating VTable mechanics
class VTable {
  constructor(public className: string, public methods: Record<string, Function>) {}
}

// Concrete derived classes simulating C++ object layout with vptr
class Circle {
  public vptr: VTable;

  constructor(public radius: number) {
    // Hidden 8-byte vptr pointing to Circle vtable
    this.vptr = new VTable('Circle', {
      area: (self: Circle) => Math.round(3.14159 * self.radius * self.radius),
      name: () => 'Circle'
    });
  }
}

class Rectangle {
  public vptr: VTable;

  constructor(public width: number, public height: number) {
    // Hidden 8-byte vptr pointing to Rectangle vtable
    this.vptr = new VTable('Rectangle', {
      area: (self: Rectangle) => self.width * self.height,
      name: () => 'Rectangle'
    });
  }
}

// Polymorphic collection of base pointers: std::vector<std::unique_ptr<Shape>>
const shapes = [new Circle(7), new Rectangle(10, 20)];

// Polymorphic dynamic dispatch simulation
const computedAreas = shapes.map((shape) => {
  // 1. Dereference vptr
  // 2. Lookup function pointer in vtable
  // 3. Invoke implementation
  return shape.vptr.methods.area(shape);
});

console.log('Polymorphic area computed for Circle with radius 7:', computedAreas[0]);
// -> Polymorphic area computed for Circle with radius 7: 154
console.log('Polymorphic area computed for Rectangle with 10x20 dimensions:', computedAreas[1]);
// -> Polymorphic area computed for Rectangle with 10x20 dimensions: 200
console.log('Total polymorphic shape instances evaluated in array:', shapes.length);
// -> Total polymorphic shape instances evaluated in array: 2
console.log('Hidden virtual pointer (vptr) size per polymorphic object in bytes: 8');
// -> Hidden virtual pointer (vptr) size per polymorphic object in bytes: 8`,
      caption: {
        en: 'Simulation: Circle radius 7 yields area 154; Rectangle 10x20 yields 200; 2 polymorphic instances evaluated; vptr is 8 bytes',
        bn: 'সিমুলেশন: বৃত্তের ব্যাসার্ধ ৭ হলে ক্ষেত্রফল ১৫৪; আয়তক্ষেত্র ১০x২০ হলে ২০০; ২টি পলিমরফিক অবজেক্ট মূল্যায়ন; vptr ৮ বাইট'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always declare polymorphic base destructors as virtual. A virtual destructor guarantees that deleting a derived object via a base pointer executes the derived destructor first, preventing memory leaks.',
        bn: 'নিয়ম ১: পলিমরফিক বেস ক্লাসের ডেস্ট্রাক্টরকে সর্বদা virtual ঘোষণা করুন। ভার্চুয়াল ডেস্ট্রাক্টর নিশ্চিত করে যে বেস পয়েন্টার দিয়ে ডিলিট করলে চাইল্ড ক্লাসের ডেস্ট্রাক্টর আগে চলে মেমোরি লিক রোধ করবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Apply the override specifier on all overridden virtual methods. The override keyword instructs the compiler to catch subtle signature mismatches, constness discrepancies, and typos at compile time.',
        bn: 'নিয়ম ২: সমস্ত ওভাররাইড করা ভার্চুয়াল মেথডে override কিওয়ার্ড ব্যবহার করুন। এটি কম্পাইলারকে নির্দেশ দেয় যেন মেথড সিগনেচারে সামান্য অমিল বা বানান ভুল থাকলে কম্পাইল টাইমে তা সাথে সাথে ধরে ফেলে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Store polymorphic collections using smart pointers to base classes. Use std::vector<std::unique_ptr<Base>> to achieve clean RAII destruction and avoid object slicing bugs caused by pass-by-value.',
        bn: 'নিয়ম ৩: পলিমরফিক কালেকশনে বেস ক্লাসের স্মার্ট পয়েন্টার ব্যবহার করুন। std::vector<std::unique_ptr<Base>> ব্যবহার করলে স্বয়ংক্রিয় RAII অবমুক্তি মেলে এবং অবজেক্ট স্লাইসিংয়ের ঝুঁকি দূর হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Avoid deep inheritance hierarchies; prefer composition over inheritance. Deep hierarchies increase coupling and memory cache misses; combine small cohesive components rather than building massive trees.',
        bn: 'নিয়ম ৪: খুব গভীর ইনহেরিটেন্স ট্রি পরিহার করুন; ইনহেরিটেন্সের চেয়ে কম্পোজিশনকে অগ্রাধিকার দিন। অতিরিক্ত ইনহেরিটেন্স কোডকে জটিল ও ধীরগতির করে; তাই ছোট ছোট উপাদান একত্রিত করে ডিজাইন করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-inh-ex1',
      kind: 'mcq',
      topic: 'Virtual table (vtable) and virtual pointer (vptr) mechanics',
      question: {
        en: 'How does C++ execute dynamic virtual function dispatch under the hood when invoking a method on a polymorphic object?',
        bn: 'একটি পলিমরফিক অবজেক্টে মেথড চালানোর সময় নেপথ্যে C++ কীভাবে ডাইনামিক ভার্চুয়াল ফাংশন ডিসপ্যাচ পরিচালনা করে?'
      },
      options: [
        {
          en: 'It reads the hidden 8-byte virtual pointer (vptr) inside the object, locates the class virtual method table (vtable), and jumps to the function pointer at that method offset',
          bn: 'এটি অবজেক্টের ভেতরে থাকা গোপন ৮-বাইটের ভার্চুয়াল পয়েন্টার (vptr) পড়ে, ক্লাসের vtable খুঁজে নেয় এবং ওই মেথডের অফসেটে থাকা ফাংশন পয়েন্টারে জাম্প করে'
        },
        {
          en: 'It prints the method name onto the screen and asks the user to press Enter',
          bn: 'এটি মেথডের নাম স্ক্রিনে প্রিন্ট করে ব্যবহারকারীকে এন্টার চাপতে বলে'
        },
        {
          en: 'It reboots the computer operating system to find the code',
          bn: 'কোডটি খুঁজতে এটি কম্পিউটার অপারেটিং সিস্টেম রিস্টার্ট দেয়'
        },
        {
          en: 'All virtual functions are evaluated using an online cloud server',
          bn: 'সমস্ত ভার্চুয়াল ফাংশন একটি অনলাইন ক্লাউড সার্ভার দিয়ে হিসাব করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Object vptr -> Class vtable -> Function pointer call.',
        bn: 'অবজেক্টের vptr -> ক্লাসের vtable -> ফাংশন পয়েন্টার কল।'
      },
      explanation: {
        en: 'Each polymorphic object has a vptr pointing to its class vtable. Dynamic calls index this table to fetch and call the most-derived implementation.',
        bn: 'প্রতিটি পলিমরফিক অবজেক্টে একটি vptr থাকে যা ক্লাসের vtable নির্দেশ করে। রানটাইমে এই টেবিল থেকে সঠিক ফাংশন পয়েন্টার খুঁজে বের করে চালানো হয়।'
      }
    },
    {
      id: 'cpp-inh-ex2',
      kind: 'mcq',
      topic: 'Why base class destructors must be virtual',
      question: {
        en: 'What dangerous problem occurs when executing Base *p = new Derived(); delete p; if Base does not have a virtual destructor?',
        bn: 'Base ক্লাসে যদি ভার্চুয়াল ডেস্ট্রাক্টর না থাকে, তবে Base *p = new Derived(); delete p; চালালে কোন মারাত্মক সমস্যা দেখা দেয়?'
      },
      options: [
        {
          en: 'Undefined behavior: only the Base destructor is called; the Derived class destructor never runs, leaking any heap memory, files, or resources allocated by Derived',
          bn: 'অনির্ধারিত আচরণ: কেবল বেস ক্লাসের ডেস্ট্রাক্টর চলে; চাইল্ড ক্লাসের ডেস্ট্রাক্টর কখনোই চলে না, যার ফলে চাইল্ডের বরাদ্দ করা সমস্ত মেমোরি ও ফাইল লিক হয়'
        },
        {
          en: 'The compiler refuses to compile the word delete',
          bn: 'কম্পাইলার delete শব্দটি কম্পাইল করতে অস্বীকার করে'
        },
        {
          en: 'The computer screen turns into a calculator',
          bn: 'কম্পিউটার স্ক্রিন একটি ক্যালকুলেটরে রূপান্তরিত হয়'
        },
        {
          en: 'The object is automatically duplicated 500 times',
          bn: 'অবজেক্টটি স্বয়ংক্রিয়ভাবে ৫০০ বার ডুপ্লিকেট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Only the base destructor runs, leaking derived resources.',
        bn: 'কেবল বেস ডেস্ট্রাক্টর চলে এবং চাইল্ডের রিসোর্সগুলো মেমোরিতে লিক হয়ে যায়।'
      },
      explanation: {
        en: 'Deleting a derived object through a base pointer without a virtual destructor results in undefined behavior under the C++ standard, skipping child cleanup.',
        bn: 'ভার্চুয়াল ডেস্ট্রাক্টর ছাড়া বেস পয়েন্টার দিয়ে ডিলিট করলে C++ স্ট্যান্ডার্ড অনুযায়ী মারাত্মক ক্র্যাশ ঘটে এবং চাইল্ডের রিসোর্সগুলো পরিষ্কার হয় না।'
      }
    },
    {
      id: 'cpp-inh-ex3',
      kind: 'mcq',
      topic: 'Pure virtual functions and abstract base classes',
      question: {
        en: 'What is a pure virtual function in C++ (such as virtual void render() = 0;), and what effect does it have on the containing class?',
        bn: 'C++ এ পিওর ভার্চুয়াল ফাংশন (যেমন virtual void render() = 0;) বলতে কী বোঝায় এবং ক্লাসের ওপর এর প্রভাব কী?'
      },
      options: [
        {
          en: 'It is a virtual function with no base implementation; having at least one pure virtual function makes the class an Abstract Base Class that cannot be directly instantiated',
          bn: 'এটি বডিহীন একটি ভার্চুয়াল ফাংশন; অন্তত একটি পিওর ভার্চুয়াল ফাংশন থাকলে ক্লাসটি অ্যাবস্ট্রাক্ট হয়ে যায় এবং তার সরাসরি কোনো অবজেক্ট তৈরি করা যায় না'
        },
        {
          en: 'It is a function that can only be invoked when the computer volume is muted',
          bn: 'এটি এমন একটি ফাংশন যা কম্পিউটারের সাউন্ড বন্ধ থাকলেই কেবল চালানো যায়'
        },
        {
          en: 'It sets the value of all class integers to zero permanently',
          bn: 'এটি ক্লাসের সমস্ত পূর্ণসংখ্যার মান চিরতরে শূন্য করে দেয়'
        },
        {
          en: 'It encrypts the class source code with a digital certificate',
          bn: 'এটি ক্লাসের সোর্স কোডকে একটি ডিজিটাল সার্টিফিকেট দিয়ে এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pure virtual functions render the class abstract and non-instantiable.',
        bn: 'পিওর ভার্চুয়াল ফাংশন ক্লাসকে অ্যাবস্ট্রাক্ট বানায় যার অবজেক্ট তৈরি সম্ভব নয়।'
      },
      explanation: {
        en: 'A pure virtual function (= 0) declares an interface contract. Classes containing pure virtual methods are abstract and require derived classes to implement them.',
        bn: 'পিওর ভার্চুয়াল ফাংশন (= 0) ইন্টারফেস চুক্তি তৈরি করে। এটি থাকা ক্লাস অ্যাবস্ট্রাক্ট হয় এবং চাইল্ড ক্লাসে তা বাস্তবায়ন করা বাধ্যতামূলক হয়।'
      }
    },
    {
      id: 'cpp-inh-ex4',
      kind: 'mcq',
      topic: 'The purpose of the modern override specifier',
      question: {
        en: 'What critical bug does the override specifier prevent when overriding base class virtual functions?',
        bn: 'বেস ক্লাসের ভার্চুয়াল ফাংশন ওভাররাইড করার সময় override স্পেসিফায়ার কোন জটিল ভুল প্রতিহত করে?'
      },
      options: [
        {
          en: 'It tells the compiler to verify that the method signature matches a virtual function in the base class, catching subtle typos and constness mismatches at compile time',
          bn: 'এটি কম্পাইলারকে নিশ্চিত করতে বলে যে মেথডটির সিগনেচার বেস ক্লাসের সাথে নিখুঁত মিলেছে কিনা, যা সামান্য বানান ভুল বা অমিল কম্পাইল টাইমে ধরে ফেলে'
        },
        {
          en: 'It overrides the user password on the operating system',
          bn: 'এটি অপারেটিং সিস্টেমের ব্যবহারকারীর পাসওয়ার্ড বদলে দেয়'
        },
        {
          en: 'It allows the function to be called without having a CPU',
          bn: 'এটি কোনো সিপিইউ ছাড়াই ফাংশন কল করতে সাহায্য করে'
        },
        {
          en: 'It makes the function run backwards in time',
          bn: 'এটি ফাংশনটিকে সময়ের বিপরীত দিকে চালাতে শুরু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Compile-time verification of matching virtual signatures.',
        bn: 'ভার্চুয়াল সিগনেচার হুবহু মিলেছে কিনা কম্পাইল টাইমে নিশ্চিত করা।'
      },
      explanation: {
        en: 'Without override, typos in parameters or constness create a new overload instead of overriding the virtual method. override guarantees a compile error if it fails to override.',
        bn: 'override না থাকলে প্যারামিটার বা const-এ সামান্য ভুল হলে তা ওভাররাইড না হয়ে নতুন ফাংশন হয়ে যায়। override লিখলে অমিল হলে কম্পাইলার এরর দেয়।'
      }
    }
  ],
  quiz: {
    id: 'inheritance-and-the-virtual-quiz',
    title: {
      en: 'Inheritance & Virtual Tables Quiz',
      bn: 'ইনহেরিটেন্স ও ভার্চুয়াল টেবিল কুইজ'
    },
    questions: [
      {
        id: 'q-object-slicing-hazard',
        kind: 'mcq',
        topic: 'The object slicing problem in C++',
        question: {
          en: 'What is "Object Slicing" in C++, and why does passing polymorphic objects by value cause it?',
          bn: 'C++ এ "অবজেক্ট স্লাইসিং" (Object Slicing) কী এবং পলিমরফিক অবজেক্টকে মান বা ভ্যালু আকারে পাঠালে কেন এটি ঘটে?'
        },
        options: [
          {
            en: 'Assigning a derived object to a base object by value copies only the Base portion and chops off all derived member variables and vtable pointers, destroying polymorphism',
            bn: 'একটি চাইল্ড অবজেক্টকে বেস অবজেক্টের মানে বসালে কেবল বেস অংশটি কপি হয় এবং চাইল্ডের নিজস্ব মেম্বার ও vtable বাদ পড়ে পলিমরফিজম নষ্ট হয়'
          },
          {
            en: 'The compiler slices the source code file into 10 separate pieces on disk',
            bn: 'কম্পাইলার সোর্স কোড ফাইলটিকে ডিস্কে ১০টি টুকরোয় বিভক্ত করে ফেলে'
          },
          {
            en: 'It slices the computer screen into two equal halves horizontally',
            bn: 'এটি কম্পিউটার স্ক্রিনকে অনুভূমিকভাবে দুটি সমান ভাগে কেটে ফেলে'
          },
          {
            en: 'Object slicing only occurs when compiling code in Microsoft Word',
            bn: 'অবজেক্ট স্লাইসিং কেবল মাইক্রোসফট ওয়ার্ডে কোড কম্পাইল করলেই ঘটে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Passing by value truncates the derived portion of an object.',
          bn: 'মান আকারে পাঠালে অবজেক্টের চাইল্ড অংশটুকু খণ্ডিত বা বাদ পড়ে যায়।'
        },
        explanation: {
          en: 'A Base value only has memory space for Base members. Copying a Derived instance into a Base value slices away derived members and resets vptr to Base.',
          bn: 'বেস অবজেক্টে কেবল বেস মেম্বারদের জায়গা থাকে। মান আকারে চাইল্ড অবজেক্ট বসালে চাইল্ডের অংশ বাদ পড়ে যায় এবং vptr আবার বেসের দিকে ঘুরে যায়।'
        }
      },
      {
        id: 'q-final-specifier-benefits',
        kind: 'mcq',
        topic: 'Performance benefits of devirtualization with final',
        question: {
          en: 'How can applying the final specifier to a class or virtual function improve execution performance?',
          bn: 'ক্লাস বা ভার্চুয়াল ফাংশনে final স্পেসিফায়ার প্রয়োগ করলে কীভাবে তা কার্যক্ষমতা উন্নত করতে পারে?'
        },
        options: [
          {
            en: 'It enables the compiler to perform "devirtualization", bypassing vtable lookup entirely and inlining the function call directly as a static call',
            bn: 'এটি কম্পাইলারকে "ডিভার্চুয়ালাইজেশন" করতে সাহায্য করে, যার ফলে vtable অনুসন্ধান এড়িয়ে সরাসরি স্ট্যাটিক কল হিসেবে ফাংশনটি ইনলাইন করা সম্ভব হয়'
          },
          {
            en: 'It increases the processor clock frequency from 3 GHz to 50 GHz',
            bn: 'এটি প্রসেসরের ক্লক স্পিড ৩ গিগাহার্টজ থেকে ৫০ গিগাহার্টজে বাড়িয়ে দেয়'
          },
          {
            en: 'It prevents competitors from decompiling the software binary',
            bn: 'এটি অন্য কাউকে সফটওয়্যারটি ডিকম্পাইল করা থেকে বিরত রাখে'
          },
          {
            en: 'final makes the executable file size 0 bytes',
            bn: 'final এক্সিকিউটেবল ফাইলের সাইজ শূন্য বাইট করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Devirtualization allows compilers to inline direct static calls.',
          bn: 'ডিভার্চুয়ালাইজেশনের ফলে কম্পাইলার vtable ছাড়া সরাসরি ইনলাইন কল করতে পারে।'
        },
        explanation: {
          en: 'Because a final method can never be overridden in any further derived classes, the optimizer knows the exact target at compile time, inlining it directly.',
          bn: 'final মেথড আর কখনো ওভাররাইড হতে পারবে না বলে অপ্টিমাইজার কম্পাইল টাইমে সঠিক কোড জেনে যায় এবং vtable বাদ দিয়ে সরাসরি ইনলাইন করে দেয়।'
        }
      },
      {
        id: 'q-dynamic-cast-rtti',
        kind: 'mcq',
        topic: 'dynamic_cast and Run-Time Type Information (RTTI)',
        question: {
          en: 'What does dynamic_cast<Derived*>(basePtr) do when attempting to downcast a polymorphic base pointer?',
          bn: 'একটি পলিমরফিক বেস পয়েন্টারকে চাইল্ড ক্লাসে ডাউনকাস্ট করার সময় dynamic_cast<Derived*>(basePtr) কী কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It queries runtime type information (RTTI); if basePtr genuinely points to a Derived instance, it returns the cast pointer; otherwise, it safely returns nullptr',
            bn: 'এটি রানটাইম টাইপ তথ্য (RTTI) পরীক্ষা করে; যদি পয়েন্টারটি সত্যিই Derived অবজেক্ট নির্দেশ করে তবে কাস্ট করা পয়েন্টার দেয়, অন্যথায় নিরাপদে nullptr দেয়'
          },
          {
            en: 'It casts the pointer into an audio sound wave',
            bn: 'এটি পয়েন্টারটিকে একটি অডিও সাউন্ড তরঙ্গে রূপান্তর করে'
          },
          {
            en: 'It permanently locks the computer keyboard',
            bn: 'এটি কম্পিউটারের কিবোর্ড চিরতরে লক করে দেয়'
          },
          {
            en: 'It deletes the basePtr from RAM unconditionally',
            bn: 'এটি কোনো শর্ত ছাড়াই র্যাম থেকে basePtr মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Safe runtime type checking returning nullptr on failure.',
          bn: 'রানটাইমে নিরাপদ টাইপ পরীক্ষা যা অমিল হলে nullptr প্রদান করে।'
        },
        explanation: {
          en: 'dynamic_cast relies on RTTI stored in the vtable. It safely downcasts polymorphic types, returning nullptr for invalid pointer conversions.',
          bn: 'dynamic_cast vtable-এ থাকা RTTI ব্যবহার করে। এটি নিরাপদে ডাউনকাস্ট করে এবং টাইপ না মিললে কোনো ক্র্যাশ ছাড়াই nullptr প্রদান করে।'
        }
      },
      {
        id: 'q-multiple-inheritance-diamond',
        kind: 'mcq',
        topic: 'The diamond problem and virtual inheritance',
        question: {
          en: 'How does C++ resolve the classic "Diamond Problem" of multiple inheritance where class D inherits from both B and C, which both inherit from A?',
          bn: 'C++ কীভাবে মাল্টিপল ইনহেরিটেন্সের বহুল পরিচিত "ডায়মন্ড প্রবলেম" সমাধান করে, যেখানে D ক্লাস B ও C উভয় থেকে ইনহেরিট করে এবং B ও C উভয়েই A থেকে আসে?'
        },
        options: [
          {
            en: 'By having B and C inherit from A using virtual inheritance (class B : virtual public A), ensuring that only a single shared instance of A exists in D',
            bn: 'B এবং C-কে ভার্চুয়াল ইনহেরিটেন্স (class B : virtual public A) দিয়ে A থেকে আনা হয়, যা নিশ্চিত করে D ক্লাসে A-এর কেবল একটিমাত্র শেয়ার্ড কপি থাকবে'
          },
          {
            en: 'By renaming class A to class Diamond',
            bn: 'A ক্লাসের নাম পরিবর্তন করে Diamond ক্লাস করে দিয়ে'
          },
          {
            en: 'By deleting class D from the computer source code',
            bn: 'কম্পিউটার সোর্স কোড থেকে D ক্লাসটি মুছে ফেলে'
          },
          {
            en: 'C++ crashes and refuses to support multiple inheritance',
            bn: 'C++ ক্র্যাশ করে এবং মাল্টিপল ইনহেরিটেন্স সমর্থন করতে অস্বীকার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Virtual inheritance ensures a single shared base subobject.',
          bn: 'ভার্চুয়াল ইনহেরিটেন্স নিশ্চিত করে বেস ক্লাসের কেবল একটি একক কপি বজায় থাকবে।'
        },
        explanation: {
          en: 'Virtual base classes ensure that the common ancestor appears only once in the most-derived object layout, eliminating ambiguity and duplicate state.',
          bn: 'ভার্চুয়াল বেস ক্লাস নিশ্চিত করে যে সাধারণ পূর্বপুরুষ ক্লাসটি চাইল্ড ক্লাসের মেমোরিতে কেবল একবারই থাকবে, ফলে দ্ব্যর্থতা ও ডেটা ডুপ্লিকেশন দূর হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lambdas-and-the-capture',
    title: {
      en: 'Lambdas, Closures & Functional C++ — Captures, std::function & Ranges',
      bn: 'ল্যাম্বডা, ক্লোজার ও ফাংশনাল C++ — ক্যাপচার, std::function ও রেঞ্জেস'
    }
  }
};
