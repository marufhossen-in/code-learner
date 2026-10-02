import type { Lesson } from '../../../lib/types';

export const flexboxLesson: Lesson = {
  slug: 'flexbox',
  tech: 'css',
  title: {
    en: 'CSS Flexbox: The Complete One-Dimensional Layout System',
    bn: 'CSS ফ্লেক্সবক্স: একমাত্রিক লেআউট সিস্টেমের সম্পূর্ণ গাইড'
  },
  summary: {
    en: 'Master modern 1D layout across 10 structured topics: flex container model, directional axes, justify-content distribution, align-items cross-axis alignment, flex-wrap and multi-line align-content, gap gutters, flex-grow expansion, flex-shrink compression, flex shorthand, and individual align-self and order overrides.',
    bn: '১০টি সুসংগঠিত পয়েন্টে একমাত্রিক লেআউট আয়ত্ত করুন: ফ্লেক্স কন্টেইনার মডেল, দিক ও অ্যাক্সিস, justify-content দিয়ে স্পেস বণ্টন, align-items ক্রস-অ্যাক্সিস সাজানো, flex-wrap ও মাল্টি-লাইন align-content, gap গাটার, flex-grow প্রসারণ, flex-shrink সংকোচন, flex শর্টহ্যান্ড এবং স্বতন্ত্র align-self ও order ওভাররাইড।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'grid',
    title: { en: 'CSS Grid: Complete 2D Layout System', bn: 'CSS গ্রিড: দ্বিমাত্রিক লেআউট সিস্টেম' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Flexbox Model: Containers, Items, and the Two Axes', bn: '১. ফ্লেক্সবক্স মডেল: কন্টেইনার, আইটেম ও দুই অ্যাক্সিস' } },
    {
      type: 'para',
      text: {
        en: 'Declaring display: flex transforms an element into a Flex Container and its direct children into Flex Items. The layout operates along two perpendicular axes: the Main Axis (defined by flex-direction) and the Cross Axis (perpendicular to the main axis). All spacing and alignment properties operate along one of these two axes.',
        bn: 'display: flex ঘোষণা করলে একটি উপাদান ফ্লেক্স কন্টেইনারে পরিণত হয় এবং তার ভেতরের সন্তানরা ফ্লেক্স আইটেম হয়ে যায়। এটি দুটি পরস্পর লম্ব অ্যাক্সিসের ওপর ভিত্তি করে কাজ করে: মূল অ্যাক্সিস বা মেইন অ্যাক্সিস (যা flex-direction দ্বারা নির্ধারিত) এবং ক্রস অ্যাক্সিস (যা মেইন অ্যাক্সিসের সাথে লম্বভাবে থাকে)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Basic Flex Container Setup */
.flex-container {
  display: flex;             /* Activates flexbox formatting context */
  flex-direction: row;       /* Main axis: Horizontal left-to-right (Default) */
                             /* Cross axis: Vertical top-to-bottom */
  background-color: #f8fafc;
  padding: 16px;
  border-radius: 8px;
}

.flex-item {
  background-color: #2563eb;
  color: #ffffff;
  padding: 16px 24px;
  border-radius: 6px;
}

/* Rendered Output:
   Child items immediately align side-by-side in a horizontal row without requiring floats.
*/`,
      caption: {
        en: 'display: flex converts immediate children into flex items aligned along the main axis.',
        bn: 'display: flex ভেতরের চাইল্ড উপাদানগুলোকে স্বাচ্ছন্দ্যে এক লাইনে সাজিয়ে দেয়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'Flexbox Main and Cross Axes', bn: 'ফ্লেক্সবক্স মেইন ও ক্রস অ্যাক্সিস' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Diagram of Flexbox container showing Main Axis horizontally and Cross Axis vertically"><g font-size="12" fill="currentColor"><rect x="20" y="20" width="620" height="140" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="40" y="42" font-weight="bold">Flex Container (display: flex)</text><line x1="40" y1="55" x2="600" y2="55" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4"/><text x="520" y="48" font-size="11">Main Axis &rarr; (justify-content)</text><line x1="40" y1="70" x2="40" y2="145" stroke="currentColor" stroke-width="1.2" stroke-dasharray="4"/><text x="48" y="140" font-size="11">&darr; Cross Axis (align-items)</text><rect x="100" y="75" width="120" height="60" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.2"/><text x="160" y="110" text-anchor="middle">Item 1</text><rect x="250" y="75" width="120" height="60" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.2"/><text x="310" y="110" text-anchor="middle">Item 2</text><rect x="400" y="75" width="120" height="60" rx="6" fill="currentColor" fill-opacity="0.1" stroke="currentColor" stroke-width="1.2"/><text x="460" y="110" text-anchor="middle">Item 3</text></g></svg>`,
      caption: {
        en: 'The main axis runs in the direction of flow (default row). The cross axis runs perpendicular to it.',
        bn: 'মেইন অ্যাক্সিস উপাদানের প্রবাহের দিকে চলে (ডিফল্ট row)। ক্রস অ্যাক্সিস তার সাথে লম্বালম্বিভাবে থাকে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Flex Direction: Controlling the Main Axis Orientation', bn: '২. ফ্লেক্স ডিরেকশন: মূল অ্যাক্সিসের দিক নিয়ন্ত্রণ' } },
    {
      type: 'para',
      text: {
        en: 'The flex-direction property establishes the orientation and direction of the main axis. row (default) flows left-to-right; row-reverse flows right-to-left; column stacks items vertically top-to-bottom; and column-reverse stacks items bottom-to-top. Changing flex-direction flips the roles of main and cross axes.',
        bn: 'flex-direction প্রপার্টি মেইন অ্যাক্সিসের দিক ঠিক করে। row (ডিফল্ট) বাম থেকে ডানে সাজায়; row-reverse ডান থেকে বামে উল্টে দেয়; column উপর থেকে নিচে উল্লম্বভাবে সাজায়; এবং column-reverse নিচ থেকে উপরে সাজায়। ডিরেকশন পরিবর্তন করলে মেইন ও ক্রস অ্যাক্সিসের দায়িত্ব অদলবদল হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Row direction (Horizontal main axis) */
.nav-bar {
  display: flex;
  flex-direction: row;           /* [Item 1] [Item 2] [Item 3] */
}

/* Row-reverse direction */
.nav-bar-reversed {
  display: flex;
  flex-direction: row-reverse;   /* [Item 3] [Item 2] [Item 1] */
}

/* Column direction (Vertical main axis) */
.sidebar-menu {
  display: flex;
  flex-direction: column;        /* [Item 1]
                                    [Item 2]
                                    [Item 3] */
}

/* Rendered Output:
   Sidebars stack items vertically while navbars align them horizontally in natural reading order.
*/`,
      caption: {
        en: 'flex-direction sets whether items flow in horizontal rows or vertical columns.',
        bn: 'flex-direction নির্ধারণ করে উপাদানগুলো আনুভূমিক সারিতে নাকি উল্লম্ব কলামে বসবে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Main Axis Distribution: justify-content', bn: '৩. মেইন অ্যাক্সিসে স্পেস বণ্টন: justify-content' } },
    {
      type: 'para',
      text: {
        en: 'The justify-content property distributes leftover free space along the MAIN axis. Core values include flex-start, flex-end, and center to group items together. To distribute space across items, use space-between, space-around, or space-evenly.',
        bn: 'justify-content প্রপার্টি মেইন অ্যাক্সিসে অতিরিক্ত খালি জায়গা বণ্টন করে। প্রধান মানগুলোর মধ্যে রয়েছে flex-start, flex-end এবং center যা উপাদানগুলোকে একত্রিত করে। উপাদানগুলোর মাঝে ফাঁকা জায়গা ছড়াতে space-between, space-around বা space-evenly ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Modern App Header with Logo on left and Nav links on right */
.header-container {
  display: flex;
  justify-content: space-between; /* Pushes first item to left, last item to right */
  align-items: center;
  padding: 0 24px;
}

/* Dead-centering buttons inside a hero container */
.hero-cta-group {
  display: flex;
  justify-content: center;        /* Centers items along main axis */
  gap: 16px;
}

/* Equal card distribution */
.pricing-row {
  display: flex;
  justify-content: space-evenly;  /* Identical spacing before, between, and after cards */
}

/* Rendered Output:
   Logo and profile buttons lock to opposite edges; pricing cards maintain identical gutters.
*/`,
      caption: {
        en: 'justify-content distributes positive free space across items along the main axis.',
        bn: 'justify-content মেইন অ্যাক্সিসে উপাদানগুলোর মধ্যে ফাঁকা স্থান বণ্টন করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Cross Axis Alignment: align-items', bn: '৪. ক্রস অ্যাক্সিসে সাজানো: align-items' } },
    {
      type: 'para',
      text: {
        en: 'The align-items property controls how flex items align along the CROSS axis within the current line. stretch (default) forces items to fill the container height/width; center aligns them at the cross-axis midpoint; flex-start aligns to the cross-axis start; flex-end to the end; and baseline aligns items along their text baselines.',
        bn: 'align-items প্রপার্টি বর্তমান লাইনের ভেতরে ক্রস অ্যাক্সিস বরাবর উপাদানগুলোকে সাজায়। stretch (ডিফল্ট) সব উপাদানকে কনটেইনারের পুরো উচ্চতা বা প্রস্থ পর্যন্ত টেনে লম্বা করে; center মাঝখান বরাবর সমান করে; flex-start শুরুর দিকে নেয়; flex-end শেষের দিকে নেয়; এবং baseline টেক্সটের বেসলাইন বা অক্ষরের নিচের দাগ বরাবর মেলায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* The Famous CSS Centering Formula */
.perfect-center-box {
  display: flex;
  justify-content: center;   /* Centers horizontally along main axis */
  align-items: center;       /* Centers vertically along cross axis */
  min-height: 240px;
}

/* Aligning text with different font sizes by their reading baseline */
.metric-display {
  display: flex;
  align-items: baseline;     /* Big number '42' aligns with small text 'users' */
}

.metric-number { font-size: 48px; font-weight: bold; }
.metric-label  { font-size: 16px; color: #64748b; }

/* Rendered Output:
   Item centers perfectly in both directions; metric text baselines align irrespective of font size.
*/`,
      caption: {
        en: 'align-items aligns items on the cross axis; pairing with justify-content gives perfect centering.',
        bn: 'align-items ক্রস অ্যাক্সিসে কাজ করে; justify-content-এর সাথে মিলিয়ে নিখুঁত কেন্দ্রবিন্দু পাওয়া যায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Multi-Line Flex: flex-wrap and align-content', bn: '৫. মাল্টি-লাইন ফ্লেক্স: flex-wrap ও align-content' } },
    {
      type: 'para',
      text: {
        en: 'By default, flex items shrink to squeeze onto a single line (flex-wrap: nowrap). Setting flex-wrap: wrap allows overflowing items to wrap onto subsequent lines. When multiple lines exist, align-content controls the distribution of spare space between the lines across the cross axis.',
        bn: 'ডিফল্টভাবে ফ্লেক্স আইটেম এক লাইনে এঁটে থাকার জন্য সংকুচিত হয় (flex-wrap: nowrap)। flex-wrap: wrap দিলে আইটেমগুলো উপচে না পড়ে স্বয়ংক্রিয়ভাবে নতুন লাইনে নিচে নেমে যায়। একাধিক লাইন তৈরি হলে তাদের মধ্যকার উল্লম্ব ব্যবধান align-content দিয়ে নিয়ন্ত্রণ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Responsive badge tag cloud */
.tag-cloud {
  display: flex;
  flex-wrap: wrap;           /* Wraps tags onto line 2 and 3 as screen narrows */
  gap: 8px;
  align-content: flex-start; /* Packs wrapped lines to the top without extra line gaps */
}

/* flex-flow shorthand: combines direction and wrap */
.card-grid-flex {
  display: flex;
  flex-flow: row wrap;       /* flex-direction: row + flex-wrap: wrap */
}

/* Rendered Output:
   Tags wrap naturally onto new lines when browser width shrinks, maintaining an 8px uniform gap.
*/`,
      caption: {
        en: 'flex-wrap: wrap prevents container blowouts by creating multi-line flex rows.',
        bn: 'flex-wrap: wrap স্ক্রিনের আকার ছোট হলে আইটেমগুলোকে নতুন লাইনে ভেঙে সুন্দর রাখে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Gap Properties: Clean Gutters Without Margin Leaks', bn: '৬. Gap প্রপার্টি: মার্জিন ঝামেলাহীন নিখুঁত ফাঁকা' } },
    {
      type: 'para',
      text: {
        en: 'The gap property (along with row-gap and column-gap) defines the space exclusively BETWEEN adjacent flex items. Unlike margins, gap never leaks onto the outer edges of the container, eliminating the need for negative margin parent hacks or :last-child margin resets.',
        bn: 'gap প্রপার্টি (এবং row-gap ও column-gap) শুধুমাত্র পাশাপাশি থাকা ফ্লেক্স আইটেমগুলোর মাঝের ফাঁকা জায়গা নির্ধারণ করে। মার্জিনের মতো এটি কখনো কনটেইনারের বাইরে উপচে পড়ে না, ফলে :last-child মার্জিন রিসেট করার কোনো ঝামেলা থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Modern Clean Spacing */
.button-toolbar {
  display: flex;
  gap: 12px;                 /* 12px space between buttons only */
}

/* Distinct row and column spacing for wrapped flex layouts */
.gallery-wrapper {
  display: flex;
  flex-wrap: wrap;
  row-gap: 24px;             /* 24px vertical space between wrapped lines */
  column-gap: 16px;          /* 16px horizontal space between items */
}

/* Shorthand syntax: gap: <row-gap> <column-gap> */
.gallery-shorthand {
  display: flex;
  flex-wrap: wrap;
  gap: 24px 16px;
}

/* Rendered Output:
   Items are separated by exact 16px horizontal and 24px vertical gutters without edge margins.
*/`,
      caption: {
        en: 'gap applies exclusively between items, creating clean gutters without border-leak bugs.',
        bn: 'gap শুধুমাত্র ভেতরের আইটেমের মাঝে ফাঁকা জায়গা তৈরি করে, বাইরের প্রান্তে ছড়ায় না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Item Growth: flex-grow and Free Space Allocation', bn: '৭. আইটেম প্রসারণ: flex-grow দিয়ে ফাঁকা জায়গা বণ্টন' } },
    {
      type: 'para',
      text: {
        en: 'flex-grow defines the ability for a flex item to grow if positive free space is available in the container. The value is a unitless proportion: if all items have flex-grow: 1, space is distributed equally; if one item has flex-grow: 2, it receives twice as much leftover space as items with flex-grow: 1.',
        bn: 'flex-grow নির্ধারণ করে কনটেইনারে অতিরিক্ত খালি জায়গা থাকলে একটি আইটেম কতটা বড় হতে পারবে। এটি একটি এককহীন অনুপাত: সব আইটেমে flex-grow: 1 থাকলে সবাই সমান বাড়তি জায়গা পায়; কোনো একটিতে flex-grow: 2 থাকলে সে অন্যদের চেয়ে দ্বিগুণ বাড়তি জায়গা নিজের করে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Search form with flexible input and fixed-size button */
.search-form {
  display: flex;
  width: 100%;
}

.search-input {
  flex-grow: 1;              /* Absorbs ALL remaining free horizontal space */
  padding: 8px 12px;
}

.search-submit-btn {
  flex-grow: 0;              /* Will NOT expand; stays at its intrinsic content width */
  padding: 8px 16px;
}

/* 2:1 ratio space distribution */
.col-main {
  flex-grow: 2;              /* Gets 2 shares of extra space */
}

.col-side {
  flex-grow: 1;              /* Gets 1 share of extra space */
}

/* Rendered Output:
   Search input stretches smoothly across all viewport widths while the submit button remains compact.
*/`,
      caption: {
        en: 'flex-grow allocates leftover space proportionally among competing flex items.',
        bn: 'flex-grow অতিরিক্ত খালি জায়গা অনুপাত অনুযায়ী আইটেমগুলোর মাঝে ভাগ করে দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Item Shrinkage: flex-shrink and min-width: 0 Safeguards', bn: '৮. আইটেম সংকোচন: flex-shrink ও min-width: 0 সুরক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'flex-shrink determines how much a flex item shrinks relative to the rest of the items when negative space exists (items exceed container size). Setting flex-shrink: 0 prevents an item from ever shrinking below its basis. Crucially, flex items default to min-width: auto; setting min-width: 0 prevents long text from breaking containers.',
        bn: 'flex-shrink নির্ধারণ করে জায়গা কম পড়লে একটি আইটেম অন্যদের তুলনায় কতটুকু ছোট বা সংকুচিত হবে। flex-shrink: 0 দিলে আইটেম কখনোই তার আসল আকারের চেয়ে ছোট হয় না। ফ্লেক্স আইটেমের ডিফল্ট min-width: auto থাকে; দীর্ঘ টেক্সট বা ইউআরএল যেন কনটেইনার ভেঙে না ফেলে সেজন্য min-width: 0 দেওয়া অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Icon that refuses to shrink or distort */
.chat-avatar {
  flex-shrink: 0;            /* Will NEVER squash, preserving its exact 48x48 circle */
  width: 48px;
  height: 48px;
  border-radius: 50%;
}

/* The min-width: 0 overflow defense */
.chat-content {
  flex-grow: 1;
  min-width: 0;              /* CRITICAL: Overrides min-width: auto, enabling text-overflow truncation */
}

.chat-message-preview {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;   /* Now truncates cleanly instead of bursting container */
}

/* Rendered Output:
   Avatar circle retains 48px shape; text preview truncates cleanly with '...' on narrow mobile screens.
*/`,
      caption: {
        en: 'flex-shrink: 0 protects icons from distortion; min-width: 0 enables text truncation.',
        bn: 'flex-shrink: 0 আইকন চ্যাপ্টা হওয়া রোধ করে; min-width: 0 টেক্সট ট্রাঙ্কেশন নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Item Base Size and Shorthand: flex-basis and flex: 1', bn: '৯. বেস সাইজ ও শর্টহ্যান্ড: flex-basis ও flex: 1' } },
    {
      type: 'para',
      text: {
        en: 'flex-basis defines the initial main-axis size of an item before free space is distributed. The flex shorthand combines flex-grow, flex-shrink, and flex-basis in that order. Common standards include flex: 1 (short for 1 1 0%, distributing equal columns) and flex: auto (1 1 auto, sizing by content).',
        bn: 'flex-basis ফাঁকা জায়গা বণ্টনের আগে মেইন অ্যাক্সিস বরাবর উপাদানের প্রাথমিক মাপ ঠিক করে। flex শর্টহ্যান্ডের মাধ্যমে ক্রমানুসারে flex-grow, flex-shrink এবং flex-basis একসাথে লেখা হয়। সর্বাধিক ব্যবহৃত রূপ হলো flex: 1 (যার অর্থ 1 1 0%, যা সমান কলাম বানায়) এবং flex: auto (1 1 auto, যা কন্টেন্টের মাপ অনুযায়ী চলে)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Equal-width 3-column card deck */
.card-row {
  display: flex;
  gap: 16px;
}

.card-row .card {
  /* flex: [flex-grow] [flex-shrink] [flex-basis] */
  flex: 1 1 0px;             /* All 3 cards get exactly identical widths regardless of content length */
}

/* Equivalent shorthand */
.card-row .card-alt {
  flex: 1;                   /* Standard convention for equal-share items */
}

/* Content-driven item that shrinks and grows naturally */
.flexible-badge {
  flex: auto;                /* Short for: 1 1 auto */
}

/* Fixed-size sidebar with fluid body */
.sidebar {
  flex: 0 0 280px;           /* Never grow, never shrink, always exactly 280px */
}

.main-content {
  flex: 1;                   /* Takes 100% of remaining viewport width */
}

/* Rendered Output:
   Sidebar locks to exactly 280px while main content expands to fill remaining screen space.
*/`,
      caption: {
        en: 'flex: 1 1 0px creates mathematically equal columns; flex: 0 0 280px locks fixed sidebars.',
        bn: 'flex: 1 1 0px নিখুঁত সমান কলাম বানায়; flex: 0 0 280px ফিক্সড সাইডবার তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Individual Item Overrides: align-self and order', bn: '১০. স্বতন্ত্র নিয়ন্ত্রণ: align-self ও order ওভাররাইড' } },
    {
      type: 'para',
      text: {
        en: 'align-self allows a single flex item to override the container’s align-items property for itself. The order property controls the visual rendering order of flex items without modifying the HTML DOM structure, accepting positive or negative integers (default 0).',
        bn: 'align-self কোনো একটি নির্দিষ্ট ফ্লেক্স আইটেমকে পুরো কন্টেইনারের align-items নিয়মের বাইরে গিয়ে নিজের মতো ক্রস-অ্যাক্সিস ঠিক করার ক্ষমতা দেয়। order প্রপার্টি কোনো HTML কোড না বদলে শুধুমাত্র CSS দিয়ে ভিজ্যুয়াল প্রদর্শনের ক্রম পরিবর্তন করতে পারে (ডিফল্ট মান ০)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Container aligns everything to center */
.flex-parent {
  display: flex;
  align-items: center;
  height: 200px;
}

/* One item overrides container alignment */
.item-bottom {
  align-self: flex-end;      /* Overrides container, pins only this item to bottom */
}

.item-stretch {
  align-self: stretch;       /* Stretches to full 200px height */
}

/* Visual reordering without modifying HTML */
.banner-badge {
  order: -1;                 /* Visually renders FIRST, even if placed last in HTML */
}

.banner-footer {
  order: 99;                 /* Visually renders LAST */
}

/* Rendered Output:
   Specific items align independently; badge jumps to the front of the line via order: -1.
*/`,
      caption: {
        en: 'align-self customizes individual cross-axis alignment; order changes visual sequence.',
        bn: 'align-self নির্দিষ্ট আইটেমের অ্যালাইনমেন্ট বদলায়; order প্রদর্শনের ক্রম পরিবর্তন করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-flex-ex1',
      kind: 'predict',
      topic: 'css: Flex direction axis',
      question: {
        en: 'When flex-direction is set to column, which axis does justify-content operate along?',
        bn: 'flex-direction: column সেট করা থাকলে justify-content কোন অ্যাক্সিসে কাজ করে?'
      },
      code: `/* flex-direction: column; */
/* justify-content: center; */`,
      answer: 'vertical',
      accept: ['vertical', 'vertical axis', 'y', 'y-axis'],
      hint: {
        en: 'flex-direction defines the main axis, and justify-content always controls the main axis.',
        bn: 'flex-direction মেইন অ্যাক্সিস ঠিক করে, আর justify-content সর্বদা মেইন অ্যাক্সিসেই কাজ করে।'
      },
      explanation: {
        en: 'flex-direction: column makes the vertical axis the main axis. Since justify-content always operates along the main axis, it controls vertical space distribution.',
        bn: 'flex-direction: column দিলে উল্লম্ব বা ভার্টিক্যাল অ্যাক্সিসটিই মেইন অ্যাক্সিস হয়। justify-content সর্বদা মেইন অ্যাক্সিসেই কাজ করে, তাই এটি উল্লম্বভাবে স্পেস বণ্টন করে।'
      }
    },
    {
      id: 'css-flex-ex2',
      kind: 'mcq',
      topic: 'css: Flex equal columns',
      question: {
        en: 'Which shorthand declaration makes three child cards share exactly equal widths in a row, ignoring varying inner text lengths?',
        bn: 'ভেতরের লেখার দৈর্ঘ্য ভিন্ন হওয়া সত্ত্বেও ৩টি কার্ডকে সারিতে নিখুঁত সমান প্রস্থ দিতে কোন শর্টহ্যান্ড ডিক্লারেশন ব্যবহৃত হয়?'
      },
      options: [
        { en: 'flex: 1 1 0px (or flex: 1)', bn: 'flex: 1 1 0px (বা flex: 1)' },
        { en: 'flex: auto', bn: 'flex: auto' },
        { en: 'flex-grow: 0', bn: 'flex-grow: 0' },
        { en: 'width: 33%', bn: 'width: 33%' }
      ],
      answer: 0,
      hint: {
        en: 'Setting flex-basis to 0px forces all items to grow from an equal zero baseline.',
        bn: 'flex-basis 0px দিলে সব উপাদান সমান শূন্য বেসলাইন থেকে সমভাবে বড় হয়।'
      },
      explanation: {
        en: 'flex: 1 (1 1 0px) gives all items a base size of 0 and an equal grow factor of 1, dividing all available container space equally regardless of text content.',
        bn: 'flex: 1 (1 1 0px) প্রতিটি আইটেমের বেস সাইজ ০ করে দেয় এবং গ্রো ফ্যাক্টর ১ রাখে, ফলে ভেতরের লেখার পরিমাণ যাই হোক না কেন সবাই সমান মাপের হয়।'
      }
    },
    {
      id: 'css-flex-ex3',
      kind: 'mcq',
      topic: 'css: Flexbox gap advantage',
      question: {
        en: 'What is the primary advantage of the gap property over traditional margins between flex items?',
        bn: 'ফ্লেক্স আইটেমে সাধারণ মার্জিনের চেয়ে gap প্রপার্টি ব্যবহারের মূল সুবিধা কী?'
      },
      options: [
        { en: 'gap applies exclusively between items without leaking onto container edges', bn: 'gap শুধুমাত্র আইটেমগুলোর মাঝে কাজ করে এবং কনটেইনারের বাইরে উপচে পড়ে না' },
        { en: 'gap only works in Internet Explorer', bn: 'gap কেবল ইন্টারনেট এক্সপ্লোরারে চলে' },
        { en: 'gap requires JavaScript to calculate', bn: 'gap হিসাব করতে জাভাস্ক্রিপ্ট দরকার হয়' },
        { en: 'gap automatically turns text bold', bn: 'gap টেক্সটকে স্বয়ংক্রিয়ভাবে বোল্ড করে' }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens to outer borders when using margin-right on children.',
        bn: 'margin-right দিলে শেষের উপাদানের বাইরে বাড়তি মার্জিন থেকে যায় কি না ভাবুন।'
      },
      explanation: {
        en: 'gap creates gutters exclusively between items. Unlike margins, it never adds unwanted spacing before the first item or after the last item.',
        bn: 'gap কেবল আইটেমগুলোর মাঝখানের অংশে ফাঁকা জায়গা তৈরি করে। মার্জিনের মতো প্রথমটির আগে বা শেষেরটির পরে কোনো বাড়তি জায়গা যোগ হয় না।'
      }
    }
  ],
  quiz: {
    id: 'css-flex-quiz',
    title: { en: 'Flexbox Architecture Quiz', bn: 'ফ্লেক্সবক্স আর্কিটেকচার কুইজ' },
    questions: [
      {
        id: 'flq1',
        kind: 'mcq',
        topic: 'css: Preventing icon shrinking',
        question: {
          en: 'How do you guarantee that an avatar icon in a flex row never squashes when container space becomes tight?',
          bn: 'জায়গা সংকুচিত হলে একটি ফ্লেক্স সারির ভেতর থাকা অবতার আইকনটি যেন কখনো চ্যাপ্টা বা ছোট না হয়ে যায় তা কীভাবে নিশ্চিত করবেন?'
        },
        options: [
          { en: 'flex-shrink: 0;', bn: 'flex-shrink: 0;' },
          { en: 'flex-grow: 1;', bn: 'flex-grow: 1;' },
          { en: 'align-content: stretch;', bn: 'align-content: stretch;' },
          { en: 'flex-direction: reverse;', bn: 'flex-direction: reverse;' }
        ],
        answer: 0,
        hint: {
          en: 'A shrink factor of 0 prevents reduction.',
          bn: 'সংকোচন বা শ্রিঙ্ক ফ্যাক্টর ০ রাখলে কোনো সংকোচন হয় না।'
        },
        explanation: {
          en: 'flex-shrink: 0 tells the browser that this item must never be compressed below its defined width and height, preserving icon dimensions.',
          bn: 'flex-shrink: 0 ব্রাউজারকে নির্দেশ দেয় যে জায়গা কম থাকলেও এই আইটেমটিকে কখনো তার আসল মাপের চেয়ে ছোট করা যাবে না।'
        }
      },
      {
        id: 'flq2',
        kind: 'mcq',
        topic: 'css: Align-self utility',
        question: {
          en: 'Which property allows a single flex item to override the container’s align-items rule?',
          bn: 'কোন প্রপার্টি দিয়ে একটি নির্দিষ্ট ফ্লেক্স আইটেম কনটেইনারের align-items নিয়ম অগ্রাহ্য করে নিজের অবস্থান ঠিক করতে পারে?'
        },
        options: [
          { en: 'align-self', bn: 'align-self' },
          { en: 'justify-self', bn: 'justify-self' },
          { en: 'order', bn: 'order' },
          { en: 'flex-wrap', bn: 'flex-wrap' }
        ],
        answer: 0,
        hint: {
          en: 'It aligns "itself".',
          bn: 'এটি "নিজেকে" আলাদাভাবে অ্যালাইন করে।'
        },
        explanation: {
          en: 'align-self is declared on the individual flex item to override the container’s align-items value along the cross axis.',
          bn: 'align-self সরাসরি নির্দিষ্ট ফ্লেক্স আইটেমে ঘোষণা করা হয় যাতে তা কনটেইনারের align-items অগ্রাহ্য করে নিজের মতো ক্রস-অ্যাক্সিসে বসতে পারে।'
        }
      },
      {
        id: 'flq3',
        kind: 'mcq',
        topic: 'css: Flex direction axis flip',
        question: {
          en: 'When flex-direction is changed from row to column, how do the axes rotate?',
          bn: 'flex-direction-এর মান row থেকে বদলে column করলে অ্যাক্সিসগুলো কীভাবে পরিবর্তিত হয়?'
        },
        options: [
          { en: 'The main axis becomes vertical and the cross axis becomes horizontal', bn: 'মেইন অ্যাক্সিস উল্লম্ব হয় এবং ক্রস অ্যাক্সিস অনুভূমিক হয়' },
          { en: 'Both main and cross axes become vertical simultaneously', bn: 'মেইন এবং ক্রস উভয় অ্যাক্সিসই একসাথে উল্লম্ব হয়ে যায়' },
          { en: 'The cross axis is deleted completely', bn: 'ক্রস অ্যাক্সিস সম্পূর্ণ মুছে যায়' },
          { en: 'justify-content stops functioning entirely', bn: 'justify-content আর কোনো কাজই করে না' }
        ],
        answer: 0,
        hint: {
          en: 'The main axis always follows the direction of flow.',
          bn: 'মেইন অ্যাক্সিস সর্বদা উপাদানের প্রবাহের দিক নির্দেশ করে।'
        },
        explanation: {
          en: 'flex-direction: column rotates the main axis to run vertically top to bottom, making the cross axis run horizontally left to right.',
          bn: 'flex-direction: column দিলে মেইন অ্যাক্সিস উপর থেকে নিচে উল্লম্বভাবে কাজ করে এবং ক্রস অ্যাক্সিস বাম থেকে ডানে অনুভূমিক হয়।'
        }
      },
      {
        id: 'flq4',
        kind: 'mcq',
        topic: 'css: Gap vs margin',
        question: {
          en: 'What advantage does the flexbox gap property provide over applying margins to flex items?',
          bn: 'ফ্লেক্স আইটেমে মার্জিন দেওয়ার চেয়ে ফ্লেক্সবক্সের gap প্রপার্টি ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          { en: 'It places space strictly between items without leaking to outer edges', bn: 'এটি কেবল আইটেমগুলোর মাঝখানে ফাঁক তৈরি করে, বাইরের প্রান্তে ছড়ায় না' },
          { en: 'It requires negative margin hacks to align correctly', bn: 'এটি সঠিকভাবে বসাতে নেগেটিভ মার্জিন হ্যাকের প্রয়োজন হয়' },
          { en: 'It doubles the size of every flex child element', bn: 'এটি প্রতিটি চাইল্ড উপাদানের আকার দ্বিগুণ করে' },
          { en: 'It forces all items to wrap onto separate lines', bn: 'এটি সব উপাদানকে আলাদা লাইনে ভাঙতে বাধ্য করে' }
        ],
        answer: 0,
        hint: {
          en: 'No outer edge margin leakage or first/last-child overrides needed.',
          bn: 'বাইরের প্রান্তে মার্জিন ছড়ায় না এবং first-child বাদ দেওয়ার ঝামেলা থাকে না।'
        },
        explanation: {
          en: 'gap applies gutters exclusively between neighboring flex items, eliminating the need for complex :last-child margin cancellations.',
          bn: 'gap শুধুমাত্র পাশাপাশি থাকা আইটেমগুলোর মাঝে ফাঁকা স্থান তৈরি করে, ফলে প্রান্তের মার্জিন বাদ দেওয়ার জটিলতা দূর হয়।'
        }
      }
    ]
  }
};
