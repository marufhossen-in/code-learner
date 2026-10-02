import type { Lesson } from '../../../lib/types';

export const LightsAndShadowsLesson: Lesson = {
  slug: 'lights-and-shadows',
  tech: 'threejs',
  title: {
    en: 'Lights, Shadow Maps & Tone Mapping — Illuminating 3D Virtual Worlds',
    bn: 'লাইট, শ্যাডো ম্যাপ ও টোন ম্যাপিং — 3D ভার্চুয়াল বিশ্বকে আলোকিত করা'
  },
  summary: {
    en: 'Lighting dictates the spatial atmosphere and depth of any 3D environment. Three.js features a versatile lighting system. It spans non-directional fill (AmbientLight), sunlight rays (DirectionalLight), point emitters (PointLight), focused cones (SpotLight), and studio softboxes (RectAreaLight). Shadow rendering in WebGL utilizes Shadow Maps — depth textures rendered from the lights point of view. To achieve crisp shadows without frame drops, developers must configure map resolutions, calibrate shadow camera frustums, and apply negative bias offsets to eliminate shadow acne. Crucially, combining physical quadratic decay with ACES Filmic Tone Mapping prevents blown-out highlights and delivers cinematic color reproduction.',
    bn: 'আলোকসজ্জা 3D ভার্চুয়াল জগতের গভীরতা ও আবহ সৃষ্টি করে। থ্রি.জেএস-এ বিভিন্ন ধরণের লাইট রয়েছে। এর মধ্যে রয়েছে মৃদু ফিল লাইট (AmbientLight), সূর্যের মতো সমান্তরাল রশ্মি (DirectionalLight), বিন্দু উৎস (PointLight), ফোকাসড কোণ (SpotLight) এবং স্টুডিও সফটবক্স (RectAreaLight)। ওয়েবজিএল-এ ছাঁয়া তৈরির জন্য শ্যাডো ম্যাপ (Shadow Maps) ব্যবহৃত হয় — যা মূলত আলোর কোণ থেকে দৃশ্যটির একটি ডেপথ টেক্সচার। মসৃণ ছাঁয়া পেতে শ্যাডো ম্যাপ রেজোলিউশন টিউন করা, ক্যামেরার ফ্রাস্টাম সুনির্দিষ্ট রাখা এবং নেগেটিভ বায়াস দিয়ে শ্যাডো অ্যাকনে দূর করা আবশ্যক। এর সাথে কোয়াড্রেটিক লাইট ডিকে এবং এসিইএস ফিলমিক টোন ম্যাপিং সিনেমাটিক ভিজ্যুয়াল নিশ্চিত করে।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Spectrum of 3D Light Sources',
        bn: 'মূল ধারণা: 3D আলোর প্রকারভেদ ও ব্যবহার'
      }
    },
    {
      type: 'visual',
      id: 'architecture'
    },
    {
      type: 'para',
      text: {
        en: 'In the real world, light bounces billions of times between surfaces. In real-time WebGL graphics, full global illumination is computationally prohibitive at 60 frames per second. Three.js simulates illumination using direct analytical light emitters paired with ambient fill lights. Balancing these sources is the secret to photorealistic 3D visuals without melting client GPUs.',
        bn: 'বাস্তব জগতে আলো কোটি কোটি বার বিভিন্ন পৃষ্ঠে ধাক্কা খেয়ে চারদিকে ছড়িয়ে পড়ে। রিয়েল-টাইম ওয়েবজিএলে ৬০ এফপিএসে সরাসরি এই হিসাব করা অসম্ভব। থ্রি.জেএস ডিরেক্ট অ্যানালিটিক্যাল লাইট এবং অ্যাম্বিয়েন্ট ফিল লাইটের মেলবন্ধনে এই আলোকসজ্জা তৈরি করে। ক্লায়েন্টের জিপিউ ঠান্ডা রেখে বাস্তবসম্মত ভিজ্যুয়াল তৈরির মূল চাবিকাঠি হলো এই লাইটগুলোর নিখুঁত ভারসাম্য।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'DirectionalLight',
          def: {
            en: 'Emits parallel light rays from infinite distance mimicking the sun; ideal for primary outdoor key lighting and casting shadows',
            bn: 'সূর্যের মতো অসীম দূরত্ব থেকে সমান্তরাল আলোক রশ্মি ফেলে; প্রধান আলো ও সুস্পষ্ট ছাঁয়া তৈরির জন্য আদর্শ'
          }
        },
        {
          term: 'PointLight',
          def: {
            en: 'Radiates light omnidirectionally from a single point like an incandescent lightbulb or torch flame',
            bn: 'বৈদ্যুতিক বাতি বা আগুনের শিখার মতো একটি বিন্দু থেকে চারিদিকে সমভাবে আলো ছড়ায়'
          }
        },
        {
          term: 'Shadow Mapping',
          def: {
            en: 'A technique where the scene is rendered from the light vantage point into a depth texture to determine occluded areas',
            bn: 'আলোর কোণ থেকে একটি ডেপথ টেক্সচার তৈরি করে দৃশ্যের কোন অংশ অন্ধকারে ঢাকা থাকবে তা নির্ধারণের কৌশল'
          }
        },
        {
          term: 'ACES Filmic Tone Mapping',
          def: {
            en: 'Academy Color Encoding System curve that maps high dynamic range HDR light values smoothly into standard monitor [0, 1] range',
            bn: 'উচ্চ ব্রাইটনেসের HDR আলোকে মনিটরের [০, ১] রেঞ্জে সিনেমাটিক রঙের সাথে সংকুচিত করার ফিল্মিক কার্ভ'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'shadow-pipeline',
      text: {
        en: 'The Shadow Map Pipeline & Shadow Acne Elimination',
        bn: 'শ্যাডো ম্যাপ পাইপলাইন ও শ্যাডো অ্যাকনে দূরীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Enabling dynamic silhouettes in Three.js requires 4 coordinated steps. First, turn on renderer depth buffering (renderer.shadowMap.enabled = true). Second, mark the illumination source to cast silhouettes (light.castShadow = true). Third, configure meshes to block light (mesh.castShadow = true). Fourth, allow floors to catch ground projections (floor.receiveShadow = true). Applying a small negative bias (light.shadow.bias = -0.0005) completely eliminates zebra-striped acne artifacts.',
        bn: 'থ্রি.জেএস-এ ডাইনামিক সিলুয়েট চালু করতে ৪টি সমন্বিত ধাপ দরকার। প্রথমত, রেন্ডারারে ডেপথ বাফারিং সক্রিয় করুন (renderer.shadowMap.enabled = true)। দ্বিতীয়ত, আলোকে সিলুয়েট ফেলতে দিন (light.castShadow = true)। তৃতীয়ত, অবজেক্টে আলো আটকাতে নির্দেশ দিন (mesh.castShadow = true)। চতুর্থত, মেঝেতে প্রজেকশন ধরতে দিন (floor.receiveShadow = true)। সামান্য নেগেটিভ বায়াস (light.shadow.bias = -0.0005) প্রয়োগ করলে ডোরাকাটা অ্যাকনে ত্রুটি চিরতরে দূর হয়ে যায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Shadow Map Algorithms Comparison',
        bn: 'শ্যাডো ম্যাপ অ্যালগরিদমের তুলনা'
      },
      head: [
        { en: 'Property', bn: 'বৈশিষ্ট্য' },
        { en: 'BasicShadowMap', bn: 'বেসিক শ্যাডো ম্যাপ' },
        { en: 'PCFSoftShadowMap', bn: 'পিসিএফ সফট শ্যাডো ম্যাপ' }
      ],
      rows: [
        [
          { en: 'Edge Quality', bn: 'ছাঁয়ার ধারের মান' },
          { en: 'Jagged, hard, pixelated stair-step borders', bn: 'অতিরিক্ত কর্কশ ও পিক্সেলেটেড ধার' },
          { en: 'Smoothly filtered soft penumbra edges via percentage-closer filtering', bn: 'মসৃণ ফিল্টারিংয়ের মাধ্যমে চমৎকার নরম ও বাস্তবসম্মত ধার' }
        ],
        [
          { en: 'GPU Fragment Cost', bn: 'জিপিউ প্রসেসিং খরচ' },
          { en: 'Ultra-fast; single depth texture sample per fragment', bn: 'অত্যন্ত দ্রুত; প্রতি পিক্সেলে মাত্র একটি ডেপথ স্যাম্পল' },
          { en: 'Balanced; performs multi-tap dithering across neighboring depth texels', bn: 'ব্যালেন্সড; সংলগ্ন টেক্সেলগুলোতে মাল্টি-ট্যাপ ডিথারিং প্রয়োগ করে' }
        ],
        [
          { en: 'Production Readiness', bn: 'প্রোডাকশন উপযোগিতা' },
          { en: 'Unacceptable for modern websites; looks low-budget', bn: 'আধুনিক ওয়েবসাইটের জন্য মানসম্মত নয়' },
          { en: 'Industry gold standard for Three.js web applications', bn: 'আধুনিক থ্রি.জেএস ওয়েব অ্যাপ্লিকেশনের স্বীকৃত স্ট্যান্ডার্ড' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Light Decay, Shadow VRAM & ACES Tone Mapping',
        bn: 'চালনাযোগ্য সিমুলেশন: লাইট ডিকে, শ্যাডো মেমোরি ও এসিইএস টোন ম্যাপিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script computes physical light decay across distances, calculates the VRAM memory footprint of shadow maps, and applies the ACES filmic tone mapping compression curve:',
        bn: 'নিচের স্ক্রিপ্টটি দূরত্বের সাথে আলোর ক্ষয়, শ্যাডো ম্যাপের মেমোরি খরচ এবং এসিইএস ফিল্মিক টোন ম্যাপিং কার্ভের হিসাব প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'three-lights-sim',
      lang: 'javascript',
      code: `// Light Attenuation, Shadow Map VRAM & ACES Filmic Tone Mapping Simulator

// Physically based quadratic decay: I(d) = I0 / (1 + decay * d^2)
function calculateLightIntensity(i0, distance, decay = 2) {
  return i0 / (1 + decay * Math.pow(distance, 2));
}

// ACES Filmic Tone Mapping curve approximation: maps HDR input [0, inf) to LDR [0, 1]
function acesFilmicToneMapping(x) {
  const a = 2.51;
  const b = 0.03;
  const c = 2.43;
  const d = 0.59;
  const e = 0.14;
  return Math.min(1.0, Math.max(0.0, (x * (a * x + b)) / (x * (c * x + d) + e)));
}

// Shadow Map Memory calculation
function calculateShadowMapMemoryMB(resolution, isCubeMap = false) {
  const bytesPerPixel = 4; // 32-bit float depth texture
  const faces = isCubeMap ? 6 : 1;
  const totalBytes = resolution * resolution * bytesPerPixel * faces;
  return totalBytes / (1024 * 1024);
}

const sourceIntensity = 100.0;
const intensityAt1m = calculateLightIntensity(sourceIntensity, 1.0);
const intensityAt4m = calculateLightIntensity(sourceIntensity, 4.0);

const directionalShadowMB = calculateShadowMapMemoryMB(2048, false);
const pointLightShadowMB = calculateShadowMapMemoryMB(1024, true);

// Tone mapping an overexposed HDR highlight (value = 4.0)
const mappedHighlight = acesFilmicToneMapping(4.0);

console.log('Light intensity at 1 meter distance in lux units:', Number(intensityAt1m.toFixed(2)));
// -> Light intensity at 1 meter distance in lux units: 33.33

console.log('Light intensity at 4 meter distance following inverse square decay:', Number(intensityAt4m.toFixed(2)));
// -> Light intensity at 4 meter distance following inverse square decay: 3.03

console.log('VRAM memory consumption for 2048x2048 DirectionalLight shadow map in MB:', directionalShadowMB);
// -> VRAM memory consumption for 2048x2048 DirectionalLight shadow map in MB: 16

console.log('VRAM memory consumption for 1024x1024 PointLight 6-sided cubemap shadow in MB:', pointLightShadowMB);
// -> VRAM memory consumption for 1024x1024 PointLight 6-sided cubemap shadow in MB: 24

console.log('Tone-mapped LDR value for HDR highlight intensity 4.0 using ACES curve:', Number(mappedHighlight.toFixed(3)));
// -> Tone-mapped LDR value for HDR highlight intensity 4.0 using ACES curve: 0.973`,
      caption: {
        en: 'Figure 4: Light drops from 33.33 to 3.03 across 4m, 2048x2048 shadow consumes 16 MB, and 4.0 HDR highlight maps to 0.973',
        bn: 'চিত্র ৪: আলো ৩৩.৩৩ থেকে ৩.০৩ এ হ্রাস, শ্যাডো মেমোরি ১৬ এমবি এবং ৪.০ উজ্জ্বলতা এসিইএসে ০.৯৭৩ এ রূপান্তর'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Rules for Three.js Lighting and Shadows',
        bn: 'থ্রি.জেএস লাইটিং ও শ্যাডোর ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Maintain high visual quality and 60FPS frame rates with these 4 lighting rules:',
        bn: '৬০ এফপিএস ফ্রেম রেট ও চমৎকার ভিজ্যুয়ালের জন্য এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Set PCFSoftShadowMap',
          def: {
            en: 'Always configure renderer.shadowMap.type = THREE.PCFSoftShadowMap for natural soft shadow boundaries',
            bn: 'প্রাকৃতিক নরম ছাঁয়া পেতে renderer.shadowMap.type = THREE.PCFSoftShadowMap ব্যবহার করুন'
          }
        },
        {
          term: 'Rule 2: Fit Shadow Camera Frustum Tightly',
          def: {
            en: 'Keep light.shadow.camera bounds (top, bottom, left, right) snugly hugging the action area to avoid low shadow density',
            bn: 'শ্যাডো ক্যামেরার সীমানা অবজেক্টের কাছাকাছি রাখুন যাতে পিক্সেল অপচয় না হয়ে নিখুঁত ছাঁয়া তৈরি হয়'
          }
        },
        {
          term: 'Rule 3: Limit Shadow Casting Lights to One or Two',
          def: {
            en: 'Each shadow-casting light forces a complete extra scene render pass on the GPU; never enable castShadow on more than 2 lights',
            bn: 'প্রতিটি শ্যাডো লাইট পুরো সিন পুনরায় রেন্ডার করে; তাই সর্বোচ্চ ২টি লাইটে castShadow সক্রিয় রাখুন'
          }
        },
        {
          term: 'Rule 4: Apply Negative Shadow Bias (-0.0005)',
          def: {
            en: 'Set light.shadow.bias = -0.0005 to instantly eliminate self-shadowing acne artifacts on curved surfaces',
            bn: 'বক্র অবজেক্টের ওপর শ্যাডো অ্যাকনে দূর করতে light.shadow.bias = -0.0005 সেট করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-light-decay-ex',
      kind: 'mcq',
      topic: 'Inverse square light attenuation at distance',
      question: {
        en: 'If a PointLight has an intensity of 100 at origin, what is its intensity at 1 meter with quadratic decay factor 2?',
        bn: 'মূলবিন্দুতে একটি PointLight-এর তীব্রতা ১০০ হলে, ২ গুণ কোয়াড্রেটিক ডিকে সহ ১ মিটার দূরত্বে এর তীব্রতা কত?'
      },
      options: [
        {
          en: '33.33 lux (100 / (1 + 2 * 1^2))',
          bn: '৩৩.৩৩ লাক্স (১০০ / (১ + ২ * ১^২))'
        },
        {
          en: '100.00 lux (no decay)',
          bn: '১০০.০০ লাক্স (কোনো ক্ষয় নেই)'
        },
        {
          en: '50.00 lux (linear half decay)',
          bn: '৫০.০০ লাক্স (অর্ধেক ক্ষয়)'
        },
        {
          en: '0.00 lux (total darkness)',
          bn: '০.০০ লাক্স (সম্পূর্ণ অন্ধকার)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Evaluate 100 / (1 + 2 * 1).',
        bn: '১০০ / (১ + ২ * ১) এর মান বের করুন।'
      },
      explanation: {
        en: 'Calculating the attenuation gives 100 divided by (1 + 2) which equals 33.33 lux.',
        bn: 'আলোর তীব্রতা গণনা করলে ১০০ ভাগ (১ + ২) এর মান আসে ৩৩.৩৩ লাক্স।'
      }
    },
    {
      id: 'threejs-shadow-bias-ex',
      kind: 'mcq',
      topic: 'Eliminating shadow acne artifacts',
      question: {
        en: 'What setting effectively eliminates the striped visual bug known as shadow acne in Three.js?',
        bn: 'থ্রি.জেএস-এ শ্যাডো অ্যাকনে বা ডোরাকাটা ছাঁয়ার ত্রুটি দূর করতে কোন সেটিংটি কার্যকর?'
      },
      options: [
        {
          en: 'Assigning a small negative bias such as light.shadow.bias = -0.0005',
          bn: 'সামান্য নেগেটিভ বায়াস যেমন light.shadow.bias = -0.0005 প্রয়োগ করা'
        },
        {
          en: 'Deleting the shadow camera completely',
          bn: 'শ্যাডো ক্যামেরা সম্পূর্ণ মুছে ফেলা'
        },
        {
          en: 'Increasing browser zoom to 200 percent',
          bn: 'ব্রাউজার জুম ২০০ শতাংশে বাড়ানো'
        },
        {
          en: 'Disabling hardware GPU acceleration',
          bn: 'হার্ডওয়্যার জিপিউ অ্যাকসিলারেশন বন্ধ করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Negative bias offsets depth comparison.',
        bn: 'নেগেটিভ বায়াস ডেপথ তুলনার দূরত্বে সামঞ্জস্য আনে।'
      },
      explanation: {
        en: 'Applying light.shadow.bias = -0.0005 shifts depth comparison slightly back, preventing curved triangles from erroneously shadowing their own surface.',
        bn: 'light.shadow.bias = -0.0005 সেট করলে পৃষ্ঠের সামান্য পেছনের সাথে তুলনা হয়, ফলে অবজেক্ট নিজেই নিজের ওপর অসাবধানতাবশত ছাঁয়া ফেলে না।'
      }
    },
    {
      id: 'threejs-shadowmap-vram-ex',
      kind: 'mcq',
      topic: 'VRAM footprint of a 2048x2048 shadow map',
      question: {
        en: 'How much GPU VRAM does a 2048x2048 32-bit float shadow depth map consume?',
        bn: 'একটি ২০৪৮x২০৪৮ আকারের ৩২-বিট ফ্লোট শ্যাডো ডেপথ ম্যাপ কতটুকু জিপিউ মেমোরি দখল করে?'
      },
      options: [
        {
          en: '16 MB (2048 * 2048 * 4 bytes)',
          bn: '১৬ মেগাবাইট (২০৪৮ * ২০৪৮ * ৪ বাইট)'
        },
        {
          en: '1 MB (compressed JPEG)',
          bn: '১ মেগাবাইট (জেপিইজি ফাইল)'
        },
        {
          en: '256 MB (uncompressed texture)',
          bn: '২৫৬ মেগাবাইট'
        },
        {
          en: '0 MB (stored in CPU RAM)',
          bn: '০ মেগাবাইট'
        }
      ],
      answer: 0,
      hint: {
        en: '2048 * 2048 * 4 bytes divided by (1024 * 1024).',
        bn: '২০৪৮ * ২০৪৮ * ৪ বাইট ভাগ (১০২৪ * ১০২৪)।'
      },
      explanation: {
        en: '2048 * 2048 * 4 bytes = 16,777,216 bytes = exactly 16 MB of dedicated GPU memory.',
        bn: '২০৪৮ * ২০৪৮ * ৪ বাইট = ১৬,৭৭৭,২১৬ বাইট = ঠিক ১৬ মেগাবাইট জিপিউ মেমোরি।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-lights-shadows',
    title: {
      en: 'Lights, Shadows & Tone Mapping Architecture Quiz',
      bn: 'লাইট, শ্যাডো ও টোন ম্যাপিং আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-shadow-acne',
        kind: 'mcq',
        topic: 'Causes of shadow acne artifacts',
        question: {
          en: 'What causes the zebra-striped visual artifact known as shadow acne in 3D WebGL rendering?',
          bn: '3D ওয়েবজিএল রেন্ডারিংয়ে শ্যাডো অ্যাকনে বা ডোরাকাটা ছাঁয়ার ত্রুটি কেন ঘটে?'
        },
        options: [
          {
            en: 'Imprecision in floating-point depth buffer comparisons causing curved surfaces to falsely shadow themselves',
            bn: 'ফ্লোটিং-পয়েন্ট ডেপথ বাফারের সীমাবদ্ধতার কারণে বক্র অবজেক্ট নিজেই নিজের ওপর অসাবধানতাবশত ছাঁয়া ফেলে'
          },
          {
            en: 'The monitor having too low of a refresh rate',
            bn: 'মনিটরের রিফ্রেশ রেট অত্যন্ত কম থাকার কারণে'
          },
          {
            en: 'Three.js lacking support for perspective cameras',
            bn: 'থ্রি.জেএস-এ পার্সপেক্টিভ ক্যামেরার সাপোর্ট না থাকার কারণে'
          },
          {
            en: 'Using too many AmbientLights simultaneously',
            bn: 'একসাথে অনেকগুলো AmbientLight ব্যবহার করার ফলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Precision limits of depth textures.',
          bn: 'ডেপথ টেক্সচারের সীমিত সূক্ষ্মতার কথা ভাবুন।'
        },
        explanation: {
          en: 'Finite depth buffer resolution causes quantization errors where surface fragments test as behind themselves; adding shadow bias resolves this.',
          bn: 'ডেপথ বাফারের সীমিত সূক্ষ্মতার কারণে সারফেস নিজেই নিজেকে আড়াল করছে মনে করে; শ্যাডো বায়াস এই দূরত্বের সামঞ্জস্য রক্ষা করে।'
        }
      },
      {
        id: 'q-threejs-tone-mapping',
        kind: 'mcq',
        topic: 'Advantages of ACES filmic tone mapping',
        question: {
          en: 'Why is ACESFilmicToneMapping preferred over LinearToneMapping in modern 3D scenes?',
          bn: 'আধুনিক 3D দৃশ্যে কেন LinearToneMapping-এর চেয়ে ACESFilmicToneMapping বেশি পছন্দের?'
        },
        options: [
          {
            en: 'It smoothly rolls off extreme HDR highlights without harsh white clipping, producing photographic film-like contrast and color richness',
            bn: 'এটি কোনো কর্কশ সাদা ক্লিপিং ছাড়াই তীব্র আলো সংকুচিত করে সিনেমাটিক বৈসাদৃশ্য ও প্রাণবন্ত রঙ তৈরি করে'
          },
          {
            en: 'It completely disables all GPU fragment shaders to save CPU cycles',
            bn: 'এটি সিপিইউ বাঁচাতে সমস্ত ফ্র্যাগমেন্ট শেডার বন্ধ করে দেয়'
          },
          {
            en: 'It enables stereoscopic 3D VR glasses rendering automatically',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ভিআর থ্রিডি চশমার রেন্ডারিং চালু করে'
          },
          {
            en: 'It limits the frame rate to exactly 24 frames per second',
            bn: 'এটি ফ্রেম রেটকে ঠিক ২৪ ফ্রেমে সীমাবদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Cinematic film contrast curve without blown-out highlights.',
          bn: 'সিনেমাটিক ফিল্ম কন্ট্রাস্ট কার্ভ যা অতিরিক্ত উজ্জ্বলতা প্রতিরোধ করে।'
        },
        explanation: {
          en: 'ACES filmic tone mapping mimics Kodak motion picture film response, gracefully desaturating highlights toward white rather than clamping abruptly.',
          bn: 'এসিইএস ফিল্মিক টোন ম্যাপিং হলিউড সিনেমার ফিল্মের মতো অতিরিক্ত আলোকে চমৎকারভাবে ব্লেন্ড করে একটি দৃষ্টিনন্দন রূপ দেয়।'
        }
      },
      {
        id: 'q-threejs-shadow-drawcalls',
        kind: 'mcq',
        topic: 'Performance cost of shadow casting lights',
        question: {
          en: 'Why should you strictly limit the number of lights that have castShadow = true?',
          bn: 'কেন castShadow = true থাকা লাইটের সংখ্যা সীমিত রাখা উচিত?'
        },
        options: [
          {
            en: 'Each shadow-casting light forces the GPU to perform an entire extra scene render pass into its depth map buffer',
            bn: 'প্রতিটি শ্যাডো লাইট জিপিউকে পুরো দৃশ্যটির একটি আলাদা ডেপথ রেন্ডার পাস করতে বাধ্য করে'
          },
          {
            en: 'Because WebGL strictly crashes if more than 3 lights exist in a scene',
            bn: 'কারণ দৃশ্যে ৩টির বেশি লাইট থাকলে ওয়েবজিএল সরাসরি ক্র্যাশ করে'
          },
          {
            en: 'Because shadow-casting lights invert the camera position vector',
            bn: 'কারণ শ্যাডো লাইট ক্যামেরার অবস্থান উল্টো করে দেয়'
          },
          {
            en: 'To prevent JavaScript garbage collection memory spikes',
            bn: 'জাভাস্ক্রিপ্ট গার্বেজ কালেকশন ওভারহেড এড়াতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Extra render passes per light.',
          bn: 'প্রতিটি লাইটের জন্য আলাদা রেন্ডার পাসের চাপ।'
        },
        explanation: {
          en: 'A scene with 3 shadow-casting directional lights requires 4 full render passes per frame (3 shadow maps + 1 main camera), multiplying draw calls.',
          bn: '৩টি শ্যাডো লাইট থাকলে প্রতি ফ্রেমে ৪টি পূর্ণ রেন্ডার পাস (৩টি শ্যাডো ম্যাপ + ১টি মূল ক্যামেরা) চালাতে হয়, যা জিপিউর ওপর প্রচণ্ড চাপ তৈরি করে।'
        }
      },
      {
        id: 'q-threejs-ambient-shadows',
        kind: 'mcq',
        topic: 'AmbientLight capabilities and shadows',
        question: {
          en: 'Does an AmbientLight cast shadows in Three.js?',
          bn: 'থ্রি.জেএস-এ AmbientLight কি ছাঁয়া ফেলতে পারে?'
        },
        options: [
          {
            en: 'No; AmbientLight illuminates all surfaces equally from all directions without origin, so it cannot cast shadows',
            bn: 'না; AmbientLight কোনো নির্দিষ্ট উৎস ছাড়া সবদিকে সমান আলো দেয়, তাই এটি কোনো ছাঁয়া ফেলতে পারে না'
          },
          {
            en: 'Yes; but only if set to pure white color (0xffffff)',
            bn: 'হ্যাঁ; তবে কেবল যদি এর রঙ সম্পূর্ণ সাদা (0xffffff) হয়'
          },
          {
            en: 'Yes; but only when using an OrthographicCamera',
            bn: 'হ্যাঁ; তবে কেবল অর্থোগ্রাফিক ক্যামেরা ব্যবহার করলে'
          },
          {
            en: 'Yes; it produces the sharpest directional shadows available',
            bn: 'হ্যাঁ; এটি সবচেয়ে ধারালো ছাঁয়া তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Omnidirectional fill light with no single origin.',
          bn: 'কোনো নির্দিষ্ট দিক বা উৎস ছাড়া সর্বব্যাপী মৃদু আলো।'
        },
        explanation: {
          en: 'AmbientLight has no spatial position or directional ray vector, meaning no depth map or occlusion can be calculated.',
          bn: 'অ্যাম্বিয়েন্ট লাইটের কোনো নির্দিষ্ট অবস্থান বা রশ্মির দিক থাকে না, ফলে এর কোনো ডেপথ ম্যাপ তৈরি করা সম্ভব নয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'animation-loop-and-clock',
    title: {
      en: 'The 60FPS Animation Loop, Delta Time & Quaternions — Smooth Frame Rates',
      bn: '৬০ এফপিএস অ্যানিমেশন লুপ, ডেল্টা টাইম ও কোয়াটারনিয়ন — স্মুথ ফ্রেম রেট'
    }
  }
};
