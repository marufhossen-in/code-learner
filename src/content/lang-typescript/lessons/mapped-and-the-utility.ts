import type { Lesson } from '../../../lib/types';

export const MappedAndTheUtilityLesson: Lesson = {
  slug: 'mapped-and-the-utility',
  tech: 'lang-typescript',
  title: {
    en: 'Mapped and Utility Types — Object Transformations and Generics',
    bn: 'ম্যাপড ও ইউটিলিটি টাইপ — অবজেক্ট রূপান্তর ও জেনেরিক ইউটিলিটি',
  },
  summary: {
    en: 'Master TypeScript utility types (Partial, Required, Readonly, Pick, Omit, Record) and construct custom mapped types using keyof iteration ([K in keyof T]), modifier removals (-readonly, -?), and template literal key remapping.',
    bn: 'টাইপস্ক্রিপ্ট ইউটিলিটি টাইপ (Partial, Required, Readonly, Pick, Omit, Record) এবং keyof ইটারেশন ([K in keyof T]), মডিফায়ার অপসারণ (-readonly, -?) ও টেমপ্লেট লিটারেল কি-রিম্যাপিং ব্যবহার করে কাস্টম ম্যাপড টাইপ তৈরি আয়ত্ত করুন।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Transforming object structures programmatically', bn: 'WHAT — প্রোগ্রামেটিকভাবে অবজেক্ট কাঠামো রূপান্তর' },
    },
    {
      type: 'para',
      text: {
        en: 'When you design robust application models in TypeScript, you frequently need transformed variations of existing interfaces, such as making all fields optional for partial database updates or selecting a narrow subset of fields for public API responses. Rather than manually rewriting duplicate interfaces, TypeScript provides mapped types and built-in utility types like Partial<T>, Pick<T, K>, and Omit<T, K>. Mapped types iterate over property keys using the syntax [K in keyof T], programmatically transforming property types and modifiers across entire object shapes.',
        bn: 'যখন আপনি টাইপস্ক্রিপ্টে নির্ভরযোগ্য অ্যাপ্লিকেশন মডেল তৈরি করেন, তখন আপনাকে প্রায়ই বিদ্যমান ইন্টারফেসগুলোর রূপান্তরিত সংস্করণ তৈরি করতে হয়, যেমন আংশিক ডাটাবেস আপডেটের জন্য সমস্ত ফিল্ডকে ঐচ্ছিক করা অথবা পাবলিক এপিআই রেসপন্সের জন্য কিছু নির্দিষ্ট ফিল্ড বাছাই করা। হাতে ডুপ্লিকেট ইন্টারফেস না লিখে টাইপস্ক্রিপ্ট আপনাকে ম্যাপড টাইপ এবং অন্তর্নির্মিত ইউটিলিটি টাইপ (যেমন Partial<T>, Pick<T, K>, Omit<T, K>) ব্যবহারের সুবিধা দেয়। ম্যাপড টাইপ [K in keyof T] সিনট্যাক্স দিয়ে প্রপার্টির নামগুলোর ওপর লুপিং চালিয়ে সম্পূর্ণ অবজেক্ট কাঠামোর টাইপ এবং মডিফায়ারকে প্রোগ্রামেটিকভাবে রূপান্তর করে।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'Utility types transforming base schemas', bn: 'ইউটিলিটি টাইপের মাধ্যমে মূল স্কিমার রূপান্তর' },
      svg: `<svg viewBox="0 0 640 240" font-family="system-ui, sans-serif" role="img" aria-label="TypeScript utility types transformation flow">
<rect x="20" y="30" width="180" height="150" rx="8" fill="#eff6ff" stroke="#2563eb" stroke-width="2"/>
<text x="110" y="55" text-anchor="middle" font-size="12" font-weight="800" fill="#1e40af">BASE INTERFACE</text>
<text x="35" y="80" font-family="monospace" font-size="11" fill="currentColor">interface Product {</text>
<text x="50" y="100" font-family="monospace" font-size="11" fill="currentColor">  id: number;</text>
<text x="50" y="120" font-family="monospace" font-size="11" fill="currentColor">  title: string;</text>
<text x="50" y="140" font-family="monospace" font-size="11" fill="currentColor">  price: number;</text>
<text x="50" y="160" font-family="monospace" font-size="11" fill="currentColor">  inStock: boolean;</text>
<text x="35" y="175" font-family="monospace" font-size="11" fill="currentColor">}</text>

<line x1="200" y1="80" x2="310" y2="60" stroke="#4f46e5" stroke-width="2"/>
<polygon points="310,55 325,60 310,65" fill="#4f46e5"/>

<rect x="330" y="20" width="280" height="80" rx="8" fill="#f0fdf4" stroke="#16a34a" stroke-width="2"/>
<text x="470" y="42" text-anchor="middle" font-size="11" font-weight="800" fill="#166534">Partial&lt;Product&gt; (All Optional)</text>
<text x="345" y="65" font-family="monospace" font-size="10" fill="currentColor">{ id?: number; title?: string; ... }</text>
<text x="470" y="88" text-anchor="middle" font-size="10" fill="#16a34a">Ideal for PATCH updates</text>

<line x1="200" y1="130" x2="310" y2="150" stroke="#4f46e5" stroke-width="2"/>
<polygon points="310,145 325,150 310,155" fill="#4f46e5"/>

<rect x="330" y="120" width="280" height="80" rx="8" fill="#fefce8" stroke="#ca8a04" stroke-width="2"/>
<text x="470" y="142" text-anchor="middle" font-size="11" font-weight="800" fill="#854d0e">Pick&lt;Product, "id" | "title"&gt;</text>
<text x="345" y="165" font-family="monospace" font-size="10" fill="currentColor">{ id: number; title: string; }</text>
<text x="470" y="188" text-anchor="middle" font-size="10" fill="#854d0e">Compact public payload</text>
</svg>`,
      caption: {
        en: 'From a single base Product interface, Partial produces an update payload with all fields optional, while Pick selects only id and title for public cards.',
        bn: 'একক মূল Product ইন্টারফেস থেকে Partial সমস্ত ফিল্ড ঐচ্ছিক করে একটি আপডেট পেলোড তৈরি করে, আর Pick পাবলিক কার্ডের জন্য কেবল id এবং title বাছাই করে নেয়।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Utility type',
          def: {
            en: 'A built-in TypeScript global generic type (such as Partial, Pick, or Record) that performs common type transformations.',
            bn: 'টাইপস্ক্রিপ্টের অন্তর্নির্মিত গ্লোবাল জেনেরিক টাইপ (যেমন Partial, Pick বা Record) যা সাধারণ টাইপ রূপান্তরগুলো সম্পাদন করে।',
          },
        },
        {
          term: 'Mapped type',
          def: {
            en: 'A type that creates new object shapes by iterating over the property keys of an existing type using [K in keyof T] syntax.',
            bn: 'এমন একটি টাইপ যা [K in keyof T] সিনট্যাক্স ব্যবহার করে বিদ্যমান টাইপের প্রপার্টি কীগুলোর ওপর ইটারেশন চালিয়ে নতুন অবজেক্ট কাঠামো তৈরি করে।',
          },
        },
        {
          term: 'Key remapping',
          def: {
            en: 'The capability to transform or filter property names during mapped type iteration using the as clause with template literal types.',
            bn: 'ম্যাপড টাইপ ইটারেশনের সময় টেমপ্লেট লিটারেল টাইপ ও as ক্লজ ব্যবহার করে প্রপার্টির নাম রূপান্তর বা ফিল্টার করার সক্ষমতা।',
          },
        },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Single source of truth for all domain variations', bn: 'কেন — সব ডোমেন ভ্যারিয়েশনের জন্য একক সত্যের উৎস' },
    },
    {
      type: 'list',
      items: [
        { en: 'Single source of truth: modifying the base Product schema immediately synchronizes all derivative DTOs, forms, and updates.', bn: 'একক সত্যের উৎস: মূল Product স্কিমা পরিবর্তন করলে সমস্ত ডেরিভেটিভ ডিটিও, ফর্ম ও আপডেট টাইপ স্বয়ংক্রিয়ভাবে সিঙ্ক হয়।' },
        { en: 'Prevent over-fetching and field leaks: Pick and Omit guarantee that sensitive internal fields (such as passwordHash) are never exposed.', bn: 'গোপন ফিল্ড ফাঁস রোধ: Pick এবং Omit নিশ্চিত করে যে সংবেদনশীল তথ্য (যেমন passwordHash) ভুলবশত পাবলিক এপিআইতে পাঠানো যাবে না।' },
        { en: 'Expressive dictionaries: Record<K, V> creates type-safe lookup tables where both keys and values are strictly verified.', bn: 'শক্তিশালী ডিকশনারি তৈরি: Record<K, V> টাইপ-নিরাপদ লুকআপ টেবিল গঠন করে যেখানে কী এবং ভ্যালু উভয়ই কঠোরভাবে যাচাই করা হয়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Applying utility types in 4 steps', bn: 'HOW — ৪টি ধাপে ইউটিলিটি টাইপের প্রয়োগ' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Model full entity', bn: '১. মূল এনটিটি গঠন' }, text: { en: 'Declare the complete interface with all required domain properties.', bn: 'সমস্ত আবশ্যক প্রপার্টি দিয়ে সম্পূর্ণ ইন্টারফেসটি ঘোষণা করুন।' } },
        { title: { en: '2. Generate patch types', bn: '২. প্যাচ টাইপ তৈরি' }, text: { en: 'Wrap the base interface in Partial<T> for update operations.', bn: 'আপডেট অপারেশনের জন্য মূল ইন্টারফেসকে Partial<T> এ মুড়িয়ে নিন।' } },
        { title: { en: '3. Extract public views', bn: '৩. পাবলিক ভিউ নির্বাচন' }, text: { en: 'Use Pick<T, K> or Omit<T, K> to define focused API transfer contracts.', bn: 'নির্দিষ্ট এপিআই চুক্তির জন্য Pick<T, K> বা Omit<T, K> ব্যবহার করুন।' } },
        { title: { en: '4. Build lookup tables', bn: '৪. লুকআপ টেবিল তৈরি' }, text: { en: 'Use Record<string, T> to model dictionary catalogs by key.', bn: 'কী দ্বারা ডিকশনারি ক্যাটালগ মডেল করতে Record<string, T> ব্যবহার করুন।' } },
      ],
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'mapped_utility_sim.ts',
      code: `interface Product {
  id: number;
  title: string;
  price: number;
  inStock: boolean;
}

// 1. Partial for updates
type ProductUpdate = Partial<Product>;

// 2. Pick for public preview
type ProductPreview = Pick<Product, "id" | "title">;

// 3. Record for categories
type InventoryCatalog = Record<string, Product>;

const baseProduct: Product = {
  id: 101,
  title: "Mechanical Keyboard",
  price: 90,
  inStock: true,
};

const updatePayload: ProductUpdate = {
  price: 85,
};

const preview: ProductPreview = {
  id: baseProduct.id,
  title: baseProduct.title,
};

const catalog: InventoryCatalog = {
  "prod-101": { ...baseProduct, price: updatePayload.price ?? baseProduct.price },
};

console.log("Mapped and Utility Type Transformations:");
console.log("Original Price: $" + baseProduct.price + " -> Updated Price: $" + catalog["prod-101"].price);
console.log("Preview title: " + preview.title + " (ID: " + preview.id + ")");
const totalCatalogKeys = Object.keys(catalog).length;
console.log("Catalog entries: " + totalCatalogKeys + ", Final stock: " + (catalog["prod-101"].inStock ? 1 : 0));

// Output:
// Mapped and Utility Type Transformations:
// Original Price: $90 -> Updated Price: $85
// Preview title: Mechanical Keyboard (ID: 101)
// Catalog entries: 1, Final stock: 1`,
      caption: {
        en: 'The simulation applies Partial to update price from 90 to 85 dollars on item 101, while Pick creates a lightweight preview title and Record structures the single-item catalog.',
        bn: 'সিমুলেশনটি Partial প্রয়োগ করে ১০১ নম্বর আইটেমের মূল্য ৯০ থেকে ৮৫ ডলারে আপডেট করে, Pick হালকা প্রিভিউ টাইটেল তৈরি করে এবং Record একক আইটেমের ক্যাটালগ সাজায়।',
      },
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — Interactive utility type lab', bn: 'INSIDE — জীবন্ত ইউটিলিটি টাইপ ল্যাব' },
    },
    {
      type: 'para',
      text: {
        en: 'In this simulation, item 101 starts with a price of 90 dollars and receives a partial update to 85 dollars. The preview object extracts only the title and numeric ID 101, while the catalog contains 1 entry. Modifying update payloads demonstrates how TypeScript guards updates against illegal property names.',
        bn: 'এই সিমুলেশনে ১০১ নম্বর পণ্যের প্রাথমিক মূল্য ৯০ ডলার ছিল এবং আংশিক আপডেটে তা ৮৫ ডলার হয়। প্রিভিউ অবজেক্টটি কেবল নাম ও সংখ্যা আইডি ১০১ বের করে আনে, আর ক্যাটালগে ১টি এন্ট্রি থাকে। আপডেট পেলোড পরিবর্তন করে পরখ করুন কীভাবে টাইপস্ক্রিপ্ট ভুল প্রপার্টি ব্যবহার প্রতিরোধ করে।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Utility lab (modify price, press Run)', bn: 'Utility lab (মূল্য পরিবর্তন করুন, Run)' },
      html: '<h3>Utility Types Simulation</h3>\n<pre id="out"></pre>\n<p>Partial update and Pick projection.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const p = { id: 101, title: "Mechanical Keyboard", price: 90 };\nconst patch = { price: 85 };\nconst updated = { ...p, ...patch };\nconsole.log("Updated: " + updated.price);\ndocument.getElementById("out").textContent = "Item " + updated.id + ": " + updated.title + " · Price: $" + updated.price + " (was $" + p.price + ") ✓";',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Transformation principles', bn: 'ফলাফল — টাইপ রূপান্তরের মূল শিক্ষা' },
    },
    {
      type: 'list',
      items: [
        { en: 'Automated type derivations eliminate out-of-sync bugs between entities and their API transfer objects.', bn: 'স্বয়ংক্রিয় টাইপ রূপান্তর এনটিটি এবং এপিআই অবজেক্টের মধ্যকার অমিল জনিত বাগ পুরোপুরি দূর করে।' },
        { en: 'Mapped types provide fine-grained control over property optionality and immutability modifiers across entire interfaces.', bn: 'ম্যাপড টাইপ সম্পূর্ণ ইন্টারফেসজুড়ে প্রপার্টির অপশনাল এবং রিড-অনলি মডিফায়ারের ওপর সূক্ষ্ম নিয়ন্ত্রণ প্রদান করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — Common utility type mistakes', bn: 'ডিবাগ — ইউটিলিটি টাইপের সাধারণ ভুল' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Omit does not validate removed key names', bn: 'Omit অপসারিত কী নামের সত্যতা যাচাই করে না' },
      text: {
        en: 'Unlike Pick<T, K> which throws a compiler error if you request a key that does not exist on T, Omit<T, K> accepts any string literal without warning. Always check for typos when writing Omit expressions.',
        bn: 'Pick<T, K> এর মতো নয় যা T তে না থাকা কী চাইলে কম্পাইল এরর দেয়, Omit<T, K> কোনো সতর্কতা ছাড়াই যেকোনো ভুল বানানের স্ট্রিং গ্রহণ করে। Omit লেখার সময় বানানের ব্যাপারে সতর্ক থাকুন।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Removing optional modifiers with -?', bn: '-? দিয়ে অপশনাল মডিফায়ার অপসারণ' },
      text: {
        en: 'The built-in Required<T> utility uses mapped syntax [K in keyof T]-?: T[K]. The -? syntax strips away the optional question mark, requiring every property to be present.',
        bn: 'বিল্ট-ইন Required<T> ইউটিলিটি [K in keyof T]-?: T[K] ম্যাপড সিনট্যাক্স ব্যবহার করে। -? সিনট্যাক্সটি ঐচ্ছিক প্রশ্নবোধক চিহ্ন মুছে ফেলে প্রতিটি প্রপার্টি থাকা বাধ্যতামূলক করে।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Production utility usage', bn: 'বাস্তব ক্ষেত্র — ইন্ডাস্ট্রিয়াল ইউটিলিটি টাইপ' },
    },
    {
      type: 'list',
      items: [
        { en: 'RESTful API controllers: endpoints use Partial<User> for PATCH routes and Pick<User, "email" | "password"> for authentication payloads.', bn: 'REST এপিআই কন্ট্রোলার: এন্ডপয়েন্টগুলো PATCH রুটের জন্য Partial<User> এবং লগইনের জন্য Pick<User, "email" | "password"> ব্যবহার করে।' },
        { en: 'GraphQL codegen tools: automatically generate TypeScript types using Pick and Omit to match client query selections.', bn: 'GraphQL কোড-জেন: ক্লায়েন্ট কুয়েরির সাথে সামঞ্জস্য রেখে স্বয়ংক্রিয়ভাবে Pick ও Omit ভিত্তিক টাইপস্ক্রিপ্ট তৈরি করে।' },
        { en: 'Configuration loaders: use Readonly<Record<string, string>> to freeze environment variables against runtime tampering.', bn: 'কনফিগারেশন লোডার: রানটাইমে কোনো পরিবর্তন ঠেকাতে Readonly<Record<string, string>> দিয়ে এনভায়রনমেন্ট ভেরিয়েবল সুরক্ষিত রাখে।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Errors and the Never Type', bn: 'পরবর্তী পাঠ — এরর ও নেভার টাইপ' },
    },
    {
      type: 'para',
      text: {
        en: 'With mapped types and utility operations mastered, Lesson 7 examines TypeScript error handling, the unknown catch error pattern, and the bottom never type for exhaustive analysis.',
        bn: 'ম্যাপড ও ইউটিলিটি টাইপ আয়ত্ত করার পর, পাঠ ৭ টাইপস্ক্রিপ্ট এরর হ্যান্ডলিং, unknown ক্যাচ এরর প্যাটার্ন এবং পুঙ্খানুপুঙ্খ বিশ্লেষণের জন্য never টাইপের প্রয়োগ শেখাবে।',
      },
    },
  ],
  exercises: [
    {
      id: 'ts-map-ex-1',
      kind: 'mcq',
      topic: 'partial-purpose',
      question: {
        en: 'What does the TypeScript built-in utility type Partial<T> do to an interface T?',
        bn: 'টাইপস্ক্রিপ্টের অন্তর্নির্মিত ইউটিলিটি টাইপ Partial<T> একটি ইন্টারফেস T এর কী পরিবর্তন করে?',
      },
      options: [
        { en: 'It makes all properties of T optional (adding ? to each property)', bn: 'এটি T এর সমস্ত প্রপার্টিকে ঐচ্ছিক করে তোলে (প্রতিটি প্রপার্টিতে ? যোগ করে)' },
        { en: 'It deletes half of the properties at random', bn: 'এটি দৈবচয়ন ভিত্তিতে অর্ধেক প্রপার্টি মুছে ফেলে' },
        { en: 'It makes all properties readonly and prevents any reading', bn: 'এটি সমস্ত প্রপার্টিকে রিড-অনলি করে এবং কোনো কিছু পড়তে বাধা দেয়' },
        { en: 'It converts all property values into boolean true', bn: 'এটি সমস্ত প্রপার্টির মানকে বুলিয়ান true তে রূপান্তর করে' },
      ],
      answer: 0,
      hint: { en: 'Partial makes every field optional for partial updates.', bn: 'Partial আংশিক আপডেটের জন্য প্রতিটি ফিল্ডকে ঐচ্ছিক করে।' },
      explanation: {
        en: 'Partial<T> iterates over all keys of T and adds the optional modifier ?, making every field optional.',
        bn: 'Partial<T> T এর সমস্ত কী এর ওপর ইটারেশন চালিয়ে ঐচ্ছিক মডিফায়ার ? যোগ করে, ফলে প্রতিটি ফিল্ড ঐচ্ছিক হয়ে যায়।',
      },
    },
    {
      id: 'ts-map-ex-2',
      kind: 'mcq',
      topic: 'price-update-calc',
      question: {
        en: 'In our code simulation, what was the initial price of item 101 and what was its updated price in the catalog?',
        bn: 'আমাদের কোড সিমুলেশনে ১০১ নম্বর আইটেমটির প্রাথমিক মূল্য কত ছিল এবং ক্যাটালগে এর আপডেটেড মূল্য কত ছিল?',
      },
      options: [
        { en: 'Initial price: $90 -> Updated price: $85', bn: 'প্রাথমিক মূল্য: $৯০ -> আপডেটেড মূল্য: $৮৫' },
        { en: 'Initial price: $100 -> Updated price: $50', bn: 'প্রাথমিক মূল্য: $১০০ -> আপডেটেড মূল্য: $৫০' },
        { en: 'Initial price: $25 -> Updated price: $30', bn: 'প্রাথমিক মূল্য: $২৫ -> আপডেটেড মূল্য: $৩০' },
        { en: 'Initial price: $0 -> Updated price: $10', bn: 'প্রাথমিক মূল্য: $০ -> আপডেটেড মূল্য: $১০' },
      ],
      answer: 0,
      hint: { en: 'The mechanical keyboard was 90 dollars and patched to 85 dollars.', bn: 'মেকানিক্যাল কিবোর্ডটির দাম ছিল ৯০ ডলার এবং প্যাচ করে ৮৫ ডলার করা হয়েছিল।' },
      explanation: {
        en: 'The base product was defined with price: 90, and the Partial update payload supplied price: 85.',
        bn: 'মূল প্রোডাক্টের মূল্য ঘোষণা করা হয়েছিল ৯০, এবং Partial আপডেট পেলোডে মূল্য দেওয়া হয়েছিল ৮৫।',
      },
    },
    {
      id: 'ts-map-ex-3',
      kind: 'mcq',
      topic: 'record-utility',
      question: {
        en: 'Which utility type constructs an object type whose property keys are of type K and property values are of type V?',
        bn: 'কোন ইউটিলিটি টাইপ এমন একটি অবজেক্ট টাইপ তৈরি করে যার প্রপার্টি কীগুলোর টাইপ K এবং ভ্যালুগুলোর টাইপ V হয়?',
      },
      options: [
        { en: 'Record<K, V>', bn: 'Record<K, V>' },
        { en: 'Dictionary<K, V>', bn: 'Dictionary<K, V>' },
        { en: 'MapType<K, V>', bn: 'MapType<K, V>' },
        { en: 'ObjectOf<K, V>', bn: 'ObjectOf<K, V>' },
      ],
      answer: 0,
      hint: { en: 'The standard TypeScript utility is named Record.', bn: 'স্ট্যান্ডার্ড টাইপস্ক্রিপ্ট ইউটিলিটির নাম Record।' },
      explanation: {
        en: 'Record<K, V> is TypeScript built-in utility type for modeling dictionary mappings with key type K and value type V.',
        bn: 'Record<K, V> হলো K টাইপের কী এবং V টাইপের ভ্যালু দিয়ে ডিকশনারি ম্যাপিং তৈরি করার জন্য টাইপস্ক্রিপ্টের অন্তর্নির্মিত ইউটিলিটি টাইপ।',
      },
    },
    {
      id: 'ts-map-ex-4',
      kind: 'predict',
      topic: 'mapped-syntax-token',
      question: {
        en: 'Which keyword appears inside the brackets of a mapped type to iterate over union keys (e.g. [K ... keyof T])?',
        bn: 'ইউনিয়ন কীগুলোর ওপর ইটারেশন চালাতে ম্যাপড টাইপের ব্র্যাকেটের ভেতরে কোন কিওয়ার্ডটি বসে (যেমন [K ... keyof T])?',
      },
      answer: 'in',
      accept: ['in'],
      hint: { en: 'Two-letter word used in for...in loops.', bn: 'for...in লুপে ব্যবহৃত দুই অক্ষরের শব্দ।' },
      explanation: {
        en: 'The in keyword iterates over each property key in the keyof union, mimicking a type-level loop.',
        bn: 'in কিওয়ার্ডটি keyof ইউনিয়নের প্রতিটি প্রপার্টি কী এর ওপর ইটারেশন চালায়, যা টাইপ লেভেলের লুপের মতো কাজ করে।',
      },
    },
  ],
  quiz: {
    id: 'mapped-utility-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'ts-map-q1',
        kind: 'mcq',
        topic: 'pick-vs-omit',
        question: {
          en: 'What is the key difference between Pick<T, K> and Omit<T, K> in TypeScript?',
          bn: 'টাইপস্ক্রিপ্টে Pick<T, K> এবং Omit<T, K> এর মধ্যকার মূল পার্থক্য কী?',
        },
        options: [
          {
            en: 'Pick creates a type including only the specified keys K, while Omit creates a type including everything except K',
            bn: 'Pick কেবল নির্দিষ্ট কী K নিয়ে নতুন টাইপ তৈরি করে, আর Omit K বাদে বাকি সমস্ত প্রপার্টি নিয়ে নতুন টাইপ তৈরি করে',
          },
          {
            en: 'Pick only works on numbers while Omit only works on strings',
            bn: 'Pick কেবল সংখ্যার ওপর কাজ করে এবং Omit কেবল স্ট্রিংয়ের ওপর কাজ করে',
          },
          {
            en: 'Omit executes at runtime while Pick executes at compile time',
            bn: 'Omit রানটাইমে কাজ করে এবং Pick কম্পাইল-টাইমে কাজ করে',
          },
          {
            en: 'Pick mutates the original object while Omit creates a clone',
            bn: 'Pick মূল অবজেক্টকে পরিবর্তন করে ফেলে আর Omit একটি ক্লোন তৈরি করে',
          },
        ],
        answer: 0,
        hint: { en: 'Pick keeps listed keys; Omit removes listed keys.', bn: 'Pick তালিকাভুক্ত কী রাখে; Omit তালিকাভুক্ত কী বাদ দেয়।' },
        explanation: {
          en: 'Pick includes only the requested subset of properties; Omit excludes the specified properties and retains all others.',
          bn: 'Pick কেবল চাওয়া প্রপার্টিগুলো রাখে; Omit নির্দিষ্ট প্রপার্টিগুলো বাদ দিয়ে বাকি সবগুলো রেখে দেয়।',
        },
      },
      {
        id: 'ts-map-q2',
        kind: 'mcq',
        topic: 'item-id-ref',
        question: {
          en: 'In our code walkthrough, what was the numeric ID of the product transformed into the preview object?',
          bn: 'আমাদের কোড আলোচনায় প্রিভিউ অবজেক্টে রূপান্তরিত প্রোডাক্টটির নিউমেরিক আইডি কত ছিল?',
        },
        options: [
          { en: 'ID 101 (Mechanical Keyboard)', bn: 'আইডি ১০১ (মেকানিক্যাল কিবোর্ড)' },
          { en: 'ID 505 (Laptop)', bn: 'আইডি ৫০৫ (ল্যাপটপ)' },
          { en: 'ID 1 (Monitor)', bn: 'আইডি ১ (মনিটর)' },
          { en: 'ID 999 (Mouse)', bn: 'আইডি ৯৯৯ (মাউস)' },
        ],
        answer: 0,
        hint: { en: 'The product was initialized with ID 101.', bn: 'প্রোডাক্টটি ১০১ আইডিসহ শুরু করা হয়েছিল।' },
        explanation: {
          en: 'The base product was declared with id: 101 and title: "Mechanical Keyboard".',
          bn: 'মূল প্রোডাক্টটি id: 101 এবং title: "Mechanical Keyboard" হিসেবে ঘোষিত হয়েছিল।',
        },
      },
      {
        id: 'ts-map-q3',
        kind: 'mcq',
        topic: 'readonly-utility',
        question: {
          en: 'What occurs when code attempts to modify a property on an object typed with Readonly<T>?',
          bn: 'Readonly<T> টাইপযুক্ত কোনো অবজেক্টের প্রপার্টি পরিবর্তন করার চেষ্টা করলে কী ঘটে?',
        },
        options: [
          {
            en: 'TypeScript raises a compile-time error stating that the property is read-only',
            bn: 'টাইপস্ক্রিপ্ট একটি কম্পাইল-টাইম এরর দেয় যে প্রপার্টিটি কেবল পাঠযোগ্য (read-only)',
          },
          {
            en: 'The JavaScript engine restarts the entire web server',
            bn: 'জাভাস্ক্রিপ্ট ইঞ্জিন সম্পূর্ণ ওয়েব সার্ভার রিস্টার্ট করে',
          },
          {
            en: 'The property value is automatically incremented by 1',
            bn: 'প্রপার্টির মান স্বয়ংক্রিয়ভাবে ১ বৃদ্ধি পায়',
          },
          {
            en: 'The code compiles successfully but emits an alert box in the browser',
            bn: 'কোড কোনো সমস্যা ছাড়াই কম্পাইল হয় তবে ব্রাউজারে একটি অ্যালার্ট বক্স দেখায়',
          },
        ],
        answer: 0,
        hint: { en: 'Readonly enforces immutability at compile time.', bn: 'Readonly কম্পাইল-টাইমে অপরিবর্তনীয়তা প্রয়োগ করে।' },
        explanation: {
          en: 'Readonly<T> marks every property with the readonly modifier, causing the compiler to reject reassignments.',
          bn: 'Readonly<T> প্রতিটি প্রপার্টিতে readonly মডিফায়ার যুক্ত করে, ফলে কম্পাইলার যেকোনো মান পরিবর্তনের চেষ্টা আটকে দেয়।',
        },
      },
      {
        id: 'ts-map-q4',
        kind: 'predict',
        topic: 'utility-name-recite',
        question: {
          en: 'Which TypeScript utility type makes all properties of an interface mandatory by stripping away optional modifiers?',
          bn: 'কোন টাইপস্ক্রিপ্ট ইউটিলিটি টাইপটি ঐচ্ছিক মডিফায়ারগুলো মুছে ফেলে ইন্টারফেসের সমস্ত প্রপার্টি থাকা বাধ্যতামূলক করে তোলে?',
        },
        answer: 'Required',
        accept: ['Required', 'Required<T>'],
        hint: { en: 'The opposite of Partial.', bn: 'Partial এর বিপরীত।' },
        explanation: {
          en: 'The Required<T> utility type strips optional ? modifiers, ensuring all properties are required.',
          bn: 'Required<T> ইউটিলিটি টাইপ ঐচ্ছিক ? মডিফায়ারগুলো সরিয়ে দেয় এবং সমস্ত প্রপার্টি বাধ্যতামূলক করে।',
        },
      },
    ],
  },
  nextLesson: {
    slug: 'errors-and-the-never',
    title: { en: 'Errors and the Never Type', bn: 'এরর ও নেভার টাইপ' },
  },
};
