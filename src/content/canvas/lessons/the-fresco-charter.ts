import type { Lesson } from '../../../lib/types';

export const frescoCharterLesson: Lesson = {
  slug: 'the-fresco-charter',
  tech: 'canvas',
  title: {
    en: 'HTML5 Canvas 2D Fundamentals, Immediate Mode & Retina Scaling',
    bn: 'এইচটিএমএল-৫ ক্যানভাস ২ডি ফান্ডামেন্টালস, ইমিডিয়েট মোড ও রেটিনা স্কেলিং'
  },
  summary: {
    en: 'The HTML5 Canvas 2D API provides an immediate-mode bitmap rendering surface inside the browser. Unlike the DOM or SVG where elements exist as persistent tree nodes with their own event handlers, Canvas treats graphics as direct raster modifications on a raw grid of pixels. Once a rectangle is drawn onto a canvas, the browser forgets the drawing command and retains only the resulting pixel colors. Moving an object requires clearing the surface and redrawing the entire scene from scratch. This lesson explores the fundamental contrast between internal bitmap resolution and CSS display size. You will master high-DPI Retina display calibration where a 400 by 300 CSS layout scales by a device pixel ratio of 2 into an 800 by 600 pixel buffer totaling 480000 physical pixels for razor-sharp rendering.',
    bn: 'এইচটিএমএল-৫ ক্যানভাস ২ডি এপিআই ব্রাউজারের ভেতর সরাসরি পিক্সেল আঁকার জন্য একটি ইমিডিয়েট-মোড বিটম্যাপ ক্যানভাস প্রদান করে। সাধারণ ডম বা এসভিজির মতো প্রতিটি উপাদানের আলাদা ট্যাগ ও মেমোরি না রেখে ক্যানভাস সরাসরি পিক্সেলে রূপান্তর করে। একবার ক্যানভাসে একটি চারকোনা আঁকা হয়ে গেলে ব্রাউজার কমান্ডটি ভুলে যায় এবং কেবল পিক্সেলের রঙ মনে রাখে। কোনো কিছু সরাতে হলে পুরো ক্যানভাস মুছে আবার নতুন করে সব আঁকতে হয়। এই পাঠে ক্যানভাসের অভ্যন্তরীণ বিটম্যাপ মাপ এবং সিএসএস দৃশ্যমান মাপের পার্থক্য ব্যাখ্যা করা হয়েছে। ৪০০ বাই ৩০০ সিএসএস মাপের ক্যানভাসকে ২ গুণ রেটিনা স্কেলে ৮০০ বাই ৬০০ বিটম্যাপে রূপান্তর করে মোট ৪৮০০০০ পিক্সেলে একদম নিখুঁত ও স্পষ্ট ছবি আঁকার কৌশল আপনি শিখবেন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Immediate-Mode Pixel Rasterization',
        bn: 'মূল ধারণা: ইমিডিয়েট-মোড পিক্সেল রাস্টারাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you render graphics in standard HTML, every paragraph, button, and vector shape exists as an independent node in the browser Document Object Model (DOM). While this retained mode makes styling easy, animating thousands of individual DOM elements creates massive memory overhead. The browser Canvas API takes the opposite path: it presents a single flat bitmap where JavaScript executes immediate-mode drawing commands directly onto pixels.',
        bn: 'আপনি যখন সাধারণ এইচটিএমএলে গ্রাফিক্স বানান, প্রতিটি বাটন বা ভেক্টর উপাদান ব্রাউজারের ডম (DOM) ট্রিতে একটি স্বতন্ত্র উপাদান হিসেবে থাকে। এতে স্টাইল করা সহজ হলেও হাজার হাজার উপাদান অ্যানিমেট করতে গেলে ব্রাউজারের মেমোরিতে মারাত্মক চাপ পড়ে। ব্রাউজার ক্যানভাস এপিআই ঠিক এর উল্টো পথে চলে: এটি একটি একক ফ্ল্যাট বিটম্যাপ প্রদান করে যেখানে জাভাস্ক্রিপ্ট সরাসরি পিক্সেলের ওপর ছবি এঁকে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Immediate-Mode Rendering',
          def: {
            en: 'A graphics architecture where drawing commands write directly to a pixel buffer and are immediately discarded, rather than stored in a scene graph',
            bn: 'এমন একটি গ্রাফিক্স পদ্ধতি যেখানে ছবি সরাসরি পিক্সেলে আঁকা হয় এবং ব্রাউজার কোনো আঁকার নির্দেশ মনে না রেখে তৎক্ষণাৎ তা মুছে ফেলে'
          }
        },
        {
          term: '2D Rendering Context (ctx)',
          def: {
            en: 'The stateful drawing API object retrieved via canvas.getContext("2d") that provides all 2D path, shape, and pixel manipulation methods',
            bn: 'ক্যানভাসের মূল ড্রয়িং অবজেক্ট যা canvas.getContext("2d") দিয়ে পাওয়া যায় এবং যার মাধ্যমে সব রেখা ও ছবি আঁকা হয়'
          }
        },
        {
          term: 'devicePixelRatio (DPR)',
          def: {
            en: 'The ratio of physical hardware screen pixels to CSS logical pixels (typically 2 on Apple Retina and modern mobile screens)',
            bn: 'কম্পিউটারের আসল হার্ডওয়্যার পিক্সেল এবং সিএসএস লজিক্যাল পিক্সেলের অনুপাত (রেটিনা বা আধুনিক ফোনে যা সাধারণত ২ হয়)'
          }
        },
        {
          term: 'Painter Algorithm',
          def: {
            en: 'The 2D rendering principle where subsequent drawing calls overwrite earlier pixels, dictating visual depth by execution order',
            bn: '২ডি রেন্ডারিংয়ের সাধারণ নিয়ম যেখানে পরের আঁকা জিনিস আগের আঁকা জিনিসকে ঢেকে ফেলে এবং আঁকার ক্রম দিয়েই গভীরতা তৈরি হয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'two-dimension-systems-table',
      text: {
        en: 'The Two Dimension Systems of Canvas',
        bn: 'ক্যানভাসের দুটি ভিন্ন পরিমাপ ব্যবস্থা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison Between Internal Bitmap Resolution and CSS Display Dimensions',
        bn: 'ক্যানভাসের অভ্যন্তরীণ বিটম্যাপ সাইজ এবং সিএসএস মাপের তুলনা'
      },
      head: [
        { en: 'Dimension Property', bn: 'পরিমাপের বৈশিষ্ট্য' },
        { en: 'Internal Bitmap (width & height attributes)', bn: 'অভ্যন্তরীণ বিটম্যাপ (width ও height)' },
        { en: 'Visual Layout (style.width & style.height)', bn: 'সিএসএস লেআউট (style.width ও style.height)' }
      ],
      rows: [
        [
          { en: 'Default Value', bn: 'ডিফল্ট মান' },
          { en: '300 pixels wide by 150 pixels tall', bn: '৩০০ পিক্সেল প্রস্থ ও ১৫০ পিক্সেল উচ্চতা' },
          { en: 'Auto (inherits internal attribute dimensions)', bn: 'অটো (বিটম্যাপের সাইজ অনুযায়ী বসে)' }
        ],
        [
          { en: 'Configuration Syntax', bn: 'লিখনের নিয়ম' },
          { en: '<canvas width="800" height="600">', bn: '<canvas width="800" height="600">' },
          { en: 'style="width: 400px; height: 300px;"', bn: 'style="width: 400px; height: 300px;"' }
        ],
        [
          { en: 'Impact on Rendering', bn: 'রেন্ডারিংয়ে প্রভাব' },
          { en: 'Allocates real pixel memory in GPU/RAM; dictates drawing resolution', bn: 'আসল মেমোরি বরাদ্দ করে এবং ছবির রেজোলিউশন ঠিক করে' },
          { en: 'Scales and positions the rendered canvas box on the webpage layout', bn: 'ওয়েব পেজে ক্যানভাসের বাক্সটির চাক্ষুষ আকার নির্ধারণ করে' }
        ],
        [
          { en: 'Mismatch Consequence', bn: 'অমিলের ফলাফল' },
          { en: 'If too small, graphics appear blurry and pixelated when stretched', bn: 'ছোট হলে বড় স্ক্রিনে লেখা ও ছবি ঝাপসা হয়ে ফেটে যায়' },
          { en: 'Must match coordinate math to ensure accurate pointer click tracking', bn: 'স্থানাঙ্কের সাথে মিল না থাকলে মাউস ক্লিকের অবস্থান ভুল হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Retina Display High-DPI Resolution Scaling',
        bn: 'চালনাযোগ্য সিমুলেশন: রেটিনা ডিসপ্লে হাই-ডিপিআই রেজোলিউশন স্কেলিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the calibrated bitmap dimensions and pixel allocation required to render a 400 by 300 CSS canvas crisply on a 2x Retina display:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি ৪০০ বাই ৩০০ সিএসএস ক্যানভাসকে ২ গুণ রেটিনা স্ক্রিনে নিখুঁতভাবে আঁকার জন্য প্রয়োজনীয় বিটম্যাপ সাইজ ও মোট পিক্সেল সংখ্যা হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'canvas-retina-sim',
      lang: 'javascript',
      code: `// High-DPI Retina Canvas Buffer Allocation Engine
const cssWidth = 400;  // Intended CSS layout width in pixels
const cssHeight = 300; // Intended CSS layout height in pixels
const dpr = 2;         // Apple Retina window.devicePixelRatio

// Internal bitmap must be multiplied by DPR to prevent blurring
const bufferWidth = cssWidth * dpr;
const bufferHeight = cssHeight * dpr;
const totalPixels = bufferWidth * bufferHeight;

console.log('Target CSS display width in pixels:', cssWidth);
// -> Target CSS display width in pixels: 400

console.log('Target CSS display height in pixels:', cssHeight);
// -> Target CSS display height in pixels: 300

console.log('Detected screen device pixel ratio (DPR):', dpr);
// -> Detected screen device pixel ratio (DPR): 2

console.log('Calibrated canvas bitmap buffer width in pixels:', bufferWidth);
// -> Calibrated canvas bitmap buffer width in pixels: 800

console.log('Calibrated canvas bitmap buffer height in pixels:', bufferHeight);
// -> Calibrated canvas bitmap buffer height in pixels: 600

console.log('Total allocated physical pixels in GPU buffer:', totalPixels);
// -> Total allocated physical pixels in GPU buffer: 480000`,
      caption: {
        en: 'Figure 1: Calibrating a 400 by 300 CSS canvas for a DPR of 2 allocates an 800 by 600 pixel buffer totaling 480000 physical pixels for crisp Retina lines',
        bn: 'চিত্র ১: ৪০০ বাই ৩০০ সিএসএস ক্যানভাসকে ২ ডিপিআই-তে স্কেল করলে ৮০০ বাই ৬০০ বিটম্যাপে মোট ৪৮০০০০ পিক্সেল বরাদ্দ হয়, যা রেটিনা স্ক্রিনে নিখুঁত দাগ উপহার দেয়'
      }
    },
    {
      type: 'heading',
      id: 'canvas-setup-rules',
      text: {
        en: 'The Three Rules of Canvas Initialization',
        bn: 'ক্যানভাস সেটআপের ৩টি নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Whenever you initialize an HTML5 Canvas element in production codebases, follow these 3 foundational engineering rules:',
        bn: 'প্রোডাকশন অ্যাপ্লিকেশনে ক্যানভাস চালু করার সময় সবসময় নিচের ৩টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Never Set Canvas Dimensions via CSS Alone',
          def: {
            en: 'Setting canvas dimensions only in CSS stretches the default 300x150 bitmap, resulting in blurry graphics and distorted proportions',
            bn: 'কেবল সিএসএসে মাপ দিলে ডিফল্ট ৩০০x১৫০ পিক্সেলের বিটম্যাপটি টেনে বড় করা হয়, ফলে লেখা ও ছবি বিকৃত ও ঝাপসা দেখায়'
          }
        },
        {
          term: 'Rule 2: Scale the Drawing Context by DPR',
          def: {
            en: 'After sizing canvas.width and height to match DPR, invoke ctx.scale(dpr, dpr) so your drawing coordinates remain aligned with CSS pixels',
            bn: 'বিটম্যাপকে ডিপিআই দিয়ে গুণ করার পর ctx.scale(dpr, dpr) কল করুন যাতে সিএসএস পিক্সেলের সাথে ড্রয়িং কো-অর্ডিনেট হুবহু মিলে যায়'
          }
        },
        {
          term: 'Rule 3: Maintain Explicit State Cleanups',
          def: {
            en: 'Because canvas is a state machine, clear rectangular viewports via ctx.clearRect before every frame redraw',
            bn: 'ক্যানভাস একটি স্টেট মেশিন হওয়ায় প্রতিটি নতুন ফ্রেম আঁকার আগে clearRect দিয়ে পুরো পর্দা মুছে ফেলা আবশ্যক'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-retina-calc-ex',
      kind: 'mcq',
      topic: 'Calculating high-DPI canvas buffer resolution',
      question: {
        en: 'If a web application specifies a 400 by 300 pixel CSS layout for a canvas on a device with a devicePixelRatio of 2, what should the canvas.width attribute be set to?',
        bn: 'একটি ওয়েবসাইটে ৪০০ বাই ৩০০ সিএসএস মাপের ক্যানভাস ২ ডিপিআই (DPR) স্ক্রিনে দেখালে canvas.width অ্যাট্রিবিউটের মান কত নির্ধারণ করতে হবে?'
      },
      options: [
        {
          en: '800 pixels (400 * 2)',
          bn: '৮০০ পিক্সেল (৪০০ * ২)'
        },
        {
          en: '400 pixels',
          bn: '৪০০ পিক্সেল'
        },
        {
          en: '200 pixels',
          bn: '২০০ পিক্সেল'
        },
        {
          en: '1600 pixels',
          bn: '১৬০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply CSS width (400) by the device pixel ratio (2).',
        bn: 'সিএসএস প্রস্থ (৪০০) কে ডিভাইস পিক্সেল রেশিও (২) দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Setting canvas.width = 400 * 2 = 800 matches the physical hardware pixel density, eliminating blurry rendering on Retina displays.',
        bn: 'canvas.width = ৪০০ * ২ = ৮০০ নির্ধারণ করলে রেটিনা স্ক্রিনে ক্যানভাসের লেখা ও ছবি কাঁচের মতো স্বচ্ছ দেখায়।'
      }
    },
    {
      id: 'canvas-immediate-mode-ex',
      kind: 'mcq',
      topic: 'Characteristics of immediate-mode canvas rendering',
      question: {
        en: 'What happens to a rectangle drawn on a 2D canvas after ctx.fillRect(10, 10, 50, 50) finishes executing?',
        bn: 'ক্যানভাসে ctx.fillRect(10, 10, 50, 50) চালানোর পর আঁকা চারকোনাটির কী ঘটে?'
      },
      options: [
        {
          en: 'The pixels on the bitmap are colored immediately and the browser discards the rectangle object; to move it, you must redraw the whole frame',
          bn: 'বিটম্যাপের পিক্সেলগুলো সাথে সাথে রঙিন হয়ে যায় এবং ব্রাউজার অবজেক্টটি ভুলে যায়; এটি সরাতে হলে পুরো ফ্রেম পুনরায় আঁকতে হয়'
        },
        {
          en: 'A persistent HTML <div> tag is automatically created in the DOM tree',
          bn: 'ডম ট্রিতে স্বয়ংক্রিয়ভাবে একটি স্থায়ী <div> ট্যাগ তৈরি হয়'
        },
        {
          en: 'The rectangle automatically bounces around the screen',
          bn: 'চারকোনাটি নিজে থেকেই পর্দায় নাচানাচি শুরু করে'
        },
        {
          en: 'The computer prints the rectangle to paper',
          bn: 'কম্পিউটার চারকোনাটিকে কাগজে প্রিন্ট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Immediate mode writes pixels and forgets the command.',
        bn: 'ইমিডিয়েট মোডে পিক্সেল আঁকা হলে কমান্ড ভুলে যাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Unlike SVG or DOM elements, Canvas 2D is stateless immediate-mode rasterization. No interactive DOM nodes exist for drawn shapes.',
        bn: 'এসভিজির মতো কোনো ট্যাগ থাকে না; ক্যানভাস সরাসরি পিক্সেলে রঙ ঢেলে দিয়ে কমান্ডটি মুছে ফেলে।'
      }
    },
    {
      id: 'canvas-default-size-ex',
      kind: 'mcq',
      topic: 'Default dimensions of an unconfigured HTML5 canvas',
      question: {
        en: 'What are the default internal bitmap dimensions of an HTML <canvas> element if width and height attributes are omitted?',
        bn: 'যদি কোনো width ও height উল্লেখ না থাকে, তবে একটি এইচটিএমএল <canvas> উপাদানের ডিফল্ট অভ্যন্তরীণ বিটম্যাপ মাপ কত থাকে?'
      },
      options: [
        {
          en: '300 pixels wide by 150 pixels tall',
          bn: '৩০০ পিক্সেল প্রস্থ ও ১৫০ পিক্সেল উচ্চতা'
        },
        {
          en: '1920 pixels wide by 1080 pixels tall',
          bn: '১৯২০ পিক্সেল প্রস্থ ও ১০৮০ পিক্সেল উচ্চতা'
        },
        {
          en: '100 pixels wide by 100 pixels tall',
          bn: '১০০ পিক্সেল প্রস্থ ও ১০০ পিক্সেল উচ্চতা'
        },
        {
          en: '0 pixels by 0 pixels',
          bn: '০ পিক্সেল বাই ০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'The standard W3C default is 300 by 150 pixels.',
        bn: 'স্ট্যান্ডার্ড ডিফল্ট মাপ হলো ৩০০ বাই ১৫০ পিক্সেল।'
      },
      explanation: {
        en: 'Per the HTML specification, an unstyled <canvas> defaults to a 300x150 pixel bitmap. Custom dimensions should always be supplied.',
        bn: 'এইচটিএমএল স্পেসিফিকেশন অনুযায়ী ক্যানভাসের ডিফল্ট বিটম্যাপ সাইজ ৩০০x১৫০ পিক্সেল।'
      }
    }
  ],
  quiz: {
    id: 'quiz-fresco-charter',
    title: {
      en: 'HTML5 Canvas Fundamentals & High-DPI Scaling Quiz',
      bn: 'এইচটিএমএল-৫ ক্যানভাস ফান্ডামেন্টালস ও হাই-ডিপিআই স্কেলিং কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-css-stretch-bug',
        kind: 'mcq',
        topic: 'Why setting canvas size in CSS alone creates distortion',
        question: {
          en: 'What visual artifact occurs if a developer styles a canvas using CSS canvas { width: 600px; height: 300px; } without setting width and height attributes?',
          bn: 'যদি কোনো ডেভেলপার width ও height অ্যাট্রিবিউট না দিয়ে কেবল সিএসএসে canvas { width: 600px; height: 300px; } দেন, তবে কী সমস্যা হবে?'
        },
        options: [
          {
            en: 'The default 300x150 bitmap buffer is stretched over 600x300 CSS pixels, resulting in blurry, pixelated graphics and distorted circular paths',
            bn: 'ডিফল্ট ৩০০x১৫০ বিটম্যাপটি ৬০০x৩০০ মাপে প্রসারিত হয়ে ঝাপসা ও ফেটে যায় এবং বৃত্ত আঁকলে ডিম্বাকৃতি দেখায়'
          },
          {
            en: 'The web browser crashes with a memory leak error',
            bn: 'মেমোরি লিক হয়ে ব্রাউজার ক্র্যাশ করে'
          },
          {
            en: 'The canvas converts all colors into shades of green',
            bn: 'ক্যানভাস সব রঙকে সবুজ রঙে বদলে ফেলে'
          },
          {
            en: 'The computer screen turns off completely',
            bn: 'কম্পিউটার স্ক্রিন সম্পূর্ণ বন্ধ হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stretching a low-resolution bitmap over a larger layout area.',
          bn: 'কম রেজোলিউশনের ছবি টেনে বড় করলে ঝাপসা হওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'CSS width and height define the display box. Without matching canvas attributes, the browser stretches the default 300x150 bitmap like a blurry photo.',
          bn: 'সিএসএস কেবল ফ্রেমের আকার বাড়ায়; ভেতরের বিটম্যাপ বড় না করায় ছোট ছবি বড় ফ্রেমে ঝাপসা দেখায়।'
        }
      },
      {
        id: 'q-canvas-getcontext-fallback',
        kind: 'mcq',
        topic: 'Checking context availability in browsers',
        question: {
          en: 'How does JavaScript obtain the 2D drawing engine context from a canvas DOM element?',
          bn: 'জাভাস্ক্রিপ্টে একটি ক্যানভাস উপাদান থেকে ২ডি ড্রয়িং ইঞ্জিন অবজেক্ট কীভাবে সংগ্রহ করা হয়?'
        },
        options: [
          {
            en: 'const ctx = canvasElement.getContext("2d");',
            bn: 'const ctx = canvasElement.getContext("2d");'
          },
          {
            en: 'const ctx = new Canvas2D();',
            bn: 'const ctx = new Canvas2D();'
          },
          {
            en: 'const ctx = canvasElement.createGraphics();',
            bn: 'const ctx = canvasElement.createGraphics();'
          },
          {
            en: 'const ctx = document.render2D();',
            bn: 'const ctx = document.render2D();'
          }
        ],
        answer: 0,
        hint: {
          en: 'The standard method is getContext("2d").',
          bn: 'getContext("2d") মেথডটির কথা ভাবুন।'
        },
        explanation: {
          en: 'canvas.getContext("2d") initializes and returns the CanvasRenderingContext2D instance for rendering.',
          bn: 'getContext("2d") মেথড ক্যানভাসে ছবি ও রেখা আঁকার প্রয়োজনীয় সব টুল সরবরাহ করে।'
        }
      },
      {
        id: 'q-canvas-total-pixels-calc',
        kind: 'mcq',
        topic: 'Calculating GPU buffer allocation in the simulation',
        question: {
          en: 'In our Retina scaling simulation, how many physical pixels were allocated in the GPU buffer for the 800 by 600 calibrated canvas?',
          bn: 'আমাদের রেটিনা স্কেলিং সিমুলেশনে ৮০০ বাই ৬০০ মাপের ক্যানভাসের জন্য জিপিইউ বাফারে মোট কতটি ফিজিক্যাল পিক্সেল বরাদ্দ হয়েছিল?'
        },
        options: [
          {
            en: '480000 physical pixels (800 * 600)',
            bn: '৪৮০০০০ ফিজিক্যাল পিক্সেল (৮০০ * ৬০০)'
          },
          {
            en: '120000 pixels',
            bn: '১২০০০০ পিক্সেল'
          },
          {
            en: '2400 pixels',
            bn: '২৪০০ পিক্সেল'
          },
          {
            en: '1000000 pixels',
            bn: '১০০০০০০ পিক্সেল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiply 800 by 600.',
          bn: '৮০০ কে ৬০০ দিয়ে গুণ করুন।'
        },
        explanation: {
          en: '800 pixels width times 600 pixels height equals 480000 pixels, quad the pixel density of standard displays.',
          bn: '৮০০ কে ৬০০ দিয়ে গুণ করলে মোট ৪৮০০০০ পিক্সেল পাওয়া যায়, যা সাধারণ ডিসপ্লের চেয়ে ৪ গুণ বেশি।'
        }
      },
      {
        id: 'q-canvas-clearrect-function',
        kind: 'mcq',
        topic: 'Erasing canvas pixels with clearRect',
        question: {
          en: 'What does the method ctx.clearRect(0, 0, canvas.width, canvas.height) achieve before drawing a new frame?',
          bn: 'নতুন ফ্রেম আঁকার আগে ctx.clearRect(0, 0, canvas.width, canvas.height) মেথডটির কাজ কী?'
        },
        options: [
          {
            en: 'It resets every pixel in the specified rectangular boundary to transparent black, erasing previous frame drawings',
            bn: 'এটি ক্যানভাসের সমস্ত পিক্সেলকে সম্পূর্ণ স্বচ্ছ কালো রঙে ফিরিয়ে দেয়, ফলে আগের ফ্রেমের সব আঁকা মুছে পরিষ্কার হয়ে যায়'
          },
          {
            en: 'It permanently removes the canvas element from the web page',
            bn: 'এটি পেজ থেকে ক্যানভাস ট্যাগ চিরতরে মুছে ফেলে'
          },
          {
            en: 'It fills the canvas with opaque white paint',
            bn: 'এটি ক্যানভাসে সাদা রঙ লেপে দেয়'
          },
          {
            en: 'It pauses the computer processor for 1 second',
            bn: 'এটি ১ সেকেন্ডের জন্য কম্পিউটার প্রসেসর থামিয়ে রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Resets pixels to fully transparent black.',
          bn: 'সব পিক্সেল স্বচ্ছ করে আগের ড্রয়িং মোছার কথা ভাবুন।'
        },
        explanation: {
          en: 'clearRect sets pixel channels to transparent black, wiping away past visual states to prepare the surface for new animation frames.',
          bn: 'clearRect সমস্ত পিক্সেল শূন্য বা স্বচ্ছ করে ফেলে, যাতে নতুন ফ্রেমে কোনো দাগের পুনরাবৃত্তি না থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-brush-ledger',
    tech: 'canvas',
    title: {
      en: 'Vector Paths, Subpaths, Arcs & Bezier Curves',
      bn: 'ভেক্টর পাথ, সাব-পাথ, বৃত্তচাপ ও বেজিয়ার কার্ভ'
    }
  }
};
