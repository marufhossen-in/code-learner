import type { Lesson } from '../../../lib/types';

export const theParametricVeinLesson: Lesson = {
  slug: 'the-parametric-vein',
  tech: 'searching',
  title: {
    en: 'Parametric Search: Binary Search on the Answer Space',
    bn: 'প্যারামেট্রিক সার্চ: সমাধান পরিধিতে বাইনারি সার্চ'
  },
  summary: {
    en: 'Parametric search inverts optimization problems by performing binary search across candidate answers rather than array elements. When a decision function is monotonic, returning false below a threshold and true at or above it, binary search locates the optimal boundary in O(n * log(range)) time. Classic applications include package shipping capacity within D days, allocating book pages to minimize maximum workload, finding the minimum eating speed within H hours, and maximizing the minimum distance between items. Each probe validates feasibility with a single greedy O(n) scan.',
    bn: 'প্যারামেট্রিক সার্চ অ্যারের উপাদানের বদলে সম্ভাব্য উত্তরের পরিধিতে বাইনারি সার্চ পরিচালনা করে অপ্টিমাইজেশন সমস্যার সমাধান করে। কোনো সিদ্ধান্ত ফাংশন একমুখী বা মনোটনিক হলে, যা একটি নির্দিষ্ট সীমার নিচে false এবং সীমার উপরে true ফেরত দেয়, বাইনারি সার্চ O(n * log(range)) সময়ে সর্বোত্তম সমাধান খুঁজে বের করে। এর ক্লাসিক প্রয়োগগুলোর মধ্যে রয়েছে D দিনে প্যাকেজ পরিবহনের জাহাজ ক্ষমতা, সর্বাধিক কাজের চাপ কমাতে বইয়ের পাতা বণ্টন, H ঘণ্টায় কলা খাওয়ার সর্বনিম্ন গতি নির্ধারণ এবং উপাদানগুলোর মধ্যকার সর্বনিম্ন দূরত্ব সর্বাধিক করা। প্রতিটি প্রোব একটি একক লোভী O(n) স্ক্যানের মাধ্যমে সম্ভাব্যতা যাচাই করে।'
  },
  minutes: 28,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'What Parametric Search Solves: Question Inversion',
        bn: 'প্যারামেট্রিক সার্চ কী সমাধান করে: প্রশ্নের রূপান্তর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we examine how binary search navigates abstract numerical answer spaces rather than physical memory addresses. Many optimization problems ask for the minimum capacity, minimum speed, or maximum allocation that satisfies complex business constraints. Solving such problems directly can require exponential combinatorial effort. Parametric search inverts the problem: instead of calculating the exact answer directly, the algorithm tests whether a candidate answer value mid is feasible using an efficient decision predicate. If feasibility is monotonic, binary search finds the optimal value in logarithmic rounds.',
        bn: 'এই পাঠে আমরা দেখব কীভাবে বাইনারি সার্চ কেবল মেমরি অ্যাড্রেস নয়, সম্ভাব্য উত্তরের একটি কাল্পনিক সাংখ্যিক পরিধিতে অনুসন্ধান পরিচালনা করে। অনেক অপ্টিমাইজেশন সমস্যায় জটিল ব্যবসায়িক শর্ত পূরণকারী সর্বনিম্ন ধারণক্ষমতা, সর্বনিম্ন গতি বা সর্বাধিক বরাদ্দ জানতে চাওয়া হয়। সরাসরি এই উত্তর বের করতে গেলে সূচকীয় কম্বিনেটোরিয়াল সময়ের প্রয়োজন হতে পারে। প্যারামেট্রিক সার্চ সমস্যাটিকে উল্টো দিক থেকে সমাধান করে: সরাসরি উত্তর গণনার বদলে অ্যালগরিদমটি একটি কার্যকর সিদ্ধান্ত ফাংশন দিয়ে যাচাই করে যে কোনো নির্দিষ্ট উত্তর mid গ্রহণযোগ্য কি না। গ্রহণযোগ্যতা একমুখী বা মনোটনিক হলে বাইনারি সার্চ লগারিদমিক ধাপে সর্বোত্তম উত্তরটি খুঁজে বের করে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Parametric Search',
          def: {
            en: 'An algorithmic technique that binary searches an answer interval by transforming an optimization problem into a series of decision checks.',
            bn: 'একটি অ্যালগরিদম কৌশল যা কোনো অপ্টিমাইজেশন সমস্যাকে একাধিক সিদ্ধান্তের ধারাবাহিক পরীক্ষায় রূপান্তর করে উত্তরের ব্যবধানে বাইনারি সার্চ চালায়।'
          }
        },
        {
          term: 'Monotonic Predicate',
          def: {
            en: 'A boolean function whose output changes truth value at most once across the search range, transitioning deterministically from false to true.',
            bn: 'একটি বুলিয়ান ফাংশন যার ফলাফল অনুসন্ধান পরিধিতে সর্বোচ্চ একবার পরিবর্তিত হয় এবং নিশ্চিতভাবে false থেকে true তে রূপান্তরিত হয়।'
          }
        },
        {
          term: 'Decision Space',
          def: {
            en: 'The bounded numerical interval between the smallest physically possible answer and the largest conceivable answer.',
            bn: 'সর্বনিম্ন বাস্তবিক সম্ভাব্য উত্তর এবং সর্বোচ্চ সম্ভাব্য উত্তরের মধ্যকার সীমাবদ্ধ সাংখ্যিক ব্যবধান।'
          }
        },
        {
          term: 'Greedy Verification',
          def: {
            en: 'A single O(n) sequential simulation that tests whether a given candidate parameter value satisfies all problem constraints.',
            bn: 'একটি একক O(n) ধারাবাহিক সিমুলেশন যা পরীক্ষা করে যে কোনো নির্দিষ্ট প্যারামিটার মান সমস্যার সব শর্ত পূরণ করতে পারে কি না।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'monotonicity-and-bounds',
      text: {
        en: 'The Monotonicity Law and Bound Formulation',
        bn: 'মনোটনিসিটি নীতি এবং বাউন্ড নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The fundamental prerequisite for parametric search is monotonicity. Consider the problem of transporting cargo packages within a fixed deadline of d days. If a ship with capacity c can transport all packages within d days, any ship with capacity c + 1 can also complete the task. Conversely, if capacity c fails, any smaller capacity c - 1 is guaranteed to fail. The predicate canShip(c) evaluates to false for small values and flips to true at a distinct threshold. To define the search space, identify the extreme boundaries. The minimum possible ship capacity must equal the heaviest single package; otherwise, that package could never be loaded. The maximum required capacity is the sum of all packages, which transports the entire cargo in 1 single day. Binary search evaluates mid = lo + Math.floor((hi - lo) / 2). If canShip(mid) is true, mid is a candidate answer and the search explores smaller capacities by setting hi = mid - 1. If false, lo advances to mid + 1.',
        bn: 'প্যারামেট্রিক সার্চের মৌলিক পূর্বশর্ত হলো মনোটনিসিটি বা একমুখিতা। d দিনের নির্দিষ্ট সময়সীমার মধ্যে মালবাহী প্যাকেজ পরিবহনের সমস্যাটি বিবেচনা করুন। c ধারণক্ষমতার একটি জাহাজ যদি d দিনে সব প্যাকেজ পরিবহন করতে পারে, তবে c + ১ ক্ষমতার যেকোনো জাহাজও নিশ্চিতভাবে কাজটি শেষ করতে পারবে। বিপরীতে c ক্ষমতা যদি ব্যর্থ হয়, তবে তার চেয়ে ছোট c - ১ ক্ষমতাও নিশ্চিতভাবে ব্যর্থ হবে। অর্থাৎ canShip(c) ফাংশনটি ছোট মানের জন্য false দেয় এবং একটি নির্দিষ্ট সীমায় পৌঁছে true তে রূপান্তরিত হয়। সার্চের পরিধি নির্ধারণের জন্য চরম প্রান্তদ্বয় শনাক্ত করতে হয়। জাহাজের সর্বনিম্ন ধারণক্ষমতা অবশ্যই সবচেয়ে ভারী একক প্যাকেজের সমান হতে হবে; নইলে সেই প্যাকেজটি কখনো জাহাজে তোলাই যাবে না। আর সর্বোচ্চ ধারণক্ষমতা হলো সব প্যাকেজের ওজনের যোগফল, যা দিয়ে মাত্র ১ দিনেই সব মালামাল পরিবহন করা সম্ভব। বাইনারি সার্চ mid = lo + Math.floor((hi - lo) / 2) মানটি পরীক্ষা করে। canShip(mid) যদি true হয়, তবে mid একটি সম্ভাব্য উত্তর এবং hi = mid - 1 করে আরও ছোট ক্ষমতা খোঁজা হয়। আর false হলে lo বৃদ্ধি পেয়ে mid + 1 হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'parametric-shipping.ts',
      caption: {
        en: 'Implementation of capacity search to ship packages within D days.',
        bn: 'D দিনে প্যাকেজ পরিবহনের জন্য প্রয়োজনীয় সর্বনিম্ন জাহাজ ক্ষমতা নির্ণয়ের কোড।'
      },
      code: `export function shipWithinDays(weights: number[], days: number): number {
  // Lower bound: must carry at least the heaviest single item
  let lo = Math.max(...weights);
  // Upper bound: carrying all items in a single day
  let hi = weights.reduce((acc, w) => acc + w, 0);
  let bestCapacity = hi;

  // Greedy O(n) decision predicate
  function canShipWithCapacity(cap: number): boolean {
    let requiredDays = 1;
    let currentDayLoad = 0;

    for (const w of weights) {
      if (currentDayLoad + w > cap) {
        requiredDays++;
        currentDayLoad = 0;
      }
      currentDayLoad += w;
    }
    return requiredDays <= days;
  }

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canShipWithCapacity(mid)) {
      bestCapacity = mid; // Feasible, record and search for smaller
      hi = mid - 1;
    } else {
      lo = mid + 1;       // Infeasible, need larger capacity
    }
  }
  return bestCapacity;
}`
    },
    {
      type: 'heading',
      id: 'classic-archetypes',
      text: {
        en: 'Classic Problem Archetypes: Bananas and Stalls',
        bn: 'ক্লাসিক সমস্যার ধরন: কলা খাওয়া ও স্টল বরাদ্দ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Two other canonical archetypes highlight the breadth of parametric search. In the eating bananas problem, given an array of fruit piles and a deadline of h hours, we seek the minimum integer eating speed k. For speed k, a pile of p items takes Math.ceil(p / k) hours. The decision function sums ceil(p / mid) across all piles and checks if the total hours are less than or equal to h. Feasibility is monotonic: faster speeds always consume equal or fewer hours. The second archetype reverses the objective: maximizing the minimum distance between k items placed in stalls along a coordinate line. Stalls are sorted by coordinate. To test candidate distance mid, a greedy placer places the first item at index 0 and each subsequent item at the first stall at least mid units away. If at least k items can be placed, mid is feasible. Here we seek the largest feasible value, so when canPlace(mid) is true, we record the answer and advance lo = mid + 1 to test larger distances.',
        bn: 'অন্য দুটি ক্লাসিক সমস্যা প্যারামেট্রিক সার্চের বহুমুখী প্রয়োগ তুলে ধরে। কলা খাওয়ার সমস্যায় ফলের স্তূপের একটি অ্যারে এবং h ঘণ্টার সময়সীমা দেওয়া থাকে, যেখানে আমাদের সর্বনিম্ন পূর্ণসংখ্যা গতি k বের করতে হয়। k গতিতে p আকারের স্তূপ শেষ করতে Math.ceil(p / k) ঘণ্টা সময় লাগে। সিদ্ধান্ত ফাংশনটি প্রতিটি স্তূপের জন্য ceil(p / mid) যোগ করে মোট সময় h ঘণ্টার সমান বা কম কি না তা যাচাই করে। এখানেও একমুখিতা বজায় থাকে: বেশি গতিতে সবসময় সমান বা কম সময় লাগে। দ্বিতীয় ধরনটি উদ্দেশ্যকে উল্টে দেয়: একটি স্থানাঙ্ক রেখায় অবস্থিত স্টলগুলোতে k সংখ্যক উপাদান বসিয়ে তাদের মধ্যকার সর্বনিম্ন দূরত্বকে সর্বাধিক করা। প্রথমে স্টলগুলোকে ক্রমানুসারে সাজানো হয়। mid দূরত্ব যাচাই করতে লোভী পদ্ধতিতে প্রথম উপাদানটি ইনডেক্স ০ এ বসানো হয় এবং পরবর্তী প্রতিটি উপাদান অন্তত mid দূরত্ব বজায় রেখে প্রথম খালি স্টলে বসানো হয়। k সংখ্যক উপাদান বসানো সম্ভব হলে mid একটি কার্যকর দূরত্ব। এখানে যেহেতু সর্বোচ্চ দূরত্ব খোঁজা হচ্ছে, তাই canPlace(mid) সত্য হলে উত্তর সংরক্ষণ করে আরও বড় দূরত্বের জন্য lo = mid + 1 করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'bananas-and-stalls.ts',
      caption: {
        en: 'Implementation of minimum eating speed and aggressive cows maximum-minimum spacing.',
        bn: 'সর্বনিম্ন খাওয়ার গতি এবং এগ্রেসিভ কাউস সর্বোচ্চ-সর্বনিম্ন ব্যবধানের বাস্তবায়ন।'
      },
      code: `export function minEatingSpeed(piles: number[], h: number): number {
  let lo = 1;
  let hi = Math.max(...piles);
  let bestSpeed = hi;

  function canFinish(speed: number): boolean {
    let totalHours = 0;
    for (const pile of piles) {
      totalHours += Math.ceil(pile / speed);
    }
    return totalHours <= h;
  }

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canFinish(mid)) {
      bestSpeed = mid;
      hi = mid - 1; // Seek smaller feasible speed
    } else {
      lo = mid + 1; // Needs faster speed
    }
  }
  return bestSpeed;
}

export function maxMinDistance(stalls: number[], k: number): number {
  stalls.sort((a, b) => a - b);
  let lo = 1;
  let hi = stalls[stalls.length - 1] - stalls[0];
  let bestDistance = 0;

  function canPlaceItems(dist: number): boolean {
    let count = 1;
    let lastPosition = stalls[0];

    for (let i = 1; i < stalls.length; i++) {
      if (stalls[i] - lastPosition >= dist) {
        count++;
        lastPosition = stalls[i];
      }
    }
    return count >= k;
  }

  while (lo <= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (canPlaceItems(mid)) {
      bestDistance = mid; // Feasible, attempt larger distance
      lo = mid + 1;
    } else {
      hi = mid - 1;       // Infeasible, try smaller distance
    }
  }
  return bestDistance;
}`
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Execution Trace: Verifying Real Answers Across Domains',
        bn: 'এক্সিকিউশন ট্রেস: বিভিন্ন ক্ষেত্রে বাস্তব ফলাফলের সত্যতা যাচাই'
      }
    },
    {
      type: 'para',
      text: {
        en: 'We run the simulation on three distinct benchmark problems. For shipping weights [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] across 5 days, interval bounds begin at lo 10 and hi 55. The algorithm converges to optimal capacity 15 in 6 bisection rounds. For fruit piles [3, 6, 7, 11] with deadline 8 hours, the candidate window spans 1 to 11, converging to speed 4 bananas per hour in 4 rounds. For stall positions [1, 2, 4, 8, 9] placing 3 cows, distances range from 1 to 8, determining the maximum minimum distance of 3 in 3 rounds.',
        bn: 'আমরা তিনটি ভিন্ন বেঞ্চমার্ক সমস্যার ওপর সিমুলেশন পরিচালনা করি। ৫ দিনে [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] প্যাকেজ পরিবহনের জন্য ব্যবধান শুরু হয় lo 10 এবং hi 55 দিয়ে। অ্যালগরিদমটি 6 রাউন্ডের বাইসেকশনে সর্বোত্তম ক্ষমতা 15 এ পৌঁছায়। 8 ঘণ্টার সময়সীমায় ফলের স্তূপ [3, 6, 7, 11] এর জন্য প্রার্থীর উইন্ডো 1 থেকে 11 পর্যন্ত বিস্তৃত, যা 4 রাউন্ডে প্রতি ঘণ্টায় 4 টি কলা খাওয়ার গতি নিশ্চিত করে। আর স্টল অবস্থান [1, 2, 4, 8, 9] তে 3 টি প্রাণী বসানোর ক্ষেত্রে দূরত্ব 1 থেকে 8 এর মধ্যে থাকে, যা 3 রাউন্ডে সর্বোচ্চ সর্বনিম্ন দূরত্ব 3 নির্ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      filename: 'trace-simulation.ts',
      caption: {
        en: 'Detailed execution traces across shipping, eating speed, and stall placement.',
        bn: 'জাহাজ ক্ষমতা, খাওয়ার গতি এবং স্টল বরাদ্দের বাস্তব এক্সিকিউশন ট্রেস।'
      },
      code: `// 1. Ship Packages within 5 Days
// weights = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10], days = 5
// lo = 10, hi = 55
// Round 1: mid = 32 -> canShip(32) true  -> hi = 31, best = 32
// Round 2: mid = 20 -> canShip(20) true  -> hi = 19, best = 20
// Round 3: mid = 14 -> canShip(14) false -> lo = 15
// Round 4: mid = 17 -> canShip(17) true  -> hi = 16, best = 17
// Round 5: mid = 15 -> canShip(15) true  -> hi = 14, best = 15
// Round 6: mid = 14 -> already false     -> terminates!
// Result: 15 capacity! (Day loads: [1..5]=15, [6..7]=13, [8]=8, [9]=9, [10]=10)

// 2. Koko Eating Bananas within 8 Hours
// piles = [3, 6, 7, 11], h = 8
// lo = 1, hi = 11
// Round 1: mid = 6 -> hours: ceil(3/6)+ceil(6/6)+ceil(7/6)+ceil(11/6) = 1+1+2+2 = 6 <= 8 (true) -> hi = 5, best = 6
// Round 2: mid = 3 -> hours: ceil(3/3)+ceil(6/3)+ceil(7/3)+ceil(11/3) = 1+2+3+4 = 10 > 8 (false) -> lo = 4
// Round 3: mid = 4 -> hours: ceil(3/4)+ceil(6/4)+ceil(7/4)+ceil(11/4) = 1+2+2+3 = 8 <= 8 (true)  -> hi = 3, best = 4
// Result: 4 bananas per hour!

// 3. Stalls Maximum Minimum Distance
// stalls = [1, 2, 4, 8, 9], k = 3
// lo = 1, hi = 8
// Round 1: mid = 4 -> place at 1, 8 (only 2 cows placed < 3) -> false -> hi = 3
// Round 2: mid = 2 -> place at 1, 4, 8 (3 cows placed >= 3)   -> true  -> lo = 3, best = 2
// Round 3: mid = 3 -> place at 1, 4, 8 (3 cows placed >= 3)   -> true  -> lo = 4, best = 3
// Result: maximum minimum distance = 3!`
    },
    {
      type: 'heading',
      id: 'visual',
      text: {
        en: 'Visualizing the Monotonic Decision Line',
        bn: 'একমুখী সিদ্ধান্ত রেখার ভিজ্যুয়ালাইজেশন'
      }
    },
    {
      type: 'visual',
      id: 'srch'
    },
    {
      type: 'heading',
      id: 'complexity-analysis',
      text: {
        en: 'Complexity Analysis: Bounding the Answer Space',
        bn: 'কমপ্লেক্সিটি বিশ্লেষণ: সমাধান পরিধি নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The time complexity of parametric search is expressed as O(n * log(range)). The parameter range is defined as hi minus lo. Because binary search halves the numerical interval on each step, the number of decision evaluations is ceil(log2(range)). For example, if shipping capacity ranges between 1 and 1000000000, ceil(log2(1000000000)) requires approximately 30 decision evaluations. Each evaluation performs an O(n) scan across the input array. For an array of 100000 elements, testing all capacities linearly would require 100000 * 1000000000 operations, which is completely intractable. Parametric search completes the task in 30 * 100000 = 3000000 operations, executing in mere milliseconds.',
        bn: 'প্যারামেট্রিক সার্চের টাইম কমপ্লেক্সিটি O(n * log(range)) হিসেবে প্রকাশ করা হয়। প্যারামিটার রেঞ্জ হলো hi থেকে lo এর বিয়োগফল। যেহেতু বাইনারি সার্চ প্রতি ধাপে সাংখ্যিক ব্যবধান অর্ধেকে কমিয়ে আনে, তাই সিদ্ধান্ত মূল্যায়নের মোট সংখ্যা হয় ceil(log2(range))। উদাহরণস্বরূপ, জাহাজের ধারণক্ষমতা যদি ১ থেকে ১০০০000000 পর্যন্ত বিস্তৃত হয়, তবে ceil(log2(১০০০000000)) এর জন্য প্রায় ৩০টি সিদ্ধান্ত মূল্যায়নের প্রয়োজন হয়। প্রতিটি মূল্যায়নে ইনপুট অ্যারে জুড়ে একটি O(n) স্ক্যান চালানো হয়। ১00000 উপাদানের একটি অ্যারেতে লিনিয়ার পদ্ধতিতে সব ক্ষমতা পরীক্ষা করতে গেলে ১00000 * ১০০০000000 অপারেশন লাগত, যা সম্পন্ন করা অসম্ভব। কিন্তু প্যারামেট্রিক সার্চ মাত্র ৩০ * ১00000 = ৩000000 অপারেশনে কয়েক মিলিসেকেন্ডেই কাজটি সম্পন্ন করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Problem Type', bn: 'সমস্যার ধরন' },
        { en: 'Search Space [lo, hi]', bn: 'সার্চ পরিধি [lo, hi]' },
        { en: 'Predicate Logic', bn: 'সিদ্ধান্ত লজিক' },
        { en: 'Update Rule', bn: 'আপডেট নিয়ম' }
      ],
      rows: [
        [
          { en: 'Capacity Minimization', bn: 'ক্ষমতা সর্বনিম্নকরণ' },
          { en: '[max(element), sum(elements)]', bn: '[সর্বোচ্চ উপাদান, যোগফল]' },
          { en: 'Can workload finish within D days?', bn: 'D দিনে কাজ শেষ সম্ভব কি না?' },
          { en: 'True -> hi = mid - 1, record best', bn: 'True -> hi = mid - 1, উত্তর সংরক্ষণ' }
        ],
        [
          { en: 'Rate / Speed Minimization', bn: 'গতি সর্বনিম্নকরণ' },
          { en: '[1, max(pile)]', bn: '[১, সর্বোচ্চ স্তূপ]' },
          { en: 'Total ceil(pile / speed) <= H hours', bn: 'মোট ceil(স্তূপ / গতি) <= H ঘণ্টা' },
          { en: 'True -> hi = mid - 1, record best', bn: 'True -> hi = mid - 1, উত্তর সংরক্ষণ' }
        ],
        [
          { en: 'Distance Maximization', bn: 'দূরত্ব সর্বাধিককরণ' },
          { en: '[1, max(coord) - min(coord)]', bn: '[১, সর্বোচ্চ - সর্বনিম্ন স্থানাঙ্ক]' },
          { en: 'Can k items be placed with gap >= mid?', bn: 'ব্যবধান >= mid রেখে k টি বসানো যায়?' },
          { en: 'True -> lo = mid + 1, record best', bn: 'True -> lo = mid + 1, উত্তর সংরক্ষণ' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'summary',
      text: {
        en: 'Summary: Expanding Binary Search Beyond Arrays',
        bn: 'সারসংক্ষেপ: অ্যারের বাইরে বাইনারি সার্চের বিস্তার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Parametric search demonstrates that binary search is not merely an array lookup method, but a universal mathematical optimization engine. As long as a decision function preserves monotonicity across numerical inputs, logarithmic bisection can discover optimal thresholds across massive search ranges. Identifying the correct lower and upper bounds and implementing an efficient O(n) greedy checker turns complex combinatorial puzzles into elegant logarithmic solutions.',
        bn: 'প্যারামেট্রিক সার্চ প্রমাণ করে যে বাইনারি সার্চ শুধুমাত্র অ্যারেতে মান খোঁজার পদ্ধতি নয়, বরং একটি সর্বজনীন গাণিতিক অপ্টিমাইজেশন ইঞ্জিন। সাংখ্যিক ইনপুটে কোনো সিদ্ধান্ত ফাংশন যতক্ষণ একমুখিতা বা মনোটনিসিটি বজায় রাখে, ততক্ষণ লগারিদমিক বাইসেকশন বিশাল পরিধি জুড়ে সর্বোত্তম থ্রেশহোল্ড খুঁজে বের করতে পারে। সঠিক লোয়ার ও আপার বাউন্ড নির্ধারণ করা এবং একটি কার্যকর O(n) লোভী পরীক্ষক তৈরি করা জটিল কম্বিনেটোরিয়াল সমস্যাকে চমৎকার লগারিদমিক সমাধানে রূপান্তর করে।'
      }
    }
  ],
  nextLesson: {
    slug: 'the-unimodal-atelier',
    tech: 'searching',
    title: {
      en: 'Ternary Search & Optimization: Unimodal Functions',
      bn: 'টার্নারি সার্চ ও অপ্টিমাইজেশন: ইউনিমোডাল ফাংশন'
    }
  },
  exercises: [
    {
      id: 'pv-ex1',
      kind: 'mcq',
      topic: 'search range bounds',
      question: {
        en: 'When binary searching for the minimum ship capacity to transport packages weights within d days, why must lo be initialized to Math.max(...weights)?',
        bn: 'd দিনে প্যাকেজ পরিবহনের জন্য প্রয়োজনীয় সর্বনিম্ন জাহাজ ক্ষমতা বাইনারি সার্চ করার সময় lo এর প্রাথমিক মান Math.max(...weights) কেন নির্ধারণ করতে হয়?'
      },
      options: [
        {
          en: 'Because a ship cannot carry a package that exceeds its total capacity, the capacity must be at least as large as the heaviest individual item',
          bn: 'কারণ কোনো জাহাজ তার মোট ধারণক্ষমতার চেয়ে ভারী প্যাকেজ বহন করতে পারে না, তাই জাহাজের ক্ষমতা অবশ্যই সবচেয়ে ভারী একক আইটেমের সমান বা বড় হতে হবে'
        },
        {
          en: 'Because the average package weight is mathematically guaranteed to equal the maximum weight',
          bn: 'কারণ প্যাকেজের গড় ওজন গাণিতিকভাবে নিশ্চিতভাবে সর্বোচ্চ ওজনের সমান হয়'
        },
        {
          en: 'To prevent floating-point division by zero in the mid calculation',
          bn: 'mid হিসাবে ফ্লোটিং-পয়েন্ট শূন্য দিয়ে ভাগ হওয়া রোধ করতে'
        },
        {
          en: 'Because JavaScript arrays throw a runtime error when lo starts at 0',
          bn: 'কারণ lo এর মান ০ দিয়ে শুরু হলে জাভাস্ক্রিপ্ট অ্যারে রানটাইম এরর দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'If a single package weighs 10 units, what happens if the ship capacity is only 9 units?',
        bn: 'একটি একক প্যাকেজের ওজন যদি ১০ একক হয়, তবে জাহাজের ক্ষমতা মাত্র ৯ একক হলে কী ঘটবে?'
      },
      explanation: {
        en: 'Every package must be transported indivisibly. If the ship capacity is smaller than the maximum single item, that package can never be transported, violating the problem constraint.',
        bn: 'প্রতিটি প্যাকেজ অখণ্ডভাবে পরিবহন করতে হয়। জাহাজের ক্ষমতা যদি সর্বোচ্চ একক প্যাকেজের চেয়ে কম হয়, তবে সেই প্যাকেজটি কখনোই পরিবহন করা সম্ভব হবে না এবং সমস্যাটি সমাধানহীন থাকবে।'
      }
    },
    {
      id: 'pv-ex2',
      kind: 'predict',
      topic: 'koko banana hours',
      question: {
        en: 'Given banana piles [3, 6, 7, 11] and eating speed k = 4 bananas per hour, how many total hours are required to finish all piles?',
        bn: 'ফলের স্তূপ [3, 6, 7, 11] এবং খাওয়ার গতি k = 4 কলা প্রতি ঘণ্টা হলে সব স্তূপ শেষ করতে মোট কত ঘণ্টা সময় লাগবে?'
      },
      options: [
        {
          en: '8 hours (1 hour for pile 3, 2 for pile 6, 2 for pile 7, and 3 for pile 11)',
          bn: '৮ ঘণ্টা (৩ এর স্তূপে ১ ঘণ্টা, ৬ এর স্তূপে ২ ঘণ্টা, ৭ এর স্তূপে ২ ঘণ্টা এবং ১১ এর স্তূপে ৩ ঘণ্টা)'
        },
        {
          en: '7 hours (direct integer division 27 / 4)',
          bn: '৭ ঘণ্টা (সরাসরি পূর্ণসংখ্যা ভাগ ২৭ / ৪)'
        },
        {
          en: '10 hours (using speed 3)',
          bn: '১০ ঘণ্টা (গতি ৩ ব্যবহার করে)'
        },
        {
          en: '6 hours',
          bn: '৬ ঘণ্টা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate Math.ceil(p / 4) for each pile: ceil(3/4) = 1, ceil(6/4) = 2, ceil(7/4) = 2, ceil(11/4) = 3.',
        bn: 'প্রতিটি স্তূপের জন্য Math.ceil(p / ৪) হিসাব করুন: ceil(৩/৪) = ১, ceil(৬/৪) = ২, ceil(৭/৪) = ২, ceil(১১/৪) = ৩।'
      },
      explanation: {
        en: 'Each pile requires ceil(pile / speed) hours: ceil(3/4) = 1, ceil(6/4) = 2, ceil(7/4) = 2, and ceil(11/4) = 3. Summing these values gives 1 + 2 + 2 + 3 = 8 hours.',
        bn: 'প্রতিটি স্তূপে ceil(স্তূপ / গতি) ঘণ্টা লাগে: ceil(৩/৪) = ১, ceil(৬/৪) = ২, ceil(৭/৪) = ২, এবং ceil(১১/৪) = ৩। এগুলো যোগ করলে ১ + ২ + ২ + ৩ = ৮ ঘণ্টা পাওয়া যায়।'
      }
    },
    {
      id: 'pv-ex3',
      kind: 'mcq',
      topic: 'decision direction',
      question: {
        en: 'When solving the aggressive cows maximum minimum distance problem, if placing k cows with minimum gap mid is feasible, which update step should be taken?',
        bn: 'এগ্রেসিভ কাউস সর্বোচ্চ সর্বনিম্ন দূরত্ব সমস্যায় mid ব্যবধান বজায় রেখে k টি গরু বসানো সম্ভব হলে কোন আপডেট পদক্ষেপটি নিতে হবে?'
      },
      options: [
        {
          en: 'Record mid as the best answer so far and update lo = mid + 1 to test if a larger distance is also feasible',
          bn: 'mid কে এ পর্যন্ত পাওয়া সেরা উত্তর হিসেবে সংরক্ষণ করে আরও বড় দূরত্ব সম্ভব কি না দেখতে lo = mid + 1 করা'
        },
        {
          en: 'Update hi = mid - 1 to restrict the search to smaller distances',
          bn: 'অনুসন্ধানকে ছোট দূরত্বে সীমাবদ্ধ করতে hi = mid - 1 করা'
        },
        {
          en: 'Terminate immediately because mid is guaranteed to be the global maximum',
          bn: 'সাথে সাথে অনুসন্ধান থামিয়ে দেওয়া কারণ mid নিশ্চিতভাবেই বৈশ্বিক সর্বোচ্চ'
        },
        {
          en: 'Reset lo to 0 and re-sort the coordinate array',
          bn: 'lo এর মান ০ তে রিসেট করে স্থানাঙ্ক অ্যারেটিকে আবার সাজানো'
        }
      ],
      answer: 0,
      hint: {
        en: 'The problem seeks to MAXIMIZE the minimum distance. If distance mid works, can we do even better?',
        bn: 'সমস্যাটি সর্বনিম্ন দূরত্বকে সর্বাধিক করতে চায়। mid দূরত্ব সম্ভব হলে আমরা কি আরও বড় দূরত্বের চেষ্টা করব না?'
      },
      explanation: {
        en: 'Because the goal is maximization, achieving feasibility at distance mid means any answer greater than or equal to mid might also succeed. We record mid and probe higher values by setting lo = mid + 1.',
        bn: 'যেহেতু লক্ষ্য হলো মান সর্বাধিক করা, তাই mid দূরত্বে সফল হওয়ার অর্থ হলো mid এর চেয়ে বড় দূরত্বের মানও সফল হতে পারে। তাই আমরা mid সংরক্ষণ করে আরও বড় দূরত্বের জন্য lo = mid + 1 নির্ধারণ করি।'
      }
    }
  ],
  quiz: {
    id: 'parametric-search-quiz',
    title: {
      en: 'Parametric Search Fundamentals Quiz',
      bn: 'প্যারামেট্রিক সার্চের মৌলিক ধারণা কুইজ'
    },
    questions: [
      {
        id: 'psq1',
        kind: 'mcq',
        topic: 'monotonicity requirement',
        question: {
          en: 'Why is monotonicity an absolute prerequisite for applying binary search to a decision problem?',
          bn: 'কোনো সিদ্ধান্ত সমস্যায় বাইনারি সার্চ প্রয়োগ করার জন্য কেন একমুখিতা বা মনোটনিসিটি একটি অলঙ্ঘনীয় পূর্বশর্ত?'
        },
        options: [
          {
            en: 'Without monotonicity, eliminating half of the search space based on a single evaluation could accidentally discard the optimal solution',
            bn: 'একমুখিতা না থাকলে একটি একক মূল্যায়নের ভিত্তিতে অর্ধেক পরিধি বাদ দিলে দুর্ঘটনাবশত সর্বোত্তম সমাধানটি বাদ পড়ে যেতে পারে'
          },
          {
            en: 'Non-monotonic functions cause CPU register overflows in 64-bit systems',
            bn: 'নন-মনোটনিক ফাংশন ৬৪-বিট সিস্টেমে সিপিইউ রেজিস্টার ওভারফ্লো ঘটায়'
          },
          {
            en: 'Monotonicity is only needed for arrays containing floating-point numbers',
            bn: 'একমুখিতা শুধুমাত্র ফ্লোটিং-পয়েন্ট সংখ্যা ধারণকারী অ্যারের জন্য প্রয়োজন হয়'
          },
          {
            en: 'The ECMAScript standard forbids while loops on non-monotonic variables',
            bn: 'ইসিএমএস্ক্রিপ্ট মানদণ্ড নন-মনোটনিক ভেরিয়েবলের ওপর হোয়াইল লুপ চালানো নিষিদ্ধ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Binary search assumes that if mid is too large, everything larger than mid is also too large.',
          bn: 'বাইনারি সার্চ ধরে নেয় যে mid যদি অনেক বড় হয়, তবে mid এর চেয়ে বড় সবকিছুই অপ্রয়োজনীয়ভাবে বড় হবে।'
        },
        explanation: {
          en: 'Binary search relies on the guarantee that the truth value changes only once. If feasibility oscillates randomly, discarding either half of the search range could eliminate the only valid answer.',
          bn: 'বাইনারি সার্চ এই নিশ্চয়তার ওপর নির্ভর করে যে সত্যতা মান কেবল একবারই পরিবর্তিত হয়। সত্যতা যদি এলোমেলোভাবে ওঠানামা করে, তবে সার্চ রেঞ্জের যেকোনো এক পাশ বাদ দিলে কাঙ্ক্ষিত একমাত্র সঠিক উত্তরটি বাদ পড়ে যেতে পারে।'
        }
      },
      {
        id: 'psq2',
        kind: 'mcq',
        topic: 'parametric complexity formula',
        question: {
          en: 'What is the overall time complexity of parametric search when each feasibility check inspects an array of n elements and the candidate answer space spans range R?',
          bn: 'প্রতিটি সম্ভাব্যতা যাচাইয়ে n উপাদানের অ্যারে পরীক্ষা করা হলে এবং সম্ভাব্য উত্তরের পরিধি R হলে প্যারামেট্রিক সার্চের সামগ্রিক টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(n * log(R))',
            bn: 'O(n * log(R))'
          },
          {
            en: 'O(n * R)',
            bn: 'O(n * R)'
          },
          {
            en: 'O(n + log(R))',
            bn: 'O(n + log(R))'
          },
          {
            en: 'O(R * log(n))',
            bn: 'O(R * log(n))'
          }
        ],
        answer: 0,
        hint: {
          en: 'Binary search over range R takes log(R) iterations. Each iteration runs an O(n) check.',
          bn: 'R পরিধিতে বাইনারি সার্চ log(R) বার পুনরাবৃত্তি করে। প্রতিটি পুনরাবৃত্তিতে একটি O(n) চেক চলে।'
        },
        explanation: {
          en: 'The search performs ceil(log2(R)) bisection iterations. In each iteration, the greedy verification scans all n elements in O(n) time, resulting in O(n * log(R)) overall complexity.',
          bn: 'সার্চটি ceil(log2(R)) সংখ্যক বাইসেকশন পুনরাবৃত্তি চালায়। প্রতিটি পুনরাবৃত্তিতে লোভী যাচাইকরণটি O(n) সময়ে সব n উপাদান স্ক্যান করে, যার ফলে সামগ্রিক কমপ্লেক্সিটি হয় O(n * log(R))।'
        }
      },
      {
        id: 'psq3',
        kind: 'mcq',
        topic: 'greedy verification nature',
        question: {
          en: 'Why is greedy simulation typically sufficient to test feasibility in parametric search problems?',
          bn: 'প্যারামেট্রিক সার্চ সমস্যাগুলোতে সম্ভাব্যতা যাচাইয়ের জন্য কেন সাধারণত লোভী সিমুলেশনই যথেষ্ট হয়?'
        },
        options: [
          {
            en: 'Because when the candidate capacity or parameter is fixed, packing elements as densely as possible greedily leaves the maximum remaining capacity for subsequent partitions',
            bn: 'কারণ প্রার্থীর ধারণক্ষমতা বা প্যারামিটার স্থির থাকলে লোভী পদ্ধতিতে যত বেশি সম্ভব উপাদান একসাথে রাখলে পরবর্তী ধাপের জন্য সর্বোচ্চ অবশিষ্ট সুবিধা বজায় থাকে'
          },
          {
            en: 'Because greedy algorithms always run in constant O(1) time',
            bn: 'কারণ লোভী অ্যালগরিদম সর্বদা কনস্ট্যান্ট O(1) সময়ে সম্পন্ন হয়'
          },
          {
            en: 'Greedy algorithms automatically sort arrays during execution',
            bn: 'লোভী অ্যালগরিদম কার্যকর করার সময় স্বয়ংক্রিয়ভাবে অ্যারে সাজিয়ে নেয়'
          },
          {
            en: 'Because dynamic programming cannot be used with integers',
            bn: 'কারণ পূর্ণসংখ্যার ক্ষেত্রে ডায়নামিক প্রোগ্রামিং ব্যবহার করা যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fixing the parameter simplifies the problem: fill each container up to mid before starting the next.',
          bn: 'প্যারামিটার স্থির রাখলে সমস্যা সহজ হয়: পরেরটা শুরুর আগে প্রতি কন্টেইনার mid পর্যন্ত ভর্তি করুন।'
        },
        explanation: {
          en: 'Once the parameter (such as max capacity) is fixed, making the locally optimal choice (packing items until capacity is reached) leaves the maximum possible remaining capacity for subsequent days, proving optimal.',
          bn: 'যখন প্যারামিটার (যেমন সর্বোচ্চ ক্ষমতা) নির্দিষ্ট থাকে, তখন স্থানীয়ভাবে সর্বোত্তম সিদ্ধান্ত নেওয়া (ক্ষমতা শেষ না হওয়া পর্যন্ত উপাদান ভরা) পরবর্তী দিনের জন্য সর্বাধিক অবশিষ্ট জায়গা নিশ্চিত করে, যা সর্বোত্তম প্রমাণিত।'
        }
      },
      {
        id: 'psq4',
        kind: 'mcq',
        topic: 'upper bound selection',
        question: {
          en: 'In the painter partition problem where n boards of lengths board[i] must be painted by k painters, what is the safest initial upper bound hi?',
          bn: 'পেইন্টার পার্টিশন সমস্যায় যেখানে board[i] দৈর্ঘ্যের n টি বোর্ড k জন পেইন্টারকে দিয়ে রঙ করাতে হবে, সেখানে hi এর সবচেয়ে নিরাপদ প্রাথমিক আপার বাউন্ড কোনটি?'
        },
        options: [
          {
            en: 'The sum of all board lengths, representing the extreme scenario where 1 painter paints every single board',
            bn: 'সমস্ত বোর্ডের দৈর্ঘ্যের যোগফল, যা সেই চরম পরিস্থিতির প্রতিনিধিত্ব করে যেখানে ১ জন পেইন্টারই প্রতিটি বোর্ড রঙ করে'
          },
          {
            en: 'The length of the shortest board',
            bn: 'সবচেয়ে ছোট বোর্ডের দৈর্ঘ্য'
          },
          {
            en: 'The number of painters k multiplied by 2',
            bn: 'পেইন্টারের সংখ্যা k কে ২ দিয়ে গুণ করা মান'
          },
          {
            en: 'Math.max(...board) divided by k',
            bn: 'Math.max(...board) কে k দিয়ে ভাগ করা মান'
          }
        ],
        answer: 0,
        hint: {
          en: 'What is the absolute maximum workload that could ever be assigned to a painter?',
          bn: 'যেকোনো একজন পেইন্টারকে দেওয়া যেতে পারে এমন চূড়ান্ত সর্বোচ্চ কাজের চাপ কত হতে পারে?'
        },
        explanation: {
          en: 'If only 1 painter were available, that painter would have to paint all boards, taking the sum of all lengths. This sum represents an airtight upper bound that is guaranteed to be feasible for any k >= 1.',
          bn: 'যদি মাত্র ১ জন পেইন্টার থাকত, তবে তাকেই সব বোর্ড রঙ করতে হতো যার মোট সময় হতো সব দৈর্ঘ্যের যোগফল। এই যোগফল একটি নিশ্চিত আপার বাউন্ড যা যেকোনো k >= ১ এর জন্য নিশ্চিতভাবেই সম্ভব।'
        }
      },
      {
        id: 'psq5',
        kind: 'mcq',
        topic: 'search space reduction factor',
        question: {
          en: 'If a parametric search space has a range of 1000000000 candidate values, approximately how many decision predicate checks will binary search execute?',
          bn: 'কোনো প্যারামেট্রিক সার্চ পরিধিতে যদি ১০০০000000টি সম্ভাব্য মান থাকে, তবে বাইনারি সার্চ আনুমানিক কয়টি সিদ্ধান্ত প্রেডিকেট পরীক্ষা সম্পন্ন করবে?'
        },
        options: [
          {
            en: 'Approximately 30 evaluations (since 2^30 exceeds 1000000000)',
            bn: 'আনুমানিক ৩০টি মূল্যায়ন (যেহেতু ২^৩০ সংখ্যাটি ১০০০000000 এর চেয়ে বড়)'
          },
          {
            en: '1000000000 evaluations',
            bn: '১০০০000000টি মূল্যায়ন'
          },
          {
            en: '500000000 evaluations',
            bn: '৫00000000টি মূল্যায়ন'
          },
          {
            en: '1000 evaluations',
            bn: '১০০০টি মূল্যায়ন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Calculate ceil(log2(10^9)). Remember 2^10 = 1024, so 2^30 = 1024^3 > 10^9.',
          bn: 'ceil(log2(১০^৯)) হিসাব করুন। মনে রাখবেন ২^১০ = ১০২৪, তাই ২^৩০ = ১০২৪^৩ > ১০^৯।'
        },
        explanation: {
          en: 'Because 2^30 = 1073741824, which is greater than 10^9, halving the interval 30 times reduces a search space of 1 billion integers down to 1 single element.',
          bn: 'যেহেতু ২^৩০ = ১০৭৩৭৪১৮২৪, যা ১০^৯ এর চেয়ে বড়, তাই ব্যবধানকে ৩০ বার অর্ধেকে নামালে ১ বিলিয়ন পূর্ণসংখ্যার পরিধি মাত্র ১টি উপাদানে নেমে আসে।'
        }
      }
    ]
  }
};
