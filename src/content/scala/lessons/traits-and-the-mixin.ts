import type { Lesson } from '../../../lib/types';

export const TraitsAndTheMixinLesson: Lesson = {
  slug: 'traits-and-the-mixin',
  tech: 'scala',
  title: {
    en: 'Traits & Mixin Composition: Multiple Inheritance & Linearization',
    bn: 'ট্রেইট ও মিক্সিন কম্পোজিশন: মাল্টিপল ইনহেরিটেন্স ও লিনিয়ারাইজেশন'
  },
  summary: {
    en: 'Master Scala trait architecture: interfaces with concrete methods, mixin composition, linearization resolving diamond inheritance, self-types for dependency injection, and Scala 3 given/using contextual abstractions.',
    bn: 'স্কালা ট্রেইট আর্কিটেকচারে দক্ষতা: কংক্রিট মেথড সহ ইন্টারফেস, মিক্সিন কম্পোজিশন, ডায়মন্ড ইনহেরিটেন্স নিরসনে লিনিয়ারাইজেশন, ডিপেন্ডেন্সি ইনজেকশনের জন্য সেলফ-টাইপ এবং স্কালা ৩ given/using কনটেক্সটুয়াল অ্যাবস্ট্রাকশন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'traits-intro',
      text: {
        en: '1. Traits: Interfaces with Rich Implementations',
        bn: '১. ট্রেইট: সমৃদ্ধ মেথড বাস্তবায়ন সহ ইন্টারফেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you design modular architectures in Scala, traits are your fundamental building blocks for code reuse. A trait is similar to an interface in other languages, but it can declare both abstract method contracts and fully concrete method implementations, fields, and state.',
        bn: 'স্কালাতে মডুলার আর্কিটেকচার তৈরির জন্য ট্রেইট (trait) হলো কোড পুনর্ব্যবহারের প্রধান ভিত্তি। ট্রেইট অন্যান্য ভাষার ইন্টারফেসের মতো হলেও, এটি অ্যাবস্ট্রাক্ট মেথডের পাশাপাশি সম্পূর্ণ প্রস্তুত কংক্রিট মেথড, ফিল্ড এবং স্টেট ধারণ করতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A class can extend a single superclass, but it can mix in an arbitrary number of traits using the "extends" and "with" keywords: class PaymentService extends BaseService with Logging with Metrics with Caching.',
        bn: 'একটি ক্লাস কেবল একটি একক সুপারক্লাসকে ইনহেরিট করতে পারে, কিন্তু "extends" এবং "with" কীওয়ার্ড ব্যবহার করে যত খুশি ট্রেইট মিক্সিন হিসেবে যুক্ত করতে পারে: class PaymentService extends BaseService with Logging with Metrics with Caching।'
      }
    },
    {
      type: 'visual',
      id: 'linearization-diagram',
      title: {
        en: 'Trait Linearization & Stackable Modifications',
        bn: 'ট্রেইট লিনিয়ারাইজেশন এবং স্ট্যাকযোগ্য রূপান্তর'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Trait Linearization Resolving Diamond Multiple Inheritance</text>' +
          '<!-- Top: Class Declaration -->' +
          '<g transform="translate(150, 55)">' +
            '<rect width="500" height="40" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="250" y="25" fill="#facc15" font-size="12" font-weight="bold" font-family="monospace" text-anchor="middle">class OrderService extends Base with Logging with Metrics</text>' +
          '</g>' +
          '<!-- Linearization Chain -->' +
          '<g transform="translate(40, 120)">' +
            '<!-- Node 1: OrderService -->' +
            '<rect x="0" y="0" width="130" height="60" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="65" y="26" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">OrderService</text>' +
            '<text x="65" y="44" fill="#94a3b8" font-size="9" text-anchor="middle">Host Class</text>' +
            '<!-- Arrow 1 -->' +
            '<path d="M 130 30 L 165 30" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Node 2: Metrics (Rightmost trait) -->' +
            '<rect x="165" y="0" width="130" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="230" y="26" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Metrics</text>' +
            '<text x="230" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">1st in super chain</text>' +
            '<!-- Arrow 2 -->' +
            '<path d="M 295 30 L 330 30" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Node 3: Logging (Middle trait) -->' +
            '<rect x="330" y="0" width="130" height="60" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="395" y="26" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">Logging</text>' +
            '<text x="395" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">2nd in super chain</text>' +
            '<!-- Arrow 3 -->' +
            '<path d="M 460 30 L 495 30" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Node 4: Base Class -->' +
            '<rect x="495" y="0" width="110" height="60" rx="6" fill="#0f172a" stroke="#f59e0b" stroke-width="1.5"/>' +
            '<text x="550" y="26" fill="#fbbf24" font-size="11" font-weight="bold" text-anchor="middle">Base</text>' +
            '<text x="550" y="44" fill="#cbd5e1" font-size="9" text-anchor="middle">Superclass</text>' +
            '<!-- Arrow 4 -->' +
            '<path d="M 605 30 L 635 30" stroke="#38bdf8" stroke-width="2"/>' +
            '<!-- Node 5: AnyRef -->' +
            '<rect x="635" y="0" width="85" height="60" rx="6" fill="#0f172a" stroke="#64748b"/>' +
            '<text x="677" y="35" fill="#94a3b8" font-size="10" font-weight="bold" text-anchor="middle">AnyRef</text>' +
          '</g>' +
          '<!-- Bottom Explainers -->' +
          '<g transform="translate(50, 210)">' +
            '<rect width="700" height="180" rx="8" fill="#1e293b"/>' +
            '<text x="25" y="30" fill="#38bdf8" font-size="12" font-weight="bold">How Scala Linearization Solves the Diamond Problem:</text>' +
            '<text x="25" y="55" fill="#cbd5e1" font-size="10">1. Linearization orders inheritance strictly from RIGHT to LEFT: Metrics is evaluated before Logging.</text>' +
            '<text x="25" y="80" fill="#cbd5e1" font-size="10">2. super.execute() is dynamically bound: Metrics invokes super.execute() which calls Logging.</text>' +
            '<text x="25" y="105" fill="#cbd5e1" font-size="10">3. Logging invokes super.execute() which calls Base. Zero ambiguity; no diamond conflict possible!</text>' +
            '<text x="25" y="130" fill="#34d399" font-size="10" font-weight="bold">Self-Type Annotation: trait Metrics { this: ConfigService &#x2192; ... }</text>' +
            '<text x="25" y="150" fill="#94a3b8" font-size="9">Enforces at compile-time that host classes must also mix in ConfigService (Cake Pattern).</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'linearization-details',
      text: {
        en: '2. The Linearization Algorithm & Stackable Modifications',
        bn: '২. লিনিয়ারাইজেশন অ্যালগরিদম ও স্ট্যাকযোগ্য মডিফিকেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In languages with multiple inheritance like C++, the "Diamond Problem" occurs when a class inherits from 2 parents that share a common ancestor, creating ambiguity. Scala resolves this mathematically using Trait Linearization.',
        bn: 'সি++ এর মতো মাল্টিপল ইনহেরিটেন্সের ভাষায় "ডায়মন্ড প্রবলেম" ঘটে যখন কোনো ক্লাস এমন ২টি প্যারেন্ট থেকে ইনহেরিট করে যাদের মূল ভিত্তি এক, ফলে কোন মেথডটি কল হবে তা নিয়ে বিভ্রান্তি তৈরি হয়। স্কালা ট্রেইট লিনিয়ারাইজেশনের মাধ্যমে এই সমস্যার গাণিতিক সমাধান নিশ্চিত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Traits are placed into a single linear chain from right to left. Calls to "super" are late-bound: super does not call the syntactic parent class directly; it calls the next trait in the linearized hierarchy. This powers stackable modifications, where traits layer cross-cutting concerns (such as logging, caching, and encryption) seamlessly.',
        bn: 'ট্রেইটগুলোকে ডান থেকে বাম দিকে একটি সুনির্দিষ্ট লিনিয়ার চেইনে সাজানো হয়। এখানে "super" কল সিনট্যাক্টিক প্যারেন্ট ক্লাসে না গিয়ে লিনিয়ারাইজড ক্রমে থাকা ঠিক আগের ট্রেইটটিকে কল করে। এর ফলে স্ট্যাকযোগ্য রূপান্তর সম্ভব হয়, যেখানে একই মেথডের ওপর ধারাবাহিকভাবে লগিং, ক্যাশিং এবং এনক্রিপশনের স্তর যোগ করা যায়।'
      }
    },
    {
      type: 'heading',
      id: 'self-types-and-contextuals',
      text: {
        en: '3. Self-Types & Scala 3 Contextual Abstractions',
        bn: '৩. সেলফ-টাইপ এবং স্কালা ৩ কনটেক্সটুয়াল অ্যাবস্ট্রাকশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A self-type annotation (e.g. trait Metrics { this: DatabaseService => }) mandates that any concrete class mixing in Metrics must also inherit or mix in DatabaseService, providing lightweight dependency injection. Furthermore, Scala 3 replaces complex legacy implicits with clean "given" instances and "using" parameter clauses.',
        bn: 'সেলফ-টাইপ অ্যানোটেশন (যেমন trait Metrics { this: DatabaseService => }) বাধ্য করে যে Metrics ট্রেইট ব্যবহারকারী যেকোনো ক্লাসকে অবশ্যই DatabaseService ট্রেইটটিও যুক্ত করতে হবে, যা ডিপেন্ডেন্সি ইনজেকশন সহজ করে। এছাড়া স্কালা ৩ এ পুরোনো জটিল ইমপ্লিসিটের বদলে আধুনিক given ও using ক্লজ যুক্ত হয়েছে।'
      }
    },
    {
      type: 'heading',
      id: 'simulation-code',
      text: {
        en: '4. Trait Linearization & Stackable Engine in TypeScript',
        bn: '৪. TypeScript এ ট্রেইট লিনিয়ারাইজেশন ও স্ট্যাকযোগ্য ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Scala\'s stackable trait linearization works, chaining decorators from right to left through dynamic super invocations:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে স্কেলার স্ট্যাকযোগ্য ট্রেইট লিনিয়ারাইজেশন কাজ করে, ডায়নামিক super কলের মাধ্যমে ডান থেকে বাম দিকে ডেকোরেটরগুলোর চেইন তৈরি করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Scala trait linearization and stackable super call modifications.',
        bn: 'স্কালা ট্রেইট লিনিয়ারাইজেশন এবং স্ট্যাকযোগ্য super কল মডিফিকেশনের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Scala Trait Linearization and Stackable Modifications

// Base trait / interface
interface MessageWriter {
  write(msg: string): string;
}

// Concrete Base Class
class RawWriter implements MessageWriter {
  write(msg: string): string {
    return msg;
  }
}

// Stackable Trait 1: UpperFilter
class UpperFilterMixin implements MessageWriter {
  constructor(private next: MessageWriter) {}
  write(msg: string): string {
    // Modify and pass to super
    return this.next.write(msg.toUpperCase());
  }
}

// Stackable Trait 2: TimestampLogging
class TimestampLoggingMixin implements MessageWriter {
  constructor(private next: MessageWriter) {}
  write(msg: string): string {
    // Prepend timestamp and call super
    const timestamp = '[2026-10-01]';
    return this.next.write(timestamp + ' ' + msg);
  }
}

// Linearization Builder: class Service extends RawWriter with UpperFilter with TimestampLogging
// Order of evaluation (Right to Left): TimestampLogging -> UpperFilter -> RawWriter
class LinearizedPipeline {
  private headWriter: MessageWriter;

  constructor() {
    // 1. Base
    const base = new RawWriter();
    // 2. with UpperFilter
    const withUpper = new UpperFilterMixin(base);
    // 3. with TimestampLogging (rightmost evaluates first)
    const withTimestamp = new TimestampLoggingMixin(withUpper);
    this.headWriter = withTimestamp;
  }

  execute(message: string): string {
    return this.headWriter.write(message);
  }
}

// Scala 3 Contextual given/using simulation
class ExecutionContext {
  constructor(public readonly threadPoolSize: number) {}
}

function runTask(taskName: string, context: ExecutionContext): string {
  return 'Task ' + taskName + ' executed on ' + context.threadPoolSize + ' threads';
}

// Demonstration
const service = new LinearizedPipeline();
const result = service.execute('Order #101 Approved');

console.log('Linearized result: ' + result);
// Timestamp applied first, then UpperFilter transforms the message to uppercase

const defaultContext = new ExecutionContext(8);
const taskLog = runTask('DataBatchJob', defaultContext);
console.log('Contextual task execution: ' + taskLog); // -> Task DataBatchJob executed on 8 threads`
    }
  ],
  exercises: [
    {
      id: 'trait-ex-1',
      kind: 'mcq',
      question: {
        en: 'How does Scala resolve the Diamond Problem when a class mixes in multiple traits implementing the same method?',
        bn: 'একটি ক্লাস একই মেথড বাস্তবায়নকারী একাধিক ট্রেইট মিক্সিন করলে স্কালা কীভাবে ডায়মন্ড প্রবলেম সমাধান করে?'
      },
      options: [
        {
          en: 'Through Trait Linearization, creating a single unambiguous inheritance chain from right to left where super is dynamically bound',
          bn: 'ট্রেইট লিনিয়ারাইজেশনের মাধ্যমে, ডান থেকে বাম দিকে একটি সুনির্দিষ্ট চেইন তৈরি করে যেখানে super ডায়নামিকালি বাইন্ড হয়'
        },
        {
          en: 'By randomly choosing one method at runtime using Math.random()',
          bn: 'রানটাইমে Math.random() ব্যবহার করে যেকোনো একটি মেথড লটারির মাধ্যমে বেছে নিয়ে'
        },
        {
          en: 'By crashing the compiler whenever two traits share method names',
          bn: 'দুটি ট্রেইটের মেথড নাম এক হলেই কম্পাইলার ক্র্যাশ করে'
        },
        {
          en: 'By merging both method bodies into a single parallel thread',
          bn: 'উভয় মেথড বডিকে একটি একক প্যারালাল থ্রেডে যুক্ত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Linearization defines a strict right-to-left order of evaluation.',
        bn: 'লিনিয়ারাইজেশন ডান থেকে বাম দিকে কঠোর ক্রম নির্ধারণ করে।'
      },
      explanation: {
        en: 'Scala uses linearization to construct a deterministic, single-file inheritance hierarchy from right to left, dynamically routing super calls to eliminate diamond ambiguities.',
        bn: 'স্কালা লিনিয়ারাইজেশনের সাহায্যে ডান থেকে বামে একক ইনহেরিটেন্স ক্রম তৈরি করে এবং super কল পরিচালনা করে ডায়মন্ড বিভ্রান্তি দূর করে।'
      }
    },
    {
      id: 'trait-ex-2',
      kind: 'mcq',
      question: {
        en: 'What does a self-type annotation (e.g. trait Auth { this: UserRepo => }) declare in Scala?',
        bn: 'স্কালাতে সেলফ-টাইপ অ্যানোটেশন (যেমন trait Auth { this: UserRepo => }) কী ঘোষণা করে?'
      },
      options: [
        {
          en: 'It declares that any class mixing in Auth must also extend or mix in UserRepo, providing compile-time dependency injection',
          bn: 'এটি ঘোষণা করে যে Auth ব্যবহারকারী যেকোনো ক্লাসকে অবশ্যই UserRepo ট্রেইটটিও যুক্ত করতে হবে, যা কম্পাইল-টাইম ডিপেন্ডেন্সি দেয়'
        },
        {
          en: 'It makes the trait private to the current file only',
          bn: 'এটি ট্রেইটটিকে কেবল বর্তমান ফাইলের জন্য প্রাইভেট করে দেয়'
        },
        {
          en: 'It prevents the class from using the "this" keyword',
          bn: 'এটি ক্লাসে "this" কীওয়ার্ড ব্যবহারে নিষেধাজ্ঞা জারি করে'
        },
        {
          en: 'It converts the trait into an abstract class on disk',
          bn: 'এটি ট্রেইটটিকে হার্ডডিস্কে একটি অ্যাবস্ট্রাক্ট ক্লাসে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Self-types enforce required traits on the host class.',
        bn: 'সেলফ-টাইপ হোস্ট ক্লাসে নির্দিষ্ট ট্রেইটের উপস্থিতি বাধ্যতামূলক করে।'
      },
      explanation: {
        en: 'A self-type annotation specifies that the trait requires another type to be mixed into the concrete class, enabling modular dependency injection (the Cake Pattern).',
        bn: 'সেলফ-টাইপ নির্দেশ করে যে ট্রেইটটিকে ব্যবহার করতে হলে সংশ্লিষ্ট ক্লাসকে অন্য একটি নির্দিষ্ট ট্রেইটও যুক্ত করতে হবে।'
      }
    },
    {
      id: 'trait-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which pair of keywords replaces legacy implicit parameters and implicit values in modern Scala 3?',
        bn: 'আধুনিক স্কালা ৩ এ পুরোনো ইমপ্লিসিট প্যারামিটার ও ইমপ্লিসিট মানের বদলে কোন কীওয়ার্ড জোড়া ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'given (defines context instances) and using (demands context parameters)',
          bn: 'given (কনটেক্সট ইনস্ট্যান্স তৈরি করে) এবং using (কনটেক্সট প্যারামিটার গ্রহণ করে)'
        },
        {
          en: 'provide and inject',
          bn: 'provide এবং inject'
        },
        {
          en: 'async and await',
          bn: 'async এবং await'
        },
        {
          en: 'import and export',
          bn: 'import এবং export'
        }
      ],
      answer: 0,
      hint: {
        en: 'given provides; using accepts.',
        bn: 'given সরবরাহ করে; using গ্রহণ করে।'
      },
      explanation: {
        en: 'Scala 3 redesigns implicits into contextual abstractions: "given" declares contextual instances, while "using" declares parameters populated automatically from contextual scope.',
        bn: 'স্কালা ৩ এ ইমপ্লিসিটের বদলে given দিয়ে ইনস্ট্যান্স সংজ্ঞায়িত করা হয় এবং using দিয়ে মেথডে তা স্বয়ংক্রিয়ভাবে গ্রহণ করা হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-traits-and-the-mixin',
    title: {
      en: 'Scala Traits and Mixin Composition Quiz',
      bn: 'স্কালা ট্রেইট ও মিক্সিন কম্পোজিশন কুইজ'
    },
    questions: [
      {
        id: 'trait-q1',
        kind: 'mcq',
        question: {
          en: 'Can a Scala trait define both abstract and concrete methods with full implementations?',
          bn: 'একটি স্কালা ট্রেইট কি একই সাথে অ্যাবস্ট্রাক্ট মেথড এবং সম্পূর্ণ প্রস্তুত কংক্রিট মেথড উভয়ই ধারণ করতে পারে?'
        },
        options: [
          {
            en: 'Yes, traits can declare contracts and provide fully implemented methods and fields',
            bn: 'হ্যাঁ, ট্রেইট একই সাথে মেথড চুক্তি এবং সম্পূর্ণ প্রস্তুত মেথড ও ফিল্ড ধারণ করতে পারে'
          },
          {
            en: 'No, traits can only contain abstract method signatures with zero bodies',
            bn: 'না, ট্রেইট কেবল বডিহীন অ্যাবস্ট্রাক্ট মেথড সিগনেচার রাখতে পারে'
          },
          {
            en: 'Only if the trait is marked as @deprecated',
            bn: 'শুধুমাত্র যদি ট্রেইটটিতে @deprecated চিহ্ন থাকে'
          },
          {
            en: 'Only in Java 6 compatibility mode',
            bn: 'কেবলমাত্র জাভা ৬ কম্প্যাটিবিলিটি মোডে সম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Traits in Scala allow rich concrete implementations.',
          bn: 'স্কালা ট্রেইটে পূর্ণাঙ্গ কংক্রিট মেথড লেখা যায়।'
        },
        explanation: {
          en: 'Unlike traditional interfaces, Scala traits allow rich concrete methods, abstract contracts, and mutable or immutable field definitions.',
          bn: 'প্রথাগত ইন্টারফেসের চেয়ে এগিয়ে থাকা স্কালা ট্রেইট কংক্রিট মেথড ও ফিল্ড সরাসরি সংজ্ঞায়িত করার অনুমতি দেয়।'
        }
      },
      {
        id: 'trait-q2',
        kind: 'mcq',
        question: {
          en: 'In class OrderService extends Base with Log with Metrics, which implementation of a shared method executes first when invoked?',
          bn: 'class OrderService extends Base with Log with Metrics এ একটি অভিন্ন মেথড কল করলে কোন বাস্তবায়নটি প্রথমে রান হয়?'
        },
        options: [
          {
            en: 'Metrics (linearization evaluates traits from right to left)',
            bn: 'Metrics (লিনিয়ারাইজেশন ডান থেকে বাম দিকে ট্রেইট মূল্যায়ন করে)'
          },
          {
            en: 'Base (the superclass is always evaluated first)',
            bn: 'Base (সুপারক্লাস সর্বদা প্রথমে মূল্যায়িত হয়)'
          },
          {
            en: 'Log',
            bn: 'Log'
          },
          {
            en: 'None; it results in a compile deadlock',
            bn: 'কোনোটিই নয়; এটি কম্পাইল ডেডলক তৈরি করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The rightmost trait is at the top of the linearization chain.',
          bn: 'একদম ডান পাশের ট্রেইটটি লিনিয়ারাইজেশন চেইনের শীর্ষে থাকে।'
        },
        explanation: {
          en: 'Scala linearization evaluates mixed-in traits from right to left. Metrics is the rightmost trait, so its method implementation executes first.',
          bn: 'স্কালা ডান থেকে বাম দিকে ট্রেইট সাজায়। Metrics একদম ডানে থাকায় এর মেথডটি চেইনের শুরুতে প্রথম কার্যকর হয়।'
        }
      },
      {
        id: 'trait-q3',
        kind: 'mcq',
        question: {
          en: 'What feature in Scala 3 allows adding new methods to existing types without modifying their original source code?',
          bn: 'মূল সোর্স কোড পরিবর্তন না করেই বিদ্যমান যেকোনো টাইপে নতুন মেথড যোগ করতে স্কালা ৩ এর কোন ফিচার ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'Extension methods (using the "extension" keyword)',
            bn: 'এক্সটেনশন মেথড ("extension" কীওয়ার্ড ব্যবহার করে)'
          },
          {
            en: 'Source code monkey patching',
            bn: 'সোর্স কোড মাঙ্কি প্যাচিং'
          },
          {
            en: 'JVM bytecode rewriting agents',
            bn: 'জেভিএম বাইটকোড রিরাইটিং এজেন্ট'
          },
          {
            en: 'Direct database triggers',
            bn: 'সরাসরি ডাটাবেজ ট্রিগার'
          }
        ],
        answer: 0,
        hint: {
          en: 'The extension keyword enriches existing types cleanly.',
          bn: 'extension কীওয়ার্ড বিদ্যমান টাইপকে সুন্দরভাবে সমৃদ্ধ করে।'
        },
        explanation: {
          en: 'Scala 3 introduces first-class extension methods: extension (s: String) def toSlug: String = ... adds methods to existing classes without implicit classes.',
          bn: 'স্কালা ৩ এ extension কীওয়ার্ড দিয়ে কোনো ক্লাসের মূল কোড না ছুঁয়েই নতুন মেথড যুক্ত করা যায়।'
        }
      },
      {
        id: 'trait-q4',
        kind: 'mcq',
        question: {
          en: 'What is the primary difference between an abstract class and a trait in Scala 3?',
          bn: 'স্কালা ৩ এ একটি অ্যাবস্ট্রাক্ট ক্লাস এবং একটি ট্রেইটের মধ্যে প্রধান পার্থক্য কী?'
        },
        options: [
          {
            en: 'A class can mix in multiple traits, but can only inherit from a single abstract class',
            bn: 'একটি ক্লাস একাধিক ট্রেইট মিক্সিন করতে পারে, কিন্তু কেবল একটি একক অ্যাবস্ট্রাক্ট ক্লাস ইনহেরিট করতে পারে'
          },
          {
            en: 'Abstract classes can only be written in Python',
            bn: 'অ্যাবস্ট্রাক্ট ক্লাস কেবল পাইথনে লেখা যায়'
          },
          {
            en: 'Traits cannot contain constructor parameters even in Scala 3',
            bn: 'স্কালা ৩ এও ট্রেইটে কনস্ট্রাক্টর প্যারামিটার রাখা যায় না'
          },
          {
            en: 'There is no difference; abstract class is an exact alias for trait',
            bn: 'কোনো পার্থক্য নেই; অ্যাবস্ট্রাক্ট ক্লাস হলো ট্রেইটের হুবহু প্রতিশব্দ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Multiple traits can be mixed in; only single class inheritance is permitted.',
          bn: 'একাধিক ট্রেইট মিক্সিন করা যায়; কিন্তু ক্লাস ইনহেরিটেন্স কেবল একটিতেই সীমাবদ্ধ।'
        },
        explanation: {
          en: 'While Scala 3 allows trait parameters, Java Virtual Machine limitations permit single class inheritance (one abstract class) while supporting multiple trait mixins.',
          bn: 'জেভিএমের নিয়মানুযায়ী ক্লাস কেবল একটি প্যারেন্ট থেকে ইনহেরিট করতে পারে, তবে যত খুশি ট্রেইট মিক্সিন করার স্বাধীনতা থাকে।'
        }
      },
      {
        id: 'trait-q5',
        kind: 'mcq',
        question: {
          en: 'In stackable trait patterns, why must methods invoking super be marked with abstract override?',
          bn: 'স্ট্যাকযোগ্য ট্রেইট প্যাটার্নে super কল করা মেথডগুলোতে abstract override কেন লিখতে হয়?'
        },
        options: [
          {
            en: 'To signal to the compiler that super.method() is dynamically bound and will be supplied by another trait mixed in downstream',
            bn: 'কম্পাইলারকে জানাতে যে super.method() ডায়নামিকালি বাইন্ড হবে এবং অন্য কোনো মিক্সিন ট্রেইট এটি সরবরাহ করবে'
          },
          {
            en: 'To turn off compiler optimization for that method',
            bn: 'সেই মেথডের জন্য কম্পাইলার অপ্টিমাইজেশন বন্ধ করার জন্য'
          },
          {
            en: 'To force the method to run asynchronously in a Future',
            bn: 'মেথডটিকে ফিউচারে অ্যাসিনক্রোনাস চালাতে বাধ্য করার জন্য'
          },
          {
            en: 'To write the method output to a system log file',
            bn: 'মেথডের আউটপুট সিস্টেম লগ ফাইলে লেখার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'abstract override tells the compiler super will be provided by a later mixin.',
          bn: 'abstract override কম্পাইলারকে আশ্বস্ত করে যে super পরে অন্য মিক্সিন দ্বারা আসবে।'
        },
        explanation: {
          en: 'abstract override allows a trait to call super on a method that is abstract in its immediate parent, knowing a concrete implementation will be mixed in before it in linearization.',
          bn: 'abstract override কম্পাইলারকে নিশ্চিত করে যে লিনিয়ারাইজেশনের সময় অন্য একটি ট্রেইট বা ক্লাস এই super কলের জন্য কংক্রিট বডি সরবরাহ করবে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'builds-and-the-sbt',
    title: {
      en: 'Build Tooling with sbt: Multi-Module Projects & Dependencies',
      bn: 'sbt দিয়ে বিল্ড টুলিং: মাল্টি-মডিউল প্রজেক্ট ও ডিপেন্ডেন্সি'
    }
  }
};
