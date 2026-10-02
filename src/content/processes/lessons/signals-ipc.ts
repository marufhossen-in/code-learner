import type { Lesson } from '../../../lib/types';

export const SignalsIpcLesson: Lesson = {
  slug: 'signals-ipc',
  tech: 'processes',
  title: {
    en: 'Signals & IPC: Asynchronous Signals, Unix Domain Sockets & Anonymous Pipes',
    bn: 'সিগন্যাল এবং IPC: অ্যাসিনক্রোনাস সিগন্যাল, ইউনিক্স ডোমেন সকেট এবং অ্যানোনিমাস পাইপ'
  },
  summary: {
    en: 'Learn how isolated processes communicate and synchronize across memory boundaries. Master POSIX asynchronous signals like SIGINT, SIGTERM, and SIGKILL, and explore signal handlers. Learn Inter-Process Communication mechanisms including unidirectional Anonymous Pipes, bidirectional Unix Domain Sockets, and ultra-high-speed Shared Memory.',
    bn: 'মেমোরি সীমানা অতিক্রম করে বিচ্ছিন্ন প্রসেসগুলো কীভাবে একে অপরের সাথে যোগাযোগ ও সমন্বয় করে তা শিখুন। SIGINT, SIGTERM ও SIGKILL সহ পসিক্স অ্যাসিনক্রোনাস সিগন্যাল এবং সিগন্যাল হ্যান্ডলার আয়ত্ত করুন। একমুখী অ্যানোনিমাস পাইপ, দ্বিমুখী ইউনিক্স ডোমেন সকেট এবং সর্বোচ্চ গতির শেয়ার্ড মেমোরি সহ প্রধান ইন্টার-প্রসেস কমিউনিকেশন মাধ্যমগুলো অন্বেষণ করুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'breaking-process-isolation-ipc',
      text: {
        en: 'Bridging Process Isolation: Asynchronous Signals versus IPC Data Channels',
        bn: 'মেমোরি সীমানা অতিক্রম: অ্যাসিনক্রোনাস সিগন্যাল বনাম IPC ডাটা চ্যানেল'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build complex distributed software like microservices or browser engines, operating systems enforce strict memory barriers to prevent processes from corrupting each other. However, these distinct processes must exchange information and coordinate work continually.',
        bn: 'আপনি যখন মাইক্রোসার্ভিস বা ব্রাউজার ইঞ্জিনের মতো বিতরণকৃত সফটওয়্যার তৈরি করেন, তখন প্রসেসগুলো যেন একে অপরের ক্ষতি না করে সেজন্য অপারেটিং সিস্টেম কঠোর মেমোরি বাধা প্রয়োগ করে। তবে এই পৃথক প্রসেসগুলোকে প্রতিনিয়ত নিজেদের মাঝে তথ্য বিনিময় ও কাজের সমন্বয় করতে হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Operating systems bridge process isolation through two complementary paradigms. Asynchronous Signals act as lightweight software interrupts to notify processes of events or request termination. Inter-Process Communication (IPC) channels transfer structured binary data payloads across memory spaces.',
        bn: 'অপারেটিং সিস্টেম দুটি পরিপূরক পদ্ধতির মাধ্যমে প্রসেস আইসোলেশনের মাঝে সংযোগ স্থাপন করে। অ্যাসিনক্রোনাস সিগন্যাল ক্ষুদ্র সফটওয়্যার ইন্টারাপ্ট হিসেবে কাজ করে যা কোনো ঘটনা বা বন্ধ হওয়ার অনুরোধ জানায়। অপরদিকে, ইন্টার-প্রসেস কমিউনিকেশন (IPC) চ্যানেলগুলো মেমোরি সীমানা পেরিয়ে সরাসরি ডাটা আদান-প্রদান করতে ব্যবহৃত হয়।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. POSIX Signals (Software Interrupts)',
            bn: '১. পসিক্স সিগন্যাল ( সফটওয়্যার ইন্টারাপ্ট )'
          },
          text: {
            en: 'Signals are small asynchronous integer messages delivered by the kernel. Common signals include SIGINT (signal 2, Ctrl+C) and SIGTERM (signal 15) for graceful shutdowns. Two signals—SIGKILL (signal 9) and SIGSTOP (signal 19)—can never be caught, blocked, or ignored.',
            bn: 'সিগন্যাল হলো কার্নেল দ্বারা পাঠানো ক্ষুদ্র অ্যাসিনক্রোনাস পূর্ণসংখ্যার বার্তা। বহুল ব্যবহৃত সিগন্যালের মধ্যে রয়েছে সুন্দরভাবে প্রসেস বন্ধের জন্য SIGINT ( সিগন্যাল ২, Ctrl+C ) এবং SIGTERM ( সিগন্যাল ১৫ )। দুটি সিগন্যাল—SIGKILL ( সিগন্যাল ৯ ) এবং SIGSTOP ( সিগন্যাল ১৯ )—কখনোই কোনো কোড দ্বারা ধরা, ব্লক বা উপেক্ষা করা যায় না।'
          },
        },
        {
          title: {
            en: '2. Anonymous Pipes (FIFO Byte Streams)',
            bn: '২. অ্যানোনিমাস পাইপ ( FIFO বাইট স্ট্রিম )'
          },
          text: {
            en: 'Created using the pipe() system call, anonymous pipes provide unidirectional byte streaming between parent and child processes. Shell pipelines use pipes to chain commands directly in memory: cat access.log | grep 404 | wc -l.',
            bn: 'pipe() সিস্টেম কল দিয়ে তৈরি অ্যানোনিমাস পাইপ প্যারেন্ট ও চাইল্ড প্রসেসের মাঝে একমুখী ডাটা প্রবাহ তৈরি করে। শেল পাইপলাইন মেমোরির ভেতরেই সরাসরি একাধিক কমান্ডের সংযোগ ঘটায়: cat access.log | grep 404 | wc -l।'
          },
        },
        {
          title: {
            en: '3. Unix Domain Sockets (UDS)',
            bn: '৩. ইউনিক্স ডোমেন সকেট (UDS)'
          },
          text: {
            en: 'Unix Domain Sockets use filesystem pathnames (such as /var/run/docker.sock) for bidirectional communication. By bypassing the entire TCP/IP network protocol stack, UDS cuts latency to under 5 microseconds while supporting file descriptor passing.',
            bn: 'ইউনিক্স ডোমেন সকেট দ্বিমুখী যোগাযোগের জন্য ফাইলসিস্টেমের পাথ ব্যবহার করে ( যেমন /var/run/docker.sock )। সম্পূর্ণ TCP/IP নেটওয়ার্ক স্ট্যাক বাইপাস করায় UDS লেটেন্সিকে ৫ মাইক্রোসেকেন্ডের নিচে নামিয়ে আনে এবং ফাইল ডেসক্রিপ্টর শেয়ারিং সমর্থন করে।'
          },
        },
        {
          title: {
            en: '4. POSIX Shared Memory (shm_open)',
            bn: '৪. পসিক্স শেয়ার্ড মেমোরি (shm_open)'
          },
          text: {
            en: 'The fastest IPC mechanism in existence. Maps identical physical DRAM frames into the virtual memory spaces of two different processes, allowing direct pointer reads and writes with zero kernel system call overhead.',
            bn: 'বিশ্বের সবচেয়ে দ্রুতগতির IPC ব্যবস্থা। এটি একই ফিজিক্যাল র‍্যাম ফ্রেমকে দুটি ভিন্ন প্রসেসের ভার্চুয়াল মেমোরিতে ম্যাপ করে দেয়, যার ফলে কোনো কার্নেল সিস্টেম কল ছাড়াই সরাসরি পয়েন্টার দিয়ে ডাটা আদান-প্রদান করা সম্ভব হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'POSIX Signals Architecture & Inter-Process Communication Channels',
        bn: 'পসিক্স সিগন্যাল আর্কিটেকচার এবং ইন্টার-প্রসেস কমিউনিকেশন চ্যানেল'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="POSIX signals and inter-process communication channels diagram">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">SIGNALS &amp; INTER-PROCESS COMMUNICATION (IPC) TAXONOMY</text>
  
  <!-- Row 1: Signals Box -->
  <g transform="translate(30, 48)">
    <rect width="780" height="95" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="20" y="24" fill="#38bdf8" font-size="12" font-weight="bold">1. ASYNCHRONOUS POSIX SIGNALS (Control Flow)</text>
    <text x="490" y="24" fill="#94a3b8" font-size="10">Delivered directly into process execution thread</text>
    
    <rect x="20" y="38" width="170" height="42" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="105" y="58" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">SIGINT (Signal 2)</text>
    <text x="105" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Terminal Interrupt (Ctrl+C)</text>
    
    <rect x="205" y="38" width="170" height="42" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="290" y="58" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">SIGTERM (Signal 15)</text>
    <text x="290" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Graceful Shutdown Request</text>
    
    <rect x="390" y="38" width="170" height="42" rx="4" fill="#0f172a" stroke="#ef4444"/>
    <text x="475" y="58" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">SIGKILL (Signal 9)</text>
    <text x="475" y="72" fill="#fca5a5" font-size="9" text-anchor="middle">Instant Kill (Uncatchable)</text>
    
    <rect x="575" y="38" width="185" height="42" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="667" y="58" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">SIGCHLD (Signal 17)</text>
    <text x="667" y="72" fill="#cbd5e1" font-size="9" text-anchor="middle">Child Terminated / Needs Reap</text>
  </g>
  
  <!-- Row 2: Anonymous Pipe & Unix Domain Socket -->
  <g transform="translate(30, 155)">
    <!-- Anonymous Pipe -->
    <rect width="380" height="120" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="190" y="24" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">2. ANONYMOUS PIPE (pipe() / dup2())</text>
    
    <rect x="15" y="38" width="95" height="50" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="62" y="60" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Producer</text>
    <text x="62" y="75" fill="#cbd5e1" font-size="8" text-anchor="middle">Write FD [1]</text>
    
    <line x1="110" y1="63" x2="140" y2="63" stroke="#10b981" stroke-width="2"/>
    <polygon points="140,59 148,63 140,67" fill="#10b981"/>
    
    <rect x="150" y="38" width="80" height="50" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="190" y="58" fill="#6ee7b7" font-size="9" font-weight="bold" text-anchor="middle">Kernel FIFO</text>
    <text x="190" y="72" fill="#cbd5e1" font-size="8" text-anchor="middle">64KB Ring</text>
    
    <line x1="230" y1="63" x2="260" y2="63" stroke="#10b981" stroke-width="2"/>
    <polygon points="260,59 268,63 260,67" fill="#10b981"/>
    
    <rect x="270" y="38" width="95" height="50" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="317" y="60" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Consumer</text>
    <text x="317" y="75" fill="#cbd5e1" font-size="8" text-anchor="middle">Read FD [0]</text>
    
    <text x="190" y="105" fill="#94a3b8" font-size="8" text-anchor="middle">Unidirectional byte stream: ps aux | grep node</text>
    
    <!-- Unix Domain Socket -->
    <g transform="translate(400, 0)">
      <rect width="380" height="120" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
      <text x="190" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">3. UNIX DOMAIN SOCKET (/run/app.sock)</text>
      
      <rect x="15" y="38" width="105" height="50" rx="4" fill="#0f172a" stroke="#7e22ce"/>
      <text x="67" y="60" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Process A</text>
      <text x="67" y="75" fill="#cbd5e1" font-size="8" text-anchor="middle">Bidirectional</text>
      
      <rect x="140" y="38" width="100" height="50" rx="4" fill="#0f172a" stroke="#a855f7"/>
      <text x="190" y="58" fill="#c084fc" font-size="9" font-weight="bold" text-anchor="middle">VFS Socket</text>
      <text x="190" y="72" fill="#cbd5e1" font-size="8" text-anchor="middle">&lt; 5 µs Latency</text>
      
      <rect x="260" y="38" width="105" height="50" rx="4" fill="#0f172a" stroke="#7e22ce"/>
      <text x="312" y="60" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Process B</text>
      <text x="312" y="75" fill="#cbd5e1" font-size="8" text-anchor="middle">Bidirectional</text>
      
      <text x="190" y="105" fill="#94a3b8" font-size="8" text-anchor="middle">Bypasses TCP/IP stack completely; transfers file descriptors</text>
    </g>
  </g>
  
  <!-- Row 3: POSIX Shared Memory -->
  <g transform="translate(30, 287)">
    <rect width="780" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="20" y="24" fill="#f59e0b" font-size="12" font-weight="bold">4. POSIX SHARED MEMORY (shm_open / mmap)</text>
    <text x="560" y="24" fill="#10b981" font-size="10" font-weight="bold">FASTEST: ZERO SYSTEM CALLS AFTER MMAP</text>
    
    <g transform="translate(20, 36)">
      <rect x="0" y="0" width="210" height="55" rx="4" fill="#0f172a" stroke="#38bdf8"/>
      <text x="105" y="26" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Process 1 Virtual Space</text>
      <text x="105" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Virtual Addr: 0x55A00000</text>
      
      <rect x="270" y="0" width="200" height="55" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="370" y="26" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">Physical DRAM Frame</text>
      <text x="370" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Shared Silicon Bytes (0 ns latency)</text>
      
      <rect x="530" y="0" width="210" height="55" rx="4" fill="#0f172a" stroke="#c084fc"/>
      <text x="635" y="26" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Process 2 Virtual Space</text>
      <text x="635" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Virtual Addr: 0x7FA00000</text>
      
      <!-- Connecting lines -->
      <line x1="210" y1="28" x2="270" y2="28" stroke="#10b981" stroke-width="2"/>
      <line x1="470" y1="28" x2="530" y2="28" stroke="#10b981" stroke-width="2"/>
    </g>
  </g>
  
  <text x="420" y="425" fill="#94a3b8" font-size="10" text-anchor="middle">Signals provide asynchronous control notifications; Pipes, UDS, and Shared Memory transfer data</text>
</svg>`,
      caption: {
        en: 'Signals deliver software interrupts; Pipes and Unix Domain Sockets stream data; Shared Memory enables direct hardware RAM sharing.',
        bn: 'সিগন্যাল সফটওয়্যার ইন্টারাপ্ট পাঠায়; পাইপ ও ইউনিক্স ডোমেন সকেট ডাটা স্ট্রিম করে; আর শেয়ার্ড মেমোরি সরাসরি হার্ডওয়্যার র‍্যাম শেয়ারের সুবিধা দেয়।'
      },
    },
    {
      type: 'heading',
      id: 'signals-and-ipc-simulation-code',
      text: {
        en: 'Signal Interception & In-Memory IPC Channel Simulation',
        bn: 'সিগন্যাল ইন্টারসেপশন এবং ইন-মেমোরি IPC চ্যানেল সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In backend engineering, handling termination signals gracefully is critical to prevent database connection leaks. The following program demonstrates graceful SIGTERM and SIGINT interception and simulates a bidirectional Unix Domain Socket message channel.',
        bn: 'ব্যাকএন্ড সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ডাটাবেজ কানেকশন লিক ঠেকাতে টার্মিনেশন সিগন্যাল সঠিকভাবে হ্যান্ডেল করা অত্যন্ত গুরুত্বপূর্ণ। নিচের কোডটি SIGTERM ও SIGINT সিগন্যাল গ্রহণ এবং দ্বিমুখী ইউনিক্স ডোমেন সকেটের বার্তা আদান-প্রদান প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'ipc-signals-simulator.js',
      code: `// Deterministic POSIX Signal Handling & Unix Domain Socket IPC Simulator
// Demonstrates graceful termination and message channel streaming

class GracefulSignalHandler {
  constructor() {
    this.activeConnections = 3;
    this.isShuttingDown = false;
  }

  // Simulates handling SIGTERM or SIGINT
  handleSignal(signalName) {
    console.log('Received Signal:', signalName);
    this.isShuttingDown = true;
    console.log('Stopping new incoming connections...');

    // Drains active requests
    while (this.activeConnections > 0) {
      this.activeConnections--;
      console.log('Drained connection. Remaining active:', this.activeConnections);
    }

    console.log('Flushed database transactions. Exiting cleanly with status 0.');
    return { exitStatus: 0, state: 'GRACEFUL_SHUTDOWN_COMPLETE' };
  }
}

// 2. Simulated Unix Domain Socket IPC Channel
class UnixDomainSocketChannel {
  constructor(socketPath) {
    this.socketPath = socketPath;
    this.inbox = [];
  }

  // Fast direct memory payload delivery (bypassing TCP)
  send(senderPid, payload) {
    const envelope = {
      senderPid,
      timestamp: Date.now(),
      payload,
      protocol: 'UNIX_DOMAIN_SOCKET'
    };
    this.inbox.push(envelope);
    return envelope;
  }

  receive() {
    return this.inbox.shift() || null;
  }
}

console.log('=== Step 1: Handling Graceful SIGTERM Shutdown ===');
const service = new GracefulSignalHandler();
const shutdownResult = service.handleSignal('SIGTERM (Signal 15)');
console.log('Shutdown Status:', shutdownResult.state);

console.log('\\n=== Step 2: Inter-Process Communication via Unix Domain Socket ===');
const ipc = new UnixDomainSocketChannel('/var/run/worker.sock');
ipc.send(1042, { command: 'PROCESS_TRANSACTION', amount: 500 });
ipc.send(1042, { command: 'REFRESH_CACHE', target: 'user_tokens' });

console.log('IPC Message 1 Received:', ipc.receive());
console.log('IPC Message 2 Received:', ipc.receive());
console.log('Summary: UDS transfers messages directly through kernel memory without TCP port overhead!');`,
      caption: {
        en: 'The simulation traces graceful SIGTERM shutdown with request draining, and streams messages through a Unix Domain Socket.',
        bn: 'সিমুলেশনটি SIGTERM সিগন্যালে রিকোয়েস্ট শেষ করে সুন্দরভাবে বন্ধ হওয়া এবং ইউনিক্স ডোমেন সকেটে ডাটা পাঠানো প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why Unix Domain Sockets Outperform Localhost TCP Sockets',
        bn: 'ইউনিক্স ডোমেন সকেট কেন লোকালহোস্ট TCP সকেটের চেয়ে বেশি শক্তিশালী'
      },
      text: {
        en: 'Many engineers configure local microservices to communicate over http://127.0.0.1:3000. However, localhost TCP connections still traverse the network stack, generating TCP handshakes, packet headers, checksum calculations, and ACK frames. By switching local database and cache connections to Unix Domain Sockets (/var/run/redis.sock), you bypass the network stack completely, dropping latency from 50 microseconds down to under 5 microseconds while supporting file descriptor passing.',
        bn: 'অনেক ইঞ্জিনিয়ার লোকাল মাইক্রোসার্ভিসগুলোকে http://127.0.0.1:3000 ঠিকানায় যুক্ত করেন। তবে লোকালহোস্ট টিসিপি সংযোগেও প্যাকেট হেডার, চেকসাম ও অ্যাকনলেজমেন্টের বাড়তি হিসাব করতে হয়। ডাটাবেজ ও ক্যাশ সংযোগকে ইউনিক্স ডোমেন সকেটে ( /var/run/redis.sock ) পরিবর্তন করলে নেটওয়ার্ক স্ট্যাকের এই বাড়তি ঝামেলা দূর হয়, যা লেটেন্সিকে ৫০ মাইক্রোসেকেন্ড থেকে ৫ মাইক্রোসেকেন্ডের নিচে নামিয়ে আনে।'
      },
    },
  ],
  exercises: [
    {
      id: 'proc-sig-ex-1',
      kind: 'predict',
      question: {
        en: 'What is the integer signal number assigned to SIGKILL in Unix and POSIX operating systems? (9). Type the number.',
        bn: 'ইউনিক্স এবং পসিক্স অপারেটিং সিস্টেমে মারাত্মক SIGKILL সিগন্যালের পূর্ণসংখ্যা মান কত? ( ৯ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '9',
      hint: {
        en: 'SIGKILL is signal 9.',
        bn: 'SIGKILL হলো সিগন্যাল ৯।'
      },
      explanation: {
        en: 'SIGKILL is designated as signal 9, terminating processes immediately without catchable handlers.',
        bn: 'SIGKILL হলো সিগন্যাল ৯, যা কোনো হ্যান্ডলারের অনুমতি ছাড়াই প্রসেসকে তাৎক্ষণিক ধ্বংস করে।'
      },
    },
    {
      id: 'proc-sig-ex-2',
      kind: 'mcq',
      question: {
        en: 'Which two POSIX signals can never be intercepted, caught, blocked, or ignored by user-space code?',
        bn: 'কোন দুটি পসিক্স সিগন্যাল কখনোই কোনো ইউজার-স্পেস কোড দ্বারা ধরা, ব্লক বা উপেক্ষা করা সম্ভব নয়?'
      },
      options: [
        {
          en: 'SIGKILL (signal 9) and SIGSTOP (signal 19)',
          bn: 'SIGKILL ( সিগন্যাল ৯ ) এবং SIGSTOP ( সিগন্যাল ১৯ )',
        },
        {
          en: 'SIGINT and SIGTERM',
          bn: 'SIGINT এবং SIGTERM',
        },
        {
          en: 'SIGHUP and SIGUSR1',
          bn: 'SIGHUP এবং SIGUSR1',
        },
        {
          en: 'SIGCHLD and SIGWINCH',
          bn: 'SIGCHLD এবং SIGWINCH',
        },
      ],
      answer: 0,
      hint: {
        en: 'Signals 9 (KILL) and 19 (STOP) are directly enforced by the kernel.',
        bn: 'সিগন্যাল ৯ (KILL) এবং ১৯ (STOP) সরাসরি কার্নেল দ্বারা কার্যকর হয়।',
      },
      explanation: {
        en: 'POSIX strictly mandates that SIGKILL and SIGSTOP cannot be overridden, ensuring administrators can always stop unruly processes.',
        bn: 'পসিক্স মানদণ্ডে সিগকিল ও সিগস্টপকে অপরিবর্তনীয় রাখা হয়েছে যাতে অ্যাডমিন যেকোনো অবাধ্য প্রসেস থামাতে পারেন।'
      },
    },
    {
      id: 'proc-sig-ex-3',
      kind: 'mcq',
      question: {
        en: 'Why do Unix Domain Sockets (UDS) achieve significantly lower latency than TCP localhost connections?',
        bn: 'ইউনিক্স ডোমেন সকেট (UDS) লোকালহোস্ট TCP সংযোগের চেয়ে কেন উল্লেখযোগ্যভাবে কম লেটেন্সি দেয়?'
      },
      options: [
        {
          en: 'UDS bypasses the entire TCP/IP networking stack, avoiding packet headers, checksum verification, and ACK frames by copying directly through kernel memory',
          bn: 'UDS সম্পূর্ণ TCP/IP নেটওয়ার্ক স্ট্যাক বাইপাস করে, সরাসরি কার্নেল মেমোরির মাধ্যমে কপি করায় কোনো প্যাকেট হেডার, চেকসাম বা ACK ফ্রেমের বিলম্ব থাকে না',
        },
        {
          en: 'Because UDS only allows transmitting numbers smaller than 10',
          bn: 'কারণ UDS কেবল ১০ এর চেয়ে ছোট সংখ্যা আদান-প্রদান করতে দেয়',
        },
        {
          en: 'Because UDS requires an active satellite link to operate',
          bn: 'কারণ UDS পরিচালনার জন্য সক্রিয় স্যাটেলাইট সংযোগের প্রয়োজন হয়',
        },
        {
          en: 'Because UDS runs only when the computer is disconnected from power',
          bn: 'কারণ কম্পিউটার বিদ্যুৎ সংযোগহীন থাকলে কেবল UDS কাজ করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Bypassing TCP/IP protocol headers and checksums directly through kernel memory.',
        bn: 'সরাসরি কার্নেল মেমোরির মাধ্যমে পাঠানোয় টিসিপি হেডার ও চেকসামের বিলম্ব এড়ানো।',
      },
      explanation: {
        en: 'Unix Domain Sockets operate directly in kernel memory, eliminating TCP/IP routing and packet serialization overhead.',
        bn: 'ইউনিক্স ডোমেন সকেট সরাসরি কার্নেল মেমোরিতে চলে, যা TCP/IP এর সমস্ত বাড়তি ওভারহেড দূর করে।'
      },
    },
    {
      id: 'proc-sig-ex-4',
      kind: 'predict',
      question: {
        en: 'What is the integer signal number assigned to standard graceful termination SIGTERM in Unix systems? (15). Type the number.',
        bn: 'ইউনিক্স সিস্টেমে স্বাভাবিকভাবে প্রসেস বন্ধের অনুরোধকারী SIGTERM সিগন্যালের পূর্ণসংখ্যা মান কত? ( ১৫ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '15',
      hint: {
        en: 'SIGTERM is signal 15.',
        bn: 'SIGTERM হলো সিগন্যাল ১৫।'
      },
      explanation: {
        en: 'SIGTERM is designated as signal 15, asking the process to clean up resources before exiting.',
        bn: 'SIGTERM হলো সিগন্যাল ১৫, যা প্রসেসকে মেমোরি পরিষ্কার করে বন্ধ হওয়ার অনুরোধ জানায়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Signals & IPC Communication Quiz',
      bn: 'সিগন্যাল এবং IPC যোগাযোগ কুইজ'
    },
    questions: [
      {
        id: 'proc-sig-qz-1',
        kind: 'mcq',
        topic: 'signals-vs-ipc-difference',
        question: {
          en: 'What fundamental architectural distinction separates a POSIX Signal from an Inter-Process Communication (IPC) data channel?',
          bn: 'একটি পসিক্স সিগন্যাল এবং একটি ইন্টার-প্রসেস কমিউনিকেশন (IPC) চ্যানেলের মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'Signals are small asynchronous control notifications without data payloads, whereas IPC channels (like pipes and sockets) transfer arbitrary streams of binary data',
            bn: 'সিগন্যাল হলো কোনো ডাটা পেলোডবিহীন ক্ষুদ্র অ্যাসিনক্রোনাস নিয়ন্ত্রণমূলক সংকেত, অপরদিকে IPC চ্যানেলগুলো ( যেমন পাইপ ও সকেট ) যেকোনো বাইনারি ডাটা প্রবাহ স্থানান্তর করে',
          },
          {
            en: 'Signals travel through internet cables, while IPC channels travel through radio waves',
            bn: 'সিগন্যাল ইন্টারনেট কেবলের মাধ্যমে যায়, আর IPC চ্যানেল রেডিও তরঙ্গে চলে',
          },
          {
            en: 'Signals can only be sent by keyboard buttons, while IPC channels are sent by mice',
            bn: 'সিগন্যাল কেবল কিবোর্ডের বাটনে পাঠানো যায়, আর IPC চ্যানেল মাউস দিয়ে পাঠানো হয়',
          },
          {
            en: 'Both mechanisms are completely identical in function and structure',
            bn: 'উভয় ব্যবস্থা কাজ এবং কাঠামোর দিক থেকে সম্পূর্ণ অভিন্ন',
          },
        ],
        answer: 0,
        hint: {
          en: 'Signals notify control events; IPC channels transfer data payloads.',
          bn: 'সিগন্যাল ঘটনা জানায়; আর IPC চ্যানেল আসল ডাটা আদান-প্রদান করে।',
        },
        explanation: {
          en: 'Signals deliver asynchronous notifications (like interrupts). IPC channels provide conduits for actual data transfer between processes.',
          bn: 'সিগন্যাল অ্যাসিনক্রোনাস সতর্কতা পাঠায়। আর IPC চ্যানেল প্রসেসগুলোর মাঝে আসল তথ্য প্রবাহের মাধ্যম যোগায়।'
        },
      },
      {
        id: 'proc-sig-qz-2',
        kind: 'mcq',
        topic: 'sigterm-kubernetes-graceful',
        question: {
          en: 'Why is handling the SIGTERM signal mandatory in production microservices running in Kubernetes or Docker containers?',
          bn: 'কুবারনেটিস বা ডকার কন্টেইনারে চলা প্রোডাকশন মাইক্রোসার্ভিসে SIGTERM সিগন্যাল হ্যান্ডেল করা কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'Kubernetes sends SIGTERM prior to terminating a container; intercepting it allows the app to complete active requests, close database transactions, and disconnect cleanly before the SIGKILL timeout',
            bn: 'কন্টেইনার বন্ধ করার আগে কুবারনেটিস SIGTERM পাঠায়; এটি হ্যান্ডেল করলে অ্যাপটি রানিং রিকোয়েস্ট শেষ করতে, ডাটাবেজ সেশন বন্ধ করতে এবং সিগকিলের আগেই সুন্দরভাবে বিদায় নিতে পারে',
          },
          {
            en: 'Because unhandled SIGTERM causes the physical server to melt',
            bn: 'কারণ SIGTERM হ্যান্ডেল না করলে ফিজিক্যাল সার্ভার গলে যায়',
          },
          {
            en: 'To make the Kubernetes cluster display animations on the screen',
            bn: 'কুবারনেটিস ক্লাস্টারে স্ক্রিনে অ্যানিমেশন দেখানোর উদ্দেশ্যে',
          },
          {
            en: 'Because SIGTERM deletes all source code files if ignored',
            bn: 'কারণ উপেক্ষা করলে SIGTERM সমস্ত সোর্স কোড ফাইল মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Graceful shutdown allows draining traffic and closing database handles cleanly.',
          bn: 'গ্রেসফুল শাটডাউন চলমান ট্রাফিক শেষ করতে এবং ডাটাবেজ সংযোগ নিরাপদে বন্ধ করতে দেয়।',
        },
        explanation: {
          en: 'Handling SIGTERM allows applications to drain in-flight requests and exit gracefully before Kubernetes issues an ungraceful SIGKILL.',
          bn: 'SIGTERM হ্যান্ডেল করলে অ্যাপ সব রিকোয়েস্ট শেষ করে সুন্দরভাবে বন্ধ হতে পারে, ফলে কুবারনেটিসের জোরপূর্বক সিগকিল এড়ানো যায়।'
        },
      },
      {
        id: 'proc-sig-qz-3',
        kind: 'mcq',
        topic: 'broken-pipe-sigpipe',
        question: {
          en: 'What operating system event occurs when a process attempts to write data to an anonymous pipe whose reader end has already been closed?',
          bn: 'একটি প্রসেস যখন এমন একটি পাইপে ডাটা লিখতে যায় যার পড়ার প্রান্তটি (reader) আগেই বন্ধ হয়ে গেছে, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'The kernel delivers a SIGPIPE signal to the writer process, terminating it immediately unless SIGPIPE is handled or ignored',
            bn: 'কার্নেল লেখার প্রসেসটিকে একটি SIGPIPE সিগন্যাল পাঠায়, যা হ্যান্ডেল করা না থাকলে প্রসেসটি তাৎক্ষণিকভাবে বন্ধ হয়ে যায়',
          },
          {
            en: 'The computer keyboard permanently locks up',
            bn: 'কম্পিউটার কিবোর্ড স্থায়ীভাবে অচল হয়ে যায়',
          },
          {
            en: 'The data is emailed to the computer system administrator',
            bn: 'ডাটাটি সিস্টেম অ্যাডমিনিস্ট্রেটরের কাছে ইমেইল আকারে চলে যায়',
          },
          {
            en: 'The pipe expands physically inside the computer case',
            bn: 'কম্পিউটার কেসিংয়ের ভেতরে পাইপটি শারীরিক আকারে বড় হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Writing to a closed reader triggers a SIGPIPE (Broken pipe) signal.',
          bn: 'বন্ধ পাইপে লিখলে SIGPIPE ( ব্রোকেন পাইপ ) সিগন্যাল তৈরি হয়।',
        },
        explanation: {
          en: 'Writing to a pipe with no active reader is an error. The kernel raises SIGPIPE (Broken pipe) to notify or terminate the writer.',
          bn: 'পাঠকহীন পাইপে লেখা একটি মারাত্মক ত্রুটি। কার্নেল তখন SIGPIPE সিগন্যাল পাঠিয়ে লেখক প্রসেসকে জানিয়ে দেয়।'
        },
      },
      {
        id: 'proc-sig-qz-4',
        kind: 'mcq',
        topic: 'shared-memory-fastest-ipc',
        question: {
          en: 'Why is POSIX Shared Memory (shm_open) technically the fastest Inter-Process Communication mechanism available in operating systems?',
          bn: 'পসিক্স শেয়ার্ড মেমোরি (shm_open) প্রযুক্তিগতভাবে অপারেটিং সিস্টেমের সবচেয়ে দ্রুতগতির IPC মাধ্যম কেন?'
        },
        options: [
          {
            en: 'Once mapped, both processes read and write directly to identical physical RAM addresses through their page tables, requiring zero kernel context switches or data copy system calls',
            bn: 'একবার ম্যাপ হওয়ার পর উভয় প্রসেস তাদের পেজ টেবিলের মাধ্যমে সরাসরি একই ফিজিক্যাল র‍্যামের ঠিকানায় কাজ করে, ফলে কোনো কার্নেল কনটেক্সট সুইচ বা ডাটা কপি সিস্টেম কলের প্রয়োজন হয় না',
          },
          {
            en: 'Because shared memory chips are made of solid gold',
            bn: 'কারণ শেয়ার্ড মেমোরি চিপ খাঁটি সোনা দিয়ে তৈরি হয়',
          },
          {
            en: 'Because it uses laser beams inside the computer chassis',
            bn: 'কারণ এটি কম্পিউটার কেসিংয়ের ভেতরে লেজার রশ্মি ব্যবহার করে',
          },
          {
            en: 'Because shared memory disables the computer security firewall',
            bn: 'কারণ শেয়ার্ড মেমোরি কম্পিউটারের সিকিউরিটি ফায়ারওয়াল বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Direct hardware DRAM access with zero kernel copying system calls.',
          bn: 'কোনো কার্নেল সিস্টেম কল ছাড়াই সরাসরি হার্ডওয়্যার র‍্যাম অ্যাক্সেস।',
        },
        explanation: {
          en: 'Shared memory eliminates all data copying. Processes read and write to the same physical memory frames at bare-metal memory speeds.',
          bn: 'শেয়ার্ড মেমোরি যেকোনো ডাটা কপি করার প্রয়োজনীয়তা দূর করে। প্রসেসগুলো সরাসরি হার্ডওয়্যার গতিতে একই মেমোরিতে কাজ করে।'
        },
      },
    ],
  },
  next: {
    slug: 'process-scheduling',
    title: {
      en: 'Process Scheduling: FCFS, Round Robin & Linux CFS',
      bn: 'প্রসেস শিডিউলিং: FCFS, Round Robin এবং লিনাক্স CFS'
    },
  },
};
