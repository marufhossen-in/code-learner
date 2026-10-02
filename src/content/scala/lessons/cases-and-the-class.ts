import type { Lesson } from '../../../lib/types';

export const CasesAndTheClassLesson: Lesson = {
  slug: 'cases-and-the-class',
  tech: 'scala',
  title: {
    en: 'Case Classes & Pattern Matching: Algebraic Data Types & Sealed Trees',
    bn: 'কেস ক্লাস ও প্যাটার্ন ম্যাচিং: অ্যালজেব্রাইক ডাটা টাইপ ও সিলড ট্রি'
  },
  summary: {
    en: 'Master Scala domain modeling: case classes (immutable fields, copy, structural equality), companion objects (apply/unapply), powerful pattern matching with guards, and sealed algebraic data types.',
    bn: 'স্কালা ডোমেন মডেলিংয়ে দক্ষতা: কেস ক্লাস (ইমিউটেবল ফিল্ড, copy, স্ট্রাকচারাল ইকুয়ালিটি), কম্প্যানিয়ন অবজেক্ট (apply/unapply), গার্ড সহ শক্তিশালী প্যাটার্ন ম্যাচিং এবং সিলড অ্যালজেব্রাইক ডাটা টাইপ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'case-classes-intro',
      text: {
        en: '1. What Makes Case Classes Fundamental in Scala?',
        bn: '১. স্কালাতে কেস ক্লাস কেন এত মৌলিক ও শক্তিশালী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you model business entities in Scala, you rarely author verbose Java-style JavaBeans. Instead, you declare a case class (e.g. case class User(id: Long, email: String, active: Boolean)). In a single concise line, the Scala compiler generates extensive boilerplate automatically.',
        bn: 'যখন আপনি স্কালাতে কোনো বিজনেস এনটিটি বা ডোমেন মডেল তৈরি করেন, জাভার মতো বিশাল বয়লারপ্লেট জাভাবিন লেখার কোনো প্রয়োজন হয় না। এর বদলে একটি সাধারণ কেস ক্লাস (case class) ঘোষণা করা হয় (যেমন case class User(id: Long, email: String, active: Boolean))। মাত্র এক লাইনে স্কালা কম্পাইলার নিজে থেকেই যাবতীয় প্রয়োজনীয় কোড তৈরি করে দেয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Immutable Public Fields: All constructor parameters are promoted to public immutable val fields automatically.',
          bn: '১. ইমিউটেবল পাবলিক ফিল্ড: কনস্ট্রাক্টরের تمام প্যারামিটার নিজে থেকেই পাবলিক ও অপরিবর্তনশীল val ফিল্ডে পরিণত হয়।'
        },
        {
          en: '2. Structural Equality: equals and hashCode evaluate based on the data contained inside the fields, not pointer memory addresses.',
          bn: '২. কাঠামোগত সমতা: equals এবং hashCode মেমরি অ্যাড্রেস না দেখে ফিল্ডের ভেতরের ডাটা বা মানের ওপর ভিত্তি করে সমতা বিচার করে।'
        },
        {
          en: '3. Non-Destructive copy(): Generates a copy() method with named default parameters for safe immutable record updates (e.g. user.copy(active = false)).',
          bn: '৩. নিরাপদ copy() মেথড: ইমিউটেবল অবজেক্টের মান না ভেঙে পরিবর্তন করার জন্য ডিফল্ট প্যারামিটার সমৃদ্ধ copy() মেথড তৈরি করে (যেমন user.copy(active = false))।'
        },
        {
          en: '4. Companion Object with apply & unapply: Allows instantiation without the "new" keyword (User(1L, "a@b.com", true)) and powers extractor pattern matching.',
          bn: '৪. apply ও unapply সমৃদ্ধ কম্প্যানিয়ন অবজেক্ট: "new" কীওয়ার্ড ছাড়াই অবজেক্ট তৈরির সুবিধা এবং প্যাটার্ন ম্যাচিংয়ে মান ভেঙে বের করার সুবিধা দেয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'case-class-and-matching-diagram',
      title: {
        en: 'Case Class Capabilities & Algebraic Data Type Pattern Matching',
        bn: 'কেস ক্লাসের সক্ষমতা ও অ্যালজেব্রাইক ডাটা টাইপ প্যাটার্ন ম্যাচিং'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Scala Case Classes &amp; Sealed ADT Pattern Matching</text>' +
          '<!-- Column 1: Case Class Anatomy -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. CASE CLASS ANATOMY</text>' +
            '<rect x="15" y="45" width="330" height="50" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="25" y="75" fill="#facc15" font-size="11" font-weight="bold" font-family="monospace">case class User(id: Long, name: String)</text>' +
            '<rect x="15" y="105" width="330" height="205" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="128" fill="#38bdf8" font-size="10" font-weight="bold">&#x2713; Companion apply():</text>' +
            '<text x="40" y="145" fill="#cbd5e1" font-size="9">val u = User(101L, "Alice") // No "new" keyword</text>' +
            '<text x="25" y="168" fill="#10b981" font-size="10" font-weight="bold">&#x2713; Structural equality:</text>' +
            '<text x="40" y="185" fill="#cbd5e1" font-size="9">User(1L, "A") == User(1L, "A") &#x2192; true</text>' +
            '<text x="25" y="208" fill="#f59e0b" font-size="10" font-weight="bold">&#x2713; Non-destructive update:</text>' +
            '<text x="40" y="225" fill="#cbd5e1" font-size="9">val updated = u.copy(name = "Bob")</text>' +
            '<text x="25" y="248" fill="#c084fc" font-size="10" font-weight="bold">&#x2713; Extractor unapply():</text>' +
            '<text x="40" y="265" fill="#cbd5e1" font-size="9">Powers deconstruction in pattern matching</text>' +
            '<text x="25" y="288" fill="#38bdf8" font-size="10" font-weight="bold">&#x2713; Built-in toString &amp; hashCode</text>' +
          '</g>' +
          '<!-- Column 2: Sealed ADT Pattern Matching -->' +
          '<g transform="translate(410, 60)">' +
            '<rect width="360" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="180" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">2. SEALED ADT PATTERN MATCHING</text>' +
            '<rect x="15" y="45" width="330" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="66" fill="#facc15" font-size="10" font-family="monospace">sealed trait Payment</text>' +
            '<text x="25" y="82" fill="#38bdf8" font-size="9" font-family="monospace">case class Card(num: String, cvc: Int) extends Payment</text>' +
            '<text x="25" y="96" fill="#34d399" font-size="9" font-family="monospace">case class Cash(amount: Double) extends Payment</text>' +
            '<rect x="15" y="115" width="330" height="195" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="136" fill="#34d399" font-size="10" font-weight="bold">payment match {</text>' +
            '<text x="35" y="155" fill="#cbd5e1" font-size="9">case Card(num, cvc) if cvc &gt; 100 &#x2192;</text>' +
            '<text x="50" y="170" fill="#38bdf8" font-size="9">s"Processed card ending in \${num.takeRight(4)}"</text>' +
            '<text x="35" y="190" fill="#cbd5e1" font-size="9">case Cash(amt) &#x2192;</text>' +
            '<text x="50" y="205" fill="#34d399" font-size="9">s"Collected cash \$$amt"</text>' +
            '<text x="25" y="224" fill="#34d399" font-size="10" font-weight="bold">}</text>' +
            '<line x1="25" y1="236" x2="330" y2="236" stroke="#334155"/>' +
            '<text x="180" y="256" fill="#fbbf24" font-size="10" font-weight="bold" text-anchor="middle">&#x26A0; Compiler Exhaustiveness Check</text>' +
            '<text x="180" y="274" fill="#cbd5e1" font-size="9" text-anchor="middle">sealed trait ensures ALL subtypes are known.</text>' +
            '<text x="180" y="290" fill="#cbd5e1" font-size="9" text-anchor="middle">Missing a case raises a compiler warning!</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'pattern-matching-power',
      text: {
        en: '2. Pattern Matching with Guards and Destructuring',
        bn: '২. গার্ড ও ডিস্ট্রাকচারিং সহ প্যাটার্ন ম্যাচিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Pattern matching in Scala goes far beyond switch statements in other languages. It can deconstruct complex nested data structures, inspect runtime types, match constants or tuples, and evaluate boolean predicate guards (if condition).',
        bn: 'স্কালাতে প্যাটার্ন ম্যাচিং সাধারণ সুইচ স্টেটমেন্টের চেয়ে অনেক বেশি শক্তিশালী। এটি জটিল নেস্টেড ডাটা স্ট্রাকচার ভেঙে ফিল্ড বের করতে পারে, রানটাইম টাইপ পরীক্ষা করতে পারে, টিউপল ম্যাচ করতে পারে এবং গার্ড (if শর্ত) দিয়ে অতিরিক্ত লজিক যাচাই করতে পারে।'
      }
    },
    {
      type: 'heading',
      id: 'sealed-adts',
      text: {
        en: '3. Algebraic Data Types & Exhaustiveness Checking',
        bn: '৩. অ্যালজেব্রাইক ডাটা টাইপ ও একজস্টিভনেস চেকিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An Algebraic Data Type (ADT) is modeled in Scala using a sealed trait as the base sum type, and case classes as the concrete product variants. The sealed keyword enforces that all implementations must reside in the same source file. This allows the compiler to perform exhaustive match validation, warning you at build-time if a scenario is unhandled.',
        bn: 'স্কালাতে অ্যালজেব্রাইক ডাটা টাইপ (ADT) তৈরি করতে বেস টাইপ হিসেবে sealed trait এবং নির্দিষ্ট রূপগুলোর জন্য case class ব্যবহৃত হয়। sealed কীওয়ার্ড নিশ্চিত করে যে সমস্ত সাব-ক্লাস একই ফাইলে সংজ্ঞায়িত থাকবে। এর ফলে কম্পাইলার تمام শাখা পরীক্ষা করে কোনো কেস বাদ পড়লে বিল্ডের সময়ই সতর্কবার্তা দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Case Class & Pattern Matching Engine in TypeScript',
        bn: '৪. TypeScript এ কেস ক্লাস ও প্যাটার্ন ম্যাচিং ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Scala case classes implement structural equality, execute non-destructive copy updates, and evaluate sealed pattern matching with extractor destructuring and guards:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে স্কালা কেস ক্লাস কাঠামোগত সমতা রক্ষা করে, নিরাপদ copy চালায় এবং ডিস্ট্রাকচারিং ও গার্ড সহ সিলড প্যাটার্ন ম্যাচিং পরিচালনা করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Scala case class copy, structural equality, and sealed ADT pattern matching.',
        bn: 'স্কালা কেস ক্লাসের copy, স্ট্রাকচারাল সমতা এবং সিলড ADT প্যাটার্ন ম্যাচিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala Case Classes and Sealed ADT Pattern Matching

// 1. Case Class Simulation with copy() and Structural Equality
class UserCaseClass {
  constructor(
    public readonly id: number,
    public readonly name: string,
    public readonly active: boolean
  ) {}

  // copy() method for non-destructive immutable updates
  copy(updates: Partial<{ id: number; name: string; active: boolean }>): UserCaseClass {
    return new UserCaseClass(
      updates.id !== undefined ? updates.id : this.id,
      updates.name !== undefined ? updates.name : this.name,
      updates.active !== undefined ? updates.active : this.active
    );
  }

  // Structural equals based on field values
  equals(other: UserCaseClass): boolean {
    return (
      this.id === other.id &&
      this.name === other.name &&
      this.active === other.active
    );
  }

  toString(): string {
    return 'User(' + this.id + ', ' + this.name + ', ' + this.active + ')';
  }
}

// 2. Sealed Algebraic Data Type (ADT) Simulation
type PaymentMethod =
  | { kind: 'CreditCard'; cardNumber: string; cvc: number; amount: number }
  | { kind: 'BankTransfer'; iban: string; amount: number }
  | { kind: 'Cash'; amount: number };

// Pattern Matching Engine with Guards
function processPayment(payment: PaymentMethod): string {
  switch (payment.kind) {
    case 'CreditCard': {
      // Pattern guard: verify CVC length or value
      if (payment.cvc < 100) {
        return 'Card Rejected: Invalid security code';
      }
      const last4 = payment.cardNumber.slice(-4);
      return 'Charged $' + payment.amount + ' to Card ending in ' + last4;
    }
    case 'BankTransfer':
      return 'Bank wire transfer of $' + payment.amount + ' initiated to ' + payment.iban;
    case 'Cash':
      return 'Cash payment of $' + payment.amount + ' recorded';
  }
}

// Demonstration
// 1. Case Class structural equality and copy
const user1 = new UserCaseClass(101, 'Alice', true);
const user2 = new UserCaseClass(101, 'Alice', true);

console.log('Structural equality check: ' + user1.equals(user2)); // -> true

// Non-destructive update creates a new instance
const updatedUser = user1.copy({ active: false });
console.log('Original user active: ' + user1.active); // -> true
console.log('Updated user active: ' + updatedUser.active); // -> false
console.log('Updated representation: ' + updatedUser.toString()); // -> User(101, Alice, false)

// 2. Pattern matching evaluation
const cardPayment: PaymentMethod = {
  kind: 'CreditCard',
  cardNumber: '4111222233334444',
  cvc: 382,
  amount: 250
};

const cashPayment: PaymentMethod = {
  kind: 'Cash',
  amount: 50
};

console.log('Result 1: ' + processPayment(cardPayment)); // -> Charged $250 to Card ending in 4444
console.log('Result 2: ' + processPayment(cashPayment)); // -> Cash payment of $50 recorded`
    }
  ],
  exercises: [
    {
      id: 'case-ex-1',
      kind: 'mcq',
      question: {
        en: 'What occurs when comparing 2 distinct case class instances with identical field values using == in Scala?',
        bn: 'স্কালাতে হুবহু একই ফিল্ড মান বিশিষ্ট ২টি ভিন্ন কেস ক্লাস ইনস্ট্যান্সকে == দিয়ে তুলনা করলে কী ঘটবে?'
      },
      options: [
        {
          en: 'It returns true because case classes implement structural equality based on fields rather than reference identity',
          bn: 'এটি true ফেরত দেবে কারণ কেস ক্লাস মেমরি রেফারেন্সের বদলে ফিল্ডের মানের ওপর ভিত্তি করে কাঠামোগত সমতা যাচাই করে'
        },
        {
          en: 'It returns false because they occupy different memory addresses on the JVM heap',
          bn: 'এটি false ফেরত দেবে কারণ তারা জেভিএম হিপে ভিন্ন মেমরি ঠিকানায় অবস্থিত'
        },
        {
          en: 'It triggers a compile error stating that == is unsupported on classes',
          bn: 'ক্লাসে == সমর্থিত নয় জানিয়ে কম্পাইল এরর তৈরি করবে'
        },
        {
          en: 'It converts both instances to null',
          bn: 'উভয় ইনস্ট্যান্সকে null এ রূপান্তর করে দেবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Case classes generate automatic structural equals and hashCode.',
        bn: 'কেস ক্লাস নিজে থেকেই কাঠামোগত equals এবং hashCode মেথড তৈরি করে নেয়।'
      },
      explanation: {
        en: 'Case classes automatically provide field-by-field structural equals() implementations, so two separate instances with identical constructor values evaluate as equal.',
        bn: 'কেস ক্লাস প্রতিটি ফিল্ডের মান পুঙ্খানুপুঙ্খ মিলিয়ে দেখে, ফলে আলাদা মেমরিতে থাকলেও একই ডাটা থাকলে তারা সমান (true) হয়।'
      }
    },
    {
      id: 'case-ex-2',
      kind: 'mcq',
      question: {
        en: 'How do you modify an existing immutable case class instance without mutating the original object?',
        bn: 'মূল অবজেক্টের কোনো পরিবর্তন না করে একটি বিদ্যমান ইমিউটেবল কেস ক্লাস ইনস্ট্যান্স কীভাবে রূপান্তর করা হয়?'
      },
      options: [
        {
          en: 'Using the generated copy() method with named arguments (e.g. user.copy(active = false))',
          bn: 'নেমড আর্গুমেন্ট সহ তৈরি হওয়া copy() মেথড ব্যবহার করে (যেমন user.copy(active = false))'
        },
        {
          en: 'Directly reassigning the field (e.g. user.active = false)',
          bn: 'সরাসরি ফিল্ডে নতুন মান বসিয়ে (যেমন user.active = false)'
        },
        {
          en: 'By serializing the class to an XML file and re-importing it',
          bn: 'ক্লাসটিকে XML ফাইলে সেভ করে পুনরায় ইমপোর্ট করার মাধ্যমে'
        },
        {
          en: 'By deleting the class file from disk and rebuilding',
          bn: 'হার্ডডিস্ক থেকে ক্লাস ফাইলটি মুছে নতুন করে বিল্ড করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'copy() produces a new instance with selective field overrides.',
        bn: 'copy() মেথড নির্দিষ্ট ফিল্ড পরিবর্তন করে একটি নতুন ইনস্ট্যান্স তৈরি করে দেয়।'
      },
      explanation: {
        en: 'The compiler-generated copy() method enables non-destructive updates, returning a fresh instance with specified fields altered while preserving the original.',
        bn: 'কেস ক্লাসের copy() মেথড মূল অবজেক্ট ঠিক রেখে কাঙ্ক্ষিত পরিবর্তন সহ একটি নতুন অবজেক্ট প্রদান করে।'
      }
    },
    {
      id: 'case-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why is the sealed keyword placed on base traits when building Algebraic Data Types (ADTs) in Scala?',
        bn: 'স্কালাতে অ্যালজেব্রাইক ডাটা টাইপ (ADT) তৈরির সময় বেস ট্রেইটে sealed কীওয়ার্ড কেন যুক্ত করা হয়?'
      },
      options: [
        {
          en: 'It restricts all subclasses to the same source file, enabling the compiler to verify that pattern matching is 100% exhaustive',
          bn: 'এটি تمام সাব-ক্লাসকে একই সোর্স ফাইলে সংজ্ঞায়িত হতে বাধ্য করে, ফলে কম্পাইলার প্যাটার্ন ম্যাচিংয়ের পূর্ণাঙ্গতা (exhaustive) যাচাই করতে পারে'
        },
        {
          en: 'It encrypts the bytecode with a secret password',
          bn: 'এটি একটি গোপন পাসওয়ার্ড দিয়ে বাইটকোড এনক্রিপ্ট করে'
        },
        {
          en: 'It prevents the class from being garbage collected by the JVM',
          bn: 'এটি জেভিএম গার্বেজ কালেক্টরকে ক্লাসটি মুছতে বাধা দেয়'
        },
        {
          en: 'It makes the class run 50% faster on Intel processors',
          bn: 'এটি ইন্টেল প্রসেসরে ক্লাসটিকে ৫০% দ্রুত চালায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'sealed guarantees all variants are known at compile time.',
        bn: 'sealed নিশ্চিত করে যে সমস্ত রূপ কম্পাইল-টাইমেই জানা আছে।'
      },
      explanation: {
        en: 'The sealed keyword ensures all subclasses are declared in the same file. The Scala compiler uses this knowledge to warn if a pattern match omits any possible variant.',
        bn: 'sealed কীওয়ার্ড تمام সম্ভাব্য সাব-টাইপকে একই ফাইলে সীমাবদ্ধ রাখে, যার ফলে কম্পাইলার প্যাটার্ন ম্যাচিংয়ে কোনো অপশন বাদ পড়লে সতর্ক করতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-cases-and-the-class',
    title: {
      en: 'Scala Case Classes and Pattern Matching Quiz',
      bn: 'স্কালা কেস ক্লাস ও প্যাটার্ন ম্যাচিং কুইজ'
    },
    questions: [
      {
        id: 'case-q1',
        kind: 'mcq',
        question: {
          en: 'What feature allows instantiating a case class without writing the new keyword (e.g. Person("Alice", 25))?',
          bn: 'কোন সুবিধার কারণে "new" কীওয়ার্ড না লিখেই একটি কেস ক্লাস ইনস্ট্যানশিয়েট করা যায় (যেমন Person("Alice", 25))?'
        },
        options: [
          {
            en: 'The automatically generated companion object with an apply() factory method',
            bn: 'স্বয়ংক্রিয়ভাবে তৈরি হওয়া apply() ফ্যাক্টরি মেথড সমৃদ্ধ কম্প্যানিয়ন অবজেক্ট'
          },
          {
            en: 'A JVM compiler bug that ignores the word "new"',
            bn: 'জেভিএম কম্পাইলারের একটি বাগ যা "new" শব্দটিকে উপেক্ষা করে'
          },
          {
            en: 'Reflection libraries loaded from Maven Central',
            bn: 'মাভেন সেন্ট্রাল থেকে লোড করা রিফ্লেকশন লাইব্রেরি'
          },
          {
            en: 'Operating system kernel hooks',
            bn: 'অপারেটিং সিস্টেম কার্নেল হুক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Companion objects provide the apply factory method.',
          bn: 'কম্প্যানিয়ন অবজেক্ট apply ফ্যাক্টরি মেথড সরবরাহ করে।'
        },
        explanation: {
          en: 'Every case class receives an auto-generated companion object equipped with an apply() factory method, allowing constructor invocation without new.',
          bn: 'প্রতিটি কেস ক্লাসের সাথে একটি কম্প্যানিয়ন অবজেক্ট থাকে যার apply() মেথড new ছাড়াই অবজেক্ট তৈরির সুযোগ দেয়।'
        }
      },
      {
        id: 'case-q2',
        kind: 'mcq',
        question: {
          en: 'In Scala pattern matching, what is an "if guard" used for (e.g. case x if x > 100 =>)?',
          bn: 'স্কালা প্যাটার্ন ম্যাচিংয়ে "if guard" (যেমন case x if x > 100 =>) কী কাজে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'To specify an additional boolean condition that must evaluate to TRUE for the case branch to match',
            bn: 'একটি অতিরিক্ত বুলিয়ান শর্ত নির্দিষ্ট করার জন্য যা সত্য (TRUE) হলে তবেই কেস ব্রাঞ্চটি ম্যাচ করে'
          },
          {
            en: 'To catch runtime exceptions thrown by JVM memory errors',
            bn: 'জেভিএম মেমরি এরর দ্বারা তৈরি এক্সেপশন ধরার জন্য'
          },
          {
            en: 'To pause the thread for 100 milliseconds',
            bn: 'থ্রেডটিকে ১০০ মিলি সেকেন্ডের জন্য থামিয়ে রাখার জন্য'
          },
          {
            en: 'To repeat the match statement inside an infinite loop',
            bn: 'ইনফিনিট লুপের ভেতর ম্যাচ স্টেটমেন্টটি বারবার চালানোর জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Guards filter pattern matches with arbitrary boolean logic.',
          bn: 'গার্ড যেকোনো বুলিয়ান শর্ত দিয়ে প্যাটার্ন ম্যাচিংকে যাচাই করে।'
        },
        explanation: {
          en: 'A pattern guard (if condition) adds an arbitrary predicate to a pattern; the branch only triggers if both the structural pattern and the guard condition match.',
          bn: 'প্যাটার্ন গার্ড একটি অতিরিক্ত শর্ত যোগ করে, যা সত্য হলেই কেবল সংশ্লিষ্ট কেস ব্রাঞ্চটি কার্যকর হয়।'
        }
      },
      {
        id: 'case-q3',
        kind: 'mcq',
        question: {
          en: 'What method in a companion object powers pattern matching deconstruction (extractors) in Scala?',
          bn: 'স্কালাতে প্যাটার্ন ম্যাচিং ডিস্ট্রাকশন বা এক্সট্রাক্টরের পেছনে কম্প্যানিয়ন অবজেক্টের কোন মেথডটি কাজ করে?'
        },
        options: [
          {
            en: 'unapply()',
            bn: 'unapply()'
          },
          {
            en: 'destroy()',
            bn: 'destroy()'
          },
          {
            en: 'extract_fields()',
            bn: 'extract_fields()'
          },
          {
            en: 'deconstruct()',
            bn: 'deconstruct()'
          }
        ],
        answer: 0,
        hint: {
          en: 'The opposite of apply().',
          bn: 'apply() এর বিপরীত ক্রিয়া।'
        },
        explanation: {
          en: 'The unapply() method (or unapplySeq) acts as an extractor: it receives an object and extracts its constituent fields into an Option or tuple for pattern matching.',
          bn: 'unapply() মেথডটি এক্সট্রাক্টর হিসেবে কাজ করে অবজেক্টের ভেতরের ফিল্ডগুলোকে বের করে প্যাটার্ন ম্যাচিংয়ের জন্য সরবরাহ করে।'
        }
      },
      {
        id: 'case-q4',
        kind: 'mcq',
        question: {
          en: 'What does the wildcard case _ => in a pattern match accomplish?',
          bn: 'একটি প্যাটার্ন ম্যাচে ওয়াইল্ডকার্ড case _ => কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'Acts as a default catch-all fallback matching any value not caught by preceding cases',
            bn: 'একটি ডিফল্ট ক্যাচ-অল বিকল্প হিসেবে কাজ করে যা পূর্ববর্তী কোনো কেসে না মেলা যেকোনো মানকে গ্রহণ করে'
          },
          {
            en: 'Throws a compile-time fatal assertion failure',
            bn: 'একটি মারাত্মক কম্পাইল-টাইম অ্যাসর্শন ফেইলিউর তৈরি করে'
          },
          {
            en: 'Matches only string characters consisting of spaces',
            bn: 'কেবলমাত্র স্পেস বা ফাঁকা স্থান বিশিষ্ট স্ট্রিং ম্যাচ করে'
          },
          {
            en: 'Terminates the operating system process immediately',
            bn: 'অপারেটিং সিস্টেম প্রসেসটিকে সাথে সাথে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The underscore is the universal catch-all pattern.',
          bn: 'আন্ডারস্কোর হলো সার্বজনীন ক্যাচ-অল প্যাটার্ন।'
        },
        explanation: {
          en: 'In a match expression, case _ is the catch-all pattern that matches any remaining input, preventing MatchError exceptions on unmatched values.',
          bn: 'ম্যাচ এক্সপ্রেশনে case _ যেকোনো অবশিষ্ট মান গ্রহণ করে MatchError প্রতিরোধ করে।'
        }
      },
      {
        id: 'case-q5',
        kind: 'mcq',
        question: {
          en: 'Can a case class inherit from another case class in modern Scala?',
          bn: 'আধুনিক স্কালাতে একটি কেস ক্লাস কি আরেকটি কেস ক্লাসকে ইনহেরিট (উত্তরাধিকার সূত্রে গ্রহণ) করতে পারে?'
        },
        options: [
          {
            en: 'No, case-to-case inheritance is forbidden to preserve sound structural equality and correct unapply extractors',
            bn: 'না, সঠিক কাঠামোগত সমতা এবং নিখুঁত unapply এক্সট্রাক্টর বজায় রাখতে কেস-টু-কেস ইনহেরিটেন্স নিষিদ্ধ'
          },
          {
            en: 'Yes, infinite hierarchies of case classes are encouraged',
            bn: 'হ্যাঁ, কেস ক্লাসের অসীম ইনহেরিটেন্স চেইন তৈরি করতে উৎসাহিত করা হয়'
          },
          {
            en: 'Only if the parent case class has zero fields',
            bn: 'কেবলমাত্র যদি প্যারেন্ট কেস ক্লাসে কোনো ফিল্ড না থাকে'
          },
          {
            en: 'Only in production builds with sbt',
            bn: 'শুধুমাত্র sbt দিয়ে তৈরি প্রোডাকশন বিল্ডে সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Case class inheritance breaks equality symmetry.',
          bn: 'কেস ক্লাস ইনহেরিট করলে সমতার প্রতিসাম্য নষ্ট হয়।'
        },
        explanation: {
          en: 'Scala disallows case class inheritance because inheriting case classes breaks the mathematical symmetry of equals() and confuses generated extractors.',
          bn: 'কেস ক্লাস থেকে অন্য কেস ক্লাস ইনহেরিট করলে equals() এর গাণিতিক নিয়ম ও unapply বিঘ্নিত হয়, তাই স্কালা এটি অনুমোদন করে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lists-and-the-map',
    title: {
      en: 'Collections & For-Comprehensions: Immutable Trees, Maps & Views',
      bn: 'কালেকশন ও For-কমপ্রিহেনশন: ইমিউটেবল ট্রি, ম্যাপ ও ভিউ'
    }
  }
};
