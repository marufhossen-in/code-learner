import type { Lesson } from '../../../lib/types';

export const PatternsAndTheMatchLesson: Lesson = {
  slug: 'patterns-and-the-match',
  tech: 'csharp',
  title: {
    en: 'Pattern Matching & Expressive Switch',
    bn: 'প্যাটার্ন ম্যাচিং এবং আধুনিক সুইচ এক্সপ্রেশন'
  },
  summary: {
    en: 'Master modern pattern matching in C#. Replace defensive type casts with declaration patterns and property patterns, construct concise functional switch expressions, and harness relational and logical patterns for robust domain validation.',
    bn: 'C#-এ আধুনিক প্যাটার্ন ম্যাচিং আয়ত্ত করুন। দুর্বল টাইপ-কাস্টিং বাদ দিয়ে ডিক্লারেশন এবং প্রপার্টি প্যাটার্ন ব্যবহার করুন, আধুনিক ফাংশনাল সুইচ এক্সপ্রেশন তৈরি করুন এবং রিলেশনাল ও লজিক্যাল প্যাটার্ন দিয়ে নিরাপদ ডোমেন ডেটা যাচাই করুন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'pattern-matching-evolution-heading',
      text: {
        en: 'From Defensive Casting to Declaration and Property Patterns',
        bn: 'সনাতন টাইপ-কাস্ট থেকে আধুনিক ডিক্লারেশন ও প্রপার্টি প্যাটার্ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional object-oriented C#, inspecting polymorphic objects required verbose defensive programming using the "as" keyword followed by null checks and explicit type casting. Pattern matching transforms this paradigm by combining type testing and variable extraction into a single atomic operation. Using declaration patterns like "if (shape is Circle c)", the runtime verifies the type, confirms the instance is non-null, and binds the strongly-typed variable "c" in one step. Furthermore, modern C# enables property patterns like "if (user is { Role: \\"Admin\\", IsActive: true })", inspecting nested object state without manual property navigation.',
        bn: 'সনাতন অবজেক্ট-ওরিয়েন্টেড C#-এ পলিমরফিক অবজেক্ট যাচাই করতে "as" কি-ওয়ার্ড, নাল চেক এবং ম্যানুয়াল টাইপ কাস্টিংয়ের দীর্ঘ ক্লান্তিকর কোড লিখতে হতো। প্যাটার্ন ম্যাচিং (Pattern Matching) টাইপ যাচাই এবং ভেরিয়েবল নিষ্কাশনকে একটি একক নির্ভেজাল অপারেশনে সমন্বিত করে এই ধারায় পরিবর্তন এনেছে। "if (shape is Circle c)" এর মতো ডিক্লারেশন প্যাটার্ন ব্যবহার করলে রানটাইম অবজেক্টটির টাইপ যাচাই করে, এটি নন-নাল নিশ্চিত করে এবং এক পদক্ষেপে টাইপ-সেফ ভেরিয়েবল "c" তৈরি করে। তাছাড়া আধুনিক C#-এ "if (user is { Role: \\"Admin\\", IsActive: true })" এর মতো প্রপার্টি প্যাটার্নের মাধ্যমে অবজেক্টের ভেতরের অবস্থা সরাসরি পরীক্ষা করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural dispatch flow of C# pattern matching: From raw domain input through property filters and relational switch arms to safe extraction.',
        bn: 'চিত্র ১: C# প্যাটার্ন ম্যাচিং ডিসপ্যাচ আর্কিটেকচার: মূল ডোমেন অবজেক্ট থেকে প্রপার্টি ও রিলেশনাল সুইচ আর্মের মাধ্যমে নিরাপদ টাইপ রূপান্তর।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# PATTERN MATCHING &amp; SWITCH EXPRESSION DISPATCH</text>

  <!-- Step 1: Input Object -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Domain Input</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">object transaction</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Polymorphic State</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Unknown Payload</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Incoming Data</text>
  </g>

  <!-- Step 2: Property Matching -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Property Patterns</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">{ Tier: "Gold",</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">  YearsActive: &gt;= 5 }</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Relational Checks</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Structural Filtering</text>
  </g>

  <!-- Step 3: Switch Expression -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Switch Arms</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">arm =&gt; expression</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Exhaustive Check</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">_ =&gt; Discard Fallback</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Functional Dispatch</text>
  </g>

  <!-- Step 4: Typed Result -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Safe Outcome</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">decimal fee = 0.20m</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Zero InvalidCastEx</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Compile-Time Verified</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Rock-Solid Security</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'switch-expressions-and-relational-patterns-heading',
      text: {
        en: 'Switch Expressions, Relational Patterns, and Exhaustiveness',
        bn: 'সুইচ এক্সপ্রেশন, রিলেশনাল প্যাটার্ন এবং সার্বিক পূর্ণতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'C# 8 replaced cumbersome switch statements with modern, functional "switch expressions". Rather than repeating "case" and "break" statements, switch expressions use concise arms separated by fat arrows ("=>"). Pattern arms evaluate from top to bottom, returning values directly. Furthermore, C# 9 introduced relational patterns (such as >= 5 or < 100) and logical combinators (and, or, not). The compiler verifies exhaustiveness: if your pattern arms fail to cover all potential input states, the compiler flags a warning, preventing unhandled runtime branch failures.',
        bn: 'C# ৮ সংস্করণে জটিল সুইচ স্টেটমেন্টের বদলে আধুনিক ফাংশনাল "switch expressions" চালু করা হয়। বারবার "case" এবং "break" লেখার বদলে সুইচ এক্সপ্রেশন অ্যারো ("=>") দিয়ে তৈরি সংক্ষিপ্ত আর্ম ব্যবহার করে। প্যাটার্নগুলো উপর থেকে নিচে একের পর এক যাচাই হয়ে সরাসরি মান ফেরত দেয়। তাছাড়া C# ৯ সংস্করণে রিলেশনাল প্যাটার্ন (যেমন >= ৫ বা < ১০০) এবং লজিক্যাল অপারেটর (and, or, not) যুক্ত হয়েছে। কম্পাইলার সার্বিক পূর্ণতা (exhaustiveness) যাচাই করে: যদি সম্ভাব্য সব ইনপুট স্টেট কভার না হয়, তবে কম্পাইলার ওয়ার্নিং দেয় যাতে রানটাইমে কোনো অপ্রত্যাশিত কেস বাদ না পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# pattern matching switch expressions, relational threshold evaluation, and discard fallback handling.',
        bn: 'C# প্যাটার্ন ম্যাচিং সুইচ এক্সপ্রেশন, রিলেশনাল শর্ত যাচাই এবং ডিসকার্ড হ্যান্ডলিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Pattern Matching and Switch Expression Engine

export interface CustomerProfile {
  tier: 'Gold' | 'Silver' | 'Standard';
  yearsActive: number;
}

export class PatternMatchingSimulator {
  // Simulating: customer switch { { Tier: "Gold", YearsActive: >= 5 } => 0.20, ... }
  public calculateDiscountRate(customer: CustomerProfile): number {
    // Top-to-bottom pattern matching evaluation
    if (customer.tier === 'Gold' && customer.yearsActive >= 5) {
      return 0.20; // 20% discount for loyal Gold tier
    }

    if (customer.tier === 'Gold') {
      return 0.10; // 10% discount for standard Gold tier
    }

    if (customer.tier === 'Silver') {
      return 0.05; // 5% discount for Silver tier
    }

    // Discard pattern fallback: _ => 0.0
    return 0.0;
  }
}

// Execution demonstration
const matcher = new PatternMatchingSimulator();

// Case 1: Gold customer with 6 years active service
const loyalCustomer: CustomerProfile = { tier: 'Gold', yearsActive: 6 };
const rate1 = matcher.calculateDiscountRate(loyalCustomer);
console.log('Loyal Gold Discount Rate:', rate1); // 0.2 (20%)

// Case 2: New Gold customer with 2 years active service
const newGoldCustomer: CustomerProfile = { tier: 'Gold', yearsActive: 2 };
const rate2 = matcher.calculateDiscountRate(newGoldCustomer);
console.log('New Gold Discount Rate:', rate2); // 0.1 (10%)

// Case 3: Standard customer
const standardCustomer: CustomerProfile = { tier: 'Standard', yearsActive: 1 };
const rate3 = matcher.calculateDiscountRate(standardCustomer);
console.log('Standard Discount Rate:', rate3); // 0.0 (0%)`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Pattern Matching',
          def: {
            en: 'Language syntax testing whether an object matches a specific shape or type, safely extracting values in one step.',
            bn: 'C# সিনট্যাক্স যা কোনো অবজেক্টের রূপ ও টাইপ যাচাই করে এক পদক্ষেপে নিরাপদে ভেতরের মান বের করে আনে।'
          }
        },
        {
          term: 'Switch Expression',
          def: {
            en: 'Concise functional syntax evaluating pattern arms with "=>" and directly returning computed values.',
            bn: 'আধুনিক ফাংশনাল সিনট্যাক্স যা "=>" চিহ্নের মাধ্যমে সরাসরি প্যাটার্নের ফলাফল প্রদান করে।'
          }
        },
        {
          term: 'Property Pattern',
          def: {
            en: 'Pattern syntax matching against specific internal properties and fields of an object.',
            bn: 'প্যাটার্ন সিনট্যাক্স যা সরাসরি অবজেক্টের ভেতরের নির্দিষ্ট প্রপার্টির মান পরীক্ষা করে।'
          }
        },
        {
          term: 'Discard Pattern (_)',
          def: {
            en: 'Wildcard pattern matching any value, serving as the universal default fallback arm in switch expressions.',
            bn: 'ওয়াইল্ডকার্ড প্যাটার্ন যা যেকোনো মান গ্রহণ করে সুইচ এক্সপ্রেশনে নিরাপদ ডিফল্ট বিকল্প হিসেবে কাজ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pattern-matching-declaration-safety-ex1',
      kind: 'mcq',
      topic: 'pattern-matching-declaration-null-safety',
      question: {
        en: 'What occurs during evaluation of the declaration pattern "if (input is Customer c)" in C#?',
        bn: 'C#-এ ডিক্লারেশন প্যাটার্ন "if (input is Customer c)" চালানোর সময় কী ঘটে?'
      },
      options: [
        {
          en: 'It verifies that "input" is non-null and is an instance of Customer, then safely assigns it to the strongly-typed local variable "c"',
          bn: 'এটি যাচাই করে যে "input" নন-নাল এবং Customer ক্লাসের একটি ইনস্ট্যান্স, তারপর এটিকে নিরাপদে টাইপ-সেফ লোকাল ভেরিয়েবল "c"-তে বরাদ্দ করে'
        },
        {
          en: 'It throws an InvalidCastException if input is null',
          bn: 'input নাল হলে এটি InvalidCastException ছুড়ে দেয়'
        },
        {
          en: 'It permanently changes the database table definition',
          bn: 'এটি স্থায়ীভাবে ডেটাবেস টেবিল বদলে ফেলে'
        },
        {
          en: 'Declaration patterns are only valid inside static loops',
          bn: 'ডিক্লারেশন প্যাটার্ন কেবল স্ট্যাটিক লুপের ভেতর গ্রহণযোগ্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Declaration patterns test type, check null, and bind the variable safely in one atomic step.',
        bn: 'ডিক্লারেশন প্যাটার্ন একই সাথে টাইপ চেক, নাল চেক এবং ভেরিয়েবল তৈরি সম্পন্ন করে।'
      },
      explanation: {
        en: 'The pattern evaluates to false if input is null or not of type Customer, avoiding runtime casting exceptions entirely.',
        bn: 'নাল বা ভুল টাইপ হলে এটি কোনো এরর না দিয়ে মিথ্যা (false) ফেরত দেয়, ফলে সিস্টেম নিরাপদ থাকে।'
      }
    },
    {
      id: 'switch-expression-vs-switch-statement-ex2',
      kind: 'mcq',
      topic: 'switch-expression-functional-syntax',
      question: {
        en: 'How does a modern C# switch expression differ syntactically and semantically from a traditional switch statement?',
        bn: 'আধুনিক C# সুইচ এক্সপ্রেশন সিনট্যাক্স এবং কার্যপদ্ধতিতে সনাতন সুইচ স্টেটমেন্ট থেকে কীভাবে আলাদা?'
      },
      options: [
        {
          en: 'Switch expressions yield a value directly using "=>" arms without break or case keywords, and enforce compile-time exhaustiveness checking',
          bn: 'সুইচ এক্সপ্রেশন কোনো break বা case কি-ওয়ার্ড ছাড়া সরাসরি "=>" দিয়ে মান ফেরত দেয় এবং কম্পাইল-টাইমে সমস্ত কেস কভার করা হয়েছে কিনা যাচাই করে'
        },
        {
          en: 'Switch expressions cannot be used with integers',
          bn: 'সুইচ এক্সপ্রেশন পূর্ণসংখ্যার সাথে ব্যবহার করা যায় না'
        },
        {
          en: 'Switch statements are faster because they bypass the CPU cache',
          bn: 'সুইচ স্টেটমেন্ট দ্রুত কারণ তারা সিপিইউ ক্যাশ এড়িয়ে চলে'
        },
        {
          en: 'Switch expressions only compile on Linux operating systems',
          bn: 'সুইচ এক্সপ্রেশন কেবল লিনাক্স অপারেটিং সিস্টেমে কম্পাইল হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Switch expressions return values directly using concise pattern arms.',
        bn: 'সুইচ এক্সপ্রেশন সরাসরি মান ফেরত দেয় এবং কোডকে অনেক সংক্ষিপ্ত ও পাঠযোগ্য করে।'
      },
      explanation: {
        en: 'Switch expressions are expressions (yielding values) rather than control-flow statements, promoting functional, immutable code styles.',
        bn: 'মান রিটার্ন করার সুবিধার কারণে সুইচ এক্সপ্রেশন আধুনিক ফাংশনাল প্রোগ্রামিংয়ে অত্যন্ত জনপ্রিয়।'
      }
    },
    {
      id: 'property-pattern-nested-matching-ex3',
      kind: 'mcq',
      topic: 'property-pattern-nested-evaluation',
      question: {
        en: 'Which C# pattern syntax correctly matches an Order object whose customer address city is "Dhaka"?',
        bn: 'কোন C# প্যাটার্নটি এমন একটি Order অবজেক্টকে সঠিকভাবে ম্যাচ করে যার কাস্টমার ঠিকানার শহর হলো "Dhaka"?'
      },
      options: [
        { en: 'order is { Customer.Address.City: "Dhaka" }', bn: 'order is { Customer.Address.City: "Dhaka" }' },
        { en: 'order has City("Dhaka")', bn: 'order has City("Dhaka")' },
        { en: 'order.City == "Dhaka" and true', bn: 'order.City == "Dhaka" and true' },
        { en: 'match order { "Dhaka" }', bn: 'match order { "Dhaka" }' }
      ],
      answer: 0,
      hint: {
        en: 'Extended property patterns use dotted nested paths: { Customer.Address.City: "Dhaka" }.',
        bn: 'এক্সটেন্ডেড প্রপার্টি প্যাটার্নে ডট দিয়ে ভেতরের ফিল্ড নির্দেশ করা হয়: { Customer.Address.City: "Dhaka" }।'
      },
      explanation: {
        en: 'C# 10 introduced extended property patterns, allowing nested member access with clean dot notation inside pattern braces.',
        bn: 'C# ১০ এ ডট দিয়ে নেস্টেড প্রপার্টির মান যাচাইয়ের এই চমৎকার সুবিধা প্রবর্তন করা হয়।'
      }
    },
    {
      id: 'relational-patterns-logical-combinators-ex4',
      kind: 'mcq',
      topic: 'relational-patterns-and-or-combinators',
      question: {
        en: 'Which C# relational and logical pattern matches an integer that is greater than or equal to 10 and strictly less than 100?',
        bn: 'কোন C# রিলেশনাল ও লজিক্যাল প্যাটার্নটি এমন একটি পূর্ণসংখ্যা ম্যাচ করে যার মান ১০ এর সমান বা বেশি এবং ১০০ এর চেয়ে কম?'
      },
      options: [
        { en: '>= 10 and < 100', bn: '>= 10 and < 100 প্যাটার্ন' },
        { en: 'between 10 to 100', bn: 'between 10 to 100 প্যাটার্ন' },
        { en: 'range(10, 100)', bn: 'range(10, 100) প্যাটার্ন' },
        { en: 'in [10..100]', bn: 'in [10..100] প্যাটার্ন' }
      ],
      answer: 0,
      hint: {
        en: 'Use relational operators (>= 10) combined with the "and" pattern keyword.',
        bn: 'রিলেশনাল অপারেটরের সাথে "and" কি-ওয়ার্ড যুক্ত করে রেঞ্জ তৈরি করা হয়।'
      },
      explanation: {
        en: 'C# 9 introduced relational patterns (>, >=, <, <=) and logical patterns (and, or, not) for clean numeric range matching.',
        bn: 'C# ৯ সংস্করণে রিলেশনাল ও লজিক্যাল প্যাটার্নের মাধ্যমে ">= 10 and < 100" সিনট্যাক্সটি প্রবর্তন করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-patterns-and-the-match',
    title: {
      en: 'C# Pattern Matching & Functional Control Flow Quiz',
      bn: 'C# প্যাটার্ন ম্যাচিং এবং ফাংশনাল কন্ট্রোল ফ্লো কুইজ'
    },
    questions: [
      {
        id: 'quiz-positional-pattern-deconstruction',
        kind: 'mcq',
        topic: 'positional-pattern-deconstruct-method',
        question: {
          en: 'Which method must a custom class define to enable positional pattern matching syntax like "point is (0, 0)"?',
          bn: '"point is (0, 0)" এর মতো পজিশনাল প্যাটার্ন ম্যাচিং সমর্থন করতে একটি ক্লাসে কোন মেথডটি তৈরি করতে হয়?'
        },
        options: [
          {
            en: 'A public "Deconstruct" method with out parameters (e.g. public void Deconstruct(out int x, out int y))',
            bn: 'আউট প্যারামিটারযুক্ত একটি পাবলিক "Deconstruct" মেথড (যেমন public void Deconstruct(out int x, out int y))'
          },
          {
            en: 'A public "Serialize" method returning a byte array',
            bn: 'বাইট অ্যারে রিটার্ন করা একটি পাবলিক "Serialize" মেথড'
          },
          {
            en: 'A private "ToString" method returning JSON',
            bn: 'জেসন প্রদান করা একটি প্রাইভেট "ToString" মেথড'
          },
          {
            en: 'Positional patterns only work with built-in primitive integers',
            bn: 'পজিশনাল প্যাটার্ন কেবল বিল্ট-ইন পূর্ণসংখ্যার সাথেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Positional patterns rely on the Deconstruct method pattern.',
          bn: 'পজিশনাল প্যাটার্ন অবজেক্টের মান ভেঙে বের করে আনতে Deconstruct মেথড ব্যবহার করে।'
        },
        explanation: {
          en: 'The compiler looks for a Deconstruct method with matching out parameters to break an object into a tuple for positional matching.',
          bn: 'Deconstruct মেথডের আউট প্যারামিটারের মাধ্যমেই কম্পাইলার অবজেক্টের ফিল্ডগুলোকে ক্রমানুসারে মেলায়।'
        }
      },
      {
        id: 'quiz-list-patterns-csharp11',
        kind: 'mcq',
        topic: 'list-patterns-slice-csharp11',
        question: {
          en: 'What does the list pattern "[1, 2, ..var rest]" match in C# 11 and later?',
          bn: 'C# ১১ এবং পরবর্তী সংস্করণে লিস্ট প্যাটার্ন "[1, 2, ..var rest]" ঠিক কী ম্যাচ করে?'
        },
        options: [
          {
            en: 'A sequence starting with elements 1 and 2, capturing all remaining trailing elements into a slice named "rest"',
            bn: 'একটি সিকোয়েন্স যা ১ এবং ২ দিয়ে শুরু হয়েছে, এবং বাকি সমস্ত উপাদানকে "rest" নামের একটি স্লাইসে ধারণ করে'
          },
          {
            en: 'A list containing exactly 2 elements only',
            bn: 'একটি তালিকা যা কেবলমাত্র ২ টি উপাদান ধারণ করে'
          },
          {
            en: 'An empty array that was deleted from memory',
            bn: 'একটি খালি অ্যারে যা মেমোরি থেকে মুছে গেছে'
          },
          {
            en: 'List patterns are forbidden in modern C#',
            bn: 'আধুনিক C#-এ লিস্ট প্যাটার্ন নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The slice pattern (..) captures remaining elements in a sequence.',
          bn: 'স্লাইস প্যাটার্ন (..) সিকোয়েন্সের অবশিষ্ট সব উপাদানকে একসাথে ধরে ফেলে।'
        },
        explanation: {
          en: 'List patterns allow matching arrays and lists against element sequences, using the slice pattern (..) to capture remaining items.',
          bn: 'শুরুর কয়েকটি সংখ্যা মিলিয়ে বাকিগুলোকে আলাদা করতে C# ১১ এর এই লিস্ট প্যাটার্ন অত্যন্ত শক্তিশালী।'
        }
      },
      {
        id: 'quiz-exhaustiveness-enum-switch-warning',
        kind: 'mcq',
        topic: 'switch-expression-exhaustiveness-compiler-warning',
        question: {
          en: 'What diagnostic does the C# Roslyn compiler produce if a switch expression over an enum fails to handle all possible enum values and has no discard fallback arm (_)?',
          bn: 'যদি কোনো enum এর ওপর চালিত সুইচ এক্সপ্রেশনে সম্ভাব্য সব মান কভার না করা হয় এবং কোনো ডিফল্ট ডিসকার্ড আর্ম (_) না থাকে, তবে Roslyn কম্পাইলার কী করে?'
        },
        options: [
          {
            en: 'It emits a compile-time warning (CS8509: The switch expression does not handle all possible values), warning that unhandled values will throw SwitchExpressionException at runtime',
            bn: 'এটি কম্পাইল-টাইমে একটি ওয়ার্নিং (CS8509) দেয় যে সুইচটি সব মান হ্যান্ডেল করেনি, এবং কোনো অজানা মান আসলে রানটাইমে SwitchExpressionException ঘটবে'
          },
          {
            en: 'It deletes the enum definition from the codebase',
            bn: 'এটি কোডবেস থেকে enum সংজ্ঞাটি মুছে ফেলে'
          },
          {
            en: 'It silently assigns null to the result without notification',
            bn: 'এটি কোনো নোটিশ ছাড়াই ফলাফলকে নীরবে null করে দেয়'
          },
          {
            en: 'The compiler restarts the host computer',
            bn: 'কম্পাইলার কম্পিউটারকে রিস্টার্ট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The compiler issues warning CS8509 for non-exhaustive switch expressions.',
          bn: 'কোনো কেস বাদ পড়লে কম্পাইলার CS8509 ওয়ার্নিং জারি করে আগাম সতর্ক করে দেয়।'
        },
        explanation: {
          en: 'Exhaustiveness checking ensures runtime safety. If an unhandled value is encountered, the runtime throws SwitchExpressionException.',
          bn: 'কোড যেন কোনো পরিস্থিতিতেই অপ্রত্যাশিতভাবে ক্র্যাশ না করে, সেজন্য কম্পাইলার সব ব্রাঞ্চ হ্যান্ডেল করার নির্দেশ দেয়।'
        }
      },
      {
        id: 'quiz-not-null-pattern-combination',
        kind: 'mcq',
        topic: 'not-null-pattern-modern-replacement',
        question: {
          en: 'What modern C# 9 pattern is widely adopted as the cleanest idiomatic replacement for the legacy check "if (item != null)"?',
          bn: 'পুরনো "if (item != null)" চেকের সবচেয়ে পরিচ্ছন্ন ও আধুনিক বিকল্প হিসেবে C# ৯ সংস্করণের কোন প্যাটার্নটি ব্যাপকভাবে গৃহীত হয়েছে?'
        },
        options: [
          {
            en: 'if (item is not null)',
            bn: 'if (item is not null) সিনট্যাক্স'
          },
          {
            en: 'if (item has value_present)',
            bn: 'if (item has value_present) সিনট্যাক্স'
          },
          {
            en: 'if (!item.isNull())',
            bn: 'if (!item.isNull()) সিনট্যাক্স'
          },
          {
            en: 'if (item == 1)',
            bn: 'if (item == 1) সিনট্যাক্স'
          }
        ],
        answer: 0,
        hint: {
          en: '"is not null" is immune to overloaded != operators.',
          bn: '"is not null" কোনো ওভারলোডেড != অপারেটর দ্বারা বিভ্রান্ত হয় না।'
        },
        explanation: {
          en: '"if (item is not null)" is expressive, reads like natural language, and cannot be intercepted by user-overloaded equality operators.',
          bn: '"is not null" অত্যন্ত প্রাঞ্জল এবং এটি কোনো কাস্টম অপারেটর দ্বারা বিকৃত হওয়ার ঝুঁকি রাখে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'files-and-the-stream',
    title: {
      en: 'Files, Streams & High-Speed JSON',
      bn: 'ফাইল, স্ট্রিম এবং উচ্চগতির JSON'
    }
  }
};
