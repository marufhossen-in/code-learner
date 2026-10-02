import type { Lesson } from '../../../lib/types';

export const ObjectsAndTheRequestLesson: Lesson = {
  slug: 'objects-and-the-request',
  tech: 'php',
  title: {
    en: 'Object-Oriented PHP & PDO Database Architecture',
    bn: 'অবজেক্ট-ওরিয়েন্টেড পিএইচপি এবং PDO ডেটাবেস আর্কিটেকচার'
  },
  summary: {
    en: 'Master modern OOP and database persistence in PHP: constructor property promotion, readonly properties, inheritance, interfaces, traits, PDO prepared statements with named parameters (:id), and ACID-compliant database transactions.',
    bn: 'পিএইচপির আধুনিক ওওপি এবং ডেটাবেস পারসিস্টেন্স আয়ত্ত করুন: কনস্ট্রাক্টর প্রপার্টি প্রমোশন, রিড-অনলি প্রপার্টি, ইনহেরিটেন্স, ইন্টারফেস, ট্রেইট, নেমড প্যারামিটার (:id) সহ PDO প্রিপেয়ার্ড স্টেটমেন্ট এবং ট্রানজ্যাকশন।'
  },
  minutes: 34,
  blocks: [
    {
      type: 'heading',
      id: 'modern-oop-heading',
      text: {
        en: 'Modern Object-Oriented PHP: Constructor Promotion and Encapsulation',
        bn: 'আধুনিক অবজেক্ট-ওরিয়েন্টেড পিএইচপি: কনস্ট্রাক্টর প্রমোশন এবং এনক্যাপসুলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the server scripting runtime) provides an advanced object-oriented engine with strict visibility controls (public, protected, and private). PHP 8 eliminated tedious property assignment boilerplate via Constructor Property Promotion: declaring visibility directly inside constructor parameters automatically declares and assigns instance properties. Pairing this with readonly modifiers guarantees immutability after object instantiation, preventing accidental state corruption across service layers.',
        bn: 'পিএইচপি (সার্ভার স্ক্রিপ্টিং রানটাইম) কঠোর ভিজিবিলিটি নিয়ন্ত্রণ (public, protected এবং private) সহ একটি শক্তিশালী অবজেক্ট-ওরিয়েন্টেড ইঞ্জিন প্রদান করে। পিএইচপি ৮ এ কনস্ট্রাক্টর প্রপার্টি প্রমোশন যুক্ত হওয়ায় বারবার প্রপার্টি ঘোষণা ও মান নির্ধারণের দীর্ঘ কোড লিখতে হয় না: কনস্ট্রাক্টরের ভেতরে ভিজিবিলিটি উল্লেখ করলেই স্বয়ংক্রিয়ভাবে ক্লাস প্রপার্টি তৈরি হয়ে মান বসে যায়। এর সাথে readonly কিওয়ার্ড যুক্ত করলে অবজেক্ট তৈরির পর এর মান আর কখনো পরিবর্তন করা যায় না, ফলে ডেটা সুরক্ষিত থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Comparison between vulnerable SQL concatenation and safe PDO prepared statements separating code from data.',
        bn: 'চিত্র ১: ঝুঁকিপূর্ণ এসকিউএল কনক্যাটেনেশন এবং নিরাপদ PDO প্রিপেয়ার্ড স্টেটমেন্টের মধ্যে কাঠামোগত পার্থক্য।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SQL INJECTION VULNERABILITY vs PDO PREPARED STATEMENTS</text>

  <!-- Left: Insecure Concatenation -->
  <g transform="translate(30, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#b91c1c" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Dangerous: Raw String Concatenation</text>
    
    <text x="15" y="55" fill="#f87171" font-size="10" font-family="monospace">$sql = "SELECT * FROM users WHERE";</text>
    <text x="15" y="72" fill="#f87171" font-size="10" font-family="monospace">$sql .= " email = '" . $_POST['email'] . "'";</text>

    <rect x="15" y="85" width="335" height="60" rx="5" fill="#450a0a" stroke="#ef4444" />
    <text x="22" y="105" fill="#fca5a5" font-size="9" font-family="monospace">Input: admin' OR '1'='1</text>
    <text x="22" y="125" fill="#fca5a5" font-size="9" font-family="monospace">Compiled: SELECT * WHERE email='' OR '1'='1'</text>

    <text x="15" y="170" fill="#fca5a5" font-size="10" font-family="sans-serif">&#10007; User input treated as executable SQL commands</text>
    <text x="15" y="190" fill="#fca5a5" font-size="10" font-family="sans-serif">&#10007; Bypasses authentication; dumps entire database</text>
    <rect x="15" y="205" width="335" height="25" rx="4" fill="#7f1d1d" />
    <text x="25" y="222" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold">Fatal Flaw: Code mixed with unvalidated Data</text>
  </g>

  <!-- Right: Secure PDO -->
  <g transform="translate(445, 60)">
    <rect width="365" height="245" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="365" height="32" rx="8" fill="#047857" />
    <text x="182" y="21" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Secure: PDO Prepared Statements</text>
    
    <text x="15" y="55" fill="#34d399" font-size="10" font-family="monospace">$stmt = $pdo-&gt;prepare(</text>
    <text x="25" y="72" fill="#34d399" font-size="10" font-family="monospace">  "SELECT * FROM users WHERE email = :email"</text>
    <text x="15" y="90" fill="#34d399" font-size="10" font-family="monospace">);</text>
    <text x="15" y="110" fill="#34d399" font-size="10" font-family="monospace">$stmt-&gt;execute([':email' =&gt; $_POST['email']]);</text>

    <text x="15" y="145" fill="#a7f3d0" font-size="10" font-family="sans-serif">&#10003; 1. Query template parsed &amp; compiled beforehand</text>
    <text x="15" y="165" fill="#a7f3d0" font-size="10" font-family="sans-serif">&#10003; 2. Parameters transmitted separately as literal data</text>
    <text x="15" y="185" fill="#a7f3d0" font-size="10" font-family="sans-serif">&#10003; Zero SQL injection possible: quotes never break syntax</text>
    <rect x="15" y="205" width="335" height="25" rx="4" fill="#064e3b" />
    <text x="25" y="222" fill="#ffffff" font-size="10" font-family="sans-serif" font-weight="bold">Gold Standard: Code &amp; Data strictly segregated</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'pdo-transactions-heading',
      text: {
        en: 'PDO Database Persistence and ACID Transactions',
        bn: 'PDO ডেটাবেস পারসিস্টেন্স এবং ট্রানজ্যাকশন ব্যবস্থাপনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP Data Objects (PDO) provides a database abstraction layer supporting 12 relational database drivers. Always communicate with databases through prepared statements using named placeholders (such as :id). The database engine compiles query structure before binding parameter values, preventing SQL injection attacks entirely. For operations touching multiple records (such as bank transfers deducting from 1 balance and crediting another), wrap statements inside PDO transactions ($pdo->beginTransaction(), $pdo->commit(), $pdo->rollBack()) to maintain ACID consistency.',
        bn: 'পিএইচপি ডেটা অবজেক্টস (PDO) হলো একটি সার্বজনীন ডেটাবেস অ্যাবস্ট্রাকশন লেয়ার যা ১২ টি ভিন্ন ডেটাবেস সিস্টেমকে সমর্থন করে। ডেটাবেসের সাথে যোগাযোগের সময় সর্বদা নেমড প্লেসহোল্ডার (যেমন :id) সহ প্রিপেয়ার্ড স্টেটমেন্ট ব্যবহার করা উচিত। ডেটাবেস ইঞ্জিন মান বসানোর আগেই কোয়েরির গঠন কম্পাইল করে নেয়, ফলে এসকিউএল ইনজেকশনের ঝুঁকি সম্পূর্ণ শূন্য হয়ে যায়। একাধিক টেবিল বা ১ টি ব্যালেন্স থেকে কর্তন করে অন্যটিতে স্থানান্তরের মতো গুরুত্বপূর্ণ কাজের ক্ষেত্রে PDO ট্রানজ্যাকশন ($pdo->beginTransaction(), $pdo->commit(), $pdo->rollBack()) ব্যবহার করে ডেটাবেসের অখণ্ডতা নিশ্চিত করা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP 8 OOP domain entity with constructor promotion and PDO atomic transaction management.',
        bn: 'কনস্ট্রাক্টর প্রমোশন এবং ট্রানজ্যাকশন ম্যানেজমেন্টের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP 8 OOP domain entity and PDO transaction mechanics in TypeScript
export class UserAccount {
  // Simulating PHP 8 Constructor Property Promotion:
  // public function __construct(public readonly int $id, public readonly string $name, private float $balance) {}
  constructor(
    public readonly id: number,
    public readonly name: string,
    private balance: number
  ) {}

  public getBalance(): number {
    return this.balance;
  }

  public debit(amount: number): void {
    if (amount <= 0 || amount > this.balance) {
      throw new Error('Insufficient funds or invalid debit amount');
    }
    this.balance -= amount;
  }

  public credit(amount: number): void {
    if (amount <= 0) {
      throw new Error('Credit amount must be positive');
    }
    this.balance += amount;
  }
}

// Transaction manager simulating PDO beginTransaction / commit / rollBack
export function executeTransfer(
  fromAccount: UserAccount,
  toAccount: UserAccount,
  transferAmount: number
): boolean {
  // Simulating $pdo->beginTransaction();
  const initialFromBalance = fromAccount.getBalance();
  const initialToBalance = toAccount.getBalance();

  try {
    fromAccount.debit(transferAmount);
    toAccount.credit(transferAmount);

    // Simulating $pdo->commit();
    return true;
  } catch (error) {
    // Simulating $pdo->rollBack();
    console.error('Transfer failed, rolling back changes');
    return false;
  }
}

// 2 user accounts (Alice with 200 balance, Bob with 50 balance)
const alice = new UserAccount(1, 'Alice', 200);
const bob = new UserAccount(2, 'Bob', 50);

// Execute atomic transfer of 75 from Alice to Bob
const transferSuccess = executeTransfer(alice, bob, 75);

console.log('Transfer Success Status:', transferSuccess); // true
console.log('Alice Final Balance:', alice.getBalance()); // 125
console.log('Bob Final Balance:', bob.getBalance()); // 125`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Constructor Promotion',
          def: {
            en: 'PHP 8 syntactic feature declaring and assigning class properties directly inside constructor parameter signatures.',
            bn: 'পিএইচপি ৮ এর সিনট্যাক্স যা কনস্ট্রাক্টর প্যারামিটারের ভেতরেই সরাসরি ক্লাস প্রপার্টি ঘোষণা ও মান নির্ধারণের সুযোগ দেয়।'
          }
        },
        {
          term: 'PDO Prepared Statements',
          def: {
            en: 'Pre-compiled SQL query templates that separate application instructions from user data parameters.',
            bn: 'পূর্ব-কম্পাইলকৃত এসকিউএল কোয়েরি যা কমান্ড কোড এবং ব্যবহারকারীর পাঠানো ডেটাকে সম্পূর্ণ আলাদা চ্যানেলে পরিচালনা করে।'
          }
        },
        {
          term: 'SQL Injection',
          def: {
            en: 'Vulnerability where untrusted input containing SQL syntax manipulates database query execution logic.',
            bn: 'মারাত্মক সাইবার দুর্বলতা যেখানে ব্যবহারকারীর ক্ষতিকর ইনপুট ডেটাবেসের কোয়েরি কমান্ডের সাথে মিশে কার্যপ্রণালী বদলে ফেলে।'
          }
        },
        {
          term: 'ACID Transactions',
          def: {
            en: 'Database operations guaranteeing Atomicity, Consistency, Isolation, and Durability across multiple query steps.',
            bn: 'ডেটাবেস প্রক্রিয়া যা একাধিক কোয়েরি ধাপের ক্ষেত্রে সম্পূর্ণ সফল অথবা ব্যর্থ হওয়ার মাধ্যমে তথ্যের শতভাগ নির্ভুলতা নিশ্চিত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pdo-sql-injection-immunity-ex1',
      kind: 'mcq',
      topic: 'sql-injection-pdo-immunity',
      question: {
        en: 'Why do PDO prepared statements with parameter binding completely neutralize SQL injection vulnerabilities?',
        bn: 'প্যারামিটার বাইন্ডিং সহ PDO প্রিপেয়ার্ড স্টেটমেন্ট কেন এসকিউএল ইনজেকশনের ঝুঁকি সম্পূর্ণ দূর করে?'
      },
      options: [
        {
          en: 'The database parses and compiles the SQL query structure first, treating bound parameters exclusively as literal data values rather than executable code',
          bn: 'ডেটাবেস প্রথমে কোয়েরির গঠন কম্পাইল করে নেয়, ফলে বাইন্ড করা প্যারামিটারকে কোড হিসেবে না দেখে কেবল সাধারণ ডেটা হিসেবে গ্রহণ করে'
        },
        {
          en: 'PDO deletes all quotes and letters from the client input',
          bn: 'PDO ক্লায়েন্টের ইনপুট থেকে সমস্ত কোটেশন ও বর্ণ মুছে ফেলে'
        },
        {
          en: 'PDO runs a virus scan on the web server CPU',
          bn: 'PDO সার্ভারের প্রসেসরে ভাইরাস স্ক্যান চালায়'
        },
        {
          en: 'Prepared statements only allow numbers to be saved in tables',
          bn: 'প্রিপেয়ার্ড স্টেটমেন্ট টেবিলে কেবল সংখ্যা সেভ করার অনুমতি দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Separating the query compilation phase from parameter transmission makes syntax alteration impossible.',
        bn: 'কোয়েরি কম্পাইল ও ডেটা পাঠানো আলাদা চ্যানেলে হওয়ায় সিনট্যাক্স বিকৃত করার কোনো সুযোগ থাকে না।'
      },
      explanation: {
        en: 'Because query semantics are pre-compiled, attacker input can never alter query structure regardless of injected quotes.',
        bn: 'কোয়েরি আগে থেকেই কম্পাইল হওয়ায় ব্যবহারকারী যত কোটেশনই দিক না কেন, তা আর কমান্ড হিসেবে গণ্য হতে পারে না।'
      }
    },
    {
      id: 'constructor-property-promotion-ex2',
      kind: 'mcq',
      topic: 'constructor-promotion-syntax',
      question: {
        en: 'What does public function __construct(public readonly string $sku) {} accomplish in PHP 8?',
        bn: 'পিএইচপি ৮ এ public function __construct(public readonly string $sku) {} কোডটি কী কাজ সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It declares a public readonly property named $sku and assigns the passed argument to it automatically, eliminating boilerplate code',
          bn: 'এটি স্বয়ংক্রিয়ভাবে $sku নামের একটি পাবলিক রিড-অনলি প্রপার্টি ঘোষণা করে এবং আর্গুমেন্টটির মান তাতে বসিয়ে দেয়'
        },
        {
          en: 'It makes the SKU code visible in Google search results',
          bn: 'এটি গুগল সার্চ ফলাফলে এসকেইউ কোড প্রদর্শন করে'
        },
        {
          en: 'It forces the variable to be an array of numbers',
          bn: 'এটি ভেরিয়েবলটিকে সংখ্যার একটি অ্যারে হতে বাধ্য করে'
        },
        {
          en: 'It deletes the constructor from the class definition',
          bn: 'এটি ক্লাস থেকে কনস্ট্রাক্টরটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Constructor property promotion combines declaration, parameter typing, and assignment into a single line.',
        bn: 'কনস্ট্রাক্টর প্রমোশন প্রপার্টি ঘোষণা ও মান নির্ধারণের কাজকে এক লাইনে সম্পন্ন করে।'
      },
      explanation: {
        en: 'Prefixing constructor arguments with visibility modifiers signals PHP to auto-create and populate the property.',
        bn: 'প্যারামিটারে ভিজিবিলিটি উল্লেখ করলেই পিএইচপি স্বয়ংক্রিয়ভাবে ক্লাস প্রপার্টি তৈরি করে মান বরাদ্দ করে।'
      }
    },
    {
      id: 'pdo-transactions-rollback-ex3',
      kind: 'mcq',
      topic: 'pdo-transactions-rollback',
      question: {
        en: 'In a banking application transferring money between two accounts, why must queries be wrapped in a transaction?',
        bn: 'ব্যাংকিং অ্যাপ্লিকেশনে দুটি অ্যাকাউন্টের মধ্যে টাকা স্থানান্তরের সময় কোয়েরিগুলোকে ট্রানজ্যাকশনের মধ্যে রাখা আবশ্যক কেন?'
      },
      options: [
        {
          en: 'If a power loss or error occurs after debiting the first account but before crediting the second, rollBack() undoes the debit, preventing money loss',
          bn: 'প্রথম অ্যাকাউন্ট থেকে টাকা কাটার পর দ্বিতীয় অ্যাকাউন্টে জমা হওয়ার আগেই ত্রুটি দেখা দিলে rollBack() পূর্বের অবস্থা ফিরিয়ে এনে টাকা রক্ষা করে'
        },
        {
          en: 'Transactions double the bank account balance',
          bn: 'ট্রানজ্যাকশন ব্যাংক অ্যাকাউন্টের ব্যালেন্স দ্বিগুণ করে দেয়'
        },
        {
          en: 'Without transactions, the database server turns off',
          bn: 'ট্রানজ্যাকশন না থাকলে ডেটাবেস সার্ভার বন্ধ হয়ে যায়'
        },
        {
          en: 'Transactions only work if the transfer amount is under 5 dollars',
          bn: 'ট্রানজ্যাকশন কেবল ৫ ডলারের নিচের লেনদেনেই কাজ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transactions guarantee atomicity: either all operations succeed completely, or none take effect.',
        bn: 'ট্রানজ্যাকশন নিশ্চিত করে যে সব কাজ শতভাগ সম্পন্ন হবে অথবা কিছুই ঘটবে না।'
      },
      explanation: {
        en: 'Transactions provide Atomicity: ensuring that financial updates never leave records in a corrupt half-executed state.',
        bn: 'ট্রানজ্যাকশনের অখণ্ডতা নিশ্চিত করে যে কোনো অবস্থাতেই ডেটাবেসে আংশিক বা অসম্পূর্ণ তথ্য জমা হতে পারবে না।'
      }
    },
    {
      id: 'pdo-named-parameters-advantage-ex4',
      kind: 'mcq',
      topic: 'pdo-named-parameters',
      question: {
        en: 'What advantage do named parameters (:email, :status) offer over positional question mark placeholders (?) in PDO statements?',
        bn: 'PDO স্টেটমেন্টে প্রশ্নবোধক চিহ্নের (?) চেয়ে নেমড প্যারামিটার (:email, :status) ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        {
          en: 'Named parameters make queries self-documenting and resilient to parameter order mistakes when passing associative parameter arrays',
          bn: 'নেমড প্যারামিটার কোয়েরিকে পাঠযোগ্য করে তোলে এবং অ্যাসোসিয়েটিভ অ্যারে পাঠানোর সময় ক্রম ভুলের ঝুঁকি পুরোপুরি দূর করে'
        },
        {
          en: 'Named parameters allow databases to bypass password authentication',
          bn: 'নেমড প্যারামিটার ব্যবহার করলে ডেটাবেসের পাসওয়ার্ডের প্রয়োজন হয় না'
        },
        {
          en: 'Positional placeholders are forbidden by international laws',
          bn: 'প্রশ্নবোধক চিহ্ন ব্যবহার আন্তর্জাতিক আইনে নিষিদ্ধ'
        },
        {
          en: 'Named parameters increase SQL database disk storage by 50 percent',
          bn: 'নেমড প্যারামিটার ডেটাবেসের ডিস্ক সাইজ ৫০ শতাংশ বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Named keys (:user) map directly to associative array values without counting parameter positions.',
        bn: 'নেমড কি সরাসরি অ্যাসোসিয়েটিভ অ্যারের মানের সাথে যুক্ত হয়, ফলে আর্গুমেন্টের অবস্থান মুখস্থ রাখার দরকার হয় না।'
      },
      explanation: {
        en: 'Named placeholders clarify parameter intent and decouple execution logic from strict positional indexes.',
        bn: 'নেমড প্যারামিটার কোডের স্পষ্টতা বাড়ায় এবং আর্গুমেন্ট অবস্থানের জটিলতা দূর করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-objects-and-the-request',
    title: {
      en: 'PHP OOP and PDO Database Persistence Quiz',
      bn: 'পিএইচপি ওওপি এবং PDO ডেটাবেস কুইজ'
    },
    questions: [
      {
        id: 'quiz-pdo-errmode-exception-setting',
        kind: 'mcq',
        topic: 'pdo-errmode-exception',
        question: {
          en: 'Why is setting PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION critical when initializing a PDO database connection?',
          bn: 'PDO কানেকশন তৈরির সময় PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION কনফিগার করা কেন অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'It causes database errors to throw catchable PDOException objects rather than failing silently or emitting weak warnings',
            bn: 'এটি ডেটাবেসের যেকোনো ত্রুটিতে নিরব থাকার বদলে ক্যাচযোগ্য PDOException অবজেক্ট তৈরি করে সমস্যার স্পষ্ট সংকেত দেয়'
          },
          {
            en: 'It speeds up network data transmission over WiFi',
            bn: 'এটি ওয়াইফাই দিয়ে ডেটা পাঠানোর গতি বাড়ায়'
          },
          {
            en: 'It deletes all corrupt database records automatically',
            bn: 'এটি ত্রুটিপূর্ণ সমস্ত ডেটাবেস রেকর্ড স্বয়ংক্রিয়ভাবে মুছে ফেলে'
          },
          {
            en: 'It restricts database access to Saturday mornings',
            bn: 'এটি কেবল শনিবার সকালে ডেটাবেস ব্যবহারের সুযোগ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Exceptions interrupt execution and allow structured try/catch error handling and rollbacks.',
          bn: 'এক্সেপশন ত্রুটির সাথে সাথে ট্রাই/ক্যাচের মাধ্যমে নিরাপদ রোলব্যাক সম্পন্ন করতে সাহায্য করে।'
        },
        explanation: {
          en: 'Enabling ERRMODE_EXCEPTION ensures failed queries trigger exceptions, permitting robust transactional recovery.',
          bn: 'ERRMODE_EXCEPTION নিশ্চিত করে কোনো কোয়েরি ব্যর্থ হলে সাথে সাথে এক্সেপশন ঘটবে এবং ডেটা নিরাপদে সংরক্ষণ করা যাবে।'
        }
      },
      {
        id: 'quiz-readonly-class-php82',
        kind: 'mcq',
        topic: 'php-readonly-classes',
        question: {
          en: 'In PHP 8.2, what behavior is enforced when a class is declared as readonly class Invoice {}?',
          bn: 'পিএইচপি ৮.২ এ যখন কোনো ক্লাসকে readonly class Invoice {} হিসেবে ঘোষণা করা হয়, তখন কী প্রভাব পড়ে?'
        },
        options: [
          {
            en: 'Every property declared in the class automatically becomes readonly, and dynamic property assignment is strictly forbidden',
            bn: 'ক্লাসের প্রতিটি প্রপার্টি স্বয়ংক্রিয়ভাবে readonly হয়ে যায় এবং ক্লাসে ডাইনামিক নতুন প্রপার্টি যোগ করা পুরোপুরি নিষিদ্ধ হয়'
          },
          {
            en: 'The class can only be read by software running in London',
            bn: 'ক্লাসটি কেবল লন্ডনে চলমান সফটওয়্যারই পড়তে পারে'
          },
          {
            en: 'The class file cannot be edited by text editors',
            bn: 'টেক্সট এডিটর দিয়ে ক্লাসের ফাইল আর কোনোদিন এডিট করা যায় না'
          },
          {
            en: 'The class automatically prints paper invoices on a printer',
            bn: 'ক্লাসটি স্বয়ংক্রিয়ভাবে প্রিন্টারে কাগজের ইনভয়েস প্রিন্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Readonly classes enforce total immutability across all declared properties.',
          bn: 'Readonly ক্লাস তার ভেতরের সমস্ত প্রপার্টিকে অপরিবর্তনীয় ও নিরাপদ রাখে।'
        },
        explanation: {
          en: 'PHP 8.2 readonly classes require all properties to be typed and prevent mutation or dynamic property creation.',
          bn: 'পিএইচপি ৮.২ এর রিড-অনলি ক্লাস ডেটার স্থিতিশীলতা নিশ্চিত করে এবং অনাকাঙ্ক্ষিত পরিবর্তন আটকে দেয়।'
        }
      },
      {
        id: 'quiz-interface-vs-abstract-class',
        kind: 'mcq',
        topic: 'interface-contract-enforcement',
        question: {
          en: 'What fundamental architectural role does an interface fulfill in modern PHP domain design?',
          bn: 'আধুনিক পিএইচপি সফটওয়্যার ডিজাইনে একটি ইন্টারফেসের মূল স্থাপত্যিক ভূমিকা কী?'
        },
        options: [
          {
            en: 'It defines a strict public method contract without implementation, allowing disparate classes to be swapped interchangeably via dependency injection',
            bn: 'এটি মেথডের কোনো বাস্তবায়ন ছাড়া কেবল পাবলিক চুক্তি সংজ্ঞায়িত করে, যার ফলে ডিপেন্ডেন্সি ইনজেকশনের মাধ্যমে যেকোনো ক্লাস সহজেই অদলবদল করা যায়'
          },
          {
            en: 'It generates CSS styling for website navigation bars',
            bn: 'এটি ওয়েবসাইটের নেভিগেশন বারের সিএসএস স্টাইল তৈরি করে'
          },
          {
            en: 'It connects the computer directly to fiber optic cables',
            bn: 'এটি সরাসরি ফাইবার অপটিক তারের সাথে কম্পিউটারকে সংযুক্ত করে'
          },
          {
            en: 'Interfaces are only used to store user passwords',
            bn: 'ইন্টারফেস কেবল ব্যবহারকারীর পাসওয়ার্ড সংরক্ষণের কাজে লাগে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Interfaces decouple callers from concrete implementations, adhering to dependency inversion.',
          bn: 'ইন্টারফেস মূল বাস্তবায়নের সাথে নির্ভরশীলতা কমিয়ে কোডকে সহজে পরিবর্তনযোগ্য রাখে।'
        },
        explanation: {
          en: 'Interfaces enforce behavioral contracts, enabling clean dependency injection and test mocking.',
          bn: 'ইন্টারফেস একটি সর্বজনীন চুক্তি নিশ্চিত করে, যা সফটওয়্যার টেস্টিং এবং কোড রক্ষণাবেক্ষণ সহজ করে।'
        }
      },
      {
        id: 'quiz-pdo-fetch-assoc-structure',
        kind: 'mcq',
        topic: 'pdo-fetch-assoc-structure',
        question: {
          en: 'What structure does $stmt->fetch(PDO::FETCH_ASSOC) return when reading a single database record?',
          bn: 'ডেটাবেস থেকে একটি রেকর্ড পড়ার সময় $stmt->fetch(PDO::FETCH_ASSOC) কোন কাঠামোর তথ্য প্রদান করে?'
        },
        options: [
          {
            en: 'An associative array where array keys match the table column names returned by the SQL query',
            bn: 'একটি অ্যাসোসিয়েটিভ অ্যারে যার কিগুলো এসকিউএল কোয়েরির টেবিল কলাম নামের সাথে হুবহু মিলে যায়'
          },
          {
            en: 'A comma-separated plain text string',
            bn: 'কমাযুক্ত একটি সাধারণ টেক্সট স্ট্রিং'
          },
          {
            en: 'A binary executable file',
            bn: 'একটি বাইনারি এক্সিকিউটেবল ফাইল'
          },
          {
            en: 'The integer number 12',
            bn: 'পূর্ণসংখ্যা 12'
          }
        ],
        answer: 0,
        hint: {
          en: 'FETCH_ASSOC maps column names directly to dictionary keys without duplicate numeric indices.',
          bn: 'FETCH_ASSOC কলামের নামগুলোকে সরাসরি অ্যারে কি হিসেবে উপস্থাপন করে।'
        },
        explanation: {
          en: 'PDO::FETCH_ASSOC produces a clean associative array keyed by SQL column names.',
          bn: 'PDO::FETCH_ASSOC প্রতিটি কলামের নাম ধরে পরিষ্কার একটি কি-ভ্যালু অ্যারে তৈরি করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'sessions-and-security',
    title: {
      en: 'Stateful Sessions, Authentication & Web Security',
      bn: 'স্টেটফুল সেশন, প্রমাণীকরণ এবং ওয়েব সিকিউরিটি'
    }
  }
};
