import type { Lesson } from '../../../lib/types';

export const positionMapsLesson: Lesson = {
  slug: 'css-position-maps',
  tech: 'css',
  title: {
    en: 'CSS Positioning, Normal Flow, Floats & Stacking Context',
    bn: 'CSS পজিশনিং, নরমাল ফ্লো, ফ্লোট ও স্ট্যাকিং কনটেক্সট'
  },
  summary: {
    en: 'Master document layout coordinate systems across 10 structured topics. Understand normal flow and display modes, relative and absolute positioning, fixed viewport pinning, sticky scrolling headers, and z-index stacking contexts.',
    bn: '১০টি সুসংগঠিত পয়েন্টে লেআউট ও পজিশনিং আয়ত্ত করুন। নরমাল ফ্লো ও ডিসপ্লে মোড, রিলেটিভ ও অ্যাবসোলিউট পজিশনিং, ভিউপোর্ট পিন্ড ফিক্সড পজিশন, স্টিকি স্ক্রলিং হেডার এবং z-index স্ট্যাকিং কনটেক্সট শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'flexbox',
    title: { en: 'Flexbox: one-dimensional arithmetic', bn: 'ফ্লেক্সবক্স: একমাত্রিক পাটিগণিত' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Normal Flow and Display Modes: Block, Inline, and Inline-Block', bn: '১. নরমাল ফ্লো ও ডিসপ্লে মোড: ব্লক, ইনলাইন ও ইনলাইন-ব্লক' } },
    {
      type: 'para',
      text: {
        en: 'When you style elements on a web page, HTML defaults to Normal Flow. Block elements like div and p take the full width and stack vertically on new lines. Inline elements sit alongside running text, ignoring declared width and height. Inline-block components combine both worlds, sitting side by side while honoring custom dimensions and padding.',
        bn: 'যখন আপনি ওয়েব পেজে উপাদান স্টাইল করবেন, তখন ডিফল্টভাবে HTML উপাদানগুলো নরমাল ফ্লোতে সাজানো থাকে। ব্লক উপাদান যেমন div ও p পুরো প্রস্থ দখল করে নিচে নিচে নামে। ইনলাইন উপাদান সাধারণ লেখার সাথে পাশাপাশি বসে এবং নিজস্ব মাপ গ্রহণ করে না। ইনলাইন-ব্লক উপাদান পাশাপাশি বসার সাথে সাথে নিজস্ব সাইজ ও প্যাডিং বজায় রাখে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'CSS Positioning Coordinates', bn: 'CSS পজিশনিং স্থানাঙ্ক রূপরেখা' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Diagram showing static flow, relative offset, absolute container-relative coordinates, and fixed viewport anchor"><g font-size="11" fill="currentColor"><rect x="15" y="15" width="140" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="85" y="38" text-anchor="middle" font-weight="bold">static</text><text x="85" y="70" text-anchor="middle">Normal flow</text><text x="85" y="95" text-anchor="middle">No offsets apply</text><rect x="175" y="15" width="140" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="245" y="38" text-anchor="middle" font-weight="bold">relative</text><text x="245" y="70" text-anchor="middle">Keeps footprint</text><text x="245" y="95" text-anchor="middle">Nudged by top/left</text><rect x="335" y="15" width="140" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="405" y="38" text-anchor="middle" font-weight="bold">absolute</text><text x="405" y="70" text-anchor="middle">Removed from flow</text><text x="405" y="95" text-anchor="middle">Targets relative parent</text><rect x="495" y="15" width="150" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="570" y="38" text-anchor="middle" font-weight="bold">fixed / sticky</text><text x="570" y="70" text-anchor="middle">Pinned to viewport</text><text x="570" y="95" text-anchor="middle">Sticky locks on scroll</text></g></svg>`,
      caption: {
        en: 'Static flows with the document, relative shifts from origin, absolute targets the nearest ancestor frame, and fixed locks to the screen.',
        bn: 'স্ট্যাটিক স্বাভাবিক ফ্লোতে থাকে, রিলেটিভ মূল জায়গা থেকে সরে, অ্যাবসোলিউট নিকটতম ফ্রেম খোঁজে এবং ফিক্সড পর্দায় আটকে থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Display modes comparison */
.box-block {
  display: block;          /* Stacks vertically, fills 100% width by default */
  width: 200px;
  margin-bottom: 8px;
}

.box-inline {
  display: inline;         /* Flows with text, ignores width and height */
  padding: 4px 8px;
}

.box-inline-block {
  display: inline-block;   /* Flows horizontally, respects declared width/height */
  width: 140px;
  height: 60px;
  vertical-align: top;
}

/* Hiding elements */
.hidden-none {
  display: none;           /* Completely removed from document layout flow */
}

.hidden-visibility {
  visibility: hidden;      /* Invisible, but retains its exact physical dimensions */
}

/* Rendered Output:
   inline-block elements sit side-by-side with 140x60 dimensions without line breaks.
*/`,
      caption: {
        en: 'display: none removes an element entirely; visibility: hidden preserves its physical box.',
        bn: 'display: none উপাদানকে সম্পূর্ণ মুছে ফেলে; visibility: hidden জায়গা খালি রেখে অদৃশ্য করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Static and Relative Positioning: The Document Flow Baseline', bn: '২. স্ট্যাটিক ও রিলেটিভ পজিশনিং: বেসলাইন সমন্বয়' } },
    {
      type: 'para',
      text: {
        en: 'The default state for any HTML element is position: static. Under this setting, geometric offsets like top or left are completely ignored. When you switch to position: relative, the element keeps its original footprint in normal flow, but directional offsets can nudge its rendered visual appearance.',
        bn: 'যেকোনো HTML উপাদানের ডিফল্ট অবস্থা হলো position: static। এই অবস্থায় top বা left-এর মতো অফসেট কাজ করে না। কিন্তু position: relative নির্ধারণ করলে উপাদানটি মূল জায়গা ধরে রেখেই নির্দিষ্ট দিকে সামান্য সরে গিয়ে রেন্ডার হতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Default static positioning */
.card-static {
  position: static;        /* top/left properties are ignored */
}

/* Relative positioning with offset */
.badge-nudged {
  position: relative;
  top: -8px;               /* Shifted 8px upward from its original baseline */
  left: 12px;              /* Shifted 12px rightward */
  background: #ef4444;
  color: #ffffff;
}

/* Crucial role: relative establishes positioning context for absolute children */
.parent-container {
  position: relative;      /* Coordinates (0,0) anchor for absolute children */
  width: 320px;
  height: 200px;
}

/* Rendered Output:
   Badge visually shifts -8px up and 12px right; original space in normal flow remains reserved.
*/`,
      caption: {
        en: 'Relative positioning moves an element visually while preserving its original DOM footprint.',
        bn: 'রিলেটিভ পজিশনিং মূল জায়গা ঠিক রেখেই উপাদানকে কিছুটা সরিয়ে দেখায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Absolute Positioning: Context Anchors and Co-ordinate Bounds', bn: '৩. অ্যাবসোলিউট পজিশনিং: প্যারেন্ট সাপেক্ষে নির্দিষ্ট স্থানাঙ্ক' } },
    {
      type: 'para',
      text: {
        en: 'An element with position: absolute is completely removed from the normal document flow, creating no gap in the layout. It positions itself relative to its nearest ancestor with a position other than static (typically position: relative). If no positioned ancestor exists, it positions relative to the initial containing block (the HTML viewport).',
        bn: 'position: absolute যুক্ত উপাদান সাধারণ ডকুমেন্ট ফ্লো থেকে সম্পূর্ণ আলাদা হয়ে যায় এবং কোনো জায়গা দখল করে না। এটি তার নিকটতম পজিশনড প্যারেন্টের (যাতে position: relative থাকে) সাপেক্ষে নিজের অবস্থান ঠিক করে। কোনো পজিশনড প্যারেন্ট না পেলে এটি সরাসরি ভিউপোর্টের সাপেক্ষে বসে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Container acts as anchor */
.product-card {
  position: relative;      /* Anchor for child absolute coordinates */
  width: 280px;
  height: 360px;
  border: 1px solid #e2e8f0;
}

/* Child absolute element pinned to top-right corner */
.sale-pill {
  position: absolute;
  top: 12px;
  right: 12px;
  background-color: #ef4444;
  color: #ffffff;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
}

/* Bottom status bar */
.card-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;                /* Stretches full width of parent */
  height: 48px;
  background: #f8fafc;
}

/* Rendered Output:
   Pill floats at top-right (12px, 12px); footer locks to bottom of product card regardless of body content.
*/`,
      caption: {
        en: 'Absolute positioning pins children to exact boundaries inside a relative container.',
        bn: 'রিলেটিভ কনটেইনারের ভেতরে অ্যাবসোলিউট উপাদানকে যেকোনো কোণায় নিখুঁতভাবে বসানো যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Fixed Positioning: Viewport Pinned Headers and Floating Actions', bn: '৪. ফিক্সড পজিশনিং: ভিউপোর্টে আটকে থাকা হেডার ও বাটন' } },
    {
      type: 'para',
      text: {
        en: 'position: fixed removes the element from the document flow and pins it directly to the browser viewport window. It remains in its exact screen position even when the user scrolls the page. Common use cases include sticky top headers, bottom mobile navbars, and floating contact action buttons.',
        bn: 'position: fixed উপাদানকে সাধারণ ফ্লো থেকে সরিয়ে সরাসরি ব্রাউজার উইন্ডো বা ভিউপোর্টে আটকে রাখে। পৃষ্ঠা যত নিচে বা উপরে স্ক্রল করা হোক না কেন, এটি নির্দিষ্ট জায়গায় স্থির থাকে। স্থায়ী হেডার, মোবাইল বটম বার এবং ভাসমান মেসেঞ্জার বাটনে এটি বহুল ব্যবহৃত।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Persistent top navigation bar */
header.site-nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(8px);
  z-index: 1000;           /* Keep above scrolling content */
}

/* Compensate body so content is not buried underneath fixed header */
body {
  padding-top: 64px;       /* Exactly equal to header height */
}

/* Floating Action Button (FAB) at bottom-right corner */
.fab-chat {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: #2563eb;
  z-index: 1050;
}

/* Rendered Output:
   Header stays locked to viewport top; FAB hovers at bottom-right during entire page scroll.
*/`,
      caption: {
        en: 'Fixed elements anchor directly to the browser viewport, remaining visible through all scrolling.',
        bn: 'ফিক্সড উপাদান স্ক্রিনের সাথে আটকে থাকে, ফলে স্ক্রল করলেও স্থান পরিবর্তন হয় না।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Sticky Positioning: Hybrid Scroll-Triggered Anchoring', bn: '৫. স্টিকি পজিশনিং: স্ক্রল সাপেক্ষে স্বয়ংক্রিয় হেডার লক' } },
    {
      type: 'para',
      text: {
        en: 'position: sticky is a hybrid between relative and fixed positioning. The element flows normally until scroll offsets cross a designated threshold, such as top: 0. Beyond that point, it sticks like a fixed component until reaching the bottom of its parent boundary.',
        bn: 'position: sticky হলো রিলেটিভ ও ফিক্সড পজিশনের সমন্বয়। উপাদানটি সাধারণ অবস্থায় রিলেটিভের মতো আচরণ করে। কিন্তু স্ক্রল করতে করতে নির্দিষ্ট সীমায় (যেমন top: 0) পৌঁছালে তা ফিক্সডের মতো আটকে যায় যতক্ষণ না প্যারেন্টের তলানি শেষ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Sticky table column or section title */
.section-header {
  position: sticky;
  top: 0;                  /* Required threshold property */
  background: #ffffff;
  padding: 12px 16px;
  border-bottom: 2px solid #e2e8f0;
  z-index: 10;
}

/* Sticky sidebar that scrolls with content up to viewport limit */
aside.sidebar {
  position: sticky;
  top: 80px;               /* Locks 80px below the fixed navbar */
  height: calc(100vh - 100px);
}

/* Rendered Output:
   Section headers stay pinned to top of screen while reading their respective section content.
*/`,
      caption: {
        en: 'Sticky positioning requires an offset threshold (top/bottom) and stays within parent bounds.',
        bn: 'স্টিকি পজিশনের জন্য top বা bottom মান দেওয়া আবশ্যক এবং এটি প্যারেন্টের সীমানায় কাজ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Z-Index and Stacking Contexts: The Third Dimension', bn: '৬. Z-Index ও স্ট্যাকিং কনটেক্সট: ত্রিমাত্রিক লেয়ারিং নীতি' } },
    {
      type: 'para',
      text: {
        en: 'The z-index property specifies the stack order of positioned elements (relative, absolute, fixed, sticky). Higher integers render on top of lower integers. However, z-index only operates within its local Stacking Context. A new stacking context is created by opacity < 1, transform, filter, or position with z-index.',
        bn: 'z-index প্রপার্টি পজিশনড উপাদানগুলোর ত্রিমাত্রিক স্তরায়ণ (stack order) নির্ধারণ করে। বেশি মানের সংখ্যা কম মানের উপরে ভেসে ওঠে। তবে z-index কেবল তার লোকাল স্ট্যাকিং কনটেক্সটের ভেতরেই কাজ করে। opacity < 1, transform, filter অথবা position-সহ z-index নতুন স্ট্যাকিং কনটেক্সট তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Layering standard conventions */
.layer-dropdown {
  position: absolute;
  z-index: 100;
}

.layer-sticky-header {
  position: sticky;
  top: 0;
  z-index: 200;
}

.layer-modal-backdrop {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.layer-modal-dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1010;           /* Renders directly above backdrop */
}

/* Rendered Output:
   Modal dialog (z: 1010) renders above dark backdrop (z: 1000), which blocks sticky header (z: 200).
*/`,
      caption: {
        en: 'z-index values resolve sequentially, layering dialogs safely over page content.',
        bn: 'z-index মান ক্রমানুসারে পেজের ওপর মোডাল ও ড্রপডাউনকে স্তরে স্তরে সাজায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. CSS Overflow: Visible, Hidden, Scroll, and Auto', bn: '৭. CSS ওভারফ্লো: কন্টেন্ট উপচে পড়া নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'The overflow property dictates what happens when content exceeds its box dimensions. visible renders overflowing content outside the box; hidden clips it without scrollbars; scroll forces visible scrollbars regardless of content size; and auto adds scrollbars only when content actually overflows.',
        bn: 'উপাদানের কনটেন্ট তার নির্ধারিত বক্সের আকারের চেয়ে বড় হয়ে গেলে কী হবে তা overflow প্রপার্টি ঠিক করে। visible বাড়তি লেখা বাইরে দেখায়; hidden বাড়তি লেখা কেটে বাদ দেয়; scroll সবসময় স্ক্রলবার দেখায়; এবং auto শুধুমাত্র লেখা উপচে পড়লেই স্বয়ংক্রিয়ভাবে স্ক্রলবার যুক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Scrollable feed container */
.scroll-feed {
  height: 300px;
  overflow-y: auto;        /* Vertical scrollbar only when content exceeds 300px */
  overflow-x: hidden;      /* Prevent unwanted horizontal jitter */
}

/* 2. Code container with horizontal scrolling */
pre.code-terminal {
  max-width: 100%;
  overflow-x: auto;        /* Allows long code lines to scroll horizontally */
  white-space: pre;
}

/* 3. Clipping child overlays with rounded corners */
.card-wrapper {
  border-radius: 12px;
  overflow: hidden;        /* Clips inner images to follow card radius */
}

/* Rendered Output:
   Feed scrolls smoothly vertically; code blocks scroll horizontally without breaking screen layout.
*/`,
      caption: {
        en: 'overflow: auto creates clean scrollable containers; overflow: hidden clips outer corners.',
        bn: 'overflow: auto মসৃণ স্ক্রল তৈরি করে; overflow: hidden কোণাগুলো সুন্দরভাবে কেটে রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. CSS Floats, Clear, and the Clearfix Micro-Hack', bn: '৮. CSS ফ্লোট, ক্লিয়ার ও ক্লিয়ারফিক্স পদ্ধতি' } },
    {
      type: 'para',
      text: {
        en: 'The float property (left or right) takes an element and wraps inline text around it, traditionally used for magazine-style editorial images. When all children of a parent are floated, the parent collapses to zero height. The clearfix hack restores container height using the ::after pseudo-element.',
        bn: 'float প্রপার্টি (left বা right) কোনো উপাদানকে একপাশে ঠেলে দেয় এবং টেক্সট তার চারপাশ দিয়ে প্রবাহিত হয়। কনটেইনারের সব চাইল্ড ফ্লোট হলে প্যারেন্টের উচ্চতা শূন্য হয়ে যায়। এই উচ্চতা পুনরুদ্ধার করতে ::after সিউডো-এলিমেন্ট দিয়ে ক্লিয়ারফিক্স (clearfix) ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Magazine image wrap */
img.float-article-img {
  float: left;
  margin: 0 16px 12px 0;   /* Space on right and bottom of image */
  border-radius: 6px;
}

/* Standard Nicolas Gallagher Clearfix */
.clearfix::after {
  content: "";
  display: table;
  clear: both;             /* Forces parent container to encompass floated children */
}

/* Modern alternative to clearfix */
.modern-clear-container {
  display: flow-root;      /* Creates a block formatting context, auto-clearing floats */
}

/* Rendered Output:
   Paragraph text wraps neatly around the left-floated image; container fully wraps all child content.
*/`,
      caption: {
        en: 'Floats wrap text around images; display: flow-root provides modern automatic float clearing.',
        bn: 'ফ্লোট ছবির চারপাশে টেক্সট মুড়ে দেয়; display: flow-root আধুনিক উপায়ে ফ্লোট ক্লিয়ার করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. CSS Centering Techniques: Horizontal and Vertical', bn: '৯. CSS সেন্টারিং কৌশল: অনুভূমিক ও উল্লম্ব নিখুঁত কেন্দ্র' } },
    {
      type: 'para',
      text: {
        en: 'Centering is a core layout requirement. Block elements are horizontally centered using margin: 0 auto with a declared width. Absolute elements are centered using top: 50%; left: 50%; transform: translate(-50%, -50%). Modern flex and grid layouts center with place-items: center.',
        bn: 'উপাদানকে পেজের ঠিক মাঝখানে আনা একটি প্রাথমিক দক্ষতা। ব্লক উপাদান অনুভূমিকভাবে সেন্টারে আনতে নির্দিষ্ট width এবং margin: 0 auto ব্যবহার করা হয়। অ্যাবসোলিউট উপাদান সেন্টারে আনতে top: 50%; left: 50%; transform: translate(-50%, -50%) ব্যবহৃত হয়। আধুনিক ফ্লেক্স ও গ্রিডে place-items: center দিয়ে সহজে সেন্টারিং করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Centering a block container horizontally */
.container-centered {
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;      /* Equal left and right margins balance block in center */
}

/* 2. Dead-center modal with Absolute + Transform */
.modal-dead-center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Shifts element back by half its own width/height */
}

/* 3. Text centering */
.title-centered {
  text-align: center;      /* Centers inline child elements and text */
}

/* Rendered Output:
   Modals lock to exact screen center irrespective of dynamic inner content dimensions.
*/`,
      caption: {
        en: 'translate(-50%, -50%) centers elements accurately without hardcoding pixel dimensions.',
        bn: 'পিক্সেল মাপ নির্ধারণ না করেই translate(-50%, -50%) উপাদানকে ঠিক কেন্দ্রে বসায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Navigation Bars and Nested Dropdown Menus', bn: '১০. ন্যাভিগেশন বার ও ড্রপডাউন মেনু তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Navigation bars combine lists, inline-block or flexbox layout, and relative/absolute positioning. Dropdown submenus are anchored with position: relative on the parent list item, while the submenu itself uses position: absolute, hidden with display: none and revealed on :hover or :focus-within.',
        bn: 'ন্যাভিগেশন বার লিস্ট, ডিসপ্লে মোড এবং রিলেটিভ/অ্যাবসোলিউট পজিশনিংয়ের সমন্বয়ে তৈরি হয়। ড্রপডাউন সাবমেনুর প্যারেন্ট li-তে position: relative রাখা হয় এবং সাবমেনুটি নিজে position: absolute হয়ে লুকিয়ে থাকে। মাউস হোভার (:hover) করলে তা প্রদর্শিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Top Navigation Container */
nav.main-nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

/* Relative anchor for dropdown */
nav.main-nav li.has-dropdown {
  position: relative;
}

/* Submenu dropdown */
nav.main-nav .dropdown-menu {
  display: none;           /* Hidden by default */
  position: absolute;
  top: 100%;               /* Directly below navigation link */
  left: 0;
  min-width: 180px;
  background-color: #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  padding: 8px 0;
}

/* Reveal dropdown on hover or keyboard focus */
nav.main-nav li.has-dropdown:hover .dropdown-menu,
nav.main-nav li.has-dropdown:focus-within .dropdown-menu {
  display: block;
}

/* Rendered Output:
   Navigation displays horizontally; hovering over parent item reveals dropdown menu below it.
*/`,
      caption: {
        en: 'Relative parents provide coordinate boundaries for absolutely positioned dropdown submenus.',
        bn: 'রিলেটিভ প্যারেন্ট ড্রপডাউন মেনুর জন্য নিখুঁত স্থানাঙ্ক সীমানা তৈরি করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-pos-ex1',
      kind: 'predict',
      topic: 'css: Position absolute anchor',
      question: {
        en: 'If an absolutely positioned element has no ancestor with position: relative, what does it position relative to?',
        bn: 'যদি কোনো অ্যাবসোলিউট পজিশনড উপাদানের কোনো রিলেটিভ প্যারেন্ট না থাকে, তবে সেটি কার সাপেক্ষে অবস্থান নির্ধারণ করে?'
      },
      code: `/* Element has position: absolute; */
/* No parents have position: relative */`,
      answer: 'viewport',
      accept: ['viewport', 'the viewport', 'initial containing block', 'html', 'window'],
      hint: {
        en: 'It falls back to the browser window / initial containing block.',
        bn: 'এটি ব্রাউজারের ভিউপোর্ট বা উইন্ডোর সাপেক্ষে বসে।'
      },
      explanation: {
        en: 'An element with position: absolute looks up the DOM tree for the nearest ancestor with a position other than static. If none is found, it anchors to the initial containing block (the viewport).',
        bn: 'position: absolute যুক্ত উপাদান প্যারেন্টদের মধ্যে পজিশনড উপাদান খোঁজে। কাউকে না পেলে এটি সরাসরি ব্রাউজার ভিউপোর্টের সাপেক্ষে অবস্থান নেয়।'
      }
    },
    {
      id: 'css-pos-ex2',
      kind: 'mcq',
      topic: 'css: Display none vs visibility hidden',
      question: {
        en: 'What is the visual difference between display: none and visibility: hidden?',
        bn: 'display: none এবং visibility: hidden-এর মধ্যে মূল চাক্ষুষ পার্থক্য কী?'
      },
      options: [
        { en: 'display: none releases page layout space; visibility: hidden hides text but preserves physical space', bn: 'display: none পেজের জায়গা খালি করে দেয়; visibility: hidden উপাদান লুকালেও তার শারীরিক জায়গা ধরে রাখে' },
        { en: 'display: none only works on text, visibility on images', bn: 'display: none শুধু টেক্সটে কাজ করে, visibility ছবিতে কাজ করে' },
        { en: 'visibility: hidden deletes the element from the DOM tree', bn: 'visibility: hidden উপাদানটিকে DOM থেকে মুছে ফেলে' },
        { en: 'There is no difference between them', bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'One keeps the empty rectangular hole, the other collapses it.',
        bn: 'একটি খালি বক্সের মতো জায়গা ধরে রাখে, অন্যটি কোনো জায়গাই রাখে না।'
      },
      explanation: {
        en: 'display: none removes the element from rendering flow completely, taking up no space. visibility: hidden renders the element invisible, but its box width and height remain in place.',
        bn: 'display: none উপাদানকে রেন্ডারিং ফ্লো থেকে সরিয়ে দেয়, ফলে কোনো স্থান অপচয় হয় না। visibility: hidden উপাদানকে অদৃশ্য করলেও তার জায়গা খালি রেখে দেয়।'
      }
    },
    {
      id: 'css-pos-ex3',
      kind: 'mcq',
      topic: 'css: Sticky positioning requirement',
      question: {
        en: 'What property must be declared alongside position: sticky for the sticking effect to work?',
        bn: 'position: sticky কার্যকর হওয়ার জন্য এর সাথে বাধ্যতামূলকভাবে কোন প্রপার্টি ঘোষণা করতে হয়?'
      },
      options: [
        { en: 'At least one threshold property like top, bottom, left, or right', bn: 'কমপক্ষে একটি থ্রেশহোল্ড প্রপার্টি যেমন top, bottom, left বা right' },
        { en: 'float: left', bn: 'float: left' },
        { en: 'overflow: hidden on all parents', bn: 'সকল প্যারেন্টে overflow: hidden' },
        { en: 'z-index: 9999', bn: 'z-index: 9999' }
      ],
      answer: 0,
      hint: {
        en: 'The browser needs to know at what scroll coordinate to lock the element.',
        bn: 'কোন স্ক্রল বিন্দুতে এসে উপাদানটি আটকে যাবে ব্রাউজারকে তা জানাতে হয়।'
      },
      explanation: {
        en: 'position: sticky requires at least one directional offset threshold (commonly top: 0). Without a threshold specified, the element behaves like position: static.',
        bn: 'position: sticky কাজ করার জন্য অন্তত একটি ডিরেকশনাল থ্রেশহোল্ড (যেমন top: 0) প্রয়োজন। এটি না দিলে তা সাধারণ স্ট্যাটিকের মতো আচরণ করে।'
      }
    }
  ],
  quiz: {
    id: 'css-position-quiz',
    title: { en: 'CSS Positioning Quiz', bn: 'CSS পজিশনিং কুইজ' },
    questions: [
      {
        id: 'posq1',
        kind: 'mcq',
        topic: 'css: Z-index prerequisite',
        question: {
          en: 'Why does z-index fail to take effect on a standard static div?',
          bn: 'একটি সাধারণ স্ট্যাটিক div-এর ওপর z-index দিলে তা কাজ করে না কেন?'
        },
        options: [
          { en: 'z-index only applies to elements with a position property other than static (relative, absolute, fixed, sticky) or flex/grid items', bn: 'z-index কেবল স্ট্যাটিক ছাড়া অন্য পজিশন (relative, absolute, fixed, sticky) অথবা flex/grid আইটেমে কাজ করে' },
          { en: 'z-index only works with negative numbers', bn: 'z-index শুধু নেগেটিভ সংখ্যায় কাজ করে' },
          { en: 'z-index requires an ID selector', bn: 'z-index-এর জন্য আইডি সিলেক্টর দরকার হয়' },
          { en: 'div elements do not support layering', bn: 'div উপাদানে লেয়ারিং সাপোর্ট করে না' }
        ],
        answer: 0,
        hint: {
          en: 'Check the element position value.',
          bn: 'উপাদানটির পজিশন ভ্যালু খেয়াল করুন।'
        },
        explanation: {
          en: 'Under CSS specifications, z-index only applies to positioned elements (position: relative, absolute, fixed, or sticky) and direct children of flex or grid containers.',
          bn: 'CSS নিয়ম অনুযায়ী z-index কাজ করার জন্য উপাদানটিতে position: relative, absolute, fixed, sticky অথবা flex/grid চাইল্ড হতে হয়।'
        }
      },
      {
        id: 'posq2',
        kind: 'mcq',
        topic: 'css: Dead center with transform',
        question: {
          en: 'In the formula top: 50%; left: 50%; transform: translate(-50%, -50%), what does the translate(-50%, -50%) portion accomplish?',
          bn: 'top: 50%; left: 50%; transform: translate(-50%, -50%) পদ্ধতিতে translate(-50%, -50%) অংশটি আসলে কী কাজ করে?'
        },
        options: [
          { en: 'It shifts the element back left and up by exactly 50% of the element’s own width and height', bn: 'এটি উপাদানটিকে তার নিজস্ব প্রস্থ ও উচ্চতার ৫০% পরিমাণ পেছনে (বামে ও উপরে) সরিয়ে আনে' },
          { en: 'It shrinks the element size by half', bn: 'এটি উপাদানের আকার অর্ধেকে নামিয়ে আনে' },
          { en: 'It shifts the parent container to the left', bn: 'এটি প্যারেন্ট কনটেইনারকে বামে সরায়' },
          { en: 'It sets transparency to 50%', bn: 'এটি ৫০% স্বচ্ছতা তৈরি করে' }
        ],
        answer: 0,
        hint: {
          en: 'Percentages in translate() refer to the element itself, not the parent.',
          bn: 'translate()-এ শতকরা মান উপাদানের নিজস্ব আকারের ওপর নির্ভর করে, প্যারেন্টের ওপর নয়।'
        },
        explanation: {
          en: 'top/left: 50% places the top-left corner of the element at the parent center. transform: translate(-50%, -50%) shifts the element back by half its own dimensions, placing the true center of the element at the center of the container.',
          bn: 'top ও left ৫০% দিলে উপাদানের উপরের-বাম কোণা কেন্দ্রে বসে। translate(-50%, -50%) উপাদানকে তার নিজের আকারের অর্ধেক বামে ও উপরে সরিয়ে এনে প্রকৃত কেন্দ্রবিন্দু নিশ্চিত করে।'
        }
      },
      {
        id: 'posq3',
        kind: 'mcq',
        topic: 'css: Absolute positioning anchor',
        question: {
          en: 'Which ancestor element serves as the coordinate frame for an element with position: absolute?',
          bn: 'position: absolute থাকা উপাদানের স্থানাঙ্কের ফ্রেম হিসেবে কোন পূর্বপুরুষ উপাদানটি কাজ করে?'
        },
        options: [
          { en: 'The nearest positioned ancestor (anything other than position: static)', bn: 'নিকটতম পজিশনযুক্ত পূর্বপুরুষ (static ব্যতীত যেকোনো মান)' },
          { en: 'The immediate parent element regardless of its position value', bn: 'পজিশন যাই হোক না কেন সরাসরি প্যারেন্ট উপাদান' },
          { en: 'Always the browser viewport window', bn: 'সর্বদা ব্রাউজারের ভিউপোর্ট উইন্ডো' },
          { en: 'The nearest element that has a background color set', bn: 'ব্যাকগ্রাউন্ড কালার থাকা নিকটতম উপাদান' }
        ],
        answer: 0,
        hint: {
          en: 'Usually created by applying position: relative to the container.',
          bn: 'সাধারণত কনটেইনারে position: relative দিয়ে এই ফ্রেম তৈরি করা হয়।'
        },
        explanation: {
          en: 'An absolutely positioned element positions itself relative to the nearest ancestor with a position other than static. If none exists, it falls back to the initial containing block (viewport).',
          bn: 'একটি অ্যাবসোলিউট উপাদান static ব্যতীত অন্য পজিশনযুক্ত নিকটতম পূর্বপুরুষ সাপেক্ষে বসে। এমন কেউ না থাকলে তা ভিউপোর্টকে রেফারেন্স ধরে।'
        }
      },
      {
        id: 'posq4',
        kind: 'mcq',
        topic: 'css: Fixed vs sticky positioning',
        question: {
          en: 'How does position: fixed behave when the user scrolls down a long document?',
          bn: 'ব্যবহারকারী লম্বা পেজ স্ক্রল করলে position: fixed উপাদান কীভাবে আচরণ করে?'
        },
        options: [
          { en: 'It remains pinned to the viewport coordinates regardless of scrolling', bn: 'স্ক্রল যাই হোক না কেন এটি ভিউপোর্টের নির্দিষ্ট জায়গায় স্থির থাকে' },
          { en: 'It scrolls out of view immediately with the page flow', bn: 'পেজের লেখার সাথে সাথে এটিও উপরে স্ক্রল হয়ে হারিয়ে যায়' },
          { en: 'It stops moving only when reaching the bottom footer', bn: 'কেবলমাত্র ফুটার অংশে পৌঁছালে এটি থমকে দাঁড়ায়' },
          { en: 'It hides automatically on mobile touch screens', bn: 'মোবাইল টাচ স্ক্রিনে এটি নিজে থেকেই অদৃশ্য হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Anchored directly to the screen viewport.',
          bn: 'সরাসরি ব্রাউজারের দৃশ্যমান ভিউপোর্টে আটকে থাকে।'
        },
        explanation: {
          en: 'position: fixed removes the element from the document flow and anchors it to the viewport, keeping it visible regardless of scrolling.',
          bn: 'position: fixed উপাদানটিকে সাধারণ ফ্লো থেকে সরিয়ে ভিউপোর্টে আটকে রাখে, ফলে পেজ যত স্ক্রলই হোক না কেন তা পর্দায় স্থির থাকে।'
        }
      }
    ]
  }
};
