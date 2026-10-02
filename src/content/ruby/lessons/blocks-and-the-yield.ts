import type { Lesson } from '../../../lib/types';

export const BlocksAndTheYieldLesson: Lesson = {
  slug: 'blocks-and-the-yield',
  tech: 'ruby',
  title: {
    en: 'Blocks, Closures, Yield & Functional Enumerable Pipelines',
    bn: 'ব্লক, ক্লোজার, Yield এবং ফাংশনাল Enumerable পাইপলাইন'
  },
  summary: {
    en: 'Master functional programming and closures in Ruby. Understand anonymous blocks with do/end and curly braces, pause and delegate execution via the yield keyword and block_given? guard, contrast Procs versus Lambdas on arity and return semantics, utilize the symbol-to-proc operator (&:method), and compose elegant Enumerable data pipelines.',
    bn: 'Ruby-র ফাংশনাল প্রোগ্রামিং এবং ক্লোজার সম্পূর্ণ আয়ত্ত করুন। do/end এবং দ্বিতীয় বন্ধনীযুক্ত অ্যানোনিমাস ব্লক, yield কি-ওয়ার্ড এবং block_given? গার্ড দিয়ে মেথড থেকে নিয়ন্ত্রণ স্থানান্তর, আর্গুমেন্ট গ্রহণ ও রিটার্ন আচরণে Proc বনাম Lambda-র পার্থক্য, সিম্বল-টু-প্রোক (&:method) অপারেটর এবং Enumerable পাইপলাইনের গভীর ব্যবহার শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'blocks-and-the-yield-keyword-heading',
      text: {
        en: 'Blocks, Closures, and the yield Control Flow',
        bn: 'ব্লক, ক্লোজার এবং yield নিয়ন্ত্রণ প্রবাহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Passing chunks of executable logic into functions is a hallmark of expressive programming. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), every method can implicitly accept an anonymous closure called a block. Blocks are defined using either curly braces for single-line statements or "do ... end" for multi-line logic. Inside a method, invoking the "yield" keyword temporarily pauses method execution and delegates control directly to the attached block, passing arguments between pipes ("|item|"). To prevent fatal "LocalJumpError" exceptions when a caller provides no block, developers guard execution using the "block_given?" predicate.',
        bn: 'ফাংশনের ভেতর সরাসরি কোডের অংশ পাঠিয়ে কাজ করানো মার্জিত প্রোগ্রামিংয়ের অন্যতম লক্ষণ। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে প্রতিটি মেথড কোনো ঘোষণা ছাড়াই একটি অ্যানোনিমাস ক্লোজার বা ব্লক গ্রহণ করতে পারে। একক লাইনের জন্য দ্বিতীয় বন্ধনী এবং একাধিক লাইনের জন্য "do ... end" দিয়ে ব্লক লেখা হয়। মেথডের ভেতরে "yield" কি-ওয়ার্ডটি সাময়িকভাবে মেথড থামিয়ে ব্লকের কাছে নিয়ন্ত্রণ পাঠিয়ে দেয় এবং পাইপ চিহ্নের ("|item|") মাধ্যমে আর্গুমেন্ট আদান-প্রদান করে। কলার কোনো ব্লক না পাঠালে যেন ক্ষতিকর "LocalJumpError" না ঘটে, সেজন্য ডেভেলপাররা "block_given?" মেথড দিয়ে পরীক্ষা করে নেন।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby block execution flow via yield, context delegation, and Proc versus Lambda return semantic boundaries.',
        bn: 'চিত্র ১: yield-এর মাধ্যমে Ruby ব্লকের নিয়ন্ত্রণ প্রবাহ, কনটেক্সট বিনিময় এবং Proc বনাম Lambda-র রিটার্ন পার্থক্যের স্থাপত্য চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY YIELD &amp; CLOSURE CONTROL DELEGATION</text>

  <!-- Left: Method Execution Scope -->
  <g transform="translate(35, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#0284c7" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Method: measure_time</text>

    <rect x="15" y="45" width="210" height="45" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">start = Time.now</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">Captures initial timestamp</text>

    <rect x="15" y="100" width="210" height="55" rx="5" fill="#0f172a" stroke="#fbbf24" stroke-width="2" />
    <text x="25" y="122" fill="#fbbf24" font-size="11" font-family="monospace" font-weight="bold">yield(start)</text>
    <text x="25" y="142" fill="#cbd5e1" font-size="9" font-family="sans-serif">Delegates control to caller block</text>

    <rect x="15" y="165" width="210" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="185" fill="#34d399" font-size="10" font-family="monospace">elapsed = Time.now - start</text>
    <text x="25" y="202" fill="#cbd5e1" font-size="9" font-family="sans-serif">Resumes after block finishes</text>
  </g>

  <!-- Middle: Block Execution -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#d97706" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Caller Anonymous Block</text>

    <rect x="15" y="45" width="210" height="85" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">do |t|</text>
    <text x="35" y="88" fill="#38bdf8" font-size="10" font-family="monospace">  sleep(0.5)</text>
    <text x="35" y="106" fill="#34d399" font-size="10" font-family="monospace">  "Completed!"</text>
    <text x="25" y="122" fill="#fbbf24" font-size="10" font-family="monospace">end</text>

    <rect x="15" y="140" width="210" height="75" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="162" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Lexical Scope Capture:</text>
    <text x="25" y="180" fill="#f8fafc" font-size="9" font-family="sans-serif">Retains local variables from</text>
    <text x="25" y="196" fill="#f8fafc" font-size="9" font-family="sans-serif">enclosing caller environment</text>
  </g>

  <!-- Right: Proc vs Lambda -->
  <g transform="translate(565, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#7c3aed" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Proc vs Lambda</text>

    <rect x="15" y="45" width="210" height="75" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">Lambda (->(x) { ... })</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Strict arity checks</text>
    <text x="25" y="100" fill="#cbd5e1" font-size="9" font-family="sans-serif">• "return" exits only lambda</text>

    <rect x="15" y="130" width="210" height="85" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="25" y="150" fill="#f472b6" font-size="10" font-family="sans-serif" font-weight="bold">Proc (Proc.new { ... })</text>
    <text x="25" y="168" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Lenient arity (ignores extra)</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="9" font-family="sans-serif">• "return" jumps out of enclosing</text>
    <text x="25" y="200" fill="#cbd5e1" font-size="9" font-family="sans-serif">  lexical method scope</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'procs-lambdas-and-enumerable-heading',
      text: {
        en: 'Procs, Lambdas, Symbol-to-Proc, and Enumerable Pipelines',
        bn: 'Proc, Lambda, সিম্বল-টু-প্রোক এবং Enumerable পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When blocks must be stored as first-class objects in variables, Ruby wraps them into "Proc" instances. Ruby provides 2 variants of Procs: regular Procs created with "Proc.new", and Lambdas declared via "lambda" or the stabby syntax ("->(x) { x * 2 }"). Lambdas check arguments strictly and isolate return statements. Conversely, regular Procs adjust missing arguments to nil and execute bare returns from the enclosing method. By prepending an ampersand to a Symbol ("&:upcase"), Ruby invokes "to_proc", converting symbol identifiers directly into closures for functional "Enumerable" methods like "map", "select", and "reduce".',
        bn: 'যখন কোনো ব্লককে ভ্যারিয়েবলে সংরক্ষণ করে ফার্স্ট-ক্লাস অবজেক্ট হিসেবে ব্যবহারের প্রয়োজন হয়, Ruby তাকে "Proc" ইনস্ট্যান্সে রূপান্তর করে। Ruby মূলত ২ ধরনের Proc প্রদান করে: সাধারণ প্রোক ("Proc.new") এবং ল্যাম্বডা ("lambda" বা স্ট্যাবি সিনট্যাক্স "->(x) { x * 2 }")। Lambda আর্গুমেন্টের সংখ্যা কঠোরভাবে যাচাই করে এবং রিটার্ন স্টেটমেন্টকে নিজের মধ্যেই সীমাবদ্ধ রাখে। অপরদিকে সাধারণ Proc ভুল আর্গুমেন্টকে অগ্রাহ্য করে এবং রিটার্ন দিলে মূল মেথড থেকেই সরাসরি বের হয়ে যায়। কোনো সিম্বলের সামনে অ্যামপারস্যান্ড ("&:upcase") বসালে Ruby স্বয়ংক্রিয়ভাবে "to_proc" মেথড কল করে সিম্বলটিকে ব্লকে পরিণত করে, যা "map", "select" ও "reduce"-এর মতো "Enumerable" পাইপলাইনে চমৎকার সংক্ষিপ্ত কোড উপহার দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby block yielding, block_given? guard check, Proc vs Lambda arity differences, and Enumerable transformations.',
        bn: 'Ruby ব্লক yield, block_given? গার্ড চেক, Proc বনাম Lambda আর্গুমেন্ট পার্থক্য এবং Enumerable রূপান্তরের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Blocks, Yield, Procs, and Enumerable Pipelines

export class RubyBlockEngine {
  // Simulates a method that accepts a block via yield
  public static measureTask<T>(taskName: string, block?: () => T): { name: string; result: T | null; elapsedMs: number } {
    // Simulates "return 'No block provided' unless block_given?"
    if (!block) {
      console.log('block_given? is FALSE: No block passed!');
      return { name: taskName, result: null, elapsedMs: 0 };
    }

    const start = 100;
    // yield execution to the block
    const res = block();
    const end = 150;

    return {
      name: taskName,
      result: res,
      elapsedMs: end - start
    };
  }

  // Simulates Proc vs Lambda arity verification
  public static callClosure(closureType: 'proc' | 'lambda', expectedArity: number, passedArgs: any[]): string {
    if (closureType === 'lambda') {
      // Lambdas enforce strict arity
      if (passedArgs.length !== expectedArity) {
        throw new Error('ArgumentError: wrong number of arguments (given ' + passedArgs.length + ', expected ' + expectedArity + ')');
      }
      return 'Lambda executed successfully with args: [' + passedArgs.join(', ') + ']';
    } else {
      // Procs have lenient arity (pads missing with undefined/nil, ignores extra)
      return 'Proc executed leniently with ' + passedArgs.length + ' args';
    }
  }

  // Simulates Enumerable pipeline: [10, 20, 30] -> select (>15) -> map (* 2) -> reduce (sum)
  public static runEnumerablePipeline(numbers: number[]): { filtered: number[]; mapped: number[]; sum: number } {
    const filtered = numbers.filter(n => n > 15);     // select { |n| n > 15 }
    const mapped = filtered.map(n => n * 2);          // map { |n| n * 2 }
    const sum = mapped.reduce((acc, n) => acc + n, 0); // reduce(:+)

    return { filtered, mapped, sum };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Ruby Method Yield & block_given? ---');
const taskResult = RubyBlockEngine.measureTask('Compute Payroll', () => {
  return 'Payroll Processed for 100 Employees';
});
console.log('Task Name:', taskResult.name); // Compute Payroll
console.log('Yield Result:', taskResult.result); // Payroll Processed for 100 Employees
console.log('Elapsed Time (ms):', taskResult.elapsedMs); // 50

console.log('\n--- 2. Testing Proc vs Lambda Arity Strictness ---');
// Proc ignores extra arguments
const procOutput = RubyBlockEngine.callClosure('proc', 1, ['Alpha', 'ExtraBeta']);
console.log('Proc Behavior:', procOutput);

try {
  // Lambda throws ArgumentError on mismatched arguments
  RubyBlockEngine.callClosure('lambda', 1, ['Alpha', 'ExtraBeta']);
} catch (err: any) {
  console.log('Lambda Behavior Caught:', err.message);
}

console.log('\n--- 3. Testing Enumerable Functional Pipeline ---');
const rawNumbers = [10, 20, 30];
const pipelineResult = RubyBlockEngine.runEnumerablePipeline(rawNumbers);
console.log('Filtered (select > 15):', pipelineResult.filtered); // [20, 30]
console.log('Mapped (map * 2):', pipelineResult.mapped);           // [40, 60]
console.log('Reduced (sum):', pipelineResult.sum);                 // 100`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Block & yield',
          def: {
            en: 'Anonymous chunk of code passed to a method and triggered on demand with the yield keyword.',
            bn: 'মেথডে পাঠানো অ্যানোনিমাস কোডের খণ্ড যা yield কি-ওয়ার্ডের মাধ্যমে প্রয়োজনমতো চালানো হয়।'
          }
        },
        {
          term: 'block_given?',
          def: {
            en: 'Built-in predicate method checking if the caller supplied an executable block before yielding.',
            bn: 'বিল্ট-ইন মেথড যা yield করার আগে কলার কোনো ব্লক পাঠিয়েছে কি না তা পরীক্ষা করে নেয়।'
          }
        },
        {
          term: 'Proc vs Lambda',
          def: {
            en: 'Two closure types: Lambdas enforce strict arity and local returns; Procs are lenient and return globally.',
            bn: 'ক্লোজারের রূপ: Lambda কঠোর আর্গুমেন্ট ও লোকাল রিটার্ন মানে; আর Proc শিথিল আর্গুমেন্ট ও গ্লোবাল রিটার্ন দেয়।'
          }
        },
        {
          term: 'Enumerable Module',
          def: {
            en: 'Foundational mixin providing collection query and transformation methods (map, select, reduce, any?).',
            bn: 'মূল মিক্সইন যা কালেকশন প্রসেসিংয়ের জন্য map, select, reduce এবং any?-এর মতো মেথড প্রদান করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'block-given-guard-ex1',
      kind: 'mcq',
      topic: 'ruby-yield-and-block-given-guard',
      question: {
        en: 'What error occurs if a Ruby method invokes "yield" when the caller did not pass a block?',
        bn: 'কলার কোনো ব্লক না পাঠানো সত্ত্বেও একটি Ruby মেথড যদি "yield" কল করে তবে কোন এররটি ঘটে?'
      },
      options: [
        {
          en: 'A "LocalJumpError: no block given (yield)" is raised at runtime',
          bn: 'রানটাইমে একটি "LocalJumpError: no block given (yield)" এরর ঘটে'
        },
        {
          en: 'The operating system reboots instantly',
          bn: 'অপারেটিং সিস্টেম সাথে সাথে রিবুট হয়'
        },
        {
          en: 'It silently prints the word "nil" without failing',
          bn: 'কোনো এরর না দিয়ে এটি নীরবে "nil" প্রিন্ট করে'
        },
        {
          en: 'yield was deprecated in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে yield বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Yielding without an attached block raises a LocalJumpError.',
        bn: 'ব্লক না থাকলে নিয়ন্ত্রণ কোথাও ঝাঁপ দিতে পারে না বলেই এই এরর ঘটে।'
      },
      explanation: {
        en: 'Because yield attempts to jump execution context to a caller block, missing blocks trigger a LocalJumpError. Always guard optional blocks with "if block_given?".',
        bn: 'ব্লক অনুপস্থিত থাকলে yield কাজ করতে পারে না, তাই সুরক্ষার জন্য "block_given?" ব্যবহার করা হয়।'
      }
    },
    {
      id: 'proc-vs-lambda-return-semantics-ex2',
      kind: 'mcq',
      topic: 'proc-vs-lambda-return-statement-semantics',
      question: {
        en: 'How does an explicit "return" statement behave inside a Lambda compared to inside a standard Proc?',
        bn: 'সাধারণ Proc-এর তুলনায় একটি Lambda-র ভেতরে "return" স্টেটমেন্ট দিলে তার আচরণ কেমন হয়?'
      },
      options: [
        {
          en: 'Inside a Lambda, "return" exits only the lambda itself; inside a Proc, "return" exits the entire enclosing lexical method scope',
          bn: 'Lambda-র ভেতরে "return" দিলে কেবল ল্যাম্বডাটি সমাপ্ত হয়; আর Proc-এর ভেতরে "return" দিলে তা মূল এনক্লোজিং মেথড থেকেই পুরোপুরি বের হয়ে যায়'
        },
        {
          en: 'Lambda crashes the computer while Proc executes normally',
          bn: 'Lambda কম্পিউটার ক্র্যাশ করায় আর Proc স্বাভাবিকভাবে চলে'
        },
        {
          en: 'There is zero difference between Proc and Lambda returns',
          bn: 'Proc এবং Lambda-র রিটার্নের মাঝে কোনো পার্থক্য নেই'
        },
        {
          en: 'Lambdas do not allow the return keyword under any circumstances',
          bn: 'Lambda-র ভেতরে কোনো অবস্থাতেই return কি-ওয়ার্ড লেখা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'A lambda acts like a regular method with local returns; a proc returns from its enclosing method.',
        bn: 'ল্যাম্বডা সাধারণ মেথডের মতো নিজের থেকে ফেরে, আর প্রোক মেথডের বাইরে বের করে দেয়।'
      },
      explanation: {
        en: 'Lambdas behave like regular anonymous methods: return exits the lambda. Procs act like inline code snippets: return attempts to exit the method that defined the proc.',
        bn: 'ল্যাম্বডা মেথডের মতো স্থানীয় রিটার্ন নিশ্চিত করে, কিন্তু প্রোক পুরো মেথড স্কোপ থেকে রিটার্ন করে।'
      }
    },
    {
      id: 'symbol-to-proc-shorthand-ex3',
      kind: 'mcq',
      topic: 'symbol-to-proc-ampersand-shorthand',
      question: {
        en: 'What does the expression "[\'apple\', \'banana\'].map(&:upcase)" do in Ruby?',
        bn: 'Ruby-তে "[\'apple\', \'banana\'].map(&:upcase)" এক্সপ্রেশনটি কী কাজ করে?'
      },
      options: [
        {
          en: 'The "&" operator triggers Symbol#to_proc, expanding into the block "{ |item| item.upcase }", returning ["APPLE", "BANANA"]',
          bn: '"&" অপারেটরটি Symbol#to_proc কল করে এক্সপ্রেশনটিকে "{ |item| item.upcase }" ব্লকে রূপান্তরিত করে এবং ["APPLE", "BANANA"] রিটার্ন করে'
        },
        {
          en: 'It deletes all vowels from the strings',
          bn: 'এটি স্ট্রিং থেকে সমস্ত ভাওয়েল মুছে ফেলে'
        },
        {
          en: 'It converts the array into a binary executable file',
          bn: 'এটি অ্যারেকে একটি বাইনারি এক্সিকিউটেবল ফাইলে রূপান্তর করে'
        },
        {
          en: 'The ampersand symbol syntax is illegal in Ruby 3',
          bn: 'Ruby ৩-এ অ্যামপারস্যান্ড সিনট্যাক্স সম্পূর্ণ অবৈধ'
        }
      ],
      answer: 0,
      hint: {
        en: '&:method calls Symbol#to_proc to concisely invoke a method on each element.',
        bn: 'প্রতিটি উপাদানের ওপর নির্দিষ্ট মেথড চালানোর জন্য এটি Ruby-র সবচেয়ে প্রিয় সংক্ষিপ্ত সিনট্যাক্স।'
      },
      explanation: {
        en: 'Prepending "&" to a symbol invokes its "to_proc" method, creating a proc that sends the named method to each element passed to it by map.',
        bn: 'এটি কোডকে সংক্ষিপ্ত এবং অসাধারণ পাঠযোগ্য করে তোলে।'
      }
    },
    {
      id: 'enumerable-module-contract-ex4',
      kind: 'mcq',
      topic: 'enumerable-module-contract-each-method',
      question: {
        en: 'What single method must a custom Ruby class implement to gain access to all Enumerable methods (map, select, reduce, all?, etc.) by including Enumerable?',
        bn: 'একটি কাস্টম Ruby ক্লাসে Enumerable মডিউল include করে তার সমস্ত মেথড (map, select, reduce ইত্যাদি) পেতে হলে ক্লাসে কেবল কোন ১ টি মেথড ডিফাইন করতে হয়?'
      },
      options: [
        {
          en: 'The "each" method, yielding each contained element one by one to a caller block',
          bn: '"each" মেথডটি, যা ক্লাসের প্রতিটি উপাদানকে একের পর এক কলার ব্লকে yield করে'
        },
        {
          en: 'The "super_compute_all" method',
          bn: '"super_compute_all" মেথডটি'
        },
        {
          en: 'The "to_binary_stream" method',
          bn: '"to_binary_stream" মেথডটি'
        },
        {
          en: 'Classes must manually implement every one of the 50 Enumerable methods',
          bn: 'ক্লাসগুলোকে ম্যানুয়ালি ৫০ টি Enumerable মেথডই আলাদা করে লিখতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Enumerable builds its entire catalog of traversal methods on top of each.',
        bn: 'কেবল উপাদানগুলো একের পর এক ঘুরিয়ে দেওয়ার ক্ষমতা দিলেই বাকি সব স্বয়ংক্রিয়ভাবে কাজ করে।'
      },
      explanation: {
        en: 'The Enumerable module is a mixin masterclass: by defining only "def each; yield item; end", your class gains over 50 search, sorting, and transformation algorithms for free.',
        bn: 'শুধু "each" মেথড লিখে দিলে বাকি ৫০ টিরও বেশি সার্চ ও ফিল্টারিং মেথড বিনামূল্যে পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-blocks-and-the-yield',
    title: {
      en: 'Ruby Blocks, Yield & Enumerable Quiz',
      bn: 'Ruby ব্লক, Yield এবং Enumerable কুইজ'
    },
    questions: [
      {
        id: 'quiz-enumerator-lazy-infinite-streams',
        kind: 'mcq',
        topic: 'enumerator-lazy-infinite-evaluations',
        question: {
          en: 'Why is using "lazy" (e.g. "(1..Float::INFINITY).lazy.select(&:even?).first(5)") essential when processing infinite sequences or massive file streams in Ruby?',
          bn: 'Ruby-তে অসীম সিকোয়েন্স বা বিশাল ফাইল স্ট্রিম প্রসেস করার সময় "lazy" ব্যবহার করা (যেমন "(1..Float::INFINITY).lazy.select(&:even?).first(5)") কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'Without .lazy, Enumerable methods attempt to evaluate the entire collection eagerly in memory before continuing, triggering an infinite loop or memory exhaustion',
            bn: '.lazy না থাকলে Enumerable মেথড পুরো কালেকশনকে মেমরিতে হিসাব করতে গিয়ে অসীম লুপে আটকে পড়ে বা সার্ভারের সমস্ত মেমোরি শেষ করে ফেলে'
          },
          {
            en: 'It reduces battery temperature by 50 percent',
            bn: 'এটি ব্যাটারির তাপমাত্রা ৫০ শতাংশ হ্রাস করে'
          },
          {
            en: 'It converts numbers into Roman numerals',
            bn: 'এটি সংখ্যাগুলোকে রোমান সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'lazy evaluation was deprecated in modern Ruby',
            bn: 'আধুনিক Ruby-তে লেজি মূল্যায়ন বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lazy enumerators pull elements on demand one at a time.',
          bn: 'একসাথে পুরো ডেটা না টেনে কেবল যতটুকু চাওয়া হয়েছে ততটুকুই ধাপে ধাপে তৈরি করে।'
        },
        explanation: {
          en: 'Lazy enumeration defers evaluation until terminal methods (like first or take) request elements, enabling memory-efficient streaming of multi-gigabyte files or infinite series.',
          bn: 'ফলে বিশাল ফাইল বা অসীম ডেটা নিয়ে কাজ করার সময়ও মেমোরি ক্র্যাশ হয় না।'
        }
      },
      {
        id: 'quiz-block-syntax-precedence-braces-vs-do-end',
        kind: 'mcq',
        topic: 'block-syntax-operator-precedence-braces-vs-do-end',
        question: {
          en: 'In Ruby, what operator precedence difference exists between curly braces "{ ... }" and "do ... end" blocks?',
          bn: 'Ruby-তে দ্বিতীয় বন্ধনী "{ ... }" এবং "do ... end" ব্লকের মাঝে অপারেটর প্রেসিডেন্স বা অগ্রাধিকারের কী পার্থক্য রয়েছে?'
        },
        options: [
          {
            en: 'Curly braces have higher binding precedence than do...end, binding tightly to the innermost method call rather than outer method invocations',
            bn: 'দ্বিতীয় বন্ধনীর অগ্রাধিকার do...end-এর চেয়ে বেশি হওয়ায় এটি বাইরের মেথডের বদলে ভেতরের মেথডের সাথে শক্তভাবে যুক্ত হয়'
          },
          {
            en: 'do...end runs in parallel threads while curly braces run synchronously',
            bn: 'do...end প্যারালাল থ্রেডে চলে আর দ্বিতীয় বন্ধনী সিঙ্ক্রোনাসভাবে চলে'
          },
          {
            en: 'There is zero syntactical or binding difference between them',
            bn: 'তাদের মাঝে সিনট্যাক্স বা বাইন্ডিংয়ের কোনো পার্থক্য নেই'
          },
          {
            en: 'Curly braces were removed in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে দ্বিতীয় বন্ধনী সিনট্যাক্স বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Braces bind tightly to the immediate method; do...end binds more loosely.',
          bn: 'চেইন মেথডের ক্ষেত্রে ব্র্যাকেটের অগ্রাধিকার বেশি হওয়ায় তা একদম কাছের মেথডকে ধরে।'
        },
        explanation: {
          en: 'In "puts [1, 2].map { |n| n * 2 }", the brace block binds to map. With "puts [1, 2].map do ... end", do..end binds to puts, causing an unexpected argument error.',
          bn: 'এই কারণে পাইপলাইন ট্রান্সফর্মেশনে ব্র্যাকেট এবং সাইড-ইফেক্ট লুপে do..end ব্যবহার করার কনভেনশন রয়েছে।'
        }
      },
      {
        id: 'quiz-proc-currying-partial-application',
        kind: 'mcq',
        topic: 'proc-currying-partial-function-application',
        question: {
          en: 'What functional capability does calling the "curry" method on a Ruby Proc or Lambda provide?',
          bn: 'একটি Ruby Proc বা Lambda-র ওপর "curry" মেথড কল করলে কোন ফাংশনাল সুবিধা পাওয়া যায়?'
        },
        options: [
          {
            en: 'It enables partial application, allowing a function requiring multiple arguments to be called with fewer arguments, returning a new closure expecting the remainder',
            bn: 'এটি পার্শিয়াল অ্যাপ্লিকেশন সুবিধা দেয়, যার ফলে একাধিক আর্গুমেন্ট গ্রহণকারী ফাংশনকে কম আর্গুমেন্ট দিয়ে ডেকে অবশিষ্ট মানের জন্য নতুন ক্লোজার পাওয়া যায়'
          },
          {
            en: 'It translates Ruby source code into spice recipes',
            bn: 'এটি Ruby কোডকে রান্নার রেসিপিতে রূপান্তর করে'
          },
          {
            en: 'It automatically encrypts strings with password hashing',
            bn: 'এটি স্বয়ংক্রিয়ভাবে স্ট্রিং এনক্রিপ্ট করে'
          },
          {
            en: 'Currying is not supported in Ruby',
            bn: 'Ruby-তে কারিয়িং সমর্থন করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Currying transforms an N-argument function into a chain of single-argument functions.',
          bn: 'প্রয়োজনমতো ধাপে ধাপে আর্গুমেন্ট পাস করে নতুন ফাংশন বানানোর চমৎকার কৌশল।'
        },
        explanation: {
          en: 'Currying allows creating specialized helper functions. For example: "multiply = ->(x, y) { x * y }.curry; double = multiply.call(2); double.call(5) # => 10".',
          bn: 'এর মাধ্যমে একটি সাধারণ ফাংশন থেকে নির্দিষ্ট কাজের জন্য বিশেষায়িত সাব-ফাংশন তৈরি করা যায়।'
        }
      },
      {
        id: 'quiz-tap-and-then-object-inspection',
        kind: 'mcq',
        topic: 'ruby-tap-and-then-chaining-utilities',
        question: {
          en: 'What is the architectural purpose of the "tap" method in Ruby method chains (e.g. "User.new.tap { |u| u.name = \'Alice\' }")?',
          bn: 'Ruby মেথড চেইনে "tap" মেথড ব্যবহারের স্থাপত্যিক উদ্দেশ্য কী (যেমন "User.new.tap { |u| u.name = \'Alice\' }")?'
        },
        options: [
          {
            en: 'It yields self to the block for configuration or inspection and returns self, allowing seamless fluent method chaining without assigning intermediate temporary variables',
            bn: 'এটি কনফিগারেশন বা ডিবাগিংয়ের জন্য self-কে ব্লকে পাঠায় এবং পুনরায় self-কেই রিটার্ন করে, ফলে কোনো অস্থায়ী ভ্যারিয়েবল ছাড়াই সাবলীল চেইনিং সম্ভব হয়'
          },
          {
            en: 'It taps into the user microphone to record audio',
            bn: 'এটি অডিও রেকর্ড করতে ব্যবহারকারীর মাইক্রোফোন চালু করে'
          },
          {
            en: 'It clears the computer physical RAM cache',
            bn: 'এটি কম্পিউটারের ফিজিক্যাল র্যাম ক্যাশ সম্পূর্ণ মুছে দেয়'
          },
          {
            en: 'tap was replaced by then in Ruby 2.5',
            bn: 'Ruby ২.৫ সংস্করণে tap মেথডটি then দিয়ে প্রতিস্থাপন করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'tap yields self and returns self for fluent pipeline configuration.',
          bn: 'অবজেক্ট তৈরি করে তার ফিল্ড সেট করে এক লাইনেই অবজেক্টটিকে ফেরত পাওয়ার আদর্শ পদ্ধতি।'
        },
        explanation: {
          en: 'Unlike "then" (which returns the block\'s return value), "tap" always returns the receiver object itself, making it perfect for object instantiation and pipeline logging.',
          bn: 'ব্লকের ভেতরে যাই ঘটুক না কেন, tap সর্বদা মূল অবজেক্টটিকেই ফেরত দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'modules-and-the-mixin',
    title: {
      en: 'Modules, Mixins, Namespaces & the Method Lookup Chain',
      bn: 'মডিউল, মিক্সইন, নেমস্পেস এবং মেথড লুকআপ চেইন'
    }
  }
};
