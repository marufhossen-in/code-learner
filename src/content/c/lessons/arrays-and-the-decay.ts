import type { Lesson } from '../../../lib/types';

export const ArraysAndTheDecayLesson: Lesson = {
  slug: 'arrays-and-the-decay',
  tech: 'c',
  title: {
    en: 'Arrays, Pointer Decay & Pointer Arithmetic — Contiguous Memory Layouts',
    bn: 'অ্যারে, পয়েন্টার ডিকে ও পয়েন্টার পাটিগণিত — কন্টিনুয়াস মেমোরি লেআউট'
  },
  summary: {
    en: 'Arrays in C provide zero-overhead sequential data storage by reserving unbroken contiguous blocks of physical RAM. Every element resides at a deterministic offset calculated as base_address + index * sizeof(type). However, C arrays lack runtime metadata, length headers, and bounds checking. In almost all expressions—most notably when passed as function parameters—an array name undergoes "pointer decay", silently converting into a raw pointer pointing to its first element (&arr[0]). This decay discards array length information, reducing sizeof(arr) from the total allocation size to a standard 8-byte pointer width. Mastering pointer arithmetic and disciplined length passing is therefore crucial to avoid catastrophic buffer overflows.',
    bn: 'সি প্রোগ্রামিংয়ে অ্যারে কোনো প্রকার ওভারহেড ছাড়াই র্যামে পরপর অবিচ্ছিন্ন মেমোরি ব্লক বরাদ্দ করে ডেটা সংরক্ষণ করে। এর প্রতিটি উপাদান base_address + index * sizeof(type) সূত্রের মাধ্যমে একটি সুনির্দিষ্ট মেমোরি অফসেটে অবস্থান করে। কিন্তু সি অ্যারেতে কোনো রানটাইম মেটাডেটা, লেন্থ হেডার বা বাউন্ডস চেকিং থাকে না। যেকোনো এক্সপ্রেশনে—বিশেষ করে ফাংশন প্যারামিটার হিসেবে পাঠানোর সময়—অ্যারের নাম স্বয়ংক্রিয়ভাবে "পয়েন্টার ডিকে" হয়ে প্রথম উপাদানের সাধারণ পয়েন্টারে (&arr[0]) রূপান্তরিত হয়। এই রূপান্তরের ফলে অ্যারের মোট দৈর্ঘ্যের তথ্য হারিয়ে যায় এবং sizeof(arr) মোট সাইজের বদলে সাধারণ ৮-বাইটের পয়েন্টার সাইজে পরিণত হয়। তাই মারাত্মক বাফার ওভারফ্লো এড়াতে পয়েন্টার পাটিগণিত ও সতর্ক লেন্থ পাসিংয়ে দক্ষতা অর্জন আবশ্যক।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Contiguous Memory Layout and Indexing',
        bn: 'মূল ধারণা: কন্টিনুয়াস মেমোরি লেআউট ও ইনডেক্সিং'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you organize collections of data in C, understanding the mechanical relationship between arrays and pointers is essential. Unlike modern languages where arrays are dynamic heap objects bundled with length properties and boundary guards, a C array is simply a contiguous sequence of identical memory cells allocated sequentially in RAM. When passed into functions, an array automatically decays into a raw pointer to its starting element.',
        bn: 'সি প্রোগ্রামিংয়ে যখন আপনি ডেটার সংগ্রহ বা কালেকশন সাজান, তখন অ্যারে এবং পয়েন্টারের মধ্যকার যান্ত্রিক সম্পর্ক বোঝা অত্যন্ত জরুরি। আধুনিক ভাষার মতো সি-তে অ্যারে কোনো ডাইনামিক অবজেক্ট নয় যেখানে লেন্থ প্রপার্টি বা বাউন্ডারি গার্ড থাকে; বরং এটি র্যামে পরপর সাজানো সমমানের মেমোরি সেলের একটি অবিচ্ছিন্ন খণ্ড। কোনো ফাংশনে আর্গুমেন্ট হিসেবে পাঠানোর সাথে সাথেই অ্যারে স্বয়ংক্রিয়ভাবে তার প্রথম এলিমেন্টের র\' পয়েন্টারে পরিণত বা "ডিকে" হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Contiguous Memory',
          def: {
            en: 'Memory cells allocated side-by-side in unbroken sequence in physical RAM with zero padding gaps between elements',
            bn: 'ফিজিক্যাল র্যামে কোনো ফাঁকা জায়গা না রেখে পরপর অবিচ্ছিন্ন সারিতে বরাদ্দকৃত মেমোরি সেল'
          }
        },
        {
          term: 'Pointer Decay',
          def: {
            en: 'The automatic implicit conversion of an array identifier into a pointer to its first element (&arr[0]) in expressions',
            bn: 'যেকোনো এক্সপ্রেশনে বা ফাংশন কলে অ্যারের নাম স্বয়ংক্রিয়ভাবে তার প্রথম এলিমেন্টের সাধারণ পয়েন্টারে (&arr[0]) পরিণত হওয়ার প্রক্রিয়া'
          }
        },
        {
          term: 'Pointer Arithmetic',
          def: {
            en: 'Mathematical operations (+ or -) on pointers where step size is automatically scaled by the byte size of the underlying type',
            bn: 'পয়েন্টারের যোগ বা বিয়োগ সংক্রান্ত হিসাব যেখানে প্রতিটি ধাপ স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট ডেটা টাইপের বাইট সাইজ দ্বারা গুণিত হয়'
          }
        },
        {
          term: 'Buffer Overflow',
          def: {
            en: 'An illegal write or read beyond the allocated boundary of an array, corrupting adjacent stack frames or memory segments',
            bn: 'অ্যারের জন্য নির্ধারিত মেমোরি সীমানা অতিক্রম করে বাইরের মেমোরিতে অবৈধভাবে ডেটা পড়া বা লেখার বিপজ্জনক ত্রুটি'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'contiguous-layout',
      text: {
        en: 'Memory Offsets: How the CPU Locates Array Elements',
        bn: 'মেমোরি অফসেট: সিপিইউ কীভাবে অ্যারের উপাদান খুঁজে পায়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you declare int arr[5] = {10, 20, 30, 40, 50}; the compiler allocates 20 contiguous bytes (5 elements multiplied by 4 bytes per integer). The hardware locates any element at index i using the simple formula: Address = Base_Address + (i * sizeof(int)).',
        bn: 'যখন আপনি int arr[5] = {10, 20, 30, 40, 50}; ঘোষণা করেন, তখন কম্পাইলার ২০ বাইটের একটি অবিচ্ছিন্ন মেমোরি ব্লক বরাদ্দ করে (৫টি উপাদান গুণ প্রতি ইন্টিজারে ৪ বাইট)। হার্ডওয়্যার যেকোনো ইনডেক্স i-এর অবস্থান নির্ণয় করে এই সহজ সমীকরণ দিয়ে: Address = Base_Address + (i * sizeof(int))।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because the element size is 4 bytes, if the base address of arr[0] is 0x1000, then arr[1] is located at 0x1004, arr[2] is at 0x1008, arr[3] is at 0x100C, and arr[4] is at 0x1010. This constant-time mathematical calculation gives arrays their O(1) random-access performance advantage.',
        bn: 'যেহেতু প্রতিটি উপাদানের আকার ৪ বাইট, তাই arr[0]-এর মূল অ্যাড্রেস 0x1000 হলে arr[1] থাকবে 0x1004-এ, arr[2] থাকবে 0x1008-এ, arr[3] থাকবে 0x100C-এ এবং arr[4] থাকবে 0x1010-এ। এই গাণিতিক হিসাব সরাসরি করা যায় বলেই অ্যারেতে O(1) সময়ে যেকোনো উপাদানে প্রবেশ করা সম্ভব।'
      }
    },
    {
      type: 'heading',
      id: 'pointer-decay-mechanics',
      text: {
        en: 'Pointer Decay: The Lost Array Length Trap',
        bn: 'পয়েন্টার ডিকে: অ্যারের দৈর্ঘ্য হারিয়ে যাওয়ার ফাঁদ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C, an array identifier is not a pointer, but it decays into one when passed into a function. Inside the declaration scope, sizeof(arr) returns 20 bytes (the full buffer size). But when passed to void print(int arr[]), the parameter syntax is pure syntactic sugar for void print(int *arr).',
        bn: 'সি-তে অ্যারের নাম সরাসরি কোনো পয়েন্টার নয়, কিন্তু ফাংশনে পাঠালে তা স্বয়ংক্রিয়ভাবে পয়েন্টারে পরিণত হয়। মূল স্কোপে sizeof(arr) পুরো ২০ বাইট নির্দেশ করে। কিন্তু void print(int arr[]) ফাংশনের ভেতরে এটি আসলে void print(int *arr) হিসেবে কাজ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Inside that function, sizeof(arr) returns 8 bytes (the pointer width on 64-bit systems) rather than 20 bytes. The array length information is permanently vanished! For this reason, C functions processing arrays must always accept a secondary parameter: size_t length.',
        bn: 'ফাংশনের ভেতরে sizeof(arr) তখন ২০ বাইটের বদলে কেবল ৮ বাইট (৬৪-বিট সিস্টেমে পয়েন্টারের মাপ) রিটার্ন করে। ফলে অ্যারের দৈর্ঘ্যের তথ্য স্থায়ীভাবে হারিয়ে যায়! এই কারণেই সি-তে যেকোনো অ্যারে গ্রহণকারী ফাংশনে দ্বিতীয় আর্গুমেন্ট হিসেবে size_t length পাঠানো বাধ্যতামূলক।'
      }
    },
    {
      type: 'heading',
      id: 'pointer-arithmetic',
      text: {
        en: 'Pointer Arithmetic and the Equivalence Principle',
        bn: 'পয়েন্টার পাটিগণিত ও সমতুল্যতা নীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When adding an integer to a pointer, the compiler multiplies that integer by the size of the pointed-to type. If int *ptr = arr;, evaluating ptr + 2 advances the memory pointer by 2 * sizeof(int) = 8 bytes forward in RAM, pointing straight to arr[2].',
        bn: 'পয়েন্টারের সাথে কোনো পূর্ণসংখ্যা যোগ করলে কম্পাইলার সেই সংখ্যাটিকে সংশ্লিষ্ট ডেটা টাইপের বাইট সাইজ দিয়ে গুণ করে। যদি int *ptr = arr; হয়, তবে ptr + 2 মূল্যায়ন করলে মেমোরি পয়েন্টারটি 2 * sizeof(int) = ৮ বাইট সামনে এগিয়ে গিয়ে সরাসরি arr[2]-কে নির্দেশ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This reveals the foundational equivalence of C: the bracket subscript syntax arr[i] is strictly identical to *(arr + i). In fact, because addition is commutative, *(arr + i) is identical to *(i + arr), which allows the valid but bizarre C expression 3[arr] to return the exact same value as arr[3] (40).',
        bn: 'এখান থেকেই সি ভাষার সবচেয়ে মৌলিক সমতুল্যতাটি স্পষ্ট হয়: ব্র্যাকেট সাবস্ক্রিপ্ট সিনট্যাক্স arr[i] মূলত *(arr + i)-এর হুবহু প্রতিরূপ। যোগের বিনিময় নিয়মের কারণে *(arr + i) এবং *(i + arr) একই অর্থ বহন করে, যার ফলে সি-তে 3[arr] লিখলেও তা arr[3]-এর সমান মান (৪০) প্রদর্শন করে।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Stack Arrays vs Pointers vs Heap Buffers',
        bn: 'কাঠামোগত তুলনা: স্ট্যাক অ্যারে বনাম পয়েন্টার বনাম হিপ বাফার'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Storage Form', bn: 'স্টোরেজ রূপ' },
        { en: 'Memory Segment', bn: 'মেমোরি সেগমেন্ট' },
        { en: 'sizeof Operator Behavior', bn: 'sizeof অপারেটরের আচরণ' },
        { en: 'Reallocation Capability', bn: 'সাইজ পরিবর্তনের ক্ষমতা' }
      ],
      rows: [
        [
          { en: 'Stack Fixed Array', bn: 'স্ট্যাক ফিক্সড অ্যারে' },
          { en: 'Stack Frame', bn: 'স্ট্যাক ফ্রেম' },
          { en: 'Returns full array byte size (e.g. 5 * 4 = 20 bytes)', bn: 'পুরো অ্যারের মোট বাইট সাইজ দেয় (যেমন ৫ * ৪ = ২০ বাইট)' },
          { en: 'Fixed at compile time; cannot be resized', bn: 'কম্পাইল টাইমে নির্ধারিত; সাইজ পরিবর্তন সম্ভব নয়' }
        ],
        [
          { en: 'Decayed Pointer Parameter', bn: 'ডিকে হওয়া পয়েন্টার প্যারামিটার' },
          { en: 'Function Register / Stack', bn: 'ফাংশন রেজিস্টার বা স্ট্যাক' },
          { en: 'Returns machine pointer width (always 8 bytes on 64-bit)', bn: 'মেশিনের পয়েন্টার সাইজ দেয় (৬৪-বিটে সর্বদা ৮ বাইট)' },
          { en: 'Can be advanced or pointed to another memory block', bn: 'সামনে আগানো বা অন্য মেমোরিতে নির্দেশ করানো যায়' }
        ],
        [
          { en: 'Dynamic Heap Buffer', bn: 'ডাইনামিক হিপ বাফার' },
          { en: 'Heap Memory Segment', bn: 'হিপ মেমোরি সেগমেন্ট' },
          { en: 'Returns 8 bytes (pointer to heap chunk)', bn: '৮ বাইট দেয় (হিপ ব্লকের মেমোরি পয়েন্টার)' },
          { en: 'Resizable at runtime using realloc()', bn: 'realloc() ব্যবহার করে রানটাইমে সাইজ পরিবর্তনযোগ্য' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Array Layout, Decay & Pointer Arithmetic',
        bn: 'বাস্তব কোড সিমুলেশন: অ্যারে লেআউট, ডিকে ও পয়েন্টার পাটিগণিত'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Arrays, Pointer Decay & Pointer Arithmetic in Node.js

class ArrayMemoryLayout {
  constructor(
    public baseAddress: string,
    public elementSizeBytes: number,
    public elements: number[]
  ) {}

  // Calculates address of index i
  addressOf(i: number): string {
    const addrNum = parseInt(this.baseAddress, 16) + i * this.elementSizeBytes;
    return '0x' + addrNum.toString(16).toUpperCase();
  }

  totalBytes(): number {
    return this.elements.length * this.elementSizeBytes;
  }
}

const arr = [10, 20, 30, 40, 50];
const layout = new ArrayMemoryLayout('0x1000', 4, arr);

const totalArrayBytes = layout.totalBytes(); // 20 bytes
const decayedPointerSize = 8; // 8 bytes on 64-bit architecture

// Pointer arithmetic simulation
// ptr pointing to index 0
let pointerIndex = 0;
// Advance pointer by 2 (ptr + 2)
pointerIndex += 2;
const valAtPointerPlusTwo = arr[pointerIndex]; // 30
const addrAtPointerPlusTwo = layout.addressOf(pointerIndex); // 0x1008

// Subscript equivalence: arr[3] vs *(arr + 3)
const subscriptVal = arr[3];
const pointerArithmeticVal = arr[0 + 3];

console.log('Total array size in bytes for 5 integers:', totalArrayBytes);
// -> Total array size in bytes for 5 integers: 20
console.log('Sizeof decayed pointer variable in bytes:', decayedPointerSize);
// -> Sizeof decayed pointer variable in bytes: 8
console.log('Address of element at index 2 (base + 2 * 4):', addrAtPointerPlusTwo);
// -> Address of element at index 2 (base + 2 * 4): 0x1008
console.log('Value accessed via pointer arithmetic (arr + 2):', valAtPointerPlusTwo);
// -> Value accessed via pointer arithmetic (arr + 2): 30
console.log('Value accessed via subscript arr[3]:', subscriptVal);
// -> Value accessed via subscript arr[3]: 40
console.log('Verification that arr[3] equals *(arr + 3):', subscriptVal === pointerArithmeticVal);
// -> Verification that arr[3] equals *(arr + 3): true`,
      caption: {
        en: 'Simulation: 5 integers occupy 20 bytes; decayed pointer is 8 bytes; index 2 sits at 0x1008 with value 30; arr[3] equals 40',
        bn: 'সিমুলেশন: ৫টি ইন্টিজার ২০ বাইট নেয়; ডিকে হওয়া পয়েন্টার ৮ বাইট; ইনডেক্স ২ থাকে 0x1008-এ যার মান ৩০; arr[3] এর মান ৪০'
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
        en: 'Rule 1: Always pass the array length as an explicit parameter. Because array decay strips size metadata, never rely on sizeof inside receiving functions; always supply a size_t length argument.',
        bn: 'নিয়ম ১: অ্যারের দৈর্ঘ্য সর্বদা আলাদা প্যারামিটার হিসেবে পাঠান। পয়েন্টার ডিকের কারণে সাইজের তথ্য মুছে যায়, তাই রিসিভিং ফাংশনে কখনোই sizeof-এর ওপর নির্ভর করবেন না; সর্বদা size_t length পাঠান।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Defensively guard all index boundaries. Because C lacks runtime array bounds checking, enforce if (index >= length) guards before accessing any subscript or calculating pointer offsets.',
        bn: 'নিয়ম ২: সতর্কতার সাথে প্রতিটি ইনডেক্স বাউন্ডারি পরীক্ষা করুন। সি-তে রানটাইম বাউন্ডস চেকিং নেই, তাই সাবস্ক্রিপ্ট অ্যাক্সেস করার আগে সর্বদা if (index >= length) শর্ত দিয়ে গার্ড নিশ্চিত করুন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use size_t for all array indices and counters. Using signed integers for indexing can trigger dangerous integer underflow vulnerabilities and undefined behavior with large buffers.',
        bn: 'নিয়ম ৩: সমস্ত অ্যারে ইনডেক্স ও কাউন্টারে size_t ব্যবহার করুন। সাইনড ইন্টিজার ব্যবহার করলে বড় বাফারের ক্ষেত্রে বিপজ্জনক ইনটিজার আন্ডারফ্লো ও অনির্ধারিত আচরণ হতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Avoid variable-length arrays (VLAs) on the stack. Large or untrusted dynamic sizes declared on the stack via int arr[n] can easily trigger fatal stack overflow vulnerabilities; prefer heap malloc().',
        bn: 'নিয়ম ৪: স্ট্যাকে ভ্যারিয়েবল-লেন্থ অ্যারে (VLA) ঘোষণা পরিহার করুন। int arr[n] দিয়ে স্ট্যাকে বড় সাইজের মেমোরি নিলে খুব সহজেই মারাত্মক স্ট্যাক ওভারফ্লো ঘটতে পারে; হিপ মেমোরি malloc() ব্যবহার করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-arr-ex1',
      kind: 'mcq',
      topic: 'Contiguous memory layout and indexing in C arrays',
      question: {
        en: 'How are array elements organized in physical RAM when declaring int arr[5] in C?',
        bn: 'সি-তে int arr[5] ঘোষণা করলে ফিজিক্যাল র্যামে উপাদানগুলো কীভাবে বিন্যস্ত থাকে?'
      },
      options: [
        {
          en: 'In a single contiguous, unbroken sequence of 20 bytes where each 4-byte element immediately follows the previous one',
          bn: 'পরপর অবিচ্ছিন্ন ২০ বাইটের একটি একক ব্লকে, যেখানে প্রতি ৪-বাইটের উপাদান তার আগের উপাদানের ঠিক পরেই অবস্থান করে'
        },
        {
          en: 'Scattered randomly across different hard drive sectors connected via HTTP links',
          bn: 'হার্ডড্রাইভের বিভিন্ন সেক্টরে এলোমেলোভাবে ছড়িয়ে ছিটিয়ে এবং এইচটিটিপি লিংক দিয়ে যুক্ত'
        },
        {
          en: 'In a hash table bucket with 5 duplicate keys',
          bn: '৫টি ডুপ্লিকেট কি সহ একটি হ্যাশ টেবিল বাকেটে'
        },
        {
          en: 'Only inside the CPU graphics card registers',
          bn: 'কেবল সিপিইউর গ্রাফিক্স কার্ডের মেমোরি রেজিস্টারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequential contiguous bytes in RAM.',
        bn: 'র্যামে পরপর সাজানো অবিচ্ছিন্ন মেমোরি সেলের কথা ভাবুন।'
      },
      explanation: {
        en: 'C arrays allocate memory contiguously. 5 integers at 4 bytes each create an unbroken 20-byte block in physical memory.',
        bn: 'সি অ্যারে মেমোরিতে অবিচ্ছিন্নভাবে জায়গা নেয়। ৪ বাইটের ৫টি পূর্ণসংখ্যা র্যামে পরপর মোট ২০ বাইটের একটি ব্লক তৈরি করে।'
      }
    },
    {
      id: 'c-arr-ex2',
      kind: 'mcq',
      topic: 'The concept of pointer decay in C function calls',
      question: {
        en: 'What occurs when an array is passed as an argument to a function expecting void process(int arr[])?',
        bn: 'যখন কোনো ফাংশনে void process(int arr[]) হিসেবে একটি অ্যারে পাঠানো হয় তখন কী ঘটে?'
      },
      options: [
        {
          en: 'The array decays into a raw pointer to its first element (&arr[0]), and sizeof(arr) inside the function evaluates to the pointer size (8 bytes on 64-bit systems) rather than total array bytes',
          bn: 'অ্যারেটি তার প্রথম উপাদানের সাধারণ পয়েন্টারে (&arr[0]) ডিকে হয় এবং ফাংশনের ভেতরে sizeof(arr) মোট সাইজের বদলে পয়েন্টার সাইজ (৬৪-বিটে ৮ বাইট) প্রদান করে'
        },
        {
          en: 'The entire array is duplicated 500 times in the browser local storage',
          bn: 'পুরো অ্যারেটি ব্রাউজারের লোকাল স্টোরেজে ৫০০ বার ডুপ্লিকেট হয়'
        },
        {
          en: 'The compiler throws an error because arrays cannot be passed to functions',
          bn: 'কম্পাইলার এরর দেয় কারণ ফাংশনে কখনোই অ্যারে পাঠানো যায় না'
        },
        {
          en: 'The array converts into a JSON string automatically',
          bn: 'অ্যারেটি নিজে থেকেই একটি জেএসন স্ট্রিংয়ে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The array identifier decays into a pointer to index 0.',
        bn: 'অ্যারের নাম প্রথম ইনডেক্সের পয়েন্টারে পরিণত হয়।'
      },
      explanation: {
        en: 'In C, array arguments decay into pointers. The receiving function receives a pointer (int *), losing the original size metadata.',
        bn: 'সি-তে আর্গুমেন্ট হিসেবে গেলে অ্যারে পয়েন্টারে রূপ নেয়। রিসিভার কেবল একটি পয়েন্টার (int *) পায় এবং আসল সাইজের তথ্য মুছে যায়।'
      }
    },
    {
      id: 'c-arr-ex3',
      kind: 'mcq',
      topic: 'Pointer arithmetic scaling by data type size',
      question: {
        en: 'If ptr is a pointer to an int (where sizeof(int) == 4) and points to address 0x1000, what address does ptr + 2 point to?',
        bn: 'যদি ptr একটি int পয়েন্টার হয় (যেখানে sizeof(int) == 4) এবং 0x1000 অ্যাড্রেস নির্দেশ করে, তবে ptr + 2 কোন অ্যাড্রেস নির্দেশ করবে?'
      },
      options: [
        {
          en: '0x1008, because pointer arithmetic scales the addition by sizeof(int) (0x1000 + 2 * 4 = 0x1008)',
          bn: '0x1008, কারণ পয়েন্টার পাটিগণিতে যোগফলটি sizeof(int) দিয়ে স্কেল করা হয় (0x1000 + 2 * 4 = 0x1008)'
        },
        {
          en: '0x1002, because it simply adds 2 raw bytes regardless of type',
          bn: '0x1002, কারণ এটি টাইপ বিবেচনা না করে কেবল ২ বাইট যোগ করে'
        },
        {
          en: '0x2000, because 2 is multiplied by 1000',
          bn: '0x2000, কারণ ২ সংখ্যাটি ১০০০ দিয়ে গুণ হয়'
        },
        {
          en: '0x0000, because adding numbers resets memory pointers',
          bn: '0x0000, কারণ সংখ্যা যোগ করলে পয়েন্টার রিসেট হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pointer steps are multiplied by sizeof(type).',
        bn: 'পয়েন্টার এক ধাপ আগালে সংশ্লিষ্ট ডেটা টাইপের বাইট সাইজ পরিমাণ আগায়।'
      },
      explanation: {
        en: 'Adding integer n to pointer ptr of type T advances memory by n * sizeof(T) bytes. Here 2 * 4 bytes = 8 bytes, so 0x1000 + 8 = 0x1008.',
        bn: 'T টাইপের পয়েন্টারে n যোগ করলে মেমোরি n * sizeof(T) বাইট বৃদ্ধি পায়। এখানে ২ * ৪ বাইট = ৮ বাইট, ফলে 0x1000 + ৮ = 0x1008।'
      }
    },
    {
      id: 'c-arr-ex4',
      kind: 'mcq',
      topic: 'Subscript operator equivalence in C',
      question: {
        en: 'Why is the expression arr[3] mathematically equivalent to *(arr + 3) and 3[arr] in C?',
        bn: 'সি-তে arr[3] এক্সপ্রেশনটি কেন গাণিতিকভাবে *(arr + 3) এবং 3[arr]-এর সম্পূর্ণ সমতুল্য?'
      },
      options: [
        {
          en: 'The compiler translates arr[i] directly into *(arr + i); because addition is commutative, *(arr + 3) and *(3 + arr) resolve to identical memory addresses and values',
          bn: 'কম্পাইলার arr[i]-কে সরাসরি *(arr + i)-তে রূপান্তর করে; যেহেতু যোগের বিনিময় নিয়ম প্রযোজ্য, তাই *(arr + 3) এবং *(3 + arr) একই মেমোরি অ্যাড্রেস ও মান প্রদান করে'
        },
        {
          en: 'Because C compilers swap numbers automatically when running in terminal mode',
          bn: 'কারণ টার্মিনাল মোডে চললে সি কম্পাইলার নিজে থেকেই সংখ্যা অদলবদল করে'
        },
        {
          en: 'Because all numbers in C represent string values',
          bn: 'কারণ সি-এর সমস্ত সংখ্যা মূলত স্ট্রিং মান নির্দেশ করে'
        },
        {
          en: 'It is a compiler defect that causes code to fail compilation',
          bn: 'এটি কম্পাইলারের একটি ত্রুটি যা কম্পাইলেশনে ব্যর্থতা তৈরি করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bracket indexing is syntactic sugar for pointer addition and dereferencing.',
        bn: 'ব্র্যাকেট ইনডেক্সিং মূলত পয়েন্টার যোগ ও ডি-রেফারেন্সিংয়ের সংক্ষিপ্ত রূপ।'
      },
      explanation: {
        en: 'In C, arr[i] is defined as *(arr + i). Since addition is commutative, *(arr + i) == *(i + arr) == i[arr].',
        bn: 'সি স্ট্যান্ডার্ড অনুযায়ী arr[i] মূলত *(arr + i)। যোগের বিনিময় বিধিমতে *(arr + i) এবং *(i + arr) হুবহু এক, তাই i[arr]-ও বৈধ।'
      }
    }
  ],
  quiz: {
    id: 'arrays-and-the-decay-quiz',
    title: {
      en: 'Arrays & Pointer Decay Quiz',
      bn: 'অ্যারে ও পয়েন্টার ডিকে কুইজ'
    },
    questions: [
      {
        id: 'q-buffer-overflow-hazard',
        kind: 'mcq',
        topic: 'Buffer overflow risks and lack of bounds checking',
        question: {
          en: 'What occurs if a C program writes to arr[10] when arr is declared with only 5 elements (int arr[5])?',
          bn: 'যদি int arr[5] হিসেবে ৫টি উপাদানের অ্যারে ঘোষণা করে arr[10]-এ ডেটা লেখা হয়, তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'C executes no bounds checking; the write writes into adjacent memory or stack frames, causing memory corruption, security vulnerabilities, or undefined behavior',
            bn: 'সি কোনো বাউন্ডস চেকিং করে না; ফলে লেখাটি পাশের মেমোরি বা স্ট্যাক ফ্রেমে ঢুকে মেমোরি নষ্ট করে এবং মারাত্মক নিরাপত্তা ঝুঁকি বা অনির্ধারিত আচরণ তৈরি করে'
          },
          {
            en: 'The compiler alerts the user with an audible alarm beep',
            bn: 'কম্পাইলার শব্দ করে অ্যালার্ম বাজিয়ে ব্যবহারকারীকে সতর্ক করে'
          },
          {
            en: 'The array expands dynamically to size 11 in memory',
            bn: 'অ্যারেটি মেমোরিতে নিজে থেকেই সম্প্রসারিত হয়ে সাইজ ১১ ধারণ করে'
          },
          {
            en: 'The program rewrites itself in Python automatically',
            bn: 'প্রোগ্রামটি নিজে থেকেই পাইথন কোডে রূপান্তরিত হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Lack of hardware or compiler bounds enforcement.',
          bn: 'সি-তে কম্পাইলার বা হার্ডওয়্যার কোনো বাউন্ডারি চেক করে না।'
        },
        explanation: {
          en: 'C does not check array boundaries. Writing out-of-bounds writes directly into memory beyond the array, corrupting variables or return addresses.',
          bn: 'সি অ্যারের সীমানা যাচাই করে না। সীমানার বাইরে লিখলে তা পাশের মেমোরি বা রিটার্ন অ্যাড্রেস নষ্ট করে মারাত্মক বিপর্যয় ঘটায়।'
        }
      },
      {
        id: 'q-pass-length-parameter',
        kind: 'mcq',
        topic: 'Why C array functions require an explicit length parameter',
        question: {
          en: 'Why must functions that accept arrays in C also accept an explicit size parameter (e.g. void sort(int *arr, size_t n))?',
          bn: 'সি-তে অ্যারে গ্রহণকারী ফাংশনগুলোতে কেন আলাদা সাইজ প্যারামিটার (যেমন void sort(int *arr, size_t n)) পাঠানো অপরিহার্য?'
        },
        options: [
          {
            en: 'Because array decay reduces the array to a raw pointer upon function entry, erasing all information regarding its original element count or byte capacity',
            bn: 'কারণ ফাংশনে প্রবেশের সময় পয়েন্টার ডিকের ফলে অ্যারে সাধারণ পয়েন্টারে পরিণত হয় এবং এর উপাদান সংখ্যা বা মেমোরি সাইজের তথ্য মুছে যায়'
          },
          {
            en: 'Because the C specification limits functions to 2 parameters maximum',
            bn: 'কারণ সি স্পেসিফিকেশনে সর্বোচ্চ ২টি প্যারামিটার নেওয়ার নিয়ম রয়েছে'
          },
          {
            en: 'To make the code look longer and harder to read',
            bn: 'কোডটিকে দেখতে দীর্ঘ এবং পড়তে জটিল করার জন্য'
          },
          {
            en: 'Because pointers cannot hold addresses of arrays',
            bn: 'কারণ পয়েন্টার কখনোই অ্যারের অ্যাড্রেস ধরে রাখতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Size information is lost when decaying to a pointer.',
          bn: 'পয়েন্টারে রূপান্তরের সময় সাইজের তথ্য বিলুপ্ত হয়ে যায়।'
        },
        explanation: {
          en: 'Pointers store only a memory address, not array bounds. Without passing the size explicitly, the receiving function cannot know where the array terminates.',
          bn: 'পয়েন্টার কেবল মেমোরি অ্যাড্রেস জমা রাখে, কোনো সীমা নয়। সাইজ আলাদাভাবে না পাঠালে ফাংশন বুঝতে পারে না অ্যারেটি কোথায় শেষ হয়েছে।'
        }
      },
      {
        id: 'q-multidim-array-layout',
        kind: 'mcq',
        topic: '2D array contiguous memory layout in row-major order',
        question: {
          en: 'How are 2D arrays arranged in physical memory in C (such as int matrix[3][4])?',
          bn: 'সি-তে টু-ডি (2D) অ্যারে (যেমন int matrix[3][4]) ফিজিক্যাল মেমোরিতে কীভাবে সংরক্ষিত থাকে?'
        },
        options: [
          {
            en: 'In row-major order: a single flat contiguous block of 12 integers where all elements of row 0 are followed immediately by row 1, then row 2',
            bn: 'রো-মেজর (Row-major) পদ্ধতিতে: মোট ১২টি ইন্টিজারের একটি সমতল অবিচ্ছিন্ন ব্লকে, যেখানে সারি ০-এর উপাদানের পরপরই সারি ১ ও তারপর সারি ২ থাকে'
          },
          {
            en: 'As 12 separate files stored on an external USB flash drive',
            bn: 'একটি এক্সটার্নাল ইউএসবি ফ্ল্যাশ ড্রাইভে ১২টি আলাদা ফাইল হিসেবে'
          },
          {
            en: 'In column-major order where columns are stored backwards',
            bn: 'কলাম-মেজর পদ্ধতিতে যেখানে কলামগুলো উল্টো দিক থেকে সংরক্ষিত হয়'
          },
          {
            en: 'As a binary search tree rooted at index [0][0]',
            bn: 'ইনডেক্স [0][0]-কে রুট ধরে তৈরি একটি বাইনারি সার্চ ট্রি হিসেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Row by row sequentially in contiguous memory.',
          bn: 'সারির পর সারি পরপর মেমোরিতে সাজানো থাকে।'
        },
        explanation: {
          en: 'C uses row-major ordering for multidimensional arrays. matrix[3][4] is laid out as 3 rows of 4 integers in a flat 48-byte contiguous sequence.',
          bn: 'সি ভাষা মাল্টিডাইমেনশনাল অ্যারের জন্য রো-মেজর পদ্ধতি ব্যবহার করে। ফলে ৩টি সারির প্রতিটি ৪টি ইন্টিজার পরপর ৪৮ বাইটের অবিচ্ছিন্ন ব্লকে থাকে।'
        }
      },
      {
        id: 'q-pointer-subtraction-result',
        kind: 'mcq',
        topic: 'Pointer subtraction (ptrdiff_t)',
        question: {
          en: 'What is the result of subtracting two pointers that point into the same array (ptr2 - ptr1)?',
          bn: 'একই অ্যারের দুটি পয়েন্টার বিয়োগ করলে (ptr2 - ptr1) ফলাফলে কী পাওয়া যায়?'
        },
        options: [
          {
            en: 'The number of array elements between the two addresses (typed as ptrdiff_t), automatically divided by the element byte size',
            bn: 'ঠিকানা দুটির মধ্যবর্তী উপাদানের সংখ্যা (ptrdiff_t টাইপ), যা স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট উপাদানের বাইট সাইজ দ্বারা ভাগ হয়ে আসে'
          },
          {
            en: 'The exact number of physical CPU clock cycles elapsed',
            bn: 'সিপিইউ ক্লক সাইকেলের অতিক্রান্ত নিখুঁত সংখ্যা'
          },
          {
            en: 'A compilation crash because pointers cannot be subtracted',
            bn: 'কম্পাইলেশন ক্র্যাশ কারণ পয়েন্টার কখনোই বিয়োগ করা যায় না'
          },
          {
            en: 'The memory address of the operating system kernel',
            bn: 'অপারেটিং সিস্টেম কার্নেলের মেমোরি অ্যাড্রেস'
          }
        ],
        answer: 0,
        hint: {
          en: 'The difference between pointers yields the element count between them.',
          bn: 'দুটি পয়েন্টারের বিয়োগফল উপাদান সংখ্যার ব্যবধান প্রকাশ করে।'
        },
        explanation: {
          en: 'Pointer subtraction yields the count of elements between two pointers of the same type, returning a signed ptrdiff_t integer.',
          bn: 'একই টাইপের দুটি পয়েন্টারের বিয়োগফল তাদের মধ্যবর্তী উপাদানের সংখ্যা নির্দেশ করে, যা সাইনড ptrdiff_t পূর্ণসংখ্যা হিসেবে পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'functions-and-the-frame',
    title: {
      en: 'Functions, Stack Frames & Calling Conventions — The Activation Record',
      bn: 'ফাংশন, স্ট্যাক ফ্রেম ও কলিং কনভেনশন — অ্যাক্টিভেশন রেকর্ড'
    }
  }
};
