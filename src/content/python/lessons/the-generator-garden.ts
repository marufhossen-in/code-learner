import type { Lesson } from '../../../lib/types';

export const generatorGardenLesson: Lesson = {
  slug: 'the-generator-garden',
  tech: 'python',
  title: {
    en: 'Python Iterators, Generators, Yield & Memory Optimization',
    bn: 'পাইথন ইটারেটর, জেনারেটর, yield ও মেমোরি অপ্টিমাইজেশন'
  },
  summary: {
    en: 'Master lazy evaluation and stream processing across 10 structured topics, from the iterator protocol to yield. Learn custom class iterators, generator expressions, constant-memory stream pipelines, and two-way send() communication.',
    bn: 'ইটারেটর প্রোটোকল থেকে শুরু করে yield পর্যন্ত 10 টি বিষয়ে লেজি ইভালুয়েশন ও স্ট্রিম প্রসেসিং আয়ত্ত করুন। জানুন কাস্টম ক্লাস ইটারেটর, জেনারেটর এক্সপ্রেশন, মেমরি-সাশ্রয়ী স্ট্রিম পাইপলাইন এবং দ্বিমুখী send() যোগাযোগ।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-error-court',
    title: { en: 'Python Exception Handling: Try, Except, Else & Finally', bn: 'পাইথন এক্সেপশন হ্যান্ডলিং: try, except, else ও finally' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Python Iterator Protocol: iter(), next(), and StopIteration', bn: '১. পাইথন ইটারেটর প্রোটোকল: iter(), next() ও StopIteration' } },
    {
      type: 'para',
      text: {
        en: 'The Iterator Protocol consists of two methods: __iter__() returns the iterator object itself, and __next__() yields the next value in the sequence. When no further items remain, __next__() must raise a StopIteration exception. Under the hood, Python for loops automatically invoke iter() and catch StopIteration to terminate cleanly.',
        bn: 'ইটারেটর প্রোটোকল দুটি মেথড নিয়ে গঠিত: __iter__() ইটারেটর অবজেক্টটিকে ফেরত দেয়, আর __next__() সিকোয়েন্সের পরবর্তী মানটি তুলে আনে। কোনো উপাদান অবশিষ্ট না থাকলে __next__() বাধ্যতামূলকভাবে StopIteration এক্সেপশন ছুড়ে দেয়। পাইথনের for লুপ ভেতরে ভেতরে iter() চালায় এবং StopIteration ধরে নিয়ে লুপটি সুন্দরভাবে সমাপ্ত করে।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `fruits = ["Apple", "Banana", "Cherry"]

# 1. Obtain an iterator from the iterable list
fruit_iterator = iter(fruits)

# 2. Advance the iterator manually with next()
print("Item 1:", next(fruit_iterator)) # "Apple"
print("Item 2:", next(fruit_iterator)) # "Banana"
print("Item 3:", next(fruit_iterator)) # "Cherry"

# 3. Exhausted iterator raises StopIteration:
try:
    next(fruit_iterator)
except StopIteration:
    print("Iteration boundary reached cleanly via StopIteration!")

# Output:
# Item 1: Apple
# Item 2: Banana
# Item 3: Cherry
# Iteration boundary reached cleanly via StopIteration!`,
      caption: {
        en: 'for loops wrap next() and gracefully terminate upon catching StopIteration.',
        bn: 'for লুপ ভেতরে ভেতরে next() চালায় এবং StopIteration পেয়ে থেমে যায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Building Custom Class Iterators: __iter__() and __next__()', bn: '২. কাস্টম ক্লাস ইটারেটর তৈরি: __iter__() ও __next__()' } },
    {
      type: 'para',
      text: {
        en: 'Any custom class can be turned into an iterable sequence by implementing __iter__() (which returns self) and __next__() (which increments an internal counter and raises StopIteration when complete). This allows custom data structures to integrate seamlessly with for loops.',
        bn: 'যেকোনো কাস্টম ক্লাসে __iter__() (যা self রিটার্ন করে) এবং __next__() (যা ইন্টারনাল কাউন্টার বাড়ায় এবং শেষ হলে StopIteration দেয়) মেথড দুটি লিখে দিলে ক্লাসটি সরাসরি for লুপের সাথে মানানসই একটি ইটারেবলে পরিণত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class CountDown:
    def __init__(self, start_number):
        self.current = start_number
    
    def __iter__(self):
        return self # The iterator object itself
    
    def __next__(self):
        if self.current <= 0:
            raise StopIteration # Signal completion to caller
        val = self.current
        self.current -= 1
        return val

# Custom iterator consumed seamlessly by a standard for loop:
for num in CountDown(3):
    print("Blastoff in:", num)

# Output:
# Blastoff in: 3
# Blastoff in: 2
# Blastoff in: 1`,
      caption: {
        en: 'Custom classes implementing __iter__ and __next__ behave as first-class iterables.',
        bn: '__iter__ এবং __next__ যুক্ত কাস্টম ক্লাস স্বাভাবিকভাবে for লুপে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Generator Functions and the yield Keyword', bn: '৩. জেনারেটর ফাংশন ও yield কিওয়ার্ড' } },
    {
      type: 'para',
      text: {
        en: 'A Generator Function is defined like a regular function, but uses the yield keyword instead of return. When called, it does NOT execute immediately; instead, it returns a Generator Object. Each call to next() resumes execution from where it last paused, preserving all local variable state between yields.',
        bn: 'একটি জেনারেটর ফাংশন সাধারণ ফাংশনের মতোই লেখা হয়, তবে এতে return-এর বদলে yield কিওয়ার্ড ব্যবহৃত হয়। এটি কল করলে সাথে সাথে পুরো কোড চলে না, বরং একটি জেনারেটর অবজেক্ট রিটার্ন করে। প্রতিবার next() ডাকলে কোড ঠিক যে লাইনে থেমেছিল সেখান থেকে চলা শুরু করে এবং লোকাল ভেরিয়েবলের মান ঠিক রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def sequence_generator():
    print("-> Phase 1 starting")
    yield 100
    print("-> Phase 2 starting")
    yield 200
    print("-> Phase 3 starting")
    yield 300
    print("-> All phases done")

# Obtain the generator object
gen = sequence_generator()
print("Generator instance:", gen)

# Step-by-step resumption
print("Received:", next(gen)) # Runs to yield 100
print("Received:", next(gen)) # Resumes to yield 200

# Output:
# Generator instance: <generator object sequence_generator at 0x...>
# -> Phase 1 starting
# Received: 100
# -> Phase 2 starting
# Received: 200`,
      caption: {
        en: 'yield pauses function execution, freezing stack variables until the next value is requested.',
        bn: 'yield ফাংশন স্থগিত রাখে এবং পরবর্তী মানের অনুরোধ না আসা পর্যন্ত ভেরিয়েবল ফ্রিজ করে রাখে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Generator Expressions: Memory-Efficient Lazy Comprehensions', bn: '৪. জেনারেটর এক্সপ্রেশন: মেমোরি-সাশ্রয়ী লেজি কমপ্রিহেনশন' } },
    {
      type: 'para',
      text: {
        en: 'Generator expressions use parentheses (x for x in iterable) instead of brackets. While a list comprehension [x for x in iterable] computes and stores all elements in RAM simultaneously, a generator expression produces elements lazily on demand, using negligible memory.',
        bn: 'জেনারেটর এক্সপ্রেশন ব্র্যাকেটের বদলে প্যারেন্থেসিস (x for x in iterable) ব্যবহার করে। লিস্ট কমপ্রিহেনশন যেখানে সব উপাদান হিসাব করে একসাথে র্যামে (RAM) জমা করে, জেনারেটর এক্সপ্রেশন সেখানে কোনো মেমোরি নষ্ট না করে প্রয়োজনে একেকটি উপাদান তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `import sys

# 1. List Comprehension: Pre-calculates 100,000 items in RAM
list_comp = [n * 2 for n in range(100000)]

# 2. Generator Expression: Pre-calculates NOTHING; produces on demand
gen_expr = (n * 2 for n in range(100000))

print("List RAM footprint (bytes):", sys.getsizeof(list_comp)) # ~800,000 bytes!
print("Generator RAM footprint (bytes):", sys.getsizeof(gen_expr)) # ~200 bytes!

# Consuming items from the generator expression lazily
print("First generated item:", next(gen_expr))
print("Second generated item:", next(gen_expr))

# Output:
# List RAM footprint (bytes): 800984
# Generator RAM footprint (bytes): 200
# First generated item: 0
# Second generated item: 2`,
      caption: {
        en: 'Generator expressions require trivial constant memory (~200 bytes) regardless of collection size.',
        bn: 'জেনারেটর এক্সপ্রেশন কোটি কোটি উপাদানের ক্ষেত্রেও মাত্র ২০০ বাইটের মতো মেমোরি খরচ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Memory Optimization: Processing Gigabyte Files in O(1) Memory', bn: '5. মেমোরি অপ্টিমাইজেশন: O(1) মেমোরিতে বিশাল ফাইল প্রসেসিং' } },
    {
      type: 'para',
      text: {
        en: 'Loading a 10 GB log file into memory with file.readlines() crashes server RAM with an OutOfMemory error. Using a generator that yields one line at a time processes files of arbitrary size with constant O(1) memory overhead, since only one line lives in RAM at any given moment.',
        bn: '10 গিগাবাইটের একটি লগ ফাইল file.readlines() দিয়ে পড়তে গেলে সার্ভারের র্যাম শেষ হয়ে ক্র্যাশ করবে। কিন্তু জেনারেটরের সাহায্যে প্রতি লাইনে yield ব্যবহার করলে ফাইলের আকার যতই বড় হোক না কেন, মেমোরিতে প্রতি মুহূর্তে মাত্র 1 টি লাইন থাকায় ধ্রুবক O(1) মেমোরিতে কাজ সম্পন্ন হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def simulated_log_reader(log_lines):
    """Simulates reading an infinite server log line-by-line."""
    for line in log_lines:
        # Yields exactly one line into memory at a time
        yield line.strip()

raw_logs = [
    "2026-09-26 12:00:01 INFO Server boot",
    "2026-09-26 12:00:02 ERROR DB connection timeout",
    "2026-09-26 12:00:03 INFO Retry successful"
]

log_stream = simulated_log_reader(raw_logs)

# Process stream: Filter error events without holding the whole dataset in RAM
for log_entry in log_stream:
    if "ERROR" in log_entry:
        print("ALERT DETECTED:", log_entry)

# Output:
# ALERT DETECTED: 2026-09-26 12:00:02 ERROR DB connection timeout`,
      caption: {
        en: 'Line-by-line generator streaming enables processing files larger than total physical RAM.',
        bn: 'লাইন ধরে জেনারেটর স্ট্রিমিং ফিজিক্যাল র্যামের চেয়ে বড় ফাইলকেও সহজে প্রসেস করতে পারে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Chaining and Pipelining Generators', bn: '৬. জেনারেটর পাইপলাইনিং: একাধিক ফিল্টার একত্র করা' } },
    {
      type: 'para',
      text: {
        en: 'Generators can be chained together like Unix shell pipes (|). One generator filters raw inputs, passing items directly to a second transformation generator, which feeds an aggregation consumer. Data flows item-by-item through the pipeline without intermediate buffer arrays.',
        bn: 'জেনারেটরগুলোকে ইউনিক্স শেল পাইপের (|) মতো একের পর এক চেইনিং করা যায়। প্রথম জেনারেটর ডেটা ফিল্টার করে সরাসরি দ্বিতীয় জেনারেটরে পাঠায়, যা কোনো বাফার অ্যারে ছাড়াই প্রতিটি উপাদানকে একের পর এক রূপান্তর করে চূড়ান্ত ফলাফলে পৌঁছে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Stage 1: Source generator producing raw integers
def generate_integers(n):
    for i in range(1, n + 1):
        yield i

# Stage 2: Filter generator selecting only even numbers
def filter_evens(numbers):
    for num in numbers:
        if num % 2 == 0:
            yield num

# Stage 3: Transformation generator squaring values
def square_numbers(numbers):
    for num in numbers:
        yield num ** 2

# Assemble the streaming pipeline (No intermediate lists allocated!)
source = generate_integers(6)         # 1, 2, 3, 4, 5, 6
evens = filter_evens(source)          # 2, 4, 6
squared_evens = square_numbers(evens) # 4, 16, 36

# Consume the pipeline
print("Pipeline results:", list(squared_evens))

# Output:
# Pipeline results: [4, 16, 36]`,
      caption: {
        en: 'Composing generator stages streams data item-by-item without intermediate list allocations.',
        bn: 'জেনারেটর পাইপলাইন কোনো বাড়তি লিস্ট তৈরি না করেই ধাপে ধাপে ডেটা প্রক্রিয়া করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Two-Way Communication: Generator send() and close()', bn: '৭. দ্বিমুখী যোগাযোগ: জেনারেটরের send() ও close()' } },
    {
      type: 'para',
      text: {
        en: 'Generators are not just data producers; they can receive data via gen.send(value). When send(val) is called, the current yield expression evaluates to that value. The gen.close() method raises a GeneratorExit inside the generator, stopping further execution cleanly.',
        bn: 'জেনারেটর কেবল ডেটা পাঠায়ই না, বরং gen.send(value)-এর মাধ্যমে ডেটা গ্রহণও করতে পারে। send(val) কল করলে বর্তমান yield এক্সপ্রেশনের মানটি সেই ইনপুটে রূপ নেয়। আর gen.close() জেনারেটরের ভেতরে GeneratorExit এক্সেপশন পাঠিয়ে কাজ সমাপ্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def running_average():
    total = 0.0
    count = 0
    average = None
    
    while True:
        # yield returns current average AND receives incoming new value from caller!
        val = yield average
        if val is None:
            break
        total += val
        count += 1
        average = total / count

avg_calculator = running_average()
# Prime the generator to the first yield point:
next(avg_calculator) # Returns None

# Send values dynamically into the generator:
print("Avg after 10:", avg_calculator.send(10)) # 10.0
print("Avg after 20:", avg_calculator.send(20)) # 15.0
print("Avg after 30:", avg_calculator.send(30)) # 20.0

avg_calculator.close() # Clean up

# Output:
# Avg after 10: 10.0
# Avg after 20: 15.0
# Avg after 30: 20.0`,
      caption: {
        en: 'gen.send() injects values into the active yield expression, enabling stateful coroutines.',
        bn: 'gen.send() সক্রিয় yield-এ নতুন মান পাঠিয়ে স্টেটফুল করুটিন তৈরি করতে দেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Infinite Sequence Generation', bn: '৮. ইনফিনিট সিকোয়েন্স তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Because generators compute values strictly on demand, they can model infinite mathematical sequences (such as the Fibonacci sequence or auto-incrementing ID sequences) without freezing the computer or running out of memory.',
        bn: 'যেহেতু জেনারেটর কেবল চাওয়ার পরেই মান তৈরি করে, তাই এটি কম্পিউটার হ্যাং বা মেমোরি শেষ না করেই অসীম গাণিতিক ধারা (যেমন ফিবোনাচ্চি বা অটো-ইনক্রিমেন্ট আইডি) অনায়াসে পরিচালনা করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def infinite_fibonacci():
    """Generates an infinite sequence of Fibonacci numbers."""
    a, b = 0, 1
    while True:
        yield a
        a, b = b, a + b

fib_stream = infinite_fibonacci()

# Take only the first 7 Fibonacci numbers from the infinite generator:
first_seven_fibs = [next(fib_stream) for _ in range(7)]
print("First 7 Fibonacci numbers:", first_seven_fibs)

# Output:
# First 7 Fibonacci numbers: [0, 1, 1, 2, 3, 5, 8]`,
      caption: {
        en: 'Infinite while True loops are safe inside generators because execution pauses at every yield.',
        bn: 'জেনারেটরের ভেতরে while True নিরাপদ কারণ প্রতি yield-এ কোড থেমে পরবর্তী আদেশের অপেক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Itertools Module Highlights: chain, islice, and cycle', bn: '৯. Itertools মডিউল: chain, islice ও cycle' } },
    {
      type: 'para',
      text: {
        en: 'The standard itertools module provides battle-tested iterator tools: itertools.chain(*iterables) seamlessly links multiple iterables into one continuous stream; itertools.islice(iter, start, stop) slices iterators without indexing; and itertools.cycle(iter) repeats a sequence infinitely.',
        bn: 'পাইথনের বিল্ট-ইন itertools মডিউল অত্যন্ত শক্তিশালী ইটারেটর টুল সরবরাহ করে: itertools.chain() একাধিক সিকোয়েন্সকে একটি অবিচ্ছিন্ন স্ট্রিমে যুক্ত করে; itertools.islice() সাধারণ স্লাইসিং সাপোর্ট না করা ইটারেটর থেকে নির্দিষ্ট অংশ কেটে নেয়। আর itertools.cycle() কোনো সিকোয়েন্সকে চক্রাকারে বারবার চালায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `import itertools

# 1. itertools.chain: Concatenate multiple collections lazily
alpha = ["A", "B"]
num = [1, 2]
combined_stream = itertools.chain(alpha, num)
print("Chained list:", list(combined_stream)) # ['A', 'B', 1, 2]

# 2. itertools.islice: Slice an infinite generator
counter = itertools.count(start=10, step=5) # 10, 15, 20, 25, 30...
first_three = list(itertools.islice(counter, 3))
print("Sliced counter:", first_three) # [10, 15, 20]

# Output:
# Chained list: ['A', 'B', 1, 2]
# Sliced counter: [10, 15, 20]`,
      caption: {
        en: 'itertools provides high-performance C-implemented tools for iterator composition.',
        bn: 'itertools মডিউল C লেভেলে অপ্টিমাইজড ইটারেটর সমন্বয় টুল সরবরাহ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Generators vs Lists: The One-Time Consumption Rule', bn: '১০. জেনারেটর বনাম লিস্ট: একবার ব্যবহারের নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'The primary difference between a list and a generator is reusability: lists can be iterated over repeatedly; generators are Exhausted after a single pass. Once an iterator raises StopIteration, attempting to iterate over it again returns zero items. To reuse generated data, convert it to a list with list(gen).',
        bn: 'লিস্ট ও জেনারেটরের মূল পার্থক্য হলো পুনর্ব্যবহারযোগ্যতা: একটি লিস্ট বারবার লুপে চালানো যায়; কিন্তু একটি জেনারেটর একবার শেষ হয়ে গেলে খালি হয়ে যায় (Exhausted)। একবার StopIteration দিলে দ্বিতীয়বার লুপ চালালে কোনো উপাদান পাওয়া যায় না। ডেটা পুনরায় ব্যবহার করতে চাইলে list(gen) দিয়ে লিস্টে রূপান্তর করতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def number_generator():
    yield 1
    yield 2
    yield 3

gen = number_generator()

# Pass 1: Consumes all items
pass_1 = list(gen)
print("Pass 1 items:", pass_1) # [1, 2, 3]

# Pass 2: Generator is already exhausted!
pass_2 = list(gen)
print("Pass 2 items (exhausted):", pass_2) # [] (Empty!)

# Output:
# Pass 1 items: [1, 2, 3]
# Pass 2 items (exhausted): []`,
      caption: {
        en: 'Generators exhaust upon reaching StopIteration and cannot be re-iterated without re-invoking.',
        bn: 'জেনারেটর একবার শেষ হয়ে গেলে পুনরায় নতুন করে কল না করা পর্যন্ত তা খালি থাকে।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-gen-ex1',
      kind: 'predict',
      topic: 'python: Generator exhaustion',
      question: {
        en: 'If g = (x for x in [1, 2]), what does list(g) return if called a second time after already consuming it once?',
        bn: 'g = (x for x in [1, 2]) জেনারেটরটিকে একবার ব্যবহারের পর দ্বিতীয়বার list(g) কল করলে কী পাওয়া যায়?'
      },
      code: `/* Python generator exhaustion */
/* g = (x for x in [1, 2]); list(g); print(list(g)) */`,
      answer: '[]',
      accept: ['[]', 'empty list'],
      hint: {
        en: 'Generators are single-use streams that exhaust upon completion.',
        bn: 'জেনারেটর একবার ব্যবহারেই নিঃশেষ হয়ে যায়।'
      },
      explanation: {
        en: 'Generators maintain internal state and are one-time-use iterables. Once all elements have been yielded, any subsequent attempts to iterate yield zero items, producing an empty list [].',
        bn: 'জেনারেটর কেবল একবারই ডেটা সরবরাহ করে। সবগুলো উপাদান শেষ হয়ে যাওয়ার পর পুনরায় কল করলে এটি খালি লিস্ট [] প্রদান করে।'
      }
    },
    {
      id: 'py-gen-ex2',
      kind: 'mcq',
      topic: 'python: Yield vs Return',
      question: {
        en: 'What is the key functional difference between yield and return in a Python function?',
        bn: 'পাইথন ফাংশনে yield এবং return-এর মধ্যে প্রধান কার্যকর পার্থক্য কী?'
      },
      options: [
        { en: 'yield pauses execution and preserves local variable state, while return terminates the function permanently', bn: 'yield কোড চলা সাময়িক থামিয়ে লোকাল ভেরিয়েবল সংরক্ষণ করে, আর return ফাংশনটি স্থায়ীভাবে বন্ধ করে দেয়' },
        { en: 'yield is only used for strings', bn: 'yield শুধু স্ট্রিংয়ে ব্যবহৃত হয়' },
        { en: 'return produces a generator object', bn: 'return একটি জেনারেটর বানায়' },
        { en: 'There is no difference', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'One pauses and resumes; the other exits completely.',
        bn: 'একটি থামে এবং আবার চলতে পারে; অন্যটি সম্পূর্ণ সমাপ্ত করে।'
      },
      explanation: {
        en: 'yield freezes the execution frame of the function and retains all local state until the caller requests the next item. return exits the function and destroys the call frame.',
        bn: 'yield ফাংশনের এক্সিকিউশন ফ্রেমকে ফ্রিজ করে রাখে যাতে পরে আবার চালানো যায়। আর return ফাংশন থেকে সম্পূর্ণ বের হয়ে কল ফ্রেম মুছে ফেলে।'
      }
    },
    {
      id: 'py-gen-ex3',
      kind: 'mcq',
      topic: 'python: Generator memory complexity',
      question: {
        en: 'What is the memory complexity of streaming a 500GB file through a Python line generator?',
        bn: 'একটি পাইথন লাইন জেনারেটরের মাধ্যমে ৫০০ গিগাবাইট ফাইল স্ট্রিম করার মেমোরি জটিলতা কত?'
      },
      options: [
        { en: 'O(1) constant memory (only one line lives in RAM at any moment)', bn: 'O(1) ধ্রুবক মেমোরি (যেকোনো মুহূর্তে র্যামে কেবল একটি লাইন থাকে)' },
        { en: 'O(n) where n is 500GB of RAM', bn: 'O(n) যেখানে ৫০০ গিগাবাইট র্যাম লাগে' },
        { en: 'O(n^2)', bn: 'O(n^2)' },
        { en: 'O(log n)', bn: 'O(log n)' }
      ],
      answer: 0,
      hint: {
        en: 'Generators process items lazily one at a time.',
        bn: 'জেনারেটর অলসভাবে একবারে একটি উপাদান নিয়ে কাজ করে।'
      },
      explanation: {
        en: 'Because generators yield items lazily on demand without buffering the dataset, only the currently yielded item resides in memory, achieving O(1) constant memory usage.',
        bn: 'যেহেতু জেনারেটর পুরো ডেটাসেট বাফার না করে একেকটি লাইন তৈরি করে, তাই মেমোরিতে প্রতি মুহূর্তে শুধু একটি লাইন থাকে এবং O(1) মেমোরি খরচ হয়।'
      }
    }
  ],
  quiz: {
    id: 'py-generators-quiz',
    title: { en: 'Python Generators & Iterators Quiz', bn: 'পাইথন জেনারেটর ও ইটারেটর কুইজ' },
    questions: [
      {
        id: 'gqq1',
        kind: 'mcq',
        topic: 'python: StopIteration exception',
        question: {
          en: 'What exception signals to a for loop that an iterator has reached the end of its sequence?',
          bn: 'কোন এক্সেপশনটি for লুপকে জানিয়ে দেয় যে ইটারেটরের সব উপাদান শেষ হয়ে গেছে?'
        },
        options: [
          { en: 'StopIteration', bn: 'StopIteration এক্সেপশন' },
          { en: 'IndexError', bn: 'IndexError এক্সেপশন' },
          { en: 'EndOfFileError', bn: 'EndOfFileError এক্সেপশন' },
          { en: 'KeyError', bn: 'KeyError এক্সেপশন' }
        ],
        answer: 0,
        hint: {
          en: 'It stops the iteration.',
          bn: 'এটি ইটারেশন থামিয়ে দেয়।'
        },
        explanation: {
          en: 'The Python Iterator Protocol specifies that when __next__() has no more values, it must raise StopIteration, which for loops catch automatically to terminate cleanly.',
          bn: 'পাইথন ইটারেটর নিয়ম অনুসারে উপাদান শেষ হলে __next__() মেথড StopIteration ছুড়ে দেয়, যা for লুপ নিজে নিজেই ধরে নিয়ে সুন্দরভাবে লুপ শেষ করে।'
        }
      },
      {
        id: 'gqq2',
        kind: 'mcq',
        topic: 'python: Generator expression syntax',
        question: {
          en: 'How do you syntactically define a generator expression in Python?',
          bn: 'পাইথনে জেনারেটর এক্সপ্রেশন লেখার সঠিক সিনট্যাক্স কোনটি?'
        },
        options: [
          { en: 'Using parentheses: (x * 2 for x in items)', bn: 'প্যারেন্থেসিস ব্যবহার করে: (x * 2 for x in items)' },
          { en: 'Using square brackets: [x * 2 for x in items]', bn: 'স্কয়ার ব্র্যাকেট ব্যবহার করে: [x * 2 for x in items]' },
          { en: 'Using curly braces: {x * 2 for x in items}', bn: 'কার্লি ব্র্যাকেট ব্যবহার করে: {x * 2 for x in items}' },
          { en: 'Using angle brackets: <x * 2 for x in items>', bn: 'অ্যাঙ্গেল ব্র্যাকেট ব্যবহার করে: <x * 2 for x in items>' }
        ],
        answer: 0,
        hint: {
          en: 'Square brackets make a list; parentheses make a generator.',
          bn: 'স্কয়ার ব্র্যাকেট দিলে লিস্ট হয়; প্যারেন্থেসিস দিলে জেনারেটর হয়।'
        },
        explanation: {
          en: 'Parentheses (x for x in iterable) create a lazy Generator Expression, whereas square brackets [x for x in iterable] create an eager List Comprehension.',
          bn: 'প্যারেন্থেসিস দিলে লেজি জেনারেটর এক্সপ্রেশন তৈরি হয়, আর থার্ড ব্র্যাকেট দিলে সাথে সাথে পুরো লিস্ট তৈরি হয়।'
        }
      },
      {
        id: 'gqq3',
        kind: 'mcq',
        topic: 'python: yield state preservation',
        question: {
          en: 'What distinguishes a generator function containing yield from an ordinary Python function?',
          bn: 'yield নির্দেশ সম্বলিত একটি জেনারেটর ফাংশনের সাথে সাধারণ পাইথন ফাংশনের মূল পার্থক্য কী?'
        },
        options: [
          { en: 'It produces an iterator that preserves local execution state between yield calls instead of tearing down the stack', bn: 'এটি এমন একটি ইটারেটর ফেরত দেয় যা কল স্ট্যাক মুছে না ফেলে yield-এর মাঝে স্টেট ধরে রাখে' },
          { en: 'It is compiled directly into machine assembly language', bn: 'এটি সরাসরি মেশিন অ্যাসেম্বলিতে কম্পাইল হয়' },
          { en: 'It automatically spawns multiple processes across CPU cores', bn: 'এটি নিজে থেকেই একাধিক প্রসেস চালু করে' },
          { en: 'It can only yield 32-bit integer values', bn: 'এটি কেবল 32-বিট পূর্ণসংখ্যা রিটার্ন করে' }
        ],
        answer: 0,
        hint: {
          en: 'State is preserved between yield statements.',
          bn: 'yield স্টেটমেন্টের মধ্যে স্টেট সংরক্ষিত থাকে।'
        },
        explanation: {
          en: 'When a function contains yield, invoking it produces a generator object. Each call to next() resumes execution right where it suspended.',
          bn: 'ফাংশনে yield থাকলে তা একটি জেনারেটর অবজেক্ট তৈরি করে এবং next() ডাকার সাথে সাথে এটি আগের থামানো স্থান থেকে কাজ শুরু করে।'
        }
      },
      {
        id: 'gqq4',
        kind: 'mcq',
        topic: 'python: generator exhaustion single-pass',
        question: {
          en: 'What happens when you attempt to iterate over an exhausted generator instance a second time?',
          bn: 'ইতিমধ্যে শেষ হয়ে যাওয়া একটি জেনারেটর ইনস্ট্যান্সের ওপর দ্বিতীয়বার ইটারেশন চালালে কী ঘটে?'
        },
        options: [
          { en: 'It yields nothing and terminates immediately because generators are single-use disposable streams', bn: 'এটি কোনো উপাদান ফেরত দেয় না এবং সাথে সাথে শেষ হয়ে যায় কারণ জেনারেটর কেবল একবার ব্যবহারযোগ্য' },
          { en: 'It rewinds and replays all values from the beginning automatically', bn: 'এটি শুরু থেকে সব মান পুনরায় চালায়' },
          { en: 'It raises an uncatchable MemoryError exception', bn: 'এটি সমাধানহীন MemoryError ছুড়ে দেয়' },
          { en: 'It restarts the host operating system process', bn: 'এটি হোস্ট ওএস প্রসেস রিস্টার্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Generators are single-pass streams.',
          bn: 'জেনারেটর হলো একমুখী একবার-ব্যবহার্য স্ট্রিম।'
        },
        explanation: {
          en: 'Generators are single-use streams. Once exhausted (raising StopIteration), subsequent iteration yields zero items.',
          bn: 'জেনারেটর কেবল একবার ব্যবহার করা যায়। একবার সব মান শেষ হয়ে গেলে এতে আর কোনো উপাদান পাওয়া যায় না।'
        }
      }
    ]
  }
};
