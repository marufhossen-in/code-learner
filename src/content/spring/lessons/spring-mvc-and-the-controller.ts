import type { Lesson } from '../../../lib/types';

export const SpringMvcAndTheControllerLesson: Lesson = {
  slug: 'spring-mvc-and-the-controller',
  tech: 'spring',
  title: {
    en: 'Spring MVC, RestControllers & Validation',
    bn: 'স্প্রিং MVC, RestControllers এবং ভ্যালিডেশন'
  },
  summary: {
    en: 'Architect production RESTful APIs with Spring MVC: master the DispatcherServlet front-controller pipeline, handle HTTP requests with @RestController, enforce Jakarta Bean Validation using @Valid, and centralize exception responses with global @RestControllerAdvice.',
    bn: 'স্প্রিং MVC দিয়ে প্রোডাকশন RESTful এপিআই তৈরি করুন: DispatcherServlet ফ্রন্ট-কন্ট্রোলার পাইপলাইন, @RestController দিয়ে এইচটিটিপি রিকোয়েস্ট পরিচালনা, @Valid দিয়ে জাকার্তা বিন ভ্যালিডেশন এবং গ্লোবাল @RestControllerAdvice দিয়ে সমন্বিত এরর রেসপন্স প্রদান।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'dispatcher-servlet-and-restcontroller-heading',
      text: {
        en: 'The DispatcherServlet Front-Controller Pipeline and @RestController',
        bn: 'DispatcherServlet ফ্রন্ট-কন্ট্রোলার পাইপলাইন এবং @RestController'
      }
    },
    {
      type: 'para',
      text: {
        en: 'At the core of Spring MVC (Model-View-Controller) lies the DispatcherServlet, implementing the Front Controller design pattern as the single centralized entry point for all incoming HTTP requests. When a client issues an HTTP request, the DispatcherServlet queries the HandlerMapping registry to locate the matching controller method. The HandlerAdapter executes the method, using HttpMessageConverters (such as Jackson ObjectMapper) to deserialize incoming JSON request bodies into Java DTOs (Data Transfer Objects) and serialize outgoing response objects into JSON. The @RestController annotation combines @Controller and @ResponseBody, ensuring every endpoint returns serialized data directly to the client.',
        bn: 'স্প্রিং MVC (মডেল-ভিউ-কন্ট্রোলার) কাঠামোর কেন্দ্রস্থলে রয়েছে DispatcherServlet, যা ফ্রন্ট কন্ট্রোলার ডিজাইন প্যাটার্ন বাস্তবায়ন করে সমস্ত এইচটিটিপি রিকোয়েস্টের একক কেন্দ্রীয় প্রবেশদ্বার হিসেবে কাজ করে। ক্লায়েন্ট যখন কোনো রিকোয়েস্ট পাঠায়, তখন DispatcherServlet HandlerMapping রেজিস্ট্রিতে অনুসন্ধান করে সঠিক কন্ট্রোলার মেথডটি খুঁজে বের করে। এরপর HandlerAdapter মেথডটি কার্যকর করে, যেখানে HttpMessageConverter (যেমন Jackson ObjectMapper) ব্যবহার করে ইনকামিং জেসন বডিকে জাভা DTO (Data Transfer Object) অবজেক্টে এবং রিটার্ন করা অবজেক্টকে পুনরায় জেসনে রূপান্তর করা হয়। @RestController অ্যানোটেশনটি @Controller এবং @ResponseBody এর সমন্বয়ে গঠিত, যার ফলে প্রতিটি এন্ডপয়েন্ট সরাসরি সিরিয়ালাইজড ডেটা ক্লায়েন্টকে ফেরত দেয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural request pipeline of Spring MVC: From client HTTP requests through DispatcherServlet, DTO validation, and centralized exception advice.',
        bn: 'চিত্র ১: স্প্রিং MVC এর পূর্ণাঙ্গ রিকোয়েস্ট পাইপলাইন: ক্লায়েন্ট এইচটিটিপি রিকোয়েস্ট থেকে DispatcherServlet, DTO ভ্যালিডেশন এবং কেন্দ্রীয় এক্সেপশন অ্যাডভাইসের কার্যপ্রবাহ।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING MVC REQUEST LIFECYCLE: DISPATCHERSERVLET TO ADVICE</text>

  <!-- Step 1: Client Request -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client Request</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">POST /api/orders</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">JSON Payload Body</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">HTTP 1.1 / HTTP 2</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Incoming TCP Packet</text>
  </g>

  <!-- Step 2: DispatcherServlet -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. DispatcherServlet</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">HandlerMapping</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Finds OrderController</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Jackson JSON Converter</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Front Controller Engine</text>
  </g>

  <!-- Step 3: Controller & @Valid -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. @Valid DTO</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">@NotBlank String name</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">@Min(1) int amount</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Validates Constraints</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Input Sanitization</text>
  </g>

  <!-- Step 4: @RestControllerAdvice -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Global Advice</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">@ExceptionHandler</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">RFC 7807 Problem</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">400 Bad Request</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Standard Error JSON</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'dto-validation-and-controller-advice-heading',
      text: {
        en: 'Jakarta Bean Validation (@Valid) and Global @RestControllerAdvice',
        bn: 'জাকার্তা বিন ভ্যালিডেশন (@Valid) এবং গ্লোবাল @RestControllerAdvice'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To safeguard backends from malformed inputs, Spring integrates Jakarta Bean Validation. By annotating request DTO parameters with "@Valid", Spring automatically evaluates constraints like @NotNull, @NotBlank, and @Min(1). If any field fails validation, Spring halts processing and throws a MethodArgumentNotValidException. Rather than writing repetitive try-catch logic across every controller endpoint, enterprise architectures implement a global exception handler annotated with @RestControllerAdvice. Using @ExceptionHandler methods, the advice transforms exceptions into standardized RFC 7807 ProblemDetail JSON payloads returning HTTP 400 Bad Request status codes.',
        bn: 'ভুল বা ক্ষতিকর ইনপুট থেকে সিস্টেমকে সুরক্ষিত রাখতে স্প্রিং জাকার্তা বিন ভ্যালিডেশন সমন্বিত করে। রিকোয়েস্ট DTO প্যারামিটারের আগে "@Valid" লিখে দিলে স্প্রিং স্বয়ংক্রিয়ভাবে @NotNull, @NotBlank বা @Min(1) এর মতো শর্তগুলো যাচাই করে। কোনো শর্ত ব্যর্থ হলে স্প্রিং কাজ থামিয়ে তাৎক্ষণিকভাবে MethodArgumentNotValidException ছুড়ে দেয়। প্রতিটি কন্ট্রোলারে আলাদা করে বারবার try-catch না লিখে এন্টারপ্রাইজ সিস্টেমে একটি গ্লোবাল এক্সেপশন হ্যান্ডলার (@RestControllerAdvice) তৈরি করা হয়। এটি @ExceptionHandler মেথডের মাধ্যমে যেকোনো এররকে মানসম্মত RFC 7807 ProblemDetail জেসনে রূপান্তর করে HTTP 400 Bad Request স্ট্যাটাস কোড প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Spring MVC DispatcherServlet routing, DTO constraint validation, and RFC 7807 global exception advice formatting.',
        bn: 'স্প্রিং MVC DispatcherServlet রাউটিং, DTO ভ্যালিডেশন এবং RFC 7807 গ্লোবাল এরর হ্যান্ডলিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Spring MVC DispatcherServlet, DTO Validation & ControllerAdvice

export interface CreateOrderRequest {
  customerEmail: string;
  amount: number;
}

export interface ProblemDetailResponse {
  type: string;
  title: string;
  status: number;
  detail: string;
}

// Simulating Jakarta Bean Validation constraints (@NotBlank, @Min(1))
export function validateOrderDto(dto: CreateOrderRequest): string[] {
  const errors: string[] = [];
  if (!dto.customerEmail || !dto.customerEmail.includes('@')) {
    errors.push('customerEmail: must be a valid email address');
  }
  if (dto.amount === undefined || dto.amount < 1) {
    errors.push('amount: must be greater than or equal to 1');
  }
  return errors;
}

// Simulating @RestControllerAdvice global exception handler
export class GlobalControllerAdviceSimulator {
  public handleValidationErrors(errors: string[]): ProblemDetailResponse {
    return {
      type: 'https://api.example.com/errors/validation',
      title: 'Invalid Request Content',
      status: 400, // HTTP 400 Bad Request
      detail: errors.join('; ')
    };
  }
}

// DispatcherServlet pipeline execution demo
const invalidPayload: CreateOrderRequest = { customerEmail: 'bad-email', amount: 0 };
const validationViolations = validateOrderDto(invalidPayload);

if (validationViolations.length > 0) {
  const advice = new GlobalControllerAdviceSimulator();
  const problemResponse = advice.handleValidationErrors(validationViolations);
  console.log('HTTP Status Code:', problemResponse.status); // 400
  console.log('RFC 7807 Error Payload:', problemResponse);
}`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'DispatcherServlet',
          def: {
            en: 'The central Front Controller servlet in Spring MVC dispatching HTTP requests to registered handler controllers.',
            bn: 'স্প্রিং MVC এর মূল ফ্রন্ট কন্ট্রোলার সার্বলেট যা সমস্ত এইচটিটিপি রিকোয়েস্ট উপযুক্ত কন্ট্রোলারে পাঠায়।'
          }
        },
        {
          term: '@RestController',
          def: {
            en: 'Convenience stereotype combining @Controller and @ResponseBody for building JSON/RESTful web services.',
            bn: 'অ্যানোটেশন যা @Controller ও @ResponseBody এর সমন্বয়ে সরাসরি জেসন রেসপন্স প্রদানকারী এপিআই তৈরি করে।'
          }
        },
        {
          term: '@Valid',
          def: {
            en: 'Annotation triggering standard Jakarta Bean Validation constraints on incoming request body DTOs.',
            bn: 'অ্যানোটেশন যা ইনকামিং রিকোয়েস্ট DTO-এর ওপর ঘোষিত নিয়মাবলী ও শর্তগুলো স্বয়ংক্রিয়ভাবে যাচাই করে।'
          }
        },
        {
          term: '@RestControllerAdvice',
          def: {
            en: 'Specialized component declaring centralized global exception handlers and response formatting across all controllers.',
            bn: 'বিশেষায়িত কম্পোনেন্ট যা সমস্ত কন্ট্রোলারের জন্য কেন্দ্রীয়ভাবে এক্সেপশন ও এরর রেসপন্স পরিচালনা করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'dispatcherservlet-front-controller-role-ex1',
      kind: 'mcq',
      topic: 'dispatcherservlet-design-pattern',
      question: {
        en: 'Which classic software architecture design pattern does the Spring MVC DispatcherServlet implement?',
        bn: 'স্প্রিং MVC DispatcherServlet কোন বিখ্যাত সফটওয়্যার ডিজাইন প্যাটার্নটি বাস্তবায়ন করে?'
      },
      options: [
        { en: 'Front Controller pattern', bn: 'Front Controller (ফ্রন্ট কন্ট্রোলার) প্যাটার্ন' },
        { en: 'Abstract Factory pattern', bn: 'Abstract Factory (অ্যাবস্ট্রাক্ট ফ্যাক্টরি) প্যাটার্ন' },
        { en: 'Singleton pattern only', bn: 'শুধুমাত্র Singleton pattern' },
        { en: 'Observer pattern only', bn: 'শুধুমাত্র Observer pattern' }
      ],
      answer: 0,
      hint: {
        en: 'DispatcherServlet acts as the centralized initial entry point for all requests.',
        bn: 'সমস্ত রিকোয়েস্টের কেন্দ্রীয় প্রবেশদ্বার হিসেবে কাজ করার প্যাটার্ন হলো Front Controller।'
      },
      explanation: {
        en: 'DispatcherServlet implements the Front Controller pattern, centralizing request routing, filter chains, and response formatting.',
        bn: 'ফ্রন্ট কন্ট্রোলার প্যাটার্ন সমস্ত রিকোয়েস্টকে একটি নির্দিষ্ট গেটওয়ে দিয়ে নিয়ন্ত্রণ করতে সহায়তা করে।'
      }
    },
    {
      id: 'restcontroller-meta-annotation-composition-ex2',
      kind: 'mcq',
      topic: 'restcontroller-combines-controller-responsebody',
      question: {
        en: 'Which two annotations are combined together to form the @RestController stereotype in Spring?',
        bn: 'স্প্রিং-এ কোন দুটি অ্যানোটেশনের সমন্বয়ে @RestController তৈরি হয়েছে?'
      },
      options: [
        { en: '@Controller and @ResponseBody', bn: '@Controller এবং @ResponseBody' },
        { en: '@Service and @Repository', bn: '@Service এবং @Repository' },
        { en: '@Component and @Scope', bn: '@Component এবং @Scope' },
        { en: '@Bean and @Configuration', bn: '@Bean এবং @Configuration' }
      ],
      answer: 0,
      hint: {
        en: '@RestController marks a web controller and automatically serializes return values into the response body.',
        bn: '@RestController সাধারণ কন্ট্রোলারের সাথে রেসপন্স বডি যুক্ত করে জেসন প্রদান সহজ করে।'
      },
      explanation: {
        en: '@RestController is meta-annotated with @Controller and @ResponseBody, serializing returned objects directly to JSON/XML.',
        bn: '@RestController ব্যবহার করলে মেথডে আলাদা করে @ResponseBody লেখার প্রয়োজন হয় না।'
      }
    },
    {
      id: 'validation-annotation-trigger-ex3',
      kind: 'mcq',
      topic: 'valid-annotation-requestbody-validation',
      question: {
        en: 'Which annotation must be placed in front of a @RequestBody DTO parameter in a controller method to trigger automatic Jakarta Bean Validation?',
        bn: 'কন্ট্রোলার মেথডে @RequestBody DTO এর পূর্বে কোন অ্যানোটেশনটি বসালে জাকার্তা বিন ভ্যালিডেশন স্বয়ংক্রিয়ভাবে কার্যকর হয়?'
      },
      options: [
        { en: '@Valid (or @Validated)', bn: '@Valid (অথবা @Validated)' },
        { en: '@NotNull', bn: '@NotNull' },
        { en: '@Autowired', bn: '@Autowired' },
        { en: '@Check', bn: '@Check' }
      ],
      answer: 0,
      hint: {
        en: '@Valid signals Spring to validate the incoming request body before executing the method.',
        bn: '@Valid স্প্রিংকে নির্দেশ দেয় মেথডটি চালানোর পূর্বে ইনপুট ডেটা যাচাই করে নিতে।'
      },
      explanation: {
        en: '@Valid instructs Spring to run the Jakarta validator against all declared constraints on the DTO.',
        bn: '@Valid যুক্ত করলে DTO-তে থাকা সমস্ত ফিল্ডের শর্ত স্প্রিং স্বয়ংক্রিয়ভাবে পরীক্ষা করে।'
      }
    },
    {
      id: 'global-exception-handling-annotation-ex4',
      kind: 'mcq',
      topic: 'restcontrolleradvice-centralized-exceptions',
      question: {
        en: 'Which annotation is applied to a class to handle exceptions globally across all controllers in a Spring Boot application?',
        bn: 'স্প্রিং বুট অ্যাপ্লিকেশনের সমস্ত কন্ট্রোলারের জন্য কেন্দ্রীয়ভাবে এক্সেপশন হ্যান্ডেল করতে কোন অ্যানোটেশনটি ব্যবহার করা হয়?'
      },
      options: [
        { en: '@RestControllerAdvice (or @ControllerAdvice)', bn: '@RestControllerAdvice (অথবা @ControllerAdvice)' },
        { en: '@ServiceAdvice', bn: '@ServiceAdvice' },
        { en: '@GlobalErrorHandler', bn: '@GlobalErrorHandler' },
        { en: '@RepositoryAdvice', bn: '@RepositoryAdvice' }
      ],
      answer: 0,
      hint: {
        en: '@RestControllerAdvice provides centralized exception interception for REST controllers.',
        bn: '@RestControllerAdvice সমস্ত রেস্ট কন্ট্রোলারের জন্য সমন্বিত এরর হ্যান্ডলিং সুবিধা দেয়।'
      },
      explanation: {
        en: '@RestControllerAdvice allows declaring centralized @ExceptionHandler methods that capture exceptions and return structured JSON error payloads.',
        bn: '@RestControllerAdvice এর মাধ্যমে পুরো অ্যাপ্লিকেশনের এরর রেসপন্স একটি নির্দিষ্ট মানে সাজানো যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-spring-mvc-and-the-controller',
    title: {
      en: 'Spring MVC & RESTful Validation Mastery Quiz',
      bn: 'স্প্রিং MVC এবং RESTful ভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-rfc-7807-problemdetail-spring6',
        kind: 'mcq',
        topic: 'rfc7807-problemdetail-standard-error-format',
        question: {
          en: 'Which standard class introduced in Spring 6 provides built-in support for RFC 7807 Problem Details for HTTP APIs?',
          bn: 'স্প্রিং ৬ এ প্রবর্তিত কোন স্ট্যান্ডার্ড ক্লাসটি HTTP এপিআই-এর জন্য RFC 7807 Problem Details ফরম্যাট সমর্থন করে?'
        },
        options: [
          { en: 'org.springframework.http.ProblemDetail', bn: 'org.springframework.http.ProblemDetail ক্লাস' },
          { en: 'org.springframework.web.HttpError', bn: 'org.springframework.web.HttpError ক্লাস' },
          { en: 'java.lang.SystemErrorPayload', bn: 'java.lang.SystemErrorPayload ক্লাস' },
          { en: 'org.apache.catalina.ErrorResponse', bn: 'org.apache.catalina.ErrorResponse ক্লাস' }
        ],
        answer: 0,
        hint: {
          en: 'Spring 6 adopted the standardized ProblemDetail class for RFC 7807 compliance.',
          bn: 'স্প্রিং ৬ আনুষ্ঠানিকভাবে RFC 7807 এর জন্য ProblemDetail ক্লাস যুক্ত করেছে।'
        },
        explanation: {
          en: 'ProblemDetail represents the RFC 7807 specification, standardizing type, title, status, and detail in HTTP API error bodies.',
          bn: 'ProblemDetail ক্লাসটি আন্তর্জাতিক RFC 7807 মান অনুযায়ী এরর রেসপন্স সাজাতে সাহায্য করে।'
        }
      },
      {
        id: 'quiz-pathvariable-vs-requestparam',
        kind: 'mcq',
        topic: 'pathvariable-vs-requestparam-semantics',
        question: {
          en: 'What is the syntactic and semantic difference between @PathVariable and @RequestParam in Spring MVC?',
          bn: 'স্প্রিং MVC-তে @PathVariable এবং @RequestParam এর মধ্যকার সিনট্যাক্স ও ব্যবহারের পার্থক্য কী?'
        },
        options: [
          {
            en: '@PathVariable extracts values directly from URI path segments (e.g. "/users/{id}"), whereas @RequestParam extracts query parameters from the URL query string (e.g. "/users?page=1")',
            bn: '@PathVariable সরাসরি ইউআরআই পথের অংশ থেকে মান বের করে (যেমন "/users/{id}"), আর @RequestParam কুয়েরি স্ট্রিং থেকে মান নেয় (যেমন "/users?page=1")'
          },
          {
            en: '@PathVariable only accepts string variables while @RequestParam only accepts booleans',
            bn: '@PathVariable কেবল স্ট্রিং মান নেয় আর @RequestParam কেবল বুলিয়ান নেয়'
          },
          {
            en: '@RequestParam was deprecated in Spring Boot 2',
            bn: 'স্প্রিং বুট ২ এ @RequestParam বাতিল করা হয়েছে'
          },
          {
            en: 'There is zero difference between PathVariable and RequestParam',
            bn: 'PathVariable এবং RequestParam এর মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'PathVariable matches path template variables; RequestParam matches URL query strings.',
          bn: 'PathVariable ইউআরএল পাথের টেমপ্লেট মেলায়, আর RequestParam কুয়েরি প্যারামিটার ধরে।'
        },
        explanation: {
          en: 'Use @PathVariable for resource identity in REST paths and @RequestParam for filtering, pagination, or query modifiers.',
          bn: 'নির্দিষ্ট রিসোর্স বোঝাতে PathVariable এবং ফিল্টারিং বা সার্চের জন্য RequestParam ব্যবহার করা হয়।'
        }
      },
      {
        id: 'quiz-http-status-responseentity-builder',
        kind: 'mcq',
        topic: 'responseentity-fluent-builder-api',
        question: {
          en: 'Which method on ResponseEntity creates an HTTP 201 Created response containing a Location header in Spring MVC?',
          bn: 'স্প্রিং MVC-তে Location হেডারযুক্ত HTTP 201 Created রেসপন্স তৈরি করতে ResponseEntity এর কোন মেথডটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'ResponseEntity.created(uri).body(payload)', bn: 'ResponseEntity.created(uri).body(payload)' },
          { en: 'ResponseEntity.ok()', bn: 'ResponseEntity.ok()' },
          { en: 'ResponseEntity.status(200)', bn: 'ResponseEntity.status(200)' },
          { en: 'ResponseEntity.redirect()', bn: 'ResponseEntity.redirect()' }
        ],
        answer: 0,
        hint: {
          en: 'ResponseEntity.created(uri) returns a 201 Created response builder.',
          bn: 'ResponseEntity.created(uri) মেথড ২০১ স্ট্যাটাস ও লোকেশন হেডার প্রস্তুত করে।'
        },
        explanation: {
          en: 'ResponseEntity.created(URI) creates a 201 response adhering to RESTful standards for newly instantiated resources.',
          bn: 'নতুন কোনো অবজেক্ট তৈরি হলে RESTful নীতি অনুযায়ী ২০১ Created রেসপন্স পাঠানো আদর্শ রীতি।'
        }
      },
      {
        id: 'quiz-cors-crossorigin-configuration',
        kind: 'mcq',
        topic: 'cors-crossorigin-security-headers',
        question: {
          en: 'How can developers permit Cross-Origin Resource Sharing (CORS) from a frontend web app running on a different domain in Spring MVC?',
          bn: 'স্প্রিং MVC-তে ভিন্ন ডোমেনে চলা ফ্রন্টএন্ড ওয়েব অ্যাপ্লিকেশনের জন্য কীভাবে Cross-Origin Resource Sharing (CORS) অনুমোদন করা হয়?'
        },
        options: [
          {
            en: 'By adding @CrossOrigin(origins = "https://frontend.example.com") to controllers or configuring a WebMvcConfigurer with addCorsMappings',
            bn: 'কন্ট্রোলারে @CrossOrigin(origins = "https://frontend.example.com") যোগ করে অথবা WebMvcConfigurer এর addCorsMappings কনফিগার করে'
          },
          {
            en: 'By turning off the computer firewall completely',
            bn: 'কম্পিউটারের ফায়ারওয়াল সম্পূর্ণরূপে বন্ধ করে দিয়ে'
          },
          {
            en: 'By making all controllers public static void main methods',
            bn: 'সব কন্ট্রোলারকে public static void main বানিয়ে'
          },
          {
            en: 'CORS cannot be resolved in Spring applications',
            bn: 'স্প্রিং অ্যাপ্লিকেশনে CORS সমাধান করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: '@CrossOrigin and WebMvcConfigurer configure allowed origins and HTTP verbs.',
          bn: '@CrossOrigin বা WebMvcConfigurer দিয়ে নির্দিষ্ট ডোমেনের জন্য রিকোয়েস্টের অনুমোদন দেওয়া হয়।'
        },
        explanation: {
          en: 'Spring handles browser CORS pre-flight OPTIONS requests via @CrossOrigin or global WebMvcConfigurer CORS mappings.',
          bn: 'ব্রাউজারের নিরাপত্তা নীতি মেনে নির্দিষ্ট ফ্রন্টএন্ড থেকে এপিআই ব্যবহারের অনুমতি দিতে CORS ম্যাপিং দরকার।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'spring-data-and-the-repo',
    title: {
      en: 'Spring Data JPA, Repositories & Transactions',
      bn: 'স্প্রিং ডেটা JPA, রিপোজিটরি এবং ট্রানজ্যাকশন'
    }
  }
};
