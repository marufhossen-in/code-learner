import type { Lesson } from '../../../lib/types';

export const ScrollTriggerAndParallaxLesson: Lesson = {
  slug: 'scrolltrigger-and-parallax',
  tech: 'gsap',
  title: {
    en: 'ScrollTrigger, Pinning & Parallax — Cinematic Scroll-Driven Experiences',
    bn: 'স্ক্রোল-ট্রিগার, পিনিং ও প্যারালাক্স — সিনেমাটিক স্ক্রোল-চালিত অভিজ্ঞতা'
  },
  summary: {
    en: 'ScrollTrigger is the flagship GSAP plugin that transforms standard web page scrolling into cinematic interactive storytelling. Instead of relying on clumsy native scroll listeners that trigger constant layout recalculations, ScrollTrigger samples scroll offsets via high-performance IntersectionObserver and passive event listeners. Developers bind animations to exact viewport thresholds using intuitive syntax (start: "top 80%", end: "bottom 20%"). Enabling scrub links animation progress directly to the users scrollbar. Soft numeric values like scrub: 1 introduce spring-damped momentum. Using pin: true fixes sections in place during multi-step reveals. Combining differential layer speeds generates realistic parallax depth without dropping frames.',
    bn: 'স্ক্রোল-ট্রিগার (ScrollTrigger) হলো GSAP-এর একটি যুগান্তকারী প্লাগইন যা সাধারণ ওয়েব স্ক্রোলিংকে একটি সিনেমাটিক অভিজ্ঞতায় রূপান্তর করে। পুরনো স্ক্রোল ইভেন্টের মতো বারবার লেআউট রিফ্লো না ঘটিয়ে এটি অত্যন্ত দ্রুতগতিতে স্ক্রোল অবস্থান নিরীক্ষণ করে। ডেভেলপাররা সহজ সিনট্যাক্সে (start: "top 80%", end: "bottom 20%") ভিউপোর্টের নির্দিষ্ট বিন্দুতে অ্যানিমেশন ট্রিগার করতে পারেন। scrub ব্যবহারের মাধ্যমে স্ক্রোলবারের সাথে অ্যানিমেশনকে সরাসরি যুক্ত করা যায় এবং scrub: 1 দিয়ে চমৎকার জড়তা তৈরি করা যায়। pin: true দিয়ে কোনো সেকশনকে স্ক্রিনে আটকে রেখে ধাপে ধাপে দৃশ্য উন্মোচন এবং বিভিন্ন লেয়ারে প্যারালাক্স গভীরতা তৈরি করা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The ScrollTrigger Viewport Binding Engine',
        bn: 'মূল ধারণা: স্ক্রোল-ট্রিগার ভিউপোর্ট বাইন্ডিং ইঞ্জিন'
      }
    },
    {
      type: 'visual',
      id: 'pipeline'
    },
    {
      type: 'para',
      text: {
        en: 'Scroll-driven animations historically suffered from severe scroll stutter caused by layout thrashing inside native scroll listeners. ScrollTrigger solves this by pre-computing trigger geometry and batching updates onto the hardware refresh cycle. To connect an animation to scroll, you configure a trigger element, a start point, and an end point.',
        bn: 'আগে ব্রাউজারের সাধারণ স্ক্রোল ইভেন্টে কোড চালালে প্রচণ্ড ঝাঁকুনি বা ল্যাগ হতো। স্ক্রোল-ট্রিগার আগে থেকেই উপাদানের মাপজোখ হিসাব করে রাখে এবং হার্ডওয়্যার রিফ্রেশ সাইকেলের সাথে মিলিয়ে কাজ করে। কোনো অ্যানিমেশনকে স্ক্রোলের সাথে যুক্ত করতে একটি ট্রিগার উপাদান, একটি শুরুর বিন্দু এবং একটি শেষের বিন্দু নির্ধারণ করতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Trigger & Start/End Points',
          def: {
            en: 'Coordinates defining when an animation initiates and concludes relative to viewport scroll progress',
            bn: 'স্ক্রোল করার সময় অ্যানিমেশন কখন শুরু ও শেষ হবে তা নির্ধারণকারী ভিউপোর্ট স্থানাঙ্ক'
          }
        },
        {
          term: 'Scrub Parameter',
          def: {
            en: 'Binding animation playhead progress directly to the scrollbar position (boolean true or numeric smoothing seconds)',
            bn: 'স্ক্রোলবারের অগ্রগতির সাথে অ্যানিমেশনকে হুবহু সংযুক্ত করা (true বা নির্দিষ্ট সেকেন্ডের স্মুথিং)'
          }
        },
        {
          term: 'Pinning (pin: true)',
          def: {
            en: 'Freezing an element in fixed viewport position while the surrounding page continues to scroll for a designated distance',
            bn: 'নির্দিষ্ট দূরত্ব পর্যন্ত পেজ স্ক্রোল হলেও কোনো উপাদানকে স্ক্রিনের নির্দিষ্ট স্থানে স্থির রাখা'
          }
        },
        {
          term: 'ToggleActions',
          def: {
            en: 'A 4-word string dictating actions on four scroll boundaries: onEnter, onLeave, onEnterBack, and onLeaveBack',
            bn: '৪টি শব্দের একটি স্ট্রিং যা স্ক্রোলের ৪টি আলাদা সীমানায় কী ঘটবে তা নিয়ন্ত্রণ করে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'scrub-and-pinning',
      text: {
        en: 'Scrubbed Timelines, Pinning & Parallax Math',
        bn: 'স্ক্রাব করা টাইমলাইন, পিনিং ও প্যারালাক্স গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When scrub is enabled, the animation acts like a physical film reel driven by the user scroll wheel. Passing scrub: 1 instructs GSAP to take 1 second to catch up smoothly to the scroll position, providing weighted momentum. When pin: true is set, ScrollTrigger dynamically injects pin-spacer padding into the document to prevent page jumps, allowing multi-panel slideshows to unfold effortlessly.',
        bn: 'যখন scrub সক্রিয় থাকে, তখন অ্যানিমেশনটি ব্যবহারকারীর মাউস স্ক্রোলের সাথে ঘুরতে থাকা একটি ফিল্মের মতো কাজ করে। scrub: 1 দিলে স্ক্রোল থামার পরেও ১ সেকেন্ড ধরে অ্যানিমেশনটি মসৃণভাবে এগিয়ে থামে। pin: true দিলে স্ক্রোল-ট্রিগার ডকুমেন্টে স্বয়ংক্রিয় স্পেসার প্যাডিং যোগ করে পেজের ঝাঁকুনি রোধ করে এবং ধাপে ধাপে নতুন প্যানেল প্রদর্শন করে।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'ScrollTrigger Configuration Parameters Matrix',
        bn: 'স্ক্রোল-ট্রিগার কনফিগারেশন প্যারামিটার ম্যাট্রিক্স'
      },
      head: [
        { en: 'Property', bn: 'প্রপার্টি' },
        { en: 'Typical Value Pattern', bn: 'মান ও ব্যবহারের ধরন' },
        { en: 'Functional Role in Scroll Flow', bn: 'স্ক্রোল প্রবাহে কার্যকারিতা' }
      ],
      rows: [
        [
          { en: 'start / end', bn: 'start / end' },
          { en: '"top 80%" / "bottom 20%"', bn: '"top 80%" / "bottom 20%"' },
          { en: 'Defines element edge meeting viewport percentage boundary', bn: 'উপাদানের প্রান্ত এবং ভিউপোর্টের মিলনবিন্দু ঠিক করে' }
        ],
        [
          { en: 'scrub', bn: 'scrub' },
          { en: 'true, or 1 to 2 (seconds)', bn: 'true, অথবা ১ থেকে ২ (সেকেন্ড)' },
          { en: 'Locks timeline progress directly to scroll position with inertia', bn: 'জড়তা সহকারে অ্যানিমেশনকে সরাসরি স্ক্রোলে বেঁধে দেয়' }
        ],
        [
          { en: 'pin', bn: 'pin' },
          { en: 'true, or selector string', bn: 'true, বা সিলেক্টর স্ট্রিং' },
          { en: 'Fixes element during scroll, maintaining layout spacing', bn: 'স্ক্রোল চলাকালীন উপাদানকে স্ক্রিনে আটকে রাখে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Scroll Progress & Scrubbed Transform Math',
        bn: 'চালনাযোগ্য সিমুলেশন: স্ক্রোল প্রোগ্রেস ও স্ক্রাব ট্রান্সফর্ম গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script simulates the ScrollTrigger progress equation across an 800 pixel scroll zone and calculates the resulting scrubbed transform scale:',
        bn: 'নিচের স্ক্রিপ্টটি ৮০০ পিক্সেল স্ক্রোল দূরত্বের মধ্যে স্ক্রোল-ট্রিগারের প্রোগ্রেস এবং স্কেলিং রূপান্তরের গাণিতিক মান হিসাব করে:'
      }
    },
    {
      type: 'code',
      id: 'gsap-scroll-sim',
      lang: 'javascript',
      code: `// GSAP ScrollTrigger Progress & Scrub Scale Simulator

// ScrollTrigger configuration:
// start at scrollY = 200px, end at scrollY = 1000px (span = 800px)
const scrollStart = 200;
const scrollEnd = 1000;
const scrollSpan = scrollEnd - scrollStart; // 800px

// User scrolls to 600px
const currentScroll = 600;

// Normalized progress factor [0.0 to 1.0]
const progress = (currentScroll - scrollStart) / scrollSpan;

// Scrubbed scale animation: scale from 1.0 to 2.5
const initialScale = 1.0;
const targetScale = 2.5;
const scrubbedScale = initialScale + (targetScale - initialScale) * progress;

console.log('ScrollTrigger normalized progress factor at 600px scroll:', progress);
// -> ScrollTrigger normalized progress factor at 600px scroll: 0.5

console.log('Scrubbed transform scale factor at halfway scroll position:', scrubbedScale);
// -> Scrubbed transform scale factor at halfway scroll position: 1.75

console.log('Total scroll distance span in pixels:', scrollSpan);
// -> Total scroll distance span in pixels: 800`,
      caption: {
        en: 'Figure 3: Halfway through an 800px span (scroll 600px), progress is 0.5 and scrubbed scale reaches 1.75',
        bn: 'চিত্র ৩: ৮০০ পিক্সেল দূরত্বের অর্ধেক স্ক্রোলে (৬০০ পিক্সেল) প্রোগ্রেস ০.৫ এবং স্কেল পৌঁছায় ১.৭৫ এ'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for ScrollTrigger Architecture',
        bn: 'স্ক্রোল-ট্রিগার আর্কিটেকচারের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules to maintain 60FPS scroll performance and prevent layout bugs:',
        bn: '৬০ এফপিএস স্ক্রোল গতি ও লেআউট ত্রুটি এড়াতে এই ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Call ScrollTrigger.refresh() After Dynamic Content',
          def: {
            en: 'When images load or DOM content expands, call ScrollTrigger.refresh() to recalculate exact trigger pin positions',
            bn: 'নতুন ছবি বা ডেটা লোড হলে পজিশন পুনরায় ঠিক করতে ScrollTrigger.refresh() কল করুন'
          }
        },
        {
          term: 'Rule 2: Kill ScrollTriggers on Component Unmount',
          def: {
            en: 'In React, Vue, or Next.js, always invoke trigger.kill() or use gsap.context() to prevent memory leaks and zombie listeners',
            bn: 'পেজ পরিবর্তন হলে মেমোরি লিক রোধে trigger.kill() বা gsap.context() দিয়ে ট্রিগার মুক্ত করুন'
          }
        },
        {
          term: 'Rule 3: Use yPercent Instead of y for Responsive Parallax',
          def: {
            en: 'Animate yPercent: -50 instead of y: -200px so parallax speeds scale naturally across mobile and 4K displays',
            bn: 'প্যারালাক্সে নির্দিষ্ট পিক্সেলের বদলে yPercent: -50 ব্যবহার করুন যাতে সব স্ক্রিনে সমান দেখায়'
          }
        },
        {
          term: 'Rule 4: Avoid Pinning Huge Full-Height Body Elements',
          def: {
            en: 'Pin modular inner container wrappers rather than the body or root elements to prevent breaking browser scrollbars',
            bn: 'পুরো বডি পিন না করে ভেতরের নির্দিষ্ট কন্টেইনার পিন করুন যাতে স্ক্রোলবার স্বাভাবিক থাকে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-scroll-progress-ex',
      kind: 'mcq',
      topic: 'Normalized scroll progress calculation',
      question: {
        en: 'If a ScrollTrigger starts at scroll 200px and ends at 1000px, what is the normalized progress when the user is scrolled to 600px?',
        bn: 'একটি স্ক্রোল-ট্রিগার যদি ২০০ পিক্সেল থেকে শুরু হয়ে ১০০০ পিক্সেলে শেষ হয়, তবে ইউজার ৬০০ পিক্সেলে স্ক্রোল করলে প্রোগ্রেস কত?'
      },
      options: [
        {
          en: '0.5 (exactly 50% through the 800px span)',
          bn: '০.৫ (৮০০ পিক্সেল দূরত্বের ঠিক ৫০%)'
        },
        {
          en: '0.6 (60%)',
          bn: '০.৬ (৬০%)'
        },
        {
          en: '1.0 (completed)',
          bn: '১.০ (সম্পূর্ণ)'
        },
        {
          en: '0.2',
          bn: '০.২'
        }
      ],
      answer: 0,
      hint: {
        en: '(600 - 200) / (1000 - 200) = 400 / 800.',
        bn: '(৬০০ - ২০০) / (১০০০ - ২০০) = ৪০০ / ৮০০।'
      },
      explanation: {
        en: '(600 - 200) / (1000 - 200) = 400 / 800 = 0.5 (halfway progress).',
        bn: '(৬০০ - ২০০) / (১০০০ - ২০০) = ৪০০ / ৮০০ = ০.৫ (অর্ধেক সম্পন্ন)।'
      }
    },
    {
      id: 'gsap-scrub-number-ex',
      kind: 'mcq',
      topic: 'Numeric scrub parameter smoothing',
      question: {
        en: 'What is the visual difference between scrub: true and scrub: 1 in ScrollTrigger?',
        bn: 'ScrollTrigger-এ scrub: true এবং scrub: 1 এর মধ্যে দৃশ্যমান পার্থক্য কী?'
      },
      options: [
        {
          en: 'scrub: true locks 1:1 instantaneously to the scrollbar, while scrub: 1 adds 1 second of smooth catch-up damping inertia',
          bn: 'scrub: true তাৎক্ষণিকভাবে স্ক্রোলে আটকে থাকে, আর scrub: 1 ১ সেকেন্ডের মসৃণ জড়তা ও গতি যোগ করে'
        },
        {
          en: 'scrub: 1 reverses the animation',
          bn: 'scrub: 1 অ্যানিমেশন উল্টো চালায়'
        },
        {
          en: 'scrub: true disables all mobile animations',
          bn: 'scrub: true মোবাইলে অ্যানিমেশন বন্ধ করে দেয়'
        },
        {
          en: 'scrub: 1 multiplies duration by 100',
          bn: 'scrub: 1 সময়কে ১০০ গুণ বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Instant lock vs 1 second of damped catch-up momentum.',
        bn: 'তাৎক্ষণিক সংযোগ বনাম ১ সেকেন্ডের মসৃণ জড়তার কথা ভাবুন।'
      },
      explanation: {
        en: 'Numeric scrub values create a spring-damped follow-through effect, smoothing out erratic mouse wheel clicks.',
        bn: 'সংখ্যাত্মক স্ক্রাব মাউস হুইলের ঝাঁকুনি দূর করে চমৎকার মসৃণ অনুভূতি তৈরি করে।'
      }
    },
    {
      id: 'gsap-pin-cleanup-ex',
      kind: 'mcq',
      topic: 'Cleaning up ScrollTriggers on component unmount',
      question: {
        en: 'What occurs if you fail to kill ScrollTriggers when unmounting a page in single page applications?',
        bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে পেজ বদলানোর সময় ScrollTrigger মুক্ত না করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Zombie scroll event listeners persist in memory, recalculating non-existent DOM elements and degrading frame rates',
          bn: 'নিষ্ক্রিয় লিসেনার মেমোরিতে থেকে যায় এবং অস্তিত্বহীন উপাদানের হিসাব কষে গতি কমিয়ে দেয়'
        },
        {
          en: 'The browser screen turns completely black',
          bn: 'ব্রাউজার স্ক্রিন সম্পূর্ণ কালো হয়ে যায়'
        },
        {
          en: 'The website automatically prints a error message to the printer',
          bn: 'সাইটটি প্রিন্টারে এরর মেসেজ পাঠায়'
        },
        {
          en: 'All images on the computer are deleted',
          bn: 'কম্পিউটারের সব ছবি মুছে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Memory leaks and orphaned scroll listeners.',
        bn: 'মেমোরি লিক এবং অপ্রয়োজনীয় স্ক্রোল লিসেনারের কথা ভাবুন।'
      },
      explanation: {
        en: 'Orphaned ScrollTriggers continue firing on scroll; always call trigger.kill() or use gsap.context().revert() on unmount.',
        bn: 'অব্যবহৃত ট্রিগার মেমোরিতে জীবিত থেকে যায়; তাই আনমাউন্টে trigger.kill() কল করা আবশ্যক।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-scrolltrigger-parallax',
    title: {
      en: 'ScrollTrigger & Parallax Architecture Quiz',
      bn: 'স্ক্রোল-ট্রিগার ও প্যারালাক্স আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-scroll-syntax',
        kind: 'mcq',
        topic: 'Meaning of start: "top 80%"',
        question: {
          en: 'In ScrollTrigger, what does start: "top 80%" mean?',
          bn: 'ScrollTrigger-এ start: "top 80%" এর অর্থ কী?'
        },
        options: [
          {
            en: 'Trigger initiates when the top of the trigger element reaches 80% down from the top of the viewport',
            bn: 'ট্রিগার উপাদানটির শীর্ষ যখন ভিউপোর্টের উপর থেকে ৮০% নিচে আসে তখন শুরু হয়'
          },
          {
            en: 'Scroll 8000 pixels down the document',
            bn: 'ডকুমেন্টের ৮০০০ পিক্সেল নিচে স্ক্রোল করা'
          },
          {
            en: 'Shrink the element opacity to 80%',
            bn: 'উপাদানটির অপাসিটি ৮০% এ নামানো'
          },
          {
            en: 'Wait 80 seconds before animating',
            bn: 'অ্যানিমেশন শুরুর আগে ৮০ সেকেন্ড অপেক্ষা করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Element top meeting 80% viewport height mark.',
          bn: 'উপাদানের শীর্ষ ভিউপোর্টের ৮০% উচ্চতার দাগে পৌঁছানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'The first term refers to the trigger element anchor, while the second refers to the viewport scroller threshold.',
          bn: 'প্রথম শব্দটি উপাদানের প্রান্ত এবং দ্বিতীয় শব্দটি ভিউপোর্টের অবস্থান নির্দেশ করে।'
        }
      },
      {
        id: 'q-gsap-pin-mechanism',
        kind: 'mcq',
        topic: 'How ScrollTrigger pinning functions',
        question: {
          en: 'How does ScrollTrigger pin: true keep an element visible during ongoing scroll without breaking surrounding page layout?',
          bn: 'ScrollTrigger-এর pin: true কীভাবে পেজের লেআউট নষ্ট না করে উপাদানকে স্ক্রিনে স্থির রাখে?'
        },
        options: [
          {
            en: 'It wraps the element in a pin-spacer container that dynamically reserves scroll height while applying fixed positioning',
            bn: 'এটি উপাদানটিকে একটি পিন-স্পেসারে ঘিরে রাখে যা ফিক্সড পজিশনিং দিয়ে উচ্চতা সংরক্ষিত রাখে'
          },
          {
            en: 'It stops the browser mouse wheel from turning mechanically',
            bn: 'এটি মাউস হুইল ঘোরা শারীরিকভাবে বন্ধ করে দেয়'
          },
          {
            en: 'It disables all CSS styles across the website',
            bn: 'এটি ওয়েবসাইটের সমস্ত সিএসএস স্টাইল বন্ধ করে দেয়'
          },
          {
            en: 'It takes a screenshot of the element and hides the DOM node',
            bn: 'এটি উপাদানের স্ক্রিনশট নিয়ে ডম নোড লুকিয়ে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Dynamic pin-spacer wrapper reserving scroll space.',
          bn: 'ডাইনামিক পিন-স্পেসার র্যাপারের কথা ভাবুন।'
        },
        explanation: {
          en: 'ScrollTrigger inserts an invisible spacer matching element dimensions and pins the element with position: fixed during the scroll zone.',
          bn: 'স্ক্রোল-ট্রিগার একটি অদৃশ্য স্পেসার বসিয়ে উপাদানটিকে position: fixed করে ধরে রাখে।'
        }
      },
      {
        id: 'q-gsap-toggleactions',
        kind: 'mcq',
        topic: 'Four keywords of toggleActions',
        question: {
          en: 'What are the four scroll intersection states configured by toggleActions (e.g. "play none none reverse")?',
          bn: 'toggleActions-এর ৪টি শব্দ কোন ৪টি স্ক্রোল সীমানা নিয়ন্ত্রণ করে?'
        },
        options: [
          {
            en: 'onEnter, onLeave, onEnterBack, onLeaveBack',
            bn: 'প্রবেশ (onEnter), প্রস্থান (onLeave), ফিরে আসা (onEnterBack), ফিরে যাওয়া (onLeaveBack)'
          },
          {
            en: 'onClick, onHover, onScroll, onResize',
            bn: 'ক্লিক (onClick), হোভার (onHover), স্ক্রোল (onScroll), রিসাইজ (onResize)'
          },
          {
            en: 'start, stop, pause, resume',
            bn: 'শুরু (start), থামা (stop), বিরতি (pause), পুনরায় শুরু (resume)'
          },
          {
            en: 'north, south, east, west',
            bn: 'উত্তর (north), দক্ষিণ (south), পূর্ব (east), পশ্চিম (west)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Entering and leaving in forward and backward scroll directions.',
          bn: 'সামনে ও পেছনের দিকে প্রবেশ ও প্রস্থান।'
        },
        explanation: {
          en: 'The four words define actions when scrolling forward past start, forward past end, backward past end, and backward past start.',
          bn: '৪টি শব্দ সামনে ও পেছনে স্ক্রোলের সময় ৪টি প্রান্ত অতিক্রম করার আচরণ ঠিক করে।'
        }
      },
      {
        id: 'q-gsap-parallax-ypercent',
        kind: 'mcq',
        topic: 'Using yPercent for responsive parallax',
        question: {
          en: 'Why is yPercent: -50 preferred over fixed pixels like y: -200 for parallax background image effects?',
          bn: 'প্যারালাক্স ব্যাকগ্রাউন্ডে নির্দিষ্ট পিক্সেলের বদলে yPercent: -50 কেন বেশি পছন্দের?'
        },
        options: [
          {
            en: 'yPercent scales relative to the image own height, ensuring consistent visual depth across varying mobile and desktop viewport sizes',
            bn: 'yPercent ছবির নিজস্ব উচ্চতার অনুপাতে পরিবর্তিত হয়, ফলে মোবাইল ও ডেস্কটপে সমান গভীরতা বজায় থাকে'
          },
          {
            en: 'Because CSS does not allow negative pixel values',
            bn: 'কারণ সিএসএসে নেগেটিভ পিক্সেল মান নিষিদ্ধ'
          },
          {
            en: 'To make the image load without downloading from the server',
            bn: 'সার্ভার থেকে ডাউনলোড ছাড়া ছবি লোড করানোর জন্য'
          },
          {
            en: 'Because percentage values disable GPU acceleration',
            bn: 'কারণ পার্সেন্টেজ মান জিপিউ অ্যাকসিলারেশন বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Relative scaling to element dimensions.',
          bn: 'উপাদানের নিজস্ব আকারের সাথে সামঞ্জস্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'Using yPercent creates responsive parallax speed that naturally adapts to any screen aspect ratio or element height.',
          bn: 'yPercent ব্যবহারের ফলে রেসপনসিভ প্যারালাক্স গতি যেকোনো স্ক্রিন সাইজের সাথে চমৎকারভাবে মানিয়ে নেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'svg-and-morphsvg',
    title: {
      en: 'SVG Animation, DrawSVG & MorphSVG — Fluid Organic Vector Motion',
      bn: 'এসভিজি অ্যানিমেশন, ড্র-এসভিজি ও মর্ফ-এসভিজি — ফ্লুইড অর্গানিক ভেক্টর মোশন'
    }
  }
};
