import type { Lesson } from '../../../lib/types';

export const RecordsAndTheInitLesson: Lesson = {
  slug: 'records-and-the-init',
  tech: 'lang-csharp',
  title: {
    en: 'Records, Init-Only Properties & Immutability',
    bn: 'রেকর্ডস, Init-অনলি প্রপার্টি এবং ইমিউটেবিলিটি'
  },
  summary: {
    en: 'Master immutable data modeling in modern C#. Compare classes with records, understand compiler-synthesized value equality (Equals, GetHashCode), enforce thread safety using init-only properties, perform non-destructive mutation with "with" expressions, and compare record class vs record struct.',
    bn: 'আধুনিক C#-এ ইমিউটেবল ডেটা মডেলিং আয়ত্ত করুন। ক্লাসের সাথে রেকর্ডের তুলনা, কম্পাইলারের ভ্যালু সমতা (Equals, GetHashCode), init-অনলি প্রপার্টি দিয়ে থ্রেড নিরাপত্তা, "with" এক্সপ্রেশন দিয়ে নন-ডেস্ট্রাক্টিভ মিউটেশন এবং record class বনাম record struct-এর গভীর তুলনা।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'records-and-value-equality-heading',
      text: {
        en: 'Positional Records, Init-Only Properties, and Value Equality',
        bn: 'পজিশনাল রেকর্ডস, Init-অনলি প্রপার্টি এবং ভ্যালু সমতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In enterprise application architecture, sharing mutable objects across concurrent threads frequently triggers subtle race conditions and state corruption. Modern C# (the type-safe object-oriented language) addresses this hazard with records. Introduced in C# 9 and expanded in C# 10, a record is a specialized type optimized for immutable data modeling. When declared using positional syntax ("public record User(int Id, string Name)"), the Roslyn compiler synthesizes boilerplate code automatically. It emits init-only properties ("{ get; init; }"), value-based equality methods (Equals, GetHashCode, ==, !=), and a deconstructor. Two distinct record instances containing identical values evaluate as equal.',
        bn: 'এন্টারপ্রাইজ সফটওয়্যার আর্কিটেকচারে কনকারেন্ট থ্রেডে পরিবর্তনশীল অবজেক্ট শেয়ার করলে প্রায়ই রেস কন্ডিশন এবং মারাত্মক ডেটা বিকৃতি ঘটে। আধুনিক C# (টাইপ-সেফ অবজেক্ট-ওরিয়েন্টেড ভাষা) রেকর্ড (record) ফিচারের মাধ্যমে এই ঝুঁকির চমৎকার সমাধান দিয়েছে। C# ৯ এ যুক্ত এবং C# ১০ এ পরিবর্ধিত রেকর্ড হলো অপরিবর্তনীয় ডেটা মডেলিংয়ের একটি বিশেষ রূপ। পজিশনাল সিনট্যাক্স ("public record User(int Id, string Name)") দিয়ে ডিক্লেয়ার করলে Roslyn কম্পাইলার নিজে থেকেই যাবতীয় প্রয়োজনীয় কোড তৈরি করে। এটি init-অনলি প্রপার্টি ("{ get; init; }"), মান-ভিত্তিক সমতা মেথড (Equals, GetHashCode, ==, !=) এবং ডিকনস্ট্রাক্টর প্রস্তুত করে। ফলে ২ টি ভিন্ন রেকর্ড অবজেক্টের ভেতরের মান এক হলে তারা স্বয়ংক্রিয়ভাবে সমান হিসেবে গণ্য হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural comparison between class reference equality, record value equality, and non-destructive "with" mutation.',
        bn: 'চিত্র ১: ক্লাসের রেফারেন্স সমতা, রেকর্ডের মান সমতা এবং "with" এক্সপ্রেশন দিয়ে নন-ডেস্ট্রাক্টিভ মিউটেশনের তুলনা।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">C# RECORD VALUE EQUALITY &amp; NON-DESTRUCTIVE MUTATION</text>

  <!-- Step 1: Class Ref Equality -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#b91c1c" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Class Equality</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="68" fill="#f87171" font-size="9" font-family="monospace">c1 == c2 is FALSE</text>
    <text x="15" y="85" fill="#f87171" font-size="8" font-family="monospace">Compares Pointers</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="15" y="130" fill="#f87171" font-size="9" font-family="monospace">Reference Equality</text>

    <text x="15" y="215" fill="#f87171" font-size="10" font-family="sans-serif">Default Class Logic</text>
  </g>

  <!-- Step 2: Record Value Equality -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Record Equality</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">r1 == r2 is TRUE</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Compares Properties</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Synthesized Equals</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Structural Equality</text>
  </g>

  <!-- Step 3: With Mutation -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#0284c7" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. "with" Expression</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">var r3 = r1 with</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">{ Role = "Admin" };</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Clones + Overrides</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Original Unchanged</text>
  </g>

  <!-- Step 4: Record Struct -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Record Struct</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">record struct Point</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Stack Allocated</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Zero Heap Garbage</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Peak Micro-Speed</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'with-expressions-and-record-structs-heading',
      text: {
        en: 'Non-Destructive Mutation and Record Structs',
        bn: 'নন-ডেস্ট্রাক্টিভ মিউটেশন এবং রেকর্ড স্ট্রাক্টস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because records are immutable, developers cannot modify their properties after instantiation. Instead, C# provides non-destructive mutation via the "with" expression. Using "var updated = original with { Name = "NewName" }", the runtime clones the existing record via a synthesized copy constructor and applies the specified property changes to the new instance. The original record remains unchanged. In C# 10, Microsoft introduced "record struct". While standard records ("record class") allocate on the managed heap, a "readonly record struct" lives directly on the execution stack. This delivers value equality and immutability with zero garbage collection allocations.',
        bn: 'যেহেতু রেকর্ডগুলো অপরিবর্তনীয়, তাই অবজেক্ট তৈরির পরে কোনো প্রপার্টির মান সরাসরি বদলানো যায় না। এর পরিবর্তে C# "with" এক্সপ্রেশনের মাধ্যমে নন-ডেস্ট্রাক্টিভ মিউটেশনের সুবিধা দেয়। "var updated = original with { Name = "NewName" }" লিখলে রানটাইম একটি কপি কনস্ট্রাক্টরের মাধ্যমে পূর্বের রেকর্ড অবজেক্ট ক্লোন করে নতুনটিতে কাঙ্ক্ষিত মান বসিয়ে দেয়। মূল অবজেক্টটি সম্পূর্ণ অপরিবর্তিত থাকে। C# ১০ সংস্করণে মাইক্রোসফট "record struct" যুক্ত করেছে। সাধারণ রেকর্ড ("record class") হিপ মেমোরিতে বরাদ্দ হলেও একটি "readonly record struct" সরাসরি স্ট্যাক মেমোরিতে অবস্থান করে। ফলে এটি কোনো গার্বেজ কালেকশন খরচ ছাড়াই নিখুঁত মান সমতা নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of C# positional records: Value-based equality checking and non-destructive mutation via "with" expression cloning.',
        bn: 'C# পজিশনাল রেকর্ড, মান-ভিত্তিক সমতা এবং "with" ক্লোনিং মিউটেশনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of C# Positional Records & Non-Destructive Mutation

export interface UserRecord {
  id: number;
  name: string;
  role: string;
}

export class RecordSimulator {
  // Simulating compiler-generated value equality (Equals / ==)
  public static areEqual(a: UserRecord, b: UserRecord): boolean {
    return a.id === b.id && a.name === b.name && a.role === b.role;
  }

  // Simulating "with" expression: non-destructive mutation
  public static withMutation(source: UserRecord, overrides: Partial<UserRecord>): UserRecord {
    return {
      ...source,
      ...overrides
    };
  }

  // Simulating record Deconstruct
  public static deconstruct(record: UserRecord): [number, string, string] {
    return [record.id, record.name, record.role];
  }
}

// Execution demonstration
const user1: UserRecord = { id: 101, name: 'Alice Smith', role: 'Viewer' };
const user2: UserRecord = { id: 101, name: 'Alice Smith', role: 'Viewer' };

// Test 1: Value equality (structural comparison)
console.log('Record Value Equality (user1 == user2):', RecordSimulator.areEqual(user1, user2)); // true
console.log('Reference Identity Equality (user1 === user2):', user1 === user2); // false

// Test 2: Non-destructive mutation using "with"
const adminUser = RecordSimulator.withMutation(user1, { role: 'Admin' });
console.log('Original Role Preserved:', user1.role); // 'Viewer'
console.log('Mutated Clone Role:', adminUser.role); // 'Admin'
console.log('Original and Clone Equality:', RecordSimulator.areEqual(user1, adminUser)); // false

// Test 3: Positional Deconstruction
const [id, name, role] = RecordSimulator.deconstruct(adminUser);
console.log(\`Deconstructed: \${id} - \${name} (\${role})\`);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Record',
          def: {
            en: 'C# language type designed for immutable data encapsulation with compiler-synthesized value equality.',
            bn: 'C# টাইপ যা কম্পাইলারের ভ্যালু সমতা সহ অপরিবর্তনীয় ডেটা সংরক্ষণের জন্য তৈরি।'
          }
        },
        {
          term: 'Init-Only Property',
          def: {
            en: 'Property declared with an "init" accessor that can only be assigned during object construction.',
            bn: 'প্রপার্টি যা কেবলমাত্র অবজেক্ট তৈরির সময় মান গ্রহণ করে এবং পরে অপরিবর্তনীয় থাকে।'
          }
        },
        {
          term: 'Non-Destructive Mutation',
          def: {
            en: 'Pattern creating a modified copy of an immutable record using the "with" keyword while leaving the original intact.',
            bn: '"with" কিওয়ার্ড দিয়ে মূল অবজেক্ট ঠিক রেখে পরিবর্তিত একটি নতুন কপি তৈরির পদ্ধতি।'
          }
        },
        {
          term: 'Record Struct',
          def: {
            en: 'Value type record introduced in C# 10 that lives on the stack, eliminating heap allocations for small models.',
            bn: 'C# ১০-এর ভ্যালু টাইপ রেকর্ড যা স্ট্যাকে অবস্থান করে মেমোরি খরচ শূন্যে নামিয়ে আনে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'record-value-equality-ex1',
      kind: 'mcq',
      topic: 'record-structural-value-equality',
      question: {
        en: 'How does the C# compiler determine equality between two separate instances of a "record class"?',
        bn: 'একটি "record class"-এর দুটি পৃথক অবজেক্টের মধ্যে C# কম্পাইলার কীভাবে সমতা (equality) নির্ধারণ করে?'
      },
      options: [
        {
          en: 'It compares the values of all synthesized properties structural-wise; if every property is equal, the two records evaluate as equal even if stored at different heap addresses',
          bn: 'এটি কাঠামোগতভাবে প্রতিটি প্রপার্টির মান তুলনা করে; প্রতিটি প্রপার্টি সমান হলে মেমোরির ভিন্ন স্থানে থাকলেও রেকর্ড দুটিকে সমান ধরা হয়'
        },
        {
          en: 'It checks if both variables were created on a Monday',
          bn: 'উভয় ভেরিয়েবল সোমবারে তৈরি হয়েছে কিনা তা পরীক্ষা করে'
        },
        {
          en: 'Records can never be compared for equality in C#',
          bn: 'C#-এ রেকর্ড কখনোই সমতার জন্য তুলনা করা যায় না'
        },
        {
          en: 'It deletes the second record automatically',
          bn: 'এটি দ্বিতীয় রেকর্ডটিকে স্বয়ংক্রিয়ভাবে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Records synthesize value equality based on property values.',
        bn: 'রেকর্ড মেমোরির ঠিকানার বদলে ভেতরের তথ্যের মান তুলনা করে সিদ্ধান্ত নেয়।'
      },
      explanation: {
        en: 'Unlike classes that compare heap references, records automatically implement IEquatable<T> and override Equals to perform value-based structural comparisons.',
        bn: 'ফলে ডেটা ট্রান্সফার অবজেক্টের সমতা যাচাই করতে কোনো কাস্টম কোড লিখতে হয় না।'
      }
    },
    {
      id: 'init-only-property-assignment-ex2',
      kind: 'mcq',
      topic: 'init-only-property-mutation-timing',
      question: {
        en: 'When is code permitted to assign a value to a C# property declared with the "init" accessor ("public string Name { get; init; }")?',
        bn: '"init" অ্যাক্সেসরযুক্ত C# প্রপার্টিতে ("public string Name { get; init; }") কখন মান নির্ধারণ করার অনুমতি থাকে?'
      },
      options: [
        {
          en: 'Only during object initialization (inside constructor bodies or object initializer blocks); once construction finishes, the property becomes completely read-only',
          bn: 'কেবল অবজেক্ট তৈরির সময় (কনস্ট্রাক্টরের ভেতর বা অবজেক্ট ইনিশিয়ালাইজার ব্লকে); তৈরি সম্পন্ন হলে প্রপার্টিটি পুরোপুরি রিড-অনলি হয়ে যায়'
        },
        {
          en: 'At any point in the entire application lifecycle without restriction',
          bn: 'অ্যাপ্লিকেশন চলাকালীন যেকোনো সময় কোনো বাধা ছাড়াই'
        },
        {
          en: 'Only inside static asynchronous background methods',
          bn: 'কেবল স্ট্যাটিক অ্যাসিঙ্ক্রোনাস ব্যাকগ্রাউন্ড মেথডের ভেতর'
        },
        {
          en: 'Properties with "init" can never receive any value',
          bn: '"init" যুক্ত প্রপার্টি কখনোই কোনো মান গ্রহণ করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: '"init" permits assignment only during construction, enforcing immutability.',
        bn: '"init" কেবল অবজেক্ট তৈরির মুহূর্তেই মান নেওয়ার অনুমতি দেয়, যাতে পরবর্তীতে কেউ মান বদলাতে না পারে।'
      },
      explanation: {
        en: 'The init accessor guarantees immutability while allowing clean object initializer syntax ("new Product { Name = ... }"). Attempting to modify it later produces a compile error.',
        bn: 'কনস্ট্রাকশন শেষ হলে প্রপার্টি লক হয়ে যাওয়ায় মাল্টি-থ্রেডিংয়ে ডেটা সবসময় নিরাপদ থাকে।'
      }
    },
    {
      id: 'with-expression-nondestructive-mutation-ex3',
      kind: 'mcq',
      topic: 'with-expression-cloning-nondestructive-mutation',
      question: {
        en: 'What happens to the original record "p1" when executing "var p2 = p1 with { Role = "Admin" };"?',
        bn: '"var p2 = p1 with { Role = "Admin" };" এক্সিকিউট করলে মূল রেকর্ড "p1"-এর কী ঘটে?'
      },
      options: [
        {
          en: 'The original record "p1" remains completely untouched and unmodified; the runtime creates a cloned new record "p2" with only the Role property updated',
          bn: 'মূল রেকর্ড "p1" সম্পূর্ণ অবিকৃত ও অপরিবর্তিত থাকে; রানটাইম একটি নতুন ক্লোন রেকর্ড "p2" তৈরি করে যাতে কেবল Role প্রপার্টিটি আপডেট থাকে'
        },
        {
          en: '"p1" is permanently deleted from computer RAM',
          bn: '"p1" কম্পিউটারের র্যাম থেকে চিরতরে মুছে যায়'
        },
        {
          en: '"p1" has its Role changed to "Admin" destructively in place',
          bn: '"p1"-এর Role সরাসরি বদলে গিয়ে আগের মান হারিয়ে ফেলে'
        },
        {
          en: 'The "with" expression crashes the program with a StackOverflowException',
          bn: '"with" এক্সপ্রেশন StackOverflowException দিয়ে প্রোগ্রাম ক্র্যাশ করায়'
        }
      ],
      answer: 0,
      hint: {
        en: '"with" performs non-destructive mutation by cloning with modifications.',
        bn: '"with" মূল অবজেক্ট না ছুঁয়ে নতুন একটি পরিবর্তিত কপি তৈরি করে।'
      },
      explanation: {
        en: 'The "with" expression uses the compiler-generated copy constructor to clone all properties and override designated fields, preserving immutability.',
        bn: 'আসল অবজেক্টের নিরাপত্তা বজায় রেখে সহজে পরিবর্তিত কপি তৈরির এটিই আদর্শ উপায়।'
      }
    },
    {
      id: 'record-struct-vs-record-class-ex4',
      kind: 'mcq',
      topic: 'record-struct-value-type-stack-allocation',
      question: {
        en: 'What is the primary memory difference between a "record class" and a "record struct" in C# 10?',
        bn: 'C# ১০-এ একটি "record class" এবং একটি "record struct"-এর মধ্যে প্রধান মেমোরি পার্থক্য কী?'
      },
      options: [
        {
          en: 'A record class is a reference type allocated on the managed heap, whereas a record struct is a value type typically allocated inline on the stack with zero garbage collector allocations',
          bn: 'record class হলো একটি রেফারেন্স টাইপ যা হিপে সংরক্ষিত হয়, আর record struct হলো একটি ভ্যালু টাইপ যা সরাসরি স্ট্যাক মেমোরিতে থেকে কোনো জিসি চাপ সৃষ্টি করে না'
        },
        {
          en: 'A record struct can only contain integer numbers',
          bn: 'record struct কেবল পূর্ণসংখ্যা ধারণ করতে পারে'
        },
        {
          en: 'A record class cannot be passed into methods',
          bn: 'record class মেথডের ভেতর পাস করা যায় না'
        },
        {
          en: 'There is zero difference between record class and record struct',
          bn: 'record class এবং record struct এর মধ্যে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'record struct is a value type (stack); record class is a reference type (heap).',
        bn: 'record struct স্ট্যাক মেমোরিতে চলে, আর record class হিপ মেমোরিতে অবজেক্ট বানায়।'
      },
      explanation: {
        en: 'By declaring "readonly record struct", developers gain all the benefits of records (value equality, with expressions, deconstructors) without any managed heap allocation overhead.',
        bn: 'ছোট ছোট ডেটা কাঠামোর জন্য record struct ব্যবহার করলে উচ্চগতির সার্ভিসে চমৎকার মেমোরি সাশ্রয় হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-records-and-the-init',
    title: {
      en: 'C# Records & Immutability Mastery Quiz',
      bn: 'C# রেকর্ডস এবং ইমিউটেবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-positional-record-deconstruction',
        kind: 'mcq',
        topic: 'positional-record-synthesized-deconstruct',
        question: {
          en: 'How does positional record declaration enable pattern matching and tuple deconstruction in modern C#?',
          bn: 'পজিশনাল রেকর্ড ডিক্লেয়ারেশন কীভাবে আধুনিক C#-এ প্যাটার্ন ম্যাচিং এবং টাপল ডিকনস্ট্রাকশন সমর্থন করে?'
        },
        options: [
          {
            en: 'The compiler synthesizes a public "Deconstruct" method with "out" parameters matching the positional parameters, allowing syntax like "var (id, name) = userRecord;"',
            bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে পজিশনাল প্যারামিটারের সাথে মিল রেখে "out" প্যারামিটারযুক্ত একটি পাবলিক "Deconstruct" মেথড তৈরি করে, ফলে "var (id, name) = userRecord;" লেখা সম্ভব হয়'
          },
          {
            en: 'It converts the record into a JSON string on disk',
            bn: 'এটি রেকর্ডটিকে ডিস্কের জেসন স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'It formats the hard drive before deconstruction',
            bn: 'এটি ডিকনস্ট্রাকশনের আগে হার্ড ড্রাইভ ফরম্যাট করে দেয়'
          },
          {
            en: 'Deconstruction requires writing 50 lines of custom C++ code',
            bn: 'ডিকনস্ট্রাকশনের জন্য ৫০ লাইন কাস্টম C++ কোড লিখতে হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Positional records synthesize a Deconstruct method automatically.',
          bn: 'কম্পাইলার নিজে থেকেই Deconstruct মেথড তৈরি করে দেওয়ায় সরাসরি ভেরিয়েবলে মান বের করে নেওয়া যায়।'
        },
        explanation: {
          en: 'Positional parameters generate both constructor parameters and corresponding Deconstruct out parameters, enabling tuple deconstruction and positional pattern matching.',
          bn: 'সহজে টাপল সিনট্যাক্স দিয়ে ফিল্ডগুলো আলাদা করতে এটি সাহায্য করে।'
        }
      },
      {
        id: 'quiz-record-gethashcode-collection-safety',
        kind: 'mcq',
        topic: 'record-gethashcode-dictionary-safety',
        question: {
          en: 'Why is it safe to use immutable records as keys in a "Dictionary<TKey, TValue>" or "HashSet<T>" in C#?',
          bn: 'C#-এ একটি "Dictionary<TKey, TValue>" বা "HashSet<T>"-এর কি (Key) হিসেবে ইমিউটেবল রেকর্ড ব্যবহার করা কেন নিরাপদ?'
        },
        options: [
          {
            en: 'Because their properties cannot mutate after creation, their synthesized GetHashCode() value remains strictly constant throughout the collection lifetime, preventing lost-key lookups',
            bn: 'যেহেতু অবজেক্ট তৈরির পর প্রপার্টি বদলানো যায় না, তাই এর GetHashCode() মান সর্বদা ধ্রুবক থাকে এবং ডিকশনারিতে কি হারিয়ে যাওয়ার কোনো ঝুঁকি থাকে না'
          },
          {
            en: 'Dictionaries only accept record types as keys',
            bn: 'ডিকশনারি কেবল রেকর্ড টাইপকেই কি হিসেবে গ্রহণ করে'
          },
          {
            en: 'Records encrypt dictionary keys using AES-256',
            bn: 'রেকর্ড ডিকশনারির কি-গুলোকে AES-256 দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'HashSet automatically converts records into integers',
            bn: 'HashSet নিজে থেকেই রেকর্ডগুলোকে পূর্ণসংখ্যায় রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Immutable objects produce stable hash codes, preserving dictionary bucket locations.',
          bn: 'ইমিউটেবল অবজেক্টের হ্যাশ কোড কখনোই বদলায় না, ফলে ডিকশনারির হ্যাশ বাকেট সবসময় অক্ষত থাকে।'
        },
        explanation: {
          en: 'If an object used as a hash key mutates its hash-participating properties, its hash code changes and the hash table can no longer locate the bucket. Immutability guarantees key safety.',
          bn: 'পরিবর্তনশীল অবজেক্ট কি হিসেবে ব্যবহার করলে মেমোরিতে ডেটা হারিয়ে যাওয়ার ঝুঁকি থাকে; রেকর্ড তা প্রতিরোধ করে।'
        }
      },
      {
        id: 'quiz-shallow-copy-with-expression-reference-types',
        kind: 'mcq',
        topic: 'with-expression-shallow-copy-behavior',
        question: {
          en: 'What occurs when using the "with" expression on a record that contains a reference type property (such as a List<string>)?',
          bn: 'একটি রেকর্ডের ভেতর যদি রেফারেন্স টাইপ প্রপার্টি (যেমন List<string>) থাকে, তবে "with" এক্সপ্রেশন ব্যবহার করলে কী ঘটে?'
        },
        options: [
          {
            en: 'The "with" expression performs a shallow copy: the new record receives a copy of the reference pointing to the exact same list instance in memory',
            bn: '"with" এক্সপ্রেশন একটি শ্যালো কপি (shallow copy) সম্পন্ন করে: নতুন রেকর্ডটি রেফারেন্সের একটি কপি পায় যা মেমোরির ঠিক একই তালিকার অবজেক্টকে নির্দেশ করে'
          },
          {
            en: 'The compiler performs a deep clone of the entire object graph',
            bn: 'কম্পাইলার ভেতরের সমস্ত অবজেক্টকে ডিপ ক্লোন করে ফেলে'
          },
          {
            en: 'The list is automatically emptied of all items',
            bn: 'তালিকা থেকে সমস্ত আইটেম স্বয়ংক্রিয়ভাবে মুছে ফেলা হয়'
          },
          {
            en: 'Records are forbidden from containing collections',
            bn: 'রেকর্ডের ভেতর কালেকশন রাখা সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: '"with" performs a shallow memberwise copy of references.',
          bn: '"with" একটি শ্যালো কপি করে, অর্থাৎ রেফারেন্স ফিল্ডগুলো একই হিপ অবজেক্টের দিকে নির্দেশ করে থাকে।'
        },
        explanation: {
          en: 'Synthesized copy constructors copy references directly (shallow copy). To guarantee total immutability, inner collections should use ImmutableArray<T> or ImmutableList<T>.',
          bn: 'ভেতরের তালিকারও পূর্ণ সুরক্ষা নিশ্চিত করতে ImmutableArray বা ImmutableList ব্যবহার করা উচিত।'
        }
      },
      {
        id: 'quiz-record-tostring-formatted-output',
        kind: 'mcq',
        topic: 'record-tostring-synthesized-formatting',
        question: {
          en: 'What output is generated by calling "Console.WriteLine(user)" on a positional record "User(int Id, string Name)" initialized with Id = 42 and Name = "Sarah"?',
          bn: 'Id = ৪২ এবং Name = "Sarah" দিয়ে তৈরি পজিশনাল রেকর্ড "User(int Id, string Name)"-এ "Console.WriteLine(user)" কল করলে কী আউটপুট প্রদর্শিত হয়?'
        },
        options: [
          {
            en: 'User { Id = 42, Name = Sarah } (a clean, synthesized string displaying the type name and all property values)',
            bn: 'User { Id = 42, Name = Sarah } (একটি সুন্দর কম্পাইলার ফরম্যাট যাতে টাইপ নাম ও প্রতিটি প্রপার্টির মান দেখা যায়)'
          },
          {
            en: 'System.Object (the raw assembly class name)',
            bn: 'System.Object (কাঁচা ক্লাস নেম)'
          },
          {
            en: 'An empty blank line',
            bn: 'একটি সম্পূর্ণ ফাঁকা লাইন'
          },
          {
            en: 'The numerical memory address of the pointer',
            bn: 'পয়েন্টারের মেমোরি অ্যাড্রেস সংখ্যা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Records synthesize a human-readable ToString showing all property values.',
          bn: 'রেকর্ড নিজে থেকেই একটি চমৎকার ToString তৈরি করে যা ডিবাগিংয়ে সাহায্য করে।'
        },
        explanation: {
          en: 'The compiler generates a specialized PrintMembers method and ToString override that formats the record and its contents cleanly for logging and diagnostics.',
          bn: 'লগিং বা ডিবাগিংয়ের সময় প্রতিটি প্রপার্টির নাম ও মান সরাসরি দেখতে পাওয়া যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'nullables-and-the-nothing',
    title: {
      en: 'Nullable Reference Types & Null Safety',
      bn: 'নালেবল রেফারেন্স টাইপস এবং নাল সুরক্ষা'
    }
  }
};
