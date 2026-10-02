import type { Lesson } from '../../../lib/types';

export const ProcessSchedulingLesson: Lesson = {
  slug: 'process-scheduling',
  tech: 'processes',
  title: {
    en: 'CPU Scheduling Algorithms: FCFS, Round Robin & Linux Completely Fair Scheduler',
    bn: 'সিপিইউ শিডিউলিং অ্যালগরিদম: FCFS, Round Robin এবং লিনাক্স Completely Fair Scheduler'
  },
  summary: {
    en: 'Understand how operating system CPU schedulers arbitrate hardware cores across hundreds of competing threads. Compare non-preemptive algorithms like First-Come First-Served and Shortest Job First against preemptive algorithms like Round Robin time-slicing. Explore how the modern Linux Completely Fair Scheduler utilizes red-black trees, virtual runtime, and nice values to guarantee fair CPU distribution.',
    bn: 'অপারেটিং সিস্টেম সিপিইউ শিডিউলার কীভাবে শত শত থ্রেডের মাঝে প্রসেসর কোর বণ্টন করে তা বুঝুন। নন-প্রিম্পটিভ অ্যালগরিদম যেমন First-Come First-Served ও Shortest Job First এর সাথে Round Robin টাইম-স্লাইসিংয়ের তুলনা করুন। আধুনিক লিনাক্স Completely Fair Scheduler কীভাবে রেড-ব্ল্যাক ট্রি, ভার্চুয়াল রানটাইম এবং নাইস ভ্যালু ব্যবহার করে সুষম সিপিইউ বণ্টন নিশ্চিত করে তা শিখুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'cpu-scheduling-dilemma',
      text: {
        en: 'The Processor Allocation Dilemma: Throughput versus Responsiveness',
        bn: 'প্রসেসর বণ্টনের সংকট: থ্রুপুট বনাম দ্রুত সাড়া প্রদান'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When dozens of competing processes demand execution cycles on a limited number of physical CPU cores, the operating system scheduler arbitrates who gets to run and for how long. The kernel balances two competing objectives: Throughput (maximizing completed tasks) and Latency (minimizing response delay for interactive user clicks).',
        bn: 'সীমিত সংখ্যক সিপিইউ কোরে যখন ডজন ডজন প্রসেস একই সাথে কাজ করতে চায়, তখন অপারেটিং সিস্টেম শিডিউলার নির্ধারণ করে কে কখন চলবে এবং কতক্ষণ চলবে। কার্নেল মূলত দুটি ভিন্ন লক্ষ্যের মাঝে ভারসাম্য রক্ষা করে: থ্রুপুট ( সর্বোচ্চ সংখ্যক কাজ সম্পন্ন করা ) এবং লেটেন্সি ( ব্যবহারকারীর ক্লিকের দ্রুততম প্রতিক্রিয়া নিশ্চিত করা )।',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Without an intelligent scheduling algorithm, a single runaway computational loop could monopolize all processor cores, freezing terminal windows, web browsers, and background networking services. Schedulers rely on performance metrics like Waiting Time and Turnaround Time to evaluate scheduling efficiency.',
        bn: 'একটি কার্যকর শিডিউলিং অ্যালগরিদম না থাকলে যেকোনো একটি জটিল কম্পিউটেশনাল লুপ সমস্ত প্রসেসর কোর দখল করে টার্মিনাল, ওয়েব ব্রাউজার এবং নেটওয়ার্ক সার্ভিসকে সম্পূর্ণ অচল করে দিতে পারত। শিডিউলিংয়ের কার্যকারিতা পরিমাপ করতে শিডিউলার ওয়েটিং টাইম এবং টার্নঅ্যারাউন্ড টাইমের মতো মেট্রিক্স ব্যবহার করে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. First-Come First-Served (FCFS) & The Convoy Effect',
            bn: '১. First-Come First-Served (FCFS) এবং কনভয় প্রভাব'
          },
          text: {
            en: 'The simplest non-preemptive FIFO queue. If a massive batch calculation requiring 100 seconds arrives first, dozens of lightweight 2-millisecond interactive tasks are forced to wait behind it. This catastrophic latency spike is called the Convoy Effect.',
            bn: 'সবচেয়ে সহজ নন-প্রিম্পটিভ FIFO কিউ। যদি ১০০ সেকেন্ডের একটি দীর্ঘ হিসাব প্রথমে আসে, তবে তার পেছনে থাকা ২ মিলি-সেকেন্ডের শত শত ছোট ইন্টারঅ্যাক্টিভ কাজ আটকে থাকতে বাধ্য হয়। লেটেন্সির এই মারাত্মক সংকটকে কনভয় প্রভাব (Convoy Effect) বলা হয়।'
          },
        },
        {
          title: {
            en: '2. Shortest Job First (SJF) & Starvation',
            bn: '২. Shortest Job First (SJF) এবং অনাহার'
          },
          text: {
            en: 'Dispatches the task with the smallest CPU burst time first. Mathematically optimal for minimizing average waiting time. However, it cannot be implemented perfectly in general operating systems because future CPU burst lengths cannot be known in advance, risking starvation of long jobs.',
            bn: 'সবচেয়ে ছোট কাজের প্রসেসকে আগে সিপিইউতে পাঠায়। এটি গড় অপেক্ষার সময় কমানোর জন্য গাণিতিকভাবে সেরা। তবে সাধারণ অপারেটিং সিস্টেমে এটি বাস্তবায়ন অসম্ভব কারণ ভবিষ্যতে কার কত সময় লাগবে তা আগে থেকে জানা যায় না, ফলে দীর্ঘ কাজগুলোর অনাহারে (Starvation) পড়ার ঝুঁকি থাকে।'
          },
        },
        {
          title: {
            en: '3. Round Robin (RR) Preemptive Time-Slicing',
            bn: '৩. Round Robin (RR) প্রিম্পটিভ টাইম-স্লাইসিং'
          },
          text: {
            en: 'Every process receives a fixed execution time slice called a Quantum (typically 10 to 50 milliseconds). When the quantum timer expires, the kernel interrupts the process and moves it to the back of the ready queue, eliminating the convoy effect.',
            bn: 'প্রতিটি প্রসেস কোয়ান্টাম (Quantum) নামের একটি নির্দিষ্ট সময়সীমা লাভ করে ( সাধারণত ১০ থেকে ৫০ মিলিসেকেন্ড )। সময় শেষ হলে কার্নেল প্রসেসটিকে থামিয়ে রেডি কিউয়ের পেছনে পাঠিয়ে দেয়, যা কনভয় প্রভাব দূর করে সবাইকে সমান সুযোগ দেয়।'
          },
        },
        {
          title: {
            en: '4. Linux Completely Fair Scheduler (CFS)',
            bn: '৪. লিনাক্স Completely Fair Scheduler (CFS)'
          },
          text: {
            en: 'Modern Linux does not use fixed time slices. Instead, CFS models an ideal multi-tasking processor by tracking virtual runtime (vruntime) inside a self-balancing Red-Black Tree. The task with the lowest vruntime (the leftmost node) is always chosen next for execution.',
            bn: 'আধুনিক লিনাক্স কোনো নির্দিষ্ট টাইম স্লাইস ব্যবহার করে না। বরং CFS একটি স্ব-ভারসাম্যপূর্ণ রেড-ব্ল্যাক ট্রির ভেতরে প্রতিটি প্রসেসের ভার্চুয়াল রানটাইম (vruntime) ট্র্যাক করে। ট্রির সবচেয়ে বাঁ দিকের নোডে থাকা সর্বনিম্ন vruntime-এর প্রসেসটিকে সবার আগে প্রসেসরে পাঠানো হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'CPU Scheduling Evolution: FCFS Convoy vs Round Robin vs Linux CFS Red-Black Tree',
        bn: 'সিপিইউ শিডিউলিং বিবর্তন: FCFS কনভয় বনাম Round Robin বনাম লিনাক্স CFS রেড-ব্ল্যাক ট্রি'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="CPU scheduling algorithms comparison diagram showing FCFS, Round Robin, and Linux CFS red-black tree">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">CPU SCHEDULING ALGORITHMS &amp; LINUX CFS ARCHITECTURE</text>
  
  <!-- Row 1: FCFS Convoy Effect -->
  <g transform="translate(30, 48)">
    <rect width="780" height="90" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="20" y="22" fill="#ef4444" font-size="11" font-weight="bold">1. FCFS CONVOY EFFECT: Short tasks trapped behind CPU hog</text>
    
    <g transform="translate(20, 34)">
      <!-- Task A: 100ms hog -->
      <rect x="0" y="0" width="480" height="40" rx="4" fill="#7f1d1d" stroke="#ef4444"/>
      <text x="240" y="24" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">Task A (CPU Hog: 100 ms Burst Time)</text>
      
      <!-- Task B: 2ms -->
      <rect x="490" y="0" width="110" height="40" rx="4" fill="#0f172a" stroke="#64748b"/>
      <text x="545" y="24" fill="#cbd5e1" font-size="10" text-anchor="middle">Task B (2ms)</text>
      
      <!-- Task C: 2ms -->
      <rect x="610" y="0" width="110" height="40" rx="4" fill="#0f172a" stroke="#64748b"/>
      <text x="665" y="24" fill="#cbd5e1" font-size="10" text-anchor="middle">Task C (2ms)</text>
    </g>
  </g>
  
  <!-- Row 2: Round Robin Interleaving -->
  <g transform="translate(30, 150)">
    <rect width="780" height="95" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="20" y="22" fill="#10b981" font-size="11" font-weight="bold">2. ROUND ROBIN: 10ms Quantum Interleaving eliminates Convoy Effect</text>
    
    <g transform="translate(20, 36)">
      <!-- Slice 1: A -->
      <rect x="0" y="0" width="115" height="40" rx="4" fill="#065f46" stroke="#10b981"/>
      <text x="57" y="24" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">A (10ms)</text>
      
      <!-- Slice 2: B -->
      <rect x="125" y="0" width="115" height="40" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="182" y="24" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">B (Done!)</text>
      
      <!-- Slice 3: C -->
      <rect x="250" y="0" width="115" height="40" rx="4" fill="#0f172a" stroke="#0284c7"/>
      <text x="307" y="24" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">C (Done!)</text>
      
      <!-- Slice 4: A -->
      <rect x="375" y="0" width="115" height="40" rx="4" fill="#065f46" stroke="#10b981"/>
      <text x="432" y="24" fill="#6ee7b7" font-size="10" text-anchor="middle">A (10ms)</text>
      
      <!-- Slice 5: A -->
      <rect x="500" y="0" width="115" height="40" rx="4" fill="#065f46" stroke="#10b981"/>
      <text x="557" y="24" fill="#6ee7b7" font-size="10" text-anchor="middle">A (10ms)</text>
      
      <!-- Dots -->
      <text x="660" y="24" fill="#94a3b8" font-size="14" font-weight="bold">...</text>
    </g>
  </g>
  
  <!-- Row 3: Linux CFS Red-Black Tree -->
  <g transform="translate(30, 258)">
    <rect width="780" height="150" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="20" y="22" fill="#f59e0b" font-size="11" font-weight="bold">3. LINUX COMPLETELY FAIR SCHEDULER (CFS): Red-Black Tree tracking vruntime</text>
    
    <!-- Leftmost Node (Next to Run) -->
    <g transform="translate(60, 40)">
      <circle cx="50" cy="40" r="32" fill="#064e3b" stroke="#10b981" stroke-width="3"/>
      <text x="50" y="36" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">PID 1042</text>
      <text x="50" y="49" fill="#f8fafc" font-size="9" text-anchor="middle">vruntime: 12ms</text>
      <text x="50" y="85" fill="#10b981" font-size="9" font-weight="bold" text-anchor="middle">LEFTMOST NODE</text>
      <text x="50" y="97" fill="#6ee7b7" font-size="8" text-anchor="middle">Next on CPU!</text>
    </g>
    
    <!-- Parent Root -->
    <g transform="translate(320, 35)">
      <circle cx="50" cy="35" r="30" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
      <text x="50" y="32" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">PID 2085</text>
      <text x="50" y="45" fill="#cbd5e1" font-size="8" text-anchor="middle">vruntime: 45ms</text>
    </g>
    
    <!-- Right Subtree Node -->
    <g transform="translate(560, 40)">
      <circle cx="50" cy="40" r="30" fill="#0f172a" stroke="#64748b" stroke-width="2"/>
      <text x="50" y="36" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">PID 3100</text>
      <text x="50" y="49" fill="#cbd5e1" font-size="8" text-anchor="middle">vruntime: 98ms</text>
      <text x="50" y="85" fill="#94a3b8" font-size="9" text-anchor="middle">Higher vruntime</text>
    </g>
    
    <!-- Tree Lines -->
    <line x1="330" y1="75" x2="140" y2="75" stroke="#f59e0b" stroke-width="2"/>
    <line x1="410" y1="75" x2="570" y2="75" stroke="#64748b" stroke-width="2"/>
  </g>
  
  <text x="420" y="425" fill="#94a3b8" font-size="10" text-anchor="middle">CFS always dispatches the leftmost task with lowest vruntime, scaling accumulation by nice value</text>
</svg>`,
      caption: {
        en: 'Round Robin interleaves tasks via time quanta; Linux CFS dispatches the leftmost red-black tree node with the lowest virtual runtime.',
        bn: 'Round Robin টাইম কোয়ান্টামের মাধ্যমে কাজ ভাগ করে; আর লিনাক্স CFS সর্বনিম্ন ভার্চুয়াল রানটাইম থাকা রেড-ব্ল্যাক ট্রির বাম নোডটি চালায়।'
      },
    },
    {
      type: 'heading',
      id: 'scheduler-simulation-and-comparison-code',
      text: {
        en: 'FCFS vs Round Robin Latency Comparison Benchmark',
        bn: 'FCFS বনাম Round Robin লেটেন্সি তুলনা বেঞ্চমার্ক'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe the mathematical difference between non-preemptive and preemptive scheduling, compare FCFS against Round Robin time-slicing. The following benchmark calculates average waiting time across CPU-bound and interactive tasks.',
        bn: 'নন-প্রিম্পটিভ এবং প্রিম্পটিভ শিডিউলিংয়ের গাণিতিক পার্থক্য প্রত্যক্ষ করতে FCFS-এর সাথে Round Robin টাইম-স্লাইসিংয়ের তুলনা করুন। নিচের বেঞ্চমার্ক কোডটি অপেক্ষার গড় সময় ও রেসপন্স লেটেন্সি হিসাব করে দেখায়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'cpu-scheduler-benchmark.js',
      code: `// Deterministic CPU Scheduling Algorithm Comparison
// Compares FCFS Convoy Effect against Round Robin (10ms Quantum)

const tasks = [
  { id: 'Task_A', burstTime: 100, role: 'Heavy Calculation' },
  { id: 'Task_B', burstTime: 10,  role: 'Interactive Button Click' },
  { id: 'Task_C', burstTime: 10,  role: 'Incoming TCP Packet' }
];

// 1. First-Come First-Served (FCFS) Simulation
function runFCFS(taskList) {
  let currentTime = 0;
  let totalWait = 0;
  const metrics = [];

  for (const t of taskList) {
    const waitTime = currentTime;
    totalWait += waitTime;
    currentTime += t.burstTime;
    metrics.push({ id: t.id, waitTime, turnaround: waitTime + t.burstTime });
  }

  return {
    metrics,
    totalDuration: currentTime,
    averageWaitMs: totalWait / taskList.length
  };
}

// 2. Round Robin (RR) Simulation with 10ms Quantum
function runRoundRobin(taskList, quantum = 10) {
  const queue = taskList.map(t => ({
    id: t.id,
    remainingTime: t.burstTime,
    firstResponse: null,
    finishTime: null
  }));

  let currentTime = 0;
  let finishedCount = 0;

  while (finishedCount < queue.length) {
    for (const t of queue) {
      if (t.remainingTime <= 0) continue;

      if (t.firstResponse === null) {
        t.firstResponse = currentTime; // Records responsiveness
      }

      const runDuration = Math.min(t.remainingTime, quantum);
      t.remainingTime -= runDuration;
      currentTime += runDuration;

      if (t.remainingTime === 0 && t.finishTime === null) {
        t.finishTime = currentTime;
        finishedCount++;
      }
    }
  }

  const avgResponse = queue.reduce((sum, t) => sum + t.firstResponse, 0) / queue.length;
  return { queue, totalDuration: currentTime, avgResponseMs: avgResponse };
}

console.log('=== Step 1: First-Come First-Served Execution ===');
const fcfsResult = runFCFS(tasks);
console.log('Task A wait:', fcfsResult.metrics[0].waitTime, 'ms');
console.log('Task B wait:', fcfsResult.metrics[1].waitTime, 'ms (Trapped in Convoy!)');
console.log('Task C wait:', fcfsResult.metrics[2].waitTime, 'ms (Trapped in Convoy!)');
console.log('FCFS Average Waiting Time:', fcfsResult.averageWaitMs.toFixed(1), 'ms');

console.log('\\n=== Step 2: Round Robin Execution (10ms Quantum) ===');
const rrResult = runRoundRobin(tasks, 10);
for (const t of rrResult.queue) {
  console.log(t.id, 'First CPU Response at:', t.firstResponse, 'ms | Finished at:', t.finishTime, 'ms');
}
console.log('Round Robin Average Initial Response:', rrResult.avgResponseMs.toFixed(1), 'ms');

console.log('\\nConclusion: Round Robin gave Task B and C CPU attention in under 30ms, while FCFS forced them to wait 100ms!');`,
      caption: {
        en: 'The benchmark proves Round Robin responds to interactive tasks in under 30ms, while FCFS forces 100ms convoy wait times.',
        bn: 'বেঞ্চমার্কটি প্রমাণ করে Round Robin ৩০ মিলি-সেকেন্ডের মধ্যে ইন্টারঅ্যাক্টিভ কাজে সাড়া দেয়, যেখানে FCFS ১০০ মিলি-সেকেন্ড অপেক্ষায় রাখে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Nice Values: Tuning Process Priorities in Linux',
        bn: 'নাইস ভ্যালু: লিনাক্সে প্রসেস প্রায়োরিটি সমন্বয়'
      },
      text: {
        en: 'In Linux systems, process execution priority is fine-tuned using nice values ranging from -20 (highest priority, least nice to others) to +19 (lowest priority, most nice to others). The default value is 0. In the Completely Fair Scheduler (CFS), a process with nice -20 accumulates virtual runtime at a slower rate, receiving up to 88 percent of physical CPU time under contention. Conversely, a background task with nice +19 receives only 1 percent. You can launch programs with custom priorities via nice -n -5 ./app or adjust live processes using renice +10 [PID].',
        bn: 'লিনাক্স সিস্টেমে প্রসেসের কাজের অগ্রাধিকার নির্ধারণে নাইস ভ্যালু ব্যবহৃত হয়, যার পরিসর -২০ ( সর্বোচ্চ প্রায়োরিটি ) থেকে +১৯ ( সর্বনিম্ন প্রায়োরিটি ) পর্যন্ত। ডিফল্ট মান হলো ০। লিনাক্স CFS শিডিউলারে -২০ নাইস থাকা প্রসেসের ভার্চুয়াল রানটাইম খুব ধীরে বৃদ্ধি পায়, ফলে চাপের মধ্যেও এটি ৮৮ শতাংশ পর্যন্ত সিপিইউ সময় পায়। বিপরীতে, +১৯ নাইস থাকা ব্যাকগ্রাউন্ড টাস্ক পায় মাত্র ১ শতাংশ সময়। আপনি nice -n -5 ./app দিয়ে অগ্রাধিকার বাড়িয়ে প্রোগ্রাম চালু করতে পারেন অথবা renice +10 [PID] দিয়ে লাইভ পরিবর্তন করতে পারেন।'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-sched-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the default numerical nice priority integer assigned to newly launched processes on Linux? (0). Type the number.',
        bn: 'লিনাক্সে নতুন চালু হওয়া যেকোনো প্রসেসকে ডিফল্টভাবে কত নাইস (nice) প্রায়োরিটি মান দেওয়া হয়? ( ০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'Default nice level is 0.',
        bn: 'ডিফল্ট নাইস মান হলো ০।'
      },
      explanation: {
        en: 'New processes inherit a default nice level of 0, giving them equal weight in the Linux Completely Fair Scheduler.',
        bn: 'নতুন প্রসেসগুলো ডিফল্ট ০ নাইস মান লাভ করে, যা লিনাক্স CFS শিডিউলারে সমতা নিশ্চিত করে।'
      },
    },
    {
      id: 'proc-sched-ex-2',
      kind: 'mcq',
      question: {
        en: 'What system bottleneck defines the Convoy Effect in First-Come First-Served (FCFS) process scheduling?',
        bn: 'First-Come First-Served (FCFS) প্রসেস শিডিউলিংয়ে কনভয় প্রভাব (Convoy Effect) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'A long CPU-intensive process occupies the processor, forcing many short interactive tasks to wait behind it and destroying system responsiveness',
          bn: 'একটি দীর্ঘ সিপিইউ-নিবিড় প্রসেস প্রসেসর দখল করে রাখে, যার ফলে তার পেছনে থাকা বহু ক্ষুদ্র ইন্টারঅ্যাক্টিভ কাজ আটকে গিয়ে সিস্টেম হ্যাং হয়',
        },
        {
          en: 'A fleet of military trucks driving across a bridge',
          bn: 'একটি ব্রিজের ওপর দিয়ে সামরিক ট্রাকের বহর অতিক্রম করা',
        },
        {
          en: 'A computer screen displaying images of automobiles',
          bn: 'কম্পিউটার স্ক্রিনে বিভিন্ন গাড়ির ছবি প্রদর্শিত হওয়া',
        },
        {
          en: 'Two computer keyboards connected to the same USB port',
          bn: 'দুটি কিবোর্ড একই ইউএসবি পোর্টে একসাথে যুক্ত থাকা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Short tasks stuck waiting behind one massive non-preemptive CPU hog.',
        bn: 'একটি বিশাল কাজের পেছনে বহু ছোট কাজের অনর্থক আটকে থাকা।',
      },
      explanation: {
        en: 'The convoy effect occurs when non-preemptive schedulers allow a long batch job to block short interactive jobs.',
        bn: 'কনভয় প্রভাব ঘটে যখন নন-প্রিম্পটিভ শিডিউলার দীর্ঘ কাজকে না থামিয়ে চালিয়ে ছোট কাজগুলোকে আটকে রাখে।'
      },
    },
    {
      id: 'proc-sched-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does the Linux Completely Fair Scheduler (CFS) select the next process to execute on an available CPU core?',
        bn: 'একটি খালি সিপিইউ কোরে চালানোর জন্য লিনাক্স Completely Fair Scheduler (CFS) কীভাবে পরবর্তী প্রসেস বেছে নেয়?'
      },
      options: [
        {
          en: 'It queries a self-balancing Red-Black Tree and selects the task with the smallest virtual runtime (vruntime) located at the leftmost node',
          bn: 'এটি একটি রেড-ব্ল্যাক ট্রির সবচেয়ে বাঁ দিকের নোডে থাকা সর্বনিম্ন ভার্চুয়াল রানটাইম (vruntime) বিশিষ্ট প্রসেসটিকে বেছে নেয়',
        },
        {
          en: 'It picks a random process from the alphabet A to Z',
          bn: 'এটি বর্ণমালার A থেকে Z এর মধ্যে যেকোনো একটি এলোমেলো প্রসেস নেয়',
        },
        {
          en: 'It asks the user to choose by clicking on a dialog box',
          bn: 'এটি একটি ডায়ালগ বক্সে ক্লিক করে ব্যবহারকারীকে বেছে নিতে বলে',
        },
        {
          en: 'It runs whichever program file is physically oldest on disk',
          bn: 'ডিস্কে সংরক্ষিত সবচেয়ে পুরনো ফাইলটিকে এটি সবার আগে চালায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'CFS picks the leftmost node with the lowest vruntime from a Red-Black Tree.',
        bn: 'CFS রেড-ব্ল্যাক ট্রির বাম নোডের সর্বনিম্ন vruntime থাকা প্রসেসটি নির্বাচন করে।',
      },
      explanation: {
        en: 'The CFS red-black tree tracks execution fairness. The leftmost task has received the least CPU time and runs next.',
        bn: 'CFS রেড-ব্ল্যাক ট্রি সমতা রক্ষা করে। সর্বনিম্ন সময় পাওয়া বাম নোডের প্রসেসটি পরবর্তী টার্ন পায়।'
      },
    },
    {
      id: 'proc-sched-ex-4',
      kind: 'predict',
      question: {
        en: 'In Linux process scheduling, what is the lowest numerical nice integer representing the highest CPU priority? (-20). Type the number.',
        bn: 'লিনাক্স প্রসেস শিডিউলিংয়ে সর্বোচ্চ প্রায়োরিটি নির্দেশকারী সর্বনিম্ন নাইস (nice) সংখ্যার মান কত? ( -২০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '-20',
      hint: {
        en: 'Highest priority is nice -20.',
        bn: 'সর্বোচ্চ প্রায়োরিটি হলো নাইস -২০।'
      },
      explanation: {
        en: 'Nice values range from -20 to +19. A nice value of -20 gives a process top scheduling priority.',
        bn: 'নাইস মান -২০ থেকে +১৯ পর্যন্ত হয়। -২০ মান প্রসেসকে সর্বোচ্চ প্রায়োরিটি প্রদান করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'CPU Scheduling Algorithms Quiz',
      bn: 'সিপিইউ শিডিউলিং অ্যালগরিদম কুইজ'
    },
    questions: [
      {
        id: 'proc-sched-qz-1',
        kind: 'mcq',
        topic: 'why-pure-sjf-impossible',
        question: {
          en: 'Why is pure Shortest Job First (SJF) scheduling impossible to implement perfectly in general-purpose operating systems?',
          bn: 'সাধারণ অপারেটিং সিস্টেমে নিখুঁত Shortest Job First (SJF) শিডিউলিং বাস্তবায়ন করা কেন অসম্ভব?'
        },
        options: [
          {
            en: 'The operating system kernel cannot know in advance how long a program will execute before it actually runs, as CPU burst times depend on unpredictable user input and network data',
            bn: 'প্রোগ্রামটি বাস্তবে চলার আগে কার্নেল কখনোই নিশ্চিতভাবে জানতে পারে না এর কতটুকু সময় লাগবে, কারণ সিপিইউ বার্স্ট নির্ভর করে ব্যবহারকারীর ইনপুট ও নেটওয়ার্কের ওপর',
          },
          {
            en: 'Because computer hardware can only measure time in minutes, not milliseconds',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার কেবল মিনিটে সময় মাপতে পারে, মিলিসেকেন্ডে নয়',
          },
          {
            en: 'Because Shortest Job First is illegal under international software law',
            bn: 'কারণ আন্তর্জাতিক সফটওয়্যার আইনে Shortest Job First ব্যবহার নিষিদ্ধ',
          },
          {
            en: 'Because keyboards stop sending electrical signals when jobs are short',
            bn: 'কারণ কাজ ছোট হলে কিবোর্ড সংকেত পাঠানো বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Future CPU burst lengths cannot be known in advance.',
          bn: 'ভবিষ্যতের সিপিইউ সময়ের দৈর্ঘ্য আগে থেকে জানা অসম্ভব।',
        },
        explanation: {
          en: 'SJF requires knowing future CPU bursts. Because program execution time varies dynamically, OS schedulers can only approximate it.',
          bn: 'SJF-এর জন্য ভবিষ্যতের সময় জানা আবশ্যক। প্রোগ্রাম পরিবর্তনশীল হওয়ায় ওএস কেবল পূর্বের ইতিহাসের ওপর ভিত্তি করে অনুমান করতে পারে।'
        },
      },
      {
        id: 'proc-sched-qz-2',
        kind: 'mcq',
        topic: 'round-robin-quantum-tradeoff',
        question: {
          en: 'What severe performance penalty occurs if a Round Robin scheduler time quantum is configured too small (e.g. 5 microseconds)?',
          bn: 'Round Robin শিডিউলারে টাইম কোয়ান্টামের মান যদি অত্যন্ত ছোট ( যেমন ৫ মাইক্রোসেকেন্ড ) করা হয়, তবে কোন মারাত্মক ক্ষতি ঘটে?'
        },
        options: [
          {
            en: 'CPU context switching overhead dominates system performance, wasting the majority of processor cycles saving and restoring registers rather than executing useful user code',
            bn: 'কনটেক্সট সুইচের অতিরিক্ত সময়ের অপচয় পুরো সিস্টেমকে ধীর করে দেয়, ফলে আসল কোড চালানোর চেয়ে রেজিস্টার সংরক্ষণ ও পুনরুদ্ধারে বেশিরভাগ সময় নষ্ট হয়',
          },
          {
            en: 'The computer power supply begins producing radioactive rays',
            bn: 'কম্পিউটার পাওয়ার সাপ্লাই তেজস্ক্রিয় রশ্মি তৈরি করা শুরু করে',
          },
          {
            en: 'The computer screen permanent colors turn into inverted grayscale',
            bn: 'কম্পিউটার স্ক্রিনের সমস্ত রঙ চিরতরে সাদাকালো হয়ে যায়',
          },
          {
            en: 'The computer deletes all video games installed on the SSD',
            bn: 'কম্পিউটার এসএসডিতে থাকা সমস্ত ভিডিও গেম নিজে থেকেই মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Frequent context switches waste CPU cycles on register saving instead of real work.',
          bn: 'ঘন ঘন কনটেক্সট সুইচ আসল কাজের চেয়ে রেজিস্টার সংরক্ষণে বেশি সময় নষ্ট করে।',
        },
        explanation: {
          en: 'If the quantum is too short, the context switch overhead (1-5 µs) consumes a significant fraction of CPU capacity.',
          bn: 'কোয়ান্টাম খুব ছোট হলে কনটেক্সট সুইচের খরচই প্রধান হয়ে দাঁড়ায় এবং আসল কাজের গতি চরমভাবে ব্যাহত হয়।'
        },
      },
      {
        id: 'proc-sched-qz-3',
        kind: 'mcq',
        topic: 'cfs-negative-nice-impact',
        question: {
          en: 'In the Linux Completely Fair Scheduler (CFS), how does assigning a negative nice value (e.g. nice -10) grant a process more CPU time?',
          bn: 'লিনাক্স CFS শিডিউলারে ঋণাত্মক নাইস মান ( যেমন nice -১০ ) কীভাবে একটি প্রসেসকে বেশি সিপিইউ সময় পেতে সাহায্য করে?'
        },
        options: [
          {
            en: 'Negative nice values assign higher priority weight, causing the virtual runtime (vruntime) to accumulate much more slowly, keeping the task on the left side of the red-black tree',
            bn: 'ঋণাত্মক নাইস মান উচ্চ অগ্রাধিকার দেয়, যার ফলে ভার্চুয়াল রানটাইম (vruntime) খুব ধীরে বাড়ে এবং প্রসেসটি রেড-ব্ল্যাক ট্রির বাম দিকে বেশি সময় ধরে থাকে',
          },
          {
            en: 'It tells the CPU to physically freeze all other computer hardware',
            bn: 'এটি সিপিইউকে নির্দেশ দেয় অন্য সমস্ত হার্ডওয়্যারকে শারীরিক অর্থে জমিয়ে দিতে',
          },
          {
            en: 'It lowers the price of the monthly cloud hosting subscription',
            bn: 'এটি প্রতি মাসের ক্লাউড হোস্টিং বিলের খরচ কমিয়ে দেয়',
          },
          {
            en: 'It plays sound recordings of keyboard typing through speakers',
            bn: 'এটি স্পিকারের মাধ্যমে কিবোর্ড টাইপিংয়ের শব্দ শোনায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Higher priority scales vruntime accumulation down, keeping it leftmost in the tree.',
          bn: 'উচ্চ প্রায়োরিটি vruntime বৃদ্ধির গতি কমিয়ে একে ট্রির বামে ধরে রাখে।',
        },
        explanation: {
          en: 'CFS scales vruntime by priority weight. High-priority tasks accumulate vruntime slower, so the scheduler picks them more frequently.',
          bn: 'CFS প্রায়োরিটি দিয়ে vruntime হিসাব করে। উচ্চ প্রায়োরিটির টাস্কের vruntime ধীরে বাড়ায় শিডিউলার একে ঘন ঘন প্রসেসরে পাঠায়।'
        },
      },
      {
        id: 'proc-sched-qz-4',
        kind: 'mcq',
        topic: 'turnaround-vs-waiting-time',
        question: {
          en: 'In process scheduling metrics, what is the technical distinction between Turnaround Time and Waiting Time?',
          bn: 'প্রসেস শিডিউলিং মেট্রিক্সে টার্নঅ্যারাউন্ড টাইম (Turnaround Time) এবং ওয়েটিং টাইমের (Waiting Time) মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'Turnaround Time is the total elapsed duration from process submission until complete termination; Waiting Time is the total duration spent sitting idle in the ready queue',
            bn: 'টার্নঅ্যারাউন্ড টাইম হলো প্রসেস জমা দেওয়া থেকে সমাপ্তি পর্যন্ত মোট অতিবাহিত সময়; আর ওয়েটিং টাইম হলো কেবল রেডি কিউতে অলস বসে থাকার মোট সময়',
          },
          {
            en: 'Turnaround Time is measured in miles; Waiting Time is measured in gallons',
            bn: 'টার্নঅ্যারাউন্ড টাইম মাইলে মাপা হয়; আর ওয়েটিং টাইম গ্যালনে পরিমাপ করা হয়',
          },
          {
            en: 'Turnaround Time only applies to laptops; Waiting Time applies to servers',
            bn: 'টার্নঅ্যারাউন্ড টাইম কেবল ল্যাপটপে প্রযোজ্য; আর ওয়েটিং টাইম কেবল সার্ভারে ব্যবহৃত হয়',
          },
          {
            en: 'Both metrics describe identical hardware temperatures',
            bn: 'উভয় মেট্রিক্সই কম্পিউটারের হুবহু একই হার্ডওয়্যার তাপমাত্রা নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Turnaround includes wait + execution; Waiting is only the time spent in Ready queue.',
          bn: 'টার্নঅ্যারাউন্ডে অপেক্ষার ও কাজের সময় অন্তর্ভুক্ত; ওয়েটিং হলো কেবল কিউতে বসে থাকার সময়।',
        },
        explanation: {
          en: 'Turnaround Time = Completion Time - Arrival Time. Waiting Time = Turnaround Time - Actual CPU Burst Time.',
          bn: 'টার্নঅ্যারাউন্ড টাইম হলো শুরু থেকে শেষের মোট সময়। আর ওয়েটিং টাইম হলো কেবল রেডি কিউতে অপেক্ষা করার মোট সময়।'
        },
      },
    ],
  },
  next: {
    slug: 'processes-capstone',
    title: {
      en: 'Process Engineering & Production Supervisor Capstone',
      bn: 'প্রসেস ইঞ্জিনিয়ারিং এবং প্রোডাকশন সুপারভাইজার ক্যাপস্টোন'
    },
  },
};
