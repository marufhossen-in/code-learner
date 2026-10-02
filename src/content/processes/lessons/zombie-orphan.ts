import type { Lesson } from '../../../lib/types';

export const ZombieOrphanLesson: Lesson = {
  slug: 'zombie-orphan',
  tech: 'processes',
  title: {
    en: 'Zombie & Orphan Processes: Reaping, waitpid() & PID 1 Adoption',
    bn: 'জম্বি এবং অরফান প্রসেস: রিপিং, waitpid() এবং PID ১ দ্বারা দত্তক গ্রহণ'
  },
  summary: {
    en: 'Diagnose and resolve the two classic abnormal process conditions in Unix systems: Zombie processes and Orphan processes. Understand why a terminated child process becomes a Zombie when its parent fails to collect its exit status via wait() or waitpid(), consuming entries in the kernel process table. Learn how Orphan processes are automatically adopted by PID 1, and discover how container init systems prevent PID exhaustion.',
    bn: 'ইউনিক্স সিস্টেমের দুটি বহুল পরিচিত অস্বাভাবিক প্রসেস অবস্থা গভীরভাবে নির্ণয় ও সমাধান করুন: জম্বি প্রসেস এবং অরফান প্রসেস। প্যারেন্ট প্রসেস wait() বা waitpid() দিয়ে এক্সিট স্ট্যাটাস গ্রহণ না করলে কেন মৃত চাইল্ড জম্বি হয়ে কার্নেল প্রসেস টেবিল আটকে রাখে তা বুঝুন। অরফান প্রসেস কীভাবে স্বয়ংক্রিয়ভাবে PID ১ দ্বারা গৃহীত হয় তা শিখুন এবং কন্টেইনার ইনিট সিস্টেম কীভাবে PID নিঃশেষ হওয়া প্রতিরোধ করে তা জানুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'zombies-versus-orphans',
      text: {
        en: 'The Afterlife of Processes: Zombie Processes versus Orphan Tasks',
        bn: 'প্রসেসের অন্তিম দশা: জম্বি প্রসেস বনাম অরফান টাস্ক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In Unix operating system architecture, every child process relies on its parent for closure. When a child process completes its instructions and calls exit(), it does not disappear from the operating system instantly. It enters a transitional state called a Zombie process.',
        bn: 'ইউনিক্স অপারেটিং সিস্টেমের আর্কিটেকচারে প্রতিটি চাইল্ড প্রসেসের পরিসমাপ্তি তার প্যারেন্টের ওপর নির্ভরশীল। কোনো চাইল্ড প্রসেস যখন তার সমস্ত কোড সম্পন্ন করে exit() কল করে, তখন এটি তাৎক্ষণিকভাবে সিস্টেম থেকে হারিয়ে যায় না। এটি জম্বি প্রসেস (Zombie process) নামের একটি অন্তর্বর্তীকালীন দশায় প্রবেশ করে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A zombie process is already dead: it consumes zero CPU cycles and zero physical RAM. However, its entry in the operating system kernel Process Table remains reserved, holding its exit status code until the parent process acknowledges it via the wait() or waitpid() system call. If an application leaks thousands of zombies without reaping, the process table fills up completely, preventing the computer from launching any new processes.',
        bn: 'একটি জম্বি প্রসেস মূলত মৃত: এটি ০ শতাংশ সিপিইউ এবং ০ বাইট ফিজিক্যাল র‍্যাম ব্যবহার করে। তবে অপারেটিং সিস্টেমের কার্নেল প্রসেস টেবিলে এর এন্ট্রিটি সংরক্ষিত থাকে, যা প্যারেন্ট প্রসেস wait() বা waitpid() সিস্টেম কল দিয়ে সংগ্রহ না করা পর্যন্ত এক্সিট কোড ধরে রাখে। কোনো অ্যাপ্লিকেশন যদি হাজার হাজার জম্বি জমিয়ে রাখে, তবে প্রসেস টেবিল সম্পূর্ণ পূর্ণ হয়ে যায় এবং কম্পিউটারে নতুন কোনো প্রসেস চালু করা অসম্ভব হয়ে পড়ে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. The Zombie State (State Z in ps)',
            bn: '১. জম্বি স্টেট ( ps কমান্ডে Z স্টেট )'
          },
          text: {
            en: 'When a child exits, the kernel immediately deallocates its virtual memory, stack, heap, and open file descriptors. It preserves only the Process Control Block skeleton containing PID and exit code, awaiting parent collection.',
            bn: 'চাইল্ডের কাজ শেষ হলে কার্নেল তৎক্ষণাৎ তার ভার্চুয়াল মেমোরি, স্ট্যাক, হিপ এবং ফাইল ডেসক্রিপ্টর মুক্ত করে দেয়। এটি কেবল PID এবং এক্সিট কোড সম্বলিত কঙ্কালসদৃশ PCB বাঁচিয়ে রাখে, যা প্যারেন্টের সংগ্রহের অপেক্ষায় থাকে।'
          },
        },
        {
          title: {
            en: '2. Reaping via waitpid() and SIGCHLD',
            bn: '২. waitpid() এবং SIGCHLD দিয়ে রিপিং'
          },
          text: {
            en: 'When a child exits, the kernel notifies the parent by sending an asynchronous SIGCHLD signal. The parent calls waitpid() to read the status code. This action is called Reaping, and it permanently removes the zombie PCB from kernel tables.',
            bn: 'চাইল্ড শেষ হলে কার্নেল প্যারেন্টকে একটি অ্যাসিনক্রোনাস SIGCHLD সিগন্যাল পাঠায়। প্যারেন্ট তখন waitpid() কল করে স্ট্যাটাস কোড পড়ে নেয়। এই কাজটিকে রিপিং (Reaping) বলা হয়, যা কার্নেল টেবিল থেকে জম্বি PCB সম্পূর্ণ মুছে ফেলে।'
          },
        },
        {
          title: {
            en: '3. The Orphan Condition',
            bn: '৩. অরফান বা অভিভাবকহীন অবস্থা'
          },
          text: {
            en: 'If a parent process terminates or crashes unexpectedly while its child processes are still actively running, those living child processes become Orphans.',
            bn: 'কোনো প্যারেন্ট প্রসেস যদি তার চাইল্ড প্রসেসগুলো চালু থাকা অবস্থাতেই অপ্রত্যাশিতভাবে বন্ধ বা ক্র্যাশ করে, তবে সেই চলমান চাইল্ড প্রসেসগুলো অরফান (Orphan) বা এতিম হয়ে পড়ে।'
          },
        },
        {
          title: {
            en: '4. Adoption by PID 1 (systemd or init)',
            bn: '৪. PID ১ ( systemd বা init ) দ্বারা দত্তক গ্রহণ'
          },
          text: {
            en: 'Operating systems never leave an orphan process unparented. The Linux kernel immediately re-parents all orphan processes to PID 1 (systemd or init). PID 1 runs a continuous event loop that reaps any child when it terminates, preventing orphan zombies.',
            bn: 'অপারেটিং সিস্টেম কখনোই কোনো প্রসেসকে অভিভাবকহীন রাখে না। লিনাক্স কার্নেল তৎক্ষণাৎ সমস্ত অরফান প্রসেসকে PID ১ ( systemd বা init )-এর অধীনে দত্তক দেয়। PID ১ সার্বক্ষণিক একটি লুপ চালায় যা যেকোনো চাইল্ড শেষ হলে সাথে সাথে তাকে রিপ করে মেমোরি পরিষ্কার করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Zombie Process Accumulation versus Orphan Adoption by PID 1',
        bn: 'জম্বি প্রসেস জমে থাকা বনাম PID ১ দ্বারা অরফান প্রসেস দত্তক গ্রহণ'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Zombie versus orphan processes diagram showing PID 1 adoption and waitpid reaping">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ZOMBIE REAPING VS ORPHAN RE-PARENTING ARCHITECTURE</text>
  
  <!-- Left Side: Zombie Scenario -->
  <g transform="translate(30, 48)">
    <rect width="360" height="350" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="180" y="24" fill="#ef4444" font-size="12" font-weight="bold" text-anchor="middle">SCENARIO A: ZOMBIE PROCESS (LEAK)</text>
    
    <!-- Parent Box -->
    <rect x="20" y="42" width="320" height="60" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="35" y="65" fill="#38bdf8" font-size="11" font-weight="bold">Parent Process (PID 1000)</text>
    <text x="35" y="85" fill="#cbd5e1" font-size="9">Busy in infinite loop | Forgets to call waitpid()</text>
    
    <!-- Child Box (Exited) -->
    <rect x="20" y="130" width="320" height="65" rx="4" fill="#450a0a" stroke="#ef4444"/>
    <text x="35" y="153" fill="#fca5a5" font-size="11" font-weight="bold">Child (PID 1001) - State: ZOMBIE (Z)</text>
    <text x="35" y="170" fill="#cbd5e1" font-size="9">Called exit(0) | 0% CPU, 0% RAM</text>
    <text x="35" y="184" fill="#ef4444" font-size="9" font-weight="bold">PCB stuck in OS Process Table!</text>
    
    <!-- Problem Banner -->
    <rect x="20" y="215" width="320" height="50" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="180" y="235" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">VULNERABILITY: PID TABLE EXHAUSTION</text>
    <text x="180" y="252" fill="#cbd5e1" font-size="9" text-anchor="middle">Leaking zombies blocks creation of new processes</text>
    
    <!-- Fix Action -->
    <rect x="20" y="280" width="320" height="50" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="180" y="302" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">SOLUTION: waitpid(pid, &amp;status, WNOHANG)</text>
    <text x="180" y="318" fill="#cbd5e1" font-size="9" text-anchor="middle">Reaps exit code and clears PCB instantly</text>
  </g>
  
  <!-- Right Side: Orphan Scenario -->
  <g transform="translate(420, 48)">
    <rect width="390" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="195" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">SCENARIO B: ORPHAN ADOPTION (PID 1)</text>
    
    <!-- Dead Parent -->
    <rect x="20" y="42" width="350" height="55" rx="4" fill="#0f172a" stroke="#64748b" stroke-dasharray="3 3"/>
    <text x="35" y="65" fill="#94a3b8" font-size="11" font-weight="bold">Original Parent (PID 2000) [CRASHED / DIED]</text>
    <text x="35" y="83" fill="#cbd5e1" font-size="9">Terminated while child is still actively working</text>
    
    <!-- Orphan Child -->
    <rect x="20" y="125" width="350" height="65" rx="4" fill="#0f172a" stroke="#c084fc"/>
    <text x="35" y="148" fill="#c084fc" font-size="11" font-weight="bold">Active Child (PID 2001) - ORPHAN</text>
    <text x="35" y="165" fill="#cbd5e1" font-size="9">Still executing background computation</text>
    <text x="35" y="179" fill="#10b981" font-size="9" font-weight="bold">Kernel automatically re-parents to PID 1!</text>
    
    <!-- PID 1 Adoption -->
    <rect x="20" y="215" width="350" height="115" rx="6" fill="#064e3b" stroke="#10b981"/>
    <text x="195" y="240" fill="#6ee7b7" font-size="12" font-weight="bold" text-anchor="middle">PID 1: systemd / init / subreaper</text>
    <text x="195" y="262" fill="#f8fafc" font-size="10" text-anchor="middle">Adopted: PPID of 2001 changes to 1</text>
    <text x="195" y="280" fill="#cbd5e1" font-size="9" text-anchor="middle">When PID 2001 eventually calls exit():</text>
    <text x="195" y="298" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">PID 1 event loop calls waitpid() and cleanly reaps it</text>
    <text x="195" y="315" fill="#cbd5e1" font-size="8" text-anchor="middle">Zero permanent zombie accumulation!</text>
  </g>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">kill -9 cannot delete a zombie because it is already dead; parent must call waitpid() to reap it</text>
</svg>`,
      caption: {
        en: 'A Zombie is a dead process whose PCB is trapped waiting for waitpid(). An Orphan is adopted by PID 1, which reaps it cleanly upon exit.',
        bn: 'জম্বি হলো একটি মৃত প্রসেস যার PCB আটকে থাকে waitpid()-এর অপেক্ষায়। আর অরফান প্রসেস PID ১ দ্বারা গৃহীত হয় যা সমাপ্তির পর একে মুক্ত করে।'
      },
    },
    {
      type: 'heading',
      id: 'zombie-simulation-and-reaping-code',
      text: {
        en: 'Process Table Starvation & Reaping Engine Simulation',
        bn: 'প্রসেস টেবিল নিঃশেষ এবং রিপিং ইঞ্জিন সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how unreaped zombies disrupt operating systems, consider a process table with a fixed capacity limit. The following program demonstrates zombie accumulation, catches PID exhaustion errors, and executes asynchronous reaping to restore process creation.',
        bn: 'অসংগৃহীত জম্বি কীভাবে সিস্টেমে অচলাবস্থা তৈরি করে তা দেখতে একটি নির্দিষ্ট ধারণক্ষমতার প্রসেস টেবিল বিবেচনা করুন। নিচের প্রোগ্রামটি জম্বি জমে থাকা, পিআইডি নিঃশেষ হওয়া এবং অ্যাসিনক্রোনাস রিপিংয়ের মাধ্যমে মেমোরি পুনরুদ্ধার প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'zombie-reaper-simulator.js',
      code: `// Deterministic Zombie Process & Asynchronous Reaping Engine Simulator
// Demonstrates process table capacity exhaustion and waitpid() recovery

class KernelProcessTable {
  constructor(maxCapacity = 3) {
    this.maxCapacity = maxCapacity; // 3 process slots for quick demonstration
    this.table = new Map();
  }

  // Spawns a new process in the table
  spawnProcess(pid, name) {
    if (this.table.size >= this.maxCapacity) {
      throw new Error('PID_TABLE_EXHAUSTED: Process table full (' + this.table.size + '/' + this.maxCapacity + '). Cannot launch ' + name + '!');
    }
    const entry = { pid, name, state: 'RUNNING', exitStatus: null };
    this.table.set(pid, entry);
    return entry;
  }

  // Child executes exit() -> transitions to ZOMBIE
  exitChild(pid, exitCode) {
    const entry = this.table.get(pid);
    if (!entry) return;
    entry.state = 'ZOMBIE';
    entry.exitStatus = exitCode;
    // 0% CPU, 0% RAM consumed, but slot remains locked!
  }

  // Parent executes waitpid() -> REAPS zombie
  reapZombie(pid) {
    const entry = this.table.get(pid);
    if (entry && entry.state === 'ZOMBIE') {
      this.table.delete(pid); // Slot cleared from kernel table
      return { reapedPid: pid, exitStatus: entry.exitStatus };
    }
    return null;
  }
}

const kernel = new KernelProcessTable(3);

console.log('=== Step 1: Spawning Worker Processes ===');
kernel.spawnProcess(101, 'auth-worker');
kernel.spawnProcess(102, 'payment-worker');
console.log('Active processes in table:', kernel.table.size, '/ 3');

console.log('\\n=== Step 2: auth-worker Exits but Parent Forgets waitpid() ===');
kernel.exitChild(101, 0); // 101 is now a ZOMBIE
console.log('Worker 101 status:', kernel.table.get(101).state);

console.log('\\n=== Step 3: Spawning New Process ===');
kernel.spawnProcess(103, 'email-worker');
console.log('Table size:', kernel.table.size, '/ 3 (Slots: 101 Zombie, 102 Running, 103 Running)');

console.log('\\n=== Step 4: Attempting Spawn When Table is Full of Zombies ===');
try {
  kernel.spawnProcess(104, 'cron-job');
} catch (err) {
  console.log('Kernel Failure Caught:', err.message);
  console.log('System Impact: Server cannot execute commands because unreaped zombies occupy all slots!');
}

console.log('\\n=== Step 5: Parent Invokes waitpid() to Reap Zombie 101 ===');
const reaped = kernel.reapZombie(101);
console.log('Reaped Zombie PID:', reaped.reapedPid, 'with Exit Status:', reaped.exitStatus);
console.log('Table size after reaping:', kernel.table.size, '/ 3');

kernel.spawnProcess(104, 'cron-job');
console.log('Successfully spawned cron-job after clearing zombie!');`,
      caption: {
        en: 'The simulation traces process table exhaustion from unreaped zombies and verifies capacity restoration after waitpid() reaping.',
        bn: 'সিমুলেশনটি জম্বির কারণে টেবিল পূর্ণ হওয়া এবং waitpid() দিয়ে মুক্ত করার পর পুনরায় প্রসেস তৈরির ক্ষমতা প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why Docker Containers Need an Init System (tini or dumb-init)',
        bn: 'ডকার কন্টেইনারে কেন একটি ইনিট সিস্টেমের ( tini বা dumb-init ) প্রয়োজন হয়'
      },
      text: {
        en: 'When running an application inside a Docker container, your Node.js or Python process is assigned PID 1 inside the container namespace. However, standard application runtimes lack the kernel signal forwarding and subreaper logic necessary to reap orphaned child processes spawned by background libraries. Over days of traffic, containers accumulate zombie processes and exhaust their PID limits. Using a lightweight init system like tini ensures proper POSIX signal handling and reaps all orphan zombies automatically.',
        bn: 'ডকার কন্টেইনারে কোনো অ্যাপ্লিকেশন চালালে আপনার Node.js বা Python প্রসেসটি কন্টেইনারের ভেতরে PID ১ হিসেবে চালু হয়। কিন্তু সাধারণ অ্যাপ্লিকেশন রানটাইমগুলোতে কোনো সাব-রিপার লজিক থাকে না যা ব্যাকগ্রাউন্ড লাইব্রেরি দ্বারা তৈরি অরফান প্রসেসগুলোকে রিমুভ করতে পারে। ফলে কয়েক দিন চলার পর কন্টেইনারে প্রচুর জম্বি প্রসেস জমা হয় এবং PID শেষ হয়ে যায়। ডকারে tini-এর মতো একটি ক্ষুদ্র ইনিট সিস্টেম ব্যবহার করলে তা স্বয়ংক্রিয়ভাবে সব অরফান জম্বি পরিষ্কার করে কন্টেইনারকে সচল রাখে।'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-zomb-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the standard Process ID (PID) of the foundational system init process that automatically adopts orphan processes on Linux? (1). Type the number.',
        bn: 'লিনাক্সে অভিভাবকহীন অরফান প্রসেসগুলোকে স্বয়ংক্রিয়ভাবে দত্তক গ্রহণকারী মূল সিস্টেম ইনিট প্রসেসের পিআইডি (PID) কত? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'The root system process is PID 1.',
        bn: 'মূল সিস্টেম প্রসেসটি হলো PID ১।'
      },
      explanation: {
        en: 'PID 1 (systemd or init) is the root ancestor that adopts all orphaned processes when their original parents die.',
        bn: 'প্যারেন্ট বন্ধ হয়ে গেলে PID ১ ( systemd বা init ) সমস্ত অরফান প্রসেসকে অভিভাবক হিসেবে দত্তক গ্রহণ করে।'
      },
    },
    {
      id: 'proc-zomb-ex-2',
      kind: 'mcq',
      question: {
        en: 'What computer hardware resources does a Zombie process consume while waiting in the kernel process table?',
        bn: 'কার্নেল প্রসেস টেবিলে অপেক্ষমান একটি জম্বি প্রসেস কম্পিউটারের কোন হার্ডওয়্যার সম্পদগুলো ব্যবহার করে?'
      },
      options: [
        {
          en: 'Zero CPU cycles and zero physical RAM; it only holds a Process Control Block slot in the operating system process table',
          bn: '০ শতাংশ সিপিইউ এবং ০ বাইট ফিজিক্যাল র‍্যাম; এটি কেবল অপারেটিং সিস্টেমের প্রসেস টেবিলে একটি স্লট আটকে রাখে',
        },
        {
          en: '100 percent of all CPU cores continuously',
          bn: 'সবসময় সমস্ত সিপিইউ কোরের ১০০ শতাংশ ক্ষমতা',
        },
        {
          en: '10 gigabytes of permanent hard disk storage space',
          bn: 'স্থায়ী হার্ড ডিস্কের ১০ গিগাবাইট স্টোরেজ জায়গা',
        },
        {
          en: 'It discharges the computer battery in 30 seconds',
          bn: 'এটি ৩০ সেকেন্ডের মধ্যে কম্পিউটারের সম্পূর্ণ ব্যাটারি খালি করে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'A zombie is dead: 0% CPU, 0% RAM, but retains a table slot.',
        bn: 'জম্বি মৃত: কোনো সিপিইউ বা র‍্যাম খরচ করে না, কেবল টেবিলে জায়গা আটকে রাখে।',
      },
      explanation: {
        en: 'Zombies have no allocated memory or CPU time. Their only footprint is an entry in the kernel process table awaiting waitpid().',
        bn: 'জম্বি প্রসেসের কোনো সক্রিয় মেমোরি বা সিপিইউ লাগে না। এটি কেবল কার্নেল টেবিলে একটি এন্ট্রি ধরে রাখে।'
      },
    },
    {
      id: 'proc-zomb-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why is it impossible to eliminate a Zombie process using the terminal command "kill -9 [PID]"?',
        bn: '"kill -9 [PID]" কমান্ড চালিয়ে কেন একটি জম্বি প্রসেসকে মুছে ফেলা সম্ভব হয় না?'
      },
      options: [
        {
          en: 'Because a Zombie process is already dead and has terminated execution; signals can only be delivered to living processes, so only a parent waitpid() can remove its entry',
          bn: 'কারণ একটি জম্বি প্রসেস ইতিপূর্বেই মৃত এবং এর কাজ শেষ; সিগন্যাল কেবল জীবিত প্রসেসেই পাঠানো যায়, তাই কেবল প্যারেন্টের waitpid() কলই এর এন্ট্রি মুছতে পারে',
        },
        {
          en: 'Because the terminal keyboard key 9 does not transmit electricity',
          bn: 'কারণ টার্মিনালের কিবোর্ড বাটন ৯ কোনো বিদ্যুৎ প্রবাহিত করতে পারে না',
        },
        {
          en: 'Because zombie processes are protected by military encryption keys',
          bn: 'কারণ জম্বি প্রসেসগুলো মিলিটারি এনক্রিপশন কি দ্বারা সুরক্ষিত থাকে',
        },
        {
          en: 'Because the Linux operating system disables the kill command on Tuesdays',
          bn: 'কারণ লিনাক্স অপারেটিং সিস্টেম প্রতি মঙ্গলবার কিল কমান্ড নিষ্ক্রিয় করে রাখে',
        },
      ],
      answer: 0,
      hint: {
        en: 'You cannot kill what is already dead; only reaping clears the PCB.',
        bn: 'যা ইতিপূর্বেই মৃত তাকে কিল করা অসম্ভব; কেবল রিপিংয়ের মাধ্যমেই এর এন্ট্রি মোছা সম্ভব।',
      },
      explanation: {
        en: 'Signals require an active thread to receive them. Because a zombie has no thread, kill -9 is completely ignored.',
        bn: 'সিগন্যাল গ্রহণের জন্য জীবিত থ্রেড আবশ্যক। জম্বির কোনো সচল থ্রেড না থাকায় kill -9 কোনো কাজ করে না।'
      },
    },
    {
      id: 'proc-zomb-ex-4',
      kind: 'predict',
      question: {
        en: 'If an operating system process table has a capacity limit of 5 slots and 5 zombies remain unreaped, how many new processes can the kernel create? (0). Type the number.',
        bn: 'একটি অপারেটিং সিস্টেমের প্রসেস টেবিলে যদি সর্বোচ্চ ৫ টি স্লটের সীমা থাকে এবং ৫ টি স্লটই জম্বি দিয়ে পূর্ণ থাকে, তবে কার্নেল কয়টি নতুন প্রসেস তৈরি করতে পারবে? ( ০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'With all 5 slots occupied, exactly 0 new processes can spawn.',
        bn: 'সব ৫ টি স্লট আটকে থাকলে ঠিক ০ টি নতুন প্রসেস তৈরি সম্ভব।'
      },
      explanation: {
        en: 'When the process table reaches capacity, the fork() system call returns -1 and no new processes can be created.',
        bn: 'প্রসেস টেবিল সম্পূর্ণ পূর্ণ হয়ে গেলে fork() সিস্টেম কল ব্যর্থ হয় এবং ০ টি নতুন প্রসেস তৈরি করা যায়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Zombie and Orphan Processes Quiz',
      bn: 'জম্বি এবং অরফান প্রসেস কুইজ'
    },
    questions: [
      {
        id: 'proc-zomb-qz-1',
        kind: 'mcq',
        topic: 'zombie-vs-orphan-definition',
        question: {
          en: 'What technical difference distinguishes a Zombie process from an Orphan process?',
          bn: 'জম্বি প্রসেস এবং অরফান প্রসেসের মধ্যে প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'A Zombie is a terminated process whose exit status has not yet been collected by its living parent; an Orphan is an actively running process whose parent has terminated prematurely',
            bn: 'জম্বি হলো এমন একটি সমাপ্ত প্রসেস যার এক্সিট স্ট্যাটাস জীবিত প্যারেন্ট এখনও সংগ্রহ করেনি; আর অরফান হলো সক্রিয় চলমান প্রসেস যার প্যারেন্ট আগেই বন্ধ হয়ে গেছে',
          },
          {
            en: 'A Zombie runs on Intel CPUs, while an Orphan runs on AMD CPUs',
            bn: 'জম্বি ইন্টেল প্রসেসরে চলে, আর অরফান এএমডি প্রসেসরে চলে',
          },
          {
            en: 'A Zombie process is written in Java, while an Orphan is written in C',
            bn: 'জম্বি প্রসেস জাভায় লেখা হয়, আর অরফান সিতে লেখা হয়',
          },
          {
            en: 'Both terms describe identical operating system features',
            bn: 'উভয় পদই অপারেটিং সিস্টেমের হুবহু একই বৈশিষ্ট্য প্রকাশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Zombies are dead tasks waiting for collection; Orphans are live tasks whose parents died.',
          bn: 'জম্বি হলো মৃত টাস্ক যা সংগ্রহের অপেক্ষায় থাকে; আর অরফান হলো জীবিত টাস্ক যার প্যারেন্ট মারা গেছে।',
        },
        explanation: {
          en: 'Zombies have terminated but retain table entries. Orphans are alive and executing but have lost their parent to early exit.',
          bn: 'জম্বি কাজ শেষ করে টেবিলে আটকে থাকে। আর অরফান জীবিত অবস্থায় চলমান থাকে কিন্তু তার আসল প্যারেন্ট হারিয়ে যায়।'
        },
      },
      {
        id: 'proc-zomb-qz-2',
        kind: 'mcq',
        topic: 'pid-exhaustion-consequence',
        question: {
          en: 'What dangerous system-wide failure mode occurs when a server application leaks zombie processes indefinitely?',
          bn: 'কোনো সার্ভার অ্যাপ্লিকেশন যদি ক্রমাগত জম্বি প্রসেস লিক করতে থাকে, তবে পুরো সিস্টেমে কোন বিপজ্জনক অচলাবস্থা তৈরি হয়?'
        },
        options: [
          {
            en: 'Process table starvation (PID exhaustion): the operating system reaches its pid_max limit and fails to launch any new processes, rejecting terminal logins, cron jobs, and SSH sessions',
            bn: 'পিআইডি নিঃশেষিত হয়ে যাওয়া (PID exhaustion): অপারেটিং সিস্টেম সর্বোচ্চ সীমানায় পৌঁছে যায় এবং নতুন কোনো প্রসেস, টার্মিনাল লগইন বা SSH সেশন চালু করতে সম্পূর্ণ ব্যর্থ হয়',
          },
          {
            en: 'The computer cooling fan blows air in the wrong direction',
            bn: 'কম্পিউটারের কুলিং ফ্যান ভুল দিকে বাতাস ছুড়তে শুরু করে',
          },
          {
            en: 'All internet websites turn their background colors to yellow',
            bn: 'সমস্ত ইন্টারনেট ওয়েবসাইটের ব্যাকগ্রাউন্ডের রঙ হলুদে পরিবর্তিত হয়ে যায়',
          },
          {
            en: 'The computer screen turns off permanently and never turns on',
            bn: 'কম্পিউটার স্ক্রিন চিরতরে বন্ধ হয়ে যায় এবং আর কখনোই জ্বলে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'PID table exhaustion prevents creating any new processes on the OS.',
          bn: 'পিআইডি টেবিল পূর্ণ হলে অপারেটিং সিস্টেমে নতুন কোনো কাজ চালু করা অসম্ভব হয়ে পড়ে।',
        },
        explanation: {
          en: 'Because PIDs are finite, unreaped zombies exhaust the process table, causing fork() to fail across the entire operating system.',
          bn: 'যেহেতু পিআইডি সংখ্যা সীমিত, তাই জম্বি জমে টেবিল পূর্ণ হলে পুরো সিস্টেমেই fork() ব্যর্থ হতে শুরু করে।'
        },
      },
      {
        id: 'proc-zomb-qz-3',
        kind: 'mcq',
        topic: 'how-to-kill-unreaped-zombie',
        question: {
          en: 'If a parent process has leaked a zombie and is stuck in an unresponsive state, how can an administrator safely clear that zombie?',
          bn: 'একটি প্যারেন্ট প্রসেস যদি জম্বি তৈরি করে নিজে হ্যাং হয়ে থাকে, তবে সিস্টেম অ্যাডমিন কীভাবে সেই জম্বিটি দূর করতে পারেন?'
        },
        options: [
          {
            en: 'Terminate the parent process; the kernel immediately re-parents the zombie to PID 1 (systemd/init), which reaps it automatically',
            bn: 'প্যারেন্ট প্রসেসটিকে বন্ধ করে দিন; কার্নেল তৎক্ষণাৎ জম্বিটিকে PID ১ ( systemd/init )-এর কাছে হস্তান্তর করবে, যা সাথে সাথে একে রিপ করে দেবে',
          },
          {
            en: 'Unplug the computer monitor from the electrical power outlet',
            bn: 'বিদ্যুতের সংযোগ থেকে কম্পিউটার মনিটরের তারটি খুলে ফেলতে হবে',
          },
          {
            en: 'Change the desktop wallpaper to a picture of an ocean',
            bn: 'ডেস্কটপ ওয়ালপেপার পরিবর্তন করে একটি সমুদ্রের ছবি লাগাতে হবে',
          },
          {
            en: 'Type the letter Z twenty times in the command prompt',
            bn: 'কমান্ড প্রম্পটে পরপর বিশ বার ইংরেজি Z অক্ষরটি টাইপ করতে হবে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Killing the parent causes PID 1 to adopt and reap the zombie.',
          bn: 'প্যারেন্ট বন্ধ করলে PID ১ জম্বিটিকে গ্রহণ করে সাথে সাথে রিপ করে দেয়।',
        },
        explanation: {
          en: 'Terminating the negligent parent causes the kernel to transfer the child to PID 1, which immediately calls waitpid() to reap it.',
          bn: 'দায়িত্বহীন প্যারেন্টকে বন্ধ করলে কার্নেল প্রসেসটিকে PID ১-এ পাঠায়, যা তৎক্ষণাৎ waitpid() ডেকে টেবিল খালি করে দেয়।'
        },
      },
      {
        id: 'proc-zomb-qz-4',
        kind: 'mcq',
        topic: 'tini-docker-subreaper',
        question: {
          en: 'Why is a lightweight init wrapper like "tini" considered best practice for Node.js and Python Docker containers?',
          bn: 'Node.js এবং Python ডকার কন্টেইনারের জন্য "tini"-র মতো একটি ক্ষুদ্র ইনিট র্যাপার ব্যবহার করা কেন সেরা অনুশীলন হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: 'Standard application runtimes do not reap orphaned sub-processes or forward signals correctly when running as PID 1; tini acts as a proper init system that reaps zombies and forwards SIGTERM',
            bn: 'সাধারণ অ্যাপ্লিকেশন রানটাইম PID ১ হিসেবে চললে অরফান প্রসেস রিপ বা সিগন্যাল ফরোয়ার্ড করতে পারে না; tini একটি পূর্ণাঙ্গ ইনিট সিস্টেম হিসেবে জম্বি পরিষ্কার করে এবং SIGTERM পাঠায়',
          },
          {
            en: 'Because tini makes video games run at 120 frames per second inside containers',
            bn: 'কারণ tini কন্টেইনারের ভেতরে ভিডিও গেমকে প্রতি সেকেন্ডে ১২০ ফ্রেমে চালায়',
          },
          {
            en: 'Because Docker prohibits running any software without the word tini in the code',
            bn: 'কারণ ডকার কোডের ভেতরে tini শব্দটি না থাকলে কোনো সফটওয়্যার চলতে দেয় না',
          },
          {
            en: 'To make the container image file size 10 times larger on disk',
            bn: 'ডিস্কে কন্টেইনার ইমেজের ফাইলের আকার ১০ গুণ বড় করার উদ্দেশ্যে',
          },
        ],
        answer: 0,
        hint: {
          en: 'tini serves as an init system that reaps zombies and forwards signals properly.',
          bn: 'tini একটি ইনিট সিস্টেম যা জম্বি পরিষ্কার করে এবং সিগন্যাল সঠিকভাবে পাঠায়।',
        },
        explanation: {
          en: 'Without a subreaper like tini, processes spawned by child libraries remain zombies inside Docker containers when their intermediate parents die.',
          bn: 'tini না থাকলে কন্টেইনারে তৈরি হওয়া সাব-প্রসেসগুলো প্যারেন্ট মারা গেলে জম্বি হিসেবে চিরকাল আটকে থাকে।'
        },
      },
    ],
  },
  next: {
    slug: 'signals-ipc',
    title: {
      en: 'Signals & IPC: Signals, Anonymous Pipes & Unix Domain Sockets',
      bn: 'সিগন্যাল এবং IPC: সিগন্যাল, অ্যানোনিমাস পাইপ এবং ইউনিক্স ডোমেন সকেট'
    },
  },
};
