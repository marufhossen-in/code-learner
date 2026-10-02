import type { Lesson } from '../../../lib/types';

export const FilesAndTheStreamLesson: Lesson = {
  slug: 'files-and-the-stream',
  tech: 'csharp',
  title: {
    en: 'Files, Streams & High-Speed JSON',
    bn: 'ফাইল, স্ট্রিম এবং উচ্চগতির JSON'
  },
  summary: {
    en: 'Master robust file I/O, asynchronous streaming, and serialization in modern C#. Learn deterministic resource disposal with using declarations, process massive datasets via FileStream buffers, and serialize structured schemas at peak throughput with System.Text.Json.',
    bn: 'আধুনিক C#-এ ফাইল I/O, অ্যাসিনক্রোনাস স্ট্রিমিং এবং সিরিয়ালাইজেশন আয়ত্ত করুন। using ডিক্লারেশন দিয়ে মেমোরি রিসোর্স অবমুক্তকরণ, FileStream বাফার দিয়ে বিশাল ডেটাসেট প্রক্রিয়াকরণ এবং System.Text.Json দিয়ে সর্বোচ্চ গতিতে জেসন সিরিয়ালাইজেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'stream-buffers-and-deterministic-disposal-heading',
      text: {
        en: 'Asynchronous Streams and Deterministic Resource Disposal',
        bn: 'অ্যাসিনক্রোনাস স্ট্রিম এবং স্বয়ংক্রিয় রিসোর্স অবমুক্তকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Handling file input and output (file I/O) requires strict discipline over unmanaged operating system resources. When an application opens a file on disk, the operating system assigns a physical file handle. If code fails to close the handle, file locks and memory leaks quickly exhaust system limits. C# guarantees deterministic cleanup through "using declarations" bound to the IDisposable and IAsyncDisposable interfaces. Furthermore, reading massive multi-gigabyte files into memory using File.ReadAllText causes memory spikes. Instead, developers process data as a continuous stream of bytes using FileStream in chunked 4096-byte buffers, keeping application RAM usage constant regardless of file size.',
        bn: 'ফাইলের ইনপুট ও আউটপুট (file I/O) পরিচালনার সময় অপারেটিং সিস্টেমের আনম্যানেজড রিসোর্সের ওপর সতর্ক নজর রাখতে হয়। যখন কোনো প্রোগ্রাম ডিস্কের ফাইল খোলে, তখন অপারেটিং সিস্টেম একটি ফিজিক্যাল ফাইল হ্যান্ডেল বরাদ্দ করে। কোড যদি হ্যান্ডেল বন্ধ করতে ব্যর্থ হয়, তবে ফাইল লক ও মেমোরি লিক হয়ে সার্ভার অচল হতে পারে। C# এর IDisposable এবং IAsyncDisposable ইন্টারফেসের সাথে "using ডিক্লারেশন" ব্যবহারের মাধ্যমে তাৎক্ষণিক রিসোর্স অবমুক্তকরণ নিশ্চিত করে। তাছাড়া গিগাবাইটের পর গিগাবাইট ফাইল File.ReadAllText দিয়ে একবারে মেমোরিতে লোড করলে মেমোরি ক্র্যাশ ঘটে। এর বদলে FileStream ব্যবহার করে ৪০৯৬-বাইটের ছোট বাফারে ক্রমান্বয়ে ডেটা পড়লে ফাইলের আকার যত বড়ই হোক না কেন মেমোরি খরচ সর্বদা সামান্য ও অপরিবর্তিত থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural pipeline of C# stream I/O: From physical storage through 4096-byte chunked buffers, Utf8JsonReader parsing, and typed domain materialization.',
        bn: 'চিত্র ১: C# স্ট্রিম I/O এর কার্যপ্রবাহ: হার্ডডিস্ক থেকে ৪০৯৬-বাইটের বাফার খণ্ড, Utf8JsonReader পার্সিং এবং টাইপ-সেফ ডোমেন মডেলে রূপান্তর।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# FILESTREAM &amp; SYSTEM.TEXT.JSON HIGH-SPEED PIPELINE</text>

  <!-- Step 1: Physical File -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Physical Storage</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">orders_2026.json</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">500 MB Multi-Gigabyte</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">OS File Descriptor</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Disk Persistent Store</text>
  </g>

  <!-- Step 2: Buffered Stream -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Chunked Stream</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">await using FileStream</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">4096-Byte Window Buffer</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Stream.ReadAsync()</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Flat Constant RAM</text>
  </g>

  <!-- Step 3: Utf8 Parser -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Utf8JsonReader</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">ReadOnlySpan&lt;byte&gt;</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Zero-Copy Tokenizer</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">No Intermediate String</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Blazing CPU Pipeline</text>
  </g>

  <!-- Step 4: Typed Models -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Strongly-Typed</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">IAsyncEnumerable&lt;T&gt;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">record Order(...)</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Handles Disposed</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Safe &amp; Clean Exit</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'system-text-json-and-source-generators-heading',
      text: {
        en: 'High-Throughput Serialization with System.Text.Json and Source Generators',
        bn: 'System.Text.Json এবং সোর্স জেনারেটর দিয়ে উচ্চগতির সিরিয়ালাইজেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For many years, the third-party library Newtonsoft.Json was the standard serializer in .NET. However, it relies heavily on runtime reflection and intermediate string allocations. Modern .NET introduced the built-in System.Text.Json library, engineered from the ground up to operate directly on UTF-8 byte spans without allocating intermediate string objects. It achieves up to 3x higher throughput with a fraction of the memory footprint. To support cloud Native AOT executables, System.Text.Json includes compile-time Source Generators: annotating context classes with [JsonSerializable] pre-computes metadata at build time, completely eliminating reflection.',
        bn: 'দীর্ঘদিন যাবৎ .NET-এ থার্ড-পার্টি লাইব্রেরি Newtonsoft.Json ছিল সবচেয়ে বহুল ব্যবহৃত সিরিয়ালাইজার। কিন্তু এটি রানটাইম রিফ্লেকশন এবং মধ্যবর্তী স্ট্রিং অবজেক্ট তৈরির ওপর অতিমাত্রায় নির্ভরশীল ছিল। আধুনিক .NET-এ বিল্ট-ইন System.Text.Json লাইব্রেরি যুক্ত করা হয়েছে, যা কোনো মধ্যবর্তী স্ট্রিং না বানিয়ে সরাসরি UTF-8 বাইট স্প্যানের ওপর কাজ করে। এটি মেমোরি খরচ বিপুল হ্রাস করার পাশাপাশি ৩ গুণ বেশি দ্রুত গতিতে কাজ সম্পন্ন করে। ক্লাউড Native AOT বাইনারি সমর্থনের জন্য System.Text.Json-এ বিল্ট-ইন সোর্স জেনারেটর রয়েছে: [JsonSerializable] অ্যানোটেশন বিল্ডের সময়ই মেটাডেটা প্রস্তুত করে রাখে, যার ফলে কোনো রানটাইম রিফ্লেকশনের প্রয়োজনই পড়ে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# chunked 4096-byte file stream reading, deterministic using block disposal, and high-speed JSON deserialization.',
        bn: 'C# ৪০৯৬-বাইটের খণ্ডায়িত ফাইল স্ট্রিম রিডিং, using ব্লকে স্বয়ংক্রিয় ডিসপোজাল এবং জেসন ডিসিরিয়ালাইজেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# FileStream Chunked Reading, IDisposable & System.Text.Json

export interface TelemetryPayload {
  serviceId: string;
  uptimeSeconds: number;
  cpuUsagePct: number;
}

export class FileStreamSimulator {
  private isDisposed: boolean = false;
  private readonly bufferSize: number = 4096; // Standard 4096-byte chunk

  constructor(private virtualFilePath: string, private fileData: string) {
    console.log('[FileStream] Opened handle for file:', virtualFilePath);
  }

  // Simulating await using IAsyncDisposable pattern
  public dispose(): void {
    if (!this.isDisposed) {
      this.isDisposed = true;
      console.log('[FileStream] Closed OS file handle deterministically. Resources freed.');
    }
  }

  // Simulating chunked reading loop
  public readAllChunks(): string[] {
    if (this.isDisposed) throw new Error('ObjectDisposedException: Cannot access a closed stream.');

    const chunks: string[] = [];
    let offset = 0;
    while (offset < this.fileData.length) {
      const chunk = this.fileData.substring(offset, offset + this.bufferSize);
      chunks.push(chunk);
      offset += this.bufferSize;
    }
    return chunks;
  }
}

// Simulating System.Text.Json.JsonSerializer.Deserialize<T>
export function deserializeJson<T>(jsonString: string): T {
  console.log('[System.Text.Json] Parsing UTF-8 payload with zero intermediate allocations');
  return JSON.parse(jsonString);
}

// Execution demonstration
const rawLog = JSON.stringify({ serviceId: 'auth-service', uptimeSeconds: 86400, cpuUsagePct: 14.5 });

const stream = new FileStreamSimulator('/var/log/telemetry.json', rawLog);
try {
  const chunks = stream.readAllChunks();
  console.log('Stream Chunks Read Count:', chunks.length); // 1

  const parsed = deserializeJson<TelemetryPayload>(chunks[0]);
  console.log('Deserialized Service ID:', parsed.serviceId); // "auth-service"
  console.log('Uptime Seconds:', parsed.uptimeSeconds); // 86400
} finally {
  stream.dispose(); // Deterministic cleanup guarantees zero handle leak
}`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Stream',
          def: {
            en: 'Abstract sequence of bytes providing generic views of files, network sockets, or memory buffers without loading entire files into RAM.',
            bn: 'বাইটের একটি সিকোয়েন্স যা পুরো ফাইল মেমোরিতে না এনে ফাইল, নেটওয়ার্ক বা মেমোরি থেকে ধাপে ধাপে ডেটা পড়তে দেয়।'
          }
        },
        {
          term: 'using Declaration',
          def: {
            en: 'C# 8 syntax (using var s = ...) automatically invoking Dispose() or DisposeAsync() when execution leaves enclosing scope.',
            bn: 'C# ৮ সিনট্যাক্স যা মেথডের কাজ শেষ হওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে Dispose() কল করে মেমোরি হ্যান্ডেল মুক্ত করে।'
          }
        },
        {
          term: 'System.Text.Json',
          def: {
            en: 'Modern high-performance JSON library operating directly on UTF-8 byte spans without allocating intermediate string objects.',
            bn: 'আধুনিক উচ্চ-পারফরম্যান্স জেসন লাইব্রেরি যা কোনো মধ্যবর্তী স্ট্রিং তৈরি না করে সরাসরি UTF-8 বাইটের ওপর কাজ করে।'
          }
        },
        {
          term: 'Buffer',
          def: {
            en: 'A contiguous memory block (typically 4096 bytes) holding chunks of streaming data during read or write operations.',
            bn: 'মেমোরির একটি নির্দিষ্ট ব্লক (সাধারণত ৪০৯৬ বাইট) যা স্ট্রিম চলার সময় অল্প অল্প করে ডেটা ধরে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'using-declaration-scope-disposal-ex1',
      kind: 'mcq',
      topic: 'using-declaration-scope-exit-disposal',
      question: {
        en: 'When does the resource managed by a C# 8 "using declaration" (e.g. "using var stream = ...") get disposed?',
        bn: 'C# ৮ এর "using ডিক্লারেশন" (যেমন "using var stream = ...") দ্বারা তৈরি করা রিসোর্সটি ঠিক কখন ডিসপোজ হয়?'
      },
      options: [
        {
          en: 'Automatically when execution exits the enclosing lexical block or method scope, ensuring deterministic cleanup even if exceptions occur',
          bn: 'যখন এক্সিকিউশন সংশ্লিষ্ট কোড ব্লক বা মেথডের বাইরে বের হয় তখন স্বয়ংক্রিয়ভাবে, কোনো এক্সেপশন ঘটলেও যা নিখুঁত রিসোর্স মুক্তি নিশ্চিত করে'
        },
        {
          en: 'Only when the computer is shut down at night',
          bn: 'কেবল রাতের বেলা কম্পিউটার বন্ধ করার সময়'
        },
        {
          en: 'Exactly 24 hours after the variable was declared',
          bn: 'ভেরিয়েবল ঘোষণার ঠিক ২৪ ঘণ্টা পর'
        },
        {
          en: 'using declarations never dispose resources',
          bn: 'using ডিক্লারেশন কখনো কোনো রিসোর্স ডিসপোজ করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'using declarations dispose resources when the enclosing scope exits.',
        bn: 'যে ব্লকে ঘোষণা করা হয়েছে, তার বাইরে কোড চলে গেলেই এটি নিজে থেকে রিসোর্স বন্ধ করে দেয়।'
      },
      explanation: {
        en: 'C# 8 using declarations remove nested braces. The compiler guarantees Dispose() is called at the end of the enclosing variable scope.',
        bn: 'নেস্টেড ব্র্যাকেটের ঝামেলা দূর করে using ডিক্লারেশন কোডের পরিচ্ছন্নতা ও নিরাপত্তা একসাথে নিশ্চিত করে।'
      }
    },
    {
      id: 'filestream-chunked-buffer-constant-memory-ex2',
      kind: 'mcq',
      topic: 'filestream-chunked-buffer-memory-efficiency',
      question: {
        en: 'Why is reading a 10-gigabyte file using a 4096-byte chunked FileStream buffer superior to calling "File.ReadAllBytes"?',
        bn: 'একটি ১০-গিগাবাইটের ফাইল পড়ার জন্য "File.ReadAllBytes" ডাকার চেয়ে ৪০৯৬-বাইটের বাফারযুক্ত FileStream ব্যবহার করা কেন শ্রেয়?'
      },
      options: [
        {
          en: 'FileStream reads small 4096-byte slices sequentially, keeping application memory usage flat and tiny without triggering OutOfMemoryExceptions',
          bn: 'FileStream ক্রমান্বয়ে ছোট ৪০৯৬-বাইটের খণ্ডে ডেটা পড়ে, ফলে অ্যাপের মেমোরি খরচ সর্বদা সামান্য থাকে এবং কোনো OutOfMemoryException ঘটে না'
        },
        {
          en: 'FileStream compresses the file on disk into a zip archive',
          bn: 'FileStream হার্ডডিস্কে ফাইলটিকে জিপ করে সংকুচিত করে'
        },
        {
          en: 'File.ReadAllBytes is faster because it bypasses the operating system kernel',
          bn: 'File.ReadAllBytes দ্রুত কারণ এটি অপারেটিং সিস্টেম কার্নেলকে এড়িয়ে চলে'
        },
        {
          en: 'FileStream cannot read files larger than 1 megabyte',
          bn: 'FileStream কখনো ১ মেগাবাইটের বেশি আকারের ফাইল পড়তে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Streaming in small buffers prevents huge heap allocations on large files.',
        bn: 'ছোট বাফারে স্ট্রিমিং করলে পুরো ফাইল মেমোরিতে তুলতে হয় না, ফলে র্যামের অপচয় রোধ হয়।'
      },
      explanation: {
        en: 'File.ReadAllBytes attempts to allocate the entire file as a single contiguous array on the Large Object Heap. Streaming uses constant minimal memory.',
        bn: 'ReadAllBytes পুরো ১০ জিবি একসাথে র্যামে আনতে গিয়ে ক্র্যাশ করবে; কিন্তু বাফার স্ট্রিমিং মাত্র কয়েক কিলোবাইটে কাজ সম্পন্ন করে।'
      }
    },
    {
      id: 'system-text-json-source-generator-aot-ex3',
      kind: 'mcq',
      topic: 'system-text-json-source-generator-native-aot',
      question: {
        en: 'What architectural benefit do System.Text.Json Source Generators ([JsonSerializable]) provide for cloud-native C# microservices?',
        bn: 'ক্লাউড-নেটিভ C# মাইক্রোসার্ভিসে System.Text.Json সোর্স জেনারেটর ([JsonSerializable]) কোন আর্কিটেকচারাল সুবিধা দেয়?'
      },
      options: [
        {
          en: 'They generate serialization code at compile time, eliminating runtime reflection and enabling full compatibility with Native AOT compilation',
          bn: 'তারা কম্পাইল করার সময়ই সিরিয়ালাইজেশন কোড প্রস্তুত করে ফেলে, ফলে রানটাইম রিফ্লেকশনের প্রয়োজন থাকে না এবং Native AOT এর সাথে সম্পূর্ণ সামঞ্জস্য তৈরি হয়'
        },
        {
          en: 'They convert JSON payloads into HTML tables',
          bn: 'তারা জেসন ডেটাকে এইচটিএমএল টেবিলে রূপান্তর করে'
        },
        {
          en: 'Source generators encrypt JSON files with a master password',
          bn: 'সোর্স জেনারেটর জেসন ফাইলকে পাসওয়ার্ড দিয়ে সুরক্ষিত করে'
        },
        {
          en: 'They slow down compilation time by 10 hours',
          bn: 'তারা কম্পাইল করার সময় ১০ ঘণ্টা বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Source generators eliminate runtime reflection for instant Native AOT compatibility.',
        bn: 'সোর্স জেনারেটর আগে থেকেই কোড তৈরি করে রাখে যাতে কোনো রানটাইম রিফ্লেকশন ছাড়া দ্রুত রান করা যায়।'
      },
      explanation: {
        en: 'Native AOT strips unused reflection metadata. Source generators pre-compute serialization logic at build time, guaranteeing AOT compatibility and zero reflection overhead.',
        bn: 'রানটাইমে রিফ্লেকশন খোঁজার বদলে বিল্ডেই সব ঠিকঠাক করে রাখায় অ্যাপ তাৎক্ষণিক চালু হতে পারে।'
      }
    },
    {
      id: 'memorystream-in-memory-byte-manipulation-ex4',
      kind: 'mcq',
      topic: 'memorystream-in-memory-byte-buffer',
      question: {
        en: 'What is the primary architectural purpose of a MemoryStream in C#?',
        bn: 'C#-এ MemoryStream এর মূল আর্কিটেকচারাল ভূমিকা কী?'
      },
      options: [
        {
          en: 'It encapsulates an in-memory byte buffer, allowing code to read and write bytes using the standard Stream API without touching the physical hard disk',
          bn: 'এটি মেমোরির ভেতরের একটি বাইট বাফারকে ধারণ করে, যার ফলে ফিজিক্যাল হার্ডডিস্কে হাত না দিয়েই মানসম্মত Stream এপিআই ব্যবহার করে বাইট পড়া ও লেখা যায়'
        },
        {
          en: 'It permanently formats the computer memory stick',
          bn: 'এটি কম্পিউটারের মেমোরি স্টিক স্থায়ীভাবে ফরম্যাট করে'
        },
        {
          en: 'MemoryStream can only be used with audio sound files',
          bn: 'MemoryStream কেবল অডিও গানের ফাইলের সাথেই ব্যবহার করা যায়'
        },
        {
          en: 'It was deprecated and removed in .NET Core 1.0',
          bn: '.NET Core ১.০ সংস্করণে MemoryStream মুছে ফেলা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'MemoryStream provides a stream abstraction over an in-memory byte array.',
        bn: 'MemoryStream ডিস্ক ছাড়া সরাসরি মেমোরিতেই স্ট্রিম অপারেশনের সমস্ত সুবিধা দেয়।'
      },
      explanation: {
        en: 'MemoryStream bridges memory buffers with stream APIs, enabling serialization and crypto operations entirely in RAM.',
        bn: 'ফাইল বা নেটওয়ার্কের মতো একই মেথড দিয়ে মেমোরির ভেতরে কাজ করতে MemoryStream অপরিহার্য।'
      }
    }
  ],
  quiz: {
    id: 'quiz-files-and-the-stream',
    title: {
      en: 'C# Files, Streams & JSON Serialization Quiz',
      bn: 'C# ফাইল, স্ট্রিম এবং জেসন সিরিয়ালাইজেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-iasyncdisposable-await-using',
        kind: 'mcq',
        topic: 'iasyncdisposable-await-using-flush',
        question: {
          en: 'Why is "await using" preferred over synchronous "using" when working with network streams or buffered asynchronous file writers?',
          bn: 'নেটওয়ার্ক স্ট্রিম বা বাফারযুক্ত ফাইল রাইটারের ক্ষেত্রে সাধারণ "using"-এর চেয়ে "await using" কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'It invokes DisposeAsync(), allowing buffered data to be flushed to disk or network asynchronously without blocking a ThreadPool thread during disposal',
            bn: 'এটি DisposeAsync() কল করে, যার ফলে বাফারে থাকা ডেটা থ্রেড ব্লক না করে সম্পূর্ণ অ্যাসিনক্রোনাস উপায়ে ডিস্ক বা নেটওয়ার্কে পাঠানো নিশ্চিত হয়'
          },
          {
            en: 'await using deletes the file if any error occurs',
            bn: 'কোনো এরর ঘটলে await using ফাইলটি মুছে ফেলে'
          },
          {
            en: 'Synchronous using statements cannot compile in C# 8',
            bn: 'C# ৮ সংস্করণে সাধারণ using স্টেটমেন্ট আর কম্পাইল হয় না'
          },
          {
            en: 'await using increases file size by 50 percent',
            bn: 'await using ফাইলের আকার ৫০ শতাংশ বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'DisposeAsync allows asynchronous flushing of internal buffers on close.',
          bn: 'DisposeAsync বাফারের অবশিষ্ট ডেটা ডিস্কে লেখার সময় থ্রেডকে ব্লক না রেখে মুক্ত রাখে।'
        },
        explanation: {
          en: 'Flushing streams on disposal often involves I/O. DisposeAsync ensures this cleanup does not synchronously stall worker threads.',
          bn: 'স্ট্রিম বন্ধের সময় ডেটা ফ্ল্যাশ করতে যাতে থ্রেড অলসভাবে বসে না থাকে, সেজন্য await using আদর্শ।'
        }
      },
      {
        id: 'quiz-utf8jsonreader-readonlyspan-speed',
        kind: 'mcq',
        topic: 'utf8jsonreader-readonlyspan-performance',
        question: {
          en: 'Why is Utf8JsonReader capable of parsing JSON data dramatically faster than legacy JSON parsers?',
          bn: 'পুরনো জেসন পার্সারের তুলনায় Utf8JsonReader কেন অবিশ্বাস্য দ্রুতগতিতে ডেটা পার্স করতে সক্ষম?'
        },
        options: [
          {
            en: 'It is a low-level, forward-only tokenizer operating directly on ReadOnlySpan<byte> without decoding UTF-8 bytes into managed string objects',
            bn: 'এটি একটি লো-লেভেল ফরওয়ার্ড-অনলি টোকেনাইজার যা UTF-8 বাইটকে কোনো স্ট্রিং অবজেক্টে রূপান্তর না করেই সরাসরি ReadOnlySpan<byte>-এর ওপর কাজ করে'
          },
          {
            en: 'It converts JSON into binary machine code before parsing',
            bn: 'এটি পার্স করার আগেই জেসনকে মেশিন কোডে রূপান্তর করে'
          },
          {
            en: 'It requires 64 CPU cores to run properly',
            bn: 'এটি চালানোর জন্য ৬৪ টি সিপিইউ কোরের প্রয়োজন হয়'
          },
          {
            en: 'Utf8JsonReader only works with boolean values',
            bn: 'Utf8JsonReader শুধুমাত্র বুলিয়ান মানের সাথেই চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Utf8JsonReader parses raw UTF-8 bytes directly without string allocations.',
          bn: 'Utf8JsonReader কোনো স্ট্রিং তৈরি না করে সরাসরি কাঁচা বাইটের ওপর কাজ করে।'
        },
        explanation: {
          en: 'Operating directly on UTF-8 spans eliminates text transcoding and heap allocations, delivering maximum parsing speed.',
          bn: 'স্ট্রিং অবজেক্ট তৈরির খরচ পুরোপুরি বাদ দেওয়ায় এর গতি অতুলনীয়।'
        }
      },
      {
        id: 'quiz-path-combine-cross-platform',
        kind: 'mcq',
        topic: 'path-combine-cross-platform-separators',
        question: {
          en: 'Why must developers always use "Path.Combine" instead of manual string concatenation when joining file system directory paths?',
          bn: 'ফাইল সিস্টেমের ডিরেক্টরি পাথ একত্রিত করার সময় ম্যানুয়াল স্ট্রিং যোগ করার বদলে সর্বদা "Path.Combine" কেন ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'Path.Combine automatically applies the correct platform-specific directory separator (backslash on Windows, forward slash on Linux/macOS) and resolves redundant slashes safely',
            bn: 'Path.Combine স্বয়ংক্রিয়ভাবে অপারেটিং সিস্টেম অনুযায়ী সঠিক সেপারেটর (উইন্ডোজে ব্যাকস্ল্যাশ, লিনাক্স/ম্যাকে ফরোয়ার্ড স্ল্যাশ) ব্যবহার করে এবং ভুল স্ল্যাশ নিরাপদভাবে ঠিক করে'
          },
          {
            en: 'String concatenation is forbidden by the C# compiler',
            bn: 'C# কম্পাইলারে স্ট্রিং যোগ করা সম্পূর্ণ নিষিদ্ধ'
          },
          {
            en: 'Path.Combine compresses directory folders into zip archives',
            bn: 'Path.Combine ফোল্ডারগুলোকে জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'Path.Combine only works inside the Windows temp directory',
            bn: 'Path.Combine কেবল উইন্ডোজ টেম্প ডিরেক্টরিতে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Path.Combine guarantees cross-platform directory separator compatibility.',
          bn: 'Path.Combine উইন্ডোজ ও লিনাক্সের ভিন্ন ভিন্ন স্ল্যাশ চিহ্নের ঝামেলা নিজে থেকেই সমাধান করে।'
        },
        explanation: {
          en: 'Hardcoding slashes breaks cross-platform compatibility between Windows and Linux. Path.Combine ensures resilient, OS-agnostic path creation.',
          bn: 'ক্রস-প্ল্যাটফর্ম ক্লাউড সফটওয়্যারে বিভিন্ন অপারেটিং সিস্টেমের জটিলতা এড়াতে Path.Combine এর বিকল্প নেই।'
        }
      },
      {
        id: 'quiz-pipes-system-io-pipelines',
        kind: 'mcq',
        topic: 'system-io-pipelines-socket-parsing',
        question: {
          en: 'What architectural problem in high-performance socket programming was System.IO.Pipelines designed to solve for web servers like Kestrel?',
          bn: 'Kestrel-এর মতো ওয়েব সার্ভারে উচ্চগতির সকেট প্রোগ্রামিংয়ের কোন জটিল সমস্যা সমাধানের জন্য System.IO.Pipelines তৈরি করা হয়েছিল?'
        },
        options: [
          {
            en: 'It manages buffer memory lifecycles automatically using ArrayPool, eliminating buffer copying and reducing GC pause times during continuous network socket parsing',
            bn: 'এটি ArrayPool ব্যবহার করে বাফার মেমোরির লাইফসাইকেল নিজে থেকেই সামলায়, ফলে নেটওয়ার্ক সকেট পার্স করার সময় কোনো ডেটা কপি করতে হয় না এবং গারবেজ কালেকশন পজ ন্যূনতম থাকে'
          },
          {
            en: 'It encrypts all network traffic with quantum encryption',
            bn: 'এটি কোয়ান্টাম এনক্রিপশন দিয়ে সমস্ত ট্রাফিক এনক্রিপ্ট করে'
          },
          {
            en: 'It replaces the Linux TCP stack with UDP permanently',
            bn: 'এটি লিনাক্সের টিসিপি স্ট্যাককে চিরতরে ইউডিপি দিয়ে বদলে দেয়'
          },
          {
            en: 'Pipelines was replaced by WebSockets in 2018',
            bn: '২০১৮ সালে পাইপলাইন প্রযুক্তি ওয়েবসকেট দ্বারা প্রতিস্থাপিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'System.IO.Pipelines provides zero-allocation buffer management for network I/O.',
          bn: 'System.IO.Pipelines নেটওয়ার্ক ডেটা পড়ার সময় শূন্য-অ্যালোকেশনে বাফার ব্যবস্থাপনা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Parsing chunked socket streams without copying bytes is notoriously error-prone. Pipelines manages pooled memory safely, powering ASP.NET Core Kestrel throughput.',
          bn: 'Kestrel সার্ভারের অবিশ্বাস্য গতির পেছনে এই নিখুঁত বাফার ও পাইপলাইন মেকানিজমটি প্রধান ভূমিকা রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-nuget-serve',
    title: {
      en: 'NuGet, Packaging & xUnit Testing',
      bn: 'NuGet, প্যাকেজিং এবং xUnit টেস্টিং'
    }
  }
};
