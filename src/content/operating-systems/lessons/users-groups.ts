import type { Lesson } from '../../../lib/types';

export const UsersGroupsLesson: Lesson = {
  slug: 'users-groups',
  tech: 'operating-systems',
  title: {
    en: 'Process Isolation, User Contexts & Multi-Tenant Security',
    bn: 'প্রসেস আইসোলেশন, ইউজার কনটেক্সট এবং মাল্টি-টেন্যান্ট সিকিউরিটি',
  },
  summary: {
    en: 'Understand how modern operating systems implement multi-tenant process isolation using POSIX credentials: Real UID (RUID), Effective UID (EUID), Saved UID (SUID), and supplementary groups. Master privilege dropping in servers, sudo elevation, setuid binaries, and Linux namespaces.',
    bn: 'পসিক্স ক্রেডেনশিয়ালস: রিয়েল ইউআইডি (RUID), ইফেক্টিভ ইউআইডি (EUID), সেভড ইউআইডি (SUID) এবং সাপ্লিমেন্টারি গ্রুপের মাধ্যমে আধুনিক অপারেটিং সিস্টেম কীভাবে মাল্টি-টেন্যান্ট প্রসেস আইসোলেশন নিশ্চিত করে তা জানুন। সার্ভারে প্রিভিলেজ ড্রপিং, সুডু এলিভেশন, সেট-ইউআইডি বাইনারি এবং লিনাক্স নেমস্পেস আয়ত্ত করুন।',
  },
  minutes: 20,
  next: {
    slug: 'scheduling-basics',
    title: {
      en: 'CPU Scheduling Algorithms & Preemptive Multitasking',
      bn: 'সিপিইউ শিডিউলিং অ্যালগরিদম এবং প্রি-এম্পটিভ মাল্টিটাস্কিং',
    },
  },
  blocks: [
    {
      type: 'heading',
      id: 'posix-credentials-architecture',
      text: {
        en: 'Multi-Tenant Security & The POSIX Credential Model',
        bn: 'মাল্টি-টেন্যান্ট সিকিউরিটি এবং পসিক্স ক্রেডেনশিয়াল মডেল',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Multi-user operating systems protect processes and resources from mutual interference by assigning each task a security context. When the kernel spawns a process, it maintains three distinct User Identifiers (UIDs). The Real UID (RUID) marks who launched it, the Effective UID (EUID) governs access checks, and the Saved UID (SUID) allows privilege restoration. While root carries UID 0 with universal bypass rights, normal human users start at UID 1000 on modern Linux distributions.',
        bn: 'মাল্টি-ইউজার অপারেটিং সিস্টেম প্রতিটি টাস্কের সাথে একটি নিরাপত্তা ক্রেডেনশিয়াল যুক্ত করে অনাকাঙ্ক্ষিত হস্তক্ষেপ প্রতিহত করে। কার্নেল যখন কোনো প্রসেস চালু করে, তখন সে ৩ টি স্বতন্ত্র ইউজার আইডেন্টিফায়ার (UID) বজায় রাখে। রিয়েল ইউআইডি (RUID) প্রোগ্রামটি চালু করা অ্যাকাউন্ট নির্দেশ করে, ইফেক্টিভ ইউআইডি (EUID) পারমিশন যাচাইয়ের জন্য ব্যবহৃত হয় এবং সেভড ইউআইডি (SUID) অধিকার পরিবর্তনের পর পূর্বাবস্থায় ফিরতে সাহায্য করে। সুপারইউজার রুটের UID থাকে ০ যার সীমাহীন ক্ষমতা রয়েছে, আর আধুনিক লিনাক্স সিস্টেমে সাধারণ ব্যবহারকারীদের UID শুরু হয় ১০০০ থেকে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Process Credential Lifecycle: Standard vs Setuid vs Dropped Privilege',
        bn: 'প্রসেস ক্রেডেনশিয়াল জীবনচক্র: স্ট্যান্ডার্ড, সেট-ইউআইডি এবং ড্রপড প্রিভিলেজ',
      },
      svg: `<svg viewBox="0 0 820 420" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="normGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="suidGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#d97706" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="dropGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#059669" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="credArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Scenario 1: Standard Unprivileged Process -->
  <rect x="30" y="30" width="230" height="360" rx="10" fill="url(#normGrad)" stroke="#2563eb" stroke-width="2"/>
  <text x="45" y="60" font-size="14" font-weight="700" fill="#1e40af">1. STANDARD PROCESS</text>
  <text x="45" y="80" font-size="11" fill="#64748b">(e.g. bash or editor)</text>

  <rect x="45" y="100" width="200" height="85" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="55" y="125" font-size="12" font-weight="700" fill="#0f172a">Launched by User (UID 1000)</text>
  <text x="55" y="145" font-size="11" fill="#334155">RUID: 1000 (Owner)</text>
  <text x="55" y="163" font-size="11" fill="#334155">EUID: 1000 (Checked)</text>
  <text x="55" y="180" font-size="11" fill="#334155">SUID: 1000 (Saved)</text>

  <rect x="45" y="200" width="200" height="70" rx="6" fill="#ffffff" stroke="#93c5fd" stroke-width="1.5"/>
  <text x="55" y="225" font-size="12" font-weight="600" fill="#0f172a">Kernel Evaluation</text>
  <text x="55" y="245" font-size="11" fill="#16a34a">Access User Files: YES</text>
  <text x="55" y="262" font-size="11" fill="#dc2626">Access /etc/shadow: NO</text>

  <!-- Scenario 2: Setuid Binary -->
  <rect x="295" y="30" width="230" height="360" rx="10" fill="url(#suidGrad)" stroke="#d97706" stroke-width="2"/>
  <text x="310" y="60" font-size="14" font-weight="700" fill="#92400e">2. SETUID BINARY</text>
  <text x="310" y="80" font-size="11" fill="#64748b">(e.g. /usr/bin/passwd mode 4755)</text>

  <rect x="310" y="100" width="200" height="85" rx="6" fill="#ffffff" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="320" y="125" font-size="12" font-weight="700" fill="#0f172a">SUID Elevation</text>
  <text x="320" y="145" font-size="11" fill="#334155">RUID: 1000 (User who ran it)</text>
  <text x="320" y="163" font-size="11" fill="#b45309">EUID: 0 (Elevated to root)</text>
  <text x="320" y="180" font-size="11" fill="#b45309">SUID: 0 (Preserved root)</text>

  <rect x="310" y="200" width="200" height="70" rx="6" fill="#ffffff" stroke="#fcd34d" stroke-width="1.5"/>
  <text x="320" y="225" font-size="12" font-weight="600" fill="#0f172a">Kernel Evaluation</text>
  <text x="320" y="245" font-size="11" fill="#16a34a">Write /etc/shadow: YES</text>
  <text x="320" y="262" font-size="11" fill="#475569">Targeted root task done</text>

  <!-- Scenario 3: Privilege Dropping -->
  <rect x="560" y="30" width="230" height="360" rx="10" fill="url(#dropGrad)" stroke="#059669" stroke-width="2"/>
  <text x="575" y="60" font-size="14" font-weight="700" fill="#065f46">3. PRIVILEGE DROPPING</text>
  <text x="575" y="80" font-size="11" fill="#64748b">(e.g. Nginx / PostgreSQL daemon)</text>

  <rect x="575" y="100" width="200" height="85" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="585" y="125" font-size="12" font-weight="700" fill="#0f172a">Bind Port 80 as Root</text>
  <text x="585" y="145" font-size="11" fill="#334155">RUID: 0 -> Drop to 33</text>
  <text x="585" y="163" font-size="11" fill="#047857">EUID: 0 -> Drop to 33</text>
  <text x="585" y="180" font-size="11" fill="#047857">Permanent unprivileged</text>

  <rect x="575" y="200" width="200" height="70" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="585" y="225" font-size="12" font-weight="600" fill="#0f172a">Kernel Evaluation</text>
  <text x="585" y="245" font-size="11" fill="#16a34a">Serve HTTP Clients: YES</text>
  <text x="585" y="262" font-size="11" fill="#dc2626">Compromise System: BLOCKED</text>
</svg>`,
      caption: {
        en: 'The three POSIX identity patterns: standard execution with matching UIDs, temporary elevation via setuid binaries, and production daemon privilege dropping to unprivileged service accounts.',
        bn: 'পসিক্স আইডেন্টিটির ৩ টি প্যাটার্ন: একই ইউআইডিতে সাধারণ এক্সিকিউশন, সেট-ইউআইডি বাইনারির মাধ্যমে সাময়িক অধিকার বৃদ্ধি এবং প্রোডাকশন ডেমন দ্বারা সাধারণ অ্যাকাউন্টে প্রিভিলেজ ড্রপিং।',
      },
    },
    {
      type: 'heading',
      id: 'privilege-dropping-simulation',
      text: {
        en: 'Privilege Dropping & Credential State Transitions',
        bn: 'প্রিভিলেজ ড্রপিং এবং ক্রেডেনশিয়াল স্টেট ট্রানজিশন',
      },
    },
    {
      type: 'para',
      text: {
        en: 'In production server architecture, security dictates the principle of least privilege. Network services like Nginx or PostgreSQL must start as UID 0 to bind privileged network ports below 1024 (such as port 80 or 443) or read TLS private certificates. However, immediately after socket initialization, the master process spawns worker processes and permanently drops their Effective UID and Real UID to an unprivileged service account like www-data (UID 33). If an attacker achieves remote code execution in the worker, the kernel strictly blocks access to host configuration and sensitive credentials.',
        bn: 'প্রোডাকশন সার্ভার আর্কিটেকচারে নিরাপত্তার জন্য সর্বনিম্ন অধিকার নীতি অনুসৃত হয়। Nginx বা PostgreSQL এর মতো নেটওয়ার্ক সেবাগুলোকে রুট হিসেবে ( UID ০ ) শুরু হতে হয় যেন ১০২৪ এর নিচের প্রটেক্টেড পোর্ট ( যেমন পোর্ট ৮০ বা ৪৪৩ ) খোলা যায়। কিন্তু সকেট শুরুর পরপরই মাস্টার প্রসেস ওয়ার্কার প্রসেস তৈরি করে স্থায়ীভাবে তাদের ইফেক্টিভ UID এবং রিয়েল UID পরিবর্তন করে www-data ( UID ৩৩ ) এর মতো সাধারণ অ্যাকাউন্টে নামিয়ে আনে। ফলে ওয়ার্কারে কোনো আক্রমণ হলেও হোস্ট সম্পূর্ণ সুরক্ষিত থাকে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Simulation of POSIX Process Credentials & Privilege Dropping
class SecurityContext {
  constructor(ruid, euid, suid, gids = []) {
    this.ruid = ruid; // Real UID (process creator)
    this.euid = euid; // Effective UID (active authority)
    this.suid = suid; // Saved UID (for switching back)
    this.gids = gids; // Supplementary groups
  }

  // Executing a binary file with optional setuid bit
  execve(executable) {
    if (executable.mode & 0o4000) {
      // Setuid binary: Elevate EUID to binary owner
      this.euid = executable.ownerUid;
      this.suid = executable.ownerUid;
    } else {
      // Normal binary: EUID matches real user
      this.euid = this.ruid;
      this.suid = this.ruid;
    }
  }

  // Irreversible privilege drop: Root permanently relinquishes power
  dropPrivileges(newUid, newGid) {
    if (this.euid !== 0) {
      return { success: false, error: 'EPERM: Only root can drop privileges' };
    }
    this.ruid = newUid;
    this.euid = newUid;
    this.suid = newUid;
    this.gids = [newGid];
    return { success: true, activeUid: this.euid };
  }

  // Authorize filesystem access based on current EUID
  checkFileAccess(file, requestedMode) {
    if (this.euid === 0) return true; // Superuser bypass

    let perm = 0;
    if (this.euid === file.ownerUid) {
      perm = (file.mode >> 6) & 7; // Owner bits
    } else if (this.gids.includes(file.groupGid)) {
      perm = (file.mode >> 3) & 7; // Group bits
    } else {
      perm = file.mode & 7;        // Others
    }
    return (perm & requestedMode) === requestedMode;
  }
}

// 1. Initialize unprivileged developer user process (UID 1000)
const proc = new SecurityContext(1000, 1000, 1000, [1000]);
const shadowFile = { ownerUid: 0, groupGid: 0, mode: 0o600 }; // root-only

console.log('User UID 1000 can access /etc/shadow:', proc.checkFileAccess(shadowFile, 2));

// 2. User invokes /usr/bin/passwd (mode 4755, owned by root UID 0)
const passwdBinary = { ownerUid: 0, groupGid: 0, mode: 0o4755 };
proc.execve(passwdBinary);
console.log('After running setuid binary: EUID is', proc.euid);
console.log('Elevated process can access /etc/shadow:', proc.checkFileAccess(shadowFile, 2));

// 3. Web server daemon drops root privileges to www-data (UID 33)
const webDaemon = new SecurityContext(0, 0, 0, [0]);
const dropResult = webDaemon.dropPrivileges(33, 33);
console.log('Privilege drop status:', dropResult.success, 'New EUID:', webDaemon.euid);
console.log('Worker process can write /etc/shadow:', webDaemon.checkFileAccess(shadowFile, 2));`,
      caption: {
        en: 'A verified simulation showing how POSIX processes elevate through setuid binaries and permanently lock down worker privileges using setuid dropping.',
        bn: 'একটি পরীক্ষিত সিমুলেশন যা দেখায় কীভাবে পসিক্স প্রসেস সেট-ইউআইডি দিয়ে সাময়িক অধিকার পায় এবং সার্ভার প্রসেস প্রিভিলেজ ড্রপ করে স্থায়ীভাবে সুরক্ষিত থাকে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Real UID (RUID)',
          def: {
            en: 'The immutable identifier representing the actual user account that originally invoked and created the operating system process.',
            bn: 'অপরিবর্তনযোগ্য শনাক্তকারী যা নির্দেশ করে কোন মূল ব্যবহারকারী অ্যাকাউন্টটি প্রসেসটি তৈরি করেছে।',
          },
        },
        {
          term: 'Effective UID (EUID)',
          def: {
            en: 'The active credential evaluated by the kernel for access control decisions when opening files, binding sockets, or sending signals.',
            bn: 'সক্রিয় ক্রেডেনশিয়াল যা ফাইল খোলা, সকেট তৈরি বা সিগন্যাল পাঠানোর সময় কার্নেল অধিকার মূল্যায়নের জন্য ব্যবহার করে।',
          },
        },
        {
          term: 'Setuid Bit (SUID)',
          def: {
            en: 'A special file permission bit (octal 4000) causing the operating system to execute the binary with the effective privileges of the file owner.',
            bn: 'বিশেষ ফাইল পারমিশন বিট (অক্টাল ৪০০০) যা অ্যাপ্লিকেশন চলার সময় ফাইলের মূল মালিকের অধিকার দিয়ে প্রসেসটি চালানোর নির্দেশ দেয়।',
          },
        },
        {
          term: 'Privilege Dropping',
          def: {
            en: 'A security practice where a service starts with root rights to acquire protected resources, then permanently demotes itself to an unprivileged account.',
            bn: 'একটি নিরাপত্তা কৌশল যেখানে সেবা সুরক্ষিত রিসোর্স নিতে শুরুতে রুট হিসেবে শুরু হয়, পরে স্থায়ীভাবে সাধারণ অ্যাকাউন্টে অধিকার কমিয়ে ফেলে।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Modern security standards strongly recommend replacing monolithic setuid root binaries with fine-grained Linux Capabilities. Using the setcap tool, you can grant a single specific privilege — such as CAP_NET_BIND_SERVICE to bind port 80 — without giving the application full root access to the entire operating system.',
        bn: 'আধুনিক নিরাপত্তা মানদণ্ড বিশাল ক্ষমতাসম্পন্ন সেট-ইউআইডি রুট বাইনারির পরিবর্তে লিনাক্স ক্যাপাবিলিটিস ব্যবহারের পরামর্শ দেয়। setcap টুলের মাধ্যমে আপনি পুরো অপারেটিং সিস্টেমের রুট ক্ষমতা না দিয়ে শুধুমাত্র নির্দিষ্ট অধিকার — যেমন পোর্ট ৮০ বাইন্ড করার জন্য CAP_NET_BIND_SERVICE — বরাদ্দ করতে পারেন।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-users-ex-1',
          kind: 'predict',
          question: {
            en: 'What is the standard numeric User ID (UID) of the root superuser across all UNIX and POSIX-compliant operating systems?',
            bn: 'সব ধরণের ইউনিক্স এবং পসিক্স অপারেটিং সিস্টেমে রুট সুপারইউজারের নির্ধারিত সংখ্যাসূচক ইউজার আইডি (UID) কত?'
          },
          answer: '0',
          hint: {
            en: 'It is the lowest non-negative integer, representing absolute administrative authority.',
            bn: 'এটি সর্বনিম্ন অঋণাত্মক পূর্ণসংখ্যা, যা পরম প্রশাসনিক ক্ষমতা নির্দেশ করে।',
          },
          explanation: {
            en: 'By POSIX definition, UID 0 is universally reserved for the root superuser, bypassing discretionary file permission checks.',
            bn: 'পসিক্স সংজ্ঞা অনুযায়ী UID ০ সর্বজনীনভাবে রুট সুপারইউজারের জন্য সংরক্ষিত, যা সাধারণ পারমিশন বিধিনিষেধ অতিক্রম করতে পারে।',
          },
        },
        {
          id: 'os-users-ex-2',
          kind: 'mcq',
          question: {
            en: 'During a system call permission check (such as attempting to read a file), which UID does the kernel evaluate to determine access rights?',
            bn: 'সিস্টেম কল পারমিশন যাচাইয়ের সময় (যেমন একটি ফাইল পড়ার চেষ্টা করার সময়) অধিকার মূল্যায়নের জন্য কার্নেল কোন UID পরীক্ষা করে?'
          },
          options: [
            {
              en: 'Effective UID (EUID)',
              bn: 'ইফেক্টিভ ইউআইডি (EUID)',
            },
            {
              en: 'Monitor refresh rate ID',
              bn: 'মনিটর রিফ্রেশ রেট আইডি',
            },
            {
              en: 'Motherboard serial number',
              bn: 'মাদারবোর্ড সিরিয়াল নম্বর',
            },
            {
              en: 'Network cable pin count',
              bn: 'নেটওয়ার্ক কেবলের পিন সংখ্যা',
            },
          ],
          answer: 0,
          hint: {
            en: 'It is the "effective" credential that dictates current runtime authority.',
            bn: 'এটি বর্তমান কার্যকর অধিকার নির্ধারণকারী ক্রেডেনশিয়াল।',
          },
          explanation: {
            en: 'The kernel always evaluates the Effective UID (EUID) for filesystem and syscall permission checks. If EUID is 0, root privileges apply.',
            bn: 'কার্নেল সবসময় পারমিশন যাচাইয়ের জন্য ইফেক্টিভ ইউআইডি (EUID) ব্যবহার করে। EUID এর মান ০ হলে রুট অধিকার কার্যকর হয়।',
          },
        },
        {
          id: 'os-users-ex-3',
          kind: 'mcq',
          question: {
            en: 'Why do production web servers like Nginx execute worker processes under an unprivileged user (like www-data) rather than continuing to run as root?',
            bn: 'Nginx-এর মতো প্রোডাকশন ওয়েব সার্ভারগুলো রুট হিসেবে না চালিয়ে কেন সাধারণ ইউজার (যেমন www-data) হিসেবে ওয়ার্কার প্রসেস চালায়?'
          },
          options: [
            {
              en: 'To prevent an attacker exploiting a web application vulnerability from gaining complete administrative root control of the host operating system',
              bn: 'ওয়েব অ্যাপ্লিকেশনে কোনো নিরাপত্তা ত্রুটির সুযোগ নিয়ে আক্রমণকারী যাতে হোস্ট অপারেটিং সিস্টেমের সম্পূর্ণ রুট ক্ষমতা দখল করতে না পারে',
            },
            {
              en: 'Running as root causes physical RAM chips to lose electrical charge after 10 minutes',
              bn: 'রুট হিসেবে চালালে ১০ মিনিট পর ফিজিক্যাল র‍্যামের চার্জ শেষ হয়ে যায়',
            },
            {
              en: 'Unprivileged accounts render web pages 50 times faster than root accounts',
              bn: 'সাধারণ অ্যাকাউন্টগুলো রুট অ্যাকাউন্টের চেয়ে ৫০ গুণ দ্রুত ওয়েব পেজ রেন্ডার করে',
            },
            {
              en: 'Linux kernels delete all network sockets if root opens more than two files',
              bn: 'রুট যদি দুটি ফাইলের বেশি খোলে তবে লিনাক্স সব নেটওয়ার্ক সকেট মুছে ফেলে',
            },
          ],
          answer: 0,
          hint: {
            en: 'This embodies the defense-in-depth and least privilege security principles.',
            bn: 'এটি প্রতিরক্ষা গভীরতা এবং সর্বনিম্ন অধিকারের মৌলিক নিরাপত্তা নীতি বাস্তবায়ন করে।',
          },
          explanation: {
            en: 'If a remote exploit compromises an unprivileged worker process, the attacker is trapped inside UID 33 with restricted filesystem and process capabilities.',
            bn: 'যদি কোনো ওয়ার্কার প্রসেসে আক্রমণ হয়, তবে আক্রমণকারী UID ৩৩ এর মধ্যে আটকে থাকে এবং পুরো অপারেটিং সিস্টেম সুরক্ষিত থাকে।',
          },
        },
        {
          id: 'os-users-ex-4',
          kind: 'predict',
          question: {
            en: 'What 4-digit octal permission string represents a file with standard 755 executable permissions augmented with the setuid special bit (4000)?',
            bn: 'স্ট্যান্ডার্ড ৭৫৫ এক্সিকিউটেবল পারমিশন এবং ৪০০০ সেট-ইউআইডি স্পেশাল বিট সমন্বয়ে তৈরি ৪ অঙ্কের অক্টাল পারমিশন স্ট্রিংটি কী হবে?'
          },
          answer: '4755',
          hint: {
            en: 'Prefix the special bit digit (4) directly in front of the base permission digits (755).',
            bn: 'মূল পারমিশন সংখ্যা ৭৫৫-এর শুরুতে স্পেশাল বিট সংখ্যা ৪ যুক্ত করুন।',
          },
          explanation: {
            en: 'Combining the setuid bit (octal 4000) with rwxr-xr-x (octal 0755) produces octal mode 4755 (displayed as -rwsr-xr-x).',
            bn: 'সেট-ইউআইডি বিট (অক্টাল ৪০০০) এবং rwxr-xr-x (অক্টাল ০৭৫৫) যোগ করলে অক্টাল মোড ৪৭৫৫ (চিহ্নিত -rwsr-xr-x) তৈরি হয়।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'Process Isolation & User Contexts Knowledge Check',
      bn: 'প্রসেস আইসোলেশন এবং ইউজার কনটেক্সট জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-users-qz-1',
          kind: 'mcq',
          topic: 'setuid-mechanism',
          question: {
            en: 'How does an operating system kernel handle the execution of a file possessing the setuid permission bit (such as /usr/bin/passwd)?',
            bn: 'সেট-ইউআইডি পারমিশন বিট যুক্ত কোনো ফাইল (যেমন /usr/bin/passwd) কার্যকর করার সময় অপারেটিং সিস্টেম কার্নেল কীভাবে তা পরিচালনা করে?'
          },
          options: [
            {
              en: 'The kernel sets the processes Effective UID (EUID) to match the file owner (root), while preserving the invokers identity in the Real UID (RUID)',
              bn: 'কার্নেল প্রসেসের ইফেক্টিভ UID (EUID) ফাইলের মালিকের (রুট) সমান করে দেয়, তবে রিয়েল UID (RUID)-তে মূল ব্যবহারকারীর পরিচয় অপরিবর্তিত রাখে',
            },
            {
              en: 'The kernel restarts the computer and loads an alternate operating system from ROM',
              bn: 'কার্নেল কম্পিউটার রিস্টার্ট করে রম থেকে বিকল্প অপারেটিং সিস্টেম চালু করে',
            },
            {
              en: 'The kernel prompts every user on the local area network to vote on granting access',
              bn: 'কার্নেল নেটওয়ার্কের সকল ব্যবহারকারীকে ভোট দিতে অনুরোধ পাঠায়',
            },
            {
              en: 'The kernel converts the executable into an uncompressed ZIP archive',
              bn: 'কার্নেল এক্সিকিউটেবল ফাইলটিকে আনকম্প্রেসড জিপ ফাইলে রূপান্তর করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'The invoker remains identified by RUID, but operates with the permissions of the file owner via EUID.',
            bn: 'আসল ব্যবহারকারী RUID দিয়ে চিহ্নিত থাকে, কিন্তু EUID-এর কারণে ফাইলের মালিকের ক্ষমতায় কাজ চলে।',
          },
          explanation: {
            en: 'Setuid allows an ordinary user to run a binary that safely executes privileged actions (like writing to /etc/shadow) under the file owner identity.',
            bn: 'সেট-ইউআইডি সাধারণ ব্যবহারকারীকে ফাইল মালিকের পরিচয়ে বিশেষ কাজ (যেমন /etc/shadow হালনাগাদ) নিরাপদে করতে দেয়।',
          },
        },
        {
          id: 'os-users-qz-2',
          kind: 'mcq',
          topic: 'nosuid-filesystem-mount',
          question: {
            en: 'Why do system administrators routinely apply the "nosuid" mount option to shared partitions like /tmp and external USB flash drives?',
            bn: 'সিস্টেম অ্যাডমিনিস্ট্রেটররা কেন /tmp বা এক্সটার্নাল ইউএসবি ড্রাইভের মতো পার্টিশনে "nosuid" মাউন্ট অপশন ব্যবহার করেন?'
          },
          options: [
            {
              en: 'It instructs the kernel to ignore setuid and setgid bits on binaries within that filesystem, preventing local privilege escalation attacks',
              bn: 'এটি কার্নেলকে ঐ ফাইলসিস্টেমের বাইনারিতে সেট-ইউআইডি বিট উপেক্ষা করার নির্দেশ দেয়, যা প্রিভিলেজ এস্কেলেশন আক্রমণ প্রতিহত করে',
            },
            {
              en: 'It accelerates disk read speeds by turning off drive cooling fans',
              bn: 'এটি ফ্যান বন্ধ করে দিয়ে ডিস্কের ডেটা পড়ার গতি বাড়িয়ে দেয়',
            },
            {
              en: 'It prevents files from being viewed on color computer monitors',
              bn: 'এটি রঙিন মনিটরে ফাইলগুলোর প্রদর্শন বন্ধ করে দেয়',
            },
            {
              en: 'It limits file creation strictly to midnight hours',
              bn: 'এটি শুধুমাত্র মধ্যরাতে ফাইল তৈরির অনুমতি দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Without nosuid, an attacker could bring a malicious pre-compiled root setuid binary onto the partition.',
            bn: 'nosuid না থাকলে আক্রমণকারী ঐ পার্টিশনে আগে থেকে তৈরি সেট-ইউআইডি বাইনারি এনে রুট ক্ষমতা নিতে পারত।',
          },
          explanation: {
            en: 'The nosuid mount flag prevents unprivileged users from placing a custom executable with setuid root permissions on a world-writable filesystem to gain root.',
            bn: 'nosuid ফ্ল্যাগ উন্মুক্ত পার্টিশনে কোনো বিপজ্জনক সেট-ইউআইডি বাইনারি চালিয়ে অননুমোদিতভাবে রুট অধিকার পাওয়া বন্ধ করে।',
          },
        },
        {
          id: 'os-users-qz-3',
          kind: 'mcq',
          topic: 'supplementary-groups',
          question: {
            en: 'What functional capability do Supplementary Groups provide to a user account on a modern multi-tenant Linux server?',
            bn: 'একটি আধুনিক মাল্টি-টেন্যান্ট লিনাক্স সার্ভারে সাপ্লিমেন্টারি গ্রুপগুলো ব্যবহারকারী অ্যাকাউন্টকে কোন কার্যক্ষমতা প্রদান করে?'
          },
          options: [
            {
              en: 'They allow a single user to participate in multiple authorization boundaries (such as docker, developers, and audio) simultaneously',
              bn: 'সেগুলো একজন ব্যবহারকারীকে একই সাথে একাধিক পারমিশন সীমানায় (যেমন docker, developers এবং audio) অন্তর্ভুক্ত হতে দেয়',
            },
            {
              en: 'They assign each user an individual physical processor core exclusively',
              bn: 'সেগুলো প্রতিটি ব্যবহারকারীর জন্য একটি ডেডিকেটেড প্রসেসর কোর নির্ধারণ করে',
            },
            {
              en: 'They translate system error messages into regional languages automatically',
              bn: 'সেগুলো সিস্টেমের ত্রুটির বার্তাকে স্বয়ংক্রিয়ভাবে আঞ্চলিক ভাষায় অনুবাদ করে',
            },
            {
              en: 'They disconnect idle user sessions after exactly 15 seconds',
              bn: 'সেগুলো ১৫ সেকেন্ড পর অলস সেশনগুলোকে বিচ্ছিন্ন করে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'A user has one primary group, but can be a member of hundreds of supplementary groups.',
            bn: 'একজন ব্যবহারকারীর একটি প্রাইমারি গ্রুপ থাকে, কিন্তু তিনি শত শত সাপ্লিমেন্টারি গ্রুপের সদস্য হতে পারেন।',
          },
          explanation: {
            en: 'Supplementary groups allow granular role-based access control (RBAC), granting access to shared team directories, hardware devices, or Docker sockets.',
            bn: 'সাপ্লিমেন্টারি গ্রুপ দলভিত্তিক অ্যাক্সেস নিয়ন্ত্রণ করে, যা শেয়ার্ড ডিরেক্টরি বা ডকার সকেটে যৌথ প্রবেশের সুযোগ দেয়।',
          },
        },
        {
          id: 'os-users-qz-4',
          kind: 'mcq',
          topic: 'linux-capabilities',
          question: {
            en: 'How do Linux Capabilities (such as CAP_NET_BIND_SERVICE) enhance production system security compared to traditional setuid root binaries?',
            bn: 'ঐতিহ্যবাহী সেট-ইউআইডি রুট বাইনারির তুলনায় লিনাক্স ক্যাপাবিলিটিস (যেমন CAP_NET_BIND_SERVICE) কীভাবে প্রোডাকশন সিস্টেমের নিরাপত্তা বৃদ্ধি করে?'
          },
          options: [
            {
              en: 'They divide monolithic root privileges into distinct granular permissions, allowing a process to perform one privileged task without gaining full administrative power',
              bn: 'সেগুলো রুটের অসীম ক্ষমতাকে ক্ষুদ্র ক্ষুদ্র নির্দিষ্ট ভাগে ভাগ করে, যাতে কোনো প্রসেস সম্পূর্ণ রুট ক্ষমতা না পেয়েও নির্দিষ্ট একটি কাজ করতে পারে',
            },
            {
              en: 'They double the maximum RAM capacity of the motherboard automatically',
              bn: 'সেগুলো মাদারবোর্ডের সর্বোচ্চ র‍্যাম ধারণক্ষমতা দ্বিগুণ করে দেয়',
            },
            {
              en: 'They prevent all users from ever changing their passwords',
              bn: 'সেগুলো সব ব্যবহারকারীর পাসওয়ার্ড পরিবর্তন বন্ধ করে দেয়',
            },
            {
              en: 'They convert all TCP network traffic into encrypted wireless radio waves',
              bn: 'সেগুলো তারযুক্ত টিসিপি ট্রাফিককে রেডিও তরঙ্গে রূপান্তর করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'Capabilities eliminate the all-or-nothing dichotomy of the traditional root superuser model.',
            bn: 'ক্যাপাবিলিটিস রুটের "সব ক্ষমতা অথবা কোনো ক্ষমতা নয়" সংক্রান্ত ঝুঁকি দূর করে।',
          },
          explanation: {
            en: 'Linux decomposes root authority into about 40 distinct capabilities. A binary with CAP_NET_BIND_SERVICE can bind port 80 without the ability to read arbitrary files or reboot the server.',
            bn: 'লিনাক্স রুটের ক্ষমতাকে প্রায় ৪০ টি পৃথক ক্যাপাবিলিটিতে ভাগ করেছে। CAP_NET_BIND_SERVICE থাকা প্রসেস পোর্ট ৮০ খুলতে পারলেও অন্য ফাইল পড়তে পারে না।',
          },
        },
    ],
  },
};
