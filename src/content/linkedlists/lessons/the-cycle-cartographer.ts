import type { Lesson } from '../../../lib/types';

export const theCycleCartographerLesson: Lesson = {
  slug: 'the-cycle-cartographer',
  tech: 'linked-lists',
  title: {
    en: 'Cycle Detection — Floyd Algorithm, Cycle Length, and Loop Breaking',
    bn: 'চক্র শনাক্তকরণ: ফ্লয়েডের টরটয়েজ-অ্যান্ড-হেয়ার অ্যালগরিদম ও চক্র অপনোদন'
  },
  summary: {
    en: 'A cycle occurs when a node next pointer references an earlier element in the chain, causing infinite traversal loops. Floyd algorithm detects cycles in O(1) auxiliary space using two pointers advancing at speeds 1 and 2. An algebraic invariant guarantees that restarting one pointer at the head pinpoints the cycle origin, enabling safe measurement and cycle severance.',
    bn: 'লিঙ্কড লিস্টে কোনো নোডের next পয়েন্টার পূর্ববর্তী নোডকে নির্দেশ করলে চক্র তৈরি হয়, যা সাধারণ ট্রাভার্সালে অনন্ত লুপ সৃষ্টি করে। ফ্লয়েডের অ্যালগরিদমে ১ ও ২ গতিতে চলা দুটি পয়েন্টারের মাধ্যমে O(1) স্পেসে চক্র শনাক্ত করা যায়। একটি বীজগণিতীয় শর্ত মেনে এক প্রান্ত থেকে পুনরায় শুরু করে চক্রের সূচনা নোড বের করা এবং নিরাপদে চক্রটি ভেঙে সোজা করা সম্ভব হয়।'
  },
  minutes: 20,
  nextLesson: {
    slug: 'the-skip-tower',
    tech: 'linked-lists',
    title: {
      en: 'The Skip Tower: Probabilistic Express Lanes and Logarithmic Search',
      bn: 'স্কিপ টাওয়ার: সম্ভাব্যতা ভিত্তিক এক্সপ্রেস লেন ও লগারিদমিক সার্চ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'cycle-mechanics',
      text: {
        en: 'Anatomy of a Circular Reference',
        bn: 'চক্রাকার রেফারেন্সের অভ্যন্তরীণ গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you iterate through a normal linked list, traversal terminates when cur reaches null. If any node points backwards to an existing node, standard while loops never complete, starving the CPU thread. A naive remedy records every visited node address inside a Set. While this achieves O(n) detection time, allocating hash table buckets costs O(n) extra memory.',
        bn: 'যখন আপনি সাধারণ লিঙ্কড লিস্টে ঘোরেন, তখন cur এর মান null হলে ট্রাভার্সাল শেষ হয়। কোনো নোড যদি পেছনের কোনো নোডকে নির্দেশ করে, তবে সাধারণ while লুপ কখনোই থামে না এবং প্রসেসরে অনন্ত লুপ তৈরি হয়। সহজ সমাধানে একটি Set এর ভেতর প্রতিটি নোডের মেমোরি ঠিকানা রাখা যায়। এটি O(n) সময়ে চক্র খুঁজে পেলেও হ্যাশ টেবিলের মেমোরি খরচে O(n) স্থান নষ্ট হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Floyd cycle detection algorithm solves this dilemma with zero heap allocation. By directing two runners across the chain at different rates, memory consumption stays strictly bounded to 2 pointers. If no loop exists, the fast runner hits null and halts. When a loop exists, both pointers enter the circle where the relative closing rate forces a collision.',
        bn: 'ফ্লয়েডের সাইকেল ডিটেকশন অ্যালগরিদম কোনো মেমোরি অপচয় ছাড়াই এই সমস্যার সমাধান করে। তালিকায় ভিন্ন গতিতে দুটি পয়েন্টার চালিয়ে অতিরিক্ত মেমোরি ব্যবহার ঠিক ২ টি পয়েন্টারে সীমাবদ্ধ রাখা হয়। তালিকায় কোনো চক্র না থাকলে দ্রুতগামী পয়েন্টারটি null পেয়ে থেমে যায়। আর চক্র থাকলে উভয় নির্দেশক বৃত্তে প্রবেশ করে এবং আপেক্ষিক গতির কারণে তাদের সংঘর্ষ নিশ্চিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'cycle-pointer',
          def: {
            en: 'A node next reference pointing to an ancestor element rather than null or an unvisited successor.',
            bn: 'কোনো নোডের next সংযোগ যা নাল বা নতুন নোডের বদলে পূর্বের কোনো উপাদানকে নির্দেশ করে।'
          }
        },
        {
          term: 'relative-velocity',
          def: {
            en: 'The speed differential of 1 node per iteration between fast and slow runners, ensuring collision within cycle length steps.',
            bn: 'দ্রুত ও ধীর পয়েন্টারের গতি ব্যবধান ১ নোড, যা চক্রের দৈর্ঘ্যের সমান বা কম পদক্ষেপে নিশ্চিত সাক্ষাৎ ঘটায়।'
          }
        },
        {
          term: 'cycle-entry',
          def: {
            en: 'The initial node where linear traversal enters the repeating loop, located by Floyd phase two.',
            bn: 'যে নোড থেকে সোজা তালিকাটি প্রথম চক্রে প্রবেশ করে, যা ফ্লয়েডের দ্বিতীয় ধাপে চিহ্নিত হয়।'
          }
        },
        {
          term: 'cycle-severance',
          def: {
            en: 'Setting the loop-closing node next pointer to null to restore a linear singly linked chain.',
            bn: 'চক্রের শেষ নোডের next পয়েন্টারকে নাল করে পুরো তালিকাকে পুনরায় সরলরৈখিক রূপ দেওয়া।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'll'
    },
    {
      type: 'heading',
      id: 'floyd-proof',
      text: {
        en: 'Floyd Phase Two: The Mathematical Proof',
        bn: 'ফ্লয়েডের দ্বিতীয় ধাপ: গাণিতিক প্রমাণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Discovering that a cycle exists is only step 1. Applications like garbage collectors and memory leak detectors must locate the exact entry node. Let distance from head to cycle entrance be k, cycle length be L, and distance from entrance to meeting point be x. When runners collide, slow has traveled k + x steps while fast has traveled k + x + m * L steps for some integer m >= 1.',
        bn: 'চক্রের অস্তিত্ব খুঁজে পাওয়া হলো কেবল ধাপ ১। মেমোরি রিলিজ ও লিংক মেরামত করতে হলে ঠিক কোন নোডে চক্র শুরু তা জানা জরুরি। ধরা যাক হেড থেকে চক্রের প্রবেশপথের দূরত্ব k, চক্রের পরিধি L, এবং প্রবেশপথ থেকে মিলনস্থলের দূরত্ব x। সাক্ষাতের মুহূর্তে ধীর পয়েন্টারটি k + x দূরত্ব অতিক্রম করে এবং দ্রুত পয়েন্টারটি k + x + m * L পথ পেরিয়ে আসে যেখানে m >= ১ একটি পূর্ণসংখ্যা।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Because the fast pointer moves at 2 times the rate of slow, 2(k + x) equals k + x + m * L. Simplifying yields k = m * L - x = (m - 1)L + (L - x). This algebraic identity confirms that walking k steps from head brings a pointer to the cycle start, while walking k steps forward from the collision point also lands exactly on the cycle start.',
        bn: 'যেহেতু দ্রুত পয়েন্টার ধীর পয়েন্টারের চেয়ে ২ গুণ দ্রুত চলে, তাই ২(k + x) এর মান k + x + m * L এর সমান হয়। সমীকরণটি সাজালে পাই k = m * L - x = (m - ১)L + (L - x)। এই গাণিতিক সূত্র প্রমাণ করে যে হেড থেকে k ধাপ হাঁটলে চক্রের শুরুতে পৌঁছানো যায়, ঠিক তেমনি মিলনস্থল থেকে k ধাপ সামনে হাঁটলেও ঠিক চক্রের শুরুতে পৌঁছানো যায়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Metric / Property', bn: 'পরিমাপ / বৈশিষ্ট্য' },
        { en: 'Visited Set Approach', bn: 'ভিজিটেড সেট পদ্ধতি' },
        { en: 'Floyd Tortoise and Hare', bn: 'ফ্লয়েডের দুই পয়েন্টার পদ্ধতি' }
      ],
      rows: [
        [
          { en: 'Auxiliary Space Complexity', bn: 'অতিরিক্ত মেমোরি ব্যবহার' },
          { en: 'O(n) auxiliary memory', bn: 'O(n) অতিরিক্ত মেমোরি' },
          { en: 'O(1) auxiliary memory', bn: 'O(1) অতিরিক্ত মেমোরি' }
        ],
        [
          { en: 'Time Complexity', bn: 'সময় জটিলতা' },
          { en: 'O(n) hash table operations', bn: 'O(n) হ্যাশ টেবিল অপারেশন' },
          { en: 'O(n) pointer step traversal', bn: 'O(n) পয়েন্টার ধাপ ট্রাভার্সাল' }
        ],
        [
          { en: 'Heap Allocation Risk', bn: 'হিপ মেমোরি সংকটের ঝুঁকি' },
          { en: 'May trigger OutOfMemory', bn: 'মেমোরি সংকটের ঝুঁকি থাকে' },
          { en: 'Zero dynamic allocation', bn: 'কোনো ডায়নামিক বরাদ্দ নেই' }
        ],
        [
          { en: 'Cycle Origin Identification', bn: 'চক্র শুরুর নোড নির্ণয়' },
          { en: 'First repeated address seen', bn: 'প্রথম পুনরাবৃত্ত ঠিকানায় ধরা পড়ে' },
          { en: 'Requires Phase 2 pointer walk', bn: 'ধাপ ২ এর ট্রাভার্সাল প্রয়োজন হয়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'full-cycle-pipeline',
      text: {
        en: 'Execution Pipeline: Detect, Locate, Measure, and Break',
        bn: 'কার্যনির্বাহী পাইপলাইন: শনাক্ত, অবস্থান, পরিমাপ ও চক্র অপনোদন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Once the entry node is located, measuring the cycle length requires only holding one pointer stationary while stepping a second pointer around the loop until it returns to the origin. To restore a linear structure, walk through the loop until reaching the terminal item whose link points back to that entrance, then overwrite that field with null.',
        bn: 'একবার প্রবেশ নোড শনাক্ত হলে একটি পয়েন্টার সেখানে স্থির রেখে অন্য পয়েন্টারটি পুরো বৃত্ত ঘুরিয়ে পুনরায় সূচনায় পৌঁছানোর মাধ্যমে চক্রের দৈর্ঘ্য মাপা যায়। আর সরলরৈখিক তালিকা ফেরাতে লুপ ধরে হেঁটে শেষ উপাদানটিতে পৌঁছানো হয় যার সংযোগ প্রবেশদ্বারে ফেরে, তারপর সেই সংযোগে null বসিয়ে দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      code: `class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Build 6-node list with cycle:
// 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> (back to 3)
const n1 = new ListNode(1);
const n2 = new ListNode(2);
const n3 = new ListNode(3);
const n4 = new ListNode(4);
const n5 = new ListNode(5);
const n6 = new ListNode(6);

n1.next = n2;
n2.next = n3;
n3.next = n4;
n4.next = n5;
n5.next = n6;
n6.next = n3; // Creates cycle of length 4 entering at node 3

function inspectAndRepairCycle(head) {
  let slow = head;
  let fast = head;
  let hasCycle = false;

  // Phase 1: Detect presence of cycle
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      hasCycle = true;
      break;
    }
  }

  if (!hasCycle) return { hasCycle: false };

  // Phase 2: Find cycle start node
  let ptr1 = head;
  let ptr2 = slow;
  while (ptr1 !== ptr2) {
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  const entryNode = ptr1;

  // Phase 3: Measure cycle length
  let length = 1;
  let probe = entryNode.next;
  while (probe !== entryNode) {
    length++;
    probe = probe.next;
  }

  // Phase 4: Sever cycle to restore linear list
  let runner = entryNode;
  while (runner.next !== entryNode) {
    runner = runner.next;
  }
  runner.next = null; // Sever loop connection

  return {
    hasCycle: true,
    meetingVal: slow.val,
    entryVal: entryNode.val,
    cycleLength: length
  };
}

const audit = inspectAndRepairCycle(n1);

console.log('Has cycle?:', audit.hasCycle);
// Output: Has cycle?: true

console.log('Meeting node value:', audit.meetingVal);
// Output: Meeting node value: 5

console.log('Cycle start value:', audit.entryVal);
// Output: Cycle start value: 3

console.log('Cycle length:', audit.cycleLength);
// Output: Cycle length: 4

// Verify list is linear:
const linearValues = [];
let cur = n1;
while (cur !== null) {
  linearValues.push(cur.val);
  cur = cur.next;
}
console.log('After breaking cycle:', linearValues.join(' -> '));
// Output: After breaking cycle: 1 -> 2 -> 3 -> 4 -> 5 -> 6`
    },
    {
      type: 'heading',
      id: 'brent-teleport',
      text: {
        en: 'Brent Teleportation Variant',
        bn: 'ব্রেন্টের টেলিপোর্টেশন পদ্ধতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Brent algorithm improves upon Floyd by advancing the fast pointer across geometric power of 2 step bounds: 1, 2, 4, 8, 16. The slow pointer teleports directly to the fast position at every step boundary. This yields the exact cycle length immediately upon meeting and reduces the total pointer movements by up to 36 percent in typical benchmarks.',
        bn: 'ব্রেন্টের অ্যালগরিদম ২ এর গুণিতক পদক্ষেপে (১, ২, ৪, ৮, ১৬) দ্রুত পয়েন্টার এগিয়ে নিয়ে ফ্লয়েডের পদ্ধতির চেয়ে গতিশীল কাজ করে। প্রতি ধাপের সীমায় ধীর পয়েন্টারটি এক লাফে দ্রুত পয়েন্টারের ঠিকানায় চলে আসে। এর ফলে সাক্ষাতের মুহূর্তেই চক্রের দৈর্ঘ্য সরাসরি পাওয়া যায় এবং সাধারণ ক্ষেত্রে পয়েন্টার সরানোর কাজ প্রায় ৩৬ শতাংশ পর্যন্ত কমে আসে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Constant memory detection: Floyd two-pointer algorithm detects loops in O(n) time using strictly O(1) auxiliary space.',
          bn: 'ধ্রুবক মেমোরি শনাক্তকরণ: ফ্লয়েডের দুই পয়েন্টার কৌশল O(n) সময়ে ও নিখুঁত O(1) স্পেসে চক্র শনাক্ত করে।'
        },
        {
          en: 'Relative speed closing: Fast advancing 2 steps while slow advances 1 closes the separation gap by 1 node per iteration.',
          bn: 'আপেক্ষিক গতি সংকোচন: fast ২ নোড ও slow ১ নোড এগোলে প্রতি পদক্ষেপে তাদের মধ্যবর্তী ব্যবধান ১ নোড করে কমে।'
        },
        {
          en: 'Algebraic origin discovery: Stepping at 1 node speed from head and collision point simultaneously pinpoints the cycle entry node.',
          bn: 'গাণিতিক সূচনা সন্ধান: হেড ও মিলনস্থল থেকে একই সাথে ১ নোড গতিতে এগোলে পয়েন্টার দুটি ঠিক চক্রের প্রবেশ নোডে মিলিত হয়।'
        },
        {
          en: 'Clean loop severance: Locating the node before the cycle entrance and resetting its next pointer to null restores a linear list.',
          bn: 'নিখুঁত চক্র অপনোদন: চক্রের প্রবেশ নোডের পূর্ববর্তী উপাদান খুঁজে তার next পয়েন্টার নাল করে দিলেই সরলরৈখিক তালিকা ফিরে পাওয়া যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cc-ex1',
      kind: 'mcq',
      topic: 'relative-speed',
      question: {
        en: 'Why is the fast pointer guaranteed to meet the slow pointer if a cycle exists in the list?',
        bn: 'তালিকায় চক্র থাকলে কেন দ্রুত পয়েন্টার এবং ধীর পয়েন্টারের সাক্ষাৎ নিশ্চিত হয়?'
      },
      options: [
        {
          en: 'The relative distance between them decreases by 1 node in each iteration once inside the cycle',
          bn: 'চক্রের ভেতরে প্রতি পদক্ষেপে তাদের মধ্যকার আপেক্ষিক ব্যবধান ঠিক ১ নোড করে কমে'
        },
        {
          en: 'The operating system automatically halts the faster reference inside heap memory',
          bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে হিপ মেমোরিতে দ্রুত নির্দেশকটিকে থামিয়ে দেয়'
        },
        {
          en: 'Both pointers travel at identical speeds once entering the circular region',
          bn: 'চক্রাকার অংশে প্রবেশ করার পর উভয় পয়েন্টার একই গতিতে চলতে থাকে'
        },
        {
          en: 'Linked list nodes store bidirectional cycle metadata in their headers',
          bn: 'লিঙ্কড লিস্টের প্রতিটি নোডের হেডারে চক্রের মেটাডাটা সংরক্ষিত থাকে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Consider relative velocity: fast moves 2 steps while slow moves 1 step per cycle iteration.',
        bn: 'আপেক্ষিক গতির কথা ভাবুন: প্রতি পদক্ষেপে fast এগোয় ২ নোড আর slow এগোয় ১ নোড।'
      },
      explanation: {
        en: 'Because fast advances 2 nodes while slow advances 1 node per iteration, the relative distance between them shrinks by exactly 2 - 1 = 1 node on every iteration.',
        bn: 'প্রতি পদক্ষেপে fast ২ নোড এবং slow ১ নোড অগ্রসর হওয়ায় তাদের মাঝের আপেক্ষিক দূরত্ব প্রতিটি পদক্ষেপে ঠিক ২ - ১ = ১ নোড করে হ্রাস পায়।'
      }
    },
    {
      id: 'cc-ex2',
      kind: 'mcq',
      topic: 'phase-two-positioning',
      question: {
        en: 'In Floyd Phase 2, how are the two pointers positioned to locate the exact cycle entry node?',
        bn: 'ফ্লয়েডের ফেজ ২ এ চক্রের প্রবেশ নোড নির্ধারণ করতে পয়েন্টার দুটিকে কোথায় বসানো হয়?'
      },
      options: [
        {
          en: 'One pointer resets to head, the other stays at the meeting point, and both step forward 1 node at a time',
          bn: 'একটি পয়েন্টার হেডে ফিরে যায়, অন্যটি মিলনস্থলে থাকে এবং উভয়ই ১ নোড করে এগোয়'
        },
        {
          en: 'Both pointers reset to head and advance at 2 times their original speed',
          bn: 'উভয় পয়েন্টার হেডে ফিরে গিয়ে তাদের পূর্বের ২ গুণ গতিতে দৌড়াতে থাকে'
        },
        {
          en: 'One pointer moves backward using prev references while the other advances forward',
          bn: 'একটি পয়েন্টার prev সংযোগ দিয়ে পেছনে যায় এবং অন্যটি সামনে এগোয়'
        },
        {
          en: 'Both pointers leap by powers of 2 directly to the middle node',
          bn: 'উভয় পয়েন্টার ২ এর ঘাতে লাফ দিয়ে সরাসরি মধ্যবর্তী নোডে চলে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The mathematical equation proved that distance from head to entrance equals distance from collision to entrance.',
        bn: 'গাণিতিক সূত্রে প্রমাণিত হয়েছে যে হেড থেকে প্রবেশের দূরত্ব এবং মিলনস্থল থেকে প্রবেশের দূরত্ব সমান।'
      },
      explanation: {
        en: 'Moving both pointers at 1 node per step (one starting at head, one at the collision point) causes them to meet precisely at the cycle entry node after k steps.',
        bn: 'উভয় পয়েন্টারকে ১ নোড গতিতে চালালে (একটি হেড থেকে এবং অন্যটি মিলনস্থল থেকে) ঠিক k ধাপ পরে তারা চক্রের প্রবেশ নোডে একত্রিত হয়।'
      }
    },
    {
      id: 'cc-ex3',
      kind: 'mcq',
      topic: 'severing-loop',
      question: {
        en: 'How do you permanently sever a cycle once the cycle entry node has been discovered?',
        bn: 'একবার চক্রের সূচনা নোডটি নিশ্চিত হওয়ার পর কীভাবে চক্রটি স্থায়ীভাবে বিচ্ছিন্ন করা হয়?'
      },
      options: [
        {
          en: 'Traverse the loop to the node whose next pointer references the entry node, and set that next pointer to null',
          bn: 'লুপ ঘুরে যে নোডের next পয়েন্টার প্রবেশ নোডকে নির্দেশ করে সেখানে পৌঁছে তার next নাল করে দেওয়া'
        },
        {
          en: 'Delete the head node of the list and assign head to head.next',
          bn: 'তালিকার প্রথম হেড নোডটি মুছে দিয়ে head কে head.next এ সরিয়ে নেওয়া'
        },
        {
          en: 'Reallocate the entire linked list inside a new continuous array',
          bn: 'পুরো লিঙ্কড লিস্টকে নতুন একটি অবিচ্ছিন্ন অ্যারের ভেতর নতুন করে সাজানো'
        },
        {
          en: 'Swap the values of the slow pointer and fast pointer in memory',
          bn: 'মেমোরিতে স্লো ও ফাস্ট পয়েন্টার যে নোডকে ধরে আছে তাদের মান অদলবদল করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'A cycle exists because one node points back to the entry. Which node is that?',
        bn: 'একটি নোড পেছনের প্রবেশদ্বারে ফিরে আসার কারণেই চক্র তৈরি হয়েছে। সেই নোড কোনটি?'
      },
      explanation: {
        en: 'Stepping around the cycle finds the terminal node whose next points to the entry. Setting its next to null restores a normal linear singly linked list.',
        bn: 'চক্রের ভেতরে ঘুরে শেষ নোডটি চিহ্নিত করা হয় যার next সূচনা নোডকে ধরে রাখে। এর next নাল করে দিলেই তালিকাটি সাধারণ একমুখী তালিকায় রূপ নেয়।'
      }
    }
  ],
  quiz: {
    id: 'cycle-cartographer-quiz',
    title: {
      en: 'Cycle Detection and Loop Breaking Quiz',
      bn: 'চক্র শনাক্তকরণ ও লুপ অপনোদন কুইজ'
    },
    questions: [
      {
        id: 'cc-q1',
        kind: 'mcq',
        topic: 'space-complexity',
        question: {
          en: 'What is the auxiliary space complexity of Floyd cycle detection compared to the Hash Set approach?',
          bn: 'হ্যাশ সেট পদ্ধতির তুলনায় ফ্লয়েডের সাইকেল ডিটেকশনের সহায়ক মেমোরি জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) auxiliary space for Floyd versus O(n) auxiliary space for Hash Set',
            bn: 'ফ্লয়েডের জন্য O(1) স্পেস বনাম হ্যাশ সেটের জন্য O(n) সহায়ক স্পেস'
          },
          {
            en: 'O(log n) auxiliary space for Floyd versus O(1) auxiliary space for Hash Set',
            bn: 'ফ্লয়েডের জন্য O(log n) স্পেস বনাম হ্যাশ সেটের জন্য O(1) সহায়ক স্পেস'
          },
          {
            en: 'O(n) auxiliary space for Floyd versus O(n^2) auxiliary space for Hash Set',
            bn: 'ফ্লয়েডের জন্য O(n) স্পেস বনাম হ্যাশ সেটের জন্য O(n^2) সহায়ক স্পেস'
          },
          {
            en: 'O(n) auxiliary space for both algorithms',
            bn: 'উভয় অ্যালগরিদমের জন্যই O(n) সহায়ক স্পেস প্রয়োজন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Floyd algorithm only creates two pointer variables on the stack.',
          bn: 'ফ্লয়েড অ্যালগরিদম স্ট্যাকে কেবল দুটি পয়েন্টার ভ্যারিয়েবল ব্যবহার করে।'
        },
        explanation: {
          en: 'Floyd algorithm uses two reference variables regardless of list length (O(1) space), whereas a Hash Set must allocate storage for all n visited nodes (O(n) space).',
          bn: 'তালিকা যত বড়ই হোক ফ্লয়েড কেবল দুটি পয়েন্টার রেফারেন্স রাখে (O(1) মেমোরি), যেখানে হ্যাশ সেটে সমস্ত n নোডের ঠিকানা সংরক্ষণ করতে হয় (O(n) মেমোরি)।'
        }
      },
      {
        id: 'cc-q2',
        kind: 'mcq',
        topic: 'cycle-length-measurement',
        question: {
          en: 'Once the meeting node M is identified inside a cycle, how is the exact cycle length measured?',
          bn: 'চক্রের ভেতরে মিলন বিন্দু M নিশ্চিত হওয়ার পর কীভাবে চক্রের সঠিক দৈর্ঘ্য পরিমাপ করা হয়?'
        },
        options: [
          {
            en: 'Hold one pointer at M and advance a second pointer 1 step at a time, counting steps until it returns to M',
            bn: 'একটি পয়েন্টার M এ স্থির রেখে অন্য পয়েন্টারটি ১ ধাপ করে এগিয়ে M এ ফিরে আসা পর্যন্ত গণনা করা'
          },
          {
            en: 'Multiply the memory address of M by the total number of CPU threads',
            bn: 'M এর মেমোরি ঠিকানাকে মোট সিপিইউ থ্রেডের সংখ্যা দিয়ে গুণ করা'
          },
          {
            en: 'Traverse backward from M to head using next pointers',
            bn: 'next পয়েন্টার দিয়ে M থেকে উল্টো দিকে head এর দিকে হেঁটে যাওয়া'
          },
          {
            en: 'Delete node M and count how many nodes remain in the garbage collector',
            bn: 'M নোডটি মুছে ফেলে গার্বেজ কালেক্টরে কতটি নোড জমা হলো তা গণনা করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'The cycle is a closed loop. Stepping from M until you reach M again completes one full loop.',
          bn: 'চক্রটি একটি আবদ্ধ বৃত্ত। M থেকে পা বাড়িয়ে আবার M এ ফিরে এলে পুরো এক পাক সম্পন্ন হয়।'
        },
        explanation: {
          en: 'Iterating around the cycle from the meeting point until returning to that exact same node counts the number of nodes in the cycle in O(cycle length) time.',
          bn: 'মিলন বিন্দু থেকে শুরু করে পুনরায় সেই নোডটিতে ফিরে আসা পর্যন্ত গণনা করলে O(চক্রের দৈর্ঘ্য) সময়ে সঠিক সংখ্যা পাওয়া যায়।'
        }
      },
      {
        id: 'cc-q3',
        kind: 'mcq',
        topic: 'brent-teleport',
        question: {
          en: 'How does Brent cycle detection algorithm differ from Floyd classic tortoise and hare?',
          bn: 'ব্রেন্টের সাইকেল ডিটেকশন অ্যালগরিদম কীভাবে ফ্লয়েডের সনাতন কচ্ছপ ও খরগোশ পদ্ধতি থেকে ভিন্ন?'
        },
        options: [
          {
            en: 'The fast pointer advances in geometric powers of 2 steps (1, 2, 4, 8) and the slow pointer teleports directly to its position at each boundary',
            bn: 'দ্রুত পয়েন্টারটি ২ এর ঘাত পদক্ষেপে (১, ২, ৪, ৮) এগোয় এবং প্রতিটি সীমায় ধীর পয়েন্টারটি এক লাফে সেই অবস্থানে চলে আসে'
          },
          {
            en: 'Brent algorithm writes data to disk files rather than using CPU registers',
            bn: 'ব্রেন্টের অ্যালগরিদম প্রসেসর রেজিস্টারের বদলে হার্ডডিস্কে ফাইল লিখে রাখে'
          },
          {
            en: 'Brent algorithm requires 3 separate hash tables to store node payloads',
            bn: 'ব্রেন্টের অ্যালগরিদমে নোডের ডাটা সংরক্ষণে ৩ টি পৃথক হ্যাশ টেবিল প্রয়োজন হয়'
          },
          {
            en: 'Brent algorithm only operates on doubly linked lists with tail sentinels',
            bn: 'ব্রেন্টের অ্যালগরিদম কেবল টেইল সেন্টিনেলযুক্ত ডাবলি লিঙ্কড লিস্টেই কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recall the teleportation steps across powers of 2.',
          bn: '২ এর ঘাতে টেলিপোর্টেশনের ধাপগুলোর কথা স্মরণ করুন।'
        },
        explanation: {
          en: 'Brent algorithm teleports the slow pointer at geometric step boundaries of 2, reducing pointer movements by up to 36 percent and discovering cycle length directly upon meeting.',
          bn: 'ব্রেন্টের অ্যালগরিদম ২ এর ঘাত সীমায় ধীর পয়েন্টারকে টেলিপোর্ট করায়, ফলে পয়েন্টার চালনা প্রায় ৩৬ শতাংশ কমে এবং সাক্ষাতের সাথে সাথেই চক্রের দৈর্ঘ্য জানা যায়।'
        }
      },
      {
        id: 'cc-q4',
        kind: 'mcq',
        topic: 'failure-to-terminate',
        question: {
          en: 'What occurs if a standard while (cur !== null) loop executes on a linked list that contains an unhandled circular reference?',
          bn: 'যদি কোনো লিঙ্কড লিস্টে বৃত্তাকার রেফারেন্স থাকে এবং তাতে সাধারণ while (cur !== null) লুপ চালানো হয় তবে কী ঘটে?'
        },
        options: [
          {
            en: 'An infinite loop: traversal never reaches null, consuming 100 percent of a CPU core until the process hangs or times out',
            bn: 'অনন্ত লুপ: ট্রাভার্সাল কখনোই null পায় না, ফলে প্রসেস আটকে না যাওয়া পর্যন্ত সিপিইউ কোরের ১০০ শতাংশ ক্ষমতা দখল করে থাকে'
          },
          {
            en: 'The hardware motherboard automatically reboots into BIOS recovery mode',
            bn: 'হার্ডওয়্যার মাদারবোর্ড স্বয়ংক্রিয়ভাবে বায়োস রিকভারি মোডে রিবুট নেয়'
          },
          {
            en: 'The JavaScript compiler converts all pointer values into boolean false',
            bn: 'জাভাস্ক্রিপ্ট কম্পাইলার সমস্ত পয়েন্টারের মানকে বুলিয়ান false এ রূপান্তর করে'
          },
          {
            en: 'The operating system deletes the source code file from disk',
            bn: 'অপারেটিং সিস্টেম হার্ডডিস্ক থেকে সোর্স কোড ফাইলটি মুছে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'If next never becomes null, when will the while loop guard evaluate to false?',
          bn: 'next যদি কখনোই null না হয়, তবে while লুপের শর্ত কখন false হবে?'
        },
        explanation: {
          en: 'Because a circular reference creates an endless loop of non-null pointers, the loop never encounters a null terminator, causing thread starvation and service freezes.',
          bn: 'বৃত্তাকার সংযোগের ফলে পয়েন্টার কখনোই null হয় না, তাই লুপ কোনো টার্মিনেটর না পেয়ে অনন্তকাল চলতে থাকে এবং সিস্টেম অচল করে ফেলে।'
        }
      }
    ]
  }
};
