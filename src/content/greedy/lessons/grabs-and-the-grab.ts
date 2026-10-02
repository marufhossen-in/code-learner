import type { Lesson } from '../../../lib/types';

export const GrabsAndTheGrabLesson: Lesson = {
  slug: 'grabs-and-the-grab',
  tech: 'greedy',
  title: {
    en: 'Interval Scheduling & Activity Selection',
    bn: 'ইন্টারভ্যাল শিডিউলিং ও অ্যাক্টিভিটি সিলেকশন'
  },
  summary: {
    en: 'Master interval scheduling by sorting by earliest finish time, explore the classic Greedy-Stays-Ahead induction proof, and eliminate scheduling conflicts.',
    bn: 'দ্রুততম সমাপ্তির সময় (Earliest Finish Time) অনুসারে সাজিয়ে ইন্টারভ্যাল শিডিউলিং শিখুন, গ্রিডি-স্টেজ-অ্যাহেড আরোহ প্রমাণ জানুন এবং শিডিউলের দ্বন্দ্ব দূর করুন।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'activity-selection-problem',
      text: {
        en: 'The Interval Scheduling Problem',
        bn: 'ইন্টারভ্যাল শিডিউলিং সমস্যা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In the Interval Scheduling (or Activity Selection) problem, you are provided a single shared resource (such as a conference room, CPU core, or satellite transmitter) and a set of competing activities. Each activity has a fixed start time and finish time. Two activities are compatible if they do not overlap. The objective is to select the maximum possible count of mutually compatible activities.',
        bn: 'ইন্টারভ্যাল শিডিউলিং বা অ্যাক্টিভিটি সিলেকশন সমস্যায় আপনাকে একটি মাত্র শেয়ার্ড রিসোর্স (যেমন মিটিং রুম, সিপিইউ কোর বা স্যাটেলাইট ট্রান্সমিটার) এবং প্রতিযোগী কাজের তালিকা দেওয়া হয়। প্রতিটি কাজের নির্দিষ্ট শুরুর সময় এবং সমাপ্তির সময় থাকে। দুটি কাজ সামঞ্জস্যপূর্ণ হয় যদি তাদের সময় একে অপরকে স্পর্শ বা ওভারল্যাপ না করে। মূল লক্ষ্য হলো কোনো দ্বন্দ্ব ছাড়া সর্বাধিক সংখ্যক কাজ নির্বাচন করা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'earliest-finish-time',
          def: {
            en: 'The greedy selection rule where the activity that finishes earliest is chosen first, leaving the maximum remaining time window for future tasks.',
            bn: 'গ্রিডি সিলেকশন নিয়ম যেখানে যে কাজটি সবার আগে শেষ হয় সেটিকে বেছে নেওয়া হয়, যা ভবিষ্যতের কাজের জন্য সর্বোচ্চ সময় খালি রাখে।'
          }
        },
        {
          term: 'greedy-stays-ahead',
          def: {
            en: 'An inductive proof technique demonstrating that at every step r, the greedy algorithm is at least as far advanced as any hypothetical optimal schedule.',
            bn: 'একটি গাণিতিক আরোহ প্রমাণ পদ্ধতি যা দেখায় যে প্রতিটি ধাপ r-এ গ্রিডি সমাধান যেকোনো কাল্পনিক অপ্টিমাল শিডিউলের সমান বা তার চেয়ে এগিয়ে থাকে।'
          }
        },
        {
          term: 'interval-compatibility',
          def: {
            en: 'The condition where two intervals do not overlap, formally defined as start time of task B being greater than or equal to finish time of task A.',
            bn: 'এমন একটি শর্ত যেখানে দুটি কাজের মধ্যে কোনো সংঘর্ষ হয় না, যার অর্থ কাজ B-এর শুরুর সময় কাজ A-এর সমাপ্তির সময়ের সমান বা বড় হয়।'
          }
        },
        {
          term: 'resource-conflict',
          def: {
            en: 'An overlap where two tasks require the same physical resource during a concurrent time window, forcing one task to be rejected.',
            bn: 'এমন একটি সংঘাত যেখানে দুটি কাজ একই সময়ে একটি শেয়ার্ড রিসোর্স দাবি করে, ফলে যেকোনো একটি কাজ বাদ দিতে হয়।'
          }
        }
      ]
    },
    {
      type: 'diagram',
      id: 'interval-scheduling-timeline-svg',
      title: {
        en: 'Interval Scheduling: 8 Activities with 3 Compatible Selections',
        bn: 'ইন্টারভ্যাল শিডিউলিং: ৮টি কাজের মধ্যে ৩টি সামঞ্জস্যপূর্ণ নির্বাচন'
      },
      caption: {
        en: 'Sorted by finish time, the algorithm greedily selects Task A [1, 4], Task D [5, 7], and Task H [8, 11] while rejecting 5 overlapping conflicts.',
        bn: 'সমাপ্তির সময় অনুসারে সাজিয়ে গ্রিডি অ্যালগরিদম কাজ A [১, ৪], কাজ D [৫, ৭] এবং কাজ H [৮, ১১] নির্বাচন করে এবং ৫টি ওভারল্যাপিং কাজ বাদ দেয়।'
      },
      svg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 860 380" width="100%" height="auto">
  <defs>
    <linearGradient id="gBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0f172a" />
      <stop offset="100%" stop-color="#1e293b" />
    </linearGradient>
    <linearGradient id="selGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#10b981" />
      <stop offset="100%" stop-color="#059669" />
    </linearGradient>
    <linearGradient id="rejGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#f43f5e" />
      <stop offset="100%" stop-color="#be123c" />
    </linearGradient>
  </defs>

  <rect width="860" height="380" rx="14" fill="url(#gBg)" stroke="#334155" stroke-width="2"/>

  <!-- Time Axis Bar -->
  <line x1="80" y1="45" x2="800" y2="45" stroke="#475569" stroke-width="2"/>
  <!-- Ticks: 0 to 12. Each tick is 60px wide (80 + t*60) -->
  <text x="80" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=0</text>
  <text x="140" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=1</text>
  <text x="200" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=2</text>
  <text x="260" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=3</text>
  <text x="320" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" font-weight="bold" text-anchor="middle">t=4</text>
  <text x="380" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=5</text>
  <text x="440" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=6</text>
  <text x="500" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" font-weight="bold" text-anchor="middle">t=7</text>
  <text x="560" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=8</text>
  <text x="620" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=9</text>
  <text x="680" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=10</text>
  <text x="740" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#34d399" font-weight="bold" text-anchor="middle">t=11</text>
  <text x="800" y="35" font-family="system-ui, sans-serif" font-size="11" fill="#94a3b8" text-anchor="middle">t=12</text>

  <!-- 1. Task A: [1, 4] -> SELECTED -->
  <rect x="140" y="65" width="180" height="26" rx="5" fill="url(#selGrad)"/>
  <text x="230" y="82" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Task A [1, 4] SELECTED</text>

  <!-- 2. Task B: [3, 5] -> REJECTED (overlaps finish 4) -->
  <rect x="260" y="100" width="120" height="24" rx="5" fill="url(#rejGrad)" opacity="0.7"/>
  <text x="320" y="116" font-family="system-ui, sans-serif" font-size="11" fill="#fecdd3" text-anchor="middle">Task B [3, 5] Overlap</text>

  <!-- 3. Task C: [0, 6] -> REJECTED (overlaps finish 4) -->
  <rect x="80" y="132" width="360" height="24" rx="5" fill="url(#rejGrad)" opacity="0.6"/>
  <text x="260" y="148" font-family="system-ui, sans-serif" font-size="11" fill="#fecdd3" text-anchor="middle">Task C [0, 6] Overlap</text>

  <!-- 4. Task D: [5, 7] -> SELECTED (start 5 >= 4) -->
  <rect x="380" y="165" width="120" height="26" rx="5" fill="url(#selGrad)"/>
  <text x="440" y="182" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Task D [5, 7] SELECTED</text>

  <!-- 5. Task E: [3, 9] -> REJECTED (overlaps finish 7) -->
  <rect x="260" y="200" width="360" height="24" rx="5" fill="url(#rejGrad)" opacity="0.5"/>
  <text x="440" y="216" font-family="system-ui, sans-serif" font-size="11" fill="#fecdd3" text-anchor="middle">Task E [3, 9] Overlap</text>

  <!-- 6. Task F: [5, 9] -> REJECTED (overlaps finish 7) -->
  <rect x="380" y="232" width="240" height="24" rx="5" fill="url(#rejGrad)" opacity="0.6"/>
  <text x="500" y="248" font-family="system-ui, sans-serif" font-size="11" fill="#fecdd3" text-anchor="middle">Task F [5, 9] Overlap</text>

  <!-- 7. Task G: [6, 10] -> REJECTED (overlaps finish 7) -->
  <rect x="440" y="264" width="240" height="24" rx="5" fill="url(#rejGrad)" opacity="0.6"/>
  <text x="560" y="280" font-family="system-ui, sans-serif" font-size="11" fill="#fecdd3" text-anchor="middle">Task G [6, 10] Overlap</text>

  <!-- 8. Task H: [8, 11] -> SELECTED (start 8 >= 7) -->
  <rect x="560" y="297" width="180" height="26" rx="5" fill="url(#selGrad)"/>
  <text x="650" y="314" font-family="system-ui, sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">Task H [8, 11] SELECTED</text>

  <!-- Summary Footer -->
  <text x="80" y="355" font-family="system-ui, sans-serif" font-size="13" font-weight="bold" fill="#34d399">Total Compatible Selected: 3 tasks (A, D, H)</text>
  <text x="470" y="355" font-family="system-ui, sans-serif" font-size="12" fill="#94a3b8">5 conflicting tasks rejected. Global optimal achieved in O(N log N).</text>
</svg>`
    },
    {
      type: 'heading',
      id: 'four-candidate-heuristics',
      text: {
        en: 'The 4 Candidate Greedy Heuristics',
        bn: '৪টি সম্ভাব্য গ্রিডি কৌশল'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Heuristic Strategy', bn: 'কৌশলের ধরন' },
        { en: 'Selection Criterion', bn: 'বাছাইয়ের মাপকাঠি' },
        { en: 'Optimality Result', bn: 'ফলাফলের নিশ্চয়তা' },
        { en: 'Counterexample Defect', bn: 'পাল্টা উদাহরণের ত্রুটি' }
      ],
      rows: [
        [
          { en: 'Earliest Start Time', bn: 'দ্রুততম শুরুর সময়' },
          { en: 'Pick smallest start time first', bn: 'ছোট শুরুর সময় আগে নেওয়া' },
          { en: 'FAILS (Suboptimal)', bn: 'ব্যর্থ (সাব-অপ্টিমাল)' },
          { en: 'An early job of duration 100 blocks 10 short valid tasks', bn: 'শুরুর ১০০ দৈর্ঘ্যের একটি বিশাল কাজ পরবর্তী ১০টি ছোট কাজকে আটকে দেয়' }
        ],
        [
          { en: 'Shortest Duration', bn: 'ক্ষুদ্রতম স্থায়িত্ব' },
          { en: 'Pick shortest duration first', bn: 'ক্ষুদ্রতম স্থায়িত্বের কাজ আগে নেওয়া' },
          { en: 'FAILS (Suboptimal)', bn: 'ব্যর্থ (সাব-অপ্টিমাল)' },
          { en: 'A short task in the center conflicts with 2 non-overlapping tasks', bn: 'মাঝের একটি কাজ দুই পাশের ২টি সামঞ্জস্যপূর্ণ কাজের সাথে সংঘাত তৈরি করে' }
        ],
        [
          { en: 'Fewest Conflicts', bn: 'সর্বনিম্ন সংঘাত' },
          { en: 'Pick job with lowest overlap count', bn: 'কম ওভারল্যাপের কাজ আগে নেওয়া' },
          { en: 'FAILS (Suboptimal)', bn: 'ব্যর্থ (সাব-অপ্টিমাল)' },
          { en: 'Tricky structured trees force suboptimal choices', bn: 'বিশেষভাবে সাজানো গ্রাফে এটি অপ্টিমাল শিডিউল মিস করে' }
        ],
        [
          { en: 'Earliest Finish Time', bn: 'দ্রুততম সমাপ্তির সময়' },
          { en: 'Pick smallest f_i first', bn: 'ছোট f_i আগে নেওয়া' },
          { en: 'OPTIMAL (Guaranteed)', bn: 'সর্বোত্তম (নিশ্চিত)' },
          { en: 'Leaves the maximum possible remaining window for future jobs', bn: 'ভবিষ্যতের কাজের জন্য সর্বোচ্চ ফাঁকা সময় রেখে যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'greedy-stays-ahead-proof',
      text: {
        en: 'The Greedy-Stays-Ahead Proof',
        bn: 'গ্রিডি-স্টেজ-অ্যাহেড প্রমাণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To mathematically prove that Earliest Finish Time yields the maximum number of activities, we use induction. Let the greedy solution be G = [g_1, g_2, ... g_k] and let an arbitrary optimal solution be OPT = [o_1, o_2, ... o_m]. We prove by mathematical induction that for every step r <= k, the finish time of g_r is less than or equal to the finish time of o_r (finish(g_r) <= finish(o_r)). Because greedy always finishes its r-th job at least as early as OPT, it always leaves at least as much remaining time. Therefore, greedy can never terminate before OPT, proving k >= m, which means greedy is optimal.',
        bn: 'দ্রুততম সমাপ্তির সময় অ্যালগরিদমটি সর্বাধিক সংখ্যক কাজ দেয় তা প্রমাণ করতে আমরা গাণিতিক আরোহ বিধি ব্যবহার করি। ধরা যাক গ্রিডি সমাধান হলো G = [g_1, g_2, ... g_k] এবং যেকোনো অপ্টিমাল সমাধান হলো OPT = [o_1, o_2, ... o_m]। আমরা প্রমাণ করি যে প্রতিটি ধাপ r <= k এর জন্য গ্রিডির সমাপ্তির সময় OPT এর চেয়ে আগে বা সমান (finish(g_r) <= finish(o_r))। যেহেতু গ্রিডি সর্বদা তার কাজগুলো আগে শেষ করে, তাই এটি পরবর্তী কাজের জন্য অন্তত OPT এর সমান বা বেশি সময় খালি রাখে। ফলে গ্রিডি কখনোই OPT এর আগে থামতে পারে না, যা প্রমাণ করে k >= m অর্থাৎ গ্রিডি সমাধানটি সর্বোত্তম।'
      }
    },
    {
      type: 'heading',
      id: 'runnable-activity-selection-ts',
      text: {
        en: 'Runnable TypeScript: Activity Selection Algorithm',
        bn: 'রানঅ্যাবল টাইপস্ক্রিপ্ট: অ্যাক্টিভিটি সিলেকশন অ্যালগরিদম'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'Selecting 3 mutually compatible activities out of 8 candidates in O(N log N) time.',
        bn: 'O(N log N) সময়ে ৮টি কাজের মধ্য থেকে ৩টি সামঞ্জস্যপূর্ণ কাজ নির্বাচন।'
      },
      code: `// Interface representing an interval activity
interface Activity {
  id: string;
  start: number;
  finish: number;
}

function selectMaxActivities(activities: Activity[]): Activity[] {
  if (activities.length === 0) return [];

  // 1. Sort activities in ascending order of finish time
  const sorted = [...activities].sort((a, b) => a.finish - b.finish);

  const selected: Activity[] = [];
  // Greedily pick the first activity
  selected.push(sorted[0]);
  let lastFinishTime = sorted[0].finish;

  // 2. Iterate through remaining sorted activities
  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i];
    // If start time is greater than or equal to last finish, no overlap!
    if (current.start >= lastFinishTime) {
      selected.push(current);
      lastFinishTime = current.finish;
    }
  }

  return selected;
}

