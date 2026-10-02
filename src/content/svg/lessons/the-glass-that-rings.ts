import type { Lesson } from '../../../lib/types';

export const glassThatRingsLesson: Lesson = {
  slug: 'the-glass-that-rings',
  tech: 'svg',
  title: {
    en: 'Interactive SVG — DOM Scripting, Events, and Matrix Transforms',
    bn: 'ইন্টারেক্টিভ এসভিজি: ডম স্ক্রিপ্টিং, ইভেন্ট ও ম্যাট্রিক্স রূপান্তর'
  },
  summary: {
    en: 'Because SVG elements are first-class DOM nodes, they natively support browser event handling, keyboard focus, and JavaScript manipulation. In this lesson, you will master interactive vector scripting. Attach pointer listeners (click, pointerenter, pointerdown) to individual vector paths. Configure the specialized pointer-events property (visiblePainted, all, none) to create thumb-friendly transparent hit targets. Convert screen pixel coordinates into SVG user space using getScreenCTM() inverse matrices. Explore keyboard navigation with tabindex, ARIA roles for accessibility, and event bubbling boundaries across <use> shadow instances. Implement an executable screen-to-SVG coordinate transformation engine in TypeScript.',
    bn: 'এসভিজি উপাদানগুলো ডমের প্রথম শ্রেণীর নোড হওয়ায় তারা প্রাকৃতিকভাবে ব্রাউজার ইভেন্ট হ্যান্ডলিং, কীবোর্ড ফোকাস এবং জাভাস্ক্রিপ্ট নিয়ন্ত্রণ সমর্থন করে। এই পাঠে আপনি ইন্টারেক্টিভ ভেক্টর স্ক্রিপ্টিং শিখবেন। ভেক্টর পাথে পয়েন্টার লিসেনার (click, pointerenter, pointerdown) যুক্ত করা শিখুন। pointer-events প্রপার্টি (visiblePainted, all, none) দিয়ে টাচ-বান্ধব স্বচ্ছ হিট টার্গেট তৈরি করুন। getScreenCTM() ইনভার্স ম্যাট্রিক্স দিয়ে স্ক্রিন পিক্সেলকে অভ্যন্তরীণ এসভিজি স্থানাঙ্কে রূপান্তর করুন। tabindex দিয়ে কীবোর্ড নেভিগেশন, অ্যাক্সেসিবিলিটি নিশ্চিত করতে ARIA রোলস এবং <use> শ্যাডো বাউন্ডারির ইভেন্ট ব্যবস্থার নিয়ম জানবেন। এখানে টাইপস্ক্রিপ্টে সরাসরি কার্যকর স্ক্রিন-টু-এসভিজি স্থানাঙ্ক রূপান্তর ইঞ্জিন বাস্তবায়ন করা হয়েছে।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'svg-dom-event-architecture-hit-testing',
      text: {
        en: 'The Event Model of SVG: Free Geometric Hit Testing',
        bn: 'এসভিজি ইভেন্ট মডেল: নিখুঁত জ্যামিতিক হিট টেস্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build interactive dashboards or maps, Scalable Vector Graphics (SVG) provides built-in geometric hit testing without requiring complex math libraries.',
        bn: 'আপনি যখন ইন্টারেক্টিভ ড্যাশবোর্ড বা মানচিত্র তৈরি করেন, তখন স্কেলেবল ভেক্টর গ্রাফিক্স (SVG) কোনো জটিল থার্ড-পার্টি লাইব্রেরি ছাড়াই নিখুঁত জ্যামিতিক হিট টেস্টিং সুবিধা দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In HTML5 Canvas, the entire graphic is a flat bitmap grid of pixels; detecting whether a user clicked inside a circle requires the developer to manually calculate distance formulas or maintain an offscreen color-picking buffer. In contrast, SVG elements (<path>, <circle>, <rect>) exist directly in the browser Document Object Model (DOM). When a user clicks or hovers, the browser rendering engine performs hardware-accelerated geometric hit testing against the exact vector boundary contours of that specific element. You simply attach standard event listeners using "element.addEventListener(\'click\', handler)". Furthermore, developers control which regions respond to pointer events using the specialized "pointer-events" property, expanding thin vector strokes into generous, finger-friendly touch targets for mobile interfaces.',
        bn: 'সাধারণ এইচটিএমএল৫ ক্যানভাসে পুরো ছবিটি পিক্সেলের একটি সমতল বিটম্যাপ গ্রিড; ব্যবহারকারী কোনো বৃত্তের ওপর ক্লিক করেছেন কি না তা বুঝতে ডেভেলপারকে ম্যানুয়ালি দূরত্বের গাণিতিক সূত্র লিখতে হয়। কিন্তু এসভিজি উপাদানগুলো (<path>, <circle>, <rect>) সরাসরি ব্রাউজারের ডম (DOM) ট্রির ভেতরে অবস্থান করে। ব্যবহারকারী যখন মাউস নেন বা ক্লিক করেন, তখন ব্রাউজার নিজেই প্রতিটি উপাদানের নিখুঁত ভেক্টর সীমানা পরীক্ষা করে দেখে। আপনি খুব সহজেই "element.addEventListener(\'click\', handler)" দিয়ে সাধারণ ইভেন্ট লিসেনার যুক্ত করতে পারেন। এর পাশাপাশি ডেভেলপাররা "pointer-events" প্রপার্টি দিয়ে নিয়ন্ত্রণ করতে পারেন কোনো উপাদানের কোন অংশ ক্লিকে সাড়া দেবে, যা মোবাইল ইন্টারফেসে সরু রেখাকেও আঙুলে স্পর্শযোগ্য সহজ বাটন বানাতে সাহায্য করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'pointer-events-visiblepainted',
          def: {
            en: 'The default SVG pointer mode where elements only receive mouse and touch events on regions with a visible fill or stroke.',
            bn: 'ডিফল্ট এসভিজি পয়েন্টার মোড যেখানে দৃশ্যমান ফিল বা স্ট্রোক থাকা অংশগুলোতে কেবল ক্লিক ও স্পর্শ ইভেন্ট কাজ করে।'
          }
        },
        {
          term: 'pointer-events-all',
          def: {
            en: 'A pointer mode where the entire bounding geometry intercepts events, even if fill and stroke are set to none or fully transparent.',
            bn: 'এমন একটি মোড যেখানে ফিল ও স্ট্রোক সম্পূর্ণ স্বচ্ছ হলেও পুরো জ্যামিতিক এলাকা স্পর্শ ও ক্লিক গ্রহণ করে।'
          }
        },
        {
          term: 'getscreenctm-matrix',
          def: {
            en: 'A DOM method returning the Current Transformation Matrix (CTM) mapping internal SVG user coordinates to physical screen coordinates.',
            bn: 'একটি ডম মেথড যা অভ্যন্তরীণ এসভিজি স্থানাঙ্ককে স্ক্রিনের শারীরিক পিক্সেলে রূপান্তর করার জন্য ট্রান্সফরমেশন ম্যাট্রিক্স প্রদান করে।'
          }
        },
        {
          term: 'svg-aria-semantics',
          def: {
            en: 'Accessibility attributes (role="img", <title>, <desc>) enabling assistive screen readers to announce vector diagrams accurately.',
            bn: 'অ্যাক্সেসিবিলিটি অ্যাট্রিবিউট যা স্ক্রিন রিডার ব্যবহারকারীদের জন্য ভেক্টর ডায়াগ্রামের অর্থ স্পষ্টভাবে বর্ণনা করে।'
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
      id: 'pointer-events-modes-table',
      text: {
        en: 'Comparative Behaviors of SVG pointer-events Values',
        bn: 'এসভিজি pointer-events মানসমূহের তুলনামূলক বিশ্লেষণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The pointer-events property dictates whether fills, strokes, or invisible transparent bounds capture mouse and touch interactions.',
        bn: 'pointer-events প্রপার্টি নির্ধারণ করে কোনো উপাদানের ফিল, স্ট্রোক নাকি অদৃশ্য স্বচ্ছ সীমানা মাউস ও টাচ ইভেন্ট গ্রহণ করবে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'pointer-events Value', bn: 'pointer-events মান' },
        { en: 'Fill Interception', bn: 'ফিল কভারেজ' },
        { en: 'Stroke Interception', bn: 'স্ট্রোক কভারেজ' },
        { en: 'Primary Architectural Use Case', bn: 'প্রধান ব্যবহারের ক্ষেত্র' }
      ],
      rows: [
        [
          { en: 'visiblePainted (default)', bn: 'visiblePainted (ডিফল্ট)' },
          { en: 'Only if fill is not none', bn: 'কেবল ফিল উপস্থিত থাকলে' },
          { en: 'Only if stroke is not none', bn: 'কেবল স্ট্রোক উপস্থিত থাকলে' },
          { en: 'Standard vector drawings where unpainted interior regions must let clicks fall through', bn: 'স্ট্যান্ডার্ড ড্রয়িং যেখানে ফাঁপা অংশ ভেদ করে পেছনের উপাদানে ক্লিক যেতে হয়' }
        ],
        [
          { en: 'all', bn: 'all' },
          { en: 'Yes, even if fill is none', bn: 'হ্যাঁ, এমনকি ফিল না থাকলেও' },
          { en: 'Yes, even if stroke is none', bn: 'হ্যাঁ, এমনকি স্ট্রোক না থাকলেও' },
          { en: 'Creating generous 48px transparent thumb targets over thin 1px vector lines', bn: 'সরু ১ পিক্সেল লাইনের ওপর স্পর্শযোগ্য ৪৮ পিক্সেলের অদৃশ্য টাচ বাটন তৈরি' }
        ],
        [
          { en: 'none', bn: 'none' },
          { en: 'Ignored completely', bn: 'সম্পূর্ণ অগ্রাহ্য' },
          { en: 'Ignored completely', bn: 'সম্পূর্ণ অগ্রাহ্য' },
          { en: 'Decorative vector overlays, crosshairs, and watermark art that must not block clicks', bn: 'ডেকোরেটিভ ওভারলে ও জলছাপ যা পেছনের উপাদানের ক্লিকে কোনো বাধা দেবে না' }
        ],
        [
          { en: 'fill', bn: 'fill' },
          { en: 'Captures across whole fill', bn: 'সম্পূর্ণ ফিল জুড়ে' },
          { en: 'Ignored completely', bn: 'সম্পূর্ণ অগ্রাহ্য' },
          { en: 'Interactive choropleth region maps where borders are shared and non-clickable', bn: 'মানচিত্রের বিভিন্ন অঞ্চল যেখানে সীমানা রেখায় ক্লিক নেওয়ার প্রয়োজন নেই' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-screen-to-svg-transform-code',
      text: {
        en: 'Executable Screen-to-SVG Coordinate Transformation Engine',
        bn: 'স্ক্রিন থেকে এসভিজি স্থানাঙ্ক রূপান্তরের বাস্তব টাইপস্ক্রিপ্ট কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates internal SVG canvas coordinates from screen mouse event coordinates (clientX: 300, clientY: 200) under a 2x zoom scale with 50-pixel pan offsets.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি স্ক্রিনের মাউস ইভেন্ট স্থানাঙ্ক (clientX: ৩০০, clientY: ২০০) থেকে ২ গুণ জুম ও ৫০ পিক্সেল প্যান অবস্থায় অভ্যন্তরীণ এসভিজি স্থানাঙ্ক হিসাব করে।'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Screen to SVG User Coordinate Transformation

interface ScreenCoordinate {
  clientX: number;
  clientY: number;
}

interface SvgTransformedPoint {
  screenX: number;
  screenY: number;
  svgX: number;
  svgY: number;
}

function convertScreenToSvgCoordinates(
  screen: ScreenCoordinate,
  zoomScale: number,
  panOffsetX: number,
  panOffsetY: number
): SvgTransformedPoint {
  // Transformation formula: svgCoord = (screenCoord - panOffset) / zoomScale
  const internalX = Math.round((screen.clientX - panOffsetX) / zoomScale);
  const internalY = Math.round((screen.clientY - panOffsetY) / zoomScale);

  return {
    screenX: screen.clientX,
    screenY: screen.clientY,
    svgX: internalX,
    svgY: internalY
  };
}

const clickPosition: ScreenCoordinate = { clientX: 300, clientY: 200 };
const result = convertScreenToSvgCoordinates(clickPosition, 2, 50, 50);

console.log('Client pointer screen X:', result.screenX);
console.log('Client pointer screen Y:', result.screenY);
console.log('Mapped SVG internal coordinate X:', result.svgX);
console.log('Mapped SVG internal coordinate Y:', result.svgY);

// prints: Client pointer screen X: 300
// prints: Client pointer screen Y: 200
// prints: Mapped SVG internal coordinate X: 125
// prints: Mapped SVG internal coordinate Y: 75`
    },
    {
      type: 'heading',
      id: 'accessibility-and-keyboard-navigation',
      text: {
        en: 'Accessibility and Keyboard Navigation for Vector Graphics',
        bn: 'ভেক্টর গ্রাফিক্সের অ্যাক্সেসিবিলিটি এবং কীবোর্ড নেভিগেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'An essential requirement for accessible web engineering is ensuring that interactive vector graphics are fully operable without a mouse. For purely decorative vector icons, always apply "aria-hidden=\'true\'" so screen readers silently ignore the visual chrome. For informative diagrams, provide "role=\'img\'" on the root <svg> alongside a descriptive child "<title>" and "<desc>" element linked with "aria-labelledby". For interactive controls (such as clickable diagram regions or custom SVG buttons), add "tabindex=\'0\'", set "role=\'button\'", and attach keyboard event listeners for the Enter and Space keys. By honoring these accessibility contracts, assistive technologies can announce the purpose and state of vector elements to every visitor.',
        bn: 'অ্যাক্সেসিবল ওয়েব ইঞ্জিনিয়ারিংয়ের একটি অপরিহার্য শর্ত হলো মাউস ছাড়াই যাতে যেকোনো ইন্টারেক্টিভ ভেক্টর গ্রাফিক্স কীবোর্ড দিয়ে চালানো যায় তা নিশ্চিত করা। সাধারণ ডেকোরেটিভ আইকনে সর্বদা "aria-hidden=\'true\'" দেওয়া উচিত যাতে স্ক্রিন রিডার অপ্রয়োজনীয় প্রতীকগুলো নীরবে এড়িয়ে যায়। তথ্যবহুল ইনফোগ্রাফিক চিত্রে মূল <svg> ট্যাগে "role=\'img\'" এবং ভেতরে অর্থপূর্ণ "<title>" ও "<desc>" ট্যাগ যুক্ত করা উচিত। আর ইন্টারেক্টিভ উপাদানের ক্ষেত্রে (যেমন ক্লিকযোগ্য ম্যাপ বা বাটন) "tabindex=\'0\'" এবং "role=\'button\'" দিয়ে কীবোর্ডের Enter ও Space বোতামের ইভেন্ট হ্যান্ডলার রাখা বাধ্যতামূলক। এই নিয়মগুলো মেনে চললে দৃষ্টিপ্রতিবন্ধী ও সহায়ক প্রযুক্তি ব্যবহারকারী দর্শকরাও কোনো বাধা ছাড়াই ওয়েবসাইটের সমস্ত উপাদান ব্যবহার করতে পারেন।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'SVG provides free geometric hit testing: Attach click listeners directly to paths without writing custom collision math.',
          bn: 'এসভিজিতে অন্তর্নির্মিত হিট টেস্টিং সুবিধা রয়েছে: কোনো গাণিতিক হিসাব ছাড়াই সরাসরি পাথে ক্লিক লিসেনার যুক্ত করুন।'
        },
        {
          en: 'Use pointer-events all for mobile targets: Expand thin 1px lines into comfortable 48px touch regions using transparent fills.',
          bn: 'মোবাইলে pointer-events all ব্যবহার করুন: স্বচ্ছ ফিল দিয়ে সরু ১ পিক্সেল লাইনের ওপর বড় স্পর্শযোগ্য টাচ এরিয়া তৈরি করুন।'
        },
        {
          en: 'Convert coordinates with getScreenCTM: Invert the matrix to map clientX/Y directly into SVG user units accurately.',
          bn: 'getScreenCTM দিয়ে স্থানাঙ্ক রূপান্তর করুন: ইনভার্স ম্যাট্রিক্স ব্যবহার করে মাউস ক্লিককে আসল এসভিজি এককে রূপান্তর করুন।'
        },
        {
          en: 'Make interactive shapes keyboard accessible: Add tabindex="0", role="button", and handle Enter/Space key events.',
          bn: 'ইন্টারেক্টিভ শেপ কীবোর্ডে সচল রাখুন: tabindex="0" ও role="button" দিন এবং এন্টার ও স্পেস কি সমর্থন করুন।'
        }
      ]
    }
  ],
  nextLesson: {
    slug: 'the-cathedral-rehearsal',
    tech: 'svg',
    title: {
      en: 'SVG Production Capstone — Icon Systems, Sprites, and Optimization',
      bn: 'এসভিজি প্রোডাকশন ক্যাপস্টোন: আইকন সিস্টেম, স্প্রাইট ও অপ্টিমাইজেশন'
    }
  },
  exercises: [
    {
      id: 'gr-ex1',
      kind: 'mcq',
      topic: 'getscreenctm-coordinate-conversion',
      question: {
        en: 'Why is calling svgElement.getScreenCTM().inverse() required when converting mouse click coordinates (event.clientX/Y) into SVG coordinates?',
        bn: 'মাউস ক্লিকের স্থানাঙ্ক (event.clientX/Y)-কে এসভিজি স্থানাঙ্কে রূপান্তর করার সময় svgElement.getScreenCTM().inverse() কেন প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Because getScreenCTM() represents the forward matrix from SVG units to screen pixels; inverting that matrix allows transforming screen pixel coordinates backward into the internal SVG user coordinate space, automatically accounting for CSS scaling, viewBox zoom, and page scrolling',
          bn: 'কারণ getScreenCTM() এসভিজি থেকে স্ক্রিন পিক্সেলে যাওয়ার ম্যাট্রিক্স সরবরাহ করে; ম্যাট্রিক্সটিকে ইনভার্স (উল্টো) করলে তা সিএসএস স্কেলিং, viewBox জুম এবং পেজ স্ক্রলিংয়ের হিসাব সমন্বয় করে স্ক্রিন পিক্সেলকে নিখুঁতভাবে অভ্যন্তরীণ এসভিজি স্থানাঙ্কে রূপান্তর করে'
        },
        {
          en: 'getScreenCTM permanently formats the client computer solid-state drive',
          bn: 'getScreenCTM কম্পিউটারের হার্ড ড্রাইভ চিরতরে ফরম্যাট করে ফেলে'
        },
        {
          en: 'Because inverting matrices was banned by international law in 2021',
          bn: 'কারণ ২০২১ সালে আন্তর্জাতিক আইনে ম্যাট্রিক্স ইনভার্স নিষিদ্ধ করা হয়েছিল'
        },
        {
          en: 'getScreenCTM converts all vector graphics into JPEG images',
          bn: 'getScreenCTM সব ভেক্টর গ্রাফিক্সকে জেপিইজি ছবিতে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Screen coordinates -> Inverse CTM Matrix -> True SVG drawing coordinates.',
        bn: 'স্ক্রিন স্থানাঙ্ক -> ইনভার্স সিటీఎం ম্যাট্রিক্স -> আসল এসভিজি ড্রয়িং স্থানাঙ্ক।'
      },
      explanation: {
        en: 'The inverse transformation matrix mathematically reverses all active browser viewBox scaling, letterboxing, and CSS translations.',
        bn: 'ইনভার্স ম্যাট্রিক্স ব্রাউজারের সমস্ত জুম ও স্কেলিংয়ের হিসাব উল্টে দিয়ে আসল এসভিজি বিন্দুটি বের করে।'
      }
    },
    {
      id: 'gr-ex2',
      kind: 'mcq',
      topic: 'pointer-events-touch-target-expansion',
      question: {
        en: 'How do mobile frontend engineers use pointer-events="all" to solve the "fat finger" touch problem on thin vector lines?',
        bn: 'মোবাইল ফ্রন্টএন্ড প্রকৌশলীরা সরু ভেক্টর লাইনে সহজে স্পর্শ করার সমস্যা সমাধান করতে pointer-events="all" কীভাবে ব্যবহার করেন?'
      },
      options: [
        {
          en: 'They wrap the thin line inside a transparent bounding rectangle (fill="none" stroke="none") and apply pointer-events="all", creating an invisible 48x48 pixel touch target that captures taps easily',
          bn: 'তারা সরু লাইনটির চারপাশে একটি স্বচ্ছ বাউন্ডারি আয়তক্ষেত্র (fill="none" stroke="none") তৈরি করে তাতে pointer-events="all" দেন, ফলে একটি অদৃশ্য ৪৮×৪৮ পিক্সেলের টাচ বাটন তৈরি হয় যা সহজে স্পর্শ গ্রহণ করে'
        },
        {
          en: 'By forcing users to wear magnifying glasses while browsing',
          bn: 'ব্যবহারকারীদের বিবর্ধক কাচ বা চশমা পরতে বাধ্য করে'
        },
        {
          en: 'pointer-events was banned in the SVG 1.1 specification',
          bn: 'কারণ SVG 1.1 স্পেসিফিকেশনে pointer-events নিষিদ্ধ ছিল'
        },
        {
          en: 'To reduce mobile internet data consumption by 80 percent',
          bn: 'মোবাইলের ইন্টারনেটের খরচ ৮০ শতাংশ কমাতে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Transparent shape + pointer-events: all = wide invisible click target.',
        bn: 'স্বচ্ছ শেপ + pointer-events: all = বড় অদৃশ্য ক্লিক বাটন।'
      },
      explanation: {
        en: 'Under pointer-events="all", shapes intercept events regardless of fill visibility, meeting mobile touch target accessibility standards.',
        bn: 'pointer-events="all" থাকলে রঙ না থাকলেও পুরো অদৃশ্য এলাকাটি স্পর্শ গ্রহণ করতে পারে।'
      }
    },
    {
      id: 'gr-ex3',
      kind: 'mcq',
      topic: 'use-element-event-bubbling',
      question: {
        en: 'When a user clicks on an SVG icon instantiated via <use href="#my-icon">, what element is reported as event.currentTarget in the event listener?',
        bn: '<use href="#my-icon">-এর মাধ্যমে প্রদর্শিত কোনো এসভিজি আইকনে ব্যবহারকারী ক্লিক করলে ইভেন্ট লিসেনারে event.currentTarget হিসেবে কোন উপাদানটি পাওয়া যায়?'
      },
      options: [
        {
          en: 'The <use> element instance itself, because the referenced <symbol> or <path> inside <defs> resides in a closed shadow boundary that cannot be directly targeted from outside',
          bn: '<use> উপাদানটি নিজে, কারণ <defs>-এর ভেতর থাকা আসল <symbol> বা <path> একটি সুরক্ষিত শ্যাডো বাউন্ডারিতে থাকে যা বাইরে থেকে সরাসরি ধরা যায় না'
        },
        {
          en: 'The entire browser window screen',
          bn: 'পুরো ব্রাউজার উইন্ডো স্ক্রিন'
        },
        {
          en: 'The client computer operating system desktop',
          bn: 'কম্পিউটারের ডেস্কটপ পর্দা'
        },
        {
          en: 'The <use> element was declared obsolete by the W3C in 2020',
          bn: 'কারণ ২০২০ সালে W3C এটি বাতিল করেছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Events terminate at the <use> host element, not inside the shadow tree.',
        bn: 'ইভেন্টগুলো <use> উপাদানে এসে শেষ হয়, শ্যাডো ট্রির ভেতরে ঢোকে না।'
      },
      explanation: {
        en: 'The cloned contents of <use> form a closed shadow tree; events bubble outward from the hosting <use> instance.',
        bn: '<use>-এর ভেতরের উপাদান শ্যাডো ট্রিতে সংরক্ষিত থাকে, তাই ইভেন্ট মূল <use> উপাদানেই ধরা পড়ে।'
      }
    },
    {
      id: 'gr-ex4',
      kind: 'mcq',
      topic: 'svg-keyboard-accessibility-requirements',
      question: {
        en: 'What three attributes and event handlers are required to make an interactive SVG element fully accessible to keyboard-only visitors?',
        bn: 'একটি ইন্টারেক্টিভ এসভিজি উপাদানকে কেবল কীবোর্ড ব্যবহারকারী দর্শনার্থীদের জন্য সম্পূর্ণ উপযোগী করতে কোন তিনটি জিনিস যুক্ত করা প্রয়োজন?'
      },
      options: [
        {
          en: 'tabindex="0" (to place it in the keyboard tab order), role="button" (to announce it as an interactive widget), and keydown event listeners for Enter and Space keys (to trigger the action)',
          bn: 'tabindex="0" (যাতে কীবোর্ডের ট্যাব চেপে উপাদানটিতে যাওয়া যায়), role="button" (স্ক্রিন রিডারে বাটন হিসেবে ঘোষণা করার জন্য) এবং Enter ও Space কি-এর জন্য keydown ইভেন্ট হ্যান্ডলার'
        },
        {
          en: 'Deleting the SVG file and replacing it with an animated GIF',
          bn: 'এসভিজি ফাইলটি মুছে ফেলে একটি অ্যানিমেটেড জিআইএফ বসানো'
        },
        {
          en: 'Increasing computer speaker volume to maximum level',
          bn: 'স্পিকারের ভলিউম সর্বোচ্চ পর্যায়ে বাড়িয়ে দেওয়া'
        },
        {
          en: 'Keyboard navigation was banned by international treaty in 2019',
          bn: 'কারণ ২০১৯ সালে কীবোর্ড নেভিগেশন নিষিদ্ধ করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Focusable (tabindex=0) + Semantic role (role=button) + Keyboard triggers (Enter/Space).',
        bn: 'ফোকাসযোগ্য (tabindex=0) + অর্থপূর্ণ রোল (role=button) + কীবোর্ড একশন (Enter/Space)।'
      },
      explanation: {
        en: 'Meeting accessibility standards demands focusability, assistive technology role declarations, and keyboard actuation parity.',
        bn: 'কীবোর্ডে চালানোর সুযোগ, স্ক্রিন রিডারের রোল এবং এন্টার/স্পেস কি সমর্থন পূর্ণাঙ্গ অ্যাক্সেসিবিলিটি নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    id: 'glass-that-rings-quiz',
    title: {
      en: 'Interactive SVG, DOM Scripting, and getScreenCTM Quiz',
      bn: 'ইন্টারেক্টিভ এসভিজি, ডম স্ক্রিপ্টিং ও getScreenCTM কুইজ'
    },
    questions: [
      {
        id: 'grq-q1',
        kind: 'mcq',
        topic: 'pointer-events-none-pass-through',
        question: {
          en: 'In an interactive mapping application, why would an engineer set pointer-events="none" on a vector grid overlay or weather radar layer?',
          bn: 'একটি ইন্টারেক্টিভ ম্যাপ অ্যাপ্লিকেশনে একজন প্রকৌশলী কেন ভেক্টর গ্রিড বা আবহাওয়া রাডার লেয়ারে pointer-events="none" নির্ধারণ করবেন?'
        },
        options: [
          {
            en: 'To make the visual layer completely transparent to mouse clicks and touch events, allowing users to interact with underlying map roads, buildings, and pins without interference',
            bn: 'ভিজ্যুয়াল লেয়ারটিকে মাউস ও টাচ ইভেন্টের কাছে সম্পূর্ণ অদৃশ্য রাখতে, যাতে ব্যবহারকারীরা কোনো বাধা ছাড়াই নিচের মানচিত্রের রাস্তা, ভবন বা পিনে ক্লিক করতে পারেন'
          },
          {
            en: 'To turn off the computer internet connection immediately',
            bn: 'কম্পিউটারের ইন্টারনেট সংযোগ সাথে সাথে বন্ধ করার জন্য'
          },
          {
            en: 'pointer-events: none converts the map into a printed paper poster',
            bn: 'এটি মানচিত্রটিকে একটি প্রিন্ট করা কাগজের পোস্টারে রূপান্তর করে'
          },
          {
            en: 'Because radar overlays were banned by international maritime law',
            bn: 'কারণ আন্তর্জাতিক নৌ আইনে রাডার ওভারলে নিষিদ্ধ ছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'pointer-events: none lets clicks pass straight through to whatever is underneath.',
          bn: 'pointer-events: none দিলে ক্লিকগুলো সরাসরি পেছনের উপাদানে চলে যায়।'
        },
        explanation: {
          en: 'Setting pointer-events to none prevents non-interactive decorative overlays from intercepting user gestures intended for underlying elements.',
          bn: 'এটি অপ্রয়োজনীয় ডেকোরেটিভ লেয়ারকে মাউস ক্লিক আটকানো থেকে বিরত রাখে।'
        }
      },
      {
        id: 'grq-q2',
        kind: 'mcq',
        topic: 'createsvgpoint-matrixtransform-pattern',
        question: {
          en: 'In the SVG DOM API, how does svg.createSVGPoint().matrixTransform(matrix) assist in coordinate transformations?',
          bn: 'এসভিজি ডম এপিআইতে svg.createSVGPoint().matrixTransform(matrix) কীভাবে স্থানাঙ্ক রূপান্তরে সাহায্য করে?'
        },
        options: [
          {
            en: 'It multiplies the 2D point (x, y) by the transformation matrix in native C++ browser code, returning the transformed coordinate with high performance and floating-point accuracy',
            bn: 'এটি ব্রাউজারের নেটিভ সি++ কোডে পয়েন্টটিকে (x, y) ট্রান্সফরমেশন ম্যাট্রিক্স দিয়ে গুণ করে এবং অত্যন্ত দ্রুত ও নির্ভুলভাবে রূপান্তরিত স্থানাঙ্ক ফেরত দেয়'
          },
          {
            en: 'It downloads new fonts from Google Fonts servers',
            bn: 'এটি গুগল ফন্টস সার্ভার থেকে নতুন ফন্ট ডাউনলোড করে'
          },
          {
            en: 'createSVGPoint permanently deletes the browser history',
            bn: 'এটি ব্রাউজারের হিস্ট্রি চিরতরে মুছে ফেলে'
          },
          {
            en: 'Because matrixTransform was banned by the W3C in 2021',
            bn: 'কারণ ২০২১ সালে W3C এটি নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native 2D affine matrix multiplication performed directly by the browser engine.',
          bn: 'ব্রাউজার ইঞ্জিন দ্বারা সরাসরি সম্পাদিত দ্রুতগতির দ্বিমাত্রিক ম্যাট্রিক্স গুণন।'
        },
        explanation: {
          en: 'matrixTransform applies affine matrix operations directly in native engine memory, avoiding complex manual JavaScript algebra.',
          bn: 'এই মেথডটি ব্রাউজারের অভ্যন্তরীণ স্মৃতিতে সরাসরি ম্যাট্রিক্স গুণ করে নিখুঁত স্থানাঙ্ক দেয়।'
        }
      },
      {
        id: 'grq-q3',
        kind: 'mcq',
        topic: 'aria-hidden-decorative-icons',
        question: {
          en: 'When an inline SVG icon accompanies a descriptive text label (e.g. <button><svg>...</svg> Download Invoice</button>), why is aria-hidden="true" required on the <svg>?',
          bn: 'একটি বাটনে লেখার সাথে যখন এসভিজি আইকন থাকে (যেমন <button><svg>...</svg> চালান ডাউনলোড</button>), তখন <svg>-এ aria-hidden="true" দেওয়া কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'To prevent screen readers from announcing redundant, unhelpful character noise (like "image" or confusing path fragments), ensuring the assistive technology reads only the meaningful button text',
            bn: 'স্ক্রিন রিডার যাতে অপ্রয়োজনীয় শব্দ বা বিভ্রান্তিকর পাথের সংকেত উচ্চারণ না করে তা রোধ করতে, ফলে দৃষ্টিপ্রতিবন্ধী ব্যক্তি কেবল অর্থপূর্ণ বাটনের লেখাটি পরিষ্কার শুনতে পান'
          },
          {
            en: 'Because aria-hidden increases internet download speeds by 50 percent',
            bn: 'কারণ aria-hidden ইন্টারনেটের গতি ৫০ শতাংশ বাড়িয়ে দেয়'
          },
          {
            en: 'aria-hidden turns the icon color into bright yellow',
            bn: 'aria-hidden আইকনের রঙ হলুদ করে তোলে'
          },
          {
            en: 'It was invented by international printer guilds in 2018',
            bn: 'কারণ ২০১৮ সালে প্রিন্টার গিল্ড এটি আবিষ্কার করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Decorative icon already has adjacent text. aria-hidden stops screen reader double-speaking.',
          bn: 'পাশে লেখা থাকলে আইকনে aria-hidden দিতে হয় যাতে স্ক্রিন রিডার অনর্থক শব্দ না পড়ে।'
        },
        explanation: {
          en: 'Hiding decorative SVGs eliminates auditory clutter for assistive technology users when the surrounding text already provides full context.',
          bn: 'পাশের লেখাটিই বাটনের অর্থ স্পষ্ট করে দেয়, তাই আইকনটি স্ক্রিন রিডার থেকে লুকিয়ে রাখা হয়।'
        }
      },
      {
        id: 'grq-q4',
        kind: 'mcq',
        topic: 'svg-bounding-client-rect-vs-getbboxt',
        question: {
          en: 'What is the architectural difference between element.getBoundingClientRect() and element.getBBox() on an SVG element?',
          bn: 'এসভিজি উপাদানের ক্ষেত্রে element.getBoundingClientRect() এবং element.getBBox()-এর মধ্যে প্রধান প্রযুক্তিগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'getBBox() returns the tight bounding box in the element own internal SVG user units without CSS transforms or screen zoom; getBoundingClientRect() returns the box in physical screen pixels including all viewport transforms and page scroll offsets',
            bn: 'getBBox() কোনো সিএসএস বা স্ক্রিন জুম ছাড়াই নিজস্ব অভ্যন্তরীণ এসভিজি এককে টাইট বাউন্ডিং বক্স দেয়; আর getBoundingClientRect() সমস্ত জুম, স্ক্রলিং ও ট্রান্সফর্ম সহ আসল স্ক্রিন পিক্সেলে মাপ দেয়'
          },
          {
            en: 'getBBox only works on rectangular elements while getBoundingClientRect is for circles',
            bn: 'getBBox শুধু আয়তক্ষেত্রে চলে আর getBoundingClientRect কেবল বৃত্তের জন্য'
          },
          {
            en: 'getBoundingClientRect formats the computer storage on execution',
            bn: 'getBoundingClientRect চালালে মেমরি মুছে যায়'
          },
          {
            en: 'Because getBBox was declared illegal by international maritime law in 2020',
            bn: 'কারণ ২০২০ সালে নৌ আইনে getBBox নিষিদ্ধ করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'getBBox = internal SVG coordinates. getBoundingClientRect = physical screen pixels.',
          bn: 'getBBox হলো অভ্যন্তরীণ এসভিজি স্থানাঙ্ক; getBoundingClientRect হলো আসল স্ক্রিন পিক্সেল।'
        },
        explanation: {
          en: 'getBBox evaluates geometry in the local coordinate space; getBoundingClientRect projects geometry into the browser viewport coordinate space.',
          bn: 'getBBox স্থানীয় জ্যামিতিক মাপ দেয়, অন্যদিকে getBoundingClientRect স্ক্রিনের দৃশ্যমান পিক্সেল পরিমাপ সরবরাহ করে।'
        }
      }
    ]
  }
};
