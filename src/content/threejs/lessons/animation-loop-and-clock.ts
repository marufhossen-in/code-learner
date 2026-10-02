import type { Lesson } from '../../../lib/types';

export const AnimationLoopAndClockLesson: Lesson = {
  slug: 'animation-loop-and-clock',
  tech: 'threejs',
  title: {
    en: 'The 60FPS Animation Loop, Delta Time & Quaternions — Smooth Frame Rates',
    bn: '৬০ এফপিএস অ্যানিমেশন লুপ, ডেল্টা টাইম ও কোয়াটারনিয়ন — স্মুথ ফ্রেম রেট'
  },
  summary: {
    en: 'Real-time 3D web applications live and die by their render loop. Three.js leverages the browsers native requestAnimationFrame callback to synchronize scene rendering directly with monitor refresh cycles. Relying on fixed per-frame increments causes animations to run twice as fast on 120Hz displays compared to 60Hz monitors. The solution is delta time — measuring elapsed time between frames using THREE.Clock and multiplying movement by clock.getDelta(). Complex 3D rotations suffer from Gimbal Lock when expressed via Euler angles. Adopting 4D Quaternions and spherical linear interpolation (slerp) guarantees smooth, artifact-free rotations across all axes.',
    bn: 'রিয়েল-টাইম 3D ওয়েব অ্যাপ্লিকেশনের প্রাণ হলো এর রেন্ডার লুপ। থ্রি.জেএস ব্রাউজারের নেটিভ requestAnimationFrame ব্যবহার করে মনিটরের রিফ্রেশ সাইকেলের সাথে সমন্বয় করে দৃশ্য প্রদর্শন করে। প্রতি ফ্রেমে নির্দিষ্ট মান যোগ করলে ৬০ হার্জের চেয়ে ১২০ হার্জের ডিসপ্লেতে অ্যানিমেশন দ্বিগুণ গতিতে চলে। এর স্থায়ী সমাধান হলো ডেল্টা টাইম — THREE.Clock দিয়ে দুই ফ্রেমের মধ্যবর্তী সময় মেপে clock.getDelta() দিয়ে গতি গুণ করা। অয়লার অ্যাঙ্গেলের ঘূর্ণনে জিম্বল লক এড়াতে ৪-মাত্রিক কোয়াটারনিয়ন এবং স্লার্প (slerp) ব্যবহার নির্বিঘ্ন ও মসৃণ ঘূর্ণন নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The requestAnimationFrame Render Loop',
        bn: 'মূল ধারণা: requestAnimationFrame রেন্ডার লুপ'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'In 3D graphics, motion is created by repainting the entire scene dozens of times per second. Older web development code relied on repetitive timer intervals. Those legacy timers run decoupled from hardware display refreshes, causing frame stutter and severe battery drain. Modern Three.js code drives motion exclusively via requestAnimationFrame. This callback pauses automatically when users switch browser tabs and syncs with hardware refresh rates.',
        bn: '3D গ্রাফিক্সে অবজেক্টের নড়াচড়া মূলত প্রতি সেকেন্ডে বহুবার সম্পূর্ণ দৃশ্যটি নতুন করে আঁকার মাধ্যমে তৈরি হয়। আগে সাধারণ পুনরাবৃত্তিমূলক টাইমার ব্যবহার করা হতো। সেই পুরনো টাইমারগুলো ডিসপ্লে রিফ্রেশের সাথে মিলত না, ফলে স্ক্রিন কেঁপে উঠত ও ব্যাটারি নষ্ট হতো। আধুনিক থ্রি.জেএস কোড শুধুমাত্র requestAnimationFrame ব্যবহার করে। এটি অন্য ট্যাবে গেলে থেমে যায় এবং মনিটরের রিফ্রেশ হারের সাথে সিঙ্ক থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Render Loop',
          def: {
            en: 'A recursive requestAnimationFrame cycle updating scene objects and invoking renderer.render() on every monitor refresh',
            bn: 'একটি রিকার্সিভ রেন্ডার চক্র যা প্রতিটি ফ্রেমের অবজেক্ট আপডেট করে renderer.render() কল করে'
          }
        },
        {
          term: 'Delta Time (Δt)',
          def: {
            en: 'The exact elapsed time in fractions of a second between the previous frame and the current frame',
            bn: 'আগের ফ্রেম এবং বর্তমান ফ্রেমের মধ্যকার অতিবাহিত সময়ের ব্যবধান (সেকেন্ডের ভগ্নাংশ)'
          }
        },
        {
          term: 'Gimbal Lock',
          def: {
            en: 'A mathematical condition where 2 of 3 rotational axes align, losing 1 degree of rotational freedom in Euler angles',
            bn: 'এমন এক গাণিতিক অবস্থা যেখানে অয়লার কোণের ৩টি অক্ষের মধ্যে ২টি অক্ষ মিলে ১টি ঘূর্ণন স্বাধীনতা নষ্ট করে'
          }
        },
        {
          term: 'Quaternion SLERP',
          def: {
            en: 'Spherical linear interpolation smoothly rotating an orientation from vector A to vector B along a 4D sphere',
            bn: '৪-মাত্রিক গোলকে দুটি কোয়াটারনিয়নের মধ্যে সবচেয়ে ছোট পথে মসৃণ কোণীয় রূপান্তর'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'delta-and-quaternions',
      text: {
        en: 'Delta Time Independence & Quaternion Rotations',
        bn: 'ডেল্টা টাইম নির্ভরতাহীনতা ও কোয়াটারনিয়ন ঘূর্ণন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Consider a mesh spinning at speed. If you execute mesh.rotation.y += speed, on a 60Hz display it spins 60 times that amount in 1 second. But on a 120Hz display, it updates 120 times, spinning twice as fast! Multiplying by delta (const delta = clock.getDelta(); mesh.rotation.y += speed * delta) guarantees the object rotates the exact same radians per second across all monitors. Replacing Euler rotations with Quaternion slerp avoids mathematical singularity traps entirely.',
        bn: 'ধরা যাক একটি মেশ ঘুরছে। আপনি যদি mesh.rotation.y += speed লেখেন, তবে ৬০ হার্জের ডিসপ্লেতে ১ সেকেন্ডে এটি ৬০ বার ঘুরবে। কিন্তু ১২০ হার্জের স্ক্রিনে এটি ১২০ বার আপডেট হবে, ফলে দ্বিগুণ গতিতে দৌড়াবে! ডেল্টা দিয়ে গুণ করলে (const delta = clock.getDelta(); mesh.rotation.y += speed * delta) যেকোনো মনিটরেই প্রতি সেকেন্ডে একই রেডিয়ান ঘূর্ণন বজায় থাকে। অয়লার কোণের বদলে কোয়াটারনিয়ন স্লার্প ব্যবহার করলে জিম্বল লকের ঝুঁকি শূন্য হয়ে যায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Euler Angles vs Quaternions Comparison',
        bn: 'অয়লার কোণ বনাম কোয়াটারনিয়নের তুলনা'
      },
      head: [
        { en: 'Property', bn: 'বৈশিষ্ট্য' },
        { en: 'Euler Angles (X, Y, Z)', bn: 'অয়লার কোণ (X, Y, Z)' },
        { en: 'Quaternions (X, Y, Z, W)', bn: 'কোয়াটারনিয়ন (X, Y, Z, W)' }
      ],
      rows: [
        [
          { en: 'Gimbal Lock Vulnerability', bn: 'জিম্বল লকের ঝুঁকি' },
          { en: 'Vulnerable; 90-degree pitch causes yaw and roll axes to collapse into each other', bn: 'ঝুঁকিপূর্ণ; ৯০ ডিগ্রি পিচে দুটি অক্ষ একে অপরের সাথে মিশে গতি অচল করে' },
          { en: 'Immune; 4D hypercomplex geometry guarantees non-singular rotation in all directions', bn: 'সম্পূর্ণ নিরাপদ; ৪-মাত্রিক জ্যামিতির কারণে কোনো দিক অবরুদ্ধ হয় না' }
        ],
        [
          { en: 'Interpolation Quality', bn: 'ইন্টারপোলেশনের মান' },
          { en: 'Jerky and unnatural paths when interpolating multi-axis rotations', bn: 'একাধিক অক্ষে ঘোরানোর সময় ঝাঁকুনি ও অস্বাভাবিক বাঁক তৈরি হয়' },
          { en: 'Flawless constant-velocity spherical arc transitions via SLERP', bn: 'স্লার্পের মাধ্যমে চমৎকার স্থির-গতির বৃত্তাকার রূপান্তর' }
        ],
        [
          { en: 'Human Readability', bn: 'মানুষের বোধগম্যতা' },
          { en: 'Intuitive; expressed as degrees or radians around cardinal axes', bn: 'সহজবোধ্য; অক্ষের চারপাশে ডিগ্রি বা রেডিয়ানে চিন্তা করা সহজ' },
          { en: 'Abstract; represents a 3D rotation axis paired with a scalar rotation cosine', bn: 'জটিল ও বিমূর্ত; 3D অক্ষ এবং স্কেলার কোসাইনের সমন্বয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Delta Time Synchronization & Quaternion SLERP',
        bn: 'চালনাযোগ্য সিমুলেশন: ডেল্টা টাইম সিঙ্ক ও কোয়াটারনিয়ন স্লার্প'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script demonstrates how delta time guarantees identical total rotation across 60Hz, 120Hz, and 240Hz monitors over 1 second, and simulates damped quaternion interpolation:',
        bn: 'নিচের স্ক্রিপ্টটি দেখায় কিভাবে ডেল্টা টাইম ৬০, ১২০ ও ২৪০ হার্জের স্ক্রিনে ১ সেকেন্ডে হুবহু একই ঘূর্ণন বজায় রাখে এবং স্লার্পের গতি প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'three-animation-sim',
      lang: 'javascript',
      code: `// Three.js Animation Loop, Delta Time & Quaternion Slerp Simulator

// Simulating object rotation over 1 second at different monitor refresh rates
const targetAngularSpeed = Math.PI; // 180 degrees (3.14159 rad) per second

function simulateRotationOver1Sec(refreshRate) {
  const frameCount = refreshRate;
  const delta = 1.0 / refreshRate; // frame delta in seconds
  let angle = 0;

  for (let i = 0; i < frameCount; i++) {
    angle += targetAngularSpeed * delta;
  }
  return angle;
}

const angle60Hz = simulateRotationOver1Sec(60);
const angle120Hz = simulateRotationOver1Sec(120);
const angle240Hz = simulateRotationOver1Sec(240);

// Quaternion Spherical Linear Interpolation (SLERP) simulation
// Slerp between quat A (0 deg) and quat B (90 deg around Y) with damping alpha = 0.1
function slerpAngle(currentDeg, targetDeg, alpha) {
  return currentDeg + (targetDeg - currentDeg) * alpha;
}

let smoothedAngle = 0;
const targetOrientation = 90.0;
const dampingFactor = 0.1;

// 5 frames of damped slerp
for (let frame = 1; frame <= 5; frame++) {
  smoothedAngle = slerpAngle(smoothedAngle, targetOrientation, dampingFactor);
}

console.log('Total rotation angle at 60Hz display in radians:', Number(angle60Hz.toFixed(3)));
// -> Total rotation angle at 60Hz display in radians: 3.142

console.log('Total rotation angle at 120Hz display in radians:', Number(angle120Hz.toFixed(3)));
// -> Total rotation angle at 120Hz display in radians: 3.142

console.log('Total rotation angle at 240Hz display in radians:', Number(angle240Hz.toFixed(3)));
// -> Total rotation angle at 240Hz display in radians: 3.142

console.log('Target orientation in degrees:', targetOrientation);
// -> Target orientation in degrees: 90

console.log('Smoothed orientation after 5 frames of damped slerp in degrees:', Number(smoothedAngle.toFixed(2)));
// -> Smoothed orientation after 5 frames of damped slerp in degrees: 36.86`,
      caption: {
        en: 'Figure 5: Identical 3.142 radians achieved at 60Hz, 120Hz, and 240Hz via delta time, and SLERP reaching 36.86 degrees after 5 frames',
        bn: 'চিত্র ৫: ডেল্টা টাইমের কারণে ৬০, ১২০ ও ২৪০ হার্জে একই ৩.১৪২ রেডিয়ান এবং ৫ ফ্রেম পরে স্লার্পে ৩৬.৮৬ ডিগ্রি কোণ প্রমাণ'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for 60FPS Animation Loops',
        bn: '৬০ এফপিএস অ্যানিমেশন লুপের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Strictly follow these 4 architectural guidelines to ensure buttery 60FPS and 120FPS performance:',
        bn: 'মাখনের মতো মসৃণ ৬০ ও ১২০ এফপিএস পারফরম্যান্স পেতে এই ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Multiply Movement by clock.getDelta()',
          def: {
            en: 'Never add a fixed float to position or rotation; always scale by delta seconds to maintain frame-rate independence',
            bn: 'পজিশন বা রোটেশনে সরাসরি কোনো মান যোগ করবেন না; ফ্রেম রেট ঠিক রাখতে সর্বদা ডেল্টা দিয়ে গুণ করুন'
          }
        },
        {
          term: 'Rule 2: Cap Maximum Delta Time',
          def: {
            en: 'Clamp delta with Math.min(delta, 0.1) so that returning to a tab after 10 seconds does not cause objects to fling across infinity',
            bn: 'ট্যাব বদলে ১০ সেকেন্ড পর ফিরলে অবজেক্ট ছিটকে যাওয়া রোধ করতে Math.min(delta, 0.1) দিয়ে ডেল্টা ক্ল্যাম্প করুন'
          }
        },
        {
          term: 'Rule 3: Enable Damping on OrbitControls',
          def: {
            en: 'Set controls.enableDamping = true with dampingFactor = 0.05 and call controls.update() inside the loop for smooth camera physics',
            bn: 'ক্যামেরা নিয়ন্ত্রণে controls.enableDamping = true ও controls.update() ব্যবহার করে মসৃণ গতিশীলতা আনুন'
          }
        },
        {
          term: 'Rule 4: Zero Memory Allocation Inside Loop',
          def: {
            en: 'Never do new THREE.Vector3() or new THREE.Matrix4() inside requestAnimationFrame; allocate reusable scratch vectors globally',
            bn: 'লুপের ভেতর new Vector3() করবেন না; গার্বেজ কালেকশন ল্যাগ এড়াতে বাইরে গ্লোবাল ভেক্টর বানিয়ে পুনরায় ব্যবহার করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-deltatime-calc-ex',
      kind: 'mcq',
      topic: 'Delta time frame independence calculation',
      question: {
        en: 'An object moves at 10 units per second. If a frame takes 0.016 seconds (60FPS), how far should the object move in that frame?',
        bn: 'একটি অবজেক্ট প্রতি সেকেন্ডে ১০ একক গতিতে চলে। একটি ফ্রেমে সময় লাগলে 0.016 সেকেন্ড (৬০ এফপিএস), সেই ফ্রেমে অবজেক্টটি কতটুকু সরবে?'
      },
      options: [
        {
          en: '0.16 units (10 * 0.016)',
          bn: '0.16 একক (১০ * 0.016)'
        },
        {
          en: '10.0 units (full second distance)',
          bn: '10.0 একক (পূর্ণ সেকেন্ডের দূরত্ব)'
        },
        {
          en: '1.6 units',
          bn: '1.6 একক'
        },
        {
          en: '0.0016 units',
          bn: '0.0016 একক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply speed by delta time.',
        bn: 'গতিকে ডেল্টা সময় দিয়ে গুণ করুন।'
      },
      explanation: {
        en: 'Distance = speed * delta = 10 * 0.016 = 0.16 units.',
        bn: 'দূরত্ব = গতি * ডেল্টা = ১০ * 0.016 = 0.16 একক।'
      }
    },
    {
      id: 'threejs-gimbal-degree-ex',
      kind: 'mcq',
      topic: 'Pitch angle causing Gimbal Lock in Euler systems',
      question: {
        en: 'At what pitch rotation angle do standard Euler angles typically lose a degree of freedom and trigger Gimbal Lock?',
        bn: 'কোন পিচ কোণে অয়লার ঘূর্ণন সাধারণত একটি মাত্রার স্বাধীনতা হারিয়ে জিম্বল লকের শিকার হয়?'
      },
      options: [
        {
          en: '90 degrees (or Math.PI / 2 radians)',
          bn: '৯০ ডিগ্রি (বা Math.PI / ২ রেডিয়ান)'
        },
        {
          en: '0 degrees',
          bn: '০ ডিগ্রি'
        },
        {
          en: '45 degrees',
          bn: '৪৫ ডিগ্রি'
        },
        {
          en: '360 degrees',
          bn: '৩৬০ ডিগ্রি'
        }
      ],
      answer: 0,
      hint: {
        en: 'Direct vertical pitch angle.',
        bn: 'খাড়া উলম্ব পিচ কোণের কথা ভাবুন।'
      },
      explanation: {
        en: 'When pitch reaches 90 degrees, yaw and roll axes align collinear, reducing rotational freedom from 3 axes to 2.',
        bn: 'পিচ যখন ৯০ ডিগ্রিতে পৌঁছায় তখন রোল ও ইয়া অক্ষ একই রেখায় চলে আসে, ফলে ৩টি ঘূর্ণন অক্ষের বদলে মাত্র ২টি অবশিষ্ট থাকে।'
      }
    },
    {
      id: 'threejs-raf-advantage-ex',
      kind: 'mcq',
      topic: 'Advantages of requestAnimationFrame over setInterval',
      question: {
        en: 'What occurs automatically when a user switches to a different browser tab while a Three.js animation uses requestAnimationFrame?',
        bn: 'requestAnimationFrame চালিত থ্রি.জেএস অ্যানিমেশন চলাকালীন ইউজার অন্য ট্যাবে গেলে স্বয়ংক্রিয়ভাবে কী ঘটে?'
      },
      options: [
        {
          en: 'The browser pauses the loop, saving CPU/GPU resources and battery power',
          bn: 'ব্রাউজার লুপটি সাময়িকভাবে থামিয়ে দেয়, ফলে সিপিইউ/জিপিউ রিসোর্স ও ব্যাটারি বাঁচে'
        },
        {
          en: 'The browser deletes all 3D geometries from memory',
          bn: 'ব্রাউজার মেমোরি থেকে সমস্ত 3D জিওমেট্রি মুছে ফেলে'
        },
        {
          en: 'The animation accelerates to 1000 FPS in the background',
          bn: 'ব্যাকগ্রাউন্ডে অ্যানিমেশন ১০০০ এফপিএস গতিতে ছুটতে থাকে'
        },
        {
          en: 'The camera automatically captures a screenshot',
          bn: 'ক্যামেরা স্বয়ংক্রিয়ভাবে স্ক্রিনশট তুলে নেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hardware throttling in background tabs.',
        bn: 'ব্যাকগ্রাউন্ড ট্যাবে অপ্রয়োজনীয় প্রসেসিং বন্ধ করার কথা ভাবুন।'
      },
      explanation: {
        en: 'requestAnimationFrame natively pauses execution in inactive background tabs, preserving battery and hardware thermals.',
        bn: 'নিষ্ক্রিয় ট্যাবে requestAnimationFrame স্বয়ংক্রিয়ভাবে থেমে থাকে, যা ডিভাইসের ব্যাটারি ও প্রসেসরকে অতিরিক্ত গরম হওয়া থেকে রক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-animation-clock',
    title: {
      en: 'Animation Loop & Quaternion Architecture Quiz',
      bn: 'অ্যানিমেশন লুপ ও কোয়াটারনিয়ন আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-delta',
        kind: 'mcq',
        topic: 'Importance of delta time scaling',
        question: {
          en: 'Why is multiplying animation speed by clock.getDelta() essential in Three.js?',
          bn: 'কেন থ্রি.জেএস-এ অ্যানিমেশনের গতিকে clock.getDelta() দিয়ে গুণ করা অপরিহার্য?'
        },
        options: [
          {
            en: 'To make animation speed consistent regardless of whether the display runs at 60Hz, 120Hz, or 240Hz',
            bn: 'ডিসপ্লে ৬০, ১২০ বা ২৪০ হার্জ যাই হোক না কেন অ্যানিমেশনের গতি যাতে সব ডিভাইসে একই থাকে'
          },
          {
            en: 'To force the browser to enable hardware WebGPU mode',
            bn: 'ব্রাউজারকে হার্ডওয়্যার ওয়েবিজিপিউ মোড অন করতে বাধ্য করার জন্য'
          },
          {
            en: 'To invert the camera depth buffer',
            bn: 'ক্যামেরা ডেপথ বাফার উল্টো করার জন্য'
          },
          {
            en: 'To calculate the file size of GLTF models',
            bn: 'জিএলটিএফ মডেলের ফাইল সাইজ গণনা করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Display refresh rate independence.',
          bn: 'মনিটরের রিফ্রেশ হারের পার্থক্যের কথা ভাবুন।'
        },
        explanation: {
          en: 'Delta time represents the fraction of a second since the last frame; multiplying by it guarantees movement is measured in units per second rather than units per frame.',
          bn: 'ডেল্টা টাইম হলো গত ফ্রেম থেকে অতিবাহিত সময়; এটি দিয়ে গুণ করলে অবজেক্ট প্রতি ফ্রেমে না সরে প্রতি সেকেন্ডে নির্দিষ্ট দূরত্ব অতিক্রম করে।'
        }
      },
      {
        id: 'q-threejs-gimbal',
        kind: 'mcq',
        topic: 'How Quaternions eliminate Gimbal Lock',
        question: {
          en: 'What problem does using Quaternions solve in 3D rotations?',
          bn: '3D ঘূর্ণনে কোয়াটারনিয়ন কোন সমস্যাটি সমাধান করে?'
        },
        options: [
          {
            en: 'It completely eliminates Gimbal Lock and provides smooth constant-velocity spherical interpolation (SLERP)',
            bn: 'এটি জিম্বল লক পুরোপুরি নির্মূল করে এবং চমৎকার সুষম বৃত্তাকার ইন্টারপোলেশন (SLERP) প্রদান করে'
          },
          {
            en: 'It doubles the texture resolution of the canvas',
            bn: 'এটি ক্যানভাসে টেক্সচার রেজোলিউশন দ্বিগুণ করে'
          },
          {
            en: 'It removes the requirement of having a directional light in the scene',
            bn: 'এটি সিন থেকে ডিরেকশনাল লাইটের প্রয়োজনীয়তা দূর করে দেয়'
          },
          {
            en: 'It reduces the polygon count of the geometry by half',
            bn: 'এটি জিওমেট্রির পলিগন সংখ্যা অর্ধেকে নামিয়ে আনে'
          }
        ],
        answer: 0,
        hint: {
          en: '4D hypersphere rotation without axis alignment traps.',
          bn: '৪-মাত্রিক গোলকে ঘূর্ণন যেখানে কোনো অক্ষ আটকে যায় না।'
        },
        explanation: {
          en: 'Euler angles lose a degree of freedom when two axes align (Gimbal Lock); 4D Quaternions avoid this mathematical singularity.',
          bn: 'অয়লার কোণে দুটি অক্ষ মিলে গেলে জিম্বল লক ঘটে; ৪-মাত্রিক কোয়াটারনিয়নে এই গাণিতিক প্রতিবন্ধকতা ঘটে না।'
        }
      },
      {
        id: 'q-threejs-loop-gc',
        kind: 'mcq',
        topic: 'Garbage collection stutter inside render loops',
        question: {
          en: 'Why should you never instantiate new objects (such as new THREE.Vector3()) inside the animation loop?',
          bn: 'কেন অ্যানিমেশন লুপের ভেতর কখনো নতুন অবজেক্ট (যেমন new THREE.Vector3()) তৈরি করা উচিত নয়?'
        },
        options: [
          {
            en: 'Creating thousands of objects per second triggers frequent Garbage Collection pauses, causing sudden frame drops and visual stutter',
            bn: 'প্রতি সেকেন্ডে হাজার হাজার অবজেক্ট তৈরি করলে ঘন ঘন গার্বেজ কালেকশন ঘটে, যার ফলে ফ্রেম ড্রপ ও ল্যাগ তৈরি হয়'
          },
          {
            en: 'Because JavaScript will refuse to execute new operations inside requestAnimationFrame',
            bn: 'কারণ জাভাস্ক্রিপ্ট requestAnimationFrame-এর ভেতর নতুন কোনো অপারেশন করতে বাধা দেয়'
          },
          {
            en: 'Because Three.js will turn off shadow mapping automatically',
            bn: 'কারণ থ্রি.জেএস স্বয়ংক্রিয়ভাবে শ্যাডো বন্ধ করে দেবে'
          },
          {
            en: 'To avoid converting the scene into 2D mode',
            bn: 'সিনটি যাতে 2D মোডে পরিবর্তিত না হয় তা নিশ্চিত করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Stop-the-world Garbage Collection pauses.',
          bn: 'জাভাস্ক্রিপ্ট গার্বেজ কালেকশন ল্যাগের কথা ভাবুন।'
        },
        explanation: {
          en: 'Garbage Collection is stop-the-world in JavaScript; allocating memory at 60 or 120 FPS forces GC cycles that freeze the render pipeline.',
          bn: 'জাভাস্ক্রিপ্টে গার্বেজ কালেকশন সাময়িকভাবে কোড থামিয়ে দেয়; ৬০ বা ১২০ এফপিএসে মেমোরি বরাদ্দ করলে এই ল্যাগ ফ্রেম রেট নষ্ট করে দেয়।'
        }
      },
      {
        id: 'q-threejs-damping',
        kind: 'mcq',
        topic: 'OrbitControls damping update in loop',
        question: {
          en: 'When OrbitControls has enableDamping = true, what must be called inside the animation loop?',
          bn: 'OrbitControls-এ enableDamping = true থাকলে অ্যানিমেশন লুপে অবশ্যই কোনটি কল করতে হবে?'
        },
        options: [
          {
            en: 'controls.update()',
            bn: 'controls.update()'
          },
          {
            en: 'controls.reset()',
            bn: 'controls.reset()'
          },
          {
            en: 'camera.lookAtOrigin()',
            bn: 'camera.lookAtOrigin()'
          },
          {
            en: 'scene.rebuildHierarchy()',
            bn: 'scene.rebuildHierarchy()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calculates inertial camera decay per frame.',
          bn: 'প্রতি ফ্রেমে ক্যামেরার জড়তার গতি ক্ষয় হিসাব করে।'
        },
        explanation: {
          en: 'controls.update() calculates the inertial momentum decay and updates camera angles smoothly each frame.',
          bn: 'controls.update() প্রতিটি ফ্রেমে জড়তা ও মোমেন্টাম গণনা করে ক্যামেরার অবস্থান মসৃণভাবে পরিবর্তন করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'particles-and-instancing',
    title: {
      en: 'Particle Systems, InstancedMesh & Performance Tuning — 100,000 Elements at 60FPS',
      bn: 'পার্টিক্যাল সিস্টেমস, ইনস্ট্যান্সড-মেশ ও পারফরম্যান্স টিউনিং — ৬০ এফপিএসে ১০০,০০০ অবজেক্ট'
    }
  }
};
