import type { Lesson } from '../../../lib/types';

export const ValsAndTheTypeLesson: Lesson = {
  slug: 'vals-and-the-type',
  tech: 'scala',
  title: {
    en: 'Values, Variables & Types: Immutability, Type Inference & Option',
    bn: 'মান, ভেরিয়েবল ও টাইপ: ইমিউটেবিলিটি, টাইপ ইনফারেন্স ও Option'
  },
  summary: {
    en: 'Master Scala value bindings: immutable val vs mutable var, type inference algorithms, lazy val memoization, and eliminating NullPointerExceptions using Option (Some/None).',
    bn: 'স্কালা মান বাইন্ডিংয়ে দক্ষতা: ইমিউটেবল val বনাম মিউটেবল var, টাইপ ইনফারেন্স অ্যালগরিদম, lazy val মেমোইজেশন এবং Option (Some/None) দিয়ে নাল পয়েন্টার এক্সেপশন দূরীকরণ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'val-vs-var',
      text: {
        en: '1. Immutability by Default: val vs var',
        bn: '১. ডিফল্ট ইমিউটেবিলিটি: val বনাম var'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you declare identifiers in Scala, you choose between 2 fundamental keywords: val and var. Idiomatic Scala strongly favors val because immutability eliminates race conditions in concurrent multi-threaded systems.',
        bn: 'যখন আপনি স্কালাতে কোনো আইডেন্টিফায়ার ঘোষণা করেন, আপনি ২টি প্রধান কীওয়ার্ডের একটি বেছে নেন: val অথবা var। মানসম্মত স্কালা কোডে val ব্যবহারকে অগ্রাধিকার দেওয়া হয় কারণ অপরিবর্তনশীলতা (immutability) কনকারেন্ট সিস্টেমে রেস কন্ডিশন দূর করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. val (Value): An immutable reference assigned eagerly upon declaration. Once assigned, it can never be reassigned. Under the hood on the JVM, it compiles to a final field.',
          bn: '১. val (Value): ঘোষণার সাথে সাথেই তৈরি হওয়া একটি অপরিবর্তনশীল রেফারেন্স। একবার মান বসালে তা আর পরিবর্তন করা যায় না। জেভিএমে এটি একটি final ফিল্ড হিসেবে কম্পাইল হয়।'
        },
        {
          en: '2. var (Variable): A mutable reference whose value can be reassigned over time to a new value matching the same type.',
          bn: '২. var (Variable): একটি পরিবর্তনশীল রেফারেন্স যার মান পরবর্তীতে একই টাইপের নতুন মান দিয়ে পরিবর্তন বা পুনঃবরাদ্দ করা যায়।'
        },
        {
          en: '3. lazy val: An immutable value whose evaluation is deferred until its first explicit reference in program flow, then cached (memoized) thread-safely.',
          bn: '৩. lazy val: এমন একটি ইমিউটেবল মান যা ঘোষণার সময় রান হয় না; বরং প্রথমবার ব্যবহারের সময় রান হয়ে ফলাফল থ্রেড-নিরাপদভাবে মেমোইজড রাখে।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'val-var-option-diagram',
      title: {
        en: 'Memory References: val vs var vs lazy val & Option[T]',
        bn: 'মেমরি রেফারেন্স: val বনাম var বনাম lazy val এবং Option[T]'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Scala State &amp; Null Safety: val, var &amp; Option[T]</text>' +
          '<!-- Column 1: val -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. val (IMMUTABLE)</text>' +
            '<rect x="15" y="45" width="190" height="60" rx="6" fill="#0f172a" stroke="#3b82f6"/>' +
            '<text x="25" y="70" fill="#38bdf8" font-size="11" font-weight="bold">val port = 8080</text>' +
            '<text x="25" y="90" fill="#94a3b8" font-size="9">Evaluated immediately</text>' +
            '<rect x="15" y="115" width="190" height="50" rx="6" fill="#0f172a" stroke="#ef4444" stroke-dasharray="3"/>' +
            '<text x="25" y="136" fill="#f87171" font-size="10" font-weight="bold">port = 9000 // ERROR</text>' +
            '<text x="25" y="152" fill="#94a3b8" font-size="8">Reassignment prohibited</text>' +
            '<rect x="15" y="175" width="190" height="135" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="200" fill="#cbd5e1" font-size="10">&#x2022; Thread-safe by default</text>' +
            '<text x="25" y="222" fill="#cbd5e1" font-size="10">&#x2022; Zero lock contention</text>' +
            '<text x="25" y="244" fill="#cbd5e1" font-size="10">&#x2022; Compiles to JVM final</text>' +
            '<text x="25" y="266" fill="#38bdf8" font-size="10">&#x2022; Preferred in 95% cases</text>' +
          '</g>' +
          '<!-- Column 2: lazy val -->' +
          '<g transform="translate(280, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="110" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2. lazy val (DEFERRED)</text>' +
            '<rect x="15" y="45" width="190" height="60" rx="6" fill="#0f172a" stroke="#a855f7"/>' +
            '<text x="25" y="70" fill="#c084fc" font-size="11" font-weight="bold">lazy val db = connect()</text>' +
            '<text x="25" y="90" fill="#94a3b8" font-size="9">NOT evaluated at startup</text>' +
            '<rect x="15" y="115" width="190" height="50" rx="6" fill="#0f172a" stroke="#10b981"/>' +
            '<text x="25" y="136" fill="#34d399" font-size="10" font-weight="bold">First read: db.query()</text>' +
            '<text x="25" y="152" fill="#cbd5e1" font-size="8">Evaluates once, then cached</text>' +
            '<rect x="15" y="175" width="190" height="135" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="200" fill="#cbd5e1" font-size="10">&#x2022; Fast app boot time</text>' +
            '<text x="25" y="222" fill="#cbd5e1" font-size="10">&#x2022; Prevents circular init</text>' +
            '<text x="25" y="244" fill="#cbd5e1" font-size="10">&#x2022; Volatile memory lock</text>' +
            '<text x="25" y="266" fill="#c084fc" font-size="10">&#x2022; Heavy resource friendly</text>' +
          '</g>' +
          '<!-- Column 3: Option[T] -->' +
          '<g transform="translate(530, 60)">' +
            '<rect width="240" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="120" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. Option[T] (NO NULLS)</text>' +
            '<rect x="15" y="45" width="210" height="55" rx="6" fill="#0f172a" stroke="#10b981"/>' +
            '<text x="25" y="68" fill="#34d399" font-size="10" font-weight="bold">Some(value): Present</text>' +
            '<text x="25" y="86" fill="#cbd5e1" font-size="9">Option("Alice") &#x2192; Some("Alice")</text>' +
            '<rect x="15" y="110" width="210" height="55" rx="6" fill="#0f172a" stroke="#f59e0b"/>' +
            '<text x="25" y="133" fill="#fbbf24" font-size="10" font-weight="bold">None: Absent</text>' +
            '<text x="25" y="151" fill="#cbd5e1" font-size="9">Option(null) &#x2192; None (Safe!)</text>' +
            '<rect x="15" y="175" width="210" height="135" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="200" fill="#cbd5e1" font-size="10">&#x2022; 0 NullPointerExceptions</text>' +
            '<text x="25" y="222" fill="#cbd5e1" font-size="10">&#x2022; opt.getOrElse("Guest")</text>' +
            '<text x="25" y="244" fill="#cbd5e1" font-size="10">&#x2022; opt.map(_.toUpperCase)</text>' +
            '<text x="25" y="266" fill="#34d399" font-size="10" font-weight="bold">&#x2022; Compiler checked safety</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'type-inference',
      text: {
        en: '2. Type Inference in Scala',
        bn: '২. স্কালাতে টাইপ ইনফারেন্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Scala features bidirectional local type inference. The compiler inspects expressions and deduces types without requiring redundant annotations: val name = "Kafka" automatically assigns type String. However, explicit annotations (val rate: Double = 1.0) are good practice on public API boundaries and interfaces.',
        bn: 'স্কালা দ্বি-মুখী লোকাল টাইপ ইনফারেন্স সুবিধা প্রদান করে। কম্পাইলার এক্সপ্রেশনের মান যাচাই করে নিজে থেকেই টাইপ নির্ধারণ করে নেয়: val name = "Kafka" লিখলে টাইপ স্বয়ংক্রিয়ভাবে String হয়। তবে পাবলিক এপিআই মেথড এবং বড় ফাংশনে স্পষ্ট টাইপ (যেমন val rate: Double = 1.0) লেখা ভালো অনুশীলনের অংশ।'
      }
    },
    {
      type: 'heading',
      id: 'eliminating-null-option',
      text: {
        en: '3. Eliminating NullPointerExceptions with Option[T]',
        bn: '৩. Option[T] দিয়ে নালপয়েন্টার এক্সেপশন দূর করা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Computer science pioneer Tony Hoare famously called null references his "billion-dollar mistake". In Scala, null is banned from idiomatic code. Instead, missing values are modeled explicitly using the sealed container Option[T], which has exactly 2 implementations:',
        bn: 'কম্পিউটার বিজ্ঞানী টনি হোর নাল (null) রেফারেন্সকে তার "বিলিয়ন ডলারের ভুল" বলে অভিহিত করেছিলেন। স্কালাতে নালের ব্যবহার সম্পূর্ণ নিরুৎসাহিত করা হয়। এর বদলে অনুপস্থিত মানকে মডেল করতে সিলড কনটেইনার Option[T] ব্যবহৃত হয়, যার ঠিক ২টি রূপ রয়েছে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Some(value): Wraps an existing, non-null value (e.g. Some(42)).',
          bn: '১. Some(value): একটি বিদ্যমান ও অ-শূন্য মান ধারণ করে (যেমন Some(42))।'
        },
        {
          en: '2. None: Represents the absence of a value safely without raising runtime NullPointerException crashes.',
          bn: '২. None: কোনো রানটাইম ক্র্যাশ বা নালপয়েন্টার এরর ছাড়াই মানের অনুপস্থিতি প্রকাশ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Scala State & Option Container Engine in TypeScript',
        bn: '৪. TypeScript এ স্কালা স্টেট ও Option কনটেইনার ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program models Scala immutable vals, mutable vars, memoized lazy vals, and monadic Option (Some / None) transformations:',
        bn: 'নিচের TypeScript প্রোগ্রামটি স্কালা ইমিউটেবল val, মিউটেবল var, মেমোইজড lazy val এবং মোনাডিক Option (Some / None) রূপান্তর বাস্তবায়ন করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Scala immutable val, lazy val memoization, and null-safe Option[T].',
        bn: 'স্কালা ইমিউটেবল val, lazy val মেমোইজেশন এবং নাল-নিরাপদ Option[T] এর TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala val, var, lazy val, and Option[T]

// 1. Immutable Val and Mutable Var
class ScalaVal<T> {
  constructor(public readonly value: T) {}
}

class ScalaVar<T> {
  private _value: T;
  constructor(initial: T) {
    this._value = initial;
  }
  get value(): T {
    return this._value;
  }
  set value(newVal: T) {
    this._value = newVal;
  }
}

// 2. Lazy Val with Memoization
class ScalaLazyVal<T> {
  private _memoized: T | null = null;
  private _evaluated: boolean = false;
  private _initFn: () => T;

  constructor(initializer: () => T) {
    this._initFn = initializer;
  }

  get value(): T {
    if (!this._evaluated) {
      this._memoized = this._initFn();
      this._evaluated = true;
    }
    return this._memoized as T;
  }
}

// 3. Monadic Option[T]: Sealed Some[T] and None
abstract class ScalaOption<T> {
  abstract isDefined: boolean;
  abstract getOrElse(fallback: T): T;
  abstract map<U>(f: (val: T) => U): ScalaOption<U>;

  static fromNullable<T>(val: T | null | undefined): ScalaOption<T> {
    return val == null ? new ScalaNone<T>() : new ScalaSome<T>(val);
  }
}

class ScalaSome<T> extends ScalaOption<T> {
  constructor(private readonly val: T) {
    super();
  }
  get isDefined(): boolean {
    return true;
  }
  getOrElse(_fallback: T): T {
    return this.val;
  }
  map<U>(f: (val: T) => U): ScalaOption<U> {
    return new ScalaSome<U>(f(this.val));
  }
}

class ScalaNone<T> extends ScalaOption<T> {
  get isDefined(): boolean {
    return false;
  }
  getOrElse(fallback: T): T {
    return fallback;
  }
  map<U>(_f: (val: T) => U): ScalaOption<U> {
    return new ScalaNone<U>();
  }
}

// Demonstration
// 1. val and var demonstration
const portVal = new ScalaVal<number>(8080);
const counterVar = new ScalaVar<number>(0);
counterVar.value += 1;
console.log('val port: ' + portVal.value); // -> 8080
console.log('var counter updated: ' + counterVar.value); // -> 1

// 2. lazy val demonstration
let initRuns = 0;
const heavyDatabaseConnection = new ScalaLazyVal<string>(() => {
  initRuns++;
  return 'Connected to PostgreSQL on port 5432';
});

console.log('Lazy init runs before access: ' + initRuns); // -> 0
console.log('Access 1: ' + heavyDatabaseConnection.value);
console.log('Access 2: ' + heavyDatabaseConnection.value);
console.log('Lazy init runs after 2 accesses: ' + initRuns); // -> 1

// 3. Option[T] null safety demonstration
const existingUser = ScalaOption.fromNullable('Alice');
const missingUser = ScalaOption.fromNullable<string>(null);

const safeGreeting1 = existingUser.map((u) => u.toUpperCase()).getOrElse('GUEST');
const safeGreeting2 = missingUser.map((u) => u.toUpperCase()).getOrElse('GUEST');

console.log('Greeting for existing user: ' + safeGreeting1); // -> ALICE
console.log('Greeting for missing user: ' + safeGreeting2); // -> GUEST`
    }
  ],
  exercises: [
    {
      id: 'val-ex-1',
      kind: 'mcq',
      question: {
        en: 'What occurs if you attempt to reassign a new value to an identifier declared with the val keyword in Scala?',
        bn: 'স্কালাতে val কীওয়ার্ড দিয়ে ঘোষিত কোনো আইডেন্টিফায়ারে নতুন মান পুনঃবরাদ্দের চেষ্টা করলে কী ঘটবে?'
      },
      options: [
        {
          en: 'A compilation error is raised: reassignment to val',
          bn: 'কম্পাইল এরর ঘটবে: reassignment to val'
        },
        {
          en: 'The compiler silently converts the val to a var',
          bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে val কে var এ রূপান্তর করে নেবে'
        },
        {
          en: 'The operating system restarts immediately',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে রিস্টার্ট হবে'
        },
        {
          en: 'The variable becomes null',
          bn: 'ভেরিয়েবলটির মান null হয়ে যাবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'val represents immutable value bindings.',
        bn: 'val ইমিউটেবল বা অপরিবর্তনশীল মান নির্দেশ করে।'
      },
      explanation: {
        en: 'Identifiers defined with val are immutable. Any attempt to reassign them causes the Scala compiler to reject the program with a compile-time error.',
        bn: 'val দিয়ে তৈরি আইডেন্টিফায়ার অপরিবর্তনশীল হওয়ায় এতে পুনরায় মান অ্যাসাইন করলে কম্পাইলার এরর দিয়ে প্রোগ্রাম আটকে দেয়।'
      }
    },
    {
      id: 'val-ex-2',
      kind: 'mcq',
      question: {
        en: 'When is a lazy val expression evaluated in Scala?',
        bn: 'স্কালাতে একটি lazy val এক্সপ্রেশন কখন মূল্যায়িত হয়?'
      },
      options: [
        {
          en: 'Only when it is first accessed during program execution, then cached for future references',
          bn: 'প্রোগ্রাম চলাকালে কেবল প্রথমবার ব্যবহারের সময়, এরপর ভবিষ্যতের জন্য ক্যাশ বা মেমোইজড থাকে'
        },
        {
          en: 'At the exact moment the class file is compiled by scalac',
          bn: 'scalac দিয়ে ক্লাস ফাইল কম্পাইল করার ঠিক সেই মুহূর্তে'
        },
        {
          en: 'Re-evaluated anew every single time it is read',
          bn: 'প্রতিবার পড়ার সময় নতুন করে মূল্যায়িত হয়'
        },
        {
          en: 'Only right before the JVM garbage collector shuts down',
          bn: 'কেবল জেভিএম গার্বেজ কালেক্টর বন্ধ হওয়ার ঠিক পূর্বে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lazy evaluation defers execution until first demand.',
        bn: 'লেজি ইভ্যালুয়েশন প্রথম প্রয়োজন না হওয়া পর্যন্ত কাজ স্থগিত রাখে।'
      },
      explanation: {
        en: 'A lazy val is evaluated on-demand when accessed for the first time, after which its result is stored for subsequent accesses without re-computation.',
        bn: 'lazy val প্রথমবার ব্যবহারের সময় রান হয় এবং পরবর্তীতে পুনরায় হিসাব না করে সংরক্ষিত মান ব্যবহার করে।'
      }
    },
    {
      id: 'val-ex-3',
      kind: 'mcq',
      question: {
        en: 'What are the two concrete subclasses of the sealed abstract class Option[T] in Scala?',
        bn: 'স্কালাতে সিলড অ্যাবস্ট্রাক্ট ক্লাস Option[T] এর দুটি নির্দিষ্ট সাবক্লাস কোনগুলো?'
      },
      options: [
        {
          en: 'Some[T] (holds a value) and None (represents absence)',
          bn: 'Some[T] (মান ধারণ করে) এবং None (অনুপস্থিতি প্রকাশ করে)'
        },
        {
          en: 'Success[T] and Failure',
          bn: 'Success[T] এবং Failure'
        },
        {
          en: 'Right[T] and Left',
          bn: 'Right[T] এবং Left'
        },
        {
          en: 'Present[T] and Null',
          bn: 'Present[T] এবং Null'
        }
      ],
      answer: 0,
      hint: {
        en: 'Some represents presence; None represents absence.',
        bn: 'Some উপস্থিতি এবং None অনুপস্থিতি বোঝায়।'
      },
      explanation: {
        en: 'Option[T] is a sealed container implemented by Some[T] (for present values) and the singleton object None (for absent values).',
        bn: 'Option[T] কনটেইনারটির ঠিক দুটি রূপ রয়েছে: মান থাকলে Some[T] এবং মান না থাকলে None।'
      }
    }
  ],
  quiz: {
    id: 'quiz-vals-and-the-type',
    title: {
      en: 'Scala Values, Types and Option Quiz',
      bn: 'স্কালা মান, টাইপ ও Option কুইজ'
    },
    questions: [
      {
        id: 'val-q1',
        kind: 'mcq',
        question: {
          en: 'How does Option[T] eliminate NullPointerException bugs in Scala applications?',
          bn: 'স্কালা অ্যাপ্লিকেশনে Option[T] কীভাবে NullPointerException বাগ দূর করে?'
        },
        options: [
          {
            en: 'By forcing the developer and compiler to explicitly handle both Some (present) and None (absent) cases',
            bn: 'ডেভেলপার ও কম্পাইলারকে Some (উপস্থিত) এবং None (অনুপস্থিত) উভয় ক্ষেত্র স্পষ্টভাবে হ্যান্ডেল করতে বাধ্য করে'
          },
          {
            en: 'By disabling Java libraries entirely across the JVM',
            bn: 'পুরো জেভিএমে জাভা লাইব্রেরির ব্যবহার সম্পূর্ণ বন্ধ করে দিয়ে'
          },
          {
            en: 'By silently ignoring all missing data and continuing execution',
            bn: 'অনুপস্থিত সমস্ত ডাটা উপেক্ষা করে কাজ চালিয়ে গিয়ে'
          },
          {
            en: 'By allocating infinite RAM memory for variables',
            bn: 'ভেরিয়েবলের জন্য অসীম র‍্যাম বরাদ্দ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Type-safe containers make optionality explicit.',
          bn: 'টাইপ-নিরাপদ কনটেইনার মানের সম্ভাব্য অনুপস্থিতিকে স্পষ্ট করে তোলে।'
        },
        explanation: {
          en: 'Option[T] makes missing values visible in the type system, forcing handling via pattern matching or getOrElse, thereby eliminating unexpected null dereferences.',
          bn: 'Option[T] টাইপ সিস্টেমে অনুপস্থিত মানকে দৃশ্যমান করে এবং getOrElse বা প্যাটার্ন ম্যাচিংয়ের মাধ্যমে নিরাপদ হ্যান্ডলিং নিশ্চিত করে।'
        }
      },
      {
        id: 'val-q2',
        kind: 'mcq',
        question: {
          en: 'What method safely retrieves the contents of an Option[T], providing a fallback value if the option is None?',
          bn: 'কোন মেথডটি Option[T] থেকে নিরাপদে মান বের করে আনে এবং অপশনটি None হলে একটি বিকল্প ডিফল্ট মান প্রদান করে?'
        },
        options: [
          {
            en: 'opt.getOrElse(fallback)',
            bn: 'opt.getOrElse(fallback)'
          },
          {
            en: 'opt.force_read()',
            bn: 'opt.force_read()'
          },
          {
            en: 'opt.unsafeGet()',
            bn: 'opt.unsafeGet()'
          },
          {
            en: 'opt.unwrap_now()',
            bn: 'opt.unwrap_now()'
          }
        ],
        answer: 0,
        hint: {
          en: 'The idiomatic method name is getOrElse.',
          bn: 'মানসম্মত মেথডের নাম হলো getOrElse।'
        },
        explanation: {
          en: 'getOrElse returns the value wrapped inside Some, or the supplied fallback argument if the Option is None.',
          bn: 'getOrElse অপশনে Some থাকলে ভেতরের মান ফেরত দেয়, আর None থাকলে বিকল্প আর্গুমেন্টটি প্রদান করে।'
        }
      },
      {
        id: 'val-q3',
        kind: 'mcq',
        question: {
          en: 'What is the key difference between a def method and a val in Scala?',
          bn: 'স্কালাতে একটি def মেথড এবং একটি val এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'val is evaluated once upon definition, whereas def is re-evaluated every time it is invoked',
            bn: 'val সংজ্ঞার সময় একবার মূল্যায়িত হয়, আর def প্রতিবার ডাকার সময় নতুন করে মূল্যায়িত হয়'
          },
          {
            en: 'def can only return numbers; val can return strings',
            bn: 'def কেবল সংখ্যা ফেরত দিতে পারে; val স্ট্রিং দিতে পারে'
          },
          {
            en: 'val can take parameter arguments; def cannot',
            bn: 'val প্যারামিটার আর্গুমেন্ট নিতে পারে; def পারে না'
          },
          {
            en: 'There is no difference; they are exact aliases',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা একে অপরের প্রতিশব্দ'
          }
        ],
        answer: 0,
        hint: {
          en: 'val evaluates once; def executes on every call.',
          bn: 'val একবার হিসাব হয়; def প্রতি ডাকে কার্যকর হয়।'
        },
        explanation: {
          en: 'A val defines a fixed value evaluated eagerly at declaration time. A def defines a method that executes anew every time caller code invokes it.',
          bn: 'val হলো একবার মূল্যায়িত হওয়া মান, আর def হলো একটি মেথড যা প্রতিবার ডাকার সময় নতুন করে রান হয়।'
        }
      },
      {
        id: 'val-q4',
        kind: 'mcq',
        question: {
          en: 'What happens when you call opt.map(f) on an Option that is None?',
          bn: 'None থাকা কোনো Option এর ওপর opt.map(f) কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It safely returns None without invoking function f',
            bn: 'ফাংশন f কে না ডেকেই এটি নিরাপদে None ফেরত দেয়'
          },
          {
            en: 'It crashes with a NullPointerException',
            bn: 'এটি NullPointerException দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'It passes null as the argument into function f',
            bn: 'এটি ফাংশন f এর ভেতরে null আর্গুমেন্ট হিসেবে পাস করে'
          },
          {
            en: 'It creates a blank file on disk',
            bn: 'এটি হার্ডডিস্কে একটি খালি ফাইল তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mapping over None preserves None safely.',
          bn: 'None এর ওপর map চালালে তা নিরাপদে None কেই অক্ষুণ্ণ রাখে।'
        },
        explanation: {
          en: 'In functional programming, mapping over an empty container (None) skips function execution and simply yields None, enabling safe transformations.',
          bn: 'None এর ওপর map চালালে কোনো ফাংশন রান না হয়ে নিরাপদে একটি নতুন None তৈরি হয়।'
        }
      },
      {
        id: 'val-q5',
        kind: 'mcq',
        question: {
          en: 'Why is immutable val preferred over mutable var when writing concurrent Scala code?',
          bn: 'কনকারেন্ট স্কালা কোড লেখার সময় মিউটেবল var এর চেয়ে ইমিউটেবল val কেন পছন্দনীয়?'
        },
        options: [
          {
            en: 'Immutable values can be freely read across multiple threads with zero locks or synchronization overhead',
            bn: 'কোনো লক বা সিনক্রোনাইজেশনের ঝামেলা ছাড়াই একাধিক থ্রেড থেকে ইমিউটেবল মান স্বচ্ছন্দে পড়া যায়'
          },
          {
            en: 'val variables consume zero bytes of RAM',
            bn: 'val ভেরিয়েবল মেমরিতে শূন্য বাইট জায়গা নেয়'
          },
          {
            en: 'var variables are limited to 8-bit integers only',
            bn: 'var ভেরিয়েবল কেবল ৮-বিট ইন্টিজারে সীমাবদ্ধ'
          },
          {
            en: 'val code compiles to native x86 assembly while var compiles to Python',
            bn: 'val কোড x86 অ্যাসেম্বলিতে কম্পাইল হয় আর var পাইথনে কম্পাইল হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Immutability guarantees thread safety.',
          bn: 'ইমিউটেবিলিটি বা অপরিবর্তনশীলতা থ্রেড নিরাপত্তার নিশ্চয়তা দেয়।'
        },
        explanation: {
          en: 'Because immutable values cannot mutate after construction, they are inherently thread-safe and can be shared across concurrent actors without locks.',
          bn: 'যেহেতু ইমিউটেবল মানের পরিবর্তন সম্ভব নয়, তাই একাধিক থ্রেডের মধ্যে শেয়ার করলেও কোনো ডেটা করাপশন বা লকের জটিলতা থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'funcs-and-the-lambda',
    title: {
      en: 'Functional Programming & Lambdas: Higher-Order Functions & Currying',
      bn: 'ফাংশনাল প্রোগ্রামিং ও ল্যাম্বডা: হায়ার-অর্ডার ফাংশন ও কারিং'
    }
  }
};
