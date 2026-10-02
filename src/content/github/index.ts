import type { Hub } from '../../lib/types';
import { BranchsAndTheBranchLesson } from './lessons/branchs-and-the-branch';
import { ReposAndTheRepoLesson } from './lessons/repos-and-the-repo';
import { PullsAndThePullLesson } from './lessons/pulls-and-the-pull';
import { IssuesAndTheIssueLesson } from './lessons/issues-and-the-issue';
import { ReviewsAndTheReviewLesson } from './lessons/reviews-and-the-review';
import { ActionsAndTheActionLesson } from './lessons/actions-and-the-action';
import { TeamsAndTheTeamLesson } from './lessons/teams-and-the-team';
import { TheGithubReleaseLesson } from './lessons/the-github-release';

export const githubHub: Hub = {
  slug: 'github',
  name: 'GitHub',
  icon: '🐙',
  tagline: {
    en: 'Master enterprise GitHub collaboration: from Git branching workflows and pull request reviews to GitHub Actions CI/CD pipelines, security, and releases.',
    bn: 'এন্টারপ্রাইজ GitHub কোলাবোরেশন সম্পূর্ণ আয়ত্ত করুন: Git ব্রাঞ্চিং ওয়ার্কফ্লো ও পুল রিকোয়েস্ট রিভিউ থেকে GitHub Actions CI/CD পাইপলাইন, নিরাপত্তা এবং সফটওয়্যার রিলিজ পর্যন্ত।'
  },
  intro: {
    en: 'GitHub is the world\'s standard platform for collaborative software engineering, hosting over 100 million developers and repositories worldwide. Mastering GitHub requires understanding distributed version control, branch protection rules, code review conventions, automated GitHub Actions CI/CD workflows, team permission hierarchies, and semantic release pipelines. This hub guides you through 8 comprehensive lessons: branching models, repository architecture and forks, pull request review cycles, issue tracking and project planning, code ownership with CODEOWNERS, automated workflows and secret management, organization governance with RBAC and SAML SSO, and semantic releases.',
    bn: 'GitHub হলো বিশ্বব্যাপী সফটওয়্যার ইঞ্জিনিয়ারিং কোলাবোরেশনের শীর্ষস্থানীয় প্ল্যাটফর্ম, যা বিশ্বজুড়ে ১০ কোটিরও বেশি ডেভেলপার ও রিপোজিটরি পরিচালনা করে। GitHub আয়ত্ত করতে প্রয়োজন ডিস্ট্রিবিউটেড ভার্সন কন্ট্রোল, ব্রাঞ্চ প্রটেকশন রুলস, কোড রিভিউ রীতি, স্বয়ংক্রিয় GitHub Actions CI/CD পাইপলাইন, টিম পারমিশন হায়ারার্কি এবং সিম্যান্টিক রিলিজ প্রক্রিয়া সম্পর্কে গভীর ধারণা। এই হাবটি আপনাকে ৮ টি ধারাবাহিক পাঠে দক্ষ করে তুলবে: ব্রাঞ্চিং মডেল, রিপোজিটরি আর্কিটেকচার ও ফর্ক, পুল রিকোয়েস্ট রিভিউ চক্র, ইস্যু ট্র্যাকিং ও প্রজেক্ট প্ল্যানিং, CODEOWNERS দিয়ে কোডের মালিকানা, স্বয়ংক্রিয় ওয়ার্কফ্লো ও সিক্রেট ম্যানেজমেন্ট, RBAC ও SAML SSO সহযোগে অর্গানাইজেশন গভর্ন্যান্স এবং সিম্যান্টিক সফটওয়্যার রিলিজ।'
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Branching, Repositories & Pull Requests',
        bn: 'ধাপ ১ — ব্রাঞ্চিং, রিপোজিটরি এবং পুল রিকোয়েস্ট'
      },
      items: [
        {
          en: 'Lesson 1: Branching strategies: GitHub Flow, Trunk-Based Development, and protected main branches',
          bn: 'পাঠ ১: ব্রাঞ্চিং কৌশল: GitHub Flow, ট্রাঙ্ক-ভিত্তিক ডেভেলপমেন্ট এবং সুরক্ষিত মেইন ব্রাঞ্চ'
        },
        {
          en: 'Lesson 2: Repository architecture: remote tracking, forks vs clones, Git LFS for large assets, and templates',
          bn: 'পাঠ ২: রিপোজিটরি আর্কিটেকচার: রিমোট ট্র্যাকিং, ফর্ক বনাম ক্লোন, বড় ফাইলের জন্য Git LFS এবং টেমপ্লেট'
        },
        {
          en: 'Lesson 3: Pull requests and merge strategies: 3-way merge commits, squash-and-merge, and rebase merges',
          bn: 'পাঠ ৩: পুল রিকোয়েস্ট ও মার্জ কৌশল: ৩-ওয়ে মার্জ কমিট, স্কোয়াশ-অ্যান্ড-মার্জ এবং রিবেস মার্জ'
        }
      ]
    },
    {
      title: {
        en: 'Stage 2 — Project Tracking, Reviews & Workflows',
        bn: 'ধাপ ২ — প্রজেক্ট ট্র্যাকিং, কোড রিভিউ এবং ওয়ার্কফ্লো'
      },
      items: [
        {
          en: 'Lesson 4: Issues, Project boards, Markdown issue templates, labels, milestones, and automated triage',
          bn: 'পাঠ ৪: ইস্যু, প্রজেক্ট বোর্ড, মার্কডাউন ইস্যু টেমপ্লেট, লেবেল, মাইলস্টোন এবং স্বয়ংক্রিয় ট্রায়াজ'
        },
        {
          en: 'Lesson 5: Code review workflows: multi-line comments, required reviews, suggested changes, and CODEOWNERS enforcement',
          bn: 'পাঠ ৫: কোড রিভিউ ওয়ার্কফ্লো: মাল্টি-লাইন কমেন্ট, আবশ্যকীয় রিভিউ, সাজেস্টেড পরিবর্তন এবং CODEOWNERS প্রয়োগ'
        },
        {
          en: 'Lesson 6: GitHub Actions CI/CD: workflow YAML triggers, runner environments, matrix builds, secrets, and environments',
          bn: 'পাঠ ৬: GitHub Actions CI/CD: ওয়ার্কফ্লো YAML ট্রিগার, রানার এনভায়রনমেন্ট, ম্যাট্রিক্স বিল্ড, সিক্রেট এবং এনভায়রনমেন্ট'
        }
      ]
    },
    {
      title: {
        en: 'Stage 3 — Enterprise Governance & Production Releases',
        bn: 'ধাপ ৩ — এন্টারপ্রাইজ গভর্ন্যান্স এবং প্রোডাকশন রিলিজ'
      },
      items: [
        {
          en: 'Lesson 7: Organization management: Role-Based Access Control (RBAC), team hierarchies, SAML SSO, and audit log analysis',
          bn: 'পাঠ ৭: অর্গানাইজেশন ব্যবস্থাপনা: রোল-ভিত্তিক অ্যাক্সেস কন্ট্রোল (RBAC), টিম হায়ারার্কি, SAML SSO এবং অডিট লগ বিশ্লেষণ'
        },
        {
          en: 'Lesson 8: Production release engineering: Git tags, automated release notes, binary artifact attachments, and GitHub Packages',
          bn: 'পাঠ ৮: প্রোডাকশন রিলিজ ইঞ্জিনিয়ারিং: Git ট্যাগ, স্বয়ংক্রিয় রিলিজ নোট, বাইনারি ফাইল সংযুক্তি এবং GitHub Packages'
        }
      ]
    }
  ],
  lessons: [
    BranchsAndTheBranchLesson,
    ReposAndTheRepoLesson,
    PullsAndThePullLesson,
    IssuesAndTheIssueLesson,
    ReviewsAndTheReviewLesson,
    ActionsAndTheActionLesson,
    TeamsAndTheTeamLesson,
    TheGithubReleaseLesson
  ],
  references: [],
  projects: [
    {
      title: {
        en: 'Automated CI/CD Pipeline with Matrix Testing & Container Scanning',
        bn: 'ম্যাট্রিক্স টেস্টিং এবং কন্টেইনার স্ক্যানিং সহ স্বয়ংক্রিয় CI/CD পাইপলাইন'
      },
      brief: {
        en: 'Build a production-grade GitHub Actions workflow. Implement a test matrix running across Node.js versions 18, 20, and 22, integrate automated security vulnerability scanning with Trivy and CodeQL, build multi-architecture Docker container images, and publish packages to GitHub Container Registry (GHCR) with environment approval protection rules.',
        bn: 'একটি প্রোডাকশন-গ্রেড GitHub Actions ওয়ার্কফ্লো তৈরি করুন। Node.js সংস্করণ ১৮, ২০ এবং ২২ জুড়ে একটি টেস্ট ম্যাট্রিক্স চালান, Trivy এবং CodeQL দিয়ে স্বয়ংক্রিয় নিরাপত্তা দুর্বলতা স্ক্যান করুন, ডকার কন্টেইনার ইমেজ তৈরি করুন এবং এনভায়রনমেন্ট অনুমোদন সুরক্ষা সহ GitHub Container Registry (GHCR)-এ প্যাকেজ প্রকাশ করুন।'
      }
    },
    {
      title: {
        en: 'Monorepo Governance System with CODEOWNERS & Branch Rulesets',
        bn: 'CODEOWNERS এবং ব্রাঞ্চ রুলসেট সহ মনোরেপো গভর্ন্যান্স সিস্টেম'
      },
      brief: {
        en: 'Architect a multi-team monorepo structure on GitHub. Define granular CODEOWNERS rules matching paths to engineering squads, enforce modern GitHub Repository Rulesets requiring linear history and signed commits, configure automated PR labelers, and automate stale issue deprecation using GitHub Actions.',
        bn: 'GitHub-এ একটি বহু-দলীয় মনোরেপো কাঠামো তৈরি করুন। বিভিন্ন ইঞ্জিনিয়ারিং দলের সাথে পাথ মিলিয়ে সূক্ষ্ম CODEOWNERS নিয়ম তৈরি করুন, লিনিয়ার হিস্ট্রি ও সাইন করা কমিট বাধ্যতামূলক করতে রিপোজিটরি রুলসেট প্রয়োগ করুন, স্বয়ংক্রিয় PR লেবেলার সেটআপ করুন এবং অকার্যকর ইস্যু বন্ধে GitHub Actions ব্যবহার করুন।'
      }
    },
    {
      title: {
        en: 'Enterprise RBAC, SAML SSO & Audit Compliance Automation',
        bn: 'এন্টারপ্রাইজ RBAC, SAML SSO এবং অডিট কমপ্লায়েন্স অটোমেশন'
      },
      brief: {
        en: 'Design an enterprise organization security architecture. Model team hierarchies with least-privilege permissions, map Identity Provider (IdP) groups to GitHub teams via SAML SSO, configure IP allowlists, stream audit log events to cloud SIEM analyzers via Webhooks, and enforce two-factor authentication (2FA) organization-wide.',
        bn: 'একটি এন্টারপ্রাইজ অর্গানাইজেশন সিকিউরিটি আর্কিটেকচার ডিজাইন করুন। সর্বনিম্ন প্রিভিলেজ দিয়ে টিম হায়ারার্কি সাজান, SAML SSO দিয়ে আইডেন্টিটি প্রোভাইডার গ্রুপকে GitHub টিমে ম্যাপ করুন, আইপি অনুমোদিত তালিকা সেট করুন, ওয়েবহুক দিয়ে অডিট লগ ক্লাউড SIEM সিস্টেমে পাঠান এবং বাধ্যতামূলক টু-ফ্যাক্টর অথেন্টিকেশন (2FA) নিশ্চিত করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Enforce branch protection rules on main: require passing CI status checks, linear commit history, and at least 1 approving review before merging.',
      bn: 'মেইন ব্রাঞ্চে সুরক্ষা নিয়ম বাধ্যতামূলক করুন: মার্জ করার পূর্বে সফল CI স্ট্যাটাস, লিনিয়ার হিস্ট্রি এবং অন্তত ১ জন সহকর্মীর অনুমোদন আবশ্যক করুন।'
    },
    {
      en: 'Prefer squash-and-merge for feature pull requests to keep the production git log clean, atomic, and easy to bisect or revert during outages.',
      bn: 'প্রোডাকশন গিট লগ পরিষ্কার, সংক্ষিপ্ত এবং সহজে রিভার্ট করার উপযোগী রাখতে ফিচার পুল রিকোয়েস্টে স্কোয়াশ-অ্যান্ড-মার্জ ব্যবহার করুন।'
    },
    {
      en: 'Never store plain-text secrets in repository code; leverage GitHub Actions encrypted Secrets and OIDC cloud federation (AWS, Azure, GCP).',
      bn: 'সোর্স কোডে কখনো প্লেইন-টেক্সট পাসওয়ার্ড বা এপিআই কি রাখবেন না; GitHub Actions এনক্রিপ্টেড সিক্রেট এবং OIDC ক্লাউড ফেডারেশন ব্যবহার করুন।'
    },
    {
      en: 'Declare a clear CODEOWNERS file at the repository root to automatically assign specialized subject-matter experts to review pull requests.',
      bn: 'রিপোজিটরির রুটে একটি স্পষ্ট CODEOWNERS ফাইল রাখুন যাতে নির্দিষ্ট কোড পরিবর্তনের সময় স্বয়ংক্রিয়ভাবে সংশ্লিষ্ট এক্সপার্টদের রিভিউয়ার হিসেবে যুক্ত করা যায়।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What are the precise architectural trade-offs between "Merge Commit", "Squash and Merge", and "Rebase and Merge" in GitHub pull requests?',
        bn: 'GitHub পুল রিকোয়েস্টে "Merge Commit", "Squash and Merge" এবং "Rebase and Merge"-এর মাঝে সুনির্দিষ্ট কাঠামোগত সুবিধা ও অসুবিধাগুলো কী?'
      },
      a: {
        en: 'A Merge Commit preserves the complete detailed branch commit history and chronological context using a 2-parent commit, but clutters the main commit log with temporary work-in-progress commits. Squash and Merge condenses all branch commits into exactly 1 clean atomic commit on main, making rollbacks and git bisect trivial, though individual branch commit history is flattened. Rebase and Merge replays all branch commits sequentially onto main creating a linear history with 1-parent commits without a merge bubble, but can cause complex commit timestamp disparities.',
        bn: 'Merge Commit একটি ২-প্যারেন্ট কমিটের মাধ্যমে ব্রাঞ্চের প্রতিটি ক্ষুদ্র কাজের ইতিহাস ও সময় অক্ষুণ্ণ রাখে, তবে মেইন ব্রাঞ্চের লগ এলোমেলো কমিটে ভরে ফেলে। Squash and Merge পুরো ব্রাঞ্চের সমস্ত কাজকে মেইন ব্রাঞ্চে ঠিক ১ টি পরিষ্কার ও একক কমিটে পরিণত করে, যা কোনো সমস্যায় দ্রুত রোলব্যাক ও ডিবাগ সহজ করে, যদিও ব্যক্তিগত কমিটের ইতিহাস হারিয়ে যায়। Rebase and Merge ব্রাঞ্চের প্রতিটি কমিটকে একের পর এক মেইনে স্থাপন করে মার্জ বাবল ছাড়া লিনিয়ার হিস্ট্রি তৈরি করে, তবে কমিট টাইমস্ট্যাম্পে জটিলতা সৃষ্টি হতে পারে।'
      }
    },
    {
      q: {
        en: 'How do GitHub Repository Rulesets improve branch protection governance across large enterprise organizations compared to legacy branch protection rules?',
        bn: 'ক্লাসিক ব্রাঞ্চ প্রটেকশন রুলসের তুলনায় আধুনিক GitHub Repository Rulesets কীভাবে বড় এন্টারপ্রাইজ প্রতিষ্ঠানে ব্রাঞ্চ শাসন ও নিরাপত্তা উন্নত করে?'
      },
      a: {
        en: 'Legacy branch protection rules applied strictly on a per-repository basis using rigid branch pattern strings. GitHub Rulesets allow organizational administrators to define centralized governance policies applied across hundreds of repositories simultaneously based on target criteria (e.g. all production repos, default branches, or tag patterns). Furthermore, Rulesets support bypass allowances for specific automated deployment roles, evaluate in evaluating/active dry-run modes, and prevent accidental deletion of critical tags or branches.',
        bn: 'পুরোনো ব্রাঞ্চ প্রটেকশন নিয়মগুলো কেবল প্রতিটি রিপোজিটরিতে আলাদাভাবে এবং সীমিত ব্রাঞ্চ প্যাটার্নে প্রয়োগ করা যেত। GitHub Rulesets প্রতিষ্ঠানের অ্যাডমিনিস্ট্রেটরদের শত শত রিপোজিটরিতে একযোগে কেন্দ্রীয় নিরাপত্তা নীতি (যেমন সমস্ত প্রোডাকশন রিপো বা ডিফল্ট ব্রাঞ্চ) প্রয়োগের ক্ষমতা দেয়। তাছাড়া Rulesets নির্দিষ্ট অটোমেশন রোলের জন্য বাইপাস সুবিধা, ড্রায়-রান মোডে কার্যকারিতা পরীক্ষা এবং সংবেদনশীল ট্যাগ বা ব্রাঞ্চের আকস্মিক মুছে যাওয়া সম্পূর্ণ রোধ করে।'
      }
    },
    {
      q: {
        en: 'How does GitHub Actions OpenID Connect (OIDC) cloud federation eliminate long-lived cloud credentials (like AWS secret access keys) from CI/CD runners?',
        bn: 'GitHub Actions OpenID Connect (OIDC) ক্লাউড ফেডারেশন কীভাবে CI/CD রানার থেকে দীর্ঘমেয়াদী ক্লাউড সিক্রেট (যেমন AWS secret access key) চিরতরে দূর করে?'
      },
      a: {
        en: 'Instead of storing static cloud credentials in GitHub Secrets that risk leaking, OIDC allows the GitHub Actions runner to request a short-lived, cryptographically signed JSON Web Token (JWT) directly from GitHub\'s token service for each workflow job. The cloud provider (AWS IAM, Google Cloud, Azure) validates the token signature against GitHub\'s public keys and inspects claims (like repository name, branch, and environment). Upon successful verification, the cloud provider issues a temporary, scoped credential valid for minutes, eliminating credential rotation burdens.',
        bn: 'GitHub Secrets-এ স্থায়ী ক্লাউড পাসওয়ার্ড রাখার বদলে যা ফাঁসের ঝুঁকি তৈরি করে, OIDC প্রতিটি জব চলাকালীন রানারকে GitHub-এর নিজস্ব সার্ভিস থেকে স্বল্পমেয়াদী এবং ক্রিপ্টোগ্রাফিকভাবে সাইন করা JSON Web Token (JWT) সংগ্রহ করতে দেয়। ক্লাউড প্রোভাইডার (AWS, GCP, Azure) GitHub-এর পাবলিক কি দিয়ে টোকেনের সত্যতা এবং রিপোজিটরি ও ব্রাঞ্চের নাম যাচাই করে। যাচাই সফল হলে ক্লাউড প্রোভাইডার কয়েক মিনিটের জন্য একটি অস্থায়ী অনুমতিপত্র প্রদান করে, যা পাসওয়ার্ড নবায়ন বা ফাঁসের সমস্ত ঝুঁকি চিরতরে দূর করে।'
      }
    },
    {
      q: {
        en: 'How does GitHub CODEOWNERS interact with branch protection rules to enforce multi-disciplinary compliance in collaborative monorepos?',
        bn: 'সহযোগিতামূলক মনোরেপোতে বহু-বিভাগীয় নিরাপত্তা ও মান নিশ্চিত করতে GitHub CODEOWNERS কীভাবে ব্রাঞ্চ প্রটেকশন রুলসের সাথে সমন্বয় করে কাজ করে?'
      },
      a: {
        en: 'The CODEOWNERS file maps directory paths and file extensions to specific GitHub users or teams (e.g. "/infra/ @devops-team", "/security/ @security-audit"). When branch protection is configured to "Require review from Code Owners", GitHub automatically requests reviews from the assigned squad whenever a PR modifies files matching their pattern. Furthermore, the PR cannot be merged until each affected code owner group explicitly approves, ensuring that security, infrastructure, and core backend code cannot be modified without specialized peer oversight.',
        bn: 'CODEOWNERS ফাইলটি বিভিন্ন ফোল্ডার ও ফাইল এক্সটেনশনকে সুনির্দিষ্ট টিম বা ইউজারের সাথে ম্যাপ করে (যেমন "/infra/ @devops-team", "/security/ @security-audit")। ব্রাঞ্চ প্রটেকশনে "Require review from Code Owners" চালু থাকলে কোনো পুল রিকোয়েস্টে সংশ্লিষ্ট ফাইল বদলানো মাত্রই GitHub স্বয়ংক্রিয়ভাবে ওই টিমের কাছে রিভিউ চায়। সবচেয়ে গুরুত্বপূর্ণ হলো, সমস্ত ক্ষতিগ্রস্ত কোড ওনার গ্রুপের স্পষ্ট অনুমোদন ছাড়া পিআরটি মার্জ করা সম্পূর্ণ নিষিদ্ধ থাকে, ফলে অভিজ্ঞদের চোখ এড়িয়ে কোনো নিরাপত্তা ঝুঁকি সিস্টেমে ঢুকতে পারে না।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Kubernetes coordinates contributions from tens of thousands of global engineers on GitHub, leveraging bot automation (Prow), multi-sig CODEOWNERS, and strict automated PR merge queues.',
      bn: 'Kubernetes বিশ্বব্যাপী হাজার হাজার ইঞ্জিনিয়ারের অবদান পরিচালনা করে GitHub-এ বট অটোমেশন (Prow), মাল্টিপল CODEOWNERS এবং কঠোর স্বয়ংক্রিয় মার্জ কিউ ব্যবহারের মাধ্যমে।'
    },
    {
      en: 'The Linux kernel organization utilizes GitHub mirrors and security advisories to coordinate vulnerability disclosures and cryptographic commit verification across international maintainers.',
      bn: 'লিনাক্স কার্নেল সংস্থা তাদের মিরর রিপোজিটরি এবং সিকিউরিটি অ্যাডভাইজরি পরিচালনা করে আন্তর্জাতিক মেইনটেইনারদের মাঝে ক্রিপ্টোগ্রাফিক কমিট যাচাইয়ের মাধ্যমে।'
    },
    {
      en: 'Automattic (WordPress.com) deploys hundreds of production services daily using trunk-based Git workflows, protected release tags, and automated GitHub Actions test pipelines.',
      bn: 'Automattic (WordPress.com) প্রতিদিন শত শত প্রোডাকশন সার্ভিস ডিপ্লয় করে ট্রাঙ্ক-ভিত্তিক গিট ওয়ার্কফ্লো, প্রটেক্টেড রিলিজ ট্যাগ এবং স্বয়ংক্রিয় GitHub Actions পাইপলাইন দিয়ে।'
    },
    {
      en: 'Netflix engineers publish enterprise open-source software libraries to GitHub Packages, enforcing linear commit histories and branch rulesets across collaborative multi-team repositories.',
      bn: 'Netflix ইঞ্জিনিয়াররা তাদের এন্টারপ্রাইজ ওপেন-সোর্স লাইব্রেরিগুলো GitHub Packages-এ প্রকাশ করেন এবং বহু-দলীয় রিপোজিটরিতে লিনিয়ার কমিট হিস্ট্রি ও ব্রাঞ্চ রুলসেট প্রয়োগ করেন।'
    }
  ]
};
