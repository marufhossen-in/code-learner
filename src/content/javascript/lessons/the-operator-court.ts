import type { Lesson } from '../../../lib/types';

export const operatorCourtLesson: Lesson = {
  slug: 'js-operators-decisions',
  tech: 'javascript',
  title: {
    en: 'JavaScript Operators, Decisions, Coercion & Branching',
    bn: 'জাভাস্ক্রিপ্ট অপারেটর, সিদ্ধান্ত, রূপান্তর ও ব্রাঞ্চিং'
  },
  summary: {
    en: 'Master decision logic and expression evaluation across 10 structured topics. Explore arithmetic modulo, assignment shorthands, strict equality, truthy and falsy rules, short-circuiting, nullish coalescing, optional chaining, ternaries, and branching.',
    bn: '১০টি সুসংগঠিত পয়েন্টে সিদ্ধান্ত গ্রহণ ও লজিক্যাল এক্সপ্রেশনের ব্যবহার শিখুন। পাটিগণিত ও মডুলো গণিত, অ্যাসাইনমেন্ট শর্টহ্যান্ড, কঠোর সমতা, ট্রুথি-ফলসি মান, শর্ট-সার্কিট, নালিশ কোলেসিং, অপশনাল চেইনিং, টার্নারি ও কন্ট্রোল ফ্লো ব্রাঞ্চিং আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'js-loops-functions',
    title: { en: 'JavaScript Loops, Functions, Scope & Modern Arrow Syntax', bn: 'জাভাস্ক্রিপ্ট লুপ, ফাংশন, স্কোপ ও আধুনিক অ্যারো সিনট্যাক্স' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Arithmetic Operators, Modulo, and Exponentiation', bn: '১. পাটিগণিত অপারেটর, মডুলো ও এক্সপোনেনশিয়েশন' } },
    {
      type: 'para',
      text: {
        en: 'JavaScript provides standard mathematical operators: addition (+), subtraction (-), multiplication (*), division (/), modulus remainder (%), and exponentiation (**). The modulus operator (%) returns the integer remainder of division, essential for detecting even/odd numbers and circular array wrapping.',
        bn: 'জাভাস্ক্রিপ্টে প্রচলিত গাণিতিক অপারেটরগুলো রয়েছে: যোগ (+), বিয়োগ (-), গুণ (*), ভাগ (/), ভাগশেষ বা মডুলাস (%) এবং ঘাত বা এক্সপোনেনশিয়েশন (**)। মডুলাস অপারেটর (%) ভাগের পর অবশিষ্ট পূর্ণসংখ্যা প্রদান করে, যা জোড়/বিজোড় সংখ্যা নির্ণয় ও সার্কুলার অ্যারে ইনডেক্সিংয়ে অপরিহার্য।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'JavaScript Equality & Coercion Flow',
        bn: 'জাভাস্ক্রিপ্ট সমতা ও টাইপ রূপান্তর প্রবাহ'
      },
      caption: {
        en: 'Strict equality (===) compares without coercion, while loose equality (==) coerces different types.',
        bn: 'কঠোর সমতা (===) রূপান্তর ছাড়া তুলনা করে, আর শিথিল সমতা (==) ভিন্ন টাইপকে রূপান্তর করে নেয়।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Strict Equality -->
  <rect x="25" y="30" width="300" height="90" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="175" y="55" text-anchor="middle" fill="#34d399" font-size="13" font-weight="bold" font-family="monospace">Strict Equality (===)</text>
  <text x="175" y="78" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">typeof a !== typeof b -> false</text>
  <text x="175" y="100" text-anchor="middle" fill="#a7f3d0" font-size="11" font-family="monospace">Zero implicit coercion bugs</text>
  <!-- Loose Equality -->
  <rect x="355" y="30" width="300" height="90" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="505" y="55" text-anchor="middle" fill="#fb7185" font-size="13" font-weight="bold" font-family="monospace">Loose Equality (==)</text>
  <text x="505" y="78" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">Coerces operands to numbers</text>
  <text x="505" y="100" text-anchor="middle" fill="#fecdd3" font-size="11" font-family="monospace">"0" == false -> true (avoid!)</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Standard Arithmetic Operations
const sum = 15 + 5;        // 20
const difference = 15 - 5; // 10
const product = 4 * 5;     // 20
const quotient = 20 / 4;   // 5
const power = 2 ** 3;      // 8 (2 cubed)

// Modulo Remainder (%) Operations
const isEven = 14 % 2 === 0; // true  (14 is even)
const isOdd = 15 % 2 !== 0;  // true  (15 is odd)

// Circular array index wrapping: index % arrayLength
const items = ["A", "B", "C"];
const nextIndex = 3 % items.length; // 0 (Wraps cleanly back to start)

console.log(power);
console.log(nextIndex);
// Output:
// 8
// 0`,
      caption: {
        en: 'The modulus operator (%) calculates remainders, ideal for cycle wrapping and parity checks.',
        bn: 'মডুলাস (%) ভাগশেষ নির্ণয় করে, যা সাইক্লিক্যাল লুপিং ও জোড়-বিজোড় পরীক্ষায় আদর্শ।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Assignment and Compound Operators', bn: '২. অ্যাসাইনমেন্ট ও যৌগিক অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'The basic assignment operator (=) assigns the value of the right operand to the left variable. Compound assignment operators combine arithmetic with assignment: +=, -=, *=, /=, and %=. Modern ES2021 also introduces logical assignment operators (&&=, ||=, ??=).',
        bn: 'সাধারণ অ্যাসাইনমেন্ট অপারেটর (=) ডানদিকের মানটি বামের ভেরিয়েবলে সংরক্ষণ করে। যৌগিক অ্যাসাইনমেন্ট অপারেটর গণিত ও অ্যাসাইনমেন্টকে একসাথে করে: +=, -=, *=, /= এবং %=। আধুনিক জাভাস্ক্রিপ্টে লজিক্যাল অ্যাসাইনমেন্ট অপারেটরও (&&=, ||=, ??=) রয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `let score = 50;

score += 25; // Equivalent to: score = score + 25 (75)
score -= 15; // Equivalent to: score = score - 15 (60)
score *= 2;  // Equivalent to: score = score * 2  (120)
score /= 4;  // Equivalent to: score = score / 4  (30)

// Logical Nullish Assignment (??=): Assign only if currently null or undefined
let config = { maxRetries: null };
config.maxRetries ??= 3; // Assigned 3 because initial value was null
config.timeout = 5000;
config.timeout ??= 1000; // Unchanged because timeout was already defined (5000)

console.log(score);
console.log(config.maxRetries);
console.log(config.timeout);
// Output:
// 30
// 3
// 5000`,
      caption: {
        en: 'Compound operators compress expressions; ??= sets defaults only when null or undefined.',
        bn: 'যৌগিক অপারেটর কোড ছোট করে; ??= শুধুমাত্র null বা undefined থাকলে ডিফল্ট মান বসায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Comparison Operators: Strict (===) vs Loose (==) Equality', bn: '৩. তুলনা অপারেটর: কঠোর সমতা (===) বনাম শিথিল সমতা (==)' } },
    {
      type: 'para',
      text: {
        en: 'Loose equality (==) coerces operands to a common type before comparing, producing notorious bugs (e.g. 0 == "" is true). Strict equality (===) checks both value and type without coercion. In professional software engineering, always use strict equality (=== and !==) to guarantee type safety.',
        bn: 'শিথিল সমতা (==) তুলনা করার আগে গোপনে দুই পাশের ডেটা টাইপ পরিবর্তন করে, যার ফলে অদ্ভুত সব বাগ তৈরি হয় (যেমন 0 == "" সত্য হয়)। কঠোর সমতা (===) কোনো রূপান্তর ছাড়াই মান ও ডেটা টাইপ উভয়ই যাচাই করে। পেশাদার সফটওয়্যার তৈরিতে সর্বদা কঠোর সমতা (=== এবং !==) ব্যবহার করা নিয়ম।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// The Dangers of Loose Equality (==):
console.log(0 == "");        // true!  (Number 0 coerced to empty string)
console.log(0 == false);     // true!  (Boolean false coerced to 0)
console.log("" == false);    // true!
console.log("42" == 42);     // true!

// The Safety of Strict Equality (===):
console.log(0 === "");       // false (number !== string)
console.log(0 === false);    // false (number !== boolean)
console.log("42" === 42);    // false (string !== number)
console.log(42 === 42);      // true  (identical type and value)

// Strict Inequality (!==):
const currentRole = "guest";
if (currentRole !== "admin") {
  console.log("Access restricted");
}

// Output:
// true
// true
// true
// true
// false
// false
// false
// true
// Access restricted`,
      caption: {
        en: 'Always use strict equality (===) to avoid silent type coercion pitfalls.',
        bn: 'অপ্রত্যাশিত টাইপ রূপান্তরের বিপদ এড়াতে সর্বদা কঠোর সমতা (===) ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Truthy and Falsy Values: The 8 Falsy Primitives', bn: '৪. ট্রুথি ও ফলসি মান: জাভাস্ক্রিপ্টের ৮টি ফলসি মান' } },
    {
      type: 'para',
      text: {
        en: 'In JavaScript, every value is inherently Truthy or Falsy when coerced into a Boolean context (such as an if condition). There are exactly 8 falsy values in the language: false, 0, -0, 0n (BigInt zero), "" (empty string), null, undefined, and NaN. EVERYTHING else is truthy, including empty arrays [] and empty objects {}.',
        bn: 'জাভাস্ক্রিপ্টে কোনো শর্তে (যেমন if) বসালে প্রতিটি মান হয় সত্য (Truthy) অথবা মিথ্যা (Falsy) হিসেবে গণ্য হয়। পুরো জাভাস্ক্রিপ্ট ভাষায় ঠিক ৮টি ফলসি মান রয়েছে: false, 0, -0, 0n (BigInt শূন্য), "" (খালি স্ট্রিং), null, undefined এবং NaN। এই ৮টি ছাড়া বাকি সবকিছুই ট্রুথি, এমনকি খালি অ্যারে [] ও খালি অবজেক্টও {} ট্রুথি।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// The 8 Official Falsy Values:
const falsyList = [false, 0, -0, 0n, "", null, undefined, NaN];
const allAreFalsy = falsyList.every(val => Boolean(val) === false);
console.log("All 8 are falsy:", allAreFalsy); // true

// Surprising Truthy Values (Common Interview Traps):
console.log(Boolean([]));        // true! (Empty array is truthy)
console.log(Boolean({}));        // true! (Empty object is truthy)
console.log(Boolean("0"));       // true! (Non-empty string containing zero)
console.log(Boolean("false"));   // true! (Non-empty string)

// Double Bang (!!) Operator: Idiomatic boolean casting
const cartItems = ["Apple", "Orange"];
const hasItems = !!cartItems.length; // Converts number 2 into boolean true
console.log(hasItems); // true

// Output:
// All 8 are falsy: true
// true
// true
// true
// true
// true`,
      caption: {
        en: 'Empty arrays and empty objects are objects, and therefore evaluate to truthy.',
        bn: 'খালি অ্যারে [] ও খালি অবজেক্ট {} অবজেক্ট হওয়ায় বুলিয়ান হিসেবে সত্য (truthy) হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Logical Operators & Short-Circuit Evaluation: &&, ||, and !', bn: '৫. লজিক্যাল অপারেটর ও শর্ট-সার্কিট মূল্যায়ন: &&, || ও !' } },
    {
      type: 'para',
      text: {
        en: 'Logical operators (&&, ||, !) leverage short-circuiting to halt evaluation early once the result is locked. In an AND chain, the engine yields the earliest falsy value it encounters, falling through to the final operand when every condition passes. Conversely, an OR chain selects the initial truthy expression without examining subsequent terms.',
        bn: 'লজিক্যাল অপারেটরগুলো (&&, ||, !) শর্ট-সার্কিট কৌশল ব্যবহার করে ফলাফল নিশ্চিত হওয়ামাত্রই মূল্যায়ন থামিয়ে দেয়। AND চেইনে ইঞ্জিন প্রথম পাওয়া ফলসি মানটি ফেরত দেয়, আর সবগুলো শর্ত সত্য হলে শেষ মানটি নির্বাচন করে। অন্যদিকে OR চেইনে প্রথম ট্রুথি মান পেলেই সেটি রিটার্ন করে এবং পরবর্তী এক্সপ্রেশনগুলো আর পরীক্ষা করে না।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Logical AND (&&) Guard Pattern: Run action only if condition is truthy
const user = { name: "Rahim", isSubscribed: true };
user.isSubscribed && console.log("Delivering premium content to", user.name);

// 2. Logical OR (||) Fallback Pattern:
const inputName = "";
const displayName = inputName || "Anonymous Guest"; // Returns fallback because "" is falsy
console.log(displayName); // "Anonymous Guest"

// Short-circuiting prevents execution of expensive or throwing functions:
let apiLoaded = false;
function expensiveCall() { console.log("Calling API..."); return true; }

apiLoaded && expensiveCall(); // expensiveCall() NEVER runs because apiLoaded is false!

// Output:
// Delivering premium content to Rahim
// Anonymous Guest`,
      caption: {
        en: 'Short-circuit evaluation skips right-hand expressions if the left-hand determines the result.',
        bn: 'শর্ট-সার্কিট বাম পাশের মান দিয়ে ফলাফল নিশ্চিত হলে ডান পাশের কোড চালানো থেকে বিরত থাকে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Nullish Coalescing (??) vs Logical OR (||)', bn: '৬. নালিশ কোলেসিং (??) বনাম লজিক্যাল OR (||)' } },
    {
      type: 'para',
      text: {
        en: 'The Logical OR (||) operator falls back on ANY falsy value, which causes critical bugs when 0, empty strings (""), or false are valid settings. The Nullish Coalescing operator (??) falls back ONLY when the left operand is null or undefined, preserving 0 and false.',
        bn: 'লজিক্যাল OR (||) যেকোনো ফলসি মান পেলেই ডানদিকের ফলব্যাকে চলে যায়, যা ০, খালি স্ট্রিং ("") বা false কোনো বৈধ কনফিগারেশন হলে মারাত্মক বাগ তৈরি করে। নালিশ কোলেসিং (??) শুধুমাত্র তখনই ফলব্যাকে যায় যখন মানটি null বা undefined থাকে, ফলে ০ বা false সুন্দরভাবে সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Problem Scenario: A game volume setting of 0 (Muted)
const userVolume = 0; // Valid setting: User explicitly muted sound!

// ❌ Bug with Logical OR (||):
// Since 0 is falsy, || ignores it and forces default 50!
const volumeOr = userVolume || 50;
console.log("Volume with ||:", volumeOr); // 50 (BUG! Overwrote user choice)

// ✅ Fix with Nullish Coalescing (??):
// Since 0 is neither null nor undefined, ?? preserves 0!
const volumeNullish = userVolume ?? 50;
console.log("Volume with ??:", volumeNullish); // 0 (Correct!)

// Example with missing setting:
let unconfiguredTimeout = null;
const timeout = unconfiguredTimeout ?? 3000;
console.log("Timeout:", timeout); // 3000

// Output:
// Volume with ||: 50
// Volume with ??: 0
// Timeout: 3000`,
      caption: {
        en: 'Use ?? instead of || whenever 0, empty string "", or false are legitimate values.',
        bn: '০, খালি স্ট্রিং বা false কোনো বৈধ মান হলে ||-এর বদলে সর্বদা ?? ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Optional Chaining (?.): Safe Property Access', bn: '৭. অপশনাল চেইনিং (?.): নিরাপদ প্রপার্টি অ্যাক্সেস' } },
    {
      type: 'para',
      text: {
        en: 'Accessing properties on undefined or null throws a fatal TypeError: Cannot read properties of undefined. The Optional Chaining operator (?.) short-circuits and safely returns undefined if the reference is nullish, preventing runtime application crashes.',
        bn: 'undefined বা null-এর ওপর কোনো প্রপার্টি পড়তে গেলে মারাত্মক TypeError ঘটে পুরো অ্যাপ্লিকেশন ক্র্যাশ করে। অপশনাল চেইনিং অপারেটর (?.) কোনো অবজেক্ট null বা undefined থাকলে কোড ক্র্যাশ না করে নিরাপদে undefined ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const apiResponse = {
  user: {
    id: 101,
    profile: {
      bio: "Software Architect"
    }
  }
};

// 1. Safe nested property access
const bio = apiResponse.user?.profile?.bio;
console.log(bio); // "Software Architect"

// 2. Safe missing property access (Zero crashes!)
const zipCode = apiResponse.user?.address?.zipCode;
console.log(zipCode); // undefined (No TypeError thrown!)

// 3. Optional chaining on dynamic array lookups and function calls:
const handlers = {};
handlers.onClick?.(); // Skips invocation cleanly if onClick is not a function

// Output:
// Software Architect
// undefined`,
      caption: {
        en: 'Optional chaining (?.) short-circuits to undefined instead of crashing with a TypeError.',
        bn: 'অপশনাল চেইনিং (?.) এরর ছুড়ে অ্যাপ বন্ধ না করে নিরাপদে undefined প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. The Ternary Operator: Inline Conditional Expressions', bn: '৮. টার্নারি অপারেটর: ইনলাইন শর্তাধীন এক্সপ্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'The conditional (ternary) operator is the only JavaScript operator that takes three operands: condition ? expressionIfTrue : expressionIfFalse. Because it is an expression (evaluates to a value), it can be assigned directly to variables or embedded inside template literals.',
        bn: 'কন্ডিশনাল (টার্নারি) অপারেটর হলো জাভাস্ক্রিপ্টের একমাত্র অপারেটর যা তিনটি অংশ নেয়: শর্ত ? সত্য_হলে_মান : মিথ্যা_হলে_মান। এটি একটি এক্সপ্রেশন হওয়ায় সরাসরি কোনো ভেরিয়েবলে এর মান সংরক্ষণ করা যায় অথবা টেমপ্লেট লিটারেলে বসানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const accountBalance = 1500;

// 1. Assigning directly to variable
const accountStatus = accountBalance > 0 ? "In Good Standing" : "Overdrawn";

// 2. Inline template literal evaluation
const orderTotal = 45;
const shippingFee = orderTotal >= 50 ? 0 : 5;
console.log(\`Shipping: $\${shippingFee} (\${orderTotal >= 50 ? "FREE" : "Standard"})\`);

// 3. Compact status badge
const isOnline = true;
const badgeColor = isOnline ? "#16a34a" : "#64748b";

console.log(accountStatus);
console.log(badgeColor);
// Output:
// Shipping: $5 (Standard)
// In Good Standing
// #16a34a`,
      caption: {
        en: 'Ternary expressions return a value inline, avoiding multiline if/else assignment boilerplate.',
        bn: 'টার্নারি অপারেটর এক লাইনে মান রিটার্ন করে অপ্রয়োজনীয় if/else কোড কমিয়ে আনে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Control Flow: if, else if, and else Branching', bn: '৯. কন্ট্রোল ফ্লো: if, else if ও else ব্রাঞ্চিং' } },
    {
      type: 'para',
      text: {
        en: 'if statements evaluate condition expressions; if truthy, the code block executes. Multiple conditions are chained with else if, terminating in an optional else block if all preceding conditions evaluate to falsy. Always wrap block statements in curly braces {}.',
        bn: 'if স্টেটমেন্ট শর্ত যাচাই করে; সত্য হলে ব্লকের কোড চালায়। একের পর এক একাধিক শর্ত যাচাই করতে else if ব্যবহার করা হয় এবং সব শর্ত মিথ্যা হলে শেষের else ব্লকটি কার্যকর হয়। কোডের সুরক্ষায় সর্বদা কার্লি ব্র্যাকেট {} ব্যবহার করা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const testScore = 85;
let grade;

if (testScore >= 90) {
  grade = "A+";
} else if (testScore >= 80) {
  grade = "A";
} else if (testScore >= 70) {
  grade = "B";
} else if (testScore >= 60) {
  grade = "C";
} else {
  grade = "F";
}

console.log("Final Grade:", grade);
// Output:
// Final Grade: A`,
      caption: {
        en: 'else if chains execute the first matching branch and exit immediately.',
        bn: 'else if চেইনে প্রথম যে শর্তটি সত্য হয় শুধুমাত্র সেই ব্লকটি চলে এবং লুপ শেষ হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Multi-Branch Decisions: switch, case, break, and Fallthrough', bn: '১০. মাল্টি-ব্রাঞ্চ সিদ্ধান্ত: switch, case, break ও ফলথ্রু' } },
    {
      type: 'para',
      text: {
        en: 'A switch statement compares an expression against multiple case clauses using strict equality (===). Each case must conclude with a break statement to prevent unintentional fallthrough execution into subsequent cases. An optional default clause handles unmatched values.',
        bn: 'একটি switch স্টেটমেন্ট কোনো এক্সপ্রেশনকে একাধিক case-এর সাথে কঠোর সমতা (===) দিয়ে মেলায়। পরবর্তী case-এ যেন স্বয়ংক্রিয়ভাবে কোড চলে না যায় সেজন্য প্রতি case-এর শেষে break দিতে হয়। কোনো শর্ত না মিললে default ব্লকটি কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `const dayCode = 2;
let dayName;

switch (dayCode) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 6:
  case 7:
    // Intentional fallthrough: groups weekend days together
    dayName = "Weekend";
    break;
  default:
    dayName = "Unknown Day";
    break;
}

console.log(dayName);
// Output:
// Tuesday`,
      caption: {
        en: 'switch evaluates with strict equality (===); omitting break causes intentional fallthrough.',
        bn: 'switch কঠোর সমতা (===) দিয়ে কাজ করে; break বাদ দিলে পরের case-এ কোড গড়িয়ে যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-ops-ex1',
      kind: 'predict',
      topic: 'js: Nullish coalescing vs OR',
      question: {
        en: 'What is the evaluated output of (0 || 100) vs (0 ?? 100)?',
        bn: '(0 || 100) এবং (0 ?? 100)-এর মান যথাক্রমে কী হবে?'
      },
      code: `/* const valA = 0 || 100; */
/* const valB = 0 ?? 100; */`,
      answer: '100 and 0',
      accept: ['100 and 0', '100, 0', '100 0', '100,0'],
      hint: {
        en: '|| treats 0 as falsy; ?? only checks for null and undefined.',
        bn: '|| ০ কে ফলসি মনে করে ডানদিকে যায়; আর ?? ০ কে বৈধ মান মনে করে গ্রহণ করে।'
      },
      explanation: {
        en: '0 || 100 returns 100 because 0 is falsy in boolean contexts. 0 ?? 100 returns 0 because 0 is defined and neither null nor undefined.',
        bn: '0 || 100 দিলে ১০০ আসে কারণ ০ হলো ফলসি মান। কিন্তু 0 ?? 100 দিলে ০-ই থাকে কারণ ০ কোনো null বা undefined নয়।'
      }
    },
    {
      id: 'js-ops-ex2',
      kind: 'mcq',
      topic: 'js: Strict equality evaluation',
      question: {
        en: 'Why is "0" === 0 evaluated as false in JavaScript?',
        bn: 'জাভাস্ক্রিপ্টে "0" === 0 তুলনা করলে false আসে কেন?'
      },
      options: [
        { en: 'Strict equality checks both value and type without coercion, and string !== number', bn: 'কঠোর সমতা কোনো প্রকার রূপান্তর ছাড়া মান ও টাইপ উভয়ই দেখে, আর স্ট্রিং এবং সংখ্যা ভিন্ন টাইপ' },
        { en: 'Because zero is a negative number', bn: 'কারণ শূন্য একটি ঋণাত্মক সংখ্যা' },
        { en: 'Because strings cannot contain numbers', bn: 'কারণ স্ট্রিংয়ে সংখ্যা থাকতে পারে না' },
        { en: 'It evaluates to true, not false', bn: 'এটি আসলে true হয়' }
      ],
      answer: 0,
      hint: {
        en: 'Check the data types of the left and right operands.',
        bn: 'বাম ও ডান পাশের ডেটা টাইপ দুটি খেয়াল করুন।'
      },
      explanation: {
        en: 'The strict equality operator (===) never performs type coercion. Because typeof "0" is string and typeof 0 is number, the comparison immediately returns false.',
        bn: 'কঠোর সমতা (===) কখনোই টাইপ কনভার্সন করে না। "0" হলো স্ট্রিং এবং 0 হলো সংখ্যা, তাই তাদের টাইপ না মেলায় সরাসরি false আসে।'
      }
    },
    {
      id: 'js-ops-ex3',
      kind: 'mcq',
      topic: 'js: Optional chaining safety',
      question: {
        en: 'What does user?.address?.city evaluate to if user.address is undefined?',
        bn: 'যদি user.address-এর মান undefined হয়, তবে user?.address?.city কী রিটার্ন করবে?'
      },
      options: [
        { en: 'undefined (without throwing an error)', bn: 'undefined (কোনো এরর ছাড়াই)' },
        { en: 'TypeError: Cannot read properties of undefined', bn: 'টাইপ এরর (TypeError: Cannot read properties of undefined)' },
        { en: 'null', bn: 'null' },
        { en: 'false', bn: 'false' }
      ],
      answer: 0,
      hint: {
        en: 'Optional chaining safely short-circuits.',
        bn: 'অপশনাল চেইনিং নিরাপদে শর্ট-সার্কিট করে।'
      },
      explanation: {
        en: 'When the optional chaining operator (?.) encounters an undefined or null property along the chain, it immediately stops and safely evaluates to undefined rather than throwing a TypeError.',
        bn: 'অপশনাল চেইনিং (?.) কোনো ধাপে undefined বা null পেলে সাথে সাথে থেমে গিয়ে নিরাপদে undefined ফেরত দেয়, ফলে অ্যাপ ক্র্যাশ করে না।'
      }
    }
  ],
  quiz: {
    id: 'js-operators-quiz',
    title: { en: 'JavaScript Operators Quiz', bn: 'জাভাস্ক্রিপ্ট অপারেটর কুইজ' },
    questions: [
      {
        id: 'oq1',
        kind: 'mcq',
        topic: 'js: Falsy values count',
        question: {
          en: 'Which of the following values is TRUTHY in JavaScript?',
          bn: 'নিচের কোন মানটি জাভাস্ক্রিপ্টে সত্য (TRUTHY) হিসেবে গণ্য হয়?'
        },
        options: [
          { en: '[] (empty array)', bn: '[] (খালি অ্যারে)' },
          { en: '0', bn: '0' },
          { en: '"" (empty string)', bn: '"" (খালি স্ট্রিং)' },
          { en: 'NaN', bn: 'NaN' }
        ],
        answer: 0,
        hint: {
          en: 'All objects and arrays are truthy in JavaScript.',
          bn: 'জাভাস্ক্রিপ্টে সকল অবজেক্ট এবং অ্যারে সত্য (truthy) হয়।'
        },
        explanation: {
          en: 'In JavaScript, all objects (including empty arrays [] and empty objects {}) are truthy. 0, "", and NaN belong to the official 8 falsy primitives.',
          bn: 'জাভাস্ক্রিপ্টে যেকোনো অবজেক্ট বা খালি অ্যারে [] সত্য বা ট্রুথি হয়। আর ০, খালি স্ট্রিং ও NaN হলো ৮টি ফলসি মানের অন্তর্ভুক্ত।'
        }
      },
      {
        id: 'oq2',
        kind: 'mcq',
        topic: 'js: Switch statement break',
        question: {
          en: 'What happens in a switch statement if you omit the break keyword at the end of a matched case?',
          bn: 'একটি switch স্টেটমেন্টে শর্ত মেলা case-এর শেষে break কিওয়ার্ড না দিলে কী ঘটে?'
        },
        options: [
          { en: 'Execution falls through into the next case statement regardless of whether that case matches', bn: 'পরবর্তী case-এর শর্ত না মিললেও কোড সরাসরি পরের কেসের ভেতরে ঢুকে তা নির্বাহ করে ফেলে (ফলথ্রু)' },
          { en: 'A SyntaxError is thrown by the compiler', bn: 'কম্পাইলার একটি SyntaxError ছুড়ে দেয়' },
          { en: 'The script immediately halts', bn: 'স্ক্রিপ্ট সাথে সাথে বন্ধ হয়ে যায়' },
          { en: 'The browser restarts the switch loop', bn: 'ব্রাউজার আবার প্রথম থেকে শুরু করে' }
        ],
        answer: 0,
        hint: {
          en: 'Think of "falling through" to the next statement.',
          bn: 'পরের স্টেটমেন্টে "গড়িয়ে পড়া" বা ফলথ্রুর কথা ভাবুন।'
        },
        explanation: {
          en: 'Without a break statement, JavaScript continues executing statements in subsequent cases sequentially (known as fallthrough) until encountering a break or the end of the switch block.',
          bn: 'break না দিলে জাভাস্ক্রিপ্ট পরের কেসগুলোর শর্ত না দেখেই একের পর এক কোড চালিয়ে যায় যতক্ষণ না কোনো break পায়।'
        }
      },
      {
        id: 'oq3',
        kind: 'mcq',
        topic: 'js: Nullish coalescing operator',
        question: {
          en: 'What does the expression (0 ?? 42) evaluate to in JavaScript?',
          bn: 'জাভাস্ক্রিপ্টে (0 ?? 42) এক্সপ্রেশনটির মান কী দাঁড়ায়?'
        },
        options: [
          { en: '0 (because nullish coalescing only falls back on null or undefined)', bn: '0 (কারণ নালিশ কোলেসিং শুধু null বা undefined পেলেই ডানে যায়)' },
          { en: '42', bn: '42' },
          { en: 'undefined', bn: 'undefined' },
          { en: 'NaN', bn: 'NaN' }
        ],
        answer: 0,
        hint: {
          en: '?? treats 0 as a valid defined value.',
          bn: '?? অপারেটর 0 কে একটি বৈধ মান হিসেবে গ্রহণ করে।'
        },
        explanation: {
          en: 'The nullish coalescing operator (??) only triggers its fallback when the left-hand operand evaluates to null or undefined. Because 0 is a defined number, it is returned intact.',
          bn: 'নালিশ কোলেসিং (??) শুধুমাত্র null বা undefined হলেই ডানপাশের মান নেয়। ০ একটি বৈধ সংখ্যা হওয়ায় ০-ই রিটার্ন হয়।'
        }
      },
      {
        id: 'oq4',
        kind: 'mcq',
        topic: 'js: Optional chaining safety',
        question: {
          en: 'What is the principal safety benefit of optional chaining (?. ) when traversing nested objects?',
          bn: 'নেস্টেড অবজেক্ট পড়ার সময় অপশনাল চেইনিং (?. ) ব্যবহারের প্রধান নিরাপত্তা সুবিধা কী?'
        },
        options: [
          { en: 'It short-circuits to undefined rather than throwing a TypeError if an intermediate property is nullish', bn: 'মাঝের কোনো প্রোপার্টি nullish হলে এটি TypeError ছুড়ে অ্যাপ ক্র্যাশ না করে নিরাপদে undefined ফেরত দেয়' },
          { en: 'It converts objects into JSON strings', bn: 'এটি অবজেক্টকে JSON স্ট্রিংয়ে রূপান্তর করে' },
          { en: 'It freezes object properties from mutation', bn: 'অবজেক্ট ফ্রিজ করে পরিবর্তন আটকায়' },
          { en: 'It increases memory allocation', bn: 'মেমোরি বরাদ্দ বাড়িয়ে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents "Cannot read property of undefined" crashes.',
          bn: 'টাইপ এরর এবং অ্যাপ ক্র্যাশ হওয়া থেকে রক্ষা করে।'
        },
        explanation: {
          en: 'Optional chaining safely evaluates to undefined when encountering null or undefined anywhere along the reference chain without crashing your application.',
          bn: 'অপশনাল চেইনিং রেফারেন্স চেইনে null বা undefined পেলেই সাথে সাথে থেমে গিয়ে নিরাপদে undefined রিটার্ন করে।'
        }
      }
    ]
  }
};
