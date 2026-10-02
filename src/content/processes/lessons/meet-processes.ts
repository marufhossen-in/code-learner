import type { Lesson } from '../../../lib/types';

export const MeetProcessesLesson: Lesson = {
  slug: 'meet-processes',
  tech: 'processes',
  title: {
    en: 'Introduction to Operating System Processes: PIDs, PCBs & Memory Isolation',
    bn: 'অপারেটিং সিস্টেম প্রসেসের প্রাথমিক ধারণা: PID, PCB এবং মেমোরি আইসোলেশন'
  },
  summary: {
    en: 'Discover the foundation of operating system multitasking. Understand what an operating system process truly is: a program in execution containing private virtual memory, file descriptors, and security credentials. Explore Process Identifiers (PID), the role of the Process Control Block (PCB) in kernel data structures, and trace how the Linux kernel isolates processes from one another so buggy applications cannot compromise system stability.',
    bn: 'অপারেটিং সিস্টেম মাল্টিটাস্কিংয়ের ভিত্তি আবিষ্কার করুন। একটি অপারেটিং সিস্টেম প্রসেস আসলে কী তা বুঝুন: কার্যকর চলমান একটি প্রোগ্রাম যার নিজস্ব ভার্চুয়াল মেমোরি, ফাইল ডেসক্রিপ্টর এবং নিরাপত্তা ব্যবস্থা থাকে। প্রসেস আইডেন্টিফায়ার (PID), কার্নেল ডাটা স্ট্রাকচারে প্রসেস কন্ট্রোল ব্লকের (PCB) ভূমিকা অন্বেষণ করুন এবং লিনাক্স কার্নেল কীভাবে প্রসেসগুলোকে একে অপরের থেকে সম্পূর্ণ আলাদা রাখে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what-is-a-process',
      text: {
        en: 'What is an Operating System Process? Programs versus Executing Instances',
        bn: 'অপারেটিং সিস্টেম প্রসেস কী? প্রোগ্রাম বনাম কার্যকর চলমান ইনস্ট্যান্স'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you open a terminal or launch an application, computer software transitions from an inert file into an active running instance. A program stored on a solid-state drive is merely a passive sequence of compiled machine code instructions.',
        bn: 'আপনি যখন একটি টার্মিনাল খোলেন বা কোনো অ্যাপ্লিকেশন চালু করেন, তখন সফটওয়্যার একটি সুপ্ত ফাইল থেকে সক্রিয় চলমান ইনস্ট্যান্সে রূপান্তরিত হয়। সলিড-স্টেট ড্রাইভে সংরক্ষিত একটি প্রোগ্রাম মূলত কম্পাইল করা মেশিন কোড নির্দেশনার একটি নিষ্ক্রিয় ফাইল মাত্র।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The moment you launch that binary, the operating system kernel creates a Process. A process is a living program in execution, endowed with its own private virtual address space, CPU execution context, stack frames, heap allocations, and open file descriptors. Running 5 instances of a web browser spawns 5 completely independent processes, each managed separately by the kernel.',
        bn: 'আপনি যখন সেই বাইনারি ফাইলটি চালু করেন, অপারেটিং সিস্টেম কার্নেল সাথে সাথে একটি প্রসেস তৈরি করে। প্রসেস হলো সচল একটি জীবন্ত প্রোগ্রাম, যার নিজস্ব ব্যক্তিগত ভার্চুয়াল মেমোরি, সিপিইউ এক্সিকিউশন কনটেক্সট, স্ট্যাক ফ্রেম, হিপ বরাদ্দ এবং ওপেন ফাইল ডেসক্রিপ্টর থাকে। একটি ওয়েব ব্রাউজারের ৫ টি উইন্ডো চালু করলে ৫ টি সম্পূর্ণ স্বাধীন প্রসেস তৈরি হয়, যা কার্নেল দ্বারা পৃথকভাবে পরিচালিত হয়।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Process Identification (PID & PPID)',
            bn: '১. প্রসেস শনাক্তকরণ ( PID এবং PPID )'
          },
          text: {
            en: 'Every process receives a unique integer Process ID (PID). It also records its Parent Process ID (PPID). On Linux systems, PID 1 belongs to systemd or init, the root ancestor that spawns and supervises all background services.',
            bn: 'প্রতিটি প্রসেস একটি অনন্য পূর্ণসংখ্যা প্রসেস আইডি (PID) লাভ করে। এটি তার প্যারেন্ট প্রসেস আইডি (PPID) সংরক্ষণ করে। লিনাক্স সিস্টেমে PID ১ হলো systemd বা init-এর জন্য সংরক্ষিত, যা সমস্ত ব্যাকগ্রাউন্ড সার্ভিসের মূল পূর্বপুরুষ হিসেবে কাজ করে।'
          },
        },
        {
          title: {
            en: '2. CPU Registers & Context State',
            bn: '২. সিপিইউ রেজিস্টার এবং কনটেক্সট স্টেট'
          },
          text: {
            en: 'When the CPU switches between processes, the kernel snapshots the active hardware registers: the Program Counter (PC), Stack Pointer (RSP), and general-purpose registers (RAX, RBX).',
            bn: 'সিপিইউ যখন একাধিক প্রসেসের মাঝে কাজ পরিবর্তন করে, কার্নেল সক্রিয় হার্ডওয়্যার রেজিস্টারগুলোর মান সংরক্ষণ করে: প্রোগ্রাম কাউন্টার (PC), স্ট্যাক পয়েন্টার (RSP) এবং সাধারণ রেজিস্টার (RAX, RBX)।'
          },
        },
        {
          title: {
            en: '3. Process Execution States',
            bn: '৩. প্রসেস এক্সিকিউশন স্টেট'
          },
          text: {
            en: 'The operating system tracks the current life phase of the process: New (being created), Ready (waiting for CPU time), Running (actively executing on silicon), Waiting (blocked on disk or network I/O), or Terminated.',
            bn: 'অপারেটিং সিস্টেম প্রসেসের বর্তমান কাজের ধাপ ট্র্যাক করে: New ( তৈরি হচ্ছে ), Ready ( সিপিইউ সময়ের অপেক্ষায় ), Running ( প্রসেসরে চলছে ), Waiting ( ডিস্ক বা নেটওয়ার্ক I/O এর জন্য অপেক্ষমান ) অথবা Terminated।'
          },
        },
        {
          title: {
            en: '4. File Descriptors & Security Credentials',
            bn: '৪. ফাইল ডেসক্রিপ্টর এবং সিকিউরিটি ক্রেডেনশিয়াল'
          },
          text: {
            en: 'The kernel maintains an open file table tracking all connections: standard input (FD 0), standard output (FD 1), and standard error (FD 2), along with User ID (UID) permissions preventing unauthorized file access.',
            bn: 'কার্নেল সমস্ত সংযোগের একটি ওপেন ফাইল টেবিল সংরক্ষণ করে: স্ট্যান্ডার্ড ইনপুট (FD ০), স্ট্যান্ডার্ড আউটপুট (FD ১) এবং স্ট্যান্ডার্ড এরর (FD ২), সাথে ইউজার আইডি (UID) পারমিশন যা অননুমোদিত ফাইল অ্যাক্সেস প্রতিহত করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Process Control Block (PCB) Structure & Kernel Memory Isolation',
        bn: 'প্রসেস কন্ট্রোল ব্লক (PCB) আর্কিটেকচার এবং কার্নেল মেমোরি আইসোলেশন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Process Control Block architecture showing kernel PCB entries and isolated user space virtual memory">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PROCESS CONTROL BLOCK (PCB) &amp; KERNEL ISOLATION</text>
  
  <!-- Left Side: Kernel Space (Ring 0) with PCB Table -->
  <g transform="translate(30, 50)">
    <rect width="360" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="180" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">LINUX KERNEL SPACE (RING 0)</text>
    <text x="180" y="38" fill="#64748b" font-size="9" text-anchor="middle">Task Struct / Process Table Entry</text>
    
    <!-- PCB Card -->
    <rect x="15" y="48" width="330" height="275" rx="6" fill="#0f172a" stroke="#0284c7"/>
    <text x="180" y="70" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">PCB for PID 1042 (node-server)</text>
    
    <!-- Fields -->
    <rect x="25" y="82" width="310" height="30" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="35" y="102" fill="#94a3b8" font-size="10">PID: 1042 | PPID: 1 (systemd) | State: RUNNING</text>
    
    <rect x="25" y="118" width="310" height="30" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="35" y="138" fill="#10b981" font-size="10">Registers: PC=0x4012A0, RSP=0x7FFF00, RAX=0</text>
    
    <rect x="25" y="154" width="310" height="30" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="35" y="174" fill="#f59e0b" font-size="10">Memory Map: CR3=0x18F000 (Private Page Dir)</text>
    
    <rect x="25" y="190" width="310" height="42" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="35" y="207" fill="#cbd5e1" font-size="9">File Descriptors: [0: stdin, 1: stdout, 2: stderr,</text>
    <text x="35" y="222" fill="#38bdf8" font-size="9">                  3: TCP Socket 0.0.0.0:8080]</text>
    
    <rect x="25" y="238" width="310" height="30" rx="4" fill="#1e293b" stroke="#334155"/>
    <text x="35" y="258" fill="#c084fc" font-size="10">Security: UID=1000 (node), GID=1000, Nice=0</text>
    
    <rect x="25" y="274" width="310" height="38" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="180" y="297" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">CPU Context Switch saves registers here</text>
  </g>
  
  <!-- Right Side: User Space (Ring 3) Isolated Processes -->
  <g transform="translate(420, 50)">
    <rect width="390" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="195" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">USER SPACE (RING 3) ISOLATED MEMORY</text>
    
    <!-- Process 1042 Box -->
    <rect x="20" y="42" width="350" height="125" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="35" y="65" fill="#38bdf8" font-size="11" font-weight="bold">PROCESS PID 1042 (Node.js API Service)</text>
    <rect x="35" y="75" width="95" height="32" rx="4" fill="#1e293b" stroke="#0284c7"/>
    <text x="82" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Stack (8MB)</text>
    <rect x="140" y="75" width="95" height="32" rx="4" fill="#1e293b" stroke="#0284c7"/>
    <text x="187" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Heap (128MB)</text>
    <rect x="245" y="75" width="110" height="32" rx="4" fill="#1e293b" stroke="#0284c7"/>
    <text x="300" y="95" fill="#cbd5e1" font-size="9" text-anchor="middle">Code Segment</text>
    <text x="195" y="145" fill="#64748b" font-size="9" text-anchor="middle">Virtual Address Space: 0x00000000 to 0x7FFFFFFF</text>
    
    <!-- Barrier -->
    <line x1="20" y1="185" x2="370" y2="185" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 4"/>
    <text x="195" y="180" fill="#ef4444" font-size="9" font-weight="bold" text-anchor="middle">MMU HARDWARE MEMORY BARRIER (Zero Unauthorized Access)</text>
    
    <!-- Process 2085 Box -->
    <rect x="20" y="195" width="350" height="125" rx="6" fill="#0f172a" stroke="#a855f7"/>
    <text x="35" y="218" fill="#c084fc" font-size="11" font-weight="bold">PROCESS PID 2085 (PostgreSQL Database)</text>
    <rect x="35" y="228" width="95" height="32" rx="4" fill="#1e293b" stroke="#7e22ce"/>
    <text x="82" y="248" fill="#cbd5e1" font-size="9" text-anchor="middle">Stack (8MB)</text>
    <rect x="140" y="228" width="95" height="32" rx="4" fill="#1e293b" stroke="#7e22ce"/>
    <text x="187" y="248" fill="#cbd5e1" font-size="9" text-anchor="middle">Shared Buffers</text>
    <rect x="245" y="228" width="110" height="32" rx="4" fill="#1e293b" stroke="#7e22ce"/>
    <text x="300" y="248" fill="#cbd5e1" font-size="9" text-anchor="middle">WAL Segment</text>
    <text x="195" y="298" fill="#fca5a5" font-size="9" text-anchor="middle">If PID 1042 attempts to read PID 2085: MMU throws SIGSEGV!</text>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">The operating system isolates every process; corrupting one application cannot harm another</text>
</svg>`,
      caption: {
        en: 'The operating system kernel maintains a Process Control Block for every PID, enforcing total memory isolation through the hardware MMU.',
        bn: 'অপারেটিং সিস্টেম কার্নেল প্রতিটি পিআইডির জন্য একটি প্রসেস কন্ট্রোল ব্লক সংরক্ষণ করে এবং হার্ডওয়্যার MMU-এর মাধ্যমে মেমোরি সুরক্ষা বজায় রাখে।'
      },
    },
    {
      type: 'heading',
      id: 'pcb-telemetry-and-simulation-code',
      text: {
        en: 'Process Telemetry & Kernel PCB Simulation',
        bn: 'প্রসেস টেলিমেট্রি এবং কার্নেল PCB সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'You can inspect the runtime properties of your active execution environment directly in code. The following program introspects the current process telemetry and simulates how an operating system kernel maintains Process Control Block entries during task execution.',
        bn: 'আপনি কোডের মাধ্যমেই আপনার চলমান সিস্টেমের বিভিন্ন তথ্য পর্যবেক্ষণ করতে পারেন। নিচের প্রোগ্রামটি বর্তমান প্রসেসের টেলিমেট্রি বিশ্লেষণ করে এবং কার্নেল কীভাবে প্রসেস কন্ট্রোল ব্লক বজায় রাখে তা প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'process-pcb-inspector.js',
      code: `// Deterministic Process Introspection & Kernel PCB Simulator
// Demonstrates live process telemetry and operating system task tracking

// 1. Live Runtime Process Introspection
console.log('=== Step 1: Host Process Telemetry ===');
console.log('Process Identifier (PID) :', process.pid);
console.log('Parent Process ID  (PPID):', process.ppid);
console.log('Platform & Architecture  :', process.platform, process.arch);
console.log('Node.js Version          :', process.version);
const mem = process.memoryUsage();
console.log('Heap Used                :', Math.round(mem.heapUsed / 1024), 'KB');
console.log('Heap Total               :', Math.round(mem.heapTotal / 1024), 'KB');

// 2. Simulated Kernel Process Control Block (PCB) Structure
class KernelProcessControlBlock {
  constructor(pid, ppid, executableName, uid = 1000) {
    this.pid = pid;
    this.ppid = ppid;
    this.executable = executableName;
    this.uid = uid;
    this.state = 'NEW';
    // CPU hardware register snapshot
    this.savedRegisters = {
      programCounter: 0x00401000,
      stackPointer: 0x7FFF0000,
      accumulator: 0
    };
    // Standard POSIX file descriptor table
    this.fileDescriptorTable = new Map([
      [0, 'stdin'],
      [1, 'stdout'],
      [2, 'stderr']
    ]);
  }

  // Simulates kernel state transition
  transitionTo(nextState) {
    this.state = nextState;
  }

  // Opens a simulated network socket descriptor
  openNetworkSocket(port) {
    const nextFd = this.fileDescriptorTable.size;
    this.fileDescriptorTable.set(nextFd, 'TCP_SOCKET:0.0.0.0:' + port);
    return nextFd;
  }
}

console.log('\\n=== Step 2: Kernel PCB State Machine ===');
const pcb = new KernelProcessControlBlock(1042, 1, 'api-gateway');
console.log('Initial State     :', pcb.state);

pcb.transitionTo('READY');
console.log('Scheduler Enqueue :', pcb.state);

pcb.transitionTo('RUNNING');
console.log('CPU Dispatched    :', pcb.state);

const socketFd = pcb.openNetworkSocket(8080);
console.log('Opened Socket FD  :', socketFd, '->', pcb.fileDescriptorTable.get(socketFd));

console.log('\\nSummary: Operating systems isolate processes so PID 1042 cannot access PID 2085 memory without explicit IPC channels.');`,
      caption: {
        en: 'The simulation inspects host process telemetry and models kernel PCB register tracking and file descriptor allocation.',
        bn: 'সিমুলেশনটি হোস্ট প্রসেস টেলিমেট্রি বিশ্লেষণ করে এবং কার্নেল PCB রেজিস্টার ট্র্যাকিং ও ফাইল ডেসক্রিপ্টর বরাদ্দ প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Inspecting Live PCBs via the Linux /proc Filesystem',
        bn: 'লিনাক্স /proc ফাইলসিস্টেমের মাধ্যমে সরাসরি PCB পর্যবেক্ষণ'
      },
      text: {
        en: 'In Unix and Linux systems, everything is structured as a file—including running processes! The pseudo-filesystem mounted at /proc exposes the live Process Control Block of every running task directly to user space. Reading /proc/[PID]/status displays memory limits and thread counts; reading /proc/[PID]/cmdline reveals the launch arguments; reading /proc/[PID]/fd lists all open file descriptors and network sockets. You can inspect your own running shell process right now by executing cat /proc/$$/status in any Linux terminal.',
        bn: 'ইউনিক্স ও লিনাক্স সিস্টেমে প্রতিটি উপাদান একটি ফাইল হিসেবে পরিচালিত হয়—এমনকি চলমান প্রসেসগুলোও! /proc ডিরেক্টরিতে মাউন্ট করা ভার্চুয়াল ফাইলসিস্টেমটি প্রতিটি চলমান প্রসেসের লাইভ প্রসেস কন্ট্রোল ব্লককে সরাসরি দেখার সুযোগ দেয়। /proc/[PID]/status ফাইলটি পড়লে মেমোরি সীমা ও থ্রেড সংখ্যা জানা যায়; /proc/[PID]/cmdline প্রসেসটি শুরুর কমান্ড দেখায়; আর /proc/[PID]/fd সমস্ত ওপেন ফাইল ডেসক্রিপ্টর ও সকেট প্রদর্শন করে। আপনি যেকোনো লিনাক্স টার্মিনালে cat /proc/$$/status লিখে তাৎক্ষণিকভাবে আপনার নিজস্ব শেলের PCB তথ্য দেখতে পারেন।'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-meet-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the numerical Process ID (PID) assigned to the root ancestor init or systemd process on Linux? (1). Type the number.',
        bn: 'লিনাক্স সিস্টেমে সমস্ত ব্যাকগ্রাউন্ড সার্ভিসের মূল পূর্বপুরুষ init বা systemd প্রসেসের প্রসেস আইডি (PID) কত? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'The first user space process is PID 1.',
        bn: 'প্রথম ইউজার স্পেস প্রসেসটি হলো PID ১।'
      },
      explanation: {
        en: 'PID 1 is the ancestor of all user-space processes on Linux systems, launched directly by the kernel at boot.',
        bn: 'লিনাক্স সিস্টেমে PID ১ হলো সমস্ত ইউজার স্পেস প্রসেসের আদি উৎস, যা সিস্টেম বুট করার সময় কার্নেল সরাসরি চালু করে।'
      },
    },
    {
      id: 'proc-meet-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the operational function of the Process Control Block (PCB) in an operating system kernel?',
        bn: 'একটি অপারেটিং সিস্টেম কার্নেলে প্রসেস কন্ট্রোল ব্লকের (PCB) কাজের ভূমিকা কী?'
      },
      options: [
        {
          en: 'It is a kernel data structure that stores all critical telemetry, CPU registers, memory maps, execution state, and open file descriptors for a process',
          bn: 'এটি কার্নেলের একটি মূল ডাটা স্ট্রাকচার যা একটি প্রসেসের সমস্ত টেলিমেট্রি, সিপিইউ রেজিস্টার, মেমোরি ম্যাপ, স্টেট এবং ওপেন ফাইল ডেসক্রিপ্টর সংরক্ষণ করে',
        },
        {
          en: 'It is a plastic sticker attached to the computer power cord',
          bn: 'এটি কম্পিউটারের পাওয়ার কর্ডের সাথে লাগানো একটি প্লাস্টিকের স্টিকার',
        },
        {
          en: 'It increases the physical volume of the computer cooling fan',
          bn: 'এটি কম্পিউটার কুলিং ফ্যানের শারীরিক গতি বৃদ্ধি করে',
        },
        {
          en: 'It deletes the computer hard drive when the battery is low',
          bn: 'ব্যাটারি কম থাকলে এটি কম্পিউটারের হার্ড ড্রাইভ মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'The kernel data structure holding all process state, registers, and descriptors.',
        bn: 'কার্নেলের ডাটা স্ট্রাকচার যা প্রসেসের স্টেট, রেজিস্টার ও ডেসক্রিপ্টর সংরক্ষণ করে।',
      },
      explanation: {
        en: 'The PCB serves as the central record for the OS scheduler to manage, suspend, and resume processes cleanly.',
        bn: 'পিসিবি হলো কেন্দ্রীয় রেকর্ড যার সাহায্যে ওএস শিডিউলার যেকোনো প্রসেস চালু, স্থগিত বা পুনরায় শুরু করতে পারে।'
      },
    },
    {
      id: 'proc-meet-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the technical distinction between a static program binary and an active process?',
        bn: 'একটি স্ট্যাটিক প্রোগ্রাম বাইনারি এবং একটি সক্রিয় প্রসেসের মধ্যে প্রযুক্তিগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'A program is a passive executable file stored on disk, whereas a process is an active executing instance possessing virtual memory, stack, and hardware resources',
          bn: 'প্রোগ্রাম হলো ডিস্কে সংরক্ষিত একটি নিষ্ক্রিয় ফাইল, আর প্রসেস হলো সক্রিয় একটি চলমান ইনস্ট্যান্স যার নিজস্ব ভার্চুয়াল মেমোরি, স্ট্যাক এবং হার্ডওয়্যার সম্পদ থাকে',
        },
        {
          en: 'A program can only contain English text, while a process contains images',
          bn: 'প্রোগ্রামে কেবল ইংরেজি লেখা থাকে, আর প্রসেসে ছবি সংরক্ষিত হয়',
        },
        {
          en: 'Programs run on mobile phones, while processes run on calculators',
          bn: 'প্রোগ্রাম মোবাইল ফোনে চলে, আর প্রসেস ক্যালকুলেটরে চলে',
        },
        {
          en: 'There is zero technical difference between the two terms',
          bn: 'এই দুটি পদের মধ্যে কোনো প্রযুক্তিগত পার্থক্য নেই',
        },
      ],
      answer: 0,
      hint: {
        en: 'A program is code on disk; a process is that code actively running in memory.',
        bn: 'প্রোগ্রাম হলো ডিস্কের ফাইল; আর প্রসেস হলো মেমোরিতে চলা সক্রিয় কোড।',
      },
      explanation: {
        en: 'When a program is executed, the OS loads its binary code into virtual memory and creates a process to run it.',
        bn: 'কোনো প্রোগ্রাম চালু করলে ওএস তার কোড মেমোরিতে লোড করে একটি সক্রিয় প্রসেস তৈরি করে।'
      },
    },
    {
      id: 'proc-meet-ex-4',
      kind: 'predict',
      question: {
        en: 'In POSIX operating systems, what integer file descriptor is standard output (stdout) assigned to? (1). Type the number.',
        bn: 'পসিক্স অপারেটিং সিস্টেমে স্ট্যান্ডার্ড আউটপুট (stdout) কোন পূর্ণসংখ্যা ফাইল ডেসক্রিপ্টরে বরাদ্দ থাকে? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Standard output is assigned file descriptor 1 (0 is stdin, 2 is stderr).',
        bn: 'স্ট্যান্ডার্ড আউটপুটের ফাইল ডেসক্রিপ্টর হলো ১ ( ০ হলো stdin, ২ হলো stderr )।',
      },
      explanation: {
        en: 'POSIX reserves file descriptor 0 for stdin, 1 for stdout, and 2 for stderr.',
        bn: 'পসিক্স মানদণ্ডে ০ হলো stdin, ১ হলো stdout এবং ২ হলো stderr।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Operating System Processes Quiz',
      bn: 'অপারেটিং সিস্টেম প্রসেস কুইজ'
    },
    questions: [
      {
        id: 'proc-meet-qz-1',
        kind: 'mcq',
        topic: 'process-memory-isolation-need',
        question: {
          en: 'Why do modern operating systems strictly isolate virtual memory spaces between concurrent processes?',
          bn: 'আধুনিক অপারেটিং সিস্টেমগুলো কেন চলমান প্রসেসগুলোর ভার্চুয়াল মেমোরি একে অপরের থেকে সম্পূর্ণ আলাদা রাখে?'
        },
        options: [
          {
            en: 'Memory isolation prevents faulty, crashing, or malicious applications from reading private data or corrupting the memory of other processes and the kernel',
            bn: 'মেমোরি আইসোলেশন যেকোনো ত্রুটিপূর্ণ, ক্র্যাশ করা বা ক্ষতিকর অ্যাপ্লিকেশনকে অন্য প্রসেস বা কার্নেলের গোপন তথ্য পড়া ও ডাটা নষ্ট করা থেকে বিরত রাখে',
          },
          {
            en: 'Because computer hardware cannot count beyond 1000 bytes',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার ১০০০ বাইটের বেশি গণনা করতে পারে না',
          },
          {
            en: 'To make all computer software run at half their normal speed',
            bn: 'সমস্ত সফটওয়্যারের গতি স্বাভাবিকের চেয়ে অর্ধেক কমিয়ে আনার উদ্দেশ্যে',
          },
          {
            en: 'Because computer screens can only display one window at a time',
            bn: 'কারণ কম্পিউটার স্ক্রিনে একসাথে কেবল একটি উইন্ডো দেখা সম্ভব',
          },
        ],
        answer: 0,
        hint: {
          en: 'Preventing applications from corrupting each other memory.',
          bn: 'অ্যাপ্লিকেশনগুলো যেন একে অপরের মেমোরি নষ্ট করতে না পারে তা ঠেকানো।',
        },
        explanation: {
          en: 'Process isolation guarantees system stability: an unhandled exception or crash in one app cannot bring down the entire computer.',
          bn: 'প্রসেস আইসোলেশন সিস্টেমের সুরক্ষা নিশ্চিত করে: একটি অ্যাপ ক্র্যাশ করলেও সম্পূর্ণ কম্পিউটার সচল থাকে।'
        },
      },
      {
        id: 'proc-meet-qz-2',
        kind: 'mcq',
        topic: 'context-switch-registers',
        question: {
          en: 'What data does the operating system kernel save into a Process Control Block when performing a context switch away from a running process?',
          bn: 'চলমান প্রসেস থেকে কনটেক্সট সুইচ করার সময় অপারেটিং সিস্টেম কার্নেল প্রসেস কন্ট্রোল ব্লকে কোন ডাটা সংরক্ষণ করে?'
        },
        options: [
          {
            en: 'The Program Counter, Stack Pointer, CPU general-purpose registers, and memory management state, ensuring the process can resume seamlessly later',
            bn: 'প্রোগ্রাম কাউন্টার, স্ট্যাক পয়েন্টার, সিপিইউ রেজিস্টার এবং মেমোরি স্টেট, যাতে পরবর্তীতে প্রসেসটি ঠিক যেখান থেকে থেমেছিল সেখান থেকেই শুরু হতে পারে',
          },
          {
            en: 'The retail purchase receipt of the computer graphics card',
            bn: 'কম্পিউটার গ্রাফিক্স কার্ডের খুচরা ক্রয়ের রসিদ',
          },
          {
            en: 'The personal social media login passwords of the user',
            bn: 'ব্যবহারকারীর ব্যক্তিগত সোশ্যাল মিডিয়া লগইন পাসওয়ার্ড',
          },
          {
            en: 'A high-resolution photo of the computer motherboard',
            bn: 'কম্পিউটার মাদারবোর্ডের একটি উচ্চমানের রঙিন ছবি',
          },
        ],
        answer: 0,
        hint: {
          en: 'Saving CPU registers and pointers so execution resumes seamlessly.',
          bn: 'সিপিইউ রেজিস্টার ও পয়েন্টার সংরক্ষণ যাতে কাজ পরবর্তীতে মসৃণভাবে শুরু হয়।',
        },
        explanation: {
          en: 'The kernel saves the exact hardware state (registers, flags, PC) into the PCB, allowing another process to use the CPU without data loss.',
          bn: 'কার্নেল হার্ডওয়্যার রেজিস্টার ও পিসির মান পিসিবিতে জমা রাখে, ফলে অন্য প্রসেস কোনো বিঘ্ন ছাড়াই সিপিইউ ব্যবহার করতে পারে।'
        },
      },
      {
        id: 'proc-meet-qz-3',
        kind: 'mcq',
        topic: 'linux-proc-inspection',
        question: {
          en: 'What virtual filesystem in Linux enables system administrators and developers to inspect live Process Control Block telemetry directly?',
          bn: 'লিনাক্সের কোন ভার্চুয়াল ফাইলসিস্টেমের মাধ্যমে সিস্টেম অ্যাডমিন ও ডেভেলপাররা সরাসরি লাইভ প্রসেস কন্ট্রোল ব্লক পর্যবেক্ষণ করতে পারেন?'
        },
        options: [
          {
            en: 'The /proc pseudo-filesystem, which exposes active kernel process data structures as readable text files and directories',
            bn: '/proc সিউডো-ফাইলসিস্টেম, যা কার্নেলের সক্রিয় প্রসেস ডাটা স্ট্রাকচারকে পাঠযোগ্য টেক্সট ফাইল ও ডিরেক্টরি হিসেবে প্রকাশ করে',
          },
          {
            en: 'The /games folder on the desktop',
            bn: 'ডেস্কটপে থাকা /games ফোল্ডারটি',
          },
          {
            en: 'The computer BIOS settings menu on a USB thumb drive',
            bn: 'একটি ইউএসবি পেনড্রাইভে সংরক্ষিত কম্পিউটার BIOS মেনুটি',
          },
          {
            en: 'The local recycling bin of deleted files',
            bn: 'মুছে ফেলা ফাইলের লোকাল রিসাইকেল বিনটি',
          },
        ],
        answer: 0,
        hint: {
          en: 'The /proc directory exposes process status and descriptors as files.',
          bn: '/proc ডিরেক্টরি প্রসেসের তথ্য ও ফাইল ডেসক্রিপ্টর প্রদর্শন করে।',
        },
        explanation: {
          en: 'Linux /proc is an in-memory virtual filesystem generated on-the-fly by the kernel to provide diagnostic access to process internals.',
          bn: 'লিনাক্স /proc হলো একটি ভার্চুয়াল ফাইলসিস্টেম যা কার্নেল দ্বারা রিয়েল-টাইমে তৈরি হয় এবং প্রসেসের অভ্যন্তরীণ তথ্য তুলে ধরে।'
        },
      },
      {
        id: 'proc-meet-qz-4',
        kind: 'mcq',
        topic: 'unauthorized-memory-access-sigsegv',
        question: {
          en: 'What hardware and kernel events occur if Process A attempts to read or modify the private virtual memory space of Process B without authorization?',
          bn: 'প্রসেস A যদি অনুমতি ছাড়া প্রসেস B-এর ব্যক্তিগত ভার্চুয়াল মেমোরি পড়ার বা পরিবর্তন করার চেষ্টা করে, তবে কী ঘটে?'
        },
        options: [
          {
            en: 'The CPU Memory Management Unit (MMU) catches the page privilege violation and triggers a trap to the kernel, which immediately issues a SIGSEGV (segmentation fault) to terminate Process A',
            bn: 'সিপিইউর মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) পেজ পারমিশন লঙ্ঘন শনাক্ত করে কার্নেলকে ইন্টারাপ্ট দেয়, যা তাৎক্ষণিকভাবে SIGSEGV ( সেগমেন্টেশন ফল্ট ) তৈরি করে প্রসেস A-কে বন্ধ করে দেয়',
          },
          {
            en: 'The operating system merges both processes into a video game',
            bn: 'অপারেটিং সিস্টেম উভয় প্রসেসকে একটি ভিডিও গেমে রূপান্তর করে',
          },
          {
            en: 'The computer monitor plays an alarm siren through the audio speakers',
            bn: 'কম্পিউটার স্পিকার দিয়ে বিকট সাইরেন বাজানো শুরু করে',
          },
          {
            en: 'Both processes are uploaded automatically to a cloud storage website',
            bn: 'উভয় প্রসেস স্বয়ংক্রিয়ভাবে ক্লাউড স্টোরেজে আপলোড হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'The MMU triggers a page fault, and the kernel terminates the process with a segmentation fault.',
          bn: 'MMU পেজ ফল্ট তৈরি করে এবং কার্নেল সেগমেন্টেশন ফল্ট দিয়ে প্রসেস থামিয়ে দেয়।',
        },
        explanation: {
          en: 'Hardware page table protection registers prevent cross-process access. Breaching this boundary causes an instant SIGSEGV segmentation fault.',
          bn: 'হার্ডওয়্যার পেজ টেবিল সুরক্ষা অন্য প্রসেসের মেমোরি ছোঁয়া অসম্ভব করে তোলে। সীমা লঙ্ঘন করলে কার্নেল সাথে সাথে সেগমেন্টেশন ফল্ট তৈরি করে।'
        },
      },
    ],
  },
  next: {
    slug: 'process-lifecycle',
    title: {
      en: 'Process Lifecycle: Program Binary to Executing Virtual Space',
      bn: 'প্রসেস জীবনচক্র: প্রোগ্রাম বাইনারি থেকে সক্রিয় ভার্চুয়াল স্পেস'
    },
  },
};
