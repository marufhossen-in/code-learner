import type { Lesson } from '../../../lib/types';

export const TheViewportAndTheMeasuringTapeLesson: Lesson = {
  slug: 'the-viewport-and-the-measuring-tape',
  tech: 'responsive-design',
  title: {
    en: 'Responsive Design Basics — Viewport Meta Tag, Pixels, and Units',
    bn: 'রেসপনসিভ ডিজাইন পরিচিতি — ভিউপোর্ট মেটা ট্যাগ, পিক্সেল এবং ইউনিট'
  },
  summary: {
    en: 'Responsive web design ensures that websites adapt smoothly to any screen resolution. In this beginner lesson, we master the essential viewport meta tag and CSS pixels. We also explore Device Pixel Ratio (DPR), viewports, and modern dynamic units like dvh and svh.',
    bn: 'রেসপনসিভ ওয়েব ডিজাইন নিশ্চিত করে যে ওয়েবসাইট যেকোনো স্ক্রিনে সুন্দরভাবে মানিয়ে নেয়। এই প্রাথমিক পাঠে আমরা ভিউপোর্ট মেটা ট্যাগ এবং সিএসএস পিক্সেল আয়ত্ত করব। এছাড়া আমরা ডিভাইস পিক্সেল রেশিও (DPR), ভিউপোর্ট এবং dvh ও svh-এর মতো আধুনিক ডাইনামিক ইউনিট বিস্তারিত শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'viewport-overview',
      text: {
        en: 'The Foundational Rule: The Viewport Meta Tag',
        bn: 'মূল ভিত্তি: ভিউপোর্ট মেটা ট্যাগ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you open a website on a smartphone, early mobile browsers assumed the page was designed for a 980px desktop screen. Without a viewport meta tag, the browser renders the page at 980px and shrinks it down, making text microscopic. Adding width=device-width forces the browser to match the actual screen width.',
        bn: 'স্মার্টফোনে কোনো ওয়েবসাইট খোলার সময় পুরোনো মোবাইল ব্রাউজারগুলো ধরে নিত যে পেজটি ৯৮০px ডেস্কটপ স্ক্রিনের জন্য তৈরি। ভিউপোর্ট মেটা ট্যাগ না থাকলে ব্রাউজার পেজটি ৯৮০px মাপে রেন্ডার করে জোর করে সংকুচিত করে দেয়, ফলে লেখাগুলো অত্যন্ত ছোট দেখায়। width=device-width যোগ করলে ব্রাউজার আসল স্ক্রিনের মাপ অনুযায়ী রেন্ডার করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Viewport Meta Tag',
          def: {
            en: 'An HTML header tag specifying layout viewport dimensions and initial zoom scale on mobile devices.',
            bn: 'একটি এইচটিএমএল হেডার ট্যাগ যা মোবাইল ডিভাইসে লেআউট ভিউপোর্টের আকার এবং প্রাথমিক জুম স্কেল নির্ধারণ করে।'
          }
        },
        {
          term: 'CSS Pixel',
          def: {
            en: 'The standard abstract coordinate unit used in CSS declarations, independent of screen hardware density.',
            bn: 'সিএসএস কোডে ব্যবহৃত স্ট্যান্ডার্ড বিমূর্ত একক, যা স্ক্রিনের ফিজিক্যাল হার্ডওয়্যারের ঘনত্বের ওপর নির্ভর করে না।'
          }
        },
        {
          term: 'Device Pixel Ratio (DPR)',
          def: {
            en: 'The ratio between physical hardware pixels and CSS logical pixels on a screen display.',
            bn: 'স্ক্রিনের ফিজিক্যাল হার্ডওয়্যার পিক্সেল এবং সিএসএসের লজিক্যাল পিক্সেলের মধ্যকার অনুপাত।'
          }
        },
        {
          term: 'Layout vs Visual Viewport',
          def: {
            en: 'The layout viewport determines CSS media query boundaries, while the visual viewport represents what the user currently sees.',
            bn: 'লেআউট ভিউপোর্ট সিএসএস মিডিয়া কুয়েরির মাপ নির্ধারণ করে, আর ভিজ্যুয়াল ভিউপোর্ট ব্যবহারকারীর বর্তমান দৃশ্যমান অংশ নির্দেশ করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'pixels-and-dpr',
      text: {
        en: 'CSS Pixels vs Hardware Device Pixels',
        bn: 'সিএসএস পিক্সেল বনাম হার্ডওয়্যার ডিভাইস পিক্সেল'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. CSS Pixels are Logical: 1 CSS pixel represents an angular measurement of 1/96th of an inch at typical viewing distances. This ensures a 16px font remains readable across both phones and laptops.',
          bn: '১. সিএসএস পিক্সেল হলো লজিক্যাল: ১টি সিএসএস পিক্সেল সাধারণ দূরত্বে ১ ইঞ্চির ৯৬ ভাগের ১ ভাগ বোঝায়। এর ফলে ১৬px ফন্টের লেখা ফোন এবং ল্যাপটপ উভয় স্ক্রিনেই স্পষ্টভাবে পড়া যায়।'
        },
        {
          en: '2. High-DPI Displays: Modern smartphones have Device Pixel Ratios of 2 or 3. A 390px wide phone with a DPR of 3 packs 1170 physical pixels across that width.',
          bn: '২. হাই-ডিপিআই ডিসপ্লে: আধুনিক স্মার্টফোনে ডিভাইস পিক্সেল রেশিও ২ বা ৩ থাকে। ৩টি ডিপিআরযুক্ত ৩৯০px চওড়া ফোনে প্রস্থ বরাবর মোট ১১৭০টি ফিজিক্যাল পিক্সেল থাকে।'
        },
        {
          en: '3. Image Crispness: On DPR 2 and 3 screens, a 100px image requires a 200px or 300px source image to prevent blurry rendering.',
          bn: '৩. ছবির স্পষ্টতা: ডিপিআর ২ এবং ৩ স্ক্রিনে ১০০px ছবির জন্য ২০০px বা ৩০০px আকারের মূল ছবি প্রয়োজন হয়, যাতে ছবি ঝাপসা না দেখায়।'
        },
        {
          en: '4. Checking DPR in JavaScript: Inspect window.devicePixelRatio to detect display density at runtime.',
          bn: '৪. জাভাস্ক্রিপ্টে ডিপিআর পরীক্ষা: রানটাইমে ডিসপ্লের ঘনত্ব জানতে window.devicePixelRatio প্রোপার্টি পরীক্ষা করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Viewport and Measurement Code',
        bn: 'ভিউ ভিউপোর্ট ও পরিমাপের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `// 1. Inspect layout viewport dimensions
const layoutWidth = document.documentElement.clientWidth;
const layoutHeight = document.documentElement.clientHeight;

console.log('Layout width:', layoutWidth > 0);
// -> Layout width: true

// 2. Inspect physical hardware density
const dpr = window.devicePixelRatio || 1;
console.log('Device Pixel Ratio is at least 1:', dpr >= 1);
// -> Device Pixel Ratio is at least 1: true

// 3. Inspect visual viewport during zoom or virtual keyboard
if (window.visualViewport) {
  console.log('Visual viewport width:', window.visualViewport.width > 0);
  // -> Visual viewport width: true
  console.log('Visual viewport scale:', window.visualViewport.scale >= 1);
  // -> Visual viewport scale: true
}`,
      caption: {
        en: 'Querying layout viewport, visual viewport, and device pixel density with DPR 1 fallback',
        bn: 'DPR ১ ফলব্যাক সহ লেআউট ভিউপোর্ট, ভিজ্যুয়াল ভিউপোর্ট ও পিক্সেল ঘনত্ব পরিমাপ করা'
      }
    },
    {
      type: 'heading',
      id: 'viewport-units-table',
      text: {
        en: 'Modern Viewport Length Units',
        bn: 'আধুনিক ভিউপোর্ট দৈর্ঘ্য ইউনিটসমূহ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Unit', bn: 'ইউনিট' },
        { en: 'Calculation Base', bn: 'হিসাবের ভিত্তি' },
        { en: 'Mobile Browser Behavior', bn: 'মোবাইল ব্রাউজার আচরণ' }
      ],
      rows: [
        [
          { en: 'vh', bn: 'vh' },
          { en: '1% of initial layout viewport height', bn: 'প্রাথমিক লেআউট ভিউপোর্ট উচ্চতার ১%' },
          { en: 'Does not shrink when browser address bar collapses; causes bottom overflow', bn: 'অ্যাড্রেস বার ছোট হলে আপডেট হয় না; ফলে নিচের অংশ কেটে যেতে পারে' }
        ],
        [
          { en: 'svh (Small Viewport)', bn: 'svh (স্মল ভিউপোর্ট)' },
          { en: '1% of viewport height when mobile UI bars are fully expanded', bn: 'মোবাইল ইউআই বার সম্পূর্ণ খোলা থাকা অবস্থায় উচ্চতার ১%' },
          { en: 'Guarantees elements fit inside the visible screen without being covered', bn: 'নিশ্চিত করে উপাদানগুলো স্ক্রিনের ভেতর থাকবে এবং বার দিয়ে ঢাকবে না' }
        ],
        [
          { en: 'lvh (Large Viewport)', bn: 'lvh (লার্জ ভিউপোর্ট)' },
          { en: '1% of viewport height when mobile UI bars are retracted', bn: 'মোবাইল ইউআই বার লুকানো থাকা অবস্থায় উচ্চতার ১%' },
          { en: 'Provides maximum possible screen area for full-screen games or video', bn: 'ফুল-স্ক্রিন ভিডিও বা গেমের জন্য সর্বোচ্চ সম্ভাব্য এলাকা প্রদান করে' }
        ],
        [
          { en: 'dvh (Dynamic Viewport)', bn: 'dvh (ডাইনামিক ভিউপোর্ট)' },
          { en: '1% of current active viewport height updating in real time', bn: 'রিয়েল টাইমে আপডেট হওয়া বর্তমান সক্রিয় উচ্চতার ১%' },
          { en: 'Smoothly adapts as user scrolls and address bar expands or collapses', bn: 'স্ক্রল করার সাথে সাথে অ্যাড্রেস বার ওঠানামার সাথে মসৃণভাবে সমন্বয় হয়' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'rd-vp-ex1',
      kind: 'mcq',
      topic: 'viewport meta tag necessity',
      question: {
        en: 'What happens on mobile devices if a webpage omits the viewport meta tag entirely?',
        bn: 'কোনো ওয়েবপেজে ভিউপোর্ট মেটা ট্যাগ না থাকলে মোবাইল ডিভাইসে কী ঘটে?'
      },
      options: [
        {
          en: 'The browser renders at a default desktop width of 980px and zooms out, making text unreadably small',
          bn: 'ব্রাউজার ডিফল্ট ৯৮০px ডেস্কটপ মাপে রেন্ডার করে জুম আউট করে ফেলে, ফলে লেখা অতি ক্ষুদ্র দেখায়'
        },
        {
          en: 'The browser refuses to load the webpage and returns an HTTP 500 error',
          bn: 'ব্রাউজার পেজটি লোড করতে অস্বীকৃতি জানায় এবং HTTP 500 এরর দেয়'
        },
        {
          en: 'The page text is automatically converted into pure audio speech',
          bn: 'পেজের সমস্ত লেখা স্বয়ংক্রিয়ভাবে অডিও স্পিচে রূপান্তরিত হয়ে যায়'
        },
        {
          en: 'All images on the website are deleted from browser memory',
          bn: 'ওয়েবসাইটের সমস্ত ছবি ব্রাউজারের মেমোরি থেকে মুছে ফেলা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Mobile browsers assume non-responsive legacy desktop layouts without this tag.',
        bn: 'এই ট্যাগ না থাকলে মোবাইল ব্রাউজার পেজটিকে পুরোনো ডেস্কটপ লেআউট মনে করে।'
      },
      explanation: {
        en: 'Without width=device-width, mobile browsers assume a 980px desktop viewport and scale the entire page down to fit the phone screen, breaking responsive styling.',
        bn: 'width=device-width না থাকলে মোবাইল ব্রাউজার পেজটিকে ৯৮০px চওড়া ধরে নিয়ে ছোট করে দেখায়, ফলে সব রেসপনসিভ স্টাইল অকার্যকর হয়ে পড়ে।'
      }
    },
    {
      id: 'rd-vp-ex2',
      kind: 'mcq',
      topic: 'initial-scale option',
      question: {
        en: 'What is the purpose of initial-scale=1 in <meta name="viewport" content="width=device-width, initial-scale=1">?',
        bn: 'মেটা ট্যাগে initial-scale=1 ব্যবহারের মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It establishes a 1:1 relationship between CSS pixels and device-independent pixels upon page load',
          bn: 'পেজ লোডের সময় সিএসএস পিক্সেল এবং ডিভাইসের লজিক্যাল পিক্সেলের মাঝে ১:১ অনুপাত নিশ্চিত করে'
        },
        {
          en: 'It disables user pinch-to-zoom completely across the entire site',
          bn: 'পুরো ওয়েবসাইটে ব্যবহারকারীর পিঞ্চ-টু-জুম করার ক্ষমতা সম্পূর্ণ বন্ধ করে দেয়'
        },
        {
          en: 'It forces the browser to download high-resolution 4K images',
          bn: 'ব্রাউজারকে উচ্চ রেজোলিউশনের 4K ছবি ডাউনলোড করতে বাধ্য করে'
        },
        {
          en: 'It limits website loading speed to 1 second maximum',
          bn: 'ওয়েবসাইট লোড হওয়ার সময় সর্বোচ্চ ১ সেকেন্ডে সীমাবদ্ধ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It sets the default zoom level when the webpage initially opens.',
        bn: 'ওয়েবপেজ প্রথমে খোলার সময় এটি ডিফল্ট জুম লেভেল নির্ধারণ করে।'
      },
      explanation: {
        en: 'initial-scale=1 ensures that the viewport is displayed at 100% scale without initial shrinking or artificial zoom when the page first loads.',
        bn: 'initial-scale=1 নিশ্চিত করে যে পেজটি প্রথমবার লোড হওয়ার সময় কোনো কৃত্রিম জুম বা সংকোচন ছাড়া ১০০% স্বাভাবিক স্কেলে প্রদর্শিত হবে।'
      }
    },
    {
      id: 'rd-vp-ex3',
      kind: 'mcq',
      topic: 'dvh vs vh units',
      question: {
        en: 'Why is 100dvh preferred over 100vh for full-height hero sections on mobile browsers?',
        bn: 'মোবাইল ব্রাউজারে ফুল-হাইট সেকশনের জন্য 100vh-এর চেয়ে 100dvh কেন বেশি কার্যকর?'
      },
      options: [
        {
          en: '100dvh dynamically recalculates when the mobile URL bar expands or contracts, preventing bottom content cutoff',
          bn: 'মোবাইল ব্রাউজারের ইউআরএল বার ওঠানামা করলে 100dvh রিয়েল-টাইমে হিসাব করে নিচের কন্টেন্ট ঢেকে যাওয়া রোধ করে'
        },
        {
          en: '100vh is deprecated and unsupported in modern CSS specifications',
          bn: 'আধুনিক সিএসএস স্পেসিফিকেশনে 100vh সম্পূর্ণ বাতিল ঘোষণা করা হয়েছে'
        },
        {
          en: '100dvh requires 50% less CPU processing power to calculate',
          bn: 'হিসাব করার জন্য 100dvh-এর প্রসেসর ক্ষমতা ৫০% কম প্রয়োজন হয়'
        },
        {
          en: '100dvh automatically turns on dark mode on mobile devices',
          bn: 'মোবাইল ডিভাইসে 100dvh স্বয়ংক্রিয়ভাবে ডার্ক মোড চালু করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Dynamic viewport units adjust to the visible screen area live.',
        bn: 'ডাইনামিক ভিউপোর্ট ইউনিট ব্রাউজারের দৃশ্যমান অংশের সাথে সরাসরি মানিয়ে নেয়।'
      },
      explanation: {
        en: 'On mobile browsers, 100vh reflects the viewport when UI bars are hidden, causing bottom buttons to hide behind the URL bar. 100dvh adjusts dynamically to current UI dimensions.',
        bn: 'মোবাইলে 100vh অ্যাড্রেস বার লুকানো অবস্থার মাপ নেয়, ফলে নিচের বাটনগুলো বারের নিচে ঢাকা পড়ে যায়। 100dvh স্ক্রলিংয়ের সাথে সাথে সঠিক মাপ বজায় রাখে।'
      }
    },
    {
      id: 'rd-vp-ex4',
      kind: 'mcq',
      topic: 'device pixel ratio calculation',
      question: {
        en: 'If a smartphone has a CSS width of 400px and a Device Pixel Ratio of 3, how many physical hardware pixels wide is the screen?',
        bn: 'একটি ফোনের সিএসএস প্রস্থ ৪০০px এবং ডিভাইস পিক্সেল রেশিও ৩ হলে, এর ফিজিক্যাল হার্ডওয়্যার প্রস্থ কত পিক্সেল?'
      },
      options: [
        {
          en: '1200 physical pixels (400 CSS pixels multiplied by DPR 3)',
          bn: '১২০০ ফিজিক্যাল পিক্সেল (৪০০ সিএসএস পিক্সেল × ৩ ডিপিআর)'
        },
        {
          en: '400 physical pixels',
          bn: '৪০০ ফিজিক্যাল পিক্সেল'
        },
        {
          en: '700 physical pixels',
          bn: '৭০০ ফিজিক্যাল পিক্সেল'
        },
        {
          en: '133 physical pixels',
          bn: '১৩৩ ফিজিক্যাল পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply the logical CSS width by the device pixel ratio.',
        bn: 'লজিক্যাল সিএসএস প্রস্থকে ডিভাইস পিক্সেল রেশিও দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Physical pixels equal CSS pixels multiplied by DPR. 400 multiplied by 3 gives 1200 physical hardware pixels.',
        bn: 'ফিজিক্যাল পিক্সেল সমান সিএসএস পিক্সেল গুণিতক ডিপিআর। ৪০০ কে ৩ দিয়ে গুণ করলে ১২০০ ফিজিক্যাল পিক্সেল পাওয়া যায়।'
      }
    }
  ],
  quiz: {
    id: 'viewport-basics-quiz',
    title: {
      en: 'Viewport & Screen Density Quiz',
      bn: 'ভূপোর্ট এবং স্ক্রিন ঘনত্ব কুইজ'
    },
    questions: [
      {
        id: 'q-zoom-accessibility',
        kind: 'mcq',
        topic: 'zoom accessibility best practice',
        question: {
          en: 'Why is adding user-scalable=no or maximum-scale=1 considered an accessibility anti-pattern?',
          bn: 'মেটা ট্যাগে user-scalable=no বা maximum-scale=1 যোগ করা কেন অ্যাক্সেসিবিলিটি বিরোধী অপরাধ হিসেবে গণ্য হয়?'
        },
        options: [
          {
            en: 'It prevents users with low vision from zooming into text and violates WCAG 1.4.4 criteria',
            bn: 'এটি দৃষ্টিপ্রতিবন্ধী ব্যবহারকারীদের লেখা জুম করতে বাধা দেয় এবং WCAG 1.4.4 নিয়ম লঙ্ঘন করে'
          },
          {
            en: 'It causes the browser to download web pages twice',
            bn: 'এর ফলে ব্রাউজার ওয়েবপেজটি দুইবার ডাউনলোড করতে বাধ্য হয়'
          },
          {
            en: 'It crashes mobile Safari and Chrome browsers immediately',
            bn: 'এটি মোবাইল সাফারি এবং ক্রোম ব্রাউজারকে সাথে সাথে ক্র্যাশ করিয়ে দেয়'
          },
          {
            en: 'It forces fonts to display in Comic Sans typeface',
            bn: 'এটি সমস্ত ফন্টকে কমিক সান্স (Comic Sans) টাইপফেসে প্রদর্শন করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Users must always retain the freedom to enlarge interface text.',
          bn: 'ব্যবহারকারীর নিজের ইচ্ছামতো লেখা বড় করে দেখার স্বাধীনতা থাকতে হবে।'
        },
        explanation: {
          en: 'WCAG 2.1 Success Criterion 1.4.4 requires content to be zoomable up to 200% without assistive technology. Blocking zoom locks out visually impaired users.',
          bn: 'WCAG 1.4.4 নিয়ম অনুসারে কোনো টুল ছাড়াই লেখা ২০০% পর্যন্ত জুম করার সুবিধা থাকতে হয়। জুম বন্ধ করলে কম দৃষ্টিসম্পন্ন ব্যক্তিরা পেজ পড়তে পারেন না।'
        }
      },
      {
        id: 'q-visual-vs-layout-viewport',
        kind: 'mcq',
        topic: 'layout vs visual viewport behavior',
        question: {
          en: 'What happens to the visual viewport when a user brings up the mobile on-screen keyboard?',
          bn: 'ব্যবহারকারী মোবাইলে অন-স্ক্রিন কীবোর্ড ওপেন করলে ভিজ্যুয়াল ভিউপোর্টে কী পরিবর্তন আসে?'
        },
        options: [
          {
            en: 'The visual viewport height shrinks to the space remaining above the keyboard, while the layout viewport stays unchanged',
            bn: 'কীবোর্ডের উপরের অবশিষ্ট জায়গাটুকু নিয়ে ভিজ্যুয়াল ভিউপোর্ট সংকুচিত হয়, কিন্তু লেআউট ভিউপোর্ট অপরিবর্তিত থাকে'
          },
          {
            en: 'The layout viewport width immediately drops to 0px',
            bn: 'লেআউট ভিউপোর্টের প্রস্থ সাথে সাথে ০px-এ নেমে আসে'
          },
          {
            en: 'The entire browser window closes automatically',
            bn: 'সম্পূর্ণ ব্রাউজার উইন্ডোটি নিজে থেকেই বন্ধ হয়ে যায়'
          },
          {
            en: 'The device pixel ratio temporarily increases to 10',
            bn: 'ডিভাইস পিক্সেল রেশিও সাময়িকভাবে ১০ গুণ বৃদ্ধি পায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The visual viewport represents the actively visible window above obstructions.',
          bn: 'ভিজ্যুয়াল ভিউপোর্ট মূলত কীবোর্ডের উপরে থাকা দৃশ্যমান ফাঁকা অংশটুকু নির্দেশ করে।'
        },
        explanation: {
          en: 'When the virtual keyboard appears, the visual viewport height contracts. Fixed-position elements tied to visualViewport adjust smoothly above the keyboard.',
          bn: 'ভার্চুয়াল কীবোর্ড খুললে ভিজ্যুয়াল ভিউপোর্টের উচ্চতা কমে যায়। ভিজ্যুয়াল ভিউপোর্টের সাথে যুক্ত উপাদানগুলো তখন কীবোর্ডের ঠিক উপরে ভেসে থাকে।'
        }
      },
      {
        id: 'q-svh-use-case',
        kind: 'mcq',
        topic: 'svh unit usage',
        question: {
          en: 'When is svh (Small Viewport Height) the safest unit to choose in responsive CSS?',
          bn: 'রেসপনসিভ সিএসএসে svh (স্মল ভিউপোর্ট হাইট) বেছে নেওয়া কখন সবচেয়ে নিরাপদ?'
        },
        options: [
          {
            en: 'When designing fixed modals or bottom action sheets that must never be obscured by mobile browser navigation bars',
            bn: 'ফিক্সড মডাল বা অ্যাকশন শিট তৈরির সময় যা কোনো অবস্থাতেই মোবাইল ব্রাউজার নেভিগেশন বার দিয়ে ঢাকা পড়া চলবে না'
          },
          {
            en: 'When writing responsive text headings in desktop sidebars',
            bn: 'ডেস্কটপ সাইডবারে রেসপনসিভ টেক্সট হেডিং লেখার সময়'
          },
          {
            en: 'When creating horizontal carousel image galleries',
            bn: 'অনুভূমিক ক্যারোসেল ইমেজ গ্যালারি তৈরির সময়'
          },
          {
            en: 'When defining border thickness on submit buttons',
            bn: 'সাবমিট বাটনে বর্ডারের ঘনত্ব নির্ধারণ করার সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'svh guarantees content fits even when browser bars occupy maximum screen space.',
          bn: 'ব্রাউজারের বারগুলো সর্বোচ্চ জায়গা দখল করে থাকলেও svh নিশ্চিত করে উপাদানটি স্ক্রিনে ধরবে।'
        },
        explanation: {
          en: 'svh measures viewport height when browser UI chrome is fully visible. Using svh ensures critical interactive elements remain fully reachable on screen.',
          bn: 'svh তখন উচ্চতা মাপে যখন ব্রাউজারের সমস্ত বার পুরোপুরি দৃশ্যমান থাকে। এর ফলে জরুরি কোনো বাটন স্ক্রিনের বাইরে চলে যাওয়ার ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'q-dpr-vector-svg',
        kind: 'mcq',
        topic: 'svg on high dpr screens',
        question: {
          en: 'Why do vector SVG icons look razor-sharp on both DPR 1 and DPR 3 screens without multiple image files?',
          bn: 'ভেক্টর এসভিজি (SVG) আইকন আলাদা ফাইল ছাড়াই ডিপিআর ১ এবং ৩ উভয় স্ক্রিনেই নিখুঁত ও স্পষ্ট দেখায় কেন?'
        },
        options: [
          {
            en: 'SVGs use mathematical vectors and curves that rasterize dynamically at the native hardware pixel resolution of any display',
            bn: 'এসভিজি গাণিতিক ভেক্টর ও কার্ভ ব্যবহার করে যা যেকোনো ডিসপ্লের নিজস্ব হার্ডওয়্যার রেজোলিউশনে স্বয়ংক্রিয়ভাবে স্পষ্ট হয়ে ফুটে ওঠে'
          },
          {
            en: 'SVGs download hidden high-resolution JPEG files in the background',
            bn: 'এসভিজি ব্যাকগ্রাউন্ডে লুকিয়ে থাকা উচ্চ রেজোলিউশনের জেপিইজি ফাইল ডাউনলোড করে নেয়'
          },
          {
            en: 'SVG files are executed directly inside the GPU shader processor',
            bn: 'এসভিজি ফাইলগুলো সরাসরি জিপিইউ শেডার প্রসেসরে এক্সিকিউট হয়'
          },
          {
            en: 'SVGs force the monitor to change its physical hardware resolution',
            bn: 'এসভিজি মনিটরের ফিজিক্যাল হার্ডওয়্যার রেজোলিউশন পরিবর্তন করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Vector graphics scale infinitely by rendering mathematical formulas.',
          bn: 'ভেক্টর গ্রাফিক্স জ্যামিতিক সমীকরণ ব্যবহার করে যেকোনো আকারে সমান স্পষ্ট থাকে।'
        },
        explanation: {
          en: 'Because SVG definitions consist of mathematical paths and curves, the browser renders them precisely to match the exact physical pixel density of the client screen.',
          bn: 'যেহেতু এসভিজি পাথ ও জ্যামিতিক হিসাব দিয়ে আঁকা হয়, তাই স্ক্রিনের ডিপিআর যত বেশিই হোক না কেন ব্রাউজার প্রতিটি ফিজিক্যাল পিক্সেলে নিখুঁতভাবে ছবি আঁকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-fluid-cloth',
    title: {
      en: 'Fluid Layouts & Math — clamp(), min(), max(), and Relative Units',
      bn: 'ফ্লুইড লেআউট ও ম্যাথ — clamp(), min(), max() এবং রিলেটিভ ইউনিট'
    }
  }
};
