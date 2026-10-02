import fs from 'fs';

const content = `import type { Lesson } from '../../../lib/types';

export const cascadeCourtLesson: Lesson = {
  slug: 'css-cascade-syntax',
  tech: 'css',
  title: {
    en: 'CSS Foundations: Syntax, Selectors, Specificity & The Cascade',
    bn: 'CSS ভিত্তি: সিনট্যাক্স, সিলেক্টর, স্পেসিফিসিটি ও ক্যাসকেড'
  },
  summary: {
    en: 'Master the fundamental rule engine of CSS across 10 structured topics: rule anatomy, stylesheet insertion methods, selectors, combinators, attribute selectors, pseudo-classes, pseudo-elements, specificity calculation, cascade tie-breaking with !important, and inheritance with universal resets.',
    bn: '১০টি সুসংগঠিত পয়েন্টে CSS-এর নিয়ম ইঞ্জিন শিখুন: রুল অ্যানাটমি, স্টাইলশিট যুক্ত করার ৩টি পদ্ধতি, সিলেক্টর, কম্বিনেটর, অ্যাট্রিবিউট সিলেক্টর, সিউডো-ক্লাস, সিউডো-এলিমেন্ট, স্পেসিফিসিটি গণনা, ক্যাসকেড টাই-ব্রেকিং ও !important, এবং ইনহেরিট্যান্স ও ইউনিভার্সাল রিসেট।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'css-colors-text',
    title: { en: 'The Paint Ledger: color, texture and the written word', bn: 'রং-খাতা: বর্ণ, টেক্সচার আর লিখিত বাক্য' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. CSS Syntax and Rule Anatomy', bn: '১. CSS সিনট্যাক্স এবং রুলের গঠন' } },
    {
      type: 'para',
      text: {
        en: 'A CSS rule consists of a selector and a declaration block. The selector points to the HTML element you want to style. The declaration block contains one or more declarations separated by semicolons. Each declaration includes a CSS property name and a value, separated by a colon.',
        bn: 'একটি CSS রুল দুটি অংশে বিভক্ত: সিলেক্টর এবং ডিক্লারেশন ব্লক। সিলেক্টর নির্দেশ করে কোন HTML উপাদানটি স্টাইল করা হবে। ডিক্লারেশন ব্লকের ভেতরে সেমিকোলন দিয়ে বিভক্ত এক বা একাধিক ডিক্লারেশন থাকে। প্রতিটি ডিক্লারেশনে একটি প্রপার্টি নাম এবং কোলন দিয়ে আলাদা করা মান থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* CSS Rule Structure:
   Selector { property: value; }
*/

h1 {
  color: #1e293b;        /* property: color | value: dark slate */
  font-size: 32px;       /* property: font-size | value: 32 pixels */
  text-align: center;    /* property: text-align | value: center alignment */
}

/* Rendered Output:
   All <h1> headings render in 32px bold dark-slate text, centered horizontally.
*/`,
      caption: {
        en: 'A CSS rule targets elements with a selector and applies styling declarations inside curly braces.',
        bn: 'CSS রুল সিলেক্টর দিয়ে উপাদান চিহ্নিত করে এবং কার্লি ব্র্যাকেটের ভেতরে স্টাইল ডিক্লারেশন প্রয়োগ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Three Ways to Insert CSS: External, Internal, and Inline', bn: '২. CSS যুক্ত করার ৩টি পদ্ধতি: এক্সটার্নাল, ইন্টারনাল ও ইনলাইন' } },
    {
      type: 'para',
      text: {
        en: 'CSS can be added to HTML documents in three ways: External CSS via <link> in <head>, Internal CSS via <style> tags inside <head>, and Inline CSS via the style attribute on individual HTML tags. External stylesheets are the industry standard for maintainability and browser caching.',
        bn: 'HTML ডকুমেন্টে ৩ উপায়ে CSS যুক্ত করা যায়: <head>-এ <link> ট্যাগের মাধ্যমে এক্সটার্নাল CSS, <head>-এ <style> ট্যাগের মাধ্যমে ইন্টারনাল CSS, এবং যেকোনো ট্যাগে style অ্যাট্রিবিউট দিয়ে ইনলাইন CSS। প্রজেক্টের রক্ষণাবেক্ষণ ও ব্রাউজার ক্যাশিংয়ের জন্য এক্সটার্নাল স্টাইলশিট হলো স্ট্যান্ডার্ড।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      code: `<!-- 1. External CSS (Recommended): Cached across all pages -->
<head>
  <link rel="stylesheet" href="styles.css">
</head>

<!-- 2. Internal CSS: Single page styling -->
<head>
  <style>
    body { background-color: #f8fafc; font-family: sans-serif; }
  </style>
</head>

<!-- 3. Inline CSS: Highest specificity, difficult to maintain -->
<button style="background-color: #2563eb; color: #ffffff; padding: 8px 16px;">
  Submit
</button>

<!-- Rendered Output:
   External: Global styles applied to entire domain.
   Internal: Applies exclusively to this specific HTML file.
   Inline: Button renders blue with white text and 8px 16px padding.
-->`,
      caption: {
        en: 'Comparison of external link tag, internal style tag, and inline HTML attributes.',
        bn: 'এক্সটার্নাল লিংক ট্যাগ, ইন্টারনাল স্টাইল ট্যাগ এবং ইনলাইন HTML অ্যাট্রিবিউটের তুলনা।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Simple Selectors: Element, Class, ID, Universal, and Grouping', bn: '৩. সাধারণ সিলেক্টর: এলিমেন্ট, ক্লাস, আইডি, ইউনিভার্সাল ও গ্রুপিং' } },
    {
      type: 'para',
      text: {
        en: 'Simple selectors target elements directly by tag name, class name (prefixed with .), unique ID (prefixed with #), or universal wildcard (*). Multiple selectors sharing identical styles can be grouped with commas to eliminate duplicated rules.',
        bn: 'সাধারণ সিলেক্টর উপাদানের ট্যাগ নাম, ক্লাস নাম (. দিয়ে শুরু), অনন্য আইডি (# দিয়ে শুরু) অথবা ইউনিভার্সাল ওয়াইল্ডকার্ড (*) দিয়ে লক্ষ্য নির্ধারণ করে। একাধিক সিলেক্টরে একই স্টাইল দিতে কমা দিয়ে গ্রুপ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Universal Selector: matches every single element */
* {
  margin: 0;
  padding: 0;
}

/* 2. Type/Element Selector: matches all <p> tags */
p {
  line-height: 1.6;
  color: #334155;
}

/* 3. Class Selector: matches elements with class="card" */
.card {
  background: #ffffff;
  border-radius: 8px;
  padding: 16px;
}

/* 4. ID Selector: matches the single element with id="main-nav" */
#main-nav {
  position: sticky;
  top: 0;
}

/* 5. Grouping Selector: applies identical styles to h1, h2, and h3 */
h1, h2, h3 {
  font-family: 'Inter', sans-serif;
  letter-spacing: -0.02em;
}

/* Rendered Output:
   Page margins reset to 0, text lines spaced 1.6, cards boxed with 8px radius.
*/`,
      caption: {
        en: 'The five simple selector types used across every stylesheet.',
        bn: 'প্রতিটি স্টাইলশিটে ব্যবহৃত পাঁচটি সাধারণ সিলেক্টর ধরন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. CSS Combinators: Descendant, Child, Adjacent Sibling, and General Sibling', bn: '৪. CSS কম্বিনেটর: ডিসেন্ডেন্ট, চাইল্ড, এডজাসেন্ট ও জেনারেল সিবলিং' } },
    {
      type: 'para',
      text: {
        en: 'Combinators explain the relationship between two selectors: descendant (space) matches any nested element at any depth; child (>) matches only direct children; adjacent sibling (+) matches the very next sibling immediately following; and general sibling (~) matches all subsequent siblings sharing the same parent.',
        bn: 'কম্বিনেটর দুটি সিলেক্টরের পারিবারিক সম্পর্ক ব্যাখ্যা করে: ডিসেন্ডেন্ট (ফাঁকা স্পেস) যেকোনো স্তরের ভেতরের উপাদানকে ধরে; চাইল্ড (>) শুধুমাত্র সরাসরি সন্তানকে ধরে; এডজাসেন্ট সিবলিং (+) ঠিক পরের সহোদর উপাদানকে ধরে; এবং জেনারেল সিবলিং (~) একই প্যারেন্টের অধীনে পরের সকল সহোদরকে ধরে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Descendant Selector (space): matches all <p> inside <article> */
article p {
  color: #475569;
}

/* 2. Child Selector (>): matches only <p> directly inside <div> */
div > p {
  font-weight: 500;
}

/* 3. Adjacent Sibling (+): matches the first <p> immediately after <h2> */
h2 + p {
  font-size: 18px;
  font-weight: 600; /* Lead paragraph styling */
}

/* 4. General Sibling (~): matches all <p> siblings following an <h2> */
h2 ~ p {
  margin-bottom: 12px;
}

/* Rendered Output:
   Direct children become medium weight; the immediate paragraph under <h2> becomes 18px lead text; subsequent sibling paragraphs get 12px bottom margin.
*/`,
      caption: {
        en: 'Combinator syntax defines DOM traversal relationships between elements.',
        bn: 'কম্বিনেটর সিনট্যাক্স উপাদানের মধ্যকার DOM সম্পর্কের ভিত্তিতে টার্গেট নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Attribute Selectors: Targeting Attributes and Substrings', bn: '৫. অ্যাট্রিবিউট সিলেক্টর: অ্যাট্রিবিউট ও সাবস্ট্রিং টার্গেট' } },
    {
      type: 'para',
      text: {
        en: 'Attribute selectors target elements based on the presence or exact value of their HTML attributes. Substring operators allow matching attribute values that start with (^=), end with ($=), or contain (*=) specific strings.',
        bn: 'অ্যাট্রিবিউট সিলেক্টর HTML অ্যাট্রিবিউটের উপস্থিতি বা নির্দিষ্ট মানের ওপর ভিত্তি করে স্টাইল প্রয়োগ করে। সাবস্ট্রিং অপারেটর দিয়ে মান শুরুর মিল (^=), শেষের মিল ($=), অথবা ভেতরে যেকোনো অংশে থাকার মিল (*=) খোঁজা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Match elements with the 'required' attribute */
input[required] {
  border-left: 3px solid #ef4444;
}

/* Match exact attribute value */
input[type="password"] {
  letter-spacing: 2px;
}

/* Match attribute value starting with 'https://' (secure links) */
a[href^="https://"] {
  color: #0284c7;
}

/* Match attribute value ending with '.pdf' (download links) */
a[href$=".pdf"]::after {
  content: " (PDF)";
  font-size: 11px;
}

/* Match attribute value containing substring 'icon-' */
span[class*="icon-"] {
  display: inline-block;
  vertical-align: middle;
}

/* Rendered Output:
   Required inputs get a red indicator line; PDF links automatically append "(PDF)".
*/`,
      caption: {
        en: 'Attribute selectors provide precise targeting without cluttering HTML with extra classes.',
        bn: 'অতিরিক্ত ক্লাস যোগ না করেই নিখুঁতভাবে উপাদান চিহ্নিত করতে অ্যাট্রিবিউট সিলেক্টর সহায়ক।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Pseudo-classes: User Interaction and Structural States', bn: '৬. সিউডো-ক্লাস: ব্যবহারকারী ইন্টারঅ্যাকশন ও স্ট্রাকচারাল স্টেট' } },
    {
      type: 'para',
      text: {
        en: 'Pseudo-classes define special states of elements. Interaction states include :hover (pointer over element), :focus (element has keyboard/input focus), and :active (element is being pressed). Structural pseudo-classes target elements by position in the DOM tree, such as :first-child, :last-child, and :nth-child(2n).',
        bn: 'সিউডো-ক্লাস কোনো উপাদানের বিশেষ অবস্থা প্রকাশ করে। ইন্টারঅ্যাকশন স্টেটগুলোর মধ্যে রয়েছে :hover (মাউস উপরে নিলে), :focus (ইনপুট বা কিবোর্ড ফোকাস পেলে) এবং :active (ক্লিক করে ধরে রাখলে)। স্ট্রাকচারাল সিউডো-ক্লাস উপাদানের অবস্থানের ওপর নির্ভর করে কাজ করে, যেমন :first-child, :last-child এবং :nth-child(2n)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Interactive pseudo-classes */
button:hover {
  background-color: #1d4ed8;
  cursor: pointer;
}

input:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* Structural pseudo-classes */
ul li:first-child {
  border-top: none;
}

ul li:last-child {
  border-bottom: none;
}

/* Zebra-striping table rows */
tbody tr:nth-child(even) {
  background-color: #f1f5f9;
}

tbody tr:nth-child(odd) {
  background-color: #ffffff;
}

/* Rendered Output:
   Buttons darken on hover; inputs show a crisp blue ring on focus; table rows alternate grey and white.
*/`,
      caption: {
        en: 'Pseudo-classes respond dynamically to user gestures and DOM index positions.',
        bn: 'সিউডো-ক্লাস ব্যবহারকারীর ইভেন্ট ও উপাদানের অবস্থানের সাথে সাথে পরিবর্তিত হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Pseudo-elements: Styling Generated and Sub-element Content', bn: '৭. সিউডো-এলিমেন্ট: ভার্চুয়াল কন্টেন্ট ও সাব-এলিমেন্ট স্টাইলিং' } },
    {
      type: 'para',
      text: {
        en: 'Pseudo-elements (denoted by double colons ::) style specific parts of an element or insert virtual cosmetic content into the DOM without changing the HTML source. ::before and ::after insert decorative content via the content property; ::selection styles highlighted text; and ::marker styles list bullets.',
        bn: 'সিউডো-এলিমেন্ট (ডাবল কোলন :: দিয়ে লেখা হয়) উপাদানের নির্দিষ্ট কোনো অংশ স্টাইল করে অথবা HTML কোড পরিবর্তন না করেই ভার্চুয়াল কন্টেন্ট তৈরি করে। ::before এবং ::after দিয়ে content প্রপার্টি ব্যবহার করে অলঙ্করণ যোগ করা হয়; ::selection দিয়ে সিলেক্ট করা টেক্সট স্টাইল করা হয় এবং ::marker দিয়ে লিস্টের বুলেট স্টাইল করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Insert decorative icon before external link */
a.external::before {
  content: "↗ ";
  color: #64748b;
  font-weight: bold;
}

/* Add stylish quote marks after blockquote */
blockquote::after {
  content: " — Verified Review";
  font-style: italic;
  color: #94a3b8;
}

/* Style user text selection */
::selection {
  background-color: #fde047; /* Yellow highlight */
  color: #0f172a;
}

/* Style bullet point markers */
li::marker {
  color: #2563eb;
  font-size: 1.2em;
}

/* Rendered Output:
   External links display an arrow prefix; text highlighted by mouse appears yellow with slate text; list bullets turn bright blue.
*/`,
      caption: {
        en: 'Pseudo-elements generate cosmetic DOM additions directly through CSS rules.',
        bn: 'সিউডো-এলিমেন্ট কোনো HTML ট্যাগ ছাড়াই সরাসরি CSS দিয়ে অতিরিক্ত কন্টেন্ট তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. The Specificity Ledger: Calculating Selector Weight', bn: '৮. স্পেসিফিসিটি হিসাব: সিলেক্টরের ওজন নির্ধারণের ৩-কলাম নীতি' } },
    {
      type: 'para',
      text: {
        en: 'When conflicting CSS rules target the same element, browsers calculate specificity using a four-category score (a, b, c, d): a = Inline styles, b = ID selectors, c = Class, attribute, and pseudo-class selectors, d = Element and pseudo-element selectors. Specificity is compared left to right like an odometer: 1 ID (0,1,0,0) will always defeat 1,000 classes (0,0,1000,0).',
        bn: 'যখন একাধিক নিয়ম একই উপাদানে বিরোধপূর্ণ স্টাইল দাবি করে, ব্রাউজার চার ক্যাটাগরিতে স্পেসিফিসিটি স্কোর হিসাব করে (a, b, c, d): a = ইনলাইন স্টাইল, b = আইডি সিলেক্টর, c = ক্লাস, অ্যাট্রিবিউট ও সিউডো-ক্লাস, d = এলিমেন্ট ও সিউডো-এলিমেন্ট। এটি বাম থেকে ডানে তুলনা করা হয়: ১টি আইডি (0,1,0,0) সর্বদা ১,০০০টি ক্লাসের (0,0,1000,0) চেয়েও বেশি ক্ষমতাধর।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Specificity Comparison Table:
   Selector                   | (Inline, ID, Class, Element) | Score
   ---------------------------|------------------------------|------
   p                          | (   0  ,  0,   0  ,    1   ) | 0,0,0,1
   .card p                    | (   0  ,  0,   1  ,    1   ) | 0,0,1,1
   .nav .list a:hover         | (   0  ,  0,   3  ,    1   ) | 0,0,3,1
   #header .logo              | (   0  ,  1,   1  ,    0   ) | 0,1,1,0
   style="color: red;"        | (   1  ,  0,   0  ,    0   ) | 1,0,0,0
*/

/* Example conflict on: <a id="home" class="nav-link" href="/">Home</a> */
#home {
  color: #2563eb; /* Score: 0,1,0,0 — WINS! */
}

.nav-link {
  color: #dc2626; /* Score: 0,0,1,0 — DEFEATED by ID */
}

/* Rendered Output:
   Link renders blue (#2563eb) because ID specificity outranks the class rule.
*/`,
      caption: {
        en: 'Specificity acts as a strict priority odometer compared column-by-column from left to right.',
        bn: 'স্পেসিফিসিটি একটি কঠোর ওডোমিটারের মতো কলাম ধরে বাম থেকে ডানে তুলনা করে বিজয়ী নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. The Cascade Order and the !important Directive', bn: '৯. ক্যাসকেড ক্রম এবং !important আদেশের নিয়মাবলী' } },
    {
      type: 'para',
      text: {
        en: 'The Cascade determines the final computed value when multiple rules apply. It evaluates in three sequential tiers: Origin and Importance (browser defaults vs user sheets vs author sheets vs !important), Specificity (if origins tie), and Order of Appearance (if specificities tie, the rule written last wins). Appending !important overrides normal specificity calculations.',
        bn: 'ক্যাসকেড ৩টি স্তরে বিজয়ী নির্ধারণ করে: উৎস ও গুরুত্ব (ব্রাউজার ডিফল্ট বনাম ইউজার স্টাইল বনাম অথর স্টাইল বনাম !important), স্পেসিফিসিটি (উৎস সমান হলে), এবং কোডে উপস্থিতির ক্রম (স্পেসিফিসিটি টাই হলে শেষের কোডটি জেতে)। ডিক্লারেশনের শেষে !important যোগ করলে সাধারণ স্পেসিফিসিটি নিয়ম বাতিল হয়ে তা শীর্ষে স্থান পায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Tie-breaking by Order of Appearance (equal specificity 0,0,1,0): */
.button {
  background-color: #2563eb; /* First declaration: blue */
}

.button {
  background-color: #16a34a; /* Last writer wins: green */
}

/* !important Emergency Override: */
p.intro {
  color: #1e293b !important; /* Overrides even ID selectors */
}

#intro-text {
  color: #ea580c; /* Defeated by !important */
}

/* Rendered Output:
   .button elements render green (#16a34a).
   #intro-text with class="intro" renders slate (#1e293b) because !important takes absolute precedence.
*/`,
      caption: {
        en: 'Source order resolves specificity ties; !important acts as a nuclear override.',
        bn: 'স্পেসিফিসিটি টাই হলে শেষের রুলটি কার্যকর হয়; !important সাধারণ অগ্রাধিকারকে বাতিল করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. CSS Inheritance and the Universal Box Reset', bn: '১০. CSS ইনহেরিট্যান্স এবং ইউনিভার্সাল বক্স রিসেট' } },
    {
      type: 'para',
      text: {
        en: 'Some CSS properties naturally inherit from parent elements to their children, particularly typographic properties like color, font-family, and line-height. Box model properties (margin, padding, border, width) never inherit by default. The keywords inherit, initial, unset, and revert explicitly control inheritance behavior.',
        bn: 'কিছু CSS প্রপার্টি অভিভাবক থেকে স্বয়ংক্রিয়ভাবে সন্তানে নেমে আসে, বিশেষ করে টাইপোগ্রাফিক প্রপার্টি যেমন color, font-family এবং line-height। বক্স মডেল প্রপার্টি (margin, padding, border, width) কখনো নিজে নিজে ইনহেরিট হয় না। inherit, initial, unset এবং revert কিওয়ার্ড দিয়ে ইচ্ছামতো এই আচরণ নিয়ন্ত্রণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Universal box-sizing reset applied to all elements and pseudo-elements */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Global inheritance on typography */
body {
  font-family: system-ui, -apple-system, sans-serif;
  color: #0f172a;
  line-height: 1.5;
}

/* Explicitly force inheritance onto form elements */
button, input, select, textarea {
  font-family: inherit;
  font-size: inherit;
  color: inherit;
}

/* Rendered Output:
   Form controls now inherit clean site fonts instead of browser-default serif/monospace.
*/`,
      caption: {
        en: 'The standard modern reset establishes predictable box dimensions and unified typography.',
        bn: 'আধুনিক ইউনিভার্সাল রিসেট বক্সের আকার অনুমানযোগ্য করে এবং ওয়েবজুড়ে ফন্ট উত্তরাধিকার নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-cascade-ex1',
      kind: 'predict',
      topic: 'css: Specificity calculation',
      question: {
        en: 'Which selector wins between #sidebar a and .nav .list .item a?',
        bn: '#sidebar a এবং .nav .list .item a-এর মধ্যে কোন সিলেক্টরটির অগ্রাধিকার বেশি?'
      },
      code: `/* Selector A: #sidebar a */
/* Specificity: (0, 1, 0, 1) */

/* Selector B: .nav .list .item a */
/* Specificity: (0, 0, 3, 1) */`,
      answer: '#sidebar a',
      accept: ['#sidebar a', '#sidebar a wins', '#sidebar'],
      hint: {
        en: 'Compare columns left-to-right: 1 ID beats any count of classes.',
        bn: 'বাম থেকে ডানে কলাম তুলনা করুন: ১টি আইডি যেকোনো সংখ্যক ক্লাসের চেয়ে শক্তিশালী।'
      },
      explanation: {
        en: '#sidebar a contains 1 ID selector (0,1,0,1) which immediately outranks .nav .list .item a (0,0,3,1) because ID specificity is evaluated in the second column before classes.',
        bn: '#sidebar a-তে ১টি আইডি রয়েছে যার স্কোর (0,1,0,1)। ক্লাসের সংখ্যা ৩টি হলেও (0,0,3,1) আইডির কলামে কোনো মান না থাকায় আইডি সিলেক্টরটি বিজয়ী হয়।'
      }
    },
    {
      id: 'css-cascade-ex2',
      kind: 'mcq',
      topic: 'css: Combinators',
      question: {
        en: 'Which CSS combinator selects only the paragraphs that are direct children of a div?',
        bn: 'কোন CSS কম্বিনেটরটি শুধুমাত্র div-এর সরাসরি সন্তান (direct children) প্যারাগ্রাফগুলোকে সিলেক্ট করে?'
      },
      options: [
        { en: 'div > p', bn: 'div > p' },
        { en: 'div p', bn: 'div p' },
        { en: 'div + p', bn: 'div + p' },
        { en: 'div ~ p', bn: 'div ~ p' }
      ],
      answer: 0,
      hint: {
        en: 'The greater-than sign (>) represents direct parent-child relationships.',
        bn: 'গ্রেটার-দ্যান চিহ্ন (>) সরাসরি প্যারেন্ট-চাইল্ড সম্পর্ক নির্দেশ করে।'
      },
      explanation: {
        en: 'div > p matches only paragraphs whose immediate parent is a div. div p matches all descendant paragraphs at any nesting depth.',
        bn: 'div > p শুধুমাত্র সরাসরি চাইল্ড প্যারাগ্রাফকে সিলেক্ট করে। ফাঁকা স্পেস (div p) যেকোনো স্তরের ভেতরের সব প্যারাগ্রাফকে ধরে।'
      }
    },
    {
      id: 'css-cascade-ex3',
      kind: 'mcq',
      topic: 'css: Pseudo-classes vs Pseudo-elements',
      question: {
        en: 'What is the key syntactical difference between pseudo-classes and pseudo-elements in modern CSS?',
        bn: 'আধুনিক CSS-এ সিউডো-ক্লাস এবং সিউডো-এলিমেন্টের মূল সিনট্যাক্সগত পার্থক্য কী?'
      },
      options: [
        { en: 'Pseudo-classes use a single colon (:hover), while pseudo-elements use a double colon (::after)', bn: 'সিউডো-ক্লাসে একটি কোলন (:hover) এবং সিউডো-এলিমেন্টে দুটি কোলন (::after) ব্যবহৃত হয়' },
        { en: 'Pseudo-classes only apply to links, pseudo-elements apply to text', bn: 'সিউডো-ক্লাস শুধু লিংকে কাজ করে, সিউডো-এলিমেন্ট টেক্সটে কাজ করে' },
        { en: 'Pseudo-elements cannot take any styles', bn: 'সিউডো-এলিমেন্টে কোনো স্টাইল দেওয়া যায় না' },
        { en: 'There is no difference in syntax', bn: 'সিনট্যাক্সে কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'Look at the number of colons used before the keyword.',
        bn: 'কিওয়ার্ডের পূর্বে কয়টি কোলন চিহ্ন ব্যবহৃত হয়েছে খেয়াল করুন।'
      },
      explanation: {
        en: 'CSS3 introduced the double-colon syntax (::before, ::after) to distinguish pseudo-elements from state pseudo-classes (:hover, :focus) which use a single colon.',
        bn: 'CSS3-তে সিউডো-এলিমেন্টকে (::before, ::after) স্টেট সিউডো-ক্লাস (:hover, :focus) থেকে আলাদা চিহ্নিত করতে ডাবল কোলন পদ্ধতি চালু করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'css-cascade-quiz',
    title: { en: 'CSS Foundations Quiz', bn: 'CSS ভিত্তি কুইজ' },
    questions: [
      {
        id: 'cq1',
        kind: 'mcq',
        topic: 'css: Specificity tie-breaking',
        question: {
          en: 'If two identical selectors have equal specificity and target the same element, how does the browser choose the winner?',
          bn: 'যদি দুটি সিলেক্টরের স্পেসিফিসিটি একদম সমান হয় এবং তারা একই উপাদানকে টার্গেট করে, তবে ব্রাউজার কীভাবে বিজয়ী নির্ধারণ করে?'
        },
        options: [
          { en: 'The rule written last in the source code wins (Order of Appearance)', bn: 'সোর্স কোডের শেষে লেখা রুলটি বিজয়ী হয় (অর্ডার অব অ্যাপিয়ারেন্স)' },
          { en: 'The rule written first in the source code wins', bn: 'সোর্স কোডের প্রথমে লেখা রুলটি বিজয়ী হয়' },
          { en: 'The browser ignores both rules and applies browser defaults', bn: 'ব্রাউজার উভয় রুল বাতিল করে ডিফল্ট স্টাইল দেয়' },
          { en: 'The browser picks randomly at runtime', bn: 'ব্রাউজার রানটাইমে লটারির মতো বেছে নেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Think of "last writer wins".',
          bn: '"লাস্ট রাইটার উইনস" নীতির কথা ভাবুন।'
        },
        explanation: {
          en: 'Under CSS cascade rules, when origin and specificity are completely tied, order of appearance resolves the dispute: the last declaration in the document stream wins.',
          bn: 'CSS ক্যাসকেড নিয়মে যখন উৎস এবং স্পেসিফিসিটি সমান হয়, তখন কোডের ক্রম অনুযায়ী সবচেয়ে শেষে লেখা ডিক্লারেশনটিই অগ্রাধিকার পায়।'
        }
      },
      {
        id: 'cq2',
        kind: 'mcq',
        topic: 'css: Inheritance',
        question: {
          en: 'Which of the following CSS properties is inherited by child elements by default?',
          bn: 'নিচের কোন CSS প্রপার্টি ডিফল্টভাবেই প্যারেন্ট থেকে চাইল্ড উপাদানে ইনহেরিট হয়?'
        },
        options: [
          { en: 'color', bn: 'color' },
          { en: 'margin', bn: 'margin' },
          { en: 'border', bn: 'border' },
          { en: 'padding', bn: 'padding' }
        ],
        answer: 0,
        hint: {
          en: 'Box-model properties do not inherit; typography properties do.',
          bn: 'বক্স মডেলের প্রপার্টি নিজে নিজে ইনহেরিট হয় না; টাইপোগ্রাফিক প্রপার্টি ইনহেরিট হয়।'
        },
        explanation: {
          en: 'Typographic properties like color, font-family, and line-height are naturally inherited by child elements. Box-model properties like margin, border, and padding are never inherited automatically.',
          bn: 'টাইপোগ্রাফিক বৈশিষ্ট্য যেমন color, font-family ইত্যাদি চাইল্ড উপাদান স্বয়ংক্রিয়ভাবে পায়। কিন্তু মার্জিন, বর্ডার বা প্যাডিং কখনো নিজে নিজে ইনহেরিট হয় না।'
        }
      }
    ]
  }
};
`;

fs.writeFileSync('/home/user/codeshikhon/src/content/css/lessons/the-cascade-court.ts', content);
console.log('Successfully wrote the-cascade-court.ts');
