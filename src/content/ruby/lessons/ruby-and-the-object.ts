import type { Lesson } from '../../../lib/types';

export const RubyAndTheObjectLesson: Lesson = {
  slug: 'ruby-and-the-object',
  tech: 'ruby',
  title: {
    en: 'Ruby Basics: Pure Object Model, Classes & Dynamic Message Passing',
    bn: 'Ruby বেসিকস: পিওর অবজেক্ট মডেল, ক্লাস এবং ডাইনামিক মেসেজ পাসিং'
  },
  summary: {
    en: 'A comprehensive beginner tour of the foundational object-oriented philosophy of Ruby. Discover why every value—including numbers, booleans, and nil—is a genuine object, understand method invocation as message passing via ".send()", define encapsulated classes with "initialize" and instance variables (@balance), leverage "attr_accessor" macros, and navigate method dispatch with "self".',
    bn: 'Ruby-র মৌলিক অবজেক্ট-ওরিয়েন্টেড দর্শনের একটি বিস্তারিত শিক্ষানবিস গাইড। সংখ্যা, বুলিয়ান এবং nil সহ প্রতিটি মানই কেন পিওর অবজেক্ট তা জানুন। ".send()" দিয়ে মেসেজ পাসিং, "initialize" ও ইনস্ট্যান্স ভ্যারিয়েবল (@balance), "attr_accessor" ম্যাক্রো এবং "self" মেথড ডিসপ্যাচের বিস্তারিত ব্যবহার শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'pure-object-model-and-messaging-heading',
      text: {
        en: 'The Pure Object Model: Everything is an Object',
        bn: 'পিওর অবজেক্ট মডেল: প্রতিটি মানই এখানে একটি অবজেক্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In hybrid programming languages, primitive types like numbers and booleans exist as unboxed raw memory structures detached from classes. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), every value without exception is a bona fide object. Integers are instances of "Integer", "true" and "false" instantiate "TrueClass" and "FalseClass", and even "nil" is an object belonging to "NilClass". Method invocation in Ruby is fundamentally dynamic message passing. Calling "10.positive?" sends the message ":positive?" to the object "10". This same invocation can be executed explicitly using the dynamic dispatch method "send(:positive?)".',
        bn: 'অন্যান্য অনেক হাইব্রিড প্রোগ্রামিং ভাষায় প্রিমিটিভ টাইপ (যেমন সংখ্যা বা বুলিয়ান) মেমরিতে সাধারণ বাইট হিসেবে থাকে এবং ক্লাসের বাইরে কাজ করে। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে প্রতিটি মানই কোনো না কোনো ক্লাসের বাস্তব অবজেক্ট। পূর্ণসংখ্যা হলো "Integer" ক্লাসের ইনস্ট্যান্স, "true" ও "false" হলো যথাক্রমে "TrueClass" ও "FalseClass"-এর অবজেক্ট এবং শূন্যের প্রতিনিধিত্বকারী "nil"-ও "NilClass"-এর একটি অবজেক্ট। Ruby-তে যেকোনো মেথড কল মূলত অবজেক্টের কাছে বার্তা প্রেরণ হিসেবে কাজ করে। "10.positive?" লেখার অর্থ হলো "10" অবজেক্টটির কাছে ":positive?" বার্তাটি পাঠানো। এই একই কাজ ডাইনামিক ডিসপ্যাচ মেথড "send(:positive?)" দিয়েও সরাসরি করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby pure object architecture and dynamic message dispatch table mapping instances to classes and ancestors.',
        bn: 'চিত্র ১: Ruby পিওর অবজেক্ট আর্কিটেকচার এবং ডাইনামিক মেসেজ ডিসপ্যাচ টেবিল যা ইনস্ট্যান্সকে তার ক্লাস ও মেথডের সাথে যুক্ত করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY OBJECT ARCHITECTURE &amp; MESSAGE PASSING</text>

  <!-- Left: Instance -->
  <g transform="translate(40, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Instance: account</text>

    <!-- Instance Variables -->
    <rect x="15" y="45" width="200" height="60" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="68" fill="#38bdf8" font-size="10" font-family="monospace">@balance = 100</text>
    <text x="25" y="88" fill="#cbd5e1" font-size="9" font-family="sans-serif">Private encapsulated state</text>

    <!-- Pointer to Class -->
    <rect x="15" y="120" width="200" height="85" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="145" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Internal Klass Pointer</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="9" font-family="sans-serif">Points to BankAccount</text>
    <text x="25" y="185" fill="#fbbf24" font-size="9" font-family="monospace">account.class</text>
  </g>

  <!-- Middle: Message Dispatch -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#d97706" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Message Dispatch</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">account.deposit(50)</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">Sends :deposit message</text>

    <rect x="15" y="110" width="200" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="130" fill="#34d399" font-size="10" font-family="monospace">account.send(:deposit, 50)</text>
    <text x="25" y="148" fill="#cbd5e1" font-size="9" font-family="sans-serif">Dynamic dispatch equivalent</text>

    <rect x="15" y="175" width="200" height="45" rx="5" fill="#d97706" fill-opacity="0.2" stroke="#f59e0b" />
    <text x="25" y="195" fill="#fbbf24" font-size="9" font-family="sans-serif" font-weight="bold">Dynamic Evaluation:</text>
    <text x="25" y="210" fill="#f8fafc" font-size="8" font-family="sans-serif">Resolved at runtime in self</text>
  </g>

  <!-- Right: Class Definition & Method Table -->
  <g transform="translate(570, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#7c3aed" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Class: BankAccount</text>

    <rect x="15" y="45" width="200" height="170" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="68" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">Method Lookup Table:</text>
    <text x="25" y="90" fill="#38bdf8" font-size="9" font-family="monospace">• initialize(initial_balance)</text>
    <text x="25" y="112" fill="#38bdf8" font-size="9" font-family="monospace">• balance (attr_reader)</text>
    <text x="25" y="134" fill="#38bdf8" font-size="9" font-family="monospace">• deposit(amount)</text>
    <text x="25" y="156" fill="#38bdf8" font-size="9" font-family="monospace">• withdraw(amount)</text>
    <text x="25" y="180" fill="#cbd5e1" font-size="9" font-family="sans-serif">Superclass: Object</text>
    <text x="25" y="200" fill="#a855f7" font-size="8" font-family="sans-serif">Ancestors: [BankAccount, Object, Kernel, BasicObject]</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'classes-encapsulation-and-attr-accessor-heading',
      text: {
        en: 'Class Definition, State Encapsulation, and Accessor Macros',
        bn: 'ক্লাস ডিফিনিশন, স্টেট এনক্যাপসুলেশন এবং অ্যাক্সেসর ম্যাক্রো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Ruby, state is strictly encapsulated. Variables prefixed with an at-sign ("@balance") are instance variables accessible exclusively from within methods of the current object ("self"). Unlike other languages that expose fields publicly, outside callers cannot access instance variables directly. To read or write state, developers define getter and setter methods. To eliminate repetitive boilerplate, Ruby provides 3 meta-programming class macros: "attr_reader" (generates getter), "attr_writer" (generates setter), and "attr_accessor" (generates both getter and setter simultaneously). Within any method body, "self" refers to the current receiver object executing the code.',
        bn: 'Ruby-তে প্রতিটি অবজেক্টের অভ্যন্তরীণ অবস্থা কঠোরভাবে সংরক্ষিত থাকে। @ চিহ্নযুক্ত ভ্যারিয়েবলগুলো ("@balance") হলো ইনস্ট্যান্স ভ্যারিয়েবল যা কেবল ওই নির্দিষ্ট অবজেক্টের ("self") নিজস্ব মেথডের ভেতর থেকেই অ্যাক্সেস করা সম্ভব। বাইরের কোনো কলার সরাসরি এই ভ্যারিয়েবল পড়তে বা বদলাতে পারে না। ডেটা পড়তে ও পরিবর্তন করতে গেটার এবং সেটার মেথড ডিফাইন করতে হয়। এই বাড়তি কোড লেখার ঝামেলা এড়াতে Ruby ৩ টি চমৎকার ম্যাক্রো দেয়: "attr_reader" (গেটার তৈরি করে), "attr_writer" (সেটার তৈরি করে) এবং "attr_accessor" (একসাথে গেটার ও সেটার উভয়টিই তৈরি করে)। মেথডের ভেতরে "self" কি-ওয়ার্ডটি বর্তমান রিসিভার অবজেক্টটিকে নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby pure object model, dynamic message sending via send(), and attr_accessor getter/setter synthesis.',
        bn: 'Ruby পিওর অবজেক্ট মডেল, send() দিয়ে ডাইনামিক মেসেজ পাসিং এবং attr_accessor গেটার/সেটার তৈরির TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Pure Object Model and Message Dispatch

export class RubyObject {
  private methodTable: Map<string, Function> = new Map();
  public klassName: string;

  constructor(klassName: string) {
    this.klassName = klassName;
  }

  // Register a method dynamically into the object's method table
  public defineMethod(name: string, fn: Function): void {
    this.methodTable.set(name, fn);
  }

  // Simulates Ruby's message sending: object.send(:method_name, *args)
  public send(message: string, ...args: any[]): any {
    const method = this.methodTable.get(message);
    if (!method) {
      throw new Error("NoMethodError: undefined method '" + message + "' for " + this.klassName);
    }
    return method.apply(this, args);
  }

  public class(): string {
    return this.klassName;
  }
}

// Simulates a custom Ruby class with state and accessor macros
export class SimulatedRubyBankAccount extends RubyObject {
  private balance: number;

  constructor(initialBalance: number) {
    super('BankAccount');
    this.balance = initialBalance;

    // Simulate "attr_reader :balance"
    this.defineMethod('balance', () => this.balance);

    // Simulate "def deposit(amount); @balance += amount; end"
    this.defineMethod('deposit', (amount: number) => {
      this.balance += amount;
      return this.balance;
    });

    // Simulate "def withdraw(amount); @balance -= amount; end"
    this.defineMethod('withdraw', (amount: number) => {
      if (amount > this.balance) throw new Error('Insufficient funds');
      this.balance -= amount;
      return this.balance;
    });
  }
}

// Execution Demonstration
console.log('--- 1. Pure Object Model: Numbers and Nil ---');
const integerObj = new RubyObject('Integer');
integerObj.defineMethod('positive?', () => true);
console.log('Object Class:', integerObj.class()); // Integer
console.log('Dynamic send(:positive?):', integerObj.send('positive?')); // true

console.log('\n--- 2. Custom Class with Encapsulated State ---');
const account = new SimulatedRubyBankAccount(100);
console.log('Initial Balance via send(:balance):', account.send('balance')); // 100

// Dispatching message :deposit with argument 50
const balanceAfterDeposit = account.send('deposit', 50);
console.log('Balance After Deposit of 50:', balanceAfterDeposit); // 150

// Dispatching message :withdraw with argument 30
const balanceAfterWithdraw = account.send('withdraw', 30);
console.log('Balance After Withdrawal of 30:', balanceAfterWithdraw); // 120`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Pure Object Model',
          def: {
            en: 'Architectural model where all values (numbers, booleans, classes, nil) are genuine objects with methods.',
            bn: 'এমন একটি ব্যবস্থা যেখানে সংখ্যা, বুলিয়ান, ক্লাস ও nil সহ প্রতিটি মানই একটি স্বয়ংসম্পূর্ণ অবজেক্ট।'
          }
        },
        {
          term: 'Message Passing (send)',
          def: {
            en: 'Mechanism of calling methods by sending symbolic message names to receiver objects at runtime.',
            bn: 'রানটাইমে অবজেক্টের কাছে সিম্বলিক নামের মেসেজ বা বার্তা পাঠিয়ে মেথড চালানোর ডাইনামিক কৌশল।'
          }
        },
        {
          term: 'attr_accessor',
          def: {
            en: 'Ruby class macro that dynamically synthesizes both reader and writer methods for an instance variable.',
            bn: 'ক্লাস ম্যাক্রো যা কোনো ইনস্ট্যান্স ভ্যারিয়েবলের জন্য স্বয়ংক্রিয়ভাবে গেটার ও সেটার উভয় মেথড তৈরি করে দেয়।'
          }
        },
        {
          term: 'self',
          def: {
            en: 'Keyword representing the current executing receiver object and execution context in Ruby.',
            bn: 'কি-ওয়ার্ড যা চলমান মেথডে বর্তমান কার্যকর রিসিভার অবজেক্ট এবং এক্সিকিউশন কনটেক্সটকে নির্দেশ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'everything-is-an-object-nil-ex1',
      kind: 'mcq',
      topic: 'ruby-pure-object-model-nil-class',
      question: {
        en: 'In Ruby, what happens when you evaluate the expression "nil.class"?',
        bn: 'Ruby-তে "nil.class" এক্সপ্রেশনটি রান করলে কী ফলাফল পাওয়া যায়?'
      },
      options: [
        {
          en: 'It returns "NilClass", proving that even the nil absence value is a genuine instantiated object in Ruby',
          bn: 'এটি "NilClass" রিটার্ন করে, যা প্রমাণ করে যে শূন্যের নির্দেশক nil-ও Ruby-তে একটি বাস্তব অবজেক্ট'
        },
        {
          en: 'It triggers a NullPointerException because nil cannot receive messages',
          bn: 'এটি একটি NullPointerException ঘটায় কারণ nil কোনো মেসেজ গ্রহণ করতে পারে না'
        },
        {
          en: 'It crashes the operating system kernel immediately',
          bn: 'এটি সাথে সাথে অপারেটিং সিস্টেমের কার্নেল ক্র্যাশ করায়'
        },
        {
          en: 'nil was replaced by undefined in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে nil-কে undefined দিয়ে প্রতিস্থাপন করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'In Ruby, nil is a singleton instance of the NilClass object.',
        bn: 'অন্য ভাষার নাল পয়েন্টারের মতো এটি খালি নয়, বরং নিজস্ব মেথডযুক্ত একটি বাস্তব অবজেক্ট।'
      },
      explanation: {
        en: 'Unlike languages where null is a primitive empty pointer, in Ruby nil is a full singleton object belonging to NilClass, supporting methods like ".nil?" and ".to_s".',
        bn: 'ফলে nil-এর ওপরও ".nil?" বা ".to_s" মেথড সরাসরি কল করা যায় কোনো ক্র্যাশ ছাড়া।'
      }
    },
    {
      id: 'dynamic-message-sending-send-ex2',
      kind: 'mcq',
      topic: 'ruby-message-sending-dynamic-dispatch',
      question: {
        en: 'What does calling "user.send(:authenticate, password)" accomplish in Ruby compared to "user.authenticate(password)"?',
        bn: '"user.authenticate(password)"-এর তুলনায় "user.send(:authenticate, password)" কল করলে Ruby-তে কী ঘটে?'
      },
      options: [
        {
          en: 'It performs dynamic method dispatch by sending the message :authenticate at runtime, and can even invoke private methods',
          bn: 'এটি রানটাইমে :authenticate মেসেজ পাঠিয়ে ডাইনামিক মেথড ডিসপ্যাচ সম্পন্ন করে, এমনকি এটি প্রাইভেট মেথডও চালাতে পারে'
        },
        {
          en: 'It sends an electronic email to the system administrator',
          bn: 'এটি সিস্টেম অ্যাডমিনিস্ট্রেটরের কাছে একটি ইমেইল পাঠায়'
        },
        {
          en: 'It converts the user password into plain text on disk',
          bn: 'এটি ব্যবহারকারীর পাসওয়ার্ডটি ডিস্কে সাধারণ টেক্সট আকারে লিখে রাখে'
        },
        {
          en: 'send was deprecated in Ruby 2.0',
          bn: 'Ruby ২.০ সংস্করণে send মেথড বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'send enables dynamic message passing and bypasses private encapsulation.',
        bn: 'সিম্বল দিয়ে মেথডের নাম ডাইনামিকভাবে পাঠিয়ে যেকোনো মেথড চালানোর শক্তিশালী মাধ্যম।'
      },
      explanation: {
        en: 'All method calls in Ruby are message sends. The "send" method allows calling methods programmatically using symbols, bypassing encapsulation (or "public_send" to respect privacy).',
        bn: 'Ruby-র মেথড কল মূলত মেসেজ পাঠানো। "send" মেথড যেকোনো মেথড ডাইনামিকভাবে চালাতে দেয়।'
      }
    },
    {
      id: 'attr-accessor-macro-generation-ex3',
      kind: 'mcq',
      topic: 'attr-accessor-getter-setter-generation',
      question: {
        en: 'What methods does declaring "attr_accessor :email" synthesize inside a Ruby class?',
        bn: 'একটি Ruby ক্লাসের ভেতরে "attr_accessor :email" লিখলে স্বয়ংক্রিয়ভাবে কোন মেথডগুলো তৈরি হয়?'
      },
      options: [
        {
          en: 'Both a reader getter method ("def email; @email; end") and a writer setter method ("def email=(val); @email = val; end")',
          bn: 'একটি রিডার গেটার মেথড ("def email; @email; end") এবং একটি রাইটার সেটার মেথড ("def email=(val); @email = val; end") উভয়ই'
        },
        {
          en: 'It encrypts the email field with a 256-bit AES cipher',
          bn: 'এটি ২৫৬-বিট এইএস সাইফার দিয়ে ইমেইল ফিল্ড এনক্রিপ্ট করে'
        },
        {
          en: 'Only a setter method, forbidding any reading of the value',
          bn: 'শুধুমাত্র একটি সেটার মেথড, যা দিয়ে মান পড়া সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'It deletes the instance variable whenever the object is serialized',
          bn: 'অবজেক্ট সিরিয়ালাইজ করার সময় এটি ইনস্ট্যান্স ভ্যারিয়েবল মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'attr_accessor synthesizes both getter and setter methods.',
        bn: 'মান পড়া এবং পরিবর্তন করা—দুটো কাজের জন্যই মেথড একসাথে বানিয়ে দেয়।'
      },
      explanation: {
        en: 'attr_accessor is meta-programming syntactic sugar that defines both getter and setter methods for the underlying "@email" instance variable.',
        bn: 'এর ফলে একই ফিল্ডের জন্য ম্যানুয়ালি গেটার ও সেটার লিখতে হয় না, কোড সংক্ষিপ্ত ও স্পষ্ট থাকে।'
      }
    },
    {
      id: 'instance-variable-encapsulation-scope-ex4',
      kind: 'mcq',
      topic: 'instance-variable-encapsulation-at-sign',
      question: {
        en: 'Why does accessing "account.balance" fail with a NoMethodError if the BankAccount class has "@balance = 100" but lacks an attr_reader or balance method?',
        bn: 'BankAccount ক্লাসে "@balance = 100" থাকা সত্ত্বেও কোনো attr_reader বা balance মেথড না থাকলে "account.balance" কল করলে কেন NoMethodError ঘটে?'
      },
      options: [
        {
          en: 'Instance variables prefixed with "@" are strictly private and encapsulated; external callers can only interact with objects by passing messages to defined methods',
          bn: '@ যুক্ত ইনস্ট্যান্স ভ্যারিয়েবলগুলো কঠোরভাবে প্রাইভেট এবং এনক্যাপসুলেটেড; বাইরের কলাররা কেবল সুনির্দিষ্ট মেথডে মেসেজ পাঠিয়ে যোগাযোগ করতে পারে'
        },
        {
          en: 'Because Ruby requires 100% of all variables to be declared in a global file',
          bn: 'কারণ Ruby-তে সমস্ত ভ্যারিয়েবল একটি গ্লোবাল ফাইলে ঘোষণা করতে হয়'
        },
        {
          en: 'Instance variables are deleted from memory immediately after initialize exits',
          bn: 'initialize শেষ হওয়া মাত্রই মেমোরি থেকে ইনস্ট্যান্স ভ্যারিয়েবল মুছে যায়'
        },
        {
          en: 'Ruby does not allow numbers to be stored in instance variables',
          bn: 'Ruby ইনস্ট্যান্স ভ্যারিয়েবলে সংখ্যা সংরক্ষণ করার অনুমতি দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ruby enforces strict object encapsulation: variables cannot be read from the outside without methods.',
        bn: 'বাইরের পৃথিবী অবজেক্টের ব্যক্তিগত ডেটা সরাসরি দেখতে পারে না, মেথড দিয়েই চাইতে হয়।'
      },
      explanation: {
        en: 'Ruby strictly enforces data encapsulation. There are no public fields in Ruby. You must explicitly expose getter methods to allow external reading of instance variables.',
        bn: 'Ruby-তে কোনো পাবলিক ফিল্ড নেই। মান বাইরে প্রকাশ করতে হলে স্পষ্ট গেটার মেথড ডিফাইন করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-ruby-and-the-object',
    title: {
      en: 'Ruby Pure Object Model Quiz',
      bn: 'Ruby পিওর অবজেক্ট মডেল কুইজ'
    },
    questions: [
      {
        id: 'quiz-self-in-class-vs-instance',
        kind: 'mcq',
        topic: 'ruby-self-keyword-context',
        question: {
          en: 'What does "self" refer to when evaluated inside a class definition body ("class Order; ... end") versus inside an instance method ("def total; ... end")?',
          bn: 'ক্লাস ডিফিনিশনের বডিতে ("class Order; ... end") এবং ইনস্ট্যান্স মেথডের ভেতরে ("def total; ... end") "self"-এর মান কী হয়?'
        },
        options: [
          {
            en: 'In the class body, "self" refers to the Class object itself (Order); inside an instance method, "self" refers to the specific instance of Order executing the method',
            bn: 'ক্লাসের মূল বডিতে "self" স্বয়ং Class অবজেক্টটিকে (Order) নির্দেশ করে; আর ইনস্ট্যান্স মেথডে "self" মেথডটি চালানো নির্দিষ্ট অর্ডার ইনস্ট্যান্সটিকে নির্দেশ করে'
          },
          {
            en: 'In both places "self" refers to the local terminal window',
            bn: 'উভয় স্থানেই "self" লোকাল টার্মিনাল উইন্ডোকে নির্দেশ করে'
          },
          {
            en: 'In the class body "self" is nil; inside methods it is the superclass',
            bn: 'ক্লাসের বডিতে "self" হলো nil; আর মেথডের ভেতরে এটি সুপারক্লাস'
          },
          {
            en: 'The self keyword was removed in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে self কি-ওয়ার্ড বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'In Ruby, classes are objects too! self reflects the active receiver context.',
          bn: 'ক্লাস নিজেই একটি অবজেক্ট, তাই ক্লাস বডিতে self হলো সেই ক্লাস অবজেক্ট।'
        },
        explanation: {
          en: 'Because classes in Ruby are genuine objects (instances of Class), "self" in the class body points to the class object. Inside instance methods, "self" is the caller instance.',
          bn: 'Ruby-তে ক্লাসও একটি অবজেক্ট। তাই ক্লাস বডিতে self হলো ক্লাস এবং মেথডে self হলো ইনস্ট্যান্স।'
        }
      },
      {
        id: 'quiz-method-missing-dynamic-proxy',
        kind: 'mcq',
        topic: 'ruby-method-missing-ghost-methods',
        question: {
          en: 'How do meta-programming libraries like Active Record implement dynamic finders (e.g. "find_by_email") using Ruby\'s "method_missing" hook?',
          bn: 'Active Record-এর মতো মেটাপ্রোগ্রামিং লাইব্রেরিগুলো কীভাবে Ruby-র "method_missing" হুক ব্যবহার করে ডাইনামিক ফাইন্ডার (যেমন "find_by_email") তৈরি করে?'
        },
        options: [
          {
            en: 'When a message fails to match any defined method in the ancestor chain, Ruby invokes "method_missing", allowing the class to parse the method name dynamically and query the database',
            bn: 'যখন কোনো মেসেজ ক্লাসের অ্যানসেস্টর চেইনে খুঁজে পাওয়া যায় না, Ruby "method_missing" মেথডটি চালায়, যার ফলে ক্লাসটি মেথডের নাম বিশ্লেষণ করে ডেটাবেসে অনুসন্ধান চালাতে পারে'
          },
          {
            en: 'It prompts the developer to type the missing method into a web browser',
            bn: 'এটি ডেভেলপারকে ওয়েব ব্রাউজারে হারিয়ে যাওয়া মেথডটি টাইপ করতে অনুরোধ করে'
          },
          {
            en: 'It reboots the operating system to install the missing method from GitHub',
            bn: 'হারিয়ে যাওয়া মেথড ইনস্টল করতে এটি অপারেটিং সিস্টেম রিবুট করে'
          },
          {
            en: 'method_missing is forbidden in modern Ruby applications',
            bn: 'আধুনিক Ruby অ্যাপ্লিকেশনে method_missing ব্যবহার নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'method_missing acts as a safety net catching unhandled messages at runtime.',
          bn: 'মেথড না থাকলে ক্র্যাশ করার আগে শেষ সুযোগ দিয়ে ডাইনামিক কাজ করানোর হুক।'
        },
        explanation: {
          en: 'Ruby\'s method dispatch ends at "method_missing". Overriding it lets objects respond dynamically to arbitrary method names (ghost methods), a pillar of Rails DSLs.',
          bn: 'এর মাধ্যমে আগে থেকে মেথড ডিফাইন না করেও রানটাইমে নামের ওপর ভিত্তি করে ফিচার তৈরি করা যায়।'
        }
      },
      {
        id: 'quiz-predicate-and-bang-naming-conventions',
        kind: 'mcq',
        topic: 'ruby-method-naming-predicates-and-bangs',
        question: {
          en: 'In professional Ruby idiomatic conventions, what do methods ending with a question mark (e.g. "empty?") and exclamation point (e.g. "save!") signify?',
          bn: 'Ruby-র স্ট্যান্ডার্ড রীতি অনুযায়ী প্রশ্নবোধক চিহ্ন (যেমন "empty?") এবং বিস্ময়বোধক চিহ্ন (যেমন "save!") যুক্ত মেথডগুলো কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'Question mark methods return a boolean (true/false); exclamation methods warn of dangerous or mutating actions (like raising an exception on validation failure)',
            bn: 'প্রশ্নবোধক চিহ্নযুক্ত মেথড বুলিয়ান (true/false) রিটার্ন করে; আর বিস্ময়বোধক চিহ্নযুক্ত মেথড বিপজ্জনক বা পরিবর্তনকারী আচরণ (যেমন ভ্যালিডেশন ব্যর্থ হলে এরর দেওয়া) নির্দেশ করে'
          },
          {
            en: 'Question marks mean the code is under beta testing; exclamation marks mean production-ready',
            bn: 'প্রশ্নবোধক মানে বিটা টেস্টিং; আর বিস্ময়বোধক মানে প্রোডাকশনের জন্য প্রস্তুত'
          },
          {
            en: 'They are syntax errors in Ruby and will fail to parse',
            bn: 'Ruby-তে এগুলো সিনট্যাক্স এরর এবং কোড কম্পাইল হবে না'
          },
          {
            en: 'Exclamation methods run 10 times faster than ordinary methods',
            bn: 'বিস্ময়বোধক মেথড সাধারণ মেথডের চেয়ে ১০ গুণ দ্রুত চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Predicate methods query boolean state; bang methods alert developers to side effects or errors.',
          bn: 'প্রশ্ন থাকলে হ্যাঁ/না জানতে চাওয়া হয়, আর আশ্চর্য চিহ্ন থাকলে বাড়তি সতর্কতা বোঝায়।'
        },
        explanation: {
          en: 'Predicate methods ("nil?", "empty?") cleanly express boolean checks. Bang methods ("sort!", "save!") modify receivers in place or raise exceptions on failures.',
          bn: 'এটি Ruby কোডকে প্রাকৃতিক ইংরেজি বাক্যের মতো সহজবোধ্য ও পাঠযোগ্য করে তোলে।'
        }
      },
      {
        id: 'quiz-basic-object-root-hierarchy',
        kind: 'mcq',
        topic: 'ruby-basic-object-class-hierarchy',
        question: {
          en: 'What is the absolute root class of the entire Ruby inheritance hierarchy from which Object inherits?',
          bn: 'পুরো Ruby ইনহেরিট্যান্স হায়ারার্কির মূল ভিত্তি বা রুট ক্লাস কোনটি যেখান থেকে Object ক্লাসটি উত্তরাধিকার লাভ করে?'
        },
        options: [
          {
            en: 'BasicObject (a minimal blank slate containing almost no built-in methods, ideal for building proxy objects)',
            bn: 'BasicObject (একটি ন্যূনতম শূন্য স্লেট যাতে প্রায় কোনো প্রি-বিল্ট মেথড নেই, যা প্রক্সি অবজেক্ট তৈরির জন্য আদর্শ)'
          },
          {
            en: 'UniversalMasterKernelClass',
            bn: 'UniversalMasterKernelClass'
          },
          {
            en: 'StandardStringRoot',
            bn: 'StandardStringRoot'
          },
          {
            en: 'Ruby has no root class hierarchy',
            bn: 'Ruby-তে কোনো রুট ক্লাস হায়ারার্কি নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'BasicObject sits above Object as the blank-slate root class.',
          bn: 'Object ক্লাসেরও ওপরে থাকে BasicObject যাতে কোনো বাড়তি মেথডের ঝামেলা থাকে না।'
        },
        explanation: {
          en: 'Introduced in Ruby 1.9, BasicObject contains only a handful of essential methods (like __id__ and __send__), making it the perfect parent class for delegation and proxy patterns.',
          bn: 'এতে কোনো মেথড না থাকায় এটি প্রক্সি অবজেক্ট তৈরিতে মেথড সংঘর্ষ সম্পূর্ণ রোধ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'blocks-and-the-yield',
    title: {
      en: 'Blocks, Closures, Yield & Functional Enumerable Pipelines',
      bn: 'ব্লক, ক্লোজার, Yield এবং ফাংশনাল Enumerable পাইপলাইন'
    }
  }
};
