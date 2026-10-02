import type { Lesson } from '../../../lib/types';

export const TimelinesAndOrchestrationLesson: Lesson = {
  slug: 'timelines-and-orchestration',
  tech: 'gsap',
  title: {
    en: 'GSAP Timelines, Position Parameter & Orchestration — Complex Choreography',
    bn: 'GSAP টাইমলাইনস, পজিশন প্যারামিটার ও অর্কেস্ট্রেশন — জটিল কোরিওগ্রাফি নিয়ন্ত্রণ'
  },
  summary: {
    en: 'Choreographing multi-step web animations using standalone delays (such as delay: 1.5) quickly collapses into brittle, unmaintainable code. If an early animation duration changes by 0.2 seconds, every subsequent delay must be manually recalculated. GSAP Timelines (gsap.timeline()) provide a master container that sequences tweens dynamically. Developers gain unified playback controls: play, pause, reverse, seek, and variable timeScale. The cornerstone of timeline choreography is the Position Parameter — enabling absolute timestamps, relative gaps, label synchronization, and overlapping transitions (< and <0.5). Nesting modular sub-timelines into master sequences allows teams to orchestrate complex website intros and UI flows with surgical timing precision.',
    bn: 'আলাদা আলাদা ডিলে (যেমন delay: 1.5) দিয়ে জটিল বহু-ধাপের অ্যানিমেশন তৈরি করতে গেলে কোড দ্রুত বিশৃঙ্খল ও ভঙ্গুর হয়ে পড়ে। আগের একটি অ্যানিমেশনের সময় ০.২ সেকেন্ড বদলালে পরের সব হিসাব ম্যানুয়ালি পাল্টাতে হয়। GSAP টাইমলাইন (gsap.timeline()) এই সমস্যার সমাধান দেয় — এটি একটি সার্বজনীন কন্টেইনার যা একাধিক টুইনকে ধারাবাহিকভাবে সাজায়। এর মাধ্যমে সম্পূর্ণ সিকোয়েন্সকে একসাথে প্লে, পজ, রিভার্স, নির্দিষ্ট সময়ে জাম্প (seek) বা গতি পরিবর্তন (timeScale) করা যায়। পজিশন প্যারামিটারের মাধ্যমে নিখুঁত ওভারল্যাপ (< এবং <০.৫) এবং নেস্টেড টাইমলাইনের সমন্বয়ে টিমগুলো বিশ্বমানের অ্যানিমেশন কোরিওগ্রাফি তৈরি করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: Why Standalone Delays Fail in Production',
        bn: 'মূল ধারণা: প্রোডাকশনে ম্যানুয়াল ডিলে কেন ব্যর্থ হয়?'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'In basic web development, developers chain animations by guessing timing offsets with delay: 0.5, delay: 1.2, and delay: 2.1. This fragile approach breaks immediately when a client asks to make the title fade in slightly slower. The developer must rewrite every subsequent delay across the entire file. The GreenSock Animation Platform (GSAP) Timeline acts as a smart scheduling track where tweens append chronologically by default, preserving relative rhythm automatically.',
        bn: 'সাধারণ কোডিংয়ে ডেভেলপাররা বিভিন্ন উপাদানে delay: 0.5 বা delay: 1.2 দিয়ে সিকোয়েন্স বানানোর চেষ্টা করেন। কিন্তু ক্লায়েন্ট যদি শুরুর লেখাটি একটু আস্তে আসতে বলে, তবে পেছনের সব ডিলে নতুন করে হিসাব করে বদলাতে হয়। গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম (GSAP) টাইমলাইন একটি স্মার্ট ট্রেনের ট্র্যাকের মতো কাজ করে — যেখানে প্রতিটি অ্যানিমেশন স্বাভাবিকভাবেই আগেরটির ঠিক পরে যুক্ত হয়, ফলে কোনো ম্যানুয়াল সময় বদলানো ছাড়াই ছন্দ ঠিক থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'GSAP Timeline',
          def: {
            en: 'A container that houses and sequences tweens chronologically, providing unified playback control across the entire group',
            bn: 'একটি কন্টেইনার যা একাধিক টুইনকে ক্রমানুসারে সাজায় এবং পুরো দলের ওপর একক প্লেব্যাক নিয়ন্ত্রণ দেয়'
          }
        },
        {
          term: 'Position Parameter',
          def: {
            en: 'The flexible placement argument following the vars object, dictating exactly when a tween inserts into the timeline',
            bn: 'টাইমলাইনের বিশেষ প্যারামিটার যা নির্ধারণ করে কোনো টুইন ঠিক কোন মুহূর্তে শুরু হবে'
          }
        },
        {
          term: 'Relative Overlap (<)',
          def: {
            en: 'A position syntax aligning the start of the current tween with the start time of the directly preceding tween',
            bn: 'একটি পজিশন সিনট্যাক্স যা বর্তমান টুইনকে আগের টুইন শুরু হওয়ার ঠিক একই সময়ে শুরু করায়'
          }
        },
        {
          term: 'Timeline Nesting',
          def: {
            en: 'Embedding modular child timelines inside a parent master timeline for organized, maintainable animation architecture',
            bn: 'বড় অ্যানিমেশনকে ছোট ছোট টাইমলাইনে ভাগ করে একটি মূল মাস্টার টাইমলাইনে যুক্ত করার উন্নত পদ্ধতি'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'position-syntax',
      text: {
        en: 'The Position Parameter Syntax Spectrum',
        bn: 'পজিশন প্যারামিটার সিনট্যাক্স ও ব্যবহারের নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The position parameter accepts several expressions that give you full musical control over animation timing. Omitting the parameter inserts the tween at the natural end of the timeline. Passing a raw number like 2 forces the tween to start at exactly 2 seconds from the start. Passing +=0.5 creates a 0.5-second pause gap, while -=0.5 overlaps with the previous tween by 0.5 seconds. Passing < starts concurrently with the previous tween, and <0.5 starts 0.5 seconds after the previous tween began.',
        bn: 'পজিশন প্যারামিটার বিভিন্ন শক্তিশালী সিনট্যাক্স সমর্থন করে। কিছু না দিলে অ্যানিমেশনটি স্বাভাবিকভাবেই আগেরটির শেষে যুক্ত হয়। সরাসরি ২ লিখলে পুরো টাইমলাইনের ২ সেকেন্ডের মাথায় শুরু হয়। +=0.5 দিলে মাঝে ০.৫ সেকেন্ডের বিরতি তৈরি হয়, আর -=0.5 দিলে আগেরটির শেষ হওয়ার ০.৫ সেকেন্ড আগেই শুরু হয়। < দিলে আগেরটির সাথে একসাথে শুরু হয় এবং <0.5 দিলে আগেরটি শুরু হওয়ার ০.৫ সেকেন্ড পর চলতে শুরু করে।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'GSAP Position Parameter Reference Guide',
        bn: 'GSAP পজিশন প্যারামিটার নির্দেশিকা'
      },
      head: [
        { en: 'Syntax Pattern', bn: 'সিনট্যাক্স' },
        { en: 'Behavioral Description', bn: 'আচরণ ও প্রভাব' },
        { en: 'Common Choreography Use Case', bn: 'ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'omitted (default)', bn: 'বাদ দেওয়া (ডিফল্ট)' },
          { en: 'Appends directly to the very end of the entire timeline', bn: 'পুরো টাইমলাইনের একদম শেষে যুক্ত হয়' },
          { en: 'Sequential stepped tutorials and linear intro reveals', bn: 'পরপর ঘটা স্টেপ বা লিনিয়ার ইন্ট্রো প্রদর্শন' }
        ],
        [
          { en: '"<"', bn: '"<"' },
          { en: 'Starts at the exact same instant as the previous tween began', bn: 'আগের টুইন শুরু হওয়ার ঠিক একই মুহূর্তে শুরু হয়' },
          { en: 'Moving an icon while concurrently fading its text label', bn: 'আইকন সরানোর সাথে সাথে লেখার অপাসিটি বাড়ানো' }
        ],
        [
          { en: '"<0.3"', bn: '"<0.3"' },
          { en: 'Starts 0.3 seconds after the previous tween started', bn: 'আগের টুইন শুরুর ০.৩ সেকেন্ড পর চালু হয়' },
          { en: 'Natural overlapping organic movements like waves and cards', bn: 'কার্ড বা ব্যানারের মতো প্রাকৃতিকভাবে একটার পিঠে আরেকটা আসা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Timeline Scheduling & Overlap Mathematics',
        bn: 'চালনাযোগ্য সিমুলেশন: টাইমলাইন শিডিউলিং ও ওভারল্যাপ গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script calculates the precise start and completion timestamps of a 3-step orchestrated timeline using relative overlap and gap parameters:',
        bn: 'নিচের স্ক্রিপ্টটি ৩টি ধাপ বিশিষ্ট একটি কোরিওগ্রাফড টাইমলাইনের প্রতিটি অংশের শুরু ও শেষের নিখুঁত সময় হিসাব করে প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'gsap-timeline-sim',
      lang: 'javascript',
      code: `// GSAP Timeline & Position Parameter Scheduling Simulator

// Timeline choreography:
// Tween 1: duration 1.0s, starts at 0.0s (default start)
// Tween 2: duration 1.0s, starts at '<0.5' (0.5s after Tween 1 began)
// Tween 3: duration 1.0s, starts at '+=0.2' (0.2s pause after Tween 2 ends)

const t1Start = 0.0;
const t1Duration = 1.0;
const t1End = t1Start + t1Duration; // 1.0s

// Tween 2 starts 0.5s after Tween 1 started
const t2Start = t1Start + 0.5; // 0.5s
const t2Duration = 1.0;
const t2End = t2Start + t2Duration; // 1.5s

// Tween 3 starts 0.2s after Tween 2 completed
const t3Start = t2End + 0.2; // 1.7s
const t3Duration = 1.0;
const t3End = t3Start + t3Duration; // 2.7s

console.log('Tween 1 completion timestamp in seconds:', t1End);
// -> Tween 1 completion timestamp in seconds: 1

console.log('Tween 2 start timestamp with relative overlap in seconds:', t2Start);
// -> Tween 2 start timestamp with relative overlap in seconds: 0.5

console.log('Total timeline choreography duration in seconds:', Number(t3End.toFixed(1)));
// -> Total timeline choreography duration in seconds: 2.7`,
      caption: {
        en: 'Figure 2: Tween 1 ends at 1s, Tween 2 overlaps starting at 0.5s, and total timeline duration reaches 2.7s',
        bn: 'চিত্র ২: টুইন ১ শেষ হয় ১ সেকেন্ডে, টুইন ২ শুরু হয় ০.৫ সেকেন্ডে এবং মোট সময় দাঁড়ায় ২.৭ সেকেন্ড'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Architecture Rules for Timelines',
        bn: 'টাইমলাইন আর্কিটেকচারের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 architectural principles when orchestrating complex timelines:',
        bn: 'জটিল টাইমলাইন নির্মাণের সময় এই ৪টি স্থাপত্য নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Set Defaults on the Timeline',
          def: {
            en: 'Declare shared properties once via gsap.timeline({ defaults: { duration: 0.8, ease: "power2.out" } }) to keep code DRY',
            bn: 'বারবার কোড লেখা এড়াতে টাইমলাইনের শুরুতে defaults এ duration ও ease একবার নির্ধারণ করে দিন'
          }
        },
        {
          term: 'Rule 2: Never Hardcode Long Chains of Delays',
          def: {
            en: 'Replace all standalone delay chains with timeline sequencing to prevent visual synchronization breakdowns',
            bn: 'আলাদা delay ব্যবহার পরিহার করে টাইমলাইন সিকোয়েন্সিং দিয়ে উপাদানের আগমন সাজান'
          }
        },
        {
          term: 'Rule 3: Use Labels for External Event Navigation',
          def: {
            en: 'Call tl.addLabel("step2") so UI buttons can jump to precise timeline milestones via tl.seek("step2")',
            bn: 'নির্দিষ্ট ধাপে লাফিয়ে যেতে addLabel ব্যবহার করুন যাতে বোতামের ক্লিকে সরাসরি সেখানে যাওয়া যায়'
          }
        },
        {
          term: 'Rule 4: Nest Modular Child Timelines',
          def: {
            en: 'Build self-contained timeline functions for headers, hero cards, and menus, then append them into a master timeline',
            bn: 'হেডার বা মেনুর জন্য আলাদা ফাংশনে টাইমলাইন বানিয়ে মূল মাস্টার টাইমলাইনে যুক্ত করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-tl-duration-calc-ex',
      kind: 'mcq',
      topic: 'Timeline total duration calculation with overlap',
      question: {
        en: 'If Tween 1 lasts 1 second, and Tween 2 lasts 1 second starting at "<0.5" (0.5s after Tween 1 began), what is the total duration of the timeline?',
        bn: 'টুইন ১ যদি ১ সেকেন্ড স্থায়ী হয় এবং টুইন ২ "<০.৫" পজিশনে (টুইন ১ শুরুর ০.৫ সেকেন্ড পর) ১ সেকেন্ড চলে, তবে মোট সময় কত?'
      },
      options: [
        {
          en: '1.5 seconds (0.5s start + 1.0s duration)',
          bn: '১.৫ সেকেন্ড (০.৫ সেকেন্ডে শুরু + ১.০ সেকেন্ড সময়)'
        },
        {
          en: '2.0 seconds (sequential sum)',
          bn: '২.০ সেকেন্ড (পরপর সাধারণ যোগফল)'
        },
        {
          en: '1.0 second',
          bn: '১.০ সেকেন্ড'
        },
        {
          en: '0.5 seconds',
          bn: '০.৫ সেকেন্ড'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tween 2 finishes at 0.5 + 1.0 = 1.5 seconds.',
        bn: 'টুইন ২ শেষ হবে ০.৫ + ১.০ = ১.৫ সেকেন্ডের মাথায়।'
      },
      explanation: {
        en: 'Tween 2 begins at 0.5s and runs for 1.0s, completing at 1.5s total.',
        bn: 'টুইন ২ শুরু হয় ০.৫ সেকেন্ডে এবং ১.০ সেকেন্ড চলে, ফলে মোট সময় ১.৫ সেকেন্ড হয়।'
      }
    },
    {
      id: 'gsap-position-less-than-ex',
      kind: 'mcq',
      topic: 'Behavior of the "<" position parameter',
      question: {
        en: 'What does the position parameter "<" mean in a GSAP timeline?',
        bn: 'GSAP টাইমলাইনে "<" পজিশন প্যারামিটারের অর্থ কী?'
      },
      options: [
        {
          en: 'Align the start of this tween with the start time of the previous tween',
          bn: 'এই টুইনটিকে ঠিক আগের টুইন শুরুর মুহূর্তেই শুরু করানো'
        },
        {
          en: 'Delete the previous tween completely',
          bn: 'আগের টুইনটি মুছে ফেলা'
        },
        {
          en: 'Run the tween backwards at 10x speed',
          bn: 'টুইনটিকে ১০ গুণ গতিতে পেছনের দিকে চালানো'
        },
        {
          en: 'Pause the browser tab until clicked',
          bn: 'ক্লিক না করা পর্যন্ত ব্রাউজার ট্যাব থামিয়ে রাখা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Start concurrently with the preceding tween.',
        bn: 'আগের টুইনের সাথে একযোগে শুরু হওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: '"<" anchors the insertion point to the beginning of the most recent animation in the timeline.',
        bn: '"<" চিহ্নটি টাইমলাইনের আগের অ্যানিমেশনের শুরুর সাথে বর্তমান অ্যানিমেশনকে সরাসরি সংযুক্ত করে।'
      }
    },
    {
      id: 'gsap-playback-methods-ex',
      kind: 'mcq',
      topic: 'Dynamic timeline playback control methods',
      question: {
        en: 'Which method smoothly reverses an entire GSAP timeline from its current position back to the start?',
        bn: 'কোন মেথডটি বর্তমান অবস্থান থেকে একটি সম্পূর্ণ GSAP টাইমলাইনকে উল্টো দিকে চালিয়ে শুরুতে ফিরিয়ে নেয়?'
      },
      options: [
        {
          en: 'tl.reverse()',
          bn: 'tl.reverse()'
        },
        {
          en: 'tl.destroy()',
          bn: 'tl.destroy()'
        },
        {
          en: 'tl.stopAllSounds()',
          bn: 'tl.stopAllSounds()'
        },
        {
          en: 'tl.invertColors()',
          bn: 'tl.invertColors()'
        }
      ],
      answer: 0,
      hint: {
        en: 'Reverse playback direction.',
        bn: 'উল্টো দিকে প্লে করার মেথড।'
      },
      explanation: {
        en: 'tl.reverse() flips playback direction, reversing all nested tweens smoothly without visual snapping.',
        bn: 'tl.reverse() দিক উল্টে দিয়ে টাইমলাইনের সমস্ত অ্যানিমেশনকে মসৃণভাবে পেছনের দিকে চালায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-timelines-orchestration',
    title: {
      en: 'GSAP Timelines & Choreography Architecture Quiz',
      bn: 'GSAP টাইমলাইন ও কোরিওগ্রাফি আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-tl-benefit',
        kind: 'mcq',
        topic: 'Why timelines replace manual delay chains',
        question: {
          en: 'Why are GSAP Timelines dramatically superior to chaining animations with manual CSS or JS delays?',
          bn: 'ম্যানুয়াল ডিলে দিয়ে অ্যানিমেশন সাজানোর চেয়ে GSAP টাইমলাইন কেন অনেক বেশি কার্যকর?'
        },
        options: [
          {
            en: 'They maintain automatic relative scheduling, so changing one duration never desynchronizes subsequent steps',
            bn: 'তারা স্বয়ংক্রিয় আপেক্ষিক সময় বজায় রাখে, ফলে একটির সময় বদলালেও পরের ধাপগুলো কখনো বেসুরো হয় না'
          },
          {
            en: 'They force the browser to run at 240Hz even on 30Hz screens',
            bn: 'তারা ৩০ হার্জ স্ক্রিনকেও ২৪০ হার্জে চালাতে বাধ্য করে'
          },
          {
            en: 'They eliminate the need for HTML and CSS entirely',
            bn: 'তারা এইচটিএমএল এবং সিএসএসের প্রয়োজনীয়তা দূর করে দেয়'
          },
          {
            en: 'They prevent all JavaScript errors on the page',
            bn: 'তারা পেজের সমস্ত জাভাস্ক্রিপ্ট এরর আটকে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automatic relative scheduling and unified control.',
          bn: 'স্বয়ংক্রিয় সমন্বয় এবং একক নিয়ন্ত্রণের কথা ভাবুন।'
        },
        explanation: {
          en: 'Timelines establish an elastic chronological track where animations remain connected regardless of duration edits.',
          bn: 'টাইমলাইন একটি স্থিতিস্থাপক ট্র্যাক তৈরি করে যেখানে সময় বাড়ালেও বা কমালেও সব উপাদান সুন্দর ছন্দে থাকে।'
        }
      },
      {
        id: 'q-gsap-seek-method',
        kind: 'mcq',
        topic: 'Jumping to timeline moments via seek',
        question: {
          en: 'What does calling tl.seek(2.5) accomplish on a GSAP timeline?',
          bn: 'একটি GSAP টাইমলাইনে tl.seek(2.5) কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'Instantly jumps the playback playhead to the 2.5 second mark without altering play/pause state',
            bn: 'প্লে বা পজ অবস্থা না বদলে টাইমলাইনের মাথাকে সরাসরি ২.৫ সেকেন্ডের মাথায় নিয়ে যায়'
          },
          {
            en: 'Deletes 2.5 megabytes of video data from RAM',
            bn: 'মেমোরি থেকে ২.৫ মেগাবাইট ভিডিও ডেটা মুছে ফেলে'
          },
          {
            en: 'Delays the start of the website by 2.5 minutes',
            bn: 'সাইট চালু হতে ২.৫ মিনিট দেরি করায়'
          },
          {
            en: 'Increases the volume of audio by 2.5 decibels',
            bn: 'শব্দ ২.৫ ডেসিবেল বাড়িয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Repositioning the timeline playhead.',
          bn: 'টাইমলাইনের অবস্থান পরিবর্তনের কথা ভাবুন।'
        },
        explanation: {
          en: 'tl.seek() jumps directly to any timestamp or label in the timeline, updating all animated properties to that exact moment.',
          bn: 'tl.seek() নির্দিষ্ট সেকেন্ড বা লেবেলে সরাসরি চলে যায় এবং পেজের সমস্ত উপাদানকে সেই মুহূর্তের চেহারায় সাজায়।'
        }
      },
      {
        id: 'q-gsap-timescale',
        kind: 'mcq',
        topic: 'Adjusting animation speed with timeScale',
        question: {
          en: 'How can you put an entire complex GSAP timeline into half-speed slow motion for cinematic inspection?',
          bn: 'একটি সম্পূর্ণ জটিল GSAP টাইমলাইনকে অর্ধেক গতির স্লো-মোশনে চালাতে কোনটি ব্যবহার করবেন?'
        },
        options: [
          {
            en: 'tl.timeScale(0.5)',
            bn: 'tl.timeScale(0.5)'
          },
          {
            en: 'tl.halfSpeed()',
            bn: 'tl.halfSpeed()'
          },
          {
            en: 'tl.slowDownNow(2)',
            bn: 'tl.slowDownNow(2)'
          },
          {
            en: 'tl.duration = tl.duration * 2',
            bn: 'tl.duration = tl.duration * 2'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiplier for timeline playback rate.',
          bn: 'টাইমলাইনের গতির গুণক নির্ধারণকারী মেথড।'
        },
        explanation: {
          en: 'tl.timeScale(0.5) scales the internal clock rate by half, producing buttery smooth 50% slow motion.',
          bn: 'tl.timeScale(0.5) টাইমলাইনের অভ্যন্তরীণ ঘড়িকে অর্ধেকে নামিয়ে ৫০% স্লো-মোশন তৈরি করে।'
        }
      },
      {
        id: 'q-gsap-nested-tl',
        kind: 'mcq',
        topic: 'Architecture of nested child timelines',
        question: {
          en: 'What architectural advantage does timeline nesting provide in production web applications?',
          bn: 'প্রোডাকশন ওয়েব অ্যাপে নেস্টেড টাইমলাইন ব্যবহারের প্রধান স্থাপত্য সুবিধা কোনটি?'
        },
        options: [
          {
            en: 'Allows independent UI components to author isolated animation logic and plug into a coordinated master sequence',
            bn: 'আলাদা আলাদা কম্পোনেন্টকে নিজস্ব অ্যানিমেশন তৈরি করে একটি সমন্বিত মাস্টার টাইমলাইনে যুক্ত করার সুযোগ দেয়'
          },
          {
            en: 'Compiles all JavaScript into machine binary code automatically',
            bn: 'জাভাস্ক্রিপ্টকে স্বয়ংক্রিয়ভাবে বাইনারিতে কম্পাইল করে ফেলে'
          },
          {
            en: 'Allows browsers to run without a graphics card',
            bn: 'গ্রাফিক্স কার্ড ছাড়া ব্রাউজার চালানোর সুবিধা দেয়'
          },
          {
            en: 'Eliminates all DOM nodes from memory',
            bn: 'মেমোরি থেকে সমস্ত ডম নোড মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modularity and component-based animation architecture.',
          bn: 'মডুলার কম্পোনেন্ট ভিত্তিক কোডের কথা ভাবুন।'
        },
        explanation: {
          en: 'Nesting allows each component (navbar, hero, cards) to maintain its own timeline, which the page coordinator adds to a master timeline.',
          bn: 'নেস্টিং প্রতিটি কম্পোনেন্টকে নিজস্ব অ্যানিমেশন রাখার স্বাধীনতা দেয়, যা পেজের মূল মাস্টার টাইমলাইনে চমৎকারভাবে সাজানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'scrolltrigger-and-parallax',
    title: {
      en: 'ScrollTrigger, Pinning & Parallax — Cinematic Scroll-Driven Experiences',
      bn: 'স্ক্রোল-ট্রিগার, পিনিং ও প্যারালাক্স — সিনেমাটিক স্ক্রোল-চালিত অভিজ্ঞতা'
    }
  }
};
