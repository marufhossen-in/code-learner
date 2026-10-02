import type { Lesson } from '../../../lib/types';

export const theCompleteCitadelLesson: Lesson = {
  slug: 'the-complete-citadel',
  tech: 'heaps',
  title: {
    en: "Building Heaps in Linear O(n) Time — Floyd's Heapify Algorithm",
    bn: 'রৈখিক O(n) সময়ে হিপ নির্মাণ: ফ্লয়েডের হিপিফাই অ্যালগরিদম'
  },
  summary: {
    en: "Given an arbitrary unsorted array of n elements, inserting each element sequentially into an initially empty heap takes O(n log n) time. In contrast, Floyd's bottom-up heapify algorithm constructs a valid heap in deterministic O(n) linear time. By recognizing that roughly half of the nodes in a complete binary tree are already valid leaf heaps, sift-down is only applied to internal nodes in reverse index order. We analyze the mathematical series proof showing total operations never exceed 2n.",
    bn: 'n সংখ্যক উপাদানের একটি অগোছালো অ্যারে থেকে একে একে উপাদান যোগ করে হিপ তৈরি করলে O(n log n) সময় লাগে। এর বিপরীতে, ফ্লয়েডের বটম-আপ হিপিফাই অ্যালগরিদম সুনির্দিষ্ট O(n) রৈখিক সময়ে একটি সম্পূর্ণ হিপ গঠন করে। একটি বাইনারি ট্রির প্রায় অর্ধেক উপাদানই যে পাতা এবং সেগুলো এমনিতেই এক একটি বৈধ হিপ, তা কাজে লাগিয়ে বিপরীত ক্রমে কেবল ভেতরের নোডগুলোতে শিফট-ডাউন চালানো হয়। আমরা গাণিতিক ধারার প্রমাণের মাধ্যমে দেখাই যে মোট অপারেশন কখনো ২n অতিক্রম করে না।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-sorted-pyre',
    tech: 'heaps',
    title: {
      en: 'Heapsort Algorithm — In-Place O(n log n) Sorting Without Extra Space',
      bn: 'হিপসর্ট অ্যালগরিদম: অতিরিক্ত স্থান ছাড়া ইন-প্লেস O(n log n) সর্টিং'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'heapify-problem',
      text: {
        en: 'The Linear Heap Construction Breakthrough',
        bn: 'রৈখিক হিপ নির্মাণের যুগান্তকারী সমাধান'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Suppose you are handed an unordered array of 1000000 integers and must transform it into a priority queue. A beginner might create an empty heap and insert each number one by one using sift-up. Because each insertion can traverse the full tree height, inserting n elements takes O(n log n) operations.',
        bn: 'ধরুন আপনাকে ১০০০০০০ পূর্ণসংখ্যার একটি অগোছালো অ্যারে দেওয়া হলো এবং এটিকে একটি প্রায়োরিটি কিউতে রূপান্তর করতে হবে। একজন নতুন প্রোগ্রামার হয়তো একটি খালি হিপ তৈরি করে একে একে শিফট-আপের মাধ্যমে প্রতিটি সংখ্যা যোগ করবেন। যেহেতু প্রতিটি সন্নিবেশে সম্পূর্ণ উচ্চতা অতিক্রম করতে হতে পারে, তাই n সংখ্যক উপাদান ঢোকাতে O(n log n) অপারেশন প্রয়োজন হয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: "In 1964, Robert W. Floyd published an in-place algorithm that constructs a valid heap in O(n) linear time. Rather than building from the top down, Floyd's algorithm interprets the array as an existing complete binary tree and repairs it from the bottom up using sift-down. Because leaf nodes already satisfy the heap invariant vacuously, we only need to sift down internal nodes.",
        bn: '১৯৬৪ সালে রবার্ট ডব্লিউ ফ্লয়েড একটি ইন-প্লেস অ্যালগরিদম প্রকাশ করেন যা O(n) রৈখিক সময়ে একটি বৈধ হিপ তৈরি করে। উপর থেকে নিচে তৈরির বদলে ফ্লয়েডের অ্যালগরিদম পুরো অ্যারেকে একটি বিদ্যমান ট্রি হিসেবে ধরে নিয়ে নিচ থেকে উপরের দিকে শিফট-ডাউন চালিয়ে মেরামত করে। যেহেতু লিফ নোডগুলো এমনিতেই এক একটি স্বয়ংসম্পূর্ণ হিপ, তাই কেবল ভেতরের নোডগুলোতে শিফট-ডাউন চালালেই পুরো ট্রি গঠিত হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'floyds-heapify',
          def: {
            en: 'An algorithm that builds a valid heap from an unsorted array in-place in linear O(n) time by sifting down internal nodes backwards.',
            bn: 'বিপরীত ক্রমে ভেতরের নোডগুলোতে শিফট-ডাউন চালিয়ে একটি অগোছালো অ্যারেকে ইন-প্লেস O(n) সময়ে হিপে রূপান্তরের অ্যালগরিদম।'
          }
        },
        {
          term: 'internal-nodes',
          def: {
            en: 'All non-leaf nodes in a tree, starting from index Math.floor(n / 2) - 1 down to index 0.',
            bn: 'ট্রির পাতা ব্যতীত সমস্ত নোড, যা Math.floor(n / ২) - ১ ইনডেক্স থেকে শুরু করে ০ পর্যন্ত বিস্তৃত।'
          }
        },
        {
          term: 'height-work-distribution',
          def: {
            en: 'The mathematical property where the vast majority of nodes reside at low tree heights, performing minimal sift-down steps.',
            bn: 'এমন একটি গাণিতিক বৈশিষ্ট্য যেখানে বেশিরভাগ নোড নিচের স্তরে অবস্থান করায় তাদের খুব কম শিফট-ডাউন করতে হয়।'
          }
        },
        {
          term: 'in-place-transformation',
          def: {
            en: 'Reorganizing array elements directly within the existing memory buffer using O(1) auxiliary space.',
            bn: 'অতিরিক্ত স্থান না নিয়ে মাত্র O(1) মেমোরি ব্যবহার করে বিদ্যমান অ্যারের মধ্যেই উপাদানগুলো পুনর্বিন্যাস করা।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'heap'
    },
    {
      type: 'heading',
      id: 'mathematical-proof',
      text: {
        en: 'Mathematical Proof: Why Bottom-Up Sift-Down is O(n)',
        bn: 'গাণিতিক প্রমাণ: কেন বটম-আপ শিফট-ডাউন O(n) সময় নেয়'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Why is bottom-up sift-down linear while top-down sift-up is O(n log n)? In a complete tree, half of all nodes are leaves at height 0, a quarter are at height 1, and only 1 node sits at maximum height log n. Sift-down does work proportional to height, so the nodes that do the most work are fewest in number.',
        bn: 'কেন বটম-আপ শিফট-ডাউন রৈখিক হয় যেখানে টপ-ডাউন শিফট-আপে O(n log n) সময় লাগে? একটি সম্পূর্ণ ট্রিতে অর্ধেক নোড থাকে ০ উচ্চতার পাতায়, এক-চতুর্থাংশ থাকে ১ উচ্চতায় এবং কেবল ১টি নোড থাকে সর্বোচ্চ log n উচ্চতায়। শিফট-ডাউনের কাজের পরিমাণ উচ্চতার সমানুপাতিক হওয়ায় সবচেয়ে বেশি কাজ করতে হয় সবচেয়ে কম সংখ্যক নোডের জন্য।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Tree Height h', bn: 'ট্রির উচ্চতা h' },
        { en: 'Node Count in Tree of 15 Nodes', bn: '১৫ নোডের ট্রিতে নোড সংখ্যা' },
        { en: 'Max Sift-Down Steps per Node', bn: 'নোড প্রতি সর্বোচ্চ শিফট-ডাউন ধাপ' },
        { en: 'Total Swaps at Level', bn: 'স্তরে সর্বোচ্চ মোট অদলবদল' }
      ],
      rows: [
        [
          { en: 'Height 0 (Leaves)', bn: 'উচ্চতা ০ (পাতা)' },
          { en: '8 nodes (indices 7 to 14)', bn: '৮টি নোড (ইনডেক্স ৭ থেকে ১৪)' },
          { en: '0 steps (skipped completely)', bn: '০ ধাপ (পুরোপুরি বাদ)' },
          { en: '0 swaps', bn: '০টি অদলবদল' }
        ],
        [
          { en: 'Height 1', bn: 'উচ্চতা ১' },
          { en: '4 nodes (indices 3 to 6)', bn: '৪টি নোড (ইনডেক্স ৩ থেকে ৬)' },
          { en: '1 step', bn: '১ ধাপ' },
          { en: '4 swaps', bn: '৪টি অদলবদল' }
        ],
        [
          { en: 'Height 2', bn: 'উচ্চতা ২' },
          { en: '2 nodes (indices 1 to 2)', bn: '২টি নোড (ইনডেক্স ১ থেকে ২)' },
          { en: '2 steps', bn: '২ ধাপ' },
          { en: '4 swaps', bn: '৪টি অদলবদল' }
        ],
        [
          { en: 'Height 3 (Root)', bn: 'উচ্চতা ৩ (রুট)' },
          { en: '1 node (index 0)', bn: '১টি নোড (ইনডেক্স ০)' },
          { en: '3 steps', bn: '৩ ধাপ' },
          { en: '3 swaps', bn: '৩টি অদলবদল' }
        ]
      ]
    },
    {
      type: 'para',
      text: {
        en: 'Summing the swaps across all levels yields: 0 + 4 + 4 + 3 = 11 swaps for 15 elements. Mathematically, the infinite series sum h / 2^h converges strictly to 2. Therefore, the total operations for n elements is bounded by 2 * n, which is strictly O(n) linear time.',
        bn: 'সব স্তরের অদলবদল যোগ করলে দাঁড়ায়: ১৫টি উপাদানের জন্য ০ + ৪ + ৪ + ৩ = ১১টি অদলবদল। গাণিতিকভাবে h / ২^h অসীম ধারার যোগফল কঠোরভাবে ২ এ সীমাবদ্ধ থাকে। ফলে n সংখ্যক উপাদানের জন্য মোট কাজের সংখ্যা ২ * n এর নিচে থাকে, যা নিশ্চিতভাবেই O(n) রৈখিক সময়।'
      }
    },
    {
      type: 'heading',
      id: 'executable-heapify-code',
      text: {
        en: "Executable Floyd's Heapify Implementation",
        bn: 'ফ্লয়েডের হিপিফাই অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program transforms an arbitrary unsorted array into a valid Max-Heap in-place. Notice how starting at index Math.floor(n / 2) - 1 only requires 5 swaps to completely organize 8 elements.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি এলোমেলো অগোছালো অ্যারেকে ইন-প্লেস ম্যাক্স-হিপে রূপান্তর করে। লক্ষ্য করুন কীভাবে Math.floor(n / ২) - ১ ইনডেক্স থেকে শুরু করে ৮টি উপাদান সাজাতে মাত্র ৫টি অদলবদল প্রয়োজন হয়।'
      }
    },
    {
      type: 'code',
      code: `function heapify(arr) {
  let swaps = 0;
  const n = arr.length;

  function siftDown(i) {
    while (true) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < n && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < n && arr[right] > arr[largest]) {
        largest = right;
      }

      if (largest !== i) {
        swaps++;
        const tmp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = tmp;
        i = largest;
      } else {
        break;
      }
    }
  }

  // Start from the last internal parent down to index 0
  const startIdx = Math.floor(n / 2) - 1;
  for (let i = startIdx; i >= 0; i--) {
    siftDown(i);
  }

  return { arr, swaps };
}

const input = [15, 20, 7, 9, 30, 25, 40, 10];
console.log('Raw Array:', input.slice().join(', '));
// Output: Raw Array: 15, 20, 7, 9, 30, 25, 40, 10

const result = heapify(input);
console.log('Heapified Max-Heap:', result.arr.join(', '));
// Output: Heapified Max-Heap: 40, 30, 25, 10, 20, 15, 7, 9
console.log('Total swaps performed:', result.swaps);
// Output: Total swaps performed: 5
console.log('Root element:', result.arr[0]);
// Output: Root element: 40`
    },
    {
      type: 'heading',
      id: 'performance-implications',
      text: {
        en: 'Algorithmic Comparison: Sequential Inserts vs Heapify',
        bn: 'অ্যালগরিদমিক তুলনা: ক্রমান্বয়ে সন্নিবেশ বনাম হিপিফাই'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Understanding this difference is critical when designing database storage engines and sorting pipelines. When initializing priority queues with large historical batches, using bottom-up heapify avoids unnecessary logarithmic overhead, converting multi-second startup delays into instant linear scans.',
        bn: 'ডাটাবেস স্টোরেজ ইঞ্জিন এবং সর্টিং পাইপলাইন তৈরির সময় এই পার্থক্যটি বোঝা অত্যন্ত জরুরি। বিপুল পরিমাণ ডেটা দিয়ে প্রায়োরিটি কিউ ইনিশিয়ালাইজ করার সময় বটম-আপ হিপিফাই ব্যবহার অপ্রয়োজনীয় লগারিদমিক বিলম্ব দূর করে সেকেন্ডের কাজ মিলিসেকেন্ডে শেষ করে।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: "Floyd's heapify constructs a valid heap from an unsorted array in linear O(n) time, beating sequential O(n log n) insertion.",
          bn: 'ফ্লয়েডের হিপিফাই অগোছালো অ্যারে থেকে রৈখিক O(n) সময়ে হিপ তৈরি করে, যা ক্রমান্বয়ে সন্নিবেশের O(n log n) চেয়ে দ্রুত।'
        },
        {
          en: 'Leaf nodes (indices floor(n/2) to n - 1) are valid 1-element heaps by definition and require zero sift-down operations.',
          bn: 'পাতার নোডগুলো (floor(n/২) থেকে n - ১ ইনডেক্স) সংজ্ঞাগতভাবেই বৈধ ১-উপাদানের হিপ এবং এতে কোনো কাজ করতে হয় না।'
        },
        {
          en: 'The mathematical series sum h / 2^h converges to 2, proving that total work across all levels is strictly bounded by 2n.',
          bn: 'h / ২^h অসীম ধারার যোগফল ২ এ গিয়ে মেশে, যা প্রমাণ করে যে সমস্ত স্তরের মোট কাজ কঠোরভাবে ২n দ্বারা সীমাবদ্ধ।'
        },
        {
          en: 'Heapify operates strictly in-place with O(1) auxiliary space, requiring no secondary buffers or dynamic allocations.',
          bn: 'হিপিফাই কোনো অতিরিক্ত বাফার ছাড়াই মাত্র O(1) মেমোরি ব্যবহার করে সরাসরি মূল অ্যারের ভেতরেই কাজ সম্পন্ন করে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'tc-ex1',
      kind: 'mcq',
      topic: 'heapify-starting-index',
      question: {
        en: 'In an array of length n, why does Floyd’s heapify loop start at index Math.floor(n / 2) - 1 instead of index n - 1?',
        bn: 'n দৈর্ঘ্যের একটি অ্যারেতে ফ্লয়েডের হিপিফাই লুপ কেন n - ১ এর বদলে Math.floor(n / ২) - ১ ইনডেক্স থেকে শুরু হয়?'
      },
      options: [
        {
          en: 'All elements from index Math.floor(n / 2) to n - 1 are leaf nodes with no children, so they are already valid trivial heaps',
          bn: 'Math.floor(n / ২) থেকে n - ১ পর্যন্ত সব উপাদানই লিফ নোড যাদের কোনো সন্তান নেই, তাই সেগুলো এমনিতেই এক একটি বৈধ হিপ'
        },
        {
          en: 'Because JavaScript arrays truncate in half automatically',
          bn: 'কারণ জাভাস্ক্রিপ্ট অ্যারে স্বয়ংক্রিয়ভাবে অর্ধেক কেটে ফেলে'
        },
        {
          en: 'To avoid memory leak errors on the CPU stack',
          bn: 'সিপিইউ স্ট্যাকে মেমোরি লিক ত্রুটি এড়াতে'
        },
        {
          en: 'Because odd-indexed nodes are ignored during sorting',
          bn: 'কারণ সাজানোর সময় বিজোড় ইনডেক্সের নোডগুলো বাদ দেওয়া হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Do leaf nodes have any children to compare or swap with?',
        bn: 'লিফ নোডগুলোর কি তুলনা বা অদলবদল করার মতো কোনো সন্তান থাকে?'
      },
      explanation: {
        en: 'Nodes with indices >= floor(n / 2) have no children. Sifting them down performs 0 operations, so starting at the last parent saves half the iterations.',
        bn: 'floor(n / ২) বা তার বড় ইনডেক্সের কোনো সন্তান থাকে না। সেখানে শিফট-ডাউনে ০টি কাজ করতে হয়, তাই শেষ প্যারেন্ট থেকে শুরু করলে অর্ধেক কাজ বেঁচে যায়।'
      }
    },
    {
      id: 'tc-ex2',
      kind: 'mcq',
      topic: 'heapify-time-complexity',
      question: {
        en: 'What is the asymptotic time complexity of building a heap from an unordered array of size n using Floyd’s bottom-up heapify?',
        bn: 'ফ্লয়েডের বটম-আপ হিপিফাই ব্যবহার করে n আকারের অগোছালো অ্যারে থেকে হিপ তৈরির অ্যাসিম্পটোটিক সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(n) linear time',
          bn: 'O(n) রৈখিক সময়'
        },
        {
          en: 'O(n log n) sorting time',
          bn: 'O(n log n) সাজানোর সময়'
        },
        {
          en: 'O(n^2) quadratic time',
          bn: 'O(n^2) চতুর্ঘাতী সময়'
        },
        {
          en: 'O(log n) tree height time',
          bn: 'O(log n) ট্রি উচ্চতা সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Most nodes in the tree are near the leaves and do very few sift-down operations.',
        bn: 'ট্রির বেশিরভাগ নোড পাতার কাছাকাছি থাকে এবং তাদের খুব কম শিফট-ডাউন অপারেশন করতে হয়।'
      },
      explanation: {
        en: 'Because node counts decrease exponentially as height increases, the sum of heights across all nodes converges to O(n).',
        bn: 'উচ্চতা বাড়ার সাথে সাথে নোডের সংখ্যা সূচকীয় হারে কমতে থাকায় সমস্ত নোডের মোট কাজ যোগ করলে O(n) এ সীমাবদ্ধ থাকে।'
      }
    },
    {
      id: 'tc-ex3',
      kind: 'mcq',
      topic: 'heapify-space-complexity',
      question: {
        en: 'How much auxiliary memory space does Floyd’s heapify require to build a heap from an existing array?',
        bn: 'বিদ্যমান অ্যারে থেকে হিপ তৈরি করতে ফ্লয়েডের হিপিফাইতে কতটুকু অতিরিক্ত মেমোরি লাগে?'
      },
      options: [
        {
          en: 'O(1) constant auxiliary space, as all operations are in-place pointer/index swaps',
          bn: 'O(1) ধ্রুবক অতিরিক্ত স্থান, কারণ সমস্ত অপারেশন ইন-প্লেস অদলবদলের মাধ্যমে ঘটে'
        },
        {
          en: 'O(n) space for a duplicate array buffer',
          bn: 'একটি ডুপ্লিকেট অ্যারে বাফারের জন্য O(n) স্থান'
        },
        {
          en: 'O(log n) auxiliary stack frames',
          bn: 'O(log n) অতিরিক্ত স্ট্যাক ফ্রেম'
        },
        {
          en: 'O(n^2) space',
          bn: 'O(n^2) স্থান'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does heapify allocate any new array objects or resize the existing array?',
        bn: 'হিপিফাই কি নতুন কোনো অ্যারে তৈরি করে বা আকার পরিবর্তন করে?'
      },
      explanation: {
        en: 'Heapify reorganizes the array in-place using iterative sift-down, requiring only a few scalar index variables.',
        bn: 'হিপিফাই সাধারণ ইনডেক্স চলক ব্যবহার করে মূল অ্যারের মধ্যেই ইন-প্লেস রূপান্তর সম্পন্ন করে, ফলে O(1) স্পেস লাগে।'
      }
    }
  ],
  quiz: {
    id: 'the-complete-citadel-quiz',
    title: {
      en: 'Linear Heap Construction Quiz',
      bn: 'রৈখিক হিপ নির্মাণ কুইজ'
    },
    questions: [
      {
        id: 'tc-q1',
        kind: 'mcq',
        topic: 'naive-vs-floyd-cost',
        question: {
          en: 'Why is inserting n elements into an empty heap O(n log n), while Floyd’s heapify is O(n)?',
          bn: 'কেন খালি হিপে একে একে n উপাদান যোগ করলে O(n log n) লাগে, কিন্তু ফ্লয়েডের হিপিফাইতে O(n) লাগে?'
        },
        options: [
          {
            en: 'In insertion, leaves (the majority of nodes) climb up the full height; in heapify, leaves do 0 work and only the few root nodes descend the full height',
            bn: 'সন্নিবেশে পাতার নোডগুলো (অধিকাংশ উপাদান) পুরো উচ্চতা বেয়ে উপরে ওঠে; কিন্তু হিপিফাইতে পাতার ০টি কাজ থাকে এবং কেবল গুটি কয়েক রুট নোড নিচে নামে'
          },
          {
            en: 'Insertion uses JavaScript while Floyd used C language',
            bn: 'সন্নিবেশ জাভাস্ক্রিপ্ট ব্যবহার করে এবং ফ্লয়েড সি ভাষা ব্যবহার করেছিলেন'
          },
          {
            en: 'Heapify skips all negative numbers',
            bn: 'হিপিফাই সমস্ত ঋণাত্মক সংখ্যা বাদ দেয়'
          },
          {
            en: 'Heapify converts numbers to 32-bit floats',
            bn: 'হিপিফাই সংখ্যাগুলোকে ৩২-বিট ফ্লোটে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider where the most nodes are located: at the bottom or at the top?',
          bn: 'বিবেচনা করুন সবচেয়ে বেশি নোড কোথায় থাকে: নিচে নাকি উপরে?'
        },
        explanation: {
          en: 'In top-down insert, n/2 leaves can each travel log n steps upward. In bottom-up heapify, n/2 leaves travel 0 steps downward.',
          bn: 'টপ-ডাউন সন্নিবেশে n/২ টি পাতা প্রত্যেকে log n ধাপ উপরে উঠতে পারে। কিন্তু বটম-আপ হিপিফাইতে n/২ টি পাতা ০ ধাপ নিচে নামে।'
        }
      },
      {
        id: 'tc-q2',
        kind: 'mcq',
        topic: 'infinite-series-convergence',
        question: {
          en: 'In the mathematical proof of heapify, what value does the infinite series sum from h = 1 to infinity of (h / 2^h) converge to?',
          bn: 'হিপিফাইয়ের গাণিতিক প্রমাণে h = ১ থেকে অসীম পর্যন্ত (h / ২^h) ধারার যোগফল কোন মানে গিয়ে মেশে?'
        },
        options: [
          {
            en: 'It converges to 2',
            bn: 'এটি ২ এর সমতুল্য মানে মেশে'
          },
          {
            en: 'It diverges to infinity',
            bn: 'এটি অসীমে চলে যায়'
          },
          {
            en: 'It converges to 0',
            bn: 'এটি ০ তে মেশে'
          },
          {
            en: 'It equals 100',
            bn: 'এটি ১০০ এর সমান'
          }
        ],
        answer: 0,
        hint: {
          en: 'The infinite series sum evaluates strictly to 2.',
          bn: 'অসীম ধারাটির যোগফলের মান ঠিক ২ এ সীমাবদ্ধ থাকে।'
        },
        explanation: {
          en: 'The arithmetico-geometric series evaluates exactly to 2, guaranteeing linear bounded complexity.',
          bn: 'গাণিতিক-জ্যামিতিক ধারার যোগফলের মান ঠিক ২, যা রৈখিক জটিলতা প্রমাণ করে।'
        }
      },
      {
        id: 'tc-q3',
        kind: 'mcq',
        topic: 'heapify-traversal-order',
        question: {
          en: 'In which direction must the outer loop of Floyd’s heapify iterate over internal nodes?',
          bn: 'ফ্লয়েডের হিপিফাইয়ের বাইরের লুপটি ভেতরের নোডগুলোর ওপর কোন দিকে চলতে হবে?'
        },
        options: [
          {
            en: 'Reverse index order (from Math.floor(n / 2) - 1 down to index 0)',
            bn: 'বিপরীত ইনডেক্স ক্রমে (Math.floor(n / ২) - ১ থেকে ০ পর্যন্ত)'
          },
          {
            en: 'Forward order (from index 0 up to n - 1)',
            bn: 'সামনের ক্রমে (০ থেকে n - ১ পর্যন্ত)'
          },
          {
            en: 'Random shuffle order',
            bn: 'এলোমেলো ক্রমে'
          },
          {
            en: 'Only even indices',
            bn: 'কেবল জোড় ইনডেক্সে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Before sifting down a parent node, what property must its left and right subtrees satisfy?',
          bn: 'একটি প্যারেন্ট নোডে শিফট-ডাউন চালানোর আগে তার বাঁ ও ডান সাব-ট্রিতে কী বৈশিষ্ট্য থাকতে হবে?'
        },
        explanation: {
          en: 'Sift-down requires that both child subtrees already satisfy the heap property. Iterating backwards ensures children are processed before their parents.',
          bn: 'শিফট-ডাউনের শর্ত হলো উভয় সাব-ট্রিকে আগে থেকেই হিপ হতে হবে। পিছন থেকে লুপ চালালে প্যারেন্টের আগেই চাইল্ডদের কাজ শেষ হয়।'
        }
      },
      {
        id: 'tc-q4',
        kind: 'mcq',
        topic: 'heapify-swaps-for-sorted-input',
        question: {
          en: 'If an array is already sorted in descending order (e.g. [50, 40, 30, 20, 10]), how many element swaps does Max-Heap heapify perform?',
          bn: 'একটি অ্যারে যদি আগে থেকেই অধঃক্রমে সাজানো থাকে (যেমন [৫০, ৪০, ৩০, ২০, ১০]), তবে ম্যাক্স-হিপ হিপিফাইতে কতটি অদলবদল ঘটবে?'
        },
        options: [
          {
            en: '0 swaps, because every parent already dominates its children',
            bn: '০টি অদলবদল, কারণ প্রতিটি প্যারেন্ট এমনিতেই তার চাইল্ড নোডগুলোর চেয়ে বড়'
          },
          {
            en: 'Exactly 50 swaps',
            bn: 'ঠিক ৫০টি অদলবদল'
          },
          {
            en: 'n log n swaps',
            bn: 'n log n টি অদলবদল'
          },
          {
            en: '5 swaps',
            bn: '৫টি অদলবদল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Check if the Max-Heap condition is already satisfied at every parent node.',
          bn: 'প্রতিটি প্যারেন্ট নোডে ম্যাক্স-হিপের শর্তটি ইতিমধ্যে পূরণ আছে কি না দেখুন।'
        },
        explanation: {
          en: 'A descending array already satisfies the Max-Heap property throughout. Sift-down terminates on the first comparison at each node, performing 0 swaps.',
          bn: 'অধঃক্রমে থাকা অ্যারেতে প্রতিটি প্যারেন্ট তার চাইল্ডের চেয়ে বড় থাকে, ফলে প্রথম তুলনাতেই শিফট-ডাউন শেষ হয় এবং এতে মোট ০টি অদলবদল ঘটে।'
        }
      }
    ]
  }
};
