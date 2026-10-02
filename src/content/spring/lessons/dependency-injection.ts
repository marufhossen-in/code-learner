import type { Lesson } from '../../../lib/types';

export const DependencyInjectionLesson: Lesson = {
  slug: 'dependency-injection',
  tech: 'spring',
  title: {
    en: 'Dependency Injection, Qualifiers & Primary Beans',
    bn: 'ডিপেন্ডেন্সি ইনজেকশন, কোয়ালিফায়ার এবং প্রাইমারি বিন'
  },
  summary: {
    en: 'Master the mechanics of Dependency Injection in Spring: eliminate field injection anti-patterns in favor of immutable constructor injection, resolve multiple bean ambiguity using @Qualifier and @Primary, inject external configuration with @Value, and resolve circular dependency errors.',
    bn: 'স্প্রিং-এ ডিপেন্ডেন্সি ইনজেকশন মেকানিজম আয়ত্ত করুন: ফিল্ড ইনজেকশন পরিহার করে ইমিউটেবল কনস্ট্রাক্টর ইনজেকশনের প্রয়োগ, @Qualifier ও @Primary দিয়ে একাধিক বিনের দ্বন্দ্ব সমাধান, @Value দিয়ে কনফিগারেশন ইনজেকশন এবং সার্কুলার ডিপেন্ডেন্সি ত্রুটি নিরসন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'constructor-vs-field-injection-heading',
      text: {
        en: 'Constructor Injection versus The Field Injection Anti-Pattern',
        bn: 'কনস্ট্রাক্টর ইনজেকশন বনাম ফিল্ড ইনজেকশন অ্যান্টি-প্যাটার্ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In early Spring applications, annotating private fields with @Autowired (known as Field Injection) became popular due to its terseness. However, modern enterprise engineering classifies field injection as an anti-pattern: it conceals class dependencies, prevents the use of "final" immutable fields, and makes pure unit testing impossible without booting a heavy Spring context. Spring strongly mandates Constructor Injection. Since Spring 4.3, classes with a single constructor do not even require the @Autowired annotation. Constructor injection guarantees that classes are immutable, impossible to instantiate in an invalid half-constructed state, and easily testable by passing mock instances directly into the constructor.',
        bn: 'প্রথম দিকে কোড সংক্ষিপ্ত করার জন্য সরাসরি ফিল্ডের ওপর @Autowired লিখে ফিল্ড ইনজেকশন বেশ জনপ্রিয় ছিল। তবে আধুনিক এন্টারপ্রাইজ সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ফিল্ড ইনজেকশনকে একটি অ্যান্টি-প্যাটার্ন বা ক্ষতিকর অভ্যাস হিসেবে গণ্য করা হয়: এটি ক্লাসের নির্ভরতাকে লুকিয়ে রাখে, "final" ইমিউটেবল ফিল্ড ব্যবহারের সুযোগ নষ্ট করে এবং স্প্রিং কনটেক্সট ছাড়া সাধারণ ইউনিট টেস্ট করা অসম্ভব করে তোলে। আধুনিক স্প্রিং কনস্ট্রাক্টর ইনজেকশনকে কঠোরভাবে সুপারিশ করে। স্প্রিং ৪.৩ সংস্করণ থেকে ক্লাসে একটি মাত্র কনস্ট্রাক্টর থাকলে @Autowired অ্যানোটেশন লেখারও প্রয়োজন হয় না। কনস্ট্রাক্টর ইনজেকশন ক্লাসকে ইমিউটেবল রাখে, অসম্পূর্ণ অবস্থায় অবজেক্ট তৈরি হওয়া রোধ করে এবং সাধারণ মক পাস করে সেকেন্ডের মধ্যে টেস্ট চালানোর সুযোগ দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural pipeline of Spring Dependency Injection: Service declaration, candidate resolution, @Qualifier disambiguation, and immutable wiring.',
        bn: 'চিত্র ১: স্প্রিং ডিপেন্ডেন্সি ইনজেকশনের পাইপলাইন: সার্ভিস ঘোষণা, প্রার্থী নির্বাচন, @Qualifier দ্বারা দ্বন্দ্ব নিরসন এবং ইমিউটেবল ওয়্যারিং।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING DEPENDENCY INJECTION &amp; QUALIFIER DISAMBIGUATION</text>

  <!-- Step 1: Target Service Declaration -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Target Service</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">@Service</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">class CheckoutService</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">final PaymentGateway</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Declares Contract</text>
  </g>

  <!-- Step 2: Multiple Candidates -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#e11d48" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Ambiguity Found</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f43f5e" />
    <text x="15" y="68" fill="#fb7185" font-size="9" font-family="monospace">StripeGateway (Bean 1)</text>
    <text x="15" y="85" fill="#fb7185" font-size="8" font-family="monospace">PaypalGateway (Bean 2)</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f43f5e" />
    <text x="15" y="130" fill="#fb7185" font-size="8" font-family="monospace">NoUniqueBeanDefinition</text>

    <text x="15" y="215" fill="#fb7185" font-size="10" font-family="sans-serif">Collision Detected</text>
  </g>

  <!-- Step 3: Qualifier & Primary -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Disambiguation</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">@Qualifier("stripe")</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">or @Primary Default</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Explicit Target Match</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Resolved Dependency</text>
  </g>

  <!-- Step 4: Immutable Injection -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#059669" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Injected Wire</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">this.gateway = s;</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Final Immutable</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Ready to Serve</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Thread-Safe Service</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'qualifier-and-primary-disambiguation-heading',
      text: {
        en: 'Disambiguating Multiple Beans with @Qualifier and @Primary',
        bn: '@Qualifier এবং @Primary দিয়ে একাধিক বিনের দ্বন্দ্ব সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a service requires an interface implemented by multiple beans (for example, PaymentGateway implemented by both StripeGateway and PaypalGateway), Spring encounters ambiguity. If left unresolved, the ApplicationContext throws a fatal NoUniqueBeanDefinitionException at startup. To resolve this, developers can designate an implementation with "@Primary", signaling that it should be selected by default unless a client asks otherwise. Alternatively, developers place "@Qualifier(\'stripeGateway\')" at the constructor injection point to explicitly bind the specific desired implementation by name.',
        bn: 'যখন কোনো সার্ভিসের এমন একটি ইন্টারফেসের প্রয়োজন হয় যা একাধিক বিন দ্বারা বাস্তবায়িত হয়েছে (যেমন PaymentGateway ইন্টারফেসটি StripeGateway এবং PaypalGateway উভয় ক্লাস বাস্তবায়ন করেছে), তখন স্প্রিং দ্বিধায় পড়ে যায়। সমাধান না করলে অ্যাপ্লিকেশন চালুর সময় NoUniqueBeanDefinitionException ঘটে বন্ধ হয়ে যায়। এই সমস্যা সমাধানে একটি ক্লাসে "@Primary" অ্যানোটেশন দিয়ে তাকে ডিফল্ট বিন হিসেবে নির্ধারণ করে দেওয়া যায়। অথবা কনস্ট্রাক্টর ইনজেকশনের মুখে "@Qualifier(\'stripeGateway\')" লিখে স্পষ্টভাবে নাম উল্লেখ করে কাঙ্ক্ষিত বিনটি গ্রহণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Spring Inversion of Control container resolving constructor dependencies, handling multiple candidates, and enforcing qualifiers.',
        bn: 'স্প্রিং IoC কন্টেইনারে কনস্ট্রাক্টর নির্ভরতা সমাধান, একাধিক প্রার্থীর দ্বন্দ্ব নিরসন এবং কোয়ালিফায়ার প্রয়োগের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Spring Dependency Injection and @Qualifier Disambiguation

export interface PaymentGateway {
  charge(amount: number): string;
}

export class StripeGateway implements PaymentGateway {
  public charge(amount: number): string {
    return 'Charged $' + amount + ' via Stripe';
  }
}

export class PaypalGateway implements PaymentGateway {
  public charge(amount: number): string {
    return 'Charged $' + amount + ' via PayPal';
  }
}

// Simulating Spring Service with Immutable Constructor Injection
export class CheckoutService {
  private readonly gateway: PaymentGateway;

  // Constructor Injection: explicit, final, and easily mockable
  constructor(gateway: PaymentGateway) {
    this.gateway = gateway;
  }

  public completeOrder(orderId: number, amount: number): string {
    const confirmation = this.gateway.charge(amount);
    return 'Order #' + orderId + ' complete: ' + confirmation;
  }
}

// Container wiring simulation
const stripe = new StripeGateway();
const paypal = new PaypalGateway();

// Disambiguation: injecting Stripe explicitly (equivalent to @Qualifier("stripeGateway"))
const checkoutService = new CheckoutService(stripe);

const receipt = checkoutService.completeOrder(1001, 250);
console.log('Order Receipt:', receipt);
// "Order #1001 complete: Charged $250 via Stripe"`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Constructor Injection',
          def: {
            en: 'Spring dependency injection mechanism supplying dependencies via class constructors, enabling final fields and testability.',
            bn: 'স্প্রিং-এর ডিপেন্ডেন্সি ইনজেকশন পদ্ধতি যা কনস্ট্রাক্টরের মাধ্যমে অবজেক্ট পাস করে ইমিউটেবিলিটি ও টেস্টেবিলিটি দেয়।'
          }
        },
        {
          term: '@Qualifier',
          def: {
            en: 'Annotation specifying the exact bean name to inject when multiple candidate beans match a target interface.',
            bn: 'অ্যানোটেশন যা একাধিক বিনের উপস্থিতি থাকলে সুনির্দিষ্ট কোন বিনটি ইনজেক্ট করতে হবে তার নাম বলে দেয়।'
          }
        },
        {
          term: '@Primary',
          def: {
            en: 'Annotation granting higher precedence to a bean when multiple beans of the same type exist in the context.',
            bn: 'অ্যানোটেশন যা একই টাইপের একাধিক বিন থাকলে কোনো কোয়ালিফায়ার ছাড়া ডিফল্টভাবে একটি বিনকে অগ্রাধিকার দেয়।'
          }
        },
        {
          term: 'Field Injection',
          def: {
            en: 'Legacy anti-pattern using @Autowired on private fields, breaking immutability and hampering isolated unit testing.',
            bn: 'পুরনো ক্ষতিকর অভ্যাস যেখানে প্রাইভেট ফিল্ডে সরাসরি @Autowired লেখা হতো, যা ইমিউটেবিলিটি ও টেস্টিং নষ্ট করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'constructor-injection-immutability-benefit-ex1',
      kind: 'mcq',
      topic: 'constructor-injection-immutability-advantage',
      question: {
        en: 'Why is constructor injection strictly preferred over @Autowired field injection in modern Spring development?',
        bn: 'আধুনিক স্প্রিং ডেভেলপমেন্টে @Autowired ফিল্ড ইনজেকশনের চেয়ে কনস্ট্রাক্টর ইনজেকশনকে কেন কঠোরভাবে প্রাধান্য দেওয়া হয়?'
      },
      options: [
        {
          en: 'It enables declaring fields as "final" for true immutability, prevents half-initialized object states, and allows pure unit testing with mocks without booting Spring',
          bn: 'এটি "final" ফিল্ড ব্যবহারের সুযোগ দিয়ে ইমিউটেবিলিটি নিশ্চিত করে, অসম্পূর্ণ অবজেক্ট তৈরি হওয়া রোধ করে এবং স্প্রিং কনটেক্সট ছাড়াই মক দিয়ে দ্রুত ইউনিট টেস্টের সুযোগ দেয়'
        },
        {
          en: 'Constructor injection makes the application free of charge',
          bn: 'কনস্ট্রাক্টর ইনজেকশন অ্যাপ্লিকেশনকে সম্পূর্ণ বিনামূল্যে ব্যবহারযোগ্য করে'
        },
        {
          en: 'Field injection was deleted from the Java language completely',
          bn: 'জাভা ভাষা থেকে ফিল্ড ইনজেকশন সম্পূর্ণ মুছে ফেলা হয়েছে'
        },
        {
          en: 'It increases CPU clock speed by 20 percent',
          bn: 'এটি সিপিইউ ক্লক স্পিড ২০ শতাংশ বাড়িয়ে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Constructor injection enables final immutable fields and effortless test mocking.',
        bn: 'কনস্ট্রাক্টর ইনজেকশন final ফিল্ড এবং স্প্রিং ছাড়া সহজ টেস্টিং নিশ্চিত করে।'
      },
      explanation: {
        en: 'Constructor injection makes dependencies explicit, supports final immutability, and simplifies unit tests by passing mocks directly.',
        bn: 'নির্ভরতাগুলো স্পষ্ট হওয়ায় কনস্ট্রাক্টর ইনজেকশন কোডকে অনেক বেশি নির্ভরযোগ্য ও টেস্ট-বান্ধব করে তোলে।'
      }
    },
    {
      id: 'spring-43-single-constructor-autowired-omission-ex2',
      kind: 'mcq',
      topic: 'spring-43-autowired-omission',
      question: {
        en: 'Since Spring 4.3, under what condition can the @Autowired annotation be completely omitted from a class constructor?',
        bn: 'স্প্রিং ৪.৩ সংস্করণ থেকে কোন পরিস্থিতিতে ক্লাসের কনস্ট্রাক্টরের ওপর @Autowired অ্যানোটেশন লেখা সম্পূর্ণ ঐচ্ছিক?'
      },
      options: [
        {
          en: 'When the class declares exactly 1 constructor, Spring automatically autowires it by default',
          bn: 'যখন ক্লাসে অবিকল ১ টি কনস্ট্রাক্টর থাকে, তখন স্প্রিং নিজে থেকেই সেটিকে autowire করে নেয়'
        },
        {
          en: 'When the class contains more than 10 constructors',
          bn: 'যখন ক্লাসে ১০ টির বেশি কনস্ট্রাক্টর থাকে'
        },
        {
          en: 'Only when running on macOS computers',
          bn: 'শুধুমাত্র ম্যাক কম্পিউটারে চালানোর সময়'
        },
        {
          en: 'Autowired can never be omitted under any circumstance',
          bn: 'কোনো অবস্থাতেই Autowired বাদ দেওয়া যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'A single constructor is automatically autowired by Spring since version 4.3.',
        bn: 'স্প্রিং ৪.৩ থেকে একটি মাত্র কনস্ট্রাক্টর থাকলে স্প্রিং নিজে থেকেই তা চিনে নেয়।'
      },
      explanation: {
        en: 'Starting with Spring 4.3, if a bean has only 1 constructor, Spring implicitly treats it as @Autowired without requiring the annotation.',
        bn: 'একক কনস্ট্রাক্টরের ক্ষেত্রে @Autowired বাদ দেওয়া একটি পরিচ্ছন্ন কোডিং রীতি।'
      }
    },
    {
      id: 'qualifier-annotation-target-resolution-ex3',
      kind: 'mcq',
      topic: 'qualifier-annotation-disambiguation',
      question: {
        en: 'What error does Spring throw when multiple beans of the same type exist in the ApplicationContext without @Qualifier or @Primary to disambiguate?',
        bn: 'একই টাইপের একাধিক বিন থাকলে @Qualifier বা @Primary দ্বারা নির্দিষ্ট না করলে স্প্রিং কোন এররটি ছুড়ে দেয়?'
      },
      options: [
        { en: 'NoUniqueBeanDefinitionException', bn: 'NoUniqueBeanDefinitionException' },
        { en: 'NullPointerException', bn: 'NullPointerException' },
        { en: 'ClassNotFoundException', bn: 'ClassNotFoundException' },
        { en: 'OutOfMemoryError', bn: 'OutOfMemoryError' }
      ],
      answer: 0,
      hint: {
        en: 'Spring raises NoUniqueBeanDefinitionException when bean selection is ambiguous.',
        bn: 'একাধিক প্রার্থীর মধ্যে সঠিক বিন চিহ্নিত করতে না পারলে স্প্রিং NoUniqueBeanDefinitionException দেয়।'
      },
      explanation: {
        en: 'When multiple candidates match, Spring halts startup with NoUniqueBeanDefinitionException to avoid guessing ambiguous wiring.',
        bn: 'ভুল বিন ইনজেক্ট করা রোধ করতে স্প্রিং দ্বিধাদ্বন্দ্ব দেখা দিলেই NoUniqueBeanDefinitionException দিয়ে স্টার্টআপ থামিয়ে দেয়।'
      }
    },
    {
      id: 'primary-annotation-fallback-precedence-ex4',
      kind: 'mcq',
      topic: 'primary-annotation-precedence',
      question: {
        en: 'How does the @Primary annotation resolve multiple bean candidates in Spring?',
        bn: 'স্প্রিং-এ @Primary অ্যানোটেশন কীভাবে একাধিক বিনের মধ্য থেকে সঠিক বিন নির্বাচন করে?'
      },
      options: [
        {
          en: 'It designates one bean as the default choice whenever multiple candidates exist and no specific @Qualifier is provided',
          bn: 'এটি একটি নির্দিষ্ট বিনকে ডিফল্ট হিসেবে নির্ধারণ করে দেয়, যাতে কোনো @Qualifier না থাকলে স্বয়ক্রিয়ভাবে এটি নির্বাচিত হয়'
        },
        {
          en: 'It deletes all other competing beans from the compiled JAR file',
          bn: 'এটি কম্পাইল্ড JAR থেকে অন্যান্য প্রতিদ্বন্দ্বী বিনগুলোকে মুছে ফেলে'
        },
        {
          en: 'It converts the class into a primary key database column',
          bn: 'এটি ক্লাসটিকে ডেটাবেসের প্রাইমারি কি কলামে রূপান্তর করে'
        },
        {
          en: 'Primary only works on primitive integer variables',
          bn: 'Primary শুধুমাত্র প্রিমিটিভ পূর্ণসংখ্যা ভেরিয়েবলে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: '@Primary provides a default fallback when multiple candidates exist.',
        bn: '@Primary একাধিক প্রার্থীর মাঝে একটিকে ডিফল্ট অগ্রাধিকার প্রদান করে।'
      },
      explanation: {
        en: '@Primary establishes default preference among multiple matching beans without requiring @Qualifier at every injection point.',
        bn: 'প্রতিটি ইনজেকশন পয়েন্টে কোয়ালিফায়ার লেখার ঝামেলা এড়াতে @Primary দিয়ে ডিফল্ট পছন্দ ঠিক করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-dependency-injection',
    title: {
      en: 'Spring Dependency Injection & Qualifiers Mastery Quiz',
      bn: 'স্প্রিং ডিপেন্ডেন্সি ইনজেকশন এবং কোয়ালিফায়ার কুইজ'
    },
    questions: [
      {
        id: 'quiz-circular-dependency-resolution-lazy',
        kind: 'mcq',
        topic: 'circular-dependency-lazy-annotation',
        question: {
          en: 'What causes a BeanCurrentlyInCreationException in Spring and which annotation provides a workaround by breaking construction cycles with a dynamic proxy?',
          bn: 'স্প্রিং-এ BeanCurrentlyInCreationException ঘটার কারণ কী এবং ডায়নামিক প্রক্সি দিয়ে এই চক্রাকার নির্ভরতা এড়াতে কোন অ্যানোটেশনটি ব্যবহার করা যায়?'
        },
        options: [
          {
            en: 'It is caused by circular dependencies where Bean A requires Bean B and Bean B requires Bean A; @Lazy breaks the cycle by injecting a proxy that resolves the bean on first call',
            bn: 'এটি ঘটে চক্রাকার নির্ভরতার কারণে যেখানে Bean A চায় Bean B কে এবং Bean B চায় Bean A কে; @Lazy একটি প্রক্সি ইনজেক্ট করে প্রথম কলের সময় বিন লোড করে এই চক্র ভেঙে দেয়'
          },
          {
            en: 'It is caused by having more than 5 methods in a class; resolved with @Skip',
            bn: 'ক্লাসে ৫ টির বেশি মেথড থাকলে এটি ঘটে; @Skip দিয়ে সমাধান করা হয়'
          },
          {
            en: 'It is caused by empty comments in Java source files',
            bn: 'সোর্স ফাইলে খালি কমেন্ট থাকলে এটি ঘটে'
          },
          {
            en: 'Circular dependencies are completely impossible in Java',
            bn: 'জাভাতে চক্রাকার নির্ভরতা ঘটা সম্পূর্ণ অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: '@Lazy defers actual bean resolution by injecting a lazy proxy.',
          bn: '@Lazy একটি লেজি প্রক্সি বসিয়ে তাৎক্ষণিক নির্ভরতার চক্রটি ভেঙে দেয়।'
        },
        explanation: {
          en: 'Circular constructor injection causes startup failure. @Lazy breaks the construction cycle by injecting an on-demand proxy.',
          bn: 'সার্কুলার নির্ভরতা থাকলে কন্টেইনার স্টার্টআপ ক্র্যাশ করে; @Lazy প্রক্সি ইনজেক্ট করে এই সমস্যা সাময়িক দূর করতে পারে।'
        }
      },
      {
        id: 'quiz-value-annotation-property-injection',
        kind: 'mcq',
        topic: 'value-annotation-default-fallback',
        question: {
          en: 'What does the syntax \'@Value("${app.timeout:5000}")\' accomplish when injected into a Spring bean field or constructor parameter?',
          bn: 'স্প্রিং বিনে \'@Value("${app.timeout:5000}")\' সিনট্যাক্সটি ঠিক কী কাজ সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It injects the configuration property "app.timeout" from application.yml/properties, falling back to 5000 if the property is not defined',
            bn: 'এটি application.yml/properties থেকে "app.timeout" প্রোপার্টির মান ইনজেক্ট করে, আর মান সংজ্ঞায়িত না থাকলে ডিফল্ট হিসেবে ৫০০০ বসায়'
          },
          {
            en: 'It pauses the application for 5000 seconds on launch',
            bn: 'এটি চালু হওয়ার সময় অ্যাপ্লিকেশনটিকে ৫০০০ সেকেন্ডের জন্য থামিয়ে রাখে'
          },
          {
            en: 'It deletes 5000 records from the database',
            bn: 'এটি ডেটাবেস থেকে ৫০০০ টি রেকর্ড মুছে ফেলে'
          },
          {
            en: 'The colon syntax is a compilation syntax error in Spring',
            bn: 'কোলন সিনট্যাক্সটি স্প্রিং-এ একটি ভুল কম্পাইল এরর'
          }
        ],
        answer: 0,
        hint: {
          en: 'The colon (:) denotes a default fallback value in Spring SpEL expressions.',
          bn: 'স্প্রিং এক্সপ্রেশনে কোলন (:) চিহ্নটি ডিফল্ট ফলব্যাক মান নির্দেশ করে।'
        },
        explanation: {
          en: '@Value("${key:fallback}") reads external configuration properties while providing a safe default if missing.',
          bn: 'এই সিনট্যাক্সটি কনফিগারেশন থেকে মান পড়ে এবং অনুপস্থিত থাকলে ডিফল্ট মান বসিয়ে ক্র্যাশ হওয়া প্রতিরোধ করে।'
        }
      },
      {
        id: 'quiz-setter-injection-vs-constructor-injection',
        kind: 'mcq',
        topic: 'setter-injection-use-cases',
        question: {
          en: 'In which specific scenario might Setter Injection be justifiable over Constructor Injection in Spring?',
          bn: 'স্প্রিং-এ কোন বিশেষ পরিস্থিতিতে কনস্ট্রাক্টর ইনজেকশনের চেয়ে সেটার (Setter) ইনজেকশন বেশি গ্রহণযোগ্য হতে পারে?'
        },
        options: [
          {
            en: 'For truly optional dependencies that have sensible defaults, allowing the bean to function normally even if the dependency is not provided',
            bn: 'সম্পূর্ণ ঐচ্ছিক ডিপেন্ডেন্সির ক্ষেত্রে যাদের যুক্তিসঙ্গত ডিফল্ট মান আছে, যাতে ডিপেন্ডেন্সি না দিলেও বিনটি স্বাভাবিক কাজ চালাতে পারে'
          },
          {
            en: 'Setter injection makes database queries run 10 times faster',
            bn: 'সেটার ইনজেকশন ডেটাবেস কুয়েরিকে ১০ গুণ দ্রুত চালায়'
          },
          {
            en: 'Whenever a class has more than 2 methods',
            bn: 'যখন কোনো ক্লাসে ২ টির বেশি মেথড থাকে'
          },
          {
            en: 'Setter injection is required for all singleton beans',
            bn: 'সমস্ত সিঙ্গলটন বিনের জন্য সেটার ইনজেকশন আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Setter injection is suitable only for optional dependencies with safe fallbacks.',
          bn: 'কেবলমাত্র ঐচ্ছিক নির্ভরতার জন্য সেটার ইনজেকশন উপযোগী যেখানে বিকল্প মান থাকে।'
        },
        explanation: {
          en: 'Mandatory dependencies should always use constructor injection. Setter injection is reserved for optional, re-configurable properties.',
          bn: 'বাধ্যতামূলক ডিপেন্ডেন্সিতে কনস্ট্রাক্টর ইনজেকশন ব্যবহার করা উচিত; সেটার কেবল ঐচ্ছিক ফিচারের জন্য প্রযোজ্য।'
        }
      },
      {
        id: 'quiz-custom-qualifier-annotation-pattern',
        kind: 'mcq',
        topic: 'custom-qualifier-annotations',
        question: {
          en: 'How can enterprise development teams avoid string typo bugs when using @Qualifier with bean names like "stripeGateway"?',
          bn: 'এন্টারপ্রাইজ সিস্টেমে "stripeGateway" এর মতো স্ট্রিং টাইপো ভুল এড়াতে ডেভেলপাররা কীভাবে @Qualifier ব্যবহার করেন?'
        },
        options: [
          {
            en: 'By creating custom annotations meta-annotated with @Qualifier (such as @StripePayment), providing strong compile-time type safety instead of raw string literals',
            bn: '@Qualifier দিয়ে মেটা-অ্যানোটেট করা নিজস্ব কাস্টম অ্যানোটেশন (যেমন @StripePayment) তৈরি করে, যা কাঁচা স্ট্রিং লেখার বদলে টাইপ-সেফ কোড দেয়'
          },
          {
            en: 'By disabling all qualifiers in the application.yml file',
            bn: 'application.yml ফাইল থেকে সব কোয়ালিফায়ার বন্ধ করে দিয়ে'
          },
          {
            en: 'By making all beans static variables',
            bn: 'সব বিনকে স্ট্যাটিক ভেরিয়েবল বানিয়ে'
          },
          {
            en: 'String typos are impossible in Java programming',
            bn: 'জাভা প্রোগ্রামিংয়ে স্ট্রিং টাইপো হওয়া অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Meta-annotating a custom annotation with @Qualifier creates a type-safe qualifier.',
          bn: '@Qualifier দিয়ে নিজস্ব অ্যানোটেশন বানালে স্ট্রিং বানান ভুলের কোনো ভয় থাকে না।'
        },
        explanation: {
          en: 'Custom qualifier annotations eliminate fragile string literals and provide IDE autocomplete and compile-time verification.',
          bn: 'কাস্টম কোয়ালিফায়ার অ্যানোটেশন কোডবেসকে স্ট্রিং বানান ভুলের হাত থেকে শতভাগ সুরক্ষা দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'spring-mvc-and-the-controller',
    title: {
      en: 'Spring MVC, RestControllers & Validation',
      bn: 'স্প্রিং MVC, RestControllers এবং ভ্যালিডেশন'
    }
  }
};
