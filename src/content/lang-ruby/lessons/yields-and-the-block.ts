import type { Lesson } from '../../../lib/types';

export const YieldsAndTheBlockLesson: Lesson = {
  slug: 'yields-and-the-block',
  tech: 'lang-ruby',
  title: {
    en: 'Ruby Core: Blocks, Closures & Execution Yields',
    bn: 'Ruby কোর: ব্লক, ক্লোজার এবং এক্সিকিউশন Yields'
  },
  summary: {
    en: 'A beginner overview of closure mechanics and control flow in Ruby. Understand anonymous blocks with do/end and curly braces. Learn to pause method execution to delegate control using the yield keyword, pass values safely across pipes (|item|), guard against missing blocks with block_given?, and capture closures as Proc objects using the ampersand (&) operator.',
    bn: 'Ruby-তে ক্লোজার মেকানিক্স এবং নিয়ন্ত্রণ প্রবাহের একটি বিস্তারিত শিক্ষানবিস গাইড। do/end ও দ্বিতীয় বন্ধনীযুক্ত অ্যানোনিমাস ব্লক বুঝুন। yield কি-ওয়ার্ড দিয়ে মেথডের নিয়ন্ত্রণ সাময়িক স্থানান্তর, পাইপের মাধ্যমে (|item|) মান বিনিময়, block_given? গার্ড এবং অ্যামপারস্যান্ড (&) অপারেটর দিয়ে ব্লককে Proc অবজেক্টে রূপান্তর করার কৌশল শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'blocks-and-yield-execution-heading',
      text: {
        en: 'Anonymous Blocks and the yield Keyword',
        bn: 'অ্যানোনিমাস ব্লক এবং yield কি-ওয়ার্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Dynamic delegation of custom logic into functions is central to Ruby\'s expressive design. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), every method can implicitly accept an anonymous closure called a block. Blocks are defined using either curly braces for concise one-liners or "do ... end" for multi-line logic. Inside a method, invoking the "yield" keyword temporarily pauses method execution and delegates control directly to the caller\'s block. Arguments passed to yield are received inside vertical pipes ("|value|"). Once the block finishes, execution seamlessly resumes inside the method, capturing the block\'s return value.',
        bn: 'ফাংশনের ভেতর কাস্টম লজিক সরাসরি পাঠিয়ে কাজ করানো Ruby-র মার্জিত ডিজাইনের অন্যতম প্রধান ভিত্তি। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে প্রতিটি মেথড কোনো ঘোষণা ছাড়াই একটি অ্যানোনিমাস ক্লোজার বা ব্লক গ্রহণ করতে পারে। একক লাইনের জন্য দ্বিতীয় বন্ধনী এবং একাধিক লাইনের জন্য "do ... end" দিয়ে ব্লক লেখা হয়। মেথডের ভেতরে "yield" কি-ওয়ার্ডটি সাময়িকভাবে মেথড থামিয়ে কলারের ব্লকের কাছে নিয়ন্ত্রণ পাঠিয়ে দেয়। yield-এ পাঠানো মানগুলো ব্লকে উল্লম্ব পাইপের ("|value|") মাধ্যমে গৃহীত হয়। ব্লকের কাজ শেষ হওয়া মাত্রই নিয়ন্ত্রণ পুনরায় মেথডে ফিরে আসে এবং ব্লকের রিটার্ন মান মেথডে কার্যকর হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby block execution lifecycle: method context pauses during yield, transfers arguments into pipe variables, and resumes with the returned value.',
        bn: 'চিত্র ১: Ruby ব্লক এক্সিকিউশন লাইফসাইকেল: yield-এর সময় মেথড থেমে পাইপ ভ্যারিয়েবলে ডেটা পাঠায় এবং ব্লকের ফলাফল নিয়ে পুনরায় চলতে থাকে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY BLOCK YIELD &amp; CONTEXT EXECUTION LIFECYCLE</text>

  <!-- Left: Method Frame -->
  <g transform="translate(35, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#0284c7" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Method: repeat(3)</text>

    <rect x="15" y="45" width="210" height="40" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">count.times do |i|</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Iteration starts at 0</text>

    <!-- Yield action -->
    <rect x="15" y="95" width="210" height="60" rx="5" fill="#0f172a" stroke="#fbbf24" stroke-width="2" />
    <text x="25" y="118" fill="#fbbf24" font-size="11" font-family="monospace" font-weight="bold">yield(i)</text>
    <text x="25" y="136" fill="#cbd5e1" font-size="9" font-family="sans-serif">Pauses method, sends index</text>

    <rect x="15" y="165" width="210" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="185" fill="#34d399" font-size="10" font-family="monospace">result = yield(i)</text>
    <text x="25" y="202" fill="#cbd5e1" font-size="9" font-family="sans-serif">Captures return value</text>
  </g>

  <!-- Middle: Block Scope -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#d97706" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Caller Anonymous Block</text>

    <rect x="15" y="45" width="210" height="85" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">{ |num|</text>
    <text x="35" y="88" fill="#38bdf8" font-size="10" font-family="monospace">  puts "Index: #{num}"</text>
    <text x="35" y="106" fill="#34d399" font-size="10" font-family="monospace">  num * 10 # return</text>
    <text x="25" y="122" fill="#fbbf24" font-size="10" font-family="monospace">}</text>

    <rect x="15" y="140" width="210" height="75" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="162" fill="#fbbf24" font-size="10" font-family="sans-serif" font-weight="bold">Lexical Scope Binding:</text>
    <text x="25" y="180" fill="#f8fafc" font-size="9" font-family="sans-serif">Block remembers variables</text>
    <text x="25" y="196" fill="#f8fafc" font-size="9" font-family="sans-serif">from where it was defined</text>
  </g>

  <!-- Right: block_given? and &block -->
  <g transform="translate(565, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#7c3aed" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Safety &amp; Proc Conversion</text>

    <rect x="15" y="45" width="210" height="75" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">block_given? Guard</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="monospace">return nil unless block_given?</text>
    <text x="25" y="100" fill="#34d399" font-size="9" font-family="sans-serif">Prevents LocalJumpError</text>

    <rect x="15" y="130" width="210" height="85" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="25" y="150" fill="#f472b6" font-size="10" font-family="sans-serif" font-weight="bold">&amp;block Parameter</text>
    <text x="25" y="168" fill="#cbd5e1" font-size="9" font-family="monospace">def task(&amp;block)</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="9" font-family="sans-serif">Converts block into Proc</text>
    <text x="25" y="200" fill="#fbbf24" font-size="9" font-family="monospace">block.call(args)</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'block-given-and-ampersand-conversion-heading',
      text: {
        en: 'The block_given? Guard and Explicit &block Parameters',
        bn: 'block_given? গার্ড এবং স্পষ্ট &block প্যারামিটার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Attempting to invoke "yield" when no closure was supplied by the caller triggers a runtime "LocalJumpError" exception. To write resilient methods, Ruby provides the "block_given?" predicate, returning default values or enumerators when callbacks are absent. In situations where code must store execution logic in an instance variable or pass it downstream, developers declare an explicit parameter with an ampersand ("&block"). This converts the implicit routine into a genuine "Proc" object callable via "block.call".',
        bn: 'কলার কোনো ক্লোজার না পাঠানো সত্ত্বেও "yield" কল করার চেষ্টা করলে রানটাইমে "LocalJumpError" এক্সেপশন ঘটে। নিরাপদ মেথড লেখার জন্য Ruby "block_given?" প্রিডিকেট প্রদান করে, যার মাধ্যমে কলব্যাক অনুপস্থিত থাকলে ডিফল্ট মান বা এনিউমারেটর ফেরত দেওয়া যায়। যখন কোনো লজিককে ভ্যারিয়েবলে সংরক্ষণ করতে হয় বা অন্য মেথডে পাঠাতে হয়, তখন প্যারামিটারের শুরুতে অ্যামপারস্যান্ড ("&block") ব্যবহার করা হয়। এটি অজ্ঞাত রুটিনটিকে একটি বাস্তব "Proc" অবজেক্টে রূপান্তর করে, যা পরবর্তীতে "block.call" দিয়ে চালানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby block yielding, argument passing via pipes, block_given? guard check, and Proc conversion.',
        bn: 'Ruby ব্লক yield, পাইপ দিয়ে আর্গুমেন্ট আদান-প্রদান, block_given? গার্ড চেক এবং Proc রূপান্তরের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Blocks, Yield Control Flow, and &block Conversion

export class RubyYieldSimulator {
  // Simulates "def custom_times(count); ... yield(i) ... end"
  public static customTimes<T>(count: number, block?: (index: number) => T): { iterations: number; outputs: T[] } {
    // Simulates "return to_enum(:custom_times, count) unless block_given?"
    if (!block) {
      console.log('block_given? is FALSE: No block passed!');
      return { iterations: 0, outputs: [] };
    }

    const outputs: T[] = [];
    for (let i = 0; i < count; i++) {
      // yield execution to the caller block with argument i
      const res = block(i);
      outputs.push(res);
    }

    return { iterations: count, outputs };
  }

  // Simulates explicit &block conversion to Proc: "def run_task(&block); block.call; end"
  public static executeAsProc(taskName: string, procFn: () => string): string {
    console.log('Executing Proc object for task:', taskName);
    return procFn();
  }
}

// Execution Demonstration
console.log('--- 1. Testing Ruby Method Yield with Block Arguments ---');
const timesResult = RubyYieldSimulator.customTimes(3, (idx) => {
  return 'Item ' + idx + ' computed value: ' + (idx * 10);
});

console.log('Total Iterations Completed:', timesResult.iterations); // 3
console.log('Yielded Results Collected:');
timesResult.outputs.forEach(out => console.log('  ->', out));

console.log('\n--- 2. Testing block_given? Guard (No Block Passed) ---');
const guardedResult = RubyYieldSimulator.customTimes(3);
console.log('Guarded Iterations without Block:', guardedResult.iterations); // 0

console.log('\n--- 3. Testing Explicit &block Proc Conversion ---');
const procOutput = RubyYieldSimulator.executeAsProc('Database Indexing', () => {
  return 'Index rebuild finished successfully in 20 milliseconds';
});
console.log('Proc Execution Output:', procOutput);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Block & Yield',
          def: {
            en: 'Anonymous chunk of code passed to a method and executed on demand using the yield keyword.',
            bn: 'মেথডে পাঠানো অ্যানোনিমাস কোডের খণ্ড যা yield কি-ওয়ার্ডের মাধ্যমে প্রয়োজনমতো চালানো হয়।'
          }
        },
        {
          term: 'block_given?',
          def: {
            en: 'Predicate returning true if the caller passed a block, guarding against LocalJumpError.',
            bn: 'মেথড যা কলার ব্লক পাঠিয়েছে কি না তা পরীক্ষা করে LocalJumpError এরর প্রতিরোধ করে।'
          }
        },
        {
          term: 'Block Arguments (|args|)',
          def: {
            en: 'Parameters enclosed in vertical pipe characters receiving arguments passed from yield.',
            bn: 'উল্লম্ব পাইপের ভেতরের প্যারামিটার যা yield থেকে পাঠানো মানগুলোকে গ্রহণ করে।'
          }
        },
        {
          term: 'Ampersand (&) Proc Conversion',
          def: {
            en: 'Syntax converting an implicit block into an explicit, first-class Proc object inside a method signature.',
            bn: 'সিনট্যাক্স যা মেথড সিগনেচারে একটি ব্লককে সরাসরি ফার্স্ট-ক্লাস Proc অবজেক্টে রূপান্তর করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'local-jump-error-no-block-ex1',
      kind: 'mcq',
      topic: 'ruby-local-jump-error-missing-block',
      question: {
        en: 'What exact exception does Ruby raise if a method calls "yield" when no block was provided by the caller?',
        bn: 'কলার কোনো ব্লক না দেওয়া সত্ত্বেও একটি Ruby মেথড যদি "yield" কল করে তবে সুনির্দিষ্টভাবে কোন এক্সেপশনটি ঘটে?'
      },
      options: [
        {
          en: 'A "LocalJumpError: no block given (yield)" is raised immediately at runtime',
          bn: 'রানটাইমে সাথে সাথে একটি "LocalJumpError: no block given (yield)" এক্সেপশন ঘটে'
        },
        {
          en: 'It returns false and continues executing',
          bn: 'এটি false রিটার্ন করে এবং স্বাভাবিকভাবে চলতে থাকে'
        },
        {
          en: 'It reboots the computer hardware instantly',
          bn: 'এটি কম্পিউটারের হার্ডওয়্যার সাথে সাথে রিবুট করে'
        },
        {
          en: 'yield was deprecated in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে yield বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calling yield without a block triggers a LocalJumpError.',
        bn: 'নিয়ন্ত্রণ কোথাও লাফ দিতে না পারায় এই জাম্প এররটি ঘটে।'
      },
      explanation: {
        en: 'Because yield expects to transfer execution to a caller closure, missing blocks trigger a LocalJumpError. Guard against this using "if block_given?".',
        bn: 'ব্লক অনুপস্থিত থাকলে yield চালানো অসম্ভব, তাই সুরক্ষার জন্য "block_given?" দিয়ে পরীক্ষা করতে হয়।'
      }
    },
    {
      id: 'ampersand-block-parameter-proc-ex2',
      kind: 'mcq',
      topic: 'ruby-ampersand-parameter-proc-conversion',
      question: {
        en: 'In the method definition "def register(&callback)", what does the ampersand prefix do to "callback"?',
        bn: '"def register(&callback)" মেথড সংজ্ঞায় "callback"-এর আগের অ্যামপারস্যান্ড চিহ্নটি কী কাজ করে?'
      },
      options: [
        {
          en: 'It converts the passed anonymous block into an explicit Proc object, binding it to the local variable "callback"',
          bn: 'এটি মেথডে পাঠানো অ্যানোনিমাস ব্লককে একটি বাস্তব Proc অবজেক্টে রূপান্তর করে এবং "callback" ভ্যারিয়েবলে যুক্ত করে'
        },
        {
          en: 'It encrypts the method arguments with a 128-bit key',
          bn: 'এটি ১২৮-বিট কি দিয়ে মেথডের আর্গুমেন্ট এনক্রিপ্ট করে'
        },
        {
          en: 'It deletes the block from RAM to save memory',
          bn: 'এটি মেমোরি বাঁচাতে র্যাম থেকে ব্লকটি মুছে ফেলে'
        },
        {
          en: 'Ampersand parameters are illegal in modern Ruby',
          bn: 'আধুনিক Ruby-তে অ্যামপারস্যান্ড প্যারামিটার সম্পূর্ণ অবৈধ'
        }
      ],
      answer: 0,
      hint: {
        en: '& in a parameter list captures the block as a Proc.',
        bn: 'ব্লককে সাধারণ ভ্যারিয়েবলের মতো সংরক্ষণ করতে বা অন্য কোথাও পাঠাতে & দিয়ে প্রোক বানানো হয়।'
      },
      explanation: {
        en: 'The ampersand in the parameter list captures the caller\'s block as a first-class Proc object, allowing it to be stored, passed to other methods, or invoked with ".call".',
        bn: 'এর মাধ্যমে ব্লককে যেকোনো অবজেক্টের মতো ফার্স্ট-ক্লাস ক্ষমতা দেওয়া যায়।'
      }
    },
    {
      id: 'block-return-value-capture-ex3',
      kind: 'mcq',
      topic: 'ruby-block-return-value-to-yield',
      question: {
        en: 'How does a method capture the value evaluated by a block during yield (e.g. "result = yield(item)")?',
        bn: 'yield করার সময় ব্লকের মূল্যায়িত মানটি মেথড কীভাবে গ্রহণ করে (যেমন "result = yield(item)")?'
      },
      options: [
        {
          en: 'The yield expression itself returns the value of the last evaluated expression in the block, assigning it directly to the receiving variable',
          bn: 'yield এক্সপ্রেশন নিজেই ব্লকের শেষ লাইনের মূল্যায়িত ফলাফলটি রিটার্ন করে, যা সরাসরি রিসিভিং ভ্যারিয়েবলে জমা হয়'
        },
        {
          en: 'The method must read the value from a temporary file on disk',
          bn: 'মেথডটিকে ডিস্কের একটি অস্থায়ী ফাইল থেকে মানটি পড়তে হয়'
        },
        {
          en: 'Blocks cannot return values back to their host methods',
          bn: 'ব্লক তার হোস্ট মেথডে কোনো মান ফেরত দিতে পারে না'
        },
        {
          en: 'Values must be passed through global environment variables',
          bn: 'মানগুলোকে গ্লোবাল এনভায়রনমেন্ট ভ্যারিয়েবলের মাধ্যমে পাঠাতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'yield evaluates to the return value of the executed block.',
        bn: 'সাধারণ ফাংশন কলের মতোই yield মেথডে ব্লকের চূড়ান্ত মান ফেরত নিয়ে আসে।'
      },
      explanation: {
        en: 'In Ruby, blocks return the value of their last evaluated expression. This return value is passed back to the method as the result of the yield call.',
        bn: 'ফলে মেথডের ভেতরে "result = yield" লিখে খুব সহজেই ব্লকের তৈরি ফলাফল সংরক্ষণ করা যায়।'
      }
    },
    {
      id: 'curly-braces-vs-do-end-convention-ex4',
      kind: 'mcq',
      topic: 'ruby-block-curly-braces-vs-do-end-idiom',
      question: {
        en: 'What is the standard community style convention for choosing between "{ ... }" and "do ... end" blocks in Ruby?',
        bn: 'Ruby কমিউনিটিতে "{ ... }" এবং "do ... end" ব্লকের মাঝে পছন্দের ক্ষেত্রে প্রচলিত স্ট্যান্ডার্ড রীতি কী?'
      },
      options: [
        {
          en: 'Use "{ ... }" for single-line transformations that return a value (like map); use "do ... end" for multi-line procedural logic and side-effects (like each)',
          bn: 'একক লাইনের ট্রান্সফর্মেশন যা মান রিটার্ন করে (যেমন map) তার জন্য "{ ... }" এবং একাধিক লাইনের প্রক্রিয়া ও সাইড-ইফেক্টের জন্য (যেমন each) "do ... end" ব্যবহার করা'
        },
        {
          en: 'Use curly braces only on Linux and do..end only on Windows',
          bn: 'লিনাক্সে কেবল ব্র্যাকেট এবং উইন্ডোজে কেবল do..end ব্যবহার করা'
        },
        {
          en: 'Curly braces are only permitted inside class definitions',
          bn: 'ব্র্যাকেট কেবল ক্লাস ডিফিনিশনের ভেতরেই ব্যবহারের অনুমতি রয়েছে'
        },
        {
          en: 'There is zero stylistic convention in the Ruby community',
          bn: 'Ruby কমিউনিটিতে এ বিষয়ে কোনো প্রচলিত কনভেনশন নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Single-line functional mapping uses braces; multi-line procedures use do..end.',
        bn: 'মান ফেরত নেওয়া এক লাইনের কাজের জন্য ব্র্যাকেট এবং বড় কাজের জন্য do..end আদর্শ নিয়ম।'
      },
      explanation: {
        en: 'The standard Ruby idiom reserves curly braces for concise inline functional pipelines that return values and "do ... end" for multi-line procedural execution.',
        bn: 'এই নিয়ম মেনে চললে কোড অত্যন্ত দৃষ্টিনন্দন এবং সহজেই বোধগম্য হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-yields-and-the-block',
    title: {
      en: 'Ruby Blocks & Yield Quiz',
      bn: 'Ruby ব্লক এবং Yield কুইজ'
    },
    questions: [
      {
        id: 'quiz-enumerator-from-missing-block',
        kind: 'mcq',
        topic: 'ruby-to-enum-chaining-without-block',
        question: {
          en: 'Why do idiomatic Ruby methods like "Array#each" return an "Enumerator" when invoked without a block (e.g. "[1, 2, 3].each")?',
          bn: 'কোনো ব্লক ছাড়া কল করা হলে Ruby-র স্ট্যান্ডার্ড মেথড যেমন "Array#each" কেন একটি "Enumerator" রিটার্ন করে (যেমন "[1, 2, 3].each")?'
        },
        options: [
          {
            en: 'It enables chaining additional Enumerable methods (like [1, 2, 3].each.with_index) and lazy evaluation rather than raising a LocalJumpError',
            bn: 'এটি এরর না ঘটিয়ে অন্যান্য Enumerable মেথড চেইনিং (যেমন [1, 2, 3].each.with_index) এবং লেজি মূল্যায়নের সুযোগ তৈরি করে দেয়'
          },
          {
            en: 'It restarts the Ruby virtual machine',
            bn: 'এটি Ruby ভার্চুয়াল মেশিন রিস্টার্ট করে'
          },
          {
            en: 'It deletes 50 percent of the array elements',
            bn: 'এটি অ্যারের ৫০ শতাংশ উপাদান মুছে ফেলে'
          },
          {
            en: 'Enumerators were deprecated in Ruby 2.0',
            bn: 'Ruby ২.০ সংস্করণে এনিউমারেটর বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Returning an Enumerator via to_enum allows fluent chaining with .with_index.',
          bn: 'ব্লক না দিলে চেইনিং সুবিধা দিয়ে কোডকে আরও শক্তিশালী ও নমনীয় করার কৌশল।'
        },
        explanation: {
          en: 'Calling "return to_enum(__callee__) unless block_given?" is the universal Ruby pattern: it lets callers chain iterators like ".with_index" cleanly.',
          bn: 'এর মাধ্যমে কোনো ক্র্যাশ ছাড়াই ডেভেলপাররা মেথডের সাথে চেইন মেথড যুক্ত করতে পারেন।'
        }
      },
      {
        id: 'quiz-closure-lexical-scope-capture',
        kind: 'mcq',
        topic: 'ruby-closure-lexical-scope-capture',
        question: {
          en: 'What makes a Ruby block a genuine "closure" in computer science terms?',
          bn: 'কম্পিউটার সায়েন্সের পরিভাষায় কোন বৈশিষ্ট্যের কারণে একটি Ruby ব্লককে বাস্তব "ক্লোজার" বলা হয়?'
        },
        options: [
          {
            en: 'It captures and retains reference bindings to the local variables present in its enclosing lexical scope even when executed elsewhere later',
            bn: 'যেখানে এটি তৈরি হয়েছে সেই পারিপার্শ্বিক স্কোপের লোকাল ভ্যারিয়েবলগুলোকে এটি ধরে রাখে, এমনকি পরবর্তীতে অন্য কোথাও চালানো হলেও তা অক্ষুণ্ণ থাকে'
          },
          {
            en: 'It closes all open network ports on the host computer',
            bn: 'এটি হোস্ট কম্পিউটারের সমস্ত খোলা নেটওয়ার্ক পোর্ট বন্ধ করে দেয়'
          },
          {
            en: 'It permanently locks the source code file against editing',
            bn: 'এটি সোর্স কোড ফাইলকে স্থায়ীভাবে লক করে এডিটিং নিষিদ্ধ করে'
          },
          {
            en: 'Ruby blocks are not closures',
            bn: 'Ruby ব্লক কোনো ক্লোজার নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A closure encapsulates its surrounding lexical environment and variables.',
          bn: 'যেখানে জন্ম নিয়েছে সেই চারপাশের ভ্যারিয়েবলকে নিজের ভেতর আজীবন বেঁধে রাখার ক্ষমতা।'
        },
        explanation: {
          en: 'A closure binds free variables in its lexical context. Ruby blocks carry their defining scope\'s variables with them wherever they are passed and executed.',
          bn: 'ফলে ব্লকের ভেতরের কোড বাইরের ভ্যারিয়েবলগুলোকে খুব সহজেই পড়তে ও পরিবর্তন করতে পারে।'
        }
      },
      {
        id: 'quiz-block-shadowing-warning',
        kind: 'mcq',
        topic: 'ruby-block-variable-shadowing',
        question: {
          en: 'What occurs if a block pipe variable has the exact same name as an outer variable in the enclosing method (e.g. "x = 10; [1, 2].each { |x| ... }")?',
          bn: 'যদি কোনো ব্লকের পাইপ ভ্যারিয়েবলের নাম বাইরের মেথডের ভ্যারিয়েবলের নামের হুবহু এক হয় (যেমন "x = 10; [1, 2].each { |x| ... }") তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The block parameter shadows the outer variable inside the block, and the Ruby interpreter emits a variable shadowing warning when run with "-w"',
            bn: 'ব্লকের প্যারামিটারটি ব্লকের ভেতরে বাইরের ভ্যারিয়েবলকে আড়াল (shadow) করে দেয় এবং "-w" ফ্ল্যাগ দিয়ে চালালে সতর্কবার্তা দেয়'
          },
          {
            en: 'The operating system deletes the variable from RAM',
            bn: 'অপারেটিং সিস্টেম র্যাম থেকে ভ্যারিয়েবলটি মুছে ফেলে'
          },
          {
            en: 'It causes a fatal compile-time syntax error',
            bn: 'এটি একটি মারাত্মক কম্পাইল-টাইম সিনট্যাক্স এরর ঘটায়'
          },
          {
            en: 'Shadowing is forbidden and blocked by the parser',
            bn: 'শ্যাডোয়িং সম্পূর্ণ নিষিদ্ধ এবং পার্সার এটি আটকে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Variable shadowing hides the outer variable and triggers warnings.',
          bn: 'একই নাম দিলে ভেতরের ভ্যারিয়েবল বাইরেরটিকে ঢেকে ফেলে, যা ভুল বোঝাবুঝি তৈরি করতে পারে।'
        },
        explanation: {
          en: 'Variable shadowing occurs when an inner parameter hides an outer variable. Best practice is to use distinct, descriptive names for block arguments.',
          bn: 'বাগ এড়াতে ব্লকের প্যারামিটারের জন্য সর্বদা ভিন্ন ও স্পষ্ট নাম ব্যবহার করা উচিত।'
        }
      },
      {
        id: 'quiz-block-break-and-next-keywords',
        kind: 'mcq',
        topic: 'ruby-block-break-and-next-control-flow',
        question: {
          en: 'How do the "next" and "break" keywords control flow when executed inside an active Ruby block?',
          bn: 'একটি সক্রিয় Ruby ব্লকের ভেতরে "next" এবং "break" কি-ওয়ার্ডগুলো নিয়ন্ত্রণ প্রবাহ কীভাবে পরিচালনা করে?'
        },
        options: [
          {
            en: '"next" immediately exits the current iteration and starts the next one; "break" terminates the entire iteration early, returning from the yielding method',
            bn: '"next" সাথে সাথে চলমান ইটারেশন শেষ করে পরবর্তীটিতে চলে যায়; আর "break" পুরো ইটারেশন চক্রটি আগেই সমাপ্ত করে মেথড থেকে বের হয়ে যায়'
          },
          {
            en: 'next deletes the array; break corrupts memory',
            bn: 'next অ্যারেকে মুছে ফেলে; break মেমোরি নষ্ট করে'
          },
          {
            en: 'break and next can only be used inside while loops, never blocks',
            bn: 'break এবং next কেবল while লুপেই ব্যবহার করা যায়, ব্লকে কখনোই নয়'
          },
          {
            en: 'next was removed in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে next বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'next skips to the next iteration; break halts the yielding method.',
          bn: 'next পরবর্তী ধাপে ঝাঁপ দেয়, আর break পুরো লুপের কাজ বন্ধ করে দেয়।'
        },
        explanation: {
          en: '"next" acts like continue in C-family languages, optionally returning a value to the yielding method. "break" halts iteration and exits the host method call.',
          bn: 'এর মাধ্যমে ব্লকের ভেতরে প্রবাহ নিয়ন্ত্রণ করে অপ্রয়োজনীয় কাজ থেকে সহজেই বের হওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'objects-and-the-class',
    title: {
      en: 'Objects, Classes, State Encapsulation & Method Dispatch',
      bn: 'অবজেক্ট, ক্লাস, স্টেট এনক্যাপসুলেশন এবং মেথড ডিসপ্যাচ'
    }
  }
};
