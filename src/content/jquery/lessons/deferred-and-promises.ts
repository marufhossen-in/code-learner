import type { Lesson } from '../../../lib/types';

export const DeferredAndPromisesLesson: Lesson = {
  slug: 'deferred-and-promises',
  tech: 'jquery',
  title: {
    en: 'jQuery Deferred, Promises & Pipeline Control',
    bn: 'জেকোয়েরি ডেফার্ড, প্রমিজ ও পাইপলাইন কন্ট্রোল'
  },
  summary: {
    en: 'Before ECMAScript standardized native promises, deeply nested callback functions created unmaintainable pyramids of doom. jQuery solved this asynchronous entanglement by introducing the $.Deferred object. A Deferred maintains one of three states: pending, resolved, or rejected, enforcing permanent state immutability once settled. Developers separate concerns by returning read-only promise objects via deferred.promise(), preventing client consumers from triggering external state mutations. Furthermore, jQuery coordinates concurrent background tasks using the $.when aggregator. For instance, launching 3 parallel asynchronous tasks and tracking them until all 3 complete allows running dependent logic reliably. This lesson explores the Deferred state machine, promise encapsulation, multi-task aggregation, and historical alignment with modern Promises/A+ specifications.',
    bn: 'জাভাস্ক্রিপ্টে নেটিভ প্রমিজ স্ট্যান্ডার্ডাইজ হওয়ার পূর্বে বহু স্তরের নেস্টেড কলব্যাক কোডকে অত্যন্ত জটিল ও বিশৃঙ্খল করে তুলত। জেকোয়েরি তার $.Deferred অবজেক্টের মাধ্যমে এই সমস্যার এক যুগান্তকারী সমাধান নিয়ে আসে। একটি ডেফার্ড অবজেক্ট তিনটি অবস্থার যেকোনো একটিতে থাকে: পেন্ডিং, রিজলভড অথবা রিজেক্টেড, এবং একবার স্টেট নির্ধারিত হয়ে গেলে তা আর বদলানো যায় না। ডেফার্ডের resolve ও reject নিয়ন্ত্রণের ক্ষমতা লুকিয়ে রেখে গ্রাহক কোডকে কেবল একটি রিড-অনলি প্রমিজ (.promise()) ফেরত দেওয়া হয়। এছাড়া একাধিক সমান্তরাল টাস্ক একসাথে পরিচালনা করতে $.when ব্যবহার করা হয়। যেমন ৩টি সমান্তরাল অ্যাসিনক্রোনাস কাজ শুরু করে ৩টি কাজের সফল সমাপ্তি নিশ্চিত হলে পরবর্তী কোড নির্ভুলভাবে চালানো যায়। এই পাঠে ডেফার্ড স্টেট মেশিন, প্রমিজ ক্যাপসুলারাইজেশন, মাল্টি-টাস্ক কোঅর্ডিনেশন এবং আধুনিক প্রমিজের সাথে এর ঐতিহাসিক সম্পর্ক বিস্তারিত আলোচিত হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Deferred State Machine',
        bn: 'মূল ধারণা: ডেফার্ড স্টেট মেশিন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When your code executes an asynchronous task, a `Deferred` object serves as an observable state machine. It begins in the pending state and transitions permanently to either resolved or rejected, immediately notifying registered callbacks.',
        bn: 'আপনার কোড যখন কোনো অ্যাসিনক্রোনাস কাজ চালায়, তখন একটি `Deferred` অবজেক্ট একটি পর্যবেক্ষণযোগ্য স্টেট মেশিন হিসেবে কাজ করে। এটি শুরুতে পেন্ডিং অবস্থায় থাকে এবং কাজ শেষে স্থায়ীভাবে রিজলভড বা রিজেক্টেড অবস্থায় গিয়ে অপেক্ষমাণ সব কলব্যাককে সতর্ক করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The $.Deferred Factory',
          def: {
            en: 'Creates a manageable deferred object equipped with methods to signal resolution (.resolve) or failure (.reject)',
            bn: 'এমন একটি কন্ট্রোলার অবজেক্ট তৈরি করে যার ভেতর থেকে কাজের সাফল্য (.resolve) বা ব্যর্থতা (.reject) ঘোষণা করা যায়'
          }
        },
        {
          term: 'The .promise() Mask',
          def: {
            en: 'A read-only view of a Deferred exposing observation hooks (.done, .fail, .then) while sealing resolution control methods',
            bn: 'ডেফার্ডের একটি সুরক্ষিত রিড-অনলি রূপ যা কেবল ফলাফল শোনার অনুমতি দেয় কিন্তু বাইরের কাউকে স্টেট পরিবর্তন করতে দেয় না'
          }
        },
        {
          term: '$.when(p1, p2, ...)',
          def: {
            en: 'Coordinates multiple parallel promises, resolving only after all tasks succeed, or rejecting if any single task fails',
            bn: 'একাধিক সমান্তরাল প্রমিজ একসাথে পরিচালনা করে, যার সবকটি সফল হলে চূড়ান্ত সমাধান দেয় এবং যেকোনো একটি ব্যর্থ হলে রিজেক্ট করে'
          }
        },
        {
          term: 'Progress Notifications (.notify())',
          def: {
            en: 'Emits interim progress updates to .progress() listeners before the deferred officially settles into its final state',
            bn: 'কাজটি চলাকালীন অবস্থায় চূড়ান্ত সমাপ্তির আগেই অগ্রগতির তথ্য জানাতে .progress() লিসেনারে অন্তর্বর্তী আপডেট পাঠানো'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'deferred-states-table',
      text: {
        en: 'Deferred Lifecycle States & Methods',
        bn: 'ডেফার্ড লাইফসাইকেলের অবস্থা ও সংশ্লিষ্ট মেথড'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'The Three States of a jQuery Deferred Object and Associated APIs',
        bn: 'জেকোয়েরি ডেফার্ড অবজেক্টের তিনটি অবস্থা এবং সংশ্লিষ্ট এপিআই মেথড'
      },
      head: [
        { en: 'State Name', bn: 'অবস্থার নাম' },
        { en: 'Trigger Method', bn: 'চালানোর মেথড' },
        { en: 'Consumer Listener', bn: 'ফলাফল শোনার মেথড' }
      ],
      rows: [
        [
          { en: 'pending', bn: 'pending' },
          { en: 'deferred.notify(progressData)', bn: 'deferred.notify(progressData)' },
          { en: 'deferred.progress(callback)', bn: 'deferred.progress(callback)' }
        ],
        [
          { en: 'resolved', bn: 'resolved' },
          { en: 'deferred.resolve(resultData)', bn: 'deferred.resolve(resultData)' },
          { en: 'deferred.done(callback)', bn: 'deferred.done(callback)' }
        ],
        [
          { en: 'rejected', bn: 'rejected' },
          { en: 'deferred.reject(errorObject)', bn: 'deferred.reject(errorObject)' },
          { en: 'deferred.fail(callback)', bn: 'deferred.fail(callback)' }
        ],
        [
          { en: 'settled (either)', bn: 'settled (উভয়)' },
          { en: 'resolved or rejected', bn: 'সফল বা ব্যর্থ উভয় ক্ষেত্রে' },
          { en: 'deferred.always(callback)', bn: 'deferred.always(callback)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Coordinating 3 Asynchronous Tasks with $.when()',
        bn: 'চালনাযোগ্য সিমুলেশন: $.when() দিয়ে ৩টি সমান্তরাল অ্যাসিনক্রোনাস কাজ সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates launching 3 parallel asynchronous operations and tracking each task through completion, verifying that all 3 tasks settle successfully:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ৩টি সমান্তরাল অ্যাসিনক্রোনাস অপারেশন শুরু করে প্রতিটি টাস্ক ট্র্যাক করে এবং ৩টি কাজই সফলভাবে সম্পন্ন হয়েছে কিনা তা নিশ্চিত করে:'
      }
    },
    {
      type: 'code',
      id: 'jquery-deferred-sim',
      lang: 'javascript',
      code: `// jQuery $.when() Multi-Task Coordination Simulation
const asyncTasks = 3; // 3 parallel asynchronous operations
let resolvedTasks = 0;

// Simulating parallel resolution of tasks
resolvedTasks += 1; // Task 1 finishes and resolves
resolvedTasks += 1; // Task 2 finishes and resolves
resolvedTasks += 1; // Task 3 finishes and resolves

const isSettled = (resolvedTasks === asyncTasks);

console.log('Total parallel asynchronous operations initiated:', asyncTasks);
// -> Total parallel asynchronous operations initiated: 3

console.log('Total background operations successfully settled:', resolvedTasks);
// -> Total background operations successfully settled: 3

console.log('Did all tasks resolve to trigger the combined handler:', isSettled);
// -> Did all tasks resolve to trigger the combined handler: true`,
      caption: {
        en: 'Figure 1: Launching 3 asynchronous tasks requires tracking 3 completions before executing the combined success handler',
        bn: 'চিত্র ১: ৩টি সমান্তরাল অ্যাসিনক্রোনাস কাজ পরিচালনা করে ৩টি কাজের সফল সমাপ্তি নিশ্চিত করার পর মূল হ্যান্ডলার রান হয়'
      }
    },
    {
      type: 'heading',
      id: 'promise-encapsulation-guide',
      text: {
        en: 'Encapsulation: Protecting Internal Deferred State',
        bn: 'এনক্যাপসুলেশন: অভ্যন্তরীণ ডেফার্ড স্টেট সুরক্ষা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When authoring asynchronous services, functions should never return the raw Deferred object. If a consumer receives the Deferred, rogue code could resolve or reject it prematurely.',
        bn: 'অ্যাসিনক্রোনাস সার্ভিস তৈরি করার সময় ফাংশন থেকে কখনোই কাঁচা ডেফার্ড অবজেক্ট সরাসরি ফেরত দেওয়া উচিত নয়। কারণ কোনো ভোক্তা কোড ভুলবশত কাজ শেষ হওয়ার আগেই resolve বা reject কল করে স্টেট নষ্ট করে দিতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Read-Only Promise Principle',
          def: {
            en: 'Always return deferred.promise() so external callers can register callbacks but cannot manipulate the underlying state',
            bn: 'বাইরের কোড যাতে শুধু কলব্যাক জুড়তে পারে কিন্তু স্টেট পরিবর্তন না করতে পারে, সেজন্য সর্বদা deferred.promise() ফেরত দেওয়া'
          }
        },
        {
          term: 'Chaining with .then()',
          def: {
            en: 'Transforms results and pipes asynchronous stages sequentially, returning a new promise for pipeline flows',
            bn: 'ফলাফল রূপান্তর করে একের পর এক অ্যাসিনক্রোনাস ধাপ যুক্ত করার জন্য নতুন প্রমিজ তৈরি করে পাইপলাইন সাজানো'
          }
        },
        {
          term: 'Promises/A+ Compliance',
          def: {
            en: 'The universal JavaScript standard that modernizes promise resolution, error propagation, and interoperability across frameworks',
            bn: 'সার্বজনীন জাভাস্ক্রিপ্ট স্ট্যান্ডার্ড যা প্রমিজের ভুল ধরা ও বিভিন্ন ফ্রেমওয়ার্কের মধ্যে পারস্পরিক সামঞ্জস্য নিশ্চিত করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-task-count-calc-ex',
      kind: 'mcq',
      topic: 'Count of parallel tasks in $.when simulation',
      question: {
        en: 'In our asynchronous simulation, how many concurrent operations were tracked to complete resolution?',
        bn: 'আমাদের অ্যাসিনক্রোনাস সিমুলেশনে পূর্ণ সমাপ্তির জন্য কয়টি সমান্তরাল কাজ ট্র্যাক করা হয়েছিল?'
      },
      options: [
        {
          en: '3 asynchronous tasks',
          bn: '৩টি অ্যাসিনক্রোনাস কাজ'
        },
        {
          en: '1 task',
          bn: '১টি কাজ'
        },
        {
          en: '6 tasks',
          bn: '৬টি কাজ'
        },
        {
          en: '0 tasks',
          bn: '০টি কাজ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Our simulation launched 3 distinct parallel tasks.',
        bn: 'আমাদের সিমুলেশনে ৩টি আলাদা সমান্তরাল কাজ শুরু হয়েছিল।'
      },
      explanation: {
        en: 'The simulation tracks 3 parallel asynchronous operations before verifying that all 3 reached settled resolution.',
        bn: 'সিমুলেশনটি ৩টি সমান্তরাল কাজ ট্র্যাক করে এবং নিশ্চিত করে যে ৩টি কাজই সফলভাবে সম্পন্ন হয়েছে।'
      }
    },
    {
      id: 'jquery-promise-mask-ex',
      kind: 'mcq',
      topic: 'Why return deferred.promise() instead of deferred',
      question: {
        en: 'Why is it considered a security and architectural best practice to return deferred.promise() rather than the raw Deferred instance?',
        bn: 'সরাসরি কাঁচা ডেফার্ডের বদলে deferred.promise() ফেরত দেওয়া কেন একটি উত্তম আর্কিটেকচারাল অনুশীলন?'
      },
      options: [
        {
          en: 'It prevents external consumer code from prematurely calling .resolve() or .reject() to maliciously or accidentally manipulate state',
          bn: 'এটি বাইরের কোনো কোড যাতে ভুল করে বা ইচ্ছেমতো .resolve() বা .reject() কল করে স্টেট নষ্ট করতে না পারে তা সুরক্ষিত করে'
        },
        {
          en: 'It compresses the file size by fifty percent',
          bn: 'এটি ফাইলের আকার অর্ধেক কমায়'
        },
        {
          en: 'Promises run on a separate CPU core',
          bn: 'প্রমিজ আলাদা সিপিইউ কোরে চলে'
        },
        {
          en: 'It converts the function into synchronous blocking code',
          bn: 'এটি ফাংশনকে সিঙ্ক্রোনাস ব্লকিং কোড বানায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hides state-mutating methods like resolve and reject.',
        bn: 'resolve ও reject-এর মতো স্টেট পরিবর্তনকারী মেথডগুলো আড়াল রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'A promise exposes only observer methods (.done, .fail, .then), keeping state transitions strictly under the creator control.',
        bn: 'একটি প্রমিজ শুধুমাত্র ফলাফল পর্যবেক্ষণের সুযোগ দেয়, ফলে বাইরের কেউ অনাকাঙ্ক্ষিতভাবে স্টেট পরিবর্তন করতে পারে না।'
      }
    },
    {
      id: 'jquery-when-failure-ex',
      kind: 'mcq',
      topic: 'Behavior of $.when() when one task fails',
      question: {
        en: 'What happens in $.when(taskA, taskB, taskC) if taskB fails and invokes .reject()?',
        bn: '$.when(taskA, taskB, taskC)-তে কাজ চলাকালীন taskB ব্যর্থ হয়ে .reject() কল করলে কী ঘটবে?'
      },
      options: [
        {
          en: 'The master promise immediately rejects and fires attached .fail() handlers, aborting the aggregate success callback',
          bn: 'মূল মাস্টার প্রমিজটি সাথে সাথে রিজেক্ট হয়ে যায় এবং .fail() হ্যান্ডলার চালু করে সফলতার কলব্যাক বাতিল করে'
        },
        {
          en: 'The browser ignores the failure and continues as if nothing happened',
          bn: 'ব্রাউজার ব্যর্থতা উপেক্ষা করে স্বাভাবিক থাকে'
        },
        {
          en: 'jQuery retries taskB ten times automatically',
          bn: 'জেকোয়েরি নিজে নিজেই দশবার চেষ্টা করে'
        },
        {
          en: 'The web page closes immediately',
          bn: 'ওয়েব পেজ সাথে সাথে বন্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fails fast as soon as any single promise rejects.',
        bn: 'যেকোনো একটি প্রমিজ ব্যর্থ হলেই পুরো মাস্টার প্রমিজ রিজেক্ট হওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Like Promise.all(), $.when() follows fail-fast semantics: the rejection of any single promise causes the composite promise to reject.',
        bn: 'Promise.all()-এর মতো $.when()-ও ফেইল-ফাস্ট নীতি মেনে চলে, যেকোনো একটি কাজ ব্যর্থ হলেই পুরো চেইন ব্যর্থ হিসেবে গণ্য হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-deferred-and-promises',
    title: {
      en: 'jQuery Deferred & Promises Quiz',
      bn: 'জেকোয়েরি ডেফার্ড ও প্রমিজ কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-deferred-immutability',
        kind: 'mcq',
        topic: 'Immutability of settled Deferred states',
        question: {
          en: 'Once a jQuery Deferred object has resolved by executing deferred.resolve(), what happens if code subsequently calls deferred.reject()?',
          bn: 'একটি জেকোয়েরি ডেফার্ড অবজেক্ট একবার deferred.resolve() দিয়ে সম্পন্ন হওয়ার পর কোডে পুনরায় deferred.reject() কল করলে কী ঘটবে?'
        },
        options: [
          {
            en: 'The subsequent reject call is completely ignored because settled states in Deferred are permanent and immutable',
            bn: 'পরবর্তী রিজেক্ট কলটি সম্পূর্ণভাবে উপেক্ষা করা হবে কারণ ডেফার্ডের নিষ্পত্তি হওয়া অবস্থা চিরতরে অপরিবর্তনীয় থাকে'
          },
          {
            en: 'The Deferred switches from resolved to rejected',
            bn: 'ডেফার্ডটি রিজলভড থেকে রিজেক্টেডে পাল্টে যায়'
          },
          {
            en: 'The browser throws a fatal crash error',
            bn: 'ব্রাউজার ক্র্যাশ করে'
          },
          {
            en: 'The entire page reloads from scratch',
            bn: 'পুরো পেজ শুরু থেকে রিলোড হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'State transitions are once-and-for-all.',
          bn: 'একবার স্টেট নির্ধারিত হলে তা আর বদলানো যায় না।'
        },
        explanation: {
          en: 'Deferred objects adhere to finite state machine rules: once settled (resolved or rejected), state transitions become frozen.',
          bn: 'ডেফার্ড অবজেক্ট স্টেট মেশিন নিয়ম মেনে চলে: একবার নিষ্পত্তি হয়ে গেলে আর কখনোই তার অবস্থা পরিবর্তন করা যায় না।'
        }
      },
      {
        id: 'q-jquery-always-callback',
        kind: 'mcq',
        topic: 'When .always() callbacks execute',
        question: {
          en: 'When does a callback registered via deferred.always(callback) execute?',
          bn: 'deferred.always(callback)-এর মাধ্যমে নিবন্ধিত কলব্যাক কখন কার্যকর হয়?'
        },
        options: [
          {
            en: 'Whenever the Deferred settles, regardless of whether it was resolved successfully or rejected with an error',
            bn: 'ডেফার্ডের নিষ্পত্তি হওয়ার সাথে সাথেই চলে, তা সফলভাবে রিজলভড হোক কিংবা ব্যর্থ হয়ে রিজেক্টেড হোক'
          },
          {
            en: 'Only when the Deferred is resolved',
            bn: 'কেবলমাত্র সফলভাবে শেষ হলে'
          },
          {
            en: 'Only when an error occurs',
            bn: 'কেবলমাত্র কোনো ভুল হলে'
          },
          {
            en: 'Never unless the user clicks a button',
            bn: 'বাটনে ক্লিক না করা পর্যন্ত কখনোই চলে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Analogous to .finally() in modern native promises.',
          bn: 'আধুনিক প্রমিজের .finally()-এর মতো সাফল্য বা ব্যর্থতা নির্বিশেষে চলার কথা ভাবুন।'
        },
        explanation: {
          en: '.always() provides a cleanup guarantee executing upon any resolution or rejection, identical to modern Promise.finally().',
          bn: '.always() কাজ সফল বা ব্যর্থ যাই হোক না কেন শেষ পর্যায়ে ক্লিনআপ বা সমাপ্তির কোড নিশ্চিতভাবে চালায়।'
        }
      },
      {
        id: 'q-jquery-notify-progress',
        kind: 'mcq',
        topic: 'Purpose of deferred.notify()',
        question: {
          en: 'What unique capability does deferred.notify(data) provide that was historically missing from early ES6 native Promises?',
          bn: 'deferred.notify(data) এমন কী অনন্য সুবিধা প্রদান করে যা প্রারম্ভিক ইএস৬ নেটিভ প্রমিজে অনুপস্থিত ছিল?'
        },
        options: [
          {
            en: 'It enables streaming incremental progress notifications (like file upload percentage) to active .progress() listeners before final resolution',
            bn: 'এটি চূড়ান্ত সমাপ্তির আগেই চলমান কাজের অগ্রগতি (যেমন ফাইল আপলোডের শতকরা হার) শ্রোতাদের কাছে ধারাবাহিকভাবে পাঠাতে পারে'
          },
          {
            en: 'It sends text messages to mobile phones',
            bn: 'এটি মোবাইলে মেসেজ পাঠায়'
          },
          {
            en: 'It turns on the user webcam',
            bn: 'এটি ওয়েবক্যাম চালু করে'
          },
          {
            en: 'It converts JavaScript code into Python',
            bn: 'এটি জাভাস্ক্রিপ্টকে পাইথনে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Broadcasts progress events before final completion.',
          bn: 'কাজ চলাকালীন অন্তর্বর্তী অগ্রগতির নোটিফিকেশন পাঠানোর কথা ভাবুন।'
        },
        explanation: {
          en: '.notify() allows producers to broadcast intermediate events (e.g. progress percentage) prior to final settlement.',
          bn: '.notify() মেথড দিয়ে ফাইল ডাউনলোড বা আপলোডের শতকরা হিসাবের মতো অন্তর্বর্তী ডাটা লাইভ পাঠানো সম্ভব হয়।'
        }
      },
      {
        id: 'q-jquery-ajax-promise-interop',
        kind: 'mcq',
        topic: 'Compatibility of $.ajax return object with Promises',
        question: {
          en: 'Why could developers chain .done() and .then() directly on the return value of $.ajax()?',
          bn: 'ডেভেলপাররা কেন সরাসরি $.ajax()-এর রিটার্ন মানের ওপর .done() এবং .then() চেইন করতে পারতেন?'
        },
        options: [
          {
            en: 'Because $.ajax() returns a jqXHR object, which implements the complete jQuery Deferred Promise interface alongside XMLHttpRequest attributes',
            bn: 'কারণ $.ajax() একটি jqXHR অবজেক্ট ফেরত দেয়, যা XMLHttpRequest-এর পাশাপাশি পূর্ণাঙ্গ জেকোয়েরি ডেফার্ড প্রমিজ ইন্টারফেস বাস্তবায়ন করে'
          },
          {
            en: 'Because all JavaScript functions support .done() automatically',
            bn: 'কারণ সব জাভাস্ক্রিপ্ট ফাংশনে নিজে থেকেই .done() থাকে'
          },
          {
            en: 'Because the browser converts all strings into promises',
            bn: 'কারণ ব্রাউজার সব স্ট্রিংকে প্রমিজে রূপান্তর করে'
          },
          {
            en: 'It was a syntax glitch in older Chrome browsers',
            bn: 'এটি পুরোনো ক্রোমের একটি বাগ ছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'jqXHR implements the jQuery Promise interface.',
          bn: 'jqXHR অবজেক্টটি একই সাথে এক্সএমএলএইচটিটিপি এবং প্রমিজ উভয় হিসেবেই কাজ করে।'
        },
        explanation: {
          en: 'The jqXHR wrapper marries XMLHttpRequest with the Promise interface, allowing fluent chaining via .done(), .fail(), and .then().',
          bn: 'jqXHR অবজেক্টটি ডবল ক্ষমতা রাখে: এটি ব্রাউজারের নেটওয়ার্ক নোডের সাথে প্রমিজ ইন্টারফেস জুড়ে দিয়ে চেইনিংয়ের সুযোগ দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-great-migration',
    tech: 'jquery',
    title: {
      en: 'The Great Migration: jQuery to Vanilla JS & Modern Frameworks',
      bn: 'দ্য গ্রেট মাইগ্রেশন: জেকোয়েরি থেকে ভ্যানিলা জেএস ও আধুনিক ফ্রেমওয়ার্ক'
    }
  }
};
