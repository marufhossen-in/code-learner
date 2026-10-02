import type { Lesson } from '../../../lib/types';

export const TheCurbCutLawLesson: Lesson = {
  slug: 'the-curb-cut-law',
  tech: 'accessibility',
  title: {
    en: 'Web Accessibility Fundamentals, The Curb-Cut Effect & WCAG Principles',
    bn: 'ওয়েব অ্যাক্সেসিবিলিটি ফান্ডামেন্টালস, কার্ব-কাট ইফেক্ট ও ডব্লিউসিএজি নীতিমালা'
  },
  summary: {
    en: 'Web accessibility is the practice of designing and building digital experiences that can be perceived, understood, navigated, and interacted with by everyone, including people with visual, auditory, motor, or cognitive disabilities. In Berkeley during the 1940s, sidewalk corners were cut into ramps — curb cuts — to allow wheelchair users safe passage into streets. Soon, parents with strollers, delivery workers with hand trucks, and travelers with rolling suitcases utilized the ramps daily. This curb-cut phenomenon proves that designing for accessibility elevates the experience of all users. This lesson introduces the W3C Web Content Accessibility Guidelines (WCAG 2.2) and its four core POUR principles (Perceivable, Operable, Understandable, Robust). You will explore legal mandates including the European Accessibility Act and analyze the retrofit cost multiplier showing why catching accessibility defects during initial design costs 100 times less than fixing them post-release.',
    bn: 'ওয়েব অ্যাক্সেসিবিলিটি হলো এমনভাবে ডিজিটাল সেবা ডিজাইন ও তৈরি করার কৌশল যাতে দৃষ্টি, শ্রবণ, শারীরিক বা মানসিক প্রতিবন্ধিতা নির্বিশেষে সবাই স্বাচ্ছন্দ্যে তা ব্যবহার করতে পারেন। ১৯৪০-এর দশকে বার্কলেতে ফুটপাতের কোণ কেটে ঢালু র‍্যাম্প — কার্ব কাট — তৈরি করা হয়েছিল যাতে হুইলচেয়ার ব্যবহারকারীরা নিরাপদে রাস্তায় নামতে পারেন। কিন্তু কিছুদিনের মধ্যেই দেখা গেল শিশুদের স্ট্রলার, ভারী মালামালের ট্রলি ও চাকাযুক্ত সুটকেস টানা সাধারণ মানুষও সেই ঢাল ব্যবহার করছেন। এই কার্ব-কাট ঘটনা প্রমাণ করে যে অ্যাক্সেসিবিলিটির জন্য করা কাজ সবার অভিজ্ঞতাকে উন্নত করে। এই পাঠে ডব্লিউসিএজি (WCAG 2.2) নির্দেশিকা, POUR এর ৪টি মূল স্তম্ভ (Perceivable, Operable, Understandable, Robust) এবং আইনি বাধ্যবাধকতা ব্যাখ্যা করা হয়েছে। আপনি দেখবেন কেন ডিজাইনের শুরুতে অ্যাক্সেসিবিলিটি ঠিক করলে রিলিজের পর সংশোধনের চেয়ে ১০০ গুণ কম খরচ হয়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Accessibility is Universal Usability',
        bn: 'মূল ধারণা: অ্যাক্সেসিবিলিটি হলো সবার জন্য ব্যবহারযোগ্যতা'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'A web page is not a static picture rendered on glass. A web page is a structured document interpreted by a diverse ecosystem of software agents. While sighted users view visual elements through desktop browsers, millions of visitors navigate using screen readers, braille terminals, switch devices, and voice commands. Building an accessible website ensures that every visitor can complete their goals regardless of physical ability.',
        bn: 'একটি ওয়েব পেজ স্ক্রিনে আঁকা কোনো সাধারণ স্থির ছবি নয়। এটি মূলত একটি সুনির্দিষ্ট কাঠামোগত ডকুমেন্ট যা বিভিন্ন ধরনের সফটওয়্যার দ্বারা পাঠ করা হয়। সাধারণ দৃষ্টিশক্তিসম্পন্ন ব্যক্তিরা সরাসরি চোখে দেখে ব্রাউজ করলেও লাখ লাখ মানুষ স্ক্রিন রিডার, ব্রেইল ডিসপ্লে, বিশেষ সুইচ এবং ভয়েস কমান্ড দিয়ে কম্পিউটার পরিচালনা করেন। একটি অ্যাক্সেসিবল সাইট নিশ্চিত করে যে শারীরিক বা মানসিক সীমাবদ্ধতা নির্বিশেষে প্রতিটি মানুষ সমানভাবে তাদের কাজ সম্পন্ন করতে পারেন।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Curb-Cut Effect',
          def: {
            en: 'The phenomenon where accommodations originally designed for people with disabilities end up benefiting the entire broader population',
            bn: 'এমন একটি ঘটনা যেখানে প্রতিবন্ধী ব্যক্তিদের সুবিধার জন্য তৈরি কোনো উদ্ভাবন সমাজের সব মানুষের জীবনকে সহজ করে তোলে'
          }
        },
        {
          term: 'WCAG (Web Content Accessibility Guidelines)',
          def: {
            en: 'The globally recognized standard published by the W3C defining technical criteria for digital accessibility across levels A, AA, and AAA',
            bn: 'W3C দ্বারা প্রকাশিত বিশ্বব্যাপী স্বীকৃত নীতিমালা যা ডিজিটাল অ্যাক্সেসিবিলিটির জন্য লেভেল A, AA এবং AAA মানদণ্ড নির্ধারণ করে'
          }
        },
        {
          term: 'POUR Principles',
          def: {
            en: 'The four fundamental pillars of WCAG: Perceivable, Operable, Understandable, and Robust',
            bn: 'ডব্লিউসিএজি নির্দেশিকার ৪টি মূল ভিত্তি: Perceivable (অনুধাবনযোগ্য), Operable (পরিচালনযোগ্য), Understandable (বোধগম্য), এবং Robust (স্থিতিশীল)'
          }
        },
        {
          term: 'Assistive Technology (AT)',
          def: {
            en: 'Hardware and software used by people with disabilities to interact with digital devices (including screen readers, screen magnifiers, and switch access)',
            bn: 'ডিজিটাল ডিভাইস ব্যবহারের সুবিধার্থে প্রতিবন্ধী মানুষের ব্যবহৃত বিশেষ হার্ডওয়্যার ও সফটওয়্যার (যেমন স্ক্রিন রিডার, ব্রেইল ডিসপ্লে ও ম্যাগনিফায়ার)'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'the-pour-principles',
      text: {
        en: 'The Four Pillars of WCAG: The POUR Framework',
        bn: 'ডব্লিউসিএজি-এর ৪টি প্রধান স্তম্ভ: POUR ফ্রেমওয়ার্ক'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'The POUR Principles of the Web Content Accessibility Guidelines',
        bn: 'ডব্লিউসিএজি নির্দেশিকার POUR মূলনীতিসমূহ'
      },
      head: [
        { en: 'Principle', bn: 'মূলনীতি' },
        { en: 'Core Requirement', bn: 'মূল লক্ষ্য' },
        { en: 'Technical Implementation Example', bn: 'প্রযুক্তিগত প্রয়োগের উদাহরণ' }
      ],
      rows: [
        [
          { en: 'Perceivable', bn: 'Perceivable (অনুধাবনযোগ্য)' },
          { en: 'Information must be presentable to users in ways they can perceive through sight, hearing, or touch', bn: 'তথ্য এমনভাবে উপস্থাপন করতে হবে যাতে ব্যবহারকারী চোখ, কান বা স্পর্শ দিয়ে তা বুঝতে পারে' },
          { en: 'Text alternatives for images (alt text), closed captions on video, and minimum 4.5:1 color contrast', bn: 'ছবির অল্টারনেটিভ টেক্সট (alt text), ভিডিওতে ক্যাপশন এবং ৪.৫:১ কালার কনট্রাস্ট' }
        ],
        [
          { en: 'Operable', bn: 'Operable (পরিচালনযোগ্য)' },
          { en: 'Users must be able to operate the interface components and navigation controls seamlessly', bn: 'ইউজার ইন্টারফেসের সমস্ত বোতাম ও মেনু সহজে পরিচালনা করার সুযোগ থাকতে হবে' },
          { en: '100% keyboard navigation without traps, visible focus rings, skip links, and no rapid flashes causing seizures', bn: '১০০% কিবোর্ড নেভিগেশন, দৃশ্যমান ফোকাস রিং এবং কোনো ক্ষতিকর ফ্ল্যাশ না থাকা' }
        ],
        [
          { en: 'Understandable', bn: 'Understandable (বোধগম্য)' },
          { en: 'Users must understand the information and the operation of the user interface', bn: 'ওয়েবসাইটে থাকা তথ্য এবং ইন্টারফেসের ব্যবহারবিধি সহজ ও বোধগম্য হতে হবে' },
          { en: 'Clear form error messages, explicit language tags (lang="en"), and predictable navigation consistency', bn: 'ফর্ম পূরণে স্পষ্ট ভুলের ব্যাখ্যা, ডকুমেন্টের ভাষা নির্ধারণ এবং পূর্বাভাসযোগ্য লেআউট' }
        ],
        [
          { en: 'Robust', bn: 'Robust (স্থিতিশীল)' },
          { en: 'Content must be robust enough to be interpreted by current and future user agents and assistive technologies', bn: 'তথ্য এমন মানসম্মত কোডে লিখতে হবে যাতে বিভিন্ন ব্রাউজার ও অ্যাসিস্টিভ ডিভাইস নির্ভুলভাবে তা পড়তে পারে' },
          { en: 'Valid semantic HTML markup, proper parent-child hierarchy, and accurate accessible names and roles', bn: 'নির্ভুল সিম্যান্টিক এইচটিএমএল কোড এবং সঠিক প্যারেন্ট-চাইল্ড কাঠামোর ব্যবহার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'economics-retrofit-cost',
      text: {
        en: 'The Economics of Accessibility: The Retrofit Multiplier',
        bn: 'অ্যাক্সেসিবিলিটির অর্থনীতি: রেট্রোফিট খরচের গুণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A persistent misconception in software engineering is that accessibility is an expensive luxury. In reality, baking accessibility into the design phase costs almost nothing. Choosing semantic HTML elements and compliant color contrast requires zero additional budget. However, attempting to retrofit accessibility onto a finished production application introduces massive costs. Resolving a defect during initial Design costs 10 dollars. In the Development phase, remediating that same defect costs 100 dollars (a 10x multiplier). Remedying it after Production release costs 1000 dollars (a 100x multiplier) as databases, APIs, and client apps must be refactored. If resolved under legal litigation, costs exceed 10000 dollars (a 1000x multiplier). Shifting accessibility left into the design phase saves immense capital.',
        bn: 'অনেকে ভুলবশত মনে করেন অ্যাক্সেসিবিলিটি যুক্ত করা অত্যন্ত ব্যয়বহুল একটি কাজ। বাস্তবে ডিজাইনের শুরুতে অ্যাক্সেসিবিলিটি মাথায় রাখলে কোনো বাড়তি খরচই হয় না। সঠিক সিম্যান্টিক এইচটিএমএল বা ভালো রঙের কনট্রাস্ট বেছে নিতে কোনো বাড়তি বাজেট লাগে না। কিন্তু একটি তৈরি সফটওয়্যারে পরে জোর করে অ্যাক্সেসিবিলিটি জুড়তে গেলে বিশাল খরচ হয়। প্রাথমিক ডিজাইন পর্যায়ে একটি সমস্যা ঠিক করতে ১০ ডলার লাগলে ডেভেলপমেন্টের সময় লাগে ১০০ ডলার (১০ গুণ)। প্রোডাকশনে অ্যাপ রিলিজের পর সেই একই ত্রুটি ঠিক করতে ১০০০ ডলার খরচ হয় (১০০ গুণ), কারণ তখন ডাটাবেস ও ডিজাইন উভয়ই বদলাতে হয়। আর আইনি নোটিশ বা মামলার মুখে পড়লে খরচ ১০০০০ ডলার ছাড়িয়ে যায় (১০০০ গুণ)। শুরুতে অ্যাক্সেসিবিলিটি ঠিক রাখলে বিপুল অর্থ ও সময় বেঁচে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: The Accessibility Retrofit Multiplier',
        bn: 'চালনাযোগ্য সিমুলেশন: অ্যাক্সেসিবিলিটি রেট্রোফিট খরচের গুণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the compounding cost of fixing an accessibility defect across Design, Development, Production, and Litigation phases:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ডিজাইন, ডেভেলপমেন্ট, প্রোডাকশন এবং মামলা পর্যায়ের অ্যাক্সেসিবিলিটি সংশোধনের ক্রমবর্ধিত খরচ গণনা করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'a11y-retrofit-sim',
      lang: 'javascript',
      code: `// Accessibility Defect Remediation Cost Multiplier Simulator
const designCost = 10;                     // Baseline cost during initial Figma design
const devCost = designCost * 10;           // 10x multiplier during code implementation
const postReleaseCost = designCost * 100;  // 100x multiplier after production deployment
const litigationCost = designCost * 1000;  // 1000x multiplier during legal settlement

console.log('Remediation cost in initial Design phase in dollars:', designCost);
// -> Remediation cost in initial Design phase in dollars: 10

console.log('Remediation cost in Development phase in dollars:', devCost);
// -> Remediation cost in Development phase in dollars: 100

console.log('Remediation cost post Production release in dollars:', postReleaseCost);
// -> Remediation cost post Production release in dollars: 1000

console.log('Remediation cost during Legal Litigation in dollars:', litigationCost);
// -> Remediation cost during Legal Litigation in dollars: 10000`,
      caption: {
        en: 'Figure 1: Fixing a defect in Design costs 10 dollars, whereas resolving it post-release costs 1000 dollars and litigation costs 10000 dollars',
        bn: 'চিত্র ১: ডিজাইনে সমস্যা মেটাতে ১০ ডলার লাগলে রিলিজের পর ১০০০ ডলার এবং মামলায় ১০০০০ ডলার পর্যন্ত খরচ বেড়ে যায়'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Modern Accessibility Engineering',
        bn: 'আধুনিক অ্যাক্সেসিবিলিটি ইঞ্জিনিয়ারিংয়ের ৪টি নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 core principles to achieve full WCAG compliance and inclusive design:',
        bn: 'ডব্লিউসিএজি মান নিশ্চিত করতে এবং সবার জন্য উপযোগী সেবা গড়তে এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Build for the Edge to Empower the Center',
          def: {
            en: 'Designing interfaces for extreme physical and situational constraints guarantees superior usability for all mainstream users',
            bn: 'শারীরিক বা পরিবেশগত প্রতিবন্ধকতা মাথায় রেখে ইন্টারফেস বানালে তা সাধারণ ব্যবহারকারীদের জন্যও সবচেয়ে সহজ ও সুন্দর হয়'
          }
        },
        {
          term: 'Rule 2: Target WCAG Level AA as Non-Negotiable Baseline',
          def: {
            en: 'Deliver WCAG 2.2 Level AA compliance across all public views to satisfy international legal standards including EAA and ADA',
            bn: 'আন্তর্জাতিক আইনি মান বজায় রাখতে সমস্ত ওয়েবসাইটে ডব্লিউসিএজি ২.২ লেভেল এএ (Level AA) অর্জন বাধ্যতামূলক করুন'
          }
        },
        {
          term: 'Rule 3: Shift Accessibility Testing Left',
          def: {
            en: 'Incorporate automated axe linter tests into pull requests and design token reviews to prevent expensive production retrofits',
            bn: 'কোড লেখার শুরুতেই অটোমেটেড অ্যাক্সেসিবিলিটি টেস্ট চালান যাতে প্রোডাকশনে গিয়ে বাড়তি টাকা নষ্ট না হয়'
          }
        },
        {
          term: 'Rule 4: Test Across Permanent, Temporary and Situational Needs',
          def: {
            en: 'Audit interfaces considering users with one arm (permanent), a broken wrist (temporary), or carrying groceries (situational)',
            bn: 'স্থায়ী প্রতিবন্ধিতা ছাড়াও সাময়িক অসুস্থতা এবং প্রতিকূল পরিবেশের কথা ভেবে ইন্টারফেস পরীক্ষা করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-retrofit-calc-ex',
      kind: 'mcq',
      topic: 'Retrofit cost multiplier from design to post-release',
      question: {
        en: 'If resolving an accessibility issue in the initial design phase costs 10 dollars, what is the expected remediation cost after production release (a 100x multiplier)?',
        bn: 'ডিজাইন পর্যায়ে অ্যাক্সেসিবিলিটি সমস্যা মেটাতে ১০ ডলার খরচ হলে প্রোডাকশন রিলিজের পর তা ঠিক করতে আনুমানিক কত খরচ হয় (১০০ গুণ বৃদ্ধি)?'
      },
      options: [
        {
          en: '1000 dollars (10 * 100)',
          bn: '১০০০ ডলার (১০ * ১০০)'
        },
        {
          en: '100 dollars',
          bn: '১০০ ডলার'
        },
        {
          en: '10 dollars (same cost)',
          bn: '১০ ডলার (একই খরচ)'
        },
        {
          en: '10000 dollars',
          bn: '১০০০০ ডলার'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply 10 by 100.',
        bn: '১০ কে ১০০ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Fixing defects in production requires refactoring frontend components, updating APIs, conducting regression tests, and deploying emergency patches.',
        bn: 'প্রোডাকশনে কোনো ত্রুটি সারাতে নতুন করে কোড লেখা, টেস্টিং এবং প্যাচ রিলিজ করতে হয়, ফলে খরচ ১০০ গুণ বেড়ে যায়।'
      }
    },
    {
      id: 'a11y-curb-cut-concept-ex',
      kind: 'mcq',
      topic: 'Understanding the Curb-Cut Effect on the web',
      question: {
        en: 'Which real-world scenario demonstrates the digital curb-cut effect in web development?',
        bn: 'কোন বাস্তব উদাহরণটি ওয়েব ডেভেলপমেন্টে ডিজিটাল কার্ব-কাট ইফেক্টের প্রমাণ দেয়?'
      },
      options: [
        {
          en: 'Video captions created for deaf users allow commuting passengers on noisy trains to watch videos comfortably with muted sound',
          bn: 'বধিরদের জন্য তৈরি ভিডিও ক্যাপশন ভিড়ভাট্টা বা কোলাহলপূর্ণ ট্রেনে শব্দ বন্ধ রেখেও সাধারণ যাত্রীদের ভিডিও দেখতে সাহায্য করে'
        },
        {
          en: 'Deleting all images from websites to make text load instantly',
          bn: 'লেখা দ্রুত আনতে ওয়েবসাইট থেকে সমস্ত ছবি মুছে ফেলা'
        },
        {
          en: 'Requiring all visitors to use a computer mouse exclusively',
          bn: 'সব ভিজিটরকে বাধ্যতামূলকভাবে কেবল মাউস ব্যবহার করতে বলা'
        },
        {
          en: 'Making web pages display only black and white colors',
          bn: 'ওয়েব পেজকে কেবল সাদা-কালো রঙে দেখানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Features designed for disabilities benefiting the general public.',
        bn: 'প্রতিবন্ধী মানুষের জন্য তৈরি ফিচার সাধারণ মানুষেরও উপকারে আসার কথা ভাবুন।'
      },
      explanation: {
        en: 'Captions, high-contrast layouts, and keyboard shortcuts originally engineered for accessibility provide universal convenience to everyone.',
        bn: 'ক্যাপশন, ভালো কনট্রাস্ট এবং কিবোর্ড শর্টকাট সবার জন্যই ডিজিটাল মাধ্যম ব্যবহারের অভিজ্ঞতাকে অনেক বেশি আনন্দদায়ক করে।'
      }
    },
    {
      id: 'a11y-four-pour-ex',
      kind: 'mcq',
      topic: 'The four core principles of the WCAG POUR framework',
      question: {
        en: 'What four foundational principles comprise the W3C Web Content Accessibility Guidelines (WCAG)?',
        bn: 'W3C ডব্লিউসিএজি নির্দেশিকার ৪টি মৌলিক স্তম্ভ কী কী?'
      },
      options: [
        {
          en: 'Perceivable, Operable, Understandable, Robust (POUR)',
          bn: 'পারসিভেবল, অপারেবল, আন্ডারস্ট্যান্ডেবল, রোবাস্ট (POUR)'
        },
        {
          en: 'Fast, Light, Clean, Secure',
          bn: 'ফাস্ট, লাইট, ক্লিন, সিকিউর'
        },
        {
          en: 'Private, Encrypted, Authenticated, Distributed',
          bn: 'প্রাইভেট, এনক্রিপ্টেড, অথেনটিকেটেড, ডিস্ট্রিবিউটেড'
        },
        {
          en: 'Visual, Auditory, Physical, Intellectual',
          bn: 'ভিজুয়াল, অডিটরি, ফিজিক্যাল, ইন্টেলেকচুয়াল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The acronym is POUR.',
        bn: 'শব্দটির সংক্ষেপ হলো POUR।'
      },
      explanation: {
        en: 'Every single success criterion in WCAG is organized under one of the four POUR principles.',
        bn: 'ডব্লিউসিএজি-এর প্রতিটি মানদণ্ড এই চারটি মূলনীতির যেকোনো একটির অধীনে পরিচালিত হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-a11y-fundamentals',
    title: {
      en: 'Web Accessibility Fundamentals & Standards Quiz',
      bn: 'ওয়েব অ্যাক্সেসিবিলিটি ফান্ডামেন্টালস ও স্ট্যান্ডার্ডস কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-level-aa-target',
        kind: 'mcq',
        topic: 'Why WCAG Level AA is the universal enterprise target',
        question: {
          en: 'Why is WCAG 2.2 Level AA widely adopted as the universal compliance target across international law and enterprise contracts?',
          bn: 'আন্তর্জাতিক আইন এবং বাণিজ্যিক চুক্তিতে ডব্লিউসিএজি ২.২ লেভেল এএ (Level AA) কেন আদর্শ মানদণ্ড হিসেবে বিবেচিত হয়?'
        },
        options: [
          {
            en: 'It establishes a practical balance between comprehensive barrier removal for disabled users and realistic visual design freedom for developers',
            bn: 'এটি প্রতিবন্ধী ব্যক্তিদের সমস্ত বাধা দূর করার পাশাপাশি ডিজাইনার ও ডেভেলপারদের সৃজনশীলতার একটি বাস্তবসম্মত ভারসাম্য রক্ষা করে'
          },
          {
            en: 'Because Level A allows websites to ban all blind visitors',
            bn: 'কারণ লেভেল এ-তে অন্ধদের নিষিদ্ধ করার অনুমতি আছে'
          },
          {
            en: 'Because Level AAA is legally illegal to implement in modern software',
            bn: 'কারণ আধুনিক সফটওয়্যারে লেভেল ট্রিপল এ প্রয়োগ করা আইনত দণ্ডনীয়'
          },
          {
            en: 'It eliminates the need for software testing entirely',
            bn: 'এটি সফটওয়্যার টেস্টিংয়ের প্রয়োজনীয়তা পুরোপুরি দূর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Practical balance of barrier removal and design feasibility.',
          bn: 'বাধা দূরীকরণ এবং বাস্তবসম্মত ডিজাইনের ভারসাম্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'Level A is too rudimentary, while Level AAA imposes extreme aesthetic restrictions (such as 7:1 contrast on all text) that are impractical for many broad applications.',
          bn: 'লেভেল এ অত্যন্ত প্রাথমিক মানের, আর ট্রিপল এ-তে এমন কড়া নিয়ম থাকে (যেমন সব লেখায় ৭:১ কনট্রাস্ট) যা সব ধরনের সাধারণ ওয়েবসাইটে প্রয়োগ করা কঠিন।'
        }
      },
      {
        id: 'q-a11y-situational-disability',
        kind: 'mcq',
        topic: 'Recognizing situational and temporary disabilities',
        question: {
          en: 'Which of the following represents a situational disability according to inclusive design frameworks?',
          bn: 'ইনক্লুসিভ ডিজাইন ফ্রেমওয়ার্ক অনুযায়ী নিচের কোনটি সাময়িক বা পরিবেশগত প্রতিবন্ধকতার (Situational Disability) উদাহরণ?'
        },
        options: [
          {
            en: 'A parent holding an infant in one arm while trying to complete an e-commerce order on a smartphone using only one thumb',
            bn: 'এক কোলে শিশুকে ধরে রেখে অন্য হাতের এক আঙুল দিয়ে স্মার্টফোনে কেনাকাটা সম্পন্ন করার চেষ্টা করা'
          },
          {
            en: 'A computer monitor that has been turned off intentionally',
            bn: 'ইচ্ছাকৃতভাবে বন্ধ করে রাখা কম্পিউটার মনিটর'
          },
          {
            en: 'A software engineer forgetting their computer password',
            bn: 'সফটওয়্যার ইঞ্জিনিয়ার নিজের পাসওয়ার্ড ভুলে যাওয়া'
          },
          {
            en: 'A web browser that has not received software updates in 10 years',
            bn: '১০ বছর ধরে আপডেট না পাওয়া কোনো ব্রাউজার'
          }
        ],
        answer: 0,
        hint: {
          en: 'Environmental or temporary context restricting physical interaction.',
          bn: 'পরিবেশগত বা সাময়িক কারণে সাধারণ কাজ করার সীমাবদ্ধতার কথা ভাবুন।'
        },
        explanation: {
          en: 'Disability is a mismatch between human capability and the surrounding environment. Designing for one-handed operation empowers both amputees and busy parents.',
          bn: 'অ্যাক্সেসিবিলিটি কেবল জন্মগত সীমাবদ্ধতা নয়; যেকোনো মানুষ যেকোনো পরিস্থিতিতে এমন সমস্যার মুখে পড়তে পারেন।'
        }
      },
      {
        id: 'q-a11y-eaa-mandate',
        kind: 'mcq',
        topic: 'The impact of the European Accessibility Act (EAA)',
        question: {
          en: 'What major regulatory milestone made digital accessibility a mandatory legal requirement for consumer digital commerce across Europe in 2025?',
          bn: 'কোন গুরুত্বপূর্ণ আইনটি ২০২৫ সালে ইউরোপজুড়ে সমস্ত বাণিজ্যিক ওয়েবসাইটের জন্য ডিজিটাল অ্যাক্সেসিবিলিটিকে বাধ্যতামূলক করেছে?'
        },
        options: [
          {
            en: 'The European Accessibility Act (EAA), enforcing penalties and market access bans on non-compliant e-commerce, banking, and ticketing platforms',
            bn: 'ইউরোপিয়ান অ্যাক্সেসিবিলিটি অ্যাক্ট (EAA), যা আইন অমান্যকারী ই-কমার্স ও ব্যাংকিং সাইটের ওপর জরিমানা ও নিষেধাজ্ঞা আরোপ করে'
          },
          {
            en: 'The Global Internet Shutdown Treaty',
            bn: 'গ্লোবাল ইন্টারনেট বন্ধ করার চুক্তি'
          },
          {
            en: 'The World Health Organization Keyboard Directive',
            bn: 'বিশ্ব স্বাস্থ্য সংস্থার কিবোর্ড নির্দেশিকা'
          },
          {
            en: 'The United Nations CSS Typography Protocol',
            bn: 'জাতিসংঘের সিএসএস টাইপোগ্রাফি প্রোটোকল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The European Accessibility Act (EAA) enforces market access.',
          bn: 'ইউরোপের অ্যাক্সেসিবিলিটি আইনের কথা ভাবুন।'
        },
        explanation: {
          en: 'The EAA transformed accessibility from an optional moral guideline into a strict commercial market entry requirement across European member states.',
          bn: 'এই আইন অ্যাক্সেসিবিলিটিকে সাধারণ উপদেশ থেকে কঠোর বাণিজ্যিক আইনের রূপ দিয়েছে।'
        }
      },
      {
        id: 'q-a11y-shift-left',
        kind: 'mcq',
        topic: 'The strategy of shifting accessibility testing left',
        question: {
          en: 'What does the software engineering concept of "shifting accessibility left" mean in practice?',
          bn: 'সফটওয়্যার ইঞ্জিনিয়ারিংয়ে অ্যাক্সেসিবিলিটি টেস্টিংকে "বামে সরানো" বা "Shift Left" বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'Evaluating contrast, keyboard flows, and semantics during initial Figma design and code reviews, rather than discovering flaws through post-launch audits',
            bn: 'লঞ্চের পর অডিট করে সমস্যা খোঁজার বদলে একদম শুরুতে ফিগমা ডিজাইন এবং কোড লেখার সময়ই অ্যাক্সেসিবিলিটি নিশ্চিত করা'
          },
          {
            en: 'Aligning all text on the website to the left margin',
            bn: 'ওয়েবসাইটের সমস্ত লেখাকে বাম পাশে সারিবদ্ধ করা'
          },
          {
            en: 'Moving the computer keyboard to the left side of the desk',
            bn: 'কিবোর্ডকে টেবিলের বাম পাশে সরিয়ে রাখা'
          },
          {
            en: 'Only allowing left-handed employees to test the software',
            bn: 'কেবলমাত্র বাঁহাতি ডেভেলপারদের দিয়ে সফটওয়্যার পরীক্ষা করানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Addressing requirements early in the design and development cycle.',
          bn: 'কাজের একদম শুরুতে ত্রুটি সারানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'Shifting left catches bugs when they cost 10 dollars to fix in design, rather than 1000 dollars post-launch or 10000 dollars in litigation.',
          bn: 'শুরুতে ত্রুটি ধরলে ডিজাইনে ১০ ডলারে ঠিক করা যায়, যা রিলিজের পর ১০০০ ডলার এবং মামলায় ১০০০০ ডলার পর্যন্ত হতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-semantic-frame',
    tech: 'accessibility',
    title: {
      en: 'HTML-First Semantics, Accessibility Tree & ARIA Rules',
      bn: 'এইচটিএমএল-ফার্স্ট সিম্যান্টিক্স, অ্যাক্সেসিবিলিটি ট্রি ও এআরআইএ নিয়ম'
    }
  }
};
