import type { Hub } from '../../lib/types';
import { TablesAndTheTableLesson } from './lessons/tables-and-the-table';
import { StatesAndTheStateLesson } from './lessons/states-and-the-state';
import { ChoicesAndTheChoiceLesson } from './lessons/choices-and-the-choice';
import { PathsAndThePathLesson } from './lessons/paths-and-the-path';
import { PacksAndThePackLesson } from './lessons/packs-and-the-pack';
import { OrdersAndTheOrderLesson } from './lessons/orders-and-the-order';
import { GridsAndTheGridLesson } from './lessons/grids-and-the-grid';
import { TheDynamicReleaseLesson } from './lessons/the-dynamic-release';

export const dynamicProgrammingHub: Hub = {
  slug: 'dynamic-programming',
  name: 'Dynamic Programming',
  icon: '🧩',
  tagline: {
    en: 'Optimal Substructure, Overlapping Subproblems, Memoization, Tabulation, 0/1 Knapsack, String Edit Distance, Grid Paths, and Bitmask State Compression.',
    bn: 'অপ্টিমাল সাবস্ট্রাকচার, ওভারল্যাপিং সাব-প্রবলেম, মেমোইজেশন, ট্যাবুলেশন, ০/১ ন্যাপস্যাক, স্ট্রিং এডিট ডিসট্যান্স, গ্রিড পাথ এবং বিটমাস্ক স্টেট কম্প্রেশন।'
  },
  about: {
    en: 'Dynamic Programming (DP) is the powerful algorithmic paradigm of solving complex combinatorial optimization problems by breaking them into overlapping subproblems, solving each subproblem once, and caching results in lookup tables. This curriculum takes you from the core mental model of Top-Down Memoization and Bottom-Up Tabulation, through 1D state design (Climbing Stairs, House Robber), 2D Knapsack and Grid DP, String Edit Distance and Longest Common Subsequence, to interval DP and production-grade bitmask state compression.',
    bn: 'ডায়নামিক প্রোগ্রামিং (DP) হলো একটি শক্তিশালী অ্যালগরিদম কৌশল যা জটিল অপ্টিমাইজেশন সমস্যাগুলোকে পরস্পর সমাপতিত (ওভারল্যাপিং) উপ-সমস্যায় বিভক্ত করে, প্রতিটি উপ-সমস্যা মাত্র একবার সমাধান করে ফলাফল টেবিলে ক্যাশ করে রাখে। এই কারিকুলাম আপনাকে টপ-ডাউন মেমোইজেশন এবং বটম-আপ ট্যাবুলেশনের মৌলিক ধারণা থেকে শুরু করে ১ডি স্টেট ডিজাইন, ২ডি ন্যাপস্যাক ও গ্রিড ডিপি, স্ট্রিং এডিট ডিসট্যান্স ও লংগেস্ট কমন সাবসিকোয়েন্স, এবং ইন্টারভ্যাল ডিপি ও প্রোডাকশন-গ্রেড বিটমাস্ক স্টেট কম্প্রেশন পর্যন্ত সম্পূর্ণ পথপ্রদর্শন করবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — The DP Paradigm: Memoization vs Tabulation',
        bn: 'ধাপ ১ — ডিপি প্যারাডাইম: মেমোইজেশন বনাম ট্যাবুলেশন'
      },
      items: [
        {
          en: 'Overlapping subproblems, DAG dependencies, top-down recursion with memoization, and bottom-up iterative tabulation',
          bn: 'ওভারল্যাপিং উপ-সমস্যা, DAG নির্ভরতা, মেমোইজেশন সহ টপ-ডাউন রিকার্শন এবং বটম-আপ ইটারেটিভ ট্যাবুলেশন'
        },
        {
          en: '1D State design, transition recurrence relations, base cases, and rolling variable space optimization',
          bn: '১ডি স্টেট ডিজাইন, ট্রানজিশন রিকারেন্স সমীকরণ, বেস কেস এবং স্পেস অপ্টিমাইজেশন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Classical 2D DP: Knapsack & Grid Coordinates',
        bn: 'ধাপ ২ — ক্লাসিক্যাল ২ডি ডিপি: ন্যাপস্যাক ও গ্রিড স্থানাঙ্ক'
      },
      items: [
        {
          en: '0/1 Knapsack problem, 2D decision matrices, capacity bounds, and reducing space complexity to a single 1D array',
          bn: '০/১ ন্যাপস্যাক সমস্যা, ২ডি সিদ্ধান্ত ম্যাট্রিক্স, ধারণক্ষমতা সীমা এবং মেমরি ১ডি অ্যারেতে কমিয়ে আনা'
        },
        {
          en: 'Grid DP, Unique Paths, Minimum Path Sum, obstacle handling, and directional state invariants',
          bn: 'গ্রিড ডিপি, ইউনিক পাথ, মিনিমাম পাথ সাম, বাধা পরিচালনা এবং দিকনির্দেশক স্টেট নিয়ম'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Unbounded Subsets & Sequence Alignment',
        bn: 'ধাপ ৩ — আনবাউন্ডেড সাবসেট ও সিকোয়েন্স অ্যালাইনমেন্ট'
      },
      items: [
        {
          en: 'Unbounded Knapsack, Coin Change count vs combinations, and loop order dependency',
          bn: 'আনবাউন্ডেড ন্যাপস্যাক, কয়েন চেঞ্জ সংখ্যা বনাম বিন্যাস এবং লুপের ক্রম নির্ভরতা'
        },
        {
          en: 'String DP: Longest Common Subsequence (LCS), Levenshtein Edit Distance, and sequence diff reconstruction',
          bn: 'স্ট্রিং ডিপি: লংগেস্ট কমন সাবসিকোয়েন্স (LCS), লেভেনস্টাইন এডিট ডিসট্যান্স এবং ডিফ রিকনস্ট্রাকশন'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4 — Advanced DP: Intervals, Trees & Bitmask Compression',
        bn: 'ধাপ ৪ — অ্যাডভান্সড ডিপি: ইন্টারভ্যাল, ট্রি এবং বিটমাস্ক কম্প্রেশন'
      },
      items: [
        {
          en: 'Longest Increasing Subsequence (LIS), patient sorting binary search acceleration, and Matrix Chain Multiplication',
          bn: 'লংগেস্ট ইনক্রিজিং সাবসিকোয়েন্স (LIS), বাইনারি সার্চ গতিবর্ধন এবং ম্যাট্রিক্স চেইন মাল্টিপ্লিকেশন'
        },
        {
          en: 'Bitmask state representation, Traveling Salesperson DP, Tree DP sub-tree aggregation, and memory profiling',
          bn: 'বিটমাস্ক স্টেট প্রকাশ, ট্রাভেলিং সেলসপারসন ডিপি, ট্রি ডিপি সাব-ট্রি সমন্বয় এবং মেমরি প্রোফাইলিং'
        }
      ]
    }
  ],
  lessons: [
    TablesAndTheTableLesson,
    StatesAndTheStateLesson,
    ChoicesAndTheChoiceLesson,
    PathsAndThePathLesson,
    PacksAndThePackLesson,
    OrdersAndTheOrderLesson,
    GridsAndTheGridLesson,
    TheDynamicReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Git Diff & Text Alignment Engine',
        bn: 'গিট ডিফ ও টেক্সট অ্যালাইনমেন্ট ইঞ্জিন'
      },
      brief: {
        en: 'Build a production-grade line-by-line file diff tool that implements Longest Common Subsequence (LCS) dynamic programming and backtracks to generate additions and deletions.',
        bn: 'লংগেস্ট কমন সাবসিকোয়েন্স (LCS) ডায়নামিক প্রোগ্রামিং ব্যবহার করে ফাইল তুলনা ও ব্যাকট্র্যাক করে সংযোজন ও বিয়োজনের গিট ডিফ ইঞ্জিন তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Multi-Resource Cloud Bin-Packing Scheduler',
        bn: 'মাল্টি-রিসোর্স ক্লাউড বিন-প্যাকিং শিডিউলার'
      },
      brief: {
        en: 'Architect a container workload placement optimizer that solves multi-dimensional knapsack dynamic programming across competing CPU, RAM, and GPU cluster capacity constraints.',
        bn: 'সিপিইউ, র‍্যাম এবং জিপিইউ ক্লাস্টার সীমাবদ্ধতার মধ্যে মাল্টি-ডাইমেনশনাল ন্যাপস্যাক ডিপি সমাধান করে সেরা সার্ভারে কনটেইনার বরাদ্দকারী তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Define state variables with surgical precision: explicitly write down what dp[i] or dp[i][j] represents in human language before writing any code.',
      bn: 'সার্জিক্যাল সূক্ষ্মতায় স্টেট ভেরিয়েবল সংজ্ঞায়িত করুন: কোড লেখার আগে মানুষের ভাষায় স্পষ্টভাবে লিখে নিন dp[i] বা dp[i][j] ঠিক কী অর্থ প্রকাশ করে।'
    },
    {
      en: 'Formulate the recurrence relation mathematically: verify how subproblem solutions combine to answer the larger problem and double-check all base cases.',
      bn: 'গাণিতিকভাবে রিকারেন্স রিলেশন তৈরি করুন: কীভাবে উপ-সমস্যার সমাধান একত্রিত হয়ে বৃহত্তর সমস্যার উত্তর দেয় তা যাচাই করুন এবং সব বেস কেস পরীক্ষা করুন।'
    },
    {
      en: 'Optimize memory footprint using rolling variables: if current state dp[i] only depends on dp[i - 1], reduce the space from O(N) to O(1) auxiliary variables.',
      bn: 'রোলিং ভেরিয়েবল ব্যবহার করে মেমরি অপ্টিমাইজ করুন: যদি বর্তমান স্টেট dp[i] কেবল পূর্ববর্তী dp[i - 1]-এর ওপর নির্ভর করে, তবে মেমরি O(N) থেকে কমিয়ে O(1)-এ আনুন।'
    },
    {
      en: 'Pay close attention to loop direction in 1D array knapsacks: iterate backward for 0/1 Knapsack (to prevent reuse) and forward for Unbounded Knapsack (to allow reuse).',
      bn: '১ডি অ্যারে ন্যাপস্যাকে লুপের দিকের দিকে গভীর নজর দিন: ০/১ ন্যাপস্যাকে পেছনের দিকে (পুনঃব্যবহার রোধে) এবং আনবাউন্ডেড ন্যাপস্যাকে সামনের দিকে ইটারেট করুন।'
    },
    {
      en: 'Choose Bottom-Up Tabulation over Top-Down Recursion in latency-critical production paths to eliminate call stack overhead and function call dispatch latency.',
      bn: 'লেটেন্সি-সংবেদনশীল প্রোডাকশন কোডে কল স্ট্যাক ওভারহেড ও ফাংশন ডিসপ্যাচ বিলম্ব এড়াতে টপ-ডাউন রিকার্শনের বদলে বটম-আপ ট্যাবুলেশন বেছে নিন।'
    },
    {
      en: 'Always test edge cases: test zero capacity, empty inputs, inputs where no valid combination exists, and inputs with non-constructible target values.',
      bn: 'সর্বদা এজ কেস টেস্ট করুন: শূন্য ধারণক্ষমতা, খালি ইনপুট, কোনো বৈধ সমন্বয় না থাকার পরিস্থিতি এবং লক্ষ্য মানে পৌঁছানো অসম্ভব এমন ইনপুট পুঙ্খানুপুঙ্খ পরীক্ষা করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What are the two core criteria that indicate a computational problem can be solved using Dynamic Programming?',
        bn: 'কোন দুটি প্রধান মাপকাঠি নির্দেশ করে যে একটি গণনাগত সমস্যা ডায়নামিক প্রোগ্রামিং দিয়ে সমাধান করা সম্ভব?'
      },
      a: {
        en: 'A problem must satisfy Optimal Substructure (an optimal solution to the problem contains optimal solutions to its subproblems) and Overlapping Subproblems (the recursive decomposition revisits the exact same subproblems repeatedly rather than generating new subproblems). Without overlapping subproblems, divide-and-conquer suffices; without optimal substructure, dynamic programming cannot guarantee global optimality.',
        bn: 'সমস্যাটিতে অবশ্যই অপ্টিমাল সাবস্ট্রাকচার (মূল সমস্যার সেরা সমাধানে উপ-সমস্যার সেরা সমাধান অন্তর্ভুক্ত থাকা) এবং ওভারল্যাপিং সাব-প্রবলেম (রিকার্সিভ বিভাজনে নতুন সমস্যার বদলে বারবার একই উপ-সমস্যা ফিরে আসা) থাকতে হবে। ওভারল্যাপিং উপ-সমস্যা না থাকলে ডিভাইড-অ্যান্ড-কনকার যথেষ্ট; আর অপ্টিমাল সাবস্ট্রাকচার না থাকলে ডিপি সঠিক উত্তর দিতে পারে না।'
      }
    },
    {
      q: {
        en: 'What is the architectural difference between Top-Down Memoization and Bottom-Up Tabulation?',
        bn: 'টপ-ডাউন মেমোইজেশন এবং বটম-আপ ট্যাবুলেশনের মধ্যে আর্কিটেকচারাল পার্থক্য কী?'
      },
      a: {
        en: 'Top-Down Memoization starts at the original target problem and recursively breaks it down on demand, caching calculated results in a hash map or table to prevent redundant work. Bottom-Up Tabulation systematically solves all base subproblems first in a deterministic topological order, populating an array iteratively using loops without any call stack overhead.',
        bn: 'টপ-ডাউন মেমোইজেশন মূল সমস্যা থেকে শুরু করে প্রয়োজন অনুসারে রিকার্শনের মাধ্যমে সমস্যা ভেঙে সমাধান বের করে এবং হ্যাশ ম্যাপ বা টেবিলে জমা রাখে। বটম-আপ ট্যাবুলেশন শুরুতেই সবচেয়ে ছোট বেস কেসগুলো সমাধান করে এবং কোনো রিকার্সিভ কল স্ট্যাক ওভারহেড ছাড়াই লুপ ব্যবহার করে একটি সুনির্দিষ্ট টপোলজিক্যাল ক্রমে টেবিল পূরণ করে।'
      }
    },
    {
      q: {
        en: 'How can the space complexity of the classical 2D 0/1 Knapsack problem be optimized from O(N * W) down to O(W)?',
        bn: 'ক্লাসিক্যাল ২ডি ০/১ ন্যাপস্যাক সমস্যার স্পেস কমপ্লেক্সিটি কীভাবে O(N * W) থেকে কমিয়ে O(W)-তে নামিয়ে আনা যায়?'
      },
      a: {
        en: 'Because calculating row i only requires values from row i - 1, we can discard all earlier rows. Furthermore, by iterating capacity w in backward descending order from W down to item weight, we can update a single 1D array in place because dp[w - weight] still holds the value from the previous item iteration, safely reducing memory to O(W).',
        bn: 'যেহেতু row i গণনায় কেবল পূর্ববর্তী row i - 1 এর মান প্রয়োজন হয়, তাই আগের সব সারি মুছে ফেলা যায়। অধিকন্তু, ধারণক্ষমতা w-কে পেছনের দিকে বড় থেকে ছোট ক্রমে (W থেকে আইটেমের ওজন পর্যন্ত) চালালে একটি মাত্র ১ডি অ্যারেতেই কাজ করা যায়, কারণ dp[w - weight] তখনো আগের আইটেমের মান ধরে রাখে।'
      }
    },
    {
      q: {
        en: 'Why does the loop order matter when distinguishing between Coin Change Combinations vs Permutations?',
        bn: 'কয়েন চেঞ্জ সমস্যায় কম্বিনেশন বনাম পারমিউটেশন আলাদা করার ক্ষেত্রে লুপের দিক ও ক্রম কেন গুরুত্বপূর্ণ?'
      },
      a: {
        en: 'When the coin loop is on the outside and amount is on the inside, each coin is processed sequentially, preventing duplicate orderings and counting unique Combinations (for example, [1, 2] is counted but [2, 1] is not repeated). When the amount loop is on the outside and coin loop is on the inside, every reachable path counts, calculating Permutations.',
        bn: 'কয়েনের লুপ বাইরে এবং টাকার পরিমাণের লুপ ভেতরে রাখলে প্রতিটি কয়েন ক্রমানুসারে প্রক্রিয়া হয়, ফলে ভিন্ন ক্রমের পুনরাবৃত্তি ঘটে না এবং অনন্য কম্বিনেশন তৈরি হয় (যেমন [১, ২] একবারই গোনা হয়)। কিন্তু টাকার পরিমাণের লুপ বাইরে এবং কয়েনের লুপ ভেতরে রাখলে প্রতিটি পথ আলাদাভাবে ধরা হয়, যা পারমিউটেশন গণনা করে।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Git Diff and Version Control: Version control systems use Longest Common Subsequence (LCS) and Myers diff algorithm to compute minimal edits between file revisions.',
      bn: 'গিট ডিফ ও ভার্সন কন্ট্রোল: ভার্সন কন্ট্রোল সিস্টেম দুটি ফাইল সংস্করণের মধ্যে সর্বনিম্ন পরিবর্তন গণনা করতে লংগেস্ট কমন সাবসিকোয়েন্স (LCS) এবং মায়ার্স ডিফ অ্যালগরিদম ব্যবহার করে।'
    },
    {
      en: 'Search Engine Autocomplete & Spell Checking: Search engines and text editors use Levenshtein Edit Distance dynamic programming to suggest typographical corrections in milliseconds.',
      bn: 'সার্চ ইঞ্জিন অটো-কমপ্লিট ও বানান সংশোধন: সার্চ ইঞ্জিন এবং টেক্সট এডিটর টাইপিং ত্রুটি সংশোধন করতে মিলিমিটার সময়ে লেভেনস্টাইন এডিট ডিসট্যান্স ডিপি ব্যবহার করে।'
    },
    {
      en: 'Viterbi Algorithm in Telecommunications & Speech AI: Cellular 4G/5G basebands and automatic speech recognition models use Viterbi dynamic programming to decode hidden Markov state sequences.',
      bn: 'টেলিকম ও ভয়েস এআই-তে ভিটারবি অ্যালগরিদম: সেলুলার ৪জি/৫জি বেসব্যান্ড এবং স্বয়ংক্রিয় ভয়েস রিকগনিশন সিস্টেম হিডেন মার্কভ স্টেট ডিকোড করতে ভিটারবি ডিপি ব্যবহার করে।'
    },
    {
      en: 'Relational Database Query Optimization: PostgreSQL and MySQL cost-based query optimizers use dynamic programming to determine the optimal join order across multi-table queries.',
      bn: 'রিলেশনাল ডেটাবেস কোয়েরি অপ্টিমাইজেশন: পোস্টগ্রেসকিউএল ও মাইএসকিউএল একাধিক টেবিল জয়েন করার সর্বোত্তম ক্রম নির্ধারণ করতে ডায়নামিক প্রোগ্রামিং ব্যবহার করে।'
    }
  ]
};
