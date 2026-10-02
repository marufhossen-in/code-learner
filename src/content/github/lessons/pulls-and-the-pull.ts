import type { Lesson } from '../../../lib/types';

export const PullsAndThePullLesson: Lesson = {
  slug: 'pulls-and-the-pull',
  tech: 'github',
  title: {
    en: 'Pull Requests: Diffs, Merge Strategies & Conflict Resolution',
    bn: 'পুল রিকোয়েস্ট: ডিফস, মার্জ কৌশল এবং কনফ্লিক্ট নিরসন'
  },
  summary: {
    en: 'Master GitHub Pull Requests: three-dot diffs, fast-forward vs three-way merges, the three merge strategies (merge commit, squash, rebase), and resolving merge conflicts.',
    bn: 'GitHub পুল রিকোয়েস্টের গভীর কৌশল জানুন: থ্রি-ডট ডিফস, ফাস্ট-ফরওয়ার্ড বনাম থ্রি-ওয়ে মার্জ, ৩ টি মার্জ কৌশল (মার্জ কমিট, স্কোয়াশ, রিবেস) এবং কনফ্লিক্ট নিরসন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'pr-fundamentals',
      text: {
        en: '1. What is a Pull Request (PR)?',
        bn: '১. পুল রিকোয়েস্ট (PR) কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A Pull Request lets developers review code before merging it. You propose changes from your work stream into the main target codebase. Rather than pushing directly to production, team members review diffs and run automated tests in a controlled space.',
        bn: 'একটি পুল রিকোয়েস্ট ডেভেলপারদের কোড মার্জ করার আগে রিভিউ করতে দেয়। আপনি আপনার কাজের ধারা থেকে মূল কোডবেসে পরিবর্তন প্রস্তাব করেন। প্রোডাকশনে সরাসরি পুশ করার বদলে টিম মেম্বাররা একটি নিয়ন্ত্রিত জায়গায় পরিবর্তন ও স্বয়ংক্রিয় টেস্ট যাচাই করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In open-source software, pull requests cross repository boundaries: contributors fork the upstream repository to their personal account, push commits to their fork, and open a PR against upstream repository\'s main branch. In private enterprise teams, PRs operate within the same repository across protected branches. In both environments, 1 successful merge requires clear diffs, green continuous integration checks, and mandatory peer approvals.',
        bn: 'ওপেন-সোর্স সফটওয়্যারে পুল রিকোয়েস্ট দুটি আলাদা রিপোজিটরির মধ্যে কাজ করে: ডেভেলপাররা মূল আপস্ট্রিম রিপোজিটরি ফর্ক করে নিজেদের অ্যাকাউন্টে নেন, ফর্কে কমিট পুশ করেন এবং আপস্ট্রিমের মূল ব্রাঞ্চে PR ওপেন করেন। প্রাইভেট এন্টারপ্রাইজ টিমে সাধারণত একই রিপোজিটরির ভেতর সুরক্ষিত ব্রাঞ্চগুলোর মাঝে PR তৈরি হয়। উভয় ক্ষেত্রেই ১ টি সফল মার্জের জন্য সুস্পষ্ট ডিফস, সফল টেস্ট রান এবং টিম মেম্বারদের অনুমোদন আবশ্যক।'
      }
    },
    {
      type: 'heading',
      id: 'diff-mechanics',
      text: {
        en: '2. Understanding Diffs: Two-Dot vs Three-Dot Diffs',
        bn: '২. ডিফস বোঝা: টু-ডট বনাম থ্রি-ডট ডিফস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When viewing changes in a GitHub pull request, GitHub displays a unified or split diff. Under the hood, Git supports 2 distinct comparison modes that engineers must distinguish when investigating history and branches:',
        bn: 'GitHub পুল রিকোয়েস্টে যখন কোড পরিবর্তন দেখা হয়, তখন GitHub ইউনিফাইড অথবা স্প্লিট ডিফস প্রদর্শন করে। হুডের নিচে Git ২ টি ভিন্ন তুলনামূলক মোড সমর্থন করে যা ডেভেলপারদের স্পষ্টভাবে বুঝতে হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Three-Dot Diff (git diff base...head): This is the exact diff GitHub displays in a pull request. It compares the tip of the head branch with the common ancestor (the merge base) of base and head. It shows only the changes introduced on the feature branch, ignoring subsequent commits added to base.',
          bn: 'থ্রি-ডট ডিফস (git diff base...head): GitHub পুল রিকোয়েস্টে ঠিক এই ডিফস প্রদর্শন করে। এটি base এবং head ব্রাঞ্চের সাধারণ পূর্বপুরুষ (merge base) থেকে head ব্রাঞ্চের পরিবর্তনগুলো দেখায়। ফিচার ব্রাঞ্চ তৈরির পর base এ নতুন কমিট এলেও তা এখানে বাদ থাকে।'
        },
        {
          en: 'Two-Dot Diff (git diff base..head): This performs a direct comparison between the two tips as they exist right now. If main has received 4 new commits while you worked on feature, the two-dot diff shows the inverse of those 4 commits in addition to your work, which is rarely what code reviewers want to see.',
          bn: 'টু-ডট ডিফস (git diff base..head): এটি বর্তমান মুহূর্তে ২ টি ব্রাঞ্চের শীর্ষ বা টিপের সরাসরি তুলনা করে। আপনি ফিচারে কাজ করার সময় যদি main ব্রাঞ্চে ৪ টি নতুন কমিট যোগ হয়, তবে টু-ডট ডিফস সেই ৪ টি কমিটের পরিবর্তনকেও অন্তর্ভুক্ত করে দেখায়, যা রিভিউয়ারদের জন্য বিভ্রান্তিকর।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'pr-merge-strategies-diagram',
      title: {
        en: 'GitHub Pull Request Merge Strategies Compared',
        bn: 'GitHub পুল রিকোয়েস্টের মার্জ কৌশলগুলোর তুলনা'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">GitHub Pull Request: 3 Merge Strategies</text>' +
          '<!-- Strategy 1: Merge Commit -->' +
          '<g transform="translate(40, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="2"/>' +
            '<text x="110" y="30" fill="#60a5fa" font-size="14" font-weight="bold" text-anchor="middle">1. Create a Merge Commit</text>' +
            '<text x="110" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">git merge --no-ff</text>' +
            '<!-- Main line -->' +
            '<line x1="30" y1="120" x2="190" y2="120" stroke="#64748b" stroke-width="3"/>' +
            '<circle cx="50" cy="120" r="12" fill="#3b82f6"/>' +
            '<text x="50" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C1</text>' +
            '<circle cx="110" cy="120" r="12" fill="#3b82f6"/>' +
            '<text x="110" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C2</text>' +
            '<!-- Feature branch -->' +
            '<path d="M 50 120 Q 80 180 110 180" fill="none" stroke="#10b981" stroke-width="2" stroke-dasharray="3,3"/>' +
            '<circle cx="110" cy="180" r="12" fill="#10b981"/>' +
            '<text x="110" y="184" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">F1</text>' +
            '<!-- Merge commit -->' +
            '<path d="M 110 180 Q 140 180 170 120" fill="none" stroke="#10b981" stroke-width="2"/>' +
            '<circle cx="170" cy="120" r="14" fill="#f59e0b" stroke="#ffffff" stroke-width="2"/>' +
            '<text x="170" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">M</text>' +
            '<text x="110" y="230" fill="#e2e8f0" font-size="11" text-anchor="middle">Preserves 2 parents &amp; history</text>' +
            '<text x="110" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Branch topology intact</text>' +
            '<rect x="25" y="275" width="170" height="35" rx="4" fill="#0f172a"/>' +
            '<text x="110" y="297" fill="#38bdf8" font-size="10" text-anchor="middle">Non-linear graph</text>' +
          '</g>' +
          '<!-- Strategy 2: Squash and Merge -->' +
          '<g transform="translate(290, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>' +
            '<text x="110" y="30" fill="#34d399" font-size="14" font-weight="bold" text-anchor="middle">2. Squash and Merge</text>' +
            '<text x="110" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">git merge --squash</text>' +
            '<!-- Main line -->' +
            '<line x1="30" y1="120" x2="190" y2="120" stroke="#64748b" stroke-width="3"/>' +
            '<circle cx="50" cy="120" r="12" fill="#3b82f6"/>' +
            '<text x="50" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C1</text>' +
            '<circle cx="100" cy="120" r="12" fill="#3b82f6"/>' +
            '<text x="100" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C2</text>' +
            '<!-- Single Squashed Commit -->' +
            '<circle cx="160" cy="120" r="14" fill="#10b981" stroke="#ffffff" stroke-width="2"/>' +
            '<text x="160" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">S1</text>' +
            '<text x="110" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">F1 + F2 + F3 squashed into</text>' +
            '<text x="110" y="200" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">1 single commit (S1)</text>' +
            '<text x="110" y="230" fill="#e2e8f0" font-size="11" text-anchor="middle">Linear trunk history</text>' +
            '<text x="110" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Hides intermediate WIP commits</text>' +
            '<rect x="25" y="275" width="170" height="35" rx="4" fill="#0f172a"/>' +
            '<text x="110" y="297" fill="#34d399" font-size="10" text-anchor="middle">Simplest rollbacks</text>' +
          '</g>' +
          '<!-- Strategy 3: Rebase and Merge -->' +
          '<g transform="translate(540, 60)">' +
            '<rect width="220" height="330" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>' +
            '<text x="110" y="30" fill="#c084fc" font-size="14" font-weight="bold" text-anchor="middle">3. Rebase and Merge</text>' +
            '<text x="110" y="52" fill="#94a3b8" font-size="11" text-anchor="middle">git rebase main</text>' +
            '<!-- Main line -->' +
            '<line x1="20" y1="120" x2="200" y2="120" stroke="#64748b" stroke-width="3"/>' +
            '<circle cx="40" cy="120" r="12" fill="#3b82f6"/>' +
            '<text x="40" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C1</text>' +
            '<circle cx="85" cy="120" r="12" fill="#3b82f6"/>' +
            '<text x="85" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">C2</text>' +
            '<circle cx="130" cy="120" r="12" fill="#a855f7"/>' +
            '<text x="130" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">F1\'</text>' +
            '<circle cx="175" cy="120" r="12" fill="#a855f7"/>' +
            '<text x="175" y="124" fill="#ffffff" font-size="10" font-weight="bold" text-anchor="middle">F2\'</text>' +
            '<text x="110" y="180" fill="#94a3b8" font-size="11" text-anchor="middle">Commits replayed onto main</text>' +
            '<text x="110" y="200" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">New commit hashes created</text>' +
            '<text x="110" y="230" fill="#e2e8f0" font-size="11" text-anchor="middle">Linear without squash</text>' +
            '<text x="110" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Preserves atomic commits</text>' +
            '<rect x="25" y="275" width="170" height="35" rx="4" fill="#0f172a"/>' +
            '<text x="110" y="297" fill="#c084fc" font-size="10" text-anchor="middle">Pure linear graph</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'merge-strategies',
      text: {
        en: '3. Deep Dive: The 3 GitHub Merge Strategies',
        bn: '৩. গভীর পর্যবেক্ষণ: ৩ টি GitHub মার্জ কৌশল'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Repository administrators can configure which of the 3 merge buttons are enabled on pull requests. Choosing the correct strategy impacts git bisect debugging, changelog generation, and reverting faulty deployments:',
        bn: 'রিপোজিটরি অ্যাডমিনিস্ট্রেটররা নির্ধারণ করতে পারেন পুল রিকোয়েস্টে কোন ৩ টি মার্জ বোতাম সক্রিয় থাকবে। সঠিক কৌশল নির্বাচন করা git bisect ডিবাগিং, চেঞ্জলগ তৈরি এবং সমস্যাযুক্ত ডিপ্লয়মেন্ট রিভার্ট করার ক্ষেত্রে গভীর প্রভাব ফেলে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Create a Merge Commit: Git executes a three-way merge creating a new commit with 2 parents (base tip and head tip). Benefit: Complete historical fidelity; every commit timestamp and branch structure is preserved. Drawback: Commit history becomes a cluttered "railroad track" graph when dozens of engineers merge multiple times a day.',
          bn: '১. ক্রিয়েট এ মার্জ কমিট: Git এখানে ৩ টি অবস্থার (কমন বেস ও দুই টিপ) সাপেক্ষে থ্রি-ওয়ে মার্জ করে ২ টি প্যারেন্ট সম্বলিত একটি নতুন মার্জ কমিট তৈরি করে। সুবিধা: সম্পূর্ণ ঐতিহাসিক বিশ্বস্ততা বজায় থাকে এবং ব্রাঞ্চের শাখা-প্রশাখা দৃশ্যমান থাকে। অসুবিধা: প্রতিদিন বহু ডেভেলপার মার্জ করলে হিস্ট্রি অত্যন্ত জটিল ও ট্রেনের লাইনের মতো আঁকাবাঁকা হয়ে পড়ে।'
        },
        {
          en: '2. Squash and Merge: Git combines all commits from the PR branch into 1 single unified commit and applies it to base with 1 parent. Benefit: Leaves a clean, perfectly linear git log on main. If a feature causes a production bug, you revert exactly 1 commit. Drawback: Intermediate commits, granular commit messages, and individual work stages are flattened.',
          bn: '২. স্কোয়াশ অ্যান্ড মার্জ: Git এখানে PR ব্রাঞ্চের সব কমিটকে একত্রিত করে ১ টিমাত্র কমিটে রূপান্তর করে এবং ১ টি প্যারেন্ট সহ বেস ব্রাঞ্চে যোগ করে। সুবিধা: main ব্রাঞ্চের লগ থাকে অত্যন্ত পরিচ্ছন্ন ও রৈখিক। প্রোডাকশনে কোনো বাগ দেখা দিলে মাত্র ১ টি কমিট রিভার্ট করলেই পুরো ফিচার বাতিল হয়। অসুবিধা: মাঝের ছোট ছোট কমিট হিস্ট্রি হারিয়ে যায়।'
        },
        {
          en: '3. Rebase and Merge: Git takes each individual commit from the PR branch and replays them sequentially onto the tip of base. Benefit: Preserves individual atomic commits while maintaining a strict linear history without any merge commit. Drawback: Modifies commit SHAs, requiring commit re-signing if GPG signature enforcement is strictly active.',
          bn: '৩. রিবেস অ্যান্ড মার্জ: Git এখানে PR ব্রাঞ্চের প্রতিটি কমিটকে পর্যায়ক্রমে নিয়ে base ব্রাঞ্চের শীর্ষে নতুন করে সাজিয়ে দেয়। সুবিধা: কোনো মার্জ কমিট ছাড়াই প্রতিটি পৃথক কমিট বজায় রেখে সম্পূর্ণ রৈখিক ইতিহাস পাওয়া যায়। অসুবিধা: নতুন কমিট SHA তৈরি হয়, ফলে কঠোর GPG সিগনেচার যাচাই সক্রিয় থাকলে পুনরায় সাইন করার প্রয়োজন হতে পারে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'conflict-anatomy',
      text: {
        en: '4. Merge Conflicts: Why They Happen and How to Resolve Them',
        bn: '৪. মার্জ কনফ্লিক্ট: কেন ঘটে এবং কীভাবে সমাধান করবেন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A merge conflict occurs when 2 branches modify the same line of code differently, or when 1 branch deletes a file that another branch modified. Git cannot automatically guess author intent, so it pauses the merge operation and injects standard conflict markers directly into the affected source files:',
        bn: 'মার্জ কনফ্লিক্ট তখনই ঘটে যখন ২ টি ভিন্ন ব্রাঞ্চ একই ফাইলের একই লাইনে ভিন্ন কোড লিখে, অথবা ১ টি ব্রাঞ্চ একটি ফাইল মুছে ফেলে যেখানে অন্য ব্রাঞ্চ পরিবর্তন এনেছিল। Git নিজে থেকে ডেভেলপারের আসল উদ্দেশ্য অনুমান করতে পারে না, তাই মার্জ প্রক্রিয়া থামিয়ে ফাইলে কনফ্লিক্ট মার্কার বসিয়ে দেয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '<<<<<<< HEAD: Marks the start of the conflict region containing the code currently on the target branch (or current checkout).',
          bn: '<<<<<<< HEAD: কনফ্লিক্ট অঞ্চলের সূচনা নির্দেশ করে যা বর্তমান টার্গেট ব্রাঞ্চের কোড ধারণ করে।'
        },
        {
          en: '=======: The divider separating the current branch code from the incoming branch code.',
          bn: '=======: বর্তমান ব্রাঞ্চের কোড এবং আগমনী ব্রাঞ্চের কোডের মধ্যকার বিভাজক রেখা।'
        },
        {
          en: '>>>>>>> feature-branch: Marks the end of the conflict region containing code from the branch being merged.',
          bn: '>>>>>>> feature-branch: কনফ্লিক্ট অঞ্চলের সমাপ্তি নির্দেশ করে যা মার্জ হতে আসা ব্রাঞ্চের কোড ধারণ করে।'
        }
      ]
    },
    {
      type: 'para',
      text: {
        en: 'To resolve a merge conflict locally, open the conflicted file and keep your intended logic. Next, delete all 3 conflict markers (<<<<<<<, =======, >>>>>>>). Finally, stage the file with git add and finalize with git commit or git rebase --continue.',
        bn: 'লোকাল মেশিনে কনফ্লিক্ট সমাধানের জন্য ফাইলটি খুলে কাঙ্ক্ষিত কোড রাখুন। এরপর ৩ টি কনফ্লিক্ট মার্কার (<<<<<<<, =======, >>>>>>>) মুছে ফেলুন। পরিশেষে git add দিয়ে স্টেজ করে git commit বা git rebase --continue চালিয়ে মার্জ সম্পন্ন করুন।'
      }
    },
    {
      type: 'heading',
      id: 'pr-simulator',
      text: {
        en: '5. PR Merge & Conflict Engine in TypeScript',
        bn: '৫. TypeScript এ PR মার্জ ও কনফ্লিক্ট সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how Git detects line-level conflicts between a base branch and a head branch, and simulates how squash, rebase, and merge commit strategies produce final commit logs:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে Git বেস ব্রাঞ্চ এবং হেড ব্রাঞ্চের মধ্যে লাইন-লেভেল কনফ্লিক্ট শনাক্ত করে, এবং স্কোয়াশ, রিবেস ও মার্জ কমিট কৌশল কীভাবে ফাইনাল হিস্ট্রি তৈরি করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Pull Request diffing, conflict detection, and merge strategies.',
        bn: 'পুল রিকোয়েস্ট ডিফ, কনফ্লিক্ট শনাক্তকরণ এবং মার্জ কৌশলের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Pull Request Diffing, Conflict Detection, and Merge Strategies
interface Commit {
  id: string;
  message: string;
  lines: string[];
}

interface MergeResult {
  status: 'clean' | 'conflict';
  strategy: string;
  resultingLines: string[];
  finalCommits: number;
  conflictsFound: number;
}

function analyzePullRequest(
  baseCommits: Commit[],
  headCommits: Commit[],
  strategy: 'merge-commit' | 'squash' | 'rebase'
): MergeResult {
  const baseLines = baseCommits[baseCommits.length - 1].lines;
  const headLines = headCommits[headCommits.length - 1].lines;
  
  let conflictCount = 0;
  const mergedLines: string[] = [];
  const maxLen = Math.max(baseLines.length, headLines.length);
  
  for (let i = 0; i < maxLen; i++) {
    const b = baseLines[i];
    const h = headLines[i];
    if (b !== undefined && h !== undefined && b !== h) {
      conflictCount++;
      mergedLines.push('CONFLICT: base=[' + b + '] vs head=[' + h + ']');
    } else {
      mergedLines.push(h !== undefined ? h : (b || ''));
    }
  }

  let finalCommitCount = 0;
  if (strategy === 'merge-commit') {
    // Base commits + head commits + 1 merge commit
    finalCommitCount = baseCommits.length + headCommits.length + 1; // -> 4 commits
  } else if (strategy === 'squash') {
    // Base commits + 1 single squashed commit
    finalCommitCount = baseCommits.length + 1; // -> 3 commits
  } else if (strategy === 'rebase') {
    // Base commits + replayed head commits
    finalCommitCount = baseCommits.length + headCommits.length; // -> 3 commits
  }

  return {
    status: conflictCount > 0 ? 'conflict' : 'clean',
    strategy,
    resultingLines: mergedLines,
    finalCommits: finalCommitCount,
    conflictsFound: conflictCount
  };
}

// 1. Clean PR scenario: 2 base commits + 1 feature commit
const baseClean: Commit[] = [
  { id: 'c1', message: 'Initial setup', lines: ['port = 3000', 'host = localhost'] },
  { id: 'c2', message: 'Add logging', lines: ['port = 3000', 'host = localhost', 'logger.init()'] }
];

const featureClean: Commit[] = [
  { id: 'f1', message: 'Add healthcheck', lines: ['port = 3000', 'host = localhost', 'logger.init()', 'app.get(/health)'] }
];

const mergeRes = analyzePullRequest(baseClean, featureClean, 'merge-commit');
console.log('Merge-commit strategy -> final commits: ' + mergeRes.finalCommits); // -> 4

const squashRes = analyzePullRequest(baseClean, featureClean, 'squash');
console.log('Squash strategy -> final commits: ' + squashRes.finalCommits); // -> 3

const rebaseRes = analyzePullRequest(baseClean, featureClean, 'rebase');
console.log('Rebase strategy -> final commits: ' + rebaseRes.finalCommits); // -> 3

// 2. Scenario with conflict on line 0
const featureConflict: Commit[] = [
  { id: 'f2', message: 'Change port to 8080', lines: ['port = 8080', 'host = localhost', 'logger.init()'] }
];
const conflictRes = analyzePullRequest(baseClean, featureConflict, 'squash');
console.log('Conflicted PR -> status: ' + conflictRes.status); // -> conflict`
    }
  ],
  exercises: [
    {
      id: 'pr-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which Git diff mode does GitHub use by default when displaying changes in a Pull Request?',
        bn: 'একটি পুল রিকোয়েস্টে পরিবর্তন প্রদর্শন করার সময় GitHub ডিফল্টভাবে কোন Git ডিফস মোড ব্যবহার করে?'
      },
      options: [
        {
          en: 'Three-dot diff (git diff base...head) comparing merge base with head',
          bn: 'থ্রি-ডট ডিফস (git diff base...head) যা মার্জ বেস ও হেডের তুলনা করে'
        },
        {
          en: 'Two-dot diff (git diff base..head) comparing current branch tips directly',
          bn: 'টু-ডট ডিফস (git diff base..head) যা সরাসরি বর্তমান ব্রাঞ্চ টিপের তুলনা করে'
        },
        {
          en: 'Single-dot diff (git diff base.head) measuring commit count',
          bn: 'সিঙ্গেল-ডট ডিফস (git diff base.head) যা কমিট সংখ্যা মাপে'
        },
        {
          en: 'Zero-dot diff comparing working directory with stash',
          bn: 'জিরো-ডট ডিফস যা ওয়ার্কিং ডিরেক্টরির সাথে স্ট্যাশের তুলনা করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'It compares against the common ancestor so changes made on main after the branch split are excluded.',
        bn: 'এটি সাধারণ পূর্বপুরুষের সাপেক্ষে তুলনা করে যেন ব্রাঞ্চ কাটার পর মেইনে আসা নতুন কমিট বাদ থাকে।'
      },
      explanation: {
        en: 'GitHub Pull Requests display a 3-dot diff (base...head), showing only the modifications made on the feature branch since it diverged from base.',
        bn: 'GitHub পুল রিকোয়েস্ট ৩ টি ডট সম্বলিত diff (base...head) প্রদর্শন করে, যা বেস থেকে আলাদা হওয়ার পর ফিচার ব্রাঞ্চে হওয়া পরিবর্তনগুলোই শুধু দেখায়।'
      }
    },
    {
      id: 'pr-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the primary operational advantage of the "Squash and Merge" strategy on a busy repository?',
        bn: 'একটি ব্যস্ত রিপোজিটরিতে "স্কোয়াশ অ্যান্ড মার্জ" কৌশলের প্রধান কার্যকরী সুবিধা কী?'
      },
      options: [
        {
          en: 'It keeps the main branch history linear and packages the PR into 1 single revertible commit',
          bn: 'এটি main ব্রাঞ্চের ইতিহাস রৈখিক রাখে এবং সম্পূর্ণ PR-কে ১ টিমাত্র রিভার্টযোগ্য কমিটে রূপান্তর করে'
        },
        {
          en: 'It preserves all 20 intermediate commits with multiple parent hashes intact',
          bn: 'এটি ২০ টি মধ্যবর্তী কমিটকে একাধিক প্যারেন্ট হ্যাশ সহ অক্ষত সংরক্ষণ করে'
        },
        {
          en: 'It eliminates the need for continuous integration testing before merge',
          bn: 'এটি মার্জ করার আগে অটোমেটেড সিআই টেস্ট চালানোর প্রয়োজনীয়তা দূর করে'
        },
        {
          en: 'It permanently disables branch protection rules on the target repository',
          bn: 'এটি টার্গেট রিপোজিটরিতে ব্রাঞ্চ প্রটেকশন রুলস চিরতরে নিষ্ক্রিয় করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think about what happens when you need to run git revert in production on an incident.',
        bn: 'ইনসিডেন্টের সময় প্রোডাকশনে যখন git revert চালানোর প্রয়োজন হয় তখন কী ঘটে ভাবুন।'
      },
      explanation: {
        en: 'Squash and merge consolidates all commits into 1 single commit on the target branch. This produces a linear git log and makes reverting a faulty feature a 1-step git revert operation.',
        bn: 'স্কোয়াশ অ্যান্ড মার্জ সব কমিটকে টার্গেট ব্রাঞ্চে ১ টিমাত্র কমিটে রূপান্তর করে। এর ফলে লিনিয়ার হিস্ট্রি তৈরি হয় এবং ত্রুটিপূর্ণ ফিচার মাত্র ১ টি git revert কমান্ডে প্রত্যাহার করা যায়।'
      }
    },
    {
      id: 'pr-ex-3',
      kind: 'mcq',
      question: {
        en: 'What does the conflict marker <<<<<<< HEAD signify inside a conflicted file during merge?',
        bn: 'মার্জের সময় কনফ্লিক্ট হওয়া ফাইলের ভেতর <<<<<<< HEAD মার্কারটি কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The beginning of the conflict section containing code from the current branch',
          bn: 'কনফ্লিক্ট অংশের শুরু যা বর্তমান ব্রাঞ্চের কোড নির্দেশ করে'
        },
        {
          en: 'The end marker indicating the incoming changes have been completely accepted',
          bn: 'সমাপ্তি মার্কার যা নির্দেশ করে আগমনী কোড সম্পূর্ণভাবে গৃহীত হয়েছে'
        },
        {
          en: 'A syntax error reported by the compiler during build execution',
          bn: 'বিল্ড এক্সিকিউশনের সময় কম্পাইলারের রিপোর্ট করা একটি সিনট্যাক্স ত্রুটি'
        },
        {
          en: 'A GitHub Actions runner flag instructing the runner to abort the pipeline',
          bn: 'GitHub Actions রানারের একটি ফ্ল্যাগ যা পাইপলাইন বন্ধ করার নির্দেশ দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'HEAD points to the branch you currently have checked out before running merge.',
        bn: 'HEAD নির্দেশ করে মার্জ চালানোর আগে আপনার বর্তমানে চেকআউট থাকা ব্রাঞ্চকে।'
      },
      explanation: {
        en: '<<<<<<< HEAD marks the beginning of the conflict block containing the code currently on your active checked-out branch. The ======= separates it from the incoming branch code.',
        bn: '<<<<<<< HEAD কনফ্লিক্ট ব্লকের শুরু নির্দেশ করে যা বর্তমানে সক্রিয় ব্রাঞ্চের কোড ধারণ করে। ======= বিভাজকটি এটিকে আগমনী ব্রাঞ্চের কোড থেকে আলাদা করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-pulls-and-the-pull',
    title: {
      en: 'Pull Requests, Diffs, and Merge Strategies Quiz',
      bn: 'পুল রিকোয়েস্ট, ডিফস এবং মার্জ কৌশল কুইজ'
    },
    questions: [
      {
        id: 'pr-q1',
        kind: 'mcq',
        question: {
          en: 'How many parent commits does a standard GitHub Merge Commit have?',
          bn: 'একটি স্ট্যান্ডার্ড GitHub মার্জ কমিটের কয়টি প্যারেন্ট কমিট থাকে?'
        },
        options: [
          {
            en: '2 parent commits (the tip of base and the tip of head)',
            bn: '২ টি প্যারেন্ট কমিট (বেসের শীর্ষ এবং হেডের শীর্ষ)'
          },
          {
            en: '1 parent commit (the tip of head only)',
            bn: '১ টি প্যারেন্ট কমিট (শুধুমাত্র হেডের শীর্ষ)'
          },
          {
            en: '0 parent commits (it acts as a fresh orphan root)',
            bn: '০ টি প্যারেন্ট কমিট (এটি একটি নতুন রুট হিসেবে কাজ করে)'
          },
          {
            en: '4 parent commits connecting every branch in the repository',
            bn: '৪ টি প্যারেন্ট কমিট যা রিপোজিটরির প্রতিটি ব্রাঞ্চকে যুক্ত করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'A merge commit ties 2 distinct historical lines together.',
          bn: 'একটি মার্জ কমিট ২ টি পৃথক ঐতিহাসিক ধারাকে একত্রিত করে।'
        },
        explanation: {
          en: 'A merge commit is a special commit with 2 parents: parent 1 is the previous commit of the base branch, and parent 2 is the tip commit of the merged branch.',
          bn: 'একটি মার্জ কমিটের ২ টি প্যারেন্ট থাকে: ১ম প্যারেন্ট বেস ব্রাঞ্চের পূর্ববর্তী কমিট এবং ২য় প্যারেন্ট মার্জ হওয়া ব্রাঞ্চের শীর্ষ কমিট।'
        }
      },
      {
        id: 'pr-q2',
        kind: 'mcq',
        question: {
          en: 'What happens to commit hashes when you choose "Rebase and Merge" on GitHub?',
          bn: 'GitHub এ "রিবেস অ্যান্ড মার্জ" নির্বাচন করলে কমিট হ্যাশগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'New commit hashes are created because commits are replayed onto the new base tip',
            bn: 'নতুন কমিট হ্যাশ তৈরি হয় কারণ কমিটগুলো নতুন বেস টিপের উপর পুনরায় প্লে করা হয়'
          },
          {
            en: 'Existing commit hashes remain 100% identical without any change',
            bn: 'বিদ্যমান কমিট হ্যাশগুলো কোনো পরিবর্তন ছাড়াই ১০০% অপরিবর্তিত থাকে'
          },
          {
            en: 'All commits are deleted and replaced with an empty tag',
            bn: 'সব কমিট মুছে ফেলা হয় এবং একটি খালি ট্যাগ দিয়ে প্রতিস্থাপন করা হয়'
          },
          {
            en: 'Git assigns random 8-character string names to each file',
            bn: 'Git প্রতিটি ফাইলে ৮ অক্ষরের এলোমেলো স্ট্রিং নাম নির্ধারণ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'In Git, changing a commit parent changes its SHA hash.',
          bn: 'Git এ কমিটের প্যারেন্ট পরিবর্তিত হলে তার SHA হ্যাশ পরিবর্তিত হয়।'
        },
        explanation: {
          en: 'Rebasing changes the parent commit of each replayed commit. Because a Git commit SHA is a cryptographic hash of its contents and parent, new commit hashes are generated.',
          bn: 'রিবেসিং প্রতিটি কমিটের প্যারেন্ট পরিবর্তন করে। Git কমিট SHA এর বিষয়বস্তু ও প্যারেন্টের ক্রিপ্টোগ্রাফিক হ্যাশ হওয়ায় নতুন হ্যাশ তৈরি হয়।'
        }
      },
      {
        id: 'pr-q3',
        kind: 'mcq',
        question: {
          en: 'What is a "Draft Pull Request" used for on GitHub?',
          bn: 'GitHub এ একটি "ড্রাফট পুল রিকোয়েস্ট" কী কাজে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'To share work-in-progress code and run CI tests without allowing accidental merging',
            bn: 'চলমান কোড শেয়ার করতে ও সিআই চালাতে যেন ভুলবশত কেউ মার্জ না করে'
          },
          {
            en: 'To permanently encrypt code so outside contributors cannot read it',
            bn: 'কোড চিরতরে এনক্রিপ্ট করতে যেন বাইরের কন্ট্রিবিউটররা পড়তে না পারে'
          },
          {
            en: 'To bypass mandatory branch protection rules during critical outages',
            bn: 'জরুরি পরিস্থিতিতে বাধ্যতামূলক ব্রাঞ্চ প্রটেকশন রুলস বাইপাস করতে'
          },
          {
            en: 'To create a fork without cloning any git history',
            bn: 'কোনো গিট হিস্ট্রি ক্লোন না করে একটি ফর্ক তৈরি করতে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Draft PRs signal work in progress (WIP) and disable the merge button.',
          bn: 'ড্রাফট PR কাজ চলমান নির্দেশ করে এবং মার্জ বাটন নিষ্ক্রিয় রাখে।'
        },
        explanation: {
          en: 'Draft PRs allow developers to get early feedback and verify CI checks before code is complete. The merge button is blocked until marked "Ready for review".',
          bn: 'ড্রাফট PR ডেভেলপারদের প্রাথমিক ফিডব্যাক নিতে ও সিআই চেক করতে সহায়তা করে। "Ready for review" না করা পর্যন্ত মার্জ বোতাম ব্লক থাকে।'
        }
      },
      {
        id: 'pr-q4',
        kind: 'mcq',
        question: {
          en: 'Which command finalizes conflict resolution after staging resolved files during a git rebase?',
          bn: 'git rebase চলাকালীন কনফ্লিক্ট মেটানোর পর ফাইল স্টেজ করে কোন কমান্ড দিয়ে প্রক্রিয়াটি এগিয়ে নেওয়া হয়?'
        },
        options: [
          {
            en: 'git rebase --continue',
            bn: 'git rebase --continue'
          },
          {
            en: 'git rebase --force-reset',
            bn: 'git rebase --force-reset'
          },
          {
            en: 'git merge --cancel',
            bn: 'git merge --cancel'
          },
          {
            en: 'git commit -a --abort',
            bn: 'git commit -a --abort'
          }
        ],
        answer: 0,
        hint: {
          en: 'You want the rebase to continue applying the remaining commits.',
          bn: 'আপনি চান রিবেস প্রক্রিয়া পরবর্তী কমিটগুলো প্রয়োগ করে এগিয়ে যাক।'
        },
        explanation: {
          en: 'After resolving conflicts and staging changes with git add, you run "git rebase --continue" to apply the next commit in the rebase queue.',
          bn: 'কনফ্লিক্ট মিটিয়ে git add দিয়ে ফাইল স্টেজ করার পর "git rebase --continue" দিলে রিবেস তালিকার পরবর্তী কমিটগুলো প্রয়োগ শুরু হয়।'
        }
      },
      {
        id: 'pr-q5',
        kind: 'mcq',
        question: {
          en: 'Why is "Squash and Merge" widely preferred in Trunk-Based Development workflows?',
          bn: 'ট্রাঙ্ক-বেসড ডেভেলপমেন্ট ওয়ার্কফ্লোতে কেন "স্কোয়াশ অ্যান্ড মার্জ" ব্যাপকভাবে পছন্দ করা হয়?'
        },
        options: [
          {
            en: 'It keeps the main branch history linear and makes every feature a single atomic commit',
            bn: 'এটি মেইন ব্রাঞ্চের ইতিহাস লিনিয়ার রাখে এবং প্রতিটি ফিচারকে একটি একক অ্যাটমিক কমিট বানায়'
          },
          {
            en: 'It doubles the total number of commits for enhanced audit reporting',
            bn: 'এটি অডিট রিপোর্টের জন্য মোট কমিটের সংখ্যা দ্বিগুণ করে ফেলে'
          },
          {
            en: 'It removes the need for pull request approvals and status checks',
            bn: 'এটি পুল রিকোয়েস্ট অনুমোদন এবং স্ট্যাটাস চেকের প্রয়োজনীয়তা দূর করে'
          },
          {
            en: 'It automatically deploys code to production without executing automated pipelines',
            bn: 'এটি কোনো অটোমেটেড পাইপলাইন না চালিয়েই কোড সরাসরি প্রোডাকশনে ডিপ্লয় করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Trunk-based development prioritizes a clean, easily bisectable trunk.',
          bn: 'ট্রাঙ্ক-বেসড ডেভেলপমেন্ট একটি পরিচ্ছন্ন ও সহজে বাইসেক্টযোগ্য ট্রাঙ্ককে অগ্রাধিকার দেয়।'
        },
        explanation: {
          en: 'In trunk-based development, developers work in short-lived branches. Squash and merge merges the feature as 1 atomic commit, keeping main clean and easy to inspect.',
          bn: 'ট্রাঙ্ক-বেসড ডেভেলপমেন্টে ডেভেলপাররা স্বল্পস্থায়ী ব্রাঞ্চে কাজ করেন। স্কোয়াশ অ্যান্ড মার্জ ফিচারটিকে ১ টি একক অ্যাটমিক কমিট হিসেবে মার্জ করে মেইন ব্রাঞ্চকে পরিচ্ছন্ন রাখে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'issues-and-the-issue',
    title: {
      en: 'GitHub Issues: Tracking, Labels, Milestones & Projects',
      bn: 'GitHub ইস্যু: ট্র্যাকিং, লেবেল, মাইলস্টোন ও প্রজেক্ট বোর্ড'
    }
  }
};
