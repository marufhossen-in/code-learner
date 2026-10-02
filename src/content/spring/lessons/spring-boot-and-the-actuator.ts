import type { Lesson } from '../../../lib/types';

export const SpringBootAndTheActuatorLesson: Lesson = {
  slug: 'spring-boot-and-the-actuator',
  tech: 'spring',
  title: {
    en: 'Spring Boot, Auto-Configuration & Actuator Metrics',
    bn: 'স্প্রিং বুট, অটো-কনফিগারেশন এবং অ্যাকচুয়েটর মেট্রিক্স'
  },
  summary: {
    en: 'Master the opinionated productivity of Spring Boot: demystify @SpringBootApplication and conditional auto-configuration (@ConditionalOnClass, @ConditionalOnMissingBean), manage externalized application.yml profiles, and monitor production microservice telemetry using Spring Boot Actuator endpoints (/actuator/health, metrics, Prometheus).',
    bn: 'স্প্রিং বুটের শক্তিশালী প্রোডাক্টিভিটি আয়ত্ত করুন: @SpringBootApplication এবং শর্তযুক্ত অটো-কনফিগারেশনের অভ্যন্তরীণ মেকানিজম, application.yml প্রোফাইল ম্যানেজমেন্ট এবং স্প্রিং বুট অ্যাকচুয়েটর (/actuator/health, মেট্রিক্স, প্রমিথিউস) দিয়ে প্রোডাকশন টেলিমেট্রি পর্যবেক্ষণ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'springbootapplication-and-auto-config-heading',
      text: {
        en: 'The Anatomy of @SpringBootApplication and Conditional Auto-Configuration',
        bn: '@SpringBootApplication এর গঠন এবং শর্তযুক্ত অটো-কনফিগারেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Spring Boot revolutionized enterprise Java development through "convention-over-configuration". Instead of hundreds of lines of XML setup, developers use simple starter dependencies. The main entry point is the @SpringBootApplication meta-annotation. It unifies 3 core directives: @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan. Under the hood, Spring Boot evaluates conditional annotations. For instance, @ConditionalOnClass configures infrastructure when target libraries exist on the classpath. Similarly, @ConditionalOnMissingBean ensures default beans yield smoothly when you declare your own custom beans.',
        bn: 'স্প্রিং বুট "convention-over-configuration" নীতির মাধ্যমে এন্টারপ্রাইজ জাভাতে যুগান্তকারী পরিবর্তন এনেছে। শত শত লাইনের জটিল XML কনফিগারেশনের বদলে ডেভেলপাররা সরাসরি স্টার্টার লাইব্রেরি ব্যবহার করেন। এর প্রধান প্রবেশদ্বার হলো @SpringBootApplication মেটা-অ্যানোটেশন। এটি মূলত ৩ টি মূল অ্যানোটেশনকে একীভূত করে: @SpringBootConfiguration, @EnableAutoConfiguration এবং @ComponentScan। পর্দার আড়ালে স্প্রিং বুট স্বয়ংক্রিয়ভাবে শর্তযুক্ত অ্যানোটেশনগুলো যাচাই করে। উদাহরণস্বরূপ, ক্লাসপাথে প্রয়োজনীয় লাইব্রেরি উপস্থিত থাকলে @ConditionalOnClass সংশ্লিষ্ট ইনফ্রাস্ট্রাকচার তৈরি করে। একইভাবে, আপনি নিজে কোনো কাস্টম বিন তৈরি করলে @ConditionalOnMissingBean এর কারণে স্প্রিং নিজের ডিফল্ট বিন তৈরি না করে সরে দাঁড়ায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of Spring Boot: From classpath bootstrap and conditional auto-configuration to active ApplicationContext and Actuator telemetry.',
        bn: 'চিত্র ১: স্প্রিং বুটের পূর্ণাঙ্গ লাইফসাইকেল: ক্লাসপাথ বুটস্ট্র্যাপ ও শর্তযুক্ত অটো-কনফিগারেশন থেকে শুরু করে সক্রিয় ApplicationContext এবং অ্যাকচুয়েটর টেলিমেট্রি।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING BOOT AUTO-CONFIGURATION &amp; ACTUATOR OBSERVABILITY</text>

  <!-- Step 1: Bootstrap & Starter -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Starters &amp; Boot</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">spring-boot-starter-web</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">Curated Dependencies</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">SpringApplication.run()</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Bootstrap Engine</text>
  </g>

  <!-- Step 2: Conditional Evaluation -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Auto-Configuration</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">@ConditionalOnClass</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Checks Tomcat &amp; Jackson</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">@ConditionalOnMissing</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Zero-XML Defaults</text>
  </g>

  <!-- Step 3: Active Server & Port -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Embedded Server</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Tomcat / Netty</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Listening on Port 8080</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">Context Active</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Self-Contained Fat JAR</text>
  </g>

  <!-- Step 4: Actuator Observability -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Actuator Metrics</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">/actuator/health</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Liveness &amp; Readiness</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Port 8081 Prometheus</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Cloud Observability</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'actuator-observability-and-metrics-heading',
      text: {
        en: 'Production Observability with Spring Boot Actuator and Prometheus',
        bn: 'স্প্রিং বুট অ্যাকচুয়েটর এবং প্রমিথিউস দিয়ে প্রোডাকশন অবসার্ভেবিলিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Running microservices in cloud clusters requires continuous visibility into internal runtime health and metrics. Spring Boot Actuator exposes standardized HTTP monitoring endpoints. The "/actuator/health" endpoint provides liveness and readiness probe status for Kubernetes pod orchestration, while "/actuator/metrics" tracks JVM heap usage, active thread counts, and garbage collection pauses. By integrating Micrometer and the Prometheus registry, Actuator formats metrics into OpenMetrics format on management port 8081, ready for scraping by Prometheus and visual dashboards in Grafana.',
        bn: 'ক্লাউড ক্লাস্টারে মাইক্রোসার্ভিস চালানোর জন্য অ্যাপ্লিকেশনের অভ্যন্তরীণ স্বাস্থ্য ও মেট্রিক্সের সার্বক্ষণিক দৃশ্যমানতা অপরিহার্য। স্প্রিং বুট অ্যাকচুয়েটর এর জন্য মানসম্মত এইচটিটিপি মনিটরিং এন্ডপয়েন্ট উন্মুক্ত করে। কুবারনেটিসের জন্য "/actuator/health" এন্ডপয়েন্ট লাইভনেস ও রেডিনেস প্রোব স্ট্যাটাস প্রদান করে, আর "/actuator/metrics" হিপ মেমোরি খরচ, থ্রেডের সংখ্যা এবং গারবেজ কালেকশনের সময় ট্র্যাক করে। মাইক্রোমিটার এবং প্রমিথিউস লাইব্রেরি ব্যবহারের মাধ্যমে অ্যাকচুয়েটর ম্যানেজমেন্ট পোর্ট ৮০৮১ এ ওপেন-মেট্রিক্স ফরম্যাটে সমস্ত ডেটা পরিবেশন করে, যা প্রমিথিউস ও গ্রাফানা ড্যাশবোর্ডে সহজেই পর্যবেক্ষণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Spring Boot conditional auto-configuration, environment profile loading, and Actuator health/metrics reporting.',
        bn: 'স্প্রিং বুট শর্তযুক্ত অটো-কনফিগারেশন, প্রোফাইল লোডিং এবং অ্যাকচুয়েটর হেলথ/মেট্রিক্স রিপোর্টিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Spring Boot Auto-Configuration and Actuator Health Reporter

export interface ActuatorHealthReport {
  status: 'UP' | 'DOWN';
  components: {
    db: { status: 'UP' | 'DOWN'; database: string };
    diskSpace: { status: 'UP'; freeMb: number };
  };
}

export class SpringBootActuatorSimulator {
  private activeProfile: string = 'production';
  private serverPort: number = 8080;
  private managementPort: number = 8081;

  // Simulating /actuator/health endpoint for Kubernetes Liveness/Readiness probes
  public getHealth(): ActuatorHealthReport {
    return {
      status: 'UP',
      components: {
        db: { status: 'UP', database: 'PostgreSQL 16' },
        diskSpace: { status: 'UP', freeMb: 14200 }
      }
    };
  }

  // Simulating /actuator/metrics/jvm.memory.used
  public getJvmMemoryMetric(): { name: string; usedMb: number; maxMb: number } {
    return {
      name: 'jvm.memory.used',
      usedMb: 245,
      maxMb: 1024
    };
  }
}

// Execution demonstration
const actuator = new SpringBootActuatorSimulator();
const health = actuator.getHealth();
const memory = actuator.getJvmMemoryMetric();

console.log('Actuator Health Status:', health.status); // "UP"
console.log('Database Component Health:', health.components.db.status); // "UP"
console.log('JVM Memory Used (MB):', memory.usedMb); // 245`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@SpringBootApplication',
          def: {
            en: 'Primary meta-annotation uniting @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan.',
            bn: 'মূল মেটা-অ্যানোটেশন যা কনফিগারেশন, অটো-কনফিগারেশন এবং কম্পোনেন্ট স্ক্যানিংকে একীভূত করে।'
          }
        },
        {
          term: 'Auto-Configuration',
          def: {
            en: 'Spring Boot mechanism automatically registering infrastructure beans based on classpath dependencies and conditional annotations.',
            bn: 'স্প্রিং বুট মেকানিজম যা ক্লাসপাথের লাইব্রেরির ওপর ভিত্তি করে নিজে থেকেই প্রয়োজনীয় বিন প্রস্তুত করে।'
          }
        },
        {
          term: 'Spring Boot Actuator',
          def: {
            en: 'Sub-project providing production-ready operational endpoints for health, metrics, environment, and telemetry.',
            bn: 'স্প্রিং বুটের বিশেষ সাব-প্রজেক্ট যা প্রোডাকশনের জন্য হেলথ, মেট্রিক্স ও সিস্টেম নিরীক্ষণের এন্ডপয়েন্ট সরবরাহ করে।'
          }
        },
        {
          term: '@ConditionalOnMissingBean',
          def: {
            en: 'Conditional annotation activating default auto-configured beans only if the developer has not supplied their own.',
            bn: 'শর্তযুক্ত অ্যানোটেশন যা ডেভেলপার নিজে কোনো বিন তৈরি না করলেই কেবল ডিফল্ট বিন সক্রিয় করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'springbootapplication-meta-annotations-count-ex1',
      kind: 'mcq',
      topic: 'springbootapplication-composed-annotations',
      question: {
        en: 'Which 3 foundational annotations are combined to form @SpringBootApplication in Spring Boot?',
        bn: 'স্প্রিং বুটে কোন ৩ টি মৌলিক অ্যানোটেশনের সমন্বয়ে @SpringBootApplication গঠিত?'
      },
      options: [
        { en: '@SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan', bn: '@SpringBootConfiguration, @EnableAutoConfiguration, এবং @ComponentScan' },
        { en: '@Service, @Repository, and @Controller', bn: '@Service, @Repository, এবং @Controller' },
        { en: '@Entity, @Table, and @Id', bn: '@Entity, @Table, এবং @Id' },
        { en: '@Test, @BeforeEach, and @AfterEach', bn: '@Test, @BeforeEach, এবং @AfterEach' }
      ],
      answer: 0,
      hint: {
        en: '@SpringBootApplication combines configuration, auto-configuration, and component scanning.',
        bn: '@SpringBootApplication কনফিগারেশন, অটো-কনফিগারেশন এবং কম্পোনেন্ট স্ক্যানিং একত্রিত করে।'
      },
      explanation: {
        en: '@SpringBootApplication is a meta-annotation composed of @SpringBootConfiguration, @EnableAutoConfiguration, and @ComponentScan.',
        bn: 'এই ৩ টি অ্যানোটেশনের সমন্বয়ে স্প্রিং বুটের মূল বুটস্ট্র্যাপ ক্লাস স্বয়ংক্রিয়ভাবে শুরু হয়।'
      }
    },
    {
      id: 'conditionalonmissingbean-purpose-ex2',
      kind: 'mcq',
      topic: 'conditionalonmissingbean-behavior',
      question: {
        en: 'What is the purpose of @ConditionalOnMissingBean inside a Spring Boot auto-configuration class?',
        bn: 'স্প্রিং বুট অটো-কনফিগারেশন ক্লাসের ভেতর @ConditionalOnMissingBean এর ভূমিকা কী?'
      },
      options: [
        {
          en: 'It registers a default fallback bean only if the developer has not already declared their own custom bean of that type in the context',
          bn: 'এটি কেবল তখনই একটি ডিফল্ট বিন তৈরি করে যদি ডেভেলপার নিজে কনটেক্সটে সেই টাইপের নিজস্ব কোনো বিন তৈরি না করে থাকেন'
        },
        {
          en: 'It permanently deletes all beans from memory',
          bn: 'এটি মেমোরি থেকে সমস্ত বিন স্থায়ীভাবে মুছে ফেলে'
        },
        {
          en: 'It converts beans into XML configuration files',
          bn: 'এটি বিনগুলোকে XML কনফিগারেশনে রূপান্তর করে'
        },
        {
          en: 'It shuts down the server if any bean is missing',
          bn: 'কোনো বিন না থাকলে এটি সার্ভার বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: '@ConditionalOnMissingBean allows custom beans to override auto-configured defaults.',
        bn: '@ConditionalOnMissingBean ডেভেলপারকে নিজস্ব কাস্টম বিন দিয়ে ডিফল্ট বিন প্রতিস্থাপনের সুযোগ দেয়।'
      },
      explanation: {
        en: '@ConditionalOnMissingBean ensures auto-configuration acts as a graceful fallback that steps aside when developers customize beans.',
        bn: 'ডেভেলপারের কাস্টম বিন থাকলে স্প্রিং নিজের ডিফল্ট তৈরি না করে সরে দাঁড়ায়।'
      }
    },
    {
      id: 'actuator-health-endpoint-probes-ex3',
      kind: 'mcq',
      topic: 'actuator-health-kubernetes-probes',
      question: {
        en: 'Which Spring Boot Actuator endpoint path is standardized for checking service readiness and liveness in container orchestration systems like Kubernetes?',
        bn: 'কুবারনেটিসের মতো কনটেইনার সিস্টেমে সার্ভিস রেডিনেস ও লাইভনেস যাচাই করতে স্প্রিং বুট অ্যাকচুয়েটরের কোন পাথটি প্রমিত?'
      },
      options: [
        { en: '/actuator/health (with /liveness and /readiness)', bn: '/actuator/health (লাইভনেস ও রেডিনেস সহ)' },
        { en: '/server/status/check', bn: '/server/status/check পাথ' },
        { en: '/api/v1/ping/pong', bn: '/api/v1/ping/pong পাথ' },
        { en: '/root/admin/alive', bn: '/root/admin/alive পাথ' }
      ],
      answer: 0,
      hint: {
        en: '/actuator/health provides liveness and readiness probe groups.',
        bn: '/actuator/health কুবারনেটিসের জন্য লাইভনেস ও রেডিনেস গ্রুপ সরবরাহ করে।'
      },
      explanation: {
        en: 'Kubernetes uses /actuator/health/liveness to detect deadlocks and /actuator/health/readiness to route incoming network traffic.',
        bn: 'কুবারনেটিস পডের স্থায়িত্ব ও ট্রাফিক পাঠানোর সক্ষমতা বুঝতে /actuator/health ব্যবহার করে।'
      }
    },
    {
      id: 'application-yaml-profile-naming-ex4',
      kind: 'mcq',
      topic: 'application-profile-naming-convention',
      question: {
        en: 'What naming convention does Spring Boot use to load profile-specific configuration properties for a profile named "production"?',
        bn: '"production" প্রোফাইলের জন্য সুনির্দিষ্ট কনফিগারেশন লোড করতে স্প্রিং বুট কোন নামকরণের নিয়মটি অনুসরণ করে?'
      },
      options: [
        { en: 'application-production.yml (or application-production.properties)', bn: 'application-production.yml (অথবা application-production.properties)' },
        { en: 'production-config.xml', bn: 'production-config.xml ফাইল' },
        { en: 'settings.prod.json', bn: 'settings.prod.json ফাইল' },
        { en: 'env-prod.conf', bn: 'env-prod.conf ফাইল' }
      ],
      answer: 0,
      hint: {
        en: 'Spring Boot appends "-{profile}" to the base application filename.',
        bn: 'স্প্রিং বুট মূল ফাইলের নামের সাথে "-{profile}" যুক্ত করে প্রোফাইল ফাইল চেনে।'
      },
      explanation: {
        en: 'Spring Boot automatically loads application-{profile}.yml when spring.profiles.active matches the target profile name.',
        bn: 'সক্রিয় প্রোফাইল অনুযায়ী স্প্রিং বুট নিজে থেকেই application-{profile}.yml ফাইলটি লোড করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-spring-boot-and-the-actuator',
    title: {
      en: 'Spring Boot Auto-Configuration & Observability Quiz',
      bn: 'স্প্রিং বুট অটো-কনফিগারেশন এবং অবসার্ভেবিলিটি কুইজ'
    },
    questions: [
      {
        id: 'quiz-autoconfigure-imports-file-spring-boot-3',
        kind: 'mcq',
        topic: 'autoconfigure-imports-spring-boot-3-location',
        question: {
          en: 'In Spring Boot 3, where are auto-configuration classes declared following the deprecation of "spring.factories"?',
          bn: 'স্প্রিং বুট ৩ এ "spring.factories" বাতিল হওয়ার পর অটো-কনফিগারেশন ক্লাসগুলো ঠিক কোথায় ঘোষণা করতে হয়?'
        },
        options: [
          {
            en: 'META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports',
            bn: 'META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports ফাইল'
          },
          {
            en: 'src/main/resources/auto-config.txt',
            bn: 'src/main/resources/auto-config.txt ফাইল'
          },
          {
            en: 'Inside the operating system /etc/hosts file',
            bn: 'অপারেটিং সিস্টেমের /etc/hosts ফাইলের ভেতর'
          },
          {
            en: 'Auto-configuration classes are no longer supported in Spring Boot 3',
            bn: 'স্প্রিং বুট ৩ এ অটো-কনফিগারেশন ক্লাস আর সমর্থিত নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Spring Boot 3 uses the new AutoConfiguration.imports file.',
          bn: 'স্প্রিং বুট ৩ নতুন AutoConfiguration.imports ফাইলটি প্রমিত করেছে।'
        },
        explanation: {
          en: 'Spring Boot 2.7 and 3.0 replaced the monolithic spring.factories with dedicated AutoConfiguration.imports files.',
          bn: 'নতুন সংস্করণে পরিচ্ছন্ন কনফিগারেশনের স্বার্থে AutoConfiguration.imports প্রবর্তন করা হয়েছে।'
        }
      },
      {
        id: 'quiz-securing-actuator-separate-management-port',
        kind: 'mcq',
        topic: 'securing-actuator-endpoints-management-port',
        question: {
          en: 'Why is setting "management.server.port=8081" (separate from application server port 8080) considered an enterprise best practice for Spring Boot Actuator?',
          bn: 'স্প্রিং বুট অ্যাকচুয়েটরে অ্যাপ্লিকেশনের পোর্ট ৮০৮০ থেকে আলাদা করে "management.server.port=8081" নির্ধারণ করা একটি এন্টারপ্রাইজ উত্তম রীতি কেন?'
        },
        options: [
          {
            en: 'It separates operational telemetry from public HTTP traffic, allowing cloud firewalls and reverse proxies to block external internet access to sensitive actuator endpoints while permitting internal scraping',
            bn: 'এটি পাবলিক ট্রাফিক থেকে অভ্যন্তরীণ টেলিমেট্রিকে সম্পূর্ণ আলাদা করে, ফলে ফায়ারওয়াল দিয়ে বাইরে থেকে সংবেদনশীল অ্যাকচুয়েটর ব্লক করা যায় কিন্তু ভেতরে স্ক্র্যাপিং চালু থাকে'
          },
          {
            en: 'It doubles the network internet speed of the server',
            bn: 'এটি সার্ভারের নেটওয়ার্ক গতি দ্বিগুণ করে দেয়'
          },
          {
            en: 'Because port 8080 cannot handle JSON data',
            bn: 'কারণ ৮০৮০ পোর্ট কোনো জেসন ডেটা সামলাতে পারে না'
          },
          {
            en: 'Actuator endpoints cannot run on port 8080',
            bn: 'অ্যাকচুয়েটর কখনো ৮০৮০ পোর্টে চলতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'A dedicated management port allows network firewalls to isolate sensitive operational endpoints.',
          bn: 'আলাদা ম্যানেজমেন্ট পোর্ট ফায়ারওয়ালের মাধ্যমে সংবেদনশীল টেলিমেট্রিকে পাবলিক ইন্টারনেট থেকে সুরক্ষিত রাখে।'
        },
        explanation: {
          en: 'Isolating management endpoints to a distinct port prevents accidental public exposure of health, metrics, and environment properties.',
          bn: 'আলাদা পোর্ট ব্যবহার করলে ইন্টারনেটের ক্ষতিকর আক্রমণ থেকে সিস্টেমের অভ্যন্তরীণ তথ্য নিরাপদ থাকে।'
        }
      },
      {
        id: 'quiz-micrometer-facade-observability',
        kind: 'mcq',
        topic: 'micrometer-metrics-facade-role',
        question: {
          en: 'What architectural role does Micrometer play within the Spring Boot Actuator metrics ecosystem?',
          bn: 'স্প্রিং বুট অ্যাকচুয়েটর মেট্রিক্স ইকোসিস্টেমে মাইক্রোমিটার (Micrometer) কী ভূমিকা পালন করে?'
        },
        options: [
          {
            en: 'It serves as a vendor-neutral application metrics facade (like SLF4J for logging), allowing metrics to be exported seamlessly to Prometheus, Datadog, InfluxDB, or CloudWatch',
            bn: 'এটি একটি সার্বজনীন মেট্রিক্স ফ্যাসাড হিসেবে কাজ করে (যেমন লগিংয়ে SLF4J), যার মাধ্যমে কোড না বদলে প্রমিথিউস, ডেটাডগ বা ক্লাউডওয়াচে মেট্রিক্স পাঠানো যায়'
          },
          {
            en: 'Micrometer is a tool for measuring physical computer temperature',
            bn: 'মাইক্রোমিটার কম্পিউটারের তাপমাত্রা মাপার একটি টুল'
          },
          {
            en: 'It compresses database tables into zip archives',
            bn: 'এটি ডেটাবেস টেবিলকে জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'Micrometer only works with MySQL databases',
            bn: 'মাইক্রোমিটার কেবল MySQL ডেটাবেসে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Micrometer is the dimensional metrics facade for Spring Boot.',
          bn: 'মাইক্রোমিটার বিভিন্ন মনিটরিং টুলের জন্য সার্বজনীন এপিআই প্রদান করে।'
        },
        explanation: {
          en: 'Micrometer provides a unified API for timers, gauges, and counters, adapting telemetry to diverse monitoring backends without code modifications.',
          bn: 'মাইক্রোমিটার কোড পরিবর্তন ছাড়াই বিভিন্ন ক্লাউড মনিটরিং সিস্টেমে মেট্রিক্স পাঠানোর সার্বজনীন মাধ্যম।'
        }
      },
      {
        id: 'quiz-graceful-shutdown-configuration',
        kind: 'mcq',
        topic: 'graceful-shutdown-spring-boot',
        question: {
          en: 'What occurs when "server.shutdown=graceful" is configured in Spring Boot and a SIGTERM signal is received during container termination in Kubernetes?',
          bn: 'স্প্রিং বুটে "server.shutdown=graceful" কনফিগার থাকা অবস্থায় কুবারনেটিসে কনটেইনার বন্ধের সময় SIGTERM সিগন্যাল পেলে কী ঘটে?'
        },
        options: [
          {
            en: 'The embedded web server stops accepting new incoming requests but allows currently in-flight active HTTP requests to complete within a configurable grace period before halting',
            bn: 'সার্ভার নতুন রিকোয়েস্ট গ্রহণ করা বন্ধ করে দেয় কিন্তু ইতিমধ্যে প্রক্রিয়াধীন থাকা রিকোয়েস্টগুলোকে নির্ধারিত সময়ের মধ্যে নির্বিঘ্নে শেষ করার সুযোগ দিয়ে তবেই বন্ধ হয়'
          },
          {
            en: 'The operating system kernel crashes immediately',
            bn: 'অপারেটিং সিস্টেম কার্নেল অবিলম্বে ক্র্যাশ করে'
          },
          {
            en: 'The server restarts automatically within 1 nanosecond',
            bn: 'সার্ভার ১ ন্যানো-সেকেন্ডের মধ্যে পুনরায় চালু হয়'
          },
          {
            en: 'All database records are automatically deleted',
            bn: 'সমস্ত ডেটাবেস রেকর্ড স্বয়ংক্রিয়ভাবে মুছে ফেলা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Graceful shutdown permits in-flight requests to finish safely.',
          bn: 'গ্রেসফুল শাটডাউন চলমান কাজগুলো সফলভাবে সম্পন্ন করার সুযোগ দেয়।'
        },
        explanation: {
          en: 'Graceful shutdown stops new connections while providing a grace period for active requests to finish, preventing aborted client requests during deployments.',
          bn: 'ডিপ্লয়মেন্ট চলাকালীন ক্লায়েন্টের রিকোয়েস্ট হঠাৎ কেটে যাওয়া রোধ করতে গ্রেসফুল শাটডাউন অত্যন্ত জরুরি।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'testing-and-the-mock',
    title: {
      en: 'Testing Slices, MockMvc & Testcontainers',
      bn: 'টেস্টিং স্লাইস, MockMvc এবং টেস্টকনটেইনার্স'
    }
  }
};
