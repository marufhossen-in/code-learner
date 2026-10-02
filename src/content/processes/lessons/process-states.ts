import type { Lesson } from '../../../lib/types';

export const ProcessStatesLesson: Lesson = {
  slug: 'process-states',
  tech: 'processes',
  title: {
    en: 'Process States: 5-State Life Machine, State Transitions & Context Switching',
    bn: 'প্রসেস স্টেটস: ৫-স্টেট জীবনচক্র, স্টেট রূপান্তর এবং কনটেক্সট সুইচিং'
  },
  summary: {
    en: 'Explore the five fundamental process execution states managed by the operating system kernel: New, Ready, Running, Waiting, and Terminated. Trace how the CPU scheduler dispatches ready processes, how I/O operations transition processes into interruptible sleep or uninterruptible sleep, and understand the hardware mechanics and microsecond latency cost of CPU context switching.',
    bn: 'অপারেটিং সিস্টেম কার্নেল দ্বারা পরিচালিত ৫ টি মৌলিক প্রসেস এক্সিকিউশন স্টেট অন্বেষণ করুন: New, Ready, Running, Waiting এবং Terminated। সিপিইউ শিডিউলার কীভাবে রেডি প্রসেসগুলোকে প্রসেসরে পাঠায়, I/O অপারেশন কীভাবে প্রসেসকে ইন্টারাপ্টিবল স্লিপ বা আনইন্টারাপ্টিবল স্লিপে স্থানান্তর করে তা বিশ্লেষণ করুন এবং সিপিইউ কনটেক্সট সুইচিংয়ের হার্ডওয়্যার মেকানিজম ও মাইক্রোসেকেন্ড সময়ের খরচ শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'preemptive-multitasking-and-states',
      text: {
        en: 'The Multitasking Illusion: The 5-State Process Life Machine',
        bn: 'মাল্টিটাস্কিংয়ের বাস্তবতা: ৫-স্টেট প্রসেস জীবনচক্র মেশিন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Even on modern computer microprocessors with 8 CPU cores, an operating system routinely executes over 400 processes concurrently. The operating system creates this seamless multitasking illusion through preemptive time-slicing managed by a formal 5-State Process Machine.',
        bn: '৮ টি সিপিইউ কোর বিশিষ্ট আধুনিক কম্পিউটারেও একটি অপারেটিং সিস্টেম একই সাথে ৪০০ টিরও বেশি প্রসেস দক্ষতার সাথে পরিচালনা করে। অপারেটিং সিস্টেম প্রিম্পটিভ টাইম-স্লাইসিং এবং ৫ টি নির্দিষ্ট প্রসেস স্টেটের মাধ্যমে এই নির্বিঘ্ন মাল্টিটাস্কিংয়ের অভিজ্ঞতা উপহার দেয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'At any given nanosecond, a process resides in one specific state. The operating system kernel scheduler constantly evaluates which processes need processor attention, moving tasks between execution states to maximize CPU utilization while preventing thread starvation.',
        bn: 'যেকোনো নির্দিষ্ট মুহূর্তে একটি প্রসেস কেবল একটি নির্দিষ্ট স্টেটেই অবস্থান করে। অপারেটিং সিস্টেম কার্নেল শিডিউলার প্রতিনিয়ত মূল্যায়ন করে কোন প্রসেসটির প্রসেসর সময় প্রয়োজন এবং মেমোরির কাজ ব্যাহত না করে সর্বোচ্চ গতি নিশ্চিত করতে স্টেটগুলোর মাঝে প্রসেস স্থানান্তর করে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. New (Creation Phase)',
            bn: '১. New ( প্রস্তুতিমূলক ধাপ )'
          },
          text: {
            en: 'The process is being created. The kernel allocates a new Process Control Block, assigns a unique PID, and prepares virtual memory page directories.',
            bn: 'প্রসেসটি কেবল তৈরি হচ্ছে। কার্নেল একটি নতুন প্রসেস কন্ট্রোল ব্লক বরাদ্দ করে, একটি অনন্য PID নির্ধারণ করে এবং ভার্চুয়াল মেমোরি পেজ ডিরেক্টরি প্রস্তুত করে।'
          },
        },
        {
          title: {
            en: '2. Ready (Waiting for CPU Allocation)',
            bn: '২. Ready ( সিপিইউ পাওয়ার অপেক্ষায় )'
          },
          text: {
            en: 'The process is fully loaded in memory and placed into the kernel ready queue, waiting for the CPU scheduler to assign it a physical processor core.',
            bn: 'প্রসেসটি মেমোরিতে সম্পূর্ণ প্রস্তুত এবং কার্নেলের রেডি কিউতে অবস্থান করছে, কেবল সিপিইউ শিডিউলার কখন একে একটি খালি প্রসেসর কোর বরাদ্দ দেবে সেই অপেক্ষায় রয়েছে।'
          },
        },
        {
          title: {
            en: '3. Running (Actively Executing on Silicon)',
            bn: '৩. Running ( প্রসেসরে সরাসরি চলছে )'
          },
          text: {
            en: 'The process instructions are actively being decoded and executed on an actual CPU core. It runs until its time slice expires or it initiates an I/O request.',
            bn: 'প্রসেসের নির্দেশনাগুলো সরাসরি সিপিইউ কোরে কার্যকর হচ্ছে। এটি ততক্ষণ চলে যতক্ষণ না এর জন্য বরাদ্দকৃত সময়সীমা শেষ হয় অথবা এটি কোনো I/O অনুরোধ পাঠায়।'
          },
        },
        {
          title: {
            en: '4. Waiting / Blocked (Awaiting External Events)',
            bn: '৪. Waiting / Blocked ( বাহ্যিক ঘটনার অপেক্ষায় )'
          },
          text: {
            en: 'The process cannot execute because it is waiting for an external event: reading a block from an NVMe drive, waiting for an incoming TCP network packet, or sleeping.',
            bn: 'প্রসেসটি এই মুহূর্তে চলতে অক্ষম কারণ এটি কোনো বাহ্যিক ঘটনার অপেক্ষায় রয়েছে: ডিস্ক থেকে ফাইল রিড, নেটওয়ার্ক থেকে ডাটা প্যাকেট আসা অথবা স্লিপ টাইমার।'
          },
        },
        {
          title: {
            en: '5. Terminated (Execution Completed)',
            bn: '৫. Terminated ( কাজ সম্পূর্ণ সমাপ্ত )'
          },
          text: {
            en: 'The process has completed its instructions or exited via an unhandled signal. Its memory is reclaimed, and its exit code remains in the PCB until collected by the parent.',
            bn: 'প্রসেসটি তার সমস্ত নির্দেশনা সম্পন্ন করেছে বা কোনো সিগন্যালে বন্ধ হয়েছে। এর মেমোরি সিস্টেমে ফেরত দেওয়া হয়েছে এবং প্যারেন্ট সংগ্রহ না করা পর্যন্ত এক্সিট কোড জমা থাকে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The 5-State Process Machine & Hardware Context Switch Mechanism',
        bn: '৫-স্টেট প্রসেস মেশিন এবং হার্ডওয়্যার কনটেক্সট সুইচিং মেকানিজম'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Five state process lifecycle machine showing New, Ready, Running, Waiting, and Terminated states">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">OPERATING SYSTEM 5-STATE PROCESS LIFE MACHINE</text>
  
  <!-- State 1: NEW -->
  <g transform="translate(30, 160)">
    <rect width="110" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="55" y="38" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">NEW</text>
    <text x="55" y="58" fill="#94a3b8" font-size="9" text-anchor="middle">Fork / Spawn</text>
  </g>
  
  <!-- Arrow: New to Ready -->
  <line x1="140" y1="200" x2="200" y2="200" stroke="#38bdf8" stroke-width="2"/>
  <polygon points="200,196 208,200 200,204" fill="#38bdf8"/>
  <text x="174" y="190" fill="#38bdf8" font-size="9" text-anchor="middle">Admitted</text>
  
  <!-- State 2: READY -->
  <g transform="translate(210, 160)">
    <rect width="130" height="80" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="65" y="38" fill="#10b981" font-size="14" font-weight="bold" text-anchor="middle">READY</text>
    <text x="65" y="58" fill="#cbd5e1" font-size="9" text-anchor="middle">In Run Queue</text>
  </g>
  
  <!-- Arrow: Ready to Running (Dispatch) -->
  <line x1="340" y1="185" x2="430" y2="185" stroke="#10b981" stroke-width="2"/>
  <polygon points="430,181 438,185 430,189" fill="#10b981"/>
  <text x="385" y="175" fill="#10b981" font-size="9" text-anchor="middle">Dispatch</text>
  
  <!-- Arrow: Running to Ready (Preempt / Timer Interrupt) -->
  <path d="M 440 215 C 390 235 390 235 340 215" stroke="#f59e0b" stroke-width="2" fill="none"/>
  <polygon points="345,212 338,214 343,219" fill="#f59e0b"/>
  <text x="385" y="248" fill="#f59e0b" font-size="9" text-anchor="middle">Time Slice Expired (Preempt)</text>
  
  <!-- State 3: RUNNING -->
  <g transform="translate(440, 160)">
    <rect width="140" height="80" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="70" y="38" fill="#f59e0b" font-size="14" font-weight="bold" text-anchor="middle">RUNNING</text>
    <text x="70" y="58" fill="#cbd5e1" font-size="9" text-anchor="middle">Executing on CPU</text>
  </g>
  
  <!-- Arrow: Running to Terminated -->
  <line x1="580" y1="200" x2="660" y2="200" stroke="#ef4444" stroke-width="2"/>
  <polygon points="660,196 668,200 660,204" fill="#ef4444"/>
  <text x="620" y="190" fill="#ef4444" font-size="9" text-anchor="middle">Exit()</text>
  
  <!-- State 4: TERMINATED -->
  <g transform="translate(670, 160)">
    <rect width="130" height="80" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="65" y="38" fill="#ef4444" font-size="14" font-weight="bold" text-anchor="middle">TERMINATED</text>
    <text x="65" y="58" fill="#cbd5e1" font-size="9" text-anchor="middle">Zombie / Done</text>
  </g>
  
  <!-- State 5: WAITING / BLOCKED (Bottom) -->
  <g transform="translate(325, 300)">
    <rect width="150" height="75" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="75" y="35" fill="#c084fc" font-size="13" font-weight="bold" text-anchor="middle">WAITING</text>
    <text x="75" y="55" fill="#cbd5e1" font-size="9" text-anchor="middle">Blocked on I/O or Sleep</text>
  </g>
  
  <!-- Arrow: Running to Waiting -->
  <path d="M 480 240 C 480 270 470 300 450 300" stroke="#a855f7" stroke-width="2" fill="none"/>
  <polygon points="452,295 444,301 454,305" fill="#a855f7"/>
  <text x="510" y="280" fill="#c084fc" font-size="9">I/O Wait or Sleep()</text>
  
  <!-- Arrow: Waiting to Ready -->
  <path d="M 325 330 C 260 330 260 270 260 240" stroke="#10b981" stroke-width="2" fill="none"/>
  <polygon points="256,245 260,238 264,245" fill="#10b981"/>
  <text x="210" y="315" fill="#10b981" font-size="9">I/O Complete -> Ready</text>
  
  <!-- Top Banner: Context Switch Cost Box -->
  <g transform="translate(180, 55)">
    <rect width="480" height="60" rx="6" fill="#0f172a" stroke="#64748b"/>
    <text x="240" y="25" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">HARDWARE CONTEXT SWITCH LATENCY</text>
    <text x="240" y="44" fill="#94a3b8" font-size="10" text-anchor="middle">Saving registers &amp; flushing TLB takes 1 to 5 microseconds per switch</text>
  </g>
  
  <text x="420" y="420" fill="#94a3b8" font-size="10" text-anchor="middle">Preemption moves running tasks to Ready; I/O completion moves waiting tasks back to Ready</text>
</svg>`,
      caption: {
        en: 'The 5-state process machine governs all task transitions. Context switching saves hardware registers between tasks in 1 to 5 microseconds.',
        bn: '৫-স্টেট প্রসেস মেশিন সমস্ত প্রসেস পরিবর্তন নিয়ন্ত্রণ করে। কনটেক্সট সুইচিং ১ থেকে ৫ মাইক্রোসেকেন্ডে রেজিস্টার তথ্য সংরক্ষণ করে।'
      },
    },
    {
      type: 'heading',
      id: 'state-machine-and-context-switch-code',
      text: {
        en: 'Process State Transitions & Preemption Simulator',
        bn: 'প্রসেস স্টেট ট্রানজিশন এবং প্রিম্পশন সিমুলেটর'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Operating system kernels enforce strict transition rules to prevent corrupt states. For example, a waiting process can never jump directly to running without passing through the ready queue first. The following code simulates process state transitions and records context switch events.',
        bn: 'অবৈধ স্টেট রোধ করতে অপারেটিং সিস্টেম কার্নেল কঠোর ট্রানজিশন নিয়ম মেনে চলে। উদাহরণস্বরূপ, একটি অপেক্ষমান প্রসেস কখনোই রেডি কিউতে না গিয়ে সরাসরি রানিং স্টেটে প্রবেশ করতে পারে না। নিচের কোডটি স্টেট পরিবর্তন এবং কনটেক্সট সুইচিং ইভেন্ট পর্যবেক্ষণ প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'process-state-machine-simulation.js',
      code: `// Deterministic 5-State Operating System Process Machine
// Enforces valid state transitions and measures context switch operations

class ProcessLifeMachine {
  constructor(pid, name) {
    this.pid = pid;
    this.name = name;
    this.state = 'NEW';
    this.dispatchCount = 0;
    this.preemptCount = 0;
    this.ioWaitCount = 0;
  }

  // State: NEW -> READY
  admit() {
    if (this.state !== 'NEW') {
      throw new Error('INVALID_TRANSITION: Can only admit from NEW state');
    }
    this.state = 'READY';
  }

  // State: READY -> RUNNING
  dispatch() {
    if (this.state !== 'READY') {
      throw new Error('INVALID_TRANSITION: Can only dispatch from READY state');
    }
    this.state = 'RUNNING';
    this.dispatchCount++;
  }

  // State: RUNNING -> READY (Time slice preemption)
  preempt() {
    if (this.state !== 'RUNNING') {
      throw new Error('INVALID_TRANSITION: Can only preempt from RUNNING state');
    }
    this.state = 'READY';
    this.preemptCount++;
  }

  // State: RUNNING -> WAITING (I/O block)
  blockOnIO() {
    if (this.state !== 'RUNNING') {
      throw new Error('INVALID_TRANSITION: Can only block from RUNNING state');
    }
    this.state = 'WAITING';
    this.ioWaitCount++;
  }

  // State: WAITING -> READY (I/O done)
  unblockIO() {
    if (this.state !== 'WAITING') {
      throw new Error('INVALID_TRANSITION: Can only unblock from WAITING state');
    }
    this.state = 'READY'; // Never jumps straight to RUNNING!
  }

  // State: RUNNING -> TERMINATED
  terminate() {
    if (this.state !== 'RUNNING') {
      throw new Error('INVALID_TRANSITION: Can only terminate from RUNNING state');
    }
    this.state = 'TERMINATED';
  }
}

const processA = new ProcessLifeMachine(5012, 'payment-gateway');

console.log('=== Step 1: Process Lifecycle Walkthrough ===');
processA.admit();
console.log('Task Created & Admitted  : State is', processA.state);

processA.dispatch();
console.log('Scheduler Assigned CPU   : State is', processA.state);

processA.blockOnIO();
console.log('Waiting for Bank API     : State is', processA.state);

processA.unblockIO();
console.log('Bank API Response Arrived: State is', processA.state, '(Enqueued in Ready Queue)');

processA.dispatch();
console.log('CPU Dispatched Again     : State is', processA.state);

processA.preempt();
console.log('Time Slice Expired       : State is', processA.state, '(Preempted by Scheduler)');

processA.dispatch();
processA.terminate();
console.log('Execution Finished       : State is', processA.state);

console.log('\\n=== Telemetry Summary ===');
console.log('Total CPU Dispatches     :', processA.dispatchCount);
console.log('Total Preemptions        :', processA.preemptCount);
console.log('Total I/O Wait Blocks    :', processA.ioWaitCount);
console.log('Rule Verified: WAITING tasks must re-enter READY queue before acquiring CPU.');`,
      caption: {
        en: 'The simulation traces legal transitions across all 5 states, proving waiting processes must re-enter Ready before running.',
        bn: 'সিমুলেশনটি ৫ টি স্টেটের বৈধ পরিবর্তনগুলো দেখায় এবং প্রমাণ করে যে অপেক্ষমান প্রসেসকে রানিংয়ে যেতে অবশ্যই রেডি কিউতে ঢুকতে হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'Uninterruptible Sleep (D State) and the Unkillable Process',
        bn: 'আনইন্টারাপ্টিবল স্লিপ (D স্টেট) এবং অমোচনীয় প্রসেস'
      },
      text: {
        en: 'Have you ever issued kill -9 on Linux only to discover that the process stubbornly refused to terminate? The process is almost certainly in the Uninterruptible Sleep (D) state. In this state, a thread is blocked inside the kernel waiting for physical disk hardware or network NFS I/O to complete. The Linux kernel intentionally ignores all signals—including SIGKILL—while in D-state to prevent filesystem corruption. The only resolution is waiting for the hardware I/O to complete or rebooting the server.',
        bn: 'আপনি কি কখনো লিনাক্সে kill -9 কমান্ড চালিয়ে দেখেছেন যে প্রসেসটি কোনোভাবেই বন্ধ হচ্ছে না? প্রসেসটি তখন নিশ্চিতভাবেই Uninterruptible Sleep (D) স্টেটে আটকে থাকে। এই অবস্থায় প্রসেসটি কার্নেল ড্রাইভারের ভেতরে সরাসরি ফিজিক্যাল ডিস্ক বা নেটওয়ার্ক NFS I/O শেষ হওয়ার অপেক্ষায় থাকে। মেমোরি ও ফাইলসিস্টেমের মারাত্মক ক্ষতি এড়াতে লিনাক্স কার্নেল D-স্টেটে থাকা অবস্থায় SIGKILL সহ সমস্ত সিগন্যাল সম্পূর্ণ উপেক্ষা করে। এই সমস্যা সমাধানের একমাত্র উপায় হলো হার্ডওয়্যারের কাজ শেষ হওয়া পর্যন্ত অপেক্ষা করা অথবা সার্ভার রিবুট করা।'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-states-ex-1',
      kind: 'predict',
      question: {
        en: 'How many primary execution states define the standard operating system process life cycle (New, Ready, Running, Waiting, Terminated)? (5). Type the number.',
        bn: 'স্ট্যান্ডার্ড অপারেটিং সিস্টেমে প্রসেস জীবনচক্র কয়টি প্রধান এক্সিকিউশন স্টেটের সমন্বয়ে গঠিত ( New, Ready, Running, Waiting, Terminated )? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'The 5 canonical states: 5.',
        bn: '৫ টি স্ট্যান্ডার্ড স্টেট: ৫।'
      },
      explanation: {
        en: 'The classic operating system process model is defined by exactly 5 states: New, Ready, Running, Waiting, and Terminated.',
        bn: 'ক্লাসিক অপারেটিং সিস্টেম প্রসেস মডেল ঠিক ৫ টি স্টেটের সমন্বয়ে গঠিত: New, Ready, Running, Waiting এবং Terminated।'
      },
    },
    {
      id: 'proc-states-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the operational difference between Interruptible Sleep (S state) and Uninterruptible Sleep (D state) in Linux?',
        bn: 'লিনাক্সে ইন্টারাপ্টিবল স্লিপ (S স্টেট) এবং আনইন্টারাপ্টিবল স্লিপ (D স্টেট) এর কাজের মধ্যকার পার্থক্য কী?'
      },
      options: [
        {
          en: 'S-state processes can be awakened immediately by POSIX signals, while D-state processes are waiting directly on hardware I/O and ignore all signals including SIGKILL',
          bn: 'S-স্টেটে থাকা প্রসেস পসিক্স সিগন্যাল দ্বারা তাৎক্ষণিকভাবে জেগে উঠতে পারে, কিন্তু D-স্টেটে থাকা প্রসেস সরাসরি হার্ডওয়্যার I/O এর অপেক্ষায় থাকে এবং SIGKILL সহ সব সিগন্যাল উপেক্ষা করে',
        },
        {
          en: 'S-state runs on SSDs, while D-state runs only on mechanical floppy disks',
          bn: 'S-স্টেট এসএসডিতে চলে, আর D-স্টেট কেবল ফ্লপি ডিস্কে কাজ করে',
        },
        {
          en: 'S-state processes only execute on weekends',
          bn: 'S-স্টেটে থাকা প্রসেস কেবল ছুটির দিনে কাজ করতে পারে',
        },
        {
          en: 'There is zero operational difference between S and D states',
          bn: 'S এবং D স্টেটের মাঝে কোনো প্রযুক্তিগত পার্থক্য নেই',
        },
      ],
      answer: 0,
      hint: {
        en: 'D-state processes wait on hardware and ignore signals to prevent filesystem corruption.',
        bn: 'D-স্টেটের প্রসেস হার্ডওয়্যারের অপেক্ষায় থাকে এবং ফাইল নষ্ট হওয়া ঠেকাতে সিগন্যাল মানে না।',
      },
      explanation: {
        en: 'Uninterruptible sleep (D) protects critical kernel drivers from inconsistent state during active device transfers.',
        bn: 'আনইন্টারাপ্টিবল স্লিপ (D) সক্রিয় হার্ডওয়্যার ট্রান্সফারের সময় কার্নেলকে অসংলগ্ন অবস্থা থেকে রক্ষা করে।'
      },
    },
    {
      id: 'proc-states-ex-3',
      kind: 'mcq',
      question: {
        en: 'What system event causes a process to transition from the Running state directly back to the Ready state?',
        bn: 'কোন সিস্টেম ঘটনার কারণে একটি প্রসেস রানিং (Running) স্টেট থেকে সরাসরি আবার রেডি (Ready) স্টেটে ফিরে যায়?'
      },
      options: [
        {
          en: 'A hardware timer interrupt indicating that the process assigned CPU time slice has expired in preemptive multitasking',
          bn: 'একটি হার্ডওয়্যার টাইমার ইন্টারাপ্ট যা নির্দেশ করে যে প্রিম্পটিভ মাল্টিটাস্কিংয়ে প্রসেসটির জন্য বরাদ্দকৃত সময়সীমা শেষ হয়ে গেছে',
        },
        {
          en: 'The user turns off the computer room ceiling light',
          bn: 'ব্যবহারকারী ঘরের সিলিং বাতি নিভিয়ে দেওয়া',
        },
        {
          en: 'The CPU runs out of electrical copper wire',
          bn: 'সিপিইউর ভেতরের তামার তারের সংযোগ শেষ হয়ে যাওয়া',
        },
        {
          en: 'The process finishes downloading a music MP3 file',
          bn: 'প্রসেসটি একটি গানের এমপিথ্রি ফাইল ডাউনলোড শেষ করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Preemption by the CPU scheduler upon time slice expiration.',
        bn: 'টাইম স্লাইস শেষ হলে সিপিইউ শিডিউলার কর্তৃক প্রিম্পশন।',
      },
      explanation: {
        en: 'Preemptive schedulers enforce fair sharing by interrupting running processes when their quantum time expires and returning them to Ready.',
        bn: 'প্রিম্পটিভ শিডিউলার সময়সীমা শেষ হলে চলমান প্রসেসকে থামিয়ে পুনরায় রেডি কিউতে পাঠিয়ে সমতা নিশ্চিত করে।'
      },
    },
    {
      id: 'proc-states-ex-4',
      kind: 'predict',
      question: {
        en: 'If a typical hardware CPU context switch consumes approximately 2 microseconds, how many microseconds are spent on the switch? (2). Type the number.',
        bn: 'একটি সাধারণ হার্ডওয়্যার সিপিইউ কনটেক্সট সুইচে যদি প্রায় ২ মাইক্রোসেকেন্ড সময় ব্যয় হয়, তবে কত মাইক্রোসেকেন্ড খরচ হয়? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'The switch duration is 2 microseconds.',
        bn: 'কনটেক্সট সুইচের সময়কাল হলো ২ মাইক্রোসেকেন্ড।'
      },
      explanation: {
        en: 'Hardware context switches typically take between 1 and 5 microseconds to save and restore CPU registers and flush TLB entries.',
        bn: 'সিপিইউ রেজিস্টার সংরক্ষণ, পুনরুদ্ধার ও টিএলবি ফ্ল্যাশ করতে কনটেক্সট সুইচে সাধারণত ১ থেকে ৫ মাইক্রোসেকেন্ড সময় লাগে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Process States & Scheduling Transitions Quiz',
      bn: 'প্রসেস স্টেটস এবং শিডিউলিং ট্রানজিশন কুইজ'
    },
    questions: [
      {
        id: 'proc-states-qz-1',
        kind: 'mcq',
        topic: 'running-to-waiting-transition',
        question: {
          en: 'What action triggers a transition from the Running state to the Waiting (Blocked) state?',
          bn: 'কোন কাজের ফলে একটি প্রসেস রানিং (Running) স্টেট থেকে ওয়েটিং (Waiting) স্টেটে চলে যায়?'
        },
        options: [
          {
            en: 'The process initiates a blocking system call such as reading from disk, receiving network socket data, or invoking sleep()',
            bn: 'প্রসেসটি একটি ব্লকিং সিস্টেম কল শুরু করে যেমন ডিস্ক থেকে ডাটা পড়া, নেটওয়ার্ক সকেটের অপেক্ষা করা অথবা sleep() কল করা',
          },
          {
            en: 'The computer keyboard key cap falls off onto the floor',
            bn: 'কম্পিউটার কিবোর্ডের বাটন মেঝেতে পড়ে যাওয়া',
          },
          {
            en: 'The operating system converts the software code into paper documents',
            bn: 'অপারেটিং সিস্টেম কোডগুলোকে কাগজের ডকুমেন্টে রূপান্তর করা',
          },
          {
            en: 'The computer power cord catches fire immediately',
            bn: 'কম্পিউটারের পাওয়ার কর্ডে তাৎক্ষণিকভাবে আগুন ধরে যাওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Initiating blocking operations (I/O, sleep, synchronization).',
          bn: 'ব্লকিং কাজ শুরু করা ( I/O, স্লিপ, সিনক্রোনাইজেশন )।',
        },
        explanation: {
          en: 'When a process requests I/O, it cannot proceed until data arrives. The OS moves it to Waiting so other tasks can use the CPU.',
          bn: 'প্রসেস I/O চাইলে ডাটা না আসা পর্যন্ত কাজ চলতে পারে না, তাই ওএস একে ওয়েটিংয়ে রেখে অন্য প্রসেসকে সিপিইউ দেয়।'
        },
      },
      {
        id: 'proc-states-qz-2',
        kind: 'mcq',
        topic: 'waiting-to-running-rule',
        question: {
          en: 'Can a process in the Waiting (Blocked) state transition directly into the Running state upon I/O completion?',
          bn: 'I/O কাজ সম্পন্ন হলে ওয়েটিং স্টেটে থাকা কোনো প্রসেস কি সরাসরি রানিং স্টেটে প্রবেশ করতে পারে?'
        },
        options: [
          {
            en: 'No, it must always enter the Ready queue first so the CPU scheduler can determine its execution priority among other waiting tasks',
            bn: 'না, একে সর্বদা প্রথমে রেডি কিউতে প্রবেশ করতে হয় যাতে সিপিইউ শিডিউলার অন্যান্য প্রসেসের সাথে এর প্রায়োরিটি বিবেচনা করে সময় দিতে পারে',
          },
          {
            en: 'Yes, it preempts all other software on the computer immediately',
            bn: 'হ্যাঁ, এটি সাথে সাথে কম্পিউটারের অন্য সমস্ত সফটওয়্যারকে জোরপূর্বক থামিয়ে দেয়',
          },
          {
            en: 'Only if the computer is connected to high-speed internet',
            bn: 'কেবল যদি কম্পিউটারে উচ্চগতির ইন্টারনেট সংযোগ থাকে',
          },
          {
            en: 'Only if the process was written in the Python programming language',
            bn: 'কেবল যদি প্রসেসটি পাইথন প্রোগ্রামিং ভাষায় লেখা হয়ে থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tasks must enter the Ready queue before the scheduler can dispatch them.',
          bn: 'শিডিউলার সিপিইউ দেওয়ার আগে প্রসেসকে অবশ্যই রেডি কিউতে ঢুকতে হয়।',
        },
        explanation: {
          en: 'Processes cannot bypass the scheduler. Upon I/O completion, a process transitions from Waiting to Ready, awaiting CPU dispatch.',
          bn: 'প্রসেস শিডিউলারকে এড়িয়ে যেতে পারে না। I/O শেষ হলে এটি ওয়েটিং থেকে রেডি স্টেটে এসে সিপিইউর ডাকের অপেক্ষা করে।'
        },
      },
      {
        id: 'proc-states-qz-3',
        kind: 'mcq',
        topic: 'context-switch-overhead-costs',
        question: {
          en: 'What architectural latency overhead occurs when the CPU performs a context switch between two different processes?',
          bn: 'সিপিইউ যখন দুটি ভিন্ন প্রসেসের মাঝে কনটেক্সট সুইচ করে, তখন কোন আর্কিটেকচারাল সময়ের অপচয় ঘটে?'
        },
        options: [
          {
            en: 'Saving and restoring hardware registers, flushing TLB address mappings, and incurring cold cache misses in L1 and L2 caches',
            bn: 'হার্ডওয়্যার রেজিস্টার সংরক্ষণ ও পুনরুদ্ধার, TLB অ্যাড্রেস ম্যাপিং পরিষ্কার এবং L1 ও L2 ক্যাশে কোল্ড ক্যাশ মিসের কারণে সময়ের অপচয়',
          },
          {
            en: 'The computer case expands in physical size by 10 centimeters',
            bn: 'কম্পিউটার কেসিং শারীরিক আকারে ১০ সেন্টিমিটার বৃদ্ধি পাওয়া',
          },
          {
            en: 'The operating system charges the user money for every switch',
            bn: 'প্রতিটি সুইচের জন্য অপারেটিং সিস্টেম ব্যবহারকারীর ব্যাংক থেকে টাকা কেটে নেওয়া',
          },
          {
            en: 'The computer screen changes its resolution to zero pixels',
            bn: 'কম্পিউটার স্ক্রিনের রেজোলিউশন শূন্য পিক্সেলে নেমে যাওয়া',
          },
        ],
        answer: 0,
        hint: {
          en: 'Register saves, TLB invalidation, and cache footprint disruption.',
          bn: 'রেজিস্টার সংরক্ষণ, টিএলবি ইনভ্যালিডেশন এবং ক্যাশ মিসের ক্ষতি।',
        },
        explanation: {
          en: 'Beyond saving registers, process switches invalidate memory caches (TLB and L1/L2 lines), slowing execution until the new process warms the cache.',
          bn: 'রেজিস্টার ছাড়াও কনটেক্সট সুইচের ফলে মেমোরি ক্যাশ বাতিল হয়, যা নতুন প্রসেসের গতি সাময়িকভাবে কমিয়ে দেয়।'
        },
      },
      {
        id: 'proc-states-qz-4',
        kind: 'mcq',
        topic: 'unkillable-d-state-reason',
        question: {
          en: 'Why does the Linux kernel refuse to deliver the fatal SIGKILL signal to a process residing in the D (Uninterruptible Sleep) state?',
          bn: 'লিনাক্স কার্নেল কেন D (আনইন্টারাপ্টিবল স্লিপ) স্টেটে থাকা কোনো প্রসেসকে মারাত্মক SIGKILL সিগন্যাল দিতে অস্বীকার করে?'
        },
        options: [
          {
            en: 'Killing a thread in mid-flight during synchronous driver I/O could leave disk controller hardware or filesystem structures in a permanently corrupted state',
            bn: 'হার্ডওয়্যার ড্রাইভারের কাজ চলাকালীন প্রসেস বন্ধ করে দিলে ডিস্ক কন্ট্রোলার বা ফাইলসিস্টেমের মেটাডাটা চিরতরে নষ্ট হয়ে যেতে পারে',
          },
          {
            en: 'Because the Linux kernel forgets the meaning of SIGKILL during daytime',
            bn: 'কারণ দিনের বেলা লিনাক্স কার্নেল সিগকিলের অর্থ ভুলে যায়',
          },
          {
            en: 'Because processes in the D state become physical ghosts',
            bn: 'কারণ D স্টেটে থাকা প্রসেসগুলো অলৌকিক আত্মায় পরিণত হয়',
          },
          {
            en: 'To force programmers to buy faster solid-state drives',
            bn: 'প্রোগ্রামারদের দ্রুতগতির নতুন এসএসডি কিনতে বাধ্য করার উদ্দেশ্যে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Preventing disk driver hardware and filesystem metadata corruption.',
          bn: 'ডিস্ক ড্রাইভার হার্ডওয়্যার ও ফাইলসিস্টেমের মেটাডাটা সুরক্ষিত রাখা।',
        },
        explanation: {
          en: 'Uninterruptible sleep guarantees atomic kernel operations. Terminating a process mid-transfer could corrupt storage devices or kernel structures.',
          bn: 'আনইন্টারাপ্টিবল স্লিপ কার্নেলের পারমাণবিক কাজ রক্ষা করে। মাঝপথে বন্ধ করলে ডিস্ক বা কার্নেলের ডাটা স্থায়ীভাবে নষ্ট হতে পারে।'
        },
      },
    ],
  },
  next: {
    slug: 'zombie-orphan',
    title: {
      en: 'Zombie & Orphan Processes: Reaping & Adoption by PID 1',
      bn: 'জম্বি এবং অরফান প্রসেস: রিপিং এবং PID ১ দ্বারা দত্তক গ্রহণ'
    },
  },
};
