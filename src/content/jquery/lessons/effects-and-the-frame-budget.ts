import type { Lesson } from '../../../lib/types';

export const EffectsAndTheFrameBudgetLesson: Lesson = {
  slug: 'effects-and-the-frame-budget',
  tech: 'jquery',
  title: {
    en: 'jQuery Animation, Effects & The Frame Budget',
    bn: 'জেকোয়েরি অ্যানিমেশন, ইফেক্ট ও ফ্রেম বাজেট'
  },
  summary: {
    en: 'Dynamic visual motion in early web applications was pioneered by jQuery effects. The library provides prepackaged transitions like fadeIn, slideDown, and toggle alongside a custom animate method for numeric CSS properties. Under the hood, jQuery places sequential animation steps into an internal fx execution queue. To achieve smooth rendering at 60 frames per second, the browser runtime operates with a frame budget of roughly 16 milliseconds. A 300 millisecond visual transition must complete rendering across approximately 19 individual frames without dropping below this budget. When users trigger rapid hover events, unmanaged queues cause animation accumulation, requiring cleanup via stop or finish. This lesson examines the fx animation queue, frame budget mathematics, easing functions, and hardware acceleration trade-offs.',
    bn: 'ওয়েব অ্যাপ্লিকেশনে মসৃণ ভিজ্যুয়াল অ্যানিমেশন তৈরির পথপ্রদর্শক ছিল জেকোয়েরি। লাইব্রেরিটি fadeIn, slideDown ও toggle-এর মতো প্রস্তুত ইফেক্টের পাশাপাশি যেকোনো সাংখ্যিক সিএসএস পরিবর্তনের জন্য animate মেথড সরবরাহ করে। অভ্যন্তরীণভাবে জেকোয়েরি প্রতিটি অ্যানিমেশনকে fx নামক একটি ক্রমিক কিউতে জমা করে রাখে। সেকেন্ডে ৬০ ফ্রেমের (60 FPS) মসৃণ ডিসপ্লে বজায় রাখতে ব্রাউজারকে প্রতি ফ্রেমে প্রায় ১৬ মিলিসেকেন্ডের ফ্রেম বাজেটের মধ্যে কাজ সারতে হয়। একটি ৩০০ মিলিসেকেন্ডের রূপান্তর শেষ হতে প্রায় ১৯টি ফ্রেম রেন্ডার করতে হয়, যেখানে কোনো ফ্রেম ড্রপ করা চলে না। ব্যবহারকারী দ্রুত মাউস নাড়াচাড়া করলে অ্যানিমেশন কিউ জমে বিশৃঙ্খলা সৃষ্টি হতে পারে, যা stop বা finish মেথড দিয়ে সমাধান করা হয়। এই পাঠে fx অ্যানিমেশন কিউ, ফ্রেম বাজেট গণিত, ইজিং ফাংশন এবং হার্ডওয়্যার অ্যাক্সিলারেশন বিস্তারিত বিশ্লেষণ করা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: The fx Queue & Frame Budget',
        bn: 'মূল ধারণা: এফএক্স কিউ ও ফ্রেম বাজেট'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you trigger visual animations in `jQuery`, operations do not fire simultaneously. Instead, the runtime appends each step to an element queue called `fx`, executing them consecutively until all transitions conclude.',
        bn: 'জেকোয়েরিতে যখন আপনি একাধিক অ্যানিমেশন শুরু করেন, তখন সেগুলো সব একসাথে চালু হয় না। বরং ইঞ্জিন প্রতিটি ধাপকে `fx` নামের একটি অভ্যন্তরীণ কিউতে ক্রমানুসারে সাজায় এবং একের পর এক শেষ করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The fx Animation Queue',
          def: {
            en: 'Internal FIFO queue storing pending animation callbacks and tween steps on each DOM element',
            bn: 'প্রতিটি ডম উপাদানের সাথে যুক্ত অভ্যন্তরীণ কিউ যা জমাকৃত অ্যানিমেশনগুলোকে ধারাবাহিকভাবে সম্পন্ন করে'
          }
        },
        {
          term: 'Frame Budget (16ms)',
          def: {
            en: 'The execution window per frame required to maintain 60 FPS motion without noticeable stutter or jank',
            bn: '৬০ এফপিএস মসৃণ গতির জন্য প্রতিটি ফ্রেম রেন্ডার করতে প্রয়োজনীয় প্রায় ১৬ মিলিসেকেন্ড সময়'
          }
        },
        {
          term: '$(elem).stop(clearQueue, jumpToEnd)',
          def: {
            en: 'Halts current animation; passing true clears queued animations, passing true, true jumps straight to end styles',
            bn: 'চলমান অ্যানিমেশন থামায়; প্যারামিটারে true দিলে কিউ সাফ হয় এবং true, true দিলে একবারে শেষ স্টাইলে পৌঁছে যায়'
          }
        },
        {
          term: '$(elem).finish()',
          def: {
            en: 'Stops running animation, wipes pending fx queue, and immediately applies final target styles for all queued steps',
            bn: 'সব অ্যানিমেশন থামিয়ে কিউ খালি করে এবং কিউতে থাকা সমস্ত রূপান্তরের চূড়ান্ত রূপ তৎক্ষণাৎ পর্দায় দেখায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'effects-methods-table',
      text: {
        en: 'jQuery Prepackaged Effects Suite',
        bn: 'জেকোয়েরির প্রধান অ্যানিমেশন মেথডসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Built-in jQuery Effect Methods and Animated Properties',
        bn: 'জেকোয়েরির বিল্ট-ইন ইফেক্ট মেথড এবং তাদের অ্যানিমেটেড স্টাইল'
      },
      head: [
        { en: 'Method Family', bn: 'মেথড গ্রুপ' },
        { en: 'API Methods', bn: 'মেথডসমূহ' },
        { en: 'Target CSS Properties', bn: 'যেসব প্রপার্টি অ্যানিমেট হয়' }
      ],
      rows: [
        [
          { en: 'Visibility Toggle', bn: 'ভিজিবিলিটি টগল' },
          { en: '.show(), .hide(), .toggle()', bn: '.show(), .hide(), .toggle()' },
          { en: 'Simultaneously animates height, width, and opacity down to zero, then applies display: none', bn: 'উচ্চতা, প্রস্থ এবং অপাসিটি একসাথে শূন্যে নামিয়ে display: none করে' }
        ],
        [
          { en: 'Fading Transitions', bn: 'ফেডিং রূপান্তর' },
          { en: '.fadeIn(), .fadeOut(), .fadeTo()', bn: '.fadeIn(), .fadeOut(), .fadeTo()' },
          { en: 'Animates opacity smoothly between 0 and 1 without modifying spatial element dimensions', bn: 'উপাদানের মূল আকার ঠিক রেখে শুধুমাত্র অপাসিটি ০ থেকে ১ এর মধ্যে পরিবর্তন করে' }
        ],
        [
          { en: 'Sliding Transitions', bn: 'স্লাইডিং রূপান্তর' },
          { en: '.slideUp(), .slideDown(), .slideToggle()', bn: '.slideUp(), .slideDown(), .slideToggle()' },
          { en: 'Interpolates height, padding-top, and padding-bottom with overflow set to hidden', bn: 'ওভারফ্লো হিডেন রেখে উচ্চতা এবং প্যাডিং মসৃণভাবে বাড়ায় বা কমায়' }
        ],
        [
          { en: 'Custom Properties', bn: 'কাস্টম প্রপার্টি' },
          { en: '.animate({ width: "300px" })', bn: '.animate({ width: "300px" })' },
          { en: 'Calculates numeric step interpolations on any layout dimensions, offsets, and font sizes', bn: 'যেকোনো সাংখ্যিক পরিমাপ যেমন মার্জিন, প্যাডিং বা ফন্ট সাইজের ইন্টারপোলেশন তৈরি করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: 60 FPS Frame Budget & Animation Step Calculation',
        bn: 'চালনাযোগ্য সিমুলেশন: ৬০ এফপিএস ফ্রেম বাজেট ও অ্যানিমেশন স্টেপ গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates frame budgets for a standard 60 FPS display, computing the roughly 16 millisecond allotment and the 19 frames rendered during a 300 millisecond transition:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি স্ট্যান্ডার্ড ৬০ এফপিএস ডিসপ্লের জন্য প্রায় ১৬ মিলিসেকেন্ডের বাজেট এবং একটি ৩০০ মিলিসেকেন্ডের অ্যানিমেশনে উৎপন্ন ১৯টি ফ্রেমের হিসাব দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'jquery-effects-sim',
      lang: 'javascript',
      code: `// jQuery Animation Frame Budget & Queue Timing Simulation
const targetFps = 60; // 60 FPS standard display target
const frameBudgetMs = 16; // 16 milliseconds per frame (1000ms / 60 frames = 16.67ms)
const animDurationMs = 300; // 300ms animation duration
const framesRendered = Math.round(animDurationMs / frameBudgetMs); // 19 animation frames

console.log('Target frame rate for smooth visual rendering:', targetFps);
// -> Target frame rate for smooth visual rendering: 60

console.log('Frame execution budget in milliseconds per frame:', frameBudgetMs);
// -> Frame execution budget in milliseconds per frame: 16

console.log('Total animation duration in milliseconds:', animDurationMs);
// -> Total animation duration in milliseconds: 300

console.log('Estimated frames rendered across the transition duration:', framesRendered);
// -> Estimated frames rendered across the transition duration: 19`,
      caption: {
        en: 'Figure 1: Rendering at 60 FPS requires a frame budget of 16 ms, yielding 19 frames during a 300 ms animation',
        bn: 'চিত্র ১: ৬০ এফপিএসে প্রতি ফ্রেমে ১৬ মিলিসেকেন্ডের বাজেট পাওয়া যায়, ফলে ৩০০ মিলিসেকেন্ডের ট্রানজিশনে ১৯টি ফ্রেম রেন্ডার হয়'
      }
    },
    {
      type: 'heading',
      id: 'animation-jank-guide',
      text: {
        en: 'Preventing Animation Accumulation & Jank',
        bn: 'অ্যানিমেশন কিউ জ্যাম ও জ্যাঙ্ক প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When users hover a mouse back and forth across a menu, jQuery queues every slideDown and slideUp consecutively. Unless cleared, the menu continues opening and closing long after the user stops hovering.',
        bn: 'ব্যবহারকারী যখন দ্রুত মেনুর ওপর মাউস নাড়াচাড়া করেন, জেকোয়েরি প্রতিটি slideDown এবং slideUp কিউতে জমা করে। এটি বন্ধ না করলে ব্যবহারকারী মাউস সরিয়ে নেওয়ার পরেও মেনুটি একা একাই খুলতে ও বন্ধ হতে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '$(elem).stop(true, false)',
          def: {
            en: 'Clears all queued animations immediately and freezes the element at its current mid-animation position',
            bn: 'কিউতে জমে থাকা সব অ্যানিমেশন মুছে ফেলে উপাদানটিকে তার বর্তমান ট্রানজিশন অবস্থায় থামিয়ে দেয়'
          }
        },
        {
          term: '$(elem).stop(true, true)',
          def: {
            en: 'Clears the queue and instantly snaps the element to the final destination values of the active animation',
            bn: 'কিউ খালি করার পাশাপাশি চলমান অ্যানিমেশনের চূড়ান্ত লক্ষ্যে উপাদানটিকে তৎক্ষণাৎ পৌঁছে দেয়'
          }
        },
        {
          term: 'CSS Transitions vs jQuery Animate',
          def: {
            en: 'CSS transitions execute on the browser compositor thread via GPU; jQuery.animate runs on the main thread via timer ticks',
            bn: 'সিএসএস ট্রানজিশন জিপিইউ দিয়ে ব্রাউজার কম্পোজিটরে চলে; কিন্তু জেকোয়েরি অ্যানিমেশন মেইন থ্রেডে টাইমার দিয়ে চালিত হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'jquery-frame-budget-calc-ex',
      kind: 'mcq',
      topic: 'Frame budget calculation for 60 FPS motion',
      question: {
        en: 'According to our performance calculations, approximately what is the maximum frame budget in milliseconds to sustain 60 FPS animation without visual jank?',
        bn: 'আমাদের পারফরম্যান্স হিসাব অনুযায়ী স্ক্রিনে কোনো রকম জ্যাঙ্ক ছাড়া ৬০ এফপিএস অ্যানিমেশন বজায় রাখতে প্রতি ফ্রেমে সর্বোচ্চ প্রায় কত মিলিসেকেন্ডের বাজেট পাওয়া যায়?'
      },
      options: [
        {
          en: '16 milliseconds per frame',
          bn: 'প্রতি ফ্রেমে প্রায় ১৬ মিলিসেকেন্ড'
        },
        {
          en: '100 milliseconds',
          bn: '১০০ মিলিসেকেন্ড'
        },
        {
          en: '60 milliseconds',
          bn: '৬০ মিলিসেকেন্ড'
        },
        {
          en: '1 millisecond',
          bn: '১ মিলিসেকেন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: '1000ms divided by 60 frames is roughly 16.6ms (16ms budget).',
        bn: '১০০০ মিলিসেকেন্ডকে ৬০ দিয়ে ভাগ করলে প্রায় ১৬ মিলিসেকেন্ড পাওয়া যায়।'
      },
      explanation: {
        en: '1000 milliseconds divided by 60 frames yields approximately 16.67 milliseconds (budgeted at roughly 16 ms).',
        bn: '১ সেকেন্ড বা ১০০০ মিলিসেকেন্ডকে ৬০ ফ্রেম দিয়ে ভাগ করলে প্রতি ফ্রেমের জন্য প্রায় ১৬ মিলিসেকেন্ড বাজেট মেলে।'
      }
    },
    {
      id: 'jquery-stop-true-true-ex',
      kind: 'mcq',
      topic: 'Behavior of .stop(true, true)',
      question: {
        en: 'What occurs when an application executes $(menu).stop(true, true) on an animating element?',
        bn: 'অ্যানিমেশন চলাকালীন $(menu).stop(true, true) কল করলে উপাদানটির কী ঘটে?'
      },
      options: [
        {
          en: 'It empties all remaining animations in the fx queue and immediately snaps the element to its final target destination values',
          bn: 'এটি কিউতে জমে থাকা বাকি সব অ্যানিমেশন খালি করে দেয় এবং উপাদানটিকে তার কাঙ্ক্ষিত চূড়ান্ত মানে এক নিমেষে বসিয়ে দেয়'
        },
        {
          en: 'It reverses the animation backwards to zero',
          bn: 'এটি অ্যানিমেশন উল্টো দিকে ঘুরিয়ে দেয়'
        },
        {
          en: 'It deletes the element from the DOM',
          bn: 'এটি ডম থেকে উপাদানটি মুছে ফেলে'
        },
        {
          en: 'It restarts the animation from the beginning',
          bn: 'এটি শুরু থেকে আবার অ্যানিমেশন চালু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'First true clears queue; second true jumps to final end state.',
        bn: 'প্রথম ট্রু কিউ খালি করে আর দ্বিতীয় ট্রু চূড়ান্ত লক্ষ্যে পৌঁছে দেয়।'
      },
      explanation: {
        en: 'stop(clearQueue: true, jumpToEnd: true) purges waiting animations and advances styles straight to completion.',
        bn: 'stop(true, true) অপেক্ষমাণ অ্যানিমেশন মুছে ফেলে এবং চলমান অ্যানিমেশনের শেষ মানে তৎক্ষণাৎ লাফিয়ে যায়।'
      }
    },
    {
      id: 'jquery-hover-queue-buildup-ex',
      kind: 'mcq',
      topic: 'Solution to animation queue buildup on rapid mouse hover',
      question: {
        en: 'How can a developer prevent the "bouncing menu" bug caused by rapid mouse hover events in jQuery?',
        bn: 'জেকোয়েরিতে দ্রুত মাউস নাড়াচাড়ার কারণে মেনু বারবার ওঠা-নামা করার ত্রুটি কীভাবে প্রতিরোধ করা যায়?'
      },
      options: [
        {
          en: 'Call $(elem).stop(true, false) or $(elem).stop(true, true) before initiating each new slideDown or slideUp animation',
          bn: 'প্রতিটি নতুন slideDown বা slideUp শুরুর আগে $(elem).stop(true, false) কল করে কিউ থামিয়ে নেওয়া'
        },
        {
          en: 'Disable the user mouse pointer with CSS',
          bn: 'মাউস পয়েন্টার বন্ধ করে দেওয়া'
        },
        {
          en: 'Increase the animation duration to 5000 milliseconds',
          bn: 'অ্যানিমেশনের সময় বাড়িয়ে ৫০০০ মিলিসেকেন্ড করা'
        },
        {
          en: 'Use a while-loop to lock the browser window',
          bn: 'লুপ দিয়ে ব্রাউজার আটকে রাখা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calling .stop() before animating clears pending queue backlog.',
        bn: 'নতুন অ্যানিমেশন শুরুর আগে stop() দিয়ে জমে থাকা কিউ পরিষ্কার করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Calling .stop() before .slideDown() or .slideUp() clears prior queued transitions, keeping UI responsive.',
        bn: 'নতুন ইফেক্ট শুরুর ঠিক আগে stop() কল করলে জমে থাকা কিউ পরিষ্কার হয়ে ইন্টারফেস স্বাভাবিক আচরণ করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-effects-and-frame-budget',
    title: {
      en: 'jQuery Animation & Frame Budget Quiz',
      bn: 'জেকোয়েরি অ্যানিমেশন ও ফ্রেম বাজেট কুইজ'
    },
    questions: [
      {
        id: 'q-jquery-animate-limitations',
        kind: 'mcq',
        topic: 'Properties supported by jQuery .animate()',
        question: {
          en: 'Which types of CSS properties can be animated out-of-the-box using standard jQuery .animate() without plugins?',
          bn: 'কোনো প্লাগইন ছাড়া সাধারণ জেকোয়েরি .animate() দিয়ে কোন ধরনের সিএসএস প্রপার্টি অ্যানিমেট করা যায়?'
        },
        options: [
          {
            en: 'Properties accepting numeric values with units, such as width, height, opacity, and margin',
            bn: 'যেসব প্রপার্টিতে এককসহ সাংখ্যিক মান থাকে যেমন width, height, opacity এবং margin'
          },
          {
            en: 'Color transitions like background-color and border-color',
            bn: 'ব্যাকগ্রাউন্ডের রঙের রূপান্তর'
          },
          {
            en: '3D CSS matrix transforms',
            bn: 'থ্রিডি সিএসএস ম্যাট্রিক্স ট্রান্সফর্ম'
          },
          {
            en: 'Font family and text shadow',
            bn: 'ফন্ট ফ্যামিলি ও শ্যাডো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Only numeric properties can be mathematically interpolated natively.',
          bn: 'শুধুমাত্র সাংখ্যিক মান সম্পন্ন প্রপার্টি সহজে ইন্টারপোলেট করা যায়।'
        },
        explanation: {
          en: 'Native jQuery animate only interpolates single numeric values. Color transitions require the jQuery Color plugin.',
          bn: 'জেকোয়েরির সাধারণ অ্যানিমেট কেবল সংখ্যাভিত্তিক মান পরিবর্তন করতে পারে; রঙ পরিবর্তন করতে আলাদা প্লাগইন প্রয়োজন হয়।'
        }
      },
      {
        id: 'q-jquery-finish-vs-stop',
        kind: 'mcq',
        topic: 'Difference between .stop() and .finish()',
        question: {
          en: 'How does $(elem).finish() differ from $(elem).stop(true, true)?',
          bn: '$(elem).finish() এবং $(elem).stop(true, true)-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: '.finish() causes all queued animations to immediately jump to their respective final states, whereas .stop(true, true) only completes the currently active animation',
            bn: '.finish() কিউতে থাকা সমস্ত অ্যানিমেশনকে যার যার শেষ লক্ষ্যে নিমেষে পৌঁছে দেয়, যেখানে .stop(true, true) কেবল চলমান অ্যানিমেশনটি সম্পন্ন করে'
          },
          {
            en: '.finish() closes the tab',
            bn: '.finish() ট্যাব বন্ধ করে'
          },
          {
            en: '.finish() repeats the animation forever',
            bn: '.finish() আজীবন অ্যানিমেশন চালায়'
          },
          {
            en: 'Both methods are exact synonyms',
            bn: 'উভয় মেথড অবিকল একই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'finish() applies end styles for ALL animations queued; stop(true, true) only finishes the active one.',
          bn: 'finish কিউয়ের সব কটির সমাপ্তি ঘটায় আর stop শুধু বর্তমানটির সমাপ্তি টানে।'
        },
        explanation: {
          en: '.finish() resolves all future queued animations instantaneously, applying their ultimate target styles.',
          bn: '.finish() কিউতে জমে থাকা ভবিষ্যতের সমস্ত অ্যানিমেশনের চূড়ান্ত রূপ পর্দায় ফুটিয়ে তোলে।'
        }
      },
      {
        id: 'q-jquery-easing-modes',
        kind: 'mcq',
        topic: 'Default easing functions in jQuery',
        question: {
          en: 'Which two easing modes are built natively into jQuery core without external easing libraries?',
          bn: 'বাইরের কোনো লাইব্রেরি ছাড়া জেকোয়েরির মূল কোরে কোন দুটি ইজিং মোড বিল্ট-ইন থাকে?'
        },
        options: [
          {
            en: '"swing" (default ease-in-out) and "linear"',
            bn: '"swing" (ডিফল্ট সহজ শুরু ও শেষ) এবং "linear"'
          },
          {
            en: '"bounce" and "elastic"',
            bn: '"bounce" এবং "elastic"'
          },
          {
            en: '"ease-in-expo" and "spring"',
            bn: '"ease-in-expo" এবং "spring"'
          },
          {
            en: '"step-start" and "step-end"',
            bn: '"step-start" এবং "step-end"'
          }
        ],
        answer: 0,
        hint: {
          en: 'jQuery bundles swing and linear.',
          bn: 'জেকোয়েরি কোর swing এবং linear সরবরাহ করে।'
        },
        explanation: {
          en: 'jQuery includes swing (default) and linear natively. Advanced easing curves require jQuery UI or CSS transitions.',
          bn: 'জেকোয়েরি কোরে শুধুমাত্র swing এবং linear অন্তর্ভুক্ত থাকে; বাউন্স বা ইলাস্টিকের জন্য প্লাগইন প্রয়োজন হয়।'
        }
      },
      {
        id: 'q-jquery-css-vs-js-perf',
        kind: 'mcq',
        topic: 'Performance advantage of CSS transitions over jQuery animate',
        question: {
          en: 'Why do modern web standards prefer CSS transitions and transforms over jQuery .animate() for layout motion?',
          bn: 'আধুনিক ওয়েবে লেআউট অ্যানিমেশনের জন্য কেন জেকোয়েরি .animate()-এর চেয়ে সিএসএস ট্রানজিশন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'CSS transforms run off the main JavaScript thread via GPU hardware acceleration, avoiding layout reflows and timer stutter',
            bn: 'সিএসএস ট্রান্সফর্ম জিপিইউ হার্ডওয়্যার অ্যাক্সিলারেশনের মাধ্যমে মূল জাভাস্ক্রিপ্ট থ্রেডের বাইরে চলে, যা রিফ্লো ও ফ্রেম ড্রপ রোধ করে'
          },
          {
            en: 'CSS animations only work on Apple computers',
            bn: 'সিএসএস কেবল অ্যাপল কম্পিউটারে কাজ করে'
          },
          {
            en: 'jQuery animate requires paying a software license fee',
            bn: 'জেকোয়েরি চালাতে লাইসেন্স ফি দিতে হয়'
          },
          {
            en: 'CSS files are always smaller than 1 kilobyte',
            bn: 'সিএসএস ফাইল সব সময় ১ কিলোবাইটের নিচে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CSS GPU acceleration keeps animations off the busy main JS thread.',
          bn: 'জিপিইউ অ্যাক্সিলারেশন মেইন জাভাস্ক্রিপ্ট থ্রেডকে মুক্ত রাখে।'
        },
        explanation: {
          en: 'CSS transform animations execute on the GPU compositor thread without triggering CPU-bound reflows on the main thread.',
          bn: 'সিএসএস ট্রান্সফর্ম জিপিইউ কম্পোজিটরে রেন্ডার হয় বলে মেইন থ্রেড কোনো বাধার সম্মুখীন না হয়ে মসৃণ ৬০ এফপিএস দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'ajax-and-the-jsonp-toll',
    tech: 'jquery',
    title: {
      en: 'AJAX, Shorthand Methods & Cross-Domain Requests',
      bn: 'অ্যাজাক্স, সংক্ষিপ্ত মেথড ও ক্রস-ডোমেইন রিকোয়েস্ট'
    }
  }
};
