import type { Hub } from '../../lib/types';
import { TheBeanAndTheContextLesson } from './lessons/the-bean-and-the-context';
import { DependencyInjectionLesson } from './lessons/dependency-injection';
import { SpringMvcAndTheControllerLesson } from './lessons/spring-mvc-and-the-controller';
import { SpringDataAndTheRepoLesson } from './lessons/spring-data-and-the-repo';
import { SpringSecurityLesson } from './lessons/spring-security';
import { SpringBootAndTheActuatorLesson } from './lessons/spring-boot-and-the-actuator';
import { TestingAndTheMockLesson } from './lessons/testing-and-the-mock';
import { TheProductionServeLesson } from './lessons/the-production-serve';

export const springHub: Hub = {
  slug: 'spring',
  name: 'Spring Framework',
  icon: '🌱',
  tagline: {
    en: 'Master the Spring and Spring Boot enterprise ecosystem: Inversion of Control, constructor dependency injection, RESTful Spring MVC controllers, Spring Data JPA repositories, Spring Security filter chains, Actuator production metrics, test slice architecture, and GraalVM cloud deployment.',
    bn: 'স্প্রিং এবং স্প্রিং বুট এন্টারপ্রাইজ ইকোসিস্টেম গভীরভাবে আয়ত্ত করুন: ইনভার্সন অব কন্ট্রোল, কনস্ট্রাক্টর ডিপেন্ডেন্সি ইনজেকশন, RESTful স্প্রিং MVC কন্ট্রোলার, স্প্রিং ডেটা JPA রিপোজিটরি, স্প্রিং সিকিউরিটি ফিল্টার চেইন, অ্যাকচুয়েটর মেট্রিক্স, টেস্ট স্লাইস আর্কিটেকচার এবং গ্রালভিএম ক্লাউড ডিপ্লয়মেন্ট।'
  },
  intro: {
    en: 'Spring is the world\'s leading enterprise Java application framework, providing a comprehensive programming and configuration model for modern distributed systems. From core Inversion of Control (IoC) containers and declarative transaction management to convention-over-configuration Spring Boot microservices, Spring powers the global backbone of enterprise software. This 8-lesson curriculum guides you from bean lifecycle fundamentals to hardened cloud-native production architectures.',
    bn: 'স্প্রিং হলো আধুনিক ডিস্ট্রিবিউটেড সিস্টেমের জন্য বিশ্বের শীর্ষস্থানীয় এন্টারপ্রাইজ জাভা অ্যাপ্লিকেশন ফ্রেমওয়ার্ক। এর মূল ইনভার্সন অব কন্ট্রোল (IoC) কন্টেইনার ও ট্রানজ্যাকশন ম্যানেজমেন্ট থেকে শুরু করে আধুনিক কনভেনশন-ওভার-কনফিগারেশন স্প্রিং বুট মাইক্রোসার্ভিস পর্যন্ত স্প্রিং বিশ্বজুড়ে এন্টারপ্রাইজ সফটওয়্যার অবকাঠামো পরিচালনা করে। এই ৮ টি পূর্ণাঙ্গ পাঠের কারিকুলাম আপনাকে বিনের লাইফসাইকেল থেকে শুরু করে ক্লাউড-নেটিভ প্রোডাকশন আর্কিটেকচার পর্যন্ত পুঙ্খানুপুঙ্খভাবে শেখাবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Core IoC Container & Constructor Dependency Injection',
        bn: 'ধাপ ১: কোর IoC কন্টেইনার এবং কনস্ট্রাক্টর ডিপেন্ডেন্সি ইনজেকশন'
      },
      items: [
        {
          en: 'The Bean and The Context: ApplicationContext assembly, @Component scanning, bean lifecycle hooks (@PostConstruct, @PreDestroy), and singleton vs prototype scopes (Lesson 1)',
          bn: 'বিন এবং কনটেক্সট: ApplicationContext গঠন, @Component স্ক্যানিং, বিন লাইফসাইকেল হুক (@PostConstruct, @PreDestroy) এবং সিঙ্গলটন বনাম প্রোটোটাইপ স্কোপ (পাঠ ১)'
        },
        {
          en: 'Dependency Injection: Inversion of Control, constructor vs field injection, @Qualifier disambiguation, @Primary precedence, and circular dependency resolution (Lesson 2)',
          bn: 'ডিপেন্ডেন্সি ইনজেকশন: ইনভার্সন অব কন্ট্রোল, কনস্ট্রাক্টর বনাম ফিল্ড ইনজেকশন, @Qualifier দ্বারা পার্থক্যকরণ, @Primary অগ্রাধিকার এবং সার্কুলার ডিপেন্ডেন্সি সমাধান (পাঠ ২)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: RESTful Web APIs & Relational Data Persistence',
        bn: 'ধাপ ২: RESTful ওয়েব এপিআই এবং রিলেশনাল ডেটা পারসিস্টেন্স'
      },
      items: [
        {
          en: 'Spring MVC & The Controller: DispatcherServlet request pipeline, @RestController mapping, DTO validation with @Valid, and global @ControllerAdvice error handling (Lesson 3)',
          bn: 'স্প্রিং MVC ও কন্ট্রোলার: DispatcherServlet রিকোয়েস্ট পাইপলাইন, @RestController ম্যাপিং, @Valid দিয়ে DTO ভ্যালিডেশন এবং গ্লোবাল @ControllerAdvice এরর হ্যান্ডলিং (পাঠ ৩)'
        },
        {
          en: 'Spring Data JPA & Repositories: JpaRepository interface abstraction, derived query methods, @Query JPQL/native execution, pagination, and @Transactional boundaries (Lesson 4)',
          bn: 'স্প্রিং ডেটা JPA ও রিপোজিটরি: JpaRepository ইন্টারফেস অ্যাবস্ট্রাকশন, ডিরাইভড কুয়েরি মেথড, @Query JPQL/নেটিভ এক্সিকিউশন, পেজিনেশন এবং @Transactional বাউন্ডারি (পাঠ ৪)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Enterprise Security & Observability Telemetry',
        bn: 'ধাপ ৩: এন্টারপ্রাইজ সিকিউরিটি এবং অবসার্ভেবিলিটি টেলিমেট্রি'
      },
      items: [
        {
          en: 'Spring Security: SecurityFilterChain configuration, BCrypt password hashing, stateless JWT bearer token authentication, and @PreAuthorize method security (Lesson 5)',
          bn: 'স্প্রিং সিকিউরিটি: SecurityFilterChain কনফিগারেশন, BCrypt পাসওয়ার্ড হ্যাশিং, স্টেটলেস JWT টোকেন অথেনটিকেশন এবং @PreAuthorize মেথড সিকিউরিটি (পাঠ ৫)'
        },
        {
          en: 'Spring Boot & Actuator: Auto-configuration conditions (@ConditionalOnClass), externalized YAML profiles, and production observability (/actuator/health, Prometheus metrics) (Lesson 6)',
          bn: 'স্প্রিং বুট ও অ্যাকচুয়েটর: অটো-কনফিগারেশন শর্ত (@ConditionalOnClass), এক্সটার্নালাইজড YAML প্রোফাইল এবং প্রোডাকশন অবসার্ভেবিলিটি (/actuator/health, প্রমিথিউস মেট্রিক্স) (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: Automated Testing Slices & Cloud Deployment',
        bn: 'ধাপ ৪: স্বয়ংক্রিয় টেস্ট স্লাইস এবং ক্লাউড ডিপ্লয়মেন্ট'
      },
      items: [
        {
          en: 'Testing & Mock Architecture: @SpringBootTest integration suites, @WebMvcTest and @DataJpaTest slice isolation, Mockito @MockBean, and Testcontainers Docker integration (Lesson 7)',
          bn: 'টেস্টিং ও মক আর্কিটেকচার: @SpringBootTest ইন্টিগ্রেশন স্যুট, @WebMvcTest ও @DataJpaTest স্লাইস বিচ্ছিন্নকরণ, Mockito @MockBean এবং টেস্টকনটেইনার্স ডকার টেস্টিং (পাঠ ৭)'
        },
        {
          en: 'The Production Serve: Layered Docker container builds, GraalVM native image compilation, Kubernetes liveness/readiness probes, and graceful shutdown (Lesson 8)',
          bn: 'প্রোডাকশন সার্ভ ও ক্লাউড প্যাকেজিং: লেয়ার্ড ডকার কনটেইনার বিল্ড, GraalVM নেটিভ ইমেজ কম্পাইলেশন, কুবারনেটিস লাইভনেস/রেডিনেস প্রোব এবং গ্রেসফুল শাটডাউন (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    TheBeanAndTheContextLesson,
    DependencyInjectionLesson,
    SpringMvcAndTheControllerLesson,
    SpringDataAndTheRepoLesson,
    SpringSecurityLesson,
    SpringBootAndTheActuatorLesson,
    TestingAndTheMockLesson,
    TheProductionServeLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'High-Concurrency E-Commerce Payment Gateway Microservice',
        bn: 'উচ্চ-ক্ষমতাসম্পন্ন ই-কমার্স পেমেন্ট গেটওয়ে মাইক্রোসার্ভিস'
      },
      difficulty: 'Advanced',
      desc: {
        en: 'Architect a production-grade Spring Boot microservice orchestrating multi-step payment workflows with Spring Data JPA transactions, stateless JWT security, Redis caching, and Prometheus metrics.',
        bn: 'স্প্রিং ডেটা JPA ট্রানজ্যাকশন, স্টেটলেস JWT সিকিউরিটি, রেডিস ক্যাশিং এবং প্রমিথিউস মেট্রিক্স ব্যবহার করে একটি পূর্ণাঙ্গ প্রোডাকশন-মানের স্প্রিং বুট পেমেন্ট গেটওয়ে মাইক্রোসার্ভিস তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Cloud-Native GraalVM AOT Sub-Second Microservice',
        bn: 'ক্লাউড-নেটিভ GraalVM AOT সাব-সেকেন্ড মাইক্রোসার্ভিস'
      },
      difficulty: 'Intermediate',
      desc: {
        en: 'Compile a Spring Boot 3 REST API into a standalone GraalVM native binary image running in a minimal distroless container with sub-50ms cold-start latency and 45MB RAM footprint.',
        bn: 'স্প্রিং বুট ৩ রেস্ট এপিআই-কে GraalVM নেটিভ বাইনারিতে রূপান্তর করে ৫০ মিলি-সেকেন্ডের কম কোল্ড-স্টার্ট এবং মাত্র ৪৫ মেগাবাইট র্যামে চালিত ডিস্ট্রোলেস ডকার ইমেজে ডিপ্লয় করুন।'
      }
    }
  ],
  bestPractices: [
    {
      title: {
        en: 'Always Use Constructor Injection Over Field Injection',
        bn: 'ফিল্ড ইনজেকশনের বদলে সর্বদা কনস্ট্রাক্টর ইনজেকশন ব্যবহার করুন'
      },
      desc: {
        en: 'Declare dependencies as private final fields and inject them via constructors. Constructor injection guarantees immutability, prevents NullPointerExceptions, and simplifies unit testing with mocks without Spring context boot.',
        bn: 'ডিপেন্ডেন্সিগুলোকে private final ফিল্ড হিসেবে ঘোষণা করে কনস্ট্রাক্টরের মাধ্যমে ইনজেক্ট করুন। এটি ইমিউটেবিলিটি নিশ্চিত করে, রানটাইম নালপয়েন্টার এরর প্রতিরোধ করে এবং স্প্রিং কনটেক্সট ছাড়াই সাধারণ মক দিয়ে ইউনিট টেস্টিং সহজ করে।'
      }
    },
    {
      title: {
        en: 'Enforce Explicit Transaction Boundaries with @Transactional',
        bn: '@Transactional দিয়ে সুনির্দিষ্ট লেনদেন সীমানা নির্ধারণ করুন'
      },
      desc: {
        en: 'Apply @Transactional only at the service business layer, not on controller endpoints or repository methods. Use readOnly = true for query methods to optimize JDBC connection caching and avoid flush overhead.',
        bn: '@Transactional অ্যানোটেশনটি শুধুমাত্র সার্ভিস বিজনেস লেয়ারে প্রয়োগ করুন, কন্ট্রোলার বা রিপোজিটরিতে নয়। কুয়েরি মেথডে readOnly = true ব্যবহার করুন যাতে অপ্রয়োজনীয় ডাটি-চেকিং ও ফ্লাশ পরিহার করে ডেটাবেসের গতি বৃদ্ধি পায়।'
      }
    },
    {
      title: {
        en: 'Use Specialized Test Slices Rather Than Full Boot Tests',
        bn: 'পুরো বুট টেস্টের বদলে নির্দিষ্ট টেস্ট স্লাইস ব্যবহার করুন'
      },
      desc: {
        en: 'Avoid loading the entire ApplicationContext with @SpringBootTest for unit workflows. Use @WebMvcTest for controllers, @DataJpaTest for repositories, and pure Mockito for service units to achieve 10x faster test runs.',
        bn: 'ছোট পরীক্ষার জন্য @SpringBootTest দিয়ে পুরো কনটেক্সট লোড করা পরিহার করুন। কন্ট্রোলারের জন্য @WebMvcTest এবং রিপোজিটরির জন্য @DataJpaTest ব্যবহার করে টেস্টের গতি ১০ গুণ পর্যন্ত বৃদ্ধি করুন।'
      }
    },
    {
      title: {
        en: 'Externalize Configuration and Profiles Cleanly',
        bn: 'কনফিগারেশন এবং প্রোফাইল সুন্দরভাবে আলাদা রাখুন'
      },
      desc: {
        en: 'Never hardcode database credentials or secrets in application code. Use application.yml profiles (e.g. application-prod.yml) backed by environment variables or vault secrets.',
        bn: 'কোডের ভেতর ডেটাবেস পাসওয়ার্ড বা সিক্রেট কি কখনো হার্ডকোড করবেন না। এনভায়রনমেন্ট ভেরিয়েবল বা ভল্ট দ্বারা পরিচালিত application.yml প্রোফাইল ব্যবহার করুন।'
      }
    },
    {
      title: {
        en: 'Centralize Error Handling with @ControllerAdvice',
        bn: '@ControllerAdvice দিয়ে কেন্দ্রীয়ভাবে এরর হ্যান্ডেল করুন'
      },
      desc: {
        en: 'Eradicate repetitive try-catch blocks across controllers by declaring a global @RestControllerAdvice. Map business exceptions into standard RFC 7807 ProblemDetail payloads with consistent HTTP status codes.',
        bn: 'কন্ট্রোলারে বারবার try-catch লেখা বন্ধ করতে একটি বৈশ্বিক @RestControllerAdvice ব্যবহার করুন যা যেকোনো এক্সেপশনকে একটি মানসম্মত JSON এরর পে-লোডে রূপান্তর করে ফেরত পাঠায়।'
      }
    }
  ],
  interview: [
    {
      q: {
        en: 'What is Inversion of Control (IoC) and how does the Spring ApplicationContext implement it?',
        bn: 'ইনভার্সন অব কন্ট্রোল (IoC) কী এবং স্প্রিং ApplicationContext কীভাবে এটি বাস্তবায়ন করে?'
      },
      a: {
        en: 'Inversion of Control (IoC) is a design principle where the control of object creation, configuration, and lifecycle management is transferred from application code to a framework container. In Spring, the ApplicationContext acts as the IoC container. It scans classes annotated with @Component, resolves their dependencies, instantiates beans, wires them together via Dependency Injection, and manages their entire lifecycle from initialization (@PostConstruct) to destruction (@PreDestroy).',
        bn: 'ইনভার্সন অব কন্ট্রোল (IoC) হলো একটি ডিজাইন নীতি যেখানে অবজেক্ট তৈরি, কনফিগারেশন এবং লাইফসাইকেল পরিচালনার দায়িত্ব সাধারণ কোডের হাত থেকে ফ্রেমওয়ার্ক কন্টেইনারের ওপর অর্পণ করা হয়। স্প্রিং-এ ApplicationContext হলো এই IoC কন্টেইনার। এটি @Component যুক্ত ক্লাসগুলো স্ক্যান করে, তাদের পারস্পরিক নির্ভরতা বিশ্লেষণ করে, অবজেক্ট তৈরি করে এবং ডিপেন্ডেন্সি ইনজেকশনের মাধ্যমে যুক্ত করে শুরু (@PostConstruct) থেকে ধ্বংস (@PreDestroy) পর্যন্ত পুরো লাইফসাইকেল নিয়ন্ত্রণ করে।'
      }
    },
    {
      q: {
        en: 'Why is constructor injection strictly preferred over field injection with @Autowired in modern Spring?',
        bn: 'আধুনিক স্প্রিং-এ @Autowired ফিল্ড ইনজেকশনের বদলে কনস্ট্রাক্টর ইনজেকশনকে কেন কঠোরভাবে অগ্রাধিকার দেওয়া হয়?'
      },
      a: {
        en: 'Field injection injects dependencies via reflection directly into private fields, making the class tightly coupled to the Spring runtime container and making it impossible to instantiate the class safely in pure unit tests without booting Spring. Constructor injection makes dependencies explicit, enforces immutability via final fields, prevents instantiation in incomplete half-initialized states, and makes testing trivial by passing mocks directly into the constructor.',
        bn: 'ফিল্ড ইনজেকশন রিফ্লেকশন ব্যবহার করে প্রাইভেট ফিল্ডে জোরপূর্বক ডেটা বসায়, ফলে স্প্রিং ফ্রেমওয়ার্ক ছাড়া ক্লাসটিকে আলাদাভাবে ইউনিট টেস্ট করা অসম্ভব হয়ে পড়ে। অপরপক্ষে কনস্ট্রাক্টর ইনজেকশন সমস্ত নির্ভরতাকে স্পষ্ট করে তোলে, final ফিল্ড ব্যবহারের মাধ্যমে অবজেক্টকে ইমিউটেবল রাখে, অসম্পূর্ণ অবস্থায় অবজেক্ট তৈরি হওয়া রোধ করে এবং স্প্রিং কনটেক্সট ছাড়াই সাধারণ মক পাস করে সেকেন্ডের মধ্যে টেস্ট চালানোর সুযোগ দেয়।'
      }
    },
    {
      q: {
        en: 'How does Spring Boot Auto-Configuration work under the hood?',
        bn: 'স্প্রিং বুট অটো-কনফিগারেশন পর্দার আড়ালে কীভাবে কাজ করে?'
      },
      a: {
        en: 'Spring Boot uses @EnableAutoConfiguration along with auto-configuration classes declared in META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports. These classes utilize conditional annotations such as @ConditionalOnClass (checks classpath for specific libraries like DataSource or DispatcherServlet), @ConditionalOnMissingBean (creates default beans only if the developer has not supplied their own), and @ConditionalOnProperty. This enables intelligent zero-configuration defaults that automatically configure infrastructure based on present dependencies.',
        bn: 'স্প্রিং বুট @EnableAutoConfiguration এবং AutoConfiguration.imports ফাইলে থাকা কনফিগারেশন ক্লাসগুলোর মাধ্যমে কাজ করে। এই ক্লাসগুলো শর্তযুক্ত অ্যানোটেশন যেমন @ConditionalOnClass (ক্লাসপাথে নির্দিষ্ট লাইব্রেরি যেমন DataSource বা DispatcherServlet আছে কি না তা দেখে), @ConditionalOnMissingBean (ডেভেলপার নিজে কোনো বিন তৈরি না করলেই কেবল ডিফল্ট বিন তৈরি করে) ব্যবহার করে। ফলে কোনো জটিল XML বা কনফিগারেশন ছাড়াই প্রয়োজনীয় লাইব্রেরি যোগ করার সাথে সাথেই সিস্টেম স্বয়ংক্রিয়ভাবে কাজ শুরু করে।'
      }
    },
    {
      q: {
        en: 'What is the role of the DispatcherServlet in the Spring MVC request processing architecture?',
        bn: 'স্প্রিং MVC রিকোয়েস্ট প্রসেসিং আর্কিটেকচারে DispatcherServlet এর ভূমিকা কী?'
      },
      a: {
        en: 'The DispatcherServlet implements the Front Controller design pattern, acting as the centralized single entry point for all incoming HTTP requests. It queries the HandlerMapping to identify which controller matches the request URL, dispatches the request to a HandlerAdapter, executes interceptors and controller methods, serializes responses via HttpMessageConverter (e.g. converting POJOs to JSON via Jackson), and directs unhandled exceptions to HandlerExceptionResolver.',
        bn: 'DispatcherServlet ফ্রন্ট কন্ট্রোলার ডিজাইন প্যাটার্ন বাস্তবায়ন করে সমস্ত এইচটিটিপি রিকোয়েস্টের কেন্দ্রীয় প্রবেশদ্বার হিসেবে কাজ করে। এটি HandlerMapping এর সাহায্যে রিকোয়েস্টের জন্য সঠিক কন্ট্রোলার খুঁজে বের করে, HandlerAdapter দিয়ে মেথডটি কার্যকর করে, HttpMessageConverter দিয়ে ডেটাকে জেসনে রূপান্তর করে এবং কোনো ত্রুটি দেখা দিলে তা HandlerExceptionResolver এর মাধ্যমে সুন্দরভাবে সমাধান করে ক্লায়েন্টকে রেসপন্স ফেরত দেয়।'
      }
    }
  ],
  architectures: [
    {
      title: {
        en: 'Layered Enterprise REST Service Architecture',
        bn: 'লেয়ার্ড এন্টারপ্রাইজ REST সার্ভিস আর্কিটেকচার'
      },
      desc: {
        en: 'Classic 3-tier architecture: Controller layer handling HTTP parsing and DTO validation, Service layer managing transactional business logic, and Repository layer handling JPA database persistence.',
        bn: 'চিরায়ত ৩-স্তরীয় আর্কিটেকচার: কন্ট্রোলার স্তর যা এইচটিটিপি পার্সিং ও ভ্যালিডেশন করে, সার্ভিস স্তর যা ব্যবসায়িক লজিক ও ট্রানজ্যাকশন নিয়ন্ত্রণ করে এবং রিপোজিটরি স্তর যা ডেটাবেসে তথ্য সংরক্ষণ ও পরিচালনা করে।'
      }
    },
    {
      title: {
        en: 'Stateless JWT OAuth2 Resource Server Architecture',
        bn: 'স্টেটলেস JWT OAuth2 রিসোর্স সার্ভার আর্কিটেকচার'
      },
      desc: {
        en: 'Zero-session authentication architecture using Spring Security filter chains. Validates cryptographically signed JWT bearer tokens on every request without maintaining server-side session state.',
        bn: 'স্প্রিং সিকিউরিটি ফিল্টার চেইন ব্যবহার করে সেশনহীন নিরাপত্তা আর্কিটেকচার যা কোনো সার্ভার সেশন না রেখে ক্রিপ্টোগ্রাফিকভাবে স্বাক্ষরিত JWT টোকেন যাচাইয়ের মাধ্যমে ক্লাউড স্কেলিং নিশ্চিত করে।'
      }
    },
    {
      title: {
        en: 'Event-Driven Microservice Architecture with Kafka and Spring Cloud',
        bn: 'কাফকা ও স্প্রিং ক্লাউডযুক্ত ইভেন্ট-ড্রিভেন মাইক্রোসার্ভিস'
      },
      desc: {
        en: 'Decoupled asynchronous microservices communicating via Apache Kafka event topics. Employs transactional outbox patterns to guarantee at-least-once message delivery without distributed 2PC locks.',
        bn: 'অ্যাপাচি কাফকার মাধ্যমে সংযুক্ত ডিকাপল্ড অ্যাসিনক্রোনাস মাইক্রোসার্ভিস যা ট্রানজ্যাকশনাল আউটবক্স প্যাটার্ন ব্যবহার করে ডেটাবেস পরিবর্তন ও মেসেজ ব্রোকার সিঙ্ক নিশ্চিত করে।'
      }
    },
    {
      title: {
        en: 'Cloud-Native GraalVM AOT Serverless Architecture',
        bn: 'ক্লাউড-নেটিভ GraalVM AOT সার্ভারলেস আর্কিটেকচার'
      },
      desc: {
        en: 'Ahead-of-Time compiled Spring Boot 3 applications running as native Linux binaries. Yields sub-50ms cold starts and under 50MB memory footprint, optimized for Kubernetes horizontal pod autoscaling.',
        bn: 'Ahead-of-Time কম্পাইল করা স্প্রিং বুট ৩ অ্যাপ্লিকেশন যা নেটিভ লিনাক্স বাইনারি হিসেবে চলে এবং ৫০ মিলি-সেকেন্ডের কম কোল্ড স্টার্ট ও ৫০ মেগাবাইটের কম মেমোরি খরচে কুবারনেটিসে দ্রুত স্কেল করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Global Enterprise Financial Transaction Gateways: Running mission-critical high-throughput payment settlement microservices processing millions of daily transactions with Spring Boot and Spring Security.',
      bn: 'বৈশ্বিক আর্থিক লেনদেন ও পেমেন্ট গেটওয়ে: স্প্রিং বুট এবং স্প্রিং সিকিউরিটি ব্যবহার করে প্রতিদিন কোটি কোটি আর্থিক লেনদেন পরিচালনাকারী নির্ভরযোগ্য এন্টারপ্রাইজ মাইক্রোসার্ভিস।'
    },
    {
      en: 'Large-Scale E-Commerce Backends & Order Systems: Powering multi-service retail shopping platforms handling high-traffic catalog search, checkout cart pipelines, and inventory tracking with Spring Data JPA.',
      bn: 'বৃহৎ ই-কমার্স ব্যাকএন্ড ও অর্ডার ব্যবস্থাপনা: স্প্রিং ডেটা JPA ও মাইক্রোসার্ভিস আর্কিটেকচার ব্যবহার করে লাখ লাখ ক্রেতার কার্ট, চেকআউট এবং পণ্য ইনভেন্টরি ট্র্যাকিং পরিচালনা।'
    },
    {
      en: 'Healthcare Record Management & HL7 Pipelines: Managing patient electronic health records and regulatory medical compliance via encrypted RESTful APIs and distributed Spring Batch ETL workflows.',
      bn: 'স্বাস্থ্যসেবা ও মেডিকেল রেকর্ড ব্যবস্থাপনা: এনক্রিপ্টেড RESTful এপিআই এবং স্প্রিং ব্যাচ ইটিএল প্রক্রিয়ার মাধ্যমে রোগীর সংবেদনশীল তথ্য ও ডেটা নিরাপত্তা নিশ্চিতকরণ।'
    },
    {
      en: 'Telecommunications Billing & Real-Time Event Processing: Processing streaming call detail records and network telemetry for millions of telecom subscribers using Spring Cloud Stream and Kafka.',
      bn: 'টেলিকম বিলিং ও রিয়েল-টাইম ইভেন্ট প্রসেসিং: স্প্রিং ক্লাউড স্ট্রিম ও কাফকা ব্যবহার করে কোটি কোটি মোবাইল গ্রাহকের বিলিং ও নেটওয়ার্ক ডেটা রিয়েল-টাইমে প্রসেসিং।'
    }
  ]
};
