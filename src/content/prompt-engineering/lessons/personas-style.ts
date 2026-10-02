import type { Lesson } from '../../../lib/types';

export const PersonasStyleLesson: Lesson = {
  slug: 'personas-style',
  tech: 'prompt-engineering',
  title: {
    en: 'Personas, System Prompts, and Stylistic Calibration',
    bn: 'পারসোনা, সিস্টেম প্রম্পট এবং স্টাইলিশ ক্যালিব্রেশন'
  },
  summary: {
    en: 'Master role casting and audience calibration: prime transformer attention using 4-part System Personas, modulate explanation depth across novice to executive audiences, and enforce tight verbosity budgets.',
    bn: 'রোল কাস্টিং এবং অডিয়েন্স ক্যালিব্রেশন আয়ত্ত করুন: ৪ অংশের সিস্টেম পারসোনা দিয়ে ট্রান্সফরমার মডেলকে দক্ষ করে তোলা, নতুন শিক্ষার্থী থেকে এক্সিকিউটিভ পর্যন্ত বিভিন্ন স্তরের জন্য ব্যাখ্যা তৈরি এবং নিয়ন্ত্রিত শব্দসীমা প্রয়োগ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'role-casting-effect-heading',
      text: {
        en: 'The Semantic Priming Mechanism: Why Personas Steer Model Output',
        bn: 'সিম্যান্টিক প্রাইমিং পদ্ধতি: পারসোনা কীভাবে মডেলের উত্তর পরিচালনা করে'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Large Language Models are trained on trillions of tokens spanning disparate linguistic domains, from casual social forums to peer-reviewed scientific journals. When given an ungrounded prompt, the model samples from the generic average of the web. Establishing an authoritative System Persona primes the attention layers into specialized vocabulary sub-spaces. An engineer with 10 years of experience prioritizes root cause analysis over elementary definitions.',
        bn: 'লার্জ ল্যাঙ্গুয়েজ মডেলগুলো কোটি কোটি বৈচিত্র্যময় টেক্সটের ওপর প্রশিক্ষিত, যার মধ্যে সাধারণ সামাজিক মাধ্যমের আড্ডা থেকে শুরু করে শীর্ষ বৈজ্ঞানিক গবেষণাপত্রও রয়েছে। যখন কোনো সাধারণ প্রম্পট দেওয়া হয়, মডেল ওয়েবের গড়পড়তা মানের লেখা তৈরি করে। কিন্তু একটি নির্ভরযোগ্য সিস্টেম পারসোনা যুক্ত করলে মডেলের অ্যাটেনশন লেয়ার নির্দিষ্ট পেশাদার শব্দভাণ্ডার সক্রিয় করে। যেমন ১০ বছরের অভিজ্ঞতাসম্পন্ন একজন ইঞ্জিনিয়ারের পারসোনা প্রাথমিক সংজ্ঞার বদলে সমস্যার মূল কারণ অনুসন্ধানে জোর দেয়।'
      }
    },
    {
      type: 'visual',
      id: 'persona-calibration-svg',
      caption: {
        en: 'Figure 1: The 4-part System Persona framework and audience depth modulation.',
        bn: 'চিত্র ১: ৪ অংশের সিস্টেম পারসোনা কাঠামো এবং অডিয়েন্স অনুসারে গভীরতা নিয়ন্ত্রণ।'
      },
      content: `<svg viewBox="0 0 840 340" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="340" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">THE SYSTEM PERSONA & AUDIENCE CALIBRATION SPECTRUM</text>
  
  <!-- Persona 1: Executive Briefing -->
  <g transform="translate(30, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#0284c7" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Persona 1: Executive Advisor 👔</text>
    
    <text x="20" y="65" fill="#38bdf8" font-size="11" font-family="monospace">Audience: Non-technical C-Suite</text>
    <rect x="15" y="75" width="330" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="25" y="95" fill="#cbd5e1" font-size="10" font-family="sans-serif">• Focus: Revenue risk, customer impact, downtime</text>
    <text x="25" y="112" fill="#cbd5e1" font-size="10" font-family="sans-serif">• Style: Active voice, max 75 words, 0 jargon</text>
    
    <rect x="15" y="140" width="330" height="85" rx="6" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="162" fill="#38bdf8" font-size="10" font-family="monospace">Generated Output Sample:</text>
    <text x="25" y="180" fill="#e2e8f0" font-size="10" font-family="sans-serif">"Database failover caused 12m checkout</text>
    <text x="25" y="196" fill="#e2e8f0" font-size="10" font-family="sans-serif">interruption. All systems restored; zero</text>
    <text x="25" y="212" fill="#e2e8f0" font-size="10" font-family="sans-serif">payment records or customer data lost."</text>
  </g>

  <!-- Persona 2: Incident Commander -->
  <g transform="translate(450, 60)">
    <rect width="360" height="250" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="360" height="36" rx="8" fill="#059669" />
    <text x="180" y="24" fill="#ffffff" font-size="13" font-family="sans-serif" font-weight="bold" text-anchor="middle">Persona 2: Staff SRE Lead 💻</text>
    
    <text x="20" y="65" fill="#10b981" font-size="11" font-family="monospace">Audience: Distributed Systems Engineers</text>
    <rect x="15" y="75" width="330" height="50" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="25" y="95" fill="#cbd5e1" font-size="10" font-family="sans-serif">• Focus: TCP socket starvation, p99 latency spike</text>
    <text x="25" y="112" fill="#cbd5e1" font-size="10" font-family="sans-serif">• Style: Technical postmortem, max 150 words, metrics</text>
    
    <rect x="15" y="140" width="330" height="85" rx="6" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="162" fill="#10b981" font-size="10" font-family="monospace">Generated Output Sample:</text>
    <text x="25" y="180" fill="#e2e8f0" font-size="10" font-family="sans-serif">"Connection pool exhaustion on replica B.</text>
    <text x="25" y="196" fill="#e2e8f0" font-size="10" font-family="sans-serif">Mitigation: doubled max_connections to 500</text>
    <text x="25" y="212" fill="#e2e8f0" font-size="10" font-family="sans-serif">and restarted proxy sidecar container."</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'four-part-persona-heading',
      text: {
        en: 'The 4-Part System Persona Blueprint',
        bn: '৪ অংশের সিস্টেম পারসোনা ব্লুপ্রিন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A high-performing System Prompt should avoid empty labels like "Act as an expert." Instead, production architectures assemble 4 concrete parts: 1. Core Identity & Credential, 2. Target Audience Profile, 3. Style & Verbosity Constraints (e.g. max 75 words or max 3 bullet points), and 4. Negative Guardrails forbidding speculation or conversational pleasantries.',
        bn: 'একটি কার্যকর সিস্টেম প্রম্পটে কেবল "বিশেষজ্ঞের মতো আচরণ করো"-এর মতো অন্তঃসারশূন্য কথা পরিহার করা উচিত। বরং প্রোডাকশন আর্কিটেকচার ৪টি সুনির্দিষ্ট অংশ সংযুক্ত করে: ১. মূল পরিচয় ও যোগ্যতা, ২. লক্ষ্যভুক্ত দর্শকের বিবরণ, ৩. লেখার ধরন ও শব্দসীমা (যেমন সর্বোচ্চ ৭৫ শব্দ বা সর্বোচ্চ ৩টি বুলেট পয়েন্ট), এবং ৪. নেগেটিভ গার্ডরেল যা অনুমানভিত্তিক কথা বা অপ্রয়োজনীয় শিষ্টাচার সম্পূর্ণ নিষিদ্ধ করে।'
      }
    },
    {
      type: 'code',
      id: 'persona-compiler-ts',
      lang: 'typescript',
      caption: {
        en: 'TypeScript compiler generating calibrated system prompts across 2 distinct enterprise personas.',
        bn: '২টি ভিন্ন এন্টারপ্রাইজ পারসোনার জন্য নিয়ন্ত্রিত সিস্টেম প্রম্পট তৈরির TypeScript কোড।'
      },
      code: `interface PersonaSpec {
  roleName: string;
  credentials: string;
  audience: string;
  maxWords: number;
  bulletLimit: number;
}

export function compilePersonaPrompt(
  spec: PersonaSpec,
  incidentData: string
): { systemPrompt: string; userPrompt: string } {
  // Construct 4-part calibrated system prompt
  const systemPrompt = [
    'IDENTITY: You are a ' + spec.roleName + ' with ' + spec.credentials + '.',
    'TARGET AUDIENCE: ' + spec.audience + '.',
    'CONSTRAINTS: Be concise. Maximum ' + spec.maxWords + ' words. Use at most ' + spec.bulletLimit + ' bullet points.',
    'GUARDRAILS: Do not include introductory pleasantries. Base all claims strictly on provided telemetry.'
  ].join('\\n');

  const userPrompt = '<incident_telemetry>\\n' + incidentData + '\\n</incident_telemetry>\\nSummarize incident.';

  return { systemPrompt, userPrompt };
}

// Persona 1: Executive summary calibrated to 75 words and 3 bullets
const executiveConfig: PersonaSpec = {
  roleName: 'Executive Technology Advisor',
  credentials: '10 years advising enterprise boards',
  audience: 'Non-technical Chief Executive Officers',
  maxWords: 75,
  bulletLimit: 3
};

const telemetry = 'Database primary crashed at 14:02 UTC. Failover finished at 14:14 UTC. 0 data lost.';
const compiled = compilePersonaPrompt(executiveConfig, telemetry);

console.log('Role Name:', executiveConfig.roleName);
console.log('Word Budget Ceiling:', executiveConfig.maxWords); // 75
console.log('System Prompt Lines:', compiled.systemPrompt.split('\\n').length); // 4`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Role Prompting',
          def: {
            en: 'Directing the model to adopt a specific professional identity to bias token generation toward domain vocabulary.',
            bn: 'নির্দিষ্ট পেশাদার পরিচয় গ্রহণের নির্দেশ যার মাধ্যমে মডেলের শব্দ নির্বাচন বিশেষায়িত ডোমেনমুখী করা হয়।'
          }
        },
        {
          term: 'Audience Calibration',
          def: {
            en: 'Adjusting terminology and explanation depth to match the background knowledge of a defined reader group.',
            bn: 'নির্দিষ্ট পাঠক শ্রেণির ধারণক্ষমতা ও অভিজ্ঞতার সাথে সামঞ্জস্য রেখে শব্দের জটিলতা ও ব্যাখ্যার গভীরতা নির্ধারণ।'
          }
        },
        {
          term: 'Verbosity Budget',
          def: {
            en: 'Enforcing strict numerical limits on word count, bullet points, or paragraphs to eliminate unnecessary filler text.',
            bn: 'শব্দ সংখ্যা, বুলেট পয়েন্ট বা অনুচ্ছেদের ওপর কঠোর গাণিতিক সীমা আরোপ করে অপ্রয়োজনীয় ফাঁকা কথা বন্ধ করা।'
          }
        },
        {
          term: 'Semantic Priming',
          def: {
            en: 'Activating specific concept clusters in neural attention layers by preceding queries with relevant contextual cues.',
            bn: 'প্রাসঙ্গিক ধারণাগত সংকেত আগে যুক্ত করে নিউরাল অ্যাটেনশন লেয়ারের নির্দিষ্ট অর্থপূর্ণ ক্ষেত্রগুলোকে সক্রিয় করা।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'persona-priming-benefit-ex1',
      kind: 'mcq',
      topic: 'semantic-priming-mechanism',
      question: {
        en: 'How does specifying a professional persona (such as an SRE with 10 years of experience) alter model completions?',
        bn: 'একটি পেশাদার পারসোনা (যেমন ১০ বছরের অভিজ্ঞতাসম্পন্ন এসআরই) নির্দিষ্ট করে দিলে মডেলের উত্তর কীভাবে পরিবর্তিত হয়?'
      },
      options: [
        {
          en: 'It activates specialized technical vocabulary in attention heads, prioritizing root cause analysis over generic beginner explanations',
          bn: 'এটি অ্যাটেনশন লেয়ারে বিশেষায়িত প্রযুক্তিগত শব্দভাণ্ডার সক্রিয় করে এবং সাধারণ ব্যাখ্যার বদলে সমস্যার মূল কারণ অনুসন্ধানে অগ্রাধিকার দেয়'
        },
        {
          en: 'It reboots the cloud server running the language model',
          bn: 'এটি ল্যাঙ্গুয়েজ মডেল পরিচালনাকারী ক্লাউড সার্ভার রিবুট করে'
        },
        {
          en: 'It reduces GPU power consumption to zero watts',
          bn: 'এটি জিপিইউ-এর বিদ্যুৎ খরচ শূন্য ওয়াটে নামিয়ে আনে'
        },
        {
          en: 'It forces the model to only output raw binary numbers',
          bn: 'এটি মডেলকে কেবল বাইনারি সংখ্যায় আউটপুট দিতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The persona biases the next-token probability distribution toward expert terminology.',
        bn: 'পারসোনা পরবর্তী টোকেনের সম্ভাবনাকে বিশেষজ্ঞ শব্দভাণ্ডারের দিকে পরিচালিত করে।'
      },
      explanation: {
        en: 'Semantic priming narrows the output space from generic internet prose down to authoritative industry conventions.',
        bn: 'সিম্যান্টিক প্রাইমিং গড়পড়তা লেখার বদলে শিল্পমানের পেশাদার উপস্থাপনা নিশ্চিত করে।'
      }
    },
    {
      id: 'audience-calibration-ex2',
      kind: 'mcq',
      topic: 'audience-tailoring-strategy',
      question: {
        en: 'When writing for a non-technical executive audience, what adjustment should the prompt enforce?',
        bn: 'অ-প্রযুক্তিগত এক্সিকিউটিভ পাঠকের জন্য লেখার সময় প্রম্পটে কোন সমন্বয়টি প্রয়োগ করা উচিত?'
      },
      options: [
        {
          en: 'Focus on business impact, customer risk, and financial downtime while capping length at 75 words with 0 technical jargon',
          bn: 'ব্যবসায়িক প্রভাব, গ্রাহক ঝুঁকি ও আর্থিক ক্ষতির ওপর জোর দেওয়া এবং কোনো জটিল পরিভাষা ছাড়া সর্বোচ্চ ৭৫ শব্দের মধ্যে সীমাবদ্ধ রাখা'
        },
        {
          en: 'Include full C++ kernel memory dump hex dumps',
          bn: 'সম্পূর্ণ সি++ কার্নেল মেমোরি ডাম্পের হেক্স কোড যুক্ত করা'
        },
        {
          en: 'Output the summary in 500 lines of Shakespearean poetry',
          bn: '৫০০ লাইনের শেক্সপিয়রীয় কবিতার মাধ্যমে সারাংশ প্রকাশ করা'
        },
        {
          en: 'Refuse to answer unless given an enterprise API key',
          bn: 'এন্টারপ্রাইজ এপিআই কী ছাড়া উত্তর দিতে সম্পূর্ণ অস্বীকৃতি জানানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'Executives require bottom-line business implications without low-level implementation trivia.',
        bn: 'এক্সিকিউটিভদের জটিল কোডের খুঁটিনাটি নয়, বরং ব্যবসার লাভ-ক্ষতি জানা প্রয়োজন।'
      },
      explanation: {
        en: 'Audience calibration tailors information density to the decision-making needs of the intended reader.',
        bn: 'অডিয়েন্স ক্যালিব্রেশন নির্দিষ্ট পাঠকের সিদ্ধান্ত গ্রহণের প্রয়োজনীয়তার ওপর ভিত্তি করে তথ্যের পরিমিতি রক্ষা করে।'
      }
    },
    {
      id: 'four-part-blueprint-ex3',
      kind: 'mcq',
      topic: 'persona-blueprint-components',
      question: {
        en: 'Which 4 components form our production system persona blueprint?',
        bn: 'আমাদের প্রোডাকশন সিস্টেম পারসোনা ব্লুপ্রিন্ট কোন ৪টি উপাদানের সমন্বয়ে গঠিত?'
      },
      options: [
        {
          en: 'Identity & Credentials, Target Audience, Style & Verbosity Constraints, and Negative Guardrails',
          bn: 'পরিচয় ও যোগ্যতা, লক্ষ্যভুক্ত দর্শক, লেখার ধরন ও শব্দসীমা এবং নেগেটিভ গার্ডরেল'
        },
        {
          en: 'Username, Password, IP Address, and Port Number',
          bn: 'ব্যবহারকারীর নাম, পাসওয়ার্ড, আইপি ঠিকানা এবং পোর্ট নম্বর'
        },
        {
          en: 'Header, Footer, Sidebar, and Navigation Bar',
          bn: 'হেডার, ফুটার, সাইডবার এবং নেভিগেশন বার'
        },
        {
          en: 'CPU, RAM, Hard Disk, and Power Supply',
          bn: 'সিপিইউ, র‍্যাম, হার্ডডিস্ক এবং পাওয়ার সাপ্লাই'
        }
      ],
      answer: 0,
      hint: {
        en: 'A complete persona defines who the agent is, who it speaks to, how it speaks, and what it must not do.',
        bn: 'একটি পূর্ণাঙ্গ পারসোনা ঠিক করে এজেন্ট কে, কার সাথে কথা বলছে, কীভাবে বলবে এবং কী করবে না।'
      },
      explanation: {
        en: 'Covering identity, audience, style bounds, and guardrails eliminates ambiguity in assistant tone.',
        bn: 'পরিচয়, দর্শক, শৈলীর সীমা এবং গার্ডরেল নির্ধারণ করলে এজেন্টের আচরণ সম্পূর্ণ নিয়ন্ত্রিত থাকে।'
      }
    },
    {
      id: 'verbosity-ceiling-ex4',
      kind: 'mcq',
      topic: 'verbosity-budget-enforcement',
      question: {
        en: 'Why is setting a strict numerical ceiling (such as max 75 words and at most 3 bullets) superior to asking for "a brief summary"?',
        bn: '"একটি সংক্ষিপ্ত সারাংশ"-এর চেয়ে নির্দিষ্ট সংখ্যাভিত্তিক সীমা (যেমন সর্বোচ্চ ৭৫ শব্দ এবং অনধিক ৩টি বুলেট) কেন অনেক বেশি কার্যকর?'
      },
      options: [
        {
          en: '"Brief" is subjective and undefined, whereas numerical limits provide objective boundaries that the model can measure against',
          bn: '"সংক্ষিপ্ত" শব্দটি ব্যক্তিভেদে ভিন্ন ও অস্পষ্ট, যেখানে সুনির্দিষ্ট সংখ্যা একটি স্পষ্ট সীমারেখা প্রদান করে যা মডেল সহজে অনুসরণ করতে পারে'
        },
        {
          en: 'Numerical limits make the prompt run 10 times faster on GPUs',
          bn: 'সংখ্যার সীমা নির্ধারণ জিপিইউ-তে প্রম্পট ১০ গুণ দ্রুত চালায়'
        },
        {
          en: 'Words are converted directly into floating-point numbers',
          bn: 'শব্দগুলো সরাসরি ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তরিত হয়'
        },
        {
          en: 'Language models cannot comprehend the English word "summary"',
          bn: 'ল্যাঙ্গুয়েজ মডেল ইংরেজি "summary" শব্দের অর্থ বুঝতে অক্ষম'
        }
      ],
      answer: 0,
      hint: {
        en: 'Vague adjectives produce unpredictable length, while countable constraints create checkable bounds.',
        bn: 'অস্পষ্ট বিশেষণ অনিশ্চিত দৈর্ঘ্যের জন্ম দেয়, যেখানে গোনা যায় এমন শর্ত স্পষ্ট সীমা তৈরি করে।'
      },
      explanation: {
        en: 'Quantifiable constraints eliminate subjective model interpretation, enforcing disciplined concise responses.',
        bn: 'পরিমাপযোগ্য শর্ত মডেলের মনগড়া অনুমান বন্ধ করে পরিমিত ও সুনির্দিষ্ট উত্তর নিশ্চিত করে।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Personas and Stylistic Calibration Quiz',
      bn: 'পারসোনা এবং স্টাইলিশ ক্যালিব্রেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-system-prompt-persistence',
        kind: 'mcq',
        topic: 'system-prompt-chat-persistence',
        question: {
          en: 'How does the System Prompt maintain consistency across multi-turn conversations?',
          bn: 'বহুধাপের কথোপকথন জুড়ে সিস্টেম প্রম্পট কীভাবে আচরণের ধারাবাহিকতা বজায় রাখে?'
        },
        options: [
          {
            en: 'It is prepended to the context window on every turn, continuously anchoring the model role and behavioral constraints',
            bn: 'প্রতিটি কথোপকথনের শুরুতে এটি কনটেক্সট উইন্ডোর শীর্ষে যুক্ত থাকে, ফলে মডেল সর্বদা তার ভূমিকা ও নিয়মের মধ্যে থাকে'
          },
          {
            en: 'It permanently flashes the system persona into local hardware RAM',
            bn: 'এটি সিস্টেম পারসোনাকে কম্পিউটারের র‍্যামে স্থায়ীভাবে সংরক্ষণ করে দেয়'
          },
          {
            en: 'It prevents the user from typing more than 10 words',
            bn: 'এটি ব্যবহারকারীকে ১০টির বেশি শব্দ টাইপ করতে বাধা দেয়'
          },
          {
            en: 'It automatically deletes conversation logs after each turn',
            bn: 'এটি প্রতি ধাপের পর কথোপকথনের লগ স্বয়ংক্রিয়ভাবে মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each API call transmits the entire message history, led by the system message.',
          bn: 'প্রতিটি এপিআই কলে সিস্টেম মেসেজকে সামনে রেখে পুরো কথোপকথনের ইতিহাস পুনরায় পাঠানো হয়।'
        },
        explanation: {
          en: 'The system message serves as the persistent root instruction evaluated on every turn of the chat session.',
          bn: 'সিস্টেম মেসেজ কথোপকথনের প্রতিটি ধাপে মূল চালিকাশক্তি হিসেবে কাজ করে ধারাবাহিকতা নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-syndication-mitigation',
        kind: 'mcq',
        topic: 'anti-syndication-repetitive-filler',
        question: {
          en: 'How can prompt engineers prevent conversational boilerplate like "Sure, I would be happy to help with that!"?',
          bn: 'প্রম্পট ইঞ্জিনিয়াররা কীভাবে "অবশ্যই, আমি আপনাকে এ বিষয়ে সাহায্য করতে পেরে আনন্দিত!"-এর মতো অপ্রয়োজনীয় চ্যাট কথা বলা বন্ধ করতে পারেন?'
        },
        options: [
          {
            en: 'By adding an explicit negative guardrail: "Provide direct answers only. Omit conversational preambles and pleasantries entirely."',
            bn: 'স্পষ্ট নেগেটিভ গার্ডরেল যোগ করে: "সরাসরি উত্তর দাও। কোনো আনুষ্ঠানিক সূচনা বা অতিরিক্ত কুশল বিনিময় সম্পূর্ণ পরিহার করো।"'
          },
          {
            en: 'By lowering screen brightness to 20 percent',
            bn: 'কম্পিউটারের স্ক্রিনের উজ্জ্বলতা ২০ শতাংশ কমিয়ে দিয়ে'
          },
          {
            en: 'By unplugging internet router cables',
            bn: 'ইন্টারনেট রাউটারের তার খুলে ফেলে'
          },
          {
            en: 'By typing the entire prompt in capital letters',
            bn: 'পুরো প্রম্পটটি বড় হাতের অক্ষরে টাইপ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Direct negative constraints on conversational filler save tokens and eliminate latency.',
          bn: 'অপ্রয়োজনীয় কথার ওপর সরাসরি নিষেধাজ্ঞা টোকেন সাশ্রয় করে এবং সময় বাঁচায়।'
        },
        explanation: {
          en: 'Explicit rules prohibiting preambles reliably force the model to begin generating core information on the first token.',
          bn: 'ভূমিকা নিষিদ্ধ করার স্পষ্ট নিয়ম প্রথম টোকেন থেকেই মূল তথ্য পরিবেশনে মডেলকে বাধ্য করে।'
        }
      },
      {
        id: 'quiz-role-overfitting',
        kind: 'mcq',
        topic: 'role-overfitting-hallucination-risk',
        question: {
          en: 'What subtle defect can arise if a persona instruction is excessively creative (e.g. "You are an omniscient pirate captain") in a production context?',
          bn: 'প্রোডাকশন পরিবেশে কোনো পারসোনা যদি অতিরিক্ত কাল্পনিক হয় (যেমন "তুমি সর্বজ্ঞ জলদস্যু ক্যাপ্টেন"), তবে কোন সূক্ষ্ম সমস্যা দেখা দিতে পারে?'
        },
        options: [
          {
            en: 'The model can prioritize theatrical roleplay over factual accuracy, adopting exaggerated pirate slang and hallucinating details',
            bn: 'মডেলটি তথ্যের নির্ভুলতার চেয়ে অভিনয়ে বেশি মনোযোগ দিতে পারে, অতিরঞ্জিত ভাষা ব্যবহার করতে পারে এবং মিথ্যা তথ্য উদ্ভাবন করতে পারে'
          },
          {
            en: 'The database server immediately disconnects',
            bn: 'ডেটাবেস সার্ভার সাথে সাথে সংযোগ বিচ্ছিন্ন করে ফেলে'
          },
          {
            en: 'The prompt text permanently deletes user credentials',
            bn: 'প্রম্পটের টেক্সট ব্যবহারকারীর পরিচয় স্থায়ীভাবে মুছে ফেলে'
          },
          {
            en: 'Token processing speed drops by 1000 times',
            bn: 'টোকেন প্রসেসিংয়ের গতি ১০০০ গুণ কমে যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Overly dramatic personas encourage narrative fiction at the expense of technical rigor.',
          bn: 'অতিরিক্ত নাটুকে পারসোনা পেশাদার সত্যতার চেয়ে কাল্পনিক গল্প তৈরিতে উৎসাহ জোগায়।'
        },
        explanation: {
          en: 'Personas must be grounded and balanced; excessive theatricality leads to hallucinations and degraded analytical performance.',
          bn: 'পারসোনা হতে হবে বাস্তবসম্মত ও সংযত; অতিরিক্ত নাটকীয়তা ভুল ও ভিত্তিহীন উত্তরের ঝুঁকি বাড়ায়।'
        }
      },
      {
        id: 'quiz-verbosity-tradeoffs',
        kind: 'mcq',
        topic: 'concise-vs-exhaustive-calibration',
        question: {
          en: 'When is an exhaustive, high-verbosity persona preferred over a concise 75-word brief?',
          bn: 'কখন একটি সংক্ষিপ্ত ৭৫ শব্দের বদলে বিস্তারিত ও গভীর ব্যাখ্যামূলক পারসোনা অধিক গ্রহণযোগ্য?'
        },
        options: [
          {
            en: 'In complex legal contract audits, medical diagnostics, or comprehensive security vulnerability disclosures where completeness is paramount',
            bn: 'জটিল আইনি চুক্তি নিরীক্ষা, চিকিৎসাগত বিশ্লেষণ বা নিরাপত্তা ত্রুটি মূল্যায়নে যেখানে পূর্ণাঙ্গতা সবচেয়ে গুরুত্বপূর্ণ'
          },
          {
            en: 'On SMS mobile notifications with strict 160 character limits',
            bn: 'এসএমএস মোবাইল নোটিফিকেশনে যার সর্বোচ্চ সীমা ১৬০ অক্ষর'
          },
          {
            en: 'In real-time low-latency voice assistant interfaces',
            bn: 'রিয়েল-টাইম কম-লেটেন্সির ভয়েস অ্যাসিস্ট্যান্ট ইন্টারফেসে'
          },
          {
            en: 'When attempting to reduce API token expenditure',
            bn: 'যখন এপিআই টোকেন খরচ কমানোর চেষ্টা করা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'High-stakes safety and regulatory contexts require exhaustive thoroughness over brevity.',
          bn: 'ঝুঁকিপূর্ণ নিরাপত্তা ও আইনি যাচাইয়ে সংক্ষিপ্ততার চেয়ে প্রতিটি বিষয়ের গভীর বিশ্লেষণ প্রয়োজন।'
        },
        explanation: {
          en: 'High-risk domains demand exhaustive edge-case coverage where omitting a single detail introduces operational risk.',
          bn: 'সংবেদনশীল ডোমেনে কোনো একটি তথ্য বাদ পড়া মারাত্মক ঝুঁকির কারণ হতে পারে, তাই সেখানে পূর্ণাঙ্গ বিশ্লেষণ অপরিহার্য।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'adversarial-robust',
    title: {
      en: 'Adversarial Prompting, Injections & Security Defense',
      bn: 'অ্যাডভারসেরিয়াল প্রম্পটিং, ইনজেকশন এবং নিরাপত্তা প্রতিরক্ষা'
    }
  }
};
