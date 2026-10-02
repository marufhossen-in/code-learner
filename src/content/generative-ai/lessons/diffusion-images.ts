import type { Lesson } from '../../../lib/types';

export const DiffusionImagesLesson: Lesson = {
  slug: 'diffusion-images',
  tech: 'generative-ai',
  title: {
    en: 'Diffusion Models and Image Generation — Noise Schedules, U-Net, and Latent Economics',
    bn: 'ডিফিউশন মডেল ও ইমেজ জেনারেশন: নয়েজ শিডিউল, ইউ-নেট ও ল্যাটেন্ট স্পেস'
  },
  summary: {
    en: 'Diffusion models synthesize high-fidelity images by inverting a continuous destruction process. In the forward process, Gaussian noise is incrementally added according to a variance schedule until the image collapses into pure entropy. In the reverse process, a neural network (typically a U-Net architecture with cross-attention) iteratively predicts and subtracts the added noise, guided by text embeddings. In this lesson, you will master forward and reverse Markov chains, explore Classifier-Free Guidance (CFG) for prompt adherence, examine Latent Diffusion (Stable Diffusion) in compressed autoencoder space, and simulate a 1D denoising schedule in TypeScript.',
    bn: 'ডিফিউশন মডেল এক ধারাবাহিক বিনাশ প্রক্রিয়াকে বিপরীতমুখী করার মাধ্যমে চমৎকার ও বাস্তবসম্মত ছবি তৈরি করে। ফরওয়ার্ড প্রক্রিয়ায় একটি নির্ধারিত ভ্যারিয়্যান্স শিডিউল অনুসারে ধাপে ধাপে গসিয়ান নয়েজ যোগ করা হয় যতক্ষণ না ছবিটি সম্পূর্ণ এলোমেলো নয়েজে পরিণত হয়। রিভার্স বা বিপরীত প্রক্রিয়ায় একটি নিউরাল নেটওয়ার্ক (সাধারণত ক্রস-অ্যাটেনশনযুক্ত ইউ-নেট) টেক্সট প্রম্পটের নির্দেশনায় প্রতিটি ধাপে পূর্বাভাসকৃত নয়েজ বিয়োগ করে কাঙ্ক্ষিত ছবি ফুটিয়ে তোলে। এই পাঠে মারকভ চেইন নয়েজ শিডিউল, প্রম্পটের আনুগত্য বাড়াতে ক্লাসিফায়ার-ফ্রি গাইডেন্স (CFG), ল্যাটেন্ট ডিফিউশনের মেমরি সাশ্রয়ী কৌশল এবং ১-মাত্রিক ডিনয়েজিং শিডিউলের বাস্তব টাইপস্ক্রিপ্ট কোড বিশদভাবে বিশ্লেষণ করা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'multimodal-audio',
    tech: 'generative-ai',
    title: {
      en: 'Multimodal Models and Audio Synthesis — Joint Embeddings, CLIP, and Audio Generative Pipelines',
      bn: 'মাল্টিমোডাল মডেল ও অডিও সিন্থেসিস: জয়েন্ট এমবেডিং, ক্লিপ ও অডিও পাইপলাইন'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'dual-diffusion-mechanism-overview',
      text: {
        en: 'The Dual Diffusion Mechanism: Forward Destruction and Reverse Synthesis',
        bn: 'দ্বৈত ডিফিউশন প্রক্রিয়া: ফরওয়ার্ড বিনাশ এবং রিভার্স পুনর্নির্মাণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Generative image synthesis achieved a historic breakthrough with diffusion models. You can understand this process as treating creative image generation as an iterative denoising problem.',
        bn: 'ডিফিউশন মডেলের উদ্ভাবনের মাধ্যমে জেনারেটিভ ছবি তৈরির ক্ষেত্রে এক যুগান্তকারী পরিবর্তন এসেছে। আপনি এই পদ্ধতিকে একটি ধারাবাহিক নয়েজ অপসারণ বা ডিনয়েজিং সমস্যা হিসেবে বিবেচনা করতে পারেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The system operates across two complementary phases. In the forward process, Gaussian noise is incrementally added to a clean training photograph across 1000 discrete timesteps until all structured visual signals collapse into pure static noise. Because this forward noise schedule is defined by fixed mathematical formulas, it requires no trainable parameters. The neural network is trained exclusively on the reverse process. Given a noisy image and its current timestep, it learns to predict the exact noise vector that was added, subtracting a calibrated portion at each step to unveil a crisp image.',
        bn: 'এই সিস্টেমটি মূলত ২ (দুটি) পরিপূরক ধাপে পরিচালিত হয়। ফরওয়ার্ড প্রক্রিয়ায় ১০০০টি সুনির্দিষ্ট ধাপে একটি স্পষ্ট ছবির ওপর ক্রমাগত গসিয়ান নয়েজ যুক্ত করা হয় যতক্ষণ না সমস্ত দৃশ্যমান তথ্য সম্পূর্ণ অস্পষ্ট এলোমেলো নয়েজে রূপ নেয়। যেহেতু এই নয়েজ যোগ করার নিয়মটি পূর্বনির্ধারিত গাণিতিক ফর্মুলা মেনে চলে, তাই এতে কোনো প্রশিক্ষণের প্রয়োজন হয় না। নিউরাল নেটওয়ার্ক মূলত বিপরীত বা রিভার্স প্রক্রিয়ায় প্রশিক্ষিত হয়। নির্দিষ্ট ধাপে উপস্থিত নয়েজযুক্ত ছবি দেখে মডেলটি যুক্ত হওয়া নয়েজের সঠিক মান অনুমান করতে শেখে এবং তা ক্রমান্বয়ে বিয়োগ করে স্পষ্ট ছবি উদ্ধার করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'forward-diffusion',
          def: {
            en: 'A fixed mathematical Markov process that gradually adds Gaussian noise to an image across T discrete timesteps until it becomes pure static.',
            bn: 'একটি নির্ধারিত মারকভ প্রক্রিয়া যা T সংখ্যক ধাপে ছবিতে ক্রমাগত গসিয়ান নয়েজ যোগ করে সম্পূর্ণ এলোমেলো নয়েজে রূপান্তর করে।'
          }
        },
        {
          term: 'reverse-diffusion',
          def: {
            en: 'The learned neural process where a model predicts the exact noise vector added at timestep t, subtracting it to recover clean structure.',
            bn: 'প্রশিক্ষিত নিউরাল প্রক্রিয়া যেখানে মডেল নির্দিষ্ট ধাপে যুক্ত নয়েজের পূর্বাভাস দেয় এবং তা ক্রমান্বয়ে বিয়োগ করে স্পষ্ট ছবি উদ্ধার করে।'
          }
        },
        {
          term: 'u-net-architecture',
          def: {
            en: 'A convolutional neural network with an encoder-decoder bottleneck and residual skip connections, conditioned on timestep and text embeddings.',
            bn: 'স্কিপ কানেকশন এবং বটলনেক সমৃদ্ধ একটি বিশেষ এনকোডার-ডিকোডার নেটওয়ার্ক যা নয়েজ অপসারণে ব্যবহৃত হয়।'
          }
        },
        {
          term: 'classifier-free-guidance',
          def: {
            en: 'An inference technique that amplifies the influence of the text prompt by extrapolating between conditioned and unconditioned model predictions.',
            bn: 'প্রম্পটহীন এবং প্রম্পটযুক্ত পূর্বাভাসের পার্থক্যের ওপর ভিত্তি করে ছবির ওপর টেক্সট নির্দেশনার প্রভাব বহুগুণ বাড়ানোর পদ্ধতি।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'pixel-vs-latent-diffusion-table',
      text: {
        en: 'Comparison Matrix: Pixel-Space Diffusion vs Latent Diffusion Models',
        bn: 'তুলনামূলক ম্যাট্রিক্স: পিক্সেল-স্পেস ডিফিউশন বনাম ল্যাটেন্ট ডিফিউশন মডেল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Moving diffusion operations from high-resolution pixel matrices into compressed latent spaces transformed the speed and hardware feasibility of image generation.',
        bn: 'উচ্চ রেজোলিউশনের পিক্সেল ম্যাট্রিক্স থেকে কমপ্রেসড ল্যাটেন্ট স্পেসে রূপান্তর ইমেজ জেনারেশনের গতি ও হার্ডওয়্যার খরচে আমূল পরিবর্তন এনেছে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Architectural Dimension', bn: 'স্থাপত্যিক মাত্রা' },
        { en: 'Pixel-Space Diffusion (DDPM)', bn: 'পিক্সেল-স্পেস ডিফিউশন (DDPM)' },
        { en: 'Latent Diffusion Models (LDM)', bn: 'ল্যাটেন্ট ডিফিউশন মডেল (LDM)' },
        { en: 'Production Impact', bn: 'প্রোডাকশনের প্রভাব' }
      ],
      rows: [
        [
          { en: 'Computational Domain', bn: 'গণনার ক্ষেত্র' },
          { en: 'Raw RGB pixel matrix (e.g. 512x512x3 = 786432 values)', bn: 'কাঁচা আরজিবি পিক্সেল (যেমন 512x512x3 = ৭৮৬৪৩২ মান)' },
          { en: 'Compressed latent tensor (e.g. 64x64x4 = 16384 values)', bn: 'কমপ্রেসড ল্যাটেন্ট টেনসর (যেমন 64x64x4 = ১৬৩৮৪ মান)' },
          { en: 'Reduces memory and computational operations by 48 times', bn: 'মেমরি এবং হিসাবের পরিমাণ প্রায় ৪৮ গুণ কমিয়ে দেয়' }
        ],
        [
          { en: 'Inference Steps Required', bn: 'প্রয়োজনীয় ইনফারেন্স ধাপ' },
          { en: 'Standard DDPM requires 500 to 1000 iterative steps', bn: 'সাধারণ DDPM-এ ৫০০ থেকে ১০০০টি পুনরাবৃত্ত ধাপ লাগে' },
          { en: 'Modern samplers (Euler, DDIM) complete in 20 to 50 steps', bn: 'আধুনিক স্যাম্পলার (Euler, DDIM) ২০ থেকে ৫০ ধাপে সম্পন্ন করে' },
          { en: 'Generates high-resolution images in 1 to 3 seconds on modern GPUs', bn: 'আধুনিক জিপিউতে ১ থেকে ৩ সেকেন্ডের মধ্যে ছবি তৈরি করে' }
        ],
        [
          { en: 'Text Conditioning Interface', bn: 'টেক্সট সংযোগ পদ্ধতি' },
          { en: 'Concatenates class labels into hidden channels', bn: 'হিডেন চ্যানেলে ক্লাস লেবেল সরাসরি যুক্ত করে' },
          { en: 'Cross-attention layers driven by CLIP text embeddings', bn: 'ক্রস-অ্যাটেনশনের মাধ্যমে ক্লিপ টেক্সট এমবেডিং ব্যবহার করে' },
          { en: 'Enables rich semantic adherence to complex descriptive prompts', bn: 'জটিল ও বিস্তারিত বর্ণনামূলক প্রম্পট সঠিকভাবে ফুটিয়ে তোলে' }
        ],
        [
          { en: 'Target Hardware Requirements', bn: 'প্রয়োজনীয় হার্ডওয়্যার' },
          { en: 'Enterprise datacenter accelerators with 40GB+ VRAM', bn: '৪০জিবি মেমরিসমৃদ্ধ বড় ডাটা সেন্টার সার্ভার' },
          { en: 'Consumer GPUs with 8GB to 12GB VRAM', bn: 'সাধারণ কনজিউমার জিপিউ (৮জিবি থেকে ১২জিবি মেমরি)' },
          { en: 'Permits local on-device inference on personal laptops', bn: 'ব্যক্তিগত ল্যাপটপেও অফলাইনে ছবি তৈরির সুযোগ করে দেয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-denoising-code',
      text: {
        en: 'Executable Iterative Denoising Schedule Simulation',
        bn: 'ধারাবাহিক ডিনয়েজিং শিডিউলের বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program simulates a 5-step iterative reverse diffusion schedule on a 1-dimensional signal, demonstrating how predicting and subtracting noise drives the error down from 0.185 to 0.0001.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি ১-মাত্রিক সিগন্যালের ওপর ৫-ধাপের রিভার্স ডিফিউশন শিডিউল প্রদর্শন করে। লক্ষ্য করুন কীভাবে ধাপে ধাপে নয়েজ বিয়োগ করে গড় ত্রুটি ০.১৮৫ থেকে ০.০০০১ এ নামিয়ে আনা হয়েছে।'
      }
    },
    {
      type: 'code',
      code: `// Simulating a 5-step iterative reverse denoising schedule
interface DenoiseStepResult {
  step: number;
  currentSignal: number;
  meanSquaredError: number;
}

let noisySignal = 0.85;
const targetCleanSignal = 0.42;

// Initial Mean Squared Error prior to denoising
const initialMse = Math.pow(noisySignal - targetCleanSignal, 2);

const scheduleResults: DenoiseStepResult[] = [];

// Reverse diffusion loop iterating backwards from step 5 to step 1
for (let t = 5; t >= 1; t--) {
  // Model predicts the added noise fraction and subtracts it
  const predictedNoiseDelta = (noisySignal - targetCleanSignal) * 0.55;
  noisySignal -= predictedNoiseDelta;

  const currentMse = Math.pow(noisySignal - targetCleanSignal, 2);
  scheduleResults.push({
    step: t,
    currentSignal: Number(noisySignal.toFixed(3)),
    meanSquaredError: Number(currentMse.toFixed(4))
  });
}

console.log('Initial MSE:', initialMse.toFixed(3));
scheduleResults.forEach(res => {
  console.log('Step ' + res.step + ': Signal=' + res.currentSignal + ', MSE=' + res.meanSquaredError);
});

// prints: Initial MSE: 0.185
// prints: Step 5: Signal=0.613, MSE=0.0374
// prints: Step 4: Signal=0.507, MSE=0.0076
// prints: Step 3: Signal=0.459, MSE=0.0015
// prints: Step 2: Signal=0.438, MSE=0.0003
// prints: Step 1: Signal=0.428, MSE=0.0001`
    },
    {
      type: 'heading',
      id: 'cfg-and-latent-economics',
      text: {
        en: 'Classifier-Free Guidance and Latent Space Economics',
        bn: 'ক্লাসিফায়ার-ফ্রি গাইডেন্স এবং ল্যাটেন্ট স্পেসের অর্থনীতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'During reverse sampling, a model faces a fundamental tension between diversity and prompt adherence. Classifier-Free Guidance (CFG) controls this balance through the formula: predicted noise = uncond + w * (cond - uncond), where w represents the guidance scale. When w = 1, the model follows standard conditional sampling. When w is set between 7 and 9, prompt adherence is amplified dramatically, pulling visual features towards the prompt while suppressing generic compositions. Latent Diffusion Models (like Stable Diffusion) perform this entire guidance computation inside an 8x downsampled latent space managed by a Variational Autoencoder (VAE), generating high-resolution images in seconds.',
        bn: 'রিভার্স স্যাম্পলিং চলাকালীন মডেলকে বৈচিত্র্য এবং প্রম্পটের আক্ষরিক আনুগত্যের মাঝে ভারসাম্য বজায় রাখতে হয়। ক্লাসিফায়ার-ফ্রি গাইডেন্স (CFG) এই ভারসাম্য নিয়ন্ত্রণ করে: মোট নয়েজ = uncond + w * (cond - uncond), যেখানে w হলো গাইডেন্স স্কেল। যখন w = ১ থাকে, মডেলটি সাধারণ নিয়মে চলে। কিন্তু w এর মান ৭ থেকে ৯ এর মধ্যে নির্ধারণ করলে প্রম্পটের বৈশিষ্ট্যগুলো চমৎকারভাবে ফুটে ওঠে। ল্যাটেন্ট ডিফিউশন মডেল (যেমন স্ট্যাবল ডিফিউশন) একটি ভ্যারিয়েশনাল অটোএনকোডার (VAE) এর মাধ্যমে ৮ গুণ কমপ্রেসড ল্যাটেন্ট স্পেসে এই পুরো প্রক্রিয়াটি পরিচালনা করে মাত্র কয়েক সেকেন্ডে ছবি তৈরি সম্পন্ন করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Forward adds noise, reverse creates: Fixed math turns images to static; learned neural U-Nets reverse the damage.',
          bn: 'ফরওয়ার্ডে নয়েজ যোগ, রিভার্সে সৃষ্টি: নির্দিষ্ট গণিত ছবিকে নয়েজে রূপান্তর করে; আর প্রশিক্ষিত ইউ-নেট তা মেরামত করে ছবি বানায়।'
        },
        {
          en: 'Latent space saves compute: Operating in 8x compressed VAE latent spaces cuts computational requirements by 48x.',
          bn: 'ল্যাটেন্ট স্পেসে মেমরি সাশ্রয়: ৮ গুণ কমপ্রেসড ল্যাটেন্ট স্পেসে কাজ করায় কম্পিউটেশন খরচ প্রায় ৪৮ গুণ কমে আসে।'
        },
        {
          en: 'CFG governs prompt obedience: Higher guidance scales enforce strict prompt alignment; lower scales foster creative drift.',
          bn: 'CFG প্রম্পটের আনুগত্য নিয়ন্ত্রণ করে: উচ্চ গাইডেন্স স্কেল প্রম্পটকে কঠোরভাবে অনুসরণ করে; কম স্কেল ছবিতে সৃজনশীলতা বাড়ায়।'
        },
        {
          en: 'Predicting noise is easier than predicting pixels: Neural networks excel at estimating additive Gaussian noise.',
          bn: 'পিক্সেলের চেয়ে নয়েজ অনুমান সহজ: সরাসরি নতুন পিক্সেল খোঁজার চেয়ে যুক্ত হওয়া নয়েজের মান অনুমান করা নিউরাল নেটের জন্য সহজ।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'diff-img-ex1',
      kind: 'mcq',
      topic: 'predicting-noise-vs-direct-image',
      question: {
        en: 'Why do modern diffusion models train the neural U-Net to predict the added noise vector epsilon rather than predicting the clean original image directly?',
        bn: 'আধুনিক ডিফিউশন মডেলে নিউরাল ইউ-নেটকে সরাসরি পরিষ্কার ছবির বদলে কেন যুক্ত হওয়া নয়েজ ভেক্টর অনুমানের প্রশিক্ষণ দেওয়া হয়?'
      },
      options: [
        {
          en: 'Noise follows a known, standardized Gaussian distribution with zero mean, providing well-conditioned targets and stable gradients throughout the training schedule',
          bn: 'নয়েজ একটি নির্দিষ্ট ও সুশৃঙ্খল শূন্য-গড় বিশিষ্ট গসিয়ান বিন্যাস অনুসরণ করে, যা প্রশিক্ষণ চলাকালীন স্থিতিশীল লক্ষ্য ও স্বাভাবিক গ্রেডিয়েন্ট প্রবাহ নিশ্চিত করে'
        },
        {
          en: 'Because clean images are illegal to save in GPU memory cache',
          bn: 'কারণ গ্রাফিক্স কার্ডের ক্যাশ মেমরিতে পরিষ্কার ছবি সেভ করা বেআইনি'
        },
        {
          en: 'Because predicting noise eliminates the need for electricity in data centers',
          bn: 'কারণ নয়েজ অনুমান করলে সার্ভারের বিদ্যুৎ খরচ পুরোপুরি বন্ধ হয়ে যায়'
        },
        {
          en: 'Because computer monitors can only display pure static noise',
          bn: 'কারণ কম্পিউটারের স্ক্রিন কেবল এলোমেলো নয়েজ প্রদর্শন করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Gaussian noise has standard variance and mean 0 across all images, making it mathematically much easier to optimize with MSE loss.',
        bn: 'গসিয়ান নয়েজের গড় সর্বদা ০ (শূন্য) এবং বিস্তার নির্দিষ্ট থাকে, যার ফলে লস ফাংশন অপ্টিমাইজ করা অনেক সহজ হয়।'
      },
      explanation: {
        en: 'Predicting standardized Gaussian noise simplifies optimization and stabilizes training across widely varied timesteps.',
        bn: 'নয়েজের সুষম পরিসংখ্যানিক কাঠামোর কারণে মডেল প্রশিক্ষণ অত্যন্ত মসৃণ ও স্থিতিশীলভাবে সম্পন্ন হয়।'
      }
    },
    {
      id: 'diff-img-ex2',
      kind: 'mcq',
      topic: 'latent-diffusion-vae-role',
      question: {
        en: 'What critical functional role does the Variational Autoencoder (VAE) play in Latent Diffusion Models like Stable Diffusion?',
        bn: 'স্ট্যাবল ডিফিউশনের মতো ল্যাটেন্ট ডিফিউশন মডেলে ভ্যারিয়েশনাল অটোএনকোডার (VAE) কোন অত্যন্ত গুরুত্বপূর্ণ ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It compresses high-resolution pixel matrices into a compact 8x downsampled latent representation, allowing the heavy diffusion U-Net to run at high speed on consumer GPUs',
          bn: 'এটি উচ্চ রেজোলিউশনের পিক্সেল ম্যাট্রিক্সকে ৮ গুণ সংকুচিত ল্যাটেন্ট স্পেসে রূপান্তর করে, যার ফলে ভারী ইউ-নেট সাধারণ গ্রাফিক্স কার্ডেও দ্রুত গতিতে চলতে পারে'
        },
        {
          en: 'It translates the generated picture into a printed paper document',
          bn: 'এটি উৎপাদিত ছবিকে একটি ছাপা কাগজের নথিতে রূপান্তর করে'
        },
        {
          en: 'It formats the hard drive of the computer every 20 minutes',
          bn: 'এটি প্রতি ২০ মিনিট পর পর কম্পিউটারের হার্ড ড্রাইভ ফরম্যাট করে'
        },
        {
          en: 'It forces all generated images to display only black and white colors',
          bn: 'এটি সমস্ত উৎপাদিত ছবিকে কেবল সাদাকালো রঙে প্রদর্শন করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pixel space has massive redundant data. The VAE compresses 512x512x3 down to 64x64x4 before running diffusion.',
        bn: 'পিক্সেল স্পেসে অপ্রয়োজনীয় ডাটা থাকে। VAE ছবিকে ৬৪ গুণ সংকুচিত করে ল্যাটেন্ট স্পেসে নিয়ে যায়।'
      },
      explanation: {
        en: 'The VAE abstracts away high-frequency imperceptible pixel redundancies, letting diffusion focus on core semantic composition.',
        bn: 'ভিএই অপ্রয়োজনীয় পিক্সেল বাদ দিয়ে মূল অর্থবহ বৈশিষ্ট্য সংকুচিত করে ছবি তৈরির গতি বহুগুণ বাড়িয়ে দেয়।'
      }
    },
    {
      id: 'diff-img-ex3',
      kind: 'mcq',
      topic: 'cfg-scale-visual-tradeoffs',
      question: {
        en: 'What visual artifacts typically occur when the Classifier-Free Guidance (CFG) scale w is set excessively high (such as w > 15)?',
        bn: 'ক্লাসিফায়ার-ফ্রি গাইডেন্স (CFG) স্কেল w এর মান অতিরিক্ত বেশি নির্ধারণ করলে (যেমন w > ১৫) সাধারণত কোন ধরনের ত্রুটি দেখা যায়?'
      },
      options: [
        {
          en: 'Over-saturation, harsh contrast, unnatural edge boundaries, and plastic-looking pixel burn caused by extreme vector extrapolation',
          bn: 'মাত্রাতিরিক্ত রঙের স্যাচুরেশন, কৃত্রিম কন্ট্রাস্ট, অস্বাভাবিক শক্ত প্রান্ত এবং অতিরিক্ত এক্সট্রাপোলেশনের কারণে পোড়া পিক্সেলের মতো বিকৃতি'
        },
        {
          en: 'The picture becomes completely transparent and invisible',
          bn: 'ছবিটি সম্পূর্ণ স্বচ্ছ এবং অদৃশ্য হয়ে যায়'
        },
        {
          en: 'The picture transforms into a spreadsheet of financial data',
          bn: 'ছবিটি আর্থিক হিসাবের একটি স্প্রেডশীটে রূপান্তরিত হয়'
        },
        {
          en: 'The computer sound card begins playing classical piano music',
          bn: 'কম্পিউটারের সাউন্ড কার্ডে ক্লাসিক্যাল পিয়ানো সুর বাজতে শুরু করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Extrapolating too far beyond the natural distribution pushes activations outside normal ranges, blowing out color channels.',
        bn: 'স্বাভাবিক সীমার বেশি টানলে রঙের চ্যানেলগুলো বিকৃত হয়ে চড়া ও অপ্রাকৃতিক দেখায়।'
      },
      explanation: {
        en: 'High guidance scales over-emphasize conditioned signals at the expense of distribution realism, causing color clipping and burn artifacts.',
        bn: 'অতিরিক্ত গাইডেন্স দিলে মডেল বাস্তবসম্মত অনুপাত হারিয়ে কৃত্রিম ও অতিরিক্ত চড়া রঙের ছবি তৈরি করে।'
      }
    },
    {
      id: 'diff-img-ex4',
      kind: 'mcq',
      topic: 'forward-diffusion-no-learning',
      question: {
        en: 'Why does the forward diffusion process (adding noise across timesteps) require zero machine learning or backpropagation training?',
        bn: 'ফরওয়ার্ড ডিফিউশন প্রক্রিয়ায় (ধাপে ধাপে নয়েজ যোগ করা) কেন কোনো মেশিন লার্নিং বা ব্যাকপ্রোপাগেশন প্রশিক্ষণের প্রয়োজন হয় না?'
      },
      options: [
        {
          en: 'Because it is a fixed closed-form mathematical formula using a deterministic variance schedule (beta schedule) to sample Gaussian noise directly at any timestep t',
          bn: 'কারণ এটি একটি পূর্বনির্ধারিত গাণিতিক ফর্মুলা যা ভ্যারিয়্যান্স শিডিউল (বিটা শিডিউল) ব্যবহার করে যেকোনো ধাপে সরাসরি গসিয়ান নয়েজ যোগ করতে পারে'
        },
        {
          en: 'Because forward diffusion was invented before computers were built',
          bn: 'কারণ কম্পিউটার আবিষ্কারের পূর্বে এই পদ্ধতি তৈরি হয়েছিল'
        },
        {
          en: 'Because adding noise is physically impossible on digital microchips',
          bn: 'কারণ ডিজিটাল চিপে নয়েজ যোগ করা অসম্ভব'
        },
        {
          en: 'Because the forward process runs exclusively inside computer monitors',
          bn: 'কারণ এই প্রক্রিয়া কেবল মনিটরের ভেতরেই পরিচালিত হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'You do not need AI to add random noise to a photo; simple algebra and Gaussian distribution formulas do it analytically.',
        bn: 'ছবিতে নয়েজ যোগ করার জন্য এআই লাগে না; সাধারণ বীজগণিত ও গসিয়ান ফর্মুলাই যথেষ্ট।'
      },
      explanation: {
        en: 'The forward schedule is an analytical Gaussian diffusion equation with closed-form solutions for any timestep t.',
        bn: 'ফরওয়ার্ড প্রক্রিয়াটি একটি নির্দিষ্ট গাণিতিক সমীকরণ যা যেকোনো ধাপের জন্য সরাসরি হিসাব করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'diffusion-images-quiz',
    title: {
      en: 'Diffusion Models and Image Synthesis Quiz',
      bn: 'ডিফিউশন মডেল এবং ইমেজ সিন্থেসিস কুইজ'
    },
    questions: [
      {
        id: 'dfi-q1',
        kind: 'mcq',
        topic: 'u-net-skip-connections-benefit',
        question: {
          en: 'What critical structural benefit do skip connections provide inside the U-Net architecture during reverse image denoising?',
          bn: 'রিভার্স ইমেজ ডিনয়েজিংয়ের সময় ইউ-নেট আর্কিটেকচারে স্কিপ কানেকশন কোন অত্যন্ত গুরুত্বপূর্ণ কাঠামোগত সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'They pass fine spatial details and high-resolution edge information directly from encoder layers to decoder layers, preventing spatial blurriness',
            bn: 'তারা সূক্ষ্ম জ্যামিতিক নকশা এবং উচ্চ রেজোলিউশনের প্রান্ত তথ্য সরাসরি এনকোডার থেকে ডিকোডারে পৌঁছে দেয়, যা ছবি ঘোলাটে হওয়া রোধ করে'
          },
          {
            en: 'They permanently delete all green pixels from the final image',
            bn: 'তারা চূড়ান্ত ছবি থেকে সমস্ত সবুজ রঙের পিক্সেল স্থায়ীভাবে মুছে ফেলে'
          },
          {
            en: 'They force the computer graphics card to run at half speed',
            bn: 'তারা গ্রাফিক্স কার্ডের গতি অর্ধেক কমিয়ে দিতে বাধ্য করে'
          },
          {
            en: 'They translate English text prompts into binary machine instructions',
            bn: 'তারা টেক্সট প্রম্পটকে সরাসরি বাইনারি মেশিন কোডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bottleneck layers compress down to low resolutions, losing sharp edges. Skip connections bypass the bottleneck to restore crisp lines.',
          bn: 'বটলনেক স্তরে ছবি ছোট হয়ে স্পষ্ট প্রান্ত হারিয়ে ফেলে; স্কিপ কানেকশন সরাসরি প্রান্তগুলো ডিকোডারে ফিরিয়ে আনে।'
        },
        explanation: {
          en: 'Skip connections preserve spatial precision across multiple downsampling and upsampling operations in the U-Net.',
          bn: 'স্কিপ কানেকশন ছবির সূক্ষ্ম নকশা ও প্রান্ত ধরে রেখে স্পষ্ট ও সুন্দর আউটপুট তৈরিতে সাহায্য করে।'
        }
      },
      {
        id: 'dfi-q2',
        kind: 'mcq',
        topic: 'ddim-euler-fast-sampling',
        question: {
          en: 'How do modern fast samplers (such as DDIM or Euler Ancestral) reduce generation steps from 1000 down to 20 to 50 without degrading visual quality?',
          bn: 'আধুনিক দ্রুতগতির স্যাম্পলারগুলো (যেমন DDIM বা Euler) কীভাবে ছবির মান অক্ষুণ্ণ রেখে জেনারেশন ধাপ ১০০০ থেকে কমিয়ে ২০ থেকে ৫০ এ নামিয়ে আনে?'
        },
        options: [
          {
            en: 'By formulating reverse diffusion as a continuous ordinary differential equation (ODE) and using higher-order numerical solvers that take much larger discrete steps along the trajectory',
            bn: 'রিভার্স প্রক্রিয়াকে ডিফারেনশিয়াল সমীকরণ হিসেবে মডেল করে উন্নত গানিতিক সমাধানকারীর মাধ্যমে ট্র্যাজেক্টোরিতে একবারে বড় বড় পদক্ষেপ নেওয়ার মাধ্যমে'
          },
          {
            en: 'By rendering only 1 percent of the pixels on the screen',
            bn: 'স্ক্রিনের মাত্র ১ শতাংশ পিক্সেল রেন্ডার করার মাধ্যমে'
          },
          {
            en: 'By downloading completed artwork from the public Internet',
            bn: 'ইন্টারনেট থেকে সরাসরি আঁকা ছবি ডাউনলোড করে এনে'
          },
          {
            en: 'By turning off the graphics card cooling fans',
            bn: 'গ্রাফিক্স কার্ডের কুলিং ফ্যান বন্ধ করে গতি বাড়ানোর মাধ্যমে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Deterministic ODE solvers take intelligent large leaps across the reverse trajectory rather than tiny stochastic hops.',
          bn: 'উন্নত গানিতিক সমাধানকারী ক্ষুদ্র ক্ষুদ্র পদক্ষেপের বদলে বুদ্ধিমান বড় ধাপে দ্রুত কাঙ্ক্ষিত ছবিতে পৌঁছায়।'
        },
        explanation: {
          en: 'Non-Markovian ODE formulations permit accelerated numerical trajectory stepping, reducing latency by 20x to 50x.',
          bn: 'উন্নত ODE সমাধানকারী নয়েজ অপসারণের পথকে সংক্ষেপ করে সময় বহুগুণ বাঁচিয়ে দেয়।'
        }
      },
      {
        id: 'dfi-q3',
        kind: 'mcq',
        topic: 'cross-attention-text-conditioning',
        question: {
          en: 'Where and how are user prompt text embeddings incorporated into the diffusion U-Net during the reverse denoising process?',
          bn: 'রিভার্স ডিনয়েজিং প্রক্রিয়ার সময় ব্যবহারকারীর প্রম্পটের টেক্সট এমবেডিংগুলো কীভাবে ইউ-নেটের ভেতরে যুক্ত করা হয়?'
        },
        options: [
          {
            en: 'Inside cross-attention layers, where spatial image features serve as Queries and text encoder embeddings serve as Keys and Values to guide feature synthesis',
            bn: 'ক্রস-অ্যাটেনশন স্তরের ভেতরে, যেখানে ছবির বৈশিষ্ট্যগুলো কুয়েরি হিসেবে এবং টেক্সট এমবেডিংগুলো কি ও ভ্যালু হিসেবে কাজ করে সঠিক ছবি ফুটিয়ে তোলে'
          },
          {
            en: 'As a text watermarked in the bottom-right corner of the picture',
            bn: 'ছবির নিচের কোণায় জলছাপ টেক্সট হিসেবে লিখে দিয়ে'
          },
          {
            en: 'By renaming the image file on the operating system desktop',
            bn: 'অপারেটিং সিস্টেমের ডেস্কটপে ছবির ফাইলটির নাম পরিবর্তন করে'
          },
          {
            en: 'By saving the text prompt inside the computer BIOS firmware',
            bn: 'কম্পিউটারের বায়োস মেমরিতে প্রম্পটটি সংরক্ষণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Text tokens steer image patches: image features query text features via cross-attention mechanisms.',
          bn: 'ক্রস-অ্যাটেনশনের মাধ্যমে ছবির প্রতিটি অংশ টেক্সট শব্দের সাথে প্রাসঙ্গিকতা মিলিয়ে নিজের রূপ ঠিক করে।'
        },
        explanation: {
          en: 'Cross-attention allows spatial visual representations to selectively attend to corresponding prompt words at every resolution layer.',
          bn: 'ক্রস-অ্যাটেনশন ছবির বৈশিষ্ট্যগুলোকে প্রম্পটের প্রতিটি শব্দের নির্দেশনার সাথে নিখুঁতভাবে সমন্বয় করার সুযোগ দেয়।'
        }
      },
      {
        id: 'dfi-q4',
        kind: 'mcq',
        topic: 'inpainting-and-image-editing',
        question: {
          en: 'How does diffusion-based image inpainting replace a specific masked area of a photograph while keeping the surrounding unmasked regions perfectly untouched?',
          bn: 'ডিফিউশন ভিত্তিক ইমেজ ইনপেইন্টিং কীভাবে একটি নির্দিষ্ট মাস্কড এলাকা পরিবর্তন করে অথচ বাকি অংশের কোনো ক্ষতি না করে অবিকল বজায় রাখে?'
        },
        options: [
          {
            en: 'At each reverse timestep, the model predicts the masked region while unmasked regions are overwritten with the original image with corresponding timestep noise re-injected',
            bn: 'প্রতিটি রিভার্স ধাপে মডেল কেবল মাস্কড অংশ নতুন করে তৈরি করে, আর বাকি অংশে আসল ছবি থেকে ঐ নির্দিষ্ট ধাপের নয়েজযুক্ত ডাটা প্রতিস্থাপন করে সীমানা মসৃণ রাখা হয়'
          },
          {
            en: 'By cutting the computer monitor with a physical pair of scissors',
            bn: 'ফিজিক্যাল কাঁচি দিয়ে মনিটরের স্ক্রিন কেটে ফেলে'
          },
          {
            en: 'By converting all pixels outside the mask into random numbers',
            bn: 'মাস্কের বাইরের সমস্ত পিক্সেলকে এলোমেলো সংখ্যায় রূপান্তর করে'
          },
          {
            en: 'By sending a fax of the photograph to the original camera manufacturer',
            bn: 'ক্যামেরা প্রস্তুতকারক কোম্পানির কাছে ছবিটির ফ্যাক্স পাঠিয়ে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Blend original noisy pixels into the unmasked area at every step t, allowing the U-Net to naturally stitch the boundary.',
          bn: 'প্রতি ধাপে মূল ছবির নয়েজযুক্ত রূপ অপরিবর্তিত অংশে বসিয়ে দিলে নতুন অংশটি প্রাকৃতিক নিয়মে জোড়া লেগে যায়।'
        },
        explanation: {
          en: 'Inpainting enforces exact consistency by pasting forward-diffused original pixels into unmasked areas at every denoising iteration.',
          bn: 'ইনপেইন্টিং প্রতিটি ধাপে অবিকৃত অংশের আসল ডাটা যোগ করে নতুন অংশের সাথে নিখুঁত সংযোগ তৈরি করে।'
        }
      }
    ]
  }
};
