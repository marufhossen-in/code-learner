import type { Lesson } from '../../../lib/types';

export const MoveAndTheRvalueLesson: Lesson = {
  slug: 'move-and-the-rvalue',
  tech: 'cpp',
  title: {
    en: 'Move Semantics & Rvalue References — Zero-Copy Resource Transfers with std::move',
    bn: 'মুভ সেমান্টিকস ও rvalue রেফারেন্স — std::move দিয়ে শূন্য-কপি রিসোর্স স্থানান্তর'
  },
  summary: {
    en: 'Move semantics, introduced in C++11, revolutionized systems performance by eliminating unnecessary deep memory copies of expiring temporary objects. Prior to move semantics, returning or passing large containers (like a 100-megabyte vector) forced full byte-by-byte heap duplicates. C++ distinguishes persistent named entities (lvalues) from temporary expiring expressions (rvalues). By binding to rvalues via rvalue references (T&&), move constructors and move assignment operators simply "steal" internal raw pointers in O(1) constant time, leaving the source object in a valid, empty state. Marking move operations as noexcept is essential, enabling standard containers like std::vector to safely move elements during reallocation without falling back to slow copies.',
    bn: 'C++11 এ যুক্ত হওয়া মুভ সেমান্টিকস সাময়িক অবজেক্টের অপ্রয়োজনীয় মেমোরি কপি চিরতরে দূর করে সিস্টেমের গতিতে বিপ্লব ঘটিয়েছে। মুভ সেমান্টিকসের আগে বড় কন্টেইনার (যেমন ১০০ মেগাবাইটের একটি ভেক্টর) রিটার্ন বা পাস করার সময় হিপের সম্পূর্ণ মেমোরি বাইট-টু-বাইট নতুন করে কপি হতো। C++ স্থায়ী আইডেন্টিটি বিশিষ্ট ভ্যারিয়েবলকে lvalue এবং ক্ষণস্থায়ী মেয়াদোত্তীর্ণ এক্সপ্রেশনকে rvalue হিসেবে চিহ্নিত করে। rvalue রেফারেন্সের (T&&) মাধ্যমে মুভ কনস্ট্রাক্টর ও মুভ অ্যাসাইনমেন্ট অপারেটর সরাসরি মেমোরির মূল পয়েন্টারগুলো O(1) সময়ে স্থানান্তর বা "চুরি" করে নেয় এবং উৎস অবজেক্টটিকে একটি নিরাপদ ফাঁকা অবস্থায় রেখে দেয়। মুভ অপারেশনে noexcept ঘোষণা করা অপরিহার্য, যা std::vector-এর মতো কন্টেইনারকে রিলোকেশনের সময় ধীরগতির কপির বদলে দ্রুত মুভ অপারেশন ব্যবহারের নিশ্চয়তা দেয়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Deep Copy Problem and Rvalues',
        bn: 'মূল ধারণা: ডিপ কপির সমস্যা ও Rvalue'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you pass or return large objects in C++, copying underlying memory buffers can bring system throughput to a crawl. Prior to modern revisions of the language, returning a heavy container inevitably triggered expensive deep copies across the system bus. In C++11, move semantics transformed the language by allowing objects to transfer ownership of existing heap resources in constant time without duplicating a single byte.',
        bn: 'C++ এ যখন আপনি কোনো বড় অবজেক্ট ফাংশনে পাঠান বা রিটার্ন করেন, তখন অভ্যন্তরীণ মেমোরি কপি করা সিস্টেমের গতি মারাত্মকভাবে কমিয়ে দেয়। আধুনিক সংস্করণের পূর্বে একটি ভারী কন্টেইনার রিটার্ন করার সময় মেমোরি বাসের মধ্য দিয়ে সম্পূর্ণ নতুন করে কপি তৈরি হতে বাধ্য হতো। কিন্তু C++11 এ আসা মুভ সেমান্টিকস (Move Semantics) পুরো ভাষাকে বদলে দিয়েছে, যা একটি বাইটও কপি না করে মাত্র একটি ক্লক সাইকেলে বিদ্যমান হিপ মেমোরির মালিকানা অন্য অবজেক্টে স্থানান্তরের সুবিধা দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'lvalue',
          def: {
            en: 'An expression possessing an identifiable persistent memory address that can appear on the left side of an assignment',
            bn: 'মেমোরিতে সুনির্দিষ্ট স্থায়ী ঠিকানা এবং নাম থাকা এমন একটি ভ্যারিয়েবল বা এক্সপ্রেশন যা অ্যাসাইনমেন্টের বাম পাশে বসতে পারে'
          }
        },
        {
          term: 'rvalue',
          def: {
            en: 'A temporary, expiring value without persistent memory identity (such as numeric literals, function returns, or temporaries)',
            bn: 'স্থায়ী নামহীন এমন একটি ক্ষণস্থায়ী মান বা সাময়িক অবজেক্ট যা এক্সপ্রেশন মূল্যায়নের পরেই বিনষ্ট হয়ে যায়'
          }
        },
        {
          term: 'Rvalue Reference (T&&)',
          def: {
            en: 'A reference syntax dedicated to binding exclusively to expiring rvalues, enabling move constructors to scavenge resources',
            bn: 'C++11 এ আসা বিশেষ রেফারেন্স সিনট্যাক্স (T&&) যা কেবল সাময়িক rvalue-এর সাথে যুক্ত হয়ে রিসোর্স স্থানান্তরের পথ তৈরি করে'
          }
        },
        {
          term: 'std::move() Cast',
          def: {
            en: 'An unconditional static_cast converting an lvalue into an rvalue reference, authorizing ownership transfer',
            bn: 'একটি স্ট্যাটিক কাস্ট যা যেকোনো সাধারণ lvalue-কে rvalue রেফারেন্সে রূপান্তর করে তার রিসোর্স হস্তান্তরের অনুমতি দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'move-constructor-mechanics',
      text: {
        en: 'The Move Constructor: Stealing Pointers in O(1) Time',
        bn: 'মুভ কনস্ট্রাক্টর: O(1) সময়ে মেমোরির মালিকানা গ্রহণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A classic copy constructor HeapBlock(const HeapBlock& other) must allocate a fresh 100-megabyte dynamic array and duplicate every single byte sequentially across RAM. In contrast, the move constructor HeapBlock(HeapBlock&& other) noexcept simply transfers the internal 8-byte address from other into this.',
        bn: 'একটি সাধারণ কপি কনস্ট্রাক্টর HeapBlock(const HeapBlock& other) হিপে সম্পূর্ণ নতুন ১০০ মেগাবাইট জায়গা বরাদ্দ করে এবং প্রতিটি বাইট র্যামের মধ্য দিয়ে ডুপ্লিকেট করে। বিপরীতে মুভ কনস্ট্রাক্টর HeapBlock(HeapBlock&& other) noexcept কেবল ৮-বাইটের মূল মেমোরি অ্যাড্রেসটি এক অবজেক্ট থেকে অন্য অবজেক্টে সরাসরি স্থানান্তর করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The move constructor then sets other.data = nullptr and other.size = 0. When the source object expires milliseconds later, its destructor executes safe delete on nullptr with zero memory freed, preserving the 100 megabytes inside the new owner.',
        bn: 'এরপর মুভ কনস্ট্রাক্টরটি উৎস অবজেক্টের পয়েন্টারে nullptr এবং সাইজ ০ বসিয়ে দেয়। এর ফলে সাময়িক অবজেক্টটির মেয়াদ শেষ হলে তার ডেস্ট্রাক্টর nullptr-এর ওপর চলে কোনো মেমোরি না কেড়েই বিদায় নেয়, আর পুরো ১০০ মেগাবাইট অক্ষত অবস্থায় নতুন অবজেক্টের অধীনে রয়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'noexcept-contract',
      text: {
        en: 'The noexcept Contract and Strong Exception Safety',
        bn: 'noexcept চুক্তি ও শক্তিশালী এক্সেপশন নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Marking move constructors noexcept is vital for systems efficiency. Standard containers like std::vector enforce the Strong Exception Guarantee: if an operation fails midway, container state must remain unchanged.',
        bn: 'মুভ কনস্ট্রাক্টরে noexcept ঘোষণা করা সিস্টেমের পারফরম্যান্সের জন্য অত্যন্ত গুরুত্বপূর্ণ। std::vector-এর মতো স্ট্যান্ডার্ড কন্টেইনারগুলো কড়া এক্সেপশন নিরাপত্তা মেনে চলে: অপারেশনের মাঝে ত্রুটি ঘটলে আগের অবস্থা অক্ষুণ্ণ থাকতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If a move constructor can throw an exception, moving elements during vector reallocation could corrupt data irretrievably. Consequently, std::vector checks std::is_nothrow_move_constructible: if noexcept is missing, it silently abandons move semantics and falls back to expensive deep copies.',
        bn: 'মুভ কনস্ট্রাক্টর যদি এক্সেপশন ছুঁড়তে পারে, তবে ভেক্টর রিলোকেশনের সময় ডেটা চিরতরে বিকৃত হওয়ার ঝুঁকি থাকে। তাই std::vector পরীক্ষা করে দেখে move constructor noexcept কিনা: যদি noexcept না থাকে, তবে এটি মুভ করা বাদ দিয়ে স্বয়ংক্রিয়ভাবে ধীরগতির ডিপ কপিতে ফিরে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'std-move-nature',
      text: {
        en: 'std::move Does Not Move: The Pure Compile-Time Cast',
        bn: 'std::move নিজে কিছু সরায় না: বিশুদ্ধ কম্পাইল-টাইম কাস্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A widespread misconception among beginners is that calling std::move(x) moves data at runtime. In reality, std::move produces zero CPU machine instructions. It is purely an unconditional static_cast<T&&>(x) at compile time.',
        bn: 'নতুনদের মাঝে একটি সাধারণ ভুল ধারণা হলো std::move(x) কল করলে রানটাইমে ডেটা নড়াচড়া করে। প্রকৃতপক্ষে std::move কোনো সিপিইউ মেশিন কোড তৈরিই করে না। এটি কম্পাইল টাইমে সাধারণ ভ্যারিয়েবলকে rvalue রেফারেন্সে রূপান্তরকারী একটি static_cast<T&&>(x)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'It informs the compiler overload resolution engine that named variable x can be treated as an expiring temporary. The actual resource transfer is executed by the invoked move constructor or move assignment operator.',
        bn: 'এটি কম্পাইলারকে জানিয়ে দেয় যে স্থায়ী ভ্যারিয়েবল x-কে এখন একটি সাময়িক মান হিসেবে বিবেচনা করা যেতে পারে। মেমোরির মূল স্থানান্তরটি মূলত চালিত হয় সংশ্লিষ্ট ক্লাসের মুভ কনস্ট্রাক্টর বা মুভ অ্যাসাইনমেন্ট অপারেটর দ্বারা।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: Copy vs Move Semantics',
        bn: 'কাঠামোগত তুলনা: কপি বনাম মুভ সেমান্টিকস'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Copy Constructor (const T&)', bn: 'কপি কনস্ট্রাক্টর (const T&)' },
        { en: 'Move Constructor (T&&) noexcept', bn: 'মুভ কনস্ট্রাক্টর (T&&) noexcept' }
      ],
      rows: [
        [
          { en: 'Memory Allocation', bn: 'মেমোরি বরাদ্দ' },
          { en: 'Allocates new distinct heap buffer via malloc/new', bn: 'হিপে নতুন আলাদা মেমোরি ব্লক বরাদ্দ করে' },
          { en: 'Zero allocations; steals existing heap pointer', bn: 'শূন্য বরাদ্দ; আগের হিপ পয়েন্টারটি সরাসরি নিয়ে নেয়' }
        ],
        [
          { en: 'Time Complexity', bn: 'সময় জটিলতা' },
          { en: 'O(N) proportional to buffer byte length', bn: 'O(N) মেমোরির মোট আকারের সমানুপাতিক' },
          { en: 'O(1) constant time (swapping 8-byte pointer)', bn: 'O(1) তাৎক্ষণিক সময় (৮-বাইটের পয়েন্টার বদল)' }
        ],
        [
          { en: 'Source Object State', bn: 'উৎস অবজেক্টের অবস্থা' },
          { en: 'Completely unchanged and read-only', bn: 'সম্পূর্ণ অপরিবর্তিত ও অক্ষত থাকে' },
          { en: 'Nullified into valid, destructible empty state', bn: 'নিরাপদ ও খালি অবস্থায় রিসেট হয়ে যায়' }
        ],
        [
          { en: 'Vector Reallocation Usage', bn: 'ভেক্টর রিলোকেশনে ব্যবহার' },
          { en: 'Fallback if move constructor lacks noexcept', bn: 'মুভ কনস্ট্রাক্টরে noexcept না থাকলে ব্যবহৃত হয়' },
          { en: 'Primary path if marked noexcept', bn: 'noexcept থাকলে সর্বদা এই দ্রুত পথটি চলে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Move Semantics & Pointer Pilfering',
        bn: 'বাস্তব কোড সিমুলেশন: মুভ সেমান্টিকস ও পয়েন্টার স্থানান্তর'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C++ Move Semantics & Pointer Pilfering in Node.js

class HeavyBuffer {
  public heapAddress: string | null;
  public dataLength: number;

  constructor(public sizeMb: number) {
    this.heapAddress = '0x8000';
    this.dataLength = sizeMb * 1024 * 1024;
  }

  // Simulating deep copy constructor: T(const T&)
  static copy(source: HeavyBuffer) {
    const copyInstance = new HeavyBuffer(source.sizeMb);
    copyInstance.heapAddress = '0x9000';
    return {
      instance: copyInstance,
      bytesCopied: source.dataLength,
      allocationCount: 1
    };
  }

  // Simulating move constructor: T(T&&) noexcept
  static move(source: HeavyBuffer) {
    // Steals pointer in O(1) time; zero bytes duplicated!
    const target = new HeavyBuffer(0);
    target.heapAddress = source.heapAddress;
    target.sizeMb = source.sizeMb;
    target.dataLength = source.dataLength;

    // Reset source into valid empty state
    source.heapAddress = null;
    source.sizeMb = 0;
    source.dataLength = 0;

    return {
      instance: target,
      bytesCopied: 0,
      pointerTransferred: true
    };
  }
}

// Instantiate 100MB buffer
const original = new HeavyBuffer(100);

// Move transfer simulation
const moveResult = HeavyBuffer.move(original);
const destination = moveResult.instance;

const destinationSize = destination.sizeMb; // 100
const destinationAddress = destination.heapAddress; // 0x8000
const sourceRemainingSize = original.sizeMb; // 0
const bytesCopiedDuringMove = moveResult.bytesCopied; // 0

console.log('Buffer size transferred to destination via move constructor in MB:', destinationSize);
// -> Buffer size transferred to destination via move constructor in MB: 100
console.log('Memory address preserved by destination buffer:', destinationAddress);
// -> Memory address preserved by destination buffer: 0x8000
console.log('Source buffer size remaining after move pilfering in MB:', sourceRemainingSize);
// -> Source buffer size remaining after move pilfering in MB: 0
console.log('Total bytes duplicated during move operation:', bytesCopiedDuringMove);
// -> Total bytes duplicated during move operation: 0
console.log('Standard C++ standard version introducing move semantics: 11');
// -> Standard C++ standard version introducing move semantics: 11`,
      caption: {
        en: 'Simulation: 100MB buffer moved to destination at 0x8000; source resets to 0MB; 0 bytes copied during O(1) transfer; C++11 introduced move semantics',
        bn: 'সিমুলেশন: ১০০ মেগাবাইট বাফার 0x8000-এ স্থানান্তরিত; উৎসের সাইজ ০ মেগাবাইট; ০ বাইট ডুপ্লিকেশনে O(1) গতি; C++11 এ মুভ সেমান্টিকসের সূচনা'
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
        en: 'Rule 1: Always mark move constructors and move assignment operators as noexcept. Omitting noexcept causes standard containers like std::vector to fall back to slow deep copying during reallocation.',
        bn: 'নিয়ম ১: মুভ কনস্ট্রাক্টর ও মুভ অ্যাসাইনমেন্ট অপারেটরে সর্বদা noexcept লিখুন। noexcept না দিলে std::vector রিলোকেশনের সময় দ্রুত মুভের বদলে ধীরগতির মেমোরি কপিতে নেমে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Always reset the moved-from object to a safe, valid, destructible state. Setting raw pointers to nullptr prevents double-free crashes when the expiring source object destructor runs.',
        bn: 'নিয়ম ২: যে অবজেক্ট থেকে ডেটা নেওয়া হয়েছে সেটিকে সর্বদা একটি নিরাপদ খালি অবস্থায় সেট করুন। পয়েন্টারগুলোকে nullptr করে দিলে পুরোনো অবজেক্টটি ধ্বংস হওয়ার সময় ডাবল-ফ্রি ক্র্যাশ এড়ানো যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Never access the state of a moved-from object assuming its previous contents. While guaranteed to be destructible and assignable, its business invariants and data values are undefined.',
        bn: 'নিয়ম ৩: একবার মুভ করার পর সেই অবজেক্টে আগের ডেটা আছে ধরে নিয়ে কখনোই কাজ করবেন না। অবজেক্টটি ধ্বংস বা নতুন মান গ্রহণের উপযুক্ত থাকলেও তার ভেতরের ডেটা অনির্ধারিত হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Adhere strictly to the Rule of Five. If your class manages resources and requires a custom destructor, copy constructor, or copy assignment, you must also define move constructor and move assignment.',
        bn: 'নিয়ম ৪: রুল অব ফাইভ কঠোরভাবে মেনে চলুন। ক্লাসে যদি কাস্টম ডেস্ট্রাক্টর, কপি কনস্ট্রাক্টর বা কপি অ্যাসাইনমেন্ট লাগে, তবে অবশ্যই মুভ কনস্ট্রাক্টর এবং মুভ অ্যাসাইনমেন্টও সংজ্ঞায়িত করতে হবে।'
      }
    }
  ],
  exercises: [
    {
      id: 'cpp-move-ex1',
      kind: 'mcq',
      topic: 'The core performance benefit of move semantics in C++11',
      question: {
        en: 'What fundamental performance advantage does move semantics deliver when transferring a large heap resource between objects?',
        bn: 'অবজেক্টের মাঝে বড় হিপ মেমোরি স্থানান্তরের সময় মুভ সেমান্টিকস কোন মৌলিক পারফরম্যান্স সুবিধা প্রদান করে?'
      },
      options: [
        {
          en: 'It transfers ownership of internal raw memory pointers in O(1) constant time without allocating new memory or duplicating bytes, bypassing costly O(N) deep copies',
          bn: 'নতুন কোনো মেমোরি বরাদ্দ বা বাইট কপি না করেই এটি O(1) সময়ে অভ্যন্তরীণ মেমোরি পয়েন্টার হস্তান্তর করে ব্যয়বহুল O(N) ডিপ কপি এড়িয়ে চলে'
        },
        {
          en: 'It accelerates the physical spin speed of the computer hard disk by 500 percent',
          bn: 'এটি কম্পিউটারের হার্ডডিস্ক ঘোরার শারীরিক গতি ৫০০ শতাংশ বৃদ্ধি করে'
        },
        {
          en: 'It compresses all numbers in RAM using MP3 compression',
          bn: 'এটি র্যামের সমস্ত সংখ্যাকে এমপিথ্রি অডিও কম্প্রেশন দিয়ে ছোট করে'
        },
        {
          en: 'Move semantics is purely cosmetic and has zero effect on performance',
          bn: 'মুভ সেমান্টিকস কেবল কোড দেখতে সুন্দর করে কিন্তু গতির ওপর কোনো প্রভাব ফেলে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pointer transfer in O(1) time without byte duplication.',
        bn: 'বাইট কপি না করে O(1) সময়ে সরাসরি পয়েন্টারের মালিকানা বদল।'
      },
      explanation: {
        en: 'Move semantics steals pointers from temporary objects in O(1) time, eliminating the overhead of allocating and copying massive memory buffers.',
        bn: 'মুভ সেমান্টিকস সাময়িক অবজেক্ট থেকে O(1) সময়ে পয়েন্টার নিয়ে নেয়, যার ফলে মেমোরি বরাদ্দ ও বিপুল ডেটা কপি করার কোনো খরচ থাকে না।'
      }
    },
    {
      id: 'cpp-move-ex2',
      kind: 'mcq',
      topic: 'The true nature of std::move in C++',
      question: {
        en: 'What does calling std::move(variable) actually do under the hood?',
        bn: 'C++ এ std::move(variable) কল করলে প্রকৃতপক্ষে নেপথ্যে কী ঘটে?'
      },
      options: [
        {
          en: 'It executes zero CPU machine instructions; it is purely a compile-time static_cast converting an lvalue into an rvalue reference (T&&) to enable move overload resolution',
          bn: 'এটি কোনো সিপিইউ মেশিন কোড চালায় না; এটি কম্পাইল টাইমে সাধারণ ভ্যারিয়েবলকে rvalue রেফারেন্সে (T&&) রূপান্তরকারী একটি সাধারণ স্ট্যাটিক কাস্ট'
        },
        {
          en: 'It physically moves the computer RAM stick to another motherboard slot',
          bn: 'এটি কম্পিউটারের র্যামটিকে মাদারবোর্ডের অন্য স্লটে সরিয়ে নিয়ে যায়'
        },
        {
          en: 'It sends the variable contents over an HTTP socket to a web server',
          bn: 'এটি এইচটিটিপি সকেটের মাধ্যমে ভ্যারিয়েবলের মান ক্লাউড সার্ভারে পাঠিয়ে দেয়'
        },
        {
          en: 'It deletes the variable and resets the computer clock to midnight',
          bn: 'এটি ভ্যারিয়েবলটিকে মুছে ফেলে কম্পিউটারের ঘড়ি মধ্যরাতে রিসেট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'A compile-time static_cast to an rvalue reference.',
        bn: 'কম্পাইল টাইমে rvalue রেফারেন্সে রূপান্তর করার একটি সাধারণ কাস্ট।'
      },
      explanation: {
        en: 'std::move does not move anything. It is an unconditional cast to an rvalue reference, telling the compiler that the object resources can be scavenged.',
        bn: 'std::move নিজে কিছু স্থানান্তর করে না। এটি একটি কাস্ট যা কম্পাইলারকে জানায় যে এই অবজেক্টের রিসোর্স অন্য অবজেক্ট নিরাপদে নিয়ে নিতে পারবে।'
      }
    },
    {
      id: 'cpp-move-ex3',
      kind: 'mcq',
      topic: 'Why move constructors must be marked noexcept',
      question: {
        en: 'Why is it critical to mark move constructors and move assignment operators as noexcept in production C++ classes?',
        bn: 'প্রোডাকশন C++ ক্লাসে মুভ কনস্ট্রাক্টর ও মুভ অ্যাসাইনমেন্ট অপারেটরে কেন noexcept লেখা অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'Standard library containers like std::vector require noexcept to guarantee strong exception safety during reallocation; without it, std::vector falls back to slow deep copying',
          bn: 'std::vector-এর মতো স্ট্যান্ডার্ড কন্টেইনারগুলো রিলোকেশনে এক্সেপশন নিরাপত্তা বজায় রাখতে noexcept খোঁজে; এটি না থাকলে ভেক্টর ধীরগতির ডিপ কপিতে ফিরে যায়'
        },
        {
          en: 'Because C++ compilers refuse to compile any move constructor without noexcept',
          bn: 'কারণ noexcept না থাকলে সি++ কম্পাইলার মুভ কনস্ট্রাক্টর কম্পাইল করতেই অস্বীকার করে'
        },
        {
          en: 'To prevent the computer speakers from making error beep sounds',
          bn: 'কম্পিউটারের স্পিকারে যেন এরর শব্দ না বাজে তা নিশ্চিত করতে'
        },
        {
          en: 'noexcept makes functions execute on the computer graphics card',
          bn: 'noexcept ফাংশনগুলোকে কম্পিউটারের গ্রাফিক্স কার্ডে চালাতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'std::vector falls back to copying if moves can throw exceptions.',
        bn: 'মুভ অপারেশন এক্সেপশন ছুঁড়তে পারলে ভেক্টর নিরাপত্তার স্বার্থে কপি করে।'
      },
      explanation: {
        en: 'To maintain the Strong Exception Guarantee, vector reallocation only uses move if it is guaranteed not to throw. Otherwise, it copies all elements safely.',
        bn: 'এক্সেপশন নিরাপত্তা বজায় রাখতে ভেক্টর কেবল তখনই মুভ করে যখন নিশ্চিত হওয়া যায় কোনো এরর হবে না। তাই noexcept না থাকলে এটি পুরোনো কপিতে ফিরে যায়।'
      }
    },
    {
      id: 'cpp-move-ex4',
      kind: 'mcq',
      topic: 'State of a moved-from object in C++',
      question: {
        en: 'What is the required state of a moved-from object according to the C++ standard library specification?',
        bn: 'C++ স্ট্যান্ডার্ড স্পেসিফিকেশন অনুযায়ী ডেটা স্থানান্তরের পর উৎস অবজেক্টটি (Moved-from object) কোন অবস্থায় থাকা আবশ্যক?'
      },
      options: [
        {
          en: 'It must be left in a valid, destructible, and assignable state (such as null pointers and 0 size), although its specific stored value is indeterminate',
          bn: 'এটিকে অবশ্যই একটি বৈধ, ধ্বংসযোগ্য ও নতুন মান গ্রহণের উপযোগী অবস্থায় থাকতে হবে (যেমন নাল পয়েন্টার ও ০ সাইজ), যদিও এর অভ্যন্তরীণ মান অনির্ধারিত'
        },
        {
          en: 'It is completely deleted from physical computer memory immediately',
          bn: 'এটি তৎক্ষণাৎ কম্পিউটারের মেমোরি থেকে চিরতরে পুরোপুরি মুছে যায়'
        },
        {
          en: 'It must contain the number 999999 in all member fields',
          bn: 'এর প্রতিটি মেম্বার ফিল্ডে অবশ্যই ৯৯৯৯৯৯ সংখ্যাটি থাকতে হবে'
        },
        {
          en: 'It is converted into a global variable stored in the operating system',
          bn: 'এটি অপারেটিং সিস্টেমে সংরক্ষিত একটি গ্লোবাল ভ্যারিয়েবলে রূপান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Valid but unspecified state, safely destructible.',
        bn: 'বৈধ কিন্তু অনির্দিষ্ট অবস্থা, যা নিরাপদে ধ্বংস করা সম্ভব।'
      },
      explanation: {
        en: 'Moved-from objects must be in a valid state so their destructors can run cleanly without undefined behavior, typically by setting pointers to nullptr.',
        bn: 'স্থানান্তরের পর অবজেক্টটিকে বৈধ অবস্থায় রাখতে হয় যাতে তার ডেস্ট্রাক্টর কোনো ত্রুটি ছাড়াই শান্তিতে চলতে পারে, সাধারণত পয়েন্টার nullptr করে এটি করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'move-and-the-rvalue-quiz',
    title: {
      en: 'Move Semantics & Rvalues Quiz',
      bn: 'মুভ সেমান্টিকস ও Rvalue কুইজ'
    },
    questions: [
      {
        id: 'q-perfect-forwarding-role',
        kind: 'mcq',
        topic: 'Perfect forwarding and std::forward',
        question: {
          en: 'What problem does "Perfect Forwarding" (via std::forward<T>(arg)) solve in modern C++ generic templates?',
          bn: 'আধুনিক C++ জেনেরিক টেমপ্লেটে "পারফেক্ট ফরওয়ার্ডিং" (std::forward<T>(arg) দিয়ে) কোন সমস্যার নিখুঁত সমাধান দেয়?'
        },
        options: [
          {
            en: 'It forwards arguments to target functions or constructors while perfectly preserving their exact original value category (lvalue as lvalue, rvalue as rvalue)',
            bn: 'এটি আর্গুমেন্টকে অন্য ফাংশনে পাঠানোর সময় তার আসল ভ্যালু ক্যাটাগরিকে নিখুঁতভাবে অক্ষুণ্ণ রাখে (lvalue থাকলে lvalue এবং rvalue থাকলে rvalue)'
          },
          {
            en: 'It automatically forwards all incoming company emails to the CEO',
            bn: 'এটি স্বয়ংক্রিয়ভাবে সমস্ত অফিসিয়াল ইমেইল কোম্পানির প্রধান কর্মকর্তার কাছে পাঠিয়ে দেয়'
          },
          {
            en: 'It accelerates internet download speeds to 100 gigabits per second',
            bn: 'এটি ইন্টারনেটের ডাউনলোডের গতি প্রতি সেকেন্ডে ১০০ গিগাবিটে বাড়িয়ে দেয়'
          },
          {
            en: 'It encrypts function parameters with military grade algorithms',
            bn: 'এটি মিলিটারি গ্রেড অ্যালগরিদম দিয়ে ফাংশন প্যারামিটার এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preserving value categories (lvalue vs rvalue) during forwarding.',
          bn: 'আর্গুমেন্ট পাঠানোর সময় lvalue নাকি rvalue তা অক্ষুণ্ণ রাখা।'
        },
        explanation: {
          en: 'Named rvalue reference parameters are themselves lvalues inside a function. std::forward restores their original rvalue status if passed as an rvalue.',
          bn: 'ফাংশনের ভেতরে rvalue রেফারেন্সের নাম থাকলে তা নিজে lvalue হয়ে যায়। std::forward তার আগের rvalue পরিচয়টি ফিরিয়ে দিয়ে নিখুঁত স্থানান্তর নিশ্চিত করে।'
        }
      },
      {
        id: 'q-rule-of-five-rationale',
        kind: 'mcq',
        topic: 'The Rule of Five in C++ resource management',
        question: {
          en: 'What are the five special member functions that comprise the "Rule of Five" in C++?',
          bn: 'C++ এ "রুল অব ফাইভ" (Rule of Five) গঠনকারী ৫টি বিশেষ মেম্বার ফাংশন কী কী?'
        },
        options: [
          {
            en: 'Destructor, Copy Constructor, Copy Assignment Operator, Move Constructor, and Move Assignment Operator',
            bn: 'ডেস্ট্রাক্টর, কপি কনস্ট্রাক্টর, কপি অ্যাসাইনমেন্ট অপারেটর, মুভ কনস্ট্রাক্টর এবং মুভ অ্যাসাইনমেন্ট অপারেটর'
          },
          {
            en: 'Main, Printf, Scanf, Malloc, and Free',
            bn: 'Main, Printf, Scanf, Malloc এবং Free'
          },
          {
            en: 'Header, Footer, Body, Div, and Span',
            bn: 'Header, Footer, Body, Div এবং Span'
          },
          {
            en: 'Select, Insert, Update, Delete, and Drop',
            bn: 'Select, Insert, Update, Delete এবং Drop'
          }
        ],
        answer: 0,
        hint: {
          en: 'Destructor plus copy/move constructors and copy/move assignments.',
          bn: 'ডেস্ট্রাক্টরের সাথে কপি ও মুভের জোড়া জোড়া ফাংশনগুলো।'
        },
        explanation: {
          en: 'If a class manages raw resources requiring a custom destructor or copy operations, it must also implement or delete move constructor and move assignment.',
          bn: 'কোনো ক্লাসে যদি কাস্টম ডেস্ট্রাক্টর বা কপি লাগে, তবে মেমোরি সুরক্ষার জন্য অবশ্যই মুভ কনস্ট্রাক্টর ও মুভ অ্যাসাইনমেন্টসহ এই ৫টি ফাংশন সংজ্ঞায়িত করতে হয়।'
        }
      },
      {
        id: 'q-moving-const-objects-trap',
        kind: 'mcq',
        topic: 'The pitfall of invoking std::move on const objects',
        question: {
          en: 'What happens when you invoke std::move(x) on an object declared as const (e.g. const std::string s = "hello"; auto s2 = std::move(s);)?',
          bn: 'একটি const অবজেক্টের ওপর std::move(x) কল করলে কী ঘটে (যেমন const std::string s = "hello"; auto s2 = std::move(s);)?'
        },
        options: [
          {
            en: 'It silently falls back to the expensive copy constructor because move constructors accept non-const rvalues (T&&) and cannot bind to const T&&',
            bn: 'এটি কোনো শব্দ ছাড়াই ধীরগতির কপি কনস্ট্রাক্টরে ফিরে যায় কারণ মুভ কনস্ট্রাক্টর পরিবর্তনযোগ্য (T&&) চায় এবং const T&& থেকে মেমোরি নিতে পারে না'
          },
          {
            en: 'The compiler modifies the const variable and removes the const keyword',
            bn: 'কম্পাইলার কনস্ট ভ্যারিয়েবলটি পরিবর্তন করে const কিওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'The program immediately crashes with a segmentation fault',
            bn: 'প্রোগ্রামটি তাৎক্ষণিকভাবে সেগমেন্টেশন ফল্ট দিয়ে বন্ধ হয়ে যায়'
          },
          {
            en: 'The string is converted into a floating-point number automatically',
            bn: 'স্ট্রিংটি নিজে থেকেই একটি ফ্লোটিং-পয়েন্ট সংখ্যায় রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Moving requires mutating the source; const prevents mutation.',
          bn: 'মুভ করতে হলে উৎসকে ফাঁকা বা পরিবর্তন করতে হয়; const সেই পরিবর্তনে বাধা দেয়।'
        },
        explanation: {
          en: 'Move constructors take non-const T&& so they can null out pointers. Calling std::move on a const object yields const T&&, which matches the copy constructor.',
          bn: 'মুভ করতে পয়েন্টার খালি করতে হয় বলে T&& লাগে। const অবজেক্টে std::move দিলে তা const T&& দেয় যা বাধ্য হয়ে কপি কনস্ট্রাক্টরে চলে যায়।'
        }
      },
      {
        id: 'q-named-rvalue-reference-is-lvalue',
        kind: 'mcq',
        topic: 'Named rvalue references are lvalues inside function bodies',
        question: {
          en: 'Inside void process(Widget&& w), what is the value category of the identifier w itself?',
          bn: 'void process(Widget&& w) ফাংশনের ভেতরে w আইডেন্টিফায়ারটির নিজস্ব ভ্যালু ক্যাটাগরি কী?'
        },
        options: [
          {
            en: 'It is an lvalue because it has a name and an address; passing it to another function requiring an rvalue requires writing std::move(w)',
            bn: 'এটি একটি lvalue কারণ এর একটি নাম ও নির্দিষ্ট মেমোরি ঠিকানা রয়েছে; এটিকে অন্য ফাংশনে rvalue হিসেবে পাঠাতে std::move(w) লিখতে হয়'
          },
          {
            en: 'It is an rvalue because of the double ampersand syntax in the declaration',
            bn: 'এটি একটি rvalue কারণ এর ঘোষণার ভেতর ডাবল অ্যান্ড (&&) চিহ্ন রয়েছে'
          },
          {
            en: 'It has no value category because it is a ghost variable',
            bn: 'এর কোনো ক্যাটাগরি নেই কারণ এটি একটি অদৃশ্য অবাস্তব ভ্যারিয়েবল'
          },
          {
            en: 'It is converted into a boolean flag automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে একটি বুলিয়ান ফ্ল্যাগে রূপান্তরিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Things that have names are lvalues inside their scope.',
          bn: 'স্কোপের ভেতরে যে জিনিসের নাম থাকে তাই মূলত একটি lvalue।'
        },
        explanation: {
          en: 'Value category is a property of expressions, not types. Even though w is an rvalue reference type, expression w has a name, making it an lvalue.',
          bn: 'ভ্যালু ক্যাটাগরি এক্সপ্রেশনের বৈশিষ্ট্য, টাইপের নয়। w একটি rvalue রেফারেন্স হলেও ফাংশনের ভেতর এর একটি নাম থাকায় এটি নিজে lvalue হিসেবে আচরণ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'inheritance-and-the-virtual',
    title: {
      en: 'Inheritance, Polymorphism & Virtual Tables — Dynamic Dispatch & Abstract Interfaces',
      bn: 'ইনহেরিটেন্স, পলিমরফিজম ও ভার্চুয়াল টেবিল — ডাইনামিক ডিসপ্যাচ ও অ্যাবস্ট্রাক্ট ইন্টারফেস'
    }
  }
};
