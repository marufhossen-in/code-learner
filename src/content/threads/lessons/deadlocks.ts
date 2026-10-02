import type { Lesson } from '../../../lib/types';

export const DeadlocksLesson: Lesson = {
  slug: 'deadlocks',
  tech: 'threads',
  title: {
    en: 'Deadlocks: The Four Coffman Conditions, Detection & Prevention Strategies',
    bn: 'ডেডলক: চারটি কফম্যান শর্ত, শনাক্তকরণ এবং প্রতিরোধ কৌশল'
  },
  summary: {
    en: 'Analyze the anatomy of a concurrent deadlock where two or more threads freeze permanently waiting for resources held by each other. Master the 4 Coffman conditions required for deadlocks to occur: Mutual Exclusion, Hold and Wait, No Preemption, and Circular Wait. Learn how to break deadlocks using global lock ordering, try-lock timeouts, lock-free structures, and deadlock detection graphs.',
    bn: 'কনকারেন্ট ডেডলকের সম্পূর্ণ মেকানিজম বিশ্লেষণ করুন যেখানে একাধিক থ্রেড পরস্পরের দখলে থাকা লকের অপেক্ষায় চিরতরে স্থবির হয়ে পড়ে। ডেডলক ঘটার জন্য দায়ী ৪ টি কফম্যান শর্ত ( মিউচুয়াল এক্সক্লুশন, হোল্ড অ্যান্ড ওয়েট, নো প্রিম্পশন এবং সার্কুলার ওয়েট ) গভীরভাবে বুঝুন। গ্লোবাল লক অর্ডারিং, ট্রাই-লক টাইমআউট, লক-মুক্ত কাঠামো এবং ডেডলক ডিটেকশন গ্রাফ ব্যবহার করে ডেডলক সমাধানের কৌশল শিখুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'the-deadly-embrace',
      text: {
        en: 'The Deadly Embrace of Mutex Locks',
        bn: 'মিউটেক্স লকের বিপজ্জনক ফাঁদ'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you introduce mutexes to eliminate race conditions, you can inadvertently invite an equally catastrophic concurrency failure: the Deadlock. A deadlock occurs when a set of concurrent threads is blocked permanently because each thread holds a lock needed by another, and no thread can make progress without obtaining its next lock.',
        bn: 'রেস কন্ডিশন দূর করার জন্য আপনি যখন একাধিক মিউটেক্স লক ব্যবহার করেন, তখন অসাবধানতাবশত আরেকটি মারাত্মক সংকটের জন্ম হতে পারে: ডেডলক (Deadlock)। একাধিক থ্রেড যখন পরস্পরের দখলে থাকা লকের অপেক্ষায় চিরতরে আটকে থাকে এবং কেউ লক না ছাড়ায় কোনো থ্রেডই কাজ এগিয়ে নিতে পারে না, তখন ডেডলক ঘটে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Under a deadlock, overall CPU utilization drops to 0 percent as all affected threads sleep indefinitely in the kernel wait queue. The software ceases to respond to incoming network requests or UI clicks, compelling administrators to forcibly restart the entire application process.',
        bn: 'ডেডলক ঘটলে সামগ্রিক সিপিইউ ব্যবহার ০ শতাংশে নেমে আসে কারণ আক্রান্ত সকল থ্রেড ওএস কার্নেল কিউতে গভীর ঘুমে আটকে থাকে। অ্যাপ্লিকেশনটি সম্পূর্ণ প্রতিক্রিয়াহীন হয়ে পড়ে এবং শেষ পর্যন্ত প্রসেসটিকে জোরপূর্বক রিস্টার্ট করা ছাড়া আর কোনো উপায় থাকে না।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Condition 1: Mutual Exclusion',
            bn: '১. শর্ত ১: মিউচুয়াল এক্সক্লুশন (Mutual Exclusion)'
          },
          text: {
            en: 'At least 1 resource must be held in an exclusive, non-shareable mode. If another thread requests that resource, it must be forced to wait.',
            bn: 'অন্তত ১ টি রিসোর্স অবশ্যই এমন হতে হবে যা একই সাথে একাধিক থ্রেড শেয়ার করতে পারে না। অন্য কোনো থ্রেড সেটি চাইলে তাকে অপেক্ষা করতে হয়।'
          },
        },
        {
          title: {
            en: '2. Condition 2: Hold and Wait',
            bn: '২. শর্ত ২: হোল্ড অ্যান্ড ওয়েট (Hold and Wait)'
          },
          text: {
            en: 'A thread must currently hold at least 1 resource while simultaneously waiting to acquire an additional resource currently held by another thread.',
            bn: 'একটি থ্রেড অবশ্যই অন্তত ১ টি রিসোর্স দখলে রাখবে এবং একই সাথে অন্য কোনো থ্রেডের কাছে থাকা দ্বিতীয় আরেকটি রিসোর্স নেওয়ার জন্য অপেক্ষা করবে।'
          },
        },
        {
          title: {
            en: '3. Condition 3: No Preemption',
            bn: '৩. শর্ত ৩: নো প্রিম্পশন (No Preemption)'
          },
          text: {
            en: 'Resources cannot be forcibly confiscated from a thread holding them. A lock can only be released voluntarily by the thread that acquired it.',
            bn: 'কোনো থ্রেডের দখল থেকে জোরপূর্বক রিসোর্স ছিনিয়ে নেওয়া যাবে না। যে থ্রেড লকটি নিয়েছে কেবল সে নিজে থেকেই এটি মুক্ত করতে পারে।'
          },
        },
        {
          title: {
            en: '4. Condition 4: Circular Wait',
            bn: '৪. শর্ত ৪: সার্কুলার ওয়েট (Circular Wait)'
          },
          text: {
            en: 'A closed circular chain exists: Thread 1 requests a resource owned by Thread 2, while Thread 2 pauses awaiting a lock held by Thread 1. Breaking ANY 1 of these 4 conditions prevents deadlocks entirely!',
            bn: 'একটি বৃত্তাকার অপেক্ষার চক্র তৈরি হয়: থ্রেড ১ এমন একটি রিসোর্স চায় যা থ্রেড ২ এর দখলে আছে, আবার থ্রেড ২ আটকে থাকে থ্রেড ১ এর লকের জন্য। এই ৪ টি শর্তের যেকোনো ১ টি ভেঙে দিলেই ডেডলক সম্পূর্ণ প্রতিরোধ করা যায়!'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The Circular Wait Deadlock Architecture: Circular Lock Contention vs Lock Hierarchy',
        bn: 'সার্কুলার ওয়েট ডেডলক আর্কিটেকচার: বৃত্তাকার লক প্রতিযোগিতা বনাম লক হায়ারার্কি'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Deadlock circular wait diagram contrasting circular contention against strict lock hierarchy order">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DEADLOCK MECHANISM: CIRCULAR WAIT &amp; THE COFFMAN CONDITIONS</text>
  
  <!-- Left Side: Circular Wait Disaster -->
  <g transform="translate(30, 48)">
    <rect width="375" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="187" y="24" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">CIRCULAR WAIT: DEADLOCK FREEZE</text>
    
    <!-- Thread 1 -->
    <g transform="translate(30, 50)">
      <circle cx="50" cy="50" r="40" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
      <text x="50" y="46" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">THREAD 1</text>
      <text x="50" y="62" fill="#cbd5e1" font-size="8" text-anchor="middle">Holds Lock A</text>
    </g>
    
    <!-- Lock A -->
    <g transform="translate(210, 50)">
      <rect width="120" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="60" y="28" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">LOCK A</text>
      <text x="60" y="45" fill="#f8fafc" font-size="9" text-anchor="middle">Held by T1 🔒</text>
    </g>
    
    <!-- Lock B -->
    <g transform="translate(45, 180)">
      <rect width="120" height="60" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="60" y="28" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">LOCK B</text>
      <text x="60" y="45" fill="#f8fafc" font-size="9" text-anchor="middle">Held by T2 🔒</text>
    </g>
    
    <!-- Thread 2 -->
    <g transform="translate(225, 180)">
      <circle cx="50" cy="50" r="40" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <text x="50" y="46" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">THREAD 2</text>
      <text x="50" y="62" fill="#cbd5e1" font-size="8" text-anchor="middle">Holds Lock B</text>
    </g>
    
    <!-- Arrows circular -->
    <!-- T1 requests Lock B -->
    <path d="M 75 140 L 75 170" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 2"/>
    <text x="15" y="160" fill="#ef4444" font-size="8" font-weight="bold">Wants B</text>
    
    <!-- T2 requests Lock A -->
    <path d="M 270 170 L 270 120" stroke="#ef4444" stroke-width="3" stroke-dasharray="4 2"/>
    <text x="280" y="150" fill="#ef4444" font-size="8" font-weight="bold">Wants A</text>
    
    <rect x="25" y="275" width="325" height="55" rx="6" fill="#450a0a" stroke="#ef4444"/>
    <text x="187" y="298" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">FATAL CIRCULAR DEPENDENCY</text>
    <text x="187" y="316" fill="#fca5a5" font-size="9" text-anchor="middle">Both threads sleep forever. CPU = 0%</text>
  </g>
  
  <!-- Right Side: Lock Hierarchy Solution -->
  <g transform="translate(435, 48)">
    <rect width="375" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="187" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">PREVENTION: GLOBAL LOCK ORDERING</text>
    
    <g transform="translate(25, 45)">
      <rect width="325" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="162" y="24" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">STRICT GLOBAL ORDER RULE</text>
      <text x="162" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Rank 1: Lock A  |  Rank 2: Lock B</text>
      <text x="162" y="58" fill="#38bdf8" font-size="8" text-anchor="middle">All threads must acquire Lock A BEFORE Lock B!</text>
    </g>
    
    <!-- Step 1 -->
    <g transform="translate(25, 130)">
      <rect width="325" height="50" rx="4" fill="#0f172a"/>
      <text x="20" y="28" fill="#38bdf8" font-size="10" font-weight="bold">1. Thread 1 acquires Lock A</text>
      <text x="20" y="42" fill="#cbd5e1" font-size="8">Thread 1 enters first stage cleanly</text>
    </g>
    
    <!-- Step 2 -->
    <g transform="translate(25, 190)">
      <rect width="325" height="55" rx="4" fill="#0f172a"/>
      <text x="20" y="26" fill="#f59e0b" font-size="10" font-weight="bold">2. Thread 2 attempts to acquire Lock A</text>
      <text x="20" y="42" fill="#cbd5e1" font-size="8">Thread 2 blocks BEFORE claiming Lock B!</text>
    </g>
    
    <!-- Step 3 -->
    <g transform="translate(25, 255)">
      <rect width="325" height="65" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="162" y="24" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">SUCCESS: NO CIRCULAR WAIT POSSIBLE</text>
      <text x="162" y="42" fill="#f8fafc" font-size="9" text-anchor="middle">Thread 1 completes, releases Lock B then A,</text>
      <text x="162" y="56" fill="#cbd5e1" font-size="8" text-anchor="middle">and Thread 2 proceeds cleanly with zero deadlock!</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Enforcing consistent global lock ordering eliminates the Circular Wait condition, making deadlocks mathematically impossible</text>
</svg>`,
      caption: {
        en: 'Circular wait freezes threads in mutual dependency; strict global lock ordering eliminates circular chains, preventing deadlocks entirely.',
        bn: 'সার্কুলার ওয়েট থ্রেডগুলোকে অচল করে ফেলে; তবে গ্লোবাল লক অর্ডারিং চক্রটি ভেঙে দিয়ে ডেডলক সম্পূর্ণ প্রতিরোধ করে।'
      },
    },
    {
      type: 'heading',
      id: 'deadlock-simulation-code',
      text: {
        en: 'Simulating Deadlock Detection and Lock Hierarchy Defense',
        bn: 'ডেডলক শনাক্তকরণ এবং লক হায়ারার্কি প্রতিরোধের সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how inverted lock acquisition causes deadlocks and how global ordering prevents them, examine the following simulation. It demonstrates both the circular deadlock trap and its resolution.',
        bn: 'লক নেওয়ার ভুল ক্রম কীভাবে ডেডলক তৈরি করে এবং সঠিক গ্লোবাল ক্রম কীভাবে তা সমাধান করে তা দেখতে নিচের কোডটি পর্যালোচনা করুন। এটি ডেডলক ফাঁদ ও তার সমাধান উভয়ই প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'deadlock-prevention-engine.js',
      code: `// Deadlock Reproduction & Lock Hierarchy Prevention Simulator
// Compares unordered circular wait against strict hierarchical locking

class NamedLock {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank; // Hierarchy rank for ordering
    this.owner = null;
  }
}

// 1. Simulating Unordered Lock Acquisition (Deadlock Hazard)
function testUnorderedLocking() {
  console.log('=== Step 1: Simulating Circular Wait Deadlock ===');
  const lockA = new NamedLock('Resource_A', 1);
  const lockB = new NamedLock('Resource_B', 2);

  const thread1_locks = [lockA, lockB]; // Thread 1 wants A then B
  const thread2_locks = [lockB, lockA]; // Thread 2 wants B then A (INVERTED!)

  console.log('Thread 1 order:', thread1_locks.map(l => l.name).join(' -> '));
  console.log('Thread 2 order:', thread2_locks.map(l => l.name).join(' -> '));

  // Circular condition check
  const hasCircularWait = (
    thread1_locks[0] === thread2_locks[1] &&
    thread1_locks[1] === thread2_locks[0]
  );

  if (hasCircularWait) {
    console.log('[ALERT] Circular dependency detected:');
    console.log('Thread 1 holds ' + lockA.name + ' while waiting for ' + lockB.name);
    console.log('Thread 2 holds ' + lockB.name + ' while waiting for ' + lockA.name);
    console.log('RESULT: FATAL DEADLOCK! Both threads frozen permanently.');
  }
}

// 2. Simulating Lock Hierarchy Defense (Zero Deadlock)
function testLockHierarchyDefense() {
  console.log('\\n=== Step 2: Enforcing Global Lock Hierarchy ===');
  const lockA = new NamedLock('Resource_A', 1);
  const lockB = new NamedLock('Resource_B', 2);

  // Both threads must sort locks by ascending numerical rank before acquiring
  const sortLocks = (locks) => [...locks].sort((a, b) => a.rank - b.rank);

  const thread1_ordered = sortLocks([lockA, lockB]);
  const thread2_ordered = sortLocks([lockB, lockA]); // Normalized!

  console.log('Thread 1 normalized order:', thread1_ordered.map(l => l.name).join(' -> '));
  console.log('Thread 2 normalized order:', thread2_ordered.map(l => l.name).join(' -> '));

  console.log('\\nExecution Sequence:');
  console.log('1. Thread 1 claims ' + thread1_ordered[0].name);
  console.log('2. Thread 2 attempts to claim ' + thread2_ordered[0].name + ' (Blocks cleanly before touching Rank 2!)');
  console.log('3. Thread 1 claims ' + thread1_ordered[1].name + ', completes work, releases all locks.');
  console.log('4. Thread 2 awakens, claims ' + thread2_ordered[0].name + ' and ' + thread2_ordered[1].name + ' without deadlock!');
  console.log('RESULT: CLEAN TERMINATION! Circular Wait was mathematically eliminated.');
}

testUnorderedLocking();
testLockHierarchyDefense();`,
      caption: {
        en: 'The simulation shows how inconsistent lock orders trigger circular wait, while ascending rank ordering eliminates deadlocks.',
        bn: 'সিমুলেশনটি দেখায় কীভাবে এলোমেলো লকিং ডেডলক ঘটায়, আর ধারাবাহিক র‍্যাংক সাজানো ডেডলক সম্পূর্ণ প্রতিরোধ করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Lock Ordering & Try-Lock Timeouts: Production Defenses',
        bn: 'লক অর্ডারিং এবং ট্রাই-লক টাইমআউট: প্রোডাকশন নিরাপত্তা কৌশল'
      },
      text: {
        en: 'How do production systems eliminate deadlocks? The industry standard is Lock Hierarchy: assign a strict numerical ranking to all locks in the system (for example, UserLock = 1, OrderLock = 2, PaymentLock = 3). Any thread that requires multiple locks must acquire them in ascending numerical order. If strict ordering is impossible, threads use try_lock with a timeout: if a second lock cannot be acquired within 50 milliseconds, the thread backs off, releases all its currently held locks, waits a randomized jitter interval, and retries.',
        bn: 'প্রোডাকশন সিস্টেমে কীভাবে ডেডলক দূর করা হয়? বহুল ব্যবহৃত কৌশল হলো লক হায়ারার্কি: সমস্ত লককে একটি নির্দিষ্ট সংখ্যাগত ক্রম দেওয়া হয় ( যেমন UserLock = ১, OrderLock = ২, PaymentLock = ৩ )। একাধিক লকের প্রয়োজন হলে থ্রেডকে অবশ্যই ছোট থেকে বড় সংখ্যা অনুসারে লক নিতে হয়। যদি কঠোর ক্রম মানা সম্ভব না হয়, তবে থ্রেডগুলো ট্রাই-লক (try_lock) টাইমআউট ব্যবহার করে: ৫০ মিলিসেকেন্ডের মধ্যে দ্বিতীয় লক না পেলে থ্রেডটি আগের সমস্ত লক ছেড়ে দেয় এবং কিছুক্ষণ পর পুনরায় চেষ্টা করে।'
      },
    },
  ],
  exercises: [
    {
      id: 'deadlock-ex-1',
      kind: 'predict',
      topic: "deadlocks",
      question: {
        en: 'How many Coffman conditions must hold simultaneously for a concurrent deadlock to occur? (4). Type the number.',
        bn: 'কনকারেন্ট ডেডলক ঘটার জন্য সর্বমোট কয়টি কফম্যান শর্ত একসাথে সত্য হতে হয়? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'All 4 Coffman conditions must be met.',
        bn: 'সমস্ত ৪ টি কফম্যান শর্ত সত্য হতে হয়।'
      },
      explanation: {
        en: 'All 4 conditions (Mutual Exclusion, Hold & Wait, No Preemption, Circular Wait) must hold at the same time for a deadlock to exist.',
        bn: 'ডেডলক হতে হলে ৪ টি শর্তই একসাথে সত্য হতে হয়। যেকোনো ১ টি ভাঙলে ডেডলক হয় না।'
      },
    },
    {
      id: 'deadlock-ex-2',
      kind: 'mcq',
      topic: "deadlocks",
      question: {
        en: 'What is the most effective engineering strategy for breaking the Circular Wait Coffman condition in multithreading?',
        bn: 'মাল্টি-থ্রেডিংয়ে সার্কুলার ওয়েট কফম্যান শর্তটি ভেঙে দেওয়ার জন্য সবচেয়ে কার্যকর কৌশল কোনটি?'
      },
      options: [
        {
          en: 'Enforcing a strict global lock hierarchy where all threads acquire multiple locks in identical, ascending numerical order',
          bn: 'একটি কঠোর গ্লোবাল লক হায়ারার্কি প্রয়োগ করা যেখানে সকল থ্রেড একাধিক লক সর্বদা একই ঊর্ধ্বমুখী সংখ্যাগত ক্রমে গ্রহণ করে',
        },
        {
          en: 'Unplugging the computer power cable from the wall',
          bn: 'দেয়াল থেকে কম্পিউটারের পাওয়ার ক্যাবলটি খুলে ফেলা',
        },
        {
          en: 'Writing all variable names using Spanish words',
          bn: 'সমস্ত ভেরিয়েবলের নাম স্প্যানিশ ভাষায় লেখা',
        },
        {
          en: 'Running code exclusively on laptop batteries',
          bn: 'কোড কেবলমাত্র ল্যাপটপ ব্যাটারিতে চালানো',
        },
      ],
      answer: 0,
      hint: {
        en: 'Global lock ranking prevents circular dependencies.',
        bn: 'গ্লোবাল লক র‍্যাংকিং চক্রাকার নির্ভরতা তৈরি হতে দেয় না।',
      },
      explanation: {
        en: 'If every thread acquires locks in the same hierarchical order, a circular dependency chain can never form.',
        bn: 'প্রতিটি থ্রেড একই ক্রমে লক নিলে বৃত্তাকার নির্ভরতা তৈরি হওয়া গাণিতিকভাবে অসম্ভব হয়ে পড়ে।'
      },
    },
    {
      id: 'deadlock-ex-3',
      kind: 'mcq',
      topic: "deadlocks",
      question: {
        en: 'How does a try-lock timeout pattern prevent permanent thread deadlocks when acquiring multiple locks?',
        bn: 'একাধিক লক নেওয়ার সময় ট্রাই-লক টাইমআউট প্যাটার্ন কীভাবে স্থায়ী ডেডলক রোধ করে?'
      },
      options: [
        {
          en: 'If a secondary lock cannot be acquired within the designated timeout, the thread releases all currently held locks, backs off, and retries later',
          bn: 'নির্ধারিত সময়ের মধ্যে দ্বিতীয় লকটি না পাওয়া গেলে থ্রেডটি আগের নেওয়া সমস্ত লক মুক্ত করে দেয় এবং কিছুক্ষণ বিরতি দিয়ে পুনরায় চেষ্টা করে',
        },
        {
          en: 'It deletes all user files stored on the solid state disk',
          bn: 'এটি এসএসডিতে থাকা ব্যবহারকারীর সমস্ত ফাইল মুছে ফেলে',
        },
        {
          en: 'It plays sound recordings of automobile horns through the speakers',
          bn: 'এটি স্পিকারের মাধ্যমে গাড়ির হর্নের শব্দ শোনাতে শুরু করে',
        },
        {
          en: 'It changes the screen resolution to black and white',
          bn: 'এটি স্ক্রিনের সমস্ত রঙ সাদাকালো করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Release existing locks on timeout to break the Hold and Wait condition.',
        bn: 'টাইমআউট হলে আগের লক ছেড়ে দিয়ে হোল্ড অ্যান্ড ওয়েট অবস্থা ভেঙে ফেলা।',
      },
      explanation: {
        en: 'Backing off and releasing held locks breaks the Hold and Wait condition, allowing other competing threads to make progress.',
        bn: 'পূর্ববর্তী লক ছেড়ে দিলে হোল্ড অ্যান্ড ওয়েট শর্তটি ভেঙে যায় এবং অন্য থ্রেডগুলো কাজ চালিয়ে যেতে পারে।'
      },
    },
    {
      id: 'deadlock-ex-4',
      kind: 'predict',
      topic: "deadlocks",
      question: {
        en: 'If breaking any 1 Coffman condition prevents deadlocks, how many conditions must be broken? (1). Type the number.',
        bn: 'যেকোনো ১ টি কফম্যান শর্ত ভাঙলে যদি ডেডলক সম্পূর্ণ প্রতিরোধ হয়, তবে ন্যূনতম কয়টি শর্ত ভাঙা প্রয়োজন? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Breaking just 1 condition is sufficient.',
        bn: 'মাত্র ১ টি শর্ত ভাঙলেই যথেষ্ট।'
      },
      explanation: {
        en: 'Because a deadlock requires all 4 conditions to hold simultaneously, breaking even 1 condition prevents deadlock entirely.',
        bn: 'যেহেতু ডেডলক হতে ৪ টি শর্তই সত্য হতে হয়, তাই কেবল ১ টি শর্ত ভাঙলেই ডেডলক হওয়া অসম্ভব।'
      },
    },
  ],
  quiz: {
    id: "deadlocks-quiz",
    title: {
      en: 'Deadlocks and Coffman Conditions Quiz',
      bn: 'ডেডলক এবং কফম্যান শর্ত কুইজ'
    },
    questions: [
      {
        id: 'deadlock-qz-1',
        kind: 'mcq',
        topic: 'dining-philosophers-deadlock',
        question: {
          en: 'Why does the classic Dining Philosophers synchronization challenge inherently deadlock under naive locking?',
          bn: 'সাধারণ নিয়মে লক ব্যবহার করলে ডাইনিং ফিলোসফার্স সমস্যায় কেন অবধারিতভাবে ডেডলক ঘটে?'
        },
        options: [
          {
            en: 'If every philosopher picks up their left chopstick simultaneously, all right chopsticks are occupied, producing a complete Circular Wait where everyone starves',
            bn: 'প্রত্যেক দার্শনিক যদি একই সাথে নিজের বাম দিকের চপস্টিক তুলে নেন, তবে ডান দিকের চপস্টিক আটকে গিয়ে সম্পূর্ণ সার্কুলার ওয়েট তৈরি হয় এবং সবাই অনাহারে থাকে',
          },
          {
            en: 'Because chopsticks conduct electricity that shocks the computer processor',
            bn: 'কারণ চপস্টিক বিদ্যুৎ পরিবহন করে প্রসেসরে শক দেয়',
          },
          {
            en: 'Because computer software cannot comprehend philosophical discussions',
            bn: 'কারণ কম্পিউটার সফটওয়্যার দর্শনের আলোচনা বুঝতে পারে না',
          },
          {
            en: 'Because philosophers eat food faster than computer CPUs can calculate',
            bn: 'কারণ সিপিইউর গণনার চেয়ে দার্শনিকরা দ্রুত খাবার খান',
          },
        ],
        answer: 0,
        hint: {
          en: 'Everyone holds their left resource and waits for their right resource, forming a circular chain.',
          bn: 'সবাই বামের রিসোর্স ধরে ডানের রিসোর্সের জন্য অপেক্ষা করায় বৃত্তাকার চক্র তৈরি হয়।',
        },
        explanation: {
          en: 'When all philosophers claim one fork and wait for the next, Circular Wait forms. Solved by asymmetric seating or resource hierarchies.',
          bn: 'সবাই একটি কাঁটাচামচ নিয়ে পরেরটির জন্য অপেক্ষা করলে সার্কুলার ওয়েট হয়। নিয়ম বদলে বা জোর-বিজোড় পদ্ধতিতে এর সমাধান করা হয়।'
        },
      },
      {
        id: 'deadlock-qz-2',
        kind: 'mcq',
        topic: 'deadlock-vs-livelock',
        question: {
          en: 'What is the technical distinction between a Deadlock and a Livelock in concurrent systems?',
          bn: 'কনকারেন্ট সিস্টেমে ডেডলক (Deadlock) এবং লাইভলকের (Livelock) মধ্যে প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'In a Deadlock, threads are suspended asleep (0% CPU); in a Livelock, threads actively execute state changes and back off in lockstep, consuming 100% CPU while making zero forward progress',
            bn: 'ডেডলকে থ্রেডগুলো ঘুমে আটকে থাকে ( ০% সিপিইউ ); আর লাইভলকে থ্রেডগুলো সক্রিয়ভাবে একে অপরকে পথ ছেড়ে দিতে গিয়ে ১০০% সিপিইউ খরচ করে কিন্তু কোনো আসল কাজ হয় না',
          },
          {
            en: 'Deadlocks only occur in airplanes; Livelocks only occur in submarines',
            bn: 'ডেডলক কেবল বিমানে হয়; আর লাইভলক কেবল সাবমেরিনে ঘটে',
          },
          {
            en: 'Deadlocks make the monitor bright; Livelocks make the keyboard loud',
            bn: 'ডেডলক স্ক্রিন উজ্জ্বল করে; আর লাইভলক কিবোর্ডের শব্দ বাড়ায়',
          },
          {
            en: 'Both terms represent identical conditions with zero difference',
            bn: 'উভয় শব্দই কোনো পার্থক্য ছাড়া হুবহু একই অবস্থাকে নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Deadlock sleeps at 0% CPU; Livelock spins actively at 100% CPU without progress.',
          bn: 'ডেডলক ০% সিপিইউতে ঘুমায়; লাইভলক ১০০% সিপিইউতে কাজ ছাড়াই ঘুরতে থাকে।',
        },
        explanation: {
          en: 'Livelock is like two polite people continually stepping in the same direction to let the other pass. States change constantly, but no progress occurs.',
          bn: 'লাইভলক হলো দুজন মানুষের একে অপরকে পথ ছাড়তে গিয়ে বারবার একই দিকে সরে পথ আটকে রাখার মতো অবস্থা।'
        },
      },
      {
        id: 'deadlock-qz-3',
        kind: 'mcq',
        topic: 'dbms-deadlock-detection',
        question: {
          en: 'How do production relational Database Management Systems (like PostgreSQL and MySQL) resolve deadlocks between transactions?',
          bn: 'পোস্টগ্রেস বা মাইএসকিউএল ডাটাবেজ কীভাবে ট্রানজ্যাকশনের মধ্যকার ডেডলক শনাক্ত ও সমাধান করে?'
        },
        options: [
          {
            en: 'They maintain a Wait-For Graph (WFG) and run background cycle-detection algorithms; when a cycle is found, the engine aborts and rolls back the lowest-cost transaction',
            bn: 'তারা একটি Wait-For Graph (WFG) পরিচালনা করে সাইকেল ডিটেকশন অ্যালগরিদম চালায়; চক্র ধরা পড়লে ইঞ্জিন কম খরচের যেকোনো একটি ট্রানজ্যাকশন রোলব্যাক করে দেয়',
          },
          {
            en: 'They format the database hard drive and delete all tables',
            bn: 'তারা ডাটাবেজ হার্ড ড্রাইভ ফরম্যাট করে সমস্ত টেবিল মুছে ফেলে',
          },
          {
            en: 'They send physical warning messages to all client web browsers',
            bn: 'তারা সমস্ত ক্লায়েন্ট ব্রাউজারে সতর্কবার্তা পাঠায়',
          },
          {
            en: 'They permanently turn off the database network connection',
            bn: 'তারা ডাটাবেজের নেটওয়ার্ক সংযোগ চিরতরে বিচ্ছিন্ন করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Wait-For Graph cycle detection: abort and rollback one victim transaction.',
          bn: 'Wait-For Graph দিয়ে চক্র শনাক্ত করে একটি ট্রানজ্যাকশন বাতিল ও রোলব্যাক করা।',
        },
        explanation: {
          en: 'DBMS engines inspect wait graphs for cycles. Aborting one transaction breaks the circular wait and releases its row locks.',
          bn: 'ডাটাবেজ ইঞ্জিন গ্রাফে চক্র খোঁজে। একটি ট্রানজ্যাকশন বাতিল করলেই তার লক মুক্ত হয় এবং বাকিরা কাজ করতে পারে।'
        },
      },
      {
        id: 'deadlock-qz-4',
        kind: 'mcq',
        topic: 'why-no-preemption-hard-to-break',
        question: {
          en: 'Why is it difficult for an operating system to resolve application deadlocks by forcibly breaking the No Preemption condition?',
          bn: 'নো প্রিম্পশন (No Preemption) শর্তটি জোরপূর্বক ভেঙে ওএস কেন সাধারণ অ্যাপ্লিকেশনের ডেডলক সমাধান করতে পারে না?'
        },
        options: [
          {
            en: 'Forcibly seizing a mutex from a thread leaves memory structures half-written, uncommitted, and corrupted, violating critical section invariants',
            bn: 'একটি থ্রেডের কাছ থেকে জোর করে মিউটেক্স ছিনিয়ে নিলে মেমোরির ডাটা অর্ধসমাপ্ত ও মারাত্মকভাবে ক্ষতিগ্রস্ত হয়, যা ক্রিটিক্যাল সেকশনের নীতি লঙ্ঘন করে',
          },
          {
            en: 'Because operating systems are forbidden from interacting with computer memory',
            bn: 'কারণ অপারেটিং সিস্টেমের মেমোরির সাথে যোগাযোগ করার অনুমতি নেই',
          },
          {
            en: 'Because computer hardware melts whenever locks are taken away',
            bn: 'কারণ লক ছিনিয়ে নিলে কম্পিউটারের হার্ডওয়্যার গলে যায়',
          },
          {
            en: 'Because mutex locks are stored inside the physical power cable',
            bn: 'কারণ মিউটেক্স লকগুলো ফিজিক্যাল পাওয়ার ক্যাবলের ভেতরে থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Preempting a lock leaves shared memory half-written and corrupted.',
          bn: 'জোর করে লক কাড়লে শেয়ার্ড মেমোরি বিকৃত ও করাপ্ট হয়ে যায়।',
        },
        explanation: {
          en: 'Unlike CPU registers, mutexes protect shared data state. Forcible preemption leaves invariants broken because the thread could not restore consistent state.',
          bn: 'মিউটেক্স গুরুত্বপূর্ণ ডাটা রক্ষা করে। জোর করে লক কেড়ে নিলে ডাটা অর্ধসমাপ্ত অবস্থায় থেকে গিয়ে পুরো সিস্টেমকে করাপ্ট করে।'
        },
      },
    ],
  },
  next: {
    slug: 'thread-pools',
    title: {
      en: 'Thread Pools: Worker Queues & High-Throughput Concurrency',
      bn: 'থ্রেড পুল: ওয়ার্কার কিউ এবং উচ্চগতির কনকারেন্সি'
    },
  },
};
