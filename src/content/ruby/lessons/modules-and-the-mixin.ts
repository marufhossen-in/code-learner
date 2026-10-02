import type { Lesson } from '../../../lib/types';

export const ModulesAndTheMixinLesson: Lesson = {
  slug: 'modules-and-the-mixin',
  tech: 'ruby',
  title: {
    en: 'Modules, Mixins, Namespaces & the Method Lookup Chain',
    bn: 'মডিউল, মিক্সইন, নেমস্পেস এবং মেথড লুকআপ চেইন'
  },
  summary: {
    en: 'Master module composition and multi-inheritance alternatives in Ruby. Discover how modules organize constants into clean namespaces, inject reusable behaviors via "include" and "prepend", transform instance methods into class methods using "extend", and trace dynamic method resolution through the linear ancestors hierarchy.',
    bn: 'Ruby-তে মডিউল কম্পোজিশন এবং মাল্টিপল ইনহেরিট্যান্সের বিকল্প কৌশল সম্পূর্ণ আয়ত্ত করুন। মডিউল কীভাবে নেমস্পেসিং তৈরি করে, "include" এবং "prepend" দিয়ে ক্লাসে পুনঃব্যবহারযোগ্য মেথড যুক্ত করে, "extend" দিয়ে ক্লাস মেথড তৈরি করে এবং রৈখিক অ্যানসেস্টর চেইনে মেথড খুঁজে পায় তা জানুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'modules-and-namespacing-heading',
      text: {
        en: 'Modules for Organization: Isolation and Namespaces',
        bn: 'সংগঠনের জন্য মডিউল: আইসোলেশন এবং নেমস্পেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large production codebases require structured boundaries to prevent global naming collisions across domain entities. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), developers organize code using "module". Unlike classes, modules cannot be instantiated with ".new" and cannot hold instance state directly. Instead, modules fulfill 2 essential software architectural roles: namespacing and behavior sharing. By nesting classes and constants inside modules ("Billing::Invoice"), teams construct clear domain boundaries while shielding the global namespace from pollution.',
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
    <text x="18" y="65" fill="#f472b6" font-size="10" font-family="monospace">def save</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">log("Saving...")</text>
    <text x="25" y="98" fill="#fbbf24" font-size="9" font-family="monospace">super # calls host</text>

    <rect x="10" y="130" width="150" height="85" rx="5" fill="#db2777" fill-opacity="0.15" stroke="#ec4899" />
    <text x="18" y="152" fill="#f472b6" font-size="9" font-family="sans-serif" font-weight="bold">First in Chain:</text>
    <text x="18" y="170" fill="#f8fafc" font-size="8" font-family="sans-serif">Intercepts method calls</text>
    <text x="18" y="186" fill="#f8fafc" font-size="8" font-family="sans-serif">before the class runs</text>
  </g>

  <!-- Arrow 1 -->
  <path d="M 205 182 L 230 182" stroke="#cbd5e1" stroke-width="2" marker-end="url(#arrow)" />

  <!-- Step 2: Host Class -->
  <g transform="translate(235, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. class Order</text>

    <rect x="10" y="45" width="150" height="70" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="18" y="65" fill="#38bdf8" font-size="10" font-family="monospace">def save</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">write_to_database</text>
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
    <text x="18" y="65" fill="#34d399" font-size="10" font-family="monospace">def save</text>
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
      id: 'mixins-include-prepend-extend-heading',
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
const orderClass = new RubyClassSimulator('Order');

// 1. Defining mixin modules
const AuditableModule: ModuleBehavior = {
  name: 'Auditable',
  methods: {
    auditLog: () => 'Audit recorded in secure database'
  }
};

const ValidationInterceptor: ModuleBehavior = {
  name: 'ValidationInterceptor',
  methods: {
    process: (amount: number) => 'Pre-validated charge for ' + amount + ' dollars'
  }
};

// 2. Applying include and prepend
orderClass.include(AuditableModule);
orderClass.prepend(ValidationInterceptor);

console.log('--- 1. Ruby Ancestors Resolution Order ---');
console.log('Resolved Ancestors Chain:', orderClass.ancestors);
// ['ValidationInterceptor', 'Order', 'Auditable', 'Object', 'Kernel', 'BasicObject']

console.log('\n--- 2. Dispatching Methods Through Mixins ---');
const auditOutput = orderClass.dispatch('auditLog');
console.log('Dispatch auditLog (via included Auditable):', auditOutput);

const validationOutput = orderClass.dispatch('process', 100);
console.log('Dispatch process (via prepended ValidationInterceptor):', validationOutput);`
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
      id: 'include-vs-prepend-lookup-order-ex1',
      kind: 'mcq',
      topic: 'ruby-include-vs-prepend-ancestor-chain',
      question: {
        en: 'If a class "Order" defines a method "save" and also uses "prepend Logging", whose "save" method executes first when "order.save" is called?',
        bn: 'যদি একটি "Order" ক্লাসে নিজস্ব "save" মেথড থাকে এবং সাথে "prepend Logging" ব্যবহার করা হয়, তবে "order.save" কল করলে কার "save" মেথডটি প্রথমে চলবে?'
      },
      options: [
        {
          en: 'The "Logging" module\'s save method executes first because "prepend" inserts the module ahead of the host class in the ancestor lookup chain',
          bn: '"Logging" মডিউলের save মেথডটি প্রথমে চলবে কারণ "prepend" নির্দেশিকাটি মডিউলটিকে মূল ক্লাসের ঠিক আগে অ্যানসেস্টর চেইনে স্থান দেয়'
        },
        {
          en: 'The Order class save method always runs first regardless of prepend',
          bn: 'prepend যাই থাকুক না কেন Order ক্লাসের save মেথডই সর্বদা আগে চলবে'
        },
        {
          en: 'It causes a fatal syntax compiler crash due to method collision',
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
        bn: 'এর মাধ্যমে মূল ক্লাসের কোড পরিবর্তন না করেই মেথড ইন্টারসেপ্ট করে লগিং বা অথেন্টিকেশন যোগ করা যায়।'
      }
    },
    {
      id: 'extend-directive-class-methods-ex2',
      kind: 'mcq',
      topic: 'ruby-extend-singleton-class-methods',
      question: {
        en: 'What effect does calling "extend HelperModule" inside a class definition have on the methods inside HelperModule?',
        bn: 'একটি ক্লাস ডিফিনিশনের ভেতরে "extend HelperModule" লিখলে HelperModule-এর মেথডগুলোর ওপর কী প্রভাব পড়ে?'
      },
      options: [
        {
          en: 'The methods are mixed into the class\'s singleton class, making them callable directly as class methods (e.g. "MyClass.helper_method")',
          bn: 'মেথডগুলো ক্লাসের সিঙ্গেলটন ক্লাসে যুক্ত হয়, ফলে সেগুলোকে সরাসরি ক্লাস মেথড হিসেবে কল করা যায় (যেমন "MyClass.helper_method")'
        },
        {
          en: 'It permanently disables all instance methods in the class',
          bn: 'এটি ক্লাসের সমস্ত ইনস্ট্যান্স মেথডকে স্থায়ীভাবে বন্ধ করে দেয়'
        },
        {
          en: 'It converts the class into an abstract C++ template',
          bn: 'এটি ক্লাসটিকে একটি অ্যাবস্ট্রাক্ট C++ টেমপ্লেটে রূপান্তর করে'
        },
        {
          en: 'extend can only be used with files on the local hard disk',
          bn: 'extend কেবল লোকাল হার্ডডিস্কের ফাইলের সাথেই ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'extend mixes methods into the singleton class of the receiver, creating class methods.',
        bn: 'ইনস্ট্যান্স না বানিয়েই ক্লাসের নাম দিয়ে সরাসরি মেথড চালানোর সুবিধা তৈরি করে extend।'
      },
      explanation: {
        en: 'While "include" adds instance methods, "extend" adds methods to the receiver\'s singleton class. When called in a class body, it turns module methods into class-level methods.',
        bn: 'include যেখানে অবজেক্টের মেথড বানায়, extend সেখানে সরাসরি ক্লাসের মেথড বানিয়ে দেয়।'
      }
    },
    {
      id: 'super-keyword-ancestor-chain-ex3',
      kind: 'mcq',
      topic: 'ruby-super-keyword-method-lookup',
      question: {
        en: 'What does the "super" keyword do when invoked inside an overridden method in Ruby?',
        bn: 'Ruby-তে একটি ওভাররিডেন মেথডের ভেতরে "super" কি-ওয়ার্ডটি ব্যবহার করলে কী ঘটে?'
      },
      options: [
        {
          en: 'It forwards execution up to the next method of the same name in the linear ancestor lookup chain (Class.ancestors)',
          bn: 'এটি রৈখিক অ্যানসেস্টর চেইনে (Class.ancestors) পরবর্তী একই নামের মেথডের কাছে কোড এক্সিকিউশন স্থানান্তর করে'
        },
        {
          en: 'It grants root superuser administrative privileges to the terminal',
          bn: 'এটি টার্মিনালকে রুট অ্যাডমিনিস্ট্রেটর প্রিভিলেজ প্রদান করে'
        },
        {
          en: 'It restarts the Ruby runtime environment from scratch',
          bn: 'এটি Ruby রানটাইমকে সম্পূর্ণ নতুন করে রিস্টার্ট করে'
        },
        {
          en: 'super is only valid in Java, not Ruby',
          bn: 'super কেবল জাভাতেই বৈধ, Ruby-তে নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'super steps up the ancestor hierarchy to the next matching method definition.',
        bn: 'বাবার মেথড বা মিক্সইনের মেথডকে চালিয়ে বাকি কাজ করার শক্তিশালী কি-ওয়ার্ড।'
      },
      explanation: {
        en: 'Calling "super" traverses the Class.ancestors chain upwards, executing the implementation in the next ancestor (whether that ancestor is a superclass or an included/prepended module).',
        bn: 'অ্যানসেস্টর চেইনে পরবর্তী ক্লাসে বা মডিউলে থাকা একই মেথডকে ডেকে কোড চালানোই super-এর কাজ।'
      }
    },
    {
      id: 'namespacing-double-colon-operator-ex4',
      kind: 'mcq',
      topic: 'ruby-module-namespacing-resolution-operator',
      question: {
        en: 'How do you access a nested class "Gateway" declared inside a module "Payments" in Ruby?',
        bn: 'Ruby-তে "Payments" মডিউলের ভেতরে থাকা নেস্টেড ক্লাস "Gateway"-কে কীভাবে অ্যাক্সেস করা হয়?'
      },
      options: [
        {
          en: 'Payments::Gateway (using the scope resolution double-colon operator)',
          bn: 'Payments::Gateway (স্কোপ রেজোলিউশন ডাবল-কোলন অপারেটর ব্যবহার করে)'
        },
        {
          en: 'Payments->Gateway (arrow syntax)',
          bn: 'Payments->Gateway (অ্যারো সিনট্যাক্স দিয়ে)'
        },
        {
          en: 'Payments#Gateway (hash syntax)',
          bn: 'Payments#Gateway (হ্যাশ সিনট্যাক্স দিয়ে)'
        },
        {
          en: 'Modules do not allow nesting classes in modern Ruby',
          bn: 'আধুনিক Ruby-তে মডিউলের ভেতরে ক্লাস নেস্ট করা নিষিদ্ধ'
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
    id: 'quiz-modules-and-the-mixin',
    title: {
      en: 'Ruby Modules & Ancestors Quiz',
      bn: 'Ruby মডিউল এবং অ্যানসেস্টর কুইজ'
    },
    questions: [
      {
        id: 'quiz-active-support-concern-pattern',
        kind: 'mcq',
        topic: 'active-support-concern-included-blocks',
        question: {
          en: 'Why did the Rails community create "ActiveSupport::Concern" for managing module dependencies instead of bare Ruby includes?',
          bn: 'সাধারণ Ruby include-এর বদলে মডিউল ডিপেন্ডেন্সি পরিচালনার জন্য Rails কমিউনিটি কেন "ActiveSupport::Concern" তৈরি করেছিল?'
        },
        options: [
          {
            en: 'It elegantly solves circular module dependency resolution and provides declarative "included" and "class_methods" blocks that cleanly configure both instance and class scopes simultaneously',
            bn: 'এটি জটিল মডিউল ডিপেন্ডেন্সির সমাধান করে এবং ডিক্লেয়ারেটিভ "included" ও "class_methods" ব্লকের মাধ্যমে ইনস্ট্যান্স ও ক্লাস স্কোপ উভয়ই একসাথে সাজাতে দেয়'
          },
          {
            en: 'It forces all Ruby files to compile into WebAssembly',
            bn: 'এটি সমস্ত Ruby ফাইলকে ওয়েবঅ্যাসেম্বলিতে কম্পাইল হতে বাধ্য করে'
          },
          {
            en: 'It deletes 50 percent of the codebase to make it lighter',
            bn: 'অ্যাপ হালকা করতে এটি কোডবেসের ৫০ শতাংশ ডিলিট করে দেয়'
          },
          {
            en: 'ActiveSupport::Concern was banned in Rails 7',
            bn: 'Rails ৭ সংস্করণে ActiveSupport::Concern নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'ActiveSupport::Concern streamlines mixins requiring both instance and class methods.',
          bn: 'একই মডিউলে ইনস্ট্যান্স মেথড ও ক্লাস মেথড একসাথে সহজে যোগ করার জনপ্রিয় Rails প্যাটার্ন।'
        },
        explanation: {
          en: 'ActiveSupport::Concern simplifies creating mixins that need to inject both instance methods and class methods while managing dependency chains cleanly across modules.',
          bn: 'এর মাধ্যমে জটিল মডিউল হায়ারার্কি তৈরি করা অত্যন্ত সহজ ও পরিচ্ছন্ন হয়।'
        }
      },
      {
        id: 'quiz-module-cannot-instantiate-new',
        kind: 'mcq',
        topic: 'module-cannot-instantiate-with-new',
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
        id: 'quiz-module-function-visibility',
        kind: 'mcq',
        topic: 'ruby-module-function-visibility-dual-mode',
        question: {
          en: 'What dual capability does declaring "module_function :calculate_tax" provide in a Ruby module?',
          bn: 'একটি Ruby মডিউলে "module_function :calculate_tax" ঘোষণা করলে কোন দ্বিমুখী সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It makes the method callable directly on the module (TaxHelper.calculate_tax) while also making it available as a private instance method when the module is included',
            bn: 'এটি মেথডটিকে সরাসরি মডিউলে কল করার সুযোগ দেয় (TaxHelper.calculate_tax) এবং মডিউলটি include করা হলে প্রাইভেট ইনস্ট্যান্স মেথড হিসেবেও ব্যবহারযোগ্য করে'
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
        id: 'quiz-refinements-lexical-scoping',
        kind: 'mcq',
        topic: 'ruby-refinements-lexically-scoped-monkey-patching',
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
    slug: 'strings-and-the-symbol',
    title: {
      en: 'Strings vs Symbols, Memory Interning & UTF-8 Encoding',
      bn: 'স্ট্রিং বনাম সিম্বল, মেমোরি ইন্টার্নিং এবং UTF-8 এনকোডিং'
    }
  }
};
