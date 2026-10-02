import type { Lesson } from '../../../lib/types';

export const errorCourtLesson: Lesson = {
  slug: 'the-error-court',
  tech: 'python',
  title: {
    en: 'Python Exception Handling: Try, Except, Else, Finally & Custom Errors',
    bn: 'পাইথন এক্সেপশন হ্যান্ডলিং: try, except, else, finally ও কাস্টম এরর'
  },
  summary: {
    en: 'Master robust fault-tolerant programming across 10 structured topics, from try/except to custom classes. Learn specific exception catching, error capturing with as err, guaranteed finally cleanup, and context managers.',
    bn: 'try/except থেকে শুরু করে কাস্টম ক্লাস পর্যন্ত 10 টি বিষয়ে শক্তিশালী এরর হ্যান্ডলিং আয়ত্ত করুন। জানুন সুনির্দিষ্ট এক্সেপশন ক্যাচিং, as err দিয়ে বিবরণ সংরক্ষণ, নিশ্চিত finally ক্লিনআপ এবং কনটেক্সট ম্যানেজার।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-import-archive',
    title: { en: 'Python Modules, Packages, Pip & Virtual Environments', bn: 'পাইথন মডিউল, প্যাকেজ, pip ও ভার্চুয়াল এনভায়রনমেন্ট' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Error Categories: Syntax Errors vs Runtime Exceptions', bn: '১. ত্রুটির ধরণ: সিনট্যাক্স এরর বনাম রানটাইম এক্সেপশন' } },
    {
      type: 'para',
      text: {
        en: 'When you write Python code, mistakes inevitably happen in two primary forms. Syntax errors are parsing failures detected before your program starts running. Runtime exceptions occur while your script runs, triggered whenever valid syntax hits an illegal operation such as zero division.',
        bn: 'যখন আপনি পাইথন কোড লেখেন, ভুল মূলত দুটি প্রধান রূপে দেখা দেয়। সিনট্যাক্স এরর হলো পার্সিংয়ের ত্রুটি যা প্রোগ্রাম চলার আগেই ধরা পড়ে। আর রানটাইম এক্সেপশন ঘটে কোড চলার সময়, যখন বৈধ সিনট্যাক্স কোনো অবৈধ অপারেশনের মুখোমুখি হয় যেমন শূন্য দিয়ে ভাগ করা।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Syntax Error: Python parser halts before running any code!
# def bad_syntax() # SyntaxError: expected ':'

# Runtime Exception: Syntactically valid, but fails at runtime!
dividend = 100
divisor = 0
# result = dividend / divisor # Raises ZeroDivisionError: division by zero

print("Python detects runtime errors dynamically during execution.")

# Output:
# Python detects runtime errors dynamically during execution.`,
      caption: {
        en: 'Syntax errors are caught before runtime; exceptions occur dynamically during evaluation.',
        bn: 'সিনট্যাক্স এরর কোড চলার আগেই আটকায়; এক্সেপশন কোড চলার সময় তৈরি হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Core Safety Net: try and except Blocks', bn: '২. মূল নিরাপত্তা বলয়: try ও except ব্লক' } },
    {
      type: 'para',
      text: {
        en: 'The try block wraps statements that might fail. If an exception occurs inside the try block, Python halts normal execution and jumps immediately to the matching except block, preventing the entire application from crashing.',
        bn: 'যেসব লাইনে ত্রুটি ঘটার আশঙ্কা থাকে সেগুলোকে try ব্লকের ভেতরে রাখা হয়। try ব্লকের ভেতরে কোনো সমস্যা দেখা দিলে পাইথন সেখানে থামিয়ে সাথে সাথে সংশ্লিষ্ট except ব্লকে চলে যায়, ফলে পুরো অ্যাপ্লিকেশন ক্র্যাশ না করে নিরাপদে সচল থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def safe_divide(numerator, denominator):
    try:
        quotient = numerator / denominator
        return quotient
    except ZeroDivisionError:
        print("Warning: Division by zero attempted! Returning fallback 0.")
        return 0

print("Valid division:", safe_divide(10, 2)) # 5.0
print("Zero division:", safe_divide(10, 0))  # Caught safely! Returns 0

# Output:
# Valid division: 5.0
# Warning: Division by zero attempted! Returning fallback 0.
# Zero division: 0`,
      caption: {
        en: 'The try-except structure intercepts errors, allowing the program to recover gracefully.',
        bn: 'try-except কাঠামো ত্রুটি আটকে প্রোগ্রামকে স্বাভাবিকভাবে পুনরুদ্ধারের সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Specific Exception Handling vs The Bare except: Anti-Pattern', bn: '৩. সুনির্দিষ্ট এক্সেপশন ক্যাচিং বনাম খালি except: অ্যান্টি-প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'Always catch specific exception types (ValueError, KeyError, FileNotFoundError). Catching bare except: or except Exception: without discrimination is a dangerous anti-pattern: it intercepts KeyboardInterrupt and SystemExit, preventing developers from stopping infinite loops with Ctrl+C.',
        bn: 'সর্বদা নির্দিষ্ট ধরণের এক্সেপশন (যেমন ValueError, KeyError) ক্যাচ করা উচিত। কোনো নাম উল্লেখ না করে শুধু bare except: লেখা একটি মারাত্মক খারাপ অভ্যাস (anti-pattern): এটি কিবোর্ডের Ctrl+C (KeyboardInterrupt) এবং SystemExit সিগন্যালও আটকে ফেলে, ফলে প্রোগ্রাম থামানো অসম্ভব হয়ে পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def parse_user_age(age_input):
    try:
        age = int(age_input)
        if age < 0:
            raise ValueError("Age cannot be negative")
        return age
    except ValueError:
        print(f"Invalid input '{age_input}': Must be a valid non-negative integer.")
        return None
    except TypeError:
        print("Error: Input must be string or number type.")
        return None

print("Result 1:", parse_user_age("25"))
print("Result 2:", parse_user_age("abc"))
print("Result 3:", parse_user_age("-5"))

# Output:
# Result 1: 25
# Invalid input 'abc': Must be a valid non-negative integer.
# Result 2: None
# Invalid input '-5': Must be a valid non-negative integer.
# Result 3: None`,
      caption: {
        en: 'Catching specific exceptions targets known failure modes without blinding debuggers.',
        bn: 'সুনির্দিষ্ট এক্সেপশন ক্যাচ করলে প্রোগ্রাম না ভেঙে জানা ত্রুটিগুলো সহজে সমাধান করা যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Capturing Error Details: The as err Syntax', bn: '৪. ত্রুটির বিস্তারিত তথ্য সংগ্রহ: as err সিনট্যাক্স' } },
    {
      type: 'para',
      text: {
        en: 'Binding the exception instance to a variable using as err captures diagnostic information provided by the Python runtime, such as missing file names, invalid dictionary keys, or parameter mismatch explanations.',
        bn: 'except ব্লকে as err লিখে এক্সেপশনের অবজেক্টটিকে একটি ভেরিয়েবলে নিয়ে আসা যায়। এতে পাইথনের আসল এরর মেসেজ, মিসিং ফাইলের নাম কিংবা ভুল কি সংক্রান্ত বিস্তারিত তথ্য সরাসরি পড়ে লগ করা সম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `user_record = {"username": "nadia", "role": "engineer"}

try:
    # Attempting to access a key that does not exist:
    user_status = user_record["is_active"]
except KeyError as err:
    print("Caught KeyError object:", type(err).__name__)
    print("Missing dictionary key name:", err)

# Output:
# Caught KeyError object: KeyError
# Missing dictionary key name: 'is_active'`,
      caption: {
        en: 'as err exposes the underlying runtime error message for diagnostic logging.',
        bn: 'as err ডিবাগিং ও লগিংয়ের জন্য মূল এরর মেসেজটি অবজেক্ট হিসেবে প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The else Block: Clean Separation of Safe Execution Paths', bn: '৫. else ব্লক: ত্রুটিহীন কোডের নিরাপদ নির্বাহ' } },
    {
      type: 'para',
      text: {
        en: 'The else block in a try-except statement executes ONLY if the try block completed successfully without raising any exceptions. Keeping success-path code in else avoids inadvertently catching unexpected errors that happen outside the guarded operation.',
        bn: 'try-except ব্লকের সাথে else দিলে সেটি কেবল তখনই চলে যখন try ব্লকে কোনো এক্সেপশন ঘটেনি। সফল অপারেশনের পরবর্তী কাজগুলো else ব্লকে রাখলে অপ্রত্যাশিত ভুলগুলো দুর্ঘটনাবশত except-এ ধরা পড়া থেকে সুরক্ষিত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def process_transaction(balance, withdrawal_amount):
    try:
        new_balance = balance - withdrawal_amount
        if new_balance < 0:
            raise ValueError("Overdraft limit reached")
    except ValueError as err:
        print("Transaction Denied:", err)
    else:
        # Runs ONLY if withdrawal passed validation without error:
        print(f"Transaction Approved! New balance: \${new_balance}")
        return new_balance

process_transaction(100, 150) # Fails -> except runs
process_transaction(100, 40)  # Succeeds -> else runs

# Output:
# Transaction Denied: Overdraft limit reached
# Transaction Approved! New balance: $60`,
      caption: {
        en: 'else isolates code that should execute strictly when no errors occur.',
        bn: 'else সেই কোডকে আলাদা করে যা কোনো এরর না ঘটলে নিশ্চিতভাবে চালিত হয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The finally Block: Guaranteed Resource Cleanup', bn: '৬. finally ব্লক: নিশ্চিত রিসোর্স ক্লিনআপ' } },
    {
      type: 'para',
      text: {
        en: 'The finally block ALWAYS executes before exiting the try statement, regardless of whether exceptions were raised or caught, and even if return statements were encountered. It is the bedrock of cleanup routines like closing database connections and releasing hardware locks.',
        bn: 'try স্টেটমেন্টের শেষে finally ব্লক যেকোনো পরিস্থিতিতেই চলবেই—এক্সেপশন ঘটুক বা না ঘটুক, এমনকি try বা except-এর ভেতর return স্টেটমেন্ট থাকলেও finally নিশ্চিতভাবে চালিত হয়। ডাটাবেস সংযোগ বিচ্ছিন্ন করা বা হার্ডওয়্যার লক মুক্ত করার মতো ক্লিনআপ কাজে এটি অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def simulate_database_session(query):
    print("1. [Database] Opening connection pool")
    try:
        if query == "CRASH":
            raise ConnectionResetError("Remote server terminated connection abruptly")
        print("2. [Database] Executed query successfully")
        return "QUERY_OK"
    except ConnectionResetError as err:
        print(f"2. [Database Error] Handled error: {err}")
        return "QUERY_FAILED"
    finally:
        # GUARANTEED execution even after returns!
        print("3. [Database] Connection closed cleanly in finally block.")

print("Session A:")
res_a = simulate_database_session("SELECT * FROM users")

print("\nSession B:")
res_b = simulate_database_session("CRASH")

# Output:
# Session A:
# 1. [Database] Opening connection pool
# 2. [Database] Executed query successfully
# 3. [Database] Connection closed cleanly in finally block.
# 
# Session B:
# 1. [Database] Opening connection pool
# 2. [Database] Handled error: Remote server terminated connection abruptly
# 3. [Database] Connection closed cleanly in finally block.`,
      caption: {
        en: 'finally executes without fail, even when return statements are issued inside try or except.',
        bn: 'try বা except-এ return স্টেটমেন্ট থাকলেও finally ব্লক নিশ্চিতভাবে নির্বাহিত হয়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Raising Exceptions Manually: The raise Keyword', bn: '৭. নিজে থেকে এরর তৈরি: raise কিওয়ার্ডের ব্যবহার' } },
    {
      type: 'para',
      text: {
        en: 'You can trigger exceptions manually using the raise keyword followed by an exception instance. This is essential for verifying API preconditions, enforcing domain boundaries, and failing fast when invalid parameters are received.',
        bn: 'পাইথনে কোনো শর্ত ভঙ্গ হলে raise কিওয়ার্ড দিয়ে ইচ্ছাকৃতভাবে এক্সেপশন তৈরি করা যায়। এপিআই-এর পূর্বশর্ত যাচাই করতে, সঠিক মান নিশ্চিত করতে এবং ভুল প্যারামিটার পেলে দ্রুত এরর প্রদান করে সিস্টেমকে নিরাপদ রাখতে এটি ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `def set_user_privilege(role):
    allowed_roles = {"admin", "editor", "viewer"}
    
    if role not in allowed_roles:
        # Fail-fast by raising a standard exception
        raise ValueError(f"Invalid role '{role}'. Allowed roles: {allowed_roles}")
    
    return f"Privilege granted for role: {role}"

# Valid assignment
print(set_user_privilege("admin"))

# Invalid assignment demonstration
try:
    set_user_privilege("super_user")
except ValueError as e:
    print("Caught validation error:", e)

# Output:
# Privilege granted for role: admin
# Caught validation error: Invalid role 'super_user'. Allowed roles: {'viewer', 'editor', 'admin'}`,
      caption: {
        en: 'raise halts execution immediately when business logic conditions are violated.',
        bn: 'শর্ত পূরণ না হলে raise সাথে সাথে নির্বাহ থামিয়ে এরর রিপোর্ট করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Creating Custom Exception Classes', bn: '৮. কাস্টম এক্সেপশন ক্লাস তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'In production codebases, generic exceptions (like ValueError) are too ambiguous. Custom exception classes inherit from the built-in Exception class, allowing application layers to catch domain-specific errors without catching unrelated system bugs.',
        bn: 'বড় সফটওয়্যার প্রজেক্টে সাধারণ ValueError খুব অস্পষ্ট হতে পারে। পাইথনের বিল্ট-ইন Exception ক্লাসকে ইনহেরিট করে কাস্টম এক্সেপশন ক্লাস তৈরি করা হয়, যার ফলে অ্যাপ্লিকেশনের নিজস্ব ব্যবসায়িক ত্রুটিগুলো অন্য কোনো সিস্টেম এররের সাথে গুলিয়ে না ফেলে নির্ভুলভাবে ক্যাচ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Base custom exception for our banking system
class BankingError(Exception):
    """Base exception for all domain errors."""
    pass

class InsufficientFundsError(BankingError):
    def __init__(self, balance, required_amount):
        self.shortage = required_amount - balance
        super().__init__(f"Shortage of \${self.shortage}: balance is \${balance}, needed \${required_amount}")

def withdraw_money(balance, amount):
    if amount > balance:
        raise InsufficientFundsError(balance, amount)
    return balance - amount

try:
    withdraw_money(100, 350)
except InsufficientFundsError as err:
    print("Custom Error Caught:", err)
    print("Shortage amount needed:", err.shortage)

# Output:
# Custom Error Caught: Shortage of $250: balance is $100, needed $350
# Shortage amount needed: 250`,
      caption: {
        en: 'Custom exceptions provide rich domain context and clean hierarchical error handling.',
        bn: 'কাস্টম এক্সেপশন প্রাতিষ্ঠানিক ডোমেইনের ত্রুটিগুলোকে সুস্পষ্ট তথ্যের সাথে পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Exception Chaining: Tracking Root Causes with raise ... from', bn: '৯. এক্সেপশন চেইনিং: raise ... from দিয়ে আসল কারণ সংরক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'When catching a low-level error (like a socket timeout) and translating it into a high-level domain error (like DatabaseConnectionFailed), use raise HighLevelError from original_error to preserve the root cause in the traceback (__cause__ attribute).',
        bn: 'যখন কোনো লো-লেভেল এররকে (যেমন সকেট টাইমআউট) বদলে হাই-লেভেল অ্যাপ্লিকেশন এররে রূপান্তর করা হয়, তখন raise HighLevelError from original_error সিনট্যাক্স ব্যবহার করলে ট্রেসব্যাকে মূল ত্রুটির হিস্টোরি (__cause__) অটুট থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class ServiceUnavailableError(Exception):
    pass

def query_payment_gateway():
    try:
        # Simulate network failure
        int("invalid_network_byte")
    except ValueError as original_error:
        # Chain original error into high-level service error
        raise ServiceUnavailableError("Billing Gateway is offline") from original_error

try:
    query_payment_gateway()
except ServiceUnavailableError as service_err:
    print("Caught high-level error:", service_err)
    print("Original root cause was:", repr(service_err.__cause__))

# Output:
# Caught high-level error: Billing Gateway is offline
# Original root cause was: ValueError("invalid literal for int() with base 10: 'invalid_network_byte'")`,
      caption: {
        en: 'raise ... from preserves the complete forensic causal history across software boundaries.',
        bn: 'raise ... from সফটওয়্যারের বিভিন্ন স্তরের মাঝে আসল ত্রুটির পুরো ইতিহাস সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Context Managers: The Pythonic with Statement', bn: '১০. কনটেক্সট ম্যানেজার: পাইথোনিক with স্টেটমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The with statement abstracts the entire try-finally cleanup pattern via Context Managers. Objects implementing __enter__() and __exit__() guarantee cleanup: files close, locks release, and connections roll back automatically even if an exception occurs mid-block.',
        bn: 'with স্টেটমেন্ট কনটেক্সট ম্যানেজারের সাহায্যে try-finally প্যাটার্নকে অত্যন্ত সংক্ষিপ্ত ও মার্জিত রূপ দেয়। যেসব অবজেক্টে __enter__() এবং __exit__() মেথড থাকে, তারা ব্লকের ভেতরে এরর হলেও স্বয়ংক্রিয়ভাবে ফাইল বন্ধ করা বা সংযোগ রিলিজ করার মতো ক্লিনআপ কাজগুলো নিশ্চিত করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Creating a custom Context Manager class
class DatabaseTransaction:
    def __enter__(self):
        print("-> [DB] Transaction started (BEGIN TRANSACTION)")
        return self
    
    def __exit__(self, exc_type, exc_val, exc_tb):
        if exc_type:
            print(f"-> [DB] Exception occurred ({exc_type.__name__})! Performing ROLLBACK.")
            return True # Suppress exception to handle cleanly
        print("-> [DB] Completed normally! Performing COMMIT.")

# Using the context manager with the 'with' keyword:
with DatabaseTransaction():
    print("   [Query] Inserting customer records...")
    # Clean exit triggers COMMIT

print("\nSimulating failure during transaction:")
with DatabaseTransaction():
    print("   [Query] Executing risky balance transfer...")
    raise RuntimeError("Power outage during transfer!") # Triggers ROLLBACK in __exit__

# Output:
# -> [DB] Transaction started (BEGIN TRANSACTION)
#    [Query] Inserting customer records...
# -> [DB] Completed normally! Performing COMMIT.
# 
# Simulating failure during transaction:
# -> [DB] Transaction started (BEGIN TRANSACTION)
#    [Query] Executing risky balance transfer...
# -> [DB] Exception occurred (RuntimeError)! Performing ROLLBACK.`,
      caption: {
        en: 'The with statement delegates setup and teardown cleanup to __enter__ and __exit__ methods.',
        bn: 'with স্টেটমেন্ট রিসোর্স সেটআপ ও ক্লিনআপের দায়িত্ব __enter__ ও __exit__ মেথডে সোপর্দ করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-err-ex1',
      kind: 'predict',
      topic: 'python: Finally execution guarantee',
      question: {
        en: 'If a function has try: return 10 finally: print("Done"), does "Done" print before the function returns to the caller?',
        bn: 'try: return 10 finally: print("Done") থাকলে, ফাংশনটি রিটার্ন করার আগে কি "Done" প্রিন্ট হবে?'
      },
      code: `/* Python finally execution guarantee */
/* def f(): try: return 10 finally: print("Done") */`,
      answer: 'yes',
      accept: ['yes', 'true', 'Done prints', 'yes it prints'],
      hint: {
        en: 'finally executes without fail, even when return is reached.',
        bn: 'return পেলেও finally কোড আগে চালায়।'
      },
      explanation: {
        en: 'The finally block is guaranteed to execute before the function frame exits, even when a return statement is encountered in the try block.',
        bn: 'try ব্লকে return স্টেটমেন্ট থাকলেও ফাংশন থেকে বের হওয়ার ঠিক আগে finally ব্লকটি নিশ্চিতভাবে চালিত হয়।'
      }
    },
    {
      id: 'py-err-ex2',
      kind: 'mcq',
      topic: 'python: The else block condition',
      question: {
        en: 'When does the else block of a try...except...else statement execute?',
        bn: 'try...except...else স্টেটমেন্টে else ব্লকটি কখন চালিত হয়?'
      },
      options: [
        { en: 'Only when the try block executes completely without raising any exceptions', bn: 'কেবল তখনই যখন try ব্লকে কোনো এক্সেপশন না ঘটে সম্পূর্ণ সফলভাবে কাজ শেষ হয়' },
        { en: 'When an error is caught', bn: 'যখন কোনো এরর ধরা পড়ে' },
        { en: 'Always, like finally', bn: 'সব সময়, যেমনটা finally চলে' },
        { en: 'Only on syntax errors', bn: 'কেবল সিনট্যাক্স এরর হলে' }
      ],
      answer: 0,
      hint: {
        en: 'It represents the success path.',
        bn: 'এটি সফল অপারেশনের পথ নির্দেশ করে।'
      },
      explanation: {
        en: 'The else block executes only if the guarded try block ran to completion without raising an exception.',
        bn: 'else ব্লক কেবল তখনই নির্বাহিত হয় যখন try ব্লকের কোনো লাইনে কোনো এক্সেপশন তৈরি হয় না।'
      }
    },
    {
      id: 'py-err-ex3',
      kind: 'mcq',
      topic: 'python: Context manager protocol',
      question: {
        en: 'Which two dunder methods must an object implement to work with the Python with statement?',
        bn: 'পাইথনের with স্টেটমেন্টের সাথে কাজ করতে একটি অবজেক্টে কোন দুটি ডান্ডার মেথড থাকতে হয়?'
      },
      options: [
        { en: '__enter__() and __exit__()', bn: '__enter__() এবং __exit__()' },
        { en: '__open__() and __close__()', bn: '__open__() এবং __close__()' },
        { en: '__start__() and __stop__()', bn: '__start__() এবং __stop__()' },
        { en: '__init__() and __del__()', bn: '__init__() এবং __del__()' }
      ],
      answer: 0,
      hint: {
        en: 'Entering and exiting a context.',
        bn: 'কনটেক্সটে প্রবেশ এবং প্রস্থান।'
      },
      explanation: {
        en: 'Python Context Managers adhere to the protocol defined by __enter__() (executed upon entering the with block) and __exit__() (executed upon leaving the block).',
        bn: 'with স্টেটমেন্টে প্রবেশের সময় __enter__() এবং ব্লক থেকে বের হওয়ার সময় __exit__() মেথড দুটি স্বয়ংক্রিয়ভাবে চালিত হয়।'
      }
    }
  ],
  quiz: {
    id: 'py-errors-quiz',
    title: { en: 'Python Exceptions & Error Handling Quiz', bn: 'পাইথন এক্সেপশন ও এরর হ্যান্ডলিং কুইজ' },
    questions: [
      {
        id: 'eqq1',
        kind: 'mcq',
        topic: 'python: Base class for custom exceptions',
        question: {
          en: 'What standard class should all custom domain exceptions in Python inherit from?',
          bn: 'পাইথনে সব কাস্টম ডোমেইন এক্সেপশনের জন্য কোন স্ট্যান্ডার্ড বেস ক্লাসটি ইনহেরিট করা উচিত?'
        },
        options: [
          { en: 'Exception', bn: 'Exception বেস ক্লাস' },
          { en: 'BaseException', bn: 'BaseException বেস ক্লাস' },
          { en: 'SystemError', bn: 'SystemError ক্লাস' },
          { en: 'ErrorObject', bn: 'ErrorObject ক্লাস' }
        ],
        answer: 0,
        hint: {
          en: 'Standard user errors inherit from Exception, reserving BaseException for system exits.',
          bn: 'ব্যবহারকারী ত্রুটিগুলো Exception থেকে ইনহেরিট করে।'
        },
        explanation: {
          en: 'Custom exceptions should inherit from Exception. Inheriting from BaseException is discouraged because it intercepts system signals like KeyboardInterrupt.',
          bn: 'কাস্টম এক্সেপশনের জন্য সর্বদা Exception ক্লাস ইনহেরিট করতে হয়। BaseException ব্যবহার করলে কিবোর্ড ইন্টারাপ্টও ক্যাচ হয়ে যায়।'
        }
      },
      {
        id: 'eqq2',
        kind: 'mcq',
        topic: 'python: Bare except hazard',
        question: {
          en: 'Why is using a bare except: (without specifying an exception type) considered a dangerous anti-pattern?',
          bn: 'সুনির্দিষ্ট টাইপ ছাড়া কেবল খালি except: ব্যবহার করাকে বিপজ্জনক কেন মনে করা হয়?'
        },
        options: [
          { en: 'It catches system interrupts like KeyboardInterrupt and SystemExit, preventing normal program termination', bn: 'এটি কিবোর্ড ইন্টারাপ্ট (Ctrl+C) ও SystemExit সহ সবকিছু ক্যাচ করে স্বাভাবিক টার্মিনেশন বন্ধ করে দেয়' },
          { en: 'It makes Python code compile slower', bn: 'এটি কোড কম্পাইল ধীর করে' },
          { en: 'It deletes variables from memory', bn: 'এটি মেমোরি থেকে ভেরিয়েবল মুছে দেয়' },
          { en: 'It forces Python to run in debug mode', bn: 'এটি পাইথনকে ডিবাগ মোডে চালায়' }
        ],
        answer: 0,
        hint: {
          en: 'It intercepts Ctrl+C exit commands.',
          bn: 'এটি Ctrl+C এক্সিট কমান্ডও আটকে ফেলে।'
        },
        explanation: {
          en: 'A bare except catches all exceptions including KeyboardInterrupt (Ctrl+C) and SystemExit, blinding diagnostic logs and making scripts impossible to abort from the terminal.',
          bn: 'খালি except সব এক্সেপশন ধরে ফেলে, এমনকি Ctrl+C সিগন্যালও আটকে ফেলে যার ফলে টার্মিনাল থেকে স্ক্রিপ্ট বন্ধ করা দুঃসাধ্য হয়ে পড়ে।'
        }
      },
      {
        id: 'eqq3',
        kind: 'mcq',
        topic: 'python: try except else execution condition',
        question: {
          en: 'Under what condition does the optional else clause attached to a try-except block execute?',
          bn: 'try-except ব্লকের সাথে যুক্ত থাকা ঐচ্ছিক else ক্লজটি কোন শর্তে কার্যকর হয়?'
        },
        options: [
          { en: 'Only when the try block executes to completion without raising any exceptions', bn: 'কেবল তখনই যখন try ব্লকটি কোনো এক্সেপশন না ঘটিয়ে সফলভাবে সম্পন্ন হয়' },
          { en: 'Only when an exception was caught and suppressed', bn: 'যখন এক্সেপশন ধরা পড়ে এবং গোপন করা হয়' },
          { en: 'Before the try block starts executing', bn: 'try ব্লক শুরু হওয়ার আগেই' },
          { en: 'Only when the operating system runs out of memory', bn: 'যখন অপারেটিং সিস্টেমে মেমরি শেষ হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Runs on smooth runs without exceptions.',
          bn: 'কোনো এক্সেপশন ছাড়া স্বাভাবিকভাবে শেষ হলে চলে।'
        },
        explanation: {
          en: 'The else block runs only if the code in the try block runs without raising any exceptions, isolating non-protected logic from exception handling.',
          bn: 'try ব্লকে কোনো সমস্যা বা এক্সেপশন না ঘটলেই কেবল else ব্লকের কোডটি রান করে।'
        }
      },
      {
        id: 'eqq4',
        kind: 'mcq',
        topic: 'python: guaranteed cleanup finally block',
        question: {
          en: 'What guarantee is provided by a finally block in Python exception handling?',
          bn: 'পাইথন এক্সেপশন হ্যান্ডলিংয়ে finally ব্লক কী নিশ্চয়তা প্রদান করে?'
        },
        options: [
          { en: 'It is guaranteed to execute whether an exception occurred, was caught, or was raised again', bn: 'এক্সেপশন ঘটুক বা না ঘটুক, সমাধান হোক বা পুনরায় উত্থাপিত হোক, এটি নিশ্চিতভাবে চলবে' },
          { en: 'It only runs when an unhandled fatal error terminates the program', bn: 'এটি কেবল মারাত্মক এররের সময় চলে' },
          { en: 'It prevents memory leaks by deleting all global variables', bn: 'এটি সব গ্লোবাল ভেরিয়েবল মুছে ফেলে' },
          { en: 'It converts runtime errors into compilation warnings', bn: 'এটি রানটাইম এররকে কম্পাইল ওয়ার্নিংয়ে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Always runs for clean resource teardown.',
          bn: 'রিসোর্স মুক্ত করার জন্য সর্বদা নিশ্চিতভাবে চলে।'
        },
        explanation: {
          en: 'The finally clause always executes before leaving the try-except suite, guaranteeing critical cleanup such as closing file handles or database sockets.',
          bn: 'এক্সেপশন যাই ঘটুক না কেন, finally ব্লক সর্বদা শেষ পর্যন্ত কার্যকর হয়ে ফাইল বা ডাটাবেস সংযোগের মতো রিসোর্স বন্ধ করে।'
        }
      }
    ]
  }
};
