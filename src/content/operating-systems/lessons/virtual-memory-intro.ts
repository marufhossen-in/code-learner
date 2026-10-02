import type { Lesson } from '../../../lib/types';

export const VirtualMemoryIntroLesson: Lesson = {
  slug: 'virtual-memory-intro',
  tech: 'operating-systems',
  title: {
    en: 'Virtual Memory, Paging Internals & Hardware Address Translation',
    bn: 'ভার্চুয়াল মেমোরি, পেজিং ইন্টারনালস এবং হার্ডওয়্যার অ্যাড্রেস ট্রান্সলেশন',
  },
  summary: {
    en: 'Understand how modern CPU Memory Management Units (MMU) translate virtual addresses into physical RAM frames. Explore multi-level page tables, Translation Lookaside Buffers (TLB), page fault hardware exceptions, demand paging, dirty bit writebacks, and swap space.',
    bn: 'সিপিইউ মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) কীভাবে ভার্চুয়াল মেমোরি ঠিকানাকে ফিজিক্যাল র‍্যাম ফ্রেমে রূপান্তর করে তা বিশ্লেষণ করুন। মাল্টি-লেভেল পেজ টেবিল, ট্রান্সলেশন লুকাসাইড বাফার (TLB), পেজ ফল্ট হার্ডওয়্যার এক্সেপশন, ডিমান্ড পেজিং, ডার্টি বিট রাইটব্যাক এবং সোয়াপ স্পেস বিস্তারিত জানুন।',
  },
  minutes: 22,
  next: {
    slug: 'boot-process',
    title: {
      en: 'Boot Sequence, UEFI Firmware, Bootloaders & Kernel Initialization',
      bn: 'বুট প্রক্রিয়া, ইউইএফআই ফার্মওয়্যার, বুটলোডার এবং কার্নেল প্রারম্ভিকতা',
    },
  },
  blocks: [
    {
      type: 'heading',
      id: 'virtual-address-spaces-and-mmu',
      text: {
        en: 'Virtual Memory Abstraction & The Hardware MMU',
        bn: 'ভার্চুয়াল মেমোরি অ্যাবস্ট্রাকশন এবং হার্ডওয়্যার এমএমইউ',
      },
    },
    {
      type: 'para',
      text: {
        en: 'In modern operating systems, user applications never interact with physical RAM bus addresses directly. Instead, every software process operates inside an isolated, contiguous 64-bit virtual address space. This architecture provides complete memory isolation: process A and process B can both write to address 0x400000 without overwriting each other, because their virtual addresses map to completely separate physical memory frames. Translating these virtual addresses into physical RAM locations at CPU clock speed is performed by dedicated silicon hardware called the Memory Management Unit (MMU).',
        bn: 'আধুনিক অপারেটিং সিস্টেমে ইউজার অ্যাপ্লিকেশনগুলো কখনো সরাসরি ফিজিক্যাল র‍্যাম বাসের ঠিকানার সাথে যোগাযোগ করে না। এর পরিবর্তে প্রতিটি সফটওয়্যার প্রসেস একটি স্বতন্ত্র ও সংরক্ষিত ৬৪-বিট ভার্চুয়াল অ্যাড্রেস স্পেসের ভেতরে কাজ করে। এই আর্কিটেকচার মেমোরির পূর্ণ আইসোলেশন নিশ্চিত করে: প্রসেস A এবং প্রসেস B উভয়ই 0x400000 ঠিকানায় ডেটা লিখলেও একে অপরের ওপর প্রভাব পড়ে না, কারণ তাদের ভার্চুয়াল ঠিকানা সম্পূর্ণ ভিন্ন ফিজিক্যাল মেমোরি ফ্রেমে সংযুক্ত থাকে। সিপিইউ ক্লক স্পিডে এই ভার্চুয়াল ঠিকানাকে ফিজিক্যাল র‍্যামের ঠিকানায় রূপান্তর করার কাজটি করে মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) নামের বিশেষ সিলিকন সার্কিট।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'Hardware Address Translation: TLB Cache, Page Tables & Physical RAM',
        bn: 'হার্ডওয়্যার অ্যাড্রেস ট্রান্সলেশন: টিএলবি ক্যাশ, পেজ টেবিল এবং ফিজিক্যাল র‍্যাম',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="virtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="tlbGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="physGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="mmuArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Virtual Address Structure -->
  <rect x="30" y="30" width="230" height="370" rx="10" fill="url(#virtGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="45" y="60" font-size="14" font-weight="700" fill="#0369a1">VIRTUAL ADDRESS</text>
  <text x="45" y="80" font-size="11" fill="#64748b">(Process Perspective)</text>

  <rect x="45" y="100" width="200" height="70" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="125" font-size="12" font-weight="700" fill="#0f172a">Virtual Page Number (VPN)</text>
  <text x="55" y="145" font-size="11" fill="#475569">VPN = 2 (Upper address bits)</text>

  <rect x="45" y="185" width="200" height="70" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="210" font-size="12" font-weight="700" fill="#0f172a">Page Offset (12 bits)</text>
  <text x="55" y="230" font-size="11" fill="#475569">Offset = 80 (Byte inside page)</text>

  <rect x="45" y="270" width="200" height="110" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="55" y="295" font-size="12" font-weight="600" fill="#0f172a">Total Address: 8272</text>
  <text x="55" y="320" font-size="11" fill="#64748b">(VPN 2 * 4096) + 80</text>
  <text x="55" y="340" font-size="11" fill="#0284c7">4096-Byte Standard Page</text>

  <!-- MMU & TLB Section -->
  <rect x="290" y="30" width="240" height="370" rx="10" fill="url(#tlbGrad)" stroke="#7e22ce" stroke-width="2"/>
  <text x="305" y="60" font-size="14" font-weight="700" fill="#6b21a8">MMU &amp; TLB CACHE</text>
  <text x="305" y="80" font-size="11" fill="#64748b">(Hardware Translation)</text>

  <rect x="305" y="100" width="210" height="120" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="315" y="125" font-size="12" font-weight="700" fill="#581c87">TLB Lookup (&lt; 1 ns)</text>
  <text x="315" y="150" font-size="11" fill="#16a34a">VPN 2 -&gt; PFN 15 (HIT!)</text>
  <text x="315" y="175" font-size="11" fill="#475569">Bypasses slow RAM walk</text>
  <text x="315" y="195" font-size="11" fill="#475569">Hit Rate &gt; 99% in production</text>

  <rect x="305" y="235" width="210" height="145" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="315" y="260" font-size="12" font-weight="700" fill="#581c87">Page Table Walk (Miss)</text>
  <text x="315" y="282" font-size="11" fill="#475569">CR3 Register -&gt; PML4</text>
  <text x="315" y="302" font-size="11" fill="#475569">PDPT -&gt; Page Directory</text>
  <text x="315" y="322" font-size="11" fill="#475569">Page Table -&gt; PFN Entry</text>
  <text x="315" y="345" font-size="11" fill="#dc2626">Present Bit 0 -&gt; Page Fault #PF</text>

  <!-- Connectors -->
  <path d="M 245 135 L 305 135" stroke="#475569" stroke-width="2" marker-end="url(#mmuArrow)"/>
  <path d="M 515 145 L 575 145" stroke="#047857" stroke-width="2.5" marker-end="url(#mmuArrow)"/>

  <!-- Physical Memory Region -->
  <rect x="560" y="30" width="230" height="370" rx="10" fill="url(#physGrad)" stroke="#047857" stroke-width="2"/>
  <text x="575" y="60" font-size="14" font-weight="700" fill="#065f46">PHYSICAL RAM</text>
  <text x="575" y="80" font-size="11" fill="#64748b">(Physical Frame Numbers)</text>

  <rect x="575" y="100" width="200" height="80" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="585" y="125" font-size="12" font-weight="700" fill="#0f172a">Page Frame #15 (PFN 15)</text>
  <text x="585" y="145" font-size="11" fill="#047857">Physical Base: 61440</text>
  <text x="585" y="165" font-size="11" fill="#047857">+ Offset 80 = Address 61520</text>

  <rect x="575" y="195" width="200" height="80" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="585" y="220" font-size="12" font-weight="700" fill="#0f172a">Page Frame #16</text>
  <text x="585" y="240" font-size="11" fill="#475569">Allocated to Process B</text>
  <text x="585" y="260" font-size="11" fill="#475569">Isolated physical block</text>

  <rect x="575" y="290" width="200" height="90" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="585" y="315" font-size="12" font-weight="700" fill="#475569">Swap Space on NVMe</text>
  <text x="585" y="335" font-size="11" fill="#b45309">Evicted dirty pages</text>
  <text x="585" y="355" font-size="11" fill="#b45309">Page Fault loads on demand</text>
</svg>`,
      caption: {
        en: 'The hardware address translation pipeline: the MMU splits virtual addresses into page numbers and offsets; the TLB provides single-cycle cache lookups; unmapped pages trigger demand-paging page faults.',
        bn: 'হার্ডওয়্যার অ্যাড্রেস ট্রান্সলেশন পাইপলাইন: এমএমইউ ভার্চুয়াল ঠিকানাকে পেজ নম্বর ও অফসেটে ভাগ করে, টিএলবি দ্রুত ক্যাশ লুকআপ দেয় এবং মেমোরিতে না থাকা পেজ ডিমান্ড-পেজিংয়ের মাধ্যমে পেজ ফল্ট শুরু করে।',
      },
    },
    {
      type: 'heading',
      id: 'paging-and-page-fault-lifecycle',
      text: {
        en: 'Paging Architecture, Demand Paging & Page Faults',
        bn: 'পেজিং আর্কিটেকচার, ডিমান্ড পেজিং এবং পেজ ফল্ট',
      },
    },
    {
      type: 'para',
      text: {
        en: 'In modern architectures, virtual memory and physical memory are divided into fixed chunks called pages and page frames, standardly 4096 bytes (4 KiB) in size. When a process requests memory (via malloc or mmap), the kernel does not immediately allocate physical RAM frames. Instead, it creates virtual page descriptors marked with a Present Bit of 0. When the CPU executes an instruction touching that address, the MMU encounters the missing mapping and raises a Page Fault hardware exception (Trap 14). The kernel traps into supervisor mode, allocates a physical RAM frame on demand, updates the page table with Present Bit 1, and transparently restarts the faulting CPU instruction.',
        bn: 'আধুনিক আর্কিটেকচারে ভার্চুয়াল মেমোরি এবং ফিজিক্যাল মেমোরি নির্দিষ্ট আকারের ক্ষুদ্র খণ্ডে বিভক্ত থাকে যা পেজ এবং পেজ ফ্রেম নামে পরিচিত, যার স্ট্যান্ডার্ড সাইজ ৪০৯৬ বাইট ( ৪ কিলোবাইট )। যখন কোনো প্রসেস মেমোরির আবেদন করে (malloc বা mmap দিয়ে), তখন কার্নেল সাথে সাথে ফিজিক্যাল র‍্যাম বরাদ্দ করে না। বরং সে ভার্চুয়াল পেজ তৈরি করে যার প্রেজেন্ট বিটের মান থাকে ০ । সিপিইউ যখন প্রথমবারের মতো ঐ ঠিকানায় ডেটা লিখতে বা পড়তে যায়, তখন এমএমইউ ম্যাপিং না পেয়ে পেজ ফল্ট হার্ডওয়্যার এক্সেপশন ( ট্র্যাপ ১৪ ) তৈরি করে। কার্নেল তখন সুপারভাইজার মোডে গিয়ে তৎক্ষণাৎ একটি ফিজিক্যাল র‍্যাম ফ্রেম বরাদ্দ করে, প্রেজেন্ট বিট ১ করে দেয় এবং প্রসেসরের নির্দেশটি পুনরায় নির্বিঘ্নে চালু করে।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic Simulation of MMU Address Translation, TLB Cache & Page Faults
class HardwareMMU {
  constructor(pageSize = 4096) {
    this.pageSize = pageSize;         // Standard 4096-byte (4 KiB) page size
    this.pageTable = new Map();       // VPN -> { pfn, present, writable, dirty }
    this.tlbCache = new Map();        // Hardware TLB Cache (VPN -> PFN)
    this.pageFaultCount = 0;
  }

  // Configure kernel page table entry
  mapVirtualPage(vpn, pfn, isPresent = true, isWritable = true) {
    this.pageTable.set(vpn, {
      pfn,
      present: isPresent,
      writable: isWritable,
      dirty: false,
    });
  }

  // CPU Address Translation Pipeline
  translateAddress(virtualAddress, writeOperation = false) {
    const vpn = Math.floor(virtualAddress / this.pageSize);
    const offset = virtualAddress % this.pageSize;

    // 1. Hardware TLB Cache Lookup (< 1 nanosecond)
    if (this.tlbCache.has(vpn)) {
      const pfn = this.tlbCache.get(vpn);
      const physicalAddress = pfn * this.pageSize + offset;
      return {
        physicalAddress,
        tlbHit: true,
        pageFault: false,
        source: 'TLB_CACHE_HIT',
      };
    }

    // 2. Page Table Walk in Memory
    const entry = this.pageTable.get(vpn);

    // 3. Page Fault Check (#PF Exception Vector 14)
    if (!entry || !entry.present) {
      this.pageFaultCount++;
      return {
        physicalAddress: null,
        tlbHit: false,
        pageFault: true,
        vpn,
        source: 'PAGE_FAULT_TRAP_14',
      };
    }

    if (writeOperation) {
      entry.dirty = true; // Mark page as dirty for future swap writeback
    }

    // Populate TLB cache after successful walk
    this.tlbCache.set(vpn, entry.pfn);
    const physicalAddress = entry.pfn * this.pageSize + offset;

    return {
      physicalAddress,
      tlbHit: false,
      pageFault: false,
      source: 'PAGE_TABLE_WALK_MISS',
    };
  }

  // Kernel Demand Paging Handler
  resolvePageFault(vpn, allocatedPfn) {
    this.mapVirtualPage(vpn, allocatedPfn, true, true);
    this.tlbCache.set(vpn, allocatedPfn);
  }
}

// Verification Scenario
const mmu = new HardwareMMU(4096);

// Pre-map Virtual Page 2 to Physical Frame 15 (Physical Base: 15 * 4096 = 61440)
mmu.mapVirtualPage(2, 15, true, true);

// 1. Translate Virtual Address 8272 (VPN = 2, Offset = 80) -> Page Table Miss, TLB Populated
const lookup1 = mmu.translateAddress(8272);
console.log('Access 1 (8272):', lookup1.source, '-> Physical Address:', lookup1.physicalAddress);

// 2. Translate Address 8300 (VPN = 2, Offset = 108) -> Immediate TLB Hit (< 1 ns)
const lookup2 = mmu.translateAddress(8300);
console.log('Access 2 (8300):', lookup2.source, '-> Physical Address:', lookup2.physicalAddress);

// 3. Access Unmapped Address 24576 (VPN = 6) -> Triggers Hardware Page Fault
const lookup3 = mmu.translateAddress(24576);
console.log('Access 3 (24576):', lookup3.source, '-> Fault on VPN:', lookup3.vpn);

// 4. Kernel Demand Paging allocates Physical Frame 30
mmu.resolvePageFault(lookup3.vpn, 30);
const retryLookup = mmu.translateAddress(24576);
console.log('Post-Recovery Access:', retryLookup.source, '-> Physical Address:', retryLookup.physicalAddress);`,
      caption: {
        en: 'A working simulation of CPU Memory Management Unit (MMU) address translation, TLB caching, and kernel demand paging exception handling.',
        bn: 'সিপিইউ মেমোরি ম্যানেজমেন্ট ইউনিট (MMU) অ্যাড্রেস ট্রান্সলেশন, টিএলবি ক্যাশিং এবং কার্নেল ডিমান্ড পেজিং এক্সেপশন পরিচালনার বাস্তব সিমুলেশন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual Memory',
          def: {
            en: 'An operating system abstraction presenting each running application with an isolated, contiguous memory address space decoupled from physical RAM chips.',
            bn: 'অপারেটিং সিস্টেমের মেমোরি বিমূর্তকরণ যা প্রতিটি অ্যাপ্লিকেশনকে ফিজিক্যাল র‍্যামের সীমাবদ্ধতা থেকে মুক্ত একটি নিজস্ব সুরক্ষিত ঠিকানা পরিসর প্রদান করে।',
          },
        },
        {
          term: 'Memory Management Unit (MMU)',
          def: {
            en: 'The CPU hardware silicon circuitry responsible for converting virtual memory addresses into physical RAM bus addresses during instruction execution.',
            bn: 'সিপিইউর ভেতরে থাকা হার্ডওয়্যার সিলিকন সার্কিট যা নির্দেশ কার্যকর করার সময় ভার্চুয়াল ঠিকানাকে ফিজিক্যাল র‍্যাম ঠিকানায় রূপান্তর করে।',
          },
        },
        {
          term: 'Translation Lookaside Buffer (TLB)',
          def: {
            en: 'An ultra-fast associative CPU hardware cache storing recent virtual-to-physical address mappings to avoid recurring multi-level page table walks.',
            bn: 'সিপিইউর অতি দ্রুতগতির অ্যাসোসিয়েটিভ হার্ডওয়্যার ক্যাশ যা বারবার পেজ টেবিল খোঁজা এড়াতে সাম্প্রতিক অ্যাড্রেস ম্যাপিং সংরক্ষণ করে।',
          },
        },
        {
          term: 'Page Fault (#PF)',
          def: {
            en: 'A synchronous hardware CPU exception (Trap 14 on x86) triggered when an instruction accesses a virtual page whose Present Bit is marked 0 in page tables.',
            bn: 'একটি সিঙ্ক্রোনাস হার্ডওয়্যার সিপিইউ এক্সেপশন ( x86 আর্কিটেকচারে ট্র্যাপ ১৪ ) যা প্রেজেন্ট বিট ০ থাকা মেমোরিতে অনুপস্থিত ভার্চুয়াল পেজে প্রবেশ করতে গেলে ঘটে।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'In high-throughput databases like PostgreSQL and Redis, walking 4-level page tables for terabytes of RAM creates massive TLB churn. Engineers configure Linux HugePages (allocating 2 MiB or 1 GiB pages instead of standard 4 KiB pages) to shrink page table sizes by a factor of 512, eliminating millions of TLB cache misses.',
        bn: 'পোস্টগ্রেস বা রেডিসের মতো উচ্চ-গতির ডেটাবেসে টেরাবাইট আকারের মেমোরি ব্যবস্থাপনায় ৪ স্তরের পেজ টেবিল খোঁজা টিএলবি ক্যাশের ওপর প্রচুর চাপ ফেলে। অভিজ্ঞ প্রকৌশলীরা স্ট্যান্ডার্ড ৪ কিলোবাইট পেজের বদলে ২ মেগাবাইট বা ১ গিগাবাইটের HugePages কনফিগার করেন, যা পেজ টেবিলের আকার ৫১২ গুণ কমিয়ে দিয়ে লাখ লাখ টিএলবি মিস প্রতিহত করে।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-vm-ex-1',
          kind: 'predict',
          question: {
            en: 'Given a standard 4096-byte page size, calculate the Virtual Page Number (VPN) for virtual memory address 8192 (8192 / 4096).',
            bn: 'স্ট্যান্ডার্ড ৪০৯৬ বাইটের পেজ সাইজ বিবেচনা করে ভার্চুয়াল মেমোরি ঠিকানা ৮১৯২ এর জন্য ভার্চুয়াল পেজ নম্বর (VPN) গণনা করুন ( ৮১৯২ / ৪০৯৬ )।',
          },
          answer: '2',
          hint: {
            en: 'Divide the virtual address by the page size: 8192 divided by 4096 equals an exact integer.',
            bn: 'ভার্চুয়াল ঠিকানাকে পেজ সাইজ দিয়ে ভাগ করুন: ৮১৯২ কে ৪০৯৬ দিয়ে ভাগ করলে একটি পূর্ণসংখ্যা পাওয়া যায়।',
          },
          explanation: {
            en: 'Virtual Page Number (VPN) = floor(Virtual Address / Page Size). Therefore, 8192 / 4096 = 2 exactly.',
            bn: 'ভার্চুয়াল পেজ নম্বর = floor(ভার্চুয়াল ঠিকানা / পেজ সাইজ)। সুতরাং ৮১৯২ / ৪০৯৬ = ২।',
          },
        },
        {
          id: 'os-vm-ex-2',
          kind: 'mcq',
          question: {
            en: 'What action does the central processing unit hardware take when an instruction references a virtual page whose Present Bit is 0 in the page table?',
            bn: 'যখন কোনো নির্দেশ এমন একটি ভার্চুয়াল পেজ ব্যবহারের চেষ্টা করে যার প্রেজেন্ট বিটের মান পেজ টেবিলে ০ থাকে, তখন সেন্ট্রাল প্রসেসিং ইউনিট হার্ডওয়্যার কী পদক্ষেপ নেয়?'
          },
          options: [
            {
              en: 'The CPU triggers a Page Fault hardware exception (Trap 14), suspending the process and switching to the kernel demand paging handler',
              bn: 'সিপিইউ একটি পেজ ফল্ট হার্ডওয়্যার এক্সেপশন (ট্র্যাপ ১৪) তৈরি করে প্রসেসটি সাময়িক স্থগিত করে এবং কার্নেল ডিমান্ড পেজিং হ্যান্ডলারে চলে যায়',
            },
            {
              en: 'The CPU deletes the operating system kernel and turns off the monitor backlight',
              bn: 'সিপিইউ অপারেটিং সিস্টেম কার্নেল মুছে ফেলে মনিটরের আলো বন্ধ করে দেয়',
            },
            {
              en: 'The process is granted unlimited root permissions across the local area network',
              bn: 'প্রসেসটিকে লোকাল নেটওয়ার্কে সীমাহীন রুট অধিকার প্রদান করা হয়',
            },
            {
              en: 'The motherboard physically switches to battery power backup',
              bn: 'মাদারবোর্ড ফিজিক্যালি ব্যাটারি ব্যাকআপ পাওয়ারে চলে যায়',
            },
          ],
          answer: 0,
          hint: {
            en: 'This is the foundational hardware mechanism that makes demand paging and swap memory possible.',
            bn: 'এটি সেই মৌলিক হার্ডওয়্যার কৌশল যার মাধ্যমে ডিমান্ড পেজিং এবং সোয়াপ মেমোরি সম্ভব হয়।',
          },
          explanation: {
            en: 'A Present Bit of 0 signals that the page is either on disk swap or not yet allocated. The CPU traps to the kernel (#PF) so the OS can load the frame transparently.',
            bn: 'প্রেজেন্ট বিট ০ মানে পেজটি এখনো ফিজিক্যাল র‍্যামে নেই। সিপিইউ কার্নেলে পেজ ফল্ট পাঠায় যেন অপারেটিং সিস্টেম ডিস্ক থেকে ডেটা এনে তা ঠিক করতে পারে।',
          },
        },
        {
          id: 'os-vm-ex-3',
          kind: 'mcq',
          question: {
            en: 'Why do modern 64-bit operating systems implement multi-level hierarchical page tables (like 4-level paging) instead of a single flat page table array?',
            bn: 'আধুনিক ৬৪-বিট অপারেটিং সিস্টেমগুলো একক ফ্ল্যাট পেজ টেবিল অ্যারের পরিবর্তে কেন বহু-স্তরের হায়ারার্কিক্যাল পেজ টেবিল (যেমন ৪ স্তরের পেজিং) ব্যবহার করে?'
          },
          options: [
            {
              en: 'Multi-level tables allocate memory only for address regions the process actually uses, saving gigabytes of physical RAM that would otherwise be wasted storing empty entries',
              bn: 'মাল্টি-লেভেল টেবিল কেবল প্রসেসের প্রকৃতপক্ষে ব্যবহৃত মেমোরি অংশের জন্য টেবিল তৈরি করে, যা খালি এন্ট্রি সংরক্ষণে গিগাবাইট র‍্যাম অপচয় রোধ করে',
            },
            {
              en: 'Flat page tables cause computer monitors to display flickering horizontal lines',
              bn: 'ফ্ল্যাট পেজ টেবিলের কারণে মনিটরে কাঁপাকাঁপা দাগ দেখা দেয়',
            },
            {
              en: 'Single page tables were legally outlawed by international networking treaties',
              bn: 'একক পেজ টেবিল আন্তর্জাতিক কম্পিউটার আইন দ্বারা নিষিদ্ধ করা হয়েছিল',
            },
            {
              en: 'Multi-level paging allows applications to run without any central processing unit',
              bn: 'মাল্টি-লেভেল পেজিংয়ের মাধ্যমে প্রসেসর ছাড়াই অ্যাপ্লিকেশন চালানো যায়',
            },
          ],
          answer: 0,
          hint: {
            en: 'A 64-bit address space is astronomically vast; most processes use only a tiny fraction of it.',
            bn: '৬৪-বিট ঠিকানা পরিসর সুবিশাল; বেশিরভাগ প্রোগ্রাম এর অতি সামান্য অংশ ব্যবহার করে।',
          },
          explanation: {
            en: 'A flat page table for a 64-bit space would require millions of gigabytes of RAM. Hierarchical tables omit unallocated branches, consuming RAM only for active allocations.',
            bn: '৬৪-বিট স্পেসের ফ্ল্যাট টেবিলের জন্য লাখ লাখ গিগাবাইট র‍্যাম লাগত। হায়ারার্কিক্যাল টেবিল অব্যবহৃত অংশ বাদ দিয়ে কেবল সক্রিয় মেমোরির হিসাব রাখে।',
          },
        },
        {
          id: 'os-vm-ex-4',
          kind: 'predict',
          question: {
            en: 'What is the standard numerical CPU hardware interrupt exception vector number assigned to a Page Fault (#PF) on x86 processors?',
            bn: 'x86 প্রসেসরে পেজ ফল্ট (#PF) নির্দেশকারী স্ট্যান্ডার্ড সংখ্যাসূচক সিপিইউ হার্ডওয়্যার ইন্টারাপ্ট এক্সেপশন ভেক্টর নম্বর কত?'
          },
          answer: '14',
          hint: {
            en: 'It is an integer between 10 and 20, represented by Trap 0x0E in hexadecimal.',
            bn: 'এটি ১০ থেকে ২০ এর মধ্যকার একটি পূর্ণসংখ্যা, যা হেক্সাডেসিমেলে Trap 0x0E নির্দেশ করে।',
          },
          explanation: {
            en: 'On x86 architectures, hardware interrupt vector 14 (#PF) is dedicated to page faults generated by the Memory Management Unit.',
            bn: 'x86 আর্কিটেকচারে মেমোরি ম্যানেজমেন্ট ইউনিট দ্বারা তৈরি পেজ ফল্টের জন্য হার্ডওয়্যার ইন্টারাপ্ট ভেক্টর ১৪ নির্ধারিত।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'Virtual Memory & Paging Knowledge Check',
      bn: 'ভার্চুয়াল মেমোরি এবং পেজিং জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-vm-qz-1',
          kind: 'mcq',
          topic: 'tlb-cache-performance',
          question: {
            en: 'How does the Translation Lookaside Buffer (TLB) maintain high computational performance during virtual address translation?',
            bn: 'ভার্চুয়াল অ্যাড্রেস ট্রান্সলেশনের সময় ট্রান্সলেশন লুকাসাইড বাফার (TLB) কীভাবে উচ্চ কম্পিউটেশনাল গতি বজায় রাখে?'
          },
          options: [
            {
              en: 'It acts as an on-chip hardware associative cache that delivers virtual-to-physical translations in a single clock cycle (&lt; 1 ns), avoiding slow multi-level RAM table walks',
              bn: 'এটি একটি অন-চিপ হার্ডওয়্যার ক্যাশ হিসেবে কাজ করে যা একক ক্লক সাইকেলে (&lt; ১ ns) ট্রান্সলেশন সরবরাহ করে ধীরগতির র‍্যাম পেজ টেবিল খোঁজা এড়ায়',
            },
            {
              en: 'It converts virtual addresses into wireless radio signals broadcast to nearby antennas',
              bn: 'এটি ভার্চুয়াল ঠিকানাকে বেতার তরঙ্গে রূপান্তর করে আশপাশের অ্যান্টেনার কাছে পাঠায়',
            },
            {
              en: 'It compresses user images stored inside the browser cache',
              bn: 'এটি ব্রাউজার ক্যাশে থাকা ছবিগুলোর আকার ছোট করে ফেলে',
            },
            {
              en: 'It reboots the computer whenever more than 100 files are opened simultaneously',
              bn: 'একসাথে ১০০ টির বেশি ফাইল খোলা হলে এটি কম্পিউটার রিস্টার্ট করে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Without the TLB, every single memory read would require 4 additional memory lookups to walk the page table.',
            bn: 'টিএলবি না থাকলে প্রতিবার মেমোরি পড়ার জন্য পেজ টেবিল খুঁজতে আরও ৪ টি অতিরিক্ত র‍্যাম অ্যাক্সেসের প্রয়োজন হতো।',
          },
          explanation: {
            en: 'The TLB caches recent translations directly in CPU silicon. Typical workloads achieve a &gt;99% TLB hit rate, allowing near-instantaneous translation.',
            bn: 'টিএলবি অতি সাম্প্রতিক ট্রান্সলেশনগুলো সরাসরি প্রসেসর সিলিকনে সংরক্ষণ করে। ফলে ৯৯% ক্ষেত্রে তৎক্ষণাৎ ফিজিক্যাল ঠিকানা পাওয়া যায়।',
          },
        },
        {
          id: 'os-vm-qz-2',
          kind: 'mcq',
          topic: 'demand-paging-lifecycle',
          question: {
            en: 'What architectural technique allows an operating system to execute a 16-gigabyte application program on a computer equipped with only 8 gigabytes of physical RAM?',
            bn: 'কোন আর্কিটেকচারাল কৌশলের মাধ্যমে একটি অপারেটিং সিস্টেম মাত্র ৮ গিগাবাইট ফিজিক্যাল র‍্যাম থাকা কম্পিউটারে একটি ১৬ গিগাবাইট আকারের অ্যাপ্লিকেশন চালাতে পারে?'
          },
          options: [
            {
              en: 'Virtual memory demand paging and secondary storage swap space, keeping only actively referenced pages in physical RAM frames',
              bn: 'ভার্চুয়াল মেমোরি ডিমান্ড পেজিং এবং সেকেন্ডারি সোয়াপ স্পেস, যা কেবল সক্রিয়ভাবে ব্যবহৃত পেজগুলোকে ফিজিক্যাল র‍্যাম ফ্রেমে ধরে রাখে',
            },
            {
              en: 'Overclocking the monitor cable to transmit extra RAM bits',
              bn: 'মনিটরের ক্যাবল ওভারক্লক করে অতিরিক্ত র‍্যাম বিট আদান-প্রদান করা',
            },
            {
              en: 'Deleting older files from the desktop folder automatically',
              bn: 'ডেস্কটপ ফোল্ডার থেকে পুরনো ফাইলগুলো স্বয়ংক্রিয়ভাবে মুছে ফেলা',
            },
            {
              en: 'Translating all application variables into Unicode emojis',
              bn: 'অ্যাপ্লিকেশনের সকল ভেরিয়েবলকে ইউনিকোড ইমোজিতে রূপান্তর করা',
            },
          ],
          answer: 0,
          hint: {
            en: 'Inactive pages are written to swap disk space and loaded back into RAM only when demanded.',
            bn: 'নিষ্ক্রিয় পেজগুলো ডিস্কের সোয়াপ স্পেসে জমা রাখা হয় এবং প্রয়োজনের সময় পুনরায় র‍্যামে লোড করা হয়।',
          },
          explanation: {
            en: 'Demand paging moves dormant pages to backing storage (swap). The system appears to have abundant memory because only working sets reside in physical RAM.',
            bn: 'ডিমান্ড পেজিং নিষ্ক্রিয় পেজগুলোকে সোয়াপ পার্টিশনে সরিয়ে নেয়। ফলে কেবল বর্তমান কাজের অংশটুকু র‍্যামে রেখে বড় প্রোগ্রামও চালানো সম্ভব হয়।',
          },
        },
        {
          id: 'os-vm-qz-3',
          kind: 'mcq',
          topic: 'dirty-bit-role',
          question: {
            en: 'In operating system memory management, what is the specific function of the "Dirty Bit" in a page table descriptor entry?',
            bn: 'অপারেটিং সিস্টেমের মেমোরি ব্যবস্থাপনায় পেজ টেবিল এন্ট্রিতে থাকা "ডার্টি বিট" (Dirty Bit)-এর সুনির্দিষ্ট কাজ কী?'
          },
          options: [
            {
              en: 'It indicates whether the page has been modified by write instructions since being loaded, determining if it must be written back to disk before eviction',
              bn: 'এটি নির্দেশ করে র‍্যামে লোড হওয়ার পর পেজটিতে কোনো ডেটা পরিবর্তন হয়েছে কিনা, যা নির্ধারণ করে পেজটি র‍্যাম থেকে সরানোর আগে ডিস্কে সংরক্ষণ করা লাগবে কিনা',
            },
            {
              en: 'It flags pages that contain computer virus signatures',
              bn: 'এটি যেসব পেজে কম্পিউটার ভাইরাস রয়েছে সেগুলোকে চিহ্নিত করে',
            },
            {
              en: 'It tracks whether the keyboard cable has accumulated physical dust',
              bn: 'এটি কিবোর্ডের তারে ধুলাবালি জমেছে কিনা তা পর্যবেক্ষণ করে',
            },
            {
              en: 'It turns on the red LED light on the front panel of the computer case',
              bn: 'এটি কম্পিউটারের সামনের লাল এলইডি বাতি জ্বালিয়ে দেয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'If a page was only read and never written to, writing it back to disk upon eviction is a completely wasted I/O operation.',
            bn: 'যদি কোনো পেজে কেবল রিড করা হয়ে থাকে, তবে তা ডিস্কে আবার সংরক্ষণ করা অপ্রয়োজনীয় ডিস্ক অপচয়।',
          },
          explanation: {
            en: 'Hardware sets the dirty bit when a write occurs. When evicting a clean page (dirty=0), the kernel simply discards it; if dirty=1, the kernel must write it to swap first.',
            bn: 'পেজে কিছু লেখা হলে হার্ডওয়্যার ডার্টি বিট ১ করে দেয়। বিট ০ থাকলে কার্নেল ডিস্কে না লিখে পেজটি সরাসরি ফেলে দিতে পারে, আর ১ থাকলে আগে সোয়াপে সেভ করতে হয়।',
          },
        },
        {
          id: 'os-vm-qz-4',
          kind: 'mcq',
          topic: 'hugepages-benefit',
          question: {
            en: 'Why do production engineers configure Linux HugePages (such as 2 MiB or 1 GiB page sizes) for large in-memory databases like PostgreSQL and Redis?',
            bn: 'পোস্টগ্রেস বা রেডিসের মতো বিশাল মেমোরিভিত্তিক ডেটাবেসের জন্য প্রোডাকশন ইঞ্জিনিয়াররা কেন লিনাক্স HugePages (যেমন ২ মেগাবাইট বা ১ গিগাবাইট পেজ সাইজ) কনফিগার করেন?'
          },
          options: [
            {
              en: 'Larger page sizes drastically reduce the total number of page table entries, minimizing TLB misses and accelerating high-volume memory throughput',
              bn: 'বড় পেজ সাইজ মোট পেজ টেবিল এন্ট্রির সংখ্যা ব্যাপকভাবে কমিয়ে দেয়, যা টিএলবি মিস কমিয়ে উচ্চ-গতির মেমোরি থ্রুপুট বৃদ্ধি করে',
            },
            {
              en: 'HugePages convert magnetic hard drives into optical solid state drives',
              bn: 'HugePages সাধারণ হার্ড ড্রাইভকে অপটিক্যাল এসএসডিতে পরিণত করে',
            },
            {
              en: 'HugePages make web pages visible without an internet connection',
              bn: 'HugePages ইন্টারনেট সংযোগ ছাড়াই ওয়েব পেজ দেখার সুযোগ তৈরি করে',
            },
            {
              en: 'HugePages prevent developers from making programming syntax mistakes',
              bn: 'HugePages ডেভেলপারদের সিনট্যাক্স ভুল করা প্রতিরোধ করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'A single 2 MiB HugePage covers the memory span of 512 standard 4 KiB pages using a single TLB cache entry.',
            bn: 'একটি ২ মেগাবাইট HugePage একটিমাত্র টিএলবি এন্ট্রি দিয়ে ৫১২ টি সাধারণ ৪ কিলোবাইট পেজের মেমোরি নিয়ন্ত্রণ করতে পারে।',
          },
          explanation: {
            en: 'By mapping 2 MiB instead of 4 KiB per entry, a single TLB entry covers 512 times more address space, dramatically boosting database memory performance.',
            bn: 'প্রতি এন্ট্রিতে ৪ কিলোবাইটের জায়গায় ২ মেগাবাইট ম্যাপ করায় একটি টিএলবি এন্ট্রি ৫১২ গুণ বেশি মেমোরি কভার করে, যা ডেটাবেসের গতি অনেক বাড়িয়ে দেয়।',
          },
        },
    ],
  },
};
