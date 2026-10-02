import type { Lesson } from '../../../lib/types';

export const galleryRehearsalLesson: Lesson = {
  slug: 'the-gallery-rehearsal',
  tech: 'canvas',
  title: {
    en: 'Drawing Studio, Undo/Redo & Image Export',
    bn: 'ড্রয়িং স্টুডিও, আনডু/রিডু ও ইমেজ এক্সপোর্ট'
  },
  summary: {
    en: 'This capstone project combines paths, transformations, compositing, pixel buffers, and pointer interactions into a complete digital drawing studio. Managing undo and redo actions reliably requires two complementary LIFO stacks: an undoStack and a redoStack. Storing history as discrete vector action objects keeps memory usage minimal compared to heavy full-frame bitmap snapshots. For instance, when an artist draws 3 brush strokes, the undoStack holds 3 items while the redoStack contains 0 items. When the artist triggers an Undo action, 1 stroke is popped from the undoStack and pushed onto the redoStack, leaving 2 items in undo and 1 item in redo. Drawing any new stroke clears the redoStack instantly. Finally, exporting completed artwork is handled via canvas.toDataURL for base64 data strings or canvas.toBlob for high-performance binary file downloads. This lesson teaches application architecture, history management, and artwork export.',
    bn: 'এই ক্যাপস্টোন প্রজেক্টে পাথ, রূপান্তর, কম্পোজিটিং, পিক্সেল বাফার এবং পয়েন্টার ইভেন্টগুলোকে একত্রিত করে একটি স্বয়ংসম্পূর্ণ ডিজিটাল ড্রয়িং স্টুডিও তৈরি করা হয়েছে। আনডু (Undo) এবং রিডু (Redo) হিস্ট্রি ব্যবস্থাপনায় দুটি বিপরীতমুখী স্ট্যাক ব্যবহৃত হয়: undoStack এবং redoStack। ভারী বিটম্যাপের ছবির বদলে হালকা ভেক্টর কমান্ড স্ট্যাকে জমা রাখলে মেমোরি খরচ অনেক কমে যায়। উদাহরণস্বরূপ, একজন শিল্পী যখন ৩টি ব্রাশ স্ট্রোক আঁকেন, তখন undoStack-এ ৩টি উপাদান থাকে এবং redoStack-এ ০টি উপাদান থাকে। শিল্পী আনডু বাটনে ক্লিক করলে undoStack থেকে ১টি স্ট্রোক পপ হয়ে redoStack-এ জমা হয়, ফলে undoStack-এ অবশিষ্ট থাকে ২টি এবং redoStack-এ ১টি উপাদান। এরপর নতুন কোনো দাগ টানলে redoStack সাথে সাথে খালি হয়ে যায়। সবশেষে তৈরি করা ছবি সেভ করতে canvas.toDataURL বা মেমোরি-সাশ্রয়ী canvas.toBlob ব্যবহার করে পিএনজি ফরম্যাটে ডাউনলোড করা হয়। এই পাঠে অ্যাপ্লিকেশন আর্কিটেকচার, হিস্ট্রি স্ট্যাক এবং ছবি রপ্তানি পদ্ধতি শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Architecting an Interactive Canvas Application',
        bn: 'মূল ধারণা: ইন্টার‍্যাক্টিভ ক্যানভাস অ্যাপের আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'When you build an interactive paint studio, you must combine vector geometry with dynamic state management. Your application tracks active tool selections, brush colors, stroke widths, and an event-driven history ledger that redraws the canvas whenever states transition.',
        bn: 'আপনি যখন একটি ইন্টার‍্যাক্টিভ ডিজিটাল পেইন্ট স্টুডিও তৈরি করবেন, তখন ভেক্টর জ্যামিতির সাথে স্টেট ব্যবস্থাপনার সমন্বয় করতে হবে। অ্যাপটিতে বর্তমান ব্রাশের রঙ, সাইজ, অ্যাক্টিভ টুল এবং একটি হিস্ট্রি লেজার থাকে যা স্টেট পরিবর্তনের সাথে সাথে পুরো ক্যানভাস নিখুঁতভাবে পুনরায় এঁকে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Vector Command History',
          def: {
            en: 'Recording user brush strokes as mathematical arrays of points rather than multi-megabyte ImageData raster snapshots',
            bn: 'প্রতিটি ব্রাশ স্ট্রোককে মেগা-মেগাবাইট ছবির বদলে ছোট ছোট বিন্দুর গাণিতিক অ্যারে আকারে মেমোরিতে সংরক্ষণ করা'
          }
        },
        {
          term: 'Dual-Stack Undo/Redo Engine',
          def: {
            en: 'Managing two LIFO stacks where undo pops from history into redo, and redo pops from redo back into history',
            bn: 'দুটি স্ট্যাকের সমন্বয় যেখানে আনডু করলে হিস্ট্রি থেকে রিডুতে যায় এবং রিডু করলে পুনরায় হিস্ট্রিতে ফেরত আসে'
          }
        },
        {
          term: 'canvas.toDataURL(mimeType, quality)',
          def: {
            en: 'Serializing canvas pixel data into a base64-encoded standard data URL string (such as data:image/png;base64)',
            bn: 'ক্যানভাসের ছবিকে সরাসরি বেস-৬৪ টেক্সট স্ট্রিংয়ে রূপান্তর করার মেথড'
          }
        },
        {
          term: 'canvas.toBlob(callback, mimeType)',
          def: {
            en: 'Asynchronously encoding canvas pixels into an immutable binary Blob object, ideal for large file uploads without base64 overhead',
            bn: 'মেমোরি বাঁচিয়ে ক্যানভাসের ছবিকে সরাসরি বাইনারি ব্লব ফাইলে রূপান্তর করার আধুনিক অ্যাসিঙ্ক মেথড'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'export-methods-table',
      text: {
        en: 'Canvas Serialization & Image Export Comparison',
        bn: 'ক্যানভাস সিরিয়ালাইজেশন ও ইমেজ এক্সপোর্ট পদ্ধতির তুলনা'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Technical Comparison of Canvas Export Methods',
        bn: 'ক্যানভাস এক্সপোর্ট মেথডসমূহের কারিগরি তুলনা'
      },
      head: [
        { en: 'API Method', bn: 'মেথড' },
        { en: 'Output Format', bn: 'আউটপুট ফরম্যাট' },
        { en: 'Memory & Performance Profile', bn: 'মেমোরি ও পারফরম্যান্স' }
      ],
      rows: [
        [
          { en: 'canvas.toDataURL("image/png")', bn: 'canvas.toDataURL("image/png")' },
          { en: 'Base64 encoded string URI', bn: 'বেস-৬৪ এনকোডেড টেক্সট স্ট্রিং' },
          { en: 'Synchronous execution, incurs roughly 33% string memory bloat overhead', bn: 'সিঙ্ক্রোনাস কোড, টেক্সট আকারে থাকায় প্রায় ৩৩% বেশি মেমোরি ব্যবহার করে' }
        ],
        [
          { en: 'canvas.toBlob(cb, "image/png")', bn: 'canvas.toBlob(cb, "image/png")' },
          { en: 'Binary Blob object pointer', bn: 'বাইনারি ব্লব অবজেক্ট পয়েন্টার' },
          { en: 'Asynchronous off-thread compression, optimal for large 4K artwork exports', bn: 'অ্যাসিঙ্ক্রোনাস এবং ব্যাকগ্রাউন্ড প্রসেসিং, বড় ৪কে ছবির জন্য সর্বোত্তম' }
        ],
        [
          { en: 'canvas.toDataURL("image/webp", 0.8)', bn: 'canvas.toDataURL("image/webp", 0.8)' },
          { en: 'Lossy WebP base64 URI', bn: 'ওয়েবপি বেস-৬৪ স্ট্রিং' },
          { en: 'Fast compression with adjustable quality parameter (0.0 to 1.0)', bn: '০.০ থেকে ১.০ কোয়ালিটি নিয়ন্ত্রণের সুবিধা সহ হালকা ফাইল সাইজ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Dual-Stack Undo/Redo Action Counter',
        bn: 'চালনাযোগ্য সিমুলেশন: ডুয়াল-স্ট্যাক আনডু/রিডু অ্যাকশন কাউন্টার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates action stack mutations when an artist paints 3 strokes with 0 redo actions. Triggering 1 undo shifts 1 stroke to redo, leaving 2 items in undo and 1 item in redo:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি আনডু ও রিডু স্ট্যাকের পরিবর্তন হিসাব করে দেখায়। একজন শিল্পী ৩টি স্ট্রোক আঁকার পর রিডু স্ট্যাকে ০টি আইটেম থাকে। এরপর ১টি আনডু কার্যকর করলে ১টি স্ট্রোক রিডুতে চলে গিয়ে আনডুতে ২টি ও রিডুতে ১টি উপাদান অবশিষ্ট থাকে:'
      }
    },
    {
      type: 'code',
      id: 'canvas-undoredo-sim',
      lang: 'javascript',
      code: `// Canvas Dual-Stack Undo / Redo History Engine
const undoStack = ['stroke1', 'stroke2', 'stroke3']; // 3 strokes drawn
const redoStack = []; // Starts with 0 actions

console.log('Initial stroke count in undo stack:', undoStack.length);
// -> Initial stroke count in undo stack: 3

console.log('Initial action count in redo stack:', redoStack.length);
// -> Initial action count in redo stack: 0

// User triggers 1 undo operation
const poppedAction = undoStack.pop();
redoStack.push(poppedAction);

console.log('Remaining stroke count in undo stack:', undoStack.length);
// -> Remaining stroke count in undo stack: 2

console.log('Current action count in redo stack:', redoStack.length);
// -> Current action count in redo stack: 1`,
      caption: {
        en: 'Figure 1: After drawing 3 strokes and applying 1 undo operation, the undo stack holds 2 actions while the redo stack holds 1 action',
        bn: 'চিত্র ১: ৩টি স্ট্রোক আঁকার পর ১টি আনডু করলে আনডু স্ট্যাকে ২টি এবং রিডু স্ট্যাকে ১টি অ্যাকশন জমা থাকে'
      }
    },
    {
      type: 'heading',
      id: 'download-trigger-pattern',
      text: {
        en: 'Triggering Client-Side Image Downloads',
        bn: 'ক্লায়েন্ট ব্রাউজারে সরাসরি ছবি ডাউনলোড করানো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To allow users to save artwork to disk with a single click, instantiate an invisible HTML anchor element in memory and assign the canvas data URL to its href. Next, specify the download filename attribute and call link.click() programmatically before discarding the anchor.',
        bn: 'ব্যবহারকারীকে এক ক্লিকে নিজের ছবি সেভ করার সুযোগ দিতে মেমোরিতে একটি অদৃশ্য লিংক ট্যাগ তৈরি করে তার href-এ ছবির ডেটা ইউআরএল দিন। এরপর download অ্যাট্রিবিউটে ফাইলের নাম দিয়ে link.click() কল করলেই সরাসরি ডাউনলোড শুরু হয়ে যাবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'URL.createObjectURL(blob)',
          def: {
            en: 'Generates a temporary memory blob:// URL pointing directly to binary data without base64 text bloat',
            bn: 'বাইনারি ডেটার জন্য একটি অস্থায়ী blob:// লিংক তৈরি করে যা মেমোরি খরচ বাঁচায়'
          }
        },
        {
          term: 'URL.revokeObjectURL(url)',
          def: {
            en: 'Frees browser memory allocated for an object URL once a download completes, preventing memory leaks',
            bn: 'ডাউনলোড শেষে অস্থায়ী মেমোরি লিংক মুছে দিয়ে ব্রাউজারের মেমোরি পরিষ্কার করে'
          }
        },
        {
          term: 'Redo Stack Invalidation',
          def: {
            en: 'The mandatory rule clearing redoStack = [] the moment the user initiates a new stroke after undoing',
            bn: 'আনডু করার পর ব্যবহারকারী নতুন কোনো দাগ টানলেই redoStack সম্পূর্ণ খালি করে দেওয়ার আবশ্যিক নিয়ম'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-undoredo-counts-ex',
      kind: 'mcq',
      topic: 'Undo and redo stack lengths after 1 undo operation',
      question: {
        en: 'According to our history stack simulation, if an artist paints 3 strokes and triggers 1 undo operation, how many actions remain in the undoStack and redoStack?',
        bn: 'আমাদের হিস্ট্রি স্ট্যাক সিমুলেশন অনুযায়ী একজন শিল্পী ৩টি স্ট্রোক আঁকার পর ১টি আনডু করলে undoStack এবং redoStack-এ কয়টি করে উপাদান থাকে?'
      },
      options: [
        {
          en: 'undoStack: 2, redoStack: 1',
          bn: 'undoStack: ২, redoStack: ১'
        },
        {
          en: 'undoStack: 3, redoStack: 0',
          bn: 'undoStack: ৩, redoStack: ০'
        },
        {
          en: 'undoStack: 0, redoStack: 3',
          bn: 'undoStack: ০, redoStack: ৩'
        },
        {
          en: 'undoStack: 1, redoStack: 2',
          bn: 'undoStack: ১, redoStack: ২'
        }
      ],
      answer: 0,
      hint: {
        en: 'Popping 1 item from 3 leaves 2 in undo and 1 in redo.',
        bn: '৩ থেকে ১টি সরালে আনডুতে থাকে ২ এবং রিডুতে জমা হয় ১।'
      },
      explanation: {
        en: 'The undo action moves 1 stroke out of 3, leaving 2 in undo and 1 in redo.',
        bn: 'আনডু করার ফলে ৩টি স্ট্রোক থেকে ১টি কমে আনডুতে ২টি থাকে এবং রিডুতে ১টি আইটেম জমা হয়।'
      }
    },
    {
      id: 'canvas-toblob-vs-todataurl-ex',
      kind: 'mcq',
      topic: 'Why toBlob is superior to toDataURL for high-resolution artwork',
      question: {
        en: 'Why do production drawing applications prefer canvas.toBlob() over canvas.toDataURL() when exporting large high-resolution canvases?',
        bn: 'উচ্চমানের বড় ক্যানভাস ছবি এক্সপোর্ট করার সময় কেন canvas.toDataURL()-এর চেয়ে canvas.toBlob() ব্যবহার করা শ্রেয়?'
      },
      options: [
        {
          en: 'toBlob encodes image bytes asynchronously off the main thread without the 33% string memory bloat overhead of base64 text',
          bn: 'toBlob ব্যাকগ্রাউন্ডে অ্যাসিঙ্কভাবে কাজ করে এবং বেস-৬৪ টেক্সটের ৩৩% অতিরিক্ত মেমোরি অপচয় এড়িয়ে চলে'
        },
        {
          en: 'toBlob automatically uploads the file to social media',
          bn: 'toBlob নিজে থেকেই সোশ্যাল মিডিয়ায় ছবি আপলোড করে'
        },
        {
          en: 'toDataURL only works in legacy obsolete browsers',
          bn: 'toDataURL কেবল অতি প্রাচীন ব্রাউজারে চলে'
        },
        {
          en: 'toBlob converts the image into an MP3 audio track',
          bn: 'toBlob ছবিকে অডিও ফাইলে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Asynchronous binary encoding avoids main-thread UI jank and memory bloat.',
        bn: 'ব্রাউজার হ্যাং না করে ব্যাকগ্রাউন্ডে বাইনারি ফাইল তৈরির কথা ভাবুন।'
      },
      explanation: {
        en: 'toBlob creates an immutable binary stream without allocating massive base64 strings in the JavaScript heap, preventing UI freezes.',
        bn: 'toBlob মূল জাভাস্ক্রিপ্ট থ্রেডে চাপ না ফেলে সরাসরি বাইনারি ব্লব তৈরি করে, ফলে সাইট মসৃণ থাকে।'
      }
    },
    {
      id: 'canvas-redo-invalidation-ex',
      kind: 'mcq',
      topic: 'Why the redo stack must be cleared when a new action is drawn',
      question: {
        en: 'What must happen to the redoStack if a user undoes 2 strokes and then draws a brand new stroke on the canvas?',
        bn: 'যদি একজন ব্যবহারকারী ২টি স্ট্রোক আনডু করার পর ক্যানভাসে সম্পূর্ণ নতুন একটি দাগ কাটেন, তবে redoStack-এর ক্ষেত্রে কী ঘটতে হবে?'
      },
      options: [
        {
          en: 'The redoStack must be cleared immediately (redoStack = []) because the user branched into a new timeline, invalidating previous future states',
          bn: 'redoStack অবিলম্বে খালি করে দিতে হবে (redoStack = []) কারণ ব্যবহারকারী নতুন ড্রয়িং শুরু করায় আগের ভবিষ্যত হিস্ট্রি বাতিল হয়ে গেছে'
        },
        {
          en: 'The redoStack should be saved to localStorage',
          bn: 'redoStack লোকালস্টোরেজে সেভ করতে হবে'
        },
        {
          en: 'The new stroke should be added to the redoStack instead of undoStack',
          bn: 'নতুন স্ট্রোকটি undoStack-এর বদলে redoStack-এ যোগ করতে হবে'
        },
        {
          en: 'The browser should show a warning message',
          bn: 'ব্রাউজারকে একটি ওয়ার্নিং মেসেজ দেখাতে হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Branching into a new timeline wipes future redo states.',
        bn: 'নতুন কাজ শুরু হলে আগের রিডু মুছে ফেলার কথা ভাবুন।'
      },
      explanation: {
        en: 'Standard undo/redo architecture dictates that creating a new action invalidates all historical redo candidates.',
        bn: 'আনডু করার পর নতুন ড্রয়িং শুরু করলে আগের বাতিল হওয়া রিডু হিস্ট্রি নিজে থেকেই মুছে ফেলতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gallery-rehearsal',
    title: {
      en: 'Drawing Studio Architecture & Export Quiz',
      bn: 'ড্রয়িং স্টুডিও আর্কিটেকচার ও এক্সপোর্ট কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-vector-vs-raster-history',
        kind: 'mcq',
        topic: 'Why vector action history is more efficient than ImageData history',
        question: {
          en: 'Why is storing history as vector action objects (e.g. { tool, points, color }) much more efficient than saving ctx.getImageData() snapshots on every stroke?',
          bn: 'প্রতিটি ব্রাশ স্ট্রোকে ctx.getImageData() ছবির স্ন্যাপশট রাখার চেয়ে ভেক্টর অ্যাকশন অবজেক্ট সংরক্ষণ করা কেন অনেক বেশি কার্যকর?'
        },
        options: [
          {
            en: 'A vector command consumes only a few hundred bytes of JSON memory, whereas an ImageData snapshot on a 4K canvas consumes tens of megabytes per frame',
            bn: 'একটি ভেক্টর কমান্ড মাত্র কয়েকশ বাইট মেমোরি নেয়, যেখানে ৪কে ক্যানভাসে প্রতিটি ছবির স্ন্যাপশট প্রতিবারে কয়েক মেগাবাইট মেমোরি গ্রাস করে'
          },
          {
            en: 'ImageData is forbidden in HTML5 applications',
            bn: 'এইচটিএমএল-৫ অ্যাপে ImageData ব্যবহার নিষিদ্ধ'
          },
          {
            en: 'Vector actions render in pure CSS without JavaScript',
            bn: 'ভেক্টর অ্যাকশন জাভাস্ক্রিপ্ট ছাড়াই সিএসএসে চলে'
          },
          {
            en: 'ImageData cannot represent the color red',
            bn: 'ImageData লাল রঙ দেখাতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'A few bytes of coordinate data versus millions of raw pixel bytes.',
          bn: 'কয়েকশ বাইটের বিন্দুর তালিকা বনাম লক্ষ লক্ষ কাঁচা পিক্সেলের মেমোরি খরচের কথা ভাবুন।'
        },
        explanation: {
          en: 'Storing full bitmap buffers for 50 undo states consumes hundreds of megabytes. Vector action arrays require minimal memory.',
          bn: '৫০ বার আনডু করার জন্য ৫০টি সম্পূর্ণ ছবির বাফার রাখলে র্যাম শেষ হয়ে ক্র্যাশ করবে, কিন্তু ভেক্টর কমান্ডে মাত্র কয়েক কিলোবাইট লাগে।'
        }
      },
      {
        id: 'q-canvas-download-attribute',
        kind: 'mcq',
        topic: 'Triggering file downloads via the download attribute',
        question: {
          en: 'Which HTML anchor property forces the browser to download a file rather than navigating to its URL when clicked?',
          bn: 'ক্লিক করলে লিংকে প্রবেশ না করে ফাইল ডাউনলোড করতে অ্যাঙ্কর ট্যাগের কোন প্রপার্টি ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'anchor.download = "drawing.png";',
            bn: 'anchor.download = "drawing.png";'
          },
          {
            en: 'anchor.target = "_blank";',
            bn: 'anchor.target = "_blank";'
          },
          {
            en: 'anchor.rel = "noreferrer";',
            bn: 'anchor.rel = "noreferrer";'
          },
          {
            en: 'anchor.action = "save";',
            bn: 'anchor.action = "save";'
          }
        ],
        answer: 0,
        hint: {
          en: 'The HTML5 download attribute specifies the target filename.',
          bn: 'ফাইলের নাম সহ download অ্যাট্রিবিউটের কথা ভাবুন।'
        },
        explanation: {
          en: 'The HTML5 download attribute prompts the browser to save the URL resource locally under the specified filename.',
          bn: 'download অ্যাট্রিবিউটে ফাইলের নাম দিয়ে দিলে ব্রাউজার পেজ না খুলে সরাসরি ফাইলটি ড্রাইভে ডাউনলোড করে নেয়।'
        }
      },
      {
        id: 'q-canvas-revoke-object-url',
        kind: 'mcq',
        topic: 'Preventing memory leaks with URL.revokeObjectURL',
        question: {
          en: 'Why should developers call URL.revokeObjectURL(blobUrl) shortly after triggering a canvas Blob download?',
          bn: 'ক্যানভাস ব্লব ডাউনলোড সম্পন্ন হওয়ার কিছুক্ষণ পর কেন ডেভেলপারদের URL.revokeObjectURL(blobUrl) কল করা উচিত?'
        },
        options: [
          {
            en: 'To release the internal memory pointer in the browser, preventing memory leaks when users export dozens of images',
            bn: 'ব্রাউজার মেমোরিতে থাকা রেফারেন্স মুক্ত করে দিতে, যাতে বারবার ছবি ডাউনলোড করলে মেমোরি লিক না হয়'
          },
          {
            en: 'To delete the downloaded file from the user computer',
            bn: 'ব্যবহারকারীর কম্পিউটার থেকে ফাইল মুছে দিতে'
          },
          {
            en: 'To clear browser cookies',
            bn: 'কুকি পরিষ্কার করতে'
          },
          {
            en: 'To restart the graphics card',
            bn: 'গ্রাফিক্স কার্ড রিস্টার্ট করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Frees browser memory associated with the object URL.',
          bn: 'অপ্রয়োজনীয় মেমোরি মুক্ত করে ব্রাউজার হালকা রাখার কথা ভাবুন।'
        },
        explanation: {
          en: 'Object URLs keep the underlying Blob in memory until explicitly revoked with revokeObjectURL or until the document unloads.',
          bn: 'revokeObjectURL না দিলে ব্রাউজার ব্লব ফাইলটিকে মেমোরিতে ধরে রাখে, ফলে মেমোরি লিক হতে পারে।'
        }
      },
      {
        id: 'q-canvas-offscreen-canvas-worker',
        kind: 'mcq',
        topic: 'OffscreenCanvas for multi-threaded rendering',
        question: {
          en: 'What major architectural advantage does the modern OffscreenCanvas API provide for high-load drawing applications?',
          bn: 'ভারী ড্রয়িং অ্যাপ্লিকেশনের জন্য আধুনিক OffscreenCanvas এপিআই কী প্রধান সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'It allows canvas rendering to execute inside a background Web Worker, keeping the main UI thread completely responsive and jank-free',
            bn: 'এটি ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কারে ক্যানভাস রেন্ডারিং চালানোর সুবিধা দেয়, ফলে মূল ইউআই থ্রেড সম্পূর্ণ মসৃণ ও দ্রুত থাকে'
          },
          {
            en: 'It increases the monitor refresh rate to 240 Hz',
            bn: 'এটি মনিটরের রিফ্রেশ রেট ২৪০ হার্টজে উন্নীত করে'
          },
          {
            en: 'It allows drawing without needing a computer screen',
            bn: 'স্ক্রিন ছাড়াই ড্রয়িং করতে দেয়'
          },
          {
            en: 'It automatically translates English text to Bengali',
            bn: 'ইংরেজি লেখাকে নিজে থেকেই বাংলায় রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Enables background multi-threaded rendering in Web Workers.',
          bn: 'ওয়েব ওয়ার্কারের সাহায্যে ব্যাকগ্রাউন্ড থ্রেডে ছবি আঁকার কথা ভাবুন।'
        },
        explanation: {
          en: 'OffscreenCanvas decouples drawing from the DOM, allowing high-performance rendering loops to run on background worker threads.',
          bn: 'OffscreenCanvas ব্রাউজারের মূল থ্রেড মুক্ত রেখে ব্যাকগ্রাউন্ড ওয়ার্কারে ভারী গ্রাফিক্স প্রসেসিং সম্পন্ন করে।'
        }
      }
    ]
  }
};
