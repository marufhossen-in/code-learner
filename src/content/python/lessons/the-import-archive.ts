import type { Lesson } from '../../../lib/types';

export const importArchiveLesson: Lesson = {
  slug: 'the-import-archive',
  tech: 'python',
  title: {
    en: 'Python Modules, Packages, Pip & Virtual Environments',
    bn: 'পাইথন মডিউল, প্যাকেজ, pip ও ভার্চুয়াল এনভায়রনমেন্ট'
  },
  summary: {
    en: 'Master modular software architecture across 10 structured topics, from file modules to venv isolation. Learn namespacing aliases, standard library essentials, __main__ entrypoints, and sys.path resolution.',
    bn: 'ফাইল মডিউল থেকে শুরু করে venv আইসোলেশন পর্যন্ত 10 টি বিষয়ে মডিউলার আর্কিটেকচার আয়ত্ত করুন। জানুন নেমস্পেস অ্যালিয়াস, স্ট্যান্ডার্ড লাইব্রেরি, __main__ এন্ট্রি-পয়েন্ট এবং sys.path রেজোলিউশন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Modules as Standalone Files: import and from ... import', bn: '১. স্বতন্ত্র ফাইল হিসেবে মডিউল: import ও from ... import' } },
    {
      type: 'para',
      text: {
        en: 'A module is simply a Python source file (.py) holding reusable functions, variables, and classes. External scripts bring this code into memory using the import statement. You can pull in the entire namespace (import math) or selectively load specific members (from math import sqrt, pi).',
        bn: 'পাইথনে প্রতিটি .py ফাইলই একটি স্বতন্ত্র মডিউল, যার ভেতরে ভেরিয়েবল, ফাংশন বা ক্লাস সংরক্ষিত থাকে। অন্য ফাইল থেকে এদের যুক্ত করতে import স্টেটমেন্ট লেখা হয়। পুরো নেইমস্পেসটি আনা যায় (import math) অথবা বাছাই করে নির্দিষ্ট উপাদান লোড করা যায় (from math import sqrt, pi)।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Method 1: Full module import (preserves namespace context)
import math
print("Square root via module:", math.sqrt(64)) # 8.0

# Method 2: Selective member import (direct symbol access)
from math import pi, floor
print("Floor calculation:", floor(pi)) # 3

# Avoid wildcard imports (from math import *) because they pollute the local namespace!

# Output:
# Square root via module: 8.0
# Floor calculation: 3`,
      caption: {
        en: 'Explicit imports keep namespaces organized and avoid accidental name collisions.',
        bn: 'সুনির্দিষ্ট ইমপোর্ট নেমস্পেস পরিষ্কার রাখে এবং নামের সংঘর্ষ এড়ায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Module Aliasing: Clean Namespaces with as', bn: '২. মডিউল অ্যালিয়াসিং: as কিওয়ার্ড দিয়ে সহজ নাম প্রদান' } },
    {
      type: 'para',
      text: {
        en: 'The as keyword assigns an alias to an imported module or function. This is standard industry convention for popular libraries with lengthy names, such as aliasing pandas to pd, numpy to np, or resolving name collisions between two functions from different modules.',
        bn: 'ইমপোর্ট করা কোনো মডিউল বা ফাংশনের নাম সংক্ষিপ্ত করতে as কিওয়ার্ড দিয়ে নতুন অ্যালিয়াস দেওয়া হয়। দীর্ঘ নামের লাইব্রেরির জন্য এটি বিশ্বব্যাপী স্বীকৃত নিয়ম, যেমন pandas কে pd বা numpy কে np লেখা। এটি দুটি ভিন্ন মডিউলের একই নামের ফাংশনের মধ্যে দ্বন্দ্বও মেটায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Standard industry aliases
import datetime as dt
import collections as col

# Resolving naming collisions cleanly
from math import gcd as math_gcd

current_utc = dt.datetime.now(dt.timezone.utc)
print("Current year via alias:", current_utc.year)
print("GCD calculation:", math_gcd(48, 18))

# Output:
# Current year via alias: 2026
# GCD calculation: 6`,
      caption: {
        en: 'Aliasing with as creates compact, collision-free identifiers for imported symbols.',
        bn: 'as দিয়ে অ্যালিয়াস তৈরি করলে কোড সংক্ষিপ্ত হয় এবং নামের সংঘর্ষ দূর হয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Namespace Introspection: Exploring Modules with dir()', bn: '৩. নেমস্পেস পরিদর্শন: dir() দিয়ে মডিউলের ক্ষমতা জানা' } },
    {
      type: 'para',
      text: {
        en: 'The built-in dir() function inspects any module or object, returning a sorted list of all defined attributes, functions, and classes. It is an indispensable tool for interactive debugging and discovering available library methods.',
        bn: 'পাইথনের বিল্ট-ইন dir() ফাংশন যেকোনো মডিউল বা অবজেক্টের ভেতরের সমস্ত অ্যাট্রিবিউট, ফাংশন ও ক্লাসের তালিকা সাজিয়ে তুলে ধরে। ডিবাগিংয়ের সময় বা নতুন কোনো লাইব্রেরিতে কী কী মেথড আছে তা খুঁজে বের করতে এটি সবচেয়ে কার্যকর উপায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `import math

# Inspect all symbols exported by the math module
all_math_symbols = dir(math)

# Filter out internal dunders (prefixed with '__')
public_functions = [sym for sym in all_math_symbols if not sym.startswith("__")]

print("Total symbols in math:", len(all_math_symbols))
print("Sample public mathematical functions:", public_functions[:5])

# Output:
# Total symbols in math: 44
# Sample public mathematical functions: ['acos', 'acosh', 'asin', 'asinh', 'atan']`,
      caption: {
        en: 'dir() inspects the internal symbol table of any imported Python module.',
        bn: 'dir() যেকোনো পাইথন মডিউলের ভেতরের সমস্ত ফাংশন ও বৈশিষ্ট্যের তালিকা দেখায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Standard Library Powerhouses: json, random, datetime, and os File Management', bn: '৪. স্ট্যান্ডার্ড লাইব্রেরির রত্ন: json, random, datetime ও os ফাইল ম্যানেজমেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'Python ships "batteries included" with robust built-in modules: json serializes dictionaries (dumps/loads); random produces randomized samples; datetime handles calendar times. And the os module provides safe operating system interfaces to check files (os.path.exists) and delete files (os.remove).',
        bn: 'পাইথনের সাথে প্রচুর দরকারি মডিউল আগে থেকেই থাকে: json মডিউল ডিকশনারিকে স্ট্রিংয়ে রূপান্তর (dumps/loads) করে; random এলোমেলো সংখ্যা তৈরি করে; datetime সময় পরিচালনা করে। আর os মডিউল ফাইল পরীক্ষা (os.path.exists) ও ফাইল মুছে ফেলার (os.remove) মতো অপারেটিং সিস্টেম ইন্টারফেস দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `import json
import random
import os

# 1. JSON Serialization and Deserialization
payload = {"user": "sakib", "score": 98, "active": True}
json_string = json.dumps(payload)
print("Serialized JSON string:", json_string)

parsed_dict = json.loads(json_string)
print("Parsed back to dict score:", parsed_dict["score"])

# 2. Random choices
dice_roll = random.choice([1, 2, 3, 4, 5, 6])
print("Random dice outcome:", dice_roll)

# 3. File verification and deletion via os module
sample_filepath = "temp_cache.log"
if os.path.exists(sample_filepath):
    os.remove(sample_filepath)
    print("Deleted obsolete temp log file successfully.")
else:
    print("Log check: File does not exist yet.")

# Output:
# Serialized JSON string: {"user": "sakib", "score": 98, "active": true}
# Parsed back to dict score: 98
# Random dice outcome: 4
# Log check: File does not exist yet.`,
      caption: {
        en: 'Built-in modules handle JSON data swapping, random generation, and OS file deletion.',
        bn: 'বিল্ট-ইন মডিউল JSON ডেটা, র্যান্ডম অপারেশন ও OS ফাইল ডিলিট করার সুবিধা দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The if __name__ == "__main__": Entry Point Idiom', bn: '৫. if __name__ == "__main__": এন্ট্রি-পয়েন্ট প্যাটার্ন' } },
    {
      type: 'para',
      text: {
        en: 'When a Python file is run directly (python script.py), Python sets its internal __name__ variable to "__main__". When the same file is imported by another script, __name__ is set to the file module name. Wrapping executable logic inside if __name__ == "__main__": ensures code runs only when executed standalone, not when imported.',
        bn: 'যখন কোনো ফাইল সরাসরি টার্মিনাল থেকে চালানো হয় (python script.py), পাইথন তার ইন্টারনাল __name__ ভেরিয়েবলে "__main__" সেট করে দেয়। আর যদি সেই ফাইলটি অন্য কোনো স্ক্রিপ্ট থেকে import করা হয়, তখন তার নাম হয় সেই ফাইলের মডিউল নাম। এই শর্তটি দিয়ে কোড আটকালে ফাইল ইমপোর্ট করার সময় অপ্রয়োজনীয় কোড স্বয়ংক্রিয়ভাবে চলা বন্ধ থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# File: payment_calculator.py
def calculate_vat(amount):
    return amount * 0.15

# Entry point protection:
if __name__ == "__main__":
    # This block runs ONLY when executed directly from the terminal!
    # If imported elsewhere, this test block is skipped completely!
    test_amount = 1000
    print(f"Self-test VAT on {test_amount}: {calculate_vat(test_amount)}")

# Output:
# Self-test VAT on 1000: 150.0`,
      caption: {
        en: 'The __name__ idiom enables a Python file to act both as a reusable module and a standalone CLI script.',
        bn: '__name__ প্যাটার্ন একটি ফাইলকে একই সাথে লাইব্রেরি এবং সরাসরি স্ক্রিপ্ট হিসেবে কাজ করতে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Python Packages and the Role of __init__.py', bn: '৬. পাইথন প্যাকেজ ও __init__.py ফাইলের ভূমিকা' } },
    {
      type: 'para',
      text: {
        en: 'A Package is a directory containing multiple module files (.py). Historically, every package required an __init__.py file to be recognized by Python. Today, __init__.py executes when the package directory is imported, serving as the central hub to expose public APIs and define __all__ export lists.',
        bn: 'প্যাকেজ হলো একটি ফোল্ডার যার ভেতরে একাধিক মডিউল ফাইল (.py) থাকে। ঐতিহাসিকভাবে প্যাকেজ চেনার জন্য ফোল্ডারে __init__.py ফাইল থাকা বাধ্যতামূলক ছিল। বর্তমানে ফোল্ডারটি ইমপোর্ট হওয়ার সময় __init__.py ফাইলটি চালিত হয় এবং এর ভেতর থেকেই প্যাকেজের পাবলিক এপিআই ও __all__ লিস্ট সুসংগঠিত করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Directory Structure:
# my_app/
# ├── __init__.py        <- Package entry initialization
# ├── auth.py            <- Sub-module
# └── database.py        <- Sub-module

# Inside my_app/__init__.py:
# from .auth import login, logout
# from .database import connect_db
# __all__ = ["login", "logout", "connect_db"]

# Consumer code can now import cleanly from the top-level package:
# from my_app import login, connect_db`,
      caption: {
        en: '__init__.py initializes package directories and provides clean top-level export namespaces.',
        bn: '__init__.py প্যাকেজ ফোল্ডার চালু করে সুন্দর টপ-লেভেল এক্সপোর্ট নেমস্পেস প্রদান করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. How Python Finds Code: The sys.path Search Order', bn: '৭. পাইথন কীভাবে কোড খোঁজে: sys.path রেজোলিউশন ক্রম' } },
    {
      type: 'para',
      text: {
        en: 'When you run import foo, Python searches directories in sys.path in strict order: 1) The directory of the executing script; 2) The PYTHONPATH environment variable; 3) Standard library installation paths; 4) Third-party site-packages. If not found in any path, Python raises ModuleNotFoundError.',
        bn: 'যখন কোনো মডিউল import করা হয়, পাইথন নির্দিষ্ট ক্রমে sys.path ফোল্ডারগুলোতে অনুসন্ধান চালায়: ১) বর্তমান স্ক্রিপ্ট যে ডিরেক্টরিতে আছে; ২) সিস্টেমের PYTHONPATH ভেরিয়েবল; ৩) পাইথনের স্ট্যান্ডার্ড লাইব্রেরি পাথ; ৪) থার্ড-পার্টি site-packages ফোল্ডার। কোথাও না পেলে ModuleNotFoundError ঘটে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `import sys

print("Total resolution search directories:", len(sys.path))
print("1. Working Directory (Highest Priority):", sys.path[0])

# Programmatically inspecting standard search roots
has_site_packages = any("site-packages" in p for p in sys.path)
print("Third-party site-packages included in path:", has_site_packages)

# Output:
# Total resolution search directories: 6
# 1. Working Directory (Highest Priority): /home/user/project
# Third-party site-packages included in path: True`,
      caption: {
        en: 'sys.path lists the sequential directory chain Python searches to resolve imports.',
        bn: 'sys.path সেই ডিরেক্টরিগুলোর ক্রম তালিকা নির্দেশ করে যেখানে পাইথন মডিউল খোঁজে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Circular Import Deadlocks: Root Causes and Remedies', bn: '৮. সার্কুলার ইমপোর্ট সমস্যা ও এর স্থায়ী সমাধান' } },
    {
      type: 'para',
      text: {
        en: 'A circular dependency occurs when file A references file B, while script B simultaneously requires file A. At load time, the secondary file accesses an attribute before the primary file finishes executing its definition pass, triggering an AttributeError. You can remedy this trap by restructuring dependencies into a shared helper or using local function-level imports.',
        bn: 'সার্কুলার ডিপেন্ডেন্সি তখন ঘটে যখন ফাইল A ফাইল B-কে যুক্ত করে, আবার ফাইল B সাথে সাথে ফাইল A-কে কল করে। লোড হওয়ার সময় দ্বিতীয় ফাইলটি এমন বৈশিষ্ট্যে হাত দেয় যা প্রথম ফাইলে তখনও সংজ্ঞায়িত হয়নি, ফলে AttributeError বা ImportError দেখা দেয়। শেয়ার্ড হেল্পার তৈরি করে বা ফাংশনের ভেতরে লোকাল ইমপোর্ট ব্যবহার করে এই সমস্যা সমাধান করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# ❌ THE CIRCULAR IMPORT HAZARD:
# File A imports B -> File B imports A -> Deadlock during initial module execution!

# ✅ ARCHITECTURAL REMEDY 1: Extract shared state to common.py
# Both module A and module B import from common.py

# ✅ ARCHITECTURAL REMEDY 2: Defer import inside function body:
def process_order(order_id):
    # Imported lazily when function is invoked, avoiding load-time cycle!
    import invoice_generator 
    return invoice_generator.build(order_id)

print("Lazy function imports break module-level circular dependency loops.")

# Output:
# Lazy function imports break module-level circular dependency loops.`,
      caption: {
        en: 'Moving imports inside function bodies breaks initialization-time circular dependency loops.',
        bn: 'ফাংশনের ভেতরে ইমপোর্ট করলে মডিউল লোড হওয়ার সময় সার্কুলার এরর ঘটে না।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Third-Party Packages: pip, requirements.txt, and PyPI', bn: '৯. থার্ড-পার্টি প্যাকেজ: pip, requirements.txt ও PyPI' } },
    {
      type: 'para',
      text: {
        en: 'pip is Python’s official package installer, downloading pre-built packages from the Python Package Index (PyPI). Projects record exact dependency versions in a requirements.txt file, which other developers install in a single command using pip install -r requirements.txt.',
        bn: 'pip হলো পাইথনের অফিসিয়াল প্যাকেজ ম্যানেজার, যা PyPI অনলাইন রেজিস্ট্রি থেকে সরাসরি প্যাকেজ ডাউনলোড করে ইনস্টল করে। প্রোজেক্টের সমস্ত প্রয়োজনীয় লাইব্রেরি ও তাদের ভার্সন requirements.txt ফাইলে লিখে রাখা হয়, যা pip install -r requirements.txt কমান্ড দিয়ে এক নিমিষে ইনস্টল করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Terminal commands for package management:
# 1. Install a third-party package (e.g. requests HTTP library)
pip install requests

# 2. Freeze all installed packages with exact pinned versions
pip freeze > requirements.txt

# Sample requirements.txt contents:
# requests==2.31.0
# urllib3==2.0.4

# 3. Recreate the exact environment on another machine
pip install -r requirements.txt`,
      caption: {
        en: 'pip freeze pins deterministic dependency versions for reproducible team deployments.',
        bn: 'pip freeze প্রোজেক্টের নির্ভরতা লক করে সবার কম্পিউটারে একই ভার্সন নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Environment Isolation: Python Virtual Environments (venv)', bn: '১০. পরিবেশের সুরক্ষা: পাইথন ভার্চুয়াল এনভায়রনমেন্ট (venv)' } },
    {
      type: 'para',
      text: {
        en: 'Installing packages globally pollutes the system Python and leads to dependency version collisions between projects. A Virtual Environment (created via python -m venv .venv) creates an isolated directory tree with its own Python executable and site-packages, keeping project dependencies strictly separated.',
        bn: 'সরাসরি গ্লোবালি সব প্যাকেজ ইনস্টল করলে বিভিন্ন প্রোজেক্টের মাঝে ভার্সনের সংঘর্ষ তৈরি হয়। ভার্চুয়াল এনভায়রনমেন্ট (python -m venv .venv) প্রতিটি প্রোজেক্টের জন্য সম্পূর্ণ আলাদা একটি পাইথন পরিবেশ ও নিজস্ব site-packages তৈরি করে, যা অন্যান্য প্রোজেক্টের সাথে কোনো দ্বন্দ্ব হতে দেয় না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Create an isolated virtual environment named '.venv'
python -m venv .venv

# Step 2: Activate the environment:
# On Linux / macOS:
source .venv/bin/activate

# On Windows PowerShell:
# .venv\\Scripts\\Activate.ps1

# Step 3: Verify the active Python binary is inside the .venv folder:
which python
# Output: /home/user/project/.venv/bin/python

# Step 4: Deactivate when finished working:
deactivate`,
      caption: {
        en: 'Virtual environments prevent global package conflicts by isolating binaries per project directory.',
        bn: 'ভার্চুয়াল এনভায়রনমেন্ট প্রতি প্রোজেক্টের নিজস্ব ফোল্ডারে লাইব্রেরি আটকে রেখে সিস্টেমকে নিরাপদ রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-imp-ex1',
      kind: 'predict',
      topic: 'python: __name__ value when run directly',
      question: {
        en: 'What is the exact string value of __name__ inside a Python file when it is run directly from the terminal (e.g. python script.py)?',
        bn: 'টার্মিনাল থেকে সরাসরি একটি ফাইল রান করলে (যেমন python script.py) সেই ফাইলের ভেতরে __name__ ভেরিয়েবলের আসল মান কী হয়?'
      },
      code: `/* Python module direct execution entrypoint */
/* print(__name__) */`,
      answer: '__main__',
      accept: ['__main__', '"__main__"', "'__main__'"],
      hint: {
        en: 'It starts and ends with two underscores.',
        bn: 'এর আগে এবং পরে দুটি আন্ডারস্কোর থাকে।'
      },
      explanation: {
        en: 'When a Python script is executed directly as the top-level program, the interpreter assigns the string "__main__" to its __name__ attribute.',
        bn: 'যখন কোনো স্ক্রিপ্ট সরাসরি প্রধান প্রোগ্রাম হিসেবে চালানো হয়, তখন পাইথন তার __name__ অ্যাট্রিবিউটে "__main__" স্ট্রিংটি সেট করে দেয়।'
      }
    },
    {
      id: 'py-imp-ex2',
      kind: 'mcq',
      topic: 'python: Virtual environment creation command',
      question: {
        en: 'Which standard Python command creates a new isolated virtual environment named .venv?',
        bn: '.venv নামে একটি নতুন ভার্চুয়াল এনভায়রনমেন্ট তৈরি করতে কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'python -m venv .venv', bn: 'python -m venv .venv' },
        { en: 'pip install virtualenv-all', bn: 'pip install virtualenv-all' },
        { en: 'python --make-isolated', bn: 'python --make-isolated' },
        { en: 'npm init python-env', bn: 'npm init python-env' }
      ],
      answer: 0,
      hint: {
        en: 'Use the built-in venv module.',
        bn: 'বিল্ট-ইন venv মডিউল ব্যবহার করুন।'
      },
      explanation: {
        en: 'The standard modern command is python -m venv <directory_name>, which generates an isolated Python environment directory tree.',
        bn: 'আধুনিক পাইথনে python -m venv <directory_name> কমান্ডের মাধ্যমে সম্পূর্ণ বিচ্ছিন্ন একটি নিজস্ব পাইথন ফোল্ডার তৈরি হয়।'
      }
    },
    {
      id: 'py-imp-ex3',
      kind: 'mcq',
      topic: 'python: Module search path object',
      question: {
        en: 'Which standard library list defines the directory order Python inspects when resolving import statements?',
        bn: 'মডিউল ইমপোর্ট করার সময় পাইথন কোন অর্ডারে ফোল্ডারগুলোতে অনুসন্ধান চালাবে তা কোন লিস্টে সংরক্ষিত থাকে?'
      },
      options: [
        { en: 'sys.path', bn: 'sys.path' },
        { en: 'os.directories', bn: 'os.directories' },
        { en: 'pathlib.search_chain', bn: 'pathlib.search_chain' },
        { en: 'builtins.lookup_table', bn: 'builtins.lookup_table' }
      ],
      answer: 0,
      hint: {
        en: 'It resides in the sys module.',
        bn: 'এটি sys মডিউলে থাকে।'
      },
      explanation: {
        en: 'sys.path is a list of directory strings specifying the search path for modules, starting with the script current working directory.',
        bn: 'sys.path হলো ডিরেক্টরিগুলোর একটি তালিকা যেখানে পাইথন একের পর এক পাথ যাচাই করে মডিউল খুঁজে বের করে।'
      }
    }
  ],
  quiz: {
    id: 'py-imports-quiz',
    title: { en: 'Python Modules & Environments Quiz', bn: 'পাইথন মডিউল ও এনভায়রনমেন্ট কুইজ' },
    questions: [
      {
        id: 'iqq1',
        kind: 'mcq',
        topic: 'python: Requirements file installation',
        question: {
          en: 'What pip command installs all package dependencies listed inside a requirements.txt file?',
          bn: 'requirements.txt ফাইলে তালিকাভুক্ত সমস্ত লাইব্রেরি ইনস্টল করতে কোন pip কমান্ডটি দিতে হয়?'
        },
        options: [
          { en: 'pip install -r requirements.txt', bn: 'pip install -r requirements.txt কমান্ড' },
          { en: 'pip restore requirements.txt', bn: 'pip restore requirements.txt কমান্ড' },
          { en: 'pip load requirements.txt', bn: 'pip load requirements.txt কমান্ড' },
          { en: 'pip upgrade --all', bn: 'pip upgrade --all কমান্ড' }
        ],
        answer: 0,
        hint: {
          en: 'The flag is -r for requirements.',
          bn: 'requirements এর জন্য ফ্ল্যাগ হলো -r।'
        },
        explanation: {
          en: 'The -r flag instructs pip to read dependencies line-by-line from the specified requirements file and install them.',
          bn: 'pip install -r requirements.txt কমান্ডটি ফাইল থেকে প্রতিটি প্যাকেজের নাম ও ভার্সন পড়ে নিয়ে স্বয়ংক্রিয়ভাবে ইনস্টল করে।'
        }
      },
      {
        id: 'iqq2',
        kind: 'mcq',
        topic: 'python: Package initialization file',
        question: {
          en: 'What special file marks a directory as an importable Python package and initializes package-level exports?',
          bn: 'কোন বিশেষ ফাইলটি একটি ডিরেক্টরিকে ইমপোর্টযোগ্য পাইথন প্যাকেজ হিসেবে চিহ্নিত করে এবং প্যাকেজ এক্সপোর্ট নিয়ন্ত্রণ করে?'
        },
        options: [
          { en: '__init__.py', bn: '__init__.py ফাইল' },
          { en: '__main__.py', bn: '__main__.py ফাইল' },
          { en: 'package.json', bn: 'package.json ফাইল' },
          { en: 'index.py', bn: 'index.py ফাইল' }
        ],
        answer: 0,
        hint: {
          en: 'It initializes the package.',
          bn: 'এটি প্যাকেজ ইনিশিয়ালাইজ করে।'
        },
        explanation: {
          en: '__init__.py is executed whenever a package directory is imported, allowing developers to define package namespaces and expose public APIs.',
          bn: '__init__.py প্যাকেজ ফোল্ডারটি ইমপোর্ট করার সময় চালিত হয় এবং প্যাকেজের পাবলিক এপিআই সাজাতে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'iqq3',
        kind: 'mcq',
        topic: 'python: script entrypoint name idiom',
        question: {
          en: 'What is the runtime purpose of the if __name__ == "__main__": guard in Python scripts?',
          bn: 'পাইথন স্ক্রিপ্টে if __name__ == "__main__": গার্ড ব্যবহারের মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'It ensures enclosed logic runs only when executed directly, not when imported as an external module', bn: 'এটি নিশ্চিত করে যে ভেতরের কোড কেবল ফাইলটি সরাসরি রান করলেই চলবে, মডিউল হিসেবে ইমপোর্ট করলে নয়' },
          { en: 'It hides internal functions from the operating system', bn: 'এটি ওএস থেকে ফাংশন আড়াল করে' },
          { en: 'It converts the script into an executable binary', bn: 'এটি স্ক্রিপ্টকে বাইনারিতে রূপান্তর করে' },
          { en: 'It guarantees internet connectivity before execution', bn: 'এটি ইন্টারনেট সংযোগ পরীক্ষা করে' }
        ],
        answer: 0,
        hint: {
          en: 'Direct script entrypoint vs module import guard.',
          bn: 'সরাসরি রান বনাম মডিউল ইমপোর্টের সুরক্ষা।'
        },
        explanation: {
          en: 'Python sets the special __name__ variable to "__main__" only when the script is directly executed from the command line, preventing unwanted execution during imports.',
          bn: 'যখন কোনো স্ক্রিপ্ট সরাসরি রান করা হয় কেবল তখনই __name__ এর মান "__main__" হয়, ফলে অন্য কোথাও ইমপোর্ট করার সময় অবাঞ্ছিত রান বন্ধ থাকে।'
        }
      },
      {
        id: 'iqq4',
        kind: 'mcq',
        topic: 'python: virtual environment dependency isolation',
        question: {
          en: 'Why is isolating project dependencies inside a virtual environment (python -m venv) industry best practice?',
          bn: 'ভার্চুয়াল এনভায়রনমেন্টের (python -m venv) সাহায্যে প্রজেক্টের ডিপেন্ডেন্সি আলাদা রাখা কেন সেরা অভ্যাস?'
        },
        options: [
          { en: 'It prevents library version conflicts between projects and avoids polluting system-wide Python packages', bn: 'এটি বিভিন্ন প্রজেক্টের প্যাকেজ ভার্সনের মধ্যে সংঘাত এড়ায় এবং গ্লোবাল পাইথন সিস্টেম সুরক্ষিত রাখে' },
          { en: 'It increases CPU clock speeds automatically', bn: 'এটি প্রসেসরের গতি বাড়ায়' },
          { en: 'It automatically corrects syntax and logic errors', bn: 'এটি স্বয়ংক্রিয়ভাবে সিনট্যাক্স এরর শুধরে দেয়' },
          { en: 'It eliminates the need for RAM memory storage', bn: 'এটি মেমরির প্রয়োজনীয়তা দূর করে' }
        ],
        answer: 0,
        hint: {
          en: 'Hermetic dependency isolation.',
          bn: 'স্বতন্ত্র ও নিরাপদ প্যাকেজ আইসোলেশন।'
        },
        explanation: {
          en: 'Virtual environments create self-contained directory trees with their own Python interpreter and site-packages, preventing conflicting package versions across separate projects.',
          bn: 'ভার্চুয়াল এনভায়রনমেন্ট প্রতিটি প্রজেক্টের জন্য সম্পূর্ণ নিজস্ব লাইব্রেরি ফোল্ডার তৈরি করে, ফলে ভিন্ন প্রজেক্টের প্যাকেজ ভার্সনের মধ্যে কোনো গোলযোগ ঘটে না।'
        }
      }
    ]
  }
};
