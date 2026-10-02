import type { Lesson } from '../../../lib/types';

export const PipesAndValidationLesson: Lesson = {
  slug: 'pipes-and-validation',
  tech: 'nestjs',
  title: {
    en: 'Pipes & Request Validation — DTOs, class-validator & Transformations',
    bn: 'পাইপ ও রিকোয়েস্ট ভ্যালিডেশন — DTO, class-validator ও ট্রান্সফরমেশন'
  },
  summary: {
    en: 'Incoming client payloads must be verified, sanitized, and coerced into strongly-typed objects before executing domain logic. In this lesson, you will master NestJS Pipe architecture, built-in transformation pipes, Data Transfer Object (DTO) schemas with class-validator, whitelist stripping, and automatic type coercion via ValidationPipe.',
    bn: 'ডোমেন লজিকে প্রবেশের আগেই ক্লায়েন্ট থেকে আসা ইনপুট যাচাই, ক্ষতিকর ডাটা অপসারণ এবং কঠোর টাইপে রূপান্তর করা আবশ্যক। এই পাঠে আপনি নেস্ট.জেএস পাইপ আর্কিটেকচার, বিল্ট-ইন ট্রান্সফরমেশন পাইপ, class-validator সহ DTO স্কিমা, অতিরিক্ত ফিল্ড ছাঁটাই এবং ValidationPipe দিয়ে স্বয়ংক্রিয় টাইপ রূপান্তর গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'pipes-architecture-overview',
      text: {
        en: 'The Request Transformation and Validation Pipeline',
        bn: 'রিকোয়েস্ট রূপান্তর ও ভ্যালিডেশন পাইপলাইন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When you build Application Programming Interfaces (APIs), incoming payloads often contain invalid formats or malicious properties. In NestJS, Pipes sit directly before controller route handlers. They perform two critical duties: transforming raw string inputs into target types, and validating data constraints before controller execution begins.',
        bn: 'যখন আপনি অ্যাপ্লিকেশন প্রোগ্রামিং ইন্টারফেস (APIs) তৈরি করেন, তখন ইনকামিং পেলোডে ভুল ফরম্যাট বা ক্ষতিকর প্রোপার্টি থাকতে পারে। নেস্ট.জেএস-এ পাইপগুলো সরাসরি কন্ট্রোলারের সামনে অবস্থান করে। তারা দুটি অত্যন্ত গুরুত্বপূর্ণ দায়িত্ব পালন করে: ইনপুটকে সঠিক টাইপে রূপান্তর করা এবং কন্ট্রোলারে যাওয়ার আগেই সমস্ত শর্ত নিখুঁতভাবে যাচাই করা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'PipeTransform<T, R>',
          def: {
            en: 'The core NestJS interface implemented by pipes requiring a transform(value, metadata) method returning the coerced value or throwing an exception.',
            bn: 'মূল নেস্ট.জেএস ইন্টারফেস যা প্রতিটি পাইপে transform(value, metadata) মেথড বাস্তবায়ন বাধ্যতামূলক করে।'
          }
        },
        {
          term: 'Data Transfer Object (DTO)',
          def: {
            en: 'A TypeScript class defining the shape, types, and validation decorators for incoming request payloads across network boundaries.',
            bn: 'একটি টাইপস্ক্রিপ্ট ক্লাস যা নেটওয়ার্কের মধ্য দিয়ে আসা রিকোয়েস্ট বডির আকার, টাইপ এবং ভ্যালিডেশন নিয়মাবলী নির্ধারণ করে।'
          }
        },
        {
          term: 'whitelist: true',
          def: {
            en: 'ValidationPipe configuration that automatically strips any property from the incoming payload that lacks a class-validator decorator.',
            bn: 'ValidationPipe-এর কনফিগারেশন যা DTO-তে ডেকোরেটরবিহীন যেকোনো অতিরিক্ত অপ্রয়োজনীয় প্রোপার্টি স্বয়ংক্রিয়ভাবে মুছে ফেলে।'
          }
        },
        {
          term: 'transform: true',
          def: {
            en: 'ValidationPipe configuration that automatically converts plain JSON objects into typed instances of their corresponding DTO classes.',
            bn: 'ValidationPipe-এর কনফিগারেশন যা সাধারণ জেএসন অবজেক্টকে স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট DTO ক্লাসের টাইপড অবজেক্টে রূপান্তর করে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'built-in-pipes-table',
      text: {
        en: 'NestJS Built-in Transformation Pipes Matrix',
        bn: 'নেস্ট.জেএস বিল্ট-ইন রূপান্তর পাইপ ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Pipe Name', bn: 'পাইপের নাম' },
        { en: 'Input Type Received', bn: 'ইনপুট টাইপ' },
        { en: 'Output Transformed Type', bn: 'রূপান্তরিত টাইপ' }
      ],
      rows: [
        [
          { en: 'ParseIntPipe', bn: 'ParseIntPipe' },
          { en: 'String (e.g. "42")', bn: 'স্ট্রিং (যেমন "42")' },
          { en: 'JavaScript integer (42)', bn: 'জাভাস্ক্রিপ্ট পূর্ণসংখ্যা (42)' }
        ],
        [
          { en: 'ParseFloatPipe', bn: 'ParseFloatPipe' },
          { en: 'String (e.g. "3.1415")', bn: 'স্ট্রিং (যেমন "3.1415")' },
          { en: 'JavaScript floating-point number', bn: 'জাভাস্ক্রিপ্ট দশমিক সংখ্যা' }
        ],
        [
          { en: 'ParseBoolPipe', bn: 'ParseBoolPipe' },
          { en: 'String ("true" or "false")', bn: 'স্ট্রিং ("true" বা "false")' },
          { en: 'JavaScript boolean primitive', bn: 'জাভাস্ক্রিপ্ট বুলিয়ান মান' }
        ],
        [
          { en: 'ParseUUIDPipe', bn: 'ParseUUIDPipe' },
          { en: 'String (UUID v4 format)', bn: 'স্ট্রিং (UUID v4 ফরম্যাট)' },
          { en: 'Validated UUID string, 400 on invalid format', bn: 'যাচাইকৃত UUID স্ট্রিং, ভুল হলে ৪০০ এরর' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'validation-pipe-code',
      text: {
        en: 'Working DTO Validation and Whitelist Filtering Simulation',
        bn: 'কার্যকরী DTO ভ্যালিডেশন ও হোয়াইটলিস্ট ফিল্টারিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of NestJS ValidationPipe and Whitelist stripping
class CreateOrderDto {
  constructor(data) {
    this.itemId = data.itemId;
    this.quantity = data.quantity;
  }

  static validate(payload) {
    const errors = [];
    if (typeof payload.itemId !== 'number') {
      errors.push('itemId must be a valid number');
    }
    if (typeof payload.quantity !== 'number' || payload.quantity < 1) {
      errors.push('quantity must be at least 1');
    }
    return { isValid: errors.length === 0, errors };
  }
}

// ValidationPipe simulation with whitelist: true
function executeValidationPipe(rawBody, DtoClass) {
  // 1. Whitelist stripping: only keep properties declared on DTO
  const allowedKeys = ['itemId', 'quantity'];
  const sanitized = {};
  for (const key of allowedKeys) {
    if (rawBody[key] !== undefined) {
      sanitized[key] = rawBody[key];
    }
  }

  // 2. Schema validation
  const audit = DtoClass.validate(sanitized);
  return {
    valid: audit.isValid,
    sanitizedPayload: audit.isValid ? new DtoClass(sanitized) : null,
    errors: audit.errors
  };
}

// Verification with extra unwhitelisted property injection attempt
const maliciousPayload = { itemId: 501, quantity: 3, isAdmin: true };
const result = executeValidationPipe(maliciousPayload, CreateOrderDto);

console.log('Payload passed validation:', result.valid);
// -> Payload passed validation: true
console.log('Admin flag stripped status:', result.sanitizedPayload.isAdmin === undefined);
// -> Admin flag stripped status: true
console.log('Processed order quantity:', result.sanitizedPayload.quantity);
// -> Processed order quantity: 3`,
      caption: {
        en: 'ValidationPipe successfully stripping isAdmin and preserving 3 quantity',
        bn: 'ValidationPipe ক্ষতিকর isAdmin মুছে ৩টি পণ্যের অর্ডার অনুমোদন করছে'
      }
    },
    {
      type: 'heading',
      id: 'whitelist-and-transforms',
      text: {
        en: 'Production Configuration for Global ValidationPipe',
        bn: 'গ্লোবাল ValidationPipe-এর প্রোডাকশন কনফিগারেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In production NestJS deployments, you should always register a global ValidationPipe inside main.ts with whitelist: true and transform: true enabled. This prevents Mass Assignment vulnerabilities where malicious users attempt to inject roles or administrative privileges through unvetted request fields.',
        bn: 'প্রোডাকশন নেস্ট.জেএস অ্যাপ্লিকেশনে সর্বদা main.ts ফাইলে whitelist: true এবং transform: true সক্রিয় করে গ্লোবাল ValidationPipe নিবন্ধন করা উচিত। এটি ম্যাস অ্যাসাইনমেন্ট আক্রমণ প্রতিহত করে যাতে আক্রমণকারীরা অতিরিক্ত ফিল্ড পাঠিয়ে নিজেদের অ্যাডমিন বানাতে না পারে।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Enable Whitelist Stripping: Set whitelist: true to silently discard properties that lack class-validator decorators.',
          bn: '১. হোয়াইটলিস্ট ফিল্টারিং: DTO-তে নেই এমন যেকোনো অতিরিক্ত ফিল্ড নীরবে মুছে ফেলতে whitelist: true ব্যবহার করুন।'
        },
        {
          en: '2. Enforce Strict Rejection: Set forbidNonWhitelisted: true to throw a 400 Bad Request error if unexpected fields are submitted.',
          bn: '২. কঠোর ফিল্ড যাচাই: অতিরিক্ত কোনো ফিল্ড পাঠালে সরাসরি ৪০০ এরর ছুড়তে forbidNonWhitelisted: true দিন।'
        },
        {
          en: '3. Auto-Transform DTO Classes: Set transform: true to coerce plain request JSON objects into typed class instances.',
          bn: '৩. অটো-ট্রান্সফর্ম: রিকোয়েস্টের জেএসন ডাটাকে স্বয়ংক্রিয়ভাবে DTO ক্লাসের আসল ইনস্ট্যান্সে রূপান্তর করতে transform: true দিন।'
        },
        {
          en: '4. Validate Nested Objects: Use @ValidateNested() combined with @Type(() => ChildDto) when validating nested child objects.',
          bn: '৪. নেস্টেড অবজেক্ট যাচাই: অবজেক্টের ভেতরে আরেকটি অবজেক্ট থাকলে @ValidateNested() এবং @Type() একসাথে ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nest-pipe-ex1',
      kind: 'mcq',
      topic: 'pipetransform interface signature',
      question: {
        en: 'What is the mandatory method signature that must be implemented by any custom NestJS pipe class?',
        bn: 'যেকোনো কাস্টম নেস্ট.জেএস পাইপ ক্লাসে কোন মেথডটি বাস্তবায়ন করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'transform(value: any, metadata: ArgumentMetadata)',
          bn: 'transform(value: any, metadata: ArgumentMetadata)'
        },
        {
          en: 'validateRequest(req: Request, res: Response)',
          bn: 'validateRequest(req: Request, res: Response)'
        },
        {
          en: 'executePipeline(socket: Socket)',
          bn: 'executePipeline(socket: Socket)'
        },
        {
          en: 'filterDto(schema: Schema)',
          bn: 'filterDto(schema: Schema)'
        }
      ],
      answer: 0,
      hint: {
        en: 'The method is called transform, taking the incoming value and parameter metadata.',
        bn: 'মেথডটির নাম transform, যা ইনকামিং ভ্যালু এবং প্যারামিটার মেটাডাটা গ্রহণ করে।'
      },
      explanation: {
        en: 'The PipeTransform interface requires the transform(value, metadata) method, which processes the input value and returns the transformed result.',
        bn: 'PipeTransform ইন্টারফেসটি transform(value, metadata) মেথড বাস্তবায়ন বাধ্যতামূলক করে যা ডাটা রূপান্তর করে ফেরত দেয়।'
      }
    },
    {
      id: 'nest-pipe-ex2',
      kind: 'mcq',
      topic: 'whitelist true security mitigation',
      question: {
        en: 'Which serious cybersecurity vulnerability is mitigated by setting { whitelist: true } in NestJS ValidationPipe?',
        bn: 'নেস্ট.জেএস ValidationPipe-এ { whitelist: true } কনফিগার করলে কোন মারাত্মক সাইবার নিরাপত্তা ঝুঁকি দূর হয়?'
      },
      options: [
        {
          en: 'Mass Assignment vulnerabilities where attackers attempt to set unauthorized fields like "isAdmin: true" or "balance: 999999"',
          bn: 'ম্যাস অ্যাসাইনমেন্ট দুর্বলতা যেখানে আক্রমণকারীরা "isAdmin: true" বা "balance: 999999"-এর মতো অননুমোদিত ফিল্ড ইনজেক্ট করার চেষ্টা করে'
        },
        {
          en: 'Physical hardware overheating on cloud server CPUs',
          bn: 'ক্লাউড সার্ভারের সিপিইউ অতিরিক্ত গরম হয়ে যাওয়ার ঝুঁকি'
        },
        {
          en: 'Cross-Site Scripting (XSS) in local desktop CSS files',
          bn: 'লোকাল ডেস্কটপ সিএসএস ফাইলে এক্সএসএস আক্রমণ'
        },
        {
          en: 'Internet DNS routing lookup failures',
          bn: 'ইন্টারনেট ডিএনএস রাউটিং অনুসন্ধান ব্যর্থতা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Attackers try to modify internal database properties by sending uninvited fields in the JSON body.',
        bn: 'আক্রমণকারীরা রিকোয়েস্ট বডিতে অননুমোদিত ফিল্ড পাঠিয়ে ডাটাবেজের গোপন কলাম বদলে দিতে চায়।'
      },
      explanation: {
        en: 'Mass Assignment occurs when extra payload fields are persisted into database entities. whitelist: true strips all unannotated fields, preventing privilege escalation.',
        bn: 'ম্যাস অ্যাসাইনমেন্ট হলে অতিরিক্ত ফিল্ড সরাসরি ডাটাবেজে ঢুকে যায়। whitelist: true থাকলে DTO-বহির্ভূত সমস্ত ফিল্ড ছাঁটাই হয়ে যায়।'
      }
    },
    {
      id: 'nest-pipe-ex3',
      kind: 'mcq',
      topic: 'transform true option in validationpipe',
      question: {
        en: 'What transformation does { transform: true } perform on incoming controller parameters decorated with a DTO class type?',
        bn: 'DTO ক্লাস টাইপ থাকা কন্ট্রোলার প্যারামিটারে { transform: true } কোন রূপান্তর সম্পন্ন করে?'
      },
      options: [
        {
          en: 'It converts the raw plain JavaScript object into a genuine instance of the target DTO class, enabling class methods and prototypes',
          bn: 'এটি সাধারণ জাভাস্ক্রিপ্ট অবজেক্টকে সংশ্লিষ্ট DTO ক্লাসের আসল ইনস্ট্যান্সে রূপান্তর করে, ফলে ক্লাসের মেথড ও প্রোটোটাইপ সচল হয়'
        },
        {
          en: 'It translates English strings into French text automatically',
          bn: 'এটি ইংরেজি টেক্সটকে স্বয়ংক্রিয়ভাবে ফরাসি ভাষায় রূপান্তর করে'
        },
        {
          en: 'It encrypts the DTO object with an RSA public key',
          bn: 'এটি আরএসএ পাবলিক কি দিয়ে DTO অবজেক্টটিকে এনক্রিপ্ট করে'
        },
        {
          en: 'It converts all numbers into floating-point numbers',
          bn: 'এটি সমস্ত সংখ্যাকে দশমিক সংখ্যায় রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It uses class-transformer under the hood to instantiate the class.',
        bn: 'এটি ভেতরে class-transformer ব্যবহার করে ক্লাসটির অবজেক্ট তৈরি করে।'
      },
      explanation: {
        en: 'With transform: true, Nest uses plainToInstance() from class-transformer to instantiate the DTO class, rather than leaving it as a raw object literal.',
        bn: 'transform: true দিলে নেস্ট সাধারণ অবজেক্ট রাখার বদলে class-transformer দিয়ে DTO ক্লাসের সত্যিকারের অবজেক্ট বানিয়ে দেয়।'
      }
    },
    {
      id: 'nest-pipe-ex4',
      kind: 'mcq',
      topic: 'parseuuidpipe version validation',
      question: {
        en: 'How do you configure ParseUUIDPipe to enforce that an incoming :id parameter must strictly be a UUID version 4 string?',
        bn: 'ইনকামিং :id প্যারামিটারটি কঠোরভাবে একটি UUID সংস্করণ ৪ স্ট্রিং হতে হবে তা নিশ্চিত করতে ParseUUIDPipe কীভাবে কনফিগার করবেন?'
      },
      options: [
        {
          en: '@Param("id", new ParseUUIDPipe({ version: "4" }))',
          bn: '@Param("id", new ParseUUIDPipe({ version: "4" }))'
        },
        {
          en: '@Param("id", ParseIntPipe)',
          bn: '@Param("id", ParseIntPipe)'
        },
        {
          en: '@Param("id", new ParseBoolPipe({ isUuid: true }))',
          bn: '@Param("id", new ParseBoolPipe({ isUuid: true }))'
        },
        {
          en: '@Param("id") where id is defined as an SQL integer',
          bn: '@Param("id") যেখানে id-কে এসকিউএল পূর্ণসংখ্যা হিসেবে রাখা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pass an options object specifying { version: "4" } to the ParseUUIDPipe constructor.',
        bn: 'ParseUUIDPipe কনস্ট্রাক্টরে { version: "4" } অপশন পাস করতে হয়।'
      },
      explanation: {
        en: 'ParseUUIDPipe accepts a version option (such as "3", "4", or "5") to validate whether the string conforms to that specific UUID specification.',
        bn: 'ParseUUIDPipe-এ version অপশন ("4") দেওয়া যায় যা নিশ্চিত করে যে স্ট্রিংটি নির্ধারিত UUID v4 ফরম্যাট মেনে তৈরি।'
      }
    }
  ],
  quiz: {
    id: 'pipes-and-validation-quiz',
    title: {
      en: 'Pipes & Request Validation Quiz',
      bn: 'পাইপ ও রিকোয়েস্ট ভ্যালিডেশন কুইজ'
    },
    questions: [
      {
        id: 'q-forbid-non-whitelisted-difference',
        kind: 'mcq',
        topic: 'forbidnonwhitelisted vs whitelist',
        question: {
          en: 'How does the behavior of ValidationPipe change when forbidNonWhitelisted: true is combined with whitelist: true?',
          bn: 'whitelist: true-এর সাথে forbidNonWhitelisted: true যুক্ত করলে ValidationPipe-এর আচরণে কী পরিবর্তন ঘটে?'
        },
        options: [
          {
            en: 'Instead of silently stripping unrecognized properties, ValidationPipe stops execution and throws an HTTP 400 Bad Request error listing the invalid properties',
            bn: 'অপরিচিত প্রোপার্টিগুলো নীরবে মুছে ফেলার বদলে এটি এক্সিকিউশন থামিয়ে দেয় এবং অবৈধ প্রোপার্টির তালিকাসহ ৪০০ ব্যাড রিকোয়েস্ট এরর ছুড়ে দেয়'
          },
          {
            en: 'It deletes the client IP address from the Redis database',
            bn: 'এটি রেডিস ডাটাবেজ থেকে ক্লায়েন্টের আইপি অ্যাড্রেস মুছে ফেলে'
          },
          {
            en: 'It allows any property to pass through without validation',
            bn: 'এটি যেকোনো প্রোপার্টিকে কোনো যাচাই ছাড়াই পাস হতে দেয়'
          },
          {
            en: 'It converts the incoming JSON payload into raw HTML text',
            bn: 'এটি ইনকামিং জেএসন পেলোডকে সরাসরি র এইচটিএমএল টেক্সটে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'forbidNonWhitelisted makes unexpected fields a hard failure rather than a silent strip.',
          bn: 'forbidNonWhitelisted অতিরিক্ত ফিল্ড পেলে নীরবে না কেটে স্পষ্টভাবে এরর ফেরত দেয়।'
        },
        explanation: {
          en: 'whitelist: true silently strips unknown fields. Adding forbidNonWhitelisted: true forces the pipe to reject the request with 400 Bad Request if extra fields are present.',
          bn: 'whitelist অতিরিক্ত ফিল্ড কেটে বাদ দেয়। কিন্তু forbidNonWhitelisted দিলে বাড়তি ফিল্ড থাকা মাত্রই রিকোয়েস্ট রিজেক্ট করে ৪০০ এরর পাঠানো হয়।'
        }
      },
      {
        id: 'q-class-validator-nested-dto',
        kind: 'mcq',
        topic: 'nested dto validation with class-validator',
        question: {
          en: 'Which pair of decorators is required on a DTO property to validate a nested child object (e.g. user address)?',
          bn: 'একটি নেস্টেড চাইল্ড অবজেক্ট (যেমন ব্যবহারকারীর ঠিকানা) যাচাই করতে DTO প্রোপার্টিতে কোন দুটি ডেকোরেটর থাকা আবশ্যক?'
        },
        options: [
          {
            en: '@ValidateNested() from class-validator AND @Type(() => AddressDto) from class-transformer',
            bn: 'class-validator থেকে @ValidateNested() এবং class-transformer থেকে @Type(() => AddressDto)'
          },
          {
            en: '@IsString() and @IsInt()',
            bn: '@IsString() এবং @IsInt()'
          },
          {
            en: '@Injectable() and @Controller()',
            bn: '@Injectable() এবং @Controller()'
          },
          {
            en: '@Global() and @Module()',
            bn: '@Global() এবং @Module()'
          }
        ],
        answer: 0,
        hint: {
          en: 'You must tell class-transformer what class to instantiate, and class-validator to inspect the nested constraints.',
          bn: 'class-transformer-কে টার্গেট ক্লাস চেনাতে হয় এবং class-validator-কে নেস্টেড ফিল্ড চেক করতে বলতে হয়।'
        },
        explanation: {
          en: 'Without @Type(() => ChildDto), plain JSON objects are not instantiated as class instances, causing @ValidateNested() to fail to inspect child rules.',
          bn: '@Type() ছাড়া সাধারণ অবজেক্ট ক্লাসের ইনস্ট্যান্স হয় না, ফলে @ValidateNested() ভেতরের নিয়মগুলো পরীক্ষা করতে পারে না।'
        }
      },
      {
        id: 'q-defaultvaluepipe-usecase',
        kind: 'mcq',
        topic: 'defaultvaluepipe for optional query parameters',
        question: {
          en: 'What is the primary operational purpose of utilizing DefaultValuePipe in controller method arguments?',
          bn: 'কন্ট্রোলার মেথড আর্গুমেন্টে DefaultValuePipe ব্যবহারের প্রধান পরিচালন উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To provide fallback values for optional query or param fields (such as defaulting page to 1 and limit to 10) before transformation pipes run',
            bn: 'রূপান্তর পাইপ চলার আগে ঐচ্ছিক কোয়েরি বা প্যারামিটারে ডিফল্ট মান (যেমন পেজ ১ এবং লিমিট ১০) প্রদান করা'
          },
          {
            en: 'To encrypt database passwords with a default secret key',
            bn: 'একটি ডিফল্ট সিক্রেট কি দিয়ে ডাটাবেজ পাসওয়ার্ড এনক্রিপ্ট করা'
          },
          {
            en: 'To set default CSS fonts on frontend web components',
            bn: 'ফ্রন্টএন্ড ওয়েব কম্পোনেন্টে ডিফল্ট সিএসএস ফন্ট নির্ধারণ করা'
          },
          {
            en: 'DefaultValuePipe is only used for WebSockets connections',
            bn: 'DefaultValuePipe কেবল ওয়েবসকেট সংযোগের ক্ষেত্রে ব্যবহৃত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'It guarantees a fallback value exists if the client omitted the parameter.',
          bn: 'ক্লায়েন্ট প্যারামিটার না পাঠালে এটি একটি নিশ্চিত ডিফল্ট মান সরবরাহ করে।'
        },
        explanation: {
          en: 'DefaultValuePipe injects a fallback value if the parameter is undefined. This is commonly chained before ParseIntPipe for query pagination.',
          bn: 'প্যারামিটার না থাকলে DefaultValuePipe একটি ফলব্যাক মান বসিয়ে দেয়, যা পেজিনেশনের ক্ষেত্রে ParseIntPipe-এর আগে বহুল ব্যবহৃত।'
        }
      },
      {
        id: 'q-dto-runtime-vs-interface',
        kind: 'mcq',
        topic: 'dto class vs interface in typescript',
        question: {
          en: 'Why must NestJS DTOs be implemented as TypeScript classes rather than TypeScript interfaces?',
          bn: 'নেস্ট.জেএস DTO-কে টাইপস্ক্রিপ্ট ইন্টারফেসের বদলে ক্লাস হিসেবে তৈরি করা কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'TypeScript interfaces are completely removed during compilation to JavaScript, whereas classes exist as runtime objects where decorators and metadata persist',
            bn: 'টাইপস্ক্রিপ্ট ইন্টারফেস কম্পাইলেশনের সময় সম্পূর্ণ মুছে যায়, কিন্তু ক্লাস রানটাইমে টিকে থাকে যেখানে ডেকোরেটর ও মেটাডাটা সংরক্ষিত থাকে'
          },
          {
            en: 'Interfaces take up 10 times more memory in Node.js',
            bn: 'নোড.জেএস-এ ইন্টারফেস দশ গুণ বেশি মেমরি দখল করে'
          },
          {
            en: 'Classes automatically connect to PostgreSQL databases',
            bn: 'ক্লাস স্বয়ংক্রিয়ভাবে পোস্টগ্রেস ডাটাবেজের সাথে সংযুক্ত হয়'
          },
          {
            en: 'TypeScript interfaces are banned in Linux environments',
            bn: 'লিনাক্স পরিবেশে টাইপস্ক্রিপ্ট ইন্টারফেস নিষিদ্ধ করা হয়েছে'
          }
        ],
        answer: 0,
        hint: {
          en: 'JavaScript has no concept of interfaces at runtime after compilation.',
          bn: 'কম্পাইলেশনের পর রানটাইম জাভাস্ক্রিপ্টে ইন্টারফেসের কোনো অস্তিত্ব থাকে না।'
        },
        explanation: {
          en: 'TypeScript interfaces disappear at runtime during compilation. Classes remain in JavaScript, allowing class-validator decorators and reflect-metadata to function.',
          bn: 'ইন্টারফেস কম্পাইলেশনের পর জাভাস্ক্রিপ্ট থেকে উধাও হয়ে যায়। কিন্তু ক্লাস রানটাইমে অক্ষত থাকে, যার ফলে ডেকোরেটর ও মেটাডাটা সুন্দরভাবে কাজ করতে পারে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'sentries-at-the-pass',
    title: {
      en: 'Guards & Authorization — CanActivate, ExecutionContext & Reflector',
      bn: 'গার্ড ও অথরাইজেশন — CanActivate, ExecutionContext ও Reflector'
    }
  }
};
