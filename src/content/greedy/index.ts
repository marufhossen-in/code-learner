import type { Hub } from '../../lib/types';
import { CoinsAndTheCoinLesson } from './lessons/coins-and-the-coin';
import { PicksAndThePickLesson } from './lessons/picks-and-the-pick';
import { GrabsAndTheGrabLesson } from './lessons/grabs-and-the-grab';
import { LocalsAndTheLocalLesson } from './lessons/locals-and-the-local';
import { GainsAndTheGainLesson } from './lessons/gains-and-the-gain';
import { SwapsAndTheSwapLesson } from './lessons/swaps-and-the-swap';
import { IntervalsAndTheIntervalLesson } from './lessons/intervals-and-the-interval';
import { TheGreedyReleaseLesson } from './lessons/the-greedy-release';

export const greedyHub: Hub = {
  slug: 'greedy',
  name: 'Greedy Algorithms',
  icon: '⚡',
  tagline: {
    en: 'Greedy Choice Property, Optimal Substructure, Interval Scheduling, Huffman Coding, Minimum Spanning Trees, Dijkstra shortest paths, and formal exchange proofs.',
    bn: 'গ্রিডি চয়েস প্রপার্টি, অপ্টিমাল সাবস্ট্রাকচার, ইন্টারভ্যাল শিডিউলিং, হাফম্যান কোডিং, মিনিমাম স্প্যানিং ট্রি, ডাইকস্ট্রা শর্টেস্ট পাথ এবং এক্সচেঞ্জ প্রমাণ।'
  },
  about: {
    en: 'Greedy algorithms construct globally optimal solutions by making a sequence of locally optimal choices at each decision stage without ever backtracking. This curriculum guides you from the fundamental requirements of Greedy Choice Property and Optimal Substructure, through Fractional Knapsack and Interval Scheduling, Huffman lossless data compression trees, Disjoint Set Union (DSU) Kruskal and Prim Minimum Spanning Trees, Dijkstra shortest path finding, to rigorous inductive exchange arguments and identifying when greedy heuristics fail.',
    bn: 'গ্রিডি অ্যালগরিদম প্রতিটি সিদ্ধান্ত ধাপে কোনো ব্যাকট্র্যাকিং ছাড়াই লোকাল বা স্থানীয়ভাবে সেরা সিদ্ধান্ত নেওয়ার মাধ্যমে গ্লোবালি অপ্টিমাল সমাধান তৈরি করে। এই কারিকুলাম আপনাকে গ্রিডি চয়েস প্রপার্টি এবং অপ্টিমাল সাবস্ট্রাকচারের মৌলিক শর্তাবলী থেকে শুরু করে ফ্র্যাকশনাল ন্যাপস্যাক ও ইন্টারভ্যাল শিডিউলিং, হাফম্যান লসলেস ডেটা কম্প্রেশন ট্রি, ডিসজয়েন্ট সেট ইউনিয়ন (DSU) ক্রুশকাল ও প্রিম মিনিমাম স্প্যানিং ট্রি, ডাইকস্ট্রা শর্টেস্ট পাথ অনুসন্ধান এবং এক্সচেঞ্জ আর্গুমেন্টের মাধ্যমে গ্রিডি ব্যর্থতার সীমা শনাক্তকরণ পর্যন্ত বিস্তারিত শেখাবে।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — The Greedy Paradigm & Canonical Choice Properties',
        bn: 'ধাপ ১ — গ্রিডি প্যারাডাইম ও ক্যানোনিকাল চয়েস প্রপার্টি'
      },
      items: [
        {
          en: 'Locally optimal decisions, greedy choice property, optimal substructure, and canonical vs non-canonical coin denominations',
          bn: 'লোকাল অপ্টিমাল সিদ্ধান্ত, গ্রিডি চয়েস প্রপার্টি, অপ্টিমাল সাবস্ট্রাকচার এবং ক্যানোনিকাল বনাম নন-ক্যানোনিকাল মুদ্রা ব্যবস্থা'
        },
        {
          en: 'Fractional Knapsack, density sorting by value-to-weight ratio, and continuous optimization bounds',
          bn: 'ফ্র্যাকশনাল ন্যাপস্যাক, ভ্যালু-টু-ওয়েট অনুপাত অনুসারে সাজানো এবং ধারাবাহিক অপ্টিমাইজেশন সীমা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Interval Scheduling & Data Compression Trees',
        bn: 'ধাপ ২ — ইন্টারভ্যাল শিডিউলিং ও ডেটা কম্প্রেশন ট্রি'
      },
      items: [
        {
          en: 'Activity selection, sorting by earliest finish time, greedy-stays-ahead proof, and resource conflict minimization',
          bn: 'অ্যাক্টিভিটি সিলেকশন, দ্রুততম সমাপ্তির সময় অনুসারে সাজানো, গ্রিডি-স্টেজ-অ্যাহেড প্রমাণ এবং রিসোর্স দ্বন্দ্ব হ্রাস'
        },
        {
          en: 'Huffman coding, prefix codes, priority queue min-heap construction, and Shannon entropy compression limits',
          bn: 'হাফম্যান কোডিং, প্রিফিক্স কোড, প্রায়োরিটি কিউ মিন-হিপ গঠন এবং শ্যানন এন্ট্রপি কম্প্রেশন সীমা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Graph Optimization: Minimum Spanning Trees & Shortest Paths',
        bn: 'ধাপ ৩ — গ্রাফ অপ্টিমাইজেশন: মিনিমাম স্প্যানিং ট্রি ও শর্টেস্ট পাথ'
      },
      items: [
        {
          en: 'Kruskal algorithm, Disjoint Set Union (DSU) with path compression and union-by-rank, and cycle prevention',
          bn: 'ক্রুশকাল অ্যালগরিদম, পাথ কম্প্রেশন ও ইউনিয়ন-বাই-র‍্যাঙ্ক সহ ডিসজয়েন্ট সেট ইউনিয়ন (DSU) এবং সাইকেল প্রতিরোধ'
        },
        {
          en: 'Prim algorithm, greedy cut property, Dijkstra single-source shortest paths, and non-negative edge constraints',
          bn: 'প্রিম অ্যালগরিদম, গ্রিডি কাট প্রপার্টি, ডাইকস্ট্রা সিঙ্গেল-সোর্স শর্টেস্ট পাথ এবং অ-ঋণাত্মক এজ সীমাবদ্ধতা'
        }
      ]
    },
    {
      title: {
        en: 'Stage 4 — Limits of Greedy, Matroids & Dynamic Programming Contrast',
        bn: 'ধাপ ৪ — গ্রিডির সীমাবদ্ধতা, ম্যাট্রয়েড এবং ডায়নামিক প্রোগ্রামিং তুলনা'
      },
      items: [
        {
          en: '0/1 Knapsack failure, Traveling Salesperson greedy traps, approximation algorithms, and exchange argument proof techniques',
          bn: '০/১ ন্যাপস্যাক ব্যর্থতা, ট্রাভেলিং সেলসপারসন গ্রিডি ট্র্যাপ, অ্যাপ্রক্সিমেশন অ্যালগরিদম এবং এক্সচেঞ্জ প্রমাণ কৌশল'
        },
        {
          en: 'Matroid theory fundamentals, independence systems, and deciding between greedy greedy-choice vs DP multi-branch memoization',
          bn: 'ম্যাট্রয়েড থিওরি ভিত্তি, ইন্ডিপেন্ডেন্স সিস্টেম এবং গ্রিডি চয়েস বনাম ডিপি মেমোইজেশনের মধ্যে সঠিক নির্বাচন'
        }
      ]
    }
  ],
  lessons: [
    CoinsAndTheCoinLesson,
    PicksAndThePickLesson,
    GrabsAndTheGrabLesson,
    LocalsAndTheLocalLesson,
    GainsAndTheGainLesson,
    SwapsAndTheSwapLesson,
    IntervalsAndTheIntervalLesson,
    TheGreedyReleaseLesson
  ],
  projects: [
    {
      title: {
        en: 'Real-Time Network Packet Scheduler & Bandwidth Allocator',
        bn: 'রিয়েল-টাইম নেটওয়ার্ক প্যাকেট শিডিউলার ও ব্যান্ডউইথ বরাদ্দকারী'
      },
      brief: {
        en: 'Architect a high-throughput event loop task and network packet scheduler that prioritizes competing streaming jobs by deadline and finish time using min-heap greedy queues.',
        bn: 'মিন-হিপ গ্রিডি কিউ ব্যবহার করে ডেডলাইন এবং সমাপ্তির সময় অনুসারে স্ট্রিমিং কাজ অগ্রাধিকার দেওয়ার জন্য একটি হাই-থ্রুপুট প্যাকেট শিডিউলার তৈরি করুন।'
      }
    },
    {
      title: {
        en: 'Streaming Huffman Binary Compressor & Decompressor',
        bn: 'স্ট্রিমিং হাফম্যান বাইনারি কম্প্রেসর ও ডিকম্প্রেসর'
      },
      brief: {
        en: 'Build an end-to-end binary file compressor that calculates byte frequencies, generates an optimal prefix Huffman tree, serializes the codebook header, and streams encoded bit-packed payloads.',
        bn: 'বাইট ফ্রিকোয়েন্সি গণনা করে অপ্টিমাল হাফম্যান ট্রি তৈরি, কোডবুক হেডার সিরিয়ালাইজ এবং এনকোডেড বিট-প্যাকড পেলোড স্ট্রিম করার জন্য একটি পূর্ণাঙ্গ বাইনারি কম্প্রেসর তৈরি করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Always verify the Greedy Choice Property before implementation: prove that an optimal solution containing the immediate greedy choice exists using an exchange argument.',
      bn: 'বাস্তবায়নের আগে সর্বদা গ্রিডি চয়েস প্রপার্টি যাচাই করুন: এক্সচেঞ্জ আর্গুমেন্ট ব্যবহার করে প্রমাণ করুন যে তাত্ক্ষণিক গ্রিডি সিদ্ধান্ত অন্তর্ভুক্ত করে এমন একটি অপ্টিমাল সমাধান বিদ্যমান।'
    },
    {
      en: 'Verify Optimal Substructure: ensure that combining the local greedy choice with an optimal solution to the remaining subproblem yields a globally optimal solution.',
      bn: 'অপ্টিমাল সাবস্ট্রাকচার নিশ্চিত করুন: লোকাল গ্রিডি সিদ্ধান্তের সাথে অবশিষ্ট সাব-প্রবলেমের অপ্টিমাল সমাধান একত্রিত করলে সামগ্রিক অপ্টিমাল ফলাফল পাওয়া যায় কিনা তা পরীক্ষা করুন।'
    },
    {
      en: 'Do not use greedy algorithms on 0/1 Knapsack or longest simple path problems where subproblems share state dependencies and future choices invalidate earlier decisions.',
      bn: '০/১ ন্যাপস্যাক বা দীর্ঘতম সাধারণ পথের সমস্যায় গ্রিডি ব্যবহার করবেন না যেখানে সাব-প্রবলেমগুলো নির্ভরশীল এবং ভবিষ্যৎ সিদ্ধান্ত পূর্ববর্তী পছন্দকে বাতিল করে।'
    },
    {
      en: 'Sort data once upfront: most greedy strategies achieve O(N log N) total time complexity by sorting inputs by finish time, deadline, or value ratio before making linear scans.',
      bn: 'শুরুতেই ডেটা সাজিয়ে নিন: বেশিরভাগ গ্রিডি কৌশল সমাপ্তির সময়, ডেডলাইন বা ভ্যালু অনুপাত অনুসারে সাজিয়ে লিনিয়ার স্ক্যান চালিয়ে O(N log N) টাইম কমপ্লেক্সিটি অর্জন করে।'
    },
    {
      en: 'Use specialized heap and Disjoint Set Union data structures: paired with min-heaps, Kruskal, Prim, and Dijkstra maintain sub-linear step lookups across dense inputs.',
      bn: 'বিশেষায়িত হিপ ও ডিসজয়েন্ট সেট ইউনিয়ন ডেটা স্ট্রাকচার ব্যবহার করুন: মিন-হিপের সাহায্যে ক্রুশকাল, প্রিম ও ডাইকস্ট্রা সাব-লিনিয়ার ধাপে দ্রুত কাজ সম্পন্ন করে।'
    },
    {
      en: 'Test boundary edge cases against known counterexamples: test ties in sorting keys, empty inputs, single-item collections, and inputs where greedy choices create dead ends.',
      bn: 'পরিচিত পাল্টা উদাহরণ দিয়ে বাউন্ডারি এজ কেস পরীক্ষা করুন: সর্টিং কী-এর টাই, ফাঁকা ইনপুট, একক উপাদান এবং যেসব ক্ষেত্রে গ্রিডি সিদ্ধান্ত আটকে যায় তা পুঙ্খানুপুঙ্খ টেস্ট করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What are the two core theoretical conditions a problem must satisfy for a greedy algorithm to yield a globally optimal solution?',
        bn: 'একটি গ্রিডি অ্যালগরিদম যাতে গ্লোবালি অপ্টিমাল সমাধান দেয় তার জন্য একটি সমস্যার কোন দুটি মূল তাত্ত্বিক শর্ত পূরণ করা আবশ্যক?'
      },
      a: {
        en: 'The problem must exhibit the Greedy Choice Property (a globally optimal solution can be arrived at by making locally optimal, irrevocable choices without looking ahead) and Optimal Substructure (an optimal solution to the problem contains within it optimal solutions to its subproblems). Without both properties, greedy decisions can lock the algorithm into suboptimal local extrema.',
        bn: 'সমস্যাটিতে অবশ্যই গ্রিডি চয়েস প্রপার্টি (ভবিষ্যতের দিকে না তাকিয়ে তাৎক্ষণিক স্থানীয় সেরা সিদ্ধান্ত নিয়ে সামগ্রিক সেরা সমাধানে পৌঁছানোর ক্ষমতা) এবং অপ্টিমাল সাবস্ট্রাকচার (মূল সমস্যার সেরা সমাধানের ভেতরে এর সাব-প্রবলেমগুলোরও সেরা সমাধান বিদ্যমান থাকা) থাকতে হবে। এই দুটি বৈশিষ্ট্য ছাড়া গ্রিডি সিদ্ধান্ত সাব-অপ্টিমাল লোকাল এক্সট্রিমাতে আটকে যেতে পারে।'
      }
    },
    {
      q: {
        en: 'Why does the standard greedy approach work for the Fractional Knapsack problem but fail for the 0/1 Knapsack problem?',
        bn: 'সাধারণ গ্রিডি পদ্ধতি ফ্র্যাকশনাল ন্যাপস্যাকে সফল হলেও ০/১ ন্যাপস্যাকে কেন ব্যর্থ হয়?'
      },
      a: {
        en: 'In Fractional Knapsack, items can be subdivided continuously, allowing us to greedily greedily consume items with the highest value-to-weight ratio until capacity is reached, leaving zero unused wasted capacity. In 0/1 Knapsack, items are discrete (take it or leave it). Choosing a high-ratio item may leave unusable empty capacity that lower-ratio items could have filled more profitably, requiring 0/1 Knapsack to use Dynamic Programming.',
        bn: 'ফ্র্যাকশনাল ন্যাপস্যাকে উপাদানগুলোকে নিরবচ্ছিন্নভাবে ভাগ করা যায়, ফলে সর্বোচ্চ ভ্যালু-টু-ওয়েট অনুপাতের আইটেম নিয়ে কোনো মেমরি বা ধারণক্ষমতা অপচয় না করেই ব্যাগ পূর্ণ করা যায়। কিন্তু ০/১ ন্যাপস্যাকে প্রতিটি আইটেম সম্পূর্ণ নিতে হয় বা বাদ দিতে হয়। ফলে সর্বোচ্চ অনুপাতের একটি ভারী আইটেম নেওয়ার কারণে ব্যাগে ফাঁকা জায়গা থেকে যেতে পারে যা অন্য কম অনুপাতের আইটেম সমন্বয়ে বেশি লাভ দিতে পারত।'
      }
    },
    {
      q: {
        en: 'How does an inductive exchange argument prove that a greedy algorithm is correct?',
        bn: 'একটি ইনডাক্টিভ এক্সচেঞ্জ আর্গুমেন্ট কীভাবে প্রমাণ করে যে একটি গ্রিডি অ্যালগরিদম সঠিক?'
      },
      a: {
        en: 'An exchange argument assumes an arbitrary optimal solution OPT exists that differs from the greedy solution G. It identifies the first point of divergence and shows that swapping OPT decision with the greedy choice G decision yields a new valid solution OPT-prime whose objective value is at least as good as OPT. By induction across all steps, OPT is transformed into G without loss of optimality, proving G is optimal.',
        bn: 'এক্সচেঞ্জ আর্গুমেন্টে ধরে নেওয়া হয় যে গ্রিডি সমাধান G থেকে ভিন্ন একটি অপ্টিমাল সমাধান OPT বিদ্যমান। এরপর তাদের প্রথম পার্থক্যের জায়গাটি চিহ্নিত করে OPT-এর সিদ্ধান্তটিকে গ্রিডির সিদ্ধান্ত দিয়ে প্রতিস্থাপন করে দেখানো হয় যে নতুন সমাধান OPT-prime আগের সমান বা আরও ভালো মান দেয়। গাণিতিক আরোহ বিধির সাহায্যে প্রমাণ করা হয় যে OPT-কে কোনো গুণমান না হারিয়ে G-তে রূপান্তর করা সম্ভব।'
      }
    },
    {
      q: {
        en: 'Why does Dijkstra algorithm fail when a graph contains negative-weight edges, and which algorithm is required instead?',
        bn: 'গ্রাফে ঋণাত্মক ওজনের এজ থাকলে ডাইকস্ট্রা অ্যালগরিদম কেন ব্যর্থ হয় এবং এর পরিবর্তে কোন অ্যালগরিদম প্রয়োজন?'
      },
      a: {
        en: 'Dijkstra relies on the greedy invariant that once a vertex distance is finalized and popped from the priority queue, no shorter path to that vertex can ever be found because traversing further non-negative edges can only increase total path cost. Negative edges violate this monotonic non-decreasing invariant by reducing path cost after finalization. Graphs with negative edge weights require the Bellman-Ford algorithm.',
        bn: 'ডাইকস্ট্রা এই গ্রিডি অনুমানের ওপর নির্ভর করে যে প্রায়োরিটি কিউ থেকে কোনো শীর্ষবিন্দুর দূরত্ব একবার নির্ধারিত হলে আর কখনো তার চেয়ে ছোট পথ পাওয়া সম্ভব নয়, কারণ অ-ঋণাত্মক এজ যোগ করলে মোট দূরত্ব কেবল বাড়ে। ঋণাত্মক এজ এই নিয়ম ভেঙে দূরত্ব কমিয়ে দিতে পারে। তাই ঋণাত্মক ওজনের এজের জন্য বেলম্যান-ফোর্ড অ্যালগরিদম প্রয়োজন।'
      }
    }
  ],
  realWorld: [
    {
      en: 'HTTP/2 HPACK Header Compression: HTTP/2 uses canonical Huffman coding tables to achieve lossless compression of repetitive HTTP request and response headers across multiplexed TCP streams.',
      bn: 'HTTP/2 HPACK হেডার কম্প্রেশন: মাল্টিপ্লেক্সড TCP স্ট্রিমে বারবার পাঠানো HTTP রিকোয়েস্ট ও রেসপন্স হেডার লসলেসভাবে সংকুচিত করতে ক্যানোনিকাল হাফম্যান কোডিং টেবিল ব্যবহার করে।'
    },
    {
      en: 'Internet OSPF Routing Protocol: Open Shortest Path First (OSPF) runs Dijkstra greedy algorithm across autonomous router topologies to compute optimal packet forwarding paths.',
      bn: 'ইন্টারনেট OSPF রাউটিং প্রোটোকল: ওপেন শর্টেস্ট পাথ ফার্স্ট (OSPF) স্বায়ত্তশাসিত রাউটার টপোলজিতে ডাইকস্ট্রা গ্রিডি অ্যালগরিদম চালিয়ে সর্বোত্তম প্যাকেট ফরোয়ার্ডিং পথ গণনা করে।'
    },
    {
      en: 'Cloud Cluster Task Scheduling: Kubernetes and cloud hypervisors use interval scheduling and greedy bin-packing heuristics to pack container workloads onto minimal physical server nodes.',
      bn: 'ক্লাউড ক্লাস্টার টাস্ক শিডিউলিং: কুবারনেটিস এবং ক্লাউড হাইপারভাইজার সর্বনিম্ন ফিজিক্যাল সার্ভার নোডে কনটেইনার ওয়ার্কলোড সাজাতে ইন্টারভ্যাল শিডিউলিং ও গ্রিডি বিন-প্যাকিং ব্যবহার করে।'
    },
    {
      en: 'Telecommunication Fiber Network Design: Telecommunication carriers deploy Kruskal and Prim Minimum Spanning Tree algorithms to connect regional cell towers with minimal fiber optic cable.',
      bn: 'টেলিকমিউনিকেশন ফাইবার নেটওয়ার্ক ডিজাইন: টেলিকম অপারেটররা সর্বনিম্ন ফাইবার অপটিক ক্যাবল খরচে আঞ্চলিক সেল টাওয়ারগুলোকে যুক্ত করতে ক্রুশকাল ও প্রিম মিনিমাম স্প্যানিং ট্রি অ্যালগরিদম ব্যবহার করে।'
    }
  ]
};
