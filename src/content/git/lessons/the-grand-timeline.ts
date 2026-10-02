import type { Lesson } from '../../../lib/types';

export const grandTimelineLesson: Lesson = {
  slug: 'the-grand-timeline',
  tech: 'git',
  title: {
    en: 'Git Rebase: Linear History, Interactive Squashing & Autosquash',
    bn: 'গিট রিব্যাস: লিনিয়ার ইতিহাস, ইন্টারঅ্যাক্টিভ স্কোয়াশ ও অটো-স্কোয়াশ'
  },
  summary: {
    en: 'Master Git history sculpting across 10 structured topics. Understand linear timeline mechanics, merge tradeoffs, and the golden rule against rewriting public branches. Explore interactive history cleanup with -i, squashing commits with fixup, rewording commit logs, handling replay conflicts, automated autosquash workflows, and pull request strategies.',
    bn: '১০টি সুসংগঠিত পয়েন্টে গিটের ইতিহাস বিন্যাস আয়ত্ত করুন। সরলরেখাসম ইতিহাস বিন্যাস, মার্জের তুলনামূলক সুবিধা এবং পাবলিক ব্রাঞ্চের ইতিহাস না বদলানোর সুবর্ণ নিয়ম বুঝুন। -i দিয়ে ইন্টারঅ্যাক্টিভ ইতিহাস পরিচ্ছন্নকরণ, fixup দিয়ে কমিট জোড়া লাগানো, লগ পরিবর্তন, কনফ্লিক্ট সমাধান, autosquash এবং পুল রিকোয়েস্ট মার্জ কৌশল আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-team-chronicle',
    title: { en: 'Git Team Workflows: Gitflow, Trunk-Based, Hooks & LFS', bn: 'গিট টিম ওয়ার্কফ্লো: Gitflow, ট্রাঙ্ক-বেসড, হুকস ও LFS' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Rebase Concept: Replaying Commits on a New Base', bn: '১. রিব্যাসের মূল ধারণা: নতুন ভিত্তির ওপর কমিট পুনঃস্থাপন' } },
    {
      type: 'para',
      text: {
        en: 'Rebase detaches your feature branch commits and replays them sequentially on top of the latest tip of another branch (e.g. main). Each replayed commit receives a newly generated commit hash. To the rest of the project, it appears as though your feature was developed on the freshest code.',
        bn: 'রিব্যাস (Rebase) আপনার ফিচার ব্রাঞ্চের সমস্ত কমিটকে সাময়িক খুলে নিয়ে অন্য ব্রাঞ্চের (যেমন main) সর্বশেষ মাথার ওপর একের পর এক পুনরায় সাজিয়ে দেয়। প্রতিবার পুনঃস্থাপনের সময় প্রতিটি কমিট সম্পূর্ণ নতুন একটি হ্যাশ পায়। পুরো টিমের কাছে তখন মনে হয় আপনি যেন শুরু থেকেই একদম টাটকা কোডের ওপরেই কাজ করছিলেন।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Rebase vs Merge History Topologies',
        bn: 'রিব্যাস বনাম মার্জ ইতিহাস টপোলজি'
      },
      caption: {
        en: 'Rebase detaches commits and replays them linearly on top of the latest upstream base.',
        bn: 'রিব্যাস কমিটগুলোকে খুলে নিয়ে সর্বশেষ আপস্ট্রিম ভিত্তির ওপর সরলরেখায় পুনরায় সাজায়।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Merge Bubble -->
  <text x="30" y="35" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">Merge: Topological Branch Bubble</text>
  <circle cx="50" cy="55" r="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <path d="M 60 55 L 95 55" stroke="#64748b" stroke-width="2"/>
  <circle cx="105" cy="55" r="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <path d="M 60 55 L 85 75" stroke="#a855f7" stroke-width="2"/>
  <circle cx="95" cy="75" r="10" fill="#1e293b" stroke="#a855f7" stroke-width="2"/>
  <path d="M 105 75 L 145 55" stroke="#a855f7" stroke-width="2"/>
  <path d="M 115 55 L 145 55" stroke="#64748b" stroke-width="2"/>
  <circle cx="155" cy="55" r="11" fill="#065f46" stroke="#10b981" stroke-width="2"/>
  <text x="180" y="59" fill="#34d399" font-size="11" font-family="monospace">Merge Commit</text>

  <!-- Rebase Linear -->
  <text x="30" y="105" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Rebase: Replayed Single Linear Stream</text>
  <circle cx="50" cy="125" r="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <path d="M 60 125 L 95 125" stroke="#64748b" stroke-width="2"/>
  <circle cx="105" cy="125" r="10" fill="#1e293b" stroke="#64748b" stroke-width="2"/>
  <path d="M 115 125 L 150 125" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="160" cy="125" r="10" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
  <text x="160" y="129" text-anchor="middle" fill="#fff" font-size="9" font-family="monospace">C1'</text>
  <path d="M 170 125 L 205 125" stroke="#38bdf8" stroke-width="2"/>
  <circle cx="215" cy="125" r="10" fill="#0369a1" stroke="#38bdf8" stroke-width="2"/>
  <text x="215" y="129" text-anchor="middle" fill="#fff" font-size="9" font-family="monospace">C2'</text>
  <text x="240" y="129" fill="#38bdf8" font-size="11" font-family="monospace">Linear History (No Bubble)</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Rebase your feature branch on top of updated main:
git switch feat/search-filter
git rebase main

# Output:
# Successfully rebased and updated refs/heads/feat/search-filter.
# Commits from feat/search-filter replayed on top of main tip!
# Result: Clean, single-stream linear commit timeline`,
      caption: {
        en: 'Rebase moves the entire feature branch base to the tip of main.',
        bn: 'রিব্যাস পুরো ফিচার ব্রাঞ্চের ভিত্তিটিকে মেইনের সর্বাধুনিক মাথায় সরিয়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Rebase vs Merge: Linear Timelines vs Graph Truth', bn: '২. রিব্যাস বনাম মার্জ: লিনিয়ার টাইমলাইন বনাম গ্রাফের সত্যতা' } },
    {
      type: 'para',
      text: {
        en: 'Git teams debate two distinct historical philosophies. First, merge preserves true historical graph reality, creating two-parent bubbles that record when branches existed. Second, rebase enforces a straight linear timeline, eliminating merge bubbles and simplifying commit auditing.',
        bn: 'টিমে ইতিহাস সংরক্ষণ নিয়ে দুটি দর্শন চালু আছে। প্রথমত, মার্জ অতীতের সত্য চিত্র হুবহু ধরে রাখে এবং দুটি প্যারেন্টের মার্জ বাবলের সাহায্যে ব্রাঞ্চের অস্তিত্ব নথিভুক্ত করে। দ্বিতীয়ত, রিব্যাস অপ্রয়োজনীয় মার্জ বাবল মুছে একটি নিখুঁত সরলরেখার মতো সোজা ইতিহাস উপহার দেয়, যা পরবর্তীতে কোড অডিট সহজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Merge Timeline (Preserves topological branch history):
# *---*---*---* (main)
#  \\         /
#   *---*---*   (feature) -> Creates merge commit bubble

# Rebase Timeline (Rewrites commits into an unbroken linear line):
# *---*---*---*---*---* (Clean linear sequence with zero merge bubbles!)`,
      caption: {
        en: 'Rebasing linearizes commit graphs, simplifying chronological debugging.',
        bn: 'রিব্যাস কমিট গ্রাফকে সরলরেখায় পরিণত করে কালানুক্রমিক ডিবাগিং সহজ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Golden Rule of Rebasing: Never Rebase Public Branches', bn: '৩. রিব্যাসের সুবর্ণ নিয়ম: পাবলিক ব্রাঞ্চ কখনোই রিব্যাস করবেন না' } },
    {
      type: 'para',
      text: {
        en: 'The inviolable Golden Rule of Git: NEVER rebase commits that have been pushed to a shared public branch (like main). Because rebase generates fresh commit hashes, teammates who based their work on the old commits will have their histories broken, forcing painful merge conflicts.',
        bn: 'গিটের সবচেয়ে অলঙ্ঘনীয় সুবর্ণ নিয়ম: যেসব কমিট পাবলিক বা শেয়ার্ড ব্রাঞ্চে (যেমন main) পুশ করা হয়ে গেছে, সেগুলো কখনোই রিব্যাস করবেন না। কারণ রিব্যাস সম্পূর্ণ নতুন হ্যাশ তৈরি করে, ফলে সহকর্মীরা যারা পুরনো কমিটের ওপর কাজ করছিলেন তাদের ইতিহাস সম্পূর্ণ ভেঙে পড়ে ভয়াবহ সংঘাত তৈরি হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# ✅ SAFE: Rebasing your private local feature branch before creating a PR
git switch feat/my-private-work
git rebase main # Completely safe; only affects your unshared commits!

# ❌ CATASTROPHIC: Rebasing main or shared team branches
# git switch main
# git rebase feat/experiment # NEVER DO THIS! Breaks everyone else's clone!`,
      caption: {
        en: 'Rebase private local feature branches; leave shared public history immutable.',
        bn: 'ব্যক্তিগত লোকাল ব্রাঞ্চে রিব্যাস করুন; শেয়ার্ড পাবলিক ইতিহাসকে অপরিবর্তনীয় রাখুন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Interactive Rebase: The git rebase -i Dashboard', bn: '৪. ইন্টারঅ্যাক্টিভ রিব্যাস: git rebase -i ড্যাশবোর্ড' } },
    {
      type: 'para',
      text: {
        en: 'Interactive Rebase gives developers surgical control over commit history. Running git rebase -i HEAD~4 opens an interactive todo list in your text editor, displaying the last 4 commits in chronological order (oldest first). You can reorder, squash, edit, or delete commits before finalizing.',
        bn: 'Interactive Rebase ডেভেলপারকে তার কমিটের ইতিহাস নিজের ইচ্ছামতো সাজানোর পূর্ণ ক্ষমতা দেয়। git rebase -i HEAD~4 কমান্ড দিলে টেক্সট এডিটরে একটি ইন্টারঅ্যাক্টিভ তালিকা খুলে যায়, যেখানে শেষ ৪টি কমিট কালানুক্রমিকভাবে (সবচেয়ে পুরনোটি উপরে) প্রদর্শিত হয়। সেখান থেকে আপনি কমিটগুলো জোড়া লাগানো বা মুছে ফেলার সিদ্ধান্ত নিতে পারেন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Launch interactive rebase for the last 3 commits:
git rebase -i HEAD~3

# Git opens your terminal editor with this todo script:
# pick 8a1b021 feat: add user registration form
# pick 4c92e10 fix: typo in submit button
# pick 7d33a11 fix: correct input validation regex

# Commands available:
# p, pick   = use commit
# r, reword = use commit, but edit the commit message
# e, edit   = use commit, but stop for amending
# s, squash = meld into previous commit (combines messages)
# f, fixup  = like "squash", but discard this commit's log message
# d, drop   = remove commit entirely`,
      caption: {
        en: 'The interactive todo list allows reordering, editing, and combining commits.',
        bn: 'ইন্টারঅ্যাক্টিভ তালিকা কমিট সাজানো, পরিবর্তন করা এবং জোড়া লাগানোর সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Squashing Commits: Condensing Micro-Edits with squash & fixup', bn: '৫. কমিট জোড়া লাগানো: squash ও fixup দিয়ে খণ্ড খণ্ড কাজ একত্রীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'During development, programmers often make tiny interim commits ("wip", "fixed typo", "oops"). Before opening a Pull Request, you should clean up history. Changing pick to squash (s) melds the commit into the one above it, combining commit messages; changing pick to fixup (f) melds the commit and silently discards the interim message.',
        bn: 'কাজের সময় প্রোগ্রামাররা প্রায়ই ছোটখাটো এলোমেলো কমিট করেন ("wip", "typo fix" ইত্যাদি)। কিন্তু টিমের কাছে পুল রিকোয়েস্ট পাঠানোর আগে এই জঞ্জাল পরিষ্কার করা উচিত। pick বদলে squash (s) দিলে নিচের কমিটটি উপরেরটির সাথে জোড়া লেগে উভয়ের মেসেজ এক করে; আর fixup (f) দিলে মেসেজটি ফেলে দিয়ে নিঃশব্দে কোডটি উপরের কমিটের সাথে মিশিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Sculpting 3 messy commits into 1 clean feature commit:
# pick 8a1b021 feat: add user registration form
# fixup 4c92e10 fix: typo in submit button
# fixup 7d33a11 fix: correct input validation regex

# Save and exit editor!
# Output:
# Successfully rebased and updated refs/heads/feat/registration.
# Result: 3 fragmented micro-commits condensed into 1 pristine atomic commit!`,
      caption: {
        en: 'Squashing replaces exploratory micro-commits with clean, atomic pull-request units.',
        bn: 'স্কোয়াশিং অপ্রয়োজনীয় ছোট ছোট কমিট মুছে একটি স্বয়ংসম্পূর্ণ পরিষ্কার কমিট তৈরি করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Rewording and Dropping: Editing Messages and Erasing Commits', bn: '৬. বার্তা পরিবর্তন ও মুছে ফেলা: reword ও drop' } },
    {
      type: 'para',
      text: {
        en: 'Changing pick to reword (r) pauses the rebase to let you rewrite an old commit message according to Conventional Commits standards. Changing pick to drop (d)—or simply deleting that entire line from the interactive todo file—completely erases that commit and its changes from history.',
        bn: 'pick-এর জায়গায় reword (r) লিখলে গিট রিব্যাস থামিয়ে আপনাকে অতীতের কোনো পুরনো কমিট মেসেজ নতুন করে সুন্দরভাবে লেখার সুযোগ দেয়। আর drop (d) লিখলে বা ফাইল থেকে লাইনটি সরাসরি মুছে দিলে সেই কমিট এবং তার সমস্ত পরিবর্তন চিরতরে ইতিহাস থেকে মুছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# In interactive rebase todo buffer:
# reword a109b82 update search api
# drop 8812c91 test: add local test secret (ERADICATES THIS ACCIDENTAL COMMIT!)
# pick c4110a2 feat: add paginated search results

# Save and close!
# Git halts at a109b82, prompting for a new message:
# "feat(search): optimize query latency with composite index"
# Output: Commit message improved and leaked secret commit eradicated!`,
      caption: {
        en: 'reword polishes historical messages; drop eliminates accidental or sensitive commits.',
        bn: 'reword পুরনো মেসেজ সুন্দর করে; drop ভুলবশত হওয়া ক্ষতিকর কমিট নিশ্চিহ্ন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Handling Rebase Conflicts: continue vs abort', bn: '৭. রিব্যাস কনফ্লিক্ট নিরসন: continue বনাম abort' } },
    {
      type: 'para',
      text: {
        en: 'When rebasing replays a commit onto lines modified by main, execution pauses with a conflict. You resolve the conflict markers, stage the file with git add, and run git rebase --continue (NEVER git commit!). If things go wrong, git rebase --abort restores your original branch cleanly.',
        bn: 'রিব্যাসের সময় কোনো কমিট যদি মেইনের নতুন লাইনের সাথে সংঘর্ষে জড়ায়, গিট সেখানে থেমে যায়। তখন মার্কার মুছে কোড ঠিক করতে হয়, git add দিয়ে স্টেজ করতে হয় এবং git rebase --continue দিতে হয় (কখনোই git commit দেবেন না!)। সমস্যা বেশি মনে হলে git rebase --abort দিয়ে রিব্যাস শুরুর আগের নিরাপদ অবস্থায় ফিরে যাওয়া যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Conflict during rebase step 2 of 4:
# error: could not apply 7a2b910... feat: search endpoint
# Resolve all conflicts manually in editor!

# Mark as resolved:
git add src/search.py

# Continue the rebase:
git rebase --continue

# Output:
# Applying: feat: search endpoint
# Successfully rebased and updated refs/heads/feat/search.`,
      caption: {
        en: 'git rebase --continue proceeds with subsequent commits after conflicts are staged.',
        bn: 'git rebase --continue কনফ্লিক্ট সমাধানের পর পরবর্তী কমিটগুলো বসানো এগিয়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Automated Autosquash: git commit --fixup', bn: '৮. স্বয়ংক্রিয় অটো-স্কোয়াশ: git commit --fixup' } },
    {
      type: 'para',
      text: {
        en: 'Rather than manually matching commit hashes during interactive rebasing, Git provides autosquash automation. When making a fix to an earlier commit (e.g. 7a2b910), run git commit --fixup 7a2b910. Later, running git rebase -i --autosquash automatically pairs, reorders, and marks fixup lines without manual editing.',
        bn: 'ইন্টারঅ্যাক্টিভ রিব্যাসের সময় নিজে নিজে খুঁজে হ্যাশ মেলানোর বদলে গিট চমৎকার অটো-স্কোয়াশ সুবিধা দেয়। কোনো আগের কমিটের ভুল শুধরাতে git commit --fixup <commit-sha> দিলে একটি বিশেষ ফিক্সআপ কমিট তৈরি হয়। পরবর্তীতে git rebase -i --autosquash চালালে গিট নিজে থেকেই লাইনগুলোকে সঠিক জায়গায় নিয়ে গিয়ে fixup মার্ক করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Fix a bug introduced in commit 8a1b021:
git add src/validator.py
git commit --fixup 8a1b021

# Output:
# [feat/reg b1290a1] fixup! feat: add user registration form

# 2. Automatically apply and squash into the target commit:
git rebase -i --autosquash main
# Git automatically reorganizes the todo list, placing fixup right below 8a1b021!
# Result: Instant, zero-effort automated branch cleanup`,
      caption: {
        en: '--autosquash pairs fixup commits with their target parents automatically.',
        bn: '--autosquash স্বয়ংক্রিয়ভাবে ফিক্সআপ কমিটকে তার মূল প্যারেন্টের সাথে জোড়া লাগায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Keeping Up-to-Date: The git pull --rebase Discipline', bn: '৯. শাখা হালনাগাদ রাখা: git pull --rebase নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'By default, running git pull creates noisy "Merge branch main" commit bubbles whenever remote changes are integrated. Running git pull --rebase (or configuring git config --global pull.rebase true) automatically replays your local unpushed commits on top of newly pulled changes, keeping history completely linear.',
        bn: 'ডিফল্টভাবে সাধারণ git pull কমান্ড দিলে রিমোটের কোড নামানোর সময় একটি অনর্থক "Merge branch main" মার্জ বাবল তৈরি হয়। git pull --rebase কমান্ড দিলে (অথবা গ্লোবালি pull.rebase true চালু রাখলে) আপনার লোকাল আনপুশড কাজগুলো স্বয়ংক্রিয়ভাবে রিমোটের নতুন কোডের মাথার ওপর সুন্দরভাবে বসে যায় এবং ইতিহাস সম্পূর্ণ সোজা থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Pull with rebase enabled:
git pull --rebase origin main

# Output:
# First, rewinding head to replay your work on top of it...
# Fast-forwarded main to origin/main.
# Applying: feat: add notification service
# Result: Zero merge commits created; local work appended cleanly on tip`,
      caption: {
        en: 'git pull --rebase eliminates trivial merge commits when synchronizing with remotes.',
        bn: 'git pull --rebase রিমোটের সাথে সিঙ্ক করার সময় অপ্রয়োজনীয় মার্জ কমিট তৈরি হওয়া বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. GitHub Merging: Squash-and-Merge vs Rebase-and-Merge', bn: '১০. GitHub পুল রিকোয়েস্ট মার্জ কৌশল: স্কোয়াশ বনাম রিব্যাস' } },
    {
      type: 'para',
      text: {
        en: 'When integrating Pull Requests on GitHub, teams choose between three options. First, the standard merge button retains every micro-commit and creates a topological bubble. Second, squash combines all PR commits into 1 single unit on main. Third, rebase replays individual commits directly onto main without branch bubbles.',
        bn: 'GitHub-এ পুল রিকোয়েস্ট সংযুক্ত করার সময় ৩ টি বিকল্প থাকে। প্রথমত, স্ট্যান্ডার্ড মার্জ বাটন প্রতিটি ছোট কমিট অক্ষত রেখে একটি বাবল তৈরি করে। দ্বিতীয়ত, স্কোয়াশ ফিচার ব্রাঞ্চের সব পরিবর্তনকে একত্র করে মেইনে ১ টি ফ্রেশ কমিট বানায়। তৃতীয়ত, রিব্যাস প্রতিটি কমিটকে কোনো বাবল ছাড়াই মেইনের ওপর লিনিয়ারভাবে সাজায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Comparison on GitHub Main Branch:
# 1. Squash and Merge:
# * 9f12014 feat: complete payment gateway (#42)  <- 1 clean commit for entire PR!

# 2. Rebase and Merge:
# * 7a2b910 feat: setup stripe sdk
# * 8c20140 feat: add webhook endpoint
# * c4110a2 fix: handle signature verification   <- All individual commits kept linearly!`,
      caption: {
        en: 'Squash-and-merge is the industry favorite for clean, easily-reversible main branch histories.',
        bn: 'Squash-and-merge পরিষ্কার ও সহজে রিভার্টযোগ্য ইতিহাসের জন্য সবচেয়ে জনপ্রিয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-reb-ex1',
      kind: 'predict',
      topic: 'git: Interactive rebase command to discard commit message',
      question: {
        en: 'In an interactive rebase todo file, which command squashes a commit into the previous one while discarding its log message?',
        bn: 'ইন্টারঅ্যাক্টিভ রিব্যাসে কোন কমান্ডটি নিচের কমিটটিকে উপরেরটির সাথে জোড়া লাগায় এবং তার মেসেজটি ফেলে দেয়?'
      },
      code: `/* Git interactive rebase fixup command */
/* ___ 4c92e10 fix: minor typo */`,
      answer: 'fixup',
      accept: ['fixup', 'f', 'fixup command'],
      hint: {
        en: 'It fixes up the previous commit silently.',
        bn: 'এটি নিঃশব্দে আগের কমিটটিকে ফিক্স করে নেয়।'
      },
      explanation: {
        en: 'The fixup (or f) command melds the commit’s changes into the previous commit in the list and discards its commit log message.',
        bn: 'fixup (বা f) কমান্ড কোডের পরিবর্তনগুলোকে আগের কমিটের সাথে মিশিয়ে ফেলে এবং এর নিজস্ব লগ মেসেজটি ফেলে দিয়ে ইতিহাস পরিষ্কার রাখে।'
      }
    },
    {
      id: 'git-reb-ex2',
      kind: 'mcq',
      topic: 'git: Golden rule of rebasing',
      question: {
        en: 'What is the Golden Rule of Git Rebasing?',
        bn: 'গিট রিব্যাসের সুবর্ণ নিয়ম (Golden Rule) কী?'
      },
      options: [
        { en: 'Never rebase commits that exist outside your local repository and have been pushed to a shared public branch', bn: 'যেসব কমিট লোকাল মেশিনের বাইরে চলে গেছে এবং শেয়ার্ড পাবলিক ব্রাঞ্চে পুশ করা হয়েছে, সেগুলো কখনো রিব্যাস করবেন না' },
        { en: 'Always rebase after every single commit', bn: 'প্রতিটি কমিটের পরপরই রিব্যাস করুন' },
        { en: 'Never use branches', bn: 'কখনোই ব্রাঞ্চ ব্যবহার করবেন না' },
        { en: 'Only rebase on weekends', bn: 'শুধু ছুটির দিনে রিব্যাস করুন' }
      ],
      answer: 0,
      hint: {
        en: 'Never rewrite public shared history.',
        bn: 'পাবলিক শেয়ার্ড ইতিহাস কখনোই বদলাবেন না।'
      },
      explanation: {
        en: 'Because rebasing rewrites commit SHA hashes, rebasing shared public branches breaks the repository history for all collaborators.',
        bn: 'রিব্যাস করলে কমিট হ্যাশ পুরোপুরি বদলে যায়। তাই শেয়ার্ড ব্রাঞ্চে রিব্যাস করলে দলের অন্যান্য সহকর্মীদের রিপোজিটরি নষ্ট হয়ে যায়।'
      }
    },
    {
      id: 'git-reb-ex3',
      kind: 'mcq',
      topic: 'git: Resuming rebase after conflict resolution',
      question: {
        en: 'After resolving conflicts during a rebase and staging the files with git add, what command continues the rebase process?',
        bn: 'রিব্যাসের সময় কনফ্লিক্ট সমাধান করে git add দিয়ে স্টেজ করার পর কোন কমান্ড দিয়ে রিব্যাস পুনরায় চালু করতে হয়?'
      },
      options: [
        { en: 'git rebase --continue', bn: 'git rebase --continue' },
        { en: 'git commit -m "resolved"', bn: 'git commit -m "resolved"' },
        { en: 'git rebase --restart', bn: 'git rebase --restart' },
        { en: 'git push --force', bn: 'git push --force' }
      ],
      answer: 0,
      hint: {
        en: 'Continue the rebase.',
        bn: 'রিব্যাস কন্টিনিউ করুন।'
      },
      explanation: {
        en: 'You must run git rebase --continue (never git commit). Git automatically applies the staged changes and proceeds to replay the remaining commits.',
        bn: 'রিব্যাসের সময় কখনো git commit দিতে হয় না; git rebase --continue দিলেই গিট স্টেজ করা কোড নিয়ে বাকি কমিটগুলো একের পর এক সাজিয়ে ফেলে।'
      }
    }
  ],
  quiz: {
    id: 'git-rebase-quiz',
    title: { en: 'Git Rebase & Linear History Quiz', bn: 'গিট রিব্যাস ও লিনিয়ার ইতিহাস কুইজ' },
    questions: [
      {
        id: 'req1',
        kind: 'mcq',
        topic: 'git: git pull --rebase benefit',
        question: {
          en: 'Why do engineering teams prefer git pull --rebase over standard git pull?',
          bn: 'ইঞ্জিনিয়ারিং দলগুলো সাধারণ git pull-এর বদলে git pull --rebase কেন বেশি পছন্দ করে?'
        },
        options: [
          { en: 'It prevents noisy, unnecessary merge commit bubbles, keeping local history perfectly linear with the remote', bn: 'এটি অনর্থক মার্জ বাবল তৈরি হওয়া বন্ধ করে লোকাল ইতিহাসকে রিমোটের সাথে একদম সোজা সরলরেখায় রাখে' },
          { en: 'It makes downloads 10x faster', bn: 'ডাউনলোড ১০ গুণ দ্রুত হয়' },
          { en: 'It converts files to TypeScript', bn: 'ফাইলকে টাইপস্ক্রিপ্টে রূপান্তর করে' },
          { en: 'It bypasses merge conflicts', bn: 'কনফ্লিক্ট এড়িয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'It eliminates trivial merge commits.',
          bn: 'এটি অপ্রয়োজনীয় মার্জ কমিট মুছে ফেলে।'
        },
        explanation: {
          en: 'git pull --rebase puts your local commits on top of the pulled remote changes, avoiding the clutter of pointless automatic merge commits.',
          bn: 'git pull --rebase রিমোট থেকে নামানো নতুন কোডের ওপর আপনার লোকাল কাজগুলোকে সাজিয়ে দেয়, ফলে বাড়তি কোনো মার্জ বাবল তৈরি হয় না।'
        }
      },
      {
        id: 'req2',
        kind: 'mcq',
        topic: 'git: Squash and merge on GitHub',
        question: {
          en: 'What is the main architectural benefit of selecting "Squash and Merge" when merging a PR on GitHub?',
          bn: 'GitHub-এ পুল রিকোয়েস্ট মার্জ করার সময় "Squash and Merge" বেছে নেওয়ার প্রধান আর্কিটেকচারাল সুবিধা কী?'
        },
        options: [
          { en: 'It condenses dozens of exploratory feature commits into a single atomic, meaningful commit on main, making rollbacks simple', bn: 'ফিচার ব্রাঞ্চের সমস্ত খণ্ড খণ্ড কমিটকে মূল মেইনে ঠিক একটি পরিষ্কার কমিটে পরিণত করে, ফলে কোনো সমস্যা হলে রোলব্যাক করা অত্যন্ত সহজ হয়' },
          { en: 'It permanently closes the repository', bn: 'রিপোজিটরি স্থায়ীভাবে বন্ধ করে' },
          { en: 'It deletes all remote tracking branches', bn: 'সব রিমোট ব্রাঞ্চ মুছে ফেলে' },
          { en: 'It runs GitHub Actions twice as fast', bn: 'অ্যাকশন দ্বিগুণ দ্রুত চালায়' }
        ],
        answer: 0,
        hint: {
          en: 'All PR commits are squashed into 1 unit on trunk.',
          bn: 'সব কমিট একত্র হয়ে ট্রাঙ্কে ১টি ইউনিটে পরিণত হয়।'
        },
        explanation: {
          en: 'Squash and merge keeps trunk history clean by ensuring every merged feature exists as a single, isolated commit that can be reverted in one click if a regression occurs.',
          bn: 'Squash and merge মেইন ব্রাঞ্চের ইতিহাসকে অত্যন্ত পরিষ্কার রাখে; প্রতিটি ফিচার ঠিক একটি একক কমিট হিসেবে থাকে যা ভবিষ্যতে কোনো সমস্যা হলে এক ক্লিকেই রিভার্ট করা যায়।'
        }
      },
      {
        id: 'req3',
        kind: 'mcq',
        topic: 'git: golden rule of rebasing',
        question: {
          en: 'What is the Golden Rule of Rebasing in Git?',
          bn: 'গিটে রিব্যাসের সুবর্ণ নিয়ম (Golden Rule of Rebasing) কী?'
        },
        options: [
          { en: 'Never rebase commits that exist outside your local repository and have been shared with other developers on public branches', bn: 'পাবলিক ব্রাঞ্চে সহকর্মীদের সাথে শেয়ার করা হয়ে গেছে এমন কোনো কমিটে কখনোই রিব্যাস চালাবেন না' },
          { en: 'Always rebase immediately after cloning', bn: 'ক্লোন করার সাথে সাথে রিব্যাস করা' },
          { en: 'Never use interactive rebase on weekends', bn: 'ছুটির দিনে ইন্টারঅ্যাক্টিভ রিব্যাস না করা' },
          { en: 'Rebase only works on binary files', bn: 'রিব্যাস শুধু বাইনারি ফাইলে কাজ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Do not rewrite shared public history.',
          bn: 'শেয়ার করা পাবলিক ইতিহাস পুনর্লিখন করবেন না।'
        },
        explanation: {
          en: 'Because rebase changes commit hashes, rewriting commits that other teammates already based work on creates conflicting divergent histories for the entire team.',
          bn: 'রিব্যাস কমিট হ্যাশ বদলে ফেলে; তাই অন্যের সাথে ভাগ করা কোডে রিব্যাস করলে সবার ইতিহাসে মারাত্মক সংঘাত সৃষ্টি হয়।'
        }
      },
      {
        id: 'req4',
        kind: 'mcq',
        topic: 'git: squash vs fixup in interactive rebase',
        question: {
          en: 'What is the difference between squash and fixup commands during an interactive rebase (git rebase -i)?',
          bn: 'ইন্টারঅ্যাক্টিভ রিব্যাসের (git rebase -i) সময় squash এবং fixup কমান্ডের মধ্যে পার্থক্য কী?'
        },
        options: [
          { en: 'Both combine the commit into the previous one, but squash prompts to combine both commit messages while fixup discards the current commit’s log message', bn: 'উভয়ই পূর্ববর্তী কমিটের সাথে কোড জোড়া লাগায়, তবে squash উভয় মেসেজ একত্র করে আর fixup চলতি কমিটের মেসেজটি ফেলে দেয়' },
          { en: 'squash modifies code while fixup only edits CSS', bn: 'squash কোড বদলায় আর fixup শুধু সিএসএস বদলায়' },
          { en: 'fixup creates a new branch', bn: 'fixup নতুন ব্রাঞ্চ তৈরি করে' },
          { en: 'There is no difference between them', bn: 'উভয়ের মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'fixup discards the message; squash merges messages.',
          bn: 'fixup বার্তা ফেলে দেয়; squash বার্তা একত্র করে।'
        },
        explanation: {
          en: 'Both squash and fixup melt the target commit into the parent above it, but fixup silently ignores the commit message, keeping history clean with zero extra prompt editing.',
          bn: 'উভয় কমান্ডই কমিট জোড়া লাগায়, তবে fixup বাড়তি মেসেজ লেখার ঝামেলা ছাড়াই আগের মেসেজটি রেখে দেয়।'
        }
      }
    ]
  }
};
