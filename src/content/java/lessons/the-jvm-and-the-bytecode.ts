import type { Lesson } from '../../../lib/types';

export const TheJvmAndTheBytecodeLesson: Lesson = {
  slug: 'the-jvm-and-the-bytecode',
  tech: 'java',
  title: {
    en: 'The JVM Architecture, Bytecode & Memory Model',
    bn: 'JVM আর্কিটেকচার, বাইটকোড এবং মেমোরি মডেল'
  },
  summary: {
    en: 'Beginner-to-expert guide to the Java Virtual Machine (JVM): understand javac bytecode compilation (.class files), follow the 3-phase ClassLoader subsystem, explore HotSpot JIT tiered compilation (C1 and C2), and master generational Heap and Stack memory layouts.',
    bn: 'জাভা ভার্চুয়াল মেশিনের (JVM) পূর্ণাঙ্গ গাইড: javac বাইটকোড কম্পাইলেশন (.class ফাইল), ৩ স্তরের ক্লাস-লোডার সাবসিস্টেম, হটস্পট JIT টায়ার্ড কম্পাইলেশন (C1 ও C2) এবং হিপ ও স্ট্যাক মেমোরির অভ্যন্তরীণ গঠন।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'jvm-bytecode-and-classloader-heading',
      text: {
        en: 'The Java Compilation Model, Bytecode Verification, and ClassLoaders',
        bn: 'জাভা কম্পাইলেশন মডেল, বাইটকোড যাচাইকরণ এবং ক্লাস-লোডার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Java achieves platform independence through an intermediate representation known as bytecode. When developers run "javac Application.java", the compiler does not produce native CPU machine instructions; instead, it generates a portable binary ".class" file containing standardized bytecode opcodes. When launched, the Java Virtual Machine (JVM) loads these classes using a 3-phase ClassLoader subsystem: Loading the raw binary stream, Linking it through rigorous byte-safety verification and symbol resolution, and Initializing static class fields.',
        bn: 'জাভা বাইটকোড নামক একটি মধ্যবর্তী রূপের মাধ্যমে প্ল্যাটফর্ম-স্বাধীন সুবিধা প্রদান করে। যখন ডেভেলপাররা "javac Application.java" কমান্ড চালান, তখন কম্পাইলার সরাসরি সিপিইউর মেশিন কোড তৈরি না করে একটি সার্বজনীন বাইনারি ".class" ফাইল তৈরি করে যাতে স্ট্যান্ডার্ড বাইটকোড নির্দেশাবলী থাকে। প্রোগ্রাম চালু হলে জাভা ভার্চুয়াল মেশিন (JVM) একটি ৩ স্তরের ক্লাস-লোডার সাবসিস্টেম দিয়ে এই ক্লাসগুলো লোড করে: বাইনারি স্ট্রিম লোড করা, বাইটকোডের সুরক্ষা যাচাই ও প্রতীক সমাধান (Linking) এবং স্ট্যাটিক ফিল্ড ইনিশিয়ালাইজ করা।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-stage JVM architecture from source code to ClassLoading, Runtime Data Areas, and JIT native execution.',
        bn: 'চিত্র ১: সোর্স কোড থেকে শুরু করে ক্লাস-লোডিং, রানটাইম মেমোরি এবং JIT মেশিন কোড এক্সিকিউশন পর্যন্ত JVM এর ৪ টি ধাপের চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">JAVA VIRTUAL MACHINE (JVM) RUNTIME ARCHITECTURE</text>

  <!-- Step 1: javac Bytecode -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Bytecode File</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="10" font-family="monospace">App.java -&gt; javac</text>
    <text x="15" y="85" fill="#38bdf8" font-size="10" font-family="monospace">App.class (Bytecode)</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">0xCAFEBABE Magic</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Portable Opcodes</text>
  </g>

  <!-- Step 2: ClassLoader -->
  <g transform="translate(230, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#059669" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. ClassLoader Subsystem</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">Bootstrap / App</text>
    <text x="15" y="85" fill="#fbbf24" font-size="9" font-family="monospace">Bytecode Verification</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Static Initialization</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Security Sandbox</text>
  </g>

  <!-- Step 3: Runtime Data Areas -->
  <g transform="translate(435, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#d97706" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Runtime Data Areas</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Heap: Eden, S0, S1</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="9" font-family="monospace">Old Gen (Tenured)</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#34d399" font-size="9" font-family="monospace">Thread Call Stacks</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Managed Memory</text>
  </g>

  <!-- Step 4: Execution Engine -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Execution Engine</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">Interpreter + JIT</text>
    <text x="15" y="85" fill="#34d399" font-size="9" font-family="monospace">C1 / C2 Compilers</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">Garbage Collector</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Native Machine Code</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'hotspot-jit-and-memory-model-heading',
      text: {
        en: 'HotSpot JIT Tiered Compilation and Generational Memory Layout',
        bn: 'হটস্পট JIT টায়ার্ড কম্পাইলেশন এবং জেনারেশনাল মেমোরি লেআউট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The JVM Execution Engine combines an interpreter with the HotSpot Just-In-Time (JIT) tiered compiler. During startup, the interpreter executes bytecode directly. As methods are called repeatedly, the C1 client compiler performs quick compilation with profiling. For performance-critical loops ("hotspots"), the C2 server compiler generates highly optimized native machine code with aggressive optimizations like method inlining and escape analysis. Memory is partitioned into thread-private Stacks holding local primitive variables and object pointers, and a shared Heap managed by generational Garbage Collection (Eden, S0, S1, and Tenured Old Generation).',
        bn: 'JVM এর এক্সিকিউশন ইঞ্জিন একটি ইন্টারপ্রেটার এবং হটস্পট Just-In-Time (JIT) টায়ার্ড কম্পাইলারের সমন্বয়ে কাজ করে। শুরুতে ইন্টারপ্রেটার সরাসরি বাইটকোড রান করে। কোড বারবার চলতে থাকলে C1 কম্পাইলার দ্রুত প্রাথমিক কম্পাইল সম্পন্ন করে। আর বহুল ব্যবহৃত গুরুত্বপূর্ণ কোড ব্লকের ক্ষেত্রে C2 কম্পাইলার মেথড ইনলাইনিং ও এস্কেপ অ্যানালাইসিসের মাধ্যমে সরাসরি প্রসেসরের সর্বোচ্চ গতির মেশিন কোডে রূপান্তর করে। মেমোরির ক্ষেত্রে প্রতিটি থ্রেডের নিজস্ব স্ট্যাক থাকে যা লোকাল ভেরিয়েবল ও রেফারেন্স জমা রাখে, আর শেয়ার্ড হিপ মেমোরিতে অবজেক্টগুলো তৈরি হয় যা বিভিন্ন প্রজন্মের গার্বেজ কালেক্টর (ইডেন, S0, S1 এবং ওল্ড জেনারেশন) দ্বারা পরিচালিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of JVM call stack frame allocation, heap object instantiation, and garbage collection sweep.',
        bn: 'JVM কল স্ট্যাক ফ্রেম বরাদ্দ, হিপ অবজেক্ট সৃষ্টি এবং গার্বেজ কালেকশন সুইপের সমতুল্য TypeScript কোড।'
      },
      code: `// Simulation of JVM Call Stack and Generational Heap Allocation in TypeScript

interface HeapObject {
  id: number;
  type: string;
  age: number; // GC survival age
}

export class JvmMemorySimulator {
  // Thread private stack frames
  private stack: { methodName: string; localReferences: number[] }[] = [];

  // Shared heap memory pool
  private heap: Map<number, HeapObject> = new Map();
  private objectCounter: number = 0;

  // Push stack frame: entering method
  public pushFrame(methodName: string): void {
    this.stack.push({ methodName, localReferences: [] });
  }

  // Allocate object on heap (like 'new Object()')
  public allocateObject(type: string): number {
    this.objectCounter += 1;
    const newId = this.objectCounter;
    this.heap.set(newId, { id: newId, type, age: 0 });

    // Bind reference to active stack frame
    if (this.stack.length > 0) {
      this.stack[this.stack.length - 1].localReferences.push(newId);
    }
    return newId;
  }

  // Pop stack frame: method return
  public popFrame(): void {
    this.stack.pop();
  }

  // Simulate Minor Garbage Collection: purge unreachable objects
  public runMinorGc(): { reclaimed: number; surviving: number } {
    const liveReferences = new Set<number>();
    for (const frame of this.stack) {
      for (const ref of frame.localReferences) {
        liveReferences.add(ref);
      }
    }

    let reclaimed = 0;
    for (const [id, obj] of this.heap.entries()) {
      if (!liveReferences.has(id)) {
        this.heap.delete(id);
        reclaimed += 1;
      } else {
        obj.age += 1; // Increment GC age
      }
    }
    return { reclaimed, surviving: this.heap.size };
  }
}

// Execute demonstration
const jvm = new JvmMemorySimulator();

jvm.pushFrame('main()');
const obj1 = jvm.allocateObject('UserEntity'); // Allocated on Heap

jvm.pushFrame('calculateTax()');
const tempObj = jvm.allocateObject('TaxCalculator'); // Allocated on Heap
jvm.popFrame(); // Stack frame popped: tempObj becomes unreachable

const gcStats = jvm.runMinorGc();
console.log('Reclaimed Unreachable Objects:', gcStats.reclaimed); // -> 1
console.log('Surviving Live Objects in Heap:', gcStats.surviving); // -> 1`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Bytecode',
          def: {
            en: 'Platform-neutral instruction set (.class files) generated by javac and executed by the Java Virtual Machine.',
            bn: 'প্ল্যাটফর্ম-স্বাধীন নির্দেশমালা (.class ফাইল) যা javac কম্পাইলার তৈরি করে এবং JVM পরিচালনা করে।'
          }
        },
        {
          term: 'ClassLoader Subsystem',
          def: {
            en: 'Component responsible for dynamically loading binary class files into JVM memory, verifying security, and initializing static fields.',
            bn: 'JVM এর বিশেষ অংশ যা ক্লাস ফাইল মেমোরিতে লোড করে, নিরাপত্তা পরীক্ষা করে এবং স্ট্যাটিক প্রপার্টি প্রস্তুত করে।'
          }
        },
        {
          term: 'Just-In-Time (JIT) Compiler',
          def: {
            en: 'HotSpot component compiling frequently executed bytecode sequences into native CPU machine instructions at runtime.',
            bn: 'হটস্পট কম্পোনেন্ট যা রানটাইমে বারবার ব্যবহৃত বাইটকোডকে সরাসরি প্রসেসরের মেশিন কোডে কম্পাইল করে গতি বাড়ায়।'
          }
        },
        {
          term: 'Generational Heap',
          def: {
            en: 'Memory model splitting the heap into Young (Eden, S0, S1) and Old generations based on the weak generational hypothesis.',
            bn: 'মেমোরি কাঠামো যা নতুন অবজেক্টগুলোকে ইয়ং জেনারেশন এবং দীর্ঘস্থায়ী অবজেক্টগুলোকে ওল্ড জেনারেশনে ভাগ করে রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'wora-bytecode-concept-ex1',
      kind: 'mcq',
      topic: 'wora-bytecode-architecture',
      question: {
        en: 'What architectural component enables Java\'s "Write Once, Run Anywhere" (WORA) capability across distinct operating systems?',
        bn: 'কোন স্থাপত্যিক উপাদানের কারণে জাভা বিভিন্ন অপারেটিং সিস্টেমে "Write Once, Run Anywhere" সুবিধা দিতে পারে?'
      },
      options: [
        {
          en: 'The platform-independent bytecode (.class) which is executed by platform-specific Java Virtual Machines (JVMs)',
          bn: 'প্ল্যাটফর্ম-স্বাধীন বাইটকোড (.class), যা প্রতিটি অপারেটিং সিস্টেমের জন্য তৈরি নিজস্ব JVM দ্বারা কার্যকর হয়'
        },
        {
          en: 'Operating systems convert Java into HTML automatically',
          bn: 'অপারেটিং সিস্টেম জাভাকে স্বয়ংক্রিয়ভাবে এইচটিএমএলে বদলে দেয়'
        },
        {
          en: 'Java programs require no hardware CPU to execute',
          bn: 'জাভা চালানোর জন্য কোনো হার্ডওয়্যার সিপিইউ লাগে না'
        },
        {
          en: 'Java source code is sent to an external server on every run',
          bn: 'প্রতিবার চালানোর সময় সোর্স কোড বাইরের সার্ভারে পাঠানো হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Bytecode is neutral; the JVM translates it into operating system machine code.',
        bn: 'বাইটকোড সবার জন্য এক; প্রতিটি ওএস-এর নিজস্ব JVM তা স্থানীয় মেশিন কোডে রূপান্তর করে।'
      },
      explanation: {
        en: 'javac compiles to universal bytecode; each OS has a tailored JVM implementing the hardware-specific translation.',
        bn: 'বাইটকোড সার্বজনীন থাকে এবং নির্দিষ্ট অপারেটিং সিস্টেমের JVM সেটিকে সংশ্লিষ্ট মেশিন কোডে চালায়।'
      }
    },
    {
      id: 'classloader-delegation-model-ex2',
      kind: 'mcq',
      topic: 'classloader-parent-delegation-model',
      question: {
        en: 'What is the "Parent Delegation Model" employed by JVM ClassLoaders?',
        bn: 'JVM ক্লাস-লোডারের "Parent Delegation Model" বলতে কী বোঝায়?'
      },
      options: [
        {
          en: 'A ClassLoader always delegates class loading requests to its parent ClassLoader before attempting to locate and load the class itself',
          bn: 'একটি ক্লাস-লোডার নিজে ক্লাস খোঁজার পূর্বে সর্বদা তার অভিভাবক ক্লাস-লোডারকে ক্লাসটি লোড করার অনুরোধ পাঠায়'
        },
        {
          en: 'A mechanism that restarts the computer if a class is missing',
          bn: 'ক্লাস না পেলে কম্পিউটার রিস্টার্ট করার মেকানিজম'
        },
        {
          en: 'ClassLoaders only load classes created by the root administrator',
          bn: 'ক্লাস-লোডার কেবল রুট অ্যাডমিনিস্ট্রেটরের ক্লাস লোড করে'
        },
        {
          en: 'It deletes older versions of class files automatically',
          bn: 'এটি পুরানো ক্লাস ফাইলগুলো নিজে থেকেই মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Child loaders delegate up the hierarchy (to Bootstrap, Platform) before loading locally.',
        bn: 'চাইল্ড লোডার নিজে কাজ করার আগে হায়ারার্কির ওপরের লোডারকে দায়িত্ব দেয়।'
      },
      explanation: {
        en: 'Parent delegation prevents malicious code from replacing trusted Java core classes like java.lang.String.',
        bn: 'প্যারেন্ট ডেলিগেশন নিশ্চিত করে যে java.lang.String এর মতো মৌলিক কোর ক্লাসগুলো যেন কেউ অনাকাঙ্ক্ষিতভাবে বদলে না ফেলে।'
      }
    },
    {
      id: 'jit-tiered-compilation-c1-c2-ex3',
      kind: 'mcq',
      topic: 'hotspot-c1-c2-tiered-compilation',
      question: {
        en: 'How do the C1 and C2 compilers work together in HotSpot Tiered Compilation?',
        bn: 'হটস্পট টায়ার্ড কম্পাইলেশনে C1 এবং C2 কম্পাইলার কীভাবে একসাথে কাজ করে?'
      },
      options: [
        {
          en: 'C1 compiles quickly with profiling to reduce startup latency, while C2 aggressively optimizes hot methods for peak long-term server throughput',
          bn: 'C1 শুরুর গতি বাড়াতে দ্রুত প্রাথমিক কম্পাইল করে, আর C2 বারবার চলা মেথডগুলোকে সর্বোচ্চ দীর্ঘমেয়াদী গতির জন্য গভীরভাবে অপ্টিমাইজ করে'
        },
        {
          en: 'C1 compiles numbers and C2 compiles text',
          bn: 'C1 সংখ্যা কম্পাইল করে আর C2 টেক্সট কম্পাইল করে'
        },
        {
          en: 'C1 only runs on Windows and C2 only runs on Linux',
          bn: 'C1 কেবল উইন্ডোজে চলে আর C2 কেবল লিনাক্সে চলে'
        },
        {
          en: 'They are identical aliases that alternate randomly',
          bn: 'তারা একে অপরের হুবহু একই এবং এলোমেলোভাবে কাজ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Tiered compilation balances rapid startup (C1) with peak steady-state performance (C2).',
        bn: 'টায়ার্ড কম্পাইলেশন দ্রুত শুরুর গতি এবং দীর্ঘমেয়াদী সর্বোচ্চ পারফরম্যান্সের চমৎকার ভারসাম্য রাখে।'
      },
      explanation: {
        en: 'Tiered compilation utilizes C1 for fast startup profiling, graduating hot execution paths to C2 for heavy optimization.',
        bn: 'C1 দ্রুত কোড চালু করে প্রোফাইলিং তথ্য সংগ্রহ করে, যা দেখে C2 মেমোরি ও প্রসেসরের সর্বোচ্চ গতি নিশ্চিত করে।'
      }
    },
    {
      id: 'stack-vs-heap-memory-distinction-ex4',
      kind: 'mcq',
      topic: 'stack-vs-heap-allocation-rules',
      question: {
        en: 'What fundamental difference distinguishes Stack memory from Heap memory in the JVM?',
        bn: 'JVM-এ স্ট্যাক মেমোরি এবং হিপ মেমোরির মধ্যে মৌলিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'Stack is thread-private and stores method frames and local variables; Heap is shared across all threads and stores instantiated objects',
          bn: 'স্ট্যাক প্রতিটি থ্রেডের নিজস্ব এবং লোকাল ভেরিয়েবল রাখে; আর হিপ সমস্ত থ্রেডের মাঝে শেয়ার করা থাকে এবং সব অবজেক্ট ধারণ করে'
        },
        {
          en: 'Heap memory is deleted every 2 seconds automatically',
          bn: 'হিপ মেমোরি প্রতি ২ সেকেন্ড পর পর মুছে যায়'
        },
        {
          en: 'Stack stores files and Heap stores network packets',
          bn: 'স্ট্যাক ফাইল জমা রাখে আর হিপ নেটওয়ার্ক প্যাকেট রাখে'
        },
        {
          en: 'There is zero difference; they refer to the identical memory space',
          bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা একই মেমোরি স্পেস'
        }
      ],
      answer: 0,
      hint: {
        en: 'Stack frames are thread-scoped and short-lived; Heap holds long-lived objects subject to Garbage Collection.',
        bn: 'স্ট্যাক থ্রেডের অধীনে অল্প সময়ের জন্য থাকে; আর হিপে অবজেক্ট তৈরি হয় যা গার্বেজ কালেক্টর পরিষ্কার করে।'
      },
      explanation: {
        en: 'Stack memory is thread-confined and freed upon method return; Heap memory is globally shared and reclaimed by the GC.',
        bn: 'স্ট্যাক ফাংশন শেষ হলেই সাথে সাথে খালি হয়, কিন্তু হিপের অবজেক্টগুলোকে গার্বেজ কালেক্টর মেমোরি থেকে সরায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-jvm-and-the-bytecode',
    title: {
      en: 'JVM Bytecode, ClassLoading and Memory Quiz',
      bn: 'JVM বাইটকোড, ক্লাস-লোডিং এবং মেমোরি কুইজ'
    },
    questions: [
      {
        id: 'quiz-magic-number-class-files',
        kind: 'mcq',
        topic: 'class-file-magic-number-header',
        question: {
          en: 'What 4-byte hexadecimal magic number starts every compiled Java .class file?',
          bn: 'প্রতিটি কম্পাইল করা জাভা .class ফাইলের শুরুতে কোন ৪-বাইটের হেক্সাডেসিমেল ম্যাজিক নম্বরটি থাকে?'
        },
        options: [
          { en: '0xCAFEBABE', bn: '0xCAFEBABE' },
          { en: '0xDEADBEEF', bn: '0xDEADBEEF' },
          { en: '0xJAVAJAVA', bn: '0xJAVAJAVA' },
          { en: '0x00000000', bn: '0x00000000' }
        ],
        answer: 0,
        hint: {
          en: 'The famous Java magic number relates to coffee beans and was coined by James Gosling.',
          bn: 'জাভার বিখ্যাত ম্যাজিক নম্বরটি কফি সম্পর্কিত এবং জেমস গসলিং এটি নির্ধারণ করেছিলেন।'
        },
        explanation: {
          en: '0xCAFEBABE is the mandatory magic header identifying valid Java class files to the ClassLoader verifier.',
          bn: '0xCAFEBABE হলো জাভা ক্লাস ফাইলের প্রাতিষ্ঠানিক ম্যাজিক নম্বর যা ক্লাস-লোডার ভেরিফায়ার নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-metaspace-native-memory-evolution',
        kind: 'mcq',
        topic: 'metaspace-vs-permgen-evolution',
        question: {
          en: 'How did Java 8 replace PermGen (Permanent Generation) to eliminate "java.lang.OutOfMemoryError: PermGen space"?',
          bn: 'জাভা ৮ এ "OutOfMemoryError: PermGen space" দূর করতে PermGen এর বদলে কী আনা হয়েছে?'
        },
        options: [
          {
            en: 'It replaced PermGen with Metaspace, which allocates class metadata in native OS memory that dynamically expands as needed',
            bn: 'PermGen সরিয়ে Metaspace আনা হয়েছে, যা সরাসরি অপারেটিং সিস্টেমের নেটিভ মেমোরিতে ক্লাস মেটাডেটা রাখে এবং প্রয়োজনমতো বাড়ে'
          },
          {
            en: 'It deleted all class metadata from memory',
            bn: 'এটি মেমোরি থেকে সব ক্লাস মেটাডেটা মুছে ফেলে'
          },
          {
            en: 'It compressed bytecode into zip files',
            bn: 'এটি বাইটকোডকে জিপ ফাইলে রূপান্তর করে'
          },
          {
            en: 'PermGen space was increased to 1 terabyte by default',
            bn: 'PermGen এর আকার ১ টেরাবাইট বাড়িয়ে দেওয়া হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Metaspace lives in native memory outside the fixed contiguous JVM heap.',
          bn: 'মেটাস্পেস ফিক্সড হিপের বাইরে ওএস-এর নিজস্ব সাধারণ মেমোরিতে পরিচালিত হয়।'
        },
        explanation: {
          en: 'Metaspace dynamically sizes class metadata using native host memory, preventing the rigid PermGen OOM crashes.',
          bn: 'মেটাস্পেস প্রয়োজনমতো প্রসারিত হতে পারে বলে পুরানো পারমজেন মেমোরি সংকটের ঝুঁকি আর থাকে না।'
        }
      },
      {
        id: 'quiz-escape-analysis-stack-allocation',
        kind: 'mcq',
        topic: 'jit-escape-analysis-stack-allocation',
        question: {
          en: 'What optimization does JIT Escape Analysis perform when an object does not escape the defining method scope?',
          bn: 'কোনো অবজেক্ট মেথডের বাইরে না গেলে JIT এস্কেপ অ্যানালাইসিস কোন অপ্টিমাইজেশনটি সম্পন্ন করে?'
        },
        options: [
          {
            en: 'It can allocate the object on the thread stack instead of the heap, eliminating GC allocation and collection overhead',
            bn: 'এটি অবজেক্টটিকে হিপে না বানিয়ে সরাসরি থ্রেড স্ট্যাকে তৈরি করে, ফলে কোনো গার্বেজ কালেকশনের প্রয়োজন হয় না'
          },
          {
            en: 'It encrypts the object references',
            bn: 'এটি অবজেক্ট রেফারেন্সগুলো এনক্রিপ্ট করে'
          },
          {
            en: 'It deletes the method from memory',
            bn: 'এটি মেমোরি থেকে মেথডটি মুছে ফেলে'
          },
          {
            en: 'It turns the object into a static string',
            bn: 'এটি অবজেক্টটিকে স্ট্যাটিক স্ট্রিংয়ে পরিণত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If an object never escapes a method, its fields can be scalar-replaced or stack-allocated.',
          bn: 'মেথড থেকে অবজেক্ট বাইরে না গেলে তা সরাসরি স্ট্যাকে সংরক্ষণ করে হিপের চাপ কমানো যায়।'
        },
        explanation: {
          en: 'Escape analysis proves an object is method-local, allowing stack allocation or scalar replacement to bypass the Heap and GC entirely.',
          bn: 'এস্কেপ অ্যানালাইসিসের মাধ্যমে অবজেক্ট স্ট্যাকে তৈরি হওয়ায় হিপ মেমোরি ও গার্বেজ কালেক্টরের কোনো সময় অপচয় হয় না।'
        }
      },
      {
        id: 'quiz-minor-vs-major-gc-scope',
        kind: 'mcq',
        topic: 'minor-vs-major-garbage-collection',
        question: {
          en: 'What is the operational scope difference between a Minor GC and a Major (Full) GC in the JVM?',
          bn: 'JVM-এ মাইনর জিসি এবং মেজর (ফুল) জিসির কাজের পরিধির মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'Minor GC cleans only the Young Generation (Eden and Survivor spaces), while Major GC reclaims unreachable objects across the Tenured Old Generation',
            bn: 'মাইনর জিসি শুধুমাত্র ইয়ং জেনারেশন (ইডেন ও সারভাইভার) পরিষ্কার করে, আর মেজর জিসি সম্পূর্ণ ওল্ড জেনারেশনের মেমোরি খালি করে'
          },
          {
            en: 'Minor GC only runs on Sundays',
            bn: 'মাইনর জিসি কেবল ছুটির দিনে চলে'
          },
          {
            en: 'Major GC deletes all active thread stacks',
            bn: 'মেজর জিসি সমস্ত সক্রিয় থ্রেড স্ট্যাক ডিলিট করে দেয়'
          },
          {
            en: 'There is zero difference; they are exact aliases',
            bn: 'তাদের মধ্যে কোনো পার্থক্য নেই; তারা অবিকল এক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Minor GC is fast and frequent for short-lived young objects; Major GC manages long-lived tenured memory.',
          bn: 'মাইনর জিসি নতুন অবজেক্টের জন্য দ্রুত চলে; আর মেজর জিসি দীর্ঘস্থায়ী মেমোরি পরিষ্কার করে।'
        },
        explanation: {
          en: 'Minor GC targets the short-lived Young Generation quickly; Full GC pauses to reclaim the entire Old Generation heap.',
          bn: 'মাইনর জিসি ইয়ং জেনারেশনে খুব দ্রুত সম্পন্ন হয়, আর ফুল জিসি পুরো ওল্ড জেনারেশনের মেমোরি পুনরুদ্ধার করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'classes-and-the-object',
    title: {
      en: 'OOP Foundations, Records & Interface Contracts',
      bn: 'OOP ভিত্তি, রেকর্ডস এবং ইন্টারফেস চুক্তি'
    }
  }
};
