import type { Lesson } from '../../../lib/types';

export const TheDiningRushLesson: Lesson = {
  slug: 'the-dining-rush',
  tech: 'nodejs',
  title: {
    en: 'Event Loop Deep Dive — Timers, Poll, and Microtasks',
    bn: 'ইভেন্ট লুপের গভীরে: টাইমার, পোল এবং মাইক্রোটাস্ক'
  },
  summary: {
    en: 'Mastering Node.js backend development requires a granular understanding of the libuv event loop’s 6 execution phases: Timers, Pending Callbacks, Idle/Prepare, Poll, Check, and Close Callbacks. Microtask queues—specifically process.nextTick and Promise reactions—drain between every single phase transition, giving them immediate priority over scheduled timers. While top-level races between setTimeout(fn, 0) and setImmediate(fn) are non-deterministic, calling them within an I/O callback deterministically guarantees that setImmediate executes first in the Check phase. Developers use timer.unref() to prevent non-essential background timers from keeping the Node.js process alive unnecessarily.',
    bn: 'নোড.জেএস ব্যাকএন্ডে দক্ষতা অর্জনের জন্য libuv ইভেন্ট লুপের ৬টি সুনির্দিষ্ট ধাপের কার্যপ্রণালী বোঝা অপরিহার্য: টাইমার, পেন্ডিং কলব্যাক, আইডল/প্রিপেয়ার, পোল, চেক এবং ক্লোজ কলব্যাক। মাইক্রোটাস্ক কিউ (বিশেষ করে process.nextTick এবং প্রমিজ) প্রতিটি ধাপের মাঝে অগ্রাধিকার ভিত্তিতে সম্পন্ন হয়। মূল মডিউলে setTimeout(fn, 0) এবং setImmediate(fn) এর প্রতিযোগিতা অনিশ্চিত হলেও কোনো আই/ও কলব্যাকের ভেতর চালালে চেক ধাপে setImmediate সর্বদা নিশ্চিতভাবে আগে কার্যকর হয়। ডেভেলপাররা অপ্রয়োজনীয় ব্যাকগ্রাউন্ড টাইমার যাতে সার্ভারকে অনর্থক চালু না রাখে সেজন্য timer.unref() ব্যবহার করেন।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-conveyor-belts',
    tech: 'nodejs',
    title: {
      en: 'Streams and Backpressure — Handling Massive Data Efficiently',
      bn: 'স্ট্রিম এবং ব্যাকপ্রেশার: দক্ষতার সাথে বিশাল ডাটা পরিচালনা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'six-event-loop-phases',
      text: {
        en: 'The Six Phases of the libuv Event Loop',
        bn: 'libuv ইভেন্ট লুপের ছয়টি মৌলিক ধাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you analyze high-throughput Node.js microservices, understanding the exact order in which asynchronous callbacks execute is critical. Under the hood, libuv cycles through 6 distinct phases in strict sequential order.',
        bn: 'যখন আপনি উচ্চ ট্রাফিকের নোড.জেএস মাইক্রোসার্ভিস বিশ্লেষণ করেন, তখন অ্যাসিঙ্ক্রোনাস কলব্যাকগুলো কোন ধারাবাহিকতায় চলছে তা জানা অত্যন্ত জরুরি। পর্দার আড়ালে libuv কঠোরভাবে ৬টি ভিন্ন ধাপের মাধ্যমে চক্রাকারে কাজ সম্পন্ন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The cycle begins at Timers, proceeds through Pending Callbacks, and enters Idle and Prepare. It then advances into Poll, moves to Check for setImmediate, and completes at Close Callbacks. Between every single phase transition, all pending microtasks drain completely.',
        bn: 'এই চক্রটি টাইমার দিয়ে শুরু হয়, পেন্ডিং কলব্যাক পেরিয়ে আইডল ও প্রিপেয়ার ধাপে যায়। এরপর পোল ও চেক ধাপ পেরিয়ে সর্বশেষে ক্লোজ কলব্যাকে গিয়ে শেষ হয়। প্রতিটি ধাপ পরিবর্তনের মধ্যবর্তী সময়ে সমস্ত মাইক্রোটাস্ক অগ্রাধিকার ভিত্তিতে সম্পন্ন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'timers-phase',
          def: {
            en: 'The initial phase of the event loop that executes callbacks scheduled by setTimeout() and setInterval().',
            bn: 'ইভেন্ট লুপের শুরুর ধাপ যা মেয়াদ শেষ হওয়া setTimeout() এবং setInterval() কলব্যাকগুলো কার্যকর করে।'
          }
        },
        {
          term: 'poll-phase',
          def: {
            en: 'The central phase that blocks for new I/O events, reads network sockets, and executes I/O callbacks.',
            bn: 'ইভেন্ট লুপের মূল কেন্দ্র যা নতুন আই/ও ইভেন্টের জন্য অপেক্ষা করে এবং নেটওয়ার্ক সকেট ও ফাইল কলব্যাক চালায়।'
          }
        },
        {
          term: 'check-phase',
          def: {
            en: 'The phase executing immediately after Poll, dedicated specifically to running setImmediate() callbacks.',
            bn: 'পোল ধাপের পরপরই পরিচালিত ধাপ, যা সুনির্দিষ্টভাবে setImmediate() কলব্যাকগুলো চালানোর জন্য তৈরি।'
          }
        },
        {
          term: 'process-nexttick',
          def: {
            en: 'A special microtask queue processed immediately after the current operation finishes, before any event loop phase transitions.',
            bn: 'একটি বিশেষ মাইক্রোটাস্ক কিউ যা চলতি অপারেশন শেষ হওয়ামাত্র যেকোনো ইভেন্ট লুপ ধাপের পূর্বেই কার্যকর হয়।'
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
      id: 'timer-vs-immediate-table',
      text: {
        en: 'Execution Timing Comparison: setTimeout(0) vs setImmediate vs process.nextTick',
        bn: 'এক্সিকিউশন সময়ের তুলনা: setTimeout(0) বনাম setImmediate বনাম process.nextTick'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding where each scheduling mechanism executes inside the runtime prevents subtle concurrency bugs.',
        bn: 'রানটাইমের ভেতর কোন মেকানিজম কখন কার্যকর হয় তা স্পষ্ট জানলে অনাকাঙ্ক্ষিত কনকারেন্সি ত্রুটি এড়ানো যায়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Scheduling API', bn: 'শিডিউলিং এপিআই' },
        { en: 'Phase / Queue Location', bn: 'ধাপ / কিউ অবস্থান' },
        { en: 'Execution Priority', bn: 'এক্সিকিউশন অগ্রাধিকার' },
        { en: 'Primary Architectural Purpose', bn: 'মূল ব্যবহারিক উদ্দেশ্য' }
      ],
      rows: [
        [
          { en: 'process.nextTick()', bn: 'process.nextTick()' },
          { en: 'nextTick Microtask Queue', bn: 'nextTick মাইক্রোটাস্ক কিউ' },
          { en: 'Highest: runs before any other phase or microtask', bn: 'সর্বোচ্চ: যেকোনো ধাপ বা অন্য মাইক্রোটাস্কের আগে চলে' },
          { en: 'Emitting events after constructors finish setup', bn: 'কনস্ট্রাক্টর সেটআপ শেষ হওয়ার পর ইভেন্ট পাঠানো' }
        ],
        [
          { en: 'Promise.then()', bn: 'Promise.then()' },
          { en: 'Standard Microtask Queue', bn: 'সাধারণ মাইক্রোটাস্ক কিউ' },
          { en: 'High: runs right after nextTick microtasks drain', bn: 'উচ্চ: nextTick শেষ হওয়ার পরপরই চলে' },
          { en: 'Handling asynchronous Promise and async/await values', bn: 'অ্যাসিঙ্ক্রোনাস প্রমিজ ও async/await পরিচালনা' }
        ],
        [
          { en: 'setImmediate()', bn: 'setImmediate()' },
          { en: 'Check Phase (after Poll phase)', bn: 'চেক ধাপ (পোল ধাপের ঠিক পরে)' },
          { en: 'Medium: executes on the next event loop iteration', bn: 'মাঝারি: ইভেন্ট লুপের পরবর্তী চক্করে চলে' },
          { en: 'Splitting CPU-heavy work across multiple loop turns', bn: 'ভারী সিপিইউ কাজকে একাধিক ইভেন্ট লুপ চক্করে ভাগ করা' }
        ],
        [
          { en: 'setTimeout(fn, 0)', bn: 'setTimeout(fn, 0)' },
          { en: 'Timers Phase (initial phase)', bn: 'টাইমার ধাপ (শুরুর ধাপ)' },
          { en: 'Bounded by a minimum 1ms timer threshold', bn: 'কমপক্ষে ১ মিলিসেকেন্ডের থ্রেশহোল্ড সাপেক্ষ' },
          { en: 'Executing non-critical logic after minimum delay', bn: 'ন্যূনতম বিলম্বের পর অগুরুত্বপূর্ণ কাজ সম্পন্ন করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-io-race-code',
      text: {
        en: 'Executable I/O Deterministic Race Implementation',
        bn: 'আই/ও কলব্যাকের ভেতর নিশ্চিত এক্সিকিউশন অর্ডারের বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When setTimeout(fn, 0) and setImmediate(fn) are invoked inside an I/O callback (like fs.readFile), setImmediate is guaranteed to execute first because the Poll phase transitions immediately into the Check phase.',
        bn: 'যখন কোনো আই/ও কলব্যাকের (যেমন fs.readFile) ভেতরে setTimeout(fn, 0) এবং setImmediate(fn) ডাকা হয়, তখন নিশ্চিতভাবে setImmediate আগে চলে কারণ পোল ধাপের সমাপ্তির পরই সরাসরি চেক ধাপ শুরু হয়।'
      }
    },
    {
      type: 'code',
      code: `import fs from 'node:fs';

// Simulating execution inside an I/O callback
fs.readFile('package.json', () => {
  setTimeout(() => {
    console.log('2: setTimeout (ran in next Timers phase)');
  }, 0);

  setImmediate(() => {
    console.log('1: setImmediate (ran in immediate Check phase)');
  });
});

// Output: 1: setImmediate (ran in immediate Check phase)
// Output: 2: setTimeout (ran in next Timers phase)`
    },
    {
      type: 'heading',
      id: 'starvation-and-unref',
      text: {
        en: 'Preventing Event Loop Starvation and Process Leaks',
        bn: 'ইভেন্ট লুপ স্টারভেশন রোধ এবং timer.unref() এর ব্যবহার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because Node.js completely empties the microtask queue before moving to the next event loop phase, recursively calling process.nextTick() causes Event Loop Starvation: the loop is permanently prevented from reaching the Poll or Timers phases, freezing all I/O. Furthermore, background timers by default keep the Node.js process alive indefinitely. Calling timer.unref() detaches the timer from the event loop’s reference count, permitting the process to terminate cleanly when other work completes.',
        bn: 'যেহেতু নোড.জেএস পরবর্তী ধাপে যাওয়ার আগে মাইক্রোটাস্ক কিউ পুরোপুরি খালি করে, তাই বারবার রিকার্সিভভাবে process.nextTick() ডাকলে ইভেন্ট লুপ স্টারভেশন ঘটে: লুপ কখনোই পোল বা টাইমার ধাপে পৌঁছাতে পারে না, ফলে সমস্ত নেটওয়ার্ক ও ফাইল রিকোয়েস্ট আটকে যায়। তাছাড়া ব্যাকগ্রাউন্ড টাইমারগুলো প্রসেসকে অনির্দিষ্টকাল চালু রাখে। timer.unref() ডাকলে টাইমারটি ইভেন্ট লুপের রেফারেন্স কাউন্ট থেকে আলাদা হয়ে যায়, ফলে মূল কাজ শেষ হলে নোড.জেএস স্বাভাবিকভাবে বন্ধ হতে পারে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Sequential phases: The event loop cycles through Timers, Pending, Poll, Check, and Close in strict order.',
          bn: 'ধারাবাহিক ধাপ: ইভেন্ট লুপ কঠোরভাবে টাইমার, পেন্ডিং, পোল, চেক এবং ক্লোজ ধাপের মাধ্যমে আবর্তিত হয়।'
        },
        {
          en: 'Inter-phase microtask drain: Microtask queues drain completely between every single phase transition.',
          bn: 'ধাপের মাঝে মাইক্রোটাস্ক: প্রতিটি ধাপ পরিবর্তনের মধ্যবর্তী সময়ে সমস্ত মাইক্রোটাস্ক অগ্রাধিকার ভিত্তিতে সম্পন্ন হয়।'
        },
        {
          en: 'Deterministic I/O ordering: Inside an I/O callback, setImmediate always runs before setTimeout(fn, 0).',
          bn: 'আই/ও কলব্যাকের নিশ্চয়তা: আই/ও কলব্যাকের ভেতর setImmediate সর্বদা setTimeout এর পূর্বে চলে।'
        },
        {
          en: 'Graceful shutdown with unref: Use timer.unref() to prevent non-blocking diagnostic tasks from leaking open processes.',
          bn: 'প্রসেস লিক রোধে unref: অপ্রয়োজনীয় ব্যাকগ্রাউন্ড টাইমার যাতে প্রসেস আটকে না রাখে সেজন্য timer.unref() ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dr-ex1',
      kind: 'mcq',
      topic: 'event-loop-starvation-cause',
      question: {
        en: 'What dangerous runtime consequence occurs if a developer writes recursive process.nextTick() calls without a base termination condition?',
        bn: 'কোনো ডেভেলপার যদি শেষ হওয়ার শর্ত ছাড়া বারবার রিকার্সিভভাবে process.nextTick() কল করে, তবে কোন বিপজ্জনক ত্রুটি ঘটে?'
      },
      options: [
        {
          en: 'Event Loop Starvation: Node.js continually drains the nextTick queue, starving the event loop and blocking all I/O operations indefinitely',
          bn: 'ইভেন্ট লুপ স্টারভেশন: নোড.জেএস কেবল nextTick কিউ ফাঁকা করতে থাকবে, যার ফলে ইভেন্ট লুপ আটকে গিয়ে সমস্ত আই/ও চিরতরে বন্ধ হয়ে যাবে'
        },
        {
          en: 'The computer hardware fan turns off immediately',
          bn: 'কম্পিউটার হার্ডওয়্যারের ফ্যান তাৎক্ষণিকভাবে বন্ধ হয়ে যায়'
        },
        {
          en: 'The operating system deletes the Node.js binary file',
          bn: 'অপারেটিং সিস্টেম নোড.জেএস বাইনারি ফাইলটি মুছে ফেলে'
        },
        {
          en: 'The recursive function is automatically moved to a web browser',
          bn: 'রিকার্সিভ ফাংশনটি স্বয়ংক্রিয়ভাবে ওয়েব ব্রাউজারে স্থানান্তরিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Node.js will not advance to the next event loop phase until the nextTick microtask queue is completely empty.',
        bn: 'nextTick মাইক্রোটাস্ক কিউ পুরোপুরি খালি না হওয়া পর্যন্ত নোড.জেএস ইভেন্ট লুপের পরবর্তী ধাপে যায় না।'
      },
      explanation: {
        en: 'Because microtasks have absolute priority between phase transitions, an infinite nextTick recursion starves all timers, network, and file I/O.',
        bn: 'ধাপ পরিবর্তনের মাঝে মাইক্রোটাস্কের সর্বোচ্চ অগ্রাধিকার থাকায় অসীম nextTick লুপ পুরো সার্ভারের সমস্ত আই/ও ও টাইমারকে অচল করে দেয়।'
      }
    },
    {
      id: 'dr-ex2',
      kind: 'mcq',
      topic: 'io-callback-immediate-precedence',
      question: {
        en: 'Inside an fs.readFile() completion callback, why is setImmediate() guaranteed to execute before setTimeout(fn, 0)?',
        bn: 'একটি fs.readFile() কলব্যাকের ভেতর কেন নিশ্চিতভাবে setImmediate() কলব্যাকটি setTimeout(fn, 0) এর আগে চলে?'
      },
      options: [
        {
          en: 'The I/O callback runs in the Poll phase, and the very next phase in the loop cycle is the Check phase where setImmediate lives',
          bn: 'আই/ও কলব্যাকটি পোল ধাপে চলে, এবং লুপের পরবর্তী ধাপটিই হলো চেক ধাপ যেখানে setImmediate অবস্থান করে'
        },
        {
          en: 'Because setTimeout is broken in Node.js',
          bn: 'কারণ নোড.জেএসে setTimeout সঠিকভাবে কাজ করে না'
        },
        {
          en: 'Because setImmediate has a higher CPU clock frequency',
          bn: 'কারণ setImmediate এর সিপিইউ ক্লক ফ্রিকোয়েন্সি বেশি'
        },
        {
          en: 'Because fs.readFile deletes all timers from memory',
          bn: 'কারণ fs.readFile মেমরি থেকে সমস্ত টাইমার মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The Poll phase is immediately followed by the Check phase. The Timers phase requires wrapping around the entire loop cycle.',
        bn: 'পোল ধাপের পরপরই চেক ধাপ শুরু হয়। টাইমার ধাপে পৌঁছাতে পুরো লুপ ঘুরে আসতে হয়।'
      },
      explanation: {
        en: 'When executing within the Poll phase, the loop moves directly to the Check phase next, deterministically executing setImmediate first.',
        bn: 'পোল ধাপে কাজ চলার সময় ইভেন্ট লুপ পরবর্তী পদক্ষেপেই চেক ধাপে যায়, যার ফলে setImmediate নিশ্চিতভাবে আগে কার্যকর হয়।'
      }
    },
    {
      id: 'dr-ex3',
      kind: 'mcq',
      topic: 'unref-method-behavior',
      question: {
        en: 'What is the operational effect of invoking the .unref() method on a Timer or Net Socket object in Node.js?',
        bn: 'নোড.জেএসে কোনো টাইমার বা সকেটে .unref() মেথড কল করার ব্যবহারিক ফলাফল কী?'
      },
      options: [
        {
          en: 'It excludes the handle from the event loop’s reference count, allowing the Node.js process to exit gracefully if no other active work remains',
          bn: 'এটি অবজেক্টটিকে ইভেন্ট লুপের রেফারেন্স কাউন্ট থেকে বাদ দেয়, ফলে অন্য কোনো কাজ না থাকলে নোড.জেএস প্রসেস স্বাভাবিকভাবে বন্ধ হতে পারে'
        },
        {
          en: 'It deletes the timer immediately without executing its callback',
          bn: 'এটি কলব্যাক না চালিয়েই তাৎক্ষণিকভাবে টাইমারটি মুছে ফেলে'
        },
        {
          en: 'It pauses the computer operating system clock',
          bn: 'এটি কম্পিউটারের অপারেটিং সিস্টেমের ঘড়ি থামিয়ে দেয়'
        },
        {
          en: 'It converts the timer into a high-priority database query',
          bn: 'এটি টাইমারটিকে একটি উচ্চ-অগ্রাধিকারের ডেটাবেস কুয়েরিতে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Normally, active timers keep the Node.js process alive. What if you have a background health check that shouldn’t block application exit?',
        bn: 'সাধারণত সক্রিয় টাইমার প্রসেসকে চালু রাখে। অ্যাপ্লিকেশন যাতে স্বাভাবিকভাবে বন্ধ হতে পারে সেজন্য কী করা হয়?'
      },
      explanation: {
        en: 'unref() tells libuv not to keep the event loop running solely for this handle, preventing dangling timer process leaks.',
        bn: 'unref() নির্দেশ দেয় যে শুধুমাত্র এই টাইমারের জন্য যেন ইভেন্ট লুপ চালু না থাকে, যা প্রসেস লিক হওয়া রোধ করে।'
      }
    }
  ],
  quiz: {
    id: 'the-dining-rush-quiz',
    title: {
      en: 'Event Loop Deep Dive Quiz',
      bn: 'ইভেন্ট লুপের গভীরে কুইজ'
    },
    questions: [
      {
        id: 'dr-q1',
        kind: 'mcq',
        topic: 'poll-phase-blocking-behavior',
        question: {
          en: 'What does the Poll phase of the libuv event loop do when there are no expired timers and the I/O queue is currently empty?',
          bn: 'libuv ইভেন্ট লুপের পোল ধাপে যখন কোনো মেয়াদোত্তীর্ণ টাইমার থাকে না এবং আই/ও কিউ খালি থাকে, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'It blocks and waits for new incoming I/O events up to a calculated timeout (determined by the closest scheduled timer)',
            bn: 'এটি নতুন আই/ও ইভেন্টের জন্য অপেক্ষা করে সাময়িক ব্লক থাকে (যা নিকটতম নির্ধারিত টাইমার সাপেক্ষ একটি সময়সীমা মেনে চলে)'
          },
          {
            en: 'It immediately throws an UnhandledIOException and crashes',
            bn: 'এটি তাৎক্ষণিকভাবে UnhandledIOException ছুঁড়ে ক্র্যাশ করে'
          },
          {
            en: 'It burns 100 percent of all CPU cores spinning in an infinite loop',
            bn: 'এটি একটি অসীম লুপে ঘুরে সমস্ত সিপিইউ কোরের ১০০ শতাংশ পুড়িয়ে ফেলে'
          },
          {
            en: 'It restarts the computer server hardware',
            bn: 'এটি কম্পিউটার সার্ভারের হার্ডওয়্যার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Why waste CPU cycles spinning when you can ask the OS kernel (epoll/kqueue) to wake the process when network packets arrive?',
          bn: 'সিপিইউ নষ্ট না করে নেটওয়ার্ক প্যাকেট আসামাত্র ওএস কার্নেল যাতে জাগিয়ে দিতে পারে সেজন্য পোল অপেক্ষা করে।'
        },
        explanation: {
          en: 'The Poll phase efficiently sleeps on OS kernel polling system calls, waking up when network activity occurs or a timer deadline arrives.',
          bn: 'পোল ধাপ ওএস কার্নেল পোলিংয়ে স্লিপ মোডে থাকে এবং নতুন নেটওয়ার্ক ডাটা বা টাইমারের সময় আসামাত্র পুনরায় জেগে ওঠে।'
        }
      },
      {
        id: 'dr-q2',
        kind: 'mcq',
        topic: 'microtask-vs-macrotask-priority',
        question: {
          en: 'When a Promise resolves during the execution of a synchronous function, exactly when does its .then() callback execute?',
          bn: 'একটি সিঙ্ক্রোনাস ফাংশন চলাকালে কোনো প্রমিজ সমাধান হলে তার .then() কলব্যাকটি ঠিক কখন কার্যকর হয়?'
        },
        options: [
          {
            en: 'Immediately after the current synchronous JavaScript call stack empties, before any event loop phase transitions occur',
            bn: 'চলতি সিঙ্ক্রোনাস কল স্ট্যাক খালি হওয়ামাত্র, ইভেন্ট লুপের নতুন ধাপে যাওয়ার আগেই'
          },
          {
            en: 'After waiting for exactly 10 seconds',
            bn: 'ঠিক ১০ সেকেন্ড অপেক্ষা করার পর'
          },
          {
            en: 'In the Close Callbacks phase only',
            bn: 'কেবলমাত্র ক্লোজ কলব্যাক ধাপে'
          },
          {
            en: 'Only when the user clicks a mouse button',
            bn: 'কেবলমাত্র ব্যবহারকারী মাউসে ক্লিক করলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Promises are microtasks. Microtasks run as soon as the current execution context yields control.',
          bn: 'প্রমিজ হলো মাইক্রোটাস্ক। বর্তমান এক্সিকিউশন শেষ হওয়ামাত্র মাইক্রোটাস্ক তৎক্ষণাৎ কার্যকর হয়।'
        },
        explanation: {
          en: 'Promise resolution callbacks are microtasks, which are guaranteed to execute before the event loop advances to its next phase.',
          bn: 'প্রমিজের কলব্যাকগুলো মাইক্রোটাস্ক হিসেবে জমা হয় এবং ইভেন্ট লুপের যেকোনো ধাপ পরিবর্তনের পূর্বেই শেষ করা হয়।'
        }
      },
      {
        id: 'dr-q3',
        kind: 'mcq',
        topic: 'close-callbacks-phase-purpose',
        question: {
          en: 'Which types of callbacks are specifically reserved for execution in the Close Callbacks phase of the event loop?',
          bn: 'ইভেন্ট লুপের ক্লোজ কলব্যাক ধাপে সুনির্দিষ্টভাবে কোন ধরনের কলব্যাকগুলো কার্যকর হয়?'
        },
        options: [
          {
            en: 'Destruction and cleanup events for sockets and handles, such as socket.on("close", fn)',
            bn: 'সকেট ও হ্যান্ডল বন্ধ এবং মেমরি পরিষ্কারের ইভেন্ট, যেমন socket.on("close", fn)'
          },
          {
            en: 'Initial server startup logic',
            bn: 'সার্ভার চালু হওয়ার প্রাথমিক কোড'
          },
          {
            en: 'HTTP database read queries',
            bn: 'এইচটিটিপি ডেটাবেস রিড কুয়েরি'
          },
          {
            en: 'Compiling TypeScript code',
            bn: 'টাইপস্ক্রিপ্ট কোড কম্পাইল করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'When a TCP connection is abruptly destroyed via socket.destroy(), where does its close event fire?',
          bn: 'socket.destroy() দিয়ে একটি টিসিপি সকেট ধ্বংস করা হলে তার ক্লোজ ইভেন্ট কোথায় কার্যকর হয়?'
        },
        explanation: {
          en: 'The Close phase is the final phase of the event loop turn, dedicated to notifying listeners that handles have terminated.',
          bn: 'ক্লোজ ধাপ হলো লুপের সর্বশেষ ধাপ, যা কোনো হ্যান্ডল বন্ধ বা নষ্ট হয়ে গেলে শ্রোতাদের অবগত করার কাজে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'dr-q4',
        kind: 'mcq',
        topic: 'chunking-cpu-work-setimmediate',
        question: {
          en: 'How can a developer use setImmediate() to prevent a heavy loop (e.g. processing 100000 records) from freezing a web server?',
          bn: 'কোনো ডেভেলপার কীভাবে setImmediate() ব্যবহার করে একটি বড় লুপের (যেমন ১০০০০০ রেকর্ড প্রসেস করা) কারণে সার্ভার স্থবির হওয়া ঠেকাতে পারেন?'
        },
        options: [
          {
            en: 'By processing records in small batches (e.g. 500 items) and scheduling the next batch with setImmediate(), yielding to the event loop between batches',
            bn: 'রেকর্ডগুলোকে ছোট ছোট ব্যাচে (যেমন ৫০০টি) ভাগ করে পরবর্তী ব্যাচটি setImmediate() দিয়ে শিডিউল করার মাধ্যমে, যা মাঝে ইভেন্ট লুপকে অন্য কাজ করার সুযোগ দেয়'
          },
          {
            en: 'By calling setImmediate(100000) once at the start',
            bn: 'শুরুতে একবার setImmediate(100000) কল করার মাধ্যমে'
          },
          {
            en: 'By deleting 99 percent of the records',
            bn: '৯৯ শতাংশ রেকর্ড মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'setImmediate cannot be used with arrays',
            bn: 'অ্যারের সাথে setImmediate ব্যবহার করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Yielding control to the event loop between batches allows pending network requests to be processed without perceptible lag.',
          bn: 'ব্যাচগুলোর মাঝে ইভেন্ট লুপকে নিয়ন্ত্রণ ফিরিয়ে দিলে অন্য ক্লায়েন্টের নেটওয়ার্ক রিকোয়েস্টগুলো নির্বিঘ্নে চলতে পারে।'
        },
        explanation: {
          en: 'Chunking computation with setImmediate breaks monolithic work into interleaved turns, keeping the HTTP server responsive.',
          bn: 'setImmediate দিয়ে কাজ ভাগ করে চালালে মূল ইভেন্ট লুপ সচল থাকে এবং সার্ভারের রেসপন্স টাইম দ্রুত থাকে।'
        }
      }
    ]
  }
};
