import type { Lesson } from '../../../lib/types';

export const ClosuresAndTheCaptureLesson: Lesson = {
  slug: 'closures-and-the-capture',
  tech: 'swift',
  title: {
    en: 'Closures, Escaping Semantics & Retain Cycles',
    bn: 'ক্লোজার, এস্কেপিং সেমান্টিকস এবং রিটেইন সাইকেল'
  },
  summary: {
    en: 'Master first-class closures and memory management in Swift. Understand closure capture semantics, differentiate non-escaping from @escaping closures, decode ARC strong reference cycles, and use capture lists with [weak self] and [unowned self] to eliminate memory leaks.',
    bn: 'Swift-এ ফার্স্ট-ক্লাস ক্লোজার এবং মেমোরি ব্যবস্থাপনা আয়ত্ত করুন। ক্লোজার ক্যাপচার সেমান্টিকস, নন-এস্কেপিং বনাম @escaping ক্লোজারের পার্থক্য, ARC স্ট্রং রেফারেন্স সাইকেল এবং [weak self] ও [unowned self] ক্যাপচার লিস্ট দিয়ে মেমোরি লিক নির্মূল।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'closures-and-escaping-heading',
      text: {
        en: 'First-Class Closures and Escaping Lifetime Semantics',
        bn: 'ফার্স্ট-ক্লাস ক্লোজার এবং এস্কেপিং লাইফটাইম সেমান্টিকস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern app development, callbacks and functional transformations drive asynchronous workflows. In Swift (Apple\'s type-safe compiled programming language), closures operate as self-contained first-class function blocks that can capture and store references to variables from their enclosing context. By default, closures passed into functions are strictly non-escaping: they execute synchronously within the function\'s stack frame and cannot outlive the call. However, when a closure is passed to a background network task or stored in a property to be called later, the compiler requires the "@escaping" attribute. This informs the compiler that the closure must be allocated on the heap, ensuring it remains alive long after the initiating function returns.',
        bn: 'আধুনিক অ্যাপ্লিকেশনে অ্যাসিঙ্ক্রোনাস কাজের জন্য কলব্যাক এবং ফাংশনাল ট্রান্সফরমেশন ব্যাপকভাবে ব্যবহৃত হয়। Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ ক্লোজার হলো ফার্স্ট-ক্লাস ফাংশন ব্লক যা তার আশেপাশের স্কোপ থেকে ভেরিয়েবল ক্যাপচার করে ধরে রাখতে পারে। ডিফল্টভাবে ফাংশনে পাঠানো ক্লোজারগুলো নন-এস্কেপিং থাকে: সেগুলো ফাংশনের স্ট্যাকের ভেতরেই সঙ্গে সঙ্গে রান হয় এবং ফাংশন শেষের পর বাঁচতে পারে না। কিন্তু যখন কোনো ক্লোজার ব্যাকগ্রাউন্ড নেটওয়ার্ক টাস্কে পাঠানো হয় বা পরে চালানোর জন্য প্রোপার্টিতে সংরক্ষণ করা হয়, তখন কম্পাইলার "@escaping" কি-ওয়ার্ড লেখার নির্দেশ দেয়। এটি কম্পাইলারকে জানায় যে ক্লোজারটিকে হিপ মেমোরিতে রাখতে হবে, যাতে মূল ফাংশন শেষ হয়ে যাওয়ার অনেক পরেও এটি জীবিত থাকতে পারে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between a strong reference retain cycle (memory leak) and [weak self] resolution under Automatic Reference Counting.',
        bn: 'চিত্র ১: স্ট্রং রেফারেন্স রিটেইন সাইকেল (মেমোরি লিক) এবং [weak self] ব্যবহারের মাধ্যমে ARC মেমোরি সুরক্ষার স্থাপত্যিক তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT CLOSURE CAPTURE: RETAIN CYCLE VS WEAK SELF</text>

  <!-- Left: Retain Cycle -->
  <g transform="translate(35, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#b91c1c" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Retain Cycle: Fatal Memory Leak</text>

    <!-- Node 1: ViewController -->
    <rect x="20" y="50" width="140" height="75" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="90" y="75" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">ViewController</text>
    <text x="90" y="95" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">ARC Count: 1</text>
    <text x="90" y="112" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Holds completion</text>

    <!-- Node 2: Closure -->
    <rect x="205" y="50" width="140" height="75" rx="6" fill="#0f172a" stroke="#ef4444" />
    <text x="275" y="75" fill="#f87171" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">Escaping Closure</text>
    <text x="275" y="95" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">ARC Count: 1</text>
    <text x="275" y="112" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Captures self</text>

    <!-- Cycle Arrows -->
    <path d="M 160 70 L 205 70" stroke="#f87171" stroke-width="2" marker-end="url(#arrow)" />
    <path d="M 205 105 L 160 105" stroke="#f87171" stroke-width="2" marker-end="url(#arrow)" />

    <!-- Explanation -->
    <rect x="20" y="145" width="325" height="70" rx="6" fill="#ef4444" fill-opacity="0.15" stroke="#ef4444" />
    <text x="30" y="170" fill="#f87171" font-size="10" font-family="sans-serif" font-weight="bold">Cyclic Lock:</text>
    <text x="30" y="188" fill="#f8fafc" font-size="10" font-family="sans-serif">VC references Closure, Closure strongly references VC.</text>
    <text x="30" y="204" fill="#cbd5e1" font-size="9" font-family="sans-serif">Neither ARC count ever hits 0. deinit NEVER runs!</text>
  </g>

  <!-- Right: Weak Self Resolution -->
  <g transform="translate(440, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#059669" />
    <text x="182" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Capture List: [weak self] Resolution</text>

    <!-- Node 1: ViewController -->
    <rect x="20" y="50" width="140" height="75" rx="6" fill="#0f172a" stroke="#10b981" />
    <text x="90" y="75" fill="#34d399" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">ViewController</text>
    <text x="90" y="95" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">ARC Count: 1</text>
    <text x="90" y="112" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Strong Ref to Closure</text>

    <!-- Node 2: Closure with weak self -->
    <rect x="205" y="50" width="140" height="75" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="275" y="75" fill="#38bdf8" font-size="11" font-family="monospace" font-weight="bold" text-anchor="middle">[weak self]</text>
    <text x="275" y="95" fill="#cbd5e1" font-size="10" font-family="monospace" text-anchor="middle">Zero Retain Count</text>
    <text x="275" y="112" fill="#94a3b8" font-size="9" font-family="sans-serif" text-anchor="middle">Optional&lt;VC&gt;</text>

    <!-- Strong Arrow Forward, Weak Arrow Backward -->
    <path d="M 160 70 L 205 70" stroke="#10b981" stroke-width="2" />
    <path d="M 205 105 L 160 105" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4" />

    <!-- Explanation -->
    <rect x="20" y="145" width="325" height="70" rx="6" fill="#10b981" fill-opacity="0.15" stroke="#10b981" />
    <text x="30" y="170" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Deterministic Teardown:</text>
    <text x="30" y="188" fill="#f8fafc" font-size="10" font-family="sans-serif">When VC is dismissed, ARC drops to 0 immediately.</text>
    <text x="30" y="204" fill="#cbd5e1" font-size="9" font-family="sans-serif">deinit runs cleanly; weak pointer zeroes to nil!</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'retain-cycles-and-capture-lists-heading',
      text: {
        en: 'ARC Retain Cycles and Capture Lists ([weak self] vs [unowned self])',
        bn: 'ARC রিটেইন সাইকেল এবং ক্যাপচার লিস্ট ([weak self] বনাম [unowned self])'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because closures are reference types, capturing a class instance creates a strong reference that increments its ARC count. If that class instance simultaneously retains the closure in a stored property, a fatal retain cycle occurs. Neither the class nor the closure can ever reach an ARC count of zero, triggering an invisible memory leak where "deinit" never executes. Swift eliminates retain cycles via capture lists declared at the beginning of the closure parameter list. Developers choose between 2 capture strategies. First, "[weak self]" creates an optional reference that does not increment ARC and automatically becomes nil if the instance is deallocated. Under "[unowned self]", the compiler produces a non-optional pointer asserting the instance will always outlive the closure, crashing with EXC_BAD_ACCESS if violated.',
        bn: 'যেহেতু ক্লোজার একটি রেফারেন্স টাইপ, তাই কোনো ক্লাসকে ক্লোজারের ভেতর ব্যবহার করলে তার ARC কাউন্ট এক বেড়ে যায়। সেই ক্লাসটি যদি নিজে আবার একটি প্রোপার্টিতে ক্লোজারটিকে ধরে রাখে, তবে একটি মারাত্মক রিটেইন সাইকেল তৈরি হয়। এর ফলে কোনোটিরই রেফারেন্স কাউন্ট শূন্য হতে পারে না এবং মেমোরি লিক ঘটে যেখানে "deinit" কখনোই চলে না। Swift ক্লোজারের শুরুতে ক্যাপচার লিস্ট লিখে এই সাইকেল ভাঙার সুবিধা দেয়। ডেভেলপাররা মূলত ২ টি কৌশল বেছে নেন। প্রথমত, "[weak self]" একটি অপশনাল রেফারেন্স তৈরি করে যা কোনো কাউন্ট বাড়ায় না এবং অবজেক্ট মুছে গেলে নিজে থেকেই nil হয়ে যায়। অন্যদিকে "[unowned self]" ব্যবহারের ক্ষেত্রে কম্পাইলার একটি নন-অপশনাল পয়েন্টার তৈরি করে যা অবজেক্টটি সর্বদা জীবিত থাকার দাবি করে, কিন্তু অবজেক্ট মুছে গেলে কোড চালালে EXC_BAD_ACCESS দিয়ে ক্র্যাশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift closure capture semantics, ARC retain cycles, and [weak self] zeroing resolution.',
        bn: 'Swift ক্লোজার ক্যাপচার, ARC রিটেইন সাইকেল এবং [weak self] সমাধানের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Closure Capture Lists and ARC Retain Cycle Prevention

export class SimulatedViewController {
  public name: string;
  public completionHandler?: () => void;
  public isDeallocated = false;

  constructor(name: string) {
    this.name = name;
    console.log('[Init] ViewController created:', this.name);
  }

  // Setup asynchronous task with [weak self] simulation
  public setupTaskWithWeakSelf(networkQueue: (() => void)[]): void {
    // Simulating [weak self] capture list: weak reference that zeroes on dealloc
    const weakRef = { target: this as SimulatedViewController | null };

    this.completionHandler = () => {
      // guard let self = weakRef.target else { return }
      if (!weakRef.target) {
        console.log('[Closure Executed] weak self is nil! ViewController was dismissed. Safely aborted.');
        return;
      }
      console.log('[Closure Executed] Operating safely on:', weakRef.target.name);
    };

    // Store in async background queue
    networkQueue.push(this.completionHandler);
  }

  // Teardown simulation
  public dismiss(): void {
    console.log('[Dismiss] User closed screen. Triggering ARC deinit for:', this.name);
    this.isDeallocated = true;
    // Null out strong reference from navigation stack
  }
}

// Execution Demonstration
const backgroundNetworkQueue: (() => void)[] = [];

// Step 1: User opens Profile screen
let profileVC: SimulatedViewController | null = new SimulatedViewController('UserProfileScreen');
profileVC.setupTaskWithWeakSelf(backgroundNetworkQueue);

// Step 2: User navigates back immediately before network response returns
profileVC.dismiss();
profileVC = null; // Screen destroyed!

// Step 3: Background network task finally returns 2 seconds later
console.log('Background network response arriving now...');
const pendingTask = backgroundNetworkQueue.shift()!;
pendingTask(); // Safely short-circuits because weak self is nil!`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Closure',
          def: {
            en: 'Self-contained block of functionality that can be passed around and executed, capturing variables from its scope.',
            bn: 'একটি স্বয়ংসম্পূর্ণ কোড ব্লক যা যেকোনো জায়গায় পাস করা যায় এবং আশেপাশের ভেরিয়েবল ক্যাপচার করে রাখে।'
          }
        },
        {
          term: 'Escaping Closure (@escaping)',
          def: {
            en: 'Closure that outlives the function it was passed into, typically stored in a property or dispatched asynchronously.',
            bn: 'এমন ক্লোজার যা মূল ফাংশন শেষ হওয়ার পরেও জীবিত থাকে, সাধারণত প্রোপার্টিতে বা অ্যাসিঙ্ক টাস্কে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'Retain Cycle',
          def: {
            en: 'Memory leak where two reference instances hold strong pointers to each other, preventing ARC deallocation.',
            bn: 'এমন মেমোরি লিক যেখানে দুটি অবজেক্ট পরস্পরকে স্ট্রং রেফারেন্স দিয়ে ধরে রাখে, ফলে ARC তাদের মুছতে পারে না।'
          }
        },
        {
          term: 'Weak Self Capture',
          def: {
            en: 'Capture list idiom ([weak self]) preventing retain cycles by creating a non-owning optional pointer that zeroes on dealloc.',
            bn: 'ক্যাপচার লিস্ট কৌশল যা কোনো কাউন্ট না বাড়িয়ে একটি অপশনাল পয়েন্টার রাখে যা অবজেক্ট মুছলে nil হয়ে যায়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'closure-non-escaping-default-ex1',
      kind: 'mcq',
      topic: 'closure-non-escaping-default-behavior',
      question: {
        en: 'Why did Swift establish that function closure parameters are non-escaping by default?',
        bn: 'Swift কেন ফাংশনের ক্লোজার প্যারামিটারকে ডিফল্টভাবে নন-এস্কেপিং হিসেবে নির্ধারণ করেছে?'
      },
      options: [
        {
          en: 'Non-escaping closures execute synchronously on the stack without heap allocation, eliminating retain cycles and allowing aggressive compiler inlining',
          bn: 'নন-এস্কেপিং ক্লোজার কোনো হিপ মেমোরি বরাদ্দ ছাড়াই স্ট্যাকের ওপর সিঙ্ক্রোনাসভাবে চলে, যা রিটেইন সাইকেল রোধ করে ও কোড দ্রুত করে'
        },
        {
          en: 'Because non-escaping closures can only calculate integer additions',
          bn: 'কারণ নন-এস্কেপিং ক্লোজার কেবল পূর্ণসংখ্যার যোগ করতে পারে'
        },
        {
          en: 'To force all network requests to run on the main thread',
          bn: 'সমস্ত নেটওয়ার্ক রিকোয়েস্ট যাতে মেইন থ্রেডে চলে তা বাধ্য করতে'
        },
        {
          en: 'Non-escaping was introduced exclusively for C++ interop',
          bn: 'নন-এস্কেপিং কেবল C++ ইন্টারঅপের সুবিধার জন্য আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Non-escaping closures cannot outlive the calling function, guaranteeing safety.',
        bn: 'ফাংশনের ভেতর কাজ শেষ হয়ে যাওয়ায় মেমোরি লিকের কোনো ভয় থাকে না।'
      },
      explanation: {
        en: 'Because non-escaping closures cannot escape the function body, they do not retain self past the call, preventing memory leaks by design.',
        bn: 'ফলে বাড়তি ক্যাপচার লিস্ট না লিখেও নিরাপদে কোড লেখা সম্ভব হয়।'
      }
    },
    {
      id: 'weak-vs-unowned-self-distinction-ex2',
      kind: 'mcq',
      topic: 'weak-vs-unowned-self-safety-distinction',
      question: {
        en: 'What is the critical safety difference between "[weak self]" and "[unowned self]" in a Swift closure capture list?',
        bn: 'Swift ক্লোজার ক্যাপচার লিস্টে "[weak self]" এবং "[unowned self]"-এর মধ্যে অত্যন্ত গুরুত্বপূর্ণ নিরাপত্তা পার্থক্য কী?'
      },
      options: [
        {
          en: '"[weak self]" makes self an Optional that safely zeroes to nil if deallocated; "[unowned self]" assumes self is never nil and causes an immediate fatal crash if accessed after deallocation',
          bn: '"[weak self]" self-কে একটি অপশনাল বানায় যা অবজেক্ট মুছে গেলে শান্তভাবে nil হয়ে যায়; আর "[unowned self]" ধরে নেয় self সর্বদা জীবিত থাকবে এবং অবজেক্ট মুছে যাওয়ার পর কল করলে অ্যাপ ক্র্যাশ করায়'
        },
        {
          en: 'weak self uses 100 times more memory than unowned self',
          bn: 'weak self unowned self-এর চেয়ে ১০০ গুণ বেশি মেমোরি খরচ করে'
        },
        {
          en: 'unowned self converts the class into a struct',
          bn: 'unowned self ক্লাসটিকে একটি স্ট্রাক্টে রূপান্তর করে'
        },
        {
          en: 'There is zero difference between weak and unowned in Swift',
          bn: 'Swift-এ weak এবং unowned এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'weak self zeroes to nil on deallocation; unowned self traps if accessed after dealloc.',
        bn: 'weak নিরাপদ কারণ এটি nil চেক করার সুযোগ দেয়, কিন্তু unowned ভুল হলে সরাসরি ক্র্যাশ করায়।'
      },
      explanation: {
        en: 'Use weak self when the closure might outlive the referenced instance (e.g. network requests). Use unowned only when both share identical lifecycles.',
        bn: 'নেটওয়ার্ক রিকোয়েস্টে স্ক্রিন আগেই বন্ধ হতে পারে, তাই সেখানে সর্বদা weak self ব্যবহার করা উচিত।'
      }
    },
    {
      id: 'retain-cycle-memory-leak-mechanic-ex3',
      kind: 'mcq',
      topic: 'retain-cycle-arc-count-lock',
      question: {
        en: 'Why does an unmitigated retain cycle between a ViewController and a stored escaping closure cause a permanent memory leak in iOS applications?',
        bn: 'iOS অ্যাপ্লিকেশনে একটি ViewController এবং সংরক্ষিত এস্কেপিং ক্লোজারের মধ্যে রিটেইন সাইকেল কেন স্থায়ী মেমোরি লিক ঘটায়?'
      },
      options: [
        {
          en: 'Because both objects maintain strong references to each other, their ARC counts never reach zero when the screen is dismissed, preventing deinit from ever executing',
          bn: 'যেহেতু উভয় অবজেক্ট একে অপরকে স্ট্রং রেফারেন্স দিয়ে ধরে রাখে, তাই স্ক্রিন বন্ধ হলেও তাদের ARC কাউন্ট কখনোই শূন্য হয় না এবং deinit মেথড কখনো চলে না'
        },
        {
          en: 'Because the iOS operating system limits apps to exactly 2 megabytes of RAM',
          bn: 'কারণ iOS অপারেটিং সিস্টেম অ্যাপের র‍্যাম কেবল ২ মেগাবাইটে সীমাবদ্ধ রাখে'
        },
        {
          en: 'Because closures format the iPhone battery telemetry',
          bn: 'কারণ ক্লোজার আইফোনের ব্যাটারি টেলিমেট্রি ফরম্যাট করে'
        },
        {
          en: 'Retain cycles only occur on jailbroken devices',
          bn: 'রিটেইন সাইকেল কেবল জেলব্রেক করা ফোনে ঘটে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mutual strong references prevent ARC from ever reaching zero.',
        bn: 'দুজনে দুজনকে ধরে রাখায় কেউই মেমোরি থেকে মুছে যেতে পারে না।'
      },
      explanation: {
        en: 'ARC only reclaims memory when an instance\'s reference count drops to zero. Circular strong references prevent this, trapping both objects in memory forever.',
        bn: 'এর ফলে ব্যবহারকারী বারবার স্ক্রিন খুললে ও বন্ধ করলে অ্যাপের মেমোরি বাড়তেই থাকে।'
      }
    },
    {
      id: 'trailing-closure-syntax-readability-ex4',
      kind: 'mcq',
      topic: 'trailing-closure-syntax-idiom',
      question: {
        en: 'When can a Swift developer apply "trailing closure syntax" (such as "UIView.animate(withDuration: 0.3) { ... }")?',
        bn: 'একজন Swift ডেভেলপার কখন "ট্রেইলিং ক্লোজার সিনট্যাক্স" (যেমন "UIView.animate(withDuration: 0.3) { ... }") প্রয়োগ করতে পারেন?'
      },
      options: [
        {
          en: 'Whenever the closure is the final parameter of a function call, allowing the closure expression to be written outside the parentheses for enhanced readability',
          bn: 'যখন ক্লোজারটি কোনো ফাংশন কলের সর্বশেষ প্যারামিটার হিসেবে থাকে, তখন কোডের পাঠযোগ্যতা বাড়াতে প্রথম বন্ধনীর বাইরে ব্র্যাকেটে লেখা যায়'
        },
        {
          en: 'Only when the closure returns a 64-bit integer value',
          bn: 'কেবল তখনই যখন ক্লোজারটি একটি ৬৪-বিট পূর্ণসংখ্যা রিটার্ন করে'
        },
        {
          en: 'Only when compiling code for macOS server environments',
          bn: 'কেবল macOS সার্ভার কোড কম্পাইল করার সময়'
        },
        {
          en: 'Trailing closure syntax was deprecated in Swift 5.3',
          bn: 'Swift ৫.৩ সংস্করণে ট্রেইলিং ক্লোজার সিনট্যাক্স বাতিল করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Trailing closure syntax moves the final closure argument outside the function parens.',
        bn: 'শেষ আর্গুমেন্টটি ক্লোজার হলে তাকে বন্ধনীর বাইরে সেকেন্ড ব্র্যাকেটে লেখা যায়।'
      },
      explanation: {
        en: 'Trailing closure syntax cleans up code readability by avoiding awkward closing parenthesis-brace combinations, especially in UI building and animation APIs.',
        bn: 'ফলে ইউআই তৈরি এবং অ্যানিমেশনের কোড দেখতে অত্যন্ত সাবলীল ও পরিচ্ছন্ন মনে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-closures-and-the-capture',
    title: {
      en: 'Swift Closures & Memory Management Quiz',
      bn: 'Swift ক্লোজার এবং মেমোরি ম্যানেজমেন্ট কুইজ'
    },
    questions: [
      {
        id: 'quiz-autoclosure-lazy-evaluation',
        kind: 'mcq',
        topic: 'autoclosure-attribute-lazy-argument-evaluation',
        question: {
          en: 'What architectural advantage does the "@autoclosure" attribute provide to function arguments (such as "assert(_:_:)")?',
          bn: 'ফাংশন আর্গুমেন্টে "@autoclosure" অ্যাট্রিবিউট (যেমন "assert(_:_:)") কোন স্থাপত্যিক সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It automatically wraps an expression passed as an argument into a closure, delaying its evaluation until the receiving function explicitly invokes it',
            bn: 'এটি প্যারামিটার হিসেবে পাঠানো এক্সপ্রেশনকে স্বয়ংক্রিয়ভাবে একটি ক্লোজারে মুড়িয়ে দেয়, ফলে ফাংশন সরাসরি না ডাকা পর্যন্ত এক্সপ্রেশনটি রান হয় না'
          },
          {
            en: 'It runs the argument across 4 background threads in parallel',
            bn: 'এটি আর্গুমেন্টটিকে ৪ টি ব্যাকগ্রাউন্ড থ্রেডে সমান্তরালে চালায়'
          },
          {
            en: 'It encrypts the function arguments with a 256-bit key',
            bn: 'এটি ২৫৬-বিট কি দিয়ে ফাংশন আর্গুমেন্ট এনক্রিপ্ট করে'
          },
          {
            en: '@autoclosure was removed in Swift 4.0',
            bn: 'Swift ৪.০ সংস্করণে @autoclosure বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: '@autoclosure enables lazy evaluation of function parameters.',
          bn: 'প্রয়োজন না হলে যাতে ভারী হিসাব না চলে, সেজন্য এটি অলস মূল্যায়নে সাহায্য করে।'
        },
        explanation: {
          en: 'In assert(condition, message), calculating the message string is expensive. @autoclosure defers calculation so message is evaluated only if the assertion fails.',
          bn: 'এর মাধ্যমে কোড দ্রুত থাকে এবং অপ্রয়োজনীয় স্ট্রিং তৈরির অপচয় রোধ হয়।'
        }
      },
      {
        id: 'quiz-closure-capture-by-reference-default',
        kind: 'mcq',
        topic: 'closure-default-capture-by-reference',
        question: {
          en: 'When a Swift closure without an explicit capture list mutates an outer local integer variable, how does it physically capture that variable?',
          bn: 'কোনো নির্দিষ্ট ক্যাপচার লিস্ট ছাড়া একটি Swift ক্লোজার যখন বাইরের একটি ইন্টিজার ভেরিয়েবল পরিবর্তন করে, তখন সে শারীরিকভাবে কীভাবে ভেরিয়েবলটিকে ক্যাপচার করে?'
        },
        options: [
          {
            en: 'By reference: the compiler promotes the stack variable to a shared heap box so mutations inside and outside the closure reflect on the same value',
            bn: 'রেফারেন্সের মাধ্যমে: কম্পাইলার স্ট্যাকের ভ্যারিয়েবলটিকে একটি শেয়ার্ড হিপ বক্সে তুলে নেয় যাতে ভেতরের ও বাইরের পরিবর্তন একই মানে প্রতিফলিত হয়'
          },
          {
            en: 'By value: creating an immutable static copy that cannot be changed',
            bn: 'ভ্যালু হিসেবে: একটি অপরিবর্তনীয় কপি তৈরি করে যা বদলানো যায় না'
          },
          {
            en: 'By writing the integer to a temporary CSV file on disk',
            bn: 'ডিস্কে একটি অস্থায়ী সিএসভি ফাইলে সংখ্যাটি লিখে'
          },
          {
            en: 'Swift forbids closures from modifying variables from outer scopes',
            bn: 'Swift ক্লোজারকে বাইরের স্কোপের ভেরিয়েবল পরিবর্তন করতে সম্পূর্ণ নিষেধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swift closures capture variables by reference by default.',
          bn: 'ডিফল্টভাবে রেফারেন্স ক্যাপচার হওয়ায় ভেতরের পরিবর্তন বাইরেও দেখা যায়।'
        },
        explanation: {
          en: 'Swift allocates captured mutable local variables on the heap, ensuring that the variable remains alive as long as the closure exists.',
          bn: 'এর ফলে ফাংশন শেষ হলেও ক্লোজারটি সঠিক মান নিয়ে নির্বিঘ্নে চলতে পারে।'
        }
      },
      {
        id: 'quiz-multiple-trailing-closures-swift-5-3',
        kind: 'mcq',
        topic: 'multiple-trailing-closures-swift-5-3',
        question: {
          en: 'How did Swift 5.3 enhance API design regarding functions accepting multiple closure arguments (such as animations with completions)?',
          bn: 'একাধিক ক্লোজার আর্গুমেন্ট গ্রহণকারী ফাংশনের ক্ষেত্রে Swift ৫.৩ কীভাবে এপিআই ডিজাইন উন্নত করেছে?'
        },
        options: [
          {
            en: 'It introduced Multiple Trailing Closures syntax, allowing multiple trailing closure blocks to be labeled cleanly after the initial parameter call',
            bn: 'এটি মাল্টিপল ট্রেইলিং ক্লোজার সিনট্যাক্স যুক্ত করেছে, যার ফলে একাধিক ক্লোজার ব্লক প্রথম বন্ধনীর বাইরে পরিচ্ছন্ন লেবেল দিয়ে লেখা যায়'
          },
          {
            en: 'It banned functions from accepting more than 1 closure',
            bn: 'এটি ফাংশনে ১ টির বেশি ক্লোজার গ্রহণ করা নিষিদ্ধ করেছে'
          },
          {
            en: 'It converted all closures into web workers',
            bn: 'এটি সমস্ত ক্লোজারকে ওয়েব ওয়ার্কারে রূপান্তর করেছে'
          },
          {
            en: 'Multiple trailing closures require iOS 18 to run',
            bn: 'মাল্টিপল ট্রেইলিং ক্লোজারের জন্য iOS ১৮ থাকা বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swift 5.3 allows chaining labeled trailing closures.',
          bn: 'প্রথম বন্ধনী ছাড়াই পরপর একাধিক ক্লোজার সুন্দর লেবেলে সাজানো যায়।'
        },
        explanation: {
          en: 'Multiple trailing closures allow code like "UIView.animate(duration: 1) { ... } completion: { ... }" without nested parentheses.',
          bn: 'এর ফলে বড় বড় অ্যানিমেশন কোড অত্যন্ত পাঠযোগ্য ও দেখতে সুন্দর হয়।'
        }
      },
      {
        id: 'quiz-escaping-closure-self-explicit-syntax',
        kind: 'mcq',
        topic: 'escaping-closure-self-explicit-requirement',
        question: {
          en: 'Why does the Swift compiler require explicitly typing "self." inside escaping closures unless captured via a capture list?',
          bn: 'ক্যাপচার লিস্টে উল্লেখ না থাকলে এস্কেপিং ক্লোজারের ভেতর কেন কম্পাইলার স্পষ্টভাবে "self." টাইপ করতে বাধ্য করে?'
        },
        options: [
          {
            en: 'To make the reference capture completely explicit to the developer, preventing accidental retain cycles caused by implicit captures of self',
            bn: 'ডেভেলপারকে সচেতন করতে যে self-কে রেফারেন্স হিসেবে ধরা হচ্ছে, যা অসাবধানতাবশত মেমোরি লিক বা রিটেইন সাইকেল তৈরি হওয়া প্রতিরোধ করে'
          },
          {
            en: 'Because self is a 64-bit memory address in the CPU register',
            bn: 'কারণ self হলো সিপিইউ রেজিস্টারের একটি ৬৪-বিট মেমোরি ঠিকানা'
          },
          {
            en: 'To translate the code into Objective-C runtime instructions',
            bn: 'কোডটিকে অবজেক্টিভ-সি রানটাইমে অনুবাদ করতে'
          },
          {
            en: 'Explicit self was deprecated in modern Swift',
            bn: 'আধুনিক Swift-এ explicit self বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Requiring self. forces developers to consciously acknowledge capturing the instance.',
          bn: 'অসাবধানতাবশত যাতে কেউ রিটেইন সাইকেল তৈরি না করে, সেজন্য জোর করে self. লেখানো হয়।'
        },
        explanation: {
          en: 'By forcing explicit "self." in escaping closures, developers are consciously reminded that the closure will keep the instance alive, prompting them to consider [weak self].',
          bn: 'এটি ডেভেলপারকে মনে করিয়ে দেয় যে অবজেক্টটি মেমোরিতে আটকে থাকতে পারে, ফলে তারা সতর্ক হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'protocols-and-the-extension',
    title: {
      en: 'Protocols, Extensions & Protocol-Oriented Architecture',
      bn: 'প্রটোকল, এক্সটেনশন এবং প্রটোকল-ওরিয়েন্টেড আর্কিটেকচার'
    }
  }
};
