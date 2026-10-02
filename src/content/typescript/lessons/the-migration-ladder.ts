import type { Lesson } from '../../../lib/types';

export const migrationLadderLesson: Lesson = {
  slug: 'the-migration-ladder',
  tech: 'typescript',
  title: {
    en: 'TypeScript Migration & Tooling: Migrating JS, JSDoc & Strict Escalation',
    bn: 'টাইপস্ক্রিপ্ট মাইগ্রেশন ও টুলিং: JS মাইগ্রেশন, JSDoc ও স্ট্রিক্ট স্কেলেশন'
  },
  summary: {
    en: 'Master migrating legacy JavaScript codebases to strict TypeScript across 10 structured topics. Learn incremental migration strategies, allowJs configuration, and in-file // @ts-check validation. Explore JSDoc type annotations, converting files to .ts, responsible @ts-expect-error suppression, untyped module declarations, strict flag escalation, and CI error baselines.',
    bn: '১০টি সুসংগঠিত পয়েন্টে লিগ্যাসি জাভাস্ক্রিপ্ট কোডবেসকে স্ট্রিক্ট টাইপস্ক্রিপ্টে রূপান্তর আয়ত্ত করুন। ধাপে ধাপে মাইগ্রেশন কৌশল, allowJs কনফিগারেশন এবং // @ts-check ভ্যালিডেশন শিখুন। JSDoc টাইপ অ্যানোটেশন, .ts ফাইলে রূপান্তর, @ts-expect-error দিয়ে এরর দমন, টাইপহীন মডিউল ডিক্লারেশন, স্ট্রিক্ট ফ্ল্যাগ প্রয়োগ এবং CI এরর বেসলাইন পদ্ধতি আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-invariant-court',
    title: {
      en: 'TypeScript Invariants & Verification: Exhaustive Checks, never & Variance',
      bn: 'টাইপস্ক্রিপ্ট ইনভ্যারিয়েন্টস ও ভেরিফিকেশন: এক্সহস্টিভ চেক, never ও ভ্যারিয়েন্স'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Incremental Strategy: Why Big-Bang Rewrites Fail', bn: '১. ধাপে ধাপে মাইগ্রেশন: এক ধাক্কায় সম্পূর্ণ কোড পুনর্লিখন কেন ব্যর্থ হয়' } },
    {
      type: 'para',
      text: {
        en: 'Rewriting a 100,000-line JavaScript codebase into TypeScript all at once halts feature development for months and introduces subtle regressions. The industry standard is Incremental Migration: allowing JavaScript and TypeScript to coexist harmoniously, converting files module by module while shipping product updates continuously.',
        bn: '১০০,০০০ লাইনের একটি বিশাল জাভাস্ক্রিপ্ট প্রজেক্টকে এক ধাক্কায় টাইপস্ক্রিপ্ট করতে গেলে নতুন ফিচার তৈরি মাসের পর মাস বন্ধ থাকে এবং নতুন ভুলের জন্ম হয়। আধুনিক ইন্ডাস্ট্রিতে তাই Incremental Migration অনুসরণ করা হয়: যেখানে জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্ট পাশাপাশি শান্তিতে থাকে এবং প্রজেক্ট চালু রেখেই একটি একটি করে ফাইল মাইগ্রেট করা হয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Incremental Migration Ladder',
        bn: 'ধাপে ধাপে মাইগ্রেশনের সিঁড়ি'
      },
      caption: {
        en: 'Codebases migrate safely by escalating compiler strictness gradually from allowJs to strict enforcement.',
        bn: 'allowJs থেকে শুরু করে ধাপে ধাপে স্ট্রিক্টনেস বাড়িয়ে লিগ্যাসি কোড নিরাপদে রূপান্তর করা হয়।'
      },
      svg: `<svg viewBox="0 0 680 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="160" rx="10" fill="#0f172a"/>
  <rect x="25" y="45" width="135" height="70" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="92" y="70" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold" font-family="monospace">Rung 0: allowJs</text>
  <text x="92" y="95" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">Builds pass</text>
  <path d="M 160 80 L 185 80" stroke="#64748b" stroke-width="2"/>
  <rect x="185" y="45" width="135" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="252" y="70" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Rung 1: @ts-check</text>
  <text x="252" y="95" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">JSDoc types</text>
  <path d="M 320 80 L 345 80" stroke="#64748b" stroke-width="2"/>
  <rect x="345" y="45" width="135" height="70" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="412" y="70" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">Rung 2: Rename .ts</text>
  <text x="412" y="95" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">Convert modules</text>
  <path d="M 480 80 L 505 80" stroke="#64748b" stroke-width="2"/>
  <rect x="505" y="45" width="150" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="580" y="70" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">Rung 3: strict: true</text>
  <text x="580" y="95" text-anchor="middle" fill="#a7f3d0" font-size="10" font-family="monospace">Zero debt baseline</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Hybrid Architecture: TypeScript imports existing JavaScript modules seamlessly!
// Inside src/dashboard.ts:
// import { calculateLegacyTax } from "./legacyBilling.js";

console.log("Coexistence strategy: JavaScript and TypeScript run together side-by-side");
// Output: Coexistence strategy: JavaScript and TypeScript run together side-by-side`,
      caption: {
        en: 'Incremental migration allows JavaScript and TypeScript files to import each other during transition.',
        bn: 'ধাপে ধাপে মাইগ্রেশন প্রক্রিয়ায় জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্ট ফাইল একে অপরকে ব্যবহার করতে পারে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Rung Zero: allowJs and Initial Compiler Integration', bn: '২. শূন্যতম ধাপ: allowJs চালু ও কম্পাইলার একীভূতকরণ' } },
    {
      type: 'para',
      text: {
        en: 'The first step of migration requires configuring tsconfig.json with "allowJs": true and "checkJs": false. This lets the TypeScript compiler process existing .js files and bundle them without throwing errors on untyped code, establishing the compiler infrastructure without breaking existing builds.',
        bn: 'মাইগ্রেশনের প্রথম পদক্ষেপে tsconfig.json-এ "allowJs": true এবং "checkJs": false সেট করা হয়। এর ফলে টাইপস্ক্রিপ্ট কম্পাইলার বিদ্যমান .js ফাইলগুলোকে গ্রহণ করে কিন্তু কোনো টাইপহীন কোডের জন্য এরর দেয় না, ফলে চলমান বিল্ড নষ্ট না করেই কম্পাইলার কাঠামো দাঁড়িয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'json',
      code: `{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "allowJs": true,        // Accepts .js files in build pipeline
    "checkJs": false,       // Does not enforce type errors on legacy JS yet
    "noEmit": true,         // Pure type-checking without writing files
    "skipLibCheck": true
  },
  "include": ["src/**/*"]
}`,
      caption: {
        en: 'allowJs: true brings legacy JavaScript files into the compiler graph safely.',
        bn: 'allowJs: true পুরনো জাভাস্ক্রিপ্ট ফাইলগুলোকে নিরাপদে কম্পাইলারের আওতায় আনে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Rung One: In-File Type Checking with // @ts-check', bn: '৩. প্রথম ধাপ: // @ts-check দিয়ে ফাইলে টাইপ চেকিং' } },
    {
      type: 'para',
      text: {
        en: 'Before renaming a single file, you can enable TypeScript analysis in individual JavaScript files by placing // @ts-check at the very top. The compiler activates static type checking in that specific file while it remains a valid .js file executable by Node.js or browsers.',
        bn: 'কোনো ফাইলের এক্সটেনশন পরিবর্তন না করেই ফাইলের একদম শুরুতে // @ts-check কমেন্ট লিখে টাইপস্ক্রিপ্ট সক্রিয় করা যায়। এতে ফাইলটি সাধারণ জাভাস্ক্রিপ্ট (.js) থাকা সত্ত্বেও কম্পাইলার তার ভেতরের সব টাইপ যাচাই শুরু করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// @ts-check

/**
 * Calculates discount percentage
 * @param {number} price
 * @param {number} discountRatio
 */
function applyDiscount(price, discountRatio) {
  return price * (1 - discountRatio);
}

// ❌ TypeScript catches typos inside plain .js file!
// applyDiscount("500", 0.1); // Error: Argument of type 'string' is not assignable to 'number'

const finalPrice = applyDiscount(500, 0.1);
console.log("Discounted price:", finalPrice); // 450`,
      caption: {
        en: '// @ts-check enables static analysis inside pure JavaScript files.',
        bn: '// @ts-check সাধারণ জাভাস্ক্রিপ্ট ফাইলেও স্ট্যাটিক টাইপ চেকিং চালু করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. JSDoc Type Syntax: Typing JavaScript without TypeScript', bn: '৪. JSDoc টাইপ সিনট্যাক্স: টাইপস্ক্রিপ্ট ছাড়াই জাভাস্ক্রিপ্ট টাইপ করা' } },
    {
      type: 'para',
      text: {
        en: 'JSDoc comments provide full type safety without changing file formats. Use @param to type arguments, @returns to type outputs, and @typedef to define complex object interfaces and reusable type aliases directly in comments.',
        bn: 'JSDoc কমেন্টের সাহায্যে কোনো কোড বা ফাইলের ধরন না বদলে খাঁটি জাভাস্ক্রিপ্টেই পূর্ণ টাইপ নিরাপত্তা পাওয়া যায়। কমেন্টের ভেতর @param দিয়ে আর্গুমেন্ট, @returns দিয়ে রিটার্ন টাইপ এবং @typedef দিয়ে অবজেক্ট ইন্টারফেস তৈরি করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `/**
 * @typedef {Object} OrderItem
 * @property {string} sku
 * @property {number} quantity
 * @property {number} unitPrice
 */

/**
 * @param {OrderItem[]} items
 * @returns {number}
 */
function calculateOrderTotal(items) {
  return items.reduce((acc, curr) => acc + curr.quantity * curr.unitPrice, 0);
}

const total = calculateOrderTotal([{ sku: "A1", quantity: 2, unitPrice: 50 }]);
console.log("Calculated total order:", total); // 100`,
      caption: {
        en: 'JSDoc @typedef constructs full structural object types in comment annotations.',
        bn: 'JSDoc @typedef কমেন্টের ভেতরেই পূর্ণাঙ্গ অবজেক্ট টাইপ তৈরি করতে পারে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Rung Two: The File Extension Pivot (.js to .ts)', bn: '৫. দ্বিতীয় ধাপ: ফাইলের এক্সটেনশন বদল (.js থেকে .ts)' } },
    {
      type: 'para',
      text: {
        en: 'When a module is ready, rename the file extension from .js to .ts (or .jsx to .tsx). TypeScript now treats it as native TypeScript. At this stage, leave implicit any enabled so you can focus on fixing syntax discrepancies and explicit module import paths.',
        bn: 'যখন কোনো মডিউল প্রস্তুত হয়, তখন তার এক্সটেনশন .js থেকে .ts (বা .jsx থেকে .tsx) করে দেওয়া হয়। টাইপস্ক্রিপ্ট এটিকে তখন সরাসরি নিজের কোড হিসেবে গ্রহণ করে। এই ধাপে implicit any সহ্য করা হয় যাতে শুরুতে কেবল ইমপোর্ট এবং মূল সিনট্যাক্স ঠিক করার ওপর নজর দেওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Renaming critical utility module to TypeScript:
git mv src/utils/formatters.js src/utils/formatters.ts

# Run compiler to inspect newly converted file:
npx tsc --noEmit
# Result: Native TypeScript typing enabled for formatters.ts!`,
      caption: {
        en: 'Renaming files one at a time ensures manageable, bite-sized pull requests.',
        bn: 'একে একে ফাইলের নাম পরিবর্তন করলে পরিবর্তনগুলো সহজে পর্যালোচনা করা যায়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Suppressing Errors Responsibly: @ts-expect-error', bn: '৬. দায়িত্বশীল এরর দমন: @ts-expect-error বনাম @ts-ignore' } },
    {
      type: 'para',
      text: {
        en: 'During migration, some complex legacy code cannot be immediately typed. Never use @ts-ignore, which permanently mutes errors even after code is fixed! Use // @ts-expect-error instead: if a subsequent refactor fixes the underlying issue, TypeScript flags the unused suppression comment, preventing stale comment rot.',
        bn: 'মাইগ্রেশনের সময় কিছু জটিল কোডের টাইপ সাথে সাথে ঠিক করা সম্ভব হয় না। তখন কখনোই @ts-ignore দেবেন না, কারণ কোড ঠিক হয়ে গেলেও এটি অন্ধের মতো বসে থাকে। এর বদলে // @ts-expect-error ব্যবহার করুন: পরবর্তীতে কোড ঠিক হয়ে গেলে কম্পাইলার নিজে থেকেই কমেন্টটি মুছে ফেলার তাগিদ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// ❌ BAD: Permanently hides compiler bugs forever
// // @ts-ignore
// const data = legacyModule.badMethod();

// ✅ PROFESSIONAL: Expects an error during transitional migration
// @ts-expect-error: Legacy untyped third-party library returns untyped payload
const rawData: string = legacyLibrary.fetchData();

console.log("Safe suppression documented with explicit rationale");
// Output: Safe suppression documented with explicit rationale`,
      caption: {
        en: '@ts-expect-error enforces that a suppression comment must actually suppress an active error.',
        bn: '@ts-expect-error নিশ্চিত করে যে অপ্রয়োজনীয় বা বাতিল সাপ্রেশন কমেন্ট কোডে জমে থাকবে না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Bridging Untyped Third-Party Libraries: Ambient Modules', bn: '৭. টাইপহীন থার্ড-পার্টি লাইব্রেরি ব্রিজ: অ্যাম্বিয়েন্ট মডিউল' } },
    {
      type: 'para',
      text: {
        en: 'If a project depends on an obscure npm library that has no @types package, importing it triggers "Could not find a declaration file for module". You can create an ambient declarations file (types/ambient.d.ts) and add declare module "library-name" to unblock the compiler.',
        bn: 'প্রজেক্টে এমন কোনো পুরনো npm প্যাকেজ থাকতে পারে যার কোনো @types ফাইল নেই, ফলে ইমপোর্ট করলেই কম্পাইলার লাল দাগ দেখায়। এটি সমাধান করতে types/ambient.d.ts ফাইলে declare module "library-name" লিখে দিলে কম্পাইলার খুশি হয়ে পরবর্তী কাজে এগোতে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// Inside types/untyped-modules.d.ts:
declare module "legacy-payment-sdk" {
  // Shorthand ambient module: gives 'any' type to all exports
  const content: any;
  export default content;
}

// In your TypeScript code:
// import PaymentSDK from "legacy-payment-sdk";
// PaymentSDK.charge({ amount: 100 }); // Compiles cleanly without blocking!

console.log("Ambient module declaration unblocks third-party imports");
// Output: Ambient module declaration unblocks third-party imports`,
      caption: {
        en: 'Ambient module declarations create immediate bridges for untyped npm dependencies.',
        bn: 'অ্যাম্বিয়েন্ট মডিউল ডিক্লারেশন টাইপহীন প্যাকেজগুলোকে কোনো ঝামেলা ছাড়াই ব্যবহারযোগ্য করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Rung Three: Enforcing Explicit Types with noImplicitAny', bn: '৮. তৃতীয় ধাপ: noImplicitAny দিয়ে টাইপ বাধ্যতামূলক করা' } },
    {
      type: 'para',
      text: {
        en: 'Once most files are converted to .ts, turn on "noImplicitAny": true in tsconfig.json. This forces developers to annotate all function parameters and unresolved variables. Any temporary gaps must be explicitly typed as any (preferably quarantined with a TODO comment).',
        bn: 'অধিকাংশ ফাইল .ts হয়ে যাওয়ার পর tsconfig.json-এ "noImplicitAny": true চালু করা হয়। এটি ডেভেলপারদের প্রতিটি ফাংশন প্যারামিটারে স্পষ্ট টাইপ লিখতে বাধ্য করে। সাময়িক কোনো জটিলতা থাকলে নিজে হাতে any লিখে TODO কমেন্ট দিয়ে রাখতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// With noImplicitAny enabled:
// Explicit typing required on all function boundaries:
function processPayment(accountNumber: string, amount: number): boolean {
  if (amount <= 0) return false;
  return true;
}

console.log("Payment processed status:", processPayment("ACC-901", 250)); // true`,
      caption: {
        en: 'noImplicitAny guarantees that all function signatures declare explicit contracts.',
        bn: 'noImplicitAny নিশ্চিত করে যে প্রতিটি ফাংশন তার ইনপুট ও আউটপুটের স্পষ্ট চুক্তি মেনে চলবে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Rung Four: Banishing Null References with strictNullChecks', bn: '৯. চতুর্থ ধাপ: strictNullChecks দিয়ে নাল সমস্যা দূরীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'The most impactful step in any migration is enabling "strictNullChecks": true. This separates null and undefined into distinct types. Every place where an array lookup or DOM query might miss must now be handled with optional chaining (?.) or nullish coalescing (??).',
        bn: 'মাইগ্রেশনের সবচেয়ে শক্তিশালী পদক্ষেপ হলো "strictNullChecks": true চালু করা। এটি null এবং undefined-কে আলাদা টাইপ বানিয়ে দেয়। ফলে যেখানেই কোনো ভ্যালু খালি থাকার সামান্যতম সুযোগ থাকে, সেখানেই অপশনাল চেইনিং (?.) বা নালিশ কোলেসিং (??) দিয়ে কোডকে ১০০% নিরাপদ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `interface CustomerRecord {
  name: string;
  shippingAddress?: {
    city: string;
    postalCode: string;
  };
}

function getCity(customer: CustomerRecord): string {
  // Safe navigation with optional chaining and fallback:
  return customer.shippingAddress?.city ?? "Default City";
}

console.log(getCity({ name: "Farhan" })); // "Default City"
console.log(getCity({ name: "Farhan", shippingAddress: { city: "Sylhet", postalCode: "3100" } })); // "Sylhet"`,
      caption: {
        en: 'strictNullChecks elevates null and undefined to first-class types requiring explicit handling.',
        bn: 'strictNullChecks খালি মানগুলোকে প্রথম শ্রেণীর টাইপে রূপান্তর করে সচেতন ব্যবহারের দাবি জানায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Rung Five: Full Strict Escalation and CI Error Baselining', bn: '১০. পঞ্চম ধাপ: পূর্ণ স্ট্রিক্ট মোড ও CI এরর বেসলাইন' } },
    {
      type: 'para',
      text: {
        en: 'The final destination is "strict": true. To prevent new code from violating rules while legacy files are still being polished, teams establish an Error Baseline in CI. The pipeline records the count of existing errors; if a pull request introduces even ONE new error, the CI build fails, ensuring tech debt only shrinks.',
        bn: 'মাইগ্রেশনের চূড়ান্ত গন্তব্য হলো "strict": true। পুরনো কোড পুরোপুরি ঠিক হওয়ার আগেই নতুন কোডে ভুল ঢোকা বন্ধ করতে CI পাইপলাইনে Error Baseline রাখা হয়। এতে পুরনো ভুলের সংখ্যা একটি ফাইলে লিখে রাখা হয়; কোনো ডেভেলপার নতুন একটি ভুলও যোগ করলে CI লাল হয়ে আটকে যায়—ফলে প্রযুক্তিগত ঋণ কেবল কমতেই থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# CI Quality Gate: Error baseline check
CURRENT_ERRORS=$(npx tsc --noEmit | grep -c "error TS")
ALLOWED_BASELINE=12

if [ "$CURRENT_ERRORS" -gt "$ALLOWED_BASELINE" ]; then
  echo "❌ CI FAILED: New TypeScript errors introduced! ($CURRENT_ERRORS > $ALLOWED_BASELINE)"
  exit 1
else
  echo "✅ CI PASSED: TypeScript error count within approved baseline ($CURRENT_ERRORS/$ALLOWED_BASELINE)"
fi`,
      caption: {
        en: 'Error baselines in CI guarantee that technical debt decreases monotonically over time.',
        bn: 'সিআই বেসলাইন নিশ্চিত করে যে সময়ের সাথে সাথে টাইপের ত্রুটি কেবল কমবেই, কখনো বাড়বে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-mig-ex1',
      kind: 'predict',
      topic: 'typescript: error suppression comment',
      question: {
        en: 'Which TypeScript suppression comment is preferred over @ts-ignore because it fails compilation if the underlying error is fixed?',
        bn: 'কোন কমেন্টটি @ts-ignore-এর চেয়ে শ্রেয় কারণ কোডের ভুল ঠিক হয়ে গেলে এটি নিজে থেকেই কম্পাইল এরর দিয়ে মনে করিয়ে দেয়?'
      },
      code: `/* Responsible temporary error suppression */
/* // @ts-___________: Legacy module signature mismatch */`,
      answer: 'expect-error',
      accept: ['expect-error', '@ts-expect-error', 'ts-expect-error'],
      hint: {
        en: 'It expects an error.',
        bn: 'এটি একটি এরর আশা করে।'
      },
      explanation: {
        en: '// @ts-expect-error suppresses an error on the next line, but TypeScript flags an error if NO error actually occurs, preventing stale suppression comments.',
        bn: '// @ts-expect-error সাময়িক ভুল দমন করে, কিন্তু কোড ঠিক হয়ে গেলে কোনো ভুল না পেলে কম্পাইলার সতর্ক করে যাতে কমেন্টটি মুছে ফেলা যায়।'
      }
    },
    {
      id: 'ts-mig-ex2',
      kind: 'mcq',
      topic: 'typescript: @ts-check utility',
      question: {
        en: 'What does adding // @ts-check at the top of a .js file do?',
        bn: 'একটি সাধারণ .js ফাইলের একদম শুরুতে // @ts-check লিখলে কী ঘটে?'
      },
      options: [
        { en: 'Enables TypeScript static type checking and JSDoc validation inside that specific JavaScript file', bn: 'সেই নির্দিষ্ট জাভাস্ক্রিপ্ট ফাইলের ভেতর টাইপস্ক্রিপ্ট স্ট্যাটিক টাইপ চেকিং এবং JSDoc ভ্যালিডেশন চালু করে' },
        { en: 'Converts the file to C++ binary', bn: 'ফাইলকে সি++ বাইনারিতে রূপান্তর করে' },
        { en: 'Deletes all console.log statements', bn: 'সব console.log মুছে দেয়' },
        { en: 'Uploads the file to GitHub', bn: 'GitHub-এ ফাইল আপলোড করে' }
      ],
      answer: 0,
      hint: {
        en: 'Enables type checking without renaming.',
        bn: 'নাম না বদলে টাইপ চেকিং চালু করে।'
      },
      explanation: {
        en: '// @ts-check activates the TypeScript type-checker in pure JavaScript files, interpreting JSDoc comments as type annotations.',
        bn: '// @ts-check সাধারণ জাভাস্ক্রিপ্ট ফাইলেই টাইপস্ক্রিপ্ট ইঞ্জিন সক্রিয় করে এবং কমেন্টগুলোকে টাইপ হিসেবে মূল্যায়ন করে।'
      }
    },
    {
      id: 'ts-mig-ex3',
      kind: 'mcq',
      topic: 'typescript: allowJs compiler option',
      question: {
        en: 'Why is "allowJs": true the essential prerequisite for incremental TypeScript migration?',
        bn: 'ধাপে ধাপে টাইপস্ক্রিপ্ট মাইগ্রেশন করার জন্য "allowJs": true কেন প্রথম ও অপরিহার্য পূর্বশর্ত?'
      },
      options: [
        { en: 'It allows JavaScript and TypeScript files to coexist in the same project and import each other', bn: 'এটি জাভাস্ক্রিপ্ট এবং টাইপস্ক্রিপ্ট ফাইলকে একই প্রজেক্টে পাশাপাশি থাকতে এবং একে অপরকে ইমপোর্ট করার সুযোগ দেয়' },
        { en: 'It automatically rewrites all files for you', bn: 'নিজে নিজেই সব কোড বদলে ফেলে' },
        { en: 'It eliminates all runtime bugs', bn: 'সব বাগ দূর করে' },
        { en: 'It makes Node.js obsolete', bn: 'Node.js অপ্রয়োজনীয় বানিয়ে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Allows JS and TS coexistence.',
        bn: 'জাভাস্ক্রিপ্ট ও টাইপস্ক্রিপ্টের সহাবস্থান নিশ্চিত করে।'
      },
      explanation: {
        en: 'allowJs lets the compiler include .js files in the build pipeline, enabling gradual file-by-file conversion without stopping ongoing development.',
        bn: 'allowJs কম্পাইলারকে .js ফাইল পড়তে দেয়, ফলে নতুন কাজ থামিয়ে না রেখেই আস্তে আস্তে প্রজেক্ট মাইগ্রেট করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'ts-migration-quiz',
    title: { en: 'TypeScript Migration & Tooling Quiz', bn: 'টাইপস্ক্রিপ্ট মাইগ্রেশন ও টুলিং কুইজ' },
    questions: [
      {
        id: 'tmq1',
        kind: 'mcq',
        topic: 'typescript: error baselining in CI',
        question: {
          en: 'What is the purpose of an Error Baseline in an ongoing TypeScript migration CI pipeline?',
          bn: 'চলমান টাইপস্ক্রিপ্ট মাইগ্রেশনে CI পাইপলাইনে Error Baseline ব্যবহারের মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To freeze existing legacy errors so that new PRs are rejected if they introduce any additional errors, guaranteeing debt only decreases', bn: 'পুরনো ভুলগুলোকে স্থির রাখা যাতে নতুন কোনো পিআরে বাড়তি ভুল এলে তা আটকে দেওয়া যায় এবং ঋণ কেবল কমতেই থাকে' },
          { en: 'To delete all error logs from disk', bn: 'সব এরর লগ মুছে দিতে' },
          { en: 'To make the build run without internet', bn: 'ইন্টারনেট ছাড়া বিল্ড চালাতে' },
          { en: 'To convert CSS to Sass', bn: 'সিএসএসকে স্যাসে রূপান্তর করতে' }
        ],
        answer: 0,
        hint: {
          en: 'Ensures error count only goes down.',
          bn: 'ভুলের সংখ্যা যেন কেবল হ্রাস পায় তা নিশ্চিত করে।'
        },
        explanation: {
          en: 'An error baseline ensures that migration progress is ratcheted: team members cannot add new type errors while working on existing legacy codebases.',
          bn: 'এরর বেসলাইন নিশ্চিত করে যে প্রজেক্টে কোনো নতুন টাইপ এরর ঢুকতে পারবে না এবং ধীরে ধীরে কোডের মান উন্নত হবে।'
        }
      },
      {
        id: 'tmq2',
        kind: 'mcq',
        topic: 'typescript: ambient module declarations',
        question: {
          en: 'How do you prevent TypeScript from complaining when importing an untyped third-party npm package that has no @types package?',
          bn: 'যেসব পুরনো npm প্যাকেজের কোনো @types প্যাকেজ নেই, সেগুলোকে ইমপোর্ট করার সময় এরর বন্ধ করতে কী করা হয়?'
        },
        options: [
          { en: 'Declare an ambient module in a .d.ts file (e.g. declare module "package-name";)', bn: 'একটি .d.ts ফাইলে অ্যাম্বিয়েন্ট মডিউল ঘোষণা করে (যেমন: declare module "package-name";)' },
          { en: 'Uninstall the npm package', bn: 'প্যাকেজটি আনইনস্টল করে' },
          { en: 'Reboot the server', bn: 'সার্ভার রিবুট করে' },
          { en: 'Change package.json version to 0.0.0', bn: 'প্যাকেজের ভার্সন ০.০.০ করে' }
        ],
        answer: 0,
        hint: {
          en: 'declare module in a .d.ts file.',
          bn: '.d.ts ফাইলে declare module লিখুন।'
        },
        explanation: {
          en: 'Adding declare module "package-name" provides an ambient fallback declaration, typing its exports as any and unblocking the compiler.',
          bn: 'declare module "package-name" লিখে দিলে কম্পাইলার ধরে নেয় যে এই লাইব্রেরিটি বৈধ এবং এরর দেওয়া বন্ধ করে।'
        }
      },
      {
        id: 'tmq3',
        kind: 'mcq',
        topic: 'typescript: ts-expect-error advantages',
        question: {
          en: 'Why is @ts-expect-error strongly preferred over @ts-ignore during an incremental migration?',
          bn: 'ধাপে ধাপে মাইগ্রেশনের সময় @ts-ignore-এর চেয়ে @ts-expect-error কেন বেশি উপযোগী?'
        },
        options: [
          { en: 'If a future fix resolves the underlying type error, @ts-expect-error will trigger a compile error alerting developers to remove the obsolete comment', bn: 'ভবিষ্যতে কোনো কোড পরিবর্তনের ফলে এররটি ঠিক হয়ে গেলে @ts-expect-error নিজে কম্পাইল এরর দেয় যাতে অপ্রয়োজনীয় মন্তব্য মুছে ফেলা যায়' },
          { en: '@ts-expect-error runs faster in Webpack', bn: '@ts-expect-error ওয়েবপ্যাকে দ্রুত চলে' },
          { en: '@ts-ignore was deleted from the TypeScript language', bn: '@ts-ignore টাইপস্ক্রিপ্ট থেকে বাদ দেওয়া হয়েছে' },
          { en: 'It automatically fixes the JavaScript bug', bn: 'এটি স্বয়ংক্রিয়ভাবে জাভাস্ক্রিপ্ট বাগ দূর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Fails when the error is fixed, preventing stale suppression comments.',
          bn: 'ভুল ঠিক হয়ে গেলে সতর্ক করে যাতে পুরনো কমেন্ট জমে না থাকে।'
        },
        explanation: {
          en: '@ts-expect-error ensures error suppressions are temporary: once the underlying type error is fixed, TypeScript raises an unused directive warning.',
          bn: '@ts-expect-error নিশ্চিত করে যে অপ্রয়োজনীয় সাপ্রেশন কমেন্ট কোডে জমে থাকবে না; সমস্যা সমাধান হলে এটি নতুন ওয়ার্নিং দিয়ে কমেন্ট মুছতে বলে।'
        }
      },
      {
        id: 'tmq4',
        kind: 'mcq',
        topic: 'typescript: ts-check directive',
        question: {
          en: 'What does adding // @ts-check at the top of a JavaScript (.js) file do?',
          bn: 'একটি জাভাস্ক্রিপ্ট (.js) ফাইলের শীর্ষে // @ts-check যোগ করলে কী ঘটে?'
        },
        options: [
          { en: 'It instructs TypeScript to type-check that individual JavaScript file in the editor without renaming the extension to .ts', bn: 'ফাইলটির নাম .ts না বদলে এডিটরকে ওই জাভাস্ক্রিপ্ট ফাইলটিতে তাৎক্ষণিকভাবে টাইপ পরীক্ষা চালাতে নির্দেশ দেয়' },
          { en: 'It bundles the file with Babel', bn: 'এটি ব্যাবলের মাধ্যমে ফাইলটি বান্ডল করে' },
          { en: 'It turns the JavaScript code into WebAssembly', bn: 'এটি কোডকে ওয়েবঅ্যাসেম্বলিতে রূপান্তর করে' },
          { en: 'It deletes all console log statements', bn: 'এটি সব কনসোল লগ স্টেটমেন্ট মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Enables type-checking per JS file.',
          bn: 'জাভাস্ক্রিপ্ট ফাইলে টাইপ-চেকিং সক্রিয় করে।'
        },
        explanation: {
          en: '// @ts-check activates type checking in regular JavaScript files, validating JSDoc annotations without requiring an immediate .ts rename.',
          bn: '// @ts-check কমেন্টটি জাভাস্ক্রিপ্ট ফাইলে টাইপ চেকিং সক্রিয় করে, ফলে কোড রিনেম না করেই দ্রুত ভুল ধরা সম্ভব হয়।'
        }
      }
    ]
  }
};
