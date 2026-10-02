import type { Lesson } from '../../../lib/types';

export const frescoFramesLesson: Lesson = {
  slug: 'the-fresco-frames',
  tech: 'canvas',
  title: {
    en: 'requestAnimationFrame, Delta Time & 60 FPS Loop',
    bn: 'requestAnimationFrame, ডেল্টা টাইম ও ৬০ এফপিএস লুপ'
  },
  summary: {
    en: 'Rendering fluid motion on an immediate-mode canvas requires an execution loop synchronized with monitor refresh intervals. Relying on legacy timers like setInterval produces screen stutter and wastes CPU cycles in background tabs. Modern canvas animation leverages window.requestAnimationFrame. A production render loop executes three sequential steps: clear the previous frame buffer using ctx.clearRect, update physics positions, and draw new shapes. To ensure gameplay and animations move at identical velocities across 60 Hz, 120 Hz, or 144 Hz displays, movement must be scaled by delta time (dt). For instance, between timestamp 1000 ms and 1016.67 ms, the frame delta is 16.67 milliseconds, yielding a standard 60 FPS refresh rate. This lesson teaches the render loop, frame clearing, delta time, and motion smoothing.',
    bn: 'ক্যানভাসে মসৃণ অ্যানিমেশন তৈরির জন্য মনিটরের রিফ্রেশ রেটের সাথে মিল রেখে একটি অবিচ্ছিন্ন রেন্ডারিং লুপ চালাতে হয়। setInterval-এর মতো পুরোনো টাইমার ব্যবহার করলে অ্যানিমেশন তোতলানোর মতো আটকে যায় এবং ট্যাব ব্যাকগ্রাউন্ডে থাকলে অপ্রয়োজনে সিপিইউ নষ্ট হয়। আধুনিক ক্যানভাস অ্যানিমেশনে window.requestAnimationFrame ব্যবহার করা হয়। একটি প্রফেশনাল লুপ তিনটি ধাপে চলে: ctx.clearRect দিয়ে আগের ফ্রেম মুছে ফেলা, নতুন পজিশন আপডেট করা এবং ক্যানভাসে পুনরায় আঁকা। ৬০ হার্টজ, ১২০ হার্টজ বা ১৪৪ হার্টজের মনিটরে গেমের গতি সমান রাখতে ডেল্টা টাইম (dt) ব্যবহার করা হয়। যেমন ১০০০ মিলিসেকেন্ড এবং ১০১৬.৬৭ মিলিসেকেন্ডের মধ্যে সময়ের পার্থক্য ১৬.৬৭ মিলিসেকেন্ড, যা প্রমাণ ৬০ এফপিএস রিফ্রেশ রেট নির্দেশ করে। এই পাঠে রেন্ডার লুপ, ফ্রেম ক্লিয়ারিং এবং ডেল্টা টাইম গতিবিদ্যা শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: The Immediate-Mode Frame Loop',
        bn: 'মূল ধারণা: ইমিডিয়েট-মোড ফ্রেম লুপ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'Unlike HTML elements that remember their coordinates automatically, a 2D canvas is a blank slate on every frame. If an object moves 5 pixels to the right, you must wipe the old frame clean and redraw the object at its new coordinate. The browser native animation loop method requestAnimationFrame (which schedules drawing before the next screen repaint) synchronizes this redrawing process with the GPU refresh cycle.',
        bn: 'সাধারণ এইচটিএমএল উপাদানের মতো ক্যানভাস নিজে থেকে কোনো বস্তুর অবস্থান মনে রাখে না। কোনো অবজেক্ট ৫ পিক্সেল ডানে সরলে আগের ফ্রেম মুছে নতুন জায়গায় আবার তা আঁকতে হয়। ব্রাউজারের নিজস্ব অ্যানিমেশন লুপ মেথড requestAnimationFrame (যা স্ক্রিন রিফ্রেশের ঠিক আগে ড্রয়িং চালায়) জিপিইউ রিফ্রেশ হারের সাথে মিল রেখে নিখুঁত সময়ে এই ড্রয়িং পরিচালনা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'requestAnimationFrame (rAF)',
          def: {
            en: 'The browser API scheduling a callback before the next hardware repaint, pausing automatically when the user changes tabs',
            bn: 'ব্রাউজারের মেথড যা পরবর্তী স্ক্রিন রিফ্রেশের ঠিক আগে ড্রয়িং কোড রান করে এবং অন্য ট্যাবে গেলে থেমে গিয়ে বিদ্যুৎ বাঁচায়'
          }
        },
        {
          term: 'Buffer Clearing (clearRect)',
          def: {
            en: 'Erasing rectangular regions back to transparent black, wiping away motion trails from the previous frame',
            bn: 'ক্যানভাসের নির্দিষ্ট বা পুরো অংশ মুছে সম্পূর্ণ স্বচ্ছ করে ফেলা, যাতে আগের ফ্রেমের দাগ না থাকে'
          }
        },
        {
          term: 'Delta Time (dt)',
          def: {
            en: 'The elapsed time in milliseconds between consecutive animation frames, used to decouple physics velocity from screen refresh rates',
            bn: 'পরপর দুটি ফ্রেমের মধ্যকার সময়ের পার্থক্য (মিলিসেকেন্ডে), যার সাহায্যে মনিটরের স্পিড নির্বিশেষে গেমের গতি স্থির রাখা হয়'
          }
        },
        {
          term: 'Frame Rate Decoupling',
          def: {
            en: 'Scaling movement by (speed * dt / 1000) so characters move at the exact same physical pixels per second across 60Hz and 144Hz displays',
            bn: 'গতির সাথে ডেল্টা টাইম গুণ করে এমনভাবে কোড লেখা যাতে ৬০ হার্টজ ও ১৪৪ হার্টজের যেকোনো ডিভাইসে চরিত্র সমান গতিতে চলে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'loop-phases-table',
      text: {
        en: 'The Canonical Three-Phase Animation Loop',
        bn: 'অ্যানিমেশন লুপের তিনটি প্রধান ধাপ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Sequential Phases Executed on Every Animation Tick',
        bn: 'প্রতিটি অ্যানিমেশন ফ্রেমে ধারাবাহিকভাবে চলা ৩টি ধাপ'
      },
      head: [
        { en: 'Phase', bn: 'ধাপ' },
        { en: 'Primary Operation', bn: 'মূল কাজ' },
        { en: 'Critical Best Practice', bn: 'জরুরি সতর্কতা' }
      ],
      rows: [
        [
          { en: '1. Clear', bn: '১. ক্লিয়ার' },
          { en: 'ctx.clearRect(0, 0, canvas.width, canvas.height)', bn: 'ctx.clearRect(0, 0, canvas.width, canvas.height)' },
          { en: 'Omitting clear leaves trailing smears; for trails, use semi-transparent fillRect instead', bn: 'ক্লিয়ার না করলে দাগ থেকে যাবে; স্মোক ট্রেইলের জন্য হালকা ট্রান্সপারেন্ট ফিল দিন' }
        ],
        [
          { en: '2. Update', bn: '২. আপডেট' },
          { en: 'Calculate entity positions, collision detection, and physics integration', bn: 'অবজেক্টের অবস্থান, ধাক্কা লাগা (কলিশন) এবং গতি হিসাব করা' },
          { en: 'Multiply speed by dt (delta time) rather than adding fixed constant numbers', bn: 'গতির সাথে ডেল্টা টাইম গুণ করুন, কখনোই ফিক্সড পিক্সেল যোগ করবেন না' }
        ],
        [
          { en: '3. Draw', bn: '৩. ড্র' },
          { en: 'Execute path commands, render sprites, and draw text overlays', bn: 'পাথ কমান্ড কল করা, স্প্রাইট আঁকা এবং লেখা রেন্ডার করা' },
          { en: 'Wrap complex sprites in save() and restore() to isolate transformation matrices', bn: 'প্রতিটি স্প্রাইটে save() ও restore() ব্যবহার করে ম্যাট্রিক্স সুরক্ষিত রাখুন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Delta Time & Frame Rate Calculator',
        bn: 'চালনাযোগ্য সিমুলেশন: ডেল্টা টাইম ও ফ্রেম রেট গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates delta time computation between consecutive high-resolution timestamps at 1000 ms and 1016.67 ms, computing the frame delta of 16.67 milliseconds and verifying a 60 FPS refresh rate:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০০ মিলিসেকেন্ড এবং ১০১৬.৬৭ মিলিসেকেন্ডের মধ্যে ডেল্টা টাইম হিসাব করে ১৬.৬৭ মিলিসেকেন্ড ফ্রেম ডিউরেশন এবং ৬০ এফপিএস রিফ্রেশ রেট প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'canvas-delta-time-sim',
      lang: 'javascript',
      code: `// Canvas Animation Frame & Delta Time Engine
const prevTime = 1000;    // Milliseconds timestamp on frame N
const currTime = 1016.67; // Milliseconds timestamp on frame N+1

// Compute elapsed frame duration in milliseconds
const dt = Number((currTime - prevTime).toFixed(2));

// Calculate instantaneous frame rate (frames per second)
const fps = Math.round(1000 / dt);

console.log('Previous frame timestamp in ms:', prevTime);
// -> Previous frame timestamp in ms: 1000

console.log('Current frame timestamp in ms:', currTime);
// -> Current frame timestamp in ms: 1016.67

console.log('Elapsed frame delta time in ms:', dt);
// -> Elapsed frame delta time in ms: 16.67

console.log('Calculated frame rate in FPS:', fps);
// -> Calculated frame rate in FPS: 60`,
      caption: {
        en: 'Figure 1: Consecutive timestamps separated by 16.67 milliseconds correspond to a standard 60 FPS monitor refresh cycle',
        bn: 'চিত্র ১: পরপর দুটি ফ্রেমের মাঝে ১৬.৬৭ মিলিসেকেন্ডের পার্থক্য সাধারণ ৬০ এফপিএস মনিটর রিফ্রেশ রেটকে নির্দেশ করে'
      }
    },
    {
      type: 'heading',
      id: 'motion-blur-trail-technique',
      text: {
        en: 'Ghost Trails: The Semi-Transparent Fade Technique',
        bn: 'ঘোস্ট ট্রেইল: হালকা স্বচ্ছ ফেড কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If you want moving particles, comets, or lightsabers to leave glowing motion trails behind them, do not invoke clearRect. Instead, paint a full-canvas rectangle filled with a semi-transparent background color (e.g. rgba(0, 0, 0, 0.1)). On every frame, historical pixels fade out smoothly over 10 consecutive ticks.',
        bn: 'ধূমকেতুর লেজ বা আগুনের কণার পেছনে সুন্দর আলোর ট্রেইল তৈরি করতে clearRect-এর বদলে প্রতি ফ্রেমে পুরো ক্যানভাস জুড়ে একটি হালকা স্বচ্ছ চারকোনা (যেমন rgba(0, 0, 0, 0.1)) আঁকা হয়। এতে আগের ফ্রেমের দাগগুলো একসাথে মুছে না গিয়ে আস্তে আস্তে ১০ ফ্রেমে মিলিয়ে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Trailing Smear Artifact',
          def: {
            en: 'The visual glitch where moving objects leave permanent solid streaks because clearRect was omitted',
            bn: 'ক্লিয়ার না করায় ক্যানভাসে রঙের দাগ থেকে যাওয়ার ত্রুটি'
          }
        },
        {
          term: 'cancelAnimationFrame(handle)',
          def: {
            en: 'The method used to stop an ongoing render loop when pausing a game or unmounting a React component',
            bn: 'চলমান অ্যানিমেশন লুপ বা গেম থামানোর মেথড যা মেমোরি বাঁচায়'
          }
        },
        {
          term: 'High-Resolution Timestamp',
          def: {
            en: 'The DOMHighResTimeStamp passed to the rAF callback with sub-millisecond precision, originating from performance.now()',
            bn: 'মাইক্রোসেকেন্ড নির্ভুল সময়ের মান যা ব্রাউজার প্রতিটি ফ্রেমে প্যারামিটার হিসেবে পাঠায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-dt-calc-ex',
      kind: 'mcq',
      topic: 'Delta time duration at 60 FPS',
      question: {
        en: 'According to our frame rate simulation, what is the elapsed delta time (dt) in milliseconds between frames running at 60 FPS?',
        bn: 'আমাদের ফ্রেম রেট সিমুলেশন অনুযায়ী ৬০ এফপিএস গতিতে চলা ফ্রেমগুলোর মধ্যকার ডেল্টা টাইম (dt) কত মিলিসেকেন্ড?'
      },
      options: [
        {
          en: '16.67 milliseconds (1000 ms divided by 60)',
          bn: '১৬.৬৭ মিলিসেকেন্ড (১০০০ ভাগ ৬০)'
        },
        {
          en: '1000 milliseconds',
          bn: '১০০০ মিলিসেকেন্ড'
        },
        {
          en: '100 milliseconds',
          bn: '১০০ মিলিসেকেন্ড'
        },
        {
          en: '1 millisecond',
          bn: '১ মিলিসেকেন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: '1000 ms divided by 60 frames equals 16.67 ms.',
        bn: '১০০০ মিলিসেকেন্ডকে ৬০ দিয়ে ভাগ করলে ১৬.৬৭ মিলিসেকেন্ড হয়।'
      },
      explanation: {
        en: '1000 / 60 = 16.666... which rounds to 16.67 milliseconds per frame at 60 FPS.',
        bn: '১ সেকেন্ড বা ১০০০ মিলিসেকেন্ডে ৬০টি ফ্রেম চললে প্রতি ফ্রেমে প্রায় ১৬.৬৭ মিলিসেকেন্ড সময় পাওয়া যায়।'
      }
    },
    {
      id: 'canvas-raf-vs-interval-ex',
      kind: 'mcq',
      topic: 'Advantage of requestAnimationFrame over setInterval',
      question: {
        en: 'Why is window.requestAnimationFrame superior to setInterval for driving canvas render loops?',
        bn: 'ক্যানভাসে রেন্ডার লুপ চালানোর ক্ষেত্রে কেন setInterval-এর চেয়ে window.requestAnimationFrame অনেক বেশি কার্যকর?'
      },
      options: [
        {
          en: 'It synchronizes directly with the hardware monitor refresh rate and automatically pauses when the browser tab is hidden, preventing CPU waste and battery drain',
          bn: 'এটি সরাসরি মনিটরের রিফ্রেশ রেটের সাথে তাল মিলিয়ে চলে এবং ট্যাব লুকানো বা মিনিমাইজ করা থাকলে নিজে থেকেই লুপ থামিয়ে সিপিইউ ও ব্যাটারি বাঁচায়'
        },
        {
          en: 'It makes images load faster from the server',
          bn: 'এটি সার্ভার থেকে ছবি দ্রুত লোড করে'
        },
        {
          en: 'It enables sound effects on silent videos',
          bn: 'এটি নিঃশব্দ ভিডিওতে সাউন্ড যোগ করে'
        },
        {
          en: 'It doubles the size of the computer hard disk',
          bn: 'এটি কম্পিউটারের হার্ড ডিস্কের আকার দ্বিগুণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hardware V-Sync synchronization and power conservation in background tabs.',
        bn: 'মনিটরের সাথে তাল মেলানো এবং ব্যাকগ্রাউন্ড ট্যাবে অপ্রয়োজনীয় ব্যাটারি খরচ বন্ধের কথা ভাবুন।'
      },
      explanation: {
        en: 'requestAnimationFrame matches hardware repaints and throttles to zero when the page is hidden, eliminating wasted CPU work.',
        bn: 'requestAnimationFrame সরাসরি মনিটরের রিফ্রেশ হারের সাথে চলে এবং পেজ দেখা না গেলে থেমে গিয়ে ডিভাইস ঠান্ডা রাখে।'
      }
    },
    {
      id: 'canvas-speed-dt-ex',
      kind: 'mcq',
      topic: 'Applying delta time to movement calculations',
      question: {
        en: 'If a character moves at 200 pixels per second, how should its X coordinate be updated on each frame using delta time dt (in seconds)?',
        bn: 'যদি একটি চরিত্র প্রতি সেকেন্ডে ২০০ পিক্সেল গতিতে চলে, তবে ডেল্টা টাইম dt (সেকেন্ডে) ব্যবহার করে প্রতি ফ্রেমে কীভাবে X স্থানাঙ্ক আপডেট করতে হবে?'
      },
      options: [
        {
          en: 'x += 200 * dt;',
          bn: 'x += ২০০ * dt;'
        },
        {
          en: 'x += 200 / dt;',
          bn: 'x += ২০০ / dt;'
        },
        {
          en: 'x = 200;',
          bn: 'x = ২০০;'
        },
        {
          en: 'x += dt / 200;',
          bn: 'x += dt / ২০০;'
        }
      ],
      answer: 0,
      hint: {
        en: 'Distance equals speed multiplied by elapsed time.',
        bn: 'দূরত্ব সমান বেগ গুণ সময় (distance = speed * time)।'
      },
      explanation: {
        en: 'Multiplying velocity by elapsed time (speed * dt) guarantees the character travels exactly 200 pixels over 1.0 second regardless of framerate.',
        bn: 'বেগ গুণ সময় (২০০ * dt) করলে ৬০ বা ১২০ যে কোনো এফপিএস-এ চরিত্রটি ১ সেকেন্ডে ঠিক ২০০ পিক্সেল দূরত্ব অতিক্রম করবে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-fresco-frames',
    title: {
      en: 'Canvas Animation Loops & Delta Time Quiz',
      bn: 'ক্যানভাস অ্যানিমেশন লুপ ও ডেল্টা টাইম কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-omitting-clearrect',
        kind: 'mcq',
        topic: 'Consequence of forgetting clearRect in animation loops',
        question: {
          en: 'What visual defect appears on screen if an animation loop moves a circle across the canvas without invoking ctx.clearRect?',
          bn: 'যদি কোনো অ্যানিমেশন লুপে ctx.clearRect কল না করে একটি বৃত্তকে সরানো হয়, তবে স্ক্রিনে কী ভিজ্যুয়াল সমস্যা দেখা দেবে?'
        },
        options: [
          {
            en: 'A continuous solid smear trail forms across the screen because earlier drawn circles are never erased from the bitmap',
            bn: 'স্ক্রিন জুড়ে রঙের অবিচ্ছিন্ন দাগ বা ট্রেইল তৈরি হবে কারণ আগের আঁকা বৃত্তগুলো ক্যানভাস থেকে কখনো মোছা হয়নি'
          },
          {
            en: 'The canvas becomes completely transparent and vanishes',
            bn: 'ক্যানভাস সম্পূর্ণ স্বচ্ছ হয়ে গায়েব হয়ে যাবে'
          },
          {
            en: 'The circle instantly changes color to black and white checkerboard',
            bn: 'বৃত্তটি সাথে সাথে সাদা-কালো দাবা বোর্ডের রঙ ধারণ করবে'
          },
          {
            en: 'The browser closes the active tab automatically',
            bn: 'ব্রাউজার নিজে থেকেই ট্যাব বন্ধ করে দেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Immediate-mode bitmaps retain previous drawings until erased.',
          bn: 'আগের ড্রয়িং মুছে না দিলে তা বিটম্যাপে জমতে থাকার কথা ভাবুন।'
        },
        explanation: {
          en: 'Canvas does not auto-clear. Omitting clearRect results in a solid streak of accumulated drawings along the movement path.',
          bn: 'ক্যানভাস নিজে থেকে আগের ফ্রেম মোছে না। তাই clearRect না দিলে চলাচলের পথজুড়ে দীর্ঘ দাগ থেকে যায়।'
        }
      },
      {
        id: 'q-canvas-cancelraf-purpose',
        kind: 'mcq',
        topic: 'Canceling animation frames on component unmount',
        question: {
          en: 'Why should front-end developers call cancelAnimationFrame(requestId) when unmounting a React canvas component?',
          bn: 'একটি রিঅ্যাক্ট ক্যানভাস কম্পোনেন্ট আনমাউন্ট করার সময় কেন ডেভেলপারদের cancelAnimationFrame(requestId) কল করা উচিত?'
        },
        options: [
          {
            en: 'To prevent memory leaks and stop the animation loop from continuing to consume CPU cycles in the background after the element is destroyed',
            bn: 'মেমোরি লিক রোধ করতে এবং কম্পোনেন্ট মুছে যাওয়ার পরও ব্যাকগ্রাউন্ডে অপ্রয়োজনে সিপিইউ নষ্ট হওয়া চিরতরে বন্ধ করতে'
          },
          {
            en: 'To save the current frame as a PNG file',
            bn: 'বর্তমান ফ্রেমটি পিএনজি হিসেবে সেভ করতে'
          },
          {
            en: 'To clear the browser cookies',
            bn: 'ব্রাউজারের কুকি ডিলিট করতে'
          },
          {
            en: 'To reload the HTML document',
            bn: 'ওয়েব পেজ পুনরায় রিলোড করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stops running animation loops to prevent background memory leaks.',
          bn: 'মেমোরি লিক ও ব্যাকগ্রাউন্ডে লুপ চলতে থাকা বন্ধ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Failing to cancel rAF on unmount leaves an orphaned loop running forever in memory, continuing to execute useless code.',
          bn: 'cancelAnimationFrame না দিলে কম্পোনেন্ট চলে গেলেও লুপটি মেমোরিতে ঘুরতেই থাকে এবং ডিভাইস স্লো করে।'
        }
      },
      {
        id: 'q-canvas-high-refresh-monitor-bug',
        kind: 'mcq',
        topic: 'Why games run at double speed on 120Hz displays without delta time',
        question: {
          en: 'What happens to a game where position is updated via "x += 5" when played on a 120 Hz gaming monitor instead of a 60 Hz display?',
          bn: 'যদি কোনো গেমে ডেল্টা টাইম ছাড়া "x += ৫" দিয়ে মুভমেন্ট কোড লেখা হয়, তবে ৬০ হার্টজের বদলে ১২০ হার্টজের গেমিং মনিটরে চালালে কী ঘটবে?'
        },
        options: [
          {
            en: 'The character moves at double speed because the render loop executes 120 times per second instead of 60 times',
            bn: 'চরিত্রটি দ্বিগুণ দ্রুত গতিতে ছুটবে কারণ লুপটি প্রতি সেকেন্ডে ৬০ বারের বদলে ১২০ বার রান করবে'
          },
          {
            en: 'The game freezes immediately upon launch',
            bn: 'গেম চালু হওয়ার সাথে সাথে আটকে যাবে'
          },
          {
            en: 'The character moves backwards',
            bn: 'চরিত্রটি উল্টো দিকে হাঁটা শুরু করবে'
          },
          {
            en: 'The colors invert to negative',
            bn: 'সব রঙ নেগেটিভ হয়ে যাবে'
          }
        ],
        answer: 0,
        hint: {
          en: '120 frames per second means twice as many "+= 5" additions.',
          bn: 'প্রতি সেকেন্ডে ১২০ বার যোগ হওয়া মানে গতি দ্বিগুণ হওয়া।'
        },
        explanation: {
          en: 'At 120 Hz, requestAnimationFrame fires twice as often. Fixed per-frame offsets result in double velocity on high refresh monitors.',
          bn: '১২০ হার্টজের ডিসপ্লেতে লুপ প্রতি সেকেন্ডে ১২০ বার চলে, তাই ফিক্সড সংখ্যা যোগ করলে গেম দ্বিগুণ গতিতে দৌড়ায়।'
        }
      },
      {
        id: 'q-canvas-ghost-trail-alpha',
        kind: 'mcq',
        topic: 'Creating trailing particle effects using alpha fills',
        question: {
          en: 'What technique creates fading motion blur trails behind moving particles without calling clearRect?',
          bn: 'clearRect কল না করেই চলমান কণার পেছনে হালকা মিলিয়ে যাওয়া ট্রেইল তৈরি করতে কোন কৌশল ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Drawing a full-screen rectangle on each frame with a low-opacity fillStyle (e.g. rgba(0, 0, 0, 0.1))',
            bn: 'প্রতি ফ্রেমে পুরো ক্যানভাস জুড়ে হালকা স্বচ্ছ কালারের (যেমন rgba(0, 0, 0, 0.1)) একটি চারকোনা আঁকা'
          },
          {
            en: 'Decreasing canvas width by 1 pixel every second',
            bn: 'প্রতি সেকেন্ডে ক্যানভাসের প্রস্থ ১ পিক্সেল কমানো'
          },
          {
            en: 'Setting the computer monitor brightness to 10%',
            bn: 'মনিটরের ব্রাইটনেস ১০% এ নামিয়ে দেওয়া'
          },
          {
            en: 'Switching the canvas context from 2D to WebGPU',
            bn: 'ক্যানভাসকে ২ডি থেকে ওয়েবজিপিইউতে পরিবর্তন করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Painting semi-transparent rectangles across the entire canvas each frame.',
          bn: 'প্রতি ফ্রেমে পুরো ক্যানভাসে হালকা স্বচ্ছ রঙ লেপে দেওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Layering semi-transparent fills gradually dims older pixel intensities over subsequent frames, creating organic motion trails.',
          bn: 'হালকা স্বচ্ছ কালার লেপে দিলে আগের ফ্রেমের দাগগুলো ধাপে ধাপে আবছা হয়ে অপূর্ব ট্রেইল ইফেক্ট দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pixel-vault',
    tech: 'canvas',
    title: {
      en: 'ImageData, Byte Offset Math & Pixel Manipulation',
      bn: 'ImageData, বাইট অফসেট গণিত ও পিক্সেল পরিবর্তন'
    }
  }
};
