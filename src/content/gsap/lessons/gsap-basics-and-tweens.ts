import type { Lesson } from '../../../lib/types';

export const GsapBasicsAndTweensLesson: Lesson = {
  slug: 'gsap-basics-and-tweens',
  tech: 'gsap',
  title: {
    en: 'GSAP Tweens, Easing & Transforms — 60FPS Web Animation Foundation',
    bn: 'GSAP টুইনস, ইজিং ও ট্রান্সফর্মস — ৬০ এফপিএস ওয়েব অ্যানিমেশন ভিত্তি'
  },
  summary: {
    en: 'GreenSock Animation Platform (GSAP) is the industry standard for high-performance JavaScript animation. Operating on top of an internal requestAnimationFrame ticker, GSAP animates CSS properties, SVG elements, Canvas targets, and Three.js objects with sub-millisecond precision. Traditional CSS transitions and jQuery animate suffer from layout thrashing and awkward interruption handling. GSAP tweens (gsap.to, gsap.from, gsap.fromTo) bypass these limitations by modifying GPU-composited transform properties (x, y, scale, rotation) directly. Understanding mathematical easing functions like power2.out, configuring stagger offsets across element lists, and avoiding layout properties (top, left, width) guarantees silky 60FPS and 120FPS rendering.',
    bn: 'গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম (GSAP) হলো উচ্চগতির ওয়েব অ্যানিমেশনের জন্য আন্তর্জাতিকভাবে স্বীকৃত স্ট্যান্ডার্ড। ব্রাউজারের নিজস্ব রেন্ডার টিকারে চলে GSAP সিএসএস, এসভিজি, ক্যানভাস এবং থ্রি.জেএস অবজেক্টকে অসাধারণ ক্ষিপ্রতায় অ্যানিমেট করে। সাধারণ সিএসএস ট্রানজিশন বা জেকুয়েরি অ্যানিমেশন ব্রাউজারে রিফ্লো ঘটিয়ে ফ্রেম ড্রপ তৈরি করে। GSAP-এর টুইন মেথডগুলো (gsap.to, gsap.from, gsap.fromTo) সরাসরি জিপিউ-কম্পোজিটেড রূপান্তর প্রপার্টি (x, y, scale, rotation) পরিবর্তন করে এই বাধা দূর করে। power2.out এর মতো ইজিং ফাংশন এবং একাধিক উপাদানে স্ট্যাগার প্রয়োগ করে ৬০ ও ১২০ এফপিএসের মসৃণ গতি পাওয়া যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: What is a GSAP Tween?',
        bn: 'মূল ধারণা: GSAP টুইন কী?'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Web animation brings static interface elements to life. The word tween originates from the classic animation phrase in-betweening — calculating visual frames between a start state and an end state. The GreenSock Animation Platform (GSAP) provides 3 core methods to create tweens. First, gsap.to() animates from current values to destination targets. Second, gsap.from() animates from designated starting values back to current defaults. Third, gsap.fromTo() defines both boundaries explicitly.',
        bn: 'ওয়েব অ্যানিমেশন স্থির উপাদানগুলোকে জীবন্ত করে তোলে। টুইন (Tween) শব্দটি এসেছে অ্যানিমেশনের "ইন-বিটুইনিং" ধারণা থেকে — যার অর্থ শুরুর অবস্থান এবং শেষের অবস্থানের মধ্যবর্তী ফ্রেমগুলো নিখুঁতভাবে গণনা করা। গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম (GSAP)-এ ৩টি প্রধান মেথড রয়েছে। প্রথমত, gsap.to() বর্তমান অবস্থা থেকে নতুন অবস্থায় নিয়ে যায়। দ্বিতীয়ত, gsap.from() নির্দিষ্ট শুরু থেকে বর্তমান অবস্থায় ফিরিয়ে আনে। তৃতীয়ত, gsap.fromTo() উভয় সীমানাই সরাসরি নির্ধারণ করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Tween',
          def: {
            en: 'A high-performance animation instance that smoothly interpolates properties of a target object over a duration',
            bn: 'একটি উচ্চগতির অ্যানিমেশন ইনস্ট্যান্স যা নির্দিষ্ট সময়ের মধ্যে কোনো অবজেক্টের মানগুলোকে মসৃণভাবে পরিবর্তন করে'
          }
        },
        {
          term: 'Easing Function',
          def: {
            en: 'A mathematical acceleration curve governing the rate of change over time (such as power2.out or back.out)',
            bn: 'একটি গাণিতিক ত্বরণ রেখা যা সময়ের সাথে সাথে গতির হ্রাস-বৃদ্ধি নির্ধারণ করে (যেমন power2.out)'
          }
        },
        {
          term: 'Stagger',
          def: {
            en: 'Offsetting the start time of animations across a collection of matching DOM elements to create visual cascading waves',
            bn: 'একাধিক উপাদানের অ্যানিমেশন শুরুর মাঝে সামান্য সময়ের ব্যবধান রেখে ঢেউয়ের মতো ইফেক্ট তৈরি করা'
          }
        },
        {
          term: 'GPU Compositing',
          def: {
            en: 'Animating hardware-accelerated transform properties (x, y, scale) that bypass CPU layout recalculation',
            bn: 'জিপিউ-ত্বরান্বিত রূপান্তর প্রপার্টি অ্যানিমেট করা যা ব্রাউজারের সিপিইউ রিফ্লো এড়িয়ে চলে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'transforms-vs-layout',
      text: {
        en: 'Hardware Transforms vs Layout Reflows',
        bn: 'হার্ডওয়্যার ট্রান্সফর্ম বনাম লেআউট রিফ্লো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When animating web elements, performance is dictated by browser rendering phases: Layout, Paint, and Composite. Animating top, left, width, or margin forces the browser to recalculate the geometry of the entire DOM tree on every frame (Layout Thrashing). In contrast, animating transform properties like x, y, scale, and rotation allows the GPU to translate layers without touching layout or repainting pixels.',
        bn: 'ওয়েব উপাদান অ্যানিমেট করার সময় গতি নির্ভর করে ব্রাউজারের ৩টি ধাপের ওপর: লেআউট, পেইন্ট এবং কম্পোজিট। top, left বা margin অ্যানিমেট করলে ব্রাউজারকে প্রতি ফ্রেমে পুরো পেজের মাপ নতুন করে হিসাব করতে হয় (লেআউট ট্র্যাশিং)। বিপরীতে x, y, scale বা rotation অ্যানিমেট করলে জিপিউ সরাসরি লেয়ার রূপান্তর করে, ফলে কোনো বাড়তি পেইন্ট ছাড়াই চরম গতি পাওয়া যায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'CSS / jQuery vs GSAP Animation Architecture',
        bn: 'সিএসএস / জেকুয়েরি বনাম GSAP অ্যানিমেশন তুলনা'
      },
      head: [
        { en: 'Dimension', bn: 'মাত্রা' },
        { en: 'CSS Transitions / jQuery', bn: 'সিএসএস ট্রানজিশন / জেকুয়েরি' },
        { en: 'GSAP Animation Engine', bn: 'GSAP অ্যানিমেশন ইঞ্জিন' }
      ],
      rows: [
        [
          { en: 'Interruption & Overwrite Handling', bn: 'ইন্টারাপশন ও ওভাররাইট নিয়ন্ত্রণ' },
          { en: 'Jerky jumps or conflicting style rules when animations trigger rapidly', bn: 'দ্রুত ক্লিক বা ইভেন্টে ঝাঁকুনি ও স্টাইল বিরোধ দেখা দেয়' },
          { en: 'Seamless in-flight interpolation and intelligent overwrite management', bn: 'চলন্ত অবস্থাতেও মসৃণ রূপান্তর এবং স্বয়ংক্রিয় ওভাররাইট সমাধান' }
        ],
        [
          { en: 'Target Capability', bn: 'অ্যানিমেট করার সক্ষমতা' },
          { en: 'DOM HTML elements only; cannot animate Canvas or Three.js variables', bn: 'কেবল ডম উপাদান; ক্যানভাস বা থ্রি.জেএস ভ্যারিয়েবল অ্যানিমেট করতে পারে না' },
          { en: 'Any JavaScript object, CSS property, SVG attribute, or 3D vector', bn: 'যেকোনো জাভাস্ক্রিপ্ট অবজেক্ট, সিএসএস, এসভিজি বা 3D ভেক্টর' }
        ],
        [
          { en: 'Timing Precision', bn: 'সময়ের নিখুঁত পরিমাপ' },
          { en: 'Dependent on erratic timers susceptible to thread delays', bn: 'ধীরগতির টাইমারের ওপর নির্ভরশীল যা প্রায়ই ফ্রেম ড্রপ ঘটায়' },
          { en: 'Internal requestAnimationFrame delta-time ticker with zero drift', bn: 'অভ্যন্তরীণ রেন্ডার টিকারে চলে কোনো ফ্রেম বিলম্ব ছাড়া' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Easing Math & Interpolation Curves',
        bn: 'চালনাযোগ্য সিমুলেশন: ইজিং গণিত ও ইন্টারপোলেশন কার্ভ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates GSAP tween interpolation, comparing linear constant motion against a power2.out deceleration easing curve across a 500 pixel travel span:',
        bn: 'নিচের স্ক্রিপ্টটি GSAP টুইন ইন্টারপোলেশন চালায় এবং ৫০০ পিক্সেল দূরত্বে লিনিয়ার গতির সাথে power2.out ইজিং কার্ভের গতির তুলনা প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'gsap-easing-sim',
      lang: 'javascript',
      code: `// GSAP Tweens & Power Easing Math Simulator

// power2.out deceleration formula: 1 - (1 - t)^2
function power2Out(t) {
  return 1 - Math.pow(1 - t, 2);
}

const tweenStart = 0;
const tweenEnd = 500; // x in px
const tMid = 0.5; // halfway in time (0.5s of 1.0s)

// Linear interpolation at midpoint
const posLinear = tweenStart + (tweenEnd - tweenStart) * tMid;

// Power2.out eased interpolation at midpoint
const posPower2 = tweenStart + (tweenEnd - tweenStart) * power2Out(tMid);

console.log('Linear position at 0.5s:', posLinear);
// -> Linear position at 0.5s: 250

console.log('Power2.out eased position at 0.5s:', posPower2);
// -> Power2.out eased position at 0.5s: 375

console.log('Total animation travel distance in pixels:', tweenEnd);
// -> Total animation travel distance in pixels: 500`,
      caption: {
        en: 'Figure 1: At 0.5s of a 500px tween, linear motion reaches 250px while power2.out accelerates to 375px',
        bn: 'চিত্র ১: ৫০০ পিক্সেল টুইনে ০.৫ সেকেন্ডে লিনিয়ার গতি ২৫০ পিক্সেল হলেও power2.out এগিয়ে গিয়ে ৩৭৫ পিক্সেলে পৌঁছায়'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for High-Performance Tweens',
        bn: 'উচ্চগতির টুইন অ্যানিমেশনের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 essential rules to prevent animation stutter and layout thrashing:',
        bn: 'ল্যাগ ও লেআউট ট্র্যাশিং এড়াতে এই ৪টি অপরিহার্য নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Animate x and y Instead of top and left',
          def: {
            en: 'Always animate transform properties (x, y) rather than positional layout properties (top, left) to keep work on the GPU',
            bn: 'লেআউট রিফ্লো এড়িয়ে কাজ জিপিউতে রাখতে top বা left এর বদলে সর্বদা x ও y অ্যানিমেট করুন'
          }
        },
        {
          term: 'Rule 2: Use force3D: true on Heavy Elements',
          def: {
            en: 'Configure force3D: true or auto to force the browser to promote animating elements onto dedicated GPU compositor layers',
            bn: 'ভারী উপাদানে force3D দিয়ে ব্রাউজারকে আলাদা জিপিউ কম্পোজিটর লেয়ার তৈরি করতে নির্দেশ দিন'
          }
        },
        {
          term: 'Rule 3: Set will-change: transform in CSS Sparingly',
          def: {
            en: 'Apply will-change: transform to elements about to animate, but remove it afterward to avoid consuming excessive VRAM',
            bn: 'অ্যানিমেশন শুরুর আগে will-change দিন, তবে অতিরিক্ত জিপিউ মেমোরি খরচ রোধে কাজ শেষে সরিয়ে ফেলুন'
          }
        },
        {
          term: 'Rule 4: Avoid from() Tweens on Unstyled SSR Elements',
          def: {
            en: 'Use gsap.fromTo() instead of gsap.from() when animating server-rendered HTML to prevent Flash of Unstyled Content (FOUC)',
            bn: 'সার্ভার রেন্ডার উপাদানে FOUC এড়াতে gsap.from এর বদলে gsap.fromTo ব্যবহার করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-midpoint-eased-ex',
      kind: 'mcq',
      topic: 'Eased position calculation under power2.out',
      question: {
        en: 'In a 500 pixel tween using power2.out easing, what is the position of the element at the midpoint of its duration (t = 0.5)?',
        bn: 'power2.out ইজিং বিশিষ্ট ৫০০ পিক্সেল টুইনে অ্যানিমেশন সময়ের ঠিক অর্ধেক মুহূর্তে (t = ০.৫) অবজেক্টের অবস্থান কত?'
      },
      options: [
        {
          en: '375 pixels (75% of travel completed)',
          bn: '৩৭৫ পিক্সেল (মোট দূরত্বের ৭৫% সম্পন্ন)'
        },
        {
          en: '250 pixels (50% linear midpoint)',
          bn: '২৫০ পিক্সেল (৫০% লিনিয়ার অবস্থান)'
        },
        {
          en: '500 pixels (finished early)',
          bn: '৫০০ পিক্সেল (আগেই সম্পন্ন)'
        },
        {
          en: '100 pixels',
          bn: '১০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'power2Out(0.5) = 1 - (1 - 0.5)^2 = 0.75.',
        bn: 'power2Out(০.৫) = ১ - (১ - ০.৫)^২ = ০.৭৫।'
      },
      explanation: {
        en: 'Evaluating power2Out at 0.5 yields 0.75; 500 * 0.75 = 375 pixels.',
        bn: '০.৫ সময়ে power2Out মান দেয় ০.৭৫; ৫০০ * ০.৭৫ = ৩৭৫ পিক্সেল।'
      }
    },
    {
      id: 'gsap-transform-vs-layout-ex',
      kind: 'mcq',
      topic: 'Hardware-accelerated properties vs layout properties',
      question: {
        en: 'Which property pair triggers zero layout reflow and animates strictly on the GPU compositor layer?',
        bn: 'কোন প্রপার্টি জোড়া কোনো লেআউট রিফ্লো ঘটায় না এবং সরাসরি জিপিউ কম্পোজিটর লেয়ারে চলে?'
      },
      options: [
        {
          en: 'x and y (translating via CSS transform matrix)',
          bn: 'x এবং y (সিএসএস ট্রান্সফর্ম ম্যাট্রিক্সের মাধ্যমে স্থানান্তর)'
        },
        {
          en: 'top and left (triggering full browser layout re-calculation)',
          bn: 'top এবং left (পুরো ব্রাউজার লেআউট রিক্যালকুলেশন ঘটায়)'
        },
        {
          en: 'width and height',
          bn: 'width এবং height'
        },
        {
          en: 'marginTop and paddingLeft',
          bn: 'marginTop এবং paddingLeft'
        }
      ],
      answer: 0,
      hint: {
        en: 'CSS transform properties.',
        bn: 'সিএসএস ট্রান্সফর্ম প্রপার্টির কথা ভাবুন।'
      },
      explanation: {
        en: 'Transforms (x, y) modify the elements layer matrix on the GPU, avoiding the expensive CPU Layout and Paint phases.',
        bn: 'ট্রান্সফর্ম (x, y) জিপিউতে লেয়ার ম্যাট্রিক্স পরিবর্তন করে, যা ভারী লেআউট ও পেইন্ট ধাপ সম্পূর্ণ এড়িয়ে চলে।'
      }
    },
    {
      id: 'gsap-stagger-effect-ex',
      kind: 'mcq',
      topic: 'Stagger parameter functionality in GSAP',
      question: {
        en: 'What does specifying stagger: 0.1 do when animating a list of 10 list items with gsap.to()?',
        bn: 'gsap.to() দিয়ে ১০টি আইটেম অ্যানিমেট করার সময় stagger: 0.1 দিলে কী ঘটে?'
      },
      options: [
        {
          en: 'It offsets each items animation start time by 0.1 seconds after the previous one, creating a smooth cascade',
          bn: 'এটি প্রতিটি আইটেমের শুরুর মাঝে ০.১ সেকেন্ডের ব্যবধান রাখে, ফলে চমৎকার ক্যাসকেড ইফেক্ট তৈরি হয়'
        },
        {
          en: 'It slows the animation down by 1000 percent',
          bn: 'এটি অ্যানিমেশনের গতি ১০০০ শতাংশ ধীর করে দেয়'
        },
        {
          en: 'It makes all 10 items shake randomly',
          bn: 'এটি ১০টি আইটেমকেই এলোমেলোভাবে কাঁপাতে থাকে'
        },
        {
          en: 'It deletes every tenth DOM element',
          bn: 'এটি প্রতি দশম উপাদানকে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Cascading sequential start offsets.',
        bn: 'ধারাবাহিক শুরুর সময়ের ব্যবধানের কথা ভাবুন।'
      },
      explanation: {
        en: 'Stagger introduces a delay between the start of each target element in an array, generating visual ripples with zero extra code.',
        bn: 'স্ট্যাগার তালিকার উপাদানগুলোর শুরুর মাঝে ব্যবধান রেখে অতিরিক্ত কোড ছাড়াই ঢেউয়ের মতো ইফেক্ট তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-basics-tweens',
    title: {
      en: 'GSAP Tweens & Easing Architecture Quiz',
      bn: 'GSAP টুইন ও ইজিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-tween-methods',
        kind: 'mcq',
        topic: 'Difference between gsap.to and gsap.from',
        question: {
          en: 'What is the mechanical difference between gsap.to() and gsap.from()?',
          bn: 'gsap.to() এবং gsap.from()-এর মধ্যে যান্ত্রিক পার্থক্য কী?'
        },
        options: [
          {
            en: 'gsap.to animates from current values to targets, whereas gsap.from animates from specified values back to current defaults',
            bn: 'gsap.to বর্তমান মান থেকে লক্ষ্যে যায়, আর gsap.from নির্দিষ্ট মান থেকে বর্তমান স্বাভাবিক অবস্থায় ফিরে আসে'
          },
          {
            en: 'gsap.to works only in Node.js while gsap.from works in the browser',
            bn: 'gsap.to শুধু নোড.জেএসে চলে আর gsap.from ব্রাউজারে চলে'
          },
          {
            en: 'gsap.from converts the element into an SVG canvas',
            bn: 'gsap.from উপাদানটিকে একটি এসভিজি ক্যানভাসে রূপান্তর করে'
          },
          {
            en: 'gsap.to cannot animate opacity or scale',
            bn: 'gsap.to অপাসিটি বা স্কেল অ্যানিমেট করতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Destination target vs starting origin.',
          bn: 'গন্তব্যের মান বনাম শুরুর আদি মানের কথা ভাবুন।'
        },
        explanation: {
          en: 'gsap.to treats passed properties as final destination values; gsap.from treats them as initial starting values and animates back to current state.',
          bn: 'gsap.to দেওয়া মানগুলোকে গন্তব্য ধরে এগোয়; আর gsap.from সেগুলোকে শুরুর মান ধরে বর্তমান অবস্থায় ফিরিয়ে আনে।'
        }
      },
      {
        id: 'q-gsap-easing-physics',
        kind: 'mcq',
        topic: 'Visual impact of out easing curves',
        question: {
          en: 'Why do UI designers heavily favor out eases (such as power2.out or expo.out) for entrance animations?',
          bn: 'ইউজার ইন্টারফেস ডিজাইনাররা অবজেক্টের প্রবেশের জন্য কেন out ইজিং (যেমন power2.out) সবচেয়ে বেশি পছন্দ করেন?'
        },
        options: [
          {
            en: 'They start quickly to respond instantly to user interaction, then smoothly decelerate to rest like physical objects',
            bn: 'তারা দ্রুত শুরু হয়ে তাৎক্ষণিক প্রতিক্রিয়া দেখায়, তারপর বাস্তব বস্তুর মতো মসৃণভাবে গতি কমিয়ে থামে'
          },
          {
            en: 'They invert the browser color scheme automatically',
            bn: 'তারা স্বয়ংক্রিয়ভাবে ব্রাউজারের রঙ উল্টে দেয়'
          },
          {
            en: 'They require zero GPU memory',
            bn: 'তাদের কোনো জিপিউ মেমোরি লাগে না'
          },
          {
            en: 'They prevent users from scrolling the page',
            bn: 'তারা ব্যবহারকারীকে স্ক্রোল করা থেকে বিরত রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fast start with natural physical deceleration.',
          bn: 'দ্রুত শুরু ও প্রাকৃতিক মন্দনের কথা ভাবুন।'
        },
        explanation: {
          en: 'Human perception associates instant snappy starts with responsiveness, while gradual deceleration mimics physical friction.',
          bn: 'দ্রুত শুরু ইন্টারফেসকে চটপটে মনে করায় এবং ধীরে থামা বাস্তব জগতের ঘর্ষণকে সুন্দরভাবে ফুটিয়ে তোলে।'
        }
      },
      {
        id: 'q-gsap-layout-thrash',
        kind: 'mcq',
        topic: 'Layout thrashing and dropped frames',
        question: {
          en: 'Why does animating CSS top and left frequently cause dropped frames on 120Hz mobile devices?',
          bn: 'কেন সিএসএস top ও left অ্যানিমেট করলে ১২০ হার্জের মোবাইলে প্রায়ই ফ্রেম ড্রপ দেখা দেয়?'
        },
        options: [
          {
            en: 'They trigger the CPU Layout phase, forcing the browser to recalculate bounding boxes for surrounding DOM elements on every frame',
            bn: 'তারা সিপিইউ লেআউট রিক্যালকুলেশন ঘটায়, ফলে প্রতি ফ্রেমে চারপাশের উপাদানের মাপ নতুন করে বের করতে হয়'
          },
          {
            en: 'Mobile phones disable CSS completely at 120Hz',
            bn: '১২০ হার্জে মোবাইল ফোন সিএসএস সম্পূর্ণ বন্ধ করে দেয়'
          },
          {
            en: 'Because top and left values must be encrypted over HTTPS',
            bn: 'কারণ top ও left মান এনক্রিপ্ট হতে হয়'
          },
          {
            en: 'Because GSAP does not support the left property',
            bn: 'কারণ GSAP-এ left প্রপার্টি সমর্থিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'CPU layout reflows across surrounding elements.',
          bn: 'সিপিইউতে পুরো পেজের মাপ বারবার হিসাব করার বোঝা।'
        },
        explanation: {
          en: 'Positional layout changes affect sibling elements, forcing the browser to execute synchronous geometry layouts 120 times per second.',
          bn: 'পজিশনাল পরিবর্তনে আশপাশের উপাদান প্রভাবিত হয়, ফলে ব্রাউজার প্রতি সেকেন্ডে ১২০ বার জটিল মাপজোখ করতে গিয়ে আটকে যায়।'
        }
      },
      {
        id: 'q-gsap-force3d',
        kind: 'mcq',
        topic: 'Hardware layer promotion with force3D',
        question: {
          en: 'What does GSAP force3D: true instruct the browser to do with the animating element?',
          bn: 'GSAP-এর force3D: true অপশনটি ব্রাউজারকে অ্যানিমেটিং উপাদানের সাথে কী করতে নির্দেশ দেয়?'
        },
        options: [
          {
            en: 'Promotes the element to its own dedicated GPU composite layer (via translate3d or will-change) for hardware rasterization',
            bn: 'হার্ডওয়্যার রেন্ডারিংয়ের জন্য উপাদানটিকে আলাদা জিপিউ কম্পোজিট লেয়ারে তুলে দেয়'
          },
          {
            en: 'Converts the 2D web page into a stereoscopic virtual reality game',
            bn: '2D পেজকে ভার্চুয়াল রিয়েলিটি গেমে রূপান্তর করে'
          },
          {
            en: 'Forces the camera to rotate 360 degrees',
            bn: 'ক্যামেরাকে ৩৬০ ডিগ্রি ঘোরাতে বাধ্য করে'
          },
          {
            en: 'Prints the web page onto a 3D physical printer',
            bn: 'পেজটিকে ফিজিক্যাল 3D প্রিন্টারে পাঠিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'GPU compositor layer isolation.',
          bn: 'আলাদা জিপিউ লেয়ার তৈরির কথা ভাবুন।'
        },
        explanation: {
          en: 'force3D pushes the element onto a distinct hardware compositor layer, allowing the GPU to manipulate it without repainting background pixels.',
          bn: 'force3D উপাদানটিকে আলাদা জিপিউ লেয়ারে তুলে নেয়, যার ফলে পেছনের ব্যাকগ্রাউন্ড স্পর্শ না করেই দ্রুত অ্যানিমেশন চলে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'timelines-and-orchestration',
    title: {
      en: 'GSAP Timelines, Position Parameter & Orchestration — Complex Choreography',
      bn: 'GSAP টাইমলাইনস, পজিশন প্যারামিটার ও অর্কেস্ট্রেশন — জটিল কোরিওগ্রাফি নিয়ন্ত্রণ'
    }
  }
};
