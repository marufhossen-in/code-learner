import type { Lesson } from '../../../lib/types';

export const LenisAndSmoothScrollLesson: Lesson = {
  slug: 'lenis-and-smooth-scroll',
  tech: 'gsap',
  title: {
    en: 'Lenis Smooth Scroll & GSAP ScrollTrigger Integration — Awwwards-Level Smoothness',
    bn: 'লেনিস স্মুথ স্ক্রোল ও GSAP স্ক্রোল-ট্রিগার ইন্টিগ্রেশন — আন্তর্জাতিক মানের মসৃণতা'
  },
  summary: {
    en: 'Visit any Awwwards Site of the Year winner and you immediately notice a distinct tactile sensation: the page glides with luxurious, inertial momentum. Native mouse wheels scroll in chunky 100-pixel increments, producing visible visual stutter during ScrollTrigger animations. Legacy smooth scroll libraries (like Locomotive Scroll) broke native browser accessibility, text search (Ctrl+F), and URL hash navigation by hiding the native window scroller inside an overflow: hidden container. Lenis (crafted by Studio Freight) revolutionizes smooth scrolling by keeping native scroll completely intact while interpolating scroll progress via linear interpolation (LERP). Integrating Lenis with GSAP ticker (gsap.ticker.add) and calling ScrollTrigger.update on every frame synchronizes pin positions and scrubbed transforms with zero lag.',
    bn: 'আন্তর্জাতিক অ্যাওয়ার্ড-বিজয়ী সেরা ওয়েবসাইটগুলোতে ঢুকলেই একটি অসাধারণ মসৃণ অনুভূতি চোখে পড়ে: স্ক্রোলটি মাখনের মতো এক অনন্য জড়তায় এগিয়ে চলে। সাধারণ মাউস হুইল ১০০ পিক্সেল করে ঝাঁকুনি দিয়ে স্ক্রোল করে, যা স্ক্রোল-ট্রিগার অ্যানিমেশনে কাঁপুনি তৈরি করে। পুরনো লাইব্রেরিগুলো (যেমন লোকোমোটিভ স্ক্রোল) পেজের নিজস্ব স্ক্রোলবার লুকিয়ে ফেলে অ্যাক্সেসিবিলিটি এবং সার্চ (Ctrl+F) নষ্ট করত। লেনিস (Lenis) ব্রাউজারের স্বাভাবিক স্ক্রোল অক্ষুণ্ণ রেখে লিনিয়ার ইন্টারপোলেশন (LERP)-এর মাধ্যমে স্ক্রোলকে অত্যন্ত মসৃণ করে। GSAP টিকারে লেনিসকে যুক্ত করে এবং প্রতি ফ্রেমে ScrollTrigger.update চালিয়ে পিনিং ও স্ক্রাবিং সম্পূর্ণ শূন্য-ল্যাগে নিখুঁত করা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Evolution of Web Smooth Scrolling',
        bn: 'মূল ধারণা: ওয়েব স্মুথ স্ক্রোলিংয়ের ক্রমবিকাশ'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'Physical trackpads on modern laptops provide fluid hardware scrolling. However, desktop mechanical mouse wheels fire coarse discrete notch events (typically 100px per notch). This causes jarring jumps when users scroll through scrubbed timelines. Lenis intercepts these discrete scroll deltas and applies a mathematical dampening equation to glide toward target positions smoothly.',
        bn: 'আধুনিক ল্যাপটপের ট্র্যাকপ্যাডে স্বাভাবিকভাবেই মসৃণ স্ক্রোল হয়। কিন্তু ডেস্কটপের মাউস হুইলে ঘুরলে প্রতি ক্লিকে প্রায় ১০০ পিক্সেলের একটি বড় ঝাঁকুনি ঘটে। এর ফলে স্ক্রোল-ট্রিগার অ্যানিমেশনগুলো মসৃণ না হয়ে কেঁপে কেঁপে চলে। লেনিস এই বিচ্ছিন্ন গতিকে ধরে লিনিয়ার ইন্টারপোলেশনের মাধ্যমে একটি ধারাবাহিক মসৃণ প্রবাহে রূপান্তর করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Lenis',
          def: {
            en: 'A lightweight modern smooth scroll library preserving native browser accessibility, text selection, and URL hash navigation',
            bn: 'একটি আধুনিক স্মুথ স্ক্রোল লাইব্রেরি যা ব্রাউজারের স্বাভাবিক স্ক্রোলবার ও অ্যাক্সেসিবিলিটি ঠিক রেখে মসৃণ গতি দেয়'
          }
        },
        {
          term: 'Linear Interpolation (LERP)',
          def: {
            en: 'A mathematical formula smoothly bridging current position to target destination by a fractional step factor each frame',
            bn: 'একটি গাণিতিক সূত্র যা প্রতি ফ্রেমে বর্তমান অবস্থান থেকে লক্ষ্যের দিকে নির্দিষ্ট ভগ্নাংশ হারে এগিয়ে যায়'
          }
        },
        {
          term: 'GSAP Ticker Synchronization',
          def: {
            en: 'Driving Lenis requestAnimationFrame loop directly inside gsap.ticker.add to eliminate desynchronization micro-jitters',
            bn: 'GSAP-এর নিজস্ব রেন্ডার টিকারে লেনিসকে সংযুক্ত করা যাতে কোনো প্রকার ফ্রেম অমিল বা ল্যাগ না থাকে'
          }
        },
        {
          term: 'lagSmoothing(0)',
          def: {
            en: 'Disabling GSAP lag smoothing heuristic so that ScrollTrigger pin calculations align with smooth virtual scroll positions',
            bn: 'GSAP-এর কৃত্রিম ল্যাগ স্মুথিং বন্ধ রাখা যাতে পিনিং ক্যালকুলেশন ভার্চুয়াল স্ক্রোলের সাথে নিখুঁতভাবে মেলে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'integration-architecture',
      text: {
        en: 'The Golden Integration Pattern: Lenis + GSAP ScrollTrigger',
        bn: 'সুবর্ণ ইন্টিগ্রেশন প্যাটার্ন: লেনিস ও GSAP স্ক্রোল-ট্রিগার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Connecting smooth virtual scrolling with GSAP requires three coordinated steps. First, instantiate the scroller with custom damping (const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })). Second, bind its scroll callback directly to ScrollTrigger (lenis.on("scroll", ScrollTrigger.update)). Third, feed time from the ticker into the instance via gsap.ticker.add((time) => lenis.raf(time * 1000)) and disable lag smoothing with gsap.ticker.lagSmoothing(0). This guarantees that pinned elements never jitter.',
        bn: 'ভার্চুয়াল স্ক্রোলিংয়ের সাথে GSAP-এর মেলবন্ধন ঘটাতে ৩টি ধাপ অনুসরণ করতে হয়। প্রথমত, নির্দিষ্ট ড্যাম্পিং সহ স্ক্রোলার তৈরি করুন (const lenis = new Lenis({ lerp: 0.1, smoothWheel: true }))। দ্বিতীয়ত, এর স্ক্রোল ইভেন্টে ScrollTrigger.update কল করুন। তৃতীয়ত, টিকারে এর রেন্ডার যুক্ত করুন (gsap.ticker.add((time) => lenis.raf(time * 1000))) এবং gsap.ticker.lagSmoothing(0) দিয়ে বাড়তি ল্যাগ বন্ধ করুন। এটি পিন করা উপাদানের কাঁপুনি পুরোপুরি বন্ধ করে দেয়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Legacy Virtual Scroll vs Modern Lenis Smooth Scroll',
        bn: 'পুরনো ভার্চুয়াল স্ক্রোল বনাম আধুনিক লেনিস স্ক্রোল'
      },
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'Legacy (Locomotive Scroll)', bn: 'পুরনো (লোকোমোটিভ স্ক্রোল)' },
        { en: 'Modern Lenis Architecture', bn: 'আধুনিক লেনিস আর্কিটেকচার' }
      ],
      rows: [
        [
          { en: 'Native Scrollbar & Accessibility', bn: 'স্বাভাবিক স্ক্রোলবার ও অ্যাক্সেসিবিলিটি' },
          { en: 'Broken; hides window scroll inside overflow: hidden container', bn: 'নষ্ট; পুরো উইন্ডোকে overflow: hidden বক্সে আটকে রাখে' },
          { en: '100% native window scrolling; keyboard, screen readers, and Ctrl+F work', bn: '১০০% স্বাভাবিক উইন্ডো স্ক্রোল; কিবোর্ড ও টেক্সট সার্চ নিখুঁত থাকে' }
        ],
        [
          { en: 'ScrollTrigger Compatibility', bn: 'স্ক্রোল-ট্রিগার সামঞ্জস্য' },
          { en: 'Requires complex scrollerProxy proxying; frequently desyncs', bn: 'জটিল scrollerProxy কনফিগার করতে হয় এবং প্রায়ই ল্যাগ করে' },
          { en: 'Native window listener binding with single-line ScrollTrigger.update', bn: 'মাত্র এক লাইনে সরাসরি উইন্ডো স্ক্রোলের সাথে নিখুঁত সিঙ্ক' }
        ],
        [
          { en: 'Mobile Performance', bn: 'মোবাইল পারফরম্যান্স' },
          { en: 'Heavy JavaScript overhead; stuttering touch interactions', bn: 'ভারী কোড; মোবাইলে হাত দিয়ে সোয়াইপ করলে কাঁপুনি হয়' },
          { en: 'Zero mobile overhead; automatically delegates to native touch scrolling', bn: 'মোবাইলে বাড়তি চাপ নেই; স্বাভাবিক নেটিভ টাচ স্ক্রোলিং সচল রাখে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Lenis LERP Interpolation Math',
        bn: 'চালনাযোগ্য সিমুলেশন: লেনিস LERP ইন্টারপোলেশন গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script implements the core Linear Interpolation equation used by Lenis, demonstrating how a sudden 500 pixel scroll impulse from position 100 to target 600 glides across 5 frames with lerp factor 0.1:',
        bn: 'নিচের স্ক্রিপ্টটি লেনিসের লিনিয়ার ইন্টারপোলেশন সূত্রটি চালায় এবং দেখায় কীভাবে ৫০০ পিক্সেলের দূরত্বে ১০০ থেকে ৬০০ পিক্সেলে মাউস স্ক্রোল করলে ০.১ ফ্যাক্টরে ৫ ফ্রেম ধরে ধীরে ধীরে পৌঁছায়:'
      }
    },
    {
      type: 'code',
      id: 'gsap-lenis-sim',
      lang: 'javascript',
      code: `// Lenis Smooth Scroll LERP (Linear Interpolation) Simulator

// Target destination after mouse wheel notch: 600px
const targetY = 600;

// Current resting position: 100px
let currentY = 100;

// Standard Lenis damping factor: 0.1 (moves 10% of remaining distance each frame)
const lerpFactor = 0.1;

// Simulate 5 frames of Lenis requestAnimationFrame
for (let step = 1; step <= 5; step++) {
  // LERP formula: current = current + (target - current) * factor
  currentY += (targetY - currentY) * lerpFactor;
}

console.log('Target destination scroll position in pixels:', targetY);
// -> Target destination scroll position in pixels: 600

console.log('Interpolated scroll position after 5 Lenis lerp frames:', Number(currentY.toFixed(2)));
// -> Interpolated scroll position after 5 Lenis lerp frames: 304.75

console.log('Standard Lenis dampening smoothing multiplier factor:', lerpFactor);
// -> Standard Lenis dampening smoothing multiplier factor: 0.1`,
      caption: {
        en: 'Figure 7: A jump to 600px glides smoothly through 304.75px after 5 frames with lerp factor 0.1',
        bn: 'চিত্র ৭: ৬০০ পিক্সেলে পৌঁছানোর যাত্রায় ০.১ ফ্যাক্টরে ৫ ফ্রেম পরে অবস্থান দাঁড়ায় ৩০৪.৭৫ পিক্সেলে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Lenis and Smooth Scroll',
        bn: 'লেনিস ও স্মুথ স্ক্রোলের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules to deliver buttery 120FPS smooth scrolling without breaking web usability:',
        bn: '১২০ এফপিএসের নিখুঁত মসৃণ স্ক্রোল পেতে এই ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Add lenis.raf to gsap.ticker',
          def: {
            en: 'Drive Lenis updates inside gsap.ticker.add((time) => lenis.raf(time * 1000)) to guarantee identical frame timing',
            bn: 'একই টাইমিং বজায় রাখতে GSAP টিকারে লেনিসের রেন্ডার যুক্ত করুন'
          }
        },
        {
          term: 'Rule 2: Disable GSAP lagSmoothing',
          def: {
            en: 'Call gsap.ticker.lagSmoothing(0) so GSAP does not artificially jump time during smooth virtual scrolling',
            bn: 'ভার্চুয়াল স্ক্রোলিং চলাকালীন সময়ের আকস্মিক পরিবর্তন ঠেকাতে lagSmoothing বন্ধ রাখুন'
          }
        },
        {
          term: 'Rule 3: Keep Default Lerp Between 0.08 and 0.12',
          def: {
            en: 'Setting lerp below 0.05 feels like swimming in heavy molasses; keeping it around 0.1 feels luxurious yet responsive',
            bn: 'লার্প ০.০৫ এর নিচে দিলে স্ক্রোল অতিরিক্ত ভারী লাগে; ০.১ রাখা সবচেয়ে দৃষ্টিনন্দন ও স্বাভাবিক'
          }
        },
        {
          term: 'Rule 4: Call lenis.destroy() on Component Unmount',
          def: {
            en: 'Always invoke lenis.destroy() and remove ticker callbacks when unmounting page components in Single Page Apps',
            bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে পেজ বদলালে lenis.destroy() দিয়ে রিসোর্স খালি করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-lerp-calc-ex',
      kind: 'mcq',
      topic: 'Single step Linear Interpolation calculation',
      question: {
        en: 'If current scroll is 100px and target scroll is 600px, what is the new position after 1 LERP step with factor 0.1?',
        bn: 'বর্তমান স্ক্রোল ১০০ পিক্সেল এবং লক্ষ্য ৬০০ পিক্সেল হলে, ০.১ ফ্যাক্টরে ১ ধাপ LERP-এর পর নতুন অবস্থান কত?'
      },
      options: [
        {
          en: '150 pixels (100 + (600 - 100) * 0.1)',
          bn: '১৫০ পিক্সেল (১০০ + (৬০০ - ১০০) * ০.১)'
        },
        {
          en: '600 pixels (instant snap)',
          bn: '৬০০ পিক্সেল (তাৎক্ষণিক পৌঁছানো)'
        },
        {
          en: '100 pixels (no movement)',
          bn: '১০০ পিক্সেল (কোনো নড়াচড়া নেই)'
        },
        {
          en: '350 pixels',
          bn: '৩৫০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: '100 + 500 * 0.1 = 100 + 50 = 150.',
        bn: '১০০ + ৫০০ * ০.১ = ১০০ + ৫০ = ১৫০।'
      },
      explanation: {
        en: 'Remaining distance is 600 - 100 = 500; multiplying by 0.1 gives 50px of movement, reaching 150px.',
        bn: 'অবশিষ্ট দূরত্ব ৬০০ - ১০০ = ৫০০; ০.১ দিয়ে গুণ করলে ৫০ পিক্সেল বাড়ে, ফলে নতুন অবস্থান হয় ১৫০ পিক্সেল।'
      }
    },
    {
      id: 'gsap-lagsmoothing-zero-ex',
      kind: 'mcq',
      topic: 'Why gsap.ticker.lagSmoothing(0) is required',
      question: {
        en: 'Why is calling gsap.ticker.lagSmoothing(0) recommended when integrating Lenis with ScrollTrigger?',
        bn: 'ScrollTrigger-এর সাথে লেনিস যুক্ত করার সময় gsap.ticker.lagSmoothing(0) কল করা কেন বাঞ্ছনীয়?'
      },
      options: [
        {
          en: 'It stops GSAP from inserting artificial time jumps during frame-rate fluctuations, keeping ScrollTrigger pin coordinates locked with Lenis',
          bn: 'এটি ফ্রেমের ওঠানামায় সময়ের কৃত্রিম লাফ বন্ধ রাখে, ফলে পিন করা অবজেক্টের কাঁপুনি দূর হয়'
        },
        {
          en: 'It disables all audio on the website',
          bn: 'এটি ওয়েবসাইটের সমস্ত শব্দ বন্ধ করে দেয়'
        },
        {
          en: 'It reduces the battery consumption of the monitor',
          bn: 'এটি মনিটরের ব্যাটারি খরচ কমায়'
        },
        {
          en: 'It forces the browser to reload the page',
          bn: 'এটি পেজ পুনরায় লোড করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Eliminating artificial time skips during virtual scroll.',
        bn: 'ভার্চুয়াল স্ক্রোলে সময়ের কৃত্রিম লাফ দূর করার কথা ভাবুন।'
      },
      explanation: {
        en: 'lagSmoothing tries to prevent animation jumps by freezing time during heavy CPU tasks; with virtual scrolling, this causes pin stutter.',
        bn: 'lagSmoothing ভারী কাজে সময় থামিয়ে ফ্রেম ঠিক করার চেষ্টা করে; কিন্তু ভার্চুয়াল স্ক্রোলে এটি পিনিংয়ে মারাত্মক কাঁপুনি সৃষ্টি করে।'
      }
    },
    {
      id: 'gsap-lenis-accessibility-ex',
      kind: 'mcq',
      topic: 'Lenis preservation of native browser accessibility',
      question: {
        en: 'What fundamental architectural advantage does Lenis possess over older libraries like Locomotive Scroll?',
        bn: 'লোকোমোটিভ স্ক্রোলের মতো পুরনো লাইব্রেরির তুলনায় লেনিসের সবচেয়ে বড় সুবিধা কোনটি?'
      },
      options: [
        {
          en: 'Lenis leaves native window scrolling intact, preserving browser find (Ctrl+F), keyboard accessibility, and native mobile touch',
          bn: 'লেনিস সাধারণ উইন্ডো স্ক্রোলিং স্বাভাবিক রাখে, ফলে টেক্সট সার্চ (Ctrl+F), কিবোর্ড অ্যাক্সেস ও মোবাইল টাচ অক্ষুণ্ণ থাকে'
        },
        {
          en: 'Lenis converts all websites into WebGL 3D video games',
          bn: 'লেনিস সব সাইটকে 3D ভিডিও গেমে বদলে দেয়'
        },
        {
          en: 'Lenis eliminates all network latency across the internet',
          bn: 'লেনিস ইন্টারনেটের সব ল্যাটেন্সি মুছে ফেলে'
        },
        {
          en: 'Lenis encrypts user passwords with military security',
          bn: 'লেনিস পাসওয়ার্ড এনক্রিপ্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Preserves native browser window scrolling.',
        bn: 'স্বাভাবিক ব্রাউজার উইন্ডো স্ক্রোলিং ঠিক রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'Older libraries hid the root scroller in overflow: hidden, breaking browser features; Lenis smoothly dampens the real window scroller.',
        bn: 'পুরনো লাইব্রেরি উইন্ডো স্ক্রোল লুকিয়ে ব্রাউজারের স্বাভাবিক ক্ষমতা নষ্ট করত; লেনিস আসল উইন্ডো স্ক্রোলারকেই মসৃণ করে তোলে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-lenis-smooth-scroll',
    title: {
      en: 'Lenis & Smooth Scrolling Architecture Quiz',
      bn: 'লেনিস ও স্মুথ স্ক্রোলিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-lenis-ticker',
        kind: 'mcq',
        topic: 'Driving Lenis via gsap.ticker',
        question: {
          en: 'How do you correctly drive the Lenis requestAnimationFrame loop using the GSAP ticker?',
          bn: 'GSAP টিকারে কীভাবে সঠিকভাবে লেনিসের রেন্ডার লুপ চালাতে হয়?'
        },
        options: [
          {
            en: 'gsap.ticker.add((time) => lenis.raf(time * 1000))',
            bn: 'gsap.ticker.add((time) => lenis.raf(time * 1000))'
          },
          {
            en: 'setInterval(lenis.raf, 10)',
            bn: 'setInterval(lenis.raf, 10)'
          },
          {
            en: 'document.addEventListener("scroll", lenis.raf)',
            bn: 'document.addEventListener("scroll", lenis.raf)'
          },
          {
            en: 'window.setTimeout(lenis.destroy, 1000)',
            bn: 'window.setTimeout(lenis.destroy, 1000)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use gsap.ticker.add passing milliseconds to lenis.raf.',
          bn: 'gsap.ticker.add ব্যবহার করে মিলিসেকেন্ড মান পাঠানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Passing GSAP ticker time into lenis.raf synchronizes both animation engines onto the exact same microsecond hardware tick.',
          bn: 'GSAP টিকারে সময় পাঠালে উভয় ইঞ্জিন হুবহু একই মাইক্রো-সেকেন্ডে সমন্বিত হয়ে ফ্রেম ল্যাগ শূন্য করে দেয়।'
        }
      },
      {
        id: 'q-gsap-lerp-factor',
        kind: 'mcq',
        topic: 'Selecting the optimal LERP factor',
        question: {
          en: 'What is the recommended LERP factor range for Lenis to achieve an Awwwards-style luxurious yet responsive feel?',
          bn: 'আন্তর্জাতিক মানের বিলাসবহুল অথচ চটপটে অনুভূতির জন্য লেনিসে লার্প ফ্যাক্টরের আদর্শ রেঞ্জ কত?'
        },
        options: [
          {
            en: 'Between 0.08 and 0.12 (with 0.1 being standard)',
            bn: '০.০৮ থেকে ০.১২ এর মধ্যে (০.১ হলো মানদণ্ড)'
          },
          {
            en: 'Between 0.9 and 1.0 (feels like raw un-smoothed scroll)',
            bn: '০.৯ থেকে ১.০ এর মধ্যে (সাধারণ কর্কশ স্ক্রোলের মতো)'
          },
          {
            en: '0.001 (takes 5 minutes to scroll 1 page)',
            bn: '০.০০১ (১ পেজ স্ক্রোল করতেই ৫ মিনিট লাগে)'
          },
          {
            en: '100.0 (causes extreme screen shaking)',
            bn: '১০০.০ (ভয়াবহ ঝাঁকুনি তৈরি করে)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Around 0.1 provides weighted responsiveness.',
          bn: 'প্রায় ০.১ গতি ও ওজনের নিখুঁত ভারসাম্য দেয়।'
        },
        explanation: {
          en: 'A factor of 0.1 moves 10% of the remaining distance each frame, providing a weighted, velvety smooth glide without feeling sluggish.',
          bn: '০.১ ফ্যাক্টর প্রতি ফ্রেমে বাকি দূরত্বের ১০% অতিক্রম করে, যা আলসেমি না এনে এক অনন্য রাজকীয় মসৃণতা এনে দেয়।'
        }
      },
      {
        id: 'q-gsap-scroll-update',
        kind: 'mcq',
        topic: 'Linking Lenis onScroll to ScrollTrigger.update',
        question: {
          en: 'What must you execute whenever Lenis fires its on("scroll") callback?',
          bn: 'লেনিসের on("scroll") ইভেন্ট চলার সাথে সাথে কোন মেথডটি চালানো আবশ্যক?'
        },
        options: [
          {
            en: 'ScrollTrigger.update',
            bn: 'ScrollTrigger.update'
          },
          {
            en: 'ScrollTrigger.clearAll()',
            bn: 'ScrollTrigger.clearAll()'
          },
          {
            en: 'window.close()',
            bn: 'window.close()'
          },
          {
            en: 'console.clear()',
            bn: 'console.clear()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Updating ScrollTrigger with current position.',
          bn: 'স্ক্রোল-ট্রিগারকে বর্তমান অবস্থানের তথ্য দিয়ে আপডেট রাখা।'
        },
        explanation: {
          en: 'Calling ScrollTrigger.update informs GSAP of the new interpolated scroll position, updating scrubbed timelines synchronously.',
          bn: 'ScrollTrigger.update বর্তমান ভার্চুয়াল স্ক্রোল অবস্থান GSAP-কে জানিয়ে দেয়, ফলে স্ক্রাব অ্যানিমেশন তাৎক্ষণিক আপডেট হয়।'
        }
      },
      {
        id: 'q-gsap-mobile-lenis',
        kind: 'mcq',
        topic: 'Mobile touch handling in Lenis',
        question: {
          en: 'Why does Lenis by default disable smooth scrolling on mobile touch screens?',
          bn: 'মোবাইল টাচস্ক্রিনে লেনিস ডিফল্টভাবে কেন ভার্চুয়াল স্মুথ স্ক্রোল বন্ধ রাখে?'
        },
        options: [
          {
            en: 'Because modern mobile touchscreens already provide hardware-level kinetic momentum scrolling that feels best natively',
            bn: 'কারণ আধুনিক মোবাইলের টাচস্ক্রিনে এমনিতেই চমৎকার হার্ডওয়্যার গতিশীল স্ক্রোলিং থাকে যা নেটিভভাবেই সেরা'
          },
          {
            en: 'Because mobile phones do not support JavaScript',
            bn: 'কারণ মোবাইল ফোন জাভাস্ক্রিপ্ট সাপোর্ট করে না'
          },
          {
            en: 'Because Apple and Google banned all animation libraries',
            bn: 'কারণ অ্যাপল ও গুগল সমস্ত অ্যানিমেশন নিষিদ্ধ করেছে'
          },
          {
            en: 'To reduce HTML file size by 500 megabytes',
            bn: 'এইচটিএমএল ফাইলের সাইজ ৫০০ মেগাবাইট কমাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native mobile touch hardware already has physical momentum.',
          bn: 'মোবাইলের নিজস্ব টাচস্ক্রিনেই নিখুঁত গতিশীলতা থাকার কথা ভাবুন।'
        },
        explanation: {
          en: 'Mobile operating systems (iOS and Android) have deeply tuned kinetic scroll physics; virtual scrolling on touch often feels synthetic.',
          bn: 'মোবাইলের টাচ ড্রাইভার নিজস্ব জড়তা সমীকরণে কাজ করে; সেখানে বাড়তি ভার্চুয়াল স্ক্রোল বসালে ইউজার অস্বস্তি বোধ করেন।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-awwwards-showcase-capstone',
    title: {
      en: 'Building an Awwwards-Winning Portfolio & Micro-Interactions — Production Capstone',
      bn: 'আন্তর্জাতিক মানের পোর্টফোলিও ও মাইক্রো-ইন্টারঅ্যাকশন নির্মাণ — প্রোডাকশন ক্যাপস্টোন'
    }
  }
};
