import type { Lesson } from '../../../lib/types';

export const theMemoryDioramaLesson: Lesson = {
  slug: 'the-memory-diorama',
  tech: 'linked-lists',
  title: {
    en: 'Memory Allocators & Intrusive Lists — Free Lists, Coalescing, and Kernel list_head',
    bn: 'মেমোরি অ্যালোকেটর ও ইন্ট্রুসিভ লিস্ট: ফ্রি লিস্ট, কোলেসিং এবং কার্নেল list_head'
  },
  summary: {
    en: 'Operating system heap allocators rely on linked lists to track unallocated memory without wasting space, embedding pointer links directly inside freed chunks. Boundary tag coalescing prevents fragmentation by merging adjacent free blocks. In kernel engineering, intrusive linked lists embed list nodes directly within task structures, eliminating secondary wrapper allocations and enabling multi-list membership via offset arithmetic.',
    bn: 'অপারেটিং সিস্টেমের হিপ অ্যালোকেটরগুলো অব্যবহৃত মেমোরি ট্র্যাক করতে লিঙ্কড লিস্ট ব্যবহার করে, যেখানে ফ্রি মেমোরির ভেতরেই পয়েন্টারগুলো লুকিয়ে রাখা হয়। বাউন্ডারি ট্যাগ কোলেসিং পাশাপাশি থাকা ফাঁকা ব্লকগুলোকে যুক্ত করে মেমোরি খণ্ডায়ন রোধ করে। কার্নেল ইঞ্জিনিয়ারিংয়ে ইন্ট্রুসিভ লিঙ্কড লিস্ট সরাসরি টাস্ক কাঠামোর ভেতর নোড গেঁথে দেয়, যা বাড়তি মেমোরি বরাদ্দ দূর করে এবং অফসেট পাটিগণিতের মাধ্যমে এক নোডকে একাধিক লিস্টের সদস্য হতে দেয়।'
  },
  minutes: 22,
  nextLesson: {
    slug: 'the-chain-panorama',
    tech: 'linked-lists',
    title: {
      en: 'Linked List Panorama: Comparative Taxonomy and Architecture Selection',
      bn: 'লিঙ্কড লিস্ট প্যানোরামা: তুলনামূলক শ্রেণিবিন্যাস ও স্থাপত্য নির্বাচন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'free-list-architecture',
      text: {
        en: 'Free Lists: Embedding Links Inside Dead Memory',
        bn: 'ফ্রি লিস্টের স্থাপত্য: মুক্ত মেমোরির ভেতর পয়েন্টার প্রতিস্থাপন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you call malloc or free in systems languages like C, the operating system kernel does not allocate raw memory on each call. Instead, the runtime memory allocator manages a pre-allocated heap arena. When memory blocks are released, the allocator chains them into a linked list called a free list to fulfill future requests without invoking expensive system calls.',
        bn: 'যখন আপনি সি বা সিস্টেমস প্রোগ্রামিং ভাষায় malloc বা free কল করেন, তখন অপারেটিং সিস্টেম কার্নেল প্রতি কলে মেমোরি বরাদ্দ করে না। বরং রানটাইম মেমোরি অ্যালোকেটর একটি পূর্ব-বরাদ্দকৃত হিপ পরিচালনা করে। কোনো মেমোরি ব্লক ছেড়ে দিলে অ্যালোকেটর সেগুলোকে ফ্রি লিস্ট নামক একটি লিঙ্কড লিস্টে গেঁথে রাখে, যাতে সিস্টেম কল ছাড়াই ভবিষ্যতে নতুন অনুরোধ পূরণ করা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Maintaining this free list requires zero extra memory overhead through a clever engineering invariant: while a memory block is actively allocated, its bytes belong to user application data; but once freed, that payload memory is entirely idle. The allocator reuses the first 16 bytes of the freed payload to store next and prev pointers, constructing an in-place doubly linked chain across inactive memory.',
        bn: 'একটি চমৎকার ইঞ্জিনিয়ারিং কৌশলের মাধ্যমে এই ফ্রি লিস্ট পরিচালনা করতে কোনো অতিরিক্ত মেমোরি খরচ হয় না: যখন একটি মেমোরি ব্লক ব্যবহারে থাকে, তখন তার ভেতরের বাইটগুলো ব্যবহারকারীর ডাটা ধরে রাখে; কিন্তু মুক্ত হওয়ার পর সেই পেলোড ফাঁকা হয়ে যায়। অ্যালোকেটর মুক্ত পেলোডের প্রথম ১৬ বাইট ব্যবহার করে next ও prev পয়েন্টার লিখে রাখে, ফলে অকার্যকর মেমোরির ওপরই স্বয়ম্ভূ ডাবলি লিঙ্কড লিস্ট তৈরি হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'free-list',
          def: {
            en: 'A linked list of unallocated memory chunks maintained by the heap allocator, where pointer headers occupy freed payload space.',
            bn: 'হিপ অ্যালোকেটর দ্বারা সংরক্ষিত খালি মেমোরি খণ্ডের লিঙ্কড লিস্ট, যেখানে পয়েন্টারগুলো অব্যবহৃত পেলোড স্পেসে সংরক্ষিত থাকে।'
          }
        },
        {
          term: 'boundary-tags',
          def: {
            en: 'Size headers and footers placed at block borders that allow an allocator to inspect neighboring blocks in O(1) time.',
            bn: 'মেমোরি ব্লকের শুরুতে ও শেষে থাকা সাইজ ট্যাগ যা সংলগ্ন প্রতিবেশী ব্লকগুলোকে তাৎক্ষণিকভাবে O(1) সময়ে পরীক্ষা করতে দেয়।'
          }
        },
        {
          term: 'block-coalescing',
          def: {
            en: 'Merging physically adjacent free memory blocks into a single continuous parcel to eliminate external fragmentation.',
            bn: 'বাহ্যিক মেমোরি খণ্ডায়ন দূর করতে মেমোরিতে পাশাপাশি থাকা মুক্ত ব্লকগুলোকে একটি বড় অবিচ্ছিন্ন ব্লকে একত্রিত করা।'
          }
        },
        {
          term: 'intrusive-list',
          def: {
            en: 'A design pattern where list linkage pointers (next and prev) are embedded directly inside the host struct, eliminating wrapper allocations.',
            bn: 'এমন এক ডিজাইন প্যাটার্ন যেখানে নোডের সংযোগ পয়েন্টারগুলো মূল কাঠামোর ভেতরেই গ্রথিত থাকে, ফলে বাড়তি মেমোরি বরাদ্দ লাগে না।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'll'
    },
    {
      type: 'heading',
      id: 'coalescing-pipeline',
      text: {
        en: 'Fragmentation and Boundary-Tag Coalescing',
        bn: 'মেমোরি খণ্ডায়ন এবং বাউন্ডারি ট্যাগ কোলেসিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Repeated dynamic allocations and deallocations inevitably lead to external fragmentation: situations where total free memory is abundant, but split into tiny non-contiguous slivers that cannot satisfy a single large allocation. Allocators solve this using boundary tags—metadata footers at the end of each block that mirror the size and allocation status stored in the header.',
        bn: 'বারবার ডায়নামিক মেমোরি বরাদ্দ ও মুক্ত করার ফলে বাহ্যিক মেমোরি খণ্ডায়ন বা ফ্র্যাগমেন্টেশন ঘটে: এমন এক অবস্থা যেখানে পর্যাপ্ত মোট খালি মেমোরি থাকলেও তা ছোট ছোট টুকরোয় বিভক্ত থাকে এবং বড় অনুরোধ মেটাতে পারে না। অ্যালোকেটররা বাউন্ডারি ট্যাগ ব্যবহার করে এর সমাধান করে—প্রতিটি ব্লকের শেষে থাকা একটি ফুটার যা হেডারের সাইজ ও স্ট্যাটাস মেটাডাটা হুবহু ধারণ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When an application frees block P, the allocator inspects the boundary tag immediately preceding P to check if the left neighbor is free. Simultaneously, evaluating the subsequent header reveals whether the right physical parcel is idle. If either neighbor is unallocated, the allocator excises them from the free list and fuses them into one unified contiguous block in O(1) time.',
        bn: 'যখন কোনো অ্যাপ্লিকেশন একটি ব্লক P মুক্ত করে, তখন অ্যালোকেটর P এর ঠিক আগের বাউন্ডারি ট্যাগ দেখে বাঁদিকের প্রতিবেশী খালি কিনা পরীক্ষা করে। একইসাথে পরবর্তী হেডার মূল্যায়ন করে ডানদিকের মেমোরি খণ্ডটি অলস পড়ে আছে কিনা তা নিশ্চিত করা হয়। কোনো প্রতিবেশী খালি থাকলে অ্যালোকেটর তাকে ফ্রি লিস্ট থেকে সরিয়ে নিয়ে P এর সাথে যুক্ত করে O(1) সময়ে একটি বড় অবিচ্ছিন্ন ব্লকে পরিণত করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্য বৈশিষ্ট্য' },
        { en: 'Traditional Wrapped List', bn: 'সনাতন র‍্যাপার লিস্ট' },
        { en: 'Intrusive Kernel list_head', bn: 'ইন্ট্রুসিভ কার্নেল list_head' }
      ],
      rows: [
        [
          { en: 'Heap Allocations per Item', bn: 'উপাদানপ্রতি মেমোরি বরাদ্দ' },
          { en: '2 allocations (payload + node)', bn: '২ টি বরাদ্দ (পেলোড + নোড)' },
          { en: '1 allocation (payload hosts links)', bn: '১ টি বরাদ্দ (পেলোডই সংযোগ ধরে)' }
        ],
        [
          { en: 'Memory Wrapper Overhead', bn: 'অতিরিক্ত মেমোরি খরচ' },
          { en: 'High (wrapper pointers + alignment)', bn: 'বেশি (র‍্যাপার মেটাডাটা ও প্যাডিং)' },
          { en: 'Zero extra wrapper allocations', bn: 'কোনো বাড়তি র‍্যাপার বরাদ্দ নেই' }
        ],
        [
          { en: 'Simultaneous Multi-List Membership', bn: 'একাধিক লিস্টে একসাথে অন্তর্ভুক্তি' },
          { en: 'Complex (requires external maps)', bn: 'জটিল (বাহ্যিক ম্যাপ লাগে)' },
          { en: 'Native (embed multiple list_heads)', bn: 'সহজাত (একাধিক list_head গেঁথে)' }
        ],
        [
          { en: 'Host Struct Pointer Access', bn: 'মূল কাঠামোর ঠিকানা উদ্ধার' },
          { en: 'node.payload direct reference', bn: 'node.payload সরাসরি রেফারেন্স' },
          { en: 'container_of offset arithmetic', bn: 'container_of অফসেট পাটিগণিত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'allocator-simulation',
      text: {
        en: 'Executable Free List and Coalescing Simulation',
        bn: 'ফ্রি লিস্ট ও কোলেসিং বাস্তবায়ন সিমুলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates a free-list heap allocator with boundary coalescing. It allocates blocks p1, p2, and p3 from a 512 byte heap. Freeing the middle block p2 produces an isolated hole. Freeing p1 triggers immediate left-coalescing, expanding the free block to 224 bytes. Finally, freeing p3 recombines the entire heap into a single unified 512 byte free block.',
        bn: 'নিচের টাইপস্ক্রিপ্ট কোডটি বাউন্ডারি কোলেসিংসহ একটি ফ্রি-লিস্ট হিপ অ্যালোকেটরের কার্যক্রম প্রদর্শন করে। এটি ৫১২ বাইট মেমোরি থেকে p1, p2 এবং p3 বরাদ্দ করে। মাঝের ব্লক p2 মুক্ত করলে একটি বিচ্ছিন্ন ফাঁকা অংশ তৈরি হয়। p1 মুক্ত করার সাথে সাথে বাঁদিকের কোলেসিং ঘটে এবং ফ্রি ব্লকের আকার ২২৪ বাইটে বৃদ্ধি পায়। পরিশেষে p3 মুক্ত করলে পুরো হিপ আবার একক ৫১২ বাইটের বিশাল ব্লকে পরিণত হয়।'
      }
    },
    {
      type: 'code',
      code: `class Block {
  constructor(offset, size, isAllocated = false) {
    this.offset = offset;
    this.size = size; // Total size including 8-byte header
    this.isAllocated = isAllocated;
  }
}

class SimpleAllocator {
  constructor(totalMemory = 512) {
    this.totalMemory = totalMemory;
    // Initial single free block representing the entire heap
    this.blocks = [new Block(0, totalMemory, false)];
  }

  // Allocate payload bytes (adds 8-byte header, aligns to 16 bytes)
  malloc(payloadSize) {
    const totalNeeded = Math.ceil((payloadSize + 8) / 16) * 16;

    for (let i = 0; i < this.blocks.length; i++) {
      const b = this.blocks[i];
      if (!b.isAllocated && b.size >= totalNeeded) {
        if (b.size >= totalNeeded + 32) {
          // Split block: allocated part + remaining free part
          const remaining = new Block(b.offset + totalNeeded, b.size - totalNeeded, false);
          b.size = totalNeeded;
          b.isAllocated = true;
          this.blocks.splice(i + 1, 0, remaining);
        } else {
          b.isAllocated = true;
        }
        return b.offset + 8; // Return payload address past 8-byte header
      }
    }
    return null; // Out of memory
  }

  // Free block and coalesce immediately with physical neighbors
  free(payloadPtr) {
    const offset = payloadPtr - 8;
    const idx = this.blocks.findIndex(b => b.offset === offset);
    if (idx === -1) return false;

    this.blocks[idx].isAllocated = false;

    // Coalesce with right neighbor if free
    if (idx + 1 < this.blocks.length && !this.blocks[idx + 1].isAllocated) {
      this.blocks[idx].size += this.blocks[idx + 1].size;
      this.blocks.splice(idx + 1, 1);
    }

    // Coalesce with left neighbor if free
    if (idx - 1 >= 0 && !this.blocks[idx - 1].isAllocated) {
      this.blocks[idx - 1].size += this.blocks[idx].size;
      this.blocks.splice(idx, 1);
    }

    return true;
  }

  getFreeList() {
    return this.blocks
      .filter(b => !b.isAllocated)
      .map(b => \`[offset:\${b.offset}, size:\${b.size}]\`)
      .join(' -> ');
  }
}

const alloc = new SimpleAllocator(512);

console.log('Initial free block:', alloc.getFreeList());
// Output: Initial free block: [offset:0, size:512]

const p1 = alloc.malloc(64);
const p2 = alloc.malloc(128);
const p3 = alloc.malloc(64);

console.log('Allocated 3 blocks. Free list:', alloc.getFreeList());
// Output: Allocated 3 blocks. Free list: [offset:304, size:208]

alloc.free(p2);
console.log('After free(p2):', alloc.getFreeList());
// Output: After free(p2): [offset:80, size:144] -> [offset:304, size:208]

alloc.free(p1);
console.log('After free(p1) (coalesced left):', alloc.getFreeList());
// Output: After free(p1) (coalesced left): [offset:0, size:224] -> [offset:304, size:208]

alloc.free(p3);
console.log('After free(p3) (full heap coalesced):', alloc.getFreeList());
// Output: After free(p3) (full heap coalesced): [offset:0, size:512]`
    },
    {
      type: 'heading',
      id: 'intrusive-kernel-pattern',
      text: {
        en: 'Linux Kernel list_head and the container_of Macro',
        bn: 'লিনাক্স কার্নেল list_head এবং container_of ম্যাক্রো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In operating system kernels, allocating extra wrapper nodes on the heap is unacceptable due to fragmentation risks and interrupt latency. Instead, Linux uses intrusive lists via struct list_head, embedding next and prev pointers directly within process descriptors like task_struct. Because the list node lives inside the data object, a single process struct can belong to both a scheduler runqueue and a thread group list simultaneously.',
        bn: 'অপারেটিং সিস্টেম কার্নেলে মেমোরি ফ্র্যাগমেন্টেশন ও ইন্টারাপ্ট ল্যাটেন্সির ঝুঁকির কারণে বাড়তি র‍্যাপার নোড বরাদ্দ করা সম্পূর্ণ নিষিদ্ধ। এর বদলে লিনাক্স struct list_head এর মাধ্যমে ইন্ট্রুসিভ লিস্ট ব্যবহার করে, যেখানে task_struct এর মতো প্রসেস বর্ণনাকারীর ভেতরেই next ও prev পয়েন্টার গেঁথে দেওয়া হয়। যেহেতু লিস্ট নোড ডাটা অবজেক্টের ভেতরেই থাকে, তাই একটি মাত্র প্রসেস একই সাথে সিপিইউ রান-কিউ এবং থ্রেড গ্রুপ তালিকার সদস্য হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To recover the parent struct pointer from an embedded list_head pointer, Linux developers use the container_of macro. By applying offsetof at compile-time to compute the exact byte offset of the embedded member, the macro subtracts that byte offset from the member pointer address. This yields the base memory address of the enclosing host struct in strictly 0 instructions of runtime overhead beyond a single pointer subtraction.',
        bn: 'একটি এমবেডেড list_head পয়েন্টার থেকে মূল কাঠামোর পয়েন্টার খুঁজে পেতে লিনাক্স ডেভেলপাররা container_of ম্যাক্রো ব্যবহার করেন। কম্পাইল-টাইমে offsetof ব্যবহারের মাধ্যমে মূল কাঠামোতে সদস্যের সুনির্দিষ্ট বাইট অফসেট হিসাব করা হয় এবং ম্যাক্রোটি সদস্যের মেমোরি ঠিকানা থেকে সেই বাইট অফসেট বিয়োগ করে। এর ফলে মাত্র ১ টি পয়েন্টার বিয়োগের মাধ্যমে ০ রানটাইম খরচে মূল কাঠামোর মূল মেমোরি ঠিকানা উদ্ধার করা সম্ভব হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'In-place free lists: Heap allocators store linked list pointers inside freed payload memory, achieving zero allocation overhead.',
          bn: 'মুক্ত মেমোরিতে ফ্রি লিস্ট: হিপ অ্যালোকেটর মুক্ত পেলোড মেমোরির ভেতরেই পয়েন্টার রাখে, ফলে ০ মেমোরি অপচয় হয়।'
        },
        {
          en: 'Boundary coalescing: Boundary tags enable O(1) checks of adjacent neighbors, merging contiguous free parcels to eliminate external fragmentation.',
          bn: 'বাউন্ডারি কোলেসিং: বাউন্ডারি ট্যাগ O(1) সময়ে প্রতিবেশী মেমোরি পরীক্ষা করে পাশাপাশি থাকা মুক্ত ব্লক যুক্ত করে ফ্র্যাগমেন্টেশন দূর করে।'
        },
        {
          en: 'Intrusive list architecture: Embedding list_head inside structs eliminates wrapper objects and supports multi-list membership.',
          bn: 'ইন্ট্রুসিভ লিস্ট স্থাপত্য: কাঠামোর ভেতরে list_head গেঁথে দিলে র‍্যাপার অবজেক্ট দূর হয় এবং একই সাথে একাধিক তালিকায় অংশ নেওয়া যায়।'
        },
        {
          en: 'Zero-overhead conversion: The container_of macro recovers the parent object address using compile-time offsetof pointer subtraction.',
          bn: 'জিরো-ওভারহেড রূপান্তর: container_of ম্যাক্রো কম্পাইল-টাইম offsetof বিয়োগের মাধ্যমে ০ রানটাইম খরচে মূল অবজেক্টের ঠিকানা উদ্ধার করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'md-ex1',
      kind: 'mcq',
      topic: 'freed-payload-pointers',
      question: {
        en: 'Where does a memory allocator store the next and prev pointers of a free list node?',
        bn: 'মেমোরি অ্যালোকেটর একটি ফ্রি লিস্ট নোডের next ও prev পয়েন্টার কোথায় সংরক্ষণ করে?'
      },
      options: [
        {
          en: 'Inside the first 16 bytes of the unallocated payload area of the freed block itself',
          bn: 'মুক্ত মেমোরি ব্লকের অব্যবহৃত পেলোড এলাকার প্রথম ১৬ বাইটের ভেতরে'
        },
        {
          en: 'Inside a fixed array allocated statically in the operating system bootloader',
          bn: 'অপারেটিং সিস্টেম বুটলোডারে স্ট্যাটিকালি তৈরি একটি নির্দিষ্ট অ্যারের ভেতরে'
        },
        {
          en: 'On the CPU L1 instruction cache lines using dedicated hardware registers',
          bn: 'সিপিইউ এল১ ইন্সট্রাকশন ক্যাশে ডেডিকেটেড হার্ডওয়্যার রেজিস্টার ব্যবহার করে'
        },
        {
          en: 'Inside a separate relational database table stored on the hard disk',
          bn: 'হার্ড ডিস্কে সংরক্ষিত একটি পৃথক রিলেশনাল ডেটাবেজ টেবিলের ভেতরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'When a block is free, the user application is not using its payload bytes.',
        bn: 'যখন কোনো ব্লক খালি থাকে, তখন ব্যবহারকারী প্রোগ্রাম তার পেলোড বাইটগুলো ব্যবহার করে না।'
      },
      explanation: {
        en: 'Because freed memory is idle, the allocator reuses that space to store doubly linked list pointers, requiring 0 extra heap allocation overhead.',
        bn: 'যেহেতু মুক্ত মেমোরি অলস পড়ে থাকে, তাই অ্যালোকেটর সেই স্থানেই ডাবলি লিঙ্কড লিস্টের পয়েন্টার লেখে, ফলে ০ অতিরিক্ত মেমোরি অপচয় হয়।'
      }
    },
    {
      id: 'md-ex2',
      kind: 'mcq',
      topic: 'boundary-coalescing',
      question: {
        en: 'What primary problem does boundary-tag block coalescing solve in memory management?',
        bn: 'মেমোরি ব্যবস্থাপনায় বাউন্ডারি ট্যাগ ব্লক কোলেসিং প্রধানত কোন সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'External fragmentation, by fusing adjacent free blocks into a single large continuous block',
          bn: 'বাহ্যিক মেমোরি খণ্ডায়ন, সংলগ্ন খালি ব্লকগুলোকে যুক্ত করে একটি বড় অবিচ্ছিন্ন ব্লক বানিয়ে'
        },
        {
          en: 'Compiling 32-bit machine code instructions into 64-bit binaries',
          bn: '৩২-বিট মেশিন কোড নির্দেশকে ৬৪-বিট বাইনারিতে রূপান্তর করা'
        },
        {
          en: 'CPU thermal overheating caused by rapid cache line cycling',
          bn: 'দ্রুত ক্যাশ লাইন সাইক্লিংয়ের কারণে সিপিইউ অতিরিক্ত গরম হয়ে যাওয়া'
        },
        {
          en: 'Preventing stack overflow exceptions during deep recursive function calls',
          bn: 'গভীর রিকার্সিভ ফাংশন কলের সময় স্ট্যাক ওভারফ্লো ত্রুটি প্রতিরোধ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when memory is fragmented into many tiny unusable gaps.',
        bn: 'মেমোরি যখন অনেকগুলো ছোট ছোট অব্যবহারযোগ্য অংশে বিভক্ত হয়ে পড়ে তখন কী ঘটে তা ভাবুন।'
      },
      explanation: {
        en: 'Coalescing immediately merges newly freed blocks with adjacent free neighbors in O(1) time, recombining small fragments into larger allocatable blocks.',
        bn: 'কোলেসিং তাৎক্ষণিকভাবে সদ্য মুক্ত হওয়া ব্লককে তার প্রতিবেশী মুক্ত ব্লকের সাথে O(1) সময়ে যুক্ত করে বড় বরাদ্দযোগ্য মেমোরি তৈরি করে।'
      }
    },
    {
      id: 'md-ex3',
      kind: 'mcq',
      topic: 'intrusive-benefits',
      question: {
        en: 'Why does the Linux kernel implement intrusive lists (struct list_head) instead of traditional wrapped linked lists?',
        bn: 'লিনাক্স কার্নেল কেন সনাতন র‍্যাপার লিঙ্কড লিস্টের বদলে ইন্ট্রুসিভ লিস্ট (struct list_head) ব্যবহার করে?'
      },
      options: [
        {
          en: 'To eliminate dynamic wrapper allocations and allow a single struct to belong to multiple lists simultaneously',
          bn: 'বাড়তি র‍্যাপার বরাদ্দ দূর করতে এবং একটি কাঠামোকে একসাথে একাধিক লিস্টের সদস্য হওয়ার সুবিধা দিতে'
        },
        {
          en: 'Because intrusive lists run exclusively inside graphics processing units (GPUs)',
          bn: 'কারণ ইন্ট্রুসিভ লিস্ট কেবল গ্রাফিক্স প্রসেসিং ইউনিটে (জিপিইউ) চলতে পারে'
        },
        {
          en: 'To force all kernel data structures to be sorted alphabetically at boot time',
          bn: 'বুট হওয়ার সময় কার্নেলের সমস্ত ডাটা কাঠামোকে বর্ণানুক্রমিকভাবে সাজাতে বাধ্য করতে'
        },
        {
          en: 'Because C compilers cannot compile structs that contain pointer fields',
          bn: 'কারণ সি কম্পাইলার পয়েন্টার ফিল্ড থাকা কাঠামো কম্পাইল করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider the cost of allocating a wrapper node inside an operating system interrupt handler.',
        bn: 'অপারেটিং সিস্টেমের ইন্টারাপ্ট হ্যান্ডলারে একটি র‍্যাপার নোড তৈরির মেমোরি খরচের কথা ভাবুন।'
      },
      explanation: {
        en: 'Embedding list_head directly inside structs avoids wrapper memory allocations entirely and allows a single object to participate in multiple lists with zero extra overhead.',
        bn: 'কাঠামোর ভেতরে সরাসরি list_head গেঁথে দিলে কোনো বাড়তি মেমোরি বরাদ্দ লাগে না এবং একটি অবজেক্ট ০ খরচে একাধিক তালিকায় অংশ নিতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'memory-diorama-quiz',
    title: {
      en: 'Memory Allocators and Intrusive Lists Quiz',
      bn: 'মেমোরি অ্যালোকেটর ও ইন্ট্রুসিভ লিস্ট কুইজ'
    },
    questions: [
      {
        id: 'md-q1',
        kind: 'mcq',
        topic: 'container-of-calculation',
        question: {
          en: 'How does the container_of macro retrieve the base address of a host struct from an embedded list_head pointer?',
          bn: 'container_of ম্যাক্রো কীভাবে একটি এমবেডেড list_head পয়েন্টার থেকে মূল কাঠামোর বেস মেমোরি ঠিকানা উদ্ধার করে?'
        },
        options: [
          {
            en: 'By subtracting the byte offset of the list_head member (computed by offsetof) from the member pointer address',
            bn: 'সদস্য পয়েন্টারের ঠিকানা থেকে list_head এর বাইট অফসেট (offsetof দ্বারা গণিত) বিয়োগ করে'
          },
          {
            en: 'By querying an external database running on localhost port 8080',
            bn: 'লোকালহোস্ট ৮০৮০ পোর্টে চলমান একটি বাহ্যিক ডেটাবেজে কুয়েরি পাঠিয়ে'
          },
          {
            en: 'By multiplying the pointer address by the total number of CPU registers',
            bn: 'পয়েন্টারের ঠিকানাকে মোট সিপিইউ রেজিস্টারের সংখ্যা দিয়ে গুণ করে'
          },
          {
            en: 'By converting the memory address string into a cryptographic hash',
            bn: 'মেমোরি ঠিকানা স্ট্রিংটিকে একটি ক্রিপ্টোগ্রাফিক হ্যাশে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pointer arithmetic: if the member sits 16 bytes into the struct, where is the struct start?',
          bn: 'পয়েন্টার পাটিগণিত: সদস্য যদি কাঠামোর ১৬ বাইট ভেতরে থাকে, তবে কাঠামোর শুরু কোথায়?'
        },
        explanation: {
          en: 'Because the layout of a C struct is fixed at compile-time, subtracting the member byte offset from its pointer returns the exact base address of the host struct.',
          bn: 'যেহেতু সি কাঠামোর গঠন কম্পাইল-টাইমেই নির্ধারিত থাকে, তাই সদস্যের ঠিকানা থেকে তার বাইট অফসেট বিয়োগ করলেই মূল কাঠামোর প্রারম্ভিক ঠিকানা পাওয়া যায়।'
        }
      },
      {
        id: 'md-q2',
        kind: 'mcq',
        topic: 'safe-linking-hardening',
        question: {
          en: 'What security feature in modern glibc mangles the next pointer of freed chunks to prevent heap exploitation?',
          bn: 'আধুনিক glibc-তে হিপ আক্রমণ ঠেকাতে মুক্ত ব্লকের next পয়েন্টারকে কোন নিরাপত্তা ফিচারটি এনকোড করে রাখে?'
        },
        options: [
          {
            en: 'Safe Linking: pointer obfuscation using (ptr >> 12) XORed with address-space layout randomization entropy',
            bn: 'সেফ লিঙ্কিং: (ptr >> ১২) এর সাথে অ্যাড্রেস-স্পেস লেআউট র্যান্ডমাইজেশন এনট্রপি এক্স-অর (XOR) করে পয়েন্টার রূপান্তর'
          },
          {
            en: 'Baudot Teleprinter encryption protocol over serial COM ports',
            bn: 'সিরিয়াল কম পোর্টে বডট টেলিপ্রিন্টার এনক্রিপশন প্রোটোকল'
          },
          {
            en: 'Automatic CPU overclocking to burn malicious memory packets',
            bn: 'ক্ষতিকর মেমোরি প্যাকেট পুড়িয়ে ফেলতে স্বয়ংক্রিয় সিপিইউ ওভারক্লকিং'
          },
          {
            en: 'Formatting the physical hard drive whenever free is called twice',
            bn: 'দুবার free কল করা হলে ফিজিক্যাল হার্ডড্রাইভ ফরম্যাট করে ফেলা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern allocators protect the fd pointer inside fastbins using bitwise operations.',
          bn: 'আধুনিক অ্যালোকেটররা বিটওয়াইজ অপারেশনের মাধ্যমে ফাস্টবিনের ভেতরের fd পয়েন্টার রক্ষা করে।'
        },
        explanation: {
          en: 'Safe Linking was introduced in glibc 2.32 to randomize and obfuscate single-linked free list pointers against heap buffer overflows.',
          bn: 'হিপ বাফার ওভারফ্লোর মাধ্যমে পয়েন্টার পরিবর্তন রোধ করতে glibc ২.৩২ সংস্করণে সেফ লিঙ্কিং চালু করা হয়।'
        }
      },
      {
        id: 'md-q3',
        kind: 'mcq',
        topic: 'internal-fragmentation',
        question: {
          en: 'What is the definition of internal memory fragmentation in a heap allocator?',
          bn: 'হিপ অ্যালোকেটরে ইন্টারনাল বা অভ্যন্তরীণ মেমোরি ফ্র্যাগমেন্টেশনের সংজ্ঞা কোনটি?'
        },
        options: [
          {
            en: 'Unused bytes left inside an allocated block due to alignment restrictions or minimum block sizing',
            bn: 'মেমোরি অ্যালাইনমেন্ট বা ন্যূনতম ব্লকের আকারের কারণে বরাদ্দকৃত ব্লকের ভেতরে অব্যবহৃত পড়ে থাকা স্থান'
          },
          {
            en: 'Complete failure of the motherboard memory controller chip',
            bn: 'মাদারবোর্ড মেমোরি কন্ট্রোলার চিপের সম্পূর্ণ ব্যর্থতা'
          },
          {
            en: 'Data bytes deleted by a background database vacuum daemon',
            bn: 'ব্যাকগ্রাউন্ড ডেটাবেজ ভ্যাকুয়াম ডেমন দ্বারা মুছে ফেলা ডাটা বাইট'
          },
          {
            en: 'A memory leak caused by unhandled Promise rejections in JavaScript',
            bn: 'জাভাস্ক্রিপ্টে অপূর্ণ প্রমিজ রিজেকশনের কারণে সৃষ্ট মেমোরি লিক'
          }
        ],
        answer: 0,
        hint: {
          en: 'If a program requests 21 bytes and the allocator assigns a 32 byte aligned chunk, what happens to the remaining 11 bytes?',
          bn: 'যদি কোনো প্রোগ্রাম ২১ বাইট চায় এবং অ্যালোকেটর তাকে ৩২ বাইটের ব্লক দেয়, তবে বাকি ১১ বাইটের কী হয়?'
        },
        explanation: {
          en: 'Internal fragmentation occurs when the allocated block is larger than the payload requested by the application, typically caused by 8-byte or 16-byte alignment.',
          bn: 'অভ্যন্তরীণ ফ্র্যাগমেন্টেশন ঘটে যখন বরাদ্দকৃত ব্লক ব্যবহারকারীর চাওয়া পেলোডের চেয়ে বড় হয়, যা সাধারণত ৮ বা ১৬ বাইট অ্যালাইনমেন্টের জন্য ঘটে।'
        }
      },
      {
        id: 'md-q4',
        kind: 'mcq',
        topic: 'arena-allocators',
        question: {
          en: 'Why do high-performance game engines and compilers frequently employ Arena (bump) allocators for transient objects?',
          bn: 'উচ্চগতির গেম ইঞ্জিন এবং কম্পাইলার কেন ক্ষণস্থায়ী অবজেক্টের জন্য প্রায়ই অ্যারিনা বা বাম্প অ্যালোকেটর ব্যবহার করে?'
        },
        options: [
          {
            en: 'Allocations execute in O(1) time by bumping an offset pointer, and the entire arena is deallocated at once with zero per-object overhead',
            bn: 'একটি অফসেট পয়েন্টার বাড়িয়ে O(1) সময়ে বরাদ্দ সম্পন্ন হয় এবং অবজেক্টপ্রতি কোনো খরচ ছাড়াই পুরো অ্যারিনা একসাথে মুক্ত করা যায়'
          },
          {
            en: 'Arena allocators compress data using lossy JPEG image encoding',
            bn: 'অ্যারিনা অ্যালোকেটর জেপিইজি ইমেজ এনকোডিং দিয়ে ডাটা সংকুচিত করে'
          },
          {
            en: 'Bump allocators eliminate the need for electrical power in server racks',
            bn: 'বাম্প অ্যালোকেটর সার্ভার র্যাকে বৈদ্যুতিক শক্তির প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'Arena allocators automatically translate x86 assembly to ARM64 code',
            bn: 'অ্যারিনা অ্যালোকেটর স্বয়ংক্রিয়ভাবে x86 অ্যাসেম্বলি কোডকে ARM64 কোডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider releasing thousands of objects in a single frame by resetting an offset to 0.',
          bn: 'একটি অফসেটকে ০ করে দিয়ে এক ফ্রেমেই হাজার হাজার অবজেক্ট একসাথে মুছে ফেলার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'Arena allocators allocate sequentially with near-zero latency and free all allocated memory in one single operation, eliminating free-list tracking overhead.',
          bn: 'অ্যারিনা অ্যালোকেটর অতি দ্রুত ক্রমিক বরাদ্দ দেয় এবং একটি মাত্র অপারেশনে পুরো মেমোরি ফাঁকা করে দেয়, ফলে ফ্রি লিস্টের জটিলতা থাকে না।'
        }
      }
    ]
  }
};
