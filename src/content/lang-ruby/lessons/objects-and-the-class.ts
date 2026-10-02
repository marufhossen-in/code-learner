import type { Lesson } from '../../../lib/types';

export const ObjectsAndTheClassLesson: Lesson = {
  slug: 'objects-and-the-class',
  tech: 'lang-ruby',
  title: {
    en: 'Objects, Classes, State Encapsulation & Method Dispatch',
    bn: 'অবজেক্ট, ক্লাস, স্টেট এনক্যাপসুলেশন এবং মেথড ডিসপ্যাচ'
  },
  summary: {
    en: 'Master object construction and class architecture in the Ruby language. Understand constructor instantiation with "initialize", enforce data privacy using encapsulated instance variables (@state), eliminate repetitive boilerplate via "attr_accessor" macros, navigate receiver execution context with "self", and understand class-level singleton methods.',
    bn: 'Ruby ভাষায় অবজেক্ট তৈরি এবং ক্লাস আর্কিটেকচার সম্পূর্ণ আয়ত্ত করুন। "initialize" দিয়ে কনস্ট্রাক্টর তৈরি, এনক্যাপসুলেটেড ইনস্ট্যান্স ভ্যারিয়েবল (@state) দিয়ে ডেটার সুরক্ষা, "attr_accessor" ম্যাক্রো দিয়ে গেটার ও সেটার তৈরি, "self" দিয়ে এক্সিকিউশন কনটেক্সট নিয়ন্ত্রণ এবং ক্লাস-লেভেল সিঙ্গেলটন মেথডের গভীর ব্যবহার শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'classes-and-initialize-heading',
      text: {
        en: 'Class Blueprints, Constructors, and Instance State',
        bn: 'ক্লাস ব্লুপ্রিন্ট, কনস্ট্রাক্টর এবং ইনস্ট্যান্স স্টেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Structuring software into modular, encapsulated units is the essence of object-oriented architecture. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), classes serve as blueprints for instantiating objects. Invoking ".new" on a class allocates heap memory and automatically invokes the internal constructor method named "initialize". All data inside an object is encapsulated within instance variables prefixed with an at-sign ("@balance"). Outside callers cannot access instance variables directly, guaranteeing strict boundary protection around internal object state.',
        bn: 'সফটওয়্যারকে মডুলার ও সুরক্ষিত ইউনিটে সাজানো অবজেক্ট-ওরিয়েন্টেড আর্কিটেকচারের মূল লক্ষ্য। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে ক্লাস মূলত অবজেক্ট তৈরির ব্লুপ্রিন্ট বা নকশা হিসেবে কাজ করে। ক্লাসের ওপর ".new" মেথড কল করলে মেমরিতে জায়গা বরাদ্দ হয় এবং স্বয়ংক্রিয়ভাবে "initialize" নামের কনস্ট্রাক্টর মেথডটি কার্যকর হয়। অবজেক্টের অভ্যন্তরীণ সমস্ত ডেটা @ চিহ্নযুক্ত ইনস্ট্যান্স ভ্যারিয়েবলে ("@balance") সুরক্ষিত থাকে। বাইরের কোনো কলার সরাসরি এই ভ্যারিয়েবলগুলো দেখতে বা পরিবর্তন করতে পারে না, যা অবজেক্টের ভেতরের ডেটাকে সম্পূর্ণ নিরাপদ রাখে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby object model: instance memory storing instance variables (@) pointing to the class method table and singleton class.',
        bn: 'চিত্র ১: Ruby অবজেক্ট মডেল: মেমরিতে ইনস্ট্যান্স ভ্যারিয়েবল (@) ধারণকারী অবজেক্ট যা ক্লাসের মেথড টেবিল ও সিঙ্গেলটন ক্লাসকে নির্দেশ করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY CLASS INSTANCE &amp; METHOD DISPATCH MODEL</text>

  <!-- Left: Instance -->
  <g transform="translate(35, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Instance: user_account</text>

    <rect x="15" y="45" width="200" height="65" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="68" fill="#38bdf8" font-size="10" font-family="monospace">@id = 42</text>
    <text x="25" y="86" fill="#38bdf8" font-size="10" font-family="monospace">@balance = 150</text>
    <text x="25" y="102" fill="#cbd5e1" font-size="8" font-family="sans-serif">Private instance variables</text>

    <rect x="15" y="125" width="200" height="85" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="148" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Klass Reference:</text>
    <text x="25" y="168" fill="#cbd5e1" font-size="9" font-family="sans-serif">Points to class Account</text>
    <text x="25" y="188" fill="#fbbf24" font-size="9" font-family="monospace">user_account.class</text>
  </g>

  <!-- Middle: Class Account -->
  <g transform="translate(305, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#d97706" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Class: Account</text>

    <rect x="15" y="45" width="210" height="110" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Instance Methods Table:</text>
    <text x="25" y="88" fill="#38bdf8" font-size="9" font-family="monospace">• initialize(id, bal)</text>
    <text x="25" y="106" fill="#38bdf8" font-size="9" font-family="monospace">• balance (attr_reader)</text>
    <text x="25" y="124" fill="#38bdf8" font-size="9" font-family="monospace">• deposit(amt)</text>
    <text x="25" y="142" fill="#38bdf8" font-size="9" font-family="monospace">• withdraw(amt)</text>

    <rect x="15" y="165" width="210" height="55" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="185" fill="#fbbf24" font-size="9" font-family="sans-serif" font-weight="bold">Superclass Pointer:</text>
    <text x="25" y="202" fill="#f8fafc" font-size="8" font-family="monospace">Account.superclass #=&gt; Object</text>
  </g>

  <!-- Right: Singleton Class -->
  <g transform="translate(580, 65)">
    <rect width="225" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="225" height="30" rx="8" fill="#7c3aed" />
    <text x="112" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Singleton Class (Eigenclass)</text>

    <rect x="15" y="45" width="195" height="95" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="68" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">Class Methods (def self.):</text>
    <text x="25" y="90" fill="#34d399" font-size="9" font-family="monospace">• def self.find(id)</text>
    <text x="25" y="110" fill="#34d399" font-size="9" font-family="monospace">• def self.create(attrs)</text>
    <text x="25" y="128" fill="#cbd5e1" font-size="8" font-family="sans-serif">Stored on Account's metaclass</text>

    <rect x="15" y="150" width="195" height="70" rx="5" fill="#7c3aed" fill-opacity="0.15" stroke="#a855f7" />
    <text x="25" y="172" fill="#c084fc" font-size="9" font-family="sans-serif" font-weight="bold">Evaluation of self:</text>
    <text x="25" y="190" fill="#f8fafc" font-size="8" font-family="sans-serif">Inside class body: Account</text>
    <text x="25" y="205" fill="#f8fafc" font-size="8" font-family="sans-serif">Inside method: caller instance</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'accessor-macros-and-self-context-heading',
      text: {
        en: 'Accessor Macros and the self Execution Context',
        bn: 'অ্যাক্সেসর ম্যাক্রো এবং self এক্সিকিউশন কনটেক্সট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing manual getter and setter routines for every encapsulated field introduces significant boilerplate. Ruby provides 3 meta-programming macros to synthesize accessor methods: "attr_reader" creates a getter, "attr_writer" creates a setter, and "attr_accessor" generates both. The keyword "self" represents the active receiver object. In the root of a class body, "self" refers to the Class object itself, allowing class-level methods to be defined via "def self.lookup". Inside an instance method, "self" refers to the specific object instance executing the method, enabling explicit message delegation.',
        bn: 'প্রতিটি প্রাইভেট ফিল্ডের জন্য ম্যানুয়ালি গেটার ও সেটার মেথড লেখা কোডের অপ্রয়োজনীয় পুনরাবৃত্তি বাড়ায়। Ruby এই সমস্যা সমাধানে ৩ টি চমৎকার মেটাপ্রোগ্রামিং ম্যাক্রো প্রদান করে: "attr_reader" গেটার তৈরি করে, "attr_writer" সেটার তৈরি করে এবং "attr_accessor" একসাথে উভয়টি তৈরি করে। "self" কি-ওয়ার্ডটি বর্তমান কার্যকর রিসিভার অবজেক্টকে নির্দেশ করে। ক্লাসের মূল বডিতে "self" স্বয়ং Class অবজেক্টটিকে নির্দেশ করে, যা "def self.lookup" লিখে ক্লাস মেথড বানানোর সুযোগ দেয়। অন্যদিকে ইনস্ট্যান্স মেথডের ভেতরে "self" মেথডটি চালানো নির্দিষ্ট অবজেক্টটিকে নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby class instantiation, instance variable encapsulation, and attr_accessor synthesis.',
        bn: 'Ruby ক্লাস ইনস্ট্যান্সিয়েশন, ইনস্ট্যান্স ভ্যারিয়েবল এনক্যাপসুলেশন এবং attr_accessor তৈরির TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Class Construction, Encapsulated State, and Accessor Macros

export class RubyClassEntity {
  public className: string;
  private classMethods: Map<string, Function> = new Map();

  constructor(name: string) {
    this.className = name;
  }

  // Register class method (def self.method_name)
  public defineClassMethod(name: string, fn: Function): void {
    this.classMethods.set(name, fn);
  }

  public invokeClassMethod(name: string, ...args: any[]): any {
    const fn = this.classMethods.get(name);
    if (!fn) throw new Error("NoMethodError: undefined method '" + name + "' for " + this.className + ":Class");
    return fn(...args);
  }
}

// Simulates an instantiated Ruby object instance
export class SimulatedRubyInstance {
  public klass: RubyClassEntity;
  private instanceVariables: Map<string, any> = new Map();

  constructor(klass: RubyClassEntity, id: number, initialBalance: number) {
    this.klass = klass;
    // initialize constructor setting @id and @balance
    this.instanceVariables.set('@id', id);
    this.instanceVariables.set('@balance', initialBalance);
  }

  // Simulates attr_reader :balance
  public get balance(): number {
    return this.instanceVariables.get('@balance');
  }

  // Simulates attr_writer :balance
  public set balance(val: number) {
    this.instanceVariables.set('@balance', val);
  }

  // Simulates def deposit(amount); @balance += amount; end
  public deposit(amount: number): number {
    const current = this.instanceVariables.get('@balance') || 0;
    const updated = current + amount;
    this.instanceVariables.set('@balance', updated);
    return updated;
  }
}

// Execution Demonstration
console.log('--- 1. Testing Ruby Class Methods (def self.create) ---');
const accountClass = new RubyClassEntity('Account');
accountClass.defineClassMethod('minimumBalanceRequirement', () => 50);

const minBal = accountClass.invokeClassMethod('minimumBalanceRequirement');
console.log('Account.minimumBalanceRequirement:', minBal); // 50

console.log('\n--- 2. Testing Instance State and Accessor Macros ---');
const userAcc = new SimulatedRubyInstance(accountClass, 42, 100);
console.log('Initial Balance via attr_reader:', userAcc.balance); // 100

// Calling deposit method
const updatedBal = userAcc.deposit(50);
console.log('Balance After deposit(50):', updatedBal); // 150

// Modifying state via attr_writer
userAcc.balance = 200;
console.log('New Balance via attr_writer:', userAcc.balance); // 200`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Classes & initialize',
          def: {
            en: 'Object factory pattern where .new triggers the internal initialize constructor method.',
            bn: 'অবজেক্ট তৈরির ব্লুপ্রিন্ট যেখানে .new কল করলে স্বয়ংক্রিয়ভাবে initialize মেথড কার্যকর হয়।'
          }
        },
        {
          term: 'Instance Variables (@)',
          def: {
            en: 'State variables prefixed with @ encapsulated privately within the receiver object.',
            bn: '@ চিহ্নযুক্ত ভ্যারিয়েবল যা কেবল ওই নির্দিষ্ট অবজেক্টের মেথডের ভেতর থেকেই অ্যাক্সেসযোগ্য।'
          }
        },
        {
          term: 'attr_accessor',
          def: {
            en: 'Macro synthesizing getter and setter methods for underlying instance variables.',
            bn: 'মেটাপ্রোগ্রামিং ম্যাক্রো যা ইনস্ট্যান্স ভ্যারিয়েবলের জন্য গেটার ও সেটার মেথড তৈরি করে দেয়।'
          }
        },
        {
          term: 'Singleton Class & self',
          def: {
            en: 'Hidden metaclass storing singleton methods defined directly on an individual object or Class.',
            bn: 'লুকানো মেটাক্লাস যেখানে কোনো নির্দিষ্ট অবজেক্ট বা ক্লাসের নিজস্ব একক মেথডগুলো সংরক্ষিত থাকে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'instance-variables-private-by-default-ex1',
      kind: 'mcq',
      topic: 'ruby-instance-variable-privacy-encapsulation',
      question: {
        en: 'Why does calling "user.@email" result in a syntax error in Ruby?',
        bn: 'Ruby-তে "user.@email" লিখলে কেন সিনট্যাক্স এরর ঘটে?'
      },
      options: [
        {
          en: 'Instance variables prefixed with "@" are strictly encapsulated and cannot be read directly from the outside without getter methods',
          bn: '@ যুক্ত ইনস্ট্যান্স ভ্যারিয়েবলগুলো কঠোরভাবে এনক্যাপসুলেটেড এবং গেটার মেথড ছাড়া বাইরে থেকে সরাসরি পড়া সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'Because emails cannot be saved in Ruby memory',
          bn: 'কারণ Ruby মেমরিতে কোনো ইমেইল সংরক্ষণ করা যায় না'
        },
        {
          en: 'It causes the hard drive to format automatically',
          bn: 'এটি হার্ডড্রাইভ স্বয়ংক্রিয়ভাবে ফরম্যাট করে দেয়'
        },
        {
          en: 'The at-sign syntax was removed in Ruby 2.0',
          bn: 'Ruby ২.০ সংস্করণে @ সিনট্যাক্স বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ruby enforces strict object encapsulation: outside code must call methods, not inspect variables directly.',
        bn: 'অবজেক্টের ব্যক্তিগত ডেটা মেথড ছাড়া বাইরে প্রকাশ করা যায় না।'
      },
      explanation: {
        en: 'In Ruby, there is no syntax to access an instance variable directly from outside an object. You must define an "attr_reader" or explicit getter method to read it.',
        bn: 'ডেটা এনক্যাপসুলেশন নিশ্চিত করতে Ruby-তে সরাসরি ভ্যারিয়েবল অ্যাক্সেস বন্ধ রেখে মেথড ব্যবহারের নিয়ম বাধ্যতামূলক করা হয়েছে।'
      }
    },
    {
      id: 'initialize-constructor-invocation-ex2',
      kind: 'mcq',
      topic: 'ruby-initialize-private-constructor',
      question: {
        en: 'How does Ruby trigger the "initialize" method when an object is constructed?',
        bn: 'অবজেক্ট তৈরি করার সময় Ruby কীভাবে "initialize" মেথডটি কার্যকর করে?'
      },
      options: [
        {
          en: 'Calling "ClassName.new(*args)" allocates memory internally and immediately delegates all arguments to the private "initialize" hook',
          bn: '"ClassName.new(*args)" কল করলে মেমোরি বরাদ্দ হয় এবং সাথে সাথে সমস্ত আর্গুমেন্ট প্রাইভেট "initialize" হুকে পাঠিয়ে দেওয়া হয়'
        },
        {
          en: 'The developer must call User.initialize manually after new finishes',
          bn: 'ডেভেলপারকে new শেষ হওয়ার পর ম্যানুয়ালি User.initialize কল করতে হয়'
        },
        {
          en: 'initialize is invoked by an external cron job every hour',
          bn: 'প্রতি ঘণ্টায় একটি বহিরাগত ক্রন জব দিয়ে initialize চালানো হয়'
        },
        {
          en: 'initialize is only supported in C++, not Ruby',
          bn: 'initialize কেবল C++ এ সমর্থিত, Ruby-তে নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ClassName.new automatically triggers the initialize method with the passed arguments.',
        bn: '.new মেথডই অবজেক্টের কনস্ট্রাক্টরকে ডেকে প্রাথমিক মান সেট করে দেয়।'
      },
      explanation: {
        en: 'The Class#new method allocates an uninitialized instance and invokes "initialize" on it. By default, "initialize" is a private method.',
        bn: 'ক্লাস মেথড .new মেমোরি তৈরি করে ভেতরের প্রাইভেট initialize মেথডটিকে স্বয়ংক্রিয়ভাবে চালায়।'
      }
    },
    {
      id: 'class-methods-def-self-ex3',
      kind: 'mcq',
      topic: 'ruby-class-methods-def-self-singleton',
      question: {
        en: 'In Ruby, what does declaring "def self.find_by_id(id); ... end" inside a class accomplish?',
        bn: 'একটি Ruby ক্লাসের ভেতরে "def self.find_by_id(id); ... end" লিখলে কী কাজ সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'It defines a class method on the Class object itself (e.g. User.find_by_id(42)), stored in the class\'s singleton class',
          bn: 'এটি সরাসরি Class অবজেক্টের ওপর একটি ক্লাস মেথড তৈরি করে (যেমন User.find_by_id(42)), যা ক্লাসের সিঙ্গেলটন ক্লাসে জমা থাকে'
        },
        {
          en: 'It creates a method that runs in background daemon threads',
          bn: 'এটি একটি মেথড বানায় যা ব্যাকগ্রাউন্ড ডেমন থ্রেডে চলে'
        },
        {
          en: 'It reboots the application server whenever called',
          bn: 'কল করলেই এটি অ্যাপ্লিকেশন সার্ভার রিবুট করে'
        },
        {
          en: 'Class methods were banned in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে ক্লাস মেথড নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'def self.method defines a method on the class itself, not its instances.',
        bn: 'অবজেক্ট না বানিয়েই সরাসরি ক্লাসের নাম দিয়ে মেথড ডাকার কৌশল।'
      },
      explanation: {
        en: 'Because classes in Ruby are objects, defining a method on "self" inside a class definition adds a singleton method to that class object.',
        bn: 'যেহেতু ক্লাস নিজেও একটি অবজেক্ট, তাই self-এর ওপর মেথড বসালে তা ক্লাস মেথড হিসেবে কাজ করে।'
      }
    },
    {
      id: 'attr-writer-assignment-syntax-ex4',
      kind: 'mcq',
      topic: 'ruby-attr-writer-synthesized-setter',
      question: {
        en: 'What exact method name does "attr_writer :status" synthesize under the hood in Ruby?',
        bn: 'Ruby-তে "attr_writer :status" লিখলে অভ্যন্তরীণভাবে সুনির্দিষ্ট কোন মেথডটি তৈরি হয়?'
      },
      options: [
        {
          en: '"status=" (allowing idiomatic assignment syntax like "order.status = :completed")',
          bn: '"status=" (যা "order.status = :completed"-এর মতো সুন্দর অ্যাসাইনমেন্ট সিনট্যাক্স সমর্থন করে)'
        },
        {
          en: '"set_status_to_database"',
          bn: '"set_status_to_database"'
        },
        {
          en: '"write_status_binary"',
          bn: '"write_status_binary"'
        },
        {
          en: 'attr_writer does not generate methods in modern Ruby',
          bn: 'আধুনিক Ruby-তে attr_writer কোনো মেথড তৈরি করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Setter methods in Ruby end with an equals sign (=).',
        bn: 'মান বসানোর জন্য মেথডের নামের শেষে সমান চিহ্ন (=) যুক্ত হয়।'
      },
      explanation: {
        en: 'Ruby transforms assignments like "order.status = val" into the message send "order.status=(val)". attr_writer generates this "status=" method.',
        bn: 'অ্যাসাইনমেন্টের সমান চিহ্ন মূলত একটি মেথড কলের নাম, যা attr_writer তৈরি করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-objects-and-the-class',
    title: {
      en: 'Ruby Objects & Classes Quiz',
      bn: 'Ruby অবজেক্ট এবং ক্লাস কুইজ'
    },
    questions: [
      {
        id: 'quiz-class-variables-vs-class-instance-variables',
        kind: 'mcq',
        topic: 'ruby-class-variables-double-at-hazard',
        question: {
          en: 'Why do experienced Ruby engineers strictly avoid class variables ("@@count") in favor of class instance variables ("@count" on self)?',
          bn: 'অভিজ্ঞ Ruby ইঞ্জিনিয়াররা কেন ক্লাস ভ্যারিয়েবল ("@@count") পরিহার করে ক্লাস ইনস্ট্যান্স ভ্যারিয়েবল ("@count") ব্যবহার করেন?'
        },
        options: [
          {
            en: 'Class variables ("@@") are shared across the entire inheritance tree, meaning a subclass mutating "@@count" silently overwrites the parent class value globally',
            bn: 'ক্লাস ভ্যারিয়েবল ("@@") পুরো ইনহেরিট্যান্স ট্রির মাঝে শেয়ার হয়, ফলে কোনো সাবক্লাস "@@count" পরিবর্তন করলে অজান্তেই মূল প্যারেন্ট ক্লাসের মানও বদলে যায়'
          },
          {
            en: 'Class variables consume 100 megabytes of disk space per instance',
            bn: 'ক্লাস ভ্যারিয়েবল প্রতি ইনস্ট্যান্সে ১০০ মেগাবাইট ডিস্ক স্পেস খরচ করে'
          },
          {
            en: 'Class variables were removed in Ruby 2.5',
            bn: 'Ruby ২.৫ সংস্করণে ক্লাস ভ্যারিয়েবল সম্পূর্ণ বাদ দেওয়া হয়েছিল'
          },
          {
            en: 'There is zero behavioral difference between @ and @@',
            bn: '@ এবং @@-এর মাঝে আচরণগত কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: '@@ variables are shared across subclasses, creating dangerous cross-class contamination.',
          bn: 'সন্তান ক্লাসে বদলালে বাবা ক্লাসের ডেটাও দূষিত হয়ে যাওয়ার কুখ্যাত ফাঁদ।'
        },
        explanation: {
          en: '@@ variables belong to the entire class hierarchy. Subclasses pollute parent state. Class instance variables (@var on class self) belong exclusively to that specific Class object.',
          bn: 'এই কারণে সাবক্লাসের ডেটা আলাদা ও সুরক্ষিত রাখতে ক্লাস ইনস্ট্যান্স ভ্যারিয়েবল ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-equal-vs-double-equals-identity',
        kind: 'mcq',
        topic: 'ruby-equal-vs-double-equals-identity',
        question: {
          en: 'What is the distinction between "a == b" and "a.equal?(b)" in Ruby?',
          bn: 'Ruby-তে "a == b" এবং "a.equal?(b)"-এর মাঝে পার্থক্য কী?'
        },
        options: [
          {
            en: '"==" checks value equality (whether two objects represent the same data); "equal?" checks strict physical object identity (whether both variables point to the exact same object_id in memory)',
            bn: '"==" মানের সমতা যাচাই করে (উভয় অবজেক্ট একই ডেটা ধারণ করে কি না); আর "equal?" মেমরিতে শারীরিক আইডেন্টিটি যাচাই করে (উভয় ভ্যারিয়েবল হুবহু একই object_id নির্দেশ করে কি না)'
          },
          {
            en: 'equal? is only valid for strings; == is only valid for numbers',
            bn: 'equal? কেবল স্ট্রিংয়ের জন্য বৈধ; আর == কেবল সংখ্যার জন্য'
          },
          {
            en: 'There is zero difference; equal? is an alias of ==',
            bn: 'তাদের মাঝে কোনো পার্থক্য নেই; equal? হলো == এর সাধারণ এলিয়াস'
          },
          {
            en: 'equal? was deprecated in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে equal? বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '== checks values; equal? checks pointer identity (object_id).',
          bn: 'মান এক হলেও মেমরিতে তারা দুটি আলাদা অবজেক্ট হতে পারে, যা equal? দিয়ে ধরা যায়।'
        },
        explanation: {
          en: 'Two distinct string instances `"hello" == "hello"` returns true because values match, but `"hello".equal?("hello")` returns false because they occupy separate heap addresses.',
          bn: 'মানের মিল দেখতে == এবং একই মেমোরি পয়েন্টার কি না তা নিশ্চিত হতে equal? ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-struct-and-data-immutable-classes',
        kind: 'mcq',
        topic: 'ruby-data-define-immutable-value-objects',
        question: {
          en: 'What modern capability did Ruby 3.2 introduce with "Data.define(:name, :role)" compared to traditional "Struct.new"?',
          bn: 'ঐতিহ্যবাহী "Struct.new"-এর তুলনায় Ruby ৩.২ সংস্করণে "Data.define(:name, :role)" কোন আধুনিক সুবিধা নিয়ে এসেছে?'
        },
        options: [
          {
            en: 'It creates deeply immutable, value-based data objects with positional and keyword initialization, disallowing accidental mutation and guaranteeing thread-safety',
            bn: 'এটি সম্পূর্ণ অপরিবর্তনীয় এবং মান-ভিত্তিক ডেটা অবজেক্ট তৈরি করে যা অনাকাঙ্ক্ষিত পরিবর্তন আটকে দিয়ে থ্রেড-সেফটি নিশ্চিত করে'
          },
          {
            en: 'It automatically saves every instance into a local SQLite database',
            bn: 'এটি প্রতিটি ইনস্ট্যান্স স্বয়ংক্রিয়ভাবে একটি লোকাল SQLite ডেটাবেসে সংরক্ষণ করে'
          },
          {
            en: 'It compresses object data into MP3 audio format',
            bn: 'এটি অবজেক্টের ডেটাকে এমপি৩ অডিও ফরম্যাটে সংকুচিত করে'
          },
          {
            en: 'Data.define was removed in Ruby 3.3',
            bn: 'Ruby ৩.৩ সংস্করণে Data.define বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Data.define builds immutable value objects in modern Ruby 3.2+.',
          bn: 'ইমিউটেবল ডেটা ক্লাস বানানোর আধুনিক অফিসিয়াল বিল্ট-ইন সমাধান।'
        },
        explanation: {
          en: 'While Struct creates mutable objects with writer methods, Data.define creates strictly immutable value objects, ideal for functional domain modeling and concurrent architectures.',
          bn: 'এর মাধ্যমে কোনো মিউটেবল বাগ ছাড়াই স্টেটলেস এবং নিরাপদ মডেল তৈরি করা যায়।'
        }
      },
      {
        id: 'quiz-private-method-explicit-receiver',
        kind: 'mcq',
        topic: 'ruby-private-method-explicit-receiver-rule',
        question: {
          en: 'Historically in Ruby, why did calling "self.secret_method" fail with a NoMethodError if secret_method was marked "private"?',
          bn: 'ঐতিহাসিকভাবে Ruby-তে secret_method প্রাইভেট থাকা অবস্থায় "self.secret_method" কল করলে কেন NoMethodError ঘটত?'
        },
        options: [
          {
            en: 'Private methods in Ruby could only be invoked with an implicit receiver (just "secret_method"); specifying an explicit receiver (even "self.") was forbidden until relaxed in Ruby 2.7',
            bn: 'Ruby-তে প্রাইভেট মেথড কেবল স্পষ্ট রিসিভার ছাড়া কল করার নিয়ম ছিল (শুধু "secret_method"); এমনকি "self." রিসিভার দেওয়াও নিষিদ্ধ ছিল যা পরবর্তীতে শিথিল করা হয়'
          },
          {
            en: 'Because self is deleted whenever a private method is declared',
            bn: 'কারণ প্রাইভেট মেথড ঘোষণা করলেই self মুছে যায়'
          },
          {
            en: 'Private methods can only be executed by root system administrators',
            bn: 'প্রাইভেট মেথড কেবল রুট সিস্টেম অ্যাডমিনিস্ট্রেটরই চালাতে পারেন'
          },
          {
            en: 'Ruby does not have private methods',
            bn: 'Ruby-তে কোনো প্রাইভেট মেথড নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Private methods could historically never have an explicit receiver.',
          bn: 'ক্লাসের মেথডকে ব্যক্তিগত রাখতে রিসিভারের নাম উল্লেখ নিষিদ্ধ ছিল।'
        },
        explanation: {
          en: 'In Ruby, method privacy was defined by receiver syntax: private meant "callable only without an explicit receiver". Ruby 2.7 relaxed this specifically for "self.private_method".',
          bn: 'এই অনন্য নিয়মের কারণেই প্রাইভেট মেথড বাইরের কলার থেকে সম্পূর্ণ বিচ্ছিন্ন থাকত।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'enums-and-the-map',
    title: {
      en: 'Enumerable, Map, Filter, Reduce & Lazy Streams',
      bn: 'Enumerable, Map, Filter, Reduce এবং লেজি স্ট্রিম'
    }
  }
};
