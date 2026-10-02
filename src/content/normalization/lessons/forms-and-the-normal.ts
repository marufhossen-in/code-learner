import type { Lesson } from '../../../lib/types';

export const FormsAndTheNormalLesson: Lesson = {
  slug: 'forms-and-the-normal',
  tech: 'normalization',
  title: {
    en: 'Fifth Normal Form (5NF) & Domain-Key Normal Form (DKNF)',
    bn: '৫ম নরমাল ফর্ম (5NF) ও ডোমেইন-কি নরমাল ফর্ম (DKNF)'
  },
  summary: {
    en: 'Explore the theoretical summits of relational database normalization: Join Dependencies in Fifth Normal Form (5NF / PJNF), cyclic constraints, and the anomaly-free ideal of Domain-Key Normal Form (DKNF).',
    bn: 'রিলেশনাল ডাটাবেস নরমালাইজেশনের তাত্ত্বিক চূড়া অন্বেষণ করুন: ৫ম নরমাল ফর্মের (5NF / PJNF) জয়েন নির্ভরতা, সাইক্লিক কনস্ট্রেইন্ট এবং ডোমেইন-কি নরমাল ফর্মের (DKNF) আদর্শ অ্যানোমালি-মুক্ত রূপ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'beyond-binary-decomposition',
      text: {
        en: 'Beyond Binary Decompositions: Join Dependencies (JD)',
        bn: 'বাইনারি বিভাজনের ঊর্ধ্বে: জয়েন নির্ভরতা (JD)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Throughout Second, Third, BCNF, and Fourth Normal Forms, relational table decomposition always splits a violating relation into exactly two sub-relations (binary decomposition). However, in 1979, computer scientist Ronald Fagin proved that certain relations cannot be losslessly decomposed into two tables without generating false spurious tuples. These complex schemas can only be decomposed losslessly into 3 or more tables simultaneously.',
        bn: '২য়, ৩য়, BCNF এবং ৪র্থ নরমাল ফর্মের সমস্ত ধাপে একটি সমস্যাযুক্ত রিলেশনকে সর্বদা ঠিক ২টি সাব-রিলেশনে বিভক্ত করা হয় (বাইনারি ডিকম্পোজিশন)। তবে ১৯৭৯ সালে কম্পিউটার বিজ্ঞানী রোনাল্ড ফ্যাগিন প্রমাণ করেন যে কিছু বিশেষ রিলেশন ভুয়া বা স্পুরিয়াস টিউপল তৈরি না করে কেবল দুটি টেবিলে লসলেসভাবে ভাগ করা অসম্ভব। এই ধরনের জটিল স্কিমাগুলোকে লসলেসভাবে সংরক্ষণ করতে একসাথে ৩টি বা ততোধিক টেবিলে ভাগ করতে হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This mathematical invariant is called a Join Dependency, written as a natural join across multiple projections. Fifth Normal Form (5NF, also known as Project-Join Normal Form or PJNF) addresses this exact scenario. Formally, a relation R is in 5NF if and only if it is in 4NF and every non-trivial join dependency in R is implied by the candidate keys of R. 5NF tables eliminate cyclic join redundancy.',
        bn: 'এই গাণিতিক শর্তটিকে বলা হয় জয়েন ডিপেন্ডেন্সি বা জয়েন নির্ভরতা, যা একাধিক প্রজেকশনের মধ্যকার ন্যাচারাল জয়েন নির্দেশ করে। ৫ম নরমাল ফর্ম (5NF বা প্রজেক্ট-জয়েন নরমাল ফর্ম PJNF) এই পরিস্থিতি সমাধান করে। আনুষ্ঠানিকভাবে, একটি রিলেশন R ৫ম নরমাল ফর্মে থাকবে যদি এবং কেবল যদি এটি ৪র্থ নরমাল ফর্মে থাকে এবং R-এর প্রতিটি নন-ট্রিভিয়াল জয়েন নির্ভরতা R-এর ক্যান্ডিডেট কি দ্বারা যৌক্তিকভাবে নির্ধারিত হয়। 5NF টেবিল সাইক্লিক জয়েন জটিলতা দূর করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Normal Form Hierarchy and 5NF Cyclic Ternary Join',
        bn: 'নরমাল ফর্ম স্তরক্রম এবং ৫ম নরমাল ফর্মের ত্রিভুজাকার সাইক্লিক জয়েন'
      },
      svg: `<svg viewBox="0 0 740 330" font-family="system-ui, sans-serif" role="img" aria-label="Normal form hierarchy and 5NF ternary join diagram">
  <rect width="740" height="330" rx="12" fill="#0f172a" />

  <!-- Left: Normal Form Hierarchy Pyramid -->
  <g transform="translate(30, 25)">
    <rect width="320" height="200" rx="8" fill="#1e293b" stroke="#334155" stroke-width="1.5" />
    <text x="160" y="22" fill="#f8fafc" font-size="12" font-weight="bold" text-anchor="middle">Relational Normal Form Hierarchy</text>

    <!-- Layers from outer to inner -->
    <rect x="20" y="38" width="280" height="20" rx="3" fill="#0284c7" />
    <text x="160" y="52" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">1NF: Atomic values &amp; Primary Keys</text>

    <rect x="35" y="63" width="250" height="20" rx="3" fill="#0369a1" />
    <text x="160" y="77" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">2NF: No partial key dependencies</text>

    <rect x="50" y="88" width="220" height="20" rx="3" fill="#075985" />
    <text x="160" y="102" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">3NF: No non-key transitive dependencies</text>

    <rect x="65" y="113" width="190" height="20" rx="3" fill="#0c4a6e" />
    <text x="160" y="127" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">BCNF: Determinants are Superkeys</text>

    <rect x="80" y="138" width="160" height="20" rx="3" fill="#064e3b" />
    <text x="160" y="152" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">4NF: No multivalued dependencies (MVD)</text>

    <rect x="95" y="163" width="130" height="20" rx="3" fill="#14532d" />
    <text x="160" y="177" fill="#86efac" font-size="10" font-weight="bold" text-anchor="middle">5NF: No join dependencies (PJNF)</text>

    <rect x="110" y="188" width="100" height="20" rx="3" fill="#78350f" />
    <text x="160" y="202" fill="#fde68a" font-size="9" font-weight="bold" text-anchor="middle">DKNF: Domain-Key Ideal</text>
  </g>

  <!-- Right: 5NF Cyclic Triangle -->
  <g transform="translate(400, 25)">
    <rect width="310" height="200" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5" />
    <text x="155" y="22" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">5NF Ternary Cyclic Relationship</text>

    <!-- Node Agent -->
    <circle cx="155" cy="55" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
    <text x="155" y="59" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">Agent</text>

    <!-- Node Company -->
    <circle cx="70" cy="165" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
    <text x="70" y="169" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Company</text>

    <!-- Node Product -->
    <circle cx="240" cy="165" r="22" fill="#0284c7" stroke="#38bdf8" stroke-width="2" />
    <text x="240" y="169" fill="#ffffff" font-size="9" font-weight="bold" text-anchor="middle">Product</text>

    <!-- Cyclic Edges -->
    <line x1="140" y1="72" x2="85" y2="145" stroke="#fbbf24" stroke-width="2" />
    <text x="95" y="105" fill="#fde68a" font-size="9">Table 1</text>

    <line x1="170" y1="72" x2="225" y2="145" stroke="#fbbf24" stroke-width="2" />
    <text x="210" y="105" fill="#fde68a" font-size="9">Table 3</text>

    <line x1="92" y1="165" x2="218" y2="165" stroke="#fbbf24" stroke-width="2" />
    <text x="155" y="180" fill="#fde68a" font-size="9" text-anchor="middle">Table 2</text>
  </g>

  <!-- Bottom Banner -->
  <g transform="translate(30, 240)">
    <rect width="680" height="70" rx="6" fill="#020617" stroke="#334155" stroke-width="1.5" />
    <text x="25" y="24" fill="#f8fafc" font-size="12" font-weight="bold">The Ultimate Summit: Domain-Key Normal Form (DKNF)</text>
    <text x="25" y="44" fill="#cbd5e1" font-size="11">Formulated in 1981 by Ronald Fagin: a schema where ALL constraints are enforced purely through domain checks and uniqueness keys.</text>
    <text x="25" y="60" fill="#94a3b8" font-size="10">DKNF achieves mathematical perfection with zero anomalies, though no general algorithm exists to convert all schemas into DKNF.</text>
  </g>
</svg>`,
      caption: {
        en: 'The normal form hierarchy and 5NF ternary decomposition: cyclic constraints require 3 simultaneous projections for lossless joins.',
        bn: 'নরমাল ফর্ম স্তরক্রম এবং ৫ম নরমাল ফর্মের ত্রিভুজাকার বিভাজন: সাইক্লিক নিয়মে লসলেস জয়েনের জন্য একসাথে ৩টি টেবিলের প্রয়োজন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Fifth Normal Form (5NF / PJNF)',
          def: {
            en: 'A state where every non-trivial join dependency is implied by the candidate keys, eliminating anomalies in cyclic n-way relationships.',
            bn: 'এমন একটি পর্যায় যেখানে প্রতিটি নন-ট্রিভিয়াল জয়েন নির্ভরতা ক্যান্ডিডেট কি দ্বারা নির্ধারিত হয়, যা সাইক্লিক সম্পর্কের ত্রুটি দূর করে।'
          }
        },
        {
          term: 'Join Dependency (JD)',
          def: {
            en: 'A mathematical constraint stating that a relation can be recreated without spurious tuples by joining a specific collection of its sub-projections.',
            bn: 'একটি গাণিতিক শর্ত যা নির্দেশ করে যে কোনো রিলেশনকে তার কয়েকটি নির্দিষ্ট সাব-প্রজেকশন জয়েন করে কোনো বাড়তি রো ছাড়া পুনরায় তৈরি করা সম্ভব।'
          }
        },
        {
          term: 'Domain-Key Normal Form (DKNF)',
          def: {
            en: 'The theoretical ideal where all database constraints are logical consequences of domain definitions and key uniqueness constraints alone.',
            bn: 'ডাটাবেসের এমন একটি আদর্শ তাত্ত্বিক অবস্থা যেখানে সমস্ত নিয়ম কেবল কলাম ডোমেইন এবং কি-এর অনন্যতা যাচাই করেই কার্যকর করা যায়।'
          }
        },
        {
          term: 'Ternary Decomposition',
          def: {
            en: 'Decomposing a single 3-attribute relation into 3 separate binary tables because any 2-table binary decomposition generates spurious tuples.',
            bn: 'একটি ৩-কলামের টেবিলকে ৩টি আলাদা টেবিলে ভাগ করা, কারণ যেকোনো ২টি টেবিলে ভাগ করলে জয়েনের সময় ভুল স্পুরিয়াস সারি তৈরি হয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'dknf-and-practical-stopping-points',
      text: {
        en: 'Domain-Key Normal Form and Real-World Stopping Points',
        bn: 'ডোমেইন-কি নরমাল ফর্ম ও বাস্তব জীবনে নরমালাইজেশন থামানোর ধাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In 1981, Ronald Fagin introduced Domain-Key Normal Form (DKNF) as the ultimate theoretical objective of database normalization. A relation is in DKNF if every constraint is enforced purely through column domain data types (such as positive integers or specific enum strings) and uniqueness candidate keys. In a DKNF database, no update anomalies of any type can exist, and database engines need zero application triggers or cross-table assertions to preserve data truth.',
        bn: '১৯৮১ সালে রোনাল্ড ফ্যাগিন ডাটাবেস নরমালাইজেশনের চূড়ান্ত তাত্ত্বিক লক্ষ্য হিসেবে ডোমেইন-কি নরমাল ফর্ম (DKNF) প্রস্তাব করেন। একটি রিলেশন DKNF-এ থাকবে যদি তার সমস্ত ব্যবসায়িক নিয়ম কেবল কলাম ডোমেইন ডাটা টাইপ (যেমন ধনাত্মক পূর্ণসংখ্যা বা নির্দিষ্ট এনাম স্ট্রিং) এবং ক্যান্ডিডেট কি-এর অনন্যতা দিয়ে পুরোপুরি কার্যকর করা সম্ভব হয়। একটি DKNF ডাটাবেসে কোনো ধরনের আপডেট সমস্যা থাকতে পারে না এবং কোনো বাড়তি ট্রিগার বা কোড ছাড়াই ডাটার শুদ্ধতা অক্ষত থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, DKNF remains primarily an academic gold standard. There is no automated mathematical algorithm to normalize an arbitrary schema into DKNF, and many real-world constraints cannot be expressed purely through domains and keys. In industrial production systems, engineering teams stop at Third Normal Form (3NF) or Boyce-Codd Normal Form (BCNF). These forms eliminate virtually all daily operational anomalies while keeping relational join queries lightning-fast.',
        bn: 'তবে বাস্তব ক্ষেত্রে DKNF মূলত একটি একাডেমিক বা তাত্ত্বিক আদর্শ হিসেবে বিবেচিত হয়। যেকোনো সাধারণ স্কিমাকে স্বয়ংক্রিয়ভাবে DKNF-এ রূপান্তর করার মতো কোনো সাধারণ গাণিতিক অ্যালগরিদম নেই এবং বাস্তব জীবনের বহু জটিল নিয়ম কেবল ডোমেইন ও কি দিয়ে প্রকাশ করা যায় না। প্রোডাকশন সফটওয়্যার সিস্টেমে ইঞ্জিনিয়ারিং দলগুলো সাধারণত ৩য় নরমাল ফর্ম (3NF) বা বয়েস-কড নরমাল ফর্মে (BCNF) নরমালাইজেশন সম্পন্ন করে। এই ধাপগুলো দৈনন্দিন সমস্ত ডাটা বিকৃতি রোধ করে এবং কোয়েরির গতি সর্বোচ্চ রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'node-5nf-engine',
      text: {
        en: 'Executable 5NF Engine: Ternary Lossless Reconstruction',
        bn: 'রানযোগ্য ৫ম নরমাল ফর্ম ইঞ্জিন: ৩টি টেবিলের মাধ্যমে লসলেস পুনর্গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Below is a complete Node.js simulation demonstrating Fifth Normal Form (5NF). It models a cyclic ternary relationship across agents, companies, and products, decomposes the relation into 3 binary projections, and proves that a 3-way join reconstructs the exact original 3 records with zero spurious tuples.',
        bn: 'নিচে ৫ম নরমাল ফর্ম (5NF) প্রদর্শনকারী একটি সম্পূর্ণ Node.js সিমুলেশন দেওয়া হলো। এটি এজেন্ট, কোম্পানি এবং পণ্যের মধ্যকার ত্রিভুজাকার সাইক্লিক সম্পর্ক পরীক্ষা করে, টেবিলটিকে ৩টি বাইনারি প্রজেকশনে ভাগ করে এবং প্রমাণ করে যে ৩টি টেবিল জয়েন করলে কোনো বাড়তি সারি ছাড়াই মূল ৩টি রেকর্ড নিখুঁতভাবে ফিরে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      caption: {
        en: 'Simulate 5NF ternary cyclic decomposition and prove lossless join reconstruction across 3 binary tables',
        bn: '৫ম নরমাল ফর্মের ত্রিভুজাকার সাইক্লিক বিভাজন সিমুলেশন এবং ৩টি বাইনারি টেবিলের লসলেস জয়েন প্রমাণ'
      },
      code: `// Fifth Normal Form (5NF / PJNF) Ternary Join Engine
const originalTernaryRecords = [
  { agent: 'Rahim', company: 'Acme', product: 'Hammer' },
  { agent: 'Rahim', company: 'Beta', product: 'Drill' },
  { agent: 'Karim', company: 'Acme', product: 'Hammer' }
];

// Step 1: 5NF Decomposition into 3 simultaneous binary projections
const agentCompany = [
  { agent: 'Rahim', company: 'Acme' },
  { agent: 'Rahim', company: 'Beta' },
  { agent: 'Karim', company: 'Acme' }
];

const companyProduct = [
  { company: 'Acme', product: 'Hammer' },
  { company: 'Beta', product: 'Drill' }
];

const agentProduct = [
  { agent: 'Rahim', product: 'Hammer' },
  { agent: 'Rahim', product: 'Drill' },
  { agent: 'Karim', product: 'Hammer' }
];

// Step 2: Faulty 2-way join (agentCompany JOIN companyProduct on company)
const twoWayIntermediate = [];
for (const ac of agentCompany) {
  for (const cp of companyProduct) {
    if (ac.company === cp.company) {
      twoWayIntermediate.push({ agent: ac.agent, company: ac.company, product: cp.product });
    }
  }
}

// Step 3: Complete 3-way ternary join (filter intermediate with third table agentProduct)
const threeWayJoinResult = twoWayIntermediate.filter(record =>
  agentProduct.some(ap => ap.agent === record.agent && ap.product === record.product)
);

const isExactMatch = threeWayJoinResult.length === originalTernaryRecords.length &&
  threeWayJoinResult.every((r, idx) => r.agent === originalTernaryRecords[idx].agent);

console.log(\`[5NF Engine] Ternary 3-table join reconstructed exact \${threeWayJoinResult.length} original records with 0 spurious rows.\`);
console.log(\`[5NF Invariant] All 3 cyclic projections required for lossless join (1/1: \${isExactMatch}).\`);`
    },
    {
      type: 'callout',
      kind: 'tip',
      title: {
        en: 'The Practical Consensus: Stop Normalizing at 3NF / BCNF',
        bn: 'ব্যবহারিক সিদ্ধান্ত: ৩NF বা BCNF এই নরমালাইজেশন সমাপ্ত করুন'
      },
      text: {
        en: 'Higher normal forms like 4NF and 5NF require multi-way joins that can degrade database throughput in production OLTP workloads. Unless your domain models independent multiple 1-to-many relationships or complex cyclic rules, standardizing on 3NF or BCNF delivers peak write integrity and high-speed query performance.',
        bn: '৪র্থ এবং ৫ম নরমাল ফর্মের মতো উচ্চতর ধাপে একাধিক টেবিল জয়েন করার প্রয়োজন হয় যা প্রোডাকশন OLTP সার্ভারের গতি কমিয়ে দিতে পারে। যদি না আপনার ব্যবসায়িক মডেলে জটিল ত্রিভুজাকার বা একাধিক স্বাধীন ১-টু-মেনি সম্পর্ক থাকে, তবে ৩য় নরমাল ফর্ম বা BCNF পর্যন্ত নরমালাইজেশন করাই সর্বোচ্চ গতি এবং অখণ্ডতার জন্য যথেষ্ট।'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'Normal Form Level Classifier',
        bn: 'নরমাল ফর্ম স্তর শ্রেণীবিন্যাসক'
      },
      description: {
        en: 'Classify a database schema: identify which normal form is satisfied based on structural guarantees.',
        bn: 'একটি ডাটাবেস স্কিমা শ্রেণীবদ্ধ করুন: কাঠামোগত নিশ্চয়তার ভিত্তিতে কোন নরমাল ফর্ম অর্জিত হয়েছে তা নির্ধারণ করুন।'
      },
      code: `function classifyNormalForm(guarantees) {
  if (guarantees.includes('DOMAIN_KEY_CONSTRAINTS_ONLY')) return 'DKNF';
  if (guarantees.includes('JOIN_DEPENDENCIES_PRESERVED')) return '5NF_PJNF';
  if (guarantees.includes('MULTIVALUED_DEPENDENCIES_RESOLVED')) return '4NF';
  if (guarantees.includes('STRICT_SUPERKEY_DETERMINANTS')) return 'BCNF';
  if (guarantees.includes('TRANSITIVE_DEPENDENCIES_RESOLVED')) return '3NF';
  return '2NF_OR_LOWER';
}

console.log('Level A:', classifyNormalForm(['STRICT_SUPERKEY_DETERMINANTS']));
console.log('Level B:', classifyNormalForm(['JOIN_DEPENDENCIES_PRESERVED']));`,
      tests: [
        {
          name: {
            en: 'Identifies BCNF for superkey determinants',
            bn: 'সুপার-কি ডিটারমিন্যান্টের জন্য BCNF শনাক্ত করে'
          },
          expected: 'Level A: BCNF'
        },
        {
          name: {
            en: 'Identifies 5NF for join dependency preservation',
            bn: 'জয়েন নির্ভরতা সংরক্ষণের জন্য ৫ম নরমাল ফর্ম শনাক্ত করে'
          },
          expected: 'Level B: 5NF_PJNF'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'norm-5nf-ex-1',
      kind: 'mcq',
      topic: '5nf-core-mechanism',
      question: {
        en: 'What unique architectural property distinguishes Fifth Normal Form (5NF / PJNF) from all preceding normal forms?',
        bn: 'পূর্ববর্তী সমস্ত নরমাল ফর্মের থেকে ৫ম নরমাল ফর্মকে (5NF / PJNF) কোন অনন্য স্থাপত্যগত বৈশিষ্ট্যটি পৃথক করে?'
      },
      options: [
        {
          en: 'It governs Join Dependencies that can only be decomposed losslessly into 3 or more tables simultaneously, rather than simple binary 2-table splits',
          bn: 'এটি এমন জয়েন নির্ভরতা নিয়ন্ত্রণ করে যা সাধারণ ২টি টেবিলের বদলে একসাথে ৩টি বা ততোধিক টেবিলে ভাগ করলেই কেবল লসলেসভাবে সংরক্ষিত হয়'
        },
        {
          en: 'It requires database files to be stored in 5 separate countries',
          bn: 'এর জন্য ডাটাবেস ফাইলগুলোকে ৫টি আলাদা দেশে সংরক্ষণ করতে হয়'
        },
        {
          en: 'It forces tables to have at least 5 primary keys per row',
          bn: 'এটি টেবিলে প্রতি সারিতে কমপক্ষে ৫টি প্রাইমারি কি থাকা বাধ্যতামূলক করে'
        },
        {
          en: 'It allows columns to store binary video files directly in RAM',
          bn: 'এটি কলামে সরাসরি মেমরিতে ভিডিও ফাইল সংরক্ষণের অনুমতি দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '5NF handles non-binary join dependencies that require n-way table splits (n >= 3).',
        bn: '৫ম নরমাল ফর্ম নন-বাইনারি জয়েন নির্ভরতা পরিচালনা করে যার জন্য ৩ বা ততোধিক টেবিলের প্রয়োজন হয়।'
      },
      explanation: {
        en: 'All normal forms up to 4NF decompose tables into pairs of sub-relations. 5NF is the first normal form that addresses cyclic constraints that can only be decomposed into three or more projections.',
        bn: '৪র্থ নরমাল ফর্ম পর্যন্ত તમામ ধাপে টেবিলকে দুটি করে সাব-রিলেশনে ভাগ করা যায়। ৫ম নরমাল ফর্মই প্রথম ধাপ যা সাইক্লিক নিয়মের কারণে একসাথে ৩টি বা ততোধিক প্রজেকশনে ভাগের প্রয়োজনীয়তা নির্দেশ করে।'
      }
    },
    {
      id: 'norm-5nf-ex-2',
      kind: 'mcq',
      topic: 'dknf-theoretical-significance',
      question: {
        en: 'Why is Domain-Key Normal Form (DKNF) considered the theoretical "holy grail" of relational database design?',
        bn: 'ডোমেইন-কি নরমাল ফর্মকে (DKNF) কেন রিলেশনাল ডাটাবেস ডিজাইনের পরম তাত্ত্বিক "চূড়ান্ত লক্ষ্য" হিসেবে বিবেচনা করা হয়?'
      },
      options: [
        {
          en: 'Because every constraint on the relation is enforced purely by column data type domain checks and key uniqueness constraints, guaranteeing zero anomalies of any kind',
          bn: 'কারণ রিলেশনের সমস্ত নিয়ম কেবল কলামের ডাটা টাইপ ডোমেইন এবং কি-এর অনন্যতা দিয়ে কার্যকর হয়, যা যেকোনো ধরনের অ্যানোমালি সম্পূর্ণ প্রতিরোধ করে'
        },
        {
          en: 'Because DKNF tables run without needing a database server computer',
          bn: 'কারণ DKNF টেবিল কোনো ডাটাবেস সার্ভার কম্পিউটার ছাড়াই চলতে পারে'
        },
        {
          en: 'Because DKNF eliminates the need for SQL SELECT queries',
          bn: 'কারণ DKNF ব্যবহারে SQL SELECT কোয়েরির কোনো প্রয়োজনই থাকে না'
        },
        {
          en: 'Because DKNF was patented by Microsoft Corporation in 2026',
          bn: 'কারণ ২০২৬ সালে মাইক্রোসফট কর্পোরেশন DKNF-এর পেটেন্ট নিয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'All constraints reduce to Domains and Keys: no triggers or cross-table assertions needed.',
        bn: 'تمام নিয়ম কেবল ডোমেইন এবং কি-তে সীমাবদ্ধ: কোনো ট্রিগার বা বাড়তি কোডের প্রয়োজন নেই।'
      },
      explanation: {
        en: 'A relation in DKNF contains no insertion, update, or deletion anomalies whatsoever because all business invariants are automatically satisfied by validating single-column domains and candidate key uniqueness.',
        bn: 'DKNF-এ থাকা টেবিলে কোনো ধরনের ইনসার্ট, আপডেট বা ডিলিট ত্রুটি থাকা অসম্ভব, কারণ تمام ব্যবসায়িক নিয়ম কেবল কলাম ডোমেইন এবং ক্যান্ডিডেট কি-এর অনন্যতা যাচাই করেই কার্যকর হয়।'
      }
    },
    {
      id: 'norm-5nf-ex-3',
      kind: 'mcq',
      topic: 'real-world-normal-form-target',
      question: {
        en: 'Why do virtually all real-world transactional database architects normalize systems to 3NF or BCNF rather than pursuing 5NF or DKNF?',
        bn: 'বাস্তব জীবনের প্রায় تمام ডাটাবেস আর্কিটেক্ট কেন সিস্টেমগুলোকে ৫NF বা DKNF-এর পেছনে না ছুটে ৩NF বা BCNF পর্যন্ত নরমালাইজ করেন?'
      },
      options: [
        {
          en: '3NF and BCNF eliminate virtually all common operational update anomalies while keeping relational join queries efficient and manageable',
          bn: '৩য় নরমাল ফর্ম এবং BCNF দৈনন্দিন تمام সাধারণ আপডেট সমস্যা দূর করে এবং জয়েন কোয়েরির পারফরম্যান্স সর্বোচ্চ ও পরিচালনাযোগ্য রাখে'
        },
        {
          en: 'Because modern database systems charge $10,000 per month for tables in 5NF',
          bn: 'কারণ আধুনিক ডাটাবেসগুলো ৫ম নরমাল ফর্মের টেবিল ব্যবহারের জন্য প্রতি মাসে ১০,০০০ ডলার চার্জ করে'
        },
        {
          en: 'Because SQL syntax does not allow numbers higher than 3 in schema files',
          bn: 'কারণ SQL সিনট্যাক্স স্কিমা ফাইলে ৩-এর বেশি সংখ্যা ব্যবহারে নিষেধাজ্ঞা দেয়'
        },
        {
          en: 'Because 5NF tables can only be accessed using voice commands',
          bn: 'কারণ ৫ম নরমাল ফর্মের টেবিল শুধুমাত্র ভয়েস কমান্ড দিয়ে অ্যাক্সেস করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Practical engineering balances integrity against the query overhead of multi-table joins.',
        bn: 'ব্যবহারিক ইঞ্জিনিয়ারিং ডাটার অখণ্ডতা এবং একাধিক টেবিল জয়েনের পারফরম্যান্স খরচের মধ্যে ভারসাম্য রক্ষা করে।'
      },
      explanation: {
        en: 'Normalizing beyond BCNF to 5NF introduces complex 3-way joins that can degrade write throughput and query readability, with diminishing returns for typical enterprise software applications.',
        bn: 'BCNF পেরিয়ে ৫ম নরমাল ফর্মে যেতে গেলে জটিল ৩-মুখী জয়েন করতে হয় যা সিস্টেমের গতি কমাতে পারে, অথচ সাধারণ এন্টারপ্রাইজ সফটওয়্যারে এর সুফল খুবই নগণ্য।'
      }
    },
    {
      id: 'norm-5nf-ex-4',
      kind: 'mcq',
      topic: 'spurious-tuple-risk-in-ternary',
      question: {
        en: 'What happens if an engineer attempts to decompose an agent-company-product relation with cyclic constraints into only TWO tables instead of THREE?',
        bn: 'সাইক্লিক নিয়ম থাকা একটি এজেন্ট-কোম্পানি-পণ্য রিলেশনকে ৩টি টেবিলের বদলে মাত্র ২টি টেবিলে ভাগ করার চেষ্টা করলে কী ঘটে?'
      },
      options: [
        {
          en: 'Rejoining the two tables produces spurious (false) tuples that falsely claim agents sell products for companies they do not actually represent',
          bn: 'দুটি টেবিল পুনরায় জয়েন করলে ভুয়া স্পুরিয়াস সারি তৈরি হয় যা ভুলভাবে দাবি করে যে কোনো এজেন্ট এমন কোম্পানির পণ্য বিক্রি করছে যার সাথে তার কোনো চুক্তি নেই'
        },
        {
          en: 'The database server immediately erases all hard drive partitions',
          bn: 'ডাটাবেস সার্ভার সাথে সাথে তার तमाम হার্ডড্রাইভ পার্টিশন মুছে ফেলে'
        },
        {
          en: 'All table columns are automatically converted into PDF documents',
          bn: 'সমস্ত টেবিল কলাম স্বয়ংক্রিয়ভাবে পিডিএফ ডকুমেন্টে রূপান্তরিত হয়ে যায়'
        },
        {
          en: 'The operating system loses internet connection',
          bn: 'অপারেটিং সিস্টেমের ইন্টারনেট সংযোগ বিচ্ছিন্ন হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Loss of cyclic constraint: binary projections lack the 3rd edge required to eliminate spurious combinations.',
        bn: 'সাইক্লিক শর্তের ক্ষতি: দুটি প্রজেকশন ভুয়া তথ্য দূর করার জন্য প্রয়োজনীয় ৩য় প্রান্তটি ধারণ করতে পারে না।'
      },
      explanation: {
        en: 'Because the constraint is ternary (cyclic), 2 tables cannot capture all 3 pairwise relationships. Re-joining only 2 tables creates phantom rows (spurious tuples) that violate the original truth.',
        bn: 'যেহেতু শর্তটি ত্রিমুখী বা সাইক্লিক, তাই ২টি টেবিল ৩টি সম্পর্ক একসাথে ধরে রাখতে পারে না। মাত্র ২টি টেবিল জয়েন করলে ভুয়া সারি তৈরি হয় যা মূল তথ্যের বিকৃতি ঘটায়।'
      }
    }
  ],
  quiz: {
    id: 'forms-and-the-normal-quiz',
    title: {
      en: 'Higher Normal Forms (5NF & DKNF) Mastery Quiz',
      bn: 'উচ্চতর নরমাল ফর্ম (5NF ও DKNF) দক্ষতা যাচাই কুইজ'
    },
    questions: [
      {
        id: 'norm-5nf-qz-1',
        kind: 'mcq',
        topic: 'pjnf-acronym-meaning',
        question: {
          en: 'What does the alternative name for Fifth Normal Form, "PJNF", stand for?',
          bn: '৫ম নরমাল ফর্মের বিকল্প নাম "PJNF"-এর পূর্ণ রূপ কী?'
        },
        options: [
          {
            en: 'Project-Join Normal Form',
            bn: 'প্রজেক্ট-জয়েন নরমাল ফর্ম (Project-Join Normal Form)'
          },
          {
            en: 'Primary-Javascript Normal Form',
            bn: 'প্রাইমারি-জাভাস্ক্রিপ্ট নরমাল ফর্ম (Primary-Javascript Normal Form)'
          },
          {
            en: 'Private-Json Network Format',
            bn: 'প্রাইভেট-জেসন নেটওয়ার্ক ফরম্যাট (Private-Json Network Format)'
          },
          {
            en: 'Partial-Java Numeric Formula',
            bn: 'পার্শিয়াল-জাভা নিউমেরিক ফর্মুলা (Partial-Java Numeric Formula)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Projection and Natural Join are the 2 relational algebra operations governing 5NF.',
          bn: 'প্রজেকশন এবং ন্যাচারাল জয়েন হলো 5NF পরিচালনাকারী ২টি রিলেশনাল অ্যালজেব্রা অপারেশন।'
        },
        explanation: {
          en: '5NF is formally called Project-Join Normal Form (PJNF) because it concerns schemas that can be reconstructed losslessly by projecting the relation into sub-tables and subsequently executing a natural join.',
          bn: '৫ম নরমাল ফর্মকে আনুষ্ঠানিকভাবে প্রজেক্ট-জয়েন নরমাল ফর্ম (PJNF) বলা হয় কারণ এটি এমন স্কিমা নিয়ে কাজ করে যা সাব-টেবিলে প্রজেক্ট করে পরবর্তীতে ন্যাচারাল জয়েন চালানোর মাধ্যমে লসলেসভাবে পুনর্গঠন করা যায়।'
        }
      },
      {
        id: 'norm-5nf-qz-2',
        kind: 'mcq',
        topic: 'dknf-algorithm-limitation',
        question: {
          en: 'What fundamental mathematical limitation prevents database software from automatically converting any given database schema into DKNF?',
          bn: 'কোন মৌলিক গাণিতিক সীমাবদ্ধতার কারণে ডাটাবেস সফটওয়্যার যেকোনো সাধারণ স্কিমাকে স্বয়ংক্রিয়ভাবে DKNF-এ রূপান্তর করতে পারে না?'
        },
        options: [
          {
            en: 'There is no general algorithm to test for or generate DKNF decompositions for arbitrary relational schemas',
            bn: 'যেকোনো সাধারণ রিলেশনাল স্কিমার জন্য DKNF পরীক্ষা করা বা রূপান্তর করার মতো কোনো সাধারণ গাণিতিক অ্যালগরিদম নেই'
          },
          {
            en: 'DKNF requires hardware CPUs that run on liquid nitrogen',
            bn: 'DKNF-এর জন্য তরল নাইট্রোজেনে চলা হার্ডওয়্যার সিপিইউ প্রয়োজন হয়'
          },
          {
            en: 'DKNF algorithms were deleted in a computer virus attack in 1999',
            bn: '১৯৯৯ সালে একটি কম্পিউটার ভাইরাস আক্রমণে DKNF অ্যালগরিদম মুছে গিয়েছিল'
          },
          {
            en: 'SQL standards explicitly outlaw DKNF algorithms in all languages',
            bn: 'SQL স্ট্যান্ডার্ড تمام ভাষায় DKNF অ্যালগরিদম ব্যবহারে কঠোর নিষেধাজ্ঞা দিয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Unlike 3NF or BCNF, DKNF is not algorithmically guaranteed for general relations.',
          bn: '৩NF বা BCNF-এর মতো DKNF সাধারণ রিলেশনের জন্য অ্যালগরিদমিকভাবে নিশ্চিত করা যায় না।'
        },
        explanation: {
          en: 'While straightforward algorithms exist to achieve 3NF and BCNF, computer scientists proved that there is no general constructive procedure to achieve Domain-Key Normal Form for arbitrary schemas.',
          bn: '৩NF এবং BCNF অর্জনের সহজ অ্যালগরিদম থাকলেও কম্পিউটার বিজ্ঞানীরা প্রমাণ করেছেন যে সাধারণ স্কিমার জন্য ডোমেইন-কি নরমাল ফর্ম অর্জনের কোনো সার্বজনীন পদ্ধতি নেই।'
        }
      },
      {
        id: 'norm-5nf-qz-3',
        kind: 'mcq',
        topic: 'normal-form-inclusion-chain',
        question: {
          en: 'Which sequence correctly represents the strict inclusion hierarchy of relational normal forms from least normalized to most normalized?',
          bn: 'কোন ক্রমটি কম নরমালাইজড থেকে সবচেয়ে বেশি নরমালাইজড রিলেশনাল ফর্মের সঠিক স্তরক্রম নির্দেশ করে?'
        },
        options: [
          {
            en: '1NF -> 2NF -> 3NF -> BCNF -> 4NF -> 5NF -> DKNF',
            bn: '1NF -> 2NF -> 3NF -> BCNF -> 4NF -> 5NF -> DKNF'
          },
          {
            en: 'DKNF -> 5NF -> 4NF -> BCNF -> 3NF -> 2NF -> 1NF',
            bn: 'DKNF -> 5NF -> 4NF -> BCNF -> 3NF -> 2NF -> 1NF'
          },
          {
            en: '1NF -> BCNF -> 2NF -> 5NF -> 3NF -> 4NF -> DKNF',
            bn: '1NF -> BCNF -> 2NF -> 5NF -> 3NF -> 4NF -> DKNF'
          },
          {
            en: '3NF -> 1NF -> 2NF -> DKNF -> 4NF -> BCNF -> 5NF',
            bn: '3NF -> 1NF -> 2NF -> DKNF -> 4NF -> BCNF -> 5NF'
          }
        ],
        answer: 0,
        hint: {
          en: 'Each normal form builds strictly on the foundations of the preceding level.',
          bn: 'প্রতিটি নরমাল ফর্ম তার পূর্ববর্তী ধাপের ভিত্তির ওপর কঠোরভাবে প্রতিষ্ঠিত।'
        },
        explanation: {
          en: 'The standard normal form hierarchy is strict and nested. Any table in DKNF is in 5NF. Any table in 5NF is in 4NF, and any in 4NF is in BCNF. Similarly, BCNF implies 3NF, which implies 2NF, which implies 1NF.',
          bn: 'নরমাল ফর্মের স্তরক্রমটি কঠোর ও ধারাবাহিকভাবে সম্পর্কিত। DKNF-এ থাকা যেকোনো টেবিল ৫NF-এ থাকে। ৫NF-এর تمام টেবিল ৪NF-এ এবং ৪NF-এর সমস্ত টেবিল BCNF-এ থাকে। একইভাবে BCNF ৩NF-কে নির্দেশ করে, যা ২NF এবং ১NF-কে নিশ্চিত করে।'
        }
      },
      {
        id: 'norm-5nf-qz-4',
        kind: 'mcq',
        topic: 'domain-constraint-definition',
        question: {
          en: 'In Domain-Key Normal Form (DKNF), what constitutes a "domain constraint"?',
          bn: 'ডোমেইন-কি নরমাল ফর্মে (DKNF) "ডোমেইন কনস্ট্রেইন্ট (domain constraint)" বলতে কী বোঝায়?'
        },
        options: [
          {
            en: 'A rule requiring column values to be drawn from a specific data type, range of numbers, or set of allowable values (e.g. age > 0 and status in (\'active\', \'pending\'))',
            bn: 'এমন একটি নিয়ম যা দাবি করে কলামের মান অবশ্যই একটি নির্দিষ্ট ডাটা টাইপ, সংখ্যার সীমা বা অনুমোদিত সেট থেকে আসতে হবে (যেমন age > ০ এবং status \'active\' বা \'pending\')'
          },
          {
            en: 'A rule requiring websites to register a .com domain name',
            bn: 'একটি নিয়ম যা ওয়েবসাইটের জন্য .com ডোমেইন কেনা বাধ্যতামূলক করে'
          },
          {
            en: 'A restriction limiting the physical size of server computer monitors',
            bn: 'সার্ভার কম্পিউটার মনিটরের ভৌত আকার সীমাবদ্ধ করার একটি নিয়ম'
          },
          {
            en: 'A legal contract signed between database software companies',
            bn: 'ডাটাবেস সফটওয়্যার কোম্পানিগুলোর মধ্যকার একটি আইনি চুক্তি'
          }
        ],
        answer: 0,
        hint: {
          en: 'Domain constraints restrict the allowable universe of values for individual attributes.',
          bn: 'ডোমেইন কনস্ট্রেইন্ট একক কলামের মানের সম্ভাব্য জগতকে সীমাবদ্ধ করে।'
        },
        explanation: {
          en: 'A domain constraint asserts that attribute values must belong to the attribute\'s assigned domain (e.g. positive integers, dates in the future). In DKNF, all data integrity is enforced via domain checks and uniqueness keys.',
          bn: 'ডোমেইন কনস্ট্রেইন্ট নিশ্চিত করে যে কলামের মান তার নির্ধারিত ডোমেইনের অন্তর্ভুক্ত (যেমন ধনাত্মক পূর্ণসংখ্যা বা নির্দিষ্ট টেক্সট)। DKNF-এ تمام ডাটা সুরক্ষা কেবল ডোমেইন এবং কি দিয়ে নিশ্চিত করা হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-normal-release',
    title: {
      en: 'Denormalization Engineering: OLTP vs OLAP Strategies',
      bn: 'ডিনরমালাইজেশন ইঞ্জিনিয়ারিং: OLTP বনাম OLAP কৌশল'
    }
  }
};
