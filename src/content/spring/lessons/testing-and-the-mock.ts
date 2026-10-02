import type { Lesson } from '../../../lib/types';

export const TestingAndTheMockLesson: Lesson = {
  slug: 'testing-and-the-mock',
  tech: 'spring',
  title: {
    en: 'Testing Slices, MockMvc & Testcontainers',
    bn: 'টেস্টিং স্লাইস, MockMvc এবং টেস্টকনটেইনার্স'
  },
  summary: {
    en: 'Master robust enterprise testing strategies in Spring Boot: balance test pyramid trade-offs between isolated unit tests, targeted test slices (@WebMvcTest, @DataJpaTest), comprehensive @SpringBootTest integrations, and real disposable Docker databases with Testcontainers.',
    bn: 'স্প্রিং বুটে এন্টারপ্রাইজ টেস্টিং কৌশল আয়ত্ত করুন: আইসোলেটেড ইউনিট টেস্ট, সুনির্দিষ্ট টেস্ট স্লাইস (@WebMvcTest, @DataJpaTest), সমন্বিত @SpringBootTest এবং টেস্টকনটেইনার্স (Testcontainers) দিয়ে বাস্তব ডকার ডেটাবেসে নির্ভরযোগ্য ইন্টিগ্রেশন টেস্ট।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'test-slices-and-mockmvc-heading',
      text: {
        en: 'The Spring Boot Test Slice Philosophy and MockMvc',
        bn: 'স্প্রিং বুট টেস্ট স্লাইস দর্শন এবং MockMvc'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In large enterprise codebases, launching the entire Spring ApplicationContext for every single test slows builds to an intolerable crawl. Spring Boot solves this through "Test Slices" — specialized annotations that initialize only the exact architectural layers under test. For example, @WebMvcTest configures only Spring MVC (Model-View-Controller) components (controllers, filters, converter infrastructure) without loading database repositories or background services. Downstream collaborators are simulated using @MockBean. To test HTTP endpoints without opening real network sockets, developers utilize MockMvc, executing simulated HTTP "GET" and "POST" requests and asserting against response status codes and JSON payloads with fluent JsonPath expressions.',
        bn: 'বৃহৎ এন্টারপ্রাইজ সিস্টেমে প্রতিটি সাধারণ টেস্টের জন্য পুরো স্প্রিং ApplicationContext লোড করলে বিল্ড অত্যন্ত ধীরগতির হয়ে পড়ে। স্প্রিং বুট "Test Slices" ধারণার মাধ্যমে এই সমস্যার অসাধারণ সমাধান দিয়েছে — যা শুধুমাত্র পরীক্ষার জন্য প্রয়োজনীয় নির্দিষ্ট লেয়ারটি মেমোরিতে চালু করে। উদাহরণস্বরূপ, @WebMvcTest কেবল স্প্রিং MVC (Model-View-Controller) উপাদানগুলো (কন্ট্রোলার, ফিল্টার এবং কনভার্টার) লোড করে কিন্তু কোনো ডেটাবেস বা ব্যাকগ্রাউন্ড সার্ভিস চালু করে না। পেছনের সার্ভিসগুলোকে @MockBean দিয়ে মক করা হয়। কোনো আসল নেটওয়ার্ক পোর্ট বা সকেট না খুলেই MockMvc এর মাধ্যমে সিমুলেটেড এইচটিটিপি রিকোয়েস্ট পাঠিয়ে স্ট্যাটাস কোড এবং JsonPath দিয়ে নির্ভুলভাবে রেসপন্স যাচাই করা যায়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural pyramid of Spring testing: From zero-context unit tests to fast slices (@WebMvcTest), full @SpringBootTest, and real Docker Testcontainers.',
        bn: 'চিত্র ১: স্প্রিং টেস্টিং পিরামিডের পূর্ণাঙ্গ আর্কিটেকচার: ইউনিট টেস্ট থেকে শুরু করে দ্রুতগতির টেস্ট স্লাইস (@WebMvcTest), সমন্বিত @SpringBootTest এবং বাস্তব ডকার টেস্টকনটেইনার্স।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING BOOT ENTERPRISE TEST PYRAMID</text>

  <!-- Step 1: Unit Tests (JUnit 5 + Mockito) -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Unit (JUnit 5)</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Zero Spring Context</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">POJO + Mockito</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Sub-millisecond run</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Maximum Speed</text>
  </g>

  <!-- Step 2: Slices (@WebMvcTest, @DataJpaTest) -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Test Slices</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">@WebMvcTest Slice</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Loads Only Web Layer</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">MockMvc HTTP Dispatch</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Focused &amp; Fast</text>
  </g>

  <!-- Step 3: Full Integration (@SpringBootTest) -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. @SpringBootTest</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Full Context Boots</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">All Beans Wired</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">End-to-End Workflow</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">System Confidence</text>
  </g>

  <!-- Step 4: Real Production DB (Testcontainers) -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Testcontainers</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Real Docker PG/Kafka</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Disposable Sandbox</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Zero In-Memory Drift</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Production Parity</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'full-integration-and-testcontainers-heading',
      text: {
        en: 'Integration Testing with @SpringBootTest and Testcontainers',
        bn: '@SpringBootTest এবং টেস্টকনটেইনার্স দিয়ে ইন্টিগ্রেশন টেস্টিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When verifying full cross-layer business transactions, developers turn to @SpringBootTest. In the past, integration tests frequently relied on in-memory embedded databases like H2. However, discrepancies between H2 and production engines like PostgreSQL (such as JSONB operators, dialect quirks, and sequence mechanics) introduced false confidence. The modern enterprise gold standard is Testcontainers — a Java testing library that automatically provisions real, temporary Docker containers (PostgreSQL, Redis, Kafka) during test startup. Tests run against identical database engines and automatically clean up after completion.',
        bn: 'যখন বিভিন্ন লেয়ারের সমন্বয়ে পূর্ণাঙ্গ ব্যবসায়িক লেনদেন পরীক্ষা করতে হয়, তখন ডেভেলপাররা @SpringBootTest ব্যবহার করেন। অতীতে ইন্টিগ্রেশন টেস্টে সাধারণত H2 এর মতো ইন-মেমোরি ডেটাবেস ব্যবহৃত হতো। কিন্তু H2 এবং প্রোডাকশনের আসল ইঞ্জিন যেমন PostgreSQL এর মধ্যে বিভিন্ন অমিল (যেমন JSONB কুয়েরি বা বিশেষ এসকিউএল ডায়ালেক্ট) থাকায় অনেক সময় অপ্রত্যাশিত বাগ ধরা পড়ত না। আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে টেস্টকনটেইনার্স (Testcontainers) হলো সর্বোচ্চ মানদণ্ড — যা টেস্ট চলার সময় ব্যাকগ্রাউন্ডে ডকারের মাধ্যমে আসল PostgreSQL বা Kafka কনটেইনার চালু করে এবং টেস্ট শেষ হলে স্বয়ংক্রিয়ভাবে মুছে ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of MockMvc HTTP request execution, controller slice mocking, and response assertion pipeline.',
        bn: 'MockMvc এইচটিটিপি রিকোয়েস্ট যাচাই, কন্ট্রোলার স্লাইস মকিং এবং রেসপন্স অ্যাসার্শনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Spring MockMvc Testing Slice and MockBean Collaboration

export interface HttpResponse {
  status: number;
  contentType: string;
  body: string;
}

export class MockMvcSimulator {
  // Simulating MockMvc.perform(get("/api/users/42"))
  public performGet(endpoint: string, mockUserService: (id: number) => { id: number; name: string } | null): HttpResponse {
    console.log('[MockMvc] Dispatching simulated HTTP GET:', endpoint);

    const parts = endpoint.split('/');
    const userId = parseInt(parts[parts.length - 1], 10);

    const user = mockUserService(userId);
    if (!user) {
      return { status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'UserNotFound' }) };
    }

    return {
      status: 200,
      contentType: 'application/json',
      body: JSON.stringify(user)
    };
  }
}

// Executing test scenario
const mockMvc = new MockMvcSimulator();

// Mocked service response for userId 42
const stubbedUserService = (id: number) => {
  if (id === 42) return { id: 42, name: 'Tanzim' };
  return null;
};

// Test Execution
const response = mockMvc.performGet('/api/users/42', stubbedUserService);

// Assertions
console.log('HTTP Status Code Assertion:', response.status); // 200
console.log('Content-Type Header Assertion:', response.contentType); // "application/json"
console.log('Response Payload Assertion:', response.body);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: '@SpringBootTest',
          def: {
            en: 'Comprehensive test annotation that bootstraps the full ApplicationContext for complete integration testing.',
            bn: 'পূর্ণাঙ্গ টেস্ট অ্যানোটেশন যা পুরো স্প্রিং ApplicationContext লোড করে সমন্বিত ইন্টিগ্রেশন টেস্ট চালায়।'
          }
        },
        {
          term: '@WebMvcTest',
          def: {
            en: 'Specialized test slice annotation loading only Spring MVC controllers and web infrastructure without downstream services.',
            bn: 'বিশেষায়িত টেস্ট স্লাইস অ্যানোটেশন যা পেছনের সার্ভিস বাদ দিয়ে কেবল ওয়েব কন্ট্রোলার ও ফিল্টার লেয়ার পরীক্ষা করে।'
          }
        },
        {
          term: 'MockMvc',
          def: {
            en: 'Main entry point for server-side Spring MVC testing without deploying to an actual running servlet container.',
            bn: 'আসল সার্ভার পোর্ট না খুলেই স্প্রিং MVC কন্ট্রোলারে এইচটিটিপি রিকোয়েস্ট ও রেসপন্স যাচাই করার প্রধান টেস্ট ফ্রেমওয়ার্ক।'
          }
        },
        {
          term: 'Testcontainers',
          def: {
            en: 'Java library supporting JUnit tests with disposable Docker instances of real databases, message brokers, and services.',
            bn: 'জাভা টেস্টিং লাইব্রেরি যা টেস্ট চলার সময় অস্থায়ী ডকার কনটেইনারে বাস্তব ডেটাবেস চালু করে নিখুঁত পরীক্ষা নিশ্চিত করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'webmvctest-slice-scope-ex1',
      kind: 'mcq',
      topic: 'webmvctest-focused-slice-scope',
      question: {
        en: 'What architectural components are loaded into the ApplicationContext when using @WebMvcTest(UserController.class)?',
        bn: '@WebMvcTest(UserController.class) ব্যবহার করলে ApplicationContext এর ভেতর ঠিক কোন কোন উপাদান লোড হয়?'
      },
      options: [
        {
          en: 'Only Spring MVC web layer beans (controllers, @ControllerAdvice, security filters, MockMvc); @Service and @Repository beans are NOT loaded',
          bn: 'শুধুমাত্র স্প্রিং MVC ওয়েব লেয়ারের বিনগুলো (কন্ট্রোলার, @ControllerAdvice, ফিল্টার, MockMvc); কোনো @Service বা @Repository লোড হয় না'
        },
        {
          en: 'The entire database and all external microservices',
          bn: 'পুরো ডেটাবেস এবং সমস্ত বহিরাগত মাইক্রোসার্ভিস'
        },
        {
          en: 'Only the HTML and CSS static assets',
          bn: 'কেবলমাত্র এইচটিটিএমএল ও সিএসএস ফাইল'
        },
        {
          en: '@WebMvcTest never loads any classes',
          bn: '@WebMvcTest কখনোই কোনো ক্লাস লোড করে না'
        }
      ],
      answer: 0,
      hint: {
        en: '@WebMvcTest isolates the controller layer without loading the service/database beans.',
        bn: '@WebMvcTest কেবল কন্ট্রোলার লেয়ারকে আলাদা করে পরীক্ষা করে, পেছনের সার্ভিস লোড করে না।'
      },
      explanation: {
        en: '@WebMvcTest focuses strictly on the web layer. Collaborating services must be mocked using @MockBean.',
        bn: 'কন্ট্রোলার লেয়ার দ্রুত পরীক্ষা করার জন্য @WebMvcTest আদর্শ; সার্ভিসগুলোকে এখানে মক করে নেওয়া হয়।'
      }
    },
    {
      id: 'mockbean-annotation-behavior-ex2',
      kind: 'mcq',
      topic: 'mockbean-replaces-bean-with-mockito-mock',
      question: {
        en: 'What does the @MockBean annotation do when added to a Spring Boot test class?',
        bn: 'স্প্রিং বুট টেস্ট ক্লাসে @MockBean অ্যানোটেশন যোগ করলে তা কী ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It creates a Mockito mock of the specified class and injects it into the Spring ApplicationContext, replacing any existing real bean',
          bn: 'এটি নির্দিষ্ট ক্লাসের একটি Mockito মক তৈরি করে স্প্রিং কনটেক্সটে ইনজেক্ট করে এবং মূল আসল বিনটিকে প্রতিস্থাপন করে'
        },
        {
          en: 'It prints mock text to the operating system terminal',
          bn: 'এটি টার্মিনালে কাল্পনিক টেক্সট প্রিন্ট করে'
        },
        {
          en: 'It converts the bean into a Java record',
          bn: 'এটি বিনটিকে জাভা রেকর্ডে রূপান্তর করে'
        },
        {
          en: 'It pauses test execution for 60 seconds',
          bn: 'এটি ৬০ সেকেন্ডের জন্য টেস্ট থামিয়ে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: '@MockBean registers a Mockito mock inside the Spring context.',
        bn: '@MockBean স্প্রিং কনটেক্সটের ভেতর সরাসরি একটি Mockito মক অবজেক্ট যুক্ত করে।'
      },
      explanation: {
        en: '@MockBean replaces or adds a mock of the target type in the ApplicationContext, allowing tests to stub method behavior.',
        bn: 'আসল কোড না চালিয়ে কৃত্রিম ফলাফল নির্ধারণ করতে @MockBean অপরিহার্য।'
      }
    },
    {
      id: 'testcontainers-vs-h2-advantage-ex3',
      kind: 'mcq',
      topic: 'testcontainers-overcomes-h2-discrepancies',
      question: {
        en: 'Why do modern enterprise teams prefer Testcontainers over an in-memory H2 database for integration testing?',
        bn: 'ইন্টিগ্রেশন টেস্টিংয়ের ক্ষেত্রে আধুনিক দলগুলো ইন-মেমোরি H2 ডেটাবেসের চেয়ে টেস্টকনটেইনার্স কেন বেশি পছন্দ করে?'
      },
      options: [
        {
          en: 'Testcontainers runs the exact production database engine (e.g. PostgreSQL) in a disposable Docker container, eliminating dialect and compatibility bugs',
          bn: 'টেস্টকনটেইনার্স ডকারের মাধ্যমে প্রোডাকশনের আসল ডেটাবেস ইঞ্জিন (যেমন PostgreSQL) চালায়, ফলে এসকিউএল ডায়ালেক্ট ও জটিল ফিচারের কোনো অমিল থাকে না'
        },
        {
          en: 'H2 database costs 500 dollars per month while Testcontainers is always free',
          bn: 'H2 এর জন্য মাসে ৫০০ ডলার লাগে কিন্তু টেস্টকনটেইনার্স বিনামূল্যে পাওয়া যায়'
        },
        {
          en: 'Testcontainers does not require Docker or any container runtime',
          bn: 'টেস্টকনটেইনার্সের জন্য কোনো ডকার সফটওয়্যারের প্রয়োজন হয় না'
        },
        {
          en: 'H2 only runs on Linux servers',
          bn: 'H2 কেবল লিনাক্স সার্ভারে চলতে পারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Testcontainers ensures production parity by running the real database engine in Docker.',
        bn: 'টেস্টকনটেইনার্স ডকারের ভেতর বাস্তব ডেটাবেস চালিয়ে প্রোডাকশনের হুবহু পরিবেশ নিশ্চিত করে।'
      },
      explanation: {
        en: 'In-memory databases lack advanced vendor-specific features and dialects. Testcontainers provides genuine production parity via Docker.',
        bn: 'ইন-মেমোরি ডেটাবেসে অনেক সময় প্রোডাকশনের আসল ফিচার থাকে না; টেস্টকনটেইনার্স এই ঝুঁকি দূর করে।'
      }
    },
    {
      id: 'datajpatest-rollback-default-ex4',
      kind: 'mcq',
      topic: 'datajpatest-transactional-rollback-nature',
      question: {
        en: 'What is the default transactional behavior of test methods executed inside a @DataJpaTest slice?',
        bn: '@DataJpaTest স্লাইসের ভেতর চলা টেস্ট মেথডগুলোর ডিফল্ট ট্রানজ্যাকশন আচরণ কী থাকে?'
      },
      options: [
        {
          en: 'Each test method is wrapped in a transaction that automatically rolls back at the conclusion of the test to keep the database clean',
          bn: 'প্রতিটি টেস্ট মেথড একটি ট্রানজ্যাকশনের মধ্যে চলে যা টেস্ট শেষ হওয়ার সাথে সাথে স্বয়ংক্রিয়ভাবে রোলব্যাক হয়ে ডেটাবেস পরিচ্ছন্ন রাখে'
        },
        {
          en: 'Every test permanently writes and commits records to the production database',
          bn: 'প্রতিটি টেস্ট সরাসরি প্রোডাকশন ডেটাবেসে স্থায়ীভাবে ডেটা সেভ ও কমিট করে'
        },
        {
          en: 'Transactions are permanently forbidden in JPA tests',
          bn: 'JPA টেস্টের ভেতর কোনো ট্রানজ্যাকশন চালানো সম্পূর্ণ নিষিদ্ধ'
        },
        {
          en: 'The database is uninstalled after every single test method',
          bn: 'প্রতিটি টেস্টের পর পুরো ডেটাবেস আনইনস্টল হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: '@DataJpaTest methods roll back automatically by default.',
        bn: '@DataJpaTest মেথডগুলো ডিফল্টভাবে স্বয়ংক্রিয় রোলব্যাক চালায় যাতে ডেটা নোংরা না হয়।'
      },
      explanation: {
        en: '@DataJpaTest is annotated with @Transactional, ensuring test data mutations roll back after each test method runs.',
        bn: 'স্বয়ংক্রিয় রোলব্যাকের কারণে একটি টেস্টের ডেটা পরবর্তী টেস্টকে কখনো প্রভাবিত করে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-testing-and-the-mock',
    title: {
      en: 'Spring Boot Testing Slices & Integration Mastery Quiz',
      bn: 'স্প্রিং বুট টেস্টিং স্লাইস এবং ইন্টিগ্রেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-dirtiescontext-performance-penalty',
        kind: 'mcq',
        topic: 'dirtiescontext-reloads-spring-context-cost',
        question: {
          en: 'What does the @DirtiesContext annotation do, and why should it be used sparingly in test suites?',
          bn: '@DirtiesContext অ্যানোটেশনটি কী করে এবং টেস্ট সুইটে এটি সাবধানে ও কম ব্যবহার করার পরামর্শ কেন দেওয়া হয়?'
        },
        options: [
          {
            en: 'It forces Spring to discard and rebuild the ApplicationContext after the test, destroying Spring test context caching and significantly slowing overall test execution',
            bn: 'এটি টেস্টের পর স্প্রিং ApplicationContext মেমোরি থেকে মুছে ফেলে পুনরায় নতুন করে তৈরি করে, ফলে টেস্ট কনটেক্সট ক্যাশিং নষ্ট হয়ে পুরো টেস্ট সুট অত্যন্ত ধীরগতির হয়ে পড়ে'
          },
          {
            en: 'It deletes all Java source files from the hard drive',
            bn: 'এটি হার্ড ড্রাইভ থেকে সমস্ত জাভা সোর্স ফাইল মুছে ফেলে'
          },
          {
            en: 'It speeds up test execution by 100 times',
            bn: 'এটি টেস্ট চলার গতি ১০০ গুণ বাড়িয়ে দেয়'
          },
          {
            en: '@DirtiesContext has no effect in modern Spring Boot versions',
            bn: 'আধুনিক স্প্রিং বুটে @DirtiesContext এর কোনো প্রভাব নেই'
          }
        ],
        answer: 0,
        hint: {
          en: '@DirtiesContext forces the Spring TestContext manager to reload the entire context.',
          bn: '@DirtiesContext স্প্রিং কনটেক্সটকে নতুন করে রিলোড করতে বাধ্য করে যা প্রচুর সময় নেয়।'
        },
        explanation: {
          en: 'Spring caches ApplicationContext instances across tests to maintain speed. @DirtiesContext busts this cache, forcing slow context recreation.',
          bn: 'স্প্রিং সাধারণত দ্রুতগতির জন্য কনটেক্সট ক্যাশে রাখে; এই অ্যানোটেশনটি ক্যাশ ভেঙে দেয়ায় টেস্ট অনেক ধীরগতির হয়।'
        }
      },
      {
        id: 'quiz-dynamicpropertyregistry-testcontainers',
        kind: 'mcq',
        topic: 'dynamicpropertyregistry-testcontainers-properties',
        question: {
          en: 'Which Spring annotation and mechanism is used to dynamically inject dynamic container ports (like PostgreSQL random ports) from Testcontainers into the Spring Environment?',
          bn: 'টেস্টকনটেইনার্সের ডায়নামিক পোর্টগুলো (যেমন PostgreSQL এর র্যান্ডম পোর্ট) স্প্রিং এনভায়রনমেন্টে ইনজেক্ট করতে কোন অ্যানোটেশন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: '@DynamicPropertySource (with a static DynamicPropertyRegistry consumer method)',
            bn: '@DynamicPropertySource (একটি স্ট্যাটিক DynamicPropertyRegistry মেথডের মাধ্যমে)'
          },
          {
            en: '@HardcodedProperties',
            bn: '@HardcodedProperties'
          },
          {
            en: '@StaticPortBinder',
            bn: '@StaticPortBinder'
          },
          {
            en: '@SystemEnvOverride',
            bn: '@SystemEnvOverride'
          }
        ],
        answer: 0,
        hint: {
          en: '@DynamicPropertySource dynamically sets Spring properties before the context starts.',
          bn: '@DynamicPropertySource টেস্ট শুরুর আগেই স্প্রিং প্রপার্টিগুলোতে ডকারের র্যান্ডম পোর্ট বসিয়ে দেয়।'
        },
        explanation: {
          en: '@DynamicPropertySource allows static registration of dynamically provisioned container JDBC URLs and credentials.',
          bn: 'কনটেইনার চালু হওয়ার পর তার আইপি ও পোর্ট স্প্রিং কনটেক্সটে জানানোর আদর্শ উপায় এটি।'
        }
      },
      {
        id: 'quiz-mockmvc-jsonpath-assertions',
        kind: 'mcq',
        topic: 'mockmvc-jsonpath-payload-verification',
        question: {
          en: 'In a MockMvc test verifying a JSON response, which method call correctly asserts that the JSON attribute "email" matches "alice@example.com"?',
          bn: 'MockMvc টেস্টে একটি জেসন রেসপন্স যাচাই করার সময় কোন মেথডটি সঠিক উপায়ে "email" এর মান "alice@example.com" আছে কি না নিশ্চিত করে?'
        },
        options: [
          {
            en: '.andExpect(jsonPath("$.email").value("alice@example.com"))',
            bn: '.andExpect(jsonPath("$.email").value("alice@example.com"))'
          },
          {
            en: '.assertRawString("alice@example.com")',
            bn: '.assertRawString("alice@example.com")'
          },
          {
            en: '.checkHtmlTag("alice@example.com")',
            bn: '.checkHtmlTag("alice@example.com")'
          },
          {
            en: '.verifySQL("alice@example.com")',
            bn: '.verifySQL("alice@example.com")'
          }
        ],
        answer: 0,
        hint: {
          en: 'MockMvc uses jsonPath("$.attribute").value(expected).',
          bn: 'MockMvc জেসন ফিল্ড যাচাই করতে jsonPath("$.attribute").value(expected) সিনট্যাক্স ব্যবহার করে।'
        },
        explanation: {
          en: 'The JsonPath library evaluates expressions starting with "$", navigating nested properties and asserting matching values.',
          bn: 'JsonPath এর মাধ্যমে খুব সহজে যেকোনো জেসন ফিল্ডের মান নিখুঁতভাবে মিলিয়ে দেখা যায়।'
        }
      },
      {
        id: 'quiz-testresttemplate-vs-webtestclient',
        kind: 'mcq',
        topic: 'webtestclient-reactive-and-mvc-support',
        question: {
          en: 'What advantage does WebTestClient offer over TestRestTemplate when executing integration tests against running HTTP servers?',
          bn: 'চলমান এইচটিটিপি সার্ভারের ওপর ইন্টিগ্রেশন টেস্ট চালানোর সময় TestRestTemplate এর তুলনায় WebTestClient কী সুবিধা দেয়?'
        },
        options: [
          {
            en: 'WebTestClient offers a modern, fluent, non-blocking API that works seamlessly for both Spring MVC and Spring WebFlux reactive streams',
            bn: 'WebTestClient একটি আধুনিক, নন-ব্লকিং ফ্লুয়েন্ট এপিআই প্রদান করে যা স্প্রিং MVC এবং স্প্রিং WebFlux উভয়ের জন্যই সমানভাবে কার্যকর'
          },
          {
            en: 'WebTestClient is written in Python instead of Java',
            bn: 'WebTestClient জাভার বদলে পাইথনে লেখা হয়েছে'
          },
          {
            en: 'TestRestTemplate only supports HTTP 1.0',
            bn: 'TestRestTemplate শুধুমাত্র এইচটিটিপি ১.০ সমর্থন করে'
          },
          {
            en: 'WebTestClient never sends network packets',
            bn: 'WebTestClient কখনো নেটওয়ার্ক প্যাকেট পাঠায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'WebTestClient supports fluent method chaining and both reactive and non-reactive stacks.',
          bn: 'WebTestClient চমৎকার চেইনিং মেথড সমর্থন করে এবং উভয় আর্কিটেকচারেই সমানভাবে চলে।'
        },
        explanation: {
          en: 'WebTestClient provides a unified, chainable API designed for both modern asynchronous streams and standard blocking endpoints.',
          bn: 'আধুনিক ফ্লুয়েন্ট কোডিং পদ্ধতির কারণে এটি কোড পরিষ্কার রাখে এবং প্রতিক্রিয়াশীল টেস্টিং সহজ করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-production-serve',
    title: {
      en: 'Production Readiness, GraalVM Native & Docker',
      bn: 'প্রোডাকশন প্রস্তুতি, GraalVM নেটিভ এবং ডকার'
    }
  }
};
