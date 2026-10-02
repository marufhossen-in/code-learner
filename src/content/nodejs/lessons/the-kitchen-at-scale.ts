import type { Lesson } from '../../../lib/types';

export const TheKitchenAtScaleLesson: Lesson = {
  slug: 'the-kitchen-at-scale',
  tech: 'nodejs',
  title: {
    en: 'Node.js at Scale — Cluster, Worker Threads, and Process Management',
    bn: 'স্কেলযোগ্য নোড.জেএস: ক্লাস্টার, ওয়ার্কার থ্রেড এবং প্রসেস ব্যবস্থাপনা'
  },
  summary: {
    en: 'Modern server hardware features dozens of CPU cores, but because Node.js executes JavaScript on a single thread, an unscaled process leaves the majority of hardware idle. Production Node architectures scale horizontally across cores using the native node:cluster module, which forks worker processes that share server ports with zero-downtime respawns upon failure. For CPU-bound mathematical operations such as cryptographic hashing, image processing, and PDF rendering, developers leverage node:worker_threads to run parallel execution contexts with shared memory. When executing external system commands, secure systems enforce node:child_process spawn with explicit argument arrays, preventing arbitrary shell command injection attacks.',
    bn: 'আধুনিক সার্ভার হার্ডওয়্যারে বহু সিপিইউ কোর থাকা সত্ত্বেও নোড.জেএস একটি মাত্র থ্রেডে জাভাস্ক্রিপ্ট চালানোর কারণে বেশিরভাগ কোর অলস পড়ে থাকে। প্রোডাকশন ব্যবস্থায় নোডের node:cluster মডিউল ব্যবহার করে সার্ভারের প্রতিটি কোরে একটি করে ওয়ার্কার প্রসেস ফর্ক করা হয়, যা একই পোর্ট শেয়ার করে এবং কোনো ওয়ার্কার ক্র্যাশ করলে তাৎক্ষণিকভাবে নতুন ওয়ার্কার চালু করে শূন্য ডাউনটাইম নিশ্চিত করে। তাছাড়া ক্রিপ্টোগ্রাফিক হ্যাশিং বা ইমেজ প্রসেসিংয়ের মতো ভারী গাণিতিক কাজের জন্য node:worker_threads দিয়ে মূল ইভেন্ট লুপকে মুক্ত রাখা হয়। আর বহিরাগত সিস্টেম কমান্ড চালানোর সময় শেল ইনজেকশন সাইবার আক্রমণ ঠেকাতে child_process spawn এর সাথে অ্যারে আকারে আর্গুমেন্ট পাঠানো হয়।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'multicore-scaling-architecture',
      text: {
        en: 'Multi-Core Architecture and Scaling Primitives',
        bn: 'মাল্টি-কোর আর্কিটেকচার এবং স্কেলিং কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you deploy Node.js web applications to multi-core production cloud instances, running a single process utilizes only a fraction of your computing resources. Because the JavaScript engine executes on a single thread, a single process cannot natively utilize multiple CPU cores simultaneously.',
        bn: 'যখন আপনি মাল্টি-কোর ক্লাউড সার্ভারে নোড.জেএস ওয়েব অ্যাপ্লিকেশন চালান, তখন একটি মাত্র প্রসেস চালালে হার্ডওয়্যারের সামান্য অংশই ব্যবহৃত হয়। যেহেতু জাভাস্ক্রিপ্ট ইঞ্জিন একটি একক থ্রেডে চলে, তাই একটি মাত্র প্রসেস নিজে থেকে সব সিপিইউ কোর ব্যবহার করতে পারে না।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Node.js provides two core solutions for multi-core scalability: the node:cluster module for multi-process scaling across CPU cores, and node:worker_threads for multi-threaded parallel computation within a single process. Selecting the right primitive ensures maximum throughput while keeping the main event loop responsive.',
        bn: 'মাল্টি-কোর প্রসেসর ব্যবহারের জন্য নোড.জেএস দুটি প্রধান কৌশল সরবরাহ করে: সব কোরে প্রসেস ছড়ানোর জন্য node:cluster মডিউল, এবং ভারী কাজের জন্য প্রসেসের ভেতর মাল্টি-থ্রেডিং চালাতে node:worker_threads। সঠিক কৌশল বাছাই করলে সার্ভারের গতি সর্বোচ্চ হয় এবং মূল ইভেন্ট লুপ সর্বদা মুক্ত থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cluster-module',
          def: {
            en: 'A native Node.js module that forks child processes sharing server ports to utilize all available CPU cores.',
            bn: 'একটি নেটিভ নোড.জেএস মডিউল যা সার্ভারের সব সিপিইউ কোর ব্যবহারের জন্য একই পোর্ট শেয়ারকারী একাধিক প্রসেস তৈরি করে।'
          }
        },
        {
          term: 'worker-threads',
          def: {
            en: 'A Node.js module providing real multi-threading with shared memory for heavy CPU-bound computation.',
            bn: 'একটি নোড.জেএস মডিউল যা ভারী সিপিইউ কাজের জন্য একই প্রসেসে শেয়ার্ড মেমরিসহ সত্যিকারের মাল্টি-থ্রেডিং সুবিধা দেয়।'
          }
        },
        {
          term: 'child-process-spawn',
          def: {
            en: 'A method that launches an external system executable directly with argument arrays without invoking an OS shell.',
            bn: 'একটি মেথড যা ওএস শেল ছাড়াই সরাসরি আর্গুমেন্ট অ্যারে দিয়ে বহিরাগত এক্সিকিউটেবল ফাইল নিরাপদে চালায়।'
          }
        },
        {
          term: 'round-robin-balancing',
          def: {
            en: 'The default libuv scheduling algorithm used by the primary cluster process to distribute incoming network sockets evenly across workers.',
            bn: 'একটি শিডিউলিং অ্যালগরিদম যার মাধ্যমে প্রাইমারি ক্লাস্টার প্রসেস আগত নেটওয়ার্ক সকেটগুলোকে সব ওয়ার্কারের মধ্যে সুষমভাবে বণ্টন করে।'
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
      id: 'cluster-vs-workers-table',
      text: {
        en: 'Comparison Matrix: Cluster vs Worker Threads vs Child Process',
        bn: 'তুলনামূলক ম্যাট্রিক্স: ক্লাস্টার বনাম ওয়ার্কার থ্রেডস বনাম চাইল্ড প্রসেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Choosing the correct concurrency tool depends on whether your workload is network I/O-bound or CPU-bound.',
        bn: 'সঠিক কনকারেন্সি টুল নির্বাচন নির্ভর করে আপনার সিস্টেমের কাজের চাপ নেটওয়ার্ক আই/ও ভিত্তিক নাকি সিপিইউ ভিত্তিক তার ওপর।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Scaling Primitive', bn: 'স্কেলিং মেকানিজম' },
        { en: 'Architecture Level', bn: 'আর্কিটেকচার স্তর' },
        { en: 'Memory Isolation', bn: 'মেমরি আইসোলেশন' },
        { en: 'Best Real-World Use Case', bn: 'বাস্তব প্রোডাকশন ব্যবহার' }
      ],
      rows: [
        [
          { en: 'node:cluster', bn: 'node:cluster' },
          { en: 'Multi-Process (OS forks)', bn: 'মাল্টি-প্রসেস (ওএস ফর্ক)' },
          { en: 'Fully isolated memory per worker process', bn: 'প্রতিটি ওয়ার্কার প্রসেসের সম্পূর্ণ স্বাধীন মেমরি' },
          { en: 'Scaling HTTP throughput across all CPU cores on a server', bn: 'সার্ভারের সব কোরে এইচটিটিপি রিকোয়েস্টের সংখ্যা বাড়ানো' }
        ],
        [
          { en: 'node:worker_threads', bn: 'node:worker_threads' },
          { en: 'Multi-Thread (in-process threads)', bn: 'মাল্টি-থ্রেড (প্রসেসের ভেতরের থ্রেড)' },
          { en: 'Shared memory via SharedArrayBuffer', bn: 'SharedArrayBuffer দিয়ে শেয়ার্ড মেমরি ব্যবহার' },
          { en: 'Heavy CPU computation (cryptography, PDF generation, image resize)', bn: 'ভারী সিপিইউ কাজ (ক্রিপ্টোগ্রাফি, পিডিএফ তৈরি, ছবি প্রসেসিং)' }
        ],
        [
          { en: 'child_process.spawn', bn: 'child_process.spawn' },
          { en: 'External binary execution', bn: 'বহিরাগত বাইনারি চালানো' },
          { en: 'Separate OS process with piped streams', bn: 'স্ট্রিমের মাধ্যমে সংযুক্ত পৃথক ওএস প্রসেস' },
          { en: 'Executing CLI tools safely with arguments (ffmpeg, git, python)', bn: 'নিরাপদে কমান্ড-লাইন টুল চালানো (ffmpeg, git, python)' }
        ],
        [
          { en: 'child_process.exec', bn: 'child_process.exec' },
          { en: 'Shell command execution (/bin/sh)', bn: 'শেল কমান্ড চালনা (/bin/sh)' },
          { en: 'Separate shell process buffers output', bn: 'পৃথক শেল প্রসেস আউটপুট বাফার করে' },
          { en: 'Quick scripts only; vulnerable to command injection', bn: 'ছোট স্ক্রিপ্ট; কমান্ড ইনজেকশন আক্রমণের চরম ঝুঁকি থাকে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-scaling-code',
      text: {
        en: 'Executable Cluster Inspection and Secure Process Spawning',
        bn: 'ক্লাস্টার পর্যবেক্ষণ ও নিরাপদ প্রসেস স্পনিংয়ের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program inspects the host machine’s CPU topology using node:os and executes an external command securely with spawnSync using an argument list instead of a shell string.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি node:os দিয়ে হোস্ট কম্পিউটারের সিপিইউ কোর সংখ্যা পর্যবেক্ষণ করে এবং শেলের বদলে আর্গুমেন্ট অ্যারে ব্যবহার করে spawnSync দিয়ে নিরাপদে কমান্ড চালায়।'
      }
    },
    {
      type: 'code',
      code: `import os from 'node:os';
import { spawnSync } from 'node:child_process';

// Inspect available CPU cores
const coreCount = os.cpus().length;

// Secure execution using argument arrays to prevent shell injection
const result = spawnSync('node', ['-e', 'console.log(10 + 20)'], {
  encoding: 'utf-8'
});

const calculated = parseInt(result.stdout.trim(), 10);

console.log('Available CPU cores count =', coreCount);
console.log('Spawn secure output =', calculated);

// prints: Available CPU cores count = 2
// prints: Spawn secure output = 30`
    },
    {
      type: 'heading',
      id: 'command-injection-defense',
      text: {
        en: 'Preventing Command Injection in Child Processes',
        bn: 'চাইল্ড প্রসেসে কমান্ড ইনজেকশন প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A frequent high-severity vulnerability in backend services occurs when developers use child_process.exec() with string concatenation. If an attacker passes a filename containing shell metacharacters (such as file.txt; rm -rf /), the system shell executes both commands with the server’s privileges. Production architectures eliminate this risk by using child_process.spawn() or execFile(). By passing arguments in an array, the operating system kernel treats the user input strictly as a literal argument string, completely disarming shell injection.',
        bn: 'ব্যাকএন্ড সার্ভারে প্রায়ই একটি মারাত্মক নিরাপত্তা ত্রুটি ঘটে যখন ডেভেলপাররা স্ট্রিং জোড়া লাগিয়ে child_process.exec() ব্যবহার করেন। আক্রমণকারী যদি ফাইলের নামের ভেতর শেলের বিশেষ চিহ্ন (যেমন file.txt; rm -rf /) পাঠিয়ে দেয়, তবে অপারেটিং সিস্টেমের শেল আক্রমণকারীর কমান্ডটি কার্যকর করে ফেলে। প্রোডাকশন আর্কিটেকচারে child_process.spawn() বা execFile() ব্যবহার করে এই ঝুঁকি সম্পূর্ণ দূর করা হয়। আর্গুমেন্টগুলো অ্যারে আকারে পাঠানোয় ওএস কার্নেল ইনপুটকে কোনো কমান্ড না ভেবে সরাসরি একটি সাধারণ টেক্সট হিসেবে গণ্য করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Scale across cores: Use node:cluster to fork worker processes matching the number of available CPU cores.',
          bn: 'সব কোরে স্কেলিং: সার্ভারের সমস্ত সিপিইউ কোর কাজে লাগাতে node:cluster দিয়ে উপযুক্ত সংখ্যক ওয়ার্কার ফর্ক করুন।'
        },
        {
          en: 'Worker threads for CPU: Move mathematical and media processing to worker_threads to prevent freezing the loop.',
          bn: 'সিপিইউর জন্য ওয়ার্কার থ্রেড: ভারী হিসাব ও মিডিয়া প্রসেসিং worker_threads এ পাঠান যাতে মূল লুপ স্থবির না হয়।'
        },
        {
          en: 'Always use spawn with arrays: Never use exec() with unsanitized user strings to avoid fatal command injection.',
          bn: 'অ্যারে দিয়ে spawn ব্যবহার: কমান্ড ইনজেকশন ঠেকাতে ব্যবহারকারীর ইনপুটের সাথে কখনোই exec() ব্যবহার করবেন না।'
        },
        {
          en: 'Automatic recovery: In cluster mode, listen for worker exit events and immediately fork a replacement worker.',
          bn: 'স্বয়ংক্রিয় রিকভারি: ক্লাস্টার মোডে কোনো ওয়ার্কার ক্র্যাশ করলে exit ইভেন্ট শুনে সাথে সাথে নতুন ওয়ার্কার তৈরি করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'ks-ex1',
      kind: 'mcq',
      topic: 'cluster-round-robin-distribution',
      question: {
        en: 'How does the primary cluster process distribute incoming TCP network connections across worker processes in Node.js?',
        bn: 'নোড.জেএসে প্রাইমারি ক্লাস্টার প্রসেস কীভাবে ওয়ার্কার প্রসেসগুলোর মধ্যে আগত টিসিপি নেটওয়ার্ক সংযোগ বিতরণ করে?'
      },
      options: [
        {
          en: 'Using Round-Robin scheduling: The primary listens on the port and accepts connections, handing them sequentially to idle workers',
          bn: 'রাউন্ড-রবিন শিডিউলিং ব্যবহার করে: প্রাইমারি প্রসেস মূল পোর্টে শুনে সংযোগ গ্রহণ করে এবং ক্রমানুসারে সচল ওয়ার্কারদের হস্তান্তর করে'
        },
        {
          en: 'By sending connections only to the worker with the highest RAM memory',
          bn: 'কেবলমাত্র সবচেয়ে বেশি র‍্যাম মেমরি থাকা ওয়ার্কারের কাছে সংযোগ পাঠিয়ে'
        },
        {
          en: 'By randomly choosing a random server in a different country',
          bn: 'অন্য কোনো দেশের সার্ভারে এলোমেলোভাবে সংযোগ পাঠিয়ে'
        },
        {
          en: 'Workers do not support network connections',
          bn: 'ওয়ার্কার প্রসেসে কোনো নেটওয়ার্ক সংযোগ সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'On all platforms except Windows, Node.js defaults to Round-Robin load distribution for cluster workers.',
        bn: 'উইন্ডোজ ব্যতীত অন্য সব প্ল্যাটফর্মে ক্লাস্টার ওয়ার্কারদের মধ্যে রাউন্ড-রবিন পদ্ধতিতে কাজ বণ্টন করা হয়।'
      },
      explanation: {
        en: 'In cluster mode, the primary accepts incoming TCP sockets and balances them across workers using round-robin scheduling.',
        bn: 'ক্লাস্টার মোডে মূল প্রাইমারি প্রসেস পোর্ট ওপেন রাখে এবং রাউন্ড-রবিন নিয়মে ওয়ার্কারদের কাছে সংযোগ পৌঁছে দেয়।'
      }
    },
    {
      id: 'ks-ex2',
      kind: 'mcq',
      topic: 'child-process-command-injection',
      question: {
        en: 'Why is child_process.spawn(cmd, argsArray) immune to command injection attacks compared to child_process.exec(cmdString)?',
        bn: 'child_process.exec(cmdString) এর তুলনায় child_process.spawn(cmd, argsArray) কেন কমান্ড ইনজেকশন আক্রমণ থেকে সম্পূর্ণ নিরাপদ?'
      },
      options: [
        {
          en: 'spawn invokes the binary directly and passes arguments as literal strings to the OS kernel, bypassing the shell and preventing command chaining',
          bn: 'spawn কোনো শেল চালু না করে সরাসরি বাইনারি চালায় এবং আর্গুমেন্টগুলোকে আক্ষরিক স্ট্রিং হিসেবে পাঠায়, ফলে কমান্ড জোড়া লাগানো অসম্ভব হয়'
        },
        {
          en: 'Because spawn automatically scans files with an antivirus program',
          bn: 'কারণ spawn স্বয়ংক্রিয়ভাবে একটি অ্যান্টিভাইরাস দিয়ে ফাইল স্ক্যান করে'
        },
        {
          en: 'Because spawn only runs on Linux computers',
          bn: 'কারণ spawn কেবল লিনাক্স কম্পিউটারে চলে'
        },
        {
          en: 'Because spawn converts all commands into encrypted mathematical equations',
          bn: 'কারণ spawn সমস্ত কমান্ডকে এনক্রিপ্ট করা গাণিতিক সমীকরণে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The operating system shell (e.g. bash or sh) interprets semicolons and pipes. spawn does not invoke a shell by default.',
        bn: 'অপারেটিং সিস্টেমের শেল সেমিকোলন বা পাইপকে কমান্ড বিভাজক মনে করে। spawn ডিফল্টভাবে কোনো শেল ব্যবহারই করে না।'
      },
      explanation: {
        en: 'spawn passes arguments directly to the OS execve system call without shell interpretation, neutralizing shell metacharacters.',
        bn: 'spawn শেল ছাড়াই সরাসরি ওএস কার্নেলে আর্গুমেন্ট পাঠায়, যার ফলে শেলের বিপজ্জনক মেটাক্যারেক্টারগুলো নিষ্ক্রিয় থাকে।'
      }
    },
    {
      id: 'ks-ex3',
      kind: 'mcq',
      topic: 'worker-threads-vs-cluster-memory',
      question: {
        en: 'What is the key architectural difference between node:worker_threads and node:cluster?',
        bn: 'node:worker_threads এবং node:cluster এর মধ্যে প্রধান স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Cluster forks separate operating system processes with independent memory spaces, whereas Worker Threads run inside the same process and can share memory',
          bn: 'ক্লাস্টার পৃথক মেমরি স্পেসসহ আলাদা ওএস প্রসেস তৈরি করে, অন্যদিকে ওয়ার্কার থ্রেডস একই প্রসেসের ভেতর চলে এবং শেয়ার্ড মেমরি ব্যবহার করতে পারে'
        },
        {
          en: 'Cluster is written in Python, while Worker Threads are written in Java',
          bn: 'ক্লাস্টার পাইথনে লেখা, আর ওয়ার্কার থ্রেডস জাভায় লেখা'
        },
        {
          en: 'Worker Threads can only process text files smaller than 100 bytes',
          bn: 'ওয়ার্কার থ্রেডস কেবল ১০০ বাইটের চেয়ে ছোট টেক্সট ফাইল প্রসেস করতে পারে'
        },
        {
          en: 'Cluster is completely deprecated and banned in modern Node.js',
          bn: 'ক্লাস্টার সম্পূর্ণ বাতিল এবং আধুনিক নোড.জেএসে নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Processes have separate heaps and PIDs. Threads share the process heap and can use SharedArrayBuffer.',
        bn: 'আলাদা প্রসেসের মেমরি সম্পূর্ণ বিচ্ছিন্ন থাকে। থ্রেডগুলো একই প্রসেসের ভেতর থেকে মেমরি শেয়ার করতে পারে।'
      },
      explanation: {
        en: 'Cluster scales through OS process isolation, while Worker Threads run lightweight threads with optional shared memory.',
        bn: 'ক্লাস্টার আলাদা প্রসেসের মাধ্যমে কাজ ভাগ করে, আর ওয়ার্কার থ্রেডস একই প্রসেসে স্বল্প মেমরির থ্রেডে কাজ সম্পন্ন করে।'
      }
    }
  ],
  quiz: {
    id: 'the-kitchen-at-scale-quiz',
    title: {
      en: 'Node.js at Scale Quiz',
      bn: 'স্কেলযোগ্য নোড.জেএস কুইজ'
    },
    questions: [
      {
        id: 'ks-q1',
        kind: 'mcq',
        topic: 'cluster-zero-downtime-restart',
        question: {
          en: 'How do production clusters achieve zero-downtime application deployments using the cluster module?',
          bn: 'ক্লাস্টার মডিউল ব্যবহার করে প্রোডাকশন সার্ভারে কীভাবে শূন্য ডাউনটাইমে নতুন কোড ডিপ্লয় করা হয়?'
        },
        options: [
          {
            en: 'By restarting workers one by one (rolling restart): Disconnecting an old worker, waiting for a new worker to start listening, and repeating for each core',
            bn: 'একের পর এক রোলিং রিস্টার্টের মাধ্যমে: একটি পুরনো ওয়ার্কার বিচ্ছিন্ন করে নতুন ওয়ার্কার চালু হওয়া পর্যন্ত অপেক্ষা করে প্রতিটি কোরে একই পুনরাবৃত্তি করা'
          },
          {
            en: 'By unplugging the power cord from the server for 5 seconds',
            bn: 'সার্ভার থেকে ৫ সেকেন্ডের জন্য পাওয়ার ক্যাবল খুলে রেখে'
          },
          {
            en: 'By killing all workers simultaneously and letting users wait 10 minutes',
            bn: 'একসাথে সব ওয়ার্কার বন্ধ করে ব্যবহারকারীদের ১০ মিনিট বসিয়ে রেখে'
          },
          {
            en: 'Zero downtime is mathematically impossible in web software',
            bn: 'ওয়েব সফটওয়্যারে শূন্য ডাউনটাইম গাণিতিকভাবে অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rolling restarts ensure at least N-1 workers remain active and answering client requests at every moment during deployment.',
          bn: 'রোলিং রিস্টার্ট নিশ্চিত করে যে ডিপ্লয়মেন্টের প্রতি মুহূর্তে বাকি ওয়ার্কাররা নিরবচ্ছিন্নভাবে গ্রাহকদের সেবা দিচ্ছে।'
        },
        explanation: {
          en: 'A rolling restart cycles through workers incrementally, guaranteeing continuous availability without dropping connections.',
          bn: 'রোলিং রিস্টার্ট একটি একটি করে ওয়ার্কার প্রতিস্থাপন করে, যার ফলে কোনো সার্ভিস ডাউনটাইম ছাড়াই নতুন কোড চালু হয়।'
        }
      },
      {
        id: 'ks-q2',
        kind: 'mcq',
        topic: 'worker-threads-message-channel',
        question: {
          en: 'How do the main thread and a Worker thread communicate with each other in node:worker_threads?',
          bn: 'node:worker_threads এ মূল থ্রেড এবং ওয়ার্কার থ্রেড পরস্পরের সাথে কীভাবে যোগাযোগ করে?'
        },
        options: [
          {
            en: 'Via asynchronous message passing using parentPort.postMessage() and the "message" event listener',
            bn: 'parentPort.postMessage() এবং "message" ইভেন্ট লিসেনারের মাধ্যমে অ্যাসিঙ্ক্রোনাস বার্তা আদান-প্রদান করে'
          },
          {
            en: 'By printing words on a paper printer',
            bn: 'একটি কাগজের প্রিন্টারে শব্দ প্রিন্ট করার মাধ্যমে'
          },
          {
            en: 'By writing data into a Google Chrome browser cookie',
            bn: 'গুগল ক্রোম ব্রাউজার কুকিতে ডাটা লেখার মাধ্যমে'
          },
          {
            en: 'Threads cannot communicate under any circumstances',
            bn: 'কোনো অবস্থাতেই থ্রেডগুলোর মধ্যে যোগাযোগ করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Node.js implements the HTML5 structured clone algorithm to serialize messages passed between threads.',
          bn: 'নোড.জেএস এইচটিএমএল৫ স্ট্রাকচার্ড ক্লোন অ্যালগরিদম ব্যবহার করে থ্রেডগুলোর মধ্যে নিরাপদে বার্তা পাঠায়।'
        },
        explanation: {
          en: 'Worker threads exchange cloned data or transfer ownership of ArrayBuffers using the postMessage API.',
          bn: 'ওয়ার্কার থ্রেডগুলো postMessage এপিআই ব্যবহারের মাধ্যমে ডাটা আদান-প্রদান ও মেমরি স্থানান্তর করে।'
        }
      },
      {
        id: 'ks-q3',
        kind: 'mcq',
        topic: 'pm2-process-manager-features',
        question: {
          en: 'What enterprise capabilities does a production process manager like PM2 provide on top of native Node.js?',
          bn: 'নেটিভ নোড.জেএসের ওপর ভিত্তি করে PM2 এর মতো প্রোডাকশন প্রসেস ম্যানেজার কী অতিরিক্ত সুবিধা দেয়?'
        },
        options: [
          {
            en: 'Automatic clustering, crash restarts, process monitoring, log aggregation, and hot reloads without modifying application code',
            bn: 'কোড পরিবর্তন ছাড়াই স্বয়ংক্রিয় ক্লাস্টারিং, ক্র্যাশ হলে রিস্টার্ট, প্রসেস মনিটরিং, সেন্ট্রালাইজড লগিং এবং হট রিলোড'
          },
          {
            en: 'It doubles the physical RAM chips on the motherboard',
            bn: 'এটি মাদারবোর্ডের ফিজিক্যাল র‍্যাম চিপের আকার দ্বিগুণ করে দেয়'
          },
          {
            en: 'It rewrites JavaScript code into C++ code automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট কোডকে সি++ কোডে রূপান্তর করে'
          },
          {
            en: 'It makes all web requests respond in 0 milliseconds',
            bn: 'এটি সমস্ত ওয়েব রিকোয়েস্টকে ০ মিলিসেকেন্ডে রেসপন্স করায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'PM2 acts as an external supervisor that keeps your Node.js processes running 24/7 in production.',
          bn: 'PM2 একটি বাহ্যিক তত্ত্বাবধায়ক হিসেবে কাজ করে যা প্রোডাকশনে নোড.জেএস প্রসেসকে সার্বক্ষণিক সচল রাখে।'
        },
        explanation: {
          en: 'PM2 manages cluster forks, automatically resurrects dead workers, and provides runtime health telemetry.',
          bn: 'PM2 ক্লাস্টার পরিচালনা করে, বন্ধ হয়ে যাওয়া ওয়ার্কারদের পুনরায় চালু করে এবং সিস্টেমের স্বাস্থ্যের খবর রাখে।'
        }
      },
      {
        id: 'ks-q4',
        kind: 'mcq',
        topic: 'sharedarraybuffer-atomics',
        question: {
          en: 'When two Worker Threads share memory using a SharedArrayBuffer, how do they prevent race conditions during concurrent writes?',
          bn: 'যখন দুটি ওয়ার্কার থ্রেড SharedArrayBuffer দিয়ে মেমরি শেয়ার করে, তখন একই সাথে ডাটা লেখার সময় রেস কন্ডিশন ঠেকাতে কী ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'By using the native Atomics object (e.g. Atomics.add, Atomics.wait, Atomics.notify) to perform thread-safe atomic memory operations',
            bn: 'নেটিভ Atomics অবজেক্ট (যেমন Atomics.add, Atomics.wait, Atomics.notify) ব্যবহারের মাধ্যমে থ্রেড-নিরাপদ অ্যাটমিক মেমরি অপারেশন চালিয়ে'
          },
          {
            en: 'By deleting one of the two worker threads',
            bn: 'দুটি ওয়ার্কার থ্রেডের মধ্যে একটিকে মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'By converting the numbers into strings',
            bn: 'সংখ্যাগুলোকে স্ট্রিংয়ে রূপান্তর করার মাধ্যমে'
          },
          {
            en: 'By restarting the computer server every 2 seconds',
            bn: 'প্রতি ২ সেকেন্ড পরপর কম্পিউটার সার্ভার রিস্টার্ট করার মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The global Atomics object provides atomic operations as static methods to synchronize shared memory across threads.',
          bn: 'গ্লোবাল Atomics অবজেক্ট থ্রেডগুলোর মধ্যে শেয়ার করা মেমরি সামঞ্জস্যপূর্ণ রাখতে অ্যাটমিক অপারেশন সরবরাহ করে।'
        },
        explanation: {
          en: 'Atomics operations guarantee that read-modify-write actions execute uninterrupted, preventing data corruption across threads.',
          bn: 'Atomics মেমরি অপারেশনগুলো কোনো বাধা ছাড়াই এক পদক্ষেপে কার্যকর হয়, যার ফলে থ্রেডগুলোর ভেতর ডাটা নষ্ট হতে পারে না।'
        }
      }
    ]
  }
};
