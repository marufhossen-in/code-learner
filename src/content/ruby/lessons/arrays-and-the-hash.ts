import type { Lesson } from '../../../lib/types';

export const ArraysAndTheHashLesson: Lesson = {
  slug: 'arrays-and-the-hash',
  tech: 'ruby',
  title: {
    en: 'Arrays, Hashes, Destructuring & Pattern Matching',
    bn: 'অ্যারে, হ্যাশ, ডিস্ট্রাকচারিং এবং প্যাটার্ন ম্যাচিং'
  },
  summary: {
    en: 'Master core collection architectures and data manipulation in Ruby. Understand dynamic arrays, negative indexing, and set operations, configure insertion-ordered Hashes with safe navigation via fetch and dig, prevent shared mutable traps using Hash.new default blocks, and leverage Ruby 3 structural pattern matching with "case ... in".',
    bn: 'Ruby-র মূল কালেকশন আর্কিটেকচার এবং ডেটা প্রসেসিং সম্পূর্ণ আয়ত্ত করুন। ডাইনামিক অ্যারে, নেগেটিভ ইনডেক্সিং ও সেট অপারেশন বুঝুন, fetch এবং dig দিয়ে নিরাপদ হ্যাশ নেভিগেশন করুন, Hash.new ডিফল্ট ব্লক দিয়ে শেয়ার্ড মিউটেবল ফাঁদ প্রতিরোধ করুন এবং Ruby ৩-এর "case ... in" স্ট্রাকচারাল প্যাটার্ন ম্যাচিং শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'arrays-and-hashes-architecture-heading',
      text: {
        en: 'Dynamic Arrays and Insertion-Ordered Hashes',
        bn: 'ডাইনামিক অ্যারে এবং ইনসার্শন-অর্ডারযুক্ত হ্যাশ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'High-performance applications depend on versatile data structures for queuing, indexing, and modeling complex domain state. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), data collections are anchored by two primary structures: Arrays and Hashes. Arrays are ordered, dynamically resizable lists supporting negative indexing ("[-1]" accesses the tail) and set operations like intersection ("&") and difference ("-"). Hashes provide dictionary key-value mappings maintaining insertion order. While bracket access ("hash[:missing]") returns nil, the "fetch" method enables strict error raising or fallback defaults, and "dig" provides safe deep traversal across nested structures.',
        bn: 'উচ্চগতির অ্যাপ্লিকেশনে কিউ তৈরি, ইনডেক্সিং এবং জটিল ডেটা সাজাতে বহুমুখী কালেকশন স্ট্রাকচার অত্যন্ত প্রয়োজনীয়। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে ডেটা মূলত দুটি প্রধান কাঠামোর ওপর দাঁড়িয়ে আছে: অ্যারে এবং হ্যাশ। অ্যারে হলো ক্রমিক ও স্বয়ংক্রিয় আকার পরিবর্তনশীল তালিকা যা নেগেটিভ ইনডেক্সিং ("[-1]" শেষের উপাদান দেয়) এবং ইন্টারসেকশন ("&") ও বিয়োগের ("-") মতো সেট অপারেশন সমর্থন করে। হ্যাশ হলো কি-ভ্যালু জোড়ার ডিকশনারি যা উপাদানের ঢোকার ক্রম নিখুঁতভাবে মনে রাখে। সাধারণ ব্র্যাকেট ("hash[:missing]") না পাওয়া কি-র জন্য nil ফেরত দিলেও "fetch" মেথড দিয়ে এরর বা ডিফল্ট মান নির্ধারণ করা যায় এবং "dig" দিয়ে গভীর নেস্টেড স্ট্রাকচার নিরাপদে পড়া যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby collection architecture: Hash default block memory safety alongside Ruby 3 structural pattern matching decomposition.',
        bn: 'চিত্র ১: Ruby কালেকশন আর্কিটেকচার: Hash ডিফল্ট ব্লকের মেমোরি সুরক্ষা এবং Ruby ৩ স্ট্রাকচারাল প্যাটার্ন ম্যাচিং বিশ্লেষণের চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY HASH DEFAULT BLOCKS &amp; PATTERN MATCHING</text>

  <!-- Left: Hash Default Block Safety -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Hash.new { |h, k| h[k] = [] } Safety</text>

    <!-- Trap -->
    <rect x="15" y="45" width="330" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="65" fill="#f87171" font-size="10" font-family="monospace">Hash.new([]) # DEADLY TRAP</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">All missing keys share the same mutable array in memory</text>

    <!-- Solution -->
    <rect x="15" y="105" width="330" height="55" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="monospace">Hash.new { |h, k| h[k] = [] } # SAFE</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif">Evaluates closure dynamically for every unique key lookup</text>

    <rect x="15" y="170" width="330" height="50" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="190" fill="#38bdf8" font-size="9" font-family="sans-serif" font-weight="bold">Safe Traversal with dig:</text>
    <text x="25" y="208" fill="#f8fafc" font-size="9" font-family="monospace">data.dig(:user, :profile, :address) # No NilClass error!</text>
  </g>

  <!-- Right: Ruby 3 Pattern Matching -->
  <g transform="translate(435, 65)">
    <rect width="370" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="370" height="30" rx="8" fill="#d97706" />
    <text x="185" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Ruby 3 Pattern Matching (case in)</text>

    <!-- Source Payload -->
    <rect x="15" y="45" width="340" height="40" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">payload = { status: 200, user: { role: :admin } }</text>

    <!-- Pattern Match Branch -->
    <rect x="15" y="95" width="340" height="65" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="115" fill="#34d399" font-size="10" font-family="monospace">in { status: 200, user: { role: :admin } }</text>
    <text x="25" y="133" fill="#cbd5e1" font-size="9" font-family="sans-serif">Destructures and binds variables in one atomic step</text>
    <text x="25" y="148" fill="#38bdf8" font-size="9" font-family="monospace">render_admin_dashboard()</text>

    <rect x="15" y="170" width="340" height="50" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="190" fill="#fbbf24" font-size="9" font-family="sans-serif" font-weight="bold">Type Safety &amp; Guard Clauses:</text>
    <text x="25" y="208" fill="#f8fafc" font-size="9" font-family="monospace">in [*, last] if last &gt; 100 # Pin and guard operators</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'default-blocks-and-pattern-matching-heading',
      text: {
        en: 'Hash Default Blocks and Ruby 3 Pattern Matching',
        bn: 'Hash ডিফল্ট ব্লক এবং Ruby ৩ প্যাটার্ন ম্যাচিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent trap in Ruby is passing a mutable default value to "Hash.new([])". Because all non-existent keys share that single mutable array reference in memory, mutating one key mutates all missing keys globally. The idiomatic solution is providing a block: "Hash.new { |hash, key| hash[key] = [] }", which lazily instantiates a fresh independent array per key. Furthermore, Ruby 3 introduced native structural pattern matching via "case ... in". This empowers developers to destructure complex nested hashes and arrays declaratively, binding variables and evaluating boolean guard clauses ("if balance > 100") without verbose conditional ladders.',
        bn: 'Ruby-তে একটি মারাত্মক ফাঁদ হলো "Hash.new([])"-তে মিউটেবল ডিফল্ট মান পাঠানো। এর ফলে অনুপস্থিত সমস্ত কি মেমরিতে একই অ্যারে শেয়ার করে এবং এক কি-তে ডেটা যোগ করলে তা সব কি-তে প্রতিফলিত হয়ে যায়। এর আদর্শ সমাধান হলো একটি ব্লক পাঠানো: "Hash.new { |hash, key| hash[key] = [] }", যা প্রতিটি নতুন কি-র জন্য মেমরিতে আলাদা ও স্বাধীন অ্যারে তৈরি করে দেয়। তাছাড়া Ruby ৩ সংস্করণে যুক্ত হয়েছে "case ... in" স্ট্রাকচারাল প্যাটার্ন ম্যাচিং। এটি ডেভেলপারদের একাধিক if/else না লিখে সরাসরি জটিল নেস্টেড হ্যাশ ও অ্যারে ডিস্ট্রাকচার করার, ভ্যারিয়েবল বাইন্ড করার এবং গার্ড শর্ত ("if balance > 100") পরীক্ষা করার অবিশ্বাস্য ক্ষমতা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby Hash default blocks, safe deep dig traversal, and Ruby 3 structural pattern matching.',
        bn: 'Ruby Hash ডিফল্ট ব্লক, নিরাপদ গভীর dig নেভিগেশন এবং Ruby ৩ প্যাটার্ন ম্যাচিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Collections: Hash Default Blocks and Pattern Matching

export class RubyCollectionEngine {
  // Simulates Hash.new { |h, k| h[k] = [] }
  private store: Map<string, any[]> = new Map();

  public getOrCreateList(key: string): any[] {
    let list = this.store.get(key);
    if (!list) {
      list = []; // Fresh independent array instance
      this.store.set(key, list);
    }
    return list;
  }

  // Simulates Ruby's hash.dig(:user, :profile, :email)
  public static dig(target: any, ...keys: string[]): any {
    let current = target;
    for (const k of keys) {
      if (current === null || current === undefined || typeof current !== 'object') {
        return undefined; // Returns nil safely instead of raising NoMethodError
      }
      current = current[k];
    }
    return current;
  }

  // Simulates Ruby 3 "case payload in { status: 200, user: { role: } }"
  public static matchResponse(response: any): string {
    if (response && response.status === 200 && response.user && response.user.role === 'admin') {
      return 'Matched Admin user: ' + response.user.name;
    } else if (response && response.status === 200 && response.user) {
      return 'Matched Standard Member: ' + response.user.name;
    } else if (response && response.status === 404) {
      return 'Matched Resource Not Found';
    }
    return 'Unhandled Response Pattern';
  }
}

// Execution Demonstration
console.log('--- 1. Testing Hash Default Block Safety ---');
const engine = new RubyCollectionEngine();
const rubyGroup = engine.getOrCreateList('ruby-devs');
rubyGroup.push('Alice');

const pythonGroup = engine.getOrCreateList('python-devs');
pythonGroup.push('Bob');

console.log('Ruby Devs List:', rubyGroup);     // ['Alice']
console.log('Python Devs List:', pythonGroup); // ['Bob'] (No cross-key contamination!)

console.log('\n--- 2. Testing Safe Traversal with dig ---');
const nestedPayload = {
  user: {
    profile: {
      email: 'team@codeshikhon.com',
      metrics: { logins: 42 }
    }
  }
};

const email = RubyCollectionEngine.dig(nestedPayload, 'user', 'profile', 'email');
const missingPhone = RubyCollectionEngine.dig(nestedPayload, 'user', 'contact', 'phone');
console.log('Found Email via dig:', email);               // team@codeshikhon.com
console.log('Missing Key via dig (Returns nil):', missingPhone); // undefined (safe!)

console.log('\n--- 3. Testing Ruby 3 Pattern Matching ---');
const adminResponse = { status: 200, user: { name: 'Rahim', role: 'admin' } };
const matchResult = RubyCollectionEngine.matchResponse(adminResponse);
console.log('Pattern Match Result:', matchResult); // Matched Admin user: Rahim`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Array & Hash',
          def: {
            en: 'Ordered lists with negative indexing and insertion-ordered dictionary mappings with symbol keys.',
            bn: 'নেগেটিভ ইনডেক্সিংযুক্ত ক্রমিক তালিকা এবং ইনসার্শন-অর্ডারযুক্ত ডিকশনারি ম্যাপিং।'
          }
        },
        {
          term: 'Default Proc (Hash.new)',
          def: {
            en: 'Block passed to Hash.new executed on missing keys to generate independent initial values safely.',
            bn: 'Hash.new-তে পাঠানো ব্লক যা কি না পেলে নতুন ও স্বাধীন মান তৈরি করে শেয়ার্ড মেমোরি ফাঁদ দূর করে।'
          }
        },
        {
          term: 'Safe Navigation & dig',
          def: {
            en: 'Methods allowing nested data access across arrays and hashes returning nil on missing branches without error.',
            bn: 'মেথড যা নেস্টেড ডেটা পড়ার সময় কি না থাকলে ক্র্যাশ না করে নিরাপদে nil ফেরত দেয়।'
          }
        },
        {
          term: 'Pattern Matching (case in)',
          def: {
            en: 'Ruby 3 syntax destructively matching shapes of arrays and hashes while binding variables atomically.',
            bn: 'Ruby ৩ সিনট্যাক্স যা অ্যারে ও হ্যাশের কাঠামো মিলিয়ে ভ্যারিয়েবল তৈরি করে একবারে কোড চালায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'hash-default-block-trap-ex1',
      kind: 'mcq',
      topic: 'hash-new-default-block-vs-default-value',
      question: {
        en: 'Why is "Hash.new { |hash, key| hash[key] = [] }" considered best practice over "Hash.new([])" when grouping elements into lists?',
        bn: 'এলিমেন্টগুলো গ্রুপ করার সময় "Hash.new([])"-এর চেয়ে "Hash.new { |hash, key| hash[key] = [] }" ব্যবহার করা কেন সেরা নিয়ম?'
      },
      options: [
        {
          en: '"Hash.new([])" passes a single shared array reference to all missing keys, so mutating one key accidentally mutates every missing key; the block generates a fresh independent array for each key',
          bn: '"Hash.new([])" সব অনুপস্থিত কি-র জন্য মেমরিতে একটাই অ্যারে শেয়ার করে, তাই একটি কি পরিবর্তন করলে অজান্তেই সব কি বদলে যায়; আর ব্লকটি প্রতিটি কি-র জন্য আলাদা নতুন অ্যারে বানায়'
        },
        {
          en: 'Hash.new([]) was removed from Ruby in version 1.9',
          bn: 'Ruby ১.৯ সংস্করণে Hash.new([]) সম্পূর্ণ মুছে ফেলা হয়েছিল'
        },
        {
          en: 'The block version consumes 5 gigabytes of swap space',
          bn: 'ব্লক সংস্করণটি ৫ গিগাবাইট সোয়াপ স্পেস খরচ করে'
        },
        {
          en: 'There is zero functional difference between them',
          bn: 'উভয়ের মাঝে কার্যকর কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'A default argument is evaluated once, sharing the same mutable instance across all lookups.',
        bn: 'ডিফল্ট আর্গুমেন্ট একবার তৈরি হয়ে সব কি-তে ভাগাভাগি হয়, কিন্তু ব্লক প্রতিবার নতুন অবজেক্ট বানায়।'
      },
      explanation: {
        en: 'Because Ruby arguments evaluate eagerly, "Hash.new([])" binds all missing lookups to the same array instance. Passing a block invokes the factory closure per key.',
        bn: 'ব্লক ব্যবহারের মাধ্যমে প্রতিটি কি নিজস্ব স্বতন্ত্র অ্যারে পায়, ফলে মেমোরি ডেটা দূষণ ঘটে না।'
      }
    },
    {
      id: 'ruby-dig-nested-safety-ex2',
      kind: 'mcq',
      topic: 'ruby-dig-method-safe-nested-access',
      question: {
        en: 'What does "data.dig(:user, :address, :city)" return if "data[:user]" is nil in Ruby?',
        bn: 'যদি Ruby-তে "data[:user]"-এর মান nil হয়, তবে "data.dig(:user, :address, :city)" কী রিটার্ন করে?'
      },
      options: [
        {
          en: 'It safely returns "nil" without raising a NoMethodError, short-circuiting traversal when any intermediate branch evaluates to nil',
          bn: 'মাঝের কোনো অংশ nil পেলে এটি কোনো NoMethodError না ঘটিয়ে নিরাপদে সরাসরি "nil" রিটার্ন করে'
        },
        {
          en: 'It raises a fatal "NoMethodError: undefined method \'[]\' for nil:NilClass"',
          bn: 'এটি একটি মারাত্মক "NoMethodError: undefined method \'[]\' for nil:NilClass" ঘটায়'
        },
        {
          en: 'It converts the nil into an empty string ""',
          bn: 'এটি nil-কে একটি ফাঁকা স্ট্রিংয়ে "" রূপান্তর করে'
        },
        {
          en: 'dig was deprecated in Ruby 2.7',
          bn: 'Ruby ২.৭ সংস্করণে dig মেথড বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'dig safely short-circuits nested lookups, returning nil instead of throwing errors.',
        bn: 'নেস্টেড ডেটা তল্লাশিতে ক্র্যাশ রোধ করার সবচেয়ে জনপ্রিয় এবং পরিচ্ছন্ন মেথড।'
      },
      explanation: {
        en: 'Prior to "dig", accessing nested keys required chaining safe navigation operators. "dig" inspects each level and returns nil if any step is nil or missing.',
        bn: 'এর মাধ্যমে কোনো দীর্ঘ if বা সেফ নেভিগেশনের ঝামেলা ছাড়াই গভীর নেস্টেড ডেটা নিরাপদে পড়া যায়।'
      }
    },
    {
      id: 'ruby-3-pattern-matching-case-in-ex3',
      kind: 'mcq',
      topic: 'ruby-3-pattern-matching-case-in-destructuring',
      question: {
        en: 'In Ruby 3 pattern matching, how does "case [10, 20, 30]; in [first, *rest]; ... end" process the array?',
        bn: 'Ruby ৩ প্যাটার্ন ম্যাচিংয়ে "case [10, 20, 30]; in [first, *rest]; ... end" কীভাবে অ্যারেকে বিশ্লেষণ করে?'
      },
      options: [
        {
          en: 'It binds "first" to 10 and captures the remaining elements [20, 30] into "rest" using array decomposition',
          bn: 'এটি "first"-এ ১০ বাইন্ড করে এবং অবশিষ্ট উপাদানগুলোকে [২০, ৩০] "rest"-এ সংরক্ষণ করে'
        },
        {
          en: 'It raises a PatternError because splats (*) are forbidden in pattern matching',
          bn: 'এটি PatternError ঘটায় কারণ প্যাটার্ন ম্যাচিংয়ে স্প্ল্যাট (*) নিষিদ্ধ'
        },
        {
          en: 'It reverses the elements of the array in place',
          bn: 'এটি অ্যারেকে উল্টো করে সাজিয়ে দেয়'
        },
        {
          en: 'Pattern matching only works on strings in Ruby 3',
          bn: 'Ruby ৩-এ প্যাটার্ন ম্যাচিং কেবল স্ট্রিংয়ের সাথেই কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The splat operator (*) captures remaining elements during pattern matching destructuring.',
        bn: 'প্রথম উপাদানটি আলাদা করে বাকি সমস্ত অংশকে একটি নতুন তালিকায় ভরে দেয়।'
      },
      explanation: {
        en: 'Ruby 3 pattern matching matches the structure and automatically binds variables in the local scope, with splats capturing variable-length tail elements.',
        bn: 'Ruby ৩ সংস্করণে প্যাটার্ন ম্যাচিং কাঠামোগতভাবে ডেটা ভেঙে ফেলে প্রয়োজনীয় অংশগুলোকে এক নিমেষে ভ্যারিয়েবলে সংরক্ষণ করে।'
      }
    },
    {
      id: 'array-set-operations-intersection-difference-ex4',
      kind: 'mcq',
      topic: 'ruby-array-set-operations-ampersand-minus',
      question: {
        en: 'What is the evaluated output of "[1, 2, 3, 4] & [3, 4, 5, 6]" in Ruby?',
        bn: 'Ruby-তে "[1, 2, 3, 4] & [3, 4, 5, 6]" এক্সপ্রেশনটি রান করলে কী ফলাফল পাওয়া যায়?'
      },
      options: [
        {
          en: '[3, 4] (the mathematical set intersection containing only elements present in both arrays without duplicates)',
          bn: '[৩, ৪] (গাণিতিক সেট ইন্টারসেকশন যা কেবল উভয় অ্যারেতে বিদ্যমান উপাদানগুলোকে নিয়ে তৈরি হয়)'
        },
        {
          en: '[1, 2, 3, 4, 5, 6] (the union of both)',
          bn: '[১, ২, ৩, ৪, ৫, ৬] (উভয়ের ইউনিয়ন)'
        },
        {
          en: '[1, 2] (the difference)',
          bn: '[১, ২] (বিয়োগফল)'
        },
        {
          en: 'Bitwise AND operations are not supported on arrays',
          bn: 'অ্যারেতে বিটওয়াইজ AND অপারেশন সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: '& performs set intersection between two Ruby arrays.',
        bn: 'দুটো তালিকার সাধারণ বা কমন উপাদানগুলো খুঁজে বের করার সেট অপারেশন।'
      },
      explanation: {
        en: 'Ruby arrays implement set operations directly via operators: "&" for intersection, "|" for union, and "-" for difference, maintaining unique elements.',
        bn: 'Ruby অ্যারেতে & দিয়ে ইন্টারসেকশন, | দিয়ে ইউনিয়ন এবং - দিয়ে বাদ দেওয়ার কাজ সরাসরি করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-arrays-and-the-hash',
    title: {
      en: 'Ruby Arrays & Hashes Quiz',
      bn: 'Ruby অ্যারে এবং হ্যাশ কুইজ'
    },
    questions: [
      {
        id: 'quiz-compact-and-flatten-transformation',
        kind: 'mcq',
        topic: 'ruby-array-compact-and-flatten',
        question: {
          en: 'What does calling "[[1, nil], [2, [3, nil]]].flatten.compact" produce in Ruby?',
          bn: 'Ruby-তে "[[1, nil], [2, [3, nil]]].flatten.compact" কল করলে কী ফলাফল পাওয়া যায়?'
        },
        options: [
          {
            en: '[1, 2, 3] (flatten recursively unwraps all nested arrays into a single 1D list, and compact strips out all nil values)',
            bn: '[১, ২, ৩] (flatten সমস্ত নেস্টেড অ্যারেকে একটি এক-মাত্রিক তালিকায় রূপান্তর করে এবং compact সমস্ত nil মান মুছে ফেলে)'
          },
          {
            en: '[[1], [2, 3]]',
            bn: '[[১], [২, ৩]]'
          },
          {
            en: '[nil, nil]',
            bn: '[nil, nil]'
          },
          {
            en: 'compact was deprecated in modern Ruby',
            bn: 'আধুনিক Ruby-তে compact মেথড বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'flatten removes nesting; compact removes nil values.',
          bn: 'ভেতরের ব্র্যাকেট ভেঙে সমতল করা এবং খালি nil মুছে ফেলার চমৎকার কম্বিনেশন।'
        },
        explanation: {
          en: 'flatten converts arbitrary multidimensional arrays into a flat sequence. compact filters out every nil element, yielding a clean primitive list.',
          bn: 'জটিল নেস্টেড ডেটা পরিষ্কার করে সরাসরি ব্যবহারের উপযোগী করার আদর্শ পাইপলাইন।'
        }
      },
      {
        id: 'quiz-transform-keys-and-values',
        kind: 'mcq',
        topic: 'ruby-hash-transform-keys-and-values',
        question: {
          en: 'What capability did the introduction of "transform_keys" and "transform_values" bring to native Ruby Hashes?',
          bn: 'Ruby হ্যাশে "transform_keys" এবং "transform_values" মেথড যুক্ত হওয়ার ফলে কোন সুবিধা তৈরি হয়েছিল?'
        },
        options: [
          {
            en: 'It allows modifying keys (e.g. converting string keys to symbols with "&:to_sym") or values without rebuilding the hash manually with each_with_object',
            bn: 'এটি ম্যানুয়ালি লুপ না চালিয়ে এক লাইনেই হ্যাশের কি (যেমন স্ট্রিংকে সিম্বলে রূপান্তর) বা মানগুলোকে রূপান্তর করার সুবিধা দেয়'
          },
          {
            en: 'It reboots the application server to apply changes',
            bn: 'পরিবর্তন কার্যকর করতে এটি অ্যাপ্লিকেশন সার্ভার রিবুট করে'
          },
          {
            en: 'It writes the hash directly into an encrypted file',
            bn: 'এটি হ্যাশটিকে সরাসরি একটি এনক্রিপ্টেড ফাইলে লিখে দেয়'
          },
          {
            en: 'transform_keys is strictly limited to integers',
            bn: 'transform_keys কেবল পূর্ণসংখ্যার সাথেই ব্যবহার করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'transform_keys and transform_values cleanly map keys and values.',
          bn: 'হ্যাশের কি বা মানকে এক নিমেষে নতুন রূপ দেওয়ার চমৎকার মেথড।'
        },
        explanation: {
          en: 'Methods like "hash.transform_keys(&:to_sym)" provide clean, non-mutating transformations of keys and values, replacing verbose boilerplate.',
          bn: 'এর মাধ্যমে কোড ছোট হয় এবং কোনো ম্যানুয়াল রূপান্তর লুপ লেখার প্রয়োজন হয় না।'
        }
      },
      {
        id: 'quiz-pattern-matching-pin-operator',
        kind: 'mcq',
        topic: 'ruby-pattern-matching-pin-operator',
        question: {
          en: 'In Ruby pattern matching, what does the pin operator ("^") do when matching a variable (e.g. "expected_id = 42; case payload; in { id: ^expected_id }; ... end")?',
          bn: 'Ruby প্যাটার্ন ম্যাচিংয়ে পিন অপারেটর ("^") ভ্যারিয়েবলের ক্ষেত্রে কী কাজ করে (যেমন "expected_id = 42; case payload; in { id: ^expected_id }; ... end")?'
        },
        options: [
          {
            en: 'It prevents overwriting the variable with a new value, forcing the pattern to check for equality against the existing variable\'s current value',
            bn: 'এটি ভ্যারিয়েবলে নতুন মান বসা বন্ধ করে এবং প্যাটার্নটিকে বিদ্যমান ভ্যারিয়েবলের বর্তমান মানের সাথে সমতা যাচাই করতে বাধ্য করে'
          },
          {
            en: 'It calculates the bitwise XOR exponent of the id',
            bn: 'এটি আইডির বিটওয়াইজ XOR এক্সপোনেন্ট হিসাব করে'
          },
          {
            en: 'It prints the value to standard output',
            bn: 'এটি মানটিকে স্ট্যান্ডার্ড আউটপুটে প্রিন্ট করে'
          },
          {
            en: 'The pin operator is only valid in Elixir, not Ruby',
            bn: 'পিন অপারেটর কেবল Elixir-এ বৈধ, Ruby-তে নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The pin operator (^) checks value equality rather than binding a new variable.',
          bn: 'নতুন মান না বসিয়ে আগের মানের সাথে হুবহু মিলিয়ে দেখার পিন ব্যবস্থা।'
        },
        explanation: {
          en: 'Normally, a variable name in an "in" pattern binds the incoming value. Prefixing with "^" (pin operator) evaluates equality against the existing variable value.',
          bn: 'এর ফলে আগের ভ্যারিয়েবলের মানের সাথে প্যাটার্নের মান মিলে গেলেই কেবল ব্রাঞ্চটি চলে।'
        }
      },
      {
        id: 'quiz-fetch-key-error-handling',
        kind: 'mcq',
        topic: 'ruby-fetch-key-error-vs-bracket-nil',
        question: {
          en: 'Why is using "hash.fetch(:critical_setting)" standard best practice over "hash[:critical_setting]" for mandatory configuration dictionaries?',
          bn: 'বাধ্যতামূলক কনফিগারেশন ডিকশনারির ক্ষেত্রে "hash[:critical_setting]"-এর চেয়ে "hash.fetch(:critical_setting)" ব্যবহার করা কেন সেরা আদর্শ?'
        },
        options: [
          {
            en: 'If the key is missing, "fetch" immediately raises a KeyError at the point of configuration, preventing silent nil bugs from propagating downstream into production',
            bn: 'কি অনুপস্থিত থাকলে "fetch" সাথে সাথে একটি KeyError ঘটায়, ফলে কোনো গোপন nil বাগ তৈরি হয়ে পরবর্তীতে প্রোডাকশন ক্র্যাশ করতে পারে না'
          },
          {
            en: 'fetch is 100 times faster than bracket access',
            bn: 'fetch ব্র্যাকেটের চেয়ে ১০০ গুণ দ্রুত চলে'
          },
          {
            en: 'fetch writes a backup copy of the key to disk',
            bn: 'fetch কি-র একটি ব্যাকআপ কপি ডিস্কে সংরক্ষণ করে'
          },
          {
            en: 'KeyError cannot be caught by rescue blocks',
            bn: 'KeyError কোনো rescue ব্লক দিয়ে ধরা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'fetch fails fast with a KeyError when required keys are missing.',
          bn: 'ভুল থাকলে সাথে সাথে ধরা পড়বে—নীরবে ভুল মান নিয়ে সামনে এগিয়ে যাবে না।'
        },
        explanation: {
          en: 'Silent nils cause obscure errors far from their origin. "fetch" enforces fail-fast engineering by blowing up immediately when required keys are not present.',
          bn: 'এর মাধ্যমে কনফিগারেশনের ভুল তাৎক্ষণিকভাবে শনাক্ত করা যায় এবং কোড নির্ভরযোগ্য থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'gems-and-the-bundle',
    title: {
      en: 'Gems, Bundler, Gemfile & Isolated Runtime Environments',
      bn: 'জেমস, Bundler, Gemfile এবং আইসোলেটেড রানটাইম পরিবেশ'
    }
  }
};
