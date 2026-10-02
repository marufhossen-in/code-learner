import type { Lesson } from '../../../lib/types';

export const FlipAndLayoutAnimationsLesson: Lesson = {
  slug: 'flip-and-layout-animations',
  tech: 'gsap',
  title: {
    en: 'FLIP Plugin & Seamless Layout Transitions — Smooth State Changes at 60FPS',
    bn: 'FLIP প্লাগইন ও সিমলেস লেআউট ট্রানজিশন — ৬০ এফপিএসে স্মুথ স্টেট রূপান্তর'
  },
  summary: {
    en: 'Animating structural DOM changes — such as filtering an e-commerce grid, expanding a card into a fullscreen modal, or reparenting elements — is historically notorious for layout thrashing. Changing flexbox ordering or CSS grid structures cannot be animated smoothly using CSS transitions. The FLIP animation technique solves this paradigm. FLIP stands for First, Last, Invert, Play. GSAP FlipPlugin records starting coordinates, permits instant DOM mutation, calculates inverted transform offsets, and animates the inversion back to identity on the GPU. This delivers fluid 60FPS shared element transitions with zero layout reflow stutter.',
    bn: 'স্ট্রাকচারাল ডম পরিবর্তন অ্যানিমেট করা — যেমন পণ্য ফিল্টার করা, ছোট কার্ড বড় মডালে রূপান্তর বা স্থান বদল — সবসময়ই পারফরম্যান্সের জন্য ঝুঁকিপূর্ণ ছিল। ফ্লেক্সবক্স বা সিএসএস গ্রিডের অবস্থান সাধারণ সিএসএস ট্রানজিশন দিয়ে মসৃণভাবে পরিবর্তন করা যায় না। FLIP অ্যানিমেশন কৌশল এই সমস্যার সমাধান করে। FLIP এর পূর্ণরূপ হলো First, Last, Invert, Play। GSAP FlipPlugin শুরুর অবস্থান রেকর্ড করে, নিমেষে ডম পরিবর্তন ঘটায়, বিপরীত অফসেট হিসাব করে এবং জিপিউতে রূপান্তর ফিরিয়ে এনে মসৃণ ৬০ এফপিএস লেআউট ট্রানজিশন নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Four Steps of the FLIP Technique',
        bn: 'মূল ধারণা: FLIP অ্যানিমেশনের ৪টি মৌলিক ধাপ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you filter an e-commerce catalog or expand a card into a modal, the page layout changes instantly. The First, Last, Invert, Play (FLIP) technique is a mathematical strategy that turns expensive layout operations into cheap GPU transform animations. Instead of trying to animate width, height, and flex positions while the browser struggles to reflow, FLIP records the start and end positions, inverts the visual difference, and animates the delta.',
        bn: 'যখন আপনি কোনো প্রোডাক্ট ক্যাটালগ ফিল্টার করেন বা একটি কার্ডকে বড় মডালে রূপান্তর করেন, তখন পেজের লেআউট নিমেষেই বদলে যায়। First, Last, Invert, Play (FLIP) কৌশলটি ভারী লেআউট পরিবর্তনকে হালকা জিপিউ ট্রান্সফর্ম অ্যানিমেশনে রূপান্তর করে। রিফ্লোর সময় ধুঁকতে থাকা ব্রাউজারে সাইজ অ্যানিমেট করার বদলে FLIP শুরুর ও শেষের অবস্থান রেকর্ড করে এবং দূরত্বের ব্যবধানটিকে জিপিউতে মসৃণভাবে অ্যানিমেট করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'First',
          def: {
            en: 'Record the initial spatial coordinates and dimensions of elements using Flip.getState()',
            bn: 'Flip.getState() দিয়ে উপাদানগুলোর প্রাথমিক অবস্থান এবং মাপজোক মেমোরিতে রেকর্ড করা'
          }
        },
        {
          term: 'Last',
          def: {
            en: 'Execute the structural DOM state changes (adding classes, sorting, or reparenting) and record new resting coordinates',
            bn: 'ডম পরিবর্তন কার্যকর করা (ক্লাস যোগ, ফিল্টার বা গ্রিড পরিবর্তন) এবং নতুন অবস্থান রেকর্ড করা'
          }
        },
        {
          term: 'Invert',
          def: {
            en: 'Calculate position deltas (first - last) and immediately apply transform offsets so elements visually appear in their original spots',
            bn: 'পার্থক্য হিসাব করে (আগের অবস্থান বিয়োগ বর্তমান) এমন ট্রান্সফর্ম দেওয়া যাতে উপাদানটি আগের স্থানেই আছে মনে হয়'
          }
        },
        {
          term: 'Play',
          def: {
            en: 'Animate transform translations back to zero (identity matrix) on the GPU, creating the illusion of a smooth layout transition',
            bn: 'জিপিউতে ট্রান্সফর্ম মানগুলোকে শূন্যে ফিরিয়ে এনে মসৃণ রূপান্তরের দৃষ্টিনন্দন বিভ্রম তৈরি করা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'flipplugin-architecture',
      text: {
        en: 'FlipPlugin API & Shared Layout Transitions',
        bn: 'FlipPlugin এপিআই ও শেয়ার্ড লেআউট ট্রানজিশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing raw FLIP math by hand requires measuring getBoundingClientRect() across dozens of elements, tracking scale differences, and managing absolute positioning. GSAP FlipPlugin reduces this entire workflow to two elegant function calls: const state = Flip.getState(elements); applyStateChanges(); Flip.from(state, { duration: 0.8, ease: "power2.inOut", absolute: true }). Enabling absolute: true prevents sibling elements from colliding during reflow.',
        bn: 'ম্যানুয়ালি FLIP কোড লিখতে গেলে getBoundingClientRect() দিয়ে প্রতিটি উপাদানের মাপ নিতে হয় যা অত্যন্ত জটিল। GSAP FlipPlugin এটিকে মাত্র দুটি সহজ লাইনে নামিয়ে এনেছে: const state = Flip.getState(elements); ডম পরিবর্তন করুন; তারপর Flip.from(state, { duration: 0.8, ease: "power2.inOut", absolute: true })। absolute: true অপশনটি পরিবর্তনের সময় পাশাপাশি থাকা উপাদানগুলোর একে অপরের সাথে ধাক্কা খাওয়া রোধ করে।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Standard DOM Layout Animation vs FLIP Architecture',
        bn: 'সাধারণ লেআউট অ্যানিমেশন বনাম FLIP পদ্ধতির তুলনা'
      },
      head: [
        { en: 'Architectural Dimension', bn: 'মাত্রা' },
        { en: 'Traditional Layout Animation', bn: 'চিরাচরিত লেআউট অ্যানিমেশন' },
        { en: 'GSAP FlipPlugin Architecture', bn: 'GSAP FlipPlugin পদ্ধতি' }
      ],
      rows: [
        [
          { en: 'Browser Rendering Pipeline', bn: 'ব্রাউজার রেন্ডারিং স্তর' },
          { en: 'Triggers continuous Layout & Paint phases 60 times per second', bn: 'প্রতি সেকেন্ডে ৬০ বার ভারী লেআউট ও পেইন্ট চালায়' },
          { en: 'Single Layout computation followed strictly by GPU Compositing', bn: 'মাত্র একবার লেআউট মেপে বাকি সব কাজ জিপিউ কম্পোজিটিংয়ে সম্পন্ন করে' }
        ],
        [
          { en: 'CSS Grid & Flexbox Compatibility', bn: 'গ্রিড ও ফ্লেক্সবক্স সামঞ্জস্য' },
          { en: 'Impossible; CSS cannot animate grid-template-columns or flex-wrap', bn: 'অসম্ভব; সিএসএস গ্রিড বা ফ্লেক্স কলাম সরাসরি অ্যানিমেট করতে পারে না' },
          { en: 'Full seamless compatibility with any CSS grid or flexbox state change', bn: 'যেকোনো গ্রিড বা ফ্লেক্সবক্স রূপান্তরে সম্পূর্ণ মসৃণভাবে কাজ করে' }
        ],
        [
          { en: 'Reparenting Between DOM Containers', bn: 'এক কন্টেইনার থেকে অন্যটিতে সরানো' },
          { en: 'Instant visual snap; elements flash abruptly at new positions', bn: 'উপাদান হঠাৎ করে নতুন স্থানে লাফিয়ে ওঠে' },
          { en: 'Smooth cinematic translation between disparate DOM parent nodes', bn: 'ভিন্ন কন্টেইনারের মধ্যেও চমৎকার সিনেমাটিক মুভমেন্ট তৈরি করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: FLIP Mathematical Delta Inversion',
        bn: 'চালনাযোগ্য সিমুলেশন: FLIP গাণিতিক ডেল্টা রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script implements the mathematical core of FLIP, calculating positional deltas between initial resting state and final mutated layout:',
        bn: 'নিচের স্ক্রিপ্টটি FLIP কৌশলের মূল গাণিতিক রূপ প্রয়োগ করে এবং আদি অবস্থান ও চূড়ান্ত রূপান্তরের মধ্যকার দূরত্বের হিসাব দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'gsap-flip-sim',
      lang: 'javascript',
      code: `// GSAP FLIP (First, Last, Invert, Play) Mathematical Simulator

// Step 1: First - initial position of thumbnail card
const initialX = 100;
const initialY = 200;

// Step 2: Last - final position of expanded modal card in DOM
const finalX = 450;
const finalY = 320;

// Step 3: Invert - calculate translation delta required to fake original spot
// Formula: delta = First - Last
const deltaX = initialX - finalX; // 100 - 450 = -350px
const deltaY = initialY - finalY; // 200 - 320 = -120px

// Step 4: Play - element sits at final position (450, 320) but transformed by (-350, -120)
// Visually: 450 + (-350) = 100px, 320 + (-120) = 200px (matches First perfectly!)
// The tween animates transform: translate(-350px, -120px) -> translate(0px, 0px)

console.log('FLIP Invert translation delta on X-axis in pixels:', deltaX);
// -> FLIP Invert translation delta on X-axis in pixels: -350

console.log('FLIP Invert translation delta on Y-axis in pixels:', deltaY);
// -> FLIP Invert translation delta on Y-axis in pixels: -120

console.log('Final target resting coordinate on X-axis in pixels:', finalX);
// -> Final target resting coordinate on X-axis in pixels: 450`,
      caption: {
        en: 'Figure 5: Moving from 100 px to 450 px yields an Invert delta of -350 px, which animates back to 0 on the GPU',
        bn: 'চিত্র ৫: ১০০ থেকে ৪৫০ স্থানান্তরে ডেল্টা -৩৫০ হয়, যা ০ তে ফিরে আসে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for FLIP Layout Transitions',
        bn: 'FLIP লেআউট ট্রানজিশনের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules to deliver silky 60FPS layout animations across all devices:',
        bn: 'সকল ডিভাইসে মসৃণ ৬০ এফপিএস অ্যানিমেশনের জন্য এই ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Use absolute: true on Grid Filtering',
          def: {
            en: 'Pass absolute: true inside Flip.from() so elements being filtered do not collapse adjacent columns during the animation',
            bn: 'গ্রিড ফিল্টার করার সময় উপাদানগুলো যাতে ধাক্কা না খায় সেজন্য Flip.from-এ absolute: true ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 2: Capture Nested States via nested: true',
          def: {
            en: 'When animating card containers containing internal headings or icons, pass nested: true to prevent counter-scale distortion',
            bn: 'ভেতরের লেখা বা আইকন যাতে চ্যাপ্টা না হয় সেজন্য nested: true দিয়ে অভ্যন্তরীণ স্কেলিং ঠিক রাখুন'
          }
        },
        {
          term: 'Rule 3: Execute DOM Mutations Synchronously',
          def: {
            en: 'Never introduce asynchronous delays between Flip.getState() and Flip.from(); mutate the DOM immediately in the same tick',
            bn: 'Flip.getState এবং Flip.from এর মাঝে কোনো অ্যাসিনক্রোনাস দেরি করবেন না; তাৎক্ষণিকভাবে ডম পরিবর্তন করুন'
          }
        },
        {
          term: 'Rule 4: Apply zIndex on Expanding Hero Elements',
          def: {
            en: 'Set zIndex: 10 on expanding cards inside Flip.from() so they smoothly float over sibling elements during expansion',
            bn: 'বড় হতে থাকা কার্ড যেন অন্য উপাদানের ওপরে থাকে সেজন্য zIndex: 10 সেট করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-flip-delta-ex',
      kind: 'mcq',
      topic: 'FLIP Invert delta calculation',
      question: {
        en: 'If an element has an initial X position of 100px and a final X position of 450px after a layout change, what is the Invert deltaX?',
        bn: 'লেআউট পরিবর্তনের আগে একটি উপাদানের X পজিশন ১০০ পিক্সেল এবং পরে ৪৫০ পিক্সেল হলে Invert deltaX এর মান কত?'
      },
      options: [
        {
          en: '-350 pixels (100 - 450 = -350)',
          bn: '-৩৫০ পিক্সেল (১০০ - ৪৫০ = -৩৫০)'
        },
        {
          en: '+350 pixels',
          bn: '+৩৫০ পিক্সেল'
        },
        {
          en: '550 pixels',
          bn: '৫৫০ পিক্সেল'
        },
        {
          en: '0 pixels',
          bn: '০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Invert delta is First minus Last.',
        bn: 'আদি অবস্থান বিয়োগ অন্তিম অবস্থান।'
      },
      explanation: {
        en: 'Delta = First - Last = 100 - 450 = -350px. Applying transform: translateX(-350px) puts the element visually back at 100px.',
        bn: 'ডেল্টা = প্রথম - শেষ = ১০০ - ৪৫০ = -৩৫০ পিক্সেল। ট্রান্সফর্মে -৩৫০ বসালে উপাদানটি চোখে ১০০ পিক্সেলের আদি অবস্থানে ফিরে যায়।'
      }
    },
    {
      id: 'gsap-flip-absolute-ex',
      kind: 'mcq',
      topic: 'Role of absolute: true in grid filtering',
      question: {
        en: 'Why is absolute: true essential when animating grid sorting or category filtering with Flip.from()?',
        bn: 'Flip.from দিয়ে গ্রিড ফিল্টারিংয়ের সময় absolute: true কেন অত্যন্ত প্রয়োজনীয়?'
      },
      options: [
        {
          en: 'It temporarily positions leaving elements absolutely so remaining elements can slide smoothly without jumping into empty slots',
          bn: 'এটি বিদায় নেওয়া উপাদানগুলোকে সাময়িকভাবে absolute করে দেয় যাতে বাকি উপাদানগুলো ধাক্কা না খেয়ে মসৃণভাবে সরতে পারে'
        },
        {
          en: 'It converts the website into a desktop PDF',
          bn: 'এটি ওয়েবসাইটটিকে পিডিএফে রূপান্তর করে'
        },
        {
          en: 'It deletes all CSS class names',
          bn: 'এটি সমস্ত সিএসএস ক্লাস মুছে ফেলে'
        },
        {
          en: 'It doubles the network speed of the browser',
          bn: 'এটি ব্রাউজারের নেটওয়ার্ক গতি দ্বিগুণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prevents layout reflow collisions during filtering.',
        bn: 'ফিল্টারিংয়ের সময় উপাদানগুলোর মধ্যকার সংঘর্ষ রোধের কথা ভাবুন।'
      },
      explanation: {
        en: 'absolute: true lifts filtered cards out of standard document flow, allowing surviving cards to glide into their new grid cells smoothly.',
        bn: 'absolute: true সরানো উপাদানগুলোকে সাময়িকভাবে সাধারণ প্রবাহের বাইরে রাখে, যার ফলে অবশিষ্ট কার্ডগুলো সহজে নিজের নতুন স্থানে সরে যেতে পারে।'
      }
    },
    {
      id: 'gsap-flip-acronym-ex',
      kind: 'mcq',
      topic: 'Meaning of the FLIP acronym',
      question: {
        en: 'What does the acronym FLIP represent in modern web animation engineering?',
        bn: 'আধুনিক ওয়েব অ্যানিমেশনে FLIP শব্দের পূর্ণরূপ কী?'
      },
      options: [
        {
          en: 'First, Last, Invert, Play',
          bn: 'First, Last, Invert, Play (প্রথম, শেষ, বিপরীত, প্লে)'
        },
        {
          en: 'Fast, Linear, Integrated, Physics',
          bn: 'Fast, Linear, Integrated, Physics (দ্রুত, লিনিয়ার, সমন্বিত, পদার্থবিজ্ঞান)'
        },
        {
          en: 'Float, Layout, Intersection, Padding',
          bn: 'Float, Layout, Intersection, Padding (ফ্লোট, লেআউট, ছেদ, প্যাডিং)'
        },
        {
          en: 'Frame, Layer, Image, Pixel',
          bn: 'Frame, Layer, Image, Pixel (ফ্রেম, লেয়ার, ছবি, পিক্সেল)'
        }
      ],
      answer: 0,
      hint: {
        en: 'First position, Last position, Invert delta, Play animation.',
        bn: 'প্রথম অবস্থান, শেষ অবস্থান, বিপরীত মান এবং প্লে অ্যানিমেশন।'
      },
      explanation: {
        en: 'First records initial state, Last records final state, Invert computes the transform delta, and Play animates back to identity.',
        bn: 'First শুরুর অবস্থান নেয়, Last শেষের অবস্থান নেয়, Invert ব্যবধান বের করে এবং Play জিপিউতে অ্যানিমেশনটি চালায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-flip-layout',
    title: {
      en: 'FLIP Layout Transitions Architecture Quiz',
      bn: 'FLIP লেআউট ট্রানজিশন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-flip-philosophy',
        kind: 'mcq',
        topic: 'Why FLIP replaces layout property animation',
        question: {
          en: 'Why is FLIP vastly superior to animating CSS grid or flex properties directly?',
          bn: 'সিএসএস গ্রিড বা ফ্লেক্স প্রপার্টি সরাসরি অ্যানিমেট করার চেয়ে FLIP কেন বহুগুণ শ্রেষ্ঠ?'
        },
        options: [
          {
            en: 'It executes the layout change in a single tick, then fakes the transition entirely on the GPU compositor using transforms',
            bn: 'এটি মাত্র এক মুহূর্তে লেআউট পরিবর্তন করে বাকি রূপান্তরটি সম্পূর্ণ জিপিউ ট্রান্সফর্মের সাহায্যে দেখায়'
          },
          {
            en: 'It runs without any JavaScript enabled',
            bn: 'এটি কোনো জাভাস্ক্রিপ্ট ছাড়াই চলে'
          },
          {
            en: 'It reduces image file sizes by 90 percent',
            bn: 'এটি ছবির সাইজ ৯০ শতাংশ কমায়'
          },
          {
            en: 'It converts HTML into WebAssembly',
            bn: 'এটি এইচটিএমএলকে ওয়েব-অ্যাসেম্বলিতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single layout pass plus GPU compositing.',
          bn: 'একবার লেআউট মেপে জিপিউতে মসৃণ রূপান্তরের কথা ভাবুন।'
        },
        explanation: {
          en: 'CSS cannot animate grid-template-columns smoothly; FLIP measures the start and end, animating the difference via hardware transforms.',
          bn: 'সিএসএস গ্রিড মসৃণভাবে বদলাতে পারে না; FLIP শুরুর ও শেষের ব্যবধান মেপে জিপিউ দিয়ে চোখের পলকে তা ফুটিয়ে তোলে।'
        }
      },
      {
        id: 'q-gsap-flip-sync',
        kind: 'mcq',
        topic: 'Synchronous execution of FLIP steps',
        question: {
          en: 'Why must DOM mutations occur synchronously between Flip.getState() and Flip.from()?',
          bn: 'Flip.getState এবং Flip.from এর মাঝে ডম পরিবর্তন কেন সাথে সাথে সিঙ্ক্রোনাসভাবে করতে হয়?'
        },
        options: [
          {
            en: 'To ensure Flip.from can immediately read the newly applied layout geometry before the browser paints a flash of intermediate content',
            bn: 'যাতে ব্রাউজার স্ক্রিনে কোনো অসঙ্গতি আঁকার আগেই Flip.from নতুন রূপান্তরটি প্রস্তুত করে নিতে পারে'
          },
          {
            en: 'Because asynchronous operations delete the GPU buffer',
            bn: 'কারণ অ্যাসিনক্রোনাস কাজ জিপিউ বাফার মুছে ফেলে'
          },
          {
            en: 'Because FlipPlugin does not work inside functions',
            bn: 'কারণ FlipPlugin ফাংশনের ভেতর চলে না'
          },
          {
            en: 'To prevent the browser from closing the tab',
            bn: 'ব্রাউজার ট্যাব বন্ধ হওয়া ঠেকাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Preventing visual flash before inversion.',
          bn: 'চোখে কোনো বিভ্রান্তিকর রূপান্তর পড়ার আগেই কাজ শেষের কথা ভাবুন।'
        },
        explanation: {
          en: 'If asynchronous delays occur, the user sees the element jump to its final spot before the inverted transform can be applied.',
          bn: 'দেরি হলে ইউজার উপাদানটিকে হঠাৎ নতুন জায়গায় দেখতে পাবে, যার ফলে রূপান্তরের মসৃণতা নষ্ট হয়ে যাবে।'
        }
      },
      {
        id: 'q-gsap-flip-nested',
        kind: 'mcq',
        topic: 'Preventing distortion with nested: true',
        question: {
          en: 'What problem does passing nested: true resolve during FLIP scale expansions?',
          bn: 'FLIP স্কেলিংয়ের সময় nested: true অপশনটি কোন সমস্যাটি দূর করে?'
        },
        options: [
          {
            en: 'It counter-scales child elements (text, icons) so they do not stretch or distort awkwardly while the parent container expands',
            bn: 'এটি ভেতরের লেখা বা আইকনকে বিপরীত স্কেলিং দিয়ে ঠিক রাখে যাতে মূল বক্স বড় হলেও লেখা চ্যাপ্টা না হয়'
          },
          {
            en: 'It deletes all child elements from the DOM',
            bn: 'এটি ভেতরের সব উপাদান ডম থেকে মুছে ফেলে'
          },
          {
            en: 'It reverses the order of sentences',
            bn: 'এটি বাক্যের ক্রম উল্টে দেয়'
          },
          {
            en: 'It forces the text to be uppercase',
            bn: 'এটি সব লেখাকে বড় হাতের অক্ষরে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Counter-scaling children to prevent visual distortion.',
          bn: 'ভেতরের উপাদান বিকৃত না হওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'When a parent scales, children inherit that scale distortion; nested: true applies an inverted scale to children to keep text crisp.',
          bn: 'বক্স বড় হলে ভেতরের লেখাও প্রসারিত হতে চায়; nested: true বিপরীত স্কেল দিয়ে লেখাকে স্বাভাবিক ও নিখুঁত রাখে।'
        }
      },
      {
        id: 'q-gsap-shared-element',
        kind: 'mcq',
        topic: 'Shared element modal expansion pattern',
        question: {
          en: 'In modern mobile and web UX, what is a shared element transition created with FLIP?',
          bn: 'আধুনিক ওয়েব ডিজাইনে FLIP দিয়ে তৈরি শেয়ার্ড এলিমেন্ট ট্রানজিশন কী?'
        },
        options: [
          {
            en: 'A seamless visual morph where a small thumbnail or list item fluidly expands into a full-page modal or hero showcase',
            bn: 'একটি অবিচ্ছিন্ন রূপান্তর যেখানে একটি ছোট থাম্বনেইল মাখনের মতো মসৃণভাবে বড় হয়ে পূর্ণাঙ্গ পেজ বা মডালে পরিণত হয়'
          },
          {
            en: 'Sharing user passwords across multiple social media accounts',
            bn: 'বিভিন্ন সোশ্যাল মিডিয়া অ্যাকাউন্টে পাসওয়ার্ড শেয়ার করা'
          },
          {
            en: 'A tool that sends emails to multiple recipients',
            bn: 'একসাথে একাধিক ব্যক্তিকে ইমেইল পাঠানোর টুল'
          },
          {
            en: 'Downloading two video files at the same time',
            bn: 'একসাথে দুটি ভিডিও ফাইল ডাউনলোড করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Seamless morph from thumbnail to full-screen view.',
          bn: 'ছোট থাম্বনেইল থেকে ফুল-স্ক্রিন দৃশ্যের মসৃণ রূপান্তর।'
        },
        explanation: {
          en: 'Shared element transitions connect two distinct states of an object visually, establishing cognitive continuity for users.',
          bn: 'শেয়ার্ড এলিমেন্ট ট্রানজিশন দুটি আলাদা অবস্থাকে এমন চমৎকারভাবে যুক্ত করে যা ইউজারের কাছে অবিশ্বাস্য প্রিমিয়াম মনে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'physics-and-draggables',
    title: {
      en: 'Draggable, Inertia & Physics-Based Motion — Tactile Touch & Mouse Physics',
      bn: 'ড্র্যাগেবল, ইনার্শিয়া ও ফিজিক্স মোশন — স্পর্শ ও মাউস নির্ভর বাস্তবসম্মত গতি'
    }
  }
};
