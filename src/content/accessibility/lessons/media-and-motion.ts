import type { Lesson } from '../../../lib/types';

export const MediaAndMotionLesson: Lesson = {
  slug: 'media-and-motion',
  tech: 'accessibility',
  title: {
    en: 'Captions, Transcripts, Motion & Vestibular Safety',
    bn: 'ক্যাপশন, ট্রান্সক্রিপ্ট, মোশন ও ভেস্টিবুলার নিরাপত্তা'
  },
  summary: {
    en: 'Multimedia experiences must accommodate visitors with auditory, cognitive, and vestibular conditions. WCAG Success Criterion 1.2.2 requires synchronized closed captions for all prerecorded video, transcribing spoken dialogue alongside essential sound effects and speaker IDs. Criterion 1.4.2 mandates that audio playing automatically for more than 3 seconds must provide an immediate pause or volume control to avoid drowning out screen reader synthesis. Under Criterion 2.3.1, interfaces must never flash more than 3 times in any 1-second period to prevent triggering epileptic seizures. In this lesson, you will inspect WebVTT caption tracks, analyze flash frequency calculations where a 5-Hertz animation violates safety limits by 2 excess flashes, and implement CSS prefers-reduced-motion media queries to protect users with vestibular balance disorders.',
    bn: 'মাল্টিমিডিয়া কন্টেন্ট এমনভাবে তৈরি করতে হবে যাতে বধির, স্বল্পশ্রবণ এবং ভেস্টিবুলার ভারসাম্যহীনতায় আক্রান্ত মানুষ নিরাপদে তা উপভোগ করতে পারেন। ডব্লিউসিএজি নিয়ম ১.২.২ অনুযায়ী ভিডিওতে কথার সাথে সাথে সাউন্ড ইফেক্ট ও বক্তার নামসহ সিনক্রোনাইজড ক্লোজড ক্যাপশন থাকা আবশ্যক। ১.৪.২ নিয়ম অনুযায়ী ৩ সেকেন্ডের বেশি সময় ধরে চলা অটোপ্লে অডিওতে সাথে সাথে বন্ধ করার নিয়ন্ত্রণ থাকতে হবে যাতে স্ক্রিন রিডারের কথা ঢাকা না পড়ে। ২.৩.১ নিয়ম অনুসারে কোনো অ্যানিমেশন ১ সেকেন্ডে ৩ বারের বেশি ফ্ল্যাশ করতে পারবে না, অন্যথায় মৃগীরোগ বা এপিলেপসি সিজার হতে পারে। এই পাঠে ওয়েবভিটিটি (WebVTT) ক্যাপশন ট্র্যাক, ফ্ল্যাশ ফ্রিকোয়েন্সি হিসেব (যেখানে ৫ হার্টজ অ্যানিমেশন ২ বার অতিরিক্ত ফ্ল্যাশ করে নিয়ম ভাঙে) এবং সিএসএস prefers-reduced-motion ব্যবহার করে ভারসাম্যহীনতার সুরক্ষা নিশ্চিত করা শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Media Inclusivity and Sensory Protection',
        bn: 'মূল ধারণা: মিডিয়া অন্তর্ভুক্তি ও সংবেদনশীল সুরক্ষা'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you author multimedia for the web, visual video and spoken audio communicate crucial information that must be translated across alternative sensory modes. Deaf users require synchronized closed captions, while blind visitors require audio descriptions or transcripts. Furthermore, unrestrained animations and rapid strobing can induce intense physical nausea, dizziness, or even life-threatening epileptic seizures in sensitive visitors.',
        bn: 'আপনি যখন ওয়েবের জন্য মাল্টিমিডিয়া তৈরি করেন, তখন ভিডিও ও অডিওর তথ্য বিভিন্ন বিকল্প মাধ্যমে পৌঁছানোর ব্যবস্থা করতে হয়। বধির মানুষের জন্য ক্লোজড ক্যাপশন প্রয়োজন, আর দৃষ্টিহীন মানুষের জন্য অডিও বিবরণ বা টেক্সট ট্রান্সক্রিপ্ট দরকার। উপরন্তু অনিয়ন্ত্রিত অ্যানিমেশন এবং দ্রুত ঝলকানি সংবেদনশীল মানুষদের মধ্যে বমিভাব, মাথা ঘোরা বা এমনকি প্রাণঘাতী মৃগীরোগের খিঁচুনি ডেকে আনতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Closed Captions (CC)',
          def: {
            en: 'Synchronized text tracks conveying spoken dialogue along with meaningful sound effects and speaker identifications for deaf audiences',
            bn: 'সমলয় টেক্সট যা কথার পাশাপাশি গুরুত্বপূর্ণ শব্দ এবং বক্তার পরিচয় বধির দর্শকদের জন্য স্ক্রিনে প্রদর্শন করে'
          }
        },
        {
          term: 'Vestibular Disorders',
          def: {
            en: 'Inner ear conditions where excessive motion, parallax scrolling, or scaling animations trigger severe vertigo, dizziness, and nausea',
            bn: 'কানের ভেতরের ভারসাম্যের সমস্যা যেখানে অতিরিক্ত নড়াচড়া বা প্যারালাক্স স্ক্রলিং দেখলে মাথা ঘোরা ও তীব্র অস্বস্তি শুরু হয়'
          }
        },
        {
          term: 'Three Flashes Threshold (WCAG 2.3.1)',
          def: {
            en: 'The strict safety threshold prohibiting visual content from flashing more than 3 times in any 1-second interval to prevent photic seizures',
            bn: 'একটি কঠোর নিরাপত্তা সীমা যেখানে ১ সেকেন্ডের মধ্যে ৩ বারের বেশি আলোর ঝলকানি দেখানো সম্পূর্ণ নিষিদ্ধ'
          }
        },
        {
          term: 'prefers-reduced-motion',
          def: {
            en: 'A CSS media query detecting whether the user has requested the operating system to minimize non-essential animations and motion',
            bn: 'একটি সিএসএস মিডিয়া কোয়েরি যা অপারেটিং সিস্টেমের নির্দেশে অপ্রয়োজনীয় নড়াচড়া বা অ্যানিমেশন কমিয়ে দেয়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'captions-vs-subtitles-table',
      text: {
        en: 'Closed Captions vs Subtitles: Key Architectural Differences',
        bn: 'ক্লোজড ক্যাপশন বনাম সাবটাইটেল: মূল কাঠামোগত পার্থক্য'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Functional Distinction Between Subtitles and Accessibility Captions',
        bn: 'সাবটাইটেল এবং অ্যাক্সেসিবিলিটি ক্লোজড ক্যাপশনের কাজের পার্থক্য'
      },
      head: [
        { en: 'Dimension', bn: 'বৈশিষ্ট্য' },
        { en: 'Standard Subtitles', bn: 'সাধারণ সাবটাইটেল' },
        { en: 'Closed Captions (WCAG 1.2.2)', bn: 'ক্লোজড ক্যাপশন (ডব্লিউসিএজি ১.২.২)' }
      ],
      rows: [
        [
          { en: 'Target Audience', bn: 'উদ্দিষ্ট দর্শক' },
          { en: 'Sighted viewers who can hear audio but do not understand the spoken language', bn: 'যেসব দর্শক শুনতে পান কিন্তু বিদেশি ভাষা বোঝেন না' },
          { en: 'Deaf or hard-of-hearing users who cannot perceive any acoustic cues', bn: 'বধির বা স্বল্পশ্রবণ মানুষ যারা কোনো শব্দ শুনতে পান না' }
        ],
        [
          { en: 'Sound Effects (SFX)', bn: 'সাউন্ড ইফেক্ট' },
          { en: 'Omitted; assumes the viewer can hear footsteps, door knocks, and thunder', bn: 'থাকে না; ধরে নেওয়া হয় দর্শক মেঘের গর্জন বা দরজার শব্দ শুনছেন' },
          { en: 'Explicitly transcribed in brackets, e.g., [doorbell chimes], [thunder rumbles]', bn: 'বন্ধনীতে স্পষ্ট লেখা থাকে, যেমন [কলিংবেলের শব্দ], [বজ্রপাত]' }
        ],
        [
          { en: 'Speaker Identification', bn: 'বক্তার নাম' },
          { en: 'Rarely included unless multiple rapid speakers overlap offscreen', bn: 'খুব একটা থাকে না বললেই চলে' },
          { en: 'Always prefixed when the speaker changes or speaks from offscreen, e.g., [DR. EMILY]:', bn: 'বক্তা বদলালে বা পর্দার বাইরে থেকে কথা বললে সবসময় নাম উল্লেখ থাকে' }
        ],
        [
          { en: 'Implementation Tag', bn: 'এইচটিএমএল প্রয়োগ' },
          { en: '<track kind="subtitles" srclang="es" src="sub.vtt">', bn: '<track kind="subtitles" srclang="es" src="sub.vtt">' },
          { en: '<track kind="captions" srclang="en" src="cap.vtt" default>', bn: '<track kind="captions" srclang="en" src="cap.vtt" default>' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Flashing Rate Seizure Threshold Verification',
        bn: 'চালনাযোগ্য সিমুলেশন: ফ্ল্যাশ ফ্রিকোয়েন্সি খিঁচুনি সুরক্ষা যাচাই'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script evaluates the flash frequency of an animated UI banner against the WCAG 2.3.1 safety limit of 3 flashes per 1 second:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ১ সেকেন্ডে সর্বোচ্চ ৩ বার ফ্ল্যাশের সুরক্ষা নীতিমালার সাথে একটি অ্যানিমেটেড ব্যানারের তুলনা করে নিরাপত্তা যাচাই করে:'
      }
    },
    {
      type: 'code',
      id: 'a11y-flash-threshold-sim',
      lang: 'javascript',
      code: `// WCAG 2.3.1 Seizure Safety Flash Frequency Validator
const maxSafeFlashesPerSec = 3;
const animatedBannerFrequency = 5; // Banner strobing at 5 Hertz

const isSafe = animatedBannerFrequency <= maxSafeFlashesPerSec;
const excessFlashes = animatedBannerFrequency - maxSafeFlashesPerSec;

console.log('WCAG maximum safe flash threshold per 1 second:', maxSafeFlashesPerSec);
// -> WCAG maximum safe flash threshold per 1 second: 3

console.log('Candidate banner flashing rate in Hertz:', animatedBannerFrequency);
// -> Candidate banner flashing rate in Hertz: 5

console.log('Does candidate banner pass seizure safety check?', isSafe);
// -> Does candidate banner pass seizure safety check? false

console.log('Excess flashes per second violating WCAG 2.3.1:', excessFlashes);
// -> Excess flashes per second violating WCAG 2.3.1: 2`,
      caption: {
        en: 'Figure 1: An animation strobing at 5 Hertz exceeds the 3 flashes per second threshold by 2 excess flashes, posing an unacceptable seizure risk',
        bn: 'চিত্র ১: ৫ হার্টজের একটি অ্যানিমেশন প্রতি সেকেন্ডে ৩ বারের সীমা ভেঙে ২ বার অতিরিক্ত ফ্ল্যাশ করে, যা মারাত্মক মৃগীরোগের ঝুঁকি তৈরি করে'
      }
    },
    {
      type: 'heading',
      id: 'vestibular-motion-css',
      text: {
        en: 'Respecting Vestibular Needs: prefers-reduced-motion',
        bn: 'ভেস্টিবুলার সচেতনতা: prefers-reduced-motion সিএসএস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large-scale parallax motion, zoom transitions, and floating 3D elements can trigger motion sickness in users with inner-ear balance disorders. Operating systems allow users to check a "Reduce motion" box in system accessibility preferences. Web authors must detect this preference using CSS media queries and replace aggressive movements with gentle opacity fades.',
        bn: 'পর্দায় বিশাল প্যারালাক্স নড়াচড়া, হঠাৎ জুম বা থ্রিডি ভাসমান উপাদান দেখলে কানের ভারসাম্যের সমস্যায় আক্রান্ত ব্যক্তিদের মাথা ঘোরা বা বমিভাব হতে পারে। সব অপারেটিং সিস্টেমেই ব্যবহারকারী "Reduce motion" নির্বাচন করে রাখতে পারেন। ডেভেলপারদের উচিত সিএসএস মিডিয়া কোয়েরি দিয়ে এটি শনাক্ত করে উগ্র অ্যানিমেশনের বদলে শান্ত ফেড ট্রানজিশন ব্যবহার করা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'WCAG 1.4.2 Audio Control',
          def: {
            en: 'Any audio that plays automatically for more than 3 seconds must provide a mechanism to pause, stop, or adjust volume independently',
            bn: 'স্বয়ংক্রিয়ভাবে ৩ সেকেন্ডের বেশি বাজা অডিওতে অবশ্যই থামানো বা আলাদা ভলিউম কমানোর বাটন থাকতে হবে'
          }
        },
        {
          term: 'Full Audio Transcript',
          def: {
            en: 'A comprehensive written transcript including spoken dialogue and environmental sound effects, enabling deaf-blind users to consume podcasts via braille',
            bn: 'পূর্ণাঙ্গ লিখিত বিবরণ যা কথার সাথে শব্দের বর্ণনা তুলে ধরে, যাতে ব্রেইল ডিসপ্লে দিয়ে বধির-দৃষ্টিহীন মানুষ পডকাস্ট পড়তে পারেন'
          }
        },
        {
          term: 'Audio Description (WCAG 1.2.5)',
          def: {
            en: 'Narration added to the soundtrack describing important visual details that cannot be understood from the main dialogue alone',
            bn: 'মূল সংলাপের ফাঁকে ফাঁকে অতিরিক্ত কণ্ঠের মাধ্যমে দৃশ্যের গুরুত্বপূর্ণ চাক্ষুষ ঘটনার বর্ণনা তুলে ধরা'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'a11y-flash-threshold-ex',
      kind: 'mcq',
      topic: 'WCAG 2.3.1 Three Flashes or Below Threshold limit',
      question: {
        en: 'Under WCAG Success Criterion 2.3.1, what is the maximum number of times web content is permitted to flash in any 1-second period before it violates seizure safety standards?',
        bn: 'ডব্লিউসিএজি নিয়ম ২.৩.১ অনুযায়ী খিঁচুনি বা সিজার এড়াতে ১ সেকেন্ড সময়ের মধ্যে ওয়েব কন্টেন্ট সর্বোচ্চ কতবার ফ্ল্যাশ করতে পারে?'
      },
      options: [
        {
          en: 'No more than 3 flashes in any 1-second interval',
          bn: 'যেকোনো ১ সেকেন্ডে সর্বোচ্চ ৩ বার ফ্ল্যাশ'
        },
        {
          en: 'Up to 50 flashes per second',
          bn: 'প্রতি সেকেন্ডে ৫০ বার পর্যন্ত'
        },
        {
          en: 'Unlimited flashes as long as color is yellow',
          bn: 'হলুদ রঙ হলে যত খুশি ততবার'
        },
        {
          en: 'Exactly 100 flashes per second',
          bn: 'ঠিক প্রতি সেকেন্ডে ১০০ বার'
        }
      ],
      answer: 0,
      hint: {
        en: 'The threshold is 3 flashes per 1 second.',
        bn: '১ সেকেন্ডে ৩ বারের সীমার কথা ভাবুন।'
      },
      explanation: {
        en: 'Flashing faster than 3 times per second is known to trigger photosensitive epileptic seizures and is strictly banned by WCAG 2.3.1.',
        bn: 'প্রতি সেকেন্ডে ৩ বারের বেশি আলোর ঝলকানি মৃগীরোগের মারাত্মক খিঁচুনি ঘটাতে পারে, তাই এটি কঠোরভাবে নিষিদ্ধ।'
      }
    },
    {
      id: 'a11y-audio-control-ex',
      kind: 'mcq',
      topic: 'WCAG 1.4.2 Audio Control duration threshold',
      question: {
        en: 'Under WCAG 1.4.2, if background audio or video plays automatically on page load, after how many seconds of playback must an accessible pause or volume mechanism be provided?',
        bn: 'ডব্লিউসিএজি ১.৪.২ অনুযায়ী পেজ লোডের সময় ব্যাকগ্রাউন্ডে অডিও বা ভিডিও স্বয়ংক্রিয়ভাবে চালু হলে কত সেকেন্ড চলার পর তা বন্ধ করার নিয়ন্ত্রণ থাকা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'If playback exceeds 3 seconds',
          bn: 'যদি অডিও ৩ সেকেন্ডের বেশি সময় ধরে চলে'
        },
        {
          en: 'Only if playback exceeds 10 minutes',
          bn: 'কেবল যদি ১০ মিনিটের বেশি চলে'
        },
        {
          en: 'Never; users should turn off their computer speakers',
          bn: 'কখনোই না; ব্যবহারকারীর উচিত স্পিকার বন্ধ রাখা'
        },
        {
          en: 'After 1 hour of continuous playing',
          bn: 'টানা ১ ঘণ্টা চলার পর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Any audio longer than 3 seconds requires immediate pause controls.',
        bn: '৩ সেকেন্ডের বেশি সময় চলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Uncontrolled background audio longer than 3 seconds interferes directly with screen reader speech synthesis, leaving blind visitors unable to navigate.',
        bn: '৩ সেকেন্ডের বেশি কোনো শব্দ নিজে থেকে বাজলে স্ক্রিন রিডারের কথা ঢাকা পড়ে যায় এবং দৃষ্টিহীন মানুষ চরম বিপদে পড়েন।'
      }
    },
    {
      id: 'a11y-prefers-reduced-motion-ex',
      kind: 'mcq',
      topic: 'Applying prefers-reduced-motion in CSS',
      question: {
        en: 'How should CSS respond when a visitor has enabled the prefers-reduced-motion: reduce operating system setting?',
        bn: 'ব্যবহারকারী অপারেটিং সিস্টেমে prefers-reduced-motion: reduce চালু রাখলে সিএসএস কোডের কেমন আচরণ করা উচিত?'
      },
      options: [
        {
          en: 'Disable vestibular-triggering animations like parallax scrolling, excessive zooms, and tumbling effects, replacing them with simple crossfades',
          bn: 'প্যারালাক্স বা তীব্র জুমের মতো মাথা ঘোরানো অ্যানিমেশন বন্ধ করে সহজ ও শান্ত ফেড ট্রানজিশন ব্যবহার করা'
        },
        {
          en: 'Invert all colors on the entire website',
          bn: 'ওয়েবসাইটের সমস্ত রঙ উল্টে দেওয়া'
        },
        {
          en: 'Delete all text paragraphs from the article',
          bn: 'আর্টিকেল থেকে সব প্যারাগ্রাফ মুছে ফেলা'
        },
        {
          en: 'Double the speed of all CSS keyframe animations',
          bn: 'সব অ্যানিমেশনের গতি দ্বিগুণ করে দেওয়া'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tone down nausea-inducing motion for vestibular safety.',
        bn: 'মাথা ঘোরানো নড়াচড়া শান্ত করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Honoring reduced-motion preferences prevents vestibular distress while keeping visual information fully intact and accessible.',
        bn: 'অপ্রয়োজনীয় তীব্র নড়াচড়া বন্ধ রাখলে কানের ভারসাম্যের সমস্যায় ভোগা মানুষ স্বাচ্ছন্দ্যে ওয়েবসাইট ব্যবহার করতে পারেন।'
      }
    }
  ],
  quiz: {
    id: 'quiz-media-and-motion',
    title: {
      en: 'Media, Motion & Sensory Accessibility Quiz',
      bn: 'মিডিয়া, মোশন ও সংবেদনশীল অ্যাক্সেসিবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'q-a11y-webvtt-track-syntax',
        kind: 'mcq',
        topic: 'Correct HTML5 track element for accessible closed captions',
        question: {
          en: 'Which HTML5 track tag correctly injects accessible closed captions into a native <video> player for English speakers?',
          bn: 'কোন এইচটিএমএল-৫ ট্র্যাক ট্যাগটি নেটিভ <video> প্লেয়ারে ইংরেজি দর্শকদের জন্য অ্যাক্সেসিবল ক্লোজড ক্যাপশন যুক্ত করে?'
        },
        options: [
          {
            en: '<track kind="captions" srclang="en" label="English" src="captions.vtt" default>',
            bn: '<track kind="captions" srclang="en" label="English" src="captions.vtt" default>'
          },
          {
            en: '<track kind="music" src="song.mp3">',
            bn: '<track kind="music" src="song.mp3">'
          },
          {
            en: '<script src="subtitles.js"></script>',
            bn: '<script src="subtitles.js"></script>'
          },
          {
            en: '<link rel="caption" href="text.txt">',
            bn: '<link rel="caption" href="text.txt">'
          }
        ],
        answer: 0,
        hint: {
          en: 'track tag with kind="captions" and WebVTT source.',
          bn: 'kind="captions" এবং ওয়েবভিটিটি (WebVTT) ফাইলের কথা ভাবুন।'
        },
        explanation: {
          en: 'The <track kind="captions"> element provides standardized text tracks that native video players synchronize and render accurately.',
          bn: 'এই ট্যাগের মাধ্যমে ব্রাউজারের নেটিভ প্লেয়ার ভিডিওর সময়ের সাথে মিলিয়ে নিখুঁতভাবে ক্যাপশন প্রদর্শন করে।'
        }
      },
      {
        id: 'q-a11y-audio-description-purpose',
        kind: 'mcq',
        topic: 'The role of audio description tracks (WCAG 1.2.5)',
        question: {
          en: 'What is the purpose of an Audio Description track in video accessibility (WCAG 1.2.5)?',
          bn: 'ভিডিও অ্যাক্সেসিবিলিটিতে অডিও ডেসক্রিপশন (Audio Description) ট্র্যাকের কাজ কী (ডব্লিউসিএজি ১.২.৫)?'
        },
        options: [
          {
            en: 'A secondary audio narration describing essential visual actions, scene changes, facial expressions, and onscreen text during natural dialogue pauses',
            bn: 'একটি বাড়তি অডিও ধারা যা মূল সংলাপের বিরতিতে ভিডিওর দৃশ্য পরিবর্তন, মুখের অভিব্যক্তি এবং পর্দার লেখা বর্ণনা করে'
          },
          {
            en: 'Translating song lyrics into acoustic violin solos',
            bn: 'গানের কথাকে বেহালার সুরে রূপান্তর করা'
          },
          {
            en: 'Compressing video files to reduce network bandwidth',
            bn: 'নেটওয়ার্কের ব্যান্ডউইথ বাঁচাতে ভিডিও সাইজ ছোট করা'
          },
          {
            en: 'Reading out the software license agreement',
            bn: 'সফটওয়্যারের লাইসেন্স চুক্তি পড়ে শোনানো'
          }
        ],
        answer: 0,
        hint: {
          en: 'Narrating visual action for blind and low-vision viewers.',
          bn: 'দৃষ্টিহীন মানুষের জন্য চোখের দেখার দৃশ্য মুখে বর্ণনা করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Audio descriptions give blind users access to visual information (like characters walking into rooms or reading signs) that dialogue alone cannot convey.',
          bn: 'ভিডিওতে পাত্র-পাত্রীর সংলাপের মাঝে কোনো নীরব দৃশ্য থাকলে তা মুখে বলে দৃষ্টিহীন দর্শকদের বুঝতে সাহায্য করা হয়।'
        }
      },
      {
        id: 'q-a11y-excess-flashes-risk',
        kind: 'mcq',
        topic: 'Quantifying excess flashes and seizure risks',
        question: {
          en: 'If a flashing strobe animation pulses at 5 Hertz, by how many flashes per second does it exceed the WCAG 2.3.1 safety limit?',
          bn: 'একটি স্ট্রোব অ্যানিমেশন ৫ হার্টজে কাঁপলে তা ডব্লিউসিএজি ২.৩.১ নিরাপত্তা সীমার চেয়ে প্রতি সেকেন্ডে কতটি অতিরিক্ত ফ্ল্যাশ করে?'
        },
        options: [
          {
            en: '2 excess flashes per second (5 minus the safe maximum of 3)',
            bn: 'প্রতি সেকেন্ডে ২টি অতিরিক্ত ফ্ল্যাশ (৫ থেকে নিরাপদ সর্বোচ্চ ৩ বিয়োগ)'
          },
          {
            en: '10 excess flashes',
            bn: '১০টি অতিরিক্ত ফ্ল্যাশ'
          },
          {
            en: '0 excess flashes (5 is safe)',
            bn: '০টি অতিরিক্ত ফ্ল্যাশ (৫ সম্পূর্ণ নিরাপদ)'
          },
          {
            en: '100 excess flashes',
            bn: '১০০টি অতিরিক্ত ফ্ল্যাশ'
          }
        ],
        answer: 0,
        hint: {
          en: '5 minus 3 equals 2.',
          bn: '৫ থেকে ৩ বিয়োগ করলে ২ হয়।'
        },
        explanation: {
          en: 'WCAG 2.3.1 sets the ceiling at 3 flashes per second. A 5 Hz animation exceeds this threshold by 2 flashes, creating a hazardous seizure trigger.',
          bn: '১ সেকেন্ডে সর্বোচ্চ ৩ বার ফ্ল্যাশ করা বৈধ; তাই ৫ বার জ্বললে তা বিপজ্জনকভাবে ২ বার সীমা অতিক্রম করে।'
        }
      },
      {
        id: 'q-a11y-podcast-transcript-benefit',
        kind: 'mcq',
        topic: 'Universal benefits of providing full text transcripts',
        question: {
          en: 'Beyond assisting deaf visitors, what universal benefit does providing a full text transcript alongside an audio podcast offer?',
          bn: 'বধির ব্যক্তিদের সাহায্যের পাশাপাশি অডিও পডকাস্টের পুরো টেক্সট ট্রান্সক্রিপ্ট দেওয়ার সর্বজনীন সুবিধা কী?'
        },
        options: [
          {
            en: 'It enables search engine web crawlers to index the full audio content and allows users to search, scan, and quote passages quickly',
            bn: 'এটি সার্চ ইঞ্জিনকে অডিওর ভেতরের কথা ইনডেক্স করতে দেয় এবং যেকোনো পাঠককে দ্রুত লেখা সার্চ ও কোট করতে সাহায্য করে'
          },
          {
            en: 'It causes the podcast file to be deleted automatically',
            bn: 'এটি পডকাস্ট ফাইল নিজে থেকেই মুছে ফেলে'
          },
          {
            en: 'It blocks users from downloading the audio file',
            bn: 'এটি অডিও ফাইল ডাউনলোড করা আটকে দেয়'
          },
          {
            en: 'It doubles the computer audio volume',
            bn: 'এটি কম্পিউটারের ভলিউম দ্বিগুণ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'SEO indexability, quick text searching, and reading flexibility.',
          bn: 'সার্চ ইঞ্জিনের ইনডেক্সিং এবং দ্রুত লেখা খোঁজার সুবিধার কথা ভাবুন।'
        },
        explanation: {
          en: 'Transcripts make spoken knowledge accessible to deaf users, braille displays, search engine crawlers, and readers in quiet library environments.',
          bn: 'টেক্সট ট্রান্সক্রিপ্ট থাকায় বধির মানুষের পাশাপাশি সার্চ ইঞ্জিন ও সাধারণ পাঠকরাও সহজেই তথ্য খুঁজে পান।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'forms-and-feedback',
    tech: 'accessibility',
    title: {
      en: 'Accessible Forms, Error Recovery & Autocomplete',
      bn: 'অ্যাক্সেসিবল ফর্ম, এরর রিকভারি ও অটোকমপ্লিট'
    }
  }
};
