import type { Lesson } from '../../../lib/types';

export const fileEconomyLesson: Lesson = {
  slug: 'the-file-economy',
  tech: 'node',
  title: {
    en: 'Buffers, Streams & File System: fs, Streams Pipeline, Backpressure & Crypto',
    bn: 'Buffer, Streams ও File System: fs, স্ট্রিম পাইপলাইন, ব্যাকপ্রেশার ও ক্রিপ্টো'
  },
  summary: {
    en: 'Master Node.js I/O data pipelines across 10 structured topics, from the fs module to binary Buffers. Learn path sanitization, streaming pipelines with stream.pipeline(), backpressure handling, and cryptographic hashing.',
    bn: 'fs মডিউল থেকে শুরু করে বাইনারি Buffer পর্যন্ত 10 টি বিষয়ে Node.js I/O ডেটা পাইপলাইন আয়ত্ত করুন। জানুন পাথ স্যানিটাইজেশন, stream.pipeline() দিয়ে স্ট্রিম পাইপলাইন, ব্যাকপ্রেশার নিয়ন্ত্রণ এবং ক্রিপ্টোগ্রাফিক হ্যাশিং।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-dependency-ledger',
    title: {
      en: 'The Dependency Ledger: npm, package.json & Lockfiles',
      bn: 'ডিপেনডেন্সি লেজার: npm, package.json ও লকফাইল'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The File System Trio: Sync vs Callbacks vs Promises', bn: '১. ফাইল সিস্টেম এপিআই ত্রয়ী: Sync বনাম Callbacks বনাম Promises' } },
    {
      type: 'para',
      text: {
        en: 'Node.js provides 3 distinct ways to interact with the file system. First, synchronous methods like `fs.readFileSync()` block the event loop and should only run at startup. Second, error-first callbacks like `fs.readFile()` provide legacy async handling. Third, modern Promise-based methods from `fs/promises` enable clean async/await syntax.',
        bn: 'Node.js এ ফাইল সিস্টেমে কাজ করার 3 টি উপায় রয়েছে। প্রথমত, `fs.readFileSync()` এর মতো সিঙ্ক্রোনাস মেথড যা ইভেন্ট লুপ আটকে দেয় এবং কেবল অ্যাপ শুরুর সময় চলে। দ্বিতীয়ত, `fs.readFile()` এর মতো এরর-ফার্স্ট কলব্যাক যা পুরনো অ্যাসিনক্রোনাস ব্যবস্থা দেয়। তৃতীয়ত, `fs/promises` থেকে প্রমিজ-ভিত্তিক মেথড যা async/await ব্যবহারের আধুনিক সুযোগ দেয়।'
      }
    },
    {
      type: 'visual',
      id: 'node'
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

// Modern Promise-based file system read:
async function loadFile() {
  try {
    const data = await fs.readFile("package.json", "utf8");
    console.log("File read successfully, length:", data.length);
  } catch (err) {
    console.error("Error reading file:", err.message);
  }
}

await loadFile();
// Output: File read successfully, length: 2150`,
      caption: {
        en: 'fs/promises provides non-blocking, async/await file system access with clean error handling.',
        bn: 'fs/promises পরিচ্ছন্ন এরর হ্যান্ডলিংসহ নন-ব্লকিং async/await ফাইল এক্সেস নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Core File Operations: Read, Write, Append & Delete', bn: '২. মৌলিক ফাইল অপারেশন: Read, Write, Append ও Delete' } },
    {
      type: 'para',
      text: {
        en: 'The core fs methods handle everyday file manipulations cleanly. First, fs.writeFile creates a file or overwrites existing content. Second, fs.appendFile attaches new text to the end of a file without overwriting. Third, fs.unlink deletes a file, and fs.mkdir creates directory trees with { recursive: true }.',
        bn: 'মৌলিক fs মেথডগুলো সাধারণ ফাইল ম্যানিপুলেশন সহজে সমাধান করে। প্রথমত, fs.writeFile নতুন ফাইল তৈরি করে বা আগের ডেটা প্রতিস্থাপন করে। দ্বিতীয়ত, fs.appendFile পুরনো ফাইলের শেষে নতুন ডেটা যোগ করে। তৃতীয়ত, fs.unlink ফাইল মুছে ফেলে এবং fs.mkdir ডিরেক্টরি তৈরি করে যেখানে { recursive: true } অপশন দিলে সাব-ডিরেক্টরিও তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

const tempFile = "./temp-log.txt";

// 1. Write file:
await fs.writeFile(tempFile, "Log Entry 1\\n");

// 2. Append new line:
await fs.appendFile(tempFile, "Log Entry 2\\n");

// 3. Read back:
const content = await fs.readFile(tempFile, "utf8");
console.log("Content lines count:", content.trim().split("\\n").length); // 2

// 4. Delete file:
await fs.unlink(tempFile);
console.log("Temporary file deleted successfully!");`,
      caption: {
        en: 'writeFile overwrites, appendFile appends, and unlink removes the file from disk.',
        bn: 'writeFile নতুন করে লেখে, appendFile শেষে যোগ করে এবং unlink ফাইল মুছে ফেলে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Path Module: join, resolve, parse & extname', bn: '৩. Path মডিউল: join, resolve, parse ও extname' } },
    {
      type: 'para',
      text: {
        en: 'Operating systems format file paths differently (Windows uses backslashes \\ while POSIX/Linux uses forward slashes /). The native "path" module resolves platform-agnostic paths. Use path.join to concatenate segments, path.resolve to produce an absolute path from the current working directory, and path.parse to inspect root, dir, base, ext, and name.',
        bn: 'অপারেটিং সিস্টেমে ফাইল পাথের ফরম্যাট ভিন্ন হয় (উইন্ডোজে \\ আর লিনাক্সে /)। নেটিভ "path" মডিউল সব প্ল্যাটফর্মের জন্য সঠিক পাথ তৈরি করে। path.join পাথ জোড়া দেয়, path.resolve বর্তমান ফোল্ডার সাপেক্ষে নিখুঁত এবসোলিউট পাথ বের করে এবং path.parse এক্সটেনশন ও ফাইলের নাম আলাদা করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import path from "path";

const joined = path.join("/users", "project", "config.json");
console.log("Joined path:", joined); // "/users/project/config.json"

const parsed = path.parse("/var/www/index.html");
console.log("Extension:", parsed.ext);   // ".html"
console.log("Base file name:", parsed.base); // "index.html"
console.log("Parent folder:", parsed.dir);   // "/var/www"`,
      caption: {
        en: 'The path module creates cross-platform normalized file paths and extracts metadata.',
        bn: 'path মডিউল প্ল্যাটফর্ম-নিরপেক্ষ নিরাপদ পাথ তৈরি করে এবং এক্সটেনশন ও নাম আলাদা করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Security Shield: Preventing Directory Traversal Attacks', bn: '৪. নিরাপত্তা ঢাল: ডিরেক্টরি ট্রাভার্সাল আক্রমণ প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'A Directory Traversal attack happens when an attacker passes relative paths like "../../etc/passwd" to access sensitive system files outside the public directory. Always use path.resolve to compute the canonical path, and verify that the resolved path strictly starts with your public root directory using .startsWith().',
        bn: 'ডিরেক্টরি ট্রাভার্সাল আক্রমণ তখন ঘটে যখন হ্যাকাররা "../../etc/passwd"-এর মতো আপেক্ষিক পাথ দিয়ে পাবলিক ফোল্ডারের বাইরের গোপন ফাইল চুরি করার চেষ্টা করে। এটি ঠেকাতে path.resolve দিয়ে মূল পাথ বের করে .startsWith() দিয়ে নিশ্চিত হতে হয় যে পাথটি আপনার অনুমোদিত পাবলিক ফোল্ডারের ভেতরেই আছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import path from "path";

const PUBLIC_ROOT = path.resolve("./public");

function isPathSafe(userSuppliedPath) {
  // Resolve user input against public root:
  const safeTarget = path.resolve(PUBLIC_ROOT, userSuppliedPath);
  
  // Guard check: Must start with the public root directory!
  return safeTarget.startsWith(PUBLIC_ROOT);
}

console.log("Legitimate file safe:", isPathSafe("images/hero.png")); // true
console.log("Malicious traversal safe:", isPathSafe("../../../etc/passwd")); // false`,
      caption: {
        en: 'Never trust user-supplied paths without verifying they remain inside the root directory.',
        bn: 'ব্যবহারকারীর দেওয়া ফাইল পাথ অনুমোদিত রুট ডিরেক্টরিতে আছে কি না যাচাই না করে কখনো গ্রহণ করবেন না।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Buffer Class: Raw Binary Memory & Encodings', bn: '৫. Buffer ক্লাস: বাইনারি মেমরি ও এনকোডিং' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript traditionally had no mechanism for manipulating raw binary memory streams. Node.js introduced the Buffer class, allocating fixed-size chunks of raw memory outside the V8 heap. Buffers can be created with Buffer.from() or Buffer.alloc(), and converted between encodings such as "utf8", "base64", and "hex".',
        bn: 'জাভাস্ক্রিপ্ট মূল ভাষায় বাইনারি মেমরি নিয়ে কাজ করার সুযোগ ছিল না। Node.js এর জন্য Buffer ক্লাস যোগ করেছে যা V8 হিপের বাইরে নির্দিষ্ট আকারের মেমরি বরাদ্দ করে। Buffer.from() বা Buffer.alloc() দিয়ে বাফার তৈরি করা যায় এবং utf8, base64 বা hex এনকোডিংয়ে রূপান্তর করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Allocating and encoding binary buffers:
const buf = Buffer.from("Node.js", "utf8");

console.log("Buffer byte length:", buf.length); // 7
console.log("Raw hex representation:", buf.toString("hex")); // "4e6f64652e6a73"
console.log("Base64 encoded string:", buf.toString("base64")); // "Tm9kZS5qcw=="

// Allocating empty pre-zeroed buffer of 16 bytes:
const zeroBuf = Buffer.alloc(16);
console.log("First byte of alloc:", zeroBuf[0]); // 0`,
      caption: {
        en: 'Buffers represent fixed-size binary data and provide instant conversion across encodings.',
        bn: 'বাফার নির্দিষ্ট মেমরির বাইনারি ডেটা ধারণ করে এবং বিভিন্ন এনকোডিংয়ে রূপান্তর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Node.js Streams: Readable, Writable & Transform', bn: '৬. Node.js Streams: Readable, Writable ও Transform' } },
    {
      type: 'para',
      text: {
        en: 'Streams process data piece-by-piece in small chunks without loading the entire dataset into RAM. Node.js has four stream types: 1) Readable (e.g. fs.createReadStream); 2) Writable (e.g. fs.createWriteStream); 3) Duplex (bidirectional, like TCP sockets); 4) Transform (modifies data as it passes through, like zlib compression).',
        bn: 'স্ট্রিম পুরো ফাইল একসাথে র‍্যামে লোড না করে ছোট ছোট টুকরো (chunks) আকারে ডেটা প্রসেস করে। Node.js-এ ৪ ধরনের স্ট্রিম আছে: ১) Readable (ডেটা পড়ার জন্য); ২) Writable (ডেটা লেখার জন্য); ৩) Duplex (উভয়মুখী, যেমন নেটওয়ার্ক সকেট); ৪) Transform (ডেটা বদলে দেওয়া, যেমন ফাইল কম্প্রেশন বা জিপ করা)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs";

// Create readable stream with 64KB chunk buffer:
const readStream = fs.createReadStream("package.json", {
  highWaterMark: 1024 // 1KB chunks
});

readStream.on("data", (chunk) => {
  console.log("Received chunk bytes:", chunk.length);
});

readStream.on("end", () => {
  console.log("Stream reading finished!");
});`,
      caption: {
        en: 'Streams emit data events chunk by chunk, keeping memory consumption low and predictable.',
        bn: 'স্ট্রিম টুকরো টুকরো করে ডেটা ইভেন্ট প্রকাশ করে, ফলে মেমরি খরচ সর্বদা কম ও নির্দিষ্ট থাকে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Backpressure & Safe Pipelining: stream.pipeline', bn: '৭. ব্যাকপ্রেশার ও নিরাপদ পাইপলাইন: stream.pipeline' } },
    {
      type: 'para',
      text: {
        en: 'Backpressure occurs when a readable stream produces data faster than a writable stream can consume it (e.g. fast SSD reading piped to a slow mobile network socket). Legacy readable.pipe(writable) does not handle errors or cleanup correctly. In modern Node.js, always use stream.pipeline() from stream/promises.',
        bn: 'ব্যাকপ্রেশার তখন ঘটে যখন একটি রিডেবল স্ট্রিম খুব দ্রুত ডেটা ছাড়ে কিন্তু রাইটেবল স্ট্রিম তা দ্রুত লিখতে পারে না (যেমন দ্রুত SSD থেকে ফাইল পড়ে স্লো মোবাইল নেটওয়ার্কে পাঠানো)। পুরনো pipe() মেথড এরর হলে সকেট বন্ধ করতে পারে না। তাই সর্বদা stream/promises-এর pipeline() ব্যবহার করা উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs";
import { pipeline } from "stream/promises";
import zlib from "zlib";

async function compressFile(source, destination) {
  try {
    // Safely connects streams, regulates backpressure, and closes handles on error:
    await pipeline(
      fs.createReadStream(source),
      zlib.createGzip(),
      fs.createWriteStream(destination)
    );
    console.log("Pipelined compression completed cleanly!");
  } catch (err) {
    console.error("Pipeline failed safely:", err.message);
  }
}

console.log("Pipeline regulates flow between fast producer and slow consumer");
// Output: Pipeline regulates flow between fast producer and slow consumer`,
      caption: {
        en: 'stream.pipeline automatically regulates flow rate backpressure and destroys streams on errors.',
        bn: 'stream.pipeline স্বয়ংক্রিয়ভাবে ব্যাকপ্রেশার সামলায় এবং এরর ঘটলে সব স্ট্রিম নিরাপদভাবে বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Cryptographic Hashes with the Crypto Module', bn: '৮. Crypto মডিউলে ক্রিপ্টোগ্রাফিক হ্যাশিং' } },
    {
      type: 'para',
      text: {
        en: 'The built-in "crypto" module provides cryptographic functions for authentication and file integrity. You can generate cryptographically secure random tokens using crypto.randomBytes(), or compute SHA-256 / MD5 checksums of files and passwords using crypto.createHash().',
        bn: 'Node.js-এর বিল্ট-ইন "crypto" মডিউল নিরাপত্তা ও ফাইলের সত্যতা যাচাইয়ের সুবিধা দেয়। crypto.randomBytes() দিয়ে নিরাপদ র‍্যান্ডম সিক্রেট টোকেন তৈরি করা যায়, আর crypto.createHash() দিয়ে ফাইল বা পাসওয়ার্ডের SHA-256 চেকসাম তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import crypto from "crypto";

// 1. Generate secure 32-byte hex API token:
const token = crypto.randomBytes(16).toString("hex");
console.log("Generated secure token length:", token.length); // 32

// 2. Compute SHA-256 hash checksum:
const hash = crypto.createHash("sha256")
  .update("SecurePassword123")
  .digest("hex");

console.log("SHA-256 digest length:", hash.length); // 64
console.log("Digest is string:", typeof hash === "string"); // true`,
      caption: {
        en: 'crypto.createHash computes fixed-length one-way cryptographic hashes.',
        bn: 'crypto.createHash নির্দিষ্ট দৈর্ঘ্যের ক্রিপ্টোগ্রাফিক হ্যাশ তৈরি করে ফাইলের নিরাপত্তা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Large File Processing: Zero-RAM Exhaustion Pattern', bn: '৯. বিশালাকার ফাইল প্রসেসিং: র্যাম খরচহীন স্ট্রিম প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'If you use fs.readFile() on a 5GB CSV or video file, Node.js will attempt to allocate 5GB of contiguous memory in RAM, instantly triggering a JavaScript heap out of memory crash. Streams process 5GB files using a flat 64KB memory footprint regardless of total file size.',
        bn: 'যদি আপনি fs.readFile() দিয়ে ৫ গিগাবাইটের একটি ফাইল পড়তে যান, তবে Node.js ৫ জিবি র‍্যাম দখল করতে গিয়ে সাথে সাথে মেমরি ক্র্যাশ করবে। কিন্তু স্ট্রিম ব্যবহারের মাধ্যমে মাত্র ৬৪ কিলোবাইট মেমরি ব্যবহার করে যেকোনো সাইজের ফাইল প্রসেস করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs";
import readline from "readline";

async function countLinesStreamingly(filePath) {
  const fileStream = fs.createReadStream(filePath);
  
  // Interface reads file line-by-line using constant memory:
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity
  });

  let lineCount = 0;
  for await (const line of rl) {
    lineCount++;
  }
  return lineCount;
}

console.log("Streaming reads massive files with fixed 64KB RAM usage!");
// Output: Streaming reads massive files with fixed 64KB RAM usage!`,
      caption: {
        en: 'Line-by-line stream reading keeps RAM usage constant whether file is 100KB or 100GB.',
        bn: 'লাইন-বাই-লাইন স্ট্রিম রিডিং ফাইল ১০০ কেবি বা ১০০ জিবি যাই হোক না কেন নির্দিষ্ট কম র্যাম ব্যবহার করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Secure Upload Pipelines & Magic-Byte Validation', bn: '১০. নিরাপদ ফাইল আপলোড ও ম্যাজিক-বাইট যাচাই' } },
    {
      type: 'para',
      text: {
        en: 'File extensions like ".png" or ".pdf" can easily be faked by attackers uploading executable scripts. Secure upload pipelines inspect the file Magic Bytes (the first 4-8 raw bytes of the file signature) to verify the genuine MIME type before saving the stream to permanent disk storage.',
        bn: 'ফাইলের এক্সটেনশন যেমন ".png" বা ".pdf" যে কেউ ইচ্ছেমতো বদলে ক্ষতিকর স্ক্রিপ্ট আপলোড করতে পারে। নিরাপদ সার্ভার বানাতে হলে ফাইলের প্রথম ৪ থেকে ৮টি কাঁচা বাইট (যাকে Magic Bytes বলা হয়) পরীক্ষা করে ফাইলের আসল ধরন নিশ্চিত হয়ে তারপর হার্ডডিস্কে সেভ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `function verifyPngMagicBytes(buffer) {
  // PNG files must start with: 89 50 4E 47 (0x89 'P' 'N' 'G')
  return (
    buffer[0] === 0x89 &&
    buffer[1] === 0x50 &&
    buffer[2] === 0x4e &&
    buffer[3] === 0x47
  );
}

const fakePng = Buffer.from("<script>alert(1)</script>");
const realPngSignature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a]);

console.log("Is fake PNG genuine?", verifyPngMagicBytes(fakePng)); // false
console.log("Is real PNG signature valid?", verifyPngMagicBytes(realPngSignature)); // true`,
      caption: {
        en: 'Inspecting raw magic bytes prevents malicious script execution masquerading as images.',
        bn: 'ম্যাজিক বাইট পরীক্ষা ছবির ছদ্মবেশে আসা ক্ষতিকর ফাইল আপলোড প্রতিহত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'nod-fil-ex1',
      kind: 'predict',
      topic: 'node: safe stream pipelining function',
      question: {
        en: 'Which function from the "stream/promises" module safely connects multiple streams, handles backpressure, and ensures clean cleanup if an error occurs?',
        bn: '"stream/promises" মডিউলের কোন ফাংশনটি একাধিক স্ট্রিমকে নিরাপদে যুক্ত করে, ব্যাকপ্রেশার সামলায় এবং এরর হলে স্ট্রিমগুলো বন্ধ করে দেয়?'
      },
      code: `/* Connecting streams safely in modern Node.js */
/* await ____________(readStream, transformStream, writeStream); */`,
      answer: 'pipeline',
      accept: ['pipeline', 'stream.pipeline'],
      hint: {
        en: 'Safe streaming pipeline.',
        bn: 'নিরাপদ স্ট্রিমিং পাইপলাইন।'
      },
      explanation: {
        en: 'stream.pipeline automatically manages backpressure, forward errors, and properly closes all streams upon completion or failure.',
        bn: 'pipeline মেথড ব্যাকপ্রেশার নিয়ন্ত্রণ করে এবং কাজ শেষ বা এরর হলে সব স্ট্রিম সুরক্ষিতভাবে বন্ধ করে।'
      }
    },
    {
      id: 'nod-fil-ex2',
      kind: 'mcq',
      topic: 'node: directory traversal attack prevention',
      question: {
        en: 'How do you reliably protect a file server from Directory Traversal attacks (e.g., "../../../etc/passwd")?',
        bn: 'ডিরেক্টরি ট্রাভার্সাল আক্রমণ (যেমন "../../../etc/passwd") থেকে একটি ফাইল সার্ভারকে কীভাবে সুরক্ষিত রাখা যায়?'
      },
      options: [
        { en: 'Use path.resolve() to get the absolute path and verify it starts with the public root directory via .startsWith()', bn: 'path.resolve() দিয়ে এবসোলিউট পাথ বের করে তা পাবলিক রুটের ভেতর আছে কি না .startsWith() দিয়ে চেক করে' },
        { en: 'Simply remove all dot characters from the user input', bn: 'ইনপুট থেকে সব ডট অক্ষর মুছে ফেলে' },
        { en: 'Rely solely on the client browser validation', bn: 'শুধুমাত্র ব্রাউজারের যাচাইকরণের ওপর ভরসা করে' },
        { en: 'Rename all files to numbers', bn: 'সব ফাইলের নাম বদলে সংখ্যা বানিয়ে' }
      ],
      answer: 0,
      hint: {
        en: 'path.resolve plus startsWith validation.',
        bn: 'path.resolve এবং startsWith ভ্যালিডেশন।'
      },
      explanation: {
        en: 'Resolving the path against the allowed root and verifying the prefix ensures requests cannot escape outside the designated folder.',
        bn: 'অনুমোদিত রুটের সাপেক্ষে পাথ সমাধান করে প্রিফিক্স যাচাই করলে ফাইল কখনোই পাবলিক ফোল্ডারের বাইরে যেতে পারে না।'
      }
    },
    {
      id: 'nod-fil-ex3',
      kind: 'mcq',
      topic: 'node: memory advantage of streams',
      question: {
        en: 'What is the primary architectural advantage of using fs.createReadStream over fs.readFile when handling a 4GB file?',
        bn: '৪ গিগাবাইটের একটি ফাইলের ক্ষেত্রে fs.readFile-এর চেয়ে fs.createReadStream ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        { en: 'Streams process the file in small constant chunks (e.g. 64KB) preventing memory exhaustion crashes', bn: 'স্ট্রিম ছোট ছোট নির্দিষ্ট চাঙ্কে (যেমন ৬৪ কেবি) প্রসেস করায় র্যাম ক্র্যাশ হওয়া আটকায়' },
        { en: 'Streams make the file 50% smaller on disk', bn: 'স্ট্রিম ডিস্কে ফাইলের সাইজ ৫০% কমিয়ে দেয়' },
        { en: 'Streams automatically translate the text into English', bn: 'স্ট্রিম টেক্সট স্বয়ংক্রিয়ভাবে অনুবাদ করে' },
        { en: 'Streams encrypt the file with AES-256', bn: 'স্ট্রিম ফাইলটিকে এনক্রিপ্ট করে' }
      ],
      answer: 0,
      hint: {
        en: 'Constant low RAM footprint.',
        bn: 'সর্বদা কম ও নির্দিষ্ট র্যাম খরচ।'
      },
      explanation: {
        en: 'fs.readFile loads the entire 4GB file into RAM at once causing Out-of-Memory crashes, whereas streams process data in small 64KB buffers.',
        bn: 'fs.readFile পুরো ৪ জিবি একসাথে লোড করতে গিয়ে ক্র্যাশ করে, কিন্তু স্ট্রিম সামান্য ৬৪ কেবি মেমরিতে ধাপে ধাপে পুরো ফাইল প্রসেস করে।'
      }
    }
  ],
  quiz: {
    id: 'nod-fil-quiz',
    title: { en: 'Node.js File System & Streams Quiz', bn: 'Node.js ফাইল সিস্টেম ও স্ট্রিম কুইজ' },
    questions: [
      {
        id: 'nfq1',
        kind: 'mcq',
        topic: 'node: genuine file type verification',
        question: {
          en: 'Why is checking the file extension alone (e.g. .jpg) insufficient for validating uploaded user files?',
          bn: 'ব্যবহারকারীর আপলোড করা ফাইল যাচাই করার জন্য শুধু এক্সটেনশন (.jpg) দেখা কেন যথেষ্ট নয়?'
        },
        options: [
          { en: 'Attackers can rename malicious executable files (like .php or .sh) to .jpg; inspecting magic bytes is necessary', bn: 'আক্রমণকারীরা ক্ষতিকর স্ক্রিপ্টের নাম বদলে .jpg বানিয়ে দিতে পারে; তাই আসল ফাইল টাইপ বুঝতে ম্যাজিক বাইট দেখতে হয়' },
          { en: 'Because Node.js cannot read file extensions', bn: 'কারণ Node.js এক্সটেনশন পড়তে পারে না' },
          { en: 'Because Windows does not support image extensions', bn: 'কারণ উইন্ডোজ ইমেজ এক্সটেনশন সমর্থন করে না' },
          { en: 'Because jpg files are always corrupted', bn: 'কারণ জেপিজি ফাইল সবসময় নষ্ট থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Extensions can be forged.',
          bn: 'এক্সটেনশন সহজেই পরিবর্তন করা যায়।'
        },
        explanation: {
          en: 'Attackers frequently disguise malicious scripts with image extensions. Inspecting the first signature bytes (magic bytes) reveals the true file type.',
          bn: 'আক্রমণকারীরা প্রায়শই ক্ষতিকর কোডকে ছবির এক্সটেনশন দেয়। আসল ধরন চিনতে ফাইলের প্রথম সিগনেচার বাইট পরীক্ষা করা জরুরি।'
        }
      },
      {
        id: 'nfq2',
        kind: 'mcq',
        topic: 'node: path.join vs path.resolve',
        question: {
          en: 'What is the key difference between path.join() and path.resolve() in Node.js?',
          bn: 'Node.js-এ path.join() এবং path.resolve()-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          { en: 'path.resolve() always produces an absolute path resolved against current working directory; path.join() merely concatenates path segments', bn: 'path.resolve() বর্তমান ফোল্ডার বিবেচনা করে পূর্ণ এবসোলিউট পাথ দেয়; path.join() কেবল পাথগুলো জোড়া দেয়' },
          { en: 'path.join() deletes the file; path.resolve() creates it', bn: 'path.join() ফাইল মুছে ফেলে; path.resolve() তৈরি করে' },
          { en: 'path.resolve() works only in browsers', bn: 'path.resolve() শুধু ব্রাউজারে কাজ করে' },
          { en: 'There is no difference; they are identical aliases', bn: 'এদের মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Absolute vs concatenated path.',
          bn: 'এবসোলিউট বনাম সাধারণ জোড়া লাগা।'
        },
        explanation: {
          en: 'path.resolve processes paths from right to left, prepending the current working directory if no absolute path is reached, guaranteeing an absolute path.',
          bn: 'path.resolve সর্বদা পূর্ণাঙ্গ এবসোলিউট পাথ প্রদান করে, আর path.join কেবল সেগমেন্টগুলো সংযুক্ত করে নরম্যালাইজ করে।'
        }
      },
      {
        id: 'nfq3',
        kind: 'mcq',
        topic: 'node: stream pipeline cleanup and backpressure',
        question: {
          en: 'Why is stream.pipeline() strongly preferred over standard readable.pipe(writable)?',
          bn: 'সাধারণ readable.pipe(writable)-এর চেয়ে stream.pipeline() ব্যবহার করা কেন বেশি পছন্দনীয়?'
        },
        options: [
          { en: 'It automatically handles backpressure and cleans up all stream resources and listeners when an error occurs, preventing memory leaks', bn: 'এটি স্বয়ংক্রিয়ভাবে ব্যাকপ্রেশার সামলায় এবং এরর হলে সব স্ট্রিম রিসোর্স বন্ধ করে মেমরি লিক ঠেকায়' },
          { en: 'It makes file reads synchronous', bn: 'এটি ফাইল পড়া সিঙ্ক্রোনাস করে দেয়' },
          { en: 'It limits files to 1 megabyte', bn: 'এটি ফাইল ১ মেগাবাইটে সীমাবদ্ধ রাখে' },
          { en: 'It replaces HTTP protocol with WebSockets', bn: 'এটি ওয়েবসকেটে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Proper error handling and memory cleanup.',
          bn: 'সঠিক এরর হ্যান্ডলিং ও মেমরি পরিচ্ছন্নতা।'
        },
        explanation: {
          en: 'Legacy pipe() leaks file descriptors and memory if intermediate streams error. stream.pipeline() closes all streams properly on error or completion.',
          bn: 'পুরনো pipe() মেথডে এরর হলে স্ট্রিম ঝুলিয়ে থেকে মেমরি লিক করে, কিন্তু pipeline() সব রিসোর্স নিরাপদভাবে বন্ধ করে দেয়।'
        }
      },
      {
        id: 'nfq4',
        kind: 'mcq',
        topic: 'node: streams backpressure concept',
        question: {
          en: 'What is backpressure in Node.js streaming pipelines?',
          bn: 'Node.js স্ট্রিমিং পাইপলাইনে ব্যাকপ্রেশার বলতে কী বোঝায়?'
        },
        options: [
          { en: 'A condition where a Readable stream produces data faster than a Writable stream can consume it, requiring pausing to prevent RAM overload', bn: 'এমন অবস্থা যেখানে রিডেবল স্ট্রিম বেশি দ্রুত ডেটা পাঠায় কিন্তু রাইটেবল স্ট্রিম তা নিতে পারে না, ফলে র্যাম বাঁচাতে সাময়িক বিরতি দরকার হয়' },
          { en: 'An operating system kernel panic', bn: 'একটি অপারেটিং সিস্টেম কার্নেল সমস্যা' },
          { en: 'A network encryption failure', bn: 'একটি নেটওয়ার্ক এনক্রিপশন ব্যর্থতা' },
          { en: 'A CPU clock throttling condition', bn: 'সিপিইউ ক্লক কমিয়ে দেওয়ার অবস্থা' }
        ],
        answer: 0,
        hint: {
          en: 'Producer outpaces consumer rate.',
          bn: 'ডেটা উৎপাদক গ্রাহকের চেয়ে দ্রুত চলে।'
        },
        explanation: {
          en: 'Backpressure occurs when write buffers fill up (write() returns false). The readable stream pauses until the writable stream drains its buffer.',
          bn: 'রাইট বাফার পূর্ণ হয়ে গেলে ব্যাকপ্রেশার তৈরি হয়, ফলে রিড সাময়িক থামানো হয় যতক্ষণ না বাফার খালি হয়ে drain ইভেন্ট ঘটে।'
        }
      }
    ]
  }
};
