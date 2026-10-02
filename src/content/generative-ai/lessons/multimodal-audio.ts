import type { Lesson } from '../../../lib/types';

export const MultimodalAudioLesson: Lesson = {
  slug: 'multimodal-audio',
  tech: 'generative-ai',
  title: {
    en: 'Multimodal Models and Audio Synthesis — Joint Embeddings, CLIP, and Audio Pipelines',
    bn: 'মাল্টিমোডাল মডেল ও অডিও সিন্থেসিস: জয়েন্ট এমবেডিং, ক্লিপ ও অডিও পাইপলাইন'
  },
  summary: {
    en: 'Artificial intelligence reaches genuine general intelligence by bridging sensory modalities into shared conceptual representations. Contrastive Language-Image Pretraining (CLIP) maps images and text captions into a unified multi-dimensional embedding space using cosine similarity loss, enabling zero-shot visual classification and cross-modal semantic search. In audio synthesis, modern Text-to-Speech (TTS) pipelines convert linguistic tokens into intermediate Mel-spectrogram frequency representations before neural vocoders reconstruct high-fidelity acoustic waveforms. In this lesson, you will master contrastive joint embeddings, trace the Mel-spectrogram audio pipeline, and simulate cross-modal cosine similarity in TypeScript.',
    bn: 'একাধিক সংবেদী মাধ্যমকে (টেক্সট, ছবি, অডিও) একটি অভিন্ন ধারণাগত স্থানে সংযুক্ত করার মাধ্যমে কৃত্রিম বুদ্ধিমত্তা প্রকৃত বহুমুখী সক্ষমতা অর্জন করে। কনট্রাস্টিভ ল্যাঙ্গুয়েজ-ইমেজ প্রিট্রেইনিং (CLIP) কোসাইন সিমিলারিটির মাধ্যমে ছবি এবং টেক্সট ক্যাপশনকে একটি সমন্বিত বহু-মাত্রিক এমবেডিং স্পেসে ম্যাপ করে, যা জিরো-শট ভিজ্যুয়াল ক্লাসিফিকেশন ও ক্রস-মোডাল সার্চ সম্ভব করে। অডিও সিন্থেসিসে আধুনিক টেক্সট-টু-স্পিচ (TTS) পাইপলাইন প্রথমে ভাষাগত টোকেনকে মেল-স্পেকট্রোগ্রামে রূপান্তর করে এবং পরবর্তীতে নিউরাল ভোকোডারের মাধ্যমে জীবন্ত শব্দ তরঙ্গে পরিণত করে। এই পাঠে কনট্রাস্টিভ জয়েন্ট এমবেডিং, মেল-স্পেকট্রোগ্রাম রূপান্তর এবং ক্রস-মোডাল কোসাইন সিমিলারিটির বাস্তব কোড বিস্তারিতভাবে তুলে ধরা হয়েছে।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'fine-tuning-alignment',
    tech: 'generative-ai',
    title: {
      en: 'Fine-Tuning and Alignment — LoRA Adapters, SFT, and RLHF Value Systems',
      bn: 'ফাইন-টিউনিং এবং অ্যালাইনমেন্ট: লোরা অ্যাডাপ্টার, এসএফটি ও আরএলএইচএফ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'bridging-modalities-contrastive-learning',
      text: {
        en: 'Bridging Senses: Contrastive Learning and Joint Embeddings',
        bn: 'সংবেদী মাধ্যমের মিলন: কনট্রাস্টিভ লার্নিং ও জয়েন্ট এমবেডিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you show a photograph of an apple to an artificial intelligence alongside the written word "apple", a multimodal model maps both inputs to nearly identical coordinates in a shared vector space.',
        bn: 'যখন আপনি কৃত্রিম বুদ্ধিমত্তার সামনে একটি আপেলের ছবির পাশাপাশি লিখিত "আপেল" শব্দটি তুলে ধরেন, তখন একটি মাল্টিমোডাল মডেল উভয় ইনপুটকে একটি অভিন্ন ভেক্টর স্পেসের কাছাকাছি স্থানাঙ্কে স্থাপন করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Contrastive Language-Image Pretraining (CLIP) achieves this cross-modal alignment through dual encoders: a Vision Transformer (ViT) processes image patches while a text Transformer processes token sequences. During training across hundreds of millions of image-text pairs, the model maximizes the cosine similarity of matching diagonal pairs while minimizing the similarity of mismatched pairs. As a result, textual descriptions and visual imagery share a unified geometry, permitting zero-shot classification and intuitive semantic search across sensory boundaries.',
        bn: 'কনট্রাস্টিভ ল্যাঙ্গুয়েজ-ইমেজ প্রিট্রেইনিং (CLIP) দুটি সমান্তরাল এনকোডারের মাধ্যমে এই সংযোগ তৈরি করে: একটি ভিশন ট্রান্সফরমার (ViT) ছবির প্যাচগুলো বিশ্লেষণ করে এবং একটি টেক্সট ট্রান্সফরমার শব্দের ক্রম প্রসেস করে। কোটি কোটি ছবি ও ক্যাপশনের ওপর প্রশিক্ষণের সময় মডেলটি সঠিক জোড়ার কোসাইন সিমিলারিটি বৃদ্ধি করে এবং বেমানান জোড়ার সাদৃশ্য হ্রাস করে। এর ফলে টেক্সট ও ভিজ্যুয়াল কনটেন্ট একই জ্যামিতিক বিন্যাসে অবস্থান করে, যা কোনো পূর্ব-প্রশিক্ষণ ছাড়াই জিরো-শট ক্লাসিফিকেশন ও ক্রস-মোডাল অনুসন্ধানের সুযোগ করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'contrastive-learning',
          def: {
            en: 'A training strategy that pulls matching positive pairs together in embedding space while pushing non-matching negative pairs apart.',
            bn: 'এমন একটি প্রশিক্ষণ কৌশল যা সম্পর্কযুক্ত ইনপুট জোড়াকে ভেক্টর স্পেসে কাছে টানে এবং সম্পর্কহীন জোড়াকে দূরে ঠেলে দেয়।'
          }
        },
        {
          term: 'joint-embedding-space',
          def: {
            en: 'A unified geometric vector space where inputs from diverse modalities (text, images, audio) share comparable semantic coordinates.',
            bn: 'একটি সমন্বিত জ্যামিতিক ভেক্টর স্পেস যেখানে টেক্সট, ছবি ও অডিওর মতো ভিন্ন ভিন্ন মাধ্যম একই তুলনামূলক স্থানাঙ্ক শেয়ার করে।'
          }
        },
        {
          term: 'mel-spectrogram',
          def: {
            en: 'A visual frequency-over-time representation of an acoustic signal, scaled logarithmically according to human auditory pitch perception.',
            bn: 'শব্দের কম্পাঙ্ক ও সময়ের একটি ভিজ্যুয়াল ম্যাট্রিক্স যা মানুষের শ্রবণানুভূতির সাথে সংগতি রেখে লগারিদমিক স্কেলে বিন্যস্ত থাকে।'
          }
        },
        {
          term: 'neural-vocoder',
          def: {
            en: 'A specialized deep neural network that converts frequency-domain Mel-spectrogram matrices into high-fidelity continuous audio pressure waveforms.',
            bn: 'একটি বিশেষায়িত ডিপ নিউরাল নেটওয়ার্ক যা মেল-স্পেকট্রোগ্রামের কম্পাঙ্ক ম্যাট্রিক্সকে শুনতে উপযোগী উচ্চমানের ধারাবাহিক শব্দ তরঙ্গে রূপান্তর করে।'
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
      id: 'multimodal-modalities-table',
      text: {
        en: 'Comparison Matrix: Modality Processing and Audio Pipelines',
        bn: 'তুলনামূলক ম্যাট্রিক্স: বিভিন্ন মিডিয়ার প্রসেসিং ও অডিও পাইপলাইন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Bridging sensory inputs requires distinct encoding pipelines, intermediate representations, and decoding architectures depending on the target medium.',
        bn: 'ভিন্ন ভিন্ন মাধ্যমের তথ্য সমন্বয় করতে মাধ্যমভেদে নির্দিষ্ট এনকোডিং পাইপলাইন, মধ্যবর্তী রূপ এবং ডিকোডিং কৌশলের প্রয়োজন হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Modality Domain', bn: 'মাধ্যমের ক্ষেত্র' },
        { en: 'Input Representation', bn: 'ইনপুটের রূপ' },
        { en: 'Intermediate Model / Representation', bn: 'মধ্যবর্তী রূপ / মডেল' },
        { en: 'Final Output Format', bn: 'চূড়ান্ত আউটপুট' }
      ],
      rows: [
        [
          { en: 'Cross-Modal Vision-Language', bn: 'ভিশন-ল্যাঙ্গুয়েজ সংযোগ' },
          { en: 'Raw pixels and subword token sequences', bn: 'কাঁচা পিক্সেল ও সাবওয়ার্ড টোকেন' },
          { en: 'Dual CLIP encoders in a unified 512-dimension space', bn: '৫১২-মাত্রিক স্পেসে দ্বৈত ক্লিপ এনকোডার' },
          { en: 'Normalized cosine similarity ranking score', bn: 'কোসাইন সিমিলারিটির প্রাসঙ্গিকতা স্কোর' }
        ],
        [
          { en: 'Text-to-Speech (TTS)', bn: 'টেক্সট-টু-স্পিচ (TTS)' },
          { en: 'Linguistic grapheme or phonetic phoneme tokens', bn: 'ধ্বনিগত ফোনেম বা অক্ষরের টোকেন' },
          { en: 'Acoustic Transformer predicting 80-band Mel-spectrogram', bn: '৮০-ব্যান্ডের মেল-স্পেকট্রোগ্রাম অনুমানের মডেল' },
          { en: 'HiFi-GAN neural vocoder generating 24kHz raw audio wave', bn: '২৪kHz এর মসৃণ ও স্পষ্ট অডিও তরঙ্গ' }
        ],
        [
          { en: 'Generative Music Synthesis', bn: 'সঙ্গীত উৎপাদন' },
          { en: 'Genre tags, chord progressions, and temporal BPM', bn: 'জনরা ট্যাগ, কর্ড ও বিপিএম নির্দেশক' },
          { en: '2D diffusion model denoising audio spectrogram matrices', bn: '২-মাত্রিক স্পেকট্রোগ্রাম ডিনয়েজিং মডেল' },
          { en: 'High-fidelity 44.1kHz stereo audio stream', bn: '৪৪.১kHz উচ্চমানের স্টেরিও মিউজিক' }
        ],
        [
          { en: 'Video Generation', bn: 'ভিডিও জেনারেশন' },
          { en: 'Descriptive text prompts and conditioning keyframes', bn: 'টেক্সট প্রম্পট ও প্রাথমিক রেফারেন্স ফ্রেম' },
          { en: '3D Spatio-Temporal attention cross-attending over time', bn: 'সময়ের সাথে সামঞ্জস্যপূর্ণ ৩-মাত্রিক অ্যাটেনশন' },
          { en: 'Temporally consistent 24fps high-definition MP4 video', bn: 'ধারাবাহিক ২৪fps হাই-ডেফিনিশন ভিডিও' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-cosine-similarity-code',
      text: {
        en: 'Executable Cross-Modal Cosine Similarity Simulation',
        bn: 'ক্রস-মোডাল কোসাইন সিমিলারিটির বাস্তব কোড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program calculates cosine similarity between a text prompt Query embedding ("a photo of a sleeping cat") and 3 candidate image embeddings, proving how CLIP identifies semantic matches across sensory boundaries.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি টেক্সট প্রম্পটের সাথে ৩টি ছবির এমবেডিংয়ের কোসাইন সিমিলারিটি হিসাব করে প্রদর্শন করে কীভাবে ক্লিপ ভিন্ন সংবেদী মাধ্যমের মাঝেও সঠিক মিল শনাক্ত করে।'
      }
    },
    {
      type: 'code',
      code: `// Cosine similarity computation in joint multimodal space
function computeCosineSimilarity(vecA: number[], vecB: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;

  for (let i = 0; i < vecA.length; i++) {
    dotProduct += vecA[i] * vecB[i];
    normA += vecA[i] * vecA[i];
    normB += vecB[i] * vecB[i];
  }

  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB));
}

// 4-dimensional normalized concept embeddings
const promptTextQuery = [0.90, 0.35, 0.15, 0.05]; // "a sleeping cat"

const imageEmbeddingCat = [0.88, 0.38, 0.20, 0.08]; // photo of cat
const imageEmbeddingDog = [0.60, 0.72, 0.25, 0.12]; // photo of dog
const imageEmbeddingCar = [0.08, 0.12, 0.92, 0.35]; // photo of car

const similarityCat = computeCosineSimilarity(promptTextQuery, imageEmbeddingCat);
const similarityDog = computeCosineSimilarity(promptTextQuery, imageEmbeddingDog);
const similarityCar = computeCosineSimilarity(promptTextQuery, imageEmbeddingCar);

console.log('Cat photo similarity:', similarityCat.toFixed(3));
console.log('Dog photo similarity:', similarityDog.toFixed(3));
console.log('Car photo similarity:', similarityCar.toFixed(3));

// prints: Cat photo similarity: 0.998
// prints: Dog photo similarity: 0.874
// prints: Car photo similarity: 0.277`
    },
    {
      type: 'heading',
      id: 'acoustic-synthesis-pipeline',
      text: {
        en: 'The Acoustic Generation Pipeline: Text to Speech',
        bn: 'শব্দ তৈরির পাইপলাইন: টেক্সট থেকে জীবন্ত কণ্ঠস্বর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Generating human speech requires solving a fundamental dimensional mismatch: written text contains only a few dozen characters per sentence, while high-fidelity audio requires 24000 to 44100 continuous acoustic samples per second. Modern TTS architectures divide this challenge into 3 specialized stages: First, text normalization expands abbreviations and converts characters into phonetic phoneme tokens. Second, an acoustic model generates a 2D Mel-spectrogram representing acoustic energy across frequency bands over time. Third, a neural vocoder synthesizes the exact audio pressure waveforms from the spectrogram, capturing natural vocal timbre and emotional prosody.',
        bn: 'মানুষের স্বাভাবিক কণ্ঠস্বর তৈরিতে একটি বড় মাত্রাগত চ্যালেঞ্জ রয়েছে: একটি বাক্যে মাত্র কয়েকটি শব্দ থাকে, অথচ স্পষ্ট শব্দের জন্য প্রতি সেকেন্ডে ২৪০০০ থেকে ৪৪১০০টি ধারাবাহিক অডিও নমুনা প্রয়োজন হয়। আধুনিক টেক্সট-টু-স্পিচ সিস্টেম ৩টি ধাপে এই সমস্যার সমাধান করে: প্রথমত, টেক্সট নরমালাইজেশন সংক্ষিপ্ত শব্দ ভেঙে ফোনেম টোকেনে রূপান্তর করে। দ্বিতীয়ত, একটি অ্যাকোস্টিক মডেল সময়ের সাথে কম্পাঙ্কের বিস্তার নির্দেশক ২-মাত্রিক মেল-স্পেকট্রোগ্রাম তৈরি করে। তৃতীয়ত, একটি নিউরাল ভোকোডার এই স্পেকট্রোগ্রাম থেকে বাস্তবসম্মত অডিও তরঙ্গ পুনর্নির্মাণ করে প্রাকৃতিক বাচনভঙ্গি ফুটিয়ে তোলে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Contrastive alignment links senses: Pulling matching image-text pairs together creates a unified semantic space.',
          bn: 'কনট্রাস্টিভ শিক্ষায় মাধ্যমের মিলন: সঠিক ছবি ও লেখার জোড়াকে কাছে এনে অভিন্ন অর্থবোধক ভেক্টর স্পেস গড়ে ওঠে।'
        },
        {
          en: 'Spectrograms bridge text and sound: Mel-spectrograms represent acoustic energy visually, making audio accessible to vision models.',
          bn: 'স্পেকট্রোগ্রাম শব্দ ও ছবির সেতু: মেল-স্পেকট্রোগ্রাম শব্দকে ভিজ্যুয়াল রূপ দেয় যা কম্পিউটার সহজে প্রসেস করতে পারে।'
        },
        {
          en: 'Neural vocoders synthesize waveforms: Models like HiFi-GAN turn frequency heatmaps into natural, playable sound waves.',
          bn: 'নিউরাল ভোকোডারে জীবন্ত শব্দ: হাইফাই-গ্যানের মতো মডেল কম্পাঙ্কের ছবি থেকে নিখুঁত ও স্বাভাবিক শব্দ তরঙ্গ তৈরি করে।'
        },
        {
          en: 'Zero-shot capabilities emerge: Aligning concepts allows searching images with free-form text without per-class fine-tuning.',
          bn: 'জিরো-শট সক্ষমতার প্রকাশ: ধারণাগুলো মেলানোর ফলে কোনো অতিরিক্ত প্রশিক্ষণ ছাড়াই সাধারণ টেক্সট দিয়ে যেকোনো ছবি খোঁজা যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'multi-aud-ex1',
      kind: 'mcq',
      topic: 'clip-contrastive-pretraining-objective',
      question: {
        en: 'In CLIP (Contrastive Language-Image Pretraining), how does the model learn to align images and text without requiring manual human labels for specific object categories?',
        bn: 'ক্লিপ (CLIP) মডেলে কোনো মানব-প্রদত্ত লেবেল ছাড়া কীভাবে ছবি এবং টেক্সটকে একটি অভিন্ন ভেক্টর স্পেসে সংগতিপূর্ণ করা হয়?'
      },
      options: [
        {
          en: 'By maximizing cosine similarity for matching image-caption pairs while minimizing similarity for all non-matching pairs in a training batch',
          bn: 'একটি ট্রেনিং ব্যাচে সঠিক ছবি ও ক্যাপশন জোড়ার কোসাইন সিমিলারিটি বৃদ্ধি করে এবং বেমানান জোড়ার সাদৃশ্য কমানোর মাধ্যমে'
        },
        {
          en: 'By converting all image pixels into compressed MP3 audio files',
          bn: 'সমস্ত ছবির পিক্সেলকে কমপ্রেসড এমপি৩ অডিও ফাইলে রূপান্তর করার মাধ্যমে'
        },
        {
          en: 'By translating English captions into Spanish dictionary definitions',
          bn: 'ইংরেজি ক্যাপশনগুলোকে স্প্যানিশ ডিকশনারির সংজ্ঞায় রূপান্তর করে'
        },
        {
          en: 'By disabling the graphics card GPU memory during training passes',
          bn: 'প্রশিক্ষণের সময় গ্রাফিক্স কার্ডের মেমরি বন্ধ রাখার মাধ্যমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'In an NxN matrix of images and captions, the N diagonal pairs are positive matches; the N^2 - N off-diagonal pairs are negatives.',
        bn: 'NxN আকারের ম্যাট্রিক্সে কর্ণ বরাবর থাকা N জোড়া সঠিক, আর বাকি N^2 - N জোড়াকে বেমানান হিসেবে দূরে ঠেলে দেওয়া হয়।'
      },
      explanation: {
        en: 'Contrastive learning pulls genuine pairs together and pushes random pairs apart, structuring a shared semantic geometry.',
        bn: 'কনট্রাস্টিভ লার্নিং সঠিক জোড়াকে কাছে এবং ভুল জোড়াকে দূরে সরিয়ে একটি সমন্বিত অর্থবোধক ভেক্টর কাঠামো গড়ে তোলে।'
      }
    },
    {
      id: 'multi-aud-ex2',
      kind: 'mcq',
      topic: 'mel-spectrogram-human-auditory-scaling',
      question: {
        en: 'Why do modern audio synthesis systems convert raw sound frequencies into the Mel-scale rather than using linear Hertz scales?',
        bn: 'আধুনিক অডিও সিন্থেসিস সিস্টেমে সাধারণ লিনিয়ার হার্টজ স্কেলের বদলে কেন মেল-স্কেলে কম্পাঙ্ক রূপান্তর করা হয়?'
      },
      options: [
        {
          en: 'The Mel-scale is non-linear and models human auditory perception, providing high resolution at low frequencies where the human ear detects pitch differences easily',
          bn: 'মেল-স্কেল মানুষের শ্রবণানুভূতির অনুকরণ করে নিম্ন কম্পাঙ্কে উচ্চ রেজোলিউশন দেয় যেখানে মানুষের কান পিচের সূক্ষ্ম পরিবর্তন সহজে ধরে ফেলে'
        },
        {
          en: 'Because linear Hertz frequencies cannot be saved on digital computer disks',
          bn: 'কারণ সাধারণ হার্টজ কম্পাঙ্ক কম্পিউটারের ডিজিটাল ডিস্কে সংরক্ষণ করা অসম্ভব'
        },
        {
          en: 'Because the Mel-scale eliminates all background noise from live concerts',
          bn: 'কারণ মেল-স্কেল যেকোনো কনসার্টের সমস্ত ব্যাকগ্রাউন্ড নয়েজ মুছে ফেলে'
        },
        {
          en: 'Because audio speakers only vibrate when receiving logarithmic code',
          bn: 'কারণ সাউন্ড স্পিকার কেবল লগারিদমিক কোড পেলেই শব্দ তৈরি করতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Human ears easily distinguish 100 Hz from 200 Hz, but cannot easily tell 10000 Hz from 10100 Hz.',
        bn: 'মানুষের কান ১০০ ও ২০০ হার্টজের পার্থক্য সহজে বোঝে, কিন্তু ১০০০০ ও ১০১০০ হার্টজের তফাত আলাদা করতে পারে না।'
      },
      explanation: {
        en: 'The Mel-scale compresses frequency resolution logarithmically, matching the biological cochlea frequency response of human hearing.',
        bn: 'মেল-স্কেল মানুষের কানের গঠন ও শ্রবণানুভূতির সাথে সংগতি রেখে গুরুত্বপূর্ণ কম্পাঙ্কগুলোকে যথাযথ গুরুত্ব প্রদান করে।'
      }
    },
    {
      id: 'multi-aud-ex3',
      kind: 'mcq',
      topic: 'neural-vocoder-phase-reconstruction',
      question: {
        en: 'Why is a neural vocoder (such as HiFi-GAN) necessary to convert a Mel-spectrogram back into a playable audio waveform?',
        bn: 'মেল-স্পেকট্রোগ্রামকে পুনরায় শুনতে উপযোগী শব্দ তরঙ্গে রূপান্তরের জন্য কেন নিউরাল ভোকোডারের (যেমন HiFi-GAN) প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'Mel-spectrograms capture only frequency magnitudes and discard phase information, which the neural vocoder must intelligently reconstruct to synthesize natural acoustic waveforms',
          bn: 'মেল-স্পেকট্রোগ্রামে কেবল কম্পাঙ্কের বিস্তৃতি থাকে কিন্তু ফেজ (Phase) তথ্য হারিয়ে যায়, যা নিউরাল ভোকোডার বুদ্ধিমত্তার সাথে পুনর্নির্মাণ করে প্রাকৃতিক শব্দ তৈরি করে'
        },
        {
          en: 'Because audio files cannot be played through computer speakers without a paid license',
          bn: 'কারণ লাইসেন্স ফি পরিশোধ না করলে কম্পিউটারের স্পিকারে অডিও বাজানো যায় না'
        },
        {
          en: 'Because the vocoder reduces the size of every song to 1 single byte',
          bn: 'কারণ ভোকোডার যেকোনো গানের আকার কমিয়ে মাত্র ১ বাইট করে ফেলে'
        },
        {
          en: 'Because spectrograms are encrypted with military-grade passwords',
          bn: 'কারণ স্পেকট্রোগ্রাম জটিল পাসওয়ার্ড দিয়ে এনক্রিপ্ট করা থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Sound is an oscillating wave with magnitude and phase. Spectrograms lose phase; the vocoder recovers the missing wave shape.',
        bn: 'শব্দ তরঙ্গে বিস্তার ও ফেজ দুটোই থাকে। স্পেকট্রোগ্রামে ফেজ বাদ পড়ে যা ভোকোডার সুন্দরভাবে উদ্ধার করে।'
      },
      explanation: {
        en: 'Neural vocoders invert magnitude spectrograms into time-domain pressure waves by accurately recovering missing phase relationships.',
        bn: 'নিউরাল ভোকোডার হারিয়ে যাওয়া ফেজ তথ্য দক্ষতার সাথে পুনর্নির্মাণ করে কর্কশ শব্দহীন মসৃণ অডিও উপহার দেয়।'
      }
    },
    {
      id: 'multi-aud-ex4',
      kind: 'mcq',
      topic: 'zero-shot-classification-mechanism',
      question: {
        en: 'How does CLIP perform zero-shot classification on an unseen dataset containing photos of 10 distinct dog breeds without additional training?',
        bn: '১০টি ভিন্ন জাতের কুকুরের নতুন ছবিতে ক্লিপ (CLIP) কীভাবে কোনো অতিরিক্ত প্রশিক্ষণ ছাড়াই জিরো-শট ক্লাসিফিকেশন সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It embeds the candidate text prompts ("a photo of a Golden Retriever", etc.) and predicts the class label whose text embedding yields the highest cosine similarity with the image embedding',
          bn: 'এটি সম্ভাব্য টেক্সট প্রম্পটগুলোর এমবেডিং তৈরি করে এবং ছবির এমবেডিংয়ের সাথে যে টেক্সটের কোসাইন সিমিলারিটি সর্বোচ্চ হয় সেটিকে সঠিক লেবেল হিসেবে চিহ্নিত করে'
        },
        {
          en: 'It sends each photograph to a human veterinarian via automated email',
          bn: 'এটি স্বয়ংক্রিয় ইমেইলের মাধ্যমে পশু চিকিৎসকের কাছে প্রতিটি ছবি পাঠিয়ে দেয়'
        },
        {
          en: 'It re-trains the entire Vision Transformer network from scratch for each photo',
          bn: 'এটি প্রতিটি ছবির জন্য নতুন করে পুরো ভিশন ট্রান্সফরমারকে প্রশিক্ষণ দেয়'
        },
        {
          en: 'It searches Google Images using an automated web browser script',
          bn: 'এটি ব্রাউজার স্ক্রিপ্ট চালিয়ে গুগল ইমেজ সার্চ করে ফলাফল বের করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Text prompts become classifier weights: compare the image vector to all 10 candidate text vectors simultaneously.',
        bn: '১০টি টেক্সট প্রম্পটের ভেক্টরের সাথে ছবির ভেক্টর তুলনা করে সবচেয়ে কাছের মিলটি বেছে নেওয়া হয়।'
      },
      explanation: {
        en: 'CLIP converts class names into prompt vectors, turning open-vocabulary text generation into dynamic zero-shot classifier weights.',
        bn: 'ক্লিপ টেক্সট প্রম্পটকে ক্লাসিফায়ারের ওজনে রূপান্তর করে যেকোনো নতুন ক্যাটাগরি তাৎক্ষণিক শনাক্ত করার সক্ষমতা অর্জন করে।'
      }
    }
  ],
  quiz: {
    id: 'multimodal-audio-quiz',
    title: {
      en: 'Multimodal Architectures and Audio Synthesis Quiz',
      bn: 'মাল্টিমোডাল আর্কিটেকচার এবং অডিও সিন্থেসিস কুইজ'
    },
    questions: [
      {
        id: 'mma-q1',
        kind: 'mcq',
        topic: 'vision-transformer-patch-tokenization',
        question: {
          en: 'How does a Vision Transformer (ViT) tokenize a continuous 2D image so that standard Transformer self-attention blocks can process it?',
          bn: 'একটি ভিশন ট্রান্সফরমার (ViT) কীভাবে একটি ২-মাত্রিক ছবিকে টোকেনাইজ করে যাতে সাধারণ ট্রান্সফরমার সেলফ-অ্যাটেনশন স্তর তা প্রসেস করতে পারে?'
        },
        options: [
          {
            en: 'It slices the image into non-overlapping spatial grid patches (such as 16x16 pixels), flattens each patch into a vector, and projects them linearly into token embeddings with positional encodings',
            bn: 'এটি ছবিটিকে ১৬x১৬ পিক্সেলের ক্ষুদ্র গ্রিড প্যাচে বিভক্ত করে, প্রতিটি প্যাচকে ভেক্টরে ফ্ল্যাটেন করে এবং পজিশনাল এনকোডিংসহ টোকেন এমবেডিংয়ে প্রজেক্ট করে'
          },
          {
            en: 'It prints the photograph on an optical scanner connected via USB',
            bn: 'এটি ইউএসবি দিয়ে সংযুক্ত একটি অপটিক্যাল স্ক্যানারে ছবিটি প্রিন্ট করে'
          },
          {
            en: 'It converts every pixel into an ASCII character in the English alphabet',
            bn: 'এটি প্রতিটি পিক্সেলকে ইংরেজি বর্ণমালার আসকি (ASCII) ক্যারেক্টারে রূপান্তর করে'
          },
          {
            en: 'It rotates the photograph 360 degrees until the image is inverted',
            bn: 'এটি ছবিটি উল্টো না হওয়া পর্যন্ত ৩৬০ ডিগ্রি কোণে ঘোরাতে থাকে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Words are 1D sequences of tokens; ViT treats 16x16 pixel squares as the visual equivalent of words.',
          bn: 'টেক্সটে যেমন শব্দ থাকে, ভিশন ট্রান্সফরমারে ১৬x১৬ পিক্সেলের বর্গাকার প্যাচগুলো ঠিক তেমনি শব্দের ভূমিকা পালন করে।'
        },
        explanation: {
          en: 'ViT represents images as sequences of flattened linear patch embeddings, making them directly compatible with standard Transformer architectures.',
          bn: 'প্যাচ এমবেডিংয়ের মাধ্যমে ছবিকে শব্দের মতো সাজিয়ে সাধারণ ট্রান্সফরমারের মাধ্যমেই উচ্চমানের ছবি বিশ্লেষণ সম্ভব হয়।'
        }
      },
      {
        id: 'mma-q2',
        kind: 'mcq',
        topic: 'temporal-attention-video-generation',
        question: {
          en: 'In generative video models (such as Sora), why is temporal attention essential in addition to standard spatial attention across image frames?',
          bn: 'ভিডিও জেনারেশন মডেলে প্রতিটি ফ্রেমের মধ্যকার সাধারণ স্থানিক অ্যাটেনশনের পাশাপাশি কেন সময়ের ধারাবাহিকতা রক্ষায় টেম্পোরাল অ্যাটেনশন অপরিহার্য?'
        },
        options: [
          {
            en: 'Temporal attention tracks motion dynamics and object persistence across time, preventing flickering, morphing, and physics violations between consecutive frames',
            bn: 'টেম্পোরাল অ্যাটেনশন সময় জুড়ে বস্তুর গতি ও স্থায়িত্ব পর্যবেক্ষণ করে, যার ফলে ধারাবাহিক ফ্রেমের মাঝে কাঁপন, বিকৃতি বা পদার্থবিজ্ঞানের নিয়মের লঙ্ঘন ঘটে না'
          },
          {
            en: 'It increases the sound volume of the video speakers',
            bn: 'এটি ভিডিও স্পিকারের শব্দের মাত্রা বাড়িয়ে দেয়'
          },
          {
            en: 'It translates the video into black-and-white animation',
            bn: 'এটি ভিডিওকে সাদাকালো অ্যানিমেশনে রূপান্তর করে'
          },
          {
            en: 'It automatically uploads the video to video sharing platforms',
            bn: 'এটি স্বয়ংক্রিয়ভাবে ভিডিও শেয়ারিং প্ল্যাটফর্মে ফাইল আপলোড করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Generating frames independently causes jittering shapes. Temporal attention connects pixel patches across time steps.',
          bn: 'প্রতিটি ফ্রেম আলাদা বানালে চরিত্র বা দৃশ্য কাঁপতে থাকে; টেম্পোরাল অ্যাটেনশন সময়ের সাথে ফ্রেমের সামঞ্জস্য ধরে রাখে।'
        },
        explanation: {
          en: 'Temporal attention enforces temporal coherence, ensuring objects move smoothly and maintain realistic physical properties across video frames.',
          bn: 'টেম্পোরাল অ্যাটেনশন সময়ের সাথে স্বাভাবিক গতিশীলতা নিশ্চিত করে ভিডিওতে বাস্তবসম্মত ধারাবাহিকতা বজায় রাখে।'
        }
      },
      {
        id: 'mma-q3',
        kind: 'mcq',
        topic: 'cross-modal-contrastive-temperature',
        question: {
          en: 'In the CLIP symmetric cross-entropy loss formula, what role does the learnable temperature parameter tau play when scaling the cosine similarity matrix?',
          bn: 'ক্লিপের সিমেট্রিক ক্রস-এনট্রপি লস সূত্রে কোসাইন সিমিলারিটি ম্যাট্রিক্স স্কেলিংয়ের সময় লার্নেবল টেম্পারেচার প্যারামিটার টাউ (tau) কোন ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It scales the logit dynamic range before Softmax, controlling how sharply the model penalizes hard negatives during contrastive optimization',
            bn: 'এটি সফটম্যাক্সের পূর্বে লজিটের বিস্তার নিয়ন্ত্রণ করে, যার ফলে অপ্টিমাইজেশনের সময় কঠিন ভুল জোড়াগুলোকে কঠোরভাবে নিয়ন্ত্রণ করা সম্ভব হয়'
          },
          {
            en: 'It measures the physical temperature of the server room in Celsius',
            bn: 'এটি সার্ভার রুমের ফিজিক্যাল তাপমাত্রা সেলসিয়াসে পরিমাপ করে'
          },
          {
            en: 'It deletes non-English words from the training dataset',
            bn: 'এটি প্রশিক্ষণ ডেটাসেট থেকে অ-ইংরেজি শব্দগুলো মুছে ফেলে'
          },
          {
            en: 'It turns off the computer power supply when training completes',
            bn: 'প্রশিক্ষণ শেষ হলে এটি কম্পিউটারের পাওয়ার সাপ্লাই বন্ধ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'A learned temperature hyperparameter prevents logits from saturating while sharpening attention onto distinguishing features.',
          bn: 'প্রশিক্ষিত টেম্পারেচার লজিটের ভারসাম্য রক্ষা করে সূক্ষ্ম পার্থক্যের ওপর মডেলের মনোযোগ বৃদ্ধি করে।'
        },
        explanation: {
          en: 'Tau modulates the steepness of the Softmax distribution over similarity scores, stabilizing contrastive gradient dynamics.',
          bn: 'টাউ প্যারামিটার কোসাইন সিমিলারিটির মানকে যথাযথভাবে স্কেল করে প্রশিক্ষণকে মসৃণ ও কার্যকর রাখে।'
        }
      },
      {
        id: 'mma-q4',
        kind: 'mcq',
        topic: 'prosody-cloning-in-modern-tts',
        question: {
          en: 'How do modern zero-shot voice cloning systems capture a speaker voice timbre and speaking cadence from a 3-second reference audio clip?',
          bn: 'আধুনিক ভয়েস ক্লোনিং সিস্টেমগুলো কীভাবে মাত্র ৩-সেকেন্ডের অডিও নমুনা থেকে বক্তার কণ্ঠের বিশেষত্ব ও বাচনভঙ্গি নিখুঁতভাবে ধারণ করে?'
        },
        options: [
          {
            en: 'An acoustic speaker encoder extracts a global reference voice embedding that conditions the diffusion or autoregressive Mel-spectrogram generator',
            bn: 'একটি অ্যাকোস্টিক স্পিকার এনকোডার রেফারেন্স অডিও থেকে একটি গ্লোবাল ভয়েস এমবেডিং তৈরি করে যা মূল জেনারেটরের বাচনভঙ্গি পরিচালনা করে'
          },
          {
            en: 'By installing an audio microphone inside the user keyboard',
            bn: 'ব্যবহারকারীর কিবোর্ডের ভেতরে গোপন মাইক্রোফোন স্থাপন করে'
          },
          {
            en: 'By downloading historical telephone call recordings from phone companies',
            bn: 'টেলিফোন কোম্পানি থেকে অতীতের কল রেকর্ডিং ডাউনলোড করে'
          },
          {
            en: 'By converting all consonants into whistling sounds',
            bn: 'সমস্ত ব্যঞ্জনবর্ণকে বাঁশির মতো শব্দে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A compact voice embedding vector summarizes vocal timbre, pitch, and cadence, conditioning the generative model to sound like that speaker.',
          bn: 'একটি ছোট ভয়েস ভেক্টর কণ্ঠের স্বর ও বাচনভঙ্গি ধারণ করে জেনারেটিভ মডেলকে নির্দিষ্ট মানুষের মতো কথা বলতে বাধ্য করে।'
        },
        explanation: {
          en: 'Speaker encoders extract latent identity embeddings that modulate synthesis layers, reproducing individual vocal characteristics without fine-tuning.',
          bn: 'স্পিকার এনকোডার কণ্ঠের অনন্য বৈশিষ্ট্যগুলোকে একটি ভেক্টরে রূপান্তর করে কোনো পুনপ্রশিক্ষণ ছাড়াই নিখুঁতভাবে কণ্ঠ নকল করে।'
        }
      }
    ]
  }
};
