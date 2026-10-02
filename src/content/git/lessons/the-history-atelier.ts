import type { Lesson } from '../../../lib/types';

export const historyAtelierLesson: Lesson = {
  slug: 'the-history-atelier',
  tech: 'git',
  title: {
    en: 'Git History & Inspection: Log, Show, Blame, Bisect & Reflog',
    bn: 'গিট ইতিহাস ও পরিদর্শন: Log, Show, Blame, Bisect ও Reflog'
  },
  summary: {
    en: 'Master Git forensic inspection and undo operations across 10 structured topics. Learn git log formatting flags, deep commit inspection with git show, historical diff comparisons, and line-by-line git blame. Explore binary search bug hunting with git bisect, the git reflog safety net, modern git restore, git reset (--soft, --mixed, --hard), and public undoing with git revert.',
    bn: '১০টি সুসংগঠিত পয়েন্টে গিটের ইতিহাস অডিট ও ভুল সংশোধন আয়ত্ত করুন। git log ফরম্যাটিং ফ্ল্যাগ, git show দিয়ে বিস্তারিত বিশ্লেষণ, ঐতিহাসিক ডিফারেন্স তুলনা এবং git blame শিখুন। git bisect দিয়ে স্বয়ংক্রিয় বাগ সন্ধান, git reflog নিরাপত্তা বলয়, আধুনিক git restore, git reset (--soft, --mixed, --hard) এবং git revert দিয়ে নিরাপদ প্রত্যাবর্তন আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-grand-timeline',
    title: { en: 'Git Rebase: Linear History, Interactive Squashing & Autosquash', bn: 'গিট রিব্যাস: লিনিয়ার ইতিহাস, ইন্টারঅ্যাক্টিভ স্কোয়াশ ও অটো-স্কোয়াশ' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Forensic History Navigation: Advanced git log Filtering', bn: '১. সুনির্দিষ্ট ইতিহাস দর্শন: অগ্রসর git log ফিল্টারিং' } },
    {
      type: 'para',
      text: {
        en: 'The git log command inspects repository commit history. Rather than scrolling through dense text, power developers use formatting flags: git log --oneline produces compact hashes; git log -p displays patch diffs; and git log --author="Alex" --since="2 weeks ago" filters commits chronologically.',
        bn: 'git log কমান্ড রিপোজিটরির সমস্ত কমিটের ইতিহাস দেখায়। পুরো লেখা স্ক্রল না করে অভিজ্ঞরা ফ্ল্যাগ ব্যবহার করেন: git log --oneline এক লাইনে সংক্ষিপ্ত হ্যাশ দেয়; git log -p কোডের পরিবর্তন সহ দেখায়। আর git log --author="Alex" --since="2 weeks ago" নির্দিষ্ট ব্যক্তি ও সময়ের ভিত্তিতে নিখুঁত ফিল্টার করে।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The Git Undo & Reset Spectrum',
        bn: 'গিট আনডু ও রিসেট স্তরবিন্যাস'
      },
      caption: {
        en: 'git reset rewinds local pointers with varying preservation levels, while git revert safely inverts changes in public history.',
        bn: 'git reset লোকাল পয়েন্টার পেছায়, আর git revert পাবলিক ইতিহাসে নিরাপদ বিপরীত কমিট তৈরি করে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Soft Reset -->
  <rect x="25" y="40" width="140" height="70" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>
  <text x="95" y="65" text-anchor="middle" fill="#34d399" font-size="12" font-weight="bold" font-family="monospace">reset --soft</text>
  <text x="95" y="85" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Moves HEAD</text>
  <text x="95" y="98" text-anchor="middle" fill="#a7f3d0" font-size="9" font-family="monospace">Index Staged Intact</text>
  <!-- Mixed Reset -->
  <rect x="185" y="40" width="140" height="70" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="255" y="65" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">reset --mixed</text>
  <text x="255" y="85" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Clears Index</text>
  <text x="255" y="98" text-anchor="middle" fill="#cbd5e1" font-size="9" font-family="monospace">Working Tree Kept</text>
  <!-- Hard Reset -->
  <rect x="345" y="40" width="140" height="70" rx="8" fill="#1e293b" stroke="#f43f5e" stroke-width="1.5"/>
  <text x="415" y="65" text-anchor="middle" fill="#fb7185" font-size="12" font-weight="bold" font-family="monospace">reset --hard</text>
  <text x="415" y="85" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Destructive Reset</text>
  <text x="415" y="98" text-anchor="middle" fill="#fda4af" font-size="9" font-family="monospace">Reflog Safety Net</text>
  <!-- Revert -->
  <rect x="505" y="40" width="150" height="70" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>
  <text x="580" y="65" text-anchor="middle" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">git revert</text>
  <text x="580" y="85" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="monospace">Inverse New Commit</text>
  <text x="580" y="98" text-anchor="middle" fill="#e2e8f0" font-size="9" font-family="monospace">Safe for Shared Main</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Filtering commits by author and commit message subject:
git log --oneline --author="Nadia" --grep="stripe"

# Output:
# 7a2b910 feat(auth): implement stripe webhook signature verification
# c8812a1 fix(billing): handle stripe card decline errors
# Result: 2 matching commits pinpointed in milliseconds`,
      caption: {
        en: 'git log filters pinpoint historical changes by author, commit message, or date range.',
        bn: 'git log লেখক, মেসেজ বা তারিখের ভিত্তিতে মুহূর্তের মধ্যে পুরনো কোড খুঁজে আনে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Deep Commit Auditing: The git show Command', bn: '২. পুঙ্খানুপুঙ্খ কমিট বিশ্লেষণ: git show কমান্ড' } },
    {
      type: 'para',
      text: {
        en: 'While git log lists multiple commits, git show <commit-sha> zooms into an individual commit. It prints the full commit metadata (author, committer, date, parent hash) along with the complete unified diff showing exactly which lines were added or deleted.',
        bn: 'git log যেখানে অনেকগুলো কমিটের তালিকা দেখায়, git show <commit-sha> সেখানে একটি নির্দিষ্ট কমিটের ভেতরে প্রবেশ করে। এটি লেখকের পূর্ণ তথ্য, সময় ও প্যারেন্ট হ্যাশ সহ কোন কোন ফাইলে ঠিক কোন লাইনটি যোগ বা বাদ পড়েছে তার সম্পূর্ণ ইউনিফাইড ডিফারেন্স প্রদর্শন করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect specific commit:
git show 7a2b910

# Output:
# commit 7a2b910...
# Author: Nadia Sultana <nadia@corp.net>
# Date:   Sat Sep 26 12:00:00 2026 +0600
# 
#     feat(auth): implement stripe webhook signature verification
# 
# diff --git a/src/webhook.py b/src/webhook.py
# --- a/src/webhook.py
# +++ b/src/webhook.py
# @@ -14,2 +14,5 @@ def verify_signature(payload, sig):
# +    expected = hmac.new(SECRET, payload, hashlib.sha256).hexdigest()
# +    return hmac.compare_digest(expected, sig)
# Result: Line-by-line forensic evidence of security fix`,
      caption: {
        en: 'git show uncovers the exact diff payload associated with any historical commit.',
        bn: 'git show যেকোনো ঐতিহাসিক কমিটের আসল কোড পরিবর্তনের চিত্র উন্মোচন করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Historical Snapshots Comparison: git diff A..B', bn: '৩. দুই স্ন্যাপশটের তুলনা: git diff A..B' } },
    {
      type: 'para',
      text: {
        en: 'Comparing code between arbitrary points in time is critical for release auditing. The two-dot syntax git diff v1.0.0..v2.0.0 compares the tips of two tags or branches. The three-dot syntax git diff main...feature compares the feature branch against its common ancestor with main.',
        bn: 'রিলিজ অডিটের জন্য যেকোনো দুটি ভিন্ন সময়ের কোডের তুলনা করা অত্যন্ত দরকারি। টু-ডট সিনট্যাক্স git diff v1.0.0..v2.0.0 দুটি ট্যাগ বা ব্রাঞ্চের মধ্যকার সরাসরি পার্থক্য দেখায়। আর থ্রি-ডট সিনট্যাক্স git diff main...feature মেইনের সাথে ফিচার ব্রাঞ্চের সাধারণ পূর্বপুরুষ থেকে শুরু করে কেবল নতুন পরিবর্তনগুলোকে তুলে ধরে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Compare what changed between production release v1.0 and v1.1:
git diff --stat v1.0.0..v1.1.0

# Output:
#  src/api.py      | 42 +++++++++++++++++++++++++++++++++++-------
#  src/config.py   |  4 ++--
#  tests/test_api.py| 18 ++++++++++++++++++
#  3 files changed, 55 insertions(+), 9 deletions(-)
# Result: High-level release delta statistics generated instantly`,
      caption: {
        en: 'git diff with tag ranges audits code evolution across release boundaries.',
        bn: 'ট্যাগ রেঞ্জ সহ git diff দুই রিলিজের মধ্যকার কোডের অগ্রগতি অডিট করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Line-by-Line Provenance: The git blame Command', bn: '৪. লাইনের উৎস অনুসন্ধান: git blame কমান্ড' } },
    {
      type: 'para',
      text: {
        en: 'When debugging mysterious code, git blame <filename> annotates every single line in a file with the commit hash, author name, and date of its last modification. Adding the -L flag (e.g. git blame -L 40,55 server.py) restricts analysis to a specific line range.',
        bn: 'অপরিচিত কোনো কোডের উদ্দেশ্য বুঝতে git blame <filename> কমান্ড প্রতিটি লাইনের পাশে শেষ কোন কমিটে, কোন লেখক এবং কোন তারিখে সেই লাইনটি লেখা হয়েছিল তা দেখিয়ে দেয়। -L ফ্ল্যাগ (যেমন git blame -L 40,55 server.py) দিয়ে নির্দিষ্ট লাইনের সীমার মধ্যে তথ্য দেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect authorship of critical database timeout lines:
git blame -L 20,22 src/database.py

# Output:
# e5d89f0a (Rahim Ahmed 2026-08-15 10:30:00 +0600 20) TIMEOUT_SECONDS = 30
# 3b41fa80 (Alex Dev    2026-01-10 14:00:00 +0600 21) RETRY_ATTEMPTS = 3
# 7a2b9101 (Nadia Sult  2026-09-20 09:15:00 +0600 22) POOL_SIZE = 20
# Result: Forensic authorship established for each active configuration parameter`,
      caption: {
        en: 'git blame maps every line to its originating commit for historical context.',
        bn: 'git blame প্রতিটি লাইনের পেছনের আসল কমিট ও লেখককে উন্মোচিত করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Binary Search Debugging: git bisect', bn: '৫. বাইনারি সার্চ দিয়ে বাগ ধরা: git bisect' } },
    {
      type: 'para',
      text: {
        en: 'If a bug exists today but did not exist 500 commits ago, manual testing is painful. git bisect performs a Binary Search across commit history ($O(\log N)$). You mark the current commit as bad and an ancient commit as good; Git checks out the midpoint commit, narrowing down 500 commits to the exact culprit in just 9 steps!',
        bn: 'যদি দেখা যায় ৫০০ কমিট আগে কোড ঠিক ছিল কিন্তু বর্তমানে বাগ দেখা দিয়েছে, তবে ম্যানুয়ালি খোঁজা দুঃসাধ্য। git bisect পুরো ইতিহাসের ওপর বাইনারি সার্চ ($O(\log N)$) চালায়। আপনি বর্তমান কমিটকে bad এবং পুরনো ভালো কমিটকে good চিহ্নিত করেন; গিট মাঝখানের কমিট চেকআউট করে মাত্র ৯টি ধাপে অপরাধী কমিটটিকে বের করে আনে!'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Start binary search regression hunt:
git bisect start
git bisect bad                 # Current HEAD is broken
git bisect good v1.0.0         # v1.0.0 release 500 commits ago was working!

# Git checks out midpoint commit:
# Bisecting: 250 revisions left to test after this (roughly 8 steps)
# [8f12a01] refactor(cache): update redis client

# Run tests; if test fails:
git bisect bad

# Git isolates the exact culprit:
# Output:
# 4a90c12 is the first bad commit
# Commit that broke payment checkout identified in seconds!
git bisect reset # Return to normal branch`,
      caption: {
        en: 'git bisect uses binary search algorithms to locate regression commits in logarithmic time.',
        bn: 'git bisect বাইনারি সার্চ দিয়ে কয়েক সেকেন্ডেই বাগ তৈরি করা প্রথম কমিটটি ধরে ফেলে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Ultimate Safety Net: The git reflog', bn: '৬. চূড়ান্ত নিরাপত্তা বলয়: git reflog মেকানিজম' } },
    {
      type: 'para',
      text: {
        en: 'Nothing is truly lost in Git. While git log displays the active branch history, git reflog (Reference Log) tracks every single movement of HEAD (commits, checkouts, rebase steps, hard resets). Even if you accidentally delete a branch or hard-reset your work away, reflog contains the orphaned commit hash ready to be restored.',
        bn: 'গিটে কোনো কিছুই সহজে চিরতরে হারায় না। git log যেখানে কেবল বর্তমান ব্রাঞ্চের ইতিহাস দেখায়, git reflog (Reference Log) আপনার লোকাল মেশিনের HEAD-এর প্রতিটি একক নড়াচড়া (কমিট, সুইচ, রিব্যাস বা হার্ড রিসেট) লিখে রাখে। আপনি ভুল করে কোনো ব্রাঞ্চ মুছে ফেললেও বা হার্ড রিসেট দিলেও reflog দেখে হারিয়ে যাওয়া কোড উদ্ধার করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# You accidentally ran 'git reset --hard HEAD~3' and panicked:
git reflog

# Output:
# 3b41fa8 (HEAD -> main) HEAD@{0}: reset: moving to HEAD~3
# 7a2b910 HEAD@{1}: commit: feat(auth): add biometric auth (LOST WORK!)
# 8c20140 HEAD@{2}: commit: feat(auth): add facial recognition

# Rescue the lost work instantly by pointing a branch to the lost SHA:
git switch -c rescued-work 7a2b910
# Result: Allegedly "deleted" commits resurrected completely from the dead!`,
      caption: {
        en: 'git reflog tracks every HEAD movement, making accidental data loss virtually impossible.',
        bn: 'git reflog প্রতি পদক্ষেপের রেকর্ড রেখে মুছে যাওয়া কাজকে নিমিষে ফিরিয়ে আনে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Discarding Local Edits: The Modern git restore Command', bn: '৭. স্থানীয় পরিবর্তন বাতিল: আধুনিক git restore কমান্ড' } },
    {
      type: 'para',
      text: {
        en: 'In modern Git, git restore safely discards uncommitted edits: git restore <file> discards working directory changes, restoring the file to the staged state; git restore --staged <file> unstages a file without modifying working directory code.',
        bn: 'আধুনিক গিটে git restore কমান্ড দিয়ে নিরাপদে ভুল কোড বাতিল করা হয়: git restore <file> ওয়ার্কিং ডিরেক্টরির পরিবর্তন ফেলে দিয়ে ফাইলটিকে আগের অবস্থায় ফেরায়. আর git restore --staged <file> ফাইলের কোড না বদলেই সেটিকে স্টেজিং এরিয়া থেকে নামিয়ে আনে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Discard messy experimental edits in working tree:
git restore src/experimental.py
# src/experimental.py reverted to clean state!

# 2. Accidental git add . staged unwanted secrets:
git restore --staged secrets.env
# secrets.env unstaged safely; working file edits untouched!

# Output:
# Precision undoing without touching legacy checkout or reset commands`,
      caption: {
        en: 'git restore separates file undo operations from branch switching workflows.',
        bn: 'git restore ব্রাঞ্চের কাজ থেকে ফাইলের পরিবর্তন বাতিল করার কাজকে পৃথক ও সহজ করেছে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Rewinding History: git reset --soft vs --mixed', bn: '৮. ইতিহাস পেছানো: git reset --soft বনাম --mixed' } },
    {
      type: 'para',
      text: {
        en: 'The git reset command moves your active branch pointer backward in time. Passing --soft HEAD~1 rewinds the pointer by 1 snapshot while keeping modifications staged in the index. In contrast, the default --mixed flag unstages those changes, preserving edits exclusively in your working files.',
        bn: 'git reset কমান্ড আপনার ব্রাঞ্চ পয়েন্টারকে অতীতে পিছিয়ে নিয়ে যায়। --soft HEAD~1 দিলে পয়েন্টার ১ ধাপ পেছনে যায়, তবে পরিবর্তনগুলো স্টেজিং এরিয়াতেই সংরক্ষিত থাকে। পক্ষান্তরে ডিফল্ট --mixed ফ্ল্যাগ স্টেজ খালি করে পরিবর্তনগুলোকে সরাসরি ওয়ার্কিং ডিরেক্টরিতে রেখে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Undoing last commit to combine with additional edits:
git reset --soft HEAD~1

# Check status:
git status -s
# Output:
# M  src/billing.py (Green: changes are still staged and ready to re-commit!)

# Re-commit cleanly with revised message:
git commit -m "feat(billing): comprehensive invoice processing"`,
      caption: {
        en: 'git reset --soft moves HEAD back while preserving changes staged in the index.',
        bn: 'git reset --soft কমিট পেছালেও কোডগুলোকে স্টেজিং এরিয়াতে প্রস্তুত রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Destructive Resets: git reset --hard', bn: '৯. ধ্বংসাত্মক রিসেট: git reset --hard' } },
    {
      type: 'para',
      text: {
        en: 'git reset --hard <commit-sha> is the most destructive command in daily Git. It moves HEAD, clears the Staging Area, AND wipes all uncommitted modifications from your Working Directory to match the target commit exactly. Any unstaged work not recorded in a commit is permanently eradicated.',
        bn: 'git reset --hard হলো গিটের সবচেয়ে ধ্বংসাত্মক কমান্ড। এটি ব্রাঞ্চ পয়েন্টারকে অতীতে ফিরিয়ে নেয়, স্টেজিং এরিয়া খালি করে এবং আপনার ওয়ার্কিং ডিরেক্টরির সমস্ত আনকমিটেড কাজ চিরতরে মুছে দিয়ে টার্গেট কমিটের হুবহু কপি বানিয়ে ফেলে। কোনো কমিটে না থাকা কোড এর মাধ্যমে চিরতরে হারিয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Wipe all local experiments and force branch to match origin/main exactly:
git reset --hard origin/main

# Output:
# HEAD is now at 4f11a80 Merge branch 'feat/scaling'
# All uncommitted files, staged edits, and local commits wiped clean!

# (Remember: If you had local commits, reflog can still rescue them!)`,
      caption: {
        en: 'git reset --hard forces all three local trees (HEAD, Index, Working) into identical alignment.',
        bn: 'git reset --hard গিটের তিনটি লোকাল জোনকেই জোরপূর্বক অভিন্ন অবস্থায় নিয়ে আসে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Safe Public Undos: Creating Inverse Commits with git revert', bn: '১০. পাবলিক ব্রাঞ্চের নিরাপদ পূর্বাবস্থা: git revert কমান্ড' } },
    {
      type: 'para',
      text: {
        en: 'You must NEVER use git reset on shared public branches (main) because it deletes history that teammates depend on. The safe, non-destructive solution is git revert <commit-sha>. It creates a BRAND-NEW commit that introduces the exact mathematical inverse of the target commit, reversing the bug without rewriting historical timestamps.',
        bn: 'পাবলিক বা টিমমেটদের সাথে শেয়ার করা ব্রাঞ্চে (main) কখনোই git reset দিতে নেই কারণ এটি ইতিহাস মুছে ফেলে সবার সাথে সংঘাত তৈরি করে। এর নিরাপদ সমাধান হলো git revert <commit-sha>। এটি পেছনের ইতিহাস না মুছে বরং একটি সম্পূর্ণ নতুন কমিট তৈরি করে যার ভেতরে আগের ভুলের ঠিক উল্টো কোড থাকে, ফলে কোনো ঝামেলা ছাড়াই ত্রুটি দূর হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Reverting a buggy commit (9f4120a) already pushed to production:
git revert 9f4120a --no-edit

# Output:
# [main b14201f] Revert "feat(auth): implement broken biometric auth"
#  1 file changed, 2 insertions(+), 18 deletions(-)

# History remains completely forward-progressing:
git log --oneline -n 2
# b14201f (HEAD -> main) Revert "feat(auth): implement broken biometric auth"
# 9f4120a feat(auth): implement broken biometric auth
# Result: Safe to push to remote without force-push collisions!`,
      caption: {
        en: 'git revert creates a forward-moving inverse commit, safe for public team branches.',
        bn: 'git revert একটি বিপরীতমুখী নতুন কমিট বানিয়ে পাবলিক ব্রাঞ্চের নিরাপত্তা বজায় রাখে।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-his-ex1',
      kind: 'predict',
      topic: 'git: Safe undo for shared public branches',
      question: {
        en: 'Which Git command safely undoes a bad commit on a shared public branch by creating a new inverse commit rather than rewriting history?',
        bn: 'ইতিহাস মুছে ফেলার বদলে একটি বিপরীতমুখী নতুন কমিট তৈরি করে পাবলিক ব্রাঞ্চের ত্রুটি নিরাপদভাবে বাতিল করতে কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      code: `/* Git safe public undo command */
/* git ______ <commit-sha> */`,
      answer: 'git revert',
      accept: ['git revert', 'revert'],
      hint: {
        en: 'It creates a revert commit.',
        bn: 'এটি একটি রিভার্ট কমিট তৈরি করে।'
      },
      explanation: {
        en: 'git revert creates a brand-new commit containing inverse changes, leaving previous history intact and safe for shared team remotes.',
        bn: 'git revert আগের ইতিহাস অক্ষত রেখে একটি নতুন উল্টো কমিট তৈরি করে, যা দলের সবার সাথে শেয়ার করা ব্রাঞ্চের জন্য সম্পূর্ণ নিরাপদ।'
      }
    },
    {
      id: 'git-his-ex2',
      kind: 'mcq',
      topic: 'git: git reset --soft behavior',
      question: {
        en: 'What happens to your changes when you execute git reset --soft HEAD~1?',
        bn: 'git reset --soft HEAD~1 কমান্ডটি দিলে আপনার ফাইলের পরিবর্তনের কী ঘটে?'
      },
      options: [
        { en: 'The commit is undone, but all modified files remain in the Staging Area (Index) ready to be re-committed', bn: 'কমিটটি বাতিল হয়, তবে সমস্ত ফাইল স্টেজিং এরিয়াতেই (Index) প্রস্তুত অবস্থায় থেকে যায়' },
        { en: 'All files are deleted permanently', bn: 'সব ফাইল মুছে যায়' },
        { en: 'The changes are pushed to GitHub', bn: 'পরিবর্তন GitHub-এ চলে যায়' },
        { en: 'It creates a merge conflict', bn: 'মার্জ কনফ্লিক্ট তৈরি হয়' }
      ],
      answer: 0,
      hint: {
        en: 'Soft reset only rewinds the HEAD pointer.',
        bn: 'সফট রিসেট কেবল HEAD পয়েন্টারকে পেছায়।'
      },
      explanation: {
        en: 'git reset --soft moves HEAD back by one commit without touching the Staging Area or Working Directory, keeping changes staged for immediate re-committing.',
        bn: 'git reset --soft কেবল HEAD-কে এক ধাপ পেছায়; স্টেজিং এরিয়া বা কাজের ফাইলে হাত না দেওয়ায় সব পরিবর্তন স্টেজে প্রস্তুত থাকে।'
      }
    },
    {
      id: 'git-his-ex3',
      kind: 'mcq',
      topic: 'git: git reflog purpose',
      question: {
        en: 'What unique information does git reflog preserve that standard git log does not?',
        bn: 'git reflog এমন কোন বিশেষ তথ্য সংরক্ষণ করে যা সাধারণ git log দেখাতে পারে না?'
      },
      options: [
        { en: 'A chronological ledger of every single movement of HEAD (including branch checkouts, resets, and deleted branch commits)', bn: 'HEAD-এর প্রতিটি পদক্ষেপের কালানুক্রমিক খতিয়ান (ব্রাঞ্চ বদল, রিসেট এবং মুছে ফেলা ব্রাঞ্চের কমিট সহ)' },
        { en: 'Remote server passwords', bn: 'রিমোট পাসওয়ার্ড' },
        { en: 'The operating system kernel version', bn: 'অপারেটিং সিস্টেম ভার্সন' },
        { en: 'Binary image thumbnails', bn: 'ছবির থাম্বনেইল' }
      ],
      answer: 0,
      hint: {
        en: 'Reflog logs all reference pointer updates.',
        bn: 'Reflog পয়েন্টারের প্রতি নড়াচড়া লগ করে রাখে।'
      },
      explanation: {
        en: 'git reflog records every time HEAD updates locally, making it the premier forensic recovery tool for finding lost commits after destructive hard resets.',
        bn: 'git reflog লোকাল মেশিনে HEAD নড়ার প্রতিবারের রেকর্ড লিখে রাখে, ফলে ভুল করে কোনো কাজ মুছে গেলেও তা উদ্ধার করা সম্ভব হয়।'
      }
    }
  ],
  quiz: {
    id: 'git-history-quiz',
    title: { en: 'Git History, Blame & Undoing Quiz', bn: 'গিট ইতিহাস, ব্লেম ও পূর্বাবস্থা কুইজ' },
    questions: [
      {
        id: 'hq1',
        kind: 'mcq',
        topic: 'git: git bisect algorithm',
        question: {
          en: 'What search algorithm does git bisect use to locate the commit that introduced a bug?',
          bn: 'কোন কমিটে বাগ তৈরি হয়েছিল তা খুঁজে বের করতে git bisect কোন সার্চ অ্যালগরিদম ব্যবহার করে?'
        },
        options: [
          { en: 'Binary Search (O(log N))', bn: 'বাইনারি সার্চ (O(log N))' },
          { en: 'Linear Search (O(N))', bn: 'লিনিয়ার সার্চ (O(N))' },
          { en: 'Depth-First Search', bn: 'ডেপথ-ফার্স্ট সার্চ' },
          { en: 'Random Sampling', bn: 'র্যান্ডম স্যাম্পলিং' }
        ],
        answer: 0,
        hint: {
          en: 'It halves the search space at each step.',
          bn: 'প্রতি ধাপে এটি অনুসন্ধানের পরিসর অর্ধেক করে ফেলে।'
        },
        explanation: {
          en: 'git bisect uses binary search, halving the candidate commit range with each test step, narrowing 1000 commits down to the culprit in roughly 10 tests.',
          bn: 'git bisect বাইনারি সার্চ ব্যবহার করে প্রতিবার কমিটের তালিকা অর্ধেক করে ফেলে, যার ফলে ১০০০ কমিটের ভেতর থেকেও মাত্র ১০টি ধাপে অপরাধী কমিটটি ধরা যায়।'
        }
      },
      {
        id: 'hq2',
        kind: 'mcq',
        topic: 'git: git restore --staged utility',
        question: {
          en: 'What does git restore --staged <filename> do to a file?',
          bn: 'git restore --staged <filename> কমান্ডটি ফাইলের কী পরিবর্তন করে?'
        },
        options: [
          { en: 'Removes the file from the Staging Area without discarding your edits in the Working Directory', bn: 'ওয়ার্কিং ডিরেক্টরির কোনো কোড না মুছে ফাইলটিকে শুধুমাত্র স্টেজিং এরিয়া থেকে নামিয়ে আনে' },
          { en: 'Deletes the file from disk', bn: 'ডিস্ক থেকে ফাইল মুছে দেয়' },
          { en: 'Commits the file to history', bn: 'ফাইলটি কমিট করে' },
          { en: 'Creates an annotated tag', bn: 'ট্যাগ তৈরি করে' }
        ],
        answer: 0,
        hint: {
          en: 'It unstages changes safely.',
          bn: 'এটি নিরাপদে পরিবর্তনগুলো আনস্টেজ করে।'
        },
        explanation: {
          en: 'git restore --staged copies the file state from HEAD to the Index, unstaging it while preserving your working tree modifications intact.',
          bn: 'git restore --staged ফাইলটিকে স্টেজিং ইনডেক্স থেকে বের করে আনে, কিন্তু আপনার ফাইলের ভেতরের কোনো লেখায় হাত দেয় না।'
        }
      },
      {
        id: 'hq3',
        kind: 'mcq',
        topic: 'git: git reflog recovery safety net',
        question: {
          en: 'Why is git reflog known as the ultimate developer safety net in Git?',
          bn: 'গিট ব্যবহারের সময় git reflog-কে কেন সবচেয়ে নির্ভরযোগ্য নিরাপত্তা বলয় বলা হয়?'
        },
        options: [
          { en: 'It records every position HEAD has occupied, allowing recovery of orphaned commits even after destructive commands like git reset --hard', bn: 'এটি HEAD যেখানে যেখানে ছিল তার প্রতিটি পদক্ষেপ রেকর্ড করে রাখে, ফলে git reset --hard-এর মতো ধ্বংসাত্মক কমান্ডের পরেও হারিয়ে যাওয়া কমিট উদ্ধার করা সম্ভব হয়' },
          { en: 'It automatically backs up repositories to Google Drive', bn: 'গুগল ড্রাইভে স্বয়ংক্রিয় ব্যাকআপ রাখে' },
          { en: 'It encrypts passwords in .git', bn: 'পাসওয়ার্ড এনক্রিপ্ট করে' },
          { en: 'It deletes merge conflicts before they happen', bn: 'কনফ্লিক্ট ঘটার আগেই মুছে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Tracks the history of the HEAD pointer itself.',
          bn: 'সরাসরি HEAD পয়েন্টারের গতিবিধি রেকর্ড করে।'
        },
        explanation: {
          en: 'Reflog logs every HEAD update locally, meaning dropped commits remain accessible until unreachable objects are garbage collected.',
          bn: 'reflog লোকাল মেশিনে HEAD-এর প্রতিটি নড়াচড়া লিখে রাখে, ফলে ভুলবশত মুছে ফেলা কমিটের হ্যাশ খুঁজে তা উদ্ধার করা যায়।'
        }
      },
      {
        id: 'hq4',
        kind: 'mcq',
        topic: 'git: git revert on public branches',
        question: {
          en: 'Why is git revert preferred over git reset when undoing changes on a shared public branch?',
          bn: 'একটি পাবলিক শেয়ার্ড ব্রাঞ্চে ভুল সংশোধনের সময় git reset-এর চেয়ে git revert কেন বেশি উপযোগী?'
        },
        options: [
          { en: 'git revert creates a brand-new commit that safely inverts the unwanted changes without rewriting existing historical commit hashes', bn: 'git revert পূর্বের কোনো কমিট হ্যাশ না মুছে একটি নতুন বিপরীত কমিট তৈরি করে, ফলে সহকর্মীদের ইতিহাসে কোনো বিভ্রান্তি ঘটে না' },
          { en: 'git revert executes 10 times faster than git reset', bn: 'git revert ১০ গুণ দ্রুত চলে' },
          { en: 'git reset is blocked on GitHub', bn: 'গিটহাবে git reset নিষিদ্ধ' },
          { en: 'git revert is an alias for git commit', bn: 'git revert হলো git commit-এর অপর নাম' }
        ],
        answer: 0,
        hint: {
          en: 'Creates a forward undo commit, keeping linear history intact.',
          bn: 'ইতিহাস না মুছে সামনে নতুন একটি উল্টো কমিট বানায়।'
        },
        explanation: {
          en: 'Resetting on shared branches rewrites commit history and breaks downstream clones. Reverting appends a new inverse commit that collaborates cleanly.',
          bn: 'git reset পাবলিক ইতিহাস বদলে অন্যদের কোড নষ্ট করে; git revert উল্টো একটি নতুন কমিট তৈরি করে নিরাপদে কাজ বাতিল করে।'
        }
      }
    ]
  }
};
