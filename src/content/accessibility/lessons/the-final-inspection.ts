import type { Lesson } from '../../../lib/types';

export const TheFinalInspectionLesson: Lesson = {
  slug: 'the-final-inspection',
  tech: 'accessibility',
  title: {
    en: 'Automated Testing, Manual Auditing & Production VPAT Compliance',
    bn: 'অটোমেটেড টেস্টিং, ম্যানুয়াল অডিটিং ও প্রোডাকশন ভিপিএটি কমপ্লায়েন্স'
  },
  summary: {
    en: 'Delivering an accessible production digital experience requires a structured testing methodology spanning automated analysis, manual keyboard audits, and screen reader verification. Automated testing tools like axe-core and Lighthouse run lightning-fast checks inside continuous integration pipelines, catching contrast failures, missing alternative text, and improper ARIA nesting. However, automated scanners can only detect approximately 38 percent of all accessibility defects. The remaining 62 percent of critical issues — including logical tab order, meaningful alt descriptions, focus trap loops, and real-time screen reader comprehension — require rigorous manual inspection. This lesson covers the accessibility testing pyramid, assistive technology test pairings, and how to author an Accessibility Conformance Report based on the Voluntary Product Accessibility Template (VPAT).',
    bn: 'একটি পূর্ণাঙ্গ অ্যাক্সেসিবল প্রোডাকশন সফটওয়্যার তৈরিতে অটোমেটেড টেস্টিং, ম্যানুয়াল কিবোর্ড পরীক্ষা এবং স্ক্রিন রিডার অডিটের সমন্বিত কার্যপদ্ধতি প্রয়োজন। সিআই/সিডি পাইপলাইনে axe-core বা লাইটহাউস ব্যবহার করে মুহূর্তের মধ্যেই কালার কনট্রাস্টের ত্রুটি, ছবির alt ট্যাগের অনুপস্থিতি বা ভুল ARIA কোড ধরা যায়। তবে বাস্তবতা হলো কোনো অটোমেটেড টুল মোট অ্যাক্সেসিবিলিটি সমস্যার মাত্র ৩৮ শতাংশ শনাক্ত করতে পারে। বাকি ৬২ শতাংশ গুরুতর সমস্যা — যেমন লজিক্যাল ট্যাব ক্রম, ছবির যথাযথ অর্থবহ বর্ণনা, মোডাল ফোকাস ট্র্যাপ এবং স্ক্রিন রিডারের প্রতিক্রিয়া — শুধুমাত্র ম্যানুয়াল পরীক্ষার মাধ্যমেই খুঁজে পাওয়া সম্ভব। এই পাঠে অ্যাক্সেসিবিলিটি টেস্টিং পিরামিড, স্ক্রিন রিডারের কার্যপদ্ধতি এবং ভিপিএটি (VPAT) কনফরমেন্স রিপোর্ট তৈরির প্রক্রিয়া তুলে ধরা হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: The Accessibility Testing Pyramid',
        bn: 'মূল ধারণা: অ্যাক্সেসিবিলিটি টেস্টিং পিরামিড'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you audit web applications for accessibility, relying exclusively on automated lighthouse scores creates a dangerous illusion of compliance. Automated linters cannot tell whether an image description conveys the true meaning of a chart or whether a modal dialog traps focus correctly. A complete accessibility quality assurance strategy relies on three complementary layers: automated CI linters, manual keyboard walkthroughs, and genuine screen reader testing.',
        bn: 'আপনি যখন কোনো ওয়েব অ্যাপ্লিকেশনের অ্যাক্সেসিবিলিটি পরীক্ষা করেন, তখন শুধু অটোমেটেড লাইটহাউস স্কোরের উপর নির্ভর করলে মারাত্মক ভুল হতে পারে। একটি ছবির বর্ণনা চার্টের সঠিক অর্থ প্রকাশ করছে কিনা, কিংবা মোডাল ডায়ালগে ফোকাস আটকে আছে কিনা তা কোনো কম্পিউটার স্ক্রিপ্ট একা বুঝতে পারে না। একটি পূর্ণাঙ্গ অডিট সিস্টেমে তিনটি স্তরের সমন্বয় থাকতে হয়: অটোমেটেড লিন্টার, ম্যানুয়াল কিবোর্ড অডিট এবং সরাসরি স্ক্রিন রিডার চালনা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'axe-core',
          def: {
            en: 'The industry-standard open-source accessibility rules engine that executes automated WCAG compliance tests with zero false positives',
            bn: 'বিশ্বখ্যাত ওপেন-সোর্স অ্যাক্সেসিবিলিটি ইঞ্জিন যা নির্ভুলভাবে ব্রাউজার বা টেস্ট পাইপলাইনে ডব্লিউসিএজি নিয়ম পরীক্ষা করে'
          }
        },
        {
          term: 'VPAT (Voluntary Product Accessibility Template)',
          def: {
            en: 'A formal document template used by government and enterprise buyers to evaluate product conformance against WCAG and Section 508 standards',
            bn: 'একটি প্রাতিষ্ঠানিক সনদ কাঠামো যার মাধ্যমে সরকার ও প্রতিষ্ঠানগুলো ডব্লিউসিএজি এবং সেকশন ৫০৮ (Section 508) মান যাচাই করে'
          }
        },
        {
          term: 'Screen Reader Walkthrough',
          def: {
            en: 'Manual evaluation of user workflows using real assistive software like NVDA on Windows or VoiceOver on macOS and iOS',
            bn: 'উইন্ডোজে এনভিডিএ (NVDA) বা ম্যাকের ভয়েসওভার চালিয়ে সরাসরি একজন দৃষ্টিহীন মানুষের মতো সাইট ব্যবহারের অভিজ্ঞতা পরীক্ষা করা'
          }
        },
        {
          term: 'ACR (Accessibility Conformance Report)',
          def: {
            en: 'The completed, publicly published assessment derived from a VPAT stating whether each WCAG criterion is supported',
            bn: 'ভিপিএটি টেমপ্লেট পূরণ করে তৈরি চূড়ান্ত প্রতিবেদন যেখানে প্রতিটি ডব্লিউসিএজি নিয়মের বাস্তব অবস্থা উল্লেখ থাকে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'testing-layers-table',
      text: {
        en: 'The Three Layers of Accessibility Quality Assurance',
        bn: 'অ্যাক্সেসিবিলিটি টেস্টিংয়ের ৩টি স্তর'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Coverage and Capabilities of Quality Assurance Testing Layers',
        bn: 'বিভিন্ন অ্যাক্সেসিবিলিটি টেস্টিং স্তরের কার্যক্ষমতা ও সীমাবদ্ধতা'
      },
      head: [
        { en: 'Testing Layer', bn: 'টেস্টিং স্তর' },
        { en: 'Tools & Methods', bn: 'টুলস ও পদ্ধতি' },
        { en: 'What It Catches & Misses', bn: 'যা ধরতে পারে এবং যা মিস করে' }
      ],
      rows: [
        [
          { en: 'Layer 1: Automated Scanners', bn: '১ম স্তর: অটোমেটেড স্ক্যানার' },
          { en: 'axe-core, Lighthouse, ESLint jsx-a11y, Playwright axe', bn: 'axe-core, Lighthouse, ESLint jsx-a11y' },
          { en: 'Catches missing alt attributes, color contrast failures, and duplicate IDs; misses reading context', bn: 'অনুপস্থিত alt ট্যাগ ও কনট্রাস্ট ত্রুটি ধরে; কিন্তু লেখার গভীর অর্থ বা প্রাসঙ্গিকতা বোঝে না' }
        ],
        [
          { en: 'Layer 2: Keyboard Walkthrough', bn: '২য় স্তর: ম্যানুয়াল কিবোর্ড অডিট' },
          { en: 'Tab, Shift+Tab, Enter, Space, Escape, Arrow keys', bn: 'Tab, Shift+Tab, Enter, Space, Escape' },
          { en: 'Catches keyboard traps, invisible focus rings, and broken tab ordering; misses voice announcements', bn: 'কিবোর্ড ট্র্যাপ, অদৃশ্য ফোকাস দাগ ও ভুল ক্রম ধরে; কিন্তু স্ক্রিন রিডারের কথা পরীক্ষা করে না' }
        ],
        [
          { en: 'Layer 3: Screen Reader Audit', bn: '৩য় স্তর: স্ক্রিন রিডার অডিট' },
          { en: 'NVDA (Windows), JAWS (Windows), VoiceOver (macOS / iOS)', bn: 'NVDA, JAWS, এবং Apple VoiceOver' },
          { en: 'Validates accurate dynamic announcements, live region timing, and true user comprehension', bn: 'তাৎক্ষণিক নোটিফিকেশনের সঠিক উচ্চারণ এবং দৃষ্টিহীন মানুষের বাস্তব অভিজ্ঞতা যাচাই করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Automated vs Manual Defect Discovery Distribution',
        bn: 'চালনাযোগ্য সিমুলেশন: অটোমেটেড বনাম ম্যানুয়াল ত্রুটি শনাক্তকরণ অনুপাত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the defect detection distribution across 100 enterprise accessibility issues, contrasting automated coverage against manual inspection:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১০০টি বাস্তব অ্যাক্সেসিবিলিটি সমস্যার মধ্যে অটোমেটেড টুলস এবং ম্যানুয়াল অডিটের শনাক্তকরণ সক্ষমতার অনুপাত হিসাব করে:'
      }
    },
    {
      type: 'code',
      id: 'a11y-audit-distribution-sim',
      lang: 'javascript',
      code: `// Accessibility Defect Discovery Coverage Simulator
const totalAuditIssues = 100;

// Automated tools (axe-core, Lighthouse) reliably detect ~38% of WCAG criteria
const automatedAxeDetected = 38;

// Manual keyboard and screen reader walkthroughs required for the remaining 62%
const manualOnlyDetected = totalAuditIssues - automatedAxeDetected;

console.log('Total audited web accessibility issues:', totalAuditIssues);
// -> Total audited web accessibility issues: 100

console.log('Issues identified automatically by axe-core scanner:', automatedAxeDetected);
// -> Issues identified automatically by axe-core scanner: 38

console.log('Issues discovered exclusively through manual keyboard & AT testing:', manualOnlyDetected);
// -> Issues discovered exclusively through manual keyboard & AT testing: 62`,
      caption: {
        en: 'Figure 1: Automated scanners uncover 38 out of 100 defects, leaving 62 defects requiring manual keyboard and screen reader verification',
        bn: 'চিত্র ১: অটোমেটেড স্ক্যানার ১০০টির মধ্যে ৩৮টি ত্রুটি ধরতে পারে, বাকি ৬২টি সমস্যা ধরতে ম্যানুয়াল কিবোর্ড ও স্ক্রিন রিডার টেস্ট আবশ্যক'
      }
    },
    {
      type: 'heading',
      id: 'enterprise-vpat-reporting',
      text: {
        en: 'VPAT and Accessibility Conformance Reports',
        bn: 'ভিপিএটি ও অ্যাক্সেসিবিলিটি কনফরমেন্স রিপোর্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In commercial enterprise and government procurement, vendors cannot simply claim their product is accessible. They must produce a formal Accessibility Conformance Report (ACR) based on the Voluntary Product Accessibility Template (VPAT). Each WCAG criterion is evaluated and assigned one of 4 standard legal statuses: Supports, Partially Supports, Does Not Support, or Not Applicable.',
        bn: 'বাণিজ্যিক এবং সরকারি সফটওয়্যার ক্রয়ের ক্ষেত্রে কেবল মুখে দাবি করলেই হয় না যে সাইটটি অ্যাক্সেসিবল। তাদের ভিপিএটি (VPAT) টেমপ্লেটের ভিত্তিতে একটি আনুষ্ঠানিক অ্যাক্সেসিবিলিটি কনফরমেন্স রিপোর্ট (ACR) পেশ করতে হয়। সেখানে প্রতিটি নিয়মের বিপরীতে ৪টি সুনির্দিষ্ট আইনি অবস্থার যেকোনো একটি উল্লেখ করতে হয়: Supports, Partially Supports, Does Not Support, অথবা Not Applicable।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Supports',
          def: {
            en: 'The application functionality fully meets the technical criterion without any known exceptions or workarounds',
            bn: 'অ্যাপ্লিকেশনের ফিচারগুলো কোনো ব্যতিক্রম বা ত্রুটি ছাড়াই নিয়মটির প্রতিটি শর্ত শতভাগ পূরণ করে'
          }
        },
        {
          term: 'Partially Supports',
          def: {
            en: 'Some functionality meets the criterion, but known defects create barriers in specific secondary user flows',
            bn: 'কিছু ফিচার নিয়ম মেনে চলে, তবে নির্দিষ্ট কিছু কাজে ব্যবহারকারী সাময়িক বাধার সম্মুখীন হন'
          }
        },
        {
          term: 'Does Not Support',
          def: {
            en: 'The core functionality fundamentally fails the criterion, blocking users of assistive technology completely',
            bn: 'মূল ফিচারগুলো নিয়ম মানতে পুরোপুরি ব্যর্থ হয়েছে, যা অ্যাসিস্টিভ ডিভাইসের ব্যবহারকারীদের আটকে দেয়'
          }
        },
        {
          term: 'CI/CD Automated Gate',
          def: {
            en: 'Automated test suite (such as @axe-core/playwright) breaking git pull requests if critical accessibility violations are detected',
            bn: 'গিট পুল রিকোয়েস্টে স্বয়ংক্রিয় পরীক্ষা যা কোনো মারাত্মক অ্যাক্সেসিবিলিটি ভুল থাকলে কোড মার্জ হতে বাধা দেয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-audit-distribution-ex',
      kind: 'mcq',
      topic: 'Percentage of accessibility defects caught by automated scanners',
      question: {
        en: 'According to industry studies and the benchmark simulation, approximately how many defects out of 100 can automated tools like axe-core catch?',
        bn: 'বাস্তব গবেষণা ও বেঞ্চমার্ক সিমুলেশন অনুযায়ী axe-core-এর মতো অটোমেটেড টুলস ১০০টি সমস্যার মধ্যে আনুমানিক কয়টি ধরতে পারে?'
      },
      options: [
        {
          en: '38 defects (roughly 30 to 40 percent)',
          bn: '৩৮টি সমস্যা (আনুমানিক ৩০ থেকে ৪০ শতাংশ)'
        },
        {
          en: '100 defects (100 percent of all bugs)',
          bn: '১০০টি সমস্যা (১০০ শতাংশ ত্রুটি)'
        },
        {
          en: '0 defects (automated tools never work)',
          bn: '০টি সমস্যা (টুল কখনোই কাজ করে না)'
        },
        {
          en: '95 defects',
          bn: '৯৫টি সমস্যা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Automated scanners catch about 38 out of 100 defects.',
        bn: '১০০টির মধ্যে ৩৮টি ত্রুটি ধরার কথা ভাবুন।'
      },
      explanation: {
        en: 'Automated engines excel at syntax, contrast, and missing attributes, but they cannot assess cognitive clarity, keyboard traps, or logical reading flow.',
        bn: 'অটোমেটেড টুল কোডের কাঠামোগত ভুল ধরতে পারলেও লেখার অর্থ বা কিবোর্ড নেভিগেশনের যৌক্তিক প্রবাহ একা বুঝতে পারে না।'
      }
    },
    {
      id: 'a11y-vpat-purpose-ex',
      kind: 'mcq',
      topic: 'The purpose and function of a VPAT document',
      question: {
        en: 'What is the primary function of a Voluntary Product Accessibility Template (VPAT)?',
        bn: 'ভলান্টারি প্রোডাক্ট অ্যাক্সেসিবিলিটি টেমপ্লেট (VPAT)-এর প্রধান কাজ কী?'
      },
      options: [
        {
          en: 'To provide a standardized reporting framework documenting how software complies with WCAG and Section 508 for enterprise procurement',
          bn: 'বাণিজ্যিক ও সরকারি ক্রয়ে সফটওয়্যারটি কীভাবে ডব্লিউসিএজি ও সেকশন ৫০৮ মেনে চলে তা প্রমাণের প্রমিত কাঠামো প্রদান করা'
        },
        {
          en: 'To speed up CPU processing on graphics cards',
          bn: 'গ্রাফিক্স কার্ডের প্রসেসিং গতি বাড়িয়ে তোলা'
        },
        {
          en: 'To automate payment transactions in online stores',
          bn: 'অনলাইন দোকানে পেমেন্ট লেনদেন স্বয়ংক্রিয় করা'
        },
        {
          en: 'To compress JPEG images into WebP format',
          bn: 'ছবিকে জেপিইজি থেকে ওয়েবপি ফরম্যাটে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standardized document assessing accessibility compliance for buyers.',
        bn: 'সফটওয়্যার কেনাবেচায় অ্যাক্সেসিবিলিটি যাচাইয়ের সনদপত্র হিসেবে ব্যবহারের কথা ভাবুন।'
      },
      explanation: {
        en: 'A VPAT creates transparency, allowing enterprise and government procurement officers to verify legal accessibility compliance prior to purchasing.',
        bn: 'ভিপিএটি একটি স্বচ্ছ প্রতিবেদন যা দেখে ক্রেতারা নিশ্চিত হতে পারেন যে সফটওয়্যারটি আইনসম্মত ও সবার ব্যবহারের উপযোগী।'
      }
    },
    {
      id: 'a11y-ci-cd-gating-ex',
      kind: 'mcq',
      topic: 'Integrating accessibility checks into CI/CD pipelines',
      question: {
        en: 'How do modern software engineering teams prevent accessibility regressions from reaching production?',
        bn: 'আধুনিক সফটওয়্যার দলগুলো কীভাবে অ্যাক্সেসিবিলিটি ত্রুটি প্রোডাকশনে পৌঁছানো রোধ করে?'
      },
      options: [
        {
          en: 'By embedding axe-core into end-to-end test pipelines (like Playwright or Cypress) to fail pull requests containing critical violations',
          bn: 'প্লেরাইট বা সাইপ্রেস টেস্টে axe-core যুক্ত করে, যাতে ত্রুটিযুক্ত কোনো কোড গিটহাবে মার্জ হতে না পারে'
        },
        {
          en: 'By deleting all CSS styling files from the project',
          bn: 'প্রজেক্ট থেকে সব সিএসএস ফাইল মুছে ফেলে'
        },
        {
          en: 'By disabling the testing pipeline completely',
          bn: 'টেস্টিং পাইপলাইন সম্পূর্ণ বন্ধ রেখে'
        },
        {
          en: 'By asking customers to report bugs after production launch',
          bn: 'রিলিজের পর সাধারণ গ্রাহকদের ভুল ধরিয়ে দিতে বলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Automated CI gates fail builds before merging defective code.',
        bn: 'মার্জ করার আগেই অটোমেটেড টেস্ট দিয়ে কোড আটকে দেওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Automated CI/CD gates catch regressions before code is merged into main branches, stopping defects early in the software development lifecycle.',
        bn: 'সিআই/সিডি পাইপলাইনে অটোমেটেড টেস্ট রাখলে ভুল কোড প্রোডাকশনে যাওয়ার আগেই আটকে দেওয়া সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-final-inspection',
    title: {
      en: 'Accessibility Testing, Auditing & VPAT Quiz',
      bn: 'অ্যাক্সেসিবিলিটি টেস্টিং, অডিটিং ও ভিপিএটি কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-manual-screen-reader-pair',
        kind: 'mcq',
        topic: 'Standard industry screen reader and browser pairings',
        question: {
          en: 'Which pair represents a widely used industry standard combination for testing accessibility on Windows computers?',
          bn: 'উইন্ডোজ কম্পিউটারে অ্যাক্সেসিবিলিটি পরীক্ষার জন্য বিশ্বব্যাপী স্বীকৃত আদর্শ জুটি কোনটি?'
        },
        options: [
          {
            en: 'NVDA screen reader running with Google Chrome or Mozilla Firefox',
            bn: 'গুগল ক্রোম বা মজিলা ফায়ারফক্সের সাথে এনভিডিএ (NVDA) স্ক্রিন রিডার'
          },
          {
            en: 'Adobe Photoshop running with VLC Media Player',
            bn: 'এডবি ফটোশপের সাথে ভিএলসি মিডিয়া প্লেয়ার'
          },
          {
            en: 'Microsoft Word running with Spotify music player',
            bn: 'মাইক্রোসফট ওয়ার্ডের সাথে স্পটিফাই প্লেয়ার'
          },
          {
            en: 'Notepad running with the Windows Calculator',
            bn: 'নোটপ্যাডের সাথে ক্যালকুলেটর'
          }
        ],
        answer: 0,
        hint: {
          en: 'NVDA paired with Chrome or Firefox on Windows.',
          bn: 'এনভিডিএ এবং ক্রোম বা ফায়ারফক্সের কথা ভাবুন।'
        },
        explanation: {
          en: 'NVDA with Chrome or Firefox is the leading free, open-source testing environment utilized by accessibility auditors worldwide on Windows.',
          bn: 'উইন্ডোজ প্ল্যাটফর্মে সবচেয়ে জনপ্রিয় ফ্রি ও নির্ভরযোগ্য টেস্টিং সেটআপ হলো ক্রোম বা ফায়ারফক্সের সাথে এনভিডিএ চালানো।'
        }
      },
      {
        id: 'q-a11y-alt-text-automation-limit',
        kind: 'mcq',
        topic: 'Why automated tools cannot fully judge image alternative text',
        question: {
          en: 'Why can an automated scanner not reliably determine whether an image alt attribute satisfies WCAG Success Criterion 1.1.1?',
          bn: 'অটোমেটেড স্ক্যানার কেন নিশ্চিত করতে পারে না যে একটি ছবির alt লেখা ডব্লিউসিএজি ১.১.১ নিয়মটি সঠিকভাবে পূরণ করেছে?'
        },
        options: [
          {
            en: 'The scanner can only detect that the alt attribute exists; it cannot evaluate whether the text accurately describes the image context or meaning',
            bn: 'স্ক্যানার শুধু দেখতে পারে alt অ্যাট্রিবিউট আছে কিনা; কিন্তু লেখাটি ছবির প্রকৃত অর্থ সুন্দরভাবে প্রকাশ করছে কিনা তা বুঝতে পারে না'
          },
          {
            en: 'Because automated scanners are blind to all HTML elements',
            bn: 'কারণ অটোমেটেড স্ক্যানার কোনো এইচটিএমএল দেখতে পায় না'
          },
          {
            en: 'Because alt text is encrypted by internet browsers',
            bn: 'কারণ অল্টারনেটিভ টেক্সট ব্রাউজার দ্বারা এনক্রিপ্ট থাকে'
          },
          {
            en: 'Images do not support alt text in modern web standards',
            bn: 'আধুনিক ওয়েব স্ট্যান্ডার্ডে ছবিতে alt টেক্সট দেওয়ার নিয়ম নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Presence of an attribute does not equal quality or accuracy.',
          bn: 'ট্যাগ থাকলেই যে ভেতরের অর্থ সঠিক হবে তা নয়।'
        },
        explanation: {
          en: 'An image with alt="image.jpg" passes automated linters because the attribute exists, yet fails human accessibility audits because the text is meaningless.',
          bn: 'alt="image.jpg" লিখলে কম্পিউটার পাস দিলেও মানুষের কাছে তা অর্থহীন, তাই মানুষের চোখ দিয়ে যাচাই অপরিহার্য।'
        }
      },
      {
        id: 'q-a11y-partially-supports-status',
        kind: 'mcq',
        topic: 'Interpreting Partially Supports in an Accessibility Conformance Report',
        question: {
          en: 'In an Accessibility Conformance Report (VPAT ACR), what does assigning a status of "Partially Supports" signify?',
          bn: 'ভিপিএটি অ্যাক্সেসিবিলিটি প্রতিবেদনে (ACR) "Partially Supports" স্ট্যাটাস দেওয়ার অর্থ কী?'
        },
        options: [
          {
            en: 'Most functionality satisfies the criterion, but specific known exceptions or defects remain that need remediation',
            bn: 'অধিকাংশ ফিচার নিয়ম মানলেও কিছু নির্দিষ্ট ত্রুটি রয়ে গেছে যা পরবর্তীতে ঠিক করতে হবে'
          },
          {
            en: 'The application is completely illegal and must be shut down',
            bn: 'অ্যাপ্লিকেশনটি আইনত অবৈধ এবং বন্ধ করে দেওয়া উচিত'
          },
          {
            en: 'The software only works on mobile phones',
            bn: 'সফটওয়্যারটি কেবল মোবাইল ফোনে চলে'
          },
          {
            en: 'The product does not cost any money to download',
            bn: 'প্রোডাক্টটি ডাউনলোড করতে কোনো টাকা লাগে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Partial adherence with documented exceptions.',
          bn: 'আংশিক সাফল্য এবং চিহ্নিত কিছু ত্রুটির কথা ভাবুন।'
        },
        explanation: {
          en: 'Partially Supports provides honest documentation, detailing exact failure scenarios so procurement buyers understand remaining limitations.',
          bn: 'এই স্ট্যাটাসের মাধ্যমে সততার সাথে স্বীকার করা হয় কোন কোন ক্ষেত্রে সফটওয়্যার এখনও সম্পূর্ণ মানসম্মত হয়নি।'
        }
      },
      {
        id: 'q-a11y-manual-discovery-count',
        kind: 'mcq',
        topic: 'Understanding manual defect discovery rates from simulation',
        question: {
          en: 'In the simulation of 100 accessibility defects, how many issues were discovered exclusively through manual keyboard and assistive technology audits?',
          bn: '১০০টি অ্যাক্সেসিবিলিটি সমস্যার সিমুলেশনে কয়টি সমস্যা শুধুমাত্র ম্যানুয়াল কিবোর্ড ও স্ক্রিন রিডার অডিটের মাধ্যমে আবিষ্কৃত হয়েছিল?'
        },
        options: [
          {
            en: '62 defects (the remaining 62 percent)',
            bn: '৬২টি সমস্যা (বাকি ৬২ শতাংশ)'
          },
          {
            en: '100 defects',
            bn: '১০০টি সমস্যা'
          },
          {
            en: '5 defects',
            bn: '৫টি সমস্যা'
          },
          {
            en: '0 defects (machines found everything)',
            bn: '০টি সমস্যা (মেশিন সব পেয়ে গেছে)'
          }
        ],
        answer: 0,
        hint: {
          en: '100 total minus 38 automated equals 62.',
          bn: '১০০ থেকে ৩৮ বাদ দিলে ৬২ থাকে।'
        },
        explanation: {
          en: 'Because automated scanners only cover 38% of issues, the remaining 62% require human manual testing and screen reader verification.',
          bn: 'যেহেতু অটোমেটেড স্ক্যানার মাত্র ৩৮% ত্রুটি ধরতে পারে, তাই বাকি ৬২% সমস্যা ম্যানুয়ালি টেস্ট করে বের করতে হয়।'
        }
      }
    ]
  }
};
