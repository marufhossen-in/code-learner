import type { Lesson } from '../../../lib/types';

export const TheBinaryForgeLesson: Lesson = {
  slug: 'the-binary-forge',
  tech: 'c',
  title: {
    en: 'The Binary Forge: Toolchains, Object Files & Linking — Real-World Capstone',
    bn: 'দ্য বাইনারি ফোর্জ: টুলচেন, অবজেক্ট ফাইল ও লিংকিং — বাস্তবমুখী ক্যাপস্টোন'
  },
  summary: {
    en: 'Transforming C source code into a hardened production binary executable requires mastery over the binary forge: object files (.o), symbol tables, relocation records, and linkers. Object files organize code into standardized sections (such as .text for machine instructions, .rodata for string constants, and .data/.bss for global variables). The linker resolves external symbols, joining multiple translation units into a unified binary. Static linking (.a) embeds library routines directly into the executable for self-contained portability, while dynamic linking (.so) shares physical RAM pages across concurrent processes. Integrating disciplined compiler flags (-Wall, -Wextra, -O2, -fsanitize=address) and building custom arena allocators delivers maximum systems performance and bulletproof reliability.',
    bn: 'সি সোর্স কোডকে একটি সুরক্ষিত প্রোডাকশন বাইনারি সফটওয়্যারে রূপান্তর করতে অবজেক্ট ফাইল (.o), সিম্বল টেবিল, রিলোকেশন রেকর্ড এবং লিংকারের মতো বাইনারি টুলচেনের প্রতিটি অংশে দক্ষতা থাকা প্রয়োজন। অবজেক্ট ফাইলগুলো কোডকে সুনির্দিষ্ট সেগমেন্টে বিভক্ত করে (যেমন মেশিন কোডের জন্য .text, স্ট্রিং কনস্ট্যান্টের জন্য .rodata এবং গ্লোবালের জন্য .data ও .bss)। লিংকার বিভিন্ন ফাইলের এক্সটার্নাল রেফারেন্স সমাধান করে একটি একক পূর্ণাঙ্গ সফটওয়্যার প্রস্তুত করে। স্ট্যাটিক লিংকিং (.a) সমস্ত লাইব্রেরি কোডকে সরাসরি ফাইলের ভেতর যুক্ত করে স্বতন্ত্র বহনযোগ্যতা দেয়, অন্যদিকে ডাইনামিক লিংকিং (.so) বিভিন্ন প্রসেসের মাঝে র্যামের মেমোরি পেজ ভাগাভাগি করার সুযোগ করে দেয়। কঠোর কম্পাইলার ফ্ল্যাগ (-Wall, -Wextra, -O2, -fsanitize=address) এবং কাস্টম অ্যারেনা মেমোরি ম্যানেজার ব্যবহারের মাধ্যমে সর্বোচ্চ পারফরম্যান্স ও অতুলনীয় নির্ভরযোগ্যতা নিশ্চিত করা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Binary Toolchain and Object Layout',
        bn: 'মূল ধারণা: বাইনারি টুলচেন ও অবজেক্ট লেআউট'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'When you build production systems software in C, writing clean source code is only half the battle. Transforming that source code into a hardened, high-performance binary executable requires mastering the binary toolchain: compilers, assemblers, and linkers. Understanding how machine instructions and global symbols are organized within binary files unlocks advanced debugging, shared library optimization, and zero-fragmentation custom memory architectures.',
        bn: 'সি ভাষায় যখন আপনি প্রোডাকশন গ্রেড সিস্টেম সফটওয়্যার তৈরি করেন, তখন শুধু ভালো কোড লেখাই যথেষ্ট নয়। সেই সোর্স কোডকে একটি সুরক্ষিত ও উচ্চগতির বাইনারি এক্সিকিউটেবলে রূপান্তর করতে কম্পাইলার, অ্যাসেম্বলার এবং লিংকারের সমন্বয়ে গঠিত বাইনারি টুলচেনে দক্ষতা অর্জন অপরিহার্য। মেশিন ইন্সট্রাকশন এবং গ্লোবাল সিম্বলগুলো কীভাবে বাইনারি ফাইলে সাজানো থাকে তা বুঝলে নিখুঁত ডিবাগিং, শেয়ার্ড লাইব্রেরি অপ্টিমাইজেশন এবং নিজস্ব মেমোরি ম্যানেজার ডিজাইন করা সম্ভব হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Object File (.o)',
          def: {
            en: 'An intermediate binary file containing assembled CPU machine instructions, section tables, and unresolved symbol relocation records',
            bn: 'একটি মধ্যবর্তী বাইনারি ফাইল যাতে কম্পাইল করা মেশিন কোড, সেকশন টেবিল এবং সমাধানহীন সিম্বল রিলোকেশন রেকর্ড সংরক্ষিত থাকে'
          }
        },
        {
          term: 'Linker (ld)',
          def: {
            en: 'The systems toolchain utility that stitches multiple object files and static archives together, resolving cross-module symbols',
            bn: 'সিস্টেম টুলচেনের একটি গুরুত্বপূর্ণ সফটওয়্যার যা একাধিক অবজেক্ট ফাইল ও লাইব্রেরিকে একত্রিত করে পূর্ণাঙ্গ এক্সিকিউটেবল ফাইল তৈরি করে'
          }
        },
        {
          term: 'ELF Binary Format',
          def: {
            en: 'Executable and Linkable Format; the standard binary container specification utilized across modern Linux operating systems',
            bn: 'এক্সিকিউটেবল অ্যান্ড লিংকাবল ফরম্যাট; আধুনিক লিনাক্স অপারেটিং সিস্টেমে বাইনারি সফটওয়্যার সংরক্ষণের বিশ্বমানের স্ট্যান্ডার্ড কাঠামো'
          }
        },
        {
          term: 'Arena Allocator',
          def: {
            en: 'A high-performance region-based memory allocator that allocates sequentially via bump pointer in O(1) time and frees in bulk',
            bn: 'একটি উচ্চগতির মেমোরি ম্যানেজার যা বাম্প পয়েন্টার দিয়ে O(1) সময়ে মেমোরি বরাদ্দ করে এবং এক কলেই সব মেমোরি একসাথে খালি করে দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'binary-sections',
      text: {
        en: 'Anatomy of a Binary: Core ELF Sections',
        bn: 'বাইনারি ফাইলের অভ্যন্তরীণ গঠন: প্রধান ELF সেকশনসমূহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard Linux ELF binaries begin with 4 distinct magic identification bytes (0x7F followed by ASCII letters E, L, F). Internally, the file separates code and data into distinct sections with enforced hardware memory permissions.',
        bn: 'স্ট্যান্ডার্ড লিনাক্স ELF বাইনারি ফাইলগুলো ৪টি অনন্য ম্যাজিক বাইট দিয়ে শুরু হয় (0x7F এবং তার সাথে ইংরেজি E, L, F অক্ষর)। ফাইলের ভেতরে কোড ও ডেটাকে হার্ডওয়্যার মেমোরি পারমিশন অনুযায়ী বিভিন্ন সেকশনে সাজিয়ে রাখা হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The .text section contains executable CPU machine instructions mapped with read-and-execute permissions. The .rodata section stores immutable string literals. The .data section holds initialized global variables, while the .bss section tracks uninitialized globals, consuming 0 bytes of disk space because it is zero-filled by the OS at startup.',
        bn: '.text সেকশনে এক্সিকিউটেবল সিপিইউ মেশিন কোড থাকে যা কেবল পড়া ও চালানোর অনুমতি পায়। .rodata সেকশনে অপরিবর্তনীয় স্ট্রিং লিটারেল থাকে। .data সেকশনটি ইনিশিয়ালাইজড গ্লোবাল ভ্যারিয়েবল সংরক্ষণ করে, আর .bss সেকশন আনইনিশিয়ালাইজড গ্লোবালগুলো পরিচালনা করে যা ডিস্কে ০ বাইট জায়গা নেয় কারণ ওএস শুরুতে একে শূন্য দিয়ে পূর্ণ করে নেয়।'
      }
    },
    {
      type: 'heading',
      id: 'linking-paradigms',
      text: {
        en: 'Static vs Dynamic Linking: Trade-Offs in Architecture',
        bn: 'স্ট্যাটিক বনাম ডাইনামিক লিংকিং: আর্কিটেকচারাল লাভ-ক্ষতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In static linking (.a archive libraries), the linker copies the compiled machine code of library functions directly into the final standalone executable. This creates a completely portable binary with zero external dependencies, at the cost of larger binary sizes.',
        bn: 'স্ট্যাটিক লিংকিংয়ে (.a আর্কাইভ লাইব্রেরি) লিংকার লাইব্রেরি ফাংশনগুলোর কম্পাইল করা মেশিন কোড সরাসরি চূড়ান্ত এক্সিকিউটেবল ফাইলের ভেতর কপি করে দেয়। এর ফলে কোনো বাহ্যিক নির্ভরতা ছাড়াই সম্পূর্ণ স্বনির্ভর পোর্টেবল সফটওয়্যার তৈরি হয়, তবে ফাইলের সাইজ কিছুটা বৃদ্ধি পায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In dynamic linking (.so shared objects), the executable preserves only symbolic references. The operating system dynamic linker (ld-linux.so) loads the shared library into physical RAM once, mapping the exact same read-only pages into hundreds of concurrent processes to save massive system memory.',
        bn: 'ডাইনামিক লিংকিংয়ে (.so শেয়ার্ড লাইব্রেরি) এক্সিকিউটেবল ফাইলটি কেবল ফাংশনের রেফারেন্স ধরে রাখে। অপারেটিং সিস্টেমের ডাইনামিক লিংকার (ld-linux.so) লাইব্রেরিটিকে ফিজিক্যাল র্যামে মাত্র একবার লোড করে এবং একই রিড-অনলি মেমোরি পেজ শত শত চলমান প্রসেসের মাঝে ভাগাভাগি করে বিপুল পরিমাণ র্যাম সাশ্রয় করে।'
      }
    },
    {
      type: 'heading',
      id: 'capstone-arena',
      text: {
        en: 'Capstone Project: High-Performance Arena Allocator',
        bn: 'ক্যাপস্টোন প্রজেক্ট: উচ্চগতির অ্যারেনা মেমোরি ম্যানেজার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production game engines, web servers, and compilers replace general-purpose malloc calls with Arena Allocators. An arena reserves a large contiguous block of memory (e.g. 512 bytes) upfront and satisfies allocation requests simply by advancing an offset bump pointer forward.',
        bn: 'উচ্চগতির গেম ইঞ্জিন, ওয়েব সার্ভার এবং কম্পাইলারগুলো সাধারণ malloc-এর পরিবর্তে নিজস্ব অ্যারেনা মেমোরি ম্যানেজার ব্যবহার করে। একটি অ্যারেনা শুরুতেই একটি বড় অবিচ্ছিন্ন মেমোরি ব্লক (যেমন ৫১২ বাইট) বরাদ্দ নেয় এবং প্রতিটি বরাদ্দে কেবল একটি অফসেট পয়েন্টার সামনে এগিয়ে দিয়ে নিমেষেই মেমোরি দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Allocating 3 sequential struct records (each 32 bytes aligned to 8-byte boundaries) consumes 96 bytes in O(1) constant time with zero memory fragmentation. When an entire request or frame ends, calling reset() instantly sets the offset back to 0, recycling all 512 bytes in a single CPU instruction.',
        bn: '৮-বাইটের বাউন্ডারিতে সাজিয়ে ৩টি ৩২-বাইটের রেকর্ড বরাদ্দ করলে কোনো মেমোরি ফ্র্যাগমেন্টেশন ছাড়াই O(1) সময়ে মোট ৯৬ বাইট খরচ হয়। একটি ফ্রেমের কাজ শেষ হলে reset() কল করে অফসেট আবার ০ করে দেওয়া যায়, যা মাত্র একটি সিপিইউ ইন্সট্রাকশনে পুরো ৫১২ বাইট মেমোরি তাৎক্ষণিকভাবে মুক্ত করে দেয়।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Linking and Packaging Strategies',
        bn: 'কাঠামোগত তুলনা: লিংকিং ও প্যাকেজিং কৌশলসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Linking Strategy', bn: 'লিংকিং কৌশল' },
        { en: 'File Artifact', bn: 'ফাইল রূপ' },
        { en: 'Runtime RAM Sharing', bn: 'রানটাইম র্যাম শেয়ারিং' },
        { en: 'Deployment Characteristics', bn: 'ডিপ্লয়মেন্ট সুবিধা' }
      ],
      rows: [
        [
          { en: 'Static Linking', bn: 'স্ট্যাটিক লিংকিং' },
          { en: 'Static archive (.a file, e.g. libmath.a)', bn: 'স্ট্যাটিক আর্কাইভ (.a ফাইল, যেমন libmath.a)' },
          { en: 'Zero sharing; each process runs a duplicate private copy', bn: 'কোনো শেয়ারিং নেই; প্রতিটি প্রসেস নিজস্ব আলাদা কপি চালায়' },
          { en: 'Immune to shared library version mismatch and missing .so files', bn: 'ভার্সন অমিল বা .so ফাইল হারানোর কোনো ভয় নেই' }
        ],
        [
          { en: 'Dynamic Linking', bn: 'ডাইনামিক লিংকিং' },
          { en: 'Shared object (.so on Linux, .dylib on macOS)', bn: 'শেয়ার্ড অবজেক্ট (লিনাক্সে .so, ম্যাকওএসে .dylib)' },
          { en: 'High sharing; OS maps single copy across all active processes', bn: 'উচ্চ শেয়ারিং; ওএস একটি কপি সমস্ত প্রসেসের মাঝে ভাগ করে দেয়' },
          { en: 'Compact binary sizes; libraries can be patched without recompiling app', bn: 'ছোট বাইনারি সাইজ; অ্যাপ পুনরায় কম্পাইল না করেই লাইব্রেরি আপডেট সম্ভব' }
        ],
        [
          { en: 'Header-Only Library', bn: 'হেডার-অনলি লাইব্রেরি' },
          { en: 'Direct C header include (.h file)', bn: 'সরাসরি সি হেডার ফাইল (.h ফাইল)' },
          { en: 'Embedded directly into compiling translation unit', bn: 'সরাসরি ট্রান্সলেশন ইউনিটের ভেতর অন্তর্ভুক্ত হয়ে যায়' },
          { en: 'Zero build-system setup required; ideal for single-file utilities', bn: 'কোনো জটিল বিল্ড সেটআপ লাগে না; ছোট ইউটিলিটির জন্য চমৎকার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Arena Allocator & Binary Sections',
        bn: 'বাস্তব কোড সিমুলেশন: অ্যারেনা মেমোরি ম্যানেজার ও বাইনারি সেকশন'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Binary Forge: Arena Allocator & Binary Sections in Node.js

class ArenaAllocator {
  public offset = 0;
  public allocationCount = 0;

  constructor(public capacity = 512) {}

  // Bump allocation: O(1) constant time
  alloc(sizeBytes: number, alignment = 8): { address: string; bytes: number } | null {
    // Calculate aligned offset
    const alignedOffset = (this.offset + (alignment - 1)) & ~(alignment - 1);
    if (alignedOffset + sizeBytes > this.capacity) {
      return null; // Arena out of capacity
    }
    const allocatedAddress = '0x' + (0x5000 + alignedOffset).toString(16).toUpperCase();
    this.offset = alignedOffset + sizeBytes;
    this.allocationCount += 1;
    return { address: allocatedAddress, bytes: sizeBytes };
  }

  // Instant O(1) bulk reset
  reset() {
    this.offset = 0;
    this.allocationCount = 0;
  }
}

const arena = new ArenaAllocator(512);

// Allocate 3 sequential struct records (each 32 bytes aligned to 8)
const rec1 = arena.alloc(32, 8)!; // 0x5000
const rec2 = arena.alloc(32, 8)!; // 0x5020
const rec3 = arena.alloc(32, 8)!; // 0x5040

const bytesAllocatedBeforeReset = arena.offset; // 96
const recordsCount = arena.allocationCount; // 3

// Instant bulk reset
arena.reset();
const bytesAfterReset = arena.offset; // 0

console.log('Memory address of first allocated arena struct:', rec1.address);
// -> Memory address of first allocated arena struct: 0x5000
console.log('Total records allocated sequentially in arena:', recordsCount);
// -> Total records allocated sequentially in arena: 3
console.log('Total contiguous bytes consumed in arena pool:', bytesAllocatedBeforeReset);
// -> Total contiguous bytes consumed in arena pool: 96
console.log('Bytes remaining active in arena after instant bulk reset():', bytesAfterReset);
// -> Bytes remaining active in arena after instant bulk reset(): 0
console.log('ELF binary header magic bytes signature length: 4');
// -> ELF binary header magic bytes signature length: 4`,
      caption: {
        en: 'Simulation: first arena struct allocates at 0x5000; 3 records consume 96 bytes; instant reset drops active bytes to 0; ELF magic header is 4 bytes',
        bn: 'সিমুলেশন: প্রথম অ্যারেনা রেকর্ড 0x5000-এ বরাদ্দ হয়; ৩টি রেকর্ড ৯৬ বাইট নেয়; তাৎক্ষণিক রিসেট সক্রিয় বাইট ০ করে; ELF হেডার ৪ বাইট'
      }
    },
    {
      type: 'heading',
      id: 'best-practices',
      text: {
        en: 'Production Implementation Rules',
        bn: 'প্রোডাকশন বাস্তবায়নের গুরুত্বপূর্ণ নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 1: Always compile with strict diagnostic flags: -Wall -Wextra -Wpedantic -Werror. Treating compiler warnings as fatal errors catches type mismatches, uninitialized variables, and subtle bugs before deployment.',
        bn: 'নিয়ম ১: সর্বদা কঠোর ডায়াগনস্টিক ফ্ল্যাগ দিয়ে কম্পাইল করুন: -Wall -Wextra -Wpedantic -Werror। কম্পাইলার ওয়ার্নিংকে এরর হিসেবে গণ্য করলে টাইপ অমিল ও অসতর্ক ভুল আগেই ধরা পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Enable AddressSanitizer and UndefinedBehaviorSanitizer during development via -fsanitize=address,undefined. Sanitizers intercept buffer overflows, memory leaks, and null dereferences instantly.',
        bn: 'নিয়ম ২: ডেভেলপমেন্টের সময় -fsanitize=address,undefined দিয়ে স্যানিটাইজার সক্রিয় রাখুন। এটি কোড চলাকালীন বাফার ওভারফ্লো, মেমোরি লিক ও নাল ডি-রেফারেন্স তৎক্ষণাৎ পাকড়াও করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Strip debug symbols from production binaries using strip --strip-all. Stripping debug tables and comments slashes binary sizes and prevents proprietary symbol inspection in released software.',
        bn: 'নিয়ম ৩: রিলিজ সফটওয়্যারে strip --strip-all দিয়ে অপ্রয়োজনীয় ডিবাগ সিম্বল মুছে ফেলুন। এটি বাইনারির আকার অনেক কমিয়ে দেয় এবং অপ্রয়োজনীয় অভ্যন্তরীণ তথ্য উন্মুক্ত হওয়া রোধ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Leverage custom arena allocators for high-throughput lifecycle subsystems. Bumping an offset pointer in O(1) time and resetting in bulk eliminates runtime fragmentation and allocator locks.',
        bn: 'নিয়ম ৪: উচ্চগতির সাবসিস্টেমে কাস্টম অ্যারেনা মেমোরি ম্যানেজার ব্যবহার করুন। O(1) সময়ে অফসেট পয়েন্টার আগানো এবং এক কলেই সব মেমোরি খালি করা ফ্র্যাগমেন্টেশন ও লকিং জটিলতা দূর করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-forge-ex1',
      kind: 'mcq',
      topic: 'Core ELF binary sections and permissions',
      question: {
        en: 'Which ELF binary section stores compiled CPU machine instructions with execute permissions?',
        bn: 'ELF বাইনারি ফাইলের কোন সেকশনটিতে চালানোর অনুমতিসহ কম্পাইল করা সিপিইউ মেশিন কোড সংরক্ষিত থাকে?'
      },
      options: [
        {
          en: 'The .text section',
          bn: '.text সেকশন'
        },
        {
          en: 'The .bss section',
          bn: '.bss সেকশন'
        },
        {
          en: 'The .rodata section',
          bn: '.rodata সেকশন'
        },
        {
          en: 'The .trash section',
          bn: '.trash সেকশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Code machine instructions live in this classic section.',
        bn: 'কোডের মেশিন ইন্সট্রাকশনগুলো এই বহুল পরিচিত সেকশনে থাকে।'
      },
      explanation: {
        en: '.text holds the executable machine code. .rodata holds read-only constants, .data holds initialized globals, and .bss holds uninitialized globals.',
        bn: '.text এক্সিকিউটেবল মেশিন কোড ধারণ করে। .rodata কনস্ট্যান্ট ডেটা, .data ইনিশিয়ালাইজড গ্লোবাল এবং .bss আনইনিশিয়ালাইজড গ্লোবাল ধারণ করে।'
      }
    },
    {
      id: 'c-forge-ex2',
      kind: 'mcq',
      topic: 'Static linking versus dynamic linking benefits',
      question: {
        en: 'What is the primary advantage of static linking (.a) over dynamic linking (.so) in software deployment?',
        bn: 'সফটওয়্যার ডিপ্লয়মেন্টের ক্ষেত্রে ডাইনামিক লিংকিংয়ের (.so) তুলনায় স্ট্যাটিক লিংকিংয়ের (.a) প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'The compiled executable is entirely self-contained with all library code built-in, eliminating runtime shared library missing errors and version incompatibilities',
          bn: 'কম্পাইল করা সফটওয়্যারটি সমস্ত লাইব্রেরি কোডসহ সম্পূর্ণ স্বনির্ভর হয়, যার ফলে লাইব্রেরি ফাইল হারানোর ভয় বা ভার্সন অমিলের ঝুঁকি দূর হয়'
        },
        {
          en: 'Static linking makes the file 1000 times smaller on disk',
          bn: 'স্ট্যাটিক লিংকিং ফাইলের আকার ১০০০ গুণ ছোট করে ফেলে'
        },
        {
          en: 'Static linking allows the code to run without having a CPU',
          bn: 'স্ট্যাটিক লিংকিং কোনো সিপিইউ ছাড়াই কোড চালাতে সাহায্য করে'
        },
        {
          en: 'Static linking prevents users from turning off the computer',
          bn: 'স্ট্যাটিক লিংকিং ব্যবহারকারীকে কম্পিউটার বন্ধ করা থেকে বিরত রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Self-contained executable with zero external shared library dependencies.',
        bn: 'কোনো প্রকার বাহ্যিক লাইব্রেরি নির্ভরতাহীন একক স্বয়ংসম্পূর্ণ সফটওয়্যার।'
      },
      explanation: {
        en: 'Static linking embeds all required library code into the final executable, producing self-sufficient binaries that run without external .so dependencies.',
        bn: 'স্ট্যাটিক লিংকিং প্রয়োজনীয় সব লাইব্রেরি কোড মূল ফাইলে যুক্ত করে, ফলে কোনো বাহ্যিক .so ফাইল ছাড়াই সফটওয়্যারটি নির্বিঘ্নে চলতে পারে।'
      }
    },
    {
      id: 'c-forge-ex3',
      kind: 'mcq',
      topic: 'The operational mechanics of an Arena Allocator',
      question: {
        en: 'How does an Arena (Region-based) Allocator achieve ultra-fast O(1) allocation and deallocation performance?',
        bn: 'একটি অ্যারেনা (অঞ্চল-ভিত্তিক) মেমোরি ম্যানেজার কীভাবে অতি দ্রুত O(1) সময়ে মেমোরি বরাদ্দ ও অবমুক্ত করতে পারে?'
      },
      options: [
        {
          en: 'It reserves a contiguous memory pool upfront, allocates by advancing a bump pointer forward in O(1) time, and frees the entire pool instantly by resetting the offset to 0',
          bn: 'এটি শুরুতেই অবিচ্ছিন্ন মেমোরি পুল বরাদ্দ নেয়, কেবল একটি বাম্প পয়েন্টার এগিয়ে O(1) সময়ে মেমোরি দেয় এবং অফসেট ০ করে এক কলেই সব মেমোরি মুক্ত করে'
        },
        {
          en: 'By encrypting memory blocks with secret passwords',
          bn: 'গোপন পাসওয়ার্ড দিয়ে মেমোরি ব্লকগুলো এনক্রিপ্ট করার মাধ্যমে'
        },
        {
          en: 'By asking the user to press a button on the keyboard for each byte',
          bn: 'প্রতিটি বাইটের জন্য ব্যবহারকারীকে কিবোর্ডে বোতাম চাপতে বলে'
        },
        {
          en: 'It downloads extra RAM from online cloud websites',
          bn: 'এটি ইন্টারনেট থেকে অতিরিক্ত র্যাম ডাউনলোড করে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bump pointer offset advancement and instant bulk reset.',
        bn: 'বাম্প পয়েন্টার সরিয়ে বরাদ্দ এবং একবারে পুরো পুল রিসেট করা।'
      },
      explanation: {
        en: 'Arena allocators avoid costly malloc heap headers and fragmentation by bumping an offset pointer sequentially and clearing the entire buffer in one step.',
        bn: 'অ্যারেনা ম্যানেজার হিপ হেডার ও ফ্র্যাগমেন্টেশন এড়িয়ে কেবল একটি অফসেট পয়েন্টার সরিয়ে মেমোরি দেয় এবং এক কলেই পুরো মেমোরি রিসেট করে।'
      }
    },
    {
      id: 'c-forge-ex4',
      kind: 'mcq',
      topic: 'Compiler sanitizer flags for detecting runtime memory bugs',
      question: {
        en: 'What does the compiler flag -fsanitize=address do when compiling a C project with gcc or clang?',
        bn: 'gcc বা clang দিয়ে সি প্রকল্প কম্পাইল করার সময় -fsanitize=address ফ্ল্যাগটি কী কাজ করে?'
      },
      options: [
        {
          en: 'It instruments memory accesses with runtime boundary checks, instantly detecting out-of-bounds array reads, heap buffer overflows, and use-after-free bugs with detailed crash traces',
          bn: 'এটি মেমোরি অ্যাক্সেসগুলোতে রানটাইম বাউন্ডারি চেকিং যুক্ত করে এবং বাফার ওভারফ্লো, মেমোরির বাইরে পড়া ও ইউজ-আফটার-ফ্রি সংক্রান্ত বিশদ রিপোর্ট দেয়'
        },
        {
          en: 'It sends the author home address to Google Maps',
          bn: 'এটি প্রোগ্রামারের বাড়ির ঠিকানা গুগল ম্যাপে পাঠিয়ে দেয়'
        },
        {
          en: 'It formats the hard drive if any bug is found',
          bn: 'কোনো বাগ পাওয়া গেলে এটি সরাসরি হার্ডড্রাইভ ফরম্যাট করে দেয়'
        },
        {
          en: 'It makes the compiler run 10 times slower permanently',
          bn: 'এটি কম্পাইলারের গতি স্থায়ীভাবে ১০ গুণ কমিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'AddressSanitizer detects memory safety violations at runtime.',
        bn: 'AddressSanitizer রানটাইমে মেমোরি সংক্রান্ত ত্রুটি তাৎক্ষণিক শনাক্ত করে।'
      },
      explanation: {
        en: 'AddressSanitizer (ASan) injects shadow memory checks that catch buffer overflows, dangling pointer reads, and use-after-free vulnerabilities instantly.',
        bn: 'AddressSanitizer (ASan) প্রতিটি মেমোরি অ্যাক্সেস পরীক্ষা করে বাফার ওভারফ্লো ও ড্যাংলিং পয়েন্টারের মতো মারাত্মক নিরাপত্তা ত্রুটি সাথে সাথে শনাক্ত করে।'
      }
    }
  ],
  quiz: {
    id: 'the-binary-forge-quiz',
    title: {
      en: 'Binary Toolchains & Capstone Architecture Quiz',
      bn: 'বাইনারি টুলচেন ও ক্যাপস্টোন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-bss-section-zero-disk-footprint',
        kind: 'mcq',
        topic: 'Why the .bss section consumes zero bytes of disk space in an ELF binary',
        question: {
          en: 'Why does the .bss section of an ELF binary consume virtually zero bytes of disk storage regardless of how large the uninitialized global arrays are?',
          bn: 'আনইনিশিয়ালাইজড গ্লোবাল অ্যারে যতই বিশাল হোক না কেন, একটি ELF বাইনারির .bss সেকশন ডিস্কে প্রায় শূন্য বাইট জায়গা নেয় কেন?'
        },
        options: [
          {
            en: 'The binary file stores only the section total byte length in a header record; the operating system kernel zeroes and allocates the physical RAM pages upon process load',
            bn: 'বাইনারি ফাইল ডিস্কে কেবল মোট সাইজের একটি সংখ্যা লিখে রাখে; প্রসেস চলার সময় অপারেটিং সিস্টেম কার্নেল নিজে থেকেই র্যামে শূন্য দিয়ে মেমোরি সাজিয়ে নেয়'
          },
          {
            en: 'Because uninitialized variables do not exist in the physical universe',
            bn: 'কারণ আনইনিশিয়ালাইজড ভ্যারিয়েবলের আসলে কোনো বাস্তব অস্তিত্ব নেই'
          },
          {
            en: 'Because the compiler compresses .bss using MP3 audio compression',
            bn: 'কারণ কম্পাইলার .bss-কে এমপিথ্রি অডিও কম্প্রেশন দিয়ে ছোট করে'
          },
          {
            en: 'It is a bug in Linux that will be fixed in the next release',
            bn: 'এটি লিনাক্সের একটি ত্রুটি যা পরবর্তী রিলিজেই ঠিক করা হবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Only the requested size is recorded on disk; zeroing happens in RAM.',
          bn: 'ডিস্কে কেবল সাইজ লেখা থাকে; র্যামে লোড হওয়ার সময় শূন্য দিয়ে পূর্ণ করা হয়।'
        },
        explanation: {
          en: '.bss represents uninitialized static data. The ELF header records its size, but no zeroes are written to disk. The OS maps anonymous zero-filled pages at runtime.',
          bn: '.bss আনইনিশিয়ালাইজড ডেটা নির্দেশ করে। ডিস্কে কোনো শূন্য লেখা হয় না, শুধু সাইজ থাকে। প্রোগ্রাম চালু হলে ওএস মেমোরিতে শূন্য দিয়ে পেজ তৈরি করে।'
        }
      },
      {
        id: 'q-gdb-core-dump-debugging',
        kind: 'mcq',
        topic: 'Inspecting crashes with core dumps and GDB',
        question: {
          en: 'How do systems engineers diagnose the exact root cause of an unexpected segmentation fault crash occurring on a production server?',
          bn: 'প্রোডাকশন সার্ভারে অনাকাঙ্ক্ষিত সেগমেন্টেশন ফল্ট ক্র্যাশ ঘটলে সিস্টেম ইঞ্জিনিয়াররা কীভাবে তার মূল কারণ নির্ণয় করেন?'
        },
        options: [
          {
            en: 'By loading the generated core dump file into GDB (e.g. gdb ./app core) and executing backtrace (bt) to inspect call frames and register states at the instant of death',
            bn: 'তৈরি হওয়া কোর ডাম্প ফাইলটিকে GDB-তে লোড করে (যেমন gdb ./app core) এবং backtrace (bt) চালিয়ে ক্র্যাশের মুহূর্তের কল ফ্রেম ও রেজিস্টার পর্যবেক্ষণ করে'
          },
          {
            en: 'By purchasing a brand new computer server from an electronics store',
            bn: 'দোকান থেকে সম্পূর্ণ নতুন একটি কম্পিউটার সার্ভার কিনে এনে'
          },
          {
            en: 'By calling the local police department to report the crash',
            bn: 'ক্র্যাশের ঘটনা জানাতে স্থানীয় পুলিশ থানায় ফোন করে'
          },
          {
            en: 'By deleting all source code files from the server repository',
            bn: 'সার্ভার রিপোজিটরি থেকে সমস্ত সোর্স কোড ফাইল মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Post-mortem debugging with GDB backtrace.',
          bn: 'GDB-তে কোর ডাম্প ফাইল ও ব্যাকট্রেস (bt) কমান্ড ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'A core dump preserves process memory at the moment of failure. GDB inspects this snapshot to show the line number, call stack, and variable states during the crash.',
          bn: 'কোর ডাম্প ক্র্যাশের মুহূর্তের মেমোরির চিত্র সংরক্ষণ করে। GDB এই ফাইল বিশ্লেষণ করে ক্র্যাশের সঠিক লাইন, কল স্ট্যাক এবং ভ্যারিয়েবলের মান প্রদর্শন করে।'
        }
      },
      {
        id: 'q-compiler-optimization-o2-o3',
        kind: 'mcq',
        topic: 'Effects of compiler optimization flags (-O2 and -O3)',
        question: {
          en: 'What transformations does an optimizing C compiler perform when invoked with -O2 or -O3 flags?',
          bn: '-O2 বা -O3 ফ্ল্যাগ দিয়ে কম্পাইল করলে একটি অপ্টিমাইজিং সি কম্পাইলার কোডে কোন কোন রূপান্তর ঘটায়?'
        },
        options: [
          {
            en: 'Loop unrolling, dead code elimination, function inlining, instruction reordering, and SIMD vectorization to maximize CPU execution throughput',
            bn: 'লুপ আনরোলিং, অব্যবহৃত কোড বাদ দেওয়া, ইনলাইনিং, ইন্সট্রাকশন পুনর্বিন্যাস এবং সিপিইউর গতি বাড়াতে SIMD ভেক্টরাইজেশন সম্পন্ন করে'
          },
          {
            en: 'It deletes all comments and changes variable names to French',
            bn: 'এটি সমস্ত কমেন্ট মুছে ভ্যারিয়েবলের নামগুলো ফরাসি ভাষায় রূপান্তর করে'
          },
          {
            en: 'It reduces the computer internet bill by 50 percent',
            bn: 'এটি কম্পিউটারের ইন্টারনেট বিল ৫০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It replaces all while loops with manual gotos on the screen',
            bn: 'এটি স্ক্রিনে সমস্ত while লুপকে ম্যানুয়াল goto দিয়ে বদলে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hardware-level machine code optimizations for execution speed.',
          bn: 'সিপিইউর সর্বোচ্চ গতির জন্য হার্ডওয়্যার স্তরের মেশিন কোড অপ্টিমাইজেশন।'
        },
        explanation: {
          en: '-O2 and -O3 apply sophisticated optimization passes including register allocation, branch prediction alignment, loop vectorization, and dead code pruning.',
          bn: '-O2 এবং -O3 রেজিস্টার বণ্টন, ব্রাঞ্চ প্রিডিকশন অ্যালাইনমেন্ট, লুপ ভেক্টরাইজেশন এবং অপ্রয়োজনীয় কোড ছাঁটাই করে সর্বোচ্চ পারফরম্যান্স নিশ্চিত করে।'
        }
      },
      {
        id: 'q-shared-library-soname-versioning',
        kind: 'mcq',
        topic: 'Shared library soname and ABI version management',
        question: {
          en: 'Why do Linux dynamic shared libraries utilize a "soname" (such as libcrypto.so.3)?',
          bn: 'লিনাক্সে ডাইনামিক শেয়ার্ড লাইব্রেরিগুলো কেন "soname" (যেমন libcrypto.so.3) ব্যবহার করে?'
        },
        options: [
          {
            en: 'To encode the Application Binary Interface (ABI) major version, ensuring applications only link against compatible runtime library builds and preventing crashes',
            bn: 'অ্যাপ্লিকেশন বাইনারি ইন্টারফেসের (ABI) মূল ভার্সন নির্দিষ্ট করার জন্য, যা নিশ্চিত করে সফটওয়্যার কেবল উপযুক্ত সংস্করণের লাইব্রেরির সাথেই যুক্ত হতে পারবে'
          },
          {
            en: 'Because soname means the library was created by someone named Sonya',
            bn: 'কারণ soname বলতে বোঝায় লাইব্রেরিটি সোনিয়া নামের কেউ তৈরি করেছেন'
          },
          {
            en: 'To make the library play audio sounds when called',
            bn: 'লাইব্রেরি কল করার সময় যেন শব্দ বাজে তা নিশ্চিত করতে'
          },
          {
            en: 'To prevent the library from taking up space in computer RAM',
            bn: 'লাইব্রেরিটি যেন র্যামে কোনো জায়গা না নিতে পারে তা আটকাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ABI compatibility and version management.',
          bn: 'বাইনারি ইন্টারফেসের উপযুক্ততা এবং ভার্সন ব্যবস্থাপনার কথা ভাবুন।'
        },
        explanation: {
          en: 'The soname guarantees ABI compatibility. When a library introduces breaking ABI changes, bumping the major soname prevents older apps from linking against it and crashing.',
          bn: 'soname বাইনারি ইন্টারফেসের সামঞ্জস্য রক্ষা করে। লাইব্রেরিতে বড় কোনো পরিবর্তন এলে soname বাড়িয়ে দিলে পুরোনো অ্যাপগুলো ক্র্যাশ হওয়া থেকে রক্ষা পায়।'
        }
      }
    ]
  }
};
