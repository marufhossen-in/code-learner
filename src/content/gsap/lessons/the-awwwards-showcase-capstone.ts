import type { Lesson } from '../../../lib/types';

export const TheAwwwardsShowcaseCapstoneLesson: Lesson = {
  slug: 'the-awwwards-showcase-capstone',
  tech: 'gsap',
  title: {
    en: 'Building an Awwwards-Winning Portfolio & Micro-Interactions — Production Capstone',
    bn: 'আন্তর্জাতিক মানের পোর্টফোলিও ও মাইক্রো-ইন্টারঅ্যাকশন নির্মাণ — প্রোডাকশন ক্যাপস্টোন'
  },
  summary: {
    en: 'This production capstone synthesizes every GSAP technology mastered across the track into a portfolio experience matching Awwwards Site of the Year standards. You will architect an interactive digital showcase: custom magnetic cursor physics using gsap.quickTo (bypassing tween allocation overhead), clip-path curtain reveals on project imagery, pinned horizontal gallery scrolling with ScrollTrigger scrub, and fluid page transitions. Leveraging gsap.context() guarantees bulletproof memory teardown in modern frameworks like React and Next.js. By blending physical momentum, magnetic hover micro-interactions, and 120FPS rendering discipline, you master the craft of top-tier creative web development.',
    bn: 'এই ক্যাপস্টোন লেসনে পুরো ট্র্যাকে শেখা সমস্ত GSAP প্রযুক্তি একত্রিত করে একটি আন্তর্জাতিক অ্যাওয়ার্ড-বিজয়ী পোর্টফোলিও ওয়েবসাইট নির্মাণ করা হবে। আপনি একটি ইন্টারেক্টিভ ডিজিটাল শোকেস তৈরি করবেন: gsap.quickTo দিয়ে অতি-উচ্চগতির ম্যাগনেটিক মাউস কার্সার, ক্লিপ-পাথ দিয়ে ছবির সিনেমাটিক কার্টেইন উন্মোচন, স্ক্রোল-ট্রিগার দিয়ে অনুভূমিক প্রজেক্ট গ্যালারি পিনিং এবং ফ্লুইড পেজ ট্রানজিশন। আধুনিক ফ্রেমওয়ার্কে (React, Next.js) মেমোরি সুরক্ষায় gsap.context() ব্যবহার নিশ্চিত করা হয়েছে। বাস্তব জড়তা, ম্যাগনেটিক বাটন এবং ১২০ এফপিএসের নিখুঁত সমন্বয়ে আপনি সৃজনশীল ওয়েব ডেভেলপমেন্টের শীর্ষে পৌঁছাবেন।'
  },
  minutes: 40,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Capstone Architecture: Anatomy of an Awwwards-Level Showcase',
        bn: 'ক্যাপস্টোন আর্কিটেকচার: আন্তর্জাতিক মানের ওয়েবসাইটের গঠন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you browse an award-winning creative website, thoughtful micro-interactions immediately stand out. Rather than treating animations as static decorations, top creative agencies orchestrate dynamic systems: cursors expand magnetically toward interactive links, images reveal via diagonal clip-paths, and content sections glide horizontally across pinned screens.',
        bn: 'যখন আপনি কোনো আন্তর্জাতিক স্বীকৃতি পাওয়া ওয়েবসাইট ঘুরে দেখেন, তখন সূক্ষ্ম ও মনোমুগ্ধকর মাইক্রো-ইন্টারঅ্যাকশনগুলো সবার আগে চোখে পড়ে। অ্যানিমেশনকে শুধু সাজসজ্জা হিসেবে না দেখে শীর্ষ এজেন্সিগুলো একে একটি জীবন্ত রূপ দেয়: কার্সার বোতামের দিকে চুম্বকের মতো আকর্ষিত হয়, ছবিগুলো ক্লিপ-পাথ দিয়ে নাটকীয়ভাবে খোলে এবং পুরো সেকশন স্ক্রিনে আটকে অনুভূমিকভাবে সরে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'gsap.quickTo()',
          def: {
            en: 'An ultra-optimized function providing instant interpolation for high-frequency events (like mousemove) without creating new tweens',
            bn: 'একটি অতি-উচ্চগতির মেথড যা মাউসের মতো ঘন ঘন ইভেন্টে নতুন অবজেক্ট তৈরি না করে তাত্ক্ষণিক মসৃণ রূপান্তর দেয়'
          }
        },
        {
          term: 'Magnetic Hover Effect',
          def: {
            en: 'Attenuating cursor coordinates toward a button center, creating the tactile illusion of magnetic physical pull',
            bn: 'বোতামের কেন্দ্রের দিকে মাউসের অবস্থান সামান্য টেনে এনে একটি চৌম্বকীয় আকর্ষণের বাস্তবসম্মত বিভ্রম তৈরি করা'
          }
        },
        {
          term: 'Clip-Path Curtain Reveal',
          def: {
            en: 'Animating polygon or inset curtain masks for theatrical image entrance sequences',
            bn: 'থিয়েটারের পর্দার মতো নাটকীয়ভাবে ছবি বা কনটেন্ট উন্মোচনে ক্লিপ-পাথ অ্যানিমেট করা'
          }
        },
        {
          term: 'gsap.context()',
          def: {
            en: 'The definitive lifecycle scoping container for modern component frameworks, recording all tweens for clean one-line reversion',
            bn: 'আধুনিক ফ্রেমওয়ার্কে সমস্ত অ্যানিমেশনকে এক ছাতার নিচে রেখে পেজ ত্যাগের সময় মাত্র এক লাইনে মেমোরি মুক্ত করার সেরা টুল'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'magnetic-physics-math',
      text: {
        en: 'Magnetic Micro-Interactions & gsap.quickTo Mechanics',
        bn: 'ম্যাগনেটিক মাইক্রো-ইন্টারঅ্যাকশন ও gsap.quickTo মেকানিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Creating a custom mouse cursor using standard gsap.to() on mousemove triggers thousands of tween allocations per minute, degrading frame rates. Instead, gsap.quickTo creates a permanent interpolation pipeline: const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" }). Calling xTo(e.clientX) feeds coordinates into the existing pipeline with zero garbage collection overhead. For magnetic buttons, calculate the offset from the button center to the mouse (e.clientX - centerX) and scale by a dampening factor (e.g. 0.35) to create magnetic attraction.',
        bn: 'প্রতিটি mousemove ইভেন্টে সাধারণ gsap.to() বানালে মিনিটে হাজার হাজার অবজেক্ট তৈরি হয়ে মেমোরি ল্যাগ সৃষ্টি করে। এর বদলে gsap.quickTo একটি স্থায়ী পাইপলাইন তৈরি করে: const xTo = gsap.quickTo(cursor, "x", { duration: 0.4, ease: "power3" })। তখন xTo(e.clientX) ডাকলে কোনো বাড়তি মেমোরি খরচ ছাড়াই বিদ্যুৎ গতিতে মাউস অনুসরণ হয়। ম্যাগনেটিক বাটনের জন্য কেন্দ্র থেকে মাউসের দূরত্বের ৩৫% (০.৩৫) অফসেট ব্যবহার করলেই চমৎকার চৌম্বকীয় অনুভূতি তৈরি হয়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Standard mousemove vs gsap.quickTo Architecture',
        bn: 'সাধারণ মাউসমুভ বনাম gsap.quickTo আর্কিটেকচারের তুলনা'
      },
      head: [
        { en: 'Metric', bn: 'পরিমাপ' },
        { en: 'Standard gsap.to() on mousemove', bn: 'সাধারণ gsap.to()' },
        { en: 'gsap.quickTo() Reusable Pipeline', bn: 'gsap.quickTo() পাইপলাইন' }
      ],
      rows: [
        [
          { en: 'Memory Allocation per Second', bn: 'প্রতি সেকেন্ডে মেমোরি বরাদ্দ' },
          { en: 'Over 100 new Tween objects allocated per second on active movement', bn: 'মাউস নাড়লেই সেকেন্ডে ১০০টির বেশি নতুন অবজেক্ট তৈরি হয়' },
          { en: 'Exactly zero object allocations; reuses identical internal vector', bn: 'শূন্য অবজেক্ট তৈরি; একই অভ্যন্তরীণ পাইপলাইন বারবার ব্যবহৃত হয়' }
        ],
        [
          { en: 'Garbage Collection Pressure', bn: 'গার্বেজ কালেকশনের চাপ' },
          { en: 'Frequent stop-the-world GC pauses causing cursor stutter', bn: 'ঘন ঘন গার্বেজ কালেকশন ল্যাগ হয়ে কার্সার কাঁপতে থাকে' },
          { en: 'Zero GC pauses; rock-solid 120 FPS cursor tracking', bn: 'কোনো ল্যাগ নেই; নিখুঁত ১২০ এফপিএসে মাউস অনুসরণ করে' }
        ],
        [
          { en: 'Input Latency', bn: 'প্রতিক্রিয়ার সময়' },
          { en: 'Slight delay as overwrite heuristics adjudicate running tweens', bn: 'আগের টুইন থামাতে গিয়ে সামান্য দেরি বা ল্যাটেন্সি হয়' },
          { en: 'Instantaneous mathematical redirection toward new target coordinate', bn: 'নতুন স্থানাঙ্কের দিকে চোখের পলকে মসৃণভাবে ঘুরে যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Magnetic Cursor Offset Mathematics',
        bn: 'চালনাযোগ্য সিমুলেশন: ম্যাগনেটিক কার্সার অফসেট গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script implements magnetic hover attenuation mathematics, calculating how an interactive button attracts toward a cursor positioned 40px along X and 20px along Y:',
        bn: 'নিচের স্ক্রিপ্টটি ম্যাগনেটিক হোভার গণিত চালায় এবং দেখায় কীভাবে X অক্ষে ৪০ পিক্সেল ও Y অক্ষে ২০ পিক্সেল দূরে থাকা মাউস বোতামটিকে নিজের দিকে টানে:'
      }
    },
    {
      type: 'code',
      id: 'gsap-capstone-sim',
      lang: 'javascript',
      code: `// GSAP Magnetic Button Micro-Interaction Math Simulator

// Center coordinate of interactive button
const buttonCenterX = 500;
const buttonCenterY = 300;

// Cursor pointer position
const mouseX = 540;
const mouseY = 320;

// Raw vector distance offset from center to cursor
const mouseDistX = mouseX - buttonCenterX; // 40px
const mouseDistY = mouseY - buttonCenterY; // 20px

// Magnetic attraction pull factor (0.35 = 35% displacement towards pointer)
const magneticPull = 0.35;

// Attenuated translation applied to button via gsap.quickTo
const magnetOffsetX = mouseDistX * magneticPull; // 40 * 0.35 = 14px
const magnetOffsetY = mouseDistY * magneticPull; // 20 * 0.35 = 7px

console.log('Raw pointer offset distance from element center in pixels:', mouseDistX);
// -> Raw pointer offset distance from element center in pixels: 40

console.log('Attenuated magnetic hover translation along X-axis in pixels:', magnetOffsetX);
// -> Attenuated magnetic hover translation along X-axis in pixels: 14

console.log('Attenuated magnetic hover translation along Y-axis in pixels:', magnetOffsetY);
// -> Attenuated magnetic hover translation along Y-axis in pixels: 7`,
      caption: {
        en: 'Figure 8: A 40px mouse offset pulls the magnetic button 14px along X and 7px along Y (35% physical attraction)',
        bn: 'চিত্র ৮: ৪০ পিক্সেল মাউস দূরত্বে বোতামটি X অক্ষে ১৪ পিক্সেল ও Y অক্ষে ৭ পিক্সেল সরে আসে (৩৫% চৌম্বকীয় আকর্ষণ)'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Deployment Rules for Creative Web Experiences',
        bn: 'সৃজনশীল ওয়েব অভিজ্ঞতার জন্য ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 golden rules when building award-winning creative websites:',
        bn: 'আন্তর্জাতিক মানের সাইট নির্মাণের সময় এই ৪টি সুবর্ণ নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Scope Animations with gsap.context()',
          def: {
            en: 'In React, Next.js, and Vue, wrap all setup code inside gsap.context() and call ctx.revert() inside cleanup to prevent zombie tweens',
            bn: 'রিয়েক্ট বা নেক্সটে gsap.context() ব্যবহার করুন এবং আনমাউন্টে ctx.revert() দিয়ে এক ক্লিকে সব অ্যানিমেশন সাফ করুন'
          }
        },
        {
          term: 'Rule 2: Use gsap.quickTo for Pointer Tracking',
          def: {
            en: 'Never construct new gsap.to() tweens inside mousemove handlers; allocate gsap.quickTo pipelines once during setup',
            bn: 'মাউসমুভে বারবার gsap.to করবেন না; সেটআপের সময় একবার gsap.quickTo বানিয়ে বারবার ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 3: Respect prefers-reduced-motion',
          def: {
            en: 'Check window.matchMedia("(prefers-reduced-motion: reduce)") and disable heavy parallax for users with motion sensitivity',
            bn: 'মোশন সেন্সিটিভিটি থাকা ব্যবহারকারীদের জন্য prefers-reduced-motion চেক করে অতিরিক্ত প্যারালাক্স বন্ধ রাখুন'
          }
        },
        {
          term: 'Rule 4: Clamp Horizontal Scroll Distances',
          def: {
            en: 'When pinning horizontal galleries, set end: () => `+=${container.scrollWidth - window.innerWidth}` so scrub matches pixel length',
            bn: 'অনুভূমিক গ্যালারিতে কন্টেইনারের আসল প্রস্থ মেপে end নির্ধারণ করুন যাতে স্ক্রোল নিখুঁতভাবে মেলে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-quickto-alloc-ex',
      kind: 'mcq',
      topic: 'Why gsap.quickTo eliminates garbage collection pressure',
      question: {
        en: 'Why is gsap.quickTo dramatically faster than invoking gsap.to() on every mousemove event?',
        bn: 'প্রতিটি mousemove ইভেন্টে gsap.to() ডাকার চেয়ে gsap.quickTo কেন নাটকীয়ভাবে দ্রুত কাজ করে?'
      },
      options: [
        {
          en: 'It creates a permanent reusable interpolation pipeline once, completely eliminating per-frame object allocation and GC pauses',
          bn: 'এটি একবারেই একটি স্থায়ী পাইপলাইন বানায়, ফলে প্রতি ফ্রেমে নতুন অবজেক্ট তৈরির চাপ ও গার্বেজ কালেকশন ল্যাগ শূন্য হয়ে যায়'
        },
        {
          en: 'It increases the physical DPI of the mouse hardware',
          bn: 'এটি মাউসের হার্ডওয়্যার ডিপিআই বাড়িয়ে দেয়'
        },
        {
          en: 'It deletes CSS stylesheets from disk',
          bn: 'এটি ডিস্ক থেকে সিএসএস মুছে ফেলে'
        },
        {
          en: 'It runs without using any computer memory',
          bn: 'এটি কোনো মেমোরি ছাড়া চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Zero per-frame object allocations and no GC overhead.',
        bn: 'প্রতি ফ্রেমে অবজেক্ট তৈরি বন্ধ রেখে ল্যাগ দূর করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Standard tweens instantiate objects, check overwrite status, and parse values on every call; quickTo reuses the pre-compiled pipeline.',
        bn: 'সাধারণ টুইন প্রতি ক্লিকে নতুন মেমোরি বরাদ্দ করে; quickTo আগে তৈরি পাইপলাইন ব্যবহার করে মুহূর্তেই মান আপডেট করে।'
      }
    },
    {
      id: 'gsap-magnetic-calc-ex',
      kind: 'mcq',
      topic: 'Magnetic hover displacement calculation',
      question: {
        en: 'If a cursor is 40px away from the center of a magnetic button on the X-axis, and the magnetic pull factor is 0.35, what is the resulting translation?',
        bn: 'মাউস যদি ম্যাগনেটিক বোতামের কেন্দ্র থেকে X অক্ষে ৪০ পিক্সেল দূরে থাকে এবং আকর্ষণের হার ০.৩৫ হয়, তবে বোতামটি কত পিক্সেল সরে আসবে?'
      },
      options: [
        {
          en: '14 pixels (40 * 0.35)',
          bn: '১৪ পিক্সেল (৪০ * ০.৩৫)'
        },
        {
          en: '40 pixels (full displacement)',
          bn: '৪০ পিক্সেল (সম্পূর্ণ স্থানান্তর)'
        },
        {
          en: '0 pixels (no movement)',
          bn: '০ পিক্সেল (কোনো নড়াচড়া নেই)'
        },
        {
          en: '140 pixels',
          bn: '১৪০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply 40 by 0.35.',
        bn: '৪০ কে ০.৩৫ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Displacement = distance * pullFactor = 40 * 0.35 = 14 pixels.',
        bn: 'স্থানান্তর = দূরত্ব * গুণক = ৪০ * ০.৩৫ = ১৪ পিক্সেল।'
      }
    },
    {
      id: 'gsap-context-cleanup-ex',
      kind: 'mcq',
      topic: 'The definitive role of gsap.context() in modern frameworks',
      question: {
        en: 'Why is gsap.context() considered mandatory when authoring GSAP animations inside React or Next.js components?',
        bn: 'রিয়েক্ট বা নেক্সট.জেএস কম্পোনেন্টে GSAP অ্যানিমেশন ব্যবহারের সময় gsap.context() কেন বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'It automatically collects and records all tweens and ScrollTriggers created within its scope, allowing clean one-line teardown via ctx.revert()',
          bn: 'এটি নিজের ভেতরের সমস্ত টুইন ও স্ক্রোল-ট্রিগার রেকর্ড করে রাখে, ফলে ctx.revert() দিয়ে এক লাইনেই সব মেমোরি মুক্ত করা যায়'
        },
        {
          en: 'It converts JavaScript code into Python',
          bn: 'এটি জাভাস্ক্রিপ্ট কোডকে পাইথনে বদলে দেয়'
        },
        {
          en: 'It makes the browser close automatically',
          bn: 'এটি ব্রাউজারকে স্বয়ংক্রিয়ভাবে বন্ধ করে দেয়'
        },
        {
          en: 'It removes all CSS animations from the internet',
          bn: 'এটি ইন্টারনেট থেকে সমস্ত সিএসএস অ্যানিমেশন মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Scoped cleanup and one-line reversal in useEffect.',
        bn: 'সহজে সমস্ত অ্যানিমেশন পরিষ্কার ও মেমোরি লিক রোধের কথা ভাবুন।'
      },
      explanation: {
        en: 'React strict mode double-invokes setup effects; gsap.context() ensures clean teardown of prior animations with ctx.revert().',
        bn: 'রিয়েক্টের কড়া মোডে ডবল মাউন্ট হয়; gsap.context() নিশ্চিত করে যে আগের সমস্ত অ্যানিমেশন ঠিকভাবে মুছে গিয়ে নতুনটি শুরু হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-awwwards-capstone',
    title: {
      en: 'Awwwards Creative Showcase Architecture Quiz',
      bn: 'আন্তর্জাতিক ক্রিয়েটিভ শোকেস আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-quickto-pipeline',
        kind: 'mcq',
        topic: 'Performance benefit of gsap.quickTo',
        question: {
          en: 'What architectural problem does gsap.quickTo solve for high-frequency interactive mouse followers?',
          bn: 'মাউস ট্র্যাকার বা কার্সারের জন্য gsap.quickTo কোন প্রধান পারফরম্যান্স সমস্যা সমাধান করে?'
        },
        options: [
          {
            en: 'It recycles a single compiled interpolation function, eliminating massive Garbage Collection spikes caused by allocating thousands of tweens',
            bn: 'এটি একটিমাত্র প্রাক-কম্পাইল্ড ফাংশন বারবার চালায়, যার ফলে হাজার হাজার টুইন তৈরির ওভারহেড ও মেমোরি ল্যাগ নির্মূল হয়'
          },
          {
            en: 'It disables all mouse clicks on the website',
            bn: 'এটি ওয়েবসাইটের সমস্ত মাউস ক্লিক বন্ধ করে দেয়'
          },
          {
            en: 'It converts SVG icons into 3D objects',
            bn: 'এটি এসভিজি আইকনকে 3D অবজেক্টে বদলে দেয়'
          },
          {
            en: 'It forces the browser to run at 10 FPS',
            bn: 'এটি ব্রাউজারকে ১০ এফপিএসে চলতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Eliminates Garbage Collection pauses during mousemove.',
          bn: 'মাউস নাড়াচাড়ার সময় মেমোরি ল্যাগ দূর করার কথা ভাবুন।'
        },
        explanation: {
          en: 'quickTo bypasses the tween creation pipeline, piping new numbers directly into an existing lerp loop with zero garbage generation.',
          bn: 'quickTo কোনো নতুন অবজেক্ট তৈরি না করে সরাসরি চলমান লুপে নতুন মান পাঠায়, ফলে কোনো ল্যাগ ছাড়াই ১২০ এফপিএস গতি পাওয়া যায়।'
        }
      },
      {
        id: 'q-gsap-context-revert',
        kind: 'mcq',
        topic: 'Role of ctx.revert() on component unmount',
        question: {
          en: 'What does calling ctx.revert() do when a user navigates away from a page that used gsap.context()?',
          bn: 'ব্যবহারকারী পেজ ত্যাগ করার সময় ctx.revert() কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Kills all internal tweens, kills all associated ScrollTriggers, and restores all animated DOM elements to their pre-animation inline styles',
            bn: 'সমস্ত টুইন ও স্ক্রোল-ট্রিগার বন্ধ করে এবং সব উপাদানের স্টাইলকে অ্যানিমেশনের আগের স্বাভাবিক চেহারায় ফিরিয়ে আনে'
          },
          {
            en: 'Deletes the entire HTML file from the web server',
            bn: 'ওয়েব সার্ভার থেকে পুরো ফাইল মুছে ফেলে'
          },
          {
            en: 'Forces the visitor to restart their computer',
            bn: 'ইউজারকে কম্পিউটার রিস্টার্ট করতে বাধ্য করে'
          },
          {
            en: 'Mutes the audio speakers permanently',
            bn: 'স্পিকার চিরতরে মিউট করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Comprehensive teardown and inline style restoration.',
          bn: 'সব অ্যানিমেশন সাফ করে পেজ আগের অবস্থায় ফিরিয়ে আনার কথা ভাবুন।'
        },
        explanation: {
          en: 'ctx.revert() strips all GSAP-injected inline styles and terminates all active listeners in a single clean sweep.',
          bn: 'ctx.revert() সমস্ত যুক্ত করা স্টাইল মুছে ফেলে এবং সব লিসেনার বন্ধ করে মেমোরি একদম ফ্রেশ করে দেয়।'
        }
      },
      {
        id: 'q-gsap-clippath-reveal',
        kind: 'mcq',
        topic: 'Why clip-path image reveals outperform width/height expands',
        question: {
          en: 'Why do award-winning agency websites prefer clip-path: inset() over animating width or height for dramatic image reveals?',
          bn: 'ছবির সিনেমাটিক উন্মোচনের জন্য শীর্ষ এজেন্সিগুলো কেন width বা height অ্যানিমেট না করে clip-path: inset() ব্যবহার করে?'
        },
        options: [
          {
            en: 'clip-path changes visual cropping mask on the GPU without triggering document reflows or resizing the underlying image bitmap',
            bn: 'clip-path জিপিউতে মাস্ক পরিবর্তন করে ছবি দেখায়, ফলে কোনো লেআউট রিফ্লো ছাড়াই অত্যন্ত দ্রুত কাজ করে'
          },
          {
            en: 'Because clip-path turns images into 3D video files',
            bn: 'কারণ clip-path ছবিকে ভিডিওতে রূপান্তর করে'
          },
          {
            en: 'Because CSS width is not supported in Google Chrome',
            bn: 'কারণ গুগলে সিএসএস width সমর্থিত নয়'
          },
          {
            en: 'To make the image load without using internet bandwidth',
            bn: 'ইন্টারনেট খরচ ছাড়া ছবি লোড করানোর জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'GPU masking without layout reflow.',
          bn: 'লেআউট না নাড়িয়ে জিপিউ মাস্কিংয়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'clip-path operates at the paint and compositing level, creating theatrical curtain reveals without shifting surrounding layout cards.',
          bn: 'clip-path আশপাশের উপাদানকে বিরক্ত না করে কেবল নির্দিষ্ট অংশের ওপর পর্দা তোলার মতো ছবি প্রকাশ করে।'
        }
      },
      {
        id: 'q-gsap-reduced-motion',
        kind: 'mcq',
        topic: 'Accessibility compliance via prefers-reduced-motion',
        question: {
          en: 'How should an Awwwards-caliber website handle users who have prefers-reduced-motion enabled in their operating system?',
          bn: 'অপারেটিং সিস্টেমে prefers-reduced-motion চালু রাখা ব্যবহারকারীদের ক্ষেত্রে আন্তর্জাতিক মানের ওয়েবসাইটের আচরণ কেমন হওয়া উচিত?'
        },
        options: [
          {
            en: 'Respect accessibility by disabling rapid parallax movement, heavy flings, and smooth virtual scroll, providing instant subtle fades instead',
            bn: 'অ্যাক্সেসিবিলিটিকে সম্মান জানিয়ে অতিরিক্ত প্যারালাক্স ও ভার্চুয়াল স্ক্রোল বন্ধ করে মৃদু ফেড ইফেক্ট দেওয়া'
          },
          {
            en: 'Ignore the operating system setting completely',
            bn: 'ব্যবহারকারীর সেটিং সম্পূর্ণ উপেক্ষা করা'
          },
          {
            en: 'Display a full-screen red warning message',
            bn: 'পুরো স্ক্রিনে লাল সতর্কবার্তা দেখানো'
          },
          {
            en: 'Double the speed of all animations to finish faster',
            bn: 'তাড়াতাড়ি শেষ করতে অ্যানিমেশনের গতি দ্বিগুণ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Respect motion sensitivity settings gracefully.',
          bn: 'ব্যবহারকারীর সুবিধা বিবেচনায় মোশন নিয়ন্ত্রণের কথা ভাবুন।'
        },
        explanation: {
          en: 'Accessible creative design uses window.matchMedia to switch from sweeping parallax translations to simple opacity crossfades.',
          bn: 'সচেতন ও উন্নত ডিজাইনাররা matchMedia দিয়ে ঘূর্ণন ও প্যারালাক্স কমিয়ে সাধারণ অপাসিটি ফেড ব্যবহার করেন।'
        }
      }
    ]
  }
};
