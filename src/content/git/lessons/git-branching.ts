import type { Lesson } from '../../../lib/types';

export const gitBranchingLesson: Lesson = {
  slug: 'git-branching',
  tech: 'git',
  title: {
    en: 'Git Branching: Pointers, Fast-Forward, 3-Way Merges & Conflicts',
    bn: 'গিট ব্রাঞ্চিং: পয়েন্টার, ফাস্ট-ফরওয়ার্ড, ৩-ওয়ে মার্জ ও কনফ্লিক্ট'
  },
  summary: {
    en: 'Master parallel Git development across 10 structured topics. Learn 41-byte branch pointers, git branch, git switch, the role of HEAD, and divergent commit graphs. Understand fast-forward merges, three-way merge commits with two parents, merge conflict anatomy, manual conflict resolution, branch cleanup hygiene (-d vs -D), and graph visualization with git log --graph.',
    bn: '১০টি সুসংগঠিত পয়েন্টে সমান্তরাল গিট ডেভেলপমেন্ট আয়ত্ত করুন। ৪১-বাইটের ব্রাঞ্চ পয়েন্টার, git branch, git switch, HEAD-এর ভূমিকা এবং ডাইভারজেন্ট কমিট গ্রাফ শিখুন। ফাস্ট-ফরওয়ার্ড মার্জ, দুই প্যারেন্টের ৩-ওয়ে মার্জ কমিট, কনফ্লিক্টের কারণ, ম্যানুয়াল কনফ্লিক্ট সমাধান, ব্রাঞ্চ ডিলিট করার নিয়ম (-d বনাম -D) এবং git log --graph দিয়ে গ্রাফ প্রদর্শন আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-snapshot-archive',
    title: { en: 'The Four Git Trees, Staging, .gitignore & Object Internals', bn: 'গিটের চার জোন, স্টেজিং, .gitignore ও অবজেক্ট ইন্টারনালস' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. What is a Branch? A 41-Byte Movable Pointer', bn: '১. ব্রাঞ্চ আসলে কী? একটি ৪১-বাইটের সরণীয় পয়েন্টার' } },
    {
      type: 'para',
      text: {
        en: 'In Git, a branch is NOT a heavy directory copy or separate file snapshot. A branch is simply a lightweight 41-byte text file located inside .git/refs/heads/ containing a 40-character SHA-1 commit hash followed by a newline. Creating a branch is instantaneous (O(1) time and disk space).',
        bn: 'গিটে ব্রাঞ্চ কোনো ভারী ফোল্ডারের ফটোকপি নয়। একটি ব্রাঞ্চ হলো .git/refs/heads/ ফোল্ডারে থাকা মাত্র ৪১ বাইটের একটি সাধারণ টেক্সট ফাইল, যার ভেতরে ৪০ অক্ষরের একটি কমিট হ্যাশ থাকে। ফলে কোটি লাইনের প্রজেক্টেও নতুন ব্রাঞ্চ তৈরি করতে এক মিলি-সেকেন্ডেরও কম সময় লাগে (O(1) সময় ও স্পেস)।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Git Branching & Merge Topologies',
        bn: 'গিট ব্রাঞ্চিং ও মার্জ টপোলজি'
      },
      caption: {
        en: 'Fast-forward simply advances a pointer, while three-way merges unite divergent histories into a two-parent commit.',
        bn: 'ফাস্ট-ফরওয়ার্ড কেবল একটি পয়েন্টার সামনে এগিয়ে নেয়, অন্যদিকে ৩ ওয়ে মার্জ ২ টি প্যারেন্টযুক্ত নতুন মার্জ কমিট তৈরি করে।'
      },
      svg: `<svg viewBox="0 0 680 160" width="100%" height="160" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="160" rx="10" fill="#0f172a"/>
  <text x="30" y="40" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Fast-Forward: Pointer Moves Ahead</text>
  <circle cx="50" cy="65" r="12" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="50" y="69" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">C1</text>
  <path d="M 65 65 L 115 65" stroke="#64748b" stroke-width="2"/>
  <circle cx="130" cy="65" r="12" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="130" y="69" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">C2</text>
  <path d="M 145 65 L 195 65" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="210" cy="65" r="12" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
  <text x="210" y="69" text-anchor="middle" fill="#fff" font-size="10" font-family="monospace">C3</text>
  <text x="235" y="69" fill="#38bdf8" font-size="11" font-family="monospace">main &amp; feature</text>

  <text x="30" y="115" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">3-Way Merge: 2 Parents (Base + Tips)</text>
  <circle cx="50" cy="135" r="12" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <text x="50" y="139" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">B</text>
  <path d="M 65 130 L 115 120" stroke="#64748b" stroke-width="2"/>
  <circle cx="130" cy="120" r="12" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <text x="130" y="124" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">M1</text>
  <path d="M 65 140 L 115 150" stroke="#64748b" stroke-width="2"/>
  <circle cx="130" cy="150" r="12" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
  <text x="130" y="154" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">F1</text>
  <path d="M 145 125 L 200 135" stroke="#a855f7" stroke-width="2"/>
  <path d="M 145 145 L 200 135" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="215" cy="135" r="14" fill="#065f46" stroke="#10b981" stroke-width="2"/>
  <text x="215" y="139" text-anchor="middle" fill="#fff" font-size="10" font-weight="bold" font-family="monospace">MC</text>
  <text x="240" y="139" fill="#34d399" font-size="11" font-family="monospace">Merge Commit (2 Parents)</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting branch pointer mechanics directly inside .git:
cat .git/refs/heads/main
# Output:
# 3b41fa80931298c92a95c479e02938472910fa72

# A branch is literally just this 40-character commit pointer!
# Result: 41 bytes on disk pointing to the latest commit node`,
      caption: {
        en: 'A branch is simply an immutable reference pointer tracking a commit SHA-1 hash.',
        bn: 'ব্রাঞ্চ হলো কোনো কমিট হ্যাশ নির্দেশ করা একটি সাধারণ রেফারেন্স পয়েন্টার।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Creating and Switching Branches: git branch and git switch', bn: '২. ব্রাঞ্চ তৈরি ও পরিবর্তন: git branch ও git switch' } },
    {
      type: 'para',
      text: {
        en: 'Historically, git checkout was overloaded to handle both branch switching and file restoration. Modern Git introduced git switch for dedicated branch operations: git branch feature creates a pointer; git switch feature moves HEAD to it; and git switch -c feature creates and switches in one step.',
        bn: 'অতীতে git checkout কমান্ড দিয়ে একই সাথে ফাইল রিস্টোর ও ব্রাঞ্চ বদলানো হতো যা বিভ্রান্তি তৈরি করত। আধুনিক গিটে ব্রাঞ্চ পরিবর্তনের জন্য এসেছে git switch: git branch feature নতুন ব্রাঞ্চ বানায়; git switch feature সেই ব্রাঞ্চে যায়; আর git switch -c feature এক কমান্ডেই নতুন ব্রাঞ্চ বানিয়ে তাতে প্রবেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. List local branches (* denotes currently active branch)
git branch
# * main

# 2. Create and immediately switch to a new feature branch
git switch -c feature-auth
# Switched to a new branch 'feature-auth'

# 3. Verify active branch pointer has moved:
git branch
# * feature-auth
#   main

# Output:
# Switched to a new branch 'feature-auth'
# Result: HEAD now points to refs/heads/feature-auth`,
      caption: {
        en: 'git switch -c streamlines creating and switching branches into a single operation.',
        bn: 'git switch -c এক কমান্ডেই নতুন ব্রাঞ্চ তৈরি করে তাতে সুইচ করার সুবিধা দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Role of HEAD: The "You Are Here" Pin', bn: '৩. HEAD-এর ভূমিকা: "আপনি বর্তমানে এখানে আছেন" নির্দেশক' } },
    {
      type: 'para',
      text: {
        en: 'HEAD is Git’s internal symbolic pointer that tracks which branch you are currently working on. Located at .git/HEAD, it normally references a branch (e.g. ref: refs/heads/main). When you make a new commit, Git writes the commit and updates the branch pointed to by HEAD.',
        bn: 'HEAD হলো গিটের নিজস্ব সিম্বলিক পয়েন্টার যা নির্দেশ করে আপনি বর্তমানে কোন ব্রাঞ্চে কাজ করছেন। .git/HEAD ফাইলে এটি সংরক্ষিত থাকে (যেমন ref: refs/heads/main)। আপনি যখন নতুন কোনো কমিট করেন, গিট সেই নতুন কমিট তৈরি করে HEAD নির্দেশিত ব্রাঞ্চের পয়েন্টারকে সামনের দিকে এগিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting what HEAD points to:
cat .git/HEAD
# Output:
# ref: refs/heads/feature-auth

# HEAD points to feature-auth, which in turn points to commit 3b41fa8!
# Result: Two levels of indirection make branch switching instant`,
      caption: {
        en: 'HEAD directs Git commit operations to update the active branch reference.',
        bn: 'HEAD নিশ্চিত করে যে নতুন কমিটটি যেন বর্তমান সক্রিয় ব্রাঞ্চের ওপরেই যুক্ত হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Divergent Commit Graphs: Forking Timelines', bn: '৪. ডাইভারজেন্ট কমিট গ্রাফ: ভিন্নমুখী সমান্তরাল টাইমলাইন' } },
    {
      type: 'para',
      text: {
        en: 'When a feature branch receives new commits while the main branch also receives separate commits, the history diverges. Git history is a Directed Acyclic Graph (DAG). Both branches share a Common Ancestor commit, but each possesses unique commits unknown to the other.',
        bn: 'যখন কোনো ফিচার ব্রাঞ্চে নতুন কাজ হয় এবং একই সময়ে মেইন ব্রাঞ্চেও অন্য কোনো নতুন কমিট পড়ে, তখন তাদের ইতিহাস দুটি ভিন্ন শাখায় ভাগ হয়ে যায় (ডাইভারজেন্ট হয়)। গিটের ইতিহাস মূলত একটি ডিরেক্টেড অ্যাসাইক্লিক গ্রাফ (DAG)। দুটি ব্রাঞ্চেরই একটি সাধারণ পূর্বপুরুষ (Common Ancestor) থাকে, কিন্তু প্রত্যেকের নিজস্ব আলাদা আলাদা নতুন কমিট থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Simulating divergence:
# Commit on feature-auth:
git commit -m "feat: add oauth2 login handler"
# [feature-auth a1c4b21] feat: add oauth2 login handler

# Switch back to main and commit an urgent fix:
git switch main
git commit -m "fix: patch security vulnerability in parser"
# [main e5d89f0] fix: patch security vulnerability in parser

# Output:
# main and feature-auth have diverged!
# Result: Graph forks into two parallel evolutionary branches`,
      caption: {
        en: 'Divergent branches develop in parallel without interfering with each other.',
        bn: 'ডাইভারজেন্ট ব্রাঞ্চগুলো একে অপরকে প্রভাবিত না করে সমান্তরালভাবে এগিয়ে যায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Fast-Forward Merges: Sliding the Pointer Forward', bn: '৫. ফাস্ট-ফরওয়ার্ড মার্জ: কোনো বাড়তি কমিট ছাড়াই পয়েন্টার স্থানান্তর' } },
    {
      type: 'para',
      text: {
        en: 'If main has received NO new commits since the feature branch was created, the merge is a Fast-Forward. Because feature’s history is a direct descendant of main, Git does NOT create a merge commit. It simply slides the main branch pointer forward to match feature’s latest commit.',
        bn: 'ফিচার ব্রাঞ্চ তৈরি করার পর মেইন ব্রাঞ্চে যদি নতুন কোনো কাজ না হয়ে থাকে, তবে মার্জ করার সময় ফাস্ট-ফরওয়ার্ড (Fast-Forward) ঘটে। যেহেতু ফিচারের সব কাজ সরাসরি মেইনের ওপর ভিত্তি করেই হয়েছে, তাই গিট কোনো বাড়তি মার্জ কমিট তৈরি না করে কেবল মেইন ব্রাঞ্চের পয়েন্টারটিকে টেনে ফিচার ব্রাঞ্চের মাথায় বসিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Merging a linear descendant branch:
git switch main
git merge feature-quickfix

# Output:
# Updating 3b41fa8..7c22e91
# Fast-forward
#  readme.md | 2 +-
#  1 file changed, 1 insertion(+), 1 deletion(-)
# Result: main pointer advanced directly to 7c22e91 with zero merge commit overhead`,
      caption: {
        en: 'Fast-forward merges advance the target branch pointer with zero new commit objects.',
        bn: 'ফাস্ট-ফরওয়ার্ড মার্জ কোনো বাড়তি মার্জ অবজেক্ট তৈরি না করে শুধু পয়েন্টার এগিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Three-Way Merge Commits: Two Parents Uniting History', bn: '৬. ৩ ওয়ে মার্জ কমিট: ২ টি প্যারেন্ট যুক্ত বিশেষ মার্জ কমিট' } },
    {
      type: 'para',
      text: {
        en: 'When branches have diverged, a fast-forward is mathematically impossible. Git performs a 3-Way Merge by analyzing three snapshots: the Common Ancestor, the Tip of Main, and the Tip of Feature. Git automatically synthesizes the changes and creates a Merge Commit—a special commit possessing TWO parent hashes.',
        bn: 'দুটি ব্রাঞ্চ আলাদা হয়ে গেলে ফাস্ট-ফরওয়ার্ড করা অসম্ভব। তখন গিট ৩ ওয়ে মার্জ (Three-Way Merge) চালায়। এজন্য ৩ টি স্ন্যাপশট যাচাই করা হয়: উভয়ের কমন অ্যানসেস্টর, মেইনের শেষ মাথা এবং ফিচারের শেষ মাথা। গিট স্বয়ংক্রিয়ভাবে সব পরিবর্তন জোড়া লাগিয়ে একটি মার্জ কমিট তৈরি করে যার ২ টি প্যারেন্ট থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Merging diverged feature-auth back into main:
git switch main
git merge feature-auth -m "Merge branch 'feature-auth' into main"

# Inspecting the resulting merge commit object:
git cat-file -p HEAD

# Output:
# tree 9b4f021...
# parent e5d89f0... (First parent: main branch previous tip)
# parent a1c4b21... (Second parent: feature-auth tip)
# author Alex Dev <alex@corp.net>
# Result: Merge commit binds two distinct evolutionary histories together`,
      caption: {
        en: 'A merge commit ties two historical timelines together, recording two parent hashes.',
        bn: 'একটি মার্জ কমিট দুটি আলাদা টাইমলাইনকে একসাথে বেঁধে দুটি প্যারেন্ট হ্যাশ সংরক্ষণ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Anatomy of Merge Conflicts', bn: '৭. মার্জ কনফ্লিক্টের কারণ ও গঠন' } },
    {
      type: 'para',
      text: {
        en: 'If developer A and developer B modify the EXACT SAME lines in the same file differently across diverged branches, Git cannot mathematically determine which change takes precedence. Rather than guessing, Git halts the merge and inserts Conflict Markers into the affected files.',
        bn: 'যদি দুজন ডেভেলপার একই ফাইলের ঠিক একই লাইনগুলো আলাদাভাবে পরিবর্তন করেন, তবে গিট নিজে থেকে সিদ্ধান্ত নিতে পারে না কার পরিবর্তনটি সঠিক। নিজে কোনো অনুমান না করে গিট মার্জ স্থগিত করে এবং ফাইলের ভেতরে কনফ্লিক্ট মার্কার বসিয়ে মানুষের হস্তক্ষেপ দাবি করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Attempting to merge conflicting branch:
git merge feature-pricing

# Output:
# Auto-merging src/config.py
# CONFLICT (content): Merge conflict in src/config.py
# Automatic merge failed; fix conflicts and then commit the result.

# The conflicted file contains Git markers:
# <<<<<<< HEAD (Current branch: main)
# BASE_CURRENCY = 'USD'
# =======
# BASE_CURRENCY = 'BDT'
# >>>>>>> feature-pricing (Incoming branch)`,
      caption: {
        en: 'Conflict markers isolate current changes (HEAD) from incoming changes (branch).',
        bn: 'কনফ্লিক্ট মার্কার বর্তমান ব্রাঞ্চের পরিবর্তন ও আগমনী ব্রাঞ্চের পরিবর্তনকে আলাদা করে দেখায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Resolving Conflicts Manually and Completing Merges', bn: '৮. কনফ্লিক্ট সমাধান ও মার্জ সমাপ্তকরণ' } },
    {
      type: 'para',
      text: {
        en: 'To resolve a conflict: 1) Open the conflicted file and edit it to keep the desired code; 2) Delete all conflict markers (<<<<<<<, =======, >>>>>>>); 3) Stage the resolved file with git add. 4) Finalize with git commit (or abort safely anytime with git merge --abort).',
        bn: 'কনফ্লিক্ট সমাধানের নিয়ম: ১) সমস্যাযুক্ত ফাইলটি এডিটরে খুলে কাঙ্ক্ষিত কোডটি রাখুন; ২) গিটের সব মার্কার (<<<<<<<, =======, >>>>>>>) মুছে ফেলুন; ৩) git add দিয়ে সমাধানকৃত ফাইলটি স্টেজে তুলুন; ৪) git commit দিয়ে মার্জ সম্পন্ন করুন (অথবা যেকোনো মুহূর্তে নিরাপদে বাতিল করতে git merge --abort দিন)।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Open src/config.py and leave final reconciled code:
# BASE_CURRENCY = 'BDT' # Approved currency standard

# Step 2: Mark conflict as resolved by staging:
git add src/config.py

# Step 3: Complete merge commit:
git commit -m "Merge branch 'feature-pricing' and resolve currency conflict"

# Output:
# [main 4f11a80] Merge branch 'feature-pricing' and resolve currency conflict
# Result: Merge conflict resolved cleanly and recorded in history`,
      caption: {
        en: 'git add signals to Git that conflicts in that file have been human-reconciled.',
        bn: 'git add গিটকে নিশ্চিত করে যে মানুষ নিজে দেখে সেই ফাইলের কনফ্লিক্ট সমাধান করেছে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Branch Hygiene: Safe Deletion (-d) vs Force Deletion (-D)', bn: '৯. ব্রাঞ্চ পরিষ্কারের নিয়ম: নিরাপদ ডিলিট (-d) বনাম ফোর্স ডিলিট (-D)' } },
    {
      type: 'para',
      text: {
        en: 'Once work is merged into main, leaving stale references clutters the repository. Running git branch -d feature safely deletes the pointer ONLY if its commits have been incorporated. If the target contains unmerged work that would become orphaned, Git rejects deletion unless forced with git branch -D feature.',
        bn: 'ফিচার মূল কোডে মার্জ হয়ে গেলে পুরনো পয়েন্টার মুছে ফেলা সুঅভ্যাস। git branch -d feature কেবল তখনই পয়েন্টার মুছে ফেলে যখন তার সব কাজ মূল ধারায় অন্তর্ভুক্ত হয়েছে। যদি এতে এমন কাজ থাকে যা এখনো কোথাও যুক্ত হয়নি, তবে কাজ হারানোর ভয়ে গিট ডিলিট আটকে দেয়; একমাত্র জোর করে মুছতে চাইলে git branch -D feature দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Safe deletion of fully merged branch:
git branch -d feature-auth
# Output:
# Deleted branch feature-auth (was a1c4b21).

# Attempting to delete an unmerged branch:
git branch -d experimental-ai
# Output:
# error: The branch 'experimental-ai' is not fully merged.
# If you are sure you want to delete it, run 'git branch -D experimental-ai'.

# Force deletion if abandoned intentionally:
git branch -D experimental-ai
# Deleted branch experimental-ai (was f440192).`,
      caption: {
        en: '-d protects against accidental data loss; -D bypasses checks for abandoned experiments.',
        bn: '-d অনিচ্ছাকৃত কাজ হারানো রোধ করে; -D পরীক্ষা বাতিল করে জোরপূর্বক মুছে দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Visualizing Branch Topologies: git log --graph', bn: '১০. ব্রাঞ্চ টপোলজি প্রদর্শন: git log --graph' } },
    {
      type: 'para',
      text: {
        en: 'Terminal visualizers allow developers to inspect branching forks, merges, and commit parentage directly. The canonical command git log --graph --oneline --all draws an ASCII representation of the entire directed acyclic graph, showing where branches split and where merge commits unite them.',
        bn: 'টার্মিনালে বসেই ব্রাঞ্চের শাখা-প্রশাখা, মার্জ ও প্যারেন্ট সম্পর্ক দেখা যায়। git log --graph --oneline --all কমান্ডটি সম্পূর্ণ গ্রাফের একটি সুন্দর ASCII চিত্র এঁকে দেয়, যা দেখে পরিষ্কার বোঝা যায় কোথায় ব্রাঞ্চ আলাদা হয়েছিল এবং কোন মার্জ কমিটের মাধ্যমে তারা পুনরায় একত্র হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Visualizing complete branch topology across repository:
git log --graph --oneline --all

# Output:
# *   4f11a80 (HEAD -> main) Merge branch 'feature-pricing'
# |\\  
# | * 8c20140 (feature-pricing) feat: update pricing schema
# * | e5d89f0 fix: patch security vulnerability
# |/  
# * 3b41fa8 Initial repository commit
# Result: ASCII branch trees render topological relationships unambiguously`,
      caption: {
        en: 'git log --graph --oneline illuminates branching forks and two-parent merge nodes.',
        bn: 'git log --graph --oneline ব্রাঞ্চের বিভাজন ও মার্জ নোডগুলোকে পরিষ্কারভাবে তুলে ধরে।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-br-ex1',
      kind: 'predict',
      topic: 'git: Number of parents in a merge commit',
      question: {
        en: 'How many parent commits does a standard three-way merge commit have in Git?',
        bn: 'গিটে একটি সাধারণ ৩-ওয়ে মার্জ কমিটের কয়টি প্যারেন্ট কমিট থাকে?'
      },
      code: `/* Git merge commit parent count */
/* git cat-file -p <merge-commit-sha> | grep parent */`,
      answer: '2',
      accept: ['2', 'two', 'Two'],
      hint: {
        en: 'It unites two separate historical timelines.',
        bn: 'এটি দুটি ভিন্ন টাইমলাইনকে একত্র করে।'
      },
      explanation: {
        en: 'A standard merge commit ties together two diverged branches, possessing exactly 2 parent commit hashes.',
        bn: 'একটি স্ট্যান্ডার্ড মার্জ কমিট দুটি পৃথক শাখাকে একত্র করে, তাই এতে ঠিক ২টি প্যারেন্ট কমিট হ্যাশ থাকে।'
      }
    },
    {
      id: 'git-br-ex2',
      kind: 'mcq',
      topic: 'git: Fast-forward condition',
      question: {
        en: 'Under what condition does Git perform a Fast-Forward merge instead of creating a merge commit?',
        bn: 'কোন পরিস্থিতিতে গিট নতুন কোনো মার্জ কমিট না বানিয়ে ফাস্ট-ফরওয়ার্ড মার্জ সম্পন্ন করে?'
      },
      options: [
        { en: 'When the target branch has received zero new commits since the feature branch diverged (linear descendant)', bn: 'যখন ফিচার ব্রাঞ্চ তৈরির পর থেকে টার্গেট বা মূল ব্রাঞ্চে কোনো নতুন কমিট তৈরি হয়নি' },
        { en: 'When there are merge conflicts', bn: 'যখন মার্জ কনফ্লিক্ট থাকে' },
        { en: 'Only when merging into a remote repository', bn: 'শুধু রিমোট রিপোজিটরিতে' },
        { en: 'When files are deleted', bn: 'যখন ফাইল ডিলিট হয়' }
      ],
      answer: 0,
      hint: {
        en: 'History is a direct linear line with no competing commits.',
        bn: 'ইতিহাস কোনো প্রতিযোগিতা ছাড়া সরাসরি সরলরেখায় থাকে।'
      },
      explanation: {
        en: 'If no new commits were added to the target branch, the feature branch is a direct linear descendant. Git simply moves the target pointer forward without creating a merge commit.',
        bn: 'টার্গেট ব্রাঞ্চে কোনো নতুন কাজ না থাকলে ফিচার ব্রাঞ্চটি সরাসরি সরলরেখায় থাকে, তাই গিট কোনো বাড়তি মার্জ কমিট না বানিয়ে কেবল পয়েন্টারটি এগিয়ে দেয়।'
      }
    },
    {
      id: 'git-br-ex3',
      kind: 'mcq',
      topic: 'git: Aborting a conflicted merge',
      question: {
        en: 'What command safely aborts an in-progress merge conflict and restores files to their pre-merge state?',
        bn: 'চলমান কোনো মার্জ কনফ্লিক্ট বাতিল করে ফাইলগুলোকে মার্জ শুরুর আগের অবস্থায় ফিরিয়ে নিতে কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'git merge --abort', bn: 'git merge --abort' },
        { en: 'git branch -D', bn: 'git branch -D' },
        { en: 'git clean -fd', bn: 'git clean -fd' },
        { en: 'git stash drop', bn: 'git stash drop' }
      ],
      answer: 0,
      hint: {
        en: 'Use the --abort flag on git merge.',
        bn: 'git merge কমান্ডে --abort ফ্ল্যাগ দিন।'
      },
      explanation: {
        en: 'git merge --abort immediately halts the merge process and cleanly rolls back the working directory to the commit before the merge was attempted.',
        bn: 'git merge --abort চলমান মার্জ প্রক্রিয়া বাতিল করে এবং ওয়ার্কিং ডিরেক্টরিকে হুবহু মার্জ শুরুর আগের অবস্থায় ফিরিয়ে নিয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'git-branching-quiz',
    title: { en: 'Git Branching & Merges Quiz', bn: 'গিট ব্রাঞ্চিং ও মার্জ কুইজ' },
    questions: [
      {
        id: 'bq1',
        kind: 'mcq',
        topic: 'git: Branch storage size',
        question: {
          en: 'Why is creating a new branch instantaneous in Git regardless of repository size?',
          bn: 'রিপোজিটরির আকার যত বিশালই হোক না কেন, গিটে নতুন ব্রাঞ্চ তৈরি মুহূর্তের মধ্যে সম্পন্ন হয় কেন?'
        },
        options: [
          { en: 'Because a branch is merely a 41-byte text file storing a 40-character commit hash pointer', bn: 'কারণ ব্রাঞ্চ হলো মাত্র ৪১ বাইটের একটি সাধারণ টেক্সট ফাইল যা ৪০ অক্ষরের কমিট হ্যাশ ধরে রাখে' },
          { en: 'Because Git compresses the whole codebase into a zip', bn: 'কারণ গিট পুরো কোড জিপ করে' },
          { en: 'Because Git uploads the code to the cloud', bn: 'কারণ গিট কোড ক্লাউডে আপলোড করে' },
          { en: 'Because branches are stored in RAM only', bn: 'কারণ ব্রাঞ্চ শুধু র্যামে থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'A branch is just a tiny reference file.',
          bn: 'ব্রাঞ্চ হলো অতি ক্ষুদ্র একটি রেফারেন্স ফাইল।'
        },
        explanation: {
          en: 'Git branches are lightweight reference pointers (.git/refs/heads/<name>) containing a single 40-byte commit SHA, taking O(1) time and negligible disk space.',
          bn: 'গিটের ব্রাঞ্চগুলো কোনো ফাইল কপি করে না; এটি কেবল একটি ৪১ বাইটের পয়েন্টার যা একটি নির্দিষ্ট কমিট হ্যাশকে নির্দেশ করে।'
        }
      },
      {
        id: 'bq2',
        kind: 'mcq',
        topic: 'git: Conflict resolution staging',
        question: {
          en: 'After manually editing a conflicted file to remove <<<<<<< and >>>>>>> markers, what command tells Git the conflict is resolved?',
          bn: 'ফাইল থেকে ম্যানুয়ালি <<<<<<< ও >>>>>>> মার্কার মুছে কোড ঠিক করার পর কোন কমান্ড দিয়ে গিটকে জানাতে হয় যে কনফ্লিক্ট সমাধান হয়েছে?'
        },
        options: [
          { en: 'git add <filename>', bn: 'git add <filename>' },
          { en: 'git resolve <filename>', bn: 'git resolve <filename>' },
          { en: 'git clean <filename>', bn: 'git clean <filename>' },
          { en: 'git checkout <filename>', bn: 'git checkout <filename>' }
        ],
        answer: 0,
        hint: {
          en: 'Stage the reconciled file.',
          bn: 'সমাধান করা ফাইলটি স্টেজে তুলুন।'
        },
        explanation: {
          en: 'Running git add on a conflicted file informs Git that the conflict has been resolved by the developer, preparing it for the final merge commit.',
          bn: 'কনফ্লিক্ট হওয়া ফাইলের ওপর git add চালালে গিট বুঝতে পারে যে সমস্যাটি সমাধান করা হয়েছে এবং এটি মার্জ কমিটের জন্য প্রস্তুত।'
        }
      },
      {
        id: 'bq3',
        kind: 'mcq',
        topic: 'git: Fast-forward merge criteria',
        question: {
          en: 'What condition permits Git to perform a fast-forward merge when merging feature into main?',
          bn: 'ফিচার ব্রাঞ্চকে মেইনে মার্জ করার সময় কোন পরিস্থিতিতে গিট ফাস্ট-ফরওয়ার্ড মার্জ করতে পারে?'
        },
        options: [
          { en: 'When main has no new commits since feature branched off, allowing main to simply advance its pointer directly to the tip of feature', bn: 'যখন ফিচার ব্রাঞ্চ তৈরির পর মেইনে কোনো নতুন কমিট হয়নি, ফলে মেইনের পয়েন্টার সরাসরি ফিচারের শেষ মাথায় এগিয়ে নেওয়া যায়' },
          { en: 'When both branches contain identical commit messages', bn: 'যখন উভয় ব্রাঞ্চে একই কমিট মেসেজ থাকে' },
          { en: 'When the developer has administrator privileges on GitHub', bn: 'যখন ডেভেলপারের গিটহাবে অ্যাডমিন ক্ষমতা থাকে' },
          { en: 'When the repository has fewer than 10 total commits', bn: 'যখন রিপোজিটরিতে ১০টির কম কমিট থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Linear descendant without divergence.',
          bn: 'কোনো ডাইভারজেন্স ছাড়া সরল রৈখিক ধারাবাহিকতা।'
        },
        explanation: {
          en: 'A fast-forward merge simply moves the target pointer forward along a direct linear chain of commits with zero merge commit overhead.',
          bn: 'মেইনে কোনো নতুন কাজ না থাকলে গিট কোনো বাড়তি মার্জ কমিট ছাড়াই সরাসরি পয়েন্টার সামনে সরিয়ে নেয়।'
        }
      },
      {
        id: 'bq4',
        kind: 'mcq',
        topic: 'git: Branch deletion safety',
        question: {
          en: 'What distinguishes git branch -d from git branch -D when cleaning up branches?',
          bn: 'ব্রাঞ্চ মুছে ফেলার সময় git branch -d এবং git branch -D-এর মধ্যে পার্থক্য কী?'
        },
        options: [
          { en: '-d performs a safe delete that refuses if commits have not been merged, while -D force-deletes the pointer regardless of unmerged commits', bn: '-d একটি নিরাপদ ডিলিট যা ব্রাঞ্চ মার্জ না থাকলে মুছতে বাধা দেয়, আর -D অমার্জড কাজ থাকলেও জোরপূর্বক মুছে ফেলে' },
          { en: '-d deletes files on disk while -D deletes files in the cloud', bn: '-d ডিস্কের ফাইল মুছে দেয় আর -D ক্লাউডের ফাইল মুছে দেয়' },
          { en: '-d requires an internet connection', bn: '-d এর জন্য ইন্টারনেট সংযোগ প্রয়োজন হয়' },
          { en: 'There is no difference in behavior', bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: '-d protects against losing unmerged work.',
          bn: '-d অমার্জড কাজ হারিয়ে ফেলা থেকে সুরক্ষা দেয়।'
        },
        explanation: {
          en: 'The lowercase -d flag guards against accidental code loss by ensuring commits are reachable elsewhere, while uppercase -D overrides this safety net.',
          bn: '-d ফ্ল্যাগ নিশ্চিত করে যে ব্রাঞ্চটির কাজ মূল প্রজেক্টে সংরক্ষিত আছে; অন্যথায় ফোর্স করার জন্য -D লাগে।'
        }
      }
    ]
  }
};
