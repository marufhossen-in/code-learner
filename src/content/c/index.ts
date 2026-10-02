import type { Hub } from '../../lib/types';
import { CAndThePointerLesson } from './lessons/c-and-the-pointer';
import { ArraysAndTheDecayLesson } from './lessons/arrays-and-the-decay';
import { FunctionsAndTheFrameLesson } from './lessons/functions-and-the-frame';
import { StructsAndTheUnionLesson } from './lessons/structs-and-the-union';
import { MemoryAndTheMallocLesson } from './lessons/memory-and-the-malloc';
import { FilesAndTheFdLesson } from './lessons/files-and-the-fd';
import { PreprocessorAndTheMacroLesson } from './lessons/preprocessor-and-the-macro';
import { TheBinaryForgeLesson } from './lessons/the-binary-forge';

export const cHub: Hub = {
  slug: 'c',
  name: 'C Programming',
  icon: '🇨',
  tagline: {
    en: 'The foundational systems language: master memory addresses, pointer arithmetic, manual dynamic allocation, and the binary compilation pipeline.',
    bn: 'সিস্টেমস প্রোগ্রামিংয়ের ভিত্তি: মেমোরি অ্যাড্রেস, পয়েন্টার অ্যারিথমেটিক, ম্যানুয়াল ডাইনামিক অ্যালোকেশন ও বাইনারি কম্পাইলেশন পাইপলাইনে দক্ষতা অর্জন করুন।'
  },
  intro: {
    en: 'C is the lingua franca of computing, powering operating system kernels, embedded hardware, database engines, and runtime virtual machines. Unlike garbage-collected languages that abstract the physical machine, C operates directly above the hardware architecture, exposing byte-level memory control, CPU stack frames, and manual heap allocation. This curriculum takes you through C from foundational pointer mechanics to advanced systems engineering: understanding memory addresses and dereferencing, mastering array decay and contiguous buffers, analyzing call stack activation records, optimizing struct memory alignment and bitfields, governing dynamic heap memory with malloc and free, conducting buffered file I/O, mastering the preprocessor metaprogramming pipeline, and mastering the GCC toolchain with Valgrind leak detection.',
    bn: 'সি হলো কম্পিউটিং জগতের সর্বজনীন ভিত্তি ভাষা, যা অপারেটিং সিস্টেম কার্নেল, এমবেডেড ডিভাইস, ডেটাবেজ ইঞ্জিন এবং রানটাইম ভার্চুয়াল মেশিন পরিচালনা করে। মেমোরি লুকিয়ে রাখা আধুনিক ল্যাঙ্গুয়েজের বিপরীতে সি সরাসরি হার্ডওয়্যারের ওপর কাজ করে এবং বাইট স্তরের মেমোরি নিয়ন্ত্রণ, সিপিইউ স্ট্যাক ফ্রেম ও ম্যানুয়াল হিপ মেমোরির পূর্ণ স্বাধীনতা দেয়। এই কারিকুলাম আপনাকে পয়েন্টারের মূল মেকানিক্স থেকে অ্যাডভান্সড সিস্টেমস প্রোগ্রামিং পর্যন্ত নিয়ে যাবে: মেমোরি অ্যাড্রেস ও ডি-রেফারেন্সিং, অ্যারে ডিকে ও মেমোরি বাফার, কল স্ট্যাক অ্যাক্টিভেশন রেকর্ড, স্ট্রাক্ট মেমোরি অ্যালাইনমেন্ট ও প্যাডিং, ম্যালক ও ফ্রি দিয়ে ডাইনামিক হিপ মেমোরি পরিচালনা, বাফারযুক্ত ফাইল আই/ও, প্রিপ্রসেসর মেটাপ্রোগ্রামিং এবং ভালগ্রিন্ড দিয়ে লিক ডিটেকশন ও জিসিসি কম্পাইলেশন টুলচেইন।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Pointers & Memory Primitives', bn: 'ধাপ ১ — পয়েন্টার ও মেমোরির মৌলিক বিষয়' },
      items: [
        { en: 'Pointers, Memory Addresses & Dereferencing (lesson 1)', bn: 'পয়েন্টার, মেমোরি অ্যাড্রেস ও ডি-রেফারেন্সিং (পাঠ ১)' },
        { en: 'Arrays, Pointer Decay & Pointer Arithmetic (lesson 2)', bn: 'অ্যারে, পয়েন্টার ডিকে ও পয়েন্টার পাটিগণিত (পাঠ ২)' },
        { en: 'Functions, Call Stack Frames & Parameter Passing (lesson 3)', bn: 'ফাংশন, কল স্ট্যাক ফ্রেম ও প্যারামিটার পাসিং (পাঠ ৩)' },
        { en: 'Stack vs Heap memory boundaries and hardware pointer sizing', bn: 'স্ট্যাক বনাম হিপ মেমোরি বাউন্ডারি এবং হার্ডওয়্যারে পয়েন্টারের আকার' },
      ],
    },
    {
      title: { en: 'Stage 2 — Composite Layouts & Dynamic Memory', bn: 'ধাপ ২ — যৌগিক ডেটা লেআউট ও ডাইনামিক মেমোরি' },
      items: [
        { en: 'Structs, Memory Alignment, Padding & Unions (lesson 4)', bn: 'স্ট্রাক্ট, মেমোরি অ্যালাইনমেন্ট, প্যাডিং ও ইউনিয়ন (পাঠ ৪)' },
        { en: 'Dynamic Memory: malloc, calloc, realloc, and free (lesson 5)', bn: 'ডাইনামিক মেমোরি: ম্যালক, ক্যালক, রিঅ্যালক ও ফ্রি (পাঠ ৫)' },
        { en: 'Detecting memory leaks, double-frees, and use-after-free bugs', bn: 'মেমোরি লিক, ডাবল-ফ্রি ও ইউজ-আফটার-ফ্রি বাগ শনাক্তকরণ' },
        { en: 'Custom arena allocators and memory pool architectures', bn: 'কাস্টম অ্যারিনা অ্যালোকেটর ও মেমোরি পুল আর্কিটেকচার' },
      ],
    },
    {
      title: { en: 'Stage 3 — I/O, Metaprogramming & Toolchains', bn: 'ধাপ ৩ — আই/ও, মেটাপ্রোগ্রামিং ও কম্পাইলার টুলচেইন' },
      items: [
        { en: 'File I/O, File Descriptors & Binary Streams (lesson 6)', bn: 'ফাইল আই/ও, ফাইল ডেসক্রিপ্টর ও বাইনারি স্ট্রিম (পাঠ ৬)' },
        { en: 'The C Preprocessor: Macros, Header Guards & Inclusions (lesson 7)', bn: 'সি প্রিপ্রসেসর: ম্যাক্রো, হেডার গার্ড ও ইনক্লুশন (পাঠ ৭)' },
        { en: 'The Binary Forge: GCC, Clang, Makefiles & Valgrind (lesson 8)', bn: 'বাইনারি ফোর্জ: জিসিসি, ক্ল্যাং, মেকফাইল ও ভালগ্রিন্ড (পাঠ ৮)' },
        { en: 'Sanitizers (ASan, UBSan) and production binary stripping', bn: 'স্যানিটাইজার (ASan, UBSan) ও প্রোডাকশন বাইনারি স্ট্রিপিং' },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Dynamic Vector: Resizable Heap Array in Pure C', bn: 'ডাইনামিক ভেক্টর: পিওর সি-তে রিসাইজেবল হিপ অ্যারে' },
      brief: {
        en: 'Implement a generic, geometrically growing dynamic array in standard C99/C11. Define a struct Vector with data pointer, size, and capacity fields. Manage heap allocations using malloc, realloc, and free, doubling capacity when the buffer fills. Implement bounds checking, push_back, pop_back, and element retrieval functions. Deliverables: (a) zero memory leaks under Valgrind testing across 10,000 insertions, (b) proper handling of NULL allocation failures, and (c) a custom destructor function that safely frees allocated memory buffers.',
        bn: 'স্ট্যান্ডার্ড সি৯৯/সি১১ ব্যবহার করে একটি জেনেরিক ডাইনামিক অ্যারে তৈরি করুন। ডেটা পয়েন্টার, সাইজ ও ক্যাপাসিটি ফিল্ড সম্বলিত struct Vector সংজ্ঞায়িত করুন। ম্যালক, রিঅ্যালক ও ফ্রি দিয়ে হিপ মেমোরি পরিচালনা করুন যাতে বাফার পূর্ণ হলে ক্যাপাসিটি দ্বিগুণ হয়। বাউন্ডস চেকিং, পুশ_ব্যাক, পপ_ব্যাক ও এলিমেন্ট রিট্রিভাল ফাংশন লিখুন। ডেলিভারেবল: (ক) ১০,০০০ ইনসার্টেশনে ভালগ্রিন্ডে শূন্য মেমোরি লিক, (খ) নাল অ্যালোকেশন ব্যর্থতার সঠিক হ্যান্ডলিং, এবং (গ) বাফার মেমোরি নিরাপদে মুক্ত করার জন্য কাস্টম ডিস্ট্রাক্টর ফাংশন।'
      },
      difficulty: 'intermediate',
    },
    {
      title: { en: 'Arena Allocator: High-Performance Bump Memory Allocator', bn: 'অ্যারিনা অ্যালোকেটর: উচ্চগতির বাম্প মেমোরি অ্যালোকেটর' },
      brief: {
        en: 'Build a high-performance region-based arena allocator that requests a large contiguous virtual memory block up front and satisfies allocation requests using pointer bumping with proper 8-byte alignment padding. Implement arena_init, arena_alloc, arena_reset, and arena_free functions. Compare throughput against standard malloc across 100,000 tiny struct allocations. Gate: all returned addresses must satisfy CPU alignment constraints with zero individual free() overhead during active loops.',
        bn: 'একটি উচ্চগতির রিজিওন-ভিত্তিক অ্যারিনা অ্যালোকেটর তৈরি করুন যা শুরুতে একবারে একটি বড় মেমোরি ব্লক চেয়ে নেয় এবং ৮-বাইট অ্যালাইনমেন্ট প্যাডিং বজায় রেখে পয়েন্টার বাম্পের মাধ্যমে মেমোরি সরবরাহ করে। arena_init, arena_alloc, arena_reset ও arena_free ফাংশন তৈরি করুন। ১,০০,০০০ ছোট স্ট্রাক্ট বরাদ্দের ক্ষেত্রে সাধারণ ম্যালকের সাথে গতির তুলনা করুন। শর্ত: প্রতিটি ফেরত দেওয়া অ্যাড্রেস সিপিইউ অ্যালাইনমেন্ট পূরণ করবে এবং লুপ চলার সময় কোনো একক ফ্রি() কলের প্রয়োজন হবে না।'
      },
      difficulty: 'advanced',
    },
    {
      title: { en: 'Binary File Parser: Structured Metadata Extractor', bn: 'বাইনারি ফাইল পার্সার: স্ট্রাকচার্ড মেটাডেটা এক্সট্রাক্টর' },
      brief: {
        en: 'Write a systems utility that parses structured binary file headers (such as a custom image format or ELF header) using low-level POSIX file descriptors and standard stdio streams. Read header magic bytes, unpack endianness, extract struct fields using fread, validate internal checksums, and cleanly handle corrupted truncated files. Gate: zero buffer overflows, robust error return codes, and deterministic file stream cleanup.',
        bn: 'একটি সিস্টেম ইউটিলিটি লিখুন যা লো-লেভেল পসিক্স ফাইল ডেসক্রিপ্টর এবং স্ট্যান্ডার্ড স্টাডিও স্ট্রিম ব্যবহার করে স্ট্রাকচার্ড বাইনারি ফাইল হেডার পার্স করে। হেডারের ম্যাজিক বাইট যাচাই করুন, এন্ডিয়াননেস আনপ্যাক করুন, fread দিয়ে স্ট্রাক্ট ফিল্ড পড়ুন, চেকসাম মেলান এবং ক্ষতিগ্রস্ত ফাইলের ত্রুটি নিরাপদে পরিচালনা করুন। শর্ত: শূন্য বাফার ওভারফ্লো, নির্ভরযোগ্য এরর রিটার্ন কোড এবং নিখুঁত ফাইল স্ট্রিম ক্লোজিং।'
      },
      difficulty: 'advanced',
    },
  ],
  bestPractices: [
    {
      en: 'Always pair every malloc/calloc call with a corresponding free(): initialize pointer variables to NULL upon declaration and re-assign freed pointers to NULL to prevent dangerous dangling pointer bugs.',
      bn: 'প্রতিটি ম্যালক/ক্যালক কলের বিপরীতে অবশ্যই একটি ফ্রি() নিশ্চিত করুন: ঘোষণার সময় পয়েন্টার নাল রাখুন এবং ফ্রি করার পর ড্যাংলিং পয়েন্টার এড়াতে পয়েন্টারে আবার নাল সেট করুন।'
    },
    {
      en: 'Pass buffer sizes alongside array pointers in function arguments: in C, arrays decay into bare memory pointers when passed to functions, losing sizeof metadata and exposing programs to buffer overflow vulnerabilities.',
      bn: 'ফাংশনে অ্যারে পয়েন্টার পাঠানোর সময় সর্বদা সাথে সাইজ আর্গুমেন্ট পাঠান: সি-তে ফাংশনে পাঠালে অ্যারে পয়েন্টারে রূপান্তর বা ডিকে হয় এবং সাইজের তথ্য হারিয়ে ফেলে বাফার ওভারফ্লোর ঝুঁকি তৈরি করে।'
    },
    {
      en: 'Always check the return value of memory allocation and file operations: verify malloc() did not return NULL and fopen() did not fail before attempting to dereference memory or read file streams.',
      bn: 'মেমোরি বরাদ্দ ও ফাইল অপারেশনের রিটার্ন মান সর্বদা পরীক্ষা করুন: মেমোরি ব্যবহার বা ফাইল পড়ার আগে যাচাই করুন যে ম্যালক() নাল বা এফওপেন() ফেইল করেনি।'
    },
    {
      en: 'Order struct fields from largest to smallest alignment requirements: grouping 8-byte pointers before 4-byte integers and 1-byte chars minimizes compiler padding and shrinks memory footprint.',
      bn: 'স্ট্রাক্টের ফিল্ডগুলোকে বড় থেকে ছোট অ্যালাইনমেন্টের ক্রমানুসারে সাজান: ৮-বাইটের পয়েন্টার আগে রেখে ৪-বাইটের ইন্টিজার ও ১-বাইটের ক্যারাক্টার সাজালে মেমোরি প্যাডিং কমে এবং আকার ছোট থাকে।'
    },
    {
      en: 'Wrap all macro parameters and macro expressions in parentheses: writing #define SQUARE(x) ((x) * (x)) prevents operator precedence bugs when expressions like a + 1 are passed.',
      bn: 'ম্যাক্রোর প্রতিটি প্যারামিটার ও সম্পূর্ণ এক্সপ্রেশন প্রথম বন্ধনীতে মুড়ে দিন: #define SQUARE(x) ((x) * (x)) লিখলে a + 1-এর মতো গাণিতিক রাশিতে অপারেটর অগ্রাধিকারের মারাত্মক ভুল এড়ানো যায়।'
    },
    {
      en: 'Compile with strict warning flags and memory sanitizers: always pass -Wall -Wextra -Werror -pedantic and use AddressSanitizer (-fsanitize=address) during testing to catch undefined behavior early.',
      bn: 'কঠোর সতর্কবার্তা ও স্যানিটাইজার দিয়ে কোড কম্পাইল করুন: সর্বদা -Wall -Wextra -Werror -pedantic এবং টেস্টিংয়ের সময় AddressSanitizer (-fsanitize=address) ব্যবহার করে জটিল ত্রুটি আগেই শনাক্ত করুন।'
    },
  ],
  interview: [
    {
      q: {
        en: 'Explain what happens during "array decay" in C and how it impacts sizeof expressions.',
        bn: 'সি-তে "অ্যারে ডিকে" (Array Decay) বলতে কী বোঝায় এবং এটি sizeof এক্সপ্রেশনে কী প্রভাব ফেলে?'
      },
      a: {
        en: 'In C, array decay is the automatic conversion of an array name into a pointer to its first element (e.g. &arr[0]) in most expression contexts. When an array is declared locally (int arr[10];), sizeof(arr) evaluates to 40 bytes (10 elements * 4 bytes). However, when passed to a function (void foo(int arr[])), the compiler decays the parameter into a bare pointer (int *arr). Inside foo, sizeof(arr) evaluates to the size of a pointer (8 bytes on a 64-bit CPU) rather than the array buffer size. This is why C functions must accept an explicit size parameter alongside array pointers.',
        bn: 'সি-তে অ্যারে ডিকে হলো এমন একটি প্রক্রিয়া যেখানে অধিকাংশ ক্ষেত্রে কোনো অ্যারের নাম স্বয়ংক্রিয়ভাবে তার প্রথম এলিমেন্টের পয়েন্টারে (&arr[0]) রূপান্তরিত হয়। যখন লোকালি কোনো অ্যারে ঘোষণা করা হয় (int arr[10];), তখন sizeof(arr) পুরো ৪০ বাইট (১০টি উপাদান * ৪ বাইট) মান দেয়। কিন্তু ফাংশনের আর্গুমেন্টে পাঠালে (void foo(int arr[])), কম্পাইলার প্যারামিটারটিকে একটি সাধারণ পয়েন্টারে (int *arr) রূপান্তর করে দেয়। ফলে ফাংশনের ভেতরে sizeof(arr) কেবল একটি পয়েন্টারের আকার (৬৪-বিট প্রসেসরে ৮ বাইট) প্রকাশ করে। এই কারণেই সি ফাংশনে পয়েন্টারের সাথে সর্বদা সুস্পষ্টভাবে সাইজ আর্গুমেন্ট পাঠাতে হয়।'
      },
    },
    {
      q: {
        en: 'What is the difference between malloc(), calloc(), realloc(), and free() in dynamic memory management?',
        bn: 'ডাইনামিক মেমোরি ব্যবস্থাপনায় malloc(), calloc(), realloc(), এবং free()-এর মধ্যে মূল পার্থক্য কী?'
      },
      a: {
        en: 'malloc(size) allocates an uninitialized raw block of heap memory of the requested byte size; its contents contain whatever garbage data previously occupied those physical bytes. calloc(num, size) allocates memory for num elements each of size bytes and explicitly zeros out all allocated memory to zero bits. realloc(ptr, new_size) resizes an existing heap allocation, moving data to a new contiguous memory location if necessary and returning a new pointer. free(ptr) releases the allocated heap memory block back to the operating system allocator, allowing it to be reused.',
        bn: 'malloc(size) হিপ মেমোরি থেকে অনুরোধকৃত সাইজের একটি অশোধিত মেমোরি ব্লক বরাদ্দ করে; এতে আগের আবর্জনা বা গার্বেজ মান থেকে যায়। calloc(num, size) নির্দিষ্ট সংখ্যক উপাদানের জন্য মেমোরি বরাদ্দ করে এবং প্রতিটি বাইটকে সুস্পষ্টভাবে শূন্য (০) বিটে পরিষ্কার করে দেয়। realloc(ptr, new_size) পূর্বে বরাদ্দকৃত মেমোরি ব্লকের আকার ছোট বা বড় করে, প্রয়োজনে নতুন মেমোরি লোকেশনে ডেটা সরিয়ে নেয়। আর free(ptr) ব্যবহৃত মেমোরি অপারেটিং সিস্টেমে ফেরত পাঠায় যাতে ভবিষ্যতে তা পুনরায় ব্যবহার করা যায়।'
      },
    },
    {
      q: {
        en: 'What causes struct padding and memory alignment requirements in modern CPUs?',
        bn: 'আধুনিক সিপিইউতে স্ট্রাক্ট প্যাডিং ও মেমোরি অ্যালাইনমেন্টের প্রয়োজনীয়তা কেন দেখা দেয়?'
      },
      a: {
        en: 'Modern hardware architectures read memory in words (typically 4 or 8 bytes) across aligned address boundaries. Fetching an unaligned 4-byte integer spanning two memory word boundaries requires two separate bus read cycles and bitwise shifting, significantly degrading CPU performance (or causing hardware bus errors on architectures like ARM). To ensure optimal memory access, C compilers insert invisible padding bytes between struct fields so each member begins at an address divisible by its natural alignment. Developers can minimize padding by ordering struct fields from largest alignment down to smallest.',
        bn: 'আধুনিক হার্ডওয়্যারে সিপিইউ নির্দিষ্ট ওয়ার্ড সাইজে (সাধারণত ৪ বা ৮ বাইট) অ্যালাইনড অ্যাড্রেস থেকে মেমোরি পড়ে। কোনো ৪-বাইটের ডেটা যদি দুটি ওয়ার্ডের সীমানায় অসঙ্গতভাবে থাকে, তবে তা পড়তে সিপিইউকে দুটি পৃথক বাস সাইকেল চালাতে হয়, যা গতি অনেক কমিয়ে দেয় (বা এআরএম আর্কিটেকচারে সরাসরি হার্ডওয়্যার বাস এরর ঘটায়)। দ্রুতগতির অ্যাক্সেস নিশ্চিতে সি কম্পাইলার স্ট্রাক্ট ফিল্ডগুলোর মাঝে অদৃশ্য প্যাডিং বাইট যোগ করে যাতে প্রতিটি সদস্য তার নিজস্ব গুণিতক অ্যাড্রেসে শুরু হয়। ডেভেলপাররা বড় সাইজের ফিল্ডগুলো আগে এবং ছোটগুলো পরে সাজিয়ে এই মেমোরি অপচয় অনেক কমাতে পারেন।'
      },
    },
    {
      q: {
        en: 'What is the purpose of header guards (#ifndef, #define, #endif) in C header files?',
        bn: 'সি হেডার ফাইলে হেডার গার্ড (#ifndef, #define, #endif)-এর উদ্দেশ্য কী?'
      },
      a: {
        en: 'When a C project contains multiple source files and interdependent headers, the same header file may be transitively included multiple times within a single translation unit. Without protection, this causes the compiler to process duplicate struct, enum, and typedef declarations, throwing "redefinition of type" compilation errors. Header guards wrap the entire file in conditional preprocessor directives, ensuring the preprocessor only includes the file body once per translation unit regardless of how many times it is referenced.',
        bn: 'যখন কোনো সি প্রজেক্টে একাধিক সোর্স ফাইল থাকে এবং তাদের মাঝে পারস্পরিক নির্ভরতা থাকে, তখন একটি হেডার ফাইল একই কম্পাইলেশন ইউনিটে একাধিকবার ইনক্লুড হয়ে যেতে পারে। কোনো সুরক্ষা না থাকলে কম্পাইলার একই স্ট্রাক্ট বা টাইপের দ্বৈত ঘোষণা দেখে "redefinition of type" এরর দিয়ে বিল্ড বন্ধ করে দেয়। হেডার গার্ড পুরো ফাইলটিকে শর্তাধীন প্রিপ্রসেসর নির্দেশনায় মুড়ে রাখে, যার ফলে একটি ফাইলে যতবারই হেডার ডাকা হোক না কেন, প্রিপ্রসেসর কেবল একবারই তার কোড অন্তর্ভুক্ত করে।'
      },
    },
  ],
  realWorld: [
    {
      en: 'Linux Kernel & Device Drivers: The Linux operating system kernel and its hardware device drivers are authored almost entirely in C, leveraging direct pointer manipulation, custom bitfields, and explicit memory mapping.',
      bn: 'লিনাক্স কার্নেল ও ডিভাইস ড্রাইভার: লিনাক্স অপারেটিং সিস্টেমের কার্নেল এবং হার্ডওয়্যার ডিভাইস ড্রাইভারগুলো প্রায় পুরোটাই সি-তে লেখা, যা সরাসরি পয়েন্টার, কাস্টম বিটফিল্ড এবং মেমোরি ম্যাপিংয়ের সর্বোচ্চ সদ্ব্যবহার করে।'
    },
    {
      en: 'Relational Database Engines: SQLite and PostgreSQL rely on C for zero-overhead B-tree indexing, manual buffer pool memory management, and deterministic query execution speed.',
      bn: 'রিলেশনাল ডেটাবেজ ইঞ্জিন: SQLite এবং PostgreSQL তাদের বি-ট্রি ইনডেক্সিং, বাফার পুল মেমোরি ব্যবস্থাপনা এবং বিদ্যুৎগতির কোয়েরি এক্সিকিউশনের জন্য সি ভাষার ওপর সম্পূর্ণ নির্ভরশীল।'
    },
    {
      en: 'Programming Language Runtimes: Core runtimes and interpreters—including Python (CPython), Ruby (MRI), and Node.js V8 engine bindings—are engineered in C for direct operating system interoperability.',
      bn: 'প্রোগ্রামিং ল্যাঙ্গুয়েজ রানটাইম: পাইথনের CPython, রুবি ও নোড.জেএস V8 ইঞ্জিনের কোর বাইন্ডিংগুলো সরাসরি অপারেটিং সিস্টেমের সাথে যোগাযোগের জন্য সি-তে তৈরি করা হয়েছে।'
    },
    {
      en: 'Embedded Systems & Flight Controllers: Automotive engine control units (ECUs), medical telemetry devices, and aerospace flight computers run bare-metal C without runtime garbage collectors.',
      bn: 'এমবেডেড সিস্টেম ও ফ্লাইট কন্ট্রোলার: অটোমোবাইল ইঞ্জিন কন্ট্রোল ইউনিট (ECU), মেডিকেল ডিভাইস ও মহাকাশযানের ফ্লাইট কম্পিউটারগুলো কোনো গার্বেজ কালেক্টরের ঝুঁকি ছাড়া সরাসরি পিওর সি-তে চলে।'
    },
  ],
  lessons: [
    CAndThePointerLesson,
    ArraysAndTheDecayLesson,
    FunctionsAndTheFrameLesson,
    StructsAndTheUnionLesson,
    MemoryAndTheMallocLesson,
    FilesAndTheFdLesson,
    PreprocessorAndTheMacroLesson,
    TheBinaryForgeLesson,
  ],
  references: [],
};
