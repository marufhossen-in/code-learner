import type { Lesson } from '../../../lib/types';

export const MaterialsAndTexturesLesson: Lesson = {
  slug: 'materials-and-textures',
  tech: 'threejs',
  title: {
    en: 'PBR Materials, Textures & Shaders — Realistic Physically Based Rendering',
    bn: 'PBR ম্যাটেরিয়াল, টেক্সচার ও শেডার্স — বাস্তবসম্মত ফিজিক্যালি বেসড রেন্ডারিং'
  },
  summary: {
    en: 'Materials govern how light interacts with geometry surfaces, transforming simple wireframes into realistic wood, metal, glass, or cloth. Three.js provides a spectrum ranging from unlit MeshBasicMaterial to physically based MeshStandardMaterial and MeshPhysicalMaterial. PBR enforces energy conservation and micro-surface roughness using the Metallic-Roughness workflow. Combining diffuse albedo maps with normal maps simulates surface scratches without extra geometric polygons. Assigning SRGBColorSpace to base color textures while keeping data maps (normal, roughness, metalness) strictly linear avoids washed-out optical reflections.',
    bn: 'ম্যাটেরিয়াল নির্ধারণ করে কোনো বস্তুর পৃষ্ঠে আলো কিভাবে প্রতিফলিত হবে, যা সাধারণ কঙ্কালকে বাস্তবসম্মত কাঠ, লোহা, কাচ বা কাপড়ের রূপ দেয়। থ্রি.জেএস-এ লাইটবিহীন MeshBasicMaterial থেকে শুরু করে আধুনিক ফিজিক্যালি বেসড ರেন্ডারিং (MeshStandardMaterial এবং MeshPhysicalMaterial) পর্যন্ত বিভিন্ন বিকল্প রয়েছে। পিবিআর (PBR) শক্তির নিত্যতা মেনে মেটালিক-রাফনেস মডেলে কাজ করে। বেস কালার টেক্সচারের সাথে নরমাল ম্যাপ বাড়তি পলিগন ছাড়াই খাঁজের বিভ্রম সৃষ্টি করে। রঙের টেক্সচারে SRGBColorSpace এবং ডেটা ম্যাপে লিনিয়ার স্পেস রাখলে বাস্তবসম্মত প্রতিফলন পাওয়া যায়।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The PBR Material Spectrum',
        bn: 'মূল ধারণা: পিবিআর ম্যাটেরিয়াল ও আলোর প্রতিফলন'
      }
    },
    {
      type: 'visual',
      id: 'callout-flow'
    },
    {
      type: 'para',
      text: {
        en: 'In legacy computer graphics, materials approximated lighting using arbitrary mathematical tricks. Physically Based Rendering (PBR) enforces laws of physics: energy conservation (surfaces cannot reflect more light than received) and Fresnel reflectance (surfaces reflect more light at grazing angles). Three.js implements these optical principles inside MeshStandardMaterial and MeshPhysicalMaterial.',
        bn: 'আগের কম্পিউটার গ্রাফিক্সে কৃত্রিম ট্রিকস দিয়ে আলো অনুকরণ করা হতো। ফিজিক্যালি বেসড রেন্ডারিং (PBR) পদার্থবিজ্ঞানের নিয়ম মেনে 3D জগতকে বদলে দিয়েছে: শক্তির নিত্যতা সূত্র (একটি পৃষ্ঠ যে পরিমাণ আলো পায় তার বেশি আলো প্রতিফলিত করতে পারে না) এবং ফ্রেনেল প্রতিফলন (তীর্যক কোণে যেকোনো পৃষ্ঠ বেশি চকচকে দেখায়)। থ্রি.জেএস এই নীতিগুলো MeshStandardMaterial এবং MeshPhysicalMaterial-এ প্রয়োগ করেছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'MeshStandardMaterial',
          def: {
            en: 'Industry-standard PBR material relying on metallic and roughness parameters for photorealistic lighting interaction',
            bn: 'শিল্প-মানসম্পন্ন পিবিআর ম্যাটেরিয়াল যা মেটালিক ও রাফনেস প্যারামিটারের মাধ্যমে বাস্তবসম্মত আলো তৈরি করে'
          }
        },
        {
          term: 'MeshPhysicalMaterial',
          def: {
            en: 'An advanced extension of MeshStandardMaterial featuring clearcoat, glass transmission, and velvet sheen',
            bn: 'MeshStandardMaterial-এর উন্নত সংস্করণ যাতে গাড়ির চকচকে ক্লিয়ারকোট, কাচের ট্রান্সমিশন ও কাপড়ের শিন রয়েছে'
          }
        },
        {
          term: 'Normal Map',
          def: {
            en: 'An RGB texture encoding microscopic surface angle perturbations, simulating complex bumps without adding geometric polygons',
            bn: 'একটি আরজিবি টেক্সচার যা অতিরিক্ত পলিগন ছাড়াই পৃষ্ঠের ক্ষুদ্রাতিক্ষুদ্র খাঁজ ও দাগের বাস্তবসম্মত বিভ্রম তৈরি করে'
          }
        },
        {
          term: 'Color Space Rules',
          def: {
            en: 'Color textures must be sRGB; mathematical data textures (normals, roughness, metalness, AO) must remain in linear space',
            bn: 'রঙের টেক্সচার অবশ্যই sRGB হবে; কিন্তু নরমাল, রাফনেস ও মেটালিকের মতো গাণিতিক ডেটা ম্যাপ লিনিয়ার থাকবে'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'texture-pipeline',
      text: {
        en: 'The PBR Texture Pipeline & Mipmapping Architecture',
        bn: 'পিবিআর টেক্সচার পাইপলাইন ও মিপম্যাপিং আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To author a realistic 3D asset, textures are loaded using THREE.TextureLoader(). A complete PBR set comprises 5 maps: map (diffuse base color), normalMap, roughnessMap, metalnessMap, and aoMap (pre-baked contact shadowing). Textures should be sized in Powers of Two (such as 512x512, 1024x1024, or 2048x2048) so the GPU can generate Mipmaps — progressively downscaled versions that prevent shimmering moire artifacts at distance.',
        bn: 'বাস্তবসম্মত 3D অবজেক্টের জন্য THREE.TextureLoader() দিয়ে টেক্সচার লোড করা হয়। একটি পূর্ণাঙ্গ পিবিআর সেটে ৫টি ম্যাপ থাকে: map (মূল রঙ), normalMap, roughnessMap, metalnessMap এবং aoMap (কোণা-খাঁজের সফট ছায়া)। জিপিউর সর্বোচ্চ পারফরম্যান্সের জন্য টেক্সচারের মাপ ২-এর ঘাত (৫১২x৫১২, ১০২৪x১০২৪ বা ২০৪৮x২০৪৮) রাখা উচিত, যাতে জিপিউ সহজে মিপম্যাপ তৈরি করে দূরের বস্তুর ঝিকমিক দূর করতে পারে।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Three.js Materials Comparison Matrix',
        bn: 'থ্রি.জেএস ম্যাটেরিয়ালের তুলনা ম্যাট্রিক্স'
      },
      head: [
        { en: 'Feature / Trait', bn: 'বৈশিষ্ট্য' },
        { en: 'MeshBasic / MeshPhong', bn: 'বেসিক / ফং ম্যাটেরিয়াল' },
        { en: 'MeshStandard / MeshPhysical (PBR)', bn: 'স্ট্যান্ডার্ড / ফিজিক্যাল (PBR)' }
      ],
      rows: [
        [
          { en: 'Energy Conservation', bn: 'শক্তির নিত্যতা' },
          { en: 'Violated; specular highlights add arbitrary brightness without diminishing diffuse', bn: 'মান্য করে না; হাইলাইটের কারণে সামগ্রিক উজ্জ্বলতা অবাস্তবভাবে বেড়ে যায়' },
          { en: 'Enforced; diffuse light drops strictly as specular reflectivity rises', bn: 'মান্য করে; প্রতিফলন বাড়লে ডিফিউজ আলো সমানুপাতিক হারে কমে যায়' }
        ],
        [
          { en: 'Physical Optics', bn: 'অপটিক্যাল ফিজিক্স' },
          { en: 'Ad-hoc shininess exponents with plastic appearance across all models', bn: 'কৃত্রিম শাইনি সূচক, ফলে সব অবজেক্ট দেখতে প্লাস্টিকের মতো লাগে' },
          { en: 'Real Fresnel equations; true metallic conductivity and microfacet roughness', bn: 'বাস্তব ফ্রেনেল নীতি; নিখুঁত ধাতব প্রতিফলন ও মাইক্রো-সারফেস রাফনেস' }
        ],
        [
          { en: 'Performance Cost', bn: 'পারফরম্যান্স খরচ' },
          { en: 'Ultra-low GPU fragment shader instructions (0 lighting on basic)', bn: 'অত্যন্ত হালকা জিপিউ ইন্সট্রাকশন (বেসিক ম্যাটেরিয়ালে ০ লাইটিং)' },
          { en: 'Moderate to high GPU shader computations; requires balanced texture maps', bn: 'মাঝারি থেকে ভারী হিসাব; ব্যালেন্সড টেক্সচার ম্যাপের প্রয়োজন হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: PBR Fresnel Reflectance & Color Space Conversion',
        bn: 'চালনাযোগ্য সিমুলেশন: পিবিআর ফ্রেনেল প্রতিফলন ও কালার স্পেস রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script computes physical Fresnel reflectance across viewing angles using Schlicks approximation and performs sRGB-to-linear color space conversion:',
        bn: 'নিচের স্ক্রিপ্টটি শ্লিকের সমীকরণের সাহায্যে ফ্রেনেল প্রতিফলন হিসাব করে এবং sRGB থেকে লিনিয়ার কালার স্পেসে রূপান্তর প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'three-materials-sim',
      lang: 'javascript',
      code: `// PBR Fresnel Reflectance & Texture Color Space Math Simulator

// Schlick's approximation for Fresnel reflectance: F = F0 + (1 - F0) * (1 - cosTheta)^5
function calculateFresnel(f0, cosTheta) {
  return f0 + (1 - f0) * Math.pow(1 - cosTheta, 5);
}

// Convert sRGB color component [0, 255] to Linear float [0, 1] for PBR shader
function sRGBToLinear(c) {
  const norm = c / 255;
  return norm <= 0.04045 ? norm / 12.92 : Math.pow((norm + 0.055) / 1.055, 2.4);
}

// Dielectric material (e.g. plastic, water, wood) has F0 ≈ 0.04
const f0Dielectric = 0.04;
// Metallic material (e.g. gold, chrome) has F0 ≈ 0.95
const f0Metal = 0.95;

// Direct view: normal dot view = 1.0 (0 degrees)
const directDielectric = calculateFresnel(f0Dielectric, 1.0);
// Glancing grazing angle: normal dot view = 0.1 (≈ 84.3 degrees)
const grazingDielectric = calculateFresnel(f0Dielectric, 0.1);

// Metallic grazing reflection
const grazingMetal = calculateFresnel(f0Metal, 0.1);

// Midtone gray sRGB (128 out of 255) to Linear space
const linearGray = sRGBToLinear(128);

console.log('Dielectric base reflectivity at direct 0-degree angle (F0):', directDielectric);
// -> Dielectric base reflectivity at direct 0-degree angle (F0): 0.04

console.log('Dielectric reflectivity at glancing 84-degree grazing angle:', Number(grazingDielectric.toFixed(3)));
// -> Dielectric reflectivity at glancing 84-degree grazing angle: 0.607

console.log('Metal reflectivity at glancing 84-degree grazing angle:', Number(grazingMetal.toFixed(3)));
// -> Metal reflectivity at glancing 84-degree grazing angle: 0.98

console.log('Midtone sRGB value 128 converted to Linear PBR light space:', Number(linearGray.toFixed(3)));
// -> Midtone sRGB value 128 converted to Linear PBR light space: 0.216

console.log('Standard metallic parameter maximum value for pure conductors:', 1);
// -> Standard metallic parameter maximum value for pure conductors: 1`,
      caption: {
        en: 'Figure 3: PBR optics showing dielectric reflectivity leaping from 0.04 to 0.607 at grazing angles and sRGB 128 mapping to 0.216',
        bn: 'চিত্র ৩: পিবিআর অপটিক্সে ফ্রেনেল প্রতিফলন 0.04 থেকে 0.607 এ বৃদ্ধি এবং sRGB 128 এর লিনিয়ার মান 0.216 প্রমাণ'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Essential PBR Production Rules',
        bn: 'পিবিআর ম্যাটেরিয়ালের ৪টি অপরিহার্য নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Follow these 4 rules to maintain high visual quality and avoid rendering bugs:',
        bn: 'ভিজ্যুয়াল মান বজায় রাখতে এবং রেন্ডারিং ত্রুটি এড়াতে নিচের ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Set texture.colorSpace = THREE.SRGBColorSpace on Color Maps',
          def: {
            en: 'Always configure diffuse/albedo maps to SRGBColorSpace; failing to do so causes washed-out, milky colors',
            bn: 'মূল কালার ম্যাপে সর্বদা SRGBColorSpace দিন; না দিলে রঙ ফ্যাকাশে ও সাদাটে হয়ে যায়'
          }
        },
        {
          term: 'Rule 2: Keep Normal and Roughness Maps in Linear Space',
          def: {
            en: 'Never assign sRGB to normalMap, roughnessMap, or metalnessMap; math data must stay strictly linear',
            bn: 'নরমাল বা রাফনেস ম্যাপে কখনো sRGB দেবেন না; গাণিতিক ডেটা লিনিয়ার থাকা আবশ্যক'
          }
        },
        {
          term: 'Rule 3: Use Metallic as a Binary Value (0 or 1)',
          def: {
            en: 'Real-world materials are almost always either pure dielectrics (metalness: 0) or conductors (metalness: 1); avoid 0.5',
            bn: 'বাস্তবে বস্তু হয় অপরিবাহী (metalness: 0) না হয় ধাতু (metalness: 1) হয়; মাঝামাঝি 0.5 মান এড়িয়ে চলুন'
          }
        },
        {
          term: 'Rule 4: Call material.dispose() on Cleanup',
          def: {
            en: 'Materials compile custom GLSL programs on the GPU; always invoke material.dispose() to free GPU shader memory',
            bn: 'ম্যাটেরিয়াল জিপিউতে জিএলএসএল প্রোগ্রাম তৈরি করে; মেমোরি খালি করতে material.dispose() কল করুন'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-fresnel-dielectric-ex',
      kind: 'mcq',
      topic: 'Base reflectance F0 of dielectric non-metals',
      question: {
        en: 'What is the standard physical base reflectivity (F0) for common dielectric materials such as plastic, glass, and water at direct 0-degree incidence?',
        bn: 'সরাসরি ০ ডিগ্রি কোণে প্লাস্টিক, কাচ ও পানির মতো অপরিবাহী ডাই-ইলেক্ট্রিক পদার্থের স্বাভাবিক প্রতিফলন মান (F0) কত?'
      },
      options: [
        {
          en: 'Approximately 0.04 (4% base reflection)',
          bn: 'প্রায় 0.04 (৪% স্বাভাবিক প্রতিফলন)'
        },
        {
          en: '1.00 (100% mirror reflection)',
          bn: '1.00 (১০০% আয়নার মতো প্রতিফলন)'
        },
        {
          en: '0.50 (half absorbed, half reflected)',
          bn: '0.50 (অর্ধেক শোষণ, অর্ধেক প্রতিফলন)'
        },
        {
          en: '0.00 (zero reflection)',
          bn: '0.00 (শূন্য প্রতিফলন)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nearly all dielectrics reflect about 4% at direct viewing angles.',
        bn: 'প্রায় সব অপরিবাহী পদার্থ সরাসরি কোণে প্রায় ৪% আলো প্রতিফলিত করে।'
      },
      explanation: {
        en: 'Physics dictates that non-metallic dielectrics reflect roughly 4% (0.04) of light when viewed straight on, increasing to 100% at grazing angles (Fresnel effect).',
        bn: 'পদার্থবিজ্ঞানের নিয়ম অনুযায়ী প্লাস্টিক বা কাচ সরাসরি কোণে প্রায় ৪% (0.04) আলো প্রতিফলিত করে যা তীর্যক কোণে ১০০% এ পৌঁছে যায়।'
      }
    },
    {
      id: 'threejs-albedo-colorspace-ex',
      kind: 'mcq',
      topic: 'Correct color space for diffuse albedo textures',
      question: {
        en: 'Which colorSpace setting must you apply to a diffuse color map loaded with THREE.TextureLoader?',
        bn: 'THREE.TextureLoader দিয়ে লোড করা ডিফিউজ কালার ম্যাপে কোন colorSpace সেটিংটি প্রয়োগ করতে হবে?'
      },
      options: [
        {
          en: 'THREE.SRGBColorSpace',
          bn: 'THREE.SRGBColorSpace'
        },
        {
          en: 'THREE.LinearSRGBColorSpace',
          bn: 'THREE.LinearSRGBColorSpace'
        },
        {
          en: 'THREE.NoColorSpace',
          bn: 'THREE.NoColorSpace'
        },
        {
          en: 'THREE.CMYKColorSpace',
          bn: 'THREE.CMYKColorSpace'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standard human perceptual sRGB color.',
        bn: 'মানুষের চোখের জন্য স্ট্যান্ডার্ড sRGB কালার।'
      },
      explanation: {
        en: 'Base color maps are stored in sRGB by image editing software and must be converted to linear space inside the GPU shader via THREE.SRGBColorSpace.',
        bn: 'রঙের টেক্সচার sRGB স্পেসে তৈরি থাকে; জিপিউ শেডারে সঠিকভাবে ব্যবহারের জন্য THREE.SRGBColorSpace দিতে হয়।'
      }
    },
    {
      id: 'threejs-normal-map-role-ex',
      kind: 'mcq',
      topic: 'Role of normal maps in PBR pipelines',
      question: {
        en: 'What mathematical information does an RGB normal map encode?',
        bn: 'একটি আরজিবি নরমাল ম্যাপ মূলত কী ধরণের গাণিতিক তথ্য ধারণ করে?'
      },
      options: [
        {
          en: 'Tangent-space normal vector offsets (X in Red, Y in Green, Z in Blue) to simulate fine surface bumps',
          bn: 'ট্যানজেন্ট-স্পেস নরমাল ভেক্টর (লাল চ্যানেলে X, সবুজে Y, নীলে Z) যা সূক্ষ্ম খাঁজের বিভ্রম সৃষ্টি করে'
        },
        {
          en: 'Sound reverberation frequencies for spatial audio',
          bn: 'স্পেশিয়াল অডিওর জন্য শব্দের প্রতিধ্বনি ফ্রিকোয়েন্সি'
        },
        {
          en: 'Camera zoom coordinates in world space',
          bn: 'ওয়ার্ল্ড স্পেসে ক্যামেরার জুম স্থানাঙ্ক'
        },
        {
          en: 'The number of triangles in the geometry',
          bn: 'জিওমেট্রির মোট ত্রিভুজ সংখ্যা'
        }
      ],
      answer: 0,
      hint: {
        en: 'RGB channels represent XYZ directional vector offsets.',
        bn: 'আরজিবি চ্যানেলগুলো XYZ দিক নির্দেশক ভেক্টর মান প্রকাশ করে।'
      },
      explanation: {
        en: 'Normal maps perturb the per-pixel normal vector during fragment shading without modifying actual geometric vertices.',
        bn: 'নরমাল ম্যাপ ভার্টেক্স পরিবর্তন না করে প্রতি পিক্সেলে আলোর প্রতিফলনের কোণ বদলে খাঁজকাটা পৃষ্ঠের অনুভূতি দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-materials-textures',
    title: {
      en: 'PBR Materials & Textures Architecture Quiz',
      bn: 'পিবিআর ম্যাটেরিয়াল ও টেক্সচার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-colorspace',
        kind: 'mcq',
        topic: 'Color space configuration on albedo textures',
        question: {
          en: 'Which texture type MUST be configured with texture.colorSpace = THREE.SRGBColorSpace?',
          bn: 'কোন ধরণের টেক্সচারে অবশ্যই texture.colorSpace = THREE.SRGBColorSpace দিতে হয়?'
        },
        options: [
          {
            en: 'The base color albedo diffuse map',
            bn: 'মূল রঙের অ্যালবেডো ডিফিউজ ম্যাপে'
          },
          {
            en: 'The normalMap encoding tangent space vectors',
            bn: 'ট্যানজেন্ট ভেক্টর যুক্ত নরমাল ম্যাপে'
          },
          {
            en: 'The roughnessMap encoding glossiness values',
            bn: 'খসখসে ভাব নির্দেশকারী রাফনেস ম্যাপে'
          },
          {
            en: 'The metalnessMap separating conductors from dielectrics',
            bn: 'ধাতব বৈশিষ্ট্য সম্পন্ন মেটালিক ম্যাপে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Visual color map perceived by human eyes.',
          bn: 'মানুষের চোখের জন্য তৈরি মূল রঙের ম্যাপের কথা ভাবুন।'
        },
        explanation: {
          en: 'Base color maps represent visual color designed to be seen by human eyes and must be decoded from sRGB space into linear shader space.',
          bn: 'রঙের ম্যাপ মানুষের চোখের জন্য তৈরি, তাই জিপিউতে সঠিকভাবে প্রদর্শনের জন্য sRGB থেকে লিনিয়ার শেডার স্পেসে কনভার্ট করতে হয়।'
        }
      },
      {
        id: 'q-threejs-normalmap',
        kind: 'mcq',
        topic: 'How normal maps add micro-surface detail',
        question: {
          en: 'How does a normal map simulate high-frequency surface detail such as grooves and scratches?',
          bn: 'নরমাল ম্যাপ কিভাবে খাঁজ বা আঁচড়ের মতো সূক্ষ্ম পৃষ্ঠের বিবরণ অনুকরণ করে?'
        },
        options: [
          {
            en: 'By perturbing the surface normal vector per pixel without increasing geometric polygon count',
            bn: 'অতিরিক্ত পলিগন না বাড়িয়ে প্রতি পিক্সেলে পৃষ্ঠের নরমাল ভেক্টর পরিবর্তন করে'
          },
          {
            en: 'By subdividing every triangle into 1000 smaller micro-polygons on the CPU',
            bn: 'সিপিইউতে প্রতিটি ত্রিভুজকে ১০০০টি ছোট অংশে বিভক্ত করে'
          },
          {
            en: 'By increasing the camera field of view',
            bn: 'ক্যামেরার ফিল্ড অব ভিউ বৃদ্ধি করে'
          },
          {
            en: 'By applying CSS drop-shadow filters on the canvas element',
            bn: 'ক্যানভাসে সিএসএস ড্রপ-শ্যাডো ফিল্টার প্রয়োগ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Per-pixel light reflection adjustment without extra geometry.',
          bn: 'বাড়তি জ্যামিতি ছাড়া প্রতি পিক্সেলে আলোর প্রতিফলন পরিবর্তন।'
        },
        explanation: {
          en: 'Normal maps store X, Y, Z vector offsets in the R, G, B color channels, altering how light reflects across the flat triangle surface.',
          bn: 'নরমাল ম্যাপ আরজিবি চ্যানেলে X, Y, Z ভেক্টর সংরক্ষণ করে যা সমতল পৃষ্ঠেও আলোর চমৎকার প্রতিফলন ঘটায়।'
        }
      },
      {
        id: 'q-threejs-pbr-energy',
        kind: 'mcq',
        topic: 'PBR energy conservation law',
        question: {
          en: 'What fundamental law of physics is enforced by PBR materials?',
          bn: 'পিবিআর ম্যাটেরিয়াল পদার্থবিজ্ঞানের কোন মৌলিক নীতি অনুসরণ করে?'
        },
        options: [
          {
            en: 'Conservation of energy: reflected plus absorbed light cannot exceed incoming incident light',
            bn: 'শক্তির নিত্যতা: প্রতিফলিত ও শোষিত আলো আগত আলোর পরিমাণের বেশি হতে পারে না'
          },
          {
            en: 'Theory of special relativity time dilation',
            bn: 'আপেক্ষিকতার সময় প্রসারণ নীতি'
          },
          {
            en: 'Newtonian gravitational acceleration',
            bn: 'নিউটনের মহাকর্ষীয় ত্বরণ'
          },
          {
            en: 'Thermodynamic entropy degradation',
            bn: 'তাপগতিবিদ্যার এনট্রপি বৃদ্ধি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Conservation of energy.',
          bn: 'শক্তির সংরক্ষণশীলতার কথা ভাবুন।'
        },
        explanation: {
          en: 'Energy conservation guarantees that high specular reflections automatically reduce diffuse reflection, avoiding unnatural glowing highlights.',
          bn: 'শক্তির নিত্যতা নিশ্চিত করে যে অতিরিক্ত চকচকে প্রতিফলনে ডিফিউজ আলো কমে যাবে, ফলে আলো অবাস্তবভাবে জ্বলে ওঠে না।'
        }
      },
      {
        id: 'q-threejs-pot-textures',
        kind: 'mcq',
        topic: 'Power of two texture dimensions',
        question: {
          en: 'Why is it strongly recommended that textures use Power of Two (POT) dimensions like 1024x1024 or 2048x2048?',
          bn: 'কেন টেক্সচারের মাপ ১০২৪x১০২৪ বা ২০৪৮x২০৪৮ এর মতো ২-এর ঘাত (POT) রাখা বাঞ্ছনীয়?'
        },
        options: [
          {
            en: 'To enable hardware GPU mipmap generation and maximize GPU texture memory cache alignment',
            bn: 'জিপিউতে স্বয়ংক্রিয় মিপম্যাপ তৈরি এবং টেক্সচার ক্যাশের সর্বোচ্চ কার্যকারিতা নিশ্চিত করতে'
          },
          {
            en: 'Because non-power-of-two textures cannot be displayed in any web browser',
            bn: 'কারণ ব্রাউজারে ২-এর ঘাত ছাড়া অন্য কোনো মাপের টেক্সচার প্রদর্শন সম্ভব নয়'
          },
          {
            en: 'To make the image load without an internet connection',
            bn: 'ইন্টারনেট সংযোগ ছাড়াই ছবি লোড করানোর সুবিধার্থে'
          },
          {
            en: 'To force the camera to automatically orbit around the mesh',
            bn: 'ক্যামেরাকে স্বয়ংক্রিয়ভাবে অবজেক্টের চারপাশে ঘোরাতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Hardware mipmaps and GPU cache efficiency.',
          bn: 'হার্ডওয়্যার মিপম্যাপ এবং জিপিউ মেমোরি ক্যাশের কথা ভাবুন।'
        },
        explanation: {
          en: 'Power-of-two dimensions allow the GPU hardware to efficiently construct mipmap pyramids without software resampling or stretching.',
          bn: '২-এর ঘাত বিশিষ্ট মাপ থাকলে জিপিউ হার্ডওয়্যার কোনো বাড়তি চাপ ছাড়াই দক্ষভাবে মিপম্যাপ স্তরগুলো সাজিয়ে নিতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'lights-and-shadows',
    title: {
      en: 'Lights, Shadow Maps & Tone Mapping — Illuminating 3D Virtual Worlds',
      bn: 'লাইট, শ্যাডো ম্যাপ ও টোন ম্যাপিং — 3D ভার্চুয়াল বিশ্বকে আলোকিত করা'
    }
  }
};
