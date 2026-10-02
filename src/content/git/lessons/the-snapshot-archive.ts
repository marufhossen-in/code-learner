import type { Lesson } from '../../../lib/types';

export const snapshotArchiveLesson: Lesson = {
  slug: 'the-snapshot-archive',
  tech: 'git',
  title: {
    en: 'The Four Git Trees, Staging, .gitignore & Object Internals',
    bn: 'গিটের চার জোন, স্টেজিং, .gitignore ও অবজেক্ট ইন্টারনালস'
  },
  summary: {
    en: 'Master Git core mechanics across 10 structured topics: the four Git trees, file lifecycle states, and git status telemetry. Explore interactive staging, .gitignore patterns, git diff, atomic conventional commits, git commit --amend, and object internals.',
    bn: '১০টি সুসংগঠিত পয়েন্টে গিটের মূল স্থাপত্য আয়ত্ত করুন: গিটের চার জোন, ফাইলের লাইফসাইকেল এবং git status টেলিমেট্রি। জানুন আংশিক স্টেজিং, .gitignore প্যাটার্ন, git diff, অ্যাটমিক কমিট, git commit --amend এবং অবজেক্টের অভ্যন্তরীণ গঠন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-branch-atelier',
    title: { en: 'Git Advanced Branching: Stashing, Cherry-Pick & Release Tags', bn: 'গিট অ্যাডভান্সড ব্রাঞ্চিং: স্ট্যাশিং, চেরি-পিক ও রিলিজ ট্যাগ' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Four Git Trees: Working, Staging, Local, and Remote', bn: '১. গিটের চার জোন: ওয়ার্কিং ডিরেক্টরি, স্টেজিং, লোকাল ও রিমোট' } },
    {
      type: 'para',
      text: {
        en: 'Git does not track files as a single monolithic state. Your code moves through four distinct zones: Working Directory, Staging Area (Index), Local Repository (.git), and Remote Repository (e.g. GitHub). Understanding these zones clarifies exactly where changes reside at each step.',
        bn: 'গিট ফাইলকে কোনো একক অবস্থায় সংরক্ষণ করে না। কোড মূলত চারটি আলাদা জোনের মধ্য দিয়ে প্রবাহিত হয়: Working Directory, Staging Area (Index), Local Repository (.git), এবং Remote Repository (যেমন GitHub)। এই জোনগুলো বুঝলে কোডের পরিবর্তন কোথায় আছে তা পরিষ্কার হয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Four Git Trees Data Flow',
        bn: 'গিটের চার জোনের ডেটা প্রবাহ'
      },
      caption: {
        en: 'Changes progress sequentially through working files, the staging index, the local repository, and remotes.',
        bn: 'কোডের পরিবর্তনগুলো ওয়ার্কিং ফাইল থেকে শুরু করে স্টেজিং, লোকাল রিপোজিটরি এবং রিমোটে ধারাবাহিকভাবে প্রবাহিত হয়।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <rect x="25" y="40" width="135" height="70" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="92" y="65" text-anchor="middle" fill="#94a3b8" font-size="12" font-weight="bold" font-family="monospace">Working Tree</text>
  <text x="92" y="90" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">Local Disk Files</text>
  <path d="M 160 75 L 185 75" stroke="#64748b" stroke-width="2"/>
  <rect x="185" y="40" width="135" height="70" rx="6" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="252" y="65" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Staging Index</text>
  <text x="252" y="90" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">git add</text>
  <path d="M 320 75 L 345 75" stroke="#64748b" stroke-width="2"/>
  <rect x="345" y="40" width="140" height="70" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="415" y="65" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">Local .git</text>
  <text x="415" y="90" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">git commit</text>
  <path d="M 485 75 L 510 75" stroke="#64748b" stroke-width="2"/>
  <rect x="510" y="40" width="145" height="70" rx="6" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="582" y="65" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">Remote Upstream</text>
  <text x="582" y="90" text-anchor="middle" fill="#a7f3d0" font-size="10" font-family="monospace">git push</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Data Flow Across the Four Trees:
# [Working Directory] --( git add )--> [Staging Area / Index]
# [Staging Area]     --( git commit )-> [Local Repository .git]
# [Local Repository] --( git push )---> [Remote Repository (GitHub)]

# Verify repository initialized with local .git database:
ls -d .git
# Output:
# .git
# Result: Local object store established on disk`,
      caption: {
        en: 'Understanding the four trees demystifies where changes reside at each pipeline step.',
        bn: 'চারটি জোনের ধারণা বুঝলে স্পষ্ট হয় কোডের পরিবর্তন ঠিক কোথায় অবস্থান করছে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. File Lifecycle States: Untracked, Modified, Staged & Committed', bn: '২. ফাইলের লাইফসাইকেল: আনট্র্যাকড, মডিফাইড, স্টেজড ও কমিটেড' } },
    {
      type: 'para',
      text: {
        en: 'Every file in your folder exists in one of four states. Untracked files are new files Git does not yet monitor. Modified files have uncommitted edits. Staged files are marked to enter the next commit snapshot.',
        bn: 'প্রজেক্টের প্রতিটি ফাইল চারটি অবস্থার একটিতে থাকে। Untracked হলো নতুন ফাইল যা গিট নজরে রাখছে না। Modified হলো পরিবর্তিত কিন্তু আনস্টেজড ফাইল। আর Staged হলো পরবর্তী কমিটের জন্য প্রস্তুত খসড়া।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Create new untracked file
echo "SECRET_KEY=dev_123" > secrets.env

# Step 2: Edit existing tracked file (Becomes 'Modified')
echo "import config" >> app.py

# Step 3: Stage file (Transitions from 'Modified' to 'Staged')
git add app.py

# Output:
# app.py is now Staged for commit; secrets.env remains Untracked!
# Result: Granular control over which files enter the commit snapshot`,
      caption: {
        en: 'Files transition systematically between lifecycle states as changes are crafted.',
        bn: 'পরিবর্তন তৈরির সাথে সাথে ফাইলগুলো সুশৃঙ্খলভাবে এক অবস্থা থেকে অন্য অবস্থায় যায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Status Telemetry: git status and the Compact -s Matrix', bn: '৩. স্ট্যাটাস টেলিমেট্রি: git status ও সংক্ষিপ্ত -s ফ্ল্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'The git status command reports the health of your working tree. For rapid terminal inspection, passing -s outputs a two-column compact matrix: the left column represents staged entries, while the right column shows unstaged workspace edits (e.g. M_ staged, _M modified, ?? untracked).',
        bn: 'git status কমান্ড বর্তমান কাজের সার্বিক অবস্থা প্রদর্শন করে। টার্মিনালে দ্রুত দেখার জন্য -s ফ্ল্যাগ দিলে দুই কলামের সংক্ষিপ্ত রূপ দেখা যায়: বাম কলামে স্টেজড পরিবর্তন এবং ডান কলামে আনস্টেজড ওয়ার্কস্পেস সম্পাদনা প্রদর্শিত হয় (যেমন M_ মানে স্টেজড, _M মানে মডিফাইড, ?? মানে নতুন ফাইল)।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Compact status telemetry display:
git status -s

# Output:
# M  api/server.py    (Green 'M': Modified and Staged in index!)
#  M README.md        (Red 'M': Modified in working tree, NOT staged!)
# ?? secrets.env      (Red '??': Untracked new file!)
# A  models/user.py   (Green 'A': Newly Added file staged for commit!)
# Result: Immediate two-letter visual diagnostic of repository state`,
      caption: {
        en: 'git status -s provides a concise two-character matrix of staging vs working state.',
        bn: 'git status -s স্টেজিং ও ওয়ার্কিং ডিরেক্টরির দ্বৈত অবস্থা সংক্ষেপে তুলে ধরে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Granular Staging: git add and Interactive Patch Staging (-p)', bn: '৪. আংশিক স্টেজিং: git add ও ইন্টারঅ্যাক্টিভ প্যাচ (-p)' } },
    {
      type: 'para',
      text: {
        en: 'Never blindly run git add . in production codebases! Staging entire directories risks accidentally committing debug print statements or secret keys. The professional command git add -p (patch) breaks file modifications into hunks, allowing you to selectively stage specific lines while leaving unrelated edits unstaged.',
        bn: 'প্রোডাকশনে চোখ বন্ধ করে git add . চালানো মারাত্মক ভুল! এতে অনাকাঙ্ক্ষিত ডিবাগ প্রিন্ট বা পাসওয়ার্ড দুর্ঘটনাবশত কমিট হয়ে যেতে পারে। পেশাদার ডেভেলপাররা git add -p (patch) ব্যবহার করেন, যা ফাইলের পরিবর্তনগুলোকে ছোট ছোট খণ্ডে (hunk) ভাগ করে দেয় এবং বেছে বেছে নির্দিষ্ট লাইন কমিট করার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Interactively staging hunks of code:
git add -p src/auth.py

# Git prompts per hunk:
# @@ -12,4 +12,6 @@ def authenticate_user():
# +    print("DEBUG: Checking password") # Unwanted debug line!
# +    token = generate_jwt(user)        # Wanted production feature!
# Stage this hunk [y,n,q,a,d,s,e,?]? s
# (Split into smaller hunks, then type 'y' for jwt and 'n' for debug print!)

# Output:
# Staged pure feature line; excluded debug print from index!
# Result: Clean, single-responsibility atomic staging`,
      caption: {
        en: 'git add -p isolates clean feature commits from exploratory debug residue.',
        bn: 'git add -p ডিবাগ কোড বাদ দিয়ে কেবল প্রয়োজনীয় ফিচারটি স্টেজে তোলার সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Exclusion Protocol: .gitignore Patterns and Anchors', bn: '৫. ফাইল বর্জন নীতি: .gitignore প্যাটার্ন ও নিয়মাবলী' } },
    {
      type: 'para',
      text: {
        en: 'The .gitignore file specifies intentional untracked files that Git should completely ignore. Rules use glob syntax: node_modules/ ignores directories; *.log matches extensions; /config.json anchors to the repository root; and leading exclamation marks (!keep.log) negate rules to re-include specific files.',
        bn: '.gitignore ফাইলটি এমন সব ফাইলের তালিকা রাখে যা গিট সম্পূর্ণভাবে উপেক্ষা করবে। এর কিছু মূল নিয়ম: node_modules/ দিলে পুরো ফোল্ডার বাদ পড়ে; *.log দিলে ঐ এক্সটেনশনের সব ফাইল বাদ পড়ে; /config.json শুরুতে স্ল্যাশ দিলে শুধু রুট ফোল্ডারের ফাইলটি বোঝায়। আর শুরুতে বিস্ময়চিহ্ন (!keep.log) দিলে বাদ পড়া ফাইল পুনরায় অন্তর্ভুক্ত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Production .gitignore template:
# Ignore compiled dependencies
node_modules/
__pycache__/
*.pyc

# Ignore environment credentials and API tokens
.env
*.pem

# Ignore runtime logs but preserve directory .gitkeep
logs/*
!logs/.gitkeep

# Output:
# .gitignore prevents accidental leakage of build artifacts and secrets`,
      caption: {
        en: '.gitignore rules guard against committing bloated node_modules or sensitive credentials.',
        bn: '.gitignore ভারী লাইব্রেরি বা গোপন পাসওয়ার্ড কমিট হওয়া থেকে প্রজেক্টকে রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Forensic Inspection: git diff vs git diff --staged', bn: '৬. পরিবর্তন বিশ্লেষণ: git diff বনাম git diff --staged' } },
    {
      type: 'para',
      text: {
        en: 'Inspecting differences before committing prevents unintended edits from entering history. Running git diff highlights unstaged edits in your working directory. Adding the --staged flag compares staged changes against your last commit, revealing the precise payload prepared for the next commit.',
        bn: 'কমিট করার আগে পরিবর্তনগুলো খুঁটিয়ে দেখলে অনিচ্ছাকৃত ভুল ইতিহাসে ঢোকা বন্ধ হয়। সাধারণ git diff কমান্ড ওয়ার্কিং ডিরেক্টরির আনস্টেজড পরিবর্তন প্রদর্শন করে। এর সাথে --staged ফ্ল্যাগ যুক্ত করলে স্টেজিং এরিয়ার সাথে সর্বশেষ কমিটের পার্থক্য স্পষ্ট হয়ে ওঠে, যা নিশ্চিত করে পরবর্তী স্ন্যাপশটে কী যুক্ত হতে যাচ্ছে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Reviewing unstaged edits in working folder:
git diff
# Output:
# --- a/src/config.py
# +++ b/src/config.py
# @@ -5,2 +5,2 @@
# -PORT = 3000
# +PORT = 8080

# 2. Reviewing exactly what is locked into the staging area:
git diff --staged
# Output:
# --- a/package.json
# +++ b/package.json
# @@ -12,1 +12,1 @@
# -"version": "1.0.0"
# +"version": "1.1.0"
# Result: Precise verification of staging boundaries prior to commit creation`,
      caption: {
        en: 'git diff checks unstaged edits; git diff --staged audits the imminent commit payload.',
        bn: 'git diff আনস্টেজড পরিবর্তন দেখায়; git diff --staged পরবর্তী কমিটের বিষয়বস্তু দেখায়।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Atomic Commits: Conventional Commits and Metadata', bn: '৭. অ্যাটমিক কমিট: কনভেনশনাল কমিট ও মেটাডাটা' } },
    {
      type: 'para',
      text: {
        en: 'A Git commit is an immutable snapshot of the entire repository index at a point in time, bundled with author metadata, timestamp, and parent pointer. Professional teams practice Atomic Commits (one logical change per commit) using Conventional Commits formatting: feat: new capability, fix: bug repair, docs: documentation update.',
        bn: 'একটি গিট কমিট হলো নির্দিষ্ট সময়ের পুরো প্রজেক্টের একটি অপরিবর্তনীয় স্ন্যাপশট, যার সাথে লেখকের নাম, সময় ও প্যারেন্ট পয়েন্টার যুক্ত থাকে। দক্ষ দলগুলো সর্বদা Atomic Commit (প্রতি কমিটে একটিমাত্র স্বয়ংসম্পূর্ণ কাজ) নীতি এবং Conventional Commits পদ্ধতি (যেমন feat: নতুন ফিচার, fix: বাগ সমাধান) মেনে চলে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Recording an atomic, descriptive commit:
git commit -m "feat(auth): implement jwt token rotation on refresh endpoint"

# Output:
# [main 7a2b910] feat(auth): implement jwt token rotation on refresh endpoint
#  2 files changed, 48 insertions(+), 6 deletions(-)
# Result: Commit snapshot cryptographically sealed with SHA-1 7a2b910...`,
      caption: {
        en: 'Conventional commits structure messages for automated changelog generation.',
        bn: 'কনভেনশনাল কমিট বার্তাগুলোকে স্বয়ংক্রিয় চেঞ্জলগ তৈরির উপযোগী করে তোলে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Amending History: git commit --amend', bn: '৮. শেষ কমিট সংশোধন: git commit --amend' } },
    {
      type: 'para',
      text: {
        en: 'If you commit code and immediately realize you forgot to stage a small file or made a typo in the message, git commit --amend solves it. It replaces the tip commit with a fresh commit containing your latest staged changes and updated message, preserving a clean history. Never amend commits that have already been pushed to public shared remotes!',
        bn: 'কমিট করার সাথে সাথেই যদি খেয়াল হয় যে কোনো ছোট ফাইল যোগ করতে ভুলে গেছেন বা মেসেজে টাইপো হয়েছে, তবে git commit --amend দিয়ে তা সাথে সাথে ঠিক করা যায়। এটি আগের ভুল কমিটটি বদলে নতুন স্টেজ করা ফাইল সহ একটি ফ্রেশ কমিট বসিয়ে দেয়। তবে মনে রাখবেন: রিমোট বা শেয়ার্ড ব্রাঞ্চে পুশ করে ফেলা কমিট কখনোই amend করতে নেই!'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# You made a commit but forgot to stage the test file:
git add tests/test_auth.py

# Amend the previous commit without changing its message:
git commit --amend --no-edit

# Output:
# [main 9f4120a] feat(auth): implement jwt token rotation on refresh endpoint
#  Date: Sat Sep 26 12:00:00 2026
#  3 files changed, 72 insertions(+)
# Result: Previous commit SHA replaced cleanly; no messy "oops forgot test" commits!`,
      caption: {
        en: 'git commit --amend rolls staged fixes into the most recent commit without cluttering history.',
        bn: 'git commit --amend অতিরিক্ত বাজে কমিট না বানিয়ে শেষ কমিটেই ছোট ভুল সংশোধন করে নেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Git Object Anatomy: Blobs, Trees, Commits & Tags', bn: '৯. গিটের অভ্যন্তরীণ গঠন: ব্লব, ট্রি, কমিট ও ট্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Inside .git/objects, Git stores everything using 4 fundamental object types. Blobs store pure file content without filenames. Trees store directory hierarchies and permissions. Commits store tree pointers, parents, and author details. Tags store annotated release pointers.',
        bn: '.git/objects ফোল্ডারে গিট ৪টি অবজেক্ট দিয়ে সবকিছু পরিচালনা করে। Blob ফাইলের আসল কনটেন্ট রাখে। Tree ডিরেক্টরি গঠন ও ফাইলের নাম ধরে রাখে। Commit প্যারেন্ট ও লেখকের তথ্য রাখে। আর Tag স্থায়ী রিলিজ পয়েন্টার রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspecting Git's internal commit object using low-level plumbing commands:
git cat-file -p HEAD

# Output:
# tree 4b825dc642cb6eb9a060e54bf8d69288fbee4904
# parent 3b41fa80931298c92a95c479e02938472910fa72
# author Dev User <dev@corp.net> 1790424000 +0600
# committer Dev User <dev@corp.net> 1790424000 +0600
# 
# feat(auth): implement jwt token rotation on refresh endpoint
# Result: Commit object models DAG node pointing to root tree hash`,
      caption: {
        en: 'A commit object links a root directory tree hash to ancestral parent commit hashes.',
        bn: 'একটি কমিট অবজেক্ট রুট ডিরেক্টরি ট্রি এবং তার পূর্বপুরুষ প্যারেন্ট হ্যাশকে যুক্ত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Content-Addressable Storage and Deduplication', bn: '১০. কনটেন্ট-অ্যাড্রেসেবল স্টোরেজ ও ডেটা ডিডুপ্লিকেশন' } },
    {
      type: 'para',
      text: {
        en: 'Git is a Content-Addressable Key-Value Store. The key is the SHA hash of the content (header + size + byte stream), and the value is compressed zlib data. If two identical files exist with different names across different folders, Git stores the blob EXACTLY ONCE on disk, achieving extraordinary space efficiency.',
        bn: 'গিট হলো একটি কনটেন্ট-অ্যাড্রেসেবল কি-ভ্যালু স্টোর (Content-Addressable Store)। ফাইলের লেখার ওপর ভিত্তি করে একটি SHA হ্যাশ তৈরি হয় যা চাবি (Key) হিসেবে কাজ করে, আর মান (Value) হিসেবে সংকুচিত zlib ডেটা ডিস্কে জমা হয়। দুটি ভিন্ন ফোল্ডারে যদি একই লেখার দুটি ফাইল থাকে, গিট ডিস্কে ডেটাটি ঠিক একবারই রাখে, যা মেমোরির বিশাল সাশ্রয় করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Demonstrating content-addressable deduplication:
echo "Hello CodeShikhon" > file1.txt
echo "Hello CodeShikhon" > file2.txt

# Calculate Git blob hash for both files:
git hash-object file1.txt
# Output: 5b01859600a9446d5f7823f2f01f845d47565747

git hash-object file2.txt
# Output: 5b01859600a9446d5f7823f2f01f845d47565747

# Identical content yields the EXACT same 40-character key!
# Result: Zero duplicate data stored on disk; filenames live exclusively in Tree objects`,
      caption: {
        en: 'Identical file content produces identical blob hashes, deduplicating storage globally.',
        bn: 'অভিন্ন ফাইলের লেখা একই ব্লব হ্যাশ তৈরি করে, ফলে ডিস্কে তথ্যের কোনো অপচয় হয় না।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-snap-ex1',
      kind: 'predict',
      topic: 'git: git diff --staged comparison',
      question: {
        en: 'What does git diff --staged compare against?',
        bn: 'git diff --staged কমান্ডটি কার সাথে স্টেজিং এরিয়ার তুলনা করে?'
      },
      code: `/* Git diff staged comparison check */
/* git diff --staged */`,
      answer: 'last commit',
      accept: ['last commit', 'HEAD', 'the last commit', 'head'],
      hint: {
        en: 'It compares the staged index against HEAD.',
        bn: 'এটি স্টেজিং ইনডেক্সের সাথে HEAD বা শেষ কমিটের তুলনা করে।'
      },
      explanation: {
        en: 'git diff --staged compares changes in the Staging Area (Index) against the most recent commit (HEAD), revealing exactly what will be recorded in the next commit.',
        bn: 'git diff --staged স্টেজিং এরিয়ার সাথে সর্বশেষ কমিটের (HEAD) তুলনা করে দেখায় পরবর্তী কমিটে ঠিক কী কী তথ্য প্রবেশ করতে যাচ্ছে।'
      }
    },
    {
      id: 'git-snap-ex2',
      kind: 'mcq',
      topic: 'git: Interactive hunk staging flag',
      question: {
        en: 'Which git add flag enables interactive hunk-by-hunk patch staging?',
        bn: 'git add-এর কোন ফ্ল্যাগটি দিয়ে কোডের পরিবর্তনগুলোকে খণ্ডে খণ্ডে (hunk) ভাগ করে আংশিক স্টেজ করা যায়?'
      },
      options: [
        { en: 'git add -p (or --patch)', bn: 'git add -p (অথবা --patch)' },
        { en: 'git add -a', bn: 'git add -a' },
        { en: 'git add -f', bn: 'git add -f' },
        { en: 'git add --all', bn: 'git add --all' }
      ],
      answer: 0,
      hint: {
        en: '-p stands for patch.',
        bn: '-p দিয়ে patch বোঝায়।'
      },
      explanation: {
        en: 'The -p (patch) option steps through each changed section in working files, letting developers selectively stage or skip individual code hunks.',
        bn: 'git add -p প্রতিটি পরিবর্তনের খণ্ড আলাদাভাবে স্ক্রিনে দেখায় এবং বেছে বেছে নির্দিষ্ট কোড স্টেজে তোলার সুযোগ দেয়।'
      }
    },
    {
      id: 'git-snap-ex3',
      kind: 'mcq',
      topic: 'git: Blob object responsibility',
      question: {
        en: 'What information is stored inside a Git Blob object?',
        bn: 'গিটের একটি Blob অবজেক্টের ভেতরে কোন তথ্যটি সংরক্ষিত থাকে?'
      },
      options: [
        { en: 'Pure raw file contents (excluding file name and directory path)', bn: 'ফাইলের আসল টেক্সট বা বাইনারি ডেটা (ফাইলের নাম বা পাথ ছাড়া)' },
        { en: 'Directory structure and file permissions', bn: 'ডিরেক্টরি ও ফাইল পারমিশন' },
        { en: 'Commit author and timestamp', bn: 'কমিট লেখক ও সময়' },
        { en: 'Branch pointers', bn: 'ব্রাঞ্চ পয়েন্টার' }
      ],
      answer: 0,
      hint: {
        en: 'Blob stands for Binary Large Object (pure data payload). Filenames live in Tree objects.',
        bn: 'ব্লব শুধু ডেটা রাখে। ফাইলের নাম থাকে ট্রি (Tree) অবজেক্টে।'
      },
      explanation: {
        en: 'A Blob stores only file content. Directory hierarchies, permissions, and filenames are stored separately in Tree objects.',
        bn: 'একটি Blob অবজেক্ট শুধুমাত্র ফাইলের মূল লেখা বা কনটেন্ট সংরক্ষণ করে। ফাইলের নাম ও ডিরেক্টরি পাথ ট্রি (Tree) অবজেক্টের ভেতরে থাকে।'
      }
    }
  ],
  quiz: {
    id: 'git-snapshot-quiz',
    title: { en: 'Git Staging & Internals Quiz', bn: 'গিট স্টেজিং ও ইন্টারনালস কুইজ' },
    questions: [
      {
        id: 'sq1',
        kind: 'mcq',
        topic: 'git: Amending pushed commits danger',
        question: {
          en: 'Why is running git commit --amend dangerous on commits that have already been pushed to a public shared remote branch?',
          bn: 'পাবলিক বা শেয়ার্ড রিমোট ব্রাঞ্চে পুশ করে ফেলা কমিটে git commit --amend চালানো বিপজ্জনক কেন?'
        },
        options: [
          { en: 'It rewrites commit SHA history, creating divergent timelines for teammates who pulled the original commit', bn: 'এটি কমিট হ্যাশ বদলে ফেলে ইতিহাস পরিবর্তন করে, ফলে সহকর্মীদের কম্পিউটারের সাথে দ্বন্দ্ব তৈরি হয়' },
          { en: 'It deletes the .git folder', bn: 'এটি .git ফোল্ডার মুছে দেয়' },
          { en: 'It causes syntax errors in JavaScript', bn: 'সিনট্যাক্স এরর ঘটায়' },
          { en: 'It disconnects WiFi', bn: 'ওয়াইফাই বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Amending generates a brand new SHA hash, rewriting history.',
          bn: 'অ্যামেন্ড করলে সম্পূর্ণ নতুন হ্যাশ তৈরি হয় এবং ইতিহাস বদলে যায়।'
        },
        explanation: {
          en: 'git commit --amend creates a brand-new commit with a different hash. If teammates already based work on the old commit, amending requires force pushes and causes merge friction.',
          bn: 'git commit --amend আগের কমিটটি বদলে নতুন হ্যাশের কমিট বানায়। সহকর্মীরা যদি পুরনো কমিটটি আগেই নামিয়ে কাজ শুরু করে থাকেন, তবে তাদের কোডের সাথে প্রচণ্ড সংঘাত তৈরি হয়।'
        }
      },
      {
        id: 'sq2',
        kind: 'mcq',
        topic: 'git: Negation in .gitignore',
        question: {
          en: 'In a .gitignore file, what symbol negates a pattern to re-include a previously ignored file?',
          bn: '.gitignore ফাইলে বাদ পড়া কোনো ফাইলকে পুনরায় অন্তর্ভুক্ত করতে কোন চিহ্নটি ব্যবহৃত হয়?'
        },
        options: [
          { en: 'Exclamation mark (!)', bn: 'বিস্ময়বোধক চিহ্ন (!)' },
          { en: 'Tilde (~)', bn: 'টিল্ডে (~)' },
          { en: 'Asterisk (*)', bn: 'অ্যাস্টারিস্ক (*)' },
          { en: 'Hash (#)', bn: 'হ্যাশ (#)' }
        ],
        answer: 0,
        hint: {
          en: '! reverses the ignore pattern.',
          bn: '! নিয়মটিকে উল্টে দেয়।'
        },
        explanation: {
          en: 'A leading exclamation mark (!) in .gitignore negates the rule, ensuring matching files remain tracked even if a prior pattern ignored them.',
          bn: '.gitignore-এ কোনো লাইনের শুরুতে বিস্ময়বোধক চিহ্ন (!) দিলে আগের কোনো নিয়মে ফাইলটি বাদ পড়ে থাকলেও তা আবার গিটের নজরে আসে।'
        }
      },
      {
        id: 'sq3',
        kind: 'mcq',
        topic: 'git: diff vs staged comparison',
        question: {
          en: 'What is the fundamental difference between git diff and git diff --staged?',
          bn: 'git diff এবং git diff --staged-এর মধ্যে মৌলিক পার্থক্য কী?'
        },
        options: [
          { en: 'git diff compares your Working Directory against the Staging Area, while git diff --staged compares staged changes against your last commit', bn: 'git diff ওয়ার্কিং ডিরেক্টরির সাথে স্টেজিং এরিয়ার তুলনা করে, আর git diff --staged স্টেজের সাথে সর্বশেষ কমিটের তুলনা করে' },
          { en: 'git diff requires internet while git diff --staged works offline', bn: 'git diff-এর জন্য ইন্টারনেট লাগে আর git diff --staged অফলাইনে চলে' },
          { en: 'git diff --staged only works on image files', bn: 'git diff --staged শুধু ছবির ফাইলে কাজ করে' },
          { en: 'There is no difference between them', bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Unstaged vs staged comparison.',
          bn: 'আনস্টেজড বনাম স্টেজড তুলনা।'
        },
        explanation: {
          en: 'Bare git diff inspects changes not yet added to index, while --staged previews exactly what will enter the next commit snapshot.',
          bn: 'সাধারণ git diff যেসব পরিবর্তন এখনো স্টেজে ওঠেনি তা দেখায়, আর --staged পরবর্তী কমিটের জন্য প্রস্তুত অংশ দেখায়।'
        }
      },
      {
        id: 'sq4',
        kind: 'mcq',
        topic: 'git: blob object internal storage',
        question: {
          en: 'What does a Blob object store inside Git’s internal content-addressable database (.git/objects)?',
          bn: 'গিটের অভ্যন্তরীণ অবজেক্ট ডেটাবেসে (.git/objects) একটি Blob অবজেক্ট কী সংরক্ষণ করে?'
        },
        options: [
          { en: 'Only compressed raw file content without metadata, while filenames, directories, and permissions are stored in Tree objects', bn: 'মেটাডাটা ছাড়া কেবল ফাইলের মূল লেখা বা কনটেন্ট, অন্যদিকে ফাইলের নাম ও ডিরেক্টরি ট্রি অবজেক্টে সংরক্ষিত থাকে' },
          { en: 'The entire repository history including author emails and GPG keys', bn: 'লেখক ও জিপিজি চাবিসহ পুরো রিপোজিটরি ইতিহাস' },
          { en: 'The operating system environment variables', bn: 'অপারেটিং সিস্টেমের এনভায়রনমেন্ট ভ্যারিয়েবল' },
          { en: 'The commit message text only', bn: 'শুধু কমিট মেসেজের লেখা' }
        ],
        answer: 0,
        hint: {
          en: 'Blobs hold pure content only.',
          bn: 'ব্লব কেবল খাঁটি কনটেন্ট ধরে রাখে।'
        },
        explanation: {
          en: 'Blobs are pure data files identified by the hash of their content. File names, directory hierarchies, and execute bits are stored separately in Tree objects.',
          bn: 'Blob অবজেক্ট কেবল ফাইলের ভেতরের লেখা সংরক্ষণ করে; ফাইলের নাম ও পাথ থাকে Tree অবজেক্টে।'
        }
      }
    ]
  }
};
