import type { Lesson } from '../../../lib/types';

export const responsiveEstateLesson: Lesson = {
  slug: 'css-responsive',
  tech: 'css',
  title: {
    en: 'Responsive Web Design: Media Queries, Fluid Units & Layouts',
    bn: 'রেসপন্সিভ ওয়েব ডিজাইন: মিডিয়া কোয়েরি, ফ্লুইড ইউনিট ও লেআউট'
  },
  summary: {
    en: 'Master multi-device design across 10 structured topics. Understand mobile-first architecture, the viewport meta tag, relative CSS units, media queries, clamp() fluid typography, and responsive grid layouts.',
    bn: '১০টি সুসংগঠিত point-এ সব ডিভাইসের জন্য রেসপন্সিভ ডিজাইন শিখুন। মোবাইল-ফার্স্ট কৌশল, ভিউপোর্ট মেটা ট্যাগ, রিলেটিভ CSS ইউনিট, মিডিয়া কোয়েরি, clamp() ফ্লুইড টাইপোগ্রাফি এবং রেসপন্সিভ গ্রিড আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'css-motion',
    title: { en: 'The Motion Hall: transitions, transforms and keyframe plays', bn: 'নৃত্য-হল: ট্রানজিশন, ট্রান্সফর্ম আর কীফ্রেম-নাটক' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Responsive Web Design & The Mobile-First Strategy', bn: '১. রেসপন্সিভ ডিজাইন ও মোবাইল-ফার্স্ট কৌশল' } },
    {
      type: 'para',
      text: {
        en: 'Responsive Web Design (RWD) ensures web applications adapt seamlessly across all screen sizes, from mobile phones to 4K ultra-wide monitors. The mobile-first approach writes default styles for small screens without media queries, then progressively enhances the layout for larger viewports using min-width media queries.',
        bn: 'রেসপন্সিভ ওয়েব ডিজাইন (RWD) নিশ্চিত করে যাতে ওয়েবসাইট মোবাইল থেকে শুরু করে যেকোনো বড় মনিটরে চমৎকারভাবে দেখা যায়। মোবাইল-ফার্স্ট কৌশলে কোনো মিডিয়া কোয়েরি ছাড়াই প্রথমে ছোট স্ক্রিনের বেস স্টাইল লেখা হয়, তারপর min-width মিডিয়া কোয়েরি ব্যবহার করে ধাপে ধাপে বড় স্ক্রিনের জন্য লেআউট প্রসারিত করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Mobile-First Pattern (Recommended):
   Base styles target mobile screens by default.
*/
.product-grid {
  display: grid;
  grid-template-columns: 1fr;           /* Single column on mobile devices */
  gap: 16px;
}

/* Tablet enhancement: 2 columns */
@media screen and (min-width: 640px) {
  .product-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* Desktop enhancement: 4 columns */
@media screen and (min-width: 1024px) {
  .product-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

/* Rendered Output:
   Phones display 1 column; tablets show 2 columns; desktop monitors expand to 4 columns.
*/`,
      caption: {
        en: 'Mobile-first builds lightweight baselines and progressively layers complexity.',
        bn: 'মোবাইল-ফার্স্ট প্রথমে হালকা বেসলাইন তৈরি করে এবং স্ক্রিনের আকার বাড়ার সাথে ফিচার যুক্ত করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Responsive Screen Breakpoints', bn: 'রেসপন্সিভ স্ক্রিন ব্রেকপয়েন্ট রূপরেখা' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Diagram of responsive screen widths showing mobile baseline, tablet min-width 768px, and desktop min-width 1024px"><g font-size="11" fill="currentColor"><rect x="20" y="20" width="130" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="85" y="45" text-anchor="middle" font-weight="bold">Mobile Base</text><text x="85" y="75" text-anchor="middle">&lt; 768px</text><text x="85" y="105" text-anchor="middle">1 column</text><text x="85" y="125" text-anchor="middle">Stacked</text><rect x="175" y="20" width="180" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="265" y="45" text-anchor="middle" font-weight="bold">Tablet (@min-width 768)</text><text x="265" y="75" text-anchor="middle">768px - 1023px</text><text x="265" y="105" text-anchor="middle">2 columns</text><text x="265" y="125" text-anchor="middle">Expanded nav</text><rect x="380" y="20" width="260" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="510" y="45" text-anchor="middle" font-weight="bold">Desktop (@min-width 1024)</text><text x="510" y="75" text-anchor="middle">&ge; 1024px</text><text x="510" y="105" text-anchor="middle">Multi-column Grid</text><text x="510" y="125" text-anchor="middle">Sidebar + Content</text></g></svg>`,
      caption: {
        en: 'Mobile-first styles scale upward: baseline mobile styles expand onto tablets and desktops with min-width media queries.',
        bn: 'মোবাইল-ফার্স্ট নীতিতে নিচ থেকে উপরে বিস্তার ঘটে: সাধারণ মোবাইল স্টাইলের পর min-width দিয়ে ট্যাবলেট ও ডেস্কটপের লেআউট সাজানো হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Viewport Meta Tag: Preventing Virtual Zooming', bn: '২. ভিউপোর্ট মেটা ট্যাগ: ভার্চুয়াল জুম বন্ধ করা' } },
    {
      type: 'para',
      text: {
        en: 'Mobile browsers default to a virtual 980px desktop viewport unless instructed otherwise, rendering desktop pages tiny and unreadable. The viewport meta tag instructs mobile browsers to match the screen’s physical width and establish a 1:1 pixel scale.',
        bn: 'মোবাইল ব্রাউজারকে নির্দেশ না দিলে তারা ডিফল্টভাবে ৯৮০ পিক্সেলের ভার্চুয়াল ডেস্কটপ স্ক্রিন ধরে নেয়, ফলে মোবাইল স্ক্রিনে সবকিছু ক্ষুদ্র ও অস্পষ্ট দেখায়। ভিউপোর্ট মেটা ট্যাগ ব্রাউজারকে মোবাইল ডিভাইসের আসল প্রস্থ গ্রহণ করতে এবং ১:১ স্কেলে পৃষ্ঠা প্রদর্শন করতে বাধ্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      code: `<!-- The Mandatory Responsive Meta Tag in <head> -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!--
  width=device-width: Sets viewport width equal to the physical screen width.
  initial-scale=1.0: Sets the initial 100% zoom level when the page loads.
-->

<!-- Rendered Output:
   Browser sets 1 CSS pixel = 1 device-independent pixel, enabling media queries to trigger accurately.
-->`,
      caption: {
        en: 'The viewport meta tag is required for media queries to operate correctly on mobile devices.',
        bn: 'মোবাইলে মিডিয়া কোয়েরি সঠিকভাবে কাজ করার জন্য ভিউপোর্ট মেটা ট্যাগ থাকা বাধ্যতামূলক।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. CSS Units: Absolute (px) vs Relative (rem, em, %, vw, vh)', bn: '৩. CSS ইউনিট: এবসোলিউট (px) বনাম রিলেটিভ (rem, em, %, vw, vh)' } },
    {
      type: 'para',
      text: {
        en: 'CSS units dictate how sizes scale. Absolute units (px) stay fixed regardless of user zoom or font preferences. Relative units adapt: rem scales with the root (html) font-size (1rem = 16px by default); em scales with the immediate parent element; % scales with parent box dimensions; and vw/vh represent 1% of the viewport width/height.',
        bn: 'CSS ইউনিট সাইজ স্কেলিং নির্ধারণ করে। এবসোলিউট ইউনিট (px) ব্যবহারকারীর ব্রাউজার ফন্ট সেটিংস নির্বিশেষে স্থির থাকে। রিলেটিভ ইউনিট পরিবেশের সাথে পরিবর্তিত হয়: rem রুট (html) ফন্ট-সাইজের অনুপাতে বাড়ে (ডিফল্ট 1rem = 16px); em বর্তমান প্যারেন্টের ফন্ট-সাইজ অনুসারে চলে; % প্যারেন্ট বক্সের সাপেক্ষে পরিমাপ করে; এবং vw/vh ভিউপোর্টের প্রস্থ ও উচ্চতার ১% নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Standard sizing unit best practices */
:root {
  font-size: 16px;           /* 1rem = 16px */
}

/* Use rem for typography and spacing (scales with accessibility preferences) */
body {
  font-size: 1rem;           /* 16px */
  padding: 1.5rem;           /* 24px */
}

/* Fullscreen hero section using viewport units */
.hero-section {
  width: 100vw;              /* 100% of viewport width */
  min-height: 100vh;         /* 100% of viewport height */
}

/* Percentage for fluid child boxes */
.container-narrow {
  width: 90%;                /* Adapts flexibly inside any parent */
  max-width: 1200px;         /* Prevents over-stretching on ultra-wide screens */
  margin: 0 auto;
}

/* Rendered Output:
   Typography honors user accessibility font scaling; containers adapt fluidly across devices.
*/`,
      caption: {
        en: 'rem units respect user font preferences; vw/vh allow full-screen view scaling.',
        bn: 'rem ইউনিট ব্যবহারকারীর ফন্ট পছন্দকে সম্মান করে; vw/vh ফুল-স্ক্রিন লেআউটে কার্যকর।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. CSS Media Queries: Syntax and Modern Range Operators', bn: '৪. CSS মিডিয়া কোয়েরি: সিনট্যাক্স ও আধুনিক রেঞ্জ অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'Media queries apply CSS blocks conditionally based on device characteristics like screen width, resolution, and orientation. Modern CSS supports mathematical range operators (@media (width >= 768px)) alongside the classic min-width / max-width syntax.',
        bn: 'মিডিয়া কোয়েরি ডিভাইসের বৈশিষ্ট্য যেমন স্ক্রিনের প্রস্থ, রেজোলিউশন ও ওরিয়েন্টেশনের ওপর ভিত্তি করে নির্দিষ্ট CSS কোড কার্যকর করে। আধুনিক CSS-এ প্রচলিত min-width / max-width-এর পাশাপাশি গাণিতিক রেঞ্জ অপারেটর (@media (width >= 768px)) সাপোর্ট করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Classic Media Query Syntax */
@media screen and (min-width: 768px) and (max-width: 1024px) {
  .tablet-banner {
    display: block;
  }
}

/* 2. Modern CSS Media Query Range Syntax (Clean and intuitive) */
@media (768px <= width <= 1024px) {
  .tablet-badge {
    color: #2563eb;
  }
}

/* 3. Orientation query */
@media (orientation: landscape) {
  .video-modal {
    height: 90vh;
  }
}

/* Rendered Output:
   Specific rules activate exclusively when browser viewport dimensions match the declared range.
*/`,
      caption: {
        en: 'Modern range syntax provides clean, readable condition bounds for viewport widths.',
        bn: 'আধুনিক রেঞ্জ সিনট্যাক্স মিডিয়া কোয়েরির শর্তগুলোকে পরিষ্কার ও বোধগম্য করে তোলে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Standard Responsive Breakpoints: Mobile, Tablet, and Desktop', bn: '৫. আদর্শ রেসপন্সিভ ব্রেকপয়েন্ট: মোবাইল, ট্যাবলেট ও ডেস্কটপ' } },
    {
      type: 'para',
      text: {
        en: 'Rather than targeting specific phone models, professional web developers use common device bucket breakpoints: Mobile (< 640px), Small Tablet / Phablet (640px), Standard Tablet (768px), Laptop / Desktop (1024px), and Large Desktop (1280px+).',
        bn: 'নির্দিষ্ট কোনো ফোন মডেলকে টার্গেট করার পরিবর্তে প্রফেশনাল ওয়েব ডিজাইনে সার্বজনীন ব্রেকপয়েন্ট ব্যবহার করা হয়: মোবাইল (< ৬৪০px), ছোট ট্যাবলেট (৬৪০px), সাধারণ ট্যাবলেট (৭৬৮px), ল্যাপটপ/ডেস্কটপ (১০২৪px) এবং বড় মনিটর (১২৮০px+)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Standard Industry Breakpoints:
   xs: < 640px   (Mobile phones)
   sm: 640px     (Large phones / small tablets)
   md: 768px     (iPads / tablets)
   lg: 1024px    (Laptops / small desktop monitors)
   xl: 1280px    (Standard desktop screens)
   2xl: 1536px   (Ultra-wide monitors)
*/

/* Default mobile styles */
.site-wrapper {
  padding: 16px;
}

/* Small tablets */
@media (min-width: 640px) {
  .site-wrapper { padding: 24px; }
}

/* Tablets */
@media (min-width: 768px) {
  .site-wrapper { padding: 32px; }
}

/* Desktop */
@media (min-width: 1024px) {
  .site-wrapper { padding: 48px; }
}

/* Rendered Output:
   Padding expands proportionally as screen estate increases from mobile to widescreen monitors.
*/`,
      caption: {
        en: 'Predictable device buckets scale layouts smoothly across the global hardware landscape.',
        bn: 'সুনির্দিষ্ট ব্রেকপয়েন্ট যেকোনো মাপের ডিভাইসে লেআউট সুন্দরভাবে প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Responsive Images and Aspect-Ratio Video Containers', bn: '৬. রেসপন্সিভ ছবি ও aspect-ratio ভিডিও কন্টেইনার' } },
    {
      type: 'para',
      text: {
        en: 'Images must scale without exceeding container boundaries using max-width: 100% and height: auto. Embedded iframes (YouTube, maps) historically required padding-bottom hacks; modern CSS provides the native aspect-ratio property to maintain perfect 16:9 ratios without JavaScript.',
        bn: 'ছবিকে কনটেইনারের বাইরে উপচে পড়া রোধ করতে max-width: 100% এবং height: auto ব্যবহার করা হয়। ইউটিউব ভিডিও বা আইফ্রেমকে নিখুঁত ১৬:৯ অনুপাতে রাখতে আগে হ্যাক ব্যবহার করা হলেও আধুনিক CSS-এ সরাসরি aspect-ratio প্রপার্টি দিয়ে তা নিয়ন্ত্রণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Universal Responsive Image Rule */
img.responsive-img {
  max-width: 100%;           /* Will scale down on narrow screens, never scales up beyond natural size */
  height: auto;              /* Preserves natural aspect ratio without distortion */
  display: block;
}

/* 2. Modern 16:9 Aspect Ratio Video Box */
.video-wrapper {
  width: 100%;
  aspect-ratio: 16 / 9;      /* Replaces old padding-bottom: 56.25% hack */
  background: #000000;
  border-radius: 8px;
  overflow: hidden;
}

.video-wrapper iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Rendered Output:
   Images shrink gracefully on mobile; video player maintains pristine 16:9 proportions on all screens.
*/`,
      caption: {
        en: 'aspect-ratio: 16 / 9 eliminates video player distortion across all screen widths.',
        bn: 'aspect-ratio: 16 / 9 যেকোনো স্ক্রিনে ভিডিওর সঠিক অনুপাত বজায় রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Fluid Typography and Sizing with CSS clamp(), min(), and max()', bn: '৭. CSS clamp(), min() ও max() দিয়ে ফ্লুইড টাইপোগ্রাফি' } },
    {
      type: 'para',
      text: {
        en: 'CSS math functions create fluid interfaces without dozens of media queries. clamp(minimum, preferred, maximum) locks a value between lower and upper limits while scaling smoothly with viewport width in between (e.g. clamp(1.5rem, 3vw + 1rem, 3.5rem)). min() picks the smallest value; max() picks the largest.',
        bn: 'CSS ম্যাথ ফাংশন ডজন ডজন মিডিয়া কোয়েরি লেখা ছাড়াই ফ্লুইড ইন্টারফেস তৈরি করে। clamp(minimum, preferred, maximum) একটি মানকে সর্বনিম্ন ও সর্বোচ্চ সীমার মধ্যে আটকে রাখে এবং মাঝের অংশে ভিউপোর্টের সাথে মসৃণভাবে বাড়ায়। min() ক্ষুদ্রতম এবং max() বৃহত্তম মান বেছে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Fluid Heading: Scales smoothly from 24px (1.5rem) on mobile to 48px (3rem) on desktop */
h1.fluid-title {
  font-size: clamp(1.5rem, 4vw + 0.5rem, 3rem);
}

/* Fluid Spacing / Container Padding */
.fluid-section {
  padding: clamp(16px, 5vw, 64px);
}

/* Responsive Box Width with min() */
.content-card {
  width: min(100% - 32px, 800px); /* 100% with margin on mobile; locks at 800px on desktop */
  margin-inline: auto;
}

/* Rendered Output:
   Headings scale continuously with browser resize, eliminating abrupt font-size jumps.
*/`,
      caption: {
        en: 'clamp() creates smooth fluid typography that eliminates sudden breakpoint jumps.',
        bn: 'clamp() মসৃণ ফ্লুইড ফন্ট তৈরি করে, ফলে ব্রেকপয়েন্টে হঠাৎ ফন্টের লাফ দেওয়া বন্ধ হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Responsive Auto-Fitting Grid Card Layouts', bn: '৮. মিডিয়া কোয়েরি ছাড়া রেসপন্সিভ অটো-ফিট গ্রিড' } },
    {
      type: 'para',
      text: {
        en: 'Using repeat(auto-fit, minmax(280px, 1fr)) creates an intrinsically responsive grid layout with ZERO media queries. Cards automatically wrap into new rows as the screen narrows, stretching equally to fill the remaining row space.',
        bn: 'repeat(auto-fit, minmax(280px, 1fr)) ব্যবহার করে কোনো মিডিয়া কোয়েরি ছাড়াই সম্পূর্ণ রেসপন্সিভ গ্রিড তৈরি করা যায়। স্ক্রিন ছোট হলে কার্ডগুলো নিজে নিজেই নিচের লাইনে ভেঙে যায় এবং অবশিষ্ট জায়গা সুন্দরভাবে পূরণ করে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Intrinsically Responsive Grid (Zero Media Queries Required) */
.card-grid-autofit {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.card {
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid #e2e8f0;
  padding: 20px;
}

/* How auto-fit works:
   - On a 1200px screen: fits 4 columns (1200 / 280 ≈ 4).
   - On an 800px screen: fits 2 columns (800 / 280 ≈ 2).
   - On a 360px mobile screen: collapses to 1 column.
*/

/* Rendered Output:
   Cards adapt automatically from 4 columns to 2 columns to 1 column purely through math.
*/`,
      caption: {
        en: 'repeat(auto-fit, minmax(...)) dynamically recalculates columns without media query code.',
        bn: 'কোনো মিডিয়া কোয়েরি ছাড়াই auto-fit স্বয়ংক্রিয়ভাবে কলাম সংখ্যা পুনর্নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Responsive Navigation Patterns: Desktop Bar to Mobile Drawer', bn: '৯. রেসপন্সিভ ন্যাভিগেশন: ডেস্কটপ বার থেকে মোবাইল মেনু' } },
    {
      type: 'para',
      text: {
        en: 'On desktop viewports, navigation links display in a horizontal row. On mobile viewports, the desktop list is hidden behind a hamburger icon toggle that slides out a vertical mobile drawer, accessible via CSS checkbox hacks or JavaScript classes.',
        bn: 'ডেস্কটপে ন্যাভিগেশন লিংকগুলো এক লাইনে পাশাপাশি প্রদর্শিত হয়। মোবাইলে জায়গা কম থাকায় লিংকগুলো লুকিয়ে একটি হ্যামবার্গার আইকন রাখা হয়, যাতে ক্লিক করলে স্লাইড-আউট মোবাইল ড্রয়ার খুলে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Mobile Navigation (Default) */
.nav-links {
  display: none;             /* Hidden by default on mobile */
  flex-direction: column;
  position: absolute;
  top: 64px;
  left: 0;
  width: 100%;
  background: #ffffff;
  padding: 16px;
}

.nav-links.is-open {
  display: flex;             /* Opened via toggle state */
}

.hamburger-btn {
  display: block;            /* Visible on mobile */
}

/* Desktop Navigation (>= 768px) */
@media (min-width: 768px) {
  .hamburger-btn {
    display: none;           /* Hide hamburger on tablet/desktop */
  }

  .nav-links {
    display: flex;           /* Always visible on desktop */
    position: static;
    flex-direction: row;     /* Horizontal row */
    background: transparent;
    gap: 24px;
  }
}

/* Rendered Output:
   Mobile shows a compact hamburger button; desktops display clean horizontal navigation links.
*/`,
      caption: {
        en: 'CSS conditionally swaps between horizontal desktop links and collapsible mobile drawers.',
        bn: 'CSS স্ক্রিনের মাপ বুঝে ডেস্কটপ মেনু বার ও মোবাইল ড্রয়ারের মধ্যে সুইচ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. User-Preference Media Queries: Dark Mode and Reduced Motion', bn: '১০. ব্যবহারকারীর পছন্দভিত্তিক কোয়েরি: ডার্ক মোড ও মোশন হ্রাস' } },
    {
      type: 'para',
      text: {
        en: 'Modern responsive design respects operating system user accessibility preferences. prefers-color-scheme detects whether the user prefers light or dark themes. prefers-reduced-motion detects if the user experiences motion sickness, allowing you to disable intense animations.',
        bn: 'আধুনিক রেসপন্সিভ ডিজাইন ব্যবহারকারীর অপারেটিং সিস্টেমের অ্যাক্সেসিবিলিটি সেটিংসকে প্রাধান্য দেয়। prefers-color-scheme ব্যবহারকারীর পছন্দের লাইট বা ডার্ক থিম শনাক্ত করে। prefers-reduced-motion মোশন সিকনেস রোগীদের সুরক্ষার জন্য তীব্র অ্যানিমেশন বন্ধ করার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Operating System Dark Mode Detection */
:root {
  --bg-color: #ffffff;
  --text-color: #0f172a;
}

@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #0f172a;
    --text-color: #f8fafc;
  }
}

body {
  background-color: var(--bg-color);
  color: var(--text-color);
}

/* 2. Motion Sensitivity Protection */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* Rendered Output:
   Site automatically theme-shifts to dark background on night devices; transitions pause for motion-sensitive users.
*/`,
      caption: {
        en: 'prefers-color-scheme and prefers-reduced-motion adapt to user hardware and accessibility preferences.',
        bn: 'ডিভাইসের পছন্দ অনুযায়ী ডার্ক থিম ও মোশন সুরক্ষা সক্রিয় হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-resp-ex1',
      kind: 'predict',
      topic: 'css: Mobile-first media query',
      question: {
        en: 'In a mobile-first CSS architecture, which media query feature is used to introduce desktop styles?',
        bn: 'মোবাইল-ফার্স্ট CSS আর্কিটেকচারে ডেস্কটপের স্টাইল যুক্ত করতে কোন মিডিয়া কোয়েরি ফিচারটি ব্যবহৃত হয়?'
      },
      code: `/* Mobile-first baseline */
/* @media (______: 768px) { ... } */`,
      answer: 'min-width',
      accept: ['min-width', 'min-width: 768px', 'width >='],
      hint: {
        en: 'Mobile styles apply at 0px and desktop starts at "minimum width".',
        bn: 'মোবাইল স্টাইল শুরু থেকে কার্যকর থাকে এবং ডেস্কটপ স্টাইল "মিনিমাম উইডথ" বা সর্বনিম্ন প্রস্থ থেকে শুরু হয়।'
      },
      explanation: {
        en: 'Mobile-first designs declare baseline styles for 0px and above, using @media (min-width: ...) to progressively layer on styles as screen size grows.',
        bn: 'মোবাইল-ফার্স্ট পদ্ধতিতে বেস স্টাইল মোবাইলের জন্য লেখা থাকে এবং @media (min-width: ...) দিয়ে স্ক্রিনের আকার বড় হওয়ার সাথে সাথে নতুন স্টাইল যোগ করা হয়।'
      }
    },
    {
      id: 'css-resp-ex2',
      kind: 'mcq',
      topic: 'css: Responsive images',
      question: {
        en: 'Which pair of CSS properties guarantees that an image scales down on mobile screens while preserving its aspect ratio?',
        bn: 'কোন দুটি CSS প্রপার্টি নিশ্চিত করে যে একটি ছবি মোবাইলে আনুপাতিক হার ঠিক রেখে সংকুচিত হবে?'
      },
      options: [
        { en: 'max-width: 100%; height: auto;', bn: 'max-width: 100%; height: auto;' },
        { en: 'width: 100vw; height: 100vh;', bn: 'width: 100vw; height: 100vh;' },
        { en: 'min-width: 100%; object-fit: fill;', bn: 'min-width: 100%; object-fit: fill;' },
        { en: 'display: flex; overflow: hidden;', bn: 'display: flex; overflow: hidden;' }
      ],
      answer: 0,
      hint: {
        en: 'You need a maximum width of 100% and automatic height.',
        bn: 'সর্বোচ্চ ১০০% প্রস্থ এবং অটোমেটিক উচ্চতা দরকার।'
      },
      explanation: {
        en: 'max-width: 100% prevents the image from overflowing its container horizontally, while height: auto scales the vertical dimension in proportion to prevent distortion.',
        bn: 'max-width: 100% ছবিকে কনটেইনারের বাইরে যেতে বাধা দেয় এবং height: auto উচ্চতা সমানুপাতিক রেখে ছবি বিকৃত হওয়া রোধ করে।'
      }
    },
    {
      id: 'css-resp-ex3',
      kind: 'mcq',
      topic: 'css: Clamp math function',
      question: {
        en: 'In font-size: clamp(1rem, 2.5vw, 2.5rem), what does the middle argument (2.5vw) represent?',
        bn: 'font-size: clamp(1rem, 2.5vw, 2.5rem)-এ মাঝের মানটি (2.5vw) কী নির্দেশ করে?'
      },
      options: [
        { en: 'The preferred / ideal value that scales with viewport width', bn: 'আদর্শ বা প্রেফার্ড মান যা ভিউপোর্টের প্রস্থের সাথে পরিবর্তিত হয়' },
        { en: 'The absolute maximum allowed size', bn: 'অনুমোদিত সর্বোচ্চ সাইজ' },
        { en: 'The fallback value if CSS fails', bn: 'CSS ব্যর্থ হলে ফলব্যাক মান' },
        { en: 'The font weight', bn: 'ফন্টের পুরুত্ব' }
      ],
      answer: 0,
      hint: {
        en: 'The formula is clamp(min, preferred, max).',
        bn: 'clamp-এর সূত্র হলো clamp(মিনিমাম, প্রেফার্ড, ম্যাক্সিমাম)।'
      },
      explanation: {
        en: 'The syntax of clamp() is clamp(MIN, PREFERRED, MAX). The middle value is the fluid scaling rate based on viewport width, bounded by the lower and upper limits.',
        bn: 'clamp()-এর গঠন হলো clamp(মিনিমাম, প্রেফার্ড, ম্যাক্সিমাম)। মাঝের মানটি ভিউপোর্টের সাপেক্ষে পরিবর্তনশীল মাপ প্রদান করে যা সর্বনিম্ন ও সর্বোচ্চ সীমার মধ্যে সীমাবদ্ধ থাকে।'
      }
    }
  ],
  quiz: {
    id: 'css-responsive-quiz',
    title: { en: 'Responsive Design Quiz', bn: 'রেসপন্সিভ ডিজাইন কুইজ' },
    questions: [
      {
        id: 'rq1',
        kind: 'mcq',
        topic: 'css: Rem vs Em',
        question: {
          en: 'What is the key difference between the rem and em units in CSS?',
          bn: 'CSS-এ rem এবং em ইউনিটের মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          { en: 'rem is relative to the root (html) font-size, while em is relative to the parent element font-size', bn: 'rem রুট (html) ফন্ট-সাইজের সাপেক্ষে মাপে, আর em প্যারেন্ট উপাদানের ফন্ট-সাইজের সাপেক্ষে মাপে' },
          { en: 'rem only works on mobile devices', bn: 'rem কেবল মোবাইলে কাজ করে' },
          { en: 'em ignores user accessibility settings', bn: 'em অ্যাক্সেসিবিলিটি সেটিংস অগ্রাহ্য করে' },
          { en: 'There is no difference between them', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'The "r" in rem stands for Root.',
          bn: 'rem-এর "r" মানে Root বা শিকড়।'
        },
        explanation: {
          en: 'rem (root em) always scales relative to the html root element font-size, preventing compounding scale bugs that happen when nesting em elements inside each other.',
          bn: 'rem সর্বদা রুট (html) ফন্ট সাইজের সাপেক্ষে হিসাব হয়, ফলে নেস্টেড উপাদানে em-এর মতো চক্রবৃদ্ধি হারে ফন্ট অস্বাভাবিক বড় বা ছোট হওয়ার ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'rq2',
        kind: 'mcq',
        topic: 'css: Accessibility user preferences',
        question: {
          en: 'Which media query allows web applications to respect user settings for avoiding motion sickness and vertigo?',
          bn: 'মোশন সিকনেস রোগীদের সুরক্ষায় তীব্র অ্যানিমেশন নিয়ন্ত্রণ করতে কোন মিডিয়া কোয়েরি ব্যবহৃত হয়?'
        },
        options: [
          { en: '@media (prefers-reduced-motion: reduce)', bn: '@media (prefers-reduced-motion: reduce)' },
          { en: '@media (animation: none)', bn: '@media (animation: none)' },
          { en: '@media (prefers-contrast: high)', bn: '@media (prefers-contrast: high)' },
          { en: '@media (orientation: static)', bn: '@media (orientation: static)' }
        ],
        answer: 0,
        hint: {
          en: 'Look for "reduced motion".',
          bn: '"reduced motion" বা গতি কমানো কথাটি খুঁজুন।'
        },
        explanation: {
          en: '@media (prefers-reduced-motion: reduce) detects if the user has enabled motion reduction in their operating system settings, allowing developers to eliminate rapid animations.',
          bn: '@media (prefers-reduced-motion: reduce) অপারেটিং সিস্টেমে ব্যবহারকারীর মোশন কমানোর নির্দেশ শনাক্ত করে ডেভেলপারকে অ্যানিমেশন বন্ধ রাখার সুযোগ দেয়।'
        }
      },
      {
        id: 'rq3',
        kind: 'mcq',
        topic: 'css: Fluid clamp function',
        question: {
          en: 'In the declaration font-size: clamp(1rem, 2.5vw, 2rem), what role does the middle parameter 2.5vw play?',
          bn: 'font-size: clamp(1rem, 2.5vw, 2rem) ডিক্লারেশনে মাঝের 2.5vw মানটি কী ভূমিকা পালন করে?'
        },
        options: [
          { en: 'The preferred fluid value that scales dynamically with viewport width between min and max bounds', bn: 'পছন্দসই ফ্লুইড মান যা ন্যূনতম ও সর্বোচ্চ সীমার মাঝে ভিউপোর্ট প্রস্থ অনুযায়ী নিজে থেকে বাড়ে বা কমে' },
          { en: 'The minimum fallback font size on desktop monitors', bn: 'ডেস্কটপ মনিটরে সর্বনিম্ন ফলব্যাক ফন্ট সাইজ' },
          { en: 'The maximum allowed font size on high-resolution displays', bn: 'উচ্চ রেজোলিউশন স্ক্রিনের জন্য নির্ধারিত সর্বোচ্চ ফন্ট সাইজ' },
          { en: 'The margin spacing between paragraphs', bn: 'প্যারাগ্রাফের মাঝের মার্জিন ফাঁকা জায়গা' }
        ],
        answer: 0,
        hint: {
          en: 'clamp takes three parameters: minimum, preferred fluid value, and maximum.',
          bn: 'clamp ৩টি মান নেয়: সর্বনিম্ন, পছন্দসই পরিবর্তনশীল মান এবং সর্বোচ্চ।'
        },
        explanation: {
          en: 'clamp(MIN, PREFERRED, MAX) dynamically computes font size based on the preferred fluid value while strictly enforcing minimum and maximum thresholds.',
          bn: 'clamp(MIN, PREFERRED, MAX) মাঝের ফ্লুইড মান ধরে স্ক্রিনের সাথে ফন্ট সাইজ বদলায় এবং দুই প্রান্তের সর্বনিম্ন ও সর্বোচ্চ সীমা অক্ষুণ্ণ রাখে।'
        }
      },
      {
        id: 'rq4',
        kind: 'mcq',
        topic: 'css: Mobile-first breakpoint strategy',
        question: {
          en: 'Why do modern responsive CSS architectures prefer min-width media queries over max-width queries?',
          bn: 'আধুনিক রেসপন্সিভ আর্কিটেকচারে max-width-এর তুলনায় min-width মিডিয়া কোয়েরিকে কেন বেশি প্রাধান্য দেওয়া হয়?'
        },
        options: [
          { en: 'Styles progressively enhance upward as screens grow, delivering lightweight baseline CSS to mobile', bn: 'স্ক্রিন যত বড় হয় স্টাইল তত সমৃদ্ধ হয় এবং মোবাইলে দ্রুত লোড হওয়া হালকা বেস কোড সরবরাহ করে' },
          { en: 'min-width queries execute 10 times faster in JavaScript', bn: 'min-width কোয়েরি জাভাস্ক্রিপ্টে ১০ গুণ দ্রুত চলে' },
          { en: 'Browsers block network requests inside max-width queries', bn: 'max-width কোয়েরির ভেতরে থাকা ফাইল ব্রাউজার ব্লক করে' },
          { en: 'max-width queries cannot style CSS grid containers', bn: 'max-width দিয়ে গ্রিড কনটেইনার স্টাইল করা যায় না' }
        ],
        answer: 0,
        hint: {
          en: 'Mobile-first progressive enhancement from small to large screens.',
          bn: 'ছোট পর্দা থেকে বড় পর্দার দিকে ক্রমান্বয়ে সাজানোর মোবাইল-ফার্স্ট পদ্ধতি।'
        },
        explanation: {
          en: 'Mobile-first design establishes simple default rules for smartphones and progressively enhances layouts on larger viewports with min-width queries.',
          bn: 'মোবাইল-ফার্স্ট কৌশলে শুরুতে ফোনের জন্য হালকা ও সহজ বেস স্টাইল লেখা হয় এবং min-width দিয়ে বড় স্ক্রিনের জন্য ধীরে ধীরে ফিচার যোগ করা হয়।'
        }
      }
    ]
  }
};
