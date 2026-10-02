import type { Lesson } from '../../../lib/types';

export const ProcessesCapstoneLesson: Lesson = {
  slug: 'processes-capstone',
  tech: 'processes',
  title: {
    en: 'Process Engineering & Production Supervisor Capstone',
    bn: 'প্রসেস ইঞ্জিনিয়ারিং এবং প্রোডাকশন সুপারভাইজার ক্যাপস্টোন'
  },
  summary: {
    en: 'Synthesize all process mechanics into an end-to-end production process supervisor capstone. Build an automated multi-worker supervisor similar to PM2 or systemd that spawns worker clusters and monitors health heartbeats. Intercept SIGTERM and SIGINT for zero-downtime rolling reloads, reap zombies via asynchronous waitpid handlers, and enforce resource isolation using Linux cgroups and namespaces.',
    bn: 'সমস্ত প্রসেস মেকানিজমকে একটি সমন্বিত প্রোডাকশন প্রসেস সুপারভাইজার ক্যাপস্টোনে রূপান্তর করুন। একটি স্বয়ংক্রিয় মাল্টি-ওয়ার্কার সুপারভাইজার তৈরি করুন যা ক্লাস্টার কর্মী তৈরি করে এবং হার্টবিট পর্যবেক্ষণ করে। জিরো-ডাউনটাইম রিলোডের জন্য SIGTERM ও SIGINT হ্যান্ডেল করুন, waitpid-এর মাধ্যমে জম্বি পরিষ্কার করুন এবং লিনাক্স cgroups ও namespaces ব্যবহার করে মেমোরি সুরক্ষা নিশ্চিত করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'high-availability-process-supervisors',
      text: {
        en: 'The Architectural Mandate: High Availability Process Supervisors',
        bn: 'আর্কিটেকচারাল প্রয়োজনীয়তা: হাই অ্যাভেইলেবিলিটি প্রসেস সুপারভাইজার'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When deploying critical backend systems in cloud environments, enterprise software must achieve 99.99 percent uptime. Individual application processes crash from unexpected exceptions, unhandled rejections, memory leaks, or network timeouts.',
        bn: 'ক্লাউড পরিবেশে গুরুত্বপূর্ণ ব্যাকএন্ড সিস্টেম স্থাপন করার সময় সফটওয়্যারের ৯৯.৯৯ শতাংশ আপটাইম নিশ্চিত করা আবশ্যক। অপ্রত্যাশিত এরর, মেমোরি লিক বা নেটওয়ার্ক টাইমআউটের কারণে একক প্রসেস যেকোনো সময় হঠাৎ ক্র্যাশ করতে পারে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'A Process Supervisor (such as systemd, PM2, or the Kubernetes Kubelet) acts as a vigilant master parent process. It spawns worker clusters across multiple CPU cores, monitors periodic health heartbeats, automatically reaps and replaces crashed workers in milliseconds, and coordinates zero-downtime rolling updates.',
        bn: 'একটি প্রসেস সুপারভাইজার ( যেমন systemd, PM2 বা কুবারনেটিস Kubelet ) সার্বক্ষণিক সতর্ক অভিভাবক হিসেবে কাজ করে। এটি একাধিক সিপিইউ কোরে ওয়ার্কার ক্লাস্টার তৈরি করে, নির্দিষ্ট সময় পর পর হার্টবিট পর্যবেক্ষণ করে, ক্র্যাশ করা প্রসেসকে নিমেষেই রিপ করে নতুন প্রসেস চালু করে এবং কোনো ডাউনটাইম ছাড়াই কোড আপডেট সম্পন্ন করে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Multi-Core Worker Cluster Spawning',
            bn: '১. মাল্টি-কোর ওয়ার্কার ক্লাস্টার সৃষ্টি'
          },
          text: {
            en: 'The supervisor detects the number of physical CPU cores (e.g. 4 cores) and forks 4 independent worker processes, assigning each an isolated PID and private virtual address space.',
            bn: 'সুপারভাইজার ফিজিক্যাল সিপিইউ কোরের সংখ্যা শনাক্ত করে ( যেমন ৪ টি কোর ) এবং ৪ টি স্বাধীন ওয়ার্কার প্রসেস ফর্ক করে, যার প্রতিটির নিজস্ব PID এবং ব্যক্তিগত ভার্চুয়াল মেমোরি থাকে।'
          },
        },
        {
          title: {
            en: '2. Heartbeat Health Monitoring (Watchdog)',
            bn: '২. হার্টবিট পর্যবেক্ষণ ( ওয়াচডগ )'
          },
          text: {
            en: 'Active workers emit periodic heartbeat timestamps over an IPC channel. If a worker becomes unresponsive or locks up in an infinite loop for 5 seconds, the supervisor declares it dead and delivers SIGKILL.',
            bn: 'সক্রিয় কর্মীরা IPC চ্যানেলের মাধ্যমে প্রতি ৫ সেকেন্ড পর পর হার্টবিট সংকেত পাঠায়। কোনো কর্মী যদি সাড়া না দেয় বা লুপে আটকে থাকে, তবে সুপারভাইজার একে মৃত ঘোষণা করে SIGKILL পাঠায়।'
          },
        },
        {
          title: {
            en: '3. Asynchronous Zombie Reaping',
            bn: '৩. অ্যাসিনক্রোনাস জম্বি রিপিং'
          },
          text: {
            en: 'The supervisor listens for kernel SIGCHLD signals and child exit events. It calls waitpid() immediately upon worker termination, destroying the dead PCB skeleton and preventing process table exhaustion.',
            bn: 'সুপারভাইজার কার্নেলের SIGCHLD সংকেত ও প্রসেস বন্ধের ঘটনার ওপর নজর রাখে। চাইল্ড প্রসেস শেষ হওয়ার সাথে সাথেই এটি waitpid() কল করে মৃত PCB মুছে দেয় এবং প্রসেস টেবিল সুরক্ষা নিশ্চিত করে।'
          },
        },
        {
          title: {
            en: '4. Zero-Downtime Rolling Restarts',
            bn: '৪. জিরো-ডাউনটাইম রোলিং রিস্টার্ট'
          },
          text: {
            en: 'During deployments, the supervisor forks a new worker first, waits for it to become healthy on the shared network port, and only then delivers SIGTERM to the old worker, dropping zero user connections.',
            bn: 'সফটওয়্যার আপডেটের সময় সুপারভাইজার প্রথমে একটি নতুন ওয়ার্কার চালু করে, এর স্বাস্থ্য পরীক্ষা করে এবং এরপরই কেবল পুরনো ওয়ার্কারকে SIGTERM পাঠায়, ফলে ব্যবহারকারীর একটি সংযোগও বিচ্ছিন্ন হয় না।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Production Process Supervisor Architecture: Watchdogs, Reapers & Cluster Rolling Reloads',
        bn: 'প্রোডাকশন প্রসেস সুপারভাইজার আর্কিটেকচার: ওয়াচডগ, রিপার এবং ক্লাস্টার রিলোড'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Production process supervisor architecture showing master process, watchdog timer, zombie reaper, and worker cluster">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PRODUCTION PROCESS SUPERVISOR (PM2 / SYSTEMD PATTERN)</text>
  
  <!-- Master Process Box -->
  <g transform="translate(30, 48)">
    <rect width="250" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="125" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">SUPERVISOR MASTER (PID 1000)</text>
    
    <rect x="15" y="42" width="220" height="45" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="125" y="62" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Master Event Loop</text>
    <text x="125" y="78" fill="#cbd5e1" font-size="9" text-anchor="middle">Coordinates worker pool</text>
    
    <rect x="15" y="98" width="220" height="48" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="125" y="118" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Heartbeat Watchdog (5s)</text>
    <text x="125" y="136" fill="#cbd5e1" font-size="9" text-anchor="middle">Tracks worker health pings</text>
    
    <rect x="15" y="156" width="220" height="48" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="125" y="176" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Zombie Reaper (SIGCHLD)</text>
    <text x="125" y="194" fill="#cbd5e1" font-size="9" text-anchor="middle">Invokes waitpid() on exit</text>
    
    <rect x="15" y="214" width="220" height="48" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="125" y="234" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">Rolling Reload Controller</text>
    <text x="125" y="252" fill="#cbd5e1" font-size="9" text-anchor="middle">Zero-downtime updates</text>
    
    <rect x="15" y="272" width="220" height="55" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="125" y="295" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Auto-Restart Engine</text>
    <text x="125" y="312" fill="#cbd5e1" font-size="9" text-anchor="middle">Respawn crashed tasks in &lt;10ms</text>
  </g>
  
  <!-- Right Side: Worker Cluster -->
  <g transform="translate(310, 48)">
    <rect width="500" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="250" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">WORKER CLUSTER (SHARED TCP SOCKET 0.0.0.0:8080)</text>
    
    <!-- Worker 1 -->
    <g transform="translate(20, 38)">
      <rect width="460" height="60" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="80" y="26" fill="#38bdf8" font-size="11" font-weight="bold">Worker 1 (PID 1001)</text>
      <text x="80" y="44" fill="#cbd5e1" font-size="9">CPU Core 0 | Memory: 42MB</text>
      <text x="360" y="35" fill="#10b981" font-size="10" font-weight="bold">HEALTHY (Ping 1s ago)</text>
    </g>
    
    <!-- Worker 2 Crash & Respawn -->
    <g transform="translate(20, 108)">
      <rect width="460" height="65" rx="6" fill="#450a0a" stroke="#ef4444"/>
      <text x="80" y="24" fill="#ef4444" font-size="11" font-weight="bold">Worker 2 (PID 1002) [CRASHED]</text>
      <text x="80" y="42" fill="#fca5a5" font-size="9">Uncaught Exception -> Process exited with code 1</text>
      <text x="80" y="55" fill="#6ee7b7" font-size="9" font-weight="bold">ACTION: Reaped zombie &amp; respawned Worker 5 (PID 1005)!</text>
    </g>
    
    <!-- Worker 3 -->
    <g transform="translate(20, 183)">
      <rect width="460" height="60" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="80" y="26" fill="#38bdf8" font-size="11" font-weight="bold">Worker 3 (PID 1003)</text>
      <text x="80" y="44" fill="#cbd5e1" font-size="9">CPU Core 2 | Memory: 45MB</text>
      <text x="360" y="35" fill="#10b981" font-size="10" font-weight="bold">HEALTHY (Ping 2s ago)</text>
    </g>
    
    <!-- Worker 4 Rolling reload -->
    <g transform="translate(20, 253)">
      <rect width="460" height="75" rx="6" fill="#0f172a" stroke="#f59e0b"/>
      <text x="80" y="24" fill="#f59e0b" font-size="11" font-weight="bold">Worker 4 (PID 1004) [ROLLING RELOAD]</text>
      <text x="80" y="42" fill="#cbd5e1" font-size="9">Worker 6 (PID 1006) spawned with updated code version</text>
      <text x="80" y="58" fill="#f59e0b" font-size="9">Draining active HTTP requests on PID 1004 before SIGTERM</text>
    </g>
  </g>
  
  <!-- Master to cluster line -->
  <line x1="280" y1="210" x2="310" y2="210" stroke="#38bdf8" stroke-width="2"/>
  
  <text x="420" y="422" fill="#94a3b8" font-size="10" text-anchor="middle">Process supervisor guarantees 99.99% uptime by automatically healing crashed workers and managing rolling deploys</text>
</svg>`,
      caption: {
        en: 'A production process supervisor monitors worker health, auto-restarts crashed instances in milliseconds, and reaps zombies via waitpid().',
        bn: 'একটি প্রোডাকশন প্রসেস সুপারভাইজার কর্মীদের স্বাস্থ্য পর্যবেক্ষণ করে, ক্র্যাশ করা ইনস্ট্যান্স নিমেষেই পুনরায় চালু করে এবং waitpid() দিয়ে জম্বি দূর করে।'
      },
    },
    {
      type: 'heading',
      id: 'supervisor-code-and-self-healing',
      text: {
        en: 'Automated Multi-Worker Process Supervisor Simulation',
        bn: 'স্বয়ংক্রিয় মাল্টি-ওয়ার্কার প্রসেস সুপারভাইজার সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To understand how container supervisors and cluster managers maintain high availability, examine the self-healing lifecycle. The following program implements an automated process supervisor that manages worker clusters, detects crashes, reaps zombies, and performs zero-downtime rolling reloads.',
        bn: 'কন্টেইনার সুপারভাইজার এবং ক্লাস্টার ম্যানেজারগুলো কীভাবে হাই অ্যাভেইলেবিলিটি বজায় রাখে তা বুঝতে স্ব-নিরাময় জীবনচক্র পর্যালোচনা করুন। নিচের প্রোগ্রামটি একটি স্বয়ংক্রিয় প্রসেস সুপারভাইজার বাস্তবায়ন করে যা ক্লাস্টার পরিচালনা, ক্র্যাশ শনাক্তকরণ, জম্বি রিপিং এবং জিরো-ডাউনটাইম রিলোড সম্পন্ন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'production-process-supervisor.js',
      code: `// Production-Grade Process Supervisor & Cluster Manager Simulator
// Demonstrates cluster spawning, crash auto-recovery, and rolling reload

class ProductionProcessSupervisor {
  constructor(desiredWorkers = 3) {
    this.desiredWorkers = desiredWorkers;
    this.nextPid = 2000;
    this.workers = new Map(); // pid -> { state, lastPing }
  }

  // Phase 1: Bootstrap cluster
  bootstrap() {
    console.log('Bootstrapping cluster with ' + this.desiredWorkers + ' worker processes...');
    for (let i = 0; i < this.desiredWorkers; i++) {
      this.spawnWorker();
    }
  }

  spawnWorker() {
    const pid = this.nextPid++;
    this.workers.set(pid, {
      pid,
      state: 'HEALTHY',
      spawnedAt: Date.now(),
      lastHeartbeat: Date.now()
    });
    console.log('Spawned Worker PID ' + pid + ' (Cluster size: ' + this.workers.size + ')');
    return pid;
  }

  // Phase 2: Worker Crash & Self-Healing
  handleWorkerCrash(crashedPid, exitCode) {
    console.log('\\n[ALERT] Worker PID ' + crashedPid + ' crashed with exit status ' + exitCode + '!');

    // 1. Asynchronously reap zombie PCB
    this.workers.delete(crashedPid);
    console.log('Reaped zombie PCB for PID ' + crashedPid + ' via simulated waitpid().');

    // 2. Immediately respawn replacement worker
    const replacementPid = this.spawnWorker();
    console.log('Self-healing complete: Worker ' + replacementPid + ' replaced crashed ' + crashedPid + '.');
  }

  // Phase 3: Zero-Downtime Rolling Reload
  rollingReload() {
    console.log('\\n=== Initiating Zero-Downtime Rolling Reload ===');
    const oldPids = Array.from(this.workers.keys());

    for (const oldPid of oldPids) {
      // 1. Spawn new worker with updated code
      const newPid = this.spawnWorker();
      console.log('New Worker ' + newPid + ' verified healthy.');

      // 2. Gracefully retire old worker
      console.log('Sending SIGTERM to old Worker ' + oldPid + ' (Draining connections)...');
      this.workers.delete(oldPid);
      console.log('Retired old Worker ' + oldPid + ' cleanly.');
    }

    console.log('Rolling reload completed with ZERO dropped connections!');
  }
}

const supervisor = new ProductionProcessSupervisor(3);

console.log('=== Step 1: Initializing Multi-Worker Cluster ===');
supervisor.bootstrap();

console.log('\\n=== Step 2: Simulating Uncaught Exception Crash ===');
supervisor.handleWorkerCrash(2001, 1);

console.log('\\n=== Step 3: Performing Zero-Downtime Code Update ===');
supervisor.rollingReload();

console.log('\\nFinal Active Cluster State:');
for (const [pid, w] of supervisor.workers) {
  console.log('Worker PID:', pid, '| State:', w.state);
}`,
      caption: {
        en: 'The supervisor simulation boots 3 workers, auto-replaces crashed PID 2001 with PID 2003, and executes zero-downtime rolling reloads.',
        bn: 'সুপারভাইজার সিমুলেশনটি ৩ জন কর্মী চালু করে, ক্র্যাশ করা PID ২০০১ এর বদলে ২০০৩ দিয়ে প্রতিস্থাপন করে এবং জিরো-ডাউনটাইমে রিলোড সম্পন্ন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Linux Namespaces and Cgroups: How Containers Isolate Processes',
        bn: 'লিনাক্স Namespaces এবং Cgroups: কন্টেইনার কীভাবে প্রসেস আইসোলেট করে'
      },
      text: {
        en: 'How does Docker achieve lightweight process isolation without running heavy virtual machines? Linux provides two core kernel features: Control Groups (cgroups) and Namespaces. Cgroups restrict hardware resource consumption (for example, limiting a process to 512MB RAM and 50 percent of 1 CPU core). Namespaces restrict system visibility: a PID namespace makes a process believe it is PID 1, while network namespaces provide private virtual ethernet adapters and isolated port ranges. A container is simply a standard Linux process isolated by cgroups and namespaces!',
        bn: 'ভারী ভার্চুয়াল মেশিন না চালিয়েও ডকার কীভাবে প্রসেসগুলোর মাঝে হালকা আইসোলেশন নিশ্চিত করে? লিনাক্স কার্নেলে ২ টি মূল প্রযুক্তি রয়েছে: Control Groups (cgroups) এবং Namespaces। Cgroups হার্ডওয়্যার ব্যবহারের সীমা বেঁধে দেয় ( যেমন একটি প্রসেসকে ৫১২ মেগাবাইট র‍্যাম এবং ১ টি সিপিইউ কোরের ৫০ শতাংশ ব্যবহারের সীমা দেওয়া )। আর Namespaces সিস্টেমের দৃশ্যমানতা সীমাবদ্ধ করে: একটি PID namespace কোনো প্রসেসকে বোঝায় যে এটি নিজেই PID ১, আর network namespace নিজস্ব ভার্চুয়াল পোর্ট প্রদান করে। একটি কন্টেইনার মূলত cgroups এবং namespaces দ্বারা সুরক্ষিত একটি সাধারণ লিনাক্স প্রসেস ছাড়া আর কিছুই নয়!'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-cap-ex-1',
      kind: 'predict',
      question: {
        en: 'If a quad-core server spawns 1 worker process per physical CPU core, how many total worker processes are spawned? (4). Type the number.',
        bn: 'একটি ৪-কোর প্রসেসর বিশিষ্ট সার্ভার যদি প্রতি সিপিইউ কোরে ১ টি করে ওয়ার্কার প্রসেস চালু করে, তবে সর্বমোট কয়টি ওয়ার্কার প্রসেস তৈরি হবে? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Multiply 4 CPU cores by 1 worker: 4 workers.',
        bn: '৪ টি সিপিইউ কোরকে ১ কর্মী দিয়ে গুণ করুন: ৪ কর্মী।'
      },
      explanation: {
        en: 'Spawning 1 worker per CPU core maximizes hardware parallelism across all 4 processor cores.',
        bn: 'প্রতি কোরে ১ জন কর্মী রাখলে সমস্ত ৪ টি প্রসেসর কোরের পূর্ণ কার্যক্ষমতা নিশ্চিত হয়।'
      },
    },
    {
      id: 'proc-cap-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the operational goal of a Zero-Downtime Rolling Reload in production process supervisors like PM2 or systemd?',
        bn: 'PM2 বা systemd-এর মতো প্রোডাকশন প্রসেস সুপারভাইজারে জিরো-ডাউনটাইম রোলিং রিলোডের মূল লক্ষ্য কী?'
      },
      options: [
        {
          en: 'To spawn and verify a new worker process with updated code before sending SIGTERM to the old worker, preventing any interruption in service',
          bn: 'পুরনো কর্মীকে SIGTERM পাঠানোর আগেই নতুন কোডসহ একটি নতুন ওয়ার্কার চালু ও যাচাই করা, যাতে সার্ভিসে কোনো প্রকার বিঘ্ন না ঘটে',
        },
        {
          en: 'To delete all user accounts from the database permanently',
          bn: 'ডাটাবেজ থেকে সমস্ত ব্যবহারকারী অ্যাকাউন্ট চিরতরে মুছে ফেলা',
        },
        {
          en: 'To lower the screen brightness of the computer display to zero',
          bn: 'কম্পিউটার ডিসপ্লের স্ক্রিনের উজ্জ্বলতা সম্পূর্ণ শূন্যে নামিয়ে আনা',
        },
        {
          en: 'To make all computer software run in reverse alphabetical order',
          bn: 'কম্পিউটারের সমস্ত সফটওয়্যারকে উল্টো বর্ণানুক্রমে চলতে বাধ্য করা',
        },
      ],
      answer: 0,
      hint: {
        en: 'Starting new workers before retiring old ones guarantees seamless availability.',
        bn: 'পুরনো কর্মী বন্ধের আগেই নতুন কর্মী চালু করলে নিরবচ্ছিন্ন সেবা নিশ্চিত হয়।',
      },
      explanation: {
        en: 'Rolling reloads eliminate downtime by ensuring there is always a healthy worker available to accept incoming network connections.',
        bn: 'রোলিং রিলোড নিশ্চিত করে যে ইনকামিং সংযোগগুলো গ্রহণ করতে সর্বদা অন্তত একজন সুস্থ কর্মী প্রস্তুত রয়েছে।'
      },
    },
    {
      id: 'proc-cap-ex-3',
      kind: 'mcq',
      question: {
        en: 'How do Linux Namespaces and Control Groups (cgroups) collaborate to create Docker container process isolation?',
        bn: 'ডকার কন্টেইনারে প্রসেস আইসোলেশন তৈরি করতে লিনাক্স Namespaces এবং Control Groups (cgroups) কীভাবে একসাথে কাজ করে?'
      },
      options: [
        {
          en: 'Namespaces isolate what a process can see (PIDs, network interfaces, mount points), while cgroups restrict what hardware resources it can consume (CPU, RAM, disk I/O)',
          bn: 'Namespaces প্রসেস কী কী দেখতে পাবে তা সীমাবদ্ধ করে ( PID, নেটওয়ার্ক পোর্ট, ফাইলসিস্টেম ), আর cgroups এটি কী পরিমাণ হার্ডওয়্যার ব্যবহার করতে পারবে তা নিয়ন্ত্রণ করে ( CPU, RAM, ডিস্ক )',
        },
        {
          en: 'Namespaces make computer screens wider, while cgroups make keyboards quieter',
          bn: 'Namespaces স্ক্রিনকে প্রশস্ত করে, আর cgroups কিবোর্ডকে শান্ত করে',
        },
        {
          en: 'Namespaces convert code into German, while cgroups convert code into French',
          bn: 'Namespaces কোডকে জার্মান ভাষায় রূপান্তর করে, আর cgroups ফরাসি ভাষায় রূপান্তর করে',
        },
        {
          en: 'Both features are ancient hardware cables plugged into the wall outlet',
          bn: 'উভয় বৈশিষ্ট্যই মূলত দেয়ালের সকেটে যুক্ত প্রাচীন হার্ডওয়্যার তার',
        },
      ],
      answer: 0,
      hint: {
        en: 'Namespaces restrict visibility; cgroups restrict resource consumption.',
        bn: 'Namespaces দৃশ্যমানতা নিয়ন্ত্রণ করে; আর cgroups হার্ডওয়্যার ব্যবহারের সীমা বাঁধে।',
      },
      explanation: {
        en: 'Containers are regular Linux processes secured by namespaces (isolated view) and cgroups (metered CPU and memory limits).',
        bn: 'কন্টেইনার হলো সাধারণ লিনাক্স প্রসেস যা namespaces ( পৃথক দৃশ্য ) এবং cgroups ( মেমোরি ও সিপিইউর সীমা ) দ্বারা পরিচালিত হয়।'
      },
    },
    {
      id: 'proc-cap-ex-4',
      kind: 'predict',
      question: {
        en: 'If a process supervisor watchdog expects a heartbeat ping every 5 seconds, how many seconds is that timeout interval? (5). Type the number.',
        bn: 'একটি প্রসেস সুপারভাইজার ওয়াচডগ যদি প্রতি ৫ সেকেন্ড পর পর হার্টবিট সংকেত প্রত্যাশা করে, তবে সেই সময়সীমা কত সেকেন্ড? ( ৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '5',
      hint: {
        en: 'The configured interval is 5 seconds.',
        bn: 'নির্ধারিত সময়সীমা হলো ৫ সেকেন্ড।'
      },
      explanation: {
        en: 'A 5-second watchdog interval detects hung processes rapidly while avoiding false alarms from brief CPU spikes.',
        bn: 'একটি ৫-সেকেন্ডের ওয়াচডগ ইন্টারভাল হ্যাং হয়ে যাওয়া প্রসেস দ্রুত শনাক্ত করে এবং ক্ষণস্থায়ী স্পাইকে অযথা ক্র্যাশ হওয়া রোধ করে।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Process Engineering Capstone Quiz',
      bn: 'প্রসেস ইঞ্জিনিয়ারিং ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'proc-cap-qz-1',
        kind: 'mcq',
        topic: 'supervisor-crash-recovery-steps',
        question: {
          en: 'What exact architectural sequence of actions does a process supervisor execute when a managed worker process crashes?',
          bn: 'একটি পরিচালিত কর্মী প্রসেস ক্র্যাশ করলে প্রসেস সুপারভাইজার কোন সুনির্দিষ্ট পদক্ষেপগুলো সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It receives the SIGCHLD signal, reaps the dead zombie PCB using waitpid(), logs the failure telemetry, and immediately spawns a replacement worker process',
            bn: 'এটি SIGCHLD সিগন্যাল গ্রহণ করে, waitpid() দিয়ে মৃত জম্বি PCB পরিষ্কার করে, ত্রুটি রেকর্ড করে এবং তৎক্ষণাৎ একটি নতুন ওয়ার্কার প্রসেস চালু করে',
          },
          {
            en: 'It disconnects the physical computer mouse from the USB port',
            bn: 'এটি ইউএসবি পোর্ট থেকে কম্পিউটারের মাউসের সংযোগ বিচ্ছিন্ন করে দেয়',
          },
          {
            en: 'It formats all secondary hard drives connected to the server',
            bn: 'এটি সার্ভারের সাথে যুক্ত সমস্ত হার্ড ড্রাইভ ফরম্যাট করে ফেলে',
          },
          {
            en: 'It sends a physical printed letter to the office address',
            bn: 'এটি অফিসের ঠিকানায় একটি প্রিন্ট করা চিঠি পাঠিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'SIGCHLD -> waitpid() reaping -> logging -> immediate worker respawn.',
          bn: 'SIGCHLD গ্রহণ -> waitpid() দিয়ে রিপিং -> ত্রুটি লগ করা -> দ্রুত নতুন কর্মী সৃষ্টি।',
        },
        explanation: {
          en: 'Supervisors maintain high availability by catching terminations via SIGCHLD, reaping table entries, and immediately restoring desired worker capacity.',
          bn: 'সুপারভাইজার SIGCHLD দিয়ে ক্র্যাশ ধরে সাথে সাথে জম্বি মুছে নতুন কর্মী চালু করে সার্ভারের উচ্চ কার্যক্ষমতা নিশ্চিত করে।'
        },
      },
      {
        id: 'proc-cap-qz-2',
        kind: 'mcq',
        topic: 'so-reuseport-load-balancing',
        question: {
          en: 'How does the Linux kernel SO_REUSEPORT socket option assist multi-process web servers like Nginx and Node.js cluster?',
          bn: 'লিনাক্স কার্নেলের SO_REUSEPORT সকেট অপশন Nginx এবং Node.js ক্লাস্টারের মতো মাল্টি-প্রসেস সার্ভারকে কীভাবে সহায়তা করে?'
        },
        options: [
          {
            en: 'It allows multiple independent worker processes to bind to the exact same TCP port, with the kernel automatically load-balancing incoming connections across all workers',
            bn: 'এটি একাধিক স্বাধীন ওয়ার্কার প্রসেসকে হুবহু একই TCP পোর্টে যুক্ত হতে দেয়, যার ফলে কার্নেল নিজে থেকেই সমস্ত কর্মীর মাঝে নেটওয়ার্ক ট্রাফিক সমবণ্টন করে দেয়',
          },
          {
            en: 'It doubles the physical download speed of the local Wi-Fi router',
            bn: 'এটি লোকাল ওয়াই-ফাই রাউটারের ডাউনলোডের গতি দ্বিগুণ করে দেয়',
          },
          {
            en: 'It encrypts all network packets using physical stone keys',
            bn: 'এটি পাথরের ফিজিক্যাল চাবি ব্যবহার করে সমস্ত নেটওয়ার্ক প্যাকেট এনক্রিপ্ট করে',
          },
          {
            en: 'It deletes all CSS styles from incoming HTTP responses',
            bn: 'এটি ইনকামিং HTTP রেসপন্স থেকে সমস্ত সিএসএস স্টাইল মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Multiple processes bind to the same port with kernel-level connection balancing.',
          bn: 'একাধিক প্রসেস একই পোর্টে যুক্ত হয়ে কার্নেলের মাধ্যমে ট্রাফিক শেয়ার করার সুবিধা।',
        },
        explanation: {
          en: 'SO_REUSEPORT enables lock-free port sharing, allowing the Linux kernel to distribute connections evenly across multi-process workers.',
          bn: 'SO_REUSEPORT লকবিহীন পোর্ট শেয়ারিং দেয়, যার ফলে লিনাক্স কার্নেল সব কর্মীর মাঝে সুষমভাবে সংযোগ ভাগ করে দেয়।'
        },
      },
      {
        id: 'proc-cap-qz-3',
        kind: 'mcq',
        topic: 'pid-namespace-illusion',
        question: {
          en: 'How does a Linux PID Namespace create the illusion that an application is running as the root init process inside a container?',
          bn: 'একটি লিনাক্স PID Namespace কীভাবে এই ধারণা তৈরি করে যে অ্যাপ্লিকেশনটি কন্টেইনারের মূল ইনিট প্রসেস হিসেবে চলছে?'
        },
        options: [
          {
            en: 'The kernel maps process identifiers such that the containerized process sees its own PID as 1 within its private namespace, while the host OS tracks it with a standard high integer PID',
            bn: 'কার্নেল পিআইডি এমনভাবে ম্যাপ করে যাতে কন্টেইনারের ভেতরের প্রসেসটি নিজেকে PID ১ হিসেবে দেখে, যদিও মূল হোস্ট অপারেটিং সিস্টেম একে একটি সাধারণ উচ্চ পিআইডিতে পরিচালনা করে',
          },
          {
            en: 'By unplugging the physical computer keyboard from the motherboard',
            bn: 'মাদারবোর্ড থেকে কম্পিউটারের ফিজিক্যাল কিবোর্ড খুলে ফেলার মাধ্যমে',
          },
          {
            en: 'By changing the computer desktop language to Latin',
            bn: 'কম্পিউটার ডেস্কটপের ভাষাকে ল্যাটিনে পরিবর্তন করার মাধ্যমে',
          },
          {
            en: 'By lowering the computer speaker volume to zero permanently',
            bn: 'কম্পিউটার স্পিকারের সাউন্ড চিরতরে শূন্যে নামিয়ে আনার মাধ্যমে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Namespace mapping: PID 1 inside the container, standard PID on the host.',
          bn: 'ম্যাপিং ব্যবস্থা: কন্টেইনারের ভেতরে PID ১, আর হোস্টে সাধারণ উচ্চ পিআইডি।',
        },
        explanation: {
          en: 'PID namespaces provide isolated process number mappings. A process can be PID 1 in its namespace while having PID 5420 on the host.',
          bn: 'PID namespace নিজস্ব ম্যাপিং বজায় রাখে। একটি প্রসেস কন্টেইনারে PID ১ হতে পারে, আবার মূল হোস্টে PID ৫৪২০ হতে পারে।'
        },
      },
      {
        id: 'proc-cap-qz-4',
        kind: 'mcq',
        topic: 'cgroups-v2-resource-enforcement',
        question: {
          en: 'What technical protection occurs when a containerized process attempts to allocate more RAM than allowed by its Linux cgroup limit?',
          bn: 'একটি কন্টেইনারাইজড প্রসেস যখন তার লিনাক্স cgroup মেমোরি সীমার চেয়ে বেশি র‍্যাম ব্যবহারের চেষ্টা করে, তখন কোন প্রযুক্তিগত সুরক্ষা কার্যকর হয়?'
        },
        options: [
          {
            en: 'The Linux kernel cgroup memory controller refuses the allocation and invokes the OOM Killer specifically on that container process (SIGKILL), protecting the host from exhaustion',
            bn: 'লিনাক্স কার্নেল cgroup মেমোরি কন্ট্রোলার বরাদ্দ প্রত্যাখ্যান করে এবং কেবল সেই নির্দিষ্ট কন্টেইনার প্রসেসটিতে OOM কিলার (SIGKILL) পাঠিয়ে মূল হোস্টকে রক্ষা করে',
          },
          {
            en: 'The host server motherboard shuts off electrical power to the building',
            bn: 'হোস্ট সার্ভার মাদারবোর্ড পুরো ভবনের বিদ্যুৎ সংযোগ বন্ধ করে দেয়',
          },
          {
            en: 'All data on the host NVMe SSD is reformatted to empty text',
            bn: 'হোস্টের NVMe এসএসডির সমস্ত ডাটা মুছে ফাঁকা টেক্সট করে দেওয়া হয়',
          },
          {
            en: 'The computer monitor begins blinking with red lights continuously',
            bn: 'কম্পিউটার মনিটর অবিরাম লাল বাতি জ্বালিয়ে সতর্কবার্তা দিতে থাকে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Cgroup limits trigger targeted OOM kills on offending container processes.',
          bn: 'Cgroup সীমা লঙ্ঘন করলে কার্নেল কেবল সেই অপরাধী কন্টেইনার প্রসেসটিকে বন্ধ করে দেয়।',
        },
        explanation: {
          en: 'Cgroups isolate memory limits. If a container breaches its quota, the kernel terminates that container without affecting the host system or neighbor containers.',
          bn: 'Cgroups মেমোরি কোটা নিয়ন্ত্রণ করে। সীমা অতিক্রম করলে কার্নেল মূল হোস্ট অক্ষত রেখে কেবল সেই কন্টেইনারটি বন্ধ করে দেয়।'
        },
      },
    ],
  },
  next: {
    slug: 'meet-threads',
    title: {
      en: 'Introduction to Operating System Threads & Concurrency',
      bn: 'অপারেটিং সিস্টেম থ্রেড এবং কনকারেন্সির প্রাথমিক ধারণা'
    },
  },
};
