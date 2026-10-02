import type { Lesson } from '../../../lib/types';

export const PhysicsAndDraggablesLesson: Lesson = {
  slug: 'physics-and-draggables',
  tech: 'gsap',
  title: {
    en: 'Draggable, Inertia & Physics-Based Motion — Tactile Touch & Mouse Physics',
    bn: 'ড্র্যাগেবল, ইনার্শিয়া ও ফিজিক্স মোশন — স্পর্শ ও মাউস নির্ভর বাস্তবসম্মত গতি'
  },
  summary: {
    en: 'Modern touch devices and desktop trackpads demand tactile, physics-based responsiveness. Static drag implementations that abruptly freeze upon cursor release feel cheap and artificial. GSAP Draggable paired with InertiaPlugin introduces authentic physical momentum, velocity tracking, friction decay, and spring boundaries. Draggable normalizes pointer events across iOS Safari, Android Chrome, and desktop pointer devices. Tracking release velocity allows elements to glide to a stop with realistic friction. Built-in snap arrays lock elements onto carousel grid slots, while hitTest functions enable drag-and-drop game physics and interactive UI drawers.',
    bn: 'আধুনিক টাচস্ক্রিন ও ট্র্যাকপ্যাডে স্পর্শ নির্ভর বাস্তবসম্মত গতিশীলতার অনুভূতি থাকা অত্যন্ত জরুরি। মাউস বা আঙুল ছেড়ে দিলে হঠাৎ থেমে যাওয়া অ্যানিমেশন দেখতে অস্বাভাবিক লাগে। GSAP Draggable এবং InertiaPlugin বাস্তব জড়তা, গতিবেগ ট্র্যাকিং, ঘর্ষণজনিত গতি হ্রাস এবং স্প্রিং বাউন্ডারি যোগ করে এই অভিজ্ঞতাকে জীবন্ত করে তোলে। এটি সমস্ত মোবাইল ও ডেস্কটপ ব্রাউজারে পয়েন্টার ইভেন্টকে সুষম করে। গতিবেগ মেপে বাস্তবসম্মত ঘর্ষণে অবজেক্টকে থামানো, নির্দিষ্ট গ্রিডে আটকে যাওয়া (snap) এবং সংঘর্ষ শনাক্তকরণের (hitTest) মাধ্যমে স্পর্শযোগ্য ইন্টারফেস তৈরি করা যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Physics of Tactile Interaction',
        bn: 'মূল ধারণা: বাস্তবসম্মত স্পর্শ ও মোশন ফিজিক্স'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'In physical reality, objects possess mass and momentum. When you push a physical card across a table, it continues sliding until friction arrests its kinetic energy. The GreenSock Animation Platform (GSAP) Draggable tool tracks pointer velocity in pixels per second during user gestures. Upon pointer release, InertiaPlugin computes a deceleration trajectory that feels indistinguishable from a physical object gliding across a surface.',
        bn: 'বাস্তব জগতে যেকোনো বস্তুর ভর ও জড়তা থাকে। টেবিলের ওপর কোনো কার্ড ধাক্কা দিলে ঘর্ষণে গতি কমে না আসা পর্যন্ত সেটি পিছলে চলতে থাকে। গ্রিনসক অ্যানিমেশন প্ল্যাটফর্ম (GSAP) ড্র্যাগেবল টুল ব্যবহারকারীর আঙুল বা মাউসের গতি প্রতি সেকেন্ডে পিক্সেল এককে ট্র্যাক করে। আঙুল ছেড়ে দেওয়ার মুহূর্তে InertiaPlugin একটি বাস্তবসম্মত গতির ট্র্যাজেক্টরি হিসাব করে যা বাস্তব টেবিলের ওপর কার্ড পিছলে যাওয়ার মতো অনুভূতি দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'GSAP Draggable',
          def: {
            en: 'A high-performance utility enabling smooth dragging, rotation, or spinning of any DOM element across touch and mouse interfaces',
            bn: 'একটি উচ্চগতির টুল যা টাচ ও মাউস উভয় মাধ্যমে যেকোনো ডম উপাদানকে ড্র্যাগ বা ঘোরানোর সুবিধা দেয়'
          }
        },
        {
          term: 'InertiaPlugin',
          def: {
            en: 'A physics plugin that calculates velocity-based momentum, deceleration friction, and spring bounce at boundaries',
            bn: 'একটি ফিজিক্স প্লাগইন যা গতিবেগের ওপর ভিত্তি করে জড়তা, ঘর্ষণ এবং বাউন্ডারিতে স্প্রিং বাউন্স তৈরি করে'
          }
        },
        {
          term: 'Snap Points',
          def: {
            en: 'Target resting coordinates or array values where an element settles after an inertial fling (e.g. snapping to card slots)',
            bn: 'নির্দিষ্ট পয়েন্ট যেখানে কোনো উপাদান পিছলে যাওয়ার পর সুন্দরভাবে আটকে যায় (যেমন ক্যারোসেল গ্রিড)'
          }
        },
        {
          term: 'hitTest Collision Detection',
          def: {
            en: 'Determining whether a dragged element physically overlaps another target element by area or intersection percentage',
            bn: 'ড্র্যাগ করা উপাদানটি অন্য কোনো অবজেক্টের ওপর পড়েছে কিনা তা ক্ষেত্রফল বা শতাংশ মেপে শনাক্ত করা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'inertia-and-bounds',
      text: {
        en: 'Inertial Momentum, Bounds & Grid Snapping',
        bn: 'জড়তা মোমেন্টাম, বাউন্ডস ও গ্রিড স্ন্যাপিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Configuring Draggable is straightforward: Draggable.create(".card", { type: "x", inertia: true, bounds: "#slider", edgeResistance: 0.65 }). The edgeResistance parameter acts like a rubber band when the user pulls past boundary constraints. The snap property can be an array of fixed coordinates or a custom function, locking elements into precise columns after an energetic fling.',
        bn: 'Draggable কনফিগার করা খুব সহজ: Draggable.create(".card", { type: "x", inertia: true, bounds: "#slider", edgeResistance: 0.65 })। edgeResistance প্যারামিটারটি সীমানা পেরিয়ে টান দিলে একটি রাবার ব্যান্ডের মতো বাধা সৃষ্টি করে। snap প্রপার্টিতে নির্দিষ্ট স্থানাঙ্ক দিয়ে যেকোনো দ্রুত ফ্লিক করা কার্ডকে নির্দিষ্ট ঘরে আটকে দেওয়া যায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Native Browser Drag vs GSAP Draggable & Inertia',
        bn: 'সাধারণ ব্রাউজার ড্র্যাগ বনাম GSAP ড্র্যাগেবলের তুলনা'
      },
      head: [
        { en: 'Feature', bn: 'বৈশিষ্ট্য' },
        { en: 'Native HTML5 Drag and Drop', bn: 'সাধারণ এইচটিএমএল৫ ড্র্যাগ' },
        { en: 'GSAP Draggable + InertiaPlugin', bn: 'GSAP Draggable + Inertia' }
      ],
      rows: [
        [
          { en: 'Momentum and Deceleration', bn: 'জড়তা ও ঘর্ষণ গতি' },
          { en: 'None; element abruptly freezes at exact drop coordinate', bn: 'নেই; মাউস ছাড়ার সাথে সাথে অবজেক্ট হঠাৎ থেমে যায়' },
          { en: 'Natural velocity-based deceleration glide with friction physics', bn: 'বাস্তব গতিবেগের ওপর ভিত্তি করে মসৃণ ঘর্ষণে পিছলে থামে' }
        ],
        [
          { en: 'Mobile Touch Responsiveness', bn: 'মোবাইল টাচ সক্ষমতা' },
          { en: 'Poor touch support; triggers default browser page scrolling', bn: 'মোবাইলে খুবই দুর্বল; উল্টো পুরো পেজ স্ক্রোল হয়ে যায়' },
          { en: 'Flawless unified pointer handling with smart scroll locking', bn: 'নিখুঁত টাচ নিয়ন্ত্রণ এবং বুদ্ধিমান স্ক্রোল লক' }
        ],
        [
          { en: 'Snapping and Boundary Physics', bn: 'স্ন্যাপিং ও বাউন্ডারি ফিজিক্স' },
          { en: 'Requires complex custom mathematical event loops', bn: 'জটিল কাস্টম কোড ও হিসাব নিকাশ লিখতে হয়' },
          { en: 'Built-in edgeResistance, snap points, and spring bounce', bn: 'স্বয়ংক্রিয় রাবার ব্যান্ড প্রতিরোধ ও স্প্রিং বাউন্স' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Velocity Tracking & Friction Deceleration Math',
        bn: 'চালনাযোগ্য সিমুলেশন: গতিবেগ ট্র্যাকিং ও ঘর্ষণ হ্রাস গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script simulates an energetic 1200 px/sec flick release, applying physical friction over 60 frames to calculate deceleration and total coasting travel distance:',
        bn: 'নিচের স্ক্রিপ্টটি প্রতি সেকেন্ডে ১২০০ পিক্সেল গতিবেগের একটি ফ্লিক রিলিজ চালায় এবং ৬০ ফ্রেমে ঘর্ষণের ফলে গতি হ্রাস ও মোট দূরত্বের হিসাব প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'gsap-physics-sim',
      lang: 'javascript',
      code: `// GSAP Draggable Inertia Velocity & Friction Simulator

// Initial flick throw velocity: 1200 pixels per second
const initialVelocity = 1200;

// Friction coefficient per frame (0.92 = 8% loss per 60FPS tick)
const friction = 0.92;

let velocity = initialVelocity;
let distanceTraveled = 0;

// Simulate 60 frames (1 second at 60 FPS)
for (let frame = 0; frame < 60; frame++) {
  // Distance moved in this frame = velocity * delta time (1/60th second)
  distanceTraveled += velocity * (1 / 60);
  // Apply friction decay
  velocity *= friction;
}

console.log('Initial flick throw velocity in pixels per second:', initialVelocity);
// -> Initial flick throw velocity in pixels per second: 1200

console.log('Remaining velocity after 60 frames of deceleration:', Number(velocity.toFixed(2)));
// -> Remaining velocity after 60 frames of deceleration: 8.06

console.log('Total inertial roll-out travel distance in pixels:', Number(distanceTraveled.toFixed(1)));
// -> Total inertial roll-out travel distance in pixels: 248.3`,
      caption: {
        en: 'Figure 6: A 1200 px/s flick decays to 8.06 px/s across 60 frames, coasting 248.3px to a natural stop',
        bn: 'চিত্র ৬: ১২০০ পিক্সেল/সেকেন্ড গতি ৬০ ফ্রেমে কমে ৮.০৬ এ নেমে আসে এবং মোট ২৪৮.৩ পিক্সেল পিছলে স্বাভাবিকভাবে থামে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Drag and Inertia Physics',
        bn: 'ড্র্যাগ ও ইনার্শিয়া ফিজিক্সের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules to deliver buttery touch and drag experiences in web apps:',
        bn: 'ওয়েব অ্যাপে স্পর্শযোগ্য ড্র্যাগ অভিজ্ঞতা দিতে এই ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Set touch-action: pan-y in CSS',
          def: {
            en: 'For horizontal sliders, apply touch-action: pan-y to tell mobile browsers to allow vertical page scrolling while capturing horizontal swipes',
            bn: 'অনুভূমিক স্লাইডারে touch-action: pan-y দিন যাতে ইউজার সহজে পেজ স্ক্রোল ও স্লাইড উভয়ই করতে পারেন'
          }
        },
        {
          term: 'Rule 2: Restrict bounds to Prevent Off-Screen Loss',
          def: {
            en: 'Always provide a container selector or coordinate bounds so users cannot fling interactive elements off-screen forever',
            bn: 'উপাদান যাতে স্ক্রিন থেকে চিরতরে ছিটকে না যায় সেজন্য সর্বদা bounds নির্দিষ্ট করে দিন'
          }
        },
        {
          term: 'Rule 3: Use snap Arrays for Grid Alignment',
          def: {
            en: 'Pass an array of card offset numbers to snap: [0, 300, 600] to lock cards neatly into place upon drag release',
            bn: 'কার্ডগুলোকে নিখুঁত গ্রিডে আটকে দিতে snap: [0, 300, 600] এর মতো অ্যারে ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 4: Call draggable.kill() on Component Teardown',
          def: {
            en: 'Clean up pointer listeners by invoking draggable.kill() when unmounting interactive components in single-page applications',
            bn: 'মেমোরি লিক রোধে পেজ আনমাউন্টের সময় draggable.kill() দিয়ে পয়েন্টার লিসেনার মুক্ত করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'gsap-initial-velocity-ex',
      kind: 'mcq',
      topic: 'Velocity-based coasting distance calculation',
      question: {
        en: 'If a user flicks a card at 1200 pixels per second with a 0.92 per-frame friction factor, approximately how far does it coast in 1 second (60 frames)?',
        bn: 'একজন ইউজার যদি ১২০০ পিক্সেল/সেকেন্ড গতিতে কার্ড ছুঁড়ে দেন এবং ০.৯২ ঘর্ষণ গুণক থাকে, তবে ১ সেকেন্ডে (৬০ ফ্রেম) কার্ডটি কত দূর পিছলে যাবে?'
      },
      options: [
        {
          en: 'Approximately 248.3 pixels',
          bn: 'প্রায় ২৪৮.৩ পিক্সেল'
        },
        {
          en: '1200.0 pixels (no friction)',
          bn: '১২০০.০ পিক্সেল (কোনো ঘর্ষণ ছাড়া)'
        },
        {
          en: '0.0 pixels (abrupt halt)',
          bn: '০.০ পিক্সেল (হঠাৎ থেমে যাওয়া)'
        },
        {
          en: '5000.0 pixels',
          bn: '৫০০০.০ পিক্সেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Decelerating velocity accumulates to roughly 248.3px.',
        bn: 'গতি হ্রাস পেয়ে প্রায় ২৪৮.৩ পিক্সেলে থামার কথা ভাবুন।'
      },
      explanation: {
        en: 'Physical friction reduces velocity exponentially from 1200 to 8.06 px/s, accumulating 248.3 pixels of total displacement.',
        bn: 'ঘর্ষণ গতিকে ১২০০ থেকে কমিয়ে ৮.০৬ এ নামিয়ে আনে এবং সর্বমোট ২৪৮.৩ পিক্সেল দূরত্ব অতিক্রম করে।'
      }
    },
    {
      id: 'gsap-touch-action-ex',
      kind: 'mcq',
      topic: 'touch-action CSS property role in mobile dragging',
      question: {
        en: 'Why is touch-action: pan-y mandatory in CSS on horizontal draggable carousels on mobile phones?',
        bn: 'মোবাইলে অনুভূমিক ড্র্যাগেবল স্লাইডারে সিএসএস touch-action: pan-y কেন আবশ্যিক?'
      },
      options: [
        {
          en: 'It tells the mobile browser that horizontal gestures belong to JavaScript while allowing vertical gestures to smoothly scroll the page',
          bn: 'এটি ব্রাউজারকে বোঝায় যে ডানে-বায়ে সোয়াইপ জাভাস্ক্রিপ্টের জন্য এবং উপর-নিচে স্ক্রোল পেজের জন্য'
        },
        {
          en: 'It makes images load in high-definition HDR color',
          bn: 'এটি ছবিকে উচ্চমানের এইচডিআরে লোড করায়'
        },
        {
          en: 'It disables all JavaScript security checks',
          bn: 'এটি সমস্ত সিকিউরিটি পরীক্ষা বন্ধ করে দেয়'
        },
        {
          en: 'It doubles the battery life of the phone',
          bn: 'এটি ফোনের ব্যাটারি দ্বিগুণ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Separating horizontal drag from vertical page scroll.',
        bn: 'অনুভূমিক সোয়াইপ এবং উলম্ব স্ক্রোল আলাদা করার কথা ভাবুন।'
      },
      explanation: {
        en: 'Without touch-action: pan-y, mobile browsers intercept horizontal swipes to perform history back/forward navigation or seize scroll.',
        bn: 'touch-action: pan-y না দিলে মোবাইল ব্রাউজার সোয়াইপ আটকে পেজ উল্টে দেয় বা স্ক্রোল আটকে ফেলে।'
      }
    },
    {
      id: 'gsap-edgeresistance-ex',
      kind: 'mcq',
      topic: 'Role of edgeResistance in GSAP Draggable',
      question: {
        en: 'What visual effect does setting edgeResistance: 0.65 produce when dragging an element past its boundary bounds?',
        bn: 'GSAP Draggable-এ সীমানা পেরিয়ে টেনে নিয়ে যাওয়ার সময় edgeResistance: 0.65 কী ধরণের প্রভাব ফেলে?'
      },
      options: [
        {
          en: 'It creates a rubber-band elastic resistance that smoothly snaps back to the boundary edge upon release',
          bn: 'এটি একটি স্থিতিস্থাপক রাবার ব্যান্ডের মতো বাধা দেয় যা ছেড়ে দিলে সীমানায় ফিরে আসে'
        },
        {
          en: 'It causes the element to explode into 1000 pieces',
          bn: 'এটি উপাদানটিকে ১০০০ টুকরোয় বিস্ফোরিত করে'
        },
        {
          en: 'It deletes the element from the DOM immediately',
          bn: 'এটি উপাদানটিকে ডম থেকে মুছে ফেলে'
        },
        {
          en: 'It turns the screen brightness down to zero',
          bn: 'এটি স্ক্রিনের আলো শূন্যে নামায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rubber band elastic resistance at bounds.',
        bn: 'রাবার ব্যান্ডের স্থিতিস্থাপক বাধার কথা ভাবুন।'
      },
      explanation: {
        en: 'edgeResistance dampens movement past the boundary threshold, mimicking the tactile overscroll bounce of iOS.',
        bn: 'edgeResistance সীমানা পেরোলে গতি কমিয়ে দেয়, যা আইওএস-এর চমৎকার ওভারস্ক্রোল বাউন্সের অনুভূতি তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gsap-physics-draggables',
    title: {
      en: 'Draggable & Inertia Physics Architecture Quiz',
      bn: 'ড্র্যাগেবল ও ইনার্শিয়া ফিজিক্স আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-gsap-inertia-velocity',
        kind: 'mcq',
        topic: 'How InertiaPlugin creates physical realism',
        question: {
          en: 'How does InertiaPlugin calculate how far a dragged element should glide after the user releases it?',
          bn: 'মাউস বা আঙুল ছেড়ে দেওয়ার পর উপাদানটি কত দূর পিছলে যাবে তা InertiaPlugin কীভাবে গণনা করে?'
        },
        options: [
          {
            en: 'It tracks pointer velocity right before release and applies continuous friction decay down to zero',
            bn: 'এটি ছাড়ার ঠিক আগের গতিবেগ মেপে বাস্তব ঘর্ষণ সূত্রের সাহায্যে শূন্যে নামিয়ে আনে'
          },
          {
            en: 'It guesses a random number between 1 and 1000',
            bn: 'এটি ১ থেকে ১০০০ এর মধ্যে একটি অনুমানমূলক সংখ্যা বসায়'
          },
          {
            en: 'It checks the current temperature of the computer CPU',
            bn: 'এটি সিপিইউর তাপমাত্রা দেখে'
          },
          {
            en: 'It always moves the element exactly 100 pixels',
            bn: 'এটি অবজেক্টকে সবসময় ঠিক ১০০ পিক্সেল সরায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Measured pointer release velocity with physical friction.',
          bn: 'রিলিজের সময় মাপা গতিবেগ ও ঘর্ষণের কথা ভাবুন।'
        },
        explanation: {
          en: 'InertiaPlugin measures displacement over the final few milliseconds to calculate velocity, then runs a decay equation to rest.',
          bn: 'ইনর্শিয়া প্লাগইন শেষের কয়েক মিলি-সেকেন্ডের গতি মেপে বাস্তবসম্মত ক্ষয় সমীকরণের মাধ্যমে অবজেক্টকে থামায়।'
        }
      },
      {
        id: 'q-gsap-hittest',
        kind: 'mcq',
        topic: 'Collision detection via hitTest',
        question: {
          en: 'What does calling this.hitTest(dropZone, "50%") determine inside a Draggable onDrag callback?',
          bn: 'Draggable-এর onDrag ইভেন্টে this.hitTest(dropZone, "50%") কল করলে কী যাচাই করা হয়?'
        },
        options: [
          {
            en: 'Whether at least 50% of the dragged elements surface area currently overlaps the dropZone target element',
            bn: 'ড্র্যাগ করা উপাদানটির অন্তত ৫০% পৃষ্ঠ dropZone টার্গেটের ওপর অবস্থান করছে কিনা'
          },
          {
            en: 'Whether the screen is 50% zoomed in',
            bn: 'স্ক্রিন ৫০% জুম করা কিনা'
          },
          {
            en: 'Whether the battery has 50% charge left',
            bn: 'ব্যাটারিতে ৫০% চার্জ আছে কিনা'
          },
          {
            en: 'Whether audio volume is at 50%',
            bn: 'অডিও শব্দ ৫০% এ আছে কিনা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Surface overlap collision percentage.',
          bn: 'পৃষ্ঠের ক্ষেত্রফল বা শতাংশের মিলের কথা ভাবুন।'
        },
        explanation: {
          en: 'hitTest checks geometric bounding box intersection; "50%" requires at least half overlap before returning true.',
          bn: 'hitTest দুটি উপাদানের ওভারল্যাপ পরীক্ষা করে; "৫০%" নির্দেশ করে অন্তত অর্ধেক ক্ষেত্রফল মিলিত হলে true হবে।'
        }
      },
      {
        id: 'q-gsap-snap-carousel',
        kind: 'mcq',
        topic: 'Carousel snapping with snap coordinates',
        question: {
          en: 'How can you make a draggable slider smoothly snap to the nearest 300px card increment when released?',
          bn: 'একটি ড্র্যাগেবল স্লাইডারকে ছেড়ে দেওয়ার পর কীভাবে প্রতি ৩০০ পিক্সেলের নিকটবর্তী কার্ডে আটকে দেওয়া যায়?'
        },
        options: [
          {
            en: 'Configure snap: (endValue) => Math.round(endValue / 300) * 300',
            bn: 'snap: (endValue) => Math.round(endValue / 300) * 300 কনফিগার করে'
          },
          {
            en: 'Set snap: false',
            bn: 'snap: false দিয়ে'
          },
          {
            en: 'Use CSS float: left',
            bn: 'সিএসএস float: left দিয়ে'
          },
          {
            en: 'Restart the browser',
            bn: 'ব্রাউজার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Rounding end value to multiples of 300.',
          bn: 'শেষ মানকে ৩০০ এর গুণিতকে রাউন্ড করার কথা ভাবুন।'
        },
        explanation: {
          en: 'Passing a snap function intercepts the resting position calculated by Inertia and rounds it to the closest grid column.',
          bn: 'একটি স্ন্যাপ ফাংশন ঘর্ষণে থামার সম্ভাব্য মানটিকে নিকটবর্তী ৩০০ এর গুণিতকে নিয়ে নিখুঁতভাবে বসিয়ে দেয়।'
        }
      },
      {
        id: 'q-gsap-bounds-containment',
        kind: 'mcq',
        topic: 'Preventing off-screen flings via bounds',
        question: {
          en: 'What parameter keeps a Draggable element strictly contained inside a parent div with id "boundary"?',
          bn: 'কোন প্যারামিটারটি ড্র্যাগেবল উপাদানকে "boundary" আইডি বিশিষ্ট প্যারেন্টের মধ্যে কঠোরভাবে আবদ্ধ রাখে?'
        },
        options: [
          {
            en: 'bounds: "#boundary"',
            bn: 'bounds: "#boundary"'
          },
          {
            en: 'stopAtEdges: true',
            bn: 'stopAtEdges: true'
          },
          {
            en: 'jail: "#boundary"',
            bn: 'jail: "#boundary"'
          },
          {
            en: 'lockInsideDOM: 1',
            bn: 'lockInsideDOM: 1'
          }
        ],
        answer: 0,
        hint: {
          en: 'The bounds parameter.',
          bn: 'bounds প্যারামিটারের কথা ভাবুন।'
        },
        explanation: {
          en: 'bounds specifies a DOM selector or coordinate box that the dragged element cannot cross.',
          bn: 'bounds এমন একটি বাউন্ডারি নির্ধারণ করে যার বাইরে উপাদানটি কোনো অবস্থাতেই যেতে পারে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lenis-and-smooth-scroll',
    title: {
      en: 'Lenis Smooth Scroll & GSAP ScrollTrigger Integration — Awwwards-Level Smoothness',
      bn: 'লেনিস স্মুথ স্ক্রোল ও GSAP স্ক্রোল-ট্রিগার ইন্টিগ্রেশন — আন্তর্জাতিক মানের মসৃণতা'
    }
  }
};
