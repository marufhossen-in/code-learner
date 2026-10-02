import type { Lesson } from '../../../lib/types';

export const loomOfTouchLesson: Lesson = {
  slug: 'the-loom-of-touch',
  tech: 'canvas',
  title: {
    en: 'Pointer Events, Coordinates & Hit-Testing',
    bn: 'পয়েন্টার ইভেন্ট, স্থানাঙ্ক ও হিট-টেস্টিং'
  },
  summary: {
    en: 'Building interactive canvas applications like paint studios, interactive charts, and video games requires mapping pointer input to internal shapes. Browser mouse events only supply viewport coordinates (clientX, clientY) relative to the entire page. Converting these into local canvas coordinates requires subtracting the element bounding box: canvasX equals clientX minus rect.left, and canvasY equals clientY minus rect.top. For instance, when a user clicks at client viewport coordinate (250, 180) on a canvas offset at left 50 and top 30, the true local canvas coordinate is (200, 150). Determining which shape was clicked is achieved via geometric boundary math or the native ctx.isPointInPath method. This lesson teaches coordinate normalization, bounding box hit-testing, and pointer interaction.',
    bn: 'ড্রয়িং অ্যাপ, ইন্টারেক্টিভ চার্ট বা ২ডি গেম বানাতে ব্যবহারকারীর মাউস ক্লিক ও টাচ ইভেন্ট ট্র্যাক করতে হয়। মাউস ক্লিক করলে ব্রাউজার কেবল পুরো স্ক্রিনের স্থানাঙ্ক (clientX, clientY) প্রদান করে। একে ক্যানভাসের নিজস্ব ভেতরের স্থানাঙ্কে রূপান্তর করতে getBoundingClientRect ব্যবহার করে বিয়োগ করতে হয়: canvasX সমান clientX বিয়োগ rect.left এবং canvasY সমান clientY বিয়োগ rect.top। উদাহরণস্বরূপ, স্ক্রিনের (২৫০, ১৮০) স্থানাঙ্কে ক্লিক করা হলে এবং ক্যানভাসটি বামে ৫০ ও ওপরে ৩০ অফসেটে থাকলে, ক্যানভাসের আসল ভেতরের স্থানাঙ্ক হবে (২০০, ১৫০)। এরপর ক্লিক করা জায়গায় কোন অবজেক্টটি আছে তা বের করতে জ্যামিতিক ক্যালকুলেশন বা ctx.isPointInPath মেথড ব্যবহার করা হয়। এই পাঠে স্থানাঙ্ক রূপান্তর, বাউন্ডিং বক্স হিট-টেস্টিং ও পয়েন্টার ইন্টারেকশন শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Normalizing Viewport Coordinates',
        bn: 'মূল ধারণা: ভিউপোর্ট স্থানাঙ্ককে স্বাভাবিক করা'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'In traditional HTML development, adding click interactivity is as simple as attaching an event listener to a button element. But a canvas is a single blank bitmap. If you draw twenty interactive cards on a canvas, the browser knows nothing about them. You must capture raw screen coordinates and manually calculate which card intersects that pointer coordinate.',
        bn: 'সাধারণ এইচটিএমএলে কোনো বাটনে ক্লিক হ্যান্ডেল করা খুবই সহজ, শুধু একটি ক্লিক লিসেনার যোগ করলেই হয়। কিন্তু ক্যানভাস হলো একটি একক বিটম্যাপ ক্যানভাস। এর ওপর আপনি ২০টি আলাদা কার্ড আঁকলেও ব্রাউজার তাদের সম্পর্কে কিছুই জানে না। আপনাকে ব্যবহারকারীর মাউসের অবস্থান মেপে নিজে গাণিতিকভাবে বের করতে হয় ক্লিকটি কোন কার্ডের ওপর পড়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Coordinate Normalization (getBoundingClientRect)',
          def: {
            en: 'Subtracting canvas.getBoundingClientRect() offsets (rect.left, rect.top) from clientX and clientY to derive local canvas coordinates',
            bn: 'ক্যানভাসের বাইরের ব্রাউজার অফসেট বিয়োগ করে মাউসের স্ক্রিন স্থানাঙ্ককে ক্যানভাসের নিজস্ব ভেতরের স্থানাঙ্কে রূপান্তর করা'
          }
        },
        {
          term: 'Hit-Testing',
          def: {
            en: 'The mathematical algorithm checking whether a pointer coordinate falls inside an entity geometric boundary',
            bn: 'একটি গাণিতিক পরীক্ষা যার মাধ্যমে জানা যায় মাউসের ক্লিকটি কোনো নির্দিষ্ট বস্তুর সীমানার ভেতরে পড়েছে কি না'
          }
        },
        {
          term: 'isPointInPath(path, x, y)',
          def: {
            en: 'The native 2D canvas method testing whether a given coordinate lies within the interior fill of a specified Path2D object',
            bn: 'ক্যানভাসের নিজস্ব মেথড যা একটি নির্দিষ্ট পাথ বা আকারের ভেতরে মাউসের বিন্দুটি আছে কি না তা যাচাই করে সত্য বা মিথ্যা জানায়'
          }
        },
        {
          term: 'Axis-Aligned Bounding Box (AABB)',
          def: {
            en: 'Fast rectangular collision testing checking if (x >= box.x && x <= box.x + box.w && y >= box.y && y <= box.y + box.h)',
            bn: 'চারকোনা বাউন্ডিং বক্সের সাধারণ গাণিতিক শর্ত যা দিয়ে অতি দ্রুত ক্লিক শনাক্ত করা যায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'hit-testing-strategies-table',
      text: {
        en: 'Canvas Hit-Testing Architectural Strategies',
        bn: 'ক্যানভাসে হিট-টেস্টিং করার বিভিন্ন কৌশল'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Comparison of Canvas Collision and Pointer Detection Techniques',
        bn: 'ক্যানভাসে ক্লিক ও সংঘর্ষ শনাক্তকরণ পদ্ধতির তুলনা'
      },
      head: [
        { en: 'Technique', bn: 'কৌশল' },
        { en: 'Computational Complexity', bn: 'জটিলতা' },
        { en: 'Best Use Case', bn: 'উপযুক্ত ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'Axis-Aligned Bounding Box (AABB)', bn: 'বাউন্ডিং বক্স (AABB)' },
          { en: 'O(1) constant time, 4 numerical comparisons', bn: 'O(1) অতি দ্রুত, ৪টি সংখ্যার সাধারণ তুলনা' },
          { en: 'Rectangular UI buttons, inventory slots, and platformer sprites', bn: 'চারকোনা ইউআই বাটন, মেন্যু আইটেম এবং প্ল্যাটফর্মার গেমের চরিত্র' }
        ],
        [
          { en: 'Radial Distance Math (Circle)', bn: 'ব্যাসার্ধ দূরত্ব গণিত (বৃত্ত)' },
          { en: 'O(1) time using Pythagorean theorem dx^2 + dy^2 <= r^2', bn: 'O(1) পিথাগোরাস সূত্র: dx^2 + dy^2 <= r^2' },
          { en: 'Circular nodes, bubble charts, and radial radar dials', bn: 'বৃত্তাকার নোড, বাবল চার্ট এবং ডায়াল হ্যান্ডেল' }
        ],
        [
          { en: 'ctx.isPointInPath()', bn: 'ctx.isPointInPath()' },
          { en: 'O(N) raster scanline polygon fill test', bn: 'O(N) পলিগন স্ক্যানলাইন পরীক্ষা' },
          { en: 'Complex organic shapes, SVG paths, and irregular polygons', bn: 'জটিল জৈব আকার, মানচিত্রের সীমানা এবং আঁকাবাঁকা ভেক্টর' }
        ],
        [
          { en: 'Offscreen Color-Key Buffer', bn: 'অফস্ক্রিন কালার-কি বাফার' },
          { en: 'O(1) read via getImageData(x, y, 1, 1)', bn: 'O(1) getImageData দিয়ে ১ পিক্সেল রিড' },
          { en: 'Selecting among tens of thousands of complex overlapping polygons', bn: 'হাজার হাজার জটিল বহুভুজের মধ্যে থেকে সঠিকটি নির্বাচন' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Pointer Coordinate Normalization Math',
        bn: 'চালনাযোগ্য সিমুলেশন: পয়েন্টার স্থানাঙ্ক স্বাভাবিকীকরণ গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates local canvas coordinates from browser client coordinate 250 and 180 against a canvas element positioned with bounding offset left 50 and top 30, computing internal coordinate 200 and 150:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ব্রাউজার ক্লায়েন্ট স্থানাঙ্ক ২৫০ ও ১৮০ এবং ক্যানভাসের বাউন্ডিং অফসেট ৫০ ও ৩০ ব্যবহার করে ক্যানভাসের ভেতরের সঠিক স্থানাঙ্ক ২০০ ও ১৫০ হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'canvas-pointer-sim',
      lang: 'javascript',
      code: `// Canvas Pointer Event Coordinate Normalization Engine
const clientX = 250;  // Browser viewport click X coordinate
const clientY = 180;  // Browser viewport click Y coordinate

const rectLeft = 50;  // canvas.getBoundingClientRect().left
const rectTop = 30;   // canvas.getBoundingClientRect().top

// Normalization: canvasCoordinate = clientCoordinate - rectOffset
const canvasX = clientX - rectLeft;
const canvasY = clientY - rectTop;

console.log('Browser viewport clientX:', clientX);
// -> Browser viewport clientX: 250

console.log('Browser viewport clientY:', clientY);
// -> Browser viewport clientY: 180

console.log('Canvas bounding rect left offset:', rectLeft);
// -> Canvas bounding rect left offset: 50

console.log('Canvas bounding rect top offset:', rectTop);
// -> Canvas bounding rect top offset: 30

console.log('Normalized internal canvas X coordinate:', canvasX);
// -> Normalized internal canvas X coordinate: 200

console.log('Normalized internal canvas Y coordinate:', canvasY);
// -> Normalized internal canvas Y coordinate: 150`,
      caption: {
        en: 'Figure 1: Subtracting bounding rect offsets (50, 30) from client coordinates (250, 180) accurately yields canvas coordinate (200, 150)',
        bn: 'চিত্র ১: ক্লায়েন্ট স্থানাঙ্ক (২৫০, ১৮০) থেকে ক্যানভাসের অফসেট (৫০, ৩০) বিয়োগ করলে ক্যানভাসের ভেতরের সঠিক বিন্দু (২০০, ১৫০) পাওয়া যায়'
      }
    },
    {
      type: 'heading',
      id: 'retina-pointer-scaling-guide',
      text: {
        en: 'Handling High-DPI Pointer Scaling',
        bn: 'হাই-ডিপিআই রেটিনা ডিসপ্লেতে পয়েন্টার সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'On Retina high-DPI screens, the physical bitmap buffer is often doubled relative to CSS layout dimensions. Since browser pointer events always report measurements in CSS pixels, direct buffer calculations require multiplying normalized coordinates by devicePixelRatio (such as a 2x factor).',
        bn: 'রেটিনা বা হাই-ডিপিআই ডিসপ্লেতে ক্যানভাসের ফিজিক্যাল বাফার সাধারণ সিএসএস লেআউটের চেয়ে দ্বিগুণ বড় হতে পারে। ব্রাউজার পয়েন্টার ইভেন্ট সর্বদা সিএসএস পিক্সেলে স্থানাঙ্ক দেয় বলে সরাসরি বাফার পিক্সেলে কাজ করতে হলে মানগুলোকে devicePixelRatio (যেমন ২ গুণ) দিয়ে সমন্বয় করতে হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Pointer Capture (setPointerCapture)',
          def: {
            en: 'Redirecting all pointer events to the canvas even when the user drags the mouse outside the canvas HTML boundary',
            bn: 'ব্যবহারকারী মাউস ড্র্যাগ করে ক্যানভাসের বাইরে নিয়ে গেলেও ক্লিক ও ড্র্যাগ ইভেন্ট ধরে রাখার ব্রাউজার ফিচার'
          }
        },
        {
          term: 'Path2D Object',
          def: {
            en: 'A reusable vector path container allowing developers to retain path definitions in memory for subsequent isPointInPath tests',
            bn: 'ভেক্টর পাথের একটি মেমোরি অবজেক্ট যা বারবার না এঁকে কেবল ক্লিক হয়েছে কি না তা পরীক্ষা করতে কাজে লাগে'
          }
        },
        {
          term: 'touch-action: none',
          def: {
            en: 'The CSS property applied to interactive canvas elements to prevent mobile touch gestures from triggering unwanted page scrolling',
            bn: 'সিএসএস প্রপার্টি যা মোবাইলে টাচ করে আঁকার সময় পেজ যাতে ওপরে-নিচে স্ক্রোল না হয় তা নিশ্চিত করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-coord-calc-ex',
      kind: 'mcq',
      topic: 'Calculating normalized canvas X and Y coordinates',
      question: {
        en: 'According to our pointer normalization simulation, what internal canvas coordinate results from client coordinate 250 and 180 when the canvas is offset by left 50 and top 30?',
        bn: 'আমাদের পয়েন্টার স্বাভাবিকীকরণ সিমুলেশন অনুযায়ী ক্লায়েন্ট স্থানাঙ্ক ২৫০ ও ১৮০ এবং ক্যানভাস অফসেট ৫০ ও ৩০ হলে ক্যানভাসের ভেতরের স্থানাঙ্ক কত?'
      },
      options: [
        {
          en: '(200, 150)',
          bn: '(২০০, ১৫০)'
        },
        {
          en: '(250, 180)',
          bn: '(২৫০, ১৮০)'
        },
        {
          en: '(300, 210)',
          bn: '(৩০০, ২১০)'
        },
        {
          en: '(50, 30)',
          bn: '(৫০, ৩০)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Subtract: 250 - 50 = 200, and 180 - 30 = 150.',
        bn: 'বিয়োগ করুন: ২৫০ - ৫০ = ২০০, এবং ১৮০ - ৩০ = ১৫০।'
      },
      explanation: {
        en: 'Subtracting offsets calculates canvasX = 250 - 50 = 200 and canvasY = 180 - 30 = 150 coordinates.',
        bn: 'ক্যানভাসের অফসেট বিয়োগ করলে canvasX = ২৫০ - ৫০ = ২০০ এবং canvasY = ১৮০ - ৩০ = ১৫০ স্থানাঙ্ক পাওয়া যায়।'
      }
    },
    {
      id: 'canvas-touch-action-ex',
      kind: 'mcq',
      topic: 'Preventing mobile scroll gestures with touch-action: none',
      question: {
        en: 'Why should you apply the CSS rule "touch-action: none;" to an interactive drawing canvas on mobile devices?',
        bn: 'মোবাইল ডিভাইসে ইন্টার‍্যাক্টিভ ড্রয়িং ক্যানভাসে কেন "touch-action: none;" সিএসএস রুল যোগ করা উচিত?'
      },
      options: [
        {
          en: 'To prevent the browser from interpreting finger dragging as page pinch-to-zoom or vertical page scrolling, allowing smooth in-canvas drawing gestures',
          bn: 'যাতে ব্যবহারকারী ক্যানভাসে আঙুল দিয়ে আঁকার সময় ব্রাউজার পেজটি ওপরে-নিচে স্ক্রোল বা জুম না করে আঁকাকে প্রাধান্য দেয়'
        },
        {
          en: 'To turn off the mobile phone touch screen completely',
          bn: 'মোবাইলের টাচ স্ক্রিন পুরোপুরি বন্ধ করে দিতে'
        },
        {
          en: 'To make the canvas display only in black and white',
          bn: 'ক্যানভাসকে কেবল সাদাকালো রঙে দেখাতে'
        },
        {
          en: 'To increase the volume of audio playback',
          bn: 'অডিও সাউন্ডের ভলিউম বাড়িয়ে দিতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Suppresses native browser scrolling so touch events stay on the canvas.',
        bn: 'মোবাইলের ব্রাউজার স্ক্রোল বন্ধ করে মসৃণ ড্রয়িং নিশ্চিত করার কথা ভাবুন।'
      },
      explanation: {
        en: 'touch-action: none instructs the browser not to hijack touch pointer events for scrolling, enabling uninterrupted drawing strokes.',
        bn: 'touch-action: none দিলে ব্রাউজার স্ক্রোল না করে আঙুলের প্রতিটি টানকে ক্যানভাস ড্রয়িং হিসেবে গ্রহণ করে।'
      }
    },
    {
      id: 'canvas-ispointinpath-ex',
      kind: 'mcq',
      topic: 'How ctx.isPointInPath detects vector hits',
      question: {
        en: 'What does ctx.isPointInPath(x, y) evaluate when called after generating a polygon path?',
        bn: 'একটি বহুভুজ পাথ আঁকার পর ctx.isPointInPath(x, y) কল করলে এটি কী যাচাই করে?'
      },
      options: [
        {
          en: 'It returns true if coordinate (x, y) falls inside the closed boundary of the current path, and false otherwise',
          bn: 'যদি (x, y) বিন্দুটি বর্তমান পাথের ভেতরের অংশে অবস্থান করে তবে true দেয়, অন্যথায় false দেয়'
        },
        {
          en: 'It draws a red circle at coordinate (x, y)',
          bn: 'এটি (x, y) বিন্দুতে একটি লাল বৃত্ত এঁকে দেয়'
        },
        {
          en: 'It moves the path to coordinate (x, y)',
          bn: 'এটি পাথটিকে (x, y) অবস্থানে সরিয়ে নেয়'
        },
        {
          en: 'It counts the total number of lines in the path',
          bn: 'এটি পাথের মোট লাইনের সংখ্যা গুনে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Boolean hit-test checking if a point is inside a shape.',
        bn: 'বিন্দুটি আকারের ভেতরে আছে কি না তা বুলিয়ান (true/false) দিয়ে জানার কথা ভাবুন।'
      },
      explanation: {
        en: 'isPointInPath performs a point-in-polygon ray-casting test, returning true if the point lies within the path fill.',
        bn: 'isPointInPath গাণিতিকভাবে পরীক্ষা করে বিন্দুটি পাথের ভেতরে থাকলে true রিটার্ন করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-loom-of-touch',
    title: {
      en: 'Canvas Pointer Events & Hit-Testing Quiz',
      bn: 'ক্যানভাস পয়েন্টার ইভেন্ট ও হিট-টেস্টিং কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-pointerdown-vs-mousedown',
        kind: 'mcq',
        topic: 'Why Pointer Events supersede Mouse and Touch events',
        question: {
          en: 'Why do modern web graphics applications listen to "pointerdown" instead of separate "mousedown" and "touchstart" events?',
          bn: 'আধুনিক ওয়েব গ্রাফিক্স অ্যাপে আলাদা করে "mousedown" ও "touchstart" না শুনে কেন কেবল "pointerdown" ইভেন্ট শোনা হয়?'
        },
        options: [
          {
            en: 'Pointer Events unify mouse, touch, and stylus pen inputs into a single standard event API with pressure and tilt support',
            bn: 'পয়েন্টার ইভেন্টস মাউস, আঙুলের স্পর্শ এবং ডিজিটাল পেন/স্টাইলাস—সবগুলোকে একটি অভিন্ন এপিআই-তে একীভূত করে'
          },
          {
            en: 'Pointer Events run faster in Google Chrome than in Safari',
            bn: 'পয়েন্টার ইভেন্ট গুগল ক্রোমে দ্রুত চলে'
          },
          {
            en: 'Pointer Events automatically save images to the cloud',
            bn: 'পয়েন্টার ইভেন্ট নিজে থেকেই ক্লাউডে ছবি সেভ করে'
          },
          {
            en: 'HTML buttons stop working if you use mousedown',
            bn: 'mousedown ব্যবহার করলে এইচটিএমএল বাটন কাজ করা বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unifies mouse, touch, and stylus input under one event model.',
          bn: 'মাউস, টাচ ও স্টাইলাস—সব ডিভাইসকে একটি একক ইভেন্টে আনার কথা ভাবুন।'
        },
        explanation: {
          en: 'The W3C Pointer Events API unifies all pointing hardware (mouse clicks, finger taps, stylus pressure) into consistent handlers.',
          bn: 'পয়েন্টার ইভেন্ট মাউস, টাচ ও স্টাইলাস পেন—সবধরনের ইনপুটকে একটি সাধারণ নিয়মে পরিচালনা করে।'
        }
      },
      {
        id: 'q-canvas-bounding-box-math',
        kind: 'mcq',
        topic: 'Mathematical condition for rectangular hit testing',
        question: {
          en: 'Which boolean expression correctly verifies if pointer coordinate (px, py) is inside a rectangle positioned at (rx, ry) with dimensions (rw, rh)?',
          bn: 'কোন বুলিয়ান শর্তটি যাচাই করে যে পয়েন্টার (px, py) একটি চারকোনার ভেতরে পড়েছে যার অবস্থান (rx, ry) এবং আকার (rw, rh)?'
        },
        options: [
          {
            en: 'px >= rx && px <= rx + rw && py >= ry && py <= ry + rh',
            bn: 'px >= rx && px <= rx + rw && py >= ry && py <= ry + rh'
          },
          {
            en: 'px == rx && py == ry',
            bn: 'px == rx && py == ry'
          },
          {
            en: 'px + py == rw + rh',
            bn: 'px + py == rw + rh'
          },
          {
            en: 'px > rw && py > rh',
            bn: 'px > rw && py > rh'
          }
        ],
        answer: 0,
        hint: {
          en: 'X lies between left and right edges; Y lies between top and bottom edges.',
          bn: 'X যেন বাম ও ডানের সীমার মধ্যে থাকে এবং Y যেন ওপর ও নিচের সীমার মধ্যে থাকে।'
        },
        explanation: {
          en: 'Axis-Aligned Bounding Box (AABB) checks that pointer X is within [rx, rx + rw] and pointer Y is within [ry, ry + rh].',
          bn: 'চারকোনা বাউন্ডিং বক্সের শর্ত হলো এক্স এবং ওয়াই স্থানাঙ্ককে চারকোনার পরিধির মধ্যে থাকতে হবে।'
        }
      },
      {
        id: 'q-canvas-pointer-capture-drag',
        kind: 'mcq',
        topic: 'Using setPointerCapture for smooth dragging beyond boundaries',
        question: {
          en: 'What advantage does canvas.setPointerCapture(event.pointerId) offer during a drag-and-drop or drawing gesture?',
          bn: 'ড্র্যাগ বা ড্রয়িং করার সময় canvas.setPointerCapture(event.pointerId) ব্যবহারের সুবিধা কী?'
        },
        options: [
          {
            en: 'It ensures the canvas continues receiving pointermove and pointerup events even if the user drags the cursor completely outside the canvas element or browser window',
            bn: 'ব্যবহারকারী মাউস ড্র্যাগ করে ক্যানভাসের বাইরে বা ব্রাউজার উইন্ডোর বাইরে নিয়ে গেলেও ড্রয়িং বা ড্র্যাগ ইভেন্ট চালু থাকে এবং হঠাৎ কেটে যায় না'
          },
          {
            en: 'It captures a screenshot of the user webcam',
            bn: 'এটি ব্যবহারকারীর ওয়েবক্যামের ছবি তোলে'
          },
          {
            en: 'It prevents other tabs in the browser from opening',
            bn: 'এটি অন্য ট্যাব খোলা বন্ধ করে দেয়'
          },
          {
            en: 'It increases the physical screen resolution',
            bn: 'এটি স্ক্রিনের রেজোলিউশন বাড়ায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Locks pointer tracking to the element even beyond bounds.',
          bn: 'সীমানা ছাড়িয়ে গেলেও পয়েন্টার ইভেন্ট না হারানোর কথা ভাবুন।'
        },
        explanation: {
          en: 'setPointerCapture guarantees the element receives all ongoing movement until release, preventing broken drag gestures.',
          bn: 'setPointerCapture নিশ্চিত করে ব্যবহারকারী বাইরে চলে গেলেও মাউস বা আঙুল না ছাড়া পর্যন্ত সব ইভেন্ট ঠিকভাবে ধরা পড়বে।'
        }
      },
      {
        id: 'q-canvas-radial-hit-distance',
        kind: 'mcq',
        topic: 'Pythagorean distance for circular hit-testing',
        question: {
          en: 'How can you test if a pointer click (px, py) clicked inside a circular bubble with center (cx, cy) and radius r without calling isPointInPath?',
          bn: 'isPointInPath কল না করেই কীভাবে বের করা যায় যে ক্লিকটি (px, py) কেন্দ্র (cx, cy) এবং ব্যাসার্ধ r বিশিষ্ট বৃত্তের ভেতরে পড়েছে কি না?'
        },
        options: [
          {
            en: 'Compute dx = px - cx, dy = py - cy; click is inside if (dx*dx + dy*dy <= r*r)',
            bn: 'dx = px - cx, dy = py - cy বের করুন; যদি (dx*dx + dy*dy <= r*r) হয় তবে ক্লিকটি ভেতরে পড়েছে'
          },
          {
            en: 'Check if dx + dy == r',
            bn: 'dx + dy == r কি না তা পরীক্ষা করে'
          },
          {
            en: 'Check if px * py == r',
            bn: 'px * py == r কি না তা দেখে'
          },
          {
            en: 'Divide radius by 2',
            bn: 'ব্যাসার্ধকে ২ দিয়ে ভাগ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pythagorean distance squared: dx^2 + dy^2 <= r^2.',
          bn: 'পিথাগোরাসের দূরত্বের সূত্র: dx^2 + dy^2 <= r^2।'
        },
        explanation: {
          en: 'If squared Euclidean distance from the click to the center (dx*dx + dy*dy) is less than or equal to r*r, the point is inside the circle.',
          bn: 'কেন্দ্র থেকে দূরত্বের বর্গ যদি ব্যাসার্ধের বর্গের চেয়ে ছোট বা সমান হয়, তবে বিন্দুটি বৃত্তের ভেতরে অবস্থান করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-gallery-rehearsal',
    tech: 'canvas',
    title: {
      en: 'Drawing Studio, Undo/Redo & Image Export',
      bn: 'ড্রয়িং স্টুডিও, আনডু/রিডু ও ইমেজ এক্সপোর্ট'
    }
  }
};
