import type { Lesson } from '../../../lib/types';

export const shelfWorksLesson: Lesson = {
  slug: 'js-arrays-strings',
  tech: 'javascript',
  title: {
    en: 'JavaScript Arrays, Strings, Template Literals & Iteration',
    bn: 'জাভাস্ক্রিপ্ট অ্যারে, স্ট্রিং, টেমপ্লেট লিটারেল ও ইটারেশন'
  },
  summary: {
    en: 'Master sequential data structures and text processing across 10 structured topics. Explore string indexing, slice extraction, text transforms, searches, template literals, array stacks/queues, slice vs splice, and functional pipelines.',
    bn: '১০টি সুসংগঠিত পয়েন্টে টেক্সট প্রসেসিং ও অ্যারে ডেটা স্ট্রাকচার শিখুন। স্ট্রিং ইনডেক্সিং, slice এক্সট্রাকশন, ট্রান্সফরমেশন, সার্চিং, টেমপ্লেট লিটারেল, অ্যারে স্ট্যাক ও কিউ, slice বনাম splice এবং ফাংশনাল পাইপলাইন আয়ত্ত করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'js-objects-prototypes',
    title: { en: 'JavaScript Objects, Prototypes, Classes & Data Structures', bn: 'জাভাস্ক্রিপ্ট অবজেক্ট, প্রোটোটাইপ, ক্লাস ও ডেটা স্ট্রাকচার' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Strings as Character Sequences: Length and at()', bn: '১. স্ট্রিং সিকোয়েন্স: Length ও at() ইনডেক্সিং' } },
    {
      type: 'para',
      text: {
        en: 'In JavaScript, strings are immutable zero-indexed sequences of UTF-16 code units. The length property returns the character count. Modern JavaScript provides str.at(index), which accepts negative integers to cleanly access characters from the end of the string (e.g. str.at(-1)).',
        bn: 'জাভাস্ক্রিপ্টে স্ট্রিং হলো শূন্য থেকে শুরু হওয়া অপরিবর্তনীয় (immutable) ক্যারেক্টার সিকোয়েন্স। length প্রপার্টি মোট অক্ষরের সংখ্যা প্রদান করে। আধুনিক জাভাস্ক্রিপ্টে str.at(index) মেথড চালু হয়েছে, যা নেগেটিভ সংখ্যা দিলে সহজেই শেষ থেকে অক্ষর পড়ে (যেমন str.at(-1) দিয়ে শেষ অক্ষর পাওয়া যায়)।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Array Operations: slice (Pure) vs splice (Mutating)',
        bn: 'অ্যারে অপারেশন: slice (পিওর) বনাম splice (মিউটেটিং)'
      },
      caption: {
        en: 'slice returns a new array without touching the original; splice mutates the original array in place.',
        bn: 'slice মূল অ্যারেকে অপরিবর্তিত রেখে নতুন কপি দেয়; splice মূল অ্যারের ভেতর সরাসরি পরিবর্তন ঘটায়।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- slice -->
  <rect x="25" y="30" width="300" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="175" y="55" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace">arr.slice(start, end)</text>
  <text x="175" y="78" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">Non-mutating pure copy</text>
  <text x="175" y="100" text-anchor="middle" fill="#a7f3d0" font-size="11" font-family="monospace">Original array untouched</text>
  <!-- splice -->
  <rect x="355" y="30" width="300" height="90" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="505" y="55" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold" font-family="monospace">arr.splice(start, count, ...items)</text>
  <text x="505" y="78" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">Mutates original in-place</text>
  <text x="505" y="100" text-anchor="middle" fill="#fecdd3" font-size="11" font-family="monospace">Returns deleted elements</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const platform = "CodeShikhon";

console.log("Total length:", platform.length); // 11
console.log("First character:", platform.charAt(0)); // "C"
console.log("Bracket notation:", platform[0]);       // "C"

// Modern str.at() with negative index support:
console.log("Last character:", platform.at(-1));      // "n"
console.log("Second to last:", platform.at(-2));      // "o"

// Strings are immutable: modifying indices does nothing!
platform[0] = "X"; // Silently fails
console.log("Unmodified string:", platform); // "CodeShikhon"

// Output:
// Total length: 11
// First character: C
// Bracket notation: C
// Last character: n
// Second to last: o
// Unmodified string: CodeShikhon`,
      caption: {
        en: 'str.at(-1) safely reads from the end of a string without verbose length subtractions.',
        bn: 'str.at(-1) কোনো বাড়তি বিয়োগ ছাড়াই সরাসরি স্ট্রিংয়ের শেষ অক্ষর প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. String Slicing: slice() vs substring()', bn: '২. স্ট্রিং স্লাইসিং: slice() বনাম substring()' } },
    {
      type: 'para',
      text: {
        en: 'The slice(startIndex, endIndex) method extracts a section of a string and returns it as a new string, without modifying the original. The endIndex is non-inclusive. slice() natively supports negative indices counting backwards from the string end; substring() treats negatives as zero.',
        bn: 'slice(startIndex, endIndex) মেথড স্ট্রিংয়ের একটি অংশ কেটে নিয়ে নতুন স্ট্রিং তৈরি করে, কিন্তু মূল স্ট্রিং অপরিবর্তিত থাকে। endIndex ইনডেক্সটি ফলাফলে অন্তর্ভুক্ত হয় না। slice() নেগেটিভ ইনডেক্স সমর্থন করে যা শেষ থেকে গণনা করে; অন্যদিকে substring() নেগেটিভ মানকে শূন্য মনে করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const filename = "user_report_2026.pdf";

// Extract base name from index 0 up to index 16 (non-inclusive)
const baseName = filename.slice(0, 16);
console.log("Base name:", baseName); // "user_report_2026"

// Extract file extension using negative index
const extension = filename.slice(-3);
console.log("Extension:", extension); // "pdf"

// Slicing from index 5 to end of string
console.log(filename.slice(5)); // "report_2026.pdf"

// Output:
// Base name: user_report_2026
// Extension: pdf
// report_2026.pdf`,
      caption: {
        en: 'slice(-3) extracts the last three characters, making extension extraction clean and readable.',
        bn: 'slice(-3) শেষ তিনটি অক্ষর কেটে নেয়, যা ফাইল এক্সটেনশন বের করার সবচেয়ে পরিষ্কার উপায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. String Transformation and Sanitization Methods', bn: '৩. স্ট্রিং রূপান্তর ও স্যানিটাইজেশন মেথড' } },
    {
      type: 'para',
      text: {
        en: 'Strings can be transformed using toLowerCase(), toUpperCase(), trim() (strips whitespace from both ends), replace(search, replacement), and replaceAll(). The split(separator) method cuts a string into an Array of substrings, which is critical for parsing CSV or URL fragments.',
        bn: 'স্ট্রিং রূপান্তর করতে toLowerCase(), toUpperCase(), trim() (দুই পাশের খালি স্পেস মুছে ফেলা), replace(search, replacement) এবং replaceAll() ব্যবহৃত হয়। split(separator) মেথড নির্দিষ্ট চিহ্নের ভিত্তিতে স্ট্রিং কেটে স্ট্রিংয়ের একটি অ্যারে তৈরি করে, যা CSV বা ইউআরএল পার্সিংয়ে অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Sanitizing user input with trim and toLowerCase
const rawEmail = "  User.Name@Example.COM  ";
const cleanEmail = rawEmail.trim().toLowerCase();
console.log("Clean email:", cleanEmail); // "user.name@example.com"

// 2. Replacing substrings
const template = "Welcome USER, your balance is USER_BAL";
const personalized = template.replaceAll("USER", "Tanvir");
console.log("Replaced:", personalized);

// 3. Splitting string into an array
const tags = "javascript,web,frontend,fullstack";
const tagList = tags.split(",");
console.log("Tag array:", tagList);

// Output:
// Clean email: user.name@example.com
// Replaced: Welcome Tanvir, your balance is Tanvir_BAL
// Tag array: [ 'javascript', 'web', 'frontend', 'fullstack' ]`,
      caption: {
        en: 'Method chaining on strings cleans and formats user inputs in a single line.',
        bn: 'এক লাইনে মেথড চেইনিং করে ব্যবহারকারীর ইনপুট পরিষ্কার ও ফরম্যাট করা যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. String Searching: includes(), startsWith(), and endsWith()', bn: '৪. স্ট্রিং খোঁজা: includes(), startsWith() ও endsWith()' } },
    {
      type: 'para',
      text: {
        en: 'Modern JavaScript replaces old indexOf() > -1 checks with clean boolean search methods: includes(substring) checks if a string exists anywhere; startsWith(prefix) checks string beginnings; and endsWith(suffix) checks string endings. All methods are case-sensitive.',
        bn: 'আধুনিক জাভাস্ক্রিপ্টে পুরোনো indexOf() > -1-এর বদলে সরাসরি বুলিয়ান সার্চ মেথড যুক্ত হয়েছে: includes(substring) স্ট্রিংয়ের ভেতরে কোনো শব্দ আছে কি না তা দেখে; startsWith(prefix) শুরু মেলায়; এবং endsWith(suffix) শেষ মেলায়। এরা সবাই কেস-সেনসিটিভ।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const url = "https://codeshikhon.com/dashboard/settings";

// 1. startsWith: Verify secure protocol
const isSecure = url.startsWith("https://");
console.log("Is HTTPS:", isSecure); // true

// 2. endsWith: Check URL route
const isSettings = url.endsWith("/settings");
console.log("Is Settings Page:", isSettings); // true

// 3. includes: Check domain existence
const isOwnDomain = url.includes("codeshikhon.com");
console.log("Is official domain:", isOwnDomain); // true

// Output:
// Is HTTPS: true
// Is Settings Page: true
// Is official domain: true`,
      caption: {
        en: 'includes, startsWith, and endsWith return true booleans, eliminating magic -1 numbers.',
        bn: 'includes, startsWith ও endsWith সত্য/মিথ্যা রিটার্ন করে কোডকে স্পষ্ট করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Template Literals: Interpolation and Multi-Line Text', bn: '৫. টেমপ্লেট লিটারেল: স্ট্রিং ইন্টারপোলেশন ও মাল্টি-লাইন টেক্সট' } },
    {
      type: 'para',
      text: {
        en: 'Template literals (delimited by backticks `) provide string interpolation with ${expression} syntax and native multi-line string support without ugly \\n concatenation. Any valid JavaScript expression, math calculation, or function call can be embedded inside ${}.',
        bn: 'টেমপ্লেট লিটারেল (ব্যাকটিক ` দিয়ে ঘেরা) ${expression} সিনট্যাক্সের মাধ্যমে স্ট্রিংয়ের ভেতরে সরাসরি ভেরিয়েবল ও এক্সপ্রেশন বসানোর সুবিধা দেয় এবং কোনো \\n ছাড়াই স্বাভাবিকভাবে একাধিক লাইনে টেক্সট লেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const customer = "Arif";
const price = 49.99;
const quantity = 3;

// Multi-line HTML fragment with embedded mathematical expression
const receiptHtml = \`
  <div class="receipt">
    <h2>Customer: \${customer}</h2>
    <p>Total Items: \${quantity}</p>
    <p>Final Price: $\${(price * quantity).toFixed(2)}</p>
    <p>Status: \${price * quantity > 100 ? "VIP Discount" : "Standard"}</p>
  </div>
\`;

console.log(receiptHtml.trim());
// Output:
// <div class="receipt">
//     <h2>Customer: Arif</h2>
//     <p>Total Items: 3</p>
//     <p>Final Price: $149.97</p>
//     <p>Status: VIP Discount</p>
//   </div>`,
      caption: {
        en: 'Template literals eliminate brittle string concatenation and allow expressive inline expressions.',
        bn: 'টেমপ্লেট লিটারেল স্ট্রিং যোগ করার ঝামেলা দূর করে এবং ভেতরে যেকোনো এক্সপ্রেশন চালাতে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Array Fundamentals & Stack/Queue Operations', bn: '৬. অ্যারে ফান্ডামেন্টালস: স্ট্যাক ও কিউ মেথড' } },
    {
      type: 'para',
      text: {
        en: 'Arrays are ordered, zero-indexed collections of values. JavaScript arrays behave both as Stacks (LIFO: push adds to end; pop removes from end) and Queues (FIFO: push adds to end; shift removes from beginning; unshift adds to beginning). push and pop are fast O(1); shift and unshift re-index all elements O(n).',
        bn: 'অ্যারে হলো শূন্য থেকে শুরু হওয়া ক্রমবিন্যস্ত ডেটার তালিকা। জাভাস্ক্রিপ্ট অ্যারে স্ট্যাক (LIFO: push শেষে যোগ করে; pop শেষ থেকে বের করে) এবং কিউ (FIFO: push শেষে যোগ করে; shift শুরু থেকে বের করে; unshift শুরুতে যোগ করে) উভয় হিসেবেই কাজ করে। push ও pop অত্যন্ত দ্রুত O(1); shift ও unshift পুরো অ্যারেকে নতুন করে ইনডেক্স করে বলে ধীরগতির O(n)।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const queue = ["User1", "User2"];

// 1. push: Append items to the end
queue.push("User3");
console.log("After push:", queue); // ["User1", "User2", "User3"]

// 2. pop: Remove and return the final element
const lastUser = queue.pop();
console.log("Popped item:", lastUser); // "User3"

// 3. shift: Remove and return the first element (FIFO dequeue)
const firstUser = queue.shift();
console.log("Shifted item:", firstUser); // "User1"

// 4. unshift: Insert at the beginning
queue.unshift("VIP_User");
console.log("After unshift:", queue); // ["VIP_User", "User2"]

// Output:
// After push: [ 'User1', 'User2', 'User3' ]
// Popped item: User3
// Shifted item: User1
// After unshift: [ 'VIP_User', 'User2' ]`,
      caption: {
        en: 'push and pop are O(1) stack operations; shift and unshift reindex the array at O(n) cost.',
        bn: 'push ও pop হলো O(1) দ্রুত স্ট্যাক অপারেশন; shift ও unshift পুরো অ্যারে রিরোড করে O(n) খরচে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Modifying Arrays: slice() (Pure) vs splice() (Mutating)', bn: '৭. অ্যারে পরিবর্তন: slice() (পিওর) বনাম splice() (মিউটেটিং)' } },
    {
      type: 'para',
      text: {
        en: 'A core JavaScript pitfall is confusing slice with splice. arr.slice(start, end) creates a shallow COPY of a section without modifying the original array (pure). arr.splice(startIndex, deleteCount, ...itemsToAdd) MUTATES the original array in place by removing, replacing, or inserting elements.',
        bn: 'জাভাস্ক্রিপ্টে সবচেয়ে সাধারণ বিভ্রান্তি হলো slice ও splice-এর পার্থক্য। arr.slice(start, end) মূল অ্যারেকে অপরিবর্তিত রেখে একটি অংশের নতুন কপি রিটার্ন করে (পিওর)। কিন্তু arr.splice(startIndex, deleteCount, ...items) মূল অ্যারেকে ভেতরে ভেতরে পরিবর্তন (mutate) করে উপাদান মুছে ফেলে বা নতুন উপাদান ঢোকায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const original = ["A", "B", "C", "D", "E"];

// 1. slice: Pure extraction (Leaves original intact!)
const slicedPart = original.slice(1, 4);
console.log("Sliced part:", slicedPart); // ["B", "C", "D"]
console.log("Original untouched:", original); // ["A", "B", "C", "D", "E"]

// 2. splice: In-place mutation (Alters original array!)
// At index 2, remove 1 item ('C'), and insert 'NEW'
const removedItems = original.splice(2, 1, "NEW");
console.log("Removed items:", removedItems); // ["C"]
console.log("Original mutated:", original); // ["A", "B", "NEW", "D", "E"]

// Output:
// Sliced part: [ 'B', 'C', 'D' ]
// Original untouched: [ 'A', 'B', 'C', 'D', 'E' ]
// Removed items: [ 'C' ]
// Original mutated: [ 'A', 'B', 'NEW', 'D', 'E' ]`,
      caption: {
        en: 'slice returns a copy without mutation; splice alters the original array directly in memory.',
        bn: 'slice কোনো পরিবর্তন ছাড়াই কপি দেয়; splice সরাসরি মেমোরিতে মূল অ্যারেকে বদলে ফেলে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Searching Arrays: includes(), find(), and findIndex()', bn: '৮. অ্যারে অনুসন্ধান: includes(), find() ও findIndex()' } },
    {
      type: 'para',
      text: {
        en: 'arr.includes(val) tests for simple primitive membership. When searching arrays of objects by property conditions, use arr.find(callback) (returns the first matching element, or undefined) and arr.findIndex(callback) (returns the index, or -1).',
        bn: 'arr.includes(val) দিয়ে সাধারণ প্রিমিটিভ মান আছে কি না তা সহজে দেখা যায়। অবজেক্টের অ্যারেকে কোনো শর্তের ভিত্তিতে খুঁজতে arr.find(callback) (প্রথম ম্যাচিং উপাদান দেয়, না পেলে undefined) এবং arr.findIndex(callback) (ম্যাচিং উপাদানের ইনডেক্স দেয়, না পেলে -১) ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const users = [
  { id: 101, name: "Sakib", role: "Developer" },
  { id: 102, name: "Tamim", role: "Designer" },
  { id: 103, name: "Mushfiq", role: "Manager" }
];

// 1. find: Returns the element object directly
const designer = users.find(u => u.role === "Designer");
console.log("Found designer:", designer.name); // "Tamim"

// 2. findIndex: Returns index position for splice operations
const targetIndex = users.findIndex(u => u.id === 103);
console.log("Target index:", targetIndex); // 2

// 3. Simple primitive inclusion
const activeIds = [101, 102, 103];
console.log("Has id 102:", activeIds.includes(102)); // true

// Output:
// Found designer: Tamim
// Target index: 2
// Has id 102: true`,
      caption: {
        en: 'find returns the first matching item, while findIndex returns its numeric array index.',
        bn: 'find প্রথম ম্যাচিং অবজেক্টটি ফেরত দেয়, আর findIndex তার ইনডেক্স নম্বর প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Array Transformation Pipelines: map(), filter(), and reduce()', bn: '৯. অ্যারে ট্রান্সফরমেশন পাইপলাইন: map(), filter() ও reduce()' } },
    {
      type: 'para',
      text: {
        en: 'Functional programming relies on three non-mutating transformation methods: map() transforms every item into a new array of identical length; filter() creates a subset containing only items matching a boolean predicate. And reduce() aggregates all items into a single accumulated result.',
        bn: 'ফাংশনাল প্রোগ্রামিংয়ে তিনটি নন-মিউটেটিং মেথড বহুল ব্যবহৃত হয়: map() প্রতিটি উপাদান রূপান্তর করে সমান দৈর্ঘ্যের নতুন অ্যারে দেয়; filter() শর্ত মেনে চলা উপাদানগুলো নিয়ে ছোট নতুন অ্যারে দেয়। এবং reduce() সব উপাদানকে একত্রিত করে একটি একক সর্বমোট ফলাফলে পরিণত করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const cart = [
  { product: "Laptop", price: 1200, inStock: true },
  { product: "Mouse", price: 25, inStock: false },
  { product: "Keyboard", price: 75, inStock: true }
];

// 1. filter: Keep only items that are in stock
const availableItems = cart.filter(item => item.inStock);

// 2. map: Extract product names into an array of strings
const productNames = availableItems.map(item => item.product);
console.log("Available products:", productNames); // ["Laptop", "Keyboard"]

// 3. reduce: Calculate total checkout cost
// array.reduce((accumulator, currentItem) => ..., initialValue)
const totalPrice = availableItems.reduce((sum, item) => sum + item.price, 0);
console.log("Total price:", totalPrice); // 1275

// Output:
// Available products: [ 'Laptop', 'Keyboard' ]
// Total price: 1275`,
      caption: {
        en: 'Chaining filter, map, and reduce creates clean, expressive, immutable data pipelines.',
        bn: 'filter, map ও reduce একসাথে চেইন করে পরিষ্কার ও অপরিবর্তনীয় ডেটা পাইপলাইন তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Numeric Sorting, Reversal & Array Destructuring', bn: '১০. নিউমেরিক সর্টিং, রিভার্সাল ও অ্যারে ডিস্ট্রাকচারিং' } },
    {
      type: 'para',
      text: {
        en: 'By default, arr.sort() converts items to strings, sorting [10, 5, 20] alphabetically into [10, 20, 5]! To sort numbers correctly, always supply a compare function: (a, b) => a - b. Array destructuring and the spread operator (...) provide concise unpacking and non-mutating copies.',
        bn: 'ডিফল্টভাবে arr.sort() সব উপাদানকে স্ট্রিংয়ে রূপান্তর করে সাজায়, যার ফলে [10, 5, 20] বর্ণানুক্রমে [10, 20, 5] হয়ে যায়! সংখ্যা সঠিকভাবে সাজাতে সর্বদা কম্পেয়ার ফাংশন (a, b) => a - b ব্যবহার করতে হয়। অ্যারে ডিস্ট্রাকচারিং ও স্প্রেড অপারেটর (...) সহজে মান আনপ্যাক ও নিরাপদ কপি তৈরি করতে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const numbers = [100, 25, 5, 42, 10];

// ❌ Incorrect default sort (Alphabetical string sorting!):
console.log([...numbers].sort()); // [10, 100, 25, 42, 5] (BUG!)

// ✅ Correct numerical ascending sort:
const ascending = [...numbers].sort((a, b) => a - b);
console.log("Ascending sort:", ascending); // [5, 10, 25, 42, 100]

// Descending sort:
const descending = [...numbers].sort((a, b) => b - a);
console.log("Descending sort:", descending); // [100, 42, 25, 10, 5]

// Array Destructuring with Rest pattern
const [firstWinner, secondWinner, ...remainingCompetitors] = ascending;
console.log("Winner:", firstWinner); // 5
console.log("Runner up:", secondWinner); // 10
console.log("Others:", remainingCompetitors); // [25, 42, 100]

// Output:
// [ 10, 100, 25, 42, 5 ]
// Ascending sort: [ 5, 10, 25, 42, 100 ]
// Descending sort: [ 100, 42, 25, 10, 5 ]
// Winner: 5
// Runner up: 10
// Others: [ 25, 42, 100 ]`,
      caption: {
        en: 'Always provide a compare function (a, b) => a - b when sorting numerical values.',
        bn: 'সংখ্যা সাজানোর সময় সর্বদা কম্পেয়ার ফাংশন (a, b) => a - b ব্যবহার করা বাধ্যতামূলক।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-array-ex1',
      kind: 'predict',
      topic: 'js: Default array sort quirk',
      question: {
        en: 'What is the evaluated output of [25, 100, 5].sort() without a compare function?',
        bn: 'কোনো কম্পেয়ার ফাংশন ছাড়া [25, 100, 5].sort() রান করলে কী আউটপুট আসে?'
      },
      code: `/* JavaScript default sort */
/* console.log([25, 100, 5].sort()); */`,
      answer: '[100, 25, 5]',
      accept: ['[100, 25, 5]', '[ 100, 25, 5 ]', '100, 25, 5', '100,25,5'],
      hint: {
        en: 'Default sort converts elements to strings and compares their UTF-16 character codes.',
        bn: 'ডিফল্ট সর্ট উপাদানগুলোকে স্ট্রিং বানিয়ে প্রথম ক্যারেক্টার মেলায় ("1" < "2" < "5")।'
      },
      explanation: {
        en: 'Without a compare function, sort() converts elements to strings. "100" starts with "1", which comes before "25" ("2") and "5" ("5"), resulting in [100, 25, 5].',
        bn: 'কম্পেয়ার ফাংশন না দিলে sort() সংখ্যাকে স্ট্রিং হিসেবে বর্ণানুক্রমে সাজায়। "100"-এর শুরুতে "1" থাকায় তা "25" ও "5"-এর আগে চলে এসে [100, 25, 5] হয়।'
      }
    },
    {
      id: 'js-array-ex2',
      kind: 'mcq',
      topic: 'js: Slice vs Splice',
      question: {
        en: 'Which method extracts a section of an array WITHOUT mutating the original array?',
        bn: 'কোন মেথডটি মূল অ্যারেকে কোনো পরিবর্তন না করে তার একটি অংশ কেটে নতুন কপি হিসেবে প্রদান করে?'
      },
      options: [
        { en: 'slice()', bn: 'slice()' },
        { en: 'splice()', bn: 'splice()' },
        { en: 'pop()', bn: 'pop()' },
        { en: 'shift()', bn: 'shift()' }
      ],
      answer: 0,
      hint: {
        en: 'Remember: slice is pure; splice mutates.',
        bn: 'মনে রাখবেন: slice কোনো পরিবর্তন ঘটায় না; splice মূল অ্যারেকে বদলে ফেলে।'
      },
      explanation: {
        en: 'slice() returns a shallow copy of a portion of an array without modifying the original array. In contrast, splice() mutates the original array in place.',
        bn: 'slice() মূল অ্যারেকে অপরিবর্তিত রেখে একটি নতুন কপি তৈরি করে। অন্যদিকে splice() সরাসরি মূল অ্যারের ডেটা পরিবর্তন করে।'
      }
    },
    {
      id: 'js-array-ex3',
      kind: 'mcq',
      topic: 'js: Reduce method accumulator',
      question: {
        en: 'What is the role of the second argument passed to array.reduce((acc, item) => ..., 0)?',
        bn: 'array.reduce((acc, item) => ..., 0)-এ দ্বিতীয় আর্গুমেন্ট হিসেবে দেওয়া 0 মানটির কাজ কী?'
      },
      options: [
        { en: 'It initializes the initial value of the accumulator on the first iteration', bn: 'এটি প্রথম ইটারেশনে অ্যাকুমুলেটরের প্রারম্ভিক মান নির্ধারণ করে' },
        { en: 'It limits the loop to zero iterations', bn: 'এটি লুপকে শূন্য ইটারেশনে সীমাবদ্ধ করে' },
        { en: 'It specifies the timeout delay in milliseconds', bn: 'এটি মিলিসেকেন্ডে টাইমাউট নির্ধারণ করে' },
        { en: 'It filters out all zero values', bn: 'এটি সকল শূন্য মান মুছে ফেলে' }
      ],
      answer: 0,
      hint: {
        en: 'It is the starting seed value for the reduction computation.',
        bn: 'এটি গণনার শুরুর প্রাথমিক ভিত্তি মান হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'The second parameter of reduce() sets the initial value of the accumulator. If omitted, reduce() uses the first element of the array as the initial accumulator.',
        bn: 'reduce()-এর দ্বিতীয় প্যারামিটার অ্যাকুমুলেটরের প্রাথমিক মান ঠিক করে। এটি না দিলে অ্যারের প্রথম উপাদানটিকেই প্রাথমিক মান ধরা হয়।'
      }
    }
  ],
  quiz: {
    id: 'js-arrays-quiz',
    title: { en: 'JavaScript Arrays & Strings Quiz', bn: 'জাভাস্ক্রিপ্ট অ্যারে ও স্ট্রিং কুইজ' },
    questions: [
      {
        id: 'aq1',
        kind: 'mcq',
        topic: 'js: Array at method',
        question: {
          en: 'What does ["apple", "banana", "cherry"].at(-1) return?',
          bn: '["apple", "banana", "cherry"].at(-1) রান করলে কী রিটার্ন হয়?'
        },
        options: [
          { en: '"cherry"', bn: '"cherry"' },
          { en: '"apple"', bn: '"apple"' },
          { en: 'undefined', bn: 'undefined' },
          { en: '-1', bn: '-1' }
        ],
        answer: 0,
        hint: {
          en: 'Negative indices count backwards from the end.',
          bn: 'ঋণাত্মক ইনডেক্স শেষ থেকে পেছনের দিকে গণনা করে।'
        },
        explanation: {
          en: 'The modern at() method accepts negative integers where -1 returns the last item in the array, namely "cherry".',
          bn: 'আধুনিক at() মেথড ঋণাত্মক ইনডেক্স সাপোর্ট করে যেখানে -১ দিলে অ্যারের একদম শেষ উপাদানটি অর্থাৎ "cherry" পাওয়া যায়।'
        }
      },
      {
        id: 'aq2',
        kind: 'mcq',
        topic: 'js: Filter method return',
        question: {
          en: 'What does the array.filter() method return when none of the elements match the predicate function?',
          bn: 'array.filter() মেথডে কোনো উপাদানই শর্ত পূরণ না করলে কী রিটার্ন হয়?'
        },
        options: [
          { en: 'An empty array ([])', bn: 'একটি খালি অ্যারে ([])' },
          { en: 'null', bn: 'null' },
          { en: 'undefined', bn: 'undefined' },
          { en: 'false', bn: 'false' }
        ],
        answer: 0,
        hint: {
          en: 'filter always returns an Array instance.',
          bn: 'filter সর্বদা একটি অ্যারে রিটার্ন করে।'
        },
        explanation: {
          en: 'array.filter() always returns a new Array. If no elements pass the condition test, it returns an empty array with length 0.',
          bn: 'array.filter() সর্বদা একটি নতুন অ্যারে ফেরত দেয়। কোনো উপাদান শর্ত পূরণ না করলে এটি শূন্য দৈর্ঘ্যের একটি খালি অ্যারে ([]) প্রদান করে।'
        }
      },
      {
        id: 'aq3',
        kind: 'mcq',
        topic: 'js: slice vs splice',
        question: {
          en: 'What is the critical behavioral difference between slice() and splice() on JavaScript arrays?',
          bn: 'জাভাস্ক্রিপ্ট অ্যারেতে slice() এবং splice()-এর মধ্যে সবচেয়ে গুরুত্বপূর্ণ পার্থক্য কী?'
        },
        options: [
          { en: 'slice() returns a new shallow copy leaving the original intact, while splice() mutates the original array in place', bn: 'slice() মূল অ্যারেকে অপরিবর্তিত রেখে নতুন কপি দেয়, আর splice() মূল অ্যারের ভেতরে সরাসরি পরিবর্তন ঘটায়' },
          { en: 'slice() only works on numbers', bn: 'slice() শুধু সংখ্যা নিয়ে কাজ করে' },
          { en: 'splice() cannot delete elements', bn: 'splice() কোনো উপাদান মুছতে পারে না' },
          { en: 'There is no difference between them', bn: 'তাদের মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Pure copy vs mutating in place.',
          bn: 'নতুন কপি তৈরি বনাম মূল অ্যারেতে মিউটেশন।'
        },
        explanation: {
          en: 'slice() produces a shallow copy without altering the source array. splice() modifies the source array in place by adding or removing items.',
          bn: 'slice() মূল অ্যারেকে স্পর্শ না করে নতুন কপি বানায়, আর splice() মূল অ্যারেতেই উপাদান যোগ বা মুছে পরিবর্তন ঘটায়।'
        }
      },
      {
        id: 'aq4',
        kind: 'mcq',
        topic: 'js: Default array sort behavior',
        question: {
          en: 'Why does [10, 5, 20, 1].sort() sort elements incorrectly by default without a comparator function?',
          bn: 'কম্প্যারেটর ফাংশন ছাড়া [10, 5, 20, 1].sort() চালালে ডিফল্টভাবে ভুল ক্রমে সাজায় কেন?'
        },
        options: [
          { en: 'sort() converts elements to UTF-16 strings by default, sorting "10" before "5"', bn: 'sort() উপাদানগুলোকে স্ট্রিংয়ে রূপান্তর করে তুলনা করে, ফলে "5"-এর আগে "10" চলে আসে' },
          { en: 'Because arrays cannot contain more than three numbers', bn: 'কারণ অ্যারেতে ৩টির বেশি সংখ্যা রাখা যায় না' },
          { en: 'Because sorting is disabled in strict mode', bn: 'কারণ স্ট্রিক্ট মোডে সর্টিং বন্ধ থাকে' },
          { en: 'It produces a compilation error', bn: 'এটি কম্পাইলেশন এরর দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Lexicographical UTF-16 string conversion.',
          bn: 'ডিফল্ট লেক্সিকোগ্রাফিক্যাল স্ট্রিং রূপান্তর।'
        },
        explanation: {
          en: 'By default, Array.prototype.sort() converts all items into strings and sorts according to UTF-16 code units, placing "10" ahead of "5". Numerical sorting requires (a, b) => a - b.',
          bn: 'ডিফল্টভাবে sort() মেথড সব মানকে স্ট্রিংয়ে পরিণত করে তুলনা করে। সংখ্যা হিসেবে সঠিকভাবে সাজাতে (a, b) => a - b ব্যবহার করতে হয়।'
        }
      }
    ]
  }
};
