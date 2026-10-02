import type { Lesson } from '../../../lib/types';

export const repetitionMillLesson: Lesson = {
  slug: 'js-loops-functions',
  tech: 'javascript',
  title: {
    en: 'JavaScript Loops, Functions, Scope & Modern Arrow Syntax',
    bn: 'জাভাস্ক্রিপ্ট লুপ, ফাংশন, স্কোপ ও আধুনিক অ্যারো সিনট্যাক্স'
  },
  summary: {
    en: 'Master iterative control flow and functional abstractions across 10 structured topics. Explore standard for loops, while and do-while repetition, for-of, break/continue, functions, rest parameters, arrow functions, and pure functional programming.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ইটারেশন ও ফাংশনের ব্যবহার আয়ত্ত করুন। সাধারণ for লুপ, while ও do-while রিপিটেশন, for-of বনাম for-in, break ও continue মেকানিক্স, প্যারামিটার ও আর্লি রিটার্ন গার্ড ক্লজ, অ্যারো ফাংশন এবং পিওর ফাংশন ডিজাইন শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'js-arrays-strings',
    title: { en: 'JavaScript Arrays, Strings, Template Literals & Iteration', bn: 'জাভাস্ক্রিপ্ট অ্যারে, স্ট্রিং, টেমপ্লেট লিটারেল ও ইটারেশন' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Standard for Loops: Counters, Conditions, and Steps', bn: '১. সাধারণ for লুপ: কাউন্টার, শর্ত ও ইনক্রিমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The classic for loop runs a block of code a known number of times. It consists of three expressions separated by semicolons: initialization (let i = 0), loop condition (i < 5), and increment step (i++). Declaring the counter with let ensures a fresh, block-scoped binding on every iteration.',
        bn: 'ক্লাসিক for লুপ নির্দিষ্ট সংখ্যক বার কোনো কোড চালানোর জন্য ব্যবহৃত হয়। এটি সেমিকোলন দিয়ে আলাদা করা তিনটি অংশ নিয়ে গঠিত: প্রারম্ভিক কাউন্টার (let i = 0), লুপ চলার শর্ত (i < 5) এবং বৃদ্ধির ধাপ (i++)। let দিয়ে কাউন্টার তৈরি করলে প্রতি ইটারেশনে একটি নতুন ব্লক-স্কোপড ভেরিয়েবল তৈরি হয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Loop Execution Models: Pre-test vs Post-test',
        bn: 'লুপ এক্সিকিউশন মডেল: প্রি-টেস্ট বনাম পোস্ট-টেস্ট'
      },
      caption: {
        en: 'while tests conditions before executing the body, while do-while guarantees at least 1 iteration.',
        bn: 'while বডি চালানোর আগে শর্ত পরীক্ষা করে, আর do-while অন্তত ১ বার নির্বাহ নিশ্চিত করে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- while loop -->
  <rect x="25" y="30" width="300" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="175" y="55" text-anchor="middle" fill="#38bdf8" font-size="13" font-weight="bold" font-family="monospace">while (Pre-test)</text>
  <text x="175" y="78" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">condition ? run body : exit</text>
  <text x="175" y="100" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="monospace">Runs 0 or more times</text>
  <!-- do-while loop -->
  <rect x="355" y="30" width="300" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="505" y="55" text-anchor="middle" fill="#fbbf24" font-size="13" font-weight="bold" font-family="monospace">do ... while (Post-test)</text>
  <text x="505" y="78" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">run body -> test condition</text>
  <text x="505" y="100" text-anchor="middle" fill="#fef3c7" font-size="11" font-family="monospace">Guaranteed >= 1 iteration</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Forward iteration from 0 to 4
for (let i = 0; i < 5; i++) {
  console.log("Iteration index:", i);
}

// Reverse counting down to 0
for (let count = 3; count >= 1; count--) {
  console.log("Countdown:", count);
}

// Stepping in increments of 2
for (let step = 0; step <= 6; step += 2) {
  console.log("Step:", step);
}

// Output:
// Iteration index: 0
// Iteration index: 1
// Iteration index: 2
// Iteration index: 3
// Iteration index: 4
// Countdown: 3
// Countdown: 2
// Countdown: 1
// Step: 0
// Step: 2
// Step: 4
// Step: 6`,
      caption: {
        en: 'for loops provide precise index-based control over iteration steps and directions.',
        bn: 'for লুপ ইনডেক্স ধরে সামনে বা পেছনের দিকে সুনির্দিষ্ট ধাপে চলতে পারে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. while and do...while Loops: Condition-Driven Repetition', bn: '২. while ও do...while লুপ: শর্তনির্ভর পুনরাবৃত্তি' } },
    {
      type: 'para',
      text: {
        en: 'A while loop checks its gate expression before entering the code block; if that initial test fails, the engine never executes the body. In contrast, do...while shifts the conditional check to the bottom, ensuring the enclosed statements run at least once before evaluating continuation.',
        bn: 'while লুপ কোড ব্লকে প্রবেশের পূর্বেই শর্ত যাচাই করে; শুরুতে শর্ত মিথ্যা হলে বডি একবারও এক্সিকিউট হয় না। অন্যদিকে do...while লুপ শর্ত যাচাইয়ের ধাপটি শেষে স্থানান্তর করে, যার ফলে শর্তের মান যাই হোক না কেন অন্তত একবার কোড কার্যকর হওয়া নিশ্চিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Standard while loop (Pre-test loop)
let balance = 100;
let withdrawals = 0;

while (balance >= 30) {
  balance -= 30;
  withdrawals++;
}
console.log(\`Withdrawals: \${withdrawals}, Remaining: $\${balance}\`);

// 2. do...while loop (Post-test loop: Runs at least once!)
let attempts = 0;
do {
  attempts++;
  console.log("Attempt executed:", attempts);
} while (attempts < 1); // Condition is false immediately, but ran once!

// Output:
// Withdrawals: 3, Remaining: $10
// Attempt executed: 1`,
      caption: {
        en: 'do...while guarantees at least one execution pass before testing the termination condition.',
        bn: 'do...while শর্ত যাচাই করার আগেই অন্তত একবার কোড চালানো নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. for...of vs for...in: Iterating Values vs Keys', bn: '৩. for...of বনাম for...in: মান বনাম কি (Key) খোঁজা' } },
    {
      type: 'para',
      text: {
        en: 'for...of iterates directly over the VALUES of iterable data structures (Arrays, Strings, Sets, Maps). for...in iterates over the enumerable PROPERTY KEYS of an object. Using for...in on arrays is a common anti-pattern because it returns indices as strings and iterates prototype properties.',
        bn: 'for...of সরাসরি যেকোনো ইটারেবলের (অ্যারে, স্ট্রিং, সেট, ম্যাপ) ভেতরের মানের (values) ওপর লুপ চালায়। আর for...in কোনো অবজেক্টের কি (keys বা প্রপার্টি নামের) ওপর লুপ চালায়। অ্যারের ক্ষেত্রে for...in ব্যবহার করা ঠিক নয় কারণ এটি ইনডেক্সকে স্ট্রিং হিসেবে দেয় এবং প্রোটোটাইপ পর্যন্ত ছড়িয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. for...of: Iterating array VALUES
const fruits = ["Mango", "Banana", "Orange"];
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// 2. for...in: Iterating object KEYS
const userProfile = {
  name: "Tanvir",
  role: "Engineer",
  city: "Dhaka"
};

for (const key in userProfile) {
  console.log(\`\${key}: \${userProfile[key]}\`);
}

// Output:
// Fruit: Mango
// Fruit: Banana
// Fruit: Orange
// name: Tanvir
// role: Engineer
// city: Dhaka`,
      caption: {
        en: 'Use for...of for array values; use for...in exclusively for plain object keys.',
        bn: 'অ্যারের মানের জন্য for...of এবং সাধারণ অবজেক্টের কি-এর জন্য for...in ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Loop Control Statements: break and continue', bn: '৪. লুপ নিয়ন্ত্রণ: break ও continue' } },
    {
      type: 'para',
      text: {
        en: 'The break statement terminates loop execution immediately, transferring control to the first statement following the loop block. The continue statement skips the remainder of the current iteration and jumps directly to the next iteration step.',
        bn: 'break স্টেটমেন্ট পুরো লুপটিকে সাথে সাথে বন্ধ করে দেয় এবং লুপের পরের লাইনে চলে যায়। আর continue স্টেটমেন্ট বর্তমান চক্রের বাকি অংশ এড়িয়ে গিয়ে সরাসরি পরবর্তী চক্র বা ইটারেশনে চলে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. break: Stop loop immediately when target item is found
const numbers = [10, 25, 42, 88, 99];
let foundNumber = null;

for (const num of numbers) {
  if (num === 42) {
    foundNumber = num;
    break; // Exit loop early! Saves unnecessary future iterations
  }
}
console.log("Found target:", foundNumber);

// 2. continue: Skip even numbers and log only odds
const values = [1, 2, 3, 4, 5, 6];
for (const n of values) {
  if (n % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log("Odd number:", n);
}

// Output:
// Found target: 42
// Odd number: 1
// Odd number: 3
// Odd number: 5`,
      caption: {
        en: 'break exits the loop immediately; continue skips to the next cycle without terminating.',
        bn: 'break লুপ সাথে সাথে বন্ধ করে; continue বর্তমান চক্রটি বাদ দিয়ে পরেরটিতে যায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Function Declarations vs Expressions: Syntax & Hoisting', bn: '৫. ফাংশন ডিক্লারেশন বনাম এক্সপ্রেশন: সিনট্যাক্স ও হোইস্টিং' } },
    {
      type: 'para',
      text: {
        en: 'A Function Declaration is defined with the function keyword and is fully hoisted to the top of its enclosing scope, allowing it to be invoked before its definition. A Function Expression stores an anonymous or named function inside a variable; it is not hoisted and throws a ReferenceError if called prematurely.',
        bn: 'একটি ফাংশন ডিক্লারেশন function কিওয়ার্ড দিয়ে শুরু হয় এবং এটি সম্পূর্ণভাবে স্কোপের শীর্ষে হোইস্ট হয়, ফলে কোডে লেখার আগেই একে কল করা যায়। একটি ফাংশন এক্সপ্রেশন কোনো ভেরিয়েবলের ভেতরে ফাংশন সংরক্ষণ করে; এটি হোইস্ট হয় না এবং আগে কল করলে ReferenceError দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Function Declaration (Can be called BEFORE its declaration!)
console.log(calculateArea(5, 10)); // 50 (Hoisted successfully!)

function calculateArea(width, height) {
  return width * height;
}

// 2. Function Expression (Cannot be called before declaration)
// console.log(multiply(3, 4)); // ReferenceError: Cannot access 'multiply' before initialization!

const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(3, 4)); // 12

// Output:
// 50
// 12`,
      caption: {
        en: 'Function declarations are fully hoisted; function expressions adhere to TDZ variable rules.',
        bn: 'ফাংশন ডিক্লারেশন সম্পূর্ণ হোইস্ট হয়; ফাংশন এক্সপ্রেশন ভেরিয়েবলের TDZ নিয়ম মেনে চলে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Default Parameters and Rest Parameters (...args)', bn: '৬. ডিফল্ট প্যারামিটার ও রেস্ট প্যারামিটার (...args)' } },
    {
      type: 'para',
      text: {
        en: 'Default parameters assign fallback values if arguments are omitted or passed as undefined. Rest parameters (...args) gather an arbitrary number of remaining arguments into a true JavaScript array, replacing the legacy array-like arguments object.',
        bn: 'ফাংশনে কোনো আর্গুমেন্ট না পাঠালে বা undefined পাঠালে ডিফল্ট প্যারামিটার সেই শূন্যতা পূরণ করে। রেস্ট প্যারামিটার (...args) অবশিষ্ট যেকোনো সংখ্যক আর্গুমেন্টকে একটি আসল জাভাস্ক্রিপ্ট অ্যারেতে রূপান্তর করে, যা পুরোনো arguments অবজেক্টের বিকল্প।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Default Parameters
function createGreeting(name = "Guest", greeting = "Welcome") {
  return \`\${greeting}, \${name}!\`;
}

console.log(createGreeting());             // "Welcome, Guest!"
console.log(createGreeting("Rahim", "Hi")); // "Hi, Rahim!"

// 2. Rest Parameters: Gathers any number of arguments into an array
function sumAll(...numbers) {
  // 'numbers' is a true Array: we can use reduce, map, filter!
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sumAll(10, 20, 30));       // 60
console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21

// Output:
// Welcome, Guest!
// Hi, Rahim!
// 60
// 21`,
      caption: {
        en: 'Rest parameters (...args) gather arguments into an array with access to all array methods.',
        bn: 'রেস্ট প্যারামিটার (...args) সব আর্গুমেন্টকে অ্যারে বানায় যাতে অ্যারে মেথড চালানো যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Return Values, Early Returns & The Guard Clause Pattern', bn: '৭. রিটার্ন মান, আর্লি রিটার্ন ও গার্ড ক্লজ প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'A function terminates immediately when hitting a return statement, returning the specified value (or undefined if return is omitted). The Guard Clause pattern uses early returns at the beginning of a function to handle invalid states, flattening deeply nested if/else pyramids.',
        bn: 'একটি ফাংশন return স্টেটমেন্ট পাওয়া মাত্রই বন্ধ হয়ে যায় এবং নির্দিষ্ট মানটি ফেরত দেয় (কিছু না দিলে undefined)। গার্ড ক্লজ প্যাটার্নে ফাংশনের শুরুতেই ভুল শর্তগুলোকে আর্লি রিটার্ন করে বের করে দেওয়া হয়, যার ফলে জটিল if/else-এর স্তূপ সমতল ও পরিচ্ছন্ন হয়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ Deeply nested pyramid of doom:
function processPaymentBad(user, amount) {
  if (user) {
    if (user.isActive) {
      if (amount > 0) {
        return "Payment processed successfully";
      } else {
        return "Invalid amount";
      }
    } else {
      return "User inactive";
    }
  } else {
    return "User required";
  }
}

// ✅ Clean Guard Clauses with Early Returns:
function processPaymentClean(user, amount) {
  if (!user) return "User required";
  if (!user.isActive) return "User inactive";
  if (amount <= 0) return "Invalid amount";

  // Happy path code lives cleanly at root indentation
  return "Payment processed successfully";
}

console.log(processPaymentClean({ isActive: true }, 150));
// Output:
// Payment processed successfully`,
      caption: {
        en: 'Guard clauses handle error conditions upfront and keep happy-path code unindented.',
        bn: 'গার্ড ক্লজ শুরুতে ত্রুটিগুলো দূর করে মূল লজিককে কোনো নেস্টিং ছাড়াই পরিষ্কার রাখে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Arrow Functions: Concise Syntax & Lexical this', bn: '৮. অ্যারো ফাংশন: সংক্ষিপ্ত সিনট্যাক্স ও লেক্সিক্যাল this' } },
    {
      type: 'para',
      text: {
        en: 'Arrow functions (() => {}) provide a concise alternative to standard function expressions. Single-expression bodies support implicit returns without curly braces. Crucially, arrow functions do NOT have their own this context; they lexically inherit this from their enclosing parent scope.',
        bn: 'অ্যারো ফাংশন (() => {}) সাধারণ ফাংশন লেখার একটি আধুনিক সংক্ষিপ্ত রূপ। এক লাইনের বডিতে কার্লি ব্র্যাকেট ছাড়াই স্বয়ংক্রিয়ভাবে মান রিটার্ন হয়। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো, অ্যারো ফাংশনের নিজস্ব কোনো this থাকে না; এরা তাদের প্যারেন্ট স্কোপ থেকে লেক্সিক্যালি this গ্রহণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// 1. Syntax Variations
const add = (a, b) => a + b; // Implicit return
const square = x => x * x;   // Single parameter omits parentheses

console.log(add(5, 7));    // 12
console.log(square(6));    // 36

// 2. Lexical 'this' preservation in callbacks
const timer = {
  seconds: 0,
  start() {
    // Arrow function preserves 'this' referencing the timer object!
    setTimeout(() => {
      this.seconds += 1;
      console.log("Timer seconds:", this.seconds);
    }, 100);
  }
};

timer.start();
// Output:
// 12
// 36
// Timer seconds: 1`,
      caption: {
        en: 'Arrow functions do not bind their own this, making them ideal for callbacks and timers.',
        bn: 'অ্যারো ফাংশন নিজস্ব this তৈরি করে না, যা কলব্যাক ও টাইমার কোডে অত্যন্ত কার্যকর।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. First-Class and Higher-Order Functions', bn: '৯. ফার্স্ট-ক্লাস ও হায়ার-অর্ডার ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'In JavaScript, functions are First-Class Citizens: they can be assigned to variables, stored in objects/arrays, passed as arguments to other functions, and returned from functions. A function that accepts another function as an argument or returns a function is a Higher-Order Function.',
        bn: 'জাভাস্ক্রিপ্টে ফাংশন হলো ফার্স্ট-ক্লাস সিটিজেন: এদেরকে ভেরিয়েবলে রাখা যায়, অ্যারেতে সংরক্ষণ করা যায়, অন্য ফাংশনে আর্গুমেন্ট হিসেবে পাঠানো যায় এবং ফাংশন থেকে রিটার্ন করা যায়। যে ফাংশন অন্য ফাংশনকে আর্গুমেন্ট হিসেবে নেয় বা রিটার্ন করে তাকে হায়ার-অর্ডার ফাংশন বলে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Higher-Order Function that accepts an operation callback
function repeatAction(count, callback) {
  for (let i = 1; i <= count; i++) {
    callback(i);
  }
}

repeatAction(3, (step) => {
  console.log("Task executed at step:", step);
});

// Function returning another function (Factory pattern)
function createMultiplier(multiplier) {
  return function(number) {
    return number * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(10)); // 20
console.log(triple(10)); // 30

// Output:
// Task executed at step: 1
// Task executed at step: 2
// Task executed at step: 3
// 20
// 30`,
      caption: {
        en: 'Higher-order functions accept or return functions, enabling expressive functional pipelines.',
        bn: 'হায়ার-অর্ডার ফাংশন অন্য ফাংশন গ্রহণ বা রিটার্ন করে শক্তিশালী ফাংশনাল পাইপলাইন গড়ে তোলে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Pure Functions and Avoiding Side Effects', bn: '১০. পিওর ফাংশন ও পার্শ্বপ্রতিক্রিয়া (Side Effects) পরিহার' } },
    {
      type: 'para',
      text: {
        en: 'A Pure Function satisfies two rules: 1) Given identical inputs, it ALWAYS returns the identical output (deterministic), and 2) It produces zero Side Effects (it does not modify external variables, mutate input objects, or perform unexpected I/O). Pure functions are easy to test, debug, and memoize.',
        bn: 'একটি পিওর (বিশুদ্ধ) ফাংশন দুটি নিয়ম মেনে চলে: ১) একই ইনপুট দিলে এটি সর্বদা একই আউটপুট দেয়, এবং ২) এর কোনো সাইড ইফেক্ট থাকে না (এটি বাইরের কোনো ভেরিয়েবল বা ইনপুট অবজেক্ট পরিবর্তন করে না)। পিওর ফাংশন পরীক্ষা করা, ডিবাগ করা এবং ক্যাশ করা অত্যন্ত সহজ।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// ❌ Impure Function: Mutates external global state!
let totalTaxes = 0;
function addTaxImpure(amount) {
  totalTaxes += amount * 0.15; // Side effect: alters global variable
  return amount + totalTaxes;
}

// ✅ Pure Function: Depends only on inputs, mutates nothing external
function calculateTotalWithTax(amount, taxRate = 0.15) {
  return amount + (amount * taxRate);
}

const bill1 = calculateTotalWithTax(100);
const bill2 = calculateTotalWithTax(100);

console.log("Bill 1:", bill1); // 115
console.log("Bill 2:", bill2); // 115 (Guaranteed identical deterministic output!)

// Output:
// Bill 1: 115
// Bill 2: 115`,
      caption: {
        en: 'Pure functions avoid state mutation, ensuring predictable software architecture.',
        bn: 'পিওর ফাংশন স্টেট মিউটেশন এড়িয়ে চলে কোডকে অনুমানযোগ্য ও নির্ভরযোগ্য রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-loop-ex1',
      kind: 'predict',
      topic: 'js: Arrow function implicit return',
      question: {
        en: 'What does the arrow function const calc = (x) => x * 3; return when invoked with calc(4)?',
        bn: 'const calc = (x) => x * 3; অ্যারো ফাংশনে calc(4) কল করলে ফলাফল কী রিটার্ন হবে?'
      },
      code: `/* const calc = (x) => x * 3; */
/* console.log(calc(4)); */`,
      answer: '12',
      accept: ['12'],
      hint: {
        en: 'Single expression arrow functions return without needing the return keyword.',
        bn: 'এক লাইনের অ্যারো ফাংশন return কিওয়ার্ড ছাড়াই সরাসরি মান প্রদান করে।'
      },
      explanation: {
        en: 'In arrow functions with concise bodies (no curly braces), the expression is implicitly evaluated and returned: 4 * 3 = 12.',
        bn: 'কার্লি ব্র্যাকেট ছাড়া এক লাইনের অ্যারো ফাংশনে এক্সপ্রেশনটি স্বয়ংক্রিয়ভাবে রিটার্ন হয়, তাই ৪ * ৩ = ১২ হবে।'
      }
    },
    {
      id: 'js-loop-ex2',
      kind: 'mcq',
      topic: 'js: For-of vs For-in',
      question: {
        en: 'Which loop directly iterates over the values of an array rather than its string indices or keys?',
        bn: 'কোন লুপটি অ্যারের ইনডেক্স বা কি-এর বদলে সরাসরি তার ভেতরের মানগুলোর (values) ওপর চলে?'
      },
      options: [
        { en: 'for...of', bn: 'for...of' },
        { en: 'for...in', bn: 'for...in' },
        { en: 'while(true)', bn: 'while(true)' },
        { en: 'switch...case', bn: 'switch...case' }
      ],
      answer: 0,
      hint: {
        en: 'Remember: "of" is for values; "in" is for keys.',
        bn: 'মনে রাখবেন: "of" হলো ভ্যালুর জন্য; আর "in" হলো কি (keys)-এর জন্য।'
      },
      explanation: {
        en: 'for...of is designed to iterate through values of iterable collections (arrays, strings, sets). for...in iterates over enumerable object keys.',
        bn: 'for...of তৈরি করা হয়েছে অ্যারে ও অন্যান্য ইটারেবলের মানের ওপর ঘোরার জন্য। আর for...in অবজেক্টের কি-এর ওপর কাজ করে।'
      }
    },
    {
      id: 'js-loop-ex3',
      kind: 'mcq',
      topic: 'js: Rest parameter type',
      question: {
        en: 'What data structure is created by using rest parameters function test(...args) {} inside the function body?',
        bn: 'ফাংশনে রেস্ট প্যারামিটার function test(...args) {} ব্যবহার করলে args চলকটি কোন ধরনের ডেটা স্ট্রাকচার হয়?'
      },
      options: [
        { en: 'A true JavaScript Array instance with methods like reduce, map, and filter', bn: 'একটি আসল জাভাস্ক্রিপ্ট অ্যারে যাতে reduce, map ও filter চালানো যায়' },
        { en: 'A plain string', bn: 'একটি সাধারণ স্ট্রিং' },
        { en: 'An object with no array prototype', bn: 'অ্যারে প্রোটোটাইপ ছাড়া সাধারণ অবজেক্ট' },
        { en: 'undefined', bn: 'undefined' }
      ],
      answer: 0,
      hint: {
        en: 'Unlike arguments, rest parameters produce a real Array.',
        bn: 'arguments-এর মতো নয়, রেস্ট প্যারামিটার একটি খাঁটি অ্যারে তৈরি করে।'
      },
      explanation: {
        en: 'Rest parameters (...args) collect all arguments into a genuine Array instance inheriting from Array.prototype, giving immediate access to map, reduce, and filter.',
        bn: 'রেস্ট প্যারামিটার (...args) সব আর্গুমেন্টকে একটি আসল অ্যারেতে রূপান্তর করে, ফলে সব অ্যারে মেথড সরাসরি ব্যবহার করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'js-loops-quiz',
    title: { en: 'JavaScript Loops & Functions Quiz', bn: 'জাভাস্ক্রিপ্ট লুপ ও ফাংশন কুইজ' },
    questions: [
      {
        id: 'lq1',
        kind: 'mcq',
        topic: 'js: Arrow function this',
        question: {
          en: 'How does the this keyword behave inside an arrow function?',
          bn: 'অ্যারো ফাংশনের ভেতরে this কিওয়ার্ডটি কীভাবে কাজ করে?'
        },
        options: [
          { en: 'It has no this of its own; it lexically inherits this from its outer enclosing scope', bn: 'এর নিজস্ব কোনো this থাকে না; এটি বাইরের প্যারেন্ট স্কোপ থেকে লেক্সিক্যালি this গ্রহণ করে' },
          { en: 'It always points to the global window object', bn: 'এটি সর্বদা গ্লোবাল window অবজেক্টকে নির্দেশ করে' },
          { en: 'It is always undefined', bn: 'এটি সর্বদা undefined থাকে' },
          { en: 'It rebinds this every time it is called', bn: 'প্রতিবার কলের সময় নতুন this তৈরি হয়' }
        ],
        answer: 0,
        hint: {
          en: 'It preserves the parent lexical scope.',
          bn: 'এটি প্যারেন্টের লেক্সিক্যাল স্কোপ বজায় রাখে।'
        },
        explanation: {
          en: 'Arrow functions do not bind their own this. Instead, they capture the this value of the enclosing execution context at the time they are created.',
          bn: 'অ্যারো ফাংশনের নিজস্ব this বাইন্ডিং থাকে না। এটি তৈরির সময় বাইরের যে কনটেক্সটে থাকে সেই প্যারেন্টের this-কে ধারণ করে।'
        }
      },
      {
        id: 'lq2',
        kind: 'mcq',
        topic: 'js: Pure function properties',
        question: {
          en: 'What makes a function "pure" in functional programming?',
          bn: 'ফাংশনাল প্রোগ্রামিংয়ে কোন বৈশিষ্ট্যের কারণে একটি ফাংশনকে "পিওর" বা বিশুদ্ধ বলা হয়?'
        },
        options: [
          { en: 'Identical inputs always return identical outputs, and it causes zero external side effects', bn: 'একই ইনপুট দিলে সর্বদা একই আউটপুট আসে এবং কোনো বাইরের পার্শ্বপ্রতিক্রিয়া (side effect) ঘটায় না' },
          { en: 'It must contain at least two for loops', bn: 'এতে অন্তত দুটি for লুপ থাকতে হয়' },
          { en: 'It must be written using arrow function syntax', bn: 'এটি অবশ্যই অ্যারো সিনট্যাক্সে লিখতে হয়' },
          { en: 'It returns a Promise', bn: 'এটি একটি Promise রিটার্ন করে' }
        ],
        answer: 0,
        hint: {
          en: 'Determinism and no side effects.',
          bn: 'নির্দিষ্ট আউটপুট এবং কোনো সাইড ইফেক্ট না থাকা।'
        },
        explanation: {
          en: 'A pure function is deterministic (same input produces same output) and produces no side effects (does not mutate global state, modify parameters, or trigger I/O).',
          bn: 'একটি পিওর ফাংশন নির্দিষ্ট নিয়মে চলে (একই ইনপুটে একই ফলাফল) এবং কোনো বাইরের ডেটা বা স্টেট পরিবর্তন করে না।'
        }
      },
      {
        id: 'lq3',
        kind: 'mcq',
        topic: 'js: for...of vs for...in',
        question: {
          en: 'What is the principal difference between for...of and for...in loops in JavaScript?',
          bn: 'জাভাস্ক্রিপ্টে for...of এবং for...in লুপের মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          { en: 'for...of iterates over values of an iterable, while for...in iterates over enumerable property keys', bn: 'for...of কোনো ইটারেবলের সরাসরি মানগুলোর ওপর চলে, আর for...in প্রোপার্টির কী (keys)-গুলোর ওপর চলে' },
          { en: 'for...of only works on numbers', bn: 'for...of শুধু সংখ্যা নিয়ে কাজ করে' },
          { en: 'for...in is 100 times faster than for...of', bn: 'for...in ১০০ গুণ বেশি দ্রুত চলে' },
          { en: 'There is no difference between them', bn: 'তাদের মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'One reads values directly; the other reads property names.',
          bn: 'একটি সরাসরি মান পড়ে, অন্যটি প্রোপার্টির নাম পড়ে।'
        },
        explanation: {
          en: 'for...of extracts the values directly from arrays, strings, and sets. for...in iterates over enumerable string property keys of an object.',
          bn: 'for...of সরাসরি মান বের করে আনে, আর for...in অবজেক্টের কি বা ইনডেক্স ধরে ঘুরে।'
        }
      },
      {
        id: 'lq4',
        kind: 'mcq',
        topic: 'js: Function declaration hoisting',
        question: {
          en: 'What occurs when code calls a function expression before the line where it is assigned to a variable?',
          bn: 'ভেরিয়েবলে ফাংশন এক্সপ্রেশন অ্যাসাইন করার আগের লাইনে সেটিকে কল করলে কী ঘটে?'
        },
        options: [
          { en: 'A TypeError or ReferenceError occurs because only function declarations are hoisted with their bodies', bn: 'TypeError বা ReferenceError ঘটে কারণ কেবল ফাংশন ডিক্লারেশনই পুরো বডিসহ হোইস্ট হয়' },
          { en: 'The function executes normally', bn: 'ফাংশনটি স্বাভাবিকভাবেই চলে' },
          { en: 'The browser restarts the script', bn: 'ব্রাউজার স্ক্রিপ্ট রিস্টার্ট করে' },
          { en: 'It returns null', bn: 'এটি null রিটার্ন করে' }
        ],
        answer: 0,
        hint: {
          en: 'Function expressions obey variable hoisting rules.',
          bn: 'ফাংশন এক্সপ্রেশন সাধারণ ভেরিয়েবলের হোইস্টিং নিয়ম মেনে চলে।'
        },
        explanation: {
          en: 'Function expressions assigned to let/const reside in the TDZ; assigned to var, they are hoisted as undefined, throwing TypeError when invoked prematurely.',
          bn: 'ফাংশন এক্সপ্রেশনকে ডিক্লারেশনের আগে কল করলে এরর ছুড়ে দেয়, কারণ এক্সপ্রেশন পূর্ণাঙ্গ ফাংশন বডি নিয়ে উপরে ওঠে না।'
        }
      }
    ]
  }
};
