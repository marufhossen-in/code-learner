import type { Lesson } from '../../../lib/types';

export const ReviewsAndTheReviewLesson: Lesson = {
  slug: 'reviews-and-the-review',
  tech: 'github',
  title: {
    en: 'Code Reviews: Workflows, Suggestions & CODEOWNERS',
    bn: 'কোড রিভিউ: ওয়ার্কফ্লো, সাজেশন এবং CODEOWNERS'
  },
  summary: {
    en: 'Master GitHub code reviews: line-level comments, batched reviews, 1-click suggested changes, conventional prefixes, and automated team routing with CODEOWNERS.',
    bn: 'GitHub কোড রিভিউ আয়ত্ত করুন: লাইন-লেভেল মন্তব্য, ব্যাচ রিভিউ, ১-ক্লিকে প্রস্তাবিত কোড পরিবর্তন, প্রথাগত প্রিফিক্স এবং CODEOWNERS দিয়ে স্বয়ংক্রিয় রিভিউ।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'review-fundamentals',
      text: {
        en: '1. Why Code Reviews Matter',
        bn: '১. কোড রিভিউ কেন গুরুত্বপূর্ণ?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you collaborate on GitHub, code reviews let you inspect work before merging it into main. Teammates catch bugs, verify architectural patterns, and share domain knowledge across the engineering group.',
        bn: 'যখন আপনি GitHub-এ কাজ করেন, কোড রিভিউ আপনাকে মূল ব্রাঞ্চে মার্জ করার আগে কোড যাচাই করতে সাহায্য করে। সহকর্মীরা ভুল শনাক্ত করেন, আর্কিটেকচারাল প্যাটার্ন নিশ্চিত করেন এবং পুরো দলের মাঝে জ্ঞান বিনিময় করেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'On GitHub, code reviews occur inside Pull Requests through an interactive diff interface. Reviewers inspect additions highlighted in green and deletions in red. Rather than just finding defects, peer review builds engineering alignment and ensures maintainability.',
        bn: 'GitHub-এ কোড রিভিউ সম্পন্ন হয় পুল রিকোয়েস্টের ভেতর থাকা একটি ইন্টারঅ্যাক্টিভ ডিফস ইন্টারফেসে। রিভিউয়াররা সবুজে চিহ্নিত নতুন লাইন এবং লালে চিহ্নিত বাদ পড়া লাইনগুলো পর্যবেক্ষণ করেন। এটি শুধু ভুল ধরা নয়, বরং দলের ভেতরে কোডের ধারাবাহিকতা ও সহজবোধ্যতা বজায় রাখে।'
      }
    },
    {
      type: 'heading',
      id: 'review-verdicts',
      text: {
        en: '2. The 3 Review Verdicts and Batched Comments',
        bn: '২. ৩ টি রিভিউ সিদ্ধান্ত এবং ব্যাচ মন্তব্য'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When completing an inspection, a reviewer submits 1 unified review containing individual line comments accompanied by 1 of 3 formal verdicts:',
        bn: 'পর্যবেক্ষণ শেষে একজন রিভিউয়ার পৃথক লাইনের মন্তব্যগুলো একত্রিত করে ১ টি সার্বিক রিভিউ জমা দেন এবং ৩ টি আনুষ্ঠানিক সিদ্ধান্তের যেকোনো ১ টি বেছে নেন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Comment: Submits general feedback, questions, or praise without formally approving or blocking the pull request. Useful for non-blocking discussions.',
          bn: 'Comment (সাধারণ মন্তব্য): পুল রিকোয়েস্ট অনুমোদন বা ব্লক না করে সাধারণ প্রতিক্রিয়া বা প্রশ্ন জমা দেয়। অনানুষ্ঠানিক আলোচনার জন্য এটি উপযোগী।'
        },
        {
          en: 'Approve: Formally certifies that the pull request meets all quality, testing, and security standards. This counts toward the required approval threshold enforced by branch protection rules.',
          bn: 'Approve (অনুমোদন): আনুষ্ঠানিকভাবে নিশ্চিত করে যে পুল রিকোয়েস্টটি সমস্ত মানদণ্ড পূরণ করেছে। ব্রাঞ্চ প্রটেকশনের প্রয়োজনীয় অনুমোদনের শর্ত পূরণে এটি গণনা করা হয়।'
        },
        {
          en: 'Request Changes: Blocks the pull request from being merged until the author pushes requested revisions and the reviewer re-evaluates the code.',
          bn: 'Request Changes (পরিবর্তনের অনুরোধ): লেখক নতুন কমিট দিয়ে সমস্যা সমাধান না করা এবং রিভিউয়ার পুনরায় যাচাই না করা পর্যন্ত PR মার্জ হওয়া ব্লক করে রাখে।'
        }
      ]
    },
    {
      type: 'para',
      text: {
        en: 'GitHub supports "Start a review" to batch comments. Instead of emailing 10 separate notifications as you read files, batched comments remain pending and draft until you click "Submit review", delivering 1 single notification bundle to the author.',
        bn: 'GitHub মন্তব্যের ব্যাচ তৈরি করতে "Start a review" সুবিধা দেয়। ফাইল পড়ার সময় ১০ টি পৃথক নোটিফিকেশন পাঠানোর বদলে সব মন্তব্য ড্রাফট হিসেবে জমা থাকে, এবং "Submit review" চাপলে ১ টিমাত্র নোটিফিকেশন লেখকের কাছে পৌঁছায়।'
      }
    },
    {
      type: 'visual',
      id: 'review-flow-diagram',
      title: {
        en: 'GitHub Pull Request Review & CODEOWNERS Workflow',
        bn: 'GitHub পুল রিকোয়েস্ট রিভিউ এবং CODEOWNERS ওয়ার্কফ্লো'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">GitHub Code Review &amp; CODEOWNERS Gate</text>' +
          '<!-- Step 1 -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="160" height="320" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="80" y="26" fill="#60a5fa" font-size="13" font-weight="bold" text-anchor="middle">1. PR Created</text>' +
            '<rect x="15" y="45" width="130" height="70" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#38bdf8" font-size="10" font-weight="bold">Branch: feature</text>' +
            '<text x="25" y="86" fill="#94a3b8" font-size="9">Files changed: 4</text>' +
            '<text x="25" y="102" fill="#94a3b8" font-size="9">Lines: +120, -30</text>' +
            '<rect x="15" y="130" width="130" height="85" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="80" y="152" fill="#c084fc" font-size="11" font-weight="bold" text-anchor="middle">CODEOWNERS</text>' +
            '<text x="25" y="172" fill="#e2e8f0" font-size="9">auth/** -&gt; @security</text>' +
            '<text x="25" y="190" fill="#e2e8f0" font-size="9">api/** -&gt; @backend</text>' +
            '<text x="80" y="240" fill="#94a3b8" font-size="10" text-anchor="middle">Auto-assigns</text>' +
            '<text x="80" y="255" fill="#38bdf8" font-size="10" text-anchor="middle">2 required reviewers</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 200 200 L 225 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Step 2 -->' +
          '<g transform="translate(235, 60)">' +
            '<rect width="170" height="320" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>' +
            '<text x="85" y="26" fill="#fde047" font-size="13" font-weight="bold" text-anchor="middle">2. Review Cycle</text>' +
            '<rect x="15" y="45" width="140" height="75" rx="6" fill="#0f172a"/>' +
            '<text x="25" y="68" fill="#facc15" font-size="10" font-weight="bold">Batched Comments</text>' +
            '<text x="25" y="86" fill="#94a3b8" font-size="9">nit: naming convention</text>' +
            '<text x="25" y="102" fill="#94a3b8" font-size="9">suggestion: refactor loop</text>' +
            '<rect x="15" y="135" width="140" height="85" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="85" y="157" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">Suggested Change</text>' +
            '<text x="25" y="177" fill="#cbd5e1" font-size="9">```suggestion</text>' +
            '<text x="25" y="193" fill="#34d399" font-size="9">const timeout = 5000;</text>' +
            '<text x="85" y="245" fill="#cbd5e1" font-size="10" text-anchor="middle">1-click web commit</text>' +
            '<text x="85" y="260" fill="#34d399" font-size="10" text-anchor="middle">Applied by author</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 415 200 L 440 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Step 3 -->' +
          '<g transform="translate(450, 60)">' +
            '<rect width="150" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="75" y="26" fill="#34d399" font-size="13" font-weight="bold" text-anchor="middle">3. Approval</text>' +
            '<rect x="15" y="45" width="120" height="55" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="25" y="68" fill="#34d399" font-size="10" font-weight="bold">&#x2714; @security</text>' +
            '<text x="25" y="86" fill="#94a3b8" font-size="9">Approved</text>' +
            '<rect x="15" y="115" width="120" height="55" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="25" y="138" fill="#34d399" font-size="10" font-weight="bold">&#x2714; @backend</text>' +
            '<text x="25" y="156" fill="#94a3b8" font-size="9">Approved</text>' +
            '<text x="75" y="210" fill="#38bdf8" font-size="10" text-anchor="middle">Ruleset Satisfied:</text>' +
            '<text x="75" y="228" fill="#cbd5e1" font-size="10" text-anchor="middle">2 approvals logged</text>' +
          '</g>' +
          '<!-- Arrow 3 -->' +
          '<path d="M 610 200 L 635 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Step 4 -->' +
          '<g transform="translate(645, 60)">' +
            '<rect width="125" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="62" y="26" fill="#38bdf8" font-size="13" font-weight="bold" text-anchor="middle">4. Merged</text>' +
            '<rect x="12" y="45" width="101" height="65" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>' +
            '<text x="62" y="70" fill="#38bdf8" font-size="10" font-weight="bold" text-anchor="middle">Base Updated</text>' +
            '<text x="62" y="88" fill="#94a3b8" font-size="9" text-anchor="middle">Squash &amp; Merge</text>' +
            '<text x="62" y="150" fill="#34d399" font-size="10" text-anchor="middle">Trunk linear</text>' +
            '<text x="62" y="168" fill="#94a3b8" font-size="9" text-anchor="middle">Branch deleted</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'suggested-changes',
      text: {
        en: '3. Suggested Changes and Conventional Comments',
        bn: '৩. প্রস্তাবিত পরিবর্তন এবং প্রথাগত কমেন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GitHub provides a markdown feature called "Suggested Changes". Reviewers can propose exact code replacements directly in their comment using a triple backtick suggestion block:',
        bn: 'GitHub এ "Suggested Changes" নামের একটি শক্তিশালী মার্কডাউন সুবিধা রয়েছে। রিভিউয়াররা তাদের কমেন্টের ভেতর সরাসরি কোড পরিবর্তনের প্রস্তাব দিতে পারেন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1-Click Application: When the author accepts a suggestion, GitHub opens an inline commit modal allowing them to apply the suggestion immediately without leaving the web browser.',
          bn: '১ ক্লিকে কমিট: লেখক প্রস্তাবটি গ্রহণ করলে GitHub ব্রাউজারে একটি কমিট মোডাল খুলে দেয়, ফলে কোড এডিটরে না গিয়েই সরাসরি ওয়েব থেকে ১ ক্লিকে পরিবর্তন কমিট করা যায়।'
        },
        {
          en: 'Conventional Prefixes: Mature engineering teams prefix comment threads with intention markers such as "praise:" for great work, "nit:" for minor styling preferences, "suggestion:" for architectural improvements, and "question:" for technical inquiries.',
          bn: 'প্রথাগত প্রিফিক্স: পরিপক্ক ইঞ্জিনিয়ারিং টিম মন্তব্যের শুরুতে সুস্পষ্ট উদ্দেশ্যমূলক প্রিফিক্স ব্যবহার করে, যেমন "praise:" ভালো কাজের প্রশংসায়, "nit:" ছোটখাটো ফরম্যাটিংয়ে, "suggestion:" উন্নতির প্রস্তাবে এবং "question:" জানার আগ্রহে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'codeowners-file',
      text: {
        en: '4. Automated Review Routing with CODEOWNERS',
        bn: '৪. CODEOWNERS দিয়ে স্বয়ংক্রিয় রিভিউয়ার নির্ধারণ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In large repositories, manually tagging reviewers causes bottlenecks. A CODEOWNERS file automatically requests reviews from responsible individuals or teams whenever a PR touches files they own. GitHub searches 3 locations for this file: the repository root, the .github/ directory, or the docs/ directory.',
        bn: 'বড় রিপোজিটরিতে হাতে করে রিভিউয়ার যুক্ত করা জটিলতা তৈরি করে। একটি CODEOWNERS ফাইল কোনো ফাইলের মালিক টিম বা ব্যক্তিকে স্বয়ংক্রিয়ভাবে রিভিউয়ার হিসেবে যুক্ত করে দেয় যখনই কোনো PR সেই ফাইলগুলোতে পরিবর্তন আনে। GitHub এই ফাইলটি খুঁজতে ৩ টি জায়গা স্ক্যান করে: রিপোজিটরির রুট, .github/ ডিরেক্টরি অথবা docs/ ডিরেক্টরি।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Precedence Rules: Rules are evaluated from top to bottom. If multiple patterns match a file, the last matching rule in the file takes precedence.',
          bn: 'অগ্রাধিকারের নিয়ম: রুলগুলো উপর থেকে নিচে ক্রমানুসারে যাচাই করা হয়। কোনো ফাইলের সাথে একাধিক নিয়ম মিললে ফাইলের শেষের নিয়মটি চূড়ান্ত প্রাধান্য পায়।'
        },
        {
          en: 'Team Ownership: Organizations can assign GitHub Teams (e.g., @org-name/security-team or @org-name/billing) ensuring reviews do not stall if 1 individual is on vacation.',
          bn: 'দলের মালিকানা: অর্গানাইজেশনগুলো নির্দিষ্ট টিমকে (যেমন @org-name/security-team) দায়িত্ব দিতে পারে, ফলে দলের ১ জন ব্যক্তি ছুটিতে থাকলেও রিভিউ আটকে থাকে না।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'codeowners-simulator',
      text: {
        en: '5. CODEOWNERS & Review Gate Engine in TypeScript',
        bn: '৫. TypeScript এ CODEOWNERS এবং রিভিউ গেট ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how GitHub evaluates a CODEOWNERS file against a list of changed files, assigns required team reviewers, and verifies approval rulesets before permitting a merge:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে GitHub পরিবর্তিত ফাইলগুলোর সাথে CODEOWNERS ফাইলের নিয়ম মিলিয়ে রিভিউয়ার নির্ধারণ করে এবং মার্জ করার আগে অনুমোদন যাচাই করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of CODEOWNERS rule precedence, reviewer assignment, and review gate validation.',
        bn: 'CODEOWNERS রুল অগ্রাধিকার, রিভিউয়ার নিয়োগ এবং রিভিউ গেট যাচাইয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of GitHub CODEOWNERS Pattern Matching and Review Gates
interface CodeOwnerRule {
  pattern: string;
  owners: string[];
}

interface ReviewDecision {
  reviewer: string;
  verdict: 'APPROVED' | 'CHANGES_REQUESTED' | 'COMMENT';
}

class CodeReviewManager {
  private rules: CodeOwnerRule[] = [];

  addRule(pattern: string, owners: string[]): void {
    this.rules.push({ pattern, owners });
  }

  // Matches a file path against rules; last matching rule takes precedence
  resolveOwnersForFile(filePath: string): string[] {
    let matchedOwners: string[] = [];
    for (const rule of this.rules) {
      if (rule.pattern === '*' || filePath.startsWith(rule.pattern.replace('*', ''))) {
        matchedOwners = rule.owners;
      }
    }
    return matchedOwners;
  }

  // Identifies all unique required reviewers for a set of changed files
  getRequiredReviewers(changedFiles: string[]): string[] {
    const reviewers = new Set<string>();
    for (const file of changedFiles) {
      const owners = this.resolveOwnersForFile(file);
      for (const owner of owners) {
        reviewers.add(owner);
      }
    }
    return Array.from(reviewers);
  }

  // Verifies if the PR meets mandatory branch protection review requirements
  canMerge(
    changedFiles: string[],
    submittedReviews: ReviewDecision[],
    minApprovals: number
  ): { allowed: boolean; reason: string } {
    const requiredReviewers = this.getRequiredReviewers(changedFiles);
    
    // Check for any blocking changes requested
    const hasBlockers = submittedReviews.some((r) => r.verdict === 'CHANGES_REQUESTED');
    if (hasBlockers) {
      return { allowed: false, reason: 'Merge blocked: 1 or more reviews requested changes' };
    }

    const approvedBy = new Set(
      submittedReviews.filter((r) => r.verdict === 'APPROVED').map((r) => r.reviewer)
    );

    // Verify minimum approvals threshold
    if (approvedBy.size < minApprovals) {
      return { allowed: false, reason: 'Merge blocked: need ' + minApprovals + ' approvals, got ' + approvedBy.size };
    }

    // Verify all CODEOWNERS have approved
    for (const req of requiredReviewers) {
      if (!approvedBy.has(req)) {
        return { allowed: false, reason: 'Merge blocked: required CODEOWNER ' + req + ' has not approved' };
      }
    }

    return { allowed: true, reason: 'All checks passed: ready to merge' };
  }
}

// 1. Initialize Code Owners with rule precedence
const manager = new CodeReviewManager();
manager.addRule('*', ['@org/core-devs']);
manager.addRule('src/auth/*', ['@org/security-team']);
manager.addRule('src/billing/*', ['@org/finance-team']);

// 2. PR changes 2 files: core utility and authentication controller
const prFiles = ['src/utils/math.ts', 'src/auth/token.ts'];
const assignedOwners = manager.getRequiredReviewers(prFiles);
console.log('Required Reviewers Count: ' + assignedOwners.length); // -> 2
console.log('Owners assigned: ' + assignedOwners.join(', ')); // -> @org/core-devs, @org/security-team

// 3. Test scenario: 1 approval and 1 changes requested
const reviewsBatch1: ReviewDecision[] = [
  { reviewer: '@org/core-devs', verdict: 'APPROVED' },
  { reviewer: '@org/security-team', verdict: 'CHANGES_REQUESTED' }
];
const gate1 = manager.canMerge(prFiles, reviewsBatch1, 2);
console.log('Gate 1 Allowed: ' + gate1.allowed); // -> false

// 4. Test scenario: Both required CODEOWNERS approve
const reviewsBatch2: ReviewDecision[] = [
  { reviewer: '@org/core-devs', verdict: 'APPROVED' },
  { reviewer: '@org/security-team', verdict: 'APPROVED' }
];
const gate2 = manager.canMerge(prFiles, reviewsBatch2, 2);
console.log('Gate 2 Allowed: ' + gate2.allowed); // -> true`
    }
  ],
  exercises: [
    {
      id: 'rev-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which review verdict explicitly blocks a GitHub Pull Request from merging under protected branch rules?',
        bn: 'কোন রিভিউ সিদ্ধান্তটি ব্রাঞ্চ প্রটেকশন রুলসের অধীনে GitHub পুল রিকোয়েস্ট মার্জ হওয়া ব্লক করে?'
      },
      options: [
        {
          en: 'Request Changes',
          bn: 'Request Changes'
        },
        {
          en: 'Comment',
          bn: 'Comment'
        },
        {
          en: 'Draft Review',
          bn: 'Draft Review'
        },
        {
          en: 'Rebase Preview',
          bn: 'Rebase Preview'
        }
      ],
      answer: 0,
      hint: {
        en: 'This verdict signals that mandatory modifications must be committed before merge.',
        bn: 'এই সিদ্ধান্তটি নির্দেশ করে যে মার্জ করার আগে আবশ্যিক পরিবর্তনগুলো কমিট করতে হবে।'
      },
      explanation: {
        en: 'Selecting "Request Changes" records a blocking verdict on the PR. It prevents merging until the author addresses feedback and the reviewer approves.',
        bn: '"Request Changes" দিলে PR মার্জ করা আটকে যায়। লেখক সমস্যাগুলো সমাধান করার পর এবং রিভিউয়ার অনুমোদন দেওয়ার পর এটি মার্জ করা যায়।'
      }
    },
    {
      id: 'rev-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the main purpose of "Suggested Changes" in a GitHub pull request review comment?',
        bn: 'GitHub পুল রিকোয়েস্ট রিভিউ কমেন্টে "Suggested Changes"-এর মূল উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'To propose inline replacement code that the PR author can commit directly with 1 click',
          bn: 'সরাসরি প্রতিস্থাপনীয় কোড প্রস্তাব করা যা PR লেখক ব্রাউজার থেকেই ১ ক্লিকে কমিট করতে পারেন'
        },
        {
          en: 'To run continuous integration builds 2 times faster in the cloud',
          bn: 'ক্লাউডে কন্টিনিউয়াস ইন্টিগ্রেশন বিল্ড ২ গুণ দ্রুত সম্পন্ন করা'
        },
        {
          en: 'To permanently delete previous commit histories from the Git reflog',
          bn: 'Git রেফলগ থেকে পূর্ববর্তী কমিটের ইতিহাস চিরতরে মুছে ফেলা'
        },
        {
          en: 'To convert private GitHub repositories into public open source projects',
          bn: 'প্রাইভেট GitHub রিপোজিটরিকে পাবলিক ওপেন সোর্স প্রজেক্টে রূপান্তর করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'It uses the suggestion markdown block so the author can accept code changes via the web interface.',
        bn: 'এটি সাজেশন মার্কডাউন ব্লক ব্যবহার করে যেন লেখক ওয়েব ইন্টারফেস থেকেই কোড গ্রহণ করতে পারেন।'
      },
      explanation: {
        en: 'Suggested Changes let reviewers embed concrete replacement code blocks that authors can accept and commit instantly without manual copying.',
        bn: 'সাজেস্টেড চেঞ্জের মাধ্যমে রিভিউয়াররা সরাসরি কোড ব্লক প্রস্তাব করতে পারেন যা লেখক হাতে কপি না করেই অবিলম্বে কমিট করতে পারেন।'
      }
    },
    {
      id: 'rev-ex-3',
      kind: 'mcq',
      question: {
        en: 'In a CODEOWNERS file with multiple matching lines, which rule takes precedence for a given file?',
        bn: 'একাধিক ম্যাচিং লাইন বিশিষ্ট একটি CODEOWNERS ফাইলে কোনো নির্দিষ্ট ফাইলের জন্য কোন নিয়মটি প্রাধান্য পায়?'
      },
      options: [
        {
          en: 'The last matching rule defined in the file',
          bn: 'ফাইলের ভেতরে সংজ্ঞায়িত সর্বশেষ ম্যাচিং নিয়মটি'
        },
        {
          en: 'The first rule at line 1 of the file',
          bn: 'ফাইলের ১ নম্বর লাইনে থাকা প্রথম নিয়মটি'
        },
        {
          en: 'The rule containing the shortest file path name',
          bn: 'সবচেয়ে ছোট ফাইল পাথ ধারণকারী নিয়মটি'
        },
        {
          en: 'Rules are picked at random by GitHub servers',
          bn: 'GitHub সার্ভার দ্বারা এলোমেলোভাবে নিয়ম নির্বাচন করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'CODEOWNERS rules follow a top-to-bottom order similar to gitignore specificity.',
        bn: 'CODEOWNERS নিয়মগুলো gitignore এর মতোই উপর থেকে নিচে অগ্রাধিকার অনুসরণ করে।'
      },
      explanation: {
        en: 'GitHub evaluates CODEOWNERS rules sequentially from top to bottom. If several rules match a path, the last pattern defined in the file wins.',
        bn: 'GitHub উপর থেকে নিচে ক্রমানুসারে CODEOWNERS নিয়মগুলো মূল্যায়ন করে। একাধিক নিয়ম প্রযোজ্য হলে তালিকার শেষের নিয়মটি কার্যকর হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-reviews-and-the-review',
    title: {
      en: 'Code Reviews and CODEOWNERS Architecture Quiz',
      bn: 'কোড রিভিউ এবং CODEOWNERS আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'rev-q1',
        kind: 'mcq',
        question: {
          en: 'Which 3 repository directory locations does GitHub scan to locate a CODEOWNERS file?',
          bn: 'একটি CODEOWNERS ফাইল খুঁজে পেতে GitHub রিপোজিটরির কোন ৩ টি ডিরেক্টরি স্ক্যান করে?'
        },
        options: [
          {
            en: 'Repository root, .github/, and docs/',
            bn: 'রিপোজিটরি রুট, .github/, এবং docs/'
          },
          {
            en: 'src/, dist/, and build/',
            bn: 'src/, dist/, এবং build/'
          },
          {
            en: 'config/, node_modules/, and .git/',
            bn: 'config/, node_modules/, এবং .git/'
          },
          {
            en: '.circleci/, .travis/, and public/',
            bn: '.circleci/, .travis/, এবং public/'
          }
        ],
        answer: 0,
        hint: {
          en: 'GitHub checks the root directory, the dot-github folder, or the documentation folder.',
          bn: 'GitHub রুট ফোল্ডার, ডট-গিটহাব ডিরেক্টরি অথবা ডকুমেন্টেশন ফোল্ডার চেক করে।'
        },
        explanation: {
          en: 'GitHub searches for CODEOWNERS in the repository root, in the .github/ directory, or in the docs/ directory on the default branch.',
          bn: 'GitHub ডিফল্ট ব্রাঞ্চের রিপোজিটরি রুট, .github/ ফোল্ডার অথবা docs/ ফোল্ডারে CODEOWNERS ফাইলটি সন্ধান করে।'
        }
      },
      {
        id: 'rev-q2',
        kind: 'mcq',
        question: {
          en: 'Why is "Start a review" preferred over submitting individual single comments during an inspection?',
          bn: 'পর্যবেক্ষণের সময় প্রতিটি মন্তব্যের বদলে "Start a review" বেছে নেওয়া কেন শ্রেয়?'
        },
        options: [
          {
            en: 'It batches feedback so the author receives 1 cohesive notification instead of dozens of emails',
            bn: 'এটি মতামতকে ব্যাচ করে ফলে লেখক ডজন ডজন ইমেইলের বদলে ১ টি সুসংগঠিত নোটিফিকেশন পান'
          },
          {
            en: 'It automatically commits untested code changes directly to main',
            bn: 'এটি সরাসরি টেস্ট না করা পরিবর্তনগুলো main ব্রাঞ্চে কমিট করে দেয়'
          },
          {
            en: 'It disables all automated continuous integration checks on the PR',
            bn: 'এটি PR-এ থাকা সমস্ত স্বয়ংক্রিয় সিআই চেক নিষ্ক্রিয় করে দেয়'
          },
          {
            en: 'It prevents other teammates from reading the pull request diff',
            bn: 'এটি অন্য সহকর্মীদের পুল রিকোয়েস্টের ডিফস দেখা থেকে বিরত রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about author notification fatigue when a reviewer leaves 20 comments.',
          bn: 'একজন রিভিউয়ার ২০ টি মন্তব্য দিলে লেখকের নোটিফিকেশন বিরক্তির কথা ভাবুন।'
        },
        explanation: {
          en: 'Batched reviews keep comments in draft state until submitted as 1 group, avoiding notification spam and presenting a complete assessment.',
          bn: 'ব্যাচ রিভিউ মন্তব্যগুলোকে ড্রাফট হিসেবে রাখে এবং একসঙ্গে পাঠায়, ফলে লেখক বারংবার বিরক্ত না হয়ে এক নজরে পুরো মতামত পান।'
        }
      },
      {
        id: 'rev-q3',
        kind: 'mcq',
        question: {
          en: 'In Conventional Comments, what does the prefix "nit:" signify to the author?',
          bn: 'কনভেনশনাল কমেন্টে "nit:" প্রিফিক্সটি লেখককে কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'A trivial styling or minor detail that is non-blocking and optional to address',
            bn: 'একটি ছোটখাটো ফরম্যাটিং বা গৌণ বিষয় যা ঐচ্ছিক এবং মার্জ ব্লক করে না'
          },
          {
            en: 'A severe security vulnerability that must block the merge immediately',
            bn: 'একটি মারাত্মক নিরাপত্তা ত্রুটি যা তাৎক্ষণিকভাবে মার্জ আটকে দিতে হবে'
          },
          {
            en: 'A request to delete the entire repository and start over',
            bn: 'পুরো রিপোজিটরি মুছে ফেলে নতুন করে শুরু করার নির্দেশ'
          },
          {
            en: 'An indication that the code has zero test coverage in production',
            bn: 'প্রোডাকশনে কোডের কোনো টেস্ট কভারেজ নেই এমন ইঙ্গিত'
          }
        ],
        answer: 0,
        hint: {
          en: '"Nit" stands for nitpick — a tiny detail that should not delay shipping.',
          bn: '"Nit" মানে তুচ্ছ বা সূক্ষ্ম বিষয় যা রিলিজ বিলম্বিত করার মতো নয়।'
        },
        explanation: {
          en: '"nit:" indicates a minor detail (like spacing or typo). The author can address it if desired, but it does not block PR approval.',
          bn: '"nit:" একটি গৌণ বিবরণ বোঝায় (যেমন টাইপো বা স্পেসিং)। লেখক চাইলে এটি সংশোধন করতে পারেন, তবে এটি মার্জ আটকে রাখে না।'
        }
      },
      {
        id: 'rev-q4',
        kind: 'mcq',
        question: {
          en: 'What happens to existing review comments when an author pushes new commits to the PR branch?',
          bn: 'লেখক PR ব্রাঞ্চে নতুন কমিট পুশ করলে পূর্ববর্তী রিভিউ কমেন্টগুলোর কী ঘটে?'
        },
        options: [
          {
            en: 'Comments on modified lines are marked as "Outdated" but remain preserved in history',
            bn: 'পরিবর্তিত লাইনের মন্তব্যগুলো "Outdated" হিসেবে চিহ্নিত হয় কিন্তু হিস্ট্রিতে সংরক্ষিত থাকে'
          },
          {
            en: 'All comments and pull request history are permanently deleted from GitHub',
            bn: 'সব কমেন্ট এবং পুল রিকোয়েস্টের ইতিহাস GitHub থেকে চিরতরে মুছে ফেলা হয়'
          },
          {
            en: 'The entire pull request is automatically rejected and closed',
            bn: 'সম্পূর্ণ পুল রিকোয়েস্টটি স্বয়ংক্রিয়ভাবে বাতিল ও বন্ধ হয়ে যায়'
          },
          {
            en: 'The branch protection rules are automatically downgraded to read-only',
            bn: 'ব্রাঞ্চ প্রটেকশন রুলস স্বয়ংক্রিয়ভাবে রিড-অনলিতে অবনমিত হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'GitHub hides them behind an "Outdated" toggle so they do not clutter new code lines.',
          bn: 'GitHub এগুলোকে "Outdated" টগলে লুকিয়ে রাখে যেন নতুন কোডে বিশৃঙ্খলা তৈরি না হয়।'
        },
        explanation: {
          en: 'When new commits modify lines that had comments, GitHub marks those comment threads as "Outdated", keeping the active diff view fresh while preserving conversation history.',
          bn: 'নতুন কমিটে সংশ্লিষ্ট লাইন পরিবর্তিত হলে GitHub মন্তব্যগুলোকে "Outdated" চিহ্নিত করে যাতে বর্তমান ডিফস পরিচ্ছন্ন থাকে এবং আলোচনা সংরক্ষিত থাকে।'
        }
      },
      {
        id: 'rev-q5',
        kind: 'mcq',
        question: {
          en: 'How does configuring "Require review from Code Owners" in Branch Protection strengthen security?',
          bn: 'ব্রাঞ্চ প্রটেকশনে "Require review from Code Owners" সক্রিয় করা কীভাবে নিরাপত্তা বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'It guarantees that PRs touching sensitive paths cannot merge without explicit approval from designated domain owners',
            bn: 'এটি নিশ্চিত করে যে সংবেদনশীল ফাইলের PR সংশ্লিষ্ট দায়িত্বপ্রাপ্ত ওনারদের স্পষ্ট অনুমোদন ছাড়া মার্জ হতে পারে না'
          },
          {
            en: 'It encrypts the entire Git history with 4096-bit RSA keys',
            bn: 'এটি সম্পূর্ণ Git ইতিহাসকে ৪০৯৬-বিট RSA কি দিয়ে এনক্রিপ্ট করে'
          },
          {
            en: 'It requires every commit author to hold an active GitHub Enterprise license',
            bn: 'এটি প্রতিটি কমিট লেখকের জন্য সক্রিয় GitHub Enterprise লাইসেন্স দাবি করে'
          },
          {
            en: 'It prevents external network traffic from accessing GitHub Actions runners',
            bn: 'এটি বহিরাগত নেটওয়ার্ক ট্র্যাফিককে GitHub Actions রানারে প্রবেশ করতে বাধা দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Security or infrastructure teams must approve changes that touch their files.',
          bn: 'নিরাপত্তা বা অবকাঠামো দলের ফাইলের পরিবর্তন তাদের নিজস্ব অনুমোদন ছাড়া সম্পন্ন হবে না।'
        },
        explanation: {
          en: 'Enforcing Code Owner reviews guarantees that changes to sensitive subsystems (such as authentication or payment logic) require approval from the specific team responsible for those systems.',
          bn: 'কোড ওনার রিভিউ কার্যকর করলে সংবেদনশীল অংশের (যেমন অথেন্টিকেশন বা পেমেন্ট) পরিবর্তন সংশ্লিষ্ট বিশেষজ্ঞ দলের অনুমোদন ছাড়া মার্জ হওয়া অসম্ভব হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'actions-and-the-action',
    title: {
      en: 'GitHub Actions: Workflows, Triggers & CI/CD Pipelines',
      bn: 'GitHub অ্যাকশনস: ওয়ার্কফ্লো, ট্রিগার ও CI/CD পাইপলাইন'
    }
  }
};
