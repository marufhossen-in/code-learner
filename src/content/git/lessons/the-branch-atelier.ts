import type { Lesson } from '../../../lib/types';

export const branchAtelierLesson: Lesson = {
  slug: 'the-branch-atelier',
  tech: 'git',
  title: {
    en: 'Git Advanced Branching: Stashing, Cherry-Pick & Release Tags',
    bn: 'গিট অ্যাডভান্সড ব্রাঞ্চিং: স্ট্যাশিং, চেরি-পিক ও রিলিজ ট্যাগ'
  },
  summary: {
    en: 'Master sophisticated Git workflow tactics across 10 structured topics. Understand branch topologies, shelving uncommitted work with git stash, and git stash pop vs apply. Explore capturing untracked files with -u, named stash management, renaming branches with git branch -m, transplanting commits via git cherry-pick, conflict resolution, and lightweight vs annotated release tags.',
    bn: '১০টি সুসংগঠিত পয়েন্টে অগ্রসর গিট কৌশল আয়ত্ত করুন। ব্রাঞ্চ টপোলজি কৌশল, git stash দিয়ে অসমাপ্ত কাজ তুলে রাখা এবং git stash pop বনাম apply বুঝুন। -u দিয়ে আনট্র্যাকড ফাইল স্ট্যাশ, নামযুক্ত স্ট্যাশ ব্যবস্থাপনা, git branch -m দিয়ে নাম পরিবর্তন, git cherry-pick দিয়ে কমিট স্থানান্তর, কনফ্লিক্ট সমাধান এবং হালকা বনাম অ্যানোটেটেড রিলিজ ট্যাগ আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-conflict-court',
    title: { en: 'Git Merge Conflicts: Three-Way Analysis, Markers & Rerere', bn: 'গিট মার্জ কনফ্লিক্ট: ৩-ওয়ে বিশ্লেষণ, মার্কার ও Rerere' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Branch Strategy: Long-Lived vs Ephemeral Feature Branches', bn: '১. ব্রাঞ্চ কৌশল: দীর্ঘমেয়াদী বনাম ক্ষণস্থায়ী ফিচার ব্রাঞ্চ' } },
    {
      type: 'para',
      text: {
        en: 'Modern engineering relies on two distinct branch categories. Long-lived branches (main, staging) reflect persistent deployment environments. Short-lived Feature Branches (feat/payment-gateway) isolate individual tickets, living for only 1 to 3 days before merging back into trunk.',
        bn: 'আধুনিক সফটওয়্যার ইঞ্জিনিয়ারিং মূলত দুই ধরণের ব্রাঞ্চ ব্যবহার করে। দীর্ঘমেয়াদী ব্রাঞ্চ (main বা staging) প্রোডাকশন সার্ভারের লাইভ কোড ধরে রাখে। আর ক্ষণস্থায়ী ফিচার ব্রাঞ্চ (যেমন feat/payment-gateway) কোনো নির্দিষ্ট কাজের জন্য তৈরি হয় এবং ১ থেকে ৩ দিনের মধ্যে মূল কোডে মার্জ হয়ে মুছে যায়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Advanced Git Workflows: Stash Stack & Cherry-Pick',
        bn: 'অ্যাডভান্সড গিট ওয়ার্কফ্লো: স্ট্যাশ স্ট্যাক ও চেরি-পিক'
      },
      caption: {
        en: 'Stashes shelve dirty working state onto a LIFO stack, while cherry-pick surgically transplants specific commits.',
        bn: 'স্ট্যাশ অসম্পূর্ণ কাজ সাময়িক তুলে রাখে, অন্যদিকে চেরি-পিক নির্দিষ্ট কমিটকে এক স্থান থেকে অন্য স্থানে প্রতিস্থাপন করে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Stash Workflow -->
  <rect x="25" y="35" width="180" height="85" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="115" y="60" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Working Directory</text>
  <text x="115" y="80" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Dirty Edits</text>
  <text x="115" y="100" text-anchor="middle" fill="#cbd5e1" font-size="10" font-family="monospace">git stash push</text>
  <path d="M 215 77 L 250 77" stroke="#64748b" stroke-width="2"/>
  <!-- Stash Stack -->
  <rect x="255" y="35" width="170" height="85" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="340" y="60" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">LIFO Stash Stack</text>
  <text x="340" y="80" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">stash@{0} / stash@{1}</text>
  <text x="340" y="100" text-anchor="middle" fill="#e2e8f0" font-size="10" font-family="monospace">git stash pop</text>
  <path d="M 435 77 L 470 77" stroke="#64748b" stroke-width="2"/>
  <!-- Cherry Pick -->
  <rect x="475" y="35" width="180" height="85" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="565" y="60" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">Cherry-Pick</text>
  <text x="565" y="80" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">git cherry-pick SHA</text>
  <text x="565" y="100" text-anchor="middle" fill="#a7f3d0" font-size="10" font-family="monospace">Surgical Transplant</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard professional branch naming conventions:
# feat/   -> New product capabilities (e.g. feat/cart-checkout)
# fix/    -> Defect repairs (e.g. fix/null-pointer-login)
# chore/  -> Dependency upgrades (e.g. chore/bump-nextjs-15)

git switch -c feat/stripe-webhook
# Output:
# Switched to a new branch 'feat/stripe-webhook'
# Result: Clean, self-documenting feature branch isolated from main`,
      caption: {
        en: 'Prefixing branches with feat/ or fix/ establishes clear team governance.',
        bn: 'feat/ বা fix/ উপসর্গ দিয়ে ব্রাঞ্চ তৈরি করলে দলের সবার জন্য কাজ বোঝা সহজ হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Stash Stack: Shelving Unfinished Dirty Work', bn: '২. স্ট্যাশ স্ট্যাক: অসমাপ্ত কাজ সাময়িক তুলে রাখা (git stash)' } },
    {
      type: 'para',
      text: {
        en: 'When an urgent production bug occurs, you cannot switch branches while your working directory contains unfinished, uncommitted edits. The git stash command takes modified tracked files, shelves them onto an internal LIFO (Last-In-First-Out) stack, and restores your working directory to a clean commit state.',
        bn: 'জরুরি কোনো বাগ ফিক্স করার সময় অগোছালো ও অসমাপ্ত কোড রেখে অন্য ব্রাঞ্চে যাওয়া যায় না। git stash কমান্ড আপনার বর্তমান অসম্পূর্ণ পরিবর্তনগুলোকে একটি অভ্যন্তরীণ LIFO (Last-In-First-Out) স্ট্যাকের ওপর তুলে জমা রাখে এবং আপনার ওয়ার্কিং ফোল্ডারটিকে সম্পূর্ণ ফ্রেশ অবস্থায় ফিরিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Working on unfinished feature, but urgent hotfix demanded:
git status -s
# Output:
#  M src/api.py

# Stash current uncommitted modifications:
git stash
# Output:
# Saved working directory and index state WIP on feat/stripe: 7a2b910 feat: start webhook

# Working directory is now clean! Safe to switch branches:
git switch main
# Result: Unfinished edits protected on stash stack`,
      caption: {
        en: 'git stash cleans your working directory without requiring a premature dirty commit.',
        bn: 'git stash কাঁচা বা অসমাপ্ত কোড কমিট না করেই ওয়ার্কিং ফোল্ডার পরিষ্কার করে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Reapplying Stashes: git stash pop vs apply', bn: '৩. স্ট্যাশ ফেরত আনা: git stash pop বনাম apply' } },
    {
      type: 'para',
      text: {
        en: 'When ready to resume work, two commands restore shelved edits. Running pop applies the topmost entry (index 0) and immediately removes it from storage. In contrast, apply restores modifications while retaining the saved patch, allowing you to replay identical edits across multiple workspaces.',
        bn: 'কাজ শেষে পূর্বের অবস্থায় ফিরতে দুটি কমান্ড ব্যবহৃত হয়। pop চালালে সাম্প্রতিকতম এন্ট্রি (ইনডেক্স ০) কোডে ফিরে আসে এবং সাথে সাথে স্ট্যাক থেকে মুছে যায়। পক্ষান্তরে apply কোডে পরিবর্তন ফিরিয়ে আনে কিন্তু রেকর্ডটি অক্ষত রাখে, যা একাধিক ব্রাঞ্চে একই প্যাচ প্রয়োগে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Inspect all shelved stashes:
git stash list
# Output:
# stash@{0}: WIP on feat/stripe: 7a2b910 feat: start webhook

# 2. Restore modifications and delete from stash memory (Pop):
git stash pop
# Output:
# Auto-merging src/api.py
# On branch feat/stripe-webhook
# Changes not staged for commit:
#   modified:   src/api.py
# Dropped refs/stash@{0} (a123f89...)
# Result: Modifications restored to working tree; stash queue emptied`,
      caption: {
        en: 'pop restores and drops; apply restores while preserving the stash object.',
        bn: 'pop কোড ফিরিয়ে এনে স্ট্যাশ মোছে; apply কোড ফিরালেও স্ট্যাশ রেখে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Capturing Untracked Files: git stash -u', bn: '৪. আনট্র্যাকড ফাইল সহ স্ট্যাশ: git stash -u ফ্ল্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'By default, Git shelves only tracked modifications, ignoring newly created untracked items. Running the plain command leaves unversioned documents cluttering your workspace. Adding the -u (or --include-untracked) flag instructs the engine to capture both modified tracked content and brand new filesystem additions.',
        bn: 'ডিফল্টভাবে Git কেবল ট্র্যাক করা পরিবর্তনগুলো সংরক্ষণ করে এবং নতুন তৈরি আনট্র্যাকড ফাইলগুলো ফেলে রেখে যায়। সাধারণ কমান্ড দিলে নতুন ফাইলগুলো ওয়ার্কস্পেসেই রয়ে যায়। -u (বা --include-untracked) ফ্ল্যাগ যুক্ত করলে পুরনো পরিবর্তনের পাশাপাশি সম্পূর্ণ নতুন ডেটাও স্ট্যাশে সংরক্ষিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Created a brand new file:
touch src/stripe_webhook_handler.py

# Stash EVERYTHING including untracked files:
git stash -u
# Output:
# Saved working directory and index state WIP on feat/stripe: 7a2b910
# (src/stripe_webhook_handler.py is now safely stored inside stash object!)

# Working tree is 100% spotless!
git status
# nothing to commit, working tree clean`,
      caption: {
        en: '-u sweeps untracked new files into the stash, leaving an impeccably clean working tree.',
        bn: '-u নতুন আনট্র্যাকড ফাইলগুলোকেও স্ট্যাশে ভরে সম্পূর্ণ পরিষ্কার ওয়ার্কিং ট্রি নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Named Stash Management: git stash push -m', bn: '৫. নামযুক্ত স্ট্যাশ ব্যবস্থাপনা: git stash push -m' } },
    {
      type: 'para',
      text: {
        en: 'Accumulating multiple generic saved states leads to confusion. Using git stash push -m "descriptive label" assigns a human-readable title. You can selectively inspect patches with git stash show -p or drop obsolete entries from the stack.',
        bn: 'একের পর এক সাধারণ রেকর্ড জমতে থাকলে বিভ্রান্তি তৈরি হয়। git stash push -m "অর্থপূর্ণ বার্তা" দিয়ে প্রতিটি রেকর্ডের একটি সুন্দর নাম দেওয়া যায়। পরে git stash show -p দিয়ে ভেতরের কোড দেখা যায় কিংবা অপ্রয়োজনীয় এন্ট্রি ড্রপ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Creating descriptive named stashes:
git stash push -m "WIP: experimental graph query optimization"

# Listing labeled stash registry:
git stash list
# Output:
# stash@{0}: On feat/perf: WIP: experimental graph query optimization
# stash@{1}: On main: WIP: emergency hotfix logging

# Dropping a specific obsolete stash:
git stash drop stash@{1}
# Output: Dropped stash@{1} (b7189c0...)`,
      caption: {
        en: 'Named stashes prevent context loss when juggling multiple work streams.',
        bn: 'নামযুক্ত স্ট্যাশ একাধিক কাজ একসাথে সামলানোর সময় বিভ্রান্তি দূর করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Branch Metadata: Renaming Branches with git branch -m', bn: '৬. ব্রাঞ্চের নাম পরিবর্তন: git branch -m' } },
    {
      type: 'para',
      text: {
        en: 'Renaming a local branch is done with git branch -m old-name new-name. If you are already working on the target, providing only the new title renames the active pointer. To update upstream, push the fresh pointer and delete the obsolete remote reference.',
        bn: 'লোকাল ব্রাঞ্চের নাম বদলাতে git branch -m old-name new-name কমান্ড দেওয়া হয়। আপনি যদি ইতিমধ্যেই কাঙ্ক্ষিত ধারায় থাকেন, তবে শুধু নতুন নাম দিলেই চলতি পয়েন্টার বদলে যায়। রিমোট আপডেট করতে নতুন নামে পুশ করে পুরনো রিমোট রেফারেন্স মুছে দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Rename currently checked-out branch:
git branch -m feat/payment-v2

# Rename an arbitrary branch from elsewhere:
git branch -m bug/auth-err bug/oauth-timeout

# Syncing rename to remote repository:
git push origin -u feat/payment-v2        # 1. Push new branch name
git push origin --delete feat/payment-old # 2. Eradicate legacy remote name

# Output:
# Branch renamed successfully across local and remote repositories`,
      caption: {
        en: 'git branch -m updates local pointer filenames without modifying commit history.',
        bn: 'git branch -m কোনো কমিট না বদলেই নিরাপদে লোকাল ব্রাঞ্চের নাম পরিবর্তন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Selective Commit Transplantation: git cherry-pick', bn: '৭. নির্দিষ্ট কমিট প্রতিস্থাপন: git cherry-pick কমান্ড' } },
    {
      type: 'para',
      text: {
        en: 'Merging or rebasing pulls an entire sequence of commits. When you want EXACTLY ONE specific commit from a feature branch without merging the rest of the incomplete work, git cherry-pick <commit-sha> applies that single commit’s changes onto your active HEAD as a brand-new commit.',
        bn: 'মার্জ বা রিব্যাস পুরো ব্রাঞ্চের সব কমিটকে একসাথে নিয়ে আসে। কিন্তু অন্য কোনো ব্রাঞ্চের অসম্পূর্ণ কাজের মাঝখান থেকে যদি আপনার ঠিক একটিমাত্র দরকারী কমিট প্রয়োজন হয়, তবে git cherry-pick <commit-sha> কমান্ড দিয়ে সেই নির্দিষ্ট কমিটটিকে হুবহু আপনার বর্তমান ব্রাঞ্চে এনে বসানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# You are on 'main' and need a critical bugfix made on 'feat/beta' (commit d481c02):
git switch main

# Cherry-pick the isolated bugfix commit:
git cherry-pick d481c02

# Output:
# [main e9011ba] fix: resolve memory leak in connection pool
#  Author: Sarah Dev <sarah@corp.net>
#  1 file changed, 4 insertions(+), 1 deletion(-)
# Result: Commit d481c02 transplanted onto main with fresh commit SHA e9011ba`,
      caption: {
        en: 'Cherry-picking replicates an isolated commit patch onto the active branch.',
        bn: 'চেরি-পিকিং অন্য ব্রাঞ্চ থেকে একটিমাত্র নির্দিষ্ট কমিট এনে বর্তমান শাখায় প্রয়োগ করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Cherry-Pick Conflicts and Aborting', bn: '৮. চেরি-পিক কনফ্লিক্ট ও রদবদল' } },
    {
      type: 'para',
      text: {
        en: 'If the cherry-picked patch touches lines that differ from your active branch, a conflict occurs. You resolve the conflicted files, stage them with git add, and finalize with git cherry-pick --continue. If the conflict is intractable, git cherry-pick --abort halts the operation and restores state cleanly.',
        bn: 'চেরি-পিক করা কোডটি যদি বর্তমান ব্রাঞ্চের কোডের সাথে না মেলে, তবে কনফ্লিক্ট তৈরি হয়। তখন ফাইলটি এডিট করে কনফ্লিক্ট ঠিক করতে হয়, git add দিয়ে স্টেজ করতে হয় এবং git cherry-pick --continue দিয়ে সম্পন্ন করতে হয়। ঝামেলা বেশি মনে হলে git cherry-pick --abort দিয়ে কাজটি সাথে সাথে বাতিল করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Conflict during cherry-pick:
git cherry-pick 7f33910
# Output:
# error: could not apply 7f33910... fix: calculation logic
# hint: after resolving the conflicts, mark the corrected paths with 'git add'
# hint: and run 'git cherry-pick --continue'

# Option A: Abort cleanly
git cherry-pick --abort

# Option B: Fix, stage, and continue
git add src/calc.py
git cherry-pick --continue
# Output: [main c8812a1] fix: calculation logic applied cleanly`,
      caption: {
        en: 'git cherry-pick --abort safely returns your branch to its pre-pick state.',
        bn: 'git cherry-pick --abort কোনো ঝামেলা ছাড়াই ব্রাঞ্চকে পূর্বের অবস্থায় ফিরিয়ে আনে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Software Release Anchors: Lightweight vs Annotated Tags', bn: '৯. সফটওয়্যার রিলিজ ট্যাগ: লাইটওয়েট বনাম অ্যানোটেটেড ট্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Tags mark specific historical commits as release milestones (e.g. v1.0.0). A Lightweight Tag (git tag v1.0.0) is just a private pointer. An Annotated Tag (git tag -a v1.0.0 -m "Release v1.0.0") is a full Git object storing the tagger name, email, timestamp, message, and cryptographic signature.',
        bn: 'ট্যাগ কোনো নির্দিষ্ট কমিটকে সফটওয়্যার রিলিজ মাইলস্টোন (যেমন v1.0.0) হিসেবে চিহ্নিত করে। Lightweight Tag (git tag v1.0.0) কেবল একটি ব্যক্তিগত পয়েন্টার। আর Annotated Tag (git tag -a v1.0.0 -m "Release v1.0.0") হলো একটি পূর্ণাঙ্গ গিট অবজেক্ট যাতে রিলিজদাতার নাম, ইমেইল, সময় ও বার্তা স্থায়ীভাবে সংরক্ষিত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Creating a production annotated release tag:
git tag -a v2.4.0 -m "Production Release: multi-region database support"

# 2. Inspecting tag metadata:
git show v2.4.0
# Output:
# tag v2.4.0
# Tagger: Alex Lead <alex@corp.net>
# Date:   Sat Sep 26 12:00:00 2026 +0600
# 
# Production Release: multi-region database support
# commit 9f4120a...
# Result: Cryptographically anchored release version frozen in time`,
      caption: {
        en: 'Annotated tags create immutable, auditable release checkpoints for CI/CD pipelines.',
        bn: 'অ্যানোটেটেড ট্যাগ CI/CD পাইপলাইনের জন্য অপরিবর্তনীয় রিলিজ চেকপয়েন্ট তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Publishing Tags to Remote Repositories', bn: '১০. রিমোট রিপোজিটরিতে রিলিজ ট্যাগ প্রকাশনা' } },
    {
      type: 'para',
      text: {
        en: 'By default, running git push does NOT upload tags to remote servers like GitHub. Tags must be transferred explicitly: git push origin v2.4.0 publishes an individual release tag, while git push origin --tags transfers all local tags at once, triggering automated GitHub Release workflows.',
        bn: 'ডিফল্টভাবে সাধারণ git push কমান্ড দিলে লোকাল ট্যাগগুলো রিমোট সার্ভারে (যেমন GitHub) যায় না। ট্যাগ আলাদাভাবে পাঠাতে হয়: git push origin v2.4.0 একটি নির্দিষ্ট ট্যাগ আপলোড করে, আর git push origin --tags সমস্ত লোকাল ট্যাগ একবারে সার্ভারে পাঠিয়ে স্বয়ংক্রিয় GitHub Release সক্রিয় করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Push specific release tag to remote:
git push origin v2.4.0

# Output:
# Total 0 (delta 0), reused 0 (delta 0), pack-reused 0
# To https://github.com/corp/platform.git
#  * [new tag]         v2.4.0 -> v2.4.0

# Delete remote tag if created mistakenly:
git push origin --delete v2.4.0
# Output: - [deleted]         v2.4.0`,
      caption: {
        en: 'Tags must be explicitly pushed to trigger automated GitHub Release and deployment builds.',
        bn: 'GitHub Release চালু করতে ট্যাগগুলোকে বিশেষভাবে রিমোটে পুশ করতে হয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-adv-ex1',
      kind: 'predict',
      topic: 'git: git stash untracked files flag',
      question: {
        en: 'What flag must be passed to git stash to include newly created untracked files into the stash?',
        bn: 'নতুন তৈরি হওয়া আনট্র্যাকড ফাইলগুলোকেও স্ট্যাশে অন্তর্ভুক্ত করতে git stash কমান্ডে কোন ফ্ল্যাগটি দিতে হয়?'
      },
      code: `/* Git stash including untracked files */
/* git stash ___ */`,
      answer: '-u',
      accept: ['-u', '--include-untracked', '-a', '--all'],
      hint: {
        en: '-u stands for untracked.',
        bn: '-u দিয়ে untracked বোঝায়।'
      },
      explanation: {
        en: 'By default, git stash only shelves modified tracked files. The -u (or --include-untracked) flag forces Git to stash untracked files as well.',
        bn: 'সাধারণত git stash শুধু পুরনো ফাইলের পরিবর্তন জমা রাখে। -u ফ্ল্যাগ দিলে এটি নতুন আনট্র্যাকড ফাইলগুলোকেও স্ট্যাশে ভরে নেয়।'
      }
    },
    {
      id: 'git-adv-ex2',
      kind: 'mcq',
      topic: 'git: git cherry-pick purpose',
      question: {
        en: 'What is the primary role of the git cherry-pick <commit-sha> command?',
        bn: 'git cherry-pick <commit-sha> কমান্ডের মূল কাজ কী?'
      },
      options: [
        { en: 'To copy a specific isolated commit from another branch and apply it onto the active branch', bn: 'অন্য কোনো ব্রাঞ্চ থেকে ঠিক একটি নির্দিষ্ট কমিটের পরিবর্তন এনে বর্তমান ব্রাঞ্চে প্রয়োগ করা' },
        { en: 'To delete all branches except main', bn: 'মেইন ছাড়া সব ব্রাঞ্চ মুছে ফেলা' },
        { en: 'To squash all commits in history', bn: 'ইতিহাসের সব কমিট জোড়া লাগানো' },
        { en: 'To clone a remote repository', bn: 'রিমোট রিপোজিটরি ক্লোন করা' }
      ],
      answer: 0,
      hint: {
        en: 'It picks a single commit like picking a cherry.',
        bn: 'এটি ফলের মতো বাছাই করে একটিমাত্র কমিট তুলে আনে।'
      },
      explanation: {
        en: 'git cherry-pick applies the changes introduced by a single existing commit from anywhere in the repository onto the current working HEAD.',
        bn: 'git cherry-pick রিপোজিটরির যেকোনো ব্রাঞ্চ থেকে নির্দিষ্ট একটি কমিটের পরিবর্তন তুলে এনে বর্তমান সক্রিয় ব্রাঞ্চে নতুন কমিট হিসেবে যুক্ত করে।'
      }
    },
    {
      id: 'git-adv-ex3',
      kind: 'mcq',
      topic: 'git: Annotated vs lightweight tags',
      question: {
        en: 'Why are Annotated Tags (git tag -a) preferred over Lightweight Tags for official software releases?',
        bn: 'অফিসিয়াল সফটওয়্যার রিলিজের ক্ষেত্রে সাধারণ ট্যাগের চেয়ে Annotated Tag (git tag -a) কেন পছন্দনীয়?'
      },
      options: [
        { en: 'Annotated tags store complete metadata including tagger name, email, timestamp, and release message', bn: 'অ্যানোটেটেড ট্যাগ সম্পূর্ণ মেটাডাটা যেমন রিলিজদাতার নাম, ইমেইল, সময় ও রিলিজ মেসেজ স্থায়ীভাবে সংরক্ষণ করে' },
        { en: 'Lightweight tags cannot be pushed to GitHub', bn: 'হালকা ট্যাগ পুশ করা যায় না' },
        { en: 'Annotated tags compress repository size', bn: 'এটি সাইজ ছোট করে' },
        { en: 'Lightweight tags expire after 30 days', bn: 'হালকা ট্যাগ ৩০ দিনে নষ্ট হয়' }
      ],
      answer: 0,
      hint: {
        en: 'Annotated tags are true Git objects with author metadata.',
        bn: 'অ্যানোটেটেড ট্যাগ হলো পূর্ণাঙ্গ অবজেক্ট যাতে লেখকের সব তথ্য থাকে।'
      },
      explanation: {
        en: 'Annotated tags are full Git objects containing author information, date, and verification messages, making them auditable release milestones.',
        bn: 'অ্যানোটেটেড ট্যাগ একটি স্থায়ী গিট অবজেক্ট যা রিলিজদাতার নাম, সময় ও চেঞ্জলগ মেসেজ সংরক্ষণ করে একটি নির্ভরযোগ্য অডিট হিস্টোরি তৈরি করে।'
      }
    }
  ],
  quiz: {
    id: 'git-advanced-branching-quiz',
    title: { en: 'Git Advanced Branching & Stashing Quiz', bn: 'গিট অ্যাডভান্সড ব্রাঞ্চিং ও স্ট্যাশিং কুইজ' },
    questions: [
      {
        id: 'abq1',
        kind: 'mcq',
        topic: 'git: git stash pop vs apply',
        question: {
          en: 'What is the operational difference between git stash pop and git stash apply?',
          bn: 'git stash pop এবং git stash apply-এর মধ্যে মূল কার্যকর পার্থক্য কী?'
        },
        options: [
          { en: 'pop applies the changes and removes the stash from the list; apply keeps the stash on the stack after applying', bn: 'pop পরিবর্তন ফিরিয়ে এনে স্ট্যাশ থেকে মুছে দেয়; আর apply পরিবর্তন ফিরিয়ে আনলেও স্ট্যাশের ভেতরে তা রেখে দেয়' },
          { en: 'pop creates a commit; apply does not', bn: 'pop কমিট তৈরি করে' },
          { en: 'apply only works on the main branch', bn: 'apply শুধু মেইন ব্রাঞ্চে চলে' },
          { en: 'pop deletes uncommitted code permanently', bn: 'pop কোড চিরতরে মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'One drops the stash record; the other retains it.',
          bn: 'একটি রেকর্ডটি মুছে ফেলে; অন্যটি রেখে দেয়।'
        },
        explanation: {
          en: 'git stash pop restores changes and immediately drops the entry from the stash stack. git stash apply re-applies the patch while leaving it in the stash registry.',
          bn: 'git stash pop কোড ফিরিয়ে এনে সাথে সাথে স্ট্যাশ মেমোরি খালি করে দেয়। আর apply কোড ফিরালেও স্ট্যাশ রেজিস্ট্রি থেকে তা মোছে না।'
        }
      },
      {
        id: 'abq2',
        kind: 'mcq',
        topic: 'git: Pushing tags to remote',
        question: {
          en: 'Why does a standard git push command fail to upload newly created tags to GitHub by default?',
          bn: 'ডিফল্টভাবে সাধারণ git push কমান্ড দিলে নতুন তৈরি হওয়া ট্যাগগুলো GitHub-এ আপলোড হয় না কেন?'
        },
        options: [
          { en: 'Git requires tags to be pushed explicitly (e.g. git push origin <tag> or --tags) to avoid accidental publication of local release markers', bn: 'লোকাল রিলিজ মার্কার যাতে দুর্ঘটনাবশত লাইভে না যায়, সেজন্য গিট ট্যাগগুলোকে বিশেষভাবে (যেমন git push origin <tag>) পুশ করতে বাধ্য করে' },
          { en: 'GitHub does not support tags', bn: 'GitHub ট্যাগ সাপোর্ট করে না' },
          { en: 'Tags can only be created via the GitHub web interface', bn: 'ট্যাগ শুধু ওয়েবসাইটে তৈরি করা যায়' },
          { en: 'Tags are stored in RAM only', bn: 'ট্যাগ শুধু র্যামে থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Tags are not branches; they require explicit push flags.',
          bn: 'ট্যাগ কোনো ব্রাঞ্চ নয়; এগুলো পাঠাতে স্পষ্ট ফ্ল্যাগ লাগে।'
        },
        explanation: {
          en: 'Git intentionally isolates tags from regular branch pushes. You must explicitly specify the tag name or pass --tags to upload release anchors.',
          bn: 'গিট ইচ্ছাকৃতভাবেই সাধারণ ব্রাঞ্চ পুশের সাথে ট্যাগ পাঠায় না। রিলিজ মার্কার পাঠাতে স্পষ্টভাবে ট্যাগের নাম অথবা --tags ফ্ল্যাগ উল্লেখ করতে হয়।'
        }
      },
      {
        id: 'abq3',
        kind: 'mcq',
        topic: 'git: cherry-pick command purpose',
        question: {
          en: 'What does the git cherry-pick <commit-hash> command accomplish?',
          bn: 'git cherry-pick <commit-hash> কমান্ডের মাধ্যমে কী করা হয়?'
        },
        options: [
          { en: 'It copies a specific commit from another branch and replays it onto the current active branch as a new commit', bn: 'এটি অন্য কোনো ব্রাঞ্চের নির্দিষ্ট একটি কমিটের পরিবর্তনকে কপি করে বর্তমান সক্রিয় ব্রাঞ্চে একটি নতুন কমিট হিসেবে যোগ করে' },
          { en: 'It deletes the target commit from all branches', bn: 'সব ব্রাঞ্চ থেকে টার্গেট কমিট মুছে ফেলে' },
          { en: 'It downloads new tags from GitHub', bn: 'গিটহাব থেকে নতুন ট্যাগ ডাউনলোড করে' },
          { en: 'It creates a full backup zip of the repository', bn: 'রিপোজিটরির সম্পূর্ণ ব্যাকআপ জিপ তৈরি করে' }
        ],
        answer: 0,
        hint: {
          en: 'Surgically replays a single commit onto current HEAD.',
          bn: 'নির্দিষ্ট একটি কমিটকে বর্তমান HEAD-এ পুনর্নির্মাণ করে।'
        },
        explanation: {
          en: 'Cherry-pick extracts the diff of a specific commit and applies it as a brand-new commit on the currently checked out branch.',
          bn: 'cherry-pick অন্য ব্রাঞ্চের নির্দিষ্ট কমিটকে কপি করে এনে বর্তমান ব্রাঞ্চে নতুন একটি কমিট তৈরি করে।'
        }
      },
      {
        id: 'abq4',
        kind: 'mcq',
        topic: 'git: annotated tag benefits',
        question: {
          en: 'Why are annotated tags (git tag -a v1.0.0 -m "release") preferred over lightweight tags for production releases?',
          bn: 'প্রোডাকশন রিলিজের ক্ষেত্রে সাধারণ ট্যাগের বদলে অ্যানোটেটেড ট্যাগ (git tag -a v1.0.0 -m "release") কেন বেশি উপযোগী?'
        },
        options: [
          { en: 'Annotated tags store complete metadata including author name, email, creation date, and release notes as a permanent Git object', bn: 'অ্যানোটেটেড ট্যাগ একটি স্থায়ী গিট অবজেক্ট হিসেবে রিলিজদাতার নাম, ইমেইল, তারিখ ও রিলিজ নোটস সংরক্ষণ করে' },
          { en: 'Lightweight tags take more disk space', bn: 'লাইটওয়েট ট্যাগ বেশি ডিস্ক স্পেস নেয়' },
          { en: 'Annotated tags can only be created by repository owners', bn: 'অ্যানোটেটেড ট্যাগ কেবল রিপোজিটরি মালিকরাই তৈরি করতে পারে' },
          { en: 'Lightweight tags cannot be viewed in git log', bn: 'লাইটওয়েট ট্যাগ git log-এ দেখা যায় না' }
        ],
        answer: 0,
        hint: {
          en: 'Stores author, date, and release message metadata.',
          bn: 'লেখক, তারিখ ও রিলিজ বার্তার মেটাডাটা রাখে।'
        },
        explanation: {
          en: 'Annotated tags create full Git database objects containing author details, timestamps, and release messages, providing auditability for official releases.',
          bn: 'অ্যানোটেটেড ট্যাগ সম্পূর্ণ গিট অবজেক্ট তৈরি করে যাতে অডিট এবং রিলিজ হিস্টোরি নিখুঁত থাকে।'
        }
      }
    ]
  }
};
