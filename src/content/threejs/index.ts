import type { Hub } from '../../lib/types';
import { SceneCameraRendererLesson } from './lessons/scene-camera-renderer';
import { GeometriesAndMeshesLesson } from './lessons/geometries-and-meshes';
import { MaterialsAndTexturesLesson } from './lessons/materials-and-textures';
import { LightsAndShadowsLesson } from './lessons/lights-and-shadows';
import { AnimationLoopAndClockLesson } from './lessons/animation-loop-and-clock';
import { ParticlesAndInstancingLesson } from './lessons/particles-and-instancing';
import { PostProcessingAndEffectsLesson } from './lessons/post-processing-and-effects';
import { The3DShowcaseCapstoneLesson } from './lessons/the-3d-showcase-capstone';

export const threejsHub: Hub = {
  slug: 'threejs',
  name: 'Three.js',
  icon: '🌐',
  tagline: {
    en: 'High-performance 3D graphics, WebGL rendering, PBR physically based materials, shaders, and interactive web experiences.',
    bn: 'উচ্চগতির 3D ওয়েব গ্রাফিক্স, ওয়েবজিএল রেন্ডারিং, পিবিআর ফিজিক্যালি বেসড ম্যাটেরিয়াল, শেডার্স এবং ইন্টারঅ্যাক্টিভ ওয়েব অভিজ্ঞতা।'
  },
  intro: {
    en: 'Three.js is the undisputed industry standard for rendering hardware-accelerated 3D graphics directly inside modern web browsers without plugins. By encapsulating raw WebGL and WebGPU pipelines behind an intuitive scene graph, Three.js empowers developers to craft breathtaking virtual worlds, interactive e-commerce product configurators, data visualizations, and game environments. This track guides you from foundational scenes, cameras, and buffer geometries to photorealistic PBR lighting, 60FPS animation loops, 100,000-particle instancing, cinematic post-processing bloom, and production-ready GLTF / DRACO asset delivery pipelines.',
    bn: 'কোনো প্লাগইন ছাড়াই আধুনিক ওয়েব ব্রাউজারে হার্ডওয়্যার-ত্বরান্বিত 3D গ্রাফিক্স রেন্ডার করার জন্য থ্রি.জেএস (Three.js) হলো আন্তর্জাতিকভাবে স্বীকৃত স্ট্যান্ডার্ড। জটিল ওয়েবজিএল ও ওয়েবিজিপিউ কোডকে একটি চমৎকার সিন গ্রাফে রূপান্তর করে এটি ভার্চুয়াল জগত, ইন্টারঅ্যাক্টিভ ই-কমার্স প্রোডাক্ট কাস্টমাইজার এবং আধুনিক গেম তৈরিতে বিপ্লব এনেছে। এই ট্র্যাকে বেসিক সিন, ক্যামেরা ও বাফার-জিওমেট্রি থেকে শুরু করে বাস্তবসম্মত পিবিআর লাইটিং, ৬০ এফপিএস অ্যানিমেশন লুপ, ১,০০,০০০ পার্টিক্যাল হ্যান্ডলিং, সিনেমাটিক ব্লুম পোস্ট-প্রসেসিং এবং অপ্টিমাইজড GLTF ও DRACO অ্যাসেট পাইপলাইনে পূর্ণাঙ্গ দক্ষতা নিশ্চিত করা হয়।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — The 3D Canvas, Geometries & PBR Materials',
        bn: 'ধাপ ১ — 3D ক্যানভাস, জিওমেট্রি ও পিবিআর ম্যাটেরিয়াল'
      },
      items: [
        {
          en: 'Core Trinity: Scene graph hierarchy, PerspectiveCamera projection parameters, and WebGLRenderer canvas setup',
          bn: 'কোর ট্রিনিটি: সিন গ্রাফ কাঠামো, পার্সপেক্টিভ ক্যামেরা প্রজেকশন এবং ওয়েবজিএল রেন্ডারার ক্যানভাস সেটআপ'
        },
        {
          en: 'BufferGeometry architecture: Float32Array typed buffers, vertex normals, UV coordinates, and 60% memory savings via indexed meshes',
          bn: 'বাফার-জিওমেট্রি আর্কিটেকচার: টাইপড বাফার, ভার্টেক্স নরমাল, UV স্থানাঙ্ক এবং ইনডেক্সিংয়ের মাধ্যমে ৬০% মেমোরি সাশ্রয়'
        },
        {
          en: 'Physically Based Rendering (PBR): MeshStandardMaterial, metallic-roughness workflow, normal maps, and strict sRGB color space handling',
          bn: 'পিবিআর ম্যাটেরিয়াল: MeshStandardMaterial, মেটালিক-রাফনেস পাইপলাইন, নরমাল ম্যাপ এবং নিখুঁত sRGB কালার স্পেস'
        },
        {
          en: 'Responsive viewports: Dynamic aspect ratio recalculations, projection matrix updates, and devicePixelRatio clamping',
          bn: 'রেসপনসিভ ভিউপোর্ট: পরিবর্তনশীল অ্যাসপেক্ট রেশিও, প্রজেকশন ম্যাট্রিক্স আপডেট এবং ডিপিআর ক্ল্যাম্পিং'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Lighting, Shadows & High-Performance Animation Loops',
        bn: 'ধাপ ২ — লাইটিং, শ্যাডো ও হাই-পারফরম্যান্স অ্যানিমেশন লুপ'
      },
      items: [
        {
          en: 'Real-time illumination: DirectionalLight sunbeams, PointLight emitters, SpotLight cones, and soft ambient illumination',
          bn: 'রিয়েল-টাইম লাইটিং: সূর্যের মতো ডিরেকশনাল লাইট, পয়েন্ট লাইট, স্পটলাইট কোণ এবং মৃদু অ্যাম্বিয়েন্ট আলো'
        },
        {
          en: 'Shadow mapping mastery: PCFSoftShadowMap configuration, frustum fitting, and eliminating shadow acne via negative bias offsets',
          bn: 'শ্যাডো ম্যাপ দক্ষতা: পিসিএফ সফট শ্যাডো, ক্যামেরার ফ্রাস্টাম টিউনিং এবং নেগেটিভ বায়াস দিয়ে শ্যাডো অ্যাকনে দূরীকরণ'
        },
        {
          en: 'The 60FPS render loop: requestAnimationFrame synchronization, delta time independence across 60Hz/120Hz/240Hz screens, and zero-allocation memory discipline',
          bn: '৬০ এফপিএস রেন্ডার লুপ: requestAnimationFrame সিঙ্ক, ডেল্টা টাইমের মাধ্যমে বিভিন্ন স্ক্রিনে গতি ঠিক রাখা এবং মেমোরি নিয়ন্ত্রণ'
        },
        {
          en: 'Quaternions and rotation: Overcoming Gimbal Lock singularities with 4D hypercomplex numbers and constant-velocity SLERP transitions',
          bn: 'কোয়াটারনিয়ন ও ঘূর্ণন: অয়লার জিম্বল লক দূরীকরণ এবং ৪-মাত্রিক কোয়াটারনিয়ন স্লার্পের মাধ্যমে মসৃণ ঘূর্ণন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Massive Instancing, Post-Processing & Real-World Capstone',
        bn: 'ধাপ ৩ — ম্যাসিভ ইনস্ট্যান্সিং, পোস্ট-প্রসেসিং ও রিয়েল-ওয়ার্ল্ড ক্যাপস্টোন'
      },
      items: [
        {
          en: 'InstancedMesh architecture: Slashing CPU draw calls by 99.9% to render 100,000 active 3D entities locked at 60 frames per second',
          bn: 'ইনস্ট্যান্সড-মেশ আর্কিটেকচার: ড্র-কল ৯৯.৯% কমিয়ে ৬০ এফপিএসে ১,০০,০০০ অবজেক্ট মসৃণভাবে রেন্ডার করা'
        },
        {
          en: 'Cinematic post-processing: EffectComposer pipelines, UnrealBloomPass luminance isolation, and SMAAPass sub-pixel edge antialiasing',
          bn: 'সিনেমাটিক পোস্ট-প্রসেসিং: EffectComposer পাইপলাইন, নিয়ন আনরিয়েল-ব্লুম এবং ধারালো SMAAPass অ্যান্টি-অ্যালাইজিং'
        },
        {
          en: 'Interactive 3D raycasting: Screen-to-NDC coordinate transformation, optical ray intersection detection, and color customization',
          bn: 'ইন্টারঅ্যাক্টিভ রে-কাস্টিং: স্ক্রিন থেকে এনডিসি রূপান্তর, 3D অবজেক্ট ক্লিক শনাক্তকরণ এবং কালার কাস্টমাইজেশন'
        },
        {
          en: 'Production delivery: DRACO geometric compression slashing GLTF payloads by 75%, HDRI environment reflections, and teardown memory cleanup',
          bn: 'প্রোডাকশন ডেলিভারি: DRACO কম্প্রেশন দিয়ে ৭৫% ব্যান্ডউইথ সাশ্রয়, এইচডিআর পরিবেশ প্রতিফলন এবং মেমোরি ক্লিনআপ'
        }
      ]
    }
  ],
  projects: [
    {
      title: {
        en: 'Orbiting Solar System with Shaders & Atmospheric Glow',
        bn: 'শেডার্স ও বায়ুমণ্ডলীয় আভা সমৃদ্ধ 3D সৌরজগত'
      },
      desc: {
        en: 'Scale 3D celestial simulator featuring custom procedural GLSL flares, normal-mapped planetary terrains, elliptical orbital mechanics via delta time, and glowing atmospheric rims using Fresnel shaders.',
        bn: 'কাস্টম জিএলএসএল সান ফ্লেয়ার, নরমাল-ম্যাপ করা গ্রহের ভূপ্রকৃতি, ডেল্টা টাইম চালিত উপবৃত্তাকার কক্ষপথ এবং ফ্রেনেল শেডারের বায়ুমণ্ডল যুক্ত একটি পূর্ণাঙ্গ 3D সৌরজগত।'
      }
    },
    {
      title: {
        en: '100,000-Particle Audio-Reactive Nebula at Solid 60FPS',
        bn: '৬০ এফপিএসে অডিও-রিঅ্যাক্টিভ ১,০০,০০০ পার্টিক্যাল নেবুলা'
      },
      desc: {
        en: 'High-density cosmic nebula leveraging THREE.InstancedMesh and Web Audio API frequency analysis, modulating particle matrix transformations, additive blending, and GPU color buffers in real time.',
        bn: 'ওয়েব অডিও এপিআই এবং THREE.InstancedMesh ব্যবহার করে একটি ১,০০,০০০ পার্টিক্যালের মহাজাগতিক নেবুলা যা মিউজিকের তালে তালে রিয়েল-টাইমে রঙ ও গতি পরিবর্তন করে।'
      }
    },
    {
      title: {
        en: 'Production 3D Product Configurator with DRACO GLTF & Raycasting',
        bn: 'DRACO GLTF ও রে-কাস্টিং সমৃদ্ধ প্রোডাকশন 3D প্রোডাক্ট কনফিগারার'
      },
      desc: {
        en: 'Commercial-grade interactive 3D sneaker showcase featuring DRACO-compressed GLTF models, HDRI image-based lighting, mouse Raycasting hotspot toggles, and seamless camera interpolations.',
        bn: 'DRACO-সংকুচিত GLTF মডেল, এইচডিআরআই লাইটিং, মাউস রে-কাস্টিং এবং মসৃণ ক্যামেরা ইন্টারপোলেশন সমৃদ্ধ একটি বাণিজ্যিক মানের জুতো কনফিগারেশন প্ল্যাটফর্ম।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always scale object motion and rotation by delta time (clock.getDelta()) to guarantee identical speeds across 60Hz, 120Hz, and 240Hz monitors.',
      bn: 'ঘূর্ণন বা স্থানে সরাসরি কোনো মান যোগ না করে ডেল্টা টাইম (clock.getDelta()) দিয়ে গুণ করুন যাতে ৬০, ১২০ বা ২৪০ হার্জ স্ক্রিনে অ্যানিমেশনের গতি সমান থাকে।'
    },
    {
      en: 'Explicitly invoke geometry.dispose(), material.dispose(), and texture.dispose() because JavaScript garbage collection cannot clean WebGL GPU VRAM.',
      bn: 'জাভাস্ক্রিপ্ট জিপিউ মেমোরি স্বয়ংক্রিয়ভাবে খালি করতে পারে না; মেমোরি লিক রোধে অবজেক্ট মোছার সময় অবশ্যই .dispose() কল করুন।'
    },
    {
      en: 'Clamp device pixel ratio using Math.min(window.devicePixelRatio, 2) when calling renderer.setPixelRatio to prevent extreme mobile GPU fill-rate thermal throttling.',
      bn: 'মোবাইল স্ক্রিনে অতিরিক্ত রেন্ডারিং চাপ কমাতে renderer.setPixelRatio-তে Math.min(window.devicePixelRatio, 2) ব্যবহার করে ডিপিআর সর্বোচ্চ ২ এ সীমাবদ্ধ রাখুন।'
    },
    {
      en: 'Combine thousands of identical geometry meshes into a single THREE.InstancedMesh to eliminate CPU draw call bottlenecks and maintain 60FPS.',
      bn: 'হাজার হাজার অবজেক্টকে আলাদা মেশ হিসেবে তৈরি না করে InstancedMesh ব্যবহার করুন যা একটিমাত্র ড্র-কলে সবকিছু রেন্ডার করে সিপিইউ চাপ ৯৯% কমিয়ে দেয়।'
    },
    {
      en: 'Configure renderer.toneMapping = THREE.ACESFilmicToneMapping and renderer.outputColorSpace = THREE.SRGBColorSpace for photorealistic color response.',
      bn: 'বাস্তবসম্মত সিনেমাটিক রঙের জন্য রেন্ডারারে ACESFilmicToneMapping এবং SRGBColorSpace সেট করুন।'
    },
    {
      en: 'Compress complex 3D GLTF meshes using DRACOLoader decoded on background WebAssembly threads to slash mobile network load times by 75%.',
      bn: 'মোবাইলে দ্রুত লোডিংয়ের জন্য DRACOLoader দিয়ে 3D মডেলের আকার ৭৫% কমিয়ে ব্যাকগ্রাউন্ড ওয়াসম থ্রেডে ডিকোড করান।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the difference between a Draw Call and polygon count, and which usually causes WebGL bottlenecks first?',
        bn: 'ড্র-কল এবং পলিগন সংখ্যার মধ্যে পার্থক্য কী, এবং ওয়েবজিএলে কোনটি সাধারণত আগে পারফরম্যান্স সমস্যা তৈরি করে?'
      },
      a: {
        en: 'A polygon represents a 3D geometric triangle shaded by the GPU, while a draw call is a command issued from the CPU instructing the GPU to draw a batch of triangles. GPUs easily handle millions of polygons per frame, but CPU-GPU state switching makes draw calls the primary bottleneck. Exceeding 1000 draw calls per frame typically causes severe FPS drops, necessitating InstancedMesh or geometry merging.',
        bn: 'পলিগন হলো জিপিউ দ্বারা আঁকা একটি ত্রিমাত্রিক ত্রিভুজ, আর ড্র-কল হলো সিপিইউ থেকে জিপিউতে পাঠানো একটি কমান্ড। জিপিউ লাখ লাখ পলিগন নিমেষেই আঁকতে পারে, কিন্তু সিপিইউ ও জিপিউর যোগাযোগের সীমাবদ্ধতায় ড্র-কলই মূল বাধা হয়ে দাঁড়ায়। ১০০০ এর বেশি ড্র-কল হলে ফ্রেম রেট কমে যায়, তাই InstancedMesh দিয়ে তা একত্রিত করা হয়।'
      }
    },
    {
      q: {
        en: 'Explain why texture color space must be carefully assigned and what happens if an albedo map is left in linear space?',
        bn: 'কেন টেক্সচার কালার স্পেস সুনির্দিষ্ট করা জরুরি এবং অ্যালবেডো ম্যাপকে লিনিয়ার স্পেসে রাখলে কী সমস্যা হয়?'
      },
      a: {
        en: 'Human eyes perceive light non-linearly, so image formats (PNG, JPG) encode color in sRGB space. Shaders perform lighting calculations in linear optical space. If you fail to tag color maps with texture.colorSpace = THREE.SRGBColorSpace, Three.js assumes linear input and skips sRGB-to-linear conversion, resulting in washed-out, milky, and overly bright textures.',
        bn: 'মানুষের চোখ আলো সরলরেখায় দেখে না, তাই সাধারণ ছবি sRGB স্পেসে তৈরি হয়। কিন্তু শেডার গাণিতিক হিসাব করে লিনিয়ার স্পেসে। অ্যালবেডো ম্যাপে SRGBColorSpace না দিলে রঙগুলো রূপান্তর ছাড়াই প্রসেস হয়, যার ফলে দৃশ্যটি অত্যন্ত ফ্যাকাশে ও অবাস্তব সাদাটে দেখায়।'
      }
    },
    {
      q: {
        en: 'What is Gimbal Lock, and how do Quaternions mathematically eliminate it in 3D rotations?',
        bn: 'জিম্বল লক কী এবং ৩D ঘূর্ণনে কোয়াটারনিয়ন কিভাবে এই সমস্যা গাণিতিকভাবে দূর করে?'
      },
      a: {
        en: 'Gimbal Lock occurs in Euler angle systems when a 90-degree pitch causes the roll and yaw axes to become collinear, sacrificing one degree of rotational freedom. Quaternions represent 3D orientations as a 4-dimensional hypercomplex number (x, y, z, w) along a 4D hypersphere, ensuring continuous, non-singular rotation along any arbitrary axis without axis alignment collisions.',
        bn: 'অয়লার সিস্টেমে ৯০ ডিগ্রি পিচে দুটি অক্ষ একই রেখায় চলে এলে একটি ঘূর্ণন অক্ষ হারিয়ে যায়, যাকে জিম্বল লক বলে। কোয়াটারনিয়ন ৪-মাত্রিক হাইপারকমপ্লেক্স সংখ্যা (x, y, z, w) ব্যবহার করে গোলকের ওপর ঘূর্ণন হিসাব করে, ফলে কোনো অবস্থাতেই অক্ষ আটকে যাওয়ার ঘটনা ঘটে না।'
      }
    },
    {
      q: {
        en: 'How does DRACO compression achieve 70-80% file size reduction for 3D meshes without noticeable visual degradation?',
        bn: 'দৃশ্যমান কোনো ক্ষতি ছাড়াই DRACO কম্প্রেশন কিভাবে 3D মডেলের সাইজ ৭০-৮০% কমিয়ে ফেলে?'
      },
      a: {
        en: 'DRACO applies geometric quantization, converting 32-bit floating point vertex positions into compact 14-bit integer values, and uses edgebreaker topological compression to store connectivity between adjacent triangles with minimal bits. The resulting binary stream is decoded in client WebAssembly in milliseconds, saving massive network bandwidth.',
        bn: 'ড্রাকো ৩২-বিট ফ্লোটিং পয়েন্ট ভার্টেক্সকে অত্যন্ত সংকুচিত ১৪-বিট ইন্টিজারে রূপান্তর করে এবং ত্রিভুজগুলোর মধ্যকার সংযোগকে বিশেষ অ্যালগরিদমে সংরক্ষণ করে। ক্লায়েন্টের ব্রাউজারে এটি মাত্র কয়েক মিলি-সেকেন্ডে ডিকোড হয়ে পূর্ণাঙ্গ 3D আকৃতি ধারণ করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Apple Product Launch Pages: Apple utilizes WebGL and Three.js techniques to render high-fidelity 3D iPhone and MacBook chassis, blending ACES tone-mapped physical materials, dynamic reflections, and scroll-linked camera paths.',
      bn: 'অ্যাপল প্রোডাক্ট পেজ: অ্যাপল তাদের ওয়েবসাইটে থ্রি.জেএস ও ওয়েবজিএল দিয়ে বাস্তবসম্মত আইফোন ও ম্যাকবুকের 3D মডেল প্রদর্শন করে যা স্ক্রোলের সাথে সাথে চমৎকার সিনেমাটিক কোণে ঘোরে।'
    },
    {
      en: 'GitHub Global Contribution Globe: GitHub renders a live interactive 3D globe depicting open-source pull requests and commits using instanced point arcs, custom GLSL halo shaders, and raycast city hitboxes.',
      bn: 'গিটহাব গ্লোবাল কন্ট্রিবিউশন গ্লোব: গিটহাব তাদের হোমপেজে একটি লাইভ 3D গ্লোব দেখায় যেখানে বিশ্বজুড়ে ওপেন-সোর্স কোড কমিট ও পিআর কাস্টম শেডার এবং ইনস্ট্যান্সিংয়ের মাধ্যমে প্রদর্শিত হয়।'
    },
    {
      en: 'Bruno Simon 3D Interactive Portfolio: The legendary Awwwards Site of the Year winner turns a personal portfolio into an interactive 3D toy car playground, combining Three.js, Cannon.js rigid body physics, and baked shadow maps.',
      bn: 'ব্রুনো সিমন 3D পোর্টফোলিও: বিশ্বখ্যাত এই পোর্টফোলিওতে একটি খেলনা গাড়ি চালিয়ে পুরো সাইটটি ঘুরে দেখা যায়, যা থ্রি.জেএস, ক্যানন.জেএস ফিজিক্স এবং বেকড শ্যাডোর অপূর্ব মেলবন্ধন।'
    },
    {
      en: 'NASA Eyes on Asteroids: NASA uses WebGL to stream real-time orbital telemetry for tens of thousands of near-Earth asteroids and comets in an interactive, educational 3D browser environment.',
      bn: 'নাসা আইজ অন অ্যাস্টেরয়েডস: নাসা এই ওয়েবজিএল অ্যাপ্লিকেশনের মাধ্যমে পৃথিবীর কাছাকাছি থাকা হাজার হাজার গ্রহাণু ও ধূমকেতুর বাস্তব কক্ষপথ থ্রি.জেএস দিয়ে সাধারণ মানুষের সামনে তুলে ধরে।'
    }
  ],
  lessons: [
    SceneCameraRendererLesson,
    GeometriesAndMeshesLesson,
    MaterialsAndTexturesLesson,
    LightsAndShadowsLesson,
    AnimationLoopAndClockLesson,
    ParticlesAndInstancingLesson,
    PostProcessingAndEffectsLesson,
    The3DShowcaseCapstoneLesson
  ]
};
