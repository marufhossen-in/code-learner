import type { Lesson } from '../../../lib/types';

export const TheDoorThatHoldsLesson: Lesson = {
  slug: 'the-door-that-holds',
  tech: 'bootstrap',
  title: {
    en: 'Modals, Offcanvas Drawers & Backdrop Management',
    bn: 'মোডাল, অফক্যানভাস ড্রয়ার ও ব্যাকড্রপ ম্যানেজমেন্ট'
  },
  summary: {
    en: 'Overlay dialogs and slide-out drawers require sophisticated DOM coordinate orchestration and focus management. When an overlay appears, the underlying webpage must be shielded from background interaction while keyboard navigation stays trapped within the dialog. Bootstrap 5 handles this through a coordinated triad: the modal dialog container, a backdrop overlay, and body scroll compensation. When locking background scroll with overflow hidden, removing the browser vertical scrollbar abruptly shifts the entire layout sideways. Bootstrap prevents this visual jitter by calculating the exact 15-pixel scrollbar difference between a 1024-pixel window and 1009-pixel document width, injecting matching padding. This lesson explores modal structural anatomy, static backdrop configurations, keyboard focus management, and offcanvas slide-out drawers.',
    bn: 'ওভারলে ডায়ালগ এবং সাইড ড্রয়ার পরিচালনার জন্য বিশেষ স্ক্রিন সমন্বয় ও কিবোর্ড ফোকাস নিয়ন্ত্রণের প্রয়োজন হয়। যখন একটি পপআপ সামনে আসে, তখন পেছনের সাইটে স্ক্রলিং বন্ধ করতে হয় এবং কিবোর্ড ফোকাস ডায়ালগের ভেতরেই ধরে রাখতে হয়। বুটস্ট্র্যাপ ৫ তিনটি জিনিসের মাধ্যমে এটি সমাধান করে: মোডাল কন্টেইনার, ব্যাকড্রপ পর্দা এবং বডি স্ক্রল সমন্বয়। পেছনের স্ক্রল বন্ধ করার সময় ব্রাউজারের স্ক্রলবার হঠাৎ উধাও হয়ে গেলে পুরো পেজটি ডানে লাফ দেয়। বুটস্ট্র্যাপ এই ঝাঁকুনি ঠেকাতে ১০২৪ পিক্সেল স্ক্রিন এবং ১০০৯ পিক্সেল ডকুমেন্টের মধ্যবর্তী ঠিক ১৫ পিক্সেল স্ক্রলবারের মাপ বের করে সমপরিমাণ প্যাডিং বসিয়ে দেয়। এই পাঠে মোডাল গঠন, স্ট্যাটিক ব্যাকড্রপ এবং অফক্যানভাস সাইডবার বিশদভাবে শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Modal Overlays and Screen State Control',
        bn: 'মূল ধারণা: মোডাল ওভারলে ও স্ক্রিন স্টেট নিয়ন্ত্রণ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you display critical user flows like checkout confirmations or login prompts, modals focus user attention by placing content on an elevated visual plane. However, without careful engineering, opening a modal creates severe user experience flaws: background documents scroll underneath, focus leaks out into hidden links, and disappearing scrollbars cause unpleasant layout jitter. Bootstrap provides a robust overlay system solving all three problems out of the box.',
        bn: 'পেমেন্ট নিশ্চিতকরণ বা লগইনের মতো গুরুত্বপূর্ণ কাজের জন্য মোডাল ডায়ালগ ব্যবহারকারীর মনোযোগ আকর্ষণ করে। কিন্তু সঠিক কোডিং না থাকলে মোডাল খোলার সময় নানাবিধ বিপত্তি ঘটে: পেছনের সাইট নিজে থেকেই স্ক্রল হতে থাকে, কিবোর্ড ফোকাস মোডালের বাইরে চলে যায় এবং স্ক্রলবার হারিয়ে পেজে ঝাঁকুনি দেখা দেয়। বুটস্ট্র্যাপ এই তিনটি সমস্যারই স্বয়ংক্রিয় ও নির্ভুল সমাধান প্রদান করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Modal Dialog (.modal, .modal-dialog)',
          def: {
            en: 'An elevated overlay window positioned above the webpage to prompt user confirmation or gather transactional inputs',
            bn: 'একটি পপআপ উইন্ডো যা পেজের উপরে ভেসে উঠে ব্যবহারকারীর কাছ থেকে জরুরি তথ্য বা সম্মতি গ্রহণ করে'
          }
        },
        {
          term: 'Static Backdrop (data-bs-backdrop="static")',
          def: {
            en: 'A modal configuration where clicking outside on the backdrop does not dismiss the dialog, preventing accidental data loss in forms',
            bn: 'একটি মোডাল সেটিং যেখানে বাইরে ক্লিক করলেও মোডাল বন্ধ হয় না, ফলে ফর্মের তথ্য ভুলবশত হারিয়ে যাওয়া থেকে বাঁচে'
          }
        },
        {
          term: 'Scrollbar Compensation',
          def: {
            en: 'The practice of injecting padding-right on the body matching the hidden scrollbar width to prevent page layout shifting',
            bn: 'স্ক্রলবার লুকানোর সময় পুরো পেজ যাতে লাফ না দেয় সেজন্য সমপরিমাণ ডানপাশের প্যাডিং যোগ করার কৌশল'
          }
        },
        {
          term: 'Offcanvas Component (.offcanvas)',
          def: {
            en: 'A hidden side-panel drawer that slides into the viewport from the start, end, top, or bottom for mobile menus and shopping carts',
            bn: 'একটি সাইড ড্রয়ার যা স্ক্রিনের পাশ বা উপর-নিচ থেকে ভেসে আসে, যা মোবাইল মেনু ও কার্টের জন্য দারুণ উপযোগী'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'modal-anatomy-table',
      text: {
        en: 'Anatomy of a Bootstrap Modal',
        bn: 'বুটস্ট্র্যাপ মোডালের অভ্যন্তরীণ গঠন'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Structural Roles of Elements Inside a Bootstrap Modal',
        bn: 'বুটস্ট্র্যাপ মোডাল তৈরির জন্য প্রয়োজনীয় উপাদান ও ক্লাসসমূহ'
      },
      head: [
        { en: 'Class Selector', bn: 'ক্লাস সিলেক্টর' },
        { en: 'Structural Role', bn: 'কাঠামোগত ভূমিকা' },
        { en: 'Customization Options', bn: 'কাস্টমাইজেশনের উপায়' }
      ],
      rows: [
        [
          { en: '.modal', bn: '.modal' },
          { en: 'Top-level fixed wrapper handling background scrolling and backdrop visibility', bn: 'সর্বোচ্চ স্তরের কন্টেইনার যা ব্যাকড্রপ ও পেছনের স্ক্রল নিয়ন্ত্রণ করে' },
          { en: 'Add .fade for smooth CSS opacity transitions', bn: 'মসৃণ ফেড ট্রানজিশনের জন্য .fade ক্লাস যোগ করুন' }
        ],
        [
          { en: '.modal-dialog', bn: '.modal-dialog' },
          { en: 'Calculates viewport margins, vertical alignment, and maximum box widths', bn: 'ডায়ালগের মার্জিন, উল্লম্ব অবস্থান এবং সর্বোচ্চ প্রস্থ ঠিক করে' },
          { en: '.modal-dialog-centered, .modal-dialog-scrollable, .modal-lg, .modal-xl', bn: '.modal-dialog-centered, .modal-dialog-scrollable, .modal-lg' }
        ],
        [
          { en: '.modal-content', bn: '.modal-content' },
          { en: 'Applies visual background colors, borders, and box shadows to the dialog box', bn: 'ডায়ালগ বক্সের ব্যাকগ্রাউন্ড রঙ, বর্ডার এবং ড্রপ শ্যাডো যুক্ত করে' },
          { en: 'Holds .modal-header, .modal-body, and .modal-footer child containers', bn: 'হেডার, বডি এবং ফুটারের মতো ভেতরের অংশগুলোকে ধরে রাখে' }
        ],
        [
          { en: '.modal-header', bn: '.modal-header' },
          { en: 'Contains the dialog title and the dismissible close button', bn: 'মোডালের শিরোনাম এবং বন্ধ করার ক্লোজ বাটন ধারণ করে' },
          { en: 'Must contain an accessible .btn-close with aria-label="Close"', bn: 'অবশ্যই এতে aria-label="Close" যুক্ত ক্লোজ বাটন থাকতে হবে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Modal Scrollbar Compensation Arithmetic',
        bn: 'চালনাযোগ্য সিমুলেশন: মোডাল স্ক্রলবার সমন্বয় হিসাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the scrollbar width deduction and padding compensation when locking page scroll for an open modal dialog:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি মোডাল খোলার পর পেজের স্ক্রলবার লুকানোর সাথে সাথে কত পিক্সেল প্যাডিং যোগ করতে হবে তা হিসাব করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'bs-scrollbar-sim',
      lang: 'javascript',
      code: `// Bootstrap Modal Scrollbar Compensation Engine
const windowWidth = 1024; // Browser full window innerWidth in pixels
const clientWidth = 1009; // Document body clientWidth excluding scrollbar

const scrollbarWidth = windowWidth - clientWidth;
const appliedPadding = scrollbarWidth;

console.log('Browser full window inner width in pixels:', windowWidth);
// -> Browser full window inner width in pixels: 1024

console.log('Document client width excluding vertical scrollbar:', clientWidth);
// -> Document client width excluding vertical scrollbar: 1009

console.log('Measured scrollbar width requiring compensation in pixels:', scrollbarWidth);
// -> Measured scrollbar width requiring compensation in pixels: 15

console.log('Padding-right injected onto body to eliminate layout shift:', appliedPadding);
// -> Padding-right injected onto body to eliminate layout shift: 15`,
      caption: {
        en: 'Figure 1: On a 1024-pixel viewport with 1009-pixel body width, hiding the scrollbar injects exactly 15 pixels of padding-right to eliminate page jumping',
        bn: 'চিত্র ১: ১০২৪ পিক্সেল স্ক্রিনে ১০০৯ পিক্সেল বডি প্রস্থ থাকলে স্ক্রলবার লুকানোর সময় ঠিক ১৫ পিক্সেল প্যাডিং যোগ করে পেজের ঝাঁকুনি রোধ করা হয়'
      }
    },
    {
      type: 'heading',
      id: 'offcanvas-drawers-guide',
      text: {
        en: 'Slide-Out Panels: The Offcanvas Component',
        bn: 'স্লাইড-আউট প্যানেল: অফক্যানভাস কম্পোনেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Introduced natively in Bootstrap 5, the Offcanvas component provides hidden side-panels that slide into view from any viewport edge. Designed originally for responsive mobile navigation bars, offcanvas panels are also widely adopted for e-commerce shopping carts, filter panels, and notification centers without requiring custom CSS transforms:',
        bn: 'বুটস্ট্র্যাপ ৫ সংস্করণে যুক্ত হওয়া অফক্যানভাস (Offcanvas) কম্পোনেন্ট স্ক্রিনের যেকোনো পাশ থেকে ভেসে আসা সাইড প্যানেল তৈরি করে। মোবাইলের রেসপনসিভ মেনুর পাশাপাশি অনলাইন কেনাকাটার কার্ট, ফিল্টার বক্স এবং নোটিফিকেশন প্যানেলের জন্য এটি ব্যাপকভাবে ব্যবহৃত হয়:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '.offcanvas-start / .offcanvas-end',
          def: {
            en: 'Classes specifying whether the drawer slides in from the left (.offcanvas-start) or right (.offcanvas-end) side of the screen',
            bn: 'প্যানেলটি স্ক্রিনের বাম পাশ (.offcanvas-start) না ডান পাশ (.offcanvas-end) থেকে আসবে তা নির্ধারণকারী ক্লাস'
          }
        },
        {
          term: 'Offcanvas Backdrop & Scroll Options',
          def: {
            en: 'Attributes data-bs-scroll="true" and data-bs-backdrop="false" allowing users to interact with background content while the drawer is visible',
            bn: 'অ্যাট্রিবিউট যার মাধ্যমে সাইড ড্রয়ার খোলা রেখেও পেছনের ওয়েবসাইটে স্ক্রল ও কাজ করার সুবিধা রাখা যায়'
          }
        },
        {
          term: 'Focus Trapping & Escape Dismissal',
          def: {
            en: 'Both Modals and Offcanvas trap keyboard focus within the open panel and close immediately upon pressing the Escape key',
            bn: 'মোডাল ও অফক্যানভাস উভয়ই ফোকাস ভেতরে আটকে রাখে এবং Escape কি চাপামাত্র সাথে সাথে বন্ধ হয়ে যায়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'bs-scrollbar-calc-ex',
      kind: 'mcq',
      topic: 'Calculating scrollbar compensation padding',
      question: {
        en: 'If a browser window inner width is 1024 pixels and the document client width is 1009 pixels, what padding-right must Bootstrap inject onto the body when opening a modal?',
        bn: 'ব্রাউজার স্ক্রিন ১০২৪ পিক্সেল এবং পেজের বডি ১০০৯ পিক্সেল হলে মোডাল খোলার সময় বুটস্ট্র্যাপ ডানে কত পিক্সেল প্যাডিং যোগ করবে?'
      },
      options: [
        {
          en: '15 pixels (1024 - 1009)',
          bn: '১৫ পিক্সেল (১০২৪ - ১০০৯)'
        },
        {
          en: '50 pixels',
          bn: '৫০ পিক্সেল'
        },
        {
          en: '0 pixels',
          bn: '০ পিক্সেল'
        },
        {
          en: '100 pixels',
          bn: '১০০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Subtract 1009 from 1024.',
        bn: '১০২৪ থেকে ১০০৯ বিয়োগ করুন।'
      },
      explanation: {
        en: 'The 15-pixel difference represents the vertical scrollbar width. Injecting 15px padding-right prevents background layout jumping.',
        bn: '১০২৪ ও ১০০৯ এর পার্থক্য হলো ১৫ পিক্সেল স্ক্রলবার; ১৫ পিক্সেল প্যাডিং দিলে পেজের লেখা ডানদিকে লাফায় না।'
      }
    },
    {
      id: 'bs-static-backdrop-ex',
      kind: 'mcq',
      topic: 'Preventing accidental dismissal with static backdrops',
      question: {
        en: 'When constructing a payment or critical multi-step form inside a modal, why should you declare data-bs-backdrop="static"?',
        bn: 'মোডালের ভেতরে পেমেন্ট বা জরুরি ফর্ম থাকলে কেন data-bs-backdrop="static" ব্যবহার করা উচিত?'
      },
      options: [
        {
          en: 'It prevents the modal from closing when the user clicks outside on the dark backdrop, preventing accidental form data loss',
          bn: 'বাইরের কালো পর্দায় ভুলবশত ক্লিক লাগলেও এটি মোডাল বন্ধ হতে দেয় না, ফলে ফর্মের মূল্যবান ডেটা নষ্ট হয় না'
        },
        {
          en: 'It locks the user computer permanently',
          bn: 'এটি ব্যবহারকারীর কম্পিউটার চিরতরে লক করে দেয়'
        },
        {
          en: 'It converts the modal background into a static image',
          bn: 'এটি মোডালের ব্যাকগ্রাউন্ডকে স্থির ছবিতে রূপান্তর করে'
        },
        {
          en: 'It doubles the font size of the header',
          bn: 'এটি হেডারের লেখার আকার দ্বিগুণ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Static backdrops prevent accidental dismissal on outside clicks.',
        bn: 'বাইরে ক্লিকে ভুলবশত মোডাল বন্ধ না হওয়ার সুবিধার কথা ভাবুন।'
      },
      explanation: {
        en: 'Static backdrops require explicit user action (clicking Cancel or Close), safeguarding unsubmitted inputs against accidental clicks.',
        bn: 'স্ট্যাটিক ব্যাকড্রপ থাকলে ব্যবহারকারী সরাসরি ক্লোজ বাটনে ক্লিক না করা পর্যন্ত মোডাল খোলাই থাকে।'
      }
    },
    {
      id: 'bs-offcanvas-end-ex',
      kind: 'mcq',
      topic: 'Choosing offcanvas direction classes',
      question: {
        en: 'Which class configures an offcanvas drawer to slide into view from the right-hand side of the screen, typical for shopping cart previews?',
        bn: 'কোন ক্লাসটি অফক্যানভাস ড্রয়ারকে স্ক্রিনের ডান পাশ থেকে স্লাইড করিয়ে আনে, যা শপিং কার্টের জন্য বহুল ব্যবহৃত?'
      },
      options: [
        {
          en: '.offcanvas-end',
          bn: '.offcanvas-end'
        },
        {
          en: '.offcanvas-start',
          bn: '.offcanvas-start'
        },
        {
          en: '.offcanvas-top',
          bn: '.offcanvas-top'
        },
        {
          en: '.offcanvas-bottom',
          bn: '.offcanvas-bottom'
        }
      ],
      answer: 0,
      hint: {
        en: 'In LTR layouts, end corresponds to the right side.',
        bn: 'ডান দিকের জন্য end ক্লাসের কথা ভাবুন।'
      },
      explanation: {
        en: 'Bootstrap uses directional terms: .offcanvas-start is left, and .offcanvas-end is right in standard left-to-right writing directions.',
        bn: 'বুটস্ট্র্যাপে বামের জন্য start এবং ডানের জন্য end ক্লাস ব্যবহার করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-door-that-holds',
    title: {
      en: 'Bootstrap Modals, Offcanvas & Backdrops Quiz',
      bn: 'বুটস্ট্র্যাপ মোডাল, অফক্যানভাস ও ব্যাকড্রপ কুইজ'
    },
    questions: [
      {
        id: 'q-bs-modal-centered',
        kind: 'mcq',
        topic: 'Vertically centering a modal on screen',
        question: {
          en: 'Which class must be added to .modal-dialog to align the modal box vertically in the exact center of the screen viewport?',
          bn: 'মোডাল বক্সটিকে স্ক্রিনের ঠিক মাঝখানে উল্লম্বভাবে সাজাতে .modal-dialog-এ কোন ক্লাসটি যোগ করতে হয়?'
        },
        options: [
          {
            en: '.modal-dialog-centered',
            bn: '.modal-dialog-centered'
          },
          {
            en: '.modal-middle',
            bn: '.modal-middle'
          },
          {
            en: '.align-center-modal',
            bn: '.align-center-modal'
          },
          {
            en: '.vertical-center',
            bn: '.vertical-center'
          }
        ],
        answer: 0,
        hint: {
          en: 'modal-dialog-centered centers the dialog vertically.',
          bn: 'modal-dialog-centered ক্লাসের কথা ভাবুন।'
        },
        explanation: {
          en: 'Adding .modal-dialog-centered uses flexbox alignment to position the dialog in the vertical and horizontal center of the viewport.',
          bn: '.modal-dialog-centered ক্লাসটি সিএসএস ফ্লেক্সবক্স দিয়ে মোডালকে একদম স্ক্রিনের কেন্দ্রে বসায়।'
        }
      },
      {
        id: 'q-bs-scrollable-modal',
        kind: 'mcq',
        topic: 'Managing long content with .modal-dialog-scrollable',
        question: {
          en: 'When a modal contains extensive terms and conditions text, why is adding .modal-dialog-scrollable preferable to letting the page scroll?',
          bn: 'মোডালের ভেতর দীর্ঘ লেখা থাকলে পেজ স্ক্রল করার চেয়ে কেন .modal-dialog-scrollable ব্যবহার করা উত্তম?'
        },
        options: [
          {
            en: 'It constrains scrolling exclusively inside the .modal-body, keeping the header title and footer action buttons permanently visible on screen',
            bn: 'এটি স্ক্রলিং কেবল .modal-body-র ভেতর সীমাবদ্ধ রাখে, ফলে হেডার এবং ফুটারের বোতামগুলো সবসময় পর্দায় দৃশ্যমান থাকে'
          },
          {
            en: 'It deletes half of the text to shorten the agreement',
            bn: 'এটি চুক্তি ছোট করতে অর্ধেক লেখা নিজে থেকেই মুছে দেয়'
          },
          {
            en: 'It accelerates internet scroll speed by 10 times',
            bn: 'এটি স্ক্রল করার গতি ১০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: 'It turns the modal text into an audio podcast',
            bn: 'এটি লেখাকে অডিও পডকাস্টে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Scrollable body keeps header and footer buttons pinned.',
          bn: 'হেডার ও ফুটার স্থির রেখে কেবল বডি স্ক্রল করার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'A scrollable dialog keeps important action buttons (like "Accept" and "Decline") pinned on screen while allowing internal body scrolling.',
          bn: 'এতে সম্মতি বা বাতিলের বোতামগুলো সবসময় চোখের সামনে থাকে, আর ব্যবহারকারী ভেতরের লেখা স্ক্রল করে পড়তে পারেন।'
        }
      },
      {
        id: 'q-bs-focus-trap-restore',
        kind: 'mcq',
        topic: 'Accessible focus restoration upon modal dismissal',
        question: {
          en: 'When a user presses Escape or clicks Close to dismiss an open modal, where does Bootstrap return the keyboard focus?',
          bn: 'ব্যবহারকারী Escape বা Close চেপে মোডাল বন্ধ করলে বুটস্ট্র্যাপ কিবোর্ড ফোকাস কোথায় ফিরিয়ে দেয়?'
        },
        options: [
          {
            en: 'Back to the exact element or trigger button that originally launched the modal dialog',
            bn: 'ঠিক যে বোতামটিতে ক্লিক করে মোডালটি খোলা হয়েছিল সেখানেই'
          },
          {
            en: 'To the top of the browser window body tag',
            bn: 'ব্রাউজার পেজের একদম শুরুতে'
          },
          {
            en: 'To the search bar on google.com',
            bn: 'গুগলের সার্চ বারে'
          },
          {
            en: 'Focus is permanently deleted',
            bn: 'ফোকাস পুরোপুরি মুছে ফেলা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Focus returns to the opener button.',
          bn: 'যে বোতাম চেপে মোডাল খোলা হয়েছিল সেখানে ফোকাস ফেরার কথা ভাবুন।'
        },
        explanation: {
          en: 'Bootstrap tracks the active trigger element before opening and restores focus upon dismissal, satisfying WCAG focus management criteria.',
          bn: 'বুটস্ট্র্যাপ আগের বোতামটি মনে রাখে এবং মোডাল বন্ধ হলে সেখানেই ফোকাস ফেরত পাঠিয়ে কিবোর্ড ব্যবহারকারীদের পথ হারানো ঠেকায়।'
        }
      },
      {
        id: 'q-bs-offcanvas-body-scroll',
        kind: 'mcq',
        topic: 'Enabling background scrolling with data-bs-scroll="true"',
        question: {
          en: 'What occurs when you configure an offcanvas drawer with data-bs-scroll="true"?',
          bn: 'অফক্যানভাস ড্রয়ারে data-bs-scroll="true" দিলে কী পরিবর্তন ঘটে?'
        },
        options: [
          {
            en: 'The background webpage body remains scrollable while the offcanvas drawer is visible on screen',
            bn: 'সাইড ড্রয়ার খোলা থাকা অবস্থাতেও পেছনের মূল ওয়েবসাইট স্ক্রল করা যায়'
          },
          {
            en: 'The computer mouse wheel is disabled completely',
            bn: 'মাউসের চাকা পুরোপুরি অকেজো হয়ে যায়'
          },
          {
            en: 'The website automatically scrolls to the bottom of the page',
            bn: 'ওয়েবসাইট নিজে থেকেই পেজের একদম নিচে চলে যায়'
          },
          {
            en: 'The offcanvas drawer rotates 180 degrees upside down',
            bn: 'অফক্যানভাস ড্রয়ারটি ১৮০ ডিগ্রি উল্টো হয়ে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Background scrolling stays enabled.',
          bn: 'পেছনের পেজ স্ক্রল করার সুবিধা বজায় থাকার কথা ভাবুন।'
        },
        explanation: {
          en: 'By default, offcanvas locks body scrolling. Specifying data-bs-scroll="true" keeps the underlying document scrollable.',
          bn: 'স্বাভাবিকভাবে অফক্যানভাস পেছনের স্ক্রল আটকে দেয়, কিন্তু data-bs-scroll="true" দিলে পেছনের সাইট অবাধে স্ক্রল করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-form-and-the-validation-ledger',
    tech: 'bootstrap',
    title: {
      en: 'Accessible Forms, Floating Labels & HTML5 Validation',
      bn: 'অ্যাক্সেসিবল ফর্ম, ফ্লোটিং লেবেল ও এইচটিএমএল-৫ ভ্যালিডেশন'
    }
  }
};
