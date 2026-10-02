import type { Lesson } from '../../../lib/types';

export const TheBeanAndTheContextLesson: Lesson = {
  slug: 'the-bean-and-the-context',
  tech: 'spring',
  title: {
    en: 'Your First Beans: ApplicationContext & Scopes',
    bn: 'আপনার প্রথম বিন: ApplicationContext এবং স্কোপ'
  },
  summary: {
    en: 'Beginner to advanced foundation of the Spring IoC container: understand how the ApplicationContext discovers beans via @ComponentScan, manage the 5 stages of the bean lifecycle (@PostConstruct to @PreDestroy), and configure Singleton versus Prototype scopes.',
    bn: 'স্প্রিং IoC কন্টেইনারের প্রাথমিক থেকে উন্নত ভিত্তি: @ComponentScan দিয়ে কীভাবে ApplicationContext বিন আবিষ্কার করে, বিন লাইফসাইকেলের ৫ টি পর্যায় (@PostConstruct থেকে @PreDestroy) এবং সিঙ্গলটন বনাম প্রোটোটাইপ স্কোপ কনফিগারেশন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'ioc-container-and-bean-lifecycle-heading',
      text: {
        en: 'The Inversion of Control Container and 5-Stage Bean Lifecycle',
        bn: 'ইনভার্সন অব কন্ট্রোল কন্টেইনার এবং বিন লাইফসাইকেলের ৫ টি ধাপ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In traditional programming, application code directly instantiates its own dependencies using the "new" operator. The Spring Framework flips this responsibility through Inversion of Control (IoC). In Spring, an ApplicationContext acts as the central IoC container that instantiates, configures, and assembles objects known as Beans. When the application launches, Spring executes 5 distinct lifecycle stages. First, @ComponentScan scans packages and registers BeanDefinitions. Second, the container instantiates the bean via its constructor. Third, Spring injects all required dependencies. Fourth, initialization callbacks like @PostConstruct run. Fifth, when the application shuts down, @PreDestroy callbacks release open resources.',
        bn: 'সনাতন প্রোগ্রামিংয়ে সাধারণ কোড "new" অপারেটর ব্যবহার করে সরাসরি নিজস্ব অবজেক্ট বা ডিপেন্ডেন্সি তৈরি করে। স্প্রিং ফ্রেমওয়ার্ক ইনভার্সন অব কন্ট্রোল (IoC) এর মাধ্যমে এই দায়িত্ব নিজের কাঁধে তুলে নেয়। স্প্রিং-এ ApplicationContext একটি কেন্দ্রীয় IoC কন্টেইনার হিসেবে কাজ করে যা অবজেক্টগুলোকে (যাদের Beans বলা হয়) তৈরি, কনফিগার এবং পরিচালনা করে। অ্যাপ্লিকেশন চালু হলে স্প্রিং সুনির্দিষ্ট ৫ টি লাইফসাইকেল ধাপ সম্পন্ন করে। প্রথমত, @ComponentScan প্যাকেজ স্ক্যান করে BeanDefinition রেজিস্টার করে। দ্বিতীয়ত, কন্টেইনার কনস্ট্রাক্টরের মাধ্যমে বিন তৈরি করে। তৃতীয়ত, স্প্রিং প্রয়োজনীয় সব ডিপেন্ডেন্সি ইনজেক্ট করে। চতুর্থত, @PostConstruct এর মতো ইনিশিয়ালাইজেশন মেথড চলে। পঞ্চমত, অ্যাপ্লিকেশন বন্ধ হওয়ার সময় @PreDestroy মেথড ডেকে সমস্ত রিসোর্স মুক্ত করে দেওয়া হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of a Spring Bean inside the ApplicationContext: From component scanning and dependency wiring to initialization and container teardown.',
        bn: 'চিত্র ১: ApplicationContext এর ভেতর একটি স্প্রিং বিনের লাইফসাইকেল রূপরেখা: কম্পোনেন্ট স্ক্যানিং ও ডিপেন্ডেন্সি ইনজেকশন থেকে শুরু করে ইনিশিয়ালাইজেশন ও বন্ধ হওয়া পর্যন্ত।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING BEAN LIFECYCLE &amp; APPLICATIONCONTEXT CONTAINER</text>

  <!-- Step 1: Component Scanning -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Component Scan</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">@ComponentScan</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Finds @Component</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">BeanDefinition Map</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Metadata Registry</text>
  </g>

  <!-- Step 2: Instantiation & Injection -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Creation &amp; Wiring</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Constructor Called</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">new OrderService(...)</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Injects Dependencies</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">IoC Dependency Wiring</text>
  </g>

  <!-- Step 3: Initialization Callbacks -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Initialization</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">@PostConstruct</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Pre-warms Connections</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Bean Ready for Use</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Active Context Service</text>
  </g>

  <!-- Step 4: Teardown & Destruction -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Destruction</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">@PreDestroy Hook</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Closes TCP Sockets</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Container Close</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Zero Memory Leak</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'bean-scopes-singleton-vs-prototype-heading',
      text: {
        en: 'Bean Scopes: Singleton Registry versus Prototype Factories',
        bn: 'বিন স্কোপ: সিঙ্গলটন রেজিস্ট্রি বনাম প্রোটোটাইপ ফ্যাক্টরি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'By default, Spring configures every bean with the "singleton" scope. In a singleton scope, the ApplicationContext creates exactly 1 shared instance of the bean per container and caches it in an internal registry. Every component requesting that bean receives a pointer to this identical shared instance, necessitating that singleton beans remain stateless and thread-safe. Conversely, setting "@Scope(\'prototype\')" commands the container to instantiate a brand-new bean instance every time it is injected or requested via getBean(). Notice that Spring does not manage the full destruction lifecycle for prototype beans; clients must clean up prototype resources manually.',
        bn: 'ডিফল্টভাবে স্প্রিং প্রতিটি বিনকে "singleton" স্কোপে তৈরি করে। সিঙ্গলটন স্কোপে ApplicationContext পুরো অ্যাপ্লিকেশনে একটি মাত্র অবজেক্ট তৈরি করে এবং নিজের ক্যাশ রেজিস্ট্রিতে সংরক্ষণ করে রাখে। যখনই কোনো সার্ভিস বা কন্ট্রোলার এই বিনটি চায়, তখন অবিকল একই শেয়ার্ড রেফারেন্স পয়েন্টার দেওয়া হয়। এজন্য সিঙ্গলটন বিনগুলোকে সর্বদা স্টেটলেস এবং থ্রেড-সেফ রাখতে হয়। অপরপক্ষে "@Scope(\'prototype\')" ঘোষণা করলে প্রতিবার ইনজেক্ট বা getBean() কল করার সাথে সাথে স্প্রিং একটি সম্পূর্ণ নতুন অবজেক্ট তৈরি করে দেয়। মনে রাখবেন, প্রোটোটাইপ বিনের কাজ শেষ হলে স্প্রিং কিন্তু @PreDestroy চালায় না; ক্লায়েন্টকেই নিজে থেকে প্রোটোটাইপের রিসোর্স বন্ধ করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Spring ApplicationContext bean registry, singleton caching, prototype instantiation, and lifecycle hooks.',
        bn: 'স্প্রিং ApplicationContext বিন রেজিস্ট্রি, সিঙ্গলটন ক্যাশিং, প্রোটোটাইপ তৈরি এবং লাইফসাইকেল হুকের TypeScript বাস্তবায়ন।'
      },
      code: `// Simulation of Spring ApplicationContext and Bean Lifecycle Container

export interface BeanDefinition {
  name: string;
  scope: 'singleton' | 'prototype';
  factory: () => any;
  postConstruct?: (instance: any) => void;
  preDestroy?: (instance: any) => void;
}

export class ApplicationContextSimulator {
  private definitions: Map<string, BeanDefinition> = new Map();
  private singletonRegistry: Map<string, any> = new Map();

  public registerBean(def: BeanDefinition): void {
    this.definitions.set(def.name, def);
    // Eagerly pre-instantiate singletons at startup
    if (def.scope === 'singleton') {
      const instance = def.factory();
      if (def.postConstruct) def.postConstruct(instance);
      this.singletonRegistry.set(def.name, instance);
    }
  }

  public getBean<T>(name: string): T {
    const def = this.definitions.get(name);
    if (!def) throw new Error('NoSuchBeanDefinitionException: ' + name);

    if (def.scope === 'singleton') {
      return this.singletonRegistry.get(name) as T;
    }

    // Prototype: fresh instance on every getBean() call
    const instance = def.factory();
    if (def.postConstruct) def.postConstruct(instance);
    return instance as T;
  }

  public close(): void {
    console.log('[ApplicationContext] Container shutting down...');
    for (const [name, instance] of this.singletonRegistry.entries()) {
      const def = this.definitions.get(name);
      if (def?.preDestroy) def.preDestroy(instance);
    }
    this.singletonRegistry.clear();
  }
}

// Execution demonstration
const context = new ApplicationContextSimulator();

// Registering a Singleton Bean
context.registerBean({
  name: 'orderService',
  scope: 'singleton',
  factory: () => ({ serviceId: 101, type: 'payment' }),
  postConstruct: (inst) => console.log('[PostConstruct] Initialized bean:', inst.serviceId)
});

// Registering a Prototype Bean
context.registerBean({
  name: 'shoppingCart',
  scope: 'prototype',
  factory: () => ({ cartId: Math.floor(Math.random() * 1000) })
});

const service1 = context.getBean<{ serviceId: number }>('orderService');
const service2 = context.getBean<{ serviceId: number }>('orderService');
console.log('Singleton Instances Match:', service1 === service2); // true

const cart1 = context.getBean('shoppingCart');
const cart2 = context.getBean('shoppingCart');
console.log('Prototype Instances Distinct:', cart1 !== cart2); // true
context.close();`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ApplicationContext',
          def: {
            en: 'The central Spring IoC container interface providing bean lifecycle management and dependency configuration.',
            bn: 'স্প্রিং ফ্রেমওয়ার্কের মূল IoC কন্টেইনার যা বিন তৈরি, লাইফসাইকেল এবং কনফিগারেশন নিয়ন্ত্রণ করে।'
          }
        },
        {
          term: 'Spring Bean',
          def: {
            en: 'An object instantiated, wired, and managed by the Spring IoC container rather than manual application code.',
            bn: 'একটি অবজেক্ট যা সাধারণ কোডের বদলে সরাসরি স্প্রিং কন্টেইনার দ্বারা তৈরি ও পরিচালিত হয়।'
          }
        },
        {
          term: 'Singleton Scope',
          def: {
            en: 'Default Spring bean scope providing exactly 1 shared instance across the entire ApplicationContext.',
            bn: 'স্প্রিংয়ের ডিফল্ট স্কোপ যা পুরো অ্যাপ্লিকেশনে কেবল ১ টি শেয়ার্ড ইনস্ট্যান্স তৈরি ও ক্যাশ করে।'
          }
        },
        {
          term: 'Prototype Scope',
          def: {
            en: 'Bean scope instructing the container to create a new instance on every injection or getBean invocation.',
            bn: 'বিন স্কোপ যা প্রতিবার কল বা ইনজেকশনের সাথে সাথে একটি সম্পূর্ণ নতুন ইনস্ট্যান্স তৈরি করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'default-spring-bean-scope-ex1',
      kind: 'mcq',
      topic: 'spring-default-bean-scope-singleton',
      question: {
        en: 'What is the default bean scope in the Spring Framework when no explicit @Scope annotation is declared?',
        bn: 'কোনো সুনির্দিষ্ট @Scope অ্যানোটেশন ঘোষণা না থাকলে স্প্রিং ফ্রেমওয়ার্কে ডিফল্ট বিন স্কোপ কোনটি থাকে?'
      },
      options: [
        { en: 'singleton (exactly 1 shared instance per container)', bn: 'singleton (কন্টেইনার প্রতি অবিকল ১ টি শেয়ার্ড অবজেক্ট)' },
        { en: 'prototype (fresh instance on every call)', bn: 'prototype (প্রতিবার নতুন অবজেক্ট)' },
        { en: 'request (per HTTP request)', bn: 'request (প্রতি এইচটিটিপি রিকোয়েস্টে)' },
        { en: 'session (per user session)', bn: 'session (প্রতি ইউজার সেশনে)' }
      ],
      answer: 0,
      hint: {
        en: 'Spring defaults to singleton to optimize memory and startup speed.',
        bn: 'মেমোরি বাঁচাতে ও গতি বাড়াতে স্প্রিং ডিফল্টভাবে singleton স্কোপ ব্যবহার করে।'
      },
      explanation: {
        en: 'Unless explicitly specified with @Scope("prototype"), all Spring beans are created as singletons by default.',
        bn: 'আলাদা করে উল্লেখ না থাকলে স্প্রিং-এর সমস্ত বিন নিজে থেকেই সিঙ্গলটন হিসেবে তৈরি হয়।'
      }
    },
    {
      id: 'bean-lifecycle-postconstruct-timing-ex2',
      kind: 'mcq',
      topic: 'bean-lifecycle-postconstruct-annotation',
      question: {
        en: 'When does a method annotated with @PostConstruct execute during the Spring bean lifecycle?',
        bn: 'স্প্রিং বিন লাইফসাইকেলে @PostConstruct চিহ্নিত মেথডটি ঠিক কখন কার্যকর হয়?'
      },
      options: [
        {
          en: 'Immediately after the constructor runs and all dependencies have been injected into the bean',
          bn: 'কনস্ট্রাক্টর চলার এবং সমস্ত ডিপেন্ডেন্সি ইনজেক্ট হওয়ার পরপরই'
        },
        {
          en: 'Before the class bytecode is loaded into JVM memory',
          bn: 'ক্লাস বাইটকোড মেমোরিতে লোড হওয়ার পূর্বে'
        },
        {
          en: 'Only when an unhandled exception crashes the server',
          bn: 'সার্ভার ক্র্যাশ করার সময়'
        },
        {
          en: 'After the ApplicationContext has been completely closed',
          bn: 'ApplicationContext বন্ধ হয়ে যাওয়ার পর'
        }
      ],
      answer: 0,
      hint: {
        en: 'PostConstruct runs right after dependencies are populated.',
        bn: 'সব ফিল্ডে ডেটা ইনজেক্ট হওয়ার সাথে সাথেই PostConstruct চলে।'
      },
      explanation: {
        en: '@PostConstruct executes after dependency injection completes, allowing safe initialization requiring injected beans.',
        bn: 'ডিপেন্ডেন্সি প্রস্তুত হওয়ার পর অবজেক্টের প্রাথমিক প্রস্তুতি সম্পন্ন করতে @PostConstruct ব্যবহৃত হয়।'
      }
    },
    {
      id: 'component-scan-stereotype-subtypes-ex3',
      kind: 'mcq',
      topic: 'component-scan-stereotypes',
      question: {
        en: 'Which of the following annotations is a specialized stereotype that inherits from @Component and is detected by @ComponentScan?',
        bn: 'নিচের কোন অ্যানোটেশনটি @Component এর একটি বিশেষ রূপ যা @ComponentScan স্বয়ংক্রিয়ভাবে শনাক্ত করে?'
      },
      options: [
        { en: '@Service, @Repository, and @Controller', bn: '@Service, @Repository, এবং @Controller' },
        { en: '@Transient only', bn: 'শুধুমাত্র @Transient' },
        { en: '@Override', bn: '@Override' },
        { en: '@Deprecated', bn: '@Deprecated' }
      ],
      answer: 0,
      hint: {
        en: 'Spring provides layer-specific stereotypes that are meta-annotated with @Component.',
        bn: 'লেয়ার অনুযায়ী সুনির্দিষ্ট কাজের জন্য @Component এর বিশেষায়িত রূপগুলো হলো @Service, @Repository ও @Controller।'
      },
      explanation: {
        en: '@Service, @Repository, and @Controller are meta-annotated with @Component, registering beans while signaling architectural intent.',
        bn: 'এই অ্যানোটেশনগুলো স্প্রিং কন্টেইনারকে বিন নিবন্ধনের পাশাপাশি আর্কিটেকচারাল ভূমিকাও জানিয়ে দেয়।'
      }
    },
    {
      id: 'prototype-destruction-lifecycle-contract-ex4',
      kind: 'mcq',
      topic: 'prototype-scope-destruction-lifecycle',
      question: {
        en: 'Why does the Spring container NOT execute @PreDestroy callback methods on prototype-scoped beans during application shutdown?',
        bn: 'অ্যাপ্লিকেশন বন্ধ হওয়ার সময় স্প্রিং কন্টেইনার প্রোটোটাইপ স্কোপযুক্ত বিনে @PreDestroy মেথড কার্যকর করে না কেন?'
      },
      options: [
        {
          en: 'Because Spring creates and hands over prototype instances to clients without retaining references, so clients are responsible for cleaning them up',
          bn: 'কারণ স্প্রিং প্রোটোটাইপ অবজেক্ট তৈরি করে ক্লায়েন্টকে হস্তান্তর করে নিজের কাছে কোনো রেফারেন্স রাখে না, ফলে ক্লায়েন্টকেই তা বন্ধ করতে হয়'
        },
        {
          en: 'Because prototype beans never allocate any memory',
          bn: 'কারণ প্রোটোটাইপ বিন কোনো মেমোরি খরচ করে না'
        },
        {
          en: 'Because @PreDestroy was removed from Java in version 8',
          bn: 'কারণ জাভা ৮ এ @PreDestroy মুছে ফেলা হয়েছে'
        },
        {
          en: 'Because prototype beans can only run for 1 second',
          bn: 'কারণ প্রোটোটাইপ বিন কেবল ১ সেকেন্ডের জন্য চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Spring does not retain references to prototype instances after instantiation.',
        bn: 'স্প্রিং প্রোটোটাইপ অবজেক্ট নিজের কাছে ধরে রাখে না; ক্লায়েন্টকেই এর দেখভাল করতে হয়।'
      },
      explanation: {
        en: 'Spring manages the full lifecycle of singletons, but only instantiates and wires prototypes, delegating destruction to the caller.',
        bn: 'সিঙ্গলটনের সম্পূর্ণ লাইফসাইকেল স্প্রিং চালালেও প্রোটোটাইপের সমাপ্তি ক্লায়েন্টের ওপর ছেড়ে দেওয়া হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-bean-and-the-context',
    title: {
      en: 'Spring ApplicationContext & Bean Lifecycle Mastery Quiz',
      bn: 'স্প্রিং ApplicationContext এবং বিন লাইফসাইকেল কুইজ'
    },
    questions: [
      {
        id: 'quiz-beanpostprocessor-mechanism',
        kind: 'mcq',
        topic: 'beanpostprocessor-extension-mechanism',
        question: {
          en: 'What is the role of a BeanPostProcessor in the Spring Framework container initialization pipeline?',
          bn: 'স্প্রিং ফ্রেমওয়ার্ক কন্টেইনারে BeanPostProcessor এর মূল ভূমিকা কী?'
        },
        options: [
          {
            en: 'It intercepts bean initialization to modify instances, wrap beans in dynamic proxies (for @Transactional and security), or process custom annotations',
            bn: 'এটি বিন ইনিশিয়ালাইজেশনের সময় অবজেক্টকে পরিবর্তন করতে, ডায়নামিক প্রক্সিতে মুড়ে দিতে (যেমন @Transactional ও সিকিউরিটি) বা কাস্টম অ্যানোটেশন প্রসেস করতে কাজ করে'
          },
          {
            en: 'It deletes uncalled methods from Java bytecode',
            bn: 'এটি বাইটকোড থেকে অপ্রয়োজনীয় মেথড মুছে ফেলে'
          },
          {
            en: 'It converts Spring applications into Python scripts',
            bn: 'এটি স্প্রিং অ্যাপ্লিকেশনকে পাইথন স্ক্রিপ্টে রূপান্তর করে'
          },
          {
            en: 'It restarts the computer hardware',
            bn: 'এটি কম্পিউটার হার্ডওয়্যার রিস্টার্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'BeanPostProcessors wrap beans in proxies to power AOP features like transactions.',
          bn: 'BeanPostProcessor বিনকে প্রক্সিতে রূপান্তর করে লেনদেন বা নিরাপত্তার মতো AOP ফিচার যুক্ত করে।'
        },
        explanation: {
          en: 'BeanPostProcessor allows custom modification before and after initialization, powering AOP proxies and annotation processing.',
          bn: 'এটি বিন তৈরি হওয়ার সময় ডায়নামিক প্রক্সি যুক্ত করে স্প্রিংয়ের শক্তিশালী ফিচারগুলো কার্যকর করে।'
        }
      },
      {
        id: 'quiz-beanfactory-vs-applicationcontext',
        kind: 'mcq',
        topic: 'beanfactory-vs-applicationcontext-distinction',
        question: {
          en: 'What is the primary architectural difference between BeanFactory and ApplicationContext in Spring?',
          bn: 'স্প্রিং-এ BeanFactory এবং ApplicationContext এর মধ্যকার মূল স্থাপত্যগত পার্থক্য কী?'
        },
        options: [
          {
            en: 'BeanFactory provides basic lazy bean instantiation, while ApplicationContext extends BeanFactory with eager singleton pre-instantiation, event publishing, and AOP integration',
            bn: 'BeanFactory কেবল মৌলিক অলস (lazy) অবজেক্ট তৈরি করে, আর ApplicationContext এর সাথে আগাম সিঙ্গলটন তৈরি, ইভেন্ট পাবলিশিং এবং AOP ইন্টিগ্রেশন যুক্ত করে'
          },
          {
            en: 'BeanFactory is written in C++ while ApplicationContext is written in Java',
            bn: 'BeanFactory সি++ এ লেখা আর ApplicationContext জাভাতে লেখা'
          },
          {
            en: 'BeanFactory only works on 32-bit hardware',
            bn: 'BeanFactory কেবল ৩২-বিট হার্ডওয়্যারে চলে'
          },
          {
            en: 'There is zero difference between BeanFactory and ApplicationContext',
            bn: 'BeanFactory এবং ApplicationContext এর মধ্যে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'ApplicationContext is the complete enterprise superset of BeanFactory.',
          bn: 'ApplicationContext হলো BeanFactory এর একটি পূর্ণাঙ্গ এন্টারপ্রাইজ রূপ।'
        },
        explanation: {
          en: 'ApplicationContext extends BeanFactory with enterprise features: eager singleton startup, internationalization, and declarative events.',
          bn: 'এন্টারপ্রাইজ ফিচারের সুবিধার কারণে আধুনিক স্প্রিং অ্যাপ্লিকেশনে সর্বদা ApplicationContext ব্যবহৃত হয়।'
        }
      },
      {
        id: 'quiz-singleton-thread-safety-guideline',
        kind: 'mcq',
        topic: 'singleton-stateless-thread-safety',
        question: {
          en: 'Why must developers never store mutable request-specific state in instance fields of a singleton-scoped Spring service bean?',
          bn: 'সিঙ্গলটন-স্কোপের স্প্রিং সার্ভিস বিনের ফিল্ডে পরিবর্তনশীল রিকোয়েস্ট ডেটা সংরক্ষণ করা কেন কঠোরভাবে নিষিদ্ধ?'
        },
        options: [
          {
            en: 'Because a singleton bean is shared concurrently across all incoming HTTP threads; mutable instance fields cause critical race conditions and cross-user data leakage',
            bn: 'কারণ একটি সিঙ্গলটন বিন সমস্ত এইচটিটিপি থ্রেডের মধ্যে শেয়ার করা থাকে; সেখানে পরিবর্তনশীল ফিল্ড রাখলে রেস কন্ডিশন ঘটবে এবং এক ইউজারের ডেটা অন্য ইউজারে চলে যাবে'
          },
          {
            en: 'Because storing data in fields increases hard drive wear',
            bn: 'কারণ ফিল্ডে ডেটা রাখলে হার্ড ড্রাইভ নষ্ট হয়'
          },
          {
            en: 'Because Java forbids fields inside service classes',
            bn: 'কারণ জাভাতে সার্ভিস ক্লাসে ফিল্ড রাখা নিষিদ্ধ'
          },
          {
            en: 'It triggers an immediate OutOfMemoryError at startup',
            bn: 'এটি চালু হওয়ার সাথে সাথে OutOfMemoryError ঘটায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Shared singletons are accessed by multiple threads simultaneously.',
          bn: 'সিঙ্গলটন অবজেক্ট একসাথে বহু থ্রেড ব্যবহার করে, তাই একে স্টেটলেস রাখা বাধ্যতামূলক।'
        },
        explanation: {
          en: 'Singletons serve concurrent requests. Mutable instance state leads to race conditions and security leaks; pass state via method parameters.',
          bn: 'থ্রেড সেফটি বজায় রাখতে সিঙ্গলটন বিনকে সর্বদা স্টেটলেস রাখা উচিত এবং ডেটা মেথড প্যারামিটারে পাস করা শ্রেয়।'
        }
      },
      {
        id: 'quiz-configuration-annotation-cglib-proxy',
        kind: 'mcq',
        topic: 'configuration-proxy-bean-methods-cglib',
        question: {
          en: 'Why does Spring wrap classes annotated with @Configuration in a CGLIB proxy by default?',
          bn: 'স্প্রিং ডিফল্টভাবে @Configuration চিহ্নিত ক্লাসকে CGLIB প্রক্সিতে কেন মুড়ে ফেলে?'
        },
        options: [
          {
            en: 'To intercept inter-bean method calls so that invoking "@Bean public Engine engine()" multiple times returns the cached singleton rather than instantiating duplicates',
            bn: 'একটি বিন মেথড থেকে অন্য বিন মেথড ডাকার সময় তা ইন্টারসেপ্ট করতে, যাতে বারবার নতুন অবজেক্ট তৈরি না হয়ে ক্যাশ করা সিঙ্গলটন ফেরত আসে'
          },
          {
            en: 'To encrypt the Java class file on the hard drive',
            bn: 'হার্ড ড্রাইভে জাভা ক্লাস ফাইল এনক্রিপ্ট করার জন্য'
          },
          {
            en: 'To make all configuration classes run 10 times slower',
            bn: 'কনফিগারেশন ক্লাসকে ১০ গুণ ধীরগতির করার জন্য'
          },
          {
            en: 'CGLIB proxies are required by the Linux operating system',
            bn: 'লিনাক্স সিস্টেমে চালানোর জন্য CGLIB প্রক্সি আবশ্যক'
          }
        ],
        answer: 0,
        hint: {
          en: 'CGLIB proxies intercept @Bean method calls to enforce singleton semantics.',
          bn: 'CGLIB প্রক্সি নিশ্চিত করে যে @Bean মেথড একাধিকবার কল করলেও একই সিঙ্গলটন অবজেক্ট পাওয়া যায়।'
        },
        explanation: {
          en: '@Configuration classes are proxied with CGLIB so direct method calls between @Bean methods return the managed singleton instance.',
          bn: 'প্রক্সি মেকানিজমের কারণে কনফিগারেশনের ভেতর মেথড কল করলেও সিঙ্গলটনের অখণ্ডতা অক্ষুণ্ণ থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'dependency-injection',
    title: {
      en: 'Dependency Injection, Qualifiers & Primary Beans',
      bn: 'ডিপেন্ডেন্সি ইনজেকশন, কোয়ালিফায়ার এবং প্রাইমারি বিন'
    }
  }
};
