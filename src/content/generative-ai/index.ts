import type { Hub } from '../../lib/types';
import { MeetGenerativeAiLesson } from './lessons/meet-generative-ai';
import { TokensSamplingLesson } from './lessons/tokens-sampling';
import { TransformersGptLesson } from './lessons/transformers-gpt';
import { DiffusionImagesLesson } from './lessons/diffusion-images';
import { MultimodalAudioLesson } from './lessons/multimodal-audio';
import { FineTuningAlignmentLesson } from './lessons/fine-tuning-alignment';
import { LimitsSafetyGenLesson } from './lessons/limits-safety-gen';
import { GenaiCapstoneLesson } from './lessons/genai-capstone';

export const generativeAiHub: Hub = {
  slug: 'generative-ai',
  name: 'Generative AI',
  icon: '🎨',
  tagline: {
    en: 'Sampling mechanics, tokenization algorithms, self-attention decoders, latent diffusion synthesis, multimodal embeddings, and production RAG pipelines.',
    bn: 'স্যাম্পলিং কৌশল, টোকেনাইজেশন অ্যালগরিদম, সেলফ-অ্যাটেনশন ডিকোডার, ল্যাটেন্ট ডিফিউশন সিন্থেসিস, মাল্টিমোডাল এমবেডিং ও প্রোডাকশন RAG পাইপলাইন।',
  },
  intro: {
    en: 'Generative Artificial Intelligence transforms computing from passive classification into active, multi-modal synthesis. This comprehensive hub covers the entire journey from mathematical foundations to production architectures across 8 focused lessons: Lesson 1 establishes the divide between discriminative and generative paradigms with probabilistic sampling. Lesson 2 dives into subword tokenization (BPE), logits, and temperature scaling. Lesson 3 unpacks Transformer self-attention (Q, K, V) and causal masking. Lesson 4 explores diffusion image generation in latent space. Lesson 5 bridges sensory modalities with CLIP and text-to-speech vocoders. Lesson 6 masters parameter-efficient fine-tuning (LoRA) and preference alignment (RLHF/DPO). Lesson 7 deploys enterprise defense-in-depth safety guardrails. Finally, Lesson 8 synthesizes all concepts into a production-grade Retrieval-Augmented Generation (RAG) assistant with automated citation grounding gates.',
    bn: 'জেনারেটিভ কৃত্রিম বুদ্ধিমত্তা সাধারণ ক্লাসিফিকেশনের গণ্ডি ছাড়িয়ে সক্রিয় কনটেন্ট সৃষ্টির এক নতুন যুগের সূচনা করেছে। এই সম্পূর্ণ কারিকুলামটি ৮টি সমৃদ্ধ পাঠের মাধ্যমে গাণিতিক ভিত্তি থেকে প্রোডাকশন আর্কিটেকচার পর্যন্ত বিস্তৃত: ১ম পাঠে ডিসক্রিমিনেটিভ ও জেনারেটিভ মডেলের পার্থক্য এবং সম্ভাব্যতাভিত্তিক স্যাম্পলিং আলোচনা করা হয়েছে। ২য় পাঠে সাবওয়ার্ড টোকেনাইজেশন (BPE), লজিটস এবং টেম্পারেচার স্কেলিং শেখানো হয়েছে। ৩য় পাঠে ট্রান্সফরমার সেলফ-অ্যাটেনশন (Q, K, V) ও কজাল মাস্কিংয়ের মেকানিক্স উন্মোচিত হয়েছে। ৪র্থ পাঠে ল্যাটেন্ট স্পেস ডিফিউশন ইমেজ সিন্থেসিস বিশ্লেষণ করা হয়েছে। ৫ম পাঠে ক্লিপ (CLIP) জয়েন্ট এমবেডিং এবং টেক্সট-টু-স্পিচ পাইপলাইন দেখানো হয়েছে। ৬ষ্ঠ পাঠে মেমরি-সাশ্রয়ী লোরা (LoRA) ফাইন-টিউনিং এবং আরএলএইচএফ অ্যালাইনমেন্ট কভার করা হয়েছে। ৭ম পাঠে এন্টারপ্রাইজ নিরাপত্তা ও হ্যালুসিনেশন ফিল্টারিং যুক্ত করা হয়েছে। সর্বশেষে ৮ম পাঠে সমস্ত প্রযুক্তিকে একটি প্রোডাকশন RAG অ্যাসিস্ট্যান্ট এবং স্বয়ংক্রিয় উদ্ধৃতি গেটের মাধ্যমে সফলভাবে বাস্তবায়ন করা হয়েছে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Foundations: Distributions, Tokens, and Sampling', bn: 'ধাপ ১ — মূল ভিত্তি: সম্ভাব্যতা বিন্যাস, টোকেন এবং স্যাম্পলিং' },
      items: [
        { en: 'Meet Generative AI: Discriminative vs Generative, seeded sampling, and probability distributions', bn: 'জেনারেটিভ এআই পরিচিতি: ডিসক্রিমিনেটিভ বনাম জেনারেটিভ, সিডেড স্যাম্পলিং ও সম্ভাব্যতা বিন্যাস' },
        { en: 'Tokens and Sampling Mechanics: Byte-Pair Encoding, logits, Temperature scaling, and Top-p filters', bn: 'টোকেন ও স্যাম্পলিং কৌশল: বাইট-পেয়ার এনকোডিং, লজিটস, টেম্পারেচার স্কেলিং ও টপ-পি ফিল্টার' },
        { en: 'Milestone: Shape probability distributions and control generation determinism with Temperature', bn: 'মাইলফলক: সম্ভাব্যতা বিন্যাস নিয়ন্ত্রণ এবং টেম্পারেচারের সাহায্যে মডেলের আউটপুট পরিচালনা' },
      ],
    },
    {
      title: { en: 'Stage 2 — Core Architectures: Transformers, Diffusion, and Multimodal', bn: 'ধাপ ২ — প্রধান স্থাপত্য: ট্রান্সফরমার, ডিফিউশন এবং মাল্টিমোডাল' },
      items: [
        { en: 'Transformers and GPT: Scaled dot-product attention (Q, K, V), causal masking, and decoder stacks', bn: 'ট্রান্সফরমার ও জিপিটি: স্কেলড ডট-প্রোডাক্ট অ্যাটেনশন (Q, K, V), কজাল মাস্কিং ও ডিকোডার স্ট্যাক' },
        { en: 'Diffusion and Images: Forward noise schedules, reverse denoising U-Net, and Latent Diffusion', bn: 'ডিফিউশন ও ছবি জেনারেশন: ফরওয়ার্ড নয়েজ শিডিউল, রিভার্স ডিনয়েজিং ইউ-নেট ও ল্যাটেন্ট ডিফিউশন' },
        { en: 'Multimodal Models and Audio: CLIP contrastive joint embeddings, Mel-spectrograms, and neural vocoders', bn: 'মাল্টিমোডাল মডেল ও অডিও: ক্লিপ কনট্রাস্টিভ জয়েন্ট এমবেডিং, মেল-স্পেকট্রোগ্রাম ও নিউরাল ভোকোডার' },
        { en: 'Milestone: Simulate multi-modal cosine similarity and trace the end-to-end speech synthesis pipeline', bn: 'মাইলফলক: মাল্টি-মোডাল কোসাইন সিমিলারিটি এবং টেক্সট-টু-স্পিচ পাইপলাইনের সফল বাস্তবায়ন' },
      ],
    },
    {
      title: { en: 'Stage 3 — Specialization, Safety, and Production RAG', bn: 'ধাপ ৩ — বিশেষজ্ঞতা, নিরাপত্তা এবং প্রোডাকশন RAG' },
      items: [
        { en: 'Fine-Tuning and Alignment: Low-Rank Adaptation (LoRA), SFT demonstrations, and RLHF/DPO', bn: 'ফাইন-টিউনিং ও অ্যালাইনমেন্ট: লো-র‌্যাংক অ্যাডাপটেশন (LoRA), এসএফটি এবং আরএলএইচএফ/ডিপিও' },
        { en: 'Limits, Bias, and Safety: Hallucination mitigation, prompt injection defense, and 5-layer safety stack', bn: 'সীমাবদ্ধতা ও নিরাপত্তা: হ্যালুসিনেশন প্রতিরোধ, প্রম্পট ইনজেকশন প্রতিরক্ষা ও ৫-স্তর নিরাপত্তা ব্যবস্থা' },
        { en: 'GenAI Capstone: Production RAG pipeline connecting vector search, citations, and grounding gates', bn: 'জেনারেটিভ এআই সমাপনী প্রজেক্ট: ভেক্টর সার্চ, উদ্ধৃতি এবং ফ্যাক্ট-চেকিং গ্রাউন্ডিং গেটের পূর্ণাঙ্গ RAG পাইপলাইন' },
        { en: 'Milestone: Deploy an enterprise-grade cited knowledge assistant with verified zero hallucinations', bn: 'মাইলফলক: প্রামাণ্য নথির উদ্ধৃতিযুক্ত নির্ভরযোগ্য ও হ্যালুসিনেশনমুক্ত এন্টারপ্রাইজ এআই সহকারী স্থাপন' },
      ],
    },
  ],
  lessons: [
    MeetGenerativeAiLesson,
    TokensSamplingLesson,
    TransformersGptLesson,
    DiffusionImagesLesson,
    MultimodalAudioLesson,
    FineTuningAlignmentLesson,
    LimitsSafetyGenLesson,
    GenaiCapstoneLesson,
  ],
  projects: [
    {
      title: { en: 'Project 1 — The Probabilistic Sampling Laboratory', bn: 'প্রজেক্ট ১ — সম্ভাব্যতা স্যাম্পলিং গবেষণাগার' },
      brief: {
        en: 'Build an interactive sampling simulator evaluating temperature sweeps across {0.1, 0.5, 1.0, 2.0} over vocabulary logit distributions. Calculate entropy shifts, evaluate Top-k and Top-p nucleus cutoffs, and produce an analytical report explaining the exact tradeoff between factual determinism and creative diversity.',
        bn: 'লজিটস ডিস্ট্রিবিউশনের ওপর {০.১, ০.৫, ১.০, ২.০} টেম্পারেচার বিশ্লেষণকারী একটি স্যাম্পলিং সিমুলেটর তৈরি করুন। এনট্রপির পরিবর্তন হিসাব করুন, টপ-কে ও টপ-পি নিউক্লিয়াস ফিল্টারিং মূল্যায়ন করুন এবং তথ্যের নির্ভুলতা বনাম সৃজনশীল বৈচিত্র্যের ভারসাম্যের ওপর একটি বিশদ বিশ্লেষণাত্মক রিপোর্ট প্রস্তুত করুন।',
      },
    },
    {
      title: { en: 'Project 2 — Enterprise Grounded Documentation Assistant (RAG)', bn: 'প্রজেক্ট ২ — প্রামাণ্য এন্টারপ্রাইজ ডকুমেন্টেশন অ্যাসিস্ট্যান্ট (RAG)' },
      brief: {
        en: 'Construct a production Retrieval-Augmented Generation service: chunk 5 enterprise technical documents into overlapping 200-token blocks, generate dense embeddings, configure a 0.70 cosine similarity threshold with automated fallback, and enforce programmatic [Doc-ID] citation grounding gates before returning answers.',
        bn: 'একটি পূর্ণাঙ্গ প্রোডাকশন RAG সার্ভিস তৈরি করুন: ৫টি কারিগরি নথিকে ২০০-টোকেনের ওভারল্যাপিং ব্লকে বিভক্ত করুন, ডেন্স এমবেডিং তৈরি করুন, ০.৭০ কোসাইন সাদৃশ্য মানদণ্ড কনফিগার করুন এবং ব্যবহারকারীকে উত্তর প্রদর্শনের পূর্বে বাধ্যতামূলক [Doc-ID] উদ্ধৃতি যাচাই গেট বাস্তবায়ন করুন।',
      },
    },
  ],
  bestPractices: [
    { en: 'Low temperature for deterministic facts, moderate for creative prose: Never use a single temperature across distinct tasks.', bn: 'তথ্যের নির্ভুলতায় কম টেম্পারেচার, সৃষ্টিশীল লেখায় পরিমিত টেম্পারেচার: সব কাজের জন্য কখনোই একটি একক টেম্পারেচার ব্যবহার করবেন না।' },
    { en: 'Apply Top-p nucleus filtering before temperature tuning: Truncate improbable tail tokens to eliminate nonsensical generations.', bn: 'টেম্পারেচার ঠিক করার আগে টপ-পি নিউক্লিয়াস ফিল্টার দিন: অপ্রাসঙ্গিক শব্দ ছাঁটাই করে অর্থহীন আউটপুট রোধ করুন।' },
    { en: 'Use LoRA adapters rather than full fine-tuning: Keep base foundation models frozen to enable fast multi-tenant specialization.', bn: 'ফুল ফাইন-টিউনিংয়ের বদলে লোরা অ্যাডাপ্টার ব্যবহার করুন: মূল মডেল ফ্রোজেন রেখে দ্রুত গ্রাহকভেদে বিশেষায়িত সুবিধা দিন।' },
    { en: 'Mandate programmatic citations on all enterprise answers: Require >= 80% factual grounding scores before delivering completions.', bn: 'ব্যবসায়িক উত্তরে প্রামাণ্য নথির উদ্ধৃতি বাধ্যতামূলক করুন: নূন্যতম ৮০% গ্রাউন্ডিং স্কোর নিশ্চিত না হলে উত্তর প্রদর্শন আটকান।' },
    { en: 'Deploy multi-layered defense-in-depth: Combine data curation, alignment, red teaming, and runtime guardrails against prompt injection.', bn: 'বহুস্তরী নিরাপত্তা প্রাচীর তৈরি করুন: প্রম্পট ইনজেকশন প্রতিহত করতে ডেটা ফিল্টারিং, অ্যালাইনমেন্ট ও রানটাইম ফিল্টার একসাথে প্রয়োগ করুন।' },
  ],
  interview: [
    {
      q: {
        en: 'What mathematical transformation occurs when adjusting Temperature from 1.0 to 0.2 versus 2.0 during Softmax evaluation?',
        bn: 'সফটম্যাক্স মূল্যায়নের সময় টেম্পারেচার ১.০ থেকে কমিয়ে ০.২ বা বাড়িয়ে ২.০ করলে গাণিতিকভাবে কী পরিবর্তন ঘটে?'
      },
      a: {
        en: 'Temperature divides raw logits before exponentiation. At T=0.2, logit differences are scaled up by 5x, pulling the top-scoring token toward near-certainty (sharp distribution). At T=2.0, differences are halved, flattening the probability distribution across all vocabulary tokens toward uniform entropy.',
        bn: 'টেম্পারেচার এক্সপোনেনশিয়ালের পূর্বে লজিটসকে ভাগ করে। T=০.২ হলে লজিটের ব্যবধান ৫ গুণ বেড়ে যায় এবং শীর্ষ টোকেন নিশ্চিত পছন্দের কাছাকাছি পৌঁছায় (শার্প ডিস্ট্রিবিউশন)। আর T=২.০ হলে ব্যবধান অর্ধেক হয়ে যায় এবং সমস্ত শব্দের সম্ভাবনা সমতল হয়ে বিশৃঙ্খলা বৃদ্ধি পায়।'
      },
    },
    {
      q: {
        en: 'Why is Low-Rank Adaptation (LoRA) vastly preferred over full fine-tuning for enterprise microservice deployments?',
        bn: 'এন্টারপ্রাইজ মাইক্রোসার্ভিস সিস্টেমে ফুল ফাইন-টিউনিংয়ের চেয়ে লো-র‌্যাংক অ্যাডাপটেশন (LoRA) কেন বহুগুণ বেশি গ্রহণযোগ্য?'
      },
      a: {
        en: 'Full fine-tuning updates 100% of model weights, requiring hundreds of gigabytes per checkpoint. LoRA freezes base weights and trains rank-8 decomposition matrices representing less than 1% of parameters (50MB to 100MB per adapter). In production, one shared base model stays loaded in VRAM while lightweight tenant adapters swap dynamically per request.',
        bn: 'ফুল ফাইন-টিউনিংয়ে মডেলের ১০০% ওজন পরিবর্তিত হওয়ায় প্রতি চেকে শত শত গিগাবাইট মেমরি লাগে। লোরা মূল মডেল অপরিবর্তিত রেখে ক্ষুদ্র দুটি ম্যাট্রিক্স প্রশিক্ষণ দেয় যা মোট ওজনের ১% এরও কম (প্রতি অ্যাডাপ্টারে মাত্র ৫০-১০০ মেগাবাইট)। প্রোডাকশনে একটি মাত্র মূল মডেল মেমরিতে রেখে গ্রাহকভেদে ক্ষুদ্র অ্যাডাপ্টার তাৎক্ষণিক অদলবদল করা যায়।'
      },
    },
    {
      q: {
        en: 'When a production RAG system generates a confident but factually incorrect answer, how do you diagnose and fix the failure in order?',
        bn: 'একটি প্রোডাকশন RAG সিস্টেম যখন আত্মবিশ্বাসের সাথে ভুল উত্তর তৈরি করে, তখন ক্রমানুসারে কীভাবে সমস্যা নির্ণয় ও সমাধান করবেন?'
      },
      a: {
        en: 'First, isolate whether the root cause is a Retrieval Miss or a Generation Hallucination. If the retrieved context lacked the answer, implement a similarity floor (e.g. 0.70) with an automated "insufficient documentation" fallback, and upgrade chunking with hybrid BM25 + dense search. If the retrieved context contained the facts but the model fabricated claims, enforce lower temperature (T=0.2), strict prompt delimiters, and a programmatic grounding gate requiring >= 80% citation coverage.',
        bn: 'প্রথমে চিহ্নিত করুন সমস্যাটি রিট্রিভাল ব্যর্থতা নাকি জেনারেশন হ্যালুসিনেশন। যদি নথিতে তথ্যই না থাকে, তবে ০.৭০ সাদৃশ্য সীমা ও নিরাপদ ফলব্যাক বার্তা চালু করুন এবং হাইব্রিড সার্চ প্রয়োগ করুন। আর নথিতে সঠিক তথ্য থাকা সত্ত্বেও মডেল ভুল তথ্য বানিয়ে থাকলে টেম্পারেচার ০.২ নির্ধারণ করুন, প্রম্পটে স্পষ্ট ট্যাগ দিন এবং ৮০% উদ্ধৃতি কভারেজ বাধ্যতামূলক করুন।'
      },
    },
    {
      q: {
        en: 'Why is Supervised Fine-Tuning (SFT) insufficient on its own to produce a safe and aligned conversational assistant?',
        bn: 'একটি নিরাপদ ও মার্জিত এআই সহকারী তৈরিতে কেবল সুপারভাইজড ফাইন-টিউনিং (SFT) কেন যথেষ্ট নয়?'
      },
      a: {
        en: 'SFT copies demonstration formatting and tone, but cannot effectively balance multi-objective ethical tradeoffs between helpfulness, harmlessness, and honesty. RLHF and Direct Preference Optimization (DPO) optimize directly against human preference rankings, using KL divergence penalties to teach models when to politely refuse dangerous requests without becoming unhelpfully evasive.',
        bn: 'এসএফটি কেবল প্রদর্শন দেখে উত্তরের ধরন ও ভঙ্গি অনুকরণ করে, কিন্তু সহায়কতা, অহিংসা ও সত্যবাদিতার মধ্যকার সূক্ষ্ম ভারসাম্য রক্ষা করতে পারে না। আরএলএইচএফ ও ডিপিও সরাসরি মানুষের পছন্দের ক্রমানুসারে প্রশিক্ষিত হয়ে কেএল জরিমানার সাহায্যে মডেলকে বিপজ্জনক অনুরোধ বিনয়ের সাথে প্রত্যাখ্যান করতে শেখায়।'
      },
    },
  ],
  realWorld: [
    { en: 'Enterprise Document Copilots: Dense vector retrieval, contextual chunking, and strict citation grounding gates powering corporate intranets.', bn: 'এন্টারপ্রাইজ ডকুমেন্ট কোপাইলট: কর্পোরেট তথ্যভাণ্ডারে ডেন্স ভেক্টর সার্চ, প্রাসঙ্গিক চাঙ্কিং এবং প্রামাণ্য নথির উদ্ধৃতি যাচাই গেট।' },
    { en: 'Creative Media Studios: Latent diffusion models with Classifier-Free Guidance generating advertising storyboards and game concept art.', bn: 'ক্রিয়েটিভ মিডিয়া স্টুডিও: ক্লাসিফায়ার-ফ্রি গাইডেন্সসমৃদ্ধ ল্যাটেন্ট ডিফিউশন মডেল দিয়ে দ্রুত বিজ্ঞাপনের স্ক্রিপ্ট ও গেম কনসেপ্ট আর্ট তৈরি।' },
    { en: 'Automated Voice Synthesis: Neural vocoders and speaker embeddings powering personalized audiobook narration and customer support agents.', bn: 'স্বয়ংক্রিয় ভয়েস সিন্থেসিস: নিউরাল ভোকোডার ও স্পিকার এমবেডিং ব্যবহার করে স্বাভাবিক কণ্ঠস্বরে অডিওবুক পাঠ ও কাস্টমার সাপোর্ট প্রদান।' },
    { en: 'Software Development Assistants: Low-temperature autoregressive code completion with context-aware repository retrieval and syntax guardrails.', bn: 'সফটওয়্যার ডেভেলপমেন্ট সহকারী: কম টেম্পারেচারের অটোরিগ্রেসিভ কোড জেনারেশন যা রিপোজিটরির প্রেক্ষাপট বুঝে নির্ভরযোগ্য কোড লিখে দেয়।' },
  ],
};
