import type { Lesson } from '../../../lib/types';

export const FragmentationLesson: Lesson = {
  slug: 'fragmentation',
  tech: 'memory',
  title: {
    en: 'Memory Fragmentation: Internal vs External, Slab Allocation & Buddy Allocators',
    bn: 'মেমোরি ফ্র্যাগমেন্টেশন: ইন্টারনাল বনাম এক্সটারনাল, স্ল্যাব অ্যালোকেশন এবং বাডি অ্যালোকেটর'
  },
  summary: {
    en: 'Understand how memory fragmentation wastes system RAM and degrades application performance. Compare Internal Fragmentation (allocator rounding overhead within assigned chunks) against External Fragmentation (scattered unallocated holes that prevent contiguous memory allocations). Explore how operating systems solve fragmentation using Slab Allocators and the Buddy Memory Allocation algorithm.',
    bn: 'মেমোরি ফ্র্যাগমেন্টেশন কীভাবে সিস্টেমের র‍্যাম অপচয় করে এবং অ্যাপ্লিকেশনের গতি কমিয়ে দেয় তা বুঝুন। ইন্টারনাল ফ্র্যাগমেন্টেশন ( নির্ধারিত চাঙ্কের ভেতরে অ্যালোকেটরের রাউন্ডিং অপচয় ) বনাম এক্সটারনাল ফ্র্যাগমেন্টেশনের ( বিক্ষিপ্ত ফাঁকা ছিদ্র যা অবিচ্ছিন্ন মেমোরি বরাদ্দে বাধা দেয় ) তুলনা করুন। স্ল্যাব অ্যালোকেটর এবং বাডি মেমোরি অ্যালোকেশন অ্যালগরিদম ব্যবহার করে অপারেটিং সিস্টেম কীভাবে ফ্র্যাগমেন্টেশন দূর করে তা শিখুন।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'internal-versus-external-fragmentation',
      text: {
        en: 'The Wasted Space Problem: Internal versus External Fragmentation',
        bn: 'অপচয়কৃত মেমোরির সংকট: ইন্টারনাল বনাম এক্সটারনাল ফ্র্যাগমেন্টেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you build server applications that allocate and free memory blocks over thousands of hours, the physical memory space becomes fractured into an inefficient mosaic of gaps. This degradation is known as Memory Fragmentation, and it occurs in two distinct forms: Internal and External.',
        bn: 'আপনি যখন এমন সার্ভার অ্যাপ্লিকেশন তৈরি করেন যা হাজার হাজার ঘণ্টা ধরে মেমোরি ব্লক বরাদ্দ ও মুক্ত করতে থাকে, তখন ফিজিক্যাল মেমোরি স্পেস অদক্ষ ফাঁকা অংশে খণ্ডিত হয়ে পড়ে। এই সমস্যাটিকে মেমোরি ফ্র্যাগমেন্টেশন বলা হয় এবং এটি দুটি সুস্পষ্ট রূপে দেখা দেয়: ইন্টারনাল এবং এক্সটারনাল।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Internal Fragmentation happens when an allocator rounds up memory requests to fixed slot sizes. For instance, if an application requests 33 bytes, a 64-byte block allocator must reserve 64 bytes. The remaining 31 bytes inside the allocated chunk cannot be used by any other thread, representing wasted internal capacity.',
        bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন ঘটে যখন কোনো অ্যালোকেটর মেমোরির অনুরোধকে নির্ধারিত নির্দিষ্ট স্লট আকারে বৃদ্ধি করে। উদাহরণস্বরূপ, কোনো অ্যাপ্লিকেশন যদি ৩৩ বাইট চায়, তবে ৬৪-বাইটের ব্লক অ্যালোকেটরকে ৬৪ বাইটই বরাদ্দ করতে হয়। বরাদ্দকৃত চাঙ্কের ভেতরের অবশিষ্ট ৩১ বাইট অন্য কোনো থ্রেড ব্যবহার করতে পারে না, যা অভ্যন্তরীণ অপচয় হিসেবে গণ্য হয়।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'External Fragmentation occurs when total free memory is ample, but it is fragmented into thousands of isolated, non-contiguous holes. Even if a system possesses 500 Megabytes of unallocated RAM, if no individual contiguous gap exceeds 4 Megabytes, a single request for a 5 Megabyte array will fail with an Out-of-Memory error.',
        bn: 'এক্সটারনাল ফ্র্যাগমেন্টেশন ঘটে যখন সর্বমোট মুক্ত মেমোরির পরিমাণ যথেষ্ট থাকে, কিন্তু তা হাজার হাজার বিচ্ছিন্ন ক্ষুদ্র ফাঁকে ছড়িয়ে থাকে। এমনকি কোনো সিস্টেমে যদি সর্বমোট ৫০০ মেগাবাইট ফাঁকা র‍্যামও থাকে, তবুও কোনো একক অবিচ্ছিন্ন ফাঁকা স্থান যদি ৪ মেগাবাইটের বেশি না হয়, তবে ৫ মেগাবাইটের একটি অবিচ্ছিন্ন অ্যারো বরাদ্দের অনুরোধ আউট-অব-মেমোরি এরর দিয়ে ব্যর্থ হবে।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Slab Allocation & Fixed-Size Buckets',
            bn: '১. স্ল্যাব অ্যালোকেশন এবং নির্দিষ্ট আকারের বাকেট'
          },
          text: {
            en: 'The Linux kernel and high-performance allocators group memory into pre-allocated Slab pools dedicated to specific byte sizes (e.g. 32B, 64B, 128B slabs). Because every slot within a 64B slab is identical, freeing and reallocating objects leaves zero awkward holes, eliminating external fragmentation completely.',
            bn: 'লিনাক্স কার্নেল এবং উচ্চগতির অ্যালোকেটরগুলো মেমোরিকে নির্দিষ্ট আকারের স্ল্যাব পুলে ( যেমন ৩২B, ৬৪B, ১২৮B স্ল্যাব ) ভাগ করে রাখে। যেহেতু একটি ৬৪B স্ল্যাবের প্রতিটি স্লটের আকার সমান, তাই অবজেক্ট মুছে ফেলা ও পুনরায় বরাদ্দ করায় কোনো অপ্রত্যাশিত ফাঁক তৈরি হয় না, যা এক্সটারনাল ফ্র্যাগমেন্টেশন সম্পূর্ণ দূর করে।'
          },
        },
        {
          title: {
            en: '2. The Buddy Memory Allocator',
            bn: '২. বাডি মেমোরি অ্যালোকেটর অ্যালগরিদম'
          },
          text: {
            en: 'Buddy allocators divide memory into power-of-two blocks (e.g. 1024KB splits into two 512KB buddies; 512KB splits into two 256KB buddies). When two adjacent buddy blocks are deallocated, the allocator coalesces them instantly back into a single 512KB block.',
            bn: 'বাডি অ্যালোকেটর মেমোরিকে দুইয়ের ঘাতবিশিষ্ট ব্লকে বিভক্ত করে ( যেমন ১০২৪ কিলোবাইট দুটি ৫১২ কিলোবাইট বাডিতে এবং ৫১২ কিলোবাইট দুটি ২৫৬ কিলোবাইট বাডিতে বিভক্ত হয় )। যখন দুটি সংলগ্ন বাডি ব্লক মুক্ত হয়, তখন অ্যালোকেটর তাৎক্ষণিকভাবে সেগুলোকে একত্রিত করে পুনরায় একটি একক ৫১২ কিলোবাইট ব্লকে রূপান্তর করে।'
          },
        },
        {
          title: {
            en: '3. Heap Compaction in Tracing GCs',
            bn: '৩. ট্রেসিং GC-তে হিপ কম্প্যাকশন মেকানিজম'
          },
          text: {
            en: 'Managed runtimes like Java HotSpot execute a Compact phase following garbage collection: surviving live objects are shifted contiguously toward low memory addresses, coalescing all scattered holes into one contiguous free region at the top of the heap.',
            bn: 'জাভা হটস্পটের মতো পরিচালিত রানটাইম গার্বেজ কালেকশনের পরে একটি কম্প্যাক্ট ধাপ সম্পন্ন করে: টিকে থাকা লাইভ অবজেক্টগুলোকে মেমোরির নিচের ঠিকানায় একসাথে সরিয়ে আনা হয়, যা সমস্ত বিক্ষিপ্ত ফাঁকা স্থানকে হিপের শীর্ষে একটি বিশাল অবিচ্ছিন্ন স্থানে পরিণত করে।'
          },
        },
        {
          title: {
            en: '4. 2MB HugePages for Database Workloads',
            bn: '৪. ডাটাবেজ সিস্টেমের জন্য ২ মেগাবাইট হিউজপেজ'
          },
          text: {
            en: 'Standard 4096-byte pages require millions of page table entries for large databases. Operating systems support 2MB and 1GB HugePages, slashing page table size and drastically reducing CPU Translation Lookaside Buffer (TLB) misses.',
            bn: 'সাধারণ ৪০৯৬ বাইটের পেজগুলো বড় ডাটাবেজের জন্য কোটি কোটি পেজ টেবিল এন্ট্রি তৈরি করে। অপারেটিং সিস্টেম ২ মেগাবাইট এবং ১ গিগাবাইট হিউজপেজ সমর্থন করে, যা পেজ টেবিলের আকার কমায় এবং সিপিইউর TLB মিস লক্ষণীয়ভাবে কমিয়ে আনে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Memory Fragmentation Taxonomy: Internal Slack, External Gaps & Buddy Coalescing',
        bn: 'মেমোরি ফ্র্যাগমেন্টেশনের প্রকারভেদ: ইন্টারনাল স্ল্যাক, এক্সটারনাল গ্যাপ এবং বাডি কোয়ালেসিং'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Internal versus external memory fragmentation and buddy allocator diagram">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">MEMORY FRAGMENTATION PATTERNS &amp; ALLOCATOR SOLUTIONS</text>
  
  <!-- Row 1: Internal Fragmentation -->
  <g transform="translate(30, 48)">
    <rect width="780" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
    <text x="20" y="24" fill="#f59e0b" font-size="12" font-weight="bold">PATTERN 1: INTERNAL FRAGMENTATION (Slack Overhead)</text>
    <text x="550" y="24" fill="#94a3b8" font-size="10">Request: 33 Bytes | Assigned: 64B</text>
    
    <!-- 64-byte box -->
    <rect x="20" y="38" width="450" height="42" rx="4" fill="#0f172a" stroke="#64748b"/>
    <!-- 33B Used payload -->
    <rect x="20" y="38" width="232" height="42" rx="4" fill="#065f46" stroke="#10b981"/>
    <text x="136" y="63" fill="#6ee7b7" font-size="11" font-weight="bold" text-anchor="middle">33 Bytes Used Payload</text>
    
    <!-- 31B Wasted slack -->
    <rect x="252" y="38" width="218" height="42" rx="4" fill="#7f1d1d" stroke="#ef4444"/>
    <text x="361" y="63" fill="#fca5a5" font-size="11" font-weight="bold" text-anchor="middle">31 Bytes Wasted Slack</text>
    
    <text x="610" y="63" fill="#cbd5e1" font-size="10" text-anchor="middle">Slot is 64B; 31B locked &amp; wasted!</text>
  </g>
  
  <!-- Row 2: External Fragmentation -->
  <g transform="translate(30, 155)">
    <rect width="780" height="115" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2"/>
    <text x="20" y="24" fill="#ef4444" font-size="12" font-weight="bold">PATTERN 2: EXTERNAL FRAGMENTATION (Scattered Gaps)</text>
    <text x="510" y="24" fill="#fca5a5" font-size="10">Total Free: 12 MB | Request: 5 MB Array -> FAILS!</text>
    
    <!-- 16MB Total RAM strip -->
    <g transform="translate(20, 38)">
      <!-- 4MB hole -->
      <rect x="0" y="0" width="160" height="45" rx="4" fill="#1e3a5f" stroke="#38bdf8"/>
      <text x="80" y="26" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Free 4 MB Hole</text>
      
      <!-- 2MB used -->
      <rect x="170" y="0" width="80" height="45" rx="4" fill="#334155" stroke="#64748b"/>
      <text x="210" y="26" fill="#cbd5e1" font-size="10" text-anchor="middle">Used 2MB</text>
      
      <!-- 4MB hole -->
      <rect x="260" y="0" width="160" height="45" rx="4" fill="#1e3a5f" stroke="#38bdf8"/>
      <text x="340" y="26" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Free 4 MB Hole</text>
      
      <!-- 2MB used -->
      <rect x="430" y="0" width="80" height="45" rx="4" fill="#334155" stroke="#64748b"/>
      <text x="470" y="26" fill="#cbd5e1" font-size="10" text-anchor="middle">Used 2MB</text>
      
      <!-- 4MB hole -->
      <rect x="520" y="0" width="160" height="45" rx="4" fill="#1e3a5f" stroke="#38bdf8"/>
      <text x="600" y="26" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Free 4 MB Hole</text>
    </g>
    
    <text x="390" y="103" fill="#fca5a5" font-size="10" text-anchor="middle">System has 12 MB free space, but no single slot is &gt;= 5 MB contiguous. Allocation crashes!</text>
  </g>
  
  <!-- Row 3: Buddy Allocator Coalescing Solution -->
  <g transform="translate(30, 282)">
    <rect width="780" height="115" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="20" y="24" fill="#10b981" font-size="12" font-weight="bold">SOLUTION: BUDDY ALLOCATOR POWER-OF-TWO COALESCING</text>
    
    <!-- Buddy Split & Merge -->
    <g transform="translate(20, 36)">
      <!-- Buddy A: 256KB freed -->
      <rect x="0" y="0" width="220" height="42" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="110" y="25" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Buddy A: 256 KB (Freed)</text>
      
      <!-- Plus sign -->
      <text x="240" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">+</text>
      
      <!-- Buddy B: 256KB freed -->
      <rect x="260" y="0" width="220" height="42" rx="4" fill="#0f172a" stroke="#10b981"/>
      <text x="370" y="25" fill="#10b981" font-size="10" font-weight="bold" text-anchor="middle">Buddy B: 256 KB (Freed)</text>
      
      <!-- Arrow -->
      <text x="500" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">-></text>
      
      <!-- Coalesced 512KB Block -->
      <rect x="520" y="0" width="220" height="42" rx="4" fill="#064e3b" stroke="#34d399"/>
      <text x="630" y="25" fill="#a7f3d0" font-size="10" font-weight="bold" text-anchor="middle">Merged Parent: 512 KB Block</text>
    </g>
    
    <text x="390" y="100" fill="#cbd5e1" font-size="10" text-anchor="middle">Buddy algorithm merges adjacent powers-of-two blocks instantly to eliminate external fragmentation</text>
  </g>
  
  <text x="420" y="425" fill="#94a3b8" font-size="9" text-anchor="middle">Slab allocators prevent fragmentation via fixed size pools; Buddy allocators merge adjacent blocks</text>
</svg>`,
      caption: {
        en: 'Internal fragmentation wastes 31 bytes within fixed 64B slots, while Buddy allocators merge adjacent 256KB blocks into 512KB contiguous space.',
        bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন ৬৪-বাইটের স্লটে ৩১ বাইট নষ্ট করে, আর বাডি অ্যালোকেটর সংলগ্ন ২৫৬ কিলোবাইট ব্লককে ৫১২ কিলোবাইট অবিচ্ছিন্ন মেমোরিতে যুক্ত করে।'
      },
    },
    {
      type: 'heading',
      id: 'buddy-allocator-and-slack-code',
      text: {
        en: 'Buddy Memory Allocation & Coalescing Engine Simulation',
        bn: 'বাডি মেমোরি অ্যালোকেশন এবং কোয়ালেসিং ইঞ্জিন সিমুলেশন'
      },
    },
    {
      type: 'para',
      text: {
        en: 'The Buddy Allocation algorithm balances fast allocation speed with effective coalescing. When a block is freed, the allocator inspects whether its twin buddy is also free. If both are unallocated, they combine into a block of double the size. The following code simulates power-of-two splitting, calculates internal slack, and demonstrates buddy coalescing.',
        bn: 'বাডি অ্যালোকেশন অ্যালগরিদম দ্রুত বরাদ্দের গতির সাথে কার্যকর মার্জিং ব্যবস্থার চমৎকার ভারসাম্য রক্ষা করে। যখন কোনো ব্লক মুক্ত হয়, তখন অ্যালোকেটর পরীক্ষা করে তার যমজ বাডি ব্লকটিও মুক্ত আছে কি না। উভয় ব্লক মুক্ত থাকলে তারা দ্বিগুণ আকারের একটি ব্লকে একত্রিত হয়। নিচের কোডটি দুইয়ের ঘাতে বিভাজন, অভ্যন্তরীণ অপচয় হিসাব এবং বাডি একত্রীকরণ প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'buddy-allocator-simulation.js',
      code: `// Deterministic Buddy Allocator with Power-of-Two Splitting and Coalescing
// Tracks internal slack fragmentation and verifies contiguous block restoration

class BuddyMemoryAllocator {
  constructor(totalCapacityBytes = 1024) {
    this.totalCapacity = totalCapacityBytes;
    this.freeLists = new Map(); // size -> array of start offsets
    this.freeLists.set(totalCapacityBytes, [0]);
    this.allocatedBlocks = new Map(); // offset -> size
  }

  // Finds next power of two
  getPowerOfTwoSize(requestedBytes) {
    let size = 16;
    while (size < requestedBytes) {
      size *= 2;
    }
    return size;
  }

  allocate(requestedBytes) {
    const targetSize = this.getPowerOfTwoSize(requestedBytes);
    let currentSize = targetSize;

    // Search for available block of size >= targetSize
    while (currentSize <= this.totalCapacity) {
      const list = this.freeLists.get(currentSize);
      if (list && list.length > 0) {
        let blockOffset = list.shift();

        // Split down until reaching exact target power-of-two
        while (currentSize > targetSize) {
          currentSize /= 2;
          const buddyOffset = blockOffset + currentSize;
          if (!this.freeLists.has(currentSize)) {
            this.freeLists.set(currentSize, []);
          }
          this.freeLists.get(currentSize).push(buddyOffset);
        }

        const internalSlackBytes = targetSize - requestedBytes;
        this.allocatedBlocks.set(blockOffset, targetSize);

        return {
          offset: blockOffset,
          allocatedBytes: targetSize,
          requestedBytes,
          internalSlackBytes
        };
      }
      currentSize *= 2;
    }

    return null; // Out of memory
  }

  free(blockOffset) {
    let size = this.allocatedBlocks.get(blockOffset);
    if (!size) return false;
    this.allocatedBlocks.delete(blockOffset);

    // Coalesce with buddy if available
    while (size < this.totalCapacity) {
      const buddyOffset = blockOffset ^ size; // Bitwise XOR yields buddy offset
      const buddyList = this.freeLists.get(size) || [];
      const buddyIndex = buddyList.indexOf(buddyOffset);

      if (buddyIndex !== -1) {
        // Buddy is also free! Coalesce into double-sized parent
        buddyList.splice(buddyIndex, 1);
        blockOffset = Math.min(blockOffset, buddyOffset);
        size *= 2;
      } else {
        break; // Buddy is still in use
      }
    }

    if (!this.freeLists.has(size)) {
      this.freeLists.set(size, []);
    }
    this.freeLists.get(size).push(blockOffset);
    return true;
  }
}

const allocator = new BuddyMemoryAllocator(1024);

console.log('=== Step 1: Allocating Variable Sizes ===');
const alloc1 = allocator.allocate(33);  // 33B -> rounds to 64B
const alloc2 = allocator.allocate(250); // 250B -> rounds to 256B

console.log('Allocation 1: Requested 33B  -> Assigned ' + alloc1.allocatedBytes + 'B (Internal Slack: ' + alloc1.internalSlackBytes + 'B)');
console.log('Allocation 2: Requested 250B -> Assigned ' + alloc2.allocatedBytes + 'B (Internal Slack: ' + alloc2.internalSlackBytes + 'B)');

console.log('\\n=== Step 2: Deallocating & Buddy Coalescing ===');
allocator.free(alloc1.offset);
console.log('Freed Allocation 1 (Offset ' + alloc1.offset + ')');

allocator.free(alloc2.offset);
console.log('Freed Allocation 2 (Offset ' + alloc2.offset + ')');

const maxContiguous = allocator.freeLists.get(1024);
console.log('Final Free List at 1024 Bytes:', maxContiguous);
console.log('Result: Both allocations coalesced cleanly back into the single original 1024-byte block!');`,
      caption: {
        en: 'The simulation allocates 33 bytes with 31 bytes internal slack, then frees and coalesces all blocks back into a 1024-byte block.',
        bn: 'সিমুলেশনটি ৩১ বাইট ইন্টারনাল স্ল্যাকসহ ৩৩ বাইট বরাদ্দ করে, এবং পরবর্তীতে মুক্ত করে সমস্ত ব্লক ১০২৪-বাইটের ব্লকে একীভূত করে।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Why Modern High-Concurrency Backends Choose jemalloc or mimalloc',
        bn: 'উচ্চ পারফরম্যান্সের ব্যাকএন্ড কেন jemalloc বা mimalloc বেছে নেয়'
      },
      text: {
        en: 'The standard C library glibc allocator uses centralized heap locks and frequently suffers severe external fragmentation under heavy multi-threaded workloads. Modern high-throughput applications like Redis, Meta infrastructure, and gaming backends replace glibc malloc with jemalloc or Microsoft mimalloc. These advanced allocators utilize per-thread arenas and fine-grained slab size classes, eliminating lock contention and slashing memory fragmentation by up to 25 percent.',
        bn: 'স্ট্যান্ডার্ড সি লাইব্রেরির glibc অ্যালোকেটর সেন্ট্রালাইজড লক ব্যবহার করে এবং মাল্টি-থ্রেডেড কাজের চাপে প্রায়শই চরম এক্সটারনাল ফ্র্যাগমেন্টেশনে ভোগে। রেডিস, মেটা ইনফ্রাস্ট্রাকচার এবং গেম সার্ভারের মতো আধুনিক উচ্চগতির অ্যাপ্লিকেশনগুলো glibc malloc-এর বদলে jemalloc বা মাইক্রোসফটের mimalloc ব্যবহার করে। এই উন্নত অ্যালোকেটরগুলো থ্রেড-ভিত্তিক অ্যারিনা ও স্ল্যাব সাইজ ব্যবহার করে মেমোরি ফ্র্যাগমেন্টেশন প্রায় ২৫ শতাংশ পর্যন্ত কমিয়ে আনে।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-frag-ex-1',
      kind: 'predict',
      question: {
        en: 'If an application requests 33 bytes from a 64-byte fixed-slot allocator, how many bytes of internal fragmentation are wasted? (31). Type the number.',
        bn: 'একটি অ্যাপ্লিকেশন যদি ৬৪-বাইটের ফিক্সড-স্লট অ্যালোকেটর থেকে ৩৩ বাইট মেমোরি অনুরোধ করে, তবে কত বাইট ইন্টারনাল ফ্র্যাগমেন্টেশন অপচয় হবে? ( ৩১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '31',
      hint: {
        en: 'Subtract 33 from 64: 31 bytes wasted.',
        bn: '৬৪ থেকে ৩৩ বিয়োগ করুন: ৩১ বাইট অপচয়।'
      },
      explanation: {
        en: 'Internal fragmentation is the difference between allocated block size (64B) and requested payload (33B): exactly 31 bytes.',
        bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন হলো বরাদ্দের আকার ( ৬৪B ) ও আসল প্রয়োজনের ( ৩৩B ) মধ্যকার ব্যবধান: ঠিক ৩১ বাইট।'
      },
    },
    {
      id: 'mem-frag-ex-2',
      kind: 'mcq',
      question: {
        en: 'What architectural condition defines External Memory Fragmentation?',
        bn: 'এক্সটারনাল মেমোরি ফ্র্যাগমেন্টেশনের আর্কিটেকচারাল সংজ্ঞা কী?'
      },
      options: [
        {
          en: 'Total available free memory is sufficient to satisfy an allocation, but it is divided into small, non-contiguous holes so no single continuous block fits the request',
          bn: 'সর্বমোট প্রাপ্ত ফাঁকা মেমোরি চাহিদার জন্য যথেষ্ট, কিন্তু তা এমন ক্ষুদ্র ও বিচ্ছিন্ন ফাঁকা স্থানে বিভক্ত যে কোনো একক অবিচ্ছিন্ন ব্লকে বরাদ্দ দেওয়া সম্ভব হয় না',
        },
        {
          en: 'The computer case is cracked and leaking physical air',
          bn: 'কম্পিউটার কেসিংয়ে ফাটল ধরে ফিজিক্যাল বাতাস বাইরে বের হয়ে যাওয়া',
        },
        {
          en: 'All internet web pages are missing their image banners',
          bn: 'ইন্টারনেটের সমস্ত ওয়েব পেজে তাদের ছবির ব্যানার অনুপস্থিত থাকা',
        },
        {
          en: 'The computer keyboard can only type capital letters',
          bn: 'কম্পিউটার কিবোর্ড দিয়ে কেবল বড় হাতের অক্ষর টাইপ করা সম্ভব হওয়া',
        },
      ],
      answer: 0,
      hint: {
        en: 'Sufficient total free memory split into non-contiguous gaps.',
        bn: 'পর্যাপ্ত মোট মেমোরি থাকা সত্ত্বেও তা বিচ্ছিন্ন ফাঁকে বিভক্ত থাকা।',
      },
      explanation: {
        en: 'External fragmentation leaves scattered holes across RAM. Large contiguous allocations fail even though the sum of free bytes is sufficient.',
        bn: 'এক্সটারনাল ফ্র্যাগমেন্টেশন র‍্যামে বিচ্ছিন্ন ফাঁক তৈরি করে, যার ফলে সর্বমোট মেমোরি ফাঁকা থাকলেও বড় অবিচ্ছিন্ন অ্যারে বরাদ্দ ব্যর্থ হয়।'
      },
    },
    {
      id: 'mem-frag-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does a Buddy Memory Allocator restore large contiguous memory blocks when applications release memory?',
        bn: 'অ্যাপ্লিকেশন মেমোরি ছেড়ে দিলে বাডি মেমোরি অ্যালোকেটর কীভাবে বড় অবিচ্ছিন্ন মেমোরি ব্লক পুনরুদ্ধার করে?'
      },
      options: [
        {
          en: 'It checks if the adjacent power-of-two buddy block is also unallocated and instantly coalesces the pair into a single double-sized parent block',
          bn: 'এটি পরীক্ষা করে সংলগ্ন দুইয়ের ঘাতবিশিষ্ট বাডি ব্লকটিও মুক্ত আছে কি না এবং সাথে সাথে জোড়াটিকে একীভূত করে একটি দ্বিগুণ আকারের ব্লকে পরিণত করে',
        },
        {
          en: 'It sends an SMS text message to the computer manufacturer',
          bn: 'এটি কম্পিউটার নির্মাতা প্রতিষ্ঠানকে একটি এসএমএস বার্তা পাঠায়',
        },
        {
          en: 'It downloads additional RAM memory from an online website',
          bn: 'এটি একটি অনলাইন ওয়েবসাইট থেকে অতিরিক্ত র‍্যাম মেমোরি ডাউনলোড করে',
        },
        {
          en: 'It deletes all user passwords from the hard drive',
          bn: 'এটি হার্ড ড্রাইভ থেকে ব্যবহারকারীর সমস্ত পাসওয়ার্ড মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Coalescing adjacent free buddy blocks into a double-sized block.',
        bn: 'পাশাপাশি থাকা মুক্ত বাডি ব্লককে দ্বিগুণ আকারের ব্লকে একত্রিত করা।',
      },
      explanation: {
        en: 'The buddy algorithm coalesces adjacent split blocks upon deallocation, recursively reforming larger power-of-two blocks.',
        bn: 'বাডি অ্যালগরিদম মেমোরি মুক্তির সময় সংলগ্ন বাডি ব্লককে মিলিয়ে নিয়ে ক্রমান্বয়ে বড় ব্লকে একীভূত করে।'
      },
    },
    {
      id: 'mem-frag-ex-4',
      kind: 'predict',
      question: {
        en: 'In a Buddy Memory Allocator, if a 512KB memory block is split equally into two buddy blocks, how many kilobytes is each resulting buddy block? (256). Type the number.',
        bn: 'একটি বাডি মেমোরি অ্যালোকেটরে ৫১২ কিলোবাইটের একটি মেমোরি ব্লককে সমান দুই ভাগে ভাগ করলে প্রতিটি নতুন বাডি ব্লক কত কিলোবাইটের হবে? ( ২৫৬ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '256',
      hint: {
        en: 'Divide 512KB by 2: 256KB.',
        bn: '৫১২ কিলোবাইটকে ২ দিয়ে ভাগ করুন: ২৫৬ কিলোবাইট।'
      },
      explanation: {
        en: 'Splitting a 512KB block yields two equal 256KB buddy blocks.',
        bn: '৫১২ কিলোবাইট ব্লককে বিভক্ত করলে ২ টি সমান ২৫৬ কিলোবাইট বাডি ব্লক তৈরি হয়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Memory Fragmentation & Allocators Quiz',
      bn: 'মেমোরি ফ্র্যাগমেন্টেশন এবং অ্যালোকেটর কুইজ'
    },
    questions: [
      {
        id: 'mem-frag-qz-1',
        kind: 'mcq',
        topic: 'internal-vs-external-fragmentation',
        question: {
          en: 'What fundamental property distinguishes Internal Fragmentation from External Fragmentation?',
          bn: 'কোন মৌলিক বৈশিষ্ট্যটি ইন্টারনাল ফ্র্যাগমেন্টেশনকে এক্সটারনাল ফ্র্যাগমেন্টেশন থেকে আলাদা করে?'
        },
        options: [
          {
            en: 'Internal fragmentation is wasted space trapped inside allocated memory slots due to size rounding; external fragmentation is unusable free space scattered between allocated blocks',
            bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন হলো রাউন্ডিংয়ের কারণে বরাদ্দকৃত মেমোরি স্লটের ভেতরে আটকে থাকা অপচয়; আর এক্সটারনাল ফ্র্যাগমেন্টেশন হলো ব্লকগুলোর মাঝে ছড়িয়ে থাকা বিচ্ছিন্ন অব্যবহারযোগ্য ফাঁকা জায়গা',
          },
          {
            en: 'Internal fragmentation only happens on laptops; external fragmentation only happens on desktops',
            bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন কেবল ল্যাপটপে ঘটে; আর এক্সটারনাল ফ্র্যাগমেন্টেশন কেবল ডেস্কটপে ঘটে',
          },
          {
            en: 'Internal fragmentation is caused by water damage; external fragmentation is caused by dust',
            bn: 'ইন্টারনাল ফ্র্যাগমেন্টেশন পানির কারণে হয়; আর এক্সটারনাল ফ্র্যাগমেন্টেশন ধুলোবালির কারণে হয়',
          },
          {
            en: 'Both terms describe identical operations in software compilers',
            bn: 'উভয় পদই সফটওয়্যার কম্পাইলারের হুবহু একই কাজকে নির্দেশ করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Internal is wasted within assigned blocks; external is scattered gaps between blocks.',
          bn: 'ইন্টারনাল হলো ব্লকের ভেতরের অপচয়; আর এক্সটারনাল হলো ব্লকগুলোর মধ্যকার বিক্ষিপ্ত ফাঁক।',
        },
        explanation: {
          en: 'Internal fragmentation occurs when allocated chunks exceed requested bytes. External fragmentation occurs when free memory is fragmented into non-contiguous gaps.',
          bn: 'বরাদ্দকৃত সাইজ চাহিদার চেয়ে বড় হলে ইন্টারনাল ফ্র্যাগমেন্টেশন ঘটে। আর মুক্ত মেমোরি বিচ্ছিন্ন হয়ে থাকলে এক্সটারনাল ফ্র্যাগমেন্টেশন ঘটে।'
        },
      },
      {
        id: 'mem-frag-qz-2',
        kind: 'mcq',
        topic: 'linux-kernel-slab-allocation',
        question: {
          en: 'Why does the Linux operating system kernel utilize Slab Allocation for kernel objects like file descriptors and network sockets?',
          bn: 'লিনাক্স অপারেটিং সিস্টেম কার্নেল কেন ফাইল ডেসক্রিপ্টর ও নেটওয়ার্ক সকেটের মতো কার্নেল অবজেক্টের জন্য স্ল্যাব অ্যালোকেশন ব্যবহার করে?'
        },
        options: [
          {
            en: 'Kernel objects are frequently created and destroyed in identical sizes; dedicating pre-allocated caches for fixed-size structs eliminates external fragmentation and initialization overhead',
            bn: 'কার্নেল অবজেক্টগুলো বারবার একই আকারে তৈরি ও ধ্বংস হয়; নির্দিষ্ট আকারের কাঠামোর জন্য নিবেদিত ক্যাশ ব্যবহার করলে এক্সটারনাল ফ্র্যাগমেন্টেশন এবং ইনিশিয়ালাইজেশনের বিলম্ব দূর হয়',
          },
          {
            en: 'Because Linux kernels cannot read numbers larger than 50',
            bn: 'কারণ লিনাক্স কার্নেল ৫০ এর চেয়ে বড় সংখ্যা পড়তে পারে না',
          },
          {
            en: 'To make the Linux terminal display green text instead of white',
            bn: 'লিনাক্স টার্মিনালে সাদার বদলে সবুজ লেখা দেখানোর উদ্দেশ্যে',
          },
          {
            en: 'Because computer networks only work when slabs are present',
            bn: 'কারণ স্ল্যাব না থাকলে কম্পিউটার নেটওয়ার্ক কোনো কাজ করতে পারে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Reusing fixed-size object caches avoids fragmentation and repeated re-initialization.',
          bn: 'নির্দিষ্ট আকারের ক্যাশ পুনর্ব্যবহার ফ্র্যাগমেন্টেশন ও বারবার তৈরির ঝামেলা দূর করে।',
        },
        explanation: {
          en: 'Slab allocators maintain pre-constructed object pools of identical sizes, achieving O(1) allocation speed with zero external fragmentation.',
          bn: 'স্ল্যাব অ্যালোকেটর একই আকারের অবজেক্টের প্রি-অ্যালোকেটেড পুল রাখে, যা কোনো ফ্র্যাগমেন্টেশন ছাড়াই O(1) গতিতে কাজ সম্পন্ন করে।'
        },
      },
      {
        id: 'mem-frag-qz-3',
        kind: 'mcq',
        topic: 'hugepages-performance-impact',
        question: {
          en: 'What primary performance advantage do 2MB HugePages offer to enterprise databases like Redis, PostgreSQL, and MySQL?',
          bn: 'রেডিস, পোস্টগ্রেসকিউএল এবং মাইএসকিউএলের মতো এন্টারপ্রাইজ ডাটাবেজে ২ মেগাবাইট হিউজপেজ ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          {
            en: 'They reduce the number of required page table entries by a factor of 512, drastically minimizing TLB misses and accelerating memory-intensive database lookups',
            bn: 'তারা পেজ টেবিল এন্ট্রির সংখ্যা ৫১২ গুণ কমিয়ে আনে, যা সিপিইউর TLB মিস লক্ষণীয়ভাবে কমায় এবং মেমোরি-নিবিড় ডাটাবেজ অনুসন্ধানকে দ্রুত করে',
          },
          {
            en: 'They enable computers to run without any cooling fans',
            bn: 'তারা কোনো কুলিং ফ্যান ছাড়াই কম্পিউটার চালু রাখার সুবিধা দেয়',
          },
          {
            en: 'They automatically correct spelling errors in SQL queries',
            bn: 'তারা এসকিউএল কুয়েরির বানান ভুল স্বয়ংক্রিয়ভাবে শুধরে দেয়',
          },
          {
            en: 'They encrypt database passwords using physical magnets',
            bn: 'তারা ফিজিক্যাল চুম্বক ব্যবহার করে ডাটাবেজ পাসওয়ার্ড এনক্রিপ্ট করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Fewer page table entries drastically cut TLB misses for large memory pools.',
          bn: 'কম পেজ টেবিল এন্ট্রি বিশাল মেমোরির ক্ষেত্রে TLB মিস উল্লেখযোগ্যভাবে হ্রাস করে।',
        },
        explanation: {
          en: 'By mapping 2MB per page instead of 4KB, a single TLB entry covers 512 times more memory, vastly reducing address translation penalties.',
          bn: '৪ কিলোবাইটের বদলে ২ মেগাবাইট পেজ ব্যবহার করলে একটি TLB এন্ট্রি ৫১২ গুণ বেশি মেমোরি কভার করে লেটেন্সি কমিয়ে দেয়।'
        },
      },
      {
        id: 'mem-frag-qz-4',
        kind: 'mcq',
        topic: 'jemalloc-arena-design',
        question: {
          en: 'How does jemalloc prevent the lock contention and fragmentation that degrade the default glibc ptmalloc allocator in multi-threaded servers?',
          bn: 'মাল্টি-থ্রেডেড সার্ভারে ডিফল্ট glibc ptmalloc-এর লক জটিলতা ও ফ্র্যাগমেন্টেশন রোধ করতে jemalloc কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'It partitions memory into multiple independent thread-local arenas with categorized size classes, eliminating global mutex contention and reducing fragmentation',
            bn: 'এটি মেমোরিকে একাধিক স্বতন্ত্র থ্রেড-লোকাল অ্যারিনা ও নির্দিষ্ট সাইজ ক্লাসে ভাগ করে, ফলে গ্লোবাল মিউটেক্সের সংঘাত দূর হয় এবং ফ্র্যাগমেন্টেশন হ্রাস পায়',
          },
          {
            en: 'It forces all threads to execute strictly one at a time sequentially',
            bn: 'এটি সমস্ত থ্রেডকে একে একে ধারাবাহিকভাবে চলতে বাধ্য করে',
          },
          {
            en: 'It saves all heap allocations to text files on the USB thumb drive',
            bn: 'এটি হিপের সমস্ত বরাদ্দকে ইউএসবি পেনড্রাইভের টেক্সট ফাইলে জমা করে',
          },
          {
            en: 'It lowers the voltage of the CPU to prevent overheating',
            bn: 'সিপিইউ অতিরিক্ত গরম হওয়া ঠেকাতে এটি সিপিইউর ভোল্টেজ কমিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Thread-local arenas and size classes avoid lock contention and fragmentation.',
          bn: 'থ্রেড-লোকাল অ্যারিনা ও নির্দিষ্ট সাইজ ক্লাস লক সংঘাত ও ফ্র্যাগমেন্টেশন দূর করে।',
        },
        explanation: {
          en: 'jemalloc assigns threads to separate arenas and uses granular size bins, maximizing multi-core concurrency while keeping fragmentation minimal.',
          bn: 'jemalloc প্রতিটি থ্রেডের জন্য পৃথক অ্যারিনা বরাদ্দ করে এবং নির্দিষ্ট সাইজ বিন ব্যবহার করে মাল্টি-কোর প্রসেসরে সর্বোচ্চ কার্যক্ষমতা নিশ্চিত করে।'
        },
      },
    ],
  },
  next: {
    slug: 'memory-capstone',
    title: {
      en: 'Systems Memory Architecture & High-Performance Capstone',
      bn: 'সিস্টেমস মেমোরি আর্কিটেকচার এবং হাই-পারফরম্যান্স ক্যাপস্টোন'
    },
  },
};
