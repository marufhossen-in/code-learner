import type { Lesson } from '../../../lib/types';

export const MeetMemoryLesson: Lesson = {
  slug: 'meet-memory',
  tech: 'memory',
  title: {
    en: 'Beginner Overview of Memory: Virtual Memory & Address Spaces',
    bn: 'মেমোরির প্রাথমিক পরিচিতি: ভার্চুয়াল মেমোরি এবং অ্যাড্রেস স্পেস'
  },
  summary: {
    en: 'Discover how operating systems and processor hardware manage computer memory. Understand the distinction between Physical RAM and Virtual Address Spaces. Explore how the Memory Management Unit translates 64-bit virtual addresses using 4KB Page Tables and Translation Lookaside Buffers (TLB), and trace how process isolation prevents software crashes from corrupting the entire system.',
    bn: 'অপারেটিং সিস্টেম এবং প্রসেসর হার্ডওয়্যার কীভাবে কম্পিউটারের মেমোরি পরিচালনা করে তা আবিষ্কার করুন। ফিজিক্যাল র‍্যাম এবং ভার্চুয়াল অ্যাড্রেস স্পেসের মৌলিক পার্থক্য বুঝুন। মেমোরি ম্যানেজমেন্ট ইউনিট কীভাবে ৪ কিলোবাইট পেজ টেবিল ও Translation Lookaside Buffer (TLB) ব্যবহার করে ৬৪-বিট ভার্চুয়াল ঠিকানা রূপান্তর করে তা জানুন এবং প্রসেস আইসোলেশন কীভাবে সিস্টেমকে সুরক্ষিত রাখে তা শিখুন।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'memory-illusion-physical-vs-virtual',
      text: {
        en: 'The Memory Illusion: Physical RAM versus Virtual Address Spaces',
        bn: 'মেমোরির মায়াজাল: ফিজিক্যাল র‍্যাম বনাম ভার্চুয়াল অ্যাড্রেস স্পেস'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you launch an application on your computer, your software does not access physical RAM silicon chips directly. In 1980s personal computers running MS-DOS, applications operated directly on physical hardware addresses. If Program A had a pointer bug and wrote to memory address 0x0040, it would corrupt Program B or crash the entire computer.',
        bn: 'আপনি যখন আপনার কম্পিউটারে কোনো অ্যাপ্লিকেশন চালু করেন, তখন আপনার সফটওয়্যার সরাসরি ফিজিক্যাল র‍্যাম সিলিকন চিপ অ্যাক্সেস করে না। ১৯৮০-এর দশকে এমএস-ডস (MS-DOS) চালিত প্রাচীন কম্পিউটারে প্রোগ্রামগুলো সরাসরি ফিজিক্যাল হার্ডওয়্যার মেমোরি ঠিকানায় কাজ করত। ফলে প্রোগ্রাম A-তে কোনো পয়েন্টার বাগ থাকলে এবং সেটি মেমোরি ঠিকানা 0x0040-এ লিখে ফেললে তা প্রোগ্রাম B-এর ডাটা মুছে দিত বা সম্পূর্ণ কম্পিউটার ক্র্যাশ করত।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Modern operating systems eliminate this vulnerability through Virtual Memory. The operating system kernel and the CPU Memory Management Unit (MMU) provide every running process with its own private, isolated virtual address space. Two independent applications can both store variables at identical virtual address 0x00400000 simultaneously, yet their data resides in completely different physical DRAM locations without interference.',
        bn: 'আধুনিক অপারেটিং সিস্টেম ভার্চুয়াল মেমোরির মাধ্যমে এই মারাত্মক দুর্বলতা দূর করেছে। অপারেটিং সিস্টেম কার্নেল এবং সিপিইউর মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) প্রতিটি চলমান প্রোগ্রামকে নিজস্ব ব্যক্তিগত ও সম্পূর্ণ পৃথক ভার্চুয়াল অ্যাড্রেস স্পেস প্রদান করে। দুটি সম্পূর্ণ স্বাধীন অ্যাপ্লিকেশন একই সাথে একই ভার্চুয়াল ঠিকানা 0x00400000-এ ডাটা রাখতে পারে, তবুও কোনো সংঘাত ছাড়াই তাদের আসল ডাটা ফিজিক্যাল ড্রামের সম্পূর্ণ ভিন্ন স্থানে নিরাপদে অবস্থান করে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Virtual Address Split & 4KB Pages',
            bn: '১. ভার্চুয়াল অ্যাড্রেস বিভাজন এবং ৪ কিলোবাইট পেজ'
          },
          text: {
            en: 'Operating systems manage memory in discrete 4096-byte blocks called Pages (4KB). When a program accesses a virtual address, the CPU hardware splits the binary address into two parts: a Virtual Page Number (VPN) and a 12-bit Page Offset indicating the exact byte within the page.',
            bn: 'অপারেটিং সিস্টেম মেমোরিকে পেজ (Page) নামের ৪০৯৬ বাইটের ( ৪ কিলোবাইট ) নির্দিষ্ট ব্লকে ভাগ করে পরিচালনা করে। কোনো প্রোগ্রাম ভার্চুয়াল ঠিকানা চাইলে সিপিইউ হার্ডওয়্যার ঠিকানাকে দুটি অংশে ভাগ করে: একটি ভার্চুয়াল পেজ নম্বর (VPN) এবং পেজের ভেতরের নির্দিষ্ট বাইট নির্দেশক ১২-বিট পেজ অফসেট।'
          },
        },
        {
          title: {
            en: '2. Page Tables & Address Translation',
            bn: '২. পেজ টেবিল এবং অ্যাড্রেস রূপান্তর'
          },
          text: {
            en: 'The operating system maintains a Page Table in memory for each process. The page table functions as an address dictionary, mapping each virtual page number to a corresponding Physical Frame Number (PFN) in hardware RAM chips.',
            bn: 'অপারেটিং সিস্টেম প্রতিটি প্রসেসের জন্য মেমোরিতে একটি করে পেজ টেবিল সংরক্ষণ করে। পেজ টেবিল একটি ডিরেক্টরির মতো কাজ করে, যা প্রতিটি ভার্চুয়াল পেজ নম্বরকে হার্ডওয়্যার র‍্যামের ফিজিক্যাল ফ্রেম নম্বরে (PFN) ম্যাপ করে দেয়।'
          },
        },
        {
          title: {
            en: '3. Translation Lookaside Buffer (TLB)',
            bn: '৩. Translation Lookaside Buffer (TLB)'
          },
          text: {
            en: 'Querying in-memory page tables on every instruction would slow memory access by 400 percent. To maintain speed, modern processors include a high-speed on-chip cache called the TLB. The TLB caches recent translations, resolving physical addresses in under 1 single nanosecond.',
            bn: 'প্রতিটি নির্দেশে মেমোরির পেজ টেবিল পরীক্ষা করলে কাজের গতি ৪০০ শতাংশ পর্যন্ত কমে যেত। গতি ধরে রাখতে আধুনিক প্রসেসরে টিএলবি (TLB) নামের একটি উচ্চগতির অন-চিপ ক্যাশ থাকে। TLB সাম্প্রতিক রূপান্তরগুলো সংরক্ষণ করে ১ ন্যানোসেকেন্ডেরও কম সময়ে ফিজিক্যাল ঠিকানা সরবরাহ করে।'
          },
        },
        {
          title: {
            en: '4. Page Faults & Demand Paging',
            bn: '৪. পেজ ফল্ট এবং ডিমান্ড পেজিং'
          },
          text: {
            en: 'If a program accesses a virtual page that is currently stored on an SSD swap file rather than in physical RAM, the CPU generates a Page Fault interrupt. The operating system kernel pauses the process, reads the 4KB page from disk into RAM, updates the page table, and transparently resumes execution.',
            bn: 'কোনো প্রোগ্রাম যদি এমন ভার্চুয়াল পেজ চায় যা ফিজিক্যাল র‍্যামে না থেকে এসএসডি সোয়াপ ফাইলে জমা আছে, তবে সিপিইউ একটি পেজ ফল্ট ইন্টারাপ্ট তৈরি করে। অপারেটিং সিস্টেম কার্নেল তখন ডিস্ক থেকে ৪ কিলোবাইট পেজটি র‍্যামে এনে পেজ টেবিল আপডেট করে এবং স্বাভাবিক কাজ পুনরায় শুরু করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Virtual Memory Architecture, MMU Translation & Process Isolation',
        bn: 'ভার্চুয়াল মেমোরি আর্কিটেকচার, MMU রূপান্তর এবং প্রসেস আইসোলেশন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Virtual memory translation architecture showing Process A and B virtual address spaces mapped through MMU to physical RAM frames">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">VIRTUAL ADDRESS TRANSLATION &amp; HARDWARE ISOLATION</text>
  
  <!-- Process A Virtual Space -->
  <g transform="translate(30, 50)">
    <rect width="180" height="150" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="90" y="24" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">PROCESS A (Browser)</text>
    <rect x="15" y="38" width="150" height="30" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="90" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">VPN 0 (0x00400000)</text>
    <rect x="15" y="74" width="150" height="30" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="90" y="94" fill="#cbd5e1" font-size="10" text-anchor="middle">VPN 1 (Stack Memory)</text>
    <rect x="15" y="110" width="150" height="30" rx="4" fill="#0f172a" stroke="#0284c7"/>
    <text x="90" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">VPN 2 (Heap Buffer)</text>
  </g>
  
  <!-- Process B Virtual Space -->
  <g transform="translate(30, 240)">
    <rect width="180" height="150" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
    <text x="90" y="24" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">PROCESS B (Game Engine)</text>
    <rect x="15" y="38" width="150" height="30" rx="4" fill="#0f172a" stroke="#7e22ce"/>
    <text x="90" y="58" fill="#cbd5e1" font-size="10" text-anchor="middle">VPN 0 (0x00400000)</text>
    <rect x="15" y="74" width="150" height="30" rx="4" fill="#0f172a" stroke="#7e22ce"/>
    <text x="90" y="94" fill="#cbd5e1" font-size="10" text-anchor="middle">VPN 1 (Audio Engine)</text>
    <rect x="15" y="110" width="150" height="30" rx="4" fill="#0f172a" stroke="#7e22ce"/>
    <text x="90" y="130" fill="#cbd5e1" font-size="10" text-anchor="middle">VPN 2 (Texture Mesh)</text>
  </g>
  
  <!-- Middle: CPU MMU & TLB Engine -->
  <g transform="translate(270, 110)">
    <rect width="260" height="220" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="130" y="26" fill="#f59e0b" font-size="12" font-weight="bold" text-anchor="middle">CPU MEMORY MANAGEMENT UNIT</text>
    
    <rect x="20" y="42" width="220" height="50" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="130" y="65" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">TLB (Hardware Cache)</text>
    <text x="130" y="82" fill="#cbd5e1" font-size="10" text-anchor="middle">Hit: &lt; 1 ns Latency</text>
    
    <rect x="20" y="105" width="220" height="50" rx="6" fill="#0f172a" stroke="#38bdf8"/>
    <text x="130" y="128" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">Page Table Walker</text>
    <text x="130" y="145" fill="#cbd5e1" font-size="10" text-anchor="middle">Traverses CR3 Page Directory</text>
    
    <rect x="20" y="165" width="220" height="42" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="130" y="191" fill="#ef4444" font-size="10" font-weight="bold" text-anchor="middle">Page Fault Handler (to Disk)</text>
  </g>
  
  <!-- Right: Physical Hardware DRAM Chips -->
  <g transform="translate(590, 50)">
    <rect width="210" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="105" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">PHYSICAL DRAM MEMORY</text>
    
    <rect x="15" y="42" width="180" height="40" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="90" y="66" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frame 5 (Process A Data)</text>
    
    <rect x="15" y="90" width="180" height="40" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="90" y="114" fill="#94a3b8" font-size="10" text-anchor="middle">Frame 6 (OS Kernel)</text>
    
    <rect x="15" y="138" width="180" height="40" rx="4" fill="#0f172a" stroke="#c084fc"/>
    <text x="90" y="162" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Frame 7 (Process B Data)</text>
    
    <rect x="15" y="186" width="180" height="40" rx="4" fill="#0f172a" stroke="#38bdf8"/>
    <text x="90" y="210" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Frame 8 (Process A Stack)</text>
    
    <rect x="15" y="234" width="180" height="40" rx="4" fill="#0f172a" stroke="#64748b"/>
    <text x="90" y="258" fill="#94a3b8" font-size="10" text-anchor="middle">Frame 9 (Free Memory)</text>
    
    <rect x="15" y="282" width="180" height="40" rx="4" fill="#0f172a" stroke="#c084fc"/>
    <text x="90" y="306" fill="#c084fc" font-size="10" font-weight="bold" text-anchor="middle">Frame 10 (Process B Audio)</text>
  </g>
  
  <!-- Flow Lines -->
  <line x1="210" y1="95" x2="270" y2="135" stroke="#38bdf8" stroke-width="2"/>
  <line x1="210" y1="285" x2="270" y2="285" stroke="#c084fc" stroke-width="2"/>
  <line x1="530" y1="140" x2="590" y2="70" stroke="#38bdf8" stroke-width="2"/>
  <line x1="530" y1="200" x2="590" y2="160" stroke="#c084fc" stroke-width="2"/>
  
  <text x="420" y="418" fill="#94a3b8" font-size="10" text-anchor="middle">Both processes share virtual address 0x00400000, but MMU isolates them into separate physical frames</text>
</svg>`,
      caption: {
        en: 'The Memory Management Unit (MMU) translates virtual pages to physical DRAM frames, guaranteeing total memory isolation between concurrent processes.',
        bn: 'মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) ভার্চুয়াল পেজকে ফিজিক্যাল ড্রাম ফ্রেমে ম্যাপ করে চলমান প্রসেসগুলোর মাঝে পূর্ণ নিরাপত্তা ও আইসোলেশন নিশ্চিত করে।'
      },
    },
    {
      type: 'heading',
      id: 'virtual-to-physical-math',
      text: {
        en: 'Virtual to Physical Address Translation Mathematics',
        bn: 'ভার্চুয়াল থেকে ফিজিক্যাল অ্যাড্রেস রূপান্তরের গাণিতিক সূত্র'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The translation of a virtual address into a physical address relies on binary bitwise arithmetic. In standard systems using 4096-byte pages (2^12 = 4096), the lowest 12 bits of any address represent the Page Offset. The higher-order bits represent the Virtual Page Number (VPN). Because pages and frames are identical in size, the offset passes through unchanged into the physical address, while the VPN is swapped for the Physical Frame Number (PFN) found in the page table.',
        bn: 'ভার্চুয়াল ঠিকানাকে ফিজিক্যাল ঠিকানায় রূপান্তরের মূল ভিত্তি হলো বাইনারি বিটওয়াইজ পাটিগণিত। ৪০৯৬ বাইটের পেজ ব্যবহার করা সিস্টেমে ( ২^১২ = ৪০৯৬ ) যেকোনো মেমোরি ঠিকানার সর্বনিম্নের ১২ টি বিট পেজ অফসেট প্রকাশ করে। অবশিষ্ট উচ্চ বিটগুলো ভার্চুয়াল পেজ নম্বর (VPN) নির্দেশ করে। যেহেতু পেজ ও ফ্রেমের আকার সমান, তাই অফসেট অংশটি অপরিবর্তিত থাকে এবং কেবল VPN অংশটি পেজ টেবিলের ফিজিক্যাল ফ্রেম নম্বর (PFN) দ্বারা প্রতিস্থাপিত হয়।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'virtual-memory-translator.js',
      code: `// Deterministic Simulation of Virtual-to-Physical Address Translation
// Demonstrates 4KB page splitting and multi-process memory isolation

const PAGE_SIZE = 4096;      // 4096 bytes per page (4KB)
const OFFSET_MASK = 0xFFF;   // Lowest 12 bits for byte offset (0 to 4095)

class VirtualMemorySimulator {
  constructor() {
    // Process Page Tables mapping Virtual Page Number -> Physical Frame Number
    this.processTables = {
      'Process_A': { 1024: 5,  1025: 8  }, // VPN 1024 -> Frame 5
      'Process_B': { 1024: 12, 1025: 19 }  // VPN 1024 -> Frame 12
    };
  }

  translate(processName, virtualAddress) {
    const vpn = Math.floor(virtualAddress / PAGE_SIZE); // Higher-order bits
    const offset = virtualAddress & OFFSET_MASK;       // Lower 12 bits

    const pageTable = this.processTables[processName];
    const pfn = pageTable ? pageTable[vpn] : undefined;

    if (pfn === undefined) {
      return {
        process: processName,
        virtualAddressHex: '0x' + virtualAddress.toString(16).padStart(8, '0'),
        status: 'PAGE_FAULT',
        reason: 'Page not resident in RAM'
      };
    }

    const physicalAddress = (pfn * PAGE_SIZE) + offset;

    return {
      process: processName,
      virtualAddressHex: '0x' + virtualAddress.toString(16).padStart(8, '0'),
      vpn,
      offset,
      pfn,
      physicalAddressHex: '0x' + physicalAddress.toString(16).padStart(8, '0'),
      status: 'TRANSLATED_SUCCESS'
    };
  }
}

const mmu = new VirtualMemorySimulator();
const sharedVirtualAddress = 0x004002A0; // Both processes query exact same virtual address

console.log('=== Virtual Memory Translation Benchmark ===');
const resultA = mmu.translate('Process_A', sharedVirtualAddress);
const resultB = mmu.translate('Process_B', sharedVirtualAddress);

console.log('Process A:');
console.log('  Virtual  :', resultA.virtualAddressHex, '(VPN ' + resultA.vpn + ', Offset ' + resultA.offset + ')');
console.log('  Physical :', resultA.physicalAddressHex, '(Mapped to Physical Frame ' + resultA.pfn + ')');

console.log('\\nProcess B:');
console.log('  Virtual  :', resultB.virtualAddressHex, '(VPN ' + resultB.vpn + ', Offset ' + resultB.offset + ')');
console.log('  Physical :', resultB.physicalAddressHex, '(Mapped to Physical Frame ' + resultB.pfn + ')');

console.log('\\nConclusion: Both processes use identical virtual address 0x004002a0, yet hardware routes them to separate physical frames (5 vs 12)!');`,
      caption: {
        en: 'The simulation illustrates how two processes querying virtual address 0x004002a0 translate to separate physical frames 5 and 12.',
        bn: 'সিমুলেশনটি দেখায় কীভাবে ২ টি প্রসেস একই ভার্চুয়াল ঠিকানা 0x004002a0 ব্যবহার করেও ফিজিক্যাল ফ্রেম ৫ এবং ১২ এর মাঝে পৃথকভাবে অবস্থান করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why 64-Bit Computers Use 48-Bit Canonical Addressing',
        bn: '৬৪-বিট কম্পিউটার কেন ৪৮-বিট ক্যানোনিক্যাল অ্যাড্রেসিং ব্যবহার করে'
      },
      text: {
        en: 'Although modern processors feature 64-bit registers, supporting a full 64-bit physical address space would require tracking 16 Exabytes of memory—requiring massive 5-level page tables that slow down address translation. Instead, x86-64 hardware adopts 48-bit canonical addressing (providing 256 Terabytes of virtual memory, split into 128 TB for user applications and 128 TB for the operating system kernel), delivering immense capacity through responsive 4-level lookups.',
        bn: 'যদিও আধুনিক প্রসেসরে ৬৪-বিট রেজিস্টার থাকে, তবুও সম্পূর্ণ ৬৪-বিট মেমোরি সমর্থন করতে গেলে ১৬ এক্সাবাইট মেমোরির হিসাব রাখতে হতো—যার জন্য বিশাল ৫-স্তরের পেজ টেবিলের প্রয়োজন হতো যা প্রসেসরকে ধীরগতির করে দিত। বর্তমান x86-64 হার্ডওয়্যার ৪৮-বিট ক্যানোনিক্যাল অ্যাড্রেসিং ব্যবহার করে ( যা ২৫৬ টেরাবাইট ভার্চুয়াল মেমোরি প্রদান করে এবং ব্যবহারকারী অ্যাপ ও কার্নেলের মাঝে ১২৮ টেরাবাইট করে বিভক্ত থাকে ), ফলে দ্রুত ৪-স্তরের পেজ টেবিলেই বিশাল ধারণক্ষমতা পাওয়া যায়।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-meet-ex-1',
      kind: 'predict',
      question: {
        en: 'How many total bytes exist in a standard computer virtual memory page frame (4KB = 4 * 1024)? (4096). Type the number.',
        bn: 'একটি সাধারণ কম্পিউটার ভার্চুয়াল মেমোরি পেজ ফ্রেমে মোট কত বাইট থাকে ( ৪ কিলোবাইট = ৪ * ১০২৪ )? ( ৪০৯৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4096',
      hint: {
        en: 'Multiply 4 by 1024 bytes: 4096.',
        bn: '৪ কে ১০২৪ দিয়ে গুণ করুন: ৪০৯৬।'
      },
      explanation: {
        en: 'A standard virtual memory page across x86-64 and ARM64 architectures contains exactly 4096 bytes (4KB).',
        bn: 'x86-64 এবং ARM64 আর্কিটেকচারে একটি স্ট্যান্ডার্ড ভার্চুয়াল মেমোরি পেজের আকার ঠিক ৪০৯৬ বাইট ( ৪ কিলোবাইট )।',
      },
    },
    {
      id: 'mem-meet-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the operational function of the Translation Lookaside Buffer (TLB) in modern microprocessors?',
        bn: 'আধুনিক মাইক্রোপ্রসেসরে Translation Lookaside Buffer (TLB) এর কাজের ভূমিকা কী?'
      },
      options: [
        {
          en: 'It is a specialized on-chip hardware cache that stores recent virtual-to-physical address translations, resolving memory lookups in under 1 nanosecond without accessing page tables in DRAM',
          bn: 'এটি প্রসেসরের ভেতরের একটি উচ্চগতির অন-চিপ হার্ডওয়্যার ক্যাশ যা সাম্প্রতিক ভার্চুয়াল-টু-ফিজিক্যাল ঠিকানা সংরক্ষণ করে এবং ড্রামের পেজ টেবিলে না গিয়েই ১ ন্যানোসেকেন্ডের মধ্যে ঠিকানা খুঁজে দেয়',
        },
        {
          en: 'It increases the physical volume of the computer cooling fan',
          bn: 'এটি কম্পিউটার কুলিং ফ্যানের শারীরিক গতি বৃদ্ধি করে',
        },
        {
          en: 'It plays sound recordings of keyboard typing through the headphones',
          bn: 'এটি হেডফোনের মাধ্যমে কিবোর্ড টাইপিংয়ের শব্দ শোনায়',
        },
        {
          en: 'It permanently deletes unused files from permanent hard disk storage',
          bn: 'এটি স্থায়ী হার্ড ডিস্ক স্টোরেজ থেকে অপ্রয়োজনীয় ফাইল মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'An on-chip cache accelerating virtual-to-physical address mapping.',
        bn: 'ভার্চুয়াল থেকে ফিজিক্যাল অ্যাড্রেস রূপান্তরকে দ্রুত করার অন-চিপ ক্যাশ।',
      },
      explanation: {
        en: 'Without the TLB, every memory read would require multiple DRAM accesses to walk page tables. The TLB caches mappings to achieve sub-nanosecond lookups.',
        bn: 'টিএলবি না থাকলে প্রতিবার মেমোরি পড়তে ড্রামে গিয়ে পেজ টেবিল খুঁজতে হতো। টিএলবি তা ক্যাশে রেখে অতি দ্রুতগতি নিশ্চিত করে।'
      },
    },
    {
      id: 'mem-meet-ex-3',
      kind: 'mcq',
      question: {
        en: 'What hardware event is triggered when a running program attempts to access a virtual memory page that is not currently loaded into physical RAM?',
        bn: 'একটি চলমান প্রোগ্রাম যখন এমন ভার্চুয়াল মেমোরি পেজ অ্যাক্সেস করার চেষ্টা করে যা বর্তমানে ফিজিক্যাল র‍্যামে নেই, তখন কোন হার্ডওয়্যার ঘটনাটি ঘটে?'
      },
      options: [
        {
          en: 'A Page Fault interrupt, prompting the operating system kernel to load the requested page from disk storage into an available physical frame',
          bn: 'একটি পেজ ফল্ট ইন্টারাপ্ট ঘটে, যা অপারেটিং সিস্টেম কার্নেলকে ডিস্ক স্টোরেজ থেকে কাঙ্ক্ষিত পেজটি ফিজিক্যাল র‍্যাম ফ্রেমে নিয়ে আসার নির্দেশ দেয়',
        },
        {
          en: 'The CPU permanently melts its silicon transistors',
          bn: 'সিপিইউ স্থায়ীভাবে তার সিলিকন ট্রানজিস্টর পুড়িয়ে ফেলে',
        },
        {
          en: 'The computer power cord catches fire immediately',
          bn: 'কম্পিউটারের পাওয়ার কর্ডে তাৎক্ষণিকভাবে আগুন ধরে যায়',
        },
        {
          en: 'All internet web browser tabs close permanently',
          bn: 'সমস্ত ইন্টারনেট ব্রাউজার ট্যাব চিরতরে বন্ধ হয়ে যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'The hardware generates a Page Fault, delegating page retrieval to the OS kernel.',
        bn: 'হার্ডওয়্যার একটি পেজ ফল্ট তৈরি করে কার্নেলকে পেজটি আনার দায়িত্ব দেয়।',
      },
      explanation: {
        en: 'A Page Fault signals that the requested memory page is unmapped or swapped out. The OS loads the data from disk into RAM and resumes the thread.',
        bn: 'পেজ ফল্ট প্রকাশ করে যে পেজটি র‍্যামে নেই। ওএস ডিস্ক থেকে ডাটা এনে পেজ টেবিলে ফ্রেম যুক্ত করে প্রোগ্রাম সচল করে।'
      },
    },
    {
      id: 'mem-meet-ex-4',
      kind: 'predict',
      question: {
        en: 'In a computer architecture utilizing 4096-byte pages (2^12 = 4096), how many binary bits are dedicated to the Page Offset in each virtual address? (12). Type the number.',
        bn: '৪০৯৬ বাইট পেজ বিশিষ্ট কম্পিউটার আর্কিটেকচারে ( ২^১২ = ৪০৯৬ ) প্রতিটি ভার্চুয়াল ঠিকানায় পেজ অফসেটের জন্য কয়টি বাইনারি বিট বরাদ্দ থাকে? ( ১২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '12',
      hint: {
        en: 'Calculate the exponent in 2^12 = 4096: 12 bits.',
        bn: '২^১২ = ৪০৯৬ এর ঘাত হিসাব করুন: ১২ বিট।'
      },
      explanation: {
        en: 'Since 2^12 = 4096, exactly 12 bits are needed to address any individual byte within a 4KB page.',
        bn: 'যেহেতু ২^১২ = ৪০৯৬, তাই একটি ৪ কিলোবাইট পেজের যেকোনো বাইটকে নির্দিষ্ট করতে ঠিক ১২ টি বিটের প্রয়োজন হয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Beginner Overview of Memory Quiz',
      bn: 'মেমোরির প্রাথমিক পরিচিতি কুইজ'
    },
    questions: [
      {
        id: 'mem-meet-qz-1',
        kind: 'mcq',
        topic: 'virtual-memory-isolation-benefits',
        question: {
          en: 'Why do modern multitasking operating systems execute programs inside virtual address spaces rather than allowing direct access to physical RAM?',
          bn: 'আধুনিক মাল্টিটাস্কিং অপারেটিং সিস্টেমগুলো কেন সরাসরি ফিজিক্যাল র‍্যাম অ্যাক্সেস করতে না দিয়ে ভার্চুয়াল অ্যাড্রেস স্পেসের ভেতরে প্রোগ্রাম চালায়?'
        },
        options: [
          {
            en: 'Virtual memory isolates processes from one another so buggy or malicious software cannot corrupt another application or crash the operating system kernel',
            bn: 'ভার্চুয়াল মেমোরি প্রতিটি প্রসেসকে আলাদা রাখে যাতে কোনো ত্রুটিপূর্ণ বা ক্ষতিকর সফটওয়্যার অন্য প্রোগ্রামের ক্ষতি করতে বা অপারেটিং সিস্টেম ক্র্যাশ করতে না পারে',
          },
          {
            en: 'Because computer software cannot read numbers greater than 100',
            bn: 'কারণ কম্পিউটার সফটওয়্যার ১০০ এর চেয়ে বড় সংখ্যা পড়তে পারে না',
          },
          {
            en: 'To make computer processors run at half their normal speed',
            bn: 'কম্পিউটার প্রসেসরের গতি স্বাভাবিকের চেয়ে অর্ধেক কমিয়ে আনার জন্য',
          },
          {
            en: 'Because physical RAM chips can only store English words',
            bn: 'কারণ ফিজিক্যাল র‍্যাম চিপ কেবল ইংরেজি শব্দ সংরক্ষণ করতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Preventing processes from overwriting each other memory.',
          bn: 'প্রসেসগুলো যেন একে অপরের মেমোরি ধ্বংস করতে না পারে তা ঠেকানো।',
        },
        explanation: {
          en: 'Virtual memory provides process isolation, memory protection, and the illusion of contiguous private memory, ensuring system stability.',
          bn: 'ভার্চুয়াল মেমোরি প্রসেস আইসোলেশন ও মেমোরি সুরক্ষা নিশ্চিত করে যা যেকোনো সফটওয়্যার ক্র্যাশ থেকে সিস্টেমকে সম্পূর্ণ রক্ষা করে।'
        },
      },
      {
        id: 'mem-meet-qz-2',
        kind: 'mcq',
        topic: 'tlb-miss-page-table-walk',
        question: {
          en: 'What architectural steps occur when a processor experiences a TLB miss during a virtual memory access?',
          bn: 'ভার্চুয়াল মেমোরি অ্যাক্সেসের সময় প্রসেসরে যখন একটি TLB মিস ঘটে, তখন কোন আর্কিটেকচারাল ধাপগুলো সম্পন্ন হয়?'
        },
        options: [
          {
            en: 'The hardware MMU performs a multi-level page table walk through DRAM to locate the translation entry, updates the TLB, and accesses the physical frame',
            bn: 'হার্ডওয়্যার MMU ড্রামে সংরক্ষিত বহুস্তরী পেজ টেবিল অনুসন্ধান করে ফ্রেম নম্বর বের করে, TLB আপডেট করে এবং ফিজিক্যাল ফ্রেম অ্যাক্সেস করে',
          },
          {
            en: 'The computer motherboard shuts down electrical power instantly',
            bn: 'কম্পিউটার মাদারবোর্ড সাথে সাথে বৈদ্যুতিক সংযোগ বন্ধ করে দেয়',
          },
          {
            en: 'All data on the computer NVMe SSD is reformatted to zero',
            bn: 'কম্পিউটারের NVMe এসএসডির সমস্ত ডাটা মুছে শূন্য করে দেওয়া হয়',
          },
          {
            en: 'The CPU cooling fan reverses its physical spinning direction',
            bn: 'সিপিইউ কুলিং ফ্যান তার ঘূর্ণন দিক সম্পূর্ণ উল্টো করে ফেলে',
          },
        ],
        answer: 0,
        hint: {
          en: 'The MMU walks multi-level page tables in DRAM to resolve the physical address.',
          bn: 'MMU ড্রামে গিয়ে বহুস্তরী পেজ টেবিল খুঁজে আসল ফিজিক্যাল ঠিকানা বের করে।',
        },
        explanation: {
          en: 'On a TLB miss, the MMU traverses hierarchical page directory tables in RAM to find the mapping, fills the TLB, and then performs the memory read.',
          bn: 'টিএলবি মিস হলে MMU র‍্যামের পেজ টেবিল থেকে ম্যাপিং বের করে টিএলবিতে জমা রাখে এবং মেমোরি অ্যাক্সেস সম্পন্ন করে।'
        },
      },
      {
        id: 'mem-meet-qz-3',
        kind: 'mcq',
        topic: 'page-fault-kernel-handling',
        question: {
          en: 'What responsibility does the operating system kernel perform when the CPU triggers a Page Fault?',
          bn: 'সিপিইউ যখন একটি পেজ ফল্ট তৈরি করে, তখন অপারেটিং সিস্টেম কার্নেল কোন দায়িত্বটি পালন করে?'
        },
        options: [
          {
            en: 'It allocates an available physical RAM frame, loads the requested 4KB data block from secondary disk storage into RAM, updates the process page table, and resumes execution',
            bn: 'এটি একটি ফাঁকা ফিজিক্যাল র‍্যাম ফ্রেম বরাদ্দ করে, ডিস্ক থেকে কাঙ্ক্ষিত ৪ কিলোবাইট ডাটা ব্লক র‍্যামে আনে, পেজ টেবিল আপডেট করে এবং প্রোগ্রামের কাজ পুনরায় চালু করে',
          },
          {
            en: 'It turns on the computer webcam to record the user face',
            bn: 'এটি ব্যবহারকারীর মুখ রেকর্ড করার জন্য ওয়েবক্যাম চালু করে',
          },
          {
            en: 'It sends an alert letter through the postal mail service',
            bn: 'এটি ডাক বিভাগের মাধ্যমে সতর্কবার্তা সম্বলিত চিঠি পাঠায়',
          },
          {
            en: 'It permanently disconnects the optical mouse from USB',
            bn: 'এটি ইউএসবি থেকে অপটিক্যাল মাউসের সংযোগ চিরতরে বিচ্ছিন্ন করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Fetching the missing 4KB page from storage into RAM and updating the page table.',
          bn: 'স্টোরেজ থেকে অনুপস্থিত ৪ কিলোবাইট পেজ র‍্যামে নিয়ে আসা ও পেজ টেবিল হালনাগাদ করা।',
        },
        explanation: {
          en: 'Demand paging allows systems to run programs larger than physical RAM by loading pages dynamically from disk when page faults occur.',
          bn: 'ডিমান্ড পেজিং পেজ ফল্টের মাধ্যমে প্রয়োজনমতো ডিস্ক থেকে পেজ এনে ফিজিক্যাল র‍্যামের চেয়েও বড় প্রোগ্রাম সফলভাবে চালানোর সুযোগ দেয়।'
        },
      },
      {
        id: 'mem-meet-qz-4',
        kind: 'mcq',
        topic: 'canonical-48bit-addressing-reason',
        question: {
          en: 'Why do modern 64-bit processors like AMD64 and Intel Core implement 48-bit canonical addressing instead of utilizing the full 64-bit address space?',
          bn: 'AMD64 এবং ইন্টেল কোরের মতো আধুনিক ৬৪-বিট প্রসেসরগুলো কেন পুরো ৬৪-বিট ব্যবহার না করে ৪৮-বিট ক্যানোনিক্যাল অ্যাড্রেসিং ব্যবহার করে?'
        },
        options: [
          {
            en: 'A full 64-bit address space would require 16 Exabytes of page table mapping, creating deep 5-level tables that introduce severe translation latency without practical need',
            bn: 'পুরো ৬৪-বিট অ্যাড্রেসিংয়ের জন্য ১৬ এক্সাবাইট পেজ টেবিল ট্র্যাকিংয়ের প্রয়োজন হতো, যা গভীর ৫-স্তরের টেবিল তৈরি করে অপ্রয়োজনীয় লেটেন্সি বাড়িয়ে দিত',
          },
          {
            en: 'Because computer hardware cannot count beyond 48',
            bn: 'কারণ কম্পিউটার হার্ডওয়্যার ৪৮ এর বেশি সংখ্যা গণনা করতে পারে না',
          },
          {
            en: 'To make computer monitors display only 48 colors',
            bn: 'কম্পিউটার মনিটরে কেবল ৪৮ টি রঙ প্রদর্শনের উদ্দেশ্যে',
          },
          {
            en: 'Because silicon transistors dissolve when touching 64-bit numbers',
            bn: 'কারণ ৬৪-বিট সংখ্যার সংস্পর্শে এলে সিলিকন ট্রানজিস্টর গলে যায়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Balancing vast virtual memory capacity (256 TB) with fast page table lookups.',
          bn: '২৫৬ টেরাবাইট মেমোরির বিশাল সুবিধার সাথে দ্রুত পেজ টেবিল অনুসন্ধানের ভারসাম্য রক্ষা।',
        },
        explanation: {
          en: '48-bit addressing provides 256 Terabytes of virtual memory, which is plenty for modern computing, while keeping page tables at a fast 4-level depth.',
          bn: '৪৮-বিট অ্যাড্রেসিং ২৫৬ টেরাবাইট ভার্চুয়াল মেমোরি দেয় যা বর্তমান কম্পিউটিংয়ের জন্য যথেষ্ট, এবং একই সাথে পেজ টেবিলকে দ্রুত ৪-স্তরের মধ্যে সীমাবদ্ধ রাখে।'
        },
      },
    ],
  },
  next: {
    slug: 'ram-basics',
    title: {
      en: 'Physical RAM: DRAM Cells, Capacitors & Bus Architecture',
      bn: 'ফিজিক্যাল র‍্যাম: DRAM সেল, ক্যাপাসিটর এবং বাস আর্কিটেকচার'
    },
  },
};
