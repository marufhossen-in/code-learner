import type { Lesson } from '../../../lib/types';

export const sequenceMillLesson: Lesson = {
  slug: 'the-sequence-mill',
  tech: 'python',
  title: {
    en: 'Python Lists, Slicing, Sequence Protocols & Unpacking',
    bn: 'পাইথন লিস্ট, স্লাইসিং, সিকোয়েন্স প্রোটোকল ও আনপ্যাকিং'
  },
  summary: {
    en: 'Master sequential data structures across 10 structured topics, from sequence protocols to list comprehensions. Learn slicing geometry, sorting with custom keys, star unpacking, and memory copying.',
    bn: 'সিকোয়েন্স প্রোটোকল থেকে শুরু করে লিস্ট কমপ্রিহেনশন পর্যন্ত 10 টি বিষয়ে পাইথন সিকোয়েন্স আয়ত্ত করুন। জানুন স্লাইসিং নিয়ম, কাস্টম কি দিয়ে সর্টিং, স্টার আনপ্যাকিং এবং মেমরি কপি করার কৌশল।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'python-tuples-sets',
    title: {
      en: 'Tuples and Sets: Access, Update, Loop, Join & Methods',
      bn: 'টাপল ও সেট: অ্যাক্সেস, আপডেট, লুপ, সংযোগ ও মেথড'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Python Sequences Overview: Lists, Tuples, Strings, and Ranges', bn: '১. পাইথন সিকোয়েন্সের ধারণা: লিস্ট, টাপল, স্ট্রিং ও রেঞ্জ' } },
    {
      type: 'para',
      text: {
        en: 'A sequence in Python is an ordered collection of items accessible via zero-based indexing. Lists are mutable and dynamic; tuples are immutable; strings are character sequences; and ranges generate integer sequences on demand. All sequences share universal operations: len(s), s[i], s[start:stop], in, and iteration with for.',
        bn: 'পাইথনে সিকোয়েন্স হলো শূন্য থেকে শুরু হওয়া ইনডেক্সযুক্ত ক্রমবিন্যস্ত ডেটার সংকলন। লিস্ট হলো পরিবর্তনযোগ্য (mutable) ও ডায়নামিক; টাপল অপরিবর্তনীয় (immutable); স্ট্রিং হলো অক্ষরের সিকোয়েন্স; এবং রেঞ্জ মেমোরি নষ্ট না করে প্রয়োজনে সংখ্যা তৈরি করে। সব সিকোয়েন্সে len(s), s[i], s[start:stop], in এবং for লুপ একইভাবে চলে।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Sequence types in Python
languages = ["Python", "JavaScript", "Go"] # List (mutable)
coordinates = (23.8103, 90.4125)            # Tuple (immutable)
brand = "CodeShikhon"                       # String (immutable)
step_range = range(1, 4)                    # Range (lazy generator)

print("List length:", len(languages))
print("First item:", languages[0])
print("Last item:", brand[-1])
print("Range items:", list(step_range))

# Output:
# List length: 3
# First item: Python
# Last item: n
# Range items: [1, 2, 3]`,
      caption: {
        en: 'All Python sequences adhere to common indexing, length, and iteration interfaces.',
        bn: 'পাইথনের সকল সিকোয়েন্স ইনডেক্সিং, দৈর্ঘ্য এবং ইটারেশনের সার্বজনীন নিয়ম মেনে চলে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. List Operations: Indexing, Negative Indices, and Mutability', bn: '২. লিস্ট অপারেশন: ইনডেক্সিং, নেগেটিভ ইনডেক্স ও পরিবর্তনযোগ্যতা' } },
    {
      type: 'para',
      text: {
        en: 'Python lists are mutable arrays that can hold mixed data types. Elements are accessed by index starting at 0. Negative indices count backwards from the end (-1 is the last item). Because lists are mutable, items can be reassigned in place without creating a new list.',
        bn: 'পাইথন লিস্ট হলো পরিবর্তনযোগ্য অ্যারে যা যেকোনো ধরনের ডেটা একসাথে রাখতে পারে। প্রথম উপাদানের ইনডেক্স ০ এবং শেষ উপাদানের ইনডেক্স -১। লিস্ট পরিবর্তনযোগ্য হওয়ায় নতুন লিস্ট তৈরি না করেই সরাসরি ইনডেক্স ধরে যেকোনো উপাদানের মান বদলে দেওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `scores = [85, 92, 78, 96, 88]

print("First score:", scores[0])   # 85
print("Final score:", scores[-1])  # 88
print("Second last:", scores[-2])  # 96

# Direct in-place mutation
scores[2] = 82 # Replace 78 with 82
print("Updated scores:", scores)

# Output:
# First score: 85
# Final score: 88
# Second last: 96
# Updated scores: [85, 92, 82, 96, 88]`,
      caption: {
        en: 'Negative indices access items from the right; direct assignment modifies lists in place.',
        bn: 'নেগেটিভ ইনডেক্স ডানদিক থেকে উপাদান পড়ে; সরাসরি অ্যাসাইনমেন্ট লিস্টের মান বদলে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Adding Elements: append(), insert(), and extend()', bn: '৩. উপাদান যোগ করা: append(), insert() ও extend()' } },
    {
      type: 'para',
      text: {
        en: 'Python provides three distinct methods to add elements: append(item) adds a single element to the end at O(1) cost; insert(index, item) inserts an element at a specific index, shifting subsequent items at O(n) cost. Extend(iterable) unpacks and appends all elements from another iterable.',
        bn: 'পাইথনে লিস্টে উপাদান যোগ করার ৩টি পদ্ধতি রয়েছে: append(item) শেষে একটি একক উপাদান যোগ করে (O(1)); insert(index, item) নির্দিষ্ট ইনডেক্সে উপাদান ঢোকায় এবং বাকিদের ডানে ঠেলে দেয় (O(n)). আর extend(iterable) অন্য একটি সিকোয়েন্সের সব উপাদানকে খুলে শেষে যোগ করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `tasks = ["Design", "Code"]

# 1. append: Add single element to end
tasks.append("Test")
print("After append:", tasks) # ['Design', 'Code', 'Test']

# 2. insert: Add element at specific index position
tasks.insert(1, "Review")
print("After insert at 1:", tasks) # ['Design', 'Review', 'Code', 'Test']

# 3. extend: Unpack and concatenate another list
tasks.extend(["Deploy", "Monitor"])
print("After extend:", tasks)

# Output:
# After append: ['Design', 'Code', 'Test']
# After insert at 1: ['Design', 'Review', 'Code', 'Test']
# After extend: ['Design', 'Review', 'Code', 'Test', 'Deploy', 'Monitor']`,
      caption: {
        en: 'append adds single items; extend unpacks collections; insert positions at exact indices.',
        bn: 'append একটি উপাদান যোগ করে; extend পুরো তালিকা যোগ করে; insert নির্দিষ্ট স্থানে বসায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Removing Elements: remove(), pop(), clear(), and del', bn: '৪. উপাদান মোছা: remove(), pop(), clear() ও del' } },
    {
      type: 'para',
      text: {
        en: 'Items can be removed by value or index: remove(val) finds and deletes the FIRST occurrence of a value (raises ValueError if missing); pop(index) removes and returns the item at index (default: last item). Del list[i] deletes by index or slice. And clear() empties the entire list.',
        bn: 'মান বা ইনডেক্স ধরে উপাদান মুছে ফেলা যায়: remove(val) প্রথম যে স্থানে মানটি মেলে তা মুছে দেয় (না পেলে ValueError দেয়); pop(index) নির্দিষ্ট ইনডেক্সের উপাদান মুছে ফেরত দেয় (ডিফল্ট: শেষটি). Del list[i] ইনডেক্স বা স্লাইস মুছে ফেলে. আর clear() পুরো লিস্ট খালি করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `queue = ["Alice", "Bob", "Charlie", "David", "Bob"]

# 1. remove: Deletes the FIRST occurrence of the value
queue.remove("Bob")
print("After remove('Bob'):", queue) # ['Alice', 'Charlie', 'David', 'Bob']

# 2. pop: Removes and returns the item (default: last item)
finished_task = queue.pop()
print("Popped item:", finished_task) # 'Bob'
print("After pop():", queue)         # ['Alice', 'Charlie', 'David']

# 3. del statement: Delete item at index 1
del queue[1]
print("After del queue[1]:", queue) # ['Alice', 'David']

# 4. clear: Empty list
queue.clear()
print("After clear():", queue) # []

# Output:
# After remove('Bob'): ['Alice', 'Charlie', 'David', 'Bob']
# Popped item: Bob
# After pop(): ['Alice', 'Charlie', 'David']
# After del queue[1]: ['Alice', 'David']
# After clear(): []`,
      caption: {
        en: 'remove targets values; pop and del target specific indices.',
        bn: 'remove মান দেখে মুছে ফেলে; pop ও del নির্দিষ্ট ইনডেক্স ধরে মুছে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Slicing Geometry: [start:stop:step] and Reversal', bn: '৫. স্লাইসিং নিয়ম: [start:stop:step] ও রিভার্সাল' } },
    {
      type: 'para',
      text: {
        en: 'Slicing extracts a subset of a sequence with list[start:stop:step]. start is inclusive, stop is non-inclusive, and step controls stride length. If omitted, start defaults to 0, stop to len, and step to 1. A negative step strides backward, enabling instant list reversal with [::-1]. Slicing never throws an IndexError on out-of-bounds indices.',
        bn: 'স্লাইসিং list[start:stop:step] সিনট্যাক্স দিয়ে সিকোয়েন্সের একটি অংশ কেটে নেয়। start অন্তর্ভুক্ত থাকে কিন্তু stop অন্তর্ভুক্ত হয় না, আর step নির্ধারণ করে কত ঘর পর পর উপাদান নেওয়া হবে। বাদ দিলে start ডিফল্ট 0 এবং step হয় 1। নেগেটিভ step দিলে পেছনের দিকে গণনা করে, ফলে [::-1] দিয়ে সাথে সাথে পুরো লিস্ট উল্টে ফেলা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `nums = [0, 10, 20, 30, 40, 50, 60, 70, 80, 90]

# Sub-slice from index 2 up to index 6
print("nums[2:6]:", nums[2:6]) # [20, 30, 40, 50]

# Stride by 2 (Every second item)
print("nums[::2]:", nums[::2]) # [0, 20, 40, 60, 80]

# Out of bounds clamping (Never crashes!)
print("nums[8:99]:", nums[8:99]) # [80, 90]

# Reversing sequence with negative step
reversed_nums = nums[::-1]
print("nums[::-1]:", reversed_nums)

# Output:
# nums[2:6]: [20, 30, 40, 50]
# nums[::2]: [0, 20, 40, 60, 80]
# nums[8:99]: [80, 90]
# nums[::-1]: [90, 80, 70, 60, 50, 40, 30, 20, 10, 0]`,
      caption: {
        en: 'Slicing clamps automatically to sequence boundaries without throwing errors.',
        bn: 'স্লাইসিং সীমার বাইরে গেলেও কোনো এরর না দিয়ে স্বয়ংক্রিয়ভাবে মান সমন্বয় করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. List Comprehensions: Expressive Sequence Construction', bn: '৬. লিস্ট কমপ্রিহেনশন: এক লাইনে নতুন লিস্ট নির্মাণ' } },
    {
      type: 'para',
      text: {
        en: 'List comprehensions provide a concise, readable syntax for creating new lists by applying expressions and filters over existing iterables. The syntax is [expression for item in iterable if condition]. They are faster than traditional for loops with append() because the loop bytecode executes in C.',
        bn: 'লিস্ট কমপ্রিহেনশন কোনো বিদ্যমান সিকোয়েন্সের ওপর শর্ত ও এক্সপ্রেশন প্রয়োগ করে এক লাইনে নতুন লিস্ট তৈরির পরিচ্ছন্ন সিনট্যাক্স প্রদান করে: [expression for item in iterable if condition]। এটি সাধারণ for লুপ ও append()-এর চেয়ে দ্রুতগতির কারণ এর লুপিং কোড সরাসরি C লেভেলে চলে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Standard mathematical transformation: squares of even numbers
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# [expression for item in iterable if condition]
even_squares = [n ** 2 for n in numbers if n % 2 == 0]
print("Even squares:", even_squares)

# String normalization comprehension
raw_cities = ["  Dhaka ", "CHITTAGONG", " sylhet "]
clean_cities = [c.strip().title() for c in raw_cities]
print("Clean cities:", clean_cities)

# Output:
# Even squares: [4, 16, 36, 64, 100]
# Clean cities: ['Dhaka', 'Chittagong', 'Sylhet']`,
      caption: {
        en: 'List comprehensions combine mapping and filtering into a single, high-performance line.',
        bn: 'লিস্ট কমপ্রিহেনশন রূপান্তর ও ফিল্টারিং এক লাইনে সম্পন্ন করে উচ্চ পারফরম্যান্স দেয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Searching and Counting: in, index(), and count()', bn: '৭. অনুসন্ধান ও গণনা: in, index() ও count()' } },
    {
      type: 'para',
      text: {
        en: 'The in operator tests membership returning True or False at O(n) complexity. list.index(val) returns the zero-based index of the first occurrence of val, raising a ValueError if the item does not exist. list.count(val) returns the total number of times val appears.',
        bn: 'in অপারেটর কোনো উপাদান লিস্টে আছে কি না তা পরীক্ষা করে True বা False দেয়। list.index(val) কোনো মানের প্রথম প্রাপ্ত ইনডেক্স নম্বর প্রদান করে (উপাদান না থাকলে ValueError দেয়)। list.count(val) উপাদানটি মোট কতবার উপস্থিত রয়েছে তার সংখ্যা জানায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `fruits = ["apple", "banana", "cherry", "banana", "apple", "banana"]

# 1. Membership test with 'in'
has_apple = "apple" in fruits
print("Has apple:", has_apple) # True

# 2. Count frequency
banana_count = fruits.count("banana")
print("Banana count:", banana_count) # 3

# 3. Locate index safely
if "cherry" in fruits:
    pos = fruits.index("cherry")
    print("Cherry position:", pos) # 2

# Output:
# Has apple: True
# Banana count: 3
# Cherry position: 2`,
      caption: {
        en: 'Always verify membership with "in" before invoking index() to prevent ValueError crashes.',
        bn: 'index() কল করার আগে "in" দিয়ে উপাদান আছে কি না যাচাই করা ক্র্যাশ প্রতিরোধ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Sorting Lists: sort() vs sorted() and Custom Keys', bn: '৮. লিস্ট সর্টিং: sort() বনাম sorted() ও কাস্টম কি' } },
    {
      type: 'para',
      text: {
        en: 'list.sort() MUTATES the original list in place and returns None. The built-in sorted(iterable) leaves the original data unchanged and returns a NEW sorted list. Both accept reverse=True and a custom key function (e.g. key=len or key=lambda x: x["age"]).',
        bn: 'list.sort() সরাসরি মূল লিস্টকে সাজিয়ে ফেলে এবং None রিটার্ন করে। আর বিল্ট-ইন sorted(iterable) মূল ডেটা অক্ষত রেখে একটি নতুন সাজানো লিস্ট ফেরত দেয়। উভয় ফাংশনেই reverse=True এবং কাস্টম key ফাংশন (যেমন key=len) ব্যবহার করে ইচ্ছামতো সর্ট করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `words = ["elephant", "cat", "dog", "hippopotamus", "bear"]

# 1. sorted(): Non-mutating function returning a new list
alphabetical = sorted(words)
print("Alphabetical new list:", alphabetical)
print("Original unchanged:", words)

# 2. Custom key sorting: Sort by string length
by_length = sorted(words, key=len)
print("Sorted by word length:", by_length)

# 3. in-place sort() with reverse=True
numbers = [42, 10, 88, 3, 25]
numbers.sort(reverse=True)
print("Mutated descending numbers:", numbers)

# Output:
# Alphabetical new list: ['bear', 'cat', 'dog', 'elephant', 'hippopotamus']
# Original unchanged: ['elephant', 'cat', 'dog', 'hippopotamus', 'bear']
# Sorted by word length: ['cat', 'dog', 'bear', 'elephant', 'hippopotamus']
# Mutated descending numbers: [88, 42, 25, 10, 3]`,
      caption: {
        en: 'sorted() returns a new list; sort() modifies the list in place; key= customizes sorting logic.',
        bn: 'sorted() নতুন লিস্ট দেয়; sort() মূল লিস্টকে বদলায়; key= দিয়ে সর্টিং লজিক ঠিক করা হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Sequence Unpacking and the Extended Star (*) Operator', bn: '৯. সিকোয়েন্স আনপ্যাকিং ও স্টার (*) অপারেটর' } },
    {
      type: 'para',
      text: {
        en: 'Python supports sequence unpacking, assigning sequence elements to individual variables in one statement. The number of variables must match sequence length unless using the extended star (*) operator, which gathers remaining unassigned elements into a list.',
        bn: 'পাইথনে এক লাইনে সিকোয়েন্সের উপাদানগুলোকে আলাদা আলাদা ভেরিয়েবলে ভাগ করে দেওয়াকে আনপ্যাকিং বলে। ভেরিয়েবলের সংখ্যা উপাদানের সংখ্যার সমান হতে হয়, তবে স্টার (*) অপারেটর ব্যবহার করলে অবশিষ্ট যেকোনো সংখ্যক উপাদান স্বয়ংক্রিয়ভাবে একটি লিস্টে জমা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# 1. Exact shape unpacking
point = (10, 20)
x, y = point
print(f"Coordinates: x={x}, y={y}")

# 2. Idiomatic two-variable swap (Zero temporary variable!)
a = 1
b = 2
a, b = b, a # Swaps values simultaneously!
print(f"Swapped: a={a}, b={b}")

# 3. Extended star unpacking: First, Middle list, Last
log_entry = ["2026-09-26", "ERROR", "AuthGateway", "Connection reset by peer", "ip=10.0.0.1"]
timestamp, level, *details, origin = log_entry

print("Timestamp:", timestamp)
print("Level:", level)
print("Details list:", details)
print("Origin IP:", origin)

# Output:
# Coordinates: x=10, y=20
# Swapped: a=2, b=1
# Timestamp: 2026-09-26
# Level: ERROR
# Details list: ['AuthGateway', 'Connection reset by peer']
# Origin IP: ip=10.0.0.1`,
      caption: {
        en: 'The star operator (*) unpacks arbitrary remaining elements into a sub-list.',
        bn: 'স্টার অপারেটর (*) অবশিষ্ট উপাদানগুলোকে সুন্দরভাবে একটি সাব-লিস্টে সংগ্রহ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Shallow vs Deep Copying: Avoiding Shared Mutation Traps', bn: '১০. শ্যালো বনাম ডিপ কপি: শেয়ার্ড মিউটেশন ফাঁদ পরিহার' } },
    {
      type: 'para',
      text: {
        en: 'Assigning a list with list_b = list_a simply aliases the same object in memory. A shallow copy using list.copy() or slice syntax duplicates only the outer container. In contrast, copy.deepcopy() traverses the entire data graph to clone every inner element independently.',
        bn: 'list_b = list_a অ্যাসাইন করলে কোনো কপি তৈরি হয় না, বরং একই অবজেক্টের ওপর আরেকটি নাম বসে। list.copy() বা স্লাইস ব্যবহারের মাধ্যমে শ্যালো কপি করলে কেবল বাইরের পাত্রটি আলাদা হয়। আর পুরোপুরি স্বাধীন ক্লোন তৈরি করতে চাইলে copy.deepcopy() ব্যবহার করতে হয়, যা ভেতরের প্রতিটি উপাদানকে আলাদাভাবে প্রতিলিপি করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `import copy

# ❌ The Reference Trap
original = [1, [2, 3]]
alias = original
alias[0] = 999
print("Original mutated via alias:", original) # [999, [2, 3]]

# ⚠️ Shallow Copy: Outer list is cloned, but inner list is shared!
shallow = original.copy()
shallow[0] = 1 # Only shallow changes
shallow[1].append(4) # MUTATES original too because [2, 3] is shared!
print("Original affected by shallow mutation:", original) # [999, [2, 3, 4]]

# ✅ Deep Copy: Complete recursive isolation
deep = copy.deepcopy(original)
deep[1].append(999)
print("Original safe from deep copy change:", original) # [999, [2, 3, 4]]
print("Deep copy isolated:", deep)                     # [999, [2, 3, 4, 999]]

# Output:
# Original mutated via alias: [999, [2, 3]]
# Original affected by shallow mutation: [999, [2, 3, 4]]
# Original safe from deep copy change: [999, [2, 3, 4]]
# Deep copy isolated: [999, [2, 3, 4, 999]]`,
      caption: {
        en: 'copy.deepcopy() isolates nested data structures completely from cross-mutation bugs.',
        bn: 'copy.deepcopy() নেস্টেড ডেটা স্ট্রাকচারকে সম্পূর্ণরূপে বিচ্ছিন্ন করে বাগ প্রতিরোধ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-seq-ex1',
      kind: 'predict',
      topic: 'python: List reverse slice',
      question: {
        en: 'What is returned by evaluating [10, 20, 30][::-1] in Python?',
        bn: 'পাইথনে [10, 20, 30][::-1] রান করলে কী আউটপুট আসে?'
      },
      code: `/* Python reverse slice */
/* print([10, 20, 30][::-1]) */`,
      answer: '[30, 20, 10]',
      accept: ['[30, 20, 10]', '[30,20,10]', '30, 20, 10'],
      hint: {
        en: 'A step of -1 strides backward through the entire sequence.',
        bn: '-১ স্টেপ পুরো সিকোয়েন্সের শেষ থেকে শুরুর দিকে উল্টো পদক্ষেপে চলে।'
      },
      explanation: {
        en: 'The slice [::-1] omits start and stop, taking the entire sequence with a step of -1, producing a reversed copy: [30, 20, 10].',
        bn: '[::-1] স্লাইসিংয়ে start ও stop বাদ রেখে -১ স্টেপ দেওয়ায় পুরো লিস্টটি উল্টোভাবে নতুন কপি হয়ে [30, 20, 10] প্রদান করে।'
      }
    },
    {
      id: 'py-seq-ex2',
      kind: 'mcq',
      topic: 'python: Append vs Extend',
      question: {
        en: 'What does a list become if you call a.append([1, 2]) on a = [0]?',
        bn: 'a = [0]-এর ওপর a.append([1, 2]) কল করলে লিস্টটি কেমন রূপ ধারণ করবে?'
      },
      options: [
        { en: '[0, [1, 2]] (the entire sub-list is appended as a single nested element)', bn: '[0, [1, 2]] (পুরো সাব-লিস্টটি একটি একক নেস্টেড উপাদান হিসেবে যুক্ত হয়)' },
        { en: '[0, 1, 2]', bn: '[0, 1, 2]' },
        { en: '[1, 2]', bn: '[1, 2]' },
        { en: 'TypeError', bn: 'TypeError' }
      ],
      answer: 0,
      hint: {
        en: 'append adds the argument as one single object; extend flattens.',
        bn: 'append পুরো আর্গুমেন্টকে একটিমাত্র অবজেক্ট হিসেবে নেয়; extend ভেতর থেকে খুলে যোগ করে।'
      },
      explanation: {
        en: 'append() always adds its argument as a single element. To unpack and add items individually, use a.extend([1, 2]) which would produce [0, 1, 2].',
        bn: 'append() আর্গুমেন্টকে হুবহু একটি উপাদান হিসেবে যোগ করে। উপাদানগুলোকে আলাদাভাবে যোগ করতে a.extend([1, 2]) ব্যবহার করা হয়, যা [0, 1, 2] তৈরি করত।'
      }
    },
    {
      id: 'py-seq-ex3',
      kind: 'mcq',
      topic: 'python: Sort return value',
      question: {
        en: 'What is the return value of invoking my_list.sort() in Python?',
        bn: 'পাইথনে my_list.sort() মেথড কল করলে রিটার্ন ভ্যালু কী পাওয়া যায়?'
      },
      options: [
        { en: 'None (it sorts the list in place and returns nothing)', bn: 'None (এটি সরাসরি মূল লিস্ট সাজায় এবং কিছু রিটার্ন করে না)' },
        { en: 'A new sorted list', bn: 'একটি নতুন সাজানো লিস্ট' },
        { en: 'The length of the list', bn: 'লিস্টের দৈর্ঘ্য' },
        { en: 'True', bn: 'True' }
      ],
      answer: 0,
      hint: {
        en: 'In-place mutating methods in Python return None by design.',
        bn: 'পাইথনে যে মেথডগুলো সরাসরি অবজেক্টকে পরিবর্তন করে তারা নিয়ম অনুযায়ী None রিটার্ন করে।'
      },
      explanation: {
        en: 'list.sort() mutates the list in place and returns None to prevent developers from accidentally losing the list reference. To get a new sorted list, use sorted(my_list).',
        bn: 'list.sort() মূল লিস্টের ভেতরে পরিবর্তন করে এবং None রিটার্ন করে। নতুন সাজানো লিস্ট পেতে চাইলে sorted(my_list) ব্যবহার করতে হয়।'
      }
    }
  ],
  quiz: {
    id: 'py-sequences-quiz',
    title: { en: 'Python Sequences Quiz', bn: 'পাইথন সিকোয়েন্স কুইজ' },
    questions: [
      {
        id: 'sqq1',
        kind: 'mcq',
        topic: 'python: Slicing out of bounds',
        question: {
          en: 'What happens when you slice past the length of a list (e.g. [1, 2][0:100])?',
          bn: 'লিস্টের দৈর্ঘ্যের চেয়ে বড় স্লাইস নিলে (যেমন [1, 2][0:100]) কী ঘটে?'
        },
        options: [
          { en: 'It clamps safely to the available elements, returning [1, 2] without error', bn: 'এটি কোনো এরর ছাড়াই বিদ্যমান উপাদানগুলোতে সীমাবদ্ধ থেকে [1, 2] প্রদান করে' },
          { en: 'It throws an IndexError', bn: 'এটি IndexError ছুড়ে দেয়' },
          { en: 'It pads the list with None values', bn: 'এটি বাকি অংশে None বসিয়ে দেয়' },
          { en: 'It returns an empty list', bn: 'এটি খালি লিস্ট দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Slicing clamps gracefully, unlike direct index lookups.',
          bn: 'সরাসরি ইনডেক্স খোঁজার মতো নয়, স্লাইসিং কোনো এরর না দিয়ে নিরাপদ সীমানায় আটকে থাকে।'
        },
        explanation: {
          en: 'While direct indexing (list[100]) raises an IndexError, slicing syntax gracefully clamps indices to the actual bounds of the sequence.',
          bn: 'সরাসরি list[100] লিখলে IndexError হলেও স্লাইসিং [0:100] স্বয়ংক্রিয়ভাবে যতটুকু ডেটা আছে ততটুকু নিয়ে [1, 2] ফেরত দেয়।'
        }
      },
      {
        id: 'sqq2',
        kind: 'mcq',
        topic: 'python: List comprehension advantage',
        question: {
          en: 'Why are list comprehensions generally faster than for loops with list.append()?',
          bn: 'সাধারণ for লুপে list.append() ব্যবহারের চেয়ে লিস্ট কমপ্রিহেনশন কেন দ্রুতগতির হয়?'
        },
        options: [
          { en: 'Comprehensions execute their looping bytecode inside the optimized C engine, avoiding repeated attribute lookups', bn: 'কমপ্রিহেনশনের লুপিং বাইটকোড অপ্টিমাইজড C ইঞ্জিনে চলে এবং বারবার মেথড খোঁজার ঝামেলা এড়ায়' },
          { en: 'Comprehensions use multiple CPU cores', bn: 'কমপ্রিহেনশন একাধিক CPU কোর ব্যবহার করে' },
          { en: 'Comprehensions run asynchronously', bn: 'কমপ্রিহেনশন অ্যাসিনক্রোনাসভাবে চলে' },
          { en: 'Comprehensions convert Python to JavaScript', bn: 'কমপ্রিহেনশন পাইথনকে জাভাস্ক্রিপ্টে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'The CPython interpreter optimizes comprehension bytecode at the C layer.',
          bn: 'CPython ইন্টারপ্রেটার C লেভেলে কমপ্রিহেনশন অপ্টিমাইজ করে।'
        },
        explanation: {
          en: 'List comprehensions avoid the overhead of repeated attribute lookups (list.append) and function call stack frames on every iteration, running tightly optimized C bytecode.',
          bn: 'লিস্ট কমপ্রিহেনশনে প্রতি ধাপে বারবার .append খোঁজার প্রয়োজন হয় না, ফলে এটি দ্রুততম সময়ে সরাসরি মেমোরিতে ফলাফল সাজায়।'
        }
      },
      {
        id: 'sqq3',
        kind: 'mcq',
        topic: 'python: extended star unpacking',
        question: {
          en: 'What does the extended star unpacking syntax (first, *middle, last = [1, 2, 3, 4, 5]) assign to middle?',
          bn: 'এক্সটেন্ডেড স্টার আনপ্যাকিং সিনট্যাক্স (first, *middle, last = [1, 2, 3, 4, 5]) middle ভ্যারিয়েবলে কী মান প্রদান করে?'
        },
        options: [
          { en: 'A list containing [2, 3, 4]', bn: 'একটি লিস্ট যা [2, 3, 4] ধারণ করে' },
          { en: 'A tuple (2, 3, 4)', bn: 'একটি টাপল (2, 3, 4)' },
          { en: 'A single integer 2', bn: 'একটি একক সংখ্যা 2' },
          { en: 'An IndexError', bn: 'একটি IndexError' }
        ],
        answer: 0,
        hint: {
          en: 'Star captures remaining elements as a list.',
          bn: 'স্টার অপারেটর বাকি উপাদানগুলোকে লিস্ট হিসেবে জমা করে।'
        },
        explanation: {
          en: 'In Python extended sequence unpacking, a starred target always gathers the intermediate elements into a standard list.',
          bn: 'পাইথনে স্টার চিহ্নের ভ্যারিয়েবল সবসময় মধ্যবর্তী উপাদানগুলোকে একটি সাধারণ লিস্টে আবদ্ধ করে।'
        }
      },
      {
        id: 'sqq4',
        kind: 'mcq',
        topic: 'python: list sort vs sorted',
        question: {
          en: 'What is the primary difference between list.sort() and the built-in sorted(list)?',
          bn: 'list.sort() এবং বিল্ট-ইন sorted(list)-এর মধ্যে মূল পার্থক্য কী?'
        },
        options: [
          { en: 'list.sort() mutates the list in place and returns None; sorted() returns a new sorted list without modifying the original', bn: 'list.sort() মূল লিস্টকে সরাসরি সাজায় এবং None দেয়; sorted() মূল লিস্ট অক্ষুণ্ণ রেখে নতুন লিস্ট দেয়' },
          { en: 'list.sort() works only on numbers', bn: 'list.sort() শুধুমাত্র সংখ্যায় কাজ করে' },
          { en: 'sorted() is 100x slower', bn: 'sorted() ১০০ গুণ ধীরগতির' },
          { en: 'They are completely identical aliases', bn: 'এদের মাঝে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'In-place mutation vs returning a fresh list.',
          bn: 'ভেতরে সরাসরি পরিবর্তন বনাম নতুন লিস্ট রিটার্ন।'
        },
        explanation: {
          en: 'list.sort() reorganizes items in-place (mutating), whereas sorted() leaves the source untouched and creates a newly ordered sequence.',
          bn: 'list.sort() মেমরির সেই একই লিস্ট পরিবর্তন করে, আর sorted() আসল লিস্ট অপরিবর্তিত রেখে নতুন লিস্ট তৈরি করে।'
        }
      }
    ]
  }
};
