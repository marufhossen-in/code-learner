import type { Lesson } from '../../../lib/types';

export const DataAndTheClassLesson: Lesson = {
  slug: 'data-and-the-class',
  tech: 'lang-python',
  title: {
    en: 'Dataclasses, Immutability & Structural Pattern Matching',
    bn: 'ডেটাক্লাস, ইমিউটেবিলিটি এবং প্যাটার্ন ম্যাচিং'
  },
  summary: {
    en: 'Master modern object modeling in Python: eliminate constructor boilerplate using the @dataclass decorator, enforce immutability with frozen=True, leverage field factories and __post_init__ validation, and destructure complex domain models using Python 3.10 match/case structural pattern matching.',
    bn: 'পাইথনে আধুনিক অবজেক্ট মডেলিং আয়ত্ত করুন: @dataclass দিয়ে কনস্ট্রাক্টরের অতিরিক্ত কোড বর্জন, frozen=True দিয়ে ইমিউটেবিলিটি প্রয়োগ, ফিল্ড ফ্যাক্টরি ও __post_init__ ভ্যালিডেশন এবং পাইথন ৩.১০ ম্যাচ/কেস দিয়ে স্ট্রাকচারাল প্যাটার্ন ম্যাচিং।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'dataclass-synthesis-heading',
      text: {
        en: 'The @dataclass Decorator, Auto-Generated Dunders, and Field Factories',
        bn: '@dataclass ডেকোরেটর, স্বয়ংক্রিয় ডান্ডার মেথড এবং ফিল্ড ফ্যাক্টরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Python (the high-level object-oriented language), writing traditional domain classes requires repetitive boilerplate: manually implementing __init__, __repr__, and __eq__ across every entity. The standard library @dataclass decorator eliminates this overhead by reading type-annotated fields and synthesizing these dunder methods automatically. When mutable fields like lists or dictionaries are declared, developers must assign field(default_factory=list) to prevent the dangerous mutable default bug where all instances share a single list. Adding frozen=True enforces strict immutability, turning instances into hashable entities safe for dictionary keys and sets.',
        bn: 'পাইথন (উচ্চ-স্তরের অবজেক্ট-ওরিয়েন্টেড ভাষা) এ সাধারণ ক্লাস তৈরি করতে গেলে প্রতিটি ক্লাসে বারবার __init__, __repr__ এবং __eq__ এর মতো মেথডগুলো ম্যানুয়ালি লিখতে হয়। পাইথনের স্ট্যান্ডার্ড লাইব্রেরির @dataclass ডেকোরেটর ফিল্ডের টাইপ অ্যানোটেশন পড়ে স্বয়ংক্রিয়ভাবে এই ডান্ডার মেথডগুলো তৈরি করে দেয়। লিস্ট বা ডিকশনারির মতো মিউটেবল ডেটার ক্ষেত্রে field(default_factory=list) ব্যবহার করা আবশ্যক যাতে সব অবজেক্ট ভুলবশত একই মেমোরি শেয়ার না করে। আর frozen=True ফ্ল্যাগ যুক্ত করলে অবজেক্টগুলো সম্পূর্ণ অপরিবর্তনীয় ও হ্যাশযোগ্য হয়ে ওঠে, ফলে এদের সহজে সেটে বা ডিকশনারির কি হিসেবে ব্যবহার করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete dataclass lifecycle from field annotation compilation to Python 3.10 structural pattern matching.',
        bn: 'চিত্র ১: ফিল্ড অ্যানোটেশন সংকলন থেকে শুরু করে পাইথন ৩.১০ স্ট্রাকচারাল প্যাটার্ন ম্যাচিং পর্যন্ত ডেটাক্লাসের কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PYTHON DATACLASS SYNTHESIS &amp; PATTERN MATCHING</text>

  <!-- Step 1: Annotated Class -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Definition</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">@dataclass(frozen=True)</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">class Order:</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">id: int; total: float</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Type-Annotated</text>
  </g>

  <!-- Step 2: Auto-Generated Dunders -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Auto Synthesizer</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">__init__(self, id, ...)</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">__repr__ -&gt; "Order(...)"</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">__eq__ &amp; __hash__</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Boilerplate</text>
  </g>

  <!-- Step 3: Instantiation & Validation -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. __post_init__</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">def __post_init__(self):</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">  if self.total &lt; 0: err</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Immutable Invariants</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Guaranteed Validity</text>
  </g>

  <!-- Step 4: Match / Case Destructure -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Pattern Matching</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">match order:</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace"> case Order(total=t):</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Structural Bind</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Clean Domain Logic</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'structural-pattern-matching-heading',
      text: {
        en: 'Structural Pattern Matching (match/case) in Python 3.10+',
        bn: 'পাইথন ৩.১০+ এ স্ট্রাকচারাল প্যাটার্ন ম্যাচিং (match/case)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Python 3.10 introduced Structural Pattern Matching via the match and case keywords, offering far greater expressive power than basic C-style switch statements. Rather than simply comparing scalar values, pattern matching inspects and destructures the internal shape of data structures. Developers can unpack sequences (case [first, *rest]:), match dictionary keys, destructure dataclass attributes (case Order(id=i, total=t) if t > 1000:), and bind wildcard fallbacks (case _:), replacing brittle isinstance checking trees with declarative pattern dispatch.',
        bn: 'পাইথন ৩.১০ সংস্করণে match এবং case কিওয়ার্ডের মাধ্যমে স্ট্রাকচারাল প্যাটার্ন ম্যাচিং প্রবর্তিত হয়েছে, যা সাধারণ switch স্টেটমেন্টের চেয়ে অনেক বেশি শক্তিশালী। এটি কেবল সংখ্যা মেলানোর কাজ না করে ডেটা স্ট্রাকচারের অভ্যন্তরীণ রূপ পরীক্ষা ও ডিস্ট্রাকচার করতে পারে। ডেভেলপাররা সিকোয়েন্স ডিস্ট্রাকচার (case [first, *rest]:), ডিকশনারির নির্দিষ্ট কি মেলানো, ডেটাক্লাসের প্রপার্টি ফিল্টার (case Order(id=i, total=t) if t > 1000:) এবং ওয়াইল্ডকার্ড ডিফল্ট (case _:) সহজেই পরিচালনা করতে পারেন, যা পুরানো isinstance চেকের বিকল্প হিসেবে চমৎকার কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python frozen dataclass immutability and structural pattern matching.',
        bn: 'ফ্রোজেন ডেটাক্লাসের ইমিউটেবিলিটি এবং স্ট্রাকচারাল প্যাটার্ন ম্যাচিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python @dataclass and Structural Pattern Matching

// 1. Simulating Frozen Dataclass: @dataclass(frozen=True)
export class OrderDataClass {
  public readonly id: number;
  public readonly customer: string;
  public readonly total: number;
  public readonly tags: readonly string[];

  constructor(id: number, customer: string, total: number, tags: string[] = []) {
    if (total < 0) throw new Error('ValueError: total cannot be negative');
    this.id = id;
    this.customer = customer;
    this.total = total;
    this.tags = Object.freeze([...tags]); // Field factory clone
    Object.freeze(this); // Immutability guarantee
  }
}

// 2. Simulating Python 3.10 match/case pattern matching
export function processOrderEnvelope(order: OrderDataClass): string {
  // Simulating: match order:
  //   case Order(total=t) if t > 1000: ...
  //   case Order(customer="VIP"): ...
  //   case _: ...
  if (order.total > 1000) {
    return \`VIP Express Priority: Order #\${order.id} with $\${order.total}\`;
  }
  if (order.customer === 'VIP') {
    return \`Loyalty Member Processing: Order #\${order.id}\`;
  }
  return \`Standard Dispatch: Order #\${order.id}\`;
}

// Executing demonstrations
const premiumOrder = new OrderDataClass(101, 'Farhan', 1500, ['electronics', 'urgent']);
const standardOrder = new OrderDataClass(102, 'Karim', 250);

console.log('Premium Route:', processOrderEnvelope(premiumOrder));
// "VIP Express Priority: Order #101 with $1500"

console.log('Standard Route:', processOrderEnvelope(standardOrder));
// "Standard Dispatch: Order #102"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@dataclass',
          def: {
            en: 'Standard library decorator generating __init__, __repr__, and __eq__ methods automatically from type annotations.',
            bn: 'স্ট্যান্ডার্ড লাইব্রেরির ডেকোরেটর যা টাইপ অ্যানোটেশন থেকে স্বয়ংক্রিয়ভাবে কনস্ট্রাক্টর ও সমতা মেথড তৈরি করে।'
          }
        },
        {
          term: 'Field Factory',
          def: {
            en: 'dataclasses.field(default_factory=...) assigning fresh mutable instances to each newly constructed object.',
            bn: 'বিশেষ ফিল্ড কনফিগারেশন যা প্রতিটি অবজেক্টকে আলাদা মিউটেবল ডেটা বরাদ্দ করে মেমোরি শেয়ারিং সমস্যা দূর করে।'
          }
        },
        {
          term: 'Frozen Dataclass',
          def: {
            en: 'Dataclass decorated with frozen=True forbidding attribute mutation and generating an immutable __hash__ method.',
            bn: 'বিশেষ ডেটাক্লাস যা প্রপার্টি পরিবর্তন নিষিদ্ধ করে এবং অবজেক্টকে স্থায়ীভাবে হ্যাশযোগ্য বানিয়ে তোলে।'
          }
        },
        {
          term: 'Structural Pattern Matching',
          def: {
            en: 'Control-flow statement (match/case) destructuring and matching data structures by shape and value patterns.',
            bn: 'নিয়ন্ত্রণ কাঠামো (match/case) যা ডেটার অভ্যন্তরীণ গঠন ও বৈশিষ্ট্যের ওপর ভিত্তি করে কোড পরিচালনা করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dataclass-mutable-default-factory-ex1',
      kind: 'mcq',
      topic: 'dataclass-field-default-factory',
      question: {
        en: 'Why does @dataclass raise a ValueError if you declare "items: list[str] = []" as a default field?',
        bn: '@dataclass ক্লাসে "items: list[str] = []" ডিফল্ট হিসেবে লিখলে পাইথন কেন ValueError তৈরি করে?'
      },
      options: [
        {
          en: 'A mutable list default would be shared across all class instances; Python requires field(default_factory=list) instead',
          bn: 'মিউটেবল লিস্ট সব অবজেক্টের মাঝে ভুলবশত শেয়ার হয়ে যায়; পাইথনে এর বদলে field(default_factory=list) লেখা আবশ্যক'
        },
        {
          en: 'Lists are not supported inside dataclasses',
          bn: 'ডেটাক্লাসের ভেতর লিস্ট ব্যবহার করা যায় না'
        },
        {
          en: 'Empty lists consume 500 megabytes of memory',
          bn: 'খালি লিস্ট ৫০০ মেগাবাইট মেমোরি খরচ করে'
        },
        {
          en: 'The compiler cannot convert lists into strings',
          bn: 'কম্পাইলার লিস্টকে স্ট্রিংয়ে রূপান্তর করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mutable defaults share reference identity across all object instances unless instantiated via a factory.',
        bn: 'ফ্যাক্টরি ছাড়া সরাসরি মিউটেবল ডিফল্ট দিলে সব অবজেক্ট একই মেমোরি শেয়ার করার মারাত্মক ভুল ঘটে।'
      },
      explanation: {
        en: 'Python disallows mutable defaults in dataclasses to prevent cross-instance contamination, enforcing default_factory.',
        bn: 'অবজেক্টের মাঝে তথ্যের সংঘাত রোধ করতে পাইথন ডেটাক্লাসে সরাসরি লিস্ট বা ডিকশনারি ডিফল্ট নিষিদ্ধ করেছে।'
      }
    },
    {
      id: 'frozen-dataclass-attribute-mutation-ex2',
      kind: 'mcq',
      topic: 'frozen-dataclass-immutability',
      question: {
        en: 'What occurs if an application attempts to execute user.name = "Rahim" on a dataclass decorated with @dataclass(frozen=True)?',
        bn: '@dataclass(frozen=True) যুক্ত ক্লাসে user.name = "Rahim" লেখার চেষ্টা করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Python raises FrozenInstanceError: cannot assign to field "name"',
          bn: 'পাইথন সাথে সাথে FrozenInstanceError: cannot assign to field "name" এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'The assignment succeeds silently without notice',
          bn: 'কোনো ওয়ার্নিং ছাড়াই মানটি পরিবর্তিত হয়ে যায়'
        },
        {
          en: 'The object is deleted from memory',
          bn: 'অবজেক্টটি মেমোরি থেকে মুছে যায়'
        },
        {
          en: 'It converts the dataclass into a tuple',
          bn: 'এটি ডেটাক্লাসটিকে একটি টিউপলে বদলে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'frozen=True overrides __setattr__ to throw FrozenInstanceError upon modification attempts.',
        bn: 'frozen=True প্রপার্টিতে কোনো পরিবর্তন করতে গেলে FrozenInstanceError তৈরি করে।'
      },
      explanation: {
        en: 'Frozen dataclasses are immutable; any attempt to mutate attributes after initialization raises FrozenInstanceError.',
        bn: 'ফ্রোজেন ডেটাক্লাস অপরিবর্তনীয় হওয়ায় তৈরির পর প্রপার্টি বদলাতে গেলে এক্সেপশন দেখা দেয়।'
      }
    },
    {
      id: 'match-case-wildcard-pattern-ex3',
      kind: 'mcq',
      topic: 'match-case-wildcard-default',
      question: {
        en: 'Which symbol serves as the catch-all wildcard pattern matching any unmatched value in a Python 3.10 match/case block?',
        bn: 'পাইথন ৩.১০ match/case ব্লকে আগের কোনো কেস না মিললে ডিফল্ট হিসেবে কোন প্রতীকটি ব্যবহার করা হয়?'
      },
      options: [
        { en: 'The underscore character (case _:)', bn: 'আন্ডারস্কোর প্রতীক (case _:)' },
        { en: 'The asterisk symbol (case *:)', bn: 'অ্যাস্টেরিস্ক প্রতীক (case *:)' },
        { en: 'The default keyword (case default:)', bn: 'default কিওয়ার্ড (case default:)' },
        { en: 'The else keyword (case else:)', bn: 'else কিওয়ার্ড (case else:)' }
      ],
      answer: 0,
      hint: {
        en: 'The underscore (_) is Python\'s wildcard pattern, matching anything without binding the value.',
        bn: 'আন্ডারস্কোর (_) হলো পাইথনের ওয়াইল্ডকার্ড যা যেকোনো অমিল মানের ক্ষেত্রে কাজ করে।'
      },
      explanation: {
        en: 'case _: acts as the universal fallback pattern in structural pattern matching.',
        bn: 'case _: প্যাটার্ন ম্যাচিংয়ের সার্বজনীন ফলব্যাক হিসেবে ডিফল্ট কেসের কাজ সম্পন্ন করে।'
      }
    },
    {
      id: 'post-init-validation-hook-ex4',
      kind: 'mcq',
      topic: 'dataclass-post-init-hook',
      question: {
        en: 'When does the __post_init__ method execute in a dataclass lifecycle?',
        bn: 'একটি ডেটাক্লাসের লাইফসাইকেলে __post_init__ মেথডটি কখন কার্যকর হয়?'
      },
      options: [
        {
          en: 'Immediately after the auto-generated __init__ completes, allowing custom data validation and computed attributes',
          bn: 'স্বয়ংক্রিয়ভাবে তৈরি হওয়া __init__ শেষ হওয়ার ঠিক পরপরই, যা ডেটা যাচাই ও নতুন মান গণনার সুযোগ দেয়'
        },
        {
          en: 'Before memory is allocated for the instance',
          bn: 'ইনস্ট্যান্সের মেমোরি বরাদ্দের পূর্বে'
        },
        {
          en: 'Only when the instance is deleted via garbage collection',
          bn: 'কেবল যখন অবজেক্টটি ডিলিট করা হয়'
        },
        {
          en: 'When the class file is written to disk',
          bn: 'যখন ক্লাস ফাইলটি ডিস্কে সেভ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '__post_init__ is called right after the generated __init__ assigns constructor arguments.',
        bn: '__post_init__ তৈরি হওয়া __init__ মেথডটি প্রপার্টিতে মান বসানোর ঠিক পরেই চালু হয়।'
      },
      explanation: {
        en: '__post_init__ runs immediately after __init__, giving developers a hook for invariant assertions and calculated fields.',
        bn: '__post_init__ মেথড প্রাথমিক প্রপার্টিগুলো তৈরি হওয়ার পরই ডেটার সত্যতা যাচাই করার সুযোগ দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-data-and-the-class',
    title: {
      en: 'Python Dataclasses and Pattern Matching Quiz',
      bn: 'পাইথন ডেটাক্লাস এবং প্যাটার্ন ম্যাচিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-dataclasses-asdict-conversion',
        kind: 'mcq',
        topic: 'dataclasses-asdict-utility',
        question: {
          en: 'Which standard utility function converts a dataclass instance (including nested dataclasses) into a pure Python dictionary?',
          bn: 'নেস্টেড ডেটাক্লাস সহ একটি ডেটাক্লাস অবজেক্টকে খাঁটি পাইথন ডিকশনারিতে রূপান্তর করার জন্য কোন ফাংশনটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'dataclasses.asdict(instance)', bn: 'dataclasses.asdict(instance)' },
          { en: 'dict(instance)', bn: 'dict(instance)' },
          { en: 'instance.to_dict()', bn: 'instance.to_dict()' },
          { en: 'json.loads(instance)', bn: 'json.loads(instance)' }
        ],
        answer: 0,
        hint: {
          en: 'dataclasses module provides asdict() for deep recursive dictionary conversion.',
          bn: 'dataclasses মডিউলে থাকা asdict() ফাংশন গভীরভাবে ডিকশনারিতে রূপান্তর করে।'
        },
        explanation: {
          en: 'asdict() recursively converts dataclass objects and inner collections into primitive dictionaries.',
          bn: 'asdict() সম্পূর্ণ ডেটাক্লাস এবং তার ভেতরের উপাদানগুলোকে সাধারণ ডিকশনারিতে বদলে দেয়।'
        }
      },
      {
        id: 'quiz-match-case-guard-conditions',
        kind: 'mcq',
        topic: 'pattern-matching-guard-clauses',
        question: {
          en: 'What is a "guard" clause in Python structural pattern matching (e.g. "case Point(x, y) if x == y:")?',
          bn: 'পাইথন স্ট্রাকচারাল প্যাটার্ন ম্যাচিংয়ে "guard" ক্লজ (যেমন "case Point(x, y) if x == y:") কী কাজ করে?'
        },
        options: [
          {
            en: 'An additional boolean expression evaluated after pattern structural destructuring succeeds; the case only matches if the guard evaluates to True',
            bn: 'একটি অতিরিক্ত শর্ত যা প্যাটার্ন মেলার পর যাচাই করা হয়; গার্ডের মান True হলেই কেবল সংশ্লিষ্ট কেসটি কার্যকর হয়'
          },
          {
            en: 'A security lock that encrypts the pattern',
            bn: 'একটি সিকিউরিটি লক যা প্যাটার্নকে এনক্রিপ্ট করে'
          },
          {
            en: 'A syntax error in Python 3.10',
            bn: 'পাইথন ৩.১০ এর একটি সিনট্যাক্স এরর'
          },
          {
            en: 'A clause that forces the code to exit the program',
            bn: 'এমন একটি ক্লজ যা প্রোগ্রাম সাথে সাথে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "if" clause appended to a case is a pattern guard evaluated after matching structure.',
          bn: 'কেসের শেষে থাকা "if" শর্তটি প্যাটার্নের সাথে অতিরিক্ত যুক্তি মেলানোর কাজ করে।'
        },
        explanation: {
          en: 'Guards allow refining pattern matches with arbitrary boolean expressions beyond structural shapes.',
          bn: 'গার্ড ক্লজ কাঠামোগত মিলের পাশাপাশি অতিরিক্ত শর্ত যাচাই করার চমৎকার ক্ষমতা যোগ করে।'
        }
      },
      {
        id: 'quiz-slots-dataclass-memory-optimization',
        kind: 'mcq',
        topic: 'dataclass-slots-parameter',
        question: {
          en: 'What architectural benefit does passing slots=True to @dataclass (Python 3.10+) deliver to applications?',
          bn: '@dataclass-এ slots=True (পাইথন ৩.১০+) ব্যবহার করলে অ্যাপ্লিকেশনে কী স্থাপত্যিক সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It replaces the per-instance __dict__ with a compact fixed-size array, reducing memory consumption by up to 60 percent and speeding up attribute access',
            bn: 'এটি প্রতি অবজেক্টের নিজস্ব __dict__ সরিয়ে একটি নির্দিষ্ট মেমোরি অ্যারে ব্যবহার করে, ফলে মেমোরি খরচ ৬০ শতাংশ পর্যন্ত কমে এবং প্রপার্টি দ্রুত কাজ করে'
          },
          {
            en: 'It saves instances automatically to disk',
            bn: 'এটি অবজেক্টগুলোকে নিজে থেকেই ডিস্কে সেভ করে'
          },
          {
            en: 'It forces all numbers to be 64-bit floats',
            bn: 'এটি সব সংখ্যাকে ৬৪-বিট ফ্লোটে পরিণত করে'
          },
          {
            en: 'slots=True disables all dataclass methods',
            bn: 'slots=True ডেটাক্লাসের সব মেথড বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: '__slots__ avoids the overhead of a dynamic __dict__ dictionary for each object instance.',
          bn: '__slots__ প্রতিটি অবজেক্টের জন্য অতিরিক্ত ডিকশনারি তৈরির মেমোরি খরচ বাঁচিয়ে দেয়।'
        },
        explanation: {
          en: 'slots=True creates __slots__ automatically, drastically shrinking instance size for large-scale collections.',
          bn: 'slots=True স্বয়ংক্রিয়ভাবে মেমোরি সাশ্রয়ী কাঠামো তৈরি করে বিপুল পরিমাণ অবজেক্টের মেমোরি খরচ কমিয়ে আনে।'
        }
      },
      {
        id: 'quiz-dataclasses-replace-immutable-update',
        kind: 'mcq',
        topic: 'dataclasses-replace-cloning',
        question: {
          en: 'How do you create a modified copy of an immutable frozen dataclass instance in Python?',
          bn: 'পাইথনে একটি অপরিবর্তনীয় ফ্রোজেন ডেটাক্লাস থেকে মান পরিবর্তন করে নতুন কপি তৈরি করবেন কীভাবে?'
        },
        options: [
          {
            en: 'Using dataclasses.replace(instance, **changes) to instantiate a new cloned instance with specified updates',
            bn: 'dataclasses.replace(instance, **changes) ব্যবহার করে নির্দিষ্ট মানগুলো আপডেট করে একটি নতুন ক্লোন অবজেক্ট তৈরির মাধ্যমে'
          },
          {
            en: 'Directly assigning to the attribute using force=True',
            bn: 'force=True দিয়ে সরাসরি প্রপার্টিতে মান বসিয়ে'
          },
          {
            en: 'Deleting the old instance and recreating it from scratch',
            bn: 'পুরানো অবজেক্ট মুছে ফেলে শুরু থেকে আবার তৈরি করে'
          },
          {
            en: 'Frozen dataclasses can never be copied or cloned',
            bn: 'ফ্রোজেন ডেটাক্লাস কখনো কপি বা ক্লোন করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'dataclasses.replace constructs a new instance preserving existing fields with designated changes.',
          bn: 'dataclasses.replace বিদ্যমান মানগুলো ঠিক রেখে কেবল কাঙ্ক্ষিত পরিবর্তনের মাধ্যমে নতুন অবজেক্ট তৈরি করে।'
        },
        explanation: {
          en: 'dataclasses.replace() is the functional idiom for immutable updates, mirroring spread syntax.',
          bn: 'dataclasses.replace() অপরিবর্তনীয় অবজেক্টের মান হালনাগাদ করার আদর্শ ও স্বীকৃত ফাংশনাল পদ্ধতি।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'coroutines-and-the-await',
    title: {
      en: 'Asynchronous Programming, Coroutines & Asyncio',
      bn: 'অ্যাসিনক্রোনাস প্রোগ্রামিং, করুটিন এবং Asyncio'
    }
  }
};
