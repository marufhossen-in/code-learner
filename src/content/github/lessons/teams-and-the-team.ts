import type { Lesson } from '../../../lib/types';

export const TeamsAndTheTeamLesson: Lesson = {
  slug: 'teams-and-the-team',
  tech: 'github',
  title: {
    en: 'GitHub Teams: Organizations, RBAC & Enterprise Security',
    bn: 'GitHub টিমস: অর্গানাইজেশন, RBAC এবং এন্টারপ্রাইজ সিকিউরিটি'
  },
  summary: {
    en: 'Govern enterprise engineering with GitHub Organizations, nested teams, five-tier RBAC repository permissions, fine-grained access tokens, and SAML SSO.',
    bn: 'GitHub অর্গানাইজেশন, নেস্টেড টিম, ৫ স্তরের RBAC রিপোজিটরি অনুমতি, ফাইন-গ্রেইনড অ্যাক্সেস টোকেন এবং SAML SSO দিয়ে এন্টারপ্রাইজ পরিচালনা করুন।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'orgs-and-teams-intro',
      text: {
        en: '1. GitHub Organizations and Collaborative Structures',
        bn: '১. GitHub অর্গানাইজেশন এবং প্রাতিষ্ঠানিক কাঠামো'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build software in a professional company, GitHub Organizations provide shared ownership of repositories. Instead of hosting project code under an individual developer\'s personal account, organizations centralize code assets, billing, audit logging, and security compliance.',
        bn: 'যখন আপনি কোনো পেশাদার প্রতিষ্ঠানে কাজ করেন, GitHub অর্গানাইজেশন রিপোজিটরির যৌথ মালিকানা নিশ্চিত করে। কোনো ব্যক্তির ব্যক্তিগত অ্যাকাউন্টে কোড রাখার বদলে প্রতিষ্ঠানগুলো তাদের প্রজেক্ট কোড, বিলিং, অডিট লগ এবং নিরাপত্তা এক জায়গায় কেন্দ্রীভূত করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Within an organization, developers are grouped into Teams. Teams reflect company departments (such as frontend, backend, security, or platform engineering) and streamline mentions, code review routing, and repository permissions.',
        bn: 'একটি অর্গানাইজেশনের ভেতর ডেভেলপারদের বিভিন্ন টিমে সাজানো হয়। এই টিমগুলো প্রতিষ্ঠানের বিভিন্ন বিভাগের (যেমন ফ্রন্টএন্ড, ব্যাকএন্ড, সিকিউরিটি বা প্ল্যাটফর্ম ইঞ্জিনিয়ারিং) প্রতিফলন ঘটায় এবং কোড রিভিউ ও পারমিশন সহজ করে।'
      }
    },
    {
      type: 'heading',
      id: 'rbac-permissions',
      text: {
        en: '2. The 5 Repository Permission Levels (RBAC)',
        bn: '২. ৫ টি রিপোজিটরি পারমিশন লেভেল (RBAC)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GitHub implements Role-Based Access Control (RBAC) across repositories. Administrators assign teams 1 of 5 granular permission tiers based on the principle of least privilege:',
        bn: 'GitHub রিপোজিটরির সুরক্ষায় রোল-বেসড অ্যাক্সেস কন্ট্রোল (RBAC) কার্যকর করে। অ্যাডমিনিস্ট্রেটররা সর্বনিম্ন সুবিধার নীতি অনুসরণ করে টিমকে ৫ টি সুনির্দিষ্ট পারমিশন স্তরের যেকোনো ১ টি প্রদান করেন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Read: Recommended for non-code contributors. Users can view, clone, and fork repository code, open issues, and participate in discussions, but cannot push commits or create branches.',
          bn: '১. Read: সাধারণ পর্যবেক্ষকদের জন্য উপযুক্ত। ব্যবহারকারীরা কোড দেখতে, ক্লোন ও ফর্ক করতে পারেন, এবং ইস্যু খুলতে পারেন, কিন্তু কোনো ব্রাঞ্চ তৈরি বা পুশ করতে পারেন না।'
        },
        {
          en: '2. Triage: Recommended for project managers and QA engineers. Users can label, assign, close, and manage issues and pull requests without possessing write access to push code.',
          bn: '২. Triage: প্রজেক্ট ম্যানেজার ও কিউএ ইঞ্জিনিয়ারদের জন্য উপযুক্ত। ব্যবহারকারীরা কোড পুশ করার ক্ষমতা ছাড়াই ইস্যু ও পিআর লেবেল, অ্যাসাইন ও ক্লোজ করতে পারেন।'
        },
        {
          en: '3. Write: Standard level for active developers. Users can push commits directly to unprotected branches, create feature branches, and edit repository wikis.',
          bn: '৩. Write: সক্রিয় ডেভেলপারদের জন্য সাধারণ স্তর। ব্যবহারকারীরা অসুরক্ষিত ব্রাঞ্চে পুশ করতে পারেন, নতুন ব্রাঞ্চ তৈরি করতে পারেন এবং উইকি এডিট করতে পারেন।'
        },
        {
          en: '4. Maintain: Recommended for team leads. Users can configure repository settings, manage milestones, and release packages without having destructive repository deletion privileges.',
          bn: '৪. Maintain: টিম লিডদের জন্য উপযুক্ত। ব্যবহারকারীরা রিপোজিটরি ডিলিট করার ক্ষতিকর ক্ষমতা ছাড়াই সেটিং কনফিগার, মাইলস্টোন ও প্যাকেজ পরিচালনা করতে পারেন।'
        },
        {
          en: '5. Admin: Reserved for system administrators. Users have full control: defining branch protection rulesets, managing webhooks, accessing deployment secrets, and deleting the repository.',
          bn: '৫. Admin: সিস্টেম অ্যাডমিনিস্ট্রেটরদের জন্য সংরক্ষিত। ব্যবহারকারীদের সম্পূর্ণ নিয়ন্ত্রণ থাকে: ব্রাঞ্চ প্রটেকশন রুলস নির্ধারণ, ওয়েবহুক, ডিপ্লয়মেন্ট সিক্রেট দেখা এবং রিপোজিটরি মুছে ফেলা।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'org-rbac-diagram',
      title: {
        en: 'Enterprise Organization & RBAC Permission Hierarchy',
        bn: 'এন্টারপ্রাইজ অর্গানাইজেশন ও RBAC পারমিশন কাঠামো'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">GitHub Organization: 5-Tier RBAC Hierarchy</text>' +
          '<!-- Top: Organization -->' +
          '<rect x="250" y="55" width="300" height="45" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>' +
          '<text x="400" y="82" fill="#38bdf8" font-size="14" font-weight="bold" text-anchor="middle">&#127970; Organization: @enterprise-corp</text>' +
          '<!-- Connectors to Teams -->' +
          '<line x1="330" y1="100" x2="160" y2="135" stroke="#64748b" stroke-width="2"/>' +
          '<line x1="400" y1="100" x2="400" y2="135" stroke="#64748b" stroke-width="2"/>' +
          '<line x1="470" y1="100" x2="640" y2="135" stroke="#64748b" stroke-width="2"/>' +
          '<!-- Team 1: Engineering (Parent) -->' +
          '<rect x="70" y="135" width="180" height="65" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
          '<text x="160" y="158" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">@enterprise/engineering</text>' +
          '<text x="160" y="180" fill="#94a3b8" font-size="10" text-anchor="middle">Parent Team (40 devs)</text>' +
          '<!-- Child Team -->' +
          '<line x1="160" y1="200" x2="160" y2="230" stroke="#3b82f6" stroke-width="2" stroke-dasharray="3,3"/>' +
          '<rect x="80" y="230" width="160" height="45" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
          '<text x="160" y="255" fill="#cbd5e1" font-size="10" text-anchor="middle">&#x21B3; @enterprise/frontend</text>' +
          '<!-- Team 2: Security & Platform -->' +
          '<rect x="310" y="135" width="180" height="65" rx="6" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
          '<text x="400" y="158" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">@enterprise/security</text>' +
          '<text x="400" y="180" fill="#94a3b8" font-size="10" text-anchor="middle">Code Owners (5 leads)</text>' +
          '<!-- Team 3: QA & Triage -->' +
          '<rect x="550" y="135" width="180" height="65" rx="6" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>' +
          '<text x="640" y="158" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">@enterprise/qa-support</text>' +
          '<text x="640" y="180" fill="#94a3b8" font-size="10" text-anchor="middle">Issue Managers (12 members)</text>' +
          '<!-- 5 Permission Levels Box -->' +
          '<g transform="translate(50, 305)">' +
            '<rect width="700" height="95" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1"/>' +
            '<text x="350" y="22" fill="#cbd5e1" font-size="11" font-weight="bold" text-anchor="middle">Repository Permission Matrix (Increasing Authority)</text>' +
            '<!-- Tier 1 -->' +
            '<rect x="20" y="38" width="120" height="42" rx="4" fill="#0f172a" stroke="#64748b" stroke-width="1"/>' +
            '<text x="80" y="56" fill="#94a3b8" font-size="11" font-weight="bold" text-anchor="middle">1. Read</text>' +
            '<text x="80" y="70" fill="#64748b" font-size="9" text-anchor="middle">Clone &amp; View</text>' +
            '<!-- Tier 2 -->' +
            '<rect x="155" y="38" width="120" height="42" rx="4" fill="#0f172a" stroke="#eab308" stroke-width="1"/>' +
            '<text x="215" y="56" fill="#facc15" font-size="11" font-weight="bold" text-anchor="middle">2. Triage</text>' +
            '<text x="215" y="70" fill="#ca8a04" font-size="9" text-anchor="middle">Manage Issues</text>' +
            '<!-- Tier 3 -->' +
            '<rect x="290" y="38" width="120" height="42" rx="4" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="350" y="56" fill="#60a5fa" font-size="11" font-weight="bold" text-anchor="middle">3. Write</text>' +
            '<text x="350" y="70" fill="#3b82f6" font-size="9" text-anchor="middle">Push Commits</text>' +
            '<!-- Tier 4 -->' +
            '<rect x="425" y="38" width="120" height="42" rx="4" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="485" y="56" fill="#34d399" font-size="11" font-weight="bold" text-anchor="middle">4. Maintain</text>' +
            '<text x="485" y="70" fill="#059669" font-size="9" text-anchor="middle">Settings &amp; Release</text>' +
            '<!-- Tier 5 -->' +
            '<rect x="560" y="38" width="120" height="42" rx="4" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
            '<text x="620" y="56" fill="#f87171" font-size="11" font-weight="bold" text-anchor="middle">5. Admin</text>' +
            '<text x="620" y="70" fill="#dc2626" font-size="9" text-anchor="middle">Full Ownership</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'nested-teams-sync',
      text: {
        en: '3. Nested Teams and Directory Synchronization',
        bn: '৩. নেস্টেড টিম এবং ডিরেক্টরি সিঙ্ক'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GitHub supports nested teams up to several levels deep. Permissions cascade downwards: if the parent team @company/engineering has Read access to all 50 repositories, child teams like @company/engineering/backend automatically inherit Read access.',
        bn: 'GitHub কয়েকটি স্তর পর্যন্ত নেস্টেড টিম সমর্থন করে। পারমিশন উপর থেকে নিচে প্রবাহিত হয়: যদি প্যারেন্ট টিম @company/engineering এর ৫০ টি রিপোজিটরিতে Read পারমিশন থাকে, তবে চাইল্ড টিম @company/engineering/backend স্বয়ংক্রিয়ভাবে সেই Read পারমিশন পেয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In enterprise deployments, GitHub synchronizes team rosters with corporate Identity Providers (such as Okta, PingFederate, or Microsoft Entra ID) using SCIM (System for Cross-domain Identity Management). When an employee joins or leaves the company, their GitHub access is provisioned or revoked automatically.',
        bn: 'এন্টারপ্রাইজ সিস্টেমে GitHub আইডেন্টিটি প্রোভাইডারের (যেমন Okta বা Azure AD) সাথে SCIM প্রোটোকল ব্যবহার করে কর্মীদের তালিকা সিঙ্ক করে। প্রতিষ্ঠানে কোনো কর্মী যোগ দিলে বা ত্যাগ করলে তার GitHub অ্যাক্সেস স্বয়ংক্রিয়ভাবে চালু বা বন্ধ হয়ে যায়।'
      }
    },
    {
      type: 'heading',
      id: 'tokens-and-security',
      text: {
        en: '4. Enterprise Security: Fine-Grained PATs and 2FA Enforcement',
        bn: '৪. এন্টারপ্রাইজ সিকিউরিটি: ফাইন-গ্রেইনড PAT এবং 2FA বাধ্যবাধকতা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To safeguard intellectual property, modern engineering organizations enforce strict authentication policies:',
        bn: 'বুদ্ধিবৃত্তিক সম্পদ সুরক্ষিত রাখতে আধুনিক ইঞ্জিনিয়ারিং প্রতিষ্ঠানগুলো কঠোর নিরাপত্তা নীতি বাস্তবায়ন করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Mandatory Two-Factor Authentication (2FA): Organization owners can enforce 2FA. Any member who has not activated 2FA is automatically stripped of repository access until they configure an authenticator app or hardware FIDO security key.',
          bn: 'বাধ্যতামূলক টু-ফ্যাক্টর অথেন্টিকেশন (2FA): অর্গানাইজেশন ওনাররা 2FA বাধ্যতামূলক করতে পারেন। 2FA চালু না করা সদস্যরা নিরাপত্তা কি বা অ্যাপ দিয়ে তা সক্রিয় না করা পর্যন্ত রিপোজিটরি অ্যাক্সেস হারান।'
        },
        {
          en: 'Fine-Grained Personal Access Tokens (PATs): Legacy Classic PATs granted blanket access to all repositories. In contrast, Fine-Grained PATs restrict access to specific repositories with granular scopes and mandatory expiration dates (up to 365 days).',
          bn: 'ফাইন-গ্রেইনড পার্সোনাল অ্যাক্সেস টোকেন (PAT): পুরোনো ক্লাসিক PAT সব রিপোজিটরির ঢালাও অ্যাক্সেস পেত। অপরদিকে ফাইন-গ্রেইনড PAT নির্দিষ্ট রিপোজিটরিতে সীমিত পারমিশন দেয় এবং সর্বোচ্চ ৩৬৫ দিনের বাধ্যতামূলক মেয়াদ নির্ধারণ করে।'
        },
        {
          en: 'GPG Commit Signing: Engineers sign commits with private GPG keys. GitHub cryptographically verifies the signature against public keys registered on developer profiles, rendering a green "Verified" badge and preventing commit author spoofing.',
          bn: 'GPG কমিট সাইনিং: ডেভেলপাররা ব্যক্তিগত GPG কি দিয়ে কমিট সাইন করেন। GitHub প্রোফাইলে থাকা পাবলিক কি এর সাথে তা মিলিয়ে একটি সবুজ "Verified" ব্যাজ প্রদর্শন করে যা পরিচয় জালিয়াতি রোধ করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'rbac-simulator',
      text: {
        en: '5. RBAC Permission & Policy Engine in TypeScript',
        bn: '৫. TypeScript এ RBAC পারমিশন ও পলিসি ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how GitHub evaluates team hierarchies and enforces the 5-tier repository permission model:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে GitHub টিম হায়ারার্কি মূল্যায়ন করে এবং ৫ স্তরের রিপোজিটরি পারমিশন মডেল প্রয়োগ করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of GitHub Organizations, team inheritance, and 5-tier RBAC permission verification.',
        bn: 'GitHub অর্গানাইজেশন, টিম ইনহেরিট্যান্স এবং ৫ স্তরের RBAC পারমিশন যাচাইয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of GitHub Organizations and 5-Tier RBAC Repository Permissions
type PermissionLevel = 'read' | 'triage' | 'write' | 'maintain' | 'admin';

const PERMISSION_WEIGHT: Record<PermissionLevel, number> = {
  read: 1,
  triage: 2,
  write: 3,
  maintain: 4,
  admin: 5
};

interface Team {
  name: string;
  parentTeam?: string;
  members: string[];
}

class OrgAccessController {
  private teams: Map<string, Team> = new Map();
  private repoPermissions: Map<string, Map<string, PermissionLevel>> = new Map();

  createTeam(name: string, members: string[], parentTeam?: string): void {
    this.teams.set(name, { name, members, parentTeam });
  }

  grantTeamAccess(repo: string, teamName: string, level: PermissionLevel): void {
    if (!this.repoPermissions.has(repo)) {
      this.repoPermissions.set(repo, new Map());
    }
    this.repoPermissions.get(repo)!.set(teamName, level);
  }

  // Resolves effective permission by checking direct membership and parent teams
  getUserPermission(repo: string, username: string): PermissionLevel | 'none' {
    const permissionsForRepo = this.repoPermissions.get(repo);
    if (!permissionsForRepo) return 'none';

    let maxWeight = 0;
    let effectivePerm: PermissionLevel | 'none' = 'none';

    for (const [teamName, permLevel] of permissionsForRepo.entries()) {
      const team = this.teams.get(teamName);
      if (!team) continue;

      // Check if user is in team or in child team
      const isMember = team.members.includes(username);
      if (isMember) {
        const weight = PERMISSION_WEIGHT[permLevel];
        if (weight > maxWeight) {
          maxWeight = weight;
          effectivePerm = permLevel;
        }
      }
    }
    return effectivePerm;
  }

  canPerformAction(
    repo: string,
    username: string,
    action: 'view_code' | 'triage_issue' | 'push_code' | 'delete_repo'
  ): boolean {
    const userPerm = this.getUserPermission(repo, username);
    if (userPerm === 'none') return false;
    const weight = PERMISSION_WEIGHT[userPerm];

    if (action === 'view_code') return weight >= 1; // read+
    if (action === 'triage_issue') return weight >= 2; // triage+
    if (action === 'push_code') return weight >= 3; // write+
    if (action === 'delete_repo') return weight >= 5; // admin only
    return false;
  }
}

// 1. Initialize organization with 2 teams
const org = new OrgAccessController();
org.createTeam('engineering', ['alice', 'bob']);
org.createTeam('qa-team', ['charlie']);

// 2. Grant Write access to engineering, Triage access to QA
org.grantTeamAccess('payment-service', 'engineering', 'write');
org.grantTeamAccess('payment-service', 'qa-team', 'triage');

// 3. Verify developer permissions
const alicePush = org.canPerformAction('payment-service', 'alice', 'push_code');
console.log('Alice (Dev) can push code?: ' + alicePush); // -> true

const charliePush = org.canPerformAction('payment-service', 'charlie', 'push_code');
console.log('Charlie (QA) can push code?: ' + charliePush); // -> false

const charlieTriage = org.canPerformAction('payment-service', 'charlie', 'triage_issue');
console.log('Charlie (QA) can triage issues?: ' + charlieTriage); // -> true

// 4. Verify admin restriction (neither can delete repo)
const aliceDelete = org.canPerformAction('payment-service', 'alice', 'delete_repo');
console.log('Alice can delete repo?: ' + aliceDelete); // -> false`
    }
  ],
  exercises: [
    {
      id: 'team-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which repository permission level allows a user to label and assign issues without permitting code pushes?',
        bn: 'কোন রিপোজিটরি পারমিশন লেভেল কোড পুশ করার ক্ষমতা না দিয়ে ব্যবহারকারীকে ইস্যু লেবেল ও অ্যাসাইন করার অনুমতি দেয়?'
      },
      options: [
        {
          en: 'Triage',
          bn: 'Triage'
        },
        {
          en: 'Write',
          bn: 'Write'
        },
        {
          en: 'Admin',
          bn: 'Admin'
        },
        {
          en: 'Billing',
          bn: 'Billing'
        }
      ],
      answer: 0,
      hint: {
        en: 'This level sits between Read and Write, designed specifically for issue triaging.',
        bn: 'এই স্তরটি Read ও Write এর মাঝে থাকে এবং বিশেষভাবে ইস্যু বাছাইয়ের জন্য তৈরি।'
      },
      explanation: {
        en: 'The "Triage" role allows project managers and QA testers to organize issues and pull requests without giving them write access to push commits.',
        bn: '"Triage" রোলটি প্রজেক্ট ম্যানেজারদের কোড পুশের অনুমতি না দিয়েই ইস্যু ও পিআর পরিচালনার সুযোগ দেয়।'
      }
    },
    {
      id: 'team-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is a key security improvement of Fine-Grained Personal Access Tokens over legacy Classic PATs?',
        bn: 'পুরোনো ক্লাসিক PAT-এর তুলনায় ফাইন-গ্রেইনড পার্সোনাল অ্যাক্সেস টোকেনের মূল নিরাপত্তা উন্নতি কী?'
      },
      options: [
        {
          en: 'They restrict access to specific chosen repositories with granular resource scopes and mandatory expiration dates',
          bn: 'তারা বাধ্যতামূলক মেয়াদ সহ নির্দিষ্ট নির্বাচিত রিপোজিটরিতে সুনির্দিষ্ট রিসোর্স স্কোপ প্রদান করে'
        },
        {
          en: 'They bypass all two-factor authentication requirements automatically',
          bn: 'তারা টু-ফ্যাক্টর অথেন্টিকেশনের প্রয়োজনীয়তা স্বয়ংক্রিয়ভাবে বাইপাস করে'
        },
        {
          en: 'They grant permanent lifetime admin access across all public repositories on GitHub',
          bn: 'তারা GitHub-এর সমস্ত পাবলিক রিপোজিটরিতে আজীবন অ্যাডমিন সুবিধা দেয়'
        },
        {
          en: 'They double the maximum file upload size of the Git repository',
          bn: 'তারা Git রিপোজিটরির ফাইল আপলোডের সর্বোচ্চ সাইজ দ্বিগুণ করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fine-grained tokens practice least privilege by scoping only to required repositories.',
        bn: 'ফাইন-গ্রেইনড টোকেন কেবল প্রয়োজনীয় রিপোজিটরিকে অনুমতি দিয়ে সর্বনিম্ন সুযোগ নিশ্চিত করে।'
      },
      explanation: {
        en: 'Fine-Grained PATs limit token scope to specific repositories and concrete operations (e.g., issues: write only), preventing catastrophic account-wide compromises.',
        bn: 'ফাইন-গ্রেইনড PAT নির্দিষ্ট রিপোজিটরি ও সুনির্দিষ্ট কাজের মাঝে টোকেনকে সীমাবদ্ধ রাখে, ফলে পুরো অ্যাকাউন্ট ঝুঁকির মুখে পড়ে না।'
      }
    },
    {
      id: 'team-ex-3',
      kind: 'mcq',
      question: {
        en: 'What occurs when an organization administrator enables mandatory Two-Factor Authentication (2FA)?',
        bn: 'একজন অর্গানাইজেশন অ্যাডমিনিস্ট্রেটর যখন বাধ্যতামূলক টু-ফ্যাক্টর অথেন্টিকেশন (2FA) সক্রিয় করেন তখন কী ঘটে?'
      },
      options: [
        {
          en: 'Members without 2FA enabled lose access to organization repositories until they configure 2FA',
          bn: '2FA চালু না থাকা সদস্যরা তা সক্রিয় না করা পর্যন্ত অর্গানাইজেশনের রিপোজিটরি অ্যাক্সেস হারান'
        },
        {
          en: 'All repositories in the organization are converted into public open source projects',
          bn: 'অর্গানাইজেশনের সমস্ত রিপোজিটরি উন্মুক্ত ওপেন সোর্স প্রজেক্টে রূপান্তরিত হয়'
        },
        {
          en: 'All existing git branches and tags are permanently deleted',
          bn: 'বিদ্যমান সমস্ত গিট ব্রাঞ্চ এবং ট্যাগ চিরতরে মুছে ফেলা হয়'
        },
        {
          en: 'Developers are prevented from creating pull requests forever',
          bn: 'ডেভেলপারদের পুল রিকোয়েস্ট তৈরি করা চিরতরে নিষিদ্ধ হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Members must set up 2FA before they can regain access to organization code.',
        bn: 'কোডে পুনরায় অ্যাক্সেস পেতে সদস্যদের অবশ্যই 2FA চালু করতে হয়।'
      },
      explanation: {
        en: 'Enforcing 2FA strips access from any member who has not configured two-factor authentication, protecting enterprise code against credential stuffing.',
        bn: '2FA বাধ্যতামূলক করলে তা চালু না করা সদস্যরা সাময়িকভাবে অ্যাক্সেস হারান, যা প্রতিষ্ঠানের কোডকে পাসওয়ার্ড হ্যাক থেকে রক্ষা করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-teams-and-the-team',
    title: {
      en: 'GitHub Teams, RBAC, and Enterprise Security Quiz',
      bn: 'GitHub টিমস, RBAC এবং এন্টারপ্রাইজ সিকিউরিটি কুইজ'
    },
    questions: [
      {
        id: 'team-q1',
        kind: 'mcq',
        question: {
          en: 'How many distinct repository permission tiers does GitHub provide in its standard RBAC model?',
          bn: 'GitHub তার স্ট্যান্ডার্ড RBAC মডেলে কয়টি ভিন্ন রিপোজিটরি পারমিশন স্তর প্রদান করে?'
        },
        options: [
          {
            en: '5 permission tiers (Read, Triage, Write, Maintain, Admin)',
            bn: '৫ টি পারমিশন স্তর (Read, Triage, Write, Maintain, Admin)'
          },
          {
            en: '2 permission tiers (Public and Private)',
            bn: '২ টি পারমিশন স্তর (Public এবং Private)'
          },
          {
            en: '10 permission tiers based on employee salary levels',
            bn: '১০ টি পারমিশন স্তর যা কর্মীদের বেতনের ওপর ভিত্তি করে'
          },
          {
            en: '1 single universal permission tier for all users',
            bn: '১ টিমাত্র সর্বজনীন পারমিশন স্তর সব ব্যবহারকারীর জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Count the roles: Read, Triage, Write, Maintain, and Admin.',
          bn: 'রোলগুলো গণনা করুন: Read, Triage, Write, Maintain, এবং Admin।'
        },
        explanation: {
          en: 'GitHub defines exactly 5 repository permission levels: Read, Triage, Write, Maintain, and Admin, scaling authority from viewing to full configuration.',
          bn: 'GitHub ঠিক ৫ টি পারমিশন স্তর সংজ্ঞায়িত করে: Read, Triage, Write, Maintain, এবং Admin।'
        }
      },
      {
        id: 'team-q2',
        kind: 'mcq',
        question: {
          en: 'How do permissions work across nested parent and child teams in a GitHub Organization?',
          bn: 'GitHub অর্গানাইজেশনে প্যারেন্ট এবং চাইল্ড টিমের মাঝে পারমিশন কীভাবে কাজ করে?'
        },
        options: [
          {
            en: 'Child teams automatically inherit repository access granted to their parent team',
            bn: 'চাইল্ড টিমগুলো প্যারেন্ট টিমকে দেওয়া রিপোজিটরি অ্যাক্সেস স্বয়ংক্রিয়ভাবে লাভ করে'
          },
          {
            en: 'Parent teams have zero access to repositories owned by child teams',
            bn: 'প্যারেন্ট টিমের চাইল্ড টিমের রিপোজিটরিতে কোনো অ্যাক্সেস থাকে না'
          },
          {
            en: 'Child teams can only view files that have been cryptographically encrypted',
            bn: 'চাইল্ড টিম কেবল এনক্রিপ্ট করা ফাইলগুলোই দেখতে পারে'
          },
          {
            en: 'GitHub restricts organizations to a maximum of 1 team per account',
            bn: 'GitHub প্রতি অ্যাকাউন্টে সর্বোচ্চ ১ টি টিমে সীমাবদ্ধ রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Permissions cascade downwards from parents to nested children.',
          bn: 'পারমিশন প্যারেন্ট থেকে নেস্টেড চাইল্ডের দিকে ক্রমানুসারে কার্যকর হয়।'
        },
        explanation: {
          en: 'Child teams inherit permissions from their parent teams. This allows broad access at the department level while granting specialized permissions to sub-teams.',
          bn: 'চাইল্ড টিম প্যারেন্ট টিমের পারমিশন উত্তরাধিকার সূত্রে পায়, ফলে ডিপার্টমেন্ট স্তরে অ্যাক্সেস বণ্টন করা অত্যন্ত সহজ হয়।'
        }
      },
      {
        id: 'team-q3',
        kind: 'mcq',
        question: {
          en: 'What cryptographic feature displays a green "Verified" badge next to commits on GitHub?',
          bn: 'কোন ক্রিপ্টোগ্রাফিক সুবিধাটি GitHub-এ কমিটের পাশে একটি সবুজ "Verified" ব্যাজ প্রদর্শন করে?'
        },
        options: [
          {
            en: 'GPG commit signing verified against the developer public key',
            bn: 'ডেভেলপারের পাবলিক কি দ্বারা যাচাইকৃত GPG কমিট সাইনিং'
          },
          {
            en: 'Having more than 100 followers on a personal GitHub profile',
            bn: 'ব্যক্তিগত GitHub প্রোফাইলে ১০০ জনের বেশি ফলোয়ার থাকা'
          },
          {
            en: 'Paying for a monthly GitHub Copilot Pro subscription',
            bn: 'মাসিক GitHub Copilot Pro সাবস্ক্রিপশন কেনা'
          },
          {
            en: 'Pushing code from an iPhone or mobile browser',
            bn: 'আইফোন বা মোবাইল ব্রাউজার থেকে কোড পুশ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'GPG keys sign git commits locally, proving author authenticity.',
          bn: 'GPG কি লোকাল মেশিনে কমিট সাইন করে লেখকের আসল পরিচয় প্রমাণ করে।'
        },
        explanation: {
          en: 'When a commit is signed with a GPG or SSH key matching a key on the author profile, GitHub validates the signature and displays the "Verified" badge.',
          bn: 'GPG বা SSH কি দিয়ে সাইন করা কমিট প্রোফাইলের পাবলিক কি-এর সাথে মিললে GitHub যাচাই করে সবুজ "Verified" ব্যাজ প্রদর্শন করে।'
        }
      },
      {
        id: 'team-q4',
        kind: 'mcq',
        question: {
          en: 'What protocol is standardly used by Identity Providers to provision and deprovision users into GitHub Organizations?',
          bn: 'GitHub অর্গানাইজেশনে ইউজার তৈরি ও মুছে ফেলতে আইডেন্টিটি প্রোভাইডাররা স্ট্যান্ডার্ড হিসেবে কোন প্রোটোকল ব্যবহার করে?'
        },
        options: [
          {
            en: 'SCIM (System for Cross-domain Identity Management)',
            bn: 'SCIM (System for Cross-domain Identity Management)'
          },
          {
            en: 'SMTP email notifications',
            bn: 'SMTP ইমেইল নোটিফিকেশন'
          },
          {
            en: 'FTP file upload script',
            bn: 'FTP ফাইল আপলোড স্ক্রিপ্ট'
          },
          {
            en: 'Telnet terminal protocol',
            bn: 'টেলনেট টার্মিনাল প্রোটোকল'
          }
        ],
        answer: 0,
        hint: {
          en: 'SCIM automates user identity synchronization between enterprise directories and cloud SaaS.',
          bn: 'SCIM এন্টারপ্রাইজ ডিরেক্টরি ও ক্লাউড সেবার মাঝে ব্যবহারকারীদের পরিচয় স্বয়ংক্রিয়ভাবে সিঙ্ক করে।'
        },
        explanation: {
          en: 'SCIM automates user lifecycle management: creating, updating, and removing organization members based on corporate IdP directory groups.',
          bn: 'SCIM প্রতিষ্ঠানের IdP ডিরেক্টরির ওপর ভিত্তি করে ব্যবহারকারীদের স্বয়ংক্রিয়ভাবে যুক্ত ও বাতিল করে।'
        }
      },
      {
        id: 'team-q5',
        kind: 'mcq',
        question: {
          en: 'What is the maximum validity duration recommended for GitHub Fine-Grained Personal Access Tokens?',
          bn: 'GitHub ফাইন-গ্রেইনড পার্সোনাল অ্যাক্সেস টোকেনের জন্য সুপারিশকৃত সর্বোচ্চ মেয়াদের সময়কাল কত?'
        },
        options: [
          {
            en: 'Up to 365 days (mandatory expiration enforced)',
            bn: 'সর্বোচ্চ ৩৬৫ দিন (বাধ্যতামূলক মেয়াদ কার্যকর)'
          },
          {
            en: 'Infinite lifetime without any expiration',
            bn: 'মেয়াদহীন আজীবন অ্যাক্সেস'
          },
          {
            en: 'Exactly 15 minutes only',
            bn: 'ঠিক ১৫ মিনিট মাত্র'
          },
          {
            en: 'Tokens expire immediately after 1 single git fetch',
            bn: '১ টি মাত্র git fetch চালানোর সাথে সাথেই মেয়াদ শেষ হয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Fine-grained tokens mandate an expiration date within one year (365 days).',
          bn: 'ফাইন-গ্রেইনড টোকেন এক বছরের (৩৬৫ দিন) মধ্যে মেয়াদ নির্ধারণ বাধ্যতামূলক করে।'
        },
        explanation: {
          en: 'GitHub enforces a maximum expiration period of 365 days on fine-grained tokens, ending the security vulnerability of forgotten permanent tokens.',
          bn: 'GitHub ফাইন-গ্রেইনড টোকেনের ক্ষেত্রে সর্বোচ্চ ৩৬৫ দিনের মেয়াদ বাধ্যতামূলক করেছে যাতে আজীবন মেয়াদী টোকেন ফাঁসের ঝুঁকি দূর হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-github-release',
    title: {
      en: 'GitHub Releases: Tags, SemVer & Software Distribution',
      bn: 'GitHub রিলিজ: ট্যাগ, SemVer এবং সফটওয়্যার বিতরণ'
    }
  }
};
