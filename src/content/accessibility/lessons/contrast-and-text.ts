import type { Lesson } from '../../../lib/types';

export const ContrastAndTextLesson: Lesson = {
  slug: 'contrast-and-text',
  tech: 'accessibility',
  title: {
    en: 'Color Contrast Ratios, Reflow & Typography Accessibility',
    bn: 'কালার কনট্রাস্ট রেশিও, রিফ্লো ও টাইপোগ্রাফি অ্যাক্সেসিবিলিটি'
  },
  summary: {
    en: 'Legible typography and sufficient luminance contrast are fundamental for low-vision visitors, users with color blindness, and anyone reading screens outdoors under glaring sunlight. WCAG Success Criterion 1.4.3 establishes contrast thresholds based on relative luminance calculations: standard body text requires a minimum contrast ratio of 4.5:1, while large text requires 3:1. Criterion 1.4.11 extends the 3:1 requirement to user interface components and focus indicators. In this lesson, you will master the mathematical formula behind relative luminance, examine the 320-pixel reflow rule allowing 400 percent browser zoom without horizontal scrolling, and discover why color alone must never be used to convey meaning.',
    bn: 'স্বল্পদৃষ্টিসম্পন্ন মানুষ, বর্ণান্ধ ব্যক্তি এবং রোদের মধ্যে খোলা আকাশের নিচে ফোন ব্যবহারকারীদের জন্য স্পষ্ট লেখা এবং উপযুক্ত রঙের কনট্রাস্ট অত্যন্ত জরুরি। ডব্লিউসিএজি নিয়ম ১.৪.৩ অনুযায়ী সাধারণ বডি লেখার জন্য ব্যাকগ্রাউন্ডের সাথে ন্যূনতম ৪.৫:১ এবং বড় লেখার জন্য ৩:১ কনট্রাস্ট রেশিও থাকা বাধ্যতামূলক। নিয়ম ১.৪.১১ অনুযায়ী বোতামের বর্ডার ও আইকনেও ৩:১ কনট্রাস্ট থাকতে হয়। এই পাঠে রিলেটিভ লুমিন্যান্স ও কনট্রাস্ট হিসাবের গাণিতিক সূত্র, ৩২০ পিক্সেলের রিফ্লো নিয়ম (যা ৪০০ শতাংশ জুম করলেও ডানে-বামে স্ক্রল হতে দেয় না) এবং তথ্য বোঝাতে কেবল রঙের উপর নির্ভর না করার গুরুত্ব শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Visual Perception and Luminance Contrast',
        bn: 'মূল ধারণা: দৃষ্টিগত উপলব্ধি ও লুমিন্যান্স কনট্রাস্ট'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you design interfaces, relative luminance contrast governs readability across every digital display, establishing how crisply typography detaches from underlying background pixels. Product designers often pick faint light-gray typography on white cards because it appears subtle on calibrated monitors. However, for a user with cataracts, glaucoma, or viewing a phone outdoors on a sunny day, low-contrast text washes out into an illegible blur.',
        bn: 'আপনি যখন ইন্টারফেস ডিজাইন করেন, আপেক্ষিক লুমিন্যান্স কনট্রাস্ট স্ক্রিনে লেখার স্পষ্টতা নির্ধারণ করে, যা লেখাকে ব্যাকগ্রাউন্ড থেকে আলাদা করে তোলে। ডিজাইনাররা প্রায়ই ভালো মনিটরে হালকা ধূসর লেখা দেখে আধুনিক ভাবেন। কিন্তু চোখের ছানি বা গ্লুকোমায় আক্রান্ত ব্যক্তিদের জন্য, অথবা তীব্র রোদে মোবাইল ব্যবহার করার সময় এই হালকা লেখা সম্পূর্ণ অদৃশ্য হয়ে যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Relative Luminance',
          def: {
            en: 'The relative brightness of any point in a colorspace, normalized to 0 for absolute black and 1 for absolute white',
            bn: 'যেকোনো রঙের আলোর আপেক্ষিক উজ্জ্বলতা, যেখানে নিখুঁত কালোকে ০ এবং নিখুঁত সাদাকে ১ ধরা হয়'
          }
        },
        {
          term: 'Contrast Ratio',
          def: {
            en: 'The mathematical ratio of relative luminance between the lighter color and darker color, ranging from 1:1 up to 21:1',
            bn: 'হালকা ও গাঢ় রঙের লুমিন্যান্সের গাণিতিক অনুপাত, যার মান ১:১ থেকে সর্বোচ্চ ২১:১ পর্যন্ত হতে পারে'
          }
        },
        {
          term: 'Responsive Reflow (WCAG 1.4.10)',
          def: {
            en: 'The requirement that content must flow in a single column down to 320 CSS pixels wide without horizontal scrolling',
            bn: 'ওয়েব পেজ ৩২০ পিক্সেল পর্যন্ত সংকুচিত হলেও যাতে ডানে-বামে স্ক্রল না করে এক কলামে সুন্দরভাবে ভেঙে নিচে নামে'
          }
        },
        {
          term: 'Non-Text Contrast (WCAG 1.4.11)',
          def: {
            en: 'The mandate that essential visual icons, input borders, and focus indicators maintain at least a 3:1 contrast ratio against backgrounds',
            bn: 'জরুরি আইকন, ইনপুট বক্সের বর্ডার এবং ফোকাস রিংয়ে ব্যাকগ্রাউন্ডের সাথে অন্তত ৩:১ কনট্রাস্ট বজায় রাখার নিয়ম'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'wcag-contrast-thresholds',
      text: {
        en: 'WCAG Conformance Contrast Thresholds',
        bn: 'ডব্লিউসিএজি কনট্রাস্টের মানদণ্ডসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Required Luminance Contrast Ratios Across WCAG Conformance Levels',
        bn: 'ডব্লিউসিএজি বিভিন্ন স্তরে প্রয়োজনীয় কালার কনট্রাস্ট রেশিও'
      },
      head: [
        { en: 'Element Category', bn: 'উপাদানের ধরন' },
        { en: 'Level AA Standard', bn: 'লেভেল এএ (মানদণ্ড)' },
        { en: 'Level AAA Enhanced', bn: 'লেভেল ট্রিপল এ (উচ্চ মানদণ্ড)' }
      ],
      rows: [
        [
          { en: 'Normal Body Text (< 18pt or < 14pt bold)', bn: 'সাধারণ বডি টেক্সট (< ১৮pt বা < ১৪pt বোল্ড)' },
          { en: 'Minimum 4.5:1 contrast ratio', bn: 'ন্যূনতম ৪.৫:১ কনট্রাস্ট রেশিও' },
          { en: 'Minimum 7:1 contrast ratio', bn: 'ন্যূনতম ৭:১ কনট্রাস্ট রেশিও' }
        ],
        [
          { en: 'Large Text (>= 18pt or >= 14pt bold)', bn: 'বড় আকারের টেক্সট (>= ১৮pt বা >= ১৪pt বোল্ড)' },
          { en: 'Minimum 3:1 contrast ratio', bn: 'ন্যূনতম ৩:১ কনট্রাস্ট রেশিও' },
          { en: 'Minimum 4.5:1 contrast ratio', bn: 'ন্যূনতম ৪.৫:১ কনট্রাস্ট রেশিও' }
        ],
        [
          { en: 'UI Components & Focus Indicators', bn: 'ইউজার ইন্টারফেস বাটন ও ফোকাস দাগ' },
          { en: 'Minimum 3:1 contrast ratio against background', bn: 'ব্যাকগ্রাউন্ডের সাথে অন্তত ৩:১ কনট্রাস্ট' },
          { en: 'Enhanced clarity recommendations', bn: 'আরও উজ্জ্বল পার্থক্যের সুপারিশ' }
        ],
        [
          { en: 'Incidental / Inactive / Pure Decoration', bn: 'নিষ্ক্রিয় বোতাম বা নিছক অলংকরণ' },
          { en: 'No contrast requirement', bn: 'কোনো বাধ্যবাধকতা নেই' },
          { en: 'No contrast requirement', bn: 'কোনো বাধ্যবাধকতা নেই' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Luminance and Contrast Ratio Engine',
        bn: 'চালনাযোগ্য সিমুলেশন: লুমিন্যান্স ও কনট্রাস্ট রেশিও ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script implements the exact W3C sRGB gamma linearization algorithm to calculate the relative luminance and contrast ratio between color pairs:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ডব্লিউথ্রিসি-র আপেক্ষিক লুমিন্যান্স ও কনট্রাস্ট রেশিও নির্ধারণের গাণিতিক ফর্মুলা হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'a11y-contrast-ratio-sim',
      lang: 'javascript',
      code: `// W3C WCAG 2.1 Color Contrast Ratio Calculation Engine
function sRgbToLin(c) {
  const norm = c / 255;
  return norm <= 0.04045 ? norm / 12.92 : Math.pow((norm + 0.055) / 1.055, 2.4);
}

function getLuminance(r, g, b) {
  return 0.2126 * sRgbToLin(r) + 0.7152 * sRgbToLin(g) + 0.0722 * sRgbToLin(b);
}

function getContrast(rgb1, rgb2) {
  const l1 = getLuminance(...rgb1);
  const l2 = getLuminance(...rgb2);
  const brighter = Math.max(l1, l2);
  const darker = Math.min(l1, l2);
  return Number(((brighter + 0.05) / (darker + 0.05)).toFixed(2));
}

const white = [255, 255, 255];
const black = [0, 0, 0];
const brandGray = [118, 118, 118]; // Hex #767676
const lightGray = [148, 148, 148]; // Hex #949494

const ratioBlackWhite = getContrast(black, white);
console.log('Contrast ratio between black and white:', ratioBlackWhite);
// -> Contrast ratio between black and white: 21

const ratioBrand = getContrast(brandGray, white);
console.log('Contrast ratio of #767676 against white:', ratioBrand);
// -> Contrast ratio of #767676 against white: 4.54

const ratioLight = getContrast(lightGray, white);
console.log('Contrast ratio of #949494 against white:', ratioLight);
// -> Contrast ratio of #949494 against white: 3.03`,
      caption: {
        en: 'Figure 1: Black on white delivers 21 contrast ratio; brand gray (#767676) reaches 4.54 (passing AA), while light gray (#949494) only achieves 3.03 (failing normal text AA)',
        bn: 'চিত্র ১: সাদায় কালো দেয় ২১ অনুপাত; ধূসর (#767676) দেয় ৪.৫৪ (AA পাস), আর হালকা ধূসর (#949494) দেয় ৩.০৩ (সাধারণ লেখায় AA ফেল)'
      }
    },
    {
      type: 'heading',
      id: 'reflow-and-zoom',
      text: {
        en: 'Reflow and Zoom: The 320px Responsive Standard',
        bn: 'রিফ্লো ও জুম: ৩২০ পিক্সেল রেসপনসিভ স্ট্যান্ডার্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Many low-vision users increase their browser zoom level to 400 percent to make text readable. On a standard 1280-pixel wide desktop display, zooming to 400 percent reduces the available CSS viewport width to exactly 320 CSS pixels. WCAG Success Criterion 1.4.10 dictates that content must reflow into a clean single column at 320 pixels without forcing horizontal scrolling. Forcing low-vision readers to scroll horizontally back and forth across every line causes severe disorientation.',
        bn: 'স্বল্পদৃষ্টির বহু মানুষ ব্রাউজারের লেখা বড় করতে ৪০০ শতাংশ জুম ব্যবহার করেন। সাধারণ ১২৮০ পিক্সেলের মনিটরে ৪০০ শতাংশ জুম করলে পেজের কার্যকর প্রস্থ কমে ঠিক ৩২০ পিক্সেল হয়ে যায়। ডব্লিউসিএজি নিয়ম ১.৪.১০ অনুযায়ী ৩২০ পিক্সেল প্রস্থেও সমস্ত তথ্য যেন ডানে-বামে না কেটে এক লাইনে সুন্দরভাবে নিচে নামে। প্রতিটি লাইন পড়ার জন্য বারবার ডানে ও বামে স্ক্রল করতে হলে দৃষ্টিহীন বা স্বল্পদৃষ্টির মানুষের পক্ষে কোনো লেখা পড়া অসম্ভব হয়ে দাঁড়ায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'WCAG 1.4.1 Use of Color',
          def: {
            en: 'Color must never be used as the sole visual means of conveying information, indicating an action, prompting a response, or distinguishing an element',
            bn: 'কোনো তথ্য বা ভুল বোঝানোর জন্য শুধুমাত্র রঙের উপর নির্ভর করা যাবে না; রঙের সাথে টেক্সট বা আইকন থাকতে হবে'
          }
        },
        {
          term: 'Text Resizing (WCAG 1.4.4)',
          def: {
            en: 'Text must be resizable up to 200 percent using browser zoom settings without clipping or content loss',
            bn: 'ব্রাউজারের জুমে লেখা ২০০ শতাংশ পর্যন্ত বড় করলেও কোনো তথ্য কেটে যাওয়া বা আড়ালে চলে যাওয়া নিষিদ্ধ'
          }
        },
        {
          term: 'Target Size (WCAG 2.5.8)',
          def: {
            en: 'Touch targets and interactive controls must measure at least 24 by 24 CSS pixels with sufficient spacing to avoid accidental activation',
            bn: 'ভুল স্পর্শ এড়াতে যেকোনো বোতাম বা ইন্টারঅ্যাকটিভ উপাদানের আকার অন্তত ২৪ বাই ২৪ সিএসএস পিক্সেল হতে হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-contrast-ratio-ex',
      kind: 'mcq',
      topic: 'Evaluating WCAG Level AA contrast compliance for body text',
      question: {
        en: 'According to WCAG Level AA guidelines, what is the minimum required contrast ratio for standard normal body text against its background?',
        bn: 'ডব্লিউসিএজি লেভেল এএ নিয়ম অনুযায়ী সাধারণ বডি লেখার জন্য ব্যাকগ্রাউন্ডের সাথে ন্যূনতম কত কনট্রাস্ট রেশিও থাকা আবশ্যক?'
      },
      options: [
        {
          en: '4.5:1 minimum contrast ratio',
          bn: 'ন্যূনতম ৪.৫:১ কনট্রাস্ট রেশিও'
        },
        {
          en: '1:1 (identical color)',
          bn: '১:১ (একই রঙ)'
        },
        {
          en: '2:1 contrast ratio',
          bn: '২:১ কনট্রাস্ট রেশিও'
        },
        {
          en: '50:1 contrast ratio',
          bn: '৫০:১ কনট্রাস্ট রেশিও'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard body text requires 4.5:1, while large text requires 3:1.',
        bn: 'বডি লেখার জন্য ৪.৫:১ এবং বড় লেখার জন্য ৩:১ অনুপাতের কথা ভাবুন।'
      },
      explanation: {
        en: 'WCAG 1.4.3 mandates a 4.5:1 ratio for regular text to ensure legibility for individuals with moderate low vision without assistive software.',
        bn: 'স্বল্পদৃষ্টিসম্পন্ন মানুষ যাতে চশমা বা স্ক্রিন রিডার ছাড়াই পরিষ্কার পড়তে পারেন সেজন্য ৪.৫:১ অনুপাত বাধ্যতামূলক।'
      }
    },
    {
      id: 'a11y-320px-reflow-ex',
      kind: 'mcq',
      topic: 'Why WCAG mandates reflow down to 320 CSS pixels',
      question: {
        en: 'Why does WCAG 1.4.10 mandate responsive reflow down to exactly 320 CSS pixels without horizontal scrollbars?',
        bn: 'ডব্লিউসিএজি ১.৪.১০ কেন ঠিক ৩২০ পিক্সেল প্রস্থে ডানে-বামে স্ক্রল ছাড়া কন্টেন্ট ভেঙে নিচে নামানো বাধ্যতামূলক করেছে?'
      },
      options: [
        {
          en: 'A 1280-pixel desktop monitor zoomed to 400 percent creates a 320-pixel viewport where horizontal scrolling causes severe reading fatigue',
          bn: '১২৮০ পিক্সেলের পর্দায় ৪০০ শতাংশ জুম করলে কার্যকর স্ক্রিন ৩২০ পিক্সেল হয়, যেখানে ডানে-বামে স্ক্রল করা অত্যন্ত কষ্টকর'
        },
        {
          en: 'Because smartphones cannot display more than 320 pixels total',
          bn: 'কারণ স্মার্টফোনে মোট ৩২০ পিক্সেলের বেশি থাকে না'
        },
        {
          en: 'To make images look like retro 1980s video games',
          bn: 'ছবিগুলোকে পুরনো ভিডিও গেমের মতো দেখাতে'
        },
        {
          en: 'To reduce the electricity consumed by the monitor',
          bn: 'মনিটরের বিদ্যুৎ খরচ কমাতে'
        }
      ],
      answer: 0,
      hint: {
        en: '1280 divided by 4 (400% zoom) equals 320.',
        bn: '১২৮০ কে ৪ দিয়ে ভাগ করলে ৩২০ হয় (৪০০% জুম)।'
      },
      explanation: {
        en: 'Low-vision users rely on 400 percent zoom. Requiring two-dimensional scrolling while reading sentences causes disorientation.',
        bn: 'স্বল্পদৃষ্টির মানুষ ৪০০ শতাংশ জুমে পড়েন; প্রতি লাইনে ডানে ও বামে স্ক্রল করা বিভ্রান্তিকর ও ক্লান্তিকর।'
      }
    },
    {
      id: 'a11y-use-of-color-ex',
      kind: 'mcq',
      topic: 'WCAG 1.4.1 Use of Color criterion and color blindness',
      question: {
        en: 'Why is highlighting required form fields or input validation errors using red borders alone a WCAG violation?',
        bn: 'ভুল ইনপুট বক্স বোঝাতে শুধু লাল বর্ডার ব্যবহার করা কেন ডব্লিউসিএজি নিয়ম ভঙ্গ করে?'
      },
      options: [
        {
          en: 'People with red-green color blindness cannot distinguish the red border from standard neutral gray borders without an icon or text description',
          bn: 'লাল-সবুজ বর্ণান্ধ মানুষ কোনো টেক্সট বা সতর্কবার্তা ছাড়া লাল বর্ডারকে সাধারণ ধূসর থেকে আলাদা করতে পারেন না'
        },
        {
          en: 'Because red dye is expensive on electronic screens',
          bn: 'কারণ ডিজিটাল পর্দায় লাল রঙ তৈরি করা ব্যয়বহুল'
        },
        {
          en: 'Red color is forbidden by the World Wide Web Consortium',
          bn: 'লাল রঙ ব্যবহার করা W3C কর্তৃক সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'It causes the form data to be submitted twice',
          bn: 'এটি ফর্মের ডেটা দুইবার সাবমিট করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Color blindness renders red borders indistinguishable from neutral tones.',
        bn: 'বর্ণান্ধতায় লাল রঙ দেখতে না পাওয়ার কথা ভাবুন।'
      },
      explanation: {
        en: 'WCAG 1.4.1 requires error states to provide redundant cues, such as an error icon and descriptive text, alongside color changes.',
        bn: 'রঙের পাশাপাশি ভুলের ব্যাখ্যা এবং স্পষ্ট চিহ্ন ব্যবহার করা বাধ্যতামূলক।'
      }
    }
  ],
  quiz: {
    id: 'quiz-contrast-and-text',
    title: {
      en: 'Color Contrast & Typography Accessibility Quiz',
      bn: 'কালার কনট্রাস্ট ও টাইপোগ্রাফি অ্যাক্সেসিবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-large-text-definition',
        kind: 'mcq',
        topic: 'Definition of large text under WCAG guidelines',
        question: {
          en: 'Under WCAG 2.2 specifications, what font size qualifies as "large text" eligible for the lower 3:1 contrast ratio threshold?',
          bn: 'ডব্লিউসিএজি ২.২ নির্দেশিকা অনুযায়ী কোন আকারের লেখাকে "বড় লেখা" ধরা হয় যার জন্য ৩:১ কনট্রাস্ট যথেষ্ট?'
        },
        options: [
          {
            en: 'At least 18 points (24 pixels) regular weight, or at least 14 points (approx 18.66 pixels) bold weight',
            bn: 'কমপক্ষে ১৮ পয়েন্ট (২৪ পিক্সেল) সাধারণ লেখা অথবা কমপক্ষে ১৪ পয়েন্ট (প্রায় ১৮.৬৬ পিক্সেল) বোল্ড লেখা'
          },
          {
            en: 'Any font larger than 10 pixels',
            bn: '১০ পিক্সেলের চেয়ে বড় যেকোনো লেখা'
          },
          {
            en: 'Headings written in all capital letters only',
            bn: 'কেবলমাত্র সব বড় হাতের অক্ষরে লেখা শিরোনাম'
          },
          {
            en: 'Fonts displayed on billboard displays outdoors',
            bn: 'বিলবোর্ডে প্রদর্শিত লেখা'
          }
        ],
        answer: 0,
        hint: {
          en: '18pt regular or 14pt bold.',
          bn: '১৮ পয়েন্ট সাধারণ অথবা ১৪ পয়েন্ট বোল্ড লেখার কথা ভাবুন।'
        },
        explanation: {
          en: 'Larger letter strokes create wider perceptual surface areas on retinas, allowing lower contrast ratios (3:1) while maintaining readability.',
          bn: 'বড় অক্ষরের রেখাগুলো মোটা হওয়ায় সামান্য কম ৩:১ কনট্রাস্টেও চোখ সহজে পড়ে নিতে পারে।'
        }
      },
      {
        id: 'q-a11y-link-underlines',
        kind: 'mcq',
        topic: 'Distinguishing body text links without relying solely on color',
        question: {
          en: 'Why do accessibility guidelines recommend retaining underlines on inline links surrounded by body text?',
          bn: 'বডি লেখার ভেতর থাকা লিঙ্কগুলোতে আন্ডারলাইন বজায় রাখার পরামর্শ কেন দেওয়া হয়?'
        },
        options: [
          {
            en: 'Underlines provide a shape and luminance cue allowing colorblind users to identify links without relying solely on blue hue differences',
            bn: 'আন্ডারলাইন একটি কাঠামোগত রূপ দেয় যাতে বর্ণান্ধ মানুষ কেবল নীল রঙের উপর নির্ভর না করেই লিঙ্ক চিনতে পারেন'
          },
          {
            en: 'Because underlines make web pages download faster',
            bn: 'কারণ আন্ডারলাইন থাকলে পেজ দ্রুত ডাউনলোড হয়'
          },
          {
            en: 'Underlines encrypt the destination web address',
            bn: 'আন্ডারলাইন গন্তব্যের ঠিকানা এনক্রিপ্ট করে রাখে'
          },
          {
            en: 'It prevents computer search engines from crawling the link',
            bn: 'এটি সার্চ ইঞ্জিনকে লিঙ্কে ঢুকতে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Non-color visual indicator for interactive text links.',
          bn: 'রঙ ছাড়া বিকল্প চিহ্নের কথা ভাবুন।'
        },
        explanation: {
          en: 'Without underlines, link colors must maintain a 3:1 contrast ratio against surrounding body text AND a 4.5:1 ratio against the background, which is difficult to achieve.',
          bn: 'আন্ডারলাইন না থাকলে চারপাশের লেখার সাথে ৩:১ এবং ব্যাকগ্রাউন্ডের সাথে ৪.৫:১ অনুপাত বজায় রাখা অত্যন্ত জটিল হয়ে পড়ে।'
        }
      },
      {
        id: 'q-a11y-pure-black-white-ratio',
        kind: 'mcq',
        topic: 'Maximum possible contrast ratio in digital color spaces',
        question: {
          en: 'What is the absolute maximum contrast ratio achievable between pure black (#000000) and pure white (#FFFFFF)?',
          bn: 'নিখুঁত কালো (#000000) এবং নিখুঁত সাদার (#FFFFFF) মধ্যে সর্বোচ্চ কত কালার কনট্রাস্ট অনুপাত পাওয়া সম্ভব?'
        },
        options: [
          {
            en: '21:1 contrast ratio',
            bn: '২১:১ কনট্রাস্ট রেশিও'
          },
          {
            en: '100:1 contrast ratio',
            bn: '১০০:১ কনট্রাস্ট রেশিও'
          },
          {
            en: '4.5:1 contrast ratio',
            bn: '৪.৫:১ কনট্রাস্ট রেশিও'
          },
          {
            en: '1:1 contrast ratio',
            bn: '১:১ কনট্রাস্ট রেশিও'
          }
        ],
        answer: 0,
        hint: {
          en: '(1.0 + 0.05) / (0.0 + 0.05) equals 21.',
          bn: '(১.০ + ০.০৫) / (০.০ + ০.০৫) সমান ২১।'
        },
        explanation: {
          en: 'In the W3C luminance contrast algorithm, the maximum possible mathematical ratio is (1 + 0.05) / (0 + 0.05) = 21:1.',
          bn: 'ডব্লিউসিএজি সূত্রে আলোর সর্বোচ্চ মান ১ এবং সর্বনিম্ন মান ০ বসিয়ে ২১:১ অনুপাত পাওয়া যায়।'
        }
      },
      {
        id: 'q-a11y-focus-ring-contrast',
        kind: 'mcq',
        topic: 'WCAG 1.4.11 Non-text contrast on interactive focus rings',
        question: {
          en: 'What contrast ratio must a custom CSS focus ring maintain against the adjacent background color under WCAG 1.4.11?',
          bn: 'ডব্লিউসিএজি ১.৪.১১ অনুযায়ী কাস্টম সিএসএস ফোকাস রিংকে পেছনের ব্যাকগ্রাউন্ডের সাথে অন্তত কত কনট্রাস্ট অনুপাত বজায় রাখতে হবে?'
        },
        options: [
          {
            en: 'At least 3:1 contrast ratio',
            bn: 'কমপক্ষে ৩:১ কনট্রাস্ট রেশিও'
          },
          {
            en: 'At least 21:1 contrast ratio',
            bn: 'কমপক্ষে ২১:১ কনট্রাস্ট রেশিও'
          },
          {
            en: 'Exactly 1:1 contrast ratio',
            bn: 'ঠিক ১:১ কনট্রাস্ট রেশিও'
          },
          {
            en: 'No contrast is required for focus indicators',
            bn: 'ফোকাস দাগের জন্য কোনো কনট্রাস্টের প্রয়োজন নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Non-text visual indicators require a 3:1 ratio.',
          bn: 'নন-টেক্সট উপাদানের জন্য ৩:১ অনুপাতের কথা ভাবুন।'
        },
        explanation: {
          en: 'WCAG 1.4.11 requires 3:1 contrast for user interface indicators so keyboard users can clearly see which interactive control currently holds focus.',
          bn: 'কিবোর্ড ব্যবহারকারীরা যেন নিশ্চিত হতে পারেন কোন বোতামে ফোকাস আছে, সেজন্য ৩:১ অনুপাত বাধ্যতামূলক।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'media-and-motion',
    tech: 'accessibility',
    title: {
      en: 'Captions, Transcripts, Motion & Vestibular Safety',
      bn: 'ক্যাপশন, ট্রান্সক্রিপ্ট, মোশন ও ভেস্টিবুলার নিরাপত্তা'
    }
  }
};
