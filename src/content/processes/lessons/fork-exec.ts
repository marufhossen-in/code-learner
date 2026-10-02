import type { Lesson } from '../../../lib/types';

export const ForkExecLesson: Lesson = {
  slug: 'fork-exec',
  tech: 'processes',
  title: {
    en: 'Fork & Exec: Process Creation, Return Values & Copy-On-Write',
    bn: 'Fork এবং Exec: প্রসেস সৃষ্টি, রিটার্ন মান এবং কপি-অন-রাইট মেকানিজম'
  },
  summary: {
    en: 'Master how Unix and POSIX operating systems create new processes through the two-step fork() and execve() pattern. Understand the magic of fork() returning twice: once in the parent returning the child PID and once in the child returning 0. Explore Copy-On-Write memory optimization that prevents physical memory duplication, trace how execve() transforms the cloned child into a new program, and diagnose the O_CLOEXEC security flag.',
    bn: 'ইউনিক্স এবং পসিক্স অপারেটিং সিস্টেম কীভাবে দুই-ধাপের fork() ও execve() প্যাটার্নের মাধ্যমে নতুন প্রসেস তৈরি করে তা আয়ত্ত করুন। fork() দুইবার রিটার্ন করার রহস্য বুঝুন: একবার প্যারেন্টে চাইল্ডের PID প্রদান করে এবং একবার চাইল্ডে ০ প্রদান করে। কপি-অন-রাইট মেমোরি অপ্টিমাইজেশন অন্বেষণ করুন যা ফিজিক্যাল র‍্যামের অনর্থক কপি প্রতিহত করে, execve() কীভাবে ক্লোন করা চাইল্ডকে নতুন প্রোগ্রামে রূপান্তর করে তা জানুন এবং O_CLOEXEC নিরাপত্তা ফ্ল্যাগ শিখুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'unix-two-step-process-creation',
      text: {
        en: 'The Unix Two-Step Creation Pattern: fork() followed by execve()',
        bn: 'ইউনিক্সের দুই-ধাপের প্রসেস সৃষ্টি পদ্ধতি: fork() এবং execve()'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In many operating systems, launching a program is a monolithic operation where a single API call creates an address space and loads an executable. In Unix and Linux systems, process creation is decoupled into two separate system calls: fork() to clone the existing process, and execve() to replace the cloned space with a new program image.',
        bn: 'অনেক অপারেটিং সিস্টেমে কোনো প্রোগ্রাম চালু করার কাজটি একটি একক এপিআই কলের মাধ্যমে সম্পন্ন হয় যা মেমোরি স্পেস তৈরি ও ফাইল লোড উভয় কাজই করে। কিন্তু ইউনিক্স ও লিনাক্স সিস্টেমে প্রসেস সৃষ্টিকে দুটি পৃথক ধাপে ভাগ করা হয়েছে: বর্তমান প্রসেসের হুবহু প্রতিরূপ তৈরি করতে fork() এবং ক্লোন করা মেমোরিতে নতুন প্রোগ্রাম লোড করতে execve() ব্যবহৃত হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'This decoupled architecture provides unmatched flexibility. In the window between fork() and execve(), the child process can configure input/output file descriptors, set up IPC pipes, lower user permissions, or switch directories without modifying the state of the parent process.',
        bn: 'এই দ্বি-ধাপের নকশা সিস্টেমে চমৎকার নমনীয়তা প্রদান করে। fork() এবং execve() কলের মধ্যবর্তী সময়ে চাইল্ড প্রসেসটি প্যারেন্টের কোনো ক্ষতি না করেই ইনপুট/আউটপুট ফাইল ডেসক্রিপ্টর পুনর্নির্ধারণ, পাইপ সংযোগ স্থাপন বা নিরাপত্তা পারমিশন পরিবর্তন করতে পারে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. The Duality of fork(): Called Once, Returns Twice',
            bn: '১. fork()-এর দ্বৈত রূপ: একবার কল, দুইবার রিটার্ন'
          },
          text: {
            en: 'The fork() system call creates an identical clone of the caller. To the parent process, fork() returns the positive integer PID of the child (e.g. 4120). To the newly created child process, fork() returns 0. If creation fails due to system limits, it returns -1.',
            bn: 'fork() সিস্টেম কল কলারের একটি অবিকল ক্লোন তৈরি করে। প্যারেন্ট প্রসেসের কাছে fork() নতুন চাইল্ডের ধনাত্মক পূর্ণসংখ্যা PID রিটার্ন করে ( যেমন ৪১২০ )। আর নতুন সৃষ্ট চাইল্ডের কাছে fork() ০ রিটার্ন করে। কোনো সীমাবদ্ধতার কারণে ব্যর্থ হলে এটি -১ রিটার্ন করে।'
          },
        },
        {
          title: {
            en: '2. Copy-On-Write (COW) Memory Optimization',
            bn: '২. কপি-অন-রাইট (COW) মেমোরি অপ্টিমাইজেশন'
          },
          text: {
            en: 'If a parent process consumes 4 Gigabytes of memory, copying all physical pages on fork() would be sluggish and waste DRAM. The kernel marks all virtual pages as Read-Only and shares physical frames between parent and child, completing fork() in under 1 millisecond.',
            bn: 'কোনো প্যারেন্ট প্রসেস যদি ৪ গিগাবাইট মেমোরি ব্যবহার করে, তবে fork()-এর সময় সমস্ত পেজ কপি করা অত্যন্ত ধীরগতির হতো। কার্নেল সমস্ত ভার্চুয়াল পেজকে রিড-অনলি হিসেবে চিহ্নিত করে প্যারেন্ট ও চাইল্ডের মাঝে শেয়ার করে দেয়, যার ফলে ১ মিলি-সেকেন্ডের কম সময়ে fork() সম্পন্ন হয়।'
          },
        },
        {
          title: {
            en: '3. Page Faults Duplicate Mutated Pages',
            bn: '৩. পেজ ফল্টের মাধ্যমে পরিবর্তিত পেজ ডুপ্লিকেশন'
          },
          text: {
            en: 'When either parent or child executes a write instruction to a shared page, the CPU MMU catches the write on the read-only page and triggers a page fault. The operating system kernel duplicates only that single 4096-byte page frame, preserving isolation.',
            bn: 'প্যারেন্ট বা চাইল্ড যখন শেয়ার্ড কোনো পেজে ডাটা লিখতে যায়, তখন সিপিইউ MMU রিড-অনলি পেজে রাইট করার চেষ্টা ধরে ফেলে পেজ ফল্ট দেয়। অপারেটিং সিস্টেম তখন কেবল সেই নির্দিষ্ট ৪০৯৬ বাইটের পেজটি কপি করে উভয়কে স্বাধীনভাবে কাজ করতে দেয়।'
          },
        },
        {
          title: {
            en: '4. execve() Replaces the Process Image',
            bn: '৪. execve() প্রসেসের মেমোরি প্রতিস্থাপন করে'
          },
          text: {
            en: 'Once the child finishes configuring descriptors, it invokes execve(/bin/ls). The kernel wipes the cloned virtual space, loads the new binary segments, and begins executing the new code while preserving the existing PID and parent relationship.',
            bn: 'চাইল্ড যখন তার প্রয়োজনীয় কনফিগারেশন শেষ করে, তখন এটি execve(/bin/ls) কল করে। কার্নেল তখন ক্লোন করা মেমোরি খালি করে নতুন বাইনারি কোড লোড করে এবং বর্তমান PID অক্ষত রেখেই নতুন প্রোগ্রামটি চালাতে শুরু করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Fork & Exec Pattern: Return Value Branching & Copy-On-Write Splitting',
        bn: 'Fork এবং Exec প্যাটার্ন: রিটার্ন মান ব্রাঞ্চিং এবং কপি-অন-রাইট বিভাজন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Fork and execve lifecycle diagram showing Copy-On-Write memory and parent-child PID branching">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">FORK &amp; EXEC LIFECYCLE: RETURN DUALITY &amp; COPY-ON-WRITE</text>
  
  <!-- Left Side: Parent Process calling fork -->
  <g transform="translate(30, 48)">
    <rect width="240" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="120" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">PARENT PROCESS (PID 1000)</text>
    
    <rect x="15" y="38" width="210" height="40" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="120" y="62" fill="#f8fafc" font-size="11" text-anchor="middle">pid_t child = fork();</text>
    
    <!-- Branch return -->
    <rect x="15" y="88" width="210" height="45" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="120" y="108" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">PARENT RECEIVES: 4120</text>
    <text x="120" y="122" fill="#cbd5e1" font-size="9" text-anchor="middle">(Positive integer = Child PID)</text>
  </g>
  
  <!-- Child Process Branch -->
  <g transform="translate(30, 225)">
    <rect width="240" height="175" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="120" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">CLONED CHILD (PID 4120)</text>
    
    <!-- Child return -->
    <rect x="15" y="38" width="210" height="45" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="120" y="58" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">CHILD RECEIVES: 0</text>
    <text x="120" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">(Identifies execution as child!)</text>
    
    <!-- Calling execve -->
    <rect x="15" y="92" width="210" height="65" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="120" y="112" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">execve('/bin/ls', args)</text>
    <text x="120" y="128" fill="#cbd5e1" font-size="9" text-anchor="middle">Wipes cloned memory space</text>
    <text x="120" y="142" fill="#38bdf8" font-size="9" text-anchor="middle">Preserves PID 4120!</text>
  </g>
  
  <!-- Right Side: Physical DRAM Copy-On-Write Engine -->
  <g transform="translate(300, 48)">
    <rect width="510" height="352" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="255" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">PHYSICAL DRAM MEMORY &amp; COPY-ON-WRITE (COW)</text>
    
    <!-- Shared Read-Only Page 1 -->
    <g transform="translate(20, 42)">
      <rect width="470" height="55" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="100" y="32" fill="#38bdf8" font-size="11" font-weight="bold">Page Frame 80 (4KB)</text>
      <text x="280" y="24" fill="#cbd5e1" font-size="10">Shared Read-Only (R--)</text>
      <text x="280" y="42" fill="#10b981" font-size="9">Mapped in both PID 1000 &amp; PID 4120</text>
      <text x="440" y="32" fill="#6ee7b7" font-size="9" font-weight="bold">NO COPY</text>
    </g>
    
    <!-- Shared Read-Only Page 2 -->
    <g transform="translate(20, 108)">
      <rect width="470" height="55" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="100" y="32" fill="#38bdf8" font-size="11" font-weight="bold">Page Frame 81 (4KB)</text>
      <text x="280" y="24" fill="#cbd5e1" font-size="10">Shared Read-Only (R--)</text>
      <text x="280" y="42" fill="#10b981" font-size="9">Mapped in both PID 1000 &amp; PID 4120</text>
      <text x="440" y="32" fill="#6ee7b7" font-size="9" font-weight="bold">NO COPY</text>
    </g>
    
    <!-- COW Trigger Event -->
    <g transform="translate(20, 175)">
      <rect width="470" height="70" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="235" y="22" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">WRITE TRIGGER: Child writes to Page 82 (count++)</text>
      <text x="235" y="42" fill="#fca5a5" font-size="10" text-anchor="middle">Hardware MMU fires Page Fault -> OS duplicates single 4KB Frame</text>
      <text x="235" y="58" fill="#cbd5e1" font-size="9" text-anchor="middle">Frame 82 remains with Parent; Frame 99 allocated for Child (RW-)</text>
    </g>
    
    <!-- Duplicated Frame -->
    <g transform="translate(20, 255)">
      <rect width="220" height="60" rx="6" fill="#0f172a" stroke="#0284c7"/>
      <text x="110" y="26" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frame 82 (Parent Copy)</text>
      <text x="110" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Private to PID 1000</text>
      
      <rect x="250" y="0" width="220" height="60" rx="6" fill="#0f172a" stroke="#c084fc"/>
      <text x="360" y="26" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Frame 99 (Child Copy)</text>
      <text x="360" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Private to PID 4120</text>
    </g>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">fork() returns PID to parent and 0 to child; COW duplicates only pages modified by write operations</text>
</svg>`,
      caption: {
        en: 'fork() returns the child PID to the parent and 0 to the child. Copy-On-Write duplicates physical pages only when modified.',
        bn: 'fork() প্যারেন্টকে চাইল্ডের পিআইডি এবং চাইল্ডকে ০ প্রদান করে। কপি-অন-রাইট কেবল তখনই ফিজিক্যাল পেজ কপি করে যখন তাতে ডাটা লেখা হয়।'
      },
    },
    {
      type: 'heading',
      id: 'fork-exec-branching-and-cow-code',
      text: {
        en: 'Fork-Exec Branching & Copy-On-Write Simulator',
        bn: 'Fork-Exec ব্রাঞ্চিং এবং কপি-অন-রাইট সিমুলেটর'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Understanding how fork() branch logic operates in C and systems code is vital for operating systems engineering. The following code simulates process cloning, return value branching, and tracks how Copy-On-Write isolates mutated memory pages.',
        bn: 'সি এবং সিস্টেম প্রোগ্রামিংয়ে fork() ব্রাঞ্চ লজিক কীভাবে কাজ করে তা বোঝা অত্যন্ত জরুরি। নিচের কোডটি প্রসেস ক্লোনিং, রিটার্ন মান মূল্যায়ন এবং কপি-অন-রাইটের মাধ্যমে পেজ বিভাজন প্রক্রিয়াটি প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'fork-exec-simulator.js',
      code: `// Deterministic POSIX fork() & execve() Simulator with Copy-On-Write
// Demonstrates return value duality and memory page fault deduplication

class ProcessKernel {
  constructor() {
    this.nextPid = 4120;
    this.processTable = new Map();
  }

  // Simulates POSIX fork() system call
  fork(parentPid) {
    const childPid = this.nextPid++;
    const childProcess = {
      pid: childPid,
      ppid: parentPid,
      command: 'node-worker',
      sharedCowPages: 100, // 100 shared 4KB pages
      privatePages: 0,
      openFds: [0, 1, 2]
    };

    this.processTable.set(childPid, childProcess);

    // fork() returns child PID to parent, and 0 to child
    return {
      toParent: childPid,
      toChild: 0
    };
  }

  // Simulates memory write triggering COW page fault
  writeToPage(pid) {
    const proc = this.processTable.get(pid);
    if (proc && proc.sharedCowPages > 0) {
      proc.sharedCowPages--; // Page unshared
      proc.privatePages++;   // New 4KB physical frame allocated
      return { status: 'COW_PAGE_FAULT', copiedBytes: 4096 };
    }
    return { status: 'NORMAL_WRITE' };
  }

  // Simulates execve() replacing process memory
  execve(pid, binaryPath) {
    const proc = this.processTable.get(pid);
    if (!proc) throw new Error('PID_NOT_FOUND');

    proc.command = binaryPath;
    proc.sharedCowPages = 0;
    proc.privatePages = 15; // Loaded fresh binary segments
    return { status: 'IMAGE_REPLACED', binary: binaryPath, retainedPid: proc.pid };
  }
}

const kernel = new ProcessKernel();
const parentPid = 1000;

console.log('=== Step 1: Parent (PID 1000) Invokes fork() ===');
const forkResult = kernel.fork(parentPid);

console.log('Parent Process Branch: Received return value =', forkResult.toParent, '(Child PID)');
console.log('Child Process Branch : Received return value =', forkResult.toChild, '(Identifies as Child)');

console.log('\\n=== Step 2: Copy-On-Write (COW) Memory Mutation ===');
const fault = kernel.writeToPage(forkResult.toParent);
console.log('MMU Event:', fault.status, '-> Duplicated', fault.copiedBytes, 'bytes in DRAM');
console.log('Child Process Memory:', kernel.processTable.get(forkResult.toParent));

console.log('\\n=== Step 3: Child Invokes execve() ===');
const execResult = kernel.execve(forkResult.toParent, '/usr/bin/python3');
console.log('Execve Result:', execResult.status);
console.log('Binary Active:', execResult.binary, '| Preserved PID:', execResult.retainedPid);
console.log('Summary: fork() duplicated zero physical pages until write; execve replaced code cleanly!');`,
      caption: {
        en: 'The simulation traces fork() returning child PID 4120 to the parent and 0 to the child, with COW duplicating 4096 bytes upon write.',
        bn: 'সিমুলেশনটি fork()-এ প্যারেন্টকে ৪১২০ এবং চাইল্ডকে ০ রিটার্ন করা এবং লেখার সময় COW দ্বারা ৪০৯৬ বাইট কপি করা প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The Security Danger of Leaked File Descriptors Across Exec',
        bn: 'Exec কলের মাধ্যমে ফাইল ডেসক্রিপ্টর ফাঁসের মারাত্মক নিরাপত্তা ঝুঁকি'
      },
      text: {
        en: 'When a process invokes execve(), all open file descriptors remain inherited by default unless explicitly configured otherwise. In 2012, numerous production web applications experienced critical security breaches when privileged database connections and cryptographic sockets inadvertently leaked into unprivileged child helper scripts. To eliminate this vulnerability, always open sensitive files and network sockets with the O_CLOEXEC flag, ensuring the operating system automatically closes the descriptor before the new binary executes.',
        bn: 'কোনো প্রসেস যখন execve() কল করে, তখন পূর্বে উন্মুক্ত থাকা সমস্ত ফাইল ডেসক্রিপ্টর স্বয়ংক্রিয়ভাবে নতুন প্রোগ্রামে চলে যায়। ২০১২ সালে বেশ কিছু প্রোডাকশন ওয়েব সার্ভারে মারাত্মক নিরাপত্তা বিপর্যয় ঘটেছিল কারণ ডাটাবেজের গোপন সকেটগুলো ভুলে চাইল্ড স্ক্রিপ্টের কাছে ফাঁস হয়ে গিয়েছিল। এই ঝুঁকি দূর করতে সর্বদা সংবেদনশীল ফাইল ও সকেট খোলার সময় O_CLOEXEC ফ্ল্যাগ ব্যবহার করুন, যা নিশ্চিত করে যে নতুন বাইনারি চালু হওয়ার আগেই কার্নেল ফাইল ডেসক্রিপ্টরটি বন্ধ করে দেবে।'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-fork-ex-1',
      kind: 'predict',
      question: {
        en: 'What integer value does the fork() system call return inside the newly created child process? (0). Type the number.',
        bn: 'নতুন তৈরি হওয়া চাইল্ড প্রসেসের ভেতরে fork() সিস্টেম কল কোন পূর্ণসংখ্যা মান রিটার্ন করে? ( ০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'fork() returns 0 to the child process.',
        bn: 'fork() চাইল্ড প্রসেসের কাছে ০ রিটার্ন করে।'
      },
      explanation: {
        en: 'Returning 0 enables the child process to distinguish itself from the parent and execute child-specific logic.',
        bn: '০ রিটার্ন পাওয়ার মাধ্যমেই চাইল্ড প্রসেস বুঝতে পারে যে সে চাইল্ড এবং নিজস্ব কোড চালানো শুরু করে।'
      },
    },
    {
      id: 'proc-fork-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the architectural purpose of Copy-On-Write (COW) memory management during process forking?',
        bn: 'প্রসেস ফর্কের সময় কপি-অন-রাইট (COW) মেমোরি ব্যবস্থাপনার মূল আর্কিটেকচারাল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To avoid duplicating physical memory pages until one of the processes actually writes to a page, making fork() near instantaneous',
          bn: 'কোনো একটি প্রসেস কোনো পেজে ডাটা না লেখা পর্যন্ত ফিজিক্যাল মেমোরি পেজ কপি করা থেকে বিরত থাকা, যার ফলে fork() চোখের পলকে সম্পন্ন হয়',
        },
        {
          en: 'To allow computers to store data on physical paper prints',
          bn: 'কম্পিউটারকে কাগজের প্রিন্টআউটে ডাটা জমা রাখার সুবিধা দেওয়ার জন্য',
        },
        {
          en: 'To convert digital audio signals into analog radio waves',
          bn: 'ডিজিটাল অডিও সিগন্যালকে এনালগ রেডিও তরঙ্গে রূপান্তর করার জন্য',
        },
        {
          en: 'To make computer monitors display only three colors',
          bn: 'কম্পিউটার মনিটরে কেবল তিনটি রঙ দেখানোর ব্যবস্থা করার জন্য',
        },
      ],
      answer: 0,
      hint: {
        en: 'Deferring physical memory copies until write operations occur.',
        bn: 'ডাটা লেখার আগ পর্যন্ত ফিজিক্যাল মেমোরি কপি করার কাজ স্থগিত রাখা।',
      },
      explanation: {
        en: 'COW shares read-only pages between parent and child, allocating private memory only when pages are modified.',
        bn: 'COW প্যারেন্ট ও চাইল্ডের মাঝে রিড-অনলি পেজ শেয়ার করে রাখে এবং কেবল পেজ পরিবর্তনের সময় নতুন মেমোরি বরাদ্দ দেয়।'
      },
    },
    {
      id: 'proc-fork-ex-3',
      kind: 'mcq',
      question: {
        en: 'What happens to the Process Identifier (PID) when a child process executes the execve() system call?',
        bn: 'একটি চাইল্ড প্রসেস যখন execve() সিস্টেম কল পরিচালনা করে, তখন তার প্রসেস আইডির (PID) কী ঘটে?'
      },
      options: [
        {
          en: 'The PID remains identical; the process virtual memory image is completely replaced by the new binary executable',
          bn: 'পিআইডি হুবহু অপরিবর্তিত থাকে; কেবল প্রসেসের সম্পূর্ণ মেমোরি নতুন বাইনারি প্রোগ্রাম দিয়ে প্রতিস্থাপিত হয়',
        },
        {
          en: 'The PID is multiplied by 1000 automatically',
          bn: 'পিআইডি স্বয়ংক্রিয়ভাবে ১০০০ দিয়ে গুণ হয়ে যায়',
        },
        {
          en: 'The PID changes to a random English word',
          bn: 'পিআইডি একটি এলোমেলো ইংরেজি শব্দে রূপান্তরিত হয়',
        },
        {
          en: 'The operating system permanently deletes the CPU',
          bn: 'অপারেটিং সিস্টেম সিপিইউকে চিরতরে মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'The PID is preserved; only the memory contents change.',
        bn: 'পিআইডি অক্ষত থাকে; কেবল মেমোরির কোড ও ডাটা পরিবর্তিত হয়।',
      },
      explanation: {
        en: 'execve() replaces the calling process text, data, and stack segments with the new program while retaining the same PID.',
        bn: 'execve() একই পিআইডি বজায় রেখে প্রসেসের মেমোরিতে নতুন প্রোগ্রাম স্থাপন করে।'
      },
    },
    {
      id: 'proc-fork-ex-4',
      kind: 'predict',
      question: {
        en: 'What integer value does the fork() system call return if process creation fails due to system memory or PID exhaustion? (-1). Type the number.',
        bn: 'মেমোরি স্বল্পতা বা পিআইডি শেষ হয়ে যাওয়ার কারণে যদি fork() সিস্টেম কল ব্যর্থ হয়, তবে এটি কোন মান রিটার্ন করে? ( -১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '-1',
      hint: {
        en: 'Fork failure returns negative one: -1.',
        bn: 'ফর্ক ব্যর্থ হলে ঋণাত্মক এক রিটার্ন করে: -১।'
      },
      explanation: {
        en: 'A return value of -1 signals to the parent that the kernel failed to spawn a new process.',
        bn: '-১ রিটার্ন মান প্যারেন্টকে জানিয়ে দেয় যে কার্নেল নতুন প্রসেস তৈরি করতে ব্যর্থ হয়েছে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Fork & Exec System Calls Quiz',
      bn: 'Fork এবং Exec সিস্টেম কল কুইজ'
    },
    questions: [
      {
        id: 'proc-fork-qz-1',
        kind: 'mcq',
        topic: 'why-fork-exec-decoupled',
        question: {
          en: 'Why did the creators of Unix decouple process creation into two distinct system calls (fork and exec) instead of providing a single CreateProcess call?',
          bn: 'ইউনিক্সের নির্মাতারা একক CreateProcess কলের বদলে প্রসেস সৃষ্টিকে কেন fork এবং exec দুটি পৃথক ধাপে বিভক্ত করেছিলেন?'
        },
        options: [
          {
            en: 'Decoupling enables the child process to customize file descriptors, environment variables, user permissions, and pipes before loading the target binary',
            bn: 'এই বিভাজনের ফলে নতুন প্রোগ্রাম লোড করার আগেই চাইল্ড প্রসেস তার ফাইল ডেসক্রিপ্টর, ভেরিয়েবল, পারমিশন এবং পাইপ ইচ্ছেমতো প্রস্তুত করতে পারে',
          },
          {
            en: 'Because computer keyboards in the 1970s could only type one word per minute',
            bn: 'কারণ ১৯৭০-এর দশকের কিবোর্ডে প্রতি মিনিটে কেবল একটি শব্দ টাইপ করা যেত',
          },
          {
            en: 'Because computer monitors can only display text in black and white',
            bn: 'কারণ কম্পিউটার মনিটর কেবল সাদা-কালো লেখা প্রদর্শন করতে পারত',
          },
          {
            en: 'To make operating systems consume double the electricity',
            bn: 'অপারেটিং সিস্টেম যেন দ্বিগুণ বিদ্যুৎ খরচ করে তা নিশ্চিত করতে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Customizing I/O descriptors and environment in the child before exec.',
          bn: 'এক্সিকিউট করার আগেই চাইল্ডের I/O ডেসক্রিপ্টর ও পরিবেশ প্রস্তুত করার সুবিধা।',
        },
        explanation: {
          en: 'The fork/exec split gives shells and supervisors full control over I/O redirection and process isolation before the new program runs.',
          bn: 'fork/exec বিভাজন নতুন প্রোগ্রাম চলার আগেই শেলকে I/O রিডাইরেকশন এবং পরিবেশ নিয়ন্ত্রণের পূর্ণ ক্ষমতা দেয়।'
        },
      },
      {
        id: 'proc-fork-qz-2',
        kind: 'mcq',
        topic: 'cow-fault-handling',
        question: {
          en: 'How does the operating system kernel handle an instruction attempting to write to a Copy-On-Write memory page?',
          bn: 'কপি-অন-রাইট মেমোরি পেজে কোনো প্রসেস কিছু লেখার চেষ্টা করলে অপারেটিং সিস্টেম কার্নেল কীভাবে তা পরিচালনা করে?'
        },
        options: [
          {
            en: 'The MMU traps the write on the read-only page, prompting the kernel to allocate a new physical page frame, copy the 4KB data, update page tables to Read-Write, and resume execution',
            bn: 'MMU রিড-অনলি পেজের ওপর লেখার চেষ্টা আটকে কার্নেলকে জানায়, যা তখন একটি নতুন ফিজিক্যাল পেজ বরাদ্দ করে, ৪ কিলোবাইট ডাটা কপি করে, পেজ টেবিলকে রিড-রাইট করে কাজ পুনরায় চালু করে',
          },
          {
            en: 'The kernel permanently reboots the computer hardware instantly',
            bn: 'কার্নেল সাথে সাথে কম্পিউটারের হার্ডওয়্যার পুনরায় রিবুট করে দেয়',
          },
          {
            en: 'The kernel deletes all user files stored on the solid-state drive',
            bn: 'কার্নেল সলিড-স্টেট ড্রাইভে থাকা সমস্ত ব্যবহারকারী ফাইল মুছে ফেলে',
          },
          {
            en: 'The kernel prints the memory address on paper through the office printer',
            bn: 'কার্নেল মেমোরি ঠিকানাটি অফিসের প্রিন্টার দিয়ে কাগজে প্রিন্ট করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'The kernel duplicates only that single 4KB page and marks it writable.',
          bn: 'কার্নেল কেবল সেই নির্দিষ্ট ৪ কিলোবাইট পেজটি কপি করে রিড-রাইট করে দেয়।',
        },
        explanation: {
          en: 'Copy-On-Write lazily duplicates pages only upon write attempts, saving enormous memory and CPU cycles during fork.',
          bn: 'কপি-অন-রাইট লেখার আগ পর্যন্ত কপি করা স্থগিত রেখে বিপুল পরিমাণ মেমোরি ও প্রসেসর সময় বাঁচায়।'
        },
      },
      {
        id: 'proc-fork-qz-3',
        kind: 'mcq',
        topic: 'cloexec-security-protection',
        question: {
          en: 'What security vulnerability does the O_CLOEXEC file descriptor flag prevent in production software?',
          bn: 'প্রোডাকশন সফটওয়্যারে O_CLOEXEC ফাইল ডেসক্রিপ্টর ফ্ল্যাগ কোন নিরাপত্তা ঝুঁকি প্রতিহত করে?'
        },
        options: [
          {
            en: 'It prevents sensitive file descriptors, authentication tokens, and listening network sockets from accidentally leaking into untrusted child programs executed via execve()',
            bn: 'এটি সংবেদনশীল ফাইল ডেসক্রিপ্টর, সিকিউরিটি টোকেন এবং নেটওয়ার্ক সকেটকে execve() দিয়ে চলা চাইল্ড প্রোগ্রামে ভুলবশত ফাঁস হয়ে যাওয়া থেকে রক্ষা করে',
          },
          {
            en: 'It stops computer mice from moving backwards across the screen',
            bn: 'এটি স্ক্রিনে মাউসের কার্সর পেছনের দিকে সরে যাওয়া প্রতিহত করে',
          },
          {
            en: 'It prevents computer screens from consuming battery power',
            bn: 'এটি কম্পিউটার স্ক্রিনের ব্যাটারি বিদ্যুৎ খরচ করা বন্ধ করে দেয়',
          },
          {
            en: 'It stops keyboard typing sounds from echoing in the room',
            bn: 'এটি কিবোর্ড টাইপিংয়ের শব্দ ঘরে প্রতিধ্বনিত হওয়া ঠেকায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Closing file descriptors automatically across exec to prevent socket leakage.',
          bn: 'নতুন বাইনারি চলার আগে স্বয়ংক্রিয়ভাবে ডেসক্রিপ্টর বন্ধ করে তথ্য ফাঁস ঠেকানো।',
        },
        explanation: {
          en: 'O_CLOEXEC instructs the kernel to close the file descriptor during execve(), preventing privilege escalation and data leaks.',
          bn: 'O_CLOEXEC কার্নেলকে নির্দেশ দেয় execve()-এর সময় ফাইল ডেসক্রিপ্টরটি বন্ধ করতে, যা নিরাপত্তা ঝুঁকি দূর করে।'
        },
      },
      {
        id: 'proc-fork-qz-4',
        kind: 'mcq',
        topic: 'parent-tracking-child-pid',
        question: {
          en: 'Why must the fork() system call return the child Process ID (PID) to the parent rather than returning 0 to both?',
          bn: 'উভয় প্রসেসকেই ০ রিটার্ন না করে fork() কেন প্যারেন্টের কাছে চাইল্ডের প্রসেস আইডি (PID) রিটার্ন করে?'
        },
        options: [
          {
            en: 'The parent requires the specific child PID to monitor health, manage execution, send signals, and reap exit statuses via waitpid()',
            bn: 'প্যারেন্টের চাইল্ড প্রসেসের নির্দিষ্ট PID প্রয়োজন হয় যাতে সে চাইল্ডের অবস্থা পর্যবেক্ষণ করতে, সিগন্যাল পাঠাতে এবং waitpid() দিয়ে স্ট্যাটাস সংগ্রহ করতে পারে',
          },
          {
            en: 'Because computer hardware cannot generate two identical numbers',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার দুটি একই সংখ্যা তৈরি করতে অক্ষম',
          },
          {
            en: 'To make the parent process execute twice as fast as the child',
            bn: 'প্যারেন্ট প্রসেস যেন চাইল্ডের চেয়ে দ্বিগুণ দ্রুত গতিতে চলতে পারে',
          },
          {
            en: 'Because the child process has no access to computer memory',
            bn: 'কারণ চাইল্ড প্রসেসের কম্পিউটার মেমোরি ব্যবহারের কোনো অনুমতি থাকে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'The parent needs the PID to manage, signal, and wait on the child.',
          bn: 'চাইল্ডকে পরিচালনা, সিগন্যাল দেওয়া এবং তদারকি করতে প্যারেন্টের পিআইডি প্রয়োজন।',
        },
        explanation: {
          en: 'Without receiving the child PID, the parent would have no handle to wait on or signal its child process.',
          bn: 'চাইল্ডের পিআইডি না পেলে প্যারেন্টের পক্ষে চাইল্ড প্রসেস তদারকি বা নিয়ন্ত্রণ করা অসম্ভব হয়ে পড়ত।'
        },
      },
    ],
  },
  next: {
    slug: 'process-states',
    title: {
      en: 'Process States: 5-State Life Machine & Context Switching',
      bn: 'প্রসেস স্টেটস: ৫-স্টেট জীবনচক্র এবং কনটেক্সট সুইচিং'
    },
  },
};
