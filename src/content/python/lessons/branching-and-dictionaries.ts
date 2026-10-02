import type { Lesson } from '../../../lib/types';

/**
 * Eight w3schools pages condensed into one structured lesson:
 * 1. If statement basics and truth checks
 * 2. Elif chains and decision trees
 * 3. Nested if statements and guard clauses
 * 4. Adding list items with append(), insert(), and extend()
 * 5. Nested dictionaries and hierarchical state
 * 6. Dictionary methods: fromkeys(), setdefault(), and get()
 * 7. Function parameters and default values (avoiding mutable defaults)
 * 8. User input handling with input(), casting, and error recovery
 */
export const branchingAndDictionariesLesson: Lesson = {
  slug: 'python-branching-dictionaries',
  tech: 'python',
  title: {
    en: 'Branching and dictionaries: if-elif chains, list insertion, nested dicts, arguments',
    bn: 'শর্ত ও ডিকশনারি: if-elif শাখা, তালিকায় যোগ, নেস্টেড ডিকশনারি, আর্গুমেন্ট'
  },
  summary: {
    en: 'Real programs make choices and organize hierarchical records. Master conditional branching with if, elif, and guard clauses, expand lists with append, insert, and extend, navigate nested dictionaries safely using get and setdefault, and handle function parameters cleanly.',
    bn: 'বাস্তব সফটওয়্যার শর্ত মেনে সিদ্ধান্ত নেয় এবং স্তরীভূত তথ্য সাজায়। if, elif ও গার্ড ক্লজ দিয়ে শাখার নিয়ন্ত্রণ, append, insert ও extend দিয়ে তালিকা বৃদ্ধি, get ও setdefault দিয়ে নেস্টেড ডিকশনারি পরিচালনা এবং আর্গুমেন্টের সঠিক ব্যবহার শিখুন।'
  },
  minutes: 26,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'Decisions and data structures in Python', bn: 'পাইথনে সিদ্ধান্ত গ্রহণ ও ডেটা স্ট্রাকচার' } },
    {
      type: 'para',
      text: {
        en: 'In this lesson we cover conditional execution and data manipulation across eight focused points. Each point includes executable code with verified printed comments.',
        bn: 'এই পাঠে আমরা আটটি সুনির্দিষ্ট পয়েন্টে শর্তসাপেক্ষ কোড পরিচালনা ও ডেটা সাজানো দেখব। প্রতিটিতে যাচাইকৃত কমেন্টসহ রানযোগ্য কোড রয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'guard clause', def: { en: 'an early exit condition that prevents deeply nested branches', bn: 'একটি প্রাথমিক প্রস্থান শর্ত যা গভীর নেস্টিং এড়িয়ে চলে' } },
        { term: 'short-circuit evaluation', def: { en: 'stopping boolean evaluation as soon as the outcome is certain', bn: 'ফলাফল নিশ্চিত হওয়ামাত্র বুলিয়ান পরীক্ষা সমাপ্ত করার পদ্ধতি' } },
        { term: 'shallow mutation', def: { en: 'modifying elements in an outer container while leaving inner references untouched', bn: 'ভেতরের রেফারেন্স ঠিক রেখে বাইরের ধারকটির উপাদান পরিবর্তন' } },
        { term: 'fallback retrieval', def: { en: 'fetching a value with a safe default instead of raising KeyError', bn: 'KeyError না তুলে পূর্বনির্ধারিত বিকল্প মানসহ তথ্য গ্রহণ' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. The if statement: truthful conditions and blocks', bn: '১. if স্টেটমেন্ট: সত্যতা যাচাই ও কোড ব্লক' } },
    {
      type: 'para',
      text: {
        en: 'An if statement inspects an expression for truthiness and executes its indented body only when that expression evaluates to true.',
        bn: 'একটি if স্টেটমেন্ট এক্সপ্রেশনের সত্যতা যাচাই করে এবং ফলাফল সত্য হলেই কেবল ইন্ডেন্ট করা বডি নির্বাহ করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'if_statement.py',
      code: `score = 85

# One-line if ternary conditional expression
status = "Pass" if score >= 80 else "Fail" # ternary operator
print('Evaluation:', status)

if score >= 80:
    grade = 'Distinction'
    passed = True

print(grade, passed)       # Distinction True

items = ['report.pdf']
if items:                  # non-empty list is truthy
    print('Queue depth:', len(items))   # Queue depth: 1

empty_cache = {}
if not empty_cache:        # empty dict evaluates to False
    print('Cache primed: ready')        # Cache primed: ready`,
      caption: {
        en: 'Indentation defines scope in Python. A non-empty container evaluates directly to True without needing an explicit length check.',
        bn: 'পাইথনে ইন্ডেন্টেশন ব্লকের পরিধি নির্ধারণ করে। কোনো ধারক খালি না থাকলে লেন্থ না মেপেই তা সরাসরি True হিসেবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The elif ladder: mutually exclusive choices', bn: '২. elif মই: পরস্পর স্বাধীন বিকল্প' } },
    {
      type: 'para',
      text: {
        en: 'Use elif to evaluate mutually exclusive options in strict top-to-bottom sequence. Execution leaves the ladder as soon as the first matching condition succeeds.',
        bn: 'পরস্পর স্বাধীন বিকল্পগুলো উপর থেকে নিচে ধারাবাহিকভাবে যাচাই করতে elif ব্যবহার করুন। প্রথম সত্য শর্তটি চালিয়েই কোড মই থেকে বের হয়ে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'elif_ladder.py',
      code: `http_status = 404

if http_status == 200:
    action = 'Serve payload'
elif http_status == 301:
    action = 'Follow redirect'
elif http_status == 404:
    action = 'Render missing template'
elif http_status >= 500:
    action = 'Trigger circuit breaker'
else:
    action = 'Log unexpected code'

print('Handler action:', action)   # Handler action: Render missing template`,
      caption: {
        en: 'The elif chain tests conditions sequentially. When a match is found, subsequent checks are skipped entirely.',
        bn: 'elif চেইন ধারাবাহিকভাবে শর্তগুলো পরীক্ষা করে। একটি মিল পাওয়া গেলে পরের সবগুলো পরীক্ষা স্বয়ংক্রিয়ভাবে এড়িয়ে যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Nested if statements and guard clauses', bn: '৩. নেস্টেড if স্টেটমেন্ট ও গার্ড ক্লজ' } },
    {
      type: 'para',
      text: {
        en: 'Placing an if block inside another creates a nested if. While useful for hierarchical authorization, guard clauses that return early keep code much flatter and cleaner.',
        bn: 'একটি if ব্লকের ভেতর অন্যটি রাখলে তৈরি হয় নেস্টেড if। স্তরীভূত যাচাইয়ে এটি কার্যকর হলেও গার্ড ক্লজ দিয়ে দ্রুত রিটার্ন করলে কোড অনেক পরিচ্ছন্ন থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'nested_if.py',
      code: `def process_transaction(user, amount):
    # Guard clause 1: authentication check
    if not user.get('authenticated'):
        return '401: Unauthorized'
    
    # Guard clause 2: positive funds
    if amount <= 0:
        return '400: Invalid amount'
        
    # Nested privilege check
    if user.get('tier') == 'vip':
        if amount > 10000:
            return 'Approved: VIP high-value route'
        return 'Approved: VIP standard'
        
    return 'Approved: Regular tier'

u1 = {'authenticated': True, 'tier': 'vip'}
print(process_transaction(u1, 15000))   # Approved: VIP high-value route
print(process_transaction({'authenticated': False}, 50))  # 401: Unauthorized`,
      caption: {
        en: 'Guards filter out invalid states at the top of the function so inner business logic remains readable and unindented.',
        bn: 'ফাংশনের শীর্ষে গার্ড ক্লজ বসিয়ে ভুল অবস্থা আটকে দিলে ভেতরের মূল কাজের লজিক অতিরিক্ত ইন্ডেন্টেশন ছাড়াই পরিচ্ছন্ন থাকে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Add list items: append(), insert(), and extend()', bn: '৪. তালিকায় উপাদান যোগ: append(), insert(), এবং extend()' } },
    {
      type: 'para',
      text: {
        en: 'Lists provide three primary methods to add elements in-place: append adds one item to the end, insert places an item at an exact index, and extend unpacks an entire iterable.',
        bn: 'তালিকায় নতুন উপাদান যোগ করার তিনটি মূল মেথড রয়েছে: append শেষে একটি উপাদান যোগ করে, insert নির্দিষ্ট ইনডেক্সে বসায়, আর extend পুরো ইটারেবলকে যুক্ত করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'list_add.py',
      code: `tasks = ['audit', 'backup']

# append adds a single element at the end: O(1) amortized
tasks.append('deploy')
print(tasks)               # ['audit', 'backup', 'deploy']

# insert places an element at specified index: O(n) shift
tasks.insert(1, 'verify')
print(tasks)               # ['audit', 'verify', 'backup', 'deploy']

# extend unpacks another iterable onto the tail
tasks.extend(['notify', 'monitor'])
print(tasks)               # ['audit', 'verify', 'backup', 'deploy', 'notify', 'monitor']
print(len(tasks))          # 6

# Common trap: append with a list creates a nested item
trap = ['a']
trap.append(['b', 'c'])
print(trap)                # ['a', ['b', 'c']]`,
      caption: {
        en: 'append accepts whatever object you pass as a single entity, whereas extend unrolls the iterable element by element.',
        bn: 'append যাকে পায় তাকেই একক বস্তু হিসেবে ঢুকিয়ে দেয়, যেখানে extend ইটারেবলের উপাদানগুলোকে ভেঙে আলাদা করে যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Nested dictionaries: structured and hierarchical state', bn: '৫. নেস্টেড ডিকশনারি: স্তরীভূত ও কাঠামোগত তথ্য' } },
    {
      type: 'para',
      text: {
        en: 'A dictionary can hold other dictionaries as values, forming a nested dictionary tree ideal for configurations, API payloads, and database records.',
        bn: 'ডিকশনারির মানের ঘরে অন্যান্য ডিকশনারি রেখে তৈরি করা হয় নেস্টেড ডিকশনারি, যা কনফিগারেশন, এপিআই পেলোড ও ডাটাবেজ রেকর্ডের জন্য আদর্শ।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'nested_dicts.py',
      code: `cluster = {
    'primary': {
        'host': '10.0.0.1',
        'port': 5432,
        'role': 'leader'
    },
    'replica': {
        'host': '10.0.0.2',
        'port': 5432,
        'role': 'follower'
    }
}

# Accessing nested keys
print(cluster['primary']['host'])   # 10.0.0.1

# Updating a nested value
cluster['replica']['lag_ms'] = 14
print(cluster['replica']['lag_ms']) # 14

# Safe traversal across deep keys
follower_port = cluster.get('replica', {}).get('port', 8000)
print('Replica port:', follower_port) # Replica port: 5432`,
      caption: {
        en: 'Chaining dictionary indexing directly raises KeyError if any intermediate key is missing. Chain .get() calls with default empty dictionaries for safety.',
        bn: 'মাঝখানের চাবি না থাকলে সরাসরি ইনডেক্সিং KeyError দেয়। নিরাপদে গভীর তথ্য পেতে ডিফল্ট ডিকশনারিসহ .get() চেইন করুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Dictionary methods: get(), setdefault(), and fromkeys()', bn: '৬. ডিকশনারি মেথড: get(), setdefault(), এবং fromkeys()' } },
    {
      type: 'para',
      text: {
        en: 'Standard dictionary methods provide controlled key access, initialization, and bulk construction without risking runtime exceptions.',
        bn: 'স্ট্যান্ডার্ড ডিকশনারি মেথডগুলো রানটাইম এরর ছাড়া নিরাপদে তথ্য গ্রহণ, প্রাথমিক মান নির্ধারণ ও একযোগে একাধিক চাবি তৈরিতে সহায়তা করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'dict_methods.py',
      code: `# fromkeys creates a dictionary with pre-initialized keys
default_flags = dict.fromkeys(['auth', 'logging', 'tracing'], False)
print(default_flags)       # {'auth': False, 'logging': False, 'tracing': False}

# get fetches safely with optional fallback
metrics = {'cpu': 42}
print(metrics.get('cpu'))            # 42
print(metrics.get('mem', 0))         # 0

# setdefault retrieves existing key, or stores the default if absent
registry = {}
p1 = registry.setdefault('conn_pool', 10)
p2 = registry.setdefault('conn_pool', 99)   # key already exists: 99 ignored
print(p1, p2)                        # 10 10
print(registry['conn_pool'])         # 10`,
      caption: {
        en: 'setdefault returns the existing value if the key exists, and only assigns the fallback when the key is completely missing.',
        bn: 'চাবি আগে থেকেই থাকলে setdefault পুরোনো মানই ফেরত দেয়, চাবি না পেলেই কেবল নতুন ফলব্যাক মানটি সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Function arguments: positional, keyword, and default values', bn: '৭. ফাংশন আর্গুমেন্ট: পজিশনাল, কিওয়ার্ড ও ডিফল্ট মান' } },
    {
      type: 'para',
      text: {
        en: 'Function parameters can specify default values. Callers can supply positional arguments or name them explicitly as keyword arguments.',
        bn: 'ফাংশনের প্যারামিটারে আগে থেকেই ডিফল্ট মান বসিয়ে রাখা যায়। কল করার সময় পজিশনাল আর্গুমেন্ট বা নির্দিষ্ট নাম দিয়ে কিওয়ার্ড আর্গুমেন্ট পাঠানো সম্ভব।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'func_arguments.py',
      code: `def build_query(table, limit=100, order_by='id'):
    return f'SELECT * FROM {table} ORDER BY {order_by} LIMIT {limit}'

# Default arguments used
print(build_query('users'))                       # SELECT * FROM users ORDER BY id LIMIT 100

# Keyword arguments override defaults in any order
print(build_query('orders', order_by='created_at', limit=25))
# SELECT * FROM orders ORDER BY created_at LIMIT 25

# Mutable default trap: never use [] or {} as a default!
def append_event(evt, log=None):
    if log is None:
        log = []
    log.append(evt)
    return log

print(append_event('boot'))   # ['boot']
print(append_event('ready'))  # ['ready'] (independent lists)`,
      caption: {
        en: 'Default argument expressions evaluate only once at function definition time. Always use None as the sentinel default for mutable objects.',
        bn: 'ফাংশন সংজ্ঞায়িত হওয়ার সময় ডিফল্ট মান মাত্র একবার তৈরি হয়। তাই পরিবর্তনশীল ডেটায় ডিফল্ট হিসেবে সর্বদা None ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. User input: reading strings with input() and validating', bn: '৮. ব্যবহারকারীর ইনপুট: input() দিয়ে গ্রহণ ও যাচাই' } },
    {
      type: 'para',
      text: {
        en: 'The input() function pauses execution, reads a line of text from standard input, and returns it as a string. Numbers must be explicitly cast.',
        bn: 'input() ফাংশন কোড থামিয়ে স্ট্যান্ডার্ড ইনপুট থেকে এক লাইন লেখা নেয় এবং স্ট্রিং আকারে ফেরত দেয়। সংখ্যার জন্য স্পষ্ট কাস্টিং প্রয়োজন।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'user_input.py',
      code: `def simulate_cli(input_stream):
    results = []
    for raw_token in input_stream:
        stripped = raw_token.strip()
        if not stripped:
            continue
        try:
            val = int(stripped)
            results.append(val * 2)
        except ValueError:
            results.append(f'err:{stripped}')
    return results

stream = [' 42 ', 'abc', '10', '']
print(simulate_cli(stream))    # [84, 'err:abc', 20]`,
      caption: {
        en: 'Because input() always yields str, wrap numeric parsing in try/except blocks to prevent crashes on invalid user input.',
        bn: 'input() সর্বদা str ফেরত দেয় বলে ভুল ইনপুটে ক্র্যাশ ঠেকাতে সংখ্যায় রূপান্তরের কোড try/except ব্লকে রাখা আবশ্যক।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Architectural significance of clean flow and collections', bn: 'পরিচ্ছন্ন নিয়ন্ত্রণ ও ডেটা কাঠামোর গুরুত্ব' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'Guard clauses reduce nesting depth and eliminate runaway indentation', bn: 'গার্ড ক্লজ নেস্টিংয়ের গভীরতা কমিয়ে জটিল ইন্ডেন্টেশন দূর করে' },
        { en: 'append keeps linear amortized performance compared to slow list concatenation', bn: 'তালিকা জোড়া দেওয়ার চেয়ে append নিয়মিত O(1) গতি বজায় রাখে' },
        { en: 'get and setdefault prevent unexpected KeyError crashes in production pipelines', bn: 'get ও setdefault প্রোডাকশন সার্ভারে অপ্রত্যাশিত KeyError ক্র্যাশ প্রতিরোধ করে' },
        { en: 'Keyword arguments turn ambiguous boolean flags into self-documenting calls', bn: 'কিওয়ার্ড আর্গুমেন্ট অস্পষ্ট বুলিয়ান ফ্ল্যাগকে স্ব-ব্যাখ্যাকারী কলে পরিণত করে' },
        { en: 'Sentinels like None avoid memory-sharing bugs across repeated function calls', bn: 'None-এর মতো সেন্টিনেল মান বারবার ফাংশন কলে মেমরি শেয়ারিংয়ের ফাঁদ এড়ায়' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Method / Keyword', bn: 'মেথড / কিওয়ার্ড' }, { en: 'Target', bn: 'প্রয়োগ' }, { en: 'Time Complexity', bn: 'সময় জটিলতা' }, { en: 'Key Behaviour', bn: 'মূল বৈশিষ্ট্য' }],
      rows: [
        [{ en: 'if / elif', bn: 'if / elif' }, { en: 'Branching', bn: 'কন্ট্রোল ফ্লো' }, { en: 'O(1)', bn: 'O(1)' }, { en: 'Evaluates top-to-bottom until first match', bn: 'প্রথম মিল পাওয়া পর্যন্ত উপর থেকে নিচে চলে' }],
        [{ en: 'append(x)', bn: 'append(x)' }, { en: 'list', bn: 'list' }, { en: 'O(1) amortized', bn: 'O(1) amortized' }, { en: 'Appends a single item to the list end', bn: 'তালিকার শেষে একক উপাদান যোগ করে' }],
        [{ en: 'extend(iter)', bn: 'extend(iter)' }, { en: 'list', bn: 'list' }, { en: 'O(k)', bn: 'O(k)' }, { en: 'Unpacks all elements from the iterable', bn: 'ইটারেবলের সব উপাদান ভেঙে ক্রমান্বয়ে ঢোকায়' }],
        [{ en: 'insert(i, x)', bn: 'insert(i, x)' }, { en: 'list', bn: 'list' }, { en: 'O(n)', bn: 'O(n)' }, { en: 'Shifts subsequent items right by one slot', bn: 'পরের উপাদানগুলোকে এক ঘর ডানে সরিয়ে দেয়' }],
        [{ en: 'dict.get(k, d)', bn: 'dict.get(k, d)' }, { en: 'dict', bn: 'dict' }, { en: 'O(1)', bn: 'O(1)' }, { en: 'Returns default value instead of KeyError', bn: 'KeyError না তুলে পূর্বনির্ধারিত বিকল্প দেয়' }],
        [{ en: 'dict.setdefault(k, d)', bn: 'dict.setdefault(k, d)' }, { en: 'dict', bn: 'dict' }, { en: 'O(1)', bn: 'O(1)' }, { en: 'Stores and returns fallback if key was absent', bn: 'চাবি না থাকলে মান সংরক্ষণ করে ফেরত পাঠায়' }]
      ],
      caption: { en: 'Comparing collection update verbs and control flow operations in Python.', bn: 'পাইথনে কালেকশন আপডেট ও নিয়ন্ত্রণকারী কমান্ডের তুলনামূলক তালিকা।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to write robust decision pipelines', bn: 'কীভাবে শক্তিশালী ডিসিশন পাইপলাইন তৈরি করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Check guards first', bn: 'শুরুতেই গার্ড যাচাই করুন' }, text: { en: 'Validate types, permissions, and non-empty inputs at the top of functions.', bn: 'ফাংশনের শীর্ষে টাইপ, অনুমতি ও ইনপুটের যথার্থতা আগেই নিশ্চিত করে নিন।' } },
        { title: { en: 'Select the right insertion verb', bn: 'সঠিক ইনসার্ট মেথড বাছুন' }, text: { en: 'Use append for single items and extend for collections to avoid nested sublists.', bn: 'একক উপাদানে append এবং সমষ্টিতে extend ব্যবহার করে অনাকাঙ্ক্ষিত সাবলিস্ট এড়ান।' } },
        { title: { en: 'Protect nested dictionary traversal', bn: 'নেস্টেড ডিকশনারি সুরক্ষিত রাখুন' }, text: { en: 'Chain .get() calls with fallback empty dictionaries to withstand incomplete payloads.', bn: 'অসম্পূর্ণ ডেটা এড়াতে ফলব্যাক ফাঁকা ডিকশনারিসহ .get() চেইনিং ব্যবহার করুন।' } },
        { title: { en: 'Avoid mutable default arguments', bn: 'পরিবর্তনশীল ডিফল্ট পরিহার করুন' }, text: { en: 'Always default to None and allocate fresh lists or dicts inside the function body.', bn: 'সর্বদা ডিফল্ট মান হিসেবে None দিন এবং ফাংশনের ভেতর নতুন অবজেক্ট তৈরি করুন।' } },
        { title: { en: 'Sanitize incoming text immediately', bn: 'ইনপুট টেক্সট পরিচ্ছন্ন করুন' }, text: { en: 'Strip whitespace and handle ValueError on type conversion before using values in calculations.', bn: 'গণনায় ব্যবহারের আগেই স্পেস ছেঁটে নিন এবং টাইপ কনভার্সনে ValueError সামলান।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'List insertion vs extension and dictionary fallback flow', bn: 'তালিকায় যোগ এবং ডিকশনারির ফলব্যাক প্রবাহ' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="flowchart of list append vs extend and dictionary key lookup with get fallback"><g font-size="11" fill="currentColor"><rect x="20" y="24" width="160" height="36" rx="6" fill="none" stroke="currentColor"/><text x="100" y="47" text-anchor="middle">Input: [1, 2]</text><rect x="230" y="10" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="320" y="30" text-anchor="middle">append([3, 4]) -&gt; [1, 2, [3, 4]]</text><rect x="230" y="48" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="320" y="68" text-anchor="middle">extend([3, 4]) -&gt; [1, 2, 3, 4]</text><line x1="180" y1="42" x2="230" y2="25" stroke="currentColor" stroke-width="1.2"/><line x1="180" y1="42" x2="230" y2="63" stroke="currentColor" stroke-width="1.2"/><rect x="20" y="120" width="160" height="36" rx="6" fill="none" stroke="currentColor"/><text x="100" y="143" text-anchor="middle">d.get('key', fallback)</text><rect x="230" y="105" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="320" y="125" text-anchor="middle">Key exists -&gt; value</text><rect x="230" y="143" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="320" y="163" text-anchor="middle">Key absent -&gt; fallback</text><line x1="180" y1="138" x2="230" y2="120" stroke="currentColor" stroke-width="1.2"/><line x1="180" y1="138" x2="230" y2="158" stroke="currentColor" stroke-width="1.2"/></g></svg>`,
      caption: { en: 'Visual representation of list mutation behaviors alongside safe dictionary access paths.', bn: 'তালিকার রূপান্তর এবং ডিকশনারির নিরাপদ ফলব্যাক প্রবাহের দৃশ্যমান চিত্রায়ন।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Production efficiency tip', bn: 'প্রোডাকশন কার্যকারিতা টিপ' },
      text: {
        en: 'When assembling large lists in loops, prefer list comprehensions or extend over repeated append, and always name keyword arguments at call sites when invoking functions with multiple boolean or numeric parameters.',
        bn: 'লুপের ভেতর বড় তালিকা তৈরির সময় বারবার append করার বদলে লিস্ট কম্প্রিহেনশন বা extend ব্যবহার করুন, এবং একাধিক প্যারামিটারযুক্ত ফাংশন কলে কিওয়ার্ড আর্গুমেন্টের নাম স্পষ্টভাবে উল্লেখ করুন।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The mutable default trap', bn: 'পরিবর্তনশীল ডিফল্টের বিপদ' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Shared mutable default parameters', bn: 'শেয়ার্ড পরিবর্তনশীল ডিফল্ট প্যারামিটার' },
      text: {
        en: 'Writing def f(x, acc=[]): binds a single list object once when the file loads. Every call that relies on the default will append to that identical shared object across user sessions. Use acc=None and assign a fresh list inside.',
        bn: 'def f(x, acc=[]): লিখলে ফাইল লোড হওয়ার সময় মাত্র একটি লিস্ট অবজেক্ট তৈরি হয়। প্রতিবার কল করার সময় ডিফল্ট মান ওই একই শেয়ার্ড লিস্টে তথ্য যোগ করতে থাকে। তাই সর্বদা acc=None দিন এবং ভেতরে নতুন লিস্ট নিন।'
      }
    }
  ],
  exercises: [
    {
      id: 'python-branching-dictionaries-ex1', kind: 'predict', topic: 'python: Branching and dictionaries',
      question: { en: 'What does this list modification print?', bn: 'এই তালিকা পরিবর্তনের পর প্রিন্টে কী দেখাবে?' },
      code: `nums = [1, 2]\nnums.extend([3, 4])\nprint(len(nums))`,
      answer: '4',
      accept: ['4'],
      hint: { en: 'extend unrolls all items into the parent list.', bn: 'extend সব উপাদান ভেঙে মূল তালিকায় যুক্ত করে।' },
      explanation: { en: 'extend unpacks both 3 and 4, giving [1, 2, 3, 4] with length 4. append([3, 4]) would have produced length 3 with a nested list.', bn: 'extend ৩ এবং ৪ দুটোকেই আলাদা করে যুক্ত করে [1, 2, 3, 4] বানায় যার দৈর্ঘ্য ৪; append([3, 4]) দিলে দৈর্ঘ্য হতো ৩।' }
    },
    {
      id: 'python-branching-dictionaries-ex2', kind: 'mcq', topic: 'python: Branching and dictionaries',
      question: { en: 'What is the safe dictionary method to supply a default when a key is missing?', bn: 'ডিকশনারির চাবি না থাকলে ক্র্যাশ ছাড়া ডিফল্ট মান পাওয়ার মেথড কোনটি?' },
      options: [
        { en: 'dict.get(key, default)', bn: 'dict.get(key, default)' },
        { en: 'dict[key]', bn: 'dict[key]' },
        { en: 'dict.find(key)', bn: 'dict.find(key)' },
        { en: 'dict.pop()', bn: 'dict.pop()' }
      ],
      answer: 0,
      hint: { en: 'The three-letter accessor method.', bn: 'তিন অক্ষরের অ্যাক্সেসর মেথড।' },
      explanation: { en: 'get() returns the default value instead of raising KeyError when the requested key does not exist.', bn: 'চাবি না পেলে get() কোনো এরর না তুলে নিরাপদে ডিফল্ট মান ফেরত দেয়।' }
    },
    {
      id: 'python-branching-dictionaries-ex3', kind: 'fill', topic: 'python: Branching and dictionaries',
      question: { en: 'Fill the blank to insert "cache" at the beginning of the list.', bn: 'তালিকার একেবারে শুরুতে "cache" বসাতে শূন্যস্থান পূরণ করুন।' },
      code: `layers = ['db', 'api']\nlayers.________(0, 'cache')\nprint(layers[0])   # cache`,
      answer: 'insert',
      accept: ['insert', 'insert(0, \'cache\')'],
      hint: { en: 'Method that takes index first, then value.', bn: 'যে মেথড প্রথমে ইনডেক্স এবং পরে মান গ্রহণ করে।' },
      explanation: { en: 'insert(0, val) places the element at index 0 and shifts existing elements to the right.', bn: 'insert(0, val) শূন্যতম স্থানে উপাদান বসিয়ে বাকিগুলোকে ডানে সরিয়ে দেয়।' }
    },
    {
      id: 'python-branching-dictionaries-ex4', kind: 'predict', topic: 'python: Branching and dictionaries',
      question: { en: 'What does setdefault print on an existing key?', bn: 'আগে থেকেই থাকা চাবিতে setdefault কী প্রিন্ট করে?' },
      code: `cfg = {'port': 8080}\nprint(cfg.setdefault('port', 3000))\nprint(cfg['port'])`,
      answer: '8080\n8080',
      accept: ['8080\n8080', '8080 8080', '8080, 8080', '8080'],
      hint: { en: 'Existing values are preserved untouched.', bn: 'আগে থেকে থাকা মান অপরিবর্তিত থাকে।' },
      explanation: { en: 'Because port is already in cfg, setdefault returns 8080 and leaves the value unchanged.', bn: 'cfg-তে port চাবিটি থাকায় setdefault ৮০৮০ ফেরত দেয় এবং মান পরিবর্তন করে না।' }
    }
  ],
  quiz: {
    id: 'python-branching-dictionaries-quiz',
    title: { en: 'Quiz — Branching and dictionaries', bn: 'কুইজ — ব্রাঞ্চিং ও ডিকশনারি' },
    questions: [
      {
        id: 'python-branching-dictionaries-q1', kind: 'mcq', topic: 'python: Branching and dictionaries',
        question: { en: 'Why should mutable objects like lists not be used as default arguments?', bn: 'লিস্টের মতো মিউটেবল অবজেক্ট কেন ডিফল্ট আর্গুমেন্ট হিসেবে ব্যবহার করা উচিত নয়?' },
        options: [
          { en: 'The default object is evaluated once and shared across all invocations', bn: 'ডিফল্ট অবজেক্টটি মাত্র একবার তৈরি হয়ে সব কলেই শেয়ার হতে থাকে' },
          { en: 'Python raises a SyntaxError immediately', bn: 'পাইথন সাথে সাথে SyntaxError তুলে দেয়' },
          { en: 'Lists cannot be passed as arguments in Python', bn: 'পাইথনে আর্গুমেন্ট হিসেবে লিস্ট পাঠানো নিষিদ্ধ' },
          { en: 'It converts the list to a tuple automatically', bn: 'এটি স্বয়ংক্রিয়ভাবে লিস্টকে টাপলে রূপান্তর করে' }
        ],
        answer: 0,
        hint: { en: 'Function definition time vs execution time.', bn: 'ফাংশন ডিফাইন হওয়ার সময় বনাম চলার সময়।' },
        explanation: { en: 'Default argument values are created when the def statement executes, meaning state accumulates across subsequent calls.', bn: 'def স্টেটমেন্ট পড়ার সময় ডিফল্ট মান একবারই তৈরি হয়, যার ফলে বারবার কলে আগের তথ্য জমে থাকে।' }
      },
      {
        id: 'python-branching-dictionaries-q2', kind: 'predict', topic: 'python: Branching and dictionaries',
        question: { en: 'What does this nested dict lookup print?', bn: 'এই নেস্টেড ডিকশনারি অনুসন্ধানে কী প্রিন্ট হবে?' },
        code: `data = {'server': {'ip': '127.0.0.1'}}\nprint(data.get('server', {}).get('ip'))`,
        answer: '127.0.0.1',
        accept: ['127.0.0.1'],
        hint: { en: 'The inner key is retrieved from the returned dictionary.', bn: 'ভেতরের চাবিটি ফেরত আসা ডিকশনারি থেকে সংগ্রহ করা হয়।' },
        explanation: { en: 'data.get("server") finds the dictionary, and the chained .get("ip") extracts the IP string.', bn: 'data.get("server") ডিকশনারি খুঁজে পায় এবং চেইন করা .get("ip") আইপি অ্যাড্রেসটি বের করে আনে।' }
      },
      {
        id: 'python-branching-dictionaries-q3', kind: 'mcq', topic: 'python: Branching and dictionaries',
        question: { en: 'What is the return type of input() in Python 3?', bn: 'পাইথন ৩ এ input() ফাংশনের রিটার্ন টাইপ কোনটি?' },
        options: [
          { en: 'str', bn: 'str' },
          { en: 'int', bn: 'int' },
          { en: 'bytes', bn: 'bytes' },
          { en: 'None', bn: 'None' }
        ],
        answer: 0,
        hint: { en: 'All entered text arrives as characters.', bn: 'ব্যবহারকারীর টাইপ করা লেখা টেক্সট হিসেবে আসে।' },
        explanation: { en: 'input() always returns a string, even if the user typed numbers.', bn: 'ব্যবহারকারী সংখ্যা টাইপ করলেও input() সর্বদা স্ট্রিং আকারে মান প্রদান করে।' }
      },
      {
        id: 'python-branching-dictionaries-q4', kind: 'mcq', topic: 'python: Branching and dictionaries',
        question: { en: 'Which statement accurately describes guard clauses?', bn: 'গার্ড ক্লজ সম্পর্কে কোন বাক্যটি সঠিক?' },
        options: [
          { en: 'They check failure conditions upfront and return early to keep code flat', bn: 'শুরুতেই ব্যর্থতার শর্ত পরীক্ষা করে দ্রুত রিটার্ন করে কোড সোজা রাখে' },
          { en: 'They require at least three nested if statements', bn: 'তাদের জন্য কমপক্ষে তিনটি নেস্টেড if স্টেটমেন্ট লাগে' },
          { en: 'They can only be used with while loops', bn: 'এগুলো শুধুমাত্র while লুপের সাথে কাজ করে' },
          { en: 'They are built-in Python keywords', bn: 'এগুলো পাইথনের বিল্ট-ইন কিওয়ার্ড' }
        ],
        answer: 0,
        hint: { en: 'Early return prevents deep indentation.', bn: 'শুরুতেই ফেরত পাঠিয়ে অতিরিক্ত ইন্ডেন্টেশন রোধ করে।' },
        explanation: { en: 'Guard clauses handle edge cases and invalid states at the top of functions, avoiding deep if-else nest trees.', bn: 'গার্ড ক্লজ ফাংশনের শুরুতে বিশেষ ও অনাকাঙ্ক্ষিত পরিস্থিতি সামলে নিয়ে জটিল if-else নেস্টিং এড়ায়।' }
      }
    ]
  },
  nextLesson: {
    slug: 'the-sequence-mill',
    title: {
      en: 'The Sequence Mill: Lists, Slicing & Sequence Protocols',
      bn: 'সিকোয়েন্স মিল: লিস্ট, স্লাইসিং ও সিকোয়েন্স প্রোটোকল'
    }
  }
};
