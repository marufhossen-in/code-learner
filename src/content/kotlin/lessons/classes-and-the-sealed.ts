import type { Lesson } from '../../../lib/types';

export const ClassesAndTheSealedLesson: Lesson = {
  slug: 'classes-and-the-sealed',
  tech: 'kotlin',
  title: {
    en: 'Classes, Interfaces & Sealed Hierarchies',
    bn: 'ক্লাস, ইন্টারফেস এবং সিল্ড হায়ারার্কি'
  },
  summary: {
    en: 'Master modern object-oriented architecture and algebraic modeling in Kotlin. Contrast final-by-default classes against open extension points, leverage interface delegation via the "by" keyword, model finite domain states with sealed classes and sealed interfaces, and enforce compile-time exhaustive branching using the "when" expression without default fallbacks.',
    bn: 'Kotlin-এ আধুনিক অবজেক্ট-ওরিয়েন্টেড আর্কিটেকচার এবং অ্যালজেব্রাইক মডেলিং আয়ত্ত করুন। ডিফল্ট ফাইনাল ক্লাস বনাম ওপেন এক্সটেনশন, "by" কি-ওয়ার্ড দিয়ে ইন্টারফেস ডেলিগেশন, সিল্ড ক্লাস ও সিল্ড ইন্টারফেস দিয়ে ডোমেন স্টেট তৈরি এবং কোনো default ছাড়াই "when" এক্সপ্রেশনে কম্পাইল-টাইম পূর্ণাঙ্গ ব্রাঞ্চিং নিশ্চিতকরণ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'classes-open-inheritance-delegation-heading',
      text: {
        en: 'Final-by-Default Classes, Open Inheritance, and Interface Delegation',
        bn: 'ডিফল্ট ফাইনাল ক্লাস, ওপেন ইনহেরিটেন্স এবং ইন্টারফেস ডেলিগেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Uncontrolled subclassing often creates fragile base class problems where child classes inadvertently break parent internal invariants. In Kotlin (JetBrains\' modern statically typed programming language), all classes and methods are strictly final by default. To permit inheritance, an architect must deliberately mark a class or member with the "open" keyword. Furthermore, Kotlin champions composition over inheritance through first-class implementation delegation using the "by" keyword. By declaring a class as conforming to an interface "by" an underlying instance, the compiler synthesizes forwarding calls for all interface methods automatically, eliminating hundreds of lines of repetitive decorator boilerplate.',
        bn: 'অনিয়ন্ত্রিত সাবক্লাসিং প্রায়শই ভঙ্গুর বেস ক্লাস জটিলতা তৈরি করে, যেখানে চাইল্ড ক্লাস অজান্তেই প্যারেন্ট ক্লাসের মূল নিয়ম ভেঙে ফেলে। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ প্রতিটি ক্লাস এবং মেথড ডিফল্টভাবেই কঠোরভাবে final থাকে। ইনহেরিটেন্সের সুযোগ দিতে চাইলে একজন আর্কিটেক্টকে স্পষ্টভাবে "open" কি-ওয়ার্ডটি লিখতে হয়। তাছাড়া Kotlin "by" কি-ওয়ার্ডের মাধ্যমে ইনহেরিটেন্সের বদলে কম্পোজিশন বা ডেলিগেশনকে অগ্রাধিকার দেয়। কোনো ক্লাসে কোনো ইন্টারফেসকে ভেতরের অবজেক্টের ওপর "by" দিয়ে সমর্পণ করলে, কম্পাইলার স্বয়ংক্রিয়ভাবে সমস্ত মেথডের ফরোয়ার্ডিং কল তৈরি করে দেয়, ফলে শত শত লাইনের ডেকোরেটর কোড লেখার ঝামেলা দূর হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Sealed interface state machine architecture: 3 closed variants evaluated by an exhaustive when expression without requiring an else fallback.',
        bn: 'চিত্র ১: সিল্ড ইন্টারফেস স্টেট মেশিন আর্কিটেকচার: ৩ টি সুনির্দিষ্ট ভ্যারিয়েন্ট যা কোনো else ফলব্যাক ছাড়াই পূর্ণাঙ্গ when এক্সপ্রেশন দ্বারা মূল্যায়িত হয়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN SEALED HIERARCHIES &amp; EXHAUSTIVE WHEN</text>

  <!-- Left: Sealed Tree Root -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Closed Domain Model: sealed interface UIState</text>

    <!-- Subtype 1 -->
    <rect x="15" y="45" width="330" height="42" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="monospace">data object Loading : UIState</text>
    <text x="25" y="78" fill="#94a3b8" font-size="9" font-family="sans-serif">Singleton state instance | 0 payload bytes</text>

    <!-- Subtype 2 -->
    <rect x="15" y="95" width="330" height="42" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="115" fill="#34d399" font-size="10" font-family="monospace">data class Success(val items: List&lt;String&gt;)</text>
    <text x="25" y="128" fill="#94a3b8" font-size="9" font-family="sans-serif">Carries business payload collection</text>

    <!-- Subtype 3 -->
    <rect x="15" y="145" width="330" height="42" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="165" fill="#f87171" font-size="10" font-family="monospace">data class Error(val code: Int, val msg: String)</text>
    <text x="25" y="178" fill="#94a3b8" font-size="9" font-family="sans-serif">Carries failure diagnostics (e.g. 404 / 500)</text>

    <!-- Guarantee -->
    <text x="25" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Closed Hierarchy:</text>
    <text x="145" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">All subclasses known at compile time!</text>
  </g>

  <!-- Right: Exhaustive When Expression -->
  <g transform="translate(435, 65)">
    <rect width="370" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="370" height="30" rx="8" fill="#d97706" />
    <text x="185" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Exhaustive when Branching &amp; Smart Casts</text>

    <!-- When block -->
    <rect x="15" y="45" width="340" height="120" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">val uiText = when (state) {</text>
    <text x="35" y="83" fill="#c084fc" font-size="10" font-family="monospace">  is UIState.Loading -&gt; "Fetching..."</text>
    <text x="35" y="101" fill="#34d399" font-size="10" font-family="monospace">  is UIState.Success -&gt; "Loaded: " + state.items</text>
    <text x="35" y="119" fill="#f87171" font-size="10" font-family="monospace">  is UIState.Error -&gt; "Code: " + state.code</text>
    <text x="25" y="137" fill="#fbbf24" font-size="10" font-family="monospace">} // No else branch needed!</text>

    <!-- Compiler Enforcement -->
    <rect x="15" y="175" width="340" height="45" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="193" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Zero Missing Cases Allowed:</text>
    <text x="25" y="208" fill="#f8fafc" font-size="9" font-family="sans-serif">Adding a 4th variant causes instant compile errors until handled!</text>
  </g>

  <!-- Flow Arrow -->
  <path d="M 395 175 L 435 175" stroke="#38bdf8" stroke-width="2" />
</svg>`
    },
    {
      type: 'heading',
      id: 'sealed-classes-exhaustive-when-heading',
      text: {
        en: 'Sealed Hierarchies, Algebraic Sum Types, and Exhaustive When',
        bn: 'সিল্ড হায়ারার্কি, অ্যালজেব্রাইক সাম টাইপ এবং পূর্ণাঙ্গ When'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While standard enums represent fixed sets of uniform constant values, domain modeling often demands variants with completely distinct payload structures. Kotlin satisfies this through sealed classes and sealed interfaces. A sealed type defines a strictly closed inheritance hierarchy where all direct subclasses must be known at compile time within the same module and package. When evaluating a sealed type using a "when" expression, the compiler verifies that every single subtype is explicitly handled. This exhaustiveness eliminates the need for a default "else" branch. If an engineer later adds a new subtype to the hierarchy, the build immediately halts across all consuming modules, pinpointing every switch branch requiring an update.',
        bn: 'প্রথাগত এনাম কেবল সমজাতীয় ধ্রুবকের তালিকা প্রকাশ করলেও বাস্তব অ্যাপ্লিকেশনে এমন ভ্যারিয়েন্ট প্রয়োজন হয় যার প্রতিটি ভিন্ন ভিন্ন ডেটা বহন করে। Kotlin সিল্ড ক্লাস এবং সিল্ড ইন্টারফেসের মাধ্যমে এই চাহিদা পূরণ করে। একটি সিল্ড টাইপ একটি সম্পূর্ণ আবদ্ধ ইনহেরিটেন্স কাঠামোর প্রতিনিধিত্ব করে, যার সমস্ত সাবক্লাস একই মডিউলের ভেতর কম্পাইল-টাইমেই সংজ্ঞায়িত থাকতে হয়। কোনো "when" এক্সপ্রেশনের মধ্যে সিল্ড টাইপ পরীক্ষা করার সময় কম্পাইলার যাচাই করে যে প্রতিটি সাবটাইপ স্পষ্টভাবে হ্যান্ডেল করা হয়েছে কিনা। এই পূর্ণাঙ্গতা কোনো ঝুঁকিপূর্ণ "else" ব্রাঞ্চ লেখার প্রয়োজনীয়তা দূর করে দেয়। ভবিষ্যতে কেউ যদি নতুন কোনো সাবটাইপ যোগ করে, তবে তাৎক্ষণিকভাবে সব অসম্পূর্ণ when ব্লকে বিল্ড এরর দেখা দিয়ে ডেভেলপারকে কোড আপডেট করার পথ দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin interface delegation (by keyword), sealed interface state hierarchy, and exhaustive when branching with smart casts.',
        bn: 'Kotlin ইন্টারফেস ডেলিগেশন (by কি-ওয়ার্ড), সিল্ড ইন্টারফেস স্টেট হায়ারার্কি এবং স্মার্ট কাস্ট সহ পূর্ণাঙ্গ when ব্রাঞ্চিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Interface Delegation ("by" keyword) and Sealed Hierarchies

// 1. Interface Delegation Simulation
export interface DataRepository {
  fetchItem(id: number): string;
  saveItem(id: number, data: string): void;
}

export class CoreDatabaseRepository implements DataRepository {
  private storage = new Map<number, string>();

  public fetchItem(id: number): string {
    return this.storage.get(id) ?? 'Not Found in DB';
  }

  public saveItem(id: number, data: string): void {
    this.storage.set(id, data);
  }
}

// Simulates "class LoggingRepository(inner: DataRepository) : DataRepository by inner"
// The compiler synthesizes forwarding calls for all interface methods automatically
export class LoggingRepositoryDelegator implements DataRepository {
  constructor(private inner: DataRepository) {}

  public fetchItem(id: number): string {
    console.log('[Audit Log] Reading Item ID:', id);
    return this.inner.fetchItem(id); // Forwarded automatically
  }

  public saveItem(id: number, data: string): void {
    console.log('[Audit Log] Saving Item ID:', id, 'Payload:', data);
    this.inner.saveItem(id, data); // Forwarded automatically
  }
}

// 2. Sealed Interface State Machine Simulation (Algebraic Sum Type)
export type UIState =
  | { kind: 'Loading'; timestamp: number }
  | { kind: 'Success'; items: string[]; count: number }
  | { kind: 'Error'; httpCode: number; message: string };

export class SealedStateDispatcher {
  // Simulates exhaustive "when (state)" expression without an else fallback
  public static evaluateState(state: UIState): string {
    switch (state.kind) {
      case 'Loading':
        // Inside branch, smart cast to Loading
        return 'Status: Loading spinner displayed. Initialized at ' + state.timestamp;
      case 'Success':
        // Inside branch, smart cast to Success: access state.items and state.count directly
        return 'Status: Rendered ' + state.count + ' items successfully: ' + state.items.join(', ');
      case 'Error':
        // Inside branch, smart cast to Error: access state.httpCode and state.message
        return 'Status: Error dialog displayed! Code: ' + state.httpCode + ' (' + state.message + ')';
      default: {
        // Compile-time exhaustiveness check: causes compilation failure if a 4th variant is added!
        const _exhaustiveCheck: never = state;
        throw new Error('Unhandled sealed variant: ' + JSON.stringify(_exhaustiveCheck));
      }
    }
  }
}

// Execution Demonstration
const coreRepo = new CoreDatabaseRepository();
const loggingRepo = new LoggingRepositoryDelegator(coreRepo);

loggingRepo.saveItem(101, 'User Profile Metadata');
console.log('Read Result:', loggingRepo.fetchItem(101));

// Sealed State Machine Demonstration
const stateLoading: UIState = { kind: 'Loading', timestamp: Date.now() };
const stateSuccess: UIState = { kind: 'Success', items: ['Kotlin', 'Swift', 'Rust'], count: 3 };
const stateError: UIState = { kind: 'Error', httpCode: 404, message: 'Resource Not Found' };

console.log(SealedStateDispatcher.evaluateState(stateLoading));
console.log(SealedStateDispatcher.evaluateState(stateSuccess));
console.log(SealedStateDispatcher.evaluateState(stateError));`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Final by Default',
          def: {
            en: 'Kotlin principle where classes and functions cannot be inherited or overridden unless explicitly marked open.',
            bn: 'Kotlin নীতি যাতে স্পষ্ট "open" না লেখা পর্যন্ত কোনো ক্লাস বা মেথড ইনহেরিট করা সম্পূর্ণ নিষিদ্ধ থাকে।'
          }
        },
        {
          term: 'Interface Delegation (by)',
          def: {
            en: 'Language feature where the compiler synthesizes forwarding methods for an interface to an underlying instance.',
            bn: 'সুবিধা যেখানে কম্পাইলার ইন্টারফেসের সমস্ত মেথডকে ভেতরের নির্দিষ্ট অবজেক্টে স্বয়ংক্রিয়ভাবে ফরোয়ার্ড করে।'
          }
        },
        {
          term: 'Sealed Interface',
          def: {
            en: 'Closed interface permitting a known, finite set of subclasses declared within the same compilation module.',
            bn: 'আবদ্ধ ইন্টারফেস যার সমস্ত সাবক্লাস একই মডিউলের ভেতর কম্পাইল-টাইমেই পূর্বনির্ধারিত থাকে।'
          }
        },
        {
          term: 'Exhaustive When',
          def: {
            en: 'Pattern matching expression requiring all sealed variants to be handled, eliminating the need for an else branch.',
            bn: 'প্যাটার্ন ম্যাচিং এক্সপ্রেশন যা সিল্ড ক্লাসের প্রতিটি কেস নিশ্চিত করে কোনো ঝুঁকিপূর্ণ else ছাড়াই কোড চালায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'kotlin-final-by-default-design-ex1',
      kind: 'mcq',
      topic: 'classes-final-by-default-philosophy',
      question: {
        en: 'Why did the creators of Kotlin make classes and member functions "final by default" rather than open?',
        bn: 'Kotlin নির্মাতারা কেন ক্লাস ও মেথডগুলোকে মুক্ত রাখার বদলে "ডিফল্টভাবে final" করার সিদ্ধান্ত নিয়েছিলেন?'
      },
      options: [
        {
          en: 'To prevent the fragile base class problem by enforcing deliberate architectural decisions through the explicit "open" keyword for inheritance',
          bn: 'ভঙ্গুর বেস ক্লাসের ত্রুটি এড়াতে এবং ইনহেরিটেন্সের সুযোগ দেওয়ার জন্য স্পষ্ট "open" কি-ওয়ার্ড লেখার বাধ্যবাধকতা নিশ্চিত করতে'
        },
        {
          en: 'Because final classes run 100 times slower on Google Cloud',
          bn: 'কারণ ফাইনাল ক্লাস গুগল ক্লাউডে ১০০ গুণ ধীরগতিতে চলে'
        },
        {
          en: 'Because open classes can only store 16-bit integer values',
          bn: 'কারণ ওপেন ক্লাস কেবল ১৬-বিট পূর্ণসংখ্যা মান সংরক্ষণ করতে পারে'
        },
        {
          en: 'Final by default was deprecated in Kotlin 1.6',
          bn: 'Kotlin ১.৬ সংস্করণে ফাইনাল বাই ডিফল্ট বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Kotlin adheres to Effective Java: "Design and document for inheritance or else prohibit it".',
        bn: 'অনাকাঙ্ক্ষিত ইনহেরিটেন্স রুখে কোড সুরক্ষিত রাখাই এর মূল লক্ষ্য।'
      },
      explanation: {
        en: 'In Java, open classes are often subclassed carelessly, violating internal invariants. Kotlin forces developers to mark classes open intentionally when subclassing is safe.',
        bn: 'এর ফলে প্যারেন্ট ক্লাসের নিয়ম ভেঙে সিস্টেম অচল হওয়ার হাত থেকে রক্ষা পায়।'
      }
    },
    {
      id: 'interface-delegation-by-keyword-ex2',
      kind: 'mcq',
      topic: 'interface-delegation-by-keyword-boilerplate-reduction',
      question: {
        en: 'How does Kotlin\'s "by" keyword simplify implementing decorator and proxy design patterns (e.g. "class AuditList(inner: List<T>) : List<T> by inner")?',
        bn: 'Kotlin-এর "by" কি-ওয়ার্ড কীভাবে ডেকোরেটর ও প্রক্সি প্যাটার্ন সহজ করে (যেমন "class AuditList(inner: List<T>) : List<T> by inner")?'
      },
      options: [
        {
          en: 'The compiler automatically synthesizes forwarding calls for all interface methods to the inner instance, letting developers override only the methods they need',
          bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে সমস্ত ইন্টারফেস মেথডের ফরোয়ার্ডিং কল তৈরি করে ভেতরের অবজেক্টে পাঠায়, ফলে ডেভেলপারকে কেবল তার প্রয়োজনীয় মেথডটি ওভাররাইড করলেই চলে'
        },
        {
          en: 'It deletes the inner list after 1 second of inactivity',
          bn: '১ সেকেন্ড নিষ্ক্রিয় থাকার পর এটি ভেতরের লিস্টটি মুছে ফেলে'
        },
        {
          en: 'It encrypts the entire class file using an RSA 4096-bit key',
          bn: 'এটি সম্পূর্ণ ক্লাস ফাইলকে একটি RSA ৪০৯৬-বিট কি দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'The "by" keyword is only allowed inside Android Activity components',
          bn: '"by" কি-ওয়ার্ড কেবল অ্যান্ড্রয়েড অ্যাক্টিভিটির ভেতর অনুমোদিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "by" keyword delegates interface implementation to an internal object.',
        bn: 'নিজে সব কোড বারবার না লিখে কম্পাইলারকে দিয়ে কাজ করিয়ে নেওয়ার সেরা কৌশল।'
      },
      explanation: {
        en: 'Interface delegation eliminates tens or hundreds of forwarding methods. The developer writes zero boilerplate while gaining a fully conforming decorator object.',
        bn: 'এর মাধ্যমে কোনো বাড়তি কোড না লিখে সহজেই সম্পূর্ণ ডেকোরেটর ক্লাস তৈরি করা যায়।'
      }
    },
    {
      id: 'sealed-types-exhaustive-when-ex3',
      kind: 'mcq',
      topic: 'sealed-classes-exhaustive-when-no-else',
      question: {
        en: 'What unique compile-time guarantee does the compiler enforce when evaluating a sealed class or sealed interface inside a "when" expression?',
        bn: 'একটি "when" এক্সপ্রেশনের ভেতরে সিল্ড ক্লাস বা সিল্ড ইন্টারফেস ব্যবহারের সময় কম্পাইলার কোন অনন্য নিরাপত্তা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'Exhaustiveness: every known subtype must be covered in a branch, allowing safe omission of the "else" clause and alerting developers if a new variant is added',
          bn: 'পূর্ণাঙ্গতা: প্রতিটি পরিচিত সাবটাইপকে অবশ্যই একটি ব্রাঞ্চে হ্যান্ডেল করতে হবে, যা "else" ক্লজ বাদ দিতে সাহায্য করে এবং নতুন সাবটাইপ যোগ করলে তাৎক্ষণিক সতর্কতা দেয়'
        },
        {
          en: 'It converts the expression into a high-speed SQLite database query',
          bn: 'এটি এক্সপ্রেশনটিকে একটি দ্রুতগতির এসকিউএল কোয়েরিতে রূপান্তর করে'
        },
        {
          en: 'It runs all branches simultaneously on multiple CPU cores',
          bn: 'এটি সমস্ত ব্রাঞ্চকে একসাথে একাধিক সিপিইউ কোরে চালিয়ে দেয়'
        },
        {
          en: 'when expressions cannot be used with sealed classes',
          bn: 'সিল্ড ক্লাসের সাথে কখনোই when এক্সপ্রেশন ব্যবহার করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sealed hierarchies enable exhaustive matching without an else branch.',
        bn: 'সব বিকল্প পূরণ করা বাধ্যতামূলক হওয়ায় কোনো কেস বাদ পড়ার ভয় থাকে না।'
      },
      explanation: {
        en: 'Because all subtypes are known at compile time, the compiler proves completeness. Omitting a case causes a compilation failure, preventing unhandled runtime states.',
        bn: 'ভবিষ্যতে নতুন কেস যোগ করলেও কম্পাইলার সাথে সাথে সব অসমাপ্ত কোড দেখিয়ে দেয়।'
      }
    },
    {
      id: 'sealed-class-vs-enum-difference-ex4',
      kind: 'mcq',
      topic: 'sealed-class-vs-enum-state-payloads',
      question: {
        en: 'What is the core architectural difference between a Kotlin "enum class" and a "sealed class"?',
        bn: 'Kotlin-এ একটি "enum class" এবং একটি "sealed class"-এর মধ্যে মূল স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Enum cases represent single uniform instances with identical property shapes; sealed subclasses are full distinct types that can hold different properties, states, and instances',
          bn: 'এনামের কেসগুলো একই বৈশিষ্ট্যের একক মান প্রকাশ করে; আর সিল্ড সাবক্লাসগুলো সম্পূর্ণ স্বতন্ত্র টাইপ যা ভিন্ন ভিন্ন প্রোপার্টি, স্টেট ও মাল্টিপল ইনস্ট্যান্স ধারণ করতে পারে'
        },
        {
          en: 'Enum classes can only be used on 32-bit hardware architectures',
          bn: 'এনাম ক্লাস কেবল ৩২-বিট হার্ডওয়্যার আর্কিটেকচারে ব্যবহার করা যায়'
        },
        {
          en: 'Sealed classes cannot declare member methods',
          bn: 'সিল্ড ক্লাসে কোনো নিজস্ব মেথড ঘোষণা করা যায় না'
        },
        {
          en: 'There is zero difference between enums and sealed classes',
          bn: 'এনাম এবং সিল্ড ক্লাসের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Enums are homogenous singletons; sealed classes can have distinct subclasses with custom payloads.',
        bn: 'এনামের সবার গঠন এক, কিন্তু সিল্ড ক্লাসের প্রতিটি কেস সম্পূর্ণ আলাদা ডেটা বহন করতে পারে।'
      },
      explanation: {
        en: 'Sealed classes are algebraic sum types. One variant can be an empty singleton object while another carries a complex list or database entity.',
        bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের জটিল স্টেট যেমন লোডিং, সাকসেস বা এরর চমৎকারভাবে ফুটিয়ে তোলা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-classes-and-the-sealed',
    title: {
      en: 'Kotlin Classes & Sealed Hierarchies Quiz',
      bn: 'Kotlin ক্লাস এবং সিল্ড হায়ারার্কি কুইজ'
    },
    questions: [
      {
        id: 'quiz-sealed-interface-multiple-inheritance',
        kind: 'mcq',
        topic: 'sealed-interface-multiple-hierarchy-membership',
        question: {
          en: 'What architectural flexibility did "sealed interfaces" (introduced in Kotlin 1.5) bring over traditional sealed classes?',
          bn: 'ঐতিহ্যবাহী সিল্ড ক্লাসের তুলনায় "সিল্ড ইন্টারফেস" (Kotlin ১.৫-এ প্রবর্তিত) কোন স্থাপত্যিক নমনীয়তা নিয়ে এসেছে?'
        },
        options: [
          {
            en: 'A data class or object can conform to multiple sealed interfaces simultaneously, escaping the single-class inheritance restriction of sealed classes',
            bn: 'একটি ডেটা ক্লাস বা অবজেক্ট একসাথে একাধিক সিল্ড ইন্টারফেস বাস্তবায়ন করতে পারে, যা সিল্ড ক্লাসের একক ইনহেরিটেন্সের সীমাবদ্ধতা ভেঙে দেয়'
          },
          {
            en: 'They eliminate the need to write unit tests for the application',
            bn: 'তারা অ্যাপ্লিকেশনের জন্য ইউনিট টেস্ট লেখার প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'They convert all functions into 64-bit integer values',
            bn: 'তারা সমস্ত ফাংশনকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'Sealed interfaces were deprecated in Kotlin 2.0',
            bn: 'Kotlin ২.০ সংস্করণে সিল্ড ইন্টারফেস বাতিল করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Interfaces support multiple inheritance; a class can implement multiple sealed interfaces.',
          bn: 'একাধিক সিল্ড ইন্টারফেস একসাথে গ্রহণ করে ডেটা ক্লাসের বহুবিধ পরিচয় তৈরি করা যায়।'
        },
        explanation: {
          en: 'Because a class can only extend one superclass, sealed classes restricted modeling. Sealed interfaces allow a type to belong to multiple closed domain state machines cleanly.',
          bn: 'ফলে জটিল আর্কিটেকচারে একই মডেলকে বিভিন্ন ডোমেন স্টেটে ব্যবহার করা অনেক সহজ হয়।'
        }
      },
      {
        id: 'quiz-data-object-singleton-sealed-branch',
        kind: 'mcq',
        topic: 'data-object-singleton-sealed-branches',
        question: {
          en: 'Why is declaring stateless sealed variants as "data object" (e.g. "data object Loading : UIState") preferred over plain "object" in modern Kotlin?',
          bn: 'আধুনিক Kotlin-এ স্টেটলেস সিল্ড ভ্যারিয়েন্টগুলোকে সাধারণ "object"-এর বদলে "data object" (যেমন "data object Loading : UIState") হিসেবে ঘোষণা করা কেন শ্রেয়?'
        },
        options: [
          {
            en: 'It automatically synthesizes a clean, human-readable "toString()" returning the object name ("Loading") instead of printing raw memory addresses in logs',
            bn: 'এটি স্বয়ংক্রিয়ভাবে একটি পরিচ্ছন্ন ও অর্থপূর্ণ "toString()" তৈরি করে যা লগে অবজেক্টের অবোধ্য মেমোরি ঠিকানার বদলে সরাসরি তার নাম ("Loading") প্রদর্শন করে'
          },
          {
            en: 'It doubles the network speed of the mobile device',
            bn: 'এটি মোবাইল ডিভাইসের নেটওয়ার্কের গতি দ্বিগুণ করে'
          },
          {
            en: 'It encrypts the object on the hard drive',
            bn: 'এটি হার্ড ড্রাইভে অবজেক্টটিকে এনক্রিপ্ট করে'
          },
          {
            en: 'data object is only available on iOS devices',
            bn: 'data object কেবল iOS ডিভাইসে উপলব্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'data object provides clean toString() for singletons in logs and debugging.',
          bn: 'লগিং বা ডিবাগিংয়ে মেমোরি ঠিকানার বদলে সুন্দর নাম দেখতে এটি সেরা উপায়।'
        },
        explanation: {
          en: 'Plain objects print memory references (e.g. Loading@3f4a). Marking them as data object produces clean toString() outputs, greatly improving debugging and analytics logs.',
          bn: 'এর ফলে লগে অবজেক্টের আসল নাম পরিষ্কারভাবে ফুটে ওঠে এবং ডিবাগিং সহজ হয়।'
        }
      },
      {
        id: 'quiz-companion-object-factory-pattern',
        kind: 'mcq',
        topic: 'companion-object-factory-initialization',
        question: {
          en: 'How do "companion objects" replace static methods from Java while preserving object-oriented polymorphism in Kotlin?',
          bn: 'Kotlin-এ "companion object" কীভাবে অবজেক্ট-ওরিয়েন্টেড পলিমরফিজম বজায় রেখে জাভার স্ট্যাটিক মেথডের শূন্যতা পূরণ করে?'
        },
        options: [
          {
            en: 'A companion object is a genuine singleton instance tied to the enclosing class that can implement interfaces, hold state, and provide named factory methods',
            bn: 'কম্প্যানিয়ন অবজেক্ট হলো ক্লাসের সাথে যুক্ত একটি বাস্তব একক অবজেক্ট যা ইন্টারফেস বাস্তবায়ন করতে পারে, নিজস্ব স্টেট রাখতে পারে এবং ফ্যাক্টরি মেথড হিসেবে কাজ করে'
          },
          {
            en: 'Companion objects run exclusively inside web browsers',
            bn: 'কম্প্যানিয়ন অবজেক্ট কেবল ওয়েব ব্রাউজারের ভেতরে চলে'
          },
          {
            en: 'They convert all class properties into SQL database columns',
            bn: 'তারা সমস্ত ক্লাস প্রোপার্টিকে এসকিউএল ডাটাবেজ কলামে রূপান্তর করে'
          },
          {
            en: 'Companion objects require manual garbage collection calls',
            bn: 'কম্প্যানিয়ন অবজেক্টের জন্য ম্যানুয়ালি মেমোরি মুক্ত করতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Companion objects are real objects that can implement interfaces and factory patterns.',
          bn: 'সাধারণ স্ট্যাটিক ক্লাসের চেয়ে এটি অনেক বেশি শক্তিশালী কারণ এটি ইন্টারফেস মানতে পারে।'
        },
        explanation: {
          en: 'Unlike bare static methods in Java, companion objects are first-class objects. They can implement factory interfaces (e.g. Factory<T>), unlocking polymorphic initialization.',
          bn: 'এর মাধ্যমে পরিচ্ছন্ন ফ্যাক্টরি প্যাটার্ন ও পলিমরফিক অবজেক্ট তৈরি নিশ্চিত হয়।'
        }
      },
      {
        id: 'quiz-smart-cast-in-when-arms',
        kind: 'mcq',
        topic: 'smart-cast-in-when-arms-type-promotion',
        question: {
          en: 'When matching a sealed variant with "is UIState.Success -> ...", how does Kotlin\'s type system treat the variable inside that specific arm?',
          bn: '"is UIState.Success -> ..."-এর মাধ্যমে সিল্ড ভ্যারিয়েন্ট পরীক্ষার সময় Kotlin টাইপ সিস্টেম সেই নির্দিষ্ট ব্রাঞ্চের ভেতর ভ্যারিয়েবলটিকে কীভাবে দেখে?'
        },
        options: [
          {
            en: 'It automatically smart-casts the variable to UIState.Success, enabling direct access to its specific properties without manual type casting (as)',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ভ্যারিয়েবলটিকে UIState.Success-এ স্মার্ট কাস্ট করে, ফলে কোনো ম্যানুয়াল টাইপ কাস্টিং (as) ছাড়াই তার নিজস্ব প্রোপার্টি অ্যাক্সেস করা যায়'
          },
          {
            en: 'It converts the variable into a 32-bit floating point number',
            bn: 'এটি ভ্যারিয়েবলটিকে একটি ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'It deletes the variable from memory immediately',
            bn: 'এটি মেমোরি থেকে ভ্যারিয়েবলটিকে তৎক্ষণাৎ মুছে ফেলে'
          },
          {
            en: 'Smart casting inside when is not permitted in safe Kotlin',
            bn: 'নিরাপদ Kotlin-এ when-এর ভেতর স্মার্ট কাস্ট অনুমোদিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The compiler smart-casts the matched type inside the corresponding when arm.',
          bn: 'শর্ত মেলার সাথে সাথেই কম্পাইলার টাইপ বদলে দেয় যাতে সরাসরি ডেটা পড়া যায়।'
        },
        explanation: {
          en: 'Inside each when branch, the compiler narrows the general sealed type to the concrete subtype, eliminating cumbersome boilerplate casts.',
          bn: 'এর ফলে অতিরিক্ত কাস্টিং কোড না লিখে সরাসরি সাবক্লাসের ফিল্ডগুলো ব্যবহার করা সম্ভব।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'collections-and-the-sequence',
    title: {
      en: 'Collections, Pipelines & Lazy Sequences',
      bn: 'কালেকশন, পাইপলাইন এবং লেজি সিকোয়েন্স'
    }
  }
};
