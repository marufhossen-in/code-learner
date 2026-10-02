import type { Lesson } from '../../../lib/types';

export const InterfacesAndTheShapeLesson: Lesson = {
  slug: 'interfaces-and-the-shape',
  tech: 'lang-typescript',
  title: {
    en: 'Interfaces and Object Shapes — Contracts, Extension, and Structural Typing',
    bn: 'ইন্টারফেস ও অবজেক্টের গঠন — চুক্তি, এক্সটেনশন ও স্ট্রাকচারাল টাইপিং',
  },
  summary: {
    en: 'Master TypeScript interfaces and structural typing: design object contracts with required, optional, and readonly fields, extend interfaces hierarchically, contrast interfaces with type aliases, and leverage declaration merging for extensible library APIs.',
    bn: 'টাইপস্ক্রিপ্ট ইন্টারফেস ও স্ট্রাকচারাল টাইপিং আয়ত্ত করুন: আবশ্যক, অপশনাল ও রিড-অনলি ফিল্ডসহ অবজেক্ট চুক্তি তৈরি, হায়ারার্কিক্যাল এক্সটেনশন, টাইপ অ্যালিয়াসের সাথে তুলনা এবং লাইব্রেরি এপিআই সম্প্রসারণে ডিক্লারেশন মার্জিং প্রয়োগ।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Object contracts and duck typing in TypeScript', bn: 'WHAT — অবজেক্ট চুক্তি এবং ডাক টাইপিং' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build structured applications in TypeScript, interfaces define the shape of your objects by establishing a formal contract that properties and methods must fulfill. Unlike nominal languages like Java or C# where classes must explicitly name their implemented interfaces, TypeScript uses a structural type system often called duck typing. If two distinct objects share the required properties and types, the compiler considers them completely compatible regardless of origin. Interfaces also support inheritance via extends and allow declaration merging to enrich existing library types.',
        bn: 'যখন আপনি টাইপস্ক্রিপ্টে স্ট্রাকচার্ড অ্যাপ্লিকেশন তৈরি করেন, তখন ইন্টারফেস আপনার অবজেক্টের গঠন নির্ধারণ করে এমন একটি সুনির্দিষ্ট চুক্তি তৈরি করে যা প্রয়োজনীয় প্রপার্টি ও মেথডগুলোর পূরণ করা আবশ্যক করে তোলে। জাভা বা সি# এর মতো নমিনাল ভাষার মতো ক্লাসকে স্পষ্টভাবে ইন্টারফেস বাস্তবায়ন (implements) না করলেও চলে; টাইপস্ক্রিপ্ট স্ট্রাকচারাল টাইপিং (ডাক টাইপিং) মেনে চলে। যদি দুটি ভিন্ন অবজেক্টের প্রয়োজনীয় প্রপার্টি ও টাইপ মিলে যায়, তবে তাদের উৎস যাই হোক না কেন কম্পাইলার তাদের পুরোপুরি সামঞ্জস্যপূর্ণ মনে করে। ইন্টারফেসগুলো extends এর মাধ্যমে উত্তরাধিকার এবং ডিক্লারেশন মার্জিংয়ের মাধ্যমে বিদ্যমান লাইব্রেরি টাইপ সম্প্রসারণ করতে দেয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Interface inheritance and structural compatibility', bn: 'ইন্টারফেস ইনহেরিটেন্স এবং স্ট্রাকচারাল সামঞ্জস্য' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript interface extension and duck typing diagram">
<rect x="30" y="30" width="220" height="110" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">BASE INTERFACE</text>
<text x="45" y="80" font-family="monospace" font-size="11" fill="currentColor">interface UserProfile {</text>
<text x="60" y="100" font-family="monospace" font-size="11" fill="currentColor">readonly id: number;</text>
<text x="60" y="120" font-family="monospace" font-size="11" fill="currentColor">name: string; email?: string;</text>
<text x="45" y="135" font-family="monospace" font-size="11" fill="currentColor">}</text>

<line x1="250" y1="85" x2="380" y2="85" stroke="#4f46e5" stroke-width="2" marker-end="url(#arrow)"/>
<text x="315" y="75" text-anchor="middle" font-size="11" font-weight="700" fill="#4f46e5">extends</text>

<rect x="390" y="20" width="230" height="130" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="505" y="45" text-anchor="middle" font-size="12" font-weight="800" fill="#166534">EXTENDED INTERFACE</text>
<text x="405" y="70" font-family="monospace" font-size="11" fill="currentColor">interface AdminProfile</text>
<text x="405" y="90" font-family="monospace" font-size="11" fill="currentColor">  extends UserProfile {</text>
<text x="420" y="110" font-family="monospace" font-size="11" fill="currentColor">role: "superadmin" | "mod";</text>
<text x="420" y="130" font-family="monospace" font-size="11" fill="currentColor">accessLevel: number;</text>
<text x="405" y="145" font-family="monospace" font-size="11" fill="currentColor">}</text>

<rect x="130" y="170" width="380" height="50" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="320" y="192" text-anchor="middle" font-size="12" font-weight="700" fill="#854d0e">Structural Typing: If shapes match, types match</text>
<text x="320" y="210" text-anchor="middle" font-size="11" fill="currentColor">No explicit implements declaration needed on object literals</text>
</svg>`,
      caption: {
        en: 'AdminProfile extends UserProfile, inheriting id, name, and optional email, while adding role and accessLevel. TypeScript checks that the object structure matches the interface contract.',
        bn: 'AdminProfile UserProfile কে এক্সটেন্ড করে id, name এবং অপশনাল email উত্তরাধিকারসূত্রে পায়, এবং সাথে role ও accessLevel যোগ করে। টাইপস্ক্রিপ্ট অবজেক্টের কাঠামো ইন্টারফেস চুক্তির সাথে মিলিয়ে যাচাই করে।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Interface',
          def: {
            en: 'A named contract that defines the required properties, methods, and types an object must implement.',
            bn: 'একটি নামযুক্ত চুক্তি যা কোনো অবজেক্টের মধ্যে থাকা আবশ্যক প্রপার্টি, মেথড এবং টাইপগুলো সংজ্ঞায়িত করে।',
          },
        },
        {
          term: 'Structural typing',
          def: {
            en: 'A type system where type compatibility and equivalence are determined solely by the object shape and members rather than explicit declarations.',
            bn: 'একটি টাইপ ব্যবস্থা যেখানে কোনো অবজেক্টের সামঞ্জস্য ও সমতা তার বাহ্যিক নাম নয়, বরং ভেতরের প্রপার্টি ও গঠনের ওপর ভিত্তি করে নির্ধারিত হয়।',
          },
        },
        {
          term: 'Declaration merging',
          def: {
            en: 'The compiler feature where multiple interface declarations with the same name in the same scope merge into a single unified definition.',
            bn: 'কম্পাইলারের এমন একটি বৈশিষ্ট্য যেখানে একই স্কোপে একই নামের একাধিক ইন্টারফেস ঘোষণা স্বয়ংক্রিয়ভাবে একটি মাত্র সমন্বিত সংজ্ঞায় একীভূত হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Strong contracts and flexible architectural composition', bn: 'কেন — শক্তিশালী চুক্তি ও নমনীয় আর্কিটেকচারাল কম্পোজিশন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Express domain models cleanly: interfaces define clear boundaries between backend API schemas and frontend components.', bn: 'ডোমেন মডেল স্পষ্টভাবে প্রকাশ: ইন্টারফেস ব্যাকএন্ড এপিআই স্কিমা এবং ফ্রন্টএন্ড উপাদানের মধ্যে স্পষ্ট সীমারেখা তৈরি করে।' },
        { en: 'Compile-time immutability with readonly: prevent accidental property reassignments across complex application state stores.', bn: 'readonly এর মাধ্যমে কম্পাইল-টাইম অপরিবর্তনীয়তা: জটিল স্টেট স্টোরে দুর্ঘটনাবশত প্রপার্টির মান পরিবর্তন রোধ করে।' },
        { en: 'Effortless mock testing: structural typing allows test code to supply partial object literals without instantiating complex class hierarchies.', bn: 'সহজ মক টেস্টিং: স্ট্রাকচারাল টাইপিংয়ের ফলে জটিল ক্লাস তৈরি না করেই সাধারণ অবজেক্ট লিটারেল দিয়ে টেস্টিং সম্পন্ন করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Interface construction in 4 steps', bn: 'HOW — ৪টি ধাপে ইন্টারফেস তৈরি' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare base shape', bn: '১. মূল ইন্টারফেস গঠন' }, text: { en: 'Define core properties using readonly for immutable fields and ? for optional ones.', bn: 'অপরিবর্তনীয় ফিল্ডের জন্য readonly এবং ঐচ্ছিক ফিল্ডের জন্য ? ব্যবহার করে মূল প্রপার্টি ঘোষণা করুন।' } },
        { title: { en: '2. Extend interfaces', bn: '২. ইন্টারফেস এক্সটেনশন' }, text: { en: 'Inherit and specialize contracts using the extends keyword.', bn: 'extends কিওয়ার্ড দিয়ে পূর্ববর্তী চুক্তি উত্তরাধিকারসূত্রে গ্রহণ করে বিশেষায়িত করুন।' } },
        { title: { en: '3. Add index signatures', bn: '৩. ইনডেক্স সিগনেচার যোগ' }, text: { en: 'Allow dynamic dictionary keys using syntax like [key: string]: string.', bn: '[key: string]: string সিনট্যাক্স ব্যবহার করে গতিশীল ডিকশনারি কী অনুমোদিত করুন।' } },
        { title: { en: '4. Merge declarations', bn: '৪. ডিক্লারেশন মার্জিং' }, text: { en: 'Declare an interface with the same name across files to augment library types.', bn: 'লাইব্রেরি টাইপ সম্প্রসারণ করতে একই নামে একাধিক ইন্টারফেস ঘোষণা করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'interface_shape_sim.ts',
      code: `interface UserProfile {
  readonly id: number;
  name: string;
  email?: string;
}

interface AdminProfile extends UserProfile {
  role: "superadmin" | "moderator";
  accessLevel: number;
}

function summarizeAdmin(admin: AdminProfile): string {
  const emailDisplay = admin.email ? admin.email : "none";
  return admin.name + " (ID: " + admin.id + ", Level: " + admin.accessLevel + ", Role: " + admin.role + ", Email: " + emailDisplay + ")";
}

// 1. Instantiating objects matching AdminProfile
const sysAdmin: AdminProfile = {
  id: 101,
  name: "Tanvir",
  role: "superadmin",
  accessLevel: 5,
};

const staffMember: AdminProfile = {
  id: 102,
  name: "Sadia",
  email: "sadia@example.com",
  role: "moderator",
  accessLevel: 3,
};

console.log("Interface and Extension Summary:");
console.log(summarizeAdmin(sysAdmin));
console.log(summarizeAdmin(staffMember));
const combinedLevel = sysAdmin.accessLevel + staffMember.accessLevel;
console.log("Total Admin Profiles: 2, Combined Level: " + combinedLevel);

// Output:
// Interface and Extension Summary:
// Tanvir (ID: 101, Level: 5, Role: superadmin, Email: none)
// Sadia (ID: 102, Level: 3, Role: moderator, Email: sadia@example.com)
// Total Admin Profiles: 2, Combined Level: 8`,
      caption: {
        en: 'The simulation illustrates interface extension: 2 profiles are created with IDs 101 and 102; their access levels 5 and 3 combine to a total level of 8.',
        bn: 'সিমুলেশনটি ইন্টারফেস এক্সটেনশন প্রদর্শন করে: ১০১ এবং ১০২ আইডিসহ ২টি প্রোফাইল তৈরি করা হয়েছে; তাদের অ্যাক্সেস লেভেল ৫ এবং ৩ মিলে মোট লেভেল ৮ হয়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive interface explorer lab', bn: 'INSIDE — জীবন্ত ইন্টারফেস এক্সপ্লোরার ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Explore how 2 admin profiles inherit base user properties. The sysAdmin has access level 5 with no email, while staffMember has level 3 with an email. Their combined access level equals 8. Modifying these fields demonstrates structural type safety right in your browser.',
        bn: '২টি অ্যাডমিন প্রোফাইল কীভাবে মূল ইউজারের প্রপার্টি উত্তরাধিকারসূত্রে পায় তা পরীক্ষা করুন। sysAdmin এর লেভেল ৫ (ইমেইল নেই) এবং staffMember এর লেভেল ৩ (ইমেইলসহ)। তাদের সম্মিলিত অ্যাক্সেস লেভেল ৮। এই ফিল্ডগুলো পরিবর্তন করে ব্রাউজারেই স্ট্রাকচারাল টাইপ নিরাপত্তা পরখ করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Interface lab (modify levels, press Run)', bn: 'Interface lab (লেভেল পরিবর্তন করুন, Run)' },
      html: '<h3>TypeScript Interface Extension</h3>\n<pre id="out"></pre>\n<p>Structural object typing verified.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const p1 = { id: 101, name: "Tanvir", role: "superadmin", accessLevel: 5 };\nconst p2 = { id: 102, name: "Sadia", email: "sadia@example.com", role: "moderator", accessLevel: 3 };\nconst combined = p1.accessLevel + p2.accessLevel;\nconsole.log("Combined access level: " + combined);\ndocument.getElementById("out").textContent = "Admin 1: " + p1.name + " (L" + p1.accessLevel + ") · Admin 2: " + p2.name + " (L" + p2.accessLevel + ") · Total Level: " + combined;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Interface architecture principles', bn: 'ফলাফল — ইন্টারফেস আর্কিটেকচারের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Structural compatibility: objects qualify as valid implementations as long as all required interface shape properties exist.', bn: 'স্ট্রাকচারাল সামঞ্জস্য: প্রয়োজনীয় সব প্রপার্টি বিদ্যমান থাকলেই একটি অবজেক্ট বৈধ ইন্টারফেস বাস্তবায়ন হিসেবে গৃহীত হয়।' },
        { en: 'Composition over inheritance: multiple small interfaces composed together yield cleaner architectures than monolithic structures.', bn: 'ইনহেরিটেন্সের চেয়ে কম্পোজিশন শ্রেয়: মনোলিথিক কাঠামোর বদলে একাধিক ছোট ইন্টারফেস সমন্বয় করে পরিচ্ছন্ন আর্কিটেকচার তৈরি হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common interface traps', bn: 'ডিবাগ — ইন্টারফেসের সাধারণ ফাঁদ' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Readonly does not imply deep immutability', bn: 'readonly গভীর অপরিবর্তনীয়তা নির্দেশ করে না' },
      text: {
        en: 'Marking a property as readonly user: { name: string } prevents reassigning user = other, but allows mutating user.name = "new". Cure: use Readonly<T> or as const for deeply nested immutable objects.',
        bn: 'কোনো প্রপার্টি readonly user: { name: string } করলে user = other পুনরায় অ্যাসাইন করা যায় না, তবে user.name = "new" মিউটেশন সম্ভব থাকে। প্রতিকার: গভীর অবজেক্টে সম্পূর্ণ অপরিবর্তনীয়তার জন্য Readonly<T> বা as const ব্যবহার করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Interface vs Type Alias choice', bn: 'ইন্টারফেস বনাম টাইপ অ্যালিয়াস নির্বাচন' },
      text: {
        en: 'Prefer interfaces for public object APIs and library schemas because they support declaration merging and provide better compiler error performance. Prefer type aliases for unions, primitives, and complex mapped utilities.',
        bn: 'পাবলিক অবজেক্ট এপিআই এবং লাইব্রেরি স্কিমার জন্য ইন্টারফেস ব্যবহার শ্রেয় কারণ এটি ডিক্লারেশন মার্জিং সমর্থন করে। ইউনিয়ন, প্রিমিটিভ এবং জটিল ইউটিলিটি টাইপের জন্য টাইপ অ্যালিয়াস বেছে নিন।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production interface usage', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল ইন্টারফেসের প্রয়োগ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Global window and process augmentation: developers use declaration merging on interface Window to safely register global analytics variables.', bn: 'গ্লোবাল অবজেক্ট সম্প্রসারণ: ডেভেলপাররা interface Window তে ডিক্লারেশন মার্জিং ব্যবহার করে গ্লোবাল অ্যানালিটিক্স ভেরিয়েবল টাইপ-নিরাপদে যোগ করেন।' },
        { en: 'ORM database models (Prisma, TypeORM): interfaces represent SQL table schemas, guaranteeing type sync between database columns and application code.', bn: 'ওআরএম ডাটাবেস মডেল (Prisma, TypeORM): ইন্টারফেস এসকিউএল টেবিল স্কিমা প্রকাশ করে, যা ডাটাবেস কলাম ও অ্যাপ্লিকেশন কোডের সামঞ্জস্য রক্ষা করে।' },
        { en: 'Express.js Request augmentation: declaring interface Request in express extends request payloads to carry authenticated user sessions.', bn: 'Express.js রিকোয়েস্ট সম্প্রসারণ: express এ interface Request ঘোষণা করে রিকোয়েস্ট অবজেক্টে অথেন্টিকেটেড ইউজার সেশন নিরাপদে যুক্ত করা হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Generics and Type Parameters', bn: 'পরবর্তী পাঠ — জেনেরিক ও টাইপ প্যারামিটার' },
    },
    {
      type: 'para',
      text: {
        en: 'With interfaces and structural shapes mastered, Lesson 4 explores how type parameters (<T>) enable writing flexible, reusable functions and data structures without abandoning type safety.',
        bn: 'ইন্টারফেস ও অবজেক্ট গঠন আয়ত্ত করার পর, পাঠ ৪ টাইপ প্যারামিটার (<T>) ব্যবহার করে কীভাবে টাইপ সুরক্ষা বিসর্জন না দিয়েই পুনর্ব্যবহারযোগ্য ফাংশন ও ডেটা স্ট্রাকচার তৈরি করা যায় তা শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-int-ex-1',
      kind: 'mcq',
      topic: 'interface-extend',
      question: {
        en: 'Which TypeScript keyword is used by an interface to inherit properties from another interface?',
        bn: 'অন্য একটি ইন্টারফেস থেকে প্রপার্টি উত্তরাধিকারসূত্রে গ্রহণ করতে টাইপস্ক্রিপ্টে কোন কিওয়ার্ড ব্যবহৃত হয়?',
      },
      options: [
        { en: 'extends', bn: 'extends' },
        { en: 'implements', bn: 'implements' },
        { en: 'inherits', bn: 'inherits' },
        { en: 'includes', bn: 'includes' },
      ],
      answer: 0,
      hint: { en: 'Interfaces use extends to inherit from other interfaces.', bn: 'ইন্টারফেস অন্য ইন্টারফেস থেকে ইনহেরিট করতে extends ব্যবহার করে।' },
      explanation: {
        en: 'The extends keyword allows an interface to copy and specialize the member contracts defined by one or more parent interfaces.',
        bn: 'extends কিওয়ার্ডের মাধ্যমে একটি ইন্টারফেস তার প্যারেন্ট ইন্টারফেসের সংজ্ঞায়িত সমস্ত চুক্তি উত্তরাধিকারসূত্রে গ্রহণ ও বিশেষায়িত করতে পারে।',
      },
    },
    {
      id: 'ts-int-ex-2',
      kind: 'mcq',
      topic: 'interface-calc',
      question: {
        en: 'In our code example, what was the combined access level of the 2 admin profiles (sysAdmin with level 5 and staffMember with level 3)?',
        bn: 'আমাদের কোড উদাহরণে, ২টি অ্যাডমিন প্রোফাইলের (sysAdmin লেভেল ৫ এবং staffMember লেভেল ৩) সম্মিলিত অ্যাক্সেস লেভেল কত ছিল?',
      },
      options: [
        { en: 'Total Admin Profiles: 2, Combined Level: 8', bn: 'মোট অ্যাডমিন প্রোফাইল: ২, সম্মিলিত লেভেল: ৮' },
        { en: 'Total Admin Profiles: 2, Combined Level: 15', bn: 'মোট অ্যাডমিন প্রোফাইল: ২, সম্মিলিত লেভেল: ১৫' },
        { en: 'Total Admin Profiles: 1, Combined Level: 5', bn: 'মোট অ্যাডমিন প্রোফাইল: ১, সম্মিলিত লেভেল: ৫' },
        { en: 'Total Admin Profiles: 3, Combined Level: 10', bn: 'মোট অ্যাডমিন প্রোফাইল: ৩, সম্মিলিত লেভেল: ১০' },
      ],
      answer: 0,
      hint: { en: '5 + 3 = 8 across 2 admin profiles.', bn: '২টি অ্যাডমিন প্রোফাইলে ৫ + ৩ = ৮।' },
      explanation: {
        en: 'sysAdmin has access level 5 and staffMember has access level 3; adding them yields a combined access level of 8.',
        bn: 'sysAdmin এর অ্যাক্সেস লেভেল ৫ এবং staffMember এর ৩; দুটি যোগ করলে সম্মিলিত অ্যাক্সেস লেভেল হয় ৮।',
      },
    },
    {
      id: 'ts-int-ex-3',
      kind: 'mcq',
      topic: 'structural-typing',
      question: {
        en: 'What does structural typing (duck typing) mean in the context of TypeScript interfaces?',
        bn: 'টাইপস্ক্রিপ্ট ইন্টারফেসের ক্ষেত্রে স্ট্রাকচারাল টাইপিং (ডাক টাইপিং) বলতে কী বোঝায়?',
      },
      options: [
        {
          en: 'Type compatibility is based purely on the object properties and shapes, not on explicit class names or declarations',
          bn: 'টাইপের সামঞ্জস্য কেবল অবজেক্টের প্রপার্টি ও গঠনের ওপর নির্ভর করে, কোনো নির্দিষ্ট ক্লাসের নাম বা ঘোষণার ওপর নয়',
        },
        {
          en: 'Every interface must explicitly match an operating system process ID',
          bn: 'প্রতিটি ইন্টারফেসের অপারেটিং সিস্টেম প্রসেস আইডির সাথে হুবহু মিলতে হয়',
        },
        {
          en: 'Types can only be checked when running inside a duck-themed web browser',
          bn: 'কেবল নির্দিষ্ট ব্রাউজারে চালানোর সময়ই টাইপ পরীক্ষা করা যায়',
        },
        {
          en: 'Variables are checked at runtime by inspecting network packets',
          bn: 'নেটওয়ার্ক প্যাকেট পরীক্ষা করে রানটাইমে ভেরিয়েবল যাচাই করা হয়',
        },
      ],
      answer: 0,
      hint: { en: 'If the shape fits the contract, TypeScript accepts it.', bn: 'যদি অবজেক্টের গঠন চুক্তির সাথে মিলে যায়, তবে টাইপস্ক্রিপ্ট তা গ্রহণ করে।' },
      explanation: {
        en: 'TypeScript checks whether the actual properties on a value satisfy the shape declared by the interface, ignoring nominal class names.',
        bn: 'টাইপস্ক্রিপ্ট যাচাই করে মানের ভেতরের প্রপার্টিগুলো ইন্টারফেসের কাঠামোর শর্ত পূরণ করে কিনা, কোনো ক্লাসের নামের ওপর তা নির্ভর করে না।',
      },
    },
    {
      id: 'ts-int-ex-4',
      kind: 'predict',
      topic: 'optional-property',
      question: {
        en: 'Which punctuation symbol marks an interface property as optional (e.g. email?: string)?',
        bn: 'কোন বিরামচিহ্নটি ইন্টারফেসের প্রপার্টিকে ঐচ্ছিক হিসেবে চিহ্নিত করে (যেমন email?: string)?',
      },
      answer: '?',
      accept: ['?', 'question mark', 'question'],
      hint: { en: 'A single question mark before the colon.', bn: 'কোলনের আগে একটি প্রশ্নবোধক চিহ্ন।' },
      explanation: {
        en: 'Placing a question mark (?) after the property name marks it as optional, allowing values of type T | undefined.',
        bn: 'প্রপার্টির নামের পরে প্রশ্নবোধক চিহ্ন (?) দিলে তা ঐচ্ছিক হিসেবে চিহ্নিত হয়, যা T | undefined মান গ্রহণ করতে পারে।',
      },
    },
  ],
  quiz: {
    id: 'interfaces-shape-quiz',
    title: { en: 'Lesson 3 exam', bn: 'পাঠ ৩ পরীক্ষা' },
    questions: [
      {
        id: 'ts-int-q1',
        kind: 'mcq',
        topic: 'declaration-merging',
        question: {
          en: 'What happens when two interface declarations with the exact same name are declared within the same scope?',
          bn: 'একই স্কোপের ভেতর হুবহু একই নামে দুটি ইন্টারফেস ঘোষণা করা হলে কী ঘটে?',
        },
        options: [
          {
            en: 'The compiler merges their properties into a single unified interface definition',
            bn: 'কম্পাইলার তাদের প্রপার্টিগুলোকে একটি মাত্র সমন্বিত ইন্টারফেস সংজ্ঞায় একীভূত (merge) করে',
          },
          {
            en: 'The compiler crashes and corrupts the disk workspace',
            bn: 'কম্পাইলার ক্র্যাশ করে ডিস্ক ওয়ার্কস্পেস নষ্ট করে ফেলে',
          },
          {
            en: 'The second declaration overrides and deletes the first completely',
            bn: 'দ্বিতীয় ঘোষণাটি প্রথমটিকে সম্পূর্ণ মুছে ফেলে প্রতিস্থাপন করে',
          },
          {
            en: 'The JavaScript runtime converts all strings to numbers',
            bn: 'জাভাস্ক্রিপ্ট রানটাইম সমস্ত স্ট্রিংকে সংখ্যায় রূপান্তর করে',
          },
        ],
        answer: 0,
        hint: { en: 'This capability is called declaration merging.', bn: 'এই সক্ষমতাকে ডিক্লারেশন মার্জিং বলা হয়।' },
        explanation: {
          en: 'TypeScript automatically performs declaration merging for interfaces with the same name, combining all members into a single contract.',
          bn: 'একই নামের ইন্টারফেসের জন্য টাইপস্ক্রিপ্ট স্বয়ংক্রিয়ভাবে ডিক্লারেশন মার্জিং করে সমস্ত সদস্যকে একটি যুক্ত চুক্তিতে পরিণত করে।',
        },
      },
      {
        id: 'ts-int-q2',
        kind: 'mcq',
        topic: 'readonly-modifier',
        question: {
          en: 'What effect does the readonly modifier have when placed before an interface property like readonly id: number?',
          bn: 'ইন্টারফেস প্রপার্টির আগে readonly id: number এর মতো readonly মডিফায়ার দিলে কী প্রভাব পড়ে?',
        },
        options: [
          {
            en: 'The compiler prevents reassignment of that property after the object is created',
            bn: 'অবজেক্ট তৈরির পর কম্পাইলার সেই প্রপার্টির মান পুনরায় পরিবর্তন বা অ্যাসাইন করতে বাধা দেয়',
          },
          {
            en: 'The property value is hidden from console.log output',
            bn: 'প্রপার্টির মানটি console.log আউটপুট থেকে লুকিয়ে রাখা হয়',
          },
          {
            en: 'The property consumes zero bits of system memory',
            bn: 'প্রপার্টিটি সিস্টেম মেমরির শূন্য বিট খরচ করে',
          },
          {
            en: 'The variable can only be accessed on Tuesday',
            bn: 'ভেরিয়েবলটি কেবল মঙ্গলবারে অ্যাক্সেস করা যায়',
          },
        ],
        answer: 0,
        hint: { en: 'readonly creates compile-time immutability for that property.', bn: 'readonly সেই প্রপার্টির জন্য কম্পাইল-টাইম অপরিবর্তনীয়তা নিশ্চিত করে।' },
        explanation: {
          en: 'The readonly modifier signals to TypeScript that the property must not be reassigned after object initialization.',
          bn: 'readonly মডিফায়ার টাইপস্ক্রিপ্টকে নির্দেশ করে যে অবজেক্ট ইনিশিয়ালাইজেশনের পরে ওই প্রপার্টি পুনরায় অ্যাসাইন করা নিষিদ্ধ।',
        },
      },
      {
        id: 'ts-int-q3',
        kind: 'mcq',
        topic: 'id-numbers',
        question: {
          en: 'In our code simulation, what were the numeric IDs assigned to sysAdmin and staffMember?',
          bn: 'আমাদের কোড সিমুলেশনে sysAdmin এবং staffMember এর জন্য কোন নিউমেরিক আইডিগুলো বরাদ্দ করা হয়েছিল?',
        },
        options: [
          { en: 'IDs 101 and 102', bn: 'আইডি ১০১ এবং ১০২' },
          { en: 'IDs 1 and 2', bn: 'আইডি ১ এবং ২' },
          { en: 'IDs 999 and 1000', bn: 'আইডি ৯৯৯ এবং ১০০০' },
          { en: 'IDs 500 and 600', bn: 'আইডি ৫০০ এবং ৬০০' },
        ],
        answer: 0,
        hint: { en: 'sysAdmin has ID 101, staffMember has ID 102.', bn: 'sysAdmin এর আইডি ১০১, staffMember এর আইডি ১০২।' },
        explanation: {
          en: 'The code explicitly instantiated sysAdmin with id: 101 and staffMember with id: 102.',
          bn: 'কোডে স্পষ্টভাবেই sysAdmin এর id: 101 এবং staffMember এর id: 102 হিসেবে তৈরি করা হয়েছিল।',
        },
      },
      {
        id: 'ts-int-q4',
        kind: 'predict',
        topic: 'structural-term',
        question: {
          en: 'What colloquial term describes TypeScript structural typing based on the adage “if it walks like a duck and quacks like a duck”?',
          bn: '“যদি এটা হাঁসের মতো হাঁটে এবং হাঁসের মতো ডাকে” প্রবাদের ওপর ভিত্তি করে টাইপস্ক্রিপ্ট স্ট্রাকচারাল টাইপিংকে প্রচলিত কোন নামে ডাকা হয়?',
        },
        answer: 'Duck typing',
        accept: ['duck typing', 'duck', 'structural', 'structural typing'],
        hint: { en: 'Named after an aquatic bird that quacks.', bn: 'প্যাঁকপ্যাক করা একটি জলচর পাখির নামানুসারে।' },
        explanation: {
          en: 'Duck typing expresses that an object suitability is determined by the presence of certain methods and properties, rather than its nominal class.',
          bn: 'ডাক টাইপিং প্রকাশ করে যে কোনো অবজেক্টের যোগ্যতা তার নির্দিষ্ট মেথড ও প্রপার্টির উপস্থিতির ওপর নির্ভর করে, তার কোনো ক্লাসের নামের ওপর নয়।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'generics-and-the-param',
    title: { en: 'Generics and Type Parameters', bn: 'জেনেরিক ও টাইপ প্যারামিটার' },
  },
};
