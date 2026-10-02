import type { Lesson } from '../../../lib/types';

export const TagsAndTheEchoLesson: Lesson = {
  slug: 'tags-and-the-echo',
  tech: 'lang-php',
  title: {
    en: 'Tags, Echo, Syntax & Language Directives',
    bn: 'ট্যাগ, ইকো, সিনট্যাক্স এবং ভাষা নির্দেশিকা'
  },
  summary: {
    en: 'Beginner guide to PHP language syntax: understand standard <?php ?> tags, clean short-echo syntax (<?= $val ?>), compare echo vs print, master comments and semicolon statement terminators, and explore compiler output buffering.',
    bn: 'পিএইচপি ভাষার সিনট্যাক্সের প্রাথমিক গাইড: আদর্শ <?php ?> ট্যাগ, শর্ট-ইকো সিনট্যাক্স (<?= $val ?>), echo বনাম print এর তুলনা, কমেন্ট ও সেমিকোলন টার্মিনেটর এবং আউটপুট বাফারিং।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'tags-syntax-heading',
      text: {
        en: 'The PHP Tag Delimiters, Echo vs Print, and Statement Termination',
        bn: 'পিএইচপি ট্যাগ ডিলিমিটার, Echo বনাম Print এবং স্টেটমেন্ট সমাপ্তি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP is an expressive server-side scripting language executed by the Zend Engine virtual machine. When processing files, the interpreter scans for opening <?php tags and executes enclosed instructions until encountering a closing ?> tag. In purely PHP files containing no HTML, omitting the trailing closing tag is an industry standard practice: it prevents accidental trailing whitespaces or newlines from prematurely flushing HTTP response headers. For lightweight templating, the short-echo syntax <?= $title ?> provides a clean alias for <?php echo $title; ?>.',
        bn: 'পিএইচপি হলো একটি শক্তিশালী সার্ভার-সাইড স্ক্রিপ্টিং ভাষা যা জেন্ড ইঞ্জিন ভার্চুয়াল মেশিন দ্বারা কার্যকর হয়। ফাইল প্রসেস করার সময় ইন্টারপ্রেটার ওপেনিং <?php ট্যাগ অনুসন্ধান করে এবং ক্লোজিং ?> ট্যাগ না পাওয়া পর্যন্ত ভেতরের কোড চালায়। কোনো এইচটিএমএল ছাড়া শুধুমাত্র পিএইচপি কোডযুক্ত ফাইলে শেষের ক্লোজিং ট্যাগটি বাদ দেওয়া একটি স্বীকৃত সর্বোত্তম অনুশীলন: এটি ফাইলের শেষে অনিচ্ছাকৃত ফাঁকা জায়গা বা নতুন লাইনের কারণে সময়ের আগেই HTTP হেডার চলে যাওয়ার ঝুঁকি রোধ করে। টেমপ্লেটে শর্ট-ইকো সিনট্যাক্স <?= $title ?> মূলত <?php echo $title; ?> এর পরিচ্ছন্ন বিকল্প হিসেবে কাজ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 5-stage Zend Engine parsing pipeline from source text tokens to executed output buffers.',
        bn: 'চিত্র ১: সোর্স টেক্সট টোকেন থেকে এক্সিকিউটেড আউটপুট বাফার পর্যন্ত জেন্ড ইঞ্জিন পার্সিংয়ের ৫ টি ধাপ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ZEND ENGINE SCRIPT PARSING &amp; EXECUTION PIPELINE</text>

  <!-- Step 1: Source File -->
  <g transform="translate(30, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#0284c7" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Source File</text>
    <text x="12" y="55" fill="#38bdf8" font-size="10" font-family="monospace">index.php</text>
    <rect x="10" y="70" width="125" height="110" rx="5" fill="#0f172a" />
    <text x="15" y="90" fill="#f43f5e" font-size="8" font-family="monospace">&lt;?php</text>
    <text x="15" y="110" fill="#38bdf8" font-size="8" font-family="monospace">$msg = "Hi";</text>
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">echo $msg;</text>
    <text x="15" y="150" fill="#cbd5e1" font-size="8" font-family="monospace">// No closing tag</text>
    <text x="12" y="205" fill="#38bdf8" font-size="9" font-family="sans-serif">Raw UTF-8 Text</text>
  </g>

  <!-- Step 2: Lexical Scanner -->
  <g transform="translate(195, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#059669" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Lexer Tokens</text>
    <text x="12" y="55" fill="#34d399" font-size="10" font-family="monospace">Zend Lexer</text>
    <rect x="10" y="70" width="125" height="110" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="90" fill="#34d399" font-size="8" font-family="monospace">T_OPEN_TAG</text>
    <text x="15" y="110" fill="#34d399" font-size="8" font-family="monospace">T_VARIABLE</text>
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">T_CONSTANT_ENC</text>
    <text x="15" y="150" fill="#34d399" font-size="8" font-family="monospace">T_ECHO</text>
    <text x="12" y="205" fill="#34d399" font-size="9" font-family="sans-serif">Token Stream</text>
  </g>

  <!-- Step 3: Parser AST -->
  <g transform="translate(360, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#d97706" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Parser AST</text>
    <text x="12" y="55" fill="#fbbf24" font-size="10" font-family="monospace">Syntax Tree</text>
    <rect x="10" y="70" width="125" height="110" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="90" fill="#fbbf24" font-size="8" font-family="monospace">AST_STMT_LIST</text>
    <text x="15" y="110" fill="#cbd5e1" font-size="8" font-family="monospace"> AST_ASSIGN</text>
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace"> AST_ECHO</text>
    <text x="15" y="150" fill="#fbbf24" font-size="8" font-family="monospace">Grammar valid</text>
    <text x="12" y="205" fill="#fbbf24" font-size="9" font-family="sans-serif">Structural Tree</text>
  </g>

  <!-- Step 4: Compiler Opcodes -->
  <g transform="translate(525, 65)">
    <rect width="145" height="235" rx="8" fill="#1e293b" stroke="#8b5cf6" stroke-width="2" />
    <rect width="145" height="30" rx="8" fill="#7c3aed" />
    <text x="72" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Opcodes</text>
    <text x="12" y="55" fill="#c084fc" font-size="10" font-family="monospace">Zend VM</text>
    <rect x="10" y="70" width="125" height="110" rx="5" fill="#0f172a" stroke="#8b5cf6" />
    <text x="15" y="90" fill="#c084fc" font-size="8" font-family="monospace">ASSIGN !0, 'Hi'</text>
    <text x="15" y="110" fill="#c084fc" font-size="8" font-family="monospace">ECHO !0</text>
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">RETURN 1</text>
    <text x="15" y="150" fill="#34d399" font-size="8" font-family="monospace">OPcache RAM</text>
    <text x="12" y="205" fill="#c084fc" font-size="9" font-family="sans-serif">Bytecode Cache</text>
  </g>

  <!-- Step 5: Output Delivery -->
  <g transform="translate(690, 65)">
    <rect width="125" height="235" rx="8" fill="#1e293b" stroke="#ec4899" stroke-width="2" />
    <rect width="125" height="30" rx="8" fill="#db2777" />
    <text x="62" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">5. Delivery</text>
    <text x="10" y="55" fill="#f472b6" font-size="10" font-family="monospace">Output Buffer</text>
    <rect x="10" y="70" width="105" height="110" rx="5" fill="#0f172a" stroke="#ec4899" />
    <text x="12" y="90" fill="#cbd5e1" font-size="8" font-family="monospace">ob_start()</text>
    <text x="12" y="110" fill="#34d399" font-size="8" font-family="monospace">HTTP 200 OK</text>
    <text x="12" y="130" fill="#f472b6" font-size="8" font-family="monospace">Clean stream</text>
    <text x="12" y="150" fill="#cbd5e1" font-size="8" font-family="monospace">Wipes RAM</text>
    <text x="10" y="205" fill="#f472b6" font-size="9" font-family="sans-serif">Client Egress</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'echo-vs-print-construct-heading',
      text: {
        en: 'Echo versus Print Language Constructs and Semicolon Terminators',
        bn: 'Echo বনাম Print ল্যাঙ্গুয়েজ কনস্ট্রাক্ট এবং সেমিকোলন টার্মিনেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While both emit text, echo and print have important syntactic differences. echo is a language construct that accepts multiple comma-separated arguments, returns no value (void), and executes marginally faster. Conversely, print is an expression that always returns a value of 1, allowing it to be embedded inside larger logical expressions. In PHP, semicolons (;) are mandatory statement terminators: omitting a semicolon before another statement produces a fatal ParseError.',
        bn: 'উভয়ই টেক্সট প্রদর্শনের কাজ করলেও echo এবং print এর মধ্যে গুরুত্বপূর্ণ সিনট্যাক্সগত পার্থক্য রয়েছে। echo কোনো মান রিটার্ন না করে কমা দিয়ে একাধিক আর্গুমেন্ট গ্রহণ করতে পারে এবং তুলনামূলক দ্রুত কাজ করে। অন্যদিকে print একটি এক্সপ্রেশন যা সর্বদা ১ মান রিটার্ন করে, ফলে এটি অন্যান্য শর্তভিত্তিক এক্সপ্রেশনের ভেতরেও কাজ করতে পারে। পিএইচপিতে প্রতিটি স্টেটমেন্টের শেষে সেমিকোলন (;) দেওয়া বাধ্যতামূলক: সেমিকোলন বাদ দিলে মারাত্মক ParseError তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP lexical tokenization, echo multiple arguments, and print return values.',
        bn: 'পিএইচপি লেক্সিক্যাল টোকেনাইজেশন, echo আর্গুমেন্ট এবং print রিটার্ন মানের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP Echo, Print, and Token Parsing in TypeScript
interface Token {
  type: string;
  value: string;
}

export class PhpTokenizerSimulator {
  // Simulates scanning PHP source text into lexical tokens
  public tokenize(source: string): Token[] {
    const tokens: Token[] = [];
    if (source.includes('<?php')) tokens.push({ type: 'T_OPEN_TAG', value: '<?php' });
    if (source.includes('echo')) tokens.push({ type: 'T_ECHO', value: 'echo' });
    if (source.includes('print')) tokens.push({ type: 'T_PRINT', value: 'print' });
    tokens.push({ type: 'T_CONSTANT_ENCAPSED_STRING', value: '"Hello World"' });
    return tokens;
  }
}

// Simulating PHP: echo 'A', 'B', 'C';
export function phpEcho(...args: string[]): string {
  return args.join(''); // Echo accepts multiple comma-separated arguments
}

// Simulating PHP: print 'Hello'; => returns 1
export function phpPrint(val: string): { output: string; returnValue: number } {
  return { output: val, returnValue: 1 }; // Always returns 1
}

// Execute demonstrations
const tokenizer = new PhpTokenizerSimulator();
const tokens = tokenizer.tokenize('<?php echo "Hello World";');
console.log('Token Stream Length:', tokens.length); // 3 tokens

const echoed = phpEcho('PHP ', '8.2 ', 'Language');
console.log('Echo Multi-Arg Output:', echoed); // "PHP 8.2 Language"

const printed = phpPrint('Welcome');
console.log('Print Output:', printed.output, '| Return Value:', printed.returnValue); // "Welcome", 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Language Construct',
          def: {
            en: 'Syntactic keyword built directly into the PHP compiler grammar (like echo, print, include) rather than a runtime function.',
            bn: 'সিনট্যাক্স কিওয়ার্ড যা সাধারণ ফাংশন না হয়ে সরাসরি পিএইচপি কম্পাইলারের ব্যাকরণের সাথে ওতপ্রোতভাবে যুক্ত থাকে।'
          }
        },
        {
          term: 'Short-Echo Tag',
          def: {
            en: 'Shorthand template delimiter (<?= $val ?>) automatically expanding to <?php echo $val; ?> in view templates.',
            bn: 'সংক্ষিপ্ত টেমপ্লেট ট্যাগ যা ভিউ ফাইলে স্বয়ংক্রিয়ভাবে <?php echo $val; ?> আকারে কার্যকর হয়।'
          }
        },
        {
          term: 'Statement Terminator',
          def: {
            en: 'Required semicolon symbol (;) demarcating the conclusion of executable PHP statements to avoid compiler ParseErrors.',
            bn: 'আবশ্যক সেমিকোলন চিহ্ন (;) যা পিএইচপি স্টেটমেন্টের সমাপ্তি নির্দেশ করে কম্পাইলারের পার্স এরর প্রতিরোধ করে।'
          }
        },
        {
          term: 'Output Buffering',
          def: {
            en: 'Zend mechanism retaining generated HTML and text in memory before transmitting headers and payloads over network sockets.',
            bn: 'মেমোরি বাফার ব্যবস্থা যা ব্রাউজারে তথ্য পাঠানোর পূর্বে তৈরি হওয়া যাবতীয় আউটপুট মেমোরিতে ধরে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'omitting-closing-php-tag-ex1',
      kind: 'mcq',
      topic: 'omitting-closing-tag-best-practice',
      question: {
        en: 'Why is omitting the trailing closing ?> tag in pure PHP files considered an industry best practice?',
        bn: 'শুধুমাত্র পিএইচপি কোডযুক্ত ফাইলে শেষের ক্লোজিং ?> ট্যাগ বাদ দেওয়া সফটওয়্যার ইন্ডাস্ট্রির একটি সর্বোত্তম অনুশীলন কেন?'
      },
      options: [
        {
          en: 'It prevents accidental trailing spaces or newlines after ?> from prematurely sending body output and causing "headers already sent" errors',
          bn: 'এটি ?> এর পরে অনিচ্ছাকৃত ফাঁকা জায়গা বা নতুন লাইনের কারণে সময়ের আগেই আউটপুট পাঠিয়ে "headers already sent" এরর তৈরি হওয়া রোধ করে'
        },
        {
          en: 'Closing tags consume 500 megabytes of server memory',
          bn: 'ক্লোজিং ট্যাগ ৫০০ মেগাবাইট সার্ভার মেমোরি খরচ করে'
        },
        {
          en: 'The PHP compiler crashes if any file contains a closing tag',
          bn: 'কোনো ফাইলে ক্লোজিং ট্যাগ থাকলে পিএইচপি কম্পাইলার সাথে সাথে ক্র্যাশ করে'
        },
        {
          en: 'Omitting closing tags is required by the Linux operating system',
          bn: 'লিনাক্স অপারেটিং সিস্টেমের জন্য ক্লোজিং ট্যাগ বাদ দেওয়া আবশ্যক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trailing whitespace after ?> gets sent to the browser immediately as HTML body bytes.',
        bn: '?> এর পরে থাকা ফাঁকা অংশ বা এন্টারকে ব্রাউজারে বডি টেক্সট হিসেবে পাঠিয়ে দেওয়া হয়।'
      },
      explanation: {
        en: 'Omitting ?> avoids accidental whitespace egress, preserving script ability to emit cookies and session headers.',
        bn: '?> বাদ দিলে কোনো অনাকাঙ্ক্ষিত ফাঁকা টেক্সট যায় না, ফলে স্ক্রিপ্ট নিরাপদে সেশন হেডার ও কুকি পাঠাতে পারে।'
      }
    },
    {
      id: 'print-expression-return-value-ex2',
      kind: 'mcq',
      topic: 'print-return-value-semantics',
      question: {
        en: 'What numeric value does the print construct always return upon execution in PHP?',
        bn: 'পিএইচপিতে print কনস্ট্রাক্ট কার্যকর করার পর এটি সর্বদা কোন সংখ্যাসূচক মানটি রিটার্ন করে?'
      },
      options: [
        { en: '1, allowing print to be used inside larger conditional expressions', bn: '1, যার ফলে print কে অন্যান্য শর্তভিত্তিক এক্সপ্রেশনের ভেতরেও ব্যবহার করা যায়' },
        { en: '0, indicating success', bn: '0, যা সফলতা নির্দেশ করে' },
        { en: '100, representing percentage', bn: '100, যা শতকরা হার নির্দেশ করে' },
        { en: 'print has a void return type and returns nothing', bn: 'print এর কোনো রিটার্ন মান নেই' }
      ],
      answer: 0,
      hint: {
        en: 'Unlike echo which returns void, print is an expression returning integer 1.',
        bn: 'echo যেখানে কোনো মান দেয় না, সেখানে print সর্বদা ১ পূর্ণসংখ্যা রিটার্ন করে।'
      },
      explanation: {
        en: 'print returns 1, meaning expressions like ($success && print("Done")) evaluate validly.',
        bn: 'print এর মান ১ হওয়ায় এটি অন্যান্য লজিক্যাল এক্সপ্রেশনের ভেতরেও কাজ করতে পারে।'
      }
    },
    {
      id: 'short-echo-support-ex3',
      kind: 'mcq',
      topic: 'short-echo-availability',
      question: {
        en: 'What does the short-echo syntax <?= $title ?> evaluate to in modern PHP?',
        bn: 'আধুনিক পিএইচপিতে শর্ট-ইকো সিনট্যাক্স <?= $title ?> আসলে কী কাজ সম্পন্ন করে?'
      },
      options: [
        { en: 'It is an exact syntactic equivalent to <?php echo $title; ?>', bn: 'এটি অবিকল <?php echo $title; ?> এর সমতুল্য সংক্ষিপ্ত সিনট্যাক্স' },
        { en: 'It checks if $title is less than or equal to null', bn: 'এটি $title এর মান null এর চেয়ে ছোট বা সমান কি না পরীক্ষা করে' },
        { en: 'It deletes the $title variable from memory', bn: 'এটি মেমোরি থেকে $title ভেরিয়েবলটি মুছে ফেলে' },
        { en: 'It is invalid syntax that throws a fatal compiler error', bn: 'এটি ভুল সিনট্যাক্স যা মারাত্মক কম্পাইলার এরর তৈরি করে' }
      ],
      answer: 0,
      hint: {
        en: '<?= is a dedicated short-echo delimiter always available in modern PHP.',
        bn: '<?= হলো একটি সংক্ষিপ্ত সিনট্যাক্স যা আধুনিক পিএইচপিতে সর্বদা সক্রিয় থাকে।'
      },
      explanation: {
        en: '<?= $val ?> is clean shorthand for echoing expressions inside HTML views.',
        bn: '<?= $val ?> এইচটিএমএল ভিউতে কোড সংক্ষিপ্ত ও পাঠযোগ্য রাখার একটি চমৎকার উপায়।'
      }
    },
    {
      id: 'echo-multiple-arguments-ex4',
      kind: 'mcq',
      topic: 'echo-comma-separated-arguments',
      question: {
        en: 'What distinguishes echo from standard functions regarding its argument syntax?',
        bn: 'আর্গুমেন্ট সিনট্যাক্সের ক্ষেত্রে সাধারণ ফাংশন থেকে echo কোন বৈশিষ্ট্যে আলাদা?'
      },
      options: [
        {
          en: 'echo can accept multiple arguments separated by commas without parentheses: echo "A", "B", "C";',
          bn: 'echo কোনো ব্র্যাকেট ছাড়াই কমা দিয়ে একাধিক আর্গুমেন্ট গ্রহণ করতে পারে: echo "A", "B", "C";'
        },
        {
          en: 'echo cannot output strings containing numbers',
          bn: 'echo সংখ্যাযুক্ত কোনো স্ট্রিং প্রদর্শন করতে পারে না'
        },
        {
          en: 'echo only accepts arrays of 10 elements',
          bn: 'echo কেবল ১০ টি উপাদানযুক্ত অ্যারে গ্রহণ করে'
        },
        {
          en: 'echo can only be executed by the root administrator',
          bn: 'echo কেবল মূল অ্যাডমিনিস্ট্রেটরই চালাতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'As a language construct, echo does not require function call parentheses.',
        bn: 'ল্যাঙ্গুয়েজ কনস্ট্রাক্ট হওয়ায় echo তে কোনো ফাংশন ব্র্যাকেটের প্রয়োজন হয় না।'
      },
      explanation: {
        en: 'echo accepts comma-delimited argument streams without parentheses, executing faster than string concatenation.',
        bn: 'echo ব্র্যাকেট ছাড়াই কমাযুক্ত একাধিক মান সরাসরি আউটপুটে পাঠাতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-tags-and-the-echo',
    title: {
      en: 'PHP Tags, Echo and Syntax Directives Quiz',
      bn: 'পিএইচপি ট্যাগ, ইকো এবং সিনট্যাক্স নির্দেশিকা কুইজ'
    },
    questions: [
      {
        id: 'quiz-semicolon-omission-error',
        kind: 'mcq',
        topic: 'semicolon-statement-terminator',
        question: {
          en: 'What error does the Zend Engine throw when a statement is missing its terminating semicolon before another instruction?',
          bn: 'কোনো স্টেটমেন্টের শেষে সেমিকোলন না দিয়ে পরবর্তী কোড লিখলে জেন্ড ইঞ্জিন কোন এররটি ছুড়ে দেয়?'
        },
        options: [
          {
            en: 'ParseError (syntax error, unexpected token)',
            bn: 'ParseError (সিনট্যাক্স এরর, অপ্রত্যাশিত টোকেন)'
          },
          {
            en: 'ZeroDivisionError',
            bn: 'ZeroDivisionError'
          },
          {
            en: 'DatabaseTimeoutException',
            bn: 'DatabaseTimeoutException'
          },
          {
            en: 'The engine ignores semicolons completely without error',
            bn: 'ইঞ্জিন কোনো এরর না দিয়ে সেমিকোলন সম্পূর্ণ উপেক্ষা করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Semicolons are mandatory statement terminators in PHP compiler grammar.',
          bn: 'পিএইচপিতে প্রতিটি স্টেটমেন্ট সমাপ্ত করতে সেমিকোলন থাকা আবশ্যক।'
        },
        explanation: {
          en: 'The compiler requires semicolons to determine statement boundaries; omitting them triggers a ParseError.',
          bn: 'কম্পাইলার স্টেটমেন্টের শেষ বুঝতে সেমিকোলন খোঁজে; না পেলে সাথে সাথে ParseError তৈরি হয়।'
        }
      },
      {
        id: 'quiz-output-buffering-ob-get-clean',
        kind: 'mcq',
        topic: 'output-buffering-ob-get-clean',
        question: {
          en: 'What does ob_get_clean() accomplish in PHP output buffering workflows?',
          bn: 'পিএইচপি আউটপুট বাফারিংয়ে ob_get_clean() মেথডটি কী কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It retrieves the contents of the active output buffer into a string and simultaneously deletes the buffer in memory',
            bn: 'এটি মেমোরি বাফারে জমা হওয়া সমস্ত টেক্সট একটি স্ট্রিং হিসেবে প্রদান করে এবং একই সাথে বাফারটি মেমোরি থেকে মুছে ফেলে'
          },
          {
            en: 'It prints the buffer directly onto paper using a laser printer',
            bn: 'এটি লেজার প্রিন্টারের সাহায্যে বাফারটি সরাসরি কাগজে প্রিন্ট করে'
          },
          {
            en: 'It formats the server hard drive',
            bn: 'এটি সার্ভারের হার্ড ড্রাইভ ফরম্যাট করে দেয়'
          },
          {
            en: 'It logs the user out of their session',
            bn: 'এটি ব্যবহারকারীকে সেশন থেকে লগআউট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'ob_get_clean combines ob_get_contents() and ob_end_clean() into an atomic call.',
          bn: 'ob_get_clean বাফারের তথ্য সংগ্রহ এবং বাফার খালি করার কাজ একসাথে সম্পন্ন করে।'
        },
        explanation: {
          en: 'ob_get_clean captures generated output into a variable while closing and discarding the internal buffer.',
          bn: 'ob_get_clean আউটপুটকে একটি ভেরিয়েবলে নিয়ে মেমোরি বাফারটি পরিষ্কার করে দেয়।'
        }
      },
      {
        id: 'quiz-single-line-comment-styles',
        kind: 'mcq',
        topic: 'php-comment-syntaxes',
        question: {
          en: 'Which symbols denote valid single-line comments in PHP source code?',
          bn: 'পিএইচপি সোর্স কোডে কোন প্রতীকগুলো বৈধ এক-লাইনের কমেন্ট নির্দেশ করে?'
        },
        options: [
          { en: 'Both // and # denote valid single-line comments', bn: '// এবং # উভয়ই বৈধ এক-লাইনের কমেন্ট নির্দেশ করে' },
          { en: 'Only <!-- --> is allowed', bn: 'কেবল <!-- --> ব্যবহারের অনুমতি রয়েছে' },
          { en: 'Only -- is allowed', bn: 'কেবল -- ব্যবহারের অনুমতি রয়েছে' },
          { en: 'PHP does not support comments of any kind', bn: 'পিএইচপিতে কোনো ধরনের কমেন্ট লেখা সম্ভব নয়' }
        ],
        answer: 0,
        hint: {
          en: 'PHP supports C-style // comments as well as Unix shell-style # hash comments.',
          bn: 'পিএইচপি সি-স্টাইলের // এবং ইউনিক্স শেল স্টাইলের # উভয় কমেন্টই সমর্থন করে।'
        },
        explanation: {
          en: 'Both // and # function as single-line comments; multi-line comments use /* */.',
          bn: '// এবং # এক লাইনের জন্য এবং /* */ একাধিক লাইনের কমেন্টের জন্য ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-php-tag-case-sensitivity',
        kind: 'mcq',
        topic: 'php-keyword-case-sensitivity',
        question: {
          en: 'Are language keywords like ECHO, Echo, and echo case-sensitive in PHP?',
          bn: 'পিএইচপিতে ECHO, Echo এবং echo এর মতো ল্যাঙ্গুয়েজ কিওয়ার্ডগুলো কি কেস-সেনসিটিভ?'
        },
        options: [
          {
            en: 'No, PHP keywords, language constructs, and function names are case-insensitive, though lowercase is standard convention',
            bn: 'না, পিএইচপির কিওয়ার্ড, কনস্ট্রাক্ট ও ফাংশনের নাম কেস-সেনসিটিভ নয়, যদিও ছোট হাতের অক্ষর ব্যবহারই আদর্শ নিয়ম'
          },
          {
            en: 'Yes, only uppercase ECHO is legal',
            bn: 'হ্যাঁ, শুধুমাত্র বড় হাতের ECHO বৈধ'
          },
          {
            en: 'Yes, varying case causes fatal compiler exceptions',
            bn: 'হ্যাঁ, অক্ষরের আকার বদলালে ফ্যাটাল কম্পাইলার এক্সেপশন হয়'
          },
          {
            en: 'Keywords are only case-insensitive on mobile phones',
            bn: 'কিওয়ার্ড কেবল মোবাইল ফোনেই কেস-ইনসেনসিটিভ থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Keywords and function names are case-insensitive; variables ($var) ARE strictly case-sensitive.',
          bn: 'কিওয়ার্ড ও ফাংশনের নাম কেস-ইনসেনসিটিভ; কিন্তু ভেরিয়েবল ($var) কঠোরভাবে কেস-সেনসিটিভ।'
        },
        explanation: {
          en: 'PHP treats keywords case-insensitively, while variable identifiers strictly enforce case distinction.',
          bn: 'পিএইচপিতে কিওয়ার্ড বড় বা ছোট হাতের লেখা গেলেও ভেরিয়েবলের ক্ষেত্রে অক্ষরের রূপ অবিকল এক হতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'vars-and-the-array',
    title: {
      en: 'Variables, Types, Operators & Complex Arrays',
      bn: 'ভেরিয়েবল, টাইপ, অপারেটর এবং জটিল অ্যারে'
    }
  }
};
