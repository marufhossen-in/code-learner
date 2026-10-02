import type { Lesson } from '../../../lib/types';

export const MeetThreadsLesson: Lesson = {
  slug: 'meet-threads',
  tech: 'threads',
  title: {
    en: 'Introduction & Overview of Operating System Threads',
    bn: 'অপারেটিং সিস্টেম থ্রেডের প্রাথমিক পরিচিতি ও রূপরেখা'
  },
  summary: {
    en: 'A beginner overview of the thread: the fundamental, lightweight unit of CPU execution within an operating system process. Discover how multiple threads live inside a shared virtual address space, executing code concurrently across multiple CPU cores. Explore the anatomy of a thread, including its private program counter, CPU registers, and execution stack, alongside shared resources like heap memory and file descriptors.',
    bn: 'অপারেটিং সিস্টেম প্রসেসের ভেতরে সবচেয়ে ক্ষুদ্র ও লাইটওয়েট এক্সিকিউশন ইউনিট থ্রেডের সাথে পরিচিত হোন। একাধিক থ্রেড কীভাবে একটি সাধারণ ভার্চুয়াল অ্যাড্রেস স্পেস শেয়ার করে একাধিক সিপিইউ কোরে সমান্তরালভাবে কোড চালায় তা বুঝুন। থ্রেডের নিজস্ব প্রোগ্রাম কাউন্টার, সিপিইউ রেজিস্টার ও স্ট্যাকের সাথে প্রসেসের শেয়ার্ড হিপ মেমোরি ও ফাইল ডেসক্রিপ্টরের সম্পর্ক জানুন।',
  },
  minutes: 18,
  blocks: [
    {
      type: 'heading',
      id: 'the-need-for-lightweight-execution',
      text: {
        en: 'The Need for Lightweight Concurrent Execution',
        bn: 'লাইটওয়েট কনকারেন্ট এক্সিকিউশনের প্রয়োজনীয়তা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build high-performance software that handles multiple simultaneous users, operating systems must execute many computational tasks concurrently. Creating an entire process for every concurrent task incurs steep overhead: duplicating page tables, allocating isolated virtual address spaces, and performing costly kernel context switches.',
        bn: 'আপনি যখন উচ্চক্ষমতাসম্পন্ন সফটওয়্যার তৈরি করেন যা একসাথে বহু ব্যবহারকারীর অনুরোধ সামলায়, তখন অপারেটিং সিস্টেমকে সমান্তরালভাবে একাধিক কাজ চালাতে হয়। প্রতিটি কাজের জন্য সম্পূর্ণ নতুন প্রসেস তৈরি করলে প্রচুর সম্পদের অপচয় হয়: পেজ টেবিল কপি করা, আলাদা ভার্চুয়াল মেমোরি বরাদ্দ করা এবং কার্নেল কনটেক্সট সুইচের ধীরগতি এর অন্যতম কারণ।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Modern applications like web browsers or database engines require hundreds of simultaneous execution streams within the exact same memory context. Instead of spawning separate processes, the operating system provides Threads: lightweight execution contexts that share the same address space while executing instructions independently.',
        bn: 'ওয়েব ব্রাউজার বা ডাটাবেজের মতো আধুনিক সফটওয়্যারগুলোতে একই মেমোরির ভেতরে শত শত সমান্তরাল কাজের ধারা চালানোর প্রয়োজন হয়। পৃথক প্রসেস খোলার বদলে অপারেটিং সিস্টেম থ্রেড (Thread) সরবরাহ করে: এগুলো হলো লাইটওয়েট এক্সিকিউশন ধারা যা একই মেমোরি শেয়ার করে স্বাধীনভাবে নির্দেশাবলি কার্যকর করে।'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Private Program Counter (PC)',
            bn: '১. নিজস্ব প্রোগ্রাম কাউন্টার (PC)'
          },
          text: {
            en: 'Each thread tracks the memory address of the next machine instruction it must execute. Multiple threads inside the same process can execute completely different functions concurrently.',
            bn: 'প্রতিটি থ্রেড তার পরবর্তী নির্দেশনার মেমোরি ঠিকানা নিজেই ট্র্যাক করে। একই প্রসেসের ভেতরের বিভিন্ন থ্রেড সম্পূর্ণ আলাদা ফাংশন একই সাথে চালাতে পারে।'
          },
        },
        {
          title: {
            en: '2. Dedicated CPU Registers',
            bn: '২. পৃথক সিপিইউ রেজিস্টার'
          },
          text: {
            en: 'Every thread possesses its own private set of processor registers, storing immediate arithmetic operands, stack pointers, and local execution flags.',
            bn: 'প্রতিটি থ্রেডের নিজস্ব প্রসেসর রেজিস্টার সেট থাকে, যা তাৎক্ষণিক গাণিতিক মান, স্ট্যাক পয়েন্টার এবং স্থানীয় এক্সিকিউশন ফ্ল্যাগ সংরক্ষণ করে।'
          },
        },
        {
          title: {
            en: '3. Independent Execution Stack',
            bn: '৩. স্বাধীন এক্সিকিউশন স্ট্যাক'
          },
          text: {
            en: 'Each thread receives an isolated contiguous stack (typically 1MB to 8MB in native operating system threads) to store function call frames, parameters, and local variables without risk of overwrite.',
            bn: 'প্রতিটি থ্রেড ১ মেগাবাইট থেকে ৮ মেগাবাইট পর্যন্ত নিজস্ব পৃথক স্ট্যাক পায়, যা ফাংশন কল ফ্রেম, প্যারামিটার এবং লোকাল ভেরিয়েবল নিরাপদে সংরক্ষণ করে।'
          },
        },
        {
          title: {
            en: '4. Shared Heap and Open Resources',
            bn: '৪. শেয়ার্ড হিপ এবং উন্মুক্ত রিসোর্স'
          },
          text: {
            en: 'All sibling threads in a process share global variables, dynamic heap allocations, and open file descriptors including active network sockets.',
            bn: 'একটি প্রসেসের সমস্ত সহোদর থ্রেড গ্লোবাল ভেরিয়েবল, ডায়নামিক হিপ মেমোরি এবং নেটওয়ার্ক সকেটসহ ওপেন ফাইল ডেসক্রিপ্টর পরস্পরের মাঝে শেয়ার করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Process Memory Layout: Single-Threaded vs Multi-Threaded Architecture',
        bn: 'প্রসেস মেমোরি কাঠামো: একক থ্রেড বনাম মাল্টি-থ্রেড আর্কিটেকচার'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Process memory layout comparing single-threaded and multi-threaded architecture">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PROCESS MEMORY BOUNDARY &amp; MULTI-THREADED EXECUTION</text>
  
  <!-- Outer Box: The Process (PID 4080) -->
  <g transform="translate(30, 48)">
    <rect width="780" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="20" y="24" fill="#38bdf8" font-size="12" font-weight="bold">HOST PROCESS ADDRESS SPACE (PID 4080)</text>
    
    <!-- Top Row: Shared Resources -->
    <g transform="translate(20, 36)">
      <!-- Code segment -->
      <rect x="0" y="0" width="170" height="70" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="85" y="25" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">CODE (.text)</text>
      <text x="85" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Shared Instructions</text>
      <text x="85" y="58" fill="#6ee7b7" font-size="8" text-anchor="middle">Read-Only</text>
      
      <!-- Data segment -->
      <rect x="185" y="0" width="170" height="70" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="270" y="25" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">DATA / BSS</text>
      <text x="270" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Global Variables</text>
      <text x="270" y="58" fill="#f59e0b" font-size="8" text-anchor="middle">Shared Read/Write</text>
      
      <!-- Heap segment -->
      <rect x="370" y="0" width="185" height="70" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="462" y="25" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">SHARED HEAP</text>
      <text x="462" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">malloc() / new Objects</text>
      <text x="462" y="58" fill="#6ee7b7" font-size="8" text-anchor="middle">Accessible to ALL Threads</text>
      
      <!-- File descriptors -->
      <rect x="570" y="0" width="170" height="70" rx="6" fill="#0f172a" stroke="#64748b"/>
      <text x="655" y="25" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">FILE DESCRIPTORS</text>
      <text x="655" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Open Sockets &amp; Files</text>
      <text x="655" y="58" fill="#cbd5e1" font-size="8" text-anchor="middle">Shared fd 0, 1, 2, 3...</text>
    </g>
    
    <!-- Divider -->
    <line x1="20" y1="126" x2="760" y2="126" stroke="#475569" stroke-dasharray="4 4"/>
    <text x="390" y="142" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">PRIVATE PER-THREAD RESOURCES (INDIVIDUAL CPU DISPATCH UNITS)</text>
    
    <!-- Bottom Row: 3 Threads -->
    <g transform="translate(20, 155)">
      <!-- Thread 1 -->
      <g transform="translate(0, 0)">
        <rect width="235" height="175" rx="6" fill="#0f172a" stroke="#38bdf8"/>
        <text x="117" y="22" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">THREAD 1 (TID 4080)</text>
        <rect x="15" y="32" width="205" height="35" rx="4" fill="#1e293b"/>
        <text x="25" y="48" fill="#cbd5e1" font-size="9">Registers: RAX=0x4, RSP=0x7fff1</text>
        <text x="25" y="60" fill="#38bdf8" font-size="9">PC: 0x401020 (handleRequest)</text>
        <rect x="15" y="75" width="205" height="55" rx="4" fill="#1e293b" stroke="#38bdf8"/>
        <text x="117" y="93" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Private Stack 1 (8MB)</text>
        <text x="117" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Local Vars / Return Addresses</text>
        <text x="117" y="152" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Assigned to CPU Core 0</text>
      </g>
      
      <!-- Thread 2 -->
      <g transform="translate(252, 0)">
        <rect width="235" height="175" rx="6" fill="#0f172a" stroke="#10b981"/>
        <text x="117" y="22" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">THREAD 2 (TID 4081)</text>
        <rect x="15" y="32" width="205" height="35" rx="4" fill="#1e293b"/>
        <text x="25" y="48" fill="#cbd5e1" font-size="9">Registers: RBX=0x9, RSP=0x7ffea</text>
        <text x="25" y="60" fill="#10b981" font-size="9">PC: 0x403400 (runDatabaseQuery)</text>
        <rect x="15" y="75" width="205" height="55" rx="4" fill="#1e293b" stroke="#10b981"/>
        <text x="117" y="93" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Private Stack 2 (8MB)</text>
        <text x="117" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Local Vars / Return Addresses</text>
        <text x="117" y="152" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Assigned to CPU Core 1</text>
      </g>
      
      <!-- Thread 3 -->
      <g transform="translate(505, 0)">
        <rect width="235" height="175" rx="6" fill="#0f172a" stroke="#f59e0b"/>
        <text x="117" y="22" fill="#f59e0b" font-size="11" font-weight="bold" text-anchor="middle">THREAD 3 (TID 4082)</text>
        <rect x="15" y="32" width="205" height="35" rx="4" fill="#1e293b"/>
        <text x="25" y="48" fill="#cbd5e1" font-size="9">Registers: RCX=0x2, RSP=0x7ffe0</text>
        <text x="25" y="60" fill="#f59e0b" font-size="9">PC: 0x4051a0 (compressImage)</text>
        <rect x="15" y="75" width="205" height="55" rx="4" fill="#1e293b" stroke="#f59e0b"/>
        <text x="117" y="93" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">Private Stack 3 (8MB)</text>
        <text x="117" y="112" fill="#cbd5e1" font-size="9" text-anchor="middle">Local Vars / Return Addresses</text>
        <text x="117" y="152" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Assigned to CPU Core 2</text>
      </g>
    </g>
  </g>
  
  <text x="420" y="424" fill="#94a3b8" font-size="10" text-anchor="middle">Threads share heap and code segments, but each thread has its own stack, CPU registers, and program counter</text>
</svg>`,
      caption: {
        en: 'Inside a process, all threads share the heap and file descriptors, but each thread maintains an isolated stack and register state.',
        bn: 'একটি প্রসেসের অভ্যন্তরে সমস্ত থ্রেড হিপ মেমোরি ও ফাইল শেয়ার করে, তবে প্রতিটি থ্রেডের নিজস্ব স্বাধীন স্ট্যাক ও রেজিস্টার থাকে।'
      },
    },
    {
      type: 'heading',
      id: 'multithreaded-simulation-code',
      text: {
        en: 'Simulating Multi-Threaded Concurrency in Node.js',
        bn: 'Node.js-এ মাল্টি-থ্রেডেড কনকারেন্সি সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'To observe how threads share memory while maintaining private execution state, explore this simulated multi-threaded execution model. It models two concurrent threads modifying a shared heap object while maintaining private execution stacks.',
        bn: 'থ্রেডগুলো কীভাবে নিজস্ব এক্সিকিউশন স্ট্যাক রক্ষা করে একই মেমোরি শেয়ার করে তা বুঝতে এই সিমুলেশনটি লক্ষ্য করুন। এটি দুটি সমান্তরাল থ্রেডের মডেল তৈরি করে যা নিজস্ব স্ট্যাক অক্ষত রেখে একটি শেয়ার্ড হিপ অবজেক্টের মান পরিবর্তন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'thread-memory-simulation.js',
      code: `// Simulating Multi-Threaded Memory Architecture
// Demonstrates shared heap access with isolated private execution stacks

class SimulatedThread {
  constructor(tid, threadName, sharedHeap) {
    this.tid = tid;
    this.name = threadName;
    this.sharedHeap = sharedHeap;
    this.privateStack = []; // Private stack frame storage
    this.programCounter = 0;
  }

  executeFunction(fnName, localVariables, workCallback) {
    // 1. Push stack frame
    this.privateStack.push({ fnName, locals: { ...localVariables } });
    this.programCounter++;

    // 2. Execute work accessing both private stack and shared heap
    workCallback(this);

    // 3. Pop stack frame upon return
    return this.privateStack.pop();
  }
}

// Global process heap shared by all threads
const processHeap = {
  activeSessions: 0,
  databaseConnections: 5,
  cachedItems: ['config.json', 'schema.sql']
};

// Spawn two sibling threads in the same process
const threadA = new SimulatedThread(101, 'Worker_A', processHeap);
const threadB = new SimulatedThread(102, 'Worker_B', processHeap);

console.log('=== Initial Shared Heap ===');
console.log('Sessions:', processHeap.activeSessions, '| DB Conns:', processHeap.databaseConnections);

// Thread A executes a login request handler
threadA.executeFunction('handleUserLogin', { userId: 42, role: 'admin' }, (th) => {
  console.log('\\n[' + th.name + '] Running on CPU Core 0 with private userId:', th.privateStack[0].locals.userId);
  th.sharedHeap.activeSessions += 1;
  th.sharedHeap.cachedItems.push('user_42_token');
});

// Thread B executes an API request handler concurrently
threadB.executeFunction('handleApiRequest', { endpoint: '/api/v1/orders' }, (th) => {
  console.log('\\n[' + th.name + '] Running on CPU Core 1 with private endpoint:', th.privateStack[0].locals.endpoint);
  th.sharedHeap.activeSessions += 1;
});

console.log('\\n=== Final Shared Heap State ===');
console.log('Sessions (Modified by both threads):', processHeap.activeSessions);
console.log('Cached Items:', processHeap.cachedItems);

console.log('\\nPrivate Stack Isolation Check:');
console.log('Thread A Stack Frames after return:', threadA.privateStack.length);
console.log('Thread B Stack Frames after return:', threadB.privateStack.length);`,
      caption: {
        en: 'The simulation demonstrates how sibling threads update shared heap sessions while keeping local variables isolated on private stacks.',
        bn: 'সিমুলেশনটি দেখায় কীভাবে সহোদর থ্রেডগুলো নিজস্ব স্ট্যাক আলাদা রেখে একই সাথে শেয়ার্ড হিপের মান আপডেট করতে পারে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Kernel Threads versus Green Threads',
        bn: 'কার্নেল থ্রেড বনাম গ্রিন থ্রেড'
      },
      text: {
        en: 'Operating systems provide native Kernel Threads (such as POSIX pthreads on Linux, mapped 1:1 to CPU hardware cores). In contrast, high-level language runtimes like Go and Erlang introduce Green execution units (or Goroutines) managed entirely in user space in an M:N scheduling model. These lightweight routines start with tiny 2KB stacks that grow dynamically, allowing a single server to run 100000 concurrent tasks simultaneously without exhausting physical RAM.',
        bn: 'অপারেটিং সিস্টেম সরাসরি নেটিভ কার্নেল থ্রেড সরবরাহ করে ( যেমন লিনাক্সের POSIX pthreads, যা ১:১ মডেলে সিপিইউর সাথে যুক্ত )। অপরদিকে Go এবং Erlang-এর মতো আধুনিক ভাষাগুলো রানটাইম নিয়ন্ত্রিত গ্রিন এক্সিকিউশন বা Goroutines প্রদান করে, যা M:N মডেলে ইউজার স্পেসে পরিচালিত হয়। এই হালকা রুটিনের প্রাথমিক স্ট্যাক মাত্র ২ কিলোবাইট হওয়ায় একটি একক সার্ভারেই র‍্যাম শেষ না করে একসাথে ১০০০০০ সমান্তরাল কাজ চালানো সম্ভব।'
      },
    },
  ],
  exercises: [
    {
      id: 'meet-threads-ex-1',
      kind: 'predict',
      topic: "meet-threads",
      question: {
        en: 'How many distinct program counters (PC) exist in a process running 3 concurrent threads? (3). Type the number.',
        bn: 'একই সাথে ৩ টি কনকারেন্ট থ্রেড চলমান একটি প্রসেসে কয়টি স্বতন্ত্র প্রোগ্রাম কাউন্টার (PC) বিদ্যমান থাকে? ( ৩ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '3',
      hint: {
        en: 'Every thread has its own program counter: 3 threads = 3 program counters.',
        bn: 'প্রতিটি থ্রেডের নিজস্ব প্রোগ্রাম কাউন্টার থাকে: ৩ টি থ্রেড = ৩ টি প্রোগ্রাম কাউন্টার।'
      },
      explanation: {
        en: 'Because every thread executes instructions independently, each thread must have its own private program counter register.',
        bn: 'যেহেতু প্রতিটি থ্রেড স্বাধীনভাবে নির্দেশাবলি চালায়, তাই প্রতি থ্রেডের নিজস্ব প্রোগ্রাম কাউন্টার থাকা আবশ্যক।'
      },
    },
    {
      id: 'meet-threads-ex-2',
      kind: 'mcq',
      topic: "meet-threads",
      question: {
        en: 'Which hardware resource is strictly private and isolated for each thread within a multi-threaded process?',
        bn: 'একটি মাল্টি-থ্রেডেড প্রসেসের ভেতরে প্রতিটি থ্রেডের জন্য কোন হার্ডওয়্যার রিসোর্সটি সম্পূর্ণ ব্যক্তিগত ও পৃথক থাকে?'
      },
      options: [
        {
          en: 'The execution stack and CPU register state',
          bn: 'এক্সিকিউশন স্ট্যাক এবং সিপিইউ রেজিস্টার স্টেট',
        },
        {
          en: 'The global heap memory and memory allocations',
          bn: 'গ্লোবাল হিপ মেমোরি এবং মেমোরি বরাদ্দ',
        },
        {
          en: 'The open file descriptor table and network sockets',
          bn: 'ওপেন ফাইল ডেসক্রিপ্টর টেবিল এবং নেটওয়ার্ক সকেট',
        },
        {
          en: 'The application source code text segment',
          bn: 'অ্যাপ্লিকেশন সোর্স কোড টেক্সট সেগমেন্ট',
        },
      ],
      answer: 0,
      hint: {
        en: 'Stacks and registers are thread-private; heap and code are shared.',
        bn: 'স্ট্যাক এবং রেজিস্টার থ্রেডের একান্ত নিজস্ব; হিপ ও কোড শেয়ার করা থাকে।'
      },
      explanation: {
        en: 'To prevent function calls from corrupting each other, each thread is given a private execution stack and dedicated CPU registers.',
        bn: 'ফাংশন কল যেন একে অপরকে ক্ষতিগ্রস্ত না করে, সেজন্য প্রতিটি থ্রেডকে নিজস্ব স্ট্যাক এবং রেজিস্টার বরাদ্দ দেওয়া হয়।'
      },
    },
    {
      id: 'meet-threads-ex-3',
      kind: 'mcq',
      topic: "meet-threads",
      question: {
        en: 'Which memory resource is shared directly among all sibling threads executing within the same process?',
        bn: 'একই প্রসেসের ভেতরে চলমান সমস্ত সহোদর থ্রেডের মাঝে সরাসরি কোন মেমোরি রিসোর্সটি শেয়ার করা থাকে?'
      },
      options: [
        {
          en: 'The heap memory segment containing dynamic objects and global variables',
          bn: 'ডায়নামিক অবজেক্ট এবং গ্লোবাল ভেরিয়েবল সংবলিত হিপ মেমোরি সেগমেন্ট',
        },
        {
          en: 'The CPU program counter register of other threads',
          bn: 'অন্যান্য থ্রেডের সিপিইউ প্রোগ্রাম কাউন্টার রেজিস্টার',
        },
        {
          en: 'The stack pointer register pointing to local variables',
          bn: 'লোকাল ভেরিয়েবল নির্দেশকারী স্ট্যাক পয়েন্টার রেজিস্টার',
        },
        {
          en: 'The private instruction pointer register',
          bn: 'প্রাইভেট ইন্সট্রাকশন পয়েন্টার রেজিস্টার',
        },
      ],
      answer: 0,
      hint: {
        en: 'Dynamic heap allocations are accessible to all threads in the process.',
        bn: 'হিপে ডায়নামিকভাবে তৈরি সমস্ত ডাটা প্রসেসের সকল থ্রেড দেখতে পারে।'
      },
      explanation: {
        en: 'The heap and global data segment are shared across all threads within a process, enabling rapid communication without IPC.',
        bn: 'প্রসেসের ভেতরে হিপ এবং গ্লোবাল ডাটা শেয়ার্ড থাকে, যা কোনো প্রকার আইপিসি ছাড়াই দ্রুত তথ্য আদান-প্রদানের সুযোগ দেয়।'
      },
    },
    {
      id: 'meet-threads-ex-4',
      kind: 'predict',
      topic: "meet-threads",
      question: {
        en: 'If an operating system allocates a 2MB default stack for each thread, how many megabytes of stack memory do 4 threads consume? (8). Type the number.',
        bn: 'একটি অপারেটিং সিস্টেম যদি প্রতিটি থ্রেডকে ডিফল্টভাবে ২ মেগাবাইট স্ট্যাক বরাদ্দ করে, তবে ৪ টি থ্রেড সর্বমোট কত মেগাবাইট স্ট্যাক মেমোরি ব্যবহার করবে? ( ৮ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '8',
      hint: {
        en: 'Multiply 2MB by 4 threads: 8MB total.',
        bn: '২ মেগাবাইটকে ৪ টি থ্রেড দিয়ে গুণ করুন: ৮ মেগাবাইট।'
      },
      explanation: {
        en: 'Because stacks are isolated per thread, memory scales linearly with thread count: 4 threads * 2MB = 8MB.',
        bn: 'যেহেতু প্রতিটি থ্রেডের নিজস্ব স্ট্যাক থাকে, তাই মোট মেমোরি রৈখিকভাবে বৃদ্ধি পায়: ৪ * ২ মেগাবাইট = ৮ মেগাবাইট।'
      },
    },
  ],
  quiz: {
    id: "meet-threads-quiz",
    title: {
      en: 'Operating System Threads Fundamentals Quiz',
      bn: 'অপারেটিং সিস্টেম থ্রেড ফান্ডামেন্টালস কুইজ'
    },
    questions: [
      {
        id: 'meet-threads-qz-1',
        kind: 'mcq',
        topic: 'thread-vs-process-context-switching',
        question: {
          en: 'Why do multi-threaded applications experience substantially lower context-switching overhead than multi-process architectures?',
          bn: 'মাল্টি-প্রসেস আর্কিটেকচারের তুলনায় মাল্টি-থ্রেডেড অ্যাপ্লিকেশনে কনটেক্সট সুইচের খরচ উল্লেখযোগ্য পরিমাণে কম কেন?'
        },
        options: [
          {
            en: 'Switching between threads in the same process does not require flushing CPU Translation Lookaside Buffers (TLB) or swapping memory page table roots',
            bn: 'একই প্রসেসের থ্রেডগুলোর মাঝে কনটেক্সট সুইচের সময় সিপিইউ TLB ক্যাশ মুছে ফেলার বা মেমোরি পেজ টেবিল পরিবর্তন করার প্রয়োজন হয় না',
          },
          {
            en: 'Because threads do not execute machine instructions on the physical CPU',
            bn: 'কারণ থ্রেডগুলো ফিজিক্যাল সিপিইউতে কোনো মেশিন নির্দেশাবলি চালায় না',
          },
          {
            en: 'Because thread code is physically stored inside computer monitors',
            bn: 'কারণ থ্রেডের কোড কম্পিউটার মনিটরের ভেতরে সংরক্ষিত থাকে',
          },
          {
            en: 'Because operating systems delete inactive threads during every switch',
            bn: 'কারণ অপারেটিং সিস্টেম প্রতি সুইচের সময় নিষ্ক্রিয় থ্রেড মুছে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Memory page tables remain unchanged during thread context switches.',
          bn: 'থ্রেড পরিবর্তনের সময় মেমোরি পেজ টেবিল অক্ষত থাকে।',
        },
        explanation: {
          en: 'Thread context switches only swap registers and stacks. Process switches must invalidate the TLB and reload the MMU page table pointer.',
          bn: 'থ্রেড কনটেক্সট সুইচে কেবল রেজিস্টার ও স্ট্যাক বদলাতে হয়। প্রসেস সুইচে পুরো মেমোরি পেজ টেবিল পরিবর্তন করতে হয় যা বেশ ধীরগতির।'
        },
      },
      {
        id: 'meet-threads-qz-2',
        kind: 'mcq',
        topic: 'shared-heap-race-hazard',
        question: {
          en: 'What architectural vulnerability arises when multiple threads access shared heap memory without synchronization primitives?',
          bn: 'সিঙ্ক্রোনাইজেশন ছাড়া একাধিক থ্রেড একই সাথে শেয়ার্ড হিপ মেমোরিতে কাজ করলে কোন স্থাপত্যগত ঝুঁকি তৈরি হয়?'
        },
        options: [
          {
            en: 'Race conditions occur where concurrent interleaved writes corrupt shared data structures and produce non-deterministic program behavior',
            bn: 'রেস কন্ডিশন তৈরি হয়, যার ফলে সমান্তরাল এলোমেলো রাইট অপারেশনে ডাটা ক্ষতিগ্রস্ত হয় এবং অপ্রত্যাশিত ফলাফল উৎপন্ন হয়',
          },
          {
            en: 'The computer motherboard physically melts within seconds',
            bn: 'কম্পিউটারের মাদারবোর্ড কয়েক সেকেন্ডের মধ্যে গলে যায়',
          },
          {
            en: 'The hard drive deletes all image files stored in user directories',
            bn: 'হার্ড ড্রাইভ ব্যবহারকারীর সমস্ত ছবি স্বয়ংক্রিয়ভাবে মুছে ফেলে',
          },
          {
            en: 'The computer screen flips upside down permanently',
            bn: 'কম্পিউটার স্ক্রিন চিরতরে উল্টো হয়ে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Unsynchronized shared memory writes lead to data corruption from race conditions.',
          bn: 'সমন্বয়হীন শেয়ার্ড মেমোরিতে একাধিক থ্রেডের হস্তক্ষেপ ডেটা করাপশন ঘটায়।',
        },
        explanation: {
          en: 'Because threads share memory directly, unsynchronized writes cause race conditions where one thread overwrites another changes.',
          bn: 'থ্রেডগুলো সরাসরি মেমোরি শেয়ার করায় সমন্বয়হীন রাইট অপারেশনে একটি থ্রেডের ডাটা অন্য থ্রেড মুছে ফেলে ত্রুটি ঘটায়।'
        },
      },
      {
        id: 'meet-threads-qz-3',
        kind: 'mcq',
        topic: 'green-threads-stack-advantage',
        question: {
          en: 'In an M:N user-space green threading model (such as Go goroutines), how does stack allocation differ from traditional OS threads?',
          bn: 'M:N ইউজার-স্পেস গ্রিন থ্রেডিং মডেলে ( যেমন Go goroutines ) সাধারণ ওএস থ্রেডের তুলনায় স্ট্যাক বরাদ্দে কী পার্থক্য থাকে?'
        },
        options: [
          {
            en: 'Green threads start with tiny 2KB stacks that grow and shrink dynamically on demand, whereas OS threads allocate fixed large stacks (e.g. 1MB to 8MB)',
            bn: 'গ্রিন থ্রেড মাত্র ২ কিলোবাইটের ক্ষুদ্র স্ট্যাক দিয়ে শুরু হয় এবং প্রয়োজনে বাড়ে বা কমে, যেখানে ওএস থ্রেড শুরুতেই ১ থেকে ৮ মেগাবাইটের নির্দিষ্ট স্ট্যাক বরাদ্দ করে',
          },
          {
            en: 'Green threads require fifty gigabytes of physical RAM per thread',
            bn: 'গ্রিন থ্রেডের ক্ষেত্রে প্রতিটি থ্রেডের জন্য ৫০ গিগাবাইট র‍্যামের প্রয়োজন হয়',
          },
          {
            en: 'Green threads do not store local variables in memory',
            bn: 'গ্রিন থ্রেড মেমোরিতে কোনো লোকাল ভেরিয়েবল সংরক্ষণ করে না',
          },
          {
            en: 'Green threads only run when the computer is turned off',
            bn: 'গ্রিন থ্রেড কেবল কম্পিউটার বন্ধ থাকা অবস্থায় চলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Tiny dynamic 2KB stacks versus fixed multi-megabyte OS stacks.',
          bn: 'ক্ষুদ্র ২ কিলোবাইটের ডায়নামিক স্ট্যাক বনাম মেগাবাইট সাইজের নির্দিষ্ট ওএস স্ট্যাক।',
        },
        explanation: {
          en: 'Dynamic segmented stacks allow modern runtimes to scale to millions of concurrent green threads without running out of RAM.',
          bn: 'ডায়নামিক স্ট্যাকের কারণে আধুনিক ভাষাগুলো মেমোরি সংকট ছাড়াই লক্ষ লক্ষ সমান্তরাল থ্রেড চালাতে সক্ষম হয়।'
        },
      },
      {
        id: 'meet-threads-qz-4',
        kind: 'mcq',
        topic: 'thread-crash-blast-radius',
        question: {
          en: 'What occurs to sibling threads if one thread in a process triggers an unhandled segmentation fault (SIGSEGV)?',
          bn: 'একটি প্রসেসের যেকোনো একটি থ্রেডে যদি হ্যান্ডেল না করা সেগমেন্টেশন ফল্ট (SIGSEGV) ঘটে, তবে বাকি সহোদর থ্রেডগুলোর কী পরিণতি হয়?'
        },
        options: [
          {
            en: 'The operating system terminates the entire host process immediately, destroying all running sibling threads because they share the corrupted memory space',
            bn: 'অপারেটিং সিস্টেম তৎক্ষণাৎ পুরো হোস্ট প্রসেসটি বন্ধ করে দেয় এবং এর ফলে সমস্ত সহোদর থ্রেড ধ্বংস হয়ে যায় কারণ তারা একই মেমোরি স্পেস শেয়ার করছিল',
          },
          {
            en: 'Only that one thread stops while the other threads continue running forever',
            bn: 'কেবল সেই একটি থ্রেড বন্ধ হয় এবং বাকি থ্রেডগুলো আজীবন নির্বিঘ্নে চলতে থাকে',
          },
          {
            en: 'The crashed thread automatically repairs its own machine code and restarts',
            bn: 'ক্র্যাশ করা থ্রেডটি নিজে থেকেই নিজের কোড মেরামত করে পুনরায় চালু হয়',
          },
          {
            en: 'The computer reboots into safe mode immediately',
            bn: 'কম্পিউটার তৎক্ষণাৎ সেফ মোডে রিবুট নেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Process crash blast radius: an unhandled fault kills the entire process and all threads.',
          bn: 'ক্র্যাশের প্রভাব: যেকোনো একটি থ্রেডের ফল্ট পুরো প্রসেস এবং সমস্ত থ্রেডকে বন্ধ করে দেয়।',
        },
        explanation: {
          en: 'Because memory space is shared, a fatal memory fault in one thread invalidates the entire process state, prompting the OS to terminate the process.',
          bn: 'যেহেতু মেমোরি শেয়ার্ড থাকে, তাই একটি থ্রেডের মেমোরি ত্রুটি পুরো প্রসেসটিকে অনিরাপদ করে তোলে এবং ওএস তৎক্ষণাৎ পুরো প্রসেসটি ধ্বংস করে।'
        },
      },
    ],
  },
  next: {
    slug: 'threads-vs-processes',
    title: {
      en: 'Threads vs Processes: Memory Isolation & Performance',
      bn: 'থ্রেড বনাম প্রসেস: মেমোরি আইসোলেশন ও পারফরম্যান্স'
    },
  },
};
