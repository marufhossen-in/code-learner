import type { Lesson } from '../../../lib/types';

export const StructsAndTheEmbedLesson: Lesson = {
  slug: 'structs-and-the-embed',
  tech: 'lang-go',
  title: {
    en: 'Structs and Embedding — Custom Types, Tags, and Composition',
    bn: 'স্ট্রাক্ট ও এম্বেডিং — কাস্টম টাইপ, ট্যাগ ও কম্পোজিশন',
  },
  summary: {
    en: 'Master Go structs and composition: declare custom composite types, configure JSON serialization field tags, instantiate value and pointer structs, and model object hierarchies using anonymous struct embedding and field promotion.',
    bn: 'গো স্ট্রাক্ট ও কম্পোজিশন আয়ত্ত করুন: কাস্টম কম্পোজিট টাইপ ঘোষণা, জেসন সিরিয়ালাইজেশন ফিল্ড ট্যাগ কনফিগার করা, ভ্যালু ও পয়েন্টার স্ট্রাক্ট তৈরি এবং অ্যানোনিমাস স্ট্রাক্ট এম্বেডিং ও ফিল্ড প্রমোশন দিয়ে অবজেক্ট হায়ারার্কি মডেলিং।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Composite types and composition over inheritance', bn: 'WHAT — কম্পোজিট টাইপ এবং ইনহেরিটেন্সের বদলে কম্পোজিশন' },
    },
    {
      type: 'para',
      text: {
        en: 'When you model real-world business entities in Go, structs provide typed composite data structures that bundle related fields into cohesive units. Unlike traditional object-oriented languages that rely on complex class inheritance hierarchies, Go embraces composition over inheritance. By embedding one struct anonymously inside another, the outer struct automatically promotes the inner fields and methods to top-level access. Struct fields can also carry metadata tags like json:"id" to instruct encoders how to serialize data for network APIs.',
        bn: 'যখন আপনি গো-তে বাস্তব ব্যবসায়িক এনটিটি মডেল করেন, তখন স্ট্রাক্ট সম্পর্কিত ফিল্ডগুলোকে একত্রিত করে টাইপড কম্পোজিট ডেটা কাঠামো তৈরি করে। জটিল ক্লাস ইনহেরিটেন্সের ওপর নির্ভরশীল ঐতিহ্যবাহী অবজেক্ট-ওরিয়েন্টেড ভাষার বিপরীতে গো ইনহেরিটেন্সের চেয়ে কম্পোজিশনকে প্রাধান্য দেয়। একটি স্ট্রাক্টকে অন্যটির ভেতরে অ্যানোনিমাসলি এম্বেড করলে বাইরের স্ট্রাক্টটি স্বয়ংক্রিয়ভাবে ভেতরের ফিল্ড ও মেথডগুলোকে শীর্ষ স্তরের অ্যাক্সেসে উন্নীত (promote) করে। নেটওয়ার্ক এপিআইতে ডেটা সিরিয়ালাইজ করার জন্য স্ট্রাক্ট ফিল্ডে json:"id" এর মতো মেটাডেটা ট্যাগও যোগ করা যায়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Struct embedding promoting inner fields to outer access', bn: 'ভেতরের ফিল্ডকে বাইরে প্রমোট করা স্ট্রাক্ট এম্বেডিং' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="Go struct embedding and field promotion diagram">
<rect x="30" y="30" width="220" height="110" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="140" y="55" text-anchor="middle" font-size="11" font-weight="800" fill="#1e40af">BASE STRUCT</text>
<text x="45" y="80" font-family="monospace" font-size="10" fill="currentColor">type BaseUser struct {</text>
<text x="60" y="100" font-family="monospace" font-size="10" fill="currentColor">ID    int    \`json:"id"\`</text>
<text x="60" y="120" font-family="monospace" font-size="10" fill="currentColor">Name  string \`json:"name"\`</text>
<text x="45" y="135" font-family="monospace" font-size="10" fill="currentColor">}</text>

<line x1="250" y1="85" x2="360" y2="85" stroke="#4f46e5" stroke-width="2"/>
<polygon points="360,80 375,85 360,90" fill="#4f46e5"/>
<text x="312" y="75" text-anchor="middle" font-size="10" font-weight="700" fill="#4f46e5">embeds</text>

<rect x="375" y="20" width="235" height="135" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="492" y="45" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">EMBEDDED STRUCT</text>
<text x="390" y="70" font-family="monospace" font-size="10" fill="currentColor">type AdminUser struct {</text>
<text x="405" y="90" font-family="monospace" font-size="10" fill="#16a34a">BaseUser // Anonymous</text>
<text x="405" y="110" font-family="monospace" font-size="10" fill="currentColor">Role        string</text>
<text x="405" y="130" font-family="monospace" font-size="10" fill="currentColor">AccessLevel int</text>
<text x="390" y="145" font-family="monospace" font-size="10" fill="currentColor">}</text>

<rect x="110" y="170" width="420" height="50" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="1.5"/>
<text x="320" y="192" text-anchor="middle" font-size="11" font-weight="700" fill="#854d0e">Field Promotion: Direct top-level access</text>
<text x="320" y="210" text-anchor="middle" font-family="monospace" font-size="10" fill="currentColor">admin.Name works identically to admin.BaseUser.Name</text>
</svg>`,
      caption: {
        en: 'AdminUser embeds BaseUser anonymously. Through field promotion, fields like Name and ID can be accessed directly on admin without intermediate struct qualifiers.',
        bn: 'AdminUser নামহীনভাবে BaseUser কে এম্বেড করে। ফিল্ড প্রমোশনের মাধ্যমে Name এবং ID ফিল্ডগুলো সরাসরি admin থেকেই অ্যাক্সেস করা যায়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Struct',
          def: {
            en: 'A typed collection of fields used to model custom record structures in contiguous memory.',
            bn: 'অবিচ্ছিন্ন মেমরিতে কাস্টম রেকর্ড কাঠামো মডেল করতে ব্যবহৃত ফিল্ডের একটি টাইপড সংগ্রহ।',
          },
        },
        {
          term: 'Struct embedding',
          def: {
            en: 'The Go composition mechanism of declaring an unnamed struct field, promoting its fields and methods to the outer struct.',
            bn: 'নামহীন স্ট্রাক্ট ফিল্ড ঘোষণা করার গো কম্পোজিশন পদ্ধতি, যা এর ফিল্ড ও মেথডগুলোকে বাইরের স্ট্রাক্টে সরাসরি ব্যবহারের সুবিধা দেয়।',
          },
        },
        {
          term: 'Field tag',
          def: {
            en: 'Backtick-enclosed metadata string attached to a struct field (such as `json:"name"`) consumed by reflection libraries.',
            bn: 'স্ট্রাক্ট ফিল্ডের সাথে ব্যাকটিক দিয়ে যুক্ত মেটাডেটা স্ট্রিং (যেমন `json:"name"`) যা রিফ্লেকশন লাইব্রেরি দ্বারা ব্যবহৃত হয়।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Flat memory layout and flexible composable models', bn: 'কেন — অবিচ্ছিন্ন মেমরি ও সহজে সমন্বয়যোগ্য মডেল' },
    },
    {
      type: 'list',
      items: [
        { en: 'Contiguous memory layout: struct fields are stored adjacent in RAM, minimizing CPU cache misses during data processing.', bn: 'অবিচ্ছিন্ন মেমরি বিন্যাস: স্ট্রাক্ট ফিল্ডগুলো র‍্যামে পাশাপাশি সংরক্ষিত হওয়ায় সিপিইউ ক্যাশ মিসের সম্ভাবনা অনেক কমে যায়।' },
        { en: 'Composition over inheritance: build rich types by assembling small, focused structs without the brittle fragile-base-class problem.', bn: 'ইনহেরিটেন্সের বদলে কম্পোজিশন: জটিল ক্লাস হায়ারার্কির ফাঁদে না পড়ে ছোট ছোট স্ট্রাক্ট সমন্বয় করে শক্তিশালী কাঠামো তৈরি করা যায়।' },
        { en: 'Native serialization tags: JSON, database, and validation schemas are defined directly on struct fields with zero runtime overhead.', bn: 'নেটিভ সিরিয়ালাইজেশন ট্যাগ: জেসন, ডাটাবেস ও ভ্যালিডেশন স্কিমাগুলো সরাসরি স্ট্রাক্ট ফিল্ডেই সংজ্ঞায়িত করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Defining and embedding structs in 4 steps', bn: 'HOW — ৪টি ধাপে স্ট্রাক্ট গঠন ও এম্বেডিং' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Declare struct type', bn: '১. স্ট্রাক্ট ঘোষণা' }, text: { en: 'Define type Entity struct with explicit typed fields.', bn: 'সুনির্দিষ্ট টাইপযুক্ত ফিল্ডসহ type Entity struct ঘোষণা করুন।' } },
        { title: { en: '2. Attach field tags', bn: '২. ফিল্ড ট্যাগ যোগ' }, text: { en: 'Annotate fields with `json:"key_name"` for serialization.', bn: 'সিরিয়ালাইজেশনের জন্য ফিল্ডের পাশে `json:"key_name"` যুক্ত করুন।' } },
        { title: { en: '3. Embed inner structs', bn: '৩. অভ্যন্তরীণ স্ট্রাক্ট এম্বেড' }, text: { en: 'List the inner struct type anonymously inside the outer struct.', bn: 'বাইরের স্ট্রাক্টের ভেতরে নামহীনভাবে অভ্যন্তরীণ স্ট্রাক্ট টাইপ উল্লেখ করুন।' } },
        { title: { en: '4. Access promoted fields', bn: '৪. প্রমোটেড ফিল্ড অ্যাক্সেস' }, text: { en: 'Read promoted fields directly like outer.FieldName.', bn: 'সরাসরি outer.FieldName দিয়ে প্রমোটেড ফিল্ডের মান পড়ুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'go',
      filename: 'struct_embed_sim.go',
      code: `package main

import "fmt"

// Base entity modeling user account
type BaseUser struct {
	ID    int
	Name  string
	Email string
}

// AdminUser embeds BaseUser anonymously
type AdminUser struct {
	BaseUser
	Role        string
	AccessLevel int
}

func main() {
	// 1. Instantiating embedded structs
	admin1 := AdminUser{
		BaseUser:    BaseUser{ID: 101, Name: "Farhan", Email: "farhan@example.com"},
		Role:        "SuperAdmin",
		AccessLevel: 5,
	}

	admin2 := AdminUser{
		BaseUser:    BaseUser{ID: 102, Name: "Nusrat", Email: "nusrat@example.com"},
		Role:        "Moderator",
		AccessLevel: 3,
	}

	// 2. Field promotion: direct access to admin1.Name instead of admin1.BaseUser.Name
	combinedLevel := admin1.AccessLevel + admin2.AccessLevel

	fmt.Println("Admin User Profiles:")
	fmt.Printf("Admin 1: %s (ID: %d, Level: %d, Role: %s)\\n", admin1.Name, admin1.ID, admin1.AccessLevel, admin1.Role)
	fmt.Printf("Admin 2: %s (ID: %d, Level: %d, Role: %s)\\n", admin2.Name, admin2.ID, admin2.AccessLevel, admin2.Role)
	fmt.Printf("Total admin accounts: 2, Combined access level: %d\\n", combinedLevel)
}

// Output:
// Admin User Profiles:
// Admin 1: Farhan (ID: 101, Level: 5, Role: SuperAdmin)
// Admin 2: Nusrat (ID: 102, Level: 3, Role: Moderator)
// Total admin accounts: 2, Combined access level: 8`,
      caption: {
        en: 'The Go program models 2 admin accounts (IDs 101 and 102) with access levels 5 and 3 combining to level 8, demonstrating field promotion for Name and ID.',
        bn: 'গো প্রোগ্রামটি ২টি অ্যাডমিন অ্যাকাউন্ট (আইডি ১০১ এবং ১০২) মডেল করে যাদের অ্যাক্সেস লেভেল ৫ এবং ৩ মিলে মোট লেভেল ৮ হয়, যা Name এবং ID ফিল্ডের প্রমোশন প্রদর্শন করে।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive struct explorer lab', bn: 'INSIDE — জীবন্ত স্ট্রাক্ট ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'Examine struct field promotion. Two admin profiles (Farhan with ID 101 at level 5, Nusrat with ID 102 at level 3) inherit base properties seamlessly. Their combined access level equals 8. Modifying levels in the browser shows how Go structs bundle state without class overhead.',
        bn: 'স্ট্রাক্ট ফিল্ড প্রমোশন পরীক্ষা করুন। ২টি অ্যাডমিন প্রোফাইল (১০১ আইডির ফারহান লেভেল ৫, ১০২ আইডির নুসরাত লেভেল ৩) মূল প্রপার্টিগুলো সরাসরি ব্যবহার করে। তাদের সম্মিলিত অ্যাক্সেস লেভেল ৮। ব্রাউজারে মান পরিবর্তন করে ক্লাসের বাড়তি খরচ ছাড়া গো স্ট্রাক্টের কার্যকারিতা পরখ করুন।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Struct lab (modify levels, press Run)', bn: 'Struct lab (লেভেল পরিবর্তন করুন, Run)' },
      html: '<h3>Go Struct Embedding Simulator</h3>\n<pre id="out"></pre>\n<p>Promoted field values verified.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const a1 = { id: 101, name: "Farhan", level: 5, role: "SuperAdmin" };\nconst a2 = { id: 102, name: "Nusrat", level: 3, role: "Moderator" };\nconst total = a1.level + a2.level;\nconsole.log("combined level: " + total);\ndocument.getElementById("out").textContent = "Admin 1: " + a1.name + " (L" + a1.level + ") · Admin 2: " + a2.name + " (L" + a2.level + ") · Total Level: " + total + " ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Struct design rules', bn: 'ফলাফল — স্ট্রাক্ট ডিজাইনের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Prefer composition over inheritance: embedding small focused structs produces maintainable architectures without class rigidities.', bn: 'ইনহেরিটেন্সের চেয়ে কম্পোজিশন শ্রেয়: ছোট স্ট্রাক্ট এম্বেড করে কাজ করলে জটিল ক্লাস হায়ারার্কি ছাড়া সহজে রক্ষণাবেক্ষণযোগ্য কোড তৈরি হয়।' },
        { en: 'Struct tags provide clean decoupling: mapping serialized JSON formats without altering internal Go variable naming conventions.', bn: 'স্ট্রাক্ট ট্যাগ ডিকপলিং সুবিধা দেয়: গো ভেরিয়েবলের প্রচলিত নাম পরিবর্তন না করেই বাহ্যিক জেসন ফরম্যাটের সাথে সামঞ্জস্য রক্ষা করা যায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common struct mistakes', bn: 'ডিবাগ — স্ট্রাক্টের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Unexported struct fields ignored by json.Marshal', bn: 'ছোট হাতের অক্ষরের ফিল্ড json.Marshal দ্বারা উপেক্ষিত হওয়া' },
      text: {
        en: 'If a struct field starts with a lowercase letter (like id int `json:"id"`), the encoding/json package cannot access it because it is unexported! The field will silently vanish from marshalled JSON. Cure: always capitalize field names intended for serialization.',
        bn: 'কোনো স্ট্রাক্ট ফিল্ড যদি ছোট হাতের অক্ষর দিয়ে শুরু হয় (যেমন id int `json:"id"`), তবে আন-এক্সপোর্টেড হওয়ায় encoding/json প্যাকেজ তা পড়তে পারে না! ফলে জেসন আউটপুট থেকে ফিল্ডটি নীরবে গায়েব হয়ে যায়। প্রতিকার: সিরিয়ালাইজ করতে চাওয়া ফিল্ডের নাম সর্বদা বড় হাতের অক্ষর দিয়ে শুরু করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Memory alignment and field ordering', bn: 'মেমরি অ্যালাইনমেন্ট ও ফিল্ডের ক্রম' },
      text: {
        en: 'In Go, field order matters for memory consumption: placing smaller fields (like bool or int8) next to each other prevents padding bytes, reducing overall struct footprint in RAM.',
        bn: 'গো-তে মেমরি সাশ্রয়ের জন্য ফিল্ডের ক্রম গুরুত্বপূর্ণ: ছোট ফিল্ডগুলোকে (যেমন bool বা int8) পাশাপাশি রাখলে প্যাডিং বাইটের অপচয় কমে এবং র‍্যামে স্ট্রাক্টের আকার ছোট থাকে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production struct architectures', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল স্ট্রাক্ট আর্কিটেকচার' },
    },
    {
      type: 'list',
      items: [
        { en: 'Database ORMs (GORM, sqlx): map SQL table columns and foreign keys using struct tags like `gorm:"primaryKey"` and `db:"user_id"`.', bn: 'ডাটাবেস ওআরএম: `gorm:"primaryKey"` বা `db:"user_id"` ট্যাগের মাধ্যমে এসকিউএল টেবিল কলাম ও ফরেন কি ম্যাপ করে।' },
        { en: 'Kubernetes custom resources (CRDs): API resources are defined as Go structs embedded with metav1.TypeMeta and metav1.ObjectMeta.', bn: 'কুবারনেটিস রিসোর্স: এপিআই রিসোর্সগুলো metav1.ObjectMeta এম্বেড করা গো স্ট্রাক্ট হিসেবে সংজ্ঞায়িত হয়।' },
        { en: 'HTTP API request validation: go-playground/validator parses struct tags like `validate:"required,email"` for automatic payload validation.', bn: 'এইচটিটিপি ভ্যালিডেশন: স্বয়ংক্রিয় পেলোড যাচাইয়ের জন্য `validate:"required,email"` এর মতো স্ট্রাক্ট ট্যাগ ব্যবহার করা হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Methods and Receivers', bn: 'পরবর্তী পাঠ — মেথড ও রিসিভার' },
    },
    {
      type: 'para',
      text: {
        en: 'With structs and embedding mastered, Lesson 5 examines attaching methods to types, pointer receivers versus value receivers, and Go implicit interface satisfaction.',
        bn: 'স্ট্রাক্ট ও এম্বেডিং আয়ত্ত করার পর, পাঠ ৫ টাইপের সাথে মেথড যুক্ত করা, পয়েন্টার রিসিভার বনাম ভ্যালু রিসিভার এবং গো-এর অন্তর্নিহিত ইন্টারফেস পূরণ শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'go-str-ex-1',
      kind: 'mcq',
      topic: 'field-promotion',
      question: {
        en: 'What does field promotion mean when one struct is anonymously embedded inside another in Go?',
        bn: 'গো-তে একটি স্ট্রাক্টকে অন্যটির ভেতরে নামহীনভাবে এম্বেড করা হলে ফিল্ড প্রমোশন বলতে কী বোঝায়?',
      },
      options: [
        {
          en: 'The embedded struct fields can be accessed directly on the outer struct without referencing the inner struct name',
          bn: 'ভেতরের স্ট্রাক্টের নাম উল্লেখ না করেই বাইরের স্ট্রাক্ট থেকে সরাসরি এম্বেডেড ফিল্ডগুলো অ্যাক্সেস করা যায়',
        },
        {
          en: 'All integer fields are automatically converted into 64-bit floating point numbers',
          bn: 'সমস্ত ইন্টিজার ফিল্ড স্বয়ংক্রিয়ভাবে ৬৪-বিট ফ্লোটিং পয়েন্ট সংখ্যায় রূপান্তরিত হয়',
        },
        {
          en: 'The struct fields are automatically uploaded to a remote git repository',
          bn: 'স্ট্রাক্ট ফিল্ডগুলো স্বয়ংক্রিয়ভাবে রিমোট গিট রিপোজিটরিতে আপলোড হয়ে যায়',
        },
        {
          en: 'The Go runtime deletes unused fields from system memory',
          bn: 'গো রানটাইম সিস্টেম মেমরি থেকে অব্যবহৃত ফিল্ডগুলো মুছে ফেলে',
        },
      ],
      answer: 0,
      hint: { en: 'Outer struct inherits direct access to inner fields.', bn: 'বাইরের স্ট্রাক্ট ভেতরের ফিল্ডে সরাসরি অ্যাক্সেসের সুবিধা পায়।' },
      explanation: {
        en: 'Field promotion allows writing admin.Name directly rather than admin.BaseUser.Name.',
        bn: 'ফিল্ড প্রমোশনের ফলে admin.BaseUser.Name লেখার বদলে সরাসরি admin.Name লেখা সম্ভব হয়।',
      },
    },
    {
      id: 'go-str-ex-2',
      kind: 'mcq',
      topic: 'admin-level-calc',
      question: {
        en: 'In our code simulation, what was the combined access level of the 2 admin accounts (Farhan with level 5 and Nusrat with level 3)?',
        bn: 'আমাদের কোড সিমুলেশনে ২টি অ্যাডমিন অ্যাকাউন্টের (ফারহান লেভেল ৫ এবং নুসরাত লেভেল ৩) সম্মিলিত অ্যাক্সেস লেভেল কত ছিল?',
      },
      options: [
        { en: 'Total accounts: 2, Combined access level: 8', bn: 'মোট অ্যাকাউন্ট: ২, সম্মিলিত অ্যাক্সেস লেভেল: ৮' },
        { en: 'Total accounts: 5, Combined access level: 15', bn: 'মোট অ্যাকাউন্ট: ৫, সম্মিলিত অ্যাক্সেস লেভেল: ১৫' },
        { en: 'Total accounts: 1, Combined access level: 5', bn: 'মোট অ্যাকাউন্ট: ১, সম্মিলিত অ্যাক্সেস লেভেল: ৫' },
        { en: 'Total accounts: 3, Combined access level: 10', bn: 'মোট অ্যাকাউন্ট: ৩, সম্মিলিত অ্যাক্সেস লেভেল: ১০' },
      ],
      answer: 0,
      hint: { en: '5 + 3 = 8 across 2 admin accounts.', bn: '২টি অ্যাডমিন অ্যাকাউন্টে ৫ + ৩ = ৮।' },
      explanation: {
        en: 'Farhan has access level 5 and Nusrat has access level 3; adding them yields a combined level of 8.',
        bn: 'ফারহানের অ্যাক্সেস লেভেল ৫ এবং নুসরাতের ৩; দুটি যোগ করলে সম্মিলিত লেভেল হয় ৮।',
      },
    },
    {
      id: 'go-str-ex-3',
      kind: 'mcq',
      topic: 'json-marshal-visibility',
      question: {
        en: 'Why does json.Marshal fail to serialize a struct field defined as id int `json:"id"`?',
        bn: 'id int `json:"id"` হিসেবে সংজ্ঞায়িত স্ট্রাক্ট ফিল্ডকে json.Marshal কেন সিরিয়ালাইজ করতে ব্যর্থ হয়?',
      },
      options: [
        {
          en: 'Because the field name begins with a lowercase letter, making it unexported and inaccessible to the encoding/json package',
          bn: 'কারণ ফিল্ডের নামটি ছোট হাতের অক্ষর দিয়ে শুরু হওয়ায় তা আন-এক্সপোর্টেড থাকে এবং encoding/json প্যাকেজ তা পড়তে পারে না',
        },
        {
          en: 'Because JSON does not support integer numbers',
          bn: 'কারণ জেসন পূর্ণসংখ্যা সমর্থন করে না',
        },
        {
          en: 'Because backticks are forbidden in modern Go programs',
          bn: 'কারণ আধুনিক গো প্রোগ্রামে ব্যাকটিক ব্যবহার নিষিদ্ধ',
        },
        {
          en: 'Because the CPU does not have enough floating point registers',
          bn: 'কারণ সিপিইউতে পর্যাপ্ত ফ্লোটিং পয়েন্ট রেজিস্টার নেই',
        },
      ],
      answer: 0,
      hint: { en: 'Only capitalized (exported) fields can be marshalled to JSON.', bn: 'কেবল বড় হাতের অক্ষরযুক্ত (এক্সপোর্টেড) ফিল্ডই জেসনে মার্শাল করা যায়।' },
      explanation: {
        en: 'The encoding/json package relies on reflection from outside the package. Unexported fields cannot be accessed.',
        bn: 'encoding/json প্যাকেজ প্যাকেজের বাইরে থেকে রিফ্লেকশন চালায়; আন-এক্সপোর্টেড ফিল্ড বাইরে থেকে পড়া যায় না।',
      },
    },
    {
      id: 'go-str-ex-4',
      kind: 'predict',
      topic: 'struct-keyword-recite',
      question: {
        en: 'Which Go keyword is used to declare a composite data type composed of named fields (e.g. type User ...)?',
        bn: 'নামযুক্ত ফিল্ড নিয়ে গঠিত কোনো কম্পোজিট ডেটা টাইপ ঘোষণা করতে কোন গো কিওয়ার্ড ব্যবহৃত হয় (যেমন type User ...)?',
      },
      answer: 'struct',
      accept: ['struct'],
      hint: { en: 'A 6-letter keyword starting with "s".', bn: '"s" দিয়ে শুরু হওয়া ৬ অক্ষরের একটি কিওয়ার্ড।' },
      explanation: {
        en: 'The struct keyword declares custom structured data types in Go.',
        bn: 'struct কিওয়ার্ড গো-তে কাস্টম স্ট্রাকচার্ড ডেটা টাইপ তৈরি করতে ব্যবহৃত হয়।',
      },
    },
  ],
  quiz: {
    id: 'structs-embed-quiz',
    title: { en: 'Lesson 4 exam', bn: 'পাঠ ৪ পরীক্ষা' },
    questions: [
      {
        id: 'go-str-q1',
        kind: 'mcq',
        topic: 'composition-philosophy',
        question: {
          en: 'What architectural design principle does Go adopt instead of traditional class inheritance?',
          bn: 'ঐতিহ্যবাহী ক্লাস ইনহেরিটেন্সের বদলে গো কোন আর্কিটেকচারাল ডিজাইন নীতি গ্রহণ করেছে?',
        },
        options: [
          {
            en: 'Composition over inheritance: assembling behavior using struct embedding and interfaces',
            bn: 'ইনহেরিটেন্সের চেয়ে কম্পোজিশন শ্রেয়: স্ট্রাক্ট এম্বেডিং ও ইন্টারফেস ব্যবহার করে আচরণ তৈরি করা',
          },
          {
            en: 'Multi-threaded dynamic inheritance trees',
            bn: 'মাল্টি-থ্রেডেড ডায়নামিক ইনহেরিটেন্স ট্রি',
          },
          {
            en: 'Global shared mutable memory singletons',
            bn: 'গ্লোবাল শেয়ার্ড মিউটেবল মেমরি সিঙ্গলটন',
          },
          {
            en: 'Strict prototype-based prototypical chains',
            bn: 'কঠোর প্রোটোটাইপ-ভিত্তিক প্রোটোটাইপিকাল চেইন',
          },
        ],
        answer: 0,
        hint: { en: 'Go favors composition over inheritance.', bn: 'গো ইনহেরিটেন্সের চেয়ে কম্পোজিশনকে প্রাধান্য দেয়।' },
        explanation: {
          en: 'Go avoids deep, fragile class hierarchies by prioritizing struct composition and interfaces.',
          bn: 'ভঙ্গুর ক্লাস হায়ারার্কি এড়াতে গো স্ট্রাক্ট কম্পোজিশন ও ইন্টারফেসকে অগ্রাধিকার দেয়।',
        },
      },
      {
        id: 'go-str-q2',
        kind: 'mcq',
        topic: 'admin-id-numbers',
        question: {
          en: 'In our code walkthrough, what were the numeric IDs assigned to Farhan and Nusrat?',
          bn: 'আমাদের কোড আলোচনায় ফারহান ও নুসরাতের জন্য কোন নিউমেরিক আইডিগুলো বরাদ্দ করা হয়েছিল?',
        },
        options: [
          { en: 'IDs 101 and 102', bn: 'আইডি ১০১ এবং ১০২' },
          { en: 'IDs 1 and 2', bn: 'আইডি ১ এবং ২' },
          { en: 'IDs 500 and 600', bn: 'আইডি ৫০০ এবং ৬০০' },
          { en: 'IDs 999 and 1000', bn: 'আইডি ৯৯৯ এবং ১০০০' },
        ],
        answer: 0,
        hint: { en: 'Farhan had ID 101, Nusrat had ID 102.', bn: 'ফারহানের আইডি ১০১, নুসরাতের আইডি ১০২।' },
        explanation: {
          en: 'The simulation explicitly initialized BaseUser with ID 101 and ID 102.',
          bn: 'সিমুলেশনটিতে স্পষ্টভাবেই BaseUser এর আইডি ১০১ ও ১০২ নির্ধারণ করা হয়েছিল।',
        },
      },
      {
        id: 'go-str-q3',
        kind: 'mcq',
        topic: 'struct-tag-delimiter',
        question: {
          en: 'Which character pairs delimit struct field tags in Go (such as `json:"name"`)?',
          bn: 'গো-তে স্ট্রাক্ট ফিল্ড ট্যাগগুলোকে কোন ক্যারেক্টার দিয়ে আবদ্ধ করা হয় (যেমন `json:"name"`)?',
        },
        options: [
          { en: 'Backticks (`...`)', bn: 'ব্যাকটিক (`...`)' },
          { en: 'Square brackets ([...])', bn: 'থার্ড ব্র্যাকেট ([...])' },
          { en: 'Curly braces ({...})', bn: 'সেকেন্ড ব্র্যাকেট ({...})' },
          { en: 'Parentheses ((...))', bn: 'ফার্স্ট ব্র্যাকেট ((...))' },
        ],
        answer: 0,
        hint: { en: 'Backtick characters (grave accents) enclose struct tags.', bn: 'ব্যাকটিক ক্যারেক্টার দিয়ে স্ট্রাক্ট ট্যাগ আবদ্ধ করা হয়।' },
        explanation: {
          en: 'Struct field tags use backtick-enclosed raw string literals so internal quotes do not require escaping.',
          bn: 'স্ট্রাক্ট ফিল্ড ট্যাগে ব্যাকটিক ব্যবহৃত হয় যাতে ভেতরের কোটগুলো এস্কেপ করার প্রয়োজন না হয়।',
        },
      },
      {
        id: 'go-str-q4',
        kind: 'predict',
        topic: 'anonymous-field-concept',
        question: {
          en: 'What term describes embedding a struct without giving it an explicit field name (e.g. type Admin struct { User })?',
          bn: 'কোনো স্পষ্ট ফিল্ডের নাম না দিয়ে সরাসরি স্ট্রাক্ট এম্বেড করার পদ্ধতিকে কী বলা হয় (যেমন type Admin struct { User })?',
        },
        answer: 'Anonymous embedding',
        accept: ['anonymous', 'anonymous embedding', 'embedding'],
        hint: { en: 'Named because it has no explicit field identifier.', bn: 'কোনো স্পষ্ট নাম না থাকার কারণে এই নামে পরিচিত।' },
        explanation: {
          en: 'Declaring a type directly without a field name is known as anonymous struct embedding, triggering field promotion.',
          bn: 'ফিল্ডের নাম ছাড়া সরাসরি টাইপ ঘোষণা করাকে অ্যানোনিমাস স্ট্রাক্ট এম্বেডিং বলে, যা ফিল্ড প্রমোশন সক্রিয় করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'methods-and-the-receiver',
    title: { en: 'Methods and Receivers', bn: 'মেথড ও রিসিভার' },
  },
};
