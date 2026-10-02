import type { Lesson } from '../../../lib/types';

export const ResultsAndTheQuestionLesson: Lesson = {
  slug: 'results-and-the-question',
  tech: 'lang-rust',
  title: {
    en: 'Error Handling, Result & The ? Operator',
    bn: 'এরর হ্যান্ডলিং, Result এবং ? অপারেটর'
  },
  summary: {
    en: 'Master robust, recoverable error handling in Rust. Understand why Rust eliminates unchecked exceptions in favor of the Result<T, E> and Option<T> algebraic types, leverage the ? try operator for clean linear propagation with From trait conversions, design structured domain error enums, and reserve panic! strictly for unrecoverable bugs.',
    bn: 'Rust-এ টেকসই ও পুনরুদ্ধারযোগ্য এরর হ্যান্ডলিং আয়ত্ত করুন। অনাকাঙ্ক্ষিত এক্সেপশনের বদলে Result<T, E> ও Option<T> অ্যালজেব্রাইক টাইপ ব্যবহারের কারণ, From ট্রেইট কনভার্সন সহ ? অপারেটর দিয়ে পরিষ্কার এরর প্রোপাগেশন, কাঠামোগত ডোমেন এরর এনাম ডিজাইন এবং অপ্রতিরোধ্য অবস্থায় panic! ব্যবহারের নিয়ম।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'recoverable-errors-and-result-heading',
      text: {
        en: 'Recoverable Errors with Result<T, E> versus Unrecoverable Panics',
        bn: 'Result<T, E> দিয়ে পুনরুদ্ধারযোগ্য এরর বনাম অপরিবর্তনীয় প্যানিক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional languages like Java or Python rely on runtime exceptions that bubble invisibly across the stack, making it difficult to trace failure paths. In Rust (the memory-safe systems programming language), errors are explicit first-class values returned directly in function signatures. Rust bifurcates errors into two strict categories: recoverable errors, represented by the "Result<T, E>" algebraic enum, and unrecoverable bugs that trigger a "panic!". While a panic indicates a severe defect (such as an out-of-bounds array access) that unwinds the thread stack, normal operations like missing files, network timeouts, or invalid JSON schemas return "Err(e)". This compile-time requirement forces developers to account for every possible point of failure explicitly before code compiles.',
        bn: 'Java বা Python-এর মতো প্রচলিত ভাষাগুলোতে রানটাইম এক্সেপশন স্ট্যাকের ভেতর অদৃশ্যভাবে লাফিয়ে চলে, যার ফলে ত্রুটির পথ শনাক্ত করা কঠিন হয়। কিন্তু Rust (মেমোরি-নিরাপদ সিস্টেম প্রোগ্রামিং ভাষা)-এ এরর কোনো অদৃশ্য বিষয় নয়, বরং ফাংশনের রিটার্ন টাইপে সরাসরি প্রকাশিত একটি স্পষ্ট মান। Rust সমস্ত এররকে সুনির্দিষ্ট ২ টি ভাগে ভাগ করে: পুনরুদ্ধারযোগ্য এরর, যা "Result<T, E>" অ্যালজেব্রাইক এনাম দ্বারা উপস্থাপিত হয়, এবং অপরিবর্তনীয় মারাত্মক ত্রুটি যা "panic!" তৈরি করে। অ্যারের সীমার বাইরে যাওয়ার মতো মারাত্মক ভুলের ক্ষেত্রে প্যানিক স্ট্যাক পরিষ্কার করে থ্রেড বন্ধ করে দেয়, কিন্তু ফাইল না পাওয়া বা নেটওয়ার্ক টাইমআউটের মতো স্বাভাবিক ভুলের ক্ষেত্রে "Err(e)" ফেরত দেওয়া হয়। কম্পাইল-টাইমের এই নিয়মের কারণে প্রতিটি সম্ভাব্য ব্যর্থতার পথ কোড কম্পাইল হওয়ার আগেই হ্যান্ডেল করা বাধ্যতামূলক হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The ? try operator pipeline: Step-by-step error propagation where an Err(e) is automatically converted via the From trait and early-returned to the caller.',
        bn: 'চিত্র ১: ? অপারেটরের পাইপলাইন: ধাপে ধাপে এরর প্রোপাগেশন যেখানে Err(e) স্বয়ংক্রিয়ভাবে From ট্রেইটের মাধ্যমে রূপান্তরিত হয়ে কলারের কাছে ফেরত যায়।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUST ERROR PROPAGATION &amp; THE ? OPERATOR PIPELINE</text>

  <!-- Step 1: File Open -->
  <g transform="translate(35, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. File::open(path)?</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="68" fill="#38bdf8" font-size="10" font-family="monospace">let mut f = File::open?</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">Evaluates Result&lt;File, io::Error&gt;</text>

    <!-- Branch Ok -->
    <rect x="15" y="105" width="95" height="55" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="62" y="125" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">Ok(file)</text>
    <text x="62" y="145" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Unwraps file</text>

    <!-- Branch Err -->
    <rect x="120" y="105" width="95" height="55" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="167" y="125" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">Err(io::Error)</text>
    <text x="167" y="145" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Early return ?</text>

    <text x="15" y="215" fill="#38bdf8" font-size="10" font-family="sans-serif">Initial I/O Boundary</text>
  </g>

  <!-- Step 2: Read String -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#d97706" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. f.read_to_string(&amp;mut s)?</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="68" fill="#fbbf24" font-size="10" font-family="monospace">f.read_to_string(&amp;mut s)?</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">Buffer Read Step</text>

    <!-- Branch Ok -->
    <rect x="15" y="105" width="95" height="55" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="62" y="125" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">Ok(bytes)</text>
    <text x="62" y="145" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Pass to Step 3</text>

    <!-- Branch Err -->
    <rect x="120" y="105" width="95" height="55" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="167" y="125" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">Err(readErr)</text>
    <text x="167" y="145" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Early return ?</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Data Ingestion Boundary</text>
  </g>

  <!-- Step 3: From Conversion -->
  <g transform="translate(575, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#059669" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. From::from Conversion</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="10" font-family="monospace">AppError::from(e)</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">Polymorphic Type Mapping</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#059669" fill-opacity="0.2" stroke="#10b981" />
    <text x="115" y="128" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Ok(Config) Returned</text>
    <text x="115" y="148" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">Clean Linear Execution Flow</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Exception Overhead</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'try-operator-and-domain-errors-heading',
      text: {
        en: 'The ? Try Operator and Custom Domain Error Enums',
        bn: '? ট্রাই অপারেটর এবং কাস্টম ডোমেন এরর এনাম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing verbose match expressions after every fallible function call quickly generates cluttered, deeply indented code. Rust solves this through the "?" try operator. When placed after an expression returning a Result, the "?" operator unwraps an "Ok(val)" inline, or immediately returns "Err(From::from(err))" from the enclosing function. Because it invokes the standard "From" trait, errors from disparate libraries (such as database drivers, filesystem I/O, or JSON parsers) are automatically converted into a single unified domain error enum. Modern applications leverage the "thiserror" crate for descriptive library error types and the "anyhow" crate for high-level application contexts, providing actionable failure diagnostics.',
        bn: 'প্রতিটি ফাংশন কলের পর বড় বড় ম্যাচ এক্সপ্রেশন লিখলে কোড দ্রুত জটিল ও অপাঠ্য হয়ে ওঠে। Rust "?" অপারেটরের সাহায্যে এই সমস্যার নিখুঁত সমাধান করে। কোনো রেজাল্ট রিটার্ন করা এক্সপ্রেশনের শেষে "?" বসালে এটি সফল "Ok(val)" মানকে সেই লাইনেই আনর‍্যাপ করে, আর কোনো এরর হলে স্বয়ংক্রিয়ভাবে "From" ট্রেইটের মাধ্যমে কনভার্ট করে বর্তমান ফাংশন থেকে "Err" ফেরত পাঠায়। যেহেতু এটি স্ট্যান্ডার্ড "From" ট্রেইট আহ্বান করে, তাই ডাটাবেজ, ফাইল সিস্টেম বা জেএসন পার্সারের মতো ভিন্ন ভিন্ন লাইব্রেরির এররগুলো নিজে থেকেই আপনার কাস্টম ডোমেন এরর এনামে রূপান্তরিত হয়ে যায়। আধুনিক অ্যাপ্লিকেশনে লাইব্রেরি তৈরির জন্য "thiserror" ক্রেট এবং কনটেক্সট সমৃদ্ধ অ্যাপ্লিকেশনের জন্য "anyhow" ক্রেট ব্যাপকভাবে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Rust Result<T, E> handling, the ? try operator, and automatic From error conversions.',
        bn: 'Rust Result<T, E> ব্যবস্থাপনা, ? ট্রাই অপারেটর এবং From এরর রূপান্তরের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Rust Result<T, E>, the ? Operator, and Custom Domain Error Enums

export type RustResult<T, E> =
  | { ok: true; value: T }
  | { ok: false; error: E };

// Domain Error Enum representing diverse application failure modes
export type DomainAppError =
  | { kind: 'Io'; message: string; path: string }
  | { kind: 'Parse'; message: string; line: number }
  | { kind: 'Validation'; message: string };

// Helper constructing Ok and Err variants
export const Ok = <T, E>(val: T): RustResult<T, E> => ({ ok: true, value: val });
export const Err = <T, E>(err: E): RustResult<T, E> => ({ ok: false, error: err });

export class ServicePipelineSimulator {
  // Simulated I/O step: reading configuration text
  private static readFile(filePath: string): RustResult<string, { ioCode: number; text: string }> {
    if (filePath === 'valid_config.json') {
      return Ok('{"port": 8080, "workers": 4}');
    }
    return Err({ ioCode: 404, text: 'File not found at: ' + filePath });
  }

  // Simulated Parse step: decoding JSON into port integer
  private static parseConfig(jsonStr: string): RustResult<{ port: number }, { parseMsg: string }> {
    try {
      const parsed = JSON.parse(jsonStr) as { port?: number };
      if (typeof parsed.port === 'number') {
        return Ok({ port: parsed.port });
      }
      return Err({ parseMsg: 'Missing port numeric attribute' });
    } catch {
      return Err({ parseMsg: 'Malformed JSON payload' });
    }
  }

  // Simulating: fn load_and_start(path: &str) -> Result<number, DomainAppError>
  // Utilizing the ? operator with From error mapping
  public static loadAndStart(path: string): RustResult<number, DomainAppError> {
    // Step 1: File::open(path)? -> converts raw I/O error to DomainAppError::Io
    const fileResult = this.readFile(path);
    if (!fileResult.ok) {
      console.log('[? Operator] File read failed. Early returning converted DomainAppError::Io.');
      return Err({
        kind: 'Io',
        message: fileResult.error.text,
        path: path
      });
    }

    const configContent = fileResult.value;
    console.log('[? Operator] File opened successfully! Content length:', configContent.length);

    // Step 2: parse_config(&configContent)? -> converts parse error to DomainAppError::Parse
    const parseResult = this.parseConfig(configContent);
    if (!parseResult.ok) {
      console.log('[? Operator] Parse failed. Early returning converted DomainAppError::Parse.');
      return Err({
        kind: 'Parse',
        message: parseResult.error.parseMsg,
        line: 1
      });
    }

    const port = parseResult.value.port;
    console.log('[Success] Service initialized cleanly on port:', port);
    return Ok(port);
  }
}

// Case 1: Successful pipeline execution
const run1 = ServicePipelineSimulator.loadAndStart('valid_config.json');
console.log('Run 1 Status:', run1.ok ? 'SUCCESS' : 'FAILED', run1.ok ? run1.value : run1.error);

// Case 2: Missing file testing ? operator early return
const run2 = ServicePipelineSimulator.loadAndStart('missing_file.json');
console.log('Run 2 Status:', run2.ok ? 'SUCCESS' : 'FAILED', run2.ok ? run2.value : run2.error);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Result<T, E>',
          def: {
            en: 'Standard algebraic sum type expressing either a successful computation Ok(T) or a recoverable error Err(E).',
            bn: 'স্ট্যান্ডার্ড অ্যালজেব্রাইক সাম টাইপ যা সফল গণনা Ok(T) অথবা পুনরুদ্ধারযোগ্য ত্রুটি Err(E) প্রকাশ করে।'
          }
        },
        {
          term: 'Try Operator (?)',
          def: {
            en: 'Syntax operator that unwraps an Ok value inline or early returns an Err value with automatic From trait conversion.',
            bn: 'সিনট্যাক্স অপারেটর যা Ok মান খুলে দেয় অথবা From ট্রেইটের সাহায্যে কনভার্ট করে Err মান ফেরত পাঠায়।'
          }
        },
        {
          term: 'Panic',
          def: {
            en: 'Unrecoverable program state that unwinds the thread stack and terminates execution, reserved for critical defects.',
            bn: 'অপরিবর্তনীয় মারাত্মক অবস্থা যা থ্রেড বন্ধ করে দেয় এবং কেবল গুরুতর অভ্যন্তরীণ ত্রুটিতে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'From Trait',
          def: {
            en: 'Standard library trait enabling automatic polymorphic conversion between underlying error types and unified domain errors.',
            bn: 'স্ট্যান্ডার্ড লাইব্রেরির ট্রেইট যা বিভিন্ন লাইব্রেরির এররকে মূল ডোমেন এররে স্বয়ংক্রিয়ভাবে রূপান্তর করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'result-type-two-variants-ex1',
      kind: 'mcq',
      topic: 'result-type-algebraic-variants',
      question: {
        en: 'What are the two algebraic variants defined by the standard "Result<T, E>" enum in Rust?',
        bn: 'Rust-এর স্ট্যান্ডার্ড "Result<T, E>" এনামে কোন দুটি অ্যালজেব্রাইক ভ্যারিয়েন্ট সংজ্ঞায়িত থাকে?'
      },
      options: [
        {
          en: 'Ok(T) representing successful computation and Err(E) representing a recoverable error',
          bn: 'সফল গণনার প্রতিনিধিত্বকারী Ok(T) এবং পুনরুদ্ধারযোগ্য ত্রুটির প্রতিনিধিত্বকারী Err(E)'
        },
        {
          en: 'True and False representing boolean logic',
          bn: 'বুলিয়ান লজিকের প্রতিনিধিত্বকারী True এবং False'
        },
        {
          en: 'Pass and Fail representing school exam grades',
          bn: 'স্কুলের পরীক্ষার গ্রেড নির্দেশকারী Pass এবং Fail'
        },
        {
          en: 'Result has zero variants and stores only 64-bit integers',
          bn: 'Result-এ কোনো ভ্যারিয়েন্ট থাকে না এবং এটি কেবল ৬৪-বিট পূর্ণসংখ্যা রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Result expresses either Ok or Err.',
        bn: 'সফল হলে Ok এবং ব্যর্থ হলে Err ফেরত আসে।'
      },
      explanation: {
        en: 'The Result enum forces developers to handle both Ok(T) and Err(E) paths explicitly, ensuring errors cannot be ignored silently.',
        bn: 'উভয় বিকল্প সামলানো বাধ্যতামূলক হওয়ায় কোনো ভুলই চোখ এড়িয়ে যাওয়ার সুযোগ থাকে না।'
      }
    },
    {
      id: 'try-operator-from-conversion-ex2',
      kind: 'mcq',
      topic: 'try-operator-from-trait-conversion',
      question: {
        en: 'How does the question mark ("?") operator convert disparate error types (such as io::Error) into a custom function return error (e.g. AppError)?',
        bn: 'প্রশ্নবোধক চিহ্ন ("?") অপারেটর কীভাবে ভিন্ন ভিন্ন এররকে (যেমন io::Error) কাস্টম ফাংশন এররে (যেমন AppError) রূপান্তরিত করে?'
      },
      options: [
        {
          en: 'It calls "From::from(err)" automatically, invoking any "impl From<io::Error> for AppError" defined in the crate to cast the error seamlessly',
          bn: 'এটি নিজে থেকেই "From::from(err)" আহ্বান করে, যা ক্রেটে সংজ্ঞায়িত "impl From<io::Error> for AppError" বাস্তবায়ন চালিয়ে এরর রূপান্তর করে'
        },
        {
          en: 'By encrypting the error string with a random 256-bit password',
          bn: 'একটি এলোমেলো ২৫৬-বিট পাসওয়ার্ড দিয়ে এরর স্ট্রিংটি এনক্রিপ্ট করে'
        },
        {
          en: 'It converts the error into a 32-bit floating point number',
          bn: 'এটি এররটিকে একটি ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'The ? operator does not support error conversion in safe Rust',
          bn: 'নিরাপদ Rust-এ ? অপারেটর এরর রূপান্তর সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'The ? operator automatically invokes the standard From trait.',
        bn: 'From ট্রেইট ইমপ্লিমেন্ট করা থাকলে কম্পাইলার নিজে থেকেই টাইপ পরিবর্তন করে নেয়।'
      },
      explanation: {
        en: 'Because ? calls From::from, functions can return a single cohesive custom error enum while cleanly catching errors from multiple distinct dependencies.',
        bn: 'ফলে বিভিন্ন লাইব্রেরির ভিন্ন ভিন্ন এররকে একটিমাত্র মূল এরর এনামে সুন্দরভাবে সাজানো যায়।'
      }
    },
    {
      id: 'panic-vs-result-recoverability-ex3',
      kind: 'mcq',
      topic: 'panic-vs-result-architectural-distinction',
      question: {
        en: 'When should a systems engineer employ "panic!" instead of returning a "Result<T, E>" in Rust?',
        bn: 'Rust-এ "Result<T, E>" ফেরত দেওয়ার পরিবর্তে কখন একজন সিস্টেম ইঞ্জিনিয়ারের "panic!" ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'Strictly for unrecoverable internal defects or broken invariants (such as corrupted internal memory) that indicate a programmer bug rather than expected runtime failure',
          bn: 'কঠোরভাবে কেবল অপরিবর্তনীয় অভ্যন্তরীণ ত্রুটি বা ভাঙা নিয়মের ক্ষেত্রে যা স্বাভাবিক ব্যর্থতার বদলে কোডের মারাত্মক বাগ নির্দেশ করে'
        },
        {
          en: 'Whenever a user types an invalid email address on a web form',
          bn: 'ওয়েব ফর্মে ব্যবহারকারী ভুল ইমেইল ঠিকানা টাইপ করলে'
        },
        {
          en: 'Whenever an HTTP network request experiences a brief timeout',
          bn: 'এইচটিটিপি নেটওয়ার্ক রিকোয়েস্টে সাময়িক টাইমআউট দেখা দিলে'
        },
        {
          en: 'Panics are recommended for standard business logic validation',
          bn: 'সাধারণ ব্যবসায়িক লজিক যাচাইয়ের জন্য প্যানিক সুপারিশ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Panics are for unrecoverable programmer bugs, while Result is for expected runtime failures.',
        bn: 'প্রত্যাশিত ভুলের জন্য Result আর সিস্টেমের মারাত্মক ত্রুটির জন্য panic ব্যবহৃত হয়।'
      },
      explanation: {
        en: 'Panics terminate the thread and should never be used for anticipated runtime errors like missing files or invalid inputs. Such cases must return Result.',
        bn: 'ইনপুট ভুলের জন্য পুরো অ্যাপ ক্র্যাশ না করিয়ে Result দিয়ে ব্যবহারকারীকে বার্তা দেওয়াই সঠিক নিয়ম।'
      }
    },
    {
      id: 'anyhow-vs-thiserror-ecosystem-ex4',
      kind: 'mcq',
      topic: 'anyhow-vs-thiserror-ecosystem-role',
      question: {
        en: 'In the modern Rust ecosystem, what is the recognized convention for using "thiserror" versus "anyhow"?',
        bn: 'আধুনিক Rust ইকোসিস্টেমে "thiserror" বনাম "anyhow" ব্যবহারের স্বীকৃত নিয়ম কী?'
      },
      options: [
        {
          en: 'Use "thiserror" in libraries to define explicit typed domain error enums; use "anyhow" in applications/binaries for flexible error handling with contextual stack traces',
          bn: 'লাইব্রেরিতে স্পষ্ট টাইপড ডোমেন এরর এনামের জন্য "thiserror" ব্যবহার করুন; আর অ্যাপ্লিকেশনে প্রাসঙ্গিক ট্রেসসহ নমনীয় এরর হ্যান্ডলিংয়ের জন্য "anyhow" ব্যবহার করুন'
        },
        {
          en: 'thiserror is only for Windows; anyhow is only for Linux',
          bn: 'thiserror কেবল উইন্ডোজের জন্য; anyhow কেবল লিনাক্সের জন্য'
        },
        {
          en: 'There is zero difference between the two crates',
          bn: 'দুটি ক্রেটের মধ্যে কোনো পার্থক্য নেই'
        },
        {
          en: 'Both crates were deprecated in Rust 2021',
          bn: 'Rust ২০২১ সংস্করণে উভয় ক্রেট বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'thiserror for libraries (custom enums); anyhow for applications (contextual dynamic errors).',
        bn: 'লাইব্রেরির জন্য নির্দিষ্ট টাইপের thiserror আর অ্যাপের জন্য বিস্তারিত anyhow সেরা।'
      },
      explanation: {
        en: 'Library consumers need to match on specific error variants, making thiserror ideal. Applications primarily need to report clear errors with context, where anyhow excels.',
        bn: 'লাইব্রেরি ব্যবহারকারীদের সুনির্দিষ্ট এরর শনাক্ত করতে হয়, কিন্তু অ্যাপ্লিকেশনে বিস্তারিত মেসেজ দেখানোই প্রধান লক্ষ্য।'
      }
    }
  ],
  quiz: {
    id: 'quiz-results-and-the-question',
    title: {
      en: 'Rust Error Handling & Result Quiz',
      bn: 'Rust এরর হ্যান্ডলিং এবং Result কুইজ'
    },
    questions: [
      {
        id: 'quiz-unwrap-in-production-risks',
        kind: 'mcq',
        topic: 'unwrap-production-panic-hazards',
        question: {
          en: 'Why is invoking ".unwrap()" or ".expect()" widely discouraged in production Rust services?',
          bn: 'প্রোডাকশন Rust সার্ভিসে কেন ".unwrap()" বা ".expect()" ডাকা কঠোরভাবে নিরুৎসাহিত করা হয়?'
        },
        options: [
          {
            en: 'If the value is Err or None, unwrap triggers an immediate thread panic that can crash the entire microservice or abort active client connections',
            bn: 'মানটি যদি Err বা None হয়, তবে unwrap তাৎক্ষণিকভাবে থ্রেড প্যানিক তৈরি করে যা পুরো মাইক্রোসার্ভিস ক্র্যাশ করতে বা সচল কানেকশন কেটে দিতে পারে'
          },
          {
            en: 'unwrap runs 10 times slower than matching',
            bn: 'unwrap ম্যাচিংয়ের চেয়ে ১০ গুণ ধীরে চলে'
          },
          {
            en: 'unwrap converts all errors into 64-bit integer numbers',
            bn: 'unwrap সমস্ত এররকে ৬৪-বিট পূর্ণসংখ্যায় রূপান্তর করে'
          },
          {
            en: 'unwrap was removed from the Rust standard library in 2020',
            bn: '২০২০ সালে Rust স্ট্যান্ডার্ড লাইব্রেরি থেকে unwrap বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'unwrap causes a panic when encountering an Err variant.',
          bn: 'ভুল এলেই এটি সার্ভার ক্র্যাশ করায়, তাই প্রোডাকশনে এটি বিপদজনক।'
        },
        explanation: {
          en: 'Unchecked unwrapping introduces ticking time bombs into production code. Idiomatic Rust propagates errors using ? or recovers with fallback defaults.',
          bn: 'তাই unwrap এর বদলে ? অপারেটর বা ফলব্যাক ব্যবহার করাই সেরা প্র্যাকটিস।'
        }
      },
      {
        id: 'quiz-option-ok-or-else-idiom',
        kind: 'mcq',
        topic: 'option-ok-or-else-conversion-result',
        question: {
          en: 'How does the method "opt.ok_or_else(|| AppError::NotFound)" bridge an "Option<T>" into a "Result<T, AppError>"?',
          bn: '"opt.ok_or_else(|| AppError::NotFound)" মেথডটি কীভাবে একটি "Option<T>"-কে "Result<T, AppError>"-এ রূপান্তরিত করে?'
        },
        options: [
          {
            en: 'If Some(v), it yields Ok(v); if None, it evaluates the closure lazily to construct and return Err(AppError::NotFound)',
            bn: 'Some(v) থাকলে এটি Ok(v) ফেরত দেয়; আর None থাকলে ক্লোজারটি চালিয়ে Err(AppError::NotFound) তৈরি করে ফেরত দেয়'
          },
          {
            en: 'It deletes the variable from memory immediately',
            bn: 'এটি মেমোরি থেকে ভেরিয়েবলটি তাৎক্ষণিকভাবে মুছে ফেলে'
          },
          {
            en: 'It doubles the memory capacity of the option',
            bn: 'এটি অপশনের মেমোরি ধারণক্ষমতা দ্বিগুণ করে দেয়'
          },
          {
            en: 'ok_or_else is only compatible with floating point numbers',
            bn: 'ok_or_else কেবল ফ্লোটিং পয়েন্ট সংখ্যার সাথে সামঞ্জস্যপূর্ণ'
          }
        ],
        answer: 0,
        hint: {
          en: 'ok_or_else maps Some to Ok, and None to a custom Err.',
          bn: 'মান থাকলে Ok বানায়, আর খালি থাকলে কাস্টম Err তৈরি করে নেয়।'
        },
        explanation: {
          en: 'ok_or_else seamlessly converts missing optional values into domain errors, allowing them to participate in ? operator propagation pipelines.',
          bn: 'এর মাধ্যমে Option কে সরাসরি ? অপারেটরের সাথে ব্যবহারযোগ্য করা যায়।'
        }
      },
      {
        id: 'quiz-error-trait-std-requirements',
        kind: 'mcq',
        topic: 'std-error-trait-display-debug-bounds',
        question: {
          en: 'Which two foundational standard library traits are strictly required as supertraits for any type implementing "std::error::Error"?',
          bn: '"std::error::Error" বাস্তবায়নকারী যেকোনো টাইপের জন্য কোন দুটি মৌলিক স্ট্যান্ডার্ড লাইব্রেরি ট্রেইট থাকা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'Debug and Display, ensuring the error possesses both human-readable presentation and programmer debugging output',
            bn: 'Debug এবং Display, যা নিশ্চিত করে যে এররটির মানুষ-পাঠ্য উপস্থাপনা এবং ডিবাগিং আউটপুট উভয়ই উপস্থিত রয়েছে'
          },
          {
            en: 'Clone and Copy, requiring all errors to be duplicated in memory',
            bn: 'Clone এবং Copy, যার জন্য সমস্ত এরর মেমোরিতে ডুপ্লিকেট হতে হয়'
          },
          {
            en: 'Eq and Ord, requiring errors to be numerically sorted',
            bn: 'Eq এবং Ord, যার জন্য এররগুলোকে ক্রমানুসারে সাজাতে হয়'
          },
          {
            en: 'std::error::Error has zero trait prerequisites',
            bn: 'std::error::Error এর জন্য কোনো পূর্বশর্ত নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'std::error::Error requires Debug and Display.',
          bn: 'মানুষের জন্য Display আর লগের জন্য Debug উভয়ই এররে থাকা জরুরি।'
        },
        explanation: {
          en: 'The standard Error trait requires Display for user-facing error messages and Debug for developer-facing diagnostic formatting.',
          bn: 'এর ফলে ব্যবহারকারী এবং ডেভেলপার উভয়েই প্রয়োজনীয় বার্তা সঠিকভাবে দেখতে পান।'
        }
      },
      {
        id: 'quiz-anyhow-context-tracing',
        kind: 'mcq',
        topic: 'anyhow-context-attachment-debugging',
        question: {
          en: 'What architectural power does anyhow\'s ".context("Failed to load user credentials")" deliver when debugging deep call stacks?',
          bn: 'গভীর কল স্ট্যাক ডিবাগ করার সময় anyhow-এর ".context("Failed to load user credentials")" কোন স্থাপত্যিক ক্ষমতা প্রদান করে?'
        },
        options: [
          {
            en: 'It wraps the underlying error in a descriptive contextual explanation without losing the original root cause, forming an informative failure chain',
            bn: 'এটি মূল কারণ না হারিয়ে ভেতরের এররটিকে একটি বর্ণনামূলক ব্যাখ্যা দিয়ে মুড়িয়ে দেয়, যা একটি স্পষ্ট ব্যর্থতার চেইন তৈরি করে'
          },
          {
            en: 'It runs the operation 5 times in a loop',
            bn: 'এটি লুপের ভেতর অপারেশনটি ৫ বার চালায়'
          },
          {
            en: 'It translates the error into 3 foreign languages',
            bn: 'এটি এররটিকে ৩ টি বিদেশি ভাষায় অনুবাদ করে'
          },
          {
            en: 'Context attachment was removed in Rust 2018',
            bn: 'Rust ২০১৮ সংস্করণে কনটেক্সট সংযুক্তি বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '.context() adds explanatory layers to errors as they bubble up.',
          bn: 'এরর ওপরে ওঠার সময় ধাপে ধাপে কী হচ্ছিল তার প্রাসঙ্গিক বার্তা যোগ করে।'
        },
        explanation: {
          en: 'Context chaining allows high-level callers to explain what business task failed while preserving the low-level I/O or database error for logs.',
          bn: 'ফলে মূল টেকনিক্যাল ত্রুটি না হারিয়েও স্পষ্ট ব্যবসায়িক প্রেক্ষাপট লগে ফুটে ওঠে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-rust-release',
    title: {
      en: 'Compiler Release Profiles & Microservice Packaging',
      bn: 'কম্পাইলার রিলিজ প্রোফাইল এবং মাইক্রোসার্ভিস প্যাকেজিং'
    }
  }
};
