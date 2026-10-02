import type { Lesson } from '../../../lib/types';

export const motionHallLesson: Lesson = {
  slug: 'css-motion',
  tech: 'css',
  title: {
    en: 'CSS Motion: 2D/3D Transforms, Transitions & Keyframe Animations',
    bn: 'CSS মোশন: ২ডি/৩ডি ট্রান্সফর্ম, ট্রানজিশন ও কীফ্রেম অ্যানিমেশন'
  },
  summary: {
    en: 'Master UI movement and visual physics across 10 structured topics. Understand 2D and 3D transforms, transition timing functions, @keyframes animation syntax, 60fps GPU acceleration, and clip-path filters.',
    bn: '১০টি সুসংগঠিত পয়েন্টে UI মোশন ও অ্যানিমেশন আয়ত্ত করুন। ২ডি ও ৩ডি ট্রান্সফর্ম, ট্রানজিশন টাইমিং, @keyframes অ্যানিমেশন সিনট্যাক্স, ৬০fps GPU অ্যাক্সিলারেশন এবং ক্লিপ-পাথ ফিল্টার শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'css-architecture',
    title: { en: 'The Architecture: layering, naming and the exit visa', bn: 'স্থাপত্য: স্তরায়ন, নামকরণ আর নির্গমন-ভিসা' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. CSS 2D Transforms: Translate, Rotate, Scale, and Skew', bn: '১. CSS ২ডি ট্রান্সফর্ম: ট্রান্সলেট, রোটেট, স্কেল ও স্কিউ' } },
    {
      type: 'para',
      text: {
        en: 'The transform property modifies the coordinate space of elements without disrupting the surrounding layout flow. 2D functions include translate(x, y) to shift position, rotate(deg) to spin clockwise, scale(x, y) to resize, and skew(x, y) to tilt along axes. transform-origin sets the pivot point (default: 50% 50%).',
        bn: 'transform প্রপার্টি আশেপাশের কোনো উপাদানকে বিরক্ত না করে কোনো উপাদানের আকার ও অবস্থান পরিবর্তন করে। ২ডি ফাংশনগুলোর মধ্যে রয়েছে translate(x, y) (স্থানান্তর), rotate(deg) (ঘূর্ণন), scale(x, y) (আকার বৃদ্ধি/হ্রাস) এবং skew(x, y) (তির্যক বা কোণা বাঁকা করা)। transform-origin ঘূর্ণনের কেন্দ্রবিন্দু নির্ধারণ করে (ডিফল্ট ৫০% ৫০%)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 2D Transform Functions */
.card-hover:hover {
  /* Lift card 6px upward and scale slightly by 2% */
  transform: translateY(-6px) scale(1.02);
  transform-origin: center bottom;
}

.icon-rotate:hover {
  /* Spin icon 45 degrees clockwise */
  transform: rotate(45deg);
}

.slanted-badge {
  /* Skew text horizontally by -10 degrees for energetic branding */
  transform: skewX(-10deg);
}

/* Rendered Output:
   Cards elevate smoothly on hover without altering neighboring layout positions.
*/`,
      caption: {
        en: '2D transforms modify rendering visually without triggering expensive DOM reflows.',
        bn: '২ডি ট্রান্সফর্ম DOM বিন্যাস নষ্ট না করেই মসৃণভাবে উপাদানকে স্থানান্তরিত করে।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'CSS Animation Performance Layers', bn: 'CSS অ্যানিমেশন পারফরম্যান্স স্তর' },
      svg: `<svg viewBox="0 0 660 180" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="Diagram showing slow layout and repaint pipeline vs fast GPU compositor pipeline"><g font-size="11" fill="currentColor"><rect x="20" y="20" width="280" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="160" y="45" text-anchor="middle" font-weight="bold" fill="currentColor">Main Thread (Laggy)</text><text x="40" y="75">1. Layout: width, height, top, left</text><text x="40" y="100">2. Paint: color, background, shadows</text><text x="40" y="125" font-size="10">Triggers costly CPU geometric recalculation</text><rect x="340" y="20" width="300" height="135" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="490" y="45" text-anchor="middle" font-weight="bold" fill="currentColor">GPU Compositor (Fast 60fps)</text><text x="360" y="75">1. transform: translate, scale, rotate</text><text x="360" y="100">2. opacity: 0.0 to 1.0</text><text x="360" y="125" font-size="10">Dedicated hardware layer &mdash; no layout shifts</text></g></svg>`,
      caption: {
        en: 'Transform and opacity run on dedicated GPU composite layers, guaranteeing smooth 60fps movement.',
        bn: 'ট্রান্সফর্ম এবং ওপাসিটি সরাসরি GPU-তে প্রসেস হয়, যা ৬০fps-এর অত্যন্ত মসৃণ অ্যানিমেশন নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. CSS 3D Transforms: Perspective, RotateX/Y, and Card Flips', bn: '২. CSS ৩ডি ট্রান্সফর্ম: পার্সপেক্টিভ, ৩ডি রোটেশন ও কার্ড ফ্লিপ' } },
    {
      type: 'para',
      text: {
        en: '3D transforms add depth along the Z-axis. Declaring perspective on a parent container establishes simulated distance from the user’s eyes. Functions like rotateX(), rotateY(), and rotateZ() flip elements in 3D space. Combined with transform-style: preserve-3d and backface-visibility: hidden, this enables realistic 3D card flips.',
        bn: '৩ডি ট্রান্সফর্ম Z-অ্যাক্সিস বরাবর গভীরতা তৈরি করে। প্যারেন্ট কন্টেইনারে perspective ঘোষণা করলে ব্যবহারকারীর চোখের থেকে ভার্চুয়াল দূরত্ব তৈরি হয়। rotateX(), rotateY() এবং rotateZ() ৩ডি স্থানে উপাদান ঘোরায়। transform-style: preserve-3d এবং backface-visibility: hidden-এর সাথে এটি চমৎকার ৩ডি কার্ড ফ্লিপ তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 3D Scene Container */
.flip-scene {
  perspective: 1000px;       /* Viewing distance in pixels */
  width: 300px;
  height: 200px;
}

.flip-card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d; /* Children exist in true 3D space */
  transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
}

.flip-scene:hover .flip-card {
  transform: rotateY(180deg);   /* Flip card over */
}

/* Front and Back Faces */
.card-face {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;  /* Hide reverse side when facing away */
  border-radius: 8px;
}

.card-back {
  transform: rotateY(180deg);   /* Pre-rotated back face */
  background: #1e293b;
  color: #ffffff;
}

/* Rendered Output:
   Card smoothly spins 180 degrees horizontally, revealing its back face in true 3D perspective.
*/`,
      caption: {
        en: 'perspective combined with preserve-3d produces authentic physical rotation depth.',
        bn: 'perspective এবং preserve-3d মিলে বাস্তবসম্মত ত্রিমাত্রিক ঘূর্ণন আবহ তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. CSS Transitions: Smooth State Changes', bn: '৩. CSS ট্রানজিশন: মসৃণ স্টেট রূপান্তর' } },
    {
      type: 'para',
      text: {
        en: 'CSS transitions animate changes between two states (e.g. default to :hover). The transition shorthand includes four values: property (which property animates), duration (how long in seconds or milliseconds), timing-function (acceleration curve), and delay (wait time before starting).',
        bn: 'CSS ট্রানজিশন দুটি অবস্থার মধ্যে মসৃণ রূপান্তর তৈরি করে (যেমন সাধারণ অবস্থা থেকে :hover)। এর শর্টহ্যান্ডে চারটি মান থাকে: property (কোন প্রপার্টিটি অ্যানিমেট হবে), duration (কত সেকেন্ড বা মিলিসেকেন্ড চলবে), timing-function (গতির ত্বরণ বক্ররেখা) এবং delay (শুরু হওয়ার আগের অপেক্ষার সময়)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Explicit transition declarations */
.btn-primary {
  background-color: #2563eb;
  color: #ffffff;
  transform: translateY(0);

  /* transition: [property] [duration] [timing-function] [delay]; */
  transition-property: background-color, transform, box-shadow;
  transition-duration: 250ms;
  transition-timing-function: ease-out;
  transition-delay: 0s;
}

.btn-primary:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
}

/* Concise shorthand */
.btn-secondary {
  transition: all 200ms ease;
}

/* Rendered Output:
   Button background darkens and floats up 2px over 250ms upon mouse hover, without abrupt snapping.
*/`,
      caption: {
        en: 'Transitions interpolate property values smoothly over time between user states.',
        bn: 'ট্রানজিশন ব্যবহারকারীর ইন্টারঅ্যাকশনের সময় মানগুলোকে মসৃণভাবে পরিবর্তন করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Timing Functions: Linear, Ease, and Custom Cubic-Bezier', bn: '৪. টাইমিং ফাংশন: লিনিয়ার, ইজ ও কিউবিক-বেজিয়ার' } },
    {
      type: 'para',
      text: {
        en: 'Timing functions determine the acceleration and deceleration curve of animations. linear runs at constant speed; ease (default) starts slow, speeds up, and slows down; ease-in starts slow; ease-out ends gently; and cubic-bezier(x1, y1, x2, y2) defines custom physics curves like bouncy springs.',
        bn: 'টাইমিং ফাংশন অ্যানিমেশনের গতি কখন কমবে বা বাড়বে তা নিয়ন্ত্রণ করে। linear সমবেগে চলে; ease (ডিফল্ট) ধীরে শুরু হয়ে দ্রুত হয় এবং ধীরে থামে; ease-in শুরুতে ধীর হয়; ease-out শেষে ধীরে থামে; এবং cubic-bezier(x1, y1, x2, y2) দিয়ে স্প্রিং বা বাউন্সির মতো কাস্টম পদার্থবিদ্যা তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Standard timing curves */
.linear-meter   { transition-timing-function: linear; }
.smooth-dialog  { transition-timing-function: ease-out; }

/* Custom spring / bounce curve using cubic-bezier:
   cubic-bezier(P1_x, P1_y, P2_x, P2_y)
*/
.spring-dropdown {
  /* Values > 1.0 produce an intentional overshoot/bounce effect */
  transition: transform 350ms cubic-bezier(0.34, 1.56, 0.64, 1);
}

/* Stepped animations for sprite sheets or retro clocks */
.pixel-loader {
  transition-timing-function: steps(8, end);
}

/* Rendered Output:
   Dropdown snaps down with an organic physical spring bounce at the end of the transition.
*/`,
      caption: {
        en: 'cubic-bezier curves imbue digital user interfaces with natural physical momentum.',
        bn: 'cubic-bezier ইন্টারফেসে বাস্তব জীবনের স্প্রিং বা গতির আবহ এনে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. CSS Keyframe Animations: The @keyframes Engine', bn: '৫. CSS কীফ্রেম অ্যানিমেশন: @keyframes ইঞ্জিন' } },
    {
      type: 'para',
      text: {
        en: 'While transitions require state triggers (like hover), CSS keyframe animations run autonomously without user interaction. The @keyframes rule defines named stages of an animation using percentage checkpoints (0% through 100%) or from / to keywords.',
        bn: 'ট্রানজিশনে ব্যবহারকারীর ক্লিক বা হোভার লাগলেও কীফ্রেম অ্যানিমেশন নিজে থেকেই স্বয়ংক্রিয়ভাবে চলে। @keyframes রুলের মাধ্যমে শতকরা হার (০% থেকে ১০০%) অথবা from / to কিওয়ার্ড ব্যবহার করে অ্যানিমেশনের বিভিন্ন ধাপ নির্ধারণ করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Define keyframe sequence */
@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(24px); /* Start invisible and 24px below */
  }
  60% {
    opacity: 1;
    transform: translateY(-4px);  /* Slight overshoot */
  }
  100% {
    opacity: 1;
    transform: translateY(0);     /* Settle into resting place */
  }
}

/* Apply animation to entrance card */
.hero-card {
  animation-name: slideInUp;
  animation-duration: 600ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards; /* Maintain final 100% styles after ending */
}

/* Rendered Output:
   Card slides smoothly upward into view and fades in immediately on page load.
*/`,
      caption: {
        en: '@keyframes defines discrete stages of motion across an animation timeline.',
        bn: '@keyframes সময়ের সাথে সাথে উপাদানের পরিবর্তনের বিভিন্ন পর্যায় নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Animation Properties: Duration, Iteration, Direction, and Fill-Mode', bn: '৬. অ্যানিমেশন প্রপার্টি: ডুরেশন, ইটারেশন, ডিরেকশন ও ফিল-মোড' } },
    {
      type: 'para',
      text: {
        en: 'Full animation control relies on six core properties: animation-name, animation-duration, animation-iteration-count (e.g. infinite), animation-direction (normal, reverse, alternate), animation-fill-mode (forwards locks end state; backwards applies initial frame during delay), and animation-play-state (running, paused).',
        bn: 'অ্যানিমেশন পূর্ণ নিয়ন্ত্রণের জন্য প্রধান প্রপার্টিগুলো হলো: animation-name, animation-duration, animation-iteration-count (যেমন infinite বা অনন্তবার), animation-direction (alternate দিয়ে যাওয়া-আসা), animation-fill-mode (forwards শেষ ফ্রেম ধরে রাখে) এবং animation-play-state (অ্যানিমেশন থামানো বা চালানো)।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Infinite breathing notification dot */
@keyframes pulseDot {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0.7);
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px rgba(239, 68, 68, 0);
  }
  100% {
    transform: scale(0.95);
    box-shadow: 0 0 0 0 rgba(239, 68, 68, 0);
  }
}

.live-indicator {
  width: 12px;
  height: 12px;
  background-color: #ef4444;
  border-radius: 50%;
  animation: pulseDot 2s infinite cubic-bezier(0.4, 0, 0.6, 1);
}

/* Pausing animation on hover */
.live-indicator:hover {
  animation-play-state: paused;
}

/* Rendered Output:
   Red dot rhythmically pulses with radiating wave shadows; pauses when user points mouse.
*/`,
      caption: {
        en: 'animation shorthand enables complex loops; animation-play-state: paused grants pause control.',
        bn: 'shorthand দিয়ে লুপ চালানো যায় এবং animation-play-state: paused দিয়ে থামানো যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Hardware Acceleration and 60fps Performance Discipline', bn: '৭. হার্ডওয়্যার অ্যাক্সিলারেশন ও ৬০fps পারফরম্যান্স নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'Browsers process CSS on three pipelines: Layout (reflow), Paint (rasterize), and Composite. Animating top, left, width, or margin forces the CPU to recalculate page layout for every frame, dropping frame rates. Animating transform and opacity offloads work directly to the GPU Compositor thread, guaranteeing smooth 60fps animations.',
        bn: 'ব্রাউজার তিনটি ধাপে CSS প্রদর্শন করে: লেআউট, পেইন্ট এবং কম্পোজিট। top, left, width বা margin অ্যানিমেট করলে CPU প্রতি ফ্রেমে পুরো পেজ পুনরায় হিসাব করে, ফলে ল্যাগ তৈরি হয়। কিন্তু transform এবং opacity অ্যানিমেট করলে সরাসরি GPU কাজ করে এবং মসৃণ ৬০fps নিশ্চিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* ❌ BAD PRACTICE: Triggers Layout & Paint reflow on every frame (janky) */
.box-slow {
  transition: left 300ms ease, width 300ms ease;
}

/* ✅ GOOD PRACTICE: GPU-composited only (silky smooth 60fps) */
.box-fast {
  transition: transform 300ms ease, opacity 300ms ease;
  will-change: transform;    /* Hints browser to create dedicated GPU compositing layer */
}

/* Rendered Output:
   GPU-accelerated transforms run smoothly without stuttering mobile CPU threads.
*/`,
      caption: {
        en: 'Always animate transform and opacity instead of geometric dimensions like width and top.',
        bn: 'width ও top-এর বদলে সর্বদা transform ও opacity অ্যানিমেট করে সর্বোচ্চ পারফরম্যান্স পান।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Practical UI Patterns: Loading Spinners and Skeleton Shimmers', bn: '৮. বাস্তব UI প্যাটার্ন: লোডিং স্পিনার ও স্কেলিটন লোডার' } },
    {
      type: 'para',
      text: {
        en: 'Every web application requires visual feedback during network operations. A CSS loading spinner uses border with one transparent or colored side, spinning continuously with rotate(360deg). Skeleton screens use animated linear-gradient shimmers across placeholder boxes.',
        bn: 'প্রতিটি ওয়েব অ্যাপে নেটওয়ার্ক লোডিংয়ের সময় ব্যবহারকারীকে অগ্রগতি বোঝাতে হয়। CSS লোডিং স্পিনারে একটি গোলাকার বর্ডারের একপাশ রঙিন রেখে rotate(360deg) দিয়ে ঘোরানো হয়। স্কেলিটন স্ক্রিনে গ্রেডিয়েন্টের সাহায্যে ঝিলিক বা শিমার তৈরি করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Pure CSS Circular Loading Spinner */
@keyframes spinRing {
  to { transform: rotate(360deg); }
}

.spinner {
  width: 32px;
  height: 32px;
  border: 3px solid #e2e8f0;
  border-top-color: #2563eb; /* Blue highlight wedge */
  border-radius: 50%;
  animation: spinRing 800ms linear infinite;
}

/* 2. Skeleton Loading Shimmer */
@keyframes shimmerWave {
  100% { transform: translateX(100%); }
}

.skeleton-box {
  position: relative;
  overflow: hidden;
  background-color: #e2e8f0;
  height: 20px;
  border-radius: 4px;
}

.skeleton-box::after {
  content: "";
  position: absolute;
  inset: 0;
  transform: translateX(-100%);
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.6), transparent);
  animation: shimmerWave 1.5s infinite;
}

/* Rendered Output:
   Spinner rotates smoothly; skeleton box flashes a subtle light wave indicating loading state.
*/`,
      caption: {
        en: 'CSS spinners and shimmers run entirely off the main JS thread without blocking interaction.',
        bn: 'CSS স্পিনার ও শিমার মূল জাভাস্ক্রিপ্ট থ্রেডকে ব্লক না করেই স্বাধীনভাবে চলে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Tooltips and Interactive Micro-Interactions', bn: '৯. ইন্টারঅ্যাকটিভ টুলটিপ ও মাইক্রো-ইন্টারঅ্যাকশন' } },
    {
      type: 'para',
      text: {
        en: 'Tooltips display helpful contextual labels when users hover over icons or buttons. Modern tooltips are authored using the data-tooltip attribute on the parent element, styled through the ::after pseudo-element, and smoothly animated using opacity and transform.',
        bn: 'আইকন বা বাটনের ওপর মাউস নিলে সহায়ক টেক্সট দেখানোর জন্য টুলটিপ ব্যবহৃত হয়। আধুনিক পদ্ধতিতে প্যারেন্টে data-tooltip অ্যাট্রিবিউট রেখে ::after সিউডো-এলিমেন্টের মাধ্যমে কোনো বাড়তি এইচটিএমএল ট্যাগ ছাড়াই মসৃণভাবে টুলটিপ তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* Modern CSS Data-Attribute Tooltip */
[data-tooltip] {
  position: relative;
  cursor: pointer;
}

[data-tooltip]::after {
  content: attr(data-tooltip); /* Pull text directly from HTML attribute */
  position: absolute;
  bottom: 125%;                /* Position above target */
  left: 50%;
  transform: translateX(-50%) translateY(4px);
  background-color: #0f172a;
  color: #ffffff;
  padding: 6px 10px;
  border-radius: 6px;
  font-size: 12px;
  white-space: nowrap;
  pointer-events: none;        /* Prevent interfering with cursor clicks */
  opacity: 0;
  transition: opacity 200ms ease, transform 200ms ease;
  z-index: 100;
}

/* Reveal tooltip on hover */
[data-tooltip]:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}

/* Rendered Output:
   Hovering over an element smoothly fades in a dark contextual speech balloon above it.
*/`,
      caption: {
        en: 'attr() generates dynamic tooltip copy directly from HTML data attributes.',
        bn: 'attr() এইচটিএমএল ডেটা অ্যাট্রিবিউট থেকে সরাসরি টেক্সট এনে ডায়নামিক টুলটিপ দেখায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. CSS Image Styling, Filters, and Masking with clip-path', bn: '১০. CSS ইমেজ ফিল্টার ও clip-path মাস্কিং' } },
    {
      type: 'para',
      text: {
        en: 'CSS provides advanced graphic manipulation properties. object-fit (cover, contain) controls how images fit their box frames. filter applies Photoshop-like effects (blur(), grayscale(), brightness(), drop-shadow()). clip-path cuts elements into geometric shapes like circles, polygons, or angled slant banners.',
        bn: 'CSS সরাসরি ফটোশপের মতো গ্রাফিক ইফেক্ট প্রদান করে। object-fit (cover, contain) ফ্রেমের ভেতরে ছবির প্রদর্শন নিয়ন্ত্রণ করে। filter দিয়ে blur(), grayscale(), brightness() ইত্যাদি ইফেক্ট দেওয়া যায়। clip-path দিয়ে উপাদানকে বৃত্ত, বহুভুজ বা তির্যক ব্যানারে কেটে ফেলা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      code: `/* 1. Controlling Avatar aspect ratio without distortion */
.avatar-img {
  width: 80px;
  height: 80px;
  object-fit: cover;         /* Fills 80x80 frame without squishing portrait proportions */
  border-radius: 50%;
}

/* 2. Interactive CSS Filter on image hover */
.gallery-thumbnail {
  filter: grayscale(100%) brightness(0.9);
  transition: filter 300ms ease;
}

.gallery-thumbnail:hover {
  filter: grayscale(0%) brightness(1.0); /* Full vibrant color on hover */
}

/* 3. Angular Geometric Banner with clip-path polygon */
.slant-hero-banner {
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  background: #2563eb;
  padding: 80px 24px;
}

/* Rendered Output:
   Gallery thumbnails transition from black-and-white to full color; hero section features an edgy diagonal bottom cut.
*/`,
      caption: {
        en: 'clip-path and CSS filters create bold visual branding without heavy image assets.',
        bn: 'clip-path এবং CSS ফিল্টার বাড়তি ছবি ছাড়াই আধুনিক জ্যামিতিক ডিজাইন তৈরি করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'css-motion-ex1',
      kind: 'predict',
      topic: 'css: GPU performance properties',
      question: {
        en: 'Which two CSS properties can be animated strictly on the GPU compositor thread without triggering layout reflows?',
        bn: 'কোন দুটি CSS প্রপার্টি লেআউট রিফ্লো তৈরি না করে সরাসরি GPU কম্পোজিটর থ্রেডে ৬০fps-এ অ্যানিমেট করা যায়?'
      },
      code: `/* GPU accelerated properties */
/* Property 1: transform */
/* Property 2: _________ */`,
      answer: 'opacity',
      accept: ['opacity', 'transform and opacity', 'transform, opacity'],
      hint: {
        en: 'One changes coordinate rendering; the other changes transparency.',
        bn: 'একটি স্থানাঙ্ক পরিবর্তন করে; অন্যটি স্বচ্ছতা বা ট্রান্সপারেন্সি পরিবর্তন করে।'
      },
      explanation: {
        en: 'transform and opacity are the only two CSS properties guaranteed to animate entirely on the GPU Compositor thread, avoiding CPU-heavy Layout and Paint pipeline steps.',
        bn: 'transform এবং opacity এই দুটি প্রপার্টি ব্রাউজারের ভারী লেআউট ও পেইন্ট ধাপ এড়িয়ে সরাসরি GPU কম্পোজিটরে কাজ করে, ফলে অ্যানিমেশন সবচেয়ে মসৃণ হয়।'
      }
    },
    {
      id: 'css-motion-ex2',
      kind: 'mcq',
      topic: 'css: Animation fill mode',
      question: {
        en: 'Which animation-fill-mode value retains the styles applied in the 100% keyframe after the animation finishes playing?',
        bn: 'অ্যানিমেশন শেষ হওয়ার পর ১০০% কীফ্রেমের স্টাইলটি স্থায়ীভাবে ধরে রাখতে কোন animation-fill-mode মান ব্যবহার করা হয়?'
      },
      options: [
        { en: 'forwards', bn: 'forwards' },
        { en: 'backwards', bn: 'backwards' },
        { en: 'none', bn: 'none' },
        { en: 'infinite', bn: 'infinite' }
      ],
      answer: 0,
      hint: {
        en: 'It preserves styles "forward" into the future.',
        bn: 'এটি স্টাইলকে সামনের দিকে স্থায়ী বা "ফরওয়ার্ড" রাখে।'
      },
      explanation: {
        en: 'animation-fill-mode: forwards instructs the element to retain the computed values calculated by the final keyframe after the animation ends, preventing it from snapping back.',
        bn: 'animation-fill-mode: forwards ব্রাউজারকে নির্দেশ দেয় যেন অ্যানিমেশন শেষ হলেও উপাদানটি শুরুর অবস্থায় ফিরে না গিয়ে শেষ ফ্রেমের রূপেই স্থির থাকে।'
      }
    },
    {
      id: 'css-motion-ex3',
      kind: 'mcq',
      topic: 'css: 3D backface visibility',
      question: {
        en: 'In a 3D card flip animation, what does backface-visibility: hidden achieve?',
        bn: '৩ডি কার্ড ফ্লিপ অ্যানিমেশনে backface-visibility: hidden কী কাজ সম্পন্ন করে?'
      },
      options: [
        { en: 'It hides the reverse side of the card when it is rotated to face away from the user', bn: 'কার্ডটি ১৮০ ডিগ্রি ঘুরে ব্যবহারকারীর উল্টোদিকে চলে গেলে তার পেছনের পিঠকে অদৃশ্য করে রাখে' },
        { en: 'It makes the front face transparent', bn: 'এটি সামনের পিঠকে স্বচ্ছ করে দেয়' },
        { en: 'It disables all 3D effects', bn: 'এটি সকল ৩ডি ইফেক্ট বন্ধ করে দেয়' },
        { en: 'It deletes the card from the DOM', bn: 'এটি DOM থেকে কার্ডটিকে মুছে ফেলে' }
      ],
      answer: 0,
      hint: {
        en: 'It hides the face when looking at its back.',
        bn: 'পেছন দিক থেকে দেখার সময় মুখটিকে আড়াল করে।'
      },
      explanation: {
        en: 'backface-visibility: hidden ensures that when a card face rotates and points away from the screen, it becomes transparent so the opposite face can be seen.',
        bn: 'backface-visibility: hidden নিশ্চিত করে যে কার্ডটি উল্টোদিকে ঘুরে গেলে তার পেছনের অংশটি অদৃশ্য থাকে, যার ফলে অপর পিঠের কনটেন্ট পরিষ্কার দেখা যায়।'
      }
    }
  ],
  quiz: {
    id: 'css-motion-quiz',
    title: { en: 'Motion & Animation Quiz', bn: 'মোশন ও অ্যানিমেশন কুইজ' },
    questions: [
      {
        id: 'mq1',
        kind: 'mcq',
        topic: 'css: Card flip perspective',
        question: {
          en: 'Where should the perspective property be declared when building a 3D transform scene?',
          bn: '৩ডি ট্রান্সফর্ম সিন তৈরি করার সময় perspective প্রপার্টিটি কোথায় ঘোষণা করতে হয়?'
        },
        options: [
          { en: 'On the parent / scene container element', bn: 'প্যারেন্ট বা সিন কন্টেইনার উপাদানে' },
          { en: 'Directly on the child text element', bn: 'সরাসরি চাইল্ড টেক্সট উপাদানে' },
          { en: 'On the ::after pseudo-element', bn: '::after সিউডো-এলিমেন্টে' },
          { en: 'Inside the @keyframes rule only', bn: 'শুধুমাত্র @keyframes রুলের ভেতরে' }
        ],
        answer: 0,
        hint: {
          en: 'Perspective defines the viewer’s distance to the scene.',
          bn: 'পার্সপেক্টিভ পুরো দৃশ্যপটের সাথে দর্শকের দূরত্ব নির্ধারণ করে।'
        },
        explanation: {
          en: 'perspective is declared on the parent container element to establish a common 3D vanishing point and depth coordinates for all nested child items.',
          bn: 'perspective প্যারেন্ট কন্টেইনারে ঘোষণা করা হয় যাতে তার ভেতরের সব চাইল্ড উপাদানের জন্য একটি সাধারণ ত্রিমাত্রিক ভিউয়িং পয়েন্ট বা দূরত্ব নির্ধারিত হয়।'
        }
      },
      {
        id: 'mq2',
        kind: 'mcq',
        topic: 'css: Transition vs Animation',
        question: {
          en: 'What is the primary operational difference between CSS transitions and CSS @keyframes animations?',
          bn: 'CSS ট্রানজিশন এবং CSS @keyframes অ্যানিমেশনের মধ্যে প্রধান কার্যকর পার্থক্য কী?'
        },
        options: [
          { en: 'Transitions require a state change trigger (like :hover), while @keyframes can run automatically and loop infinitely', bn: 'ট্রানজিশনে কোনো স্টেট পরিবর্তন (যেমন :hover) প্রয়োজন হয়, আর @keyframes নিজে থেকেই স্বয়ংক্রিয়ভাবে ও অনন্তবার চলতে পারে' },
          { en: 'Transitions can only change colors', bn: 'ট্রানজিশন শুধু রং পরিবর্তন করতে পারে' },
          { en: '@keyframes cannot use transform', bn: '@keyframes-এ transform ব্যবহার করা যায় না' },
          { en: 'There is no difference', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'One needs a trigger, the other can run on page load.',
          bn: 'একটির ট্রিগার দরকার হয়, অন্যটি পেজ লোডের সাথে সাথেই শুরু হতে পারে।'
        },
        explanation: {
          en: 'Transitions interpolate between two explicit states when a trigger occurs. @keyframes animations can execute continuously, follow multi-stage timelines, and loop infinitely without interaction.',
          bn: 'ট্রানজিশন কোনো ইভেন্টের সাপেক্ষে দুটি অবস্থার মধ্যে রূপান্তর ঘটায়। আর @keyframes কোনো ইন্টারঅ্যাকশন ছাড়াই নিজে নিজে মাল্টি-স্টেপ টাইমলাইনে অনন্তকাল চলতে পারে।'
        }
      },
      {
        id: 'mq3',
        kind: 'mcq',
        topic: 'css: GPU accelerated properties',
        question: {
          en: 'Which pair of CSS properties run directly on the GPU compositor without triggering layout reflow or repaint?',
          bn: 'কোন দুটি CSS প্রোপার্টি লেআউট রিফ্লো বা রি-পেইন্ট না ঘটিয়ে সরাসরি GPU কম্পোজিটরে অত্যন্ত দ্রুত চলে?'
        },
        options: [
          { en: 'transform and opacity', bn: 'transform এবং opacity' },
          { en: 'top and left', bn: 'top এবং left' },
          { en: 'width and height', bn: 'width এবং height' },
          { en: 'margin and padding', bn: 'margin এবং padding' }
        ],
        answer: 0,
        hint: {
          en: 'Hardware-accelerated compositor properties for silky 60fps animations.',
          bn: '৬০fps মসৃণ অ্যানিমেশনের জন্য হার্ডওয়্যার-অ্যাক্সিলারেটেড কম্পোজিটর প্রপার্টি।'
        },
        explanation: {
          en: 'transform and opacity are handled exclusively by the GPU compositor layer, bypassing layout recalculations and guaranteeing smooth 60 frames per second.',
          bn: 'transform এবং opacity সরাসরি গ্রাফিক্স প্রসেসর বা GPU-তে প্রক্রিয়া হয়, ফলে লেআউট পরিবর্তনের ধাক্কা ছাড়াই ৬০ ফ্রেম/সেকেন্ডের মসৃণ অ্যানিমেশন পাওয়া যায়।'
        }
      },
      {
        id: 'mq4',
        kind: 'mcq',
        topic: 'css: Animation fill mode',
        question: {
          en: 'What does animation-fill-mode: forwards do when an animation finishes its final cycle?',
          bn: 'অ্যানিমেশন শেষ হওয়ার পর animation-fill-mode: forwards কী ভূমিকা পালন করে?'
        },
        options: [
          { en: 'Retains the computed styles defined by the last keyframe instead of snapping back', bn: 'শুরুতে ফিরে যাওয়ার বদলে শেষ কীফ্রেমের স্টাইলটি ধরে রাখে' },
          { en: 'Restarts the animation backwards from the beginning', bn: 'শুরু থেকে অ্যানিমেশনটি পেছনের দিকে আবার চালু করে' },
          { en: 'Hides the element from the screen completely', bn: 'উপাদানটিকে পর্দা থেকে সম্পূর্ণ লুকিয়ে ফেলে' },
          { en: 'Freezes the entire browser tab execution', bn: 'ব্রাউজার ট্যাবের এক্সিকিউশন ফ্রিজ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Preserves the final frame styling.',
          bn: 'শেষ ফ্রেমের স্টাইলটি স্থায়ীভাবে বজায় রাখে।'
        },
        explanation: {
          en: 'animation-fill-mode: forwards instructs the browser to retain the exact styles applied by the 100% keyframe after the animation completes.',
          bn: 'animation-fill-mode: forwards নির্দেশ দেয় যাতে অ্যানিমেশন শেষ হয়ে গেলে উপাদানের রূপ ১০০% কীফ্রেমের শেষ অবস্থায় স্থির থাকে।'
        }
      }
    ]
  }
};
