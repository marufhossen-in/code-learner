import type { Lesson } from '../../../lib/types';

export const boxModelLesson: Lesson = {
  slug: 'box-model',
  tech: 'css',
  title: {
    en: 'CSS Box Model, Borders, Margins, Padding & Outlines',
    bn: 'CSS বক্স মডেল, বর্ডার, মার্জিন, প্যাডিং ও আউটলাইন'
  },
  summary: {
    en: 'Master the dimensional engine of web styling across 10 structured topics. Understand the four nested box layers, content-box versus border-box mathematics, margin collapsing mechanics, border styles, and accessible outlines.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ওয়েবের মূল ডাইমেনশন ইঞ্জিন আয়ত্ত করুন। চার স্তরের বক্স মডেল, content-box বনাম border-box গণিত, মার্জিন কলাপ্সিং নিয়মাবলী, বর্ডার স্টাইল এবং অ্যাক্সেসিবল আউটলাইন শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'css-position-maps',
    title: { en: 'CSS Positioning, Normal Flow, Floats & Stacking Context', bn: 'CSS পজিশনিং, নরমাল ফ্লো, ফ্লোট ও স্ট্যাকিং কনটেক্সট' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Four Nested Layers: Content, Padding, Border, Margin', bn: '১. চার স্তরের বক্স মডেল: কনটেন্ট, প্যাডিং, বর্ডার ও মার্জিন' } },
    {
      type: 'para',
      text: {
        en: 'The browser layout engine renders every HTML element as a rectangular box. Each box is composed of four concentric layers: content where text and images live, padding that cushions the content, border forming the perimeter frame, and margin separating the box from neighbors.',
        bn: 'ব্রাউজারের লেআউট ইঞ্জিন প্রতিটি HTML উপাদানকে একটি আয়তক্ষেত্রাকার বাক্স হিসেবে তৈরি করে। প্রতিটি বাক্স চারটি স্তরে গঠিত: কনটেন্ট যেখানে লেখা ও ছবি থাকে, প্যাডিং যা কনটেন্টকে ঘিরে রাখে, বর্ডার যা বাইরের সীমানা রেখা তৈরি করে, এবং মার্জিন যা পাশের উপাদানগুলো থেকে দূরত্ব বজায় রাখে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'The CSS Box Model Layers', bn: 'CSS বক্স মডেলের স্তরসমূহ' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Diagram showing four concentric rectangles for margin, border, padding, and content"><g font-size="11" fill="currentColor"><rect x="30" y="10" width="600" height="160" rx="8" fill="none" stroke="currentColor" stroke-dasharray="4" stroke-width="1.5"/><text x="50" y="30" font-weight="bold">Margin (outer clear space)</text><rect x="70" y="35" width="520" height="110" rx="6" fill="none" stroke="currentColor" stroke-width="2.5"/><text x="90" y="55" font-weight="bold">Border (perimeter frame)</text><rect x="110" y="60" width="440" height="60" rx="4" fill="none" stroke="currentColor" stroke-dasharray="2" stroke-width="1.2"/><text x="130" y="80" font-weight="bold">Padding (inner cushion)</text><rect x="230" y="75" width="200" height="30" rx="3" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.2"/><text x="330" y="94" text-anchor="middle" font-weight="bold">Content Area</text></g></svg>`,
      caption: {
        en: 'Concentric boxes expand from content inside through padding, border, and margin outside.',
        bn: 'ভেতরের কনটেন্ট থেকে শুরু করে প্যাডিং, বর্ডার এবং বাইরের মার্জিন পর্যন্ত স্তরগুলো বিস্তৃত।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/*
   +-----------------------------------+  <- Margin (Transparent outer space)
   |  MARGIN                           |
   |   +---------------------------+   |  <- Border (Drawn frame)
   |   |  BORDER                   |   |
   |   |   +-------------------+   |   |  <- Padding (Inner cushion, shares background)
   |   |   |  PADDING          |   |   |
   |   |   |   +-----------+   |   |   |  <- Content (Text, images, children)
   |   |   |   |  CONTENT  |   |   |   |
   |   |   |   +-----------+   |   |   |
   |   |   +-------------------+   |   |
   |   +---------------------------+   |
   +-----------------------------------+
*/

.box-sample {
  width: 300px;
  padding: 20px;
  border: 4px solid #2563eb;
  margin: 16px;
  background-color: #f8fafc;
}

/* Rendered Output:
   Inner content area is 300px wide, wrapped by 20px padding with light background, surrounded by 4px blue border and 16px outer margin.
*/`,
      caption: {
        en: 'Every HTML element renders as nested concentric rectangles: content, padding, border, and margin.',
        bn: 'প্রতিটি HTML উপাদান ক্রমানুসারে কনটেন্ট, প্যাডিং, বর্ডার ও মার্জিন নিয়ে গঠিত হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Box-Sizing Math: content-box vs border-box', bn: '২. বক্স-সাইজিং গণিত: content-box বনাম border-box' } },
    {
      type: 'para',
      text: {
        en: 'Under legacy content-box (CSS default), declared width applies ONLY to the content area. Total rendered box width equals width + padding-left + padding-right + border-left + border-right. Under modern border-box, declared width includes padding and borders, guaranteeing the element never exceeds its declared dimensions.',
        bn: 'ডিফল্ট content-box নিয়মে ঘোষিত width শুধুমাত্র কনটেন্টের ভেতরের জায়গাকে বোঝায়। ফলে মোট প্রস্থ হয়: width + প্যাডিং + বর্ডার। অন্যদিকে আধুনিক border-box নিয়মে ঘোষিত width-এর ভেতরেই প্যাডিং এবং বর্ডার অন্তর্ভুক্ত থাকে, ফলে উপাদান কখনোই ঘোষিত সাইজের চেয়ে বড় হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Legacy content-box (Browser Default):
   Declared width: 300px
   Total physical width = 300 + (20 * 2 padding) + (5 * 2 border) = 350px!
*/
.legacy-card {
  box-sizing: content-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #ef4444;
}

/* Modern border-box (Production Standard):
   Declared width: 300px
   Total physical width = EXACTLY 300px! (Content shrinks to 250px)
*/
.modern-card {
  box-sizing: border-box;
  width: 300px;
  padding: 20px;
  border: 5px solid #16a34a;
}

/* Rendered Output:
   .legacy-card renders 350px wide (overflows parent).
   .modern-card renders exactly 300px wide (fits perfectly).
*/`,
      caption: {
        en: 'border-box makes dimension arithmetic predictable by absorbing padding and border into declared width.',
        bn: 'border-box প্যাডিং ও বর্ডারকে ঘোষিত প্রস্থের মধ্যে ধারণ করে লেআউট ভাঙা রোধ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. CSS Margins: Margin Collapsing Rules & Auto-Centering', bn: '৩. CSS মার্জিন: মার্জিন কলাপ্সিং ও অটো-সেন্টারিং' } },
    {
      type: 'para',
      text: {
        en: 'Margins create outer breathing room around an element. In normal document flow, adjacent vertical spaces collapse into a single offset equal to the largest value. For example, a 30px bottom clearance on element A and a 20px top gap on element B combine into 30px total, not 50px. Horizontal spacing never collapses. Setting margin: 0 auto horizontally centers block elements with declared widths.',
        bn: 'মার্জিন উপাদানের চারপাশে বাইরের খালি জায়গা তৈরি করে। সাধারণ ফ্লোতে পাশাপাশি থাকা দুটি উল্লম্ব ফাঁক পরস্পর যোগ না হয়ে বড় মানটিতে মিশে যায়। যেমন ৩০px বটম স্পেস ও ২০px টপ স্পেস মিলে মোট ৩০px হয়, ৫০px নয়। আড়াআড়ি ফাঁকা জায়গা কখনো কলাপ্স হয় না। নির্দিষ্ট প্রস্থযুক্ত ব্লকে margin: 0 auto দিলে তা অনুভূমিকভাবে সেন্টারে বসে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Vertical Margin Collapse Demonstration */
.heading-block {
  margin-bottom: 30px;      /* Wants 30px space below */
}

.paragraph-block {
  margin-top: 20px;         /* Wants 20px space above */
}
/* Actual space between heading and paragraph = max(30px, 20px) = 30px (NOT 50px!) */

/* Horizontal Auto Centering */
.container-center {
  width: 80%;
  max-width: 960px;
  margin-left: auto;
  margin-right: auto;       /* Shorthand: margin: 0 auto; */
}

/* Rendered Output:
   Spacing between blocks is exactly 30px; container is centered horizontally with equal margins.
*/`,
      caption: {
        en: 'Vertical margins collapse to the larger value; margin: 0 auto centers block containers.',
        bn: 'উল্লম্ব মার্জিন বড় মানটিতে একীভূত হয়; margin: 0 auto ব্লক উপাদানকে কেন্দ্রে আনে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. CSS Padding: Touch Target Sizing & Background Interaction', bn: '৪. CSS প্যাডিং: টাচ টার্গেট সাইজিং ও ব্যাকগ্রাউন্ড শেয়ারিং' } },
    {
      type: 'para',
      text: {
        en: 'Padding expands the interactive surface inside the element’s border. It inherits the background-color and background-image of the element. Increasing padding enlarges the clickable tap target of buttons and links without altering font-size, which is critical for mobile accessibility standards (minimum 44x44px).',
        bn: 'প্যাডিং বর্ডারের ভেতরের জায়গা বাড়ায় এবং উপাদানের ব্যাকগ্রাউন্ড রং শেয়ার করে। প্যাডিং বাড়ালে ফন্ট সাইজ না বাড়িয়েই বাটনের ক্লিকযোগ্য বা স্পর্শযোগ্য স্থান প্রসারিত হয়, যা মোবাইলের অ্যাক্সেসিবিলিটি স্ট্যান্ডার্ডে (ন্যূনতম ৪৪x৪৪px) অত্যন্ত গুরুত্বপূর্ণ।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Shorthand syntax variations:
   1 value:  padding: [all]
   2 values: padding: [top/bottom] [left/right]
   3 values: padding: [top] [left/right] [bottom]
   4 values: padding: [top] [right] [bottom] [left] (Clockwise: TRBL)
*/

.button-accessible {
  background-color: #2563eb;
  color: #ffffff;
  padding: 12px 24px;       /* 12px top/bottom, 24px left/right */
  border: none;
  min-height: 48px;         /* Compliant with WCAG mobile touch standards */
  display: inline-flex;
  align-items: center;
}

/* Rendered Output:
   Button expands into an ergonomic 48px high clickable pill with generous horizontal breathing space.
*/`,
      caption: {
        en: 'Padding follows the clockwise TRBL rule and enlarges the interactive clickable hit area.',
        bn: 'প্যাডিং ঘড়ির কাঁটার ক্রমে (TRBL) চলে এবং উপাদানের ক্লিকযোগ্য এলাকা বড় করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. CSS Borders: Styles, Widths, Colors, and Shorthands', bn: '৫. CSS বর্ডার: স্টাইল, উইডথ, কালার ও শর্টহ্যান্ড' } },
    {
      type: 'para',
      text: {
        en: 'Borders form visible frames around the padding edge. The border shorthand requires three parameters: border: [width] [style] [color]. The border-style property (solid, dashed, dotted, double, groove, ridge, none) is mandatory — without it, the border has a zero width and will not render.',
        bn: 'বর্ডার প্যাডিংয়ের বাইরে দৃশ্যমান ফ্রেম তৈরি করে। এর শর্টহ্যান্ডে তিনটি অংশ থাকে: border: [width] [style] [color]। border-style (solid, dashed, dotted, double, none) ঘোষণা করা বাধ্যতামূলক — এটি না দিলে বর্ডারের প্রস্থ শূন্য হয়ে যায় এবং তা কখনোই প্রদর্শিত হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Explicit border properties */
.card-frame {
  border-width: 2px;
  border-style: solid;
  border-color: #cbd5e1;
}

/* Concise shorthand */
.card-frame-short {
  border: 2px solid #cbd5e1;
}

/* Individual side overrides */
.callout-info {
  background: #eff6ff;
  border-left: 4px solid #3b82f6; /* Accent indicator stripe on left side only */
  padding: 16px;
}

/* Rendered Output:
   Callout displays a bright blue accent line on the left, with zero borders on top, right, or bottom.
*/`,
      caption: {
        en: 'border-style is mandatory for any border to render; individual sides can be styled independently.',
        bn: 'বর্ডার দৃশ্যমান হতে border-style অপরিহার্য; প্রতিটি বাহুকে আলাদাভাবে স্টাইল করা যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Rounded Corners: border-radius, Pills, and Circular Avatars', bn: '৬. গোলাকার কোণা: border-radius, পিল বাটন ও বৃত্তাকার অবতার' } },
    {
      type: 'para',
      text: {
        en: 'The border-radius property softens sharp 90-degree corners into smooth curves. A single pixel or rem value curves all four corners uniformly. Setting border-radius: 9999px creates pill-shaped badges, while border-radius: 50% on a square element creates a perfect circle.',
        bn: 'border-radius প্রপার্টি চার কোণাকে সুন্দরভাবে বৃত্তাকার রূপ দেয়। একটি একক মান চার কোণায় সমানভাবে কার্যকর হয়। border-radius: 9999px দিলে পিল আকৃতির বোতাম তৈরি হয়, আর একটি বর্গাকার উপাদানে border-radius: 50% দিলে তা নিখুঁত বৃত্তে পরিণত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Subtle card rounding */
.card-rounded {
  border-radius: 8px;
}

/* 2. Asymmetric directional rounding (top-left, top-right, bottom-right, bottom-left) */
.speech-bubble {
  border-radius: 16px 16px 16px 0px; /* Sharp bottom-left tail corner */
}

/* 3. Fully rounded pill button */
.pill-button {
  padding: 8px 20px;
  border-radius: 9999px;    /* Automatically produces half-circle caps at ends */
}

/* 4. Perfect circular avatar */
.avatar-circle {
  width: 64px;
  height: 64px;
  border-radius: 50%;       /* Exactly circular profile picture */
  object-fit: cover;
}

/* Rendered Output:
   Speech bubbles feature rounded crowns; avatars render as smooth, perfect circles.
*/`,
      caption: {
        en: 'border-radius: 50% on equal width/height elements creates perfect circles.',
        bn: 'সমান প্রস্থ ও উচ্চতাযুক্ত উপাদানে border-radius: 50% দিলে নিখুঁত বৃত্ত তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Decorative Border Images: border-image and Slicing', bn: '৭. ডেকোরেটিভ বর্ডার ইমেজ: border-image ও স্লাইসিং' } },
    {
      type: 'para',
      text: {
        en: 'The border-image property replaces plain colored strokes with sliced raster or SVG artwork. It divides a source graphic into a 3x3 grid (9 slices) using border-image-slice, distributing 4 corners, 4 edges, and an optional center fill across the element boundaries.',
        bn: 'border-image সাধারণ একরঙা দাগের পরিবর্তে শৈল্পিক ছবি বা এসভিজি দিয়ে ফ্রেম আঁকে। এটি border-image-slice ব্যবহার করে একটি ছবিকে ৩x৩ গ্রিডে (৯টি অংশে) কেটে নেয় এবং ৪টি কোণা ও ৪টি বাহু বরাবর ফ্রেম হিসেবে বসিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Complex border image declaration */
.vintage-frame {
  border: 15px solid transparent; /* Reserve 15px border width */
  border-image-source: url('frame-border.png');
  border-image-slice: 30;         /* Slice 30px inward from image edges */
  border-image-repeat: round;     /* Repeat tiles cleanly without clipping */
}

/* Gradient border shorthand using border-image */
.gradient-border-box {
  border: 3px solid transparent;
  border-image: linear-gradient(135deg, #2563eb, #ec4899) 1;
}

/* Rendered Output:
   Container is framed by a vibrant continuous linear gradient border stroke.
*/`,
      caption: {
        en: 'border-image wraps elements in intricate graphical borders or multi-color gradients.',
        bn: 'border-image উপাদানকে গ্রাফিক ফ্রেম বা বহুরঙা গ্রেডিয়েন্ট বর্ডার দিয়ে সাজায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. CSS Outlines vs Borders: Focus Rings & outline-offset', bn: '৮. আউটলাইন বনাম বর্ডার: ফোকাস রিং ও outline-offset' } },
    {
      type: 'para',
      text: {
        en: 'Unlike borders, an outline is drawn entirely outside the element’s box model without taking up any layout space or triggering reflows. outline-offset pushes the outline further away from the border edge. Never declare outline: none without replacing it with an accessible focus indicator for keyboard navigation.',
        bn: 'বর্ডারের মতো নয়, outline উপাদানের বক্স মডেলের বাইরে আঁকা হয় এবং কোনো স্থান দখল করে না, ফলে লেআউট স্থানান্তরিত হয় না। outline-offset আউটলাইনটিকে বর্ডার থেকে কিছুটা দূরে ফাঁকা রেখে আঁকে। কিবোর্ড নেভিগেশনের জন্য উপযুক্ত বিকল্প না দিয়ে কখনোই outline: none করা উচিত নয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Interactive accessible keyboard focus ring */
button:focus-visible,
input:focus-visible {
  outline: 2px solid #2563eb;
  outline-offset: 2px;      /* Leaves a crisp 2px air gap between border and outline */
}

/* Why outline beats border for focus states:
   1. It occupies 0px layout space.
   2. It does NOT push neighboring buttons around when focus changes.
*/

/* Rendered Output:
   Focused controls display an elegant high-contrast blue halo with a 2px air gap.
*/`,
      caption: {
        en: 'outline-offset creates floating focus halos without causing surrounding layout shifts.',
        bn: 'outline-offset আশেপাশের উপাদানকে না নাড়িয়ে ভাসমান ফোকাস হ্যালো তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Dimension Constraints: min-width, max-width, and Fluid Boxes', bn: '৯. সাইজ সীমাবদ্ধতা: min-width, max-width ও ফ্লুইড বক্স' } },
    {
      type: 'para',
      text: {
        en: 'Hardcoding width: 800px causes horizontal scrolling on smaller mobile viewports. Combining width: 100% with max-width: 800px creates a responsive container that shrinks flexibly on phones while capping out at 800px on widescreen monitors.',
        bn: 'সরাসরি width: 800px লিখে দিলে মোবাইল স্ক্রিনে অনুভূমিক স্ক্রলবার চলে আসে। এর বদলে width: 100% এবং max-width: 800px একসাথে ব্যবহার করলে মোবাইলে তা ছোট হয় এবং বড় মনিটরে ৮০০px-এর বেশি ছড়ায় না।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Responsive Content Well Pattern */
.container-fluid {
  width: 100%;               /* Fill screen on mobile */
  max-width: 1140px;         /* Never grow beyond 1140px on desktop screens */
  min-height: 200px;         /* Guarantee a baseline height even when empty */
  margin-inline: auto;       /* Modern logical property for margin: 0 auto */
  padding-inline: 16px;      /* Modern logical property for left/right padding */
}

/* Rendered Output:
   Container expands fluidly from 320px mobile to 1140px desktop with 16px side cushions.
*/`,
      caption: {
        en: 'max-width prevents elements from overflowing narrow screens while locking desktop proportions.',
        bn: 'max-width মোবাইলে উপচে পড়া রোধ করে এবং ডেস্কটপে সুন্দর অনুপাত ধরে রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The Global Box Reset: Unifying the Web', bn: '১০. গ্লোবাল বক্স রিসেট: ওয়েব আর্কিটেকচার একীভূতকরণ' } },
    {
      type: 'para',
      text: {
        en: 'Because default content-box math causes layout blowouts whenever padding is added, modern CSS projects apply a universal box-sizing reset to *, *::before, and *::after. This ensures every component follows predictable dimensional arithmetic.',
        bn: 'ডিফল্ট content-box-এ প্যাডিং যোগ করলেই বক্সের আকার বেড়ে লেআউট ভেঙে যায় বলে আধুনিক ওয়েব প্রজেক্টগুলোতে *, *::before ও *::after সিলেক্টরে সার্বজনীন border-box রিসেট দেওয়া হয়। এটি পুরো ওয়েবসাইটের বক্স হিসাবকে পূর্বানুমানযোগ্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* The Industry-Standard Universal Box Model Reset */
*, *::before, *::after {
  box-sizing: border-box;
}

/* How this changes developer experience:
   - When you declare width: 250px, it is ALWAYS 250px.
   - You can add padding: 30px without worrying about container overflow.
   - Multi-column grids (e.g. 50% + 50%) never break onto new lines.
*/

/* Rendered Output:
   All page elements adhere strictly to declared widths without manual padding subtractions.
*/`,
      caption: {
        en: 'The universal border-box reset is the foundational starting point for all modern CSS stylesheets.',
        bn: 'ইউনিভার্সাল border-box রিসেট হলো আধুনিক CSS স্টাইলশিটের সবচেয়ে গুরুত্বপূর্ণ ভিত্তি।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-box-ex1',
      kind: 'predict',
      topic: 'css: Box model total width',
      question: {
        en: 'Under box-sizing: content-box, what is the total physical width of an element with width: 200px, padding: 15px, border: 2px solid black, and margin: 10px?',
        bn: 'box-sizing: content-box-এ একটি উপাদানের width: 200px, padding: 15px, border: 2px এবং margin: 10px হলে মোট শারীরিক প্রস্থ (বর্ডার পর্যন্ত) কত পিক্সেল হবে?',
      },
      code: `/* width: 200px; padding: 15px; border: 2px; */
/* Total rendered width = 200 + (15 * 2) + (2 * 2) */`,
      answer: '234px',
      accept: ['234px', '234', '234 px'],
      hint: {
        en: 'Add width + left/right padding + left/right border (margins are outside the box).',
        bn: 'width + বাম/ডান প্যাডিং + বাম/ডান বর্ডার যোগ করুন (মার্জিন বক্সের বাইরে থাকে)।',
      },
      explanation: {
        en: 'In content-box, total box width = width (200) + padding (15 x 2 = 30) + border (2 x 2 = 4) = 234px. Margins push adjacent elements away but do not contribute to the element’s box size.',
        bn: 'content-box-এ মোট প্রস্থ = ২০০ + (১৫ x ২) + (২ x ২) = ২৩৪ পিক্সেল। মার্জিন অন্যদের দূরে সরায় কিন্তু বক্সের ভেতরে অন্তর্ভুক্ত হয় না।',
      },
    },
    {
      id: 'css-box-ex2',
      kind: 'mcq',
      topic: 'css: Margin collapse direction',
      question: {
        en: 'In normal document flow, which margins collapse into a single unified space?',
        bn: 'নরমাল ডকুমেন্ট ফ্লোতে কোন মার্জিনগুলো পরস্পর একীভূত বা কলাপ্স হয়?',
      },
      options: [
        { en: 'Adjacent vertical (top and bottom) margins', bn: 'পাশাপাশি থাকা উল্লম্ব (টপ ও বটম) মার্জিন' },
        { en: 'Horizontal (left and right) margins', bn: 'আড়াআড়ি (লেফট ও রাইট) মার্জিন' },
        { en: 'Margins inside flex containers', bn: 'ফ্লেক্স কন্টেইনারের ভেতরের মার্জিন' },
        { en: 'Margins on absolutely positioned elements', bn: 'অ্যাবসোলিউট পজিশনড উপাদানের মার্জিন' },
      ],
      answer: 0,
      hint: {
        en: 'Margin collapsing is strictly a vertical phenomenon in normal flow.',
        bn: 'মার্জিন কলাপ্সিং শুধুমাত্র সাধারণ ফ্লোর উল্লম্ব ক্ষেত্রে ঘটে।',
      },
      explanation: {
        en: 'Margin collapsing only occurs on vertical (top/bottom) margins of block elements in normal flow. Horizontal margins and flex/grid margins never collapse.',
        bn: 'মার্জিন কলাপ্সিং শুধুমাত্র নরমাল ফ্লোর উল্লম্ব মার্জিনে ঘটে। অনুভূমিক মার্জিন বা ফ্লেক্স/গ্রিডের মার্জিন কখনো কলাপ্স হয় না।',
      },
    },
    {
      id: 'css-box-ex3',
      kind: 'mcq',
      topic: 'css: Outlines vs borders',
      question: {
        en: 'What is the key functional advantage of using outline over border for keyboard focus rings?',
        bn: 'কিবোর্ড ফোকাস রিং তৈরিতে বর্ডারের চেয়ে outline ব্যবহারের প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'outline takes up 0px layout space, preventing layout shifts on focus', bn: 'outline কোনো স্থান দখল করে না, ফলে ফোকাস পেলে আশেপাশের উপাদান নড়ে ওঠে না' },
        { en: 'outline only works in black and white', bn: 'outline শুধু সাদা-কালোতে চলে' },
        { en: 'outline cannot be rounded', bn: 'outline-কে গোল করা যায় না' },
        { en: 'outline disables clicking', bn: 'outline ক্লিক করা বন্ধ করে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'It does not push neighbors away.',
        bn: 'এটি আশেপাশের প্রতিবেশীদের ঠেলে সরিয়ে দেয় না।'
      },
      explanation: {
        en: 'outlines are drawn outside the box model without claiming any physical space, meaning appearing and disappearing focus outlines never cause jarring layout jumps.',
        bn: 'outline বক্স মডেলের বাইরে আঁকা হয় এবং কোনো স্থান দাবি করে না, ফলে ফোকাস দেখা গেলে বা চলে গেলে লেআউটে কোনো ধাক্কা লাগে না।'
      }
    }
  ],
  quiz: {
    id: 'css-box-quiz',
    title: { en: 'Box Model Quiz', bn: 'বক্স মডেল কুইজ' },
    questions: [
      {
        id: 'bq1',
        kind: 'mcq',
        topic: 'css: Border-box purpose',
        question: {
          en: 'Why is *, *::before, *::after { box-sizing: border-box; } included in virtually every CSS reset?',
          bn: 'কেন প্রায় প্রতিটি আধুনিক CSS রিসেটে *, *::before, *::after { box-sizing: border-box; } অন্তর্ভুক্ত থাকে?'
        },
        options: [
          { en: 'It makes declared width include padding and border, preventing layout overflows', bn: 'এটি ঘোষিত প্রস্থের ভেতরেই প্যাডিং ও বর্ডার অন্তর্ভুক্ত করে লেআউট উপচে পড়া রোধ করে' },
          { en: 'It turns all text blue', bn: 'এটি সব টেক্সট নীল করে দেয়' },
          { en: 'It speeds up JavaScript downloads', bn: 'এটি জাভাস্ক্রিপ্ট ডাউনলোডের গতি বাড়ায়' },
          { en: 'It disables mobile responsive views', bn: 'এটি মোবাইল রেসপন্সিভ ভিউ বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'It makes width calculations intuitive and predictable.',
          bn: 'এটি প্রস্থের হিসাবকে সহজ ও নির্ভরযোগ্য করে।'
        },
        explanation: {
          en: 'border-box causes declared width and height to encompass the content, padding, and border, making responsive grid mathematics predictable.',
          bn: 'border-box নিশ্চিত করে যে ঘোষিত প্রস্থ ও উচ্চতার ভেতরেই প্যাডিং ও বর্ডার থাকবে, ফলে রেসপন্সিভ ডিজাইনের হিসাব অত্যন্ত সহজ হয়।'
        }
      },
      {
        id: 'bq2',
        kind: 'mcq',
        topic: 'css: Circular avatar radius',
        question: {
          en: 'What border-radius value converts an 80px by 80px square image into a perfect circular avatar?',
          bn: 'একটি ৮০px বাই ৮০px মাপের ছবিকে নিখুঁত বৃত্তাকার অবতারে রূপান্তর করতে কোন border-radius মানটি দিতে হয়?'
        },
        options: [
          { en: '50%', bn: '50%' },
          { en: '10px', bn: '10px' },
          { en: '100px', bn: '100px' },
          { en: '0', bn: '0' }
        ],
        answer: 0,
        hint: {
          en: 'Fifty percent curves each corner to the midpoint of the edges.',
          bn: 'পঞ্চাশ শতাংশ প্রতিটি কোণাকে বাহুর কেন্দ্রবিন্দু পর্যন্ত বাঁকিয়ে দেয়।'
        },
        explanation: {
          en: 'border-radius: 50% on an element with equal width and height draws circular arcs from edge midpoints, resulting in a perfect circle.',
          bn: 'সমান প্রস্থ ও উচ্চতাযুক্ত উপাদানে border-radius: 50% দিলে প্রতিটি কোণা বাহুর মাঝবরাবর বৃত্তচাপ তৈরি করে নিখুঁত বৃত্ত গঠন করে।'
        }
      },
      {
        id: 'bq3',
        kind: 'mcq',
        topic: 'css: Margin collapsing behavior',
        question: {
          en: 'When a top element with margin-bottom: 30px touches a bottom element with margin-top: 20px, what is the resulting vertical gap?',
          bn: 'উপরের উপাদানে margin-bottom: 30px এবং নিচেরটিতে margin-top: 20px থাকলে তাদের মাঝের মোট উল্লম্ব ফাঁক কত হবে?'
        },
        options: [
          { en: '30px (collapses to the larger value)', bn: '30px (বড় মানটিতে কলাপ্স করে)' },
          { en: '50px (adds both values together)', bn: '50px (উভয় মান যোগ হয়)' },
          { en: '10px (subtracts the smaller value)', bn: '10px (ছোট মানটি বিয়োগ হয়)' },
          { en: '0px (margins cancel each other out)', bn: '0px (মার্জিন বাতিল হয়ে যায়)' }
        ],
        answer: 0,
        hint: {
          en: 'Vertical margins merge into the single largest value.',
          bn: 'উল্লম্ব মার্জিন পরস্পর যোগ না হয়ে বড়টিতে মিলে যায়।'
        },
        explanation: {
          en: 'In normal flow, adjoining vertical margins collapse into a single space equal to the maximum of the two margin values (30px).',
          bn: 'নরমাল ফ্লোতে পাশাপাশি দুটি উল্লম্ব মার্জিন যোগ না হয়ে তাদের মধ্যে যেটি বড় (৩০px) সেটিই চূড়ান্ত ফাঁক তৈরি করে।'
        }
      },
      {
        id: 'bq4',
        kind: 'mcq',
        topic: 'css: Outline vs border',
        question: {
          en: 'How does a CSS outline differ from a border in element dimensional calculations?',
          bn: 'উপাদানের আকারের হিসাবে CSS আউটলাইন ও বর্ডারের মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          { en: 'An outline does not take up layout space or trigger reflow', bn: 'আউটলাইন কোনো লেআউট জায়গা দখল করে না বা রিফ্লো ঘটায় না' },
          { en: 'An outline can only be drawn with a dashed red line', bn: 'আউটলাইন কেবল লাল রঙের ড্যাশ লাইনে আঁকা যায়' },
          { en: 'An outline is always drawn inside the padding area', bn: 'আউটলাইন সর্বদা প্যাডিংয়ের ভেতরে আঁকা হয়' },
          { en: 'An outline cannot be styled with keyboard focus', bn: 'আউটলাইনে কিবোর্ড ফোকাস দেওয়া যায় না' }
        ],
        answer: 0,
        hint: {
          en: 'Outlines are painted on top of the box without altering width or height.',
          bn: 'আউটলাইন বাক্সের মাপ বা লেআউট পরিবর্তন না করে উপরে রেন্ডার হয়।'
        },
        explanation: {
          en: 'Unlike border, outline does not affect element dimensions or trigger layout shifts; it is drawn outside the border frame.',
          bn: 'বর্ডারের মতো আউটলাইন উপাদানের মাপ পরিবর্তন করে না এবং লেআউট সরায় না; এটি ফ্রেমের উপরে আলতোভাবে আঁকা হয়।'
        }
      }
    ]
  }
};
