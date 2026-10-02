import type { Lesson } from '../../../lib/types';

export const SceneCameraRendererLesson: Lesson = {
  slug: 'scene-camera-renderer',
  tech: 'threejs',
  title: {
    en: 'Scene, Camera & WebGL Renderer — Your First 3D Web Environment',
    bn: 'সিন, ক্যামেরা ও ওয়েবজিএল রেন্ডারার — আপনার প্রথম 3D ওয়েব পরিবেশ'
  },
  summary: {
    en: 'Three.js is a high-level JavaScript 3D library built on top of WebGL and WebGPU. Every application revolves around the fundamental trinity of Scene, Camera, and WebGLRenderer. The Scene acts as a hierarchical container graph holding 3D objects, meshes, and lights. The Camera defines the vantage point and perspective projection of the viewer. The WebGLRenderer calculates mathematical 3D projections and rasterizes them onto an HTML5 canvas via hardware GPU acceleration. Mastering PerspectiveCamera parameters, handling responsive canvas resizing, clamping devicePixelRatio to 2 to prevent mobile GPU thermal throttling, and understanding the Cartesian coordinate system establishes the bedrock for 3D web graphics.',
    bn: 'থ্রি.জেএস (Three.js) হলো একটি শক্তিশালী জাভাস্ক্রিপ্ট 3D লাইব্রেরি যা ওয়েবজিএল (WebGL) এবং ওয়েবিজিপিউ (WebGPU)-এর ওপর ভিত্তি করে তৈরি। প্রতিটি অ্যাপ্লিকেশন সিন, ক্যামেরা এবং ওয়েবজিএল রেন্ডারারের ত্রিমুখী কাঠামোর ওপর প্রতিষ্ঠিত। সিন (Scene) সমস্ত 3D অবজেক্ট, মেশ ও লাইট ধারণ করে। ক্যামেরা (Camera) দর্শকের দেখার অবস্থান ও পার্সপেক্টিভ নির্ধারণ করে। ওয়েবজিএল রেন্ডারার (WebGLRenderer) 3D ডেটাকে প্রসেস করে এইচটিএমএল৫ ক্যানভাসে জিপিউ দিয়ে রেন্ডার করে। পার্সপেক্টিভ ক্যামেরার ফিল্ড অব ভিউ (FOV), রেসপনসিভ ক্যানভাস রিসাইজিং, মোবাইল জিপিউ সুরক্ষিত রাখতে ডিভাইস পিক্সেল রেশিও ২ এ নিয়ন্ত্রণের নিয়মগুলো শেখাই ওয়েব 3D গ্রাফিক্সের প্রথম ধাপ।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Fundamental Trinity of Three.js',
        bn: 'মূল ধারণা: থ্রি.জেএস-এর ত্রিমুখী আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'Raw WebGL requires writing low-level GPU programs called GLSL shaders (OpenGL Shading Language). Without a library, rendering a single colored 3D cube in WebGL requires over 100 lines of boilerplate code. Developers must compile shaders, allocate GPU vertex buffers, and hand-calculate projection matrices. Three.js solves this complexity by providing an elegant object-oriented engine. To construct your first 3D world on the web, you configure three core components: the Scene, the Camera, and the Renderer.',
        bn: 'সরাসরি ওয়েবজিএল কোড লিখতে গেলে জিএলএসএল শেডার (GLSL বা গ্রাফিক্স শেডিং ল্যাঙ্গুয়েজ) ব্যবহার করতে হয়। কোনো ইঞ্জিন ছাড়া সরাসরি ওয়েবজিএল দিয়ে একটি কালার কিউব রেন্ডার করতেও ১০০ লাইনের বেশি কোড লিখতে হয়। ডেভেলপারকে শেডার কম্পাইল করতে হয়, জিপিউ বাফার বানাতে হয় এবং ম্যাট্রিক্সের হিসাব কষতে হয়। থ্রি.জেএস এই জটিলতাকে একটি চমৎকার অবজেক্ট ওরিয়েন্টেড আর্কিটেকচারে রূপান্তর করেছে। ওয়েবে আপনার প্রথম 3D দৃশ্য তৈরি করতে ৩টি মূল উপাদানের সমন্বয় প্রয়োজন: সিন (Scene), ক্যামেরা (Camera) এবং রেন্ডারার (Renderer)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'THREE.Scene',
          def: {
            en: 'The top-level container and scene graph where all 3D meshes, lights, particle systems, and cameras reside',
            bn: 'মূল সিন গ্রাফ এবং ধারক যেখানে সমস্ত 3D মেশ, লাইট, পার্টিক্যাল ও ক্যামেরা অবস্থান করে'
          }
        },
        {
          term: 'THREE.PerspectiveCamera',
          def: {
            en: 'A projection camera that mimics the human eye, causing objects further away to appear smaller on screen',
            bn: 'মানুষের চোখের মতো পার্সপেক্টিভ বিশিষ্ট ক্যামেরা, যার ফলে দূরের বস্তু স্ক্রিনে ছোট এবং কাছের বস্তু বড় দেখায়'
          }
        },
        {
          term: 'THREE.WebGLRenderer',
          def: {
            en: 'The hardware-accelerated GPU graphics engine that projects and rasterizes the 3D scene onto an HTML5 canvas',
            bn: 'হার্ডওয়্যার-ত্বরান্বিত জিপিউ ইঞ্জিন যা সম্পূর্ণ 3D সিনকে একটি এইচটিএমএল৫ ক্যানভাসে রেন্ডার করে'
          }
        },
        {
          term: 'devicePixelRatio Clamping',
          def: {
            en: 'Limiting the renderer pixel density to 2 to avoid wasting GPU fill rate on high-density mobile screens',
            bn: 'মোবাইল স্ক্রিনে জিপিউ রেন্ডারিং ওভারহেড কমাতে রেন্ডারারের পিক্সেল ডেনসিটি সর্বোচ্চ ২ এ সীমাবদ্ধ রাখা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'camera-math',
      text: {
        en: 'Camera Projection Math, Coordinate Systems & Responsiveness',
        bn: 'ক্যামেরা প্রজেকশন গণিত, স্থানাঙ্ক ব্যবস্থা ও রেসপনসিভনেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Three.js uses a right-handed Cartesian coordinate system. The positive X-axis points right, the positive Y-axis points upward, and the positive Z-axis points toward you. When configuring a PerspectiveCamera, four critical parameters define the viewing frustum. These include field of view (FOV in vertical degrees, typically 45 to 75), aspect ratio (width divided by height), near clipping plane (0.1), and far clipping plane (1000). Any vertex outside this range is culled by the GPU.',
        bn: 'থ্রি.জেএস একটি ডানহাতি কার্টেসিয়ান স্থানাঙ্ক ব্যবস্থা অনুসরণ করে। ধনাত্মক X-অক্ষ ডানদিকে, ধনাত্মক Y-অক্ষ উপরের দিকে এবং ধনাত্মক Z-অক্ষ স্ক্রিন থেকে আপনার দিকে থাকে। পার্সপেক্টিভ ক্যামেরা সেটআপের সময় ৪টি প্যারামিটার ফ্রাস্টাম গঠন করে। এর মধ্যে রয়েছে ফিল্ড অব ভিউ (FOV যা সাধারণত ৪৫ থেকে ৭৫ ডিগ্রি), অ্যাসপেক্ট রেশিও (প্রস্থ ভাগ উচ্চতা), নিয়ার প্লেন (0.1) এবং ফার প্লেন (1000)। এই সীমানার বাইরের কোনো অবজেক্ট জিপিউ রেন্ডার করে না।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Three.js Camera Types Comparison',
        bn: 'থ্রি.জেএস ক্যামেরা প্রকারভেদের তুলনা'
      },
      head: [
        { en: 'Feature / Property', bn: 'বৈশিষ্ট্য / প্রপার্টি' },
        { en: 'THREE.PerspectiveCamera', bn: 'পার্সপেক্টিভ ক্যামেরা' },
        { en: 'THREE.OrthographicCamera', bn: 'অর্থোগ্রাফিক ক্যামেরা' }
      ],
      rows: [
        [
          { en: 'Perspective Distortion', bn: 'পার্সপেক্টিভ বিকৃতি' },
          { en: 'Yes; distant objects appear smaller (human eye simulation)', bn: 'হ্যাঁ; দূরের বস্তু ছোট দেখায় (বাস্তব চোখের মতো)' },
          { en: 'No; parallel lines stay parallel regardless of distance', bn: 'না; দূরত্ব নির্বিশেষে সমান্তরাল রেখা সমান্তরাল থাকে' }
        ],
        [
          { en: 'Common Use Cases', bn: 'সাধারণ ব্যবহারের ক্ষেত্র' },
          { en: 'First-person games, realistic 3D showcases, architectural walkthroughs', bn: 'ফার্স্ট-পারসন গেম, রিয়েলিস্টিক প্রোডাক্ট শোকেস, ভার্চুয়াল ট্যুর' },
          { en: 'Isometric games, 2D architectural blueprints, CAD modeling tools', bn: 'আইসোমেট্রিক গেম, 2D ব্লুপ্রিন্ট, সিএডি মডেলিং সফটওয়্যার' }
        ],
        [
          { en: 'Frustum Geometry', bn: 'ফ্রাস্টাম জ্যামিতি' },
          { en: 'Truncated 4-sided pyramid with vanishing point', bn: 'শীর্ষবিন্দুমুখী পিরামিড ফ্রাস্টাম' },
          { en: 'Rectangular cuboid with fixed parallel dimensions', bn: 'স্থির সমান্তরাল আয়তাকার বক্স' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Three.js Viewport Projection & DPR Clamping',
        bn: 'চালনাযোগ্য সিমুলেশন: থ্রি.জেএস ভিউপোর্ট প্রজেকশন ও ডিপিআর ক্ল্যাম্পিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script simulates the mathematical projection pipeline of a Three.js PerspectiveCamera. It also verifies that devicePixelRatio is clamped to 2 to protect mobile GPU battery and frame stability:',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি থ্রি.জেএস পার্সপেক্টিভ ক্যামেরার প্রজেকশন পাইপলাইনের গাণিতিক রূপ চালায়। এটি ব্যাটারি সুরক্ষায় ডিভাইস পিক্সেল রেশিও ২ এ নিয়ন্ত্রণের প্রক্রিয়াটিও যাচাই করে:'
      }
    },
    {
      type: 'code',
      id: 'three-scene-sim',
      lang: 'javascript',
      code: `// Lightweight Simulation of Three.js Scene, Camera & Projection in Node.js

class PerspectiveCameraSimulator {
  constructor(fovDegrees, aspect, near, far) {
    this.fov = fovDegrees;
    this.aspect = aspect;
    this.near = near;
    this.far = far;
  }

  // Simulates perspective projection scaling factor
  calculateFovScale() {
    const fovRad = (this.fov * Math.PI) / 180;
    return 1 / Math.tan(fovRad / 2);
  }

  // Projects a 3D point (x, y, z) onto 2D normalized device coordinates (NDC)
  projectPoint(x, y, z) {
    const fovScale = this.calculateFovScale();
    // Assuming camera at (0, 0, 5) looking at (0, 0, 0)
    const cameraZ = 5 - z;
    const ndcX = (x * fovScale) / (this.aspect * cameraZ);
    const ndcY = (y * fovScale) / cameraZ;
    return {
      x: Number(ndcX.toFixed(3)),
      y: Number(ndcY.toFixed(3)),
      depth: cameraZ
    };
  }
}

// Simulating Three.js Scene setup
const camera = new PerspectiveCameraSimulator(75, 16 / 9, 0.1, 1000);
const projectedTopRight = camera.projectPoint(1, 1, 0); // Cube vertex (1, 1, 0)
const projectedBottomLeft = camera.projectPoint(-1, -1, 0); // Cube vertex (-1, -1, 0)

// Device Pixel Ratio capping simulation
const rawDevicePixelRatio = 3.0; // iPhone 3x retina
const cappedPixelRatio = Math.min(rawDevicePixelRatio, 2.0); // Capped to 2.0 to save 55% GPU fill rate

console.log('Projected 2D NDC X-coordinate for 3D point (1, 1, 0):', projectedTopRight.x);
// -> Projected 2D NDC X-coordinate for 3D point (1, 1, 0): 0.147

console.log('Projected 2D NDC Y-coordinate for 3D point (1, 1, 0):', projectedTopRight.y);
// -> Projected 2D NDC Y-coordinate for 3D point (1, 1, 0): 0.261

console.log('Capped devicePixelRatio to prevent mobile GPU thermal throttling:', cappedPixelRatio);
// -> Capped devicePixelRatio to prevent mobile GPU thermal throttling: 2

console.log('Near clipping plane distance in camera units:', camera.near);
// -> Near clipping plane distance in camera units: 0.1

console.log('Standard PerspectiveCamera Field of View in degrees:', camera.fov);
// -> Standard PerspectiveCamera Field of View in degrees: 75`,
      caption: {
        en: 'Figure 1: Executable projection math calculating NDC coordinates (0.147, 0.261) and capping pixel ratio to 2',
        bn: 'চিত্র ১: এক্সিকিউটেবল প্রজেকশন ম্যাথ যা এনডিসি স্থানাঙ্ক (0.147, 0.261) এবং পিক্সেল রেশিও ২ এ নির্ধারণ করে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Architecture Rules for Three.js Viewports',
        bn: 'থ্রি.জেএস ভিউপোর্টের জন্য ৪টি প্রোডাকশন আর্কিটেকচার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 essential architectural rules when initializing Three.js in production web applications:',
        bn: 'প্রোডাকশন ওয়েব অ্যাপ্লিকেশনে থ্রি.জেএস সেটআপের সময় নিচের ৪টি অপরিহার্য নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Listen for Window Resize',
          def: {
            en: 'Update camera.aspect = window.innerWidth / window.innerHeight, invoke camera.updateProjectionMatrix(), and call renderer.setSize(width, height)',
            bn: 'ক্যামেরা অ্যাসপেক্ট রেশিও আপডেট করুন, camera.updateProjectionMatrix() কল করুন এবং renderer.setSize(width, height) প্রয়োগ করুন'
          }
        },
        {
          term: 'Rule 2: Cap Device Pixel Ratio to 2',
          def: {
            en: 'Never pass raw window.devicePixelRatio directly to renderer.setPixelRatio without Math.min(window.devicePixelRatio, 2) to protect mobile batteries',
            bn: 'মোবাইল ব্যাটারি ও জিপিউ সুরক্ষায় Math.min(window.devicePixelRatio, 2) ব্যবহার করে ডিপিআর সর্বোচ্চ ২ এ সীমাবদ্ধ রাখুন'
          }
        },
        {
          term: 'Rule 3: Set Output Color Space Explicitly',
          def: {
            en: 'Configure renderer.outputColorSpace = THREE.SRGBColorSpace to ensure accurate color and gamma reproduction across all monitors',
            bn: 'সঠিক রঙ ও গামা রিপ্রোডাকশনের জন্য renderer.outputColorSpace = THREE.SRGBColorSpace নিশ্চিত করুন'
          }
        },
        {
          term: 'Rule 4: Avoid Micro Near-Clipping Distances',
          def: {
            en: 'Do not set near to extremely small numbers like 0.0001; keeping near around 0.1 preserves 24-bit depth buffer precision and avoids z-fighting',
            bn: 'নিয়ার প্লেন 0.0001 এর মতো অতি ক্ষুদ্র করবেন না; 0.1 রাখলে ২৪-বিট ডেপথ বাফার সূক্ষ্ম থাকে এবং z-ফাইটিং সমস্যা দূর হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-cam-aspect-ex',
      kind: 'mcq',
      topic: 'Camera aspect ratio calculation during resize',
      question: {
        en: 'What is the correct aspect ratio for a browser window with width 1920 and height 1080?',
        bn: '১৯২০ প্রস্থ এবং ১০৮০ উচ্চতা বিশিষ্ট ব্রাউজার উইন্ডোর সঠিক ক্যামেরা অ্যাসপেক্ট রেশিও কত?'
      },
      options: [
        {
          en: '1.778 (16:9 widescreen)',
          bn: '1.778 (১৬:৯ ওয়াইডস্ক্রিন)'
        },
        {
          en: '0.562 (portrait mobile)',
          bn: '0.562 (পোর্ট্রেট মোবাইল)'
        },
        {
          en: '1.333 (4:3 legacy monitor)',
          bn: '1.333 (৪:৩ পুরনো মনিটর)'
        },
        {
          en: '1.000 (square viewport)',
          bn: '1.000 (বর্গাকার ভিউপোর্ট)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Divide 1920 by 1080.',
        bn: '১৯২০ কে ১০৮০ দিয়ে ভাগ করুন।'
      },
      explanation: {
        en: 'Dividing the width 1920 by height 1080 yields approximately 1.7777, which rounds cleanly to 1.778 for widescreen aspect ratio.',
        bn: '১৯২০ প্রস্থকে ১০৮০ উচ্চতা দিয়ে ভাগ করলে মান আসে ১.৭৭৭৭... যা সংক্ষেপে ১.৭৭৮ হয়।'
      }
    },
    {
      id: 'threejs-dpr-clamp-ex',
      kind: 'mcq',
      topic: 'Clamping device pixel ratio on high density screens',
      question: {
        en: 'On a phone with a devicePixelRatio of 3, what pixel ratio should you pass to renderer.setPixelRatio?',
        bn: 'ডিভাইস পিক্সেল রেশিও ৩ বিশিষ্ট একটি ফোনে renderer.setPixelRatio-তে কোন মানটি দেওয়া উচিত?'
      },
      options: [
        {
          en: '2 (clamped with Math.min to prevent 9x pixel shading overhead)',
          bn: '২ (৯ গুণ অতিরিক্ত পিক্সেল রেন্ডারিং চাপ কমাতে Math.min দিয়ে সীমাবদ্ধ)'
        },
        {
          en: '3 (uncapped raw device pixel ratio)',
          bn: '৩ (কোনো ক্যাপ ছাড়া সরাসরি পিক্সেল রেশিও)'
        },
        {
          en: '0.5 (downscaled low-resolution mode)',
          bn: '০.৫ (কম রেজোলিউশন মোড)'
        },
        {
          en: '10 (extreme super-sampling)',
          bn: '১০ (অতিরিক্ত সুপার-স্যাম্পলিং)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Use Math.min(window.devicePixelRatio, 2).',
        bn: 'Math.min(window.devicePixelRatio, 2) এর কথা ভাবুন।'
      },
      explanation: {
        en: 'Capping pixel ratio at 2 avoids rendering 9 times as many fragments, preserving mobile GPU battery while keeping visuals crisp.',
        bn: 'পিক্সেল রেশিও ২ এ সীমাবদ্ধ রাখলে ৯ গুণ অতিরিক্ত পিক্সেল আঁকার বোঝা থেকে জিপিউ বাঁচে এবং ডিসপ্লেও নিখুঁত থাকে।'
      }
    },
    {
      id: 'threejs-z-axis-ex',
      kind: 'mcq',
      topic: 'Right-handed Cartesian coordinate system axis direction',
      question: {
        en: 'In Three.js, where does an object at position (0, 0, 5) sit relative to an object at the origin (0, 0, 0)?',
        bn: 'থ্রি.জেএস-এ (০, ০, ৫) অবস্থানে থাকা একটি বস্তু মূলবিন্দু (০, ০, ০)-এর তুলনায় কোন দিকে অবস্থিত?'
      },
      options: [
        {
          en: '5 units closer to the camera (along positive Z out of the screen)',
          bn: 'ক্যামেরার দিকে ৫ একক কাছে (স্ক্রিন থেকে বাইরের মুখে ধনাত্মক Z বরাবর)'
        },
        {
          en: '5 units deep into the screen away from the camera',
          bn: 'স্ক্রিনের ভেতরে পেছনের দিকে ৫ একক দূরে'
        },
        {
          en: '5 units upward toward the top edge of the window',
          bn: 'উইন্ডোর উপরের দিকে ৫ একক উপরে'
        },
        {
          en: '5 units horizontally to the left edge',
          bn: 'বামদিকের প্রান্তে ৫ একক দূরে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Positive Z points out of the screen toward the user.',
        bn: 'ধনাত্মক Z স্ক্রিন থেকে বাইরের দিকে ইউজারের মুখে থাকে।'
      },
      explanation: {
        en: 'In a right-handed coordinate system, positive Z points directly out of the screen toward the viewer.',
        bn: 'ডানহাতি স্থানাঙ্ক ব্যবস্থায় ধনাত্মক Z স্ক্রিন থেকে বাইরের দিকে দর্শকের অভিমুখী থাকে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-scene-camera',
    title: {
      en: 'Scene, Camera & Renderer Architecture Quiz',
      bn: 'সিন, ক্যামেরা ও রেন্ডারার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-trinity',
        kind: 'mcq',
        topic: 'The core trinity of Three.js',
        question: {
          en: 'Which 3 components are strictly required to render any 3D scene in Three.js?',
          bn: 'থ্রি.জেএস-এ যেকোনো 3D দৃশ্য প্রদর্শনের জন্য কোন ৩টি উপাদান আবশ্যিক?'
        },
        options: [
          {
            en: 'Scene, Camera, and WebGLRenderer',
            bn: 'Scene, Camera, এবং WebGLRenderer'
          },
          {
            en: 'Mesh, Shader, and Canvas2D',
            bn: 'Mesh, Shader, এবং Canvas2D'
          },
          {
            en: 'Light, Shadow, and TextureLoader',
            bn: 'Light, Shadow, এবং TextureLoader'
          },
          {
            en: 'OrbitControls, Raycaster, and AudioListener',
            bn: 'OrbitControls, Raycaster, এবং AudioListener'
          }
        ],
        answer: 0,
        hint: {
          en: 'Container, eye, and GPU drawing engine.',
          bn: 'ধারক, দেখার চোখ এবং জিপিউ রেন্ডারিং ইঞ্জিন।'
        },
        explanation: {
          en: 'Scene holds the objects, Camera determines the perspective vantage point, and WebGLRenderer executes the GPU draw calls to display pixels on canvas.',
          bn: 'Scene অবজেক্টগুলো ধারণ করে, Camera দেখার দৃষ্টিভঙ্গি ঠিক করে এবং WebGLRenderer ক্যানভাসে জিপিউ দিয়ে পিক্সেল রেন্ডার করে।'
        }
      },
      {
        id: 'q-threejs-dpr',
        kind: 'mcq',
        topic: 'Device pixel ratio capping rationale',
        question: {
          en: 'Why is it recommended to clamp renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))?',
          bn: 'কেন renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)) দিয়ে ক্ল্যাম্প করা বাঞ্ছনীয়?'
        },
        options: [
          {
            en: 'To prevent mobile GPUs from overheating and dropping frames on 3x retina displays that render 9 times the pixels',
            bn: '৩x রেটিনা ডিসপ্লেতে ৯ গুণ পিক্সেল আঁকার চাপ থেকে মোবাইল জিপিউ সুরক্ষিত রাখতে'
          },
          {
            en: 'Because WebGL does not support any pixel ratio greater than 1',
            bn: 'কারণ ওয়েবজিএল ১ এর বেশি কোনো পিক্সেল রেশিও সাপোর্ট করে না'
          },
          {
            en: 'To disable antialiasing across all desktop browsers',
            bn: 'সব ডেস্কটপ ব্রাউজারে অ্যান্টি-অ্যালাইজিং বন্ধ করার জন্য'
          },
          {
            en: 'To force Three.js to run in software rendering mode',
            bn: 'থ্রি.জেএস-কে সফটওয়্যার রেন্ডারিং মোডে চালাতে বাধ্য করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Mobile battery and GPU fill rate limits.',
          bn: 'মোবাইল ব্যাটারি ও জিপিউর রেন্ডারিং ক্ষমতার কথা ভাবুন।'
        },
        explanation: {
          en: 'A pixel ratio of 3 renders 9 times as many pixels as a standard screen, creating severe GPU fill rate bottlenecks with zero noticeable visual improvement over 2.',
          bn: '৩ পিক্সেল রেশিওতে সাধারণ স্ক্রিনের চেয়ে ৯ গুণ বেশি পিক্সেল রেন্ডার করতে হয়, যা ২ এর চেয়ে বেশি কোনো দৃশ্যমান উন্নতি ছাড়াই জিপিউর ওপর প্রচণ্ড চাপ ফেলে।'
        }
      },
      {
        id: 'q-threejs-matrix',
        kind: 'mcq',
        topic: 'Updating projection matrix on resize',
        question: {
          en: 'What method must you call immediately after updating camera.aspect during a window resize?',
          bn: 'উইন্ডো রিসাইজের সময় camera.aspect পরিবর্তনের পর সাথে সাথে কোন মেথডটি কল করতে হবে?'
        },
        options: [
          {
            en: 'camera.updateProjectionMatrix()',
            bn: 'camera.updateProjectionMatrix()'
          },
          {
            en: 'scene.recalculateNormals()',
            bn: 'scene.recalculateNormals()'
          },
          {
            en: 'renderer.compileShader()',
            bn: 'renderer.compileShader()'
          },
          {
            en: 'camera.resetTransform()',
            bn: 'camera.resetTransform()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recalculates the internal 4x4 mathematical projection matrix.',
          bn: 'অভ্যন্তরীণ ৪x৪ প্রজেকশন ম্যাট্রিক্স পুনরায় গণনা করে।'
        },
        explanation: {
          en: 'camera.updateProjectionMatrix() recalculates the internal 4x4 mathematical projection matrix using the new aspect ratio.',
          bn: 'camera.updateProjectionMatrix() নতুন অ্যাসপেক্ট রেশিওর ভিত্তিতে অভ্যন্তরীণ ৪x৪ প্রজেকশন ম্যাট্রিক্স পুনরায় গণনা করে।'
        }
      },
      {
        id: 'q-threejs-coords',
        kind: 'mcq',
        topic: 'Cartesian coordinate system conventions',
        question: {
          en: 'In Three.js standard right-handed Cartesian coordinate system, which direction does the positive Z-axis point?',
          bn: 'থ্রি.জেএস-এর ডানহাতি কার্টেসিয়ান সিস্টেমে ধনাত্মক Z-অক্ষ কোন দিকে নির্দেশ করে?'
        },
        options: [
          {
            en: 'Toward the viewer, out of the screen',
            bn: 'দর্শকের দিকে, স্ক্রিনের বাইরের মুখে'
          },
          {
            en: 'Away from the viewer, deep into the screen',
            bn: 'দর্শকের বিপরীত দিকে, স্ক্রিনের ভেতরের গভীরে'
          },
          {
            en: 'Directly upwards towards the ceiling',
            bn: 'সরাসরি উপরের দিকে'
          },
          {
            en: 'Horizontally to the right',
            bn: 'অনুভূমিকভাবে ডানদিকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Positive Z points out toward you.',
          bn: 'ধনাত্মক Z আপনার দিকে বেরিয়ে আসে।'
        },
        explanation: {
          en: 'In a right-handed system, +X is right, +Y is up, and +Z points out of the screen directly towards the user.',
          bn: 'ডানহাতি ব্যবস্থায় +X ডানে, +Y উপরে এবং +Z স্ক্রিন থেকে সরাসরি ইউজারের দিকে থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'geometries-and-meshes',
    title: {
      en: 'BufferGeometry, Meshes & Vectors — Constructing 3D Shapes',
      bn: 'বাফার-জিওমেট্রি, মেশেস ও ভেক্টর — 3D আকৃতি নির্মাণ'
    }
  }
};
