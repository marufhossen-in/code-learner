import type { Lesson } from '../../../lib/types';

export const BodiesAndModelsLesson: Lesson = {
  slug: 'bodies-and-models',
  tech: 'fastapi',
  title: {
    en: 'Pydantic Models & Request Bodies — Validation, Schemas & response_model',
    bn: 'Pydantic মডেল ও রিকোয়েস্ট বডি — ভ্যালিডেশন, স্কিমা ও response_model'
  },
  summary: {
    en: 'FastAPI leverages Pydantic BaseModel classes to validate JSON request bodies and serialize HTTP responses. In this lesson, you will master declaring Pydantic schemas, Field validation constraints (gt, max_length), nested composite models, custom field validators, and response_model data filtering.',
    bn: 'FastAPI ইনকামিং JSON রিকোয়েস্ট বডি যাচাই এবং রেসপন্স সিরিয়ালাইজ করতে Pydantic BaseModel ব্যবহার করে। এই পাঠে আপনি Pydantic স্কিমা ঘোষণা, Field ভ্যালিডেশন সীমাবদ্ধতা (gt, max_length), নেস্টেড মডেল, কাস্টম ফিল্ড ভ্যালিডেটর এবং response_model দিয়ে সংবেদনশীল ডাটা ফিল্টারিং গভীরভাবে শিখবেন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'pydantic-models-architecture',
      text: {
        en: 'The Pydantic Schema and Request Body Validation Architecture',
        bn: 'Pydantic স্কিমা ও রিকোয়েস্ট বডি ভ্যালিডেশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When your API receives incoming data from web requests, the payload is parsed from the JSON body stream into Python data structures. By declaring arguments subclassing Pydantic BaseModel, FastAPI inspects model fields, enforces data constraints, converts types, and constructs a clean model instance before your view code executes.',
        bn: 'যখন আপনার এপিআই ওয়েব রিকোয়েস্ট থেকে ইনকামিং ডেটা গ্রহণ করে, তখন JSON পে-লোডকে পাইথন ডেটা কাঠামোতে রূপান্তর করা হয়। Pydantic BaseModel থেকে তৈরি ক্লাস প্যারামিটারে ঘোষণা করলে FastAPI প্রতিটি ফিল্ডের সীমাবদ্ধতা যাচাই করে এবং কোড কার্যকর হওয়ার আগেই একটি পরিচ্ছন্ন মডেল অবজেক্ট তৈরি করে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'BaseModel',
          def: {
            en: 'The primary Pydantic class defining structured data contracts with type validation, default values, and serialization methods.',
            bn: 'Pydantic-এর মূল ক্লাস যা টাইপ ভ্যালিডেশন, ডিফল্ট মান এবং সিরিয়ালাইজেশন মেথড সহ সুনির্দিষ্ট ডেটা স্কিমা তৈরি করে।'
          }
        },
        {
          term: 'Field() Validator',
          def: {
            en: 'A Pydantic helper providing schema metadata (description, examples) and validation boundaries (gt, le, pattern) directly on model attributes.',
            bn: 'একটি Pydantic ফাংশন যা মডেলের এট্রিবিউটে অতিরিক্ত মেটাডাটা এবং ভ্যালিডেশন সীমাবদ্ধতা (gt, le, pattern) যোগ করে।'
          }
        },
        {
          term: 'response_model',
          def: {
            en: 'The decorator argument that defines the output schema, automatically filtering out unlisted attributes (such as password hashes) before sending JSON.',
            bn: 'একটি রুট ডেকোরেটর আর্গুমেন্ট যা রেসপন্সের স্কিমা নির্ধারণ করে এবং সংবেদনশীল ফিল্ডগুলো (যেমন পাসওয়ার্ড হ্যাশ) স্বয়ংক্রিয়ভাবে বাদ দিয়ে পাঠায়।'
          }
        },
        {
          term: 'Nested Models',
          def: {
            en: 'Hierarchical models where attributes are themselves Pydantic models or lists of models (e.g. order containing list of item models).',
            bn: 'স্তরভিত্তিক মডেল যেখানে কোনো ফিল্ড নিজেই আরেকটি Pydantic মডেল বা মডেলের তালিকা ধারণ করে (যেমন অর্ডারের ভেতর আইটেম তালিকা)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'schema-validation-matrix',
      text: {
        en: 'Pydantic Validation and Ingestion Matrix',
        bn: 'Pydantic ভ্যালিডেশন ও ইনজেকশন ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Concept', bn: 'ধারণা' },
        { en: 'Syntax Example', bn: 'সিনট্যাক্স উদাহরণ' },
        { en: 'Architectural Purpose', bn: 'আর্কিটেকচারাল ভূমিকা' }
      ],
      rows: [
        [
          { en: 'Input Request Model', bn: 'ইনপুট রিকোয়েস্ট মডেল' },
          { en: 'class UserIn(BaseModel): email: EmailStr; password: str', bn: 'class UserIn(BaseModel): email: EmailStr; password: str' },
          { en: 'Validates incoming JSON payload including plaintext password', bn: 'প্লেইনটেক্সট পাসওয়ার্ড সহ ইনকামিং JSON পে-লোড যাচাই করে' }
        ],
        [
          { en: 'Output Response Model', bn: 'আউটপুট রেসপন্স মডেল' },
          { en: 'class UserOut(BaseModel): id: int; email: EmailStr', bn: 'class UserOut(BaseModel): id: int; email: EmailStr' },
          { en: 'Strictly excludes password from response JSON via response_model', bn: 'response_model ব্যবহারের মাধ্যমে পাসওয়ার্ড রেসপন্স থেকে বাদ দেয়' }
        ],
        [
          { en: 'Field Constraints', bn: 'ফিল্ডের সীমাবদ্ধতা' },
          { en: 'price: float = Field(gt=0, description="Price in USD")', bn: 'price: float = Field(gt=0, description="Price in USD")' },
          { en: 'Rejects zero or negative prices, documents rules in OpenAPI docs', bn: '০ বা ঋণাত্মক দাম আটকে দেয় এবং OpenAPI ডক্সে নিয়ম তুলে ধরে' }
        ],
        [
          { en: 'Custom Field Validator', bn: 'কাস্টম ফিল্ড ভ্যালিডেটর' },
          { en: '@field_validator("name") def check_name(cls, v): ...', bn: '@field_validator("name") def check_name(cls, v): ...' },
          { en: 'Executes custom Python business logic to sanitize or reject values', bn: 'মান পরিশোধন বা বাতিল করতে কাস্টম পাইথন লজিক চালায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'body-validation-code',
      text: {
        en: 'Working Pydantic Model Validation and Field Filtering Simulation',
        bn: 'কার্যকরী Pydantic মডেল ভ্যালিডেশন ও ফিল্ড ফিল্টারিং সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Pydantic BaseModel Parsing and response_model Filtering
class MockItemSchema {
  constructor(data) {
    this.name = String(data.name || '').trim();
    this.price = parseFloat(data.price);
    this.tax = data.tax !== undefined ? parseFloat(data.tax) : 0;
    this.internalCost = 12.50; // Sensitive internal attribute

    // Validation rules
    if (!this.name) throw new Error('name field is required');
    if (Number.isNaN(this.price) || this.price <= 0) {
      throw new Error('price must be greater than 0');
    }
  }

  // Simulating response_model filtering (excludes internalCost)
  toPublicResponse(taxRate = 0.05) {
    const total = this.price + (this.tax || this.price * taxRate);
    return {
      name: this.name,
      price: this.price,
      totalPrice: parseFloat(total.toFixed(2))
    };
  }
}

// 1. Simulating incoming valid JSON body
const incomingPayload = { name: 'Premium Coffee Maker', price: 80.00, tax: 4.00 };
const item = new MockItemSchema(incomingPayload);
const publicJson = item.toPublicResponse();

console.log('Parsed item price:', item.price);
// -> Parsed item price: 80
console.log('Calculated total with tax:', publicJson.totalPrice);
// -> Calculated total with tax: 84
console.log('Internal cost leaked in public response:', 'internalCost' in publicJson);
// -> Internal cost leaked in public response: false`,
      caption: {
        en: 'Validating item price 80 with tax 4 yielding total 84 and filtering internal fields',
        bn: 'দাম ৮০ ও ট্যাক্স ৪ সহ মোট ৮৪ হিসাব হচ্ছে এবং গোপন ফিল্ড নিরাপদে বাদ যাচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'response-model-security',
      text: {
        en: 'Preventing Data Leaks with response_model',
        bn: 'response_model দিয়ে ডাটা ফাঁস প্রতিরোধ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In web applications, developers frequently query full database models containing sensitive attributes like password hashes, API tokens, or payment tokens. If a view returns the raw ORM instance directly without a response_model, FastAPI converts all model attributes into JSON, leaking internal secrets. Declaring response_model=UserOut strictly filters the outgoing payload.',
        bn: 'ওয়েব অ্যাপ্লিকেশনে প্রায়শই এমন ডাটাবেজ মডেল থাকে যাতে পাসওয়ার্ড হ্যাশ, এপিআই টোকেন বা পেমেন্ট তথ্যের মতো গোপন ফিল্ড থাকে। কোনো ভিউ যদি response_model ছাড়া সরাসরি অবজেক্টটি ফেরত দেয়, তবে FastAPI সমস্ত ফিল্ড JSON হিসেবে পাঠিয়ে দিতে পারে। কিন্তু response_model=UserOut উল্লেখ করলে কেবল অনুমোদিত ফিল্ডগুলোই ক্লায়েন্টকে পাঠানো হয়।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Never Return Raw User Models: Always pair user endpoints with a response_model that excludes hashed_password.',
          bn: '১. কাঁচা মডেল রিটার্ন করবেন না: পাসওয়ার্ড হ্যাশ ফাঁস রোধে ইউজার এন্ডপয়েন্টে সর্বদা নিরাপদ response_model ব্যবহার করুন।'
        },
        {
          en: '2. Enforce Positive Numeric Bounds: Apply Field(gt=0) to prices, counts, and IDs to avoid corrupt database records.',
          bn: '২. ধনাত্মক সংখ্যা নিশ্চিতকরণ: ভুল ডাটা এড়াতে দাম, সংখ্যা ও আইডিতে Field(gt=0) সীমাবদ্ধতা প্রয়োগ করুন।'
        },
        {
          en: '3. Use EmailStr for Email Fields: Import EmailStr from pydantic to guarantee RFC-compliant email address validation.',
          bn: '৩. ইমেইলে EmailStr ব্যবহার: সঠিক ফরম্যাট নিশ্চিত করতে pydantic-এর EmailStr টাইপ ব্যবহার করুন।'
        },
        {
          en: '4. Extract Extra Bodies with Body(): When accepting multiple body objects or raw scalars in a single route, use Body().',
          bn: '৪. একাধিক বডিতে Body() ব্যবহার: একটি রুটে একাধিক বডি মডেল বা স্কেলার মান গ্রহণ করতে Body() হেল্পার ব্যবহার করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fa-mod-ex1',
      kind: 'mcq',
      topic: 'security benefit of response_model in fastapi',
      question: {
        en: 'Why is declaring "@app.post(\'/users\', response_model=UserOut)" critical when returning database user objects?',
        bn: 'ডাটাবেজ ইউজার অবজেক্ট রিটার্ন করার সময় "@app.post(\'/users\', response_model=UserOut)" ঘোষণা করা কেন অত্যন্ত জরুরি?'
      },
      options: [
        {
          en: 'It guarantees that sensitive internal fields (such as hashed_password or internal admin flags) are strictly filtered out and never transmitted in the client HTTP response',
          bn: 'এটি নিশ্চিত করে যে সংবেদনশীল গোপন ফিল্ডগুলো (যেমন পাসওয়ার্ড হ্যাশ বা ইন্টারনাল ফ্ল্যাগ) ফিল্টার হয়ে যাবে এবং ক্লায়েন্টের কাছে কখনো পৌঁছাবে না'
        },
        {
          en: 'It compresses the JSON response into a zip file on the server',
          bn: 'এটি সার্ভারে JSON রেসপন্সকে জিপ ফাইলে সংকুচিত করে'
        },
        {
          en: 'It bypasses the database connection to make responses instant',
          bn: 'এটি রেসপন্স দ্রুত করতে ডাটাবেজ কানেকশন পুরোপুরি বাইপাস করে'
        },
        {
          en: 'It converts the response from JSON into XML format',
          bn: 'এটি রেসপন্সকে JSON থেকে এক্সএমএল ফরম্যাটে বদলে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'response_model filters the outgoing data against the specified Pydantic schema.',
        bn: 'response_model আউটগোয়িং ডাটাকে নির্ধারিত Pydantic স্কিমা অনুযায়ী ফিল্টার করে।'
      },
      explanation: {
        en: 'response_model acts as an output filter. Even if the view function returns an ORM object containing password hashes, only fields defined in UserOut are serialized to JSON.',
        bn: 'response_model একটি ফিল্টারের মতো কাজ করে। ভিউ থেকে পাসওয়ার্ড সহ অবজেক্ট পাঠালেও এটি শুধু UserOut-এ থাকা ফিল্ডগুলোই ক্লায়েন্টকে দেয়।'
      }
    },
    {
      id: 'fa-mod-ex2',
      kind: 'mcq',
      topic: 'pydantic field constraint syntax',
      question: {
        en: 'Which Pydantic Field declaration enforces that a product price must be strictly greater than 0 with a maximum of 10000?',
        bn: 'কোন Pydantic Field ঘোষণাটি পণ্যের মূল্য অবশ্যই ০ এর বেশি এবং সর্বোচ্চ ১০০০০ হওয়া বাধ্যতামূলক করে?'
      },
      options: [
        {
          en: 'price: float = Field(gt=0, le=10000, description="Product price")',
          bn: 'price: float = Field(gt=0, le=10000, description="Product price")'
        },
        {
          en: 'price: float = Boundary(min=0, max=10000)',
          bn: 'price: float = Boundary(min=0, max=10000)'
        },
        {
          en: 'price: float = Range(0, 10000)',
          bn: 'price: float = Range(0, 10000)'
        },
        {
          en: 'price: float = Limits[0, 10000]',
          bn: 'price: float = Limits[0, 10000]'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pydantic uses Field() with gt (greater than) and le (less than or equal).',
        bn: 'Pydantic-এ Field() ফাংশনে gt ও le আর্গুমেন্ট দিয়ে সংখ্যার সীমা বাঁধা হয়।'
      },
      explanation: {
        en: 'The Field helper from Pydantic allows defining numeric bounds like gt=0 and le=10000 alongside OpenAPI schema descriptions.',
        bn: 'Pydantic-এর Field হেল্পার gt=0 এবং le=10000 ব্যবহার করে সংখ্যাগত সীমাবদ্ধতা প্রয়োগ করে।'
      }
    },
    {
      id: 'fa-mod-ex3',
      kind: 'mcq',
      topic: 'multiple body models in a single fastapi route',
      question: {
        en: 'If a route declares "async def update_item(item: Item, user: User):", how does FastAPI expect the client to send the JSON request body?',
        bn: 'যদি একটি রুটে "async def update_item(item: Item, user: User):" ঘোষিত থাকে, তবে ক্লায়েন্টকে কীভাবে JSON রিকোয়েস্ট বডি পাঠাতে হবে?'
      },
      options: [
        {
          en: 'As a single top-level JSON object containing keys matching the parameter names: {"item": {...}, "user": {...}}',
          bn: 'প্যারামিটারের নামের সাথে মিল রেখে একটি একক শীর্ষ-স্তরের JSON অবজেক্ট হিসেবে: {"item": {...}, "user": {...}}'
        },
        {
          en: 'As two separate HTTP POST requests sent simultaneously',
          bn: 'একই সাথে পাঠানো দুটি পৃথক এইচটিটিপি POST রিকোয়েস্ট হিসেবে'
        },
        {
          en: 'As an array of raw strings separated by commas',
          bn: 'কমা দিয়ে আলাদা করা স্ট্রিং-এর একটি তালিকা হিসেবে'
        },
        {
          en: 'Multiple body parameters are strictly forbidden in FastAPI',
          bn: 'FastAPI-তে একাধিক বডি প্যারামিটার ব্যবহার করা সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'When multiple models are declared, FastAPI expects keys matching the argument names.',
        bn: 'একাধিক মডেল থাকলে FastAPI আর্গুমেন্টের নামকে কি (key) হিসেবে প্রত্যাশা করে।'
      },
      explanation: {
        en: 'When multiple Pydantic models are in the signature, FastAPI wraps them under their parameter names in a single JSON payload: {"item": {...}, "user": {...}}.',
        bn: 'একাধিক বডি মডেল থাকলে FastAPI প্যারামিটারের নামগুলো দিয়ে একটি সম্মিলিত JSON অবজেক্ট তৈরি করে ডাটা গ্রহণ করে।'
      }
    },
    {
      id: 'fa-mod-ex4',
      kind: 'mcq',
      topic: 'pydantic v2 model_dump method purpose',
      question: {
        en: 'In Pydantic v2, which method converts a model instance into a standard Python dictionary?',
        bn: 'Pydantic v2-তে কোনো মডেল অবজেক্টকে স্ট্যান্ডার্ড পাইথন ডিকশনারিতে রূপান্তর করতে কোন মেথডটি ব্যবহৃত হয়?'
      },
      options: [
        {
          en: 'model.model_dump()',
          bn: 'model.model_dump()'
        },
        {
          en: 'model.to_sql()',
          bn: 'model.to_sql()'
        },
        {
          en: 'model.serialize_bytes()',
          bn: 'model.serialize_bytes()'
        },
        {
          en: 'model.convert_json_dict()',
          bn: 'model.convert_json_dict()'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pydantic v2 replaced the legacy .dict() method with .model_dump().',
        bn: 'Pydantic v2-তে পুরোনো .dict() মেথডের বদলে .model_dump() মেথড চালু হয়েছে।'
      },
      explanation: {
        en: 'Pydantic v2 uses model.model_dump() to produce a Python dictionary, and model.model_dump_json() to produce a JSON string.',
        bn: 'Pydantic v2-তে পাইথন ডিকশনারি পেতে model.model_dump() এবং JSON স্ট্রিং পেতে model.model_dump_json() ব্যবহৃত হয়।'
      }
    }
  ],
  quiz: {
    id: 'bodies-and-models-quiz',
    title: {
      en: 'FastAPI Pydantic Models & Request Bodies Quiz',
      bn: 'FastAPI Pydantic মডেল ও রিকোয়েস্ট বডি কুইজ'
    },
    questions: [
      {
        id: 'q-nested-models-composition',
        kind: 'mcq',
        topic: 'nested pydantic model schema generation',
        question: {
          en: 'How does FastAPI generate OpenAPI documentation when a Pydantic model contains attributes typed as other Pydantic models (nested models)?',
          bn: 'যখন কোনো Pydantic মডেলে অন্য Pydantic মডেল নেস্টেড অবস্থায় থাকে, তখন FastAPI কীভাবে OpenAPI ডকুমেন্টেশন তৈরি করে?'
        },
        options: [
          {
            en: 'It recursively compiles all nested models into deeply structured OpenAPI JSON schemas, accurately reflecting the full hierarchical object tree in Swagger UI',
            bn: 'এটি রিকার্সিভলি সমস্ত নেস্টেড মডেলকে কাঠামোগত OpenAPI স্কিমায় রূপান্তর করে এবং Swagger UI-তে নির্ভুল হায়ারার্কিকাল অবজেক্ট ট্রি প্রদর্শন করে'
          },
          {
            en: 'Nested models are flattened into single-word string lists',
            bn: 'নেস্টেড মডেলগুলোকে একটিমাত্র শব্দের স্ট্রিং তালিকায় রূপান্তর করা হয়'
          },
          {
            en: 'It crashes with a CircularReferenceError',
            bn: 'এটি CircularReferenceError দিয়ে ক্র্যাশ করে'
          },
          {
            en: 'Swagger UI ignores nested models and renders empty blocks',
            bn: 'Swagger UI নেস্টেড মডেলগুলোকে উপেক্ষা করে খালি ব্লক দেখায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Pydantic recursively generates schemas for all nested models.',
          bn: 'Pydantic প্রতিটি নেস্টেড মডেলের জন্য রিকার্সিভলি সঠিক স্কিমা তৈরি করে।'
        },
        explanation: {
          en: 'Pydantic natively resolves nested BaseModel definitions. In Swagger UI, the full schema hierarchy with all nested fields is displayed with interactive exploration.',
          bn: 'Pydantic নেস্টেড মডেলের সম্পর্ক সহজেই ধরতে পারে। Swagger UI-তে পুরো অবজেক্টের প্রতিটি স্তর সুন্দরভাবে তুলে ধরা হয়।'
        }
      },
      {
        id: 'q-field-validator-mode-before-after',
        kind: 'mcq',
        topic: 'pydantic v2 field_validator modes',
        question: {
          en: 'In Pydantic v2, what is the key difference between @field_validator(mode="before") and @field_validator(mode="after")?',
          bn: 'Pydantic v2-তে @field_validator(mode="before") এবং @field_validator(mode="after")-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          {
            en: 'mode="before" executes on raw input data before Pydantic internal type coercion, whereas mode="after" executes on already-parsed and type-validated data',
            bn: 'mode="before" টাইপ রূপান্তরের আগেই কাঁচা ইনপুট ডাটায় চলে, আর mode="after" টাইপ যাচাই ও পার্সিং শেষ হওয়ার পর পরিশোধিত ডাটায় কার্যকর হয়'
          },
          {
            en: 'mode="before" deletes the field, while mode="after" restores it',
            bn: 'mode="before" ফিল্ড মুছে ফেলে, আর mode="after" তা ফেরত আনে'
          },
          {
            en: 'mode="after" is only supported on Linux operating systems',
            bn: 'mode="after" কেবল লিনাক্স অপারেটিং সিস্টেমে সমর্থিত'
          },
          {
            en: 'There is no difference between the two validation modes',
            bn: 'এই দুটি ভ্যালিডেশন মোডের মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'mode="before" processes raw input; mode="after" processes type-coerced Python values.',
          bn: 'mode="before" কাঁচা ইনপুট নিয়ে কাজ করে; mode="after" রূপান্তরিত পাইথন মান নিয়ে কাজ করে।'
        },
        explanation: {
          en: 'In Pydantic v2, mode="before" runs prior to standard type parsing (useful for custom string splitting or parsing), while mode="after" validates the already-coerced Python type.',
          bn: 'mode="before" মূল পার্সিংয়ের আগেই কাঁচা ডাটা সাজিয়ে নিতে ব্যবহৃত হয়, আর mode="after" সঠিক টাইপ নিশ্চিত হওয়ার পর ব্যবসায়িক নিয়ম মেলাতে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'q-response-model-exclude-unset',
        kind: 'mcq',
        topic: 'response_model_exclude_unset optimization',
        question: {
          en: 'What does setting "response_model_exclude_unset=True" on a route decorator accomplish when returning sparse JSON payloads?',
          bn: 'স্পার্স JSON পে-লোড রিটার্ন করার সময় রুট ডেকোরেটরে "response_model_exclude_unset=True" সেট করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It omits fields that were not explicitly assigned a value by the handler, preventing large payloads bloated with default or null values and saving network bandwidth',
            bn: 'যেসব ফিল্ডে কোনো মান দেওয়া হয়নি সেগুলো রেসপন্স থেকে বাদ দিয়ে অপ্রয়োজনীয় নাল ডাটা এড়ায় এবং ব্যান্ডউইথ সাশ্রয় করে'
          },
          {
            en: 'It deletes unassigned columns from the relational database',
            bn: 'এটি ডাটাবেজ থেকে অব্যবহৃত কলামগুলোকে মুছে ফেলে'
          },
          {
            en: 'It converts the response status code from 200 to 204 No Content',
            bn: 'এটি স্ট্যাটাস কোড ২০০ থেকে ২০৪ নো কনটেন্টে বদলে দেয়'
          },
          {
            en: 'It encrypts the JSON payload with a random session token',
            bn: 'এটি JSON পে-লোডকে সেশন টোকেন দিয়ে এনক্রিপ্ট করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'It excludes model fields that retain their default values without explicit assignment.',
          bn: 'এটি এমন ফিল্ডগুলো বাদ দেয় যেগুলোতে আলাদা করে কোনো মান বসানো হয়নি।'
        },
        explanation: {
          en: 'response_model_exclude_unset=True strips fields that were not explicitly set on the model instance, resulting in lean, concise JSON responses.',
          bn: 'response_model_exclude_unset=True দিলে কেবল যেসব ফিল্ডের মান সেট করা হয়েছে সেগুলোই পাঠানো হয়, ফলে অপ্রয়োজনীয় ডিফল্ট নাল বাদ গিয়ে রেসপন্স সাইজ ছোট থাকে।'
        }
      },
      {
        id: 'q-extra-forbidden-model-config',
        kind: 'mcq',
        topic: 'forbidding extra attributes via model_config',
        question: {
          en: 'How can you configure a Pydantic model to strictly reject unexpected JSON attributes sent by clients with a 422 error?',
          bn: 'ক্লায়েন্ট অতিরিক্ত কোনো অননুমোদিত ফিল্ড পাঠালে ৪২২ এরর দিয়ে রিকোয়েস্ট বাতিল করতে Pydantic মডেল কীভাবে কনফিগার করতে হয়?'
        },
        options: [
          {
            en: 'Define model_config = ConfigDict(extra="forbid") inside the BaseModel class definition',
            bn: 'BaseModel ক্লাসের ভেতর model_config = ConfigDict(extra="forbid") নির্ধারণ করে'
          },
          {
            en: 'Write an if-else loop comparing dictionary length manually in every view',
            bn: 'প্রতিটি ভিউতে ম্যানুয়ালি ডিকশনারির দৈর্ঘ্য মেপে'
          },
          {
            en: 'Set extra_attributes = False on the FastAPI application instance',
            bn: 'FastAPI অ্যাপ অবজেক্টে extra_attributes = False দিয়ে'
          },
          {
            en: 'Unexpected attributes are always automatically deleted and cannot trigger errors',
            bn: 'অতিরিক্ত ফিল্ড সবসময় নিজে থেকেই মুছে যায় এবং এরর দিতে পারে না'
          }
        ],
        answer: 0,
        hint: {
          en: 'ConfigDict(extra="forbid") rejects unknown fields with validation errors.',
          bn: 'ConfigDict(extra="forbid") অজানা ফিল্ড পেলেই ভ্যালিডেশন এরর প্রদান করে।'
        },
        explanation: {
          en: 'Setting model_config = ConfigDict(extra="forbid") instructs Pydantic to raise a ValidationError whenever clients transmit unknown or undeclared fields.',
          bn: 'model_config = ConfigDict(extra="forbid") দিলে ক্লায়েন্ট স্কিমার বাইরের কোনো বাড়তি ফিল্ড পাঠালেই Pydantic তৎক্ষণাৎ ভ্যালিডেশন এরর দেয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'dependencies-on-the-line',
    title: {
      en: 'Dependency Injection — Depends(), Sub-dependencies & Yield Cleanup',
      bn: 'ডিপেন্ডেন্সি ইনজেকশন — Depends(), সাব-ডিপেন্ডেন্সি ও Yield টিয়ারডাউন'
    }
  }
};
