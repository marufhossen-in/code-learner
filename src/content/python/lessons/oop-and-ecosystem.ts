import type { Lesson } from '../../../lib/types';

/**
 * Eight w3schools advanced and ecosystem topics condensed into one lesson:
 * 1. Class properties vs instance properties (class variable vs instance variable)
 * 2. Magic dunder __add__ for operator overloading
 * 3. Magic dunder __lt__ for rich comparison and sorting
 * 4. Magic dunder __call__ for callable instances (functors)
 * 5. Inner classes (nested class encapsulation)
 * 6. The array module for low-level typed arrays with array('i')
 * 7. Dates with datetime, strftime formatting, and timedelta arithmetic
 * 8. Package ecosystem with pip install, pip freeze, and requirements locks
 */
export const oopAndEcosystemLesson: Lesson = {
  slug: 'python-dunders-and-tooling',
  tech: 'python',
  title: {
    en: 'OOP dunders, arrays, dates, and pip: operator overloading, arrays, datetime, packaging',
    bn: 'অবজেক্ট ডান্ডার, অ্যারে, তারিখ ও পিপ: অপারেটর ওভারলোডিং, অ্যারে, ডেটটাইম, প্যাকেজিং'
  },
  summary: {
    en: 'Elevate Python proficiency from intermediate to production-grade. Control custom type interactions with __add__, __lt__, and __call__, encapsulate components using inner classes, optimize memory buffers with the array module, manipulate time with datetime and strftime, and isolate dependencies with pip.',
    bn: 'পাইথনের দক্ষতাকে সাধারণ পর্যায় থেকে প্রোডাকশন মানে উন্নীত করুন। __add__, __lt__ ও __call__ দিয়ে নিজস্ব অবজেক্টের আচরণ নিয়ন্ত্রণ, ইনার ক্লাস দিয়ে এনক্যাপসুলেশন, array মডিউল দিয়ে মেমরি অপটিমাইজেশন, datetime ও strftime দিয়ে সময় গণনা এবং pip দিয়ে প্যাকেজ ব্যবস্থাপনা আয়ত্ত করুন।'
  },
  minutes: 27,
  nextLesson: {
    slug: 'the-generator-garden',
    title: {
      en: 'Python Iterators, Generators, Yield & Memory Optimization',
      bn: 'পাইথন ইটারেটর, জেনারেটর, yield ও মেমোরি অপ্টিমাইজেশন'
    }
  },
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'Advanced object modeling and runtime ecosystem', bn: 'উন্নত অবজেক্ট মডেলিং ও রানটাইম ইকোসিস্টেম' } },
    {
      type: 'para',
      text: {
        en: 'As you scale your Python applications into production, you need clean object interfaces, compact memory layouts, accurate time calculations, and reliable dependency management. Here we explore magic methods, memory-efficient arrays, date calculation, and dependency tools across eight practical examples.',
        bn: 'আপনার পাইথন অ্যাপ্লিকেশন যখন প্রোডাকশন স্কেলে পৌঁছায়, তখন আপনার প্রয়োজন হয় পরিচ্ছন্ন অবজেক্ট ইন্টারফেস, মেমরি-সাশ্রয়ী বিন্যাস, সঠিক সময় গণনা এবং নির্ভরযোগ্য ডিপেন্ডেন্সি ব্যবস্থাপনা। এই পাঠে আমরা আটটি বাস্তব উদাহরণের মাধ্যমে পাইথনের ম্যাজিক মেথড, মেমরি-সাশ্রয়ী অ্যারে, তারিখ গণনা ও প্যাকেজ টুলের ব্যবহার শিখব।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'keyterms',
      items: [
        { term: 'dunder method', def: { en: 'a special method with leading and trailing double underscores', bn: 'সামনে ও পেছনে ডাবল আন্ডারস্কোরযুক্ত পাইথনের বিশেষ মেথড' } },
        { term: 'operator overloading', def: { en: 'customizing how built-in operators act on user-defined objects', bn: 'ব্যবহারকারীর নিজস্ব অবজেক্টে বিল্ট-ইন অপারেটরের আচরণ পুনর্নির্ধারণ' } },
        { term: 'typecode buffer', def: { en: 'a homogeneous contiguous memory block constrained to one C type', bn: 'নির্দিষ্ট সি টাইপে সীমাবদ্ধ সমজাতীয় অবিচ্ছিন্ন মেমরি ব্লক' } },
        { term: 'dependency pinning', def: { en: 'locking external library versions to guarantee reproducible builds', bn: 'সফটওয়্যারের নির্ভুল বিল্ড নিশ্চিত করতে লাইব্রেরির নির্দিষ্ট ভার্সন লক করা' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. Class properties vs instance properties: class variable and instance variable', bn: '১. ক্লাস প্রপার্টি বনাম ইনস্ট্যান্স প্রপার্টি: ক্লাস ভেরিয়েবল ও ইনস্ট্যান্স ভেরিয়েবল' } },
    {
      type: 'para',
      text: {
        en: 'A class variable lives on the class namespace and is shared across all instances. An instance variable is bound to self inside __init__ and belongs only to that single object.',
        bn: 'ক্লাস ভেরিয়েবল সরাসরি ক্লাসের নেইমস্পেসে থাকে এবং সব ইনস্ট্যান্সের মাঝে শেয়ার হয়। ইনস্ট্যান্স ভেরিয়েবল __init__-এর ভেতরে self-এ বাঁধা থাকে এবং কেবল ওই একক অবজেক্টের মালিকানাধীন।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'class_vs_instance.py',
      code: `class WorkerNode:
    # class variable: shared by every worker in the fleet
    cluster_region = 'ap-south-1'
    total_workers = 0

    def __init__(self, node_id, ram_gb):
        # instance variable: unique to each worker
        self.node_id = node_id
        self.ram_gb = ram_gb
        WorkerNode.total_workers += 1

n1 = WorkerNode('worker-01', 16)
n2 = WorkerNode('worker-02', 32)

print(n1.node_id, n1.cluster_region)   # worker-01 ap-south-1
print(n2.node_id, n2.cluster_region)   # worker-02 ap-south-1
print('Total workers:', WorkerNode.total_workers)  # Total workers: 2

# Overriding on instance creates a local attribute, leaving class variable intact
n1.cluster_region = 'us-east-1'
print(n1.cluster_region, n2.cluster_region, WorkerNode.cluster_region)
# us-east-1 ap-south-1 ap-south-1`,
      caption: {
        en: 'Mutating through an instance creates an instance-local shadow. Always modify shared class variables explicitly through the ClassName namespace.',
        bn: 'ইনস্ট্যান্সের মাধ্যমে মান বদলালে শুধু স্থানীয় শ্যাডো তৈরি হয়। শেয়ার্ড ক্লাস ভেরিয়েবল পরিবর্তন করতে সর্বদা সরাসরি ClassName ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Operator overloading: the __add__ magic method', bn: '২. অপারেটর ওভারলোডিং: __add__ ম্যাজিক মেথড' } },
    {
      type: 'para',
      text: {
        en: 'Implementing __add__ tells Python how to evaluate the plus operator for instances of your class, returning a new instance without mutating either operand.',
        bn: '__add__ মেথড সংজ্ঞায়িত করলে নিজস্ব ক্লাসের অবজেক্টে যোগ চিহ্নের আচরণ নির্ধারিত হয়, যা কোনো অপারেন্ড না বদলিয়ে নতুন অবজেক্ট প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'vector_add.py',
      code: `class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        if not isinstance(other, Vector2D):
            return NotImplemented
        return Vector2D(self.x + other.x, self.y + other.y)

    def __repr__(self):
        return f'Vector2D({self.x}, {self.y})'

v1 = Vector2D(3, 4)
v2 = Vector2D(5, 7)
v3 = v1 + v2

print('Sum vector:', v3)               # Sum vector: Vector2D(8, 11)
print(v3.x, v3.y)                      # 8 11
print(v1)                              # Vector2D(3, 4) (v1 remains immutable)`,
      caption: {
        en: 'Returning NotImplemented allows Python to check if the right-hand operand provides a reverse __radd__ method before raising a TypeError.',
        bn: 'NotImplemented ফেরত দিলে পাইথন TypeError তোলার আগে ডানপাশের অপারেন্ডে বিপরীত __radd__ আছে কিনা তা যাচাই করার সুযোগ পায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Rich comparison: the __lt__ magic method for sorting', bn: '৩. রিচ কম্প্যারিজন: সর্টিংয়ের জন্য __lt__ ম্যাজিক মেথড' } },
    {
      type: 'para',
      text: {
        en: 'The __lt__ method defines less-than ordering. Defining __lt__ enables standard sorted() calls and min/max operations automatically.',
        bn: '__lt__ মেথড ছোট-বড় তুলনা নির্ধারণ করে। এটি ডিফাইন করলে অবজেক্টগুলো স্বয়ংক্রিয়ভাবে sorted(), min() ও max() ফাংশনে কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'task_sort.py',
      code: `class ScheduledJob:
    def __init__(self, title, priority_rank):
        self.title = title
        self.priority_rank = priority_rank

    def __lt__(self, other):
        # Lower rank number means higher priority
        return self.priority_rank < other.priority_rank

    def __repr__(self):
        return f'{self.title}({self.priority_rank})'

jobs = [
    ScheduledJob('vacuum_db', 30),
    ScheduledJob('renew_certs', 10),
    ScheduledJob('sync_cdn', 20)
]

sorted_jobs = sorted(jobs)
print('Sorted execution order:', sorted_jobs)
# Sorted execution order: [renew_certs(10), sync_cdn(20), vacuum_db(30)]

print('Highest priority job:', min(jobs).title)   # Highest priority job: renew_certs`,
      caption: {
        en: 'Implementing __lt__ is the single requirement for Python sorting algorithms like Timsort to order custom object lists.',
        bn: 'পাইথনের টিমসরট অ্যালগরিদমের মাধ্যমে নিজস্ব অবজেক্ট সাজানোর জন্য শুধুমাত্র __lt__ মেথডটি তৈরি করাই যথেষ্ট।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Callable instances: the __call__ magic method', bn: '৪. কলেবল ইনস্ট্যান্স: __call__ ম্যাজিক মেথড' } },
    {
      type: 'para',
      text: {
        en: 'Adding __call__ makes an instance callable like a standard function. This pattern allows objects to retain internal state between invocations.',
        bn: '__call__ যোগ করলে ক্লাসের ইনস্ট্যান্স সাধারণ ফাংশনের মতো কল করা যায়। এই প্যাটার্নটি কলের মাঝে নিজস্ব অভ্যন্তরীণ অবস্থা ধরে রাখতে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'functor_call.py',
      code: `class TokenBucketRateLimiter:
    def __init__(self, max_tokens):
        self.max_tokens = max_tokens
        self.current_tokens = max_tokens

    def __call__(self, cost=1):
        if self.current_tokens >= cost:
            self.current_tokens -= cost
            return True
        return False

limiter = TokenBucketRateLimiter(2)

print('Request 1:', limiter())         # Request 1: True
print('Request 2:', limiter())         # Request 2: True
print('Request 3:', limiter())         # Request 3: False
print('Remaining capacity:', limiter.current_tokens)  # Remaining capacity: 0`,
      caption: {
        en: 'Functors implemented via __call__ combine the clean invocation syntax of functions with the persistent state encapsulation of classes.',
        bn: '__call__ দিয়ে তৈরি ফানক্টর ফাংশনের সহজ কলিং সিনট্যাক্স এবং ক্লাসের স্থায়ী স্টেট এনক্যাপসুলেশনকে একত্রে যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Inner classes: nested class encapsulation', bn: '৫. ইনার ক্লাস: নেস্টেড ক্লাসের সাহায্যে এনক্যাপসুলেশন' } },
    {
      type: 'para',
      text: {
        en: 'An inner class or nested class is defined inside another class body to group subordinate helper types logically under a shared domain namespace.',
        bn: 'ইনার ক্লাস বা নেস্টেড ক্লাস মূল ক্লাসের ভেতরে সংজ্ঞায়িত হয়, যা অধীনস্থ সহায়ক ডেটা টাইপকে একটি অভিন্ন নেইমস্পেসের অধীনে সাজিয়ে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'inner_classes.py',
      code: `class MicroserviceConfig:
    class DatabaseConnection:
        def __init__(self, host, port):
            self.host = host
            self.port = port
        def uri(self):
            return f'postgresql://{self.host}:{self.port}'

    def __init__(self, service_name, db_host, db_port):
        self.service_name = service_name
        # Instantiating the nested class helper
        self.db = MicroserviceConfig.DatabaseConnection(db_host, db_port)

svc = MicroserviceConfig('billing-api', '10.0.0.12', 5432)
print('Service:', svc.service_name)          # Service: billing-api
print('DB URI:', svc.db.uri())               # DB URI: postgresql://10.0.0.12:5432
print('Inner class type:', type(svc.db).__name__)  # Inner class type: DatabaseConnection`,
      caption: {
        en: 'Nested classes prevent global namespace pollution by keeping specialized helper structures tightly coupled to their parent component.',
        bn: 'নেস্টেড ক্লাস বিশেষায়িত সহায়ক কাঠামোকে মূল উপাদানের সাথে আটকে রেখে গ্লোবাল নেইমস্পেসের দূষণ দূর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The array module: low-level typed buffers with array("i")', bn: '৬. array মডিউল: array("i") দিয়ে লো-লেভেল টাইপড বাফার' } },
    {
      type: 'para',
      text: {
        en: 'The standard array module provides compact numeric arrays where all values must adhere to a single C typecode such as signed integers.',
        bn: 'স্ট্যান্ডার্ড array মডিউল কম্প্যাক্ট নিউমেরিক অ্যারে তৈরি করে, যেখানে সব মানকে নির্দিষ্ট সি টাইপকোড মেনে চলতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'typed_arrays.py',
      code: `import array

# 'i' represents signed integer (typically 4 bytes each)
packet_sizes = array.array('i', [128, 256, 512, 1024])
packet_sizes.append(2048)

print('Typecode:', packet_sizes.typecode)        # Typecode: i
print('Bytes per item:', packet_sizes.itemsize)  # Bytes per item: 4
print('Total elements:', len(packet_sizes))       # Total elements: 5
print('Raw list conversion:', packet_sizes.tolist())
# Raw list conversion: [128, 256, 512, 1024, 2048]

try:
    packet_sizes.append('text')                  # TypeError: 'str' object cannot be interpreted as an integer
except TypeError as err:
    print('Type safety check caught error')       # Type safety check caught error`,
      caption: {
        en: 'While Python lists store references to arbitrary Python objects, array.array stores raw packed primitive bytes with minimal overhead.',
        bn: 'পাইথন লিস্ট যেখানে বিভিন্ন অবজেক্টের পয়েন্টার রাখে, array.array সেখানে সর্বনিম্ন মেমরি ব্যয়ে খাঁটি সি বাইট সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Dates and formatting: datetime, strftime, and timedelta', bn: '৭. তারিখ ও ফরম্যাটিং: datetime, strftime ও timedelta' } },
    {
      type: 'para',
      text: {
        en: 'The datetime module handles date and time operations. Use strftime to format timestamps into strings and timedelta for calendar math.',
        bn: 'datetime মডিউল তারিখ ও সময় সংক্রান্ত কাজ পরিচালনা করে। strftime দিয়ে তারিখের লেখা সাজানো হয় এবং timedelta দিয়ে সময়ের যোগ-বিয়োগ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'date_time.py',
      code: `from datetime import datetime, timedelta

# Constructing an explicit datetime
build_time = datetime(2026, 9, 26, 14, 30, 0)

# strftime formats datetime into structured strings
formatted_date = build_time.strftime('%Y-%m-%d %H:%M')
print('Formatted timestamp:', formatted_date)    # Formatted timestamp: 2026-09-26 14:30

# Time arithmetic with timedelta
expiry_window = timedelta(days=7, hours=2)
expiry_date = build_time + expiry_window
print('Expiry timestamp:', expiry_date.strftime('%Y-%m-%d'))  # Expiry timestamp: 2026-10-03

# Parsing string back to datetime with strptime
parsed = datetime.strptime('2026-12-31', '%Y-%m-%d')
print('Parsed year:', parsed.year)               # Parsed year: 2026`,
      caption: {
        en: 'Direct numeric addition with dates fails with TypeError. Always apply timedelta objects for date offsets to properly account for month lengths.',
        bn: 'তারিখের সাথে সরাসরি সংখ্যা যোগ করলে TypeError হয়। মাসের সঠিক দৈর্ঘ্য রক্ষা করে সময়ের ব্যবধান মাপতে সর্বদা timedelta ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Package management: pip install, pip freeze, and locks', bn: '৮. প্যাকেজ ব্যবস্থাপনা: pip install, pip freeze এবং লক ফাইল' } },
    {
      type: 'para',
      text: {
        en: 'Package installations are managed with pip. Freezing dependencies into requirements.txt guarantees identical builds across environments.',
        bn: 'প্যাকেজ ইনস্টল ও পরিচালনা pip দিয়ে করা হয়। dependencies-কে requirements.txt-এ freeze করে রাখলে সব পরিবেশে হুবহু এক বিল্ড নিশ্চিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'packaging_workflow.py',
      code: `# Standard shell commands executed in terminal:
# 1. Install specific library version
# pip install urllib3==2.2.1

# 2. Inspect currently installed dependencies
# pip freeze > requirements.txt

# Simulating requirement parsing and validation
mock_requirements = [
    'requests==2.31.0',
    'pydantic==2.6.4',
    'pytest==8.1.1'
]

locked_packages = {}
for line in mock_requirements:
    pkg, ver = line.split('==')
    locked_packages[pkg] = ver

print('Locked requests version:', locked_packages['requests'])  # Locked requests version: 2.31.0
print('Total pinned dependencies:', len(locked_packages))         # Total pinned dependencies: 3`,
      caption: {
        en: 'Always run pip install inside an isolated virtual environment and pin exact package versions to prevent upstream updates from breaking production.',
        bn: 'সর্বদা ভার্চুয়াল এনভায়রনমেন্টে pip install চালান এবং নির্দিষ্ট ভার্সন পিন করুন যাতে লাইব্রেরির আপডেট প্রোডাকশন ভাঙতে না পারে।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why professional systems rely on these tools', bn: 'কেন প্রফেশনাল সিস্টেমে এসব টুল অপরিহার্য' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'Dunder methods let custom business domain classes integrate natively with Python core syntax', bn: 'ডান্ডার মেথডের মাধ্যমে নিজস্ব ব্যবসায়িক ক্লাসগুলো পাইথনের মূল সিনট্যাক্সের সাথে মসৃণভাবে মিশে যায়' },
        { en: 'Callable objects maintain clean API surface areas while encapsulating stateful logic', bn: 'কলেবল অবজেক্ট স্টেট সংরক্ষণ করার পাশাপাশি এপিআই-কে সাধারণ ফাংশনের মতো সহজ রাখে' },
        { en: 'array.array cuts memory footprints significantly when handling millions of numbers', bn: 'লক্ষ লক্ষ সংখ্যার প্রসেসিংয়ে array.array মেমরির ব্যবহার বহুগুণ কমিয়ে আনে' },
        { en: 'datetime and timedelta account for leap years and month boundaries without manual offsets', bn: 'datetime ও timedelta লিপ ইয়ার ও মাসের সীমারেখা নিজে থেকেই নিখুঁতভাবে গণনা করে' },
        { en: 'pip freeze creates deterministic dependency manifests essential for CI/CD container builds', bn: 'pip freeze এমন সুনির্দিষ্ট ডিপেন্ডেন্সি তালিকা তৈরি করে যা সিআই/সিডি বিল্ডের জন্য অপরিহার্য' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Tool / Construct', bn: 'টুল / কনস্ট্রাক্ট' }, { en: 'Category', bn: 'ক্যাটাগরি' }, { en: 'Primary Use Case', bn: 'মূল ব্যবহার' }, { en: 'Primary Benefit', bn: 'প্রধান সুবিধা' }],
      rows: [
        [{ en: '__add__ / __lt__', bn: '__add__ / __lt__' }, { en: 'Magic Dunder', bn: 'ম্যাজিক ডান্ডার' }, { en: 'Overload + and < operators', bn: '+ এবং < অপারেটরের আচরণ নিয়ন্ত্রণ' }, { en: 'Clean expressive domain math and sorting', bn: 'সহজ গণিত এবং সরাসরি সর্টিং সুবিধা' }],
        [{ en: '__call__', bn: '__call__' }, { en: 'Magic Dunder', bn: 'ম্যাজিক ডান্ডার' }, { en: 'Turn instance into callable', bn: 'ইনস্ট্যান্সকে ফাংশনের মতো রূপান্তর' }, { en: 'Stateful execution with clean calling syntax', bn: 'স্টেট ধরে রাখার পাশাপাশি ফাংশনের মতো কল' }],
        [{ en: 'Inner Class', bn: 'ইনার ক্লাস' }, { en: 'OOP Design', bn: 'অবজেক্ট ডিজাইন' }, { en: 'Encapsulate helper types', bn: 'সহায়ক ডেটা টাইপ গুছিয়ে রাখা' }, { en: 'Prevents namespace pollution across modules', bn: 'মডিউলে অপ্রয়োজনীয় টাইপের ভিড় কমায়' }],
        [{ en: 'array.array', bn: 'array.array' }, { en: 'Standard Library', bn: 'স্ট্যান্ডার্ড লাইব্রেরি' }, { en: 'Homogeneous numeric buffers', bn: 'সমজাতীয় সংখ্যার বাফার' }, { en: 'Massive RAM reduction over object lists', bn: 'লিস্টের তুলনায় ব্যাপক র্যাম সাশ্রয়' }],
        [{ en: 'datetime / strftime', bn: 'datetime / strftime' }, { en: 'Standard Library', bn: 'স্ট্যান্ডার্ড লাইব্রেরি' }, { en: 'Timestamp math and display', bn: 'সময়ের হিসাব ও প্রদর্শন' }, { en: 'Calendar-accurate time interval calculations', bn: 'ক্যালেন্ডার মেনে নিখুঁত সময়ের হিসাব' }],
        [{ en: 'pip freeze', bn: 'pip freeze' }, { en: 'Ecosystem CLI', bn: 'ইকোসিস্টেম সিএলআই' }, { en: 'Lock dependency versions', bn: 'প্যাকেজের ভার্সন লক করা' }, { en: 'Zero build drift across deployment hosts', bn: 'হোস্টে কোড চলার সময় কোনো ভার্সন অসঙ্গতি থাকে না' }]
      ],
      caption: { en: 'Summary of Python OOP dunder hooks, low-level arrays, date tools, and packaging utilities.', bn: 'পাইথনের ডান্ডার মেথড, অ্যারে, তারিখ টুলস ও প্যাকেজ ব্যবস্থাপনার সারসংক্ষেপ।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to structure production-grade Python components', bn: 'কীভাবে প্রোডাকশন-মানের পাইথন কম্পোনেন্ট সাজাবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Define clean dunder contracts', bn: 'পরিচ্ছন্ন ডান্ডার চুক্তি নির্ধারণ করুন' }, text: { en: 'Ensure __add__ and comparison methods handle unexpected types with NotImplemented.', bn: '__add__ ও অন্যান্য মেথডে অনাকাঙ্ক্ষিত টাইপের ক্ষেত্রে NotImplemented ফিরিয়ে দিন।' } },
        { title: { en: 'Use callables for stateful closures', bn: 'স্টেটফুল ক্লোজারে কলেবল ব্যবহার করুন' }, text: { en: 'Implement __call__ when an algorithm needs to track counts, tokens, or cache states.', bn: 'গণনা, টোকেন বা ক্যাশ স্টেট ট্র্যাক করতে ফাংশনের বিকল্প হিসেবে __call__ লিখুন।' } },
        { title: { en: 'Choose array over list for bulk numbers', bn: 'বিপুল সংখ্যায় লিস্টের বদলে অ্যারে বাছুন' }, text: { en: 'Use array("i") or array("f") when streaming audio buffers, metrics, or coordinates.', bn: 'অডিও বাফার, মেট্রিক্স বা স্থানাঙ্ক প্রসেসিংয়ে array("i") অথবা array("f") নিন।' } },
        { title: { en: 'Format dates with explicit specifiers', bn: 'সুনির্দিষ্ট স্পেসিফায়ার দিয়ে তারিখ সাজান' }, text: { en: 'Standardize on ISO-8601 formatting with %Y-%m-%d %H:%M:%S across logs and APIs.', bn: 'লগ ও এপিআই জুড়ে %Y-%m-%d %H:%M:%S ফরম্যাট দিয়ে তারিখের অভিন্নতা রক্ষা করুন।' } },
        { title: { en: 'Pin dependencies in virtual environments', bn: 'ভার্চুয়াল এনভায়রনমেন্টে ডিপেন্ডেন্সি পিন করুন' }, text: { en: 'Always commit requirements.txt generated by pip freeze to prevent build rot.', bn: 'বিল্ড নষ্ট হওয়া রোধে pip freeze দিয়ে তৈরি requirements.txt সর্বদা সেভ রাখুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Dunder method interception and packaging pipeline', bn: 'ডান্ডার মেথড কার্যপ্রবাহ এবং প্যাকেজিং পাইপলাইন' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="diagram of python syntax mapping to dunder methods and pip dependency cycle"><g font-size="11" fill="currentColor"><rect x="20" y="24" width="130" height="34" rx="6" fill="none" stroke="currentColor"/><text x="85" y="46" text-anchor="middle">Syntax: a + b</text><rect x="200" y="24" width="160" height="34" rx="6" fill="none" stroke="currentColor"/><text x="280" y="46" text-anchor="middle">Dispatches: a.__add__(b)</text><line x1="150" y1="41" x2="200" y2="41" stroke="currentColor" stroke-width="1.2"/><rect x="410" y="24" width="150" height="34" rx="6" fill="none" stroke="currentColor"/><text x="485" y="46" text-anchor="middle">New Object Returned</text><line x1="360" y1="41" x2="410" y2="41" stroke="currentColor" stroke-width="1.2"/><rect x="20" y="110" width="150" height="34" rx="6" fill="none" stroke="currentColor"/><text x="95" y="132" text-anchor="middle">pip install pkg==1.0</text><line x1="170" y1="127" x2="230" y2="127" stroke="currentColor" stroke-width="1.2"/><rect x="230" y="110" width="150" height="34" rx="6" fill="none" stroke="currentColor"/><text x="305" y="132" text-anchor="middle">pip freeze</text><line x1="380" y1="127" x2="440" y2="127" stroke="currentColor" stroke-width="1.2"/><rect x="440" y="110" width="170" height="34" rx="6" fill="none" stroke="currentColor"/><text x="525" y="132" text-anchor="middle">requirements.txt Locked</text></g></svg>`,
      caption: { en: 'Python expression mapping to underlying dunder methods and the dependency management loop.', bn: 'পাইথন সিনট্যাক্স যেভাবে ডান্ডার মেথডে রূপান্তরিত হয় এবং ডিপেন্ডেন্সি সংরক্ষণের চক্র।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Production safety recommendation', bn: 'প্রোডাকশন নিরাপত্তা সুপারিশ' },
      text: {
        en: 'Whenever you implement __lt__ for custom sorting, also consider adding functools.total_ordering to get __le__, __gt__, and __ge__ derived automatically without boilerplate.',
        bn: 'কাস্টম সর্টিংয়ের জন্য __lt__ তৈরি করার সময় functools.total_ordering ডেকোরেটর ব্যবহার করলে __le__, __gt__ ও __ge__ অতিরিক্ত কোড ছাড়াই স্বয়ংক্রিয়ভাবে প্রস্তুত হয়ে যায়।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The class variable mutation trap', bn: 'ক্লাস ভেরিয়েবল পরিবর্তনের ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Accidentally shadowing class variables through instances', bn: 'ইনস্ট্যান্সের মাধ্যমে অসাবধানতাবশত ক্লাস ভেরিয়েবল ওভাররাইড' },
      text: {
        en: 'Writing self.shared_count += 1 does not update the class variable; it reads the class variable, adds one, and creates a new instance variable on self. Subsequent instances will still see the original class value. Always write ClassName.shared_count += 1.',
        bn: 'self.shared_count += 1 লিখলে ক্লাস ভেরিয়েবল আপডেট হয় না; এটি পুরোনো মান পড়ে ইনস্ট্যান্সে একই নামের নতুন ভেরিয়েবল তৈরি করে। বাকি সব ইনস্ট্যান্স আগের মানই দেখতে থাকে। সর্বদা ClassName.shared_count += 1 লিখুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'python-dunders-tooling-ex1', kind: 'predict', topic: 'python: OOP and ecosystem',
      question: { en: 'What does this callable instance print?', bn: 'এই কলেবল ইনস্ট্যান্স কল করলে কী প্রিন্ট হবে?' },
      code: `class Counter:\n    def __init__(self):\n        self.val = 0\n    def __call__(self):\n        self.val += 1\n        return self.val\n\nc = Counter()\nc()\nprint(c())`,
      answer: '2',
      accept: ['2'],
      hint: { en: 'State persists across both invocations.', bn: 'স্টেট উভয় কলেই সংরক্ষিত থাকে।' },
      explanation: { en: 'The first invocation increments val to 1, and the second increments it to 2 and returns it.', bn: 'প্রথম কলে val বেড়ে ১ হয় এবং দ্বিতীয় কলে তা ২ হয়ে প্রিন্ট হয়।' }
    },
    {
      id: 'python-dunders-tooling-ex2', kind: 'mcq', topic: 'python: OOP and ecosystem',
      question: { en: 'Which magic method enables sorting custom objects using sorted()?', bn: 'sorted() দিয়ে নিজস্ব অবজেক্ট সর্ট করতে কোন ম্যাজিক মেথড সংজ্ঞায়িত করতে হয়?' },
      options: [
        { en: '__lt__', bn: '__lt__ মেথড' },
        { en: '__add__', bn: '__add__ মেথড' },
        { en: '__call__', bn: '__call__ মেথড' },
        { en: '__init__', bn: '__init__ মেথড' }
      ],
      answer: 0,
      hint: { en: 'Less than comparison dunder.', bn: 'ছোট তুলনা করার ডান্ডার মেথড।' },
      explanation: { en: '__lt__ defines less-than ordering, allowing Python comparison algorithms to establish sort orders.', bn: '__lt__ মেথড ছোট-বড় তুলনা নির্ধারণ করে, যা সর্টিং অ্যালগরিদমকে ক্রম সাজাতে সাহায্য করে।' }
    },
    {
      id: 'python-dunders-tooling-ex3', kind: 'predict', topic: 'python: OOP and ecosystem',
      question: { en: 'What does this strftime directive print for the four-digit year format?', bn: 'চার অঙ্কের বছর ফরম্যাটের জন্য এই strftime ডিরেক্টিভ কী প্রিন্ট করবে?' },
      code: `from datetime import datetime\nnow = datetime(2026, 9, 26)\nprint(now.strftime('%Y'))`,
      answer: '2026',
      accept: ['2026'],
      hint: { en: '%Y formats as a 4-digit year.', bn: '%Y চার অঙ্কের বছর ফরম্যাট করে।' },
      explanation: { en: '%Y produces the full four-digit year (2026), whereas %y gives a two-digit year (26).', bn: '%Y চার অঙ্কের পূর্ণ বছর (2026) তৈরি করে, যেখানে %y কেবল দুই অঙ্ক (26) দেয়।' }
    },
    {
      id: 'python-dunders-tooling-ex4', kind: 'predict', topic: 'python: OOP and ecosystem',
      question: { en: 'What is the typecode of an array created with array("i", [1, 2])?', bn: 'array("i", [1, 2]) দিয়ে তৈরি অ্যারের typecode কী?' },
      code: `import array\na = array.array('i', [1, 2])\nprint(a.typecode)`,
      answer: 'i',
      accept: ['i', "'i'"],
      hint: { en: 'It matches the character code supplied during creation.', bn: 'তৈরির সময় যে ক্যারেক্টার কোড দেওয়া হয়েছিল তার সাথে মেলে।' },
      explanation: { en: 'The typecode property reflects the memory format code, which is "i" for signed integer.', bn: 'typecode প্রপার্টি মেমরি ফরম্যাট কোডকে প্রকাশ করে, যা সাইন্ড ইন্টিজারের জন্য "i"।' }
    }
  ],
  quiz: {
    id: 'python-dunders-tooling-quiz',
    title: { en: 'Quiz — OOP dunders, arrays, dates, and pip', bn: 'কুইজ — ওওপি ডান্ডার, অ্যারে, তারিখ ও পিপ' },
    questions: [
      {
        id: 'python-dunders-tooling-q1', kind: 'mcq', topic: 'python: OOP and ecosystem',
        question: { en: 'What command exports currently installed Python dependencies into a file?', bn: 'বর্তমানে ইনস্টল থাকা সব পাইথন প্যাকেজের তালিকা ফাইলে এক্সপোর্ট করতে কোন কমান্ড ব্যবহার করা হয়?' },
        options: [
          { en: 'pip freeze > requirements.txt', bn: 'pip freeze > requirements.txt কমান্ড' },
          { en: 'pip export', bn: 'pip export কমান্ড' },
          { en: 'python --packages', bn: 'python --packages কমান্ড' },
          { en: 'pip list --save', bn: 'pip list --save কমান্ড' }
        ],
        answer: 0,
        hint: { en: 'Freezing packages to text.', bn: 'প্যাকেজের বর্তমান অবস্থা টেক্সটে রূপান্তর।' },
        explanation: { en: 'pip freeze outputs installed packages with exact pinned version numbers, standardly redirected to requirements.txt.', bn: 'pip freeze সুনির্দিষ্ট ভার্সনসহ সব প্যাকেজ আউটপুট দেয়, যা সাধারণত requirements.txt-এ সংরক্ষণ করা হয়।' }
      },
      {
        id: 'python-dunders-tooling-q2', kind: 'predict', topic: 'python: OOP and ecosystem',
        question: { en: 'What does this vector addition print?', bn: 'এই ভেক্টর যোগের পর প্রিন্টে কী দেখা যাবে?' },
        code: `class Point:\n    def __init__(self, x):\n        self.x = x\n    def __add__(self, o):\n        return Point(self.x + o.x)\n\np = Point(10) + Point(20)\nprint(p.x)`,
        answer: '30',
        accept: ['30'],
        hint: { en: '__add__ sums the two x coordinates.', bn: '__add__ দুটি x স্থানাঙ্ক যোগ করে।' },
        explanation: { en: '10 + 20 produces a new Point with x equal to 30.', bn: '10 + 20 যুক্ত হয়ে নতুন Point তৈরি হয় যার x মান 30।' }
      },
      {
        id: 'python-dunders-tooling-q3', kind: 'mcq', topic: 'python: OOP and ecosystem',
        question: { en: 'Why use array.array instead of standard Python lists for large datasets of numbers?', bn: 'বিপুল পরিমাণ সংখ্যার জন্য সাধারণ লিস্টের বদলে array.array কেন ব্যবহার করা হয়?' },
        options: [
          { en: 'It stores raw C primitives contiguously, using significantly less memory', bn: 'এটি অবিচ্ছিন্ন মেমরিতে সরাসরি সি প্রিমিটিভ রাখে, ফলে র্যাম অনেক কম লাগে' },
          { en: 'It can store mixed data types like strings and ints together', bn: 'এটি একসাথে স্ট্রিং এবং সংখ্যা মিশ্রিত অবস্থায় রাখতে পারে' },
          { en: 'It is a third-party package requiring pip', bn: 'এটি তৃতীয় পক্ষের প্যাকেজ যার জন্য pip লাগে' },
          { en: 'It has no length limitations', bn: 'এর কোনো মেমরি সীমাবদ্ধতা নেই' }
        ],
        answer: 0,
        hint: { en: 'Contiguous typed memory vs pointer overhead.', bn: 'পয়েন্টার বোঝার বদলে সরাসরি টাইপড মেমরি।' },
        explanation: { en: 'Standard lists store pointers to heap-allocated PyObjects; array.array stores raw packed bytes without per-element wrapper overhead.', bn: 'সাধারণ লিস্ট অবজেক্টের পয়েন্টার জমায়; array.array কোনো বাড়তি পয়েন্টার ছাড়াই সরাসরি বাইট সংরক্ষণ করে।' }
      },
      {
        id: 'python-dunders-tooling-q4', kind: 'mcq', topic: 'python: OOP and ecosystem',
        question: { en: 'How should you calculate an expiration date 30 days after a given datetime?', bn: 'একটি নির্দিষ্ট তারিখের 30 দিন পরের সময় বের করতে কোন পদ্ধতিটি সঠিক?' },
        options: [
          { en: 'dt + timedelta(days=30)', bn: 'dt + timedelta(days=30)' },
          { en: 'dt + 30', bn: 'dt + 30' },
          { en: 'dt.add_days(30)', bn: 'dt.add_days(30)' },
          { en: 'dt.strftime("%d") + 30', bn: 'dt.strftime("%d") + 30' }
        ],
        answer: 0,
        hint: { en: 'Use the standard delta object.', bn: 'স্ট্যান্ডার্ড ডেল্টা অবজেক্ট ব্যবহার করুন।' },
        explanation: { en: 'datetime math requires timedelta instances; adding bare integers raises a TypeError.', bn: 'তারিখের গাণিতিক পরিবর্তনে timedelta আবশ্যক; সরাসরি সংখ্যা যোগ করলে TypeError ঘটে।' }
      }
    ]
  }
};
