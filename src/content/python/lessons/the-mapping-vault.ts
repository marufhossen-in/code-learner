import type { Lesson } from '../../../lib/types';

export const mappingVaultLesson: Lesson = {
  slug: 'the-mapping-vault',
  tech: 'python',
  title: {
    en: 'Python Dictionaries, Sets & Hash Mappings',
    bn: 'পাইথন ডিকশনারি, সেট ও হ্যাশ ম্যাপিং'
  },
  summary: {
    en: 'Master key-value hash maps and unique sets across 10 structured topics, from dictionary fundamentals to set operations. Learn safe access with get(), dictionary comprehensions, nested mappings, and immutable frozensets.',
    bn: 'ডিকশনারির ভিত্তি থেকে শুরু করে সেট অপারেশন পর্যন্ত 10 টি বিষয়ে কি-ভ্যালু হ্যাশ ম্যাপ আয়ত্ত করুন। জানুন get() দিয়ে নিরাপদ অ্যাক্সেস, ডিকশনারি কমপ্রিহেনশন, নেস্টেড ম্যাপিং এবং অপরিবর্তনীয় frozenset।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-function-foundry',
    title: { en: 'Python Functions, Arguments, Scope & Lambda Expressions', bn: 'পাইথন ফাংশন, আর্গুমেন্ট, স্কোপ ও ল্যাম্বডা এক্সপ্রেশন' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Python Dictionaries: Key-Value Hash Tables and Key Types', bn: '১. পাইথন ডিকশনারি: কি-ভ্যালু হ্যাশ টেবিল ও কি-এর শর্ত' } },
    {
      type: 'para',
      text: {
        en: 'A Python dictionary is a mutable, ordered (since Python 3.7) collection of key-value pairs implemented as an optimized hash table. Keys must be immutable and hashable (strings, numbers, tuples); mutable types like lists or other dicts cannot be keys. Values can be any Python object.',
        bn: 'পাইথন ডিকশনারি হলো কি-ভ্যালু জোড়ার একটি পরিবর্তনযোগ্য ও সুশৃঙ্খল (পাইথন ৩.৭+) সংকলন যা হ্যাশ টেবিলের মাধ্যমে দ্রুত কাজ করে। কি (Key) অবশ্যই অপরিবর্তনীয় ও হ্যাশেবল হতে হয় (স্ট্রিং, সংখ্যা, টাপল); কোনো পরিবর্তনযোগ্য ডেটা যেমন লিস্ট বা ডিকশনারি নিজে কি হতে পারে না। তবে ভ্যালু (Value) হিসেবে যেকোনো ডেটা রাখা যায়।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Standard dictionary declaration
user = {
    "id": 101,
    "username": "tanvir_dev",
    "is_active": True,
    (2026, 9): "Quarterly Goal" # Tuples can be keys!
}

print("Username:", user["username"])
print("Total keys:", len(user))

# ❌ Invalid: Lists cannot be dictionary keys!
# bad_dict = { [1, 2]: "Invalid" } # TypeError: unhashable type: 'list'

# Output:
# Username: tanvir_dev
# Total keys: 4`,
      caption: {
        en: 'Dictionary keys must be hashable and immutable; lookups run in O(1) average time.',
        bn: 'ডিকশনারির কি অবশ্যই হ্যাশেবল হতে হয়; এর মান খোঁজা গড়ে O(1) দ্রুত সময়ে সম্পন্ন হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Safe Value Access: dict[key] vs dict.get(key, default)', bn: '২. নিরাপদ মান অ্যাক্সেস: dict[key] বনাম dict.get(key, default)' } },
    {
      type: 'para',
      text: {
        en: 'Accessing a missing key using bracket notation user["missing"] raises a fatal KeyError. The dict.get(key, default) method looks up keys safely, returning None (or a specified default value) if the key is not present, preventing crashes.',
        bn: 'ব্র্যাকেট দিয়ে খোঁজার সময় কি (key) না থাকলে সরাসরি KeyError ঘটে কোড ক্র্যাশ করে (user["missing"])। অন্যদিকে dict.get(key, default) মেথড নিরাপদে মান খোঁজে; কি না পেলে ক্র্যাশ না করে None (অথবা প্রদত্ত ডিফল্ট মান) ফেরত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `profile = {"name": "Rahim", "country": "Bangladesh"}

# Direct access (Fine when key is guaranteed to exist)
print("Name:", profile["name"]) # "Rahim"

# ❌ Direct access to missing key crashes:
# print(profile["age"]) # KeyError: 'age'

# ✅ Safe access with get():
age = profile.get("age")
print("Age (missing):", age) # None

# ✅ Safe access with custom fallback default:
theme = profile.get("theme", "dark_mode")
print("Theme:", theme) # "dark_mode"

# Output:
# Name: Rahim
# Age (missing): None
# Theme: dark_mode`,
      caption: {
        en: 'get() supplies safe default values, eliminating KeyError try/except blocks.',
        bn: 'get() মেথড নিরাপদ ডিফল্ট মান সরবরাহ করে KeyError দূর করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Adding and Updating Items: Assignment, update(), and setdefault()', bn: '৩. মান যোগ ও আপডেট: অ্যাসাইনমেন্ট, update() ও setdefault()' } },
    {
      type: 'para',
      text: {
        en: 'Assigning a new key dict[new_key] = value creates or overwrites an entry. dict.update(other_dict) merges multiple pairs at once. dict.setdefault(key, default) returns the value if present; if missing, it inserts the key with the default value, ideal for grouping collections.',
        bn: 'dict[new_key] = value লিখলে নতুন এন্ট্রি তৈরি হয় বা বিদ্যমান মান বদলে যায়। dict.update() একসাথে একাধিক কি-ভ্যালু যোগ বা আপডেট করে। dict.setdefault(key, default) কি থাকলে তার মান দেয়; না থাকলে নতুন কি তৈরি করে ডিফল্ট মানটি বসায়, যা গ্রুপিংয়ে দারুণ কার্যকর।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `config = {"host": "localhost", "port": 8000}

# 1. Single assignment update
config["port"] = 8080 # Updates existing key
config["debug"] = True # Adds new key

# 2. Batch update
config.update({"timeout": 30, "env": "production"})

# 3. setdefault: initialize if not already present
config.setdefault("retries", 3)  # Inserts 3
config.setdefault("port", 9000)     # Kept 8080 because port already existed!

print("Port:", config["port"])
print("Retries:", config["retries"])
print("Final config:", config)

# Output:
# Port: 8080
# Retries: 3
# Final config: {'host': 'localhost', 'port': 8080, 'debug': True, 'timeout': 30, 'env': 'production', 'retries': 3}`,
      caption: {
        en: 'setdefault() sets a fallback value exclusively if the key does not already exist.',
        bn: 'setdefault() শুধুমাত্র কি অনুপস্থিত থাকলেই নতুন মান বসায়, বিদ্যমান মান পরিবর্তন করে না।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Removing Elements: pop(), popitem(), and del', bn: '৪. উপাদান মোছা: pop(), popitem() ও del' } },
    {
      type: 'para',
      text: {
        en: 'dict.pop(key, default) removes the key and returns its value (returns default if missing, or raises KeyError). dict.popitem() removes and returns the LAST inserted key-value pair as a tuple (LIFO order). del dict[key] deletes the entry directly without returning anything.',
        bn: 'dict.pop(key, default) কি মুছে তার মান ফেরত দেয় (না পেলে ডিফল্ট দেয় বা KeyError দেয়)। dict.popitem() সবচেয়ে শেষে যোগ করা কি-ভ্যালু জোড়াটিকে টাপল আকারে মুছে ফেরত দেয় (LIFO)। আর del dict[key] সরাসরি কোনো মান ফেরত না দিয়েই এন্ট্রিটি মুছে ফেলে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `session = {"user_id": 42, "token": "abc_xyz", "ip": "127.0.0.1", "role": "admin"}

# 1. pop: Remove specific key and capture its value
token = session.pop("token")
print("Removed token:", token) # "abc_xyz"

# 2. pop with safe default for missing key
missing = session.pop("expires_at", "N/A")
print("Missing fallback:", missing) # "N/A"

# 3. popitem: LIFO removal of most recently added pair
last_pair = session.popitem()
print("Popped last pair:", last_pair) # ('role', 'admin')

# 4. del keyword
del session["ip"]
print("Remaining session:", session) # {'user_id': 42}

# Output:
# Removed token: abc_xyz
# Missing fallback: N/A
# Popped last pair: ('role', 'admin')
# Remaining session: {'user_id': 42}`,
      caption: {
        en: 'pop() returns removed values; popitem() removes the most recent pair in LIFO sequence.',
        bn: 'pop() মুছে ফেলা মান ফেরত দেয়; popitem() শেষের জোড়াটিকে টাপল হিসেবে সরিয়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Dictionary Views: keys(), values(), and items()', bn: '৫. ডিকশনারি ভিউ: keys(), values() ও items() ইটারেশন' } },
    {
      type: 'para',
      text: {
        en: 'Dictionaries provide dynamic view objects that reflect live changes: dict.keys() returns all keys; dict.values() returns all values; and dict.items() returns (key, value) tuple pairs. Unpacking dict.items() inside a for loop is the standard Python pattern for dictionary iteration.',
        bn: 'ডিকশনারিতে তিনটি ডায়নামিক ভিউ অবজেক্ট রয়েছে: dict.keys() সব কি দেয়; dict.values() সব মান দেয়; এবং dict.items() প্রতিটি কি ও ভ্যালুকে (key, value) টাপল জোড়া হিসেবে দেয়। for লুপে dict.items() আনপ্যাক করে পড়াই হলো পাইথনের আদর্শ নিয়ম।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `stats = {"views": 1500, "likes": 320, "shares": 85}

# Iterate through (key, value) pairs directly
for metric, count in stats.items():
    print(f"Metric '{metric}': {count}")

# Check key membership using keys view
print("Has views:", "views" in stats.keys()) # True

# Aggregate all numerical values
total_engagement = sum(stats.values())
print("Total engagement sum:", total_engagement)

# Output:
# Metric 'views': 1500
# Metric 'likes': 320
# Metric 'shares': 85
# Has views: True
# Total engagement sum: 1905`,
      caption: {
        en: 'stats.items() unlocks idiomatic key-value unpacking in standard Python loops.',
        bn: 'stats.items() লুপের ভেতরে একসাথে কি এবং ভ্যালু আনপ্যাক করার সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Dictionary Comprehensions: Expressive Map Construction', bn: '৬. ডিকশনারি কমপ্রিহেনশন: এক লাইনে ডিকশনারি রূপান্তর' } },
    {
      type: 'para',
      text: {
        en: 'Dictionary comprehensions construct new dictionaries concisely from iterables with the syntax {key_expr: value_expr for item in iterable if condition}. They are frequently used to invert dictionaries, filter records, or format lookup maps.',
        bn: 'ডিকশনারি কমপ্রিহেনশন কোনো সিকোয়েন্স বা বিদ্যমান ডেটা থেকে এক লাইনে নতুন ডিকশনারি বানায়: {key_expr: value_expr for item in iterable if condition}। ডিকশনারি উল্টে দেওয়া (ইনভার্ট), ফিল্টার করা বা ডেটা ম্যাপিংয়ে এটি অত্যন্ত কার্যকর।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `names = ["Alice", "Bob", "Charlie", "David"]

# 1. Map names to their string lengths
name_lengths = {name: len(name) for name in names}
print("Lengths map:", name_lengths)

# 2. Filtering high-value items
prices_bdt = {"Laptop": 85000, "Mouse": 1200, "Monitor": 25000, "Cable": 450}
expensive_items = {k: v for k, v in prices_bdt.items() if v >= 20000}
print("High value items:", expensive_items)

# 3. Inverting dictionary keys and values (swap)
status_codes = {200: "OK", 404: "Not Found", 500: "Server Error"}
inverted_codes = {desc: code for code, desc in status_codes.items()}
print("Inverted lookup:", inverted_codes)

# Output:
# Lengths map: {'Alice': 5, 'Bob': 3, 'Charlie': 7, 'David': 5}
# High value items: {'Laptop': 85000, 'Monitor': 25000}
# Inverted lookup: {'OK': 200, 'Not Found': 404, 'Server Error': 500}`,
      caption: {
        en: 'Dictionary comprehensions create transformed and inverted lookup maps in one line.',
        bn: 'ডিকশনারি কমপ্রিহেনশন এক লাইনে ফিল্টারিং ও কি-ভ্যালু অদলবদল সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Nested Dictionaries: Modeling Structured JSON Data', bn: '৭. নেস্টেড ডিকশনারি: স্ট্রাকচার্ড JSON ডেটা সংগঠন' } },
    {
      type: 'para',
      text: {
        en: 'Nested dictionaries store dictionaries as values inside other dictionaries, mirroring JSON document structures returned by REST and GraphQL APIs. Values are accessed by chaining consecutive bracket lookups.',
        bn: 'নেস্টেড ডিকশনারি হলো এমন ডিকশনারি যার ভেতরের ভ্যালুগুলো নিজেরাই একেকটি ডিকশনারি, যা REST এবং GraphQL API থেকে আসা JSON ডেটার সাথে হুবহু মিলে যায়। পরপর একাধিক ব্র্যাকেট [][]-এর মাধ্যমে ভেতরের ডেটা অ্যাক্সেস করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `organization = {
    "engineering": {
        "lead": "Farhan",
        "team_size": 12,
        "stack": ["Python", "React", "PostgreSQL"]
    },
    "product": {
        "lead": "Nadia",
        "team_size": 4,
        "stack": ["Figma", "Notion"]
    }
}

# Accessing nested fields
eng_lead = organization["engineering"]["lead"]
primary_tech = organization["engineering"]["stack"][0]

print("Engineering Lead:", eng_lead)
print("Primary tech stack:", primary_tech)

# Adding a new department
organization["design"] = {"lead": "Sakib", "team_size": 3}
print("Total departments:", len(organization))

# Output:
# Engineering Lead: Farhan
# Primary tech stack: Python
# Total departments: 3`,
      caption: {
        en: 'Nested dictionaries model complex database documents and hierarchical API payloads.',
        bn: 'নেস্টেড ডিকশনারি জটিল ডেটাবেজ ও এপিআই-এর হায়ারার্কিকাল ডেটা সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Python Sets: Unique Collections & Membership Testing', bn: '8. পাইথন সেট: ইউনিক উপাদানের সংকলন ও O(1) অনুসন্ধান' } },
    {
      type: 'para',
      text: {
        en: 'A set is an unordered, mutable collection of unique hashable elements. Declared using curly braces {1, 2, 3} or set(), duplicate entries are automatically discarded. Sets provide O(1) average constant-time membership testing with in, far outperforming O(n) array scans.',
        bn: 'সেট হলো কোনো ডুপ্লিকেট ছাড়া অনন্য (unique) উপাদান নিয়ে গঠিত একটি পরিবর্তনযোগ্য ও অক্রমবিন্যস্ত সংকলন। কার্লি ব্র্যাকেট {1, 2, 3} বা set() দিয়ে এটি ঘোষণা করা হয় এবং ডুপ্লিকেট মান দিলে তা স্বয়ংক্রিয়ভাবে বাতিল হয়। সেটের ভেতরে in দিয়ে কোনো উপাদান খোঁজা অত্যন্ত দ্রুত O(1) সময়ে ঘটে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# De-duplicating an array automatically via set()
raw_tags = ["python", "django", "python", "flask", "django", "fastapi"]
unique_tags = set(raw_tags)
print("Unique set:", unique_tags)

# Adding and removing elements
tech_set = {"Python", "Git"}
tech_set.add("Docker")        # Add item

# discard() vs remove():
# discard() removes safely without error if missing; remove() raises KeyError!
tech_set.discard("Kubernetes") # Does nothing, zero errors!
tech_set.remove("Git")         # Deletes "Git"

print("Tech set:", tech_set)
print("Is Python in tech set:", "Python" in tech_set) # O(1) lightning fast check!

# Output:
# Unique set: {'python', 'django', 'fastapi', 'flask'}
# Tech set: {'Python', 'Docker'}
# Is Python in tech set: True`,
      caption: {
        en: 'Sets discard duplicates automatically and offer O(1) instant membership checking.',
        bn: 'সেট স্বয়ংক্রিয়ভাবে ডুপ্লিকেট ডেটা মুছে দেয় এবং O(1) তাৎক্ষণিক অনুসন্ধান সুবিধা দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Mathematical Set Operations: Union, Intersection, and Difference', bn: '৯. গাণিতিক সেট অপারেশন: ইউনিয়ন, ইন্টারসেকশন ও ডিফারেন্স' } },
    {
      type: 'para',
      text: {
        en: 'Python sets natively support mathematical Venn diagram operations: Union (|) combines elements from both sets; Intersection (&) returns elements common to both; Difference (-) returns elements in set A but not in set B. And Symmetric Difference (^) returns items in either set, but not both.',
        bn: 'পাইথন সেট সরাসরি ভেনচিত্রের গাণিতিক অপারেশনগুলো সমর্থন করে: ইউনিয়ন (|) উভয় সেটের সব উপাদান একত্র করে; ইন্টারসেকশন (&) কেবল সাধারণ বা কমন উপাদানগুলো দেয়; ডিফারেন্স (-) প্রথম সেটের যেসব উপাদান দ্বিতীয়টিতে নেই তা দেয়। আর সিমেট্রিক ডিফারেন্স (^) উভয় সেটের আনকমন উপাদানগুলো দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `frontend_devs = {"Alice", "Bob", "Charlie"}
backend_devs  = {"Bob", "David", "Charlie"}

# 1. Union (|): All developers
all_devs = frontend_devs | backend_devs
print("Union (All devs):", all_devs)

# 2. Intersection (&): Full-stack developers (in BOTH sets)
fullstack_devs = frontend_devs & backend_devs
print("Intersection (Full stack):", fullstack_devs)

# 3. Difference (-): Exclusively Frontend (in A, not in B)
pure_frontend = frontend_devs - backend_devs
print("Difference (Frontend only):", pure_frontend)

# 4. Symmetric Difference (^): Specialists in either side, NOT both
single_specialists = frontend_devs ^ backend_devs
print("Symmetric Difference (Specialists):", single_specialists)

# Output:
# Union (All devs): {'Alice', 'Bob', 'David', 'Charlie'}
# Intersection (Full stack): {'Bob', 'Charlie'}
# Difference (Frontend only): {'Alice'}
# Symmetric Difference (Specialists): {'Alice', 'David'}`,
      caption: {
        en: 'Operators (| & - ^) perform mathematical set theory operations directly.',
        bn: 'অপারেটর (| & - ^) সরাসরি গণিতের সেট তত্ত্বীয় হিসাব এক নিমেষে সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Set Relationships and Immutable frozenset', bn: '১০. সেট সম্পর্ক ও অপরিবর্তনীয় frozenset' } },
    {
      type: 'para',
      text: {
        en: 'Sets can be compared using relationship methods: issubset() (or <=), issuperset() (or >=), and isdisjoint() (tests if two sets share zero elements). Because regular sets are mutable, they cannot be dictionary keys. frozenset creates an immutable, hashable set that can be used as dictionary keys or stored inside other sets.',
        bn: 'সেট সম্পর্ক পরীক্ষা করতে issubset() (উপসেট কি না), issuperset() (অধিসেট কি না) এবং isdisjoint() (উভয়ের মাঝে কোনো মিল নেই কি না) ব্যবহৃত হয়। সাধারণ সেট পরিবর্তনযোগ্য হওয়ায় এরা ডিকশনারির কি হতে পারে না। কিন্তু frozenset হলো অপরিবর্তনীয় ও হ্যাশেবল সেট, যা ডিকশনারির কি হিসেবে বা অন্য সেটের ভেতরে রাখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `core_permissions = {"read", "write"}
admin_permissions = {"read", "write", "delete", "audit"}
guest_permissions = {"view_only"}

# 1. Subset and Superset testing
print("Is core a subset of admin:", core_permissions.issubset(admin_permissions)) # True
print("Is admin a superset of core:", admin_permissions.issuperset(core_permissions)) # True

# 2. Disjoint testing: Zero overlap
print("Are admin and guest disjoint:", admin_permissions.isdisjoint(guest_permissions)) # True

# 3. frozenset: Immutable, hashable set
frozen_key = frozenset(["us-east-1", "production"])
role_cache = {
    frozen_key: "Cluster-Alpha" # frozenset can be a dictionary key!
}

print("Cache lookup with frozenset:", role_cache[frozen_key])

# Output:
# Is core a subset of admin: True
# Is admin a superset of core: True
# Are admin and guest disjoint: True
# Cache lookup with frozenset: Cluster-Alpha`,
      caption: {
        en: 'frozenset instances are immutable and hashable, making them valid dictionary keys.',
        bn: 'frozenset অপরিবর্তনীয় ও হ্যাশেবল হওয়ায় ডিকশনারির কি হিসেবে নিরাপদে কাজ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-map-ex1',
      kind: 'predict',
      topic: 'python: Dict get fallback',
      question: {
        en: 'What does {"status": 200}.get("error", "none") evaluate to in Python?',
        bn: 'পাইথনে {"status": 200}.get("error", "none") রান করলে কী মান ফেরত আসে?'
      },
      code: `/* Python get method fallback */
/* print({"status": 200}.get("error", "none")) */`,
      answer: 'none',
      accept: ['none', "'none'", '"none"'],
      hint: {
        en: 'Because "error" is not in the dictionary, it returns the second default argument.',
        bn: 'যেহেতু ডিকশনারিতে "error" কি নেই, তাই এটি দ্বিতীয় ফলব্যাক আর্গুমেন্টটি দেয়।'
      },
      explanation: {
        en: 'dict.get(key, default) safely returns the supplied default value ("none") when the target key is absent from the dictionary.',
        bn: 'টার্গেট কি ডিকশনারিতে অনুপস্থিত থাকলে dict.get(key, default) নিরাপদে প্রদত্ত ডিফল্ট মান ("none") প্রদান করে।'
      }
    },
    {
      id: 'py-map-ex2',
      kind: 'mcq',
      topic: 'python: Set discard vs remove',
      question: {
        en: 'What is the key difference between set.remove(x) and set.discard(x) when x is NOT in the set?',
        bn: 'সেটে x উপাদানটি না থাকলে set.remove(x) এবং set.discard(x)-এর মধ্যে মূল পার্থক্য কী?'
      },
      options: [
        { en: 'remove(x) raises a KeyError, while discard(x) does nothing and exits silently', bn: 'remove(x) একটি KeyError ছুড়ে দেয়, আর discard(x) কোনো এরর না দিয়ে শান্তভাবে সম্পন্ন হয়' },
        { en: 'discard(x) deletes the entire set', bn: 'discard(x) পুরো সেটটি মুছে দেয়' },
        { en: 'remove(x) is faster than discard(x)', bn: 'remove(x) বেশি দ্রুত চলে' },
        { en: 'There is no difference', bn: 'কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'discard is the safe removal method.',
        bn: 'discard হলো নিরাপদ অপরাসণ পদ্ধতি।'
      },
      explanation: {
        en: 'set.remove(x) raises a KeyError if x is not found in the set. set.discard(x) removes x if present, but suppresses any errors if x is missing.',
        bn: 'সেটে উপাদান না থাকলে remove(x) এরর (KeyError) ছুড়ে দেয়। অন্যদিকে discard(x) উপাদান থাকলে মুছে দেয় কিন্তু না থাকলে কোনো এরর দেয় না।'
      }
    },
    {
      id: 'py-map-ex3',
      kind: 'mcq',
      topic: 'python: Valid dictionary keys',
      question: {
        en: 'Which of the following data types CANNOT be used as a dictionary key in Python?',
        bn: 'নিচের কোন ডেটা টাইপটি পাইথনে ডিকশনারির কি (Key) হিসেবে ব্যবহার করা যায় না?'
      },
      options: [
        { en: 'list (e.g. [1, 2])', bn: 'list (যেমন [1, 2])' },
        { en: 'tuple (e.g. (1, 2))', bn: 'tuple (যেমন (1, 2))' },
        { en: 'string (e.g. "key")', bn: 'string (যেমন "key")' },
        { en: 'frozenset', bn: 'frozenset' }
      ],
      answer: 0,
      hint: {
        en: 'Mutable objects are unhashable and cannot be keys.',
        bn: 'পরিবর্তনযোগ্য অবজেক্ট হ্যাশেবল নয় বলে কি হতে পারে না।'
      },
      explanation: {
        en: 'Dictionary keys must be hashable and immutable so their hash codes never change. Lists are mutable and raise TypeError: unhashable type: "list".',
        bn: 'ডিকশনারির কি অবশ্যই অপরিবর্তনীয় ও হ্যাশেবল হতে হয়। লিস্ট মিউটেবল বা পরিবর্তনশীল হওয়ায় এটি কি হিসেবে নিষিদ্ধ।'
      }
    }
  ],
  quiz: {
    id: 'py-mapping-quiz',
    title: { en: 'Python Mappings Quiz', bn: 'পাইথন ম্যাপিং কুইজ' },
    questions: [
      {
        id: 'mqq1',
        kind: 'mcq',
        topic: 'python: Set intersection operator',
        question: {
          en: 'Which operator calculates the intersection of two sets (elements present in both)?',
          bn: 'কোন অপারেটরটি দুটি সেটের ইন্টারসেকশন (উভয়ে থাকা কমন উপাদান) গণনা করে?'
        },
        options: [
          { en: '&', bn: '&' },
          { en: '|', bn: '|' },
          { en: '^', bn: '^' },
          { en: '-', bn: '-' }
        ],
        answer: 0,
        hint: {
          en: 'Think of the bitwise AND operator symbol.',
          bn: 'অ্যান্ড (&) চিহ্নের কথা ভাবুন।'
        },
        explanation: {
          en: 'The & operator calculates the intersection of two sets, returning elements common to both set A and set B.',
          bn: '& অপারেটর দুটি সেটের ইন্টারসেকশন হিসাব করে, যা উভয় সেটের মধ্যে সাধারণ উপাদানগুলোকে বের করে আনে।'
        }
      },
      {
        id: 'mqq2',
        kind: 'mcq',
        topic: 'python: Popitem order',
        question: {
          en: 'In modern Python (3.7+), what order does dict.popitem() follow when removing key-value pairs?',
          bn: 'আধুনিক পাইথনে (৩.৭+) dict.popitem() কোন ক্রমে কি-ভ্যালু জোড়া সরিয়ে নেয়?'
        },
        options: [
          { en: 'LIFO (Last-In, First-Out: it removes the most recently added pair)', bn: 'LIFO (লাস্ট-ইন, ফার্স্ট-আউট: এটি সবচেয়ে শেষে যোগ করা উপাদানটি আগে সরায়)' },
          { en: 'FIFO (First-In, First-Out: it removes the oldest pair)', bn: 'FIFO (ফার্স্ট-ইন, ফার্স্ট-আউট: এটি সবচেয়ে পুরোনো উপাদানটি সরায়)' },
          { en: 'Random selection', bn: 'এলোমেলো নির্বাচন' },
          { en: 'Alphabetical order', bn: 'বর্ণানুক্রমিক নির্বাচন' }
        ],
        answer: 0,
        hint: {
          en: 'It pops the most recent item from the end.',
          bn: 'এটি শেষের দিক থেকে সাম্প্রতিক উপাদানটিকে তুলে নেয়।'
        },
        explanation: {
          en: 'In Python 3.7+, dictionaries guarantee insertion order. popitem() removes and returns items in LIFO order (the last pair added is the first removed).',
          bn: 'পাইথন ৩.৭ থেকে ডিকশনারি উপাদান যোগের ক্রম ধরে রাখে। popitem() মেথড LIFO ক্রমে সবচেয়ে শেষে যোগ করা জোড়াটিকে সরিয়ে ফেলে।'
        }
      },
      {
        id: 'mqq3',
        kind: 'mcq',
        topic: 'python: unhashable dictionary keys',
        question: {
          en: 'Why can a standard Python list NOT be used as a key in a dictionary?',
          bn: 'পাইথনে কেন একটি সাধারণ লিস্টকে ডিকশনারির কি হিসেবে ব্যবহার করা যায় না?'
        },
        options: [
          { en: 'Because lists are mutable and do not have a stable hash value across their lifecycle', bn: 'কারণ লিস্ট পরিবর্তনীয় এবং এর কোনো অপরিবর্তনশীল হ্যাশ মান থাকে না' },
          { en: 'Because dictionary keys cannot hold more than one element', bn: 'কারণ কি-তে একের অধিক উপাদান রাখা নিষেধ' },
          { en: 'Because lists are saved to disk automatically', bn: 'কারণ লিস্ট ডিস্কে সংরক্ষিত থাকে' },
          { en: 'Because Python requires keys to be numbers only', bn: 'কারণ কি শুধু সংখ্যা হতে হয়' }
        ],
        answer: 0,
        hint: {
          en: 'Keys must be immutable and hashable.',
          bn: 'কি অবশ্যই অপরিবর্তনীয় ও হ্যাশেবল হতে হবে।'
        },
        explanation: {
          en: 'Dictionary keys rely on the hash() function to compute table buckets. Mutable types like lists cannot implement a constant hash value.',
          bn: 'ডিকশনারির কি নির্ধারণে হ্যাশ ফাংশন ব্যবহৃত হয়, যা পরিবর্তনশীল লিস্টের ক্ষেত্রে স্থির থাকা অসম্ভব।'
        }
      },
      {
        id: 'mqq4',
        kind: 'mcq',
        topic: 'python: safe dict get access',
        question: {
          en: 'What is the primary operational advantage of using dict.get(key, default) instead of direct indexing dict[key]?',
          bn: 'সরাসরি ইনডেক্সিং dict[key]-এর বদলে dict.get(key, default) ব্যবহারের মূল সুবিধা কী?'
        },
        options: [
          { en: 'It returns the fallback default instead of raising a KeyError when the key does not exist', bn: 'কাঙ্ক্ষিত কি না থাকলে KeyError তোলার পরিবর্তে এটি নিরাপদ ডিফল্ট মান ফেরত দেয়' },
          { en: 'It makes lookup O(log N) instead of O(1)', bn: 'এটি গতি কমিয়ে দেয়' },
          { en: 'It converts the value to integer', bn: 'এটি মানকে ইন্টিজারে রূপান্তর করে' },
          { en: 'It deletes the key after reading', bn: 'পড়ার পর এটি কি মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents KeyError exceptions on missing keys.',
          bn: 'অনুপস্থিত কি-এর ক্ষেত্রে KeyError এরর থেকে রক্ষা করে।'
        },
        explanation: {
          en: 'dict.get() handles missing keys gracefully by returning None or a specified default, avoiding runtime KeyError crashes.',
          bn: 'dict.get() কোনো কি না পেলে ক্র্যাশ করার বদলে নিরাপদ ডিফল্ট মান দেয়।'
        }
      }
    ]
  }
};
