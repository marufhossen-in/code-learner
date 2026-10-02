import type { Lesson } from '../../../lib/types';

export const OptionalsAndTheGuardLesson: Lesson = {
  slug: 'optionals-and-the-guard',
  tech: 'swift',
  title: {
    en: 'Optionals, Nil Safety & Guard Statements',
    bn: 'অপশনাল, নিল সেফটি এবং গার্ড স্টেটমেন্ট'
  },
  summary: {
    en: 'Get started with Swift type safety and nil elimination. Master the Optional enum (Some and None), unwrap values safely using if let and guard let early-return guard clauses, chain navigation with optional chaining (?.), supply fallbacks via nil coalescing (??), and eliminate fatal force-unwrap runtime crashes.',
    bn: 'Swift টাইপ নিরাপত্তা এবং নিল দূরীকরণের প্রাথমিক ধাপ শুরু করুন। Optional এনাম (Some ও None) আয়ত্ত করা, if let এবং guard let আর্লি-রিটার্ন গার্ড ক্লজ দিয়ে নিরাপদে মান আনর‍্যাপ করা, অপশনাল চেইনিং (?.), নিল কোয়ালেসিং (??) এবং মারাত্মক ফোর্স-আনর‍্যাপ ক্র্যাশ প্রতিরোধ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'optionals-and-nil-safety-heading',
      text: {
        en: 'The Optional Enum and Compile-Time Nil Safety',
        bn: 'অপশনাল এনাম এবং কম্পাইল-টাইম নিল সেফটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In languages like Objective-C or Java, sending messages to null pointers produces unexpected silent failures or fatal runtime exceptions. In Swift (Apple\'s type-safe compiled programming language), the concept of null is completely reinvented through Optionals. A standard variable can never hold nil under any circumstances; the compiler enforces this invariant at build time. When a value might genuinely be absent, developers declare an Optional type using a question mark suffix (such as "String?"). Under the hood, an Optional is an algebraic enum with exactly 2 states: ".none" (representing absence) and ".some(Wrapped)" (encapsulating the payload). Force-unwrapping with an exclamation mark ("val!") bypasses compiler safety and triggers an immediate fatal runtime crash if nil.',
        bn: 'Objective-C বা Java-র মতো ভাষায় নাল পয়েন্টারে মেথড কল করলে অদ্ভুত নীরব ব্যর্থতা অথবা মারাত্মক রানটাইম এক্সেপশন দেখা দেয়। কিন্তু Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ অপশনালের মাধ্যমে নাল বা শূন্যের ধারণাকে নতুন রূপ দেওয়া হয়েছে। কোনো সাধারণ ভেরিয়েবলে কখনোই nil রাখা যায় না; কম্পাইলার কোড তৈরির সময়ই এটি নিশ্চিত করে। কোনো মান সত্যিই অনুপস্থিত থাকতে পারলে ডেভেলপাররা নামের শেষে প্রশ্নবোধক চিহ্ন (যেমন "String?") দিয়ে অপশনাল ঘোষণা করেন। নেপথ্যে এটি ঠিক ২ টি অবস্থা ধারণকারী একটি এনাম: ".none" (মান অনুপস্থিত) এবং ".some(Wrapped)" (আসল মান বহনকারী)। আশ্চর্যবোধক চিহ্ন দিয়ে ফোর্স-আনর‍্যাপ ("val!") করলে কম্পাইলারের নিরাপত্তা উপেক্ষা করা হয়, যার ফলে ভ্যালু nil থাকলে অ্যাপ সঙ্গে সঙ্গে ক্র্যাশ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Memory layout of Swift Optionals and the guard let early-exit unwrap pipeline.',
        bn: 'চিত্র ১: Swift অপশনালের মেমোরি গঠন এবং guard let আর্লি-এক্সিট আনর‍্যাপ পাইপলাইন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT OPTIONAL ENUM MEMORY &amp; GUARD LET PIPELINE</text>

  <!-- Left: Non-Optional -->
  <g transform="translate(35, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Non-Optional: String</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="68" fill="#38bdf8" font-size="10" font-family="monospace">let name: String = "Alice"</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">16 Bytes (Ptr + Len)</text>

    <rect x="15" y="105" width="200" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="130" fill="#34d399" font-size="10" font-family="monospace">Guaranteed 100% Non-Nil</text>

    <text x="15" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif">Compiler Enforced Memory</text>
  </g>

  <!-- Center: Optional Enum Layout -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#d97706" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Optional: String?</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">enum Optional&lt;Wrapped&gt;</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">Tag Byte + Payload Buffer</text>

    <!-- Variants -->
    <rect x="15" y="105" width="95" height="45" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="62" y="125" fill="#34d399" font-size="9" font-family="monospace" text-anchor="middle">.some("Alice")</text>
    <text x="62" y="140" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Tag = 1</text>

    <rect x="120" y="105" width="95" height="45" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="167" y="125" fill="#f87171" font-size="9" font-family="monospace" text-anchor="middle">.none (nil)</text>
    <text x="167" y="140" fill="#94a3b8" font-size="8" font-family="sans-serif" text-anchor="middle">Tag = 0</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Safe Algebraic Sum Type</text>
  </g>

  <!-- Right: Guard Let Pipeline -->
  <g transform="translate(575, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#059669" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. guard let Early Exit</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="10" font-family="monospace">guard let val = opt else</text>
    <text x="25" y="85" fill="#f87171" font-size="9" font-family="monospace">{ return nil }</text>

    <rect x="15" y="105" width="200" height="50" rx="5" fill="#059669" fill-opacity="0.2" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="monospace">val is unwrapped!</text>
    <text x="25" y="143" fill="#f8fafc" font-size="9" font-family="sans-serif">Available in outer scope</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Nested Indentation</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'unwrapping-mechanisms-heading',
      text: {
        en: 'Safe Unwrapping, Guard Statements, and Nil Coalescing (??)',
        bn: 'নিরাপদ আনর‍্যাপিং, গার্ড স্টেটমেন্ট এবং নিল কোয়ালেসিং (??)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To extract values from Optionals cleanly, Swift provides 4 idiomatic patterns. While "if let" creates a nested block scope for unwrapped values, senior engineers prefer "guard let" for function pre-conditions. A guard statement tests an optional condition; if nil, the mandatory else block executes an early return, throw, or break. Crucially, any variable unwrapped by a guard statement remains in scope throughout the remainder of the enclosing function, flattening nested pyramids of doom. Additionally, optional chaining ("?.") permits navigating deeply nested object properties by short-circuiting to nil if any intermediate link is absent. Finally, the nil-coalescing operator ("??") unwraps an optional inline while supplying a deterministic fallback default.',
        bn: 'অপশনাল থেকে মান বের করার জন্য Swift ৪ টি স্বীকৃত প্যাটার্ন সরবরাহ করে। "if let" আনর‍্যাপ করা মানের জন্য একটি আলাদা নেস্টেড ব্লক তৈরি করে, কিন্তু অভিজ্ঞ ইঞ্জিনিয়াররা ফাংশনের শর্ত যাচাইয়ে "guard let" বেশি পছন্দ করেন। গার্ড স্টেটমেন্ট অপশনাল অবস্থা পরীক্ষা করে; nil থাকলে বাধ্যতামূলক else ব্লক দিয়ে সাথে সাথে return বা throw করে দেয়। সবচেয়ে বড় সুবিধা হলো, গার্ড স্টেটমেন্টে আনর‍্যাপ করা ভ্যারিয়েবলটি ফাংশনের বাকি অংশে সরাসরি ব্যবহার করা যায়, যা কোডের গভীর নেস্টিং পিরামিড এড়িয়ে চলে। তাছাড়া অপশনাল চেইনিং ("?.") কোনো চেইনের যেকোনো স্তর অনুপস্থিত থাকলে কোনো এরর ছাড়াই nil ফেরত দেয়। পরিশেষে নিল-কোয়ালেসিং অপারেটর ("??") কোনো মান না থাকলে একটি নির্ধারিত ডিফল্ট মান বসিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift Optional enum layout, guard let early exit, optional chaining, and nil coalescing.',
        bn: 'Swift অপশনাল এনাম লেআউট, guard let আর্লি এক্সিট, অপশনাল চেইনিং এবং নিল কোয়ালেসিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Optional<Wrapped> Enum and Unwrapping Mechanics

export type SwiftOptional<T> =
  | { kind: 'some'; value: T }
  | { kind: 'none' };

export const Some = <T>(val: T): SwiftOptional<T> => ({ kind: 'some', value: val });
export const None = <T>(): SwiftOptional<T> => ({ kind: 'none' });

export interface UserProfile {
  username: string;
  avatarUrl?: string;
  score: number;
}

export class SwiftNilSafetySimulator {
  // Simulating: func formatGreeting(user: UserProfile?) -> String
  // Demonstrating "guard let" early exit logic
  public static formatGreeting(optionalUser: SwiftOptional<UserProfile>): string {
    // 1. guard let user = optionalUser else { return "Hello, Anonymous Guest!" }
    if (optionalUser.kind === 'none') {
      console.log('[guard let] Triggered else branch: user is nil. Early returning default.');
      return 'Hello, Anonymous Guest!';
    }

    // Unwrapped variable 'user' remains in scope for the rest of the function!
    const user = optionalUser.value;
    console.log('[guard let] User successfully unwrapped:', user.username);

    // 2. Optional Chaining and Nil Coalescing (user.avatarUrl ?? "default-avatar.png")
    const avatar = user.avatarUrl ? user.avatarUrl : 'default-avatar.png';

    return 'Welcome back, ' + user.username + '! Avatar: ' + avatar + ' (Score: ' + user.score + ')';
  }

  // Simulating force unwrap crash (user!)
  public static forceUnwrap<T>(opt: SwiftOptional<T>): T {
    if (opt.kind === 'none') {
      throw new Error('Fatal error: Unexpectedly found nil while unwrapping an Optional value (EXC_BAD_INSTRUCTION)');
    }
    return opt.value;
  }
}

// 1. Safe Guard Let Execution
const activeUser = Some<UserProfile>({
  username: 'swift_dev',
  avatarUrl: 'https://swift.org/logo.png',
  score: 95
});

console.log(SwiftNilSafetySimulator.formatGreeting(activeUser));

// 2. Guard Let Early Exit on Nil
const missingUser = None<UserProfile>();
console.log(SwiftNilSafetySimulator.formatGreeting(missingUser));

// 3. Force-Unwrap Fatal Crash Simulation
try {
  SwiftNilSafetySimulator.forceUnwrap(missingUser);
} catch (e: unknown) {
  console.log('Force Unwrap Crash Caught:', (e as Error).message);
}`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Optional Enum',
          def: {
            en: 'Standard Swift algebraic type (Optional<Wrapped>) modeling either the presence (.some) or absence (.none) of a value.',
            bn: 'স্ট্যান্ডার্ড Swift টাইপ যা কোনো মানের উপস্থিতি (.some) অথবা অনুপস্থিতি (.none) প্রকাশ করে।'
          }
        },
        {
          term: 'Guard Statement',
          def: {
            en: 'Control-flow statement requiring early return on failure while keeping unwrapped variables bound in the outer scope.',
            bn: 'কন্ট্রোল-ফ্লো স্টেটমেন্ট যা ব্যর্থ হলে সাথে সাথে ফিরে যায় এবং সফল হলে মানকে প্রধান স্কোপে ব্যবহারের সুযোগ দেয়।'
          }
        },
        {
          term: 'Optional Chaining (?.)',
          def: {
            en: 'Syntax allowing concise multi-level property access that gracefully short-circuits to nil if any segment is absent.',
            bn: 'সিনট্যাক্স যা কোনো প্রোপার্টি অনুপস্থিত থাকলে ক্র্যাশ না করে শান্তভাবে nil ফেরত পাঠায়।'
          }
        },
        {
          term: 'Nil Coalescing (??)',
          def: {
            en: 'Binary operator unwrapping an optional or providing a deterministic fallback expression if nil.',
            bn: 'বাইনারি অপারেটর যা অপশনাল মান থাকলে তা খুলে দেয় অথবা nil হলে একটি ডিফল্ট বিকল্প প্রদান করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'optional-enum-underlying-states-ex1',
      kind: 'mcq',
      topic: 'optional-enum-two-states',
      question: {
        en: 'How is an Optional type physically structured under the hood in the Swift compiler?',
        bn: 'Swift কম্পাইলারের অভ্যন্তরীণ গঠনে একটি অপশনাল টাইপ শারীরিকভাবে কীভাবে তৈরি হয়?'
      },
      options: [
        {
          en: 'As an algebraic sum enum with exactly 2 cases: .none (representing nil) and .some(Wrapped) (holding the value)',
          bn: 'ঠিক ২ টি কেসযুক্ত একটি অ্যালজেব্রাইক সাম এনাম হিসেবে: .none (nil নির্দেশকারী) এবং .some(Wrapped) (আসল মান বহনকারী)'
        },
        {
          en: 'As a 32-bit floating point number stored in CPU registers',
          bn: 'সিপিইউ রেজিস্টারে সংরক্ষিত একটি ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যা হিসেবে'
        },
        {
          en: 'As a dynamic string query sent to an SQL database',
          bn: 'একটি এসকিউএল ডাটাবেজে পাঠানো ডায়নামিক স্ট্রিং কোয়েরি হিসেবে'
        },
        {
          en: 'Swift optionals are C void pointers without any type metadata',
          bn: 'Swift অপশনাল হলো কোনো মেটাডেটা ছাড়া সাধারণ C ভয়েড পয়েন্টার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Optional is an enum with .none and .some cases.',
        bn: 'এটি একটি এনাম যাতে হয় মান থাকে (.some) নয়তো শূন্য থাকে (.none)।'
      },
      explanation: {
        en: 'By modeling absence as an explicit enum, the Swift compiler enforces exhaustive unwrapping, eliminating unexpected null pointer exceptions.',
        bn: 'এনাম হিসেবে তৈরি হওয়ায় কম্পাইলার নিশ্চিত করে যে কোড চালানোর আগেই মানটি আনর‍্যাপ করা হয়েছে কিনা।'
      }
    },
    {
      id: 'guard-let-scope-advantage-ex2',
      kind: 'mcq',
      topic: 'guard-let-outer-scope-retention',
      question: {
        en: 'What architectural advantage does "guard let" provide over "if let" when unwrapping optionals in Swift functions?',
        bn: 'Swift ফাংশনে অপশনাল আনর‍্যাপ করার সময় "if let"-এর তুলনায় "guard let" কোন স্থাপত্যিক সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'The unwrapped variable remains available in the outer function scope rather than being locked inside an indented block, flattening nested pyramids of doom',
          bn: 'আনর‍্যাপ করা ভ্যারিয়েবলটি আলাদা ব্লকে আটকে না থেকে বাইরের মূল ফাংশন স্কোপে সরাসরি ব্যবহারের জন্য উন্মুক্ত থাকে, যা গভীর নেস্টিং দূর করে'
        },
        {
          en: 'guard let executes 10 times faster by disabling the CPU cache',
          bn: 'guard let সিপিইউ ক্যাশ বন্ধ করে ১০ গুণ দ্রুত চলে'
        },
        {
          en: 'guard let converts all variables into 64-bit integers',
          bn: 'guard let সমস্ত ভ্যারিয়েবলকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
        },
        {
          en: 'guard let is only allowed when targeting watchOS devices',
          bn: 'guard let কেবল watchOS ডিভাইসের কোডে অনুমোদিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'guard let keeps unwrapped variables in the outer function scope.',
        bn: 'গার্ড স্টেটমেন্টের নিচের সব লাইনে ভ্যারিয়েবলটি সাধারণ ভেরিয়েবল হিসেবে ব্যবহৃত হতে পারে।'
      },
      explanation: {
        en: 'Because guard requires an early exit on nil in its else block, the compiler safely guarantees that subsequent code in the function has access to the unwrapped variable.',
        bn: 'যেহেতু ব্যর্থ হলে আগেই return হয়ে যায়, তাই নিচের কোড শতভাগ নিশ্চিত থাকে যে মানটি উপস্থিত আছে।'
      }
    },
    {
      id: 'force-unwrap-exclamation-danger-ex3',
      kind: 'mcq',
      topic: 'force-unwrap-exclamation-mark-hazards',
      question: {
        en: 'What occurs at runtime if a Swift program attempts to force-unwrap ("val!") an optional containing nil?',
        bn: 'একটি Swift প্রোগ্রাম যদি nil ধারণকারী কোনো অপশনালকে জোরপূর্বক আনর‍্যাপ ("val!") করার চেষ্টা করে তবে রানটাইমে কী ঘটে?'
      },
      options: [
        {
          en: 'The application crashes immediately with a fatal runtime trap error (EXC_BAD_INSTRUCTION) that cannot be caught by standard do-catch blocks',
          bn: 'অ্যাপ্লিকেশনটি তাৎক্ষণিকভাবে একটি মারাত্মক রানটাইম ট্র্যাপ এরর (EXC_BAD_INSTRUCTION) দিয়ে ক্র্যাশ করে যা সাধারণ do-catch দিয়েও আটকানো যায় না'
        },
        {
          en: 'The variable silently defaults to zero and continues execution',
          bn: 'ভ্যারিয়েবলটি নীরবে শূন্য মান গ্রহণ করে চলতে থাকে'
        },
        {
          en: 'The phone sends an SMS warning to Apple support technicians',
          bn: 'মোবাইলটি অ্যাপল টেকনিশিয়ানদের কাছে সতর্কবার্তা এসএমএস পাঠায়'
        },
        {
          en: 'Force unwrapping was removed in Swift 5.0',
          bn: 'Swift ৫.০ সংস্করণে ফোর্স আনর‍্যাপিং বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Force unwrapping a nil value causes an immediate fatal crash.',
        bn: 'কোনো মান না থাকলে বিস্ময়সূচক চিহ্ন (!) ব্যবহার করলে অ্যাপ নিশ্চিত ক্র্যাশ করবে।'
      },
      explanation: {
        en: 'Force unwrapping asserts to the compiler that a value is non-nil. When that assertion fails, the process traps immediately to prevent undefined behavior.',
        bn: 'তাই প্রোডাকশন কোডে ফোর্স আনর‍্যাপের বদলে guard let বা if let ব্যবহার করা উচিত।'
      }
    },
    {
      id: 'nil-coalescing-operator-fallback-ex4',
      kind: 'mcq',
      topic: 'nil-coalescing-operator-fallback-evaluation',
      question: {
        en: 'How does the nil-coalescing operator ("??") evaluate the expression "let port = configPort ?? 8080"?',
        bn: 'নিল-কোয়ালেসিং অপারেটর ("??") কীভাবে "let port = configPort ?? 8080" এক্সপ্রেশনটি মূল্যায়ন করে?'
      },
      options: [
        {
          en: 'If configPort contains .some(v), it unwraps and yields v; if configPort is nil (.none), it evaluates and returns the fallback default 8080',
          bn: 'configPort-এ মান থাকলে এটি তা আনর‍্যাপ করে প্রদান করে; আর nil থাকলে ডিফল্ট বিকল্প হিসেবে 8080 ফেরত দেয়'
        },
        {
          en: 'It multiplies the two numbers together',
          bn: 'এটি দুটি সংখ্যাকে একসাথে গুণ করে'
        },
        {
          en: 'It formats the hard drive if port is 8080',
          bn: 'পোর্ট 8080 হলে এটি হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'The nil-coalescing operator requires internet access to resolve',
          bn: 'নিল-কোয়ালেসিং অপারেটরের জন্য ইন্টারনেট সংযোগ থাকা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: '?? returns the unwrapped value or the fallback default.',
        bn: 'মান থাকলে সেই মান, না থাকলে বিকল্প ডিফল্ট মান বসায়।'
      },
      explanation: {
        en: 'The nil-coalescing operator provides clean, inline fallback logic without requiring verbose ternary statements or nested if-let blocks.',
        bn: 'এর মাধ্যমে এক লাইনেই নিরাপদ ও ডিফল্ট মান নিশ্চিত করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-optionals-and-the-guard',
    title: {
      en: 'Swift Optionals & Nil Safety Quiz',
      bn: 'Swift অপশনাল এবং নিল সেফটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-implicitly-unwrapped-optionals-iuc',
        kind: 'mcq',
        topic: 'implicitly-unwrapped-optionals-iuo-usage',
        question: {
          en: 'What is an "Implicitly Unwrapped Optional" (such as "@IBOutlet weak var label: UILabel!"), and what danger does it carry?',
          bn: '"ইমপ্লিসিটলি আনর‍্যাপড অপশনাল" (যেমন "@IBOutlet weak var label: UILabel!") কী এবং এর ভেতরে কী ধরনের বিপদ লুকিয়ে থাকে?'
        },
        options: [
          {
            en: 'It allows automatic unwrapping at access time without explicit if-let syntax, but triggers an immediate fatal crash if accessed before initialization',
            bn: 'এটি কোনো if-let ছাড়াই সরাসরি ব্যবহারের সুযোগ দেয়, কিন্তু মান ইনিশিয়ালাইজ করার আগেই কল করলে তাৎক্ষণিক মারাত্মক ক্র্যাশ ঘটায়'
          },
          {
            en: 'It encrypts the UI component using 128-bit AES keys',
            bn: 'এটি ১২৮-বিট AES কি ব্যবহার করে ইউআই উপাদান এনক্রিপ্ট করে'
          },
          {
            en: 'It converts the label into a 3D animated model',
            bn: 'এটি লেবেলটিকে একটি ত্রিমাত্রিক অ্যানিমেটেড মডেলে রূপান্তর করে'
          },
          {
            en: 'Implicitly unwrapped optionals are only allowed in Linux terminal scripts',
            bn: 'এই অপশনালগুলো কেবল লিনাক্স টার্মিনাল স্ক্রিপ্টে অনুমোদিত'
          }
        ],
        answer: 0,
        hint: {
          en: 'IUOs unwrap automatically on access, crashing if nil.',
          bn: 'ইনিশিয়ালাইজ হওয়ার আগে অ্যাক্সেস করলে এটি নিশ্চিত ক্র্যাশ করাবে।'
        },
        explanation: {
          en: 'Implicitly unwrapped optionals are designed for two-phase initialization (such as UIKit storyboard outlets) where properties are guaranteed to be set shortly after instantiation.',
          bn: 'ইউআইকিট আউটলেটে এটি সুবিধাজনক হলেও অসতর্ক ব্যবহারে অ্যাপ ক্র্যাশ হতে পারে।'
        }
      },
      {
        id: 'quiz-optional-pattern-matching-case-let',
        kind: 'mcq',
        topic: 'optional-pattern-matching-case-some',
        question: {
          en: 'How can developers filter and unwrap optionals within a "for" loop in Swift using pattern matching?',
          bn: 'Swift-এ প্যাটার্ন ম্যাচিং ব্যবহার করে কীভাবে একটি "for" লুপের ভেতর অপশনাল ফিল্টার ও আনর‍্যাপ করা যায়?'
        },
        options: [
          {
            en: 'Using "for case let value? in array", which automatically iterates solely over non-nil items while binding the unwrapped value',
            bn: '"for case let value? in array" ব্যবহার করে, যা নিজে থেকেই শুধুমাত্র non-nil উপাদানগুলো নিয়ে লুপ চালায় এবং মান আনর‍্যাপ করে দেয়'
          },
          {
            en: 'By sorting the array numerically from 1 to 100',
            bn: 'অ্যারেটিকে ১ থেকে ১০০ পর্যন্ত সংখ্যায় সাজিয়ে'
          },
          {
            en: 'By deleting all nil items from disk storage',
            bn: 'ডিস্ক স্টোরেজ থেকে সমস্ত nil উপাদান মুছে ফেলে'
          },
          {
            en: 'For loops in Swift cannot iterate over optional arrays',
            bn: 'Swift-এ ফর লুপ অপশনাল অ্যারের ওপর চলতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'for case let x? iterates only over non-nil elements.',
          bn: 'case let এর সাথে প্রশ্নবোধক চিহ্ন দিলে nil উপাদানগুলো নিজে থেকেই বাদ পড়ে যায়।'
        },
        explanation: {
          en: 'The "for case let x? in array" pattern cleanly extracts all non-nil values without requiring an inner if-let check on every iteration.',
          bn: 'ফলে লুপের ভেতরে বারবার if-let লেখার ঝামেলা এড়ানো যায়।'
        }
      },
      {
        id: 'quiz-guard-else-divergence-requirement',
        kind: 'mcq',
        topic: 'guard-else-must-diverge-rule',
        question: {
          en: 'Why does the Swift compiler mandate that the "else" block of a "guard" statement MUST diverge (return, throw, break, or fatalError)?',
          bn: 'Swift কম্পাইলার কেন বাধ্যতামূলক করে যে একটি "guard" স্টেটমেন্টের "else" ব্লককে অবশ্যই ডাইভার্জ (return, throw, break বা fatalError) হতে হবে?'
        },
        options: [
          {
            en: 'To guarantee that control flow cannot fall through to downstream code if the condition fails, ensuring unwrapped variables are always valid',
            bn: 'নিশ্চয়তা দিতে যে শর্ত ব্যর্থ হলে কোড যেন কোনোভাবেই নিচের লাইনে যেতে না পারে, ফলে আনর‍্যাপ করা ভ্যারিয়েবলটি সর্বদা নিরাপদ থাকে'
          },
          {
            en: 'To prevent the computer from overheating during compilation',
            bn: 'কম্পাইলেশনের সময় কম্পিউটার অতিরিক্ত গরম হওয়া রোধ করতে'
          },
          {
            en: 'Because else blocks can only run inside background threads',
            bn: 'কারণ else ব্লক কেবল ব্যাকগ্রাউন্ড থ্রেডে চলতে পারে'
          },
          {
            en: 'Divergence was introduced to satisfy C++ ABI compatibility',
            bn: 'C++ এবিআই সামঞ্জস্য বজায় রাখতে এটি যুক্ত করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The else block must exit the scope so subsequent code never runs with nil.',
          bn: 'শর্ত না মিললে নিচের কোড চলা চিরতরে বন্ধ রাখতেই এই নিয়ম।'
        },
        explanation: {
          en: 'If a guard\'s else block did not exit the scope, the code beneath the guard would execute even when the optional was nil, corrupting state.',
          bn: 'এর মাধ্যমে নিচের সমস্ত কোড নিশ্চিন্তে ডেটা ব্যবহার করতে পারে।'
        }
      },
      {
        id: 'quiz-optional-map-and-flatmap',
        kind: 'mcq',
        topic: 'optional-functional-map-vs-flatmap',
        question: {
          en: 'What is the functional difference between "opt.map { transform($0) }" and "opt.flatMap { transform($0) }" when the transform closure itself returns an Optional?',
          bn: 'যখন ট্রান্সফর্ম ক্লোজারটি নিজে একটি অপশনাল ফেরত দেয়, তখন "opt.map" এবং "opt.flatMap"-এর মধ্যে কী পার্থক্য ঘটে?'
        },
        options: [
          {
            en: 'map produces a nested double optional (e.g. String??); flatMap flattens the result into a single clean optional (String?)',
            bn: 'map একটি নেস্টেড ডাবল অপশনাল (যেমন String??) তৈরি করে; আর flatMap সেটিকে ফ্ল্যাট করে একটি একক অপশনালে (String?) রূপান্তর করে'
          },
          {
            en: 'map runs 10 times slower than flatMap',
            bn: 'map flatMap-এর চেয়ে ১০ গুণ ধীরে চলে'
          },
          {
            en: 'flatMap deletes the underlying memory address',
            bn: 'flatMap মেমোরি ঠিকানা মুছে ফেলে'
          },
          {
            en: 'There is zero difference between map and flatMap on optionals',
            bn: 'অপশনালে map এবং flatMap এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'flatMap flattens nested optionals (T?? -> T?).',
          bn: 'ডাবল অপশনাল এড়িয়ে একটিমাত্র পরিষ্কার অপশনাল পেতে flatMap ব্যবহার হয়।'
        },
        explanation: {
          en: 'When a transformation closure produces an optional, map wraps that in another optional, yielding T??. flatMap unwraps the inner optional, yielding a flat T?.',
          bn: 'এর ফলে অতিরিক্ত জটিলতা ছাড়া ফাংশনাল পদ্ধতিতে ডেটা প্রসেস করা সহজ হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'structs-and-the-class',
    title: {
      en: 'Value Types vs Reference Types: Structs & Classes',
      bn: 'ভ্যালু টাইপ বনাম রেফারেন্স টাইপ: স্ট্রাক্ট এবং ক্লাস'
    }
  }
};
