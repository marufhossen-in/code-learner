import type { Lesson } from '../../../lib/types';

export const ThrowsAndTheCatchLesson: Lesson = {
  slug: 'throws-and-the-catch',
  tech: 'lang-java',
  title: {
    en: 'Exception Mechanics, Throws & Multi-Catch',
    bn: 'এক্সেপশন মেকানিজম, Throws এবং মাল্টি-ক্যাচ'
  },
  summary: {
    en: 'Master fault-tolerant error architectures in the Java language: contrast compiler-checked exceptions against unchecked runtime exceptions, handle multiple failure scenarios using multi-catch blocks, eliminate resource leakage with AutoCloseable try-with-resources, and preserve diagnostic context via exception chaining.',
    bn: 'জাভা ভাষায় নির্ভরযোগ্য এরর আর্কিটেকচার আয়ত্ত করুন: কম্পাইলার চেকড এক্সেপশন বনাম আনচেকড রানটাইম এক্সেপশনের পার্থক্য, মাল্টি-ক্যাচ ব্লকের সঠিক ব্যবহার, AutoCloseable try-with-resources দিয়ে নিশ্চিত রিসোর্স মুক্তি এবং এক্সেপশন চেইনিং দিয়ে মূল কারণ সংরক্ষণ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'exception-contract-and-throws-heading',
      text: {
        en: 'The "Catch or Declare" Rule and Multi-Catch Syntax',
        bn: '"Catch or Declare" নীতি এবং মাল্টি-ক্যাচ সিনট্যাক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Java, methods that can encounter recoverable external failures enforce the "Catch or Declare" rule. Suppose a method invokes an operation declaring a Checked Exception (such as "IOException" or "SQLException"). The Java compiler strictly mandates that the calling method must either enclose the call within a try-catch block or declare "throws" in its own signature. Java 7 introduced multi-catch syntax using the single vertical pipe ("|") operator, allowing developers to consolidate distinct exception handlers into a single unified block without repeating recovery logic.',
        bn: 'জাভাতে কোনো মেথডে উদ্ধারযোগ্য বাহ্যিক ত্রুটি ঘটার সম্ভাবনা থাকলে তা "Catch or Declare" নীতি কার্যকর করে। ধরা যাক কোনো মেথড এমন কাজ কল করে যা একটি চেকড এক্সেপশন (যেমন "IOException" বা "SQLException") ঘোষণা করে। জাভা কম্পাইলার নির্দেশ দেয় যে কলকারী মেথডটিকে অবশ্যই হয় try-catch ব্লকের মধ্যে কলটি রাখতে হবে অথবা নিজস্ব সিগনেচারে একটি "throws" ক্লজ যোগ করতে হবে। জাভা ৭ এ একক পাইপ ("|") অপারেটর ব্যবহারের মাধ্যমে মাল্টি-ক্যাচ সিনট্যাক্স প্রবর্তিত হয়, যা পুনরাবৃত্তি ছাড়াই একাধিক ভিন্ন এক্সেপশনকে একটি একক ব্লকে সহজে হ্যান্ডেল করার সুবিধা দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of Java exceptions: Method throws declaration, multi-catch interception, exception chaining, and AutoCloseable cleanup.',
        bn: 'চিত্র ১: জাভা এক্সেপশন লাইফসাইকেলের রূপরেখা: মেথড throws ঘোষণা, মাল্টি-ক্যাচ ইন্টারসেপশন, এক্সেপশন চেইনিং এবং AutoCloseable রিসোর্স মুক্তি।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA EXCEPTION MECHANICS: THROWS, MULTI-CATCH &amp; CHAINING</text>

  <!-- Step 1: Throws Declaration -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Throws Contract</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">void read() throws</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">  IOException {</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Compiler Enforced</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Explicit Fault Path</text>
  </g>

  <!-- Step 2: Multi-Catch Block -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Multi-Catch</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">catch (IO | SQL ex)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Unified Catch Block</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Zero Duplicated Code</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Clean Java 7 Syntax</text>
  </g>

  <!-- Step 3: Exception Chaining -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Error Chaining</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">throw new OrderEx(</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">  "Payment failed", ex)</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">preserves getCause()</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Root Cause Preserved</text>
  </g>

  <!-- Step 4: AutoCloseable Cleanup -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. AutoCloseable</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">try (Socket s = ...)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Guaranteed s.close()</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">getSuppressed()</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero Resource Leak</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'exception-chaining-and-autocloseable-heading',
      text: {
        en: 'Exception Chaining and AutoCloseable Resource Management',
        bn: 'এক্সেপশন চেইনিং এবং AutoCloseable রিসোর্স ম্যানেজমেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When catching low-level technical errors (such as a raw SQLException from a database driver), enterprise architectures avoid exposing infrastructure details to business callers. Instead, developers wrap the low-level exception inside a domain-specific exception using Exception Chaining: "throw new OrderProcessingException(\'Failed to persist order\', sqlEx)". Passing the original exception into the constructor preserves the root cause, accessible via getCause() and visible in the unified stack trace. Furthermore, using try-with-resources ensures all AutoCloseable handles close deterministically even when exceptions occur.',
        bn: 'ডেটাবেস বা নেটওয়ার্ক থেকে কোনো নিম্নস্তরের প্রযুক্তিগত এরর (যেমন raw SQLException) ঘটলে এন্টারপ্রাইজ সিস্টেমে তা সরাসরি ব্যবহারকারীর কাছে প্রকাশ করা হয় না। বরং এক্সেপশন চেইনিংয়ের মাধ্যমে সেই নিম্নস্তরের এররকে একটি ডোমেন-নির্দিষ্ট এক্সেপশনে মুড়ে ফেলা হয়: "throw new OrderProcessingException(\'Failed to persist order\', sqlEx)"। নতুন কনস্ট্রাক্টরে মূল এররটি পাস করার কারণে আসল মূল কারণটি সংরক্ষিত থাকে, যা getCause() মেথড দিয়ে পড়া যায় এবং স্ট্যাক ট্রেসে সুস্পষ্ট দেখা যায়। এছাড়াও try-with-resources ব্যবহারের মাধ্যমে এরর ঘটলেও সমস্ত AutoCloseable রিসোর্স নিশ্চিতভাবে বন্ধ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java checked throws contracts, multi-catch handling, exception chaining with getCause(), and deterministic AutoCloseable release.',
        bn: 'জাভা চেকড throws চুক্তি, মাল্টি-ক্যাচ, এক্সেপশন চেইনিং এবং স্বয়ংক্রিয় রিসোর্স বন্ধের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Java Exception Chaining and AutoCloseable Teardown

export class DomainBusinessException extends Error {
  public readonly cause: Error | null;

  constructor(message: string, cause: Error | null = null) {
    super(message);
    this.name = 'DomainBusinessException';
    this.cause = cause;
  }

  public getCause(): Error | null {
    return this.cause;
  }
}

export class MockFileReader {
  public isOpen: boolean = true;

  public readContent(): string {
    // Simulating low-level technical failure
    throw new Error('IOException: Disk sector unreadable');
  }

  public close(): void {
    this.isOpen = false;
    console.log('[AutoCloseable] File handle safely closed.');
  }
}

// Simulating Java Try-With-Resources with Exception Chaining
export function loadCustomerRecord(): { success: boolean; error?: string; rootCause?: string } {
  const reader = new MockFileReader();
  try {
    const data = reader.readContent();
    return { success: true };
  } catch (rawError: any) {
    // Wrapping low-level technical error into domain business exception (Chaining)
    const chained = new DomainBusinessException('Failed to process customer profile', rawError);
    return {
      success: false,
      error: chained.message,
      rootCause: chained.getCause()?.message
    };
  } finally {
    reader.close();
  }
}

// Execution demonstration
const outcome = loadCustomerRecord();
console.log('Operation Success:', outcome.success); // false
console.log('High-Level Error:', outcome.error); // "Failed to process customer profile"
console.log('Preserved Root Cause:', outcome.rootCause); // "IOException: Disk sector unreadable"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'throws',
          def: {
            en: 'Method signature keyword declaring checked exceptions that the caller is obligated to handle or propagate.',
            bn: 'মেথড সিগনেচারের কি-ওয়ার্ড যা কলারের জন্য হ্যান্ডেল করা বা ঘোষণা করা আবশ্যক এমন এক্সেপশন তালিকাভুক্ত করে।'
          }
        },
        {
          term: 'Multi-Catch',
          def: {
            en: 'Java 7 syntax allowing multiple non-related exception types to be caught in a single block using the pipe operator.',
            bn: 'জাভা ৭ সিনট্যাক্স যা একক পাইপ চিহ্নের মাধ্যমে একটি ব্লকেই একাধিক ভিন্ন এক্সেপশন ধরার সুযোগ দেয়।'
          }
        },
        {
          term: 'Exception Chaining',
          def: {
            en: 'Design pattern wrapping low-level technical errors inside domain exceptions while preserving root cause via getCause().',
            bn: 'ডিজাইন প্যাটার্ন যা নিম্নস্তরের এররকে বিজনেস এররে মুড়ে রাখে এবং getCause() দিয়ে মূল কারণ সংরক্ষণ করে।'
          }
        },
        {
          term: 'AutoCloseable',
          def: {
            en: 'Interface marking resources eligible for deterministic automatic cleanup within try-with-resources statements.',
            bn: 'ইন্টারফেস যা কোনো অবজেক্টকে try-with-resources ব্লকে স্বয়ংক্রিয়ভাবে বন্ধ হওয়ার যোগ্যতা দান করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'catch-or-declare-compiler-rule-ex1',
      kind: 'mcq',
      topic: 'checked-exception-catch-or-declare',
      question: {
        en: 'What does the Java compiler strictly enforce when a method calls another method that declares "throws IOException"?',
        bn: 'কোনো মেথড "throws IOException" যুক্ত মেথড কল করলে জাভা কম্পাইলার কঠোরভাবে কী বাধ্যতামূলক করে?'
      },
      options: [
        {
          en: 'The caller must either catch IOException in a try-catch block or declare "throws IOException" in its own method signature',
          bn: 'কলকারী মেথডটিকে অবশ্যই try-catch ব্লক দিয়ে IOException ধরতে হবে অথবা নিজস্ব সিগনেচারে "throws IOException" লিখতে হবে'
        },
        {
          en: 'The compiler shuts down the operating system',
          bn: 'কম্পাইলার অপারেটিং সিস্টেম বন্ধ করে দেয়'
        },
        {
          en: 'IOException is automatically deleted from the bytecode',
          bn: 'বাইটকোড থেকে IOException নিজে থেকেই মুছে যায়'
        },
        {
          en: 'The compiler replaces the method with an integer 0',
          bn: 'কম্পাইলার মেথডটিকে ০ পূর্ণসংখ্যা দিয়ে প্রতিস্থাপন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Catch or Declare rule mandates explicit handling or propagation.',
        bn: 'Catch or Declare নীতি হয় সরাসরি ধরা অথবা throws দিয়ে ঘোষণা করা বাধ্যতামূলক করে।'
      },
      explanation: {
        en: 'Checked exceptions mandate compile-time handling: either catch the exception immediately or declare it with throws.',
        bn: 'চেকড এক্সেপশনের ক্ষেত্রে ডেভেলপারকে অবশ্যই সচেতনভাবে এরর সামলানোর কোড লিখতে হয়।'
      }
    },
    {
      id: 'multi-catch-syntax-operator-ex2',
      kind: 'mcq',
      topic: 'multi-catch-pipe-operator',
      question: {
        en: 'Which character operator separates multiple exception classes inside a Java 7+ multi-catch block?',
        bn: 'জাভা ৭+ মাল্টি-ক্যাচ ব্লকে একাধিক এক্সেপশন ক্লাসের মাঝে কোন অপারেটর চিহ্নটি বসে?'
      },
      options: [
        { en: 'Single pipe (|)', bn: 'একক পাইপ (|)' },
        { en: 'Double ampersand (&&)', bn: 'ডাবল অ্যাম্পারস্যান্ড (&&)' },
        { en: 'Comma (,)', bn: 'কমা (,)' },
        { en: 'Forward slash (/)', bn: 'ফরওয়ার্ড স্ল্যাশ (/)' }
      ],
      answer: 0,
      hint: {
        en: 'Java 7 uses the single vertical pipe character: catch (IOException | SQLException e).',
        bn: 'জাভা ৭ একক পাইপ চিহ্ন ব্যবহার করে: catch (IOException | SQLException e)।'
      },
      explanation: {
        en: 'The pipe operator (|) combines multiple disjoint exception types into a single clean catch block.',
        bn: 'পাইপ (|) অপারেটর একাধিক ভিন্ন এক্সেপশনকে একই ক্যাচ ব্লকে ধরার সুযোগ দেয়।'
      }
    },
    {
      id: 'exception-chaining-cause-inspection-ex3',
      kind: 'mcq',
      topic: 'exception-chaining-getcause',
      question: {
        en: 'Which method on java.lang.Throwable retrieves the original root-cause exception passed into a chained exception constructor?',
        bn: 'java.lang.Throwable ক্লাসের কোন মেথডটি এক্সেপশন চেইনিংয়ে যুক্ত করা আদি মূল-কারণটি উদ্ধার করতে ব্যবহৃত হয়?'
      },
      options: [
        { en: 'throwable.getCause()', bn: 'throwable.getCause()' },
        { en: 'throwable.getOrigin()', bn: 'throwable.getOrigin()' },
        { en: 'throwable.findRoot()', bn: 'throwable.findRoot()' },
        { en: 'throwable.unwrap()', bn: 'throwable.unwrap()' }
      ],
      answer: 0,
      hint: {
        en: 'getCause() returns the underlying Throwable that caused this failure.',
        bn: 'getCause() মেথড যে এররের কারণে এই ব্যতিক্রমটি তৈরি হয়েছে তা ফেরত দেয়।'
      },
      explanation: {
        en: 'Throwable.getCause() retrieves the chained parent exception, allowing diagnostic logging to inspect the root failure.',
        bn: 'getCause() এর মাধ্যমে চেইনিং করা আদি এররটি পাওয়া যায় এবং মূল সমস্যা শনাক্ত করা সহজ হয়।'
      }
    },
    {
      id: 'unchecked-runtime-exceptions-hierarchy-ex4',
      kind: 'mcq',
      topic: 'unchecked-exception-hierarchy-root',
      question: {
        en: 'Which parent class defines an Unchecked Exception in Java that is exempted from the compiler "Catch or Declare" rule?',
        bn: 'জাভাতে কোন প্যারেন্ট ক্লাস থেকে উৎপন্ন এক্সেপশনগুলো আনচেকড হিসেবে গণ্য হয় এবং কম্পাইলারের "Catch or Declare" নিয়ম থেকে মুক্ত থাকে?'
      },
      options: [
        { en: 'java.lang.RuntimeException', bn: 'ক্লাস: java.lang.RuntimeException' },
        { en: 'java.lang.Exception directly', bn: 'সরাসরি java.lang.Exception' },
        { en: 'java.lang.Throwable directly', bn: 'সরাসরি java.lang.Throwable' },
        { en: 'java.io.IOException', bn: 'ক্লাস: java.io.IOException' }
      ],
      answer: 0,
      hint: {
        en: 'Subclasses of RuntimeException are unchecked by the compiler.',
        bn: 'RuntimeException এর সমস্ত সাবক্লাস কম্পাইলার দ্বারা আনচেকড থাকে।'
      },
      explanation: {
        en: 'RuntimeException and its subclasses are unchecked; they signify programming errors and do not require throws declarations.',
        bn: 'RuntimeException এর সাবক্লাসগুলো কোডের লজিক্যাল ভুল নির্দেশ করে এবং এদের জন্য throws লেখা বাধ্যতামূলক নয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-throws-and-the-catch',
    title: {
      en: 'Java Exception Handling & Multi-Catch Quiz',
      bn: 'জাভা এক্সেপশন হ্যান্ডলিং এবং মাল্টি-ক্যাচ কুইজ'
    },
    questions: [
      {
        id: 'quiz-multi-catch-subclass-relationship-rule',
        kind: 'mcq',
        topic: 'multi-catch-disjoint-types-rule',
        question: {
          en: 'Why does "catch (FileNotFoundException | IOException e)" fail to compile in a Java 7 multi-catch block?',
          bn: 'জাভা ৭ মাল্টি-ক্যাচ ব্লকে "catch (FileNotFoundException | IOException e)" কোডটি কম্পাইল হতে ব্যর্থ হয় কেন?'
        },
        options: [
          {
            en: 'Because FileNotFoundException is a direct subclass of IOException, making its inclusion redundant; multi-catch alternatives must be disjoint (not related by inheritance)',
            bn: 'কারণ FileNotFoundException হলো IOException এর সরাসরি সাবক্লাস, ফলে এটি অপ্রয়োজনীয়; মাল্টি-ক্যাচ বিকল্পগুলো অবশ্যই ইনহেরিটেন্স সম্পর্কহীন বা disjoint হতে হয়'
          },
          {
            en: 'Because multi-catch only works with 3 or more exceptions',
            bn: 'কারণ মাল্টি-ক্যাচ কেবল ৩ বা ততোধিক এক্সেপশনে কাজ করে'
          },
          {
            en: 'Because FileNotFoundException cannot be caught in Java',
            bn: 'কারণ জাভাতে FileNotFoundException ধরা অসম্ভব'
          },
          {
            en: 'Multi-catch only permits runtime exceptions',
            bn: 'মাল্টি-ক্যাচ কেবল রানটাইম এক্সেপশনের অনুমতি দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Types in a multi-catch cannot share an inheritance ancestor-descendant relationship.',
          bn: 'মাল্টি-ক্যাচে থাকা ক্লাসগুলোর মাঝে পিতা-সন্তান ইনহেরিটেন্স সম্পর্ক থাকা চলবে না।'
        },
        explanation: {
          en: 'The compiler disallows subclass redundancy in multi-catch; since IOException catches all its subtypes, listing FileNotFoundException is an error.',
          bn: 'যেহেতু IOException নিজেই সব সাবক্লাস ধরে ফেলে, তাই মাল্টি-ক্যাচে তার কোনো সাবক্লাস আলাদা করে লেখা নিষিদ্ধ।'
        }
      },
      {
        id: 'quiz-multi-catch-parameter-implicit-final',
        kind: 'mcq',
        topic: 'multi-catch-parameter-implicitly-final',
        question: {
          en: 'What special compile-time property applies to the exception parameter variable "ex" inside a multi-catch block "catch (IOException | SQLException ex)"?',
          bn: 'মাল্টি-ক্যাচ ব্লকে "catch (IOException | SQLException ex)" এর এক্সেপশন প্যারামিটার "ex" এর ওপর কোন বিশেষ কম্পাইল-টাইম নিয়মটি প্রযোজ্য হয়?'
        },
        options: [
          {
            en: 'The variable "ex" is implicitly final; reassigning "ex = new IOException()" produces a compile-time error',
            bn: 'ভেরিয়েবল "ex" স্বয়ংক্রিয়ভাবে final; ব্লকের ভেতর "ex = new IOException()" দিয়ে রি-অ্যাসাইন করার চেষ্টা করলে কম্পাইল এরর ঘটে'
          },
          {
            en: 'The variable "ex" is converted to a string',
            bn: 'ভেরিয়েবল "ex" স্ট্রিংয়ে রূপান্তরিত হয়'
          },
          {
            en: 'The variable "ex" is deleted after 1 microsecond',
            bn: 'ভেরিয়েবল "ex" ১ মাইক্রোসেকেন্ড পর মুছে যায়'
          },
          {
            en: 'The variable "ex" can only be read on Sundays',
            bn: 'ভেরিয়েবল "ex" শুধুমাত্র রবিবারে পড়া যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multi-catch variables cannot be reassigned; they are implicitly final.',
          bn: 'মাল্টি-ক্যাচের ভেরিয়েবলে নতুন মান বসানো নিষিদ্ধ; এটি নিজে থেকেই final।'
        },
        explanation: {
          en: 'The Java language specification states that multi-catch exception parameters are implicitly final to preserve type soundness.',
          bn: 'টাইপ নির্ভুলতা বজায় রাখার স্বার্থে জাভা স্পেসিফিকেশন মাল্টি-ক্যাচ ভেরিয়েবলকে অপরিবর্তনীয় বা final করে রেখেছে।'
        }
      },
      {
        id: 'quiz-rethrowing-exceptions-precise-rethrow',
        kind: 'mcq',
        topic: 'precise-rethrow-compiler-analysis',
        question: {
          en: 'What feature introduced in Java 7 allows a method to catch "Exception e" and rethrow "throw e", while declaring only the precise checked exceptions in the "throws" signature?',
          bn: 'জাভা ৭ এর কোন বৈশিষ্ট্যের কারণে একটি মেথড সাধারণ "Exception e" ধরে পুনরায় "throw e" ছুড়লেও মেথড সিগনেচারে কেবল সুনির্দিষ্ট চেকড এররগুলো ঘোষণা করা যায়?'
        },
        options: [
          {
            en: 'Precise Rethrow (improved compiler type analysis verifying that only exceptions actually thrown by the try block can emerge)',
            bn: 'প্রিসাইজ রিথ্রো (উন্নত কম্পাইলার টাইপ বিশ্লেষণ যা নিশ্চিত করে try ব্লকে কেবল যেসব চেকড এরর সত্যিই ঘটতে পারে সেগুলোই বাইরে বেরোবে)'
          },
          {
            en: 'Automatic exception deletion',
            bn: 'স্বয়ংক্রিয় এক্সেপশন মুছে ফেলা'
          },
          {
            en: 'Dynamic exception reflection',
            bn: 'ডায়নামিক এক্সেপশন রিফ্লেকশন'
          },
          {
            en: 'Virtual thread interception',
            bn: 'ভার্চুয়াল থ্রেড ইন্টারসেপশন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Precise rethrow analyzes the try block to deduce the narrowest possible exception types.',
          bn: 'প্রিসাইজ রিথ্রো try ব্লকের ভেতরের কাজ বিশ্লেষণ করে সুনির্দিষ্ট এক্সেপশন বের করে নেয়।'
        },
        explanation: {
          en: 'Java 7 precise rethrow inspects the try block: if only IOException is thrown inside, "catch (Exception e) { throw e; }" allows "throws IOException".',
          bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে বুঝতে পারে ঠিক কোন এক্সেপশনটি বাইরে যেতে পারে, ফলে সিগনেচারে সাধারণ Exception লেখার প্রয়োজন পড়ে না।'
        }
      },
      {
        id: 'quiz-custom-exception-serialversionuid',
        kind: 'mcq',
        topic: 'custom-exception-serializable-contract',
        question: {
          en: 'Why do custom exceptions in Java often declare a "private static final long serialVersionUID = 1L;" field?',
          bn: 'জাভাতে কাস্টম এক্সেপশন তৈরিতে প্রায়শই "private static final long serialVersionUID = 1L;" ফিল্ডটি কেন ঘোষণা করা হয়?'
        },
        options: [
          {
            en: 'Because Throwable implements java.io.Serializable, and declaring serialVersionUID ensures version compatibility during object serialization across network boundaries',
            bn: 'কারণ Throwable ক্লাসটি java.io.Serializable বাস্তবায়ন করে, এবং serialVersionUID নেটওয়ার্কের মাধ্যমে অবজেক্ট সিরিয়ালাইজেশনের সময় সংস্করণ সামঞ্জস্য নিশ্চিত করে'
          },
          {
            en: 'It increases the processing speed of the CPU by 50 percent',
            bn: 'এটি সিপিইউ-এর কাজের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'It allows the exception to be caught in Python applications',
            bn: 'এটি পাইথন অ্যাপ্লিকেশনে এররটি ধরার সুবিধা দেয়'
          },
          {
            en: 'serialVersionUID is required by the Windows operating system',
            bn: 'উইন্ডোজ অপারেটিং সিস্টেমে চালানোর জন্য এটি আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Exceptions are serializable so they can cross RPC and network boundaries.',
          bn: 'এক্সেপশন সিরিয়ালাইজেবল হওয়ায় দূরবর্তী সার্ভারে নেটওয়ার্কের মাধ্যমে পাঠানো যায়।'
        },
        explanation: {
          en: 'Since Throwable implements Serializable, declaring a serialVersionUID avoids default UID recalculation differences across compiler versions.',
          bn: 'সিরিয়ালাইজেশন সুরক্ষার জন্য serialVersionUID নিশ্চিত করে যে উভয় প্রান্তে অবজেক্টের সংস্করণ একই আছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'concurrency-and-the-virtual',
    title: {
      en: 'Concurrency, Virtual Threads & Memory Model',
      bn: 'কনকারেন্সি, ভার্চুয়াল থ্রেডস এবং মেমোরি মডেল'
    }
  }
};
