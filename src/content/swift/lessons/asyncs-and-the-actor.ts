import type { Lesson } from '../../../lib/types';

export const AsyncsAndTheActorLesson: Lesson = {
  slug: 'asyncs-and-the-actor',
  tech: 'swift',
  title: {
    en: 'Structured Concurrency, Async/Await & Actors',
    bn: 'স্ট্রাকচার্ড কনকারেন্সি, Async/Await এবং অ্যাক্টরস'
  },
  summary: {
    en: 'Master modern concurrency in Swift without callback hell or data races. Understand structured async/await cooperative suspension, manage concurrent child operations using TaskGroups, eliminate mutable state conflicts through actor isolation, and synchronize UI updates on the main thread via @MainActor.',
    bn: 'কলব্যাক হেল বা ডেটা রেস ছাড়াই Swift-এ আধুনিক কনকারেন্সি আয়ত্ত করুন। স্ট্রাকচার্ড async/await কো-অপারেটিভ সাসপেনশন, TaskGroups দিয়ে সমান্তরাল চাইল্ড টাস্ক পরিচালনা, অ্যাক্টর আইসোলেশন দিয়ে মিউটেবল স্টেট সংঘাত দূর করা এবং @MainActor দিয়ে মেইন থ্রেডে ইউআই সিঙ্ক।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'structured-concurrency-and-await-heading',
      text: {
        en: 'Structured Concurrency, Async/Await, and Cooperative Suspension',
        bn: 'স্ট্রাকচার্ড কনকারেন্সি, Async/Await এবং কো-অপারেটিভ সাসপেনশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For over a decade, asynchronous mobile programming on Apple devices depended on Grand Central Dispatch (GCD) and deeply nested completion handler closures. In Swift (Apple\'s type-safe compiled programming language), this legacy complexity is replaced by native Structured Concurrency. Functions declared with "async" can suspend execution using the "await" keyword without blocking the underlying operating system thread. When an await suspension point is reached, the runtime frees the thread to execute other waiting tasks on a cooperative thread pool. Furthermore, child tasks spawned inside structured task groups form a clear tree hierarchy, automatically inheriting priorities, cancellation signals, and task-local variables from their parent task.',
        bn: 'এক দশকেরও বেশি সময় ধরে অ্যাপল ডিভাইসে অ্যাসিনক্রোনাস মোবাইল প্রোগ্রামিং গ্র্যান্ড সেন্ট্রাল ডিসপ্যাচ (GCD) এবং গভীর নেস্টেড কলব্যাক ক্লোজারের ওপর নির্ভরশীল ছিল। কিন্তু Swift (অ্যাপলের তৈরি টাইপ-নিরাপদ কম্পাইল্ড ভাষা)-এ এই জটিলতা দূর করে নেটিভ স্ট্রাকচার্ড কনকারেন্সি চালু করা হয়েছে। "async" দিয়ে ঘোষিত ফাংশনগুলো অন্তর্নিহিত থ্রেড আটকে না রেখে "await" কি-ওয়ার্ডের সাহায্যে সাময়িক বিরতি বা সাসপেন্ড হতে পারে। কোনো সাসপেনশন পয়েন্টে পৌঁছালে রানটাইম থ্রেডটিকে মুক্ত করে দেয় যাতে কো-অপারেটিভ পুলে থাকা অন্য কাজগুলো চলতে পারে। তাছাড়া টাস্ক গ্রুপের ভেতরের চাইল্ড টাস্কগুলো একটি সুন্দর হায়ারার্কি তৈরি করে, যা প্যারেন্ট টাস্ক থেকে স্বয়ংক্রিয়ভাবে অগ্রাধিকার ও ক্যান্সেলেশন সংকেত লাভ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Actor isolation architecture: Two concurrent threads serialize access to mutable state through the actor mailbox, eliminating data races completely.',
        bn: 'চিত্র ১: অ্যাক্টর আইসোলেশন আর্কিটেকচার: ২ টি সমান্তরাল থ্রেড অ্যাক্টর মেইলবক্সের মাধ্যমে মিউটেবল স্টেটে এক এক করে অ্যাক্সেস করে, যা ডেটা রেস সম্পূর্ণ নির্মূল করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SWIFT ACTOR ISOLATION &amp; DATA RACE ELIMINATION</text>

  <!-- Concurrent Caller 1 -->
  <g transform="translate(35, 65)">
    <rect width="200" height="95" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="200" height="26" rx="6" fill="#0284c7" />
    <text x="100" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Thread 1: Network Task</text>

    <text x="15" y="48" fill="#38bdf8" font-size="10" font-family="monospace">await account.deposit(100)</text>
    <text x="15" y="68" fill="#cbd5e1" font-size="9" font-family="sans-serif">Cooperative suspension</text>
    <text x="15" y="85" fill="#94a3b8" font-size="9" font-family="sans-serif">Asynchronous await call</text>
  </g>

  <!-- Concurrent Caller 2 -->
  <g transform="translate(35, 185)">
    <rect width="200" height="95" rx="6" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="200" height="26" rx="6" fill="#d97706" />
    <text x="100" y="18" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Thread 2: User Action</text>

    <text x="15" y="48" fill="#fbbf24" font-size="10" font-family="monospace">await account.withdraw(50)</text>
    <text x="15" y="68" fill="#cbd5e1" font-size="9" font-family="sans-serif">Cooperative suspension</text>
    <text x="15" y="85" fill="#94a3b8" font-size="9" font-family="sans-serif">Asynchronous await call</text>
  </g>

  <!-- Center: Actor Mailbox Serializer -->
  <g transform="translate(290, 75)">
    <rect width="230" height="195" rx="8" fill="#0f172a" stroke="#a855f7" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#9333ea" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Actor Serial Mailbox</text>

    <rect x="15" y="45" width="200" height="35" rx="5" fill="#1e293b" stroke="#38bdf8" />
    <text x="100" y="67" fill="#38bdf8" font-size="10" font-family="monospace" text-anchor="middle">1. Run deposit(100)</text>

    <rect x="15" y="90" width="200" height="35" rx="5" fill="#1e293b" stroke="#f59e0b" />
    <text x="100" y="112" fill="#fbbf24" font-size="10" font-family="monospace" text-anchor="middle">2. Queued: withdraw(50)</text>

    <text x="15" y="150" fill="#c084fc" font-size="10" font-family="sans-serif">Serialized Execution Queue</text>
    <text x="15" y="170" fill="#cbd5e1" font-size="9" font-family="sans-serif">Only 1 task inside actor at a time</text>
  </g>

  <!-- Right: Protected State -->
  <g transform="translate(570, 75)">
    <rect width="235" height="195" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="235" height="30" rx="8" fill="#059669" />
    <text x="117" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">actor BankAccountState</text>

    <rect x="15" y="45" width="205" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="11" font-family="monospace">var balance = 500</text>
    <text x="25" y="90" fill="#cbd5e1" font-size="9" font-family="sans-serif">Protected Mutable State</text>

    <!-- Guarantee Box -->
    <rect x="15" y="115" width="205" height="65" rx="5" fill="#059669" fill-opacity="0.2" stroke="#10b981" />
    <text x="25" y="137" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Zero Data Races:</text>
    <text x="25" y="155" fill="#f8fafc" font-size="9" font-family="sans-serif">Compile-time isolation enforcement</text>
    <text x="25" y="170" fill="#cbd5e1" font-size="9" font-family="sans-serif">No manual Mutex locks required!</text>
  </g>

  <!-- Arrows -->
  <path d="M 235 110 L 290 110" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 235 230 L 290 230" stroke="#f59e0b" stroke-width="2" marker-end="url(#arrow)" />
  <path d="M 520 170 L 570 170" stroke="#10b981" stroke-width="2" marker-end="url(#arrow)" />
</svg>`
    },
    {
      type: 'heading',
      id: 'actors-and-mainactor-heading',
      text: {
        en: 'Actor Isolation, Data Race Freedom, and the @MainActor',
        bn: 'অ্যাক্টর আইসোলেশন, ডেটা রেস নিরাপত্তা এবং @MainActor'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Concurrent access to shared mutable data has traditionally been the leading source of intermittent production crashes. Swift eliminates data races through actors. An actor is a reference type that protects its internal mutable state by serializing access through an internal mailbox queue. External callers cannot modify an actor\'s state directly; they must asynchronously schedule access using "await". Furthermore, Swift provides global actors, spearheaded by "@MainActor". Marking view models or UI updates with @MainActor guarantees that all mutations and UI rendering logic execute exclusively on the application\'s main thread, eradicating background-thread UI corruption bugs forever.',
        bn: 'শেয়ার্ড মিউটেবল ডেটায় একাধিক থ্রেডের অসময়োচিত প্রবেশই এতদিন অ্যাপ ক্র্যাশের অন্যতম প্রধান কারণ ছিল। Swift অ্যাক্টরের মাধ্যমে ডেটা রেস চিরতরে নির্মূল করেছে। একটি অ্যাক্টর হলো এমন একটি রেফারেন্স টাইপ যা নিজস্ব মেইলবক্স কিউয়ের মাধ্যমে ডেটা পরিবর্তনকে ধারাবাহিকভাবে সাজিয়ে অভ্যন্তরীণ স্টেট রক্ষা করে। বাইরের কোনো কলার সরাসরি অ্যাক্টরের ডেটা বদলাতে পারে না; তাদের অবশ্যই "await" ব্যবহার করে লাইনে দাঁড়াতে হয়। তাছাড়া Swift গ্লোবাল অ্যাক্টরের অংশ হিসেবে "@MainActor" সরবরাহ করে। কোনো ভিউ মডেল বা ইউআই কোডে @MainActor লিখে দিলে নিশ্চিত হয় যে সমস্ত রেন্ডারিং ও ডেটা আপডেট কেবল মেইন থ্রেডেই চলবে, যা ব্যাকগ্রাউন্ড থ্রেডজনিত ইউআই ক্র্যাশ চিরতরে বন্ধ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Swift async/await cooperative suspension and actor mailbox serialized state protection.',
        bn: 'Swift async/await কো-অপারেটিভ সাসপেনশন এবং অ্যাক্টর মেইলবক্সের মাধ্যমে সুরক্ষিত স্টেটের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Swift Structured Concurrency, Async/Await Suspension, and Actor Isolation

export class SimulatedBankAccountActor {
  private balance = 500;
  private mailboxQueue: (() => Promise<void>)[] = [];
  private isProcessing = false;

  // External callers must use "await" to cross the actor boundary
  public async deposit(amount: number, threadId: string): Promise<number> {
    return new Promise((resolve) => {
      this.enqueueTask(async () => {
        console.log('[' + threadId + '] Entering Actor: Depositing ' + amount);
        // Simulate async I/O / verification
        await new Promise(r => setTimeout(r, 10));
        this.balance += amount;
        console.log('[' + threadId + '] Completed! New balance: ' + this.balance);
        resolve(this.balance);
      });
    });
  }

  public async withdraw(amount: number, threadId: string): Promise<number> {
    return new Promise((resolve, reject) => {
      this.enqueueTask(async () => {
        console.log('[' + threadId + '] Entering Actor: Attempting withdraw of ' + amount);
        await new Promise(r => setTimeout(r, 10));
        if (this.balance >= amount) {
          this.balance -= amount;
          console.log('[' + threadId + '] Withdraw successful! New balance: ' + this.balance);
          resolve(this.balance);
        } else {
          console.log('[' + threadId + '] Insufficient funds! Current: ' + this.balance);
          reject(new Error('Insufficient funds'));
        }
      });
    });
  }

  // Serialized execution engine of the actor mailbox
  private enqueueTask(task: () => Promise<void>): void {
    this.mailboxQueue.push(task);
    if (!this.isProcessing) {
      this.drainMailbox();
    }
  }

  private async drainMailbox(): Promise<void> {
    this.isProcessing = true;
    while (this.mailboxQueue.length > 0) {
      const nextTask = this.mailboxQueue.shift()!;
      await nextTask(); // Serialized execution: only 1 task inside actor at a time!
    }
    this.isProcessing = false;
  }
}

// Execution Demonstration
const bankAccount = new SimulatedBankAccountActor();

console.log('Initiating concurrent transactions from 2 distinct threads...');

// Thread 1: Deposit 100
bankAccount.deposit(100, 'Thread-Network').then(b => {
  console.log('Final Deposit Return Value:', b);
});

// Thread 2: Withdraw 50 concurrently
bankAccount.withdraw(50, 'Thread-UI').then(b => {
  console.log('Final Withdraw Return Value:', b);
});`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Structured Concurrency',
          def: {
            en: 'Hierarchical async paradigm where child tasks are bound to parent lifecycles, enabling deterministic cancellation.',
            bn: 'স্তরীভূত অ্যাসিঙ্ক পদ্ধতি যেখানে চাইল্ড টাস্কগুলো প্যারেন্টের সাথে যুক্ত থেকে সুনির্দিষ্ট ক্যান্সেলেশন নিশ্চিত করে।'
          }
        },
        {
          term: 'Async / Await',
          def: {
            en: 'Cooperative suspension syntax that yields the thread to other tasks during I/O without blocking OS threads.',
            bn: 'কো-অপারেটিভ সিনট্যাক্স যা আই/ও চলার সময় ওএস থ্রেড না আটকে অন্য কাজের জন্য থ্রেডকে মুক্ত করে দেয়।'
          }
        },
        {
          term: 'Actor Isolation',
          def: {
            en: 'Compile-time synchronization model ensuring an actor\'s mutable state is accessed exclusively by 1 task at a time.',
            bn: 'কম্পাইল-টাইম সিনক্রোনাইজেশন যা নিশ্চিত করে যে এক সময়ে কেবল ১ টি টাস্ক অ্যাক্টরের ডেটা পরিবর্তন করতে পারবে।'
          }
        },
        {
          term: '@MainActor',
          def: {
            en: 'Global actor synchronizing UI execution and state mutation strictly on the application\'s main thread.',
            bn: 'গ্লোবাল অ্যাক্টর যা ইউআই রেন্ডারিং এবং স্টেট পরিবর্তনকে কঠোরভাবে অ্যাপ্লিকেশনের মেইন থ্রেডে সীমাবদ্ধ রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'await-suspension-point-cooperative-ex1',
      kind: 'mcq',
      topic: 'async-await-suspension-point-behavior',
      question: {
        en: 'What occurs physically to the underlying operating system thread when execution reaches an "await" suspension point in Swift?',
        bn: 'Swift-এ কোড যখন একটি "await" সাসপেনশন পয়েন্টে পৌঁছায়, তখন অন্তর্নিহিত অপারেটিং সিস্টেম থ্রেডে শারীরিকভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'The current task suspends cooperatively, and the thread is instantly released back to the thread pool to execute other waiting tasks',
          bn: 'চলমান টাস্কটি সাময়িক বিরতি নেয় এবং থ্রেডটি তাৎক্ষণিকভাবে মুক্ত হয়ে থ্রেডপুলে থাকা অন্য কাজগুলো চালাতে শুরু করে'
        },
        {
          en: 'The thread locks the CPU core in an active spin-loop at 100 percent load',
          bn: 'থ্রেডটি সিপিইউ কোরকে ১০০ শতাংশ লোডে স্পিন-লুপে আটকে রাখে'
        },
        {
          en: 'The operating system kills the process immediately',
          bn: 'অপারেটিং সিস্টেম অবিলম্বে প্রসেসটি বন্ধ করে দেয়'
        },
        {
          en: 'await blocks the entire phone motherboard',
          bn: 'await ফোনের পুরো মাদারবোর্ড ব্লক করে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'await frees the thread to do other work while the async operation completes.',
        bn: 'অলস বসে থ্রেড নষ্ট না করে থ্রেডটিকে অন্য কাজের জন্য উন্মুক্ত করে দেওয়া হয়।'
      },
      explanation: {
        en: 'Unlike traditional blocking calls, await is a cooperative suspension point. The thread is recycled by the Swift runtime executor to maintain peak CPU utilization.',
        bn: 'ফলে থ্রেড অপচয় বন্ধ হয় এবং হাজার হাজার কাজ খুব কম সংখ্যক থ্রেড দিয়েই সম্পন্ন করা যায়।'
      }
    },
    {
      id: 'actor-data-race-elimination-ex2',
      kind: 'mcq',
      topic: 'actor-mailbox-data-race-protection',
      question: {
        en: 'How does a Swift "actor" mathematically eliminate data races when multiple concurrent tasks attempt to mutate its state?',
        bn: 'একাধিক সমান্তরাল টাস্ক যখন একটি Swift "actor"-এর স্টেট পরিবর্তন করতে আসে, তখন অ্যাক্টর কীভাবে গাণিতিকভাবে ডেটা রেস নির্মূল করে?'
      },
      options: [
        {
          en: 'By serializing all external method invocations through an internal mailbox queue, guaranteeing that only 1 task can access mutable state at a time',
          bn: 'অভ্যন্তরীণ মেইলবক্স কিউয়ের মাধ্যমে সমস্ত কলকে ধারাবাহিকভাবে সাজিয়ে, যা নিশ্চিত করে যে এক সময়ে কেবল ১ টি টাস্ক ডেটা পরিবর্তন করতে পারবে'
        },
        {
          en: 'By multiplying the server CPU speed by 2',
          bn: 'সার্ভারের সিপিইউ গতি ২ দ্বারা গুণ করে'
        },
        {
          en: 'By converting all numbers into text strings',
          bn: 'সমস্ত সংখ্যাকে টেক্সট স্ট্রিংয়ে রূপান্তর করে'
        },
        {
          en: 'Actors require manual lock management via pthread_mutex_t',
          bn: 'অ্যাক্টরের জন্য ম্যানুয়ালি pthread_mutex_t লক নিয়ন্ত্রণ করতে হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Actors serialize access via their internal mailbox queue.',
        bn: 'সবাইকে একসাথে ঢুকতে না দিয়ে লাইনে এক এক করে কাজ সম্পন্ন করা হয়।'
      },
      explanation: {
        en: 'Actors encapsulate mutable state behind a serialization barrier. The compiler enforces that calls from outside the actor must use await, preventing concurrent conflicting writes.',
        bn: 'বাইরে থেকে await ছাড়া ঢোকা নিষিদ্ধ হওয়ায় কোনো ডেটা রেস তৈরি হওয়া অসম্ভব।'
      }
    },
    {
      id: 'main-actor-ui-guarantee-ex3',
      kind: 'mcq',
      topic: 'main-actor-ui-thread-safety',
      question: {
        en: 'Why is decorating SwiftUI view models or UIKit controllers with "@MainActor" standard engineering practice?',
        bn: 'SwiftUI ভিউ মডেল বা UIKit কন্ট্রোলারে "@MainActor" যুক্ত করা কেন স্ট্যান্ডার্ড ইঞ্জিনিয়ারিং প্র্যাকটিস?'
      },
      options: [
        {
          en: 'It guarantees at compile time that all published state changes and UI rendering calls execute strictly on the main thread, preventing background UI corruption',
          bn: 'এটি কম্পাইল-টাইমেই নিশ্চয়তা দেয় যে সমস্ত স্টেট পরিবর্তন ও ইউআই রেন্ডারিং কঠোরভাবে মেইন থ্রেডেই ঘটবে, যা ব্যাকগ্রাউন্ডের ইউআই ত্রুটি রোধ করে'
        },
        {
          en: 'It doubles the brightness of the iPhone screen',
          bn: 'এটি আইফোন স্ক্রিনের উজ্জ্বলতা দ্বিগুণ করে দেয়'
        },
        {
          en: 'It allows the app to bypass Apple App Store review',
          bn: 'এটি অ্যাপটিকে অ্যাপল অ্যাপ স্টোর রিভিউ এড়িয়ে যাওয়ার সুযোগ দেয়'
        },
        {
          en: '@MainActor was deprecated in iOS 16',
          bn: 'iOS ১৬-তে @MainActor বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: '@MainActor binds execution strictly to the main thread for UI safety.',
        bn: 'ইউজার ইন্টারফেসের যাবতীয় কাজ যাতে মেইন থ্রেডেই চলে, তা নিশ্চিত করতেই এই নিয়ম।'
      },
      explanation: {
        en: 'Updating UI components from background threads causes unpredictable glitches and crashes. @MainActor enforces thread affinity at compile-time without manual DispatchQueue.main.async boilerplate.',
        bn: 'ফলে ম্যানুয়ালি ডিসপ্যাচ না লিখেও সম্পূর্ণ থ্রেড-সেফ ইউআই কোড পাওয়া যায়।'
      }
    },
    {
      id: 'taskgroup-structured-concurrency-ex4',
      kind: 'mcq',
      topic: 'taskgroup-parallel-child-orchestration',
      question: {
        en: 'What architectural power does "withTaskGroup" deliver when downloading 100 images concurrently in Swift?',
        bn: 'Swift-এ একসাথে ১০০ টি ছবি ডাউনলোড করার সময় "withTaskGroup" কোন স্থাপত্যিক ক্ষমতা প্রদান করে?'
      },
      options: [
        {
          en: 'It dynamically spawns parallel child tasks that execute concurrently while automatically scoping their lifecycle, canceling child tasks if the parent is aborted',
          bn: 'এটি সমান্তরাল চাইল্ড টাস্ক তৈরি করে একসাথে কাজ চালায় এবং তাদের জীবনচক্র নিয়ন্ত্রণ করে প্যারেন্ট টাস্ক বাতিল হলে চাইল্ড টাস্কগুলোও নিজে থেকে বন্ধ করে দেয়'
        },
        {
          en: 'It stores all downloaded images in the iPhone SIM card',
          bn: 'এটি সমস্ত ডাউনলোড করা ছবি আইফোনের সিম কার্ডে সংরক্ষণ করে'
        },
        {
          en: 'It converts the images into PDF documents',
          bn: 'এটি ছবিগুলোকে পিডিএফ নথিতে রূপান্তর করে'
        },
        {
          en: 'TaskGroup was replaced by C threads in Swift 6.0',
          bn: 'Swift ৬.০ সংস্করণে TaskGroup বাদ দিয়ে C থ্রেড আনা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'TaskGroups manage dynamic concurrent child tasks with automatic cancellation propagation.',
        bn: 'একসাথে অনেকগুলো কাজ চালানোর এবং প্যারেন্ট থামলে সব কাজ গুটিয়ে নেওয়ার সেরা মাধ্যম।'
      },
      explanation: {
        en: 'TaskGroups enable structured concurrency for dynamic workloads. Child tasks automatically inherit cancellation and priorities, preventing runaway orphan background tasks.',
        bn: 'এর মাধ্যমে কোনো কাজ হারিয়ে না গিয়ে সুশৃঙ্খলভাবে ফলাফল সংগ্রহ করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-asyncs-and-the-actor',
    title: {
      en: 'Swift Structured Concurrency & Actors Quiz',
      bn: 'Swift স্ট্রাকচার্ড কনকারেন্সি এবং অ্যাক্টরস কুইজ'
    },
    questions: [
      {
        id: 'quiz-sendable-protocol-concurrency-safety',
        kind: 'mcq',
        topic: 'sendable-protocol-thread-boundary-safety',
        question: {
          en: 'What compile-time guarantee does the "Sendable" protocol enforce in modern Swift concurrency (especially in Swift 6)?',
          bn: 'আধুনিক Swift কনকারেন্সিতে (বিশেষ করে Swift ৬-এ) "Sendable" প্রটোকল কোন কম্পাইল-টাইম নিরাপত্তা নিশ্চিত করে?'
        },
        options: [
          {
            en: 'It proves that a type can be safely transferred across concurrent thread and actor boundaries without triggering data races (e.g. value types, actors, or immutable classes)',
            bn: 'এটি প্রমাণ করে যে টাইপটি ডেটা রেসের ঝুঁকি ছাড়াই নিরাপদে থ্রেড বা অ্যাক্টর সীমানা অতিক্রম করতে পারে (যেমন ভ্যালু টাইপ, অ্যাক্টর বা অপরিবর্তনীয় ক্লাস)'
          },
          {
            en: 'It sends text messages to the developer when a crash happens',
            bn: 'অ্যাপ ক্র্যাশ হলে এটি ডেভেলপারকে মেসেজ পাঠায়'
          },
          {
            en: 'It converts the type into a 64-bit integer index',
            bn: 'এটি টাইপটিকে একটি ৬৪-বিট পূর্ণসংখ্যার ইনডেক্সে রূপান্তর করে'
          },
          {
            en: 'Sendable was deprecated in favor of GCD in 2023',
            bn: '২০২৩ সালে Sendable বাদ দিয়ে GCD ফিরিয়ে আনা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sendable types can be safely shared across concurrency boundaries.',
          bn: 'এক থ্রেড থেকে অন্য থ্রেডে ডেটা পাঠানোর সময় ডেটা রেস হবে না তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Swift 6 enforces strict concurrency checking. Non-Sendable types (like standard mutable classes) cannot cross actor or Task boundaries, eliminating data races at build time.',
          bn: 'ফলে অনিরাপদ মিউটেবল ক্লাস অন্য থ্রেডে পাঠিয়ে বাগ তৈরি করার সুযোগ বন্ধ হয়।'
        }
      },
      {
        id: 'quiz-nonisolated-actor-members',
        kind: 'mcq',
        topic: 'nonisolated-keyword-actor-optimization',
        question: {
          en: 'Why would an engineer mark an actor method or property with the "nonisolated" keyword?',
          bn: 'একজন ইঞ্জিনিয়ার কেন কোনো অ্যাক্টর মেথড বা প্রোপার্টিকে "nonisolated" কি-ওয়ার্ড দিয়ে চিহ্নিত করবেন?'
        },
        options: [
          {
            en: 'To allow synchronous access from outside the actor without requiring "await", permitted only for immutable properties or functions that do not touch mutable state',
            bn: 'অ্যাক্টরের বাইরে থেকে "await" ছাড়া সরাসরি সিঙ্ক্রোনাস কলের অনুমতি দিতে, যা কেবল অপরিবর্তনীয় প্রোপার্টি বা মিউটেবল স্টেট স্পর্শ না করা মেথডে প্রযোজ্য'
          },
          {
            en: 'To disable memory management for that actor',
            bn: 'সেই অ্যাক্টরের জন্য মেমোরি ম্যানেজমেন্ট নিষ্ক্রিয় করতে'
          },
          {
            en: 'To convert the actor into a 32-bit floating point number',
            bn: 'অ্যাক্টরটিকে একটি ৩২-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তর করতে'
          },
          {
            en: 'nonisolated methods can only run on Linux servers',
            bn: 'nonisolated মেথড কেবল লিনাক্স সার্ভারে চলতে পারে'
          }
        ],
        answer: 0,
        hint: {
          en: 'nonisolated opts out of actor synchronization for immutable/safe members.',
          bn: 'অপরিবর্তনীয় তথ্যের জন্য অযথা লাইনে না দাঁড়িয়ে সরাসরি পড়ার সুবিধা দেয়।'
        },
        explanation: {
          en: 'When a property on an actor is constant ("let"), it cannot cause data races. Marking it nonisolated enables external callers to read it synchronously without awaiting.',
          bn: 'কনস্ট্যান্ট ডেটায় কোনো রেসের ভয় না থাকায় দ্রুত সিঙ্ক্রোনাস পড়া সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-cooperative-task-cancellation',
        kind: 'mcq',
        topic: 'cooperative-task-cancellation-task-checkcancellation',
        question: {
          en: 'How does cooperative task cancellation operate in Swift (e.g. "Task.checkCancellation()")?',
          bn: 'Swift-এ কো-অপারেটিভ টাস্ক ক্যান্সেলেশন কীভাবে কাজ করে (যেমন "Task.checkCancellation()")?'
        },
        options: [
          {
            en: 'Cancellation does not forcefully kill threads; instead, running tasks must periodically check "Task.isCancelled" or call "Task.checkCancellation()" to abort cleanly',
            bn: 'ক্যান্সেলেশন থ্রেডকে জোরপূর্বক মেরে ফেলে না; বরং চলমান কাজগুলোকে নির্দিষ্ট সময় পর পর "Task.isCancelled" যাচাই করে বা "Task.checkCancellation()" ডেকে শান্তভাবে বন্ধ হতে হয়'
          },
          {
            en: 'It deletes all user files from the iPhone storage',
            bn: 'এটি আইফোন স্টোরেজ থেকে সমস্ত ফাইল মুছে ফেলে'
          },
          {
            en: 'It forces the phone to enter airplane mode',
            bn: 'এটি ফোনকে জোরপূর্বক অ্যারোপ্লেন মোডে নিয়ে যায়'
          },
          {
            en: 'Task cancellation is strictly forbidden in production iOS apps',
            bn: 'প্রোডাকশন iOS অ্যাপে টাস্ক বাতিল করা সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swift cancellation is cooperative, requiring tasks to check their cancellation status.',
          bn: 'জোর করে না থামিয়ে কাজকে নিজে থেকেই থেমে যাওয়ার সুযোগ দেওয়া হয়।'
        },
        explanation: {
          en: 'Forced thread termination leads to corrupted state and resource leaks. Cooperative cancellation ensures tasks can cleanly flush buffers and close connections before exiting.',
          bn: 'এর ফলে মাঝপথে ফাইল বা বাফার নষ্ট না হয়ে শান্তভাবে টাস্ক বন্ধ হয়।'
        }
      },
      {
        id: 'quiz-async-let-concurrency-idiom',
        kind: 'mcq',
        topic: 'async-let-concurrent-child-binding',
        question: {
          en: 'When should a Swift developer prefer "async let" over sequential "await" statements?',
          bn: 'একজন Swift ডেভেলপার কখন ধারাবাহিক "await"-এর বদলে "async let" সিনট্যাক্স ব্যবহার করবেন?'
        },
        options: [
          {
            en: 'When two or more independent asynchronous operations can execute concurrently in parallel, awaiting both results together at a later point in the code',
            bn: 'যখন দুই বা ততোধিক স্বাধীন অ্যাসিঙ্ক কাজ সমান্তরালে একসাথে চালানো সম্ভব হয় এবং পরবর্তীতে কোডের এক জায়গায় তাদের ফলাফলের জন্য অপেক্ষা করা যায়'
          },
          {
            en: 'When compiling code for watchOS devices only',
            bn: 'কেবল watchOS ডিভাইসের জন্য কোড কম্পাইল করার সময়'
          },
          {
            en: 'When the function accepts more than 10 parameters',
            bn: 'যখন ফাংশনটি ১০ টির বেশি প্যারামিটার গ্রহণ করে'
          },
          {
            en: 'async let was removed in Swift 5.7',
            bn: 'Swift ৫.৭ সংস্করণে async let বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'async let runs independent tasks in parallel.',
          bn: 'একটি শেষ হওয়ার জন্য অপেক্ষা না করে দুটি কাজ একসাথে শুরু করতে এটি লাগে।'
        },
      explanation: {
        en: 'Sequential await expressions execute one after another. In contrast, pairing "async let" declarations initiates multiple child operations simultaneously, cutting total network wait time in half.',
        bn: 'ধারাবাহিক await এক্সপ্রেশনগুলো একের পর এক কাজ সম্পন্ন করে। এর বিপরীতে "async let" একসাথে একাধিক চাইল্ড টাস্ক শুরু করে, যা অপেক্ষার মোট সময় প্রায় অর্ধেক কমিয়ে দেয়।'
      }
      }
    ]
  },
  nextLesson: {
    slug: 'generics-and-the-wrapper',
    title: {
      en: 'Generics, Associated Types & Property Wrappers',
      bn: 'জেনেরিকস, অ্যাসোসিয়েটেড টাইপস এবং প্রোপার্টি র‍্যাপারস'
    }
  }
};
