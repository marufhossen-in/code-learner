import type { Lesson } from '../../../lib/types';

export const BootProcessLesson: Lesson = {
  slug: 'boot-process',
  tech: 'operating-systems',
  title: {
    en: 'Boot Sequence, UEFI Firmware, Bootloaders & Kernel Initialization',
    bn: 'বুট প্রক্রিয়া, ইউইএফআই ফার্মওয়্যার, বুটলোডার এবং কার্নেল প্রারম্ভিকতা',
  },
  summary: {
    en: 'Trace the complete hardware-to-user-space boot sequence from Power-On Self-Test (POST) to UEFI firmware and GRUB2 bootloader stage 1 and stage 2. Follow Linux kernel decompression (vmlinuz), initramfs driver probing (udev), and systemd PID 1 target orchestration.',
    bn: 'পাওয়ার-অন সেলফ-টেস্ট (POST) থেকে শুরু করে UEFI ফার্মওয়্যার এবং GRUB2 বুটলোডার স্টেজ ১ ও স্টেজ ২ পর্যন্ত সম্পূর্ণ বুট পর্যায়গুলো বিশ্লেষণ করুন। লিনাক্স কার্নেল ডিকম্প্রেশন (vmlinuz), initramfs ড্রাইভার প্রোবিং (udev) এবং systemd PID ১ টার্গেট অর্কেস্ট্রেশন বিস্তারিত জানুন।',
  },
  minutes: 20,
  next: {
    slug: 'os-capstone',
    title: {
      en: 'OS Performance Tuning, Production Triage & Architecture Capstone',
      bn: 'ওএস পারফরম্যান্স টিউনিং, প্রোডাকশন ট্রায়াজ এবং আর্কিটেকচার ক্যাপস্টোন',
    },
  },
  blocks: [
    {
      type: 'heading',
      id: 'hardware-reset-and-uefi',
      text: {
        en: 'From Silicon Reset to UEFI Firmware Execution',
        bn: 'সিলিকন রিসেট থেকে ইউইএফআই ফার্মওয়্যার এক্সিকিউশন',
      },
    },
    {
      type: 'para',
      text: {
        en: 'When power is supplied to a modern computer motherboard, the power supply unit stabilizes voltages and transmits a Power Good electrical signal to the central processing unit. The processor starts executing code at a hardcoded hardware reset vector (on x86 processors, physical address 0xFFFFFFF0). This vector branches directly to motherboard flash memory hosting Unified Extensible Firmware Interface (UEFI) firmware. UEFI executes the Power-On Self-Test (POST) to diagnose system memory, calibrate peripheral bus circuits, and verify cryptographic digital signatures under Secure Boot before executing any bootloader code.',
        bn: 'আধুনিক কম্পিউটার মাদারবোর্ডে বিদ্যুৎ সংযোগ চালু হলে পাওয়ার সাপ্লাই ইউনিট ভোল্টেজ স্থিতিশীল করে সেন্ট্রাল প্রসেসিং ইউনিটে একটি পাওয়ার গুড বৈদ্যুতিক সংকেত পাঠায়। প্রসেসরটি হার্ডওয়্যার রিসেট ভেক্টরের ( x86 প্রসেসরে ফিজিক্যাল অ্যাড্রেস 0xFFFFFFF0 ) নির্দিষ্ট মেমোরি ঠিকানায় নির্দেশ কার্যকর করা শুরু করে। এই ভেক্টর সরাসরি মাদারবোর্ডের ফ্ল্যাশ মেমোরিতে থাকা ইউনিফাইড এক্সটেনসিবল ফার্মওয়্যার ইন্টারফেস (UEFI) ফার্মওয়্যারে চলে যায়। কোনো বুটলোডার চালানোর পূর্বে UEFI প্রথমে পাওয়ার-অন সেলফ-টেস্ট (POST) সম্পন্ন করে সিস্টেম মেমোরি পরীক্ষা করে, পেরিফেরাল বাস সার্কিট প্রস্তুত করে এবং সিকিউর বুটের আওতায় ডিজিটাল স্বাক্ষর যাচাই করে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'The 5-Stage Hardware to User-Space Boot Sequence',
        bn: 'হার্ডওয়্যার থেকে ইউজার-স্পেস পর্যন্ত ৫ টি ধাপের বুট সিকোয়েন্স',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="firmGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="bootGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="kernGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#ef4444" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#b91c1c" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="initGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="bootArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Stage 1 & 2: Hardware & UEFI Firmware -->
  <rect x="25" y="30" width="180" height="370" rx="10" fill="url(#firmGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="35" y="60" font-size="13" font-weight="700" fill="#0369a1">STAGES 1 &amp; 2</text>
  <text x="35" y="80" font-size="11" fill="#64748b">Hardware &amp; UEFI</text>

  <rect x="35" y="100" width="160" height="75" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="45" y="125" font-size="12" font-weight="700" fill="#0f172a">Power &amp; POST</text>
  <text x="45" y="145" font-size="10" fill="#475569">CPU Reset Vector</text>
  <text x="45" y="160" font-size="10" fill="#475569">Memory calibration</text>

  <rect x="35" y="195" width="160" height="95" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="45" y="220" font-size="12" font-weight="700" fill="#0f172a">UEFI Secure Boot</text>
  <text x="45" y="240" font-size="10" fill="#475569">Reads ESP FAT32</text>
  <text x="45" y="255" font-size="10" fill="#475569">Verifies Shim RSA key</text>
  <text x="45" y="272" font-size="10" fill="#16a34a">Loads grubx64.efi</text>

  <!-- Connector -->
  <path d="M 205 210 L 225 210" stroke="#475569" stroke-width="2" marker-end="url(#bootArrow)"/>

  <!-- Stage 3: GRUB2 Bootloader -->
  <rect x="225" y="30" width="180" height="370" rx="10" fill="url(#bootGrad)" stroke="#7e22ce" stroke-width="2"/>
  <text x="235" y="60" font-size="13" font-weight="700" fill="#6b21a8">STAGE 3: BOOTLOADER</text>
  <text x="235" y="80" font-size="11" fill="#64748b">GRUB2 Engine</text>

  <rect x="235" y="100" width="160" height="120" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="245" y="125" font-size="12" font-weight="700" fill="#581c87">Loads Images</text>
  <text x="245" y="145" font-size="10" fill="#475569">1. /boot/vmlinuz (Kernel)</text>
  <text x="245" y="165" font-size="10" fill="#475569">2. /boot/initramfs (RAM fs)</text>
  <text x="245" y="185" font-size="10" fill="#475569">Passes root=UUID=... cmdline</text>
  <text x="245" y="202" font-size="10" fill="#047857">Jumps to startup_64</text>

  <!-- Connector -->
  <path d="M 405 210 L 425 210" stroke="#475569" stroke-width="2" marker-end="url(#bootArrow)"/>

  <!-- Stage 4: Linux Kernel & Initramfs -->
  <rect x="425" y="30" width="180" height="370" rx="10" fill="url(#kernGrad)" stroke="#b91c1c" stroke-width="2"/>
  <text x="435" y="60" font-size="13" font-weight="700" fill="#991b1b">STAGE 4: KERNEL INIT</text>
  <text x="435" y="80" font-size="11" fill="#64748b">Ring 0 Supervisor Mode</text>

  <rect x="435" y="100" width="160" height="135" rx="6" fill="#ffffff" stroke="#fca5a5" stroke-width="1.5"/>
  <text x="445" y="125" font-size="12" font-weight="700" fill="#0f172a">Kernel Startup</text>
  <text x="445" y="145" font-size="10" fill="#475569">Unpacks initramfs</text>
  <text x="445" y="163" font-size="10" fill="#475569">Probes NVMe / SATA drivers</text>
  <text x="445" y="181" font-size="10" fill="#475569">Mounts real root /sysroot</text>
  <text x="445" y="201" font-size="10" fill="#b45309">Executes switch_root</text>
  <text x="445" y="218" font-size="10" fill="#047857">Spawns /sbin/init</text>

  <!-- Connector -->
  <path d="M 605 210 L 625 210" stroke="#475569" stroke-width="2" marker-end="url(#bootArrow)"/>

  <!-- Stage 5: User-Space Systemd (PID 1) -->
  <rect x="625" y="30" width="170" height="370" rx="10" fill="url(#initGrad)" stroke="#047857" stroke-width="2"/>
  <text x="635" y="60" font-size="13" font-weight="700" fill="#065f46">STAGE 5: PID 1</text>
  <text x="635" y="80" font-size="11" fill="#64748b">systemd User Space</text>

  <rect x="635" y="100" width="150" height="150" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="645" y="125" font-size="12" font-weight="700" fill="#0f172a">Target Tree</text>
  <text x="645" y="147" font-size="10" fill="#475569">systemd-journald.service</text>
  <text x="645" y="167" font-size="10" fill="#475569">udevd device nodes</text>
  <text x="645" y="187" font-size="10" fill="#475569">networking.service</text>
  <text x="645" y="207" font-size="10" fill="#475569">sshd.service (Port 22)</text>
  <text x="645" y="230" font-size="10" fill="#047857">multi-user.target READY</text>
</svg>`,
      caption: {
        en: 'The comprehensive 5-stage boot pipeline: hardware reset and POST, UEFI firmware and Secure Boot validation, GRUB2 image loading, kernel initramfs driver probing, and systemd PID 1 target orchestration.',
        bn: 'পূর্ণাঙ্গ ৫ টি ধাপের বুট পাইপলাইন: হার্ডওয়্যার রিসেট ও POST, UEFI ফার্মওয়্যার ও সিকিউর বুট যাচাই, GRUB2 ইমেজ লোডিং, কার্নেল initramfs ড্রাইভার প্রোবিং এবং systemd PID ১ টার্গেট অর্কেস্ট্রেশন।',
      },
    },
    {
      type: 'heading',
      id: 'bootloader-and-initramfs-handover',
      text: {
        en: 'Bootloader, Initramfs & Systemd (PID 1) Orchestration',
        bn: 'বুটলোডার, initramfs এবং Systemd ( PID ১ ) অর্কেস্ট্রেশন',
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Linux kernel image (vmlinuz) is a self-extracting compressed binary. However, the kernel faces a classic bootstrap dilemma. To mount the persistent root partition on an encrypted storage drive or RAID controller, it needs storage driver modules. Unfortunately, those driver modules reside inside /lib/modules on that very same unmounted disk filesystem. Operating systems solve this by loading an initramfs (initial RAM filesystem) — a compact, cpio-compressed memory archive containing essential storage drivers. After loading necessary modules and mounting the real persistent root partition at /sysroot, the kernel executes switch_root, freeing temporary RAM and spawning /sbin/init (systemd) as Process ID 1.',
        bn: 'লিনাক্স কার্নেল ইমেজ (vmlinuz) একটি স্বয়ংক্রিয়ভাবে ডিকম্প্রেস হওয়া কম্প্যাক্ট বাইনারি। তবে কার্নেল একটি চিরাচরিত উভয়সঙ্কটের মুখোমুখি হয়। এনক্রিপ্ট করা স্টোরেজ ড্রাইভ বা রেইড কন্ট্রোলারের ওপর থাকা মূল রুট পার্টিশন মাউন্ট করতে তার স্টোরেজ ড্রাইভার মডিউল প্রয়োজন। দুর্ভাগ্যবশত, সেই ড্রাইভারগুলো জমা থাকে ঐ মাউন্ট না হওয়া রুট পার্টিশনের /lib/modules ডিরেক্টরিতেই। অপারেটিং সিস্টেম এই সমস্যার সমাধান করে initramfs ( ইনিশিয়াল র‍্যাম ফাইলসিস্টেম ) মেমোরিতে লোড করে — যা প্রয়োজনীয় স্টোরেজ ড্রাইভার সম্বলিত একটি অস্থায়ী আর্কাইভ। ড্রাইভার লোড করে আসল রুট পার্টিশন /sysroot এ মাউন্ট করার পর কার্নেল switch_root চালায়, অস্থায়ী র‍্যাম খালি করে এবং প্রসেস আইডি ১ হিসেবে /sbin/init (systemd) চালু করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic State Machine of Operating System Boot Pipeline
class BootEngine {
  constructor() {
    this.currentPhase = 'OFF';
    this.bootLogs = [];
    this.pidTable = new Map();
  }

  log(stage, message) {
    this.bootLogs.push({ stage, message });
  }

  // Stage 1 & 2: Firmware POST and Secure Boot Verification
  runFirmwarePhase(hasValidKey) {
    this.currentPhase = 'UEFI_POST';
    this.log('POST', 'Hardware diagnostic verified: DRAM calibrated, PCIe enumerated.');

    if (!hasValidKey) {
      this.log('SECURE_BOOT', 'SECURITY VIOLATION: Bootloader hash not signed by trusted platform key.');
      return false;
    }
    this.log('UEFI', 'Secure Boot validation passed for shimx64.efi.');
    return true;
  }

  // Stage 3: Bootloader Kernel Handover
  runBootloaderPhase(kernelImage, initramfsImage) {
    this.currentPhase = 'GRUB2';
    this.log('GRUB2', \`Loading compressed kernel: \${kernelImage} into physical RAM.\`);
    this.log('GRUB2', \`Loading temporary initramfs: \${initramfsImage}.\`);
    this.log('GRUB2', 'Transferring execution to kernel entry point startup_64 (Ring 0).');
    return true;
  }

  // Stage 4: Kernel Initialization & Temporary Root
  runKernelPhase(availableDrivers, rootStorageDevice) {
    this.currentPhase = 'KERNEL_INIT';
    this.log('KERNEL', 'Page tables established, MMU active, SMP CPU cores brought online.');
    this.log('INITRAMFS', 'Unpacking temporary root filesystem into RAM.');

    // Verify root device storage driver exists
    if (!availableDrivers.includes(rootStorageDevice)) {
      this.log('KERNEL_PANIC', \`CRITICAL: No driver module for \${rootStorageDevice}. Cannot mount root!\`);
      return false;
    }

    this.log('INITRAMFS', \`Storage driver \${rootStorageDevice}.ko loaded successfully.\`);
    this.log('INITRAMFS', 'Real root partition mounted at /sysroot. Executing switch_root.');
    return true;
  }

  // Stage 5: User-Space Initialization (PID 1)
  startUserSpace() {
    this.currentPhase = 'SYSTEMD';
    // PID 1 is universally assigned to init/systemd
    this.pidTable.set(1, { name: 'systemd', state: 'RUNNING', parent: 0 });
    this.log('SYSTEMD', 'Spawning PID 1 (/sbin/init). Orchestrating multi-user.target units.');

    // Spawning essential system daemons
    const services = ['systemd-journald', 'udevd', 'networking', 'sshd'];
    services.forEach((svc, idx) => {
      const pid = 100 + idx;
      this.pidTable.set(pid, { name: svc, state: 'RUNNING', parent: 1 });
      this.log('SYSTEMD', \`Started unit: \${svc}.service (PID \${pid})\`);
    });

    this.currentPhase = 'MULTI_USER_TARGET_REACHED';
    return true;
  }
}

// Verification Scenario
const engine = new BootEngine();
const firmwareOk = engine.runFirmwarePhase(true);
const bootloaderOk = engine.runBootloaderPhase('/boot/vmlinuz-6.8.0', '/boot/initramfs.img');
const kernelOk = engine.runKernelPhase(['ext4', 'nvme', 'overlay'], 'nvme');
const userSpaceOk = engine.startUserSpace();

console.log('Boot completed successfully:', userSpaceOk);
console.log('System Status:', engine.currentPhase);
console.log('\\nExecution Trace:');
engine.bootLogs.forEach((item) => {
  console.log(\`[\${item.stage}] \${item.message}\`);
});`,
      caption: {
        en: 'A verified simulation of the 5-stage Linux boot sequence, demonstrating Secure Boot validation, initramfs storage driver resolution, and systemd PID 1 service orchestration.',
        bn: '৫ টি ধাপের লিনাক্স বুট সিকোয়েন্সের একটি বাস্তব সিমুলেশন যা সিকিউর বুট যাচাইকরণ, initramfs স্টোরেজ ড্রাইভার লোডিং এবং systemd PID ১ সার্ভিস ম্যানেজমেন্ট প্রদর্শন করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'UEFI Firmware',
          def: {
            en: 'The modern 64-bit motherboard firmware specification replacing legacy 16-bit BIOS, providing GPT disk partitioning, NVRAM variables, and Secure Boot signature validation.',
            bn: 'আধুনিক ৬৪-বিট মাদারবোর্ড ফার্মওয়্যার যা ১৬-বিট বায়োসের পরিবর্তে জিপিটি পার্টিশন, এনভির‍্যাম এবং সিকিউর বুট স্বাক্ষর যাচাই সুবিধা দেয়।',
          },
        },
        {
          term: 'GRUB2 Bootloader',
          def: {
            en: 'The Grand Unified Bootloader responsible for reading filesystem configurations, displaying boot menus, and loading the compressed kernel and initramfs into physical memory.',
            bn: 'গ্র্যান্ড ইউনিফাইড বুটলোডার যা ফাইলসিস্টেমের কনফিগারেশন পড়ে বুট মেনু দেখায় এবং কম্প্রেস করা কার্নেল ও initramfs মেমোরিতে লোড করে।',
          },
        },
        {
          term: 'initramfs',
          def: {
            en: 'A temporary root filesystem loaded into RAM by the bootloader containing storage drivers and utilities required to mount the persistent root filesystem partition.',
            bn: 'বুটলোডার দ্বারা র‍্যামে লোড করা একটি অস্থায়ী রুট ফাইলসিস্টেম যাতে মূল হার্ড ড্রাইভের রুট পার্টিশন মাউন্ট করার প্রয়োজনীয় ড্রাইভার থাকে।',
          },
        },
        {
          term: 'Process ID 1 (PID 1)',
          def: {
            en: 'The first user-space process spawned directly by the operating system kernel, acting as the ultimate ancestor of all background services, daemons, and user login sessions.',
            bn: 'অপারেটিং সিস্টেম কার্নেল দ্বারা সরাসরি তৈরি প্রথম ইউজার-স্পেস প্রসেস যা সকল ব্যাকগ্রাউন্ড সার্ভিস ও ডেমনগুলোর মূল পূর্বপুরুষ হিসেবে কাজ করে।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'A server failing to boot with "Kernel panic: VFS: Unable to mount root fs" usually suffers from a corrupted initramfs. The temporary image lacks the necessary storage controller driver for the disk. Systems engineers recover the server by booting from a rescue USB, chrooting into the root filesystem, and executing update-initramfs -u or dracut -f.',
        bn: 'সার্ভার বুট হতে ব্যর্থ হয়ে "Kernel panic: VFS: Unable to mount root fs" দেখালে বুঝতে হবে initramfs ত্রুটিপূর্ণ হয়েছে। অস্থায়ী ইমেজে ডিস্কের প্রয়োজনীয় স্টোরেজ কন্ট্রোলার ড্রাইভারটি অনুপস্থিত থাকে। সিস্টেম ইঞ্জিনিয়াররা রেসকিউ ড্রাইভ দিয়ে বুট করে chroot ব্যবহারের মাধ্যমে update-initramfs -u বা dracut -f কমান্ড দিয়ে তা পুনরুদ্ধার করেন।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-boot-ex-1',
          kind: 'predict',
          question: {
            en: 'What fixed numeric Process ID (PID) is universally assigned to the ancestor init process (systemd) spawned directly by the Linux kernel?',
            bn: 'লিনাক্স কার্নেল দ্বারা সরাসরি চালু হওয়া মূল পূর্বপুরুষ init প্রসেসকে ( systemd ) সর্বজনীনভাবে কোন নির্দিষ্ট সংখ্যাসূচক প্রসেস আইডি (PID) বরাদ্দ করা হয়?'
          },
          answer: '1',
          hint: {
            en: 'It is the first positive integer, following the kernel itself.',
            bn: 'কার্নেলের পরে শুরু হওয়া এটি প্রথম ধনাত্মক পূর্ণসংখ্যা।',
          },
          explanation: {
            en: 'In UNIX and Linux systems, the initial user-space process is always assigned PID 1. It adopts orphaned child processes and manages shutdown signals.',
            bn: 'ইউনিক্স এবং লিনাক্স সিস্টেমে প্রথম ইউজার-স্পেস প্রসেসকে সর্বদা PID ১ বরাদ্দ করা হয়। এটি অভিভাবকহীন চাইল্ড প্রসেস দত্তক নেয় এবং শাটডাউন নিয়ন্ত্রণ করে।',
          },
        },
        {
          id: 'os-boot-ex-2',
          kind: 'mcq',
          question: {
            en: 'What critical engineering problem does the temporary initramfs (initial RAM filesystem) solve during the operating system boot sequence?',
            bn: 'অপারেটিং সিস্টেম বুট প্রক্রিয়ার সময় অস্থায়ী initramfs ( ইনিশিয়াল র‍্যাম ফাইলসিস্টেম ) কোন জটিল প্রকৌশলগত সমস্যার সমাধান করে?'
          },
          options: [
            {
              en: 'It supplies the compiled storage controller drivers (NVMe, RAID, encrypted LUKS) needed to mount the persistent root partition from disk',
              bn: 'এটি ডিস্ক থেকে আসল রুট পার্টিশন মাউন্ট করার জন্য প্রয়োজনীয় স্টোরেজ ড্রাইভার (NVMe, RAID, এনক্রিপ্টেড LUKS) সরবরাহ করে',
            },
            {
              en: 'It increases the motherboard clock speed from 1 GHz to 5 GHz',
              bn: 'এটি মাদারবোর্ডের গতি ১ গিগাহার্টজ থেকে ৫ গিগাহার্টজে বৃদ্ধি করে',
            },
            {
              en: 'It converts mechanical hard drives into solid state drives',
              bn: 'এটি মেকানিক্যাল হার্ড ড্রাইভকে সলিড স্টেট ড্রাইভে রূপান্তর করে',
            },
            {
              en: 'It plays startup chime audio through external bluetooth speakers',
              bn: 'এটি ব্লুটুথ স্পিকারের মাধ্যমে বুট হওয়ার মিউজিক বাজায়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Without the storage controller driver, the kernel cannot read the disk partition where drivers normally live.',
            bn: 'স্টোরেজ কন্ট্রোলারের ড্রাইভার না থাকলে কার্নেল ডিস্কের সেই পার্টিশনটি পড়তেই পারে না যেখানে ড্রাইভার জমা থাকে।',
          },
          explanation: {
            en: 'Because root filesystem drivers are stored on the root partition itself, the kernel boots with an in-memory cpio initramfs containing essential bootstrap drivers.',
            bn: 'যেহেতু আসল ড্রাইভারগুলো রুট পার্টিশনেই থাকে, তাই কার্নেল বুটলোডার দিয়ে র‍্যামে লোড করা initramfs থেকে প্রয়োজনীয় প্রাথমিক ড্রাইভার নিয়ে বুট প্রক্রিয়া সম্পন্ন করে।',
          },
        },
        {
          id: 'os-boot-ex-3',
          kind: 'mcq',
          question: {
            en: 'Why did modern computing architectures replace legacy BIOS MBR partitioning with UEFI firmware and GUID Partition Tables (GPT)?',
            bn: 'আধুনিক কম্পিউটার আর্কিটেকচার কেন প্রাচীন BIOS MBR পার্টিশনের বদলে UEFI ফার্মওয়্যার এবং GUID পার্টিশন টেবিল (GPT) গ্রহণ করেছে?'
          },
          options: [
            {
              en: 'UEFI supports 64-bit execution, drives exceeding 2 terabytes, up to 128 primary partitions, and cryptographic Secure Boot validation',
              bn: 'UEFI ৬৪-বিট এক্সিকিউশন, ২ টেরাবাইটের বেশি ডিস্ক ড্রাইভ, সর্বোচ্চ ১২৮ টি প্রাইমারি পার্টিশন এবং ক্রিপ্টোগ্রাফিক সিকিউর বুট সমর্থন করে',
            },
            {
              en: 'Legacy BIOS consumed 500 watts of electrical power even when the computer was switched off',
              bn: 'প্রাচীন বায়োস কম্পিউটার বন্ধ থাকলেও ৫০০ ওয়াট বিদ্যুৎ অপচয় করত',
            },
            {
              en: 'GPT partition tables prevent computers from ever catching dust',
              bn: 'জিপিটি পার্টিশন টেবিল কম্পিউটারে ধুলাবালি জমা হওয়া রোধ করে',
            },
            {
              en: 'UEFI runs completely without physical memory RAM chips',
              bn: 'ইউইএফআই ফিজিক্যাল মেমোরি র‍্যাম চিপ ছাড়াই চলতে পারে',
            },
          ],
          answer: 0,
          hint: {
            en: 'MBR was limited to 2.2 TB disk drives and 4 primary partitions in 16-bit real mode.',
            bn: 'এমবিআর ২.২ টেরাবাইট ডিস্ক এবং ১৬-বিট রিয়েল মোডে মাত্র ৪ টি পার্টিশনে সীমাবদ্ধ ছিল।',
          },
          explanation: {
            en: 'UEFI overcomes MBR limitations: it supports 64-bit CPU modes, drives up to 9.4 zettabytes, 128 GPT partitions, and hardware root-of-trust security via Secure Boot.',
            bn: 'ইউইএফআই প্রাচীন সীমাবদ্ধতা দূর করেছে: এটি ৬৪-বিট সিপিইউ মোড, সুবিশাল স্টোরেজ ড্রাইভ, ১২৮ টি পার্টিশন এবং সিকিউর বুট ক্রিপ্টোগ্রাফি সমর্থন করে।',
          },
        },
        {
          id: 'os-boot-ex-4',
          kind: 'predict',
          question: {
            en: 'What standard disk filesystem format is required by the UEFI specification for the EFI System Partition (ESP)?',
            bn: 'EFI সিস্টেম পার্টিশনের (ESP) জন্য UEFI স্পেসিফিকেশন অনুযায়ী কোন স্ট্যান্ডার্ড ডিস্ক ফাইলসিস্টেম ফরম্যাটটি থাকা আবশ্যক?'
          },
          answer: 'FAT32',
          hint: {
            en: 'It is a universal 32-bit File Allocation Table filesystem supported natively across all firmware implementations.',
            bn: 'এটি একটি সর্বজনীন ৩২-বিট ফাইল অ্যালোকেশন টেবিল ফাইলসিস্টেম যা সব মাদারবোর্ড ফার্মওয়্যারে সরাসরি সমর্থিত।',
          },
          explanation: {
            en: 'The UEFI standard mandates that the EFI System Partition (ESP) must be formatted with FAT32 so firmware can read bootloader .efi binaries without specialized drivers.',
            bn: 'ইউইএফআই মানদণ্ড অনুযায়ী ESP পার্টিশনটি FAT32 ফরম্যাটে হতে হয় যাতে ফার্মওয়্যার কোনো বিশেষ ড্রাইভার ছাড়াই সরাসরি বুটলোডার ফাইলগুলো পড়তে পারে।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'OS Boot Sequence & Systemd Knowledge Check',
      bn: 'ওএস বুট সিকোয়েন্স এবং Systemd জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-boot-qz-1',
          kind: 'mcq',
          topic: 'secure-boot-cryptography',
          question: {
            en: 'How does UEFI Secure Boot protect an operating system from bootkits and unauthorized rootkit firmware modifications?',
            bn: 'UEFI সিকিউর বুট কীভাবে বুটকিল এবং অনুমতিহীন রুটকিট ফার্মওয়্যার আক্রমণ থেকে একটি অপারেটিং সিস্টেমকে সুরক্ষিত রাখে?'
          },
          options: [
            {
              en: 'It verifies the cryptographic digital signature of bootloader and kernel binaries against trusted public keys stored in motherboard NVRAM before execution',
              bn: 'এটি নির্দেশ কার্যকর করার পূর্বে মাদারবোর্ডের সুরক্ষিত এনভির‍্যামে জমা থাকা পাবলিক কি দিয়ে বুটলোডার ও কার্নেল বাইনারির ক্রিপ্টোগ্রাফিক ডিজিটাল স্বাক্ষর যাচাই করে',
            },
            {
              en: 'It displays a captcha puzzle challenge to the user on every hardware reboot',
              bn: 'এটি প্রতিবার রিবুট করার সময় ব্যবহারকারীর সামনে ক্যাপচা ধাঁধা প্রদর্শন করে',
            },
            {
              en: 'It deletes all user passwords and wipes the solid state drive',
              bn: 'এটি সকল পাসওয়ার্ড মুছে দেয় এবং ড্রাইভের সম্পূর্ণ ডেটা পরিষ্কার করে ফেলে',
            },
            {
              en: 'It switches the display color depth to 8-bit grayscale mode',
              bn: 'এটি ডিসপ্লের রঙ ৮-বিট সাদা-কালো মোডে পরিবর্তন করে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'If a binary has been tampered with or unsigned by a trusted key (such as Microsoft or vendor KEK), the firmware halts execution.',
            bn: 'বিশ্বস্ত কি দ্বারা স্বাক্ষরিত না হলে বা বাইনারিতে কোনো পরিবর্তন হলে ফার্মওয়্যার সাথে সাথে বুট হওয়া বন্ধ করে দেয়।',
          },
          explanation: {
            en: 'Secure Boot maintains a hardware root of trust. Any unauthorized bootloader without a valid digital signature stored in the db database is rejected before CPU execution.',
            bn: 'সিকিউর বুট একটি হার্ডওয়্যার ট্রাস্ট বজায় রাখে। কোনো অননুমোদিত বাইনারিতে সঠিক স্বাক্ষর না থাকলে তা প্রসেসরে চলার আগেই ফার্মওয়্যার আটকে দেয়।',
          },
        },
        {
          id: 'os-boot-qz-2',
          kind: 'mcq',
          topic: 'switch-root-operation',
          question: {
            en: 'What specific action does the Linux kernel perform when executing the switch_root command at the end of the initramfs stage?',
            bn: 'initramfs পর্যায়ের সমাপ্তিতে switch_root কমান্ড কার্যকর করার সময় লিনাক্স কার্নেল ঠিক কোন কাজটি সম্পন্ন করে?'
          },
          options: [
            {
              en: 'It moves the mounted persistent root filesystem to the root directory (/), deletes the temporary initramfs from RAM, and executes /sbin/init',
              bn: 'এটি স্থায়ী রুট ফাইলসিস্টেমকে মূল ডিরেক্টরিতে ( / ) স্থানান্তর করে, র‍্যাম থেকে অস্থায়ী initramfs মুছে ফেলে এবং /sbin/init চালু করে',
            },
            {
              en: 'It switches the processor frequency to battery-saver mode',
              bn: 'এটি প্রসেসরের গতি কমিয়ে ব্যাটারি সেভার মোডে নিয়ে যায়',
            },
            {
              en: 'It downloads the latest Linux kernel from a remote FTP mirror',
              bn: 'এটি রিমোট এফটিপি মিরর থেকে নতুন লিনাক্স কার্নেল ডাউনলোড করে',
            },
            {
              en: 'It prints all kernel source code files to the system terminal',
              bn: 'এটি টার্মিনালে কার্নেলের সমস্ত সোর্স কোড ফাইল প্রিন্ট করে প্রদর্শন করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'The temporary RAM disk must be discarded to free memory for application use.',
            bn: 'অ্যাপ্লিকেশনের ব্যবহারের জন্য মেমোরি খালি করতে অস্থায়ী র‍্যাম ডিস্কটি সম্পূর্ণরূপে বাতিল করতে হয়।',
          },
          explanation: {
            en: 'switch_root safely pivots the root filesystem mount to persistent storage, cleans up the RAM-based initramfs to reclaim memory, and transfers control to PID 1.',
            bn: 'switch_root নিরাপদভাবে আসল স্টোরেজকে রুট মাউন্ট হিসেবে নির্ধারণ করে, মেমোরি খালি করতে initramfs মুছে দেয় এবং প্রসেস ১-এর কাছে নিয়ন্ত্রণ হস্তান্তর করে।',
          },
        },
        {
          id: 'os-boot-qz-3',
          kind: 'mcq',
          topic: 'systemd-parallelization',
          question: {
            en: 'How does modern systemd achieve significantly faster boot times compared to legacy SysVinit shell scripts?',
            bn: 'প্রাচীন SysVinit শেল স্ক্রিপ্টের তুলনায় আধুনিক systemd কীভাবে উল্লেখযোগ্যভাবে দ্রুত বুট সময় নিশ্চিত করে?'
          },
          options: [
            {
              en: 'It models services as dependency graphs and parallelizes service startup using socket and D-Bus activation without sequential script blocking',
              bn: 'এটি সার্ভিসগুলোকে ডিপেন্ডেন্সি গ্রাফ হিসেবে সাজিয়ে সকেট ও ডি-বাস অ্যাক্টিভেশনের মাধ্যমে সমান্তরালে দ্রুত চালু করে, যা দীর্ঘ অপেক্ষার অবসান ঘটায়',
            },
            {
              en: 'It skips loading all device drivers until the user enters their password',
              bn: 'ব্যবহারকারী পাসওয়ার্ড না দেওয়া পর্যন্ত এটি সকল ডিভাইস ড্রাইভার লোড করা এড়িয়ে চলে',
            },
            {
              en: 'It deletes older system log files to reduce processor heat',
              bn: 'সিপিইউর তাপমাত্রা কমাতে এটি পুরনো লগ ফাইলগুলো সরাসরি মুছে দেয়',
            },
            {
              en: 'It disables network connectivity permanently during every boot',
              bn: 'প্রতিবার বুট হওয়ার সময় এটি ইন্টারনেট সংযোগ স্থায়ীভাবে বন্ধ করে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Legacy init ran bash scripts sequentially one after another, whereas systemd starts independent services concurrently in parallel.',
            bn: 'প্রাচীন ইনিট একের পর এক স্ক্রিপ্ট ক্রমানুসারে চালাত, কিন্তু systemd স্বাধীন সার্ভিসগুলোকে একসাথে সমান্তরালে শুরু করে।',
          },
          explanation: {
            en: 'systemd creates listening sockets first, allowing dependent services to start in parallel immediately without waiting for underlying daemons to finish initializing.',
            bn: 'systemd আগে থেকেই লিসেনিং সকেট তৈরি করে রাখে, যার ফলে একটি সার্ভিস শুরুর জন্য অন্য সার্ভিস পূর্ণ চালু হওয়া পর্যন্ত অপেক্ষা না করে সমান্তরালে কাজ চলে।',
          },
        },
        {
          id: 'os-boot-qz-4',
          kind: 'mcq',
          topic: 'kernel-panic-triage',
          question: {
            en: 'A production server crashes during boot displaying "Kernel panic: VFS: Unable to mount root fs on unknown-block(0,0)". What is the primary troubleshooting action?',
            bn: 'একটি প্রোডাকশন সার্ভার বুট হওয়ার সময় "Kernel panic: VFS: Unable to mount root fs on unknown-block(0,0)" এরর দিয়ে ক্র্যাশ করলে প্রধান সমাধান পদক্ষেপ কী?'
          },
          options: [
            {
              en: 'Boot via a live rescue disk, chroot into the environment, and regenerate the initramfs containing proper storage controller kernel modules with update-initramfs',
              bn: 'লাইভ রেসকিউ ড্রাইভ দিয়ে বুট করে chroot-এর মাধ্যমে রুট সিস্টেমে প্রবেশ করুন এবং update-initramfs দিয়ে সঠিক স্টোরেজ কন্ট্রোলার ড্রাইভার সহ initramfs পুনরায় তৈরি করুন',
            },
            {
              en: 'Replace the computer case cooling fans with liquid nitrogen tubes',
              bn: 'কম্পিউটারের ফ্যান বদলে তরল নাইট্রোজেন কুলিং পাইপ স্থাপন করুন',
            },
            {
              en: 'Reformat the entire hard disk to an uncompressed audio CD format',
              bn: 'পুরো হার্ড ড্রাইভ অডিও সিডি ফরম্যাটে রূপান্তর করে মুছে ফেলুন',
            },
            {
              en: 'Adjust the computer monitor screen brightness to 100% capacity',
              bn: 'কম্পিউটার মনিটরের উজ্জ্বলতা ১০০% বাড়িয়ে সর্বোচ্চ সীমায় নির্ধারণ করুন',
            },
          ],
          answer: 0,
          hint: {
            en: 'The error indicates the kernel cannot talk to the hard drive because the initramfs lacks the storage driver.',
            bn: 'এই এরর নির্দেশ করে যে initramfs-এ স্টোরেজ ড্রাইভার না থাকায় কার্নেল হার্ড ড্রাইভ পড়তে পারছে না।',
          },
          explanation: {
            en: 'The unknown-block(0,0) message indicates missing disk driver modules. Rebuilding the initramfs ensures the kernel includes drivers for the host storage controllers.',
            bn: 'unknown-block(0,0) সংকেত দেয় যে ডিস্কের ড্রাইভার মডিউল পাওয়া যায়নি। initramfs নতুন করে তৈরি করলে কার্নেল প্রয়োজনীয় ড্রাইভার খুঁজে পায়।',
          },
        },
    ],
  },
};
