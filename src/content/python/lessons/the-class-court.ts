import type { Lesson } from '../../../lib/types';

export const classCourtLesson: Lesson = {
  slug: 'the-class-court',
  tech: 'python',
  title: {
    en: 'Python Classes, Object-Oriented Programming, Inheritance & Dunders',
    bn: 'পাইথন ক্লাস, অবজেক্ট ওরিয়েন্টেড প্রোগ্রামিং, ইনহেরিট্যান্স ও ডান্ডার'
  },
  summary: {
    en: 'Master object-oriented design in Python across 10 structured topics, from class blueprints to dunders. Learn __init__ and self, class vs instance state, encapsulation with name mangling, and inheritance with super().',
    bn: 'ক্লাস ব্লুপ্রিন্ট থেকে শুরু করে ডান্ডার মেথড পর্যন্ত 10 টি বিষয়ে অবজেক্ট ওরিয়েন্টেড ডিজাইন আয়ত্ত করুন। জানুন __init__ ও self, ক্লাস বনাম ইনস্ট্যান্স স্টেট, নেম ম্যাংগলিং এবং super() দিয়ে ইনহেরিট্যান্স।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'python-dunders-and-tooling',
    title: {
      en: 'OOP Dunders, Arrays, Dates & Pip: Operator Overloading & Packaging',
      bn: 'OOP ডান্ডার, অ্যারে, তারিখ ও Pip: অপারেটর ওভারলোডিং ও প্যাকেজিং'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Classes and Objects: Blueprints and Instances', bn: '১. ক্লাস ও অবজেক্ট: ব্লুপ্রিন্ট এবং ইনস্ট্যান্স' } },
    {
      type: 'para',
      text: {
        en: 'A Class is a user-defined blueprint from which individual Objects (instances) are created. Classes bundle data state (attributes) and behavior (methods) into a cohesive unit. In Python, class names follow the PascalCase convention (e.g. BankAccount, DatabaseConnector).',
        bn: 'ক্লাস হলো ব্যবহারকারী-নির্ধারিত একটি ব্লুপ্রিন্ট বা নকশা যা থেকে বাস্তব অবজেক্ট (বা ইনস্ট্যান্স) তৈরি করা হয়। একটি ক্লাসের ভেতরে ডেটা (অ্যাট্রিবিউট) এবং কাজ (মেথড) একসাথে আবদ্ধ থাকে। পাইথনে ক্লাসের নাম লেখার সময় PascalCase নিয়ম (যেমন BankAccount) মেনে চলা হয়।'
      }
    },
    {
      type: 'visual',
      id: 'py'
    },
    {
      type: 'code',
      lang: 'python',
      code: `class UserAccount:
    """Blueprint for platform users."""
    pass

# Instantiating distinct objects from the same class blueprint:
user1 = UserAccount()
user2 = UserAccount()

print("Instance 1:", user1)
print("Instance 2:", user2)
print("Are instances distinct:", user1 is not user2) # True (Separate heap memory allocations!)

# Output:
# Instance 1: <__main__.UserAccount object at 0x...>
# Instance 2: <__main__.UserAccount object at 0x...>
# Are instances distinct: True`,
      caption: {
        en: 'Instantiating a class allocates distinct memory locations on the heap for each object.',
        bn: 'ক্লাস থেকে নতুন অবজেক্ট তৈরির সময় মেমোরিতে প্রতিটি অবজেক্টের জন্য আলাদা জায়গা বরাদ্দ হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The __init__() Constructor and the Explicit self Parameter', bn: '২. __init__() কনস্ট্রাক্টর ও সুস্পষ্ট self প্যারামিটার' } },
    {
      type: 'para',
      text: {
        en: 'The __init__() method initializes a newly created object with custom state attributes. The first parameter, self, explicitly refers to the specific instance being operated on. Python automatically passes the instance reference as the first argument when methods are called.',
        bn: '__init__() হলো পাইথনের ইনিশিয়ালাইজার মেথড যা নতুন অবজেক্ট তৈরির সময় তার প্রাথমিক বৈশিষ্ট্যগুলো ঠিক করে দেয়। এর প্রথম প্যারামিটার self সরাসরি বর্তমান অবজেক্টটিকে নির্দেশ করে। মেথড কল করার সময় পাইথন স্বয়ংক্রিয়ভাবে বর্তমান ইনস্ট্যান্সটিকে প্রথম আর্গুমেন্ট হিসেবে পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class Developer:
    def __init__(self, name, primary_language, years_exp):
        # Binding attributes directly to this instance:
        self.name = name
        self.language = primary_language
        self.experience = years_exp

dev1 = Developer("Tanvir", "Python", 4)
dev2 = Developer("Nadia", "TypeScript", 6)

print(f"{dev1.name} specializes in {dev1.language} ({dev1.experience} years)")
print(f"{dev2.name} specializes in {dev2.language} ({dev2.experience} years)")

# Output:
# Tanvir specializes in Python (4 years)
# Nadia specializes in TypeScript (6 years)`,
      caption: {
        en: 'self anchors state attributes exclusively to the calling instance.',
        bn: 'self অ্যাট্রিবিউটগুলোকে সরাসরি বর্তমান অবজেক্টের সাথে যুক্ত রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Instance Methods and State Mutation', bn: '৩. ইনস্ট্যান্স মেথড ও স্টেট পরিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'Instance methods are functions defined inside a class that take self as their first argument. They can inspect and mutate the object’s internal attributes, enforcing business logic rules before allowing state modifications.',
        bn: 'ইনস্ট্যান্স মেথড হলো ক্লাসের ভেতরের ফাংশন যার প্রথম প্যারামিটার বাধ্যতামূলকভাবে self হয়। এরা অবজেক্টের অভ্যন্তরীণ ডেটা পড়তে ও পরিবর্তন করতে পারে, এবং ডেটা বদলানোর আগে নিয়ম বা শর্ত যাচাই করে অবজেক্টকে সুরক্ষিত রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class BankAccount:
    def __init__(self, owner, starting_balance=0):
        self.owner = owner
        self.balance = starting_balance
    
    def deposit(self, amount):
        if amount <= 0:
            raise ValueError("Deposit amount must be positive")
        self.balance += amount
        return self.balance
    
    def withdraw(self, amount):
        if amount > self.balance:
            raise ValueError("Insufficient balance")
        self.balance -= amount
        return self.balance

account = BankAccount("Sakib", 500)
account.deposit(250)
account.withdraw(100)
print(f"Owner: {account.owner}, Remaining Balance: \${account.balance}")

# Output:
# Owner: Sakib, Remaining Balance: $650`,
      caption: {
        en: 'Instance methods protect object state by verifying constraints before updating attributes.',
        bn: 'ইনস্ট্যান্স মেথড ডেটা পরিবর্তনের আগে শর্ত যাচাই করে স্টেট সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. String Representations: __str__() vs __repr__()', bn: '৪. স্ট্রিং উপস্থাপনা: __str__() বনাম __repr__()' } },
    {
      type: 'para',
      text: {
        en: 'Without custom string representations, printing an object outputs an unhelpful memory address. __str__() provides human-readable text for end-users (invoked by print() and str()). __repr__() provides an unambiguous, detailed representation for developers and debuggers (invoked by interactive shells).',
        bn: 'ক্লাসে কোনো স্ট্রিং মেথড না থাকলে অবজেক্ট প্রিন্ট করলে শুধু মেমোরি অ্যাড্রেস দেখায়। __str__() সাধারণ ব্যবহারকারীর জন্য সুন্দর ও বোধগম্য টেক্সট প্রদান করে (print() বা str() কল করলে চলে)। আর __repr__() ডেভেলপারদের ডিবাগিংয়ের জন্য অবজেক্টের সুনির্দিষ্ট গঠন প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class Product:
    def __init__(self, name, price):
        self.name = name
        self.price = price
    
    def __str__(self):
        # User-friendly display format
        return f"{self.name} (\${self.price})"
    
    def __repr__(self):
        # Unambiguous code representation for developers
        return f"Product(name='{self.name}', price={self.price})"

item = Product("Mechanical Keyboard", 85)

print("str() display:", str(item))   # Invokes __str__
print("repr() debug:", repr(item))   # Invokes __repr__

# Output:
# str() display: Mechanical Keyboard ($85)
# repr() debug: Product(name='Mechanical Keyboard', price=85)`,
      caption: {
        en: '__str__ targets end users; __repr__ targets developers and debugging tools.',
        bn: '__str__ সাধারণ ব্যবহারকারীর জন্য; __repr__ ডেভেলপার ও ডিবাগিং টুলের জন্য।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Class Variables vs Instance Variables, @classmethod & @staticmethod', bn: '৫. ক্লাস ভেরিয়েবল বনাম ইনস্ট্যান্স ভেরিয়েবল, @classmethod ও @staticmethod' } },
    {
      type: 'para',
      text: {
        en: 'Shared attributes are declared directly within the blueprint body and accessed by all instantiated objects. In contrast, instance fields bind to self inside __init__() and remain unique to each separate record. The @classmethod decorator marks methods that operate on the type itself (receiving cls), while @staticmethod defines utility helpers that touch neither type nor instance state.',
        bn: 'ক্লাস ভেরিয়েবলগুলো সরাসরি বডির ভেতর ঘোষিত হয় এবং তৈরি হওয়া সকল ইনস্ট্যান্সের মাঝে শেয়ার থাকে। বিপরীতে, ইনস্ট্যান্স ভেরিয়েবলগুলো __init__()-এর ভেতর self-এর সাথে যুক্ত হয়ে প্রতিটি অবজেক্টের জন্য সম্পূর্ণ আলাদা থাকে। @classmethod ডেকোরেটর টাইপ-লেভেলের মেথড তৈরি করে (যা cls গ্রহণ করে), আর @staticmethod এমন সহায়ক ফাংশন নির্ধারণ করে যা কোনো স্টেট স্পর্শ করে না।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class Employee:
    # Class Variable: Shared across every employee
    company_name = "TechSolutions Ltd."
    total_headcount = 0
    
    def __init__(self, name):
        # Instance Variable: Unique to this employee
        self.name = name
        Employee.total_headcount += 1
    
    @classmethod
    def get_headcount(cls):
        return f"Total company staff: {cls.total_headcount}"
    
    @staticmethod
    def is_valid_email(email):
        return "@" in email and "." in email

emp1 = Employee("Arif")
emp2 = Employee("Farhana")

print(f"{emp1.name} works at {emp1.company_name}")
print(Employee.get_headcount())
print("Email valid:", Employee.is_valid_email("arif@tech.com"))

# Output:
# Arif works at TechSolutions Ltd.
# Total company staff: 2
# Email valid: True`,
      caption: {
        en: 'Class variables track shared state across instances; @classmethod receives cls while @staticmethod takes no implicit reference.',
        bn: 'ক্লাস ভেরিয়েবল যৌথ স্টেট ধরে রাখে; @classmethod cls প্যারামিটার নেয় আর @staticmethod কোনো ইমপ্লিসিট রেফারেন্স নেয় না।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Encapsulation: Protected (_) and Private (__) Name Mangling', bn: '৬. এনক্যাপসুলেশন: প্রোটেক্টেড (_) ও প্রাইভেট (__) নেম ম্যাংগলিং' } },
    {
      type: 'para',
      text: {
        en: 'Python enforces encapsulation by convention: a single underscore prefix (_internal) signals a protected attribute meant for internal class use only. A double underscore prefix (__private) triggers Name Mangling, where the Python interpreter rewrites the attribute name to _ClassName__attribute to prevent accidental subclass overrides.',
        bn: 'পাইথনে এনক্যাপসুলেশন কনভেনশনের ওপর নির্ভর করে: একটি আন্ডারস্কোর (_internal) নির্দেশ করে যে এটি ক্লাসের নিজস্ব ব্যবহারের জন্য। আর দুটি আন্ডারস্কোর (__private) দিলে পাইথন নেম ম্যাংগলিং (Name Mangling) করে নামটিকে _ClassName__attribute-এ বদলে দেয় যাতে বাইরে বা সাব-ক্লাস থেকে অনিচ্ছাকৃতভাবে তা ওভাররাইট না হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class SecureVault:
    def __init__(self, vault_id, master_key):
        self.vault_id = vault_id        # Public attribute
        self._audit_log = []            # Protected attribute (convention: do not touch)
        self.__secret_key = master_key  # Private attribute (name-mangled!)
    
    def verify_key(self, attempt):
        return attempt == self.__secret_key

vault = SecureVault(901, "TopSecretPass")

# Public access:
print("Vault ID:", vault.vault_id)

# ❌ Direct private access fails:
# print(vault.__secret_key) # AttributeError: 'SecureVault' object has no attribute '__secret_key'

# How Python mangled the name internally:
print("Mangled access:", vault._SecureVault__secret_key) # Accessible via mangled name!
print("Key check:", vault.verify_key("TopSecretPass"))   # True

# Output:
# Vault ID: 901
# Mangled access: TopSecretPass
# Key check: True`,
      caption: {
        en: 'Double underscore triggers name mangling to protect private attributes from subclass collisions.',
        bn: 'ডাবল আন্ডারস্কোর নেম ম্যাংগলিং করে সাব-ক্লাসের সংঘর্ষ থেকে প্রাইভেট ডেটা রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Python Inheritance and the super() Function', bn: '৭. পাইথন ইনহেরিট্যান্স ও super() ফাংশন' } },
    {
      type: 'para',
      text: {
        en: 'Inheritance enables a Child class to inherit all attributes and methods from a Parent class, promoting code reuse. The child class can extend functionality or override parent methods. The super() function delegates calls up to the parent class, ensuring parent initialization runs correctly.',
        bn: 'ইনহেরিট্যান্স কোনো চাইল্ড ক্লাসকে প্যারেন্ট ক্লাসের সমস্ত বৈশিষ্ট্য ও মেথড পাওয়ার সুযোগ দেয়, যা কোডের পুনর্ব্যবহারযোগ্যতা নিশ্চিত করে। চাইল্ড ক্লাস নতুন ফিচার যোগ করতে পারে বা মেথড বদলে নিতে পারে। super() ফাংশন প্যারেন্ট ক্লাসের কনস্ট্রাক্টর ও মেথডকে চাইল্ডের ভেতর থেকে সঠিকভাবে কল করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class Vehicle:
    def __init__(self, brand, model):
        self.brand = brand
        self.model = model
    
    def get_specs(self):
        return f"{self.brand} {self.model}"

# ElectricCar inherits from Vehicle
class ElectricCar(Vehicle):
    def __init__(self, brand, model, battery_capacity_kwh):
        # Delegate initialization to parent Vehicle class
        super().__init__(brand, model)
        self.battery_kwh = battery_capacity_kwh
    
    # Extending with child-specific method
    def get_range(self):
        return f"Estimated range: {self.battery_kwh * 6} km"

tesla = ElectricCar("Tesla", "Model 3", 60)
print("Vehicle Specs:", tesla.get_specs()) # Inherited from Vehicle!
print("Battery Range:", tesla.get_range()) # Defined in ElectricCar!

# Output:
# Vehicle Specs: Tesla Model 3
# Battery Range: Estimated range: 360 km`,
      caption: {
        en: 'super().__init__() executes parent initialization, allowing clean subclass extensions.',
        bn: 'super().__init__() প্যারেন্ট ক্লাসের কোড নির্বাহ করে সাব-ক্লাসে মসৃণ সম্প্রসারণ ঘটায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Polymorphism and Duck Typing in Python', bn: '৮. পলিমরফিজম ও পাইথনে ডাক টাইপিং (Duck Typing)' } },
    {
      type: 'para',
      text: {
        en: 'Polymorphism allows different classes to share identical method interfaces, enabling unified processing. Python embraces Duck Typing: "If it walks like a duck and quacks like a duck, it is a duck." Functions inspect what methods an object can perform, rather than checking strict inheritance types.',
        bn: 'পলিমরফিজম ভিন্ন ভিন্ন ক্লাসকে একই মেথড ইন্টারফেস ব্যবহারের সুযোগ দেয়। পাইথন ডাক টাইপিংয়ে (Duck Typing) বিশ্বাসী: "যদি কোনো প্রাণী হাঁসের মতো হাঁটে এবং হাঁসের মতো ডাকে, তবে সেটি একটি হাঁস।" অর্থাৎ কোনো ফাংশন অবজেক্টটি কোন ক্লাসের তা না দেখে বরং প্রয়োজনীয় মেথডটি উপস্থিত আছে কি না তা দেখে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class PDFExporter:
    def export(self, data):
        return f"[PDF Format]: Exported {len(data)} records"

class CSVExporter:
    def export(self, data):
        return f"[CSV Format]: Comma-separated {len(data)} records"

# Polymorphic consumer function: Accepts ANY object that has an .export() method!
def generate_report(exporter, dataset):
    return exporter.export(dataset)

records = ["Row 1", "Row 2", "Row 3"]
pdf = PDFExporter()
csv = CSVExporter()

print(generate_report(pdf, records))
print(generate_report(csv, records))

# Output:
# [PDF Format]: Exported 3 records
# [CSV Format]: Comma-separated 3 records`,
      caption: {
        en: 'Duck typing enables polymorphic execution based on interface capabilities rather than rigid hierarchies.',
        bn: 'ডাক টাইপিং ক্লাসের ধরনের চেয়ে মেথডটির কার্যক্ষমতার ওপর ভিত্তি করে পলিমরফিজম চালায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Property Decorators: @property Getters and Setters', bn: '৯. প্রপার্টি ডেকোরেটর: @property গেটার ও সেটার' } },
    {
      type: 'para',
      text: {
        en: 'The @property decorator allows defining methods that can be accessed like normal attributes without parentheses (obj.attr). Defining a companion @attr.setter decorator allows validating and intercepting attribute assignments cleanly.',
        bn: '@property ডেকোরেটর কোনো মেথডকে সাধারণ অ্যাট্রিবিউটের মতো ব্র্যাকেট ছাড়া (obj.attr) পড়ার সুযোগ দেয়। এর সাথে @attr.setter ডেকোরেটর ব্যবহার করে নতুন মান বসানোর সময় শর্ত যাচাই করা যায়, ফলে অবজেক্টে সরাসরি ভুল ডেটা প্রবেশ ঠেকানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class TemperatureSensor:
    def __init__(self, celsius=0):
        self._celsius = celsius # Internal backing attribute
    
    # Getter property
    @property
    def celsius(self):
        return self._celsius
    
    # Setter with validation guard
    @celsius.setter
    def celsius(self, value):
        if value < -273.15: # Absolute zero
            raise ValueError("Temperature cannot be below absolute zero (-273.15°C)")
        self._celsius = value
    
    # Computed read-only property
    @property
    def fahrenheit(self):
        return (self._celsius * 9/5) + 32

sensor = TemperatureSensor(25)
print("Celsius:", sensor.celsius)       # Accessed like a property without ()
print("Fahrenheit:", sensor.fahrenheit) # Computed automatically: 77.0

sensor.celsius = 30 # Triggers setter validation!
print("Updated Fahrenheit:", sensor.fahrenheit) # 86.0

# Output:
# Celsius: 25
# Fahrenheit: 77.0
# Updated Fahrenheit: 86.0`,
      caption: {
        en: '@property provides clean attribute syntax while preserving encapsulation and validation.',
        bn: '@property সাধারণ বৈশিষ্ট্যের মতো সিনট্যাক্স রেখে ভেতর থেকে ভ্যালিডেশন বজায় রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Dunder Methods & Operator Overloading: __eq__, __add__, __len__, and __contains__', bn: '১০. ডান্ডার মেথড ও অপারেটর ওভারলোডিং: __eq__, __add__, __len__ ও __contains__' } },
    {
      type: 'para',
      text: {
        en: 'Special double-underscore (dunder) methods allow custom classes to integrate seamlessly with native Python operators and built-in functions: __len__() hooks into len(obj); __contains__() powers the in membership operator; __eq__() customizes the == equality check. And __add__() overloads the + addition operator.',
        bn: 'স্পেশাল ডাবল-আন্ডারস্কোর (ডান্ডার) মেথড কাস্টম ক্লাসকে পাইথনের বিল্ট-ইন অপারেটরের সাথে যুক্ত করে: __len__() মেথড len(obj)-এর সাথে কাজ করে; __contains__() মেথড in সদস্যপদ যাচাই নিয়ন্ত্রণ করে; __eq__() মেথড == সমতা যাচাই করে। এবং __add__() মেথড + যোগ অপারেটরের আচরণ কাস্টমাইজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `class Money:
    def __init__(self, amount_bdt, currencies=None):
        self.amount = amount_bdt
        self.currencies = currencies or ["BDT"]
    
    # Overload the '+' operator
    def __add__(self, other):
        if isinstance(other, Money):
            return Money(self.amount + other.amount)
        return Money(self.amount + other)
    
    # Overload the '==' equality operator
    def __eq__(self, other):
        if isinstance(other, Money):
            return self.amount == other.amount
        return False
    
    # Implement membership testing: 'item in obj'
    def __contains__(self, curr):
        return curr in self.currencies
    
    def __repr__(self):
        return f"Money({self.amount} BDT)"

wallet1 = Money(500, ["BDT", "USD"])
wallet2 = Money(350)

# Operator overloading in action:
combined = wallet1 + wallet2 # Calls wallet1.__add__(wallet2)
is_equal = wallet1 == Money(500) # Calls wallet1.__eq__(...)
supports_usd = "USD" in wallet1  # Invokes wallet1.__contains__("USD")

print("Combined wallet:", combined)
print("Is wallet1 equal to 500 BDT:", is_equal)
print("Supports USD:", supports_usd)

# Output:
# Combined wallet: Money(850 BDT)
# Is wallet1 equal to 500 BDT: True
# Supports USD: True`,
      caption: {
        en: 'Dunder methods let custom domain objects behave naturally with Python native syntax (+, ==, len).',
        bn: 'ডান্ডার মেথড কাস্টম অবজেক্টকে সরাসরি পাইথনের নিজস্ব চিহ্নের (+, ==) সাথে কাজ করতে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'py-class-ex1',
      kind: 'predict',
      topic: 'python: String representation methods',
      question: {
        en: 'Which method is invoked by default when print(my_object) is called on a custom class instance?',
        bn: 'কোনো কাস্টম ক্লাসের অবজেক্টের ওপর print(my_object) কল করলে ডিফল্টভাবে কোন মেথডটি চালিত হয়?'
      },
      code: `/* Python string representation hook */
/* print(custom_object) */`,
      answer: '__str__',
      accept: ['__str__', '__str__()'],
      hint: {
        en: 'It is the dunder method designed for human-readable string conversion.',
        bn: 'এটি সাধারণ মানুষের পড়ার উপযোগী স্ট্রিং বানানোর ডান্ডার মেথড।'
      },
      explanation: {
        en: 'print() and str() invoke the __str__() dunder method. If __str__() is not implemented, Python falls back to __repr__().',
        bn: 'print() এবং str() স্বয়ংক্রিয়ভাবে __str__() ডান্ডার মেথডকে কল করে। ক্লাসে এটি না থাকলে পাইথন __repr__() চালায়।'
      }
    },
    {
      id: 'py-class-ex2',
      kind: 'mcq',
      topic: 'python: Super function in inheritance',
      question: {
        en: 'What is the role of super().__init__() when called inside a child class constructor?',
        bn: 'চাইল্ড ক্লাসের কনস্ট্রাক্টরের ভেতরে super().__init__() কল করার মূল কাজ কী?'
      },
      options: [
        { en: 'It invokes the parent class constructor to initialize inherited attributes', bn: 'এটি ইনহেরিট করা বৈশিষ্ট্যগুলো সেট করতে প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করে' },
        { en: 'It deletes the child class', bn: 'এটি চাইল্ড ক্লাস মুছে ফেলে' },
        { en: 'It converts the class into a tuple', bn: 'এটি ক্লাসকে টাপলে রূপান্তর করে' },
        { en: 'It creates a global variable', bn: 'এটি একটি গ্লোবাল ভেরিয়েবল তৈরি করে' }
      ],
      answer: 0,
      hint: {
        en: 'super() delegates to the parent class.',
        bn: 'super() প্যারেন্ট বা সুপার ক্লাসে কাজ অর্পণ করে।'
      },
      explanation: {
        en: 'super().__init__() calls the initializer of the parent (super) class, ensuring that all base attributes and setup logic are executed properly.',
        bn: 'super().__init__() প্যারেন্ট ক্লাসের ইনিশিয়ালাইজার চালায়, যার ফলে বেস ক্লাসের সব প্রয়োজনীয় বৈশিষ্ট্য সঠিকভাবে তৈরি হয়।'
      }
    },
    {
      id: 'py-class-ex3',
      kind: 'mcq',
      topic: 'python: Name mangling trigger',
      question: {
        en: 'In Python, what prefix on an attribute name triggers internal name mangling (e.g. self.__secret)?',
        bn: 'পাইথনে কোনো অ্যাট্রিবিউট নামের শুরুতে কী চিহ্ন দিলে ইন্টারনাল নেম ম্যাংগলিং সক্রিয় হয় (যেমন self.__secret)?'
      },
      options: [
        { en: 'Double underscores (__)', bn: 'ডাবল আন্ডারস্কোর (__)' },
        { en: 'Single underscore (_)', bn: 'একক আন্ডারস্কোর (_)' },
        { en: 'Dollar sign ($)', bn: 'ডলার চিহ্ন ($)' },
        { en: 'Hash symbol (#)', bn: 'হ্যাশ চিহ্ন (#)' }
      ],
      answer: 0,
      hint: {
        en: 'Two leading underscores trigger compiler rewriting.',
        bn: 'শুরুতে দুটি আন্ডারস্কোর থাকলে কম্পাইলার নাম বদলে ফেলে।'
      },
      explanation: {
        en: 'Attributes prefixed with two leading underscores (and at most one trailing underscore) trigger name mangling, being rewritten to _ClassName__attribute to avoid collisions in subclasses.',
        bn: 'শুরুতে ডাবল আন্ডারস্কোর দিলে পাইথন ইন্টারপ্রেটার নামটিকে _ClassName__attribute-এ বদলে দেয় যাতে সাব-ক্লাস থেকে অনিচ্ছাকৃতভাবে ওভাররাইট না হয়।'
      }
    }
  ],
  quiz: {
    id: 'py-classes-quiz',
    title: { en: 'Python Classes & OOP Quiz', bn: 'পাইথন ক্লাস ও OOP কুইজ' },
    questions: [
      {
        id: 'cqq1',
        kind: 'mcq',
        topic: 'python: Self parameter purpose',
        question: {
          en: 'Why must instance methods in Python define self as their first parameter?',
          bn: 'পাইথনে ইনস্ট্যান্স মেথডের প্রথম প্যারামিটার হিসেবে self কেন রাখতে হয়?'
        },
        options: [
          { en: 'It provides an explicit reference to the specific object instance invoking the method', bn: 'যে অবজেক্টটি মেথডটি কল করেছে এটি সরাসরি সেই নির্দিষ্ট ইনস্ট্যান্সকে নির্দেশ করে' },
          { en: 'It makes the method execute asynchronously', bn: 'এটি মেথডকে অ্যাসিনক্রোনাস করে' },
          { en: 'It is a keyword required by the operating system', bn: 'এটি অপারেটিং সিস্টেমের জন্য দরকারি' },
          { en: 'It is optional and can be omitted anytime', bn: 'এটি যেকোনো সময় বাদ দেওয়া যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Python requires explicit instance binding.',
          bn: 'পাইথনে অবজেক্ট রেফারেন্স স্পষ্টভাবে পাস করতে হয়।'
        },
        explanation: {
          en: 'Python explicitly passes the invoking object instance as the first argument to instance methods. By convention, this parameter is always named self.',
          bn: 'মেথড কলের সময় পাইথন স্বয়ংক্রিয়ভাবে বর্তমান অবজেক্টটিকে প্রথম আর্গুমেন্ট হিসেবে পাঠায়, যাকে নিয়ম অনুসারে self নাম দেওয়া হয়।'
        }
      },
      {
        id: 'cqq2',
        kind: 'mcq',
        topic: 'python: Property decorator utility',
        question: {
          en: 'What is the primary architectural advantage of using the @property decorator?',
          bn: '@property ডেকোরেটর ব্যবহারের মূল আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          { en: 'It exposes methods with clean attribute access syntax (obj.attr) while allowing internal validation and logic', bn: 'এটি সাধারণ বৈশিষ্ট্যের মতো (obj.attr) সিনট্যাক্স রেখে ভেতর থেকে মেথডের লজিক ও ভ্যালিডেশন চালানোর ক্ষমতা দেয়' },
          { en: 'It prevents the class from being inherited', bn: 'এটি ক্লাসকে ইনহেরিট করা বন্ধ করে' },
          { en: 'It turns attributes into global variables', bn: 'এটি ভেরিয়েবলকে গ্লোবাল বানায়' },
          { en: 'It encrypts database passwords', bn: 'এটি পাসওয়ার্ড এনক্রিপ্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Clean dot syntax + getter/setter encapsulation.',
          bn: 'সহজ ডট সিনট্যাক্স এবং গেটার/সেটার এনক্যাপসুলেশন।'
        },
        explanation: {
          en: '@property allows methods to be accessed as if they were simple attributes, enabling developers to introduce getters, setters, and computed properties without breaking public APIs.',
          bn: '@property ডেকোরেটরের সাহায্যে কোনো পাবলিক এপিআই পরিবর্তন না করেই যেকোনো অ্যাট্রিবিউটে গেটার ও সেটার ভ্যালিডেশন যুক্ত করা যায়।'
        }
      },
      {
        id: 'cqq3',
        kind: 'mcq',
        topic: 'python: double underscore name mangling',
        question: {
          en: 'What is the runtime effect of prefixing an attribute name with double underscores (e.g. self.__balance)?',
          bn: 'পাইথনে কোনো অ্যাট্রিবিউটের নামের শুরুতে ডাবল আন্ডারস্কোর (যেমন self.__balance) দিলে রানটাইমে কী ঘটে?'
        },
        options: [
          { en: 'Name mangling rewrites its internal identifier to _ClassName__balance to prevent subclass collision', bn: 'নেম ম্যাংগলিংয়ের মাধ্যমে অভ্যন্তরীণ নাম বদলে _ClassName__balance হয়ে যায় যা সাবক্লাসে বিরোধ ঠেকায়' },
          { en: 'The attribute is encrypted in RAM memory', bn: 'অ্যাট্রিবিউটটি মেমোরিতে এনক্রিপ্ট হয়' },
          { en: 'The attribute is deleted immediately after initialization', bn: 'ইনিশিয়ালাইজেশনের পর পরই অ্যাট্রিবিউটটি মুছে যায়' },
          { en: 'The variable becomes globally accessible to all modules', bn: 'ভেরিয়েবলটি সব মডিউলের জন্য গ্লোবাল হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Private attributes undergo name mangling.',
          bn: 'প্রাইভেট অ্যাট্রিবিউটে নেম ম্যাংগলিং ঘটে।'
        },
        explanation: {
          en: 'Python mangles double-underscore attributes by prefixing them with an underscore and class name, making accidental overrides in subclasses impossible.',
          bn: 'পাইথন ডাবল আন্ডারস্কোরযুক্ত অ্যাট্রিবিউটগুলোর নামের শুরুতে একটি আন্ডারস্কোর ও ক্লাসের নাম যুক্ত করে সাবক্লাসের কনফ্লিক্ট প্রতিরোধ করে।'
        }
      },
      {
        id: 'cqq4',
        kind: 'mcq',
        topic: 'python: super function constructor delegation',
        question: {
          en: 'What does calling super().__init__() inside a subclass constructor achieve?',
          bn: 'সাবক্লাসের কনস্ট্রাক্টরের ভেতর super().__init__() কল করলে কী অর্জিত হয়?'
        },
        options: [
          { en: 'It invokes the parent class constructor to properly initialize inherited state', bn: 'প্যারেন্ট ক্লাসের কনস্ট্রাক্টর কল করে ইনহেরিট করা স্টেট যথাযথভাবে শুরু করে' },
          { en: 'It spawns an operating system background thread', bn: 'অপারেটিং সিস্টেমে ব্যাকগ্রাউন্ড থ্রেড তৈরি করে' },
          { en: 'It compiles the class blueprint into C code', bn: 'ক্লাসের ব্লুপ্রিন্টকে সি কোডে রূপান্তর করে' },
          { en: 'It destroys parent instances to save RAM', bn: 'র‍্যাম বাঁচাতে প্যারেন্ট ইনস্ট্যান্স ধ্বংস করে' }
        ],
        answer: 0,
        hint: {
          en: 'Delegates initialization to base class.',
          bn: 'বেস ক্লাসে ইনিশিয়ালাইজেশন হস্তান্তর করে।'
        },
        explanation: {
          en: 'super().__init__() delegates object construction up the Method Resolution Order (MRO), executing parent initializers before child-specific fields are set.',
          bn: 'super().__init__() মেথড রেজোলিউশন অর্ডার (MRO) অনুসরণ করে প্যারেন্ট ইনিশিয়ালাইজারকে চালায় যাতে চাইল্ড অবজেক্টের ভিত্তি ঠিক থাকে।'
        }
      }
    ]
  }
};
