import type { Lesson } from '../../../lib/types';

export const AsyncInTheKitchenLesson: Lesson = {
  slug: 'async-in-the-kitchen',
  tech: 'fastapi',
  title: {
    en: 'Async, Concurrency & BackgroundTasks — Event Loops & WebSockets',
    bn: 'অ্যাসিঙ্ক, কনকারেন্সি ও BackgroundTasks — ইভেন্ট লুপ ও ওয়েবসকেট'
  },
  summary: {
    en: 'FastAPI combines asynchronous event loops with automatic threadpool delegation. In this lesson, you will master the crucial performance difference between async def and def, avoiding event loop blocking, executing non-blocking background tasks with BackgroundTasks, and managing real-time bi-directional WebSockets.',
    bn: 'FastAPI অ্যাসিনক্রোনাস ইভেন্ট লুপ এবং স্বয়ংক্রিয় থ্রেডপুল ডেলিগেশনের সমন্বয়ে চলে। এই পাঠে আপনি async def এবং def-এর মধ্যকার গুরুত্বপূর্ণ কার্যক্ষমতার পার্থক্য, ইভেন্ট লুপ আটকে যাওয়া প্রতিরোধ, BackgroundTasks দিয়ে রেসপন্স-পরবর্তী ব্যাকগ্রাউন্ড কাজ এবং ওয়েবসকেট দিয়ে রিয়েল-টাইম দ্বি-মুখী যোগাযোগ গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'fastapi-async-concurrency-architecture',
      text: {
        en: 'The Async Event Loop and Threadpool Architecture',
        bn: 'অ্যাসিঙ্ক ইভেন্ট লুপ ও থ্রেডপুল আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you declare a route with async def, FastAPI executes it directly inside the main asyncio event loop. However, if you declare a route with regular def, FastAPI automatically offloads it to an AnyIO worker threadpool. This dual-architecture ensures non-blocking I/O runs with maximum throughput while blocking operations never freeze the event loop.',
        bn: 'যখন আপনি কোনো রুট async def দিয়ে ঘোষণা করেন, তখন FastAPI সেটিকে সরাসরি মূল asyncio ইভেন্ট লুপে চালায়। কিন্তু আপনি যদি সাধারণ def দিয়ে রুট লেখেন, তবে FastAPI স্বয়ংক্রিয়ভাবে সেটিকে একটি AnyIO ওয়ার্কার থ্রেডপুলে পাঠিয়ে দেয়। এই দ্বৈত কাঠামোর কারণে নন-ব্লকিং I/O দ্রুত চলে এবং ব্লকিং কাজগুলোও মূল ইভেন্ট লুপকে অচল করে না।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'async def vs def',
          def: {
            en: 'async def runs directly in the event loop for awaitable I/O; regular def runs in a separate threadpool for blocking operations.',
            bn: 'async def নন-ব্লকিং কাজের জন্য সরাসরি ইভেন্ট লুপে চলে; আর সাধারণ def ব্লকিং কাজের জন্য আলাদা থ্রেডপুলে পরিচালিত হয়।'
          }
        },
        {
          term: 'Event Loop Blocking',
          def: {
            en: 'The critical bug where a synchronous blocking call (like time.sleep) inside an async def function halts all concurrent server requests.',
            bn: 'একটি মারাত্মক ত্রুটি যেখানে async def-এর ভেতর সিনক্রোনাস ব্লকিং কোড চালালে পুরো সার্ভারের সমস্ত রিকোয়েস্ট সাময়িকভাবে থমকে যায়।'
          }
        },
        {
          term: 'BackgroundTasks',
          def: {
            en: 'A Starlette mechanism scheduling lightweight tasks (such as sending notification emails) to execute after the HTTP response has been delivered.',
            bn: 'Starlette-এর একটি ব্যবস্থা যা ক্লায়েন্টকে রেসপন্স পাঠানোর ঠিক পরপরই ব্যাকগ্রাউন্ডে ছোটখাটো কাজ (যেমন ইমেইল পাঠানো) সম্পন্ন করে।'
          }
        },
        {
          term: 'Starlette WebSockets',
          def: {
            en: 'Full-duplex persistent network connections enabling real-time bidirectional communication between the browser and FastAPI server.',
            bn: 'স্থায়ী নেটওয়ার্ক সংযোগ যা ব্রাউজার এবং FastAPI সার্ভারের মাঝে রিয়েল-টাইমে উভয়মুখী ডাটা আদান-প্রদান নিশ্চিত করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'async-execution-matrix',
      text: {
        en: 'Route Declaration Style and Execution Strategy Matrix',
        bn: 'রুট ঘোষণার ধরন ও এক্সিকিউশন কৌশল ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Declaration Syntax', bn: 'সিনট্যাক্স' },
        { en: 'Runtime Execution Thread', bn: 'যেখানে কার্যকর হয়' },
        { en: 'Appropriate Production Workload', bn: 'উপযুক্ত কাজের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'async def endpoint():', bn: 'async def endpoint():' },
          { en: 'Main asyncio event loop thread', bn: 'মূল asyncio ইভেন্ট লুপ থ্রেড' },
          { en: 'Awaiting async libraries: httpx, asyncpg, Motor, or Redis-py async', bn: 'নন-ব্লকিং লাইব্রেরি: httpx, asyncpg, Motor বা async Redis' }
        ],
        [
          { en: 'def endpoint(): (sync)', bn: 'def endpoint(): (sync)' },
          { en: 'External AnyIO worker threadpool', bn: 'বাইরের AnyIO ওয়ার্কার থ্রেডপুল' },
          { en: 'Blocking or synchronous libraries: requests, pandas, Pillow, or sync ORM', bn: 'ব্লকিং বা ভারী কাজ: requests, pandas, ছবি প্রসেসিং বা সাধারণ ওআরএম' }
        ],
        [
          { en: 'async def with blocking call', bn: 'async def-এ ব্লকিং কল' },
          { en: 'Blocks the entire event loop (ANTI-PATTERN)', bn: 'সম্পূর্ণ ইভেন্ট লুপ আটকে দেয় (মারাত্মক ভুল)' },
          { en: 'Never use: freezes all concurrent user traffic until call completes', bn: 'কখনোই নয়: কাজ শেষ না হওয়া পর্যন্ত সব ইউজারের রিকোয়েস্ট থমকে থাকে' }
        ],
        [
          { en: 'tasks.add_task(fn, arg)', bn: 'tasks.add_task(fn, arg)' },
          { en: 'Post-response worker execution', bn: 'রেসপন্স পাঠানোর পর ব্যাকগ্রাউন্ডে চলে' },
          { en: 'Email delivery, telemetry logging, and external webhooks', bn: 'ইমেইল পাঠানো, লগ সংরক্ষণ এবং বাহ্যিক ওয়েবহুক কল করা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'background-tasks-code',
      text: {
        en: 'Working BackgroundTasks and Async Concurrency Simulation',
        bn: 'কার্যকরী BackgroundTasks ও অ্যাসিঙ্ক কনকারেন্সি সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of FastAPI BackgroundTasks and Async Event Loop Dispatch
class MockBackgroundTasks {
  constructor() {
    this.tasks = [];
  }

  addTask(taskFn, ...args) {
    this.tasks.push({ fn: taskFn, args });
  }

  async runAll() {
    for (const item of this.tasks) {
      await item.fn(...item.args);
    }
    return this.tasks.length;
  }
}

let emailSentCount = 0;
async function sendWelcomeEmail(recipientEmail) {
  // Simulating async email transmission
  emailSentCount += 1;
}

// 1. Simulating route handler with BackgroundTasks
const backgroundTasks = new MockBackgroundTasks();
backgroundTasks.addTask(sendWelcomeEmail, 'user1@example.com');
backgroundTasks.addTask(sendWelcomeEmail, 'user2@example.com');

// 2. Client receives immediate response before tasks finish
const immediateResponse = {
  statusCode: 202,
  message: 'Registration accepted. Confirmation queued.'
};

// 3. Event loop executes background tasks after response delivery
const completedTasks = await backgroundTasks.runAll();

console.log('Client response status code:', immediateResponse.statusCode);
// -> Client response status code: 202
console.log('Total background tasks completed:', completedTasks);
// -> Total background tasks completed: 2
console.log('Total emails successfully transmitted:', emailSentCount);
// -> Total emails successfully transmitted: 2`,
      caption: {
        en: 'Immediate response with status 202 followed by 2 completed background tasks',
        bn: '২০২ স্ট্যাটাসে তাৎক্ষণিক রেসপন্স এবং পরবর্তীতে ২টি ব্যাকগ্রাউন্ড টাস্ক সম্পন্ন'
      }
    },
    {
      type: 'heading',
      id: 'websocket-streaming-rules',
      text: {
        en: 'WebSocket Protocol and Real-Time Streaming Rules',
        bn: 'ওয়েবসকেট প্রোটোকল ও রিয়েল-টাইম স্ট্রিমিং নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For interactive features like live charts or chat rooms, standard HTTP request-response cycles add excessive latency. FastAPI supports WebSockets out of the box through Starlette: endpoints accept connections using await websocket.accept(), stream text or binary frames with send_text() and receive_text(), and handle client disconnections via WebSocketDisconnect.',
        bn: 'লাইভ চার্ট বা চ্যাট অ্যাপ্লিকেশনের মতো ইন্টারঅ্যাক্টিভ ফিচারের জন্য সাধারণ এইচটিটিপি রিকোয়েস্ট বারবার পাঠানো অত্যন্ত সময়সাপেক্ষ। FastAPI-তে Starlette-এর মাধ্যমে সরাসরি ওয়েবসকেট সুবিধা রয়েছে: এন্ডপয়েন্টে await websocket.accept() দিয়ে সংযোগ গৃহীত হয়, send_text() ও receive_text() দিয়ে রিয়েল-টাইমে ডাটা আদান-প্রদান করা যায় এবং WebSocketDisconnect দিয়ে সংযোগ বিচ্ছিন্ন হ্যান্ডল করা হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. No Blocking in async def: Never invoke time.sleep() or requests.get() inside async def; use asyncio.sleep() and httpx.',
          bn: '১. async def-এ ব্লকিং নিষিদ্ধ: async def-এ time.sleep() বা requests চালাবেন না; সর্বদা asyncio.sleep() ও httpx ব্যবহার করুন।'
        },
        {
          en: '2. Offload Sync Code via def: If you must use a blocking legacy library, declare the endpoint with regular def.',
          bn: '২. ব্লকিং কাজে সাধারণ def: সিনক্রোনাস বা ভারী লাইব্রেরি চালাতে হলে রুটটি সাধারণ def দিয়ে লিখুন যাতে তা থ্রেডপুলে চলে।'
        },
        {
          en: '3. Offload Heavy Work with Celery: Use BackgroundTasks for sub-second tasks (emails); adopt Celery with Redis for heavy multi-minute jobs.',
          bn: '৩. ভারী কাজে Celery: কয়েক সেকেন্ডের কাজে BackgroundTasks ব্যবহার করুন; কিন্তু মিনিটব্যাপী ভারী প্রসেসিংয়ে Celery ব্যবহার করুন।'
        },
        {
          en: '4. Handle WebSocketDisconnect: Always wrap WebSocket loops in try-except WebSocketDisconnect to clean up active connections gracefully.',
          bn: '৪. ডিসকানেক্ট হ্যান্ডলিং: মেমরি লিক এড়াতে ওয়েবসকেট লুপে WebSocketDisconnect এক্সেপশন হ্যান্ডল করে ডিসকানেক্টেড ইউজার সরিয়ে দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-asy-ex1',
      kind: 'mcq',
      topic: 'difference between async def and def in fastapi',
      question: {
        en: 'What occurs under the hood when you declare a FastAPI route handler with regular "def" instead of "async def"?',
        bn: 'FastAPI রুটে "async def"-এর বদলে সাধারণ "def" ব্যবহার করলে ফ্রেমওয়ার্কের ভেতরে কী ঘটে?'
      },
      options: [
        {
          en: 'FastAPI runs the function in an external AnyIO worker threadpool, ensuring blocking synchronous calls do not freeze the main asyncio event loop',
          bn: 'FastAPI ফাংশনটিকে একটি আলাদা AnyIO ওয়ার্কার থ্রেডপুলে চালায়, যার ফলে ব্লকিং কোড চললেও মূল asyncio ইভেন্ট লুপ সচল থাকে'
        },
        {
          en: 'FastAPI converts Python code into assembly language',
          bn: 'FastAPI পাইথন কোডকে অ্যাসেম্বলি ভাষায় রূপান্তর করে ফেলে'
        },
        {
          en: 'The route becomes completely synchronous and rejects concurrent visitors',
          bn: 'রুটটি সম্পূর্ণ সিনক্রোনাস হয়ে যায় এবং একসাথে একাধিক ভিজিটর আটকে দেয়'
        },
        {
          en: 'The operating system restarts the Python process on every request',
          bn: 'প্রতিটি রিকোয়েস্টে অপারেটিং সিস্টেম পাইথন প্রসেস রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Regular def functions are offloaded to a threadpool to protect the event loop.',
        bn: 'সাধারণ def ফাংশনগুলো ইভেন্ট লুপ সুরক্ষিত রাখতে আলাদা থ্রেডপুলে পাঠানো হয়।'
      },
      explanation: {
        en: 'FastAPI inspects the function signature. If it is a standard def, it executes in a separate threadpool (via anyio.to_thread.run_sync), keeping the main event loop thread free.',
        bn: 'FastAPI সাধারণ def ফাংশনগুলোকে থ্রেডপুলে চালায়, যাতে ব্লকিং কোড থাকলেও মূল ইভেন্ট লুপ আটকে গিয়ে পুরো সার্ভার অচল না হয়।'
      }
    },
    {
      id: 'fa-asy-ex2',
      kind: 'mcq',
      topic: 'blocking event loop with synchronous calls',
      question: {
        en: 'What catastrophic consequence occurs if a developer writes "time.sleep(5)" directly inside an "async def" route handler in FastAPI?',
        bn: 'FastAPI-তে কোনো "async def" রুট হ্যান্ডলারের ভেতর সরাসরি "time.sleep(5)" লিখলে কোন মারাত্মক বিপর্যয় ঘটে?'
      },
      options: [
        {
          en: 'It blocks the single main event loop thread for 5 seconds, causing all concurrent requests from all other users across the entire server to freeze until sleep finishes',
          bn: 'এটি ৫ সেকেন্ডের জন্য মূল ইভেন্ট লুপের একমাত্র থ্রেডটি আটকে দেয়, ফলে ওই সময়ে পুরো সার্ভারে অন্য সব ইউজারের সমস্ত রিকোয়েস্ট থমকে যায়'
        },
        {
          en: 'FastAPI automatically converts time.sleep into asyncio.sleep',
          bn: 'FastAPI নিজে থেকেই time.sleep-কে asyncio.sleep-এ বদলে নেয়'
        },
        {
          en: 'The computer hard disk shuts down to protect data',
          bn: 'ডাটা সুরক্ষার জন্য কম্পিউটারের হার্ডডিস্ক বন্ধ হয়ে যায়'
        },
        {
          en: 'Nothing bad happens; async def handles blocking calls automatically',
          bn: 'কোনো সমস্যা হয় না; async def ব্লকিং কোড নিজে থেকেই সামলে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calling synchronous blocking functions in the event loop blocks all concurrent tasks.',
        bn: 'ইভেন্ট লুপে ব্লকিং কোড চালালে চলমান অন্য সমস্ত কাজ আটকে যায়।'
      },
      explanation: {
        en: 'In async def, code runs directly on the single event loop thread. A blocking call like time.sleep() stops the entire thread, halting all concurrent connections.',
        bn: 'async def সরাসরি ইভেন্ট লুপের একমাত্র থ্রেডে চলে। সেখানে time.sleep দিলে পুরো থ্রেডটি স্তব্ধ হয়ে যায় এবং সার্ভার অন্য কারও রিকোয়েস্ট নিতে পারে না।'
      }
    },
    {
      id: 'fa-asy-ex3',
      kind: 'mcq',
      topic: 'backgroundtasks execution timing',
      question: {
        en: 'When are tasks registered via "background_tasks.add_task(send_email, email)" actually executed in FastAPI?',
        bn: 'FastAPI-তে "background_tasks.add_task(send_email, email)" দিয়ে যুক্ত করা কাজগুলো ঠিক কখন সম্পাদিত হয়?'
      },
      options: [
        {
          en: 'Directly after the HTTP response has been sent to the client, allowing the user to receive an immediate response without waiting for the task to finish',
          bn: 'ক্লায়েন্টকে এইচটিটিপি রেসপন্স পাঠানোর ঠিক পরপরই, যার ফলে ব্যবহারকারীকে কাজের জন্য অপেক্ষা না করিয়ে তাৎক্ষণিক রেসপন্স দেওয়া যায়'
        },
        {
          en: 'Before the route handler executes, delaying the response until the email is delivered',
          bn: 'ভিউ ফাংশন চলার আগে, ফলে ইমেইল না যাওয়া পর্যন্ত রেসপন্স আটকে থাকে'
        },
        {
          en: 'At midnight as a scheduled system cron job',
          bn: 'প্রতি মধ্যরাতে একটি নির্ধারিত সিস্টেম ক্রন জব হিসেবে'
        },
        {
          en: 'Only when the server is powered off',
          bn: 'কেবল যখন সার্ভার বন্ধ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'BackgroundTasks run after the response has already been delivered to the client.',
        bn: 'BackgroundTasks ক্লায়েন্টকে রেসপন্স পাঠানোর পর ব্যাকগ্রাউন্ডে কার্যকর হয়।'
      },
      explanation: {
        en: 'BackgroundTasks schedule operations to run immediately after sending the response, providing fast client feedback for email delivery or analytics logging.',
        bn: 'BackgroundTasks রেসপন্স দেওয়ার পর চলে। এর ফলে ইউজারকে আটকে না রেখে সাথে সাথে সাফল্য বার্তা দেওয়া যায় আর ইমেইল ব্যাকগ্রাউন্ডে চলে যায়।'
      }
    },
    {
      id: 'fa-asy-ex4',
      kind: 'mcq',
      topic: 'websocket accept call requirement',
      question: {
        en: 'What method must be awaited on the WebSocket instance before sending or receiving messages in a FastAPI WebSocket endpoint?',
        bn: 'FastAPI ওয়েবসকেট এন্ডপয়েন্টে মেসেজ পাঠানো বা গ্রহণের পূর্বে WebSocket অবজেক্টে কোন মেথডটি await করা আবশ্যক?'
      },
      options: [
        {
          en: 'await websocket.accept()',
          bn: 'await websocket.accept()'
        },
        {
          en: 'await websocket.connect_tcp()',
          bn: 'await websocket.connect_tcp()'
        },
        {
          en: 'await websocket.authenticate()',
          bn: 'await websocket.authenticate()'
        },
        {
          en: 'websocket.open_channel()',
          bn: 'websocket.open_channel()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The server must explicitly accept the WebSocket handshake with .accept().',
        bn: 'সার্ভারকে অবশ্যই .accept() ডেকে ওয়েবসকেট হ্যান্ডশেক সম্পন্ন করতে হয়।'
      },
      explanation: {
        en: 'Calling await websocket.accept() completes the WebSocket handshake, upgrading the HTTP connection to a persistent full-duplex socket.',
        bn: 'await websocket.accept() কল করার মাধ্যমে ওয়েবসকেট হ্যান্ডশেক সম্পন্ন হয় এবং সাধারণ এইচটিটিপি সংযোগটি স্থায়ী দ্বিমুখী সকেটে উন্নীত হয়।'
      }
    }
  ],
  quiz: {
    id: 'async-in-the-kitchen-quiz',
    title: {
      en: 'FastAPI Async, Concurrency & WebSockets Quiz',
      bn: 'FastAPI অ্যাসিঙ্ক, কনকারেন্সি ও ওয়েবসকেট কুইজ'
    },
    questions: [
      {
        id: 'q-websocket-disconnect-handling',
        kind: 'mcq',
        topic: 'handling client disconnection with WebSocketDisconnect',
        question: {
          en: 'Why is wrapping the WebSocket message loop inside "try ... except WebSocketDisconnect:" essential in FastAPI?',
          bn: 'FastAPI-তে ওয়েবসকেট লুপকে "try ... except WebSocketDisconnect:" ব্লকে রাখা কেন অপরিহার্য?'
        },
        options: [
          {
            en: 'When a client closes their browser tab or loses network connectivity, receive_text() raises WebSocketDisconnect; catching it allows graceful connection removal from active socket pools without unhandled server crashes',
            bn: 'ক্লায়েন্ট ট্যাব বন্ধ করলে বা নেট চলে গেলে receive_text() এক্সেপশন ছুড়ে দেয়; এটি হ্যান্ডল করলে অ্যাক্টিভ সকেট পুল থেকে সংযোগটি সুন্দরভাবে মুছে ফেলা যায় এবং সার্ভার ক্র্যাশ হয় না'
          },
          {
            en: 'It reboots the client computer automatically',
            bn: 'এটি ক্লায়েন্টের কম্পিউটার নিজে থেকেই রিস্টার্ট করে'
          },
          {
            en: 'It encrypts the closed socket with AES-256',
            bn: 'এটি বন্ধ হওয়া সকেটকে এইএস-২৫৬ দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'WebSocketDisconnect is an error that only occurs on macOS',
            bn: 'WebSocketDisconnect কেবল ম্যাক কম্পিউটারে ঘটা একটি এরর'
          }
        ],
        answer: 0,
        hint: {
          en: 'Catching WebSocketDisconnect allows graceful cleanup when clients drop.',
          bn: 'WebSocketDisconnect হ্যান্ডল করলে ক্লায়েন্ট বিচ্ছিন্ন হলে সার্ভার সুন্দরভাবে মেমরি পরিষ্কার করতে পারে।'
        },
        explanation: {
          en: 'When a WebSocket client drops connection, Starlette raises WebSocketDisconnect. Catching this exception allows broadcasting leaves and cleaning up connection registries.',
          bn: 'ক্লায়েন্ট সংযোগ কাটলে Starlette WebSocketDisconnect ছুড়ে দেয়। এটি ধরে একটিভ তালিকা থেকে ইউজার সরিয়ে দিলে মেমরি লিক বা ক্র্যাশ ঘটে না।'
        }
      },
      {
        id: 'q-asyncio-to-thread-helper',
        kind: 'mcq',
        topic: 'using asyncio.to_thread inside async def',
        question: {
          en: 'If you are inside an "async def" route and need to call a CPU-bound or blocking library function (such as generating an image with Pillow), how should you invoke it safely?',
          bn: 'যদি আপনি "async def" রুটের ভেতর থাকেন এবং কোনো ব্লকিং বা ভারী লাইব্রেরি (যেমন Pillow দিয়ে ছবি প্রসেস) চালাতে হয়, তবে কীভাবে নিরাপদে কল করবেন?'
        },
        options: [
          {
            en: 'await asyncio.to_thread(blocking_function, *args)',
            bn: 'await asyncio.to_thread(blocking_function, *args)'
          },
          {
            en: 'Call it directly in a while loop',
            bn: 'সরাসরি একটি হোয়াইল লুপে কল করে'
          },
          {
            en: 'Convert the function into a JSON string',
            bn: 'ফাংশনটিকে একটি JSON স্ট্রিংয়ে বদলে নিয়ে'
          },
          {
            en: 'Blocking functions cannot be run in Python',
            bn: 'পাইথনে ব্লকিং ফাংশন চালানো অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'asyncio.to_thread offloads a synchronous function to a background thread.',
          bn: 'asyncio.to_thread সিনক্রোনাস ফাংশনকে একটি ব্যাকগ্রাউন্ড থ্রেডে পাঠিয়ে দেয়।'
        },
        explanation: {
          en: 'asyncio.to_thread() runs the blocking callable in a separate thread and awaits its completion asynchronously, keeping the main event loop responsive.',
          bn: 'asyncio.to_thread() ব্লকিং কোডকে আলাদা থ্রেডে পাঠিয়ে দেয় এবং নিজে নন-ব্লকিংভাবে অপেক্ষা করে, ফলে মেইন ইভেন্ট লুপ ফ্রি থাকে।'
        }
      },
      {
        id: 'q-celery-vs-background-tasks',
        kind: 'mcq',
        topic: 'choosing between backgroundtasks and celery',
        question: {
          en: 'When should an architecture transition from FastAPI BackgroundTasks to a distributed task queue like Celery with Redis?',
          bn: 'কখন একটি সিস্টেমে FastAPI BackgroundTasks-এর বদলে Celery ও Redis চালিত ডিস্ট্রিবিউটেড টাস্ক কিউ ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'When tasks are long-running (e.g. video transcoding, PDF generation), require retries upon failure, need persistent job tracking across server restarts, or must run on dedicated worker machines',
            bn: 'যখন কাজগুলো দীর্ঘস্থায়ী (যেমন ভিডিও কনভার্সন, ভারী পিডিএফ তৈরি), ব্যর্থ হলে পুনরায় চেষ্টা দরকার হয়, সার্ভার রিস্টার্ট হলেও কাজ সুরক্ষিত রাখতে হয় বা আলাদা মেশিনে চালাতে হয়'
          },
          {
            en: 'Whenever sending any HTTP request',
            bn: 'যেকোনো সাধারণ এইচটিটিপি রিকোয়েস্ট পাঠানোর সময়'
          },
          {
            en: 'Only when the database uses SQLite',
            bn: 'কেবল যখন ডাটাবেজে SQLite ব্যবহৃত হয়'
          },
          {
            en: 'BackgroundTasks and Celery are identical tools with the same capabilities',
            bn: 'BackgroundTasks এবং Celery একই ধরনের টুল এবং উভয়ের ক্ষমতা সমান'
          }
        ],
        answer: 0,
        hint: {
          en: 'BackgroundTasks run in-process without retries; Celery runs distributed durable tasks.',
          bn: 'BackgroundTasks একই প্রসেসে চলে এবং রিস্টার্টে হারিয়ে যায়; Celery ডিস্ট্রিবিউটেডভাবে নির্ভরযোগ্য কাজ পরিচালনা করে।'
        },
        explanation: {
          en: 'BackgroundTasks run in the same process memory. If the server crashes or restarts, pending tasks are lost. Celery provides distributed persistence, retry logic, and independent worker scaling.',
          bn: 'BackgroundTasks অ্যাপ প্রসেসের ভেতরেই চলে, তাই সার্ভার রিবুট হলে কাজ মুছে যায়। জটিল ও ভারী কাজের জন্য Celery নির্ভরযোগ্য ও দীর্ঘস্থায়ী সমাধান।'
        }
      },
      {
        id: 'q-asyncpg-vs-psycopg2',
        kind: 'mcq',
        topic: 'native async database drivers for fastapi',
        question: {
          en: 'Why do high-throughput FastAPI applications pair with asynchronous drivers like "asyncpg" rather than traditional "psycopg2" when querying PostgreSQL?',
          bn: 'পোস্টগ্রেস ডাটাবেজ ব্যবহারের সময় উচ্চ গতির FastAPI অ্যাপ্লিকেশনে ঐতিহ্যবাহী "psycopg2"-এর বদলে "asyncpg"-এর মতো অ্যাসিনক্রোনাস ড্রাইভার কেন বেছে নেওয়া হয়?'
        },
        options: [
          {
            en: 'asyncpg speaks the PostgreSQL binary protocol asynchronously via asyncio, allowing a single server thread to multiplex hundreds of concurrent database queries without blocking',
            bn: 'asyncpg অ্যাসিনক্রোনাস প্রোটোকল ব্যবহার করে, যার ফলে একটিমাত্র থ্রেড কোনো ব্লকিং ছাড়াই একসাথে শত শত ডাটাবেজ কোয়েরি পরিচালনা করতে পারে'
          },
          {
            en: 'psycopg2 cannot connect to modern PostgreSQL databases',
            bn: 'psycopg2 আধুনিক পোস্টগ্রেস ডাটাবেজের সাথে সংযুক্ত হতে পারে না'
          },
          {
            en: 'asyncpg encrypts all SQL table names with SHA-256',
            bn: 'asyncpg সমস্ত এসকিউএল টেবিলের নাম SHA-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'There is no difference in concurrency or execution speed',
            bn: 'কনকারেন্সি বা গতির দিক থেকে এদের মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'asyncpg integrates with the asyncio event loop for non-blocking database queries.',
          bn: 'asyncpg ইভেন্ট লুপের সাথে সমন্বয় করে নন-ব্লকিংভাবে ডাটাবেজ কোয়েরি সম্পন্ন করে।'
        },
        explanation: {
          en: 'Traditional psycopg2 blocks the calling thread during database I/O. asyncpg uses non-blocking sockets and asyncio, yielding massive throughput in concurrent workloads.',
          bn: 'psycopg2 কোয়েরি চালানোর সময় পুরো থ্রেড আটকে রাখে। asyncpg নন-ব্লকিং সকেট ব্যবহার করে, ফলে ডাটা আসার অপেক্ষায় না থেকে অন্য কাজ চলতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'security-at-the-pass',
    title: {
      en: 'OAuth2 & JWT Security — Bearer Tokens, Passwords & Scopes',
      bn: 'OAuth2 ও JWT সিকিউরিটি — বেয়ারার টোকেন, পাসওয়ার্ড ও স্কোপ'
    }
  }
};
