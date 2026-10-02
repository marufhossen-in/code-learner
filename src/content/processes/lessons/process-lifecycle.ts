import type { Lesson } from '../../../lib/types';

export const ProcessLifecycleLesson: Lesson = {
  slug: 'process-lifecycle',
  tech: 'processes',
  title: {
    en: 'Process Lifecycle: Program Binary to Executing Virtual Space',
    bn: 'প্রসেস জীবনচক্র: প্রোগ্রাম বাইনারি থেকে সক্রিয় ভার্চুয়াল স্পেস'
  },
  summary: {
    en: 'Trace the journey of an application from a passive ELF binary file on disk to an actively executing process in memory. Understand the role of the OS Program Loader and dynamic linking with shared libraries. Trace virtual address space initialization across Text, Data, BSS, Heap, and Stack segments, and learn how processes return POSIX exit codes (Exit 0 vs non-zero error codes).',
    bn: 'ডিস্কে থাকা একটি নিষ্ক্রিয় ELF বাইনারি ফাইল থেকে মেমোরিতে সক্রিয় প্রসেস হিসেবে রূপান্তরের সম্পূর্ণ যাত্রা পর্যালোচনা করুন। ওএস প্রোগ্রাম লোডারের ভূমিকা এবং শেয়ার্ড লাইব্রেরির সাথে ডায়নামিক লিঙ্কিং বুঝুন। Text, Data, BSS, Heap ও Stack সেগমেন্টে ভার্চুয়াল মেমোরি ইনিশিয়ালাইজেশন পর্যালোচনা করুন এবং প্রসেস কীভাবে পসিক্স এক্সিট কোড প্রদান করে ( সফল এক্সিট ০ বনাম ত্রুটির নন-জিরো কোড ) তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'from-binary-to-process',
      text: {
        en: 'From Disk File to Running Process: The Role of the OS Loader',
        bn: 'ডিস্কের ফাইল থেকে চলমান প্রসেস: ওএস প্রোগ্রাম লোডারের ভূমিকা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When an executable application rests on a computer drive, it exists as an Executable and Linkable Format (ELF) file on Linux, a Portable Executable (PE) on Windows, or a Mach-O binary on macOS. The binary file contains compiled machine instructions, embedded constants, and a header describing memory layouts.',
        bn: 'একটি এক্সিকিউটেবল অ্যাপ্লিকেশন যখন কম্পিউটারের ড্রাইভে জমা থাকে, তখন এটি লিনাক্সে Executable and Linkable Format (ELF), উইন্ডোজে Portable Executable (PE) অথবা ম্যাক ওএসে Mach-O বাইনারি ফাইল হিসেবে অবস্থান করে। এই বাইনারি ফাইলে কম্পাইল করা মেশিন কোড নির্দেশনা, ধ্রুবক মান এবং মেমোরি লেআউটের বর্ণনাসম্বলিত একটি হেডার থাকে।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When a command launches the application, the operating system kernel executes the execve() system call. The kernel program loader validates file permissions, creates a fresh Process Control Block, sets up a new virtual memory address space, and maps the binary file contents into memory segments before jumping to the entry point instruction.',
        bn: 'কোনো কমান্ড দিয়ে অ্যাপ্লিকেশন চালু করলে অপারেটিং সিস্টেম কার্নেল execve() সিস্টেম কল পরিচালনা করে। কার্নেল প্রোগ্রাম লোডার ফাইলের অনুমতি যাচাই করে, একটি নতুন প্রসেস কন্ট্রোল ব্লক তৈরি করে, সম্পূর্ণ নতুন ভার্চুয়াল মেমোরি স্পেস প্রস্তুত করে এবং কোডের প্রথম নির্দেশনায় যাওয়ার আগে বাইনারির উপাদানগুলোকে বিভিন্ন মেমোরি সেগমেন্টে সাজিয়ে দেয়।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Text (Code) Segment',
            bn: '১. টেক্সট ( কোড ) সেগমেন্ট'
          },
          text: {
            en: 'Contains compiled machine instructions. The kernel marks this region as Read-Only and Executable (R-X) to prevent self-modifying code vulnerabilities. Multiple running instances of the exact same binary safely share the identical physical memory pages.',
            bn: 'এটি কম্পাইল করা মেশিন নির্দেশনা সংরক্ষণ করে। কোড পরিবর্তনজনিত নিরাপত্তা ত্রুটি ঠেকাতে কার্নেল এই অঞ্চলটিকে রিড-অনলি এবং এক্সিকিউটেবল (R-X) হিসেবে চিহ্নিত করে। একই অ্যাপ্লিকেশনের একাধিক উইন্ডো চললে তারা ফিজিক্যাল মেমোরিতে এই একই কোড পেজ শেয়ার করতে পারে।'
          },
        },
        {
          title: {
            en: '2. Data & BSS Segments (Globals)',
            bn: '২. ডাটা এবং BSS সেগমেন্ট ( গ্লোবাল ভেরিয়েবল )'
          },
          text: {
            en: 'The Data segment stores global and static variables initialized with values (like port = 8080). The Block Started by Symbol (BSS) segment holds uninitialized globals, which the kernel zeroes out upon startup.',
            bn: 'ডাটা সেগমেন্টে পূর্বে মান নির্ধারিত গ্লোবাল ও স্ট্যাটিক ভেরিয়েবল জমা থাকে ( যেমন port = 8080 )। আর Block Started by Symbol (BSS) সেগমেন্টে মানহীন গ্লোবাল ভেরিয়েবল থাকে, যা সিস্টেম চালুর সময় কার্নেল স্বয়ংক্রিয়ভাবে শূন্য দিয়ে পূরণ করে দেয়।'
          },
        },
        {
          title: {
            en: '3. Dynamic Heap (Grows Upward)',
            bn: '৩. ডায়নামিক হিপ ( ওপরের দিকে বৃদ্ধি পায় )'
          },
          text: {
            en: 'Memory requested dynamically at runtime using malloc() or new. The heap expands upward toward higher memory addresses as the application allocates data structures.',
            bn: 'রানটাইমে malloc() বা new ব্যবহার করে যে মেমোরি চাওয়া হয় তা হিপে বরাদ্দ হয়। অ্যাপ্লিকেশন নতুন ডাটা তৈরির সাথে সাথে হিপ মেমোরির উচ্চ ঠিকানার দিকে বৃদ্ধি পেতে থাকে।'
          },
        },
        {
          title: {
            en: '4. Call Stack (Grows Downward)',
            bn: '৪. কল স্ট্যাক ( নিচের দিকে বৃদ্ধি পায় )'
          },
          text: {
            en: 'Stores function execution frames, local primitive variables, and instruction return addresses. The stack expands downward from high memory toward lower addresses.',
            bn: 'ফাংশন এক্সিকিউশন ফ্রেম, লোকাল ভেরিয়েবল এবং নির্দেশনার রিটার্ন ঠিকানা সংরক্ষণ করে। স্ট্যাক মেমোরির সর্বোচ্চ ঠিকানা থেকে নিচের দিকের ঠিকানার দিকে প্রসারিত হয়।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'ELF Binary Loading into Process Virtual Memory Segments',
        bn: 'ELF বাইনারি থেকে প্রসেসের ভার্চুয়াল মেমোরি সেগমেন্টে লোডিং'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="ELF binary loading into virtual memory segments diagram showing text, data, bss, heap, and stack">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">PROCESS MEMORY SEGMENTS: FROM ELF FILE TO RAM</text>
  
  <!-- Left Side: Disk ELF File -->
  <g transform="translate(30, 48)">
    <rect width="250" height="350" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="125" y="24" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">ELF BINARY ON DISK (/usr/bin/app)</text>
    
    <rect x="15" y="42" width="220" height="35" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="125" y="64" fill="#cbd5e1" font-size="10" text-anchor="middle">ELF Header &amp; Entry Point (_start)</text>
    
    <rect x="15" y="85" width="220" height="40" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="125" y="110" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">.text (Machine Code)</text>
    
    <rect x="15" y="133" width="220" height="35" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="125" y="155" fill="#94a3b8" font-size="10" text-anchor="middle">.rodata (String Constants)</text>
    
    <rect x="15" y="176" width="220" height="35" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="125" y="198" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">.data (Initialized Globals)</text>
    
    <rect x="15" y="219" width="220" height="35" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="125" y="241" fill="#f59e0b" font-size="10" font-weight="bold" text-anchor="middle">.bss (Zeroed Space Specs)</text>
    
    <rect x="15" y="262" width="220" height="35" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="125" y="284" fill="#cbd5e1" font-size="10" text-anchor="middle">Symbol &amp; Dynamic Linking Tables</text>
    
    <rect x="15" y="305" width="220" height="32" rx="4" fill="#064e3b" stroke="#10b981"/>
    <text x="125" y="326" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">execve() Loader parses this</text>
  </g>
  
  <!-- Middle: Loader Arrow -->
  <g transform="translate(300, 200)">
    <line x1="0" y1="0" x2="80" y2="0" stroke="#10b981" stroke-width="4"/>
    <polygon points="80,-6 92,0 80,6" fill="#10b981"/>
    <text x="46" y="-12" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">LOADER</text>
    <text x="46" y="20" fill="#94a3b8" font-size="9" text-anchor="middle">Maps into RAM</text>
  </g>
  
  <!-- Right Side: Process Virtual Address Space -->
  <g transform="translate(410, 48)">
    <rect width="400" height="350" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="200" y="24" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">ACTIVE PROCESS VIRTUAL ADDRESS SPACE</text>
    
    <!-- Stack (Top / High memory) -->
    <rect x="20" y="40" width="360" height="42" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="35" y="65" fill="#38bdf8" font-size="11" font-weight="bold">Call Stack (Grows Downward v)</text>
    <text x="360" y="65" fill="#94a3b8" font-size="9" text-anchor="end">0x7FFFFFFF (High)</text>
    
    <!-- Shared Libraries / mmap -->
    <rect x="20" y="90" width="360" height="38" rx="4" fill="#0f172a" stroke="#a855f7"/>
    <text x="35" y="114" fill="#c084fc" font-size="10" font-weight="bold">Shared Libraries (libc.so, mmap memory)</text>
    
    <!-- Heap (Grows Upward) -->
    <rect x="20" y="136" width="360" height="45" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="35" y="160" fill="#10b981" font-size="11" font-weight="bold">Heap (Grows Upward ^)</text>
    <text x="35" y="174" fill="#94a3b8" font-size="8">Dynamic Allocations via malloc() / brk()</text>
    
    <!-- BSS Segment -->
    <rect x="20" y="189" width="360" height="35" rx="4" fill="#0f172a" stroke="#f59e0b"/>
    <text x="35" y="211" fill="#f59e0b" font-size="10" font-weight="bold">BSS Segment (Uninitialized Globals, zeroed)</text>
    
    <!-- Data Segment -->
    <rect x="20" y="232" width="360" height="35" rx="4" fill="#0f172a" stroke="#10b981"/>
    <text x="35" y="254" fill="#10b981" font-size="10" font-weight="bold">Data Segment (Initialized Globals, RW-)</text>
    
    <!-- Text Segment (Bottom / Low memory) -->
    <rect x="20" y="275" width="360" height="45" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="35" y="298" fill="#38bdf8" font-size="11" font-weight="bold">Text Segment (Read-Only Code, R-X)</text>
    <text x="360" y="298" fill="#94a3b8" font-size="9" text-anchor="end">0x00400000 (Low)</text>
  </g>
  
  <text x="420" y="425" fill="#94a3b8" font-size="10" text-anchor="middle">The loader maps code as Read-Only so multiple instances share the same physical RAM pages</text>
</svg>`,
      caption: {
        en: 'The OS loader maps an ELF binary into discrete memory segments: Text (Read-Only), Data/BSS, Heap, and Stack.',
        bn: 'ওএস লোডার একটি ELF বাইনারিকে নির্দিষ্ট মেমোরি সেগমেন্টে রূপান্তর করে: টেক্সট ( রিড-অনলি ), ডাটা/BSS, হিপ এবং স্ট্যাক।'
      },
    },
    {
      type: 'heading',
      id: 'process-lifecycle-and-exit-status-code',
      text: {
        en: 'Process Lifecycle & Exit Status Protocol',
        bn: 'প্রসেস জীবনচক্র এবং এক্সিট স্ট্যাটাস প্রোটোকল'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When a process terminates, it communicates its outcome to the parent process via an exit status code. The following code simulates how a process loads segments, completes its workflow, and returns standard POSIX exit status numbers.',
        bn: 'কোনো প্রসেসের কাজ শেষ হলে এটি এক্সিট স্ট্যাটাস কোডের মাধ্যমে প্যারেন্ট প্রসেসকে ফলাফল জানায়। নিচের কোডটি সেগমেন্ট লোডিং, কাজ সম্পন্ন করা এবং পসিক্স মানদণ্ডের এক্সিট কোড প্রদান প্রক্রিয়াটি প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'process-lifecycle-simulator.js',
      code: `// Deterministic Process Lifecycle & Exit Status Simulator
// Demonstrates binary segment initialization and POSIX exit status handling

class VirtualProcess {
  constructor(name) {
    this.name = name;
    this.pid = 4120;
    this.exitCode = null;
    this.phase = 'CREATED';

    // Segment memory layout in bytes
    this.memorySegments = {
      text: { sizeBytes: 131072, permission: 'R-X', role: 'Machine Instructions' },
      data: { sizeBytes: 16384,  permission: 'RW-', role: 'Initialized Globals' },
      bss:  { sizeBytes: 8192,   permission: 'RW-', role: 'Zeroed Globals' },
      heap: { sizeBytes: 65536,  permission: 'RW-', role: 'Dynamic Memory' },
      stack:{ sizeBytes: 32768,  permission: 'RW-', role: 'Call Frames & Locals' }
    };
  }

  // Phase 1: OS Loader initializes virtual space
  loadBinary() {
    this.phase = 'LOADED';
    let totalVirtualBytes = 0;
    for (const seg of Object.values(this.memorySegments)) {
      totalVirtualBytes += seg.sizeBytes;
    }
    return {
      status: 'INITIALIZED',
      totalVirtualKB: totalVirtualBytes / 1024,
      entryPoint: '0x004010a0'
    };
  }

  // Phase 2: Execution & Termination
  terminate(code) {
    this.exitCode = code;
    this.phase = 'TERMINATED';
    return {
      pid: this.pid,
      exitCode: this.exitCode,
      success: this.exitCode === 0,
      description: this.getExitDescription(code)
    };
  }

  getExitDescription(code) {
    if (code === 0) return 'EXIT_SUCCESS: Normal termination without errors';
    if (code === 1) return 'EXIT_FAILURE: General operational error';
    if (code === 127) return 'COMMAND_NOT_FOUND: Shell binary lookup failed';
    if (code === 137) return 'FATAL_SIGKILL: Process killed by OS Out-Of-Memory Killer (128 + 9)';
    return 'NON_ZERO_ERROR_CODE: Code ' + code;
  }
}

const proc = new VirtualProcess('order-processor');

console.log('=== Step 1: Program Loader Initializes Address Space ===');
const loadInfo = proc.loadBinary();
console.log('Process Phase :', proc.phase);
console.log('Total Space   :', loadInfo.totalVirtualKB, 'KB mapped into virtual memory');
console.log('Text Segment  : Read-Only (R-X) - Shared across concurrent instances');

console.log('\\n=== Step 2: Normal Exit Execution ===');
const successResult = proc.terminate(0);
console.log('Outcome       :', successResult.description);
console.log('Parent Status : Received exit status 0 (Verified Healthy)');

console.log('\\n=== Step 3: Out-Of-Memory Crash Scenario ===');
const crashResult = proc.terminate(137);
console.log('Outcome       :', crashResult.description);
console.log('Summary: Exit code 0 means success; non-zero indicates failure (137 = SIGKILL OOM).');`,
      caption: {
        en: 'The simulation traces virtual segment sizing and maps POSIX exit status conventions: 0 for success and 137 for OOM SIGKILL.',
        bn: 'সিমুলেশনটি মেমোরি সেগমেন্ট এবং পসিক্স এক্সিট কোড বিশ্লেষণ করে: সফলতার জন্য ০ এবং OOM সিগকিলের জন্য ১৩৭।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'POSIX Exit Status Codes: Why Zero Means Success',
        bn: 'পসিক্স এক্সিট স্ট্যাটাস কোড: কেন শূন্য মানে সফলতা'
      },
      text: {
        en: 'In Unix and POSIX operating systems, process exit status numbers are stored as an 8-bit unsigned integer ranging from 0 to 255. By universal convention, an exit code of 0 denotes complete success. Any non-zero integer represents a failure condition. For example, Exit 1 indicates runtime failure, Exit 2 indicates syntax error, Exit 127 indicates command not found, and Exit 137 indicates termination by the Linux Out-Of-Memory Killer (128 + 9 for SIGKILL).',
        bn: 'ইউনিক্স এবং পসিক্স অপারেটিং সিস্টেমে প্রসেস এক্সিট স্ট্যাটাস মূলত ০ থেকে ২৫৫ পর্যন্ত একটি ৮-বিট ইন্টিজারে সংরক্ষিত থাকে। আন্তর্জাতিক নিয়ম অনুযায়ী এক্সিট কোড ০ মানে সম্পূর্ণ সফল এক্সিকিউশন। যেকোনো নন-জিরো সংখ্যা ব্যর্থতা প্রকাশ করে। উদাহরণস্বরূপ, এক্সিট ১ সাধারণ ব্যর্থতা নির্দেশ করে, এক্সিট ২ সিনট্যাক্স ত্রুটি বোঝায়, এক্সিট ১২৭ মানে কমান্ড খুঁজে পাওয়া যায়নি এবং এক্সিট ১৩৭ মানে লিনাক্স OOM কিলার প্রসেস বন্ধ করেছে ( সিগকিল ৯ এর জন্য ১২৮ + ৯ )।',
      },
    },
  ],
  exercises: [
    {
      id: 'proc-life-ex-1',
      kind: 'predict',
      question: {
        en: 'What standard integer exit code indicates successful process completion without errors in POSIX systems? (0). Type the number.',
        bn: 'পসিক্স অপারেটিং সিস্টেমে কোনো ত্রুটি ছাড়া প্রসেস সফলভাবে সম্পন্ন হওয়া বোঝাতে কোন স্ট্যান্ডার্ড এক্সিট কোড ব্যবহৃত হয়? ( ০ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '0',
      hint: {
        en: 'Zero indicates complete success: 0.',
        bn: 'শূন্য নির্দেশ করে সম্পূর্ণ সফলতা: ০।'
      },
      explanation: {
        en: 'In POSIX systems, exit code 0 represents normal, healthy termination.',
        bn: 'পসিক্স সিস্টেমে এক্সিট কোড ০ মানে স্বাভাবিক ও সফল সমাপ্তি।'
      },
    },
    {
      id: 'proc-life-ex-2',
      kind: 'mcq',
      question: {
        en: 'Why is the Text (Code) segment of an executing process marked as Read-Only by the operating system kernel?',
        bn: 'একটি চলমান প্রসেসের টেক্সট ( কোড ) সেগমেন্টকে অপারেটিং সিস্টেম কার্নেল কেন কেবল রিড-অনলি হিসেবে চিহ্নিত করে?'
      },
      options: [
        {
          en: 'To prevent self-modifying code attacks and allow multiple running instances of the application to safely share the exact same physical RAM pages',
          bn: 'কোড পরিবর্তনজনিত আক্রমণ প্রতিহত করতে এবং একই অ্যাপ্লিকেশনের একাধিক ইনস্ট্যান্সকে ফিজিক্যাল মেমোরিতে নিরাপদে একই কোড পেজ শেয়ার করার সুযোগ দিতে',
        },
        {
          en: 'Because computer hardware cannot read words written in lowercase letters',
          bn: 'কারণ কম্পিউটার হার্ডওয়্যার ছোট হাতের অক্ষরে লেখা শব্দ পড়তে পারে না',
        },
        {
          en: 'To make the text segment lighter in physical weight on the desk',
          bn: 'ডেস্কের ওপর টেক্সট সেগমেন্টের শারীরিক ওজন হালকা করার উদ্দেশ্যে',
        },
        {
          en: 'Because computer monitors stop displaying text after 5 minutes',
          bn: 'কারণ কম্পিউটার মনিটর ৫ মিনিট পর কোনো লেখা প্রদর্শন করা বন্ধ করে দেয়',
        },
      ],
      answer: 0,
      hint: {
        en: 'Preventing malicious modifications and enabling shared physical code pages.',
        bn: 'কোড পরিবর্তন প্রতিরোধ এবং মেমোরিতে শেয়ার্ড কোড পেজ ব্যবহারের সুবিধা।',
      },
      explanation: {
        en: 'Read-only protection prevents memory corruption and enables the kernel to map multiple processes to identical code pages in RAM.',
        bn: 'রিড-অনলি সুরক্ষা মেমোরি নষ্ট হওয়া ঠেকায় এবং কার্নেলকে একাধিক প্রসেসের মাঝে একই কোড শেয়ার করার অনুমতি দেয়।'
      },
    },
    {
      id: 'proc-life-ex-3',
      kind: 'mcq',
      question: {
        en: 'What is the operational responsibility of the BSS segment in a process virtual address space?',
        bn: 'একটি প্রসেস ভার্চুয়াল মেমোরি স্পেসে BSS সেগমেন্টের কাজের দায়িত্ব কী?'
      },
      options: [
        {
          en: 'It reserves space for uninitialized global and static variables, which the operating system automatically zeroes out upon startup',
          bn: 'এটি মান নির্ধারণ না করা গ্লোবাল ও স্ট্যাটিক ভেরিয়েবলের জন্য জায়গা বরাদ্দ রাখে, যা সিস্টেম চালুর সময় কার্নেল স্বয়ংক্রিয়ভাবে শূন্য দিয়ে পূরণ করে',
        },
        {
          en: 'It stores high-resolution video games downloaded from the internet',
          bn: 'এটি ইন্টারনেট থেকে ডাউনলোড করা ভিডিও গেম সংরক্ষণ করে',
        },
        {
          en: 'It records voice audio messages spoken into the computer microphone',
          bn: 'এটি কম্পিউটারের মাইক্রোফোনে বলা ভয়েস অডিও রেকর্ড করে',
        },
        {
          en: 'It generates wireless Bluetooth connections to external headphones',
          bn: 'এটি হেডফোনের সাথে ওয়্যারলেস ব্লুটুথ সংযোগ তৈরি করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Reserving space for uninitialized globals that are zero-filled at startup.',
        bn: 'মানহীন গ্লোবাল ভেরিয়েবলের জায়গা যা শুরুতে শূন্য দিয়ে পূর্ণ করা হয়।',
      },
      explanation: {
        en: 'The BSS segment does not take up space in the disk binary; the OS simply allocates zeroed memory pages for it upon execution.',
        bn: 'BSS সেগমেন্ট ডিস্কের ফাইলে কোনো জায়গা নেয় না; ওএস প্রসেস চালুর সময় মেমোরিতে শূন্য দিয়ে এটি তৈরি করে।'
      },
    },
    {
      id: 'proc-life-ex-4',
      kind: 'predict',
      question: {
        en: 'If a Linux process is killed by the Out-Of-Memory Killer via SIGKILL (signal 9), what shell exit code integer is reported (128 + 9)? (137). Type the number.',
        bn: 'একটি লিনাক্স প্রসেস যদি মেমোরি ঘাটতির কারণে OOM কিলার দ্বারা সিগকিল ( সিগন্যাল ৯ ) দিয়ে বন্ধ হয়, তবে শেলের এক্সিট কোড কত হবে ( ১২৮ + ৯ )? ( ১৩৭ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '137',
      hint: {
        en: 'Add 128 to signal 9: 137.',
        bn: '১২৮ এর সাথে সিগন্যাল ৯ যোগ করুন: ১৩৭।'
      },
      explanation: {
        en: 'Fatal signal terminations report exit codes calculated as 128 plus the signal number. For SIGKILL (9), the exit code is 137.',
        bn: 'মারাত্মক সিগন্যালে বন্ধ হওয়া প্রসেসের এক্সিট কোড হয় ১২৮ এর সাথে সিগন্যাল নম্বর যোগ করে। সিগকিলের ( ৯ ) জন্য এটি হলো ১৩৭।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Process Lifecycle & Binary Loading Quiz',
      bn: 'প্রসেস জীবনচক্র এবং বাইনারি লোডিং কুইজ'
    },
    questions: [
      {
        id: 'proc-life-qz-1',
        kind: 'mcq',
        topic: 'elf-format-purpose',
        question: {
          en: 'What is the standard binary executable format utilized across modern Linux operating systems?',
          bn: 'আধুনিক লিনাক্স অপারেটিং সিস্টেমে স্ট্যান্ডার্ড বাইনারি এক্সিকিউটেবল ফরম্যাট কোনটি?'
        },
        options: [
          {
            en: 'Executable and Linkable Format (ELF), defining headers, segment offsets, and dynamic linking specifications',
            bn: 'Executable and Linkable Format (ELF), যা হেডার, সেগমেন্টের অবস্থান ও ডায়নামিক লিঙ্কিংয়ের বিবরণ সংরক্ষণ করে',
          },
          {
            en: 'Portable Document Format (PDF) used for printing books',
            bn: 'বই প্রিন্ট করার জন্য ব্যবহৃত পোর্টেবল ডকুমেন্ট ফরম্যাট (PDF)',
          },
          {
            en: 'Joint Photographic Experts Group (JPEG) used for photos',
            bn: 'ছবির জন্য ব্যবহৃত জয়েন্ট ফটোগ্রাফিক এক্সপার্ট গ্রুপ (JPEG)',
          },
          {
            en: 'MPEG Layer-3 Audio (MP3) used for recording music',
            bn: 'গান রেকর্ড করার জন্য ব্যবহৃত এমপিথ্রি (MP3) ফরম্যাট',
          },
        ],
        answer: 0,
        hint: {
          en: 'ELF is the standard binary format for Linux programs and shared objects.',
          bn: 'লিনাক্স প্রোগ্রাম ও শেয়ার্ড লাইব্রেরির স্ট্যান্ডার্ড বাইনারি ফরম্যাট হলো ELF।',
        },
        explanation: {
          en: 'Linux uses ELF for binaries, object files, and shared libraries (.so files).',
          bn: 'লিনাক্স সমস্ত বাইনারি, অবজেক্ট ফাইল এবং শেয়ার্ড লাইব্রেরির জন্য ELF ফরম্যাট ব্যবহার করে।'
        },
      },
      {
        id: 'proc-life-qz-2',
        kind: 'mcq',
        topic: 'execve-loader-role',
        question: {
          en: 'What core system actions does the operating system kernel perform when invoking the execve() system call?',
          bn: 'execve() সিস্টেম কল চালুর সময় অপারেটিং সিস্টেম কার্নেল কোন মূল কাজগুলো সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It replaces the current process memory space with a new program image, initializes text, data, bss, heap, and stack segments, and jumps to the binary entry point',
            bn: 'এটি বর্তমান প্রসেসের মেমোরিকে নতুন প্রোগ্রামের ইমেজ দিয়ে প্রতিস্থাপন করে, টেক্সট, ডাটা, BSS, হিপ ও স্ট্যাক সেগমেন্ট সাজায় এবং বাইনারির মূল এন্ট্রি পয়েন্টে চলে যায়',
          },
          {
            en: 'It orders pizza from an online delivery website automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে অনলাইন থেকে পিজ্জা অর্ডার করে',
          },
          {
            en: 'It formats all USB flash drives connected to the computer',
            bn: 'এটি কম্পিউটারে যুক্ত সমস্ত পেনড্রাইভ সম্পূর্ণ ফরম্যাট করে ফেলে',
          },
          {
            en: 'It turns on the computer webcam to record the room ceiling',
            bn: 'এটি ঘরের সিলিং রেকর্ড করার জন্য ওয়েবক্যাম চালু করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Replacing process memory with the new binary image and setting up segments.',
          bn: 'প্রসেসের পুরনো মেমোরি মুছে নতুন বাইনারি কোড ও সেগমেন্ট স্থাপন করা।',
        },
        explanation: {
          en: 'execve() loads the new binary into the current process address space, reinitializing segments while preserving the existing PID.',
          bn: 'execve() বর্তমান পিআইডি বজায় রেখে প্রসেসের মেমোরিতে নতুন প্রোগ্রাম লোড করে সেগমেন্টগুলো সাজিয়ে দেয়।'
        },
      },
      {
        id: 'proc-life-qz-3',
        kind: 'mcq',
        topic: 'text-segment-ram-sharing',
        question: {
          en: 'How can twenty separate instances of a web browser execute simultaneously without consuming twenty duplicate copies of the application code in RAM?',
          bn: 'একটি ওয়েব ব্রাউজারের ২০ টি পৃথক উইন্ডো র‍্যামে ২০ বার কোড ডুপ্লিকেট না করেই কীভাবে একই সাথে চলতে পারে?'
        },
        options: [
          {
            en: 'Because the Text segment is marked Read-Only, the virtual memory manager maps all 20 processes to the exact same physical DRAM pages for machine instructions',
            bn: 'যেহেতু টেক্সট সেগমেন্ট রিড-অনলি থাকে, তাই ভার্চুয়াল মেমোরি ম্যানেজার সমস্ত ২০ টি প্রসেসকে কোডের জন্য র‍্যামের হুবহু একই ফিজিক্যাল পেজে ম্যাপ করে দেয়',
          },
          {
            en: 'Because browsers delete their machine code after loading into memory',
            bn: 'কারণ ব্রাউজার মেমোরিতে লোড হওয়ার পর তাদের মেশিন কোড মুছে ফেলে',
          },
          {
            en: 'Because computer hardware compresses all text by 1000 percent',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার সমস্ত টেক্সটকে ১০০০ শতাংশ সংকুচিত করে ফেলে',
          },
          {
            en: 'Because only one instance is allowed to touch physical memory per minute',
            bn: 'কারণ প্রতি মিনিটে কেবল একটি উইন্ডোকে ফিজিক্যাল মেমোরি ছোঁয়ার অনুমতি দেওয়া হয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Read-only code pages are safely shared across all processes running that binary.',
          bn: 'রিড-অনলি কোড পেজ একই অ্যাপ্লিকেশনের সব প্রসেসের মাঝে শেয়ার করা থাকে।',
        },
        explanation: {
          en: 'Immutable text segments allow the OS to share code pages in DRAM, multiplying efficiency across concurrent processes.',
          bn: 'অপরিবর্তনীয় টেক্সট সেগমেন্ট ওএসকে র‍্যামে একই কোড শেয়ার করার সুযোগ দেয়, যা বিপুল পরিমাণ মেমোরি সাশ্রয় করে।'
        },
      },
      {
        id: 'proc-life-qz-4',
        kind: 'mcq',
        topic: 'exit-127-command-not-found',
        question: {
          en: 'What specific operational error does exit code 127 indicate in Unix command shells?',
          bn: 'ইউনিক্স কমান্ড শেলে এক্সিট কোড ১২৭ কোন নির্দিষ্ট ত্রুটি প্রকাশ করে?'
        },
        options: [
          {
            en: 'Command Not Found: The shell searched through all directories listed in the PATH environment variable and could not find an executable matching that name',
            bn: 'কমান্ড খুঁজে পাওয়া যায়নি: শেল PATH ভেরিয়েবলের সমস্ত ডিরেক্টরিতে খুঁজেও সেই নামের কোনো এক্সিকিউটেবল ফাইল পায়নি',
          },
          {
            en: 'The computer power supply is unplugged from the wall socket',
            bn: 'কম্পিউটার পাওয়ার সাপ্লাই দেয়ালের সকেট থেকে খুলে ফেলা হয়েছে',
          },
          {
            en: 'The printer has run out of physical paper and ink',
            bn: 'প্রিন্টারের সমস্ত কাগজ ও কালির কালি শেষ হয়ে গেছে',
          },
          {
            en: 'The software successfully passed all security audits with flying colors',
            bn: 'সফটওয়্যারটি কোনো ত্রুটি ছাড়াই সফলভাবে সমস্ত পরীক্ষায় উত্তীর্ণ হয়েছে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Exit 127 signifies that the requested command was not found in PATH.',
          bn: 'এক্সিট ১২৭ প্রকাশ করে যে কাঙ্ক্ষিত কমান্ডটি PATH-এ খুঁজে পাওয়া যায়নি।',
        },
        explanation: {
          en: 'Exit code 127 is reserved by POSIX shells to indicate that the requested executable could not be resolved or found.',
          bn: 'পসিক্স শেলে এক্সিট কোড ১২৭ সংরক্ষিত থাকে নির্দেশ করার জন্য যে কমান্ড বাইনারিটি সিস্টেমে অনুপস্থিত।'
        },
      },
    ],
  },
  next: {
    slug: 'fork-exec',
    title: {
      en: 'Fork & Exec: Process Creation & Memory Duplication',
      bn: 'Fork এবং Exec: প্রসেস সৃষ্টি এবং মেমোরি ডুপ্লিকেশন'
    },
  },
};
