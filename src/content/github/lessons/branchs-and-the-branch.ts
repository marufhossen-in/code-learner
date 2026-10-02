import type { Lesson } from '../../../lib/types';

export const BranchsAndTheBranchLesson: Lesson = {
  slug: 'branchs-and-the-branch',
  tech: 'github',
  title: {
    en: 'GitHub Basics: Git Branching Models & Protected Branches',
    bn: 'GitHub বেসিকস: Git ব্রাঞ্চিং মডেল এবং সুরক্ষিত ব্রাঞ্চ'
  },
  summary: {
    en: 'A beginner-friendly overview of Git branching strategies on GitHub. Discover how branches function under the hood as 41-byte pointers to commit hashes. Compare GitHub Flow with Trunk-Based Development, understand the role of the HEAD pointer, and configure enterprise branch protection rules and rulesets to prevent accidental force pushes to the main production branch.',
    bn: 'GitHub-এ Git ব্রাঞ্চিং কৌশলের একটি বিস্তারিত শিক্ষানবিস গাইড। মেমরিতে ব্রাঞ্চ কীভাবে মাত্র ৪১ বাইটের হালকা পয়েন্টার হিসেবে কাজ করে তা জানুন। GitHub Flow-এর সাথে ট্রাঙ্ক-ভিত্তিক ডেভেলপমেন্টের তুলনা বুঝুন, HEAD পয়েন্টারের ভূমিকা এবং প্রোডাকশন মেইন ব্রাঞ্চে অনাকাঙ্ক্ষিত পুশ বন্ধে এন্টারপ্রাইজ ব্রাঞ্চ প্রটেকশন রুলসের কনফিগারেশন শিখুন।'
  },
  minutes: 42,
  blocks: [
    {
      type: 'heading',
      id: 'git-branch-mechanics-heading',
      text: {
        en: 'Under the Hood: Branches as Lightweight Pointers',
        bn: 'অভ্যন্তরীণ গঠন: হালকা পয়েন্টার হিসেবে ব্রাঞ্চের কার্যপদ্ধতি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Isolating concurrent features without destabilizing working software is the primary goal of version control. On GitHub (the cloud-hosted Git collaboration platform), teams coordinate changes through branches. Under the hood in Git, a branch is not a heavy copy of your codebase; it is simply a 41-byte text file containing a 40-character commit hash pointing to the latest commit. Creating a branch using "git checkout -b feature" takes instantaneous O(1) time. The special "HEAD" pointer tracks the currently active branch, advancing automatically with each new commit while keeping other branches completely isolated.',
        bn: 'চলমান সফটওয়্যারকে ক্ষতিগ্রস্ত না করে নতুন ফিচারের কাজ আলাদাভাবে চালিয়ে নেওয়াই ভার্সন কন্ট্রোলের মূল উদ্দেশ্য। কিন্তু GitHub (ক্লাউড-হোস্টেড গিট কোলাবোরেশন প্ল্যাটফর্ম)-এ টিমগুলো ব্রাঞ্চের মাধ্যমে এই সমন্বয় করে। অভ্যন্তরীণভাবে Git-এ একটি ব্রাঞ্চ পুরো কোডবেসের কোনো ভারী ডুপ্লিকেট কপি নয়; এটি কেবল ৪১ বাইটের একটি সাধারণ টেক্সট ফাইল যাতে সর্বশেষ কমিটের ৪০ অক্ষরের হ্যাশ পয়েন্টার থাকে। "git checkout -b feature" দিয়ে নতুন ব্রাঞ্চ তৈরি করতে তাৎক্ষণিক O(1) সময় লাগে। বিশেষ "HEAD" পয়েন্টারটি বর্তমানে চলমান ব্রাঞ্চটিকে ট্র্যাক করে এবং প্রতিটি নতুন কমিটের সাথে সাথে এগিয়ে যায়, যখন অন্যান্য ব্রাঞ্চ সম্পূর্ণ অক্ষত থাকে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: GitHub Flow branching lifecycle contrasted with automated branch protection rules blocking unauthorized direct pushes to main.',
        bn: 'চিত্র ১: GitHub Flow ব্রাঞ্চিং লাইফসাইকেল এবং মেইন ব্রাঞ্চে সরাসরি পুশ আটকে দেওয়া স্বয়ংক্রিয় ব্রাঞ্চ প্রটেকশন রুলসের চিত্র।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">GITHUB FLOW &amp; BRANCH PROTECTION ARCHITECTURE</text>

  <!-- Left: GitHub Flow -->
  <g transform="translate(35, 65)">
    <rect width="360" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="360" height="30" rx="8" fill="#0284c7" />
    <text x="180" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. GitHub Flow Lifecycle</text>

    <!-- Main trunk -->
    <line x1="25" y1="65" x2="335" y2="65" stroke="#34d399" stroke-width="4" />
    <circle cx="50" cy="65" r="7" fill="#10b981" />
    <circle cx="150" cy="65" r="7" fill="#10b981" />
    <circle cx="310" cy="65" r="7" fill="#10b981" />
    <text x="25" y="52" fill="#34d399" font-size="10" font-family="monospace">main (production deployable)</text>

    <!-- Feature branch line -->
    <path d="M 50 65 Q 90 120 130 120 L 230 120 Q 270 120 310 65" fill="none" stroke="#fbbf24" stroke-width="3" stroke-dasharray="4,4" />
    <circle cx="130" cy="120" r="6" fill="#f59e0b" />
    <circle cx="180" cy="120" r="6" fill="#f59e0b" />
    <circle cx="230" cy="120" r="6" fill="#f59e0b" />
    <text x="130" y="142" fill="#fbbf24" font-size="9" font-family="monospace">feature/login-jwt</text>

    <!-- Flow steps -->
    <rect x="15" y="155" width="330" height="65" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="175" fill="#38bdf8" font-size="9" font-family="sans-serif">• Create descriptive feature branch from main</text>
    <text x="25" y="192" fill="#38bdf8" font-size="9" font-family="sans-serif">• Commit changes and open Pull Request</text>
    <text x="25" y="208" fill="#34d399" font-size="9" font-family="sans-serif">• Pass automated CI &amp; merge back to main</text>
  </g>

  <!-- Right: Branch Protection Ruleset -->
  <g transform="translate(435, 65)">
    <rect width="370" height="235" rx="8" fill="#1e293b" stroke="#ef4444" stroke-width="2" />
    <rect width="370" height="30" rx="8" fill="#dc2626" />
    <text x="185" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Branch Protection Gatekeeper</text>

    <!-- Blocked direct push -->
    <rect x="15" y="45" width="340" height="45" rx="5" fill="#0f172a" stroke="#ef4444" />
    <text x="25" y="65" fill="#f87171" font-size="10" font-family="monospace">git push origin main # REJECTED!</text>
    <text x="25" y="80" fill="#cbd5e1" font-size="9" font-family="sans-serif">Direct pushes and force pushes strictly forbidden</text>

    <!-- Gate Requirements -->
    <rect x="15" y="100" width="340" height="115" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="122" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Required Merge Prerequisites:</text>
    <text x="25" y="142" fill="#cbd5e1" font-size="9" font-family="sans-serif">✔ Require Pull Request with &gt;= 1 approving review</text>
    <text x="25" y="160" fill="#cbd5e1" font-size="9" font-family="sans-serif">✔ Require status checks to pass (GitHub Actions CI)</text>
    <text x="25" y="178" fill="#cbd5e1" font-size="9" font-family="sans-serif">✔ Require signed commits (cryptographic GPG)</text>
    <text x="25" y="196" fill="#38bdf8" font-size="9" font-family="sans-serif">✔ Require linear history (no merge bubbles)</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'github-flow-and-branch-protections-heading',
      text: {
        en: 'GitHub Flow and Enterprise Branch Protection Rulesets',
        bn: 'GitHub Flow এবং এন্টারপ্রাইজ ব্রাঞ্চ প্রটেকশন রুলসেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern continuous deployment environments, complex branching models like GitFlow have been superseded by lightweight methodologies like GitHub Flow and Trunk-Based Development. In GitHub Flow, the "main" branch is always kept in a deployable state. Engineers branch off to implement short-lived features, push commits to remote branches, and open a Pull Request for peer review and automated CI validation. To safeguard critical branches against accidental destruction, administrators enforce Branch Protection Rules. These rules block direct commits, disallow force pushes ("git push --force"), require passing test suites, and mandate peer approvals.',
        bn: 'আধুনিক কন্টিনিউয়াস ডিপ্লয়মেন্ট পদ্ধতিতে জটিল GitFlow-এর পরিবর্তে হালকা ও সাবলীল GitHub Flow এবং ট্রাঙ্ক-ভিত্তিক ডেভেলপমেন্ট ব্যাপকভাবে ব্যবহৃত হচ্ছে। GitHub Flow-তে "main" ব্রাঞ্চ সর্বদা প্রোডাকশন-রেডি রাখা হয়। ডেভেলপাররা মেইন থেকে ছোট ছোট ফিচার ব্রাঞ্চ তৈরি করেন, রিমোট সার্ভারে পুশ করেন এবং সহকর্মীদের রিভিউ ও স্বয়ংক্রিয় CI টেস্টিংয়ের জন্য পুল রিকোয়েস্ট তৈরি করেন। গুরুত্বপূর্ণ ব্রাঞ্চগুলোকে ভুলভ্রান্তি থেকে রক্ষা করতে অ্যাডমিনিস্ট্রেটররা ব্রাঞ্চ প্রটেকশন রুলস কার্যকর করেন। এই নিয়মগুলো সরাসরি পুশ এবং বিপজ্জনক ফোর্স পুশ ("git push --force") সম্পূর্ণ নিষিদ্ধ করে, স্বয়ংক্রিয় টেস্ট পাস বাধ্যতামূলক করে এবং অন্তত একজন সহকর্মীর স্পষ্ট অনুমোদন দাবি করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Git branch pointers, GitHub Flow feature branch creation, and branch protection gatekeeper verification.',
        bn: 'Git ব্রাঞ্চ পয়েন্টার, GitHub Flow ফিচার ব্রাঞ্চ তৈরি এবং ব্রাঞ্চ প্রটেকশন গেটকিপার যাচাইয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Git Branch Pointers and GitHub Branch Protection Rulesets

export interface GitCommit {
  hash: string; // 40-character SHA-1 hash
  message: string;
  author: string;
}

export class GitHubBranchManager {
  private commits: GitCommit[] = [];
  private branches: Map<string, string> = new Map(); // branchName -> commitHash (41 bytes pointer)
  private protectedBranches: Set<string> = new Set(['main']);

  constructor() {
    // Initial root commit
    const rootHash = 'e1a3b4c5d6e7f8a9b0c1d2e3f4a5b6c7d8e9f0a1';
    this.commits.push({ hash: rootHash, message: 'Initial commit', author: 'Lead Architect' });
    this.branches.set('main', rootHash);
  }

  // Simulates "git checkout -b feature/auth" (O(1) pointer creation)
  public createBranch(newBranchName: string, sourceBranch: string = 'main'): string {
    const targetHash = this.branches.get(sourceBranch);
    if (!targetHash) throw new Error('Source branch does not exist: ' + sourceBranch);

    this.branches.set(newBranchName, targetHash);
    return 'Created branch "' + newBranchName + '" pointing to commit ' + targetHash.slice(0, 7);
  }

  // Simulates pushing a commit directly to a branch with Branch Protection checks
  public pushCommit(branchName: string, message: string, author: string, isPullRequestMerge: boolean = false): { success: boolean; log: string } {
    if (this.protectedBranches.has(branchName) && !isPullRequestMerge) {
      // BRANCH PROTECTION RULE: Direct push rejected!
      return {
        success: false,
        log: 'PROTECTION BLOCKED: Direct push to protected branch "' + branchName + '" is forbidden. Must use a Pull Request with CI checks!'
      };
    }

    const newHash = Math.random().toString(16).substring(2, 10) + '00000000000000000000000000000000';
    this.commits.push({ hash: newHash, message, author });
    this.branches.set(branchName, newHash);

    return {
      success: true,
      log: 'Commit accepted on ' + branchName + ' -> ' + newHash.slice(0, 7) + ' (' + message + ')'
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Git Branch Pointer Creation ---');
const repo = new GitHubBranchManager();
const branchLog = repo.createBranch('feature/jwt-auth', 'main');
console.log('Branch Creation Status:', branchLog);

console.log('\n--- 2. Testing Direct Push to Protected Branch (main) ---');
const blockedAttempt = repo.pushCommit('main', 'Hotfix directly on production', 'Junior Dev', false);
console.log('Direct Push Success?:', blockedAttempt.success); // false
console.log('Server Error Message:', blockedAttempt.log);

console.log('\n--- 3. Testing Safe Feature Branch Commit & PR Merge ---');
const featureCommit = repo.pushCommit('feature/jwt-auth', 'Add OAuth2 login endpoints', 'Rahim', false);
console.log('Feature Branch Push:', featureCommit.log);

// Simulating Pull Request Merge with automated CI passing
const prMergeResult = repo.pushCommit('main', 'Merge PR #42: Add OAuth2 login endpoints', 'CI Bot', true);
console.log('PR Merge into main Status:', prMergeResult.log);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Git Branch (Pointer)',
          def: {
            en: 'Lightweight 41-byte mutable pointer referencing a specific 40-character SHA commit hash.',
            bn: '৪১ বাইটের অত্যন্ত হালকা টেক্সট ফাইল যা সুনির্দিষ্ট ৪০ অক্ষরের কমিট হ্যাশকে নির্দেশ করে।'
          }
        },
        {
          term: 'GitHub Flow',
          def: {
            en: 'Lightweight branch-based workflow where main is deployable and short-lived feature branches merge via PRs.',
            bn: 'হালকা ওয়ার্কফ্লো যেখানে মেইন ব্রাঞ্চ সর্বদা রেডি থাকে এবং ফিচার ব্রাঞ্চগুলো পিআরের মাধ্যমে মার্জ হয়।'
          }
        },
        {
          term: 'Trunk-Based Development',
          def: {
            en: 'Engineering practice where developers merge frequent, small commits directly into the central trunk branch.',
            bn: 'পদ্ধতি যেখানে ডেভেলপাররা দিনে একাধিকবার ছোট ছোট পরিবর্তন সরাসরি মূল ট্রাঙ্ক ব্রাঞ্চে মার্জ করেন।'
          }
        },
        {
          term: 'Protected Branches',
          def: {
            en: 'Repository configuration enforcing CI checks, review approvals, and blocking direct pushes on critical branches.',
            bn: 'কনফিগারেশন যা সরাসরি কোড পুশ বন্ধ রেখে রিভিউ এবং টেস্ট পাস বাধ্যতামূলক করে ব্রাঞ্চ সুরক্ষিত রাখে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'git-branch-pointer-size-ex1',
      kind: 'mcq',
      topic: 'git-branch-internal-pointer-size',
      question: {
        en: 'Why is creating a Git branch using "git checkout -b new-feature" instantaneous in comparison to older centralized VCS systems?',
        bn: 'পুরোনো সেন্ট্রালাইজড ভার্সন কন্ট্রোল সিস্টেমের তুলনায় Git-এ "git checkout -b new-feature" দিয়ে ব্রাঞ্চ তৈরি কেন চোখের পলকে সম্পন্ন হয়?'
      },
      options: [
        {
          en: 'A Git branch is merely a 41-byte text file storing a 40-character commit hash pointer, requiring zero copying of the actual source files',
          bn: 'একটি Git ব্রাঞ্চ কেবল ৪১ বাইটের একটি সাধারণ টেক্সট ফাইল যা ৪০ অক্ষরের কমিট হ্যাশ পয়েন্টার ধারণ করে, এতে কোনো ফাইল কপি করার প্রয়োজন হয় না'
        },
        {
          en: 'Git uses satellite microwave connections to download branches',
          bn: 'Git স্যাটেলাইট সংযোগ ব্যবহার করে ব্রাঞ্চ ডাউনলোড করে'
        },
        {
          en: 'Git deletes older files to free up disk space for the new branch',
          bn: 'নতুন ব্রাঞ্চের জায়গা করতে Git পুরোনো ফাইলগুলো মুছে ফেলে'
        },
        {
          en: 'Branches can only be created when connected to the internet',
          bn: 'ব্রাঞ্চ কেবল ইন্টারনেট সংযোগ থাকলেই তৈরি করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'A branch is just a pointer file inside .git/refs/heads/.',
        bn: 'কোনো ফাইল ডুপ্লিকেট না করে শুধু একটি নির্দেশক ফাইল তৈরি করা হয়।'
      },
      explanation: {
        en: 'In Git, branches are references pointing to commit objects. Creating a branch simply writes a 41-byte reference file into ".git/refs/heads/", executing in O(1) time.',
        bn: 'এর ফলে প্রজেক্টের আকার যত বড়ই হোক না কেন, মুহূর্তের মধ্যে নতুন ব্রাঞ্চ তৈরি করা সম্ভব।'
      }
    },
    {
      id: 'branch-protection-rules-force-push-ex2',
      kind: 'mcq',
      topic: 'github-branch-protection-force-push-prevention',
      question: {
        en: 'What catastrophic operational mistake does enabling "Do not allow force pushes" on the main branch prevent in enterprise software repositories?',
        bn: 'এন্টারপ্রাইজ রিপোজিটরির মেইন ব্রাঞ্চে "Do not allow force pushes" চালু রাখলে কোন মারাত্মক পরিচালনাগত দুর্ঘটনা প্রতিহত হয়?'
      },
      options: [
        {
          en: 'It prevents an engineer from accidentally rewriting commit history using "git push --force", which would wipe out teammates\' merged commits and destroy production history',
          bn: 'এটি কোনো ইঞ্জিনিয়ারকে ভুলবশত "git push --force" দিয়ে ইতিহাস বদলে সহকর্মীদের মার্জ করা কোড মুছে ফেলা এবং প্রোডাকশন হিস্ট্রি ধ্বংস করা থেকে রক্ষা করে'
        },
        {
          en: 'It stops the computer battery from overheating during long builds',
          bn: 'এটি বিল্ড চলাকালীন কম্পিউটারের ব্যাটারি অতিরিক্ত গরম হওয়া রোধ করে'
        },
        {
          en: 'It forces developers to type commit messages in Latin only',
          bn: 'এটি ডেভেলপারদের কেবল ল্যাটিন ভাষায় কমিট মেসেজ লিখতে বাধ্য করে'
        },
        {
          en: 'Force push was deprecated in Git 2.0',
          bn: 'Git ২.০ সংস্করণে ফোর্স পুশ সম্পূর্ণ বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Force pushing rewrites remote history and can destroy committed work.',
        bn: 'ফোর্স পুশ রিমোটের সমস্ত ইতিহাস বদলে ফেলে অন্য সবার কাজ নষ্ট করে দিতে পারে।'
      },
      explanation: {
        en: 'A force push overwrites the remote branch pointer unconditionally. Disallowing force pushes on main protects the authoritative project history from irreversible deletion.',
        bn: 'মেইন ব্রাঞ্চে এটি নিষিদ্ধ থাকলে কেউ দুর্ঘটনাবশতও প্রোডাকশন কোডের ইতিহাস মুছে ফেলতে পারে না।'
      }
    },
    {
      id: 'github-flow-main-deployability-ex3',
      kind: 'mcq',
      topic: 'github-flow-always-deployable-main',
      question: {
        en: 'What is the foundational golden rule of the "GitHub Flow" branching strategy?',
        bn: '"GitHub Flow" ব্রাঞ্চিং কৌশলের সবচেয়ে মৌলিক এবং প্রধান মূলনীতি কোনটি?'
      },
      options: [
        {
          en: 'Anything in the "main" branch is always production-ready, fully tested, and deployable at any moment',
          bn: '"main" ব্রাঞ্চের যেকোনো কোড সর্বদা প্রোডাকশন-রেডি, সম্পূর্ণ টেস্টে উত্তীর্ণ এবং যেকোনো মুহূর্তে ডিপ্লয়যোগ্য'
        },
        {
          en: 'Branches must never be merged back into main under any circumstances',
          bn: 'কোনো অবস্থাতেই কোনো ব্রাঞ্চ মেইনে মার্জ করা যাবে না'
        },
        {
          en: 'Developers must create 100 branches every single day',
          bn: 'ডেভেলপারদের প্রতিদিন অবশ্যই ১০০টি করে ব্রাঞ্চ তৈরি করতে হবে'
        },
        {
          en: 'Pull requests are completely forbidden in GitHub Flow',
          bn: 'GitHub Flow-তে পুল রিকোয়েস্ট ব্যবহার সম্পূর্ণ নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'In GitHub Flow, main is always deployable to production.',
        bn: 'মেইন ব্রাঞ্চকে সর্বদা সুরক্ষিত ও চালুর উপযোগী রাখাই এই পদ্ধতির মূল দাবি।'
      },
      explanation: {
        en: 'GitHub Flow is centered on continuous delivery: the main branch is always green and ready for production, with experimental work strictly confined to short-lived feature branches.',
        bn: 'এর ফলে যেকোনো সময় আত্মবিশ্বাসের সাথে মেইন ব্রাঞ্চ থেকে সরাসরি প্রোডাকশনে রিলিজ দেওয়া যায়।'
      }
    },
    {
      id: 'github-rulesets-vs-legacy-rules-ex4',
      kind: 'mcq',
      topic: 'github-repository-rulesets-centralized-governance',
      question: {
        en: 'How do modern "GitHub Repository Rulesets" improve multi-repository governance compared to legacy branch protection rules?',
        bn: 'পুরোনো ব্রাঞ্চ প্রটেকশনের তুলনায় আধুনিক "GitHub Repository Rulesets" কীভাবে একাধিক রিপোজিটরির নিরাপত্তা শাসন উন্নত করে?'
      },
      options: [
        {
          en: 'Rulesets allow organization administrators to define centralized branch and tag protection policies applied across hundreds of repositories simultaneously with dry-run evaluation modes',
          bn: 'রুলসেট প্রতিষ্ঠানের অ্যাডমিনিস্ট্রেটরদের একসাথে শত শত রিপোজিটরিতে কেন্দ্রীয় ব্রাঞ্চ ও ট্যাগ সুরক্ষা নীতি প্রয়োগের সুযোগ দেয় এবং পরীক্ষামূলক মূল্যায়ন সমর্থন করে'
        },
        {
          en: 'Rulesets convert all repositories into static PDF archives',
          bn: 'রুলসেট সমস্ত রিপোজিটরিকে স্ট্যাটিক পিডিএফ ফাইলে রূপান্তর করে'
        },
        {
          en: 'Rulesets require developers to physically scan their fingerprints at the office',
          bn: 'রুলসেট ডেভেলপারদের অফিসে গিয়ে আঙুলের ছাপ দিতে বাধ্য করে'
        },
        {
          en: 'Rulesets can only be created using the Python programming language',
          bn: 'রুলসেট কেবল পাইথন প্রোগ্রামিং ভাষা দিয়েই তৈরি করা সম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Rulesets provide centralized policy enforcement across multiple repositories.',
        bn: 'প্রতিটি রিপোজিটরিতে আলাদা কনফিগারেশন না করে পুরো অর্গানাইজেশনে এক নিয়মে শাসনের আধুনিক ব্যবস্থা।'
      },
      explanation: {
        en: 'GitHub Rulesets scale governance by allowing organizational policies (like requiring signed commits or linear history) to target groups of repositories automatically.',
        bn: 'এর মাধ্যমে শত শত প্রজেক্টে একই মানের উচ্চ নিরাপত্তা এক ক্লিকেই নিশ্চিত করা যায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-branchs-and-the-branch',
    title: {
      en: 'GitHub Branching & Protection Quiz',
      bn: 'GitHub ব্রাঞ্চিং এবং সুরক্ষা কুইজ'
    },
    questions: [
      {
        id: 'quiz-git-head-detached-state',
        kind: 'mcq',
        topic: 'git-head-detached-state-mechanics',
        question: {
          en: 'What does it mean when Git displays the message "You are in \'detached HEAD\' state"?',
          bn: 'Git যখন "You are in \'detached HEAD\' state" মেসেজ প্রদর্শন করে তখন তার প্রকৃত অর্থ কী?'
        },
        options: [
          {
            en: 'HEAD points directly to a specific commit hash rather than pointing to a named branch pointer, meaning new commits made will not belong to any branch unless a new branch is created',
            bn: 'HEAD কোনো নির্দিষ্ট ব্রাঞ্চের পয়েন্টারকে নির্দেশ না করে সরাসরি একটি কমিট হ্যাশকে নির্দেশ করছে, ফলে নতুন ব্রাঞ্চ তৈরি না করলে করা কমিটগুলো কোনো ব্রাঞ্চের অন্তর্ভুক্ত হবে না'
          },
          {
            en: 'The computer display monitor has been disconnected from the server',
            bn: 'কম্পিউটারের ডিসপ্লে মনিটর সার্ভার থেকে বিচ্ছিন্ন হয়ে গেছে'
          },
          {
            en: 'The Git repository has been permanently corrupted beyond repair',
            bn: 'Git রিপোজিটরি চিরতরে ধ্বংস হয়ে গেছে যা আর উদ্ধার করা সম্ভব নয়'
          },
          {
            en: 'Detached HEAD was removed in Git 2.30',
            bn: 'Git ২.৩০ সংস্করণে Detached HEAD সম্পূর্ণ বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Detached HEAD means you checked out a commit, not a branch.',
          bn: 'ব্রাঞ্চের নাম না দিয়ে সরাসরি পুরোনো কোনো কমিট নম্বর দেখার সময় এই অবস্থা তৈরি হয়।'
        },
        explanation: {
          en: 'Normally HEAD points to a branch ref. In detached HEAD, HEAD points directly to a commit SHA. Any new commits will be orphaned by garbage collection unless given a branch name.',
          bn: 'এই অবস্থায় কাজ করতে চাইলে "git switch -c new-branch" দিয়ে নতুন ব্রাঞ্চ বানিয়ে নেওয়া নিরাপদ।'
        }
      },
      {
        id: 'quiz-linear-history-requirement',
        kind: 'mcq',
        topic: 'github-require-linear-history-rule',
        question: {
          en: 'Why do high-velocity continuous integration teams enforce the "Require linear history" branch protection rule?',
          bn: 'উচ্চগতির কন্টিনিউয়াস ইন্টিগ্রেশন টিমগুলো কেন "Require linear history" ব্রাঞ্চ প্রটেকশন নিয়মটি বাধ্যতামূলক করে?'
        },
        options: [
          {
            en: 'It disallows 2-parent 3-way merge commits, ensuring the main branch history forms a clean, straight line of atomic commits that are easy to bisect, trace, and revert',
            bn: 'এটি জটিল ২-প্যারেন্ট মার্জ কমিট নিষিদ্ধ করে মেইন ব্রাঞ্চের ইতিহাসকে একটি সরল ও পরিষ্কার লিনিয়ার ধারায় রাখে, যা ডিবাগ ও রিভার্ট করা অত্যন্ত সহজ করে তোলে'
          },
          {
            en: 'It accelerates internet Wi-Fi download bandwidth by 50 percent',
            bn: 'এটি ইন্টারনেট ওয়াই-ফাই ডাউনলোডের গতি ৫০ শতাংশ বৃদ্ধি করে'
          },
          {
            en: 'It prevents developers from using laptops during deployments',
            bn: 'ডিপ্লয়মেন্ট চলাকালীন ডেভেলপারদের ল্যাপটপ ব্যবহার করা নিষিদ্ধ করে'
          },
          {
            en: 'Linear history is strictly forbidden in open-source projects',
            bn: 'ওপেন-সোর্স প্রজেক্টে লিনিয়ার হিস্ট্রি ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Linear history eliminates messy merge commit bubbles.',
          bn: 'জটিল মার্জ বাবল এড়িয়ে কমিট হিস্ট্রিকে এক সুতোয় গাঁথার চমৎকার নিয়ম।'
        },
        explanation: {
          en: 'Linear history mandates Squash and Merge or Rebase workflows, creating a single unbroken timeline that makes tools like "git bisect" 100% reliable for finding bugs.',
          bn: 'এর ফলে কোনো বাগ ধরা পড়লে সহজেই কোন কমিটটি দায়ী তা নিমেষে চিহ্নিত করা যায়।'
        }
      },
      {
        id: 'quiz-signed-commits-gpg-ssh',
        kind: 'mcq',
        topic: 'github-require-signed-commits-verification',
        question: {
          en: 'What security attack vector does requiring cryptographically signed commits (GPG or SSH keys) eliminate on GitHub?',
          bn: 'GitHub-এ ক্রিপ্টোগ্রাফিকভাবে সাইন করা কমিট (GPG বা SSH কি) বাধ্যতামূলক করলে কোন নিরাপত্তা ঝুঁকি দূর হয়?'
        },
        options: [
          {
            en: 'Commit author spoofing: preventing an attacker from configuring their local git user.name and user.email to impersonate a trusted senior engineer or project maintainer',
            bn: 'কমিট লেখক ভেকধারী প্রতারণা: আক্রমণকারী যেন লোকাল গিটের নাম ও ইমেইল বদলে কোনো সিনিয়র ইঞ্জিনিয়ার বা মেইনটেইনারের পরিচয় নকল করতে না পারে তা প্রতিরোধ করা'
          },
          {
            en: 'SQL injection attacks in web search input fields',
            bn: 'ওয়েব সার্চ ইনপুটে এসকিউএল ইনজেকশন আক্রমণ'
          },
          {
            en: 'Hardware power supply failures in data center servers',
            bn: 'ডেটা সেন্টারের সার্ভারে পাওয়ার সাপ্লাইয়ের ত্রুটি'
          },
          {
            en: 'Signed commits were deprecated in favor of passwords in 2023',
            bn: '২০২৩ সালে পাসওয়ার্ডের পক্ষে সাইন করা কমিট বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Anyone can type any name in git config; cryptographic signatures prove genuine author identity.',
          bn: 'গিটে যে কেউ যেকোনো নাম ও ইমেইল লিখে ধোঁকা দিতে পারে, যা ডিজিটাল সই দিয়ে পুরোপুরি ঠেকানো যায়।'
        },
        explanation: {
          en: 'Git does not verify author email addresses by default. Signing commits with private GPG or SSH keys gives GitHub cryptographic proof of author identity, displaying the "Verified" badge.',
          bn: 'GitHub এই ডিজিটাল সই মিলিয়ে দেখে তবেই সবুজ "Verified" ব্যাজ প্রদর্শন করে।'
        }
      },
      {
        id: 'quiz-trunk-based-development-feature-flags',
        kind: 'mcq',
        topic: 'trunk-based-development-feature-flags-decoupling',
        question: {
          en: 'How does Trunk-Based Development allow developers to merge unfinished code directly into main without exposing incomplete features to end users?',
          bn: 'অসম্পূর্ণ ফিচার ব্যবহারকারীর সামনে প্রকাশ না করেও কীভাবে ট্রাঙ্ক-ভিত্তিক ডেভেলপমেন্ট ডেভেলপারদের সরাসরি মেইনে কোড মার্জ করতে দেয়?'
        },
        options: [
          {
            en: 'By wrapping new logic behind runtime Feature Flags (toggles), allowing code to be continuously integrated and deployed while keeping the feature invisible until enabled',
            bn: 'রানটাইম ফিচার ফ্ল্যাগ (টগল) দিয়ে নতুন কোড ঢেকে রেখে, ফলে কোড প্রতিনিয়ত ইন্টিগ্রেট ও ডিপ্লয় হলেও চালু করার আগ পর্যন্ত ব্যবহারকারীর কাছে অদৃশ্য থাকে'
          },
          {
            en: 'By compiling the code into secret encrypted files on GitHub servers',
            bn: 'GitHub সার্ভারে কোডটিকে গোপন এনক্রিপ্টেড ফাইলে কম্পাইল করে রেখে'
          },
          {
            en: 'By deleting the database whenever unfinished code is merged',
            bn: 'অসম্পূর্ণ কোড মার্জ হলেই ডেটাবেস সম্পূর্ণ মুছে ফেলার মাধ্যমে'
          },
          {
            en: 'Feature flags are prohibited in trunk-based engineering',
            bn: 'ট্রাঙ্ক-ভিত্তিক ইঞ্জিনিয়ারিংয়ে ফিচার ফ্ল্যাগ ব্যবহার নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Feature flags decouple software deployment from software release.',
          bn: 'কোড সার্ভারে তুলে দেওয়া এবং ব্যবহারকারীর জন্য চালু করা—এই দুই কাজকে আলাদা করার কৌশল।'
        },
        explanation: {
          en: 'Feature flags separate deployment (shipping code) from release (enabling user visibility). This allows teams to practice trunk-based development with zero merge conflicts.',
          bn: 'এর মাধ্যমে বড় ব্রাঞ্চের মারাত্মক মার্জ সংঘর্ষ এড়িয়ে নিরাপদে প্রতিদিন শতবার কোড ডিপ্লয় করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'repos-and-the-repo',
    title: {
      en: 'Repository Architecture: Remotes, Forks, Clones & Git LFS',
      bn: 'রিপোজিটরি আর্কিটেকচার: রিমোট, ফর্ক, ক্লোন এবং Git LFS'
    }
  }
};
