import type { Lesson } from '../../../lib/types';

export const ExceptionsAndTheCatchLesson: Lesson = {
  slug: 'exceptions-and-the-catch',
  tech: 'java',
  title: {
    en: 'Exception Architecture, AutoCloseable & Recovery',
    bn: 'এক্সেপশন আর্কিটেকচার, AutoCloseable এবং রিকভারি'
  },
  summary: {
    en: 'Master robust failure recovery in Java: navigate the Throwable class hierarchy, contrast compiler-enforced Checked Exceptions against Unchecked RuntimeExceptions, eliminate resource leaks with try-with-resources AutoCloseable statements, and handle multiple exceptions with multi-catch blocks.',
    bn: 'জাভাতে নির্ভরযোগ্য এরর রিকভারি আয়ত্ত করুন: Throwable ক্লাস হায়ারার্কি, চেকড বনাম আনচেকড এক্সেপশন, try-with-resources AutoCloseable দিয়ে নিশ্চিত রিসোর্স মুক্তি এবং মাল্টি-ক্যাচ ব্লকের সঠিক প্রয়োগ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'throwable-hierarchy-heading',
      text: {
        en: 'The Throwable Hierarchy: Checked versus Unchecked Runtime Exceptions',
        bn: 'Throwable হায়ারার্কি: চেকড বনাম আনচেকড রানটাইম এক্সেপশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Java structures all runtime anomalies under the java.lang.Throwable root class, which branches into 2 distinct categories: Errors and Exceptions. Errors (like OutOfMemoryError and StackOverflowError) represent fatal JVM (Java Virtual Machine) system failures from which an application cannot recover. Exceptional conditions, conversely, divide into two branches: Checked faults and Unchecked failures. Checked types (such as "IOException" or SQLException) must be caught via try-catch or declared via "throws". Unchecked conditions (inheriting from RuntimeException) represent programmatic logic flaws like NullPointerException.',
        bn: 'জাভাতে সমস্ত ত্রুটি java.lang.Throwable মূল ক্লাসের অধীনে সাজানো থাকে, যা প্রধানত ২ টি ভাগে বিভক্ত: Errors এবং Exceptions। এরর (যেমন OutOfMemoryError এবং StackOverflowError) মূলত JVM (Java Virtual Machine) এর মারাত্মক সিস্টেম ব্যর্থতা নির্দেশ করে যা থেকে কোনো অ্যাপ্লিকেশন স্বাভাবিকভাবে উদ্ধার পেতে পারে না। অপরপক্ষে সিস্টেমে ঘটা অন্যান্য ত্রুটিগুলো আবার দুই ভাগে বিভক্ত: চেকড এবং আনচেকড বিভাগ। চেকড টাইপ (যেমন "IOException" বা SQLException) কম্পাইলার কঠোরভাবে try-catch দিয়ে ধরা বা "throws" দিয়ে ঘোষণা করতে বাধ্য করে। আনচেকড ত্রুটিগুলো (RuntimeException) কোডের লজিক্যাল ভুল যেমন NullPointerException নির্দেশ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Complete class hierarchy of Java Throwable and the automatic AutoCloseable try-with-resources cleanup lifecycle.',
        bn: 'চিত্র ১: জাভা Throwable ক্লাস হায়ারার্কি এবং AutoCloseable try-with-resources এর স্বয়ংক্রিয় রিসোর্স মুক্তির কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA THROWABLE HIERARCHY &amp; TRY-WITH-RESOURCES LIFECYCLE</text>

  <!-- Step 1: Throwable Root -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Throwable Root</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">java.lang.Throwable</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Common Ancestor</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#f43f5e" font-size="9" font-family="monospace">Error (Fatal OOM)</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Root Diagnostic Tree</text>
  </g>

  <!-- Step 2: Exception Branches -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Two Branches</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Checked: Exception</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">IOException (Enforced)</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Unchecked: Runtime</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Enforced at Compile</text>
  </g>

  <!-- Step 3: Try-With-Resources -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Try-With-Resources</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">try (FileReader f = ...)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">implements AutoCloseable</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Guaranteed f.close()</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero Memory Leaks</text>
  </g>

  <!-- Step 4: Multi-Catch & Recovery -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Catch &amp; Suppress</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">catch (IO | SQL ex)</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Multi-catch block</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">getSuppressed() API</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Resilient System</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'try-with-resources-heading',
      text: {
        en: 'Try-With-Resources, The AutoCloseable Interface, and Multi-Catch',
        bn: 'Try-With-Resources, AutoCloseable ইন্টারফেস এবং মাল্টি-ক্যাচ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Prior to Java 7, releasing file handles, database connections, and sockets required complex nested finally blocks prone to masking original exceptions. Java 7 resolved this with "try-with-resources", which accepts any class implementing java.lang.AutoCloseable inside the try parentheses. When the block completes or raises an exception, the JVM automatically invokes close() on each declared resource in reverse order of creation. Any secondary exception thrown during close() is preserved via getSuppressed(), ensuring original primary exceptions remain visible for diagnosis.',
        bn: 'জাভা ৭ এর পূর্বে ফাইল বা ডেটাবেস সংযোগ বন্ধ করতে গিয়ে জটিল নেস্টেড finally ব্লক লিখতে হতো, যা অনেক সময় মূল এররকে ঢেকে ফেলতো। জাভা ৭ এ "try-with-resources" প্রবর্তিত হয়েছে, যা try এর ব্র্যাকেটের ভেতরে java.lang.AutoCloseable ইন্টারফেস বাস্তবায়নকারী যেকোনো অবজেক্টকে গ্রহণ করে। কোডের কাজ স্বাভাবিকভাবে শেষ হোক বা এরর ঘটুক, JVM স্বয়ংক্রিয়ভাবে বিপরীত ক্রমে প্রতিটি রিসোর্সের close() মেথড কল করে বন্ধ করে দেয়। ক্লোজ করার সময় কোনো সমস্যা হলে তা getSuppressed() মেথডে সংরক্ষিত থাকে, ফলে আসল মূল এররটি সর্বদা দৃষ্টিগোচর থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Java try-with-resources AutoCloseable resource closing and multi-catch error handling.',
        bn: 'জাভা try-with-resources এর স্বয়ংক্রিয় রিসোর্স মুক্তি এবং মাল্টি-ক্যাচ এরর হ্যান্ডলিংয়ের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Java AutoCloseable Try-With-Resources and Multi-Catch

export interface AutoCloseableResource {
  readData(): string;
  close(): void;
}

export class DatabaseConnectionSimulator implements AutoCloseableResource {
  public isClosed: boolean = false;

  public readData(): string {
    if (this.isClosed) throw new Error('SQLException: connection is closed');
    return 'user_records_payload';
  }

  public close(): void {
    this.isClosed = true;
    console.log('[AutoCloseable] Database connection closed deterministically.');
  }
}

// Simulating Java 7+: try (DatabaseConnectionSimulator db = new DatabaseConnectionSimulator()) { ... }
export function executeQuerySafely(): { success: boolean; data?: string; error?: string } {
  const db = new DatabaseConnectionSimulator();
  let primaryError: Error | null = null;

  try {
    const data = db.readData();
    return { success: true, data };
  } catch (err: any) {
    primaryError = err;
    return { success: false, error: err.message };
  } finally {
    // JVM guarantees close() execution for AutoCloseable
    db.close();
  }
}

// Executing demonstrations
const result = executeQuerySafely();
console.log('Query Executed Successfully:', result.success); // true
console.log('Query Returned Data:', result.data); // "user_records_payload"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Checked Exception',
          def: {
            en: 'Exception subclassing java.lang.Exception whose handling is strictly verified by the compiler via try-catch or throws.',
            bn: 'এক্সেপশন যা কম্পাইলার কঠোরভাবে পরীক্ষা করে এবং কোডে try-catch অথবা throws দিয়ে হ্যান্ডেল করা আবশ্যক।'
          }
        },
        {
          term: 'Unchecked Exception',
          def: {
            en: 'Exception inheriting from RuntimeException representing preventable programming logic flaws (like NullPointer).',
            bn: 'এক্সেপশন যা সাধারণত কোডের লজিক্যাল ভুলের কারণে ঘটে এবং কম্পাইলার দ্বারা পরিচালনা বাধ্যতামূলক নয়।'
          }
        },
        {
          term: 'try-with-resources',
          def: {
            en: 'Java 7 statement syntax automatically closing AutoCloseable resources at block completion to prevent resource leaks.',
            bn: 'জাভা ৭ এর সিনট্যাক্স যা কাজ শেষে স্বয়ংক্রিয়ভাবে AutoCloseable রিসোর্স বন্ধ করে মেমোরি লিক রোধ করে।'
          }
        },
        {
          term: 'Suppressed Exceptions',
          def: {
            en: 'Secondary exceptions raised while closing resources in try-with-resources, attached to the primary exception via addSuppressed.',
            bn: 'রিসোর্স বন্ধ করার সময় ঘটা অতিরিক্ত এরর যা মূল এররের সাথে সংযুক্ত হয়ে getSuppressed() এ সংরক্ষিত থাকে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'checked-exception-compiler-enforcement-ex1',
      kind: 'mcq',
      topic: 'checked-exception-compiler-rule',
      question: {
        en: 'What does the Java compiler enforce when a method invokes code that declares "throws IOException"?',
        bn: 'কোনো মেথড "throws IOException" ঘোষণা করা কোড কল করলে জাভা কম্পাইলার কী বাধ্যতামূলক করে?'
      },
      options: [
        {
          en: 'The caller must either handle the exception inside a try-catch block or declare "throws IOException" in its own method signature',
          bn: 'কলকারী মেথডটিকে অবশ্যই try-catch ব্লক দিয়ে এররটি হ্যান্ডেল করতে হবে অথবা নিজস্ব মেথড সিগনেচারে "throws IOException" ঘোষণা করতে হবে'
        },
        {
          en: 'The compiler converts the error to an integer',
          bn: 'কম্পাইলার এররটিকে পূর্ণসংখ্যায় বদলে ফেলে'
        },
        {
          en: 'IOException is ignored unless running on a server',
          bn: 'সার্ভার ছাড়া অন্য কোথাও IOException উপেক্ষা করা হয়'
        },
        {
          en: 'The compiler deletes the source file',
          bn: 'কম্পাইলার সোর্স ফাইলটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Checked exceptions enforce the "catch or declare" rule at compile time.',
        bn: 'চেকড এক্সেপশন কম্পাইল করার সময়ই হয় হ্যান্ডেল করা অথবা ঘোষণা করা বাধ্যতামূলক করে।'
      },
      explanation: {
        en: 'Checked exceptions require explicit handling or propagation, preventing unhandled runtime crashes.',
        bn: 'চেকড এক্সেপশন ডেভেলপারকে সচেতন করে আগাম এরর হ্যান্ডলিং কোড লিখতে বাধ্য করে।'
      }
    },
    {
      id: 'autocloseable-interface-method-ex2',
      kind: 'mcq',
      topic: 'autocloseable-interface-contract',
      question: {
        en: 'Which method must a custom resource class implement to be managed inside a try-with-resources statement in Java?',
        bn: 'জাভাতে try-with-resources স্টেটমেন্টের ভেতর কাজ করতে কোনো কাস্টম ক্লাসে কোন মেথডটি থাকতে হয়?'
      },
      options: [
        { en: 'public void close() throws Exception', bn: 'public void close() throws Exception' },
        { en: 'public void destroy()', bn: 'public void destroy()' },
        { en: 'public void finalizeResource()', bn: 'public void finalizeResource()' },
        { en: 'public boolean isOpen()', bn: 'public boolean isOpen()' }
      ],
      answer: 0,
      hint: {
        en: 'The java.lang.AutoCloseable interface declares a single close() method.',
        bn: 'java.lang.AutoCloseable ইন্টারফেসে কেবলমাত্র একটি close() মেথড সংজ্ঞায়িত থাকে।'
      },
      explanation: {
        en: 'AutoCloseable defines void close(), which the JVM executes automatically at the conclusion of try-with-resources blocks.',
        bn: 'AutoCloseable এর close() মেথডটি ব্লক শেষ হওয়ার সাথে সাথেই JVM নিজে থেকে ডেকে রিসোর্স মুক্ত করে।'
      }
    },
    {
      id: 'multi-catch-syntax-pipe-ex3',
      kind: 'mcq',
      topic: 'multi-catch-syntax-pipe',
      question: {
        en: 'How can a single catch block handle both IOException and SQLException using Java 7+ multi-catch syntax?',
        bn: 'জাভা ৭+ এর মাল্টি-ক্যাচ সিনট্যাক্স ব্যবহার করে একটি একক catch ব্লকে IOException এবং SQLException কীভাবে হ্যান্ডেল করবেন?'
      },
      options: [
        { en: 'catch (IOException | SQLException ex)', bn: 'catch (IOException | SQLException ex)' },
        { en: 'catch (IOException || SQLException ex)', bn: 'catch (IOException || SQLException ex)' },
        { en: 'catch (IOException, SQLException ex)', bn: 'catch (IOException, SQLException ex)' },
        { en: 'catch (IOException & SQLException ex)', bn: 'catch (IOException & SQLException ex)' }
      ],
      answer: 0,
      hint: {
        en: 'The single vertical pipe character (|) combines exception types in multi-catch blocks.',
        bn: 'মাল্টি-ক্যাচ ব্লকে একাধিক এক্সেপশন টাইপ যুক্ত করতে একক পাইপ (|) চিহ্ন ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'The pipe (|) operator allows a single catch block to handle multiple unrelated exception types cleanly.',
        bn: 'পাইপ (|) চিহ্ন কোডের পুনরাবৃত্তি না ঘটিয়ে একাধিক ভিন্ন এক্সেপশন একই ব্লকে হ্যান্ডেল করার সুযোগ দেয়।'
      }
    },
    {
      id: 'finally-block-execution-guarantee-ex4',
      kind: 'mcq',
      topic: 'finally-block-execution-rules',
      question: {
        en: 'Under what specific condition will a "finally" block in Java NOT execute after a try block completes?',
        bn: 'কোন সুনির্দিষ্ট পরিস্থিতিতে জাভাতে try ব্লকের পর "finally" ব্লক কার্যকর হয় না?'
      },
      options: [
        {
          en: 'If System.exit(0) is explicitly invoked, or the underlying JVM process crashes abruptly (e.g. fatal kernel kill)',
          bn: 'যদি স্পষ্টভাবে System.exit(0) কল করা হয়, অথবা JVM প্রসেসটি কোনো কারণে সরাসরি ক্র্যাশ করে বন্ধ হয়ে যায়'
        },
        {
          en: 'If an unhandled NullPointerException is raised in the try block',
          bn: 'try ব্লকে অপ্রত্যাশিত NullPointerException ঘটলে'
        },
        {
          en: 'If the try block executes a return statement',
          bn: 'try ব্লকে return স্টেটমেন্ট থাকলে'
        },
        {
          en: 'Finally blocks only run if no errors occur',
          bn: 'কোনো এরর না হলেই কেবল finally ব্লক রান করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Finally always executes unless the JVM itself is abruptly halted via System.exit().',
        bn: 'System.exit() বা সিস্টেম বন্ধ না হলে finally ব্লক যেকোনো পরিস্থিতিতেই নিশ্চিতভাবে কার্যকর হয়।'
      },
      explanation: {
        en: 'Even when return statements execute, finally runs; only JVM termination via System.exit() bypasses finally.',
        bn: 'কোডে return থাকলেও finally মেথড চলে; শুধুমাত্র System.exit() দিয়ে JVM বন্ধ করলে finally কাজ করে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-exceptions-and-the-catch',
    title: {
      en: 'Java Exception Architecture and AutoCloseable Quiz',
      bn: 'জাভা এক্সেপশন আর্কিটেকচার এবং AutoCloseable কুইজ'
    },
    questions: [
      {
        id: 'quiz-swallowing-exceptions-anti-pattern',
        kind: 'mcq',
        topic: 'empty-catch-block-anti-pattern',
        question: {
          en: 'Why is catching an exception with an empty block (e.g. "catch (Exception e) {}") considered a critical software defect?',
          bn: 'খালি catch ব্লক দিয়ে এক্সেপশন ধরা (যেমন "catch (Exception e) {}") একটি মারাত্মক সফটওয়্যার ত্রুটি কেন?'
        },
        options: [
          {
            en: 'It swallows the failure silently without logging or alerting, hiding system degradation and leaving the application in an unpredictable corrupt state',
            bn: 'এটি কোনো লগ বা সতর্কতা না দিয়ে ত্রুটিটিকে নীরবে চেপে যায়, ফলে সিস্টেমের মারাত্মক অবনতি আড়ালে থাকে এবং ডেটা নষ্টের ঝুঁকি তৈরি হয়'
          },
          {
            en: 'It deletes all user passwords from the database',
            bn: 'এটি ডেটাবেস থেকে সব ব্যবহারকারীর পাসওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'It increases JVM heap consumption by 90 percent',
            bn: 'এটি JVM হিপ মেমোরি খরচ ৯০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'Empty catch blocks are impossible to write in Java',
            bn: 'জাভাতে খালি catch ব্লক লেখা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Silent exception swallowing blinds monitoring tools and obscures root cause analysis.',
          bn: 'ত্রুটি চেপে রাখলে সমস্যা শনাক্ত করা অসম্ভব হয়ে পড়ে এবং সিস্টেমের অখণ্ডতা বিনষ্ট হয়।'
        },
        explanation: {
          en: 'Always log exceptions or re-throw domain-specific exceptions; never leave catch blocks empty.',
          bn: 'সর্বদা এরর লগ করুন বা পুনরায় এক্সেপশন ছুড়ুন; কখনোই খালি catch ব্লক রেখে সমস্যা লুকিয়ে রাখবেন না।'
        }
      },
      {
        id: 'quiz-suppressed-exceptions-inspection',
        kind: 'mcq',
        topic: 'get-suppressed-exceptions-array',
        question: {
          en: 'How can an application inspect secondary exceptions suppressed during the closing of resources in a try-with-resources statement?',
          bn: 'try-with-resources এ রিসোর্স বন্ধের সময় চাপা পড়া অতিরিক্ত এররগুলো পরীক্ষা করার জন্য কোন মেথডটি ব্যবহার করা হয়?'
        },
        options: [
          { en: 'primaryException.getSuppressed()', bn: 'primaryException.getSuppressed()' },
          { en: 'Throwable.listErrors()', bn: 'Throwable.listErrors()' },
          { en: 'System.getHiddenErrors()', bn: 'System.getHiddenErrors()' },
          { en: 'Exception.secondaryExceptions()', bn: 'Exception.secondaryExceptions()' }
        ],
        answer: 0,
        hint: {
          en: 'Java 7 added getSuppressed() to Throwable to expose suppressed secondary exceptions.',
          bn: 'জাভা ৭ এ চাপা পড়া এররগুলোর তালিকা পেতে Throwable ক্লাসে getSuppressed() মেথড যুক্ত করা হয়।'
        },
        explanation: {
          en: 'primaryException.getSuppressed() returns an array of Throwables suppressed during resource teardown.',
          bn: 'getSuppressed() মেথড রিসোর্স বন্ধের সময় ঘটা অতিরিক্ত এররগুলোর একটি তালিকা প্রদান করে।'
        }
      },
      {
        id: 'quiz-catch-block-order-subclass-first',
        kind: 'mcq',
        topic: 'catch-block-inheritance-order-rules',
        question: {
          en: 'What occurs if a catch block for Exception is placed above a catch block for FileNotFoundException?',
          bn: 'FileNotFoundException এর ক্যাচ ব্লকের পূর্বে সাধারণ Exception এর ক্যাচ ব্লক রাখলে কী ঘটে?'
        },
        options: [
          {
            en: 'A compilation error occurs ("unreachable catch block") because Exception is the parent class and catches all subtypes first',
            bn: 'কম্পাইলেশন এরর তৈরি হয় ("unreachable catch block") কারণ Exception অভিভাবক ক্লাস হওয়ায় সে নিজেই সব সাব-টাইপ আগে ধরে ফেলে'
          },
          {
            en: 'The code compiles and runs with zero issues',
            bn: 'কোড কোনো সমস্যা ছাড়াই কম্পাইল এবং রান করে'
          },
          {
            en: 'FileNotFoundException executes first regardless of order',
            bn: 'ক্রম যাই হোক FileNotFoundException আগে চলে'
          },
          {
            en: 'It triggers a StackOverflowError at runtime',
            bn: 'এটি রানটাইমে StackOverflowError ঘটায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Specific subclass exceptions must always be caught before broader parent exceptions.',
          bn: 'নির্দিষ্ট সাবক্লাস এক্সেপশনগুলোকে সর্বদা সাধারণ অভিভাবক এক্সেপশনের পূর্বে ধরতে হয়।'
        },
        explanation: {
          en: 'Catch blocks must be arranged from most specific subclass to most generic superclass to prevent unreachable code errors.',
          bn: 'সবচেয়ে সুনির্দিষ্ট এরর থেকে শুরু করে ক্রমান্বয়ে সাধারণ এররের ক্যাচ ব্লক সাজাতে হয়।'
        }
      },
      {
        id: 'quiz-custom-business-exception-inheritance',
        kind: 'mcq',
        topic: 'custom-exception-best-practices',
        question: {
          en: 'When creating a custom domain exception like InsufficientFundsException in modern enterprise architecture, what should it extend?',
          bn: 'আধুনিক এন্টারপ্রাইজ সিস্টেমে InsufficientFundsException এর মতো কাস্টম এক্সেপশন তৈরির সময় কোন ক্লাসটি extend করা উচিত?'
        },
        options: [
          {
            en: 'RuntimeException (for unchecked business failure) or Exception (for explicit compiler-enforced recovery workflows)',
            bn: 'RuntimeException (আনচেকড ব্যবসায়িক লজিকের জন্য) অথবা Exception (কম্পাইলার দ্বারা বাধ্যতামূলক হ্যান্ডলিংয়ের জন্য)'
          },
          {
            en: 'java.lang.Error class',
            bn: 'java.lang.Error ক্লাস'
          },
          {
            en: 'java.lang.Object directly',
            bn: 'সরাসরি java.lang.Object'
          },
          {
            en: 'Thread class',
            bn: 'Thread ক্লাস'
          }
        ],
        answer: 0,
        hint: {
          en: 'Custom exceptions should extend RuntimeException (modern practice) or Exception, never Error.',
          bn: 'কাস্টম এক্সেপশন সর্বদা RuntimeException বা Exception থেকে ইনহেরিট করা উচিত, Error থেকে কখনো নয়।'
        },
        explanation: {
          en: 'Subclassing RuntimeException allows clean transactional rollbacks in frameworks like Spring without forcing checked boilerplate.',
          bn: 'RuntimeException ব্যবহার করলে স্প্রিংয়ের মতো ফ্রেমওয়ার্কে সহজেই লেনদেন রোলব্যাক করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'streams-and-the-lambda',
    title: {
      en: 'Functional Streams, Lambdas & Optional Pipelines',
      bn: 'ফাংশনাল স্ট্রিমস, ল্যাম্বডা এবং Optional পাইপলাইন'
    }
  }
};
