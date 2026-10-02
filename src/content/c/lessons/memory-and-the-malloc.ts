import type { Lesson } from '../../../lib/types';

export const MemoryAndTheMallocLesson: Lesson = {
  slug: 'memory-and-the-malloc',
  tech: 'c',
  title: {
    en: 'Dynamic Memory Allocation — Heap Architecture, malloc, realloc & free',
    bn: 'ডাইনামিক মেমোরি অ্যালোকেশন — হিপ আর্কিটেকচার, malloc, realloc ও free'
  },
  summary: {
    en: 'Dynamic memory allocation provides C programs with the capability to request arbitrary blocks of RAM from the operating system heap at runtime. While local stack variables automatically deallocate upon function return, heap memory persists indefinitely until explicitly released by the programmer. The standard C library provides four core heap functions: malloc() allocates uninitialized raw bytes, calloc() allocates zero-initialized memory, realloc() resizes existing allocations dynamically, and free() returns memory chunks back to the allocator. Because C features no automated garbage collector, developers bear strict responsibility for memory safety: failing to call free() causes memory leaks, while double-freeing or using freed pointers triggers catastrophic heap corruption and security vulnerabilities.',
    bn: 'ডাইনামিক মেমোরি অ্যালোকেশন সি প্রোগ্রামগুলোকে রানটাইমে অপারেটিং সিস্টেমের হিপ মেমোরি থেকে প্রয়োজনমতো র্যাম বরাদ্দ নেওয়ার সুবিধা প্রদান করে। ফাংশন শেষ হলে লোকাল স্ট্যাকের ভ্যারিয়েবলগুলো স্বয়ংক্রিয়ভাবে নষ্ট হয়ে গেলেও, হিপ মেমোরি প্রোগ্রামার দ্বারা স্পষ্টভাবে অবমুক্ত না করা পর্যন্ত অক্ষুণ্ণ থাকে। স্ট্যান্ডার্ড সি লাইব্রেরি চারটি মূল ফাংশন দেয়: malloc() অশোধিত র\' বাইট বরাদ্দ করে, calloc() শূন্য দিয়ে প্রস্তুত মেমোরি দেয়, realloc() বিদ্যমান বরাদ্দের আকার কমায় বা বাড়ায় এবং free() মেমোরি পুনরায় সিস্টেমকে ফেরত দেয়। যেহেতু সি-তে কোনো অটোমেটিক গার্বেজ কালেক্টর নেই, তাই মেমোরির নিরাপত্তা নিশ্চিত করার সম্পূর্ণ দায়িত্ব ডেভেলপারের: free() করতে ভুলে গেলে মেমোরি লিক হয়, আর ডাবল-ফ্রি বা ইউজ-আফটার-ফ্রি করলে মারাত্মক হিপ মেমোরি বিপর্যয় ও নিরাপত্তা ঝুঁকি তৈরি হয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Heap Memory Segment and Runtime Allocation',
        bn: 'মূল ধারণা: হিপ মেমোরি সেগমেন্ট ও রানটাইম মেমোরি বরাদ্দ'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you build real-world software applications in C, memory requirements frequently cannot be determined until runtime. Fixed compile-time arrays on the stack have predetermined limits and risk stack overflow crashes. To handle arbitrary file sizes, growing dynamic tables, and long-lived data, C provides direct manual control over the heap memory segment through dynamic allocation routines.',
        bn: 'সি ভাষায় যখন আপনি বাস্তবমুখী সফটওয়্যার অ্যাপ্লিকেশন তৈরি করেন, তখন মেমোরির সঠিক চাহিদা প্রায়শই প্রোগ্রাম চলার আগ পর্যন্ত জানা যায় না। স্ট্যাকের ফিক্সড কম্পাইল-টাইম অ্যারোগুলোর একটি নির্দিষ্ট সীমা থাকে এবং তা স্ট্যাক ওভারফ্লো ক্র্যাশের ঝুঁকি বাড়ায়। ফাইলের অনিশ্চিত আকার, ক্রমবর্ধমান ডাইনামিক টেবিল এবং দীর্ঘস্থায়ী ডেটা পরিচালনার জন্য সি ভাষা ডাইনামিক মেমোরি রুটিনের মাধ্যমে সরাসরি হিপ সেগমেন্ট নিয়ন্ত্রণের সুবিধা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Heap Segment',
          def: {
            en: 'A flexible virtual memory pool managed by runtime allocators that grows dynamically upward toward higher memory addresses',
            bn: 'রানটাইম মেমোরি ম্যানেজার দ্বারা পরিচালিত একটি সুবিশাল ভার্চুয়াল মেমোরি পুল যা প্রয়োজন অনুসারে উচ্চ মেমোরি অ্যাড্রেসের দিকে বৃদ্ধি পায়'
          }
        },
        {
          term: 'malloc() Function',
          def: {
            en: 'Allocates a contiguous block of uninitialized raw bytes on the heap and returns a generic void pointer to its starting address',
            bn: 'হিপে অবিচ্ছিন্ন অশোধিত র\' বাইটের মেমোরি ব্লক বরাদ্দ করে এবং শুরুর অ্যাড্রেসের একটি জেনেরিক ভয়েড পয়েন্টার (void *) প্রদান করে'
          }
        },
        {
          term: 'calloc() Function',
          def: {
            en: 'Allocates memory for multiple elements and automatically initializes every single allocated byte to zero',
            bn: 'একাধিক উপাদানের জন্য প্রয়োজনীয় মেমোরি বরাদ্দ করে এবং প্রতিটি একক বাইটকে নিজে থেকেই শূন্য (০) দিয়ে পূরণ করে প্রস্তুত করে'
          }
        },
        {
          term: 'Memory Leak',
          def: {
            en: 'A bug where heap allocations lose all active pointer references without being freed, causing steady process memory exhaustion',
            bn: 'এমন একটি বাগ যেখানে হিপে বরাদ্দকৃত মেমোরি মুক্ত না করেই তার রেফারেন্স হারিয়ে যায় এবং ক্রমান্বয়ে মেমোরি শেষ হয়ে সিস্টেম অচল হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'allocation-functions',
      text: {
        en: 'The Core Allocation Suite: malloc, calloc, realloc, and free',
        bn: 'মূল অ্যালোকেশন লাইব্রেরি: malloc, calloc, realloc ও free'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Calling malloc(128) requests 128 contiguous bytes from the heap allocator. If sufficient virtual memory exists, it returns a void * pointing to the allocated block. If the operating system cannot satisfy the request, malloc returns NULL.',
        bn: 'malloc(128) কল করলে হিপ মেমোরি ম্যানেজার থেকে ১২৮ বাইটের অবিচ্ছিন্ন জায়গা চাওয়া হয়। মেমোরি থাকলে এটি বরাদ্দকৃত ব্লকের শুরুর দিকে নির্দেশকারী একটি void * পয়েন্টার প্রদান করে। কিন্তু মেমোরি না থাকলে malloc একটি NULL পয়েন্টার রিটার্ন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Unlike malloc, which leaves allocated bytes containing leftover memory garbage, calloc(count, size) systematically zeroes all memory cells. When dynamic collections need to expand, realloc(ptr, new_size) attempts to enlarge the buffer in place or migrates existing data to a larger memory region.',
        bn: 'malloc যেখানে মেমোরিতে আগের আবর্জনা বা গার্বেজ ভ্যালু অক্ষুণ্ণ রেখে দেয়, calloc(count, size) সেখানে প্রতিটি মেমোরি সেলকে নিশ্চিতভাবে শূন্য দিয়ে পরিষ্কার করে। ডাইনামিক কালেকশন বড় করার প্রয়োজন হলে realloc(ptr, new_size) বর্তমান জায়গাতেই তা বাড়ানোর চেষ্টা করে অথবা নতুন বড় ব্লকে আগের ডেটা কপি করে স্থানান্তরিত করে।'
      }
    },
    {
      type: 'heading',
      id: 'allocator-internals',
      text: {
        en: 'Allocator Mechanics: Headers, Metadata, and Chunk Boundaries',
        bn: 'মেমোরি ম্যানেজারের অভ্যন্তরীণ কৌশল: হেডার, মেটাডেটা ও চাঙ্ক বাউন্ডারি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When malloc allocates 128 bytes, the operating system actually reserves 144 bytes in physical memory. The hidden 16-byte prefix is an internal allocation header storing chunk size and allocation flags. When free(ptr) is later called without any length argument, the allocator reads this header to determine exactly how many bytes to recycle.',
        bn: 'malloc যখন ১২৮ বাইট মেমোরি বরাদ্দ করে, তখন সিস্টেম প্রকৃতপক্ষে ১৪৪ বাইট জায়গা নেয়। অতিরিক্ত এই ১৬ বাইট হলো লুকানো ইন্টারনাল হেডার যা চাঙ্কের আকার ও স্ট্যাটাস তথ্য ধারণ করে। পরবর্তীতে কোনো সাইজ উল্লেখ না করেই যখন free(ptr) ডাকা হয়, তখন মেমোরি ম্যানেজার এই হেডার পড়েই ঠিক কত বাইট মেমোরি অবমুক্ত করতে হবে তা নির্ণয় করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Corrupting this hidden metadata by writing past the allocated 128-byte boundary damages the allocator free-list structure. This triggers fatal heap corruption crashes during subsequent malloc or free invocations.',
        bn: 'নির্ধারিত ১২৮-বাইটের সীমা অতিক্রম করে ডেটা লিখলে এই লুকানো মেটাডেটা ক্ষতিগ্রস্ত হয় এবং ফ্রি-লিস্ট কাঠামো ভেঙে পড়ে। এর ফলে পরবর্তী যেকোনো malloc বা free কল করার সময় সিস্টেম মারাত্মক হিপ করাপশন ক্র্যাশ প্রদর্শন করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Dynamic Memory Functions',
        bn: 'কাঠামোগত তুলনা: ডাইনামিক মেমোরি ফাংশনসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Function Signature', bn: 'ফাংশন সিগনেচার' },
        { en: 'Initialization State', bn: 'ইনিশিয়ালাইজেশন অবস্থা' },
        { en: 'Failure Return', bn: 'ব্যর্থতায় রিটার্ন' },
        { en: 'Primary Systems Purpose', bn: 'প্রধান সিস্টেম ভূমিকা' }
      ],
      rows: [
        [
          { en: 'void *malloc(size_t size)', bn: 'void *malloc(size_t size)' },
          { en: 'Uninitialized (contains raw garbage bytes)', bn: 'অশোধিত (আগের গার্বেজ বাইট থাকে)' },
          { en: 'Returns NULL', bn: 'NULL প্রদান করে' },
          { en: 'Raw data buffers, string allocations, fast scratchpads', bn: 'সাধারণ ডেটা বাফার, স্ট্রিং ও উচ্চগতির সাময়িক মেমোরি' }
        ],
        [
          { en: 'void *calloc(size_t num, size_t size)', bn: 'void *calloc(size_t num, size_t size)' },
          { en: 'Zero-initialized (all bytes set to 0x00)', bn: 'শূন্য দিয়ে শোধিত (সব বাইট 0x00 হয়)' },
          { en: 'Returns NULL', bn: 'NULL প্রদান করে' },
          { en: 'Arrays of structs, numerical tables, security tokens', bn: 'স্ট্রাক্ট অ্যারে, গাণিতিক টেবিল ও সিকিউরিটি টোকেন' }
        ],
        [
          { en: 'void *realloc(void *ptr, size_t new_size)', bn: 'void *realloc(void *ptr, size_t new_size)' },
          { en: 'Preserves original bytes; new tail is uninitialized', bn: 'আগের বাইট অক্ষুণ্ণ রাখে; বর্ধিত অংশ অশোধিত থাকে' },
          { en: 'Returns NULL (original ptr stays allocated)', bn: 'NULL দেয় (আগের ptr অক্ষুণ্ণ থাকে)' },
          { en: 'Dynamic array growth, vector resizing, stream ingestion', bn: 'ডাইনামিক অ্যারে বৃদ্ধি, ভেক্টর রিসাইজ ও স্ট্রিম গ্রহণ' }
        ],
        [
          { en: 'void free(void *ptr)', bn: 'void free(void *ptr)' },
          { en: 'Deallocates memory chunk; marks block as available', bn: 'মেমোরি অবমুক্ত করে পুনরায় ব্যবহারের জন্য প্রস্তুত করে' },
          { en: 'No return (void); free(NULL) is a safe no-op', bn: 'কোনো রিটার্ন নেই; free(NULL) সম্পূর্ণ নিরাপদ' },
          { en: 'Releasing heap blocks, closing resources, preventing leaks', bn: 'হিপ মেমোরি অবমুক্তকরণ ও মেমোরি লিক প্রতিরোধ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Heap Allocator Lifecycle & Resizing',
        bn: 'বাস্তব কোড সিমুলেশন: হিপ মেমোরি লাইফসাইকেল ও রিসাইজিং'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Dynamic Heap Allocation (malloc, realloc, free) in Node.js

class SimulatedHeapAllocator {
  public usedBytes = 0;
  public allocations = new Map<string, number>();
  public nextAddress = 0x3000;

  constructor(public capacity = 1024) {}

  malloc(sizeBytes: number): string | null {
    if (this.usedBytes + sizeBytes > this.capacity) {
      return null; // OOM (Out of Memory) simulation
    }
    const addrHex = '0x' + this.nextAddress.toString(16).toUpperCase();
    this.allocations.set(addrHex, sizeBytes);
    this.usedBytes += sizeBytes;
    this.nextAddress += sizeBytes;
    return addrHex;
  }

  realloc(addrHex: string, newSizeBytes: number): string | null {
    if (!this.allocations.has(addrHex)) return null;
    this.free(addrHex);
    return this.malloc(newSizeBytes);
  }

  free(addrHex: string): boolean {
    if (this.allocations.has(addrHex)) {
      const size = this.allocations.get(addrHex)!;
      this.usedBytes -= size;
      this.allocations.delete(addrHex);
      return true;
    }
    return false;
  }
}

const heap = new SimulatedHeapAllocator(1024);

// Step 1: Allocate 128 bytes
const ptr1 = heap.malloc(128); // 0x3000
// Step 2: Allocate 256 bytes
const ptr2 = heap.malloc(256); // 0x3080

const bytesAfterTwoMallocs = heap.usedBytes; // 384

// Step 3: Free ptr2
heap.free(ptr2!);
const bytesAfterFree = heap.usedBytes; // 128

// Step 4: Realloc ptr1 to 512 bytes
const ptr1Resized = heap.realloc(ptr1!, 512);
const finalUsedBytes = heap.usedBytes; // 512

console.log('Heap memory address allocated for initial 128-byte buffer:', ptr1);
// -> Heap memory address allocated for initial 128-byte buffer: 0x3000
console.log('Total heap bytes used after allocating 128 and 256 bytes:', bytesAfterTwoMallocs);
// -> Total heap bytes used after allocating 128 and 256 bytes: 384
console.log('Heap bytes remaining after calling free() on 256-byte buffer:', bytesAfterFree);
// -> Heap bytes remaining after calling free() on 256-byte buffer: 128
console.log('Total heap bytes consumed after reallocating to 512 bytes:', finalUsedBytes);
// -> Total heap bytes consumed after reallocating to 512 bytes: 512`,
      caption: {
        en: 'Simulation: initial 128-byte buffer starts at 0x3000; total reaches 384 bytes; freeing 256 drops usage to 128; realloc expands to 512 bytes',
        bn: 'সিমুলেশন: ১২৮-বাইটের বাফার 0x3000-এ শুরু হয়; মোট মেমোরি ৩৮৪ বাইট হয়; ২৫৬ মুক্ত করলে ১২৮ থাকে; realloc করে ৫১২ বাইট হয়'
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
        en: 'Rule 1: Always check for NULL return values after calling malloc, calloc, or realloc. Assuming allocations succeed leads to instant SIGSEGV segmentation crashes during low-memory conditions.',
        bn: 'নিয়ম ১: malloc, calloc বা realloc কল করার পর সর্বদা NULL কিনা যাচাই করুন। মেমোরি বরাদ্দ সফল হয়েছে ধরে নিলে মেমোরি সংকটের সময় তাৎক্ষণিক SIGSEGV ক্র্যাশ ঘটবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Never assign realloc return values directly to the original pointer variable. If realloc fails, it returns NULL while leaving the original allocation intact; assigning directly leaks the original memory.',
        bn: 'নিয়ম ২: realloc-এর ফলাফল সরাসরি মূল পয়েন্টার ভ্যারিয়েবলে রাখবেন না। realloc ব্যর্থ হলে NULL দেয় কিন্তু আগের মেমোরি ধরে রাখে; সরাসরি মান বসালে মূল মেমোরি লিক হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Set pointers to NULL immediately after freeing them. Writing free(ptr); ptr = NULL; guarantees that accidental subsequent use-after-free or double-free bugs are safely neutralized.',
        bn: 'নিয়ম ৩: মেমোরি ফ্রি করার পরপরই পয়েন্টারকে NULL করে দিন। free(ptr); ptr = NULL; লিখলে অসাবধানতাবশত পুনরায় ডাবল-ফ্রি বা ইউজ-আফটার-ফ্রি ঘটলেও সিস্টেম নিরাপদ থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Establish strict single-ownership patterns for every dynamic allocation. Clearly define which module allocates memory and which module is responsible for releasing it to prevent leaks in large architectures.',
        bn: 'নিয়ম ৪: প্রতিটি ডাইনামিক বরাদ্দের জন্য একক মালিকানা নিশ্চিত করুন। কোন মডিউল মেমোরি বরাদ্দ করবে এবং কে তা অবমুক্ত করবে তা পরিষ্কার নির্ধারণ করলে জটিল অ্যাপ্লিকেশনে মেমোরি লিক এড়ানো যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-malloc-ex1',
      kind: 'mcq',
      topic: 'The difference between stack and heap memory in C',
      question: {
        en: 'How does heap memory allocated via malloc() differ fundamentally from stack memory in C?',
        bn: 'সি-তে malloc() দিয়ে বরাদ্দকৃত হিপ মেমোরি স্ট্যাক মেমোরির চেয়ে কীভাবে মৌলিকভাবে আলাদা?'
      },
      options: [
        {
          en: 'Heap memory persists across function calls until explicitly released with free(), whereas stack variables are automatically destroyed upon function return',
          bn: 'হিপ মেমোরি free() দিয়ে অবমুক্ত না করা পর্যন্ত অক্ষুণ্ণ থাকে, যেখানে স্ট্যাকের ভ্যারিয়েবলগুলো ফাংশন শেষ হওয়ার সাথে সাথে ধ্বংস হয়ে যায়'
        },
        {
          en: 'Heap memory is physically located inside the computer monitor display',
          bn: 'হিপ মেমোরি মনিটর ডিসপ্লের ভেতরে অবস্থান করে'
        },
        {
          en: 'Stack memory can only store letters while heap memory can only store numbers',
          bn: 'স্ট্যাক মেমোরি কেবল অক্ষর এবং হিপ মেমোরি কেবল সংখ্যা জমা রাখতে পারে'
        },
        {
          en: 'Heap memory can only be allocated on alternate days of the week',
          bn: 'হিপ মেমোরি কেবল সপ্তাহের নির্দিষ্ট দিনগুলোতে বরাদ্দ করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Manual lifetime control until free() vs automatic scope destruction.',
        bn: 'free() না করা পর্যন্ত স্থায়ী বনাম স্কোপ শেষ হলে স্বয়ংক্রিয় ধ্বংস।'
      },
      explanation: {
        en: 'Stack allocations have automatic storage duration tied to their scope. Heap allocations persist until explicitly released via free().',
        bn: 'স্ট্যাকের মেমোরি তার স্কোপ শেষ হলে নিজে থেকেই অবমুক্ত হয়। কিন্তু হিপের মেমোরি ম্যানুয়ালি free() না করা পর্যন্ত স্থায়ী থাকে।'
      }
    },
    {
      id: 'c-malloc-ex2',
      kind: 'mcq',
      topic: 'The difference between malloc and calloc',
      question: {
        en: 'What is the principal difference between calling malloc(n * sizeof(int)) and calloc(n, sizeof(int))?',
        bn: 'malloc(n * sizeof(int)) এবং calloc(n, sizeof(int)) ব্যবহারের প্রধান পার্থক্য কী?'
      },
      options: [
        {
          en: 'calloc zeroes every single allocated byte in memory, preventing garbage data bugs, whereas malloc leaves memory uninitialized',
          bn: 'calloc মেমোরির প্রতিটি একক বাইটকে শূন্য দিয়ে প্রস্তুত করে গার্বেজ ডেটা প্রতিরোধ করে, যেখানে malloc মেমোরিকে অশোধিত অবস্থায় রেখে দেয়'
        },
        {
          en: 'malloc only works on Linux while calloc only works on Windows',
          bn: 'malloc কেবল লিনাক্সে এবং calloc কেবল উইন্ডোজে কাজ করে'
        },
        {
          en: 'calloc converts all numbers into capital letters',
          bn: 'calloc সমস্ত সংখ্যাকে বড় হাতের অক্ষরে রূপান্তর করে'
        },
        {
          en: 'malloc frees memory while calloc locks the hard drive',
          bn: 'malloc মেমোরি মুক্ত করে আর calloc হার্ডড্রাইভ লক করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Zero-initialization of bytes.',
        bn: 'মেমোরির প্রতিটি বাইট শূন্য দিয়ে ভরাট করার কথা ভাবুন।'
      },
      explanation: {
        en: 'calloc initializes all allocated bytes to zero. malloc leaves memory untouched, which contains residual garbage values.',
        bn: 'calloc বরাদ্দকৃত সমস্ত বাইটকে শূন্য দিয়ে ইনিশিয়ালাইজ করে। আর malloc মেমোরিকে আগের আবর্জনা বা গার্বেজ অবস্থায় রেখে দেয়।'
      }
    },
    {
      id: 'c-malloc-ex3',
      kind: 'mcq',
      topic: 'Safe usage pattern when invoking realloc',
      question: {
        en: 'Why is it dangerous to write ptr = realloc(ptr, new_size) directly without using an intermediate temporary pointer?',
        bn: 'মাঝামাঝি সাময়িক পয়েন্টার ব্যবহার না করে সরাসরি ptr = realloc(ptr, new_size) লেখা কেন বিপজ্জনক?'
      },
      options: [
        {
          en: 'If realloc fails, it returns NULL while leaving the original memory block intact; overwriting ptr with NULL loses the reference and causes an unrecoverable memory leak',
          bn: 'realloc ব্যর্থ হলে NULL দেয় কিন্তু আসল মেমোরিটি অক্ষুণ্ণ রাখে; ফলে সরাসরি ptr-এ NULL বসালে আগের রেফারেন্স হারিয়ে চিরতরে মেমোরি লিক ঘটে'
        },
        {
          en: 'Because realloc will delete the operating system kernel',
          bn: 'কারণ realloc অপারেটিং সিস্টেম কার্নেল মুছে ফেলে'
        },
        {
          en: 'Because C compilers forbid using the equal sign with realloc',
          bn: 'কারণ সি কম্পাইলার realloc-এর সাথে সমান চিহ্ন ব্যবহারে নিষেধাজ্ঞা দেয়'
        },
        {
          en: 'It causes the computer screen to invert all display colors',
          bn: 'এটি কম্পিউটার স্ক্রিনের ডিসপ্লে রঙ সম্পূর্ণ উল্টে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If reallocation fails, where did the old pointer go?',
        bn: 'নতুন বরাদ্দ ব্যর্থ হলে আগের মেমোরি পয়েন্টারের কী দশা হবে?'
      },
      explanation: {
        en: 'If realloc fails, it returns NULL but does not free the original allocation. If assigned directly to ptr, the original address is lost and cannot be freed.',
        bn: 'realloc ব্যর্থ হলে NULL রিটার্ন করলেও আগের মেমোরি ফ্রি করে না। সরাসরি ptr-এ বসালে আগের অ্যাড্রেস হারিয়ে যায় এবং তা আর মুক্ত করা সম্ভব হয় না।'
      }
    },
    {
      id: 'c-malloc-ex4',
      kind: 'mcq',
      topic: 'Consequences of double-free and use-after-free vulnerabilities',
      question: {
        en: 'What is a "Double Free" vulnerability in C, and why does it represent a critical security hazard?',
        bn: 'সি-তে "ডাবল ফ্রি" (Double Free) ত্রুটি বলতে কী বোঝায় এবং এটি কেন মারাত্মক নিরাপত্তা ঝুঁকি তৈরি করে?'
      },
      options: [
        {
          en: 'Calling free() twice on the same memory address, which corrupts internal allocator metadata and allows attackers to execute arbitrary code exploits',
          bn: 'একই মেমোরি অ্যাড্রেসে দুইবার free() ডাকা, যা মেমোরি ম্যানেজারের মেটাডেটা নষ্ট করে হ্যাকারদের ইচ্ছামতো ক্ষতিকর কোড চালানোর সুযোগ করে দেয়'
        },
        {
          en: 'A discount coupon that gives developers two free software compilers',
          bn: 'একটি ডিসকাউন্ট কুপন যা ডেভেলপারদের দুটি ফ্রি কম্পাইলার দেয়'
        },
        {
          en: 'An algorithm that doubles the speed of mathematical multiplication',
          bn: 'একটি অ্যালগরিদম যা গাণিতিক গুণের গতি দ্বিগুণ করে'
        },
        {
          en: 'A tool that frees the user from having to write semicolons in C',
          bn: 'এমন একটি টুল যা সি-তে সেমিকোলন লেখার ঝামেলা থেকে মুক্তি দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Releasing the same memory block more than once.',
        bn: 'একই মেমোরি ব্লককে একাধিকবার অবমুক্ত করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Freeing already-freed memory corrupts allocator bin structures and freelists, leading to security exploits or unpredictable segmentation crashes.',
        bn: 'ইতিপূর্বে অবমুক্ত করা মেমোরি আবার ফ্রি করলে মেমোরি ম্যানেজারের ফ্রি-লিস্ট বিকৃত হয়, যার ফলে মারাত্মক নিরাপত্তা ত্রুটি বা সিস্টেম ক্র্যাশ ঘটে।'
      }
    }
  ],
  quiz: {
    id: 'memory-and-the-malloc-quiz',
    title: {
      en: 'Heap Architecture & Dynamic Memory Quiz',
      bn: 'হিপ আর্কিটেকচার ও ডাইনামিক মেমোরি কুইজ'
    },
    questions: [
      {
        id: 'q-memory-leak-mechanics',
        kind: 'mcq',
        topic: 'Mechanics and consequences of memory leaks in long-running services',
        question: {
          en: 'What is the operational consequence of an uncorrected memory leak in a long-running daemon or web server written in C?',
          bn: 'সি-তে লেখা দীর্ঘমেয়াদী সার্ভার বা ব্যাকগ্রাউন্ড সেবায় মেমোরি লিক সংশোধন না করার কার্যকর পরিণতি কী?'
        },
        options: [
          {
            en: 'The resident memory footprint grows continuously until the operating system Out-Of-Memory (OOM) killer abruptly terminates the process',
            bn: 'প্রসেসের মেমোরি অনবরত বাড়তে থাকে যতক্ষণ না অপারেটিং সিস্টেমের আউট-অব-মেমোরি (OOM) কিলার প্রোগ্রামটিকে অপ্রত্যাশিতভাবে বন্ধ করে দেয়'
          },
          {
            en: 'The computer processor converts memory into text messages sent to the user',
            bn: 'সিপিইউ মেমোরিকে টেক্সট মেসেজে রূপান্তর করে ব্যবহারকারীকে পাঠায়'
          },
          {
            en: 'The program runs 10 times faster because it holds more memory',
            bn: 'বেশি মেমোরি ধরে রাখার কারণে প্রোগ্রামটি ১০ গুণ বেশি দ্রুত গতিতে চলে'
          },
          {
            en: 'The compiler automatically rewrites the server into JavaScript',
            bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে সার্ভারটিকে জাভাস্ক্রিপ্টে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unbounded heap consumption leads to OS termination.',
          bn: 'সীমাহীন মেমোরি ব্যবহারের ফলে অপারেটিং সিস্টেম প্রসেসটি মেরে ফেলে।'
        },
        explanation: {
          en: 'Memory leaks steadily consume RAM. In 24/7 background servers, this causes eventual memory exhaustion until the OS OOM killer terminates the service.',
          bn: 'মেমোরি লিক ক্রমশ র্যাম গ্রাস করে। সার্বক্ষণিক চলা সার্ভারে এর ফলে একসময় মেমোরি শেষ হয়ে যায় এবং ওএস ওওএম (OOM) কিলার সার্ভিসটি বন্ধ করে দেয়।'
        }
      },
      {
        id: 'q-hidden-allocator-header',
        kind: 'mcq',
        topic: 'Hidden allocation headers and buffer overrun corruption',
        question: {
          en: 'Why does free(ptr) not require an explicit size argument to deallocate memory?',
          bn: 'মেমোরি মুক্ত করার সময় free(ptr)-এ কেন কোনো সাইজ বা আকারের আর্গুমেন্ট উল্লেখ করতে হয় না?'
        },
        options: [
          {
            en: 'The heap allocator stores chunk metadata (including allocation byte length) in a hidden prefix header immediately preceding the user pointer in RAM',
            bn: 'মেমোরি ম্যানেজার র্যামে ইউজারের পয়েন্টারের ঠিক আগেই একটি গোপন প্রিফিক্স হেডারে বরাদ্দের সাইজসহ অন্যান্য তথ্য সংরক্ষণ করে রাখে'
          },
          {
            en: 'Because free() automatically deletes all memory across the entire computer',
            bn: 'কারণ free() কম্পিউটারের সমস্ত মেমোরি স্বয়ংক্রিয়ভাবে মুছে ফেলে'
          },
          {
            en: 'Because C pointers always have psychic knowledge of their size',
            bn: 'কারণ সি পয়েন্টার অলৌকিক উপায়ে নিজের আকার জানতে পারে'
          },
          {
            en: 'Operating systems only allow 1-byte memory allocations',
            bn: 'অপারেটিং সিস্টেম কেবল ১ বাইটের মেমোরি বরাদ্দ করার অনুমতি দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Metadata stored in front of the returned address.',
          bn: 'ইউজারকে দেওয়া অ্যাড্রেসের ঠিক আগের হেডারে মেটাডেটা থাকে।'
        },
        explanation: {
          en: 'Allocators place a hidden chunk header directly before the returned address. free() reads this header to discover the allocation size.',
          bn: 'বরাদ্দকারী রিটার্ন করা অ্যাড্রেসের ঠিক আগেই একটি লুকানো চাঙ্ক হেডার রাখে। free() সেই হেডার পড়েই মেমোরির সঠিক সাইজ বের করে।'
        }
      },
      {
        id: 'q-valgrind-memory-sanitizers',
        kind: 'mcq',
        topic: 'Tools for detecting memory bugs (AddressSanitizer and Valgrind)',
        question: {
          en: 'Which modern compiler tooling and diagnostic frameworks are industry standards for detecting memory leaks and heap buffer overflows in C?',
          bn: 'সি প্রোগ্রামে মেমোরি লিক ও বাফার ওভারফ্লো শনাক্তকরণে কোন টুল ও ডায়াগনস্টিক ফ্রেমওয়ার্ক বিশ্বব্যাপী স্বীকৃত স্ট্যান্ডার্ড?'
        },
        options: [
          {
            en: 'AddressSanitizer (compiled with -fsanitize=address) and Valgrind Memcheck',
            bn: 'অ্যাড্রেস স্যানিটাইজার (AddressSanitizer, -fsanitize=address দিয়ে কম্পাইল করা) এবং ভালগ্রিন্ড মেমচেক (Valgrind Memcheck)'
          },
          {
            en: 'Adobe Photoshop and Microsoft Paint',
            bn: 'অ্যাডোবি ফটোশপ এবং মাইক্রোসফট পেইন্ট'
          },
          {
            en: 'Google Chrome Bookmark Manager',
            bn: 'গুগল ক্রোম বুকমার্ক ম্যানেজার'
          },
          {
            en: 'Windows Media Player 9',
            bn: 'উইন্ডোজ মিডিয়া প্লেয়ার ৯'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compiler sanitizers and dynamic analysis memory tools.',
          bn: 'কম্পাইলার স্যানিটাইজার ও মেমোরি বিশ্লেষণকারী টুলের কথা ভাবুন।'
        },
        explanation: {
          en: 'AddressSanitizer (ASan) and Valgrind instrument memory accesses to intercept buffer overflows, memory leaks, and invalid frees during program execution.',
          bn: 'AddressSanitizer (ASan) এবং Valgrind কোড চলার সময় মেমোরি অ্যাক্সেস পর্যবেক্ষণ করে বাফার ওভারফ্লো, মেমোরি লিক ও অবৈধ ফ্রি তাৎক্ষণিক শনাক্ত করে।'
        }
      },
      {
        id: 'q-custom-arena-allocator-benefit',
        kind: 'mcq',
        topic: 'Benefits of custom arena (region-based) allocators',
        question: {
          en: 'What architectural advantage does an Arena (or Region-based) allocator provide over repetitive individual malloc/free calls?',
          bn: 'বারবার পৃথক malloc ও free কলের তুলনায় একটি অ্যারেনা (Arena) বা অঞ্চল-ভিত্তিক মেমোরি ম্যানেজার কোন আর্কিটেকচারাল সুবিধা দেয়?'
        },
        options: [
          {
            en: 'Extremely fast bump allocation in O(1) time and instant bulk deallocation of the entire region in a single reset, eliminating memory fragmentation',
            bn: 'O(1) সময়ে অত্যন্ত দ্রুত বাম্প অ্যালোকেশন এবং মাত্র একটি রিসেটে পুরো অঞ্চলের সমস্ত মেমোরি তাৎক্ষণিক অবমুক্তকরণ, যা মেমোরি ফ্র্যাগমেন্টেশন দূর করে'
          },
          {
            en: 'It connects the computer directly to a satellite in space',
            bn: 'এটি কম্পিউটারকে সরাসরি মহাকাশের স্যাটেলাইটের সাথে যুক্ত করে দেয়'
          },
          {
            en: 'It increases the monitor refresh rate to 1000 Hz',
            bn: 'এটি মনিটরের রিফ্রেশ রেট ১০০০ হার্টজে বাড়িয়ে দেয়'
          },
          {
            en: 'It translates the source code into Japanese',
            bn: 'এটি সোর্স কোডকে জাপানি ভাষায় অনুবাদ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bump pointer allocation and single bulk deallocation.',
          bn: 'বাম্প পয়েন্টার দিয়ে অতি দ্রুত মেমোরি বরাদ্দ ও একবারে পুরো ব্লক খালি করা।'
        },
        explanation: {
          en: 'Arena allocators allocate sequentially by bumping an offset pointer and free the entire region in one call, eliminating fragmentation and malloc overhead.',
          bn: 'অ্যারেনা ম্যানেজার কেবল একটি অফসেট পয়েন্টার সরিয়ে নিমেষেই মেমোরি দেয় এবং এক কলেই সব মেমোরি খালি করে ফ্র্যাগমেন্টেশন ও অতিরিক্ত ওভারহেড দূর করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'files-and-the-fd',
    title: {
      en: 'File I/O, File Descriptors & System Calls — POSIX Streams & Buffers',
      bn: 'ফাইল I/O, ফাইল ডেসক্রিপ্টর ও সিস্টেম কল — পসিক্স স্ট্রিম ও বাফার'
    }
  }
};
