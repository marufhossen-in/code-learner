import type { Lesson } from '../../../lib/types';

export const brushLedgerLesson: Lesson = {
  slug: 'the-brush-ledger',
  tech: 'canvas',
  title: {
    en: 'Vector Paths, Subpaths, Arcs & Bezier Curves',
    bn: 'ভেক্টর পাথ, সাব-পাথ, বৃত্তচাপ ও বেজিয়ার কার্ভ'
  },
  summary: {
    en: 'Drawing custom vector shapes on a 2D canvas is governed by the path architecture. A path is a list of subpaths consisting of connected points and curves held in temporary memory. Invoking ctx.beginPath() resets this list; omitting beginPath causes previous geometry to be re-stroked repeatedly on every animation frame. Drawing primitives include moveTo to position the virtual pen, lineTo for straight segments, arc for circular sectors, and bezierCurveTo for smooth cubic splines. Crucially, angles in the canvas arc API are measured strictly in radians rather than degrees: a full 360-degree circle requires 6.28 radians (two pi), while a 180-degree half-circle equals 3.14 radians (pi). This lesson teaches path construction, line caps and joins, and dashing patterns.',
    bn: 'ক্যানভাসে যেকোনো কাস্টম ভেক্টর আকার তৈরি করতে পাথ (Path) আর্কিটেকচার ব্যবহার করা হয়। পাথ হলো মেমোরিতে জমে থাকা বিভিন্ন বিন্দু ও রেখার একটি তালিকা। ctx.beginPath() কল করলে এই তালিকা খালি হয়; এটি দিতে ভুলে গেলে আগের ফ্রেমের সব রেখা বারবার আঁকা হয়ে মেমোরি ও প্রসেসর নষ্ট করে। ভার্চুয়াল কলম তুলতে moveTo, সোজা লাইনের জন্য lineTo, বৃত্তের জন্য arc এবং মসৃণ বক্ররেখার জন্য bezierCurveTo ব্যবহৃত হয়। ক্যানভাসের arc ফাংশনে কোণ ডিগ্রির বদলে রেডিয়ানে হিসাব করা হয়: পূর্ণ ৩৬০ ডিগ্রি বৃত্তের জন্য ৬.২৮ রেডিয়ান (২ পাই) এবং ১৮০ ডিগ্রির অর্ধবৃত্তের জন্য ৩.১৪ রেডিয়ান (পাই) প্রয়োজন। এই পাঠে পাথ তৈরি, লাইন ক্যাপ, কর্নার জয়েন ও ড্যাশ লাইন আঁকার কৌশল শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Path Lists and Rasterization',
        bn: 'মূল ধারণা: পাথ তালিকা ও রাস্টারাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you draw geometric shapes on a canvas, you do not immediately render colored pixels to the screen. Instead, you author an invisible mathematical outline called a path. You guide a virtual pen across coordinates using position commands like moveTo (which lifts and positions the pen) and lineTo (which draws a straight line). Only when you invoke ctx.stroke() or ctx.fill() does the canvas rasterizer paint pixels along that path.',
        bn: 'আপনি যখন ক্যানভাসে কোনো জ্যামিতিক নকশা আঁকেন, তখন সাথে সাথে স্ক্রিনে রঙিন পিক্সেল ফুটে ওঠে না। বরং প্রথমে মেমোরিতে একটি অদৃশ্য গাণিতিক রূপরেখা বা পাথ তৈরি হয়। moveTo (যা দাগ না টেনে কলম সরায়) এবং lineTo (যা সোজা দাগ টানে) কমান্ড দিয়ে ভার্চুয়াল কলমটিকে বিভিন্ন স্থানাঙ্কে পরিচালনা করা হয়। এরপর যখন আপনি ctx.stroke() বা ctx.fill() কল করেন, তখনই কেবল রাস্টারাইজার সেই পাথের ওপর পিক্সেলের রঙ এঁকে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The Path Reset (beginPath)',
          def: {
            en: 'The method that clears the current subpath list, ensuring new drawing commands do not re-stroke earlier geometry',
            bn: 'ক্যানভাসের মেথড যা বর্তমান পাথের তালিকা পরিষ্কার করে দেয়, যাতে আগের রেখাগুলো নতুন আঁকার সাথে বারবার যুক্ত না হয়'
          }
        },
        {
          term: 'Radian Angle Metric',
          def: {
            en: 'The unit of angular measurement used by arc(), where radians equal degrees multiplied by pi divided by 180',
            bn: 'ক্যানভাস বৃত্তচাপে ব্যবহৃত কোণের পরিমাপ, যেখানে রেডিয়ান সমান ডিগ্রি গুণ পাই ভাগ ১৮০'
          }
        },
        {
          term: 'Bezier Splines (bezierCurveTo)',
          def: {
            en: 'Cubic curves governed by two control points that pull the line tangent, allowing smooth natural curves without sharp angles',
            bn: 'দুটি কন্ট্রোল পয়েন্ট দ্বারা নিয়ন্ত্রিত মসৃণ বক্ররেখা যা কোনো ধারালো কোণ ছাড়াই চমৎকার বাঁক তৈরি করে'
          }
        },
        {
          term: 'Line Caps & Joins',
          def: {
            en: 'Styling properties (lineCap: butt, round, square; lineJoin: miter, round, bevel) controlling line endings and intersections',
            bn: 'রেখার প্রান্ত (যেমন গোল বা চারকোনা) এবং কোণার সংযোগস্থল মসৃণ করার সিএসএস-সদৃশ ড্রয়িং প্রপার্টি'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'path-methods-table',
      text: {
        en: 'Essential 2D Canvas Path Methods',
        bn: 'ক্যানভাস পাথ তৈরির প্রধান মেথডসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Syntax and Operational Behavior of Canvas Path Commands',
        bn: 'ক্যানভাসে পাথ তৈরির বিভিন্ন কমান্ডের বিবরণ ও আচরণ'
      },
      head: [
        { en: 'Method Call', bn: 'মেথড' },
        { en: 'Parameters', bn: 'প্যারামিটার' },
        { en: 'Drawing Action', bn: 'আঁকার ধরন' }
      ],
      rows: [
        [
          { en: 'ctx.beginPath()', bn: 'ctx.beginPath()' },
          { en: 'None', bn: 'নেই' },
          { en: 'Clears existing subpaths and starts a completely fresh path list', bn: 'আগের সব পাথ মুছে একদম নতুন পাথের তালিকা শুরু করে' }
        ],
        [
          { en: 'ctx.moveTo(x, y)', bn: 'ctx.moveTo(x, y)' },
          { en: 'x: number, y: number', bn: 'x: সংখ্যা, y: সংখ্যা' },
          { en: 'Lifts the pen and establishes a new subpath start point without drawing', bn: 'দাগ না টেনে কলম তুলে নির্দিষ্ট স্থানাঙ্কে নতুন বিন্দু নির্ধারণ করে' }
        ],
        [
          { en: 'ctx.lineTo(x, y)', bn: 'ctx.lineTo(x, y)' },
          { en: 'x: number, y: number', bn: 'x: সংখ্যা, y: সংখ্যা' },
          { en: 'Connects the current subpath point to target (x, y) with a straight segment', bn: 'বর্তমান বিন্দু থেকে নির্দিষ্ট বিন্দু পর্যন্ত সোজা দাগ টানে' }
        ],
        [
          { en: 'ctx.arc(x, y, r, sAngle, eAngle)', bn: 'ctx.arc(x, y, r, sAngle, eAngle)' },
          { en: 'x, y, radius, startRad, endRad, anticlockwise?', bn: 'কেন্দ্র (x,y), ব্যাসার্ধ, শুরু ও শেষ রেডিয়ান' },
          { en: 'Draws a circular arc from start angle to end angle measured in radians', bn: 'রেডিয়ান কোণের ওপর ভিত্তি করে বৃত্ত বা বৃত্তচাপ আঁকে' }
        ],
        [
          { en: 'ctx.closePath()', bn: 'ctx.closePath()' },
          { en: 'None', bn: 'নেই' },
          { en: 'Draws a straight line from current point back to the subpath start', bn: 'বর্তমান বিন্দু থেকে শুরুর বিন্দু পর্যন্ত সোজা রেখা টেনে পাথ বন্ধ করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Radians and Circle Geometry Calculator',
        bn: 'চালনাযোগ্য সিমুলেশন: রেডিয়ান ও বৃত্ত জ্যামিতি গণক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script converts standard degrees into canvas radian values for 360-degree full circles and 180-degree half-circles:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি সাধারণ ডিগ্রিকে ক্যানভাসের রেডিয়ান মানে রূপান্তর করে ৩৬০ ডিগ্রির পূর্ণ বৃত্ত এবং ১৮০ ডিগ্রির অর্ধবৃত্তের মান বের করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'canvas-radians-sim',
      lang: 'javascript',
      code: `// Canvas Arc Radians and Angular Conversion Engine
const deg360 = 360; // Full circular rotation in degrees
const deg180 = 180; // Semicircular angle in degrees

const rad360 = Number(((deg360 * Math.PI) / 180).toFixed(2));
const rad180 = Number(((deg180 * Math.PI) / 180).toFixed(2));

console.log('Full circle angular span in degrees:', deg360);
// -> Full circle angular span in degrees: 360

console.log('Radian value required for full circle arc:', rad360);
// -> Radian value required for full circle arc: 6.28

console.log('Half circle angular span in degrees:', deg180);
// -> Half circle angular span in degrees: 180

console.log('Radian value required for half circle arc:', rad180);
// -> Radian value required for half circle arc: 3.14`,
      caption: {
        en: 'Figure 1: Full 360-degree circles require 6.28 radians (two pi), while 180-degree half-circles require 3.14 radians (pi) in the canvas arc API',
        bn: 'চিত্র ১: ক্যানভাসে পূর্ণ ৩৬০ ডিগ্রি বৃত্ত আঁকতে ৬.২৮ রেডিয়ান (২ পাই) এবং ১৮০ ডিগ্রির অর্ধবৃত্ত আঁকতে ৩.১৪ রেডিয়ান (পাই) প্রয়োজন'
      }
    },
    {
      type: 'heading',
      id: 'snowball-bug-guide',
      text: {
        en: 'The Snowball Bug: Why beginPath is Mandatory',
        bn: 'স্নোবল বাগ: কেন beginPath আবশ্যক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most infamous performance defect in canvas engineering is omitting beginPath() inside animation loops. If you repeatedly invoke lineTo and stroke without beginPath, the browser does not replace the path; it appends new vertices to the existing path list. On frame 1 you stroke 1 line; on frame 1000 you stroke 1000 lines simultaneously, degrading framerates to zero.',
        bn: 'ক্যানভাস প্রোগ্রামিংয়ে সবচেয়ে মারাত্মক ভুল হলো অ্যানিমেশন লুপে beginPath() দিতে ভুলে যাওয়া। এটি না দিলে ব্রাউজার আগের পাথ মুছে ফেলে না; বরং আগের সব লাইনের সাথে নতুন লাইন যোগ করতে থাকে। ফলে ১ম ফ্রেমে ১টি লাইন আঁকা হলেও ১০০০ নম্বর ফ্রেমে একসাথে ১০০০টি লাইন বারবার আঁকা হয়, যা সাইটকে সম্পূর্ণ হ্যাং করে ফেলে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Path Accumulation Defect',
          def: {
            en: 'The CPU slowdown caused by failing to clear the subpath list, forcing the GPU to re-rasterize every historical line on each frame',
            bn: 'পাথ খালি না করায় তৈরি হওয়া ধীরগতি, যেখানে প্রতি ফ্রেমে আগের সব লাইন অপ্রয়োজনীয়ভাবে বারবার রেন্ডার হয়'
          }
        },
        {
          term: 'setLineDash & lineDashOffset',
          def: {
            en: 'Methods defining marching-ants or dashed line intervals (such as dash and gap lengths) and animating dash movement over time',
            bn: 'ড্যাশ রেখা তৈরির পদ্ধতি যার মাধ্যমে ড্যাশের দৈর্ঘ্য ও ফাঁকা জায়গা নির্ধারণ করে অ্যানিমেটেড রেখা আঁকা যায়'
          }
        },
        {
          term: 'ctx.roundRect Native API',
          def: {
            en: 'A modern Canvas 2D method drawing rectangles with customizable corner radii without manual arc calculations',
            bn: 'ক্যানভাসের আধুনিক মেথড যা আলাদা করে বৃত্তচাপ না এঁকেই যেকোনো চারকোনার কোণা গোল বা রাউন্ডেড করে দেয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-rad-calc-ex',
      kind: 'mcq',
      topic: 'Radian value of a full 360-degree circle',
      question: {
        en: 'According to our geometry simulation, how many radians represent a full 360-degree circle in the canvas arc method?',
        bn: 'আমাদের জ্যামিতি সিমুলেশন অনুযায়ী ক্যানভাসে ৩৬০ ডিগ্রির একটি পূর্ণাঙ্গ বৃত্ত আঁকতে কত রেডিয়ান প্রয়োজন?'
      },
      options: [
        {
          en: '6.28 radians (approximately 2 * Math.PI)',
          bn: '৬.২৮ রেডিয়ান (প্রায় ২ * Math.PI)'
        },
        {
          en: '360 radians',
          bn: '৩৬০ রেডিয়ান'
        },
        {
          en: '3.14 radians',
          bn: '৩.১৪ রেডিয়ান'
        },
        {
          en: '1 radian',
          bn: '১ রেডিয়ান'
        }
      ],
      answer: 0,
      hint: {
        en: 'Two times pi (2 * 3.14159) equals 6.28.',
        bn: '২ গুণ পাই (২ * ৩.১৪১৫৯) সমান ৬.২৮।'
      },
      explanation: {
        en: 'A full circular revolution in radians equals 2 * Math.PI, which rounds to 6.28 radians.',
        bn: 'রেডিয়ানে পূর্ণ বৃত্তের পরিমাপ হলো ২ * পাই, যার মান আনুমানিক ৬.২৮।'
      }
    },
    {
      id: 'canvas-snowball-bug-ex',
      kind: 'mcq',
      topic: 'Consequence of forgetting ctx.beginPath in animation loops',
      question: {
        en: 'What occurs if a developer forgets to invoke ctx.beginPath() before drawing new lines inside a 60 FPS requestAnimationFrame loop?',
        bn: 'যদি কোনো ডেভেলপার ৬০ এফপিএস অ্যানিমেশন লুপে লাইন আঁকার আগে ctx.beginPath() কল করতে ভুলে যান, তবে কী ঘটবে?'
      },
      options: [
        {
          en: 'All previous line vertices accumulate in the path list, causing the browser to re-stroke hundreds of historical lines every frame until the tab freezes',
          bn: 'আগের সব লাইন মেমোরিতে জমতে থাকে এবং প্রতি ফ্রেমে শত শত লাইন বারবার আঁকা হতে হতে ব্রাউজার ট্যাব হ্যাং হয়ে যায়'
        },
        {
          en: 'The canvas immediately switches from 2D to 3D mode',
          bn: 'ক্যানভাস সাথে সাথে ২ডি থেকে ৩ডি মোডে চলে যায়'
        },
        {
          en: 'The computer sound card plays an alarm siren',
          bn: 'কম্পিউটারের সাউন্ড কার্ডে অ্যালার্ম বেজে ওঠে'
        },
        {
          en: 'The browser changes the text color to pink',
          bn: 'ব্রাউজার লেখার রঙ গোলাপি করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Path accumulation leads to severe rendering lag and freezing.',
        bn: 'আগের সব লাইন বারবার আঁকার কারণে সাইট আটকে যাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'Without beginPath(), the path list grows infinitely. Every ctx.stroke() call must re-render all lines from the start frame to the present.',
        bn: 'beginPath() না দিলে পাথের তালিকা বড় হতেই থাকে এবং stroke() কল করলে শুরুর ফ্রেম থেকে বর্তমান পর্যন্ত সব লাইন আবার আঁকতে হয়।'
      }
    },
    {
      id: 'canvas-moveto-lineto-ex',
      kind: 'mcq',
      topic: 'Difference between moveTo and lineTo',
      question: {
        en: 'How does ctx.moveTo(x, y) differ from ctx.lineTo(x, y) in canvas path construction?',
        bn: 'ক্যানভাসে পাথ তৈরির ক্ষেত্রে ctx.moveTo(x, y) এবং ctx.lineTo(x, y) এর মধ্যে পার্থক্য কী?'
      },
      options: [
        {
          en: 'moveTo moves the virtual pen to a new coordinate without drawing, while lineTo draws a straight stroke from the current point to the target',
          bn: 'moveTo কোনো দাগ না টেনে কলম তুলে নতুন অবস্থানে নেয়, আর lineTo বর্তমান বিন্দু থেকে গন্তব্য বিন্দু পর্যন্ত সোজা দাগ টানে'
        },
        {
          en: 'moveTo only draws circles, while lineTo only draws squares',
          bn: 'moveTo কেবল বৃত্ত আঁকে এবং lineTo কেবল চারকোনা আঁকে'
        },
        {
          en: 'moveTo is only used for text strings',
          bn: 'moveTo কেবলমাত্র লেখার জন্য ব্যবহৃত হয়'
        },
        {
          en: 'There is no difference; they are exact duplicates',
          bn: 'এদের মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lifting the pen versus drawing a straight line segment.',
        bn: 'কলম তুলে নতুন বিন্দুতে নেওয়া বনাম সোজা দাগ টানার কথা ভাবুন।'
      },
      explanation: {
        en: 'moveTo establishes a new disconnected subpath origin. lineTo appends a straight line segment connecting the previous point to the new point.',
        bn: 'moveTo দিয়ে দাগ না ফেলে নতুন জায়গা থেকে আঁকা শুরু করা হয়, আর lineTo দিয়ে সোজা দাগ টানা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-brush-ledger',
    title: {
      en: 'Canvas Paths, Arcs & Geometry Quiz',
      bn: 'ক্যানভাস পাথ, বৃত্তচাপ ও জ্যামিতি কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-half-circle-radians',
        kind: 'mcq',
        topic: 'Calculating semicircle radian values',
        question: {
          en: 'What radian value should you pass to ctx.arc() to draw a 180-degree semicircular half-circle starting from angle 0?',
          bn: 'কোণ ০ থেকে শুরু করে ১৮০ ডিগ্রির একটি অর্ধবৃত্ত আঁকতে ctx.arc()-এ কত রেডিয়ান মান দিতে হবে?'
        },
        options: [
          {
            en: 'Math.PI (approximately 3.14 radians)',
            bn: 'Math.PI (প্রায় ৩.১৪ রেডিয়ান)'
          },
          {
            en: '180 radians',
            bn: '১৮০ রেডিয়ান'
          },
          {
            en: 'Math.PI * 2 (approximately 6.28 radians)',
            bn: 'Math.PI * ২ (প্রায় ৬.২৮ রেডিয়ান)'
          },
          {
            en: '0.5 radians',
            bn: '০.৫ রেডিয়ান'
          }
        ],
        answer: 0,
        hint: {
          en: '180 degrees equals 1 pi (3.14 radians).',
          bn: '১৮০ ডিগ্রি সমান ১ পাই (৩.১৪ রেডিয়ান)।'
        },
        explanation: {
          en: '180 degrees corresponds to Math.PI radians (approx 3.14). A full 360-degree rotation is 2 * Math.PI (approx 6.28).',
          bn: '১৮০ ডিগ্রির পরিমাপ হলো Math.PI বা ৩.১৪ রেডিয়ান। পূর্ণ ৩৬০ ডিগ্রির পরিমাপ হলো ২ * Math.PI বা ৬.২৮ রেডিয়ান।'
        }
      },
      {
        id: 'q-canvas-closepath-action',
        kind: 'mcq',
        topic: 'How closePath seals a polygon automatically',
        question: {
          en: 'When drawing a triangle with three points, what does invoking ctx.closePath() do after the second lineTo?',
          bn: 'তিনটি বিন্দু দিয়ে ত্রিভুজ আঁকার সময় দ্বিতীয় lineTo এর পর ctx.closePath() কল করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It draws an automatic straight line segment connecting the current final point back to the starting point established by moveTo',
            bn: 'এটি শেষ বিন্দু থেকে moveTo দিয়ে শুরু করা প্রথম বিন্দু পর্যন্ত নিজে থেকেই একটি সোজা রেখা টেনে ত্রিভুজটি বন্ধ করে'
          },
          {
            en: 'It fills the triangle with bright yellow paint',
            bn: 'এটি ত্রিভুজে হলুদ রঙ ঢেলে দেয়'
          },
          {
            en: 'It deletes the triangle from the canvas buffer',
            bn: 'এটি ক্যানভাস থেকে ত্রিভুজটি মুছে ফেলে'
          },
          {
            en: 'It prints the triangle coordinates to the browser console',
            bn: 'এটি কনসোলে ত্রিভুজের বিন্দুগুলো প্রিন্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Automatically joins the final point back to the initial start point.',
          bn: 'শেষ বিন্দু থেকে শুরুর বিন্দু পর্যন্ত নিজে নিজে লাইন টানার কথা ভাবুন।'
        },
        explanation: {
          en: 'closePath creates an automatic straight line segment back to the initial subpath origin, producing a closed geometric polygon.',
          bn: 'closePath শেষ বিন্দুকে শুরুর বিন্দুর সাথে যুক্ত করে দিয়ে একটি আবদ্ধ জ্যামিতিক চিত্র গঠন করে।'
        }
      },
      {
        id: 'q-canvas-linejoin-options',
        kind: 'mcq',
        topic: 'Customizing corner joints with ctx.lineJoin',
        question: {
          en: 'Which ctx.lineJoin property value creates smooth, rounded corners where thick path segments meet?',
          bn: 'কোন ctx.lineJoin মানটি মোটা রেখাগুলোর সংযোগস্থলে মসৃণ ও গোল কোণা তৈরি করে?'
        },
        options: [
          {
            en: 'ctx.lineJoin = "round";',
            bn: 'ctx.lineJoin = "round";'
          },
          {
            en: 'ctx.lineJoin = "miter";',
            bn: 'ctx.lineJoin = "miter";'
          },
          {
            en: 'ctx.lineJoin = "bevel";',
            bn: 'ctx.lineJoin = "bevel";'
          },
          {
            en: 'ctx.lineJoin = "sharp";',
            bn: 'ctx.lineJoin = "sharp";'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "round" value produces rounded corner joints.',
          bn: 'গোল কোণার জন্য "round" মানের কথা ভাবুন।'
        },
        explanation: {
          en: 'Setting lineJoin to "round" rounds off sharp corners where connected line segments meet, preventing piercing spikes.',
          bn: 'lineJoin = "round" দিলে রেখাগুলোর সংযোগস্থল চোখা না হয়ে সুন্দরভাবে গোল হয়ে মেলে।'
        }
      },
      {
        id: 'q-canvas-bezier-control-points',
        kind: 'mcq',
        topic: 'Difference between quadratic and cubic bezier curves',
        question: {
          en: 'How many control points are used by ctx.bezierCurveTo() compared to ctx.quadraticCurveTo()?',
          bn: 'ctx.quadraticCurveTo()-এর তুলনায় ctx.bezierCurveTo() কয়টি কন্ট্রোল পয়েন্ট ব্যবহার করে?'
        },
        options: [
          {
            en: 'bezierCurveTo uses 2 control points (cubic curve), while quadraticCurveTo uses 1 control point (quadratic curve)',
            bn: 'bezierCurveTo ২টি কন্ট্রোল পয়েন্ট ব্যবহার করে, আর quadraticCurveTo ব্যবহার করে ১টি কন্ট্রোল পয়েন্ট'
          },
          {
            en: 'bezierCurveTo uses 10 control points',
            bn: 'bezierCurveTo ১০টি কন্ট্রোল পয়েন্ট ব্যবহার করে'
          },
          {
            en: 'quadraticCurveTo uses 5 control points',
            bn: 'quadraticCurveTo ৫টি কন্ট্রোল পয়েন্ট ব্যবহার করে'
          },
          {
            en: 'Neither method uses control points',
            bn: 'কোনো মেথডই কন্ট্রোল পয়েন্ট ব্যবহার করে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cubic curves take 2 control points; quadratic curves take 1.',
          bn: 'কিউবিক কার্ভে ২টি এবং কোয়াড্রেটিকে ১টি কন্ট্রোল পয়েন্টের কথা ভাবুন।'
        },
        explanation: {
          en: 'quadraticCurveTo accepts (cpx, cpy, x, y) with 1 control point. bezierCurveTo accepts (cp1x, cp1y, cp2x, cp2y, x, y) with 2 control points.',
          bn: 'কোয়াড্রেটিক কার্ভে ১টি নিয়ন্ত্রণ বিন্দু থাকে এবং কিউবিক বেজিয়ার কার্ভে ২টি নিয়ন্ত্রণ বিন্দু থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-plaster-rig',
    tech: 'canvas',
    title: {
      en: 'Coordinate Transformations, State Stack & Clipping',
      bn: 'স্থানাঙ্ক রূপান্তর, স্টেট স্ট্যাক ও ক্লিপিং'
    }
  }
};
