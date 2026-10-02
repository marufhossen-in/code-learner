import type { Lesson } from '../../../lib/types';

export const OsCapstoneLesson: Lesson = {
  slug: 'os-capstone',
  tech: 'operating-systems',
  title: {
    en: 'OS Performance Tuning, Production Triage & Architecture Capstone',
    bn: 'ওএস পারফরম্যান্স টিউনিং, প্রোডাকশন ট্রায়াজ এবং আর্কিটেকচার ক্যাপস্টোন',
  },
  summary: {
    en: 'Synthesize complete operating system principles through production incident triage and performance engineering. Diagnose CPU saturation with load average, analyze I/O wait and NVMe queues, trace syscall latency with strace and eBPF, resolve deadlock conditions, and tune sysctl kernel parameters.',
    bn: 'প্রোডাকশন ইনসিডেন্ট সমাধান এবং পারফরম্যান্স ইঞ্জিনিয়ারিংয়ের মাধ্যমে অপারেটিং সিস্টেমের পূর্ণাঙ্গ জ্ঞান সমন্বয় করুন। লোড এভারেজ দিয়ে সিপিইউ স্যাচুরেশন নির্ণয়, আই/ও ওয়েট এবং এনভিএমই কিউ বিশ্লেষণ, strace ও eBPF দিয়ে সিস্টেম কল পর্যবেক্ষণ, ডেডলক সমাধান এবং sysctl কার্নেল প্যারামিটার টিউনিং বিস্তারিত শিখুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'production-systems-triage-methodology',
      text: {
        en: 'Production Systems Triage: The USE Method & Load Averages',
        bn: 'প্রোডাকশন সিস্টেম ট্রায়াজ: ইউএসই মেথড এবং লোড এভারেজ',
      },
    },
    {
      type: 'para',
      text: {
        en: 'When a critical production server exhibits degraded performance, systems engineers apply the USE Method (Utilization, Saturation, and Errors) across hardware resources. The classic indicator is the 3-number Load Average visible in uptime or /proc/loadavg, measuring runnable threads (R state) plus threads trapped in uninterruptible disk sleep (D state) across 1, 5, and 15-minute windows. On a system with 4 physical CPU cores, a 1-minute load average of 4 represents 100% core capacity. If the load climbs to 9.8 while %iowait reaches 58%, the primary bottleneck is not compute saturation, but processes waiting for blocked storage controller I/O.',
        bn: 'যখন কোনো প্রোডাকশন সার্ভারে পারফরম্যান্স হ্রাস পায়, তখন সিস্টেম ইঞ্জিনিয়াররা প্রতিটি হার্ডওয়্যার উপাদানের ওপর USE মেথড ( ইউটিলাইজেশন, স্যাচুরেশন এবং এরর ) প্রয়োগ করেন। সিস্টেমের অবস্থা বোঝার প্রধান সূচক হলো uptime বা /proc/loadavg ফাইলে দৃশ্যমান ৩ সংখ্যার লোড এভারেজ, যা ১ , ৫ এবং ১৫ মিনিটের ব্যবধানে রানিং থ্রেড ( R স্টেট ) ও আন-ইন্টারাপ্টিবল ডিস্ক স্লিপে থাকা থ্রেডের ( D স্টেট ) গড় পরিমাপ করে। ৪ টি ফিজিক্যাল সিপিইউ কোর থাকা সিস্টেমে ১ মিনিটের লোড এভারেজ ৪ হওয়ার অর্থ হলো প্রসেসরের ১০০% ধারণক্ষমতা ব্যবহৃত হচ্ছে। যদি লোড এভারেজ বেড়ে ৯.৮ হয় এবং আই/ও ওয়েট ৫৮% এ পৌঁছায়, তবে মূল সমস্যা সিপিইউর নয়, বরং ডিস্ক স্টোরেজের বিলম্ব।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Production OS Subsystems & Triage Observation Points',
        bn: 'প্রোডাকশন ওএস সাবসিস্টেম এবং ট্রায়াজ পর্যবেক্ষণ কেন্দ্র',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="cpuGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="memGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="diskGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="netGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.25"/>
    </linearGradient>
  </defs>

  <!-- Box 1: CPU Subsystem -->
  <rect x="25" y="30" width="370" height="175" rx="10" fill="url(#cpuGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="45" y="60" font-size="15" font-weight="700" fill="#0369a1">1. CPU &amp; SCHEDULER</text>
  <text x="45" y="80" font-size="11" fill="#64748b">Runqueue &amp; Context Switches</text>

  <rect x="45" y="95" width="330" height="95" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="120" font-size="12" font-weight="700" fill="#0f172a">Metrics: Load Avg (1m, 5m, 15m), %usr, %sys, cs</text>
  <text x="55" y="140" font-size="11" fill="#475569">Inspection Tool: vmstat 1, pidstat -u 1, top</text>
  <text x="55" y="160" font-size="11" fill="#16a34a">Tuning: taskset (Core Affinity), chrt (Realtime priority)</text>
  <text x="55" y="177" font-size="11" fill="#dc2626">Warning: Load &gt; Cores indicates runqueue backlog</text>

  <!-- Box 2: Memory & Paging Subsystem -->
  <rect x="425" y="30" width="370" height="175" rx="10" fill="url(#memGrad)" stroke="#047857" stroke-width="2"/>
  <text x="445" y="60" font-size="15" font-weight="700" fill="#065f46">2. VIRTUAL MEMORY &amp; PAGING</text>
  <text x="445" y="80" font-size="11" fill="#64748b">Page Cache, Swap &amp; OOM Killer</text>

  <rect x="445" y="95" width="330" height="95" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="455" y="120" font-size="12" font-weight="700" fill="#0f172a">Metrics: free, buff/cache, swap in/out (si/so), #PF</text>
  <text x="455" y="140" font-size="11" fill="#475569">Inspection Tool: free -m, vmstat 1, sar -B 1</text>
  <text x="455" y="160" font-size="11" fill="#16a34a">Tuning: sysctl vm.swappiness=10, vm.dirty_ratio=20</text>
  <text x="455" y="177" font-size="11" fill="#dc2626">Warning: High si/so indicates severe swap thrashing</text>

  <!-- Box 3: Storage & VFS Subsystem -->
  <rect x="25" y="225" width="370" height="185" rx="10" fill="url(#diskGrad)" stroke="#d97706" stroke-width="2"/>
  <text x="45" y="255" font-size="15" font-weight="700" fill="#92400e">3. STORAGE &amp; VFS</text>
  <text x="45" y="275" font-size="11" fill="#64748b">Inodes, IOPS &amp; Uninterruptible D-State</text>

  <rect x="45" y="290" width="330" height="105" rx="6" fill="#ffffff" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="55" y="315" font-size="12" font-weight="700" fill="#0f172a">Metrics: %iowait, IOPS, await ms, %util, df -i</text>
  <text x="55" y="335" font-size="11" fill="#475569">Inspection Tool: iostat -xz 1, iotop -o, df -ih</text>
  <text x="55" y="355" font-size="11" fill="#16a34a">Tuning: elevator=mq-deadline for NVMe, fs.file-max</text>
  <text x="55" y="375" font-size="11" fill="#dc2626">Warning: D-State processes cannot be killed with kill -9</text>

  <!-- Box 4: Concurrency & Tracing -->
  <rect x="425" y="225" width="370" height="185" rx="10" fill="url(#netGrad)" stroke="#7e22ce" stroke-width="2"/>
  <text x="445" y="255" font-size="15" font-weight="700" fill="#6b21a8">4. CONCURRENCY &amp; OBSERVABILITY</text>
  <text x="445" y="275" font-size="11" fill="#64748b">Deadlocks, Syscall Latency &amp; eBPF</text>

  <rect x="445" y="290" width="330" height="105" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="455" y="315" font-size="12" font-weight="700" fill="#0f172a">Metrics: Futex wait latency, Coffman circular wait</text>
  <text x="455" y="335" font-size="11" fill="#475569">Inspection Tool: strace -c -p &lt;PID&gt;, bpftrace, perf</text>
  <text x="455" y="355" font-size="11" fill="#16a34a">Tuning: Global mutex lock hierarchy, lockless queues</text>
  <text x="455" y="375" font-size="11" fill="#dc2626">Warning: strace slows production; eBPF has zero overhead</text>
</svg>`,
      caption: {
        en: 'The holistic operating system triage map: evaluating CPU saturation, memory paging pressure, storage queue wait states, and syscall concurrency bottlenecks.',
        bn: 'অপারেটিং সিস্টেমের সমন্বিত ট্রায়াজ মানচিত্র: সিপিইউ স্যাচুরেশন, মেমোরি পেজিং চাপ, স্টোরেজ কিউ ওয়েট স্টেট এবং সিস্টেম কল কনকারেন্সির সমস্যা পর্যবেক্ষণ।',
      },
    },
    {
      type: 'heading',
      id: 'concurrency-and-deadlock-prevention',
      text: {
        en: 'Concurrency, Mutex Deadlocks & The 4 Coffman Conditions',
        bn: 'কনকারেন্সি, মিউটেক্স ডেডলক এবং ৪ টি কফম্যান শর্ত',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Multi-threaded operating systems and services protect shared memory structures using mutual exclusion locks (mutexes). However, improper lock acquisition can cause a permanent system deadlock where threads freeze indefinitely. Computer scientist Edward G. Coffman identified that a deadlock can arise if and only if four simultaneous conditions hold true: 1. Mutual Exclusion (a resource is held non-shareably); 2. Hold and Wait (a thread holds one lock while requesting another); 3. No Preemption (locks cannot be forcibly confiscated); and 4. Circular Wait (a closed dependency chain where process P1 awaits resource R2 held by P2, who simultaneously awaits resource R1 held by P1). Modern operating systems prevent deadlocks by enforcing strict global lock ordering, guaranteeing Circular Wait can never occur.',
        bn: 'মাল্টি-থ্রেডেড অপারেটিং সিস্টেম এবং অ্যাপ্লিকেশনগুলো শেয়ার্ড মেমোরির ডেটা সুরক্ষিত রাখতে মিউটেক্স (mutex) লক ব্যবহার করে। কিন্তু অসতর্কভাবে লক ব্যবহার করলে সিস্টেমে স্থায়ী ডেডলক তৈরি হয় এবং প্রসেসগুলো চিরতরে আটকে যায়। কম্পিউটার বিজ্ঞানী এডওয়ার্ড জি. কফম্যান প্রমাণ করেন যে ৪ টি শর্ত একসাথে বিদ্যমান থাকলেই কেবল ডেডলক তৈরি হতে পারে: ১ . মিউচুয়াল এক্সক্লুশন ( রিসোর্সটি কেবল একজন ব্যবহার করতে পারে ); ২ . হোল্ড অ্যান্ড ওয়েট ( একটি লক ধরে রেখে অন্য লকের জন্য অপেক্ষা করা ); ৩ . নো প্রি-এম্পশন ( কারও কাছ থেকে জোরপূর্বক লক কেড়ে নেওয়া যায় না ); এবং ৪ . সার্কুলার ওয়েট ( একটি বদ্ধ চক্র যেখানে প্রসেস P1 অপেক্ষা করে P2 এর রিসোর্সের জন্য এবং P2 অপেক্ষা করে P1 এর জন্য )। আধুনিক অপারেটিং সিস্টেমগুলো একটি কঠোর গ্লোবাল লক অর্ডারিং বা অনুক্রম প্রয়োগ করে সার্কুলার ওয়েট চিরতরে প্রতিরোধ করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Production OS Triage & Deadlock Detection Engine
class ProductionTriageEngine {
  constructor(telemetry) {
    this.telemetry = telemetry;
    this.diagnostics = [];
  }

  evaluateHealth() {
    const { cpuCores, load1m, iowaitPercent, swapInPerSec, inodeFreePercent, lockWaitGraph } = this.telemetry;

    // 1. CPU Saturation Analysis
    if (load1m > cpuCores) {
      this.diagnostics.push({
        subsystem: 'CPU',
        severity: 'CRITICAL',
        finding: \`Load average (\${load1m}) exceeds physical core count (\${cpuCores}). Runqueue saturated.\`,
        remediation: 'Scale worker threads or bind tasks with taskset CPU affinity.',
      });
    }

    // 2. Storage Bottleneck (D-State Analysis)
    if (iowaitPercent > 40) {
      this.diagnostics.push({
        subsystem: 'STORAGE',
        severity: 'HIGH',
        finding: \`High I/O wait (\${iowaitPercent}%). Processes accumulating in uninterruptible D-state.\`,
        remediation: 'Inspect NVMe queue depths with iostat -xz 1. Flush dirty pages.',
      });
    }

    // 3. Memory Paging / Swapping Pressure
    if (swapInPerSec > 50) {
      this.diagnostics.push({
        subsystem: 'VIRTUAL_MEMORY',
        severity: 'HIGH',
        finding: \`Active swap thrashing detected (\${swapInPerSec} pages/sec). Working set exceeds RAM.\`,
        remediation: 'Tune sysctl vm.swappiness=10 to prioritize page cache over swap.',
      });
    }

    // 4. Inode Table Capacity
    if (inodeFreePercent < 5) {
      this.diagnostics.push({
        subsystem: 'FILESYSTEM',
        severity: 'EMERGENCY',
        finding: \`Inode table exhausted (\${inodeFreePercent}% free). New files will fail with ENOSPC.\`,
        remediation: 'Purge micro-cached session files or expand partition inode allocation.',
      });
    }

    // 5. Concurrency Deadlock Detection (Cycle detection in Lock Graph)
    const cycle = this.findCircularWait(lockWaitGraph);
    if (cycle) {
      this.diagnostics.push({
        subsystem: 'CONCURRENCY',
        severity: 'FATAL_DEADLOCK',
        finding: \`Circular wait cycle detected between threads: \${cycle.join(' -> ')}.\`,
        remediation: 'Enforce strict monotonic lock acquisition order across all worker threads.',
      });
    }

    return this.diagnostics;
  }

  findCircularWait(graph) {
    const visited = new Set();
    const stack = new Set();
    let detectedCycle = null;

    const dfs = (node, path) => {
      visited.add(node);
      stack.add(node);
      path.push(node);

      for (const next of graph[node] || []) {
        if (!visited.has(next)) {
          if (dfs(next, [...path])) return true;
        } else if (stack.has(next)) {
          detectedCycle = [...path, next];
          return true;
        }
      }
      stack.delete(node);
      return false;
    };

    for (const node of Object.keys(graph)) {
      if (!visited.has(node) && dfs(node, [])) return detectedCycle;
    }
    return null;
  }
}

// Verification Incident Snapshot
const serverSnapshot = {
  cpuCores: 4,
  load1m: 9.8,
  iowaitPercent: 58,
  swapInPerSec: 120,
  inodeFreePercent: 2,
  lockWaitGraph: {
    Thread_Worker_1: ['Thread_Worker_2'],
    Thread_Worker_2: ['Thread_Worker_1'],
  },
};

const triage = new ProductionTriageEngine(serverSnapshot);
const findings = triage.evaluateHealth();

console.log('Production Triage Assessment:');
findings.forEach((diag, index) => {
  console.log(\`[\${index + 1}] \${diag.subsystem} (\${diag.severity}): \${diag.finding}\`);
  console.log(\`    Fix: \${diag.remediation}\`);
});`,
      caption: {
        en: 'A verified simulation of the production OS triage engine, systematically diagnosing CPU saturation, uninterruptible D-state I/O wait, swap thrashing, and concurrency deadlocks.',
        bn: 'প্রোডাকশন ওএস ট্রায়াজ ইঞ্জিনের বাস্তব সিমুলেশন যা পর্যায়ক্রমে সিপিইউ স্যাচুরেশন, ডি-স্টেট আই/ও ওয়েট, সোয়াপ ট্র্যাশিং এবং মিউটেক্স ডেডলক বিশ্লেষণ করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Load Average',
          def: {
            en: 'An exponentially dampened moving average of processes in the runnable (R) and uninterruptible disk sleep (D) states across 1, 5, and 15-minute intervals.',
            bn: '১ , ৫ এবং ১৫ মিনিটের ব্যবধানে রানিং ( R ) এবং আন-ইন্টারাপ্টিবল ডিস্ক স্লিপ ( D ) অবস্থায় থাকা প্রসেসগুলোর একটি সূচকীয় গড় পরিমাপ।',
          },
        },
        {
          term: 'Uninterruptible Sleep (D-State)',
          def: {
            en: 'A kernel process state where a thread is waiting synchronously for critical hardware I/O and cannot be interrupted or terminated even by kill -9.',
            bn: 'কার্নেলের একটি বিশেষ প্রসেস অবস্থা যেখানে থ্রেডটি সরাসরি ডিস্কের জন্য অপেক্ষমাণ থাকে এবং kill -9 সংকেত দিয়েও তাকে বন্ধ করা যায় না।',
          },
        },
        {
          term: 'eBPF Observability',
          def: {
            en: 'In-kernel sandboxed virtual machine programs executing at JIT speed to trace system calls, network sockets, and scheduler events with negligible runtime overhead.',
            bn: 'কার্নেলের ভেতরে থাকা নিরাপদ ভার্চুয়াল মেশিন যা প্রায় শূন্য প্রসেসর অপচয়ে সিস্টেম কল, নেটওয়ার্ক ও শিডিউলারের তথ্য ট্রেস করে।',
          },
        },
        {
          term: 'Coffman Conditions',
          def: {
            en: 'The four formal computer science criteria (mutual exclusion, hold and wait, no preemption, and circular wait) necessary and sufficient for a deadlock.',
            bn: 'কম্পিউটার বিজ্ঞানের ৪ টি মৌলিক শর্ত (মিউচুয়াল এক্সক্লুশন, হোল্ড অ্যান্ড ওয়েট, নো প্রি-এম্পশন এবং সার্কুলার ওয়েট) যা ডেডলক সৃষ্টির জন্য দায়ী।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Production systems engineers tune kernel limits in /etc/sysctl.conf to prevent cascading outages under high concurrency. Setting net.core.somaxconn = 65535 expands the TCP listening backlog, vm.swappiness = 10 prevents premature swapping of memory, and fs.file-max = 2097152 prevents file descriptor exhaustion.',
        bn: 'উচ্চ ট্রাফিকের চাপ সামলাতে প্রোডাকশন সিস্টেম ইঞ্জিনিয়াররা /etc/sysctl.conf ফাইলে কার্নেল সীমা টিউন করেন। net.core.somaxconn = ৬৫৫৩৫ মানটি টিসিপি লিসেনিং ব্যাকলগ বৃদ্ধি করে, vm.swappiness = ১০ সক্রিয় মেমোরির অকাল সোয়াপিং প্রতিহত করে এবং fs.file-max = ২০৯৭১৫২ নিশ্চিত করে যে সার্ভারে ফাইল ডেসক্রিপ্টরের ঘাটতি না হয়।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-cap-ex-1',
          kind: 'predict',
          question: {
            en: 'On a production server equipped with 4 physical CPU cores, what is the minimum 1-minute load average value indicating that runnable processes are actively queuing for CPU time?',
            bn: '৪ টি ফিজিক্যাল সিপিইউ কোর বিশিষ্ট একটি প্রোডাকশন সার্ভারে ১ মিনিটের লোড এভারেজের সর্বনিম্ন কোন মান নির্দেশ করে যে প্রসেসগুলো সিপিইউ সময়ের জন্য কিউতে অপেক্ষা করছে?'
          },
          answer: '4',
          hint: {
            en: 'A load average equal to the physical core count represents 100% capacity; anything above indicates queued waiting.',
            bn: 'কোরের সমান লোড এভারেজ মানে ১০০% ব্যবহার; এর বেশি হলেই কাজগুলো কিউতে অপেক্ষা করতে শুরু করে।',
          },
          explanation: {
            en: 'When load average exceeds the core count (4), the CPU runqueue contains more ready processes than physical hardware execution pipelines, causing queuing latency.',
            bn: 'লোড এভারেজ যখন কোরের সংখ্যা ( ৪ ) অতিক্রম করে, তখন রেডি কিউতে ফিজিক্যাল কোরের চেয়ে বেশি কাজ চলে আসে এবং অপেক্ষার সৃষ্টি হয়।',
          },
        },
        {
          id: 'os-cap-ex-2',
          kind: 'mcq',
          question: {
            en: 'During server incident triage, what does a high CPU percentage of %iowait coupled with a high load average indicate?',
            bn: 'সার্ভার ট্রায়াজের সময় উচ্চ লোড এভারেজের সাথে উচ্চ %iowait শতকরা হার দেখতে পেলে কী বোঝা যায়?'
          },
          options: [
            {
              en: 'The CPU cores are frequently idle waiting for slow storage drives or network controllers to complete pending read/write operations (uninterruptible D-state)',
              bn: 'সিপিইউ কোরগুলো অলস বসে ধীরগতির হার্ড ড্রাইভ বা নেটওয়ার্ক থেকে ডেটা রিড/রাইট শেষ হওয়ার জন্য অপেক্ষা করছে (আন-ইন্টারাপ্টিবল D-স্টেট)',
            },
            {
              en: 'The system has run out of internet browser bookmark capacity',
              bn: 'সিস্টেমে ব্রাউজার বুকমার্ক সংরক্ষণের জায়গা শেষ হয়ে গেছে',
            },
            {
              en: 'The operating system monitor brightness has dropped to 0%',
              bn: 'অপারেটিং সিস্টেম মনিটরের উজ্জ্বলতা ০% এ নেমে এসেছে',
            },
            {
              en: 'The CPU cooling fan has reversed its physical rotation direction',
              bn: 'সিপিইউ ফ্যানটি বিপরীত দিকে ঘুরতে শুরু করেছে',
            },
          ],
          answer: 0,
          hint: {
            en: 'iowait is not active compute; it is idle processor time waiting on external block devices.',
            bn: 'iowait কোনো কাজের সময় নয়; এটি বাহ্যিক ডিস্ক ডিভাইসের জন্য প্রসেসরের অলস অপেক্ষার সময়।',
          },
          explanation: {
            en: 'High %iowait indicates disk I/O bottlenecks. Processes block in D-state waiting for storage, contributing to the elevated load average.',
            bn: 'উচ্চ %iowait ডিস্কের সীমাবদ্ধতা নির্দেশ করে। কাজগুলো D-স্টেটে আটকে থাকে যা সামগ্রিক লোড এভারেজ বৃদ্ধি করে।',
          },
        },
        {
          id: 'os-cap-ex-3',
          kind: 'mcq',
          question: {
            en: 'Which of the 4 Coffman conditions is broken when an engineering team mandates a strict global lock acquisition ordering hierarchy across all threads?',
            bn: 'যখন কোনো ইঞ্জিনিয়ারিং টিম সমস্ত থ্রেডের ওপর একটি কঠোর গ্লোবাল লক অনুক্রম বাধ্যতামূলক করে, তখন ৪ টি কফম্যান শর্তের কোনটি ভেঙে যায়?'
          },
          options: [
            {
              en: 'Circular Wait',
              bn: 'সার্কুলার ওয়েট (Circular Wait)',
            },
            {
              en: 'Mutual Exclusion',
              bn: 'মিউচুয়াল এক্সক্লুশন (Mutual Exclusion)',
            },
            {
              en: 'Direct Memory Access',
              bn: 'ডিরেক্ট মেমোরি অ্যাক্সেস',
            },
            {
              en: 'Hardware Interrupt Generation',
              bn: 'হার্ডওয়্যার ইন্টারাপ্ট জেনারেশন',
            },
          ],
          answer: 0,
          hint: {
            en: 'If locks must always be acquired in ascending numeric order (Lock 1 before Lock 2), thread A can never wait for thread B in a circular loop.',
            bn: 'লক যদি ক্রমানুসারে (লক ১ এর পর লক ২) নিতে হয়, তবে থ্রেডগুলোর মধ্যে চক্রাকার নির্ভরতা তৈরি হতে পারে না।',
          },
          explanation: {
            en: 'Enforcing a monotonic lock order eliminates the possibility of a circular dependency graph, completely neutralizing the Circular Wait condition and preventing deadlocks.',
            bn: 'লক অর্ডারিং নিশ্চিত করে যে কোনো চক্রাকার নির্ভরতা তৈরি হবে না, যা সার্কুলার ওয়েট শর্তটি ভেঙে দিয়ে ডেডলক সম্পূর্ণ প্রতিরোধ করে।',
          },
        },
        {
          id: 'os-cap-ex-4',
          kind: 'predict',
          question: {
            en: 'What integer signal number corresponds to SIGKILL, the uncatchable POSIX signal that forces immediate process termination by the operating system kernel?',
            bn: 'কোন পূর্ণসংখ্যা সিগন্যাল নম্বরটি SIGKILL নির্দেশ করে, যা কার্নেল দ্বারা তাৎক্ষণিকভাবে প্রসেস বন্ধ করার জন্য ব্যবহৃত অপরিবর্তনযোগ্য পসিক্স সিগন্যাল?'
          },
          answer: '9',
          hint: {
            en: 'It is the famous number used in the command "kill -9 <PID>".',
            bn: 'এটি "kill -9 <PID>" কমান্ডে ব্যবহৃত সুপরিচিত সংখ্যা।',
          },
          explanation: {
            en: 'Signal 9 (SIGKILL) cannot be caught, blocked, or ignored by user code; the kernel directly deallocates the process address space.',
            bn: 'সিগন্যাল ৯ (SIGKILL) ইউজার কোড দ্বারা এড়ানো যায় না; কার্নেল সরাসরি প্রসেসটির মেমোরি খালি করে তাকে বন্ধ করে দেয়।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'Production OS Triage & Performance Knowledge Check',
      bn: 'প্রোডাকশন ওএস ট্রায়াজ এবং পারফরম্যান্স জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-cap-qz-1',
          kind: 'mcq',
          topic: 'd-state-processes',
          question: {
            en: 'Why is an operating system process stuck in uninterruptible sleep (D-state) immune to termination even when sent the kill -9 (SIGKILL) command?',
            bn: 'আন-ইন্টারাপ্টিবল স্লিপে ( D-স্টেট ) আটকে থাকা কোনো প্রসেসকে kill -9 ( SIGKILL ) কমান্ড পাঠালেও কেন তাৎক্ষণিকভাবে বন্ধ করা যায় না?'
          },
          options: [
            {
              en: 'The thread is suspended inside a kernel driver waiting for hardware I/O to complete; terminating it prematurely would leave kernel filesystem structures or device hardware corrupted',
              bn: 'থ্রেডটি কার্নেল ড্রাইভারের ভেতরে হার্ডওয়্যার আই/ও সম্পন্ন হওয়ার অপেক্ষায় থাকে; একে মাঝপথে বন্ধ করলে ফাইলসিস্টেম বা হার্ডওয়্যারের ডেটা নষ্ট হয়ে যাওয়ার ঝুঁকি থাকে',
            },
            {
              en: 'The process has purchased a commercial immunity license from the operating system vendor',
              bn: 'প্রসেসটি অপারেটিং সিস্টেম প্রস্তুতকারকের কাছ থেকে বিশেষ বাণিজ্যিক লাইসেন্স কিনে নিয়েছে',
            },
            {
              en: 'Processes in D-state run entirely in the computer monitor video memory',
              bn: 'D-স্টেটের প্রসেসগুলো সম্পূর্ণ মনিটরের ভিডিও মেমোরিতে চলে',
            },
            {
              en: 'The keyboard cable stops transmitting electrical key strokes during D-state',
              bn: 'D-স্টেট চলাকালীন কিবোর্ডের তার সংকেত পাঠানো বন্ধ করে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Signals can only be delivered when a process returns to user space or enters an interruptible wait.',
            bn: 'সিগন্যাল তখনই কার্যকর হয় যখন প্রসেস ইউজার স্পেসে ফেরে বা ইন্টারাপ্ট করার মতো অবস্থায় থাকে।',
          },
          explanation: {
            en: 'D-state protects kernel integrity. The kernel will only deliver pending signals (including SIGKILL) once the underlying hardware device driver completes the pending I/O transfer.',
            bn: 'D-স্টেট কার্নেলের অখণ্ডতা রক্ষা করে। হার্ডওয়্যার ড্রাইভার তার আই/ও শেষ করে ফিরলেই কেবল কার্নেল মুলতুবি থাকা SIGKILL কার্যকর করে।',
          },
        },
        {
          id: 'os-cap-qz-2',
          kind: 'mcq',
          topic: 'ebpf-vs-strace',
          question: {
            en: 'Why do modern production engineering teams use eBPF tools (like bpftrace) instead of strace when debugging high-throughput latency in production environments?',
            bn: 'উচ্চ-গতির প্রোডাকশন সার্ভারে লেটেন্সি নির্ণয়ের জন্য আধুনিক ইঞ্জিনিয়ারিং টিমগুলো strace-এর পরিবর্তে কেন eBPF টুলস (যেমন bpftrace) ব্যবহার করে?'
          },
          options: [
            {
              en: 'strace uses ptrace which halts the target process on every single system call, slowing throughput by 10x to 100x, whereas eBPF executes in-kernel bytecode with negligible nanosecond overhead',
              bn: 'strace এর ptrace প্রতিটি সিস্টেম কলে টাস্ক থামিয়ে গতি ১০ থেকে ১০০ গুণ কমিয়ে দেয়, যেখানে eBPF ন্যানোসেকেন্ড ওভারহেডে সরাসরি কার্নেলের ভেতর কোড চালায়',
            },
            {
              en: 'eBPF automatically replaces physical CPU chips with quantum processors',
              bn: 'eBPF স্বয়ংক্রিয়ভাবে ফিজিক্যাল প্রসেসরকে কোয়ান্টাম প্রসেসরে রূপান্তর করে',
            },
            {
              en: 'strace can only run when the server is physically unplugged from electricity',
              bn: 'বিদ্যুৎ সংযোগ বিচ্ছিন্ন থাকলেই কেবল strace চালানো সম্ভব হয়',
            },
            {
              en: 'bpftrace deletes all system log files to free up SSD space',
              bn: 'bpftrace জায়গা খালি করতে সব সিস্টেম লগ ফাইল মুছে ফেলে',
            },
          ],
          answer: 0,
          hint: {
            en: 'ptrace forces context switches for every syscall entry and exit; eBPF aggregates stats in kernel memory.',
            bn: 'ptrace প্রতিটি সিস্টেম কলের শুরু ও শেষে থামিয়ে দেয়; eBPF কার্নেলের ভেতর সরাসরি তথ্য সংগ্রহ করে।',
          },
          explanation: {
            en: 'strace incurs devastating context switch penalties via ptrace. eBPF hooks into tracepoints directly inside kernel space without halting user threads, making it safe for production.',
            bn: 'strace প্রোডাকশনে মারাত্মক ধীরগতি সৃষ্টি করে। অন্যদিকে eBPF ইউজার থ্রেড না থামিয়েই কার্নেলে তথ্য সংগ্রহ করে, তাই এটি প্রোডাকশনে সম্পূর্ণ নিরাপদ।',
          },
        },
        {
          id: 'os-cap-qz-3',
          kind: 'mcq',
          topic: 'sysctl-runtime-tuning',
          question: {
            en: 'How does the sysctl utility dynamically modify operating system kernel parameters without requiring a server reboot?',
            bn: 'sysctl ইউটিলিটি কীভাবে সার্ভার রিবুট না করেই সরাসরি অপারেটিং সিস্টেম কার্নেলের প্যারামিটার পরিবর্তন করে?'
          },
          options: [
            {
              en: 'It reads and writes runtime configuration values exposed directly by the kernel through the virtual /proc/sys filesystem',
              bn: 'এটি ভার্চুয়াল /proc/sys ফাইলসিস্টেমের মাধ্যমে কার্নেলের সাথে যুক্ত প্যারামিটারগুলোতে সরাসরি মান পড়ে এবং লিখে তা প্রয়োগ করে',
            },
            {
              en: 'It re-flashes the motherboard BIOS firmware chip on every command',
              bn: 'এটি প্রতিটি কমান্ডের জন্য মাদারবোর্ডের বায়োস ফার্মওয়্যার চিপ পুনরায় লেখে',
            },
            {
              en: 'It sends text messages to the operating system developers mobile phone',
              bn: 'এটি অপারেটিং সিস্টেম নির্মাতার মোবাইল ফোনে এসএমএস পাঠায়',
            },
            {
              en: 'It accelerates the physical rotation speed of cooling fans by 200%',
              bn: 'এটি ফ্যানের ঘূর্ণন গতি ২০০% বৃদ্ধি করে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'The /proc filesystem is not a physical disk; it is an in-memory kernel parameter window.',
            bn: '/proc কোনো বাস্তব ডিস্ক নয়; এটি কার্নেল মেমোরির একটি পর্যবেক্ষণ উইন্ডো।',
          },
          explanation: {
            en: 'The /proc/sys directory exposes live kernel variables. sysctl modifies these memory variables on the fly, immediately altering TCP backlogs, VM swappiness, and file limits.',
            bn: '/proc/sys কার্নেলের চলকগুলোকে উন্মুক্ত রাখে। sysctl সরাসরি মেমোরিতে সেগুলো পরিবর্তন করে সাথে সাথে কার্নেলের আচরণ বদলে দেয়।',
          },
        },
        {
          id: 'os-cap-qz-4',
          kind: 'mcq',
          topic: 'oom-killer-selection',
          question: {
            en: 'When a Linux operating system runs out of physical RAM and swap space, how does the Out-Of-Memory (OOM) killer select which process to sacrifice?',
            bn: 'যখন লিনাক্স অপারেটিং সিস্টেমে ফিজিক্যাল র‍্যাম ও সোয়াপ স্পেস শেষ হয়ে যায়, তখন আউট-অব-মেমোরি (OOM) কিলার কোন প্রসেসটিকে বন্ধ করতে নির্বাচন করে?'
          },
          options: [
            {
              en: 'It computes an oom_score for each process based on percentage of RAM consumed combined with oom_score_adj, sacrificing the highest-scoring rogue process to save the OS',
              bn: 'এটি র‍্যাম ব্যবহারের শতকরা হার ও oom_score_adj মিলিয়ে একটি oom_score হিসাব করে এবং সর্বোচ্চ স্কোরের ক্ষতিকর প্রসেসটি বন্ধ করে ওএস বাঁচায়',
            },
            {
              en: 'It picks a process completely at random by rolling physical dice inside the CPU',
              bn: 'এটি প্রসেসরের ভেতরে পাশা রোল করে সম্পূর্ণ এলোমেলোভাবে একটি প্রসেস বেছে নেয়',
            },
            {
              en: 'It shuts down the computer monitor and turns off room lighting',
              bn: 'এটি মনিটর বন্ধ করে ঘরের লাইট নিভিয়ে দেয়',
            },
            {
              en: 'It deletes the oldest user account created on the machine',
              bn: 'এটি মেশিনে তৈরি সবচেয়ে পুরনো ব্যবহারকারী অ্যাকাউন্টটি মুছে ফেলে',
            },
          ],
          answer: 0,
          hint: {
            en: 'The kernel aims to free the maximum amount of memory while minimizing disruption to critical services.',
            bn: 'কার্নেলের লক্ষ্য থাকে সিস্টেমের ক্ষতি না করে সবচেয়ে বেশি মেমোরি খালি করা।',
          },
          explanation: {
            en: 'The OOM killer evaluates /proc/<pid>/oom_score. The process consuming the largest fraction of system memory with the highest penalty score is terminated via SIGKILL.',
            bn: 'ওওএম কিলার oom_score যাচাই করে। যে প্রসেসটি সর্বাধিক মেমোরি নষ্ট করছে এবং যার স্কোর বেশি, কার্নেল তাকেই SIGKILL দিয়ে বন্ধ করে দেয়।',
          },
        },
    ],
  },
};
