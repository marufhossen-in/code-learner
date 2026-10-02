import type { Lesson } from '../../../lib/types';

export const theUndoFortressLesson: Lesson = {
  slug: 'the-undo-fortress',
  tech: 'stacks',
  title: {
    en: 'Undo and Redo Architecture — Command Pattern and Dual Stacks',
    bn: 'আনডু এবং রিডু আর্কিটেকচার: কমান্ড প্যাটার্ন এবং ডুয়াল স্ট্যাক'
  },
  summary: {
    en: 'Modern desktop and web applications rely on Undo (Ctrl+Z) and Redo (Ctrl+Y) to let users navigate mutation histories safely. This functionality is powered by two complementary LIFO stacks paired with the Gang of Four Command Pattern. We analyze the lifecycle of command objects, examine why any new mutation must strictly flush the redo stack to prevent timeline divergence, and explore keystroke coalescing techniques used in production code editors.',
    bn: 'আধুনিক ডেস্কটপ ও ওয়েব অ্যাপ্লিকেশন ব্যবহারকারীদের নিরাপদে অতীত পরিবর্তনের ইতিহাসে যাতায়াত করার জন্য আনডু (Ctrl+Z) এবং রিডু (Ctrl+Y) ফিচারের ওপর নির্ভর করে। এই কার্যকারিতা দুটি পরিপূরক লিফো স্ট্যাক এবং গ্যাং অফ ফোরের কমান্ড প্যাটার্নের সমন্বয়ে পরিচালিত হয়। আমরা কমান্ড অবজেক্টের জীবনচক্র বিশ্লেষণ করি, ব্যাখ্যা করি কেন নতুন কোনো পরিবর্তনের সাথে সাথে রিডু স্ট্যাক সম্পূর্ণরূপে খালি করতে হয় এবং প্রডাকশন এডিটরে কি-স্ট্রোক একত্রীকরণের কৌশল পর্যালোচনা করি।'
  },
  minutes: 24,
  nextLesson: {
    slug: 'the-backtrack-expedition',
    tech: 'stacks',
    title: {
      en: 'Backtracking and Depth-First Search — The Stack Memory of Decisions',
      bn: 'ব্যাকট্র্যাকিং এবং ডেপথ-ফার্স্ট সার্চ: সিদ্ধান্তের স্ট্যাক মেমোরি'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'undo-redo-paradigm',
      text: {
        en: 'The Dual-Stack History Architecture',
        bn: 'ডুয়াল-স্ট্যাক ইতিহাস আর্কিটেকচার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Every professional application—from code editors like VS Code to graphic design tools like Figma—offers Undo and Redo operations. Rather than saving massive snapshots of the entire document, systems encapsulate every user modification into a Command Object containing both execute() and undo() routines.',
        bn: 'ভিএস কোডের মতো কোড এডিটর থেকে শুরু করে ফিগমার মতো গ্রাফিক ডিজাইন সফটওয়্যার পর্যন্ত প্রতিটি পেশাদার অ্যাপ্লিকেশন আনডু এবং রিডু সুবিধা দেয়। পুরো ডকুমেন্টের বিশাল স্ন্যাপশট সংরক্ষণ করার বদলে সিস্টেম প্রতিটি পরিবর্তনকে একটি কমান্ড অবজেক্টে আবদ্ধ করে যাতে execute() এবং undo() উভয় মেথড থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Managing these reversible commands requires two coordinated stacks: the Undo Stack and the Redo Stack. When a user presses Undo, the top command is popped from the undo stack, inverted, and placed onto the redo stack. When Redo is triggered, the command moves in the reverse direction.',
        bn: 'এই পরিবর্তনযোগ্য কমান্ডগুলো পরিচালনা করতে দুটি সমন্বিত স্ট্যাকের প্রয়োজন হয়: আনডু স্ট্যাক এবং রিডু স্ট্যাক। যখন কোনো ব্যবহারকারী আনডু চাপে, তখন আনডু স্ট্যাকের শীর্ষ কমান্ডটি পপ করা হয়, তার বিপরীত ক্রিয়া চালানো হয় এবং রিডু স্ট্যাকে রাখা হয়। রিডু কল করা হলে কমান্ডটি উল্টো দিকে ফিরে আসে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'command-pattern',
          def: {
            en: 'A behavioral design pattern that encapsulates an action as an object containing both execute() and undo() methods.',
            bn: 'একটি আচরণগত ডিজাইন প্যাটার্ন যা execute() এবং undo() মেথডসহ কোনো কাজকে একটি অবজেক্টে আবদ্ধ করে।'
          }
        },
        {
          term: 'undo-stack',
          def: {
            en: 'A LIFO stack storing completed command objects, enabling the most recent mutation to be reversed first.',
            bn: 'সম্পন্ন হওয়া কমান্ড অবজেক্ট ধারণকারী একটি স্ট্যাক যা সর্বশেষ পরিবর্তনকে সবার আগে বাতিল করার সুযোগ দেয়।'
          }
        },
        {
          term: 'redo-stack',
          def: {
            en: 'A secondary stack storing commands that were previously undone, allowing them to be re-applied until a new mutation occurs.',
            bn: 'পূর্বে বাতিল করা কমান্ড ধারণকারী একটি মাধ্যমিক স্ট্যাক যা নতুন কোনো পরিবর্তন না হওয়া পর্যন্ত তা পুনরায় কার্যকর করতে দেয়।'
          }
        },
        {
          term: 'redo-flush-rule',
          def: {
            en: 'An architectural invariant requiring the redo stack to be completely cleared whenever a new user mutation is executed.',
            bn: 'একটি অপরিবর্তনীয় নিয়ম যা নির্দেশ করে যে নতুন কোনো পরিবর্তন ঘটার সাথে সাথে রিডু স্ট্যাক সম্পূর্ণ খালি করতে হবে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'stack'
    },
    {
      type: 'heading',
      id: 'command-lifecycle-table',
      text: {
        en: 'The Command Lifecycle Across User Interactions',
        bn: 'ব্যবহারকারীর ক্রিয়ায় কমান্ডের জীবনচক্র'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The most critical architectural law of undo systems is the Redo-Flush Rule. If a user undoes three steps and then types a new character, the entire redo stack must be cleared immediately. A new mutation establishes an alternative timeline, rendering previously undone commands invalid.',
        bn: 'আনডু সিস্টেমের সবচেয়ে গুরুত্বপূর্ণ স্থাপত্য নীতি হলো রিডু-ফ্লাশ নিয়ম। যদি কোনো ব্যবহারকারী তিনটি ধাপ আনডু করার পর একটি নতুন অক্ষর টাইপ করে, তবে সাথে সাথে পুরো রিডু স্ট্যাক খালি করতে হবে। নতুন কোনো পরিবর্তন একটি বিকল্প টাইমলাইন তৈরি করে, যা পূর্ববর্তী বাতিল করা কমান্ডগুলোকে অকার্যকর করে দেয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'User Interaction', bn: 'ব্যবহারকারীর কাজ' },
        { en: 'Command Invocation', bn: 'কমান্ড কল' },
        { en: 'Undo Stack Transition', bn: 'আনডু স্ট্যাক পরিবর্তন' },
        { en: 'Redo Stack Transition', bn: 'রিডু স্ট্যাক পরিবর্তন' }
      ],
      rows: [
        [
          { en: 'Do New Command', bn: 'নতুন কাজ সম্পাদন' },
          { en: 'command.execute()', bn: 'command.execute()' },
          { en: 'Push new command', bn: 'নতুন কমান্ড পুশ' },
          { en: 'Cleared to empty', bn: 'সম্পূর্ণ খালি করা হয়' }
        ],
        [
          { en: 'Undo (Ctrl+Z)', bn: 'আনডু (Ctrl+Z)' },
          { en: 'command.undo()', bn: 'command.undo()' },
          { en: 'Pop top command', bn: 'শীর্ষ কমান্ড পপ' },
          { en: 'Push popped command', bn: 'পপ করা কমান্ড পুশ' }
        ],
        [
          { en: 'Redo (Ctrl+Y)', bn: 'রিডু (Ctrl+Y)' },
          { en: 'command.execute()', bn: 'command.execute()' },
          { en: 'Push popped command', bn: 'পপ করা কমান্ড পুশ' },
          { en: 'Pop top command', bn: 'শীর্ষ কমান্ড পপ' }
        ],
        [
          { en: 'New Action after Undo', bn: 'আনডুর পর নতুন কাজ' },
          { en: 'newCmd.execute()', bn: 'newCmd.execute()' },
          { en: 'Push newCmd', bn: 'newCmd পুশ' },
          { en: 'Cleared to empty', bn: 'সম্পূর্ণ খালি করা হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'undo-redo-impl',
      text: {
        en: 'Executable Text Document with Undo and Redo Implementation',
        bn: 'আনডু এবং রিডুসহ টেক্সট ডকুমেন্টের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program implements an editable TextDocument backed by two stacks. Notice how executing a new AppendCommand after an undo operation flushes the redo stack to 0 elements, preventing timeline divergence.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি দুটি স্ট্যাক ব্যবহার করে একটি টেক্সট ডকুমেন্ট বাস্তবায়ন করে। লক্ষ্য করুন কীভাবে আনডু করার পর একটি নতুন AppendCommand চালানোর ফলে রিডু স্ট্যাক খালি হয়ে ০টি উপাদানে নেমে আসে, যা টাইমলাইনের বিভ্রান্তি রোধ করে।'
      }
    },
    {
      type: 'code',
      code: `class TextDocument {
  constructor() {
    this.text = '';
    this.undoStack = [];
    this.redoStack = [];
  }

  execute(command) {
    command.execute(this);
    this.undoStack.push(command);
    this.redoStack = []; // Flushes redo stack on new action
  }

  undo() {
    if (this.undoStack.length === 0) return false;
    const command = this.undoStack.pop();
    command.undo(this);
    this.redoStack.push(command);
    return true;
  }

  redo() {
    if (this.redoStack.length === 0) return false;
    const command = this.redoStack.pop();
    command.execute(this);
    this.undoStack.push(command);
    return true;
  }
}

class AppendCommand {
  constructor(appendedText) {
    this.appendedText = appendedText;
  }

  execute(doc) {
    doc.text += this.appendedText;
  }

  undo(doc) {
    doc.text = doc.text.slice(0, -this.appendedText.length);
  }
}

const doc = new TextDocument();
doc.execute(new AppendCommand('Hello '));
doc.execute(new AppendCommand('World!'));

console.log('Current Text:', doc.text);
// Output: Current Text: Hello World!
console.log('Undo Stack Size:', doc.undoStack.length);
// Output: Undo Stack Size: 2
console.log('Redo Stack Size:', doc.redoStack.length);
// Output: Redo Stack Size: 0

doc.undo();
console.log('After 1st Undo:', doc.text);
// Output: After 1st Undo: Hello 
console.log('Redo Stack Size:', doc.redoStack.length);
// Output: Redo Stack Size: 1

doc.redo();
console.log('After Redo:', doc.text);
// Output: After Redo: Hello World!

doc.undo();
doc.execute(new AppendCommand('Arena!'));
console.log('After New Action:', doc.text);
// Output: After New Action: Hello Arena!
console.log('Redo Stack Size (Flushed):', doc.redoStack.length);
// Output: Redo Stack Size (Flushed): 0`
    },
    {
      type: 'heading',
      id: 'keystroke-coalescing',
      text: {
        en: 'Production Optimization: Keystroke Coalescing',
        bn: 'বাস্তব অপ্টিমাইজেশন: কি-স্ট্রোক একত্রীকরণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If a code editor pushed a new command object for every single letter typed, undoing a 50-character sentence would require pressing Ctrl+Z 50 consecutive times. Production text editors solve this using Keystroke Coalescing: continuous typing within a brief time window (e.g. 500ms) merges into a single composite command until a pause or whitespace occurs.',
        bn: 'যদি কোনো কোড এডিটর টাইপ করা প্রতিটি একক অক্ষরের জন্য একটি করে নতুন কমান্ড পুশ করত, তবে ৫০ অক্ষরের একটি বাক্য মুছতে ব্যবহারকারীকে টানা ৫০ বার Ctrl+Z চাপতে হতো। প্রডাকশন এডিটরগুলো কি-স্ট্রোক একত্রীকরণ (Coalescing) পদ্ধতির মাধ্যমে এর সমাধান করে: নির্দিষ্ট সময়সীমার মধ্যে (যেমন ৫০০ মিলিসেকেন্ড) টাইপ করা অক্ষরগুলোকে একটিমাত্র যৌগিক কমান্ডে একত্রিত করা হয় যতক্ষণ না কোনো বিরতি বা স্পেস আসে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Dual-stack coordination: Undo and redo operations are modeled as two mirror LIFO stacks exchanging command objects.',
          bn: 'ডুয়াল-স্ট্যাক সমন্বয়: আনডু এবং রিডু দুটি পরিপূরক লিফো স্ট্যাক হিসেবে পরিচালিত হয় যা কমান্ড অবজেক্ট আদান-প্রদান করে।'
        },
        {
          en: 'Command encapsulation: Storing execute() and undo() routines eliminates the memory overhead of storing full document snapshots.',
          bn: 'কমান্ড এনক্যাপসুলেশন: execute() এবং undo() মেথড রাখলে পুরো ডকুমেন্টের কপি সংরক্ষণের মেমোরি অপচয় দূর হয়।'
        },
        {
          en: 'Redo flush rule: Any new user action invalidates the redo stack to prevent diverging conflicting history timelines.',
          bn: 'রিডু ফ্লাশ নীতি: নতুন কোনো কাজ করার সাথে সাথে রিডু স্ট্যাক খালি হয়ে যায় যাতে ইতিহাসের দ্বিমুখী দ্বন্দ্ব তৈরি না হয়।'
        },
        {
          en: 'Keystroke merging: Merging continuous edits into composite commands ensures intuitive single-step word restorations.',
          bn: 'কি-স্ট্রোক একত্রীকরণ: একটানা লেখাকে একটি কমান্ডে একীভূত করলে ব্যবহারকারী এক ক্লিকেই সম্পূর্ণ শব্দ পূর্বাবস্থায় ফেরাতে পারে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'uf-ex1',
      kind: 'mcq',
      topic: 'redo-flush-rationale',
      question: {
        en: 'Why is it mandatory to flush the Redo stack when a user performs a new mutation after undoing previous actions?',
        bn: 'পূর্ববর্তী কাজ আনডু করার পর ব্যবহারকারী কোনো নতুন পরিবর্তন করলে কেন রিডু স্ট্যাক সম্পূর্ণ খালি করা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'A new action creates a new branch of history, rendering previously undone future commands logically incompatible with the new state',
          bn: 'নতুন পরিবর্তনটি ইতিহাসের একটি নতুন শাখা তৈরি করে, যা পূর্ববর্তী বাতিল করা ভবিষ্যৎ কমান্ডগুলোকে বর্তমান অবস্থার সাথে অসঙ্গতিপূর্ণ করে তোলে'
        },
        {
          en: 'Because the operating system kernel deletes all stacks every 10 seconds',
          bn: 'কারণ অপারেটিং সিস্টেম কার্নেল প্রতি ১০ সেকেন্ড পর পর সমস্ত স্ট্যাক মুছে ফেলে'
        },
        {
          en: 'To reduce the CPU clock speed and save battery power',
          bn: 'সিপিইউ ক্লক স্পিড কমাতে এবং ব্যাটারি বাঁচাতে'
        },
        {
          en: 'JavaScript arrays cannot hold more than 1 command object at a time',
          bn: 'জাভাস্ক্রিপ্ট অ্যারে একসাথে ১টির বেশি কমান্ড অবজেক্ট ধারণ করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'If you typed "Cat", undid "t", and typed "r" to get "Car", can you redo the old "t"?',
        bn: 'আপনি "Cat" লিখে "t" আনডু করে "r" লিখলেন যাতে "Car" হলো, এখন কি পুরোনো "t" রিডু করা সম্ভব?'
      },
      explanation: {
        en: 'The redo stack represents a discarded future. Once the document takes a new path, that old future no longer exists.',
        bn: 'রিডু স্ট্যাক একটি বর্জিত ভবিষ্যৎ নির্দেশ করে। ডকুমেন্ট যখন নতুন পথে এগিয়ে যায় তখন সেই পুরোনো ভবিষ্যৎ আর প্রাসঙ্গিক থাকে না।'
      }
    },
    {
      id: 'uf-ex2',
      kind: 'mcq',
      topic: 'command-vs-memento',
      question: {
        en: 'What primary memory advantage does the Command Pattern offer over naive whole-document Memento snapshots for Undo history?',
        bn: 'আনডু হিস্ট্রির জন্য পুরো ডকুমেন্টের স্ন্যাপশট সংরক্ষণের চেয়ে কমান্ড প্যাটার্ন মেমোরিতে কী প্রধান সুবিধা দেয়?'
      },
      options: [
        {
          en: 'Commands store only the delta change and its inverse, consuming O(1) memory per edit instead of duplicating megabytes of document state',
          bn: 'কমান্ড কেবল নির্দিষ্ট পরিবর্তন ও তার বিপরীত ক্রিয়াটুকু সংরক্ষণ করে, ফলে প্রতি এডিটে মেগাবাইট ডেটা প্রতিলিপি না করে O(1) মেমোরি খরচ হয়'
        },
        {
          en: 'Commands bypass operating system security permissions',
          bn: 'কমান্ড অপারেটিং সিস্টেমের নিরাপত্তা অনুমতি বাইপাস করে'
        },
        {
          en: 'Commands run in zero clock cycles on all CPUs',
          bn: 'সমস্ত সিপিইউতে কমান্ড শূন্য ক্লক সাইকেলে কার্যকর হয়'
        },
        {
          en: 'Commands compress images using 100 percent lossless encryption',
          bn: 'কমান্ড ছবিগুলোকে ১০০ শতাংশ ক্ষতিহীন এনক্রিপশনে সংকুচিত করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of a 500-page book: do you save 500 pages after typing one word, or just save the typed word?',
        bn: 'একটি ৫০০ পৃষ্ঠার বইয়ের কথা ভাবুন: একটি শব্দ লেখার পর কি ৫০০ পৃষ্ঠা সেভ করবেন নাকি শুধু লেখা শব্দটি সংরক্ষণ করবেন?'
      },
      explanation: {
        en: 'Storing small delta commands keeps memory consumption tiny and predictable, enabling thousands of undo levels without memory exhaustion.',
        bn: 'ক্ষুদ্র পরিবর্তন সংরক্ষণ করলে মেমোরি খরচ অত্যন্ত কম থাকে, যা মেমোরি শেষ না করে হাজার হাজার আনডু ধাপ মনে রাখতে দেয়।'
      }
    },
    {
      id: 'uf-ex3',
      kind: 'mcq',
      topic: 'keystroke-coalescing-purpose',
      question: {
        en: 'What user experience problem does Keystroke Coalescing solve in text editor undo architectures?',
        bn: 'টেক্সট এডিটরের আনডু আর্কিটেকচারে কি-স্ট্রোক একত্রীকরণ (Coalescing) ব্যবহারকারীর কোন অভিজ্ঞতা সমস্যা দূর করে?'
      },
      options: [
        {
          en: 'It prevents users from having to press Ctrl+Z 100 times to undo a single typed sentence by merging letters into a compound word command',
          bn: 'অক্ষরগুলোকে একটি যৌগিক শব্দ কমান্ডে একীভূত করে এটি একটি বাক্য মুছতে ব্যবহারকারীকে ১০০ বার Ctrl+Z চাপার বিরক্তি থেকে মুক্তি দেয়'
        },
        {
          en: 'It automatically fixes English spelling and grammar errors',
          bn: 'এটি স্বয়ংক্রিয়ভাবে ইংরেজি বানান এবং ব্যাকরণগত ভুল সংশোধন করে'
        },
        {
          en: 'It doubles the network internet connection bandwidth',
          bn: 'এটি ইন্টারনেট সংযোগের ব্যান্ডউইথ দ্বিগুণ করে দেয়'
        },
        {
          en: 'It permanently deletes user files from disk',
          bn: 'এটি ডিস্ক থেকে ব্যবহারকারীর ফাইল স্থায়ীভাবে মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Should pressing Ctrl+Z delete a single character or a meaningful unit of thought?',
        bn: 'Ctrl+Z চাপলে কি একটিমাত্র অক্ষর মোছা উচিত নাকি একটি পূর্ণাঙ্গ শব্দ?'
      },
      explanation: {
        en: 'Grouping character insertions by time window or word boundary aligns the undo mechanism with human editing intent.',
        bn: 'সময়সীমা বা শব্দের ভিত্তিতে অক্ষরগুলোকে দলভুক্ত করলে আনডু প্রক্রিয়া মানুষের কাজের স্বাভাবিক ছন্দের সাথে সামঞ্জস্যপূর্ণ হয়।'
      }
    }
  ],
  quiz: {
    id: 'undo-fortress-quiz',
    title: {
      en: 'Undo and Redo Architecture Quiz',
      bn: 'আনডু এবং রিডু আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'uf-q1',
        kind: 'mcq',
        topic: 'empty-undo-stack-behavior',
        question: {
          en: 'What should an application do when the user presses Undo (Ctrl+Z) while the undo stack is completely empty?',
          bn: 'আনডু স্ট্যাক সম্পূর্ণ খালি থাকা অবস্থায় ব্যবহারকারী আনডু (Ctrl+Z) চাপলে অ্যাপ্লিকেশনের কী করা উচিত?'
        },
        options: [
          {
            en: 'Perform a harmless NO-OP (no operation) without crashing or modifying the document',
            bn: 'কোনো ক্র্যাশ বা ডকুমেন্টের পরিবর্তন ছাড়াই একটি নিরাপদ নো-অপ (NO-OP) পরিচালনা করা'
          },
          {
            en: 'Throw an unhandled JavaScript exception and crash the application',
            bn: 'একটি হ্যান্ডেল না করা জাভাস্ক্রিপ্ট এক্সেপশন ছুড়ে অ্যাপ্লিকেশনটি ক্র্যাশ করানো'
          },
          {
            en: 'Delete all text in the document',
            bn: 'ডকুমেন্টের সমস্ত টেক্সট মুছে ফেলা'
          },
          {
            en: 'Restart the user computer immediately',
            bn: 'ব্যবহারকারীর কম্পিউটার তৎক্ষণাৎ রিস্টার্ট করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'If there is nothing in history to undo, doing nothing is the safe response.',
          bn: 'যদি আনডু করার মতো কোনো ইতিহাস না থাকে, তবে কিছুই না করাই সবচেয়ে নিরাপদ প্রতিক্রিয়া।'
        },
        explanation: {
          en: 'Guarding against stack underflow ensures the application remains stable and unresponsive to invalid undo commands.',
          bn: 'স্ট্যাক আন্ডারফ্লোর প্রতিরোধ নিশ্চিত করে যে অবৈধ আনডু কমান্ডেও অ্যাপ্লিকেশনটি ক্র্যাশ না করে স্থিতিশীল থাকবে।'
        }
      },
      {
        id: 'uf-q2',
        kind: 'mcq',
        topic: 'redo-direction',
        question: {
          en: 'When a Redo operation succeeds, where does the executed command object move to?',
          bn: 'একটি রিডু অপারেশন সফল হলে কার্যকর হওয়া কমান্ড অবজেক্টটি কোথায় স্থানান্তরিত হয়?'
        },
        options: [
          {
            en: 'It is popped from the Redo stack and pushed back onto the Undo stack',
            bn: 'এটি রিডু স্ট্যাক থেকে পপ হয়ে পুনরায় আনডু স্ট্যাকে পুশ হয়'
          },
          {
            en: 'It is permanently deleted from computer RAM',
            bn: 'এটি কম্পিউটার র্যাম থেকে স্থায়ীভাবে মুছে ফেলা হয়'
          },
          {
            en: 'It is uploaded to a remote backup cloud server',
            bn: 'এটি দূরবর্তী কোনো ক্লাউড সার্ভারে আপলোড করা হয়'
          },
          {
            en: 'It stays in the Redo stack at the bottom position',
            bn: 'এটি রিডু স্ট্যাকের একদম নিচে অবস্থান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can you undo an action that was just redone?',
          bn: 'যে কাজটি এইমাত্র রিডু করা হলো তাকে কি আবার আনডু করা সম্ভব?'
        },
        explanation: {
          en: 'Moving the command back to the undo stack allows the user to undo the redone action if they change their mind again.',
          bn: 'কমান্ডটিকে পুনরায় আনডু স্ট্যাকে পাঠালে ব্যবহারকারী সিদ্ধান্ত পরিবর্তন করলে তা আবার আনডু করার সুযোগ পায়।'
        }
      },
      {
        id: 'uf-q3',
        kind: 'mcq',
        topic: 'stack-sizes-after-sequence',
        question: {
          en: 'A user executes 3 actions, calls undo twice, then executes 1 new action. What are the lengths of the Undo and Redo stacks?',
          bn: 'একজন ব্যবহারকারী ৩টি কাজ করলেন, ২ বার আনডু করলেন, তারপর ১টি নতুন কাজ করলেন। এখন আনডু এবং রিডু স্ট্যাকের আকার কত?'
        },
        options: [
          {
            en: 'Undo stack length: 2, Redo stack length: 0',
            bn: 'আনডু স্ট্যাকের আকার: ২, রিডু স্ট্যাকের আকার: ০'
          },
          {
            en: 'Undo stack length: 3, Redo stack length: 2',
            bn: 'আনডু স্ট্যাকের আকার: ৩, রিডু স্ট্যাকের আকার: ২'
          },
          {
            en: 'Undo stack length: 1, Redo stack length: 1',
            bn: 'আনডু স্ট্যাকের আকার: ১, রিডু স্ট্যাকের আকার: ১'
          },
          {
            en: 'Undo stack length: 0, Redo stack length: 4',
            bn: 'আনডু স্ট্যাকের আকার: ০, রিডু স্ট্যাকের আকার: ৪'
          }
        ],
        answer: 0,
        hint: {
          en: '3 actions - 2 undos leaves 1 on undo. The new action adds 1 to undo (making 2) and clears redo to 0.',
          bn: '৩টি কাজ থেকে ২টি আনডু করলে থাকে ১টি। নতুন কাজটি আনডুতে ১টি যোগ করে (হয় ২টি) এবং রিডুকে ০ করে দেয়।'
        },
        explanation: {
          en: 'After 2 undos, undoStack has 1 item and redoStack has 2. The new action pushes onto undoStack (size 2) and flushes redoStack to 0.',
          bn: '২টি আনডুর পর আনডু স্ট্যাকে ১টি ও রিডু স্ট্যাকে ২টি থাকে। নতুন কাজটি আনডু স্ট্যাকে যোগ হয়ে আকার ২ করে এবং রিডু স্ট্যাক ০ তে খালি করে।'
        }
      },
      {
        id: 'uf-q4',
        kind: 'mcq',
        topic: 'bounded-history-budget',
        question: {
          en: 'To prevent memory leaks in applications open for weeks with thousands of edits, how is the undo history bounded?',
          bn: 'হাজার হাজার এডিটসহ সপ্তাহ ধরে চলা অ্যাপ্লিকেশনে মেমোরি লিক রোধ করতে কীভাবে আনডু ইতিহাস সীমাবদ্ধ রাখা হয়?'
        },
        options: [
          {
            en: 'By capping the undo stack at a maximum capacity (e.g. 100 commands) and dropping the oldest commands from the bottom',
            bn: 'আনডু স্ট্যাককে একটি নির্দিষ্ট সীমায় (যেমন ১০০টি কমান্ড) বেঁধে রেখে নিচ থেকে সবচেয়ে পুরোনো কমান্ডগুলো বাতিল করার মাধ্যমে'
          },
          {
            en: 'By prohibiting users from typing more than 100 words per day',
            bn: 'ব্যবহারকারীদের প্রতিদিন ১০০ শব্দের বেশি টাইপ করতে নিষেধ করে'
          },
          {
            en: 'By restarting the operating system every hour',
            bn: 'প্রতি ঘণ্টায় অপারেটিং সিস্টেম রিস্টার্ট করে'
          },
          {
            en: 'By deleting all document formatting',
            bn: 'ডকুমেন্টের সমস্ত ফরম্যাটিং মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think of a circular buffer or a limited-depth stack: discard the oldest past.',
          bn: 'একটি নির্দিষ্ট গভীরতার স্ট্যাকের কথা ভাবুন: সবচেয়ে পুরোনো অতীতকে বাতিল করুন।'
        },
        explanation: {
          en: 'A bounded history ring buffer ensures predictable memory consumption by evicting ancient commands once the threshold is crossed.',
          bn: 'একটি সীমাবদ্ধ হিস্ট্রি বাফার নির্দিষ্ট সীমা পেরিয়ে গেলে অতি পুরোনো কাজগুলো মুছে দিয়ে মেমোরি খরচ নিয়ন্ত্রণে রাখে।'
        }
      }
    ]
  }
};
