import type { Lesson } from '../../../lib/types';

export const ParticlesAndInstancingLesson: Lesson = {
  slug: 'particles-and-instancing',
  tech: 'threejs',
  title: {
    en: 'Particle Systems, InstancedMesh & Performance Tuning — 100,000 Elements at 60FPS',
    bn: 'পার্টিক্যাল সিস্টেমস, ইনস্ট্যান্সড-মেশ ও পারফরম্যান্স টিউনিং — ৬০ এফপিএসে ১০০,০০০ অবজেক্ট'
  },
  summary: {
    en: 'Rendering complex 3D scenes with thousands of elements quickly hits a performance bottleneck if each element is an independent THREE.Mesh. The bottleneck is not GPU polygon throughput, but CPU-GPU Draw Calls. Every individual mesh requires the CPU to switch WebGL states and issue a separate glDrawElements command. InstancedMesh shatters this limitation by collapsing tens of thousands of identical geometry instances into a single GPU draw call. Driven by an instance matrix buffer, InstancedMesh renders massive crowds with ease. Combined with THREE.Points particle systems, bounding sphere frustum culling, and Level of Detail (LOD) distance meshes, developers can render 100,000 active 3D entities locked at a steady 60FPS.',
    bn: 'হাজার হাজার অবজেক্ট যুক্ত জটিল 3D দৃশ্যে প্রতিটি বস্তুকে আলাদা THREE.Mesh বানালে সিস্টেম প্রচণ্ড স্লো হয়ে পড়ে। এখানে আসল বাধা জিপিউর পলিগন ক্ষমতা নয়, বরং সিপিইউ ও জিপিউর মধ্যকার যোগাযোগ বা "ড্র-কল" (Draw Calls)। প্রতি মেশের জন্য সিপিইউকে আলাদা করে কমান্ড পাঠাতে হয়। InstancedMesh এই সীমাবদ্ধতা দূর করে: এটি হার্ডওয়্যার ইনস্ট্যান্সিংয়ের মাধ্যমে হাজার হাজার অবজেক্টকে মাত্র ১টি একক ড্র-কলে রূপান্তর করে। এর সাথে THREE.Points পার্টিক্যাল সিস্টেম, ফ্রাস্টাম কুলিং এবং লেভেল অব ডিটেইল (LOD)-এর মেলবন্ধনে ৬০ এফপিএসে ১০০,০০০ অবজেক্ট অনায়াসে চালানো সম্ভব।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Draw Call Bottleneck in WebGL',
        bn: 'মূল ধারণা: ওয়েবজিএলে ড্র-কলের পারফরম্যান্স প্রতিবন্ধকতা'
      }
    },
    {
      type: 'visual',
      id: 'callout-flow'
    },
    {
      type: 'para',
      text: {
        en: 'Modern graphics cards can shade millions of vertices per frame. However, the communication link between JavaScript on the CPU and the WebGL driver on the GPU is relatively slow. Every time the renderer encounters a distinct Mesh, it must bind shaders, update transformation matrices, and issue a draw call. Exceeding 1000 draw calls per frame causes CPU overhead to skyrocket, dropping frame rates to 15 or 20 FPS.',
        bn: 'আধুনিক গ্রাফিক্স কার্ড প্রতি ফ্রেমে লাখ লাখ ভার্টেক্স অনায়াসে প্রসেস করতে পারে। কিন্তু সিপিইউতে চলা জাভাস্ক্রিপ্ট এবং জিপিউর ওয়েবজিএল ড্রাইভারের মধ্যকার সংযোগ তুলনামূলক ধীরগতির। প্রতিটি আলাদা মেশের জন্য সিপিইউকে শেডার বাইন্ড করতে হয়, রূপান্তর ম্যাট্রিক্স আপডেট করতে হয় এবং ড্র-কল ইস্যু করতে হয়। প্রতি ফ্রেমে ড্র-কল ১০০০ ছাড়িয়ে গেলে সিপিইউর ওপর প্রচণ্ড চাপ পড়ে এবং ফ্রেম রেট কমে ১৫ বা ২০ এফপিএসে নেমে আসে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Draw Call',
          def: {
            en: 'An individual command sent from the CPU to the GPU instructing it to render a specific batch of geometry triangles',
            bn: 'সিপিইউ থেকে জিপিউতে পাঠানো একটি একক কমান্ড যা একদল ভার্টেক্স বা ত্রিভুজ আঁকার নির্দেশ দেয়'
          }
        },
        {
          term: 'THREE.InstancedMesh',
          def: {
            en: 'A high-performance object that renders thousands of instances of a single geometry and material within a single draw call',
            bn: 'একটি উচ্চগতির অবজেক্ট যা একটিমাত্র ড্র-কলে একই জিওমেট্রি ও ম্যাটেরিয়ালের হাজার হাজার ক্লোন রেন্ডার করে'
          }
        },
        {
          term: 'Instance Matrix Buffer',
          def: {
            en: 'A continuous Float32Array storing a 4x4 transformation matrix (position, rotation, scale) for every active instance',
            bn: 'একটি অবিচ্ছিন্ন Float32Array বাফার যা প্রতিটি ইনস্ট্যান্সের ৪x৪ রূপান্তর ম্যাট্রিক্স সংরক্ষণ করে'
          }
        },
        {
          term: 'Frustum Culling',
          def: {
            en: 'Skipping the rendering of objects whose 3D bounding spheres sit completely outside the camera field of view',
            bn: 'ক্যামেরার দৃষ্টিসীমার বাইরে থাকা অবজেক্টগুলোকে শনাক্ত করে রেন্ডারিং থেকে বাদ দিয়ে গতি বাড়ানো'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'instancing-architecture',
      text: {
        en: 'InstancedMesh Implementation & Particle Systems',
        bn: 'ইনস্ট্যান্সড-মেশ বাস্তবায়ন ও পার্টিক্যাল সিস্টেম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To use InstancedMesh, create the shared geometry and material once: const instanced = new THREE.InstancedMesh(geometry, material, 10000). To place each instance, create a single reusable dummy Object3D, set its position/rotation/scale, invoke dummy.updateMatrix(), and save it via instanced.setMatrixAt(i, dummy.matrix). After updating transformations, flag instanced.instanceMatrix.needsUpdate = true. For ambient dust, glowing stars, or floating sparks, THREE.Points provides point-sprite rendering where each vertex in a geometry becomes an independent glowing billboard facing the camera.',
        bn: 'InstancedMesh ব্যবহারের জন্য প্রথমে একটি সাধারণ জিওমেট্রি ও ম্যাটেরিয়াল তৈরি করতে হয়: const instanced = new THREE.InstancedMesh(geometry, material, 10000)। এরপর প্রতিটি ইনস্ট্যান্সের অবস্থান নির্ধারণ করতে একটি ডামি Object3D ব্যবহার করে dummy.updateMatrix() কল করে instanced.setMatrixAt(i, dummy.matrix) দিয়ে সেট করতে হয়। পরিবর্তন শেষে instanced.instanceMatrix.needsUpdate = true দিতে হবে। ধূলিকণা বা জ্বলজ্বলে তারার জন্য THREE.Points ব্যবহার করা হয় যেখানে প্রতিটি ভার্টেক্স একটি ক্যামেরামুখী পার্টিক্যালে পরিণত হয়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Individual Meshes vs InstancedMesh Architecture',
        bn: 'আলাদা মেশ বনাম ইনস্ট্যান্সড-মেশ আর্কিটেকচারের তুলনা'
      },
      head: [
        { en: 'Metric', bn: 'পরিমাপ' },
        { en: '10,000 Individual Meshes', bn: '১০,০০০ আলাদা মেশ' },
        { en: '1 InstancedMesh (10,000 instances)', bn: '১টি ইনস্ট্যান্সড-মেশ (১০,০০০ ইনস্ট্যান্স)' }
      ],
      rows: [
        [
          { en: 'GPU Draw Calls', bn: 'জিপিউ ড্র-কল সংখ্যা' },
          { en: '10,000 discrete draw calls per frame; severe CPU bottleneck', bn: 'প্রতি ফ্রেমে ১০,০০০টি আলাদা ড্র-কল; তীব্র সিপিইউ বটলনেক' },
          { en: 'Exactly 1 draw call per frame; 99.99% reduction', bn: 'প্রতি ফ্রেমে মাত্র ১টি ড্র-কল; ৯৯.৯৯% ড্র-কল সাশ্রয়' }
        ],
        [
          { en: 'CPU Frame Budget Consumption', bn: 'সিপিইউ বাজেট খরচ' },
          { en: 'Over 25ms per frame; frame rate craters to 15-20 FPS', bn: '২৫ মিলি-সেকেন্ডের বেশি সময় নেয়; ফ্রেম রেট কমে ১৫-২০ হয়' },
          { en: 'Under 0.05ms per frame; rock-solid 60 FPS / 120 FPS', bn: '০.০৫ মিলি-সেকেন্ডের কম সময় নেয়; নিখুঁত ৬০ ও ১২০ এফপিএস' }
        ],
        [
          { en: 'VRAM Memory Layout', bn: 'মেমোরি কাঠামো' },
          { en: 'Scattered JS heap pointers for 10,000 scene graph nodes', bn: '১০,০০০ সিন নোডের জন্য মেমোরিতে ছড়ানো-ছিটানো অবজেক্ট' },
          { en: 'Single contiguous 16-float matrix buffer mapped to GPU VBO', bn: 'জিপিউর জন্য একটি অবিচ্ছিন্ন ১৬-ফ্লোটের ম্যাট্রিক্স বাফার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Draw Call Overhead & CPU Budget Comparison',
        bn: 'চালনাযোগ্য সিমুলেশন: ড্র-কল ওভারহেড ও সিপিইউ বাজেট তুলনা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script simulates the CPU overhead difference between 10000 individual meshes versus a single InstancedMesh within a 16.66ms frame budget:',
        bn: 'নিচের স্ক্রিপ্টটি ১৬.৬৬ মিলি-সেকেন্ড ফ্রেম বাজেটে ১০০০০ আলাদা মেশ বনাম ১টি InstancedMesh এর সিপিইউ ওভারহেডের পার্থক্য প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'three-particles-sim',
      lang: 'javascript',
      code: `// Three.js InstancedMesh vs Individual Mesh Performance Simulator

const objectCount = 10000;
const cpuOverheadPerDrawCallMs = 0.0025; // 2.5 microseconds per WebGL draw call state switch

// 10,000 separate Mesh objects
const separateDrawCalls = objectCount;
const separateCpuTimeMs = separateDrawCalls * cpuOverheadPerDrawCallMs;

// 1 InstancedMesh with 10,000 instances
const instancedDrawCalls = 1;
const instancedCpuTimeMs = instancedDrawCalls * cpuOverheadPerDrawCallMs;

// 60FPS frame budget is 16.66ms
const frameBudgetMs = 16.66;
const separateCpuBudgetPercent = (separateCpuTimeMs / frameBudgetMs) * 100;
const instancedCpuBudgetPercent = (instancedCpuTimeMs / frameBudgetMs) * 100;

console.log('Total objects to render in 3D scene:', objectCount);
// -> Total objects to render in 3D scene: 10000

console.log('Draw calls required for separate Mesh objects:', separateDrawCalls);
// -> Draw calls required for separate Mesh objects: 10000

console.log('Draw calls required for single InstancedMesh:', instancedDrawCalls);
// -> Draw calls required for single InstancedMesh: 1

console.log('CPU draw call overhead for separate meshes in ms:', separateCpuTimeMs);
// -> CPU draw call overhead for separate meshes in ms: 25

console.log('CPU budget percentage consumed by separate draw calls at 60FPS:', Number(separateCpuBudgetPercent.toFixed(1)));
// -> CPU budget percentage consumed by separate draw calls at 60FPS: 150.1

console.log('CPU budget percentage consumed by InstancedMesh at 60FPS:', Number(instancedCpuBudgetPercent.toFixed(4)));
// -> CPU budget percentage consumed by InstancedMesh at 60FPS: 0.015`,
      caption: {
        en: 'Figure 6: Separate meshes consume 150.1% of the 16.66ms frame budget (dropping to 25 ms), while InstancedMesh consumes only 0.015%',
        bn: 'চিত্র ৬: আলাদা মেশ বাজেটের ১৫০.১% (২৫ মিলি) নষ্ট করে, যেখানে ইনস্ট্যান্সড-মেশ মাত্র ০.০১৫% সিপিইউ সময় খরচ করে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Instancing and Particle Rules',
        bn: 'ইনস্ট্যান্সিং ও পার্টিক্যালের ৪টি প্রোডাকশন নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules when rendering high-density 3D scenes at 60FPS:',
        bn: '৬০ এফপিএসে হাজার হাজার অবজেক্ট রেন্ডারের জন্য নিচের ৪টি নিয়ম মান্য করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Call computeBoundingSphere() on InstancedMesh',
          def: {
            en: 'By default, InstancedMesh bounding sphere only covers the origin; call instanced.computeBoundingSphere() to avoid premature culling',
            bn: 'ইনস্ট্যান্সড-মেশের বাউন্ডিং স্ফিয়ার ঠিক রাখতে instanced.computeBoundingSphere() কল করুন যাতে অবজেক্ট হঠাৎ অদৃশ্য না হয়'
          }
        },
        {
          term: 'Rule 2: Flag needsUpdate = true After Matrix Changes',
          def: {
            en: 'When updating instance transforms via setMatrixAt, you must assign instanced.instanceMatrix.needsUpdate = true to push data to GPU',
            bn: 'ম্যাট্রিক্স আপডেট করার পর জিপিউতে পাঠাতে instanced.instanceMatrix.needsUpdate = true দিন'
          }
        },
        {
          term: 'Rule 3: Use AdditiveBlending for Glowing Particles',
          def: {
            en: 'Set material.blending = THREE.AdditiveBlending on particle clouds to make overlapping particles add luminance naturally',
            bn: 'উজ্জ্বল আলোর পার্টিক্যালের জন্য THREE.AdditiveBlending দিন যাতে কণাগুলো একে অপরের সাথে মিশে উজ্জ্বল আভা তৈরি করে'
          }
        },
        {
          term: 'Rule 4: Implement Level of Detail (LOD) for Distant Meshes',
          def: {
            en: 'Use THREE.LOD to automatically swap high-polygon models with low-polygon proxies when objects move far from the camera',
            bn: 'ক্যামেরা থেকে দূরের অবজেক্টের জন্য THREE.LOD ব্যবহার করে লো-পলিগন ভার্সন লোড করিয়ে জিপিউ বাঁচান'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-drawcall-ratio-ex',
      kind: 'mcq',
      topic: 'Draw call reduction using InstancedMesh',
      question: {
        en: 'How many WebGL draw calls are issued to render 10,000 instances using a single THREE.InstancedMesh?',
        bn: 'একটিমাত্র THREE.InstancedMesh ব্যবহার করে ১০,০০০ ইনস্ট্যান্স রেন্ডার করতে কতটি ওয়েবজিএল ড্র-কল লাগে?'
      },
      options: [
        {
          en: 'Exactly 1 draw call (all instances batched into one GPU instruction)',
          bn: 'ঠিক ১টি ড্র-কল (সমস্ত ইনস্ট্যান্স একটিমাত্র জিপিউ নির্দেশনায় যুক্ত)'
        },
        {
          en: '10,000 draw calls',
          bn: '১০,০০০টি ড্র-কল'
        },
        {
          en: '100 draw calls',
          bn: '১০০টি ড্র-কল'
        },
        {
          en: '0 draw calls',
          bn: '০টি ড্র-কল'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single instanced draw call renders all instances.',
        bn: 'একটি একক ড্র-কলের মাধ্যমে সব ইনস্ট্যান্স আঁকা হয়।'
      },
      explanation: {
        en: 'Hardware instancing uses glDrawElementsInstanced, allowing the GPU to draw all 10,000 instances in a single draw command.',
        bn: 'হার্ডওয়্যার ইনস্ট্যান্সিং glDrawElementsInstanced কমান্ড ব্যবহার করে একটিমাত্র নির্দেশনায় ১০,০০০ অবজেক্ট রেন্ডার করে।'
      }
    },
    {
      id: 'threejs-instanced-matrix-ex',
      kind: 'mcq',
      topic: 'Triggering GPU matrix upload on InstancedMesh',
      question: {
        en: 'After calling instancedMesh.setMatrixAt(i, matrix), what property must you set to true to upload data to the GPU?',
        bn: 'instancedMesh.setMatrixAt(i, matrix) কল করার পর জিপিউতে ডেটা পাঠাতে কোন প্রপার্টি true করতে হয়?'
      },
      options: [
        {
          en: 'instancedMesh.instanceMatrix.needsUpdate = true',
          bn: 'instancedMesh.instanceMatrix.needsUpdate = true'
        },
        {
          en: 'geometry.recalculateNormals = true',
          bn: 'geometry.recalculateNormals = true'
        },
        {
          en: 'material.transparent = true',
          bn: 'material.transparent = true'
        },
        {
          en: 'renderer.shadowMap.enabled = true',
          bn: 'renderer.shadowMap.enabled = true'
        }
      ],
      answer: 0,
      hint: {
        en: 'needsUpdate on instanceMatrix.',
        bn: 'instanceMatrix-এর needsUpdate এর কথা ভাবুন।'
      },
      explanation: {
        en: 'Three.js requires flagging instancedMesh.instanceMatrix.needsUpdate = true so the WebGL driver knows the underlying Float32Array has changed.',
        bn: 'থ্রি.জেএস-এ Float32Array বাফার পরিবর্তনের পর জিপিউতে পাঠাতে instanceMatrix.needsUpdate = true দিতে হয়।'
      }
    },
    {
      id: 'threejs-points-sprite-ex',
      kind: 'mcq',
      topic: 'Particle rendering via THREE.Points',
      question: {
        en: 'In THREE.Points, how does the GPU render each geometry vertex by default?',
        bn: 'THREE.Points-এ জিপিউ প্রতিটি ভার্টেক্সকে ডিফল্টভাবে কীভাবে প্রদর্শন করে?'
      },
      options: [
        {
          en: 'As a camera-facing point sprite centered at the vertex position',
          bn: 'ভার্টেক্স অবস্থানে স্থাপিত একটি ক্যামেরামুখী পয়েন্ট স্প্রাইট হিসেবে'
        },
        {
          en: 'As a solid 3D cylinder with 32 segments',
          bn: '৩২ সেগমেন্টের একটি সলিড 3D সিলিন্ডার হিসেবে'
        },
        {
          en: 'As an animated text character',
          bn: 'একটি অ্যানিমেটেড টেক্সট ক্যারেক্টার হিসেবে'
        },
        {
          en: 'As an audio waveform line',
          bn: 'একটি অডিও ওয়েভফর্ম রেখা হিসেবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Point sprite primitives.',
        bn: 'পয়েন্ট স্প্রাইট প্রিমিটিভের কথা ভাবুন।'
      },
      explanation: {
        en: 'THREE.Points binds GL_POINTS, rendering each vertex coordinate as a 2D camera-facing billboard sprite.',
        bn: 'THREE.Points প্রতিটি ভার্টেক্সকে একটি ক্যামেরামুখী 2D স্প্রাইটের মতো আঁকে যা ধোঁয়া বা তারার জন্য আদর্শ।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-particles-instancing',
    title: {
      en: 'Instancing & Particle Systems Architecture Quiz',
      bn: 'ইনস্ট্যান্সিং ও পার্টিক্যাল সিস্টেম আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-instancing',
        kind: 'mcq',
        topic: 'Why InstancedMesh outperforms separate meshes',
        question: {
          en: 'Why does InstancedMesh drastically outperform rendering thousands of individual Mesh objects?',
          bn: 'কেন InstancedMesh হাজার হাজার আলাদা মেশের তুলনায় অবিশ্বাস্য দ্রুত কাজ করে?'
        },
        options: [
          {
            en: 'It collapses thousands of objects into a single GPU draw call using a shared geometry and an instance matrix buffer',
            bn: 'এটি একটিমাত্র জিপিউ ড্র-কলে একই জিওমেট্রি এবং ইনস্ট্যান্স ম্যাট্রিক্স বাফার দিয়ে হাজার হাজার অবজেক্ট রেন্ডার করে'
          },
          {
            en: 'It removes all lights and shadows from the scene',
            bn: 'এটি সিন থেকে সমস্ত লাইট ও শ্যাডো মুছে ফেলে'
          },
          {
            en: 'It forces JavaScript to run on 16 CPU cores simultaneously',
            bn: 'এটি জাভাস্ক্রিপ্টকে একসাথে ১৬টি কোরে চালাতে বাধ্য করে'
          },
          {
            en: 'It turns off the HTML canvas antialiasing setting',
            bn: 'এটি ক্যানভাসের অ্যান্টি-অ্যালাইজিং বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Single draw call with instance matrix buffer.',
          bn: 'একটিমাত্র ড্র-কল এবং ইনস্ট্যান্স ম্যাট্রিক্স বাফারের কথা ভাবুন।'
        },
        explanation: {
          en: 'The CPU only issues one draw command, passing all transform matrices to the GPU VBO in a single blast.',
          bn: 'সিপিইউ মাত্র একটি ড্র নির্দেশ পাঠায় এবং সব রূপান্তর ডেটা একসাথে জিপিউতে পাঠিয়ে ড্র-কল বটলনেক নির্মূল করে।'
        }
      },
      {
        id: 'q-threejs-instanced-flag',
        kind: 'mcq',
        topic: 'Flagging needsUpdate on instanceMatrix',
        question: {
          en: 'What property must be set to true after modifying an instance transformation via setMatrixAt?',
          bn: 'setMatrixAt দিয়ে ইনস্ট্যান্সের মান বদলানোর পর কোন প্রপার্টি true করতে হয়?'
        },
        options: [
          {
            en: 'instancedMesh.instanceMatrix.needsUpdate = true',
            bn: 'instancedMesh.instanceMatrix.needsUpdate = true'
          },
          {
            en: 'scene.geometryNeedsRebuild = true',
            bn: 'scene.geometryNeedsRebuild = true'
          },
          {
            en: 'camera.refreshProjection = true',
            bn: 'camera.refreshProjection = true'
          },
          {
            en: 'renderer.clearCanvasBuffer = true',
            bn: 'renderer.clearCanvasBuffer = true'
          }
        ],
        answer: 0,
        hint: {
          en: 'Signals data upload to GPU.',
          bn: 'জিপিউতে নতুন ডেটা পাঠানোর সংকেত।'
        },
        explanation: {
          en: 'needsUpdate signals Three.js to upload the mutated typed array to the GPU VBO before the next draw call.',
          bn: 'needsUpdate থ্রি.জেএস-কে নির্দেশ দেয় যেন পরিবর্তিত ডেটা পরবর্তী ড্র-কলের আগেই জিপিউ বাফারে পুশ করা হয়।'
        }
      },
      {
        id: 'q-threejs-points',
        kind: 'mcq',
        topic: 'Visual distinction of THREE.Points',
        question: {
          en: 'What is the primary visual difference between THREE.Mesh and THREE.Points?',
          bn: 'THREE.Mesh এবং THREE.Points-এর মধ্যে প্রধান দৃশ্যমান পার্থক্য কী?'
        },
        options: [
          {
            en: 'THREE.Points renders each vertex as an independent camera-facing 2D point sprite rather than connecting them into triangles',
            bn: 'THREE.Points প্রতিটি ভার্টেক্সকে ত্রিভুজে যুক্ত না করে ক্যামেরামুখী 2D পার্টিক্যাল হিসেবে প্রদর্শন করে'
          },
          {
            en: 'THREE.Points cannot use textures of any kind',
            bn: 'THREE.Points কোনো ধরণের টেক্সচার ব্যবহার করতে পারে না'
          },
          {
            en: 'THREE.Mesh cannot have more than 100 vertices',
            bn: 'THREE.Mesh-এ ১০০ এর বেশি ভার্টেক্স থাকতে পারে না'
          },
          {
            en: 'THREE.Points runs exclusively on the client CPU without WebGL',
            bn: 'THREE.Points ওয়েবজিএল ছাড়া শুধুমাত্র ক্লায়েন্ট সিপিইউতে চলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Points are point sprites without triangle faces.',
          bn: 'পয়েন্টস হলো কোনো ত্রিভুজ পৃষ্ঠ ছাড়া একক পার্টিক্যাল।'
        },
        explanation: {
          en: 'THREE.Points generates point primitives (GL_POINTS), rendering billboarding square particles centered on each vertex coordinate.',
          bn: 'THREE.Points প্রতিটি ভার্টেক্সে ক্যামেরামুখী স্কয়ার পার্টিক্যাল তৈরি করে যা ধোঁয়া, তারা বা ধূলিকণা তৈরিতে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-threejs-lod',
        kind: 'mcq',
        topic: 'Performance gains of Level of Detail (LOD)',
        question: {
          en: 'How does THREE.LOD (Level of Detail) improve rendering performance in massive open 3D worlds?',
          bn: 'বিশাল 3D দৃশ্যে THREE.LOD (Level of Detail) কিভাবে রেন্ডারিং গতি বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'It dynamically substitutes lower-polygon geometry models as objects get further from the camera',
            bn: 'ক্যামেরা থেকে দূরত্ব বাড়ার সাথে সাথে এটি স্বয়ংক্রিয়ভাবে কম পলিগনের হালকা মডেল দেখায়'
          },
          {
            en: 'It deletes all objects that are behind the player',
            bn: 'প্লেয়ারের পেছনের সমস্ত অবজেক্টকে মেমোরি থেকে মুছে ফেলে'
          },
          {
            en: 'It downscales the entire web browser window',
            bn: 'সম্পূর্ণ ওয়েব ব্রাউজার উইন্ডোকে সংকুচিত করে দেয়'
          },
          {
            en: 'It compresses GLTF textures using ZIP compression on each frame',
            bn: 'প্রতি ফ্রেমে জিপ কম্প্রেশনের মাধ্যমে টেক্সচার সংকুচিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Swaps low-poly models for distant objects.',
          bn: 'দূরের অবজেক্টের জন্য লো-পলি মডেল ব্যবহারের কথা ভাবুন।'
        },
        explanation: {
          en: 'LOD saves millions of vertex computations by rendering low-poly approximations for distant assets that occupy only a few screen pixels.',
          bn: 'দূরের ছোট অবজেক্টের জন্য উচ্চ পলিগনের বদলে লো-পলিগন মডেল দেখিয়ে এলওডি লাখ লাখ অপ্রয়োজনীয় হিসাব বাঁচিয়ে দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'post-processing-and-effects',
    title: {
      en: 'Post-Processing, Bloom & Shaders — Cinematic Visual Pipelines',
      bn: 'পোস্ট-প্রসেসিং, ব্লুম ও শেডার্স — সিনেমাটিক ভিজ্যুয়াল পাইপলাইন'
    }
  }
};
