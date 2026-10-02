import type { Lesson } from '../../../lib/types';

export const teamChronicleLesson: Lesson = {
  slug: 'the-team-chronicle',
  tech: 'git',
  title: {
    en: 'Git Team Workflows: Gitflow, Trunk-Based, Hooks & LFS',
    bn: 'গিট টিম ওয়ার্কফ্লো: Gitflow, ট্রাঙ্ক-বেসড, হুকস ও LFS'
  },
  summary: {
    en: 'Master enterprise Git collaboration across 10 structured topics. Understand Gitflow vs Trunk-Based Development, advanced .gitignore rules, and cross-platform .gitattributes line endings. Explore Git Large File Storage (LFS), cryptographic GPG/SSH commit signing, Git Hooks, Husky automation, submodules, GitHub Actions CI/CD pipelines, and Conventional Commits review standards.',
    bn: '১০টি সুসংগঠিত পয়েন্টে করপোরেট গিট কোলাবোরেশন আয়ত্ত করুন। Gitflow বনাম ট্রাঙ্ক-বেসড ডেভেলপমেন্ট, উন্নত .gitignore নিয়ম এবং ক্রস-প্ল্যাটফর্ম .gitattributes লাইন এন্ডিং বুঝুন। গিট লার্জ ফাইল স্টোরেজ (LFS), ক্রিপ্টোগ্রাফিক GPG/SSH কমিট সাইনিং, গিট হুকস, Husky অটোমেশন, সাবমডিউল, GitHub Actions CI/CD পাইপলাইন এবং কনভেনশনাল কমিট কোড রিভিউ স্ট্যান্ডার্ড আবিষ্কার করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Enterprise Branching Models: Gitflow vs Trunk-Based', bn: '১. করপোরেট ব্রাঞ্চিং মডেল: Gitflow বনাম ট্রাঙ্ক-বেসড' } },
    {
      type: 'para',
      text: {
        en: 'Enterprise engineering teams standardize on one of two major branching strategies: 1) Gitflow relies on multiple long-lived branches (main, develop, release, hotfix) suited for scheduled, versioned release cycles. 2) Trunk-Based Development has developers merge short-lived branches into main multiple times daily, pairing with continuous delivery and feature flags.',
        bn: 'করপোরেট ইঞ্জিনিয়ারিং টিম মূলত দুটি প্রধান ব্রাঞ্চিং পদ্ধতির যেকোনো একটি অনুসরণ করে: ১) Gitflow একাধিক দীর্ঘজীবী ব্রাঞ্চের (main, develop, release, hotfix) ওপর ভিত্তি করে কাজ করে। যা দীর্ঘমেয়াদী শিডিউলড রিলিজের জন্য উপযোগী; ২) Trunk-Based Development-এ ডেভেলপাররা দিনে কয়েকবার স্বল্পজীবী ফিচার ব্রাঞ্চ সরাসরি মেইনে মার্জ করেন। যা অবিচ্ছিন্ন ডেলিভারি (CD) এবং ফিচার ফ্ল্যাগের জন্য আদর্শ।'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'Enterprise Git Branching Models',
        bn: 'করপোরেট গিট ব্রাঞ্চিং মডেল'
      },
      caption: {
        en: 'Gitflow schedules multi-branch releases, while Trunk-Based development drives continuous daily delivery.',
        bn: 'Gitflow দীর্ঘমেয়াদী শিডিউলড রিলিজের জন্য উপযোগী, আর ট্রাঙ্ক-বেসড ডেভেলপমেন্ট প্রতিদিনের নিরবচ্ছিন্ন ডেলিভারি নিশ্চিত করে।'
      },
      svg: `<svg viewBox="0 0 680 150" width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
  <rect width="680" height="150" rx="10" fill="#0f172a"/>
  <!-- Gitflow Model -->
  <text x="30" y="35" fill="#c084fc" font-size="12" font-weight="bold" font-family="monospace">Gitflow: Complex Multi-Branch Hierarchy</text>
  <line x1="30" y1="55" x2="250" y2="55" stroke="#10b981" stroke-width="2"/>
  <text x="260" y="58" fill="#34d399" font-size="10" font-family="monospace">main</text>
  <line x1="30" y1="75" x2="250" y2="75" stroke="#38bdf8" stroke-width="2"/>
  <text x="260" y="78" fill="#38bdf8" font-size="10" font-family="monospace">develop</text>
  <path d="M 60 75 L 85 95 L 140 95 L 165 75" fill="none" stroke="#f59e0b" stroke-width="1.5"/>
  <text x="180" y="98" fill="#fbbf24" font-size="9" font-family="monospace">feat/*</text>

  <!-- Trunk-Based Model -->
  <text x="360" y="35" fill="#38bdf8" font-size="12" font-weight="bold" font-family="monospace">Trunk-Based: Fast High-Frequency Merges</text>
  <line x1="360" y1="65" x2="630" y2="65" stroke="#10b981" stroke-width="2.5"/>
  <text x="640" y="69" fill="#34d399" font-size="11" font-weight="bold" font-family="monospace">trunk (main)</text>
  <path d="M 390 65 L 415 95 L 455 95 L 475 65" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="430" y="108" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="monospace">PR &lt; 24h</text>
  <path d="M 500 65 L 525 95 L 565 95 L 585 65" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
  <text x="545" y="108" text-anchor="middle" fill="#38bdf8" font-size="9" font-family="monospace">PR &lt; 24h</text>
</svg>`
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Trunk-Based Development cycle:
# 1. Create short-lived branch (lifetime < 24 hours):
git switch -c feat/tax-calculator

# 2. Make atomic commits and push:
git commit -m "feat(tax): calculate local VAT"
git push -u origin feat/tax-calculator

# 3. Merge to main via reviewed PR within the same day:
# Result: Eliminates merge hell through high-frequency continuous integration`,
      caption: {
        en: 'Trunk-based development relies on short-lived branches merged within hours or days.',
        bn: 'ট্রাঙ্ক-বেসড ডেভেলপমেন্ট দ্রুত কয়েক ঘণ্টার মধ্যে ছোট ছোট ব্রাঞ্চ মেইনে মার্জ করে কাজ এগিয়ে নেয়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. File Exclusion Engineering: Advanced .gitignore and Untracking', bn: '২. ফাইল বর্জন কৌশল: উন্নত .gitignore নিয়ম ও আনট্র্যাকিং' } },
    {
      type: 'para',
      text: {
        en: 'A repository’s .gitignore file prevents private secrets, build artifacts, and dependency directories (node_modules, .env, dist/) from being tracked. If a sensitive file was accidentally committed previously, adding it to .gitignore does not untrack it; you must run git rm --cached <file> to remove it from the index without deleting it locally.',
        bn: 'রিপোজিটরির .gitignore ফাইল গোপন পাসওয়ার্ড, বিল্ড ফাইল এবং ডিপেন্ডেন্সি ফোল্ডারগুলোকে (node_modules, .env, dist/) ট্র্যাকিং থেকে দূরে রাখে। কোনো ফাইল আগে ভুল করে কমিট হয়ে থাকলে কেবল .gitignore-এ লিখলে কাজ হয় না; তখন git rm --cached <file> কমান্ড দিয়ে ফাইলটি ডিস্কে রেখে শুধু গিটের ইনডেক্স থেকে মুছে ফেলতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Sample production .gitignore:
# node_modules/
# .env*
# *.log
# dist/
# .DS_Store

# Untrack previously committed secrets without deleting them from your machine:
git rm --cached .env.local

# Output:
# rm '.env.local'
# Now stage the change and commit:
git commit -m "chore: stop tracking local secrets"`,
      caption: {
        en: 'git rm --cached removes files from Git tracking while preserving disk copies.',
        bn: 'git rm --cached লোকাল ফাইল অক্ষত রেখে শুধুমাত্র গিটের নজরদারি থেকে ফাইল সরিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Cross-Platform Determinism: Line Endings & .gitattributes', bn: '৩. ক্রস-প্ল্যাটফর্ম সামঞ্জস্য: লাইন এন্ডিং ও .gitattributes' } },
    {
      type: 'para',
      text: {
        en: 'Windows uses CRLF (\\r\\n) line breaks while Linux and macOS use LF (\\n). Without configuration, a Windows developer saving a file can cause Git to detect every single line as changed! Defining a root .gitattributes file enforces automatic LF normalization across all machines.',
        bn: 'উইন্ডোজ অপারেটিং সিস্টেম লাইনের শেষে CRLF (\\r\\n) ব্যবহার করে, আর লিনাক্স ও ম্যাক ব্যবহার করে LF (\\n)। কোনো নিয়ম ঠিক করা না থাকলে একজন উইন্ডোজ ব্যবহারকারী ফাইল সেভ করলেই গিটের কাছে পুরো ফাইলের প্রতিটি লাইন পরিবর্তিত মনে হতে পারে! রিপোজিটরির রুটে .gitattributes ফাইল রাখলে সব মেশিনে স্বয়ংক্রিয়ভাবে LF সমতা বজায় থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard root .gitattributes configuration:
# Auto-detect text files and normalize line endings to LF on commit:
# * text=auto eol=lf
# 
# Explicit binary declarations:
# *.png binary
# *.woff2 binary

# Re-normalize existing repository files after adding .gitattributes:
git add --renormalize .
git commit -m "chore: normalize line endings across repo"`,
      caption: {
        en: '.gitattributes enforces deterministic LF line endings across heterogeneous OS environments.',
        bn: '.gitattributes বিভিন্ন অপারেটিং সিস্টেমের মধ্যে লাইন এন্ডিংয়ের ঝামেলা দূর করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Large Binary Asset Management: Git Large File Storage (LFS)', bn: '৪. বড় বাইনারি ফাইল ব্যবস্থাপনা: Git Large File Storage (LFS)' } },
    {
      type: 'para',
      text: {
        en: 'Git is designed for text deltas. Storing massive 500MB video models or Photoshop PSDs bloats every developer clone forever. Git LFS replaces heavy binary files inside your repository with lightweight 130-byte text pointers, storing the actual binary blobs in cloud object storage.',
        bn: 'গিট মূলত টেক্সট ফাইলের পরিবর্তনের জন্য তৈরি। শত শত মেগাবাইটের ভিডিও বা ভারী ডিজাইন ফাইল সরাসরি গিটে রাখলে সবার ক্লোন স্ফীত ও ধীরগতির হয়ে পড়ে। Git LFS ভারী বাইনারি ফাইলের বদলে গিটের ভেতরে মাত্র ১৩০ বাইটের হালকা টেক্সট পয়েন্টার রাখে এবং আসল ভারী ফাইলগুলো ক্লাউড অবজেক্ট স্টোরেজে সংরক্ষণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Initialize Git LFS on local system:
git lfs install

# 2. Tell LFS to track design files and model weights:
git lfs track "*.psd"
git lfs track "models/*.bin"

# 3. Commit the tracking definitions:
git add .gitattributes
git commit -m "chore: configure git-lfs for heavy binaries"

# Pointer stored in Git:
# version https://git-lfs.github.com/spec/v1
# oid sha256:4d62e1...
# size 524288000`,
      caption: {
        en: 'Git LFS stores small pointers in the repository and streams large payloads on demand.',
        bn: 'Git LFS রিপোজিটরিতে হালকা পয়েন্টার রেখে প্রয়োজনমতো ভারী ফাইল ক্লাউড থেকে নামায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Cryptographic Verification: Signing Commits with GPG or SSH', bn: '৫. ক্রিপ্টোগ্রাফিক সত্যতা: GPG বা SSH দিয়ে কমিট সাইন করা' } },
    {
      type: 'para',
      text: {
        en: 'Because git config user.name and user.email can be easily spoofed by bad actors, enterprise security requires Cryptographic Commit Signing. Signing commits with GPG or SSH private keys attaches a digital cryptographic signature, earning the trusted "Verified" badge on GitHub.',
        bn: 'যে কেউ চাইলেই git config-এ অন্যের নাম বা ইমেইল জাল করে কোড পুশ করতে পারে। এই নিরাপত্তা ঝুঁকি এড়াতে করপোরেট প্রতিষ্ঠানগুলো ক্রিপ্টোগ্রাফিক কমিট সাইনিং বাধ্যতামূলক করে। GPG বা SSH প্রাইভেট কি দিয়ে কমিট সাইন করলে গিটের কোডে ডিজিটাল সিল বসে এবং GitHub-এ সম্মানজনক "Verified" ব্যাজ প্রদর্শিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Configure Git to use your existing SSH key for commit signing:
git config --global gpg.format ssh
git config --global user.signingkey ~/.ssh/id_ed25519.pub
git config --global commit.gpgsign true

# Commit signed cryptographically:
git commit -S -m "feat(security): implement mfa authentication"

# Verify signature locally:
git log --show-signature -n 1
# Output:
# Good "git" signature for dev@codeshikhon.com with ED25519 key SHA256:...
# Result: Mathematically unforgeable author identity verified!`,
      caption: {
        en: 'Signed commits prove authentic identity and prevent malicious commit spoofing.',
        bn: 'স্বাক্ষরিত কমিট লেখকের আসল পরিচয় প্রমাণ করে এবং পরিচয় জালিয়াতি চিরতরে বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Client-Side Quality Gates: Git Hooks Mechanics', bn: '৬. ক্লায়েন্ট-সাইড কোয়ালিটি গেট: গিট হুকসের কার্যপদ্ধতি' } },
    {
      type: 'para',
      text: {
        en: 'Git Hooks are executable custom scripts located inside .git/hooks/ triggered automatically by events. The pre-commit hook runs tests and linters before a commit is created (canceling the commit if tests fail); commit-msg validates that the message adheres to Conventional Commits format.',
        bn: 'Git Hooks হলো .git/hooks/ ফোল্ডারে থাকা কিছু স্ক্রিপ্ট যা গিটের বিভিন্ন ইভেন্টের সময় নিজে থেকেই চালু হয়। যেমন pre-commit হুক কোনো কমিট তৈরির ঠিক আগে স্বয়ংক্রিয়ভাবে কোড লিন্টিং ও টেস্ট চালায় (ভুল থাকলে কমিট আটকে দেয়); আর commit-msg হুক নিশ্চিত করে যেন মেসেজটি কনভেনশনাল ফরম্যাট মেনে লেখা হয়েছে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Creating a custom .git/hooks/pre-commit script:
cat << 'EOF' > .git/hooks/pre-commit
#!/bin/sh
echo "Running pre-commit code verification..."
npm run lint || { echo "❌ Lint failed! Commit aborted."; exit 1; }
echo "✅ Quality check passed."
exit 0
EOF
chmod +x .git/hooks/pre-commit

# When committing with syntax errors:
git commit -m "feat: broken code"
# Output:
# Running pre-commit code verification...
# ❌ Lint failed! Commit aborted.`,
      caption: {
        en: 'Client-side Git hooks enforce automated code style and tests before commits succeed.',
        bn: 'ক্লায়েন্ট-সাইড গিট হুক কোডে ভুল থাকলে কমিট আটকে দিয়ে ভুল কোড ঢোকা বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Team Hook Automation: Husky & lint-staged', bn: '৭. টিম হুক অটোমেশন: Husky ও lint-staged' } },
    {
      type: 'para',
      text: {
        en: 'Because the .git/hooks directory is not committed to remotes, teams use Husky to commit hooks directly to version control. Pairing Husky with lint-staged runs linters and formatters only on staged files, completing pre-commit checks in sub-second time.',
        bn: 'যেহেতু .git/hooks ফোল্ডারটি রিমোট সার্ভারে পুশ করা যায় না, তাই পুরো দলের জন্য নিয়ম কার্যকর করতে Husky ব্যবহার করা হয়। Husky-এর সাথে lint-staged ব্যবহার করলে পুরো প্রজেক্ট স্ক্যান না করে কেবল যেসব ফাইল স্টেজ করা হয়েছে সেগুলোর ওপর লিন্ট ও ফরম্যাট চলে, যা চোখের পলকে শেষ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# package.json lint-staged configuration:
# "lint-staged": {
#   "*.{ts,tsx}": ["eslint --fix", "prettier --write"]
# }

# Husky triggers lint-staged on git commit:
# Output:
# ✔ Preparing lint-staged...
# ✔ Running tasks for staged files...
#   ✔ eslint --fix
#   ✔ prettier --write
# ✔ Applying modifications...
# [feat/ui 4f12014] feat: implement responsive grid navigation`,
      caption: {
        en: 'lint-staged restricts verification to touched files for lightning-fast commits.',
        bn: 'lint-staged শুধুমাত্র পরিবর্তিত ফাইল পরীক্ষা করায় সময় বাঁচে এবং কাজ দ্রুত হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Multi-Repository Architecture: Git Submodules', bn: '৮. বহু-রিপোজিটরি স্থাপত্য: গিট সাবমডিউল' } },
    {
      type: 'para',
      text: {
        en: 'Git Submodules allow you to embed an external Git repository as a subdirectory inside your parent repository while keeping their commit histories completely independent. The parent project tracks the submodule not as loose files, but as a pointer to a specific commit SHA.',
        bn: 'গিট সাবমডিউলের মাধ্যমে একটি মূল রিপোজিটরির ভেতরে বাইরের অন্য একটি স্বাধীন গিট রিপোজিটরিকে সাব-ফোল্ডার হিসেবে যুক্ত রাখা যায়। মূল প্রজেক্ট বাইরের সেই কোডকে সাধারণ ফাইল হিসেবে নয়, বরং একটি নির্দিষ্ট কমিট হ্যাশের রেফারেন্স বা নির্দেশক হিসেবে ট্র্যাক করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Add shared library as a submodule:
git submodule add https://github.com/codeshikhon/shared-ui.git libs/ui

# Output:
# Cloning into 'libs/ui'...
# Changes to be committed:
#   new file:   .gitmodules
#   new file:   libs/ui

# 2. When cloning a project with submodules, initialize them:
git clone --recurse-submodules https://github.com/codeshikhon/platform.git

# (Or initialize manually inside existing clone):
# git submodule update --init --recursive`,
      caption: {
        en: 'Submodules embed external repositories pinned to specific release commits.',
        bn: 'সাবমডিউল বাইরের লাইব্রেরিকে মূল রিপোজিটরির ভেতর নির্দিষ্ট ভার্সনে পিন করে রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. CI/CD Pipeline Automation: GitHub Actions Integration', bn: '৯. সিআই/সিডি অটোমেশন: GitHub Actions পাইপলাইন' } },
    {
      type: 'para',
      text: {
        en: 'Collaborative teams rely on CI/CD (Continuous Integration / Continuous Deployment) to automatically validate Pull Requests. A GitHub Actions workflow runs unit tests, security vulnerability scans, and bundle size checks whenever a developer pushes a branch or opens a Pull Request.',
        bn: 'আধুনিক দলগুলোতে কোনো পুল রিকোয়েস্ট জমা পড়লে মানুষ পরীক্ষা করার আগেই স্বয়ংক্রিয় CI/CD পাইপলাইন চালু হয়ে যায়। GitHub Actions কোড পুশ হওয়ার সাথে সাথে টেস্ট চালায়, নিরাপত্তার ফাঁকফোকর খোঁজে এবং কোড সাইজ পরীক্ষা করে সবুজ বা লাল সংকেত দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# .github/workflows/ci.yml definition:
# name: CI Quality Gate
# on: [push, pull_request]
# jobs:
#   verify:
#     runs-on: ubuntu-latest
#     steps:
#       - uses: actions/checkout@v4
#       - uses: actions/setup-node@v4
#         with: { node-version: 20 }
#       - run: npm ci
#       - run: npm test
#       - run: npm run build

# Output on GitHub PR:
# All checks have passed (3 successful checks: Lint, Test, Build)
# Branch ready for code review and merge!`,
      caption: {
        en: 'CI workflows validate branch health before merging to protect production.',
        bn: 'সিআই পাইপলাইন মেইনে মার্জ করার আগে ব্রাঞ্চের ত্রুটিমুক্ত থাকা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Code Review Standards: Conventional Commits', bn: '১০. কোড রিভিউ মানদণ্ড: কনভেনশনাল কমিটস স্ট্যান্ডার্ড' } },
    {
      type: 'para',
      text: {
        en: 'High-performing teams standardize commit messages using Conventional Commits: type(scope): subject. Allowed types include feat (new feature), fix (bug fix), refactor (restructuring without feature change), chore (build/tooling), and docs (documentation). This enables automated SemVer versioning and changelog generation.',
        bn: 'উচ্চমানের টিমগুলোতে এলোমেলো মেসেজ না লিখে Conventional Commits ফরম্যাট (যেমন: type(scope): subject) মেনে চলা হয়। প্রচলিত টাইপগুলো হলো feat (নতুন ফিচার), fix (বাগ ফিক্স), refactor (ফাংশনালিটি না বদলে কোড সাজানো), chore (টুলিং বা কনফিগ) এবং docs (ডকুমেন্টেশন)। এর ফলে কম্পিউটার নিজে থেকেই নতুন ভার্সন ও চেঞ্জলগ তৈরি করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Production-grade Conventional Commits:
# feat(auth): support webauthn biometric passkeys
# fix(billing): prevent double-charge on idempotency collision
# docs(readme): add docker deployment instructions
# chore(deps): upgrade typescript to version 5.6

# Automatically generates semantic release notes:
# ## v2.4.0 (2026-09-26)
# ### Features
# * webauthn biometric passkeys (4f12014)
# ### Bug Fixes
# * prevent double-charge on idempotency collision (8a901b2)`,
      caption: {
        en: 'Conventional Commits standardize communication and automate semantic changelog generation.',
        bn: 'কনভেনশনাল কমিটস যোগাযোগের মান বাড়ায় এবং স্বয়ংক্রিয় চেঞ্জলগ তৈরি করে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'git-tea-ex1',
      kind: 'predict',
      topic: 'git: Untracking a file without deleting it',
      question: {
        en: 'Which Git command stops tracking a file from the repository index while keeping the physical file intact on disk?',
        bn: 'ডিস্কের ফাইল মুছে না ফেলে কেবল গিটের নজরদারি বা ইনডেক্স থেকে বাদ দিতে কোন কমান্ডটি দেওয়া হয়?'
      },
      code: `/* Git untrack command */
/* git rm _______ <filename> */`,
      answer: '--cached',
      accept: ['--cached', '-r --cached', '--cached flag'],
      hint: {
        en: 'It targets the cached index.',
        bn: 'এটি ক্যাশড ইনডেক্সকে টার্গেট করে।'
      },
      explanation: {
        en: 'git rm --cached removes files from the staging index so they are no longer tracked by Git, while preserving the actual file on your local filesystem.',
        bn: 'git rm --cached ফাইলটিকে স্টেজিং ইনডেক্স থেকে মুছে দেয় যাতে গিট আর এটিকে ট্র্যাক না করে, তবে আপনার লোকাল হার্ডড্রাইভে ফাইলটি বহাল থাকে।'
      }
    },
    {
      id: 'git-tea-ex2',
      kind: 'mcq',
      topic: 'git: Git LFS purpose',
      question: {
        en: 'What problem does Git LFS (Large File Storage) solve in large engineering repositories?',
        bn: 'বড় ইঞ্জিনিয়ারিং প্রজেক্টে Git LFS মূলত কোন সমস্যার সমাধান করে?'
      },
      options: [
        { en: 'It keeps repositories lightweight by replacing huge binary assets with tiny text pointers, storing the actual blobs on cloud storage', bn: 'ভারী বাইনারি ফাইলের বদলে হালকা টেক্সট পয়েন্টার রেখে এবং আসল ফাইল ক্লাউডে জমা করে রিপোজিটরিকে স্ফীত হওয়া থেকে বাঁচায়' },
        { en: 'It compiles C++ code faster', bn: 'C++ দ্রুত কম্পাইল করে' },
        { en: 'It generates free SSL certificates', bn: 'ফ্রি SSL সার্টিফিকেট দেয়' },
        { en: 'It bypasses merge conflicts', bn: 'মার্জ কনফ্লিক্ট এড়ায়' }
      ],
      answer: 0,
      hint: {
        en: 'It stores pointers in git and blobs in storage.',
        bn: 'এটি গিটে পয়েন্টার রাখে আর আসল ডেটা ক্লাউডে রাখে।'
      },
      explanation: {
        en: 'Git LFS prevents repository bloat by versioning lightweight text pointers in Git while offloading the multi-gigabyte binary assets to dedicated object storage.',
        bn: 'Git LFS বড় বড় বাইনারি ফাইলের বদলে ছোট পয়েন্টার ব্যবহার করে, যার ফলে গিট রিপোজিটরির সাইজ অস্বাভাবিক বড় হয় না এবং দ্রুত ক্লোন করা যায়।'
      }
    },
    {
      id: 'git-tea-ex3',
      kind: 'mcq',
      topic: 'git: pre-commit hook execution point',
      question: {
        en: 'At what exact moment does the Git pre-commit hook execute?',
        bn: 'গিট pre-commit হুক ঠিক কোন মুহূর্তে স্বয়ংক্রিয়ভাবে রান করে?'
      },
      options: [
        { en: 'Right after running git commit, before the commit object is recorded to history (allowing it to abort the commit if tests fail)', bn: 'git commit লেখার ঠিক পরপরই, কমিট অবজেক্টটি তৈরি হওয়ার ঠিক আগে (যাতে টেস্ট ফেইল করলে কমিটটি আটকে দেওয়া যায়)' },
        { en: 'After pushing to GitHub', bn: 'GitHub-এ পুশ করার পর' },
        { en: 'When deleting a branch', bn: 'ব্রাঞ্চ মুছে ফেলার সময়' },
        { en: 'When downloading Git', bn: 'গিট ডাউনলোডের সময়' }
      ],
      answer: 0,
      hint: {
        en: 'Before the commit is finalized.',
        bn: 'কমিট চূড়ান্ত হওয়ার ঠিক আগে।'
      },
      explanation: {
        en: 'The pre-commit hook runs before a commit is created. If the hook script exits with a non-zero exit code, Git aborts the commit immediately.',
        bn: 'pre-commit হুক কমিট অবজেক্ট তৈরি হওয়ার আগেই চলে। কোনো ত্রুটির কারণে স্ক্রিপ্ট নন-জিরো এক্সিট কোড দিলে গিট সেই কমিট সাথে সাথে বাতিল করে দেয়।'
      }
    }
  ],
  quiz: {
    id: 'git-team-quiz',
    title: { en: 'Git Team Workflows & Collaboration Quiz', bn: 'গিট টিম ওয়ার্কফ্লো ও কোলাবোরেশন কুইজ' },
    questions: [
      {
        id: 'tq1',
        kind: 'mcq',
        topic: 'git: Trunk-based development principle',
        question: {
          en: 'What is a core characteristic of Trunk-Based Development compared to Gitflow?',
          bn: 'Gitflow-এর তুলনায় Trunk-Based Development-এর প্রধান বৈশিষ্ট্য কোনটি?'
        },
        options: [
          { en: 'Developers work on short-lived branches and merge into main frequently (often multiple times a day)', bn: 'ডেভেলপাররা অতি স্বল্পজীবী ব্রাঞ্চে কাজ করেন এবং দিনে একাধিকবার সরাসরি মেইনে মার্জ করেন' },
          { en: 'Branches must live for 6 months before merging', bn: 'মার্জ করার আগে ব্রাঞ্চ ৬ মাস টিকিয়ে রাখতে হয়' },
          { en: 'No one is allowed to write tests', bn: 'কাউকে টেস্ট লিখতে দেওয়া হয় না' },
          { en: 'Pull requests are completely banned', bn: 'পুল রিকোয়েস্ট সম্পূর্ণ নিষিদ্ধ' }
        ],
        answer: 0,
        hint: {
          en: 'Short-lived branches merged daily to trunk.',
          bn: 'স্বল্পজীবী ব্রাঞ্চ প্রতিদিন ট্রাঙ্কে মার্জ করা হয়।'
        },
        explanation: {
          en: 'Trunk-based development avoids "merge hell" by keeping branches very short-lived and merging frequently into the main trunk branch.',
          bn: 'ট্রাঙ্ক-বেসড ডেভেলপমেন্ট ব্রাঞ্চগুলোর আয়ু খুব ছোট রাখে এবং প্রতিনিয়ত মেইনে মার্জ করায় বড় ধরনের জটিল কনফ্লিক্ট তৈরির সুযোগ থাকে না।'
        }
      },
      {
        id: 'tq2',
        kind: 'mcq',
        topic: 'git: Cloning with submodules',
        question: {
          en: 'Which flag should be added to git clone to automatically clone all nested submodules within a repository?',
          bn: 'কোনো প্রজেক্ট ক্লোন করার সময় তার ভেতরের সমস্ত সাবমডিউলও একসাথে নামাতে কোন ফ্ল্যাগটি ব্যবহার করা হয়?'
        },
        options: [
          { en: '--recurse-submodules', bn: '--recurse-submodules' },
          { en: '--all-files', bn: '--all-files' },
          { en: '--deep-copy', bn: '--deep-copy' },
          { en: '--fetch-everything', bn: '--fetch-everything' }
        ],
        answer: 0,
        hint: {
          en: 'It recurses into submodules.',
          bn: 'এটি সাবমডিউলগুলোতে রিকার্সিভলি প্রবেশ করে।'
        },
        explanation: {
          en: 'Running git clone --recurse-submodules initializes and clones every nested submodule repository alongside the parent codebase in a single command.',
          bn: 'git clone --recurse-submodules দিলে এক কমান্ডেই মূল প্রজেক্টের সাথে সাথে তার ভেতরের সমস্ত সাবমডিউল ডাউনলোড ও প্রস্তুত হয়ে যায়।'
        }
      },
      {
        id: 'tq3',
        kind: 'mcq',
        topic: 'git: Git LFS binary management',
        question: {
          en: 'What problem does Git LFS (Large File Storage) solve in enterprise repositories?',
          bn: 'করপোরেট রিপোজিটরিতে Git LFS (Large File Storage) কোন বাস্তব সমস্যা সমাধান করে?'
        },
        options: [
          { en: 'It replaces large binary assets with tiny text pointer files, storing actual heavy blobs on a dedicated remote server', bn: 'এটি বিশাল আকারের বাইনারি ফাইলগুলোকে ক্ষুদ্র টেক্সট পয়েন্টার দিয়ে প্রতিস্থাপন করে এবং আসল ভারী ফাইলগুলোকে একটি আলাদা সার্ভারে রাখে' },
          { en: 'It increases Git commit speed by 100 times', bn: 'কমিটের গতি ১০০ গুণ বাড়িয়ে দেয়' },
          { en: 'It removes git status warnings', bn: 'git status ওয়ার্নিং বন্ধ করে' },
          { en: 'It prevents developers from committing code with syntax errors', bn: 'ভুল কোড কমিট করা বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Replaces large blobs with lightweight pointers.',
          bn: 'বিশাল ফাইলকে হালকা পয়েন্টার দিয়ে বদলে দেয়।'
        },
        explanation: {
          en: 'Git LFS prevents repositories from bloating to gigabytes by replacing large media and dataset files with tiny metadata pointers, downloading files lazily on demand.',
          bn: 'Git LFS বড় ফাইলগুলোর বদলে ছোট টেক্সট পয়েন্টার ব্যবহার করে রিপোজিটরির সাইজ গিগাবাইটে পৌঁছানো আটকে দেয়।'
        }
      },
      {
        id: 'tq4',
        kind: 'mcq',
        topic: 'git: Cryptographic commit signing',
        question: {
          en: 'What is the purpose of cryptographic commit signing with GPG or SSH keys in Git?',
          bn: 'গিটে GPG বা SSH কি দিয়ে ক্রিপ্টোগ্রাফিক কমিট সাইনিং করার মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'It mathematically proves the authenticity of the author, guaranteeing that someone else did not spoof the author name and email', bn: 'এটি গাণিতিকভাবে কমিটদাতার সত্যতা প্রমাণ করে এবং নিশ্চিত করে যে অন্য কেউ লেখকের নাম বা ইমেইল জাল করেনি' },
          { en: 'It speeds up git push operations', bn: 'git push-এর গতি বৃদ্ধি করে' },
          { en: 'It compresses the .git directory on disk', bn: 'ডিস্কের .git ডিরেক্টরি কম্প্রেস করে' },
          { en: 'It automatically formats Markdown files', bn: 'মার্কডাউন ফাইল স্বয়ংক্রিয়ভাবে সাজায়' }
        ],
        answer: 0,
        hint: {
          en: 'Proves identity and prevents commit spoofing.',
          bn: 'পরিচয় প্রমাণ করে এবং ভুয়া কমিট রোধ করে।'
        },
        explanation: {
          en: 'Signed commits include a cryptographic signature verifying the committer owns the private key, displaying a "Verified" badge on GitHub/GitLab.',
          bn: 'কমিট সাইন করলে গিটহাবে "Verified" ব্যাজ প্রদর্শিত হয়, যা নিশ্চিত করে যে কমিটদাতার পরিচয় আসল।'
        }
      }
    ]
  }
};
