import type { Lesson } from '../../../lib/types';

export const AbacPoliciesLesson: Lesson = {
  slug: 'abac-policies',
  tech: 'authorization',
  title: {
    en: 'Attribute-Based Access Control (ABAC): Context, Environment & Temporal Rules',
    bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল (ABAC): কনটেক্সট, পরিবেশ এবং সময়ের নিয়ম'
  },
  summary: {
    en: 'Transcend the limitations of static role assignments by implementing Attribute-Based Access Control (NIST SP 800-162). Discover how ABAC evaluates 4 core dimensions: Subject, Resource, Action, and Environmental context. Understand how dynamic boolean policy rules eliminate the role explosion antipattern. Build a policy engine that evaluates departmental matching alongside temporal business hours (09:00 to 17:00), ensuring that unauthorized actions outside allowed windows are strictly blocked.',
    bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল (NIST SP 800-162) প্রয়োগের মাধ্যমে স্ট্যাটিক রোলের সীমাবদ্ধতা কাটিয়ে উঠুন। ABAC কীভাবে ৪ টি প্রধান মাত্রা (সাবজেক্ট, রিসোর্স, অ্যাকশন এবং পরিবেশগত কনটেক্সট) মূল্যায়ন করে তা জানুন। ডায়নামিক বুলিয়ান পলিসি কীভাবে রোল এক্সপ্লোশন সমস্যা দূর করে তা শিখুন। একটি পলিসি ইঞ্জিন তৈরি করুন যা বিভাগীয় মিল এবং অফিস সময়ের ( ০৯:০০ থেকে ১৭:০০ ) শর্তাবলি বিচার করে অনুমোদন দেয় এবং সময়ের বাইরের অননুমোদিত চেষ্টা সরাসরি প্রতিহত করে।',
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'four-dimensions-of-abac',
      text: {
        en: 'The 4 Core Dimensions of Attribute-Based Access Control',
        bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোলের ৪ টি প্রধান মাত্রা'
      },
    },
    {
      type: 'para',
      text: {
        en: 'While standard Role-Based Access Control (RBAC) answers whether a role can perform an action, modern enterprise applications require far more granular, situational decisions. For example, an editor should only publish articles belonging to their own department, only from a trusted corporate network, and only during operating business hours. Forcing these conditions into RBAC leads to role explosion. Attribute-Based Access Control (ABAC) solves this by evaluating dynamic boolean rules across 4 dimensions:',
        bn: 'সাধারণ রোল-ভিত্তিক এক্সেস কন্ট্রোল (RBAC) যখন কেবল একটি রোলের কাজ করার অধিকার আছে কি না তা বিবেচনা করে, তখন আধুনিক এন্টারপ্রাইজ সিস্টেমে আরও সূক্ষ্ম ও পরিস্থিতিভিত্তিক সিদ্ধান্তের প্রয়োজন হয়। যেমন, একজন এডিটর কেবল তার নিজস্ব বিভাগের প্রতিবেদন প্রকাশ করতে পারবেন, কেবল নিরাপদ অফিসের নেটওয়ার্ক থেকে কাজ করতে পারবেন এবং কেবল অফিস চলাকালীন সময়েই তা করতে পারবেন। এই শর্তগুলো RBAC-এ ঢোকাতে গেলে রোলের অস্বাভাবিক বৃদ্ধি ঘটে। অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল (ABAC) ৪ টি মাত্রার ওপর ভিত্তি করে ডায়নামিক বুলিয়ান নিয়ম মূল্যায়নের মাধ্যমে এই সংকটের সমাধান করে:'
      },
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Subject Attributes (Who is requesting?)',
            bn: '১. সাবজেক্ট অ্যাট্রিবিউট (কে অনুরোধ করছেন?)'
          },
          text: {
            en: 'Attributes describing the authenticated actor: role (e.g. editor), department (e.g. news), security clearance, employment status, or manager ID.',
            bn: 'অনুরোধকারী ব্যবহারকারীর নিজস্ব বৈশিষ্ট্য: পদবী বা রোল ( যেমন editor ), বিভাগ ( যেমন news ), সিকিউরিটি ক্লিয়ারেন্স, চাকরির ধরন বা ম্যানেজার আইডি।'
          },
        },
        {
          title: {
            en: '2. Resource Attributes (What is being accessed?)',
            bn: '২. রিসোর্স অ্যাট্রিবিউট (কোন তথ্যে প্রবেশ করা হচ্ছে?)'
          },
          text: {
            en: 'Attributes describing the targeted object: department (e.g. news vs sports), classification (e.g. public vs confidential), owner ID, or publication state.',
            bn: 'উদ্দিষ্ট অবজেক্ট বা তথ্যের নিজস্ব বৈশিষ্ট্য: বিভাগ ( যেমন news বনাম sports ), তথ্যের গোপনীয়তার স্তর ( যেমন public বনাম confidential ), মালিকের আইডি বা খসড়া অবস্থা।'
          },
        },
        {
          title: {
            en: '3. Action Attributes (What operation is attempted?)',
            bn: '৩. অ্যাকশন অ্যাট্রিবিউট (কী ধরনের কাজ করার চেষ্টা চলছে?)'
          },
          text: {
            en: 'The specific operation being requested: documents:read, documents:publish, documents:delete, or export:csv.',
            bn: 'অনুরোধকৃত সুনির্দিষ্ট কাজের ধরন: documents:read, documents:publish, documents:delete, বা export:csv।'
          },
        },
        {
          title: {
            en: '4. Environment Attributes (Under what real-world context?)',
            bn: '৪. এনভায়রনমেন্ট অ্যাট্রিবিউট (বাস্তব কোন প্রেক্ষাপটে অনুরোধ এসেছে?)'
          },
          text: {
            en: 'Contextual properties of the request: current time of day (e.g. 10:00 vs 22:00), day of the week, client IP subnet, geographic country, or device trust tier.',
            bn: 'রিকোয়েস্ট আসার পারিপার্শ্বিক প্রেক্ষাপট: দিনের বর্তমান সময় ( যেমন ১০:০০ বনাম ২২:০০ ), সপ্তাহের দিন, ক্লায়েন্টের আইপি সাবনেট, ভৌগোলিক দেশ বা ডিভাইসের নিরাপত্তা মান।'
          },
        },
      ],
    },
    {
      type: 'diagram',
      title: {
        en: 'The ABAC Policy Decision Point: 3 Scenarios Evaluated',
        bn: 'ABAC পলিসি ডিসিশন পয়েন্ট: ৩ টি দৃশ্যপটের মূল্যায়ন'
      },
      svg: `<svg viewBox="0 0 840 440" width="100%" height="auto" font-family="ui-monospace, monospace" role="img" aria-label="ABAC policy decision engine evaluating subject, resource, action, and environment attributes across 3 test scenarios">
  <rect width="840" height="440" fill="#0f172a" rx="12"/>
  
  <text x="420" y="26" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">ABAC POLICY DECISION POINT (NIST SP 800-162)</text>
  
  <!-- Top 4 Attributes Inputs -->
  <g transform="translate(30, 48)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#38bdf8"/>
    <text x="90" y="20" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">1. SUBJECT</text>
    <text x="10" y="42" fill="#cbd5e1" font-size="8.5">• role: "editor"</text>
    <text x="10" y="60" fill="#cbd5e1" font-size="8.5">• dept: "news"</text>
  </g>
  
  <g transform="translate(230, 48)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#10b981"/>
    <text x="90" y="20" fill="#6ee7b7" font-size="10" font-weight="bold" text-anchor="middle">2. RESOURCE</text>
    <text x="10" y="42" fill="#cbd5e1" font-size="8.5">• id: "doc_101"</text>
    <text x="10" y="60" fill="#cbd5e1" font-size="8.5">• dept: "news"</text>
  </g>
  
  <g transform="translate(430, 48)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#f59e0b"/>
    <text x="90" y="20" fill="#fcd34d" font-size="10" font-weight="bold" text-anchor="middle">3. ACTION</text>
    <text x="10" y="42" fill="#cbd5e1" font-size="8.5">• operation:</text>
    <text x="10" y="60" fill="#cbd5e1" font-size="8.5">  "documents:publish"</text>
  </g>
  
  <g transform="translate(630, 48)">
    <rect width="180" height="75" rx="6" fill="#1e293b" stroke="#c084fc"/>
    <text x="90" y="20" fill="#e9d5ff" font-size="10" font-weight="bold" text-anchor="middle">4. ENVIRONMENT</text>
    <text x="10" y="42" fill="#cbd5e1" font-size="8.5">• window: 09:00 - 17:00</text>
    <text x="10" y="60" fill="#cbd5e1" font-size="8.5">• current hour evaluated</text>
  </g>
  
  <!-- Scenarios Evaluated -->
  <g transform="translate(30, 145)">
    <rect width="780" height="245" rx="8" fill="#1e293b" stroke="#475569" stroke-width="2"/>
    <text x="390" y="24" fill="#f8fafc" font-size="11" font-weight="bold" text-anchor="middle">POLICY ENGINE DECISIONS (3 TEST SCENARIOS)</text>
    
    <!-- Scenario 1 -->
    <g transform="translate(20, 38)">
      <rect width="740" height="52" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="22" fill="#6ee7b7" font-size="10" font-weight="bold">SCENARIO 1: Alice (editor) at 10:00 AM</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8.5">role == editor [✓] AND dept == news [✓] AND hour (10) between 09:00-17:00 [✓] → <tspan fill="#34d399" font-weight="bold">DECISION: ALLOW (HTTP 200)</tspan></text>
    </g>
    
    <!-- Scenario 2 -->
    <g transform="translate(20, 100)">
      <rect width="740" height="52" rx="6" fill="#064e3b" stroke="#10b981"/>
      <text x="15" y="22" fill="#6ee7b7" font-size="10" font-weight="bold">SCENARIO 2: Bob (admin) at 15:00 PM</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8.5">role == admin [✓] AND dept == news [✓] AND hour (15) between 09:00-17:00 [✓] → <tspan fill="#34d399" font-weight="bold">DECISION: ALLOW (HTTP 200)</tspan></text>
    </g>
    
    <!-- Scenario 3 -->
    <g transform="translate(20, 162)">
      <rect width="740" height="65" rx="6" fill="#450a0a" stroke="#ef4444" stroke-width="2"/>
      <text x="15" y="22" fill="#fca5a5" font-size="10" font-weight="bold">SCENARIO 3: Charlie (editor) at 22:00 PM (10:00 PM at night)</text>
      <text x="15" y="40" fill="#cbd5e1" font-size="8.5">role == editor [✓] AND dept == news [✓] AND hour (22) between 09:00-17:00 [✗ FAILS HOURS] → <tspan fill="#ef4444" font-weight="bold">DECISION: DENY (HTTP 403)</tspan></text>
      <text x="15" y="55" fill="#fca5a5" font-size="7.5">DENIED REASON: Publishing restricted to corporate business hours (09:00 - 17:00). Current: 22:00.</text>
    </g>
  </g>
  
  <text x="420" y="415" fill="#94a3b8" font-size="10" text-anchor="middle">Results: 3 requests evaluated → 2 granted ALLOW, and 1 terminated with DENY due to temporal limits</text>
</svg>`,
      caption: {
        en: 'The ABAC engine evaluates 3 scenarios: Alice and Bob satisfy all 4 criteria and are allowed, while Charlie is denied at 22:00.',
        bn: 'ABAC ইঞ্জিন ৩ টি দৃশ্যপট পরীক্ষা করে: অ্যালিস এবং বব ৪ টি শর্তই পূরণ করায় অনুমতি পায়, আর রাত ২২:০০ টায় চার্লি প্রত্যাখ্যাত হয়।'
      },
    },
    {
      type: 'heading',
      id: 'abac-policy-engine-code',
      text: {
        en: 'Building a Dynamic ABAC Policy Engine in Node.js',
        bn: 'Node.js-এ ডায়নামিক ABAC পলিসি ইঞ্জিন তৈরি'
      },
    },
    {
      type: 'para',
      text: {
        en: 'Inspect this clean implementation of an Attribute-Based Access Control evaluator. Notice how policy rules combine subject roles, departmental cross-matching, and temporal environmental constraints into declarative boolean expressions.',
        bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল মূল্যায়নের পরিষ্কার কোডটি লক্ষ্য করুন। দেখুন কীভাবে পলিসির নিয়মগুলো ব্যবহারকারীর রোল, বিভাগীয় মিল এবং সময়ের পরিবেশগত শর্তাবলিকে একটি ডিক্লারেটিভ বুলিয়ান লজিকে সমন্বিত করে।'
      },
    },
    {
      type: 'code',
      lang: 'javascript',
      filename: 'abac-policy-engine.js',
      code: `// NIST SP 800-162 Attribute-Based Access Control (ABAC) Engine
class AbacPolicyEngine {
  constructor() {
    this.policies = [];
  }

  // Register a named policy rule function
  registerPolicy(name, ruleFunction) {
    this.policies.push({ name: name, evaluate: ruleFunction });
  }

  // Policy Decision Point (PDP): Evaluates the complete contextual tuple
  evaluate(context) {
    for (const policy of this.policies) {
      const result = policy.evaluate(context);
      if (!result.allow) {
        return {
          decision: 'DENY',
          policyName: policy.name,
          reason: result.reason
        };
      }
    }
    return { decision: 'ALLOW' };
  }
}

const engine = new AbacPolicyEngine();

// Rule: Newsroom Editorial Publishing Policy
engine.registerPolicy('NewsroomPublishingPolicy', ctx => {
  const { subject, resource, action, environment } = ctx;

  if (action === 'documents:publish') {
    // Dimension 1: Subject Role Check
    if (!['editor', 'admin'].includes(subject.role)) {
      return { allow: false, reason: 'Subject role must be editor or admin' };
    }

    // Dimension 2: Department Cross-Match Check
    if (subject.department !== resource.department) {
      return {
        allow: false,
        reason: 'Department mismatch: ' + subject.department + ' cannot publish ' + resource.department + ' articles'
      };
    }

    // Dimension 3 & 4: Environmental Temporal Check (09:00 to 17:00)
    if (environment.hour < 9 || environment.hour > 17) {
      return {
        allow: false,
        reason: 'Publishing restricted to business hours (09:00 to 17:00). Current hour: ' + environment.hour + ':00'
      };
    }
  }

  return { allow: true };
});

// Test 3 Scenarios
const testScenarios = [
  {
    id: 1,
    subject: { name: 'Alice', role: 'editor', department: 'news' },
    resource: { id: 'doc_101', department: 'news' },
    action: 'documents:publish',
    environment: { hour: 10 }
  },
  {
    id: 2,
    subject: { name: 'Bob', role: 'admin', department: 'news' },
    resource: { id: 'doc_102', department: 'news' },
    action: 'documents:publish',
    environment: { hour: 15 }
  },
  {
    id: 3,
    subject: { name: 'Charlie', role: 'editor', department: 'news' },
    resource: { id: 'doc_103', department: 'news' },
    action: 'documents:publish',
    environment: { hour: 22 } // Nighttime attempt
  }
];

let allowedCount = 0;
let deniedCount = 0;

console.log('=== Executing 3 ABAC Context Evaluations ===');
testScenarios.forEach(scenario => {
  const verdict = engine.evaluate(scenario);
  if (verdict.decision === 'ALLOW') {
    allowedCount += 1;
    console.log('Scenario ' + scenario.id + ' (' + scenario.subject.name + ' at ' + scenario.environment.hour + ':00): ALLOW ✓');
  } else {
    deniedCount += 1;
    console.log('Scenario ' + scenario.id + ' (' + scenario.subject.name + ' at ' + scenario.environment.hour + ':00): DENY ✗ (' + verdict.reason + ')');
  }
});

console.log('\\n=== ABAC Summary ===');
console.log('Total Scenarios: ' + testScenarios.length);
console.log('Passed: ' + allowedCount);
console.log('Failed: ' + deniedCount);`,
      caption: {
        en: 'The ABAC engine processes 3 scenarios: Alice and Bob pass at 10:00 and 15:00, while Charlie is denied at 22:00.',
        bn: 'ABAC ইঞ্জিন ৩ টি দৃশ্যপট মূল্যায়ন করে: ১০:০০ ও ১৫:০০ টায় অ্যালিস ও বব পাস করে এবং ২২:০০ টায় চার্লি প্রত্যাখ্যাত হয়।'
      },
    },
    {
      type: 'callout',
      kind: 'info',
      title: {
        en: 'Policy-as-Code: Open Policy Agent (OPA) & AWS Cedar',
        bn: 'পলিসি-অ্যাজ-কোড: ওপেন পলিসি এজেন্ট (OPA) এবং এডব্লিউএস সিডার'
      },
      text: {
        en: 'In modern cloud architectures, hardcoding policy rules into application source code is an anti-pattern. Instead, enterprises use dedicated Policy-as-Code engines like Open Policy Agent (OPA) using the Rego language, or AWS Cedar. By writing policies in declarative files decoupled from application binaries, security teams can update organizational rules instantly without recompiling or redeploying microservices.',
        bn: 'আধুনিক ক্লাউড আর্কিটেকচারে অ্যাপ্লিকেশনের সোর্স কোডের ভেতরে সরাসরি পলিসি হার্ডকোড করা একটি অনুচিত অভ্যাস। এর পরিবর্তে এন্টারপ্রাইজগুলো Rego ভাষাভিত্তিক Open Policy Agent (OPA) বা AWS Cedar-এর মতো পলিসি-অ্যাজ-কোড ইঞ্জিন ব্যবহার করে। অ্যাপ্লিকেশনের মূল কোড থেকে পলিসি ফাইল আলাদা রাখায় নিরাপত্তা টিম কোনো সার্ভিস পুনরায় বিল্ড বা রিস্টার্ট না করেই রিয়েল-টাইমে সাংগঠনিক নিরাপত্তা নিয়ম হালনাগাদ করতে পারে।'
      },
    },
  ],
  exercises: [
    {
      id: 'abac-pol-ex-1',
      kind: 'predict',
      topic: 'abac-failed-scenarios-count',
      question: {
        en: 'Out of the 3 scenarios evaluated by the ABAC newsroom engine, how many requests failed due to temporal environmental constraints? (1). Type the number.',
        bn: 'ABAC নিউজরুম ইঞ্জিন দ্বারা পরীক্ষিত ৩ টি দৃশ্যপটের মধ্যে সময়ের পরিবেশগত শর্তের কারণে কয়টি রিকোয়েস্ট ব্যর্থ হয়েছিল? ( ১ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '1',
      hint: {
        en: 'Only 1 request failed (Scenario 3 at 22:00).',
        bn: 'কেবল ১ টি রিকোয়েস্ট ব্যর্থ হয়েছিল (২২:০০ টায় ৩ নম্বর দৃশ্যপট)।'
      },
      explanation: {
        en: 'Scenario 3 failed because Charlie requested publishing at 22:00, which fell outside the allowed 09:00 to 17:00 window.',
        bn: '৩ নম্বর দৃশ্যপট ব্যর্থ হয়েছিল কারণ চার্লি রাত ২২:০০ টায় প্রকাশের অনুরোধ করেছিল, যা অনুমোদিত ০৯:০০ থেকে ১৭:০০ সময়সীমার বাইরে ছিল।'
      },
    },
    {
      id: 'abac-pol-ex-2',
      kind: 'mcq',
      topic: 'abac-four-dimensions',
      question: {
        en: 'What are the 4 fundamental attribute categories evaluated under the NIST SP 800-162 ABAC standard?',
        bn: 'NIST SP 800-162 ABAC স্ট্যান্ডার্ডের অধীনে মূল্যায়িত ৪ টি প্রধান অ্যাট্রিবিউট বিভাগ কী কী?'
      },
      options: [
        {
          en: 'Subject attributes (caller properties), Resource attributes (target object metadata), Action attributes (requested operation), and Environment attributes (context like time, IP, location)',
          bn: 'সাবজেক্ট অ্যাট্রিবিউট (আহ্বানকারীর বৈশিষ্ট্য), রিসোর্স অ্যাট্রিবিউট (উদ্দিষ্ট তথ্যের মেটাডেটা), অ্যাকশন অ্যাট্রিবিউট (দাবিকৃত কাজের ধরন), এবং এনভায়রনমেন্ট অ্যাট্রিবিউট (সময়, আইপি ও অবস্থানের প্রেক্ষাপট)',
        },
        {
          en: 'Monitor brightness, speaker volume, mouse sensitivity, and keyboard cable length',
          bn: 'মনিটরের আলো, স্পিকারের শব্দ, মাউসের সংবেদনশীলতা এবং কিবোর্ডের তারের দৈর্ঘ্য',
        },
        {
          en: 'Spring season, summer season, autumn season, and winter season',
          bn: 'বসন্তকাল, গ্রীষ্মকাল, শরৎকাল এবং শীতকাল',
        },
        {
          en: 'Laptop brand, desk height, office chair color, and wall paint shade',
          bn: 'ল্যাপটপের ব্র্যান্ড, টেবিলের উচ্চতা, চেয়ারের রঙ এবং দেয়ালের পেইন্টের শেড',
        },
      ],
      answer: 0,
      hint: {
        en: 'Subject, Resource, Action, and Environment compose the 4 dimensions.',
        bn: 'সাবজেক্ট, রিসোর্স, অ্যাকশন এবং এনভায়রনমেন্ট হলো ৪ টি প্রধান মাত্রা।'
      },
      explanation: {
        en: 'Evaluating Subject, Resource, Action, and Environment together enables fine-grained, contextual authorization decisions.',
        bn: 'এই ৪ টি মাত্রা একসাথে মূল্যায়ন করার মাধ্যমেই অত্যন্ত সূক্ষ্ম ও পরিস্থিতিভিত্তিক এক্সেস সিদ্ধান্ত নেওয়া সম্ভব হয়।'
      },
    },
    {
      id: 'abac-pol-ex-3',
      kind: 'mcq',
      topic: 'abac-eliminates-role-explosion',
      question: {
        en: 'How does ABAC eliminate the "Role Explosion" antipattern that plagues expanding RBAC systems?',
        bn: 'ABAC কীভাবে ক্রমবর্ধমান RBAC সিস্টেমের "রোল এক্সপ্লোশন" নামক জটিল সমস্যার অবসান ঘটায়?'
      },
      options: [
        {
          en: 'Instead of creating hundreds of combinatorial static roles (e.g. News-Editor-Daytime-VPN), ABAC expresses conditions dynamically using logical boolean expressions over existing user and resource attributes',
          bn: 'শত শত সমন্বিত স্ট্যাটিক রোল ( যেমন News-Editor-Daytime-VPN ) তৈরি করার বদলে ABAC ব্যবহারকারী ও রিসোর্সের বিদ্যমান বৈশিষ্ট্যের ওপর সরাসরি ডায়নামিক বুলিয়ান লজিক প্রয়োগ করে',
        },
        {
          en: 'It deletes half of all employee accounts automatically every weekend',
          bn: 'এটি প্রতি ছুটির দিনে নিজে থেকেই অর্ধেক কর্মীর অ্যাকাউন্ট মুছে ফেলে',
        },
        {
          en: 'It increases the processing speed of computer cooling fans',
          bn: 'এটি কম্পিউটারের কুলিং ফ্যানের ঘোরার গতি দ্বিগুণ বাড়িয়ে দেয়',
        },
        {
          en: 'It forces computers to restart after every twenty minutes of usage',
          bn: 'এটি কম্পিউটারকে প্রতি বিশ মিনিট পরপর নিজে নিজে রিস্টার্ট হতে বাধ্য করে',
        },
      ],
      answer: 0,
      hint: {
        en: 'Dynamic attribute boolean checks eliminate the need for combinatorial roles.',
        bn: 'ডায়নামিক বুলিয়ান শর্ত অপ্রয়োজনীয় হাজার হাজার রোলের প্রয়োজনীয়তা দূর করে।'
      },
      explanation: {
        en: 'In ABAC, a single policy rule can govern thousands of resources dynamically without defining bespoke roles for every attribute permutation.',
        bn: 'ABAC এ একটিমাত্র পলিসি নিয়ম প্রতিটি আলাদা সমন্বয়ের জন্য নতুন রোল না বানিয়েই হাজার হাজার রিসোর্স নিয়ন্ত্রণ করতে পারে।'
      },
    },
    {
      id: 'abac-pol-ex-4',
      kind: 'predict',
      topic: 'abac-passed-scenarios-count',
      question: {
        en: 'Out of the 3 scenarios evaluated by the ABAC newsroom engine, how many requests satisfied all 4 dimensions and received an ALLOW verdict? (2). Type the number.',
        bn: 'ABAC নিউজরুম ইঞ্জিন দ্বারা পরীক্ষিত ৩ টি দৃশ্যপটের মধ্যে কয়টি রিকোয়েস্ট ৪ টি শর্তই পূরণ করে সফলভাবে ALLOW রায় পেয়েছিল? ( ২ )। সংখ্যাটি টাইপ করুন।'
      },
      answer: '2',
      hint: {
        en: '2 requests (Alice and Bob) passed all checks.',
        bn: '২ টি রিকোয়েস্ট (অ্যালিস এবং বব) সব পরীক্ষায় উত্তীর্ণ হয়েছিল।'
      },
      explanation: {
        en: 'Both Alice (Scenario 1 at 10:00) and Bob (Scenario 2 at 15:00) met all departmental and temporal criteria, receiving ALLOW verdicts.',
        bn: 'অ্যালিস (১০:০০ টায় ১ নম্বর) এবং বব (১৫:০০ টায় ২ নম্বর) উভয়ই বিভাগ ও সময়ের সব শর্ত পূরণ করায় ALLOW রায় পেয়েছিল।'
      },
    },
  ],
  quiz: {
    id: 'abac-policies-quiz',
    title: {
      en: 'Attribute-Based Access Control Architecture Quiz',
      bn: 'অ্যাট্রিবিউট-ভিত্তিক এক্সেস কন্ট্রোল আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'abac-pol-qz-1',
        kind: 'mcq',
        topic: 'abac-temporal-policy-enforcement',
        question: {
          en: 'Why is environmental temporal context (time-of-day or day-of-week) an indispensable dimension in financial and health data access control?',
          bn: 'আর্থিক এবং স্বাস্থ্যসেবা তথ্যের সুরক্ষায় পরিবেশগত সময়ের প্রেক্ষাপট (দিনের সময় বা সপ্তাহের দিন) কেন একটি অপরিহার্য মাত্রা?'
        },
        options: [
          {
            en: 'It prevents compromised administrative credentials from accessing or exfiltrating sensitive customer records during anomalous off-hours (such as 3:00 AM on Sunday) when legitimate operations do not occur',
            bn: 'এটি আক্রমণকারীর হাতে অ্যাডমিন পাসওয়ার্ড চলে গেলেও ছুটির দিনে বা মধ্যরাতে ( যেমন রবিবার রাত ৩:০০ টায় ) অনিয়মিত সময়ে সংবেদনশীল তথ্য চুরি বা অপব্যবহার করা কার্যকরভাবে প্রতিহত করে',
          },
          {
            en: 'Because computer networks consume ten times more electricity after midnight',
            bn: 'কারণ মধ্যরাতের পর কম্পিউটার নেটওয়ার্ক দশ গুণ বেশি বিদ্যুৎ খরচ করে',
          },
          {
            en: 'Because operating systems refuse to run antivirus software on weekends',
            bn: 'কারণ ছুটির দিনে অপারেটিং সিস্টেম অ্যান্টিভাইরাস সফটওয়্যার চালাতে অস্বীকার করে',
          },
          {
            en: 'Because computer monitors cannot display text between midnight and dawn',
            bn: 'কারণ মধ্যরাত থেকে ভোর পর্যন্ত কম্পিউটারের মনিটর কোনো লেখা প্রদর্শন করতে পারে না',
          },
        ],
        answer: 0,
        hint: {
          en: 'Temporal policies block off-hours credential misuse and data exfiltration.',
          bn: 'সময়ের পলিসি অপ্রয়োজনীয় বা সন্দেহজনক সময়ে তথ্য চুরির চেষ্টা রুখে দেয়।'
        },
        explanation: {
          en: 'Restricting access to operating business hours enforces the Principle of Least Privilege in the temporal dimension, shutting down off-hours attacks.',
          bn: 'অফিস সময়ে এক্সেস সীমাবদ্ধ রাখা সময়ের মাত্রায় ন্যূনতম অধিকারের নীতি প্রয়োগ করে এবং রাতের আঁধারে আক্রমণ প্রতিহত করে।'
        },
      },
      {
        id: 'abac-pol-qz-2',
        kind: 'mcq',
        topic: 'policy-as-code-advantages',
        question: {
          en: 'What is the primary architectural benefit of utilizing a dedicated Policy-as-Code engine (such as Open Policy Agent or AWS Cedar)?',
          bn: 'একটি বিশেষায়িত পলিসি-অ্যাজ-কোড ইঞ্জিন ( যেমন ওপেন পলিসি এজেন্ট বা এডব্লিউএস সিডার ) ব্যবহারের প্রধান আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          {
            en: 'It decouples authorization policy definition from application code, allowing security teams to inspect, test, version-control, and update authorization rules across microservices without redeploying application codebases',
            bn: 'এটি অ্যাপ্লিকেশনের মূল কোড থেকে অথরাইজেশন নিয়মগুলোকে আলাদা করে দেয়, যার ফলে নিরাপত্তা দল কোনো অ্যাপ্লিকেশন পুনরায় ডেপ্লয় না করেই সমস্ত মাইক্রোসার্ভিসের নিরাপত্তা নিয়ম পরীক্ষা, সংস্করণ নিয়ন্ত্রণ এবং আপডেট করতে পারে',
          },
          {
            en: 'It doubles the physical memory size of server RAM microchips',
            bn: 'এটি সার্ভারের র্যাম মাইক্রোচিপের শারীরিক মেমোরির আকার দ্বিগুণ করে দেয়',
          },
          {
            en: 'It allows web servers to transmit data across the internet without cables or radio waves',
            bn: 'এটি তার বা বেতার তরঙ্গ ছাড়াই ইন্টারনেটে তথ্য পাঠানোর সুযোগ করে দেয়',
          },
          {
            en: 'It automatically formats database queries into bold green capital letters',
            bn: 'এটি ডাটাবেজ কোয়েরিগুলোকে নিজে নিজেই মোটা সবুজ বড় হাতের অক্ষরে রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: {
          en: 'Decoupling policy from code enables centralized management without redeployment.',
          bn: 'কোড থেকে পলিসি আলাদা করা অ্যাপ্লিকেশন পুনরায় ডেপ্লয় না করেই কেন্দ্রীভূত ব্যবস্থাপনার সুযোগ দেয়।'
        },
        explanation: {
          en: 'Decoupled policy engines standardize access decisions across diverse technology stacks (Go, Node.js, Python, Java) using a unified declarative syntax.',
          bn: 'ডিকাপলড ইঞ্জিন বিভিন্ন প্রোগ্রামিং ভাষার ( গো, নোড, পাইথন, জাভা ) সার্ভিসগুলোকে একটি সমন্বিত নিয়মে এক্সেস সিদ্ধান্ত প্রদান করে।'
        },
      },
      {
        id: 'abac-pol-qz-3',
        kind: 'mcq',
        topic: 'abac-performance-caching-considerations',
        question: {
          en: 'What is a common architectural performance challenge in ABAC systems, and how do high-throughput platforms address it?',
          bn: 'ABAC সিস্টেমে সাধারণ আর্কিটেকচারাল পারফরম্যান্স চ্যালেঞ্জ কী এবং উচ্চগতির প্ল্যাটফর্মগুলো কীভাবে তা সমাধান করে?'
        },
        options: [
          {
            en: 'Evaluating dozens of dynamic attributes per request can introduce database latency; platforms address this by passing pre-fetched user attributes inside JWT tokens and caching resolved attributes in ultra-fast in-memory stores like Redis',
            bn: 'প্রতিটি রিকোয়েস্টে ডজন ডজন অ্যাট্রিবিউট খুঁজতে গেলে ডাটাবেজে বিলম্ব হতে পারে; প্ল্যাটফর্মগুলো JWT টোকেনের ভেতরে প্রয়োজনীয় তথ্য আগে থেকেই যুক্ত করে এবং রেডিসের মতো দ্রুতগতির ইন-মেমোরিতে তা ক্যাশ করে এর সমাধান করে',
          },
          {
            en: 'ABAC makes computer sound cards emit high-pitched screeching noises',
            bn: 'ABAC কম্পিউটারের সাউন্ড কার্ড থেকে বিকট কিচিরমিচির শব্দ নির্গত করতে বাধ্য করে',
          },
          {
            en: 'ABAC causes smartphone batteries to discharge fifty percent in one minute',
            bn: 'ABAC এক মিনিটে স্মার্টফোনের ব্যাটারির পঞ্চাশ শতাংশ চার্জ কমিয়ে ফেলে',
          },
          {
            en: 'ABAC forces web browser tabs to close immediately upon opening',
            bn: 'ABAC ওয়েব ব্রাউজারের ট্যাব খোলার সাথে সাথেই নিজে থেকেই তা বন্ধ করে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Attribute retrieval latency is mitigated via JWT claims and fast caching.',
          bn: 'অ্যাট্রিবিউট খোঁজার সময় বাঁচাতে JWT ক্লেইম এবং দ্রুতগতির ক্যাশিং ব্যবহার করা হয়।'
        },
        explanation: {
          en: 'Fetching attributes on every API hop creates bottlenecks. Modern architectures embed non-sensitive attributes in identity tokens and use Redis for fast lookups.',
          bn: 'প্রতিবার ডাটাবেজে গেলে গতি কমে যায়। আধুনিক ব্যবস্থায় টোকেনে তথ্য দিয়ে এবং রেডিস ব্যবহার করে নিমেষেই পলিসি পরীক্ষা করা হয়।'
        },
      },
      {
        id: 'abac-pol-qz-4',
        kind: 'mcq',
        topic: 'abac-combining-algorithms',
        question: {
          en: 'In standard ABAC policy evaluation frameworks (like XACML), what is the function of a "Deny-Overrides" combining algorithm?',
          bn: 'মানসম্মত ABAC পলিসি মূল্যায়নে ( যেমন XACML ) "Deny-Overrides" কম্বাইনিং অ্যালগরিদমের কাজ কী?'
        },
        options: [
          {
            en: 'If multiple policies evaluate a single request, and even one policy produces a DENY decision, the final evaluation verdict is strictly DENY regardless of how many other policies returned ALLOW',
            bn: 'যদি একাধিক পলিসি একটিমাত্র রিকোয়েস্ট মূল্যায়ন করে এবং যেকোনো একটি পলিসিও DENY রায় দেয়, তবে বাকি যত পলিসিই ALLOW দিক না কেন, চূড়ান্ত ফলাফল কঠোরভাবে DENY হিসেবে গণ্য হবে',
          },
          {
            en: 'It inverts computer mouse cursor movements from left to right',
            bn: 'এটি কম্পিউটারের মাউসের কার্সারকে বাম থেকে ডানে উল্টোভাবে চলাচল করায়',
          },
          {
            en: 'It deletes all user photos saved on the device hard disk',
            bn: 'এটি ডিভাইসের হার্ডডিস্কে সংরক্ষিত ব্যবহারকারীর সমস্ত ছবি মুছে ফেলে',
          },
          {
            en: 'It changes the operating system clock speed to zero megahertz',
            bn: 'এটি অপারেটিং সিস্টেমের ঘড়ির গতি শূন্য মেগাহার্টজে নামিয়ে দেয়',
          },
        ],
        answer: 0,
        hint: {
          en: 'Deny-Overrides guarantees safety by letting a single denial veto all allows.',
          bn: 'Deny-Overrides একটিমাত্র অস্বীকৃতি দিয়েই বাকি সব অনুমোদন বাতিল করে সর্বোচ্চ নিরাপত্তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'Deny-overrides prioritizes safety. If a compliance policy forbids access at night, an allow from a departmental policy cannot override the restriction.',
          bn: 'Deny-overrides নিরাপত্তাকে সর্বোচ্চ গুরুত্ব দেয়। রাতের নিষেধাজ্ঞা পলিসি ডিনাই দিলে বিভাগের অনুমতি পলিসি কখনোই তা অগ্রাহ্য করতে পারে না।'
        },
      },
    ],
  },
  next: {
    slug: 'ownership-scopes',
    title: {
      en: 'Resource Ownership & Scopes: Preventing Insecure Direct Object References (IDOR)',
      bn: 'রিসোর্স মালিকানা ও স্কোপ: ইনসিকিউর ডাইরেক্ট অবজেক্ট রেফারেন্স (IDOR) প্রতিরোধ'
    },
  },
};
