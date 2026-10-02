import type { Lesson } from '../../../lib/types';

export const SystemCallsLesson: Lesson = {
  slug: 'system-calls',
  tech: 'operating-systems',
  title: {
    en: 'System Calls, Hardware Traps & User-Kernel Context Transitions',
    bn: 'সিস্টেম কল, হার্ডওয়্যার ট্র্যাপ এবং ইউজার-কার্নেল কনটেক্সট ট্রানজিশন',
  },
  summary: {
    en: 'Understand how user applications request privileged kernel services via software traps and the syscall assembly instruction. Trace register arguments, privilege ring elevation, interrupt descriptor tables (IDT), and glibc wrapper overhead with practical POSIX examples.',
    bn: 'সফটওয়্যার ট্র্যাপ এবং syscall অ্যাসেম্বলি নির্দেশের মাধ্যমে ব্যবহারকারী অ্যাপ্লিকেশন কীভাবে কার্নেল সেবার অনুরোধ জানায় তা বিশ্লেষণ করুন। বাস্তব পসিক্স উদাহরণের সাথে রেজিস্টার আর্গুমেন্ট, প্রিভিলেজ রিং পরিবর্তন, ইন্টারাপ্ট ডেসক্রিপ্টর টেবিল এবং গ্লিবসি র‍্যাপার ওভারহেড পর্যবেক্ষণ করুন।',
  },
  minutes: 18,
  next: {
    slug: 'files-permissions',
    title: {
      en: 'Filesystem Architecture, Inodes & File Permissions',
      bn: 'ফাইলসিস্টেম আর্কিটেকচার, ইনোড এবং ফাইল পারমিশন',
    },
  },
  blocks: [
    {
      type: 'heading',
      id: 'syscall-foundations',
      text: {
        en: 'The Software Trap Mechanism: Bridging Ring 3 and Ring 0',
        bn: 'সফটওয়্যার ট্র্যাপ কৌশল: রিং ৩ এবং রিং ০ এর সংযোগ',
      },
    },
    {
      type: 'para',
      text: {
        en: 'User-space applications run under unprivileged hardware restrictions (Ring 3). When an application needs to display characters on the monitor, read bytes from a physical storage drive, or open a network TCP socket, it cannot manipulate hardware registers directly. Instead, the application triggers a controlled CPU transition known as a software trap or system call (syscall). On modern x86_64 processors, the specialized syscall assembly instruction elevates the CPU execution privilege level to Ring 0.',
        bn: 'ইউজার-স্পেস অ্যাপ্লিকেশনগুলো সীমাবদ্ধ হার্ডওয়্যার অধিকারের ( রিং ৩ ) অধীনে চলে। যখন কোনো অ্যাপ্লিকেশন মনিটরে কিছু প্রদর্শন করতে চায়, ডিস্ক ড্রাইভ থেকে ডেটা পড়তে চায় কিংবা টিসিপি নেটওয়ার্ক সকেট খুলতে চায়, তখন সে সরাসরি হার্ডওয়্যারের সাথে যোগাযোগ করতে পারে না। এর পরিবর্তে অ্যাপ্লিকেশনটি সফটওয়্যার ট্র্যাপ বা সিস্টেম কলের (syscall) মাধ্যমে নিয়ন্ত্রিত সিপিইউ ট্রানজিশন শুরু করে। আধুনিক x86_64 প্রসেসরে বিশেষ syscall অ্যাসেম্বলি নির্দেশ সিপিইউর অধিকার রিং ৩ থেকে রিং ০ তে উন্নীত করে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Architecture of an x86_64 System Call Transition',
        bn: 'একটি x86_64 সিস্টেম কল ট্রানজিশনের আর্কিটেকচার',
      },
      svg: `<svg viewBox="0 0 800 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="userGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.22"/>
    </linearGradient>
    <linearGradient id="kernelGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.22"/>
    </linearGradient>
    <marker id="arrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
    <marker id="arrowDown" viewBox="0 0 10 10" refX="5" refY="6" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 1 0 L 5 8 L 9 0 z" fill="#dc2626"/>
    </marker>
    <marker id="arrowUp" viewBox="0 0 10 10" refX="5" refY="4" markerWidth="6" markerHeight="6" orient="auto">
      <path d="M 1 8 L 5 0 L 9 8 z" fill="#16a34a"/>
    </marker>
  </defs>

  <!-- User Space Region -->
  <rect x="30" y="25" width="740" height="150" rx="12" fill="url(#userGrad)" stroke="#3b82f6" stroke-width="2"/>
  <text x="50" y="55" font-size="16" font-weight="700" fill="#1d4ed8">USER SPACE (Ring 3 Unprivileged)</text>
  
  <rect x="50" y="75" width="190" height="80" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="65" y="105" font-size="14" font-weight="600" fill="#1e293b">Application Code</text>
  <text x="65" y="130" font-size="12" fill="#64748b">printf("Ready\\n");</text>

  <path d="M 240 115 L 290 115" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="300" y="75" width="200" height="80" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="315" y="105" font-size="14" font-weight="600" fill="#1e293b">glibc Standard Library</text>
  <text x="315" y="130" font-size="12" fill="#64748b">write(1, buf, 6)</text>

  <path d="M 500 115 L 550 115" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="560" y="75" width="190" height="80" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="575" y="100" font-size="13" font-weight="600" fill="#1e293b">CPU Register Setup</text>
  <text x="575" y="122" font-size="11" fill="#475569">RAX = 1 (sys_write)</text>
  <text x="575" y="140" font-size="11" fill="#475569">RDI=1, RSI=buf, RDX=6</text>

  <!-- Hardware Boundary -->
  <line x1="30" y1="205" x2="770" y2="205" stroke="#94a3b8" stroke-dasharray="6,6" stroke-width="2"/>
  <text x="320" y="200" font-size="12" font-weight="700" fill="#64748b" letter-spacing="1">HARDWARE BOUNDARY / CPU TRAP</text>

  <!-- Syscall down and return up arrows -->
  <path d="M 620 160 L 620 235" stroke="#dc2626" stroke-width="3" marker-end="url(#arrowDown)"/>
  <text x="630" y="205" font-size="12" font-weight="700" fill="#dc2626">syscall instruction</text>

  <path d="M 170 235 L 170 160" stroke="#16a34a" stroke-width="3" marker-end="url(#arrowUp)"/>
  <text x="90" y="205" font-size="12" font-weight="700" fill="#16a34a">sysretq return</text>

  <!-- Kernel Space Region -->
  <rect x="30" y="235" width="740" height="155" rx="12" fill="url(#kernelGrad)" stroke="#ef4444" stroke-width="2"/>
  <text x="50" y="265" font-size="16" font-weight="700" fill="#b91c1c">KERNEL SPACE (Ring 0 Privileged Supervisor Mode)</text>

  <rect x="50" y="285" width="200" height="85" rx="8" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="65" y="315" font-size="13" font-weight="600" fill="#1e293b">Entry Point (LSTAR MSR)</text>
  <text x="65" y="335" font-size="11" fill="#475569">Save user registers</text>
  <text x="65" y="353" font-size="11" fill="#475569">Switch to kernel stack</text>

  <path d="M 250 327 L 295 327" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="305" y="285" width="210" height="85" rx="8" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="320" y="315" font-size="13" font-weight="600" fill="#1e293b">sys_call_table[RAX]</text>
  <text x="320" y="335" font-size="11" fill="#475569">Lookup index RAX = 1</text>
  <text x="320" y="353" font-size="11" fill="#475569">Call ksys_write()</text>

  <path d="M 515 327 L 560 327" stroke="#475569" stroke-width="2" marker-end="url(#arrow)"/>

  <rect x="570" y="285" width="180" height="85" rx="8" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="585" y="315" font-size="13" font-weight="600" fill="#1e293b">Hardware Subsystem</text>
  <text x="585" y="335" font-size="11" fill="#475569">VFS / TTY driver</text>
  <text x="585" y="353" font-size="11" fill="#475569">Return byte count in RAX</text>
</svg>`,
      caption: {
        en: 'The step-by-step path of a system call from user-space application code, through standard library register preparation and hardware trap, down to kernel privilege verification and execution.',
        bn: 'ইউজার-স্পেস অ্যাপ্লিকেশন থেকে শুরু করে স্ট্যান্ডার্ড লাইব্রেরি রেজিস্টার বিন্যাস, হার্ডওয়্যার ট্র্যাপ এবং কার্নেল প্রিভিলেজ যাচাইকরণের ধাপভিত্তিক সিস্টেম কল প্রক্রিয়া।',
      },
    },
    {
      type: 'heading',
      id: 'dispatch-table-and-registers',
      text: {
        en: 'CPU Register Calling Conventions & the Dispatch Table',
        bn: 'সিপিইউ রেজিস্টার কলিং কনভেনশন এবং ডিসপ্যাচ টেবিল',
      },
    },
    {
      type: 'para',
      text: {
        en: 'On 64-bit Linux architectures (x86_64), the operating system establishes a strict calling convention for system calls. The syscall identifier is placed into the RAX register. Subsequent parameters are loaded into RDI (first input), RSI (second), RDX (third), R10 (fourth), R8 (fifth), and R9 (sixth slot). Notice that R10 replaces RCX because the syscall hardware instruction clobbers RCX by saving the user instruction pointer (RIP) into it.',
        bn: '৬৪-বিট লিনাক্স আর্কিটেকচারে (x86_64) সিস্টেম কলের জন্য একটি কঠোর কলিং কনভেনশন নির্ধারিত থাকে। সিস্টেম কল শনাক্তকারী নম্বরটি RAX রেজিস্টারে রাখা হয়। এরপর ক্রমানুসারে ইনপুটগুলো RDI (প্রথম মান), RSI (দ্বিতীয়), RDX (তৃতীয়), R10 (চতুর্থ), R8 (পঞ্চম) এবং R9 (ষষ্ঠ স্থান) রেজিস্টারে লোড করা হয়। এখানে লক্ষণীয় যে R10 রেজিস্টারটি RCX-এর বদলে ব্যবহৃত হয়, কারণ syscall হার্ডওয়্যার নির্দেশটি ব্যবহারকারীর ইন্সট্রাকশন পয়েন্টার (RIP) সেভ করার সময় RCX রেজিস্টারের মান পরিবর্তন করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic POSIX System Call Table & Register Dispatcher Simulation
const SYS_READ = 0;
const SYS_WRITE = 1;
const SYS_OPEN = 2;
const SYS_CLOSE = 3;

class KernelSyscallDispatcher {
  constructor() {
    this.dispatchTable = new Map([
      [SYS_READ, this.sysRead.bind(this)],
      [SYS_WRITE, this.sysWrite.bind(this)],
      [SYS_OPEN, this.sysOpen.bind(this)],
      [SYS_CLOSE, this.sysClose.bind(this)],
    ]);

    // Active file descriptor table (0: stdin, 1: stdout, 2: stderr)
    this.fdTable = new Map([
      [0, { name: 'stdin', readable: true, writable: false }],
      [1, { name: 'stdout', readable: false, writable: true }],
      [2, { name: 'stderr', readable: false, writable: true }],
    ]);
  }

  // Syscall handler: sys_write(unsigned int fd, const char *buf, size_t count)
  sysWrite(fd, buffer, count) {
    if (!this.fdTable.has(fd)) return -9; // -EBADF (Bad file descriptor)
    const descriptor = this.fdTable.get(fd);
    if (!descriptor.writable) return -9;
    if (typeof buffer !== 'string' || count < 0) return -14; // -EFAULT (Bad address)

    const bytesWritten = Math.min(buffer.length, count);
    return bytesWritten;
  }

  // Syscall handler: sys_read(unsigned int fd, char *buf, size_t count)
  sysRead(fd, buffer, count) {
    if (!this.fdTable.has(fd)) return -9; // -EBADF
    const descriptor = this.fdTable.get(fd);
    if (!descriptor.readable) return -9;
    return Math.min(count, 64);
  }

  // Syscall handler: sys_open(const char *filename, int flags)
  sysOpen(filename, flags) {
    if (!filename || typeof filename !== 'string') return -14; // -EFAULT
    const allocatedFd = this.fdTable.size;
    this.fdTable.set(allocatedFd, {
      name: filename,
      readable: true,
      writable: (flags & 1) !== 0,
    });
    return allocatedFd;
  }

  // Syscall handler: sys_close(unsigned int fd)
  sysClose(fd) {
    if (fd <= 2 || !this.fdTable.has(fd)) return -9; // Protected standard streams
    this.fdTable.delete(fd);
    return 0;
  }

  // CPU Trap Entry Point: Evaluates registers passed during 'syscall' instruction
  handleTrap(registers) {
    const { rax, rdi, rsi, rdx } = registers;
    const handler = this.dispatchTable.get(rax);
    if (!handler) {
      return -38; // -ENOSYS (Function not implemented)
    }
    // Execute privileged routine inside Ring 0
    return handler(rdi, rsi, rdx);
  }
}

// Instantiate Kernel and dispatch requests
const kernel = new KernelSyscallDispatcher();

// 1. Invoking sys_write on stdout (fd = 1)
const writeResult = kernel.handleTrap({
  rax: SYS_WRITE,
  rdi: 1,
  rsi: 'Operating Systems Kernel Internals',
  rdx: 34,
});

// 2. Invoking sys_open for a new file descriptor
const openResult = kernel.handleTrap({
  rax: SYS_OPEN,
  rdi: '/var/log/syslog',
  rsi: 1, // Write-enabled flag
  rdx: 0,
});

// 3. Invoking sys_write with an invalid file descriptor (fd = 99)
const invalidFdResult = kernel.handleTrap({
  rax: SYS_WRITE,
  rdi: 99,
  rsi: 'Data Packet',
  rdx: 11,
});

console.log('sys_write bytes written:', writeResult);
console.log('sys_open assigned fd:', openResult);
console.log('sys_write invalid fd errno:', invalidFdResult);`,
      caption: {
        en: 'Deterministic simulation of the kernel system call table, validating file descriptors, verifying buffer pointers, and returning POSIX error codes.',
        bn: 'কার্নেল সিস্টেম কল টেবিলের সিমুলেশন যা ফাইল ডেসক্রিপ্টর ও বাফার পয়েন্টার যাচাই করে সঠিক পসিক্স এরর কোড প্রদান করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'System Call',
          def: {
            en: 'The standardized programmatic interface through which unprivileged user-mode processes request privileged kernel-mode operations.',
            bn: 'স্ট্যান্ডার্ড প্রোগ্রাম্যাটিক ইন্টারফেস যার মাধ্যমে সাধারণ ইউজার-মোড প্রসেসগুলো কার্নেল-মোডের বিশেষ অধিকারপ্রাপ্ত সেবার অনুরোধ জানায়।',
          },
        },
        {
          term: 'Software Trap',
          def: {
            en: 'A synchronous CPU exception triggered by an instruction such as syscall or int 0x80 to shift processor execution privileges from Ring 3 to Ring 0.',
            bn: 'একটি সিঙ্ক্রোনাস সিপিইউ এক্সেপশন যা syscall বা int 0x80 নির্দেশের মাধ্যমে প্রসেসরের অধিকার রিং ৩ থেকে রিং ০-তে পরিবর্তন করে।',
          },
        },
        {
          term: 'sys_call_table',
          def: {
            en: 'An internal kernel array of function pointers indexed by system call numbers (such as sys_read=0 and sys_write=1) to dispatch incoming traps.',
            bn: 'কার্নেলের অভ্যন্তরীণ ফাংশন পয়েন্টার অ্যারে যা সিস্টেম কল নম্বর ( যেমন sys_read এর জন্য ০ এবং sys_write এর জন্য ১ ) দিয়ে ইনডেক্স করে সংশ্লিষ্ট কার্নেল ফাংশন চালু করে।',
          },
        },
        {
          term: 'glibc Wrapper',
          def: {
            en: 'User-space C library routines that assemble CPU register inputs, execute the trap instruction, and translate negative kernel return codes into errno variables.',
            bn: 'ইউজার-স্পেস সি লাইব্রেরি ফাংশন যা সিপিইউ রেজিস্টার প্রস্তুত করে ট্র্যাপ চালায় এবং কার্নেলের নেগেটিভ রিটার্ন কোডকে errno ভেরিয়েবলে রূপান্তর করে।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'System calls carry execution overhead (typically 70 to 150 nanoseconds) because the CPU must flush instruction pipelines, save register context, and switch memory page protection structures. High-performance software architectures use techniques like ring buffers with io_uring or batched epoll calls to eliminate millions of redundant trap transitions.',
        bn: 'প্রতিটি সিস্টেম কলে অতিরিক্ত সময় বা ওভারহেড (সাধারণত ৭০ থেকে ১৫০ ন্যানোসেকেন্ড) লাগে, কারণ সিপিইউকে ইন্সট্রাকশন পাইপলাইন খালি করতে হয়, রেজিস্টার কনটেক্সট সংরক্ষণ করতে হয় এবং মেমোরি সুরক্ষা স্তর বদলাতে হয়। তাই উচ্চ-গতির সফটওয়্যারগুলো অপ্রয়োজনীয় ট্র্যাপ কমাতে io_uring কিংবা ব্যাচড epoll প্রযুক্তি ব্যবহার করে।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-syscall-ex-1',
          kind: 'predict',
          question: {
            en: 'On modern 64-bit x86_64 Linux architectures, which CPU register must hold the numeric system call identifier before issuing the syscall instruction?',
            bn: 'আধুনিক ৬৪-বিট x86_64 লিনাক্স আর্কিটেকচারে syscall নির্দেশ চালানোর আগে কোন সিপিইউ রেজিস্টারে সিস্টেম কলের সংখ্যাসূচক নম্বরটি লোড করতে হয়?',
          },
          answer: 'RAX',
          hint: {
            en: 'It is the primary accumulator register used for syscall numbers and function return values.',
            bn: 'এটি প্রধান অ্যাকুমুলেটর রেজিস্টার যা সিস্টেম কল নম্বর এবং রিটার্ন মান বহন করে।',
          },
          explanation: {
            en: 'The Linux x86_64 ABI mandates that the system call number is passed in the RAX register (for example, 0 for sys_read and 1 for sys_write).',
            bn: 'লিনাক্স x86_64 এবিআই অনুযায়ী সিস্টেম কল নম্বরটি RAX রেজিস্টারে পাঠাতে হয় ( যেমন sys_read এর জন্য ০ এবং sys_write এর জন্য ১ নির্দেশ করে )।',
          },
        },
        {
          id: 'os-syscall-ex-2',
          kind: 'mcq',
          question: {
            en: 'What occurs if an unprivileged user-mode application supplies a pointer containing a raw kernel memory address to a read() system call?',
            bn: 'যদি কোনো ইউজার-মোড অ্যাপ্লিকেশন read() সিস্টেম কলে এমন একটি বাফার পয়েন্টার পাঠায় যা কার্নেল মেমোরিকে নির্দেশ করে, তবে কী ঘটবে?',
          },
          options: [
            {
              en: 'The kernel validates the pointer with copy_from_user, detects unauthorized address access, and safely returns -EFAULT (error 14) without crashing the OS',
              bn: 'কার্নেল copy_from_user দিয়ে পয়েন্টারটি যাচাই করে অনুমতিহীন ঠিকানা শনাক্ত করে এবং ক্র্যাশ না করে নিরাপদে -EFAULT (এরর ১৪) ফেরত দেয়',
            },
            {
              en: 'The CPU immediately powers off to protect persistent storage from physical voltage damage',
              bn: 'সিপিইউ স্থায়ী স্টোরেজ বাঁচাতে সাথে সাথে বিদ্যুৎ সংযোগ বন্ধ করে দেয়',
            },
            {
              en: 'The user application is granted kernel administrator privileges permanently',
              bn: 'ইউজার অ্যাপ্লিকেশনটিকে স্থায়ীভাবে কার্নেল অ্যাডমিনিস্ট্রেটরের পূর্ণ ক্ষমতা প্রদান করা হয়',
            },
            {
              en: 'The operating system ignores the pointer and outputs random ASCII characters to the console',
              bn: 'অপারেটিং সিস্টেম পয়েন্টারটি উপেক্ষা করে কনসোলে এলোমেলো বর্ণ প্রদর্শন করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'The kernel never trusts user-space memory pointers blindly; address boundary checks are strictly enforced.',
            bn: 'কার্নেল কখনোই ইউজার মেমোরির পয়েন্টার অন্ধভাবে বিশ্বাস করে না; সীমানা কঠোরভাবে যাচাই করা হয়।',
          },
          explanation: {
            en: 'The kernel performs strict memory address verification via helper functions like copy_to_user and copy_from_user. If the pointer points to kernel space, it returns -EFAULT (errno 14).',
            bn: 'কার্নেল copy_to_user এবং copy_from_user দিয়ে মেমোরি ঠিকানা কঠোরভাবে পরীক্ষা করে। পয়েন্টারটি অবৈধ হলে এটি নিরাপদভাবে -EFAULT (errno ১৪) রিটার্ন করে।',
          },
        },
        {
          id: 'os-syscall-ex-3',
          kind: 'mcq',
          question: {
            en: 'Why do production software developers interact with standard library functions (like glibc write()) rather than writing manual inline assembly traps?',
            bn: 'প্রোডাকশন সফটওয়্যার ডেভেলপাররা সরাসরি অ্যাসেম্বলি ট্র্যাপ না লিখে কেন গ্লিবসি write()-এর মতো স্ট্যান্ডার্ড লাইব্রেরি ফাংশন ব্যবহার করেন?',
          },
          options: [
            {
              en: 'Standard libraries abstract machine-specific register layouts, manage POSIX errno translation, and provide cross-platform portability across CPU architectures',
              bn: 'স্ট্যান্ডার্ড লাইব্রেরি সিপিইউ ভেদে রেজিস্টারের বিন্যাস সামলায়, পসিক্স errno রূপান্তর করে এবং বিভিন্ন প্ল্যাটফর্মে কোডের বহনযোগ্যতা নিশ্চিত করে',
            },
            {
              en: 'Writing inline assembly instructions in user space causes immediate permanent motherboard short circuits',
              bn: 'ইউজার স্পেসে ইনলাইন অ্যাসেম্বলি লিখলে সাথে সাথে মাদারবোর্ডে শর্ট সার্কিট সৃষ্টি হয়',
            },
            {
              en: 'Modern operating systems have completely deleted the underlying syscall hardware instruction from modern microprocessors',
              bn: 'আধুনিক অপারেটিং সিস্টেমগুলো প্রসেসর থেকে সিস্টেম কল হার্ডওয়্যার নির্দেশ সম্পূর্ণভাবে মুছে ফেলেছে',
            },
            {
              en: 'Standard C library functions run entirely in hardware ROM without using physical RAM',
              bn: 'স্ট্যান্ডার্ড সি লাইব্রেরি ফাংশনগুলো ফিজিক্যাল র‍্যাম ব্যবহার না করে সরাসরি রম-এ চলে',
            },
          ],
          answer: 0,
          hint: {
            en: 'Different architectures (such as ARM64 vs x86_64) use completely different registers and trap instructions.',
            bn: 'বিভিন্ন আর্কিটেকচার (যেমন ARM64 এবং x86_64) সম্পূর্ণ ভিন্ন রেজিস্টার ও ট্র্যাপ নির্দেশ ব্যবহার করে।',
          },
          explanation: {
            en: 'Glibc abstracts hardware differences: x86_64 uses the syscall instruction while ARM64 uses svc #0. Portable code relies on libc wrappers to preserve architecture neutrality.',
            bn: 'গ্লিবসি হার্ডওয়্যারের পার্থক্য আড়াল করে: x86_64 ব্যবহার করে syscall নির্দেশ এবং ARM64 ব্যবহার করে svc #0। লাইব্রেরি ব্যবহারের ফলে প্রোগ্রাম সর্বত্র চলে।',
          },
        },
        {
          id: 'os-syscall-ex-4',
          kind: 'predict',
          question: {
            en: 'Predict the numerical return value of a successful sys_write(1, "OS", 2) invocation that completes writing both bytes to standard output.',
            bn: 'স্ট্যান্ডার্ড আউটপুটে সফলভাবে দুটি বাইট লেখার পর sys_write(1, "OS", 2) কলটি কোন সংখ্যাটি রিটার্ন করবে তা অনুমান করুন।',
          },
          answer: '2',
          hint: {
            en: 'A successful write system call returns the total number of bytes transferred.',
            bn: 'সফল রাইট সিস্টেম কল স্থানান্তরিত হওয়া মোট বাইটের সংখ্যাটি ফেরত দেয়।',
          },
          explanation: {
            en: 'POSIX specification mandates that sys_write returns the number of bytes actually written on success, which equals 2 in this instance.',
            bn: 'পসিক্স স্পেসিফিকেশন অনুযায়ী সফল sys_write কল স্থানান্তরিত বাইটের সংখ্যা ফেরত দেয়, যা এক্ষেত্রে ২।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'System Calls & Hardware Traps Knowledge Check',
      bn: 'সিস্টেম কল এবং হার্ডওয়্যার ট্র্যাপ জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-syscall-qz-1',
          kind: 'mcq',
          topic: 'cpu-privilege-elevation',
          question: {
            en: 'How does the central processing unit elevate privilege from Ring 3 to Ring 0 when a system call instruction executes?',
            bn: 'সিস্টেম কল নির্দেশ কার্যকর হলে সেন্ট্রাল প্রসেসিং ইউনিট কীভাবে তার অধিকার রিং ৩ থেকে রিং ০ স্তরে উন্নীত করে?'
          },
          options: [
            {
              en: 'The hardware switches processor privilege flags, saves the instruction pointer, and branches to the kernel entry address stored in dedicated model-specific registers',
              bn: 'হার্ডওয়্যার প্রসেসরের প্রিভিলেজ ফ্ল্যাগ পরিবর্তন করে, ইন্সট্রাকশন পয়েন্টার সংরক্ষণ করে এবং ডেডিকেটেড এমএসআর রেজিস্টারে থাকা কার্নেল অ্যাড্রেসে চলে যায়',
            },
            {
              en: 'The application process reboots the physical motherboard and flashes BIOS firmware in real time',
              bn: 'অ্যাপ্লিকেশন প্রসেসটি মাদারবোর্ড রিবুট করে এবং সরাসরি বায়োস ফার্মওয়্যার পরিবর্তন করে',
            },
            {
              en: 'The compiler sends a TCP handshake request to an external cloud authorization server',
              bn: 'কম্পাইলার দূরবর্তী ক্লাউড সার্ভারে একটি টিসিপি সংযোগ অনুরোধ পাঠিয়ে অনুমতি গ্রহণ করে',
            },
            {
              en: 'The user is prompted with a graphical modal dialog requiring a system administrator password for each byte',
              bn: 'প্রতিটি বাইটের জন্য ব্যবহারকারীর সামনে গ্রাফিক্যাল উইন্ডো খুলে পাসওয়ার্ড চাওয়া হয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Privilege transition is handled entirely by silicon processor circuitry without executing arbitrary user code.',
            bn: 'অধিকারের পরিবর্তন সম্পূর্ণ প্রসেসর সিলিকন দ্বারা নিয়ন্ত্রিত হয় এবং কোনো অবাধ কোড চলতে দেয় না।',
          },
          explanation: {
            en: 'The CPU hardware updates its internal privilege bits, switches from the user stack to the kernel stack, and jumps to the address loaded in MSR_LSTAR by the kernel during initialization.',
            bn: 'সিপিইউ হার্ডওয়্যার তার অভ্যন্তরীণ বিট হালনাগাদ করে, ইউজার স্ট্যাক থেকে কার্নেল স্ট্যাকে যায় এবং MSR_LSTAR-এ থাকা কার্নেল ঠিকানায় জাম্প করে।',
          },
        },
        {
          id: 'os-syscall-qz-2',
          kind: 'mcq',
          topic: 'instruction-architecture',
          question: {
            en: 'Which modern assembly instruction replaced the legacy software interrupt "int 0x80" on 64-bit x86 systems to provide faster privilege transitions?',
            bn: '৬৪-বিট x86 সিস্টেমে দ্রুত প্রিভিলেজ পরিবর্তনের জন্য প্রাচীন সফটওয়্যার ইন্টারাপ্ট "int 0x80"-এর পরিবর্তে কোন আধুনিক অ্যাসেম্বলি নির্দেশ ব্যবহৃত হয়?'
          },
          options: [
            {
              en: 'syscall (paired with sysretq for return)',
              bn: 'syscall (ফিরে আসার জন্য sysretq সহ)',
            },
            {
              en: 'goto_kernel_privilege',
              bn: 'goto_kernel_privilege নির্দেশ',
            },
            {
              en: 'bios_interrupt_vector_33',
              bn: 'bios_interrupt_vector_33 নির্দেশ',
            },
            {
              en: 'exec_super_user_call',
              bn: 'exec_super_user_call নির্দেশ',
            },
          ],
          answer: 0,
          hint: {
            en: 'Modern AMD and Intel CPUs provide a dedicated single instruction that bypasses the legacy IDT descriptor lookup.',
            bn: 'আধুনিক এএমডি এবং ইন্টেল সিপিইউ প্রাচীন আইডিটি টেবিল খোঁজা বাদ দিয়ে দ্রুত ট্রানজিশনের জন্য একটি একক নির্দেশ প্রদান করে।',
          },
          explanation: {
            en: 'The syscall instruction was engineered specifically for fast transitions without the heavy IDT descriptor table validation overhead of legacy int 0x80.',
            bn: 'syscall নির্দেশটি বিশেষভাবে দ্রুত কাজের জন্য তৈরি, যা প্রাচীন int 0x80-এর মতো ভারী আইডিটি টেবিল খোঁজার সময় নষ্ট করে না।',
          },
        },
        {
          id: 'os-syscall-qz-3',
          kind: 'mcq',
          topic: 'error-handling-errno',
          question: {
            en: 'When a Linux system call encounters an error condition inside the kernel, how does it communicate this failure back to standard C library callers?',
            bn: 'লিনাক্স সিস্টেমে কার্নেলের ভেতরে কোনো ত্রুটি বা ব্যর্থতা ঘটলে তা কীভাবে স্ট্যান্ডার্ড সি লাইব্রেরি ফাংশনে জানানো হয়?'
          },
          options: [
            {
              en: 'The kernel places a negative error code (such as -EBADF or -EPERM) into RAX, which the library wrapper converts to -1 while setting the global errno variable',
              bn: 'কার্নেল RAX রেজিস্টারে নেগেটিভ এরর কোড (যেমন -EBADF বা -EPERM) ফেরত দেয়, যা লাইব্রেরি র‍্যাপার -১ এ রূপান্তর করে এবং গ্লোবাল errno সেট করে',
            },
            {
              en: 'The kernel immediately kills the entire operating system and displays a blue screen',
              bn: 'কার্নেল তাৎক্ষণিকভাবে পুরো অপারেটিং সিস্টেম বন্ধ করে ব্লু-স্ক্রিন প্রদর্শন করে',
            },
            {
              en: 'The kernel returns a null pointer and restarts the central processing unit',
              bn: 'কার্নেল একটি নাল পয়েন্টার পাঠায় এবং সেন্ট্রাল প্রসেসিং ইউনিট পুনরায় চালু করে',
            },
            {
              en: 'The operating system prints the stack trace to an external thermal receipt printer',
              bn: 'অপারেটিং সিস্টেম প্রিন্টারে একটি স্ট্যাক ট্রেস প্রিন্ট করে পাঠিয়ে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'The negative integer corresponds to POSIX error codes defined in errno.h.',
            bn: 'ঋণাত্মক সংখ্যাটি errno.h ফাইলে সংজ্ঞায়িত পসিক্স এরর কোডগুলোর সাথে মিলে যায়।',
          },
          explanation: {
            en: 'Kernel routines return negative values in the range -1 to -4095. The glibc wrapper extracts this value, sets the process errno variable to the positive equivalent, and returns -1 to caller code.',
            bn: 'কার্নেল -১ থেকে -৪০৯৫ সীমার মধ্যে নেগেটিভ মান পাঠায়। গ্লিবসি একে ধনাত্মক মানে রূপান্তর করে errno ভেরিয়েবলে বসায় এবং ফাংশন থেকে -১ রিটার্ন করে।',
          },
        },
        {
          id: 'os-syscall-qz-4',
          kind: 'mcq',
          topic: 'asynchronous-batching-iouring',
          question: {
            en: 'Which modern Linux kernel interface introduces shared memory submission and completion rings to execute thousands of I/O operations without recurring syscall trap overhead?',
            bn: 'কোন আধুনিক লিনাক্স কার্নেল ইন্টারফেস শেয়ার্ড মেমোরি সাবমিশন ও কমপ্লিশন রিং ব্যবহার করে বারবার সিস্টেম কল ট্র্যাপ ছাড়াই হাজার হাজার আই/ও অপারেশন সম্পন্ন করে?'
          },
          options: [
            {
              en: 'io_uring',
              bn: 'io_uring ইন্টারফেস',
            },
            {
              en: 'sync_direct_trap',
              bn: 'sync_direct_trap ইন্টারফেস',
            },
            {
              en: 'kernel_batch_poller',
              bn: 'kernel_batch_poller ইন্টারফেস',
            },
            {
              en: 'hardware_speed_accelerator',
              bn: 'hardware_speed_accelerator ইন্টারফেস',
            },
          ],
          answer: 0,
          hint: {
            en: 'Introduced by Jens Axboe in Linux 5.1, it has transformed modern Linux high-throughput asynchronous network and storage programming.',
            bn: 'লিনাক্স ৫.১ সংস্করণে যুক্ত এই প্রযুক্তি উচ্চ-গতির নেটওয়ার্ক ও স্টোরেজ প্রোগ্রামিংয়ে আমূল পরিবর্তন এনেছে।',
          },
          explanation: {
            en: 'io_uring sets up lockless ring buffers in memory shared between user space and kernel space, allowing batched asynchronous requests without per-operation context switches.',
            bn: 'io_uring ইউজার এবং কার্নেল স্পেসের মাঝে শেয়ার্ড মেমোরিতে লকহীন রিং বাফার তৈরি করে, যার ফলে প্রতি অপারেশনের জন্য কনটেক্সট সুইচের প্রয়োজন হয় না।',
          },
        },
    ],
  },
};
