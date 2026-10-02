import type { Lesson } from '../../../lib/types';

export const PostProcessingAndEffectsLesson: Lesson = {
  slug: 'post-processing-and-effects',
  tech: 'threejs',
  title: {
    en: 'Post-Processing, Bloom & Shaders — Cinematic Visual Pipelines',
    bn: 'পোস্ট-প্রসেসিং, ব্লুম ও শেডার্স — সিনেমাটিক ভিজ্যুয়াল পাইপলাইন'
  },
  summary: {
    en: 'Standard WebGL rasterization paints geometries directly onto the HTML canvas buffer. Cinematic web experiences elevate visuals using Post-Processing pipelines. Instead of rendering straight to screen, Three.js captures the scene inside an off-screen FrameBuffer Object (RenderTarget). EffectComposer then chains sequential fullscreen shader passes across the buffer. UnrealBloomPass extracts bright luminance highlights to generate ethereal glows. SMAAPass restores sub-pixel anti-aliasing edges lost during off-screen rendering. FilmPass introduces organic cinematic film grain, while custom ShaderPass modules apply chromatic aberration. Understanding pass ordering and the terminal OutputPass ensures breathtaking visuals at 60FPS.',
    bn: 'সাধারণ ওয়েবজিএল সরাসরি এইচটিএমএল ক্যানভাসে 3D দৃশ্য এঁকে দেয়। আন্তর্জাতিক মানের ওয়েবসাইটগুলোর সিনেমাটিক ভিজ্যুয়াল তৈরি হয় পোস্ট-প্রসেসিং (Post-Processing) পাইপলাইনের মাধ্যমে। এখানে সিনকে সরাসরি স্ক্রিনে না দেখিয়ে প্রথমে একটি অফ-স্ক্রিন ফ্রেমবাফার অবজেক্টে (RenderTarget) আঁকা হয়। এরপর EffectComposer-এর মাধ্যমে ধারাবাহিকভাবে বিভিন্ন শেডার পাস চালানো হয়। UnrealBloomPass অতিরিক্ত উজ্জ্বল অংশগুলোকে আলোকিত নিয়ন গ্লোতে রূপান্তর করে। SMAAPass নিখুঁত অ্যান্টি-অ্যালাইজিং ফিরিয়ে আনে। FilmPass চমৎকার ফিল্মি গ্রেইন যোগ করে এবং ShaderPass দিয়ে সিনেমাটিক লেন্স এফেক্ট তৈরি করা যায়। ৬০ এফপিএস গতি ঠিক রেখে সিনেমাটিক ফিল পাওয়ার জন্য পোস্ট-প্রসেসিং অপরিহার্য।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'Core Concepts: The EffectComposer Architecture',
        bn: 'মূল ধারণা: EffectComposer আর্কিটেকচার ও রেন্ডার পাস'
      }
    },
    {
      type: 'visual',
      id: 'architecture'
    },
    {
      type: 'para',
      text: {
        en: 'Post-processing is the 3D equivalent of color grading and optical compositing in cinema. Rather than sending pixels directly to the monitor, the EffectComposer sets up a ping-pong buffer between 2 off-screen WebGL RenderTargets. Each pass reads from the active buffer, executes a custom GPU shading program on a full-screen quad, and writes into the destination buffer.',
        bn: 'পোস্ট-প্রসেসিং হলো সিনেমার কালার গ্রেডিং এবং লেন্স কম্পোজিটিংয়ের মতো একটি প্রক্রিয়া। সরাসরি স্ক্রিনে পিক্সেল পাঠানোর বদলে EffectComposer ২টি অফ-স্ক্রিন বাফারের মধ্যে ডেটা আদান-প্রদান করে। প্রতিটি পাস (Pass) আগের বাফার থেকে ছবি পড়ে, কাস্টম জিপিউ শেডিং প্রোগ্রাম দিয়ে বিশেষ এফেক্ট যোগ করে এবং পরের বাফারে জমা করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'EffectComposer',
          def: {
            en: 'The pipeline coordinator that manages off-screen render targets and executes sequential post-processing passes',
            bn: 'মূল সমন্বয়কারী যা অফ-স্ক্রিন রেন্ডার বাফারগুলো পরিচালনা করে ধারাবাহিকভাবে এফেক্ট পাস চালায়'
          }
        },
        {
          term: 'RenderPass',
          def: {
            en: 'The initial foundational pass that renders the primary 3D scene and camera view into the composer buffer',
            bn: 'প্রথম এবং মৌলিক পাস যা মূল 3D সিন ও ক্যামেরার দৃশ্যটিকে কম্পোজার বাফারে রেন্ডার করে'
          }
        },
        {
          term: 'UnrealBloomPass',
          def: {
            en: 'A multi-tier gaussian blur pass extracting high-luminance pixels to produce glowing halos around neon lights and lasers',
            bn: 'একটি মাল্টি-টায়ার গাউসিয়ান ব্লার পাস যা উজ্জ্বল পিক্সেলগুলোকে আলাদা করে নিয়ন আলোর দীপ্তি তৈরি করে'
          }
        },
        {
          term: 'OutputPass',
          def: {
            en: 'The terminal pass required in modern Three.js that applies final tone mapping and converts colors to SRGBColorSpace',
            bn: 'আধুনিক থ্রি.জেএস-এর চূড়ান্ত পাস যা টোন ম্যাপিং প্রয়োগ করে রঙগুলোকে সঠিক sRGB স্পেসে মনিটরে পাঠায়'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'bloom-and-antialiasing',
      text: {
        en: 'UnrealBloom Tuning & Off-Screen Anti-Aliasing (SMAA)',
        bn: 'আনরিয়েল-ব্লুম টিউনিং ও অফ-স্ক্রিন অ্যান্টি-অ্যালাইজিং (SMAA)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common pitfall with UnrealBloomPass is whole-scene fogging — where dark areas wash out with hazy glow. To isolate bloom strictly to neon elements, tune 3 parameters: threshold (minimum luminance, typically 0.85 to 0.95), strength (glow intensity), and radius. Another critical consideration: off-screen WebGL RenderTargets disable native browser MSAA anti-aliasing. To eliminate jagged edges, you must append an SMAAPass (Subpixel Morphological Antialiasing) or FXAAPass to the composer chain.',
        bn: 'আনরিয়েল-ব্লুম ব্যবহারের একটি সাধারণ ভুল হলো পুরো দৃশ্যে কুয়াশার মতো সাদাটে আভা পড়ে যাওয়া। শুধু নিয়ন বা উজ্জ্বল লাইটকে আলোকিত রাখতে ৩টি প্যারামিটার টিউন করতে হয়: threshold (ন্যূনতম উজ্জ্বলতা যা ০.৮৫ থেকে ০.৯৫ রাখা হয়), strength (আলোর তীব্রতা) এবং radius (আলোর বিস্তৃতি)। আরেকটি লক্ষণীয় বিষয়: অফ-স্ক্রিন বাফারে ব্রাউজারের নেটিভ অ্যান্টি-অ্যালাইজিং বন্ধ হয়ে যায়। ধারালো প্রান্ত দূর করতে কম্পোজারের শেষে একটি SMAAPass বা FXAAPass যুক্ত করতে হয়।'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Direct Canvas Render vs Post-Processing Pipeline',
        bn: 'সরাসরি রেন্ডার বনাম পোস্ট-প্রসেসিং পাইপলাইনের তুলনা'
      },
      head: [
        { en: 'Feature', bn: 'বৈশিষ্ট্য' },
        { en: 'Direct renderer.render()', bn: 'সরাসরি রেন্ডার' },
        { en: 'EffectComposer Pipeline', bn: 'পোস্ট-প্রসেসিং পাইপলাইন' }
      ],
      rows: [
        [
          { en: 'Visual Glow / Bloom', bn: 'ব্লুম ও নিয়ন আভা' },
          { en: 'Impossible; emissive materials appear as flat solid colors', bn: 'অসম্ভব; উজ্জ্বল ম্যাটেরিয়ালগুলো সমতল রঙের মতো দেখায়' },
          { en: 'Photorealistic atmospheric bloom and ethereal emissive light spill', bn: 'বাস্তবসম্মত বায়ুমণ্ডলীয় দীপ্তি ও চমৎকার আলোক আভা' }
        ],
        [
          { en: 'Antialiasing Mechanism', bn: 'অ্যান্টি-অ্যালাইজিং পদ্ধতি' },
          { en: 'Native hardware MSAA handled automatically by the browser', bn: 'ব্রাউজারের স্বয়ংক্রিয় হার্ডওয়্যার এমএসএএ' },
          { en: 'Requires explicit screen-space shader pass (SMAAPass or FXAAPass)', bn: 'আলাদা স্ক্রিন-স্পেস শেডার পাসের (SMAAPass) প্রয়োজন হয়' }
        ],
        [
          { en: 'VRAM Render Targets', bn: 'অফ-স্ক্রিন মেমোরি বাফার' },
          { en: 'Single default browser canvas backbuffer', bn: 'ক্যানভাসের একমাত্র ডিফল্ট ব্যাকবাফার' },
          { en: 'Two alternating 16-bit float FrameBuffer Objects (ping-pong)', bn: 'দুটি পর্যায়ক্রমিক ১৬-বিট ফ্লোট ফ্রেমবাফার অবজেক্ট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: UnrealBloom Luminance Threshold Extraction',
        bn: 'চালনাযোগ্য সিমুলেশন: আনরিয়েল-ব্লুম লুমিন্যান্স থ্রেশহোল্ড নিষ্কাশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following script implements the ITU-R BT.709 relative luminance formula and simulates the exact luminance filtering applied by UnrealBloomPass:',
        bn: 'নিচের স্ক্রিপ্টটি বিটি.৭০৯ আপেক্ষিক লুমিন্যান্স সূত্র প্রয়োগ করে এবং আনরিয়েল-ব্লুম পাসের উজ্জ্বলতা ফিল্টারিংয়ের হিসাব প্রদর্শন করে:'
      }
    },
    {
      type: 'code',
      id: 'three-postprocessing-sim',
      lang: 'javascript',
      code: `// Three.js Post-Processing & UnrealBloomPass Luminance Extraction Simulator

// Relative luminance formula per ITU-R BT.709
function calculateLuminance(r, g, b) {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// UnrealBloomPass threshold function
function extractBloom(luminance, threshold = 0.85, smoothWidth = 0.1) {
  if (luminance <= threshold) return 0;
  // Soft knee thresholding
  const excess = luminance - threshold;
  return Math.min(1.0, excess / smoothWidth);
}

// Pixel A: standard diffuse surface (R: 0.6, G: 0.5, B: 0.4)
const lumA = calculateLuminance(0.6, 0.5, 0.4);
const bloomA = extractBloom(lumA, 0.85);

// Pixel B: intense neon emissive laser (R: 1.0, G: 0.95, B: 0.9)
const lumB = calculateLuminance(1.0, 0.95, 0.9);
const bloomB = extractBloom(lumB, 0.85);

// Pixel C: ultra-bright HDR specular point (R: 2.5, G: 2.2, B: 2.0)
const lumC = calculateLuminance(2.5, 2.2, 2.0);
const bloomC = extractBloom(lumC, 0.85);

console.log('Luminance of standard surface pixel:', Number(lumA.toFixed(3)));
// -> Luminance of standard surface pixel: 0.514

console.log('Bloom extraction factor for standard surface (threshold 0.85):', bloomA);
// -> Bloom extraction factor for standard surface (threshold 0.85): 0

console.log('Luminance of neon emissive laser pixel:', Number(lumB.toFixed(3)));
// -> Luminance of neon emissive laser pixel: 0.957

console.log('Bloom extraction factor for neon emissive laser:', Number(bloomB.toFixed(3)));
// -> Bloom extraction factor for neon emissive laser: 1

console.log('Luminance of HDR specular highlight pixel:', Number(lumC.toFixed(3)));
// -> Luminance of HDR specular highlight pixel: 2.249

console.log('Bloom extraction factor for HDR specular highlight:', bloomC);
// -> Bloom extraction factor for HDR specular highlight: 1`,
      caption: {
        en: 'Figure 7: Standard pixel luminance 0.514 yields bloom factor 0, while neon laser (0.957) and HDR point (2.249) extract full bloom factor 1',
        bn: 'চিত্র ৭: সাধারণ পিক্সেলে উজ্জ্বলতা 0.514 এ ব্লুম ০, যেখানে নিয়ন আলো (0.957) ও এইচডিআর পয়েন্টে (2.249) পূর্ণ ব্লুম ১ নিষ্কাশিত'
      }
    },
    {
      type: 'heading',
      id: 'rules',
      text: {
        en: 'Four Production Post-Processing Architecture Rules',
        bn: 'পোস্ট-প্রসেসিংয়ের ৪টি প্রোডাকশন আর্কিটেকচার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Ensure top-tier visual polish and smooth framerates using these 4 rules:',
        bn: 'ভিজ্যুয়াল সৌন্দর্য ও উচ্চ ফ্রেম রেট নিশ্চিত করতে এই ৪টি নিয়ম মেনে চলুন:'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Rule 1: Always End with OutputPass',
          def: {
            en: 'In modern Three.js, append OutputPass as the last pass to handle tone mapping and color space conversion correctly',
            bn: 'রঙ ও টোন ম্যাপিং ঠিক রাখতে কম্পোজার পাইপলাইনের শেষে অবশ্যই OutputPass যুক্ত করুন'
          }
        },
        {
          term: 'Rule 2: Resize EffectComposer on Window Resize',
          def: {
            en: 'When the viewport resizes, call composer.setSize(width, height) alongside renderer.setSize() to prevent stretched textures',
            bn: 'উইন্ডো রিসাইজ হলে টেক্সচার বিকৃতি রোধ করতে renderer-এর সাথে composer.setSize() কল করুন'
          }
        },
        {
          term: 'Rule 3: Keep Bloom Threshold Above 0.85',
          def: {
            en: 'Do not set bloom threshold to 0 or 0.2; keeping it around 0.85 ensures only truly bright lights glow rather than the whole screen',
            bn: 'ব্লুম থ্রেশহোল্ড ০ বা ০.২ করবেন না; ০.৮৫ এর উপরে রাখলে কেবল আসল উজ্জ্বল লাইটগুলোই আলোকিত দেখাবে'
          }
        },
        {
          term: 'Rule 4: Call composer.render() in Place of renderer.render()',
          def: {
            en: 'In your requestAnimationFrame loop, replace renderer.render(scene, camera) with composer.render() so passes execute',
            bn: 'অ্যানিমেশন লুপে renderer.render-এর বদলে composer.render() কল করুন যাতে সব এফেক্ট কার্যকর হয়'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'threejs-composer-render-ex',
      kind: 'mcq',
      topic: 'Render loop call when using EffectComposer',
      question: {
        en: 'When post-processing is enabled with EffectComposer, what method should you invoke inside the requestAnimationFrame render loop?',
        bn: 'EffectComposer দিয়ে পোস্ট-প্রসেসিং চালু থাকলে রেন্ডার লুপে কোনটি কল করতে হবে?'
      },
      options: [
        {
          en: 'composer.render() (which triggers all passes in sequence)',
          bn: 'composer.render() (যা সব পাস ক্রমানুসারে চালায়)'
        },
        {
          en: 'renderer.render(scene, camera)',
          bn: 'renderer.render(scene, camera)'
        },
        {
          en: 'scene.updateMatrixWorld()',
          bn: 'scene.updateMatrixWorld()'
        },
        {
          en: 'camera.lookAt(0, 0, 0)',
          bn: 'camera.lookAt(0, 0, 0)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Call render on the composer instance.',
        bn: 'কম্পোজার ইনস্ট্যান্সে রেন্ডার কল করুন।'
      },
      explanation: {
        en: 'composer.render() executes the entire post-processing chain; calling renderer.render directly bypasses all effects and draws un-processed raw meshes.',
        bn: 'composer.render() সব এফেক্ট পাস চালিয়ে চূড়ান্ত ক্যানভাসে আঁকে; সরাসরি renderer.render ডাকলে এফেক্টগুলো কাজ করে না।'
      }
    },
    {
      id: 'threejs-outputpass-role-ex',
      kind: 'mcq',
      topic: 'Role of OutputPass in modern Three.js',
      question: {
        en: 'What is the mandatory final pass in modern Three.js EffectComposer pipelines?',
        bn: 'আধুনিক থ্রি.জেএস EffectComposer পাইপলাইনে বাধ্যতামূলক চূড়ান্ত পাস কোনটি?'
      },
      options: [
        {
          en: 'OutputPass (handles tone mapping and color space conversion)',
          bn: 'OutputPass (যা টোন ম্যাপিং ও কালার স্পেস রূপান্তর করে)'
        },
        {
          en: 'ClearPass',
          bn: 'ClearPass'
        },
        {
          en: 'DotScreenPass',
          bn: 'DotScreenPass'
        },
        {
          en: 'GlitchPass',
          bn: 'GlitchPass'
        }
      ],
      answer: 0,
      hint: {
        en: 'Final terminal output pass.',
        bn: 'সর্বশেষ টার্মিনাল আউটপুট পাসের কথা ভাবুন।'
      },
      explanation: {
        en: 'OutputPass applies the configured tone mapping algorithm and transforms linear internal colors to SRGBColorSpace before writing to the HTML canvas.',
        bn: 'OutputPass মনিটরে প্রদর্শনের আগে সঠিক টোন ম্যাপিং ও sRGB স্পেসে রঙ রূপান্তর নিশ্চিত করে।'
      }
    },
    {
      id: 'threejs-bloom-threshold-ex',
      kind: 'mcq',
      topic: 'UnrealBloomPass luminance threshold tuning',
      question: {
        en: 'Why should the UnrealBloomPass threshold typically be kept around 0.85 or higher?',
        bn: 'কেন UnrealBloomPass-এর থ্রেশহোল্ড সাধারণত ০.৮৫ বা তার বেশি রাখা উচিত?'
      },
      options: [
        {
          en: 'To prevent midtones and dark areas from glowing, restricting bloom to genuine light sources and emissive materials',
          bn: 'যাতে সাধারণ ছায়া ও অন্ধকার অংশে কুয়াশাচ্ছন্ন আভা না পড়ে কেবল আসল নিয়ন আলোতেই গ্লো তৈরি হয়'
        },
        {
          en: 'Because values below 0.85 crash the WebGL GPU driver',
          bn: 'কারণ ০.৮৫ এর কম দিলে ওয়েবজিএল ক্র্যাশ করে'
        },
        {
          en: 'To make the camera zoom in automatically',
          bn: 'ক্যামেরাকে স্বয়ংক্রিয়ভাবে জুম করানোর জন্য'
        },
        {
          en: 'To convert the canvas to black and white',
          bn: 'ক্যানভাসকে সাদাকালো বানানোর জন্য'
        }
      ],
      answer: 0,
      hint: {
        en: 'Isolating bright emissive highlights.',
        bn: 'শুধুমাত্র উজ্জ্বল নিয়ন আলোকে আলোকিত রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'A high threshold ensures only fragments with luminance above 0.85 bleed into the bloom blur buffers.',
        bn: 'উচ্চ থ্রেশহোল্ড নিশ্চিত করে যে শুধুমাত্র ০.৮৫ এর বেশি উজ্জ্বল পিক্সেলগুলোই ব্লুম ব্লারে যুক্ত হবে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-threejs-post-processing',
    title: {
      en: 'Post-Processing & Shaders Architecture Quiz',
      bn: 'পোস্ট-প্রসেসিং ও শেডার আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'q-threejs-postproc-renderloop',
        kind: 'mcq',
        topic: 'Replacing renderer.render with composer.render',
        question: {
          en: 'When using EffectComposer, what must you invoke inside the animation render loop instead of renderer.render(scene, camera)?',
          bn: 'EffectComposer ব্যবহারের সময় অ্যানিমেশন লুপে renderer.render(scene, camera)-এর বদলে কোনটি কল করতে হয়?'
        },
        options: [
          {
            en: 'composer.render()',
            bn: 'composer.render()'
          },
          {
            en: 'renderer.flushPostBuffers()',
            bn: 'renderer.flushPostBuffers()'
          },
          {
            en: 'scene.renderPostPipeline()',
            bn: 'scene.renderPostPipeline()'
          },
          {
            en: 'camera.captureFrame()',
            bn: 'camera.captureFrame()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Invokes all post-processing passes.',
          bn: 'সবগুলো পোস্ট-প্রসেসিং পাস কার্যকর করে।'
        },
        explanation: {
          en: 'composer.render() coordinates the entire chain of off-screen render passes and paints the final output buffer onto the HTML canvas.',
          bn: 'composer.render() সমস্ত অফ-স্ক্রিন পাসগুলোকে ক্রমানুসারে চালিয়ে চূড়ান্ত দৃশ্যটি ক্যানভাসে প্রদর্শন করে।'
        }
      },
      {
        id: 'q-threejs-outputpass',
        kind: 'mcq',
        topic: 'Role of OutputPass in modern Three.js',
        question: {
          en: 'What is the role of OutputPass in modern Three.js post-processing stacks?',
          bn: 'আধুনিক থ্রি.জেএস পোস্ট-প্রসেসিংয়ে OutputPass-এর ভূমিকা কী?'
        },
        options: [
          {
            en: 'It serves as the final pass that performs tone mapping and converts colors to SRGBColorSpace for accurate monitor display',
            bn: 'এটি চূড়ান্ত পাস হিসেবে টোন ম্যাপিং সম্পন্ন করে এবং মনিটরে সঠিক রঙের জন্য SRGBColorSpace-এ রূপান্তর করে'
          },
          {
            en: 'It exports the scene as a downloadable MP4 video',
            bn: 'এটি দৃশ্যটিকে ডাউনলোডযোগ্য এমপি৪ ভিডিও হিসেবে রূপান্তর করে'
          },
          {
            en: 'It pauses the WebGL GPU pipeline when the mouse is idle',
            bn: 'মাউস স্থির থাকলে এটি ওয়েবজিএল পাইপলাইন থামিয়ে রাখে'
          },
          {
            en: 'It compresses GLTF textures to reduce network bandwidth',
            bn: 'এটি ব্যান্ডউইথ কমাতে জিএলটিএফ টেক্সচার সংকুচিত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Final tone mapping and color space pass.',
          bn: 'চূড়ান্ত টোন ম্যাপিং ও কালার স্পেস পাস।'
        },
        explanation: {
          en: 'Without OutputPass at the end of the composer chain, colors look washed out and tone mapping is bypassed.',
          bn: 'কম্পোজারের শেষে OutputPass না থাকলে দৃশ্যটি ফ্যাকাশে দেখায় এবং সঠিক টোন ম্যাপিং কাজ করে না।'
        }
      },
      {
        id: 'q-threejs-bloom-fog',
        kind: 'mcq',
        topic: 'UnrealBloomPass whole-scene fogging cause',
        question: {
          en: 'If your UnrealBloomPass makes the entire 3D scene look like it is submerged in thick foggy haze, what parameter is set too low?',
          bn: 'UnrealBloomPass-এর কারণে যদি পুরো দৃশ্যটি ঘন কুয়াশায় ঢেকে যায়, তবে কোন প্যারামিটারটি খুব কম দেওয়া হয়েছে?'
        },
        options: [
          {
            en: 'threshold',
            bn: 'threshold'
          },
          {
            en: 'radius',
            bn: 'radius'
          },
          {
            en: 'camera.near',
            bn: 'camera.near'
          },
          {
            en: 'devicePixelRatio',
            bn: 'devicePixelRatio'
          }
        ],
        answer: 0,
        hint: {
          en: 'Minimum luminance filter setting.',
          bn: 'ন্যূনতম উজ্জ্বলতা ফিল্টারিং সেটিংয়ের কথা ভাবুন।'
        },
        explanation: {
          en: 'A low threshold (e.g. 0.1) causes dark and midtone surfaces to trigger bloom blur; raising threshold to 0.85 restricts bloom strictly to bright highlights.',
          bn: 'থ্রেশহোল্ড খুব কম থাকলে সাধারণ ছায়া ও অন্ধকার অংশও গ্লো করতে থাকে; এটি ০.৮৫ এ বাড়ালে শুধু আসল উজ্জ্বল আলোগুলোই জ্বলে ওঠে।'
        }
      },
      {
        id: 'q-threejs-smaa-msaa',
        kind: 'mcq',
        topic: 'Screen-space antialiasing in post-processing',
        question: {
          en: 'Why do you often need an SMAAPass or FXAAPass when using EffectComposer?',
          bn: 'EffectComposer ব্যবহারের সময় কেন SMAAPass বা FXAAPass ব্যবহার করতে হয়?'
        },
        options: [
          {
            en: 'Because standard browser canvas MSAA hardware antialiasing is lost when rendering to off-screen WebGL RenderTargets',
            bn: 'কারণ অফ-স্ক্রিন রেন্ডারটার্গেটে দৃশ্য রেন্ডার করার সময় ব্রাউজারের নিজস্ব এমএসএএ অ্যান্টি-অ্যালাইজিং কাজ করে না'
          },
          {
            en: 'To make the camera rotate at double the speed',
            bn: 'ক্যামেরাকে দ্বিগুণ গতিতে ঘোরানোর সুবিধার জন্য'
          },
          {
            en: 'To enable audio spatialization',
            bn: 'স্পেশিয়াল 3D অডিও চালু করার জন্য'
          },
          {
            en: 'Because WebGL does not allow meshes with more than 10 triangles',
            bn: 'কারণ ওয়েবজিএলে ১০টির বেশি ত্রিভুজ যুক্ত মেশ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Off-screen buffers bypass canvas MSAA.',
          bn: 'অফ-স্ক্রিন বাফারে ক্যানভাসের হার্ডওয়্যার এমএসএএ বাইপাস হয়।'
        },
        explanation: {
          en: 'Off-screen framebuffers bypass standard canvas MSAA; adding a screen-space antialiasing pass restores razor-sharp, smooth geometry edges.',
          bn: 'অফ-স্ক্রিন বাফার ক্যানভাসের এমএসএএ বাইপাস করে; তাই একটি স্ক্রিন-স্পেস শেডার পাস যুক্ত করে মসৃণ প্রান্ত ফিরিয়ে আনতে হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-3d-showcase-capstone',
    title: {
      en: 'Interactive 3D Product Showcase & Raycasting — Real-World Capstone',
      bn: 'ইন্টারেক্টিভ 3D প্রোডাক্ট শোকেস ও রে-কাস্টিং — রিয়েল-ওয়ার্ল্ড ক্যাপস্টোন'
    }
  }
};
