import type { Lesson } from '../../../lib/types';

export const DelegatesAndTheEventLesson: Lesson = {
  slug: 'delegates-and-the-event',
  tech: 'lang-csharp',
  title: {
    en: 'Delegates, Lambdas & Event Architecture',
    bn: 'ডেলিগেটস, ল্যাম্বডা এবং ইভেন্ট আর্কিটেকচার'
  },
  summary: {
    en: 'Master type-safe function pointers and event-driven architecture in C#. Understand System.MulticastDelegate internals, use generic Func and Action delegates, capture variables safely in closures, wire publishers and subscribers using the "event" keyword, and prevent memory leaks caused by lingering handlers.',
    bn: 'C#-এ টাইপ-সেফ ফাংশন পয়েন্টার এবং ইভেন্ট-চালিত আর্কিটেকচার আয়ত্ত করুন। System.MulticastDelegate-এর অভ্যন্তরীণ গঠন, জেনেরিক Func ও Action ডেলিগেটস, ক্লোজারে ভেরিয়েবল ক্যাপচারিং, "event" কিওয়ার্ড দিয়ে পাবলিশার-সাবস্ক্রাইবার যোগাযোগ এবং মেমোরি লিক প্রতিরোধ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'delegates-and-multicast-internals-heading',
      text: {
        en: 'Type-Safe Function Pointers and MulticastDelegate Internals',
        bn: 'টাইপ-সেফ ফাংশন পয়েন্টার এবং MulticastDelegate-এর অভ্যন্তরীণ গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In C# (the modern managed object-oriented language), delegates provide type-safe, object-oriented function pointers. Unlike raw function pointers in C++, a delegate encapsulates both a method pointer and an optional target object instance. Every delegate inherits from "System.MulticastDelegate". Under the hood, a multicast delegate maintains an invocation list containing an array of chained method delegates. The .NET (cross-platform runtime) BCL (base class library) provides generic delegates out of the box: "Action<T>" for methods returning void, and "Func<T, TResult>" for methods returning values (supporting up to 16 input parameters). Combining delegates with "+=" wires multiple callback subscribers into a single unified invocation pipeline.',
        bn: 'আধুনিক C# (ম্যানেজড অবজেক্ট-ওরিয়েন্টেড ভাষা) ডেলিগেটের মাধ্যমে টাইপ-সেফ এবং অবজেক্ট-ভিত্তিক ফাংশন পয়েন্টার সরবরাহ করে। C++ এর কাঁচা মেমোরি পয়েন্টারের বিপরীতে C# ডেলিগেট একটি মেথড পয়েন্টার এবং সংশ্লিষ্ট অবজেক্ট ইনস্ট্যান্স উভয়কেই ধারণ করে। প্রতিটি ডেলিগেট "System.MulticastDelegate" থেকে ইনহেরিট করে। পর্দার আড়ালে মাল্টিকাস্ট ডেলিগেট মেথডগুলোর একটি অভ্যন্তরীণ ইনভোকেশন লিস্ট বজায় রাখে। আধুনিক .NET (ক্রস-প্ল্যাটফর্ম রানটাইম) লাইব্রেরি বিল্ট-ইন জেনেরিক ডেলিগেট দেয়: কোনো রিটার্ন মান না থাকলে "Action<T>" এবং মান রিটার্ন করলে "Func<T, TResult>" (যা সর্বোচ্চ ১৬ টি ইনপুট প্যারামিটার সমর্থন করে)। "+=" অপারেটর দিয়ে একাধিক সাবস্ক্রাইবারকে একটি একক ইনভোকেশন পাইপলাইনে যুক্ত করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Multicast delegate and event architecture: Subscriber registration, invocation list chaining, and publisher broadcast execution.',
        bn: 'চিত্র ১: মাল্টিকাস্ট ডেলিগেট ও ইভেন্ট আর্কিটেকচার: সাবস্ক্রাইবার নিবন্ধন, ইনভোকেশন লিস্ট চেইনিং এবং পাবলিশারের ব্রডকাস্ট এক্সিকিউশন।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# MULTICAST DELEGATE &amp; EVENT INVOCATION PIPELINE</text>

  <!-- Step 1: Publisher Declaration -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Event Publisher</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">event Action&lt;Order&gt;</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">OnOrderPlaced;</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Encapsulated Gate</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Restricts External Invocation</text>
  </g>

  <!-- Step 2: Subscribers Chain -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Invocation Chaining</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">event += SendEmail;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">event += UpdateStock;</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Delegate.Combine</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Chained Invocation List</text>
  </g>

  <!-- Step 3: Event Trigger -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Safe Invocation</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">OnOrderPlaced?</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">.Invoke(order);</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Thread-Safe Null Check</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Sequential Execution</text>
  </g>

  <!-- Step 4: Memory Leak Guard -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Unsubscription</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">event -= Handler;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">IDisposable.Dispose</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Unbinds Target</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero Memory Leaks</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'event-keyword-and-memory-leaks-heading',
      text: {
        en: 'The "event" Keyword, Closures, and Lapsed Listener Leaks',
        bn: '"event" কিওয়ার্ড, ক্লোজার এবং ল্যাপসড লিসেনার মেমোরি লিক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While public delegates allow external classes to trigger or clear invocations directly, the "event" keyword establishes strict encapsulation. External callers can only subscribe ("+=") or unsubscribe ("-="); only the declaring class can invoke the event. When authoring lambda expressions, developers must be mindful of closures. If a lambda captures an outer local variable, the Roslyn compiler synthesizes a hidden display class on the managed heap. A severe architectural pitfall is the "Lapsed Listener Problem": event publishers hold strong references to subscriber instances. If a short-lived subscriber forgets to unsubscribe from a long-lived publisher, the subscriber cannot be garbage collected, causing silent memory leaks.',
        bn: 'সাধারণ পাবলিক ডেলিগেট বাইরের ক্লাসগুলোকে সরাসরি মেথড কল বা ইনভোকেশন তালিকা মুছে ফেলার সুযোগ দিলেও "event" কিওয়ার্ড কঠোর এনক্যাপসুলেশন নিশ্চিত করে। বাইরের কোনো কলার কেবল সাবস্ক্রাইব ("+=") বা আনসাবস্ক্রাইব ("-=") করতে পারে; কেবল পাবলিশার ক্লাস নিজে ইভেন্টটি ইনভোক করতে পারে। ল্যাম্বডা ফাংশন ব্যবহারের সময় ক্লোজার (closure) সম্পর্কে সচেতন থাকা জরুরি। কোনো ল্যাম্বডা বাইরের ভেরিয়েবল ক্যাপচার করলে Roslyn কম্পাইলার হিপ মেমোরিতে একটি ডিসপ্লে ক্লাস তৈরি করে। সফটওয়্যার আর্কিটেকচারের একটি মারাত্মক বিপদ হলো "ল্যাপসড লিসেনার সমস্যা": পাবলিশার প্রতিটি সাবস্ক্রাইবারের রেফারেন্স শক্তভাবে ধরে রাখে। স্বল্পস্থায়ী কোনো সাবস্ক্রাইবার যদি কাজ শেষে আনসাবস্ক্রাইব না করে, তবে গার্বেজ কালেক্টর তাকে মেমোরি থেকে সরাতে পারে না এবং নীরব মেমোরি লিক সৃষ্টি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# MulticastDelegate invocation chaining, event firing, and subscriber memory cleanup.',
        bn: 'C# মাল্টিকাস্ট ডেলিগেট ইনভোকেশন চেইনিং, ইভেন্ট ফায়ারিং এবং মেমোরি ক্লিনআপের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# MulticastDelegate and Event Subscription

export interface OrderEvent {
  orderId: number;
  amount: number;
}

export type OrderEventHandler = (event: OrderEvent) => void;

export class OrderProcessorSimulator {
  // Simulating internal MulticastDelegate invocation list
  private invocationList: OrderEventHandler[] = [];

  // Simulating "event += handler"
  public subscribe(handler: OrderEventHandler): void {
    this.invocationList.push(handler);
    console.log('[Event] Handler attached. Total subscribers:', this.invocationList.length);
  }

  // Simulating "event -= handler"
  public unsubscribe(handler: OrderEventHandler): void {
    const index = this.invocationList.indexOf(handler);
    if (index !== -1) {
      this.invocationList.splice(index, 1);
      console.log('[Event] Handler detached. Total subscribers:', this.invocationList.length);
    }
  }

  // Simulating "OnOrderPlaced?.Invoke(this, args)"
  public placeOrder(orderId: number, amount: number): void {
    const eventData: OrderEvent = { orderId, amount };
    console.log('[OrderProcessor] Dispatching order event to invocation list...');

    for (const handler of this.invocationList) {
      handler(eventData);
    }
  }

  public getSubscriberCount(): number {
    return this.invocationList.length;
  }
}

// Execution demonstration
const processor = new OrderProcessorSimulator();

// Subscriber 1: Billing Service
const billingService = (e: OrderEvent) => {
  console.log('[BillingService] Processing payment of $' + e.amount + ' for Order ' + e.orderId);
};

// Subscriber 2: Inventory Service
const inventoryService = (e: OrderEvent) => {
  console.log('[InventoryService] Reserving stock items for Order ' + e.orderId);
};

// Subscribing both handlers (+-)
processor.subscribe(billingService);
processor.subscribe(inventoryService);
console.log('Active Subscribers Registered:', processor.getSubscriberCount()); // 2

// Firing event
processor.placeOrder(101, 450);

// Unsubscribing to prevent memory leaks (-=)
processor.unsubscribe(billingService);
console.log('Remaining Subscribers After Unsubscribe:', processor.getSubscriberCount()); // 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Delegate',
          def: {
            en: 'Type-safe object encapsulating a callable method pointer and an optional target instance reference.',
            bn: 'টাইপ-সেফ অবজেক্ট যা একটি মেথড পয়েন্টার এবং সংশ্লিষ্ট ইনস্ট্যান্স রেফারেন্স ধারণ করে।'
          }
        },
        {
          term: 'MulticastDelegate',
          def: {
            en: 'Base class maintaining an ordered invocation list of delegates executed sequentially during invocation.',
            bn: 'মূল ক্লাস যা একাধিক ডেলিগেটের ইনভোকেশন তালিকা রাখে এবং ধারাবাহিকভাবে সবগুলো চালায়।'
          }
        },
        {
          term: 'Closure',
          def: {
            en: 'Compiler-generated construct that captures variables from an enclosing scope into a heap-allocated class.',
            bn: 'কম্পাইলার কাঠামো যা বাইরের স্কোপের ভেরিয়েবলকে হিপ মেমোরির ক্লাসে আবদ্ধ করে নেয়।'
          }
        },
        {
          term: 'Lapsed Listener',
          def: {
            en: 'Memory leak where an event publisher retains a strong reference to an unneeded subscriber, preventing garbage collection.',
            bn: 'মেমোরি লিক যেখানে ইভেন্ট পাবলিশার অপ্রয়োজনীয় সাবস্ক্রাইবারকে আটকে রেখে মেমোরি মুক্ত হতে দেয় না।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'delegate-vs-event-encapsulation-ex1',
      kind: 'mcq',
      topic: 'delegate-vs-event-keyword-protection',
      question: {
        en: 'What fundamental encapsulation protection does the C# "event" keyword enforce compared to exposing a raw public delegate field?',
        bn: 'পাবলিক ডেলিগেট ফিল্ডের তুলনায় C# "event" কিওয়ার্ড কোন মৌলিক এনক্যাপসুলেশন সুরক্ষা নিশ্চিত করে?'
      },
      options: [
        {
          en: 'External consumers can ONLY subscribe ("+=") and unsubscribe ("-="); they cannot clear the invocation list or trigger the event directly from the outside',
          bn: 'বাইরের ক্লাসগুলো কেবল সাবস্ক্রাইব ("+=") এবং আনসাবস্ক্রাইব ("-=") করতে পারে; তারা তালিকা মুছে ফেলতে বা বাইরে থেকে সরাসরি ইভেন্ট কল করতে পারে না'
        },
        {
          en: 'The event keyword encrypts the method code using SSL',
          bn: 'ইভেন্ট কিওয়ার্ড মেথডের কোডকে এসএসএল দিয়ে এনক্রিপ্ট করে'
        },
        {
          en: 'Events can only run on Sundays',
          bn: 'ইভেন্ট কেবল রবিবারে রান করতে পারে'
        },
        {
          en: 'Raw delegates are banned from compiling in modern .NET',
          bn: 'আধুনিক .NET-এ সাধারণ ডেলিগেট ব্যবহার নিষিদ্ধ করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The event keyword restricts outside code to only += and -=.',
        bn: '"event" বাইরের কলারকে শুধু যোগ ও বিয়োগ করার অনুমতি দেয়, সরাসরি ফায়ার করার অধিকার দেয় না।'
      },
      explanation: {
        en: 'Public delegate fields can be overwritten ("del = null") or invoked by external callers. The event keyword enforces proper publish/subscribe encapsulation.',
        bn: 'বাইরের কেউ যাতে ভুলবশত পুরো তালিকা মুছে না দেয় বা অনধিকার চর্চা না করে, সেজন্য "event" কিওয়ার্ড আবশ্যক।'
      }
    },
    {
      id: 'multicast-delegate-exception-handling-ex2',
      kind: 'mcq',
      topic: 'multicast-delegate-exception-short-circuit',
      question: {
        en: 'What occurs during the execution of a MulticastDelegate chain if the second subscriber in a list of 5 throws an unhandled exception?',
        bn: '৫ টি সাবস্ক্রাইবারের একটি মাল্টিকাস্ট ডেলিগেট চেইনে দ্বিতীয় মেথডটি যদি একটি এক্সেপশন ছুড়ে দেয়, তবে কী ঘটবে?'
      },
      options: [
        {
          en: 'The unhandled exception halts invocation immediately; the remaining subscribers (3, 4, and 5) are never invoked unless GetInvocationList() is used with individual try/catch blocks',
          bn: 'এক্সেপশনটি ইনভোকেশন অবিলম্বে বন্ধ করে দেয়; বাকি সাবস্ক্রাইবারগুলো (৩, ৪ এবং ৫) আর কখনোই রান হয় না যদি না GetInvocationList() দিয়ে আলাদা try/catch লেখা হয়'
        },
        {
          en: 'The operating system automatically fixes the exception code',
          bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে এররটি সংশোধন করে নেয়'
        },
        {
          en: 'All 5 subscribers run backwards in reverse order',
          bn: 'সমস্ত ৫ টি সাবস্ক্রাইবার পেছনের দিক থেকে উল্টো ক্রমে রান করে'
        },
        {
          en: 'The exception is quietly ignored and printed to a text file',
          bn: 'এক্সেপশনটি চুপচাপ অগ্রাহ্য করে টেক্সট ফাইলে লিখে রাখা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'An exception from one subscriber breaks the multicast chain for subsequent subscribers.',
        bn: 'মাঝপথে কেউ এরর দিলে পেছনের অন্য সাবস্ক্রাইবারগুলো আর ডাক পায় না।'
      },
      explanation: {
        en: 'Multicast invocation stops on the first unhandled exception. Robust event dispatching loops over delegate.GetInvocationList() and catches errors per subscriber.',
        bn: 'সবাইকে নিরাপদে এক্সিকিউট করতে চাইলে GetInvocationList() দিয়ে লুপ চালিয়ে হ্যান্ডেল করা নিয়ম।'
      }
    },
    {
      id: 'lapsed-listener-memory-leak-ex3',
      kind: 'mcq',
      topic: 'lapsed-listener-event-memory-leak',
      question: {
        en: 'How does failing to unsubscribe ("-=") an event handler in a short-lived WPF or Web component cause a serious memory leak?',
        bn: 'একটি স্বল্পস্থায়ী কম্পোনেন্টে কাজ শেষে ইভেন্ট আনসাবস্ক্রাইব ("-=") না করলে কীভাবে মারাত্মক মেমোরি লিক ঘটে?'
      },
      options: [
        {
          en: 'The long-lived event publisher maintains a strong reference to the subscriber object via its MulticastDelegate invocation list, preventing the Garbage Collector from freeing the subscriber',
          bn: 'দীর্ঘস্থায়ী ইভেন্ট পাবলিশার তার মাল্টিকাস্ট ডেলিগেট ইনভোকেশন তালিকার মাধ্যমে সাবস্ক্রাইবারকে শক্তভাবে রেফারেন্স ধরে রাখে, যার ফলে গার্বেজ কালেক্টর সাবস্ক্রাইবারকে মেমোরি থেকে মুছতে পারে না'
        },
        {
          en: 'It overheats the client computer monitor',
          bn: 'এটি ক্লায়েন্টের কম্পিউটার মনিটর অতিরিক্ত গরম করে ফেলে'
        },
        {
          en: 'The memory leak causes the internet connection to drop',
          bn: 'মেমোরি লিকের কারণে ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়ে যায়'
        },
        {
          en: 'Unsubscribing is handled automatically by the C# compiler in all cases',
          bn: 'সব ক্ষেত্রেই C# কম্পাইলার নিজে থেকে আনসাবস্ক্রাইব সম্পন্ন করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Publishers keep subscribers alive through strong delegate references.',
        bn: 'পাবলিশার যতদিন বেঁচে থাকবে, আনসাবস্ক্রাইব না করলে সাবস্ক্রাইবারও ততদিন মেমোরি আটকে রাখবে।'
      },
      explanation: {
        en: 'The delegate\'s target pointer holds the subscriber alive on the heap. When the UI or component is dismissed, forgetting "-=" prevents GC reclamation.',
        bn: 'কম্পোনেন্ট বন্ধ করার সময় Dispose মেথডে "-=" দিয়ে সংযোগ বিচ্ছিন্ন করাই সেরা সমাধান।'
      }
    },
    {
      id: 'func-vs-action-generics-ex4',
      kind: 'mcq',
      topic: 'func-vs-action-return-type-difference',
      question: {
        en: 'What is the structural difference between "Action<int, string>" and "Func<int, string>" in the .NET Base Class Library?',
        bn: '.NET লাইব্রেরিতে "Action<int, string>" এবং "Func<int, string>"-এর মধ্যে কাঠামোগত পার্থক্য কী?'
      },
      options: [
        {
          en: 'Action<int, string> accepts an int and a string and returns void; Func<int, string> accepts an int and returns a string (the final type argument is the return type)',
          bn: 'Action<int, string> একটি int এবং একটি string গ্রহণ করে void ফেরত দেয়; আর Func<int, string> একটি int গ্রহণ করে string রিটার্ন করে (সর্বশেষ টাইপটি হলো রিটার্ন টাইপ)'
        },
        {
          en: 'Action is only for asynchronous tasks; Func is only for synchronous loops',
          bn: 'Action কেবল অ্যাসিঙ্ক টাস্কের জন্য; Func কেবল সিনক্রোনাস লুপের জন্য'
        },
        {
          en: 'Func is limited to 1 parameter; Action supports 100 parameters',
          bn: 'Func কেবল ১ টি প্যারামিটারে সীমাবদ্ধ; Action ১০০ টি প্যারামিটার সমর্থন করে'
        },
        {
          en: 'There is zero difference between Action and Func',
          bn: 'Action এবং Func এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Action always returns void; Func\'s last type argument is its return type.',
        bn: 'Action সর্বদা void রিটার্ন করে, আর Func-এর শেষের আর্গুমেন্টটি তার রিটার্ন টাইপ নির্দেশ করে।'
      },
      explanation: {
        en: 'Action represents methods that do not return a value. Func represents methods that return a value, where the last generic parameter specifies the return type.',
        bn: 'এই দুটি জেনেরিক ডেলিগেট আধুনিক C#-এর প্রায় সমস্ত ফাংশনাল অপারেশনে ব্যবহৃত হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-delegates-and-the-event',
    title: {
      en: 'C# Delegates, Lambdas & Event Architecture Quiz',
      bn: 'C# ডেলিগেটস, ল্যাম্বডা এবং ইভেন্ট আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'quiz-closure-variable-hoisting-heap',
        kind: 'mcq',
        topic: 'closure-display-class-variable-hoisting',
        question: {
          en: 'What does the Roslyn compiler generate when a lambda expression captures a local variable from its enclosing method scope?',
          bn: 'যখন কোনো ল্যাম্বডা এক্সপ্রেশন তার বাইরের মেথড স্কোপ থেকে একটি লোকাল ভেরিয়েবল ক্যাপচার করে, তখন Roslyn কম্পাইলার কী তৈরি করে?'
        },
        options: [
          {
            en: 'A compiler-generated display class allocated on the managed heap; the captured variable is hoisted to become a field on this class so its lifetime outlives the enclosing method stack frame',
            bn: 'হিপ মেমোরিতে বরাদ্দ একটি কম্পাইলার ডিসপ্লে ক্লাস; ক্যাপচার করা ভেরিয়েবলটি সেই ক্লাসের ফিল্ডে রূপান্তরিত হয় যাতে মেথড শেষ হয়ে গেলেও ভেরিয়েবলটি বেঁচে থাকে'
          },
          {
            en: 'A temporary Windows batch script on disk',
            bn: 'ডিস্কে একটি অস্থায়ী উইন্ডোজ ব্যাচ স্ক্রিপ্ট'
          },
          {
            en: 'It deletes the variable from the computer CPU registers',
            bn: 'এটি কম্পিউটারের সিপিইউ রেজিস্টার থেকে ভেরিয়েবলটি মুছে ফেলে'
          },
          {
            en: 'Closures are completely forbidden in modern C#',
            bn: 'আধুনিক C# এ ক্লোজার ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Captured variables are hoisted to a compiler-generated heap display class.',
          bn: 'বাইরের ভেরিয়েবল সংরক্ষণ করতে কম্পাইলার একটি ক্লাসের অবজেক্ট তৈরি করে তাতে ভেরিয়েবলটি রেখে দেয়।'
        },
        explanation: {
          en: 'To allow the delegate to access local variables after the containing method returns, Roslyn hoists the variable into an allocated closure class instance on the heap.',
          bn: 'ফলে মেথডের এক্সিকিউশন স্ট্যাক মুছে গেলেও ল্যাম্বডা ফাংশনটি পরবর্তীতে নিরাপদভাবে মান অ্যাক্সেস করতে পারে।'
        }
      },
      {
        id: 'quiz-thread-safe-event-invocation-csharp',
        kind: 'mcq',
        topic: 'thread-safe-event-null-conditional-invoke',
        question: {
          en: 'Why is "OrderPlaced?.Invoke(this, args);" thread-safe compared to the legacy pattern "if (OrderPlaced != null) OrderPlaced(this, args);"?',
          bn: 'পুরনো প্যাটার্ন "if (OrderPlaced != null) OrderPlaced(this, args);"-এর তুলনায় "OrderPlaced?.Invoke(this, args);"-কেন থ্রেড-নিরাপদ?'
        },
        options: [
          {
            en: 'The "?." operator captures a local copy of the delegate reference before evaluating null; even if another thread unsubscribes the last handler concurrently, the local reference cannot become null',
            bn: '"?." অপারেটর নাল পরীক্ষার আগেই ডেলিগেট রেফারেন্সের একটি লোকাল কপি করে নেয়; অন্য কোনো থ্রেড একই মুহূর্তে শেষ হ্যান্ডলারটি আনসাবস্ক্রাইব করলেও লোকাল কপি নাল হতে পারে না'
          },
          {
            en: 'Because "?." locks the entire operating system kernel',
            bn: 'কারণ "?." পুরো অপারেটিং সিস্টেম কার্নেলকে লক করে দেয়'
          },
          {
            en: 'Invoke only executes on single-core processors',
            bn: 'Invoke কেবল সিঙ্গেল-কোর প্রসেসরে রান করে'
          },
          {
            en: 'There is zero difference in thread safety',
            bn: 'থ্রেড নিরাপত্তায় কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: '?. evaluates the expression once into a temporary reference, avoiding race conditions.',
          bn: '"?." একবারে মান পড়ে লোকাল রেফারেন্সে রাখে, ফলে অন্য থ্রেডের পরিবর্তনের সাথে রেস কন্ডিশন হয় না।'
        },
        explanation: {
          en: 'In the legacy pattern, another thread could unsubscribe between the null check and invocation, causing a NullReferenceException. The "?." operator evaluates the reference once atomically.',
          bn: 'এটাই আধুনিক C#-এ ইভেন্ট ফায়ার করার একমাত্র আদর্শ ও নিরাপদ পদ্ধতি।'
        }
      },
      {
        id: 'quiz-custom-event-accessors-add-remove',
        kind: 'mcq',
        topic: 'custom-event-accessors-add-remove',
        question: {
          en: 'When would an enterprise architect implement custom "add" and "remove" accessors on a C# event?',
          bn: 'কখন একজন এন্টারপ্রাইজ আর্কিটেক্ট C# ইভেন্টে কাস্টম "add" এবং "remove" অ্যাক্সেসর তৈরি করেন?'
        },
        options: [
          {
            en: 'When storing event handlers in a specialized data structure (such as an EventHandlerList in GUI controls) to minimize memory consumption when thousands of events are rarely subscribed',
            bn: 'যখন বিশেষ কোনো ডেটা স্ট্রাকচারে (যেমন GUI কন্ট্রোলে EventHandlerList) হ্যান্ডলার সংরক্ষণ করতে হয় যাতে হাজার হাজার অব্যবহৃত ইভেন্টের জন্য মেমোরি অপচয় না ঘটে'
          },
          {
            en: 'When restarting the database server',
            bn: 'ডেটাবেস সার্ভার রিস্টার্ট করার সময়'
          },
          {
            en: 'To prevent any subscriber from ever attaching',
            bn: 'যাতে কোনো সাবস্ক্রাইবার কখনোই যুক্ত হতে না পারে'
          },
          {
            en: 'Custom accessors are strictly prohibited in C# 10',
            bn: 'C# ১০ সংস্করণে কাস্টম অ্যাক্সেসর তৈরি নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Custom accessors control how handlers are stored, saving memory in control hierarchies.',
          bn: 'হ্যান্ডলারগুলো কীভাবে মেমোরিতে থাকবে তা কাস্টমাইজ করে প্রচুর র্যাম সাশ্রয় করা যায়।'
        },
        explanation: {
          en: 'Custom event accessors (add / remove) allow components like Windows Forms or WPF controls with hundreds of events to use sparse storage tables rather than allocating delegate fields for every event.',
          bn: 'হাজার হাজার বাটন বা কন্ট্রোলের মেমোরি কমাতে উইন্ডোজ সিস্টেমে এটি ব্যাপকভাবে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-weak-event-pattern-solution',
        kind: 'mcq',
        topic: 'weak-event-pattern-memory-leak-mitigation',
        question: {
          en: 'What architectural pattern solves the Lapsed Listener problem when subscribers cannot reliably unsubscribe from a publisher?',
          bn: 'যখন সাবস্ক্রাইবাররা নির্ভরযোগ্যভাবে পাবলিশার থেকে আনসাবস্ক্রাইব করতে পারে না, তখন ল্যাপসড লিসেনার মেমোরি লিক সমস্যা সমাধানে কোন স্থাপত্যিক প্যাটার্ন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'The Weak Event Pattern (using WeakReference<T>), allowing the Garbage Collector to collect the subscriber even while the publisher continues running',
            bn: 'উইক ইভেন্ট প্যাটার্ন (WeakReference<T> ব্যবহার করে), যা পাবলিশার চলতে থাকা অবস্থাতেও গার্বেজ কালেক্টরকে সাবস্ক্রাইবার অবজেক্টটি মুছে ফেলার সুযোগ দেয়'
          },
          {
            en: 'Rebooting the server machine every 60 seconds',
            bn: 'প্রতি ৬০ সেকেন্ড পর পর সার্ভার রিবুট করে'
          },
          {
            en: 'Converting all classes into structs',
            bn: 'সমস্ত ক্লাসকে স্ট্রাক্টে রূপান্তর করে'
          },
          {
            en: 'Disabling the Garbage Collector permanently',
            bn: 'গার্বেজ কালেক্টর চিরতরে বন্ধ করে দিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Weak references do not prevent the Garbage Collector from freeing objects.',
          bn: 'দুর্বল রেফারেন্স (WeakReference) অবজেক্টকে মেমোরিতে জোর করে আটকে রাখে না।'
        },
        explanation: {
          en: 'The Weak Event Pattern maintains WeakReferences to listeners, ensuring the publisher does not artificially prolong the subscriber\'s lifetime.',
          bn: 'এর ফলে আনসাবস্ক্রাইব করতে ভুলে গেলেও মেমোরি লিকের ভয় থাকে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'iterators-and-the-yield',
    title: {
      en: 'Iterators, State Machines & "yield return"',
      bn: 'ইটারেটরস, স্টেট মেশিন এবং "yield return"'
    }
  }
};
