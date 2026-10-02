import type { Hub } from '../../lib/types';
import { MeetPromptsLesson } from './lessons/meet-prompts';
import { ZeroFewShotLesson } from './lessons/zero-few-shot';
import { DecomposeCotLesson } from './lessons/decompose-cot';
import { ConstraintsFormatLesson } from './lessons/constraints-format';
import { PersonasStyleLesson } from './lessons/personas-style';
import { AdversarialRobustLesson } from './lessons/adversarial-robust';
import { OptimizeEvalLesson } from './lessons/optimize-eval';
import { PromptCapstoneLesson } from './lessons/prompt-capstone';

export const promptEngineeringHub: Hub = {
  slug: 'prompt-engineering',
  name: 'Prompt Engineering',
  icon: '🪄',
  tagline: {
    en: 'Master the art and science of programming Large Language Models: structured prompt anatomy, few-shot in-context learning, chain-of-thought decomposition, schema enforcement, adversarial defense, and automated evaluation harnesses.',
    bn: 'লার্জ ল্যাঙ্গুয়েজ মডেল প্রোগ্রামিংয়ের কলা ও বিজ্ঞান আয়ত্ত করুন: সুসংগঠিত প্রম্পট অ্যানাটমি, ফিউ-শট ইন-কনটেক্সট লার্নিং, চেইন-অব-থট বিভাজন, স্কিমা প্রয়োগ, অ্যাডভারসেরিয়াল প্রতিরক্ষা এবং স্বয়ংক্রিয় মূল্যায়ন কাঠামো।'
  },
  intro: {
    en: 'Prompt engineering transforms natural language into deterministic software interfaces. In this comprehensive 8-lesson track, you progress from foundational prompt anatomy (Instruction, Context, Input, Output Format) to advanced in-context learning, multi-step Chain-of-Thought reasoning, strict JSON Schema validation, enterprise red-teaming against prompt injections, and regression-tested LLM evaluation pipelines.',
    bn: 'প্রম্পট ইঞ্জিনিয়ারিং মানুষের ভাষাকে সুনির্দিষ্ট ও নির্ভরযোগ্য সফটওয়্যার ইন্টারফেসে রূপান্তর করে। এই পূর্ণাঙ্গ ৮ পাঠের ট্র্যাকে আপনি প্রম্পটের মূল উপাদান (নির্দেশনা, প্রসঙ্গ, ইনপুট ও আউটপুট ফরম্যাট) থেকে শুরু করে ইন-কনটেক্সট লার্নিং, চেইন-অব-থট যুক্তিপ্রবাহ, কঠোর JSON স্কিমা ভ্যালিডেশন, প্রম্পট ইনজেকশন প্রতিরোধ এবং রিগ্রেশন-টেস্টেড মূল্যায়ন পাইপলাইন বাস্তবায়ন শিখবেন।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Core Anatomy and In-Context Demonstration (Lessons 1–2)',
        bn: 'ধাপ ১ — মূল কাঠামো এবং ইন-কনটেক্সট উদাহরণ (পাঠ ১–২)'
      },
      items: [
        {
          en: 'Lesson 1 (Meet Prompts): The 4-component prompt architecture, temperature and top-p sampling, and system vs user message hierarchies.',
          bn: 'পাঠ ১ (মিট প্রম্পটস): ৪ উপাদানের প্রম্পট আর্কিটেকচার, টেম্পারেচার ও টপ-পি স্যাম্পলিং এবং সিস্টেম বনাম ইউজার মেসেজ হায়ারার্কি।'
        },
        {
          en: 'Lesson 2 (Zero and Few-Shot Learning): In-context demonstration selection, exemplar diversity, order sensitivity, and negative constraints.',
          bn: 'পাঠ ২ (জিরো ও ফিউ-শট লার্নিং): ইন-কনটেক্সট ডেমোনস্ট্রেশন নির্বাচন, বৈচিত্র্য, ক্রম সংবেদনশীলতা এবং নেগেটিভ কনস্ট্রেইন্ট।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Cognitive Reasoning and Structural Guarantees (Lessons 3–5)',
        bn: 'ধাপ ২ — যুক্তিবাদী চিন্তা এবং কাঠামোগত নিশ্চয়তা (পাঠ ৩–৫)'
      },
      items: [
        {
          en: 'Lesson 3 (Decomposition and Chain-of-Thought): Zero-Shot CoT, Least-to-Most decomposition, Self-Consistency voting, and Tree-of-Thoughts.',
          bn: 'পাঠ ৩ (ডিকম্পোজিশন ও চেইন-অব-থট): জিরো-শট CoT, লিস্ট-টু-মোস্ট পদ্ধতি, সেলফ-কনসিস্টেন্সি ভোটিং এবং ট্রি-অব-থটস।'
        },
        {
          en: 'Lesson 4 (Constraints and Format Enforcement): Native JSON Schemas, Pydantic validation, XML delimiter tags, and schema repair loops.',
          bn: 'পাঠ ৪ (কনস্ট্রেইন্টস ও ফরম্যাট প্রয়োগ): নেটিভ JSON স্কিমা, পাইড্যান্টিক ভ্যালিডেশন, XML ডিলিমিটার ট্যাগ এবং স্কিমা মেরামত লুপ।'
        },
        {
          en: 'Lesson 5 (Personas and Stylistic Calibration): System role casting, audience tailoring, tone modulation, and anti-syndication instructions.',
          bn: 'পাঠ ৫ (পারসোনা ও স্টাইলিশ ক্যালিব্রেশন): সিস্টেম রোল কাস্টিং, অডিয়েন্স বিবেচনা, টোন নিয়ন্ত্রণ এবং প্রমিত নির্দেশাবলি।'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Security, Evaluation, and Enterprise Production (Lessons 6–8)',
        bn: 'ধাপ ৩ — নিরাপত্তা, মূল্যায়ন এবং এন্টারপ্রাইজ প্রোডাকশন (পাঠ ৬–৮)'
      },
      items: [
        {
          en: 'Lesson 6 (Adversarial Robustness and Injection Defense): Direct and indirect prompt injection, delimiter sandboxing, and dual-LLM guardrail architectures.',
          bn: 'পাঠ ৬ (অ্যাডভারসেরিয়াল নিরাপত্তা ও ইনজেকশন ডিফেন্স): ডিরেক্ট ও ইনডিরেক্ট প্রম্পট ইনজেকশন, ডিলিমিটার স্যান্ডবক্সিং এবং ডুয়াল-এলএলএম গার্ডরেল আর্কিটেকচার।'
        },
        {
          en: 'Lesson 7 (Optimization and Quantitative Evaluation): Golden datasets, LLM-as-a-judge scoring rubrics, pairwise evaluation, and CI/CD prompt regression tests.',
          bn: 'পাঠ ৭ (অপ্টিমাইজেশন ও পরিমাণগত মূল্যায়ন): গোল্ডেন টেস্ট ডেটাসেট, এলএলএম-অ্যাজ-আ-জাজ স্কোরিং, পেয়ারওয়াইজ তুলনা এবং সিআই/সিডি রিগ্রেশন টেস্ট।'
        },
        {
          en: 'Lesson 8 (Production Prompt Capstone): Architecting a production-grade enterprise support triage agent with end-to-end telemetry and validation.',
          bn: 'পাঠ ৮ (প্রোডাকশন প্রম্পট ক্যাপস্টোন): পূর্ণাঙ্গ এন্টারপ্রাইজ সাপোর্ট ট্রায়াজ এজেন্ট, টেলিমিতি এবং এন্ড-টু-এন্ড ভ্যালিডেশন সিস্টেম তৈরি।'
        }
      ]
    }
  ],
  lessons: [
    MeetPromptsLesson,
    ZeroFewShotLesson,
    DecomposeCotLesson,
    ConstraintsFormatLesson,
    PersonasStyleLesson,
    AdversarialRobustLesson,
    OptimizeEvalLesson,
    PromptCapstoneLesson
  ],
  projects: [
    {
      title: {
        en: 'Project 1 — Enterprise Contract Extraction Engine',
        bn: 'প্রজেক্ট ১ — এন্টারপ্রাইজ চুক্তিপত্র বিশ্লেষণ ইঞ্জিন'
      },
      brief: {
        en: 'Construct a multi-stage prompt pipeline that ingests complex legal agreements, extracts structured financial and expiration metadata into strict JSON conforming to a Pydantic schema, and includes a fallback repair validator with 100% test pass rate.',
        bn: 'একটি বহুধাপের প্রম্পট পাইপলাইন তৈরি করুন যা জটিল আইনি চুক্তিপত্র গ্রহণ করে, আর্থিক ও মেয়াদোত্তীর্ণের মেটাডাটা কঠোর JSON স্কিমায় নিষ্কাশন করে এবং ১০০% টেস্ট পাস নিশ্চিতকারী ফলব্যাক রিপেয়ার ভ্যালিডেটর অন্তর্ভুক্ত করে।'
      }
    },
    {
      title: {
        en: 'Project 2 — Automated Red-Teaming & Guardrail Harness',
        bn: 'প্রজেক্ট ২ — স্বয়ংক্রিয় রেড-টিমিং ও গার্ডরেল কাঠামো'
      },
      brief: {
        en: 'Develop an automated penetration-testing harness containing 20 distinct adversarial attacks (jailbreaks, delimiter hijacking, role reversal, encoding evasion) to benchmark prompt defense layers and log security telemetry.',
        bn: '২০টি স্বতন্ত্র আক্রমণ কৌশল (জেলব্রেক, ডিলিমিটার হাইজ্যাকিং, রোল রিভার্সাল এবং এনকোডিং ফাঁকি) সম্বলিত স্বয়ংক্রিয় পেনিট্রেশন টেস্ট কাঠামো তৈরি করুন যা প্রম্পট ডিফেন্স লেয়ার মূল্যায়ন ও নিরাপত্তা লগ সংরক্ষণ করে।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always separate instructions, context, input data, and expected output formats using clear delimiters such as XML tags or Markdown fences.',
      bn: 'সর্বদা স্পষ্ট ডিলিমিটার যেমন XML ট্যাগ বা মার্কডাউন ফেন্স ব্যবহার করে নির্দেশনা, প্রসঙ্গ, ইনপুট ডেটা এবং প্রত্যাশিত আউটপুট ফরম্যাট আলাদা করুন।'
    },
    {
      en: 'Employ few-shot exemplars that cover common edge cases and ordering diversity rather than relying solely on abstract instructions.',
      bn: 'কেবল তাত্ত্বিক নির্দেশনার ওপর নির্ভর না করে বাস্তব এজ-কেস এবং বৈচিত্র্যময় উদাহরণ প্রদর্শনকারী ফিউ-শট এক্সাম্পলার ব্যবহার করুন।'
    },
    {
      en: 'Enforce strict schema validation (JSON Schema, Zod, or Pydantic) with automated retry and repair loops for mission-critical pipelines.',
      bn: 'মিশন-ক্রিটিক্যাল সিস্টেমের জন্য স্বয়ংক্রিয় রিট্রাই ও রিপেয়ার লুপ সহ কঠোর স্কিমা ভ্যালিডেশন (JSON Schema, Zod বা Pydantic) প্রয়োগ করুন।'
    },
    {
      en: 'Treat untrusted user inputs as adversarial code; sandbox data inside XML boundaries and implement dual-model validation guardrails.',
      bn: 'ব্যবহারকারীর অবিশ্বস্ত ইনপুটকে সম্ভাব্য ক্ষতিকর কোড হিসেবে বিবেচনা করুন; XML সীমানায় স্যান্ডবক্স করুন এবং ডুয়াল-মডেল গার্ডরেল ব্যবহার করুন।'
    },
    {
      en: 'Maintain a frozen golden test dataset and evaluate all prompt iterations against quantitative rubrics before deploying to production.',
      bn: 'প্রোডাকশনে প্রম্পট পরিবর্তনের আগে সর্বদা একটি সংরক্ষিত গোল্ডেন টেস্ট ডেটাসেটে পরিমাণগত রুব্রিক্স দ্বারা মান যাচাই করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'How does Chain-of-Thought (CoT) prompting improve reasoning in Large Language Models, and when should it be avoided?',
        bn: 'চেইন-অব-থট (CoT) প্রম্পটিং কীভাবে লার্জ ল্যাঙ্গুয়েজ মডেলের যুক্তি দক্ষতা বৃদ্ধি করে এবং এটি কখন পরিহার করা উচিত?'
      },
      a: {
        en: 'CoT allocates additional computation time to intermediate reasoning tokens before predicting final answers, dramatically reducing logical errors in arithmetic, planning, and symbolic reasoning. It should be avoided for simple categorization or low-latency transactional lookups where it needlessly inflates token costs and latency.',
        bn: 'CoT চূড়ান্ত উত্তর দেওয়ার আগে মধ্যবর্তী যুক্তির টোকেনগুলোর জন্য মডেলকে অতিরিক্ত কম্পিউটেশন বরাদ্দ দেয়, যা গণিত, পরিকল্পনা এবং যৌক্তিক সমস্যায় ভুল কমায়। তবে সহজ ক্লাসিফিকেশন বা কম লেটেন্সির ট্রানজ্যাকশনে এটি টোকেন খরচ ও লেটেন্সি অনর্থক বাড়িয়ে দেয় বলে তখন পরিহার করা উচিত।'
      }
    },
    {
      q: {
        en: 'What is the fundamental difference between Direct Prompt Injection and Indirect Prompt Injection?',
        bn: 'ডিরেক্ট প্রম্পট ইনজেকশন এবং ইনডিরেক্ট প্রম্পট ইনজেকশনের মধ্যে মৌলিক পার্থক্য কী?'
      },
      a: {
        en: 'Direct injection occurs when a user directly enters adversarial instructions into the prompt interface to override system instructions. Indirect injection occurs when an LLM ingests untrusted third-party external data (such as web pages, emails, or PDFs) containing hidden adversarial payloads designed to hijack execution.',
        bn: 'ডিরেক্ট ইনজেকশনে ব্যবহারকারী সরাসরি প্রম্পট ইনপুটে ক্ষতিকর নির্দেশ লিখে সিস্টেমের মূল নিয়ম অমান্য করায়। আর ইনডিরেক্ট ইনজেকশনে মডেল যখন কোনো বাইরের তথ্য (যেমন ওয়েবপেজ, ইমেইল বা পিডিএফ) পড়ে, তখন সেই তথ্যের ভেতরে লুকিয়ে রাখা নির্দেশাবলি মডেলকে বিপথগামী করে।'
      }
    },
    {
      q: {
        en: 'Why is few-shot exemplar ordering critical, and how do models exhibit recency bias?',
        bn: 'ফিউ-শট উদাহরণের ক্রম কেন অত্যন্ত গুরুত্বপূর্ণ এবং মডেল কীভাবে রিসেন্সি বায়াস প্রদর্শন করে?'
      },
      a: {
        en: 'LLMs exhibit recency bias, disproportionately weighting the final few-shot examples or defaulting to the majority class in the exemplar set. Best practices require balancing class distributions, placing edge cases strategically, and testing multiple exemplar permutations during prompt evaluation.',
        bn: 'এলএলএম রিসেন্সি বায়াস দেখায়, অর্থাৎ শেষের উদাহরণগুলোকে বেশি গুরুত্ব দেয় অথবা উদাহরণে যে ক্লাসের আধিক্য থাকে সেদিকে ঝুঁকে পড়ে। তাই ক্লাস ব্যালান্স রাখা, এজ-কেসগুলো সতর্কতার সাথে সাজানো এবং মূল্যায়নের সময় বিভিন্ন ক্রম পরীক্ষা করা জরুরি।'
      }
    },
    {
      q: {
        en: 'How can an engineering team reliably enforce deterministic JSON outputs from non-deterministic LLMs in production?',
        bn: 'প্রোডাকশনে অনির্দিষ্ট (non-deterministic) এলএলএম থেকে ইঞ্জিনিয়ারিং দল কীভাবে নির্ভরযোগ্যভাবে সুনির্দিষ্ট JSON আউটপুট নিশ্চিত করতে পারে?'
      },
      a: {
        en: 'Teams combine model-native structured output modes (constrained decoding via grammar-guided sampling) with schema definitions (JSON Schema or Pydantic), zero-temperature sampling, and programmatic retry handlers that feed parse error messages back to the model for automated correction.',
        bn: 'গ্রামার-গাইডেড স্যাম্পলিংয়ের মাধ্যমে মডেলের নেটিভ স্ট্রাকচার্ড আউটপুট মোড, কঠোর স্কিমা সংজ্ঞা (JSON Schema বা Pydantic), শূন্য টেম্পারেচার এবং প্রোগ্রাম্যাটিক রিট্রাই হ্যান্ডলার ব্যবহার করা হয় যা পার্সিং ত্রুটি মডেলকে পাঠিয়ে স্বয়ংক্রিয়ভাবে ঠিক করে নেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Enterprise Support Triage: High-throughput automated routing and response generation deflecting over 45% of tier-1 support tickets with verified citations.',
      bn: 'এন্টারপ্রাইজ সাপোর্ট ট্রায়াজ: স্বয়ংক্রিয় টিকিট রাউটিং ও সমাধান যা সঠিক তথ্যসূত্র সহ টায়ার-১ সাপোর্টের ৪৫% এরও বেশি চাপ কমিয়ে দেয়।'
    },
    {
      en: 'Structured Financial Extraction: Ingesting quarterly SEC earnings filings and converting unstructured financial disclosures into schema-compliant relational databases.',
      bn: 'স্ট্রাকচার্ড আর্থিক তথ্য নিষ্কাশন: ত্রৈমাসিক আর্থিক প্রতিবেদন বিশ্লেষণ করে অসংগঠিত তথ্যকে স্কিমা-সম্মত রিলেশনাল ডেটাবেসে রূপান্তর।'
    },
    {
      en: 'Multi-Agent Code Synthesis: Dual-prompt architecture where an architect prompt drafts code and an independent auditor prompt red-teams security vulnerabilities.',
      bn: 'মাল্টি-এজেন্ট কোড সিন্থেসিস: ডুয়াল-প্রম্পট আর্কিটেকচার যেখানে একটি প্রম্পট কোড তৈরি করে এবং স্বাধীন অডিটর প্রম্পট নিরাপত্তা ত্রুটি পরীক্ষা করে।'
    },
    {
      en: 'Healthcare Clinical Summarization: Summarizing doctor-patient consultations with strict negative constraints prohibiting hallucinated medical recommendations.',
      bn: 'স্বাস্থ্যসেবা ক্লিনিকাল সারাংশ: কাল্পনিক বা ভুয়া প্রেসক্রিপশন সম্পূর্ণ নিষিদ্ধ করে চিকিৎসক ও রোগীর কথোপকথনের নির্ভুল ক্লিনিকাল সারাংশ তৈরি।'
    }
  ]
};
