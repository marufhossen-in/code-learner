import type { Lesson } from '../../../lib/types';

export const The3DShowcaseCapstoneLesson: Lesson = {
  slug: 'the-3d-showcase-capstone',
  tech: 'threejs',
  title: {
    en: 'Interactive 3D Product Showcase & Raycasting — Real-World Capstone',
    bn: 'ইন্টারেক্টিভ 3D প্রোডাক্ট শোকেস ও রে-কাস্টিং — রিয়েল-ওয়ার্ল্ড ক্যাপস্টোন'
  },
  summary: {
    en: 'This capstone integrates every Three.js concept mastered throughout the track into an interactive 3D product showcase. You will architect an end-to-end web 3D experience. Load photorealistic 3D models via GLTFLoader and integrate DRACOLoader to compress geometry by over 75% for fast mobile downloads. Configure high-dynamic-range lighting (HDRI via RGBELoader) and implement mouse-driven Raycasting to detect user clicks on 3D components. Transforming 2D screen coordinates into Normalized Device Coordinates (NDC) allows shooting intersection rays through the scene graph. This completes an interactive product customizer with lifecycle memory cleanup.',
    bn: 'এই ক্যাপস্টোন লেসনে পুরো ট্র্যাকে শেখা সমস্ত থ্রি.জেএস কনসেপ্টকে একত্রিত করে একটি পূর্ণাঙ্গ 3D প্রোডাক্ট শোকেস তৈরি করা হবে। আপনি একটি পূর্ণাঙ্গ ওয়েব 3D আর্কিটেকচার গড়ে তুলবেন। GLTFLoader দিয়ে 3D মডেল লোড করুন এবং মোবাইলে দ্রুত ডাউনলোডের জন্য DRACOLoader দিয়ে ৭৫% এর বেশি মেমোরি সংকুচিত করুন। RGBELoader দিয়ে HDRI আলোর পরিবেশ তৈরি করুন এবং মাউস রে-কাস্টিং (Raycasting) দিয়ে অবজেক্টের ক্লিক শনাক্ত করুন। স্ক্রিনের 2D পয়েন্টকে এনডিসি (NDC) স্পেসে রূপান্তরের মাধ্যমে 3D মডেলে ইন্টারসেকশন শনাক্ত করে কালার কাস্টমাইজেশন ও মেমোরি ক্লিনআপ নিশ্চিত করা হয়েছে।'
  },
  minutes: 40,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Capstone Architecture: End-to-End 3D Web Application',
        bn: 'ক্যাপস্টোন আর্কিটেকচার: পূর্ণাঙ্গ 3D ওয়েব অ্যাপ্লিকেশন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'In high-end e-commerce applications, loading a 3D asset is only the starting point. The application must optimize geometry payload bandwidth and reflect realistic skybox lighting. It must also handle pointer interactions to isolate clicked components, and clean up GPU buffers when users navigate away. The industry standard asset delivery format is GLTF (GL Transmission Format 3D models).',
        bn: 'আধুনিক ই-কমার্স ওয়েবসাইটে একটি 3D মডেল লোড করাই শেষ কথা নয়। মডেলের সাইজ ছোট রাখা এবং চারপাশের পরিবেশের বাস্তবসম্মত প্রতিফলন ঘটানো জরুরি। মাউস ক্লিকে অবজেক্টের বিভিন্ন অংশ আলাদা করা এবং পেজ বদলালে জিপিউ মেমোরি খালি করাও আবশ্যক। এর জন্য গ্রাফিক্সের আন্তর্জাতিক মান GLTF (বা জিএল ট্রান্সমিশন ফরম্যাট 3D মডেল) ফাইল ফরম্যাট ব্যবহৃত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'GLTFLoader & GLB',
          def: {
            en: 'The standard Three.js loader for GL Transmission Format files packaging meshes, materials, hierarchies, and animations',
            bn: 'থ্রি.জেএস-এর স্ট্যান্ডার্ড লোডার যা মেশ, ম্যাটেরিয়াল, স্কেলেটন ও অ্যানিমেশন যুক্ত GLTF ফাইল লোড করে'
          }
        },
        {
          term: 'DRACO Compression',
          def: {
            en: 'Google open-source geometric compression library decoding quantized meshes in WebAssembly, slashing file sizes by 70 to 80 percent',
            bn: 'গুগলের ওপেন-সোর্স কম্প্রেশন লাইব্রেরি যা ওয়েব-অ্যাসেম্বলি দিয়ে 3D মডেলের সাইজ ৭০ থেকে ৮০ শতাংশ পর্যন্ত কমিয়ে দেয়'
          }
        },
        {
          term: 'Raycaster',
          def: {
            en: 'An optical ray originating from the camera through a 2D screen coordinate into 3D world space to detect clicked objects',
            bn: 'ক্যামেরা থেকে স্ক্রিনের মাউস পয়েন্ট বরাবর নিক্ষেপ করা একটি রশ্মি যা 3D অবজেক্টের ক্লিক শনাক্ত করে'
          }
        },
        {
          term: 'Normalized Device Coordinates (NDC)',
          def: {
            en: 'A 2D coordinate space ranging from -1 to +1 across both X and Y axes, independent of pixel screen resolution',
            bn: 'স্ক্রিন রেজোলিউশন নির্বিশেষে উভয় অক্ষে -১ থেকে +১ পর্যন্ত বিস্তৃত একটি সার্বজনীন 2D স্থানাঙ্ক ব্যবস্থা'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'raycasting-math',
      text: {
        en: 'Raycasting Mathematics & Mouse NDC Mapping',
        bn: 'রে-কাস্টিং গণিত ও মাউস এনডিসি রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To detect which 3D mesh the user clicked on their 2D monitor, we map browser mouse pixel coordinates (clientX, clientY) into Normalized Device Coordinates (NDC). In NDC space, (-1, -1) is the bottom-left and (1, 1) is the top-right. The formulas are pointer.x = (e.clientX / width) * 2 - 1 and pointer.y = -(e.clientY / height) * 2 + 1. The raycaster shoots an optical ray from the camera lens through this NDC coordinate, and raycaster.intersectObjects() returns all hit meshes sorted by distance.',
        bn: 'ইউজার স্ক্রিনে কোন 3D মেশে ক্লিক করেছেন তা বুঝতে ব্রাউজারের পিক্সেল মানকে এনডিসি (NDC) স্পেসে রূপান্তর করতে হয়। এনডিসি স্পেসে (-১, -১) হলো নিচে-বামে এবং (১, ১) হলো উপরে-ডানে। এর সূত্র: pointer.x = (e.clientX / width) * 2 - 1 এবং pointer.y = -(e.clientY / height) * 2 + 1। এরপর raycaster.setFromCamera(pointer, camera) দিয়ে একটি রশ্মি ছোড়া হয় এবং raycaster.intersectObjects() নিকটবর্তী সব আঘাতপ্রাপ্ত অবজেক্টের তালিকা রিটার্ন করে।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Standard GLTF vs DRACO-Compressed GLTF Asset Delivery',
        bn: 'সাধারণ GLTF বনাম DRACO-সংকুচিত GLTF অ্যাসেটের তুলনা'
      },
      head: [
        { en: 'Production Metric', bn: 'প্রোডাকশন পরিমাপ' },
        { en: 'Uncompressed GLTF / GLB', bn: 'সাধারণ GLTF / GLB' },
        { en: 'DRACO Compressed GLB', bn: 'DRACO সংকুচিত GLB' }
      ],
      rows: [
        [
          { en: 'Network Download Size', bn: 'ফাইল ডাউনলোড সাইজ' },
          { en: '10 to 30 MB; causes 4-8 second initial loading delays on 4G mobile networks', bn: '১০ থেকে ৩০ মেগাবাইট; ফোরজি মোবাইলে লোড হতে ৪-৮ সেকেন্ড দেরি হয়' },
          { en: '2 to 5 MB; 75% bandwidth reduction for sub-second network downloads', bn: '২ থেকে ৫ মেগাবাইট; ৭৫% কম ব্যান্ডউইথে চোখের পলকে ডাউনলোড হয়' }
        ],
        [
          { en: 'Decompression Engine', bn: 'ডিকম্প্রেশন ইঞ্জিন' },
          { en: 'None; loaded directly as raw buffers into memory', bn: 'প্রয়োজন নেই; সরাসরি বাফার হিসেবে লোড হয়' },
          { en: 'WebAssembly (WASM) multi-threaded decoder running off the main thread', bn: 'ওয়েব-অ্যাসেম্বলি মাল্টি-থ্রেডেড ডিকোডার যা মেইন থ্রেডকে ফ্রি রাখে' }
        ],
        [
          { en: 'Visual Geometric Fidelity', bn: 'ভিজ্যুয়াল গুণমান' },
          { en: '100% full 32-bit floating point precision', bn: '১০০% পূর্ণ ৩২-বিট ফ্লোটিং পয়েন্ট নিখুঁত মান' },
          { en: 'Visually indistinguishable 14-bit quantized positions with zero visual degradation', bn: 'মানুষের চোখে সম্পূর্ণ একই রকম নিখুঁত ১৪-বিট কোয়ান্টাইজড ভার্টেক্স' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Ray-Sphere Intersection Math & DRACO Bandwidth',
        bn: 'চালনাযোগ্য সিমুলেশন: রে-স্ফিয়ার ইন্টারসেকশন গণিত ও DRACO ব্যান্ডউইথ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script implements analytical ray-sphere geometric intersection mathematics and computes real-world DRACO 3D asset compression bandwidth savings:',
        bn: 'নিচের স্ক্রিপ্টটি রে-কাস্টিং ইন্টারসেকশন গণিত প্রয়োগ করে এবং বাস্তব DRACO 3D অ্যাসেট কম্প্রেশনের ব্যান্ডউইথ সাশ্রয় হিসাব করে:'
      }
    },
    {
      type: 'code',
      id: 'three-capstone-sim',
      lang: 'javascript',
      code: `// Three.js Raycaster & DRACO 3D Asset Optimization Simulator

// Ray-Sphere Intersection Math
// Ray equation: P(t) = O + t * D
// Sphere equation: |P - C|^2 = R^2
function intersectRaySphere(rayOrigin, rayDir, sphereCenter, sphereRadius) {
  const ocX = rayOrigin.x - sphereCenter.x;
  const ocY = rayOrigin.y - sphereCenter.y;
  const ocZ = rayOrigin.z - sphereCenter.z;

  const a = rayDir.x * rayDir.x + rayDir.y * rayDir.y + rayDir.z * rayDir.z;
  const b = 2.0 * (ocX * rayDir.x + ocY * rayDir.y + ocZ * rayDir.z);
  const c = (ocX * ocX + ocY * ocY + ocZ * ocZ) - (sphereRadius * sphereRadius);

  const discriminant = b * b - 4 * a * c;
  if (discriminant < 0) return null; // No hit

  const t = (-b - Math.sqrt(discriminant)) / (2.0 * a);
  return {
    hit: true,
    distance: t,
    hitPointZ: rayOrigin.z + t * rayDir.z
  };
}

const cameraOrigin = { x: 0, y: 0, z: 5 };
const rayDirection = { x: 0, y: 0, z: -1 }; // Looking straight ahead toward origin
const modelCenter = { x: 0, y: 0, z: 0 };
const modelRadius = 1.5;

const hitResult = intersectRaySphere(cameraOrigin, rayDirection, modelCenter, modelRadius);

// DRACO 3D Mesh Compression Simulation
const rawGLBSizeBytes = 12500000; // 12.5 MB uncompressed GLB
const dracoCompressedBytes = 2800000; // 2.8 MB DRACO compressed
const compressionRatio = ((rawGLBSizeBytes - dracoCompressedBytes) / rawGLBSizeBytes) * 100;

console.log('Raycaster hit detected on 3D interactive mesh:', hitResult.hit ? 1 : 0);
// -> Raycaster hit detected on 3D interactive mesh: 1

console.log('Distance from camera to mesh hit point in units:', Number(hitResult.distance.toFixed(1)));
// -> Distance from camera to mesh hit point in units: 3.5

console.log('Hit point Z-coordinate in 3D world space:', Number(hitResult.hitPointZ.toFixed(1)));
// -> Hit point Z-coordinate in 3D world space: 1.5

console.log('Raw uncompressed GLB asset size in MB:', rawGLBSizeBytes / (1000 * 1000));
// -> Raw uncompressed GLB asset size in MB: 12.5

console.log('DRACO compressed GLB asset size in MB:', dracoCompressedBytes / (1000 * 1000));
// -> DRACO compressed GLB asset size in MB: 2.8

console.log('Bandwidth savings percentage achieved via DRACO compression:', Number(compressionRatio.toFixed(1)));
// -> Bandwidth savings percentage achieved via DRACO compression: 77.6`,
      caption: {
        en: 'Figure 8: Ray hit detected (1) at distance 3.5 (Z: 1.5), and DRACO slashes GLB asset from 12.5 MB to 2.8 MB (77.6% savings)',
        bn: 'চিত্র ৮: ৩.৫ দূরত্বে (Z: ১.৫) রে হিট শনাক্ত (১), এবং DRACO মডেলে ১২.৫ এমবি থেকে ২.৮ এমবিতে ৭৭.৬% ব্যান্ডউইথ সাশ্রয়'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Deployment Rules for 3D Web Apps',
        bn: '3D ওয়েব অ্যাপের জন্য ৪টি প্রোডাকশন ডিপ্লয়মেন্ট নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 golden rules when launching production 3D web applications:',
        bn: 'প্রোডাকশনে 3D ওয়েব অ্যাপ্লিকেশন প্রকাশের সময় এই ৪টি নিয়ম অবশ্যই মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Use DRACOLoader with WASM Workers',
          def: {
            en: 'Point dracoLoader.setDecoderPath() to static WebAssembly decoders to unpack models off the main JavaScript UI thread',
            bn: 'ইউজার ইন্টারফেস সচল রাখতে dracoLoader.setDecoderPath() দিয়ে ব্যাকগ্রাউন্ড ওয়াসম থ্রেডে মডেল ডিকোড করান'
          }
        },
        {
          term: 'Rule 2: Traverse and Dispose on Component Unmount',
          def: {
            en: 'When a user navigates away, traverse the scene graph: call geometry.dispose(), material.dispose(), and renderer.dispose()',
            bn: 'ব্যবহারকারী পেজ ত্যাগ করলে scene.traverse দিয়ে প্রতিটি জিওমেট্রি, ম্যাটেরিয়াল ও রেন্ডারার মুক্ত করুন'
          }
        },
        {
          term: 'Rule 3: Use RGBELoader for High-Dynamic-Range Lighting',
          def: {
            en: 'Load an HDR environment map (.hdr) and set scene.environment = texture to achieve instant photorealistic reflections',
            bn: 'বাস্তবসম্মত ধাতু ও কাচের প্রতিফলনের জন্য RGBELoader দিয়ে এইচডিআর এনভায়রনমেন্ট ম্যাপ লোড করুন'
          }
        },
        {
          term: 'Rule 4: Throttle Raycaster Calculations',
          def: {
            en: 'Do not execute raycaster.intersectObjects() on every raw mousemove event; throttle or run only on click/hover states',
            bn: 'প্রতিটি mousemove ইভেন্টে রে-কাস্ট করবেন না; ফ্রেম ড্রপ এড়াতে ক্লিক বা ট্রটলিং মেকানিজম ব্যবহার করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-ndc-origin-ex',
      kind: 'mcq',
      topic: 'Normalized Device Coordinates center origin',
      question: {
        en: 'In Three.js raycasting NDC space, what are the coordinates of the exact center of the screen?',
        bn: 'থ্রি.জেএস রে-কাস্টিংয়ে এনডিসি (NDC) স্পেসে স্ক্রিনের ঠিক কেন্দ্রস্থলের স্থানাঙ্ক কত?'
      },
      options: [
        {
          en: '(0, 0)',
          bn: '(০, ০)'
        },
        {
          en: '(1, 1)',
          bn: '(১, ১)'
        },
        {
          en: '(-1, -1)',
          bn: '(-১, -১)'
        },
        {
          en: '(0.5, 0.5)',
          bn: '(০.৫, ০.৫)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The origin is dead center between -1 and +1.',
        bn: '-১ এবং +১ এর ঠিক মাঝামাঝি মূলবিন্দুর কথা ভাবুন।'
      },
      explanation: {
        en: 'NDC ranges from -1 to +1 across both axes; (0, 0) is the center point where rays project straight forward through the camera focal center.',
        bn: 'উভয় অক্ষে -১ থেকে +১ পর্যন্ত বিস্তৃত এনডিসি স্পেসে (০, ০) হলো ঠিক কেন্দ্রস্থল।'
      }
    },
    {
      id: 'threejs-draco-savings-ex',
      kind: 'mcq',
      topic: 'DRACO 3D geometry compression ratio',
      question: {
        en: 'What typical compression savings does Google DRACO deliver on 3D mesh geometry data?',
        bn: '3D মেশ জিওমেট্রিতে গুগল DRACO সাধারণত কী পরিমাণ কম্প্রেশন সাশ্রয় প্রদান করে?'
      },
      options: [
        {
          en: '70 to 80 percent file size reduction',
          bn: '৭০ থেকে ৮০ শতাংশ ফাইল সাইজ হ্রাস'
        },
        {
          en: '1 to 2 percent reduction',
          bn: '১ থেকে ২ শতাংশ হ্রাস'
        },
        {
          en: '0 percent (uncompressed passthrough)',
          bn: '০ শতাংশ'
        },
        {
          en: '99.99 percent (destroys geometry completely)',
          bn: '৯৯.৯৯ শতাংশ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Slashes mesh size by roughly three quarters.',
        bn: 'মডেলের সাইজ প্রায় তিন-চতুর্থাংশ কমিয়ে ফেলে।'
      },
      explanation: {
        en: 'DRACO quantization compresses 32-bit floats into compact integers, reducing raw mesh files by 70 to 80 percent.',
        bn: 'ড্রাকো ৩২-বিট ফ্লোটিং পয়েন্ট ভার্টেক্সকে সংকুচিত করে ৭০ থেকে ৮০ শতাংশ পর্যন্ত ব্যান্ডউইথ বাঁচায়।'
      }
    },
    {
      id: 'threejs-scene-cleanup-ex',
      kind: 'mcq',
      topic: 'Component unmount teardown discipline',
      question: {
        en: 'When a Single Page Application unmounts a Three.js component, what must you do to prevent WebGL GPU memory leaks?',
        bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে 3D কম্পোনেন্ট আনমাউন্ট করার সময় জিপিউ মেমোরি লিক রোধে কী করা আবশ্যক?'
      },
      options: [
        {
          en: 'Traverse the scene graph to invoke .dispose() on all geometries, materials, and textures, and call renderer.dispose()',
          bn: 'সিন ট্রাভার্স করে সমস্ত জিওমেট্রি, ম্যাটেরিয়াল ও টেক্সচারে .dispose() কল করা এবং renderer.dispose() চালানো'
        },
        {
          en: 'Simply set canvas.style.display = "none"',
          bn: 'শুধু canvas.style.display = "none" করে দেওয়া'
        },
        {
          en: 'Increase browser zoom to 150 percent',
          bn: 'ব্রাউজার জুম ১৫০ শতাংশ করা'
        },
        {
          en: 'Nothing; JavaScript automatically frees GPU VRAM buffers',
          bn: 'কিছুই না; জাভাস্ক্রিপ্ট নিজেই জিপিউ মেমোরি মুক্ত করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Explicit disposal of GPU VBO and texture buffers.',
        bn: 'জিপিউ মেমোরি বাফারগুলো ম্যানুয়ালি মুক্ত করার কথা ভাবুন।'
      },
      explanation: {
        en: 'GPU VRAM buffers exist outside the V8 JavaScript garbage collection realm; explicit .dispose() calls are strictly mandatory to avoid crashing the client tab.',
        bn: 'জিপিউ মেমোরি জাভাস্ক্রিপ্ট নিজে পরিষ্কার করতে পারে না; তাই মেমোরি লিক এড়াতে .dispose() কল করা বাধ্যতামূলক।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-showcase-capstone',
    title: {
      en: '3D Production Showcase & Raycasting Quiz',
      bn: '3D প্রোডাকশন শোকেস ও রে-কাস্টিং কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-gltf-format',
        kind: 'mcq',
        topic: 'Why GLTF is the 3D web standard',
        question: {
          en: 'Why is GLTF / GLB considered the industry gold standard file format for 3D web graphics?',
          bn: 'কেন GLTF / GLB ফাইল ফরম্যাটকে ওয়েব 3D গ্রাফিক্সের আন্তর্জাতিক গোল্ড স্ট্যান্ডার্ড বলা হয়?'
        },
        options: [
          {
            en: 'It bundles geometry, PBR materials, textures, animations, and scene hierarchies into an optimized format ready for direct GPU loading',
            bn: 'এটি জিওমেট্রি, পিবিআর ম্যাটেরিয়াল, টেক্সচার ও বোন অ্যানিমেশনকে সরাসরি জিপিউতে লোড হওয়ার উপযোগী আকারে ধারণ করে'
          },
          {
            en: 'Because it was created in 1985 for MS-DOS computers',
            bn: 'কারণ এটি ১৯৮৫ সালে এমএস-ডস কম্পিউটারের জন্য তৈরি হয়েছিল'
          },
          {
            en: 'Because it converts all 3D triangles into 2D JPEG images',
            bn: 'কারণ এটি সমস্ত 3D ত্রিভুজকে 2D জেপিইজি ছবিতে বদলে দেয়'
          },
          {
            en: 'It forces the browser to run Three.js without WebGL',
            bn: 'এটি ব্রাউজারকে ওয়েবজিএল ছাড়াই থ্রি.জেএস চালাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Direct binary GPU buffer layout.',
          bn: 'সরাসরি জিপিউ বাফারে লোড হওয়ার মতো বাইনারি কাঠামোর কথা ভাবুন।'
        },
        explanation: {
          en: 'GLTF minimizes file payload size and runtime processing by storing typed arrays matching WebGL GPU buffer structures.',
          bn: 'জিএলটিএফ ফাইলের আকার ছোট রাখে এবং এর বাইনারি ডেটা সরাসরি ওয়েবজিএল বাফারের সাথে মিলে যায় বলে দ্রুত লোড হয়।'
        }
      },
      {
        id: 'q-threejs-draco',
        kind: 'mcq',
        topic: 'DRACO compression advantages',
        question: {
          en: 'What advantage does integrating DRACOLoader provide when delivering 3D models over the web?',
          bn: 'ওয়েবে 3D মডেল লোড করার সময় DRACOLoader ব্যবহারের প্রধান সুবিধা কোনটি?'
        },
        options: [
          {
            en: 'It compresses 3D mesh geometry data by 70 to 80 percent, dramatically accelerating mobile network load times',
            bn: 'এটি 3D মেশের আকার ৭০ থেকে ৮০ শতাংশ পর্যন্ত কমিয়ে ফেলে, যা মোবাইলে ডাউনলোডের গতি বহুগুণ বাড়িয়ে দেয়'
          },
          {
            en: 'It automatically invents textures for models that lack them',
            bn: 'যে মডেলে টেক্সচার নেই তাতে এটি স্বয়ংক্রিয়ভাবে টেক্সচার বানিয়ে দেয়'
          },
          {
            en: 'It converts PerspectiveCameras into OrthographicCameras',
            bn: 'এটি পার্সপেক্টিভ ক্যামেরাকে অর্থোগ্রাফিক ক্যামেরায় বদলে দেয়'
          },
          {
            en: 'It prevents users from taking screenshots of the website',
            bn: 'এটি ব্যবহারকারীকে ওয়েবসাইটের স্ক্রিনশট নেওয়া থেকে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'WebAssembly mesh decompression slashing bandwidth.',
          bn: 'ওয়েব-অ্যাসেম্বলিতে ডিকোড করে ব্যান্ডউইথ বাঁচানো।'
        },
        explanation: {
          en: 'DRACO applies sophisticated edge-breaker quantization to compress mesh vertices, which are decoded in client WebAssembly in milliseconds.',
          bn: 'ড্রাকো উন্নত কোয়ান্টাইজেশনের মাধ্যমে ভার্টেক্স সাইজ সংকুচিত করে যা ক্লায়েন্টের ওয়েব-অ্যাসেম্বলিতে কয়েক মিলি-সেকেন্ডে ডিকোড হয়।'
        }
      },
      {
        id: 'q-threejs-ndc-formula',
        kind: 'mcq',
        topic: 'Screen to NDC coordinate conversion',
        question: {
          en: 'In Normalized Device Coordinates (NDC) for Three.js raycasting, what is the coordinate of the exact center of the screen?',
          bn: 'থ্রি.জেএস রে-কাস্টিংয়ে এনডিসি (NDC) ব্যবস্থায় স্ক্রিনের ঠিক কেন্দ্রবিন্দুর মান কত?'
        },
        options: [
          {
            en: '(0, 0)',
            bn: '(০, ০)'
          },
          {
            en: '(1, 1)',
            bn: '(১, ১)'
          },
          {
            en: '(-1, -1)',
            bn: '(-১, -১)'
          },
          {
            en: '(100, 100)',
            bn: '(১০০, ১০০)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bisection of -1 and 1 on both axes.',
          bn: 'উভয় অক্ষে -১ ও ১ এর মধ্যবিন্দুর কথা ভাবুন।'
        },
        explanation: {
          en: 'NDC ranges from -1 to +1 along both axes; the origin (0, 0) represents the dead center of the viewport.',
          bn: 'এনডিসি স্পেস উভয় অক্ষে -১ থেকে +১ পর্যন্ত বিস্তৃত; তাই (০, ০) হলো স্ক্রিনের ঠিক কেন্দ্রস্থল।'
        }
      },
      {
        id: 'q-threejs-cleanup',
        kind: 'mcq',
        topic: 'Memory teardown upon component destruction',
        question: {
          en: 'When unmounting a 3D component in single-page applications (React, Vue, Next.js), what must be done to prevent memory leaks?',
          bn: 'সিঙ্গেল পেজ অ্যাপ্লিকেশনে (React, Vue, Next.js) 3D কম্পোনেন্ট আনমাউন্ট করার সময় মেমোরি লিক রোধে কী করা আবশ্যক?'
        },
        options: [
          {
            en: 'Traverse the scene graph to call .dispose() on all geometries, materials, and textures, and call renderer.dispose()',
            bn: 'সিন ট্রাভার্স করে সমস্ত জিওমেট্রি, ম্যাটেরিয়াল ও টেক্সচারে .dispose() কল করা এবং renderer.dispose() চালানো'
          },
          {
            en: 'Simply set canvas.style.display = "none"',
            bn: 'শুধু canvas.style.display = "none" করে দেওয়া'
          },
          {
            en: 'Reload the entire operating system',
            bn: 'সম্পূর্ণ অপারেটিং সিস্টেম রিস্টার্ট করা'
          },
          {
            en: 'Set camera.fov to 0',
            bn: 'ক্যামেরা ফিল্ড অব ভিউ ০ করে দেওয়া'
          }
        ],
        answer: 0,
        hint: {
          en: 'Explicit disposal of GPU buffers.',
          bn: 'জিপিউ বাফারগুলো ম্যানুয়ালি মুক্ত করার কথা ভাবুন।'
        },
        explanation: {
          en: 'WebGL graphics buffers and textures live on the GPU and are not reclaimed by JavaScript garbage collection until explicitly disposed.',
          bn: 'ওয়েবজিএল বাফার ও টেক্সচার জিপিউ মেমোরিতে থাকে; তাই .dispose() না ডাকলে সেগুলো আজীবন মেমোরি দখল করে রাখে।'
        }
      }
    ]
  }
};
