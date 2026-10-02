import type { Lesson } from '../../../lib/types';

export const ThePhpReleaseLesson: Lesson = {
  slug: 'the-php-release',
  tech: 'lang-php',
  title: {
    en: 'Modern PHP 8 Features, Performance & Release Lifecycle',
    bn: 'আধুনিক পিএইচপি ৮ সুবিধাসমূহ, পারফরম্যান্স এবং রিলিজ লাইফসাইকেল'
  },
  summary: {
    en: 'Master the cutting-edge features of modern PHP 8+. Explore pattern-matching match expressions, traverse deep object graphs with nullsafe chaining (?->), inspect code with native attributes, optimize CPU execution via the JIT compiler, and navigate the yearly release lifecycle.',
    bn: 'আধুনিক পিএইচপি ৮+ এর সর্বাধুনিক সুবিধাসমূহ আয়ত্ত করুন। প্যাটার্ন-ম্যাচিং match এক্সপ্রেশন, নালসেফ চেইনিং (?->), নেটিভ অ্যাট্রিবিউট, JIT কম্পাইলারের গতি এবং বার্ষিক রিলিজ লাইফসাইকেল বিশদভাবে জানুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'match-expressions-and-nullsafe-heading',
      text: {
        en: 'The Match Expression, Nullsafe Operator, and Backed Enums',
        bn: 'Match এক্সপ্রেশন, নালসেফ অপারেটর এবং ব্যাকড এনাম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the backend programming language) 8 introduced transformative language primitives that radically elevate type safety and developer productivity. The match expression replaces verbose switch statements: it executes strict identity (===) comparisons, prevents unintended fall-through bugs without requiring break statements, and returns a value directly into a variable. Complementing this, the nullsafe operator (?->) gracefully short-circuits nested object property calls to null if any intermediary element is null, eliminating deep conditional checks. With PHP 8.1, native backed enums provide strictly typed enumeration cases.',
        bn: 'পিএইচপি (ব্যাকএন্ড প্রোগ্রামিং ভাষা) ৮ এ এমন কিছু যুগান্তকারী ফিচার যুক্ত হয়েছে যা কোডের টাইপ নিরাপত্তা এবং ডেভেলপারদের কার্যক্ষমতা অভাবনীয়ভাবে বাড়িয়ে দিয়েছে। match এক্সপ্রেশন পুরানো switch স্টেটমেন্টের একটি আধুনিক বিকল্প: এটি কঠোর সমতা (===) পরীক্ষা করে, কোনো break স্টেটমেন্ট ছাড়াই কাজ করে এবং সরাসরি একটি মান রিটার্ন করে। এর সাথে যুক্ত হওয়া নালসেফ অপারেটর (?->) অবজেক্টের ভেতরের প্রপার্টি বা মেথড কল করার সময় কোনো ধাপ null হলে স্বয়ংক্রিয়ভাবে সম্পূর্ণ এক্সপ্রেশনটি null করে দেয়, ফলে জটিল if চেকের ঝামেলা দূর হয়। এছাড়াও পিএইচপি ৮.১ এ যুক্ত হওয়া ব্যাকড এনাম টাইপযুক্ত ডেটা কেস তৈরি করতে সাহায্য করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural progression of PHP 8 bytecode optimization through OPcache and JIT machine-code compilation.',
        bn: 'চিত্র ১: OPcache এবং JIT মেশিন কোড কম্পাইলেশনের মাধ্যমে পিএইচপি ৮ এর অপ্টিমাইজেশন পাইপলাইনের চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP 8 OPCACHE &amp; JIT COMPILER EXECUTION ARCHITECTURE</text>

  <!-- Step 1: Script & AST -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source to AST</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">PHP 8.2 Script</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">match &amp; ?-></text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Lexical Parser</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">AST generated</text>
  </g>

  <!-- Step 2: Zend Opcodes -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Zend Opcodes</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Zend VM Bytecode</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">OPcache RAM Cache</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Bypasses parsing</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero disk reads</text>
  </g>

  <!-- Step 3: JIT Hotspot Tracing -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. JIT Tracing Engine</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Tracing Hot Paths</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Frequent loops</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">DynASM compiler</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Native translation</text>
  </g>

  <!-- Step 4: Machine Code -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Bare-Metal CPU</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">x86_64 / ARM</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">Direct CPU instrs</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Sub-millisecond</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Maximum speed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'jit-and-release-lifecycle-heading',
      text: {
        en: 'The Just-In-Time (JIT) Compiler, Fiber Concurrency, and Release Lifecycle',
        bn: 'JIT কম্পাইলার, ফাইবার কনকারেন্সি এবং রিলিজ লাইফসাইকেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Under the hood, PHP 8 incorporates a JIT compiler embedded inside OPcache that monitors hot execution paths and compiles intermediate bytecode directly into native x86 machine instructions. For asynchronous architectures, PHP 8.1 introduced Fibers, providing lightweight cooperative coroutines for non-blocking I/O frameworks. The PHP core team operates on a strict predictable release lifecycle: each minor version receives 2 years of active bug fixes followed by 1 year of critical security patches, giving each version 3 years of total community support.',
        bn: 'অভ্যন্তরীণভাবে পিএইচপি ৮ এর OPcache এর ভেতরে একটি JIT কম্পাইলার যুক্ত রয়েছে যা বহুল ব্যবহৃত কোড অংশগুলোকে চিহ্নিত করে সরাসরি প্রসেসরের মেশিন কোডে কম্পাইল করে। নন-ব্লকিং অ্যাসিনক্রোনাস ফ্রেমওয়ার্কের জন্য পিএইচপি ৮.১ এ ফাইবার যুক্ত হয়েছে যা হালকা করুটিন পরিচালনা করে। পিএইচপি টিম একটি সুনির্দিষ্ট বার্ষিক রিলিজ লাইফসাইকেল অনুসরণ করে: প্রতিটি রিলিজ ২ বছর সক্রিয় বাগ ফিক্স এবং পরবর্তী ১ বছর নিরাপত্তা প্যাচ সুবিধা পায়, যার ফলে প্রতিটি সংস্করণের মোট লাইফসাইকেল থাকে ৩ বছর।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP 8 pattern matching, nullsafe property traversal, and lifecycle maintenance windows.',
        bn: 'পিএইচপি ৮ এর প্যাটার্ন ম্যাচিং, নালসেফ প্রপার্টি নেভিগেশন এবং রিলিজ লাইফসাইকেলের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP 8 Match Expressions, Nullsafe Navigation, and Lifecycles

// 1. Simulating PHP 8 match ($status) expression
export type OrderStatus = 'pending' | 'processing' | 'shipped' | 'delivered';

export function resolveStatusBadge(status: OrderStatus): string {
  // Simulating PHP 8: return match($status) { ... };
  const badges: Record<OrderStatus, string> = {
    pending: 'badge-yellow',
    processing: 'badge-blue',
    shipped: 'badge-purple',
    delivered: 'badge-green'
  };
  return badges[status] ?? 'badge-gray';
}

// 2. Simulating PHP 8 nullsafe operator: $user?->profile?->address?->city
interface Address {
  city: string;
}
interface Profile {
  address?: Address;
}
interface UserAccount {
  id: number;
  profile?: Profile;
}

export function getUserCity(user?: UserAccount): string {
  // Safe chaining equivalent to $user?->profile?->address?->city ?? 'Unknown'
  return user?.profile?.address?.city ?? 'Unknown';
}

// 3. Simulating PHP Release Lifecycle calculation
export function getPhpSupportYears(): { active: number; security: number; total: number } {
  const active = 2;
  const security = 1;
  return { active, security, total: active + security };
}

// Executing demonstrations
const badge = resolveStatusBadge('delivered');
console.log('Delivered Order Badge:', badge); // "badge-green"

const userWithNoProfile: UserAccount = { id: 101 };
console.log('City with Nullsafe Fallback:', getUserCity(userWithNoProfile)); // "Unknown"

const support = getPhpSupportYears();
console.log('Active Years:', support.active, '| Security Years:', support.security, '| Total:', support.total);
// 2, 1, 3`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Match Expression',
          def: {
            en: 'PHP 8 control expression performing strict equality checks and directly returning evaluated branch values.',
            bn: 'পিএইচপি ৮ এর কন্ট্রোল এক্সপ্রেশন যা কঠোর সমতা পরীক্ষা করে সরাসরি মান প্রদান করে।'
          }
        },
        {
          term: 'Nullsafe Operator (?->)',
          def: {
            en: 'Chaining operator short-circuiting member access to null if any predecessor object evaluates to null.',
            bn: 'বিশেষ চেইনিং অপারেটর যা পূর্বের কোনো অবজেক্ট নাল হলে কোনো এরর না দিয়ে পুরো ফলাফল নাল করে দেয়।'
          }
        },
        {
          term: 'JIT Compiler',
          def: {
            en: 'Just-In-Time compiler translating Zend VM bytecode into native CPU machine instructions at runtime.',
            bn: 'বিশেষ কম্পাইলার যা রানটাইমে পিএইচপির বাইটকোডকে সরাসরি কম্পিউটারের মেশিন কোডে রূপান্তরিত করে।'
          }
        },
        {
          term: 'Release Lifecycle',
          def: {
            en: 'Annual PHP maintenance cadence providing 2 years of active development followed by 1 year of critical security patches.',
            bn: 'পিএইচপির বার্ষিক রিলিজ কাঠামো যা ২ বছর সক্রিয় সাপোর্ট এবং ১ বছর নিরাপত্তা প্যাচ সুবিধা দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'php8-match-strict-equality-ex1',
      kind: 'mcq',
      topic: 'match-expression-strict-equality',
      question: {
        en: 'How does the PHP 8 match expression compare values against its pattern arms?',
        bn: 'পিএইচপি ৮ এর match এক্সপ্রেশন কীভাবে বিভিন্ন প্যাটার্নের সাথে মান তুলনা করে?'
      },
      options: [
        {
          en: 'It uses strict identity comparison (===), preventing unintended type coercion bugs present in loose switch (==) statements',
          bn: 'এটি কঠোর সমতা (===) ব্যবহার করে, ফলে পুরানো switch (==) এর মতো অনাকাঙ্ক্ষিত ডেটা কনভার্সন ঘটে না'
        },
        {
          en: 'It uses loose equality (==) exclusively',
          bn: 'এটি শুধুমাত্র শিথিল সমতা (==) ব্যবহার করে'
        },
        {
          en: 'It evaluates values using regular expressions only',
          bn: 'এটি কেবল রেগুলার এক্সপ্রেশন দিয়ে তুলনা করে'
        },
        {
          en: 'It requires every pattern to be an integer between 0 and 10',
          bn: 'প্রতিটি প্যাটার্নকে ০ থেকে ১০ এর মধ্যে পূর্ণসংখ্যা হতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'match uses strict identity (===) while switch uses loose comparison (==).',
        bn: 'match কঠোর সমতা (===) মেনে চলে আর switch শিথিল সমতা (==) ব্যবহার করতো।'
      },
      explanation: {
        en: 'The match expression eliminates type juggling vulnerabilities by enforcing === comparison on every arm.',
        bn: 'match এক্সপ্রেশন প্রতিটি ক্ষেত্রে === তুলনা নিশ্চিত করে টাইপ ভুলের ঝুঁকি দূর করে।'
      }
    },
    {
      id: 'nullsafe-operator-chaining-ex2',
      kind: 'mcq',
      topic: 'nullsafe-operator-short-circuit',
      question: {
        en: 'What occurs if $company is null in the expression $city = $company?->getAddress()?->getCity();?',
        bn: '$city = $company?->getAddress()?->getCity(); কোডে $company এর মান null হলে কী ঘটে?'
      },
      options: [
        {
          en: 'Execution immediately short-circuits and assigns null to $city without throwing any error or notice',
          bn: 'এক্সিকিউশন সাথে সাথে থেমে গিয়ে কোনো এরর বা ওয়ার্নিং না দিয়ে $city তে null বসিয়ে দেয়'
        },
        {
          en: 'PHP throws a fatal NullPointerException error',
          bn: 'পিএইচপি একটি মারাত্মক NullPointerException এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'The operating system reboots',
          bn: 'অপারেটিং সিস্টেম পুনরায় চালু হয়'
        },
        {
          en: 'It returns an empty array',
          bn: 'এটি একটি খালি অ্যারে রিটার্ন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The nullsafe operator halts subsequent chained calls as soon as any link evaluates to null.',
        bn: 'নালসেফ অপারেটর কোনো লিংক নাল পাওয়া মাত্রই বাকি মেথড কল বন্ধ করে দেয়।'
      },
      explanation: {
        en: 'The nullsafe operator short-circuits gracefully, protecting against null dereference errors.',
        bn: 'নালসেফ অপারেটর মেথড চেইনিংয়ে কোনো ত্রুটি ঘটতে না দিয়ে নিরাপদে নাল রিটার্ন করে।'
      }
    },
    {
      id: 'php-jit-compiler-target-workloads-ex3',
      kind: 'mcq',
      topic: 'jit-compiler-performance-profile',
      question: {
        en: 'What type of software workloads benefit most substantially from the PHP 8 JIT compiler?',
        bn: 'কোন ধরনের সফটওয়্যার কাজের ক্ষেত্রে পিএইচপি ৮ এর JIT কম্পাইলার সবচেয়ে বেশি গতি বৃদ্ধি করে?'
      },
      options: [
        {
          en: 'CPU-intensive workloads such as mathematical simulations, image manipulation, 3D graphics rendering, and fractal generation',
          bn: 'প্রসেসর-নিবিড় কাজ যেমন গাণিতিক সিমুলেশন, ইমেজ প্রসেসিং, থ্রিডি গ্রাফিক্স রেন্ডারিং এবং ফ্র্যাক্টাল তৈরি'
        },
        {
          en: 'Database SELECT queries waiting on network sockets',
          bn: 'নেটওয়ার্ক সকেটের অপেক্ষায় থাকা সাধারণ ডেটাবেস কোয়েরি'
        },
        {
          en: 'Sending static CSS files to web browsers',
          bn: 'ওয়েব ব্রাউজারে স্ট্যাটিক সিএসএস ফাইল পাঠানো'
        },
        {
          en: 'JIT provides zero performance benefits for any workload',
          bn: 'JIT কোনো কাজের জন্যই কোনো পারফরম্যান্স সুবিধা দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'JIT shines when CPU execution rather than I/O latency is the bottleneck.',
        bn: 'JIT কম্পাইলার সেইসব কাজে সবচেয়ে কার্যকর যেখানে সিপিইউ এর গণনার চাপ বেশি থাকে।'
      },
      explanation: {
        en: 'JIT translates Opcodes into machine code, dramatically accelerating compute-heavy algorithmic tasks.',
        bn: 'মেশিন কোডে রূপান্তরের কারণে JIT জটিল গাণিতিক ও প্রসেসর নির্ভর অ্যালগরিদমগুলোকে দ্রুতগতি সম্পন্ন করে।'
      }
    },
    {
      id: 'php-release-lifecycle-support-window-ex4',
      kind: 'mcq',
      topic: 'php-release-maintenance-years',
      question: {
        en: 'How many total years of official community support does each PHP minor version receive?',
        bn: 'পিএইচপির প্রতিটি মাইনর সংস্করণ প্রাতিষ্ঠানিকভাবে মোট কত বছর কমিউনিটি সাপোর্ট পেয়ে থাকে?'
      },
      options: [
        {
          en: '3 years total: 2 years of active development and bug fixes, followed by 1 year of critical security fixes',
          bn: 'মোট ৩ বছর: ২ বছর সক্রিয় উন্নয়ন ও বাগ সংশোধন, এবং পরবর্তী ১ বছর শুধুমাত্র নিরাপত্তা প্যাচ'
        },
        {
          en: '10 years of unrestricted support',
          bn: '১০ বছর অবাধ সাপোর্ট'
        },
        {
          en: '6 months only',
          bn: 'কেবল ৬ মাস'
        },
        {
          en: 'PHP versions never receive security updates',
          bn: 'পিএইচপি সংস্করণগুলো কখনোই কোনো সিকিউরিটি আপডেট পায় না'
        }
      ],
      answer: 0,
      hint: {
        en: '2 years active + 1 year security = 3 years total.',
        bn: '২ বছর সক্রিয় + ১ বছর নিরাপত্তা = মোট ৩ বছর।'
      },
      explanation: {
        en: 'The standard PHP release cycle provides 2 years of active maintenance plus 1 final security-only year.',
        bn: 'পিএইচপির আদর্শ রিলিজ চক্র অনুসারে ২ বছর সক্রিয় এবং ১ বছর নিরাপত্তা সাপোর্ট দেওয়া হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-php-release',
    title: {
      en: 'Modern PHP 8 Features and Release Lifecycle Quiz',
      bn: 'আধুনিক পিএইচপি ৮ সুবিধাসমূহ এবং রিলিজ লাইফসাইকেল কুইজ'
    },
    questions: [
      {
        id: 'quiz-native-attributes-vs-annotations',
        kind: 'mcq',
        topic: 'php8-native-attributes-syntax',
        question: {
          en: 'What syntax marks a native First-Class Attribute introduced in PHP 8?',
          bn: 'পিএইচপি ৮ এ প্রবর্তিত নেটিভ অ্যাট্রিবিউট লেখার জন্য কোন সিনট্যাক্সটি ব্যবহৃত হয়?'
        },
        options: [
          { en: '#[Route("/api")]', bn: '#[Route("/api")]' },
          { en: '@Route("/api") inside docblock comments', bn: 'ডকব্লক কমেন্টের ভেতর @Route("/api")' },
          { en: '<!-- Route("/api") -->', bn: '<!-- Route("/api") -->' },
          { en: '[[Route("/api")]]', bn: '[[Route("/api")]]' }
        ],
        answer: 0,
        hint: {
          en: 'PHP 8 attributes use the hash-bracket syntax (#[...]).',
          bn: 'পিএইচপি ৮ এ অ্যাট্রিবিউট লেখার জন্য হ্যাশ এবং থার্ড ব্র্যাকেট (#[...]) ব্যবহৃত হয়।'
        },
        explanation: {
          en: '#[...] declares native first-class attributes parsed directly by the AST compiler without comment parsing.',
          bn: '#[...] সিনট্যাক্স কম্পাইলারের অংশ হিসেবে সরাসরি অ্যাট্রিবিউট পার্স করে এবং দ্রুত রিফ্লেকশন সুবিধা দেয়।'
        }
      },
      {
        id: 'quiz-php81-first-class-callables',
        kind: 'mcq',
        topic: 'first-class-callables-syntax',
        question: {
          en: 'How does PHP 8.1 create a first-class closure reference to an existing function like strlen?',
          bn: 'পিএইচপি ৮.১ এ strlen এর মতো বিদ্যমান ফাংশন থেকে ফার্স্ট-ক্লাস ক্লোজার রেফারেন্স তৈরি করতে কোন সিনট্যাক্স লেখা হয়?'
        },
        options: [
          { en: 'strlen(...)', bn: 'strlen(...)' },
          { en: 'new Closure("strlen")', bn: 'new Closure("strlen")' },
          { en: '&strlen', bn: '&strlen' },
          { en: 'function_pointer(strlen)', bn: 'function_pointer(strlen)' }
        ],
        answer: 0,
        hint: {
          en: 'The three dots (...) ellipsis inside call parentheses creates a first-class callable.',
          bn: 'ব্র্যাকেটের ভেতরে তিনটি ডট (...) ইলিপসিস ফার্স্ট-ক্লাস কলযোগ্য রেফারেন্স তৈরি করে।'
        },
        explanation: {
          en: 'strlen(...) creates a Closure instance pointing directly to the function with full static analysis support.',
          bn: 'strlen(...) সিনট্যাক্স সরাসরি একটি টাইপযুক্ত ক্লোজার অবজেক্ট তৈরি করে।'
        }
      },
      {
        id: 'quiz-php-fibers-concurrency-model',
        kind: 'mcq',
        topic: 'php81-fibers-cooperative-concurrency',
        question: {
          en: 'What concurrency model do PHP 8.1 Fibers provide to application frameworks?',
          bn: 'পিএইচপি ৮.১ এর ফাইবার ফ্রেমওয়ার্কগুলোকে কোন ধরনের কনকারেন্সি মডেল সরবরাহ করে?'
        },
        options: [
          {
            en: 'Cooperative, stackful coroutines that can pause (suspend) and resume execution without running on separate OS threads',
            bn: 'কোঅপারেটিভ স্ট্যাকফুল করুটিন যা আলাদা অপারেটিং সিস্টেম থ্রেড ছাড়াই কাজ সাময়িক স্থগিত (suspend) ও পুনরায় চালু (resume) করতে পারে'
          },
          {
            en: 'True preemptive operating system threads sharing hardware CPU cores',
            bn: 'অপারেটিং সিস্টেমের প্রি-এম্পটিভ মাল্টিথ্রেডিং'
          },
          {
            en: 'Distributed cloud computing across 100 servers',
            bn: '১০০ সার্ভারে বিস্তৃত ক্লাউড কম্পিউটিং'
          },
          {
            en: 'Fibers compile PHP code into C++ binaries',
            bn: 'ফাইবার পিএইচপি কোডকে সি++ এ রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fibers are coroutines managed in user space, suspending and resuming on demand.',
          bn: 'ফাইবার হলো ব্যবহারকারী স্তরের করুটিন যা প্রয়োজনমতো থামানো ও পুনরায় চালু করা যায়।'
        },
        explanation: {
          en: 'Fibers empower async event loops to manage non-blocking I/O with synchronous-looking code.',
          bn: 'ফাইবার নন-ব্লকিং কোডকে সহজে পরিচালনা করার পরিবেশ তৈরি করে।'
        }
      },
      {
        id: 'quiz-opcache-preloading-architecture',
        kind: 'mcq',
        topic: 'opcache-preloading-benefits',
        question: {
          en: 'How does OPcache Preloading improve PHP application boot performance in production?',
          bn: 'প্রোডাকশনে OPcache প্রি-লোডিং কীভাবে পিএইচপি অ্যাপ্লিকেশনের শুরুর কর্মক্ষমতা উন্নত করে?'
        },
        options: [
          {
            en: 'It compiles and loads designated framework classes into shared server memory at PHP-FPM startup, making them permanently available across all web requests without re-compilation',
            bn: 'এটি পিএইচপি-এফপিএম চালু হওয়ার সময়ই ফ্রেমওয়ার্কের মূল ক্লাসগুলোকে শেয়ার্ড মেমোরিতে লোড করে রাখে, ফলে কোনো রিকোয়েস্টে পুনরায় ফাইল কম্পাইল করতে হয় না'
          },
          {
            en: 'It downloads classes from GitHub during each HTTP request',
            bn: 'এটি প্রতিটি রিকোয়েস্টে গিটহাব থেকে নতুন ক্লাস ডাউনলোড করে'
          },
          {
            en: 'It deletes unneeded database tables before loading',
            bn: 'এটি লোড হওয়ার আগে অপ্রয়োজনীয় টেবিল মুছে ফেলে'
          },
          {
            en: 'It disables all PHP error reporting permanently',
            bn: 'এটি সব পিএইচপি এরর রিপোর্টিং স্থায়ীভাবে বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preloading compiles code once into shared memory upon server bootstrap.',
          bn: 'প্রি-লোডিং সার্ভার বুটের সময়ই কোড কম্পাইল করে মেমোরিতে জমা রাখে।'
        },
        explanation: {
          en: 'OPcache Preloading avoids per-request compilation and linking overhead, delivering maximum framework throughput.',
          bn: 'প্রি-লোডিং রিকোয়েস্টের সময় অপকোড লিংকিংয়ের সময় বাঁচিয়ে ফ্রেমওয়ার্ককে সর্বোচ্চ গতি দেয়।'
        }
      }
    ]
  }
};
