import type { Lesson } from '../../../lib/types';

export const remoteTidesLesson: Lesson = {
  slug: 'the-remote-tides',
  tech: 'git',
  title: {
    en: 'Git Remotes: Fetch, Pull, Push, Tracking & Upstream Workflows',
    bn: 'গিট রিমোট: ফেচ, পুল, পুশ, ট্র্যাকিং ও আপস্ট্রিম কর্মপ্রবাহ'
  },
  summary: {
    en: 'Master distributed Git synchronization across 10 structured topics. Understand distributed architecture, git remote add origin, git clone, and SSH authentication. Explore git fetch vs git pull, upstream tracking branches (-u), safe force-pushing with --force-with-lease, remote branch deletion, git fetch --prune, and upstream fork workflows.',
    bn: '১০টি সুসংগঠিত পয়েন্টে রিমোট গিট সিঙ্কিং আয়ত্ত করুন। ডিস্ট্রিবিউটেড স্থাপত্য, git remote add origin, git clone এবং SSH প্রমাণীকরণ বুঝুন। git fetch বনাম git pull, আপস্ট্রিম ট্র্যাকিং (-u), --force-with-lease দিয়ে নিরাপদ ফোর্স পুশ, রিমোট ব্রাঞ্চ মোছা, git fetch --prune দিয়ে মৃত রেফারেন্স ছাঁটাই এবং ফর্ক কর্মপ্রবাহ আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-history-atelier',
    title: { en: 'Git History & Inspection: Log, Show, Blame, Bisect & Reflog', bn: 'গিট ইতিহাস ও পরিদর্শন: Log, Show, Blame, Bisect ও Reflog' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Distributed Architecture: Autonomous Repositories', bn: '১. ডিস্ট্রিবিউটেড স্থাপত্য: স্বায়ত্তশাসিত সম্পূর্ণ রিপোজিটরি' } },
    {
      type: 'para',
      text: {
        en: 'Unlike centralized version control systems (SVN) where everything lives on a single server, Git is Distributed. Every developer’s computer hosts a complete, autonomous clone of the entire repository history. You can commit, branch, diff, and inspect logs offline without any internet connection.',
        bn: 'কেন্দ্রীভূত সিস্টেমের (যেমন SVN) মতো না হয়ে গিট হলো সম্পূর্ণ ডিস্ট্রিবিউটেড। প্রতিটি ডেভেলপারের কম্পিউটারে পুরো প্রজেক্টের শুরু থেকে শেষ পর্যন্ত সম্পূর্ণ ইতিহাসের নিজস্ব একটি ক্লোন থাকে। ফলে ইন্টারনেট সংযোগ ছাড়াই আপনি লোকাল মেশিনে ব্রাঞ্চ তৈরি, কমিট ও কোডের ইতিহাস দেখতে পারেন।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Git Remote Synchronization Architecture',
        bn: 'গিট রিমোট সিঙ্ক্রোনাইজেশন স্থাপত্য'
      },
      caption: {
        en: 'git fetch safely updates remote-tracking references, while git pull downloads and merges in one step.',
        bn: 'git fetch নিরাপদে রিমোট রেফারেন্স আপডেট করে, আর git pull এক পদক্ষেপে ডেটা নামিয়ে মার্জ করে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Local Branch -->
  <rect x="25" y="40" width="170" height="70" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="110" y="65" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">Local Branch</text>
  <text x="110" y="85" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">refs/heads/main</text>
  <!-- Arrow merge -->
  <path d="M 270 65 L 205 65" stroke="#38bdf8" stroke-width="2"/>
  <text x="238" y="55" text-anchor="middle" fill="#38bdf8" font-size="10" font-family="monospace">merge</text>
  <!-- Remote-Tracking Branch -->
  <rect x="280" y="40" width="180" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="370" y="65" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Remote-Tracking</text>
  <text x="370" y="85" text-anchor="middle" fill="#94a3b8" font-size="11" font-family="monospace">origin/main (Cached)</text>
  <!-- Arrow fetch -->
  <path d="M 525 65 L 470 65" stroke="#a855f7" stroke-width="2"/>
  <text x="498" y="55" text-anchor="middle" fill="#c084fc" font-size="10" font-family="monospace">fetch</text>
  <!-- Remote Server -->
  <rect x="535" y="40" width="120" height="70" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="595" y="65" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">Remote</text>
  <text x="595" y="85" text-anchor="middle" fill="#cbd5e1" font-size="11" font-family="monospace">GitHub</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Offline autonomy: Full commit history exists inside your local machine!
git log --oneline -n 3

# Output:
# 4f11a80 (HEAD -> main) Merge branch 'feat/scaling'
# e5d89f0 fix: patch security vulnerability
# 3b41fa8 Initial repository commit
# Result: Instant log resolution without touching external network interfaces`,
      caption: {
        en: 'Every clone contains the complete historical graph, enabling offline development.',
        bn: 'প্রতিটি ক্লোনে সম্পূর্ণ ইতিহাস সংরক্ষিত থাকায় অফলাইনেও নির্বিঘ্নে কাজ করা যায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Linking Remotes: git remote add origin and -v Inspection', bn: '২. রিমোট সংযোগ: git remote add origin ও -v দিয়ে নিরীক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'A Remote is a named alias pointing to a repository hosted on another network location (GitHub, GitLab). By convention, the primary remote is named origin. Running git remote -v displays the configured fetch and push URL targets.',
        bn: 'রিমোট হলো কোনো অনলাইন সার্ভারে (যেমন GitHub বা GitLab) থাকা রিপোজিটরির সংক্ষিপ্ত ডাকনাম। বিশ্বব্যাপী নিয়ম অনুসারে প্রধান রিমোটটির নাম দেওয়া হয় origin। git remote -v কমান্ড দিলে ডেটা নামানো (fetch) এবং পাঠানোর (push) জন্য নির্ধারিত আসল লিংকগুলো দেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Link a local repository to GitHub:
git remote add origin git@github.com:codeshikhon/platform.git

# 2. Inspect active remote endpoints:
git remote -v

# Output:
# origin  git@github.com:codeshikhon/platform.git (fetch)
# origin  git@github.com:codeshikhon/platform.git (push)
# Result: Local repository connected to cloud origin repository`,
      caption: {
        en: 'git remote -v verifies configured transport endpoints for push and fetch operations.',
        bn: 'git remote -v পুশ ও ফেচের জন্য নির্ধারিত রিমোট লিংকগুলো প্রদর্শন করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Cloning Codebases: git clone and Automatic Tracking', bn: '৩. কোডবেস ক্লোন: git clone ও স্বয়ংক্রিয় ট্র্যাকিং' } },
    {
      type: 'para',
      text: {
        en: 'When onboarding to an existing project, git clone downloads the entire repository, initializes a .git directory, creates a remote named origin pointing to that URL, checks out the default branch (main), and establishes local tracking.',
        bn: 'বিদ্যমান কোনো প্রোজেক্টে কাজ শুরু করতে git clone কমান্ড দিলে তা পুরো কোড ডাউনলোড করে, .git ফোল্ডার তৈরি করে, স্বয়ংক্রিয়ভাবে origin রিমোট যুক্ত করে এবং ডিফল্ট মেইন ব্রাঞ্চে আপনাকে নিয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Clone existing repository into local folder:
git clone git@github.com:codeshikhon/api-service.git

# Output:
# Cloning into 'api-service'...
# remote: Enumerating objects: 1240, done.
# remote: Counting objects: 100% (1240/1240), done.
# Receiving objects: 100% (1240/1240), 1.84 MiB | 4.20 MiB/s, done.
# Resolving deltas: 100% (812/812), done.
# Result: Full working tree checked out with tracking branch origin/main established`,
      caption: {
        en: 'git clone establishes local repository mirrors with upstream tracking pre-configured.',
        bn: 'git clone রিমোটের পুরো কপি নামিয়ে লোকাল ট্র্যাকিং সহ কোড রেডি করে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Authentication Security: SSH Keys vs Personal Access Tokens', bn: '৪. প্রমাণীকরণ নিরাপত্তা: SSH কি বনাম পার্সোনাল অ্যাক্সেস টোকেন (PAT)' } },
    {
      type: 'para',
      text: {
        en: 'Modern Git platforms strictly prohibit raw account passwords. Developers authenticate using either cryptographic SSH Public/Private Key pairs (ed25519) or scoped Personal Access Tokens (PATs) over HTTPS, preventing credentials from being exposed in plaintext.',
        bn: 'আধুনিক গিট প্ল্যাটফর্মে সাধারণ পাসওয়ার্ড ব্যবহার নিষিদ্ধ। নিরাপত্তার জন্য ডেভেলপাররা ক্রিপ্টোগ্রাফিক SSH Key পেয়ার (ed25519) অথবা নির্দিষ্ট মেয়াদের Personal Access Token (PAT) ব্যবহার করেন, যা পাসওয়ার্ড ফাঁসের ঝুঁকি চিরতরে বন্ধ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Generate high-security Ed25519 SSH keypair:
ssh-keygen -t ed25519 -C "dev@codeshikhon.com"

# View public key to add to GitHub Settings -> SSH Keys:
cat ~/.ssh/id_ed25519.pub
# Output:
# ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI... dev@codeshikhon.com

# Test secure handshake:
ssh -T git@github.com
# Output: Hi dev! You've successfully authenticated, but GitHub does not provide shell access.`,
      caption: {
        en: 'SSH authentication uses asymmetric public-key cryptography to secure Git traffic.',
        bn: 'SSH প্রমাণীকরণ পাবলিক-কি ক্রিপ্টোগ্রাফি দিয়ে গিট ডেটা নিরাপদ রাখে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. git fetch vs git pull: Safe Inspection vs Automatic Merging', bn: '৫. git fetch বনাম git pull: নিরাপদ নিরীক্ষণ বনাম স্বয়ংক্রিয় মার্জ' } },
    {
      type: 'para',
      text: {
        en: 'Never confuse fetch and pull! git fetch downloads new commits from the remote into your local remote-tracking branches (origin/main) WITHOUT touching your working files. git pull is a composite command: it runs git fetch, and then immediately runs git merge, which can trigger unexpected merge conflicts mid-work.',
        bn: 'fetch এবং pull কখনোই এক নয়! git fetch রিমোটের সব নতুন কমিট নামিয়ে এনে লোকাল ট্র্যাকিং ব্রাঞ্চে (origin/main) রাখে, কিন্তু আপনার কাজের ফাইলে হাত দেয় না। আর git pull হলো দুটি কমান্ডের সমষ্টি: এটি প্রথমে fetch করে এবং সাথে সাথেই git merge চালিয়ে দেয়, যা কাজের মাঝে অনাকাঙ্ক্ষিত কনফ্লিক্ট তৈরি করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. SAFE: Download latest commits without disrupting working code
git fetch origin

# Compare what teammates pushed before merging:
git log HEAD..origin/main --oneline
# Output:
# 8b201f1 feat(billing): add stripe tax calculation
# (You can review changes cleanly before deciding to integrate!)

# 2. Integrate downloaded changes:
git merge origin/main

# (Or execute both steps combined using git pull):
# git pull origin main`,
      caption: {
        en: 'git fetch is 100% non-destructive; git pull immediately triggers a merge.',
        bn: 'git fetch ১০০% নিরাপদ ও অহিংস; git pull সাথে সাথে মার্জ শুরু করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Upstream Tracking Branches: git push -u', bn: '৬. আপস্ট্রিম ট্র্যাকিং ব্রাঞ্চ: git push -u ফ্ল্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'When pushing a new local branch for the first time, Git requires establishing an upstream tracking relationship. Adding the -u (or --set-upstream) flag links your local branch to origin/branch_name. Once set, future updates require only typing bare git push or git pull.',
        bn: 'নতুন কোনো লোকাল ব্রাঞ্চ প্রথমবার পুশ করার সময় গিট জানতে চায় রিমোটের কোন ব্রাঞ্চের সাথে এটি যুক্ত থাকবে। -u (বা --set-upstream) ফ্ল্যাগ দিলে আপনার লোকাল ব্রাঞ্চটি origin/branch_name-এর সাথে স্থায়ীভাবে লিঙ্ক হয়ে যায়। এরপর থেকে কেবল git push বা git pull লিখলেই ডেটা আদান-প্রদান হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# First push: Establish upstream relationship with -u
git push -u origin feat/order-tracking

# Output:
# Total 3 (delta 1), reused 0 (delta 0), pack-reused 0
# To github.com:codeshikhon/platform.git
#  * [new branch]      feat/order-tracking -> feat/order-tracking
# branch 'feat/order-tracking' set up to track 'origin/feat/order-tracking'.

# Subsequent synchronization:
git push # No arguments needed; upstream is configured!`,
      caption: {
        en: 'The -u flag binds local branches to remote counterparts for shorthand push/pull.',
        bn: '-u ফ্ল্যাগ লোকাল ব্রাঞ্চের সাথে রিমোটকে বেঁধে দেয় যাতে সহজে পুশ/পুল করা যায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Safe Force Pushing: --force-with-lease vs --force', bn: '৭. নিরাপদ ফোর্স পুশ: --force-with-lease বনাম --force' } },
    {
      type: 'para',
      text: {
        en: 'After rebasing a feature branch, Git rejects standard git push because histories diverge. Using destructive git push --force blindly overwrites the remote, erasing commits pushed by teammates. The professional alternative git push --force-with-lease verifies the remote has not received new commits since your last fetch before forcing.',
        bn: 'ফিচার ব্রাঞ্চ রিব্যাস করার পর সাধারণ পুশ আটকে যায়। তখন অন্ধের মতো git push --force দিলে সহকর্মীদের পুশ করা নতুন কাজ চিরতরে মুছে যেতে পারে। এর নিরাপদ সমাধান হলো git push --force-with-lease: এটি যাচাই করে আপনার শেষ ফেচের পর কেউ নতুন কোড দিয়েছে কি না; কেউ কোড দিয়ে থাকলে এটি পুশ আটকে দিয়ে ডেটা রক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# ❌ DANGEROUS: Blindly obliterates teammates' pushed work
# git push --force origin feat/auth

# ✅ PROFESSIONAL: Only forces if remote matches your last known snapshot
git push --force-with-lease origin feat/auth

# If teammate pushed in the meantime:
# Output:
# error: failed to push some refs to 'github.com:codeshikhon/platform.git'
# hint: Updates were rejected because remote contains work that you do not have.
# Result: Teammates' commits saved from catastrophic deletion!`,
      caption: {
        en: '--force-with-lease guarantees you do not overwrite colleagues’ unseen commits.',
        bn: '--force-with-lease নিশ্চিত করে যেন সহকর্মীদের কোনো কাজ দুর্ঘটনাবশত মুছে না যায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Remote Housekeeping: Deleting Remote Branches', bn: '৮. রিমোট ব্রাঞ্চ মোছা: git push origin --delete' } },
    {
      type: 'para',
      text: {
        en: 'Merging a Pull Request on GitHub leaves the remote branch lingering. To clean up the remote server, use git push origin --delete branch_name. This removes the branch pointer from GitHub without deleting local developer copies.',
        bn: 'GitHub-এ পুল রিকোয়েস্ট মার্জ হয়ে যাওয়ার পর সার্ভারে অপ্রয়োজনীয় ব্রাঞ্চ জমে থাকে। রিমোট সার্ভার পরিষ্কার করতে git push origin --delete branch_name কমান্ড দেওয়া হয়। এটি GitHub থেকে ব্রাঞ্চটি মুছে দেয় কিন্তু কারও লোকাল কম্পিউটারের কোড নষ্ট করে না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Delete obsolete remote feature branch:
git push origin --delete feat/order-tracking

# Output:
# To github.com:codeshikhon/platform.git
#  - [deleted]         feat/order-tracking
# Result: Remote cloud repository kept clean and decluttered`,
      caption: {
        en: 'Deleting remote branches after merging keeps repository navigability clean.',
        bn: 'মার্জের পর রিমোট ব্রাঞ্চ মুছে ফেললে রিপোজিটরি পরিষ্কার ও সুশৃঙ্খল থাকে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Pruning Stale Pointers: git fetch --prune', bn: '৯. মৃত রেফারেন্স ছাঁটাই: git fetch --prune' } },
    {
      type: 'para',
      text: {
        en: 'When a teammate deletes a branch on GitHub, your local repository still retains a ghost tracking pointer (origin/feat-name). Running git fetch --prune scans the remote and purges all local remote-tracking pointers for branches that no longer exist on the server.',
        bn: 'যখন কোনো সহকর্মী GitHub থেকে একটি ব্রাঞ্চ মুছে দেন, আপনার কম্পিউটারে তার একটি মৃত ভুতুড়ে রেফারেন্স (origin/feat-name) থেকেই যায়। git fetch --prune কমান্ড দিলে গিট সার্ভার পরীক্ষা করে এবং সার্ভার থেকে মুছে যাওয়া ব্রাঞ্চগুলোর লোকাল রেফারেন্স তাৎক্ষণিকভাবে মুছে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Prune dead remote references:
git fetch --prune

# Output:
# From github.com:codeshikhon/platform
#  - [deleted]         (none)     -> origin/feat/order-tracking
#  - [deleted]         (none)     -> origin/feat/payment-legacy
# Result: Dead local remote-tracking branches purged cleanly`,
      caption: {
        en: 'git fetch --prune synchronizes local tracking references with server deletions.',
        bn: 'git fetch --prune সার্ভারে মুছে যাওয়া ব্রাঞ্চের লোকাল রেকর্ড পরিষ্কার করে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Open Source Multi-Remote Workflows: origin vs upstream', bn: '১০. ওপেন সোর্স মাল্টি-রিমোট কর্মপ্রবাহ: origin বনাম upstream' } },
    {
      type: 'para',
      text: {
        en: 'In open-source contribution, you do not have write access to the central repository. You Fork the project to your personal GitHub, clone your fork (origin), and configure an upstream remote pointing to the official parent repository. You fetch from upstream to stay up-to-date and push to origin to submit Pull Requests.',
        bn: 'ওপেন সোর্স প্রজেক্টে মূল রিপোজিটরিতে সরাসরি কোড লেখার অনুমতি থাকে না। তাই প্রথমে প্রজেক্টটি নিজের অ্যাকাউন্টে Fork করতে হয়, নিজের ফর্ক ক্লোন করতে হয় (origin), এবং মূল অফিশিয়াল প্রজেক্টকে upstream নামে দ্বিতীয় রিমোট হিসেবে যুক্ত করতে হয়। এরপর upstream থেকে নতুন আপডেট নামিয়ে নিজের origin-এ পুশ করে Pull Request পাঠানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Clone your personal fork (origin):
git clone git@github.com:my-username/open-source-project.git

# 2. Add the official upstream repository:
git remote add upstream git@github.com:official-org/open-source-project.git

# 3. Verify multi-remote setup:
git remote -v
# Output:
# origin    git@github.com:my-username/open-source-project.git (fetch & push)
# upstream  git@github.com:official-org/open-source-project.git (fetch & push)

# 4. Sync your fork with official changes:
git fetch upstream
git merge upstream/main
git push origin main
# Result: Personal fork synchronized with official upstream development`,
      caption: {
        en: 'The fork workflow coordinates two remotes: personal origin and official upstream.',
        bn: 'ফর্ক কর্মপ্রবাহে দুটি রিমোট থাকে: ব্যক্তিগত origin এবং অফিশিয়াল upstream।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-rem-ex1',
      kind: 'predict',
      topic: 'git: Safe force push flag',
      question: {
        en: 'What flag makes a Git force push safe by checking that no unseen remote commits exist before pushing?',
        bn: 'পুশ করার আগে রিমোটের কোনো অদেখা কমিট আছে কি না তা যাচাই করে ফোর্স পুশকে নিরাপদ বানায় কোন ফ্ল্যাগটি?'
      },
      code: `/* Git safe force push command */
/* git push ____________________ origin my-branch */`,
      answer: '--force-with-lease',
      accept: ['--force-with-lease', 'force-with-lease', '--force-with-lease flag'],
      hint: {
        en: 'It forces with a lease check.',
        bn: 'এটি লিজ চেকের মাধ্যমে ফোর্স করে।'
      },
      explanation: {
        en: '--force-with-lease ensures that Git only overwrites the remote branch if your local tracking branch matches the remote state, preventing accidental deletion of teammates’ work.',
        bn: '--force-with-lease নিশ্চিত করে যে আপনার লোকাল রেকর্ড রিমোটের সাথে মিললেই কেবল ফোর্স পুশ হবে, ফলে সহকর্মীদের কাজ ভুলবশত মুছে যাওয়া থেকে রক্ষা পায়।'
      }
    },
    {
      id: 'git-rem-ex2',
      kind: 'mcq',
      topic: 'git: git fetch vs git pull',
      question: {
        en: 'What is the key difference between git fetch and git pull?',
        bn: 'git fetch এবং git pull-এর মধ্যে প্রধান কার্যকর পার্থক্য কী?'
      },
      options: [
        { en: 'git fetch downloads commits without modifying your working files; git pull downloads and immediately merges into your active branch', bn: 'git fetch কাজের ফাইলের ক্ষতি না করে শুধু কমিট নামিয়ে আনে; আর git pull ডেটা নামিয়ে সাথে সাথে বর্তমান ব্রাঞ্চে মার্জ করে' },
        { en: 'git fetch deletes remote branches', bn: 'git fetch রিমোট ব্রাঞ্চ মুছে দেয়' },
        { en: 'git pull only works with SSH', bn: 'git pull শুধু SSH-এ কাজ করে' },
        { en: 'There is no difference', bn: 'উভয়ের মাঝে কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'One downloads only; the other downloads and merges.',
        bn: 'একটি শুধু ডাউনলোড করে; অন্যটি ডাউনলোড করে মার্জও করে।'
      },
      explanation: {
        en: 'git fetch is non-destructive, updating only remote-tracking branches. git pull automatically merges downloaded changes into your active branch, potentially introducing conflicts.',
        bn: 'git fetch অহিংসভাবে শুধু ট্র্যাকিং রেকর্ড আপডেট করে। আর git pull সাথে সাথে মার্জ করতে গিয়ে চলতি কোডে কনফ্লিক্ট বাধিয়ে ফেলতে পারে।'
      }
    },
    {
      id: 'git-rem-ex3',
      kind: 'mcq',
      topic: 'git: Pruning dead remote branches',
      question: {
        en: 'Which command removes local references to branches that have been deleted on the remote server?',
        bn: 'রিমোট সার্ভার থেকে মুছে দেওয়া ব্রাঞ্চগুলোর লোকাল রেফারেন্স পরিষ্কার করতে কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'git fetch --prune', bn: 'git fetch --prune' },
        { en: 'git clean -fd', bn: 'git clean -fd' },
        { en: 'git branch -d', bn: 'git branch -d' },
        { en: 'git reset --hard', bn: 'git reset --hard' }
      ],
      answer: 0,
      hint: {
        en: 'Prune cuts dead branches.',
        bn: 'Prune মৃত ডালপালা ছেঁটে ফেলে।'
      },
      explanation: {
        en: 'git fetch --prune cleans up obsolete remote-tracking branches that no longer exist on the remote repository.',
        bn: 'git fetch --prune সার্ভার থেকে আগেই মুছে যাওয়া পুরনো ব্রাঞ্চগুলোর লোকাল রেকর্ডকে এক ক্লিকে মুছে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'git-remotes-quiz',
    title: { en: 'Git Remotes & Synchronization Quiz', bn: 'গিট রিমোট ও সিঙ্কিং কুইজ' },
    questions: [
      {
        id: 'rq1',
        kind: 'mcq',
        topic: 'git: Upstream flag utility',
        question: {
          en: 'What does running git push -u origin feature-name do?',
          bn: 'git push -u origin feature-name কমান্ডটি মূলত কী কাজ করে?'
        },
        options: [
          { en: 'Pushes the branch and sets up a default upstream tracking relationship for future bare git push/pull commands', bn: 'ব্রাঞ্চটি পুশ করে এবং ভবিষ্যতের সহজ পুশ/পুলের জন্য ডিফল্ট আপস্ট্রিম ট্র্যাকিং সম্পর্ক তৈরি করে' },
          { en: 'Deletes the branch on GitHub', bn: 'GitHub থেকে ব্রাঞ্চ মুছে দেয়' },
          { en: 'Reverts the latest commit', bn: 'শেষ কমিট রিভার্ট করে' },
          { en: 'Converts the branch into an annotated tag', bn: 'ব্রাঞ্চকে ট্যাগে রূপান্তর করে' }
        ],
        answer: 0,
        hint: {
          en: '-u sets the upstream link.',
          bn: '-u আপস্ট্রিম লিঙ্ক সেট করে।'
        },
        explanation: {
          en: 'The -u (upstream) flag instructs Git to remember the remote and branch association, allowing you to run git push or git pull without arguments in the future.',
          bn: '-u ফ্ল্যাগ লোকাল ব্রাঞ্চের সাথে রিমোট ব্রাঞ্চকে বেঁধে দেয়, যার ফলে পরবর্তীতে কোনো আর্গুমেন্ট ছাড়াই কেবল git push বা git pull দিলেই কাজ হয়।'
        }
      },
      {
        id: 'rq2',
        kind: 'mcq',
        topic: 'git: Fork workflow remotes',
        question: {
          en: 'In an open-source contribution workflow, what is the convention for naming the original upstream project repository?',
          bn: 'ওপেন সোর্স কন্ট্রিবিউশন ওয়ার্কফ্লোতে মূল অফিশিয়াল প্রজেক্টের রিমোটকে সাধারণত কী নাম দেওয়া হয়?'
        },
        options: [
          { en: 'upstream', bn: 'upstream' },
          { en: 'origin', bn: 'origin' },
          { en: 'master', bn: 'master' },
          { en: 'parent_server', bn: 'parent_server' }
        ],
        answer: 0,
        hint: {
          en: 'Your fork is origin; the official repository is upstream.',
          bn: 'আপনার ফর্ক হলো origin; অফিশিয়াল মূল প্রজেক্ট হলো upstream।'
        },
        explanation: {
          en: 'By universal convention, origin refers to your personal fork, while upstream refers to the central authoritative repository you are contributing to.',
          bn: 'আন্তর্জাতিক নিয়মে আপনার নিজস্ব ফর্কের নাম হয় origin, আর যে প্রধান প্রজেক্টে অবদান রাখছেন তার রিমোট নাম হয় upstream।'
        }
      },
      {
        id: 'rq3',
        kind: 'mcq',
        topic: 'git: force-with-lease safety',
        question: {
          en: 'Why is git push --force-with-lease safer than git push --force?',
          bn: 'git push --force-এর চেয়ে git push --force-with-lease কেন অনেক বেশি নিরাপদ?'
        },
        options: [
          { en: 'It refuses to overwrite remote history if someone else pushed new commits since your last fetch, preventing accidental destruction of a teammate’s work', bn: 'আপনার শেষ ফেচের পর অন্য কেউ নতুন কমিট পুশ করে থাকলে এটি রিমোট হিস্টোরি ওভাররাইট করতে বাধা দেয়, ফলে সহকর্মীর কাজ দুর্ঘটনাবশত নষ্ট হওয়া রোধ হয়' },
          { en: 'It encrypts the payload before sending', bn: 'পাঠানোর আগে ডেটা এনক্রিপ্ট করে' },
          { en: 'It automatically merges branches without conflicts', bn: 'কনফ্লিক্ট ছাড়াই নিজে থেকে মার্জ করে' },
          { en: 'It operates twice as fast', bn: 'দ্বিগুণ দ্রুত কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Checks if remote tip matches your last fetched state.',
          bn: 'রিমোট ব্রাঞ্চে নতুন কাজ ঢুকেছে কিনা তা পরীক্ষা করে।'
        },
        explanation: {
          en: '--force-with-lease verifies that the remote ref matches your local remote-tracking branch, refusing to overwrite unknown commits pushed by collaborators.',
          bn: '--force-with-lease নিশ্চিত করে যে আপনার অগোচরে অন্য কেউ পুশ করেনি; কেউ পুশ করে থাকলে এটি ওভাররাইট আটকে দেয়।'
        }
      },
      {
        id: 'rq4',
        kind: 'mcq',
        topic: 'git: fetch prune utility',
        question: {
          en: 'What does git fetch --prune accomplish during repository maintenance?',
          bn: 'রিপোজিটরি পরিচর্যার সময় git fetch --prune কমান্ড কী কাজ করে?'
        },
        options: [
          { en: 'It deletes local tracking references (origin/branch) for branches that have been deleted from the remote repository', bn: 'রিমোট সার্ভার থেকে যেসব ব্রাঞ্চ মুছে ফেলা হয়েছে, লোকাল মেশিন থেকে তাদের পুরনো ট্র্যাকিং রেফারেন্স মুছে ফেলে' },
          { en: 'It clears the browser cache', bn: 'ব্রাউজার ক্যাশ পরিষ্কার করে' },
          { en: 'It resets all local uncommitted changes', bn: 'সব লোকাল আনকমিটেড পরিবর্তন রিসেট করে' },
          { en: 'It compresses the Git binary on your computer', bn: 'কম্পিউটারের গিট বাইনারি কম্প্রেস করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prunes stale deleted remote branches from your tracking list.',
          bn: 'রিমোট থেকে মুছে যাওয়া মৃত ব্রাঞ্চগুলো লোকাল ট্র্যাকিং থেকে ছেঁটে ফেলে।'
        },
        explanation: {
          en: 'The --prune flag cleans up obsolete remote-tracking branches (like origin/feat-1) that no longer exist on the remote host.',
          bn: '--prune ফ্ল্যাগ রিমোট সার্ভার থেকে মুছে ফেলা ব্রাঞ্চগুলোর লোকাল রেফারেন্স পরিষ্কার করে।'
        }
      }
    ]
  }
};
