import type { Lesson } from '../../../lib/types';

export const NetsAndWeavesLesson: Lesson = {
  slug: 'nets-and-weaves',
  tech: 'nestjs',
  title: {
    en: 'Lifecycle Interceptors & Filters — Middleware, Interceptors & Exception Filters',
    bn: 'লাইফসাইকেল ইন্টারসেপ্টর ও ফিল্টার — মিডেলওয়্যার, ইন্টারসেপ্টর ও এক্সেপশন ফিল্টার'
  },
  summary: {
    en: 'Mastering the NestJS request lifecycle requires orchestrating layers that wrap and monitor incoming traffic and outgoing responses. In this lesson, you will master the deterministic lifecycle sequence, Aspect-Oriented Programming with RxJS interceptors, response transformation envelopes, and centralized exception filters.',
    bn: 'নেস্ট.জেএস রিকোয়েস্ট লাইফসাইকেল আয়ত্ত করার জন্য ইনকামিং ট্রাফিক এবং আউটগোয়িং রেসপন্স পর্যবেক্ষণকারী স্তরগুলোর সমন্বয় জানা অপরিহার্য। এই পাঠে আপনি নির্দিষ্ট লাইফসাইকেল ক্রম, RxJS ইন্টারসেপ্টর দিয়ে অ্যাসপেক্ট-ওরিয়েন্টেড প্রোগ্রামিং, রেসপন্স রূপান্তর এবং কেন্দ্রীভূত এক্সেপশন ফিল্টার বাস্তবায়ন গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'lifecycle-pipeline-overview',
      text: {
        en: 'The Deterministic Request Lifecycle Pipeline',
        bn: 'সুনির্দিষ্ট রিকোয়েস্ট লাইফসাইকেল পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you trace incoming traffic through a NestJS backend, requests do not jump immediately into controller methods. Nest executes a deterministic sequence of architectural layers designed for cross-cutting concerns: Middleware runs first, followed by Guards, then Interceptors pre-logic, then Pipes, followed by the Controller handler, then Interceptors post-logic, and finally Exception Filters.',
        bn: 'যখন আপনি নেস্ট.জেএস ব্যাকএন্ডের মধ্য দিয়ে ট্রাফিকের গতিবিধি পর্যবেক্ষণ করেন, তখন রিকোয়েস্ট সরাসরি কন্ট্রোলারে চলে যায় না। নেস্ট বিভিন্ন নিরাপত্তা ও পর্যবেক্ষণের জন্য একটি সুনির্দিষ্ট ক্রমানুসারে কাজ সম্পন্ন করে: প্রথমে মিডেলওয়্যার চলে, তারপর গার্ড, এরপর ইন্টারসেপ্টরের শুরুর অংশ, তারপর পাইপ, এরপর কন্ট্রোলার মেথড, এরপর ইন্টারসেপ্টরের শেষের অংশ এবং পরিশেষে এক্সেপশন ফিল্টার।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'NestInterceptor',
          def: {
            en: 'An interface implementing intercept(context, next) that wraps route execution using RxJS Observables to bind extra logic before and after execution.',
            bn: 'একটি ইন্টারফেস যা intercept(context, next) বাস্তবায়ন করে এবং RxJS অবসার্ভেবল ব্যবহার করে কন্ট্রোলার চলার আগে ও পরে অতিরিক্ত কাজ সম্পন্ন করে।'
          }
        },
        {
          term: 'CallHandler & next.handle()',
          def: {
            en: 'An interface representing the execution of the route handler, invoked via next.handle() to return an RxJS Observable of the response.',
            bn: 'একটি ইন্টারফেস যা রুট হ্যান্ডলারের এক্সিকিউশন প্রকাশ করে এবং next.handle() কলের মাধ্যমে রেসপন্সের RxJS অবসার্ভেবল ফেরত দেয়।'
          }
        },
        {
          term: 'ExceptionFilter',
          def: {
            en: 'A class implementing catch(exception, host) decorated with @Catch() that intercepts and serializes unhandled exceptions into uniform HTTP responses.',
            bn: 'একটি ক্লাস যা catch(exception, host) বাস্তবায়ন করে এবং @Catch() ডেকোরেটর দিয়ে অনাকাঙ্ক্ষিত এররগুলোকে ধরে সুন্দর JSON রেসপন্সে রূপান্তর করে।'
          }
        },
        {
          term: 'Aspect-Oriented Programming (AOP)',
          def: {
            en: 'A programming paradigm that enables the separation of cross-cutting concerns like logging, caching, and timing from core business logic.',
            bn: 'একটি প্রোগ্রামিং দর্শন যা লগিং, ক্যাশিং ও সময়ের পরিমাপের মতো সাধারণ কাজগুলোকে মূল ব্যবসায়িক লজিক থেকে সম্পূর্ণ আলাদা রাখে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'lifecycle-order-table',
      text: {
        en: 'The Seven Steps of the NestJS Request Lifecycle',
        bn: 'নেস্ট.জেএস রিকোয়েস্ট লাইফসাইকেলের সাতটি ধাপ'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Step Order', bn: 'ধাপের ক্রম' },
        { en: 'Lifecycle Component', bn: 'লাইফসাইকেল উপাদান' },
        { en: 'Primary Architectural Duty', bn: 'প্রধান দায়িত্ব' }
      ],
      rows: [
        [
          { en: '1. Middleware', bn: '১. মিডেলওয়্যার' },
          { en: 'Global, Module, and Route Middleware', bn: 'গ্লোবাল, মডিউল ও রুট মিডেলওয়্যার' },
          { en: 'Raw socket stream parsing, CORS, body logging, session decoding', bn: 'র সকেট ডাটা পার্সিং, কর্স, বডি লগিং, সেশন ডিকোডিং' }
        ],
        [
          { en: '2. Guards', bn: '২. গার্ড' },
          { en: 'CanActivate Implementations', bn: 'CanActivate বাস্তবায়ন' },
          { en: 'Authentication verification, RBAC permissions, IP allowlisting', bn: 'অথেনটিকেশন যাচাই, রোল পারমিশন, আইপি হোয়াইটলিস্টিং' }
        ],
        [
          { en: '3. Interceptors (Pre)', bn: '৩. ইন্টারসেপ্টর (প্রাক)' },
          { en: 'Logic before next.handle()', bn: 'next.handle() কলের পূর্বের লজিক' },
          { en: 'Starting request performance timers, reading cache stores', bn: 'রিকোয়েস্ট টাইমার শুরু করা, ক্যাশ ডাটা পরীক্ষা' }
        ],
        [
          { en: '4. Pipes', bn: '৪. পাইপ' },
          { en: 'PipeTransform Implementations', bn: 'PipeTransform বাস্তবায়ন' },
          { en: 'Type parsing (ParseIntPipe), DTO class-validator schema validation', bn: 'টাইপ রূপান্তর ও DTO স্কিমা ভ্যালিডেশন' }
        ],
        [
          { en: '5. Controller Handler', bn: '৫. কন্ট্রোলার হ্যান্ডলার' },
          { en: 'Target Route Method', bn: 'টার্গেট রুট মেথড' },
          { en: 'Delegating to services, executing domain logic, returning data', bn: 'সার্ভিসে কাজ পাঠানো, বিজনেস লজিক কার্যকর, ডাটা রিটার্ন' }
        ],
        [
          { en: '6. Interceptors (Post)', bn: '৬. ইন্টারসেপ্টর (উত্তর)' },
          { en: 'RxJS pipe operators (tap, map, catchError)', bn: 'RxJS পাইপ অপারেটর (tap, map, catchError)' },
          { en: 'Wrapping responses into standardized envelopes, logging elapsed time', bn: 'স্ট্যান্ডার্ড এনভেলপে রেসপন্স মোড়ানো, অতিক্রান্ত সময় লগ করা' }
        ],
        [
          { en: '7. Exception Filters', bn: '৭. এক্সেপশন ফিল্টার' },
          { en: 'ExceptionFilter Implementations', bn: 'ExceptionFilter বাস্তবায়ন' },
          { en: 'Catching thrown exceptions and sending formatted HTTP error JSON', bn: 'যেকোনো এরর আটকে সুনির্দিষ্ট ফরম্যাটের JSON এরর পাঠানো' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'interceptor-and-filter-code',
      text: {
        en: 'Working Response Transformation Interceptor and Exception Filter',
        bn: 'কার্যকরী রেসপন্স রূপান্তর ইন্টারসেপ্টর ও এক্সেপশন ফিল্টার'
      }
    },
    {
      type: 'code',
      code: `// Simulation of NestJS Interceptor wrapping and Exception Filter
class TransformInterceptor {
  intercept(handlerFn) {
    const startTime = 100;
    // Execute handler and transform outgoing response envelope
    const rawData = handlerFn();
    const endTime = 145;
    return {
      success: true,
      statusCode: 200,
      data: rawData,
      durationMs: endTime - startTime
    };
  }
}

class AllExceptionsFilter {
  catch(exception) {
    const status = exception.status || 500;
    return {
      success: false,
      statusCode: status,
      message: exception.message || 'Internal server error',
      timestamp: 1711500000
    };
  }
}

// Verification simulation
const interceptor = new TransformInterceptor();
const controllerResponse = () => ({ id: 42, role: 'developer' });
const wrappedResult = interceptor.intercept(controllerResponse);

console.log('Wrapped response success status:', wrappedResult.success);
// -> Wrapped response success status: true
console.log('Elapsed execution duration ms:', wrappedResult.durationMs);
// -> Elapsed execution duration ms: 45
console.log('Intercepted user entity ID:', wrappedResult.data.id);
// -> Intercepted user entity ID: 42`,
      caption: {
        en: 'Interceptor measuring 45 ms duration and wrapping user entity 42',
        bn: 'ইন্টারসেপ্টর ৪৫ মিলিসেকেন্ড সময় পরিমাপ করে ৪২ নম্বর ইউজারকে এনভেলপ করছে'
      }
    },
    {
      type: 'heading',
      id: 'filter-architecture-rules',
      text: {
        en: 'Production Exception Filter Architecture Rules',
        bn: 'প্রোডাকশন এক্সেপশন ফিল্টার আর্কিটেকচার নিয়মাবলী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Default NestJS error handlers expose raw stack traces to the console and return generic 500 error envelopes when unexpected exceptions occur. Custom Exception Filters intercept both known HttpExceptions and unknown runtime errors, ensuring sensitive database credentials are never leaked to external clients.',
        bn: 'ডিফল্ট নেস্ট.জেএস এরর হ্যান্ডলার কনসোলে র স্ট্যাক ট্রেস উন্মুক্ত করে এবং অপ্রত্যাশিত এররে এলোমেলো ৫০০ স্ট্যাটাস পাঠায়। কাস্টম এক্সেপশন ফিল্টার সমস্ত HttpException এবং রানটাইম এরর আটকে দেয়, যা ডাটাবেজ পাসওয়ার্ড বা ভেতরের কোডের তথ্য ক্লায়েন্টের কাছে ফাঁস হওয়া সম্পূর্ণ প্রতিরোধ করে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Register via APP_FILTER: Register global filters using { provide: APP_FILTER, useClass: HttpExceptionFilter } to inject logger dependencies.',
          bn: '১. APP_FILTER ব্যবহার: লগার সার্ভিস ব্যবহারের সুযোগ পেতে রুট মডিউলের providers-এ APP_FILTER দিয়ে গ্লোবাল ফিল্টার রেজিস্টার করুন।'
        },
        {
          en: '2. Measure Latency with tap(): Use the RxJS tap() operator inside interceptors to log exact endpoint request processing durations.',
          bn: '২. tap() দিয়ে সময় পরিমাপ: রুট সম্পন্ন হতে ঠিক কত মিলিসেকেন্ড লেগেছে তা মাপতে ইন্টারসেপ্টরে RxJS tap() অপারেটর ব্যবহার করুন।'
        },
        {
          en: '3. Standardize Response Envelopes: Use the RxJS map() operator inside interceptors to wrap all endpoint responses in a uniform { data, meta } structure.',
          bn: '৩. একরূপ এনভেলপ: সমস্ত সফল রেসপন্সকে একটি ধারাবাহিক { data, meta } ফরম্যাটে সাজাতে ইন্টারসেপ্টরে RxJS map() ব্যবহার করুন।'
        },
        {
          en: '4. Sanitize Error Responses: Never send error.stack to clients in production environments; log stacks internally and send user-friendly messages.',
          bn: '৪. এরর তথ্য সুরক্ষা: প্রোডাকশনে ক্লায়েন্টকে কখনো error.stack পাঠাবেন না; এটি ইন্টারনাল লগারে জমা রাখুন এবং ক্লায়েন্টকে সুন্দর বার্তা দিন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-int-ex1',
      kind: 'mcq',
      topic: 'rxjs callhandler next handle method',
      question: {
        en: 'What does the next.handle() method return inside a NestJS interceptor intercept() method?',
        bn: 'নেস্ট.জেএস ইন্টারসেপ্টরের intercept() মেথডের ভেতরে next.handle() কী ফেরত দেয়?'
      },
      options: [
        {
          en: 'An RxJS Observable representing the response stream returned by the route handler',
          bn: 'একটি RxJS Observable যা রুট হ্যান্ডলারের ফেরত দেওয়া রেসপন্স স্ট্রিমকে প্রকাশ করে'
        },
        {
          en: 'A raw Node.js TCP network socket',
          bn: 'একটি র নোড.জেএস টিসিপি নেটওয়ার্ক সকেট'
        },
        {
          en: 'A boolean value indicating whether the database is connected',
          bn: 'একটি বুলিয়ান মান যা ডাটাবেজ সংযুক্ত কিনা তা নির্দেশ করে'
        },
        {
          en: 'An SQL query string formatted for PostgreSQL',
          bn: 'পোস্টগ্রেসের জন্য তৈরি করা একটি এসকিউএল কুয়েরি টেক্সট'
        }
      ],
      answer: 0,
      hint: {
        en: 'NestJS interceptors are powered by reactive RxJS Observables.',
        bn: 'নেস্ট.জেএস ইন্টারসেপ্টর রিঅ্যাক্টিভ RxJS অবসার্ভেবল দিয়ে পরিচালিত হয়।'
      },
      explanation: {
        en: 'next.handle() invokes the route handler and returns an RxJS Observable, which can be modified using operators like map(), tap(), or catchError().',
        bn: 'next.handle() মেথডটি হ্যান্ডলার চালায় এবং একটি RxJS Observable দেয়, যা map() বা tap() অপারেটর দিয়ে পরিবর্তন করা যায়।'
      }
    },
    {
      id: 'nest-int-ex2',
      kind: 'mcq',
      topic: 'lifecycle execution order position of pipes',
      question: {
        en: 'In the NestJS request lifecycle, at what exact position do Pipes execute relative to Guards and Interceptors?',
        bn: 'নেস্ট.জেএস রিকোয়েস্ট লাইফসাইকেলে গার্ড এবং ইন্টারসেপ্টরের সাপেক্ষে পাইপ ঠিক কোন অবস্থানে কার্যকর হয়?'
      },
      options: [
        {
          en: 'Pipes execute AFTER Guards and the pre-logic of Interceptors, but BEFORE the Controller handler executes',
          bn: 'পাইপ গার্ড এবং ইন্টারসেপ্টরের শুরুর লজিকের পরে চলে, কিন্তু কন্ট্রোলার হ্যান্ডলার চলার ঠিক আগে কার্যকর হয়'
        },
        {
          en: 'Pipes execute before Middleware runs',
          bn: 'পাইপ মিডেলওয়্যার চলার আগে কার্যকর হয়'
        },
        {
          en: 'Pipes execute after the response has already reached the client',
          bn: 'রেসপন্স ক্লায়েন্টের কাছে পৌঁছে যাওয়ার পর পাইপ চলে'
        },
        {
          en: 'Pipes only execute when an unhandled error is thrown',
          bn: 'কেবলমাত্র যখন কোনো এরর ঘটে তখন পাইপ চলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Security (Guards) runs first; then input validation (Pipes) runs on the authorized request.',
        bn: 'আগে নিরাপত্তা (গার্ড) যাচাই হয়; অনুমতি মিললে ইনপুট যাচাই (পাইপ) কাজ করে।'
      },
      explanation: {
        en: 'The execution order is Middleware -> Guards -> Interceptors (pre) -> Pipes -> Controller. Pipes only run if the guard permits access.',
        bn: 'লাইফসাইকেলের নিয়ম হলো মিডেলওয়্যার -> গার্ড -> ইন্টারসেপ্টর -> পাইপ -> কন্ট্রোলার। গার্ড অনুমতি দিলেই কেবল পাইপ ইনপুট ভ্যালিডেশন করে।'
      }
    },
    {
      id: 'nest-int-ex3',
      kind: 'mcq',
      topic: 'catch decorator in exception filters',
      question: {
        en: 'What does decorating an ExceptionFilter class with @Catch() with empty arguments signify?',
        bn: 'কোনো আর্গুমেন্ট না দিয়ে ফাঁকা @Catch() ডেকোরেটর দিয়ে ExceptionFilter বানালে কী বোঝায়?'
      },
      options: [
        {
          en: 'The filter is an "all-exceptions filter" that catches every unhandled exception thrown in the application, regardless of its type or class',
          bn: 'ফিল্টারটি একটি "অল-এক্সেপশন ফিল্টার" যা অ্যাপ্লিকেশনে ঘটা যেকোনো ধরনের অনাকাঙ্ক্ষিত এরর বা এক্সেপশন ধরে ফেলে'
        },
        {
          en: 'The filter is disabled and will never run',
          bn: 'ফিল্টারটি বন্ধ হয়ে যায় এবং কখনোই রান করে না'
        },
        {
          en: 'The filter only catches SyntaxErrors in TypeScript files',
          bn: 'ফিল্টারটি কেবল টাইপস্ক্রিপ্ট ফাইলের সিনট্যাক্স এরর ধরে'
        },
        {
          en: 'The filter automatically restarts the server when any error occurs',
          bn: 'যেকোনো এরর হলে ফিল্টারটি স্বয়ংক্রিয়ভাবে সার্ভার রিস্টার্ট করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'An unparameterized @Catch() acts as a universal catch-all safety net.',
        bn: 'আর্গুমেন্টহীন @Catch() সমস্ত এররের জন্য একটি সার্বজনীন সুরক্ষা জাল হিসেবে কাজ করে।'
      },
      explanation: {
        en: 'Passing no arguments to @Catch() creates a catch-all filter that intercepts all unhandled errors, both HttpExceptions and native unexpected runtime bugs.',
        bn: '@Catch()-এ কোনো আর্গুমেন্ট না দিলে তা সার্বজনীন ফিল্টার হয়, যা HttpException এবং সাধারণ সিস্টেম বাগ উভয়ই আটকে ফেলে।'
      }
    },
    {
      id: 'nest-int-ex4',
      kind: 'mcq',
      topic: 'rxjs tap operator for logging duration',
      question: {
        en: 'Which RxJS operator is ideal for measuring and logging the elapsed execution time of a controller endpoint without modifying the response data?',
        bn: 'রেসপন্স ডাটা পরিবর্তন না করে কোনো কন্ট্রোলার এন্ডপয়েন্টের এক্সিকিউশন সময় মাপতে ও লগ করতে কোন RxJS অপারেটরটি আদর্শ?'
      },
      options: [
        {
          en: 'tap()',
          bn: 'tap()'
        },
        {
          en: 'map()',
          bn: 'map()'
        },
        {
          en: 'mergeMap()',
          bn: 'mergeMap()'
        },
        {
          en: 'reduce()',
          bn: 'reduce()'
        }
      ],
      answer: 0,
      hint: {
        en: 'The tap operator executes side effects without altering the values in the stream.',
        bn: 'tap অপারেটর স্ট্রিমের মান পরিবর্তন না করেই সাইড-ইফেক্ট বা লগিংয়ের কাজ চালায়।'
      },
      explanation: {
        en: 'tap() observes stream events to execute side-effects (like calculating Date.now() - start and logging) without mutating the emitted response data.',
        bn: 'tap() ডাটার কোনো পরিবর্তন না ঘটিয়েই অতিক্রান্ত সময় হিসাব করে তা কনসোল বা লগারে লিখে রাখতে পারে।'
      }
    }
  ],
  quiz: {
    id: 'nets-and-weaves-quiz',
    title: {
      en: 'Lifecycle Interceptors & Filters Quiz',
      bn: 'লাইফসাইকেল ইন্টারসেপ্টর ও ফিল্টার কুইজ'
    },
    questions: [
      {
        id: 'q-response-envelope-map-operator',
        kind: 'mcq',
        topic: 'response mapping with rxjs map operator in interceptor',
        question: {
          en: 'How does an interceptor use the RxJS map() operator to enforce a uniform API response structure like { success: true, data: result }?',
          bn: 'একটি ইন্টারসেপ্টর কীভাবে RxJS map() অপারেটর ব্যবহার করে { success: true, data: result }-এর মতো একীভূত রেসপন্স তৈরি করে?'
        },
        options: [
          {
            en: 'return next.handle().pipe(map(data => ({ success: true, data })));',
            bn: 'return next.handle().pipe(map(data => ({ success: true, data })));'
          },
          {
            en: 'return res.json({ success: true });',
            bn: 'return res.json({ success: true });'
          },
          {
            en: 'next.handle().subscribe()',
            bn: 'next.handle().subscribe()'
          },
          {
            en: 'app.useResponseEnvelope()',
            bn: 'app.useResponseEnvelope()'
          }
        ],
        answer: 0,
        hint: {
          en: 'Interceptors pipe the Observable returned by next.handle() through map.',
          bn: 'ইন্টারসেপ্টর next.handle() থেকে প্রাপ্ত অবসার্ভেবলকে map-এর মধ্য দিয়ে পাইপ করে।'
        },
        explanation: {
          en: 'Piping next.handle() through the RxJS map() operator transforms the value emitted by the controller before Nest serializes it to the client.',
          bn: 'next.handle()-কে map() দিয়ে পাইপ করলে কন্ট্রোলারের ফেরত দেওয়া ডাটা ক্লায়েন্টে যাওয়ার আগেই সুন্দর এনভেলপে মোড়ানো যায়।'
        }
      },
      {
        id: 'q-exception-filter-host-arguments',
        kind: 'mcq',
        topic: 'argumentshost in exceptionfilter',
        question: {
          en: 'In an ExceptionFilter catch(exception, host) method, how does the filter access the underlying Express response object to send an HTTP status?',
          bn: 'একটি ExceptionFilter catch(exception, host) মেথডে কীভাবে আন্ডারলাইং এক্সপ্রেস রেসপন্স অবজেক্ট অ্যাক্সেস করা হয়?'
        },
        options: [
          {
            en: 'const ctx = host.switchToHttp(); const response = ctx.getResponse(); response.status(status).json(errorPayload);',
            bn: 'const ctx = host.switchToHttp(); const response = ctx.getResponse(); response.status(status).json(errorPayload);'
          },
          {
            en: 'const response = host.getExpressSocket();',
            bn: 'const response = host.getExpressSocket();'
          },
          {
            en: 'process.stdout.write(exception.message);',
            bn: 'process.stdout.write(exception.message);'
          },
          {
            en: 'host.terminateRequestImmediately();',
            bn: 'host.terminateRequestImmediately();'
          }
        ],
        answer: 0,
        hint: {
          en: 'host.switchToHttp() extracts the HTTP-specific context and getResponse() provides the response object.',
          bn: 'host.switchToHttp() এইচটিটিপি কনটেক্সট বের করে এবং getResponse() রেসপন্স অবজেক্ট দেয়।'
        },
        explanation: {
          en: 'host.switchToHttp() provides the HttpArgumentsHost, giving direct access to getResponse() to set the HTTP status and return formatted JSON.',
          bn: 'host.switchToHttp() মেথডটি getResponse() সরবরাহ করে যা দিয়ে সরাসরি এইচটিটিপি স্ট্যাটাস এবং JSON এরর ক্লায়েন্টে পাঠানো যায়।'
        }
      },
      {
        id: 'q-timeout-interceptor-pattern',
        kind: 'mcq',
        topic: 'request timeout handling with rxjs timeout operator',
        question: {
          en: 'How can an interceptor automatically cancel and reject route requests that take longer than 5 seconds to complete?',
          bn: 'কোনো রিকোয়েস্ট ৫ সেকেন্ডের বেশি সময় নিলে ইন্টারসেপ্টর কীভাবে স্বয়ংক্রিয়ভাবে তা বাতিল ও রিজেক্ট করতে পারে?'
        },
        options: [
          {
            en: 'Pipe next.handle() through the RxJS timeout(5000) operator and catch TimeoutError to throw a RequestTimeoutException (408)',
            bn: 'next.handle()-কে RxJS timeout(5000) দিয়ে পাইপ করে TimeoutError ঘটলে RequestTimeoutException (৪০৮) ছুড়ে দিয়ে'
          },
          {
            en: 'By terminating the physical network cable connection',
            bn: 'ফিজিক্যাল নেটওয়ার্ক তারের সংযোগ কেটে দিয়ে'
          },
          {
            en: 'By restarting the operating system every 5 seconds',
            bn: 'প্রতি ৫ সেকেন্ড পর পর অপারেটিং সিস্টেম রিস্টার্ট দিয়ে'
          },
          {
            en: 'By changing the TypeScript tsconfig.json compiler settings',
            bn: 'টাইপস্ক্রিপ্টের tsconfig.json সেটিংস পরিবর্তন করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'RxJS provides a built-in timeout() operator for Observables.',
          bn: 'RxJS অবসার্ভেবলের জন্য বিল্ট-ইন timeout() অপারেটর সরবরাহ করে।'
        },
        explanation: {
          en: 'Adding timeout(5000) to next.handle().pipe() emits a TimeoutError if the controller does not resolve in 5000ms, which can be caught and returned as HTTP 408.',
          bn: 'next.handle().pipe(timeout(5000)) দিলে ৫ সেকেন্ডে কাজ শেষ না হলে TimeoutError ঘটে, যা ধরে ক্লায়েন্টকে ৪০৮ টাইমআউট এরর দেওয়া যায়।'
        }
      },
      {
        id: 'q-interceptor-caching-aop',
        kind: 'mcq',
        topic: 'cache interceptor aop pattern',
        question: {
          en: 'How does a CacheInterceptor return cached responses without allowing the downstream controller handler to execute?',
          bn: 'একটি CacheInterceptor ডাউনস্ট্রিম কন্ট্রোলার মেথডকে না চালিয়েই কীভাবে সরাসরি ক্যাশ থেকে রেসপন্স ফেরত দিতে পারে?'
        },
        options: [
          {
            en: 'If a cached value exists in Redis/memory, it returns of(cachedData) immediately without calling next.handle(), short-circuiting the handler completely',
            bn: 'ক্যাশে ডাটা থাকলে এটি next.handle() কল না করে সরাসরি of(cachedData) রিটার্ন করে, ফলে কন্ট্রোলার চলার প্রয়োজনই পড়ে না'
          },
          {
            en: 'It deletes all files in the controller directory',
            bn: 'এটি কন্ট্রোলার ডিরেক্টরির সমস্ত ফাইল মুছে ফেলে'
          },
          {
            en: 'It sends a 500 error to the client browser',
            bn: 'এটি ক্লায়েন্ট ব্রাউজারে ৫০০ এরর পাঠিয়ে দেয়'
          },
          {
            en: 'It reboots the PostgreSQL database server',
            bn: 'এটি পোস্টগ্রেস ডাটাবেজ সার্ভার রিবুট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If next.handle() is never called, the controller handler is skipped entirely.',
          bn: 'next.handle() কল না করলে কন্ট্রোলার হ্যান্ডলার সম্পূর্ণ বাইপাস হয়ে যায়।'
        },
        explanation: {
          en: 'By returning an RxJS of(cachedData) Observable directly and omitting next.handle(), the interceptor short-circuits the pipeline, saving database work.',
          bn: 'next.handle() না ডেকে সরাসরি of(cachedData) দিলে কন্ট্রোলার আর চলে না, যার ফলে ডাটাবেজে কোনো বাড়তি চাপ পড়ে না।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-franchise-opens',
    title: {
      en: 'Production Testing & Observability — Test Modules, Supertest e2e & Health Checks',
      bn: 'প্রোডাকশন টেস্টিং ও অবজারভ্যাবিলিটি — টেস্ট মডিউল, সুপারটেস্ট e2e ও হেলথ চেক'
    }
  }
};