// 8 Candidate Activities from the visual diagram
const candidateTasks: Activity[] = [
  { id: 'Task A', start: 1, finish: 4 },
  { id: 'Task B', start: 3, finish: 5 },
  { id: 'Task C', start: 0, finish: 6 },
  { id: 'Task D', start: 5, finish: 7 },
  { id: 'Task E', start: 3, finish: 9 },
  { id: 'Task F', start: 5, finish: 9 },
  { id: 'Task G', start: 6, finish: 10 },
  { id: 'Task H', start: 8, finish: 11 }
];

const scheduled = selectMaxActivities(candidateTasks);

console.log('Total activities scheduled:', scheduled.length); // 3
for (const task of scheduled) {
  console.log(\`Scheduled \${task.id}: start=\${task.start}, finish=\${task.finish}\`);
}
// Outputs:
// Scheduled Task A: start=1, finish=4
// Scheduled Task D: start=5, finish=7
// Scheduled Task H: start=8, finish=11
`
    },
    {
      type: 'callout',
      variant: 'info',
      text: {
        en: 'The unweighted Interval Scheduling problem is solved in O(N log N) greedily. However, if each activity has an associated monetary weight or profit (Weighted Interval Scheduling), greedy fails and Dynamic Programming with binary search is required to achieve O(N log N).',
        bn: 'সাধারণ ইন্টারভ্যাল শিডিউলিং গ্রিডি উপায়ে O(N log N) সময়ে সমাধান হয়। কিন্তু প্রতিটি কাজের সাথে যদি ভিন্ন লাভ বা ওজন যুক্ত থাকে (ওয়েটেড ইন্টারভ্যাল শিডিউলিং), তবে গ্রিডি কাজ করে না এবং ডায়নামিক প্রোগ্রামিং ব্যবহার করতে হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'grd-act-ex-1',
      kind: 'mcq',
      topic: 'activity-selection-sorting-rule',
      question: {
        en: 'Which sorting criterion guarantees the maximum number of compatible activities in the unweighted Interval Scheduling problem?',
        bn: 'সাধারণ ইন্টারভ্যাল শিডিউলিং সমস্যায় কোন সর্টিং নিয়মটি সর্বাধিক সংখ্যক কাজ পাওয়ার নিশ্চয়তা দেয়?'
      },
      options: [
        {
          en: 'Ascending order of finish time (earliest finish time first)',
          bn: 'সমাপ্তির সময়ের ঊর্ধ্বক্রম অনুসারে (দ্রুততম সমাপ্তির সময় আগে)'
        },
        {
          en: 'Ascending order of start time (earliest start time first)',
          bn: 'শুরুর সময়ের ঊর্ধ্বক্রম অনুসারে (দ্রুততম শুরুর সময় আগে)'
        },
        {
          en: 'Ascending order of interval duration (shortest activity first)',
          bn: 'কাজের স্থায়িত্বের ঊর্ধ্বক্রম অনুসারে (ক্ষুদ্রতম কাজ আগে)'
        },
        {
          en: 'Descending order of start time',
          bn: 'শুরুর সময়ের অধঃক্রম অনুসারে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Finishing early leaves the most free time for remaining jobs.',
        bn: 'আগে শেষ করলে পরবর্তী কাজের জন্য সবচেয়ে বেশি সময় অবশিষ্ট থাকে।'
      },
      explanation: {
        en: 'Picking the activity that finishes earliest frees up the resource as soon as possible, leaving maximum remaining capacity for future activities.',
        bn: 'যে কাজটি সবার আগে শেষ হয় তা রিসোর্সকে দ্রুত মুক্ত করে দেয়, ফলে ভবিষ্যতের কাজের জন্য সর্বোচ্চ সময় অবশিষ্ট থাকে।'
      }
    },
    {
      id: 'grd-act-ex-2',
      kind: 'mcq',
      topic: 'greedy-stays-ahead-meaning',
      question: {
        en: 'In the Greedy-Stays-Ahead proof for interval scheduling, what invariant is proven across every index r by mathematical induction?',
        bn: 'ইন্টারভ্যাল শিডিউলিংয়ের গ্রিডি-স্টেজ-অ্যাহেড প্রমাণে প্রতিটি সূচক r-এর জন্য কোন ইনভেরিয়েন্টটি গাণিতিক আরোহ দিয়ে প্রমাণ করা হয়?'
      },
      options: [
        {
          en: 'finish(g_r) <= finish(o_r), meaning greedy finishes its r-th activity at least as early as any optimal solution',
          bn: 'finish(g_r) <= finish(o_r), অর্থাৎ গ্রিডি তার r-তম কাজটি যেকোনো অপ্টিমাল সমাধানের সমান বা তার আগে শেষ করে'
        },
        {
          en: 'start(g_r) is always equal to 0 for all tasks',
          bn: 'সব কাজের জন্য start(g_r) এর মান সর্বদা ০ হয়'
        },
        {
          en: 'Greedy consumes twice as much memory as OPT',
          bn: 'গ্রিডি OPT-এর চেয়ে দ্বিগুণ মেমরি ব্যবহার করে'
        },
        {
          en: 'The number of rejected jobs is always zero',
          bn: 'বাতিল হওয়া কাজের সংখ্যা সর্বদা শূন্য হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'The finish time of the r-th greedy task is never later than the r-th optimal task.',
        bn: 'r-তম গ্রিডি কাজের সমাপ্তির সময় কখনোই r-তম অপ্টিমাল কাজের চেয়ে দেরিতে হয় না।'
      },
      explanation: {
        en: 'By proving finish(g_r) <= finish(o_r) for all r, we guarantee greedy always leaves at least as much remaining schedule room as OPT, ensuring greedy selects at least as many jobs.',
        bn: 'সকল r-এর জন্য finish(g_r) <= finish(o_r) প্রমাণ করে আমরা নিশ্চিত করি যে গ্রিডি সর্বদা OPT-এর সমান বা বেশি সময় খালি রাখে, ফলে গ্রিডির নির্বাচিত কাজ কখনোই কম হয় না।'
      }
    },
    {
      id: 'grd-act-ex-3',
      kind: 'mcq',
      topic: 'activity-selection-trace-count',
      question: {
        en: 'Given intervals [1, 4], [3, 5], [0, 6], [5, 7], [3, 9], [5, 9], [6, 10], and [8, 11], how many compatible activities are selected?',
        bn: 'ইন্টারভ্যাল [১, ৪], [৩, ৫], [০, ৬], [৫, ৭], [৩, ৯], [৫, ৯], [৬, ১০] এবং [৮, ১১] দেওয়া থাকলে মোট কয়টি সামঞ্জস্যপূর্ণ কাজ নির্বাচিত হয়?'
      },
      options: [
        {
          en: '3 activities ([1, 4], [5, 7], and [8, 11])',
          bn: '৩টি কাজ ([১, ৪], [৫, ৭] এবং [৮, ১১])'
        },
        {
          en: '5 activities',
          bn: '৫টি কাজ'
        },
        {
          en: '2 activities',
          bn: '২টি কাজ'
        },
        {
          en: '8 activities',
          bn: '৮টি কাজ'
        }
      ],
      answer: 0,
      hint: {
        en: 'The selected intervals are [1, 4], then [5, 7], then [8, 11].',
        bn: 'নির্বাচিত কাজগুলো হলো [১, ৪], তারপর [৫, ৭] এবং শেষে [৮, ১১]।'
      },
      explanation: {
        en: 'Task [1, 4] finishes at 4. Next compatible task is [5, 7] finishing at 7. Next compatible task is [8, 11] finishing at 11. Total count is 3.',
        bn: 'কাজ [১, ৪] ৪-এ শেষ হয়। এরপর প্রথম সামঞ্জস্যপূর্ণ কাজ হলো [৫, ৭] যা ৭-এ শেষ হয়। এরপরের কাজ হলো [৮, ১১] যা ১১-তে শেষ হয়। মোট নির্বাচিত কাজ ৩টি।'
      }
    },
    {
      id: 'grd-act-ex-4',
      kind: 'mcq',
      topic: 'weighted-interval-scheduling-contrast',
      question: {
        en: 'Why does the greedy earliest finish time strategy fail when activities have arbitrary numerical weights or profits?',
        bn: 'কাজের সাথে ভিন্ন লাভ বা ওজন যুক্ত থাকলে কেন গ্রিডি দ্রুততম সমাপ্তি কৌশল ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'A high-value job might finish later, and greedy could choose a low-value early job that prevents the high-value job from running',
          bn: 'একটি উচ্চ মূল্যের কাজ দেরিতে শেষ হতে পারে, এবং গ্রিডি এমন একটি কম মূল্যের প্রাথমিক কাজ বেছে নিতে পারে যা সেই দামি কাজটিকে আটকে দেয়'
        },
        {
          en: 'Because arrays cannot store numbers greater than 100',
          bn: 'কারণ অ্যারে ১০০ এর বেশি সংখ্যা সংরক্ষণ করতে পারে না'
        },
        {
          en: 'Because finish times become negative numbers',
          bn: 'কারণ সমাপ্তির সময়গুলো ঋণাত্মক সংখ্যায় পরিণত হয়'
        },
        {
          en: 'Because JavaScript sort functions do not support weights',
          bn: 'কারণ জাভাস্ক্রিপ্ট সর্ট ফাংশন ওজনকে সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Earliest finish time maximizes count of jobs, not sum of profits.',
        bn: 'দ্রুততম সমাপ্তির সময় কাজের মোট সংখ্যা বাড়ায়, লাভের যোগফল নয়।'
      },
      explanation: {
        en: 'Earliest finish time optimizes cardinality (count of jobs). When jobs have differing weights, taking a single job worth 1000 is better than taking two jobs worth 1 each, requiring Dynamic Programming.',
        bn: 'আগে শেষ করার নিয়ম কেবল কাজের সংখ্যা বাড়াতে সাহায্য করে। কিন্তু ভিন্ন লাভ থাকলে ১০০০ মূল্যের একটি কাজ নেওয়া ২টি ১ মূল্যের কাজ নেওয়ার চেয়ে অনেক বেশি লাভজনক, যার জন্য ডায়নামিক প্রোগ্রামিং দরকার।'
      }
    }
  ],
  quiz: {
    title: {
      en: 'Interval Scheduling Mastery Quiz',
      bn: 'ইন্টারভ্যাল শিডিউলিং দক্ষতা কুইজ'
    },
    questions: [
      {
        id: 'grd-act-qz-1',
        kind: 'mcq',
        topic: 'time-complexity-of-activity-selection',
        question: {
          en: 'What is the time complexity of the greedy activity selection algorithm for N intervals?',
          bn: 'N-টি কাজের জন্য গ্রিডি অ্যাক্টিভিটি সিলেকশন অ্যালগরিদমের টাইম কমপ্লেক্সিটি কত?'
        },
        options: [
          {
            en: 'O(N log N) if unsorted, or O(N) if intervals are already sorted by finish time',
            bn: 'অসাজানো থাকলে O(N log N), আর আগে থেকেই সমাপ্তির সময় অনুযায়ী সাজানো থাকলে O(N)'
          },
          {
            en: 'O(N^2) quadratic time in all cases',
            bn: 'সব ক্ষেত্রেই O(N^2) চতুর্ঘাত সময়'
          },
          {
            en: 'O(2^N) exponential search time',
            bn: 'O(২^N) সূচকীয় অনুসন্ধানের সময়'
          },
          {
            en: 'O(1) constant time execution',
            bn: 'O(১) ধ্রুবক সময়ের সম্পাদন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Sorting requires O(N log N) time; the selection loop makes one pass.',
          bn: 'সাজাতে O(N log N) সময় লাগে; সিলেকশন লুপ মাত্র একবার ঘুরে আসে।'
        },
        explanation: {
          en: 'Sorting the N activities by finish time takes O(N log N). The linear selection loop passes through the sorted list in O(N) time with O(1) auxiliary space.',
          bn: 'সমাপ্তির সময় অনুসারে N-টি কাজ সাজাতে O(N log N) সময় লাগে। এরপর লিনিয়ার লুপটি O(N) সময়ে ও O(1) অতিরিক্ত মেমরিতে নির্বাচন সম্পন্ন করে।'
        }
      },
      {
        id: 'grd-act-qz-2',
        kind: 'mcq',
        topic: 'interval-partitioning-extension',
        question: {
          en: 'In the Interval Partitioning problem, what is the minimum number of resources (classrooms) required to schedule all N activities without conflict?',
          bn: 'ইন্টারভ্যাল পার্টিশনিং সমস্যায় কোনো সংঘাত ছাড়া সব N-টি কাজ শিডিউল করতে সর্বনিম্ন কয়টি রিসোর্স (ক্লাসরুম) প্রয়োজন?'
        },
        options: [
          {
            en: 'The maximum depth of the intervals, defined as the peak number of overlapping intervals at any single point in time',
            bn: 'ইন্টারভ্যালগুলোর সর্বোচ্চ ডেপথ, যা যেকোনো একটি নির্দিষ্ট মুহূর্তে সর্বোচ্চ সমকালীন ওভারল্যাপের সমান'
          },
          {
            en: 'Always exactly equal to N classrooms',
            bn: 'সর্বদা ঠিক N-টি ক্লাসরুমের সমান'
          },
          {
            en: 'Always exactly 1 classroom',
            bn: 'সর্বদা ঠিক ১টি ক্লাসরুম'
          },
          {
            en: 'The average duration of all intervals divided by 2',
            bn: 'সব কাজের গড় স্থায়িত্বকে ২ দিয়ে ভাগ করলে যা হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'You need as many rooms as the maximum concurrent overlap.',
          bn: 'সর্বোচ্চ যতগুলো কাজ একই সাথে চলে ঠিক ততগুলো রুম দরকার।'
        },
        explanation: {
          en: 'The depth of a set of intervals is the maximum number of intervals that overlap at any instant. A greedy algorithm using a min-heap of room end times can schedule all intervals using exactly depth rooms.',
          bn: 'যেকোনো মুহূর্তে একসাথে চলা সর্বোচ্চ কাজের সংখ্যাকে ডেপথ বলে। মিন-হিপ ব্যবহার করে একটি গ্রিডি অ্যালগরিদম ঠিক এই ডেপথ সংখ্যক রুমে সব কাজ কোনো দ্বন্দ্ব ছাড়া শিডিউল করতে পারে।'
        }
      },
      {
        id: 'grd-act-qz-3',
        kind: 'mcq',
        topic: 'interval-selection-boundary-cases',
        question: {
          en: 'If task A has interval [2, 5] and task B has interval [5, 8], are these two tasks compatible under standard interval scheduling?',
          bn: 'যদি কাজ A-এর ইন্টারভ্যাল [২, ৫] এবং কাজ B-এর ইন্টারভ্যাল [৫, ৮] হয়, তবে স্ট্যান্ডার্ড শিডিউলিংয়ে তারা কি সামঞ্জস্যপূর্ণ?'
        },
        options: [
          {
            en: 'Yes, because task B starts exactly when task A finishes (start 5 >= finish 5), meaning they touch at the boundary without overlapping',
            bn: 'হ্যাঁ, কারণ কাজ B ঠিক কাজ A শেষ হওয়ার মুহূর্তে শুরু হয় (শুরু ৫ >= শেষ ৫), অর্থাৎ বাউন্ডারিতে মিলিত হলেও ওভারল্যাপ নেই'
          },
          {
            en: 'No, touching boundary endpoints constitutes an unresolvable collision',
            bn: 'না, শেষ প্রান্তে স্পর্শ করলেই তা একটি সংঘাত হিসেবে গণ্য হয়'
          },
          {
            en: 'Only if both tasks are executed on separate CPU cores',
            bn: 'কেবল তখনই সম্ভব যদি কাজ দুটি আলাদা সিপিইউ কোরে চালানো হয়'
          },
          {
            en: 'Only if task A duration is greater than task B duration',
            bn: 'কেবল তখনই সম্ভব যদি কাজ A-এর স্থায়িত্ব কাজ B-এর চেয়ে বড় হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard interval compatibility requires start >= previous finish.',
          bn: 'সাধারণ নিয়ম হলো পরবর্তী শুরুর সময় পূর্ববর্তী শেষের সময়ের সমান বা বড় হতে হবে।'
        },
        explanation: {
          en: 'In standard interval scheduling, an activity can begin at the exact moment another ends: start >= previous_finish. Thus [2, 5] and [5, 8] are compatible.',
          bn: 'স্ট্যান্ডার্ড ইন্টারভ্যাল শিডিউলিংয়ে একটি কাজ শেষ হওয়ার মুহূর্তে আরেকটি কাজ শুরু হতে পারে: start >= previous_finish। তাই [২, ৫] এবং [৫, ৮] উভয়ই একসাথে পরিচালনাযোগ্য।'
        }
      },
      {
        id: 'grd-act-qz-4',
        kind: 'mcq',
        topic: 'cloud-workload-scheduling-application',
        question: {
          en: 'How do modern cloud hypervisors and container schedulers apply interval scheduling principles?',
          bn: 'আধুনিক ক্লাউড হাইপারভাইজার এবং কনটেইনার শিডিউলার কীভাবে ইন্টারভ্যাল শিডিউলিং নীতি প্রয়োগ করে?'
        },
        options: [
          {
            en: 'They pack recurring batch jobs and functions onto minimal server hardware by tracking allocation finish times and reusing idle slots',
            bn: 'তারা বরাদ্দ শেষের সময় ট্র্যাক করে এবং ফাঁকা স্লট পুনঃব্যবহার করে সর্বনিম্ন সার্ভার হার্ডওয়্যারে ব্যাচ জব ও ফাংশন সাজায়'
          },
          {
            en: 'They delete all running containers whenever a new container arrives',
            bn: 'নতুন কনটেইনার এলেই তারা চলমান সব কনটেইনার মুছে ফেলে'
          },
          {
            en: 'They execute all container tasks in random order',
            bn: 'তারা সব কনটেইনার কাজ এলোমেলো ক্রমে চালায়'
          },
          {
            en: 'They convert all server hard drives to read-only mode',
            bn: 'তারা সার্ভারের সমস্ত হার্ড ড্রাইভ রিড-অনলি মোডে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Schedulers reuse resources immediately after jobs finish.',
          bn: 'কাজ শেষ হওয়ার সাথে সাথেই শিডিউলার রিসোর্সগুলো পুনরায় ব্যবহার করে।'
        },
        explanation: {
          en: 'Cloud engines like Kubernetes cron scheduling and serverless platforms pack scheduled workloads using earliest finish heuristics to maximize hardware utilization and prevent idle server waste.',
          bn: 'কুবারনেটিস এবং সার্ভারলেস প্ল্যাটফর্মগুলো হার্ডওয়্যার অপচয় কমাতে এবং সর্বোচ্চ ব্যবহার নিশ্চিত করতে দ্রুততম সমাপ্তির নিয়ম মেনে কাজ শিডিউল করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'locals-and-the-local',
    title: {
      en: 'Huffman Coding & Data Compression',
      bn: 'হাফম্যান কোডিং ও ডেটা কম্প্রেশন'
    }
  }
};
