import type { Hub } from '../../lib/types';
import { IndentationAndTheBlockLesson } from './lessons/indentation-and-the-block';
import { ComprehensionsAndTheCompLesson } from './lessons/comprehensions-and-the-comp';
import { DecoratorsAndTheAtLesson } from './lessons/decorators-and-the-at';
import { ContextAndTheWithLesson } from './lessons/context-and-the-with';
import { TypingAndTheHintLesson } from './lessons/typing-and-the-hint';
import { DataAndTheClassLesson } from './lessons/data-and-the-class';
import { CoroutinesAndTheAwaitLesson } from './lessons/coroutines-and-the-await';
import { ThePythonReleaseLesson } from './lessons/the-python-release';

export const langPythonHub: Hub = {
  slug: 'lang-python',
  name: 'Python Language',
  icon: '🐍',
  tagline: {
    en: 'Master the Python programming language: significant indentation, variable name bindings, comprehensions, function decorators, context managers, static type hints, dataclasses, asyncio coroutines, and CPython internals.',
    bn: 'পাইথন প্রোগ্রামিং ভাষা আয়ত্ত করুন: ইনডেন্টেশন নিয়ম, ভেরিয়েবল নেম বাইন্ডিং, কম্প্রিহেনশন, ফাংশন ডেকোরেটর, কনটেক্সট ম্যানেজার, স্ট্যাটিক টাইপ হিন্ট, ডেটাক্লাস, asyncio করুটিন এবং CPython ইন্টারনালস।'
  },
  intro: {
    en: 'Python is a high-level, dynamically typed language renowned for clean readability, rapid development velocity, and an expansive ecosystem spanning backend systems, data science, and artificial intelligence. This comprehensive 8-lesson language track covers the core language specifications from syntax suites and memory references to metaprogramming decorators, static typing contracts, asynchronous event loops, and modern packaging standards.',
    bn: 'পাইথন হলো একটি উচ্চ-স্তরের, ডাইনামিক টাইপযুক্ত প্রোগ্রামিং ভাষা যা এর চমৎকার পাঠযোগ্যতা, দ্রুত ডেভেলপমেন্ট গতি এবং ব্যাকএন্ড সিস্টেম, ডেটা সায়েন্স ও কৃত্রিম বুদ্ধিমত্তার বিশাল ইকোসিস্টেমের জন্য বিশ্বখ্যাত। এই ৮ পাঠের সম্পূর্ণ ল্যাঙ্গুয়েজ ট্র্যাকে সিনট্যাক্স ব্লক ও মেমোরি রেফারেন্স থেকে শুরু করে মেটাপ্রোগ্রামিং ডেকোরেটর, স্ট্যাটিক টাইপিং চুক্তি, অ্যাসিনক্রোনাস ইভেন্ট লুপ এবং আধুনিক প্যাকেজিং স্ট্যান্ডার্ড পর্যন্ত পাইথনের প্রতিটি মৌলিক দিক বিশদভাবে আলোচনা করা হয়েছে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1: Syntax Blocks, Namespaces & Functional Comprehensions',
        bn: 'ধাপ ১: সিনট্যাক্স ব্লক, নেমস্পেস এবং ফাংশনাল কম্প্রিহেনশন'
      },
      items: [
        {
          en: 'Indentation & Blocks: PEP 8 significant indentation rules, colon suite headers, and mutable vs immutable memory bindings (Lesson 1)',
          bn: 'ইনডেন্টেশন ও ব্লক: PEP 8 ইনডেন্টেশন নিয়মাবলী, কোলন স্যুট হেডার এবং মিউটেবল বনাম ইমিউটেবল মেমোরি বাইন্ডিং (পাঠ ১)'
        },
        {
          en: 'Comprehensions & Generators: List, set, and dictionary comprehensions, lazy generator expressions, and memory-efficient streaming (Lesson 2)',
          bn: 'কম্প্রিহেনশন ও জেনারেটর: লিস্ট, সেট ও ডিকশনারি কম্প্রিহেনশন, লেজি জেনারেটর এক্সপ্রেশন এবং মেমোরি-সাশ্রয়ী স্ট্রিমিং (পাঠ ২)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2: Metaprogramming Decorators & Context Management',
        bn: 'ধাপ ২: মেটাপ্রোগ্রামিং ডেকোরেটর এবং কনটেক্সট ব্যবস্থাপনা'
      },
      items: [
        {
          en: 'Decorators & Wrappers: First-class function closures, @functools.wraps metadata preservation, and parameterized decorators (Lesson 3)',
          bn: 'ডেকোরেটর ও র‍্যাপার: ফার্স্ট-ক্লাস ফাংশন ক্লোজার, @functools.wraps মেটাডেটা সংরক্ষণ এবং প্যারামিটারাইজড ডেকোরেটর (পাঠ ৩)'
        },
        {
          en: 'Context & The With Block: Resource management, __enter__ and __exit__ dunder protocol, and contextlib generators (Lesson 4)',
          bn: 'কনটেক্সট ও With ব্লক: রিসোর্স ব্যবস্থাপনা, __enter__ ও __exit__ ডান্ডার প্রোটোকল এবং contextlib জেনারেটর (পাঠ ৪)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3: Static Typing & Object-Oriented Dataclasses',
        bn: 'ধাপ ৩: স্ট্যাটিক টাইপিং এবং অবজেক্ট-ওরিয়েন্টেড ডেটাক্লাস'
      },
      items: [
        {
          en: 'Typing & Hints: PEP 484 static type annotations, generic TypeVars, union operators (int | str), and Mypy verification (Lesson 5)',
          bn: 'টাইপিং ও হিন্টস: PEP 484 স্ট্যাটিক টাইপ অ্যানোটেশন, জেনেরিক TypeVar, ইউনিয়ন অপারেটর (int | str) এবং Mypy ভ্যালিডেশন (পাঠ ৫)'
        },
        {
          en: 'Data & Classes: Modern OOP via @dataclass, frozen immutability, field factories, and Python 3.10 match/case pattern matching (Lesson 6)',
          bn: 'ডেটা ও ক্লাসেস: @dataclass দিয়ে আধুনিক OOP, ফ্রোজেন ইমিউটেবিলিটি, ফিল্ড ফ্যাক্টরি এবং পাইথন ৩.১০ ম্যাচ/কেস প্যাটার্ন ম্যাচিং (পাঠ ৬)'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4: Asynchronous Concurrency & Distribution Standards',
        bn: 'ধাপ ৪: অ্যাসিনক্রোনাস কনকারেন্সি এবং ডিস্ট্রিবিউশন স্ট্যান্ডার্ড'
      },
      items: [
        {
          en: 'Coroutines & Asyncio: Asynchronous event loops, async/await coroutine suspension, Tasks, and asyncio.gather concurrency (Lesson 7)',
          bn: 'করুটিন ও Asyncio: অ্যাসিনক্রোনাস ইভেন্ট লুপ, async/await করুটিন সাসপেনশন, টাস্ক এবং asyncio.gather কনকারেন্সি (পাঠ ৭)'
        },
        {
          en: 'The Python Release: Virtual environments (venv), pyproject.toml packaging, GIL evolution, and Python release cadence (Lesson 8)',
          bn: 'পাইথন রিলিজ: ভার্চুয়াল এনভায়রনমেন্ট (venv), pyproject.toml প্যাকেজিং, GIL বিবর্তন এবং পাইথন রিলিজ লাইফসাইকেল (পাঠ ৮)'
        }
      ]
    }
  ],
  lessons: [
    IndentationAndTheBlockLesson,
    ComprehensionsAndTheCompLesson,
    DecoratorsAndTheAtLesson,
    ContextAndTheWithLesson,
    TypingAndTheHintLesson,
    DataAndTheClassLesson,
    CoroutinesAndTheAwaitLesson,
    ThePythonReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Project 1: Resilient Async Data Pipeline with Dataclasses and Contexts',
        bn: 'প্রজেক্ট ১: ডেটাক্লাস এবং কনটেক্সট সমন্বয়ে স্থিতিস্থাপক অ্যাসিঙ্ক ডেটা পাইপলাইন'
      },
      brief: {
        en: 'Construct an asynchronous data pipeline processing 1000 streaming events using asyncio.gather. Model structured event payloads with frozen dataclasses, enforce strict type annotations validated with Mypy, and safely acquire network sockets using custom context managers with deterministic __exit__ cleanups.',
        bn: 'asyncio.gather ব্যবহার করে ১০০০ টি স্ট্রিমিং ইভেন্ট প্রক্রিয়াকরণের একটি অ্যাসিনক্রোনাস পাইপলাইন তৈরি করুন। ফ্রোজেন ডেটাক্লাস দিয়ে ইভেন্ট মডেল তৈরি করুন, Mypy দিয়ে টাইপ যাচাই নিশ্চিত করুন এবং ডিটারমিনিস্টিক __exit__ ক্লিনআপ সহ কাস্টম কনটেক্সট ম্যানেজারের মাধ্যমে নিরাপদ সকেট সংযোগ পরিচালনা করুন।'
      }
    },
    {
      title: {
        en: 'Project 2: Extensible Metaprogramming Framework with Custom Decorators',
        bn: 'প্রজেক্ট ২: কাস্টম ডেকোরেটর সমন্বয়ে পরিবর্ধনযোগ্য মেটাপ্রোগ্রামিং ফ্রেমওয়ার্ক'
      },
      brief: {
        en: 'Build a production-grade micro-framework featuring parameterized function decorators for automatic latency instrumentation, retry backoff policies across 3 failure attempts, and structural pattern matching (match/case) handling API response envelopes.',
        bn: 'স্বয়ংক্রিয় লেটেন্সি পরিমাপের জন্য প্যারামিটারাইজড ডেকোরেটর, ৩ টি ব্যর্থ প্রচেষ্টার ক্ষেত্রে রিট্রাই পলিসি এবং এপিআই রেসপন্স প্রসেসিংয়ের জন্য ম্যাচ/কেস প্যাটার্ন ম্যাচিং সমন্বয়ে একটি প্রোডাকশন-গ্রেড মাইক্রো-ফ্রেমওয়ার্ক তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Strictly adhere to PEP 8 standards by using exactly 4 spaces per indentation level, never mixing tabs and spaces.',
      bn: 'ইনডেন্টেশনে সর্বদা প্রতিটি স্তরের জন্য ৪ টি স্পেস ব্যবহার করে PEP 8 স্ট্যান্ডার্ড কঠোরভাবে মেনে চলুন, কখনোই ট্যাব ও স্পেস মেশাবেন না।'
    },
    {
      en: 'Never use mutable objects (like lists [] or dictionaries {}) as default parameter values in function signatures; use None with conditional initialization instead.',
      bn: 'ফাংশনের প্যারামিটারে ডিফল্ট মান হিসেবে কখনোই মিউটেবল অবজেক্ট (যেমন লিস্ট [] বা ডিকশনারি {}) ব্যবহার করবেন না; বরং None দিয়ে ফাংশনের ভেতরে মান বরাদ্দ করুন।'
    },
    {
      en: 'Always decorate function wrappers with @functools.wraps to preserve original function names, docstrings, and introspection metadata.',
      bn: 'ফাংশনের মূল নাম, ডকস্ট্রিং এবং মেটাডেটা অক্ষত রাখতে ডেকোরেটর র‍্যাপারে সর্বদা @functools.wraps ব্যবহার করুন।'
    },
    {
      en: 'Always manage external resources (files, sockets, database transactions) using the with statement context manager protocol.',
      bn: 'যেকোনো বাহ্যিক রিসোর্স (ফাইল, নেটওয়ার্ক সকেট, ডেটাবেস ট্রানজ্যাকশন) ব্যবহারের সময় সর্বদা with স্টেটমেন্ট কনটেক্সট ম্যানেজার প্রোটোকল অনুসরণ করুন।'
    },
    {
      en: 'Adopt modern pyproject.toml configuration standards for project packaging and dependency management instead of legacy setup.py files.',
      bn: 'প্রজেক্ট প্যাকেজিং ও ডিপেন্ডেন্সি পরিচালনার জন্য পুরানো setup.py ফাইলের বদলে আধুনিক pyproject.toml স্ট্যান্ডার্ড গ্রহণ করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the Global Interpreter Lock (GIL) in CPython, and how does free-threaded Python 3.13 alter its architecture?',
        bn: 'CPython-এ গ্লোবাল ইন্টারপ্রেটার লক (GIL) কী এবং ফ্রি-থ্রেডেড পাইথন ৩.১৩ এর স্থাপত্যে কী পরিবর্তন এনেছে?'
      },
      a: {
        en: 'The GIL is a mutex protecting access to Python objects, preventing multiple native OS threads from executing CPython bytecodes simultaneously. While the GIL simplifies CPython C extension integration and makes single-threaded execution fast without fine-grained locking overhead, it restricts CPU-bound multi-threaded workloads to a single hardware core. In Python 3.13, PEP 703 introduced an experimental free-threaded build that replaces the global mutex with biased reference counting and mimalloc thread-safe memory allocation, allowing multi-threaded CPU tasks to scale across multiple CPU cores.',
        bn: 'GIL হলো একটি সিঙ্ক্রোনাইজেশন লক যা একাধিক নেটিভ থ্রেডকে একসাথে পাইথন বাইটকোড রান করতে বাধা দিয়ে মেমোরির অখণ্ডতা রক্ষা করে। এটি সিঙ্গেল-থ্রেডেড প্রোগ্রাম ও সি এক্সটেনশনকে সহজ ও দ্রুত রাখলেও প্রসেসর-নিবিড় মাল্টি-থ্রেডিং কাজকে কেবল একটি হার্ডওয়্যার কোরে সীমাবদ্ধ রাখে। পাইথন ৩.১৩ সংস্করণে PEP 703 এর মাধ্যমে একটি পরীক্ষামূলক ফ্রি-থ্রেডেড বিল্ড আনা হয়েছে, যা গ্লোবাল লক সরিয়ে থ্রেড-সেফ মেমোরি বরাদ্দের সুবিধা দেয় এবং মাল্টি-কোর প্রসেসরের পূর্ণ শক্তি ব্যবহারের সুযোগ তৈরি করে।'
      }
    },
    {
      q: {
        en: 'How does Python manage object lifecycles using reference counting and the cyclic garbage collector?',
        bn: 'রেফারেন্স কাউন্টিং এবং সাইক্লিক গার্বেজ কালেক্টরের মাধ্যমে পাইথন কীভাবে অবজেক্টের লাইফসাইকেল পরিচালনা করে?'
      },
      a: {
        en: 'Every PyObject in CPython contains an ob_refcnt counter. When a name binds to an object or is passed to a function, ob_refcnt increments; when a name falls out of scope or is deleted via del, it decrements. If ob_refcnt drops to 0, memory is deallocated instantly. For circular references (where Object A points to Object B and Object B points to Object A), standard reference counting fails to hit 0; CPython uses a generation-based cyclic garbage collector (Generations 0, 1, and 2) that detects isolated reference cycles and frees stranded objects.',
        bn: 'CPython-এর প্রতিটি অবজেক্টে একটি ob_refcnt কাউন্টার থাকে। ভেরিয়েবলে অবজেক্ট অ্যাসাইন হলে কাউন্ট বাড়ে, আর স্কোপ শেষ হলে বা del করলে কাউন্ট কমে। কাউন্টার ০ এ পৌঁছামাত্রই মেমোরি সাথে সাথে খালি হয়। তবে চক্রাকার রেফারেন্সের ক্ষেত্রে (যেখানে অবজেক্ট A অবজেক্ট B কে এবং B অবজেক্ট A কে নির্দেশ করে) কাউন্ট কখনো ০ হয় না; এই ধরনের মেমোরি লিক রোধ করতে পাইথন ৩ টি প্রজন্মের (জেনারেশন 0, 1 এবং 2) সাইক্লিক গার্বেজ কালেক্টর ব্যবহার করে যা চক্রাকার অবজেক্টগুলো শনাক্ত করে মেমোরি মুক্ত করে।'
      }
    },
    {
      q: {
        en: 'Why is using a mutable default argument like def append_item(val, items=[]) considered dangerous in Python?',
        bn: 'পাইথনে def append_item(val, items=[]) এর মতো মিউটেবল ডিফল্ট আর্গুমেন্ট ব্যবহার করা ঝুঁকিপূর্ণ কেন?'
      },
      a: {
        en: 'In Python, default parameter expressions are evaluated exactly once when the function definition is executed at import or module load time, not every time the function is called. When a mutable object (such as a list [] or dictionary {}) is provided as a default, that single object instance is retained across all subsequent invocations. Mutating items inside the function persists modifications into future calls. The canonical fix is to default to None: def append_item(val, items=None): if items is None: items = [].',
        bn: 'পাইথনে ফাংশন সংজ্ঞায়িত করার সময় ডিফল্ট আর্গুমেন্টের মানটি একবারই তৈরি হয়, প্রতিবার ফাংশন ডাকার সময় নতুন করে তৈরি হয় না। যখন কোনো মিউটেবল অবজেক্ট (যেমন লিস্ট [] বা ডিকশনারি {}) ডিফল্ট হিসেবে দেওয়া হয়, তখন পরবর্তী সকল ফাংশন কল সেই একই অবজেক্ট শেয়ার করে। ফলে ফাংশনের ভেতর লিস্টে কোনো পরিবর্তন করলে পরবর্তী কলগুলোতেও সেই ডেটা থেকে যায়। এই সমস্যা সমাধানের সঠিক নিয়ম হলো ডিফল্ট মান হিসেবে None ব্যবহার করা: def append_item(val, items=None): if items is None: items = []।'
      }
    },
    {
      q: {
        en: 'How do Python Metaclasses differ from Class Decorators in altering class definitions?',
        bn: 'ক্লাসের আচরণ পরিবর্তনের ক্ষেত্রে পাইথন মেটাক্লাস এবং ক্লাস ডেকোরেটরের মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'A Class Decorator receives a fully constructed class object after creation, allowing modification of attributes, method wrapping, or registration before returning the modified class. A Metaclass (the class of a class, inheriting from type) intercepts class creation before the class object itself exists in memory. Via __new__ and __init__, a metaclass can dynamically customize namespace dictionaries, enforce strict attribute contracts on all derived subclasses, and modify base classes before allocation.',
        bn: 'ক্লাস ডেকোরেটর একটি ক্লাস তৈরি হয়ে যাওয়ার পর সেটিকে ইনপুট হিসেবে গ্রহণ করে এবং ক্লাসের প্রপার্টি বা মেথড পরিবর্তন করে ফেরত দেয়। অপরদিকে মেটাক্লাস (টাইপ থেকে তৈরি ক্লাসের ক্লাস) অবজেক্ট মেমোরিতে তৈরি হওয়ার পূর্বেই ক্লাসের সৃষ্টি প্রক্রিয়া নিয়ন্ত্রণ করে। __new__ এবং __init__ মেথডের মাধ্যমে মেটাক্লাস নেমস্পেস ডিকশনারি পরিবর্তন করতে পারে এবং ভবিষ্যতে যত সাবক্লাস তৈরি হবে তাদের সকলের ওপর কঠোর নিয়ম প্রয়োগ করতে পারে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'AI & Machine Learning Infrastructure: Training deep neural networks and orchestrating LLM inference pipelines using PyTorch, TensorFlow, and Hugging Face.',
      bn: 'কৃত্রিম বুদ্ধিমত্তা ও মেশিন লার্নিং পরিকাঠামো: পাইটর্চ, টেনসরফ্লো এবং হাগিং ফেস ব্যবহার করে ডিপ নিউরাল নেটওয়ার্ক প্রশিক্ষণ ও এলএলএম ইনফারেন্স পরিচালনা।'
    },
    {
      en: 'High-Concurrency Asynchronous Backends: Running low-latency microservices handling 10000+ simultaneous connections with FastAPI and Asyncio.',
      bn: 'উচ্চ-গতির অ্যাসিনক্রোনাস ব্যাকএন্ড: ফাস্টএপিআই এবং অ্যাসিনক্রোনিও দ্বারা পরিচালিত মাইক্রোসার্ভিস যা একসাথে ১০০০০ এর বেশি রিকোয়েস্ট পরিচালনা করে।'
    },
    {
      en: 'Big Data Processing & ETL Pipelines: Streaming and aggregating terabytes of distributed datasets using PySpark and Pandas.',
      bn: 'বিগ ডেটা প্রসেসিং ও ইটিএল পাইপলাইন: পাইস্পার্ক এবং পান্ডাস ব্যবহার করে টেরাবাইট পরিমাণের ডিস্ট্রিবিউটেড ডেটা প্রসেসিং।'
    },
    {
      en: 'DevOps & Cloud Automation: Automating infrastructure provisioning, cloud security auditing, and CI/CD pipelines using Boto3 and Ansible.',
      bn: 'ডেভঅপস ও ক্লাউড অটোমেশন: বোতো৩ এবং অ্যানসিবল ব্যবহার করে ক্লাউড ইনফ্রাস্ট্রাকচার তৈরি এবং সিআই/সিডি অটোমেশন।'
    }
  ]
};
