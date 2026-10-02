import type { Lesson } from '../../../lib/types';

export const plasterRigLesson: Lesson = {
  slug: 'the-plaster-rig',
  tech: 'canvas',
  title: {
    en: 'Coordinate Transformations, State Stack & Clipping',
    bn: 'স্থানাঙ্ক রূপান্তর, স্টেট স্ট্যাক ও ক্লিপিং'
  },
  summary: {
    en: 'Manipulating complex graphic scenes on a 2D canvas is achieved through coordinate transformations rather than manual trigonometry for every vertex. Canvas transforms modify the underlying 2D affine transformation matrix. Methods include translate to shift the grid origin, rotate to pivot around the current origin using radians, and scale to stretch or mirror axes. Rotating a sprite around its center requires a three-step dance: translate the origin to the object center, rotate by the target angle, and draw the shape centered at negative half-width and half-height. To prevent transformations and styling from polluting subsequent drawings, the canvas provides a state stack managed by save and restore. Additionally, ctx.clip masks rendering strictly within path boundaries. This lesson covers transformations, matrix resets, and clipping regions.',
    bn: 'ক্যানভাসে জটিল গ্রাফিক্স বা চরিত্র ঘোরানো ও সরানোর জন্য প্রতি বিন্দুর ত্রিকোণমিতি না কষে স্থানাঙ্ক রূপান্তর (ট্রান্সফর্মেশন) ব্যবহার করা হয়। ক্যানভাস ট্রান্সফর্মেশন মূলত পেছনের ২ডি অ্যাফাইন ম্যাট্রিক্সকে পরিবর্তন করে। এর মধ্যে রয়েছে translate (মূল বিন্দু বা অরিজিন সরানো), rotate (রেডিয়ানের সাহায্যে অরিজিনকে কেন্দ্র করে ঘোরানো) এবং scale (বড় করা বা উল্টানো)। কোনো বস্তুকে তার নিজের কেন্দ্রবিন্দুতে ঘোরাতে হলে প্রথমে translate দিয়ে অরিজিন কেন্দ্রে নিতে হয়, তারপর rotate করতে হয় এবং সবশেষে -width/2 ও -height/2 অফসেটে আঁকতে হয়। আগের পরিবর্তন যেন পরের ড্রয়িংয়ে প্রভাব না ফেলে সেজন্য save() এবং restore() দিয়ে স্টেট স্ট্যাক পরিচালনা করা হয়। এছাড়া ctx.clip() দিয়ে নির্দিষ্ট আকারের ভেতরে ড্রয়িং সীমাবদ্ধ বা মাস্ক করা যায়।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Transforming the Coordinate Grid',
        bn: 'মূল ধারণা: স্থানাঙ্ক গ্রিড রূপান্তর'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'In traditional HTML rendering, you animate an element by changing its CSS position or transform property. In the Canvas 2D API, you do not transform individual shapes. Instead, you move, rotate, and scale the entire coordinate grid itself, draw the shape at local coordinates, and then restore the grid to its original position.',
        bn: 'সাধারণ এইচটিএমএল বা সিএসএস অ্যানিমেশনে উপাদানকে মুভ বা রোটেট করতে transform প্রপার্টি বদলানো হয়। কিন্তু ক্যানভাস ২ডি এপিআই-তে কোনো নির্দিষ্ট বস্তুকে ঘোরানো হয় না। বরং পুরো স্থানাঙ্ক গ্রিডটিকেই সরিয়ে ও ঘুরিয়ে নেওয়া হয়, সেই নতুন অবস্থানে বস্তুটি আঁকা হয় এবং তারপর গ্রিডকে আগের অবস্থায় ফিরিয়ে আনা হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'The State Stack (save & restore)',
          def: {
            en: 'A Last-In-First-Out stack that preserves and restores transformation matrices, clipping paths, styles, and composite modes',
            bn: 'ক্যানভাসের স্ট্যাক মেমোরি যা বর্তমান রূপান্তর ম্যাট্রিক্স, স্টাইল এবং ক্লিপিং পাথ সংরক্ষণ ও পূর্বাবস্থায় ফিরিয়ে আনে'
          }
        },
        {
          term: 'Grid Translation (translate)',
          def: {
            en: 'Shifting the canvas coordinate origin (0, 0) by specified horizontal (dx) and vertical (dy) pixel offsets',
            bn: 'ক্যানভাসের মূল শূন্য বিন্দুকে (০, ০) নির্দিষ্ট পিক্সেল ডানে বা নিচে সরিয়ে নেওয়া'
          }
        },
        {
          term: 'Center-Point Rotation',
          def: {
            en: 'The technique of translating the grid to an object center before rotating, preventing orbiting around the top-left canvas corner',
            bn: 'বস্তুর কেন্দ্রবিন্দুতে অরিজিন স্থানান্তর করে ঘোরানো, যাতে ক্যানভাসের কোণাকে কেন্দ্র করে কক্ষপথের মতো না ঘুরে'
          }
        },
        {
          term: 'Clipping Region (clip)',
          def: {
            en: 'Constraining all subsequent pixel rendering strictly inside the boundaries of the currently active path',
            bn: 'একটি নির্দিষ্ট পাথের সীমানার মধ্যে পরবর্তী সমস্ত ড্রয়িংকে আবদ্ধ বা মাস্ক করে রাখা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'transform-matrix-table',
      text: {
        en: 'Canvas Transformation and State Operations',
        bn: 'ক্যানভাস রূপান্তর ও স্টেট অপারেশনসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Canvas Matrix Transformation and State Management Methods',
        bn: 'ক্যানভাস ম্যাট্রিক্স রূপান্তর ও স্টেট ব্যবস্থাপনার পদ্ধতির তুলনা'
      },
      head: [
        { en: 'API Method', bn: 'মেথড' },
        { en: 'Stack / Matrix Effect', bn: 'স্ট্যাক বা ম্যাট্রিক্সের প্রভাব' },
        { en: 'Practical Use Case', bn: 'বাস্তব ব্যবহার' }
      ],
      rows: [
        [
          { en: 'ctx.save()', bn: 'ctx.save()' },
          { en: 'Pushes current drawing state and matrix onto LIFO stack', bn: 'বর্তমান অবস্থা ও ম্যাট্রিক্স স্ট্যাকে পুশ করে' },
          { en: 'Isolating sprite styling or nested character limb transformations', bn: 'কোনো অবজেক্ট বা চরিত্রের অঙ্গপ্রত্যঙ্গ আঁকার আগে স্টেট পৃথক রাখা' }
        ],
        [
          { en: 'ctx.restore()', bn: 'ctx.restore()' },
          { en: 'Pops top drawing state from stack and reinstates previous matrix', bn: 'স্ট্যাক থেকে সর্বশেষ অবস্থা তুলে নিয়ে আগের ম্যাট্রিক্সে ফিরে যায়' },
          { en: 'Resetting grid position after rendering a rotated object', bn: 'ঘূর্ণায়মান অবজেক্ট আঁকার পর গ্রিডকে পুনরায় সাধারণ অবস্থায় ফেরানো' }
        ],
        [
          { en: 'ctx.translate(dx, dy)', bn: 'ctx.translate(dx, dy)' },
          { en: 'Adds horizontal and vertical offsets to the current transform matrix', bn: 'ম্যাট্রিক্সে অনুভূমিক ও উল্লম্ব সরণ যোগ করে' },
          { en: 'Moving the drawing pen to the center of a particle or game character', bn: 'পার্টিকেল বা গেম চরিত্রের কেন্দ্রে ড্রয়িং অরিজিন স্থানান্তর' }
        ],
        [
          { en: 'ctx.rotate(angleRad)', bn: 'ctx.rotate(angleRad)' },
          { en: 'Applies rotational trigonometric transformation around the current origin', bn: 'বর্তমান মূল বিন্দুর সাপেক্ষে রেডিয়ানে কৌণিক ঘূর্ণন ঘটায়' },
          { en: 'Spinning wheels, pointing directional arrows, or tilting sprites', bn: 'চাকা ঘোরানো, দিক নির্দেশক তীর বাঁকানো বা গেম স্প্রাইট হেলানো' }
        ],
        [
          { en: 'ctx.resetTransform()', bn: 'ctx.resetTransform()' },
          { en: 'Resets the transform matrix to the default identity matrix', bn: 'ম্যাট্রিক্সকে রিসেট করে আইডেন্টিটি ম্যাট্রিক্সে ফিরিয়ে আনে' },
          { en: 'Recovering clean coordinates without unwinding stack depths', bn: 'স্ট্যাক বারবার পপ না করেই একদম মূল স্থানাঙ্কে সরাসরি ফেরা' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Transform Matrix & Center-Point Rotation Math',
        bn: 'চালনাযোগ্য সিমুলেশন: ট্রান্সফর্ম ম্যাট্রিক্স ও কেন্দ্র ঘূর্ণন গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the transformation parameters for rotating a 50 by 50 pixel box by 45 degrees around its center coordinate (100, 100), tracking stack depth transitions from 0 to 1 and back to 0:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি একটি ৫০ বাই ৫০ পিক্সেল সাইজের চারকোনাকে তার কেন্দ্রবিন্দু (১০০, ১০০)-এর সাপেক্ষে ৪৫ ডিগ্রি ঘুরাতে প্রয়োজনীয় প্যারামিটার এবং ০ থেকে ১ ও পুনরায় ০ তে স্ট্যাক গভীরতার পরিবর্তন হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'canvas-transform-sim',
      lang: 'javascript',
      code: `// Canvas 2D Transformation Matrix & State Stack Engine
let stackDepth = 0;

// Step 1: Save baseline state before transformation
stackDepth += 1; // ctx.save()

const targetX = 100;
const targetY = 100;
const boxSize = 50;
const rotationDeg = 45;

// Convert degrees to radians for ctx.rotate
const rotationRad = Number(((rotationDeg * Math.PI) / 180).toFixed(2));

// Centering offsets (half-width, half-height)
const localOriginX = -(boxSize / 2);
const localOriginY = -(boxSize / 2);

console.log('Saved state stack depth:', stackDepth);
// -> Saved state stack depth: 1

console.log('Grid translation origin X:', targetX);
// -> Grid translation origin X: 100

console.log('Grid translation origin Y:', targetY);
// -> Grid translation origin Y: 100

console.log('Rotation applied in degrees:', rotationDeg);
// -> Rotation applied in degrees: 45

console.log('Rotation applied in radians:', rotationRad);
// -> Rotation applied in radians: 0.79

console.log('Local bounding box top-left offset:', localOriginX);
// -> Local bounding box top-left offset: -25

// Step 2: Restore baseline state
stackDepth -= 1; // ctx.restore()
console.log('Restored baseline stack depth:', stackDepth);
// -> Restored baseline stack depth: 0`,
      caption: {
        en: 'Figure 1: Rotating a 50 pixel box by 45 degrees at position (100, 100) applies 0.79 radians, shifting stack depth from 0 to 1 and back to 0',
        bn: 'চিত্র ১: (১০০, ১০০) অবস্থানে ৫০ পিক্সেলের চারকোনাকে ৪৫ ডিগ্রি ঘুরাতে ০.৭৯ রেডিয়ান লাগে, যেখানে স্ট্যাক গভীরতা ০ থেকে ১ এবং পুনরায় ০ তে ফেরে'
      }
    },
    {
      type: 'heading',
      id: 'center-pivot-walkthrough',
      text: {
        en: 'The Three-Step Center-Point Rotation Pattern',
        bn: 'কেন্দ্রবিন্দুতে ঘোরানোর তিন ধাপের নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If you invoke ctx.rotate without translating first, your shape rotates around the top-left canvas coordinate (0, 0), sweeping across the screen like a swinging pendulum. To spin an object in place, always follow the three-step pattern:',
        bn: 'আপনি যদি translate না করে সরাসরি ctx.rotate কল করেন, তবে বস্তুটি নিজের জায়গায় না ঘুরে ক্যানভাসের ওপরের বাম কোণা (০, ০) কে কেন্দ্র করে দোলকের মতো পুরো স্ক্রিন জুড়ে ঘুরবে। কোনো বস্তুকে নিজের অক্ষের ওপর ঘোরাতে সর্বদা এই ৩ ধাপ অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Step 1: Translate Origin',
          def: {
            en: 'Invoke ctx.translate(centerX, centerY) so coordinate (0, 0) sits exactly at the visual center of your sprite',
            bn: 'ctx.translate(centerX, centerY) কল করে মূল বিন্দু (০, ০) কে অবজেক্টের ঠিক কেন্দ্রবিন্দুতে স্থানান্তর করুন'
          }
        },
        {
          term: 'Step 2: Rotate Radians',
          def: {
            en: 'Invoke ctx.rotate(radians) to pivot the entire coordinate plane around the newly positioned center point',
            bn: 'ctx.rotate(radians) কল করে নতুন কেন্দ্রের সাপেক্ষে পুরো গ্রিডকে নির্দিষ্ট কোণে ঘুরিয়ে নিন'
          }
        },
        {
          term: 'Step 3: Draw Centered',
          def: {
            en: 'Draw shapes centered at negative half-width and half-height offsets, keeping symmetry perfectly balanced across the axes',
            bn: 'প্রস্থের অর্ধেক ও উচ্চতার অর্ধেক ঋণাত্মক অফসেটে ছবি বা চারকোনা আঁকুন, যাতে দুই দিকে সমান ভারসাম্য বজায় থাকে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-center-rot-calc-ex',
      kind: 'mcq',
      topic: 'Radian conversion for 45-degree rotation',
      question: {
        en: 'According to our transformation simulation, how many radians correspond to a 45-degree rotation around coordinate (100, 100)?',
        bn: 'আমাদের ট্রান্সফর্মেশন সিমুলেশন অনুযায়ী (১০০, ১০০) স্থানাঙ্কের সাপেক্ষে ৪৫ ডিগ্রি ঘুরাতে কত রেডিয়ান প্রয়োজন?'
      },
      options: [
        {
          en: '0.79 radians (Math.PI / 4 rounded to two decimal places)',
          bn: '০.৭৯ রেডিয়ান (Math.PI / ৪ এর দুই দশমিক স্থান পর্যন্ত মান)'
        },
        {
          en: '45 radians',
          bn: '৪৫ রেডিয়ান'
        },
        {
          en: '3.14 radians',
          bn: '৩.১৪ রেডিয়ান'
        },
        {
          en: '6.28 radians',
          bn: '৬.২৮ রেডিয়ান'
        }
      ],
      answer: 0,
      hint: {
        en: '45 degrees is one-eighth of a full 360-degree circle (approx 0.79 radians).',
        bn: '৪৫ ডিগ্রি পূর্ণ বৃত্তের আট ভাগের এক ভাগ বা প্রায় ০.৭৯ রেডিয়ান।'
      },
      explanation: {
        en: '45 * Math.PI / 180 equals Math.PI divided by 4, which computes to approximately 0.79 radians.',
        bn: '৪৫ গুণ পাই ভাগ ১৮০ সমান পাই ভাগ ৪, যা হিসাব করলে প্রায় ০.৭৯ রেডিয়ান হয়।'
      }
    },
    {
      id: 'canvas-save-restore-ex',
      kind: 'mcq',
      topic: 'Purpose of ctx.save and ctx.restore',
      question: {
        en: 'Why must developers wrap coordinate transformations and clipping paths inside ctx.save() and ctx.restore() calls?',
        bn: 'ক্যানভাসে স্থানাঙ্ক পরিবর্তন বা ক্লিপিং পাথ ব্যবহারের সময় কেন ctx.save() এবং ctx.restore() দিয়ে ঘিরে রাখা আবশ্যক?'
      },
      options: [
        {
          en: 'To prevent local matrix translations, rotations, and clip masks from permanently altering subsequent drawing operations across the entire canvas',
          bn: 'যেন কোনো নির্দিষ্ট অবজেক্টের ঘূর্ণন বা ক্লিপিং পুরো ক্যানভাসের পরবর্তী অন্যান্য উপাদানগুলোর ওপর স্থায়ী বিরূপ প্রভাব না ফেলে'
        },
        {
          en: 'To save the canvas image directly to the user local hard drive',
          bn: 'ক্যানভাসের ছবি ব্যবহারকারীর হার্ড ড্রাইভে সেভ করার জন্য'
        },
        {
          en: 'To speed up network download bandwidth',
          bn: 'ইন্টারনেট ডাউনলোডের গতি বাড়ানোর জন্য'
        },
        {
          en: 'To change CSS fonts on HTML buttons',
          bn: 'এইচটিএমএল বাটনের ফন্ট পরিবর্তন করার জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Isolating transformations so later shapes start with clean coordinates.',
        bn: 'রূপান্তরকে আলাদা করে রাখা যাতে পরের অবজেক্টগুলো স্বাভাবিক স্থানাঙ্কে আঁকা যায়।'
      },
      explanation: {
        en: 'save() preserves the drawing state on the stack. restore() pops that state, reverting the matrix and clipping boundary back to pristine defaults.',
        bn: 'save() স্ট্যাকে ড্রয়িং অবস্থা রাখে এবং restore() তা পুনরায় ফিরিয়ে এনে পরবর্তী আঁকার জন্য গ্রিডকে পরিষ্কার রাখে।'
      }
    },
    {
      id: 'canvas-clip-behavior-ex',
      kind: 'mcq',
      topic: 'How ctx.clip restricts rendering',
      question: {
        en: 'How does the ctx.clip() method behave when applied after defining a circular path?',
        bn: 'একটি বৃত্তাকার পাথ তৈরির পর ctx.clip() মেথড কল করলে কী ঘটে?'
      },
      options: [
        {
          en: 'It establishes a masking stencil, ensuring any pixels drawn afterwards are visible only inside that circular boundary',
          bn: 'এটি একটি মাস্ক তৈরি করে, ফলে পরবর্তী সমস্ত ড্রয়িং কেবলমাত্র সেই বৃত্তের সীমানার ভেতরে দৃশ্যমান হয়'
        },
        {
          en: 'It cuts the canvas element in half on the web page',
          bn: 'এটি ওয়েব পেজে ক্যানভাস উপাদানটিকে দুই টুকরো করে ফেলে'
        },
        {
          en: 'It changes the screen resolution to 4K',
          bn: 'এটি স্ক্রিনের রেজোলিউশন ৪কে বানিয়ে দেয়'
        },
        {
          en: 'It deletes all JavaScript files in the project',
          bn: 'এটি প্রজেক্টের সব ফাইল মুছে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Acts as a mask or stencil for upcoming drawings.',
        bn: 'একটি মাস্ক বা স্টেনসিল হিসেবে কাজ করে পরবর্তী ড্রয়িংকে ভেতরে আটকে রাখে।'
      },
      explanation: {
        en: 'ctx.clip turns the current path into an active clipping region. Subsequent drawing outside that boundary is discarded by the rasterizer.',
        bn: 'ctx.clip বর্তমান পাথকে ক্লিপিং মাস্ক বানিয়ে দেয়, যার ফলে এর বাইরের সব ড্রয়িং স্বয়ংক্রিয়ভাবে বাদ পড়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-plaster-rig',
    title: {
      en: 'Coordinate Transformations & State Stack Quiz',
      bn: 'স্থানাঙ্ক রূপান্তর ও স্টেট স্ট্যাক কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-centered-draw-offset',
        kind: 'mcq',
        topic: 'Offset required to center a shape after translation',
        question: {
          en: 'After translating the canvas origin to an object center (x, y), what coordinates should you pass to draw a rectangle of width 50 and height 50?',
          bn: 'ক্যানভাসের অরিজিনকে কোনো অবজেক্টের কেন্দ্র (x, y)-এ স্থানান্তরের পর ৫০ বাই ৫০ আকারের চারকোনা আঁকতে কোন স্থানাঙ্ক দিতে হবে?'
        },
        options: [
          {
            en: '(-25, -25) with width 50 and height 50',
            bn: '(-২৫, -২৫) স্থানাঙ্কে ৫০ প্রস্থ ও ৫০ উচ্চতা'
          },
          {
            en: '(0, 0) with width 50 and height 50',
            bn: '(০, ০) স্থানাঙ্কে ৫০ প্রস্থ ও ৫০ উচ্চতা'
          },
          {
            en: '(100, 100) with width 50 and height 50',
            bn: '(১০০, ১০০) স্থানাঙ্কে ৫০ প্রস্থ ও ৫০ উচ্চতা'
          },
          {
            en: '(50, 50) with width 25 and height 25',
            bn: '(৫০, ৫০) স্থানাঙ্কে ২৫ প্রস্থ ও ২৫ উচ্চতা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Negative half-width (-25) and negative half-height (-25).',
          bn: 'প্রস্থের অর্ধেক ঋণাত্মক (-২৫) এবং উচ্চতার অর্ধেক ঋণাত্মক (-২৫)।'
        },
        explanation: {
          en: 'Drawing at (-width/2, -height/2) centers the bounding box directly over the translated origin point (0, 0).',
          bn: '(-২৫, -২৫) অফসেটে আঁকলে নতুন অরিজিন (০, ০) অবজেক্টের ঠিক কেন্দ্রবিন্দুতে অবস্থান করে।'
        }
      },
      {
        id: 'q-canvas-unbalanced-stack-danger',
        kind: 'mcq',
        topic: 'Consequence of calling save without restore in loops',
        question: {
          en: 'What occurs if an animation loop executes ctx.save() on every frame without a corresponding ctx.restore() call?',
          bn: 'যদি একটি অ্যানিমেশন লুপে প্রতি ফ্রেমে ctx.save() কল করা হয় কিন্তু ctx.restore() কল না করা হয়, তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'The state stack grows indefinitely until browser memory is exhausted and rendering stutters or crashes',
            bn: 'স্টেট স্ট্যাক মেমোরি সীমাহীনভাবে বাড়তে থাকে এবং শেষ পর্যন্ত ব্রাউজার মেমোরি শেষ হয়ে অ্যানিমেশন ক্র্যাশ করে'
          },
          {
            en: 'The canvas automatically turns green',
            bn: 'ক্যানভাস নিজে থেকেই সবুজ হয়ে যায়'
          },
          {
            en: 'The monitor turns off completely',
            bn: 'মনিটর সম্পূর্ণ বন্ধ হয়ে যায়'
          },
          {
            en: 'Nothing happens because the stack is limited to 2 items',
            bn: 'কিছুই হয় না কারণ স্ট্যাকে ২টির বেশি আইটেম থাকে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unbounded memory leak in the canvas state stack.',
          bn: 'ক্যানভাস স্টেট স্ট্যাকে মেমোরি লিকের কথা ভাবুন।'
        },
        explanation: {
          en: 'Each save() call allocates a new state frame on the stack. Omitting restore() creates an unbounded memory leak.',
          bn: 'প্রতিটি save() মেমোরিতে একটি নতুন স্টেট যোগ করে। restore() না দিলে মেমোরি লিক হয়ে ব্রাউজার ক্র্যাশ করতে পারে।'
        }
      },
      {
        id: 'q-canvas-horizontal-mirror',
        kind: 'mcq',
        topic: 'Flipping a sprite horizontally using scale',
        question: {
          en: 'Which transformation command flips a character sprite horizontally to face left instead of right?',
          bn: 'কোন ট্রান্সফর্মেশন কমান্ড দিয়ে একটি চরিত্র বা স্প্রাইটকে অনুভূমিকভাবে উল্টে ডান থেকে বাম দিকে মুখ করানো যায়?'
        },
        options: [
          {
            en: 'ctx.scale(-1, 1);',
            bn: 'ctx.scale(-1, 1);'
          },
          {
            en: 'ctx.scale(1, -1);',
            bn: 'ctx.scale(1, -1);'
          },
          {
            en: 'ctx.rotate(180);',
            bn: 'ctx.rotate(180);'
          },
          {
            en: 'ctx.translate(-1, -1);',
            bn: 'ctx.translate(-1, -1);'
          }
        ],
        answer: 0,
        hint: {
          en: 'Scale the X-axis by -1 while keeping Y-axis at 1.',
          bn: 'X-অক্ষকে -১ দিয়ে স্কেল করুন এবং Y-অক্ষকে ১ রাখুন।'
        },
        explanation: {
          en: 'ctx.scale(-1, 1) negates the horizontal X coordinate axis, mirroring all subsequent drawing along the vertical centerline.',
          bn: 'ctx.scale(-1, 1) দিলে অনুভূমিক এক্স-অক্ষ উল্টে যায়, ফলে ড্রয়িং বিপরীতমুখী বা আয়নার মতো উল্টো দেখায়।'
        }
      },
      {
        id: 'q-canvas-reset-transform',
        kind: 'mcq',
        topic: 'Function of ctx.resetTransform',
        question: {
          en: 'What is the primary utility of calling ctx.resetTransform()?',
          bn: 'ctx.resetTransform() কল করার প্রধান সুবিধা কী?'
        },
        options: [
          {
            en: 'It immediately restores the transformation matrix to the standard identity matrix without needing to count stack restores',
            bn: 'এটি স্ট্যাক পপ না গুনেই সরাসরি ট্রান্সফর্মেশন ম্যাট্রিক্সকে একদম মূল স্বাভাবিক অবস্থায় ফিরিয়ে আনে'
          },
          {
            en: 'It clears all pixels from the canvas surface',
            bn: 'এটি ক্যানভাস থেকে সমস্ত পিক্সেল মুছে ফেলে'
          },
          {
            en: 'It restarts the entire browser application',
            bn: 'এটি পুরো ব্রাউজার অ্যাপ্লিকেশন রিস্টার্ট করে'
          },
          {
            en: 'It converts the 2D canvas into WebGL mode',
            bn: 'এটি ২ডি ক্যানভাসকে ওয়েবজিএল মোডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Instantly resets the 2D transform matrix to default identity.',
          bn: 'ট্রান্সফর্মেশন ম্যাট্রিক্সকে সরাসরি আদি বা ডিফল্ট অবস্থায় নিয়ে আসে।'
        },
        explanation: {
          en: 'resetTransform() sets the current transformation matrix directly to identity, resetting translation, rotation, and scale instantly.',
          bn: 'resetTransform() তাৎক্ষণিকভাবে ট্রান্সফর্ম ম্যাট্রিক্সকে আদি মানে ফিরিয়ে এনে সমস্ত স্কেলিং বা রোটেশন সাফ করে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-pigment-store',
    tech: 'canvas',
    title: {
      en: 'Gradients, Patterns, Shadows & Compositing',
      bn: 'গ্রেডিয়েন্ট, প্যাটার্ন, শ্যাডো ও কম্পোজিটিং'
    }
  }
};
