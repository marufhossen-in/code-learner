import type { Lesson } from '../../../lib/types';

export const ContextAndTheWithLesson: Lesson = {
  slug: 'context-and-the-with',
  tech: 'lang-python',
  title: {
    en: 'Context Managers, Resource Safety & The With Block',
    bn: 'কনটেক্সট ম্যানেজার, রিসোর্স নিরাপত্তা এবং With ব্লক'
  },
  summary: {
    en: 'Master deterministic resource management in Python: understand the context manager protocol via __enter__ and __exit__ dunder methods, prevent file descriptor and network socket leaks with the with statement, handle exception suppression, and craft lightweight context managers using @contextlib.contextmanager.',
    bn: 'পাইথনে রিসোর্স ব্যবস্থাপনা আয়ত্ত করুন: __enter__ এবং __exit__ ডান্ডার মেথড সম্বলিত কনটেক্সট ম্যানেজার প্রোটোকল, with স্টেটমেন্ট দিয়ে ফাইল ও নেটওয়ার্ক সকেটের মেমোরি লিক রোধ, এক্সেপশন দমন এবং @contextlib.contextmanager দিয়ে হালকা কনটেক্সট ম্যানেজার তৈরি।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'context-manager-protocol-heading',
      text: {
        en: 'The Context Manager Protocol: __enter__, __exit__, and Resource Safety',
        bn: 'কনটেক্সট ম্যানেজার প্রোটোকল: __enter__, __exit__ এবং রিসোর্স নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Operating system resources such as file descriptors, database connections, and concurrency locks must be deterministically released to prevent resource exhaustion bugs. In Python (the object-oriented programming language), the with statement implements the context manager protocol to guarantee resource cleanup. When entering a with block, Python invokes the __enter__() method on the target object and binds its return value to the optional "as" variable. Upon exiting the block—whether through normal completion, return, or an unhandled exception—Python guarantees that __exit__() executes, receiving 3 exception arguments: type, value, and traceback.',
        bn: 'ফাইল হ্যান্ডেল, ডেটাবেস সংযোগ এবং কনকারেন্সি লকের মতো অপারেটিং সিস্টেমের গুরুত্বপূর্ণ রিসোর্সগুলো ব্যবহার শেষে মুক্ত না করলে মেমোরি লিক ঘটে। পাইথন (অবজেক্ট-ওরিয়েন্টেড প্রোগ্রামিং ভাষা) এ with স্টেটমেন্টের মাধ্যমে কনটেক্সট ম্যানেজার প্রোটোকল ব্যবহার করে নিশ্চিত রিসোর্স মুক্তি নিশ্চিত করা হয়। with ব্লকে প্রবেশের সময় পাইথন অবজেক্টের __enter__() মেথড কল করে এবং প্রাপ্ত মানটি "as" ভেরিয়েবলে বসায়। কোড স্বাভাবিকভাবে শেষ হোক বা কোনো ত্রুটি ঘটুক, পাইথন নিশ্চিতভাবে __exit__() মেথডটি কার্যকর করে, যাতে এক্সেপশনের ৩ টি প্যারামিটার (টাইপ, মান ও ট্রেসব্যাক) পাঠানো হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-step execution lifecycle of Python with blocks guaranteeing deterministic __exit__ cleanups.',
        bn: 'চিত্র ১: নিশ্চিত __exit__ ক্লিনআপ সহ পাইথন with ব্লকের ৪ টি ধাপের এক্সিকিউশন লাইফসাইকেল চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PYTHON CONTEXT MANAGER PROTOCOL LIFECYCLE</text>

  <!-- Step 1: Entry -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. with Enter</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="10" font-family="monospace">with open(...) as f:</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Instantiates manager</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#34d399" font-size="10" font-family="monospace">Calls __enter__()</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Acquires Resource</text>
  </g>

  <!-- Step 2: In-Flight Suite -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Suite Execution</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">data = f.read()</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">Process payload</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Normal or Exception</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Guarded Context</text>
  </g>

  <!-- Step 3: Exit Dispatch -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. __exit__() Hook</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="8" font-family="monospace">__exit__(type, val, tb)</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">3 exception arguments</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">f.close() called</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Guaranteed Cleanup</text>
  </g>

  <!-- Step 4: Outcome -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Final State</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Return True?</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Swallows error</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">Return False: raises</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero Leaked Sockets</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'contextlib-generator-and-suppression-heading',
      text: {
        en: 'The @contextlib.contextmanager Generator and Exception Handling',
        bn: '@contextlib.contextmanager জেনারেটর এবং এক্সেপশন ব্যবস্থাপনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing custom classes with __enter__ and __exit__ methods can introduce unnecessary boilerplate for lightweight resources. The standard library provides the @contextlib.contextmanager decorator, allowing developers to convert a simple generator function into a context manager. Code prior to the yield statement acts as __enter__(), the yielded value is bound to the caller "as" variable, and a surrounding finally block executes the __exit__() cleanup logic. If __exit__ returns True, Python suppresses the exception; returning False allows it to propagate.',
        bn: 'সহজ রিসোর্সের জন্য বারবার __enter__ ও __exit__ মেথড সহ নতুন ক্লাস লেখা অনেক সময় কোডকে দীর্ঘ করে ফেলে। পাইথনের স্ট্যান্ডার্ড লাইব্রেরিতে থাকা @contextlib.contextmanager ডেকোরেটর একটি সাধারণ জেনারেটর ফাংশনকেই সরাসরি কনটেক্সট ম্যানেজারে রূপান্তর করে। yield স্টেটমেন্টের আগের কোড __enter__() হিসেবে চলে, yield করা মানটি কলার ভেরিয়েবলে যায় এবং finally ব্লকের কোডটি নিশ্চিতভাবে __exit__() হিসেবে কার্যকর হয়। __exit__ মেথডটি True রিটার্ন করলে এরর দমন হয়, আর False দিলে এক্সেপশনটি বাইরে ছড়িয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Python context manager protocol (__enter__, __exit__) and resource isolation.',
        bn: 'পাইথন কনটেক্সট ম্যানেজার প্রোটোকল (__enter__, __exit__) এবং রিসোর্স ব্যবস্থাপনার সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of Python Context Manager Protocol in TypeScript

export interface ContextManager<T> {
  enter(): T;
  exit(error: Error | null): boolean; // Return true to suppress error
}

export class FileDescriptorSimulator implements ContextManager<{ path: string; write: (text: string) => void }> {
  public isOpen: boolean = false;

  constructor(public path: string) {}

  public enter() {
    this.isOpen = true;
    console.log('[__enter__] File ' + this.path + ' opened safely.');
    return {
      path: this.path,
      write: (text: string) => {
        if (!this.isOpen) throw new Error('Cannot write to closed file');
        console.log('Writing to ' + this.path + ': ' + text);
      }
    };
  }

  public exit(error: Error | null): boolean {
    this.isOpen = false;
    console.log('[__exit__] File ' + this.path + ' closed deterministically.');
    if (error) {
      console.log('Handling error in __exit__: ' + error.message);
      return false; // Re-raise error
    }
    return true;
  }
}

// Simulating Python: with FileDescriptorSimulator("audit.log") as f:
function runWithBlock<T>(manager: ContextManager<T>, action: (resource: T) => void) {
  const resource = manager.enter();
  let caughtError: Error | null = null;
  try {
    action(resource);
  } catch (err: any) {
    caughtError = err;
  } finally {
    const suppressed = manager.exit(caughtError);
    if (caughtError && !suppressed) {
      throw caughtError;
    }
  }
}

// Executing demonstration
const fileManager = new FileDescriptorSimulator('orders.csv');
runWithBlock(fileManager, (f) => {
  f.write('order_id,amount\\n101,250');
});
console.log('Bytes Written:', 101); // -> 101
console.log('Is File Still Open:', fileManager.isOpen); // -> false`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Context Manager',
          def: {
            en: 'Python object defining runtime context via __enter__() and __exit__() dunder methods for deterministic cleanup.',
            bn: 'পাইথনের বিশেষ অবজেক্ট যা __enter__() ও __exit__() ডান্ডার মেথডের মাধ্যমে নিশ্চিত রিসোর্স ব্যবস্থাপনা সম্পন্ন করে।'
          }
        },
        {
          term: '__enter__ Method',
          def: {
            en: 'Dunder method invoked when entering a with block, setting up the runtime state and returning target resource.',
            bn: 'with ব্লকে প্রবেশের সময় কল হওয়া মেথড যা কাজের পরিবেশ প্রস্তুত করে রিসোর্সটি প্রদান করে।'
          }
        },
        {
          term: '__exit__ Method',
          def: {
            en: 'Dunder method receiving 3 exception arguments, guaranteed to execute upon leaving with blocks to free resources.',
            bn: 'with ব্লক সমাপ্তির সময় কল হওয়া মেথড যা ৩ টি এক্সেপশন প্যারামিটার গ্রহণ করে নিশ্চিতভাবে রিসোর্স খালি করে।'
          }
        },
        {
          term: 'contextlib.contextmanager',
          def: {
            en: 'Standard library decorator transforming generator functions containing a single yield into complete context managers.',
            bn: 'স্ট্যান্ডার্ড লাইব্রেরির ডেকোরেটর যা yield যুক্ত সাধারণ জেনারেটরকে একটি পূর্ণাঙ্গ কনটেক্সট ম্যানেজারে বদলে দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'with-exit-guaranteed-execution-ex1',
      kind: 'mcq',
      topic: 'with-exit-guaranteed-execution',
      question: {
        en: 'What occurs to a file opened with "with open(\'data.txt\') as f:" if an unhandled ValueError is raised inside the block?',
        bn: '"with open(\'data.txt\') as f:" দিয়ে ফাইল খোলার পর ব্লকের ভেতরে অপ্রত্যাশিত ValueError ঘটলে ফাইলের কী হয়?'
      },
      options: [
        {
          en: 'Python guarantees that f.__exit__() is called, closing the file descriptor immediately before the exception propagates',
          bn: 'পাইথন নিশ্চিত করে যে f.__exit__() কল হবে, ফলে এক্সেপশন বাইরে যাওয়ার পূর্বেই ফাইল হ্যান্ডেলটি সাথে সাথে বন্ধ হয়'
        },
        {
          en: 'The file descriptor remains open forever, leaking operating system resources',
          bn: 'ফাইল হ্যান্ডেলটি আজীবন খোলা থাকে এবং মেমোরি লিক ঘটায়'
        },
        {
          en: 'The operating system deletes the file from disk',
          bn: 'অপারেটিং সিস্টেম ডিস্ক থেকে ফাইলটি মুছে ফেলে'
        },
        {
          en: 'The computer reboots immediately',
          bn: 'কম্পিউটার সাথে সাথে রিবুট হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The context manager protocol ensures __exit__ executes under all termination conditions.',
        bn: 'কনটেক্সট ম্যানেজার প্রোটোকল যেকোনো পরিস্থিতিতে __exit__ কার্যকর করার নিশ্চয়তা দেয়।'
      },
      explanation: {
        en: 'The with statement wraps execution in an internal try-finally block, ensuring __exit__() closes resources during exceptions.',
        bn: 'with স্টেটমেন্ট অভ্যন্তরীণভাবে try-finally ব্লক ব্যবহার করে, ফলে কোনো এরর হলেও __exit__() ফাইল বন্ধ করে দেয়।'
      }
    },
    {
      id: 'exit-method-arguments-ex2',
      kind: 'mcq',
      topic: 'context-manager-exit-three-arguments',
      question: {
        en: 'How many arguments does the __exit__ method accept when an unhandled exception occurs inside a with block?',
        bn: 'with ব্লকের ভেতরে অপ্রত্যাশিত এক্সেপশন ঘটলে __exit__ মেথডটি আর্গুমেন্ট হিসেবে ঠিক কতটি প্যারামিটার গ্রহণ করে?'
      },
      options: [
        { en: '3 arguments: exc_type, exc_value, and traceback', bn: '৩ টি আর্গুমেন্ট: exc_type, exc_value এবং traceback' },
        { en: '1 argument: error_code', bn: '১ টি আর্গুমেন্ট: error_code' },
        { en: '0 arguments', bn: '০ টি আর্গুমেন্ট' },
        { en: '5 arguments', bn: '৫ টি আর্গুমেন্ট' }
      ],
      answer: 0,
      hint: {
        en: 'The 3 arguments describe the exception type, instance value, and call stack traceback.',
        bn: 'এই ৩ টি প্যারামিটার এররের ধরন, মান এবং ট্রেসব্যাকের বিশদ তথ্য বহন করে।'
      },
      explanation: {
        en: '__exit__(exc_type, exc_value, traceback) receives the complete exception triage trio for inspection or suppression.',
        bn: '__exit__ মেথড এক্সেপশন সম্পর্কিত ৩ টি মৌলিক তথ্য গ্রহণ করে সিদ্ধান্ত নেয় এররটি দমন করা হবে নাকি বাইরে ছড়ানো হবে।'
      }
    },
    {
      id: 'suppressing-exceptions-in-exit-ex3',
      kind: 'mcq',
      topic: 'exit-return-true-suppression',
      question: {
        en: 'How can a custom context manager\'s __exit__ method instruct Python to suppress an exception raised inside the with suite?',
        bn: 'with ব্লকের ভেতরের এক্সেপশনকে বাইরে যেতে না দিয়ে দমন করতে কাস্টম কনটেক্সট ম্যানেজারের __exit__ মেথড থেকে কী রিটার্ন করতে হয়?'
      },
      options: [
        {
          en: 'Return True from the __exit__ method',
          bn: '__exit__ মেথড থেকে সরাসরি True রিটার্ন করতে হয়'
        },
        {
          en: 'Return False from the __exit__ method',
          bn: '__exit__ মেথড থেকে False রিটার্ন করতে হয়'
        },
        {
          en: 'Call sys.exit(0)',
          bn: 'sys.exit(0) কল করতে হয়'
        },
        {
          en: 'Exceptions cannot be suppressed by context managers',
          bn: 'কনটেক্সট ম্যানেজার দিয়ে এক্সেপশন দমন করা সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Returning a truthy value like True tells Python that the exception was safely handled.',
        bn: 'True রিটার্ন করলে পাইথন ধরে নেয় যে ত্রুটিটি নিরাপদে সমাধান করা হয়েছে।'
      },
      explanation: {
        en: 'If __exit__ returns True, Python silences the active exception; returning False or None lets the exception propagate.',
        bn: '__exit__ থেকে True ফেরত দিলে পাইথন এররটি থামিয়ে দেয়, অন্যথায় এক্সেপশনটি উপরের লেভেলে উঠে যায়।'
      }
    },
    {
      id: 'contextlib-suppress-utility-ex4',
      kind: 'mcq',
      topic: 'contextlib-suppress-exception',
      question: {
        en: 'What does "with contextlib.suppress(FileNotFoundError): os.remove(\'temp.txt\')" accomplish in Python?',
        bn: 'পাইথনে "with contextlib.suppress(FileNotFoundError): os.remove(\'temp.txt\')" কোডটি কী কাজ সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It safely attempts to delete the file, silently ignoring FileNotFoundError if the file does not exist without requiring try-except blocks',
          bn: 'এটি নিরাপদে ফাইলটি মোছার চেষ্টা করে, আর ফাইল না থাকলে কোনো try-except ছাড়াই নীরবে FileNotFoundError উপেক্ষা করে'
        },
        {
          en: 'It permanently corrupts the operating system directory',
          bn: 'এটি অপারেটিং সিস্টেম ডিরেক্টরি স্থায়ীভাবে ক্ষতিগ্রস্ত করে'
        },
        {
          en: 'It forces the file to become read-only',
          bn: 'এটি ফাইলটিকে রিড-অনলি ফাইলে পরিণত করে'
        },
        {
          en: 'It downloads the missing file from the internet',
          bn: 'এটি ইন্টারনেট থেকে অনুপস্থিত ফাইলটি ডাউনলোড করে আনে'
        }
      ],
      answer: 0,
      hint: {
        en: 'contextlib.suppress is syntactic sugar replacing pass-filled try-except blocks.',
        bn: 'contextlib.suppress মূলত pass লেখা try-except ব্লকের একটি চমৎকার পরিচ্ছন্ন রূপ।'
      },
      explanation: {
        en: 'contextlib.suppress swallows specified exception types cleanly, keeping code declarative and readable.',
        bn: 'contextlib.suppress নির্দিষ্ট এররগুলোকে কোনো ঝামেলা ছাড়াই সুন্দরভাবে উপেক্ষা করে কোড পরিচ্ছন্ন রাখে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-context-and-the-with',
    title: {
      en: 'Python Context Managers and With Statements Quiz',
      bn: 'পাইথন কনটেক্সট ম্যানেজার এবং With স্টেটমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-multiple-context-managers-single-with',
        kind: 'mcq',
        topic: 'multiple-context-managers-single-line',
        question: {
          en: 'How can multiple context managers be combined cleanly inside a single with statement in modern Python?',
          bn: 'আধুনিক পাইথনে একটি একক with স্টেটমেন্টের ভেতর একাধিক কনটেক্সট ম্যানেজারকে কীভাবে পরিচ্ছন্নভাবে যুক্ত করা যায়?'
        },
        options: [
          {
            en: 'Separating them with commas: with open("src.txt") as src, open("dst.txt", "w") as dst:',
            bn: 'কমা দিয়ে আলাদা করে: with open("src.txt") as src, open("dst.txt", "w") as dst:'
          },
          {
            en: 'By chaining them with the + operator',
            bn: '+ অপারেটর দিয়ে তাদের যুক্ত করে'
          },
          {
            en: 'Python strictly forbids using more than 1 context manager at a time',
            bn: 'পাইথনে একসাথে ১ টির বেশি কনটেক্সট ম্যানেজার ব্যবহার করা পুরোপুরি নিষিদ্ধ'
          },
          {
            en: 'Using the AND keyword in uppercase',
            bn: 'বড় হাতের অক্ষরে AND কিওয়ার্ড ব্যবহার করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Commas separate multiple context expressions within a single with statement.',
          bn: 'একই with স্টেটমেন্টে কমা ব্যবহারের মাধ্যমে একাধিক রিসোর্স একসাথে নেওয়া যায়।'
        },
        explanation: {
          en: 'Modern Python allows comma-separated context managers in a single with block, entering and exiting each in nested sequence.',
          bn: 'কমাযুক্ত সিনট্যাক্স প্রতিটি রিসোর্সকে ধারাবাহিকভাবে ওপেন এবং কাজ শেষে বিপরীত ক্রমে ক্লোজ করে।'
        }
      },
      {
        id: 'quiz-contextlib-contextmanager-generator-rule',
        kind: 'mcq',
        topic: 'contextlib-contextmanager-yield-count',
        question: {
          en: 'How many times must a generator decorated with @contextlib.contextmanager yield during its execution?',
          bn: '@contextlib.contextmanager দ্বারা ডেকোরেট করা জেনারেটরে কাজ চলাকালীন ঠিক কতবার yield স্টেটমেন্ট থাকা আবশ্যক?'
        },
        options: [
          {
            en: 'Exactly 1 time; yielding zero or more than 1 time raises a RuntimeError',
            bn: 'ঠিক ১ বার; ১ বারের কম বা বেশি yield করলে RuntimeError তৈরি হয়'
          },
          {
            en: 'As many times as desired, up to 100',
            bn: 'যতবার খুশি, ১০০ বার পর্যন্ত'
          },
          {
            en: 'Zero times',
            bn: '০ বার'
          },
          {
            en: 'Generators cannot be decorated with contextmanager',
            bn: 'জেনারেটরে contextmanager ডেকোরেটর ব্যবহার করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'The single yield divides setup (__enter__) from teardown (__exit__).',
          bn: 'একটি মাত্র yield মেথড শুরুর কাজ (__enter__) এবং শেষের কাজের (__exit__) সীমানা নির্ধারণ করে।'
        },
        explanation: {
          en: '@contextlib.contextmanager requires exactly 1 yield: before yield is __enter__, after yield is __exit__.',
          bn: 'এই ডেকোরেটরে ঠিক ১ বার yield থাকতে হয়: আগের অংশ __enter__ এবং পরের অংশ __exit__ হিসেবে কাজ করে।'
        }
      },
      {
        id: 'quiz-async-context-manager-dunders',
        kind: 'mcq',
        topic: 'async-context-manager-aenter-aexit',
        question: {
          en: 'Which dunder methods must an asynchronous context manager implement for use with "async with" in asyncio?',
          bn: 'asyncio তে "async with" এর সাথে কাজ করার জন্য একটি অ্যাসিনক্রোনাস কনটেক্সট ম্যানেজারে কোন ডান্ডার মেথডগুলো থাকতে হয়?'
        },
        options: [
          { en: '__aenter__() and __aexit__()', bn: '__aenter__() এবং __aexit__()' },
          { en: '__async_open__() and __async_close__()', bn: '__async_open__() এবং __async_close__()' },
          { en: '__enter_async__() only', bn: '__enter_async__() কেবল' },
          { en: '__start__() and __finish__()', bn: '__start__() এবং __finish__()' }
        ],
        answer: 0,
        hint: {
          en: 'Async dunder methods in Python are prefixed with an "a" (e.g. __aenter__).',
          bn: 'পাইথনে অ্যাসিনক্রোনাস ডান্ডার মেথডগুলোর শুরুতে একটি "a" থাকে (যেমন __aenter)।'
        },
        explanation: {
          en: '__aenter__ and __aexit__ return awaitables, allowing non-blocking resource acquisition and release.',
          bn: '__aenter__ এবং __aexit__ উভয়ই অ্যাওয়েটযোগ্য করুটিন রিটার্ন করে নন-ব্লকিং রিসোর্স ব্যবস্থাপনা নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-reentrant-context-manager-purpose',
        kind: 'mcq',
        topic: 'reentrant-context-managers',
        question: {
          en: 'What defines a "reentrant" context manager (such as threading.RLock) in Python?',
          bn: 'পাইথনে একটি "reentrant" কনটেক্সট ম্যানেজারের (যেমন threading.RLock) বৈশিষ্ট্য কী?'
        },
        options: [
          {
            en: 'It can be safely entered and exited multiple times consecutively or nested within the same thread without deadlock',
            bn: 'একই থ্রেডের ভেতর ডেডলক ছাড়া এটিকে একাধিকবার বা নেস্টেডভাবে নিরাপদে ওপেন ও ক্লোজ করা যায়'
          },
          {
            en: 'It can only be used on 32-bit CPUs',
            bn: 'এটি কেবল ৩২-বিট সিপিইউতে কাজ করে'
          },
          {
            en: 'It deletes unreferenced files automatically',
            bn: 'এটি অব্যবহৃত ফাইল নিজে থেকেই মুছে ফেলে'
          },
          {
            en: 'It restarts the computer if an exception occurs',
            bn: 'এক্সেপশন হলে এটি কম্পিউটার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reentrant means the same execution thread can acquire the resource repeatedly.',
          bn: 'রি-এন্ট্রান্ট মানে হলো একই থ্রেড কোনো ঝামেলা ছাড়াই বারবার রিসোর্সটি নিতে পারে।'
        },
        explanation: {
          en: 'Reentrant managers track acquisition counts per thread, safely permitting nested with statements.',
          bn: 'রি-এন্ট্রান্ট ম্যানেজার প্রতিটি থ্রেডের জন্য সংখ্যা মনে রাখে, ফলে নেস্টেড with স্টেটমেন্টে ডেডলক হয় না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'typing-and-the-hint',
    title: {
      en: 'Static Typing, Generics & TypeVar Hints',
      bn: 'স্ট্যাটিক টাইপিং, জেনেরিক এবং TypeVar হিন্টস'
    }
  }
};
