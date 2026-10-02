import type { Lesson } from '../../../lib/types';

export const StructsAndTheUnionLesson: Lesson = {
  slug: 'structs-and-the-union',
  tech: 'c',
  title: {
    en: 'Structs, Unions & Memory Alignment — Hardware Packing and Padding',
    bn: 'স্ট্রাক্ট, ইউনিয়ন ও মেমোরি অ্যালাইনমেন্ট — হার্ডওয়্যার প্যাকিং ও প্যাডিং'
  },
  summary: {
    en: 'In C systems programming, structs enable developers to construct cohesive, heterogeneous composite types by bundling diverse primitive fields into contiguous memory blocks. Accessing fields occurs via the dot operator (.) for direct instances or the arrow operator (->) when dereferencing pointers. However, physical memory architecture demands that data types align to memory addresses divisible by their natural byte widths (e.g. 4-byte integers at 4-byte boundaries). To prevent slow unaligned CPU reads or hardware bus faults, compilers automatically insert invisible structure padding bytes between fields. Learning how to order struct fields from largest to smallest eliminates wasted padding space, while unions offer shared memory overlaps where multiple data views occupy the same memory footprint.',
    bn: 'সি সিস্টেম প্রোগ্রামিংয়ে স্ট্রাক্ট ডেভেলপারদের বিভিন্ন প্রিমিটিভ ডেটা ফিল্ডকে একটি অবিচ্ছিন্ন মেমোরি ব্লকে একত্রিত করে বৈচিত্র্যময় কম্পোজিট টাইপ তৈরি করতে সাহায্য করে। সরাসরি ইনস্ট্যান্সের ক্ষেত্রে ডট অপারেটর (.) এবং পয়েন্টার ডি-রেফারেন্সের ক্ষেত্রে অ্যারো অপারেটর (->) দিয়ে ফিল্ড অ্যাক্সেস করা হয়। তবে ফিজিক্যাল মেমোরি আর্কিটেকচারের নিয়মানুযায়ী প্রতিটি ডেটা টাইপকে তার নিজস্ব স্বাভাবিক বাইট আকারের গুণিতক অ্যাড্রেসে অ্যালাইন হতে হয় (যেমন ৪-বাইটের ইন্টিজারকে ৪-এর গুণিতক ঠিকানায় থাকতে হয়)। সিপিইউর ধীরগতির আনঅ্যালাইন্ড রিড বা বাস এরর প্রতিরোধে কম্পাইলার ফিল্ডগুলোর মাঝে অলক্ষ্যে প্যাডিং বাইট যোগ করে। স্ট্রাক্টের ফিল্ডগুলোকে বড় থেকে ছোট আকারে সাজিয়ে প্যাডিং অপচয় দূর করা যায়, অন্যদিকে ইউনিয়ন একই মেমোরি স্পেস ভাগাভাগি করে বিভিন্ন ডেটা ভিউ ধারণ করার সুবিধা দেয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Composite Data Types and Hardware Alignment',
        bn: 'মূল ধারণা: কম্পোজিট ডেটা টাইপ ও হার্ডওয়্যার অ্যালাইনমেন্ট'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you design complex data representations in C, structs and unions allow you to aggregate diverse data types into unified memory structures. While arrays organize identical types sequentially, a struct binds heterogeneous variables under a single custom type. Because modern central processing units (CPUs) fetch data across aligned memory words, C compilers silently inject invisible padding bytes between struct fields to satisfy hardware alignment restrictions.',
        bn: 'সি প্রোগ্রামিংয়ে যখন আপনি জটিল ডেটা তৈরি করতে চান, তখন স্ট্রাক্ট (struct) এবং ইউনিয়ন (union) বিভিন্ন ধরনের ডেটা টাইপকে একটি একক মেমোরি কাঠামোয় একত্রিত করতে সাহায্য করে। অ্যারে যেখানে কেবল একই ধরনের ডেটা পরপর সাজায়, স্ট্রাক্ট সেখানে ভিন্ন ভিন্ন ডেটা টাইপকে একটি কাস্টম টাইপের অধীনে আবদ্ধ করে। আধুনিক সেন্ট্রাল প্রসেসিং ইউনিট (CPU) মেমোরি ওয়ার্ডের সাথে মিল রেখে দ্রুত ডেটা পড়ে বলে কম্পাইলার হার্ডওয়্যার মেমোরি অ্যালাইনমেন্টের স্বার্থে স্ট্রাক্ট ফিল্ডগুলোর মাঝে অলক্ষ্যে ফাঁকা প্যাডিং বাইট যুক্ত করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Struct',
          def: {
            en: 'A composite record type grouping multiple heterogeneous member fields sequentially within a single contiguous memory block',
            bn: 'একটি কম্পোজিট রেকর্ড টাইপ যা একাধিক ভিন্নধর্মী ডেটা ফিল্ডকে একটি অবিচ্ছিন্ন মেমোরি ব্লকে পরপর সাজিয়ে রাখে'
          }
        },
        {
          term: 'Structure Padding',
          def: {
            en: 'Unused bytes automatically inserted by the compiler between struct fields to ensure CPU word boundary alignment',
            bn: 'সিপিইউ ওয়ার্ড বাউন্ডারি বজায় রাখার জন্য কম্পাইলার কর্তৃক স্ট্রাক্ট ফিল্ডের মাঝে স্বয়ংক্রিয়ভাবে যোগ করা অব্যবহৃত ফাঁকা বাইট'
          }
        },
        {
          term: 'Union',
          def: {
            en: 'A user-defined type where all member fields share the exact same starting memory address (offset 0), holding one value at a time',
            bn: 'এমন একটি ডেটা টাইপ যার সমস্ত ফিল্ড হুবহু একই শুরুর মেমোরি অ্যাড্রেস (অফসেট ০) ভাগাভাগি করে এবং একবারে কেবল একটি মান ধরে রাখতে পারে'
          }
        },
        {
          term: 'Arrow Operator (->)',
          def: {
            en: 'Syntactic sugar for dereferencing a struct pointer before accessing a member field (ptr->field is equivalent to (*ptr).field)',
            bn: 'পয়েন্টার থেকে সরাসরি স্ট্রাক্ট ফিল্ডে প্রবেশের সংক্ষিপ্ত রূপ (ptr->field মূলত (*ptr).field-এর সমান)'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'padding-mechanics',
      text: {
        en: 'The Alignment Trap: Why Struct Sizes Exceed Field Sums',
        bn: 'অ্যালাইনমেন্টের ফাঁদ: স্ট্রাক্টের সাইজ কেন ফিল্ডগুলোর যোগফলের চেয়ে বড় হয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider an unoptimized struct declared with three fields: char a (1 byte), int b (4 bytes), and char c (1 byte). Intuition suggests this struct should occupy 6 bytes of memory (1 + 4 + 1). Yet executing sizeof on a modern 64-bit platform reveals it consumes 12 bytes.',
        bn: 'তিনটি ফিল্ড সহ একটি স্ট্রাক্টের কথা ভাবুন: char a (১ বাইট), int b (৪ বাইট) এবং char c (১ বাইট)। সাধারণ দৃষ্টিতে মনে হতে পারে স্ট্রাক্টটি ৬ বাইট (১ + ৪ + ১) জায়গা নেবে। কিন্তু আধুনিক ৬৪-বিট সিস্টেমে sizeof চালালে দেখা যায় এটি পুরো ১২ বাইট জায়গা দখল করছে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The CPU requires 4-byte integers to align to memory addresses divisible by 4. After char a at offset 0, the compiler injects 3 unused padding bytes so int b begins safely at offset 4. After char c at offset 8, 3 trailing padding bytes are added to round the entire struct up to a multiple of its 4-byte maximum alignment requirement, wasting 6 bytes in total.',
        bn: 'সিপিইউর নিয়মানুযায়ী ৪-বাইটের ইন্টিজারকে সর্বদা ৪-এর গুণিতক ঠিকানায় থাকতে হয়। তাই অফসেট ০-এ char a বসার পর কম্পাইলার ৩টি প্যাডিং বাইট যোগ করে যাতে int b নিরাপদে অফসেট ৪ থেকে শুরু হতে পারে। এরপর অফসেট ৮-এ char c বসার পর শেষে আরও ৩টি ট্রেইলিং প্যাডিং বাইট যোগ করে পুরো স্ট্রাক্টকে ৪-এর গুণিতক (১২ বাইট) করা হয়, যার ফলে মোট ৬ বাইট নষ্ট হয়।'
      }
    },
    {
      type: 'heading',
      id: 'struct-reordering',
      text: {
        en: 'Reordering Optimization: Saving Millions of Bytes',
        bn: 'রিঅর্ডারিং অপ্টিমাইজেশন: মেমোরির অপচয় রোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Reordering fields from largest to smallest eliminates alignment gaps. Placing int b first requires 4 bytes at offset 0. Then, char a sits at offset 4, while char c follows at offset 5. Only 2 trailing padding units are required to satisfy the 4-byte boundary requirement. The entire struct shrinks from 12 down to 8 bytes, saving 4 bytes per instance.',
        bn: 'ফিল্ডগুলোকে বড় থেকে ছোট ক্রমে সাজালে মেমোরির ফাঁকা স্থানগুলো দূর হয়। প্রথমে int b রাখলে অফসেট ০-এ ৪ বাইট জায়গা নেয়। এরপর অফসেট ৪-এ char a এবং অফসেট ৫-এ char c অবস্থান করে। ফলে ৪-বাইটের বাউন্ডারি মেলাতে শেষে কেবল ২টি ট্রেইলিং প্যাডিং দিতে হয়। এতে পুরো স্ট্রাক্টটি ১২ থেকে কমে মাত্র ৮ বাইটে নেমে আসে, যার ফলে প্রতি ইনস্ট্যান্সে ৪ বাইট সাশ্রয় হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When maintaining an array of one million struct elements in high-frequency trading or embedded telemetry, this simple reordering saves 4 megabytes of contiguous cache memory and drastically slashes CPU cache misses.',
        bn: 'ট্রেডিং ইঞ্জিন বা এমবেডেড সিস্টেমে যখন দশ লাখ স্ট্রাক্টের একটি অ্যারে পরিচালনা করা হয়, তখন এই সামান্য ফিল্ড রদবদল ৪ মেগাবাইট ক্যাশ মেমোরি বাঁচায় এবং সিপিইউ ক্যাশ মিসের সংখ্যা ব্যাপকভাবে কমিয়ে আনে।'
      }
    },
    {
      type: 'heading',
      id: 'union-mechanics',
      text: {
        en: 'Unions: Overlapping Fields in Shared Memory',
        bn: 'ইউনিয়ন: শেয়ার্ড মেমোরিতে ফিল্ডের ওভারল্যাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While a struct allocates distinct non-overlapping memory regions for each field, a union allocates a single memory region shared by all its members. The sizeof a union is simply the size of its largest member. A union with a char, an int, and a double occupies 8 bytes (the size of double).',
        bn: 'স্ট্রাক্ট যেখানে প্রতিটি ফিল্ডের জন্য আলাদা ও স্বাধীন মেমোরি বরাদ্দ করে, ইউনিয়ন সেখানে একটি একক মেমোরি এলাকা সমস্ত ফিল্ডের মাঝে ভাগাভাগি করে। ইউনিয়নের সাইজ সর্বদা তার সবচেয়ে বড় ফিল্ডের আকারের সমান হয়। char, int এবং double সমন্বিত একটি ইউনিয়নের মোট সাইজ হয় ৮ বাইট (double-এর মাপ)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Only one member can be actively stored at any given time. Assigning to one member overwrites the raw bytes of all other members. Combining an enum tag with a union inside a parent struct forms a "Tagged Union", providing type-safe polymorphic data handling in C.',
        bn: 'যেকোনো নির্দিষ্ট মুহূর্তে কেবল একটি সদস্য সক্রিয় থাকতে পারে। কোনো এক সদস্যে নতুন মান লিখলে তা অন্য সদস্যদের র\' বাইটগুলোকে প্রতিস্থাপন করে দেয়। মূল স্ট্রাক্টের ভেতরে একটি enum ট্যাগ ও ইউনিয়নের সংমিশ্রণে তৈরি হয় "ট্যাগড ইউনিয়ন", যা সি-তে টাইপ-নিরাপদ পলিমরফিক ডেটা ব্যবস্থাপনার সুযোগ তৈরি করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Struct vs Union vs Tagged Union',
        bn: 'কাঠামোগত তুলনা: স্ট্রাক্ট বনাম ইউনিয়ন বনাম ট্যাগড ইউনিয়ন'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Type Paradigm', bn: 'টাইপ পদ্ধতি' },
        { en: 'Memory Footprint', bn: 'মেমোরি আকার' },
        { en: 'Concurrent Members', bn: 'একসাথে সক্রিয় ফিল্ড' },
        { en: 'Primary Architecture Role', bn: 'প্রধান আর্কিটেকচারাল ভূমিকা' }
      ],
      rows: [
        [
          { en: 'Plain Struct', bn: 'সাধারণ স্ট্রাক্ট' },
          { en: 'Sum of member byte sizes plus alignment padding', bn: 'সদস্যদের বাইট যোগফল এবং অতিরিক্ত অ্যালাইনমেন্ট প্যাডিং' },
          { en: 'All member fields are preserved simultaneously', bn: 'সমস্ত ফিল্ড একসাথে নিজস্ব মান ধরে রাখে' },
          { en: 'Entities, records, coordinates, configuration objects', bn: 'এনটিটি, রেকর্ড, স্থানাঙ্ক ও কনফিগারেশন অবজেক্ট' }
        ],
        [
          { en: 'Plain Union', bn: 'সাধারণ ইউনিয়ন' },
          { en: 'Size of largest member plus trailing padding', bn: 'সর্বোচ্চ সাইজের সদস্যের মাপ এবং ট্রেইলিং প্যাডিং' },
          { en: 'Exactly one active member; writes overwrite peers', bn: 'যেকোনো একটি সক্রিয় ফিল্ড; নতুন লিখলে আগের মান মুছে যায়' },
          { en: 'Low-level hardware registers, binary protocol decoders', bn: 'লো-লেভেল হার্ডওয়্যার রেজিস্টার ও বাইনারি প্রটোকল ডিকোডার' }
        ],
        [
          { en: 'Tagged (Discriminated) Union', bn: 'ট্যাগড ইউনিয়ন' },
          { en: 'Size of enum tag + padding + largest union member', bn: 'enum ট্যাগ + প্যাডিং + বৃহত্তম ইউনিয়ন সদস্যের সাইজ' },
          { en: 'One active member determined safely by runtime enum tag', bn: 'রানটাইম enum ট্যাগ দ্বারা নিশ্চিত করা একটি সক্রিয় ফিল্ড' },
          { en: 'Abstract syntax trees (ASTs), JSON tokenizers, event payloads', bn: 'অ্যাবস্ট্রাক্ট সিনট্যাক্স ট্রি (AST), জেএসন টোকেনাইজার ও ইভেন্ট পেলোড' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Padding, Alignment & Memory Waste',
        bn: 'বাস্তব কোড সিমুলেশন: প্যাডিং, অ্যালাইনমেন্ট ও মেমোরির অপচয়'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Struct Padding, Alignment & Union Memory in Node.js

class StructLayoutSimulator {
  static computeUnoptimizedLayout() {
    // struct Unoptimized { char a; int b; char c; };
    // char a: 1 byte at offset 0
    // padding: 3 bytes (offsets 1, 2, 3) to align int to multiple of 4
    // int b: 4 bytes at offset 4
    // char c: 1 byte at offset 8
    // trailing padding: 3 bytes (offsets 9, 10, 11) to align struct to max alignment (4)
    const totalBytes = 12;
    const paddingBytes = 6;
    return { totalBytes, paddingBytes };
  }

  static computeOptimizedLayout() {
    // struct Optimized { int b; char a; char c; };
    // int b: 4 bytes at offset 0
    // char a: 1 byte at offset 4
    // char c: 1 byte at offset 5
    // trailing padding: 2 bytes (offsets 6, 7) to align struct to max alignment (4)
    const totalBytes = 8;
    const paddingBytes = 2;
    return { totalBytes, paddingBytes };
  }

  static computeUnionSize() {
    // union Data { char c; int i; double d; };
    // size is max(sizeof(char), sizeof(int), sizeof(double)) = max(1, 4, 8) = 8
    return 8;
  }
}

const unoptimized = StructLayoutSimulator.computeUnoptimizedLayout();
const optimized = StructLayoutSimulator.computeOptimizedLayout();
const bytesSaved = unoptimized.totalBytes - optimized.totalBytes;
const unionSize = StructLayoutSimulator.computeUnionSize();

console.log('Unoptimized struct size in bytes with alignment padding:', unoptimized.totalBytes);
// -> Unoptimized struct size in bytes with alignment padding: 12
console.log('Optimized struct size in bytes after reordering fields:', optimized.totalBytes);
// -> Optimized struct size in bytes after reordering fields: 8
console.log('Total padding bytes saved per struct instance:', bytesSaved);
// -> Total padding bytes saved per struct instance: 4
console.log('Size of union containing char, int, and double in bytes:', unionSize);
// -> Size of union containing char, int, and double in bytes: 8`,
      caption: {
        en: 'Simulation: unoptimized struct consumes 12 bytes; reordering fields shrinks it to 8 bytes, saving 4 bytes; union occupies 8 bytes',
        bn: 'সিমুলেশন: অপ্টিমাইজ না করা স্ট্রাক্ট ১২ বাইট নেয়; ফিল্ড সাজালে ৮ বাইটে নেমে ৪ বাইট বাঁচে; ইউনিয়নের সাইজ ৮ বাইট'
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
        en: 'Rule 1: Order struct fields from largest alignment to smallest. Placing 8-byte pointers and doubles first, then 4-byte integers, then 1-byte chars eliminates unnecessary interior alignment padding.',
        bn: 'নিয়ম ১: স্ট্রাক্ট ফিল্ডগুলোকে সর্বদা বড় অ্যালাইনমেন্ট থেকে ছোট সাজান। ৮-বাইটের পয়েন্টার বা double আগে রেখে তারপর ৪-বাইটের int ও ১-বাইটের char রাখলে ভেতরের অপ্রয়োজনীয় প্যাডিং দূর হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Pass large structs by pointer to avoid expensive stack copying. Passing struct instances larger than 16 bytes by value causes full frame memory copies; pass const Type *ptr instead.',
        bn: 'নিয়ম ২: বড় স্ট্রাক্টকে পয়েন্টার দিয়ে পাস করুন যাতে স্ট্যাকে অপ্রয়োজনীয় কপি না হয়। ১৬ বাইটের বেশি বড় স্ট্রাক্টকে মান আকারে পাঠালে পুরো মেমোরি কপি হয়; তাই const Type *ptr ব্যবহার করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Always pair unions with an explicit discriminator enum. Never access raw union fields without verifying the active variant tag to prevent undefined behavior and invalid type puns.',
        bn: 'নিয়ম ৩: ইউনিয়নের সাথে সর্বদা একটি স্পষ্ট enum ট্যাগ ব্যবহার করুন। ট্যাগ পরীক্ষা না করে সরাসরি ইউনিয়নের ফিল্ড পড়লে টাইপ এরর ও অনির্ধারিত আচরণ হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Zero-initialize structs before use. Initializing structs via {0} or memset prevents garbage data in unwritten padding bytes from leaking across network sockets or disk writes.',
        bn: 'নিয়ম ৪: ব্যবহারের আগে স্ট্রাক্টকে জিরো দিয়ে ইনিশিয়ালাইজ করুন। {0} বা memset দিয়ে ফাঁকা প্যাডিং বাইটগুলো মুছে রাখলে নেটওয়ার্ক বা ডিস্কে গার্বেজ ডেটা ছড়ানো রোধ হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-struct-ex1',
      kind: 'mcq',
      topic: 'Structure padding and memory alignment in C',
      question: {
        en: 'Why does a struct with fields { char a; int b; char c; } consume 12 bytes instead of 6 bytes on modern architectures?',
        bn: 'আধুনিক সিস্টেমে { char a; int b; char c; } ফিল্ড বিশিষ্ট একটি স্ট্রাক্ট ৬ বাইটের বদলে কেন ১২ বাইট মেমোরি দখল করে?'
      },
      options: [
        {
          en: 'The compiler inserts invisible padding bytes to ensure the 4-byte int aligns to a multiple-of-4 address, plus trailing padding to round the struct to a multiple of its maximum alignment',
          bn: 'কম্পাইলার ৪-বাইটের int-কে ৪-এর গুণিতক অ্যাড্রেসে রাখতে ফাঁকা প্যাডিং যোগ করে এবং শেষে ট্রেইলিং প্যাডিং দিয়ে পুরো স্ট্রাক্টকে সর্বোচ্চ অ্যালাইনমেন্টের গুণিতক করে'
        },
        {
          en: 'Because C doubles the size of every variable to protect against hard drive failures',
          bn: 'কারণ হার্ডড্রাইভের ব্যর্থতা রোধে সি প্রতিটি ভ্যারিয়েবলের সাইজ দ্বিগুণ করে দেয়'
        },
        {
          en: 'Because structs can only be allocated in sizes that end with the number 2',
          bn: 'কারণ স্ট্রাক্ট কেবল ২ দিয়ে শেষ হওয়া সাইজেই মেমোরিতে বরাদ্দ করা যায়'
        },
        {
          en: 'It is caused by computer virus infections inside the compiler binary',
          bn: 'এটি কম্পাইলারের ভেতরে কম্পিউটার ভাইরাসের আক্রমণের ফলে ঘটে থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'CPUs read memory in aligned multi-byte words.',
        bn: 'সিপিইউ স্বাভাবিক নিয়মে অ্যালাইন্ড মেমোরি ওয়ার্ড আকারে ডেটা পড়ে।'
      },
      explanation: {
        en: 'CPUs access memory efficiently at aligned boundaries. Padding bytes ensure each primitive begins at an offset divisible by its natural alignment.',
        bn: 'সিপিইউ সর্বদা অ্যালাইন্ড বাউন্ডারিতে দ্রুত ডেটা অ্যাক্সেস করে। প্যাডিং বাইট নিশ্চিত করে প্রতিটি ডেটা তার নিজস্ব স্বাভাবিক সাইজের গুণিতক অফসেটে অবস্থান করছে।'
      }
    },
    {
      id: 'c-struct-ex2',
      kind: 'mcq',
      topic: 'Arrow operator syntax and semantics',
      question: {
        en: 'What does the arrow operator expression ptr->age do in C?',
        bn: 'সি-তে ptr->age অ্যারো অপারেটর এক্সপ্রেশনটি মূলত কী কাজ করে?'
      },
      options: [
        {
          en: 'It dereferences the struct pointer ptr and accesses the age field, acting as clean syntactic sugar for (*ptr).age',
          bn: 'এটি স্ট্রাক্ট পয়েন্টার ptr-কে ডি-রেফারেন্স করে age ফিল্ডে প্রবেশ করে, যা মূলত (*ptr).age-এর পরিচ্ছন্ন রূপ'
        },
        {
          en: 'It sends an email to the user with their current age',
          bn: 'এটি ব্যবহারকারীর বর্তমান বয়স জানিয়ে একটি ইমেইল পাঠিয়ে দেয়'
        },
        {
          en: 'It deletes the age field from the computer RAM permanently',
          bn: 'এটি কম্পিউটারের র্যাম থেকে age ফিল্ডটি স্থায়ীভাবে মুছে ফেলে'
        },
        {
          en: 'It increments the age variable by 1 on every clock tick',
          bn: 'এটি প্রতি ক্লক টিকে age ভ্যারিয়েবলের মান ১ করে বৃদ্ধি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dereference first, then access field.',
        bn: 'প্রথমে পয়েন্টার ডি-রেফারেন্স করা হয়, তারপর সংশ্লিষ্ট ফিল্ডে যাওয়া হয়।'
      },
      explanation: {
        en: 'The arrow operator ptr->field is syntactic sugar for (*ptr).field, simplifying member access on pointers to structs.',
        bn: 'অ্যারো অপারেটর ptr->field হলো (*ptr).field-এর সংক্ষিপ্ত রূপ, যা পয়েন্টার থেকে ফিল্ডে অ্যাক্সেসকে সহজ করে।'
      }
    },
    {
      id: 'c-struct-ex3',
      kind: 'mcq',
      topic: 'The memory mechanics of C unions',
      question: {
        en: 'How does memory allocation for a union differ from a struct in C?',
        bn: 'সি-তে মেমোরি বরাদ্দের ক্ষেত্রে একটি ইউনিয়নের আচরণ স্ট্রাক্টের থেকে কীভাবে আলাদা?'
      },
      options: [
        {
          en: 'In a union, all member fields share the exact same starting memory address (offset 0), so its size equals only its largest member, whereas a struct allocates distinct consecutive space for each field',
          bn: 'ইউনিয়নে সমস্ত ফিল্ড একই শুরুর মেমোরি অ্যাড্রেস (অফসেট ০) ভাগ করে নেয়, ফলে এর সাইজ হয় কেবল তার বৃহত্তম ফিল্ডের সমান; আর স্ট্রাক্ট প্রতিটি ফিল্ডের জন্য আলাদা জায়গা বরাদ্দ করে'
        },
        {
          en: 'Unions store their data inside the monitor screen pixels rather than RAM',
          bn: 'ইউনিয়ন র্যামের বদলে মনিটর স্ক্রিনের পিক্সেলে ডেটা জমা রাখে'
        },
        {
          en: 'Unions cannot contain more than 1 field under any circumstance',
          bn: 'কোনো অবস্থাতেই ইউনিয়নে ১টির বেশি ফিল্ড রাখা সম্ভব নয়'
        },
        {
          en: 'Structs can only store numbers while unions can only store letters',
          bn: 'স্ট্রাক্ট কেবল সংখ্যা এবং ইউনিয়ন কেবল অক্ষর সংরক্ষণ করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Shared overlapping memory vs consecutive independent memory.',
        bn: 'একই মেমোরি ভাগাভাগি বনাম প্রতিটি ফিল্ডের জন্য আলাদা মেমোরি বরাদ্দ।'
      },
      explanation: {
        en: 'A union overlays all its members at the same memory location, consuming only as much space as the largest member.',
        bn: 'ইউনিয়ন তার সমস্ত সদস্যকে একই মেমোরি লোকেশনে ওভারল্যাপ করে রাখে, তাই এর আকার কেবল সবচেয়ে বড় সদস্যের সমান হয়।'
      }
    },
    {
      id: 'c-struct-ex4',
      kind: 'mcq',
      topic: 'Tagged unions for type-safe polymorphic data',
      question: {
        en: 'What is a "Tagged Union" (or Discriminated Union) in C systems architecture?',
        bn: 'সি সিস্টেম আর্কিটেকচারে একটি "ট্যাগড ইউনিয়ন" (বা ডিসক্রিমিনেটেড ইউনিয়ন) বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'A pattern combining an enum tag with a union inside a parent struct to safely indicate which union variant is currently held in memory',
          bn: 'একটি ডিজাইন প্যাটার্ন যা প্যারেন্ট স্ট্রাক্টের ভেতর enum ট্যাগ ও ইউনিয়নের সমন্বয় ঘটিয়ে মেমোরিতে কোন ভ্যারিয়েন্টটি সক্রিয় তা নিশ্চিত করে'
        },
        {
          en: 'A price tag sticker attached to a computer processor in an electronics shop',
          bn: 'কম্পিউটার দোকানে প্রসেসরের গায়ে লাগানো একটি মূল্যের স্টিকার'
        },
        {
          en: 'A union that requires payment of royalties to the C language authors',
          bn: 'এমন একটি ইউনিয়ন যা ব্যবহার করতে সি নির্মাতাদের রয়্যালটি দিতে হয়'
        },
        {
          en: 'An HTML tag that creates a union between two web pages',
          bn: 'একটি এইচটিএমএল ট্যাগ যা দুটি ওয়েব পেজের মাঝে সংযোগ তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'An enum tag that labels the currently active union payload.',
        bn: 'একটি enum ট্যাগ যা ইউনিয়নে বর্তমানে থাকা ডেটার ধরন নির্দেশ করে।'
      },
      explanation: {
        en: 'Tagged unions pair an enum discriminator with a union, allowing C programs to safely interpret polymorphic data without memory corruption.',
        bn: 'ট্যাগড ইউনিয়ন একটি enum ডিসক্রিমিনেটরকে ইউনিয়নের সাথে যুক্ত করে, যা মেমোরি নষ্ট না করে নিরাপদ পলিমরফিক ডেটা ব্যবহারে সহায়তা করে।'
      }
    }
  ],
  quiz: {
    id: 'structs-and-the-union-quiz',
    title: {
      en: 'Structs & Unions Architecture Quiz',
      bn: 'স্ট্রাক্ট ও ইউনিয়ন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-struct-reordering-gain',
        kind: 'mcq',
        topic: 'Memory savings from reordering struct fields',
        question: {
          en: 'Why does reordering struct fields from largest alignment to smallest (e.g. doubles first, then ints, then chars) optimize memory footprint?',
          bn: 'স্ট্রাক্ট ফিল্ডগুলোকে বড় থেকে ছোট অ্যালাইনমেন্টে সাজালে (যেমন প্রথমে double, তারপর int, তারপর char) কেন মেমোরি অপচয় কমে?'
        },
        options: [
          {
            en: 'It packs smaller fields into natural alignment gaps, eliminating unnecessary interior padding bytes and shrinking the overall struct size',
            bn: 'এটি ছোট ফিল্ডগুলোকে মেমোরির স্বাভাবিক শূন্যস্থানে বসিয়ে দেয়, ফলে ভেতরের অপ্রয়োজনীয় প্যাডিং দূর হয় এবং পুরো স্ট্রাক্টের সাইজ ছোট হয়ে আসে'
          },
          {
            en: 'Because compilers automatically delete fields declared after line 3',
            bn: 'কারণ কম্পাইলার ৩ নম্বর লাইনের পর লেখা সমস্ত ফিল্ড নিজে থেকেই মুছে দেয়'
          },
          {
            en: 'Because integers take up zero memory when declared in the middle',
            bn: 'কারণ মাঝে ঘোষণা করলে ইন্টিজার মেমোরিতে শূন্য বাইট জায়গা নেয়'
          },
          {
            en: 'It accelerates the physical spin speed of the computer hard disk',
            bn: 'এটি কম্পিউটারের হার্ডডিস্ক ঘোরার শারীরিক গতি বৃদ্ধি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Placing largest fields first minimizes alignment padding gaps.',
          bn: 'সবচেয়ে বড় ফিল্ডগুলোকে আগে রাখলে প্যাডিংয়ের ফাঁকা স্থান দূর হয়।'
        },
        explanation: {
          en: 'Sorting fields by descending alignment ensures each member naturally satisfies its alignment boundary without requiring the compiler to insert empty padding bytes.',
          bn: 'ফিল্ডগুলোকে নিম্নগামী অ্যালাইনমেন্টে সাজালে প্রতিটি সদস্য কোনো প্যাডিং ছাড়াই স্বাভাবিকভাবে বসে যায় এবং মেমোরির অপচয় দূর হয়।'
        }
      },
      {
        id: 'q-struct-pass-by-pointer',
        kind: 'mcq',
        topic: 'Passing structs by pointer vs value in functions',
        question: {
          en: 'Why is passing large structs by pointer (e.g. void process(const LargeStruct *s)) preferred over pass-by-value in high-performance C?',
          bn: 'উচ্চগতির সি প্রোগ্রামে বড় স্ট্রাক্টকে ভ্যালু বা মান আকারে পাঠানোর চেয়ে কেন পয়েন্টার দিয়ে পাঠানো (যেমন void process(const LargeStruct *s)) শ্রেয়?'
        },
        options: [
          {
            en: 'Passing by value requires copying the entire struct onto the function stack frame, causing severe memory overhead; passing a pointer copies only an 8-byte address',
            bn: 'মান আকারে পাঠালে পুরো স্ট্রাক্টটি ফাংশনের স্ট্যাক ফ্রেমে কপি করতে হয় যা প্রচুর সময় নষ্ট করে; পয়েন্টার পাঠালে কেবল একটি ৮-বাইটের অ্যাড্রেস কপি হয়'
          },
          {
            en: 'Because C compilers refuse to compile any struct passed by value',
            bn: 'কারণ সি কম্পাইলার মান আকারে পাঠানো যেকোনো স্ট্রাক্ট কম্পাইল করতে অস্বীকার করে'
          },
          {
            en: 'To prevent the computer screen from dimming during execution',
            bn: 'প্রোগ্রাম চলাকালীন কম্পিউটার স্ক্রিনের উজ্জ্বলতা কমে যাওয়া আটকাতে'
          },
          {
            en: 'Because structs can only exist inside pointer variables',
            bn: 'কারণ স্ট্রাক্ট কেবল পয়েন্টার ভ্যারিয়েবলের ভেতরেই অবস্থান করতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Copying 8 bytes vs copying a massive multi-kilobyte struct.',
          bn: '৮ বাইটের ঠিকানা কপি করা বনাম বিশাল সাইজের স্ট্রাক্ট কপি করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Pass-by-value copies the full struct payload byte-for-byte onto the stack. Passing a pointer copies only 8 bytes, avoiding massive CPU copying overhead.',
          bn: 'পাস-বাই-ভ্যালু পুরো স্ট্রাক্টের বাইটগুলো স্ট্যাকে কপি করে। কিন্তু পয়েন্টার পাঠালে কেবল ৮ বাইট কপি হয়, যা বিপুল সিপিইউ ওভারহেড বাঁচায়।'
        }
      },
      {
        id: 'q-bitfield-purpose',
        kind: 'mcq',
        topic: 'Purpose and mechanics of bitfields in C structs',
        question: {
          en: 'What is the primary architectural purpose of bitfields in C structs (e.g. unsigned int flag : 1;)?',
          bn: 'সি স্ট্রাক্টে বিটফিল্ডের (যেমন unsigned int flag : 1;) প্রধান আর্কিটেকচারাল উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To pack multiple boolean flags and compact integer values into explicit bit-level widths, drastically conserving memory in hardware drivers and network packet headers',
            bn: 'একাধিক বুলিয়ান ফ্ল্যাগ ও ছোট ইন্টিজারকে সুনির্দিষ্ট বিট আকারে সাজিয়ে রাখা, যা হার্ডওয়্যার ড্রাইভার ও নেটওয়ার্ক প্যাকেট হেডারের মেমোরি ব্যাপকভাবে সাশ্রয় করে'
          },
          {
            en: 'To automatically convert integers into cryptocurrency tokens',
            bn: 'ইন্টিজারগুলোকে স্বয়ংক্রিয়ভাবে ক্রিপ্টোকারেন্সি টোকেনে রূপান্তর করতে'
          },
          {
            en: 'To divide the computer processor clock speed by 100',
            bn: 'কম্পিউটার প্রসেসরের ক্লক স্পিডকে ১০০ দিয়ে ভাগ করতে'
          },
          {
            en: 'Bitfields are only used to draw 3D graphics on web browsers',
            bn: 'বিটফিল্ড কেবল ওয়েব ব্রাউজারে থ্রি-ডি গ্রাফিক্স আঁকার জন্যই ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Storing multiple flags inside the individual bits of an integer.',
          bn: 'একটি ইন্টিজারের প্রতিটি বিটে আলাদা আলাদা ফ্ল্যাগ সংরক্ষণ করা।'
        },
        explanation: {
          en: 'Bitfields allow precise bit-level packing, enabling multiple flags to share a single word instead of consuming whole bytes for each flag.',
          bn: 'বিটফিল্ড বিট স্তরে নিখুঁত প্যাকিং সুবিধা দেয়, ফলে প্রতিটি ফ্ল্যাগের জন্য পুরো ১ বাইট খরচ না করে একটি শব্দে বহু ফ্ল্যাগ জমা রাখা যায়।'
        }
      },
      {
        id: 'q-struct-zero-init-security',
        kind: 'mcq',
        topic: 'Security importance of zeroing uninitialized struct padding bytes',
        question: {
          en: 'Why is zero-initializing a struct via {0} or memset critical before transmitting it over a network socket?',
          bn: 'নেটওয়ার্ক সকেটে পাঠানোর আগে {0} বা memset দিয়ে স্ট্রাক্ট জিরো-ইনিশিয়ালাইজ করা কেন নিরাপত্তা দৃষ্টিকোণ থেকে অত্যন্ত গুরুত্বপূর্ণ?'
        },
        options: [
          {
            en: 'Uninitialized struct padding bytes contain residual garbage data from prior stack memory, which can leak sensitive cryptographic keys or passwords across the network',
            bn: 'অশোধিত স্ট্রাক্ট প্যাডিং বাইটগুলোতে আগের স্ট্যাক মেমোরির গার্বেজ ডেটা থেকে যায়, যা নেটওয়ার্কে গোপন ক্রিপ্টোগ্রাফিক কি বা পাসওয়ার্ড ফাঁস করে দিতে পারে'
          },
          {
            en: 'Because network cables refuse to transmit any packet containing non-zero bytes',
            bn: 'কারণ অশূন্য বাইট বিশিষ্ট কোনো প্যাকেট নেটওয়ার্ক কেবল দিয়ে পরিবহন করা যায় না'
          },
          {
            en: 'To make the network transmission travel faster than the speed of light',
            bn: 'নেটওয়ার্ক ট্রান্সমিশনকে আলোর গতির চেয়ে দ্রুতগামী করে তুলতে'
          },
          {
            en: 'It causes the operating system to double the computer RAM',
            bn: 'এটি অপারেটিং সিস্টেমকে কম্পিউটারের র্যাম দ্বিগুণ করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preventing confidential stack memory remnants from leaking.',
          bn: 'স্ট্যাকের গোপন মেমোরি ডেটা যেন নেটওয়ার্কে ফাঁস না হয় তা নিশ্চিত করা।'
        },
        explanation: {
          en: 'Padding bytes are uninitialized by default. If a struct is copied to a network socket without zeroing, residual stack memory (such as passwords or keys) is leaked.',
          bn: 'প্যাডিং বাইটগুলো সাধারণত অশোধিত থাকে। জিরো না করে সকেটে পাঠালে আগের স্ট্যাকের গোপন ডেটা (যেমন পাসওয়ার্ড বা কি) নেটওয়ার্কে ফাঁস হয়ে যেতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'memory-and-the-malloc',
    title: {
      en: 'Dynamic Memory Allocation — Heap Architecture, malloc, realloc & free',
      bn: 'ডাইনামিক মেমোরি অ্যালোকেশন — হিপ আর্কিটেকচার, malloc, realloc ও free'
    }
  }
};
