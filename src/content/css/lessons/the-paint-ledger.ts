import type { Lesson } from '../../../lib/types';

export const paintLedgerLesson: Lesson = {
  slug: 'css-colors-text',
  tech: 'css',
  title: {
    en: 'CSS Colors, Backgrounds, Text & Typography Masterclass',
    bn: 'CSS কালার, ব্যাকগ্রাউন্ড, টেক্সট ও টাইপোগ্রাফি মাস্টারক্লাস'
  },
  summary: {
    en: 'Master visual presentation across 10 structured topics: color models (HEX, RGB, HSL), background control and sizing, gradients, text typography, text overflow handling, shadows, font stacks, custom web fonts with @font-face, list and icon styling, and accessible table designs.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ভিজ্যুয়াল উপস্থাপনা শিখুন: কালার মডেল (HEX, RGB, HSL), ব্যাকগ্রাউন্ড নিয়ন্ত্রণ ও সাইজিং, গ্রেডিয়েন্ট, টেক্সট টাইপোগ্রাফি, টেক্সট ওভারফ্লো নিয়ন্ত্রণ, শ্যাডো, ফন্ট স্ট্যাক, @font-face দিয়ে ওয়েব ফন্ট, লিস্ট ও আইকন স্টাইলিং এবং অ্যাক্সেসিবল টেবিল ডিজাইন।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'box-model',
    title: { en: 'The CSS Box Model: every element is a budget', bn: 'CSS বক্স মডেল: প্রতি এলিমেন্ট একটি বাজেট' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. CSS Color Models: HEX, RGB, RGBA, and HSL', bn: '১. CSS কালার মডেল: HEX, RGB, RGBA ও HSL' } },
    {
      type: 'para',
      text: {
        en: 'CSS provides multiple formats to declare colors on your page. You can write hexadecimal codes like #2563eb, or use RGB and RGBA — red, green, and blue channels with an alpha opacity channel. You can also use HSL with hue, saturation, and lightness. HSL is especially intuitive for creating dynamic color palettes.',
        bn: 'CSS-এ আপনার পেজে একাধিক উপায়ে রং নির্ধারণ করা যায়। আপনি #2563eb-এর মতো হেক্সাডেসিমাল কোড লিখতে পারেন, অথবা আলফা স্বচ্ছতাসহ RGB ও RGBA ব্যবহার করতে পারেন। এছাড়া হিউ, স্যাচুরেশন ও লাইটনেসযুক্ত HSL ব্যবহার করা যায়। ডায়নামিক থিম বা প্যালেট তৈরিতে HSL অত্যন্ত সুবিধাজনক।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'CSS Color Model Coordinates', bn: 'CSS কালার মডেল নির্দেশক' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Comparison diagram of RGB channels and HSL color cylinder"><g font-size="12" fill="currentColor"><rect x="20" y="20" width="180" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="110" y="45" text-anchor="middle" font-weight="bold">HEX / RGB</text><text x="40" y="75">Red: 0 - 255</text><text x="40" y="100">Green: 0 - 255</text><text x="40" y="125">Blue: 0 - 255</text><rect x="240" y="20" width="180" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="330" y="45" text-anchor="middle" font-weight="bold">HSL Wheel</text><text x="260" y="75">Hue: 0° - 360°</text><text x="260" y="100">Sat: 0% - 100%</text><text x="260" y="125">Light: 0% - 100%</text><rect x="460" y="20" width="180" height="130" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="550" y="45" text-anchor="middle" font-weight="bold">Alpha Channel</text><text x="480" y="80">0.0 = transparent</text><text x="480" y="110">1.0 = fully opaque</text></g></svg>`,
      caption: {
        en: 'RGB models light intensity directly, while HSL provides an intuitive coordinate system for designers.',
        bn: 'RGB সরাসরি আলোর তীব্রতা গণনা করে, আর HSL ডিজাইনারদের জন্য সহজ কালার মডেল তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Hexadecimal format (6-digit and 8-digit with alpha) */
.hex-card {
  background-color: #2563eb;       /* Royal Blue */
  border-color: #2563eb80;          /* 50% opacity (#80 = 128/255) */
}

/* 2. RGB and RGBA (Red, Green, Blue, Alpha) */
.rgb-card {
  color: rgb(30, 41, 59);          /* Slate 800 */
  background: rgba(37, 99, 235, 0.15); /* 15% transparent blue tint */
}

/* 3. HSL (Hue 0-360, Saturation 0-100%, Lightness 0-100%) */
.hsl-card {
  background-color: hsl(217, 91%, 60%);  /* Vibrant blue */
  color: hsl(217, 91%, 15%);             /* Deep blue text */
}

/* Rendered Output:
   All three formats produce mathematically equivalent color channels on display monitors.
*/`,
      caption: {
        en: 'Comparison of HEX, RGB, and HSL declarations with transparency support.',
        bn: 'স্বচ্ছতা চ্যানেলসহ HEX, RGB এবং HSL ঘোষণার তুলনা।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. CSS Backgrounds: Colors, Images, Position, and Size', bn: '২. CSS ব্যাকগ্রাউন্ড: রং, ছবি, পজিশন ও সাইজিং' } },
    {
      type: 'para',
      text: {
        en: 'The background suite controls element surfaces. Key properties include background-color, background-image (using url()), background-repeat (no-repeat, repeat-x, repeat-y), background-position (center, top right), and background-size (cover scales to fill the entire box; contain scales to fit completely without clipping).',
        bn: 'ব্যাকগ্রাউন্ড প্রপার্টি উপাদানের পেছনের ক্যানভাস নিয়ন্ত্রণ করে। প্রধান প্রপার্টিগুলোর মধ্যে রয়েছে background-color, background-image (url() দিয়ে), background-repeat (no-repeat, repeat-x, repeat-y), background-position (center, top right) এবং background-size (cover পুরো বক্স পূর্ণ করে এবং contain কোনো অংশ না কেটে সম্পূর্ণ ছবি দেখায়)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Full-bleed responsive hero background */
.hero-banner {
  background-color: #0f172a;               /* Fallback color while loading */
  background-image: url('hero-bg.webp');
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;                  /* Scale proportionally to cover container */
  background-attachment: scroll;           /* 'fixed' creates parallax effect */
  min-height: 400px;
}

/* Shorthand declaration:
   background: [color] [image] [repeat] [position] / [size] [attachment];
*/
.hero-shorthand {
  background: #0f172a url('hero-bg.webp') no-repeat center / cover;
}

/* Rendered Output:
   Container displays a centered, non-repeating image that scales to fill the 400px tall banner.
*/`,
      caption: {
        en: 'Configuring hero banners with cover sizing and fallbacks.',
        bn: 'কভার সাইজিং ও ফলব্যাক কালারসহ হিরো ব্যানার কনফিগারেশন।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. CSS Gradients: Linear, Radial, and Conic', bn: '৩. CSS গ্রেডিয়েন্ট: লিনিয়ার, রেডিয়াল ও কনিক' } },
    {
      type: 'para',
      text: {
        en: 'CSS gradients produce smooth transitions between two or more colors without loading image files. Linear gradients follow an angle or direction (to right, 135deg); radial gradients radiate outward from an origin point; and conic gradients rotate colors around a center pivot.',
        bn: 'CSS গ্রেডিয়েন্ট কোনো বাড়তি ছবি ফাইল লোড না করেই দুই বা ততোধিক রঙের মসৃণ রূপান্তর তৈরি করে। লিনিয়ার গ্রেডিয়েন্ট নির্দিষ্ট কোণ বা দিকে চলে (to right, 135deg); রেডিয়াল গ্রেডিয়েন্ট কেন্দ্রবিন্দু থেকে চারদিকে ছড়ায়; এবং কনিক গ্রেডিয়েন্ট কেন্দ্রকে ঘিরে ঘূর্ণন তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Linear Gradient with direction angle */
.gradient-linear {
  background: linear-gradient(135deg, #2563eb 0%, #7c3aed 100%);
}

/* 2. Multi-stop Linear Gradient */
.gradient-tricolor {
  background: linear-gradient(to right, #ef4444, #f59e0b, #10b981);
}

/* 3. Radial Gradient radiating from center */
.gradient-radial {
  background: radial-gradient(circle at center, #38bdf8 0%, #0369a1 100%);
}

/* 4. Conic Gradient for color wheels and pie charts */
.gradient-conic {
  background: conic-gradient(from 0deg, #ef4444, #3b82f6, #10b981, #ef4444);
  border-radius: 50%;
  width: 120px;
  height: 120px;
}

/* Rendered Output:
   Smooth mathematical color blends rendered natively by GPU with zero HTTP requests.
*/`,
      caption: {
        en: 'Hardware-accelerated CSS gradients require zero network requests.',
        bn: 'কোনো নেটওয়ার্ক রিকোয়েস্ট ছাড়াই হার্ডওয়্যার-অ্যাক্সিলারেটেড মসৃণ গ্রেডিয়েন্ট।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. CSS Typography: Color, Alignment, Decoration, and Spacing', bn: '৪. CSS টাইপোগ্রাফি: টেক্সট কালার, অ্যালাইনমেন্ট, ডেকোরেশন ও স্পেসিং' } },
    {
      type: 'para',
      text: {
        en: 'Text styling governs readability and hierarchy. Essential properties include color (text hue), text-align (left, center, right, justify), text-decoration (none, underline, line-through), text-transform (uppercase, lowercase, capitalize), line-height (vertical rhythm between lines), and letter-spacing (kerning).',
        bn: 'টেক্সট স্টাইলিং লেখার পঠনযোগ্যতা ও গুরুত্ব নিশ্চিত করে। মূল প্রপার্টিগুলোর মধ্যে রয়েছে color (অক্ষরের রং), text-align (left, center, right, justify), text-decoration (none, underline, line-through), text-transform (uppercase, lowercase, capitalize), line-height (লাইনের মাঝের উল্লম্ব ফাঁক) এবং letter-spacing (অক্ষরের মাঝের ব্যবধান)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Editorial typography styling */
article h1 {
  color: #0f172a;
  text-align: left;
  letter-spacing: -0.03em;   /* Tighter kerning for large headings */
  text-transform: capitalize;
  line-height: 1.15;
}

article p {
  color: #334155;
  font-size: 18px;
  line-height: 1.65;         /* Golden ratio for comfortable long-form reading */
  letter-spacing: 0.01em;
}

/* Interactive link cleanup */
a.clean-link {
  color: #2563eb;
  text-decoration: none;
}

a.clean-link:hover {
  text-decoration: underline;
  text-underline-offset: 4px; /* Crisp underline gap */
}

/* Rendered Output:
   Headings become compact and high-contrast; body text flows with 1.65 line height for effortless reading.
*/`,
      caption: {
        en: 'Proportional line-height and letter-spacing optimize reading comfort.',
        bn: 'আনুপাতিক লাইন-হাইট এবং লেটার-স্পেসিং পড়ার স্বাচ্ছন্দ্য বাড়ায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Text Overflow, Word Wrapping, and Text Truncation', bn: '৫. টেক্সট ওভারফ্লো, ওয়ার্ড র‍্যাপিং ও টেক্সট ট্রাঙ্কেশন' } },
    {
      type: 'para',
      text: {
        en: 'Long words, URLs, or layout constraints can cause text to break container bounds. The classic single-line truncation pattern combines white-space: nowrap, overflow: hidden, and text-overflow: ellipsis. For multi-line text, line-clamp or word-break: break-word prevents container blowouts.',
        bn: 'দীর্ঘ শব্দ, ইউআরএল বা সংকীর্ণ কনটেইনারের কারণে টেক্সট বাইরে উপচে পড়তে পারে। এক লাইনে টেক্সট কেটে ডট ডট (...) দেখাতে white-space: nowrap, overflow: hidden এবং text-overflow: ellipsis ব্যবহার করা হয়। একাধিক লাইনের জন্য line-clamp বা word-break: break-word কনটেইনার ভাঙা রোধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Single-line ellipsis truncation */
.truncate-single {
  white-space: nowrap;        /* Prevent text from wrapping to line 2 */
  overflow: hidden;           /* Clip overflowing text */
  text-overflow: ellipsis;    /* Render '...' at cut-off point */
  max-width: 250px;
}

/* 2. Multi-line truncation (Webkit Line Clamp) */
.truncate-multiline {
  display: -webkit-box;
  -webkit-line-clamp: 3;      /* Show exactly 3 lines */
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 3. Breaking unbreakable strings (long URLs or hashes) */
.break-long-words {
  overflow-wrap: break-word;  /* Preferred modern property */
  word-break: break-word;     /* Legacy fallback */
}

/* Rendered Output:
   Long headlines truncate cleanly with '...' without disrupting adjacent UI elements.
*/`,
      caption: {
        en: 'Single-line ellipsis and multi-line clamping keep cards and lists perfectly uniform.',
        bn: 'সিঙ্গেল-লাইন ইলিপসিস ও মাল্টি-লাইন ক্ল্যাম্পিং কার্ড ও তালিকার আকার ঠিক রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Text Shadows and Box Shadows: Elevation and Depth', bn: '৬. টেক্সট শ্যাডো ও বক্স শ্যাডো: গভীরতা ও উচ্চতা' } },
    {
      type: 'para',
      text: {
        en: 'Shadows create spatial depth and separation between UI layers. text-shadow applies soft or sharp shadows behind text glyphs. box-shadow applies shadows around element frames with parameters: offset-x, offset-y, blur-radius, spread-radius, and color. The inset keyword places the shadow inside the box.',
        bn: 'শ্যাডো UI লেয়ারগুলোর মধ্যে গভীরতা ও স্তর তৈরি করে। text-shadow অক্ষরের পেছনে ছায়া ফেলে। box-shadow উপাদানের ফ্রেমের চারপাশে ছায়া ফেলে যার প্যারামিটারগুলো হলো: offset-x, offset-y, blur-radius, spread-radius এবং color। inset কিওয়ার্ড দিয়ে ছায়াটি ভেতরের দিকে ফেলা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Subtle Text Shadow for high contrast over images */
.hero-title {
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.6);
}

/* 2. Elevation Levels using box-shadow:
   box-shadow: [offset-x] [offset-y] [blur] [spread] [color];
*/
.card-elevation-1 {
  /* Subtle border-like elevation */
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
}

.card-elevation-2 {
  /* Raised card state on hover */
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

/* 3. Inset shadow for pressed input fields */
input.pressed {
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);
}

/* Rendered Output:
   Cards appear lifted off the page; text remains legible over bright and busy backgrounds.
*/`,
      caption: {
        en: 'Multi-layer box shadows produce realistic ambient and directional illumination.',
        bn: 'মাল্টি-লেয়ার বক্স শ্যাডো বাস্তবসম্মত আলো ও গভীরতার আবহ তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. CSS Font Families, Fallback Stacks, and Web-Safe Fonts', bn: '৭. ফন্ট ফ্যামিলি, ফলব্যাক স্ট্যাক ও ওয়েব-সেফ ফন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The font-family property declares an ordered fallback list of font names. If a user’s operating system lacks the first font, the browser checks each subsequent font until finding an installed match, ending with a generic system family keyword (sans-serif, serif, monospace).',
        bn: 'font-family প্রপার্টি পছন্দের ক্রম অনুযায়ী ফন্ট নামের একটি তালিকা নির্ধারণ করে। ব্যবহারকারীর কম্পিউটারে প্রথম ফন্টটি না থাকলে ব্রাউজার ক্রমানুসারে পরের ফন্টটি খোঁজে এবং শেষে জেনেরিক ফন্ট ফ্যামিলিতে (sans-serif, serif, monospace) এসে থামে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Native System Font Stack (Fastest performance, zero downloads) */
body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  font-weight: 400; /* Regular */
}

/* 2. Editorial Serif Stack */
.article-content {
  font-family: 'Merriweather', Georgia, Cambria, 'Times New Roman', serif;
  font-size: 1.125rem;
}

/* 3. Developer Monospace Stack */
code, pre {
  font-family: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas, monospace;
  font-size: 14px;
}

/* Rendered Output:
   OS-native typography renders instantly without Flash of Unstyled Text (FOUT).
*/`,
      caption: {
        en: 'Robust fallback stacks ensure graceful degradation across Windows, macOS, iOS, and Android.',
        bn: 'শক্তিশালী ফলব্যাক স্ট্যাক বিভিন্ন অপারেটিং সিস্টেমে ফন্টের সামঞ্জস্য বজায় রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Custom Web Fonts with @font-face and font-display: swap', bn: '৮. @font-face এবং font-display: swap দিয়ে কাস্টম ওয়েব ফন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The @font-face rule allows downloading custom brand fonts from web servers. Key descriptors include font-family, src (using modern compressed formats like .woff2), font-weight, font-style, and font-display: swap (which prevents invisible text during font loading by showing system text until the font finishes downloading).',
        bn: '@font-face রুল সার্ভার থেকে কাস্টম ব্র্যান্ড ফন্ট ডাউনলোডের সুযোগ দেয়। এর প্রধান অংশগুলো হলো font-family, src (আধুনিক সংকুচিত .woff2 ফরম্যাট), font-weight, font-style এবং font-display: swap (যা ফন্ট ডাউনলোডের আগ পর্যন্ত সিস্টেম ফন্ট দেখিয়ে খালি পৃষ্ঠা রোধ করে)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Define custom web font */
@font-face {
  font-family: 'CalibreBrand';
  src: url('/fonts/calibre-regular.woff2') format('woff2'),
       url('/fonts/calibre-regular.woff') format('woff');
  font-weight: 400;
  font-style: normal;
  font-display: swap; /* Show system fallback font until downloaded */
}

@font-face {
  font-family: 'CalibreBrand';
  src: url('/fonts/calibre-bold.woff2') format('woff2');
  font-weight: 700;
  font-style: normal;
  font-display: swap;
}

/* Applying custom font to headings */
h1, h2 {
  font-family: 'CalibreBrand', sans-serif;
}

/* Rendered Output:
   Browser renders fallback text immediately, then seamlessly swaps in CalibreBrand on download.
*/`,
      caption: {
        en: 'WOFF2 format offers superior compression; font-display: swap eliminates blank text flashes.',
        bn: 'WOFF2 ফরম্যাট সর্বোচ্চ কম্প্রেশন দেয়; font-display: swap লেখা অদৃশ্য হয়ে থাকা বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. CSS List Styling and Icon Integration', bn: '৯. CSS লিস্ট স্টাইলিং ও আইকন ইন্টিগ্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'Lists can be customized using list-style-type (disc, circle, square, decimal, lower-alpha, none), list-style-position (inside vs outside), or completely custom bullets via the ::marker pseudo-element and background icons.',
        bn: 'লিস্টের বুলেট list-style-type (disc, circle, square, decimal, lower-alpha, none), list-style-position (inside বনাম outside) অথবা ::marker সিউডো-এলিমেন্ট ও ব্যাকগ্রাউন্ড আইকন দিয়ে কাস্টমাইজ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Resetting navigation lists */
nav ul {
  list-style: none; /* Remove default bullets */
  padding: 0;
  margin: 0;
  display: flex;
  gap: 16px;
}

/* 2. Custom styled bullet markers */
ul.feature-list li::marker {
  content: "✓ ";
  color: #16a34a; /* Green checkmark bullet */
  font-weight: bold;
}

/* 3. Icon alignment with inline text */
.btn-with-icon {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.btn-with-icon svg {
  width: 18px;
  height: 18px;
  fill: currentColor; /* Matches button text color automatically */
}

/* Rendered Output:
   Feature list displays crisp green checkmarks; buttons cleanly align inline SVG icons.
*/`,
      caption: {
        en: 'The ::marker pseudo-element and currentColor allow modern icon and bullet customization.',
        bn: '::marker সিউডো-এলিমেন্ট এবং currentColor দিয়ে আধুনিক বুলেট ও আইকন কাস্টমাইজেশন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. CSS Table Styling and Interactive Link States', bn: '১০. CSS টেবিল স্টাইলিং ও ইন্টারঅ্যাকটিভ লিংক স্টেট' } },
    {
      type: 'para',
      text: {
        en: 'HTML tables require border-collapse: collapse to eliminate double borders. Zebra striping with tr:nth-child(even) enhances row scanning. For interactive links, the classic LVHA order (:link, :visited, :hover, :active) ensures CSS state pseudo-classes cascade correctly without conflicts.',
        bn: 'HTML টেবিলে ডাবল বর্ডার সরাতে border-collapse: collapse ব্যবহার করা হয়। tr:nth-child(even) দিয়ে জেব্রা স্ট্রাইপ তৈরি করলে সারিগুলো সহজে পড়া যায়। ইন্টারঅ্যাকটিভ লিংকের ক্ষেত্রে LVHA ক্রম (:link, :visited, :hover, :active) মেনে চলা অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Clean, accessible data table */
table.data-table {
  width: 100%;
  border-collapse: collapse; /* Merges cell borders into clean single lines */
  font-size: 15px;
}

table.data-table th,
table.data-table td {
  padding: 12px 16px;
  text-align: left;
  border-bottom: 1px solid #e2e8f0;
}

table.data-table th {
  background-color: #f8fafc;
  color: #475569;
  font-weight: 600;
}

table.data-table tr:hover {
  background-color: #f1f5f9; /* Row highlight on pointer hover */
}

/* 2. Link States in strict LVHA order */
a:link    { color: #2563eb; } /* Unvisited */
a:visited { color: #7c3aed; } /* Visited */
a:hover   { color: #1d4ed8; text-decoration: underline; } /* Pointer over */
a:active  { color: #dc2626; } /* Mouse click down */

/* Rendered Output:
   Tables display single hairline borders with hover row highlights; links transition smoothly across all 4 states.
*/`,
      caption: {
        en: 'border-collapse produces single borders; LVHA sequence avoids state overrides.',
        bn: 'border-collapse একক বর্ডার নিশ্চিত করে; LVHA ক্রম স্টেট বিরোধ এড়ায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-paint-ex1',
      kind: 'predict',
      topic: 'css: Color values',
      question: {
        en: 'What color is produced by rgb(255, 255, 255)?',
        bn: 'rgb(255, 255, 255) দিয়ে কোন রং তৈরি হয়?'
      },
      code: `/* All 3 RGB light channels at maximum 255 */
/* color: rgb(255, 255, 255) */`,
      answer: 'white',
      accept: ['white', '#ffffff', 'pure white'],
      hint: {
        en: 'When all RGB primary light channels are fully illuminated, the result is white.',
        bn: 'যখন লাল, সবুজ এবং নীল তিনটি আলোর চ্যানেলই পূর্ণ থাকে (২৫৫), তখন সাদা রং তৈরি হয়।'
      },
      explanation: {
        en: 'In additive RGB color mixing, maximum values on all three channels (255, 255, 255) produce pure white light. Minimum values (0, 0, 0) produce black.',
        bn: 'RGB আলোর মিশ্রণে ৩টি চ্যানেলের মানই সর্বোচ্চ (২৫৫, ২৫৫, ২৫৫) হলে বিশুদ্ধ সাদা তৈরি হয়। মান (০, ০, ০) হলে কালো হয়।'
      }
    },
    {
      id: 'css-paint-ex2',
      kind: 'mcq',
      topic: 'css: Background size',
      question: {
        en: 'Which background-size value resizes the image to cover the entire container, potentially cropping edges to prevent empty spaces?',
        bn: 'কোন background-size ভ্যালুটি কোনো ফাঁকা জায়গা না রেখে পুরো কনটেইনার পূর্ণ করতে ছবিকে রিসাইজ করে, প্রয়োজনে বাড়তি অংশ কেটে ফেলে?'
      },
      options: [
        { en: 'cover', bn: 'cover' },
        { en: 'contain', bn: 'contain' },
        { en: 'auto', bn: 'auto' },
        { en: '100% 100%', bn: '100% 100%' }
      ],
      answer: 0,
      hint: {
        en: 'Think of "covering" the whole box without distorting aspect ratio.',
        bn: 'অনুপাত নষ্ট না করে পুরো বক্স "কভার" করার কথা ভাবুন।'
      },
      explanation: {
        en: 'background-size: cover scales the image proportionally so that both width and height fill the container completely, clipping overflowing edges. contain fits the entire image without any clipping.',
        bn: 'background-size: cover আনুপাতিক হারে ছবি বড় করে পুরো কনটেইনার পূর্ণ করে। আর contain কোনো অংশ না কেটে পুরো ছবি প্রদর্শন করে।'
      }
    },
    {
      id: 'css-paint-ex3',
      kind: 'mcq',
      topic: 'css: Text truncation',
      question: {
        en: 'Which three CSS properties must be combined to truncate overflowing text with an ellipsis (...) on a single line?',
        bn: 'এক লাইনে টেক্সট উপচে পড়লে ডট ডট (...) দিয়ে কেটে দেখাতে কোন ৩টি CSS প্রপার্টি একসাথে ব্যবহার করতে হয়?'
      },
      options: [
        { en: 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;', bn: 'white-space: nowrap; overflow: hidden; text-overflow: ellipsis;' },
        { en: 'display: flex; text-overflow: clip; word-break: break-all;', bn: 'display: flex; text-overflow: clip; word-break: break-all;' },
        { en: 'line-height: 1; text-align: justify; word-wrap: normal;', bn: 'line-height: 1; text-align: justify; word-wrap: normal;' },
        { en: 'overflow: scroll; text-decoration: none; max-height: 20px;', bn: 'overflow: scroll; text-decoration: none; max-height: 20px;' }
      ],
      answer: 0,
      hint: {
        en: 'You need to prevent wrapping, hide the excess, and show the ellipsis character.',
        bn: 'লাইন ভাঙা বন্ধ করতে হবে, বাড়তি অংশ লুকাতে হবে এবং ইলিপসিস ডট দেখাতে হবে।'
      },
      explanation: {
        en: 'Single-line truncation requires white-space: nowrap (prevents breaking to line 2), overflow: hidden (clips text outside box), and text-overflow: ellipsis (appends the ... indicator).',
        bn: 'সিঙ্গেল-লাইন ট্রাঙ্কেশন করতে white-space: nowrap (পরের লাইনে যাওয়া রোধ করে), overflow: hidden (বাইরের অংশ লুকায়) এবং text-overflow: ellipsis (... প্রতীক যোগ করে) এই তিনটি প্রয়োজন।'
      }
    }
  ],
  quiz: {
    id: 'css-paint-quiz',
    title: { en: 'Colors & Typography Quiz', bn: 'কালার ও টাইপোগ্রাফি কুইজ' },
    questions: [
      {
        id: 'pq1',
        kind: 'mcq',
        topic: 'css: Table border collapse',
        question: {
          en: 'Which CSS property removes the double borders between adjacent table cells?',
          bn: 'টেবিলের পাশাপাশি সেলের মাঝের ডাবল বর্ডার দূর করে একটি নিখুঁত দাগে পরিণত করতে কোন প্রপার্টি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'border-collapse: collapse;', bn: 'border-collapse: collapse;' },
          { en: 'border-spacing: 0;', bn: 'border-spacing: 0;' },
          { en: 'table-layout: fixed;', bn: 'table-layout: fixed;' },
          { en: 'border-style: none;', bn: 'border-style: none;' }
        ],
        answer: 0,
        hint: {
          en: 'It collapses adjoining borders into a single border line.',
          bn: 'এটি পাশাপাশি থাকা বর্ডারকে একত্র বা কলাপ্স করে।'
        },
        explanation: {
          en: 'border-collapse: collapse merges adjacent cell borders into single lines. The default separate setting draws individual boxes with spacing between each cell.',
          bn: 'border-collapse: collapse পাশাপাশি সেলের বর্ডারকে একীভূত করে। ডিফল্ট separate থাকলে প্রতি সেলে আলাদা আলাদা বর্ডার দেখা যায়।'
        }
      },
      {
        id: 'pq2',
        kind: 'mcq',
        topic: 'css: Link state sequence',
        question: {
          en: 'What is the correct order to define anchor pseudo-classes in CSS to prevent hover styles from being overridden?',
          bn: ':hover স্টাইল সঠিকভাবে কাজ করার জন্য CSS-এ অ্যাংকর সিউডো-ক্লাসগুলো কোন সঠিক ক্রমে লিখতে হয়?'
        },
        options: [
          { en: ':link, :visited, :hover, :active (LVHA)', bn: ':link, :visited, :hover, :active (LVHA)' },
          { en: ':hover, :active, :link, :visited', bn: ':hover, :active, :link, :visited' },
          { en: ':active, :hover, :visited, :link', bn: ':active, :hover, :visited, :link' },
          { en: 'Any order works because specificity is identical', bn: 'যেকোনো ক্রমে লিখলেই হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Remember the acronym: Love / Hate (LVHA).',
          bn: 'LVHA (Link, Visited, Hover, Active) সংক্ষিপ্ত রূপটি মনে রাখুন।'
        },
        explanation: {
          en: 'Because all pseudo-classes share identical specificity, order of appearance dictates the winner. :hover must follow :link and :visited, and :active must be last (LVHA).',
          bn: 'যেহেতু সব সিউডো-ক্লাসের স্পেসিফিসিটি সমান, তাই কোডের ক্রম গুরুত্বপূর্ণ। :hover অবশ্যই :link ও :visited-এর পরে এবং :active সবার শেষে (LVHA) লিখতে হয়।'
        }
      },
      {
        id: 'pq3',
        kind: 'mcq',
        topic: 'css: Text truncation',
        question: {
          en: 'Which three CSS properties must be combined to truncate overflowing single-line text with an ellipsis?',
          bn: 'এক লাইনের লেখাকে কেটে শেষে উপবৃত্ত (...) দেখাতে কোন ৩টি CSS প্রোপার্টি একসাথে ব্যবহার করতে হয়?'
        },
        options: [
          { en: 'white-space: nowrap, overflow: hidden, and text-overflow: ellipsis', bn: 'white-space: nowrap, overflow: hidden এবং text-overflow: ellipsis' },
          { en: 'display: flex, overflow: scroll, and text-decoration: none', bn: 'display: flex, overflow: scroll এবং text-decoration: none' },
          { en: 'word-break: break-all, hyphens: auto, and max-width: 100%', bn: 'word-break: break-all, hyphens: auto এবং max-width: 100%' },
          { en: 'text-align: justify, line-height: 1, and text-overflow: clip', bn: 'text-align: justify, line-height: 1 এবং text-overflow: clip' }
        ],
        answer: 0,
        hint: {
          en: 'Prevent wrapping, hide overflow, and append dots.',
          bn: 'লাইন ভাঙা রোধ করুন, বাড়তি অংশ লুকান এবং বিন্দু যোগ করুন।'
        },
        explanation: {
          en: 'Single-line truncation requires preventing line breaks with white-space: nowrap, hiding clipped content with overflow: hidden, and rendering dots with text-overflow: ellipsis.',
          bn: 'এক লাইনে লেখা ট্রাঙ্কেট করতে white-space: nowrap দিয়ে লাইন ভাঙা আটকাতে হয়, overflow: hidden দিয়ে বাড়তি লেখা লুকাতে হয় এবং text-overflow: ellipsis দিয়ে ডট দেখাতে হয়।'
        }
      },
      {
        id: 'pq4',
        kind: 'mcq',
        topic: 'css: Web font optimization',
        question: {
          en: 'What does the CSS property font-display: swap accomplish inside an @font-face rule?',
          bn: '@font-face বিধিমালার ভেতরে font-display: swap প্রোপার্টি কী সুবিধা দেয়?'
        },
        options: [
          { en: 'Renders system fallback text immediately, swapping to custom web font once loaded', bn: 'সিস্টেম ফন্ট দিয়ে দ্রুত লেখা দেখায় এবং ওয়েব ফন্ট লোড হলে তা বদলে দেয়' },
          { en: 'Hides all text completely until the custom font file finishes downloading', bn: 'কাস্টম ফন্ট ডাউনলোড না হওয়া পর্যন্ত পেজের সব লেখা সম্পূর্ণ লুকিয়ে রাখে' },
          { en: 'Compresses WOFF2 font files by converting them to SVG vectors', bn: 'WOFF2 ফন্ট ফাইলকে SVG ভেক্টরে রূপান্তর করে সংকুচিত করে' },
          { en: 'Swaps italic text styles with bold weights automatically', bn: 'স্বয়ংক্রিয়ভাবে ইটালিক টেক্সটকে বোল্ড ওজনে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents invisible text (FOIT) during slow network loads.',
          bn: 'ধীরগতির নেটে লেখা অদৃশ্য হয়ে থাকা (FOIT) প্রতিরোধ করে।'
        },
        explanation: {
          en: 'font-display: swap eliminates the flash of invisible text (FOIT) by painting with a fallback font immediately and swapping once the custom font arrives.',
          bn: 'font-display: swap লেখা অদৃশ্য হয়ে থাকা রোধ করে; এটি সাথে সাথে ফলব্যাক ফন্ট দিয়ে লেখা রেন্ডার করে এবং কাস্টম ফন্ট আসার সাথে সাথে তা প্রতিস্থাপন করে।'
        }
      }
    ]
  }
};
