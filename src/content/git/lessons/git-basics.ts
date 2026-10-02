import type { Lesson } from '../../../lib/types';

export const gitBasicsLesson: Lesson = {
  slug: 'git-basics',
  tech: 'git',
  title: { en: 'Git Basics: The Four Zones of Version Control', bn: 'গিট বেসিক্স: ভার্সন কন্ট্রোলের চার জোন' },
  summary: {
    en: 'Beginner introduction to Git version control: Working Directory → Staging Area → Local Repository → Remote. Learn the four core zones that make every git command intuitive.',
    bn: 'গিট ভার্সন কন্ট্রোলের প্রাথমিক পরিচিতি: ওয়ার্কিং ডিরেক্টরি → স্টেজিং এরিয়া → লোকাল রিপোজিটরি → রিমোট। চারটি মূল জোন আয়ত্ত করুন যা প্রতিটি git কমান্ডকে সহজ করে তোলে।',
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT is Git?', bn: 'Git কী?' },
    },
    {
      type: 'para',
      text: {
        en: 'When you build software projects, Git serves as a snapshot machine for tracking your code history. Instead of managing chaotic zip files, you create a linear chain of commits where each snapshot records the exact state of your project. Between your working files and your permanent history, Git organizes your work across four distinct zones: Working Directory, Staging Area, Local Repository, and Remote.',
        bn: 'সফটওয়্যার তৈরির সময় Git কোডের ইতিহাস সংরক্ষণ করার জন্য একটি নির্ভরযোগ্য স্ন্যাপশট মেশিন হিসেবে কাজ করে। জিপ ফাইলের বিশৃঙ্খলা এড়িয়ে এখানে প্রতিটি কমিটে প্রজেক্টের সুনির্দিষ্ট অবস্থার পূর্ণাঙ্গ স্ন্যাপশট জমা থাকে। আপনার কাজের ফাইল এবং স্থায়ী ইতিহাসের মাঝে Git পুরো প্রক্রিয়াকে ৪ টি স্বতন্ত্র জোনে বিন্যস্ত করে: ওয়ার্কিং ডিরেক্টরি, স্টেজিং এরিয়া, লোকাল রিপোজিটরি এবং রিমোট।'
      },
    },
    {
      type: 'list',
      items: [
        { en: '💾 Working Directory — the real files you edit.', bn: '💾 ওয়ার্কিং ডিরেক্টরি — যে প্রকৃত ফাইল আপনি সম্পাদনা করেন।' },
        { en: '📋 Staging Area — the composed snapshot waiting to be sealed.', bn: '📋 স্টেজিং এরিয়া — সিল করার অপেক্ষায় থাকা সাজানো স্ন্যাপশট।' },
        { en: '🏠 Local Repository (.git) — your private, permanent history.', bn: '🏠 লোকাল রিপোজিটরি (.git) — আপনার ব্যক্তিগত, স্থায়ী ইতিহাস।' },
        { en: '☁️ Remote — the shared copy your team pulls and pushes.', bn: '☁️ রিমোট — যে ভাগ করা কপি দল pull/push করে।' },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY the four zones exist', bn: 'চার জোন কেন আছে' },
    },
    {
      type: 'para',
      text: {
        en: 'Each zone addresses a specific developer concern. The Working Directory lets you experiment freely without breaking saved history. The Staging Area allows you to compose clean commits by selecting specific file modifications. The Local Repository records permanent commits offline without needing internet connectivity. Finally, the Remote Repository coordinates code with your team and preserves offsite backups.',
        bn: 'প্রতিটি জোন প্রোগ্রামারের একটি সুনির্দিষ্ট প্রয়োজন মেটায়। ওয়ার্কিং ডিরেক্টরি সংরক্ষিত ইতিহাস না ভেঙে মুক্তভাবে পরীক্ষা-নিরীক্ষা করার সুযোগ দেয়। স্টেজিং এরিয়ার মাধ্যমে নির্দিষ্ট ফাইল পরিবর্তন নির্বাচন করে পরিচ্ছন্ন কমিট তৈরি করা যায়। লোকাল রিপোজিটরি ইন্টারনেট সংযোগ ছাড়াই অফলাইনে স্থায়ী কমিট সংরক্ষণ করে। আর পরিশেষে রিমোট রিপোজিটরি টিমের সাথে কোড সমন্বয় ও ব্যাকআপের নিশ্চয়তা দেয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      text: {
        en: 'Feeling lost in git? Ask one question: "which ZONE am I in right now?" git status is the zone reporter — learn to read it and the rest follows.',
        bn: 'Git-এ হারিয়ে গেছেন? একটি প্রশ্ন করুন: "এই মুহূর্তে আমি কোন জোনে আছি?" git status হলো জোন-রিপোর্টার — ওটা পড়তে শিখলেই বাকিটা আসে।',
      },
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW content flows (the daily loop)', bn: 'কনটেন্ট কীভাবে চলে (দৈনন্দিন চক্র)' },
    },
    {
      type: 'steps',
      items: [
        {
          title: { en: '1️⃣ Edit', bn: '1️⃣ সম্পাদনা' },
          text: { en: 'You change files. Git watches but remembers nothing — the work lives only in the Working Directory.', bn: 'আপনি ফাইল বদলান। Git দেখে কিন্তু কিছু মনে রাখে না — কাজ থাকে কেবল ওয়ার্কিং ডিরেক্টরিতে।' },
        },
        {
          title: { en: '2️⃣ git add', bn: '2️⃣ git অ্যাড' },
          text: { en: 'Snapshots of chosen changes move to Staging. You are composing the next commit like a photograph — decide what is IN the frame.', bn: 'নির্বাচিত পরিবর্তনের স্ন্যাপশট যায় স্টেজিং-এ। আপনি পরের কমিট সাজাচ্ছেন ছবি তোলার মতো — ফ্রেমে কী থাকবে তা ঠিক করুন।' },
        },
        {
          title: { en: '3️⃣ git commit', bn: '3️⃣ git কমিট' },
          text: { en: 'Staging is sealed forever as a commit with a hash, a message and a parent. The branch label (e.g. main) slides forward to it.', bn: 'স্টেজিং চিরকালের জন্য সিল হয়ে যায় হ্যাশ, বার্তা ও প্যারেন্টসহ কমিটে। ব্রাঞ্চ লেবেল (যেমন main) তার দিকে সরে যায়।' },
        },
        {
          title: { en: '4️⃣ git push / pull', bn: '4️⃣ git পুশ / পুল' },
          text: { en: 'push copies your new commits to the remote; pull fetches teammates’ commits and catches your branch up. Two separate stores of the same history, synced on demand.', bn: 'push আপনার নতুন কমিট রিমোটে কপি করে; pull সতীর্থদের কমিট এনে আপনার ব্রাঞ্চ সামনে নিয়ে আসে। একই ইতিহাসের দুটি আলাদা ভাণ্ডার — চাহিদামতো সিঙ্ক।' },
        },
      ],
    },
    {
      type: 'code',
      lang: 'bash',
      code: `git init          # create the .git zone (Local Repo)
git status        # ask the zone reporter
vim style.css     # edit → Working Directory only
git add style.css # stage → snapshot moves to Staging
git commit -m "home page navbar styles"
git push origin main  # Local → Remote`,
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INTERNALS: what a commit actually IS', bn: 'ভেতরের কথা: কমিট আসলে কী জিনিস' },
    },
    {
      type: 'para',
      text: {
        en: 'A commit is NOT a diff. It is a tiny object containing: (1) a pointer to a tree — a complete snapshot of all files, (2) the hash(es) of parent commit(s), (3) author + timestamp + message. Its hash (like 3f6c9a2) is computed from ALL of that content: change one bit and the hash changes, which is why rewritten history is instantly detectable. A branch is nothing but a movable label holding a commit hash — 41 bytes on disk. HEAD is the label saying which branch you are on. Understand "snapshots + labels + parents" and merge conflicts, rebases, even detached HEAD stop being scary.',
        bn: 'কমিট কোনো diff নয়। এটি এক ক্ষুদ্র অবজেক্ট যার ভেতরে: (১) একটি ট্রির ঠিকানা — সব ফাইলের সম্পূর্ণ স্ন্যাপশট, (২) প্যারেন্ট কমিটের হ্যাশ, (৩) লেখক + সময় + বার্তা। এর হ্যাশ (যেমন 3f6c9a2) পুরো কনটেন্ট থেকে হিসাব হয়: একটি বিট বদলালেই হ্যাশ বদলে যায় — এইজন্য বদলে ফেলা ইতিহাস সঙ্গে সঙ্গে ধরা পড়ে। ব্রাঞ্চ হলো কমিট হ্যাশধারী সরণীয় লেবেল মাত্র — ডিস্কে ৪১ বাইট। HEAD হলো সে লেবেল যা বলে কোন ব্রাঞ্চে আছেন। "স্ন্যাপশট + লেবেল + প্যারেন্ট" বোঝা মানে মার্জ কনফ্লিক্ট, রিবেস, এমনকি detached HEAD-ও আর ভয়ের নয়।',
      },
    },
    {
      type: 'table',
      head: [
        { en: 'Zone', bn: 'জোন' },
        { en: 'Command that moves INTO it', bn: 'যে কমান্ডে এতে যায়' },
        { en: 'Undone with', bn: 'ফেরানো হয়' },
      ],
      rows: [
        [{ en: 'Working Dir', bn: 'ওয়ার্কিং ডির' }, { en: '(you edit)', bn: '(আপনি সম্পাদনা)' }, { en: 'git restore file', bn: 'git restore ফাইল' }],
        [{ en: 'Staging', bn: 'স্টেজিং' }, { en: 'git add', bn: 'git add' }, { en: 'git restore --staged', bn: 'git restore --staged' }],
        [{ en: 'Local Repo', bn: 'লোকাল রিপো' }, { en: 'git commit', bn: 'git commit' }, { en: 'git reset (before push!)', bn: 'git reset (push-এর আগে!)' }],
        [{ en: 'Remote', bn: 'রিমোট' }, { en: 'git push', bn: 'git push' }, { en: 'git revert (safe)', bn: 'git revert (নিরাপদ)' }],
      ],
    },
    {
      type: 'heading',
      id: 'visual',
      text: { en: 'VISUAL: drive the four zones yourself', bn: 'ভিজ্যুয়াল: চার জোন নিজে চালান' },
    },
    { type: 'visual', id: 'git' },
    {
      type: 'para',
      text: {
        en: 'Run the loop above: init → edit → add → commit. Watch files jump zones, the c1 node appear, and the main label chase it. That moving label is the entire secret of git.',
        bn: 'উপরের চক্র চালান: init → edit → add → commit। ফাইল জোন বদলে যেতে, c1 নোট আসতে, আর main লেবেলকে তার পেছনে ছুটতে দেখুন। সেই চলমান লেবেলই Git-এর পুরো রহস্য।',
      },
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT: what you should now be able to do', bn: 'ফলাফল: এখন আপনি যা পারবেন' },
    },
    {
      type: 'list',
      items: [
        { en: 'Name the zone of any change by reading git status.', bn: 'git status পড়ে যেকোনো পরিবর্তনের জোন বলতে পারা।' },
        { en: 'Explain why staging exists (partial commits, clean history).', bn: 'স্টেজিং কেন আছে ব্যাখ্যা করতে পারা (আংশিক কমিট, পরিষ্কার ইতিহাস)।' },
        { en: 'Describe a commit as snapshot + parents + label, not a diff.', bn: 'কমিটকে diff নয়, স্ন্যাপশট + প্যারেন্ট + লেবেল হিসেবে বর্ণনা করতে পারা।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUGGING drill: the disappearing commit', bn: 'ডিবাগিং অনুশীলন: উধাও কমিট' },
    },
    {
      type: 'para',
      text: {
        en: 'Scenario: you ran `git reset --hard HEAD~1` to "fix" a merge, and now your morning’s work is invisible in git log. Panic? Don’t. Diagnosis: commits are only LABELLED things; the object is still in .git. Evidence: run `git reflog` — the diary of every place HEAD has been. Find your hash, `git reset --hard <hash>` (or safer: `git branch rescue <hash>`). Rule from the zones table: local commits are recoverable until garbage collection; pushed ones should be reverted, never erased.',
        bn: 'দৃশ্য: মার্জ "ঠিক" করতে `git reset --hard HEAD~1` চালিয়েছেন, এখন সকালের কাজ git log-এ নেই। আতঙ্ক? দরকার নেই। নির্ণয়: লেবেল ভুলে গেলেই কমিট "উধাও" মনে হয়; অবজেক্ট .git-এ আছেই। প্রমাণ: `git reflog` চালান — HEAD কোথায় কোথায় ছিল তার ডায়েরি। হ্যাশ খুঁজে `git reset --hard <hash>` (নিরাপদ: `git branch rescue <hash>`)। জোন টেবিলের নিয়ম: লোকাল কমিট garbage collection পর্যন্ত উদ্ধারযোগ্য; push করা কমিট মুছবেন না, revert করুন।',
      },
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'The classic muddle', bn: 'ক্লাসিক গুলিয়ে ফেলা' },
      text: {
        en: 'Editing files and running straight to `git commit` — then wondering "why is my commit empty?" Nothing was staged. git add is not optional politeness; it is the door between zones.',
        bn: 'ফাইল বদলে সোজা `git commit` চালিয়ে ভাবা "কমিট খালি কেন?" কিছুই স্টেজ করা হয়নি। git add ভদ্রতা নয়; এটি জোনপারের দরজা।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD', bn: 'বাস্তব জগত' },
    },
    {
      type: 'list',
      items: [
        { en: 'Half-staged files: the #1 way "it works on my branch" bugs ship. Staging discipline = review discipline.', bn: 'অর্ধ-স্টেজ করা ফাইল: "আমার ব্রাঞ্চে তো চলে" বাগ প্রোডাকশনে যাওয়ার ১ নম্বর পথ। স্টেজিং শৃঙ্খলা = রিভিউ শৃঙ্খলা।' },
        { en: 'CI runs on COMMITS, not your working directory — uncommitted code does not exist.', bn: 'CI চলে কমিটের ওপর, ওয়ার্কিং ডিরেক্টরির নয় — কমিট না করা কোড অস্তিত্বহীন।' },
        { en: 'Every pull request is a curated story of commits; senior engineers rewrite staging obsessively before pushing.', bn: 'প্রতিটি পুল রিকোয়েস্ট হলো কমিটের নির্বাচিত গল্প; সিনিয়ররা push-এর আগে স্টেজিং নাক গলে সাজায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT: branches & merging', bn: 'পরবর্তী: ব্রাঞ্চ ও মার্জ' },
    },
    {
      type: 'para',
      text: {
        en: 'You can make history. Next lesson makes it BRANCH — parallel timelines, HEAD gymnastics and the merge commit with two parents.',
        bn: 'ইতিহাস তৈরি করতে শিখলেন। পরের লেসনে সেটি শাখা কাঁটবে — সমান্তরাল টাইমলাইন, HEAD-এর কসরত আর দুই প্যারেন্টের মার্জ কমিট।',
      },
    },
  ],
  nextLesson: {
    slug: 'git-branching',
    tech: 'git',
    title: { en: 'Git Branching — A merge is a commit with two parents', bn: 'ব্রাঞ্চ ও মার্জ: সমান্তরাল জগত' }
  },
  exercises: [
    {
      id: 'git-basics-ex1',
      kind: 'predict',
      topic: 'zones',
      question: {
        en: 'You edited app.js 5 minutes ago but never ran git add. Where does that change live?',
        bn: '৫ মিনিট আগে app.js বদলেছেন কিন্তু git add চালাননি। পরিবর্তনটা কোথায় আছে?',
      },
      options: [
        { en: 'Working Directory only', bn: 'শুধু ওয়ার্কিং ডিরেক্টরি' },
        { en: 'Staging Area', bn: 'স্টেজিং এরিয়া' },
        { en: 'Local Repository', bn: 'লোকাল রিপোজিটরি' },
        { en: 'It is lost', bn: 'হারিয়ে গেছে' },
      ],
      answer: 0,
      hint: { en: 'git only moves things between zones when YOU ask.', bn: 'আপনি না বললে git জোনপার করে না।' },
      explanation: {
        en: 'Until git add, a change exists only on disk. Git saw it (status shows it red) but remembers nothing.',
        bn: 'git add পর্যন্ত পরিবর্তন থাকে শুধু ডিস্কে। Git দেখেছে (status-এ লাল) কিন্তু কিছু মনে রাখেনি।',
      },
    },
    {
      id: 'git-basics-ex2',
      kind: 'mcq',
      topic: 'staging',
      question: {
        en: 'Why does the Staging Area exist instead of committing directly?',
        bn: 'সরাসরি কমিট না করে স্টেজিং এরিয়া আছে কেন?',
      },
      options: [
        { en: 'To make git slower and more academic', bn: 'git-কে ধীর ও তাত্ত্বিক করার জন্য' },
        { en: 'So you can compose exactly what goes into a commit — partial, reviewable snapshots', bn: 'যাতে কমিটে ঠিক কী যাবে সাজানো যায় — আংশিক, রিভিউযোগ্য স্ন্যাপশট' },
        { en: 'It is a network buffer for slow connections', bn: 'ধীর কানেকশনের নেটওয়ার্ক বাফার' },
        { en: 'Backwards compatibility with SVN', bn: 'SVN-এর সাথে সামঞ্জস্য' },
      ],
      answer: 1,
      hint: { en: 'One file can hold two unrelated changes…', bn: 'এক ফাইলে ২ টি স্বাধীন পরিবর্তন থাকতে পারে…' },
      explanation: {
        en: 'Staging is the composition step: many real commits need only SOME of your current changes — a bugfix here, a feature there.',
        bn: 'স্টেজিং হলো সাজানোর ধাপ: বাস্তবে অনেক কমিটে চায় বর্তমান পরিবর্তনের কিছু অংশ — এখানে বাগফিক্স, ওখানে ফিচার।',
      },
    },
    {
      id: 'git-basics-ex3',
      kind: 'fill',
      topic: 'commands',
      question: {
        en: 'Fill the command that moves staged content into permanent local history: git ______ -m "message"',
        bn: 'স্টেজ করা কনটেন্ট স্থায়ী লোকাল ইতিহাসে পাঠানোর কমান্ড পূরণ করুন: git ______ -m "message"',
      },
      answer: 'commit',
      accept: ['commit'],
      hint: { en: 'It creates a node in the graph.', bn: 'এটিই গ্রাফে নোড তৈরি করে।' },
      explanation: {
        en: 'git commit seals the staging area into a commit object with hash, message and parent.',
        bn: 'git commit স্টেজিং এরিয়াকে হ্যাশ, বার্তা ও প্যারেন্টসহ কমিট অবজেক্টে সিল করে।',
      },
      solution: 'git commit -m "message"',
    },
    {
      id: 'git-basics-ex4',
      kind: 'predict',
      topic: 'internals',
      question: {
        en: 'A teammate claims: "commits are just diffs of your changes." In this platform’s model, what is a commit really?',
        bn: 'সতীর্থ বললেন: "কমিট হলো শুধু আপনার পরিবর্তনের diff।" এই প্ল্যাটফর্মের মডেলে কমিট আসলে কী?',
      },
      options: [
        { en: 'A diff + a timestamp', bn: 'একটি diff + টাইমস্ট্যাম্প' },
        { en: 'A complete snapshot of all files + parent hash + metadata', bn: 'সব ফাইলের সম্পূর্ণ স্ন্যাপশট + প্যারেন্ট হ্যাশ + মেটাডেটা' },
        { en: 'A zip file of the changed files only', bn: 'শুধু বদলে যাওয়া ফাইলের জিপ' },
      ],
      answer: 1,
      hint: { en: 'Why can git checkout any old commit in milliseconds?', bn: 'git কীভাবে পুরনো যেকোনো কমিটে মিলিসেকেন্ডে যায়?' },
      explanation: {
        en: 'Snapshot, not diff — that is why checkout/reset between any two commits is instant, and why hashes detect tampering.',
        bn: 'স্ন্যাপশট, diff নয় — এইজন্যই যেকোনো দুই কমিটের মাঝে checkout/reset তাৎক্ষণিক, আর হ্যাশে পরিবর্তন ধরা পড়ে।',
      },
    },
  ],
  quiz: {
    id: 'git-basics-quiz',
    title: { en: 'Quiz: the four zones', bn: 'কুইজ: চার জোন' },
    questions: [
      {
        id: 'git-basics-q1',
        kind: 'mcq',
        topic: 'zones',
        question: { en: 'git status shows style.css in red, "not staged". Which zone(s) hold this change?', bn: 'git status-এ style.css লাল, "not staged"। পরিবর্তনটি কোন জোনে?' },
        options: [
          { en: 'Working Directory', bn: 'ওয়ার্কিং ডিরেক্টরি' },
          { en: 'Staging + Working', bn: 'স্টেজিং + ওয়ার্কিং' },
          { en: 'Local Repository', bn: 'লোকাল রিপোজিটরি' },
        ],
        answer: 0,
        hint: { en: 'Red = unstaged = only on disk.', bn: 'লাল = স্টেজবিহীন = শুধু ডিস্কে।' },
        explanation: { en: 'Red/not-staged means the change lives only in the Working Directory.', bn: 'লাল/not-staged মানে পরিবর্তন শুধু ওয়ার্কিং ডিরেক্টরিতে।' },
      },
      {
        id: 'git-basics-q2',
        kind: 'fill',
        topic: 'commands',
        question: { en: 'Fill: after editing index.html, move it to staging with git ____ index.html', bn: 'পূরণ: index.html বদলে তা স্টেজিং-এ পাঠাতে: git ____ index.html' },
        answer: 'add',
        accept: ['add'],
        hint: { en: 'One word, three letters.', bn: 'এক শব্দ, তিন অক্ষর।' },
        explanation: { en: 'git add snapshots chosen files into the staging area.', bn: 'git add নির্বাচিত ফাইলের স্ন্যাপশট স্টেজিং-এ পাঠায়।' },
        solution: 'git add index.html',
      },
      {
        id: 'git-basics-q3',
        kind: 'mcq',
        topic: 'internals',
        question: { en: 'A branch (like main) physically is…', bn: 'একটি ব্রাঞ্চ (যেমন main) প্রকৃতপক্ষে হলো…' },
        options: [
          { en: 'A folder containing copies of your files', bn: 'ফাইলের কপির ফোল্ডার' },
          { en: 'A tiny movable label holding one commit hash', bn: 'একটি কমিট হ্যাশধারী সরণীয় লেবেল' },
          { en: 'A separate clone of the repository', bn: 'রিপোজিটরির আলাদা ক্লোন' },
        ],
        answer: 1,
        hint: { en: '41 bytes on disk…', bn: 'ডিস্কে ৪১ বাইট…' },
        explanation: { en: 'Branches are pointers. Creating one is instant because nothing is copied.', bn: 'ব্রাঞ্চ হলো পয়েন্টার। কিছু কপি হয় না বলে বানাতে মুহূর্ত লাগে।' },
      },
      {
        id: 'git-basics-q4',
        kind: 'mcq',
        topic: 'debugging',
        question: { en: 'You reset away a commit and it vanished from git log. First tool to reach for?', bn: 'রিসেটে কমিট git log থেকে উধাও। আগে কোন টুল?' },
        options: [
          { en: 'git reflog', bn: 'git reflog' },
          { en: 'git push --force', bn: 'git push --force' },
          { en: 'Re-clone the repository', bn: 'রিপোজিটরি আবার ক্লোন' },
        ],
        answer: 0,
        hint: { en: 'HEAD keeps a diary.', bn: 'HEAD ডায়েরি লেখে।' },
        explanation: { en: 'reflog lists everywhere HEAD ever pointed — lost commits are almost always there until garbage collection.', bn: 'reflog-এ আছে HEAD কোথায় কোথায় ছিল — garbage collection-এর আগ পর্যন্ত হারানো কমিট প্রায় সবসময়ই সেখানে থাকে।' },
      },
    ],
  },
  next: { slug: 'git-branching', title: { en: 'Branches & Merging: Parallel Universes', bn: 'ব্রাঞ্চ ও মার্জ: সমান্তরাল জগত' } },
};
