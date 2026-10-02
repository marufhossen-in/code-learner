import type { Lesson } from '../../../lib/types';

export const conflictCourtLesson: Lesson = {
  slug: 'the-conflict-court',
  tech: 'git',
  title: {
    en: 'Git Merge Conflicts: Three-Way Analysis, Markers & Rerere',
    bn: 'গিট মার্জ কনফ্লিক্ট: ৩-ওয়ে বিশ্লেষণ, মার্কার ও Rerere'
  },
  summary: {
    en: 'Master conflict resolution across 10 structured topics. Understand concurrent line collision causes, three-way merge math (Base/Ours/Theirs), and decoding conflict markers. Learn the 4-step manual resolution workflow, git merge --abort, git rerere automated caching, -X strategies, resolving binary files, and proactive team habits.',
    bn: '১০টি সুসংগঠিত পয়েন্টে মার্জ কনফ্লিক্ট নিরসন আয়ত্ত করুন। একই লাইনে সাংঘর্ষিক পরিবর্তনের কারণ, ৩-ওয়ে মার্জ সমীকরণ (বেস/আওয়ার্স/দেয়ার্স) এবং কনফ্লিক্ট মার্কার বিশ্লেষণ বুঝুন। ৪ ধাপের ম্যানুয়াল সমাধান পদ্ধতি, git merge --abort, git rerere ক্যাশিং, -X স্ট্র্যাটেজি, বাইনারি ফাইল সমাধান এবং কনফ্লিক্ট প্রতিরোধের টিম অভ্যাস আবিষ্কার করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-remote-tides',
    title: { en: 'Git Remotes: Fetch, Pull, Push, Tracking & Upstream Workflows', bn: 'গিট রিমোট: ফেচ, পুল, পুশ, ট্র্যাকিং ও আপস্ট্রিম কর্মপ্রবাহ' },
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Why Conflicts Occur: Concurrent Overlapping Line Edits', bn: '১. কনফ্লিক্ট কেন ঘটে: একই লাইনে যুগপৎ সাংঘর্ষিক পরিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'When you collaborate on software projects, Git merges independent files automatically. The engine even combines edits in the same file without friction if modifications occur on different lines. A merge conflict triggers only when separate branches alter the exact same line differently, or when a branch modifies a file that another deletes.',
        bn: 'আপনি যখন দলগতভাবে কাজ করেন, তখন Git আলাদা ফাইলের পরিবর্তনগুলো নিজে থেকেই একীভূত করে নেয়। এমনকি একই ফাইলের ভিন্ন ভিন্ন লাইনে সম্পাদনা হলেও কোনো সংঘাত ছাড়া তা সহজে মার্জ হয়ে যায়। কিন্তু যখন পৃথক ব্রাঞ্চ হুবহু একই লাইনে ভিন্ন কোড লেখে, কিংবা এক ব্রাঞ্চের মোছা ফাইল অন্য ব্রাঞ্চ সম্পাদনা করে, তখনই মার্জ কনফ্লিক্ট দেখা দেয়।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Anatomy of Git Conflict Markers',
        bn: 'গিট কনফ্লিক্ট মার্কারের গঠন'
      },
      caption: {
        en: 'Conflict markers isolate local edits above the equator and incoming branch edits below it.',
        bn: 'কনফ্লিক্ট মার্কারের বিভাজন রেখার উপরে লোকাল পরিবর্তন এবং নিচে আগমনী ব্রাঞ্চের পরিবর্তন থাকে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <rect x="25" y="25" width="630" height="100" rx="6" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>
  <text x="45" y="48" fill="#38bdf8" font-size="12" font-family="monospace">&lt;&lt;&lt;&lt;&lt;&lt;&lt; HEAD (Current Branch / Ours)</text>
  <text x="45" y="70" fill="#a7f3d0" font-size="12" font-family="monospace">const PORT = 3000;</text>
  <line x1="25" y1="80" x2="655" y2="80" stroke="#f59e0b" stroke-dasharray="4" stroke-width="1.5"/>
  <text x="340" y="84" text-anchor="middle" fill="#fbbf24" font-size="10" font-family="monospace">======= (Equator Separator)</text>
  <text x="45" y="102" fill="#f472b6" font-size="12" font-family="monospace">const PORT = 8080;</text>
  <text x="45" y="118" fill="#c084fc" font-size="12" font-family="monospace">&gt;&gt;&gt;&gt;&gt;&gt;&gt; feat/scaling (Incoming Branch / Theirs)</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Simulating a concurrent line edit collision:
# On main:
echo "MAX_CONNECTIONS = 100" > config.py
git commit -am "chore: set connections to 100"

# On feature branch:
git switch feat/scaling
echo "MAX_CONNECTIONS = 500" > config.py
git commit -am "feat: increase connections to 500"

# Merging causes immediate conflict:
git switch main
git merge feat/scaling

# Output:
# Auto-merging config.py
# CONFLICT (content): Merge conflict in config.py
# Automatic merge failed; fix conflicts and then commit the result.`,
      caption: {
        en: 'Conflicts occur strictly when Git cannot mathematically deduce which version takes precedence.',
        bn: 'কোন পরিবর্তনটি অগ্রাধিকার পাবে গিট যখন তা নিজে বের করতে পারে না, তখনই কনফ্লিক্ট হয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Three-Way Merge Engine: Base, Ours, and Theirs', bn: '২. ৩ ওয়ে মার্জ ইঞ্জিন: বেস, আওয়ার্স এবং দেয়ার্স' } },
    {
      type: 'para',
      text: {
        en: 'Git uses a Three-Way Merge algorithm involving three snapshots: First, Base (the common ancestor commit where branches split). Second, Ours (the current branch you are merging into). Third, Theirs (the incoming branch being merged). If only one side changed relative to Base, Git takes it; if both sides changed differently, Git halts.',
        bn: 'গিট ৩ ওয়ে মার্জ চালাতে ৩ টি স্ন্যাপশট বিশ্লেষণ করে: প্রথমত Base (উভয় ব্রাঞ্চের আদি সাধারণ পূর্বপুরুষ); দ্বিতীয়ত Ours (যে ব্রাঞ্চের ভেতরে থেকে মার্জ করছেন); তৃতীয়ত Theirs (যে আগমনী ব্রাঞ্চটিকে মার্জ করা হচ্ছে)। বেসের সাপেক্ষে যদি কেবল ১ পাশে পরিবর্তন হয়, গিট তা গ্রহণ করে; অন্যথায় উভয় পাশে ভিন্ন পরিবর্তন হলে গিট থেমে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Three-Way Merge Logic Matrix:
# Base (Ancestor) | Ours (main) | Theirs (feat) | Git Action
# ----------------+-------------+---------------+-----------------------
# foo             | foo         | bar           | Auto-merge -> 'bar'
# foo             | bar         | foo           | Auto-merge -> 'bar'
# foo             | bar         | baz           | CONFLICT! (Ours != Theirs)

# Git only conflicts when BOTH sides diverge away from Base on the same line!`,
      caption: {
        en: 'Git auto-merges whenever only one branch modified the common ancestor line.',
        bn: 'বেসের সাপেক্ষে কেবল ১ পাশে পরিবর্তন হলে গিট নিজে থেকেই তা মার্জ করে নেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Decoding Conflict Markers: Parsing HEAD vs Incoming', bn: '৩. কনফ্লিক্ট মার্কার বিশ্লেষণ: HEAD বনাম আগমনী পরিবর্তন' } },
    {
      type: 'para',
      text: {
        en: 'Inside conflicted files, Git demarcates colliding code blocks with 3 markers: <<<<<<< HEAD marks the start of changes from your active branch; ======= serves as the dividing equator; and >>>>>>> branch_name marks the end of the incoming changes.',
        bn: 'সমস্যাযুক্ত ফাইলের ভেতরে গিট ৩ টি বিশেষ মার্কার বসিয়ে দেয়: <<<<<<< HEAD দিয়ে আপনার বর্তমান ব্রাঞ্চের কোডের শুরু চিহ্নিত হয়; ======= হলো উভয়ের মধ্যকার বিভাজন রেখা; আর >>>>>>> branch_name দিয়ে আগমনী ব্রাঞ্চের পরিবর্তনের শেষ নির্দেশিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'python',
      code: `# Inside config.py:
def get_connection_limit():
<<<<<<< HEAD
    # Your current branch (main) chose 100
    return 100
=======
    # Incoming branch (feat/scaling) chose 500
    return 500
>>>>>>> feat/scaling

# Everything between <<<<<<< and ======= is YOUR current code (Ours).
# Everything between ======= and >>>>>>> is INCOMING code (Theirs).`,
      caption: {
        en: 'Conflict markers isolate competing code blocks directly inside the source text.',
        bn: 'কনফ্লিক্ট মার্কার সোর্স কোডের ভেতরেই উভয় পক্ষের দ্বন্দ্ব পরিষ্কারভাবে তুলে ধরে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The 4-Step Manual Resolution Workflow', bn: '৪. ৪-ধাপের ম্যানুয়াল সমাধান পদ্ধতি: এডিট, ক্লিন, স্টেজ ও কমিট' } },
    {
      type: 'para',
      text: {
        en: 'Resolving a conflict follows four disciplined steps. First, discuss with teammates and edit the file to the reconciled state. Second, completely delete all conflict markers. Third, stage the resolved file with git add. Fourth, finalize the merge commit using git commit.',
        bn: 'কনফ্লিক্ট সমাধানের জন্য ৪টি সুসংগঠিত পদক্ষেপ রয়েছে। প্রথমত, সহকর্মীদের সাথে আলোচনা করে ফাইলের চূড়ান্ত কোড সাজান। দ্বিতীয়ত, গিটের সব মার্কার সম্পূর্ণ মুছে ফেলুন। তৃতীয়ত, git add দিয়ে ফাইলটি স্টেজে তুলুন। চতুর্থত, git commit দিয়ে মার্জ সম্পন্ন করুন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Open config.py, choose compromise, delete all markers:
# def get_connection_limit():
#     return 250 # Compromised threshold approved by team

# Step 2: Inform Git the conflict has been resolved:
git add config.py

# Step 3: Verify staging tree is ready for commit:
git status -s
# Output: M  config.py (Cleanly staged!)

# Step 4: Finalize the three-way merge commit:
git commit -m "Merge branch 'feat/scaling' and set connection limit to 250"
# Output: [main 88a102b] Merge branch 'feat/scaling' and set connection limit to 250`,
      caption: {
        en: 'git add confirms to Git that human review has reconciled the colliding lines.',
        bn: 'git add গিটকে নিশ্চিত করে যে মানুষ নিজে দেখে কোডের বিরোধ মিটিয়েছে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Emergency Escape Hatch: git merge --abort', bn: '৫. জরুরি প্রস্থান পথ: git merge --abort' } },
    {
      type: 'para',
      text: {
        en: 'If a merge conflict touches hundreds of files or reveals unexpected architectural collisions, do not panic and never attempt to delete files manually. Running git merge --abort immediately halts the merge operation and cleanly restores your repository to the exact commit state prior to the merge attempt.',
        bn: 'যদি কোনো মার্জে শত শত ফাইলে অপ্রত্যাশিত কনফ্লিক্ট দেখা দেয়, তবে আতঙ্কিত হয়ে ম্যানুয়ালি ফাইল মুছতে যাবেন না। git merge --abort কমান্ড দিলে চলমান মার্জ সাথে সাথে বাতিল হয়ে যায় এবং আপনার রিপোজিটরি সম্পূর্ণ অক্ষত অবস্থায় মার্জ শুরুর আগের কমিটে ফিরে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Tangled, overwhelming merge conflict encountered:
git status
# Both modified: api.py, routes.py, db.py, auth.py, schema.sql

# Abort the entire operation safely:
git merge --abort

# Verify pristine status:
git status
# On branch main
# nothing to commit, working tree clean
# Result: Repository 100% restored to pre-merge commit with zero data loss`,
      caption: {
        en: 'git merge --abort returns the working tree cleanly to its pre-merge state.',
        bn: 'git merge --abort কোনো ডেটা নষ্ট না করেই রিপোজিটরিকে মার্জের আগের অবস্থায় ফিরিয়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Automated Resolution Caching: Git Rerere', bn: '৬. স্বয়ংক্রিয় কনফ্লিক্ট ক্যাশিং: Git Rerere টুল' } },
    {
      type: 'para',
      text: {
        en: 'Git includes a hidden superpower called Rerere (Reuse Recorded Resolution). When enabled via git config --global rerere.enabled true, Git memorizes how you resolved a conflict. If the identical conflict recurs on another branch or during a rebase, Git automatically resolves it for you without human intervention!',
        bn: 'গিটে Rerere (Reuse Recorded Resolution) নামের একটি জাদুকরী ফিচার রয়েছে। git config --global rerere.enabled true দিয়ে এটি চালু করলে আপনি কীভাবে কনফ্লিক্ট সমাধান করেছেন গিট তা মনে রাখে। ভবিষ্যতে অন্য কোনো ব্রাঞ্চে বা রিব্যাসের সময় একই কনফ্লিক্ট আবার দেখা দিলে গিট নিজে থেকেই তা নিমিষে সমাধান করে দেয়!'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Enable Rerere globally:
git config --global rerere.enabled true

# When resolving a conflict manually:
git commit -m "fix: resolve db timeout conflict"
# Recorded resolution for 'src/db.py'.

# Later, during a rebase or second merge:
git merge feat/long-running-refactor
# Output:
# Auto-merging src/db.py
# CONFLICT (content): Merge conflict in src/db.py
# Resolved 'src/db.py' using previous resolution.
# Result: Git resolved the conflict automatically using its recorded memory!`,
      caption: {
        en: 'Git Rerere eliminates repetitive manual conflict resolutions during rebasing.',
        bn: 'Git Rerere রিব্যাসের সময় একই কনফ্লিক্ট বারবার সমাধান করার বিরক্তি দূর করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Merge Strategies: The -X ours and -X theirs Options', bn: '৭. মার্জ কৌশল: -X ours এবং -X theirs অপশন' } },
    {
      type: 'para',
      text: {
        en: 'When automated merges conflict, you can dictate precedence using merge strategy options. Running git merge -X ours branch automatically favors the current branch whenever lines conflict; git merge -X theirs branch automatically favors the incoming branch, eliminating manual conflict prompts for non-critical assets.',
        bn: 'মার্জ করার সময় আপনি কোন পক্ষকে প্রাধান্য দেবেন তা আগে থেকেই ঠিক করে দেওয়া যায়। git merge -X ours branch দিলে কনফ্লিক্টের ক্ষেত্রে বর্তমান ব্রাঞ্চের কোডটি স্বয়ংক্রিয়ভাবে বিজয়ী হয়; আর git merge -X theirs দিলে আগমনী ব্রাঞ্চের কোড অগ্রাধিকার পায়, ফলে বাড়তি কোনো ঝামেলা ছাড়াই মার্জ হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Auto-resolving conflicts in favor of the incoming branch:
git merge -X theirs feat/theme-redesign

# Output:
# Auto-merging styles/theme.css
# Merge made by the 'ort' strategy.
# Result: All colliding CSS rules automatically accepted from feat/theme-redesign`,
      caption: {
        en: '-X theirs automatically takes incoming changes wherever conflict collisions occur.',
        bn: '-X theirs কনফ্লিক্ট দেখা দিলে আগমনী ব্রাঞ্চের পরিবর্তনকে নিজে থেকেই মেনে নেয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Binary File Collisions: Images, PDFs & Compiled Artifacts', bn: '৮. বাইনারি ফাইলের বিরোধ মেটানো: ছবি, পিডিএফ ও বিল্ড ফাইল' } },
    {
      type: 'para',
      text: {
        en: 'Binary files (images, videos, compiled binaries) cannot contain line-by-line conflict markers. When binary files conflict, you must explicitly choose one whole file using checkout: git checkout --ours path/to/logo.png keeps your current version; git checkout --theirs path/to/logo.png accepts the incoming file.',
        bn: 'বাইনারি ফাইলগুলোতে (যেমন ছবি, পিডিএফ বা সংকলিত ফাইল) টেক্সটের মতো লাইন ধরে মার্কার বসানো যায় না। এতে বিরোধ দেখা দিলে যেকোনো এক পক্ষের পুরো ফাইলটি বেছে নিতে হয়: git checkout --ours path/to/image.png দিলে বর্তমান ব্রাঞ্চের ছবিটি থাকে; আর git checkout --theirs দিলে অন্য ব্রাঞ্চের ছবিটি গৃহীত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Binary conflict detected on branding asset:
git status
# Both modified: assets/brand-logo.png

# Keep our version of the image:
git checkout --ours assets/brand-logo.png

# OR accept their version of the image:
# git checkout --theirs assets/brand-logo.png

# Stage chosen binary and commit:
git add assets/brand-logo.png
git commit -m "fix: resolve binary logo conflict by selecting approved asset"
# Output: [main 41b9c02] Binary conflict resolved cleanly`,
      caption: {
        en: 'Binary conflicts require selecting either the entire local (--ours) or incoming (--theirs) file.',
        bn: 'বাইনারি বিরোধে সম্পূর্ণ লোকাল (--ours) অথবা সম্পূর্ণ আগমনী (--theirs) ফাইলটি বেছে নিতে হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Graphical Resolution Workflows: git mergetool', bn: '৯. গ্রাফিক্যাল সমাধান ব্যবস্থা: git mergetool কনফিগারেশন' } },
    {
      type: 'para',
      text: {
        en: 'For complex multi-line conflicts, command-line markers can be hard to parse. The git mergetool command launches a 3-way visual diff GUI (such as VS Code, Meld, or KDiff3). The visual interface displays Base in the center, Ours on the left, and Theirs on the right, allowing point-and-click reconciliation.',
        bn: 'জটিল কনফ্লিক্টের ক্ষেত্রে টার্মিনালে টেক্সট পড়া কঠিন হতে পারে। git mergetool কমান্ড দিলে একটি ৩-ওয়ে ভিজ্যুয়াল ডিফারেন্স টুল (যেমন VS Code বা KDiff3) চালু হয়। এতে স্ক্রিনে একদিকে আদি কোড, একদিকে বর্তমান কোড এবং অন্যদিকে আগমনী কোড পাশাপাশি ভেসে ওঠে, ফলে মাউসের ক্লিকেই সহজে বিরোধ মেটানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Configure VS Code as the default Git merge tool:
git config --global merge.tool vscode
git config --global mergetool.vscode.cmd 'code --wait $MERGED'

# When conflict occurs, launch GUI:
git mergetool

# Output:
# Merging: src/complex_algorithm.py
# Normal merge conflict for 'src/complex_algorithm.py':
#   {local}: modified file
#   {remote}: modified file
# Launching VS Code 3-way visual resolution editor...`,
      caption: {
        en: 'Visual merge tools provide a three-pane comparative interface for complex codebases.',
        bn: 'ভিজ্যুয়াল মার্জ টুল তিন-প্যানের তুলনামূলক ইন্টারফেসে জটিল কোড সমাধানের সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Architectural Hygiene: Preventing Conflicts Proactively', bn: '১০. প্রতিরোধমূলক নিয়মাবলী: কনফ্লিক্ট এড়ানোর টিম কালচার' } },
    {
      type: 'para',
      text: {
        en: 'The best way to resolve merge conflicts is to prevent them proactively. Elite software teams avoid merge friction through four core habits. First, rebase or pull from main daily. Second, keep feature branches small, merging within 24 to 48 hours. Third, avoid massive automatic code formatting passes on active branches. Fourth, modularize code so developers edit distinct files.',
        bn: 'মার্জ কনফ্লিক্ট সামলানোর সেরা উপায় হলো তা আগে থেকেই প্রতিরোধ করা। দক্ষ ইঞ্জিনিয়ারিং দলগুলো ৪ টি অভ্যাস মেনে চলে। প্রথমত, প্রতিদিন মেইন ব্রাঞ্চ থেকে নিজের শাখায় আপডেট আনা। দ্বিতীয়ত, ফিচার ব্রাঞ্চ ছোট রাখা এবং ২৪ থেকে ৪৮ ঘণ্টার মধ্যে মার্জ করা। তৃতীয়ত, কাজের মাঝে হঠাৎ পুরো কোডবেস অটো-ফরম্যাট না করা। চতুর্থত, কোড মডিউলার রাখা যাতে সবাই আলাদা ফাইলে কাজ করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Daily habit of senior developers before starting work:
git switch feat/my-task
git fetch origin
git merge origin/main # Keep feature branch continuously synchronized with trunk!

# If any conflict exists, it is tiny (1 day of work), rather than a catastrophic 3-week conflict!
# Result: Continuous incremental synchronization eliminates massive merge friction`,
      caption: {
        en: 'Continuous daily synchronization prevents small divergences from escalating into unresolvable conflicts.',
        bn: 'নিয়মিত সিঙ্কিং ছোটখাটো পরিবর্তনগুলোকে বড় ধরনের সংঘর্ষে রূপ নেওয়া থেকে বাঁচায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-cnf-ex1',
      kind: 'predict',
      topic: 'git: HEAD in conflict markers',
      question: {
        en: 'In a conflict marker block, which side of the changes does <<<<<<< HEAD represent?',
        bn: 'কনফ্লিক্ট মার্কার ব্লকে <<<<<<< HEAD কোন পক্ষের পরিবর্তনকে নির্দেশ করে?'
      },
      code: `/* Git conflict marker anatomy */
/* <<<<<<< HEAD */`,
      answer: 'current branch',
      accept: ['current branch', 'active branch', 'ours', 'our branch', 'current'],
      hint: {
        en: 'HEAD represents the branch you are currently on (Ours).',
        bn: 'HEAD হলো আপনি যে ব্রাঞ্চে আছেন সেই বর্তমান পক্ষ।'
      },
      explanation: {
        en: 'In Git conflict markers, <<<<<<< HEAD represents the version from your active currently checked-out branch (often referred to as Ours).',
        bn: 'গিটের কনফ্লিক্ট মার্কিংয়ে <<<<<<< HEAD আপনার বর্তমান সক্রিয় ব্রাঞ্চের (Ours) পরিবর্তনগুলোকে নির্দেশ করে।'
      }
    },
    {
      id: 'git-cnf-ex2',
      kind: 'mcq',
      topic: 'git: git merge --abort utility',
      question: {
        en: 'What does the command git merge --abort accomplish?',
        bn: 'git merge --abort কমান্ডের মূল কাজ কী?'
      },
      options: [
        { en: 'It halts the conflicted merge and restores the working directory to the commit state before the merge was attempted', bn: 'চলমান মার্জ বাতিল করে এবং ওয়ার্কিং ডিরেক্টরিকে হুবহু মার্জ শুরুর আগের কমিট অবস্থায় ফিরিয়ে নেয়' },
        { en: 'It deletes the repository', bn: 'রিপোজিটরি মুছে ফেলে' },
        { en: 'It force-pushes uncommitted code to GitHub', bn: 'GitHub-এ ফোর্স পুশ করে' },
        { en: 'It accepts all incoming conflicts automatically', bn: 'সব কনফ্লিক্ট মেনে নেয়' }
      ],
      answer: 0,
      hint: {
        en: 'It aborts the in-progress merge cleanly.',
        bn: 'এটি চলমান মার্জ নিরাপদে বাতিল করে।'
      },
      explanation: {
        en: 'git merge --abort stops an ongoing conflicted merge and rolls back all modified files to the exact state they held before git merge was invoked.',
        bn: 'git merge --abort চলমান মার্জ বন্ধ করে দেয় এবং কোনো ডেটা ক্ষতি না করেই সবকিছু মার্জ শুরুর আগের অবস্থায় ফিরিয়ে নিয়ে যায়।'
      }
    },
    {
      id: 'git-cnf-ex3',
      kind: 'mcq',
      topic: 'git: Git Rerere purpose',
      question: {
        en: 'What is the purpose of Git Rerere (Reuse Recorded Resolution)?',
        bn: 'Git Rerere (Reuse Recorded Resolution) চালুর মূল উদ্দেশ্য কী?'
      },
      options: [
        { en: 'To memorize how a conflict was resolved and automatically apply the same resolution if the identical conflict recurs', bn: 'কনফ্লিক্ট কীভাবে সমাধান করা হয়েছিল তা মনে রাখা এবং ভবিষ্যতে একই বিরোধ আবার দেখা দিলে স্বয়ংক্রিয়ভাবে সমাধান করা' },
        { en: 'To restart the computer on merge errors', bn: 'কম্পিউটার রিস্টার্ট করা' },
        { en: 'To encrypt passwords inside Git commits', bn: 'কমিট এনক্রিপ্ট করা' },
        { en: 'To automatically delete old branches', bn: 'পুরনো ব্রাঞ্চ ডিলিট করা' }
      ],
      answer: 0,
      hint: {
        en: 'Rerere reuses previously recorded manual resolutions.',
        bn: 'Rerere আগের সমাধান করা মেমোরি পুনরায় কাজে লাগায়।'
      },
      explanation: {
        en: 'Git Rerere caches conflict resolutions and automatically re-applies them when the same collision happens again during rebasing or multi-branch workflows.',
        bn: 'Git Rerere অতীতের কনফ্লিক্ট সমাধানের ইতিহাস মনে রাখে এবং ভবিষ্যতে একই সমস্যা দেখা দিলে কোনো মানুষের সাহায্য ছাড়াই তা স্বয়ংক্রিয়ভাবে সমাধান করে।'
      }
    }
  ],
  quiz: {
    id: 'git-conflicts-quiz',
    title: { en: 'Git Merge Conflicts Quiz', bn: 'গিট মার্জ কনফ্লিক্ট কুইজ' },
    questions: [
      {
        id: 'cq1',
        kind: 'mcq',
        topic: 'git: Three-way merge components',
        question: {
          en: 'Which three snapshots are analyzed by the Git Three-Way Merge algorithm?',
          bn: 'গিটের ৩-ওয়ে মার্জ অ্যালগরিদমে কোন তিনটি স্ন্যাপশট বিশ্লেষণ করা হয়?'
        },
        options: [
          { en: 'Common Ancestor (Base), Current Branch (Ours), and Incoming Branch (Theirs)', bn: 'সাধারণ পূর্বপুরুষ (Base), বর্তমান ব্রাঞ্চ (Ours), এবং আগমনী ব্রাঞ্চ (Theirs)' },
          { en: 'Local, Staging, and Remote', bn: 'লোকাল, স্টেজিং ও রিমোট' },
          { en: 'Commit, Tree, and Blob', bn: 'কমিট, ট্রি ও ব্লব' },
          { en: 'Master, Main, and Trunk', bn: 'মাস্টার, মেইন ও ট্রাঙ্ক' }
        ],
        answer: 0,
        hint: {
          en: 'Base + Ours + Theirs.',
          bn: 'বেস + আওয়ার্স + দেয়ার্স।'
        },
        explanation: {
          en: 'A three-way merge compares the common ancestor (Base), the active target branch (Ours), and the incoming source branch (Theirs) to determine clean changes.',
          bn: '৩-ওয়ে মার্জ উভয়ের আদি পূর্বপুরুষ (Base), বর্তমান টার্গেট ব্রাঞ্চ (Ours) এবং আগমনী ব্রাঞ্চের (Theirs) তুলনামূলক বিশ্লেষণ করে মার্জ সম্পন্ন করে।'
        }
      },
      {
        id: 'cq2',
        kind: 'mcq',
        topic: 'git: Resolving binary conflicts',
        question: {
          en: 'How do you resolve a merge conflict in a binary file like an image (e.g. brand-logo.png)?',
          bn: 'ছবির (যেমন brand-logo.png) মতো কোনো বাইনারি ফাইলে মার্জ কনফ্লিক্ট দেখা দিলে কীভাবে সমাধান করবেন?'
        },
        options: [
          { en: 'Use git checkout --ours or git checkout --theirs to select the entire desired file version', bn: 'git checkout --ours অথবা git checkout --theirs দিয়ে যেকোনো এক পক্ষের পুরো ফাইলটি বেছে নিয়ে' },
          { en: 'Open the PNG in a text editor and delete <<<<<<< markers', bn: 'টেক্সট এডিটরে ছবি খুলে মার্কার মুছে' },
          { en: 'Rename the file extension to .txt', bn: 'এক্সটেনশন বদলে .txt করে' },
          { en: 'Binary files never conflict in Git', bn: 'বাইনারি ফাইলে কনফ্লিক্ট হয় না' }
        ],
        answer: 0,
        hint: {
          en: 'Binary files cannot be merged line-by-line; you must choose one whole version.',
          bn: 'বাইনারি ফাইল লাইন ধরে মেশানো যায় না; পুরো ফাইলটি বেছে নিতে হয়।'
        },
        explanation: {
          en: 'Because binary files cannot contain text conflict markers, you must choose either your local copy (--ours) or the incoming copy (--theirs) using git checkout.',
          bn: 'যেহেতু ছবিতে কোনো টেক্সট মার্কার থাকে না, তাই git checkout দিয়ে সম্পূর্ণ নিজের ফাইল (--ours) অথবা সম্পূর্ণ আগমনী ফাইল (--theirs) বেছে নিতে হয়।'
        }
      },
      {
        id: 'cq3',
        kind: 'mcq',
        topic: 'git: aborting conflicted merges',
        question: {
          en: 'What does git merge --abort do when encountering complex merge conflicts?',
          bn: 'জটিল মার্জ কনফ্লিক্ট দেখা দিলে git merge --abort কমান্ড দিলে কী ঘটে?'
        },
        options: [
          { en: 'It completely aborts the merge and rolls back your working directory to the clean state before the merge command was run', bn: 'এটি মার্জ প্রক্রিয়া সম্পূর্ণ বাতিল করে এবং ওয়ার্কিং ডিরেক্টরিকে হুবহু মার্জ কমান্ড চালানোর আগের ফ্রেশ অবস্থায় ফিরিয়ে নিয়ে যায়' },
          { en: 'It commits all conflicted files with markers intact', bn: 'মার্কার রেখেই সব ফাইল কমিট করে দেয়' },
          { en: 'It deletes the active Git branch', bn: 'চলতি গিট ব্রাঞ্চটি মুছে দেয়' },
          { en: 'It reboots the computer', bn: 'কম্পিউটার রিবুট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Restores the pre-merge working state.',
          bn: 'মার্জ শুরুর আগের পরিচ্ছন্ন অবস্থায় ফিরিয়ে নেয়।'
        },
        explanation: {
          en: 'git merge --abort resets index entries and restores files to their pre-merge state, safely unwinding interrupted operations.',
          bn: 'git merge --abort কমান্ড কোনো ক্ষতি না করে তৎক্ষণাৎ মার্জ থামিয়ে পূর্বের অবস্থায় ফিরে যায়।'
        }
      },
      {
        id: 'cq4',
        kind: 'mcq',
        topic: 'git: rerere automated resolution caching',
        question: {
          en: 'What capability does Git’s rerere (reuse recorded resolution) feature provide?',
          bn: 'গিটের rerere (reuse recorded resolution) ফিচারের কাজ কী?'
        },
        options: [
          { en: 'It remembers how you resolved a specific conflict hunk and automatically applies the identical resolution if the same conflict recurs later', bn: 'এটি অতীতের কনফ্লিক্ট সমাধানের ইতিহাস মনে রাখে এবং ভবিষ্যতে একই সংঘর্ষ ঘটলে স্বয়ংক্রিয়ভাবে তা পুনরায় প্রয়োগ করে' },
          { en: 'It translates commit messages into multiple languages', bn: 'কমিট মেসেজকে বিভিন্ন ভাষায় অনুবাদ করে' },
          { en: 'It automatically formats code with Prettier', bn: 'প্রিটিয়ার দিয়ে কোড ফরম্যাট করে' },
          { en: 'It prevents developers from creating feature branches', bn: 'ফিচার ব্রাঞ্চ তৈরি বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Reuses previously recorded conflict resolutions.',
          bn: 'পূর্বে সংরক্ষিত কনফ্লিক্ট সমাধান পুনর্ব্যবহার করে।'
        },
        explanation: {
          en: 'When rerere is enabled, Git tracks how conflicts were resolved and automates future resolutions when rebasing or repeating merges.',
          bn: 'rerere চালু থাকলে অতীতে সমাধান করা কনফ্লিক্ট গিট নিজে থেকেই শনাক্ত করে ভবিষ্যতে স্বয়ংক্রিয়ভাবে প্রয়োগ করতে পারে।'
        }
      }
    ]
  }
};
