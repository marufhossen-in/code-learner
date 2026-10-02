import type { Hub } from '../../lib/types';
import { TheKitchenThatNeverBlocksLesson } from './lessons/the-kitchen-that-never-blocks';
import { ThePantryAndItsLabelsLesson } from './lessons/the-pantry-and-its-labels';
import { TheDiningRushLesson } from './lessons/the-dining-rush';
import { TheConveyorBeltsLesson } from './lessons/the-conveyor-belts';
import { TheColdRoomLesson } from './lessons/the-cold-room';
import { TheFirstPlateLesson } from './lessons/the-first-plate';
import { TheBellsAndAlarmsLesson } from './lessons/the-bells-and-alarms';
import { TheKitchenAtScaleLesson } from './lessons/the-kitchen-at-scale';

export const nodejsHub: Hub = {
  slug: 'nodejs',
  name: 'Node.js',
  icon: '🟩',
  tagline: {
    en: 'Master enterprise Node.js: libuv event loop internals, streaming backpressure, asynchronous file I/O, native HTTP servers, and multi-core clustering.',
    bn: 'এন্টারপ্রাইজ নোড.জেএসে দক্ষতা অর্জন: libuv ইভেন্ট লুপের অভ্যন্তরীণ রূপ, স্ট্রিমিং ব্যাকপ্রেশার, অ্যাসিঙ্ক ফাইল আই/ও, নেটিভ এইচটিটিপি সার্ভার এবং মাল্টি-কোর ক্লাস্টারিং।'
  },
  intro: {
    en: 'Node.js powers modern real-time backends by combining Google Chrome’s V8 JavaScript execution engine with the libuv asynchronous platform abstraction layer. This comprehensive track guides engineers through 8 progressive lessons: single-threaded non-blocking architecture, CommonJS and ES module mechanics, the 6 event loop phases, memory-efficient streams with backpressure, secure file operations and binary Buffers, native HTTP servers with streaming body validation, resilient event-driven architectures with EventEmitter, and enterprise scaling with multi-process clusters and worker threads.',
    bn: 'গুগল ক্রোমের ভি৮ জাভাস্ক্রিপ্ট ইঞ্জিন এবং libuv অ্যাসিঙ্ক্রোনাস প্ল্যাটফর্ম লেয়ারের সমন্বয়ে নোড.জেএস আধুনিক রিয়েল-টাইম ব্যাকএন্ড পরিচালনা করে। এই পূর্ণাঙ্গ ট্র্যাকটি ইঞ্জিনিয়ারদের ৮টি ধারাবাহিক পাঠের মাধ্যমে গাইড করে: সিঙ্গেল-থ্রেডেড নন-ব্লকিং আর্কিটেকচার, কমনজেএস ও ইএস মডিউল পদ্ধতি, ইভেন্ট লুপের ৬টি পর্যায়ক্রমিক ধাপ, ব্যাকপ্রেশার নিয়ন্ত্রিত মেমরি-সাশ্রয়ী স্ট্রিম, সুরক্ষিত ফাইল অপারেশন ও বাইনারি বাফার, বডি ভ্যালিডেশনসহ নেটিভ এইচটিটিপি সার্ভার, ইভেন্টএমিটারের নির্ভরযোগ্য আর্কিটেকচার এবং মাল্টি-প্রসেস ক্লাস্টার ও ওয়ার্কার থ্রেডের মাধ্যমে এন্টারপ্রাইজ স্কেলিং।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Core Architecture and Event Loop', bn: 'ধাপ ১ — মূল আর্কিটেকচার এবং ইভেন্ট লুপ' },
      items: [
        { en: 'V8 single-threaded execution and libuv non-blocking asynchronous kernel polling', bn: 'ভি৮ সিঙ্গেল-থ্রেড এক্সিকিউশন এবং libuv নন-ব্লকিং অ্যাসিঙ্ক কার্নেল পোলিং' },
        { en: 'CommonJS vs ECMAScript Modules resolution, caching, and package.json exports', bn: 'কমনজেএস বনাম ইসিএমএস্ক্রিপ্ট মডিউল রেজোলিউশন, ক্যাশিং এবং প্যাকেজ এক্সপোর্টস' },
        { en: 'The 6 libuv event loop phases, microtask drain order, and timer scheduling', bn: 'libuv ইভেন্ট লুপের ৬টি সুনির্দিষ্ট পর্যায়, মাইক্রোটাস্ক ড্রেন ক্রম এবং টাইমার শিডিউলিং' }
      ]
    },
    {
      title: { en: 'Stage 2 — Data Streams and File System', bn: 'ধাপ ২ — ডাটা স্ট্রিম এবং ফাইল সিস্টেম' },
      items: [
        { en: 'Readable, Writable, Duplex, and Transform streams with automatic backpressure', bn: 'স্বয়ংক্রিয় ব্যাকপ্রেশারসহ রিডেবল, রাইটেবল, ডুপ্লেক্স এবং ট্রান্সফর্ম স্ট্রিম' },
        { en: 'Promise-based file system operations, binary Buffers, and path traversal defense', bn: 'প্রমিজ-ভিত্তিক ফাইল সিস্টেম অপারেশন, বাইনারি বাফার এবং পাথ ট্রাভার্সাল নিরাপত্তা' },
        { en: 'Native HTTP request routing, streaming payload limits, and graceful shutdown', bn: 'নেটিভ এইচটিটিপি রিকোয়েস্ট রাউটিং, স্ট্রিমিং পেলোড লিমিট এবং গ্রেসিফুল শাটডাউন' }
      ]
    },
    {
      title: { en: 'Stage 3 — Events, Errors, and Scalability', bn: 'ধাপ ৩ — ইভেন্টস, এররস এবং স্কেলেবিলিটি' },
      items: [
        { en: 'EventEmitter publisher-subscriber pattern and operational vs programmer error triage', bn: 'ইভেন্টএমিটার পাবলিশার-সাবস্ক্রাইবার প্যাটার্ন এবং অপারেশনাল বনাম প্রোগ্রামার এরর বিভাজন' },
        { en: 'Multi-process clustering across CPU cores and multi-threaded CPU parallelization', bn: 'সিপিইউ কোরে মাল্টি-প্রসেস ক্লাস্টারিং এবং মাল্টি-থ্রেডেড সিপিইউ প্যারালালাইজেশন' }
      ]
    }
  ],
  lessons: [
    TheKitchenThatNeverBlocksLesson,
    ThePantryAndItsLabelsLesson,
    TheDiningRushLesson,
    TheConveyorBeltsLesson,
    TheColdRoomLesson,
    TheFirstPlateLesson,
    TheBellsAndAlarmsLesson,
    TheKitchenAtScaleLesson
  ],
  references: [],
  projects: [
    {
      title: { en: 'High-Throughput Streaming File Server', bn: 'উচ্চ ক্ষমতাসম্পন্ন স্ট্রিমিং ফাইল সার্ভার' },
      brief: {
        en: 'Architect a production-grade native HTTP server with ESM imports, streaming multipart uploads bounded by highWaterMark, safe directory traversal verification, atomic configuration renames, and a 10-second graceful SIGTERM shutdown handler.',
        bn: 'ইএসএম ইমপোর্ট, highWaterMark দ্বারা নিয়ন্ত্রিত মাল্টিপার্ট আপলোড স্ট্রিম, নিরাপদ ডিরেক্টরি ট্রাভার্সাল যাচাইকরণ, অ্যাটমিক কনফিগারেশন রিনেম এবং ১০ সেকেন্ডের গ্রেসিফুল SIGTERM শাটডাউন হ্যান্ডলারসহ একটি প্রোডাকশন-গ্রেড নেটিভ এইচটিটিপি সার্ভার তৈরি করুন।'
      }
    },
    {
      title: { en: 'Clustered Microservice with Thread Pool Offloading', bn: 'থ্রেড পুল অফলোডিং সহ ক্লাস্টার্ড মাইক্রোসার্ভিস' },
      brief: {
        en: 'Build a scalable web service that uses node:cluster to fork worker processes matching host CPU cores, offloads heavy SHA-256 cryptographic hashing to worker_threads, tracks request IDs via AsyncLocalStorage, and survives worker crashes with automatic respawns.',
        bn: 'একটি স্কেলযোগ্য ওয়েব সার্ভিস তৈরি করুন যা হোস্ট সিপিইউ কোরের সমপরিমাণ ওয়ার্কার প্রসেস ফর্ক করতে node:cluster ব্যবহার করে, ভারী SHA-256 ক্রিপ্টোগ্রাফিক হ্যাশিং worker_threads এ পাঠায়, AsyncLocalStorage দিয়ে রিকোয়েস্ট আইডি ট্র্যাক করে এবং ক্র্যাশ হওয়া ওয়ার্কার স্বয়ংক্রিয়ভাবে পুনরুজ্জীবিত করে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Never block the event loop: Offload heavy CPU computation to worker_threads and perform all file and network I/O asynchronously via Promises.',
      bn: 'ইভেন্ট লুপ কখনো স্থবির করবেন না: ভারী সিপিইউ কম্পিউটেশন worker_threads এ পাঠান এবং সমস্ত ফাইল ও নেটওয়ার্ক আই/ও প্রমিজের মাধ্যমে অ্যাসিঙ্ক্রোনাসভাবে পরিচালনা করুন।'
    },
    {
      en: 'Always use stream.pipeline: Avoid raw pipe() calls in production to ensure backpressure flow control and guaranteed stream cleanup on error.',
      bn: 'সর্বদা stream.pipeline ব্যবহার করুন: ব্যাকপ্রেশার নিয়ন্ত্রণ এবং ত্রুটির ক্ষেত্রে সমস্ত স্ট্রিম স্বয়ংক্রিয় ধ্বংস নিশ্চিত করতে কাঁচা pipe() এড়িয়ে চলুন।'
    },
    {
      en: 'Jail all user-supplied paths: Combine path.resolve with startsWith checks to guarantee incoming file requests never escape designated storage roots.',
      bn: 'ব্যবহারকারীর পাথ সর্বদা যাচাই করুন: আগত ফাইল রিকোয়েস্ট যাতে নির্দিষ্ট ফোল্ডারের বাইরে যেতে না পারে সেজন্য startsWith সহ path.resolve ব্যবহার করুন।'
    },
    {
      en: 'Differentiate errors cleanly: Retry operational failures with exponential backoff, but terminate and supervisor-restart processes upon programmer bugs.',
      bn: 'ত্রুটির সঠিক বিভাজন করুন: সাময়িক অপারেশনাল ত্রুটি ব্যাকঅফ দিয়ে পুনরায় চেষ্টা করুন, কিন্তু প্রোগ্রামার বাগ দেখা দিলে প্রসেস রিস্টার্ট সম্পন্ন করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'Why is setImmediate guaranteed to execute before setTimeout(fn, 0) inside an I/O callback, but non-deterministic at the top-level module scope?',
        bn: 'আই/ও কলব্যাকের ভেতর কেন setImmediate নিশ্চিতভাবে setTimeout(fn, 0) এর আগে কার্যকর হয়, কিন্তু মূল মডিউল স্কোপে তা অনিশ্চিত থাকে?'
      },
      a: {
        en: 'At top-level module scope, process performance and OS timer resolution decide whether 1ms has elapsed before the Timers phase runs. Inside an I/O callback, the execution is currently in the Poll phase. The very next phase after Poll is Check where setImmediate executes, whereas reaching Timers requires cycling through the entire event loop.',
        bn: 'মূল মডিউলে ১ মিলিসেকেন্ড অতিক্রান্ত হয়েছে কি না তার ওপর নির্ভর করে টাইমার না চেক আগে চলবে। কিন্তু কোনো আই/ও কলব্যাকের ভেতর কোড চলার অর্থ হলো লুপটি বর্তমানে পোল ধাপে রয়েছে। পোল ধাপের ঠিক পরবর্তী ধাপটিই হলো চেক ধাপ যেখানে setImmediate চলে, আর টাইমার ধাপে পৌঁছাতে পুরো ইভেন্ট লুপ ঘুরে আসতে হয়।'
      }
    },
    {
      q: {
        en: 'Why should stream.pipeline be used instead of readable.pipe in production Node.js applications?',
        bn: 'প্রোডাকশন নোড.জেএস অ্যাপ্লিকেশনে readable.pipe এর পরিবর্তে কেন stream.pipeline ব্যবহার করা উচিত?'
      },
      a: {
        en: 'readable.pipe only forwards data and does not forward errors. If an intermediate or destination stream fails, the source remains unclosed, leaking file descriptors and memory. In contrast, stream.pipeline manages backpressure, forwards all errors cleanly, and automatically destroys all participating streams upon failure.',
        bn: 'readable.pipe কেবল ডাটা স্থানান্তর করে কিন্তু কোনো ত্রুটি ফরোয়ার্ড করে না। গন্তব্য স্ট্রিম ব্যর্থ হলে উৎস স্ট্রিমটি বন্ধ হয় না, যার ফলে মেমরি ও ফাইল হ্যান্ডল লিক হয়। অন্যদিকে stream.pipeline ব্যাকপ্রেশার নিয়ন্ত্রণ করে, সমস্ত ত্রুটি ট্র্যাক করে এবং ব্যর্থতায় স্বয়ংক্রিয়ভাবে সব স্ট্রিম ধ্বংস করে সম্পদ মুক্ত করে।'
      }
    },
    {
      q: {
        en: 'How do you defend a Node.js file server against Directory Traversal attacks and partial file write corruptions?',
        bn: 'ডিরেক্টরি ট্রাভার্সাল সাইবার আক্রমণ এবং অসম্পূর্ণ ফাইল রাইটের ক্ষতি থেকে কীভাবে নোড.জেএস সার্ভারকে সুরক্ষিত রাখবেন?'
      },
      a: {
        en: 'Defend against directory traversal by resolving the user path against the base storage root and verifying that target.startsWith(root + path.sep). Guard against partial write corruption by writing data to a temporary file first and performing an atomic fs.rename to the target path.',
        bn: 'ডিরেক্টরি ট্রাভার্সাল রোধ করতে ব্যবহারকারীর ইনপুটকে মূল ফোল্ডারের সাথে resolve করে target.startsWith(root + path.sep) শর্ত দিয়ে যাচাই করতে হয়। আর ফাইল যাতে অর্ধেক লিখে নষ্ট না হয় সেজন্য প্রথমে সাময়িক ফাইলে লিখে fs.rename এর মাধ্যমে অ্যাটমিকালি মূল ফাইলে প্রতিস্থাপন করতে হয়।'
      }
    },
    {
      q: {
        en: 'What is the operational difference between the cluster module and worker_threads in Node.js scaling?',
        bn: 'নোড.জেএস স্কেলিংয়ে cluster মডিউল এবং worker_threads এর মধ্যে ব্যবহারিক পার্থক্য কী?'
      },
      a: {
        en: 'The cluster module forks independent operating system processes with separate memory spaces to scale network I/O across CPU cores on a shared port. In contrast, worker_threads runs lightweight threads inside the same process with shared memory, ideal for offloading heavy CPU computation without blocking the event loop.',
        bn: 'ক্লাস্টার মডিউল পৃথক মেমরি স্পেসসহ আলাদা ওএস প্রসেস তৈরি করে সার্ভারের সব কোরে শেয়ার্ড পোর্টে নেটওয়ার্ক আই/ও স্কেল করে। অন্যদিকে worker_threads একই প্রসেসের ভেতর শেয়ার্ড মেমরিসহ স্বল্প মেমরির থ্রেড চালায়, যা মূল ইভেন্ট লুপ না থামিয়ে ভারী সিপিইউ হিসাব সম্পন্ন করার জন্য আদর্শ।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Streaming API Gateways: Modern microservice gateways stream HTTP request payloads with byte caps and compression without buffering entire bodies in RAM.',
      bn: 'স্ট্রিমিং এপিআই গেটওয়ে: আধুনিক মাইক্রোসার্ভিস গেটওয়ে সম্পূর্ণ বডি র‍্যামে বাফার না করেই বাইট ক্যাপ ও কম্প্রেশনসহ এইচটিটিপি পেলোড স্ট্রিম করে।'
    },
    {
      en: 'Real-Time Event Processing: High-frequency trading and chat systems leverage EventEmitters and non-blocking sockets to process thousands of events per second per core.',
      bn: 'রিয়েল-টাইম ইভেন্ট প্রসেসিং: উচ্চ ফ্রিকোয়েন্সির ট্রেডিং ও চ্যাট সিস্টেমগুলো প্রতি কোরে প্রতি সেকেন্ডে হাজার হাজার ইভেন্ট প্রসেস করতে ইভেন্টএমিটার ও নন-ব্লকিং সকেট ব্যবহার করে।'
    },
    {
      en: 'Clustered Web Services: High-traffic ecommerce platforms run multi-worker clusters behind load balancers with zero-downtime rolling deployments on Kubernetes.',
      bn: 'ক্লাস্টার্ড ওয়েব সার্ভিস: উচ্চ ট্রাফিকের ইকমার্স প্ল্যাটফর্মগুলো কুবারনেটিসে শূন্য ডাউনটাইমে রোলিং ডিপ্লয়মেন্ট নিশ্চিত করতে লোড ব্যালেন্সারের পেছনে মাল্টি-ওয়ার্কার ক্লাস্টার পরিচালনা করে।'
    },
    {
      en: 'Resilient Log Aggregation: Distributed cloud services attach AsyncLocalStorage correlation IDs to JSON log streams, enabling tracing across microservice boundaries.',
      bn: 'নির্ভরযোগ্য লগ অ্যাগ্রিগেশন: ডিস্ট্রিবিউটেড ক্লাউড সার্ভিসগুলো JSON লগ স্ট্রিমে AsyncLocalStorage কোরিলেশন আইডি যুক্ত করে মাইক্রোসার্ভিস জুড়ে রিকোয়েস্ট ট্রেসিং নিশ্চিত করে।'
    }
  ]
};
