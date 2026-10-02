import type { Lesson } from '../../../lib/types';

export const MixinsAndTheModuleLesson: Lesson = {
  slug: 'mixins-and-the-module',
  tech: 'lang-ruby',
  title: {
    en: 'Modules, Mixins, Multiple Inheritance & Ancestor Dispatch',
    bn: 'মডিউল, মিক্সইন, মাল্টিপল ইনহেরিট্যান্স এবং অ্যানসেস্টর ডিসপ্যাচ'
  },
  summary: {
    en: 'Master module composition and multi-inheritance alternatives in the Ruby language. Discover how modules encapsulate constants into clean namespaces, inject reusable behaviors via "include" and "prepend", transform instance methods into class methods using "extend", and trace dynamic method resolution through the linear ancestors hierarchy.',
    bn: 'Ruby ভাষায় মডিউল কম্পোজিশন এবং মাল্টিপল ইনহেরিট্যান্সের বিকল্প কৌশল সম্পূর্ণ আয়ত্ত করুন। মডিউল কীভাবে নেমস্পেসিং তৈরি করে, "include" এবং "prepend" দিয়ে ক্লাসে পুনঃব্যবহারযোগ্য মেথড যুক্ত করে, "extend" দিয়ে ক্লাস মেথড তৈরি করে এবং রৈখিক অ্যানসেস্টর চেইনে মেথড খুঁজে পায় তা জানুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'modules-and-namespacing-heading',
      text: {
        en: 'Modules for Organization: Namespacing and Code Sharing',
        bn: 'সংগঠনের জন্য মডিউল: নেমস্পেসিং এবং কোড শেয়ারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large production systems require structured boundaries to avoid global naming collisions across domain models. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), developers organize code using "module". Unlike classes, modules cannot be instantiated with ".new" and cannot hold instance state directly. Instead, modules fulfill 2 essential software architectural roles: namespacing and behavior sharing. By nesting classes and constants inside modules ("Billing::Invoice"), teams construct clear domain boundaries while shielding the global namespace from pollution.',
        bn: 'বৃহৎ প্রোডাকশন সিস্টেমে বিভিন্ন ডোমেন ক্লাসের মাঝে নামের সংঘাত এড়াতে পরিষ্কার সীমানা তৈরি করা অত্যন্ত জরুরি। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে ডেভেলপাররা "module" ব্যবহার করে কোড সুন্দরভাবে সংগঠিত করেন। ক্লাসের মতো মডিউল থেকে ".new" দিয়ে সরাসরি কোনো অবজেক্ট তৈরি করা যায় না এবং এটি কোনো ইনস্ট্যান্স স্টেট ধরে রাখতে পারে না। এর বদলে মডিউল মূলত ২ টি স্থাপত্যিক ভূমিকা পালন করে: নেমস্পেসিং এবং আচরণ ভাগ করে নেওয়া। মডিউলের ভেতরে ক্লাস বা কনস্ট্যান্ট সাজিয়ে ("Billing::Invoice") ডেভেলপাররা গ্লোবাল স্কোপ দূষণমুক্ত রেখে পরিষ্কার ডোমেন মডেল তৈরি করেন।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby linear ancestor lookup chain showing method resolution order across prepended modules, the host class, and included mixins.',
        bn: 'চিত্র ১: Ruby রৈখিক অ্যানসেস্টর লুকআপ চেইন যা prepended মডিউল, মূল ক্লাস এবং included মিক্সইনের মেথড অনুসন্ধানের সঠিক ক্রম প্রদর্শন করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY LINEAR METHOD RESOLUTION HIERARCHY (Class.ancestors)</text>

  <!-- Step 1: Prepend -->
  <g transform="translate(30, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#db2777" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. prepend Logger</text>

    <rect x="10" y="45" width="150" height="70" rx="5" fill="#0f172a" stroke="#db2777" />
    <text x="18" y="65" fill="#f472b6" font-size="10" font-family="monospace">def process</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">log("Processing...")</text>
    <text x="25" y="98" fill="#fbbf24" font-size="9" font-family="monospace">super # calls host</text>

    <rect x="10" y="130" width="150" height="85" rx="5" fill="#db2777" fill-opacity="0.15" stroke="#ec4899" />
    <text x="18" y="152" fill="#f472b6" font-size="9" font-family="sans-serif" font-weight="bold">First in Chain:</text>
    <text x="18" y="170" fill="#f8fafc" font-size="8" font-family="sans-serif">Intercepts method calls</text>
    <text x="18" y="186" fill="#f8fafc" font-size="8" font-family="sans-serif">before the class runs</text>
  </g>

  <!-- Arrow 1 -->
  <path d="M 205 182 L 230 182" stroke="#cbd5e1" stroke-width="2" />

  <!-- Step 2: Host Class -->
  <g transform="translate(235, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. class Transaction</text>

    <rect x="10" y="45" width="150" height="70" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="18" y="65" fill="#38bdf8" font-size="10" font-family="monospace">def process</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">execute_payment</text>
    <text x="25" y="98" fill="#fbbf24" font-size="9" font-family="monospace">super # calls mixin</text>

    <rect x="10" y="130" width="150" height="85" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="18" y="152" fill="#38bdf8" font-size="9" font-family="sans-serif" font-weight="bold">Host Class Scope:</text>
    <text x="18" y="170" fill="#f8fafc" font-size="8" font-family="sans-serif">Primary business logic</text>
    <text x="18" y="186" fill="#f8fafc" font-size="8" font-family="sans-serif">and state storage</text>
  </g>

  <!-- Arrow 2 -->
  <path d="M 410 182 L 435 182" stroke="#cbd5e1" stroke-width="2" />

  <!-- Step 3: Include Mixin -->
  <g transform="translate(440, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. include Auditable</text>

    <rect x="10" y="45" width="155" height="70" rx="5" fill="#0f172a" stroke="#059669" />
    <text x="18" y="65" fill="#34d399" font-size="10" font-family="monospace">def process</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">record_audit_event</text>
    <text x="25" y="98" fill="#fbbf24" font-size="9" font-family="monospace">super # calls Object</text>

    <rect x="10" y="130" width="155" height="85" rx="5" fill="#059669" fill-opacity="0.15" stroke="#10b981" />
    <text x="18" y="152" fill="#34d399" font-size="9" font-family="sans-serif" font-weight="bold">Included Mixin:</text>
    <text x="18" y="170" fill="#f8fafc" font-size="8" font-family="sans-serif">Inserted after host class</text>
    <text x="18" y="186" fill="#f8fafc" font-size="8" font-family="sans-serif">Provides shared methods</text>
  </g>

  <!-- Arrow 3 -->
  <path d="M 620 182 L 645 182" stroke="#cbd5e1" stroke-width="2" />

  <!-- Step 4: Superclass / Object -->
  <g transform="translate(650, 65)">
    <rect width="160" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="160" height="30" rx="8" fill="#7c3aed" />
    <text x="80" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Object / Kernel</text>

    <rect x="10" y="45" width="140" height="70" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="18" y="65" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">Root Ancestors:</text>
    <text x="18" y="82" fill="#cbd5e1" font-size="9" font-family="monospace">Object</text>
    <text x="18" y="98" fill="#cbd5e1" font-size="9" font-family="monospace">Kernel, BasicObject</text>

    <rect x="10" y="130" width="140" height="85" rx="5" fill="#7c3aed" fill-opacity="0.15" stroke="#a855f7" />
    <text x="18" y="152" fill="#c084fc" font-size="9" font-family="sans-serif" font-weight="bold">Terminal End:</text>
    <text x="18" y="170" fill="#f8fafc" font-size="8" font-family="sans-serif">If method not found,</text>
    <text x="18" y="186" fill="#f8fafc" font-size="8" font-family="sans-serif">invokes method_missing</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'include-prepend-extend-directives-heading',
      text: {
        en: 'The 3 Mixin Directives: include, prepend, and extend',
        bn: '৩ টি মিক্সইন নির্দেশিকা: include, prepend এবং extend'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Ruby avoids the complexity and diamond problems of multiple inheritance through mixins. When sharing logic across unrelated classes, developers employ 3 specialized directives. The "include" keyword places a module immediately after the host class in its ancestor lookup path, granting instance methods. On the other hand, "prepend" positions the module ahead of the class, enabling developers to intercept method calls and wrap them before delegating to "super". Finally, "extend" mixes methods into the singleton class of the receiver, turning module methods into class-level methods (or object-specific singleton methods).',
        bn: 'Ruby মাল্টিপল ইনহেরিট্যান্সের জটিল ডায়মন্ড সমস্যা এড়াতে মিক্সইন ব্যবহারের চমৎকার সুবিধা দেয়। সম্পর্কহীন বিভিন্ন ক্লাসের মাঝে কোড ভাগ করতে ডেভেলপাররা মূলত ৩ টি নির্দেশিকা ব্যবহার করেন। "include" কি-ওয়ার্ডটি মডিউলটিকে ক্লাসের ঠিক পরে অ্যানসেস্টর চেইনে স্থান দেয় এবং এর মেথডগুলো ইনস্ট্যান্স মেথড হিসেবে কাজ করে। অন্যদিকে "prepend" মডিউলটিকে ক্লাসের আগেই স্থান দেয়, ফলে কোনো মেথড কল ক্লাসে প্রবেশের আগেই তাকে আটকে ফিল্টারিং করা বা "super" দিয়ে নিয়ন্ত্রণ পাঠানো সম্ভব হয়। পরিশেষে, "extend" নির্দেশিকাটি মেথডগুলোকে অবজেক্টের একক সিঙ্গেলটন ক্লাসে যুক্ত করে সরাসরি ক্লাস মেথডে রূপান্তর করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby module mixins (include vs prepend vs extend) and the linear ancestor method dispatch chain.',
        bn: 'Ruby মডিউল মিক্সইন (include বনাম prepend বনাম extend) এবং রৈখিক অ্যানসেস্টর মেথড ডিসপ্যাচ চেইনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Module Mixins and Ancestor Method Resolution Order

export interface ModuleBehavior {
  name: string;
  methods: Record<string, Function>;
}

export class RubyClassSimulator {
  public name: string;
  public ancestors: string[] = [];
  private methodRegistry: Map<string, Function> = new Map();

  constructor(name: string) {
    this.name = name;
    this.ancestors = [name, 'Object', 'Kernel', 'BasicObject'];
  }

  // Simulates "include Module": Inserts module AFTER host class in ancestors
  public include(mod: ModuleBehavior): void {
    const classIdx = this.ancestors.indexOf(this.name);
    this.ancestors.splice(classIdx + 1, 0, mod.name);
    for (const [mName, fn] of Object.entries(mod.methods)) {
      if (!this.methodRegistry.has(mName)) {
        this.methodRegistry.set(mName, fn);
      }
    }
  }

  // Simulates "prepend Module": Inserts module BEFORE host class in ancestors
  public prepend(mod: ModuleBehavior): void {
    const classIdx = this.ancestors.indexOf(this.name);
    this.ancestors.splice(classIdx, 0, mod.name);
    for (const [mName, fn] of Object.entries(mod.methods)) {
      // Prepend overrides existing class implementation!
      this.methodRegistry.set(mName, fn);
    }
  }

  // Dispatch a message down the linear ancestor chain
  public dispatch(methodName: string, ...args: any[]): any {
    const fn = this.methodRegistry.get(methodName);
    if (!fn) throw new Error("NoMethodError: undefined method '" + methodName + "' for " + this.name);
    return fn(...args);
  }
}

// Execution Demonstration
const transactionClass = new RubyClassSimulator('Transaction');

// 1. Defining mixin modules
const AuditableModule: ModuleBehavior = {
  name: 'Auditable',
  methods: {
    auditLog: () => 'Audit recorded in compliance vault'
  }
};

const SecurityPrecheck: ModuleBehavior = {
  name: 'SecurityPrecheck',
  methods: {
    process: (amount: number) => 'Pre-cleared risk check for ' + amount + ' dollars'
  }
};

// 2. Applying include and prepend
transactionClass.include(AuditableModule);
transactionClass.prepend(SecurityPrecheck);

console.log('--- 1. Ruby Ancestors Resolution Order ---');
console.log('Resolved Ancestors Chain:', transactionClass.ancestors);
// ['SecurityPrecheck', 'Transaction', 'Auditable', 'Object', 'Kernel', 'BasicObject']

console.log('\n--- 2. Dispatching Methods Through Mixins ---');
const auditOutput = transactionClass.dispatch('auditLog');
console.log('Dispatch auditLog (via included Auditable):', auditOutput);

const securityOutput = transactionClass.dispatch('process', 100);
console.log('Dispatch process (via prepended SecurityPrecheck):', securityOutput);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Module & Namespaces',
          def: {
            en: 'Container encapsulating constants, classes, and methods without permitting instantiation via .new.',
            bn: 'কনটেইনার যা কনস্ট্যান্ট, ক্লাস ও মেথড সংরক্ষণ করে কিন্তু .new দিয়ে অবজেক্ট তৈরির অনুমতি দেয় না।'
          }
        },
        {
          term: 'include vs prepend',
          def: {
            en: 'Include inserts a module after the host class; prepend inserts it before, enabling call wrapping.',
            bn: 'Include ক্লাসের পরে মডিউল যুক্ত করে; আর Prepend ক্লাসের আগে বসিয়ে মেথড ইন্টারসেপ্ট করতে দেয়।'
          }
        },
        {
          term: 'extend (Singleton Class)',
          def: {
            en: 'Directive mixing module methods into an object\'s singleton class, creating class-level methods.',
            bn: 'নির্দেশিকা যা অবজেক্টের একক ক্লাসে মেথড যুক্ত করে সেগুলোকে ক্লাস-লেভেল মেথডে রূপান্তর করে।'
          }
        },
        {
          term: 'Method Lookup Path',
          def: {
            en: 'Linear chain of classes and modules (Class.ancestors) inspected sequentially during message dispatch.',
            bn: 'ক্লাস ও মডিউলের রৈখিক চেইন (Class.ancestors) যা বার্তা প্রেরণের সময় ধারাবাহিকভাবে খোঁজা হয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ruby-prepend-interception-order-ex1',
      kind: 'mcq',
      topic: 'ruby-prepend-method-interception-ancestors',
      question: {
        en: 'When a class "Invoice" defines a method "calculate" and uses "prepend DiscountLogic", which implementation executes first when "invoice.calculate" is called?',
        bn: 'যখন একটি "Invoice" ক্লাসে নিজস্ব "calculate" মেথড থাকে এবং সাথে "prepend DiscountLogic" ব্যবহার করা হয়, তবে "invoice.calculate" কল করলে কার মেথডটি প্রথমে চলবে?'
      },
      options: [
        {
          en: 'The "DiscountLogic" module\'s method executes first because "prepend" positions the module ahead of the host class in the ancestor lookup chain',
          bn: '"DiscountLogic" মডিউলের মেথডটি প্রথমে চলবে কারণ "prepend" নির্দেশিকাটি মডিউলটিকে মূল ক্লাসের ঠিক আগে অ্যানসেস্টর চেইনে স্থান দেয়'
        },
        {
          en: 'The Invoice class calculate method runs first regardless of prepend',
          bn: 'prepend যাই থাকুক না কেন Invoice ক্লাসের মেথডই সর্বদা আগে চলবে'
        },
        {
          en: 'It causes a fatal syntax compiler collision crash',
          bn: 'মেথডের নামের মিল থাকায় কম্পাইলার সরাসরি ক্র্যাশ করবে'
        },
        {
          en: 'prepend was deprecated in Ruby 2.0',
          bn: 'Ruby ২.০ সংস্করণে prepend বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prepend places the module before the class in the ancestors chain.',
        bn: 'নামের মধ্যেই ইঙ্গিত আছে: ক্লাসের আগেই মডিউলটি যুক্ত হয়।'
      },
      explanation: {
        en: '"prepend" was introduced in Ruby 2.0 specifically to enable clean method decoration. Because the prepended module comes before the class, it intercepts calls and can invoke "super".',
        bn: 'এর মাধ্যমে মূল ক্লাসের কোড পরিবর্তন না করেই মেথড ইন্টারসেপ্ট করে ডিসকাউন্ট বা অথেন্টিকেশন যোগ করা যায়।'
      }
    },
    {
      id: 'extend-class-methods-metaclass-ex2',
      kind: 'mcq',
      topic: 'ruby-extend-singleton-class-class-methods',
      question: {
        en: 'What occurs when "extend FormattingHelper" is executed inside a Ruby class definition?',
        bn: 'একটি Ruby ক্লাস ডিফিনিশনের ভেতরে "extend FormattingHelper" লিখলে কী ঘটে?'
      },
      options: [
        {
          en: 'The module methods are mixed into the class\'s singleton class, transforming them into callable class methods (e.g. MyClass.format_date)',
          bn: 'মডিউলের মেথডগুলো ক্লাসের সিঙ্গেলটন ক্লাসে যুক্ত হয়, যার ফলে সেগুলোকে সরাসরি ক্লাস মেথড হিসেবে কল করা যায় (যেমন MyClass.format_date)'
        },
        {
          en: 'It disables all instance methods in the class',
          bn: 'এটি ক্লাসের সমস্ত ইনস্ট্যান্স মেথড বন্ধ করে দেয়'
        },
        {
          en: 'It converts the class into an abstract C++ header',
          bn: 'এটি ক্লাসটিকে একটি অ্যাবস্ট্রাক্ট C++ হেডারে রূপান্তর করে'
        },
        {
          en: 'extend can only be used with files on disk',
          bn: 'extend কেবল ডিস্কের ফাইলের সাথেই ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'extend mixes methods into the singleton class, creating class methods.',
        bn: 'ইনস্ট্যান্স না বানিয়েই ক্লাসের নাম দিয়ে সরাসরি মেথড চালানোর সুবিধা তৈরি করে extend।'
      },
      explanation: {
        en: 'While "include" adds instance methods, "extend" adds methods to the receiver\'s singleton class. When called in a class body, it turns module methods into class-level methods.',
        bn: 'include যেখানে অবজেক্টের মেথড বানায়, extend সেখানে সরাসরি ক্লাসের মেথড বানিয়ে দেয়।'
      }
    },
    {
      id: 'super-ancestor-chain-delegation-ex3',
      kind: 'mcq',
      topic: 'ruby-super-keyword-ancestors-delegation',
      question: {
        en: 'What does the "super" keyword accomplish when called inside an overridden method in Ruby?',
        bn: 'Ruby-তে একটি ওভাররিডেন মেথডের ভেতরে "super" কি-ওয়ার্ডটি কল করলে কী কাজ সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'It transfers execution to the next method of the exact same name in the linear ancestor lookup chain (Class.ancestors)',
          bn: 'এটি রৈখিক অ্যানসেস্টর চেইনে (Class.ancestors) পরবর্তী একই নামের মেথডের কাছে কোড এক্সিকিউশন স্থানান্তর করে'
        },
        {
          en: 'It grants administrative superuser rights to the shell',
          bn: 'এটি শেলকে অ্যাডমিনিস্ট্রেটিভ সুপারইউজার রাইটস প্রদান করে'
        },
        {
          en: 'It restarts the Ruby runtime environment',
          bn: 'এটি Ruby রানটাইমকে রিস্টার্ট করে'
        },
        {
          en: 'super is only supported in Java, not Ruby',
          bn: 'super কেবল জাভাতেই সমর্থিত, Ruby-তে নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'super steps up the ancestor hierarchy to the next matching method definition.',
        bn: 'প্যারেন্ট ক্লাস বা মিক্সইনের মেথডকে ডেকে বাকি কাজ সম্পন্ন করার কি-ওয়ার্ড।'
      },
      explanation: {
        en: 'Calling "super" traverses the Class.ancestors chain upwards, executing the implementation in the next ancestor (whether that ancestor is a superclass or an included/prepended module).',
        bn: 'অ্যানসেস্টর চেইনে পরবর্তী ক্লাসে বা মডিউলে থাকা একই মেথডকে ডেকে কোড চালানোই super-এর কাজ।'
      }
    },
    {
      id: 'double-colon-scope-resolution-ex4',
      kind: 'mcq',
      topic: 'ruby-double-colon-scope-resolution-operator',
      question: {
        en: 'How do you reference a nested class "Worker" defined inside module "BackgroundJobs" in Ruby?',
        bn: 'Ruby-তে "BackgroundJobs" মডিউলের ভেতরে থাকা নেস্টেড ক্লাস "Worker"-কে কীভাবে নির্দেশ করা হয়?'
      },
      options: [
        {
          en: 'BackgroundJobs::Worker (using the scope resolution double-colon operator)',
          bn: 'BackgroundJobs::Worker (স্কোপ রেজোলিউশন ডাবল-কোলন অপারেটর ব্যবহার করে)'
        },
        {
          en: 'BackgroundJobs->Worker',
          bn: 'BackgroundJobs->Worker'
        },
        {
          en: 'BackgroundJobs#Worker',
          bn: 'BackgroundJobs#Worker'
        },
        {
          en: 'Modules cannot nest classes in modern Ruby',
          bn: 'আধুনিক Ruby-তে মডিউলের ভেতরে ক্লাস রাখা নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "::" scope resolution operator accesses constants and nested classes.',
        bn: 'মডিউল বা ক্লাসের ভেতরের কনস্ট্যান্ট অ্যাক্সেস করতে দুই কোলন "::" ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'In Ruby, classes and modules are stored as constants. The "::" operator is the scope resolution operator used to traverse nested constant hierarchies.',
        bn: 'Ruby-তে ক্লাস ও মডিউল মূলত কনস্ট্যান্ট। "::" দিয়ে এই নেস্টেড কনস্ট্যান্টগুলো অ্যাক্সেস করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-mixins-and-the-module',
    title: {
      en: 'Ruby Mixins & Ancestors Quiz',
      bn: 'Ruby মিক্সইন এবং অ্যানসেস্টর কুইজ'
    },
    questions: [
      {
        id: 'quiz-ancestors-introspection-array',
        kind: 'mcq',
        topic: 'ruby-class-ancestors-introspection',
        question: {
          en: 'What does evaluating "MyClass.ancestors" return in Ruby?',
          bn: 'Ruby-তে "MyClass.ancestors" রান করলে কী পাওয়া যায়?'
        },
        options: [
          {
            en: 'An ordered Array of classes and modules representing the exact linear lookup path Ruby searches when dispatching messages',
            bn: 'ক্লাস ও মডিউলের একটি ক্রমিক অ্যারে যা বার্তা পাঠানোর সময় Ruby যে ধারাবাহিক পথে মেথড খুঁজে বের করে তা হুবহু প্রদর্শন করে'
          },
          {
            en: 'A list of developers who committed code to the file',
            bn: 'যেসব ডেভেলপার ফাইলে কোড কমিট করেছেন তাদের একটি তালিকা'
          },
          {
            en: 'The total number of CPU clock cycles consumed',
            bn: 'ব্যবহৃত CPU ক্লক সাইকেলের মোট সংখ্যা'
          },
          {
            en: 'ancestors was deprecated in modern Ruby',
            bn: 'আধুনিক Ruby-তে ancestors বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'ancestors returns the method lookup chain of classes and modules.',
          bn: 'মেথড কোন ক্রমানুসারে খোঁজা হবে তার সম্পূর্ণ পারিবারিক তালিকা।'
        },
        explanation: {
          en: 'Class#ancestors exposes the exact method resolution order (MRO), showing prepended modules, the class itself, included modules, superclasses, Object, Kernel, and BasicObject.',
          bn: 'এর মাধ্যমে মেথড অনুসন্ধানের সঠিক ক্রম নিখুঁতভাবে পরিদর্শন ও ডিবাগ করা যায়।'
        }
      },
      {
        id: 'quiz-module-cannot-instantiate-new-check',
        kind: 'mcq',
        topic: 'ruby-module-cannot-instantiate-with-new',
        question: {
          en: 'What error occurs if an engineer attempts to execute "AuthenticationModule.new"?',
          bn: 'একজন ইঞ্জিনিয়ার যদি "AuthenticationModule.new" কল করার চেষ্টা করেন তবে কোন এররটি ঘটে?'
        },
        options: [
          {
            en: 'A "NoMethodError: undefined method \'new\' for AuthenticationModule:Module" is raised because modules lack the ".new" instantiation method',
            bn: 'একটি "NoMethodError: undefined method \'new\' for AuthenticationModule:Module" ঘটে কারণ মডিউলে কোনো ".new" মেথড থাকে না'
          },
          {
            en: 'The operating system reboots immediately',
            bn: 'অপারেটিং সিস্টেম সাথে সাথে রিবুট হয়'
          },
          {
            en: 'It returns a new empty Array instead',
            bn: 'এর বদলে এটি একটি নতুন ফাঁকা Array রিটার্ন করে'
          },
          {
            en: 'Modules have had .new support since Ruby 1.8',
            bn: 'Ruby ১.৮ সংস্করণ থেকেই মডিউলে .new সমর্থন রয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modules cannot be directly instantiated; they must be mixed into classes or used as namespaces.',
          bn: 'ক্লাস অবজেক্ট তৈরি করতে পারে, কিন্তু মডিউলের কোনো ইনস্ট্যান্স তৈরি করা যায় না।'
        },
        explanation: {
          en: 'The Class class defines ".new", but Module (its superclass) does not. Therefore, calling ".new" on any module raises a NoMethodError.',
          bn: 'Class ক্লাসে .new থাকে কিন্তু Module-এ থাকে না, তাই মডিউলে .new কল করলে NoMethodError ঘটে।'
        }
      },
      {
        id: 'quiz-module-function-visibility-dual',
        kind: 'mcq',
        topic: 'ruby-module-function-dual-visibility',
        question: {
          en: 'What dual capability does declaring "module_function :calculate_discount" provide in a Ruby module?',
          bn: 'একটি Ruby মডিউলে "module_function :calculate_discount" ঘোষণা করলে কোন দ্বিমুখী সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It makes the method callable directly on the module (DiscountHelper.calculate_discount) while also making it available as a private instance method when the module is included',
            bn: 'এটি মেথডটিকে সরাসরি মডিউলে কল করার সুযোগ দেয় (DiscountHelper.calculate_discount) এবং মডিউলটি include করা হলে প্রাইভেট ইনস্ট্যান্স মেথড হিসেবেও ব্যবহারযোগ্য করে'
          },
          {
            en: 'It publishes the method to an external REST API endpoint',
            bn: 'এটি মেথডটিকে একটি বহিরাগত REST API এন্ডপয়েন্টে প্রকাশ করে'
          },
          {
            en: 'It runs the method inside an isolated Docker container',
            bn: 'এটি মেথডটিকে একটি বিচ্ছিন্ন ডকার কন্টেইনারে চালায়'
          },
          {
            en: 'module_function was removed in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে module_function বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'module_function creates both a module-level function and a private mixin method.',
          bn: 'মডিউলের নাম দিয়েও ডাকা যায়, আবার ক্লাসের ভেতরে include করেও ব্যবহার করা যায়।'
        },
        explanation: {
          en: '"module_function" is standard for utilities (like Math.sqrt): it allows functions to be called statically or mixed in privately to host classes.',
          bn: 'ম্যাথ লাইব্রেরির মতো ইউটিলিটি তৈরিতে এটি Ruby-র চমৎকার একটি বিল্ট-ইন কৌশল।'
        }
      },
      {
        id: 'quiz-refinements-lexical-scoping-check',
        kind: 'mcq',
        topic: 'ruby-refinements-lexically-scoped-patches',
        question: {
          en: 'How do Ruby "Refinements" solve the hazards of global monkey patching (modifying core classes like String)?',
          bn: 'Ruby "Refinements" কীভাবে গ্লোবাল মাঙ্কি প্যাচিংয়ের (যেমন String ক্লাসে পরিবর্তন) মারাত্মক ঝুঁকি দূর করে?'
        },
        options: [
          {
            en: 'They restrict modifications strictly to the lexical file or class scope that explicitly activates them via "using", preventing unintended global side-effects across the app',
            bn: 'তারা ক্লাসের পরিবর্তনগুলোকে কঠোরভাবে নির্দিষ্ট ফাইল বা স্কোপে সীমাবদ্ধ রাখে যা "using" দিয়ে সক্রিয় করা হয়, ফলে অ্যাপের বাকি অংশে কোনো অনাকাঙ্ক্ষিত পার্শ্বপ্রতিক্রিয়া ঘটে না'
          },
          {
            en: 'They prevent all strings from exceeding 100 characters in length',
            bn: 'তারা সমস্ত স্ট্রিংকে ১০০ অক্ষরের বেশি লম্বা হতে বাধা দেয়'
          },
          {
            en: 'They convert Ruby scripts into compiled Java bytecodes',
            bn: 'তারা Ruby স্ক্রিপ্টগুলোকে কম্পাইল্ড জাভা বাইটকোডে রূপান্তর করে'
          },
          {
            en: 'Refinements were banned in modern Ruby programming',
            bn: 'আধুনিক Ruby প্রোগ্রামিংয়ে Refinements সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Refinements scope monkey patches lexically using the "using" keyword.',
          bn: 'পুরো অ্যাপ বদলে না ফেলে শুধু নিজের ফাইলে নিরাপদ পরিবর্তন ব্যবহারের আধুনিক উপায়।'
        },
        explanation: {
          en: 'Introduced in Ruby 2.0, Refinements make class extensions lexically scoped to the file where "using RefinementName" is invoked, guaranteeing zero cross-gem collisions.',
          bn: 'ফলে অন্যান্য লাইব্রেরি বা জেমের সাথে কোনো মেথড সংঘর্ষের ঝুঁকি থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'bundles-and-the-gem',
    title: {
      en: 'Gems, Bundler, Gemfile & Isolated Runtime Environments',
      bn: 'জেমস, Bundler, Gemfile এবং আইসোলেটেড রানটাইম পরিবেশ'
    }
  }
};
