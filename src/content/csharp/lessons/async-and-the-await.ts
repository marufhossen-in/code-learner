import type { Lesson } from '../../../lib/types';

export const AsyncAndTheAwaitLesson: Lesson = {
  slug: 'async-and-the-await',
  tech: 'csharp',
  title: {
    en: 'Async, Await & Task Parallel Library',
    bn: 'Async, Await এবং Task Parallel লাইব্রেরি'
  },
  summary: {
    en: 'Master non-blocking asynchronous programming in C#. Learn how the Roslyn compiler transforms async methods into state machine structs, avoid thread pool starvation and sync-over-async deadlocks (.Result / .Wait()), handle cooperative cancellation with CancellationToken, and optimize context switching with ConfigureAwait.',
    bn: 'C#-এ নন-ব্লকিং অ্যাসিনক্রোনাস প্রোগ্রামিং আয়ত্ত করুন। জানুন কীভাবে Roslyn কম্পাইলার async মেথডকে স্টেট মেশিনে রূপান্তরিত করে, থ্রেড পুল সংকট ও ডেডলক (.Result / .Wait()) প্রতিরোধ, CancellationToken দিয়ে নিরাপদ অপারেশন বাতিলকরণ এবং ConfigureAwait দিয়ে কনটেক্সট অপটিমাইজেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'async-await-state-machine-heading',
      text: {
        en: 'The Asynchronous State Machine and Thread Pool Efficiency',
        bn: 'অ্যাসিনক্রোনাস স্টেট মেশিন এবং থ্রেড পুল দক্ষতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Modern cloud web applications must handle thousands of concurrent operations without exhausting server memory. Asynchronous programming in C# enables non-blocking input/output (I/O). When a method is marked with the "async" keyword, the Roslyn compiler transforms it into a state machine struct implementing IAsyncStateMachine. When execution encounters an "await" on an unfinished Task, the state machine saves current execution state, registers a continuation callback, and releases the thread immediately back to the ThreadPool. During the external network or disk operation, zero operating system threads are blocked waiting. Once the operation completes, the runtime assigns an available worker thread to resume execution.',
        bn: 'আধুনিক ক্লাউড অ্যাপ্লিকেশনগুলোকে মেমোরি সংকট ছাড়াই একসাথে হাজার হাজার রিকোয়েস্ট পরিচালনা করতে হয়। C#-এ অ্যাসিনক্রোনাস প্রোগ্রামিং নন-ব্লকিং ইনপুট/আউটপুট (I/O) নিশ্চিত করে এই সক্ষমতা দেয়। যখন কোনো মেথডে "async" কি-ওয়ার্ড লেখা হয়, তখন Roslyn কম্পাইলার এটিকে IAsyncStateMachine ইন্টারফেসযুক্ত একটি স্টেট মেশিন স্ট্রাকচারে রূপান্তরিত করে। কোড চলার সময় কোনো অসমাপ্ত Task-এর মুখে "await" পেলে স্টেট মেশিনটি বর্তমান অবস্থা সংরক্ষণ করে এবং সাথে সাথে এক্সিকিউটিং থ্রেডটিকে থ্রেড পুলে ফেরত পাঠায়। বাইরের নেটওয়ার্ক বা ডিস্ক অপারেশন চলাকালীন কোনো থ্রেড অযথা আটকে থাকে না। ডেটা প্রস্তুত হলে রানটাইম যেকোনো মুক্ত থ্রেড দিয়ে স্টেট মেশিনের পরবর্তী অংশ চালু করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of async/await: From initial method call through thread release, hardware I/O completion, and state machine resumption.',
        bn: 'চিত্র ১: async/await এর পূর্ণাঙ্গ কার্যপ্রবাহ: মেথড কল থেকে থ্রেড অবমুক্তকরণ, হার্ডওয়্যার I/O সম্পন্ন হওয়া এবং স্টেট মেশিনের মাধ্যমে কাজ পুনরায় চালুকরণ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# ASYNC/AWAIT STATE MACHINE EXECUTION PIPELINE</text>

  <!-- Step 1: Method Invocation -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Invocation</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">async Task&lt;User&gt;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">GetUserAsync(id)</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Hits "await client.Get"</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">State Machine Starts</text>
  </g>

  <!-- Step 2: Thread Release -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Thread Released</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Returns to Pool</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Thread Serves Others</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">State Saved in Struct</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero Blocked Threads</text>
  </g>

  <!-- Step 3: Hardware I/O -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Device I/O</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">OS Network Card</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Socket Data Arrival</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">I/O Completion Port</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Hardware Signaling</text>
  </g>

  <!-- Step 4: Continuation Resume -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Resumption</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">ThreadPool Worker</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Picks Next State</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Returns Final Result</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Elastic Concurrency</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'sync-over-async-and-cancellation-heading',
      text: {
        en: 'Sync-over-Async Antipatterns, Deadlocks & CancellationToken',
        bn: 'Sync-over-Async এর কুফল, ডেডলক এবং CancellationToken'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A perilous mistake in C# is "sync-over-async": invoking an asynchronous method and immediately calling ".Result" or ".Wait()". This blocks the active thread waiting for task completion. In environments with a SynchronizationContext (such as ASP.NET or WPF), the continuation attempts to marshal back to the blocked original thread, causing an inescapable deadlock. In high-traffic services, sync-over-async rapidly causes ThreadPool starvation. To ensure resilience, developers pass a CancellationToken to all asynchronous calls. If a user cancels a request or a timeout fires, CancellationToken propagates cooperative cancellation gracefully without leaving orphaned tasks running.',
        bn: 'C#-এ একটি অত্যন্ত বিপজ্জনক ভুল অভ্যাস হলো "sync-over-async": একটি অ্যাসিনক্রোনাস মেথড কল করে সাথে সাথে ".Result" বা ".Wait()" দিয়ে ব্লক করা। এটি টাস্ক শেষ হওয়ার অপেক্ষায় সক্রিয় থ্রেডটিকে অকেজো করে রাখে। যে সমস্ত পরিবেশে SynchronizationContext থাকে (যেমন ASP.NET বা WPF), সেখানে টাস্ক শেষ হওয়ার পর মূল থ্রেডে ফিরে আসার চেষ্টা করে কিন্তু মূল থ্রেডটি ইতিমধ্যে ব্লক থাকায় মারাত্মক ডেডলক তৈরি হয়। তাছাড়া উচ্চ ট্রাফিকের সিস্টেমে এটি দ্রুত থ্রেড পুল শূন্য করে সার্ভার অচল করে দেয়। স্থিতিস্থাপকতা নিশ্চিত করতে সর্বদা CancellationToken ব্যবহার করা হয়। ক্লায়েন্ট রিকোয়েস্ট বাতিল করলে বা টাইমআউট হলে CancellationToken নিরাপদভাবে পুরো পাইপলাইন বন্ধ করে সিস্টেমের রিসোর্স রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# async/await state machine transitions, non-blocking suspension, and cooperative cancellation tokens.',
        bn: 'C# async/await স্টেট মেশিন, নন-ব্লকিং সাসপেনশন এবং CancellationToken এর TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Async State Machine and CancellationToken

export class CancellationTokenSimulator {
  private isCancelled: boolean = false;

  public cancel(): void {
    this.isCancelled = true;
    console.log('[CancellationToken] Cancellation signal triggered.');
  }

  public throwIfCancellationRequested(): void {
    if (this.isCancelled) {
      throw new Error('OperationCanceledException: task was cancelled');
    }
  }
}

// Simulating C# async/await Task state machine
export class AsyncTaskStateMachineSimulator {
  // Simulating async Task<string> FetchOrderAsync(int orderId, CancellationToken ct)
  public async fetchOrderAsync(orderId: number, token: CancellationTokenSimulator): Promise<string> {
    console.log('[AsyncStateMachine] State 0: Initiating I/O for Order #' + orderId);
    token.throwIfCancellationRequested();

    // Simulating non-blocking hardware I/O suspension
    await new Promise(resolve => setTimeout(resolve, 50));

    // State 1: Verification after I/O returns
    token.throwIfCancellationRequested();
    console.log('[AsyncStateMachine] State 1: Resumed execution on pooled thread');

    return 'Order #' + orderId + ' Details [Status: Confirmed]';
  }
}

// Execution demonstration
async function runAsyncDemo() {
  const runner = new AsyncTaskStateMachineSimulator();
  const tokenSource = new CancellationTokenSimulator();

  // Successful async execution
  const orderDetails = await runner.fetchOrderAsync(404, tokenSource);
  console.log('Async Operation Outcome:', orderDetails);

  // Cancellation demonstration
  const cancelToken = new CancellationTokenSimulator();
  cancelToken.cancel();
  try {
    await runner.fetchOrderAsync(505, cancelToken);
  } catch (err: any) {
    console.log('Captured Cancellation:', err.message); // OperationCanceledException
  }
}

runAsyncDemo();`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Async / Await',
          def: {
            en: 'C# language keywords transforming asynchronous methods into compiler-generated state machines that release threads during I/O.',
            bn: 'C# কি-ওয়ার্ড যা মেথডকে স্টেট মেশিনে রূপান্তর করে I/O চলাকালীন থ্রেডকে অন্য কাজের জন্য মুক্ত রাখে।'
          }
        },
        {
          term: 'Task / Task<T>',
          def: {
            en: 'Core types representing ongoing or completed asynchronous operations in the .NET Task Parallel Library.',
            bn: '.NET-এ চলমান বা সমাপ্ত অ্যাসিনক্রোনাস অপারেশন নির্দেশকারী মূল টাইপ।'
          }
        },
        {
          term: 'CancellationToken',
          def: {
            en: 'Struct passed into async methods to propagate notifications that an operation should be cancelled gracefully.',
            bn: 'অ্যাসিনক্রোনাস মেথডে ব্যবহৃত স্ট্রাক্ট যা নিরাপদে অপারেশন বাতিলের সংকেত ছড়িয়ে দেয়।'
          }
        },
        {
          term: 'ConfigureAwait(false)',
          def: {
            en: 'Directive instructing the runtime not to capture and restore the original SynchronizationContext upon task completion.',
            bn: 'নির্দেশনা যা টাস্ক শেষ হওয়ার পর পূর্বের থ্রেড কনটেক্সটে ফিরে না গিয়ে যেকোনো ফাঁকা থ্রেডে কাজ চালানোর অনুমতি দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'async-await-thread-behavior-ex1',
      kind: 'mcq',
      topic: 'async-await-releases-thread-to-pool',
      question: {
        en: 'What happens to the executing thread when code reaches an "await" on an uncompleted asynchronous Task?',
        bn: 'যখন কোনো অসমাপ্ত Task-এর মুখে কোড "await" এক্সপ্রেশনে পৌঁছায়, তখন এক্সিকিউটিং থ্রেডের কী ঘটে?'
      },
      options: [
        {
          en: 'The thread is immediately released back to the ThreadPool to handle other concurrent requests; it does NOT block waiting for I/O',
          bn: 'থ্রেডটি সাথে সাথে থ্রেড পুলে ফিরে যায় যাতে অন্যান্য রিকোয়েস্ট সামলাতে পারে; এটি I/O শেষ হওয়ার অপেক্ষায় অলসভাবে আটকে থাকে না'
        },
        {
          en: 'The thread continuously spins at 100 percent CPU usage until the server overheats',
          bn: 'থ্রেডটি সিপিইউ ১০০ শতাংশ ব্যবহার করে অবিরাম ঘুরতে থাকে যতক্ষণ না সার্ভার অতিরিক্ত গরম হয়'
        },
        {
          en: 'The operating system uninstalls the .NET runtime',
          bn: 'অপারেটিং সিস্টেম .NET রানটাইম আনইনস্টল করে ফেলে'
        },
        {
          en: 'All memory on the computer is erased',
          bn: 'কম্পিউটারের সমস্ত মেমোরি মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'await frees threads back to the thread pool for high scalability.',
        bn: 'await থ্রেডকে আটকে না রেখে অন্য কাজের জন্য থ্রেড পুলে অবমুক্ত করে।'
      },
      explanation: {
        en: 'Non-blocking I/O releases the thread. Operating system completion ports wake a pooled thread when data arrives.',
        bn: 'থ্রেড মুক্ত থাকার কারণেই একটি সাধারণ সার্ভার লক্ষ লক্ষ রিকোয়েস্ট অনায়াসে সামলাতে পারে।'
      }
    },
    {
      id: 'sync-over-async-deadlock-risk-ex2',
      kind: 'mcq',
      topic: 'sync-over-async-deadlock-mechanism',
      question: {
        en: 'Why is calling ".Result" or ".Wait()" on a Task (the sync-over-async antipattern) dangerous in applications with a SynchronizationContext?',
        bn: 'SynchronizationContext যুক্ত অ্যাপ্লিকেশনে একটি Task-এর ওপর ".Result" বা ".Wait()" কল করা (sync-over-async) কেন অত্যন্ত বিপজ্জনক?'
      },
      options: [
        {
          en: 'The blocking call occupies the thread while the continuation waits for that same thread to be freed, creating an unresolvable deadlock',
          bn: 'ব্লকিং কলটি মূল থ্রেড আটকে রাখে, অন্যদিকে টাস্কের পরবর্তী অংশ চলার জন্য সেই একই মূল থ্রেড ফাঁকা হওয়ার অপেক্ষা করে, ফলে মারাত্মক ডেডলক ঘটে'
        },
        {
          en: 'It increases network bandwidth by 500 percent',
          bn: 'এটি নেটওয়ার্ক ব্যান্ডউইথ ৫০০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'Because Task objects cannot be awaited more than once in modern C#',
          bn: 'কারণ আধুনিক C#-এ Task-কে একাধিকবার await করা যায় না'
        },
        {
          en: '.Result only works on Linux and fails on Windows',
          bn: '.Result কেবল লিনাক্সে চলে এবং উইন্ডোজে অচল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Blocking the thread prevents the continuation from executing on that captured context.',
        bn: 'থ্রেড ব্লক থাকলে টাস্কের বাকি অংশ সেই থ্রেডে ফিরে আসার সুযোগ পায় না, ফলে সিস্টেম জমে যায়।'
      },
      explanation: {
        en: 'Calling .Result blocks the caller thread. If the continuation must run on the caller thread (due to SynchronizationContext), neither can proceed.',
        bn: 'এই ডেডলক এড়াতে কখনোই .Result ব্যবহার করবেন না; সর্বদা await ব্যবহার করুন।'
      }
    },
    {
      id: 'cancellationtoken-cooperative-nature-ex3',
      kind: 'mcq',
      topic: 'cancellationtoken-cooperative-pattern',
      question: {
        en: 'How does cancellation work in C# when using CancellationTokenSource and CancellationToken?',
        bn: 'CancellationTokenSource এবং CancellationToken ব্যবহারের সময় C#-এ কাজ বাতিলের প্রক্রিয়া কীভাবে সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'Cancellation is cooperative: the caller signals cancellation, and the executing method periodically checks token.ThrowIfCancellationRequested() or passes the token downstream',
          bn: 'ক্যান্সেলেশন হলো পারস্পরিক সহযোগিতামূলক: কলার সিগন্যাল পাঠায় এবং চলমান মেথডটি token.ThrowIfCancellationRequested() বা পরবর্তী মেথডে টোকেন পাঠিয়ে নিরাপদভাবে কাজ থামায়'
        },
        {
          en: 'The operating system forcefully terminates the process with exit code 1',
          bn: 'অপারেটিং সিস্টেম জোরপূর্বক প্রসেস বন্ধ করে দেয়'
        },
        {
          en: 'All network cables are physically disconnected',
          bn: 'সব নেটওয়ার্ক তার খুলে যায়'
        },
        {
          en: 'Cancellation happens instantaneously by terminating the CPU clock',
          bn: 'সিপিইউ ক্লক থামিয়ে দিয়ে সাথে সাথে ক্যান্সেলেশন সম্পন্ন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: '.NET cancellation is cooperative, allowing safe cleanup of open resources.',
        bn: '.NET-এ ক্যান্সেলেশন সহযোগিতামূলক যাতে ফাইল বা ডেটাবেস কানেকশন নিরাপদভাবে বন্ধ করা যায়।'
      },
      explanation: {
        en: 'Cooperative cancellation allows methods to clean up resources (closing streams, releasing locks) before throwing OperationCanceledException.',
        bn: 'জোর করে না থামিয়ে টোকেনের মাধ্যমে থামার নির্দেশ দিলে ডেটা নষ্ট হওয়া থেকে রক্ষা পায়।'
      }
    },
    {
      id: 'configureawait-false-library-code-ex4',
      kind: 'mcq',
      topic: 'configureawait-false-library-performance',
      question: {
        en: 'Why is it recommended to add ".ConfigureAwait(false)" to awaited tasks in reusable class library code?',
        bn: 'পুনর্ব্যবহারযোগ্য ক্লাস লাইব্রেরির কোডে awaited টাস্কের শেষে ".ConfigureAwait(false)" যোগ করার সুপারিশ কেন করা হয়?'
      },
      options: [
        {
          en: 'It informs the runtime that the continuation does not need to resume on the original SynchronizationContext, avoiding context-switching overhead and preventing deadlocks',
          bn: 'এটি রানটাইমকে জানায় যে টাস্ক শেষ হওয়ার পর মূল SynchronizationContext-এ ফিরে আসার প্রয়োজন নেই, ফলে অযথা কনটেক্সট পরিবর্তনের খরচ বাঁচে এবং ডেডলক দূর হয়'
        },
        {
          en: 'It forces the method to run synchronously as a background thread',
          bn: 'এটি মেথডটিকে ব্যাকগ্রাউন্ড থ্রেড হিসেবে সিনক্রোনাস চালাতে বাধ্য করে'
        },
        {
          en: 'It doubles the execution speed of the GPU',
          bn: 'এটি জিপিইউ-এর কাজের গতি দ্বিগুণ করে দেয়'
        },
        {
          en: 'ConfigureAwait(false) was deprecated in C# 7',
          bn: 'C# ৭ সংস্করণে ConfigureAwait(false) বাতিল করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ConfigureAwait(false) avoids returning to the captured SynchronizationContext.',
        bn: 'ConfigureAwait(false) মূল থ্রেড কনটেক্সটে ফিরে যাওয়ার বাধ্যবাধকতা দূর করে।'
      },
      explanation: {
        en: 'Libraries should not assume UI or request contexts. ConfigureAwait(false) lets any thread pool thread run the continuation, optimizing throughput.',
        bn: 'লাইব্রেরি কোডে এটি ব্যবহার করলে কোনো বিশেষ থ্রেডের ওপর নির্ভরতা থাকে না এবং গতি বৃদ্ধি পায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-async-and-the-await',
    title: {
      en: 'C# Asynchronous & Parallel Programming Quiz',
      bn: 'C# অ্যাসিনক্রোনাস এবং প্যারালাল প্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-task-whenall-vs-whenany',
        kind: 'mcq',
        topic: 'task-whenall-vs-whenany-concurrency',
        question: {
          en: 'What is the functional difference between Task.WhenAll and Task.WhenAny when managing multiple concurrent asynchronous operations?',
          bn: 'একাধিক সমান্তরাল অ্যাসিনক্রোনাস অপারেশন পরিচালনার সময় Task.WhenAll এবং Task.WhenAny এর মধ্যকার পার্থক্য কী?'
        },
        options: [
          {
            en: 'Task.WhenAll completes only when every provided task has completed; Task.WhenAny completes as soon as any single task finishes, returning the winning task',
            bn: 'Task.WhenAll তখনই সম্পন্ন হয় যখন প্রদত্ত সমস্ত টাস্ক সফল বা শেষ হয়; আর Task.WhenAny যেকোনো ১ টি টাস্ক শেষ হওয়ার সাথে সাথে সেই প্রথম সমাপ্ত টাস্কটি ফেরত দিয়ে সম্পন্ন হয়'
          },
          {
            en: 'Task.WhenAll runs on Windows; Task.WhenAny runs on macOS',
            bn: 'Task.WhenAll উইন্ডোজে চলে; Task.WhenAny ম্যাকের জন্য'
          },
          {
            en: 'Task.WhenAll deletes tasks that take longer than 10 seconds',
            bn: 'Task.WhenAll ১০ সেকেন্ডের বেশি সময় লাগা টাস্ক মুছে ফেলে'
          },
          {
            en: 'Both methods behave identically in the .NET runtime',
            bn: 'উভয় মেথড .NET রানটাইমে হুবহু একই আচরণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'WhenAll waits for all tasks; WhenAny completes on the fastest task.',
          bn: 'WhenAll সবার জন্য অপেক্ষা করে; WhenAny দ্রুততম প্রথম টাস্কটি নিয়ে শেষ হয়।'
        },
        explanation: {
          en: 'Use Task.WhenAll for fan-out aggregations and Task.WhenAny for racing operations (such as redundant queries with timeouts).',
          bn: 'একসাথে সবার ফলাফল চাইলে WhenAll আর দ্রুততম রেসপন্স বেছে নিতে WhenAny আদর্শ।'
        }
      },
      {
        id: 'quiz-valuetask-heap-optimization',
        kind: 'mcq',
        topic: 'valuetask-high-frequency-zero-allocation',
        question: {
          en: 'Why was ValueTask<T> introduced in modern C#, and when should it be preferred over standard Task<T>?',
          bn: 'আধুনিক C#-এ ValueTask<T> কেন চালু করা হয়েছিল, এবং কখন এটিকে সাধারণ Task<T>-এর চেয়ে অগ্রাধিকার দেওয়া উচিত?'
        },
        options: [
          {
            en: 'ValueTask<T> is a struct that avoids heap allocation when an asynchronous operation completes synchronously (such as reading from an in-memory cache)',
            bn: 'ValueTask<T> হলো একটি স্ট্রাক্ট যা অ্যাসিনক্রোনাস অপারেশন সিনক্রোনাসলি সাথে সাথে শেষ হলে (যেমন মেমোরি ক্যাশ থেকে পড়ার সময়) কোনো হিপ অবজেক্ট তৈরি করা পরিহার করে'
          },
          {
            en: 'ValueTask<T> allows tasks to run without an operating system',
            bn: 'ValueTask<T> কোনো অপারেটিং সিস্টেম ছাড়াই টাস্ক চালানোর সুযোগ দেয়'
          },
          {
            en: 'ValueTask<T> automatically converts JSON strings to XML',
            bn: 'ValueTask<T> স্বয়ংক্রিয়ভাবে জেসন স্ট্রিংকে XML বানিয়ে ফেলে'
          },
          {
            en: 'Standard Task<T> is deprecated and removed in .NET 8',
            bn: '.NET ৮ সংস্করণে সাধারণ Task<T> বাতিল করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'ValueTask avoids heap allocations on fast, synchronously completed paths.',
          bn: 'ValueTask দ্রুত ক্যাশ থেকে মান পাওয়ার মতো ক্ষেত্রে নতুন অবজেক্ট তৈরির মেমোরি খরচ বাঁচায়।'
        },
        explanation: {
          en: 'When operations often return synchronously (cache hits), allocating Task<T> objects stresses the GC. ValueTask<T> is a stack struct on synchronous paths.',
          bn: 'অপ্রয়োজনীয় হিপ খরচ বাঁচিয়ে দ্রুতগতির সার্ভারে পারফরম্যান্স সর্বোচ্চ রাখাই ValueTask এর মূল কাজ।'
        }
      },
      {
        id: 'quiz-async-void-antipattern-danger',
        kind: 'mcq',
        topic: 'async-void-unhandled-exceptions-crash',
        question: {
          en: 'Why is "async void" strongly discouraged in C# (except for top-level event handlers), and what happens when an exception is thrown inside an async void method?',
          bn: 'টপ-লেভেল ইভেন্ট হ্যান্ডলার ছাড়া সাধারণ মেথডে "async void" ব্যবহার কঠোরভাবে নিষিদ্ধ কেন, এবং async void মেথডের ভেতর এরর ঘটলে কী পরিণতি হয়?'
        },
        options: [
          {
            en: 'async void methods cannot be awaited and caller try-catch blocks cannot capture their exceptions; an unhandled exception crashes the entire process directly on the SynchronizationContext',
            bn: 'async void মেথডকে await করা যায় না এবং কলারের try-catch এরর ধরতে পারে না; ফলে অপ্রত্যাশিত এক্সেপশন ঘটলে পুরো অ্যাপ্লিকেশন সাথে সাথে ক্র্যাশ করে বন্ধ হয়ে যায়'
          },
          {
            en: 'async void converts the method into an infinite loop',
            bn: 'async void মেথডটিকে অনন্ত লুপে পরিণত করে'
          },
          {
            en: 'It causes the hard drive to run out of storage space',
            bn: 'এটি হার্ড ডিস্কের সমস্ত খালি জায়গা পূরণ করে ফেলে'
          },
          {
            en: 'async void is the default recommended return type in C#',
            bn: 'C#-এ async void হলো সবচেয়ে প্রশংসিত ও সুপারিশকৃত রিটার্ন টাইপ'
          }
        ],
        answer: 0,
        hint: {
          en: 'async void cannot be awaited and uncaught exceptions crash the process.',
          bn: 'async void কে ট্র্যাক বা await করা যায় না এবং এরর ঘটলে পুরো সফটওয়্যার ক্র্যাশ করে।'
        },
        explanation: {
          en: 'Always return Task instead of void for async methods so callers can await completion and catch exceptions gracefully.',
          bn: 'নিরাপদ এরর হ্যান্ডলিং ও অপেক্ষা করার স্বার্থে সর্বদা void এর বদলে Task রিটার্ন করা উচিত।'
        }
      },
      {
        id: 'quiz-iasyncenumerable-streaming-data',
        kind: 'mcq',
        topic: 'iasyncenumerable-asynchronous-streams',
        question: {
          en: 'What unique asynchronous capability does "IAsyncEnumerable<T>" provide in C# 8 and later versions?',
          bn: 'C# ৮ এবং পরবর্তী সংস্করণে "IAsyncEnumerable<T>" কোন অনন্য অ্যাসিনক্রোনাস সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It enables asynchronous streaming, allowing consumer methods to consume individual items as they arrive using "await foreach" without waiting for the entire batch to download',
            bn: 'এটি অ্যাসিনক্রোনাস স্ট্রিমিং সম্ভব করে, যার ফলে পুরো ডেটা ডাউনলোডের অপেক্ষা না করে "await foreach" দিয়ে ডেটা আসার সাথে সাথে প্রতিটি আইটেম প্রসেস করা যায়'
          },
          {
            en: 'It encrypts network traffic with a 512-bit key',
            bn: 'এটি ৫১২-বিট কি দিয়ে নেটওয়ার্ক ট্রাফিক এনক্রিপ্ট করে'
          },
          {
            en: 'It only works with static arrays of integers',
            bn: 'এটি কেবল পূর্ণসংখ্যার ফিক্সড অ্যারের সাথে কাজ করে'
          },
          {
            en: 'IAsyncEnumerable is restricted to desktop Windows forms applications',
            bn: 'IAsyncEnumerable কেবল ডেস্কটপ উইন্ডোজ অ্যাপে সীমাবদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'IAsyncEnumerable pairs with "await foreach" to stream items asynchronously.',
          bn: 'IAsyncEnumerable এবং "await foreach" একসাথে স্ট্রিমিং ডেটা এক এক করে প্রসেস করতে সাহায্য করে।'
        },
        explanation: {
          en: 'IAsyncEnumerable streams elements pull-style as they become available from databases, gRPC streams, or message brokers.',
          bn: 'সব ডেটা একসাথে মেমোরিতে না এনে স্ট্রিমিং আকারে অল্প অল্প করে প্রসেস করার জন্য এটি আধুনিক সমাধান।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'generics-and-the-collection',
    title: {
      en: 'Generics, Collections & Memory with Span<T>',
      bn: 'জেনেরিক্স, কালেকশন এবং Span<T> মেমোরি'
    }
  }
};
