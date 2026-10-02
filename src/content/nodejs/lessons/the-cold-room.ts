import type { Lesson } from '../../../lib/types';

export const TheColdRoomLesson: Lesson = {
  slug: 'the-cold-room',
  tech: 'nodejs',
  title: {
    en: 'File System and Buffers — Asynchronous File I/O and Binary Data',
    bn: 'ফাইল সিস্টেম ও বাফার: অ্যাসিঙ্ক্রোনাস ফাইল আই/ও এবং বাইনারি ডাটা'
  },
  summary: {
    en: 'File handling in production Node.js backends demands a strict separation between blocking and non-blocking I/O. The modern node:fs/promises API delivers asynchronous, non-blocking disk operations that never freeze the event loop thread during high-concurrency requests. Node.js Buffers allocate raw binary memory outside the V8 heap for high-performance data transformations across UTF-8, Hex, and Base64 formats. Using node:path, developers normalize operating system path separators across Linux and Windows, defending against directory traversal attacks through resolve and startsWith jail checks. Finally, atomic writes using temporary files and fs.rename protect disk assets against data corruption during unexpected server restarts.',
    bn: 'প্রোডাকশন নোড.জেএস ব্যাকএন্ডে ফাইল পরিচালনার ক্ষেত্রে ব্লকিং ও নন-ব্লকিং আই/ও এর পার্থক্য বোঝা অত্যন্ত জরুরি। আধুনিক node:fs/promises এপিআই সম্পূর্ণ নন-ব্লকিংভাবে ডিস্ক অপারেশন সম্পন্ন করে, যা উচ্চ ট্রাফিকেও সার্ভারের ইভেন্ট লুপকে সচল রাখে। নোড.জেএস বাফার (Buffer) ভি৮ হিপের বাইরে সরাসরি মেমরি বরাদ্দ করে বাইনারি ডাটা পরিচালনা করে এবং UTF-8, Hex ও Base64 ফরম্যাটে দ্রুত ডাটা রূপান্তর করে। node:path মডিউলের মাধ্যমে বিভিন্ন অপারেটিং সিস্টেমের পাথ বিভাজন ঠিক রাখা হয় এবং resolve ও startsWith যাচাই করে ডিরেক্টরি ট্রাভার্সাল সাইবার আক্রমণ ঠেকানো হয়। তাছাড়া সাময়িক ফাইল লিখে fs.rename এর মাধ্যমে অ্যাটমিক রাইট নিশ্চিত করে ডাটা নষ্ট হওয়া রোধ করা হয়।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-first-plate',
    tech: 'nodejs',
    title: {
      en: 'HTTP Servers — Native Request Handling, Routing, and Body Parsing',
      bn: 'এইচটিটিপি সার্ভার: নেটিভ রিকোয়েস্ট হ্যান্ডলিং, রাউটিং এবং বডি পার্সিং'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'file-system-paradigms',
      text: {
        en: 'Modern File System Paradigms in Node.js',
        bn: 'নোড.জেএসে আধুনিক ফাইল সিস্টেমের কার্যপ্রণালী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design file storage backends, reading files synchronously freezes the single-threaded event loop, delaying every concurrent user. In production request handlers, blocking file calls are strictly prohibited.',
        bn: 'যখন আপনি ফাইল স্টোরেজ ব্যাকএন্ড ডিজাইন করেন, তখন ফাইল সিঙ্ক্রোনাসভাবে একবারে পড়তে গেলে পুরো ইভেন্ট লুপ স্তব্ধ হয়ে যায়, যার ফলে সমস্ত সক্রিয় ব্যবহারকারীর রিকোয়েস্ট আটকে যায়। প্রোডাকশন সার্ভারে রিকোয়েস্টের ভেতর ব্লকিং ফাইল অপারেশন ব্যবহার করা সম্পূর্ণ নিষিদ্ধ।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Node.js provides node:fs/promises for elegant async/await disk access. When your application performs disk I/O, libuv offloads the operation to its background worker thread pool, leaving the main thread entirely free to accept new incoming network requests.',
        bn: 'নোড.জেএস আধুনিক async/await ব্যবহারের জন্য node:fs/promises মডিউল প্রদান করে। যখন অ্যাপ্লিকেশন ডিস্ক অপারেশন পরিচালনা করে, libuv তা ব্যাকগ্রাউন্ড থ্রেড পুলে পাঠিয়ে দেয়, যার ফলে মূল থ্রেডটি নির্বিঘ্নে নতুন নেটওয়ার্ক রিকোয়েস্ট গ্রহণ করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'fs-promises',
          def: {
            en: 'The modern Promise-based asynchronous file system module in Node.js providing non-blocking disk access.',
            bn: 'নোড.জেএসের আধুনিক প্রমিজ-ভিত্তিক অ্যাসিঙ্ক্রোনাস ফাইল সিস্টেম মডিউল যা নন-ব্লকিং ডিস্ক অ্যাক্সেস প্রদান করে।'
          }
        },
        {
          term: 'buffer',
          def: {
            en: 'A fixed-length sequence of bytes allocated in raw memory outside the V8 JavaScript garbage-collected heap.',
            bn: 'ভি৮ জাভাস্ক্রিপ্ট হিপ মেমরির বাইরে বরাদ্দকৃত নির্দিষ্ট দৈর্ঘ্যের বাইট সিকোয়েন্স যা বাইনারি ডাটা ধারণ করে।'
          }
        },
        {
          term: 'path-traversal',
          def: {
            en: 'A security attack where unauthorized directory sequences like ../ escape safe storage boundaries.',
            bn: 'একটি নিরাপত্তা দুর্বলতা যেখানে ../ সিকোয়েন্স ব্যবহার করে অননুমোদিত ডিরেক্টরির গোপন ফাইল হাতিয়ে নেওয়া হয়।'
          }
        },
        {
          term: 'atomic-write',
          def: {
            en: 'A file write technique that saves data to a temporary file before renaming it over the destination atomically.',
            bn: 'একটি ফাইল লেখার কৌশল যেখানে সাময়িক ফাইলে লিখে তা রিনেম করে মূল ফাইলে রূপান্তর করা হয় যাতে ক্র্যাশে ডাটা নষ্ট না হয়।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'fs-api-comparison-table',
      text: {
        en: 'Comparison Matrix: Synchronous vs Callback vs Promise File APIs',
        bn: 'তুলনামূলক ম্যাট্রিক্স: সিনক্রোনাস বনাম কলব্যাক বনাম প্রমিজ ফাইল এপিআই'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the correct file system API depends on whether code executes during server startup or inside a runtime HTTP route.',
        bn: 'সঠিক ফাইল এপিআই নির্বাচন নির্ভর করে কোডটি সার্ভার শুরুর সময় চলছে নাকি লাইভ রিকোয়েস্ট হ্যান্ডলারের ভেতর চলছে তার ওপর।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'File System API Style', bn: 'ফাইল এপিআই ধরন' },
        { en: 'Event Loop Impact', bn: 'ইভেন্ট লুপের ওপর প্রভাব' },
        { en: 'Modern Best Practice', bn: 'আধুনিক স্ট্যান্ডার্ড' },
        { en: 'Typical Valid Use Case', bn: 'উপযুক্ত ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'node:fs (Synchronous, e.g. readFileSync)', bn: 'node:fs (সিনক্রোনাস, যেমন readFileSync)' },
          { en: 'Blocks entire thread completely until disk returns', bn: 'ডিস্ক থেকে ডাটা না আসা পর্যন্ত পুরো থ্রেড আটকে থাকে' },
          { en: 'Avoid completely in runtime server request paths', bn: 'লাইভ রিকোয়েস্ট হ্যান্ডলারে সম্পূর্ণ পরিহারযোগ্য' },
          { en: 'Initial bootstrap configuration or command-line scripts', bn: 'সার্ভার শুরুর প্রাথমিক কনফিগ লোড বা সিএলআই স্ক্রিপ্ট' }
        ],
        [
          { en: 'node:fs (Callbacks, e.g. readFile)', bn: 'node:fs (কলব্যাক, যেমন readFile)' },
          { en: 'Non-blocking via libuv worker thread pool', bn: 'libuv ওয়ার্কার থ্রেড পুলের মাধ্যমে নন-ব্লকিং' },
          { en: 'Legacy style, fully replaced by Promises', bn: 'পুরনো পদ্ধতি, যা প্রমিজ দ্বারা প্রতিস্থাপিত হয়েছে' },
          { en: 'Maintaining legacy codebases written before Node 14', bn: 'নোড ১৪ এর আগের পুরনো কোডবেস পরিচালনা' }
        ],
        [
          { en: 'node:fs/promises (e.g. await readFile)', bn: 'node:fs/promises (যেমন await readFile)' },
          { en: 'Non-blocking via libuv worker thread pool', bn: 'libuv ওয়ার্কার থ্রেড পুলের মাধ্যমে নন-ব্লকিং' },
          { en: 'Universal standard for modern Node.js backends', bn: 'আধুনিক নোড.জেএস ব্যাকএন্ডের সর্বজনীন স্ট্যান্ডার্ড' },
          { en: 'All HTTP route handlers, API endpoints, and microservices', bn: 'সমস্ত এইচটিটিপি রাউট হ্যান্ডলার, এপিআই ও মাইক্রোসার্ভিস' }
        ],
        [
          { en: 'node:fs/promises (FileHandle API)', bn: 'node:fs/promises (FileHandle এপিআই)' },
          { en: 'Non-blocking low-level byte cursor reading', bn: 'নন-ব্লকিং কার্সর ভিত্তিক বাইনারি রিডিং' },
          { en: 'Specialized for random byte offsets and chunks', bn: 'নির্দিষ্ট বাইট অফসেট থেকে ডাটা পড়ার কাজে উপযুক্ত' },
          { en: 'Embedded database storage engines and video streaming', bn: 'এমবেডেড ডেটাবেস ইঞ্জিন ও ভিডিও স্ট্রিমিং' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-buffer-and-traversal-code',
      text: {
        en: 'Executable Buffer and Directory Traversal Defense',
        bn: 'বাফার ম্যানিপুলেশন এবং নিরাপদ পাথ যাচাইয়ের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program verifies that an untrusted path cannot escape a designated safe directory, and inspects binary memory using Node.js Buffers.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি যাচাই করে যে কোনো অনিরাপদ পাথ সুরক্ষিত ডিরেক্টরি অতিক্রম করতে পারে না, এবং নোড.জেএস বাফার ব্যবহার করে বাইনারি মেমরি পরীক্ষা করে।'
      }
    },
    {
      type: 'code',
      code: `import path from 'node:path';
import { Buffer } from 'node:buffer';

const safeRoot = path.resolve('/safe/base');
const userInput = '../../etc/passwd';
const target = path.resolve(safeRoot, userInput);

// Defend against directory traversal attacks
const isSafe = target.startsWith(safeRoot + path.sep);

// Manipulate raw binary data using Buffers
const buf = Buffer.from('Node.js Buffer', 'utf-8');
const hex = buf.toString('hex');
const byteLength = buf.length;

console.log('Safe path check:', isSafe);
console.log('Buffer byte length =', byteLength);
console.log('Hex encoding prefix:', hex.slice(0, 14));

// prints: Safe path check: false
// prints: Buffer byte length = 14
// prints: Hex encoding prefix: 4e6f64652e6a73`
    },
    {
      type: 'heading',
      id: 'atomic-file-writes-pattern',
      text: {
        en: 'Preventing Disk Corruption with Atomic File Renames',
        bn: 'অ্যাটমিক ফাইল রিনেমের মাধ্যমে ডিস্কের ডাটা সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When writing state files or database snapshots directly to disk, an unexpected server crash or power interruption leaves the destination file corrupted with incomplete data. Production architectures prevent this by writing to a temporary file on the same filesystem volume (e.g. state.json.tmp) and then executing fs.rename(). At the operating system filesystem level, rename is an atomic operation: concurrent readers see either the old file or the new file, never an incomplete or torn write.',
        bn: 'যখন কোনো ডেটাবেস স্ন্যাপশট বা স্টেট ফাইল সরাসরি ডিস্কে লেখা হয়, তখন সার্ভার হঠাৎ রিস্টার্ট হলে ফাইলটি অর্ধেক লিখে নষ্ট হয়ে যেতে পারে। প্রোডাকশন সিস্টেমে এটি রোধ করতে প্রথমে একই ড্রাইভের সাময়িক ফাইলে (যেমন state.json.tmp) ডাটা লেখা হয় এবং এরপর fs.rename() চালানো হয়। অপারেটিং সিস্টেমের ফাইল সিস্টেম স্তরে রিনেম একটি অ্যাটমিক অপারেশন: পাঠকরা হয় পুরনো ফাইল অথবা সম্পূর্ণ নতুন ফাইল দেখতে পান, কখনোই কোনো অসম্পূর্ণ ফাইল পায় না।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Always use fs/promises: Never call synchronous fs methods inside HTTP request handlers to avoid blocking the event loop.',
          bn: 'fs/promises ব্যবহার: ইভেন্ট লুপ যাতে স্থবির না হয় সেজন্য রিকোয়েস্টের ভেতর কখনোই সিঙ্ক্রোনাস ফাইল মেথড ডাকবেন না।'
        },
        {
          en: 'Buffer binary power: Buffers manage raw byte sequences outside V8 heap for rapid encoding, hashing, and slicing.',
          bn: 'বাইনারি বাফারের ক্ষমতা: বাফার দ্রুত এনকোডিং ও মেমরি সাশ্রয়ী ম্যানিপুলেশনের জন্য ভি৮ হিপের বাইরে সরাসরি বাইট ধারণ করে।'
        },
        {
          en: 'Guard path traversal: Always jail user inputs using path.resolve combined with startsWith(safeRoot + path.sep).',
          bn: 'পাথ ট্রাভার্সাল প্রতিরোধ: path.resolve এবং startsWith(safeRoot + path.sep) দিয়ে ব্যবহারকারীর ইনপুট সুরক্ষিত সীমানায় বন্দি রাখুন।'
        },
        {
          en: 'Atomic rename safety: Prevent corrupted data files during crashes by writing to temp files and atomically renaming them.',
          bn: 'অ্যাটমিক রিনেমের সুরক্ষা: ক্র্যাশকালীন ত্রুটি থেকে বাঁচতে সাময়িক ফাইলে লিখে অ্যাটমিকালি রিনেম করে ডাটা অক্ষুণ্ণ রাখুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cr-ex1',
      kind: 'mcq',
      topic: 'directory-traversal-jail-check',
      question: {
        en: 'Why is path.join(safeDirectory, userInput) insufficient on its own to prevent directory traversal attacks?',
        bn: 'ডিরেক্টরি ট্রাভার্সাল সাইবার আক্রমণ ঠেকাতে শুধুমাত্র path.join(safeDirectory, userInput) ব্যবহার করা কেন যথেষ্ট নয়?'
      },
      options: [
        {
          en: 'If userInput contains relative dot-dot segments (e.g. "../../etc/passwd"), path.join resolves them upward, escaping the intended safe directory',
          bn: 'যদি userInput এ "../../etc/passwd" থাকে, তবে path.join ডিরেক্টরির উপরে উঠে নিরাপদ ফোল্ডারের বাইরে চলে যায়'
        },
        {
          en: 'Because path.join only works on Apple macOS computers',
          bn: 'কারণ path.join কেবল অ্যাপল ম্যাক কম্পিউটারে কাজ করে'
        },
        {
          en: 'Because path.join automatically encrypts the file name with a password',
          bn: 'কারণ path.join স্বয়ংক্রিয়ভাবে ফাইলের নাম পাসওয়ার্ড দিয়ে লক করে দেয়'
        },
        {
          en: 'Because path.join deletes the entire directory after 5 seconds',
          bn: 'কারণ ৫ সেকেন্ড পর path.join পুরো ডিরেক্টরি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'What happens when ".." segments are evaluated during path normalization?',
        bn: 'পাথ স্বাভাবিক করার সময় ".." থাকলে সেটি ফোল্ডারের কোন দিকে যায়?'
      },
      explanation: {
        en: 'path.join simply concatenates and normalizes segments. Attackers supply "../" to escape. You must verify that the resolved path startsWith the safe root.',
        bn: 'path.join কেবল পাথ জোড়া দেয়। আক্রমণকারীরা "../" দিয়ে বাইরে চলে যায়। তাই startsWith দিয়ে সুরক্ষিত ফোল্ডারের সীমানা যাচাই করতে হয়।'
      }
    },
    {
      id: 'cr-ex2',
      kind: 'mcq',
      topic: 'atomic-rename-advantage',
      question: {
        en: 'Why do production systems write to a temporary file and atomically rename it, rather than writing directly to the target file?',
        bn: 'প্রোডাকশন সিস্টেমে সরাসরি মূল ফাইলে না লিখে কেন সাময়িক ফাইলে লিখে অ্যাটমিকালি রিনেম করা হয়?'
      },
      options: [
        {
          en: 'At the OS filesystem level, rename is an atomic operation: if the server crashes or loses power, readers never observe a corrupted, half-written file',
          bn: 'ওএস ফাইল সিস্টেম স্তরে রিনেম একটি অ্যাটমিক অপারেশন: সার্ভার ক্র্যাশ করলেও পাঠকরা কখনোই কোনো অসম্পূর্ণ বা নষ্ট ফাইল দেখতে পান না'
        },
        {
          en: 'Because temporary files take up zero bytes of hard disk space',
          bn: 'কারণ সাময়িক ফাইল ডিস্কে কোনো জায়গা নেয় না'
        },
        {
          en: 'Because renaming a file increases internet download speeds by 100 percent',
          bn: 'কারণ ফাইলের নাম পরিবর্তন করলে ইন্টারনেটের স্পিড ১০০ গুণ বাড়ে'
        },
        {
          en: 'Because Node.js does not allow creating new files directly',
          bn: 'কারণ নোড.জেএস সরাসরি নতুন ফাইল তৈরির অনুমতি দেয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'An interrupted direct write leaves half of the file missing. What does an atomic rename guarantee to readers?',
        bn: 'মাঝপথে রাইট বন্ধ হলে ফাইল নষ্ট হয়। অ্যাটমিক রিনেম কী নিশ্চয়তা দেয়?'
      },
      explanation: {
        en: 'Atomic rename replaces the file pointer in a single filesystem transaction, preventing corrupt partial reads during crashes.',
        bn: 'অ্যাটমিক রিনেম এক পদক্ষেপে ফাইল পয়েন্টার বদলে দেয়, ফলে ক্র্যাশ হলেও ফাইল নষ্ট হওয়া অসম্ভব।'
      }
    },
    {
      id: 'cr-ex3',
      kind: 'mcq',
      topic: 'fs-sync-vs-async-performance',
      question: {
        en: 'What severe performance issue occurs if a developer calls fs.readFileSync() inside an Express or HTTP request handler?',
        bn: 'কোনো ডেভেলপার যদি এক্সপ্রেস বা এইচটিটিপি রিকোয়েস্ট হ্যান্ডলারের ভেতর fs.readFileSync() ডাকেন, তবে কী ভয়াবহ পারফরম্যান্স সমস্যা দেখা দেয়?'
      },
      options: [
        {
          en: 'It completely blocks the single-threaded event loop, preventing all concurrent users from receiving responses until disk reading finishes',
          bn: 'এটি সিঙ্গেল-থ্রেডেড ইভেন্ট লুপকে পুরোপুরি আটকে দেয়, ফলে ডিস্ক রিড শেষ না হওয়া পর্যন্ত অন্যান্য সমস্ত গ্রাহকের রিকোয়েস্ট আটকে থাকে'
        },
        {
          en: 'The server hardware keyboard catches fire immediately',
          bn: 'সার্ভার হার্ডওয়্যারের কীবোর্ডে তাৎক্ষণিকভাবে আগুন ধরে যায়'
        },
        {
          en: 'The Node.js program transforms into a Python program',
          bn: 'নোড.জেএস প্রোগ্রামটি পাইথন প্রোগ্রামে রূপান্তরিত হয়'
        },
        {
          en: 'The database automatically deletes all user accounts',
          bn: 'ডেটাবেস থেকে স্বয়ংক্রিয়ভাবে সব ব্যবহারকারীর অ্যাকাউন্ট মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Node.js runs JavaScript on a single thread. If that thread waits synchronously for disk hardware, what can it do for other clients?',
        bn: 'নোড.জেএস একটি মাত্র থ্রেডে জাভাস্ক্রিপ্ট চালায়। সেই থ্রেড ডিস্কের জন্য আটকে গেলে অন্য ক্লায়েন্টের কী হবে?'
      },
      explanation: {
        en: 'Synchronous fs methods freeze the JavaScript execution thread. Always use fs.promises.readFile() inside request handlers.',
        bn: 'সিঙ্ক্রোনাস মেথড পুরো থ্রেডকে ফ্রিজ করে দেয়। তাই রিকোয়েস্টের ভেতর সর্বদা fs.promises.readFile() ব্যবহার করতে হবে।'
      }
    }
  ],
  quiz: {
    id: 'the-cold-room-quiz',
    title: {
      en: 'File System and Buffers Quiz',
      bn: 'ফাইল সিস্টেম ও বাফার কুইজ'
    },
    questions: [
      {
        id: 'cr-q1',
        kind: 'mcq',
        topic: 'buffer-memory-allocation',
        question: {
          en: 'Where does Node.js allocate memory for Buffer instances?',
          bn: 'নোড.জেএস বাফার (Buffer) অবজেক্টের জন্য মেমরি কোথায় বরাদ্দ করে?'
        },
        options: [
          {
            en: 'In raw C++ memory outside the V8 JavaScript garbage-collected heap, managed directly by the libuv runtime',
            bn: 'ভি৮ জাভাস্ক্রিপ্ট আবর্জনা-সংগ্রাহক হিপের বাইরে সরাসরি সি++ মেমরিতে, যা libuv রানটাইম দ্বারা নিয়ন্ত্রিত হয়'
          },
          {
            en: 'Inside the browser localStorage database',
            bn: 'ওয়েব ব্রাউজারের লোকাল স্টোরেজ ডেটাবেসের ভেতর'
          },
          {
            en: 'Inside a remote cloud satellite',
            bn: 'একটি দূরবর্তী ক্লাউড স্যাটেলাইটের ভেতর'
          },
          {
            en: 'On the computer monitor screen pixels',
            bn: 'কম্পিউটার মনিটরের পর্দার পিক্সেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Buffers are designed for fast binary I/O without the overhead of V8 garbage collector tracing.',
          bn: 'বাফার দ্রুত বাইনারি আই/ও পরিচালনার জন্য ভি৮ গারবেজ কালেক্টরের চাপমুক্ত মেমরিতে থাকে।'
        },
        explanation: {
          en: 'Buffers allocate raw memory outside V8 heap, enabling ultra-fast low-level networking and file system streaming.',
          bn: 'বাফার ভি৮ হিপের বাইরে মেমরি নিয়ে অত্যন্ত দ্রুত গতিতে নেটওয়ার্ক ও ফাইল ডাটা স্থানান্তর করতে পারে।'
        }
      },
      {
        id: 'cr-q2',
        kind: 'mcq',
        topic: 'path-resolve-vs-join',
        question: {
          en: 'What is the key difference between path.join() and path.resolve() in Node.js?',
          bn: 'নোড.জেএসে path.join() এবং path.resolve() এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'path.join concatenates path segments with OS separators, whereas path.resolve processes segments from right to left until creating an absolute path anchored to cwd',
            bn: 'path.join কেবল বিভাজক দিয়ে পাথগুলো যুক্ত করে, অন্যদিকে path.resolve বর্তমান ফোল্ডারের সাপেক্ষে একটি পরম (absolute) পাথ তৈরি করে'
          },
          {
            en: 'path.resolve only works with URLs and cannot handle files',
            bn: 'path.resolve শুধু ইউআরএলে কাজ করে এবং ফাইল সামলাতে পারে না'
          },
          {
            en: 'path.join deletes the files it connects together',
            bn: 'path.join যেসব ফাইল জোড়া দেয় সেগুলোকে মুছে ফেলে'
          },
          {
            en: 'path.resolve is deprecated and removed from Node.js',
            bn: 'path.resolve বাতিল করে নোড.জেএস থেকে সরিয়ে ফেলা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'resolve always produces an absolute path starting with "/" or "C:\\". join just glues segments together.',
          bn: 'resolve সর্বদা একটি পরম (absolute) পাথ দেয়। join কেবল টুকরোগুলো যুক্ত করে স্বাভাবিক করে।'
        },
        explanation: {
          en: 'path.resolve acts like a series of cd commands to build an absolute path. path.join normalizes and concatenates.',
          bn: 'path.resolve সিডি কমান্ডের মতো পরম পাথ তৈরি করে, আর path.join কেবল সেগমেন্টগুলো সংযুক্ত করে।'
        }
      },
      {
        id: 'cr-q3',
        kind: 'mcq',
        topic: 'filehandle-leak-prevention',
        question: {
          en: 'When using fs.promises.open() to obtain a FileHandle, what is essential to prevent operating system file descriptor exhaustion?',
          bn: 'fs.promises.open() দিয়ে একটি FileHandle নেওয়ার পর অপারেটিং সিস্টেমের ফাইল ডেসক্রিপ্টর ফুরিয়ে যাওয়া ঠেকাতে কী করা জরুরি?'
        },
        options: [
          {
            en: 'Always wrap operations in a try...finally block and ensure fileHandle.close() is invoked in the finally clause',
            bn: 'সর্বদা try...finally ব্লকে কোড রাখা এবং finally অংশে fileHandle.close() কল করা নিশ্চিত করা'
          },
          {
            en: 'Restart the computer server after every file read',
            bn: 'প্রতিটি ফাইল পড়ার পর সার্ভার কম্পিউটার রিস্টার্ট করা'
          },
          {
            en: 'Change the file extension to .zip before reading',
            bn: 'পড়ার পূর্বে ফাইলের এক্সটেনশন বদলে .zip করা'
          },
          {
            en: 'File handles close automatically after 1 millisecond',
            bn: '১ মিলিসেকেন্ড পর ফাইল হ্যান্ডল নিজে নিজেই বন্ধ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The operating system imposes a strict limit (e.g. ulimit -n 1024) on open file descriptors. Unclosed handles will exhaust it.',
          bn: 'ওএস এ ফাইল হ্যান্ডলের একটি নির্দিষ্ট সীমা থাকে। হ্যান্ডল বন্ধ না করলে দ্রুত লিমিট শেষ হয়ে সার্ভার ক্র্যাশ করবে।'
        },
        explanation: {
          en: 'Unclosed FileHandles leak OS file descriptors. Using try...finally guarantees fileHandle.close() runs even if errors occur.',
          bn: 'খোলা ফাইল হ্যান্ডল ডেসক্রিপ্টর লিক করে। try...finally নিশ্চিত করে যে ত্রুটি হলেও হ্যান্ডলটি সঠিকভাবে বন্ধ হবে।'
        }
      },
      {
        id: 'cr-q4',
        kind: 'mcq',
        topic: 'buffer-tostring-encodings',
        question: {
          en: 'Which character encoding produces a hexadecimal representation of raw binary bytes in Node.js Buffers?',
          bn: 'নোড.জেএস বাফারের কাঁচা বাইনারি বাইটগুলোর হেক্সাডেসিমেল রূপ পেতে কোন ক্যারেক্টার এনকোডিং ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'buf.toString("hex")',
            bn: 'buf.toString("hex")'
          },
          {
            en: 'buf.toHexadecimalColor()',
            bn: 'buf.toHexadecimalColor()'
          },
          {
            en: 'buf.toBinaryAlphabet()',
            bn: 'buf.toBinaryAlphabet()'
          },
          {
            en: 'buf.asBase10Decimal()',
            bn: 'buf.asBase10Decimal()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Common encodings supported by Buffer include "utf-8", "hex", "base64", and "latin1".',
          bn: 'বাফারে ব্যবহৃত সাধারণ এনকোডিংগুলো হলো "utf-8", "hex", "base64" এবং "latin1"।'
        },
        explanation: {
          en: 'Calling buf.toString("hex") encodes each byte of the buffer as two hexadecimal characters [0-9a-f].',
          bn: 'buf.toString("hex") ডাকলে বাফারের প্রতি বাইট দুটি হেক্সাডেসিমেল অক্ষরে রূপান্তরিত হয়।'
        }
      }
    ]
  }
};
