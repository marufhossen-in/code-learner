import type { Lesson } from '../../../lib/types';

export const pigmentStoreLesson: Lesson = {
  slug: 'the-pigment-store',
  tech: 'canvas',
  title: {
    en: 'Gradients, Patterns, Shadows & Compositing',
    bn: 'গ্রেডিয়েন্ট, প্যাটার্ন, শ্যাডো ও কম্পোজিটিং'
  },
  summary: {
    en: 'Styling canvas surfaces extends far beyond flat solid fills. Linear and radial gradients produce smooth optical transitions between color stops. A linear gradient interpolates RGBA color values from start to finish coordinates: for instance, moving between value 0 (pure black) and 255 (pure white) with a color stop at position 0.5 interpolates to channel value 128 (mid-tone gray). Canvas patterns repeat external images or offscreen canvases across shapes using createPattern. Drop shadows add visual elevation via shadowBlur and pixel offsets. Finally, ctx.globalCompositeOperation governs how incoming pixels blend with existing pixels on the canvas buffer, enabling erasing masks with destination-out or additive glows with screen. This lesson teaches gradients, repeating textures, blur shadows, and blend modes.',
    bn: 'ক্যানভাসে শুধু এক রঙের সলিড ফিল ছাড়াও চমৎকার গ্রেডিয়েন্ট ও টেক্সচার আঁকা যায়। লিনিয়ার ও রেডিয়াল গ্রেডিয়েন্ট বিভিন্ন কালার স্টপের মধ্যে মসৃণ রূপান্তর তৈরি করে। একটি লিনিয়ার গ্রেডিয়েন্ট শুরুর বিন্দু থেকে শেষ বিন্দু পর্যন্ত রঙের মান ইন্টারপোলেট করে: যেমন চ্যানেল মান ০ (কালো) থেকে ২৫৫ (সাদা) এর মধ্যে ০.৫ অবস্থানে কালার স্টপ দিলে মধ্যবর্তী মান হয় ১২৮ (ধূসর)। createPattern দিয়ে ছবি বা অন্য ক্যানভাসকে প্যাটার্ন আকারে পুনরাবৃত্তি করা যায়। শ্যাডো প্রপার্টি দিয়ে বস্তুর নিচে ছায়া ফেলা যায়। সবশেষে ctx.globalCompositeOperation দিয়ে নতুন ও পুরোনো পিক্সেলের মিশ্রণ নির্ধারণ করা হয়, যার মাধ্যমে destination-out দিয়ে ইরেজার বা স্ক্র্যাচ কার্ড এবং screen দিয়ে উজ্জ্বল আলোর এফেক্ট তৈরি করা যায়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Shaders and Pixel Blending in 2D',
        bn: 'মূল ধারণা: ২ডি ক্যানভাসে শেডিং ও পিক্সেল ব্লেন্ডিং'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'In high-performance 2D rendering, visual depth requires sophisticated surface materials. Rather than assigning a simple hex string to fillStyle, you can instantiate gradient objects, pattern tiles, and shadow matrices that compute pixel colors mathematically during rasterization.',
        bn: 'উচ্চমানের ২ডি গ্রাফিক্স তৈরিতে সাধারণ একরঙা কালারের বদলে উন্নত শেডিং ও টেক্সচার ব্যবহৃত হয়। fillStyle-এ কেবল হেক্স কোড লেখার বদলে গ্রেডিয়েন্ট অবজেক্ট, রিপিটিং প্যাটার্ন এবং ড্রপ শ্যাডো যুক্ত করে বাস্তবসম্মত রূপ দেওয়া যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Color Stops (addColorStop)',
          def: {
            en: 'Points along a gradient vector from 0.0 to 1.0 that specify exact color and alpha transitions',
            bn: 'গ্রেডিয়েন্ট রেখার ০.০ থেকে ১.০ পর্যন্ত বিভিন্ন বিন্দু যেখানে রঙ ও ট্রান্সপারেন্সি নির্ধারণ করা হয়'
          }
        },
        {
          term: 'Pattern Repetition (createPattern)',
          def: {
            en: 'Tiling an image, video, or second canvas across a fill surface with repetition modes (repeat, repeat-x, repeat-y, no-repeat)',
            bn: 'যেকোনো ছবি বা অফস্ক্রিন ক্যানভাসকে টালির মতো চারদিকে পুনরাবৃত্তি করে পুরো আকারে ছড়িয়ে দেওয়া'
          }
        },
        {
          term: 'Drop Shadows (shadowBlur & Offsets)',
          def: {
            en: 'Gaussian blur shadows simulated via shadowColor, shadowBlur, shadowOffsetX, and shadowOffsetY',
            bn: 'বস্তুর নিচে কৃত্রিম ছায়া ফেলার প্যারামিটার যা দূরত্ব এবং ব্লার নিয়ন্ত্রণ করে'
          }
        },
        {
          term: 'Porter-Duff Compositing Modes',
          def: {
            en: 'Mathematical formulas governing how source pixels blend with existing destination pixels (e.g. source-over, destination-out)',
            bn: 'নতুন আঁকা পিক্সেলের সাথে ক্যানভাসে আগে থেকে থাকা পিক্সেলের মিশ্রণের গাণিতিক নিয়ম'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'compositing-modes-table',
      text: {
        en: 'Essential Canvas Global Composite Operations',
        bn: 'প্রধান প্রধান গ্লোবাল কম্পোজিট অপারেশনসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Common Values for ctx.globalCompositeOperation and Their Blending Effects',
        bn: 'ctx.globalCompositeOperation-এর বিভিন্ন মান এবং তাদের প্রভাব'
      },
      head: [
        { en: 'Composite Mode', bn: 'কম্পোজিট মোড' },
        { en: 'Mathematical Rule', bn: 'গাণিতিক নিয়ম' },
        { en: 'Common Engineering Application', bn: 'বাস্তব ব্যবহার' }
      ],
      rows: [
        [
          { en: 'source-over (Default)', bn: 'source-over (ডিফল্ট)' },
          { en: 'New shape paints directly on top of existing pixels', bn: 'নতুন ড্রয়িং আগের পিক্সেলের ওপরে স্বাভাবিকভাবে বসে' },
          { en: 'Standard 2D layering and UI rendering', bn: 'সাধারণ ড্রয়িং ও লেয়ার ব্যবস্থাপনা' }
        ],
        [
          { en: 'destination-out', bn: 'destination-out' },
          { en: 'Existing pixels are erased wherever the new shape overlaps', bn: 'নতুন ড্রয়িং যেখানে পড়ে সেখানকার পুরোনো পিক্সেল মুছে ফাঁকা হয়' },
          { en: 'Digital eraser tools, scratch cards, and fog-of-war masks', bn: 'ডিজিটাল ইরেজার টুল, স্ক্র্যাচ কার্ড ও যুদ্ধের কুয়াশা মাস্ক' }
        ],
        [
          { en: 'source-in', bn: 'source-in' },
          { en: 'New shape is visible only where existing pixels already exist', bn: 'কেবলমাত্র পুরোনো পিক্সেলের সীমানার ভেতর নতুন ড্রয়িং ফুটে ওঠে' },
          { en: 'Clipping texture patterns to existing text or silhouettes', bn: 'আগে থেকে থাকা লেখার ভেতরে ছবির টেক্সচার মাস্ক করা' }
        ],
        [
          { en: 'lighter', bn: 'lighter' },
          { en: 'Source and destination color channel values are added together', bn: 'নতুন ও পুরোনো রঙের চ্যানেলগুলো যোগ হয়ে আলো বাড়ে' },
          { en: 'Particle explosions, neon glows, and fire magic effects', bn: 'পার্টিকেল বিস্ফোরণ, আগুনের শিখা এবং নিয়ন লাইট এফেক্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Linear Gradient Color Stop Interpolator',
        bn: 'চালনাযোগ্য সিমুলেশন: লিনিয়ার গ্রেডিয়েন্ট কালার স্টপ গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates linear color interpolation between black (value 0) and white (value 255) at the 50 percent midpoint position (offset 0.5), yielding mid-tone gray (channel value 128):',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি কালো (মান ০) এবং সাদা (মান ২৫৫)-এর মধ্যবর্তী ৫০ শতাংশ অবস্থানে (অফসেট ০.৫) লিনিয়ার ইন্টারপোলেশন হিসাব করে ১২৮ ধূসর মান প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'canvas-gradient-sim',
      lang: 'javascript',
      code: `// Canvas 2D Linear Gradient Stop Interpolator Engine
const startVal = 0;   // Pure black channel intensity (offset 0.0)
const endVal = 255;   // Pure white channel intensity (offset 1.0)
const position = 0.5; // Color stop placed at the exact 50% midpoint

// Linear interpolation formula: Lerp(a, b, t) = a + (b - a) * t
const interpolated = Math.round(startVal + (endVal - startVal) * position);

console.log('Gradient start channel value:', startVal);
// -> Gradient start channel value: 0

console.log('Gradient end channel value:', endVal);
// -> Gradient end channel value: 255

console.log('Normalized color stop position offset:', position);
// -> Normalized color stop position offset: 0.5

console.log('Computed interpolated channel value:', interpolated);
// -> Computed interpolated channel value: 128`,
      caption: {
        en: 'Figure 1: Placing a color stop at normalized position 0.5 between 0 and 255 produces an interpolated channel value of 128',
        bn: 'চিত্র ১: ০ এবং ২৫৫ এর ঠিক মাঝামাঝি ০.৫ অবস্থানে কালার স্টপ দিলে ১২৮ রঙের ইন্টারপোলেটেড মান পাওয়া যায়'
      }
    },
    {
      type: 'heading',
      id: 'shadow-performance-guide',
      text: {
        en: 'Shadow Optimization & Memory Budgeting',
        bn: 'শ্যাডো অপ্টিমাইজেশন ও মেমোরি বাজেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rendering drop shadows on canvas involves CPU or GPU convolution blur passes. If you apply high shadowBlur values (such as blur 50) across hundreds of moving particles every frame, the framerate will drop precipitously. Always reset shadowColor to transparent or clear shadowBlur to zero when drawing non-shadowed shapes.',
        bn: 'ক্যানভাসে ড্রপ শ্যাডো তৈরি করতে ভারী ব্লার ক্যালকুলেশন চালাতে হয়। আপনি যদি প্রতি ফ্রেমে শত শত কণার ওপর বড় শ্যাডো ব্লার ব্যবহার করেন, তবে সাইট মারাত্মক স্লো হয়ে যাবে। ছায়াযুক্ত বস্তু আঁকার পর সবসময় shadowBlur শূন্য করে দিন অথবা shadowColor ট্রান্সপারেন্ট করে দিন যাতে অপ্রয়োজনীয় ব্লার না ঘটে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'createRadialGradient(x0, y0, r0, x1, y1, r1)',
          def: {
            en: 'Constructs an outward-radiating circular gradient defined by two concentric or offset circles',
            bn: 'দুটি বৃত্তের ব্যাসার্ধের ওপর ভিত্তি করে চারদিকে ছড়িয়ে পড়া রেডিয়াল গ্রেডিয়েন্ট তৈরি করে'
          }
        },
        {
          term: 'createConicGradient(startAngle, x, y)',
          def: {
            en: 'Generates a sweep gradient rotating around a center point, ideal for color wheels and radar sweeps',
            bn: 'কেন্দ্রবিন্দুকে ঘিরে ঘড়ির কাটার মতো ঘূর্ণায়মান কনিক গ্রেডিয়েন্ট যা কালার হুইলে ব্যবহৃত হয়'
          }
        },
        {
          term: 'Eraser Mode (destination-out)',
          def: {
            en: 'The compositing mode that cuts transparent holes through existing drawings wherever the brush moves',
            bn: 'ইরেজার মোড যা ব্রাশ চালানোর সাথে সাথে আগে আঁকা পিক্সেলগুলোকে সম্পূর্ণ মুছে ট্রান্সপারেন্ট বানায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-lerp-stop-calc-ex',
      kind: 'mcq',
      topic: 'Interpolated channel value at gradient stop 0.5',
      question: {
        en: 'According to our color interpolation simulation, what channel value results when a color stop is placed at position 0.5 between 0 and 255?',
        bn: 'আমাদের কালার ইন্টারপোলেশন সিমুলেশন অনুযায়ী ০ এবং ২৫৫ এর ঠিক মাঝামাঝি ০.৫ অবস্থানে কালার স্টপ বসালে কত মান পাওয়া যায়?'
      },
      options: [
        {
          en: '128 (exact mid-point rounded integer)',
          bn: '১২৮ (ঠিক মাঝামাঝি পূর্ণসংখ্যা)'
        },
        {
          en: '255',
          bn: '২৫৫'
        },
        {
          en: '0',
          bn: '০'
        },
        {
          en: '64',
          bn: '৬৪'
        }
      ],
      answer: 0,
      hint: {
        en: 'Halfway between 0 and 255 is 127.5, which rounds to 128.',
        bn: '০ এবং ২৫৫ এর মাঝামাঝি ১২৭.৫, যা রাউন্ড করলে ১২৮ হয়।'
      },
      explanation: {
        en: 'Linear interpolation between zero and 255 at midpoint 0.5 computes 0 + (255 - 0) * 0.5 = 127.5, which rounds to integer 128.',
        bn: '০ এবং ২৫৫ এর ঠিক মাঝামাঝি ০.৫ অবস্থানে লিনিয়ার ইন্টারপোলেশন হিসাব করলে ০ + (২৫৫ - ০) * ০.৫ = ১২৭.৫ পাওয়া যায়, যার নিকটবর্তী পূর্ণসংখ্যা হলো ১২৮।'
      }
    },
    {
      id: 'canvas-dest-out-ex',
      kind: 'mcq',
      topic: 'Using destination-out to build digital eraser tools',
      question: {
        en: 'Why is ctx.globalCompositeOperation = "destination-out" used when programming an eraser tool in a canvas paint app?',
        bn: 'ক্যানভাস পেইন্ট অ্যাপে ইরেজার বা রাবার টুল তৈরি করতে কেন ctx.globalCompositeOperation = "destination-out" ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'It carves transparent holes through the canvas buffer, wiping away existing pixels wherever the brush strokes overlap',
          bn: 'এটি ক্যানভাস থেকে পুরোনো পিক্সেল সম্পূর্ণ মুছে ট্রান্সপারেন্ট ফাঁকা জায়গা তৈরি করে'
        },
        {
          en: 'It paints white paint that covers darker colors',
          bn: 'এটি কালো রঙের ওপর কেবল সাদা রঙ লেপে দেয়'
        },
        {
          en: 'It turns the entire canvas upside down',
          bn: 'এটি পুরো ক্যানভাসকে উল্টে দেয়'
        },
        {
          en: 'It sends the canvas image to an external FTP server',
          bn: 'এটি ছবিকে অন্য কোনো সার্ভারে পাঠিয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Erases existing pixels down to transparency.',
        bn: 'আগের পিক্সেল সম্পূর্ণ মুছে স্বচ্ছ করে ফেলার কথা ভাবুন।'
      },
      explanation: {
        en: 'destination-out deletes existing canvas pixels under the path outline, exposing whatever HTML background sits underneath.',
        bn: 'destination-out মোডে আঁকলে তা আগের পিক্সেলগুলোকে মুছে ট্রান্সপারেন্ট বানিয়ে দেয়।'
      }
    },
    {
      id: 'canvas-pattern-repetition-ex',
      kind: 'mcq',
      topic: 'Valid repetition parameters for createPattern',
      question: {
        en: 'Which repetition mode string passed to ctx.createPattern() tiles an image horizontally across the X-axis while leaving the vertical space empty?',
        bn: 'ctx.createPattern()-এ কোন স্ট্রিং পাস করলে ছবিটি কেবল অনুভূমিকভাবে (X-অক্ষে) বারবার বসবে কিন্তু উলম্বভাবে বসবে না?'
      },
      options: [
        {
          en: '"repeat-x"',
          bn: '"repeat-x"'
        },
        {
          en: '"repeat-y"',
          bn: '"repeat-y"'
        },
        {
          en: '"no-repeat"',
          bn: '"no-repeat"'
        },
        {
          en: '"round"',
          bn: '"round"'
        }
      ],
      answer: 0,
      hint: {
        en: 'Matches the CSS background-repeat syntax for the X-axis.',
        bn: 'সিএসএস এর মতো এক্স-অক্ষে রিপিট হওয়ার সিনট্যাক্স ভাবুন।'
      },
      explanation: {
        en: 'createPattern accepts "repeat", "repeat-x", "repeat-y", or "no-repeat", mirroring standard CSS background repetition rules.',
        bn: 'createPattern-এ "repeat-x" দিলে ছবিটি কেবল ডানে-বামে বারবার বসে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-pigment-store',
    title: {
      en: 'Canvas Gradients, Patterns & Compositing Quiz',
      bn: 'ক্যানভাস গ্রেডিয়েন্ট, প্যাটার্ন ও কম্পোজিটিং কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-addcolorstop-range',
        kind: 'mcq',
        topic: 'Valid offset range for gradient addColorStop',
        question: {
          en: 'What is the required numerical range for the offset parameter passed to gradient.addColorStop(offset, color)?',
          bn: 'gradient.addColorStop(offset, color)-এ অফসেট প্যারামিটারের গ্রহণযোগ্য সংখ্যার পরিধি কত?'
        },
        options: [
          {
            en: 'From 0.0 to 1.0 (inclusive floats)',
            bn: '০.০ থেকে ১.০ পর্যন্ত'
          },
          {
            en: 'From 0 to 100 percentages',
            bn: '০ থেকে ১০০ শতাংশ'
          },
          {
            en: 'From 0 to 255 byte values',
            bn: '০ থেকে ২৫৫ বাইট'
          },
          {
            en: 'Any negative or positive number',
            bn: 'যেকোনো ধনাত্মক বা ঋণাত্মক সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Normalized float values between 0.0 (start) and 1.0 (finish).',
          bn: '০.০ (শুরু) থেকে ১.০ (শেষ) পর্যন্ত নরম্যালাইজড মান।'
        },
        explanation: {
          en: 'addColorStop throws an INDEX_SIZE_ERR DOMException if the offset value sits outside the normalized [0.0, 1.0] range.',
          bn: 'addColorStop-এর অফসেট অবশ্যই ০.০ থেকে ১.০ এর মধ্যে হতে হয়, অন্যথায় ব্রাউজার এরর দেয়।'
        }
      },
      {
        id: 'q-canvas-lighter-mode',
        kind: 'mcq',
        topic: 'Effect of ctx.globalCompositeOperation = "lighter"',
        question: {
          en: 'When creating luminous particle explosions or glowing magical spells, why do graphics developers use the "lighter" composite mode?',
          bn: 'পার্টিকেল বিস্ফোরণ বা আলোর ঝলকানি অ্যানিমেশন বানানোর সময় কেন ডেভেলপাররা "lighter" কম্পোজিট মোড ব্যবহার করেন?'
        },
        options: [
          {
            en: 'It adds color channel values together mathematically, creating super-bright additive saturation where particles overlap',
            bn: 'এটি রঙের চ্যানেলগুলো গাণিতিকভাবে একসাথে যোগ করে, ফলে কণাগুলো পরস্পরের ওপর পড়লে তীব্র আলোর আভা তৈরি হয়'
          },
          {
            en: 'It reduces battery consumption on mobile phones',
            bn: 'এটি মোবাইলের ব্যাটারি খরচ কমায়'
          },
          {
            en: 'It turns the background into dark green',
            bn: 'এটি ব্যাকগ্রাউন্ডকে গাঢ় সবুজ বানায়'
          },
          {
            en: 'It converts 2D lines into 3D polygons',
            bn: 'এটি ২ডি লাইনকে ৩ডি রূপ দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Additive color blending where overlapping shapes brighten.',
          bn: 'রঙ যোগ হয়ে উজ্জ্বলতা বাড়ার কথা ভাবুন।'
        },
        explanation: {
          en: '"lighter" implements additive color blending (source color + destination color), reaching pure white when multiple lights intersect.',
          bn: '"lighter" মোডে নতুন ও পুরোনো রঙের মান যোগ হয়, ফলে কণাগুলো এক জায়গায় জমলে উজ্জ্বল সাদা আভা তৈরি করে।'
        }
      },
      {
        id: 'q-canvas-shadow-performance-leak',
        kind: 'mcq',
        topic: 'How to disable shadows after drawing a shadowed element',
        question: {
          en: 'How should you disable drop shadows after drawing a floating modal window so subsequent buttons are not blurred?',
          bn: 'একটি শ্যাডোযুক্ত উইন্ডো আঁকার পর কীভাবে শ্যাডো বন্ধ করবেন যাতে পরের বাটনগুলোর নিচে ছায়া না পড়ে?'
        },
        options: [
          {
            en: 'Set ctx.shadowColor = "transparent" or set ctx.shadowBlur = 0',
            bn: 'ctx.shadowColor = "transparent" করুন অথবা ctx.shadowBlur = 0 করে দিন'
          },
          {
            en: 'Delete the entire canvas element from the DOM',
            bn: 'পুরো ক্যানভাস ডম থেকে মুছে ফেলুন'
          },
          {
            en: 'Invoke ctx.clearCanvas()',
            bn: 'ctx.clearCanvas() কল করুন'
          },
          {
            en: 'Call window.stop() in JavaScript',
            bn: 'জাভাস্ক্রিপ্টে window.stop() কল করুন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Reset shadowBlur to zero or shadowColor to transparent.',
          bn: 'shadowBlur শূন্য বা shadowColor স্বচ্ছ করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Setting shadowColor to "transparent" or shadowBlur to 0 disables shadow computation for subsequent drawing commands.',
          bn: 'shadowBlur = 0 বা shadowColor ট্রান্সপারেন্ট করে দিলে পরের শেপগুলোর ওপর কোনো ছায়া পড়ে না।'
        }
      },
      {
        id: 'q-canvas-pattern-matrix',
        kind: 'mcq',
        topic: 'Transforming patterns with setTransform',
        question: {
          en: 'How can you scale or rotate an image pattern without altering the canvas coordinate system?',
          bn: 'ক্যানভাসের প্রধান স্থানাঙ্ক ব্যবস্থা পরিবর্তন না করেই কীভাবে একটি প্যাটার্নকে ঘুরানো বা ছোট-বড় করা যায়?'
        },
        options: [
          {
            en: 'Using the pattern.setTransform(DOMMatrix) method directly on the CanvasPattern object',
            bn: 'সরাসরি CanvasPattern অবজেক্টের ওপর pattern.setTransform(DOMMatrix) মেথড ব্যবহার করে'
          },
          {
            en: 'Using CSS rotate() in the HTML document',
            bn: 'এইচটিএমএল ফাইলে সিএসএস rotate() ব্যবহার করে'
          },
          {
            en: 'By re-uploading the image file to the web server',
            bn: 'ওয়েব সার্ভারে নতুন করে ছবি আপলোড করে'
          },
          {
            en: 'Pattern transformation is strictly impossible in modern browsers',
            bn: 'আধুনিক ব্রাউজারে এটি কোনোভাবেই সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'The pattern.setTransform method allows matrix manipulation on patterns.',
          bn: 'pattern.setTransform মেথডের কথা ভাবুন।'
        },
        explanation: {
          en: 'CanvasPattern.setTransform() applies a local transformation matrix directly to the repeating pattern matrix.',
          bn: 'CanvasPattern.setTransform() দিয়ে প্যাটার্নকে আলাদাভাবে স্কেল বা রোটেট করা সম্ভব।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-fresco-frames',
    tech: 'canvas',
    title: {
      en: 'requestAnimationFrame, Delta Time & 60 FPS Loop',
      bn: 'requestAnimationFrame, ডেল্টা টাইম ও ৬০ এফপিএস লুপ'
    }
  }
};
