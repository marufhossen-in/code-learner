import type { Lesson } from '../../../lib/types';

export const FilesAndTheFdLesson: Lesson = {
  slug: 'files-and-the-fd',
  tech: 'c',
  title: {
    en: 'File I/O, File Descriptors & System Calls — POSIX Streams & Buffers',
    bn: 'ফাইল I/O, ফাইল ডেসক্রিপ্টর ও সিস্টেম কল — পসিক্স স্ট্রিম ও বাফার'
  },
  summary: {
    en: 'File input and output in C operates across two distinct hardware and architectural tiers: high-level buffered streams (stdio.h) and low-level kernel system calls (unistd.h). High-level functions like fopen(), fread(), fwrite(), and fprintf() utilize FILE* structures equipped with user-space memory buffers, dramatically improving throughput by amortizing expensive CPU kernel traps across batch disk operations. Conversely, low-level POSIX calls like open(), read(), write(), and close() communicate directly with kernel file descriptor tables via non-negative integers (0 for stdin, 1 for stdout, 2 for stderr). Mastering stream buffering, explicit fflush() boundaries, and binary mode ("rb"/"wb") file operations guarantees robust, high-performance data persistence.',
    bn: 'সি-তে ফাইল ইনপুট ও আউটপুট দুটি স্বতন্ত্র আর্কিটেকচারাল স্তরে কাজ করে: হাই-লেভেল বাফারযুক্ত স্ট্রিম (stdio.h) এবং লো-লেভেল কার্নেল সিস্টেম কল (unistd.h)। fopen(), fread(), fwrite() ও fprintf()-এর মতো উচ্চ স্তরের ফাংশনগুলো FILE* কাঠামোর মাধ্যমে ইউজার-স্পেস মেমোরি বাফার ব্যবহার করে, যা প্রতি বাইটে সিপিইউ কার্নেল ট্র্যাপ এড়িয়ে ব্যাচ অপারেশনের মাধ্যমে ফাইলের গতি নাটকীয়ভাবে বৃদ্ধি করে। অন্যদিকে open(), read(), write() ও close()-এর মতো লো-লেভেল পসিক্স সিস্টেম কলগুলো সরাসরি অঋণাত্মক পূর্ণসংখ্যার ফাইল ডেসক্রিপ্টর টেবিল ব্যবহার করে কার্নেলের সাথে কথা বলে (stdin-এর জন্য ০, stdout-এর জন্য ১, stderr-এর জন্য ২)। স্ট্রিম বাফারিং, সঠিক fflush() ব্যবহার এবং বাইনারি মোড ("rb"/"wb") অপারেশনে দক্ষতা অর্জন উচ্চগতির নিরাপদ ফাইল সংরক্ষণ নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: User-Space Streams and Kernel Descriptors',
        bn: 'মূল ধারণা: ইউজার-স্পেস স্ট্রিম ও কার্নেল ডেসক্রিপ্টর'
      }
    },
    {
      type: 'visual',
      id: 'execution'
    },
    {
      type: 'para',
      text: {
        en: 'When you design input and output subsystems in C, understanding the boundary between user-space programs and the operating system kernel is essential. In languages like Python, file operations are abstracted behind high-level file objects. In C systems programming, I/O exists at two distinct mechanical levels: buffered standard library streams that minimize expensive context switches, and low-level Portable Operating System Interface (POSIX) file descriptors that speak directly to kernel device tables.',
        bn: 'সি ভাষায় যখন আপনি ইনপুট ও আউটপুট সাবসিস্টেম তৈরি করেন, তখন ইউজার-স্পেস প্রোগ্রাম এবং অপারেটিং সিস্টেম কার্নেলের মধ্যকার বিভাজন বোঝা আবশ্যক। পাইথনের মতো ভাষায় ফাইল অপারেশনগুলো হাই-লেভেল ফাইল অবজেক্টের আড়ালে সাজানো থাকে। কিন্তু সি সিস্টেম প্রোগ্রামিংয়ে ফাইল I/O দুটি সুস্পষ্ট স্তরে কাজ করে: বাফারযুক্ত স্ট্যান্ডার্ড লাইব্রেরি স্ট্রিম যা অতিরিক্ত কনটেক্সট সুইচ প্রতিরোধ করে। এবং লো-লেভেল পোর্টেবল অপারেটিং সিস্টেম ইন্টারফেস (POSIX) ফাইল ডেসক্রিপ্টর যা সরাসরি অপারেটিং সিস্টেম কার্নেল টেবিলের সাথে যোগাযোগ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'File Descriptor (fd)',
          def: {
            en: 'A non-negative integer handle indexing an open file entry within the operating system kernel per-process open file table',
            bn: 'একটি অঋণাত্মক পূর্ণসংখ্যা যা অপারেটিং সিস্টেম কার্নেলে কোনো প্রসেসের উন্মুক্ত ফাইল তালিকার সুনির্দিষ্ট ইনডেক্স নির্দেশ করে'
          }
        },
        {
          term: 'FILE* Stream',
          def: {
            en: 'A C standard library structure encapsulating an underlying file descriptor with an internal user-space memory buffer',
            bn: 'সি স্ট্যান্ডার্ড লাইব্রেরির একটি কাঠামো যা মূল ফাইল ডেসক্রিপ্টরের সাথে একটি ইউজার-স্পেস মেমোরি বাফার যুক্ত করে পরিচালিত হয়'
          }
        },
        {
          term: 'User-Space Buffering',
          def: {
            en: 'Accumulating individual byte reads or writes in application RAM before flushing them to disk via a single batched system call',
            bn: 'অ্যাপ্লিকেশনের মেমোরিতে একাধিক বাইট জমা করে একবারে একটি মাত্র ব্যাচ সিস্টেম কলের মাধ্যমে ডিস্কে লেখার প্রক্রিয়া'
          }
        },
        {
          term: 'Kernel System Call',
          def: {
            en: 'A programmatic request triggering a hardware CPU privilege level switch (ring 3 to ring 0) to invoke kernel OS services',
            bn: 'সিপিইউকে ইউজার মোড থেকে কার্নেল মোডে নিয়ে গিয়ে অপারেটিং সিস্টেমের মূল সেবা ব্যবহারের সরাসরি হার্ডওয়্যার অনুরোধ'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'standard-descriptors',
      text: {
        en: 'The Three Standard Streams: stdin, stdout, and stderr',
        bn: 'তিনটি স্ট্যান্ডার্ড স্ট্রিম: stdin, stdout ও stderr'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every C process launches with three pre-opened file descriptors managed by the operating system: descriptor 0 is standard input (stdin), descriptor 1 is standard output (stdout), and descriptor 2 is standard error (stderr).',
        bn: 'অপারেটিং সিস্টেমে প্রতিটি সি প্রসেস শুরু হওয়ার সময় তিনটি স্ট্যান্ডার্ড ফাইল ডেসক্রিপ্টর স্বয়ংক্রিয়ভাবে উন্মুক্ত থাকে: ডেসক্রিপ্টর ০ হলো স্ট্যান্ডার্ড ইনপুট (stdin), ডেসক্রিপ্টর ১ হলো স্ট্যান্ডার্ড আউটপুট (stdout) এবং ডেসক্রিপ্টর ২ হলো স্ট্যান্ডার্ড এরর (stderr)।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While stdout is typically line-buffered or block-buffered to maximize terminal throughput, stderr is intentionally unbuffered by default. This architectural choice guarantees that panic diagnostics and fatal error messages appear on the console immediately even if a program crashes milliseconds later.',
        bn: 'টার্মিনাল আউটপুটের গতি বাড়াতে stdout সাধারণত লাইন-বাফারযুক্ত থাকলেও, stderr-কে ইচ্ছাকৃতভাবে সম্পূর্ণ বাফারহীন রাখা হয়। এই কাঠামোগত সিদ্ধান্তের ফলে কোনো প্রোগ্রাম হঠাৎ ক্র্যাশ করার উপক্রম হলেও তার জরুরি এরর মেসেজটি বাফারে আটকে না থেকে তৎক্ষণাৎ কনসোলে প্রদর্শিত হয়।'
      }
    },
    {
      type: 'heading',
      id: 'buffering-performance',
      text: {
        en: 'Buffering Mechanics: Why Direct Syscalls Kill Performance',
        bn: 'বাফারিং কৌশল: সরাসরি সিস্টেম কল কেন পারফরম্যান্স নষ্ট করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Issuing a POSIX write(fd, buffer, 1) system call for every individual byte forces the CPU to switch context from user mode (ring 3) to privileged kernel mode (ring 0) on every single character. Executing 100 byte writes directly generates 100 costly kernel context switches.',
        bn: 'প্রতিটি একক বাইটের জন্য সরাসরি write(fd, buffer, 1) সিস্টেম কল করলে সিপিইউকে প্রতি অক্ষরে ইউজার মোড থেকে সুবিধাপ্রাপ্ত কার্নেল মোডে কনটেক্সট সুইচ করতে হয়। এভাবে ১০০টি বাইট আলাদাভাবে লিখলে ১০০টি ব্যয়বহুল কার্নেল কনটেক্সট সুইচ ঘটে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In contrast, the standard library FILE* stream accumulates individual characters in an internal memory buffer (typically 4096 bytes). Writing 100 characters into a 64-byte simulated buffer triggers only 2 batched kernel system calls, delivering a massive 50-fold reduction in operating system context switches.',
        bn: 'অন্যদিকে স্ট্যান্ডার্ড লাইব্রেরির FILE* স্ট্রিম প্রতিটি অক্ষরকে একটি অভ্যন্তরীণ মেমোরি বাফারে (সাধারণত ৪০৯৬ বাইট) জমা রাখে। ৬৪-বাইটের বাফারে ১০০টি অক্ষর লিখলে মাত্র ২টি ব্যাচ কার্নেল সিস্টেম কল চালিত হয়, যা সিস্টেম কলের সংখ্যায় ৫০ গুণ সাশ্রয় নিশ্চিত করে।'
      }
    },
    {
      type: 'heading',
      id: 'binary-vs-text',
      text: {
        en: 'Binary vs Text Mode: Preserving Exact Byte Integrity',
        bn: 'বাইনারি বনাম টেক্সট মোড: অক্ষত বাইটের নির্ভুলতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Opening files in text mode (e.g. "r" or "w") allows the runtime to perform operating system specific character translations, such as transforming newline characters into carriage return pairs on Windows platforms. While harmless for human-readable plain text, this translation corrupts binary data formats.',
        bn: 'টেক্সট মোডে (যেমন "r" বা "w") ফাইল খুললে রানটাইম অপারেটিং সিস্টেমের নিজস্ব নিয়মে ক্যারেক্টার পরিবর্তন করতে পারে, যেমন উইন্ডোজে নিউলাইনকে ক্যারেজ রিটার্নে রূপান্তর করা। মানুষের পড়ার উপযোগী টেক্সটের জন্য এটি স্বাভাবিক হলেও, বাইনারি ডেটার ক্ষেত্রে এই রূপান্তর ফাইলকে স্থায়ীভাবে নষ্ট করে দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When parsing image files, compiled binary executables, compressed zip archives, or custom struct data, always open files with binary flags ("rb" or "wb") and transfer data using fread() and fwrite() to preserve byte-for-byte fidelity.',
        bn: 'ইমেজ ফাইল, কম্পাইল করা বাইনারি কোড, জিপ আর্কাইভ বা কাস্টম স্ট্রাক্ট ফাইল পড়ার সময় সর্বদা বাইনারি ফ্ল্যাগ ("rb" বা "wb") দিয়ে ফাইল খুলুন এবং fread() ও fwrite() ব্যবহার করে নিখুঁত বাইট-টু-বাইট ডেটা আদান-প্রদান নিশ্চিত করুন।'
      }
    },
    {
      type: 'heading',
      id: 'comparison-table',
      text: {
        en: 'Architectural Comparison: High-Level FILE* Streams vs Low-Level POSIX Descriptors',
        bn: 'কাঠামোগত তুলনা: হাই-লেভেল FILE* স্ট্রিম বনাম লো-লেভেল পসিক্স ডেসক্রিপ্টর'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'C Standard FILE* Streams', bn: 'সি স্ট্যান্ডার্ড FILE* স্ট্রিম' },
        { en: 'POSIX Low-Level Descriptors', bn: 'পসিক্স লো-লেভেল ডেসক্রিপ্টর' }
      ],
      rows: [
        [
          { en: 'Header and API', bn: 'হেডার ও এপিআই' },
          { en: '<stdio.h> (fopen, fclose, fread, fwrite)', bn: '<stdio.h> (fopen, fclose, fread, fwrite)' },
          { en: '<unistd.h>, <fcntl.h> (open, close, read, write)', bn: '<unistd.h>, <fcntl.h> (open, close, read, write)' }
        ],
        [
          { en: 'Buffering Layer', bn: 'বাফারিং স্তর' },
          { en: 'Automatic user-space memory buffer in application RAM', bn: 'অ্যাপ্লিকেশন র্যামে স্বয়ংক্রিয় ইউজার-স্পেস বাফার' },
          { en: 'Zero user buffering; immediate kernel trap per call', bn: 'কোনো বাফার নেই; প্রতি কলেই সরাসরি কার্নেল ট্র্যাপ' }
        ],
        [
          { en: 'Handle Representation', bn: 'হ্যান্ডেল রূপ' },
          { en: 'Opaque pointer to FILE struct (FILE *)', bn: 'FILE স্ট্রাক্টের অপেক পয়েন্টার (FILE *)' },
          { en: 'Raw non-negative integer (int fd)', bn: 'অঋণাত্মক পূর্ণসংখ্যার সূচক (int fd)' }
        ],
        [
          { en: 'Primary Architecture Role', bn: 'প্রধান সিস্টেম ভূমিকা' },
          { en: 'General file parsing, formatted text logs, portable code', bn: 'সাধারণ ফাইল পার্সিং, ফরম্যাটেড টেক্সট ও পোর্টেবল কোড' },
          { en: 'Network sockets, pipes, IPC channels, raw device drivers', bn: 'নেটওয়ার্ক সকেট, পাইপ, আইপিসি ও র\' ডিভাইস ড্রাইভার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'simulation',
      text: {
        en: 'Practical Code Simulation: Buffered Stream I/O vs POSIX Syscalls',
        bn: 'বাস্তব কোড সিমুলেশন: বাফারযুক্ত স্ট্রিম I/O বনাম পসিক্স সিস্টেম কল'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Lightweight Simulation of C Buffered Stream I/O vs Direct POSIX Syscalls in Node.js

class BufferedStreamSimulator {
  public buffer: string[] = [];
  public kernelSyscalls = 0;
  public bytesWrittenToDisk = 0;

  constructor(public bufferSize = 64) {}

  writeChar(char: string) {
    this.buffer.push(char);
    if (this.buffer.length >= this.bufferSize) {
      this.flush();
    }
  }

  flush() {
    if (this.buffer.length > 0) {
      this.kernelSyscalls += 1;
      this.bytesWrittenToDisk += this.buffer.length;
      this.buffer = [];
    }
  }
}

// Comparison simulation
const stream = new BufferedStreamSimulator(64);

// Write 100 individual characters through buffered stream
for (let i = 0; i < 100; i++) {
  stream.writeChar('A');
}
// Flush remaining buffer
stream.flush();

// Direct unbuffered POSIX syscall count for the same 100 writes
const directSyscalls = 100;

console.log('Total characters written to simulated disk file:', stream.bytesWrittenToDisk);
// -> Total characters written to simulated disk file: 100
console.log('Kernel system calls triggered by buffered stream I/O:', stream.kernelSyscalls);
// -> Kernel system calls triggered by buffered stream I/O: 2
console.log('Kernel system calls required by direct unbuffered write():', directSyscalls);
// -> Kernel system calls required by direct unbuffered write(): 100
console.log('System call reduction factor through user-space buffering:', directSyscalls / stream.kernelSyscalls);
// -> System call reduction factor through user-space buffering: 50
console.log('Standard POSIX file descriptor for stdout:', 1);
// -> Standard POSIX file descriptor for stdout: 1`,
      caption: {
        en: 'Simulation: writing 100 characters via buffered stream triggers only 2 syscalls vs 100 direct syscalls (50x reduction); stdout fd is 1',
        bn: 'সিমুলেশন: বাফারযুক্ত স্ট্রিমে ১০০ ক্যারেক্টার লিখলে ১০০টির বদলে মাত্র ২টি সিস্টেম কল লাগে (৫০ গুণ সাশ্রয়); stdout fd হলো ১'
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
        en: 'Rule 1: Always check for NULL after calling fopen() and check for -1 after open(). Assuming files exist or permissions are granted triggers segmentation faults during production execution.',
        bn: 'নিয়ম ১: fopen() ডাকার পর সর্বদা NULL এবং open() ডাকার পর -1 কিনা পরীক্ষা করুন। ফাইল বিদ্যমান বা অনুমতি আছে ধরে নিলে রানটাইমে সিস্টেম ক্র্যাশ ঘটবে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 2: Close every open file handle via fclose() or close() in all exit paths. File descriptor leaks exhaust process limits (ulimit -n) and block subsequent socket or file connections.',
        bn: 'নিয়ম ২: ফাংশন শেষ হওয়ার প্রতিটি পথে fclose() বা close() দিয়ে ফাইল বন্ধ করুন। ফাইল ডেসক্রিপ্টর লিক হলে প্রসেসের সীমা (ulimit -n) ফুরিয়ে নতুন কানেকশন বন্ধ হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 3: Use explicit fflush(stream) before fork() or critical checkpoints. Flushing guarantees all pending buffered bytes in application RAM are securely committed down to the kernel.',
        bn: 'নিয়ম ৩: fork() বা গুরুত্বপূর্ণ চেকপয়েন্টের আগে স্পষ্টভাবে fflush(stream) ব্যবহার করুন। ফ্লাশ করলে ইউজার মেমোরির সমস্ত পেন্ডিং ডেটা কার্নেলে নিরাপদে লেখা নিশ্চিত হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rule 4: Use binary mode ("rb"/"wb") for all non-text data structures. Binary mode prevents newline conversions and byte corruptions when reading structs, serialized payloads, and binary files.',
        bn: 'নিয়ম ৪: যেকোনো নন-টেক্সট ডেটা সংরক্ষণে বাইনারি মোড ("rb"/"wb") ব্যবহার করুন। এটি স্ট্রাক্ট বা বাইনারি ফাইল পড়ার সময় স্বয়ংক্রিয় নিউলাইন রূপান্তরজনিত ডেটা বিপর্যয় রোধ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'c-file-ex1',
      kind: 'mcq',
      topic: 'Standard POSIX file descriptor numbers',
      question: {
        en: 'What are the numerical values of the standard file descriptors stdin, stdout, and stderr in C POSIX systems?',
        bn: 'সি পসিক্স সিস্টেমে স্ট্যান্ডার্ড ফাইল ডেসক্রিপ্টর stdin, stdout এবং stderr-এর সংখ্যাসূচক মান কত?'
      },
      options: [
        {
          en: 'stdin is 0, stdout is 1, and stderr is 2',
          bn: 'stdin হলো ০, stdout হলো ১ এবং stderr হলো ২'
        },
        {
          en: 'stdin is 10, stdout is 20, and stderr is 30',
          bn: 'stdin হলো ১০, stdout হলো ২০ এবং stderr হলো ৩০'
        },
        {
          en: 'stdin is -1, stdout is -2, and stderr is -3',
          bn: 'stdin হলো -১, stdout হলো -২ এবং stderr হলো -৩'
        },
        {
          en: 'All three share file descriptor 999',
          bn: 'তিনটিই ৯৯৯ নম্বর ফাইল ডেসক্রিপ্টর ভাগ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sequential non-negative integers starting at zero.',
        bn: 'শূন্য থেকে শুরু হওয়া ধারাবাহিক অঋণাত্মক পূর্ণসংখ্যার কথা ভাবুন।'
      },
      explanation: {
        en: 'By POSIX standard, 0 is STDIN_FILENO, 1 is STDOUT_FILENO, and 2 is STDERR_FILENO for all active processes.',
        bn: 'পসিক্স স্ট্যান্ডার্ড অনুযায়ী প্রতিটি প্রসেসে ০ হলো STDIN_FILENO, ১ হলো STDOUT_FILENO এবং ২ হলো STDERR_FILENO।'
      }
    },
    {
      id: 'c-file-ex2',
      kind: 'mcq',
      topic: 'Why buffered FILE* stream I/O outperforms direct syscalls',
      question: {
        en: 'Why is writing 100 individual characters with fputc() significantly faster than calling write(fd, &c, 1) directly in a loop?',
        bn: 'একটি লুপে বারবার সরাসরি write(fd, &c, 1) ডাকার চেয়ে fputc() দিয়ে ১০০টি অক্ষর লেখা কেন অনেক দ্রুতগতির হয়?'
      },
      options: [
        {
          en: 'fputc() buffers characters in user-space RAM and executes only 1 or 2 batched kernel system calls, avoiding costly CPU user-to-kernel context switches on every byte',
          bn: 'fputc() অক্ষরগুলোকে ইউজার-স্পেস মেমোরি বাফারে জমা করে মাত্র ১ বা ২টি ব্যাচ কার্নেল সিস্টেম কল করে, ফলে প্রতি বাইটে অতিরিক্ত কনটেক্সট সুইচ এড়ানো সম্ভব হয়'
        },
        {
          en: 'Because fputc() deletes the characters without writing to disk',
          bn: 'কারণ fputc() ডিস্কে না লিখে অক্ষরগুলো মুছে ফেলে'
        },
        {
          en: 'Because write() is an invalid C command that does not exist',
          bn: 'কারণ write() একটি অবৈধ সি কমান্ড যা আসলে অস্তিত্বহীন'
        },
        {
          en: 'Because fputc() uses artificial intelligence to predict characters',
          bn: 'কারণ fputc() কৃত্রিম বুদ্ধিমত্তা ব্যবহার করে আগে থেকেই অক্ষর অনুমান করে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'User-space buffering amortizes system call context switches.',
        bn: 'ইউজার-স্পেস মেমোরি বাফার সিস্টেম কলের ওভারহেড কমিয়ে আনে।'
      },
      explanation: {
        en: 'Each system call causes a hardware context switch. Buffering in user-space bundles multiple writes into a single kernel call, reducing CPU overhead.',
        bn: 'প্রতিটি সিস্টেম কল একটি হার্ডওয়্যার কনটেক্সট সুইচ ঘটায়। বাফারিং একাধিক লেখাকে একটি মাত্র কলে রূপান্তর করে সিপিইউ ওভারহেড কমায়।'
      }
    },
    {
      id: 'c-file-ex3',
      kind: 'mcq',
      topic: 'The purpose of the fflush() function',
      question: {
        en: 'What does calling fflush(fp) accomplish on an output stream in C?',
        bn: 'সি-তে আউটপুট স্ট্রিমে fflush(fp) কল করলে মূলত কী ঘটে?'
      },
      options: [
        {
          en: 'It immediately forces any unwritten data currently lingering in the user-space stream buffer to be written down to the underlying kernel file descriptor',
          bn: 'এটি ইউজার-স্পেস মেমোরি বাফারে আটকে থাকা যেকোনো ডেটাকে অবিলম্বে কার্নেল ফাইল ডেসক্রিপ্টরে লিখে ফেলার নির্দেশ দেয়'
        },
        {
          en: 'It deletes the file from the hard drive permanently',
          bn: 'এটি হার্ডড্রাইভ থেকে ফাইলটি স্থায়ীভাবে মুছে ফেলে'
        },
        {
          en: 'It flushes the toilet in the computer building',
          bn: 'এটি কম্পিউটার ভবনের শৌচাগার ফ্লাশ করে'
        },
        {
          en: 'It converts the text file into an MP3 music track',
          bn: 'এটি টেক্সট ফাইলটিকে একটি এমপিথ্রি অডিও গানে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Emptying pending buffered data out to the operating system.',
        bn: 'বাফারে আটকে থাকা ডেটা অপারেটিং সিস্টেমের কাছে অবিলম্বে পাঠিয়ে দেওয়া।'
      },
      explanation: {
        en: 'fflush() writes all buffered user-space data to the underlying descriptor, ensuring changes are committed even if the program terminates unexpectedly.',
        bn: 'fflush() সমস্ত বাফার করা ইউজার ডেটা কার্নেল ফাইলে পাঠিয়ে দেয়, যার ফলে অপ্রত্যাশিত ক্র্যাশের আগেই ডেটা সংরক্ষিত থাকে।'
      }
    },
    {
      id: 'c-file-ex4',
      kind: 'mcq',
      topic: 'Binary mode vs text mode for non-text data structures',
      question: {
        en: 'Why must binary files (such as images, compiled binaries, or serialized structs) always be opened with binary mode flags ("rb" or "wb")?',
        bn: 'বাইনারি ফাইল (যেমন ছবি, কম্পাইল করা কোড বা সিরিয়ালাইজড স্ট্রাক্ট) সর্বদা বাইনারি মোড ফ্ল্যাগ ("rb" বা "wb") দিয়ে খোলা কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'Text mode automatically converts line-feed characters into carriage-return pairs on some operating systems, which corrupts raw binary bytes',
          bn: 'টেক্সট মোডে খুললে কিছু অপারেটিং সিস্টেম নিজে থেকেই নিউলাইন ক্যারেক্টার বদলে দেয়, যা র\' বাইনারি ডেটা স্থায়ীভাবে নষ্ট করে ফেলে'
        },
        {
          en: 'Because computers cannot read binary numbers unless told in the file mode',
          bn: 'কারণ ফাইল মোডে স্পষ্ট না বললে কম্পিউটার বাইনারি সংখ্যা পড়তে পারে না'
        },
        {
          en: 'Because binary mode encrypts the file with a 100-character password',
          bn: 'কারণ বাইনারি মোড ১০০ অক্ষরের পাসওয়ার্ড দিয়ে ফাইল এনক্রিপ্ট করে'
        },
        {
          en: 'Binary mode makes files 500 times smaller on disk',
          bn: 'বাইনারি মোড ডিস্কে ফাইলের আকার ৫০০ গুণ ছোট করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preventing unwanted line-ending character transformations.',
        bn: 'অনিচ্ছাকৃত নিউলাইন রূপান্তরের ক্ষতি প্রতিরোধ করার কথা ভাবুন।'
      },
      explanation: {
        en: 'In text mode, platforms like Windows translate \\n into \\r\\n and interpret byte 0x1A as EOF, corrupting binary formats. Binary mode guarantees raw byte fidelity.',
        bn: 'টেক্সট মোডে উইন্ডোজের মতো সিস্টেমে \\n কে \\r\\n-এ রূপান্তর করা হয় এবং 0x1A বাইটকে ফাইলের সমাপ্তি ধরা হয়। বাইনারি মোড নিখুঁত বাইট নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'files-and-the-fd-quiz',
    title: {
      en: 'File I/O & File Descriptors Quiz',
      bn: 'ফাইল I/O ও ফাইল ডেসক্রিপ্টর কুইজ'
    },
    questions: [
      {
        id: 'q-file-descriptor-leak-hazard',
        kind: 'mcq',
        topic: 'Consequences of file descriptor exhaustion and resource leaks',
        question: {
          en: 'What failure occurs when a network server repeatedly opens sockets or files without calling close() or fclose()?',
          bn: 'কোনো নেটওয়ার্ক সার্ভার যদি বারবার সকেট বা ফাইল খুলে close() বা fclose() না করে তবে কোন ব্যর্থতা ঘটে?'
        },
        options: [
          {
            en: 'The process exhausts its allocated file descriptor table limit (EMFILE / "Too many open files"), causing all subsequent socket accepts and file open calls to fail',
            bn: 'প্রসেসের নির্ধারিত ফাইল ডেসক্রিপ্টর সীমা (EMFILE / "Too many open files") ফুরিয়ে যায়, যার ফলে নতুন সব সকেট গ্রহণ ও ফাইল খোলার চেষ্টা ব্যর্থ হয়'
          },
          {
            en: 'The computer monitor starts printing files onto paper',
            bn: 'কম্পিউটার মনিটর নিজে থেকেই কাগজে ফাইল প্রিন্ট করতে শুরু করে'
          },
          {
            en: 'The operating system deletes all passwords stored on the computer',
            bn: 'অপারেটিং সিস্টেম কম্পিউটারের সমস্ত সংরক্ষিত পাসওয়ার্ড মুছে দেয়'
          },
          {
            en: 'The network connection speed increases by 100 percent',
            bn: 'ইন্টারনেট কানেকশনের গতি শতভাগ বৃদ্ধি পায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Exhausting the kernel per-process descriptor limit.',
          bn: 'কার্নেলের নির্ধারিত সর্বোচ্চ ফাইল ডেসক্রিপ্টরের সীমা শেষ হয়ে যাওয়া।'
        },
        explanation: {
          en: 'Operating systems enforce a per-process open file limit (ulimit -n). Leaking file descriptors causes the process to hit EMFILE, rejecting new connections and files.',
          bn: 'অপারেটিং সিস্টেম প্রতিটি প্রসেসের জন্য নির্দিষ্ট ফাইল সীমা (ulimit -n) বেঁধে দেয়। ডেসক্রিপ্টর লিক হলে EMFILE ত্রুটির কারণে সার্ভার নতুন কোনো ফাইল বা কানেকশন নিতে পারে না।'
        }
      },
      {
        id: 'q-unbuffered-stderr-purpose',
        kind: 'mcq',
        topic: 'Why stderr is unbuffered by default in C',
        question: {
          en: 'Why is stderr intentionally left unbuffered by default in the C runtime library?',
          bn: 'সি রানটাইম লাইব্রেরিতে কেন stderr-কে ইচ্ছাকৃতভাবে শুরু থেকেই বাফারহীন রাখা হয়?'
        },
        options: [
          {
            en: 'To guarantee that critical error diagnostics appear immediately on the terminal without delay, even if the program terminates abnormally before a buffer flush occurs',
            bn: 'যাতে বাফার ফ্লাশ হওয়ার আগেই প্রোগ্রাম ক্র্যাশ করলেও জরুরি এরর মেসেজটি তাৎক্ষণিকভাবে কোনো বিলম্ব ছাড়াই টার্মিনালে প্রদর্শিত হতে পারে'
          },
          {
            en: 'Because stderr can only output red colored text',
            bn: 'কারণ stderr কেবল লাল রঙের টেক্সট প্রদর্শন করতে পারে'
          },
          {
            en: 'To make error messages take up 0 bytes of RAM memory',
            bn: 'এরর মেসেজ যাতে মেমোরিতে শূন্য বাইট জায়গা নেয় তা নিশ্চিত করতে'
          },
          {
            en: 'Because error messages are not allowed to be saved to disk',
            bn: 'কারণ কোনো এরর মেসেজ হার্ডডিস্কে সেভ করার অনুমতি নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Errors must not get trapped in a buffer during a crash.',
          bn: 'প্রোগ্রাম ক্র্যাশের সময় জরুরি বার্তা যেন বাফারে আটকে না থাকে।'
        },
        explanation: {
          en: 'If stderr were buffered, fatal errors before a crash would sit unwritten in memory. Unbuffered stderr ensures immediate output to the console.',
          bn: 'stderr বাফার করা থাকলে ক্র্যাশের সময় গুরুত্বপূর্ণ এরর মেমোরিতেই আটকে থাকত। বাফারহীন থাকায় তা সাথে সাথে কনসোলে দেখা যায়।'
        }
      },
      {
        id: 'q-fread-return-value-check',
        kind: 'mcq',
        topic: 'Verifying return values with fread and fwrite',
        question: {
          en: 'What does the return value of size_t fread(void *ptr, size_t size, size_t count, FILE *stream) represent?',
          bn: 'size_t fread(void *ptr, size_t size, size_t count, FILE *stream)-এর রিটার্ন মান মূলত কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'The number of complete elements successfully transferred (which equals count if completely successful, or less if an EOF or error occurred)',
            bn: 'সফলভাবে পড়া সম্পূর্ণ উপাদানের সংখ্যা (সব সফল হলে এটি count-এর সমান হয়, আর ফাইল শেষ বা এরর হলে count-এর কম হয়)'
          },
          {
            en: 'The total number of CPU clock ticks taken to read the file',
            bn: 'ফাইলটি পড়তে মোট কতটি সিপিইউ ক্লক সাইকেল খরচ হয়েছে তার সংখ্যা'
          },
          {
            en: 'The percentage of battery remaining in the computer laptop',
            bn: 'ল্যাপটপ কম্পিউটারে অবশিষ্ট ব্যাটারি চার্জের শতকরা হার'
          },
          {
            en: 'Always returns 0 on success and 1 on failure',
            bn: 'সফল হলে সর্বদা ০ এবং ব্যর্থ হলে সর্বদা ১ প্রদান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The count of items successfully read.',
          bn: 'কতটি উপাদান বা আইটেম সফলভাবে পড়া হয়েছে তার সংখ্যা।'
        },
        explanation: {
          en: 'fread returns the number of full items read, not bytes. If the returned number is less than count, feof() or ferror() must be checked.',
          bn: 'fread বাইটের সংখ্যা নয় বরং সফলভাবে পড়া আইটেমের সংখ্যা দেয়। মান count-এর কম হলে feof() বা ferror() দিয়ে ত্রুটি নির্ণয় করতে হয়।'
        }
      },
      {
        id: 'q-lseek-file-pointer-reposition',
        kind: 'mcq',
        topic: 'Repositioning read/write file offsets with lseek and fseek',
        question: {
          en: 'How does a C program achieve random-access reads or writes within an open file without reading the preceding bytes sequentially?',
          bn: 'আগের বাইটগুলো ক্রমানুসারে না পড়ে সি প্রোগ্রামে কীভাবে একটি উন্মুক্ত ফাইলের যেকোনো স্থানে সরাসরি প্রবেশ (Random Access) করা যায়?'
        },
        options: [
          {
            en: 'By using fseek() or the POSIX lseek() system call with SEEK_SET, SEEK_CUR, or SEEK_END to directly reposition the file offset pointer',
            bn: 'fseek() অথবা পসিক্স lseek() সিস্টেম কলে SEEK_SET, SEEK_CUR বা SEEK_END ব্যবহার করে সরাসরি ফাইল অফসেট পয়েন্টারটি নির্দিষ্ট স্থানে সরিয়ে নিয়ে'
          },
          {
            en: 'By shaking the physical hard drive until the needle lands on the byte',
            bn: 'হার্ডডিস্ক হাত দিয়ে ঝাঁকিয়ে সঠিক জায়গায় রিডারের পিন বসিয়ে দিয়ে'
          },
          {
            en: 'By creating 100 duplicate copies of the file on disk',
            bn: 'ডিস্কে ফাইলটির ১০০টি প্রতিলিপি তৈরি করে'
          },
          {
            en: 'Random access is physically impossible in C programming',
            bn: 'সি প্রোগ্রামিংয়ে সরাসরি যেকোনো স্থানে প্রবেশ করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Seeking to an explicit byte offset.',
          bn: 'ফাইলের সুনির্দিষ্ট বাইট অফসেটে জাম্প করার কথা ভাবুন।'
        },
        explanation: {
          en: 'fseek() and lseek() move the open file read/write position to an arbitrary offset, enabling constant-time random access without scanning from index 0.',
          bn: 'fseek() এবং lseek() ফাইলের অফসেট পয়েন্টারকে নির্দিষ্ট অবস্থানে সরিয়ে দেয়, ফলে শুরু থেকে না পড়ে যেকোনো বাইট সরাসরি পড়া বা লেখা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'preprocessor-and-the-macro',
    title: {
      en: 'The C Preprocessor, Macros & Conditional Compilation — Directives & Metaprogramming',
      bn: 'সি প্রিপ্রসেসর, ম্যাক্রো ও শর্তাধীন কম্পাইলেশন — নির্দেশিকা ও মেটা-প্রোগ্রামিং'
    }
  }
};
