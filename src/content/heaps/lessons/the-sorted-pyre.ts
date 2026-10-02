import type { Lesson } from '../../../lib/types';

export const theSortedPyreLesson: Lesson = {
  slug: 'the-sorted-pyre',
  tech: 'heaps',
  title: {
    en: 'Heapsort Algorithm — In-Place O(n log n) Sorting Without Extra Space',
    bn: 'হিপসর্ট অ্যালগরিদম: অতিরিক্ত স্থান ছাড়া ইন-প্লেস O(n log n) সর্টিং'
  },
  summary: {
    en: "Heapsort combines Floyd's linear heapify with repeated root extraction to sort an array in deterministic O(n log n) time while consuming strictly O(1) auxiliary memory. By utilizing a Max-Heap to sort in ascending order, each extracted maximum element is swapped directly to the end of the shrinking array window. We compare Heapsort with Quicksort and Mergesort, explaining why modern systems employ Introsort to guarantee worst-case safety without sacrificing hardware cache efficiency.",
    bn: 'হিপসর্ট ফ্লয়েডের রৈখিক হিপিফাই এবং বারবার রুট অপসারণের সমন্বয়ে মাত্র O(1) অতিরিক্ত মেমোরি ব্যবহার করে সুনির্দিষ্ট O(n log n) সময়ে একটি অ্যারে সাজায়। ছোট থেকে বড় ক্রমে সাজাতে ম্যাক্স-হিপ ব্যবহার করা হয়, যেখানে প্রতি ধাপে সর্বোচ্চ উপাদানটিকে সংকুচিত অ্যারের শেষ প্রান্তে অদলবদল করা হয়। আমরা কুইকসর্ট এবং মার্জসর্টের সাথে হিপসর্টের তুলনা করি এবং ব্যাখ্যা করি কেন আধুনিক সিস্টেমগুলো হার্ডওয়্যার ক্যাশ দক্ষতা এবং চরম নিরাপত্তা নিশ্চিত করতে ইন্ট্রোসর্ট ব্যবহার করে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'k-way-tournament',
    tech: 'heaps',
    title: {
      en: 'K-Way Stream Merging — Priority Queues in External Storage and LSM-Trees',
      bn: 'কে-ওয়ে স্ট্রিম একত্রীকরণ: এক্সটার্নাল স্টোরেজ এবং এলএসএম-ট্রিতে প্রায়োরিটি কিউ'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'heapsort-mechanics',
      text: {
        en: 'The Two Phases of Heapsort: Build and Harvest',
        bn: 'হিপসর্টের দুটি প্রধান ধাপ: নির্মাণ এবং সংগ্রহ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you need to sort large datasets under strict memory constraints or in embedded environments with limited stack space, Heapsort provides deterministic performance without auxiliary memory buffers or recursive call stacks. It divides its execution into two distinct phases: an initial Max-Heap construction phase, followed by an iterative extraction phase that deposits elements in sorted order.',
        bn: 'যখন মেমোরির সীমাবদ্ধতা থাকে বা সীমিত স্ট্যাক স্পেসযুক্ত এমবেডেড পরিবেশে কাজ করতে হয়, তখন হিপসর্ট কোনো বাড়তি মেমোরি বা রিকার্সিভ কল স্ট্যাক ছাড়াই নিশ্চিত কর্মক্ষমতা প্রদান করে। এটি তার কাজকে দুটি আলাদা ধাপে বিভক্ত করে: প্রথমে একটি ম্যাক্স-হিপ নির্মাণ ধাপ এবং পরবর্তীতে একটি নিষ্কাশন ধাপ যা উপাদানগুলোকে সাজানো ক্রমে জমা করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: "In Phase 1, Floyd's bottom-up heapify transforms the raw array into a Max-Heap in O(n) time. Once constructed, the largest element in the array is guaranteed to reside at index 0. In Phase 2, the algorithm repeatedly swaps index 0 with the last active element, shrinks the heap boundary by 1, and sifts the new root down in O(log n) time.",
        bn: 'প্রথম ধাপে ফ্লয়েডের বটম-আপ হিপিফাই O(n) সময়ে পুরো অ্যারেকে একটি ম্যাক্স-হিপে রূপান্তর করে। এটি তৈরি হয়ে গেলে নিশ্চিত হওয়া যায় যে অ্যারের সবচেয়ে বড় সংখ্যাটি ০ নম্বর ইনডেক্সে আছে। দ্বিতীয় ধাপে অ্যালগরিদমটি বারবার ০ নম্বর উপাদানকে সক্রিয় সীমার শেষ উপাদানের সাথে অদলবদল করে, হিপের পরিধি ১ কমায় এবং নতুন রুটটিকে O(log n) সময়ে নিচে নামিয়ে দেয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'heapsort',
          def: {
            en: 'A comparison-based sorting algorithm that organizes an array into a heap and repeatedly extracts the root to achieve in-place O(n log n) sorting.',
            bn: 'এমন একটি তুলনাভিত্তিক সর্টিং অ্যালগরিদম যা অ্যারেকে হিপে রূপান্তর করে এবং রুট সরিয়ে ইন-প্লেস O(n log n) সময়ে সাজায়।'
          }
        },
        {
          term: 'in-place-partitioning',
          def: {
            en: 'Dividing an array into an active heap region at the front and a sorted suffix region at the back without allocating memory.',
            bn: 'কোনো মেমোরি বরাদ্দ না করে অ্যারের সামনের অংশকে সক্রিয় হিপ এবং পেছনের অংশকে সাজানো অঞ্চলে ভাগ করা।'
          }
        },
        {
          term: 'worst-case-immunity',
          def: {
            en: 'The guarantee that heapsort runs in strictly O(n log n) time regardless of input distribution, avoiding quicksort quadratic blowups.',
            bn: 'ইনপুট যেমনই হোক না কেন হিপসর্ট সর্বদা O(n log n) সময়ে চলবে, যা কুইকসর্টের O(n^2) ঝুঁকি দূর করে।'
          }
        },
        {
          term: 'introsort',
          def: {
            en: 'A production sorting hybrid that begins with Quicksort and falls back to Heapsort if recursion exceeds 2 log n to guarantee worst-case safety.',
            bn: 'একটি আধুনিক সর্টিং যা কুইকসর্ট দিয়ে শুরু করে এবং রিকার্শন ২ log n ছাড়ালে হিপসর্টে চলে যায়।'
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
      id: 'sorting-comparison-table',
      text: {
        en: 'Algorithmic Comparison: Heapsort vs Quicksort vs Mergesort',
        bn: 'অ্যালগরিদমিক তুলনা: হিপসর্ট বনাম কুইকসর্ট বনাম মার্জসর্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Engineers frequently weigh Heapsort against Quicksort and Mergesort. While Quicksort is often faster in practice due to sequential hardware cache access, its worst-case performance degrades to O(n^2). Mergesort guarantees O(n log n) but demands O(n) extra RAM. Heapsort achieves guaranteed O(n log n) with strictly O(1) auxiliary space.',
        bn: 'প্রকৌশলীরা প্রায়শই কুইকসর্ট এবং মার্জসর্টের সাথে হিপসর্টের তুলনা করেন। যদিও ক্যাশ মেমোরির সুবিধার কারণে বাস্তবে কুইকসর্ট দ্রুত চলে, এর সবচেয়ে খারাপ ক্ষেত্রে O(n^2) সময় লেগে যেতে পারে। মার্জসর্ট O(n log n) সময় নিশ্চিত করলেও অতিরিক্ত O(n) মেমোরি দাবি করে। হিপসর্ট কোনো বাড়তি মেমোরি ছাড়াই কঠোরভাবে O(1) স্পেসে O(n log n) সময় নিশ্চিত করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Sorting Algorithm', bn: 'সর্টিং অ্যালগরিদম' },
        { en: 'Worst-Case Time', bn: 'সবচেয়ে খারাপ সময়' },
        { en: 'Auxiliary Memory', bn: 'অতিরিক্ত মেমোরি' },
        { en: 'Cache Locality', bn: 'ক্যাশ লোকালিটি' }
      ],
      rows: [
        [
          { en: 'Heapsort', bn: 'হিপসর্ট' },
          { en: 'O(n log n) guaranteed', bn: 'O(n log n) নিশ্চিত' },
          { en: 'O(1) strictly in-place', bn: 'O(1) কঠোরভাবে ইন-প্লেস' },
          { en: 'Moderate (index jumps)', bn: 'মাঝারি (ইনডেক্স লাফ)' }
        ],
        [
          { en: 'Quicksort', bn: 'কুইকসর্ট' },
          { en: 'O(n^2) worst case', bn: 'O(n^2) সবচেয়ে খারাপ' },
          { en: 'O(log n) call stack', bn: 'O(log n) কল স্ট্যাক' },
          { en: 'Superior (contiguous scan)', bn: 'অসাধারণ (অবিচ্ছিন্ন স্ক্যান)' }
        ],
        [
          { en: 'Mergesort', bn: 'মার্জসর্ট' },
          { en: 'O(n log n) guaranteed', bn: 'O(n log n) নিশ্চিত' },
          { en: 'O(n) auxiliary buffer', bn: 'O(n) অতিরিক্ত বাফার' },
          { en: 'Good (sequential merges)', bn: 'ভালো (ক্রমান্বয়ে মার্জ)' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-heapsort-code',
      text: {
        en: 'Executable Heapsort Implementation',
        bn: 'হিপসর্ট অ্যালগরিদমের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program sorts an array of 8 integers using in-place Heapsort. Notice how Phase 1 builds the Max-Heap, and Phase 2 systematically moves the maximum element to the rear of the array.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি ইন-প্লেস হিপসর্ট ব্যবহার করে ৮টি পূর্ণসংখ্যার একটি অ্যারে সাজায়। লক্ষ্য করুন কীভাবে ধাপ ১ এ ম্যাক্স-হিপ তৈরি হয় এবং ধাপ ২ এ সুশৃঙ্খলভাবে সর্বোচ্চ উপাদানটি অ্যারের শেষ প্রান্তে পৌঁছে যায়।'
      }
    },
    {
      type: 'code',
      code: `function heapsort(arr) {
  const n = arr.length;

  function siftDown(i, limit) {
    while (true) {
      let largest = i;
      const left = 2 * i + 1;
      const right = 2 * i + 2;

      if (left < limit && arr[left] > arr[largest]) {
        largest = left;
      }
      if (right < limit && arr[right] > arr[largest]) {
        largest = right;
      }

      if (largest !== i) {
        const tmp = arr[i];
        arr[i] = arr[largest];
        arr[largest] = tmp;
        i = largest;
      } else {
        break;
      }
    }
  }

  // Phase 1: Build max heap (Floyd heapify)
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    siftDown(i, n);
  }

  // Phase 2: Extract max and place at back
  for (let end = n - 1; end > 0; end--) {
    const tmp = arr[0];
    arr[0] = arr[end];
    arr[end] = tmp;

    siftDown(0, end);
  }

  return arr;
}

const numbers = [64, 34, 25, 12, 22, 11, 90, 88];
console.log('Unsorted Array:', numbers.slice().join(', '));
// Output: Unsorted Array: 64, 34, 25, 12, 22, 11, 90, 88

const sorted = heapsort(numbers);
console.log('Heapsort Result:', sorted.join(', '));
// Output: Heapsort Result: 11, 12, 22, 25, 34, 64, 88, 90
console.log('Min element:', sorted[0]);
// Output: Min element: 11
console.log('Max element:', sorted[sorted.length - 1]);
// Output: Max element: 90`
    },
    {
      type: 'heading',
      id: 'introsort-production-context',
      text: {
        en: 'Why Production Systems Use Introsort: Safety Meets Speed',
        bn: 'বাস্তব সিস্টেম কেন ইন্ট্রোসর্ট ব্যবহার করে: গতি এবং নিরাপত্তার মেলবন্ধন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In high-security production environments, relying purely on Quicksort exposes systems to algorithmic complexity attacks, where an adversary crafts worst-case inputs causing quadratic O(n^2) freezes. Modern platforms solve this with Introsort: the algorithm starts with fast Quicksort, tracks recursion depth, and switches to Heapsort if the recursion exceeds 2 * log2(n), guaranteeing deterministic completion.',
        bn: 'উচ্চ নিরাপত্তার উৎপাদন পরিবেশে শুধুমাত্র কুইকসর্টের ওপর নির্ভর করলে সিস্টেমগুলো অ্যালগরিদমিক জটিলতা আক্রমণের ঝুঁকিতে পড়ে, যেখানে আক্রমণকারী এমন ইনপুট দেয় যাতে O(n^2) বিলম্ব ঘটে। আধুনিক প্ল্যাটফর্মগুলো একে ইন্ট্রোসর্ট দিয়ে সমাধান করে: অ্যালগরিদমটি দ্রুত কুইকসর্ট দিয়ে শুরু করে, রিকার্শনের গভীরতা পর্যবেক্ষণ করে এবং গভীরতা ২ * log2(n) ছাড়ালে সাথে সাথে হিপসর্টে চলে যায়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Ascending sort via Max-Heap: A Max-Heap allows extracting the maximum element directly to the back of the array in-place.',
          bn: 'ম্যাক্স-হিপের মাধ্যমে ছোট থেকে বড় সাজানো: ম্যাক্স-হিপ ব্যবহার করায় সর্বোচ্চ মানটি পেছনের ফাঁকা জায়গায় অদলবদল করা যায়।'
        },
        {
          en: 'Strictly O(1) auxiliary space: Unlike Mergesort which needs O(n) RAM, Heapsort sorts entirely within the existing array buffer.',
          bn: 'কঠোরভাবে O(1) অতিরিক্ত মেমোরি: মার্জসর্টের মতো O(n) মেমোরি না নিয়ে হিপসর্ট সম্পূর্ণ নিজস্ব অ্যারের মধ্যেই কাজ করে।'
        },
        {
          en: 'Worst-case immunity: Heapsort guarantees O(n log n) runtime across all inputs, eliminating Quicksort quadratic failure modes.',
          bn: 'চরম ক্ষেত্রে নিরাপত্তা: সব ধরনের ইনপুটের জন্যই হিপসর্ট O(n log n) সময় নিশ্চিত করে, ফলে কুইকসর্টের O(n^2) ঝুঁকি থাকে না।'
        },
        {
          en: 'Introsort standard: Systems like C++ std::sort use Heapsort as a safety fallback when Quicksort recursion depth exceeds 2 log n.',
          bn: 'ইন্ট্রোসর্ট স্ট্যান্ডার্ড: সি++ এর std::sort কুইকসর্টের রিকার্শন গভীরতা ২ log n ছাড়ালে ব্যাকআপ হিসেবে হিপসর্টে চলে যায়।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'sp-ex1',
      kind: 'mcq',
      topic: 'heap-type-for-ascending-sort',
      question: {
        en: 'To sort an array in ascending order (smallest to largest) strictly in-place with O(1) auxiliary memory, which type of heap must be constructed in Phase 1?',
        bn: 'অতিরিক্ত মেমোরি ছাড়া কঠোরভাবে O(1) স্পেসে একটি অ্যারেকে ছোট থেকে বড় ক্রমে সাজাতে ধাপ ১ এ কোন ধরনের হিপ তৈরি করতে হয়?'
      },
      options: [
        {
          en: 'A Max-Heap, because swapping the maximum element at index 0 with the last slot carves out sorted space from the rear',
          bn: 'ম্যাক্স-হিপ, কারণ ০ নম্বরে থাকা সর্বোচ্চ উপাদানকে শেষ ঘরে অদলবদল করলে পেছনের দিক থেকে সাজানো স্থান তৈরি হয়'
        },
        {
          en: 'A Min-Heap, because the smallest element is at index 0',
          bn: 'মিন-হিপ, কারণ সবচেয়ে ছোট উপাদানটি ০ নম্বর ঘরে থাকে'
        },
        {
          en: 'A B-Tree of order 4',
          bn: '৪ অর্ডারের একটি বি-ট্রি'
        },
        {
          en: 'A Fibonacci heap with 16 roots',
          bn: '১৬টি রুট বিশিষ্ট একটি ফিবোনাচ্চি হিপ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Where should the largest element end up in an ascending sorted array: at index 0 or index n - 1?',
        bn: 'ছোট থেকে বড় সাজানো অ্যারেতে সবচেয়ে বড় সংখ্যাটি কোথায় যাওয়া উচিত: ০ নম্বরে না n - ১ নম্বরে?'
      },
      explanation: {
        en: 'In an ascending sort, large elements belong at the back. A Max-Heap places the largest element at root index 0, allowing an in-place swap with the end.',
        bn: 'ছোট থেকে বড় ক্রমে বড় উপাদানগুলো পেছনে থাকে। ম্যাক্স-হিপের রুট ০ নম্বরে সবচেয়ে বড় উপাদানটি থাকায় একে সরাসরি শেষের ঘরে অদলবদল করা যায়।'
      }
    },
    {
      id: 'sp-ex2',
      kind: 'mcq',
      topic: 'heapsort-cache-performance',
      question: {
        en: 'Why does Quicksort frequently outperform Heapsort in real-world wall-clock execution time despite both having O(n log n) average complexity?',
        bn: 'উভয়ের গড় সময় জটিলতা O(n log n) হওয়া সত্ত্বেও কেন কুইকসর্ট প্রায়শই বাস্তব ঘড়ির সময়ে হিপসর্টের চেয়ে দ্রুত চলে?'
      },
      options: [
        {
          en: 'Quicksort accesses memory sequentially (cache friendly), whereas Heapsort jumps across powers-of-two indices (2i + 1), causing more CPU cache misses',
          bn: 'কুইকসর্ট ক্রমান্বয়ে মেমোরি অ্যাক্সেস করে (ক্যাশ বান্ধব), যেখানে হিপসর্ট সূচকীয় ইনডেক্সে লাফায় (২i + ১) যা সিপিইউ ক্যাশ মিস বৃদ্ধি করে'
        },
        {
          en: 'Heapsort requires 64-bit floating-point multiplication on every swap',
          bn: 'হিপসর্টে প্রতিটি অদলবদলে ৬৪-বিট দশমিক গুণনের প্রয়োজন হয়'
        },
        {
          en: 'Quicksort runs on the GPU graphics card while Heapsort runs on the CPU',
          bn: 'কুইকসর্ট গ্রাফিক্স কার্ডে চলে এবং হিপসর্ট সিপিইউতে চলে'
        },
        {
          en: 'JavaScript disables heapsort optimization in the V8 engine',
          bn: 'জাভাস্ক্রিপ্ট ভি৮ ইঞ্জিনে হিপসর্ট অপ্টিমাইজেশন নিষ্ক্রিয় করে রাখে'
        }
      ],
      answer: 0,
      hint: {
        en: 'How does modern CPU caching interact with sequential vs scattered memory access?',
        bn: 'ক্রমান্বয়ে এবং বিক্ষিপ্ত মেমোরি পড়ার ক্ষেত্রে আধুনিক সিপিইউ ক্যাশ মেমোরি কেমন আচরণ করে?'
      },
      explanation: {
        en: 'Quicksort partitions scan adjacent memory cells within 64-byte cache lines. Heapsort tree traversals hop across distant memory addresses.',
        bn: 'কুইকসর্ট পাশাপাশি থাকা মেমোরি স্ক্যান করে যা ৬৪-বাইট ক্যাশ লাইনে সহজে ধরে। হিপসর্টের ট্রি জাম্প দূরবর্তী ঠিকানায় যাওয়ায় ক্যাশ মিস বেশি হয়।'
      }
    },
    {
      id: 'sp-ex3',
      kind: 'mcq',
      topic: 'heapsort-stability',
      question: {
        en: 'Is the standard in-place Heapsort algorithm stable?',
        bn: 'প্রমিত ইন-প্লেস হিপসর্ট অ্যালগরিদম কি স্থিতিশীল (stable)?'
      },
      options: [
        {
          en: 'No, because long-distance swaps between index 0 and the tail destroy the relative order of duplicate elements',
          bn: 'না, কারণ ০ নম্বর এবং শেষ ঘরের মধ্যকার দীর্ঘ দূরত্বের অদলবদল সমান উপাদানগুলোর পারস্পরিক ক্রম নষ্ট করে দেয়'
        },
        {
          en: 'Yes, it is guaranteed stable on all inputs',
          bn: 'হ্যাঁ, এটি সব ধরনের ইনপুটের জন্যই নিশ্চিতভাবে স্থিতিশীল'
        },
        {
          en: 'Yes, but only for prime numbers',
          bn: 'হ্যাঁ, তবে কেবল মৌলিক সংখ্যার জন্য'
        },
        {
          en: 'Stability depends on whether the array length is odd or even',
          bn: 'স্থিতিশীলতা নির্ভর করে অ্যারের দৈর্ঘ্য জোড় না বিজোড় তার ওপর'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does swapping index 0 with the last leaf preserve original arrival positions of identical values?',
        bn: '০ নম্বরের সাথে শেষ পাতার অদলবদল কি একই মানের আগের ক্রম রক্ষা করতে পারে?'
      },
      explanation: {
        en: 'Extracting elements across distant array positions can move duplicate keys past one another, making standard Heapsort unstable.',
        bn: 'দূরবর্তী অবস্থানে অদলবদল করার কারণে সমান মানগুলোর আগের ক্রম ওলটপালট হয়ে যায়, ফলে হিপসর্ট আনস্টেবল বা অস্থিতিশীল।'
      }
    }
  ],
  quiz: {
    id: 'the-sorted-pyre-quiz',
    title: {
      en: 'Heapsort Algorithm and Systems Quiz',
      bn: 'হিপসর্ট অ্যালগরিদম এবং সিস্টেমস কুইজ'
    },
    questions: [
      {
        id: 'sp-q1',
        kind: 'mcq',
        topic: 'heapsort-worst-case-time',
        question: {
          en: 'What is the worst-case time complexity of Heapsort for an array of size n?',
          bn: 'n আকারের একটি অ্যারের জন্য হিপসর্টের সবচেয়ে খারাপ ক্ষেত্রের সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(n log n) deterministic time',
            bn: 'O(n log n) সুনির্দিষ্ট সময়'
          },
          {
            en: 'O(n^2) quadratic time',
            bn: 'O(n^2) চতুর্ঘাতী সময়'
          },
          {
            en: 'O(n) linear time',
            bn: 'O(n) রৈখিক সময়'
          },
          {
            en: 'O(2^n) exponential time',
            bn: 'O(2^n) সূচকীয় সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does Heapsort have a bad pivot case like Quicksort does?',
          bn: 'কুইকসর্টের মতো হিপসর্টে কি কোনো খারাপ পিভট পরিস্থিতি তৈরি হয়?'
        },
        explanation: {
          en: 'Heapsort always performs n - 1 extractions, each costing at most O(log n) sift-down steps. Worst-case time is strictly O(n log n).',
          bn: 'হিপসর্টে সর্বদা n - ১ বার রুট সরানো হয় এবং প্রতিটিতে সর্বোচ্চ O(log n) কাজ হয়। ফলে সবচেয়ে খারাপ ক্ষেত্রেও সময় কঠোরভাবে O(n log n)।'
        }
      },
      {
        id: 'sp-q2',
        kind: 'mcq',
        topic: 'heapsort-auxiliary-space',
        question: {
          en: 'What is the auxiliary space complexity of Heapsort?',
          bn: 'হিপসর্টের অতিরিক্ত মেমোরি জটিলতা কত?'
        },
        options: [
          {
            en: 'O(1) auxiliary space, operating completely in-place',
            bn: 'O(1) অতিরিক্ত স্থান, সম্পূর্ণ ইন-প্লেস কাজ করে'
          },
          {
            en: 'O(n) space for an auxiliary buffer',
            bn: 'একটি অতিরিক্ত বাফারের জন্য O(n) স্থান'
          },
          {
            en: 'O(log n) call stack space',
            bn: 'O(log n) কল স্ট্যাক স্থান'
          },
          {
            en: 'O(n^2) space',
            bn: 'O(n^2) স্থান'
          }
        ],
        answer: 0,
        hint: {
          en: 'Does iterative Heapsort create duplicate arrays or deep recursion trees?',
          bn: 'লুপভিত্তিক হিপসর্ট কি অতিরিক্ত অ্যারে বা গভীর রিকার্শন ট্রি তৈরি করে?'
        },
        explanation: {
          en: 'Heapsort sorts directly within the original array using a few index variables, requiring zero additional memory allocation.',
          bn: 'হিপসর্ট মূল অ্যারের মধ্যেই সামান্য কিছু সূচক চলক ব্যবহার করে সাজায়, ফলে কোনো অতিরিক্ত মেমোরি বরাদ্দের প্রয়োজন হয় না।'
        }
      },
      {
        id: 'sp-q3',
        kind: 'mcq',
        topic: 'introsort-switching-trigger',
        question: {
          en: 'Under what condition does the Introsort algorithm transition from Quicksort to Heapsort?',
          bn: 'কোন শর্ত পূরণ হলে ইন্ট্রোসর্ট অ্যালগরিদম কুইকসর্ট থেকে হিপসর্টে চলে যায়?'
        },
        options: [
          {
            en: 'When the recursive call depth exceeds 2 * Math.floor(log2(n)), signaling a pathological quadratic partition pattern',
            bn: 'যখন রিকার্শনের গভীরতা ২ * Math.floor(log2(n)) অতিক্রম করে, যা চতুর্ঘাতী O(n^2) বিলম্বের ইঙ্গিত দেয়'
          },
          {
            en: 'When the array contains more than 100 negative numbers',
            bn: 'যখন অ্যারেতে ১০০ টির বেশি ঋণাত্মক সংখ্যা থাকে'
          },
          {
            en: 'When CPU temperature rises above 80 degrees Celsius',
            bn: 'সিপিইউর তাপমাত্রা ৮০ ডিগ্রি সেলসিয়াস ছাড়ালে'
          },
          {
            en: 'When JavaScript garbage collection pauses the process',
            bn: 'যখন জাভাস্ক্রিপ্ট গারবেজ কালেকশন প্রসেস থামিয়ে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Introsort uses recursion depth as an early warning for worst-case Quicksort splits.',
          bn: 'ইন্ট্রোসর্ট কুইকসর্টের খারাপ বিভাজন আগেভাগে বুঝতে রিকার্শনের গভীরতা পর্যবেক্ষণ করে।'
        },
        explanation: {
          en: 'If recursion exceeds 2 log2(n), Quicksort is degrading toward O(n^2). Switching to Heapsort guarantees an O(n log n) bound.',
          bn: 'রিকার্শন ২ log2(n) ছাড়ালে কুইকসর্ট O(n^2) এর দিকে যেতে থাকে। হিপসর্টে চলে গেলে নিশ্চিতভাবে O(n log n) সীমায় কাজ শেষ হয়।'
        }
      },
      {
        id: 'sp-q4',
        kind: 'mcq',
      topic: 'phase-one-cost-in-heapsort',
      question: {
        en: 'What is the time complexity of Phase 1 (heap construction) in Heapsort?',
        bn: 'হিপসর্টের ধাপ ১ এর (হিপ নির্মাণ) সময় জটিলতা কত?'
      },
      options: [
        {
          en: 'O(n) linear time, using Floyd’s bottom-up heapify',
          bn: 'O(n) রৈখিক সময়, ফ্লয়েডের বটম-আপ হিপিফাই ব্যবহার করে'
        },
        {
          en: 'O(n log n) time',
          bn: 'O(n log n) সময়'
        },
        {
          en: 'O(1) constant time',
          bn: 'O(1) ধ্রুবক সময়'
        },
        {
          en: 'O(n^2) time',
          bn: 'O(n^2) সময়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does Phase 1 insert elements one-by-one or use Floyd’s bottom-up method?',
        bn: 'ধাপ ১ এ কি উপাদান একে একে সন্নিবেশ করা হয় নাকি ফ্লয়েডের বটম-আপ পদ্ধতি ব্যবহার করা হয়?'
      },
      explanation: {
        en: 'Building the initial heap uses Floyd’s heapify, completing Phase 1 in O(n) linear time before Phase 2 takes O(n log n).',
        bn: 'প্রথম হিপ তৈরিতে ফ্লয়েডের হিপিফাই ব্যবহার করায় ধাপ ১ এ O(n) সময়ে সম্পন্ন হয়, যার পরে ধাপ ২ এ O(n log n) সময় লাগে।'
      }
      }
    ]
  }
};
