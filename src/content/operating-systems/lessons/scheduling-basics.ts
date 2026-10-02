import type { Lesson } from '../../../lib/types';

export const SchedulingBasicsLesson: Lesson = {
  slug: 'scheduling-basics',
  tech: 'operating-systems',
  title: {
    en: 'CPU Scheduling Algorithms & Preemptive Multitasking',
    bn: 'সিপিইউ শিডিউলিং অ্যালগরিদম এবং প্রি-এম্পটিভ মাল্টিটাস্কিং',
  },
  summary: {
    en: 'Understand how operating system kernels schedule threads and processes onto physical CPU cores. Explore First-Come First-Served (FCFS), Shortest Job Next (SJN), Round Robin time quantum slicing, priority scheduling with aging, and the Linux Completely Fair Scheduler (CFS) with virtual runtime (vruntime).',
    bn: 'অপারেটিং সিস্টেম কার্নেল কীভাবে ফিজিক্যাল সিপিইউ কোরে থ্রেড ও প্রসেস শিডিউল করে তা বিশ্লেষণ করুন। ফার্স্ট-কাম ফার্স্ট-সার্ভড (FCFS), শর্টেস্ট জব নেক্সট (SJN), রাউন্ড রবিন টাইম কোয়ান্টাম স্লাইসিং, এজিং সহ প্রায়োরিটি শিডিউলিং এবং লিনাক্স কমপ্লিটলি ফেয়ার শিডিউলার (CFS)-এর ভার্চুয়াল রানটাইম (vruntime) বিস্তারিত জানুন।',
  },
  minutes: 22,
  next: {
    slug: 'virtual-memory-intro',
    title: {
      en: 'Virtual Memory, Paging Internals & Address Translation',
      bn: 'ভার্চুয়াল মেমোরি, পেজিং ইন্টারনালস এবং অ্যাড্রেস ট্রান্সলেশন',
    },
  },
  blocks: [
    {
      type: 'heading',
      id: 'preemption-and-timer-interrupts',
      text: {
        en: 'Preemptive Multitasking & The Hardware Timer Clock',
        bn: 'প্রি-এম্পটিভ মাল্টিটাস্কিং এবং হার্ডওয়্যার টাইমার ক্লক',
      },
    },
    {
      type: 'para',
      text: {
        en: 'A single physical CPU core can execute only one instruction stream at any exact nanosecond. To create the illusion of hundreds of applications running simultaneously, the operating system kernel relies on preemptive multitasking driven by a periodic hardware timer interrupt. Generating clock interrupts between 100 Hz and 1000 Hz (every 1 to 10 milliseconds), the timer hardware forcibly traps the processor into supervisor mode. The kernel halts the current task, saves its registers into a Process Control Block (PCB), and dispatches the next ready process through a context switch.',
        bn: 'যেকোনো নির্দিষ্ট মুহূর্তে একটি একক ফিজিক্যাল সিপিইউ কোর কেবল একটিমাত্র নির্দেশের ধারা কার্যকর করতে পারে। শত শত অ্যাপ্লিকেশন একসাথে চলার অনুভূতি তৈরি করতে অপারেটিং সিস্টেম কার্নেল হার্ডওয়্যার টাইমার ইন্টারাপ্টের ওপর নির্ভরশীল প্রি-এম্পটিভ মাল্টিটাস্কিং ব্যবহার করে। টাইমার হার্ডওয়্যার প্রতি সেকেন্ডে ১০০ Hz থেকে ১০০০ Hz হারে (প্রতি ১ থেকে ১০ মিলিসেকেন্ড অন্তর) ক্লক ইন্টারাপ্ট তৈরি করে প্রসেসরকে সুপারভাইজার মোডে ট্র্যাপ করে। কার্নেল বর্তমান টাস্ক থামিয়ে তার রেজিস্টারগুলো প্রসেস কন্ট্রোল ব্লকে (PCB) সংরক্ষণ করে এবং কনটেক্সট সুইচের মাধ্যমে পরবর্তী অপেক্ষমাণ প্রসেসকে সিপিইউতে চালু করে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Process State Machine: Transitions and Scheduler Dispatch',
        bn: 'প্রসেস স্টেট মেশিন: ট্রানজিশন এবং শিডিউলার ডিসপ্যাচ',
      },
      svg: `<svg viewBox="0 0 820 400" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="readyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="runningGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="waitingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="stateArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- State: NEW -->
  <rect x="30" y="150" width="120" height="70" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
  <text x="90" y="180" font-size="14" font-weight="700" fill="#334155" text-anchor="middle">NEW</text>
  <text x="90" y="200" font-size="11" fill="#64748b" text-anchor="middle">fork() called</text>

  <path d="M 150 185 L 210 185" stroke="#475569" stroke-width="2" marker-end="url(#stateArrow)"/>
  <text x="180" y="175" font-size="10" fill="#475569" text-anchor="middle">Admitted</text>

  <!-- State: READY QUEUE -->
  <rect x="220" y="130" width="160" height="110" rx="10" fill="url(#readyGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="300" y="160" font-size="15" font-weight="700" fill="#0369a1" text-anchor="middle">READY</text>
  <text x="300" y="180" font-size="11" fill="#475569" text-anchor="middle">In Runqueue</text>
  <text x="300" y="200" font-size="11" fill="#475569" text-anchor="middle">Waiting for CPU</text>

  <!-- Ready to Running transition -->
  <path d="M 380 165 L 450 165" stroke="#047857" stroke-width="2.5" marker-end="url(#stateArrow)"/>
  <text x="415" y="155" font-size="11" font-weight="600" fill="#047857" text-anchor="middle">Dispatch</text>

  <!-- Preemption loop: Running back to Ready -->
  <path d="M 470 145 C 430 80, 340 80, 300 125" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,4" marker-end="url(#stateArrow)"/>
  <text x="385" y="85" font-size="11" font-weight="600" fill="#dc2626" text-anchor="middle">Preemption (Timer Quantum Expired)</text>

  <!-- State: RUNNING -->
  <rect x="460" y="130" width="160" height="110" rx="10" fill="url(#runningGrad)" stroke="#047857" stroke-width="2"/>
  <text x="540" y="160" font-size="15" font-weight="700" fill="#065f46" text-anchor="middle">RUNNING</text>
  <text x="540" y="180" font-size="11" fill="#047857" text-anchor="middle">Active on Core</text>
  <text x="540" y="200" font-size="11" fill="#047857" text-anchor="middle">Executing code</text>

  <!-- Running to Terminated -->
  <path d="M 620 185 L 680 185" stroke="#475569" stroke-width="2" marker-end="url(#stateArrow)"/>
  <text x="650" y="175" font-size="10" fill="#475569" text-anchor="middle">exit()</text>

  <!-- State: TERMINATED -->
  <rect x="690" y="150" width="110" height="70" rx="8" fill="#f1f5f9" stroke="#94a3b8" stroke-width="2"/>
  <text x="745" y="180" font-size="13" font-weight="700" fill="#334155" text-anchor="middle">TERMINATED</text>
  <text x="745" y="200" font-size="11" fill="#64748b" text-anchor="middle">Zombie / Clean</text>

  <!-- Running to Waiting (I/O event) -->
  <path d="M 540 245 C 540 310, 480 340, 410 340" fill="none" stroke="#d97706" stroke-width="2" marker-end="url(#stateArrow)"/>
  <text x="500" y="315" font-size="11" fill="#d97706" text-anchor="middle">I/O or Lock Wait</text>

  <!-- State: WAITING / BLOCKED -->
  <rect x="250" y="300" width="160" height="80" rx="10" fill="url(#waitingGrad)" stroke="#d97706" stroke-width="2"/>
  <text x="330" y="330" font-size="14" font-weight="700" fill="#92400e" text-anchor="middle">WAITING</text>
  <text x="330" y="350" font-size="11" fill="#475569" text-anchor="middle">Disk read / Network pkt</text>

  <!-- Waiting back to Ready -->
  <path d="M 290 300 L 290 245" stroke="#0284c7" stroke-width="2" marker-end="url(#stateArrow)"/>
  <text x="235" y="275" font-size="11" fill="#0284c7" text-anchor="middle">I/O Done</text>
</svg>`,
      caption: {
        en: 'The standard 5-state process lifecycle: newly spawned processes enter Ready; the scheduler dispatches to Running; timer interrupts preempt back to Ready; I/O operations block into Waiting.',
        bn: 'স্ট্যান্ডার্ড ৫ টি অবস্থার প্রসেস জীবনচক্র: নতুন প্রসেস রেডি অবস্থায় আসে, শিডিউলার তাকে রানিং করে, টাইমার ইন্টারাপ্ট প্রি-এম্পট করে আবার রেডিতে পাঠায় এবং আই/ও অপারেশনে প্রসেস ওয়েটিংয়ে যায়।',
      },
    },
    {
      type: 'heading',
      id: 'scheduling-algorithms-comparison',
      text: {
        en: 'Round Robin, Time Quanta & The Linux CFS Algorithm',
        bn: 'রাউন্ড রবিন, টাইম কোয়ান্টাম এবং লিনাক্স সিএফএস অ্যালগরিদম',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Different workloads require different scheduling strategies. Batch computing favors Shortest Job First to minimize average wait times, while interactive desktop and server systems mandate Round Robin (RR) with a fixed time slice (such as 4 milliseconds). Under Round Robin, each process runs for up to 1 time quantum. If it does not yield voluntarily for I/O, the scheduler interrupts it and moves it to the rear of the runqueue. In Linux, the Completely Fair Scheduler (CFS) models an ideal multi-tasking CPU by tracking virtual runtime (vruntime) inside a balanced red-black tree, always granting the CPU to the task that has received the least runtime.',
        bn: 'বিভিন্ন ধরনের কাজের জন্য ভিন্ন ভিন্ন শিডিউলিং কৌশলের প্রয়োজন হয়। ব্যাচ প্রসেসিংয়ে অপেক্ষার গড় সময় কমাতে শর্টেস্ট জব ফার্স্ট কার্যকর, আর ইন্টারঅ্যাক্টিভ ডেস্কটপ বা সার্ভারে একটি নির্দিষ্ট টাইম স্লাইস ( যেমন ৪ মিলিসেকেন্ড ) সহ রাউন্ড রবিন (RR) অপরিহার্য। রাউন্ড রবিন পদ্ধতিতে প্রতিটি প্রসেস সর্বোচ্চ ১ টি টাইম কোয়ান্টাম পর্যন্ত চলার সুযোগ পায়। কোনো প্রসেস নিজ থেকে আই/ও এর জন্য সিপিইউ ছেড়ে না দিলে শিডিউলার তাকে ইন্টারাপ্ট করে কিউয়ের পেছনে পাঠিয়ে দেয়। লিনাক্সে কমপ্লিটলি ফেয়ার শিডিউলার (CFS) একটি ব্যালেন্সড রেড-ব্ল্যাক ট্রিতে ভার্চুয়াল রানটাইম (vruntime) ট্র্যাক করে সর্বদা সেই টাস্ককে সিপিইউ বরাদ্দ করে যার প্রাপ্ত সময় সবচেয়ে কম।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Round Robin CPU Scheduler Engine
class Process {
  constructor(name, burstTime, arrivalTime = 0) {
    this.name = name;
    this.burstTime = burstTime;       // Total CPU time required
    this.remainingTime = burstTime;   // Remaining CPU burst
    this.arrivalTime = arrivalTime;
    this.completionTime = 0;
    this.waitDuration = 0;
  }
}

function runRoundRobinScheduler(processes, timeQuantum) {
  let currentTime = 0;
  const readyQueue = [...processes];
  const executionLog = [];

  while (readyQueue.length > 0) {
    const activeProc = readyQueue.shift();
    const runDuration = Math.min(activeProc.remainingTime, timeQuantum);

    currentTime += runDuration;
    activeProc.remainingTime -= runDuration;

    executionLog.push({
      process: activeProc.name,
      duration: runDuration,
      completedAt: currentTime,
    });

    if (activeProc.remainingTime > 0) {
      // Preempted: Reinsert at the back of the ready runqueue
      readyQueue.push(activeProc);
    } else {
      // Completed: Record turnaround and final metrics
      activeProc.completionTime = currentTime;
      activeProc.turnaround = currentTime - activeProc.arrivalTime;
      activeProc.waitDuration = activeProc.turnaround - activeProc.burstTime;
    }
  }

  return { executionLog, processes };
}

// Scenario: 3 processes with varying CPU bursts, quantum = 4 ms
const p1 = new Process('P1', 10); // Needs 3 quanta (4 + 4 + 2)
const p2 = new Process('P2', 4);  // Needs 1 quantum (4)
const p3 = new Process('P3', 6);  // Needs 2 quanta (4 + 2)

const result = runRoundRobinScheduler([p1, p2, p3], 4);

console.log('Execution Sequence:');
result.executionLog.forEach((entry, idx) => {
  console.log(\`Step \${idx + 1}: \${entry.process} ran for \${entry.duration} ms (Clock: \${entry.completedAt} ms)\`);
});

console.log('\\nFinal Process Metrics:');
result.processes.forEach((p) => {
  console.log(\`\${p.name}: Turnaround = \${p.turnaround} ms, Wait Time = \${p.waitDuration} ms\`);
});`,
      caption: {
        en: 'A working simulation of preemptive Round Robin scheduling executing three processes with a 4 ms time quantum, tracking run slices and waiting times.',
        bn: '৪ মিলিসেকেন্ড টাইম কোয়ান্টাম দিয়ে ৩ টি প্রসেসের ওপর প্রাকটিক্যাল রাউন্ড রবিন শিডিউলিং সিমুলেশন যা প্রতিটি স্লাইস এবং অপেক্ষার সময় নির্ণয় করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Preemptive Scheduling',
          def: {
            en: 'An operating system mechanism where the kernel can interrupt and suspend a running process without its consent when its allocated time slice expires.',
            bn: 'অপারেটিং সিস্টেমের একটি কৌশল যার মাধ্যমে নির্ধারিত টাইম স্লাইস শেষ হলে কার্নেল প্রসেসের সম্মতি ছাড়াই তাকে থামিয়ে অন্য কাজ শুরু করতে পারে।',
          },
        },
        {
          term: 'Process Control Block (PCB)',
          def: {
            en: 'A vital kernel data structure maintaining process state, program counter, CPU registers, priority, memory limits, and open file descriptors.',
            bn: 'কার্নেলের অত্যন্ত গুরুত্বপূর্ণ ডেটা কাঠামো যা প্রসেসের অবস্থা, প্রোগ্রাম কাউন্টার, সিপিইউ রেজিস্টার, মেমোরি সীমা ও ফাইল ডেসক্রিপ্টর সংরক্ষণ করে।',
          },
        },
        {
          term: 'Time Quantum',
          def: {
            en: 'The fixed slice of CPU execution duration assigned to a process in Round Robin scheduling before preemption occurs.',
            bn: 'রাউন্ড রবিন শিডিউলিংয়ে প্রি-এম্পশনের পূর্বে একটি প্রসেসকে একবারে সর্বোচ্চ যতটুক সময় সিপিইউ ব্যবহারের অনুমতি দেওয়া হয়।',
          },
        },
        {
          term: 'Completely Fair Scheduler (CFS)',
          def: {
            en: 'The standard Linux CPU scheduler using a balanced red-black tree to allocate processing time proportionally based on task virtual runtime.',
            bn: 'লিনাক্সের আদর্শ সিপিইউ শিডিউলার যা ব্যালেন্সড রেড-ব্ল্যাক ট্রি ব্যবহার করে প্রতিটি টাস্কের ভার্চুয়াল রানটাইম অনুসারে সুষম সময় বণ্টন করে।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Selecting the optimal time quantum is a critical engineering trade-off. If the quantum is set too small (e.g. 0.1 milliseconds), context switch overhead and cache invalidation destroy CPU throughput. If set too large (e.g. 200 milliseconds), interactive responsiveness collapses and the user perceives stuttering and latency.',
        bn: 'টাইম কোয়ান্টামের সঠিক মান নির্বাচন করা একটি গুরুত্বপূর্ণ ইঞ্জিনিয়ারিং সিদ্ধান্ত। কোয়ান্টাম খুব ছোট ( যেমন ০.১ মিলিসেকেন্ড ) হলে ঘন ঘন কনটেক্সট সুইচের অপচয় সিপিইউর কার্যক্ষমতা নষ্ট করে। অন্যদিকে এটি খুব বড় ( যেমন ২০০ মিলিসেকেন্ড ) হলে ইন্টারঅ্যাক্টিভ রেসপন্স মারাত্মকভাবে কমে যায় এবং ইউজার ইন্টারফেসে ল্যাগ অনুভূত হয়।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-sched-ex-1',
          kind: 'predict',
          question: {
            en: 'Under Round Robin scheduling with a time quantum of 4 milliseconds, how many total scheduling turns (quanta) does a process requiring 10 milliseconds of CPU burst need to finish?',
            bn: '৪ মিলিসেকেন্ড টাইম কোয়ান্টাম বিশিষ্ট রাউন্ড রবিন শিডিউলিংয়ে ১০ মিলিসেকেন্ড সিপিইউ বার্স্ট প্রয়োজন এমন একটি প্রসেসের সম্পূর্ণ শেষ হতে মোট কতটি টার্ন (কোয়ান্টাম) লাগবে?'
          },
          answer: '3',
          hint: {
            en: 'The process runs for 4 ms on its first turn, 4 ms on its second turn, and finishes its remaining 2 ms on its third turn.',
            bn: 'প্রসেসটি প্রথমবারে ৪ মিলিসেকেন্ড, দ্বিতীয়বারে ৪ মিলিসেকেন্ড এবং তৃতীয়বারে অবশিষ্ট ২ মিলিসেকেন্ড চলে শেষ হবে।',
          },
          explanation: {
            en: 'Dividing 10 ms into 4 ms chunks yields: Turn 1 (4 ms), Turn 2 (4 ms), and Turn 3 (remaining 2 ms). Thus, 3 quanta are required.',
            bn: '১০ মিলিসেকেন্ডকে ৪ মিলিসেকেন্ডের ভাগে ভাগ করলে: টার্ন ১ ( ৪ মিলিসেকেন্ড), টার্ন ২ ( ৪ মিলিসেকেন্ড) এবং টার্ন ৩ (বাকি ২ মিলিসেকেন্ড)। অর্থাৎ মোট ৩ টি টার্ন লাগবে।',
          },
        },
        {
          id: 'os-sched-ex-2',
          kind: 'mcq',
          question: {
            en: 'What fundamental hardware component periodically forces the CPU to switch from user application execution back into kernel scheduler routines?',
            bn: 'কোন মৌলিক হার্ডওয়্যার উপাদানটি নির্দিষ্ট সময় পরপর সিপিইউকে ইউজার অ্যাপ্লিকেশন থামিয়ে কার্নেল শিডিউলার রুটিনে ফিরতে বাধ্য করে?'
          },
          options: [
            {
              en: 'Programmable Interval Timer (PIT) or local APIC hardware timer interrupt',
              bn: 'প্রোগ্রামেবল ইন্টারভাল টাইমার (PIT) বা লোকাল এপিআইসি হার্ডওয়্যার টাইমার ইন্টারাপ্ট',
            },
            {
              en: 'USB mouse optical sensor reflection',
              bn: 'ইউএসবি মাউসের অপটিক্যাল সেন্সরের আলোর প্রতিফলন',
            },
            {
              en: 'Graphics card HDMI cable audio channel',
              bn: 'গ্রাফিক্স কার্ডের এইচডিএমআই কেবলের অডিও চ্যানেল',
            },
            {
              en: 'Computer chassis power LED diode',
              bn: 'কম্পিউটার কেসিংয়ের পাওয়ার এলইডি বাতি',
            },
          ],
          answer: 0,
          hint: {
            en: 'It is a silicon clock timer circuit configured to fire hardware interrupts at designated Hertz frequencies.',
            bn: 'এটি একটি সিলিকন ক্লক সার্কিট যা নির্দিষ্ট হার্টজ ফ্রিকোয়েন্সিতে হার্ডওয়্যার ইন্টারাপ্ট পাঠায়।',
          },
          explanation: {
            en: 'The operating system programs an APIC or PIT timer chip to interrupt the processor periodically, allowing the kernel to regain control for scheduling decisions.',
            bn: 'অপারেটিং সিস্টেম এপিআইসি বা পিআইটি টাইমার চিপ ব্যবহার করে নিয়মিত প্রসেসরকে ইন্টারাপ্ট করে, যাতে কার্নেল সময়মতো নিয়ন্ত্রণ ফিরে পায়।',
          },
        },
        {
          id: 'os-sched-ex-3',
          kind: 'mcq',
          question: {
            en: 'In priority-based scheduling, how does the kernel prevent low-priority processes from suffering permanent starvation when high-priority tasks keep arriving?',
            bn: 'প্রায়োরিটি শিডিউলিংয়ে উচ্চ-অগ্রাধিকারের কাজ ক্রমাগত আসতে থাকলে নিম্ন-অগ্রাধিকারের প্রসেসের স্থায়ী অনাহার (Starvation) রোধে কার্নেল কী কৌশল প্রয়োগ করে?'
          },
          options: [
            {
              en: 'Aging: Gradually increasing the priority of a process the longer it waits in the ready queue',
              bn: 'এজিং (Aging): কোনো প্রসেস যত বেশি সময় রেডি কিউতে অপেক্ষা করে ক্রমানুসারে তার অগ্রাধিকারের মান তত বাড়িয়ে দেওয়া',
            },
            {
              en: 'Automatically rebooting the entire motherboard every 5 seconds',
              bn: 'প্রতি ৫ সেকেন্ড পরপর সম্পূর্ণ মাদারবোর্ড স্বয়ংক্রিয়ভাবে রিবুট করা',
            },
            {
              en: 'Deleting the low-priority process from disk immediately',
              bn: 'কম অগ্রাধিকারের প্রসেসটি ডিস্ক থেকে সাথে সাথে মুছে ফেলা',
            },
            {
              en: 'Disconnecting the internet connection until tasks finish',
              bn: 'কাজ শেষ না হওয়া পর্যন্ত ইন্টারনেট সংযোগ বিচ্ছিন্ন রাখা',
            },
          ],
          answer: 0,
          hint: {
            en: 'As time passes, a waiting task grows older and its effective priority rises.',
            bn: 'সময় যত গড়ায়, অপেক্ষমাণ কাজের বয়স বাড়ে এবং তার প্রায়োরিটি উন্নীত হয়।',
          },
          explanation: {
            en: 'Aging ensures fairness: by incrementally elevating the priority of waiting tasks over time, even the lowest-priority process eventually becomes the highest-priority candidate.',
            bn: 'এজিং পদ্ধতি নিশ্চিত করে যে দীর্ঘদিন অপেক্ষায় থাকা যেকোনো নিম্ন-অগ্রাধিকারের কাজও একসময় সর্বোচ্চ অগ্রাধিকার প্রাপ্ত কাজে পরিণত হবে।',
          },
        },
        {
          id: 'os-sched-ex-4',
          kind: 'predict',
          question: {
            en: 'In the Linux Completely Fair Scheduler (CFS), what is the abbreviated name of the metric representing a tasks virtual runtime inside the red-black tree?',
            bn: 'লিনাক্স কমপ্লিটলি ফেয়ার শিডিউলার (CFS)-এ রেড-ব্ল্যাক ট্রির ভেতরে টাস্কের ভার্চুয়াল রানটাইম নির্দেশকারী মেট্রিকটির সংক্ষিপ্ত নাম কী?'
          },
          answer: 'vruntime',
          hint: {
            en: 'It combines the words virtual and runtime into a single lowercase term.',
            bn: 'এটি virtual এবং runtime শব্দ দুটিকে যুক্ত করে তৈরি একটি সংক্ষিপ্ত শব্দ।',
          },
          explanation: {
            en: 'Linux CFS tracks each thread execution via its vruntime variable. The task with the smallest vruntime sits on the leftmost node of the red-black tree and runs next.',
            bn: 'লিনাক্স সিএফএস প্রতিটি থ্রেডের চলার সময় vruntime ভেরিয়েবলে ট্র্যাক করে। সবচেয়ে কম vruntime থাকা টাস্কটি ট্রির সর্ববামে থাকে এবং আগে সুযোগ পায়।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'CPU Scheduling & Multitasking Knowledge Check',
      bn: 'সিপিইউ শিডিউলিং এবং মাল্টিটাস্কিং জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-sched-qz-1',
          kind: 'mcq',
          topic: 'quantum-tradeoffs',
          question: {
            en: 'What architectural penalty occurs if an operating system configures the Round Robin time quantum to an excessively tiny interval, such as 50 microseconds?',
            bn: 'যদি কোনো অপারেটিং সিস্টেম রাউন্ড রবিন টাইম কোয়ান্টামকে অতিরিক্ত ক্ষুদ্র যেমন ৫০ মাইক্রোসেকেন্ড নির্ধারণ করে, তবে কোন আর্কিটেকচারাল ক্ষতি ঘটবে?'
          },
          options: [
            {
              en: 'A massive percentage of CPU time is wasted performing register context switching and cache invalidations rather than executing real application code',
              bn: 'প্রকৃত অ্যাপ্লিকেশন কোড চালানোর বদলে সিপিইউ সময়ের সিংহভাগ রেজিস্টার কনটেক্সট সুইচ ও ক্যাশ ফাঁকা করতেই অপচয় হয়ে যাবে',
            },
            {
              en: 'The CPU physically explodes due to excessive clock voltage',
              bn: 'অতিরিক্ত ভোল্টেজের কারণে সিপিইউ ফিজিক্যালি বিস্ফোরিত হবে',
            },
            {
              en: 'All text files on the filesystem are converted into MP3 audio',
              bn: 'ফাইলসিস্টেমের সব টেক্সট ফাইল এমপি৩ অডিও ফাইলে পরিণত হবে',
            },
            {
              en: 'Network speeds increase to optical speeds automatically',
              bn: 'নেটওয়ার্কের গতি স্বয়ংক্রিয়ভাবে আলোর গতিতে বৃদ্ধি পাবে',
            },
          ],
          answer: 0,
          hint: {
            en: 'Context switching requires saving registers, updating memory maps, and flushing pipeline stages.',
            bn: 'কনটেক্সট সুইচের জন্য রেজিস্টার সংরক্ষণ, মেমোরি ম্যাপ পরিবর্তন এবং পাইপলাইন খালি করতে হয়।',
          },
          explanation: {
            en: 'Every context switch consumes CPU cycles. If the time quantum approaches the context switch duration, the CPU spends more time switching tasks than doing productive compute.',
            bn: 'প্রতিটি কনটেক্সট সুইচে কিছু সময় নষ্ট হয়। কোয়ান্টাম খুব ছোট হলে কাজের চেয়ে কাজ বদলাতেই সিপিইউর বেশিরভাগ সময় ব্যয় হয়ে যায়।',
          },
        },
        {
          id: 'os-sched-qz-2',
          kind: 'mcq',
          topic: 'pcb-role',
          question: {
            en: 'Which critical information is preserved inside the Process Control Block (PCB) when a process is preempted by the operating system kernel?',
            bn: 'অপারেটিং সিস্টেম কার্নেল যখন কোনো প্রসেসকে প্রি-এম্পট করে, তখন প্রসেস কন্ট্রোল ব্লকে (PCB) কোন গুরুত্বপূর্ণ তথ্য সংরক্ষণ করা হয়?'
          },
          options: [
            {
              en: 'CPU register states, program counter (PC), stack pointer, process state, priority, and open file descriptor tables',
              bn: 'সিপিইউ রেজিস্টারের মান, প্রোগ্রাম কাউন্টার (PC), স্ট্যাক পয়েন্টার, প্রসেসের অবস্থা, প্রায়োরিটি এবং উন্মুক্ত ফাইল ডেসক্রিপ্টর টেবিল',
            },
            {
              en: 'The developers residential home address and credit score',
              bn: 'ডেভেলপারের বাড়ির ঠিকানা এবং ব্যাংকের ক্রেডিট স্কোর',
            },
            {
              en: 'The wallpaper background image currently displayed on the monitor',
              bn: 'মনিটরে প্রদর্শিত বর্তমান ডেস্কটপ ওয়ালপেপারের ছবি',
            },
            {
              en: 'The manufacturing serial number of the computer keyboard',
              bn: 'কম্পিউটার কিবোর্ডের কারখানার তৈরি সিরিয়াল নম্বর',
            },
          ],
          answer: 0,
          hint: {
            en: 'The kernel must save everything needed to resume the process later exactly where it left off.',
            bn: 'কার্নেলকে এমন সবকিছু সংরক্ষণ করতে হয় যাতে পরবর্তীতে ঠিক যেখান থেকে থামা হয়েছিল সেখান থেকে শুরু করা যায়।',
          },
          explanation: {
            en: 'The PCB maintains complete architectural state so that when the scheduler restores the process to the CPU, it continues transparently without corrupted registers.',
            bn: 'পিসিবি প্রসেসের পূর্ণ স্টেট সংরক্ষণ করে রাখে যাতে পুনরায় সিপিইউ পেলে কোনো পরিবর্তন বা ডেটা ত্রুটি ছাড়াই নির্বিঘ্নে কাজ চালিয়ে যেতে পারে।',
          },
        },
        {
          id: 'os-sched-qz-3',
          kind: 'mcq',
          topic: 'io-bound-vs-cpu-bound',
          question: {
            en: 'Why do modern operating systems generally grant higher dynamic scheduling priority to I/O-bound processes compared to CPU-bound background batch jobs?',
            bn: 'আধুনিক অপারেটিং সিস্টেমগুলো কেন সিপিইউ-বাউন্ড ব্যাকগ্রাউন্ড কাজের চেয়ে আই/ও-বাউন্ড প্রসেসগুলোকে সাধারণত বেশি ডায়নামিক অগ্রাধিকার দেয়?'
          },
          options: [
            {
              en: 'I/O-bound processes quickly issue an I/O request and yield the CPU, maximizing both hardware device utilization and interactive system responsiveness',
              bn: 'আই/ও-বাউন্ড প্রসেসগুলো দ্রুত আই/ও অনুরোধ পাঠিয়ে সিপিইউ ছেড়ে দেয়, যা হার্ডওয়্যার ডিভাইসের সদ্ব্যবহার ও সিস্টেমের দ্রুত প্রতিক্রিয়া নিশ্চিত করে',
            },
            {
              en: 'I/O-bound processes are written exclusively by kernel creators',
              bn: 'আই/ও-বাউন্ড প্রসেসগুলো কেবল কার্নেল নির্মাতাদের মাধ্যমেই রচিত হয়',
            },
            {
              en: 'CPU-bound processes damage the physical cooling fans if given priority',
              bn: 'সিপিইউ-বাউন্ড কাজগুলোকে অগ্রাধিকার দিলে কুলিং ফ্যান ক্ষতিগ্রস্ত হয়',
            },
            {
              en: 'Hard disk drives will refuse to spin if batch jobs run during daylight hours',
              bn: 'দিনের বেলা ব্যাচ প্রসেস চললে হার্ড ডিস্ক ঘুরতে অস্বীকার করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'I/O tasks spend most of their time waiting, so giving them the CPU briefly when they are ready keeps peripherals busy.',
            bn: 'আই/ও কাজগুলো বেশিরভাগ সময় অপেক্ষায় থাকে, তাই তারা তৈরি হলে দ্রুত সুযোগ দিলে যন্ত্রাংশের সদ্ব্যবহার হয়।',
          },
          explanation: {
            en: 'Favoring I/O-bound tasks ensures interactive responsiveness (like keystrokes or mouse clicks) while keeping storage and network interfaces operating concurrently with CPU work.',
            bn: 'আই/ও নির্ভর কাজকে অগ্রাধিকার দিলে ইউজার ইন্টারফেস দ্রুত সাড়া দেয় এবং সিপিইউ চলার সাথে সাথে ডিস্ক ও নেটওয়ার্ক ডিভাইসগুলোও সমান তালে ব্যস্ত থাকে।',
          },
        },
        {
          id: 'os-sched-qz-4',
          kind: 'mcq',
          topic: 'multicore-affinity',
          question: {
            en: 'What performance advantage does CPU Processor Affinity provide in multi-core operating system architectures?',
            bn: 'মাল্টি-কোর অপারেটিং সিস্টেম আর্কিটেকচারে সিপিইউ প্রসেসর অ্যাফিনিটি (Processor Affinity) কোন পারফরম্যান্স সুবিধা প্রদান করে?'
          },
          options: [
            {
              en: 'It binds a thread to a specific CPU core to maximize L1/L2 hardware cache hit rates and avoid inter-core migration cache invalidations',
              bn: 'এটি একটি থ্রেডকে নির্দিষ্ট সিপিইউ কোরের সাথে যুক্ত রাখে যেন এল ১ এবং এল ২ ক্যাশের সুবিধা বজায় থাকে এবং কোর বদলের ক্যাশ ফাঁকা হওয়া এড়ানো যায়',
            },
            {
              en: 'It converts 32-bit application binaries into 64-bit binaries on the fly',
              bn: 'এটি ৩২-বিট বাইনারিকে সরাসরি ৬৪-বিট বাইনারিতে রূপান্তর করে দেয়',
            },
            {
              en: 'It powers down unused RAM sticks to reduce electricity bills by 90%',
              bn: 'এটি বিদ্যুতের বিল ৯০% কমাতে অব্যবহৃত র‍্যাম স্লটগুলোর বিদ্যুৎ বন্ধ করে',
            },
            {
              en: 'It disables software traps completely across all processors',
              bn: 'এটি সকল প্রসেসরে সফটওয়্যার ট্র্যাপ সম্পূর্ণভাবে অকার্যকর করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'Migrating a thread between cores means its warm cache lines on the old core are lost.',
            bn: 'এক কোর থেকে অন্য কোরে থ্রেড পাঠালে পূর্বের কোরে জমা থাকা উষ্ণ ক্যাশ ডেটা নষ্ট হয়ে যায়।',
          },
          explanation: {
            en: 'CPU affinity keeps a thread on the same physical CPU core so that frequently accessed memory variables remain in the fast L1 and L2 local cache.',
            bn: 'সিপিইউ অ্যাফিনিটি থ্রেডকে একই কোরে ধরে রাখে যাতে প্রায়শই ব্যবহৃত মেমোরি ডেটা দ্রুতগতির এল ১ ও এল ২ ক্যাশে সংরক্ষিত থাকে।',
          },
        },
    ],
  },
};
