import type { Lesson } from '../../../lib/types';

export const networkingGuardLesson: Lesson = {
  slug: 'the-networking-guard',
  tech: 'typescript',
  title: {
    en: 'TypeScript at Network Boundaries: Fetch, Zod Schemas & Unknown Errors',
    bn: 'নেটওয়ার্ক সীমান্তে টাইপস্ক্রিপ্ট: Fetch, Zod স্কিমা ও অজানা ত্রুটি'
  },
  summary: {
    en: 'Master network boundary type safety across 10 structured topics. Understand compile-time erasure at the wire, the Promise<any> trap, and typing async functions. Explore runtime validation with Zod and z.infer, safe parsing, honest error handling, Error narrowing with instanceof, and discriminated FetchState<T> state machines.',
    bn: '১০টি সুসংগঠিত পয়েন্টে নেটওয়ার্ক সীমানায় টাইপ নিরাপত্তা আয়ত্ত করুন। তারের মুখে কম্পাইল-টাইম ইরেজার, Promise<any> ফাঁদ এবং অ্যাসিনক্রোনাস ফাংশন টাইপিং বুঝুন। Zod ও z.infer দিয়ে রানটাইম ভ্যালিডেশন, নিরাপদ পার্সিং, সৎ এরর হ্যান্ডলিং, instanceof দিয়ে এরর ন্যারোইং এবং ডিসক্রিমিনেটেড FetchState<T> স্টেট মেশিন আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-framework-bond',
    title: {
      en: 'TypeScript with React: Typed Props, Hooks, Events & Context',
      bn: 'রিঅ্যাক্টে টাইপস্ক্রিপ্ট: টাইপকৃত Props, Hooks, Events ও Context'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Erasure Boundary: Why Types Cannot Protect the Wire', bn: '১. ইরেজার সীমান্ত: তারের ওপর টাইপ কেন নিরাপত্তা দিতে পারে না' } },
    {
      type: 'para',
      text: {
        en: 'TypeScript types exist purely at compile time. When your code is bundled and shipped to production, all type annotations are completely erased. The network boundary (HTTP responses, WebSockets, external APIs) is outside the compiler’s jurisdiction. If a backend renames a field, your static types will lie unless verified at runtime.',
        bn: 'টাইপস্ক্রিপ্ট টাইপ কেবল কোড কম্পাইল করার সময় বিদ্যমান থাকে। কোড যখন ব্রাউজারে বা সার্ভারে রান করে, তখন সমস্ত টাইপ সম্পূর্ণ মুছে যায়। ফলে বাইরের নেটওয়ার্ক থেকে আসা ডেটা (যেমন HTTP এপিআই রেসপন্স) কম্পাইলারের নিয়ন্ত্রণের বাইরে থাকে। সার্ভার যদি কোনো ফিল্ডের নাম বদলে দেয়, তবে রানটাইমে যাচাই না করলে আপনার কোড নিশ্চিত ক্র্যাশ করবে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Network Boundary Shield',
        bn: 'নেটওয়ার্ক সীমানা নিরাপত্তা বলয়'
      },
      caption: {
        en: 'Untrusted wire payloads pass through runtime schemas before entering type-safe application code.',
        bn: 'অবিশ্বস্ত নেটওয়ার্ক ডেটা টাইপ-নিরাপদ অ্যাপ্লিকেশনে প্রবেশের আগে রানটাইম স্কিমার মাধ্যমে যাচাই করা হয়।'
      },
      svg: `<svg viewBox="0 0 680 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="160" rx="10" fill="#0f172a"/>
  <rect x="25" y="35" width="170" height="90" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2"/>
  <text x="110" y="65" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold" font-family="monospace">Untrusted Wire</text>
  <text x="110" y="90" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">JSON Payload</text>
  <text x="110" y="108" text-anchor="middle" fill="#fda4af" font-size="11" font-family="monospace">type: unknown</text>
  <path d="M 205 80 L 245 80" stroke="#64748b" stroke-width="2"/>
  <rect x="250" y="35" width="180" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="340" y="65" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace">Zod Guard</text>
  <text x="340" y="90" text-anchor="middle" fill="#e2e8f0" font-size="11" font-family="monospace">safeParse(data)</text>
  <text x="340" y="108" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">Runtime Schema</text>
  <path d="M 440 80 L 480 80" stroke="#64748b" stroke-width="2"/>
  <rect x="485" y="35" width="170" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
  <text x="570" y="65" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace">Typed Domain</text>
  <text x="570" y="90" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">z.infer&lt;Schema&gt;</text>
  <text x="570" y="108" text-anchor="middle" fill="#a7f3d0" font-size="11" font-family="monospace">Guaranteed Safe</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// At compile time: TypeScript believes this contract is rock-solid
interface UserResponse {
  id: string;
  email: string;
}

// At runtime: The server actually sent: { user_id: 101, mail: "a@b.com" }
// Blind casting is just an assertion of hope:
// const user = await res.json() as UserResponse;
// user.id.toUpperCase(); // 💥 TypeError: Cannot read properties of undefined!`,
      caption: {
        en: 'Type assertions (as Type) do not validate runtime JSON payloads.',
        bn: 'টাইপ কাস্টিং (as Type) রানটাইমে আসা আসল ডেটা যাচাই করতে পারে না।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Danger Zone: response.json() Returns Promise<any>', bn: '২. বিপদের কেন্দ্র: response.json() মূলত Promise<any> দেয়' } },
    {
      type: 'para',
      text: {
        en: 'In the standard browser DOM library, calling response.json() returns Promise<any>. The any type immediately silences all compiler checks, allowing arbitrary property accesses that can crash in production. Treating raw API responses as unknown forces you to validate before using.',
        bn: 'ব্রাউজারের স্ট্যান্ডার্ড ফেচ এপিআইতে response.json() কল করলে তা Promise<any> ফেরত দেয়। আর any টাইপ ঢোকার সাথে সাথে টাইপস্ক্রিপ্টের সব নিরাপত্তা পাহারা বন্ধ হয়ে যায়। এই বিপদ এড়াতে কাঁচা ডেটাকে unknown হিসেবে গ্রহণ করে আগে ভ্যালিডেট করা বাধ্যতামূলক করা উচিত।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `// ❌ RISKY: response.json() is 'any', letting typos slip through without warnings
// const data = await response.json();
// console.log(data.nonExistentField.subProperty); // Compiles cleanly, crashes in prod!

// ✅ SAFE: Capture as unknown, forcing validation before usage
async function fetchRaw(url: string): Promise<unknown> {
  const response = await fetch(url);
  return (await response.json()) as unknown;
}`,
      caption: {
        en: 'Typing API payloads as unknown forces developers to narrow or validate before use.',
        bn: 'কাঁচা ডেটাকে unknown হিসেবে ধরলে ব্যবহারের আগে যাচাই করতে বাধ্য হতে হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Typing Async Functions: The Promise<T> Contract', bn: '৩. অ্যাসিনক্রোনাস ফাংশন টাইপিং: Promise<T> চুক্তি' } },
    {
      type: 'para',
      text: {
        en: 'Every async function in JavaScript automatically wraps its return value in a Promise. In TypeScript, an async function that returns a number must have a return type annotation of Promise<number>. Declaring return types explicitly prevents accidentally returning undefined or incomplete data.',
        bn: 'জাভাস্ক্রিপ্টে যেকোনো async ফাংশন স্বয়ংক্রিয়ভাবে তার রিটার্ন মানকে প্রমিজে মুড়ে দেয়। টাইপস্ক্রিপ্টে তাই async ফাংশনের রিটার্ন টাইপ লিখতে হয় Promise<T> আকারে। স্পষ্ট রিটার্ন টাইপ লিখে দিলে অসাবধানতাবশত ভুল ডেটা বা undefined ফেরত দেওয়ার কোনো সুযোগ থাকে না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `interface ProductSummary {
  sku: string;
  priceInCents: number;
}

// Explicit Promise<ProductSummary> return type contract:
async function getProduct(sku: string): Promise<ProductSummary> {
  return {
    sku,
    priceInCents: 2499
  };
}

getProduct("BOOK-01").then((p) => {
  console.log("Product price in USD:", (p.priceInCents / 100).toFixed(2)); // "24.99"
});`,
      caption: {
        en: 'Async functions always declare Promise<T> return types.',
        bn: 'অ্যাসিনক্রোনাস ফাংশন সবসময় Promise<T> রিটার্ন টাইপ ঘোষণা করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Runtime Schema Validation: The Zod Bridge', bn: '৪. রানটাইম স্কিমা ভ্যালিডেশন: Zod সেতু ও z.infer' } },
    {
      type: 'para',
      text: {
        en: 'Schema validation libraries like Zod bridge the gap between unverified JSON and static compiler contracts. Developers write a single runtime validator, then use z.infer<typeof schema> to derive the static TypeScript type automatically without duplicating code.',
        bn: 'Zod-এর মতো স্কিমা ভ্যালিডেশন লাইব্রেরি অবিশ্বস্ত JSON ডেটা এবং স্ট্যাটিক কম্পাইলার চুক্তির মধ্যকার ব্যবধান দূর করে। ডেভেলপাররা একটিমাত্র রানটাইম ভ্যালিডেটর লেখেন, তারপর z.infer<typeof schema> দিয়ে কোডের পুনরাবৃত্তি ছাড়াই স্বয়ংক্রিয়ভাবে স্ট্যাটিক টাইপ তৈরি করে নেন।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `import { z } from "zod";

// 1. Define single source of truth runtime schema:
const UserSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  role: z.enum(["admin", "editor", "viewer"])
});

// 2. Derive TypeScript type automatically:
type User = z.infer<typeof UserSchema>;
// Equivalent to:
// { id: string; name: string; role: "admin" | "editor" | "viewer" }

const sample: User = {
  id: "123e4567-e89b-12d3-a456-426614174000",
  name: "Tanvir Hasan",
  role: "admin"
};
console.log(sample.name, sample.role); // "Tanvir Hasan" "admin"`,
      caption: {
        en: 'z.infer derives static types directly from executable validation schemas.',
        bn: 'z.infer এক্সিকিউটেবল স্কিমা থেকে সরাসরি স্ট্যাটিক টাইপ তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Safe Parsing: Handling Corrupted Server Data', bn: '৫. নিরাপদ পার্সিং: ত্রুটিপূর্ণ সার্ভার ডেটা সামলানো' } },
    {
      type: 'para',
      text: {
        en: 'When parsing network responses, schema.parse() throws an unhandled exception on invalid data. The professional approach is schema.safeParse(data), which returns a discriminated union: either { success: true, data: T } or { success: false, error: ZodError } without throwing.',
        bn: 'ডেটা পার্স করার সময় schema.parse() ব্যবহার করলে কোনো ফিল্ড ভুল হলেই তা এরর থ্রো করে। এর পেশাদার বিকল্প হলো schema.safeParse(data), যা কোনো এক্সেপশন না ছুড়ে একটি ডিসক্রিমিনেটেড ইউনিয়ন ফেরত দেয়: হয় { success: true, data: T } নতুবা { success: false, error: ZodError }।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `const MemberSchema = z.object({
  username: z.string(),
  karma: z.number()
});

function parseIncoming(rawPayload: unknown) {
  const result = MemberSchema.safeParse(rawPayload);

  if (result.success) {
    // result.data is strongly typed as { username: string; karma: number }!
    console.log("Member valid:", result.data.username, result.data.karma);
  } else {
    // result.error provides structured validation failures
    console.warn("Payload validation failed:", result.error.flatten());
  }
}

parseIncoming({ username: "rakib", karma: 350 }); // Member valid: rakib 350
parseIncoming({ username: 123 });                  // Payload validation failed`,
      caption: {
        en: 'safeParse returns a discriminated result object without throwing runtime exceptions.',
        bn: 'safeParse কোনো এক্সেপশন থ্রো না করেই নিখুঁত ভ্যালিডেশন ফলাফল প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Honest Error Handling: catch (error: unknown)', bn: '৬. সত্যনিষ্ঠ এরর হ্যান্ডলিং: catch ব্লকে unknown এরর' } },
    {
      type: 'para',
      text: {
        en: 'Starting in TypeScript 4.4, the useUnknownInCatchVariables flag (enabled by default under strict) types catch variables as unknown instead of any. Because JavaScript allows throwing anything (strings, numbers, null, plain objects), assuming error.message will crash if someone throws a string.',
        bn: 'TypeScript ৪.৪ ভার্সন থেকে strict মোডে catch ব্লকের ভ্যারিয়েবল ডিফল্টভাবে any না হয়ে unknown হয়। কারণ জাভাস্ক্রিপ্টে যে কেউ যেকোনো কিছু throw করতে পারে (এমনকি সাধারণ স্ট্রিং বা সংখ্যা)। ফলে অন্ধের মতো error.message লিখতে গেলে কোড ক্র্যাশ করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `try {
  throw new Error("Connection timed out after 5000ms");
} catch (err: unknown) {
  // ❌ Error under strict: 'err' is of type 'unknown'
  // console.log(err.message);

  // ✅ Safe: Narrow before property access
  if (err instanceof Error) {
    console.log("Caught standard error:", err.message); // "Caught standard error: Connection timed out..."
  } else {
    console.log("Unknown thrown artifact:", String(err));
  }
}`,
      caption: {
        en: 'Typing caught errors as unknown forces developers to narrow before inspecting messages.',
        bn: 'ক্যাচ এরর unknown হওয়ায় প্রোপার্টি ব্যবহারের আগে যাচাই করতে বাধ্য করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Error Narrowing: Custom Application Errors', bn: '৭. এরর ন্যারোয়িং: নিজস্ব অ্যাপ্লিকেশন এরর ক্লাস' } },
    {
      type: 'para',
      text: {
        en: 'Network applications encounter distinct failure modes: HTTP 404/500 status codes, network timeouts, and JSON parse failures. Defining custom error classes that extend Error allows using instanceof to differentiate and handle each error appropriately.',
        bn: 'নেটওয়ার্ক অ্যাপ্লিকেশনে বিভিন্ন কারণে ত্রুটি হতে পারে: HTTP 404/500 এরর, নেটওয়ার্ক টাইমআউট বা পার্সিং সমস্যা। Error ক্লাস এক্সটেন্ড করে নিজস্ব কাস্টম এরর ক্লাস বানালে instanceof ব্যবহার করে প্রতিটি সমস্যার জন্য আলাদা ব্যবস্থা নেওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `class ApiHttpError extends Error {
  constructor(public statusCode: number, message: string) {
    super(message);
    this.name = "ApiHttpError";
  }
}

function handleFailure(e: unknown) {
  if (e instanceof ApiHttpError) {
    console.log(\`HTTP Error [\${e.statusCode}]: \${e.message}\`);
  } else if (e instanceof Error) {
    console.log("System Error:", e.message);
  } else {
    console.log("Untyped failure:", e);
  }
}

handleFailure(new ApiHttpError(401, "Invalid bearer token")); // HTTP Error [401]: Invalid bearer token`,
      caption: {
        en: 'Custom error classes provide clean branch partitioning via instanceof.',
        bn: 'কাস্টম এরর ক্লাস instanceof-এর সাহায্যে সহজে বিভিন্ন সমস্যা আলাদা করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Network State Modeling: Discriminated FetchState<T>', bn: '৮. নেটওয়ার্ক অবস্থা মডেলিং: ডিসক্রিমিনেটেড FetchState<T>' } },
    {
      type: 'para',
      text: {
        en: 'Never model async UI state with separate boolean flags (isLoading, isError, data). This allows impossible states like { isLoading: true, isError: true }. Instead, use a Discriminated Union with a status discriminant: idle, loading, success, or error.',
        bn: 'কখনোই আলাদা আলাদা বুলিয়ান ভ্যারিয়েবল (যেমন isLoading, isError) দিয়ে UI স্টেট তৈরি করবেন না। এতে একই সাথে লোডিং ও এরর হওয়ার মতো অসম্ভব পরিস্থিতির সৃষ্টি হয়। এর বদলে status ট্যাগযুক্ত ডিসক্রিমিনেটেড ইউনিয়ন ব্যবহার করুন: idle, loading, success বা error।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `type FetchState<T> =
  | { status: "idle" }
  | { status: "loading" }
  | { status: "success"; data: T }
  | { status: "error"; error: string };

function renderState(state: FetchState<string[]>) {
  switch (state.status) {
    case "idle":
      return "Ready to load data.";
    case "loading":
      return "Fetching server response...";
    case "success":
      return \`Loaded \${state.data.length} records successfully.\`;
    case "error":
      return \`Request failed: \${state.error}\`;
  }
}

console.log(renderState({ status: "success", data: ["Post 1", "Post 2"] }));
// "Loaded 2 records successfully."`,
      caption: {
        en: 'Discriminated unions make invalid network states unrepresentable.',
        bn: 'ডিসক্রিমিনেটেড ইউনিয়ন ব্যবহারের ফলে কোনো অবৈধ নেটওয়ার্ক স্টেট তৈরি হওয়া অসম্ভব হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Request Cancellation: Typing AbortController', bn: '৯. রিকোয়েস্ট বাতিলকরণ: AbortController টাইপিং' } },
    {
      type: 'para',
      text: {
        en: 'When a user navigates away or types a new search query, ongoing network requests must be canceled using AbortController. In TypeScript, an aborted fetch rejects with a DOMException whose name is strictly "AbortError".',
        bn: 'ব্যবহারকারী সার্চ বক্সে দ্রুত টাইপ করলে বা পেজ ছেড়ে চলে গেলে আগের রিকোয়েস্ট বাতিল করতে AbortController ব্যবহৃত হয়। টাইপস্ক্রিপ্টে বাতিল হওয়া ফেচ একটি DOMException ছুড়ে দেয় যার name প্রোপার্টি হয় "AbortError"।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `async function fetchWithTimeout(url: string, msTimeout: number): Promise<unknown> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), msTimeout);

  try {
    const res = await fetch(url, { signal: controller.signal });
    return await res.json();
  } catch (err: unknown) {
    if (err instanceof DOMException && err.name === "AbortError") {
      console.warn("Network request aborted due to timeout");
      return null;
    }
    throw err;
  } finally {
    clearTimeout(timer);
  }
}

console.log(typeof fetchWithTimeout); // "function"`,
      caption: {
        en: 'DOMException with name "AbortError" safely identifies canceled fetch requests.',
        bn: '"AbortError" নামের DOMException পরীক্ষা করে বাতিল হওয়া রিকোয়েস্ট চেনা যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Reusable Generic API Client: Verified Boundary Wrapper', bn: '১০. রিইউজেবল জেনেরিক এপিআই ক্লায়েন্ট: সীমান্ত রক্ষাকারী র্যাপার' } },
    {
      type: 'para',
      text: {
        en: 'Combining generic return types with Zod validation schemas produces an audited API wrapper function. Callers supply the endpoint URL and the validation schema; the client performs the HTTP request, safe-parses the payload, and returns 100% verified data.',
        bn: 'জেনেরিক রিটার্ন টাইপ এবং Zod স্কিমা একত্রিত করে একটি সুরক্ষিত API ক্লায়েন্ট তৈরি করা যায়। ব্যবহারকারী শুধু এপিআই লিংক এবং স্কিমা পাস করেন; ক্লায়েন্ট নিজে রিকোয়েস্ট পাঠিয়ে ডেটা ভ্যালিডেট করে ১০০% নিশ্চিত ও টাইপ-নিরাপদ ডেটা সরবরাহ করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      code: `async function apiGet<TSchema extends z.ZodTypeAny>(
  url: string,
  schema: TSchema
): Promise<z.infer<TSchema>> {
  // Mock fetch response for demonstration:
  const rawData: unknown = { id: "p-42", title: "Clean Architecture", stock: 15 };

  const parsed = schema.safeParse(rawData);
  if (!parsed.success) {
    throw new Error(\`Schema validation failed: \${parsed.error.message}\`);
  }
  return parsed.data;
}

const BookSchema = z.object({ id: z.string(), title: z.string(), stock: z.number() });

apiGet("/api/books/42", BookSchema).then((book) => {
  console.log("Verified book received:", book.title, book.stock);
  // "Verified book received: Clean Architecture 15"
});`,
      caption: {
        en: 'A generic schema wrapper enforces runtime validation and static typing from a single schema.',
        bn: 'জেনেরিক স্কিমা র্যাপার একাধারে রানটাইম ভ্যালিডেশন এবং কম্পাইল-টাইম টাইপিং নিশ্চিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'ts-net-ex1',
      kind: 'predict',
      topic: 'typescript: Zod static type extraction',
      question: {
        en: 'Which Zod utility extracts the static TypeScript type definition directly from a runtime schema?',
        bn: 'রানটাইম স্কিমা থেকে সরাসরি স্ট্যাটিক টাইপস্ক্রিপ্ট টাইপ তৈরি করতে Zod-এর কোন ইউটিলিটি ব্যবহৃত হয়?'
      },
      code: `/* Extracting static User type from UserSchema */
/* type User = z._______<typeof UserSchema>; */`,
      answer: 'infer',
      accept: ['infer', 'z.infer'],
      hint: {
        en: 'It infers the type.',
        bn: 'এটি টাইপ ইনফার করে।'
      },
      explanation: {
        en: 'z.infer<typeof Schema> generates the static TypeScript interface that matches the runtime validation rules of the schema.',
        bn: 'z.infer স্কিমার ওপর ভিত্তি করে স্বয়ংক্রিয়ভাবে উপযুক্ত টাইপস্ক্রিপ্ট টাইপ তৈরি করে দেয়।'
      }
    },
    {
      id: 'ts-net-ex2',
      kind: 'mcq',
      topic: 'typescript: useUnknownInCatchVariables',
      question: {
        en: 'Why does strict TypeScript type catch variables as unknown instead of any?',
        bn: 'স্ট্রিক্ট টাইপস্ক্রিপ্টে catch ব্লকের ভ্যারিয়েবলকে any না ধরে unknown কেন ধরা হয়?'
      },
      options: [
        { en: 'Because JavaScript allows throwing any arbitrary value (strings, numbers, null), requiring explicit type narrowing before property access', bn: 'কারণ জাভাস্ক্রিপ্টে যে কেউ যেকোনো কিছু থ্রো করতে পারে (যেমন স্ট্রিং বা সংখ্যা), ফলে প্রোপার্টি ব্যবহারের আগে টাইপ চেক করা বাধ্যতামূলক' },
        { en: 'To make error messages print in uppercase', bn: 'এরর মেসেজ বড় হাতের করতে' },
        { en: 'Because TypeScript cannot read error stacks', bn: 'টাইপস্ক্রিপ্ট এরর স্ট্যাক পড়তে পারে না' },
        { en: 'It is a bug in the compiler', bn: 'এটি কম্পাইলারের একটি বাগ' }
      ],
      answer: 0,
      hint: {
        en: 'Anything can be thrown in JS.',
        bn: 'জাভাস্ক্রিপ্টে যেকোনো কিছু থ্রো করা সম্ভব।'
      },
      explanation: {
        en: 'Typing catch variables as unknown prevents developers from blindly accessing error.message on values that might not be standard Error instances.',
        bn: 'ক্যাচ ভ্যারিয়েবল unknown হওয়ায় ডেভেলপার নিশ্চিত না হয়ে সরাসরি error.message ব্যবহার করতে পারেন না, যা ক্র্যাশ হওয়া ঠেকায়।'
      }
    },
    {
      id: 'ts-net-ex3',
      kind: 'mcq',
      topic: 'typescript: safeParse advantage',
      question: {
        en: 'What is the key advantage of using safeParse instead of parse when validating API responses?',
        bn: 'এপিআই রেসপন্স ভ্যালিডেট করার সময় parse-এর চেয়ে safeParse ব্যবহারের প্রধান সুবিধা কী?'
      },
      options: [
        { en: 'It returns a discriminated union result ({ success: true, data } or { success: false, error }) without throwing unhandled exceptions', bn: 'এটি এক্সেপশন থ্রো না করে একটি সুসংগঠিত ফলাফল অবজেক্ট ({ success: true/false }) ফেরত দেয়' },
        { en: 'It downloads data 10x faster', bn: '১০ গুণ দ্রুত ডাউনলোড করে' },
        { en: 'It automatically encrypts responses', bn: 'রেসপন্স নিজে নিজেই এনক্রিপ্ট করে' },
        { en: 'It bypasses network firewalls', bn: 'ফায়ারওয়াল এড়িয়ে যায়' }
      ],
      answer: 0,
      hint: {
        en: 'It avoids throwing exceptions.',
        bn: 'এটি এক্সেপশন থ্রো করা এড়িয়ে চলে।'
      },
      explanation: {
        en: 'safeParse returns a result object containing either the typed data or error details, letting you handle failure gracefully without try/catch blocks.',
        bn: 'safeParse কোনো ক্র্যাশ না ঘটিয়ে সরাসরি ভ্যালিডেশন ফলাফল দেয়, ফলে কোড অনেক বেশি পরিচ্ছন্ন ও নিরাপদ হয়।'
      }
    }
  ],
  quiz: {
    id: 'ts-networking-quiz',
    title: { en: 'TypeScript Network Boundaries Quiz', bn: 'টাইপস্ক্রিপ্ট নেটওয়ার্ক সীমানা কুইজ' },
    questions: [
      {
        id: 'tnq1',
        kind: 'mcq',
        topic: 'typescript: response.json return type',
        question: {
          en: 'Why is the return type of browser response.json() considered a risk in TypeScript?',
          bn: 'ব্রাউজার response.json()-এর রিটার্ন টাইপ টাইপস্ক্রিপ্টে কেন ঝুঁকিপূর্ণ মনে করা হয়?'
        },
        options: [
          { en: 'It returns Promise<any>, which turns off compiler checks and allows invalid property access to go unnoticed', bn: 'এটি Promise<any> ফেরত দেয়, যা কম্পাইলারের চেক বন্ধ করে দেয় এবং ভুল কোড থাকলেও কোনো সতর্কবার্তা দেয় না' },
          { en: 'It returns numbers only', bn: 'এটি শুধু সংখ্যা দেয়' },
          { en: 'It deletes the network connection', bn: 'নেটওয়ার্ক সংযোগ বন্ধ করে দেয়' },
          { en: 'It causes memory leaks in CSS', bn: 'সিএসএসে মেমরি লিক করে' }
        ],
        answer: 0,
        hint: {
          en: 'any disables the type checker.',
          bn: 'any টাইপ কম্পাইলারের নজরদারি বন্ধ করে দেয়।'
        },
        explanation: {
          en: 'Because response.json() resolves to any, typos and schema mismatches cannot be caught by the compiler without runtime schema validation.',
          bn: 'response.json()-এর মান any হওয়ায় রানটাইম স্কিমা ভ্যালিডেশন ছাড়া কোনো ভুল কম্পাইলার ধরতে পারে না।'
        }
      },
      {
        id: 'tnq2',
        kind: 'mcq',
        topic: 'typescript: network state modeling',
        question: {
          en: 'Why should async UI state be modeled with a Discriminated Union rather than independent boolean flags?',
          bn: 'অ্যাসিনক্রোনাস UI স্টেটকে স্বাধীন বুলিয়ান ফ্ল্যাগের বদলে ডিসক্রিমিনেটেড ইউনিয়ন দিয়ে মডেল করা কেন শ্রেয়?'
        },
        options: [
          { en: 'It eliminates impossible states (like being simultaneously loading and having an error) by design', bn: 'এটি একই সাথে লোডিং এবং এরর থাকার মতো পরস্পরবিরোধী অসম্ভব অবস্থাকে পুরোপুরি অসম্ভব করে তোলে' },
          { en: 'It uses less disk space', bn: 'কম ডিস্ক স্পেস নেয়' },
          { en: 'It makes network calls parallel', bn: 'নেটওয়ার্ক কল প্যারালাল করে' },
          { en: 'It converts JSON to GraphQL', bn: 'জেসনকে গ্রাফকিউএলে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents contradictory states.',
          bn: 'পরস্পরবিরোধী স্টেট প্রতিরোধ করে।'
        },
        explanation: {
          en: 'A discriminated union guarantees that exactly one valid state exists at a time, each carrying only the data relevant to that state.',
          bn: 'ডিসক্রিমিনেটেড ইউনিয়ন নিশ্চিত করে যে যেকোনো মুহূর্তে কেবল একটি সঠিক স্টেট কার্যকর থাকবে এবং বাড়তি ভুল ডেটা থাকবে না।'
        }
      },
      {
        id: 'tnq3',
        kind: 'mcq',
        topic: 'typescript: unknown catch variable narrowing',
        question: {
          en: 'Why does TypeScript type catch clause variables as unknown rather than any under modern strict settings?',
          bn: 'আধুনিক স্ট্রিক্ট সেটিংসে টাইপস্ক্রিপ্ট catch ব্লকের ভ্যারিয়েবলকে any-এর বদলে unknown টাইপ করে কেন?'
        },
        options: [
          { en: 'Because any value can be thrown in JavaScript (strings, objects, numbers), requiring explicit instanceof Error narrowing before reading properties', bn: 'কারণ জাভাস্ক্রিপ্টে যেকোনো মান থ্রো করা সম্ভব, তাই প্রোপার্টি ব্যবহারের আগে instanceof Error দিয়ে যাচাই করা বাধ্যতামূলক' },
          { en: 'Because unknown makes errors automatically convert to HTTP 500 status', bn: 'কারণ unknown সব এররকে এইচটিটিপি ৫০০ স্ট্যাটাসে রূপান্তর করে' },
          { en: 'Because the compiler ignores catch blocks during compilation', bn: 'কারণ কম্পাইলার ক্যাচ ব্লককে এড়িয়ে চলে' },
          { en: 'Because errors can only ever be strings', bn: 'কারণ এরর কেবল স্ট্রিং হতে পারে' }
        ],
        answer: 0,
        hint: {
          en: 'JavaScript allows throwing arbitrary non-Error values.',
          bn: 'জাভাস্ক্রিপ্টে এরর বাদেও যেকোনো মান থ্রো করা যায়।'
        },
        explanation: {
          en: 'Since thrown values can be strings, numbers, or objects, typing the catch variable as unknown forces developers to narrow with instanceof Error.',
          bn: 'যেকোনো ডেটা টাইপ throw করা সম্ভব হওয়ায় catch ভ্যারিয়েবল unknown থাকে, যা ডেভেলপারকে instanceof Error দিয়ে নিরাপদ যাচাই করতে বাধ্য করে।'
        }
      },
      {
        id: 'tnq4',
        kind: 'mcq',
        topic: 'typescript: Zod safeParse advantages',
        question: {
          en: 'How does Zod’s safeParse method differ from parse when validating API payloads?',
          bn: 'API ডেটা যাচাইয়ের সময় Zod-এর safeParse মেথড parse-এর থেকে কীভাবে আলাদা?'
        },
        options: [
          { en: 'safeParse returns a discriminated result object ({ success: true, data } | { success: false, error }) instead of throwing an unhandled exception', bn: 'ব্যর্থ হলে কোনো এক্সেপশন থ্রো না করে safeParse একটি অবজেক্ট ({ success: true, data } বা { success: false, error }) প্রদান করে' },
          { en: 'safeParse executes 10 times slower than parse', bn: 'safeParse মূল parse মেথডের চেয়ে ১০ গুণ ধীরগতিতে চলে' },
          { en: 'safeParse encrypts incoming JSON payloads', bn: 'safeParse ডেটাকে এনক্রিপ্ট করে' },
          { en: 'safeParse only checks numbers and ignores strings', bn: 'safeParse শুধু সংখ্যা চেক করে এবং স্ট্রিং অগ্রাহ্য করে' }
        ],
        answer: 0,
        hint: {
          en: 'Returns a result object instead of throwing.',
          bn: 'ক্র্যাশ না ঘটিয়ে সরাসরি রেজাল্ট অবজেক্ট ফেরত দেয়।'
        },
        explanation: {
          en: 'safeParse safely wraps validation into a success boolean result, eliminating unexpected runtime crashes and verbose try/catch blocks.',
          bn: 'safeParse মেথড এক্সেপশন না দিয়ে সুশৃঙ্খলভাবে success ও error অবজেক্ট প্রদান করে।'
        }
      }
    ]
  }
};
