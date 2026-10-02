import type { Lesson } from '../../../lib/types';

export const MetasAndTheDefineLesson: Lesson = {
  slug: 'metas-and-the-define',
  tech: 'lang-ruby',
  title: {
    en: 'Metaprogramming: define_method, method_missing & Dynamic Code Synthesis',
    bn: 'মেটাপ্রোগ্রামিং: define_method, method_missing এবং ডাইনামিক কোড সিন্থেসিস'
  },
  summary: {
    en: 'Master runtime metaprogramming and dynamic DSL creation in the Ruby language. Synthesize real methods dynamically with "define_method", intercept unhandled messages using "method_missing" and "respond_to_missing?", evaluate blocks in custom receiver contexts via "instance_eval" and "class_eval", and navigate open classes safely.',
    bn: 'Ruby ভাষায় রানটাইম মেটাপ্রোগ্রামিং এবং ডাইনামিক DSL তৈরি সম্পূর্ণ আয়ত্ত করুন। "define_method" দিয়ে ডাইনামিকভাবে মেথড তৈরি, "method_missing" এবং "respond_to_missing?" দিয়ে অজানা বার্তা ইন্টারসেপ্ট করা, "instance_eval" ও "class_eval" দিয়ে কাস্টম রিসিভার কনটেক্সটে ব্লক চালানো এবং ওপেন ক্লাসের নিরাপদ ব্যবহার শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'dynamic-synthesis-and-define-method-heading',
      text: {
        en: 'Dynamic Method Synthesis with define_method',
        bn: 'define_method দিয়ে ডাইনামিক মেথড সিন্থেসিস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Writing programs that inspect, manipulate, and generate their own code at runtime is the hallmark of dynamic languages. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), this discipline is known as metaprogramming. Instead of repeating boilerplate definitions for repetitive methods, developers use "define_method". This built-in macro dynamically inserts genuine method entries into the class method table at runtime. Because methods created via define_method become official members of the class, they respond to standard introspection ("respond_to?") and execute with normal high-speed virtual machine dispatch.',
        bn: 'যে প্রোগ্রাম রানটাইমে নিজের কোড নিজে তৈরি করতে বা পরিবর্তন করতে পারে তা তৈরি করাই আধুনিক ডাইনামিক ভাষার সবচেয়ে বড় সৌন্দর্য। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে এই অনন্য কৌশলটিকে বলা হয় মেটাপ্রোগ্রামিং। একই ধরনের মেথড বারবার ম্যানুয়ালি লেখার বদলে ডেভেলপাররা "define_method" ব্যবহার করেন। এই বিল্ট-ইন ম্যাক্রোটি রানটাইমে সরাসরি ক্লাসের মেথড টেবিলে বাস্তব মেথড যুক্ত করে দেয়। define_method দিয়ে তৈরি মেথডগুলো ক্লাসের অফিশিয়াল মেথড হওয়ায় এগুলো সাধারণ "respond_to?" ইন্ট্রোস্পেকশনে সঠিকভাবে সাড়া দেয় এবং ভার্চুয়াল মেশিনে স্বাভাবিক উচ্চগতিতে চলে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Ruby metaprogramming dispatch paths: fast lookup for define_method vs ancestor fallback traversal entering method_missing.',
        bn: 'চিত্র ১: Ruby মেটাপ্রোগ্রামিং ডিসপ্যাচ পথ: define_method-এর দ্রুত মেথড টেবিল অনুসন্ধান বনাম method_missing-এর অ্যানসেস্টর ব্যাকআপ রুট।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">RUBY METAPROGRAMMING &amp; DYNAMIC DISPATCH ARCHITECTURE</text>

  <!-- Left: Dynamic Message -->
  <g transform="translate(30, 65)">
    <rect width="230" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="230" height="30" rx="8" fill="#0284c7" />
    <text x="115" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Dynamic Message Send</text>

    <rect x="15" y="45" width="200" height="50" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">user.send(:find_by_name)</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">Runtime symbolic dispatch</text>

    <rect x="15" y="105" width="200" height="110" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Inspection Branch:</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif">1. Searches Class Method Table</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="9" font-family="sans-serif">2. Traverses Ancestors Chain</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="9" font-family="sans-serif">3. Reaches BasicObject</text>
    <text x="25" y="200" fill="#fbbf24" font-size="8" font-family="sans-serif">Falls back to method_missing</text>
  </g>

  <!-- Middle: Path A (define_method) -->
  <g transform="translate(290, 65)">
    <rect width="250" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="250" height="28" rx="8" fill="#059669" />
    <text x="125" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Path A: define_method</text>

    <text x="15" y="48" fill="#34d399" font-size="10" font-family="monospace">define_method(:find_by_name)</text>
    <text x="15" y="68" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Genuine entry in method table</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">• respond_to?(:find_by_name) is TRUE</text>
    <text x="15" y="100" fill="#38bdf8" font-size="9" font-family="sans-serif">• Fast O(1) VM direct execution</text>
  </g>

  <!-- Middle: Path B (method_missing) -->
  <g transform="translate(290, 190)">
    <rect width="250" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="250" height="28" rx="8" fill="#d97706" />
    <text x="125" y="19" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">Path B: method_missing Hook</text>

    <text x="15" y="48" fill="#fbbf24" font-size="10" font-family="monospace">def method_missing(sym, *args)</text>
    <text x="15" y="68" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Intercepts ghost method symbols</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Must implement respond_to_missing?</text>
    <text x="15" y="100" fill="#f87171" font-size="9" font-family="sans-serif">• Higher invocation latency</text>
  </g>

  <!-- Right: Context Evaluation -->
  <g transform="translate(570, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#7c3aed" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">instance_eval vs class_eval</text>

    <rect x="15" y="45" width="210" height="75" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="sans-serif" font-weight="bold">instance_eval (&amp;block)</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">• self = object instance</text>
    <text x="25" y="100" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Opens singleton class (DSLs)</text>

    <rect x="15" y="130" width="210" height="85" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="150" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">class_eval (&amp;block)</text>
    <text x="25" y="168" fill="#cbd5e1" font-size="9" font-family="sans-serif">• self = Class object</text>
    <text x="25" y="185" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Defines shared instance methods</text>
    <text x="25" y="200" fill="#cbd5e1" font-size="9" font-family="sans-serif">  for all instances</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'method-missing-and-eval-contexts-heading',
      text: {
        en: 'Ghost Methods with method_missing and Evaluation Contexts',
        bn: 'method_missing দিয়ে ঘোস্ট মেথড এবং মূল্যায়ন কনটেক্সট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a message fails to match any defined method in the entire ancestor chain, the Ruby VM invokes the "method_missing" hook. Overriding this hook empowers libraries like Active Record to implement dynamic ghost methods (like "find_by_email_and_status"). Crucially, whenever method_missing is overridden, developers must also override "respond_to_missing?" so that reflection checks accurately report method availability. For executing blocks inside customized contexts, Ruby differentiates between "instance_eval" (which sets self to an individual instance for declarative domain DSLs) and "class_eval" (which sets self to the Class, adding shared instance methods).',
        bn: 'যখন কোনো মেসেজ ক্লাসের পুরো অ্যানসেস্টর চেইনের কোথাও খুঁজে পাওয়া যায় না, তখন Ruby VM শেষ ভরসা হিসেবে "method_missing" হুক চালায়। এই হুকটি ওভাররাইড করার মাধ্যমে Active Record-এর মতো লাইব্রেরিগুলো চমৎকার ঘোস্ট মেথড (যেমন "find_by_email_and_status") তৈরি করে। তবে method_missing ব্যবহারের সময় অবশ্যই "respond_to_missing?" মেথডটিও ওভাররাইড করতে হয়, যেন ইন্ট্রোস্পেকশনে মেথডটির অস্তিত্ব সঠিকভাবে ধরা পড়ে। কাস্টম কনটেক্সটে কোড চালানোর জন্য Ruby মূলত দুটি পদ্ধতি দেয়: "instance_eval" (যা ডোমেন DSL তৈরির জন্য self-কে একটি অবজেক্টে সেট করে) এবং "class_eval" (যা self-কে ক্লাসে সেট করে সবার জন্য সাধারণ মেথড যোগ করে)।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Ruby metaprogramming: define_method synthesis, method_missing ghost method fallback, and instance_eval DSL evaluation.',
        bn: 'Ruby মেটাপ্রোগ্রামিং: define_method সিন্থেসিস, method_missing ঘোস্ট মেথড এবং instance_eval DSL মূল্যায়নের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Metaprogramming: define_method, method_missing, and instance_eval

export class RubyMetaEngine {
  private methodRegistry: Map<string, Function> = new Map();
  public contextData: Record<string, any> = {};

  // Simulates "define_method :role_admin? do; ... end"
  public defineMethod(name: string, fn: Function): void {
    this.methodRegistry.set(name, fn);
  }

  // Simulates standard "respond_to?(message)"
  public respondTo(message: string): boolean {
    if (this.methodRegistry.has(message)) return true;
    return this.respondToMissing(message);
  }

  // Simulates "respond_to_missing?(message)"
  public respondToMissing(message: string): boolean {
    return message.startsWith('find_by_');
  }

  // Simulates dynamic message dispatch with method_missing fallback
  public send(message: string, ...args: any[]): any {
    const fn = this.methodRegistry.get(message);
    if (fn) {
      return fn.apply(this, args);
    }

    // Fallback to method_missing
    return this.methodMissing(message, ...args);
  }

  // Simulates "def method_missing(name, *args)"
  protected methodMissing(name: string, ...args: any[]): any {
    if (name.startsWith('find_by_')) {
      const field = name.replace('find_by_', '');
      console.log('Ghost Method intercepted: querying field "' + field + '" with value:', args[0]);
      return { id: 101, [field]: args[0], status: 'Active' };
    }
    throw new Error("NoMethodError: undefined method '" + name + "' for RubyMetaEngine");
  }

  // Simulates "instance_eval(&block)": evaluates block in context of this instance
  public instanceEval(dslBlock: (ctx: RubyMetaEngine) => void): void {
    dslBlock(this);
  }
}

// Execution Demonstration
console.log('--- 1. Testing define_method Dynamic Synthesis ---');
const engine = new RubyMetaEngine();

// Dynamically defining predicate methods
['admin', 'moderator', 'member'].forEach(role => {
  engine.defineMethod(role + '?', function(this: RubyMetaEngine) {
    return this.contextData.role === role;
  });
});

engine.contextData.role = 'admin';
console.log('Is user admin? (send(:admin?)):', engine.send('admin?')); // true
console.log('Is user moderator? (send(:moderator?)):', engine.send('moderator?')); // false

console.log('\n--- 2. Testing method_missing & respond_to_missing? ---');
console.log('Does object respond to find_by_email?:', engine.respondTo('find_by_email')); // true
console.log('Does object respond to delete_all?:', engine.respondTo('delete_all')); // false

const queryResult = engine.send('find_by_email', 'alice@codeshikhon.com');
console.log('Ghost Method Query Result:', queryResult);

console.log('\n--- 3. Testing instance_eval DSL Builder ---');
engine.instanceEval((builder) => {
  builder.contextData.siteTitle = 'CodeShikhon Pro';
  builder.contextData.timeoutMs = 5000;
});
console.log('Configured State via instance_eval:', engine.contextData);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Metaprogramming & Open Classes',
          def: {
            en: 'Technique where code dynamically analyzes and synthesizes new methods and structures during execution.',
            bn: 'এমন কৌশল যার মাধ্যমে প্রোগ্রাম রানটাইমে গতিশীলভাবে নতুন মেথড তৈরি বা পরিবর্তন করতে পারে।'
          }
        },
        {
          term: 'define_method',
          def: {
            en: 'Ruby class macro dynamically inserting a named method into the class method table with O(1) dispatch speed.',
            bn: 'ক্লাস ম্যাক্রো যা রানটাইমে মেথড টেবিলে সুনির্দিষ্ট নামে বাস্তব মেথড যুক্ত করে দ্রুত পারফরম্যান্স দেয়।'
          }
        },
        {
          term: 'method_missing & respond_to_missing?',
          def: {
            en: 'Fallback hook pair intercepting unhandled method calls to dynamically construct ghost methods and report availability.',
            bn: 'ব্যাকআপ হুক যা ক্লাসে না থাকা মেসেজ আটকে ঘোস্ট মেথড চালায় এবং তার সঠিক অস্তিত্ব নিশ্চিত করে।'
          }
        },
        {
          term: 'instance_eval vs class_eval',
          def: {
            en: 'instance_eval executes blocks in the context of an instance; class_eval targets the Class object to define shared methods.',
            bn: 'instance_eval অবজেক্টের কনটেক্সটে ব্লক চালায়; আর class_eval ক্লাসের কনটেক্সটে মেথড যোগ করতে ব্যবহৃত হয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'define-method-vs-method-missing-performance-ex1',
      kind: 'mcq',
      topic: 'ruby-define-method-vs-method-missing-dispatch',
      question: {
        en: 'Why is using "define_method" generally preferred over "method_missing" when generating repetitive methods in Ruby?',
        bn: 'Ruby-তে পুনরাবৃত্তিমূলক মেথড তৈরির সময় কেন "method_missing"-এর চেয়ে "define_method" বেশি পছন্দ করা হয়?'
      },
      options: [
        {
          en: '"define_method" registers genuine methods in the method table with fast O(1) VM lookup and automatic "respond_to?" discovery, while "method_missing" suffers from high ancestor traversal lookup overhead',
          bn: '"define_method" ক্লাসের মেথড টেবিলে সরাসরি মেথড তৈরি করে দ্রুত O(1) গতিতে চলে এবং "respond_to?" দিয়ে সহজে পাওয়া যায়, কিন্তু "method_missing" পুরো অ্যানসেস্টর চেইন খোঁজার কারণে ধীরগতির হয়'
        },
        {
          en: 'method_missing was deleted from the Ruby VM in 2021',
          bn: '২০২১ সালে Ruby VM থেকে method_missing মুছে ফেলা হয়েছিল'
        },
        {
          en: 'define_method runs in parallel on background supercomputers',
          bn: 'define_method ব্যাকগ্রাউন্ড সুপারকম্পিউটারে সমান্তরালভাবে চলে'
        },
        {
          en: 'There is zero performance difference between them',
          bn: 'তাদের মাঝে কোনো পারফরম্যান্স পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'define_method creates real methods; method_missing is a fallback after searching the entire hierarchy.',
        bn: 'আগে থেকেই তৈরি মেথড সাথে সাথে চলে, কিন্তু হারিয়ে যাওয়া মেথড খুঁজতে পুরো পরিবার খুঁজে বের করতে হয়।'
      },
      explanation: {
        en: 'define_method creates genuine entries in the class method table, executing with full VM optimization. method_missing is only called after exhausting the complete ancestor chain.',
        bn: 'ফলে define_method দ্রুতগতির মেথড ডিসপ্যাচ নিশ্চিত করে এবং কোডকে সহজে বিশ্লেষণযোগ্য রাখে।'
      }
    },
    {
      id: 'respond-to-missing-contract-ex2',
      kind: 'mcq',
      topic: 'ruby-respond-to-missing-introspection-contract',
      question: {
        en: 'Whenever a Ruby class overrides "method_missing" to support ghost methods, why must it also override "respond_to_missing?"?',
        bn: 'ঘোস্ট মেথড সমর্থনের জন্য যখনই কোনো Ruby ক্লাস "method_missing" ওভাররাইড করে, তখন কেন সাথে "respond_to_missing?"-ও ওভাররাইড করা আবশ্যক?'
      },
      options: [
        {
          en: 'So that calling "respond_to?(:dynamic_method)" accurately returns true, preserving object introspection and preventing subtle reflection bugs across tools and libraries',
          bn: 'যাতে "respond_to?(:dynamic_method)" কল করলে সঠিকভাবে true ফেরত আসে এবং অবজেক্টের অস্তিত্ব যাচাইয়ের ক্ষেত্রে কোনো বিভ্রান্তি না ঘটে'
        },
        {
          en: 'It encrypts the method name using SHA-256',
          bn: 'এটি SHA-256 দিয়ে মেথডের নাম এনক্রিপ্ট করে'
        },
        {
          en: 'It forces the operating system to allocate 10 gigabytes of RAM',
          bn: 'এটি অপারেটিং সিস্টেমকে ১০ গিগাবাইট র্যাম বরাদ্দ করতে বাধ্য করে'
        },
        {
          en: 'respond_to_missing? is forbidden in modern Ruby codebases',
          bn: 'আধুনিক Ruby কোডবেসে respond_to_missing? সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'respond_to_missing? ensures respond_to? works correctly for ghost methods.',
        bn: 'অবজেক্টে মেথডটি আসলেই আছে কি না তা অন্য টুল যেন স্পষ্টভাবে বুঝতে পারে।'
      },
      explanation: {
        en: 'If you only override method_missing, calling "obj.respond_to?(:ghost_method)" returns false even though calling "obj.ghost_method" succeeds. Overriding respond_to_missing? fixes this discrepancy.',
        bn: 'এর মাধ্যমে মেথড কলের ক্ষমতা এবং মেথড পরীক্ষার ফলাফল এক সূত্রে বাঁধা থাকে।'
      }
    },
    {
      id: 'instance-eval-dsl-context-ex3',
      kind: 'mcq',
      topic: 'ruby-instance-eval-dsl-receiver-binding',
      question: {
        en: 'What does "config.instance_eval { timeout 30; retries 3 }" do to "self" inside the block?',
        bn: '"config.instance_eval { timeout 30; retries 3 }"-এর ক্ষেত্রে ব্লকের ভেতরে "self"-এর মান কী হয়?'
      },
      options: [
        {
          en: 'It sets "self" to the "config" instance object, allowing methods like "timeout" and "retries" to be called directly without typing "config." repeatedly',
          bn: 'এটি "self"-কে সরাসরি "config" অবজেক্টটিতে সেট করে, ফলে বারবার "config." না লিখে সরাসরি "timeout" এবং "retries" কল করা যায়'
        },
        {
          en: 'It converts the block into an executable binary shell script',
          bn: 'এটি ব্লককে একটি এক্সিকিউটেবল বাইনারি শেল স্ক্রিপ্টে রূপান্তর করে'
        },
        {
          en: 'It deletes the config object from memory after execution',
          bn: 'এক্সিকিউশনের পর এটি মেমোরি থেকে config অবজেক্টটি মুছে ফেলে'
        },
        {
          en: 'instance_eval can only be executed on integer numbers',
          bn: 'instance_eval কেবল পূর্ণসংখ্যার সাথেই চালানো যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'instance_eval sets self to the receiver object for clean DSL syntax.',
        bn: 'বারবার অবজেক্টের নাম টাইপ না করে মার্জিত কনফিগারেশন লেখার জাদুকরী মেথড।'
      },
      explanation: {
        en: 'instance_eval is the backbone of Ruby DSLs: by changing self to the receiver object during block execution, methods are sent directly to that receiver without prefixing.',
        bn: 'এর মাধ্যমে চমৎকার কনফিগারেশন ব্লক তৈরি করা যায় যা দেখতে প্রাকৃতিক ভাষার মতো মনে হয়।'
      }
    },
    {
      id: 'class-eval-instance-method-generation-ex4',
      kind: 'mcq',
      topic: 'ruby-class-eval-instance-method-injection',
      question: {
        en: 'How does calling "User.class_eval { def active?; @status == :active; end }" differ from "User.instance_eval { ... }"?',
        bn: '"User.class_eval { def active?; @status == :active; end }" কল করার সাথে "User.instance_eval { ... }"-এর পার্থক্য কী?'
      },
      options: [
        {
          en: '"class_eval" defines an instance method available to all instances of User; "instance_eval" would define a class method available only on the User class object itself',
          bn: '"class_eval" একটি সাধারণ ইনস্ট্যান্স মেথড তৈরি করে যা User-এর প্রতিটি অবজেক্ট ব্যবহার করতে পারে; আর "instance_eval" কেবল স্বয়ং User ক্লাসের ওপর একটি ক্লাস মেথড তৈরি করে'
        },
        {
          en: 'class_eval runs on Linux while instance_eval runs on Windows',
          bn: 'class_eval লিনাক্সে চলে আর instance_eval উইন্ডোজে চলে'
        },
        {
          en: 'There is zero functional difference between class_eval and instance_eval',
          bn: 'class_eval এবং instance_eval-এর মাঝে কোনো কার্যকর পার্থক্য নেই'
        },
        {
          en: 'class_eval was deprecated in Ruby 3.0',
          bn: 'Ruby ৩.০ সংস্করণে class_eval বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'class_eval opens the class to add instance methods; instance_eval opens the singleton class to add class methods.',
        bn: 'সবার জন্য মেথড যোগ করতে class_eval এবং শুধু ক্লাসের নিজস্ব মেথড যোগ করতে instance_eval।'
      },
      explanation: {
        en: 'Invoking "class_eval" on a target type injects methods into its instance table for all instances to use. Conversely, "instance_eval" attaches behavior directly to the receiver\'s singleton metaclass.',
        bn: 'নির্দিষ্ট টাইপের ওপর "class_eval" চালালে তা সমস্ত অবজেক্টের ব্যবহারের জন্য মেথড যোগ করে। আর "instance_eval" মেথডগুলোকে সরাসরি রিসিভারের একক মেটাক্লাসে যুক্ত করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-metas-and-the-define',
    title: {
      en: 'Ruby Metaprogramming Quiz',
      bn: 'Ruby মেটাপ্রোগ্রামিং কুইজ'
    },
    questions: [
      {
        id: 'quiz-open-classes-monkey-patch-safety',
        kind: 'mcq',
        topic: 'ruby-open-classes-monkey-patching-risk',
        question: {
          en: 'What architectural danger is associated with Ruby\'s "Open Classes" (the ability to reopen and add methods to core classes like String or Array)?',
          bn: 'Ruby-র "ওপেন ক্লাসেস" ফিচারের (যেমন String বা Array ক্লাসে সরাসরি নতুন মেথড যোগ করা) সাথে কোন স্থাপত্যিক বিপদ যুক্ত?'
        },
        options: [
          {
            en: 'Global namespace collision (monkey patching): two third-party gems may define identically named methods on String with conflicting behaviors, causing catastrophic silent bugs across the application',
            bn: 'গ্লোবাল নেমস্পেস সংঘর্ষ (মাঙ্কি প্যাচিং): দুটি আলাদা জেম একই নামে String ক্লাসে মেথড যোগ করলে তাদের মধ্যকার দ্বন্দ্বে পুরো অ্যাপ্লিকেশনে মারাত্মক গোপন বাগ তৈরি হতে পারে'
          },
          {
            en: 'It reduces the battery life of client mobile devices by 90 percent',
            bn: 'এটি ক্লায়েন্টের মোবাইল ডিভাইসের ব্যাটারি চার্জ ৯০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It converts the source code into read-only binary files',
            bn: 'এটি সোর্স কোডকে রিড-অনলি বাইনারি ফাইলে রূপান্তর করে'
          },
          {
            en: 'Open Classes were removed in Ruby 2.0',
            bn: 'Ruby ২.০ সংস্করণে ওপেন ক্লাসেস বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Monkey patching modifies global class definitions, risking collisions across gems.',
          bn: 'অন্যের ক্লাসে নিজের মতো মেথড বসালে অন্য জেমের সাথে সংঘর্ষ হওয়ার মারাত্মক ঝুঁকি।'
        },
        explanation: {
          en: 'While reopening classes is powerful, modifying core classes globally can break dependencies. Modern Ruby recommends Refinements or module mixins instead of global monkey patching.',
          bn: 'এই কারণে আধুনিক Ruby-তে কোর ক্লাস পরিবর্তন না করে Refinements ব্যবহারের পরামর্শ দেওয়া হয়।'
        }
      },
      {
        id: 'quiz-send-vs-public-send-encapsulation',
        kind: 'mcq',
        topic: 'ruby-send-vs-public-send-privacy',
        question: {
          en: 'Why is "public_send" preferred over "send" when invoking dynamic methods derived from untrusted user input?',
          bn: 'অবিশ্বস্ত ইউজার ইনপুট থেকে ডাইনামিক মেথড ডাকার সময় কেন "send"-এর চেয়ে "public_send" ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: '"public_send" strictly respects encapsulation by raising a NoMethodError if attempting to call private methods, whereas "send" bypasses privacy and can invoke dangerous internal routines',
            bn: '"public_send" কোনো প্রাইভেট মেথড ডাকার চেষ্টা করলে NoMethodError দিয়ে এনক্যাপসুলেশন রক্ষা করে, কিন্তু "send" প্রাইভেসি ভেঙে বিপজ্জনক মেথডও চালিয়ে দিতে পারে'
          },
          {
            en: 'public_send is 10 times faster than send',
            bn: 'public_send সাধারণ send-এর চেয়ে ১০ গুণ দ্রুত চলে'
          },
          {
            en: 'send only works with integer numbers',
            bn: 'send কেবল পূর্ণসংখ্যার সাথেই কাজ করে'
          },
          {
            en: 'public_send was deprecated in Ruby 3.0',
            bn: 'Ruby ৩.০ সংস্করণে public_send বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'public_send prevents unauthorized invocation of private methods.',
          bn: 'ব্যবহারকারী যেন চালাকি করে গোপন কোনো প্রাইভেট মেথড চালিয়ে না দেয় তার সুরক্ষা।'
        },
        explanation: {
          en: '"send" bypasses private visibility, allowing invocation of methods like "system" or "eval". "public_send" ensures only safe public interfaces can be reached dynamically.',
          bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের নিরাপত্তা অটুট থাকে এবং প্রাইভেট মেথডে অবৈধ প্রবেশ রোধ হয়।'
        }
      },
      {
        id: 'quiz-const-get-dynamic-constant-lookup',
        kind: 'mcq',
        topic: 'ruby-const-get-dynamic-class-instantiation',
        question: {
          en: 'How can a Ruby program dynamically instantiate a class from a string class name (e.g. className = "StripeGateway")?',
          bn: 'একটি স্ট্রিং ক্লাসের নাম (যেমন className = "StripeGateway") থেকে Ruby কীভাবে রানটাইমে ক্লাসটি খুঁজে অবজেক্ট তৈরি করে?'
        },
        options: [
          {
            en: 'Object.const_get(className).new',
            bn: 'Object.const_get(className).new'
          },
          {
            en: 'Class.from_string(className)',
            bn: 'Class.from_string(className)'
          },
          {
            en: 'eval("rm -rf /")',
            bn: 'eval("rm -rf /")'
          },
          {
            en: 'Dynamic class instantiation is impossible in Ruby',
            bn: 'Ruby-তে ডাইনামিক ক্লাস ইনস্ট্যান্সিয়েশন সম্পূর্ণ অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Classes are constants in Ruby; use const_get to look them up by string name.',
          bn: 'ক্লাস যেহেতু কনস্ট্যান্ট, তাই const_get দিয়ে স্ট্রিং নাম থেকে ক্লাসে পৌঁছানো যায়।'
        },
        explanation: {
          en: 'Because classes are stored as constants on Object, "Object.const_get(\'MyClass\')" retrieves the Class object, allowing ".new" to be invoked dynamically.',
          bn: 'এর ফলে কনফিগারেশন ফাইলের টেক্সট দেখে রানটাইমে প্রয়োজনীয় ক্লাস নিমেষে চালু করা যায়।'
        }
      },
      {
        id: 'quiz-singleton-class-eigenclass-syntax',
        kind: 'mcq',
        topic: 'ruby-singleton-class-class-self-syntax',
        question: {
          en: 'What does the Ruby syntax "class << self; ... end" do when placed inside a class definition body?',
          bn: 'একটি ক্লাস ডিফিনিশনের ভেতরে "class << self; ... end" সিনট্যাক্সটি কী কাজ করে?'
        },
        options: [
          {
            en: 'It opens the singleton class (eigenclass) of the current class object, allowing multiple class methods and class accessors to be defined cleanly together without prefixing "self."',
            bn: 'এটি ক্লাসের নিজস্ব সিঙ্গেলটন ক্লাসটি (eigenclass) খুলে দেয়, ফলে বারবার "self." না লিখে একসাথেই অনেকগুলো ক্লাস মেথড ও অ্যাক্সেসর সংজ্ঞায়িত করা যায়'
          },
          {
            en: 'It reverses the class inheritance tree',
            bn: 'এটি ক্লাসের ইনহেরিট্যান্স ট্রি উল্টো করে দেয়'
          },
          {
            en: 'It compresses the class code into a ZIP archive',
            bn: 'এটি ক্লাসের কোডকে একটি জিপ ফাইলে সংকুচিত করে'
          },
          {
            en: 'class << self was deprecated in Ruby 2.0',
            bn: 'Ruby ২.০ সংস্করণে class << self বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'class << self opens the metaclass to define class-level methods and accessors.',
          bn: 'ক্লাসের নিজস্ব মেটাক্লাসে ঢুকে পরিষ্কারভাবে ক্লাস মেথড সাজানোর ক্লাসিক Ruby কৌশল।'
        },
        explanation: {
          en: '"class << self" enters the singleton class context of the Class object. Methods defined inside become class methods, and attr_accessor calls become class-level accessors.',
          bn: 'এর মাধ্যমে পরিচ্ছন্নভাবে একাধিক ক্লাস মেথড ও ক্লাস অ্যাক্সেসর একসাথে সাজানো যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-ruby-release',
    title: {
      en: 'The Ruby 3 Release: Fibers, Ractors & YJIT Concurrency',
      bn: 'Ruby ৩ রিলিজ: Fiber, Ractor এবং YJIT কনকারেন্সি'
    }
  }
};
