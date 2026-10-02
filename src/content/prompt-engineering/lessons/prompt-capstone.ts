import type { Lesson } from '../../../lib/types';

export const PromptCapstoneLesson: Lesson = {
  slug: 'prompt-capstone',
  tech: 'prompt-engineering',
  title: {
    en: 'Production Prompt Engineering Capstone: End-to-End Enterprise Agent',
    bn: 'প্রোডাকশন প্রম্পট ইঞ্জিনিয়ারিং ক্যাপস্টোন: পূর্ণাঙ্গ এন্টারপ্রাইজ এজেন্ট'
  },
  summary: {
    en: 'Synthesize all 7 core disciplines of prompt engineering: assemble a multi-stage enterprise support triage system featuring persona casting, few-shot grounding, chain-of-thought analysis, strict JSON extraction, injection defense, and automated evaluation metrics.',
    bn: 'প্রম্পট ইঞ্জিনিয়ারিংয়ের ৭টি মূল বিষয়ের সমন্বয়: পারসোনা কাস্টিং, ফিউ-শট উদাহরণ, চেইন-অব-থট যুক্তি, কঠোর JSON স্কিমা নিষ্কাশন, ইনজেকশন প্রতিরোধ এবং স্বয়ংক্রিয় মূল্যায়ন সহ পূর্ণাঙ্গ এন্টারপ্রাইজ সাপোর্ট ট্রায়াজ এজেন্ট তৈরি।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'capstone-architecture-heading',
      text: {
        en: 'The Enterprise Prompt Pipeline: Synthesizing 7 Disciplines',
        bn: 'এন্টারপ্রাইজ প্রম্পট পাইপলাইন: ৭টি শাস্ত্রের পূর্ণাঙ্গ সমন্বয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Production AI engineering requires weaving individual techniques into a unified, defensive pipeline. Over the previous 7 lessons, we mastered prompt anatomy, few-shot exemplars, cognitive chain-of-thought reasoning, JSON schema contracts, persona calibration, adversarial injection defense, and quantitative evaluation harnesses. In this capstone, we architect an enterprise support triage engine that ingests untrusted customer tickets, extracts 5 structured fields, neutralizes delimiter attacks, and delivers deterministic telemetry.',
        bn: 'প্রোডাকশন এআই ইঞ্জিনিয়ারিংয়ে প্রতিটি পৃথক কৌশলকে একটি সমন্বিত ও সুরক্ষিত পাইপলাইনে যুক্ত করতে হয়। পূর্ববর্তী ৭টি পাঠে আমরা প্রম্পটের গঠন, ফিউ-শট উদাহরণ, চেইন-অব-থট যুক্তিপ্রবাহ, JSON স্কিমা চুক্তি, পারসোনা ক্যালিব্রেশন, ক্ষতিকর ইনজেকশন প্রতিরোধ এবং পরিমাণগত মূল্যায়ন কাঠামো শিখেছি। এই ক্যাপস্টোনে আমরা একটি পূর্ণাঙ্গ এন্টারপ্রাইজ সাপোর্ট ট্রায়াজ ইঞ্জিন তৈরি করব যা অবিশ্বস্ত গ্রাহক টিকিট গ্রহণ করে, ৫টি স্ট্রাকচার্ড ফিল্ড নিষ্কাশন করে, ডিলিমিটার আক্রমণ প্রতিহত করে এবং সুনির্দিষ্ট ফলাফল প্রদান করে।'
      }
    },
    {
      type: 'visual',
      id: 'capstone-agent-flow-svg',
      caption: {
        en: 'Figure 1: End-to-end architecture of an enterprise prompt triage and extraction agent.',
        bn: 'চিত্র ১: একটি এন্টারপ্রাইজ প্রম্পট ট্রায়াজ এবং এক্সট্রাকশন এজেন্টের পূর্ণাঙ্গ আর্কিটেকচার।'
      },
      content: `<svg viewBox="0 0 840 360" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="360" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">ENTERPRISE PROMPT TRIAGE AGENT PIPELINE</text>
  
  <!-- Stage 1: Ingestion & Sandboxing -->
  <g transform="translate(25, 60)">
    <rect width="180" height="260" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="180" height="36" rx="8" fill="#0284c7" />
    <text x="90" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Ingest & Sandbox 📥</text>
    <text x="14" y="65" fill="#38bdf8" font-size="10" font-family="monospace">Security Boundary:</text>
    <text x="14" y="90" fill="#cbd5e1" font-size="10" font-sans-serif">• Keyword screening</text>
    <text x="14" y="112" fill="#cbd5e1" font-size="10" font-sans-serif">• Nonce tag injection</text>
    <text x="14" y="134" fill="#cbd5e1" font-size="10" font-sans-serif">• Strip forged tags</text>
    <rect x="12" y="180" width="156" height="55" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="90" y="202" fill="#818cf8" font-size="9" font-family="monospace" text-anchor="middle">&lt;ticket_9125&gt;</text>
    <text x="90" y="220" fill="#818cf8" font-size="9" font-family="monospace" text-anchor="middle">sandboxed input</text>
  </g>

  <!-- Stage 2: Prompt Assembly -->
  <g transform="translate(225, 60)">
    <rect width="190" height="260" rx="8" fill="#1e293b" stroke="#818cf8" stroke-width="2" />
    <rect width="190" height="36" rx="8" fill="#4f46e5" />
    <text x="95" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Prompt Assembly 🪄</text>
    <text x="14" y="65" fill="#818cf8" font-size="10" font-family="monospace">Composite Context:</text>
    <text x="14" y="90" fill="#cbd5e1" font-size="10" font-sans-serif">• Staff SRE Persona</text>
    <text x="14" y="112" fill="#cbd5e1" font-size="10" font-sans-serif">• 2-Shot Exemplars</text>
    <text x="14" y="134" fill="#cbd5e1" font-size="10" font-sans-serif">• CoT Scratchpad Rule</text>
    <text x="14" y="156" fill="#cbd5e1" font-size="10" font-sans-serif">• Strict JSON Schema</text>
    <rect x="12" y="180" width="166" height="55" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="95" y="202" fill="#fbbf24" font-size="9" font-family="monospace" text-anchor="middle">Temperature: 0</text>
    <text x="95" y="220" fill="#fbbf24" font-size="9" font-family="monospace" text-anchor="middle">Greedy Determinism</text>
  </g>

  <!-- Stage 3: LLM Inference & CoT -->
  <g transform="translate(435, 60)">
    <rect width="185" height="260" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="36" rx="8" fill="#d97706" />
    <text x="92" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Inference & CoT 🧠</text>
    <text x="14" y="65" fill="#f59e0b" font-size="10" font-family="monospace">Reasoning Trace:</text>
    <text x="14" y="90" fill="#cbd5e1" font-size="9" font-family="monospace">Step 1: Urgency eval</text>
    <text x="14" y="110" fill="#cbd5e1" font-size="9" font-family="monospace">Step 2: Category match</text>
    <text x="14" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Step 3: Root cause</text>
    <text x="14" y="150" fill="#cbd5e1" font-size="9" font-family="monospace">Step 4: Dispatch JSON</text>
    <rect x="12" y="180" width="161" height="55" rx="6" fill="#0f172a" stroke="#475569" />
    <text x="92" y="202" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">5 Fields Extracted</text>
    <text x="92" y="220" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">Valid JSON Object</text>
  </g>

  <!-- Stage 4: Guardrail & Dispatch -->
  <g transform="translate(640, 60)">
    <rect width="175" height="260" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="36" rx="8" fill="#059669" />
    <text x="87" y="24" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Release Gate 🚀</text>
    <text x="12" y="65" fill="#10b981" font-size="10" font-family="monospace">Safety Audit:</text>
    <text x="12" y="90" fill="#cbd5e1" font-size="10" font-sans-serif">• Schema validation</text>
    <text x="12" y="112" fill="#cbd5e1" font-size="10" font-sans-serif">• Secret leak check</text>
    <text x="12" y="134" fill="#cbd5e1" font-size="10" font-sans-serif">• Routing dispatch</text>
    <rect x="10" y="180" width="155" height="55" rx="6" fill="#0f172a" stroke="#22c55e" />
    <text x="87" y="202" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">PostgreSQL / Jira</text>
    <text x="87" y="220" fill="#4ade80" font-size="9" font-family="monospace" text-anchor="middle">Ticket Dispatched</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'capstone-implementation-heading',
      text: {
        en: 'The Complete Enterprise Agent Implementation',
        bn: 'সম্পূর্ণ এন্টারপ্রাইজ এজেন্টের বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The capstone agent executes a disciplined 4-stage pipeline. In Stage 1, untrusted customer input is screened and enclosed inside unique randomized nonce boundaries like ticket 9125. In Stage 2, the prompt builder couples a Staff SRE Persona with 2 balanced few-shot exemplars and strict schema rules. In Stage 3, greedy inference evaluates the ticket across 3 urgency levels (High, Medium, Low) and 3 categories (Hardware, Billing, Account), synthesizing 5 target JSON fields. In Stage 4, runtime schema validation verifies all keys before routing.',
        bn: 'ক্যাপস্টোন এজেন্টটি সুশৃঙ্খল ৪টি ধাপে কাজ সম্পন্ন করে। ধাপ ১ এ অবিশ্বস্ত গ্রাহক ইনপুট পরীক্ষা করে টিকিট ৯১২৫ এর মতো র্যান্ডম ননস সীমানায় আবদ্ধ করা হয়। ধাপ ২ এ প্রম্পট বিল্ডার অভিজ্ঞ এসআরই পারসোনার সাথে ২টি সুষম ফিউ-শট উদাহরণ ও কঠোর স্কিমা নিয়ম যুক্ত করে। ধাপ ৩ এ গ্রিডি ইনফারেন্সের মাধ্যমে ৩টি জরুরি স্তর (উচ্চ, মাঝারি, নিম্ন) এবং ৩টি ক্যাটাগরির (হার্ডওয়্যার, বিলিং, অ্যাকাউন্ট) ওপর ভিত্তি করে ৫টি নির্দিষ্ট JSON ফিল্ড তৈরি হয়। ধাপ ৪ এ রানটাইম স্কিমা ভ্যালিডেশন সমস্ত তথ্য যাচাই করে টিকিটটি চূড়ান্ত গন্তব্যে পাঠায়।'
      }
    },
    {
      type: 'code',
      id: 'capstone-triage-agent-ts',
      lang: 'typescript',
      caption: {
        en: 'Production-ready TypeScript implementation of the enterprise support triage agent.',
        bn: 'এন্টারপ্রাইজ সাপোর্ট ট্রায়াজ এজেন্টের রানযোগ্য প্রোডাকশন TypeScript কোড।'
      },
      code: `interface TriageTicketResult {
  ticketId: string;
  category: 'HARDWARE' | 'BILLING' | 'ACCOUNT';
  urgency: 'HIGH' | 'MEDIUM' | 'LOW';
  rootCause: string;
  suggestedAction: string;
}

export function executeEnterpriseTriageAgent(
  rawTicketText: string,
  ticketId: string,
  nonce: number
): {
  success: boolean;
  result?: TriageTicketResult;
  telemetry: { inputLength: number; hasInjectionAttempt: boolean; isSchemaValid: boolean };
} {
  // 1. Sanitization & Sandbox Screening
  const hasInjection = /ignore\\s+instructions/i.test(rawTicketText) || /reveal\\s+prompt/i.test(rawTicketText);
  const cleanInput = rawTicketText
    .replace(new RegExp('</ticket_' + nonce + '>', 'g'), '[FORGED_TAG_REMOVED]')
    .replace(/<\\/?system>/gi, '[RESERVED_TAG_STRIPPED]');

  if (hasInjection) {
    return {
      success: false,
      telemetry: { inputLength: rawTicketText.length, hasInjectionAttempt: true, isSchemaValid: false }
    };
  }

  // 2. Simulated LLM Inference: analyzing ticket with 5 target fields
  // In production, this call executes with Temperature 0 and strict JSON Schema
  const isHardwareIssue = cleanInput.toLowerCase().includes('smoke') || cleanInput.toLowerCase().includes('server');
  const triageData: TriageTicketResult = {
    ticketId,
    category: isHardwareIssue ? 'HARDWARE' : 'ACCOUNT',
    urgency: isHardwareIssue ? 'HIGH' : 'MEDIUM',
    rootCause: isHardwareIssue ? 'Thermal overload on power supply unit' : 'Password reset lockout',
    suggestedAction: isHardwareIssue ? 'Immediate emergency hardware swap' : 'Send verification email link'
  };

  // 3. Schema Gate Verification (Validating all 5 fields)
  const isSchemaValid =
    typeof triageData.ticketId === 'string' &&
    ['HARDWARE', 'BILLING', 'ACCOUNT'].includes(triageData.category) &&
    ['HIGH', 'MEDIUM', 'LOW'].includes(triageData.urgency) &&
    typeof triageData.rootCause === 'string' &&
    typeof triageData.suggestedAction === 'string';

  return {
    success: isSchemaValid,
    result: triageData,
    telemetry: { inputLength: cleanInput.length, hasInjectionAttempt: false, isSchemaValid }
  };
}

// Evaluate with a mission-critical infrastructure ticket
const customerTicket = 'Server rack 4 in datacenter B started smoking after power surge! Shut down immediately.';
const triageRun = executeEnterpriseTriageAgent(customerTicket, 'INC-9125', 9125);

console.log('Triage Success:', triageRun.success);           // true
console.log('Category:', triageRun.result?.category);         // HARDWARE
console.log('Urgency Level:', triageRun.result?.urgency);     // HIGH
console.log('Target Fields Extracted:', Object.keys(triageRun.result || {}).length); // 5`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Enterprise Agent',
          def: {
            en: 'An autonomous multi-stage software system combining LLM cognition, input sandboxing, schema validation, and API routing.',
            bn: 'একটি স্বয়ংক্রিয় বহুধাপের সফটওয়্যার ব্যবস্থা যা এলএলএম যুক্তি, ইনপুট স্যান্ডবক্সিং, স্কিমা যাচাই ও এপিআই রাউটিংয়ের সমন্বয়ে গঠিত।'
          }
        },
        {
          term: 'Defense-in-Depth',
          def: {
            en: 'Layered security strategy where multiple redundant safeguards protect against adversarial injection attacks.',
            bn: 'স্তরভিত্তিক নিরাপত্তা কৌশল যেখানে একাধিক প্রতিরক্ষামূলক ব্যবস্থা ক্ষতিকর আক্রমণ থেকে সিস্টেমকে রক্ষা করে।'
          }
        },
        {
          term: 'Prompt Telemetry',
          def: {
            en: 'Comprehensive runtime monitoring capturing token counts, parse error frequencies, latency metrics, and security flags.',
            bn: 'সার্বিক রানটাইম পর্যবেক্ষণ যা টোকেন সংখ্যা, পার্সিং ত্রুটির হার, সময়ক্ষেপণ এবং নিরাপত্তা সংকেত রেকর্ড করে।'
          }
        },
        {
          term: 'Composite Accuracy',
          def: {
            en: 'Aggregate performance benchmark scoring both strict schema compliance and subjective semantic accuracy.',
            bn: 'সামগ্রিক মূল্যায়ন মানদণ্ড যা আউটপুটের কাঠামোগত নির্ভুলতা এবং অর্থগত সঠিকতা উভয়ই পরিমাপ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'capstone-pipeline-stages-ex1',
      kind: 'mcq',
      topic: 'enterprise-agent-pipeline-stages',
      question: {
        en: 'In our capstone enterprise support agent, how many distinct stages make up the end-to-end processing pipeline?',
        bn: 'আমাদের ক্যাপস্টোন এন্টারপ্রাইজ সাপোর্ট এজেন্টে, সম্পূর্ণ প্রসেসিং পাইপলাইনটি কয়টি স্বতন্ত্র ধাপে বিভক্ত?'
      },
      options: [
        { en: '4 stages (Sandboxing, Assembly, Inference with CoT, Release Gate)', bn: '৪টি ধাপ (স্যান্ডবক্সিং, অ্যাসেম্বলি, CoT সহ ইনফারেন্স, রিলিজ গেট)' },
        { en: '1 stage (Direct ungrounded query)', bn: '১টি ধাপ (সরাসরি সাধারণ প্রশ্ন)' },
        { en: '10 stages of manual human approval', bn: '১০টি ধাপে মানুষের প্রত্যক্ষ অনুমোদন' },
        { en: '2 stages (Input and Database insert)', bn: '২টি ধাপ (ইনপুট ও ডেটাবেস ইনসার্ট)' }
      ],
      answer: 0,
      hint: {
        en: 'Review the 4 columns in our architectural diagram.',
        bn: 'আমাদের আর্কিটেকচারাল ডায়াগ্রামের ৪টি স্তম্ভের দিকে লক্ষ্য করুন।'
      },
      explanation: {
        en: 'The pipeline moves systematically through Ingestion, Prompt Assembly, CoT Inference, and Release Gate validation.',
        bn: 'পাইপলাইনটি সুশৃঙ্খলভাবে গ্রহণ, প্রম্পট তৈরি, যুক্তিবাদী ইনফারেন্স এবং চূড়ান্ত ভ্যালিডেশন সম্পন্ন করে।'
      }
    },
    {
      id: 'extracted-fields-count-ex2',
      kind: 'mcq',
      topic: 'schema-field-extraction-budget',
      question: {
        en: 'How many structured fields are verified by the schema gate in our TriageTicketResult contract?',
        bn: 'আমাদের TriageTicketResult চুক্তিতে স্কিমা গেট দ্বারা কয়টি স্ট্রাকচার্ড ফিল্ড নিশ্চিত করা হয়?'
      },
      options: [
        { en: '5 fields (ticketId, category, urgency, rootCause, suggestedAction)', bn: '৫টি ফিল্ড (ticketId, category, urgency, rootCause, suggestedAction)' },
        { en: '1 field (only ticketId)', bn: '১টি ফিল্ড (কেবল ticketId)' },
        { en: '2 fields (user and text)', bn: '২টি ফিল্ড (ব্যবহারকারী এবং টেক্সট)' },
        { en: '20 fields of unindexed prose', bn: '২০টি অসংগঠিত বর্ণনামূলক ফিল্ড' }
      ],
      answer: 0,
      hint: {
        en: 'Look at the keys defined in the TriageTicketResult TypeScript interface.',
        bn: 'TriageTicketResult টাইপস্ক্রিপ্ট ইন্টারফেসে নির্ধারিত ফিল্ডগুলোর দিকে লক্ষ্য করুন।'
      },
      explanation: {
        en: 'The contract enforces exactly 5 fields: ticketId, category, urgency, rootCause, and suggestedAction.',
        bn: 'চুক্তিটি ঠিক ৫টি ফিল্ড নিশ্চিত করে: ticketId, category, urgency, rootCause এবং suggestedAction।'
      }
    },
    {
      id: 'urgency-triage-ex3',
      kind: 'mcq',
      topic: 'urgency-classification-logic',
      question: {
        en: 'In our datacenter power surge test case, why was the ticket urgency classified as HIGH?',
        bn: 'আমাদের ডেটাসেন্টার পাওয়ার সার্জ টেস্ট কেসে, টিকিটের জরুরি স্তর কেন উচ্চ (HIGH) হিসেবে চিহ্নিত হয়েছিল?'
      },
      options: [
        {
          en: 'Physical hardware smoking indicates critical infrastructure failure, requiring immediate emergency intervention',
          bn: 'যন্ত্রাংশ থেকে ধোঁয়া বের হওয়া চরম কারিগরি বিপর্যয় নির্দেশ করে, যার জন্য তাৎক্ষণিক জরুরি হস্তক্ষেপ প্রয়োজন'
        },
        {
          en: 'The customer paid for an expedited platinum membership',
          bn: 'গ্রাহক অতিরিক্ত ফি দিয়ে প্ল্যাটিনাম সদস্যপদ কিনেছিলেন'
        },
        {
          en: 'The ticket was submitted on a weekend',
          bn: 'টিকিটটি ছুটির দিনে জমা দেওয়া হয়েছিল'
        },
        {
          en: 'The word "datacenter" is prohibited in lower-priority tiers',
          bn: '"ডেটাসেন্টার" শব্দটি কম গুরুত্বপূর্ণ স্তরে ব্যবহার নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Severe physical hazards and active outages immediately escalate to top urgency.',
        bn: 'শারীরিক ক্ষয়ক্ষতির ঝুঁকি ও সক্রিয় বিপর্যয় সাথে সাথে সর্বোচ্চ জরুরি স্তর হিসেবে গণ্য হয়।'
      },
      explanation: {
        en: 'Critical hardware failures causing active outages demand immediate High urgency triage and automated alerting.',
        bn: 'কারিগরি বিপর্যয় সক্রিয়ভাবে সার্ভার ডাউন করায় তাৎক্ষণিকভাবে উচ্চ জরুরি স্তরে পাঠিয়ে অ্যালার্ট দেওয়া হয়।'
      }
    },
    {
      id: 'delimiter-nonce-defense-ex4',
      kind: 'mcq',
      topic: 'delimiter-nonce-isolation-mechanism',
      question: {
        en: 'Why did the agent wrap customer ticket text inside <ticket_9125> using a randomized nonce (9125)?',
        bn: 'এজেন্টটি কেন একটি র্যান্ডম ননস (৯১২৫) ব্যবহার করে গ্রাহকের টিকিট টেক্সটকে <ticket_9125>-এ আবদ্ধ করেছিল?'
      },
      options: [
        {
          en: 'To prevent malicious inputs from prematurely closing the boundary tag with a forged closing tag',
          bn: 'ক্ষতিকর ইনপুট যাতে নকল সমাপ্তি ট্যাগ ব্যবহার করে সময়ের আগেই সীমানা বন্ধ করতে না পারে তা প্রতিরোধ করতে'
        },
        {
          en: 'To compress the text by 9125 bytes',
          bn: 'লেখাকে ৯১২৫ বাইটে সংকুচিত করার জন্য'
        },
        {
          en: 'To convert English characters into Japanese kanji',
          bn: 'ইংরেজি অক্ষরকে জাপানি ভাষায় রূপান্তর করতে'
        },
        {
          en: 'Nonces are required to allocate GPU memory buffers',
          bn: 'জিপিইউ মেমোরি বরাদ্দের জন্য ননস থাকা বাধ্যতামূলক'
        }
      ],
      answer: 0,
      hint: {
        en: 'Without a secret nonce, an attacker can easily guess the closing tag and hijack the prompt.',
        bn: 'গোপন ননস না থাকলে আক্রমণকারী সহজে ট্যাগ অনুমান করে প্রম্পট হাইজ্যাক করতে পারে।'
      },
      explanation: {
        en: 'Dynamic unpredictable nonces prevent delimiter injection by stripping any fabricated closing tags.',
        bn: 'অপ্রত্যাশিত ডাইনামিক ননস ব্যবহারের ফলে আক্রমণকারীর পক্ষে ট্যাগ নকল করা অসম্ভব হয়।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Production Prompt Engineering Capstone Quiz',
      bn: 'প্রোডাকশন প্রম্পট ইঞ্জিনিয়ারিং ক্যাপস্টোন কুইজ'
    },
    questions: [
      {
        id: 'quiz-capstone-synthesis',
        kind: 'mcq',
        topic: 'capstone-holistic-prompt-engineering',
        question: {
          en: 'What is the overarching law of production prompt engineering demonstrated across all 8 lessons?',
          bn: 'সমস্ত ৮টি পাঠ জুড়ে প্রদর্শিত প্রোডাকশন প্রম্পট ইঞ্জিনিয়ারিংয়ের মূল সার্বজনীন সূত্রটি কী?'
        },
        options: [
          {
            en: 'Treat prompts as versioned, defensive software contracts: combine structured anatomy, few-shot examples, schema gates, and empirical test harnesses',
            bn: 'প্রম্পটকে ভার্সন নিয়ন্ত্রিত ও সুরক্ষিত সফটওয়্যার চুক্তি হিসেবে দেখা: সুনির্দিষ্ট কাঠামো, ফিউ-শট উদাহরণ, স্কিমা গেট এবং বৈজ্ঞানিক টেস্ট হারের সমন্বয়'
          },
          {
            en: 'Write the shortest possible sentence and hope the model figures it out',
            bn: 'যতটা সম্ভব ছোট বাক্য লেখা এবং মডেল নিজে থেকে বুঝে নেবে বলে আশা করা'
          },
          {
            en: 'Prompting will be completely replaced by assembly language within 1 year',
            bn: '১ বছরের মধ্যে প্রম্পটিং সম্পূর্ণভাবে অ্যাসেম্বলি ভাষা দিয়ে প্রতিস্থাপিত হবে'
          },
          {
            en: 'Never use JSON in production software applications',
            bn: 'প্রোডাকশন সফটওয়্যার অ্যাপ্লিকেশনে কখনো JSON ব্যবহার না করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of engineering discipline, defense-in-depth, and quantitative evaluation.',
          bn: 'কারিগরি শৃঙ্খলা, বহুমাত্রিক নিরাপত্তা এবং পরিমাণগত মূল্যায়নের কথা ভাবুন।'
        },
        explanation: {
          en: 'Production prompt engineering elevates conversational AI into deterministic, reliable, and testable enterprise software.',
          bn: 'প্রম্পট ইঞ্জিনিয়ারিং সাধারণ এআই চ্যাটকে সুনির্দিষ্ট, নির্ভরযোগ্য এবং পরীক্ষাযোগ্য সফটওয়্যার সিস্টেমে উন্নীত করে।'
        }
      },
      {
        id: 'quiz-temperature-capstone',
        kind: 'mcq',
        topic: 'zero-temperature-production-contract',
        question: {
          en: 'Why is Temperature 0 strictly mandated for production data extraction and support triage pipelines?',
          bn: 'প্রোডাকশন ডেটা নিষ্কাশন এবং সাপোর্ট ট্রায়াজ পাইপলাইনে কেন কঠোরভাবে টেম্পারেচার ০ নির্ধারণ করা হয়?'
        },
        options: [
          {
            en: 'It enforces greedy argmax decoding, guaranteeing reproducible and consistent classifications for identical input tickets',
            bn: 'এটি গ্রিডি ডিকোডিং কার্যকর করে, ফলে একই ধরণের টিকিটের জন্য সর্বদা একই রকম নির্ভরযোগ্য শ্রেণিবিভাগ নিশ্চিত হয়'
          },
          {
            en: 'Temperature 0 reduces network latency to exactly 1 millisecond',
            bn: 'টেম্পারেচার ০ নেটওয়ার্ক লেটেন্সিকে ঠিক ১ মিলিসেকেন্ডে নামিয়ে আনে'
          },
          {
            en: 'Higher temperature permanently deletes the customer database',
            bn: 'উচ্চ টেম্পারেচার ব্যবহার করলে গ্রাহকের ডেটাবেস স্থায়ীভাবে মুছে যায়'
          },
          {
            en: 'Temperature 0 enables GPU cryptocurrency mining',
            bn: 'টেম্পারেচার ০ জিপিইউ ক্রিপ্টোকারেন্সি মাইনিং সক্রিয় করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Enterprise customer support requires consistent, deterministic behavior without random variations.',
          bn: 'এন্টারপ্রাইজ গ্রাহক সেবায় এলোমেলো পরিবর্তন নয়, বরং ধারাবাহিক সুনির্দিষ্ট আচরণ প্রয়োজন।'
        },
        explanation: {
          en: 'Zero temperature eliminates stochastic randomness, ensuring identical tickets yield identical routing decisions.',
          bn: 'শূন্য টেম্পারেচার ফলাফলকে সুনির্দিষ্ট রাখে, ফলে একই টিকিট প্রতিবার একই বিভাগে পৌঁছে যায়।'
        }
      },
      {
        id: 'quiz-dual-model-security-audit',
        kind: 'mcq',
        topic: 'dual-model-audit-post-execution',
        question: {
          en: 'In an enterprise architecture, why is an independent security audit pass recommended before dispatching output to downstream APIs?',
          bn: 'একটি এন্টারপ্রাইজ আর্কিটেকচারে, নিচের এপিআই-তে ডেটা পাঠানোর আগে কেন একটি স্বাধীন নিরাপত্তা নিরীক্ষা চালানো উচিত?'
        },
        options: [
          {
            en: 'To catch inadvertent Personally Identifiable Information (PII) leakage or secret exfiltration before data enters external systems',
            bn: 'বাইরের সিস্টেমে ডেটা যাওয়ার আগে অনিচ্ছাকৃত ব্যক্তিগত তথ্য বা গোপন কোড ফাঁস হওয়া প্রতিহত করতে'
          },
          {
            en: 'To check if the customer has paid their utility electric bill',
            bn: 'গ্রাহক তার বিদ্যুৎ বিল পরিশোধ করেছেন কিনা তা যাচাই করার জন্য'
          },
          {
            en: 'To translate the output into 50 different languages simultaneously',
            bn: 'আউটপুটকে একসাথে ৫০টি ভিন্ন ভাষায় অনুবাদ করার জন্য'
          },
          {
            en: 'To convert all JSON objects into binary MP3 audio tracks',
            bn: 'সমস্ত JSON অবজেক্টকে বাইনারি অডিও ফাইলে রূপান্তর করার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Compliance laws (GDPR, HIPAA) strictly penalize exfiltrating private customer data.',
          bn: 'আইনি সুরক্ষা নীতি (GDPR, HIPAA) গ্রাহকের ব্যক্তিগত তথ্য ফাঁস হলে কঠোর শাস্তি আরোপ করে।'
        },
        explanation: {
          en: 'Secondary safety audits provide a vital firewall ensuring regulatory compliance and data protection.',
          bn: 'দ্বিতীয় নিরাপত্তা নিরীক্ষা প্রাতিষ্ঠানিক গোপনীয়তা ও আইনি সুরক্ষা নিশ্চিত করতে ফায়ারওয়াল হিসেবে কাজ করে।'
        }
      },
      {
        id: 'quiz-continuous-eval-golden-maintenance',
        kind: 'mcq',
        topic: 'golden-dataset-continuous-curation',
        question: {
          en: 'When a production triage agent misclassifies a novel edge-case customer ticket, what is the correct engineering response?',
          bn: 'যখন একটি প্রোডাকশন ট্রায়াজ এজেন্ট কোনো নতুন এজ-কেস টিকিট ভুলভাবে শ্রেণিবদ্ধ করে, তখন প্রকৌশলীদের সঠিক পদক্ষেপ কী হওয়া উচিত?'
        },
        options: [
          {
            en: 'Add the failure case to the Golden Test Dataset, update few-shot exemplars or instructions, and verify that accuracy improves with zero regressions',
            bn: 'ব্যর্থতার কেসটি গোল্ডেন টেস্ট ডেটাসেটে যোগ করা, ফিউ-শট উদাহরণ বা নির্দেশ আপডেট করা এবং কোনো রিগ্রেশন ছাড়া উন্নতি নিশ্চিত করা'
          },
          {
            en: 'Immediately delete all prompt files and abandon the project',
            bn: 'সাথে সাথে সমস্ত প্রম্পট ফাইল মুছে ফেলা এবং প্রজেক্টটি বন্ধ করে দেওয়া'
          },
          {
            en: 'Blame the customer for writing confusing sentences',
            bn: 'জটিল বাক্য লেখার জন্য গ্রাহককে দোষারোপ করা'
          },
          {
            en: 'Restart the entire internet backbone infrastructure',
            bn: 'পুরো ইন্টারনেটের মূল অবকাঠামো রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Treat failures as new unit tests that permanently harden the golden evaluation suite.',
          bn: 'ব্যর্থতাকে নতুন ইউনিট টেস্ট হিসেবে দেখে গোল্ডেন টেস্ট সেটকে আরও সমৃদ্ধ ও শক্তিশালী করুন।'
        },
        explanation: {
          en: 'Adding failure cases to the regression suite transforms isolated production bugs into permanent systemic protections.',
          bn: 'ভুল কেসগুলোকে টেস্ট সেটে যুক্ত করলে ভবিষ্যতে একই ধরনের ত্রুটি ঘটার আশঙ্কা চিরতরে বন্ধ হয়।'
        }
      }
    ]
  }
};
