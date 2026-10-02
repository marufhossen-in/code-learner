import type { Hub } from '../../lib/types';

import { frescoCharterLesson } from './lessons/the-fresco-charter';
import { brushLedgerLesson } from './lessons/the-brush-ledger';
import { plasterRigLesson } from './lessons/the-plaster-rig';
import { pigmentStoreLesson } from './lessons/the-pigment-store';
import { frescoFramesLesson } from './lessons/the-fresco-frames';
import { pixelVaultLesson } from './lessons/the-pixel-vault';
import { loomOfTouchLesson } from './lessons/the-loom-of-touch';
import { galleryRehearsalLesson } from './lessons/the-gallery-rehearsal';

export const canvasHub: Hub = {
  slug: 'canvas',
  name: 'Canvas',
  icon: '🖌️',
  tagline: {
    en: 'Master the HTML5 2D Canvas API: immediate-mode rendering, paths, transformations, pixel buffers, animation loops, and interactive graphics.',
    bn: 'এইচটিএমএল-৫ ২ডি ক্যানভাস এপিআই আয়ত্ত করুন: ইমিডিয়েট-মোড রেন্ডারিং, পাথ, ট্রান্সফর্মেশন, পিক্সেল বাফার ও ইন্টারেক্টিভ গ্রাফিক্স।'
  },
  intro: {
    en: 'The HTML5 Canvas 2D API provides an immediate-mode bitmap drawing surface inside the browser. Unlike the retained-mode DOM or SVG where elements exist as stateful nodes, Canvas treats graphics as direct raster operations on a raw pixel grid. This track covers high-DPI retina display scaling, procedural geometry, coordinate transformations, gradient shading, 60 FPS animation loops, direct pixel manipulation with ImageData buffers, and pointer hit-testing.',
    bn: 'এইচটিএমএল-৫ ক্যানভাস ২ডি এপিআই ব্রাউজারের ভেতরে সরাসরি পিক্সেল আঁকার জন্য একটি উচ্চগতির ইমিডিয়েট-মোড বিটম্যাপ ক্যানভাস প্রদান করে। সাধারণ ডম (DOM) বা এসভিজির মতো প্রতিটি উপাদানের আলাদা ট্যাগ না রেখে ক্যানভাস সরাসরি পিক্সেলে ছবি আঁকে। এই ট্র্যাকে রেটিনা স্ক্রিনের হাই-ডিপিআই স্কেলিং, জ্যামিতিক পাথ, স্থানাঙ্ক রূপান্তর, ৬০ এফপিএস অ্যানিমেশন লুপ, ইমেজ-ডাটা দিয়ে পিক্সেল ম্যানিপুলেশন এবং মাউস ইন্টারঅ্যাকশন শেখানো হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Canvas Fundamentals & Vector Geometry',
        bn: 'ধাপ ১ — ক্যানভাস ফান্ডামেন্টালস ও ভেক্টর জ্যামিতি'
      },
      items: [
        {
          en: 'Immediate-mode rendering, bitmap sizing vs CSS dimensions, and Retina high-DPI scaling (lesson 1)',
          bn: 'ইমিডিয়েট-মোড রেন্ডারিং, বিটম্যাপ সাইজ বনাম সিএসএস সাইজ ও রেটিনা হাই-ডিপিআই স্কেলিং (পাঠ ১)'
        },
        {
          en: 'Vector paths, subpaths, lines, arcs, curves, and stroke-fill mechanics (lesson 2)',
          bn: 'ভেক্টর পাথ, লাইন, বৃত্তাকার বৃত্তচাপ, বক্ররেখা এবং স্ট্রোক ও ফিলের কৌশল (পাঠ ২)'
        },
        {
          en: 'Coordinate transformations: save/restore stack, translate, rotate, scale, and clipping (lesson 3)',
          bn: 'স্থানাঙ্ক রূপান্তর: সেভ/রিস্টোর স্ট্যাক, ট্রানস্লেট, রোটেট, স্কেল ও ক্লিপিং পাথ (পাঠ ৩)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Color Compositing, Animation & Pixels',
        bn: 'ধাপ ২ — কালার কম্পোজিটিং, অ্যানিমেশন ও পিক্সেল'
      },
      items: [
        {
          en: 'Linear and radial gradients, pattern fills, shadows, and global composite operations (lesson 4)',
          bn: 'লিনিয়ার ও রেডিয়াল গ্রেডিয়েন্ট, প্যাটার্ন, শ্যাডো এবং গ্লোবাল কম্পোজিট অপারেশন (পাঠ ৪)'
        },
        {
          en: 'Animation loops with requestAnimationFrame, delta time physics, and offscreen canvas caching (lesson 5)',
          bn: 'রিকোয়েস্টঅ্যানিমেশনফ্রেম দিয়ে অ্যানিমেশন লুপ, ডেল্টা টাইম এবং অফস্ক্রিন ক্যানভাস ক্যাশিং (পাঠ ৫)'
        },
        {
          en: 'Direct pixel manipulation via ImageData buffers, custom color filters, and CORS security (lesson 6)',
          bn: 'ইমেজ-ডাটা বাফার দিয়ে সরাসরি পিক্সেল রূপান্তর, কাস্টম ফিল্টার ও নিরাপত্তা নিয়ম (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Interaction, Gestures & Production Architecture',
        bn: 'ধাপ ৩ — ইন্টারঅ্যাকশন, জেসচার ও প্রোডাকশন আর্কিটেকচার'
      },
      items: [
        {
          en: 'Pointer event normalization, coordinate mapping, and mathematical hit-testing algorithms (lesson 7)',
          bn: 'পয়েন্টার ইভেন্ট নরমালাইজেশন, স্থানাঙ্ক ম্যাপিং ও গাণিতিক হিট-টেস্টিং অ্যালগরিদম (পাঠ ৭)'
        },
        {
          en: 'Production drawing studio architecture: undo/redo action stacks, pan/zoom viewports, and image export (lesson 8)',
          bn: 'প্রোডাকশন ড্রয়িং স্টুডিও আর্কিটেকচার: আনডু/রিডু স্ট্যাক, প্যান/জুম ভিউপোর্ট ও ছবি এক্সপোর্ট (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    frescoCharterLesson,
    brushLedgerLesson,
    plasterRigLesson,
    pigmentStoreLesson,
    frescoFramesLesson,
    pixelVaultLesson,
    loomOfTouchLesson,
    galleryRehearsalLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Performance 2D Particle Simulation',
        bn: 'উচ্চগতির ২ডি পার্টিকেল সিমুলেশন'
      },
      brief: {
        en: 'Build a smooth 60 FPS particle simulation rendering 5,000 interactive particles using requestAnimationFrame, delta time physics integration, velocity damping, and offscreen canvas pre-rendering.',
        bn: 'রিকোয়েস্টঅ্যানিমেশনফ্রেম এবং ডেল্টা টাইম ব্যবহার করে ৬০ এফপিএসে চলা একটি ৫,০০০ পার্টিকেলের মসৃণ ফিজিক্স সিমুলেশন তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Interactive Vector Drawing & Painting Studio',
        bn: 'ইন্টারঅ্যাকটিভ ভেক্টর ড্রয়িং ও পেইন্টিং স্টুডিও'
      },
      brief: {
        en: 'Architect a full-featured web drawing canvas featuring smooth bezier stroke interpolation, color picker with opacity sliders, undo/redo history stacks, pan-and-zoom infinite viewports, and PNG/JPEG blob export.',
        bn: 'মসৃণ তুলির আঁচড়, রঙ বাছাই, আনডু/রিডু ইতিহাস স্ট্যাক, প্যান ও জুম এবং পিএনজি এক্সপোর্ট সুবিধাসহ একটি পূর্ণাঙ্গ ড্রয়িং অ্যাপ তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always scale the canvas bitmap resolution by window.devicePixelRatio and set matching CSS width/height to prevent blurry graphics on Retina screens.',
      bn: 'রেটিনা স্ক্রিনে ছবি ঝাপসা হওয়া ঠেকাতে ক্যানভাস বিটম্যাপের মাপকে devicePixelRatio দিয়ে গুণ করুন এবং সিএসএস মাপ ঠিক রাখুন।'
    },
    {
      en: 'Pair every beginPath() call with clear intent to prevent previous subpaths from being re-stroked cumulatively in animation loops.',
      bn: 'অ্যানিমেশন লুপে অপ্রয়োজনীয় পুরাতন লাইন বারবার আঁকা ঠেকাতে প্রতিটি নতুন চিত্রে অবশ্যই beginPath() ব্যবহার করুন।'
    },
    {
      en: 'Maintain transformation state hygiene by wrapping translate, rotate, and scale operations in matching ctx.save() and ctx.restore() calls.',
      bn: 'স্থানাঙ্ক রূপান্তরের সময় ক্যানভাস নষ্ট হওয়া এড়াতে translate বা rotate অপারেশনের আগে save() এবং পরে restore() কল করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between immediate-mode graphics (Canvas) and retained-mode graphics (SVG/DOM)?',
        bn: 'ইমিডিয়েট-মোড গ্রাফিক্স (ক্যানভাস) এবং রিটেইন্ড-মোড গ্রাফিক্সের (এসভিজি/ডম) মধ্যে মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'In retained mode (like SVG or HTML DOM), the browser maintains an in-memory scene graph of elements. Each circle or rectangle persists as an object that handles its own events and styles. In immediate mode (Canvas 2D), the browser provides only a raw raster pixel buffer. When you call fillRect or stroke, the pixels are modified immediately and the command is forgotten. To move an object, the developer must clear the canvas and redraw the entire scene frame by frame.',
        bn: 'রিটেইন্ড মোডে (যেমন এসভিজি বা ডম) ব্রাউজার প্রতিটি উপাদানের জন্য আলাদা নোড বা অবজেক্ট মেমোরিতে ধরে রাখে। কিন্তু ইমিডিয়েট মোডে (ক্যানভাস) ব্রাউজার কেবল পিক্সেলের একটি খালি ক্যানভাস দেয়। একবার রঙ আঁকার পর ব্রাউজার ভুলে যায় সেখানে কী ছিল। কোনো কিছু নাড়াতে হলে প্রতি ফ্রেমে পুরো ক্যানভাস মুছে নতুন করে আঁকতে হয়।'
      }
    },
    {
      q: {
        en: 'Why do HTML5 Canvas elements appear blurry on high-resolution displays, and how do you resolve it mathematically?',
        bn: 'হাই-রেজোলিউশন রেটিনা ডিসপ্লেতে ক্যানভাসের ছবি কেন ঝাপসা দেখায় এবং গাণিতিকভাবে কীভাবে এটি সমাধান করা যায়?'
      },
      a: {
        en: 'Canvas has two distinct dimension sets: internal bitmap resolution (canvas.width and canvas.height attributes) and visual display size (CSS width and height). On Retina displays where window.devicePixelRatio is 2, a 400x300 canvas stretched over 400x300 CSS pixels maps 1 canvas pixel across 4 physical display pixels, producing blur. The solution multiplies canvas.width and height by devicePixelRatio (e.g., 800x600), sets CSS style to 400x300, and scales the context using ctx.scale(dpr, dpr).',
        bn: 'ক্যানভাসের দুটি মাপ থাকে: অভ্যন্তরীণ বিটম্যাপ মাপ এবং সিএসএস দৃশ্যমান মাপ। রেটিনা স্ক্রিনে devicePixelRatio মান ২ হওয়ায় সাধারণ বিটম্যাপের ১টি পিক্সেল পর্দার ৪টি ফিজিক্যাল পিক্সেলে প্রসারিত হয়ে ঝাপসা হয়। সমাধান হলো বিটম্যাপের মাপকে ২ দিয়ে গুণ করে ৮০০x৬০০ করা, সিএসএস মাপ ৪০০x৩০০ রাখা এবং ctx.scale(২, ২) দিয়ে ড্রয়িং স্কেল ঠিক করা।'
      }
    },
    {
      q: {
        en: 'How does requestAnimationFrame ensure smooth 60 FPS animations compared to setInterval or setTimeout?',
        bn: 'setInterval বা setTimeout-এর তুলনায় requestAnimationFrame কীভাবে ৬০ এফপিএসের মসৃণ অ্যানিমেশন নিশ্চিত করে?'
      },
      a: {
        en: 'requestAnimationFrame synchronizes callbacks directly with the browser hardware display refresh cycle (vsync, typically 60 Hz or 120 Hz). It guarantees calls happen at the start of the paint cycle, preventing frame tearing and dropped frames. Crucially, browsers pause requestAnimationFrame loops when tabs are backgrounded or minimized, conserving CPU and battery life, whereas setInterval continues firing blindly.',
        bn: 'requestAnimationFrame সরাসরি মনিটরের রিফ্রেশ রেটের (সাধারণত ৬০ বা ১২০ হার্টজ) সাথে তাল মিলিয়ে ড্রয়িং চালায়। এটি ফ্রেম ড্রপ বা স্ক্রিন টিয়ারিং রোধ করে। সবচেয়ে বড় সুবিধা হলো ব্যবহারকারী ব্রাউজার ট্যাব মিনিমাইজ করলে বা অন্য ট্যাবে গেলে এটি স্বয়ংক্রিয়ভাবে থেমে থাকে, ফলে সিপিইউ ও ব্যাটারি বাঁচে।'
      }
    },
    {
      q: {
        en: 'What causes a "tainted canvas" security error when invoking getImageData or toDataURL, and how do you prevent it?',
        bn: 'getImageData বা toDataURL চালানোর সময় "Tainted Canvas" সিকিউরিটি এরর কেন আসে এবং এটি কীভাবে দূর করা যায়?'
      },
      a: {
        en: 'A canvas becomes tainted if an image originating from a different domain (cross-origin) is drawn onto it without explicit CORS permissions. Once tainted, the browser forbids direct pixel reads (getImageData, toDataURL) to prevent malicious scripts from stealing sensitive image data from other origins. To fix this, the remote server must serve the Access-Control-Allow-Origin header, and the client must set img.crossOrigin = "anonymous" prior to loading the image.',
        bn: 'অন্য কোনো ডোমেইন থেকে অনুমতি (CORS) ছাড়া ছবি এনে ক্যানভাসে আঁকলে ক্যানভাসটি "দূষিত" বা tainted হয়ে যায়। তখন ব্যবহারকারীর গোপন তথ্য চুরি ঠেকাতে ব্রাউজার পিক্সেল পড়ার মেথডগুলো বন্ধ করে দেয়। এটি সমাধানের জন্য রিমোট সার্ভারে Access-Control-Allow-Origin থাকতে হয় এবং ছবি লোডের আগে img.crossOrigin = "anonymous" নির্ধারণ করতে হয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Figma & Miro Visual Canvas Engines: Web-based vector design platforms employing immediate-mode canvas renderers for multi-million node interactive diagramming.',
      bn: 'ফিগমা ও মিরোর মতো ডিজাইন প্ল্যাটফর্ম: লাখ লাখ উপাদানের জটিল ডায়াগ্রাম উচ্চগতিতে আঁকার জন্য ক্যানভাস ব্যবহার করে।'
    },
    {
      en: 'Medical Imaging & DICOM Viewers: High-precision radiological viewers utilizing raw ImageData pixel buffers to apply real-time contrast, windowing, and edge detection filters.',
      bn: 'মেডিকেল ইমেজিং ও এক্স-রে ভিউয়ার: পিক্সেল বাফারের সাহায্যে এক্স-রে ও এমআরআই ছবিতে তাৎক্ষণিক কনট্রাস্ট ও ফিল্টার প্রয়োগ।'
    },
    {
      en: 'Browser-Based Casual Games: 2D platformers and physics puzzles using delta-time animation loops, collision detection, and sprite sheet blitting.',
      bn: 'ব্রাউজার গেম ইঞ্জিন: ৬০ এফপিএস অ্যানিমেশন লুপ ও কলিশন ডিটেকশন ব্যবহার করে তৈরি ২ডি আর্কেড গেম।'
    },
    {
      en: 'Dynamic Charting Libraries (Chart.js): High-performance data visualization engines rendering thousands of animated line, bar, and pie chart series.',
      bn: 'ডায়নামিক চার্ট লাইব্রেরি (Chart.js): হাজার হাজার ডেটা পয়েন্ট দিয়ে তৈরি অ্যানিমেটেড লাইন, বার ও পাই চার্ট।'
    }
  ]
};
