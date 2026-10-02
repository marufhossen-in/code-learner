import type { Lesson } from '../../../lib/types';

export const CoroutinesAndTheSuspendLesson: Lesson = {
  slug: 'coroutines-and-the-suspend',
  tech: 'kotlin',
  title: {
    en: 'Coroutines, Suspending Functions & Structured Concurrency',
    bn: 'কোরুটিন, সাসপেন্ডিং ফাংশন এবং স্ট্রাকচার্ড কনকারেন্সি'
  },
  summary: {
    en: 'Master asynchronous programming with Kotlin Coroutines. Understand how suspending functions achieve cooperative multitasking without blocking OS threads, manage execution via CoroutineDispatchers (Default, IO, Main), enforce child task hierarchy and deterministic cancellation with Structured Concurrency, and handle concurrent computations using async and await.',
    bn: 'Kotlin কোরুটিনের মাধ্যমে আধুনিক অ্যাসিনক্রোনাস প্রোগ্রামিং আয়ত্ত করুন। ওএস থ্রেড না আটকে সাসপেন্ডিং ফাংশন কীভাবে কো-অপারেটিভ মাল্টিটাস্কিং পরিচালনা করে, CoroutineDispatchers (Default, IO, Main) দিয়ে থ্রেড নিয়ন্ত্রণ, স্ট্রাকচার্ড কনকারেন্সি দিয়ে চাইল্ড টাস্কের হায়ারার্কি ও ক্যান্সেলেশন এবং async ও await দিয়ে সমান্তরাল এক্সিকিউশন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'coroutines-and-suspension-heading',
      text: {
        en: 'Lightweight Coroutines, Suspension, and the Continuation State Machine',
        bn: 'লাইটওয়েট কোরুটিন, সাসপেনশন এবং কন্টিনিউয়েশন স্টেট মেশিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traditional operating system threads are heavyweight constructs, each demanding up to two megabytes of dedicated stack memory and expensive kernel context switches. In Kotlin (JetBrains\' modern statically typed programming language), concurrency is revolutionized by Coroutines. Coroutines are lightweight virtual computations; applications can launch one hundred thousand coroutines simultaneously on a modest laptop without exhausting memory. Functions marked with the "suspend" modifier can pause execution cooperatively without blocking the underlying thread. Under the hood, the compiler transforms suspending functions into state machines passing an implicit "Continuation" callback, freeing the worker thread to execute other tasks during I/O delays.',
        bn: 'ঐতিহ্যবাহী অপারেটিং সিস্টেম থ্রেডগুলো অত্যন্ত ভারী হয়, যার প্রতিটি প্রায় দুই মেগাবাইট পর্যন্ত স্ট্যাক মেমোরি এবং ব্যয়বহুল কার্নেল সুইচিং দাবি করে। কিন্তু Kotlin (জেটব্রেইন্সের তৈরি আধুনিক স্ট্যাটিক্যালি টাইপড প্রোগ্রামিং ভাষা)-এ কনকারেন্সির বিপ্লব ঘটেছে কোরুটিনের মাধ্যমে। কোরুটিন হলো অত্যন্ত হালকা ভার্চুয়াল গণনা; মেমোরি শেষ না করেই একটি সাধারণ ল্যাপটপে একসাথে এক লাখ কোরুটিন চালানো সম্ভব। "suspend" মডিফায়ারযুক্ত ফাংশনগুলো অন্তর্নিহিত থ্রেড আটকে না রেখে কো-অপারেটিভভাবে বিরতি নিতে পারে। পেছনের ইঞ্জিন হিসেবে কম্পাইলার সাসপেন্ডিং ফাংশনগুলোকে স্টেট মেশিনে রূপান্তর করে এবং একটি "Continuation" কলব্যাক পাঠায়, যা আই/ও অপেক্ষার সময় ওয়ার্কার থ্রেডটিকে অন্য কাজ করার জন্য উন্মুক্ত করে দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural difference between blocking OS threads and non-blocking coroutine suspension where 1 thread switches between 2 tasks.',
        bn: 'চিত্র ১: ওএস থ্রেড ব্লকিং এবং নন-ব্লকিং কোরুটিন সাসপেনশনের স্থাপত্যিক তুলনা যেখানে ১ টি থ্রেড অনায়াসে ২ টি কাজের মধ্যে অদলবদল করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">KOTLIN COROUTINE SUSPENSION VS OS THREAD BLOCKING</text>

  <!-- Top: Blocking Thread -->
  <g transform="translate(35, 60)">
    <rect width="770" height="110" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="1.5" />
    <rect width="770" height="26" rx="8" fill="#b91c1c" />
    <text x="385" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. OS Thread Blocking: Thread.sleep(1000) Wastes Entire OS Thread</text>

    <rect x="25" y="42" width="220" height="48" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="135" y="62" fill="#f87171" font-size="10" font-family="monospace" text-anchor="middle">Task A Running</text>
    <text x="135" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">Thread-1 Bound to CPU</text>

    <!-- Blocked Bar -->
    <rect x="270" y="42" width="460" height="48" rx="5" fill="#ef4444" fill-opacity="0.2" stroke="#ef4444" stroke-dasharray="4 4" />
    <text x="500" y="62" fill="#fca5a5" font-size="10" font-family="monospace" text-anchor="middle">Thread-1 BLOCKED in OS Kernel Sleep (1000ms)</text>
    <text x="500" y="78" fill="#f87171" font-size="9" font-family="sans-serif" text-anchor="middle">Thread cannot execute Task B | 2MB RAM reserved | CPU core idle</text>
  </g>

  <!-- Bottom: Non-Blocking Suspension -->
  <g transform="translate(35, 190)">
    <rect width="770" height="115" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="770" height="26" rx="8" fill="#059669" />
    <text x="385" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Coroutine Suspension: delay(1000) Releases Thread to Execute Task B</text>

    <!-- Coroutine A suspends -->
    <rect x="25" y="42" width="200" height="52" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="125" y="63" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">Coroutine A: delay(1000)</text>
    <text x="125" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">Suspends cooperatively</text>

    <!-- Thread freed for Coroutine B -->
    <rect x="250" y="42" width="260" height="52" rx="5" fill="#0284c7" fill-opacity="0.2" stroke="#38bdf8" />
    <text x="380" y="63" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">Thread-1 Executes Coroutine B!</text>
    <text x="380" y="80" fill="#f8fafc" font-size="9" font-family="sans-serif" text-anchor="middle">Zero CPU wasted | Reused on shared pool</text>

    <!-- Coroutine A resumes -->
    <rect x="535" y="42" width="200" height="52" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="635" y="63" fill="#34d399" font-size="10" font-family="monospace" text-anchor="middle">Coroutine A Resumes</text>
    <text x="635" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif" text-anchor="middle">State machine resumes at timer</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'structured-concurrency-and-dispatchers-heading',
      text: {
        en: 'Structured Concurrency, Dispatchers, and Scope Lifecycles',
        bn: 'স্ট্রাকচার্ড কনকারেন্সি, ডিসপ্যাচার এবং স্কোপ লাইফসাইকেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Uncontrolled concurrency leads to orphan background threads and resource leaks when parent operations are dismissed. Kotlin eradicates this hazard through Structured Concurrency. Every coroutine must be launched inside an explicit "CoroutineScope". When a parent coroutine is canceled, the runtime propagates the cancellation signal downwards, terminating all child jobs deterministically. Furthermore, developers route execution onto dedicated thread pools using CoroutineDispatchers. "Dispatchers.Main" controls UI interactions on Android, "Dispatchers.IO" offloads blocking file and network operations onto a scalable pool of 64 threads, and "Dispatchers.Default" handles CPU-intensive computations sized to device core counts.',
        bn: 'অনিয়ন্ত্রিত কনকারেন্সির কারণে প্যারেন্ট টাস্ক বন্ধ হলেও ব্যাকগ্রাউন্ডে ক্ষতিকর থ্রেড চলতে থাকে যা মেমোরি লিক ঘটায়। Kotlin স্ট্রাকচার্ড কনকারেন্সির মাধ্যমে এই ঝুঁকি সমূলে ধ্বংস করেছে। এখানে প্রতিটি কোরুটিনকে অবশ্যই একটি সুনির্দিষ্ট "CoroutineScope"-এর ভেতরে শুরু করতে হয়। কোনো প্যারেন্ট কোরুটিন বাতিল হলে রানটাইম সাথে সাথে ক্যান্সেলেশন সিগন্যাল নিচে পাঠিয়ে সব চাইল্ড টাস্ক নিয়মমাফিক বন্ধ করে দেয়। তাছাড়া CoroutineDispatchers ব্যবহার করে কাজগুলো আলাদা থ্রেডপুলে পাঠানো হয়। "Dispatchers.Main" অ্যান্ড্রয়েডে ইউআই পরিচালনা করে, "Dispatchers.IO" ফাইল বা নেটওয়ার্কের কাজগুলো ৬৪ টি থ্রেডের পুলে চালায় এবং "Dispatchers.Default" ভারী সিপিইউ ক্যালকুলেশনগুলো প্রসেসরের কোরের সমান অনুপাতে পরিচালনা করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Kotlin Coroutine cooperative suspension points, Continuation callbacks, and Structured Concurrency cancellation cascades.',
        bn: 'Kotlin কোরুটিন কো-অপারেটিভ সাসপেনশন, Continuation কলব্যাক এবং স্ট্রাকচার্ড কনকারেন্সি ক্যান্সেলেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Kotlin Coroutines, Suspension State Machine, and Structured Concurrency

export interface Continuation<T> {
  resumeWith(result: { value?: T; error?: Error }): void;
}

// 1. Simulating Suspending Function State Machine
export class SuspendingTaskEngine {
  private static threadPoolTaskCount = 0;

  // Simulates "suspend fun fetchUserData(userId: Int): String"
  public static fetchUserData(userId: number, continuation: Continuation<string>): void {
    console.log('[Worker Thread] Coroutine A suspends at network call for User ID:', userId);
    console.log('[Worker Thread] Thread instantly released back to pool to do other work!');

    // Simulate async I/O completion after 50ms
    setTimeout(() => {
      console.log('[Worker Thread] Network response arrived! Resuming Coroutine A...');
      continuation.resumeWith({ value: 'UserData for ' + userId });
    }, 50);
  }
}

// 2. Simulating Structured Concurrency Scope & Cancellation Hierarchy
export class SimulatedCoroutineScope {
  public isCancelled = false;
  private childJobs: SimulatedCoroutineScope[] = [];

  public launchChild(): SimulatedCoroutineScope {
    const child = new SimulatedCoroutineScope();
    this.childJobs.push(child);
    return child;
  }

  // Structured cancellation cascades down to all children automatically!
  public cancel(): void {
    this.isCancelled = true;
    console.log('[Scope] Parent scope cancelled. Propagating cancellation to children...');
    for (const child of this.childJobs) {
      child.cancel();
    }
  }

  public get activeChildCount(): number {
    return this.childJobs.filter(c => !c.isCancelled).length;
  }
}

// Execution Demonstration
console.log('Initiating Cooperative Suspending Coroutine Simulation...');

// Coroutine A initiates suspension
SuspendingTaskEngine.fetchUserData(101, {
  resumeWith: (res) => {
    console.log('[Continuation Resumed] Final Received Payload:', res.value);
  }
});

// While Coroutine A is suspended, the thread immediately executes Coroutine B!
console.log('[Worker Thread] Concurrently executing Coroutine B without blocking!');

// Structured Concurrency Demonstration
const parentScope = new SimulatedCoroutineScope();
const child1 = parentScope.launchChild();
const child2 = parentScope.launchChild();
console.log('Active child coroutines in scope:', parentScope.activeChildCount); // 2

// Parent cancellation cancels all children deterministically
parentScope.cancel();
console.log('Active child coroutines after parent cancel:', parentScope.activeChildCount); // 0`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Coroutine',
          def: {
            en: 'Lightweight virtual thread managed cooperatively at user-level without 1-to-1 OS thread mapping.',
            bn: 'হালকা ভার্চুয়াল থ্রেড যা সরাসরি ওএস থ্রেড দখল না করে কো-অপারেটিভভাবে শত শত কাজ একসাথে চালায়।'
          }
        },
        {
          term: 'Suspending Function',
          def: {
            en: 'Function marked with "suspend" that can pause and resume execution without blocking its host thread.',
            bn: 'ফাংশন যা থ্রেডকে মুক্ত করে দিয়ে সাময়িক বিরতি নিতে পারে এবং কাজ শেষে পুনরায় চালু হতে পারে।'
          }
        },
        {
          term: 'Continuation',
          def: {
            en: 'Compiler-generated callback interface capturing execution state and locals to resume a suspended coroutine.',
            bn: 'কম্পাইলারের তৈরি কলব্যাক ইন্টারফেস যা সাসপেন্ড হওয়া কোডের তথ্য মনে রেখে পরে তা পুনরায় চালু করে।'
          }
        },
        {
          term: 'Structured Concurrency',
          def: {
            en: 'Paradigm where child coroutines are bound to parent scope lifecycles, ensuring deterministic cancellation.',
            bn: 'পদ্ধতি যেখানে চাইল্ড কোরুটিনগুলো প্যারেন্টের সাথে যুক্ত থেকে সুনির্দিষ্ট ক্যান্সেলেশন নিশ্চিত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'suspend-vs-thread-sleep-ex1',
      kind: 'mcq',
      topic: 'coroutine-suspension-vs-thread-blocking',
      question: {
        en: 'What occurs physically to the underlying thread when a coroutine calls "delay(1000)" versus calling "Thread.sleep(1000)"?',
        bn: 'একটি কোরুটিন "Thread.sleep(1000)" ডাকার বদলে "delay(1000)" ডাকলে অন্তর্নিহিত থ্রেডে শারীরিকভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'delay() suspends the coroutine cooperatively, releasing the worker thread to execute other waiting tasks; Thread.sleep() blocks the entire OS thread completely',
          bn: 'delay() কোরুটিনকে সাময়িক বিরতি দিয়ে থ্রেডটিকে অন্য কাজ করার জন্য উন্মুক্ত করে দেয়; আর Thread.sleep() পুরো ওএস থ্রেডটিকে পুরোপুরি আটকে রাখে'
        },
        {
          en: 'Thread.sleep() accelerates the CPU core clock speed by 2x',
          bn: 'Thread.sleep() সিপিইউ কোরের গতি ২ গুণ বাড়িয়ে দেয়'
        },
        {
          en: 'delay() converts all strings into 32-bit floating point numbers',
          bn: 'delay() সমস্ত স্ট্রিংকে ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করে'
        },
        {
          en: 'There is zero difference between delay() and Thread.sleep()',
          bn: 'delay() এবং Thread.sleep()-এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'delay() frees the underlying thread; Thread.sleep() blocks it.',
        bn: 'delay থ্রেডকে মুক্ত করে দেয় যাতে অন্য কাজ চলতে পারে, স্লিপ পুরো থ্রেড নষ্ট করে।'
      },
      explanation: {
        en: 'Calling delay() registers a timer on the coroutine event loop and frees the thread immediately. Thread.sleep() holds the operating system thread hostage, wasting resources.',
        bn: 'ফলে delay ব্যবহার করলে হাজার হাজার কাজ খুব কম সংখ্যক থ্রেড দিয়েই সম্পন্ন করা যায়।'
      }
    },
    {
      id: 'structured-concurrency-cancellation-ex2',
      kind: 'mcq',
      topic: 'structured-concurrency-cancellation-propagation',
      question: {
        en: 'How does Structured Concurrency protect against runaway background tasks when a user navigates away from an Android screen?',
        bn: 'ব্যবহারকারী যখন অ্যান্ড্রয়েড স্ক্রিন থেকে বের হয়ে যান, তখন স্ট্রাকচার্ড কনকারেন্সি কীভাবে মেমোরি লিক রোধ করে?'
      },
      options: [
        {
          en: 'Canceling the parent CoroutineScope automatically propagates cancellation downwards to all active child coroutines, aborting network and computation tasks cleanly',
          bn: 'প্যারেন্ট CoroutineScope বাতিল হওয়ার সাথে সাথেই সমস্ত সক্রিয় চাইল্ড কোরুটিনে ক্যান্সেলেশন সিগন্যাল পৌঁছে যায় এবং সমস্ত ব্যাকগ্রাউন্ড কাজ শান্তভাবে বন্ধ হয়ে যায়'
        },
        {
          en: 'It deletes the application APK from the phone storage',
          bn: 'এটি ফোন স্টোরেজ থেকে অ্যাপ্লিকেশন এপিকে মুছে ফেলে'
        },
        {
          en: 'It forces the phone screen to reboot immediately',
          bn: 'এটি ফোনের স্ক্রিনকে অবিলম্বে রিবুট করতে বাধ্য করে'
        },
        {
          en: 'Structured concurrency was deprecated in Kotlin 1.6',
          bn: 'Kotlin ১.৬ সংস্করণে স্ট্রাকচার্ড কনকারেন্সি বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Parent cancellation cascades down to all child jobs automatically.',
        bn: 'প্যারেন্ট বন্ধ হলে সব চাইল্ড টাস্ক একসাথে গুটিয়ে যায়।'
      },
      explanation: {
        en: 'Because child coroutines inherit their parent context, canceling the scope (e.g. viewModelScope.cancel()) terminates the entire hierarchy, preventing orphan thread leaks.',
        bn: 'এর ফলে কোনো কাজ হারিয়ে না গিয়ে সুশৃঙ্খলভাবে সব রিসোর্স মুক্ত হয়।'
      }
    },
    {
      id: 'dispatchers-io-vs-default-ex3',
      kind: 'mcq',
      topic: 'coroutine-dispatchers-io-vs-default-allocation',
      question: {
        en: 'What is the architectural distinction between "Dispatchers.IO" and "Dispatchers.Default" in Kotlin Coroutines?',
        bn: 'Kotlin কোরুটিনে "Dispatchers.IO" এবং "Dispatchers.Default"-এর মধ্যে স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Dispatchers.IO is optimized for blocking I/O (files, networking) on an elastic pool of up to 64 threads; Dispatchers.Default is sized to CPU core counts for compute-heavy work',
          bn: 'Dispatchers.IO ফাইল ও নেটওয়ার্কের মতো ব্লকিং আই/ও কাজের জন্য ৬৪ টি পর্যন্ত থ্রেডের পুলে চলে; আর Dispatchers.Default ভারী গণনার জন্য সিপিইউ কোরের সংখ্যার সমান পুলে চলে'
        },
        {
          en: 'Dispatchers.IO runs in web browsers, Dispatchers.Default runs on printers',
          bn: 'Dispatchers.IO ব্রাউজারে চলে, আর Dispatchers.Default প্রিন্টারে চলে'
        },
        {
          en: 'Dispatchers.Default deletes all temporary files after 1 minute',
          bn: 'Dispatchers.Default ১ মিনিট পর সমস্ত ফাইল মুছে ফেলে'
        },
        {
          en: 'Both dispatchers share the exact same 1 single thread',
          bn: 'উভয় ডিসপ্যাচার হুবহু একই ১ টি একক থ্রেড শেয়ার করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dispatchers.IO is for disk/network I/O; Dispatchers.Default is for CPU computation.',
        bn: 'নেটওয়ার্ক বা ফাইলের জন্য IO সেরা, আর গণিত বা পার্সিংয়ের জন্য Default সেরা।'
      },
      explanation: {
        en: 'Separating I/O threads from CPU threads ensures that a blocking file read never starves CPU-intensive algorithms (like JSON parsing or image filtering) of processing cycles.',
        bn: 'এর ফলে ভারী গণনার কাজগুলো কোনো বাধা ছাড়াই সর্বোচ্চ গতিতে চলতে পারে।'
      }
    },
    {
      id: 'async-await-concurrency-pattern-ex4',
      kind: 'mcq',
      topic: 'async-await-parallel-decomposition',
      question: {
        en: 'When should an engineer prefer "async { ... }" over "launch { ... }" when initiating a coroutine?',
        bn: 'কোরুটিন শুরু করার সময় কখন একজন ইঞ্জিনিয়ার "launch { ... }"-এর বদলে "async { ... }" বেছে নেবেন?'
      },
      options: [
        {
          en: 'When the coroutine produces a return value that must be fetched asynchronously via ".await()", enabling parallel decomposition of multiple independent tasks',
          bn: 'যখন কোরুটিন থেকে একটি মান ফেরত পাওয়া দরকার হয় যা ".await()"-এর মাধ্যমে গ্রহণ করতে হয় এবং সমান্তরালে একাধিক কাজের ফল সংগ্রহ করতে হয়'
        },
        {
          en: 'When running on battery power below 10 percent',
          bn: 'ব্যাটারি চার্জ ১০ শতাংশের নিচে নেমে যাওয়ার সময়'
        },
        {
          en: 'When the task does not touch the internet',
          bn: 'যখন কাজটি ইন্টারনেট ব্যবহার করে না'
        },
        {
          en: 'async was removed from Kotlin Coroutines in 2022',
          bn: '২০২২ সালে Kotlin কোরুটিন থেকে async বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'launch is fire-and-forget (Job); async returns a deferred result (Deferred<T>) awaited via await().',
        bn: 'মান ফেরত পাওয়ার জন্য async এবং কেবল কাজ চালানোর জন্য launch।'
      },
      explanation: {
        en: 'launch returns a Job with no return value. async returns a Deferred<T>, allowing two network calls to be initiated in parallel and awaited concurrently (val total = a.await() + b.await()).',
        bn: 'এর মাধ্যমে কাজের সময় প্রায় অর্ধেক কমে যায় এবং সমান্তরাল ফল পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-coroutines-and-the-suspend',
    title: {
      en: 'Kotlin Coroutines & Concurrency Quiz',
      bn: 'Kotlin কোরুটিন এবং কনকারেন্সি কুইজ'
    },
    questions: [
      {
        id: 'quiz-withcontext-dispatcher-switching',
        kind: 'mcq',
        topic: 'withcontext-thread-switching-pattern',
        question: {
          en: 'Why is "withContext(Dispatchers.IO)" preferred over nested callbacks when switching execution threads in a suspending function?',
          bn: 'সাসপেন্ডিং ফাংশনে থ্রেড পরিবর্তনের সময় নেস্টেড কলব্যাকের বদলে "withContext(Dispatchers.IO)" ব্যবহার কেন শ্রেয়?'
        },
        options: [
          {
            en: 'It switches execution to the target dispatcher without breaking sequential linear control flow, returning the result directly when the block completes',
            bn: 'এটি স্বাভাবিক ধারাবাহিক কোড প্রবাহ না ভেঙেই টার্গেট ডিসপ্যাচারে কাজ সরিয়ে নেয় এবং কাজ শেষে সরাসরি ফলাফল মূল ধারায় ফেরত দেয়'
          },
          {
            en: 'It doubles the brightness of the mobile display',
            bn: 'এটি মোবাইল ডিসপ্লের উজ্জ্বলতা দ্বিগুণ করে দেয়'
          },
          {
            en: 'It turns off Wi-Fi while downloading files',
            bn: 'ফাইল ডাউনলোডের সময় এটি ওয়াই-ফাই বন্ধ করে দেয়'
          },
          {
            en: 'withContext was deprecated in Kotlin 1.5',
            bn: 'Kotlin ১.৫ সংস্করণে withContext বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'withContext changes dispatchers while keeping code sequential.',
          bn: 'কলব্যাক হেল তৈরি না করে সোজা লাইনে থ্রেড বদলানোর সেরা উপায়।'
        },
        explanation: {
          en: 'withContext preserves sequential code structure. An engineer can call withContext(Dispatchers.IO) on background work and immediately update the UI on the next line seamlessly.',
          bn: 'ফলে কোনো জটিল নেস্টেড কলব্যাক ছাড়াই পরিচ্ছন্ন সোজা কোড লেখা যায়।'
        }
      },
      {
        id: 'quiz-coroutine-scope-supervisorscope',
        kind: 'mcq',
        topic: 'supervisorscope-vs-coroutinescope-failure-isolation',
        question: {
          en: 'What critical resilience feature distinguishes "supervisorScope" from a standard "coroutineScope"?',
          bn: 'স্ট্যান্ডার্ড "coroutineScope"-এর তুলনায় "supervisorScope" কোন গুরুত্বপূর্ণ সহনশীলতার সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'In supervisorScope, a failure in one child coroutine does not cancel its sibling coroutines or the parent scope, isolating individual failures cleanly',
            bn: 'supervisorScope-এ একটি চাইল্ড কোরুটিন ব্যর্থ হলেও তা তার সহোদর কোরুটিন বা প্যারেন্ট স্কোপকে বাতিল করে না, ফলে ত্রুটি সুন্দরভাবে আলাদা থাকে'
          },
          {
            en: 'supervisorScope disables garbage collection for the application',
            bn: 'supervisorScope অ্যাপ্লিকেশনের জন্য মেমোরি মুক্ত করা বন্ধ করে দেয়'
          },
          {
            en: 'supervisorScope only works on 64-bit ARM processors',
            bn: 'supervisorScope কেবল ৬৪-বিট এআরএম প্রসেসরে কাজ করে'
          },
          {
            en: 'Standard coroutineScope never cancels children on failure',
            bn: 'সাধারণ coroutineScope ব্যর্থ হলেও কখনোই সন্তানদের বাতিল করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'supervisorScope prevents failure propagation between sibling tasks.',
          bn: 'একটি কাজ নষ্ট হলে যাতে অন্য কাজগুলো বন্ধ না হয়ে যায়, তার জন্য এটি সেরা।'
        },
        explanation: {
          en: 'Standard scopes cancel all siblings if any child fails. In UI or server batch jobs where independent items shouldn\'t abort the whole batch, supervisorScope isolates failures.',
          bn: 'এর মাধ্যমে একটি ত্রুটির কারণে পুরো সিস্টেম বন্ধ হওয়ার ঝুঁকি এড়ানো যায়।'
        }
      },
      {
        id: 'quiz-yield-cooperative-cancellation',
        kind: 'mcq',
        topic: 'yield-function-cooperative-scheduling',
        question: {
          en: 'Why is invoking "yield()" or "ensureActive()" periodically inside a heavy CPU-bound loop necessary for cooperative coroutines?',
          bn: 'ভারী সিপিইউ লুপের ভেতর নিয়মিত "yield()" বা "ensureActive()" ডাকা কেন কোরুটিনের জন্য অত্যন্ত জরুরি?'
        },
        options: [
          {
            en: 'Because tight computational loops without suspension points cannot detect cancellation signals or yield CPU time to other coroutines on the same thread',
            bn: 'কারণ কোনো সাসপেনশন পয়েন্ট ছাড়া টানা চলা লুপ ক্যান্সেলেশন সংকেত ধরতে পারে না এবং একই থ্রেডের অন্য কাজকে সুযোগ দিতে পারে না'
          },
          {
            en: 'To write the loop count to an encrypted log file on disk',
            bn: 'ডিস্কের এনক্রিপ্ট করা ফাইলে লুপের সংখ্যা লিখে রাখার জন্য'
          },
          {
            en: 'To clear the cache of the mobile web browser',
            bn: 'মোবাইল ওয়েব ব্রাউজারের ক্যাশ মুছে ফেলার জন্য'
          },
          {
            en: 'yield() was replaced by Thread.stop() in Kotlin 2.0',
            bn: 'Kotlin ২.০ সংস্করণে yield() বাদ দিয়ে Thread.stop() আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Coroutines must check for cancellation cooperatively; yield() checks cancellation and yields.',
          bn: 'টানা গণনার মাঝে থ্রেডকে একটু শ্বাস নেওয়ার সুযোগ দিতে yield দরকার।'
        },
        explanation: {
          en: 'Kotlin coroutines do not preemptively interrupt threads. A CPU loop must include suspension points (like yield()) to check isCancelled and give other tasks a turn.',
          bn: 'ফলে দীর্ঘ কাজ চলার মাঝেও অ্যাপ হ্যাং না হয়ে মসৃণ থাকে।'
        }
      },
      {
        id: 'quiz-globalscope-anti-pattern',
        kind: 'mcq',
        topic: 'globalscope-anti-pattern-pitfalls',
        question: {
          en: 'Why is launching coroutines in "GlobalScope" considered a severe anti-pattern in production Kotlin architectures?',
          bn: 'প্রোডাকশন Kotlin আর্কিটেকচারে "GlobalScope"-এ কোরুটিন শুরু করাকে কেন একটি মারাত্মক ক্ষতিকর অ্যান্টি-প্যাটার্ন মনে করা হয়?'
        },
        options: [
          {
            en: 'It breaks structured concurrency by detaching tasks from application lifecycles, leading to zombie coroutines that continue running and leak memory indefinitely',
            bn: 'এটি স্ট্রাকচার্ড কনকারেন্সি ভেঙে দিয়ে কাজগুলোকে অ্যাপ্লিকেশনের জীবনচক্র থেকে বিচ্ছিন্ন করে দেয়, ফলে অপ্রয়োজনীয় কাজ চিরকাল চলতে থাকে এবং মেমোরি লিক ঘটায়'
          },
          {
            en: 'GlobalScope makes Android apps cost 5 dollars on Google Play',
            bn: 'GlobalScope গুগল প্লে-তে অ্যান্ড্রয়েড অ্যাপের দাম ৫ ডলার করে দেয়'
          },
          {
            en: 'GlobalScope is not supported on Java 17',
            bn: 'জাভা ১৭-তে GlobalScope সমর্থিত নয়'
          },
          {
            en: 'GlobalScope forces coroutines to run on the GPU',
            bn: 'GlobalScope কোরুটিনগুলোকে জিপিইউতে চলতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'GlobalScope operates outside structured concurrency and causes resource leaks.',
          bn: 'প্যারেন্টের সাথে কোনো সংযোগ না থাকায় কাজগুলো কখনো নিজে থেকে থামতে পারে না।'
        },
        explanation: {
          en: 'GlobalScope lives as long as the entire process. Tasks launched inside it cannot be canceled collectively when views or requests finish, causing rampant memory leaks.',
          bn: 'তাই সর্বদা নির্দিষ্ট লাইফসাইকেলযুক্ত স্কোপ ব্যবহার করা উচিত।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'flows-and-the-collect',
    title: {
      en: 'Asynchronous Streams, Reactive Flows & StateFlow',
      bn: 'অ্যাসিনক্রোনাস স্ট্রিম, রিঅ্যাক্টিভ ফ্লো এবং StateFlow'
    }
  }
};
