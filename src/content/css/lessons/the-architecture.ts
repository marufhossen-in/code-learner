import type { Lesson } from '../../../lib/types';

export const architectureLesson: Lesson = {
  slug: 'css-architecture',
  tech: 'css',
  title: {
    en: 'CSS Architecture: Custom Properties, BEM, Layers & Modern Selectors',
    bn: 'CSS আর্কিটেকচার: কাস্টম প্রপার্টি, BEM, লেয়ার ও আধুনিক সিলেক্টর'
  },
  summary: {
    en: 'Master advanced enterprise stylesheet architecture and performance across 10 structured topics. Understand CSS custom properties, theme switching with dark mode, BEM component naming, cascade layers, and container queries.',
    bn: '১০টি সুসংগঠিত পয়েন্টে প্রফেশনাল ও অ্যাডভান্সড CSS আর্কিটেকচার শিখুন। CSS ভেরিয়েবল বা কাস্টম প্রপার্টি, ডার্ক মোড থিমিং, BEM নামকরণ পদ্ধতি, ক্যাসকেড লেয়ার এবং কনটেইনার কোয়েরি আয়ত্ত করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. CSS Custom Properties: Variables, Fallbacks, and Scope', bn: '১. CSS কাস্টম প্রপার্টি: ভেরিয়েবল, ফলব্যাক ও স্কোপ' } },
    {
      type: 'para',
      text: {
        en: 'CSS Custom Properties (commonly known as CSS variables) allow you to store reusable values prefixed with double hyphens (--brand-color: #2563eb) and access them using var(--brand-color). Unlike preprocessor variables (Sass/LESS), CSS variables live in the live DOM, respond dynamically to media queries, and inherit down the tree.',
        bn: 'CSS কাস্টম প্রপার্টি (বা CSS ভেরিয়েবল) ডাবল হাইফেন (--brand-color: #2563eb) দিয়ে মান সংরক্ষণ করতে এবং var(--brand-color) দিয়ে তা ব্যবহার করতে দেয়। Sass বা প্রাক-প্রসেসরের মতো নয়, CSS ভেরিয়েবল সরাসরি লাইভ DOM-এ কার্যকর থাকে, জাভাস্ক্রিপ্ট দিয়ে পরিবর্তন করা যায় এবং সন্তান উপাদানে ইনহেরিট হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Global Design Tokens on :root */
:root {
  --color-primary: #2563eb;
  --color-primary-hover: #1d4ed8;
  --color-text-main: #0f172a;
  --radius-md: 8px;
  --space-unit: 16px;
}

/* Consuming tokens with fallback values */
.button {
  background-color: var(--color-primary, #0000ff); /* Fallback to #0000ff if variable is missing */
  border-radius: var(--radius-md);
  padding: calc(var(--space-unit) / 2) var(--space-unit);
  color: #ffffff;
}

/* Local Scoped Variable Override */
.hero-card {
  --color-primary: #7c3aed; /* Re-scopes primary color to purple only inside this card */
}

/* Rendered Output:
   Buttons use standard blue (#2563eb); buttons inside .hero-card render purple (#7c3aed).
*/`,
      caption: {
        en: 'Custom properties inherit down the DOM tree, enabling localized token overrides.',
        bn: 'কাস্টম প্রপার্টি DOM ট্রি বেয়ে নিচে নামে এবং নির্দিষ্ট উপাদানের জন্য ওভাররাইড করা যায়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'CSS Cascade Layers Precedence', bn: 'CSS ক্যাসকেড লেয়ারের অগ্রাধিকার স্তর' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Cascade layer precedence stack from reset to framework to components to unlayered overrides"><g font-size="11" fill="currentColor"><rect x="30" y="20" width="130" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="95" y="45" text-anchor="middle" font-weight="bold">1. @layer reset</text><text x="95" y="75" text-anchor="middle">Box sizing</text><text x="95" y="100" text-anchor="middle">Margin resets</text><text x="95" y="125" text-anchor="middle" font-size="10">Lowest weight</text><rect x="180" y="20" width="130" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="245" y="45" text-anchor="middle" font-weight="bold">2. @layer base</text><text x="245" y="75" text-anchor="middle">Typography</text><text x="245" y="100" text-anchor="middle">Colors & tokens</text><text x="245" y="125" text-anchor="middle" font-size="10">Medium weight</text><rect x="330" y="20" width="140" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="400" y="45" text-anchor="middle" font-weight="bold">3. @layer components</text><text x="400" y="75" text-anchor="middle">Buttons, cards</text><text x="400" y="100" text-anchor="middle">BEM structures</text><text x="400" y="125" text-anchor="middle" font-size="10">High weight</text><rect x="490" y="20" width="140" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="560" y="45" text-anchor="middle" font-weight="bold">4. Unlayered</text><text x="560" y="75" text-anchor="middle">Utility overrides</text><text x="560" y="100" text-anchor="middle">Page specifics</text><text x="560" y="125" text-anchor="middle" font-size="10">Highest weight</text></g></svg>`,
      caption: {
        en: 'Later declared layers override earlier layers unconditionally. Unlayered styles always hold the highest normal precedence.',
        bn: 'পরে ঘোষিত লেয়ারের ক্ষমতা আগের লেয়ারের চেয়ে বেশি। লেয়ারের বাইরে থাকা স্টাইল সর্বদা সবার উপর জয়ী হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Dynamic Theming: Light and Dark Modes with Custom Properties', bn: '২. ডায়নামিক থিমিং: কাস্টম প্রপার্টি দিয়ে লাইট ও ডার্ক মোড' } },
    {
      type: 'para',
      text: {
        en: 'Theming is implemented cleanly by defining semantic design tokens on :root and swapping values inside [data-theme="dark"] attributes or @media (prefers-color-scheme: dark). Components only consume semantic tokens, never hardcoded color codes.',
        bn: 'থিমিং বাস্তবায়ন করতে :root-এ সিম্যান্টিক ডিজাইন টোকেন ঘোষণা করা হয় এবং [data-theme="dark"] বা @media (prefers-color-scheme: dark)-এর মাধ্যমে শুধুমাত্র টোকেনের মান পরিবর্তন করা হয়। কম্পোনেন্টগুলো সবসময় টোকেন ব্যবহার করে, ফলে এক ক্লিকে পুরো সাইট ডার্ক মোড হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Light Theme Defaults */
:root {
  --bg-surface: #ffffff;
  --bg-subtle: #f8fafc;
  --text-heading: #0f172a;
  --text-body: #475569;
  --border-line: #e2e8f0;
}

/* Dark Theme Overrides */
[data-theme="dark"] {
  --bg-surface: #0f172a;
  --bg-subtle: #1e293b;
  --text-heading: #f8fafc;
  --text-body: #94a3b8;
  --border-line: #334155;
}

/* Theme-agnostic component code */
.dashboard-card {
  background-color: var(--bg-surface);
  color: var(--text-body);
  border: 1px solid var(--border-line);
}

.dashboard-card h3 {
  color: var(--text-heading);
}

/* Rendered Output:
   Switching the HTML tag to <html data-theme="dark"> instantly shifts the entire UI to midnight dark.
*/`,
      caption: {
        en: 'Components consume semantic tokens, swapping full color schemes with zero CSS duplication.',
        bn: 'কম্পোনেন্টগুলো সিম্যান্টিক টোকেন ব্যবহার করে কোনো ডুপ্লিকেট কোড ছাড়াই থিম পরিবর্তন করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The BEM Methodology: Block, Element, and Modifier', bn: '৩. BEM মেথডোলজি: ব্লক, এলিমেন্ট ও মডিফায়ার' } },
    {
      type: 'para',
      text: {
        en: 'BEM (Block, Element, Modifier) is an industry-standard naming convention that keeps CSS maintainable. A Block is a standalone component (.card); an Element is a child part denoted by double underscores (.card__title); and a Modifier is a state or variation denoted by double hyphens (.card--featured).',
        bn: 'BEM (Block, Element, Modifier) হলো কোড পরিষ্কার রাখার বহুল ব্যবহৃত ক্লাসের নামকরণ নীতি। Block হলো স্বয়ংসম্পূর্ণ কম্পোনেন্ট (.card); Element হলো তার ভেতরের অংশ যা ডাবল আন্ডারস্কোর দিয়ে লেখা হয় (.card__title); এবং Modifier হলো কোনো বিশেষ রূপ বা অবস্থা যা ডাবল হাইফেন দিয়ে লেখা হয় (.card--featured)।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      code: `<!-- BEM HTML Structure:
     Block: .user-card
     Elements: .user-card__avatar, .user-card__name, .user-card__bio
     Modifier: .user-card--premium
-->
<div class="user-card user-card--premium">
  <img class="user-card__avatar" src="avatar.jpg" alt="User">
  <div class="user-card__content">
    <h2 class="user-card__name">Farhan Ahmed</h2>
    <p class="user-card__bio">Full Stack Software Engineer</p>
  </div>
</div>

<style>
  /* Flat (0,0,1,0) specificity across all rules */
  .user-card { border: 1px solid #e2e8f0; border-radius: 8px; }
  .user-card--premium { border-color: #f59e0b; background: #fffbeb; }
  .user-card__avatar { width: 64px; height: 64px; border-radius: 50%; }
  .user-card__name { font-size: 18px; font-weight: 700; margin: 0; }
  .user-card__bio { font-size: 14px; color: #64748b; }
</style>

<!-- Rendered Output:
   All selectors maintain a perfectly flat (0,0,1,0) specificity ledger, eliminating selector wars.
-->`,
      caption: {
        en: 'BEM enforces single-class selectors, ensuring flat, easily overrideable specificity.',
        bn: 'BEM একক ক্লাসের মাধ্যমে স্পেসিফিসিটি সমতল রাখে এবং কোড সংঘর্ষ দূর করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Specificity Management and Flat Class Architecture', bn: '৪. স্পেসিফিসিটি ব্যবস্থাপনা ও ফ্ল্যাট ক্লাস আর্কিটেকচার' } },
    {
      type: 'para',
      text: {
        en: 'A major architectural anti-pattern is deep nesting (e.g., .nav .list li a.btn). Such over-qualified selectors create high specificity debt, forcing future developers to use !important. Flat class architectures restrict specificity to a single class score (0,0,1,0), never using ID selectors (#) for styling.',
        bn: 'CSS-এ সবচেয়ে বড় ভুল হলো অতিরিক্ত নেস্টিং করা (যেমন .nav .list li a.btn)। এতে স্পেসিফিসিটি অস্বাভাবিক বেড়ে যায় এবং ভবিষ্যতে বাধ্য হয়ে !important দিতে হয়। ফ্ল্যাট ক্লাস নীতিতে প্রতিটি সিলেক্টরকে একক ক্লাসের স্পেসিফিসিটিতে (0,0,1,0) রাখা হয় এবং স্টাইলিংয়ে কখনোই আইডি (#) ব্যবহার করা হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* ❌ BAD: High Specificity Debt (0,0,4,1) - extremely hard to override */
header.site-header nav.main-nav ul.menu li a.active {
  color: #2563eb;
}

/* ❌ BAD: ID in selector (0,1,0,0) - locks element permanently */
#primary-action-button {
  background: #16a34a;
}

/* ✅ GOOD: Flat BEM Class (0,0,1,0) - trivial to override or theme */
.nav-link--active {
  color: #2563eb;
}

.btn-primary {
  background: #16a34a;
}

/* Rendered Output:
   Clean, decoupled styling where components can be moved anywhere on any page effortlessly.
*/`,
      caption: {
        en: 'Keep selectors flat (0,0,1,0) to prevent specificity escalation wars across teams.',
        bn: 'সিলেক্টর সমতল (0,0,1,0) রাখলে টিমের ভেতরে স্টাইল ওভাররাইড করার যুদ্ধ বন্ধ হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Modern Cascade Layers: The @layer Architecture', bn: '৫. আধুনিক ক্যাসকেড লেয়ার: @layer আর্কিটেকচার' } },
    {
      type: 'para',
      text: {
        en: 'Cascade Layers (@layer) provide explicit architectural control over stylesheet precedence. Rules in higher layers always defeat rules in lower layers, regardless of selector specificity! An unlayered rule defeats layered rules; between layers, the order declared in @layer determines the winner.',
        bn: 'ক্যাসকেড লেয়ার (@layer) স্টাইলশিটের অগ্রাধিকারকে নিয়মতান্ত্রিকভাবে সাজায়। উচ্চতর লেয়ারের নিয়মগুলো যেকোনো নিম্নতর লেয়ারের নিয়মকে পরাজিত করে, তাদের স্পেসিফিসিটি যতই বেশি হোক না কেন! লেয়ারের ক্রম নির্ধারণ করে কে বিজয়ী হবে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Establish the architectural hierarchy order */
@layer reset, base, components, utilities;

/* Lowest priority: CSS Reset */
@layer reset {
  * { box-sizing: border-box; margin: 0; padding: 0; }
}

/* Base typography */
@layer base {
  h1 { font-size: 2rem; color: #0f172a; }
}

/* Component layer */
@layer components {
  .btn {
    padding: 8px 16px;
    background-color: #2563eb;
    color: #ffffff;
  }
}

/* Highest priority: Utilities (ALWAYS wins over components, even with 1 class) */
@layer utilities {
  .hidden { display: none !important; }
  .p-0 { padding: 0; }
}

/* Rendered Output:
   .p-0 in the utilities layer overrides .btn padding cleanly without needing !important.
*/`,
      caption: {
        en: '@layer establishes strict architectural tiers where utilities naturally trump components.',
        bn: '@layer স্পষ্ট অগ্রাধিকার স্তর তৈরি করে যেখানে ইউটিলিটি ক্লাস সহজে কম্পোনেন্টকে ওভাররাইড করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Native CSS Nesting: Clean Scoping with the & Selector', bn: '৬. নেটিভ CSS নেস্টিং: & সিলেক্টর দিয়ে পরিচ্ছন্ন কোড' } },
    {
      type: 'para',
      text: {
        en: 'Modern browsers support native CSS nesting without requiring preprocessors like Sass. Child rules are written inside the parent curly braces. The ampersand (&) references the parent selector directly for pseudo-classes, modifiers, and child elements.',
        bn: 'আধুনিক ব্রাউজারগুলো কোনো Sass বা প্রাক-প্রসেসর ছাড়াই সরাসরি CSS নেস্টিং সমর্থন করে। চাইল্ড রুলগুলো প্যারেন্টের কার্লি ব্র্যাকেটের ভেতরে লেখা যায়। অ্যাম্পারস্যান্ড (&) সরাসরি প্যারেন্টকে নির্দেশ করে সিউডো-ক্লাস ও মডিফায়ার তৈরি করতে ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Native CSS Nesting */
.card {
  background: #ffffff;
  padding: 1.5rem;
  border-radius: 8px;

  /* Direct child nesting: .card .card-title */
  & .card-title {
    font-size: 1.25rem;
    font-weight: 600;
  }

  /* Pseudo-class on parent: .card:hover */
  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  }

  /* Modifier on parent: .card.card--featured */
  &.card--featured {
    border: 2px solid #3b82f6;
  }

  /* Child links inside card */
  & a {
    color: #2563eb;
    &:hover { text-decoration: underline; }
  }
}

/* Rendered Output:
   Browser parses nested blocks into standard CSS rules without compiling tools.
*/`,
      caption: {
        en: 'Native CSS nesting reduces repetitive selector code while maintaining logical component grouping.',
        bn: 'নেটিভ নেস্টিং কোডের পুনরাবৃত্তি কমিয়ে কম্পোনেন্টগুলোকে সুসংগঠিত রাখে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Relational and Logical Selectors: :is(), :where(), and :has()', bn: '৭. লজিক্যাল ও রিলেশনাল সিলেক্টর: :is(), :where() ও :has()' } },
    {
      type: 'para',
      text: {
        en: ':is() takes a selector list and takes the specificity of its most specific argument. :where() takes the same list but has ZERO (0,0,0,0) specificity, making it ideal for resets and libraries. :has() is the long-awaited parent selector: it targets an element based on its children or subsequent siblings.',
        bn: ':is() একাধিক সিলেক্টরের তালিকা থেকে সবচেয়ে বেশি স্পেসিফিসিটি গ্রহণ করে। :where() ঠিক একই কাজ করে কিন্তু তার স্পেসিফিসিটি হয় শূন্য (0,0,0,0), যা লাইব্রেরি ও রিসেটের জন্য আদর্শ। আর :has() হলো বহুপ্রতীক্ষিত প্যারেন্ট সিলেক্টর: এটি ভেতরের চাইল্ড বা পরের উপাদানের উপস্থিতির ওপর ভিত্তি করে প্যারেন্টকে স্টাইল করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. :is() simplifies repetitive descendant trees */
/* Equivalent to: article h1, article h2, section h1, section h2 */
:is(article, section) :is(h1, h2) {
  line-height: 1.2;
}

/* 2. :where() applies styles with ZERO specificity (effortless to override) */
:where(button, input) {
  font-family: inherit;
  border: 1px solid #cbd5e1;
}

/* 3. :has() - THE PARENT SELECTOR */
/* Style the card ONLY if it contains an image */
.card:has(img) {
  padding-top: 0; /* Remove top padding for flush hero images */
}

/* Style form label when associated input is checked or focused */
.form-field:has(input:focus) {
  border-color: #2563eb;
}

/* Rendered Output:
   Parent cards automatically remove top padding when containing an image.
*/`,
      caption: {
        en: ':has() enables true parent-state styling based on nested child conditions.',
        bn: ':has() চাইল্ড উপাদানের অবস্থার ভিত্তিতে সরাসরি প্যারেন্টকে স্টাইল করার ক্ষমতা দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Container Queries: Component-Responsive Design', bn: '৮. কনটেইনার কোয়েরি: কম্পোনেন্ট-ভিত্তিক রেসপন্সিভ ডিজাইন' } },
    {
      type: 'para',
      text: {
        en: 'Media queries respond to the browser viewport, which fails when a component is placed in a narrow sidebar on a desktop screen. Container Queries (@container) allow a component to query the dimensions of its parent container instead of the whole screen, making components truly self-contained and modular.',
        bn: 'মিডিয়া কোয়েরি পুরো ব্রাউজার উইন্ডোর মাপ দেখে, যা ডেস্কটপের সাইডবারে রাখা ছোট উপাদানের ক্ষেত্রে ভুল হতে পারে। কনটেইনার কোয়েরি (@container) পুরো স্ক্রিনের বদলে উপাদানটির নিজস্ব প্যারেন্ট কনটেইনারের প্রস্থ মেপে সিদ্ধান্ত নেয়, ফলে কম্পোনেন্টগুলো যেকোনো জায়গায় স্বাধীনভাবে খাপ খায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Define container context on parent */
.widget-slot {
  container-type: inline-size;
  container-name: widget;
}

/* Default mobile card style (Vertical layout) */
.user-widget {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* 2. Container Query: triggers when PARENT CONTAINER is wider than 450px */
@container widget (min-width: 450px) {
  .user-widget {
    flex-direction: row;     /* Flips to horizontal layout whenever parent box has room */
    align-items: center;
  }
}

/* Rendered Output:
   The widget renders horizontal in the wide main column, and vertical in the narrow sidebar, on the SAME page!
*/`,
      caption: {
        en: 'Container queries evaluate parent width, making components truly portable across all layouts.',
        bn: 'কনটেইনার কোয়েরি প্যারেন্টের মাপ দেখে, ফলে একটি কম্পোনেন্ট যেকোনো স্থানে নিখুঁতভাবে ফিট হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Modern CSS Reset: Building a Bulletproof Baseline', bn: '৯. আধুনিক CSS রিসেট: ত্রুটিহীন বেসলাইন তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Different browsers ship with distinct default margins, fonts, and box calculations. A modern CSS reset strips browser quirks, standardizes box-sizing to border-box, removes default margins, sets images to block, and inherits form typography.',
        bn: 'ভিন্ন ভিন্ন ব্রাউজারের নিজস্ব কিছু ডিফল্ট মার্জিন ও ফন্ট থাকে। একটি আধুনিক CSS রিসেট এই অসঙ্গতিগুলো দূর করে: box-sizing-কে border-box করে, বাড়তি মার্জিন সরায়, ছবিকে ডিসপ্লে ব্লক করে এবং ফর্মের ভেতরে ফন্ট উত্তরাধিকার নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Production Modern CSS Reset */

/* 1. Universal border-box box model */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* 2. Smooth scrolling and fluid text sizing */
html {
  -webkit-text-size-adjust: 100%;
  scroll-behavior: smooth;
}

/* 3. Base body setup */
body {
  min-height: 100vh;
  line-height: 1.5;
  font-family: system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* 4. Responsive media defaults */
img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

/* 5. Inherit typography on form controls */
input, button, textarea, select {
  font: inherit;
  color: inherit;
}

/* Rendered Output:
   Eliminates all cross-browser layout surprises and establishes predictable sizing behavior.
*/`,
      caption: {
        en: 'A modern reset eliminates browser default quirks without excessive style stripping.',
        bn: 'আধুনিক রিসেট ব্রাউজারের সব অসঙ্গতি দূর করে প্রতিটি প্রজেক্টের জন্য একটি সুস্থ ভিত্তি গড়ে তোলে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. CSS Methodologies: CSS Modules, Tailwind, and Design Systems', bn: '১০. আধুনিক CSS মেথডোলজি: CSS মডিউল, টেলউইন্ড ও ডিজাইন সিস্টেম' } },
    {
      type: 'para',
      text: {
        en: 'Modern engineering teams organize stylesheets through three main paradigms. Utility-First styling composes atomic classes like Tailwind directly in markup. CSS Modules scope class names locally to prevent naming collisions. Design Systems centralize design tokens across web, iOS, and Android applications.',
        bn: 'আধুনিক সফটওয়্যার দলগুলো ৩টি প্রধান পদ্ধতিতে স্টাইল পরিচালনা করে। ইউটিলিটি-ফার্স্ট পদ্ধতি এইচটিএমএলে সরাসরি ক্লাসের মাধ্যমে স্টাইল দেয়। CSS মডিউলস ক্লাসগুলোকে লোকালি স্কোপ করে গ্লোবাল কনফ্লিক্ট দূর করে। ডিজাইন সিস্টেম কেন্দ্রীয় টোকেন দিয়ে সব প্ল্যাটফর্মে একই ডিজাইন নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Paradigm 1: Design Tokens (The source of truth) */
:root {
  --token-color-brand: #2563eb;
  --token-radius-card: 12px;
}

/* Paradigm 2: CSS Modules (Scoped unique classes output by build tool) */
/* Input: .button { ... } -> Output: .button_a7x9f { ... } */
.buttonLocal {
  background-color: var(--token-color-brand);
  border-radius: var(--token-radius-card);
}

/* Paradigm 3: Utility-First Composability */
/* Class composition in HTML: class="flex items-center gap-4 p-4 rounded-lg" */
.flex { display: flex; }
.items-center { align-items: center; }
.gap-4 { gap: 1rem; }

/* Rendered Output:
   Engineering teams eliminate dead CSS and scale to hundreds of developers without collision bugs.
*/`,
      caption: {
        en: 'Design tokens provide the bedrock for design systems, CSS modules, and atomic utilities.',
        bn: 'ডিজাইন টোকেন হলো যেকোনো স্কেলেবল ডিজাইন সিস্টেম ও মডার্ন আর্কিটেকচারের মূল ভিত্তি।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-arch-ex1',
      kind: 'predict',
      topic: 'css: Where selector specificity',
      question: {
        en: 'What is the specificity score of a selector wrapped inside :where(header.main-header #nav a)?',
        bn: ':where(header.main-header #nav a)-এর ভেতর মোড়ানো সিলেক্টরের স্পেসিফিসিটি স্কোর কত হয়?'
      },
      code: `/* :where(header.main-header #nav a) */
/* Specificity: (0, 0, 0, 0) */`,
      answer: '0',
      accept: ['0', '0,0,0,0', 'zero', '(0,0,0,0)'],
      hint: {
        en: ':where() always contributes exactly zero specificity.',
        bn: ':where() সর্বদা ঠিক শূন্য স্পেসিফিসিটি প্রদান করে।'
      },
      explanation: {
        en: 'The :where() pseudo-class always has a specificity of 0 (0,0,0,0), regardless of how complex the selectors inside its arguments are. In contrast, :is() takes the specificity of its highest argument.',
        bn: ':where() ফাংশনের ভেতরের সিলেক্টর যতই জটিল হোক না কেন, এর স্পেসিফিসিটি সর্বদা ০ (0,0,0,0) থাকে। আর :is() তার ভেতরের সর্বোচ্চ সিলেক্টরের স্কোর গ্রহণ করে।'
      }
    },
    {
      id: 'css-arch-ex2',
      kind: 'mcq',
      topic: 'css: Relational parent selector',
      question: {
        en: 'Which modern CSS pseudo-class acts as the parent selector, styling an element based on its descendants or subsequent siblings?',
        bn: 'কোন আধুনিক CSS সিউডো-ক্লাসটি প্যারেন্ট সিলেক্টর হিসেবে কাজ করে এবং চাইল্ড উপাদানের ওপর ভিত্তি করে প্যারেন্টকে স্টাইল করে?'
      },
      options: [
        { en: ':has()', bn: ':has()' },
        { en: ':is()', bn: ':is()' },
        { en: ':where()', bn: ':where()' },
        { en: ':parent()', bn: ':parent()' }
      ],
      answer: 0,
      hint: {
        en: 'It checks if the element "has" a certain child.',
        bn: 'উপাদানটিতে নির্দিষ্ট কোনো চাইল্ড "আছে" (has) কি না তা পরীক্ষা করে।'
      },
      explanation: {
        en: ':has() allows an element to style itself conditionally if it contains elements matching the inner selector (e.g. .card:has(img)).',
        bn: ':has() কোনো উপাদানের ভেতরে নির্দিষ্ট কোনো চাইল্ড থাকলে সেই প্যারেন্টকে কন্ডিশনালি স্টাইল করতে দেয় (যেমন .card:has(img))।'
      }
    },
    {
      id: 'css-arch-ex3',
      kind: 'mcq',
      topic: 'css: Container query difference',
      question: {
        en: 'What is the primary difference between container queries (@container) and media queries (@media)?',
        bn: 'কনটেইনার কোয়েরি (@container) এবং মিডিয়া কোয়েরির (@media) মধ্যে মূল পার্থক্য কী?'
      },
      options: [
        { en: 'Container queries evaluate the dimensions of the parent container; media queries evaluate the browser viewport', bn: 'কনটেইনার কোয়েরি প্যারেন্ট কনটেইনারের মাপ পরিমাপ করে; মিডিয়া কোয়েরি পুরো ব্রাউজার ভিউপোর্টের মাপ পরিমাপ করে' },
        { en: 'Container queries only work in JavaScript', bn: 'কনটেইনার কোয়েরি শুধু জাভাস্ক্রিপ্টে চলে' },
        { en: 'Media queries cannot be used on mobile devices', bn: 'মিডিয়া কোয়েরি মোবাইলে ব্যবহার করা যায় না' },
        { en: 'Container queries change HTML tags', bn: 'কনটেইনার কোয়েরি HTML ট্যাগ বদলে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'One measures the container, the other measures the window.',
        bn: 'একটি কনটেইনারকে মাপে, অন্যটি পুরো উইন্ডোকে মাপে।'
      },
      explanation: {
        en: 'Container queries allow components to adapt according to the width of their parent container element, making components reusable in both narrow sidebars and wide body sections.',
        bn: 'কনটেইনার কোয়েরি উপাদানের প্যারেন্ট বক্সের প্রস্থ মেপে সিদ্ধান্ত নেয়, ফলে কম্পোনেন্টগুলো সাইডবার কিংবা মূল বডি যেকোনো স্থানে স্বাধীনভাবে ফিট হতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'css-architecture-quiz',
    title: { en: 'CSS Architecture Quiz', bn: 'CSS আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'aq1',
        kind: 'mcq',
        topic: 'css: Cascade layers order',
        question: {
          en: 'Under CSS Cascade Layers (@layer), how is precedence determined between different layers?',
          bn: 'CSS ক্যাসকেড লেয়ারের (@layer) অধীনে বিভিন্ন লেয়ারের মধ্যে অগ্রাধিকার কীভাবে নির্ধারিত হয়?'
        },
        options: [
          { en: 'Rules in later declared layers defeat rules in earlier layers, regardless of selector specificity', bn: 'পরবর্তী ঘোষিত লেয়ারের নিয়মগুলো পূর্ববর্তী লেয়ারকে পরাজিত করে, তাদের সিলেক্টর স্পেসিফিসিটি যাই হোক না কেন' },
          { en: 'Highest specificity always wins, ignoring layer order', bn: 'লেয়ার অগ্রাহ্য করে সর্বোচ্চ স্পেসিফিসিটি সবসময় জেতে' },
          { en: 'Earlier declared layers always win', bn: 'আগে ঘোষিত লেয়ার সবসময় জেতে' },
          { en: 'Layers only apply to print stylesheets', bn: 'লেয়ার শুধু প্রিন্ট স্টাইলে কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Later declared layers have higher precedence.',
          bn: 'পরে ঘোষিত লেয়ারের ক্ষমতা বেশি থাকে।'
        },
        explanation: {
          en: 'Between normal layers, rules defined in layers listed later in the @layer declaration override rules in earlier layers, completely superseding selector specificity calculations.',
          bn: 'সাধারণ লেয়ারগুলোর ক্ষেত্রে @layer ঘোষণায় পরে থাকা লেয়ারের স্টাইল পূর্ববর্তী লেয়ারের ওপর জয়ী হয় এবং সিলেক্টরের স্পেসিফিসিটিকে সম্পূর্ণ বাতিল করে অগ্রাধিকার পায়।'
        }
      },
      {
        id: 'aq2',
        kind: 'mcq',
        topic: 'css: BEM modifier syntax',
        question: {
          en: 'In the BEM naming methodology, how is a Modifier state syntactically denoted on a class name?',
          bn: 'BEM নামকরণ পদ্ধতিতে একটি মডিফায়ার স্টেট ক্লাসের নামে কোন সিনট্যাক্স দিয়ে প্রকাশ করা হয়?'
        },
        options: [
          { en: 'Double hyphens (--), for example: .button--primary', bn: 'ডাবল হাইফেন (--), যেমন: .button--primary' },
          { en: 'Double underscores (__)', bn: 'ডাবল আন্ডারস্কোর (__)' },
          { en: 'Single dot (.)', bn: 'একক ডট (.)' },
          { en: 'Hash symbol (#)', bn: 'হ্যাশ চিহ্ন (#)' }
        ],
        answer: 0,
        hint: {
          en: 'Elements use double underscores (__), while modifiers use double hyphens (--).',
          bn: 'এলিমেন্টে ডাবল আন্ডারস্কোর (__) এবং মডিফায়ারে ডাবল হাইফেন (--) ব্যবহৃত হয়।'
        },
        explanation: {
          en: 'Under BEM rules, double underscores denote elements (.block__element), while double hyphens denote modifiers and variations (.block--modifier).',
          bn: 'BEM নিয়ম অনুযায়ী ডাবল আন্ডারস্কোর দিয়ে চাইল্ড এলিমেন্ট (.block__element) এবং ডাবল হাইফেন দিয়ে মডিফায়ার বা ভ্যারিয়েশন (.block--modifier) লেখা হয়।'
        }
      },
      {
        id: 'aq3',
        kind: 'mcq',
        topic: 'css: Parent selector with :has',
        question: {
          en: 'What unique architectural capability does the CSS :has() pseudo-class provide to stylesheet authors?',
          bn: 'CSS :has() সিউডো-ক্লাস স্টাইলশিট লেখকদের কোন অনন্য আর্কিটেকচারাল সুবিধা প্রদান করে?'
        },
        options: [
          { en: 'Acts as a parent selector that styles an element based on its children or following siblings', bn: 'প্যারেন্ট সিলেক্টর হিসেবে কাজ করে যা চাইল্ড উপাদানের উপস্থিতির ওপর ভিত্তি করে প্যারেন্টকে স্টাইল করে' },
          { en: 'Loads external JavaScript files into CSS dynamically', bn: 'CSS-এর ভেতরে জাভাস্ক্রিপ্ট ফাইল লোড করে' },
          { en: 'Encrypts CSS classes to prevent inspection in browser DevTools', bn: 'ব্রাউজার কনসোলে ক্লাস দেখা বন্ধ করতে এনক্রিপ্ট করে' },
          { en: 'Converts CSS variables into backend database queries', bn: 'CSS ভ্যারিয়েবলকে ডাটাবেজ কোয়েরিতে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Often referred to as the long-awaited CSS parent selector.',
          bn: 'বহু প্রতীক্ষিত CSS প্যারেন্ট সিলেক্টর হিসেবে পরিচিত।'
        },
        explanation: {
          en: ':has() enables selecting a parent container based on whether it contains specific child elements or states (e.g., card:has(img)).',
          bn: ':has() চাইল্ড উপাদানের উপস্থিতি বা অবস্থার ওপর ভিত্তি করে সরাসরি প্যারেন্ট কন্টেইনারকে নির্বাচন ও স্টাইল করার সুযোগ দেয়।'
        }
      },
      {
        id: 'aq4',
        kind: 'mcq',
        topic: 'css: Cascade layers order',
        question: {
          en: 'How do unlayered styles interact with layered styles defined inside @layer?',
          bn: '@layer-এর বাইরে থাকা সাধারণ স্টাইলগুলোর সাথে লেয়ারের ভেতরের স্টাইলগুলোর অগ্রাধিকার সম্পর্ক কেমন হয়?'
        },
        options: [
          { en: 'Unlayered styles always override all normal layered styles regardless of specificity', bn: 'স্পেসিফিসিটি যাই হোক না কেন লেয়ারবিহীন সাধারণ স্টাইল সব লেয়ারের স্টাইলকে বাতিল করে জয়ী হয়' },
          { en: 'Layered styles always defeat unlayered styles', bn: 'লেয়ারের স্টাইল সর্বদা লেয়ারবিহীন স্টাইলকে পরাজিত করে' },
          { en: 'Unlayered styles are deleted by the browser compiler', bn: 'লেয়ারবিহীন স্টাইল ব্রাউজার কম্পাইলার স্বয়ংক্রিয়ভাবে মুছে দেয়' },
          { en: 'Specificity is merged into a single arithmetic sum', bn: 'সব স্পেসিফিসিটি যোগ করে একটি গড় মান হিসাব হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Styles outside any @layer have highest normal precedence.',
          bn: 'যেকোনো @layer-এর বাইরে থাকা কোড সবার উপরে অবস্থান করে।'
        },
        explanation: {
          en: 'Styles declared outside any @layer sit at the top of the normal cascade order, strictly defeating all regular layered rules.',
          bn: '@layer-এর বাইরে সাধারণ স্টাইল ক্যাসকেডের শীর্ষে অবস্থান করে, ফলে তা ভেতরের যেকোনো লেয়ারের নিয়মকে সরাসরি বাতিল করে নিজের মান কার্যকর করে।'
        }
      }
    ]
  }
};
