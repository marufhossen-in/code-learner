import type { Lesson } from '../../../lib/types';

export const CppAndTheClassLesson: Lesson = {
  slug: 'cpp-and-the-class',
  tech: 'cpp',
  title: {
    en: 'Classes, Constructors & Encapsulation — Your First C++ Object-Oriented Architecture',
    bn: 'ক্লাস, কনস্ট্রাক্টর ও এনক্যাপসুলেশন — C++ অবজেক্ট ওরিয়েন্টেড আর্কিটেকচারে প্রথম ধাপ'
  },
  summary: {
    en: 'Classes in C++ provide the structural foundation for object-oriented systems design, combining data fields with member methods under granular access control. Unlike C structs whose members are globally public, C++ classes default to private access, safeguarding internal invariants against unauthorized mutation. Constructors initialize object state upon instantiation, with member initializer lists delivering optimal performance by constructing members directly in place and enabling the initialization of const values and reference types. Destructors (~ClassName()) pair symmetrically with constructors, automatically executing cleanup logic when stack objects exit scope. Mastering the this pointer, const-correct member methods, and access specifiers lays the bedrock for robust zero-overhead abstractions.',
    bn: 'C++ এ ক্লাস অবজেক্ট ওরিয়েন্টেড সিস্টেম ডিজাইনের মূল ভিত্তি প্রদান করে, যা সুনির্দিষ্ট অ্যাক্সেস কন্ট্রোলের মাধ্যমে ডেটা ফিল্ড এবং মেম্বার মেথডগুলোকে একত্রিত করে। সি-এর স্ট্রাক্টের সমস্ত ফিল্ড যেখানে সরাসরি সবার জন্য উন্মুক্ত (public) থাকে, সেখানে C++ ক্লাসের সমস্ত উপাদান শুরু থেকেই ব্যক্তিগত (private) থাকে, যা অভ্যন্তরীণ ডেটাকে অনিচ্ছাকৃত পরিবর্তন থেকে রক্ষা করে। কনস্ট্রাক্টর অবজেক্ট তৈরির সময় মান নির্ধারণ করে, যেখানে মেম্বার ইনিশিয়ালাইজার লিস্ট কোনো সাময়িক কপি ছাড়াই সরাসরি মেম্বার ইনিশিয়ালাইজ করে সর্বোচ্চ গতি নিশ্চিত করে এবং const ও রেফারেন্স টাইপকে শুরুতেই মান দিতে সাহায্য করে। ডেস্ট্রাক্টর (~ClassName()) কনস্ট্রাক্টরের সাথে জোড়া হিসেবে কাজ করে স্ট্যাকের অবজেক্ট স্কোপের বাইরে যাওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে রিসোর্স মুক্ত করে দেয়। this পয়েন্টার, কনস্ট-সঠিক মেম্বার ফাংশন ও অ্যাক্সেস স্পেসিফায়ারে দক্ষতা অর্জন শক্তিশালী জিরো-ওভারহেড কোডের ভিত্তি গড়ে তোলে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Classes and Encapsulation Boundaries',
        bn: 'মূল ধারণা: ক্লাস ও এনক্যাপসুলেশন সীমানা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you transition from procedural programming in C to object-oriented architectures in C++, classes serve as the fundamental blueprint for building custom types. While a C struct is a passive collection of public variables, a C++ class binds internal state together with executable member methods behind strict access control boundaries. Encapsulation guarantees that class invariants cannot be corrupted by external code.',
        bn: 'সি-এর স্ট্রাকচার্ড প্রোগ্রামিং থেকে যখন আপনি C++ এর অবজেক্ট ওরিয়েন্টেড আর্কিটেকচারে প্রবেশ করেন, তখন ক্লাস হলো কাস্টম ডেটা টাইপ তৈরির মূল নকশা বা ব্লুপ্রিন্ট। সি-এর একটি struct যেখানে কেবল উন্মুক্ত ভ্যারিয়েবলের একটি নিষ্ক্রিয় সংগ্রহ, সেখানে C++ এর একটি ক্লাস অভ্যন্তরীণ ডেটা এবং এক্সিকিউটেবল মেম্বার মেথডগুলোকে একটি কঠোর নিরাপত্তা সীমানার ভেতর আবদ্ধ করে। এনক্যাপসুলেশন নিশ্চিত করে যে ক্লাসের ভেতরের সুনির্দিষ্ট নিয়মগুলো বাইরের কোনো কোড দ্বারা অসাবধানতাবশত নষ্ট হতে পারবে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Class Blueprint',
          def: {
            en: 'A user-defined type defining internal member variables (state) and member functions (behavior) bound within an encapsulation boundary',
            bn: 'একটি ব্যবহারকারী-সংজ্ঞায়িত টাইপ যা অভ্যন্তরীণ মেম্বার ভ্যারিয়েবল (স্টেট) এবং মেম্বার ফাংশনগুলোকে (আচরণ) একটি একক কাঠামোয় আবদ্ধ করে'
          }
        },
        {
          term: 'Encapsulation',
          def: {
            en: 'Hiding internal state representation behind private access specifiers while exposing safe public interfaces',
            bn: 'প্রাইভেট স্পেসিফায়ার দিয়ে ভেতরের অবস্থা গোপন রেখে পাবলিক ইন্টারফেসের মাধ্যমে নিরাপদ ব্যবহারের সুযোগ দেওয়া'
          }
        },
        {
          term: 'Member Initializer List',
          def: {
            en: 'Syntax following a constructor colon (: member(val)) that initializes fields directly before the constructor body executes',
            bn: 'কনস্ট্রাক্টরের কোলনের পরের অংশ (: member(val)) যা কনস্ট্রাক্টর বডি চলার আগেই সরাসরি মেম্বার ভ্যারিয়েবলগুলোতে মান নির্ধারণ করে'
          }
        },
        {
          term: 'Destructor (~ClassName)',
          def: {
            en: 'A special member function invoked automatically by the runtime when an object instance reaches the end of its lifetime scope',
            bn: 'একটি বিশেষ মেম্বার ফাংশন যা কোনো অবজেক্টের জীবনকাল শেষ হলে রানটাইম দ্বারা স্বয়ংক্রিয়ভাবে অবমুক্তির জন্য চালিত হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'access-specifiers',
      text: {
        en: 'Access Specifiers: Public, Private, and Protected',
        bn: 'অ্যাক্সেস স্পেসিফায়ার: Public, Private ও Protected'
      }
    },
    {
      type: 'para',
      text: {
        en: 'C++ controls member visibility through three distinct keywords. The public specifier allows unrestricted invocation from any external caller. In contrast, the private designation restricts entry exclusively to internal member routines. Finally, the protected specifier extends privilege to the containing type and any derived sub-classes.',
        bn: 'C++ তিনটি সুনির্দিষ্ট কিওয়ার্ডের মাধ্যমে মেম্বারদের দৃশ্যমানতা পরিচালনা করে। public নির্দেশ করলে কোডের যেকোনো বহিরাগত স্থান থেকে তা ব্যবহারের অনুমতি মেলে। বিপরীতে, private স্পেসিফায়ার প্রবেশাধিকার কেবল ক্লাসের অভ্যন্তরীণ রুটিনের মধ্যেই সীমাবদ্ধ রাখে। সবশেষে, protected কিওয়ার্ডটি বর্তমান ক্লাস এবং তা থেকে তৈরি হওয়া চাইল্ড ক্লাসগুলোর জন্য ব্যবহারের সুবিধা প্রসারিত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C++, the only mechanical distinction between struct and class is the default access level: members of a struct default to public, whereas members of a class default to private. Both support constructors, destructors, methods, and inheritance identically.',
        bn: 'C++ এ struct এবং class-এর মধ্যে একমাত্র যান্ত্রিক পার্থক্য হলো শুরুতেই ডিফল্ট অ্যাক্সেসের ধরন: struct-এর সমস্ত সদস্য শুরু থেকেই public থাকে, যেখানে class-এর সমস্ত সদস্য শুরু থেকেই private থাকে। তবে কনস্ট্রাক্টর, ডেস্ট্রাক্টর, মেথড ও ইনহেরিটেন্সের ক্ষেত্রে উভয়ই হুবহু একইভাবে কাজ করে।'
      }
    },
    {
      type: 'heading',
      id: 'initializer-lists',
      text: {
        en: 'Constructors and the Member Initializer List',
        bn: 'কনস্ট্রাক্টর ও মেম্বার ইনিশিয়ালাইজার লিস্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When constructing a class instance, initializing members inside the constructor body ({ balance_ = initialDeposit; }) causes the compiler to first construct a default empty member, then overwrite it via assignment. This incurs an unnecessary two-step penalty.',
        bn: 'কোনো অবজেক্ট তৈরির সময় কনস্ট্রাক্টর বডির ভেতরে মান বসালে ({ balance_ = initialDeposit; }) কম্পাইলার প্রথমে ডিফল্ট মান দিয়ে মেম্বারটি তৈরি করে এবং পরে অ্যাসাইনমেন্ট দিয়ে নতুন মান বসায়। এতে অপ্রয়োজনীয়ভাবে দুই ধাপের অতিরিক্ত কাজ সম্পন্ন হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Using a Member Initializer List—BankAccount(...) : balance_(initialDeposit)—constructs the field directly in place with the initial value in a single step. Furthermore, const members and reference fields (T&) can only be initialized via initializer lists because they cannot be reassigned inside the body.',
        bn: 'মেম্বার ইনিশিয়ালাইজার লিস্ট ব্যবহার করলে—BankAccount(...) : balance_(initialDeposit)—একই ধাপে সরাসরি কাঙ্ক্ষিত মান দিয়ে মেম্বারটি তৈরি হয়ে যায়। তাছাড়া const মেম্বার এবং রেফারেন্স ফিল্ডের (T&) মান কনস্ট্রাক্টর বডিতে পরে বদলানো যায় না বলে এগুলোতে মান দেওয়ার জন্য ইনিশিয়ালাইজার লিস্ট ব্যবহার করা বাধ্যতামূলক।'
      }
    },
    {
      type: 'heading',
      id: 'this-and-const',
      text: {
        en: 'The this Pointer and Const Correctness',
        bn: 'this পয়েন্টার ও কনস্ট মেথড সঠিকতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Inside every non-static member method, the compiler implicitly passes a pointer to the invoking instance named this. On a standard 64-bit architecture, this occupies 8 bytes and enables methods to disambiguate member fields from local parameter names.',
        bn: 'প্রতিটি নন-স্ট্যাটিক মেম্বার মেথডের ভেতরে কম্পাইলার অলক্ষ্যে একটি পয়েন্টার পাঠায় যার নাম this। স্ট্যান্ডার্ড ৬৪-বিট সিস্টেমে এই this পয়েন্টারটি ৮ বাইট জায়গা নেয় এবং লোকাল প্যারামিটারের নামের সাথে মেম্বার ভ্যারিয়েবলের নাম আলাদা করতে সাহায্য করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Marking a method const—such as double getBalance() const—promises that the method will not mutate any member variables. This allows the method to be safely invoked on const references, enforcing immutability contracts at compile time.',
        bn: 'কোনো মেথডকে const ঘোষণা করলে—যেমন double getBalance() const—নিশ্চিত হয় যে মেথডটি কোনো মেম্বার ভ্যারিয়েবল পরিবর্তন করবে না। এর ফলে const রেফারেন্সের ওপরও নিরাপদে মেথডটি চালানো যায় এবং কম্পাইল টাইমে ডেটার অপরিবর্তনীয়তা বজায় থাকে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: C Struct vs C++ Struct vs C++ Class',
        bn: 'কাঠামোগত তুলনা: সি স্ট্রাক্ট বনাম সি++ স্ট্রাক্ট বনাম সি++ ক্লাস'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'C Struct', bn: 'সি স্ট্রাক্ট (C Struct)' },
        { en: 'C++ Struct', bn: 'সি++ স্ট্রাক্ট (C++ Struct)' },
        { en: 'C++ Class', bn: 'সি++ ক্লাস (C++ Class)' }
      ],
      rows: [
        [
          { en: 'Default Access Specifier', bn: 'ডিফল্ট অ্যাক্সেস স্পেসিফায়ার' },
          { en: 'Always public (no access control)', bn: 'সর্বদা public (কোনো নিয়ন্ত্রণ নেই)' },
          { en: 'Public by default', bn: 'ডিফল্টভাবে public' },
          { en: 'Private by default', bn: 'ডিফল্টভাবে private' }
        ],
        [
          { en: 'Member Methods & Behavior', bn: 'মেম্বার মেথড ও আচরণ' },
          { en: 'Not supported (data-only records)', bn: 'সমর্থিত নয় (কেবল ডেটা রেকর্ড)' },
          { en: 'Full member methods supported', bn: 'মেম্বার মেথড পূর্ণ সমর্থিত' },
          { en: 'Full member methods supported', bn: 'মেম্বার মেথড পূর্ণ সমর্থিত' }
        ],
        [
          { en: 'Constructors & Destructors', bn: 'কনস্ট্রাক্টর ও ডেস্ট্রাক্টর' },
          { en: 'None (manual memset/init functions)', bn: 'নেই (ম্যানুয়াল ফাংশন লাগে)' },
          { en: 'Supported with automatic lifecycle', bn: 'স্বয়ংক্রিয় লাইফসাইকেল সহ সমর্থিত' },
          { en: 'Supported with automatic lifecycle', bn: 'স্বয়ংক্রিয় লাইফসাইকেল সহ সমর্থিত' }
        ],
        [
          { en: 'Idiomatic Systems Role', bn: 'আদর্শ ব্যবহারের ক্ষেত্র' },
          { en: 'Plain old data (POD) across C ABIs', bn: 'সি এপিআইতে সাধারণ ডেটা রেকর্ড' },
          { en: 'Passive public data aggregates (vectors, points)', bn: 'পাবলিক ডেটা সমন্বয় (ভেক্টর, পয়েন্ট)' },
          { en: 'Encapsulated business logic and resource managers', bn: 'এনক্যাপসুলেটেড লজিক ও রিসোর্স ম্যানেজার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: BankAccount Class Architecture',
        bn: 'বাস্তব কোড সিমুলেশন: BankAccount ক্লাস আর্কিটেকচার'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ Classes, Encapsulation & Initializer Lists in Node.js

class BankAccount {
  // Private member variables simulation
  #balance: number;
  #accountNumber: string;
  #transactionCount: number;

  // Member initializer list simulation
  constructor(accountNumber: string, initialDeposit: number) {
    this.#accountNumber = accountNumber;
    this.#balance = initialDeposit;
    this.#transactionCount = 1;
  }

  // Mutator method with business invariant checking
  deposit(amount: number): boolean {
    if (amount > 0) {
      this.#balance += amount;
      this.#transactionCount += 1;
      return true;
    }
    return false;
  }

  withdraw(amount: number): boolean {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      this.#transactionCount += 1;
      return true;
    }
    return false;
  }

  // Const member method: inspects state without mutating
  getBalance(): number {
    return this.#balance;
  }

  getTransactionCount(): number {
    return this.#transactionCount;
  }
}

// Simulating stack object instantiation
const account = new BankAccount('ACC-1001', 1000);

// Operations
account.deposit(500); // balance = 1500, transactions = 2
const balanceAfterDeposit = account.getBalance();
const transactionsTotal = account.getTransactionCount();

console.log('Account balance after initial deposit of 1000 and 500:', balanceAfterDeposit);
// -> Account balance after initial deposit of 1000 and 500: 1500
console.log('Total transaction operations recorded in account instance:', transactionsTotal);
// -> Total transaction operations recorded in account instance: 2
console.log('Default member access in C++ struct: public');
// -> Default member access in C++ struct: public
console.log('Default member access in C++ class: private');
// -> Default member access in C++ class: private
console.log('Size of this pointer on standard 64-bit architecture in bytes: 8');
// -> Size of this pointer on standard 64-bit architecture in bytes: 8`,
      caption: {
        en: 'Simulation: initial 1000 plus 500 deposit yields 1500 across 2 transactions; C++ struct defaults to public, class to private; this is 8 bytes',
        bn: 'সিমুলেশন: ১০০০ ও ৫০০ জমার পর ২ ট্রানজ্যাকশনে ব্যালেন্স ১৫০০; সি++ স্ট্রাক্ট ডিফল্ট public, ক্লাস private; this পয়েন্টার ৮ বাইট'
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
        en: 'Rule 1: Always use member initializer lists instead of body assignments. Direct initialization avoids double-construction overhead and is strictly required for const and reference members.',
        bn: 'নিয়ম ১: কনস্ট্রাক্টর বডিতে মান বসানোর বদলে সর্বদা মেমোরি ইনিশিয়ালাইজার লিস্ট ব্যবহার করুন। এটি অপ্রয়োজনীয় ডাবল-কনস্ট্রাকশন ওভারহেড দূর করে এবং const ও রেফারেন্স মেম্বারের জন্য অপরিহার্য।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Make all getter and inspection methods const. Marking read-only methods const guarantees that caller functions accepting const references can safely invoke them without compilation errors.',
        bn: 'নিয়ম ২: সমস্ত গেটার ও নিরীক্ষণ মেথডকে const হিসেবে চিহ্নিত করুন। রিড-অনলি মেথড const হলে const রেফারেন্স গ্রহণকারী যেকোনো ফাংশন থেকে তা কোনো কম্পাইল ত্রুটি ছাড়াই চালানো যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Keep member data strictly private. Exposing fields publicly breaks encapsulation invariants; provide explicit getters and validated setters to guard business rules.',
        bn: 'নিয়ম ৩: মেম্বার ডেটাকে সর্বদা private রাখুন। সরাসরি ফিল্ড উন্মুক্ত রাখলে এনক্যাপসুলেশন নষ্ট হয়; ব্যবসায়িক নিয়ম সুরক্ষিত রাখতে নির্দিষ্ট গেটার ও যাচাইকৃত সেটার ব্যবহার করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Initialize member variables in the exact order they are declared in the class definition. Compilers initialize fields based on declaration order, not initializer list order; mismatching triggers warnings.',
        bn: 'নিয়ম ৪: ক্লাসে যেভাবে ভ্যারিয়েবল ঘোষণা করা হয়েছে ঠিক সেই ক্রমানুসারে ইনিশিয়ালাইজার লিস্টে মান দিন। কম্পাইলার ঘোষণার ক্রম অনুসারে মেমোরিতে মান বসায়, তাই অমিল হলে সতর্কবার্তা তৈরি হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-cls-ex1',
      kind: 'mcq',
      topic: 'The default access specifier difference between struct and class in C++',
      question: {
        en: 'What is the sole mechanical difference between a struct and a class in C++?',
        bn: 'C++ এ একটি struct এবং একটি class-এর মধ্যে একমাত্র যান্ত্রিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Members and base classes default to public in a struct, whereas they default to private in a class',
          bn: 'struct-এর মেম্বার ও বেস ক্লাস ডিফল্টভাবে public থাকে, যেখানে class-এ সেগুলো ডিফল্টভাবে private থাকে'
        },
        {
          en: 'Classes can have methods but structs cannot contain any functions',
          bn: 'ক্লাসে মেথড থাকতে পারে কিন্তু স্ট্রাক্টে কোনো ফাংশন থাকা সম্ভব নয়'
        },
        {
          en: 'Structs are allocated on disk drives while classes are allocated in the cloud',
          bn: 'স্ট্রাক্ট ডিস্কে সংরক্ষিত হয় আর ক্লাস ক্লাউড সার্ভারে তৈরি হয়'
        },
        {
          en: 'Classes can only be used on 32-bit operating systems',
          bn: 'ক্লাস কেবল ৩২-বিট অপারেটিং সিস্টেমেই ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Public default vs private default.',
        bn: 'ডিফল্টভাবে পাবলিক বনাম ডিফল্টভাবে প্রাইভেটের কথা ভাবুন।'
      },
      explanation: {
        en: 'In C++, struct and class are identical in capability. The only difference is default visibility: struct defaults to public, class to private.',
        bn: 'C++ এ struct এবং class-এর কার্যক্ষমতা সম্পূর্ণ সমান। একমাত্র পার্থক্য হলো দৃশ্যমানতা: struct ডিফল্টভাবে public এবং class ডিফল্টভাবে private।'
      }
    },
    {
      id: 'cpp-cls-ex2',
      kind: 'mcq',
      topic: 'Why member initializer lists are mandatory for const members and references',
      question: {
        en: 'Why must const member variables and reference fields (T&) be initialized using a member initializer list in C++?',
        bn: 'C++ এ const মেম্বার ভ্যারিয়েবল এবং রেফারেন্স ফিল্ডকে (T&) কেন মেম্বার ইনিশিয়ালাইজার লিস্ট দিয়ে মান নির্ধারণ করতে হয়?'
      },
      options: [
        {
          en: 'Const members and references must be bound at the moment of memory allocation; they cannot be left unassigned and reassigned inside the constructor body',
          bn: 'কনস্ট মেম্বার ও রেফারেন্স মেমোরি বরাদ্দের মুহূর্তেই নির্ধারিত হতে হয়; এদের ফাঁকা রেখে পরে কনস্ট্রাক্টরের বডিতে মান বসানো নিষিদ্ধ'
        },
        {
          en: 'Because C++ compilers delete any class with a constructor body',
          bn: 'কারণ কনস্ট্রাক্টরে বডি থাকলে কম্পাইলার পুরো ক্লাস মুছে ফেলে'
        },
        {
          en: 'To make the constructor run 500 times slower for debugging',
          bn: 'ডিবাগিংয়ের জন্য কনস্ট্রাক্টরের গতি ৫০০ গুণ ধীর করতে'
        },
        {
          en: 'Because references take up 0 bytes in computer memory',
          bn: 'কারণ রেফারেন্স মেমোরিতে শূন্য বাইট জায়গা নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'References and const values cannot be modified after creation.',
        bn: 'রেফারেন্স ও কনস্ট মান তৈরি হওয়ার পর আর পরিবর্তন করা যায় না।'
      },
      explanation: {
        en: 'References must bind upon creation, and const variables cannot be assigned. The member initializer list initializes them during construction before the body runs.',
        bn: 'রেফারেন্স তৈরির সাথে সাথেই বাইন্ড হতে হয় এবং কনস্ট মান পরিবর্তন করা যায় না। ইনিশিয়ালাইজার লিস্ট কনস্ট্রাক্টর বডির আগেই সরাসরি এদের প্রস্তুত করে দেয়।'
      }
    },
    {
      id: 'cpp-cls-ex3',
      kind: 'mcq',
      topic: 'The meaning and role of const member functions',
      question: {
        en: 'What does appending const to a member function declaration (e.g. int get() const;) guarantee?',
        bn: 'মেম্বার ফাংশন ঘোষণার শেষে const যুক্ত করলে (যেমন int get() const;) কী নিশ্চয়তা পাওয়া যায়?'
      },
      options: [
        {
          en: 'It guarantees that the method will not mutate any non-mutable member fields of the object, permitting it to be called on const object instances',
          bn: 'এটি নিশ্চিত করে যে মেথডটি অবজেক্টের কোনো সাধারণ মেম্বার ফিল্ড পরিবর্তন করবে না, ফলে const অবজেক্টেও এটি নির্বিঘ্নে চালানো যায়'
        },
        {
          en: 'It converts the return value into a constant string of letters',
          bn: 'এটি রিটার্ন মানকে একটি কনস্ট্যান্ট অক্ষরের স্ট্রিংয়ে পরিণত করে'
        },
        {
          en: 'It forces the method to run only once and then destroy itself',
          bn: 'এটি মেথডটিকে মাত্র একবার চলার পর নিজেকে ধ্বংস করতে বাধ্য করে'
        },
        {
          en: 'It makes the method execute on the computer graphics GPU',
          bn: 'এটি মেথডটিকে কম্পিউটারের গ্রাফিক্স জিপিইউতে কার্যকর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The method promises not to modify the object state.',
        bn: 'মেথডটি অঙ্গীকার করে যে এটি অবজেক্টের কোনো মান বদলাবে না।'
      },
      explanation: {
        en: 'A const member function treats this as a pointer to const (const ClassName *const this), ensuring no member variables are mutated.',
        bn: 'একটি const মেম্বার ফাংশন this পয়েন্টারকে কনস্ট অবজেক্টের দিকে নির্দেশকারী ধরে নেয়, যার ফলে মেম্বার ফিল্ড পরিবর্তন করা সম্ভব হয় না।'
      }
    },
    {
      id: 'cpp-cls-ex4',
      kind: 'mcq',
      topic: 'Automatic execution of destructors upon scope exit',
      question: {
        en: 'When is the destructor (~ClassName()) of a local stack-allocated object executed in C++?',
        bn: 'C++ এ স্ট্যাকে বরাদ্দকৃত কোনো লোকাল অবজেক্টের ডেস্ট্রাক্টর (~ClassName()) কখন কার্যকর হয়?'
      },
      options: [
        {
          en: 'Automatically and deterministically the instant the object enclosing scope (such as a function or block {}) terminates or exits due to return or an exception',
          bn: 'যে ব্লকে বা ফাংশনে ({}) অবজেক্টটি তৈরি হয়েছে তা রিটার্ন বা এক্সেপশনের মাধ্যমে শেষ হওয়ার সাথে সাথে স্বয়ংক্রিয় ও সুনির্দিষ্টভাবে'
        },
        {
          en: 'Only when the user restarts the computer hardware',
          bn: 'ব্যবহারকারী কম্পিউটার রিস্টার্ট করলেই কেবল'
        },
        {
          en: 'Whenever the garbage collector decides to run in the background',
          bn: 'ব্যাকগ্রাউন্ডে গার্বেজ কালেক্টর যখন ইচ্ছা তখন'
        },
        {
          en: 'Destructors never run unless called manually with syntax obj.~ClassName()',
          bn: 'ম্যানুয়ালি obj.~ClassName() লিখে না ডাকলে ডেস্ট্রাক্টর কখনো চলে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Deterministic destruction upon leaving the lexical scope.',
        bn: 'লেক্সিক্যাল স্কোপ শেষ হওয়ার সাথে সাথে সুনির্দিষ্ট ধ্বংস।'
      },
      explanation: {
        en: 'Stack-allocated C++ objects have deterministic lifetimes. When control exits their scope (by return or exception unwinding), destructors run automatically.',
        bn: 'স্ট্যাকের অবজেক্টের নির্দিষ্ট জীবনকাল থাকে। কোড সেই স্কোপ থেকে বের হওয়ার সাথে সাথে (রিটার্ন বা এক্সেপশন) ডেস্ট্রাক্টর নিজে থেকেই চলে।'
      }
    }
  ],
  quiz: {
    id: 'cpp-and-the-class-quiz',
    title: {
      en: 'Classes & Encapsulation Architecture Quiz',
      bn: 'ক্লাস ও এনক্যাপসুলেশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-order-of-initialization',
        kind: 'mcq',
        topic: 'Initialization order of class member variables',
        question: {
          en: 'In what order are class member variables initialized during constructor execution in C++?',
          bn: 'C++ এ কনস্ট্রাক্টর চলার সময় ক্লাস মেম্বার ভ্যারিয়েবলগুলো কোন ক্রমানুসারে মেমোরিতে প্রস্তুত হয়?'
        },
        options: [
          {
            en: 'In the exact order they are declared in the class definition, regardless of the order in which they appear in the member initializer list',
            bn: 'ক্লাস সংজ্ঞায় যেভাবে ঘোষণা করা হয়েছে ঠিক সেই ক্রমে, মেম্বার ইনিশিয়ালাইজার লিস্টে যে ক্রমেই লেখা হোক না কেন'
          },
          {
            en: 'Alphabetically based on member variable names',
            bn: 'মেম্বার ভ্যারিয়েবলের নামের বর্ণানুক্রমিক ক্রমে'
          },
          {
            en: 'In reverse order of their byte size',
            bn: 'তাদের বাইট সাইজের বিপরীত ক্রমে'
          },
          {
            en: 'Randomly based on available CPU registers',
            bn: 'সিপিইউ রেজিস্টারের প্রাপ্যতা অনুযায়ী এলোমেলোভাবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Declaration order governs initialization order.',
          bn: 'ক্লাসে ঘোষণার ক্রমই ইনিশিয়ালাইজেশনের ক্রম নিয়ন্ত্রণ করে।'
        },
        explanation: {
          en: 'C++ strictly initializes members in order of declaration to ensure deterministic destruction in reverse order. Initializer list ordering is ignored.',
          bn: 'C++ সর্বদা ঘোষণার ক্রমেই মেম্বার ইনিশিয়ালাইজ করে যাতে ধ্বংসের সময় বিপরীত ক্রম বজায় থাকে। ইনিশিয়ালাইজার লিস্টের ক্রম উপেক্ষা করা হয়।'
        }
      },
      {
        id: 'q-explicit-constructor-keyword',
        kind: 'mcq',
        topic: 'The explicit keyword on single-argument constructors',
        question: {
          en: 'Why is marking single-argument constructors as explicit considered a best practice in modern C++?',
          bn: 'আধুনিক C++ এ একক আর্গুমেন্টের কনস্ট্রাক্টরগুলোতে explicit লেখা কেন একটি সেরা অনুশীলন ধরা হয়?'
        },
        options: [
          {
            en: 'It prevents the compiler from performing unintended implicit type conversions that can cause subtle logic bugs during function calls',
            bn: 'এটি কম্পাইলারকে অনিচ্ছাকৃত টাইপ রূপান্তর করা থেকে বিরত রাখে, যা ফাংশন কলের সময় মারাত্মক বিভ্রান্তিকর বাগ তৈরি করতে পারত'
          },
          {
            en: 'It makes the constructor visible only to explicit adult users',
            bn: 'এটি কনস্ট্রাক্টরটিকে কেবল প্রাপ্তবয়স্ক ব্যবহারকারীদের জন্য দৃশ্যমান করে'
          },
          {
            en: 'It allows the constructor to run without any CPU hardware',
            bn: 'এটি কোনো সিপিইউ হার্ডওয়্যার ছাড়াই কনস্ট্রাক্টর চালাতে সাহায্য করে'
          },
          {
            en: 'It translates the class name into uppercase letters automatically',
            bn: 'এটি ক্লাসের নাম নিজে থেকেই বড় হাতের অক্ষরে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preventing accidental implicit type conversions.',
          bn: 'অনিচ্ছাকৃত ও বিভ্রান্তিকর টাইপ রূপান্তর প্রতিরোধ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Without explicit, a single-arg constructor serves as an implicit conversion operator. Marking it explicit prevents accidental conversions like MyClass obj = 5;.',
          bn: 'explicit না থাকলে একক আর্গুমেন্টের কনস্ট্রাক্টর নিজে থেকেই টাইপ বদলে দেয়। explicit লিখলে MyClass obj = 5; এর মতো অসতর্ক রূপান্তর আটকে যায়।'
        }
      },
      {
        id: 'q-this-pointer-nature',
        kind: 'mcq',
        topic: 'The nature and implicit passing of the this pointer',
        question: {
          en: 'What is the this pointer inside a non-static C++ member function?',
          bn: 'নন-স্ট্যাটিক C++ মেম্বার ফাংশনের ভেতরে this পয়েন্টার মূলত কী?'
        },
        options: [
          {
            en: 'An implicit pointer holding the memory address of the specific object instance on which the member function was invoked',
            bn: 'একটি অলক্ষ্যে পাঠানো পয়েন্টার যা মেথডটি যে অবজেক্টের ওপর কল করা হয়েছে তার নিজস্ব মেমোরি অ্যাড্রেস ধারণ করে'
          },
          {
            en: 'A global variable holding the name of the operating system',
            bn: 'অপারেটিং সিস্টেমের নাম ধারণকারী একটি গ্লোবাল ভ্যারিয়েবল'
          },
          {
            en: 'A pointer that points directly to the computer keyboard input',
            bn: 'কম্পিউটার কিবোর্ড ইনপুটের দিকে নির্দেশকারী একটি পয়েন্টার'
          },
          {
            en: 'A macro that resets the computer system clock to zero',
            bn: 'একটি ম্যাক্রো যা কম্পিউটারের ঘড়ি শূন্যতে রিসেট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pointer to the current object instance.',
          bn: 'বর্তমান অবজেক্ট ইনস্ট্যান্সের দিকে নির্দেশকারী মেমোরি পয়েন্টার।'
        },
        explanation: {
          en: 'Inside member methods, this holds the address of the invoking instance, passed implicitly via CPU register (usually rcx on Windows, rdi on Linux).',
          bn: 'মেম্বার মেথডে this বর্তমান অবজেক্টের অ্যাড্রেস জমা রাখে, যা সাধারণত সিপিইউ রেজিস্টারের মাধ্যমে অলক্ষ্যে আর্গুমেন্ট হিসেবে চলে আসে।'
        }
      },
      {
        id: 'q-mutable-keyword-usage',
        kind: 'mcq',
        topic: 'The mutable keyword in const member methods',
        question: {
          en: 'When is the mutable keyword applied to a class member variable in C++?',
          bn: 'C++ এ কখন কোনো ক্লাস মেম্বার ভ্যারিয়েবলের সাথে mutable কিওয়ার্ডটি ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'To allow that specific member variable to be modified even inside const member functions (useful for thread mutexes, cache counters, and debug stats)',
            bn: 'যাতে const মেম্বার ফাংশনের ভেতর থেকেও সেই নির্দিষ্ট ভ্যারিয়েবলটি পরিবর্তন করা যায় (যেমন থ্রেড মিউটেক্স, ক্যাশ কাউন্টার ও ডিবাগ হিসাব)'
          },
          {
            en: 'To mute the audio speakers on the computer motherboard',
            bn: 'কম্পিউটার মাদারবোর্ডের অডিও স্পিকারের শব্দ বন্ধ করতে'
          },
          {
            en: 'To convert the variable into an immutable constant permanently',
            bn: 'ভ্যারিয়েবলটিকে চিরতরে একটি অপরিবর্তনীয় কনস্ট্যান্টে রূপান্তর করতে'
          },
          {
            en: 'To delete the variable when the computer is turned off',
            bn: 'কম্পিউটার বন্ধ করার সময় ভ্যারিয়েবলটি মুছে ফেলতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modifying state inside a const method for caching or synchronization.',
          bn: 'ক্যাশিং বা মিউটেক্সের জন্য const মেথডের ভেতর মান বদলানোর বিশেষ অনুমতি।'
        },
        explanation: {
          en: 'mutable permits modification of non-observable state (like caching or mutex locks) inside const methods without violating conceptual const correctness.',
          bn: 'mutable কিওয়ার্ডটি বাহ্যিক আচরণ ঠিক রেখে ভেতরের কিছু জিনিস (যেমন ক্যাশ বা মিউটেক্স লক) const মেথড থেকেও পরিবর্তনের সুযোগ দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'raii-and-the-guard',
    title: {
      en: 'RAII & Smart Pointers — Deterministic Resource Management with std::unique_ptr & std::shared_ptr',
      bn: 'RAII ও স্মার্ট পয়েন্টার — std::unique_ptr ও std::shared_ptr দিয়ে সুনির্দিষ্ট রিসোর্স ব্যবস্থাপনা'
    }
  }
};
