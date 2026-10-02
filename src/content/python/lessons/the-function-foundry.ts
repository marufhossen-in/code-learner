import type { Lesson } from '../../../lib/types';

export const functionFoundryLesson: Lesson = {
  slug: 'the-function-foundry',
  tech: 'python',
  title: {
    en: 'Python Functions, Arguments, Scope & Lambda Expressions',
    bn: 'পাইথন ফাংশন, আর্গুমেন্ট, স্কোপ ও ল্যাম্বডা এক্সপ্রেশন'
  },
  summary: {
    en: 'Master modular code reuse across 10 structured topics, from function definitions to scope hierarchy. Learn *args and **kwargs, keyword-only barriers, LEGB resolution, and lambda expressions.',
    bn: 'ফাংশন গঠন থেকে শুরু করে স্কোপ হায়ারার্কি পর্যন্ত 10 টি বিষয়ে ফাংশনাল প্রোগ্রামিং আয়ত্ত করুন। জানুন *args ও **kwargs, কিওয়ার্ড-অনলি সীমা, LEGB রেজোলিউশন এবং ল্যাম্বডা এক্সপ্রেশন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-class-court',
    title: { en: 'Python Classes, OOP, Inheritance & Polymorphism', bn: 'পাইথন ক্লাস, OOP, ইনহেরিট্যান্স ও পলিমরফিজম' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Function Anatomy: def, Return Values, and Docstrings', bn: '১. ফাংশন গঠন: def, রিটার্ন মান ও ডকস্ট্রিং' } },
    {
      type: 'para',
      text: {
        en: 'A function in Python is defined using the def keyword, followed by the function name, parameters in parentheses, and a colon. Functions return values with the return statement; omitting return causes the function to implicitly return None. Multi-line docstrings ("""...""") document purpose and parameter expectations.',
        bn: 'পাইথনে def কিওয়ার্ড দিয়ে ফাংশন শুরু হয়, তারপর ফাংশনের নাম, ব্র্যাকেটের ভেতরে প্যারামিটার এবং একটি কোলন থাকে। return স্টেটমেন্ট দিয়ে ফলাফল পাঠানো হয়; কিছু না দিলে ফাংশনটি স্বয়ংক্রিয়ভাবে None রিটার্ন করে। ট্রিপল কোট ("""...""") দিয়ে লিখিত ডকস্ট্রিং ফাংশনের কার্যকারিতা ও প্যারামিটার নথিভুক্ত করে।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `def calculate_bmi(weight_kg, height_m):
    """
    Calculate Body Mass Index (BMI).
    Formula: weight (kg) / [height (m)]^2
    """
    if height_m <= 0:
        return None # Guard against division by zero
    
    bmi = weight_kg / (height_m ** 2)
    return round(bmi, 1)

# Function invocation
result = calculate_bmi(70, 1.75)
print("Calculated BMI:", result)
print("Docstring description:", calculate_bmi.__doc__.strip().splitlines()[0])

# Output:
# Calculated BMI: 22.9
# Docstring description: Calculate Body Mass Index (BMI).`,
      caption: {
        en: 'Docstrings provide introspection documentation readable via __doc__ and help().',
        bn: 'ডকস্ট্রিং ফাংশনের তথ্য সংরক্ষণ করে যা __doc__ ও help() দিয়ে সরাসরি পড়া যায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Positional Arguments vs Keyword Arguments', bn: '২. পজিশনাল আর্গুমেন্ট বনাম কিওয়ার্ড আর্গুমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'When invoking functions, Positional Arguments are assigned to parameters based on their order of appearance. Keyword Arguments pass values explicitly by name (param=value), allowing arguments to be provided in any order and dramatically improving code clarity.',
        bn: 'ফাংশন কলের সময় পজিশনাল আর্গুমেন্ট তাদের ক্রম বা অবস্থান অনুযায়ী প্যারামিটারে বসে। আর কিওয়ার্ড আর্গুমেন্ট নাম ধরে (param=value) মান পাঠায়, ফলে আর্গুমেন্টের ক্রম উল্টোপাল্টা হলেও কোনো সমস্যা হয় না এবং কোড পড়া অত্যন্ত সহজ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def create_user_profile(username, email, role):
    return f"User {username} ({email}) assigned role: {role}"

# 1. Positional arguments: Order matters strictly!
pos_call = create_user_profile("farhan", "farhan@dev.com", "Admin")

# 2. Keyword arguments: Order does NOT matter!
kw_call = create_user_profile(role="Editor", username="nadia", email="nadia@dev.com")

print("Positional:", pos_call)
print("Keyword:", kw_call)

# Output:
# Positional: User farhan (farhan@dev.com) assigned role: Admin
# Keyword: User nadia (nadia@dev.com) assigned role: Editor`,
      caption: {
        en: 'Keyword arguments eliminate order dependence, improving readability for functions with multiple inputs.',
        bn: 'কিওয়ার্ড আর্গুমেন্ট ক্রমের বাধ্যবাধকতা দূর করে কোডের স্পষ্টতা বহুগুণ বাড়ায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Default Parameter Values & The Mutable Default Argument Trap', bn: '৩. ডিফল্ট প্যারামিটার ও মিউটেবল ডিফল্ট আর্গুমেন্ট ফাঁদ' } },
    {
      type: 'para',
      text: {
        en: 'Parameters can have default values used when arguments are omitted. Crucially, default parameter expressions evaluate ONCE when the function is defined, NOT on each call. Never use mutable objects (lists, dicts) as default values; always default to None and initialize inside the function.',
        bn: 'প্যারামিটারে ডিফল্ট মান দেওয়া যায় যা আর্গুমেন্ট না পাঠালে কাজ করে। একটি চরম সতর্কবার্তা: ডিফল্ট প্যারামিটার ফাংশন সংজ্ঞায়িত হওয়ার সময় একবারই তৈরি হয়, প্রতি কলে নয়। তাই ডিফল্ট মান হিসেবে কখনোই পরিবর্তনযোগ্য ডেটা (লিস্ট বা ডিকশনারি) দিতে নেই; সর্বদা None দিয়ে ফাংশনের ভেতরে তৈরি করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# ❌ THE DANGEROUS MUTABLE DEFAULT TRAP:
def append_item_bad(item, target_list=[]):
    target_list.append(item)
    return target_list

print(append_item_bad("A")) # ['A']
print(append_item_bad("B")) # ['A', 'B'] (BUG! Target list was shared across calls!)

# ✅ THE PYTHONIC SAFE PATTERN:
def append_item_safe(item, target_list=None):
    if target_list is None:
        target_list = [] # Create fresh list on EVERY invocation
    target_list.append(item)
    return target_list

print(append_item_safe("X")) # ['X']
print(append_item_safe("Y")) # ['Y'] (Clean and isolated!)

# Output:
# ['A']
# ['A', 'B']
# ['X']
# ['Y']`,
      caption: {
        en: 'Always use target_list=None to avoid sharing mutable default objects across function invocations.',
        bn: 'কলগুলোর মধ্যে তালিকা শেয়ারিং বাগ এড়াতে সর্বদা target_list=None প্যাটার্ন ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Arbitrary Positional Arguments: *args', bn: '৪. অনির্দিষ্ট সংখ্যক পজিশনাল আর্গুমেন্ট: *args' } },
    {
      type: 'para',
      text: {
        en: 'Prefixing a parameter with an asterisk (*args) allows a function to accept any number of positional arguments. Inside the function, args is received as an immutable Tuple. This enables flexible functions like mathematical accumulators or log wrappers.',
        bn: 'প্যারামিটারের আগে একটি স্টার দিলে (*args) ফাংশনটি যেকোনো সংখ্যক পজিশনাল আর্গুমেন্ট গ্রহণ করতে পারে। ফাংশনের ভেতরে args একটি অপরিবর্তনীয় Tuple হিসেবে সংরক্ষিত হয়। এটি গাণিতিক যোগফল বা লগার তৈরির জন্য নিখুঁত।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def multiply_all(multiplier, *numbers):
    """Multiply a base multiplier by any quantity of numbers."""
    print("Received numbers tuple:", numbers)
    return [multiplier * n for n in numbers]

# Calling with variable argument counts:
result1 = multiply_all(2, 5, 10)
result2 = multiply_all(10, 1, 2, 3, 4)

print("Result 1:", result1)
print("Result 2:", result2)

# Output:
# Received numbers tuple: (5, 10)
# Received numbers tuple: (1, 2, 3, 4)
# Result 1: [10, 20]
# Result 2: [10, 20, 30, 40]`,
      caption: {
        en: '*args packs variable positional arguments into an iterable tuple.',
        bn: '*args পরিবর্তনশীল সংখ্যক আর্গুমেন্টকে একটি ইটারেবল টাপলে মুড়ে ফেলে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Arbitrary Keyword Arguments: **kwargs', bn: '৫. অনির্দিষ্ট সংখ্যক কিওয়ার্ড আর্গুমেন্ট: **kwargs' } },
    {
      type: 'para',
      text: {
        en: 'Prefixing a parameter with double asterisks (**kwargs) accepts any number of keyword arguments, packing them into a standard Python Dictionary. This is extensively used in frameworks like Django, Flask, and FastAPI to handle dynamic configurations.',
        bn: 'প্যারামিটারের আগে দুটি স্টার দিলে (**kwargs) ফাংশনটি যেকোনো সংখ্যক কিওয়ার্ড আর্গুমেন্ট গ্রহণ করে একটি সাধারণ ডিকশনারিতে সাজিয়ে নেয়। Django, Flask ও FastAPI-এর মতো ফ্রেমওয়ার্কগুলোতে ডায়নামিক কনফিগারেশন পরিচালনার জন্য এটি সর্বত্র ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def build_html_tag(tag_name, content, **attributes):
    # attributes is a true Python Dictionary!
    attrs_str = " ".join(f'{k}="{v}"' for k, v in attributes.items())
    if attrs_str:
        return f"<{tag_name} {attrs_str}>{content}</{tag_name}>"
    return f"<{tag_name}>{content}</{tag_name}>"

# Passing arbitrary keyword parameters
btn_html = build_html_tag(
    "button",
    "Click Me",
    type="submit",
    cls="btn-primary",
    id="checkout-btn"
)

print(btn_html)
# Output:
# <button type="submit" cls="btn-primary" id="checkout-btn">Click Me</button>`,
      caption: {
        en: '**kwargs captures keyword options into a dictionary, enabling dynamic HTML tag builders.',
        bn: '**kwargs কিওয়ার্ড অপশনগুলোকে ডিকশনারিতে ধরে ডায়নামিক ফাংশন তৈরিতে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Enforcing Argument Types: Positional-Only (/) and Keyword-Only (*)', bn: '৬. আর্গুমেন্ট নিয়ন্ত্রণ: পজিশনাল-অনলি (/) ও কিওয়ার্ড-অনলি (*)' } },
    {
      type: 'para',
      text: {
        en: 'Modern Python allows restricting how arguments are passed: parameters BEFORE a forward slash (/) are Positional-Only (cannot be passed by name); parameters AFTER an asterisk (*) are Keyword-Only (must be passed by name). This prevents callers from depending on internal parameter names.',
        bn: 'আধুনিক পাইথনে আর্গুমেন্ট প্রদানের নিয়ম কঠোর করা যায়: ফরওয়ার্ড স্ল্যাশের (/) আগের প্যারামিটারগুলো Positional-Only (নাম ধরে ডাকা যাবে না); আর স্টারের (*) পরের প্যারামিটারগুলো Keyword-Only (বাধ্যতামূলকভাবে নাম ধরে ডাকতে হবে)। এটি লাইব্রেরি ডিজাইনকে অত্যন্ত সুসংগঠিত রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Syntax: def func(pos_only_1, /, standard_arg, *, kw_only_1):
def configure_server(host, port, /, timeout=30, *, secure=True, retry_count=3):
    return f"Connecting to {host}:{port} (secure={secure}, timeout={timeout}s, retries={retry_count})"

# ✅ Valid call: host and port positional; secure and retry_count by keyword
conn = configure_server("api.gateway.com", 443, 60, secure=True, retry_count=5)
print("Config:", conn)

# ❌ Invalid: Passing host as keyword fails:
# configure_server(host="api.com", port=80) # TypeError: host is positional-only!

# ❌ Invalid: Passing secure positionally fails:
# configure_server("api.com", 80, 30, True) # TypeError: secure is keyword-only!

# Output:
# Config: Connecting to api.gateway.com:443 (secure=True, timeout=60s, retries=5)`,
      caption: {
        en: 'The / and * markers enforce strict calling contracts in modern Python APIs.',
        bn: '/ এবং * মার্কার আধুনিক পাইথনে আর্গুমেন্ট কলের কঠোর নিয়ম কার্যকর করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Scope Hierarchy: The LEGB Rule and global vs nonlocal', bn: '৭. স্কোপের নিয়ম: LEGB হায়ারার্কি ও global বনাম nonlocal' } },
    {
      type: 'para',
      text: {
        en: 'Python resolves variable names using the LEGB hierarchy: Local (inside current function), Enclosing (nested outer functions), Global (module level), and Built-in (Python built-ins like len, range). Modifying outer scope variables requires explicit declarations: global for module variables, and nonlocal for enclosing closure variables.',
        bn: 'পাইথনে ভেরিয়েবল খোঁজার জন্য LEGB নিয়ম কাজ করে: Local (বর্তমান ফাংশন), Enclosing (বাইরের প্যারেন্ট ফাংশন), Global (মডিউল স্তর) এবং Built-in (পাইথনের নিজস্ব len, range ইত্যাদি)। বাইরের ভেরিয়েবল পরিবর্তন করতে স্পষ্ট ঘোষণা লাগে: গ্লোবালের জন্য global এবং নেস্টেড ফাংশনের জন্য nonlocal।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `app_version = "v1.0" # Global scope

def outer_counter():
    count = 0 # Enclosing scope
    
    def inner_increment():
        nonlocal count # Rebind enclosing variable
        count += 1
        return count
    
    return inner_increment

counter = outer_counter()
print("Count 1:", counter()) # 1
print("Count 2:", counter()) # 2

def upgrade_version(new_ver):
    global app_version # Rebind global variable
    app_version = new_ver

upgrade_version("v2.5")
print("New Global Version:", app_version)

# Output:
# Count 1: 1
# Count 2: 2
# New Global Version: v2.5`,
      caption: {
        en: 'nonlocal modifies enclosing closure state; global mutates module-level variables.',
        bn: 'nonlocal বাইরের ফাংশনের স্টেট বদলায়; global মডিউল লেভেলের ভেরিয়েবল পরিবর্তন করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Python Lambda Functions: Anonymous One-Line Expressions', bn: '৮. পাইথন ল্যাম্বডা ফাংশন: এক লাইনের বেনামী এক্সপ্রেশন' } },
    {
      type: 'para',
      text: {
        en: 'A lambda function is a small, anonymous function restricted to a single expression. Syntax: lambda arguments: expression. Lambdas cannot contain statements, loops, or multiple lines; they are commonly used as throwaway key functions in sorting and filtering operations.',
        bn: 'ল্যাম্বডা ফাংশন হলো একটি ছোট, নামহীন ফাংশন যা একটিমাত্র এক্সপ্রেশনে সীমাবদ্ধ থাকে: lambda arguments: expression। এতে কোনো স্টেটমেন্ট বা লুপ লেখা যায় না; সাধারণত সর্টিং ও ফিল্টারিংয়ে তাৎক্ষণিক কি (key) ফাংশন হিসেবে এদের ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Standard lambda syntax: lambda a, b: a + b
multiply = lambda a, b: a * b
print("Lambda multiply:", multiply(6, 7)) # 42

# Real-world usage: Sorting complex dictionaries by nested key
inventory = [
    {"name": "Monitor", "price": 300},
    {"name": "Mouse", "price": 25},
    {"name": "Keyboard", "price": 85}
]

# Sort by price ascending
sorted_by_price = sorted(inventory, key=lambda item: item["price"])
print("Cheapest item:", sorted_by_price[0]["name"])

# Output:
# Lambda multiply: 42
# Cheapest item: Mouse`,
      caption: {
        en: 'Lambda functions provide lightweight inline callbacks for sorting and filtering.',
        bn: 'ল্যাম্বডা ফাংশন সর্টিং ও ফিল্টারিংয়ের জন্য হালকা ইনলাইন কলব্যাক প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Built-in Functional Utilities: map(), filter(), zip(), and enumerate()', bn: '৯. বিল্ট-ইন ফাংশনাল ইউটিলিটি: map(), filter(), zip() ও enumerate()' } },
    {
      type: 'para',
      text: {
        en: 'Python includes powerful iterator utilities: map(func, iter) transforms items lazily; filter(func, iter) retains items where func returns True; zip(iter1, iter2) pairs elements together until the shortest sequence ends. And enumerate(iterable) produces (index, item) pairs cleanly.',
        bn: 'পাইথনে শক্তিশালী ইটারেটর ইউটিলিটি রয়েছে: map() প্রতিটি উপাদান রূপান্তর করে; filter() শর্ত মেনে চলা উপাদানগুলো রাখে; zip() একাধিক সিকোয়েন্সের উপাদানগুলোকে পাশাপাশি জোড়া বানায়; আর enumerate() কোনো কাউন্টার ভেরিয়েবল ছাড়াই (index, item) জোড়া প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `names = ["Alice", "Bob", "Charlie"]
scores = [95, 88, 92]

# 1. zip: Combine two sequences into tuples
paired = list(zip(names, scores))
print("Zipped pairs:", paired)

# 2. enumerate: Index and value together
for idx, name in enumerate(names, start=1):
    print(f"Rank {idx}: {name}")

# 3. map and filter lazy processing
temps_c = [0, 20, 30, 40]
temps_f = list(map(lambda c: (c * 9/5) + 32, temps_c))
print("Fahrenheit:", temps_f)

# Output:
# Zipped pairs: [('Alice', 95), ('Bob', 88), ('Charlie', 92)]
# Rank 1: Alice
# Rank 2: Bob
# Rank 3: Charlie
# Fahrenheit: [32.0, 68.0, 86.0, 104.0]`,
      caption: {
        en: 'zip() pairs sequences; enumerate() generates zero-index numbers without manual counters.',
        bn: 'zip() সিকোয়েন্স জোড়া বানায়; enumerate() ম্যানুয়াল কাউন্টার ছাড়াই ইনডেক্স তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Recursive Functions: Call Stack and Base Cases', bn: '১০. রিকার্সিভ ফাংশন: কল স্ট্যাক ও বেস কেস' } },
    {
      type: 'para',
      text: {
        en: 'A recursive function solves a problem by calling itself with smaller sub-problems. Every valid recursive function MUST contain a Base Case that terminates recursion without further calls. Missing base cases cause recursion depth limits to be exceeded, raising RecursionError (default max depth: 1000).',
        bn: 'একটি রিকার্সিভ ফাংশন কোনো সমস্যা সমাধানের জন্য নিজেকেই বারবার ছোট আকারে কল করে। প্রতিটি সঠিক রিকার্সিভ ফাংশনে অবশ্যই একটি Base Case থাকতে হয় যা রিকার্শন থামিয়ে দেয়। বেস কেস না থাকলে বা ভুল হলে কল স্ট্যাক পূর্ণ হয়ে RecursionError ঘটে (ডিফল্ট সর্বোচ্চ সীমা: ১০০০)।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def calculate_factorial(n):
    # 1. Base case: Terminate recursion when n reaches 1 or 0
    if n <= 1:
        return 1
    
    # 2. Recursive step: n * factorial(n - 1)
    return n * calculate_factorial(n - 1)

print("Factorial of 5 (5!):", calculate_factorial(5)) # 5 * 4 * 3 * 2 * 1 = 120
print("Factorial of 3 (3!):", calculate_factorial(3)) # 6

# Output:
# Factorial of 5 (5!): 120
# Factorial of 3 (3!): 6`,
      caption: {
        en: 'Base cases prevent infinite recursion, resolving call stacks cleanly back to the caller.',
        bn: 'বেস কেস অনন্ত রিকার্শন বন্ধ করে কল স্ট্যাককে নিরাপদে মূল কলারের কাছে ফিরিয়ে আনে।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-func-ex1',
      kind: 'predict',
      topic: 'python: Default mutable argument trap',
      question: {
        en: 'If def add_x(val, arr=[]): arr.append(val); return arr is called twice as add_x(1) then add_x(2), what does the second call return?',
        bn: 'def add_x(val, arr=[]): arr.append(val); return arr ফাংশনটিকে পরপর add_x(1) ও add_x(2) কল করলে দ্বিতীয় কলের রিটার্ন মান কী হবে?'
      },
      code: `/* Python mutable default argument evaluation */
/* add_x(1); print(add_x(2)) */`,
      answer: '[1, 2]',
      accept: ['[1, 2]', '[1,2]', '1, 2'],
      hint: {
        en: 'Default list arguments are evaluated once at definition time and shared across calls.',
        bn: 'ডিফল্ট লিস্ট আর্গুমেন্ট একবার তৈরি হয়ে সব কলের মধ্যে শেয়ার হয়।'
      },
      explanation: {
        en: 'Because default parameter expressions are evaluated once at function definition time, the same list instance is reused across invocations, producing [1, 2].',
        bn: 'ডিফল্ট প্যারামিটার ফাংশন সংজ্ঞায়িত হওয়ার সময় একবারই তৈরি হয়, ফলে একই লিস্ট সব কলের মাঝে শেয়ার হয়ে [1, 2] তৈরি করে।'
      }
    },
    {
      id: 'py-func-ex2',
      kind: 'mcq',
      topic: 'python: Keyword-only argument marker',
      question: {
        en: 'In def func(a, *, b): pass, how must argument b be passed by the caller?',
        bn: 'def func(a, *, b): pass ফাংশনে b আর্গুমেন্টটি কীভাবে পাঠাতে হয়?'
      },
      options: [
        { en: 'It must be passed as a keyword argument (e.g. b=10)', bn: 'বাধ্যতামূলকভাবে কিওয়ার্ড আর্গুমেন্ট হিসেবে পাঠাতে হয় (যেমন b=10)' },
        { en: 'It must be passed positionally', bn: 'পজিশনাল হিসেবে পাঠাতে হয়' },
        { en: 'It is optional', bn: 'এটি ঐচ্ছিক' },
        { en: 'It must be a pointer', bn: 'পয়েন্টার হতে হয়' }
      ],
      answer: 0,
      hint: {
        en: 'The asterisk (*) marks the start of keyword-only arguments.',
        bn: 'স্টার চিহ্নটি (*) কিওয়ার্ড-অনলি আর্গুমেন্টের সীমা নির্দেশ করে।'
      },
      explanation: {
        en: 'An asterisk (*) in a parameter list indicates that all subsequent parameters can only be passed using keyword syntax (name=value).',
        bn: 'প্যারামিটার তালিকায় থাকা স্টার (*) নির্দেশ করে যে এর পরের সব আর্গুমেন্ট শুধুমাত্র নাম ধরে (name=value) পাঠাতে হবে।'
      }
    },
    {
      id: 'py-func-ex3',
      kind: 'mcq',
      topic: 'python: Scope LEGB order',
      question: {
        en: 'In what order does Python resolve variable names according to the LEGB rule?',
        bn: 'LEGB নিয়ম অনুযায়ী পাইথন কোন ক্রমে ভেরিয়েবলের নাম অনুসন্ধান করে?'
      },
      options: [
        { en: 'Local, Enclosing, Global, Built-in', bn: 'Local, Enclosing, Global, Built-in স্কোপ' },
        { en: 'Global, Local, Enclosing, Built-in', bn: 'Global, Local, Enclosing, Built-in স্কোপ' },
        { en: 'Built-in, Global, Local, Enclosing', bn: 'Built-in, Global, Local, Enclosing স্কোপ' },
        { en: 'Lexical, Error, Garbage, Binary', bn: 'Lexical, Error, Garbage, Binary স্কোপ' }
      ],
      answer: 0,
      hint: {
        en: 'LEGB stands for Local, Enclosing, Global, Built-in.',
        bn: 'LEGB মানে Local, Enclosing, Global, Built-in।'
      },
      explanation: {
        en: 'Python searches scopes from the inside out: Local (current function), Enclosing (outer nesting), Global (module level), and Built-in (standard library built-ins).',
        bn: 'পাইথন ভেতর থেকে বাইরের দিকে ভেরিয়েবল খোঁজে: প্রথমে Local, তারপর Enclosing, এরপর Global এবং সবশেষে Built-in।'
      }
    }
  ],
  quiz: {
    id: 'py-functions-quiz',
    title: { en: 'Python Functions Quiz', bn: 'পাইথন ফাংশন কুইজ' },
    questions: [
      {
        id: 'fqq1',
        kind: 'mcq',
        topic: 'python: Args return type',
        question: {
          en: 'What data type is *args inside a function body?',
          bn: 'ফাংশনের ভেতরে *args কোন ডেটা টাইপ হিসেবে থাকে?'
        },
        options: [
          { en: 'tuple', bn: 'tuple' },
          { en: 'list', bn: 'list' },
          { en: 'dict', bn: 'dict' },
          { en: 'set', bn: 'set' }
        ],
        answer: 0,
        hint: {
          en: 'It is an immutable sequence.',
          bn: 'এটি একটি অপরিবর্তনীয় সিকোয়েন্স।'
        },
        explanation: {
          en: '*args gathers variable positional arguments into an immutable Tuple instance, whereas **kwargs packs into a dict.',
          bn: '*args পজিশনাল আর্গুমেন্টগুলোকে একটি অপরিবর্তনীয় Tuple-এ মোড়ায়, আর **kwargs ডিকশনারিতে মোড়ায়।'
        }
      },
      {
        id: 'fqq2',
        kind: 'mcq',
        topic: 'python: Nonlocal keyword purpose',
        question: {
          en: 'What is the purpose of the nonlocal keyword in Python?',
          bn: 'পাইথনে nonlocal কিওয়ার্ড ব্যবহারের উদ্দেশ্য কী?'
        },
        options: [
          { en: 'To rebind a variable in an outer enclosing (nested) function scope without modifying global scope', bn: 'গ্লোবাল স্কোপ স্পর্শ না করে বাইরের প্যারেন্ট (নেস্টেড) ফাংশনের ভেরিয়েবলকে পরিবর্তন করার জন্য' },
          { en: 'To declare a global variable', bn: 'গ্লোবাল ভেরিয়েবল ঘোষণা করতে' },
          { en: 'To delete a local variable', bn: 'লোকাল ভেরিয়েবল মুছে ফেলতে' },
          { en: 'To import external modules', bn: 'মডিউল ইমপোর্ট করতে' }
        ],
        answer: 0,
        hint: {
          en: 'It bridges nested closures.',
          bn: 'এটি নেস্টেড ক্লোজারের ভেরিয়েবলকে যুক্ত করে।'
        },
        explanation: {
          en: 'The nonlocal statement causes identifiers to refer to previously bound variables in the nearest enclosing function scope, excluding globals.',
          bn: 'nonlocal স্টেটমেন্ট ভেতরের ফাংশন থেকে তার নিকটতম বাইরের প্যারেন্ট ফাংশনের ভেরিয়েবলকে পরিবর্তন করার অনুমতি দেয়।'
        }
      },
      {
        id: 'fqq3',
        kind: 'mcq',
        topic: 'python: function default return value',
        question: {
          en: 'What is the default return value of a Python function that terminates without executing a return statement?',
          bn: 'পাইথনে কোনো ফাংশন কোনো return স্টেটমেন্ট ছাড়া সম্পন্ন হলে এটি ডিফল্ট হিসেবে কী রিটার্ন করে?'
        },
        options: [
          { en: 'None', bn: 'None অবজেক্ট' },
          { en: '0', bn: '0' },
          { en: 'False', bn: 'False' },
          { en: 'An empty string ""', bn: 'একটি খালি স্ট্রিং ""' }
        ],
        answer: 0,
        hint: {
          en: 'Python functions implicitly return None.',
          bn: 'পাইথন ফাংশন নিজে থেকেই None ফেরত দেয়।'
        },
        explanation: {
          en: 'If execution reaches the end of a function body without a return statement, Python implicitly returns the None singleton.',
          bn: 'কোনো ফাংশনে স্পষ্ট return স্টেটমেন্ট না থাকলে পাইথন স্বয়ংক্রিয়ভাবে None রিটার্ন করে।'
        }
      },
      {
        id: 'fqq4',
        kind: 'mcq',
        topic: 'python: positional only marker slash',
        question: {
          en: 'In a Python function signature (e.g. def fn(x, y, /, z): pass), what does the forward slash (/) denote?',
          bn: 'পাইথন ফাংশন স্বাক্ষরে (যেমন def fn(x, y, /, z): pass) ফরওয়ার্ড স্ল্যাশ (/) কী অর্থ বহন করে?'
        },
        options: [
          { en: 'Parameters before the slash are strictly positional-only and cannot be passed by keyword name', bn: 'স্ল্যাশের আগের প্যারামিটারগুলো কেবল পজিশনাল হিসেবে পাঠাতে হবে এবং নাম ধরে পাঠানো যাবে না' },
          { en: 'Parameters after the slash are ignored', bn: 'স্ল্যাশের পরের প্যারামিটার অগ্রাহ্য হয়' },
          { en: 'It performs floating-point division', bn: 'এটি ভাগ প্রক্রিয়া সম্পন্ন করে' },
          { en: 'It marks an asynchronous task', bn: 'এটি অ্যাসিনক্রোনাস কাজ নির্দেশ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Positional-only parameter boundary marker.',
          bn: 'পজিশনাল-অনলি প্যারামিটারের সীমারেখা।'
        },
        explanation: {
          en: 'PEP 570 introduced the forward slash (/) to enforce positional-only arguments for all parameters placed before it.',
          bn: 'PEP 570 প্রস্তাবনায় ফরওয়ার্ড স্ল্যাশের (/) আগের সব প্যারামিটার কলারকে কেবল পজিশন অনুযায়ী পাঠাতে বাধ্য করা হয়।'
        }
      }
    ]
  }
};
