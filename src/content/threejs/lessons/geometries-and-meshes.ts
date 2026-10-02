import type { Lesson } from '../../../lib/types';

export const GeometriesAndMeshesLesson: Lesson = {
  slug: 'geometries-and-meshes',
  tech: 'threejs',
  title: {
    en: 'BufferGeometry, Meshes & Vectors — Constructing 3D Shapes',
    bn: 'বাফার-জিওমেট্রি, মেশেস ও ভেক্টর — 3D আকৃতি নির্মাণ'
  },
  summary: {
    en: 'Visible 3D entities in Three.js are represented as Meshes — an architectural binding of a Geometry and a Material. Modern Three.js structures all shapes using BufferGeometry, which stores spatial data directly in linear typed arrays (Float32Array). These typed buffers map straight into GPU Vertex Buffer Objects (VBOs). Understanding BufferAttributes (positions, surface normals, and UV coordinates) unlocks full geometric control. Adopting indexed BufferGeometry eliminates redundant duplicate vertices, slashing GPU memory consumption by up to 60%. Combined with Vector3 spatial algebra and transformations (position, rotation, scale), developers can construct both procedural shapes and memory-efficient assets.',
    bn: 'থ্রি.জেএস-এ দৃশ্যমান 3D অবজেক্টগুলো মেশ (Mesh) হিসেবে উপস্থাপিত হয় — যা মূলত জিওমেট্রি এবং ম্যাটেরিয়ালের একটি যুগলবন্দী। আধুনিক থ্রি.জেএস-এর সমস্ত আকৃতি বাফার-জিওমেট্রি (BufferGeometry) দিয়ে গঠিত, যা লিনিয়ার টাইপড অ্যারে (Float32Array) আকারে সরাসরি জিপিউ ভার্টেক্স বাফারে সংরক্ষিত হয়। বাফার-অ্যাট্রিবিউট (পজিশন, আলো প্রতিফলনের নরমাল এবং টেক্সচারের UV স্থানাঙ্ক) বোঝা 3D ডিজাইনে পূর্ণ স্বাধীনতা দেয়। বিশেষ করে, ইনডেক্সড বাফার-জিওমেট্রি ব্যবহারের মাধ্যমে একই ভার্টেক্সের পুনরাবৃত্তি রোধ করে প্রায় ৬০% পর্যন্ত জিপিউ মেমোরি বাঁচানো যায়। ভেক্টর৩ (Vector3) গণিত ও ট্রান্সফরমেশনের সমন্বয়ে ডেভেলপাররা জটিল 3D আকৃতি দক্ষভাবে নির্মাণ করতে পারেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The Anatomy of BufferGeometry & Meshes',
        bn: 'মূল ধারণা: বাফার-জিওমেট্রি ও মেশের অভ্যন্তরীণ গঠন'
      }
    },
    {
      type: 'visual',
      id: 'architecture'
    },
    {
      type: 'para',
      text: {
        en: 'A Three.js Mesh binds a Geometry with a Material to produce a renderable entity. The geometry defines the skeleton — an array of 3D spatial points called vertices that connect into triangular facets. In computer graphics, every curved surface or human character is assembled purely from triangles. BufferGeometry ensures these vertices stream to the GPU with zero memory copy overhead.',
        bn: 'একটি থ্রি.জেএস মেশ জিওমেট্রি ও ম্যাটেরিয়ালকে একত্রিত করে দৃশ্যমান অবজেক্ট তৈরি করে। জিওমেট্রি হলো অবজেক্টের কঙ্কাল — যা কতগুলো 3D পয়েন্ট বা ভার্টেক্স দিয়ে তৈরি এবং সেগুলো পরস্পর যুক্ত হয়ে ত্রিভুজাকার পৃষ্ঠ গঠন করে। কম্পিউটার গ্রাফিক্সের জগতে প্রতিটি বক্ররেখা বা চরিত্র মূলত অসংখ্য ক্ষুদ্র ত্রিভুজের সমন্বয়। বাফার-জিওমেট্রি নিশ্চিত করে যে এই ডেটা সরাসরি জিপিউতে কোনো অপ্রয়োজনীয় মেমোরি কপি ছাড়াই পৌঁছায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'BufferGeometry',
          def: {
            en: 'An efficient representation of 3D mesh geometry that stores vertex attributes directly in GPU-ready typed arrays',
            bn: '3D মেশের একটি অত্যন্ত দক্ষ রূপ যা ভার্টেক্স ডেটাকে সরাসরি জিপিউ-বান্ধব টাইপড অ্যারেতে সংরক্ষণ করে'
          }
        },
        {
          term: 'BufferAttribute',
          def: {
            en: 'A typed array wrapper specifying an attribute array and its dimension size (3 for XYZ position, 2 for UV coords)',
            bn: 'একটি টাইপড অ্যারে র্যাপার যা ডেটার উপাদান সংখ্যা নির্ধারণ করে: পজিশনের জন্য ৩ এবং টেক্সচার UV এর জন্য ২ টি'
          }
        },
        {
          term: 'Indexed Geometry',
          def: {
            en: 'Defining unique vertices once and using an index array (Uint16Array) to instruct the GPU which vertices form each triangle',
            bn: 'ভার্টেক্স একবার লিখে একটি ইনডেক্স অ্যারের মাধ্যমে কোন কোন ভার্টেক্স মিলে ত্রিভুজ তৈরি হবে তা বলে দেওয়া'
          }
        },
        {
          term: 'Surface Normal',
          def: {
            en: 'A unit vector perpendicular to a triangle surface or vertex, mandatory for computing light reflections and shadows',
            bn: 'একটি লম্ব একক ভেক্টর যা ত্রিভুজের পৃষ্ঠের ওপর ৯০ ডিগ্রি কোণে থাকে এবং আলো ও ছাঁয়ার হিসাব করতে অপরিহার্য'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'vectors-and-transforms',
      text: {
        en: 'Transformations & Vector3 Spatial Mathematics',
        bn: 'ট্রান্সফরমেশন ও ভেক্টর৩ স্পেশিয়াল গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every 3D object inherits from THREE.Object3D, providing 3 fundamental transform properties: position (translation), rotation (Euler angles in radians), and scale. Vector3 also provides essential vector algebra methods. The .distanceTo(v) method computes Euclidean distance, .dot(v) determines lighting angle, and .cross(v) calculates a perpendicular axis for procedural geometry.',
        bn: 'প্রতিটি 3D অবজেক্ট THREE.Object3D থেকে উদ্ভূত, যার ৩টি প্রধান রূপান্তর প্রপার্টি রয়েছে: position (স্থান পরিবর্তন), rotation (রেডিয়ানে ঘূর্ণন কোণ) এবং scale (দৈর্ঘ্য-প্রস্থ-উচ্চতার গুণক)। ভেক্টর৩ তে প্রয়োজনীয় ভেক্টর বীজগণিতের মেথডও রয়েছে। .distanceTo(v) দিয়ে দূরত্ব মাপা হয়, .dot(v) দিয়ে কোণ ও আলো এবং .cross(v) দিয়ে লম্ব অক্ষ বের করা যায়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Indexed vs Non-Indexed BufferGeometry Comparison',
        bn: 'ইনডেক্সড বনাম নন-ইনডেক্সড বাফার-জিওমেট্রির তুলনা'
      },
      head: [
        { en: 'Characteristic', bn: 'বৈশিষ্ট্য' },
        { en: 'Non-Indexed BufferGeometry', bn: 'নন-ইনডেক্সড বাফার-জিওমেট্রি' },
        { en: 'Indexed BufferGeometry', bn: 'ইনডেক্সড বাফার-জিওমেট্রি' }
      ],
      rows: [
        [
          { en: 'Vertex Duplication', bn: 'ভার্টেক্স ডুপ্লিকেশন' },
          { en: 'High; vertices shared across adjacent triangles are duplicated 3 to 6 times', bn: 'বেশি; পাশাপাশি ত্রিভুজগুলোতে ৩ থেকে ৬ বার ভার্টেক্স ডুপ্লিকেট হয়' },
          { en: 'Zero; each unique vertex coordinate is stored exactly once in VBO', bn: 'শূন্য; প্রতিটি অনন্য ভার্টেক্স মেমোরিতে কেবল একবারই থাকে' }
        ],
        [
          { en: 'GPU VRAM Footprint', bn: 'জিপিউ মেমোরির ব্যবহার' },
          { en: 'Heavy; consumes up to 2.5x more VRAM bytes for the same geometric model', bn: 'অতিরিক্ত; একই মডেলের জন্য প্রায় ২.৫ গুণ বেশি মেমোরি খরচ হয়' },
          { en: 'Compact; up to 60% memory savings using 16-bit index buffers', bn: 'কম্প্যাক্ট; ১৬-বিট ইনডেক্স ব্যবহার করে ৬০% পর্যন্ত মেমোরি সাশ্রয় হয়' }
        ],
        [
          { en: 'Cache Efficiency', bn: 'পোস্ট-ট্রান্সফর্ম ক্যাশ' },
          { en: 'Poor; GPU vertex shader recalculates identical shared vertex positions', bn: 'কম; জিপিউ একই ভার্টেক্সের হিসাব বারবার করতে বাধ্য হয়' },
          { en: 'Optimal; GPU Post-Transform Vertex Cache reuses transformed vertices', bn: 'সর্বোচ্চ; জিপিউ ক্যাশ থেকে আগের প্রসেস করা ভার্টেক্স পুনরায় ব্যবহার করে' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: BufferGeometry VRAM Footprint & Vector Math',
        bn: 'চালনাযোগ্য সিমুলেশন: বাফার-জিওমেট্রি মেমোরি ও ভেক্টর গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script simulates a standard 3D BoxGeometry, calculates the exact memory savings achieved by indexing, and computes Euclidean vector distances:',
        bn: 'নিচের স্ক্রিপ্টটি একটি 3D বক্স জিওমেট্রির ইনডেক্সড মেমোরি সঞ্চয় এবং ভেক্টর দূরত্বের হিসাব প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'three-geometry-sim',
      lang: 'javascript',
      code: `// Three.js BufferGeometry & Vector Math Simulator

class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  distanceTo(v) {
    const dx = this.x - v.x;
    const dy = this.y - v.y;
    const dz = this.z - v.z;
    return Math.sqrt(dx * dx + dy * dy + dz * dz);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }
}

// Simulating Indexed vs Non-Indexed BufferGeometry for a 3D Cube (6 faces * 2 triangles = 12 triangles)
const trianglesCount = 12;

// Non-indexed: 3 vertices per triangle = 36 vertices total
const nonIndexedVertexCount = trianglesCount * 3; // 36 vertices
const nonIndexedFloats = nonIndexedVertexCount * 3; // 108 floats (x, y, z)
const nonIndexedBytes = nonIndexedFloats * 4; // 432 bytes in Float32Array

// Indexed: Unique vertices of a cube = 8 vertices
const indexedVertexCount = 8;
const indexedFloats = indexedVertexCount * 3; // 24 floats
const indexCount = trianglesCount * 3; // 36 indices
const indexedBytes = (indexedFloats * 4) + (indexCount * 2); // 96 bytes (Float32) + 72 bytes (Uint16) = 168 bytes

const memorySavingsPercent = ((nonIndexedBytes - indexedBytes) / nonIndexedBytes) * 100;

const vA = new Vector3(0, 0, 0);
const vB = new Vector3(3, 4, 0);
const distanceBetweenAandB = vA.distanceTo(vB);

console.log('Total triangles in standard 3D BoxGeometry:', trianglesCount);
// -> Total triangles in standard 3D BoxGeometry: 12

console.log('Unique vertices required in Indexed BufferGeometry:', indexedVertexCount);
// -> Unique vertices required in Indexed BufferGeometry: 8

console.log('Total vertices required in Non-Indexed BufferGeometry:', nonIndexedVertexCount);
// -> Total vertices required in Non-Indexed BufferGeometry: 36

console.log('Calculated Euclidean distance between Vector A and Vector B:', distanceBetweenAandB);
// -> Calculated Euclidean distance between Vector A and Vector B: 5

console.log('Memory savings percentage using Indexed BufferGeometry:', Number(memorySavingsPercent.toFixed(1)));
// -> Memory savings percentage using Indexed BufferGeometry: 61.1`,
      caption: {
        en: 'Figure 2: Verified geometry simulation proving 61.1% memory savings with 12 triangles and Euclidean distance 5',
        bn: 'চিত্র ২: ভেরিফাইড জিওমেট্রি সিমুলেশন যা ১২টি ত্রিভুজে ৬১.১% মেমোরি সাশ্রয় ও দূরত্ব ৫ প্রমাণ করে'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Geometry and Mesh Rules',
        bn: 'প্রোডাকশন জিওমেট্রি ও মেশের ৪টি নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Adhere to these 4 rules when handling geometries and meshes in Three.js applications:',
        bn: 'থ্রি.জেএস অ্যাপ্লিকেশনে জিওমেট্রি ব্যবহারের ক্ষেত্রে নিচের ৪টি নিয়ম অনুসরণ করুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always Call geometry.dispose()',
          def: {
            en: 'JavaScript garbage collector cannot clean GPU VRAM; you must explicitly call geometry.dispose() when removing an object',
            bn: 'জাভাস্ক্রিপ্ট জিপিউ মেমোরি মুক্ত করতে পারে না; অবজেক্ট মুছলে অবশ্যই geometry.dispose() কল করতে হবে'
          }
        },
        {
          term: 'Rule 2: Reuse Geometries Across Meshes',
          def: {
            en: 'If rendering 100 cubes of identical dimensions, create 1 BoxGeometry and share it across 100 Mesh instances',
            bn: 'একই আকারের ১০০টি কিউব থাকলে ১টি মাত্র BoxGeometry তৈরি করে তা ১০০টি মেশে শেয়ার করুন'
          }
        },
        {
          term: 'Rule 3: Use computeVertexNormals()',
          def: {
            en: 'When programmatically building custom BufferGeometry, always invoke geometry.computeVertexNormals() for lighting',
            bn: 'কাস্টম বাফার-জিওমেট্রি বানালে আলোর সঠিক প্রতিফলনের জন্য geometry.computeVertexNormals() রান করুন'
          }
        },
        {
          term: 'Rule 4: Avoid Dynamic Geometry Allocations in Loops',
          def: {
            en: 'Never instantiate new geometries inside requestAnimationFrame; allocate once and mutate existing buffer attributes',
            bn: 'অ্যানিমেশন লুপের ভেতর নতুন জিওমেট্রি ইনস্ট্যান্স তৈরি করবেন না; আগের বাফার অ্যাট্রিবিউট আপডেট করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-triangles-count-ex',
      kind: 'mcq',
      topic: 'BoxGeometry triangle count calculation',
      question: {
        en: 'A 3D cube has 6 square faces. If each face is divided into 2 triangles, how many triangles form the BoxGeometry?',
        bn: 'একটি 3D কিউবের ৬টি বর্গাকার পৃষ্ঠ আছে। প্রতিটি পৃষ্ঠ ২ ভাগে বিভক্ত হলে মোট কতটি ত্রিভুজ দিয়ে BoxGeometry গঠিত হয়?'
      },
      options: [
        {
          en: '12 triangles',
          bn: '১২টি ত্রিভুজ'
        },
        {
          en: '6 triangles',
          bn: '৬টি ত্রিভুজ'
        },
        {
          en: '24 triangles',
          bn: '২৪টি ত্রিভুজ'
        },
        {
          en: '36 triangles',
          bn: '৩৬টি ত্রিভুজ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Multiply 6 faces by 2 triangles per face.',
        bn: '৬টি পৃষ্ঠকে প্রতি পৃষ্ঠের ২টি ত্রিভুজ দিয়ে গুণ করুন।'
      },
      explanation: {
        en: '6 faces * 2 triangles per face = 12 triangles total.',
        bn: '৬টি পৃষ্ঠ * ২টি ত্রিভুজ = সর্বমোট ১২টি ত্রিভুজ।'
      }
    },
    {
      id: 'threejs-unique-verts-ex',
      kind: 'mcq',
      topic: 'Indexed BoxGeometry unique vertex requirement',
      question: {
        en: 'How many unique corner vertices does a 3D box have in an Indexed BufferGeometry?',
        bn: 'একটি ইনডেক্সড বাফার-জিওমেট্রিতে 3D বক্সের কতটি অনন্য কোণীয় ভার্টেক্স থাকে?'
      },
      options: [
        {
          en: '8 vertices (the 8 corners of the cuboid)',
          bn: '৮টি ভার্টেক্স (কিউবয়েডের ৮টি কোণা)'
        },
        {
          en: '36 vertices (non-indexed duplication)',
          bn: '৩৬টি ভার্টেক্স (নন-ইনডেক্সড ডুপ্লিকেশন)'
        },
        {
          en: '4 vertices',
          bn: '৪টি ভার্টেক্স'
        },
        {
          en: '12 vertices',
          bn: '১২টি ভার্টেক্স'
        }
      ],
      answer: 0,
      hint: {
        en: 'A cube has 8 corners in 3D space.',
        bn: '3D স্থানে একটি কিউবের ৮টি কোণা থাকে।'
      },
      explanation: {
        en: 'A cube has 8 geometric corners. Indexed geometry stores these 8 positions once and uses an index array to draw all 12 triangles.',
        bn: 'একটি কিউবের ৮টি কোণা থাকে। ইনডেক্সড জিওমেট্রি এই ৮টি অবস্থান একবার রেখে ১২টি ত্রিভুজ আঁকে।'
      }
    },
    {
      id: 'threejs-vector-dist-ex',
      kind: 'mcq',
      topic: 'Vector3 distance calculation',
      question: {
        en: 'What is the 3D Euclidean distance from Vector A (0, 0, 0) to Vector B (3, 4, 0)?',
        bn: 'ভেক্টর A (০, ০, ০) থেকে ভেক্টর B (৩, ৪, ০)-এর 3D ইউক্লিডীয় দূরত্ব কত?'
      },
      options: [
        {
          en: '5 (via the 3-4-5 Pythagorean theorem)',
          bn: '৫ (৩-৪-৫ পিথাগোরাসের উপপাদ্য অনুযায়ী)'
        },
        {
          en: '7 (simple scalar sum)',
          bn: '৭ (সাধারণ যোগফল)'
        },
        {
          en: '12 (multiplied coordinates)',
          bn: '১২ (গুণিতক মান)'
        },
        {
          en: '1 (unit vector distance)',
          bn: '১ (একক ভেক্টরের দূরত্ব)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Square root of (3^2 + 4^2 + 0^2).',
        bn: 'রুট (৩^২ + ৪^২ + ০^২) এর কথা ভাবুন।'
      },
      explanation: {
        en: 'Math.sqrt(9 + 16) = Math.sqrt(25) = 5.',
        bn: 'Math.sqrt(৯ + ১৬) = Math.sqrt(২৫) = ৫।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-geometries-meshes',
    title: {
      en: 'BufferGeometry & Mesh Architecture Quiz',
      bn: 'বাফার-জিওমেট্রি ও মেশ আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-vbo',
        kind: 'mcq',
        topic: 'Why BufferGeometry relies on Float32Array',
        question: {
          en: 'Why does BufferGeometry use Float32Array instead of standard JavaScript arrays?',
          bn: 'কেন বাফার-জিওমেট্রি স্ট্যান্ডার্ড অ্যারের বদলে Float32Array ব্যবহার করে?'
        },
        options: [
          {
            en: 'Because typed arrays map directly to continuous GPU Vertex Buffer Objects without serialization overhead',
            bn: 'কারণ টাইপড অ্যারে সরাসরি কোনো কনভার্সন ছাড়াই অবিচ্ছিন্ন জিপিউ মেমোরিতে ম্যাপ হতে পারে'
          },
          {
            en: 'Because standard JavaScript arrays cannot store negative numbers',
            bn: 'কারণ সাধারণ জাভাস্ক্রিপ্ট অ্যারে ঋণাত্মক সংখ্যা ধারণ করতে পারে না'
          },
          {
            en: 'To prevent Three.js from rendering shadows',
            bn: 'থ্রি.জেএস যাতে কোনো শ্যাডো রেন্ডার না করে তা নিশ্চিত করতে'
          },
          {
            en: 'Because WebGL requires all numbers to be 64-bit doubles',
            bn: 'কারণ ওয়েবজিএলে সব সংখ্যা ৬৪-বিট ডাবল হতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Contiguous binary memory mapping.',
          bn: 'নিরবচ্ছিন্ন বাইনারি মেমোরি ম্যাপিংয়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'Typed arrays allocate contiguous blocks of raw binary memory that the browser passes directly to the GPU via WebGL without memory copying.',
          bn: 'টাইপড অ্যারে নিরবচ্ছিন্ন বাইনারি মেমোরি তৈরি করে যা ব্রাউজার সরাসরি জিপিউতে পাঠাতে পারে।'
        }
      },
      {
        id: 'q-threejs-indexed',
        kind: 'mcq',
        topic: 'Performance gains of indexed geometry',
        question: {
          en: 'What is the primary performance benefit of using an Indexed BufferGeometry?',
          bn: 'ইনডেক্সড বাফার-জিওমেট্রি ব্যবহারের প্রধান পারফরম্যান্স সুবিধা কোনটি?'
        },
        options: [
          {
            en: 'It stores unique vertices only once and references them via index, saving up to 60% VRAM and utilizing the GPU vertex cache',
            bn: 'এটি ভার্টেক্স একবার রেখে ইনডেক্স ব্যবহার করে, ফলে ৬০% পর্যন্ত মেমোরি সাশ্রয় হয় এবং জিপিউ ক্যাশ কার্যকর হয়'
          },
          {
            en: 'It completely eliminates the need for camera projection',
            bn: 'এটি ক্যামেরা প্রজেকশনের প্রয়োজনীয়তা সম্পূর্ণ দূর করে দেয়'
          },
          {
            en: 'It automatically turns any 3D model into an SVG vector graphic',
            bn: 'এটি স্বয়ংক্রিয়ভাবে যেকোনো মডেলকে এসভিজি চিত্রে রূপান্তর করে'
          },
          {
            en: 'It forces the browser to render using CSS 3D transforms',
            bn: 'এটি ব্রাউজারকে সিএসএস 3D রূপান্তর ব্যবহার করতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Eliminates vertex duplication across shared triangle edges.',
          bn: 'সাধারণ ত্রিভুজের ধারগুলোতে ডুপ্লিকেশন দূর করে।'
        },
        explanation: {
          en: 'Indexed geometry avoids repeating identical shared vertex coordinates for adjacent triangles, drastically cutting buffer memory.',
          bn: 'ইনডেক্সড জিওমেট্রি পাশাপাশি অবস্থিত ত্রিভুজগুলোর একই ভার্টেক্স বারবার লেখা বন্ধ করে মেমোরি বিপুল পরিমাণে বাঁচায়।'
        }
      },
      {
        id: 'q-threejs-dispose',
        kind: 'mcq',
        topic: 'GPU memory leaks and geometry.dispose()',
        question: {
          en: 'What occurs if you remove a mesh from the scene with scene.remove(mesh) without calling geometry.dispose()?',
          bn: 'geometry.dispose() না ডেকে কেবল scene.remove(mesh) করলে কী ঘটে?'
        },
        options: [
          {
            en: 'A GPU VRAM memory leak occurs because WebGL buffers persist in graphics memory until explicitly released',
            bn: 'জিপিউ মেমোরি লিক ঘটে কারণ ওয়েবজিএল বাফারগুলো গ্রাফিক্স মেমোরিতে অনির্দিষ্টকাল রয়ে যায়'
          },
          {
            en: 'The browser immediately crashes with a fatal kernel error',
            bn: 'ব্রাউজার সাথে সাথে কার্নেল এরর দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'The mesh continues to render as an invisible ghost object',
            bn: 'মেশটি একটি অদৃশ্য ছায়া অবজেক্ট হিসেবে চলতে থাকে'
          },
          {
            en: 'The camera automatically repositions to origin (0, 0, 0)',
            bn: 'ক্যামেরা স্বয়ংক্রিয়ভাবে মূলবিন্দু (০, ০, ০) তে সরে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'GPU memory persistence beyond JavaScript garbage collector.',
          bn: 'জাভাস্ক্রিপ্ট গার্বেজ কালেক্টরের বাইরে জিপিউ মেমোরির অস্তিত্ব।'
        },
        explanation: {
          en: 'Removing an object from the scene graph only detaches JavaScript references; GPU buffers remain allocated in VRAM until .dispose() is explicitly called.',
          bn: 'সিন থেকে অবজেক্ট সরালে শুধু জাভাস্ক্রিপ্ট রেফারেন্স কমে; কিন্তু জিপিউ বাফারটি মেমোরিতে থেকে যায় যতক্ষণ না .dispose() কল করা হয়।'
        }
      },
      {
        id: 'q-threejs-normals',
        kind: 'mcq',
        topic: 'Surface normal vectors in lighting calculations',
        question: {
          en: 'What is the purpose of the normal attribute in a BufferGeometry?',
          bn: 'বাফার-জিওমেট্রিতে normal অ্যাট্রিবিউটের কাজ কী?'
        },
        options: [
          {
            en: 'It defines the perpendicular direction of the surface used by shaders to calculate realistic lighting and shadows',
            bn: 'এটি পৃষ্ঠের লম্ব দিক নির্দেশ করে যা দিয়ে শেডার বাস্তবসম্মত আলো ও ছায়া গণনা করে'
          },
          {
            en: 'It controls the playback speed of skeletal animations',
            bn: 'এটি অ্যানিমেশনের চলার গতি নিয়ন্ত্রণ করে'
          },
          {
            en: 'It sets the background color of the HTML canvas',
            bn: 'এটি ক্যানভাসের ব্যাকগ্রাউন্ড রঙ নির্ধারণ করে'
          },
          {
            en: 'It specifies the audio frequency of spatial 3D sound',
            bn: 'এটি 3D শব্দের অডিও ফ্রিকোয়েন্সি ঠিক করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Perpendicular surface vectors indicating facing direction.',
          bn: 'পৃষ্ঠের লম্ব ভেক্টর যা দিক নির্দেশ করে।'
        },
        explanation: {
          en: 'Normals specify which way the surface faces, allowing the fragment shader to calculate the angle between incoming light rays and the surface.',
          bn: 'নরমাল ভেক্টর বোঝায় পৃষ্ঠটি কোন দিকে মুখ করে আছে, যার মাধ্যমে আলো ও ছায়ার কোণ নির্ধারণ করা সম্ভব হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'materials-and-textures',
    title: {
      en: 'PBR Materials, Textures & Shaders — Realistic Physically Based Rendering',
      bn: 'PBR ম্যাটেরিয়াল, টেক্সচার ও শেডার্স — বাস্তবসম্মত ফিজিক্যালি বেসড রেন্ডারিং'
    }
  }
};
