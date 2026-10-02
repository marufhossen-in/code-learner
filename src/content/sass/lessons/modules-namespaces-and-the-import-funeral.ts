import type { Lesson } from '../../../lib/types';

export const ModulesNamespacesAndTheImportFuneralLesson: Lesson = {
  slug: 'modules-namespaces-and-the-import-funeral',
  tech: 'sass',
  title: {
    en: 'Sass Modules, Namespaces & Architecture — Replacing @import with @use, Private Members, and @forward Barrels',
    bn: 'Sass মডিউল, নেমস্পেস ও আর্কিটেকচার: @import-এর বদলে @use, প্রাইভেট মেম্বার এবং @forward ব্যারেল'
  },
  summary: {
    en: 'The modern Dart Sass module system replaces legacy @import with @use and @forward. Legacy @import exposed all variables and mixins to a single shared global scope, creating naming collisions and duplicate CSS rules. The @use rule encapsulates styles into file-based namespaces, ensuring that each stylesheet is compiled exactly once. Authors can keep members private using leading underscores and build unified entry barrels using @forward.',
    bn: 'আধুনিক Dart Sass মডিউল ব্যবস্থা পুরোনো @import বাদ দিয়ে @use ও @forward এনেছে। পুরোনো @import সব ভেরিয়েবল ও মিক্সিনকে একটি সাধারণ গ্লোবাল স্কোপে উন্মুক্ত রাখত, যার ফলে নাম সংঘর্ষ ও ডুপ্লিকেট CSS তৈরি হতো। @use প্রতিটি স্টাইলশিটকে নিজস্ব ফাইল-ভিত্তিক নেমস্পেসে আবদ্ধ করে এবং নিশ্চিত করে যে প্রতিটি ফাইল ঠিক একবারই কম্পাইল হবে। আন্ডারস্কোর প্রিফিক্স দিয়ে মেম্বার গোপন রাখা যায় এবং @forward দিয়ে পরিচ্ছন্ন ব্যারেল তৈরি করা যায়।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'The module revolution: @use versus legacy @import',
        bn: 'মডিউল বিপ্লব: @use বনাম পুরোনো @import'
      }
    },
    {
      type: 'para',
      text: {
        en: 'For many years, Sass relied on the @import directive to combine multiple stylesheets. When you used @import, every variable, mixin, and function declared in any file became globally available everywhere. The modern module system replaces @import with @use. Files loaded via @use become discrete modules accessed through explicit namespaces, such as colors.$primary, preventing naming collisions entirely.',
        bn: 'বহু বছর ধরে Sass একাধিক স্টাইলশিট একত্রিত করতে @import নির্দেশের ওপর নির্ভর করত। @import ব্যবহার করলে যেকোনো ফাইলে ঘোষিত ভেরিয়েবল, মিক্সিন ও ফাংশন পুরো অ্যাপ্লিকেশনে গ্লোবালি ছড়িয়ে পড়ত। আধুনিক মডিউল সিস্টেম @import-কে @use দিয়ে প্রতিস্থাপন করেছে। @use দিয়ে লোড করা ফাইলগুলো colors.$primary-এর মতো স্পষ্ট নেমস্পেসের মাধ্যমে পৃথক মডিউল হিসেবে কাজ করে এবং সব ধরনের নাম সংঘর্ষ রোধ করে।',
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@use directive',
          def: {
            en: 'loads a Sass file as an isolated module, making its public members accessible via an explicit namespace',
            bn: 'একটি Sass ফাইলকে পৃথক মডিউল হিসেবে লোড করে এবং নির্দিষ্ট নেমস্পেসের মাধ্যমে তার মেম্বার ব্যবহারের সুযোগ দেয়'
          }
        },
        {
          term: 'module namespace',
          def: {
            en: 'the prefix used to access module members (e.g., colors.$brand), defaulting to the file name stem or set via "as"',
            bn: 'মডিউলের মেম্বার ব্যবহারের প্রিফিক্স (যেমন colors.$brand), যা ফাইলের নাম বা "as" দিয়ে নির্ধারিত হয়'
          }
        },
        {
          term: 'private members (_ or -)',
          def: {
            en: 'variables, mixins, or functions beginning with an underscore or hyphen, hidden from external modules',
            bn: 'আন্ডারস্কোর বা হাইফেন দিয়ে শুরু হওয়া ভেরিয়েবল বা মিক্সিন, যা অন্য ফাইলের ব্যবহারকারীদের থেকে গোপন থাকে'
          }
        },
        {
          term: '@forward directive',
          def: {
            en: 're-exports another module’s public members through the current file, useful for creating central barrel entry points',
            bn: 'বর্তমান ফাইলের মাধ্যমে অন্য মডিউলের পাবলিক মেম্বারগুলো পুনরায় প্রকাশ করে কেন্দ্রীয় ব্যারেল তৈরির নির্দেশ'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'Why @import failed and why modular namespaces are essential',
        bn: 'কেন @import ব্যর্থ হয়েছিল এবং মডিউলার নেমস্পেস কেন অপরিহার্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Legacy @import caused three major architectural problems. First, it created a global namespace where third-party libraries and local files could silently overwrite each other’s variables. Second, if five files imported the same helper stylesheet, that helper was compiled five separate times, severely bloating the final CSS bundle. Third, dependencies were fragile because files relied on variables declared in other files without importing them.',
        bn: 'পুরোনো @import তিনটি মারাত্মক স্থাপত্য সমস্যা সৃষ্টি করত। প্রথমত, এটি একটি একক গ্লোবাল নেমস্পেস তৈরি করত যেখানে লাইব্রেরি ও নিজস্ব কোড পরস্পরের ভেরিয়েবল অনিচ্ছাকৃতভাবে বদলে দিত। দ্বিতীয়ত, পাঁচটি ফাইল একই হেল্পার ফাইল ইমপোর্ট করলে সেই কোড ৫ বার তৈরি হয়ে আউটপুট CSS-এর আকার বিশালাকার করত। তৃতীয়ত, ফাইলগুলো নিজে ইমপোর্ট না করেই অন্যের ভেরিয়েবলের ওপর নির্ভর করায় কোড অত্যন্ত ভঙ্গুর হয়ে পড়ত।',
      }
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'How to use @use, alias namespaces, configure modules, and use @forward',
        bn: 'কীভাবে @use, অ্যালিয়াস নেমস্পেস, মডিউল কনফিগারেশন এবং @forward ব্যবহার করবেন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'To load a module, write @use "src/colors" at the top of your stylesheet. By default, access variables with colors.$name, or rename the namespace with as (e.g., @use "src/colors" as c). To configure default variables inside an imported module, pass a configuration map using the with keyword. To bundle multiple modules into a single index file, re-export them using @forward.',
        bn: 'মডিউল লোড করতে ফাইলের শুরুতে @use "src/colors" লিখুন। ডিফল্টভাবে colors.$name দিয়ে ভেরিয়েবল ব্যবহার করুন, অথবা as দিয়ে নাম সংক্ষেপ করুন (যেমন @use "src/colors" as c)। মডিউলের ডিফল্ট ভেরিয়েবল পরিবর্তন করতে with কিওয়ার্ড দিয়ে মান পাঠান। একাধিক মডিউলকে একটি একক ইনডেক্স ফাইলে একত্রিত করতে @forward দিয়ে রি-এক্সপোর্ট করুন।',
      }
    },
    {
      type: 'code',
      lang: 'scss',
      filename: 'modules-architecture.scss',
      caption: {
        en: 'Module system showing @use with custom alias, with configuration, private variables, and @forward.',
        bn: 'কাস্টম অ্যালিয়াসসহ @use, with কনফিগারেশন, প্রাইভেট ভেরিয়েবল এবং @forward-এর বাস্তব আর্কিটেকচার।'
      },
      code: `// --- 1. _palette.scss (Library Module) ---
$primary: #2563eb !default;
$secondary: #64748b !default;
$_internal-salt: #111827; // private: cannot be accessed externally

@function get-dark-primary() {
  @return $_internal-salt;
}

// --- 2. index.scss (Barrel File) ---
@forward "palette" show $primary, $secondary;

// --- 3. main.scss (Consumer) ---
@use "palette" as pal with (
  $primary: #10b981 // configures !default variable cleanly
);

.header {
  background-color: pal.$primary; // emits #10b981
  border-color: pal.$secondary;   // emits #64748b
}

// Attempting to read pal.$_internal-salt causes a compile error!`
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'Internal compiler mechanics: single evaluation and encapsulation',
        bn: 'কম্পাইলারের অভ্যন্তরীণ কার্যপ্রণালী: একক মূল্যায়ন ও এনক্যাপসুলেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The Dart Sass module loader builds a directed dependency graph. When a file is loaded via @use, the compiler parses and evaluates it exactly once, caching its exported symbol table in memory. If ten other files subsequently @use that same stylesheet, Sass links to the cached module without re-executing it. This prevents duplicate CSS rules and guarantees strict encapsulation of private variables.',
        bn: 'Dart Sass মডিউল লোডার একটি ডিরেক্টেড ডিপেন্ডেন্সি গ্রাফ তৈরি করে। @use দিয়ে কোনো ফাইল লোড করা হলে কম্পাইলার ঠিক একবারই তা প্রসেস করে মেমরিতে ক্যাশ করে রাখে। পরবর্তীতে অন্য ১০টি ফাইলও যদি সেই একই ফাইল @use করে, Sass পুনরায় এক্সিকিউট না করে ক্যাশ থেকেই লিংক করে দেয়। এটি ডুপ্লিকেট CSS পুরোপুরি রোধ করে এবং প্রাইভেট ভেরিয়েবলের গোপনীয়তা নিশ্চিত করে।',
      }
    },
    {
      type: 'heading',
      id: 'tip',
      text: {
        en: 'Best practices for the Sass module system',
        bn: 'Sass মডিউল সিস্টেমের সেরা চর্চা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Never use legacy @import in modern code: Dart Sass has officially deprecated it and will remove it in a future major version.',
          bn: 'আধুনিক কোডে পুরোনো @import ব্যবহার করবেন না: Dart Sass এটি বাতিল করেছে এবং ভবিষ্যতে পুরোপুরি সরিয়ে দেবে।'
        },
        {
          en: 'Avoid @use ... as * except during temporary migration: omitting namespaces re-introduces global namespace pollution.',
          bn: 'সাময়িক মাইগ্রেশন ছাড়া @use ... as * এড়িয়ে চলুন: নেমস্পেস বাদ দিলে পুরোনো গ্লোবাল দূষণ আবার ফিরে আসে।'
        },
        {
          en: 'Prefix internal helper variables and functions with an underscore (like $_dark-shade) to keep module APIs clean and encapsulated.',
          bn: 'অভ্যন্তরীণ হেল্পার ভেরিয়েবলে আন্ডারস্কোর প্রিফিক্স (যেমন $_dark-shade) দিন যাতে পাবলিক এপিআই পরিচ্ছন্ন থাকে।'
        },
        {
          en: 'Create central index.scss barrel files using @forward to provide convenient, unified entry points for component libraries.',
          bn: 'কম্পোনেন্ট লাইব্রেরির জন্য @forward দিয়ে সুসংগঠিত index.scss ব্যারেল ফাইল তৈরি করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'Troubleshooting: resolving "Undefined variable" after migration',
        bn: 'সমস্যা সমাধান: মাইগ্রেশনের পর "Undefined variable" ত্রুটি সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When migrating from @import to @use, the most common error is: Undefined variable. Under @import, files relied on variables declared in other stylesheets without explicitly importing them. Under @use, every file must explicitly declare its dependencies at the top with @use and prefix variable references with the namespace (e.g., theme.$color instead of $color). Also ensure that @use lines appear before any normal CSS rules.',
        bn: '@import থেকে @use-এ মাইগ্রেশনের সময় সবচেয়ে পরিচিত এরর হলো: Undefined variable। পুরোনো নিয়মে ফাইলগুলো সরাসরি ইমপোর্ট না করেই অন্যের ভেরিয়েবল পেত। কিন্তু @use-এ প্রতিটি ফাইলের শীর্ষে নির্ভরতা ঘোষণা করতে হয় এবং নামের আগে নেমস্পেস (যেমন $color-এর বদলে theme.$color) লিখতে হয়। এছাড়া খেয়াল রাখবেন সব @use লাইন যেন সাধারণ CSS নিয়মের আগে থাকে।',
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'Real-world architectures: barrel files and design system packaging',
        bn: 'বাস্তব স্থাপত্য: ব্যারেল ফাইল এবং ডিজাইন সিস্টেম প্যাকেজিং'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Bootstrap 5 completely transitioned to the modern module system, allowing developers to import individual components using @use "bootstrap/scss/buttons".',
          bn: 'বুটস্ট্র্যাপ ৫ পুরোপুরি আধুনিক মডিউল সিস্টেমে রূপান্তরিত হয়েছে, যার ফলে @use "bootstrap/scss/buttons" দিয়ে নির্দিষ্ট অংশ লোড করা যায়।'
        },
        {
          en: 'Design systems use @forward with prefix modifiers (e.g., @forward "theme" as theme-*) to namespace library tokens automatically.',
          bn: 'ডিজাইন সিস্টেম @forward-এর সাথে প্রিফিক্স (যেমন @forward "theme" as theme-*) ব্যবহার করে লাইব্রেরির টোকেন সাজিয়ে দেয়।'
        },
        {
          en: 'Automated migration tools like the sass-migrator CLI rewrite hundreds of legacy @import statements to @use across repositories in seconds.',
          bn: 'sass-migrator CLI-এর মতো স্বয়ংক্রিয় টুল কয়েক সেকেন্ডে প্রজেক্টের শত শত পুরোনো @import-কে @use-এ রূপান্তর করে দিতে পারে।'
        },
        {
          en: 'Enterprise UI kits configure their themes through @use ... with (...) blocks, validating token inputs before running build pipelines.',
          bn: 'বড় প্রতিষ্ঠানের ইউআই কিট @use ... with (...) ব্লকের মাধ্যমে থিম কনফিগার করে বিল্ডের আগেই ইনপুট যাচাই করে নেয়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'Next steps: maps, lists, and design token architectures',
        bn: 'পরবর্তী ধাপ: ম্যাপ, লিস্ট এবং ডিজাইন টোকেন আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Now that you can organize stylesheets into encapsulated modules with @use and @forward, you are ready to manage complex data structures. In Lesson 7, we explore Sass maps and lists, deep map manipulation with map.get and map.merge, and building scalable design token systems.',
        bn: 'এখন আপনি @use ও @forward দিয়ে স্টাইলশিটকে সুসংগঠিত মডিউলে সাজাতে পারেন। পরবর্তী ৭ম পাঠে আমরা Sass ম্যাপ ও লিস্ট, map.get ও map.merge দিয়ে জটিল ডেটা স্ট্রাকচার পরিচালনা এবং বড় আকারের ডিজাইন টোকেন সিস্টেম তৈরি করা শিখব।',
      }
    }
  ],
  exercises: [
    {
      id: 'mod-ex-1',
      kind: 'mcq',
      topic: 'use vs import namespace',
      question: {
        en: 'How does @use prevent variable naming collisions compared to legacy @import?',
        bn: 'পুরোনো @import-এর তুলনায় @use কীভাবে ভেরিয়েবলের নাম সংঘর্ষ রোধ করে?'
      },
      options: [
        {
          en: 'It places imported members behind an explicit namespace (e.g., colors.$primary) rather than dumping them into global scope.',
          bn: 'এটি মেম্বারগুলোকে গ্লোবাল স্কোপে না ফেলে স্পষ্ট নেমস্পেসের অধীনে রাখে (যেমন colors.$primary)।'
        },
        {
          en: 'It encrypts variable names using cryptographic hashes.',
          bn: 'এটি ক্রিপ্টোগ্রাফিক হ্যাশ দিয়ে ভেরিয়েবলের নাম এনক্রিপ্ট করে দেয়।'
        },
        {
          en: 'It deletes any variable that shares a name with an existing property.',
          bn: 'এটি বিদ্যমান প্রপার্টির সাথে নাম মিললে ভেরিয়েবলটি মুছে ফেলে।'
        },
        {
          en: 'It only permits alphanumeric variable names under five characters.',
          bn: 'এটি কেবল পাঁচ অক্ষরের কম নামের ভেরিয়েবল ব্যবহারের অনুমতি দেয়।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Members of a used module are accessed with a prefix based on the filename or alias.',
        bn: 'মডিউলের মেম্বারগুলো ফাইলের নাম বা অ্যালিয়াসের ওপর ভিত্তি করে প্রিফিক্স দিয়ে ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'By requiring an explicit namespace, @use isolates each file’s variables and mixins, preventing different stylesheets from accidentally overwriting identical variable names.',
        bn: 'স্পষ্ট নেমস্পেস বাধ্যতামূলক করার মাধ্যমে @use প্রতিটি ফাইলের উপাদানকে আলাদা রাখে, ফলে ভিন্ন স্টাইলশিটের একই নামের ভেরিয়েবলে কোনো সংঘাত হয় না।'
      }
    },
    {
      id: 'mod-ex-2',
      kind: 'mcq',
      topic: 'private member encapsulation',
      question: {
        en: 'How do you designate a variable or function as private to its defining file in modern Sass?',
        bn: 'আধুনিক Sass-এ কোনো ভেরিয়েবল বা ফাংশনকে নিজস্ব ফাইলের জন্য প্রাইভেট কীভাবে করবেন?'
      },
      options: [
        {
          en: 'Prefix its identifier with an underscore (_) or hyphen (-), such as $_internal-color.',
          bn: 'আইডেন্টিফায়ারের শুরুতে একটি আন্ডারস্কোর (_) বা হাইফেন (-) দিন, যেমন $_internal-color।'
        },
        {
          en: 'Add the private keyword after the value declaration.',
          bn: 'মান নির্ধারণের পরে private কিওয়ার্ড যুক্ত করুন।'
        },
        {
          en: 'Wrap the declaration in an @at-root block.',
          bn: 'ডিক্লারেশনটিকে @at-root ব্লকের ভেতর রাখুন।'
        },
        {
          en: 'Save the file with a .secret file extension.',
          bn: 'ফাইলটিকে .secret এক্সটেনশন দিয়ে সেভ করুন।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Names starting with _ or - are encapsulated and cannot be called through a namespace.',
        bn: '_ বা - দিয়ে শুরু হওয়া নামগুলো এনক্যাপসুলেটেড থাকে এবং নেমস্পেস দিয়ে ডাকা যায় না।'
      },
      explanation: {
        en: 'In Dart Sass, any identifier whose name starts with an underscore or hyphen is private to its source file. Attempting to access it outside throws an undefined identifier error.',
        bn: 'Dart Sass-এ আন্ডারস্কোর বা হাইফেন দিয়ে শুরু হওয়া যেকোনো মেম্বার নিজস্ব ফাইলে সীমাবদ্ধ থাকে। বাইরের ফাইল থেকে তা কল করলে আনডিফাইন্ড এরর তৈরি হয়।'
      }
    },
    {
      id: 'mod-ex-3',
      kind: 'mcq',
      topic: 'forward directive purpose',
      question: {
        en: 'What is the primary architectural purpose of the @forward directive in Sass?',
        bn: 'Sass-এ @forward নির্দেশের প্রধান স্থাপত্যগত উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To re-export public members from sub-modules through a single central barrel file (like index.scss).',
          bn: 'একটি কেন্দ্রীয় ব্যারেল ফাইলের (যেমন index.scss) মাধ্যমে সাব-মডিউলগুলোর পাবলিক মেম্বারগুলো পুনরায় প্রকাশ করা।'
        },
        {
          en: 'To redirect HTTP web traffic to a secure HTTPS connection.',
          bn: 'ওয়েব ট্রাফিককে সরাসরি নিরাপদ HTTPS সংযোগে রিডাইরেক্ট করা।'
        },
        {
          en: 'To convert desktop stylesheets into native mobile apps.',
          bn: 'ডেস্কটপ স্টাইলশিটকে নেটিভ মোবাইল অ্যাপ্লিকেশনে রূপান্তর করা।'
        },
        {
          en: 'To execute JavaScript promises sequentially inside CSS.',
          bn: 'CSS-এর ভেতরে ক্রমানুসারে জাভাস্ক্রিপ্ট প্রমিজ পরিচালনা করা।'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of @forward as curating a public interface for a library without exposing internal folder structures.',
        bn: '@forward-কে অভ্যন্তরীণ ফোল্ডার না দেখিয়েই লাইব্রেরির পাবলিক এপিআই সাজানোর মাধ্যম হিসেবে ভাবুন।'
      },
      explanation: {
        en: '@forward re-exports members so downstream consumers can load an entire package with a single @use statement, enabling modular library architecture.',
        bn: '@forward উপাদানগুলো রি-এক্সপোর্ট করে যাতে ব্যবহারকারী একটি একক @use দিয়েই সম্পূর্ণ প্যাকেজ লোড করতে পারে।'
      }
    },
    {
      id: 'mod-ex-4',
      kind: 'predict',
      topic: 'predicting namespace access syntax',
      question: {
        en: 'If you write @use "theme" as t; where theme defines $primary: #2563eb;, how do you reference $primary in your file?',
        bn: 'যদি আপনি @use "theme" as t; লেখেন যেখানে theme-এ $primary: #2563eb; আছে, তবে আপনার ফাইলে $primary কীভাবে কল করবেন?'
      },
      answer: 't.$primary',
      accept: [
        't.$primary',
        't.$primary;',
        '$primary via t.$primary'
      ],
      hint: {
        en: 'Combine the alias t with a dot and the variable name.',
        bn: 'অ্যালিয়াস t-এর পর ডট দিয়ে ভেরিয়েবলের নাম লিখুন।'
      },
      explanation: {
        en: 'When a module is imported with as t, all its public members are reached through the t namespace prefix: t.$primary.',
        bn: 'মডিউল as t দিয়ে আনা হলে তার সব পাবলিক উপাদান t নেমস্পেস প্রিফিক্সের মাধ্যমে অ্যাক্সেস করা হয়: t.$primary।'
      }
    }
  ],
  quiz: {
    id: 'modules-quiz',
    title: {
      en: 'Modules and Namespaces Quiz',
      bn: 'মডিউল এবং নেমস্পেস কুইজ'
    },
    questions: [
      {
        id: 'modq1',
        kind: 'mcq',
        topic: 'with configuration block',
        question: {
          en: 'How do you configure default variables inside an imported module using @use?',
          bn: '@use দিয়ে ইমপোর্ট করা মডিউলের ডিফল্ট ভেরিয়েবল কীভাবে পরিবর্তন করবেন?'
        },
        options: [
          {
            en: 'By appending a with (...) block to the @use statement, passing overridden variable values.',
            bn: '@use স্টেটমেন্টের শেষে with (...) ব্লক যোগ করে পরিবর্তিত ভেরিয়েবলের মান পাঠিয়ে।'
          },
          {
            en: 'By declaring global variables before the @use line.',
            bn: '@use লাইনের পূর্বে সাধারণ গ্লোবাল ভেরিয়েবল ঘোষণা করে।'
          },
          {
            en: 'By modifying the source code inside node_modules directly.',
            bn: 'সরাসরি node_modules-এর ভেতরের সোর্স কোড পরিবর্তন করে।'
          },
          {
            en: 'By calling a JavaScript configuration callback function.',
            bn: 'একটি জাভাস্ক্রিপ্ট কনফিগারেশন কলব্যাক ফাংশন ডেকে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Syntax: @use "theme" with ($primary: red);',
          bn: 'সিনট্যাক্স: @use "theme" with ($primary: red);'
        },
        explanation: {
          en: 'The with (...) clause configures module variables defined with !default explicitly at the import site, replacing fragile pre-import variable definitions.',
          bn: 'with (...) ক্লজটি !defaultযুক্ত ভেরিয়েবলগুলোকে সরাসরি ইমপোর্টের সময় পরিবর্তন করে, যা পুরোনো ভঙ্গুর অভ্যাসের চমৎকার বিকল্প।'
        }
      },
      {
        id: 'modq2',
        kind: 'mcq',
        topic: 'single evaluation deduplication',
        question: {
          en: 'What occurs if five separate stylesheets in a project all execute @use "buttons";?',
          bn: 'প্রজেক্টের পাঁচটি আলাদা ফাইল যদি @use "buttons"; চালায়, তবে কী ঘটবে?'
        },
        options: [
          {
            en: 'The buttons stylesheet is compiled exactly once, eliminating duplicate CSS in the final build.',
            bn: 'buttons স্টাইলশিটটি ঠিক একবারই কম্পাইল হবে, ফলে আউটপুটে কোনো ডুপ্লিকেট CSS তৈরি হবে না।'
          },
          {
            en: 'The buttons styles are duplicated five times in the output CSS.',
            bn: 'আউটপুট CSS-এ বাটনের স্টাইল পাঁচবার ডুপ্লিকেট হয়ে যাবে।'
          },
          {
            en: 'Dart Sass halts with a multiple import conflict error.',
            bn: 'Dart Sass একাধিক ইমপোর্ট সংঘাতের এরর দেখিয়ে বন্ধ হয়ে যাবে।'
          },
          {
            en: 'The compiler deletes four of the files automatically.',
            bn: 'কম্পাইলার স্বয়ংক্রিয়ভাবে চারটি ফাইল মুছে ফেলবে।'
          }
        ],
        answer: 0,
        hint: {
          en: '@use guarantees single evaluation across the entire dependency graph.',
          bn: '@use পুরো ডিপেন্ডেন্সি গ্রাফে একবারই মূল্যায়নের নিশ্চয়তা দেয়।'
        },
        explanation: {
          en: 'Unlike legacy @import which re-emitted CSS each time it was called, @use evaluates modules once and caches them, preventing CSS bloat.',
          bn: 'পুরোনো @import যেখানে প্রতিবার কোড ডুপ্লিকেট করত, @use সেখানে মডিউল একবার প্রসেস করে ক্যাশে রাখে, যা অতিরিক্ত কোড জমতে দেয় না।'
        }
      },
      {
        id: 'modq3',
        kind: 'mcq',
        topic: 'built in module namespacing',
        question: {
          en: 'How are built-in Sass functions like div and mix accessed under the modern module system?',
          bn: 'আধুনিক মডিউল সিস্টেমে div এবং mix-এর মতো বিল্ট-ইন ফাংশন কীভাবে ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Via namespaced built-ins loaded with @use "sass:math" or @use "sass:color", such as math.div() and color.mix().',
            bn: '@use "sass:math" বা @use "sass:color" দিয়ে লোড করে math.div() বা color.mix() আকারে নেমস্পেস দিয়ে।'
          },
          {
            en: 'As global functions without requiring any imports.',
            bn: 'কোনো ইমপোর্ট ছাড়াই সাধারণ গ্লোবাল ফাংশন হিসেবে।'
          },
          {
            en: 'By installing separate npm packages for each mathematical operation.',
            bn: 'প্রতিটি গাণিতিক অপারেশনের জন্য আলাদা npm প্যাকেজ ইনস্টল করে।'
          },
          {
            en: 'Built-in functions were removed from the language in 2020.',
            bn: '২০২০ সালে ভাষা থেকে সব বিল্ট-ইন ফাংশন সরিয়ে দেওয়া হয়েছে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern Sass groups built-in functions under the "sass:" namespace prefix.',
          bn: 'আধুনিক Sass তার নিজস্ব ফাংশনগুলোকে "sass:" নেমস্পেস প্রিফিক্সে একত্রিত করেছে।'
        },
        explanation: {
          en: 'Dart Sass moved all built-ins into modular namespaces (sass:math, sass:color, sass:string, sass:list, sass:map) to avoid global namespace collisions with user functions.',
          bn: 'Dart Sass তার সব বিল্ট-ইন ফাংশন মডিউলার নেমস্পেসে সরিয়ে নিয়েছে যাতে ব্যবহারকারীর কাস্টম ফাংশনের সাথে নাম সংঘাত না ঘটে।'
        }
      },
      {
        id: 'modq4',
        kind: 'mcq',
        topic: 'as star migration wildcard',
        question: {
          en: 'What does writing @use "theme" as *; do in Sass?',
          bn: 'Sass-এ @use "theme" as *; লিখলে কী ঘটে?'
        },
        options: [
          {
            en: 'It loads all public members from theme directly into the local scope without requiring a namespace prefix.',
            bn: 'এটি কোনো নেমস্পেস প্রিফিক্স ছাড়াই theme-এর সব পাবলিক উপাদানকে সরাসরি লোকাল স্কোপে লোড করে।'
          },
          {
            en: 'It marks every member of the stylesheet as a private variable.',
            bn: 'এটি স্টাইলশিটের প্রতিটি মেম্বারকে প্রাইভেট ভেরিয়েবল হিসেবে চিহ্নিত করে।'
          },
          {
            en: 'It multiplies all numeric values in theme by ten.',
            bn: 'এটি theme-এর সব সংখ্যাসূচক মানকে ১০ দিয়ে গুণ করে।'
          },
          {
            en: 'It converts the stylesheet into an asterisk-separated list.',
            bn: 'এটি স্টাইলশিটকে তারকাচিহ্নযুক্ত লিস্টে রূপান্তর করে।'
          }
        ],
        answer: 0,
        hint: {
          en: 'The asterisk (*) acts as a wildcard, importing everything un-namespaced into current scope.',
          bn: 'তারকাচিহ্ন (*) ওয়াইল্ডকার্ড হিসেবে কাজ করে সব উপাদান সরাসরি লোকাল স্কোপে নিয়ে আসে।'
        },
        explanation: {
          en: '@use ... as * un-namespaces module members. While occasionally used as a quick migration bridge, style guides discourage it because it pollutes local scope.',
          bn: '@use ... as * উপাদানগুলোকে নেমস্পেস মুক্ত করে দেয়। মাইগ্রেশনের কাজে এটি কিছুটা সাহায্য করলেও লোকাল স্কোপ দূষিত করার কারণে এটি পরিহারের পরামর্শ দেওয়া হয়।'
        }
      },
      {
        id: 'modq5',
        kind: 'predict',
        topic: 'modern replacement directive for import',
        question: {
          en: 'Which modern keyword has officially replaced the deprecated @import directive in Sass: @______?',
          bn: 'Sass-এ বাতিল হওয়া @import নির্দেশের অফিশিয়াল আধুনিক বিকল্প কোনটি: @______?'
        },
        answer: 'use',
        accept: [
          'use',
          '@use'
        ],
        hint: {
          en: 'Enter the three-letter directive name that loads modules with namespaces.',
          bn: 'নেমস্পেসসহ মডিউল লোড করার তিন অক্ষরের নির্দেশটির নাম লিখুন।'
        },
        explanation: {
          en: 'The @use directive is the official, actively supported module loading mechanism in modern Sass, completely superseding @import.',
          bn: '@use নির্দেশটি আধুনিক Sass-এ মডিউল লোড করার মূল অফিশিয়াল ব্যবস্থা, যা @import-কে পুরোপুরি প্রতিস্থাপন করেছে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-map-room',
    title: {
      en: 'The Map Room: Maps, Lists, and Design Token Systems',
      bn: 'ম্যাপ, লিস্ট এবং ডিজাইন টোকেন সিস্টেম'
    }
  }
};
