import type { Lesson } from '../../../lib/types';

export const leadLinesLesson: Lesson = {
  slug: 'the-lead-lines',
  tech: 'svg',
  title: {
    en: 'SVG Shapes & Path Syntax — Basic Shapes and the Path Command Grammar',
    bn: 'এসভিজি শেপস ও পাথ সিনট্যাক্স: বেসিক শেপ এবং পাথ কমান্ড ব্যাকরণ'
  },
  summary: {
    en: 'Vector graphics are constructed through geometric primitives and the versatile path element. In this lesson, you will master SVG geometry fundamentals: basic geometric elements (<rect>, <circle>, <ellipse>, <line>, <polyline>, <polygon>) and the full command grammar of the <path> element. Understand uppercase absolute commands versus lowercase relative commands, straight line operators (M, L, H, V, Z), curved Bézier commands (C, S, Q, T), and elliptical arcs (A) with large-arc-flag and sweep-flag parameters. Learn how the fill-rule property (nonzero vs evenodd) determines which enclosed areas receive color fill. Implement an executable perimeter and bounding metric calculator in TypeScript.',
    bn: 'ভেক্টর গ্রাফিক্স বিভিন্ন জ্যামিতিক উপাদান এবং শক্তিশালী পাথ এলিমেন্টের সমন্বয়ে তৈরি হয়। এই পাঠে আপনি এসভিজি জ্যামিতির মৌলিক বিষয়গুলো শিখবেন: বেসিক শেপস (<rect>, <circle>, <ellipse>, <line>, <polyline>, <polygon>) এবং <path> এলিমেন্টের সম্পূর্ণ কমান্ড ব্যাকরণ। বড় হাতের পরম (অ্যাবসলিউট) এবং ছোট হাতের আপেক্ষিক (রিলেটিভ) কমান্ডের পার্থক্য, সরলরেখা অপারেটর (M, L, H, V, Z), বক্ররেখা বেজিয়ার কমান্ড (C, S, Q, T) এবং উপবৃত্তাকার আর্ক (A) কমান্ডের দুটি ফ্ল্যাগ বুঝবেন। fill-rule প্রপার্টির (nonzero বনাম evenodd) মাধ্যমে ভেতরের ফাঁপা অংশ কীভাবে রঙ করা হয় তা জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর জ্যামিতিক পরিমাপ ক্যালকুলেটর বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'svg-geometry-primitives-and-paths',
      text: {
        en: 'The Geometry of SVG: Primitives and the Path Engine',
        bn: 'এসভিজি জ্যামিতি: প্রিমিটিভ শেপ এবং পাথ ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design vector illustrations, Scalable Vector Graphics (SVG) offers specialized primitive shapes alongside an all-powerful path command engine.',
        bn: 'আপনি যখন ভেক্টর চিত্র বা আইকন তৈরি করেন, তখন স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) নির্দিষ্ট কিছু প্রস্তুত জ্যামিতিক আকারের পাশাপাশি অত্যন্ত শক্তিশালী একটি পাথ কমান্ড ইঞ্জিন সরবরাহ করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For simple geometrical forms, SVG provides semantic tags that are easy to read and animate. A "<rect>" defines rectangles with optional rounded corners using "rx" and "ry". A "<circle>" specifies a center point with "cx" and "cy" plus a radius "r". An "<ellipse>" supports distinct horizontal and vertical radii ("rx" and "ry"). Straight line segments are rendered using "<line>" via start and end coordinates, while "<polyline>" and "<polygon>" connect multiple points together. However, complex real-world icons and illustrations rely primarily on the versatile "<path>" element. A path consumes a single "d" (data) attribute containing a compact sequence of single-letter commands and coordinate arguments.',
        bn: 'সহজ জ্যামিতিক নকশার জন্য এসভিজি কিছু অর্থপূর্ণ ট্যাগ দেয় যা সহজে পড়া ও অ্যানিমেশন করা যায়। "<rect>" দিয়ে আয়তক্ষেত্র এবং "rx" ও "ry" দিয়ে এর কোণা গোলাকার করা যায়। "<circle>" ট্যাগ "cx" ও "cy" কেন্দ্রবিন্দু এবং "r" ব্যাসার্ধ দিয়ে বৃত্ত তৈরি করে। "<ellipse>" দিয়ে উপবৃত্ত এবং "<line>" দিয়ে সরলরেখা আঁকা হয়, আর বহুভুজ তৈরির জন্য রয়েছে "<polyline>" ও "<polygon>"। কিন্তু জটিল আইকন ও বাস্তব চিত্র আঁকার জন্য প্রধান মাধ্যম হলো বহুমুখী "<path>" এলিমেন্ট। একটি পাথ তার "d" (data) অ্যাট্রিবিউটের ভেতরে একক অক্ষরের কমান্ড এবং স্থানাঙ্ক সংকেত ব্যবহার করে যেকোনো জটিল চিত্র তৈরি করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'path-data-attribute',
          def: {
            en: 'The "d" attribute on an SVG <path> element containing a sequence of commands and coordinate pairs that draw the shape contour.',
            bn: 'এসভিজি <path> এলিমেন্টের "d" অ্যাট্রিবিউট যা বিভিন্ন কমান্ড ও স্থানাঙ্কের সাহায্যে কোনো বস্তুর সীমানা ও রেখা আঁকে।'
          }
        },
        {
          term: 'absolute-vs-relative-commands',
          def: {
            en: 'Uppercase letters indicate absolute coordinates on the canvas; lowercase letters indicate coordinates relative to the previous point.',
            bn: 'বড় হাতের অক্ষর ক্যানভাসের পরম (অ্যাবসলিউট) অবস্থান নির্দেশ করে; আর ছোট হাতের অক্ষর পূর্ববর্তী বিন্দু থেকে আপেক্ষিক দূরত্ব বোঝায়।'
          }
        },
        {
          term: 'elliptical-arc-command',
          def: {
            en: 'The "A" or "a" path command that renders curved arcs along an ellipse defined by radii, rotation, and two boolean flags.',
            bn: 'পাথ কমান্ড "A" বা "a" যা ব্যাসার্ধ, কোণ এবং দুটি বিশেষ ফ্ল্যাগের সাহায্যে উপবৃত্তাকার বক্ররেখা তৈরি করে।'
          }
        },
        {
          term: 'fill-rule-evenodd',
          def: {
            en: 'A polygon fill algorithm that draws a ray to infinity; regions crossing an odd number of path edges are filled with color.',
            bn: 'একটি পলিগন ফিল অ্যালগরিদম যা বিজোড় সংখ্যক রেখা অতিক্রমকারী আবদ্ধ অঞ্চলগুলোতে রঙ পূরণ করে এবং ফাঁপা অংশ তৈরি করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'path-command-grammar-table',
      text: {
        en: 'The SVG Path Command Grammar Reference',
        bn: 'এসভিজি পাথ কমান্ড ব্যাকরণের পূর্ণাঙ্গ নির্দেশিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The SVG path engine parses single-letter instructions followed by coordinate parameters to construct open lines or closed subpaths.',
        bn: 'এসভিজি পাথ ইঞ্জিন একক অক্ষরের নির্দেশাবলী এবং স্থানাঙ্কের সাহায্যে খোলা রেখা বা আবদ্ধ বহুভুজ তৈরি করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Command Letter', bn: 'কমান্ড অক্ষর' },
        { en: 'Command Name', bn: 'কমান্ডের নাম' },
        { en: 'Arguments Format', bn: 'প্যারামিটারের গঠন' },
        { en: 'Architectural Behavior', bn: 'প্রযুক্তিগত আচরণ ও ব্যবহার' }
      ],
      rows: [
        [
          { en: 'M / m', bn: 'M / m' },
          { en: 'MoveTo', bn: 'মুভ-টু' },
          { en: 'M x y (or m dx dy)', bn: 'M x y (বা m dx dy)' },
          { en: 'Lifts the pen and positions cursor at a new coordinate without drawing a stroke', bn: 'কলম তুলে কোনো রেখা না টেনেই কার্সারকে নতুন স্থানাঙ্কে বসায়' }
        ],
        [
          { en: 'L / l', bn: 'L / l' },
          { en: 'LineTo', bn: 'লাইন-টু' },
          { en: 'L x y (or l dx dy)', bn: 'L x y (বা l dx dy)' },
          { en: 'Draws a straight line from current point to specified target coordinate', bn: 'বর্তমান বিন্দু থেকে নির্দিষ্ট লক্ষ্য বিন্দু পর্যন্ত একটি সোজা রেখা টানে' }
        ],
        [
          { en: 'H / h & V / v', bn: 'H / h এবং V / v' },
          { en: 'Horizontal / Vertical Line', bn: 'অক্ষ বরাবর সরলরেখা' },
          { en: 'H x (horizontal), V y (vertical)', bn: 'H x (আনুভূমিক), V y (উল্লম্ব)' },
          { en: 'Optimized straight lines locked strictly to the X or Y axis with single values', bn: 'কেবল একটি সংখ্যা দিয়ে নিখুঁত আনুভূমিক বা উল্লম্ব সরলরেখা আঁকে' }
        ],
        [
          { en: 'C / c', bn: 'C / c' },
          { en: 'Cubic Bézier Curve', bn: 'কিউবিক বেজিয়ার কার্ভ' },
          { en: 'C x1 y1, x2 y2, x y', bn: 'C x1 y1, x2 y2, x y' },
          { en: 'Smooth curve governed by two distinct control points and one destination point', bn: 'দুটি কন্ট্রোল পয়েন্ট ও একটি গন্তব্য বিন্দুর সাহায্যে মসৃণ বক্ররেখা আঁকে' }
        ],
        [
          { en: 'A / a', bn: 'A / a' },
          { en: 'Elliptical Arc', bn: 'উপবৃত্তাকার আর্ক' },
          { en: 'A rx ry rot large sweep x y', bn: 'A rx ry rot large sweep x y' },
          { en: 'Draws an ellipse segment governed by radii, rotation, large-arc, and sweep flags', bn: 'ব্যাসার্ধ ও দুটি ফ্ল্যাগ বিট ব্যবহার করে উপবৃত্তাকার বৃত্তচাপ তৈরি করে' }
        ],
        [
          { en: 'Z / z', bn: 'Z / z' },
          { en: 'ClosePath', bn: 'ক্লোজ-পাথ' },
          { en: 'Z (takes no arguments)', bn: 'Z (কোনো আর্গুমেন্ট লাগে না)' },
          { en: 'Draws a straight line back to the initial M coordinate of the active subpath', bn: 'বর্তমান সাব-পাথের প্রথম M স্থানাঙ্কের সাথে যুক্ত করে পথটি বন্ধ করে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-svg-path-metrics-code',
      text: {
        en: 'Executable Geometric Shape and Path Perimeter Calculator',
        bn: 'জ্যামিতিক শেপ ও পাথ পেরিমিটারের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates the perimeter metrics for basic SVG shapes (circle and rectangle) alongside a closed right-triangle path constructed with M, L, and Z commands.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি বেসিক শেপস (বৃত্ত ও আয়তক্ষেত্র) এবং M, L ও Z দিয়ে তৈরি সমকোণী ত্রিভুজ পাথের মোট পরিসীমা নির্ভুলভাবে হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of SVG Shape Geometry and Perimeter Calculations

interface ShapeMetrics {
  circlePerimeter: number;
  rectPerimeter: number;
  trianglePerimeter: number;
}

function calculateShapeMetrics(): ShapeMetrics {
  // 1. Circle perimeter: 2 * Math.PI * r (radius = 10)
  const circleRadius = 10;
  const circlePerimeter = Math.round(2 * Math.PI * circleRadius);

  // 2. Rectangle perimeter: 2 * (width + height) (width = 40, height = 20)
  const rectWidth = 40;
  const rectHeight = 20;
  const rectPerimeter = 2 * (rectWidth + rectHeight);

  // 3. Right triangle path: M 0 0 L 30 0 L 30 40 Z
  // Side A: 30, Side B: 40, Hypotenuse: Math.hypot(30, 40) = 50
  const sideA = 30;
  const sideB = 40;
  const hypotenuse = Math.hypot(sideA, sideB);
  const trianglePerimeter = sideA + sideB + hypotenuse;

  return {
    circlePerimeter,
    rectPerimeter,
    trianglePerimeter
  };
}

const metrics = calculateShapeMetrics();

console.log('Circle computed perimeter:', metrics.circlePerimeter);
console.log('Rectangle computed perimeter:', metrics.rectPerimeter);
console.log('Triangle path computed perimeter:', metrics.trianglePerimeter);

// prints: Circle computed perimeter: 63
// prints: Rectangle computed perimeter: 120
// prints: Triangle path computed perimeter: 120`
    },
    {
      type: 'heading',
      id: 'understanding-elliptical-arc-flags',
      text: {
        en: 'Demystifying the Arc Command: large-arc-flag and sweep-flag',
        bn: 'আর্ক কমান্ডের ব্যাখ্যা: লার্জ-আর্ক-ফ্ল্যাগ ও সুইপ-ফ্ল্যাগ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The elliptical arc command "A rx ry x-axis-rotation large-arc-flag sweep-flag x y" requires seven parameters, causing frequent confusion for beginners. When drawing an ellipse connecting two coordinates, four mathematically valid arc paths exist. The two boolean flags resolve this ambiguity. The "large-arc-flag" chooses between the smaller arc (180 degrees or less) and the larger arc (greater than 180 degrees). The "sweep-flag" determines the drawing direction: counter-clockwise or clockwise. Mastering these flags allows developers to hand-craft smooth pie charts, gauge dials, and circular loader bars without drawing tools.',
        bn: 'উপবৃত্তাকার আর্ক কমান্ড "A rx ry x-axis-rotation large-arc-flag sweep-flag x y" মোট ৭টি প্যারামিটার গ্রহণ করে, যা নতুন ডেভেলপারদের দ্বিধায় ফেলে। ২ বিন্দুর মধ্যে যখন একটি উপবৃত্তের রেখা টানা হয়, তখন গণিতের নিয়মে ৪টি ভিন্ন পথ সম্ভব হয়। এই ২ বুলিয়ান ফ্ল্যাগ সেই বিভ্রান্তি দূর করে। "large-arc-flag" ছোট আর্ক (১৮০ ডিগ্রির সমান বা কম) নাকি বড় আর্ক (১৮০ ডিগ্রির বেশি) নেওয়া হবে তা নির্ধারণ করে। অন্যদিকে "sweep-flag" রেখাটি ঘড়ির কাঁটার বিপরীত দিকে নাকি ঘড়ির কাঁটার দিকে ঘুরবে তা ঠিক করে। এই ফ্ল্যাগগুলোর নিয়ম জানলে কোনো ড্রয়িং সফটওয়্যার ছাড়াই কোডের মাধ্যমে ডোনাট চার্ট, মিটার ডায়াল এবং বৃত্তাকার লোডার তৈরি করা সম্ভব হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Uppercase commands are absolute: M 10 20 moves to exact coordinate 10,20; lowercase m moves relative to current point.',
          bn: 'বড় হাতের কমান্ড পরম অবস্থান নির্দেশ করে: M 10 20 নির্দিষ্ট বিন্দুতে যায়; ছোট হাতের m বর্তমান অবস্থান থেকে দূরত্ব মাপে।'
        },
        {
          en: 'Use H and V for axis-aligned lines: Save code bytes by using single-coordinate H and V commands for horizontal and vertical cuts.',
          bn: 'অক্ষ বরাবর লাইনে H ও V ব্যবহার করুন: সোজা রেখায় H ও V ব্যবহার করলে অতিরিক্ত স্থানাঙ্ক লিখতে হয় না এবং কোডের সাইজ কমে।'
        },
        {
          en: 'Close paths cleanly with Z: The Z command snaps back to the starting M point, ensuring strokes join with proper miter corners.',
          bn: 'Z দিয়ে পাথ সঠিকভাবে বন্ধ করুন: Z কমান্ড শুরুর M বিন্দুতে ফিরে যায়, ফলে লাইনের সংযোগস্থল সুন্দরভাবে মিশে যায়।'
        },
        {
          en: 'Use fill-rule evenodd for donut cutouts: Evenodd allows nested subpaths to create clean transparent inner holes.',
          bn: 'ফাঁপা কাটআউটে fill-rule evenodd ব্যবহার করুন: ভিতরের সাব-পাথে ছিদ্র বা ফাঁকা অংশ দেখাতে evenodd অত্যন্ত উপযোগী।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-window-frame',
    tech: 'svg',
    title: {
      en: 'SVG Coordinates, viewBox, and Aspect Ratios',
      bn: 'এসভিজি স্থানাঙ্ক ব্যবস্থা, viewBox ও অ্যাসপেক্ট রেশিও'
    }
  },
  exercises: [
    {
      id: 'll-ex1',
      kind: 'mcq',
      topic: 'absolute-vs-relative-path-commands',
      question: {
        en: 'What is the functional difference between the path command "L 50 100" and "l 50 100"?',
        bn: 'পাথ কমান্ড "L 50 100" এবং "l 50 100"-এর মধ্যে কার্যকরী পার্থক্য কী?'
      },
      options: [
        {
          en: 'Uppercase "L" draws a line to absolute coordinate (50, 100) on the SVG canvas; lowercase "l" draws a line 50 units right and 100 units down from the current pen position',
          bn: 'বড় হাতের "L" এসভিজি ক্যানভাসের নির্দিষ্ট পরম বিন্দু (50, 100)-এ রেখা টানে; আর ছোট হাতের "l" বর্তমান অবস্থান থেকে ৫০ একক ডানে এবং ১০০ একক নিচে আপেক্ষিক রেখা আঁকে'
        },
        {
          en: 'Uppercase L only works on Windows operating systems',
          bn: 'বড় হাতের L কেবল উইন্ডোজ কম্পিউটারে কাজ করে'
        },
        {
          en: 'Lowercase l permanently deletes the previous path segment',
          bn: 'ছোট হাতের l পূর্ববর্তী সমস্ত রেখা মুছে ফেলে'
        },
        {
          en: 'Uppercase L was banned by the W3C consortium in 2020',
          bn: 'কারণ ২০২০ সালে W3C বড় হাতের L নিষিদ্ধ করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Uppercase = Absolute coordinates. Lowercase = Relative offset from previous point.',
        bn: 'বড় হাতের অক্ষর পরম স্থানাঙ্ক; ছোট হাতের অক্ষর বর্তমান বিন্দু থেকে আপেক্ষিক দূরত্ব।'
      },
      explanation: {
        en: 'SVG path grammar uses casing to differentiate between absolute coordinates and relative displacement vectors.',
        bn: 'এসভিজিতে বড় হাতের অক্ষর পরম অবস্থান এবং ছোট হাতের অক্ষর আপেক্ষিক সরণ বোঝাতে ব্যবহৃত হয়।'
      }
    },
    {
      id: 'll-ex2',
      kind: 'mcq',
      topic: 'z-closepath-stroke-linejoin',
      question: {
        en: 'Why is ending a path with the "Z" (or "z") command preferred over drawing a manual "L" line back to the starting point?',
        bn: 'একটি পাথের শেষে শুরুর বিন্দুতে সাধারণ "L" রেখা টানার চেয়ে "Z" কমান্ড ব্যবহার করা কেন বেশি সুবিধাজনক?'
      },
      options: [
        {
          en: 'The "Z" command formally closes the shape loop, allowing the browser rendering engine to apply proper stroke-linejoin corners (such as miter joins) rather than leaving an open gap',
          bn: '"Z" কমান্ড আনুষ্ঠানিকভাবে শেপটিকে সম্পূর্ণ বন্ধ করে দেয়, যার ফলে ব্রাউজার লাইনের শেষ প্রান্তে কোনো ফাঁকা না রেখে সুন্দরভাবে কোণা (stroke-linejoin) জোড়া লাগায়'
        },
        {
          en: 'Because Z reduces computer electricity costs by 50 percent',
          bn: 'কারণ Z কম্পিউটারের বিদ্যুৎ খরচ ৫০ শতাংশ কমিয়ে দেয়'
        },
        {
          en: 'Without Z, SVG shapes are converted into static JPEG files',
          bn: 'Z না দিলে এসভিজি স্বয়ংক্রিয়ভাবে জেপিইজিতে রূপান্তরিত হয়'
        },
        {
          en: 'Z was made mandatory by international maritime shipping treaties in 2018',
          bn: 'কারণ ২০১৮ সালে আন্তর্জাতিক নৌ সংস্থায় Z বাধ্যতামূলক করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'ClosePath ensures smooth stroke-linejoin corner caps instead of broken seams.',
        bn: 'Z কমান্ড দিলে কোণার জোড়া নিখুঁতভাবে মেলে এবং কোনো ফাটা দাগ থাকে না।'
      },
      explanation: {
        en: 'Closing a subpath with Z instructs the renderer to apply linejoin styling across the start and end intersection smoothly.',
        bn: 'Z কমান্ড রেখার প্রান্ত দুটোকে নিখুঁতভাবে যুক্ত করে মসৃণ কর্নার জয়েন্ট নিশ্চিত করে।'
      }
    },
    {
      id: 'll-ex3',
      kind: 'mcq',
      topic: 'arc-command-sweep-flag-rotation',
      question: {
        en: 'In the elliptical arc command "A rx ry rot large sweep x y", what visual change occurs when "sweep-flag" is changed from 0 to 1?',
        bn: 'উপবৃত্তাকার আর্ক কমান্ড "A rx ry rot large sweep x y"-তে যখন "sweep-flag" ০ থেকে বদলে ১ করা হয়, তখন দৃশ্যে কী পরিবর্তন ঘটে?'
      },
      options: [
        {
          en: 'The arc flips from drawing in a counter-clockwise (negative angle) direction to drawing in a clockwise (positive angle) direction between the two points',
          bn: 'আর্কটি দুই বিন্দুর মধ্যে ঘড়ির কাঁটার বিপরীত দিকে (ঋণাত্মক কোণ) ঘোরার বদলে ঘড়ির কাঁটার দিকে (ধনাত্মক কোণ) ঘুরে আঁকা হয়'
        },
        {
          en: 'The line color changes from black to solid yellow',
          bn: 'লাইনের রঙ কালো থেকে পরিবর্তন হয়ে হলুদ হয়ে যায়'
        },
        {
          en: 'The shape is converted into an audio file',
          bn: 'শেপটি একটি অডিও ফাইলে পরিণত হয়'
        },
        {
          en: 'Sweep-flag 1 causes the monitor display to reboot immediately',
          bn: 'সুইপ ফ্ল্যাগ ১ দিলে সাথে সাথে কম্পিউটার রিস্টার্ট নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'sweep-flag: 0 = counter-clockwise, 1 = clockwise.',
        bn: 'sweep-flag: 0 = ঘড়ির উল্টো দিকে, 1 = ঘড়ির কাঁটার দিকে।'
      },
      explanation: {
        en: 'The sweep-flag determines whether the arc curve sweeps through positive (clockwise) or negative (counter-clockwise) angles.',
        bn: 'sweep-flag নির্দেশ করে আর্কটি ঘড়ির কাঁটার দিকে নাকি বিপরীত দিকে ঘুরে আঁকা হবে।'
      }
    },
    {
      id: 'll-ex4',
      kind: 'mcq',
      topic: 'fill-rule-evenodd-donut-hole',
      question: {
        en: 'How does setting "fill-rule=\'evenodd\'" enable rendering a donut shape with a transparent hole in the middle using a single <path>?',
        bn: 'একটিমাত্র <path> দিয়ে মাঝখানে ফাঁপা ছিদ্রযুক্ত ডোনাট শেপ আঁকার সময় "fill-rule=\'evenodd\'" কীভাবে কাজ করে?'
      },
      options: [
        {
          en: 'It casts a ray from any point to infinity: points crossing an even number of path edges are considered outside (transparent), while points crossing an odd number of edges are filled with color',
          bn: 'এটি যেকোনো বিন্দু থেকে অসীমের দিকে একটি কাল্পনিক রশ্মি টানে: যে বিন্দুগুলো জোড় সংখ্যক রেখা পার হয় সেগুলো বাইরে (ফাঁপা ও স্বচ্ছ) গণ্য হয়, আর বিজোড় সংখ্যক রেখা পার হওয়া অংশগুলোতে রঙ ভরে'
        },
        {
          en: 'By automatically deleting 50 percent of the SVG path coordinates',
          bn: 'এসভিজি পাথের ৫০ শতাংশ কোঅর্ডিনেট স্বয়ংক্রিয়ভাবে মুছে দিয়ে'
        },
        {
          en: 'Evenodd was banned by the International Standards Organization in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক সংস্থা evenodd নিষিদ্ধ করেছিল'
        },
        {
          en: 'Evenodd forces all shapes to turn into perfect squares',
          bn: 'evenodd সব শেপকে নিখুঁত বর্গক্ষেত্রে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Ray crossing odd edges = filled; ray crossing even edges = empty hole.',
        bn: 'কাল্পনিক রশ্মি বিজোড় রেখা পার হলে রঙ পায়, জোড় রেখা পার হলে ফাঁকা থাকে।'
      },
      explanation: {
        en: 'The evenodd rule counts path boundary crossings; interior holes cross two boundaries (even), remaining unpainted.',
        bn: 'evenodd নিয়মটি রেখা পার হওয়ার সংখ্যা গুণে ফাঁপা অংশকে স্বচ্ছ রাখতে সাহায্য করে।'
      }
    }
  ],
  quiz: {
    id: 'lead-lines-quiz',
    title: {
      en: 'SVG Shapes, Path Grammar, and Bézier Curves Quiz',
      bn: 'এসভিজি শেপস, পাথ ব্যাকরণ ও বেজিয়ার কার্ভ কুইজ'
    },
    questions: [
      {
        id: 'llq-q1',
        kind: 'mcq',
        topic: 'cubic-bezier-control-points',
        question: {
          en: 'In the cubic Bézier command "C x1 y1, x2 y2, x y", what do the coordinate pairs (x1, y1) and (x2, y2) represent?',
          bn: 'কিউবিক বেজিয়ার কমান্ড "C x1 y1, x2 y2, x y"-তে (x1, y1) এবং (x2, y2) স্থানাঙ্ক জোড়া দুটি কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'They represent the two directional control points (tangent handles) that pull and sculpt the curvature of the line before it terminates at destination point (x, y)',
            bn: 'তারা দুটি নিয়ন্ত্রণ বিন্দু (ট্যানজেন্ট হ্যান্ডেল) নির্দেশ করে যা রেখাটি গন্তব্য বিন্দু (x, y)-তে শেষ হওয়ার আগে তার বক্রতাকে টেনে বাঁকিয়ে দেয়'
          },
          {
            en: 'They represent the width and height of the user computer monitor',
            bn: 'তারা ব্যবহারকারীর মনিটরের প্রস্থ ও উচ্চতা নির্দেশ করে'
          },
          {
            en: 'They are random dummy numbers ignored by the browser parser',
            bn: 'তারা এলোমেলো সংখ্যা যা ব্রাউজার পার্সার অগ্রাহ্য করে'
          },
          {
            en: 'Because control points format the client solid-state drive',
            bn: 'কারণ কন্ট্রোল পয়েন্ট হার্ড ড্রাইভ ফরম্যাট করে ফেলে'
          }
        ],
      answer: 0,
      hint: {
        en: 'Cubic Bézier uses two control handles and one end point.',
        bn: 'কিউবিক বেজিয়ারে দুটি কন্ট্রোল হ্যান্ডেল এবং একটি শেষ বিন্দু থাকে।'
      },
      explanation: {
          en: 'Cubic curves rely on two handles to define starting and ending slope vectors, creating smooth organic contours.',
          bn: 'দুটি কন্ট্রোল পয়েন্ট বক্ররেখার বাঁক ও ঢাল নির্ধারণ করে মসৃণ বক্রতা তৈরি করে।'
        }
      },
      {
        id: 'llq-q2',
        kind: 'mcq',
        topic: 'smooth-cubic-s-command-mirroring',
        question: {
          en: 'What mathematical calculation does the smooth cubic command "S x2 y2, x y" perform automatically?',
          bn: 'স্মুথ কিউবিক কমান্ড "S x2 y2, x y" স্বয়ংক্রিয়ভাবে কোন গাণিতিক কাজটি সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It automatically mirrors the second control point of the previous cubic command across the current point, ensuring continuous curvature without an angular kink',
            bn: 'এটি পূর্ববর্তী কিউবিক কমান্ডের দ্বিতীয় কন্ট্রোল পয়েন্টটিকে বর্তমান বিন্দুর সাপেক্ষে স্বয়ংক্রিয়ভাবে প্রতিফলিত করে, ফলে কোনো খাঁজ না পড়ে মসৃণ বক্ররেখা তৈরি হয়'
          },
          {
            en: 'It multiplies the current coordinates by 100',
            bn: 'এটি বর্তমান স্থানাঙ্ককে ১০০ দিয়ে গুণ করে ফেলে'
          },
          {
            en: 'The S command converts the SVG into an encrypted ZIP file',
            bn: 'S কমান্ড এসভিজিকে একটি এনক্রিপ্ট করা জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'Because S was invented by international postal authorities in 2021',
            bn: 'কারণ ২০২১ সালে আন্তর্জাতিক ডাক সংস্থা S তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'S = Smooth continuation: mirrors the previous control point so you only specify the second handle.',
          bn: 'S পূর্ববর্তী কন্ট্রোল পয়েন্টটিকে প্রতিফলিত করে রেখাকে মসৃণভাবে এগিয়ে নিয়ে যায়।'
        },
        explanation: {
          en: 'The S command creates G1 continuity by reflecting the preceding control point, eliminating sharp discontinuities.',
          bn: 'S কমান্ড পূর্ববর্তী কন্ট্রোল পয়েন্ট প্রতিফলিত করে বক্ররেখাকে সম্পূর্ণ মসৃণ রাখে।'
        }
      },
      {
        id: 'llq-q3',
        kind: 'mcq',
        topic: 'axis-aligned-h-and-v-commands',
        question: {
          en: 'Why do production SVG icon systems prefer "H" and "V" commands over "L" for rectilinear shapes?',
          bn: 'প্রোডাকশন আইকন সিস্টেমে সোজা চতুর্ভুজাকৃতির শেপ আঁকতে "L"-এর চেয়ে "H" এবং "V" কমান্ড কেন বেশি পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'H and V require only a single coordinate number instead of an (x, y) pair, reducing path string file size by up to 30 percent while preventing diagonal drift bugs',
            bn: 'H এবং V-তে (x, y) জোড়ার বদলে কেবল একটি সংখ্যা দিতে হয়, যা পাথের সাইজ ৩০ শতাংশ পর্যন্ত কমায় এবং রেখা বাঁকা হওয়ার ঝুঁকি দূর করে'
          },
          {
            en: 'Because H and V automatically increase monitor refresh rates to 144Hz',
            bn: 'কারণ H এবং V মনিটরের রিফ্রেশ রেট ১৪৪ হার্টজে বাড়িয়ে দেয়'
          },
          {
            en: 'L commands were banned in SVG2 specifications',
            bn: 'কারণ SVG2 স্পেসিফিকেশনে L কমান্ড নিষিদ্ধ করা হয়েছিল'
          },
          {
            en: 'To prevent computer processors from overheating',
            bn: 'যাতে প্রসেসর অতিরিক্ত গরম না হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'H and V take only 1 parameter (x or y). Fewer bytes = smaller SVG files.',
          bn: 'H ও V কেবল ১টি প্যারামিটার নেয়, ফলে ফাইলের সাইজ অনেক ছোট হয়।'
        },
        explanation: {
          en: 'Axis-aligned commands cut coordinate byte payloads significantly, optimizing icon delivery across high-volume networks.',
          bn: 'একটি করে সংখ্যা ব্যবহারের মাধ্যমে H ও V ফাইল সাইজ ছোট রাখতে সাহায্য করে।'
        }
      },
      {
        id: 'llq-q4',
        kind: 'mcq',
        topic: 'large-arc-flag-threshold',
        question: {
          en: 'In an SVG elliptical arc command, under what angular condition must "large-arc-flag" be set to 1?',
          bn: 'এসভিজি উপবৃত্তাকার আর্ক কমান্ডে কোন কোণ পরিমাপের শর্তে "large-arc-flag" মান ১ নির্ধারণ করতে হয়?'
        },
        options: [
          {
            en: 'When the requested arc sweep spans an angle strictly greater than 180 degrees (a major arc)',
            bn: 'যখন তৈরি করা বৃত্তচাপটি ১৮০ ডিগ্রির চেয়ে বেশি কোণ জুড়ে বিস্তৃত হয় (একটি বৃহচ্চাপ বা মেজর আর্ক)'
          },
          {
            en: 'When the SVG file is larger than 10 megabytes',
            bn: 'যখন এসভিজি ফাইলের আকার ১০ মেগাবাইটের চেয়ে বড় হয়'
          },
          {
            en: 'When the line is drawn on a television screen',
            bn: 'যখন রেখাটি টেলিভিশন স্ক্রিনে দেখানো হয়'
          },
          {
            en: 'Because large-arc-flag was created by international shipping lines in 2019',
            bn: 'কারণ ২০১৯ সালে শিপিং কোম্পানি এটি তৈরি করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Arc > 180 degrees = large-arc-flag 1; Arc <= 180 degrees = large-arc-flag 0.',
          bn: '১৮০ ডিগ্রির বেশি হলে ফ্ল্যাগ ১; ১৮০ ডিগ্রির কম বা সমান হলে ফ্ল্যাগ ০।'
        },
      explanation: {
        en: 'The large-arc-flag discriminates between the acute arc of 180 degrees or less and the major arc over 180 degrees.',
        bn: 'কোণ ১৮০ ডিগ্রির বেশি হলে বৃহচ্চাপ আঁকার জন্য লার্জ-আর্ক ফ্ল্যাগ ব্যবহার করা হয়।'
      }
      }
    ]
  }
};
