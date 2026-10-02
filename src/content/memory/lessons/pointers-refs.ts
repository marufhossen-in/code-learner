import type { Lesson } from '../../../lib/types';

export const PointersRefsLesson: Lesson = {
  slug: 'pointers-refs',
  tech: 'memory',
  title: {
    en: 'Pointers, References & Direct Memory Addressing',
    bn: 'পয়েন্টার, রেফারেন্স এবং ডিরেক্ট মেমোরি অ্যাড্রেসিং'
  },
  summary: {
    en: 'Uncover how systems programming languages interact directly with hardware memory addresses. Master the distinction between raw pointers (direct 64-bit addresses in C/C++/Rust) and safe references (managed handles in Java/JavaScript/Go). Explore pointer dereferencing, pointer arithmetic across typed data arrays, and learn how to eliminate catastrophic bugs: dangling pointers, double-free crashes, and null-pointer dereferences.',
    bn: 'সিস্টেম প্রোগ্রামিং ভাষাগুলো কীভাবে সরাসরি হার্ডওয়্যার মেমোরি ঠিকানার সাথে কাজ করে তা উন্মোচন করুন। র পয়েন্টার ( সি/সি++/রাস্টে সরাসরি ৬৪-বিট ঠিকানা ) এবং সুরক্ষিত রেফারেন্সের ( জাভা/জাভাস্ক্রিপ্ট/গো-তে পরিচালিত হ্যান্ডেল ) মৌলিক পার্থক্য আয়ত্ত করুন। পয়েন্টার ডিরেফারেন্সিং, টাইপড ডাটা অ্যারেতে পয়েন্টার এরিথমেটিক অন্বেষণ করুন এবং বিপজ্জনক ত্রুটিগুলো সমাধান করা শিখুন: ড্যাংলিং পয়েন্টার, ডাবল-ফ্রি ক্র্যাশ এবং নাল-পয়েন্টার ডিরেফারেন্স।',
  },
  minutes: 22,
  blocks: [
    {
      type: 'heading',
      id: 'values-versus-memory-locations',
      text: {
        en: 'Values versus Locations: The Concept of Memory Addresses',
        bn: 'মান বনাম অবস্থান: মেমোরি ঠিকানার মূল ধারণা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'When you write code that manipulates data structures, computer memory operates as a massive linear array of bytes, with each byte possessing a unique numerical address. A standard variable stores a data value directly in memory. In contrast, a Pointer is a specialized variable whose value is the memory address of another location in RAM.',
        bn: 'আপনি যখন ডাটা স্ট্রাকচার নিয়ে কোড লেখেন, তখন মেমোরি বাইটের সুবিশাল রৈখিক অ্যারে হিসেবে কাজ করে, যেখানে প্রতি বাইটের নিজস্ব অনন্য গাণিতিক ঠিকানা থাকে। সাধারণ ভেরিয়েবল সরাসরি মেমোরিতে নির্দিষ্ট মান জমা রাখে। অপরদিকে, পয়েন্টার হলো বিশেষ ভেরিয়েবল যার মান হলো র‍্যামের অন্য মেমোরি স্থানের ঠিকানা।'
      },
    },
    {
      type: 'para',
      text: {
        en: 'On modern 64-bit architectures, every memory address is 64 bits wide. Consequently, every pointer variable requires exactly 8 bytes of storage, whether it points to a 1-byte character, a 4-byte integer, or a 1000-byte data structure. Understanding memory addressing allows programmers to optimize cache locality and build fast data structures.',
        bn: 'বর্তমান ৬৪-বিট আর্কিটেকচারে প্রতিটি মেমোরি ঠিকানা ৬৪ বিট প্রশস্ত। ফলে প্রতিটি পয়েন্টার ভেরিয়েবলের মেমোরিতে ঠিক ৮ বাইট জায়গার প্রয়োজন হয়, সেটি ১-বাইটের ক্যারেক্টারকে নির্দেশ করুক, ৪-বাইটের পূর্ণসংখ্যাকে নির্দেশ করুক বা ১০০০-বাইটের কোনো জটিল ডাটা স্ট্রাকচারকেই নির্দেশ করুক না কেন। মেমোরি অ্যাড্রেসিংয়ের এই নিয়ম বুঝলে ক্যাশ অপ্টিমাইজেশন ও দ্রুতগতির ডাটা স্ট্রাকচার তৈরি করা সহজ হয়।'
      },
    },
    {
      type: 'steps',
      steps: [
        {
          title: {
            en: '1. Address-of (&) and Dereferencing (*)',
            bn: '১. অ্যাড্রেস-অফ (&) এবং ডিরেফারেন্সিং (*)'
          },
          text: {
            en: 'The address-of operator (&) extracts the numerical memory address where a variable lives. The dereference operator (*) instructs the CPU to jump to that address in memory and read or modify the underlying data payload.',
            bn: 'অ্যাড্রেস-অফ অপারেটর (&) মেমোরির সেই গাণিতিক ঠিকানাটি বের করে আনে যেখানে ভেরিয়েবলটি অবস্থিত। ডিরেফারেন্স অপারেটর (*) সিপিইউকে সেই মেমোরি ঠিকানায় গিয়ে আসল ডাটা পড়তে বা সংশোধন করার নির্দেশ দেয়।'
          },
        },
        {
          title: {
            en: '2. Typed Pointer Arithmetic & Strides',
            bn: '২. টাইপড পয়েন্টার এরিথমেটিক এবং স্ট্রাইড'
          },
          text: {
            en: 'Adding 1 to a pointer does not increment the memory address by 1 raw byte. Instead, the compiler scales the step by the byte size of the target data type: incrementing a 4-byte integer pointer advances the address by exactly 4 bytes.',
            bn: 'কোনো পয়েন্টারের সাথে ১ যোগ করলে মেমোরি ঠিকানা কেবল ১ বাইট বাড়ে না। বরং কম্পাইলার সেই ডাটা টাইপের বাইট সাইজ অনুযায়ী পদক্ষেপ নির্ধারণ করে: একটি ৪-বাইটের ইন্টিজার পয়েন্টারকে ইনক্রিমেন্ট করলে ঠিকানা ঠিক ৪ বাইট সামনে এগিয়ে যায়।'
          },
        },
        {
          title: {
            en: '3. The Dangling Pointer Threat',
            bn: '৩. ড্যাংলিং পয়েন্টারের মারাত্মক ঝুঁকি'
          },
          text: {
            en: 'When memory is freed back to the system allocator but an existing pointer variable still retains that old address, it becomes a Dangling Pointer. Dereferencing a dangling pointer triggers unpredictable behavior, data corruption, or segmentation faults.',
            bn: 'যখন কোনো বরাদ্দকৃত মেমোরি সিস্টেমে মুক্ত করে দেওয়া হয় কিন্তু একটি পয়েন্টার ভেরিয়েবল তখনও সেই পুরনো ঠিকানাটি ধরে রাখে, তখন তাকে ড্যাংলিং পয়েন্টার বলা হয়। ড্যাংলিং পয়েন্টার ডিরেফারেন্স করলে অপ্রত্যাশিত আচরণ, ডাটা নষ্ট বা সেগমেন্টেশন ফল্ট দেখা দেয়।'
          },
        },
        {
          title: {
            en: '4. Safe References vs Raw Pointers',
            bn: '৪. নিরাপদ রেফারেন্স বনাম র পয়েন্টার'
          },
          text: {
            en: 'Modern managed languages like Java, JavaScript, and Go forbid raw address arithmetic and direct memory manipulation. They replace raw pointers with Safe References—managed object handles monitored by a runtime engine that guarantees memory safety.',
            bn: 'জাভা, জাভাস্ক্রিপ্ট এবং গো-এর মতো আধুনিক পরিচালিত ভাষাগুলো সরাসরি মেমোরি পরিবর্তন ও র অ্যাড্রেস এরিথমেটিক সম্পূর্ণ নিষিদ্ধ করেছে। তারা র পয়েন্টারের বদলে নিরাপদ রেফারেন্স ব্যবহার করে—যা রানটাইম ইঞ্জিন দ্বারা পরিচালিত হয় এবং মেমোরির পূর্ণ সুরক্ষা নিশ্চিত করে।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'Raw Pointers, Memory Offsets, Array Traversal & Dangling Pointer Hazards',
        bn: 'র পয়েন্টার, মেমোরি অফসেট, অ্যারে ট্রাভার্সাল এবং ড্যাংলিং পয়েন্টার ঝুঁকি'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="Direct memory addressing diagram showing pointer variables pointing to RAM locations and array indexing">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="28" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">DIRECT MEMORY ADDRESSING, POINTER ARITHMETIC &amp; SAFETY</text>
  
  <!-- Left: Pointer Variables on Stack -->
  <g transform="translate(30, 50)">
    <rect width="230" height="340" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
    <text x="115" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">STACK: POINTER VARIABLES</text>
    
    <!-- Pointer ptrA -->
    <rect x="15" y="45" width="200" height="75" rx="6" fill="#0f172a" stroke="#0284c7"/>
    <text x="115" y="68" fill="#38bdf8" font-size="11" font-weight="bold" text-anchor="middle">int* ptrA (8 Bytes)</text>
    <text x="115" y="88" fill="#f8fafc" font-size="11" text-anchor="middle">Value: 0x1004</text>
    <text x="115" y="105" fill="#94a3b8" font-size="9" text-anchor="middle">Points to int score</text>
    
    <!-- Pointer ptrArray -->
    <rect x="15" y="135" width="200" height="75" rx="6" fill="#0f172a" stroke="#10b981"/>
    <text x="115" y="158" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">int* ptrArr (8 Bytes)</text>
    <text x="115" y="178" fill="#f8fafc" font-size="11" text-anchor="middle">Value: 0x2000</text>
    <text x="115" y="195" fill="#94a3b8" font-size="9" text-anchor="middle">Points to array base</text>
    
    <!-- Dangling Pointer -->
    <rect x="15" y="225" width="200" height="85" rx="6" fill="#0f172a" stroke="#ef4444"/>
    <text x="115" y="248" fill="#ef4444" font-size="11" font-weight="bold" text-anchor="middle">int* danglingPtr (8 Bytes)</text>
    <text x="115" y="268" fill="#f8fafc" font-size="11" text-anchor="middle">Value: 0x3010</text>
    <text x="115" y="285" fill="#ef4444" font-size="9" text-anchor="middle">DANGER: Target freed!</text>
    <text x="115" y="298" fill="#fca5a5" font-size="8" text-anchor="middle">Causes SIGSEGV / Crash</text>
  </g>
  
  <!-- Right: Physical Memory Array in RAM -->
  <g transform="translate(300, 50)">
    <rect width="510" height="340" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
    <text x="255" y="26" fill="#10b981" font-size="12" font-weight="bold" text-anchor="middle">RAM: PHYSICAL BYTE ADDRESSES &amp; PAYLOADS</text>
    
    <!-- Single int variable -->
    <g transform="translate(20, 45)">
      <rect width="470" height="50" rx="6" fill="#0f172a" stroke="#38bdf8"/>
      <text x="80" y="30" fill="#38bdf8" font-size="11" font-weight="bold">Addr 0x1004 (4B)</text>
      <text x="260" y="30" fill="#f8fafc" font-size="11">Payload: int score = 99</text>
      <text x="400" y="30" fill="#10b981" font-size="10">LIVE &amp; VALID</text>
    </g>
    
    <!-- Array contiguous slots -->
    <g transform="translate(20, 110)">
      <rect width="470" height="110" rx="6" fill="#0f172a" stroke="#10b981"/>
      <text x="235" y="22" fill="#10b981" font-size="11" font-weight="bold" text-anchor="middle">CONTIGUOUS ARRAY: sizeof(int) = 4 Bytes Stride</text>
      
      <rect x="15" y="35" width="100" height="60" rx="4" fill="#1e293b" stroke="#059669"/>
      <text x="65" y="55" fill="#38bdf8" font-size="10" text-anchor="middle">0x2000</text>
      <text x="65" y="75" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">arr[0] = 10</text>
      
      <rect x="130" y="35" width="100" height="60" rx="4" fill="#1e293b" stroke="#059669"/>
      <text x="180" y="55" fill="#38bdf8" font-size="10" text-anchor="middle">0x2004 (+4)</text>
      <text x="180" y="75" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">arr[1] = 20</text>
      
      <rect x="245" y="35" width="100" height="60" rx="4" fill="#1e293b" stroke="#059669"/>
      <text x="295" y="55" fill="#38bdf8" font-size="10" text-anchor="middle">0x2008 (+8)</text>
      <text x="295" y="75" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">arr[2] = 30</text>
      
      <rect x="360" y="35" width="95" height="60" rx="4" fill="#1e293b" stroke="#059669"/>
      <text x="407" y="55" fill="#38bdf8" font-size="10" text-anchor="middle">0x200C (+12)</text>
      <text x="407" y="75" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">arr[3] = 40</text>
    </g>
    
    <!-- Dangling / Freed memory slot -->
    <g transform="translate(20, 240)">
      <rect width="470" height="70" rx="6" fill="#0f172a" stroke="#ef4444" stroke-dasharray="4 4"/>
      <text x="80" y="30" fill="#ef4444" font-size="11" font-weight="bold">Addr 0x3010 (FREED)</text>
      <text x="260" y="30" fill="#94a3b8" font-size="11">[Previously user object]</text>
      <text x="400" y="30" fill="#ef4444" font-size="10">DEALLOCATED</text>
      <text x="235" y="55" fill="#fca5a5" font-size="9" text-anchor="middle">Dereferencing 0x3010 is Use-After-Free (UAF) security flaw</text>
    </g>
  </g>
  
  <!-- Pointer arrows -->
  <line x1="245" y1="130" x2="320" y2="120" stroke="#38bdf8" stroke-width="2"/>
  <line x1="245" y1="220" x2="320" y2="200" stroke="#10b981" stroke-width="2"/>
  <line x1="245" y1="330" x2="320" y2="330" stroke="#ef4444" stroke-width="2" stroke-dasharray="3 3"/>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Every 64-bit pointer is 8 bytes; pointer arithmetic scales jumps automatically by data type size</text>
</svg>`,
      caption: {
        en: 'A 64-bit pointer stores an 8-byte address; pointer arithmetic scales jumps by the data type size (4 bytes for int32).',
        bn: 'একটি ৬৪-বিট পয়েন্টার ৮-বাইটের মেমোরি ঠিকানা ধারণ করে; পয়েন্টার এরিথমেটিক ডাটা টাইপের সাইজ অনুযায়ী লাফ দেয় ( int32 এর জন্য ৪ বাইট )।',
      },
    },
    {
      type: 'heading',
      id: 'pointer-arithmetic-and-safety-code',
      text: {
        en: 'Direct Memory Manipulation & Use-After-Free Simulator',
        bn: 'ডিরেক্ট মেমোরি ম্যানিপুলেশন এবং ইউজ-আফটার-ফ্রি সিমুলেটর'
      },
    },
    {
      type: 'para',
      text: {
        en: 'In high-level languages, memory access errors are caught by runtimes before hardware faults occur. The following deterministic simulator models raw memory buffers, typed pointer arithmetic, and detects illegal dangling pointer dereferences.',
        bn: 'উচ্চস্তরের প্রোগ্রামিং ভাষায় মেমোরি অ্যাক্সেস ত্রুটিগুলো হার্ডওয়্যার ফল্ট ঘটার আগেই রানটাইম দ্বারা ধরা পড়ে। নিচের সিমুলেটরটি মেমোরি বাফার, টাইপড পয়েন্টার এরিথমেটিক এবং অবৈধ ড্যাংলিং পয়েন্টার ডিরেফারেন্স শনাক্তকরণ নিখুঁতভাবে প্রদর্শন করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'pointer-memory-simulator.js',
      code: `// Deterministic Raw Pointer, Stride Arithmetic & Dangling Pointer Simulator
// Uses Node.js Buffer to simulate physical DRAM addressing

class SimulatedRAM {
  constructor(byteCapacity = 64) {
    this.buffer = Buffer.alloc(byteCapacity);
    this.allocatedBlocks = new Map(); // address -> { size, label }
  }

  // Simulates C malloc(size)
  malloc(sizeBytes, label) {
    let offset = 0;
    while (offset + sizeBytes <= this.buffer.length) {
      let collides = false;
      for (const [addr, block] of this.allocatedBlocks) {
        if (offset < addr + block.size && offset + sizeBytes > addr) {
          collides = true;
          break;
        }
      }
      if (!collides) {
        this.allocatedBlocks.set(offset, { size: sizeBytes, label });
        return offset; // Return memory address
      }
      offset += 4;
    }
    throw new Error('OUT_OF_MEMORY');
  }

  // Simulates C free(ptr)
  free(address) {
    if (!this.allocatedBlocks.has(address)) {
      throw new Error('DOUBLE_FREE_DETECTED: Address ' + address + ' was already freed or unallocated!');
    }
    this.allocatedBlocks.delete(address);
  }

  // Pointer dereference with bounds checking
  writeInt32(ptrAddress, value) {
    if (!this.allocatedBlocks.has(ptrAddress)) {
      throw new Error('SEGFAULT: Use-After-Free or illegal write to unallocated address 0x' + ptrAddress.toString(16));
    }
    this.buffer.writeInt32LE(value, ptrAddress);
  }

  readInt32(ptrAddress) {
    if (!this.allocatedBlocks.has(ptrAddress)) {
      throw new Error('SEGFAULT: Dangling Pointer read at unallocated address 0x' + ptrAddress.toString(16));
    }
    return this.buffer.readInt32LE(ptrAddress);
  }
}

const ram = new SimulatedRAM(64);

console.log('=== Step 1: Allocating Memory & Pointer Dereferencing ===');
const scorePtr = ram.malloc(4, 'score_var');
ram.writeInt32(scorePtr, 99);
console.log('Allocated 4 bytes at address: 0x' + scorePtr.toString(16));
console.log('Dereferencing pointer *scorePtr yields value:', ram.readInt32(scorePtr));

console.log('\\n=== Step 2: Pointer Arithmetic on Array Elements ===');
const SIZEOF_INT32 = 4; // 4 bytes stride
const arrayPtr = ram.malloc(16, 'score_array'); // 4 ints * 4 bytes = 16 bytes
console.log('Array base address:', '0x' + arrayPtr.toString(16));

// Simulates *(arrayPtr + 1) -> jumps by 4 bytes
const secondElementAddr = arrayPtr + (1 * SIZEOF_INT32);
console.log('Second element address (ptr + 1):', '0x' + secondElementAddr.toString(16), '(Jumped 4 bytes)');

console.log('\\n=== Step 3: Simulating Dangling Pointer / Use-After-Free ===');
ram.free(scorePtr); // Memory returned to OS allocator
console.log('Freed address 0x' + scorePtr.toString(16) + '. Pointer variable still holds this address!');

try {
  ram.readInt32(scorePtr); // Attempting to read dangling pointer
} catch (err) {
  console.log('Hardware Protection: ' + err.message);
  console.log('Result: Detected dangling pointer violation before memory corruption occurred.');
}`,
      caption: {
        en: 'The simulation tracks memory allocation at byte addresses, calculates 4-byte pointer arithmetic jumps, and halts use-after-free violations.',
        bn: 'সিমুলেশনটি মেমোরি ঠিকানা ট্র্যাকিং, ৪-বাইটের পয়েন্টার এরিথমেটিক এবং ইউজ-আফটার-ফ্রি লঙ্ঘন প্রতিরোধ প্রদর্শন করে।'
      },
    },
    {
      type: 'callout',
      kind: 'warning',
      title: {
        en: 'The Billion-Dollar Mistake: Null References',
        bn: 'বিলিয়ন ডলারের ঐতিহাসিক ভুল: নাল রেফারেন্স'
      },
      text: {
        en: 'In 1965, British computer scientist Sir Tony Hoare invented the Null reference while designing the ALGOL W type system. He later called it his billion-dollar mistake because null dereferencing has caused countless software crashes, security vulnerabilities, and server outages. Modern languages like Rust, Kotlin, and Swift eliminate this vulnerability at compile time by using Option types that prohibit null pointers unless explicitly handled by the programmer.',
        bn: '১৯৬৫ সালে ব্রিটিশ কম্পিউটার বিজ্ঞানী স্যার টনি হোর অ্যালগল ডব্লিউ টাইপ সিস্টেম তৈরির সময় নাল (Null) রেফারেন্স আবিষ্কার করেন। পরবর্তীতে তিনি এটিকে তার বিলিয়ন ডলারের ভুল হিসেবে অভিহিত করেন, কারণ নাল পয়েন্টার ডিরেফারেন্সের কারণে কোটি কোটি সফটওয়্যার ক্র্যাশ এবং নিরাপত্তা বিপর্যয় ঘটেছে। রাস্ট, কোটলিন ও সুইফটের মতো আধুনিক প্রোগ্রামিং ভাষাগুলো কম্পাইল টাইমে অপশন (Option) টাইপ বাধ্যতামূলক করে এই ঝুঁকি সম্পূর্ণ দূর করেছে।'
      },
    },
  ],
  exercises: [
    {
      id: 'mem-ptr-ex-1',
      kind: 'predict',
      question: {
        en: 'In C or C++, if an int32 pointer (where sizeof(int32) is 4 bytes) is incremented by 1 (ptr + 1), by how many bytes does the memory address advance? (4). Type the number.',
        bn: 'সি বা সি++ এ একটি int32 পয়েন্টারের ( যার sizeof(int32) হলো ৪ বাইট ) সাথে ১ যোগ করলে ( ptr + 1 ) মেমোরি ঠিকানা কত বাইট সামনে এগোয়? ( ৪ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '4',
      hint: {
        en: 'Pointer arithmetic automatically scales by the type size: 4 bytes.',
        bn: 'পয়েন্টার এরিথমেটিক স্বয়ংক্রিয়ভাবে ডাটা টাইপের সাইজ ৪ বাইট বাড়িয়ে দেয়।'
      },
      explanation: {
        en: 'Pointer arithmetic multiplies the increment by the size of the referenced type. For a 4-byte integer, ptr + 1 advances the address by 4 bytes.',
        bn: 'পয়েন্টার এরিথমেটিক ডাটা টাইপের সাইজ অনুযায়ী বাড়ে। ৪-বাইটের ইন্টিজারের ক্ষেত্রে ptr + 1 ঠিকানা ৪ বাইট বাড়িয়ে দেয়।'
      },
    },
    {
      id: 'mem-ptr-ex-2',
      kind: 'mcq',
      question: {
        en: 'What technical defect defines a Dangling Pointer in software engineering?',
        bn: 'সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ড্যাংলিং পয়েন্টারের সংজ্ঞা কী?'
      },
      options: [
        {
          en: 'A pointer variable that continues to store and reference a memory address after the heap allocation at that location has already been freed',
          bn: 'একটি পয়েন্টার ভেরিয়েবল যা এমন একটি মেমোরি ঠিকানাকে ধরে রাখে যার ভেতরের হিপ মেমোরি ইতিপূর্বে সিস্টেমে মুক্ত (freed) করে দেওয়া হয়েছে',
        },
        {
          en: 'A pointer that points directly to the physical computer power button',
          bn: 'একটি পয়েন্টার যা সরাসরি কম্পিউটারের ফিজিক্যাল পাওয়ার বাটনের সাথে যুক্ত থাকে',
        },
        {
          en: 'A pointer variable that only accepts negative integers',
          bn: 'একটি পয়েন্টার ভেরিয়েবল যা কেবল ঋণাত্মক সংখ্যা গ্রহণ করতে পারে',
        },
        {
          en: 'A pointer that can only be written during night hours',
          bn: 'একটি পয়েন্টার যা কেবল রাতের বেলায় কোডে লেখা যায়',
        },
      ],
      answer: 0,
      hint: {
        en: 'A pointer holding an address whose memory has been freed.',
        bn: 'এমন ঠিকানার পয়েন্টার যার মেমোরি ইতোমধ্যে মুক্ত করে দেওয়া হয়েছে।',
      },
      explanation: {
        en: 'Dangling pointers arise when memory is deallocated but the pointer is not set to null or reassigned, risking severe use-after-free bugs.',
        bn: 'মেমোরি মুক্ত করার পর পয়েন্টার নাল না করলে ড্যাংলিং পয়েন্টার তৈরি হয়, যা ইউজ-আফটার-ফ্রি বাগ সৃষ্টি করে।'
      },
    },
    {
      id: 'mem-ptr-ex-3',
      kind: 'mcq',
      question: {
        en: 'On a modern 64-bit operating system and microprocessor, what is the memory storage size required for a pointer variable?',
        bn: 'আধুনিক ৬৪-বিট অপারেটিং সিস্টেম ও মাইক্রোপ্রসেসরে একটি পয়েন্টার ভেরিয়েবলের জন্য মেমোরিতে কতটুকু জায়গা লাগে?'
      },
      options: [
        {
          en: 'Exactly 8 bytes (64 bits), regardless of the size or data type of the target object being pointed to',
          bn: 'ঠিক ৮ বাইট ( ৬৪ বিট ), পয়েন্টারটি যে অবজেক্টকেই নির্দেশ করুক না কেন তার ডাটা টাইপ বা আকার নির্বিশেষে',
        },
        {
          en: 'Exactly 1 byte for characters and 100 bytes for strings',
          bn: 'ক্যারেক্টারের জন্য ঠিক ১ বাইট এবং স্ট্রিংয়ের জন্য ১০০ বাইট',
        },
        {
          en: 'Zero bytes because pointers exist only in computer imagination',
          bn: 'শূন্য বাইট কারণ পয়েন্টার কেবল কম্পিউটারের ভাবনায় থাকে',
        },
        {
          en: 'Pointers change their physical size every 10 seconds automatically',
          bn: 'পয়েন্টার প্রতি ১০ সেকেন্ড পর পর স্বয়ংক্রিয়ভাবে আকার পরিবর্তন করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'In a 64-bit architecture, every address requires 64 bits (8 bytes).',
        bn: '৬৪-বিট আর্কিটেকচারে প্রতি ঠিকানার জন্য ৬৪ বিট বা ৮ বাইট প্রয়োজন হয়।',
      },
      explanation: {
        en: 'Because memory addresses are 64 bits wide in 64-bit systems, all pointers are exactly 8 bytes in size.',
        bn: 'যেহেতু ৬৪-বিট সিস্টেমে ঠিকানা ৬৪ বিট প্রশস্ত, তাই সমস্ত পয়েন্টারের আকার ঠিক ৮ বাইট হয়।'
      },
    },
    {
      id: 'mem-ptr-ex-4',
      kind: 'predict',
      question: {
        en: 'If a 1-byte char pointer is incremented by 2 (ptr + 2), by how many bytes does the address advance? (2). Type the number.',
        bn: 'যদি ১-বাইটের একটি চার পয়েন্টারকে ২ বৃদ্ধি করা হয় ( ptr + 2 ), তবে মেমোরি ঠিকানা কত বাইট এগোবে? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: 'Multiply 2 steps by 1 byte per char: 2 bytes.',
        bn: '২ ধাপকে ১ বাইট চার সাইজ দিয়ে গুণ করুন: ২ বাইট।'
      },
      explanation: {
        en: 'Since each char occupies 1 byte, advancing 2 steps increments the memory address by exactly 2 bytes.',
        bn: 'যেহেতু প্রতিটি চারের সাইজ ১ বাইট, তাই ২ ধাপ এগোলে ঠিকানা ঠিক ২ বাইট বৃদ্ধি পায়।'
      },
    },
  ],
  quiz: {
    title: {
      en: 'Pointers and Memory Addressing Quiz',
      bn: 'পয়েন্টার এবং মেমোরি অ্যাড্রেসিং কুইজ'
    },
    questions: [
      {
        id: 'mem-ptr-qz-1',
        kind: 'mcq',
        topic: 'address-of-vs-dereference',
        question: {
          en: 'What is the operational distinction between the address-of operator (&) and the dereference operator (*)?',
          bn: 'অ্যাড্রেস-অফ অপারেটর (&) এবং ডিরেফারেন্স অপারেটর (*) এর কাজের মধ্যকার পার্থক্য কী?'
        },
        options: [
          {
            en: 'The address-of operator retrieves the hexadecimal memory address of a variable, while the dereference operator accesses the value stored at that address',
            bn: 'অ্যাড্রেস-অফ অপারেটর ভেরিয়েবলের মেমোরি ঠিকানা প্রদান করে, আর ডিরেফারেন্স অপারেটর সেই ঠিকানায় সংরক্ষিত মান অ্যাক্সেস করে',
          },
          {
            en: 'The address-of operator deletes the variable, while dereference copies it to disk',
            bn: 'অ্যাড্রেস-অফ অপারেটর ভেরিয়েবল মুছে ফেলে আর ডিরেফারেন্স তা ডিস্কে জমা করে',
          },
          {
            en: 'The address-of operator converts text to uppercase letters',
            bn: 'অ্যাড্রেস-অফ অপারেটর টেক্সটকে বড় হাতের অক্ষরে রূপান্তর করে',
          },
          {
            en: 'Both operators perform identical division calculations',
            bn: 'উভয় অপারেটর হুবহু একই ভাগ করার হিসাব সম্পন্ন করে',
          },
        ],
        answer: 0,
        hint: {
          en: '& yields the address, while * accesses the value at that address.',
          bn: '& ঠিকানা বের করে আনে এবং * ঠিকানার মান পড়ে।',
        },
        explanation: {
          en: '& extracts the memory address where data lives; * dereferences that address to read or write the actual value.',
          bn: '& মেমোরি ঠিকানা বের করে এবং * সেই ঠিকানায় গিয়ে আসল ডাটা পড়ে বা লেখে।'
        },
      },
      {
        id: 'mem-ptr-qz-2',
        kind: 'mcq',
        topic: 'why-safe-references-in-modern-languages',
        question: {
          en: 'Why do high-level languages like Java, Go, and JavaScript implement safe managed references rather than raw pointers?',
          bn: 'জাভা, গো এবং জাভাস্ক্রিপ্টের মতো উচ্চস্তরের ভাষাগুলো র পয়েন্টারের বদলে কেন নিরাপদ পরিচালিত রেফারেন্স ব্যবহার করে?'
        },
        options: [
          {
            en: 'Safe references eliminate arbitrary memory corruption, buffer overflows, and dangling pointers by preventing raw pointer arithmetic and ensuring pointers only reference valid objects',
            bn: 'নিরাপদ রেফারেন্স র পয়েন্টার এরিথমেটিক নিষিদ্ধ করে এবং রেফারেন্স সবসময় বৈধ অবজেক্টকে নির্দেশ করা নিশ্চিত করে মেমোরি নষ্ট, বাফার ওভারফ্লো ও ড্যাংলিং পয়েন্টার প্রতিরোধ করে',
          },
          {
            en: 'Because modern computers do not have physical RAM chips',
            bn: 'কারণ আধুনিক কম্পিউটারে ফিজিক্যাল র‍্যাম চিপ থাকে না',
          },
          {
            en: 'To prevent computer screens from consuming electrical battery power',
            bn: 'কম্পিউটার স্ক্রিন যেন ব্যাটারি বিদ্যুৎ খরচ করতে না পারে তা নিশ্চিত করতে',
          },
          {
            en: 'Because raw pointers can only store odd numbers',
            bn: 'কারণ র পয়েন্টার কেবল বিজোড় সংখ্যা সংরক্ষণ করতে পারে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Preventing memory bugs like buffer overflows and dangling pointers.',
          bn: 'বাফার ওভারফ্লো ও ড্যাংলিং পয়েন্টারের মতো মেমোরি ত্রুটি দূর করা।',
        },
        explanation: {
          en: 'Managed references abstract away raw addresses, eliminating entire categories of critical memory safety vulnerabilities.',
          bn: 'পরিচালিত রেফারেন্স সরাসরি মেমোরি ঠিকানাকে আড়াল করে মেমোরি সুরক্ষার ঝুঁকি সম্পূর্ণ দূর করে।'
        },
      },
      {
        id: 'mem-ptr-qz-3',
        kind: 'mcq',
        topic: 'use-after-free-vulnerability',
        question: {
          en: 'What security consequence makes Use-After-Free (UAF) vulnerabilities particularly dangerous in system software?',
          bn: 'ইউজ-আফটার-ফ্রি (UAF) দুর্বলতা সিস্টেম সফটওয়্যারে কেন অত্যন্ত বিপজ্জনক নিরাপত্তা হুমকি তৈরি করে?'
        },
        options: [
          {
            en: 'Attackers can reallocate the freed memory block with malicious data, enabling arbitrary remote code execution when the dangling pointer is later dereferenced',
            bn: 'আক্রমণকারীরা মুক্ত করা মেমোরি স্থানে ক্ষতিকর ডাটা বসিয়ে দিতে পারে, যার ফলে পরবর্তীতে ড্যাংলিং পয়েন্টারটি ডিরেফারেন্স হলে দূরবর্তী কোড এক্সিকিউশন সম্ভব হয়',
          },
          {
            en: 'It causes the physical computer keyboard keys to fall off',
            bn: 'এর ফলে ফিজিক্যাল কিবোর্ডের বাটনগুলো খুলে নিচে পড়ে যায়',
          },
          {
            en: 'It reduces the speed of the office ceiling fan',
            bn: 'এটি অফিসের সিলিং ফ্যানের গতি কমিয়ে দেয়',
          },
          {
            en: 'It changes the desktop wallpaper to a random solid color',
            bn: 'এটি ডেস্কটপ ওয়ালপেপারকে এলোমেলো একরঙা ছবিতে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Attackers overwrite freed memory to hijack control flow upon dereference.',
          bn: 'আক্রমণকারীরা মুক্ত মেমোরিতে ক্ষতিকর কোড বসিয়ে সিস্টেমের নিয়ন্ত্রণ কেড়ে নেয়।',
        },
        explanation: {
          en: 'UAF vulnerabilities allow attackers to groom heap memory, replacing freed objects with attacker payloads that execute when dereferenced.',
          bn: 'UAF দুর্বলতার মাধ্যমে আক্রমণকারীরা হিপের মুক্ত স্থানে ক্ষতিকর পেলোড বসিয়ে কোড এক্সিকিউট করতে পারে।'
        },
      },
      {
        id: 'mem-ptr-qz-4',
        kind: 'mcq',
        topic: 'pointer-arithmetic-stride-calculation',
        question: {
          en: 'How does a compiler calculate the memory stride when executing pointer increment (ptr++) in C or C++?',
          bn: 'সি বা সি++ এ পয়েন্টার ইনক্রিমেন্ট (ptr++) করার সময় কম্পাইলার কীভাবে মেমোরি পদক্ষেপ বা স্ট্রাইড হিসাব করে?'
        },
        options: [
          {
            en: 'It multiplies the step count by the byte size of the underlying type (sizeof(*ptr)) determined during static compilation',
            bn: 'এটি স্ট্যাটিক কম্পাইলেশনের সময় নির্ধারিত ডাটা টাইপের বাইট সাইজ ( sizeof(*ptr) ) দিয়ে পদক্ষেপের সংখ্যা গুণ করে',
          },
          {
            en: 'It asks the operating system kernel via an expensive system call on every increment',
            bn: 'এটি প্রতি ইনক্রিমেন্টে ব্যয়বহুল সিস্টেম কলের মাধ্যমে অপারেটিং সিস্টেম কার্নেলকে জিজ্ঞাসা করে',
          },
          {
            en: 'It always advances by 1 byte regardless of whether the pointer is float, int, or struct',
            bn: 'পয়েন্টার ফ্লোট, ইন্ট বা স্ট্রাক্ট যাই হোক না কেন এটি সবসময় কেবল ১ বাইট অগ্রসর হয়',
          },
          {
            en: 'It chooses a random number of bytes between 1 and 100',
            bn: 'এটি ১ থেকে ১০০ এর মধ্যে যেকোনো একটি এলোমেলো বাইট সংখ্যা বেছে নেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Compile-time scaling by sizeof(*ptr).',
          bn: 'কম্পাইল টাইমে sizeof(*ptr) দিয়ে গুণ করে পদক্ষেপ ঠিক করা হয়।',
        },
        explanation: {
          en: 'The C compiler inspects the pointee type at compile time and emits machine instructions that multiply pointer additions by the type size in bytes.',
          bn: 'সি কম্পাইলার কম্পাইল টাইমে টাইপ পরীক্ষা করে টাইপ সাইজ দিয়ে পয়েন্টার যোগফল গুণ করার মেশিন কোড তৈরি করে।'
        },
      },
    ],
  },
  next: {
    slug: 'garbage-collection',
    title: {
      en: 'Garbage Collection: Tracing, Generational & Reference Counting',
      bn: 'গার্বেজ কালেকশন: ট্রেসিং, জেনারেশনাল এবং রেফারেন্স কাউন্টিং'
    },
  },
};
