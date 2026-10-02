import type { Lesson } from '../../../lib/types';

export const ClassesAndTheTraitLesson: Lesson = {
  slug: 'classes-and-the-trait',
  tech: 'lang-php',
  title: {
    en: 'Classes, Properties, Traits & Inheritance',
    bn: 'ক্লাস, প্রপার্টি, ট্রেইট এবং ইনহেরিটেন্স'
  },
  summary: {
    en: 'Master modern Object-Oriented PHP: configure visibility modifiers (public, protected, private), simplify entity declarations with PHP 8 constructor property promotion, implement single inheritance and abstract contracts, and compose reusable traits without multiple-inheritance conflicts.',
    bn: 'আধুনিক অবজেক্ট-ওরিয়েন্টেড পিএইচপি আয়ত্ত করুন: ভিজিবিলিটি মডিফায়ার, পিএইচপি ৮ কনস্ট্রাক্টর প্রমোশন, ইনহেরিটেন্স ও অ্যাবস্ট্রাক্ট কন্ট্রাক্ট এবং একাধিক ইনহেরিটেন্সের ঝামেলা ছাড়া ট্রেইট কম্পোজিশন।'
  },
  minutes: 32,
  blocks: [
    {
      type: 'heading',
      id: 'oop-visibility-and-promotion-heading',
      text: {
        en: 'Encapsulation Visibility, Constructor Promotion, and Readonly Properties',
        bn: 'এনক্যাপসুলেশন ভিজিবিলিটি, কনস্ট্রাক্টর প্রমোশন এবং রিডঅনলি প্রপার্টি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP (the backend programming language) features a robust Object-Oriented Programming (OOP) model with 3 visibility levels: public (accessible everywhere), protected (accessible within the class and derived child classes), and private (restricted exclusively to the defining class). PHP 8 revolutionized boilerplate reduction with Constructor Property Promotion, allowing class properties to be declared and initialized directly inside constructor argument signatures. Coupled with readonly modifiers, developers can effortlessly instantiate immutable data-transfer entities.',
        bn: 'পিএইচপি (ব্যাকএন্ড প্রোগ্রামিং ভাষা) ৩ টি ভিজিবিলিটি স্তর বিশিষ্ট একটি শক্তিশালী অবজেক্ট-ওরিয়েন্টেড মডেল ধারণ করে: public (যেকোনো জায়গা থেকে অ্যাক্সেসযোগ্য), protected (বর্তমান ক্লাস এবং চাইল্ড ক্লাস থেকে ব্যবহারযোগ্য) এবং private (শুধুমাত্র নিজস্ব ক্লাসের ভেতরে সীমাবদ্ধ)। পিএইচপি ৮ এ কনস্ট্রাক্টর প্রোপার্টি প্রমোশন যুক্ত হওয়ায় ক্লাসের প্রোপার্টি ঘোষণা এবং মান নির্ধারণের কাজ কনস্ট্রাক্টর প্যারামিটারের ভেতরেই একবারে সম্পন্ন করা যায়। এর সাথে readonly কিওয়ার্ড মিলিয়ে সহজে অপরিবর্তনীয় ডেটা অবজেক্ট তৈরি করা সম্ভব।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural relationship between Abstract Base Classes, Concrete Inheritors, and Horizontal Trait Composition.',
        bn: 'চিত্র ১: অ্যাবস্ট্রাক্ট বেস ক্লাস, কনক্রিট চাইল্ড ক্লাস এবং অনুভূমিক ট্রেইট কম্পোজিশনের কাঠামোগত সম্পর্ক।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">PHP OBJECT-ORIENTED MODEL &amp; TRAIT COMPOSITION</text>

  <!-- Left: Abstract Base Class -->
  <g transform="translate(35, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Abstract Base Class</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="68" fill="#38bdf8" font-size="11" font-family="monospace">abstract class Model</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">protected int $id = 1;</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#0f172a" stroke="#38bdf8" />
    <text x="25" y="125" fill="#38bdf8" font-size="10" font-family="monospace">abstract public</text>
    <text x="25" y="145" fill="#38bdf8" font-size="10" font-family="monospace">function save(): bool;</text>

    <text x="15" y="205" fill="#cbd5e1" font-size="10" font-family="sans-serif">Enforces common contract</text>
  </g>

  <!-- Middle: Trait Mixin -->
  <g transform="translate(305, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#059669" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Horizontal Trait Mixin</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="68" fill="#34d399" font-size="11" font-family="monospace">trait HasTimestamps</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">public string $createdAt;</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="128" fill="#34d399" font-size="10" font-family="monospace">public function touch():</text>
    <text x="25" y="148" fill="#34d399" font-size="10" font-family="monospace">void { /* sets date */ }</text>

    <text x="15" y="205" fill="#34d399" font-size="10" font-family="sans-serif">Reused across entities</text>
  </g>

  <!-- Right: Concrete Inheritor Class -->
  <g transform="translate(575, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#7e22ce" />
    <text x="115" y="20" fill="#ffffff" font-size="12" font-family="sans-serif" font-weight="bold" text-anchor="middle">Concrete Class</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="20" y="68" fill="#c084fc" font-size="10" font-family="monospace">class User extends Model</text>
    <text x="20" y="85" fill="#fbbf24" font-size="9" font-family="monospace">use HasTimestamps;</text>

    <rect x="15" y="105" width="200" height="55" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="20" y="125" fill="#c084fc" font-size="9" font-family="monospace">public function __construct(</text>
    <text x="20" y="145" fill="#34d399" font-size="9" font-family="monospace"> public readonly string $email</text>

    <text x="15" y="205" fill="#c084fc" font-size="10" font-family="sans-serif">Composed entity ready</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'inheritance-abstract-and-traits-heading',
      text: {
        en: 'Single Inheritance Hierarchy versus Horizontal Trait Composition',
        bn: 'সিঙ্গেল ইনহেরিটেন্স হায়ারার্কি বনাম অনুভূমিক ট্রেইট কম্পোজিশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'PHP enforces a strict single-inheritance model: a class can extend only 1 parent class. To enable code reuse across unrelated class hierarchies without the diamond-problem complexities of multiple inheritance, PHP provides Traits. A trait allows methods and properties to be horizontally injected into multiple classes using the use keyword. If 2 traits introduce matching method names, conflicts are cleanly resolved via the insteadof operator or aliasing.',
        bn: 'পিএইচপি কঠোরভাবে সিঙ্গেল-ইনহেরিটেন্স মডেল অনুসরণ করে: একটি ক্লাস কেবল ১ টি প্যারেন্ট ক্লাস থেকেই ইনহেরিট করতে পারে। বিভিন্ন ক্লাসের মাঝে কোড পুনর্ব্যবহার সহজ করতে এবং মাল্টিপল ইনহেরিটেন্সের জটিলতা এড়াতে পিএইচপিতে ট্রেইট (Trait) ব্যবস্থা রয়েছে। ট্রেইটের মাধ্যমে use কিওয়ার্ড দিয়ে যেকোনো ক্লাসে অতিরিক্ত মেথড অনুভূমিকভাবে যুক্ত করা যায়। যদি ২ টি ট্রেইটে একই নামের মেথড থাকে, তবে insteadof অপারেটর বা অ্যালিয়াসিং ব্যবহারের মাধ্যমে কোনো বিরোধ ছাড়াই তা সমাধান করা সম্ভব।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of PHP 8 constructor promotion, readonly properties, and horizontal trait composition.',
        bn: 'পিএইচপি ৮ কনস্ট্রাক্টর প্রমোশন, রিডঅনলি প্রপার্টি এবং ট্রেইট কম্পোজিশনের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of PHP Object-Oriented Classes, Promotion, and Traits

// 1. Simulating a Trait: HasTimestamps
export interface HasTimestampsTrait {
  createdAt: Date;
  updatedAt: Date;
  touch(): void;
}

// 2. Simulating Abstract Base Class
export abstract class AbstractModel {
  constructor(protected id: number) {}
  public getId(): number {
    return this.id;
  }
  public abstract save(): boolean;
}

// 3. Simulating PHP 8 Concrete Class with Constructor Promotion and Trait Mixin
export class UserEntity extends AbstractModel implements HasTimestampsTrait {
  public createdAt: Date;
  public updatedAt: Date;

  // Constructor promotion: public readonly email & public role
  constructor(
    id: number,
    public readonly email: string, // Readonly immutable property
    public role: string = 'member'
  ) {
    super(id);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }

  // Trait method implementation
  public touch(): void {
    this.updatedAt = new Date();
  }

  public save(): boolean {
    return true; // Persisted to database
  }
}

// Executing demonstrations
const user = new UserEntity(1, 'farhan@company.com', 'admin');
console.log('User ID:', user.getId()); // 1
console.log('User Email (Readonly):', user.email); // "farhan@company.com"
console.log('User Role:', user.role); // "admin"
console.log('Model Save Success:', user.save()); // true`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Constructor Promotion',
          def: {
            en: 'PHP 8 syntax declaring and assigning class properties directly inside the constructor parameter signature.',
            bn: 'পিএইচপি ৮ এর আধুনিক সিনট্যাক্স যা কনস্ট্রাক্টরের প্যারামিটারের ভেতরেই সরাসরি প্রপার্টি ঘোষণা ও মান নির্ধারণ করে।'
          }
        },
        {
          term: 'Readonly Property',
          def: {
            en: 'Property modifier introduced in PHP 8.1 preventing reassignment after initial construction.',
            bn: 'পিএইচপি ৮.১ এর প্রপার্টি মডিফায়ার যা একবার মান নির্ধারণের পর পরবর্তীতে যেকোনো পরিবর্তন সম্পূর্ণ নিষিদ্ধ করে।'
          }
        },
        {
          term: 'Trait Mixin',
          def: {
            en: 'Mechanism for horizontal code reuse enabling classes to inherit sets of methods outside class hierarchies.',
            bn: 'অনুভূমিক কোড পুনর্ব্যবহারের বিশেষ ব্যবস্থা যার মাধ্যমে ইনহেরিটেন্স ছাড়াও একাধিক ক্লাসে মেথড যুক্ত করা যায়।'
          }
        },
        {
          term: 'Abstract Class',
          def: {
            en: 'Base blueprint class that cannot be instantiated directly and forces child classes to implement declared contracts.',
            bn: 'ভিত্তি ক্লাস যা নিজে অবজেক্ট তৈরি করতে পারে না বরং চাইল্ড ক্লাসগুলোর জন্য নির্দিষ্ট মেথড বাস্তবায়ন বাধ্যতামূলক করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'constructor-promotion-syntax-ex1',
      kind: 'mcq',
      topic: 'constructor-property-promotion-php8',
      question: {
        en: 'How does PHP 8 Constructor Property Promotion reduce boilerplate code in class definitions?',
        bn: 'পিএইচপি ৮ এর কনস্ট্রাক্টর প্রোপার্টি প্রমোশন কীভাবে ক্লাসের ভেতর অতিরিক্ত কোড লেখার ঝামেলা কমায়?'
      },
      options: [
        {
          en: 'It combines the property declaration, parameter type hinting, and assignment ($this->x = $x) into the constructor parameter list',
          bn: 'এটি প্রপার্টি ঘোষণা, প্যারামিটার টাইপ নির্ধারণ এবং মান অ্যাসাইন করার ($this->x = $x) কাজ কনস্ট্রাক্টরের ভেতরেই একবারে সম্পন্ন করে'
        },
        {
          en: 'It deletes all class constructors from memory',
          bn: 'এটি মেমোরি থেকে সব কনস্ট্রাক্টর মুছে ফেলে'
        },
        {
          en: 'It forces all class properties to be static strings',
          bn: 'এটি ক্লাসের সমস্ত প্রপার্টিকে স্ট্যাটিক স্ট্রিং হতে বাধ্য করে'
        },
        {
          en: 'It automatically saves every instance into a CSV file',
          bn: 'এটি প্রতিটি ইনস্ট্যান্স স্বয়ংক্রিয়ভাবে একটি সিএসভি ফাইলে সেভ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Prefixing constructor parameters with public, protected, or private triggers automatic promotion.',
        bn: 'কনস্ট্রাক্টর প্যারামিটারের আগে public, protected বা private লিখলে স্বয়ংক্রিয় প্রমোশন ঘটে।'
      },
      explanation: {
        en: 'Visibility modifiers in constructor parameters instruct the Zend Engine to register them as instance fields directly.',
        bn: 'কনস্ট্রাক্টরে ভিজিবিলিটি উল্লেখ করলে পিএইচপি নিজে থেকেই ক্লাসের প্রপার্টি তৈরি করে মান বসিয়ে নেয়।'
      }
    },
    {
      id: 'trait-method-conflict-resolution-ex2',
      kind: 'mcq',
      topic: 'trait-conflict-resolution-insteadof',
      question: {
        en: 'When two traits TraitA and TraitB define an identical method log(), how is the collision resolved in PHP?',
        bn: 'TraitA এবং TraitB উভয় ট্রেইটেই যদি log() নামের একই মেথড থাকে, তবে পিএইচপিতে এই বিরোধ কীভাবে মেটানো হয়?'
      },
      options: [
        {
          en: 'By explicitly using the insteadof operator inside the class use block: TraitA::log insteadof TraitB;',
          bn: 'ক্লাসের use ব্লকের ভেতর insteadof অপারেটর ব্যবহারের মাধ্যমে: TraitA::log insteadof TraitB;'
        },
        {
          en: 'PHP crashes the web server immediately with an unrecoverable kernel panic',
          bn: 'পিএইচপি সার্ভার ক্র্যাশ করে কার্নেল প্যানিক তৈরি করে'
        },
        {
          en: 'PHP deletes the second trait file from the disk',
          bn: 'পিএইচপি ডিস্ক থেকে দ্বিতীয় ট্রেইট ফাইলটি ডিলিট করে দেয়'
        },
        {
          en: 'It merges both methods together randomly',
          bn: 'এটি এলোমেলোভাবে উভয় মেথডকে একসাথে মিশিয়ে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The insteadof keyword chooses which trait method implementation takes precedence.',
        bn: 'insteadof কিওয়ার্ডের মাধ্যমে কোন ট্রেইটের মেথডটি কার্যকর হবে তা সুনির্দিষ্টভাবে বেছে নেওয়া হয়।'
      },
      explanation: {
        en: 'The insteadof operator resolves trait collisions explicitly, while as allows aliasing the alternative method.',
        bn: 'insteadof অপারেটর সংঘাত দূর করে এবং as কিওয়ার্ড অন্য মেথডটিকে নতুন নামে ডাকার সুযোগ দেয়।'
      }
    },
    {
      id: 'readonly-property-mutation-restriction-ex3',
      kind: 'mcq',
      topic: 'readonly-property-immutability',
      question: {
        en: 'What happens if code attempts to reassign a public readonly property after it has already been initialized?',
        bn: 'কোনো public readonly প্রপার্টি একবার ইনিশিয়ালাইজ করার পর পুনরায় নতুন মান দিতে গেলে কী ঘটবে?'
      },
      options: [
        {
          en: 'PHP throws an Error: Cannot modify readonly property',
          bn: 'পিএইচপি সাথে সাথে Error: Cannot modify readonly property এক্সেপশন ছুড়ে দেয়'
        },
        {
          en: 'It silently overwrites the value with zero',
          bn: 'এটি কোনো ত্রুটি না দেখিয়ে মান বদলে ০ করে দেয়'
        },
        {
          en: 'It converts the property into a global variable',
          bn: 'এটি প্রপার্টিকে একটি গ্লোবাল ভেরিয়েবলে পরিণত করে'
        },
        {
          en: 'The operating system restarts',
          bn: 'অপারেটিং সিস্টেম পুনরায় চালু হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Readonly properties can only be initialized once, enforcing true immutability.',
        bn: 'রিডঅনলি প্রপার্টিতে কেবল একবারই মান বসানো যায়, পরবর্তীতে তা অপরিবর্তনীয় থাকে।'
      },
      explanation: {
        en: 'Readonly properties cannot be modified after assignment, guaranteeing data immutability.',
        bn: 'একবার মান বসানোর পর রিডঅনলি প্রপার্টি পরিবর্তন করতে গেলে পিএইচপি এরর প্রদর্শন করে।'
      }
    },
    {
      id: 'abstract-class-instantiation-rule-ex4',
      kind: 'mcq',
      topic: 'abstract-class-instantiation-forbidden',
      question: {
        en: 'Can an application instantiate an abstract class directly using the "new" keyword (e.g., $m = new AbstractModel())?',
        bn: 'অ্যাপ্লিকেশনে সরাসরি "new" কিওয়ার্ড দিয়ে কি কোনো অ্যাবস্ট্রাক্ট ক্লাসের অবজেক্ট তৈরি করা যায় ($m = new AbstractModel())?'
      },
      options: [
        {
          en: 'No, abstract classes cannot be directly instantiated and throw an Error if attempted; they must be extended by child classes',
          bn: 'না, সরাসরি অ্যাবস্ট্রাক্ট ক্লাসের অবজেক্ট তৈরি করা যায় না এবং চেষ্টা করলে Error দেয়; এদের চাইল্ড ক্লাসের মাধ্যমে বাড়াতে হয়'
        },
        {
          en: 'Yes, abstract classes behave identically to standard classes',
          bn: 'হ্যাঁ, অ্যাবস্ট্রাক্ট ক্লাস সাধারণ ক্লাসের মতোই আচরণ করে'
        },
        {
          en: 'Only if the class contains fewer than 2 methods',
          bn: 'কেবল ক্লাসে ২ টির কম মেথড থাকলে'
        },
        {
          en: 'Only on 64-bit systems',
          bn: 'কেবল ৬৪-বিট অপারেটিং সিস্টেমে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Abstract classes serve exclusively as blueprints for inheritance hierarchies.',
        bn: 'অ্যাবস্ট্রাক্ট ক্লাস মূলত অন্যান্য ক্লাসের জন্য সাধারণ ব্লুপ্রিন্ট হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'Abstract classes require concrete derived child classes to implement missing signatures before instantiation.',
        bn: 'অবজেক্ট তৈরি করতে হলে অবশ্যই কোনো চাইল্ড ক্লাস দিয়ে অ্যাবস্ট্রাক্ট ক্লাসের মেথডগুলো বাস্তবায়ন করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-classes-and-the-trait',
    title: {
      en: 'PHP Classes, Traits and Inheritance Quiz',
      bn: 'পিএইচপি ক্লাস, ট্রেইট এবং ইনহেরিটেন্স কুইজ'
    },
    questions: [
      {
        id: 'quiz-final-keyword-behavior',
        kind: 'mcq',
        topic: 'final-keyword-class-inheritance',
        question: {
          en: 'What effect does prefixing a class definition with the final keyword (final class OrderService) have in PHP?',
          bn: 'পিএইচপিতে কোনো ক্লাসের পূর্বে final কিওয়ার্ড (final class OrderService) লিখলে এর ফলাফল কী হয়?'
        },
        options: [
          {
            en: 'It prevents any other class from extending or subclassing OrderService, throwing a fatal compilation error if attempted',
            bn: 'এটি অন্য যেকোনো ক্লাসকে OrderService থেকে ইনহেরিট করতে বাধা দেয় এবং চেষ্টা করলে মারাত্মক কম্পাইলেশন এরর তৈরি করে'
          },
          {
            en: 'It deletes the class file from the server when execution finishes',
            bn: 'এক্সিকিউশন শেষ হলে এটি সার্ভার থেকে ক্লাস ফাইলটি মুছে ফেলে'
          },
          {
            en: 'It makes all class methods static automatically',
            bn: 'এটি ক্লাসের সমস্ত মেথডকে স্বয়ংক্রিয়ভাবে স্ট্যাটিক বানিয়ে ফেলে'
          },
          {
            en: 'It forces the class to execute inside a web browser',
            bn: 'এটি ক্লাসকে ওয়েব ব্রাউজারের ভেতর চালাতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The final keyword seals a class or method from further extension or overriding.',
          bn: 'final কিওয়ার্ড কোনো ক্লাস বা মেথডের পরিবর্ধন পুরোপুরি বন্ধ করে দেয়।'
        },
        explanation: {
          en: 'Marking a class final forbids subclassing, protecting architectural integrity and design contracts.',
          bn: 'ক্লাসকে final ঘোষণা করলে কোনো চাইল্ড ক্লাস আর এটিকে extend করতে পারে না।'
        }
      },
      {
        id: 'quiz-precedence-trait-class-parent',
        kind: 'mcq',
        topic: 'trait-method-precedence-order',
        question: {
          en: 'What is the method override precedence order when a method is defined in the current class, an imported Trait, and an inherited parent class?',
          bn: 'বর্তমান ক্লাস, ব্যবহৃত ট্রেইট এবং ইনহেরিট করা প্যারেন্ট ক্লাসে একই নামের মেথড থাকলে অগ্রাধিকারের ক্রম কোনটি?'
        },
        options: [
          {
            en: 'Current Class overrides Trait, which overrides Parent Class',
            bn: 'বর্তমান ক্লাস ট্রেইটকে ওভাররাইড করে, আর ট্রেইট প্যারেন্ট ক্লাসকে ওভাররাইড করে'
          },
          {
            en: 'Parent Class overrides Trait, which overrides Current Class',
            bn: 'প্যারেন্ট ক্লাস ট্রেইটকে ওভাররাইড করে, আর ট্রেইট বর্তমান ক্লাসকে ওভাররাইড করে'
          },
          {
            en: 'Trait overrides Current Class, which overrides Parent Class',
            bn: 'ট্রেইট বর্তমান ক্লাসকে ওভাররাইড করে, আর বর্তমান ক্লাস প্যারেন্ট ক্লাসকে ওভাররাইড করে'
          },
          {
            en: 'All 3 methods execute simultaneously in parallel threads',
            bn: '৩ টি মেথডই সমান্তরাল থ্রেডে একসাথে রান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The current class has ultimate precedence; traits sit between the child class and its parent.',
          bn: 'বর্তমান ক্লাসের মেথড সর্বোচ্চ প্রাধান্য পায়; ট্রেইট থাকে চাইল্ড এবং প্যারেন্টের মাঝামাঝি।'
        },
        explanation: {
          en: 'Class members override trait methods, and trait methods override parent class inherited methods.',
          bn: 'ক্লাসের নিজস্ব মেথড ট্রেইটকে প্রতিস্থাপন করে, আবার ট্রেইটের মেথড প্যারেন্ট ক্লাসের মেথডকে প্রতিস্থাপন করে।'
        }
      },
      {
        id: 'quiz-interface-multiple-implementation',
        kind: 'mcq',
        topic: 'interface-multiple-implementations',
        question: {
          en: 'Can a single PHP class implement multiple distinct interfaces simultaneously?',
          bn: 'একটি পিএইচপি ক্লাস কি একসাথে একাধিক ভিন্ন ইন্টারফেস বাস্তবায়ন করতে পারে?'
        },
        options: [
          {
            en: 'Yes, classes can implement multiple interfaces separated by commas: class User implements Auditable, JsonSerializable',
            bn: 'হ্যাঁ, কমা দিয়ে পৃথক করে ক্লাস একাধিক ইন্টারফেস বাস্তবায়ন করতে পারে: class User implements Auditable, JsonSerializable'
          },
          {
            en: 'No, PHP allows implementing only 1 interface per class',
            bn: 'না, পিএইচপিতে একটি ক্লাসে কেবল ১ টি ইন্টারফেস ব্যবহার করা যায়'
          },
          {
            en: 'Only if all interfaces have zero methods',
            bn: 'কেবল সব ইন্টারফেসে কোনো মেথড না থাকলে'
          },
          {
            en: 'Only on Linux distributions',
            bn: 'কেবল লিনাক্স ডিস্ট্রিবিউশনে'
          }
        ],
        answer: 0,
        hint: {
          en: 'While single inheritance applies to classes, multiple implementation is fully permitted for interfaces.',
          bn: 'ক্লাসের ক্ষেত্রে সিঙ্গেল ইনহেরিটেন্স প্রযোজ্য হলেও ইন্টারফেস যত খুশি বাস্তবায়ন করা যায়।'
        },
        explanation: {
          en: 'PHP allows comma-delimited interface implementations, enforcing comprehensive behavioral contracts.',
          bn: 'কমা দিয়ে একাধিক ইন্টারফেস যুক্ত করা সম্পূর্ণ বৈধ এবং এটি কোডের মানদণ্ড বজায় রাখে।'
        }
      },
      {
        id: 'quiz-instanceof-polymorphism-check',
        kind: 'mcq',
        topic: 'instanceof-polymorphic-type-check',
        question: {
          en: 'What does the operator $user instanceof Auditable verify in PHP runtime execution?',
          bn: 'পিএইচপিতে $user instanceof Auditable অপারেটরটি কার্যকর করার সময় কী যাচাই করে?'
        },
        options: [
          {
            en: 'It returns true if $user is an instance of a class that implements Auditable or inherits from it, and false otherwise',
            bn: 'এটি true প্রদান করে যদি $user এমন একটি ক্লাসের অবজেক্ট হয় যা Auditable বাস্তবায়ন করে বা ইনহেরিট করে, অন্যথায় false দেয়'
          },
          {
            en: 'It deletes the instance from memory',
            bn: 'এটি ইনস্ট্যান্সটিকে মেমোরি থেকে মুছে ফেলে'
          },
          {
            en: 'It converts $user into a database string',
            bn: 'এটি $user কে ডেটাবেস স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'It reboots the Zend VM',
            bn: 'এটি জেন্ড ভিএম রিবুট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'instanceof evaluates polymorphic inheritance and interface implementation hierarchy.',
          bn: 'instanceof অবজেক্টটি নির্দিষ্ট ক্লাস বা ইন্টারফেসের অংশ কি না তা পরীক্ষা করে।'
        },
        explanation: {
          en: 'instanceof safely checks whether an object inherits from a class or satisfies an interface contract.',
          bn: 'instanceof নিরাপদভাবে যাচাই করে যে অবজেক্টটি নির্দিষ্ট ইন্টারফেসের চুক্তি পূরণ করেছে কি না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'pdos-and-the-query',
    title: {
      en: 'PDO Database API, Prepared Statements & Transactions',
      bn: 'PDO ডেটাবেস এপিআই, প্রিপেয়ার্ড স্টেটমেন্ট এবং ট্রানজ্যাকশন'
    }
  }
};
