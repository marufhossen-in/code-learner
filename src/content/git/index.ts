import type { Hub } from '../../lib/types';
import { gitBasicsLesson } from './lessons/git-basics';
import { gitBranchingLesson } from './lessons/git-branching';
import { snapshotArchiveLesson } from './lessons/the-snapshot-archive';
import { branchAtelierLesson } from './lessons/the-branch-atelier';
import { conflictCourtLesson } from './lessons/the-conflict-court';
import { remoteTidesLesson } from './lessons/the-remote-tides';
import { historyAtelierLesson } from './lessons/the-history-atelier';
import { teamChronicleLesson } from './lessons/the-team-chronicle';
import { grandTimelineLesson } from './lessons/the-grand-timeline';

export const gitHub: Hub = {
  slug: 'git',
  name: 'Git',
  icon: '🌿',
  tagline: {
    en: 'The time machine every developer secretly drives: snapshots, branches, history.',
    bn: 'প্রতিটি ডেভেলপারের গোপন টাইম মেশিন: স্ন্যাপশট, ব্রাঞ্চ, ইতিহাস।',
  },
  about: {
    en: 'Git is not a save button and not a backup service — it is a graph database of snapshots with movable labels, plus a syncing protocol between separate stores. This hub teaches the four-zone mental model (working → staging → local → remote), then the two master facts of branching (branches are labels; merges are two-parent commits), then command fluency, conflict resolution and team workflows.',
    bn: 'Git সেভ বাটন নয়, ব্যাকআপ সার্ভিসও নয় — এটি সরণীয় লেবেলযুক্ত স্ন্যাপশটের গ্রাফ ডেটাবেস, সাথে আলাদা ভাণ্ডারের মধ্যে সিঙ্কিং প্রোটোকল। এই হাবে শেখানো হয় চার-জোন মানসিক মডেল (ওয়ার্কিং → স্টেজিং → লোকাল → রিমোট), তারপর ব্রাঞ্চিংয়ের দুই মূল সত্য (ব্রাঞ্চ হলো লেবেল; মার্জ হলো দুই-প্যারেন্ট কমিট), তারপর কমান্ড- দখল, কনফ্লিক্ট মিমাংসা ও দলগত কর্মপ্রবাহ।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — The four zones', bn: 'ধাপ ১ — চার জোন' },
      items: [
        { en: 'Working → Staging → Local → Remote (lesson 1)', bn: 'ওয়ার্কিং → স্টেজিং → লোকাল → রিমোট (লেসন ১)' },
        { en: 'init, add, commit, status, log', bn: 'init, add, commit, status, log' },
        { en: 'Commits as snapshots + parents', bn: 'স্ন্যাপশট + প্যারেন্ট হিসেবে কমিট' },
      ],
    },
    {
      title: { en: 'Stage 2 — Branching', bn: 'ধাপ ২ — ব্রাঞ্চিং' },
      items: [
        { en: 'Branches as movable labels (lesson 2)', bn: 'সরণীয় লেবেল হিসেবে ব্রাঞ্চ (লেসন ২)' },
        { en: 'fast-forward vs true merge', bn: 'ফাস্ট-ফরওয়ার্ড বনাম প্রকৃত মার্জ' },
        { en: 'Conflicts: reading and resolving markers', bn: 'কনফ্লিক্ট: মার্কার পড়া ও মিমাংসা' },
      ],
    },
    {
      title: { en: 'Stage 3 — Remotes & teams', bn: 'ধাপ ৩ — রিমোট ও দল' },
      items: [
        { en: 'clone, push, pull, fetch; tracking branches', bn: 'clone, push, pull, fetch; ট্র্যাকিং ব্রাঞ্চ' },
        { en: 'Pull requests & code review etiquette', bn: 'পুল রিকোয়েস্ট ও কোড রিভিউ শিষ্টাচার' },
        { en: 'Protected branches, force-push hygiene', bn: 'প্রোটেক্টেড ব্রাঞ্চ, force-push শৃঙ্খলা' },
      ],
    },
    {
      title: { en: 'Stage 4 — Mastery', bn: 'ধাপ ৪ — দক্ষতা' },
      items: [
        { en: 'reflog rescue missions', bn: 'reflog উদ্ধার-অভিযান' },
        { en: 'rebase (private only!), cherry-pick, revert', bn: 'rebase (শুধু ব্যক্তিগত!), cherry-pick, revert' },
        { en: 'Hooks, aliases, .gitignore patterns', bn: 'হুক, অ্যালিয়াস, .gitignore প্যাটার্ন' },
      ],
    },
  ],
  lessons: [gitBasicsLesson, gitBranchingLesson, snapshotArchiveLesson, branchAtelierLesson, conflictCourtLesson, remoteTidesLesson, historyAtelierLesson, grandTimelineLesson, teamChronicleLesson],
  reference: [
    {
      group: 'Local basics',
      methods: [
        {
          name: 'git init',
          signature: 'git init',
          params: { en: 'No parameters.', bn: 'কোনো প্যারামিটার নেই।' },
          returns: { en: 'Creates the hidden .git store in the current folder.', bn: 'বর্তমান ফোল্ডারে লুকানো .git ভাণ্ডার বানায়।' },
          example: 'mkdir myapp && cd myapp && git init',
          mistake: { en: 'Running it inside your HOME folder and versioning your whole disk.', bn: 'HOME ফোল্ডারে চালিয়ে পুরো ডিস্ক ভার্সন করা।' },
          related: ['git status', 'git add'],
        },
        {
          name: 'git add',
          signature: 'git add <pathspec> | -p',
          params: { en: 'Which files (or -p patches) move to staging.', bn: 'কোন ফাইল (বা -p হিসাবখণ্ড) স্টেজিং-এ যাবে।' },
          returns: { en: 'Snapshots staged content for the next commit.', bn: 'পরের কমিটের জন্য স্টেজড স্ন্যাপশট।' },
          example: 'git add src/login.ts\ngit add -p   # interactively stage hunks',
          mistake: { en: 'git add . blindly staging secrets, build output and node_modules.', bn: 'git add . দিয়ে অন্ধভাবে সিক্রেট, বিল্ড আউটপুট ও node_modules স্টেজ করা।' },
          related: ['git commit', 'git status'],
        },
        {
          name: 'git commit',
          signature: 'git commit -m "<message>"',
          params: { en: 'A message describing WHY, not what (the diff says what).', bn: 'কেন এই কমিট, সে বার্তা (কী বদলেছে তা diff বলে)।' },
          returns: { en: 'A permanent node in your branch history.', bn: 'ব্রাঞ্চ ইতিহাসে স্থায়ী নোড।' },
          example: 'git commit -m "fix: stop double-charging saved cards"',
          mistake: { en: 'Messages like "update", "fix stuff", "asdf".', bn: '"update", "fix stuff", "asdf" জাতীয় বার্তা।' },
          related: ['git add', 'git log'],
        },
        {
          name: 'git status',
          signature: 'git status [-sb]',
          params: { en: '-s short, -b shows branch tracking.', bn: '-s সংক্ষিপ্ত, -b ব্রাঞ্চ ট্র্যাকিং দেখায়।' },
          returns: { en: 'The zone report: what is where.', bn: 'জোন রিপোর্ট: কী কোথায়।' },
          example: 'git status   # প্রতিটি সেশনের প্রথম কমান্ড',
          related: ['git add', 'git diff'],
        },
      ],
    },
    {
      group: 'Branching',
      methods: [
        {
          name: 'git switch',
          signature: 'git switch [-c] <branch>',
          params: { en: '-c creates and moves; no flag moves only.', bn: '-c বানিয়ে যায়; পতাকা ছাড়া শুধু সরে যায়।' },
          returns: { en: 'Moves HEAD; rewrites your working files to that snapshot.', bn: 'HEAD সরায়; ওয়ার্কিং ফাইল সেই স্ন্যাপশটে বদলে দেয়।' },
          example: 'git switch -c feature/search',
          mistake: { en: 'Switching with uncommitted changes, then blaming git for "lost" work.', bn: 'অকমিটেড পরিবর্তন নিয়ে সুইচ করে git-কে "কাজ হারানোর" দোষ দেওয়া।' },
          related: ['git merge', 'git commit'],
        },
        {
          name: 'git merge',
          signature: 'git merge <branch> | --abort',
          params: { en: 'The branch to pull into the CURRENT one.', bn: 'বর্তমান ব্রাঞ্চে টেনে আনার ব্রাঞ্চ।' },
          returns: { en: 'Fast-forward, a two-parent commit, or a conflict pause.', bn: 'ফাস্ট-ফরওয়ার্ড, দুই-প্যারেন্ট কমিট, বা কনফ্লিক্ট বিরতি।' },
          example: 'git switch main && git merge feature/search',
          mistake: { en: 'Sealing a merge with <<<<<<< markers still inside.', bn: 'ভেতরে <<<<<<< মার্কার থাকতেই মার্জ সিল করা।' },
          related: ['git switch', 'git status'],
        },
        {
          name: 'git log',
          signature: 'git log --oneline --graph --all',
          params: { en: '--graph draws the DAG; --all shows every label.', bn: '--graph DAG আঁকে; --all সব লেবেল দেখায়।' },
          returns: { en: 'History as you choose to see it.', bn: 'চাওয়ামতো ইতিহাস।' },
          example: 'git log --oneline --graph --all -10',
          related: ['git reflog', 'git merge'],
        },
        {
          name: 'git reflog',
          signature: 'git reflog [show]',
          params: { en: 'No parameters needed for rescue work.', bn: 'উদ্ধার কাজে প্যারামিটার লাগে না।' },
          returns: { en: 'Everywhere HEAD has ever been — the undo log.', bn: 'HEAD কোথায় কোথায় ছিল — আনডু লগ।' },
          example: 'git reflog -12   # find the "lost" hash, then branch rescue it',
          related: ['git reset', 'git log'],
        },
      ],
    },
    {
      group: 'Remotes',
      methods: [
        {
          name: 'git push',
          signature: 'git push <remote> <branch>',
          params: { en: 'Which local history travels to which remote.', bn: 'কোন লোকাল ইতিহাস কোন রিমোটে যাবে।' },
          returns: { en: 'Remote branch label moved to your tip (if fast-forwardable).', bn: 'রিমোট ব্রাঞ্চ লেবেল আপনার টিপে (ফাস্ট-ফরওয়ার্ডযোগ্য হলে)।' },
          example: 'git push origin main\ngit push -u origin feature/search',
          mistake: { en: 'Force-pushing shared branches — rewriting history others pulled.', bn: 'ভাগ করা ব্রাঞ্চে force-push — অন্যের টানা ইতিহাস পুনর্লিখন।' },
          related: ['git pull', 'git commit'],
        },
        {
          name: 'git pull',
          signature: 'git pull = git fetch + git merge',
          params: { en: 'Remote + branch; two operations in one.', bn: 'রিমোট + ব্রাঞ্চ; একে দুই অপারেশন।' },
          returns: { en: 'Downloads remote commits and merges them into your branch.', bn: 'রিমোট কমিট নামিয়ে আপনার ব্রাঞ্চে মার্জ করে।' },
          example: 'git pull origin main',
          mistake: { en: 'Pulling blindly on a dirty working tree — conflicts on uncommitted work.', bn: 'ময়লা ওয়ার্কিং ট্রিতে অন্ধ pull — অকমিটেড কাজে কনফ্লিক্ট।' },
          related: ['git push', 'git merge'],
        },
        {
          name: 'git revert',
          signature: 'git revert <hash>',
          params: { en: 'The commit to UNDO.', bn: 'যে কমিট বাতিল করতে হবে।' },
          returns: { en: 'A NEW commit reversing that change — history untouched.', bn: 'সেই পরিবর্তন উল্টে দেওয়া নতুন কমিট — ইতিহাস অক্ষত।' },
          example: 'git revert HEAD   # push-করা ভুলের নিরাপদ আনডু',
          related: ['git reset', 'git push'],
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Solo Journal App with Real Discipline', bn: 'সঠিক শৃঙ্খলায় একার জার্নাল অ্যাপ' },
      diff: 'beginner',
      desc: {
        en: 'Any tiny app; the deliverable is a CLEAN git history: one feature per branch, meaningful messages, no junk files.',
        bn: 'যেকোনো ছোট অ্যাপ; ডেলিভারেবল হলো পরিষ্কার git ইতিহাস: ফিচারপ্রতি ব্রাঞ্চ, অর্থবহ বার্তা, আবর্জনা ফাইল নেই।',
      },
    },
    {
      title: { en: 'Pair-Programming Conflict Drill', bn: 'জোড়া কনফ্লিক্ট অনুশীলন' },
      diff: 'intermediate',
      desc: {
        en: 'You and a partner DELIBERATELY edit the same lines on two branches, then resolve the conflicts together.',
        bn: 'আপনি আর সহকর্মী ইচ্ছাকৃতভাবে দুই ব্রাঞ্চে একই লাইন বদলান, তারপর একসাথে কনফ্লিক্ট মিমাংসা করুন।',
      },
    },
    {
      title: { en: 'Team Workflow Simulation', bn: 'দলগত কর্মপ্রবাহ অনুকরণ' },
      diff: 'advanced',
      desc: {
        en: 'GitHub Flow end to end: protected main, feature branches, PR template, reviews, squashed merges, release tags.',
        bn: 'শুরু থেকে শেষ GitHub Flow: প্রোটেক্টেড main, ফিচার ব্রাঞ্চ, PR টেমপ্লেট, রিভিউ, স্কোয়াশ মার্জ, রিলিজ ট্যাগ।',
      },
    },
  ],
  bestPractices: [
    { en: 'Run git status before anything else, every session.', bn: 'প্রতিটি সেশনে অন্য সবার আগে git status চালান।' },
    { en: 'Commit early, often, and small — a commit is cheaper than a thought.', bn: 'তাড়াতাড়ি, ঘন ঘন, ছোট ছোট কমিট — চিন্তার চেয়ে কমিট সস্তা।' },
    { en: 'Branch names say intent: feature/search, fix/double-charge, not "test1".', bn: 'ব্রাঞ্চ নামে উদ্দেশ্য: feature/search, fix/double-charge — "test1" নয়।' },
    { en: 'Never force-push shared branches; use git revert in public.', bn: 'ভাগ করা ব্রাঞ্চে কখনো force-push নয়; প্রকাশ্যে git revert।' },
    { en: 'A good .gitignore on day one saves you from committing node_modules and .env.', bn: 'প্রথম দিনের ভালো .gitignore node_modules ও .env কমিট থেকে রক্ষা করে।' },
    { en: 'Write messages for the stranger debugging at 2 AM: WHY, not WHAT.', bn: 'রাত ২টায় ডিবাগ করা অচেনা মানুষের জন্য বার্তা লিখুন: কী নয়, কেন।' },
  ],
  interview: [
    {
      q: { en: 'Explain the staging area in one breath.', bn: 'এক নিঃশ্বাসে স্টেজিং এরিয়া ব্যাখ্যা করুন।' },
      a: {
        en: 'The composition step between editing and history: git add snapshots chosen changes there, and commit seals exactly that — nothing else.',
        bn: 'সম্পাদনা আর ইতিহাসের মাঝের সাজানো ধাপ: git add সেখানে নির্বাচিত পরিবর্তনের স্ন্যাপশট রাখে, commit হুবহু তাই সিল করে — বেশি-কম কিছু নয়।',
      },
    },
    {
      q: { en: 'merge vs rebase?', bn: 'merge বনাম rebase?' },
      a: {
        en: 'Merge preserves true history with a two-parent commit; rebase rewrites your branch onto a new base for a linear story. Rebase private branches, merge shared ones.',
        bn: 'মার্জ দুই-প্যারেন্ট কমিটে প্রকৃত ইতিহাস রাখে; রিবেস সরল গল্পের জন্য আপনার ব্রাঞ্চ নতুন ভিত্তিতে পুনর্লেখে। ব্যক্তিগতে রিবেস, ভাগ করায় মার্জ।',
      },
    },
    {
      q: { en: 'A commit disappeared after reset --hard. Recover?', bn: 'reset --hard-এর পর কমিট উধাও। উদ্ধার?' },
      a: {
        en: 'git reflog lists every HEAD position; find the hash, git branch rescue <hash> — objects persist until garbage collection, roughly 30–90 days.',
        bn: 'git reflog-এ HEAD-এর প্রতিটি অবস্থান; হ্যাশ খুঁজে git branch rescue <hash> — অবজেক্ট থাকে garbage collection পর্যন্ত, প্রায় ৩০–৯০ দিন।',
      },
    },
    {
      q: { en: 'What actually causes a merge conflict?', bn: 'মার্জ কনফ্লিক্ট আসলে কেন হয়?' },
      a: {
        en: 'Both sides changed the same lines since the fork point, so git cannot decide and asks a human. It is a question, not a failure.',
        bn: 'কাঁটা-বিন্দুর পর দুই পক্ষই একই লাইন বদলেছে, তাই git সিদ্ধান্ত নিতে না পেরে মানুষকে জিজ্ঞেস করে। এটি প্রশ্ন, ব্যর্থতা নয়।',
      },
    },
  ],
  realWorld: [
    { en: 'Every CI pipeline runs on commits — uncommitted code does not exist to the factory.', bn: 'প্রতিটি CI পাইপলাইন কমিটে চলে — কারখানার কাছে অকমিটেড কোড অস্তিত্বহীন।' },
    { en: 'git bisect does binary search over commits to find the exact introduction of a bug — snapshots pay off.', bn: 'git bisect বাগের ঠিক জন্ম-কমিট খুঁজতে কমিটে বাইনারি সার্চ চালায় — স্ন্যাপশটের সুবিধা।' },
    { en: 'Open source: your PR is a curated commit story that strangers read before they read your code.', bn: 'ওপেন সোর্স: আপনার PR নির্বাচিত কমিট-গল্প — অচেনারা কোডের আগে তাই পড়ে।' },
    { en: 'Audits and legal discovery literally walk git history; your messages are documents.', bn: 'অডিট আর আইনি তদন্ত আক্ষরিকভাবে git ইতিহাস পেরিয়ে যায়; আপনার বার্তা একটি দলিল।' },
  ],
};
