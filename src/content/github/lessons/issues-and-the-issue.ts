import type { Lesson } from '../../../lib/types';

export const IssuesAndTheIssueLesson: Lesson = {
  slug: 'issues-and-the-issue',
  tech: 'github',
  title: {
    en: 'GitHub Issues: Tracking, Labels, Milestones & Projects',
    bn: 'GitHub ইস্যু: ট্র্যাকিং, লেবেল, মাইলস্টোন ও প্রজেক্ট বোর্ড'
  },
  summary: {
    en: 'Organize team workflows with GitHub Issues, YAML template forms, multi-dimensional labels, sprint milestones, keyword PR closing, and automated GitHub Projects boards.',
    bn: 'GitHub ইস্যু, YAML টেমপ্লেট ফর্ম, বহুমাত্রিক লেবেল, স্প্রিন্ট মাইলস্টোন, কিওয়ার্ড PR ক্লোজিং এবং স্বয়ংক্রিয় GitHub প্রজেক্ট বোর্ড দিয়ে টিম ওয়ার্কফ্লো পরিচালনা করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'issue-tracking-intro',
      text: {
        en: '1. What are GitHub Issues?',
        bn: '১. GitHub ইস্যু কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GitHub Issues track bugs, tasks, and feature ideas for your software. Each issue functions as an actionable ticket with its own discussion thread, attachments, assignees, and history.',
        bn: 'GitHub ইস্যু আপনার সফটওয়্যারের বাগ, কাজ এবং নতুন ফিচারের ধারণা ট্র্যাক করে। প্রতিটি ইস্যু একটি নির্দিষ্ট টিকেটের মতো কাজ করে যার নিজস্ব আলোচনার থ্রেড, ফাইল ও ইতিহাস থাকে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Teams must distinguish between GitHub Issues and GitHub Discussions. Issues represent actionable engineering work items that will eventually be closed by a Pull Request or completed task. In contrast, GitHub Discussions provide open-ended community forums for brainstorming, user Q&A, and RFC design debates where 0 code changes are immediately required.',
        bn: 'টিমগুলোকে অবশ্যই GitHub Issues এবং GitHub Discussions-এর মধ্যকার পার্থক্য বুঝতে হবে। ইস্যু মূলত সুনির্দিষ্ট ইঞ্জিনিয়ারিং কাজের প্রতিনিধিত্ব করে যা পরবর্তীতে একটি পুল রিকোয়েস্ট বা সমাপ্ত কাজের মাধ্যমে বন্ধ করা হয়। অপরদিকে GitHub Discussions হলো ব্রেনস্টর্মিং, ব্যবহারকারীদের প্রশ্নোত্তর এবং সাধারণ আলোচনার ফোরাম যেখানে তাৎক্ষণিকভাবে ০ টি কোড পরিবর্তনের প্রয়োজন হয়।'
      }
    },
    {
      type: 'heading',
      id: 'issue-templates',
      text: {
        en: '2. Issue Templates and YAML Forms',
        bn: '২. ইস্যু টেমপ্লেট এবং YAML ফর্ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To eliminate incomplete bug reports, repositories use structured templates located in the .github/ISSUE_TEMPLATE/ directory. GitHub supports 2 distinct template formats:',
        bn: 'অসম্পূর্ণ ও অস্পষ্ট বাগ রিপোর্ট প্রতিরোধ করতে রিপোজিটরিতে .github/ISSUE_TEMPLATE/ ডিরেক্টরিতে সুসংগঠিত টেমপ্লেট রাখা হয়। GitHub ২ টি ভিন্ন টেমপ্লেট ফরম্যাট সমর্থন করে:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Markdown Templates (.md): Simple markdown files providing structured headings, reproduction steps, and expected behavior prompts for contributors to fill in manually.',
          bn: 'Markdown টেমপ্লেট (.md): সাধারণ মার্কডাউন ফাইল যাতে পূর্বনির্ধারিত শিরোনাম, সমস্যা পুনরাবৃত্তির ধাপ এবং প্রত্যাশিত ফলাফলের প্রম্পট থাকে যা কন্ট্রিবিউটররা লিখে পূরণ করেন।'
        },
        {
          en: 'YAML Issue Forms (.yml): GitHub-native interactive web forms featuring required input fields, multi-select dropdowns, checkboxes, and regex validations, preventing users from submitting empty or malformed tickets.',
          bn: 'YAML ইস্যু ফর্ম (.yml): GitHub এর ইন্টারঅ্যাক্টিভ ওয়েব ফর্ম যেখানে বাধ্যতামূলক ইনপুট ফিল্ড, ড্রপডাউন, চেকবক্স ও ভ্যালিডেশন থাকে, যা অসম্পূর্ণ টিকেট সাবমিট করা ঠেকায়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'issue-lifecycle-diagram',
      title: {
        en: 'GitHub Issue Lifecycle & Project Board Flow',
        bn: 'GitHub ইস্যু জীবনচক্র এবং প্রজেক্ট বোর্ড প্রবাহ'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">GitHub Issue Lifecycle &amp; Automated Board</text>' +
          '<!-- Column 1: Triage -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="135" height="320" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>' +
            '<text x="67" y="26" fill="#94a3b8" font-size="12" font-weight="bold" text-anchor="middle">1. TRIAGE</text>' +
            '<rect x="10" y="45" width="115" height="75" rx="6" fill="#0f172a" stroke="#ef4444" stroke-width="1"/>' +
            '<text x="18" y="65" fill="#f87171" font-size="10" font-weight="bold">#101 Bug Report</text>' +
            '<text x="18" y="82" fill="#94a3b8" font-size="9">Crash on auth</text>' +
            '<rect x="18" y="92" width="45" height="16" rx="3" fill="#dc2626"/>' +
            '<text x="40" y="103" fill="#ffffff" font-size="8" text-anchor="middle">p0-blocker</text>' +
            '<text x="67" y="160" fill="#64748b" font-size="10" text-anchor="middle">Needs review &amp;</text>' +
            '<text x="67" y="175" fill="#64748b" font-size="10" text-anchor="middle">label assignment</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 175 200 L 195 200" stroke="#38bdf8" stroke-width="2" marker-end="url(#arrow)"/>' +
          '<!-- Column 2: Backlog -->' +
          '<g transform="translate(200, 60)">' +
            '<rect width="135" height="320" rx="8" fill="#1e293b" stroke="#64748b" stroke-width="1.5"/>' +
            '<text x="67" y="26" fill="#cbd5e1" font-size="12" font-weight="bold" text-anchor="middle">2. BACKLOG</text>' +
            '<rect x="10" y="45" width="115" height="85" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="18" y="65" fill="#60a5fa" font-size="10" font-weight="bold">#101 Prioritized</text>' +
            '<text x="18" y="82" fill="#94a3b8" font-size="9">Milestone: v2.4</text>' +
            '<rect x="18" y="90" width="50" height="15" rx="3" fill="#2563eb"/>' +
            '<text x="43" y="101" fill="#ffffff" font-size="8" text-anchor="middle">Sprint 14</text>' +
            '<text x="18" y="120" fill="#38bdf8" font-size="9">Assigned: @dev1</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 345 200 L 365 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Column 3: In Progress -->' +
          '<g transform="translate(370, 60)">' +
            '<rect width="135" height="320" rx="8" fill="#1e293b" stroke="#eab308" stroke-width="1.5"/>' +
            '<text x="67" y="26" fill="#fde047" font-size="12" font-weight="bold" text-anchor="middle">3. IN PROGRESS</text>' +
            '<rect x="10" y="45" width="115" height="85" rx="6" fill="#0f172a" stroke="#eab308" stroke-width="1"/>' +
            '<text x="18" y="65" fill="#facc15" font-size="10" font-weight="bold">Branch Created</text>' +
            '<text x="18" y="82" fill="#94a3b8" font-size="9">fix/auth-crash</text>' +
            '<rect x="18" y="92" width="75" height="16" rx="3" fill="#ca8a04"/>' +
            '<text x="55" y="103" fill="#ffffff" font-size="8" text-anchor="middle">Active Coding</text>' +
            '<text x="67" y="160" fill="#fde047" font-size="10" text-anchor="middle">1 branch linked</text>' +
          '</g>' +
          '<!-- Arrow 3 -->' +
          '<path d="M 515 200 L 535 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Column 4: Review -->' +
          '<g transform="translate(540, 60)">' +
            '<rect width="110" height="320" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="55" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">4. REVIEW</text>' +
            '<rect x="8" y="45" width="94" height="85" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="14" y="65" fill="#c084fc" font-size="9" font-weight="bold">PR #102 Open</text>' +
            '<text x="14" y="82" fill="#38bdf8" font-size="8">"Closes #101"</text>' +
            '<rect x="14" y="92" width="65" height="15" rx="3" fill="#9333ea"/>' +
            '<text x="46" y="102" fill="#ffffff" font-size="8" text-anchor="middle">CI Passing</text>' +
          '</g>' +
          '<!-- Arrow 4 -->' +
          '<path d="M 660 200 L 675 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Column 5: Done -->' +
          '<g transform="translate(680, 60)">' +
            '<rect width="90" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="45" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">5. DONE</text>' +
            '<rect x="8" y="45" width="74" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="12" y="65" fill="#34d399" font-size="9" font-weight="bold">#101 CLOSED</text>' +
            '<text x="12" y="82" fill="#94a3b8" font-size="8">Merged PR</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'labels-and-milestones',
      text: {
        en: '3. Labels, Milestones, and Assignees',
        bn: '৩. লেবেল, মাইলস্টোন এবং অ্যাসাইনি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Engineering teams structure issue metadata across 3 primary dimensions to streamline triage and release planning:',
        bn: 'ইঞ্জিনিয়ারিং টিমগুলো টিকেট বাছাই এবং রিলিজ পরিকল্পনা সহজ করতে ৩ টি প্রধান মাত্রায় ইস্যু মেটাডাটা সাজায়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Labels (Color-Coded Taxonomy): Professional teams adopt a multi-tier naming schema such as "type: bug", "priority: p0-critical", "area: authentication", and "status: blocked". This enables 1-click filtering across hundreds of tickets.',
          bn: 'লেবেল (রঙিন শ্রেণিবিন্যাস): পেশাদার দলগুলো বহুস্তরীয় স্কিমা অনুসরণ করে, যেমন "type: bug", "priority: p0-critical", "area: authentication", এবং "status: blocked"। এর ফলে শত শত টিকেটের মাঝেও ১ ক্লিকেই ফিল্টার করা সম্ভব হয়।'
        },
        {
          en: 'Milestones (Time-Boxed Targets): Milestones group related issues and pull requests towards a concrete release deadline (e.g., "v2.0 Beta" due in 30 days). GitHub automatically renders a completion progress bar reflecting the ratio of closed tickets to total tickets.',
          bn: 'মাইলস্টোন (নির্দিষ্ট সময়ের লক্ষ্য): একটি নির্দিষ্ট রিলিজ ডেডলাইনের দিকে লক্ষ্য রেখে সম্পর্কিত ইস্যু ও পুল রিকোয়েস্টগুলোকে মাইলস্টোনে যুক্ত করা হয় (যেমন ৩০ দিনে "v2.0 Beta")। মোট টিকেটের বিপরীতে বন্ধ হওয়া টিকেটের অনুপাত দেখিয়ে GitHub একটি প্রগ্রেস বার প্রদর্শন করে।'
        },
        {
          en: 'Assignees: Up to 10 team members can be assigned to an issue, ensuring explicit personal ownership and automated inclusion in daily developer notification digests.',
          bn: 'অ্যাসাইনি: একটি ইস্যুতে সর্বোচ্চ ১০ জন টিম সদস্যকে দায়িত্ব দেওয়া যেতে পারে, যা সুস্পষ্ট ব্যক্তিমালিকানা নিশ্চিত করে এবং দৈনিক নোটিফিকেশনে অন্তর্ভুক্ত রাখে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'pr-linking-keywords',
      text: {
        en: '4. Linking Issues to Pull Requests with Keywords',
        bn: '৪. কিওয়ার্ডের মাধ্যমে ইস্যুতে পুল রিকোয়েস্ট লিংক করা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GitHub automates issue closure when pull requests are merged into a repository\'s default branch. By including specific closing keywords in your PR description or commit message, GitHub closes the issue automatically upon merge:',
        bn: 'যখন কোনো পুল রিকোয়েস্ট রিপোজিটরির ডিফল্ট ব্রাঞ্চে মার্জ হয়, তখন GitHub স্বয়ংক্রিয়ভাবে ইস্যু বন্ধ করতে পারে। PR এর বিবরণ বা কমিট মেসেজে নির্দিষ্ট কিওয়ার্ড লিখলে মার্জ সম্পন্ন হওয়ার সাথে সাথে সংশ্লিষ্ট ইস্যু বন্ধ হয়ে যায়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Supported Closing Keywords: "close", "closes", "closed", "fix", "fixes", "fixed", "resolve", "resolves", and "resolved". For example: "Closes #101" or "Resolves #42".',
          bn: 'সমর্থিত ক্লোজিং কিওয়ার্ড: "close", "closes", "closed", "fix", "fixes", "fixed", "resolve", "resolves", এবং "resolved"। উদাহরণস্বরূপ: "Closes #101" অথবা "Resolves #42"।'
        },
        {
          en: 'Cross-Repository Linking: To close an issue located in another repository within the same organization, reference the full repository path, such as "Fixes organization/backend-service#89".',
          bn: 'অন্য রিপোজিটরি লিংক করা: একই অর্গানাইজেশনের অন্য রিপোজিটরির কোনো ইস্যু বন্ধ করতে পুরো পাথ লিখতে হয়, যেমন "Fixes organization/backend-service#89"।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'projects-v2',
      text: {
        en: '5. GitHub Projects (v2): Modern Project Boards',
        bn: '৫. GitHub প্রজেক্টস (v2): আধুনিক প্রজেক্ট বোর্ড'
      }
    },
    {
      type: 'para',
      text: {
        en: 'GitHub Projects (v2) provides customizable spreadsheet and Kanban board workspaces built directly on top of issues and pull requests. Key capabilities include:',
        bn: 'GitHub প্রজেক্টস (v2) ইস্যু এবং পুল রিকোয়েস্টের উপর ভিত্তি করে তৈরি একটি কাস্টমাইজেবল স্প্রেডশিট ও কানবান বোর্ড প্রদান করে। এর প্রধান সুবিধাসমূহ:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Multiple Views: Toggle instantly between Table (spreadsheet), Board (Kanban cards), and Roadmap (Gantt chart timeline) layouts without changing underlying issue data.',
          bn: 'একাধিক ভিউ: অন্তর্নিহিত ইস্যু ডাটা অপরিবর্তিত রেখেই টেবিল (স্প্রেডশিট), বোর্ড (কানবান কার্ড) এবং রোডম্যাপ (গ্যান্ট চার্ট) ভিউয়ের মাঝে তাৎক্ষণিক স্যুইচ করা যায়।'
        },
        {
          en: 'Custom Fields: Add custom metadata columns such as Story Points (number), Sprint Iteration (date cycle), Estimation (hours), and Risk Level (single select).',
          bn: 'কাস্টম ফিল্ড: স্টোরি পয়েন্ট (সংখ্যা), স্প্রিন্ট ইটারেশন (তারিখ চক্র), কাজের আনুমানিক সময় (ঘণ্টা) এবং ঝুঁকির মাত্রা (সিঙ্গেল সিলেক্ট) কলাম যুক্ত করা যায়।'
        },
        {
          en: 'Built-in Workflow Automations: Automatically move issues to "In Progress" when a draft PR is opened, and move them to "Done" when the linked PR is successfully merged.',
          bn: 'স্বয়ংক্রিয় ওয়ার্কফ্লো: ড্রাফট PR তৈরি হলে ইস্যুটি স্বয়ংক্রিয়ভাবে "In Progress"-এ চলে যায় এবং PR মার্জ হলে স্বয়ংক্রিয়ভাবে "Done" কলামে সরে যায়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'issue-engine-simulator',
      text: {
        en: '6. Issue Triage & PR Auto-Close Engine in TypeScript',
        bn: '৬. TypeScript এ ইস্যু ট্রায়াজ ও PR অটো-ক্লোজ ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how an issue tracker parses PR commit messages for closing keywords, calculates milestone completion percentage, and automates board column transitions:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি ইস্যু ট্র্যাকার ক্লোজিং কিওয়ার্ড পার্স করে, মাইলস্টোনের সমাপ্তির শতাংশ হিসাব করে এবং প্রজেক্ট বোর্ডের স্ট্যাটাস পরিবর্তন পরিচালনা করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of GitHub issue tracking, closing keyword parsing, and milestone completion metrics.',
        bn: 'GitHub ইস্যু ট্র্যাকিং, ক্লোজিং কিওয়ার্ড পার্সিং এবং মাইলস্টোন সমাপ্তির মেট্রিক্সের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of GitHub Issue Management, Keyword Parsing & Milestones
interface GitHubIssue {
  id: number;
  title: string;
  labels: string[];
  status: 'open' | 'closed';
  milestoneId?: string;
}

interface Milestone {
  id: string;
  title: string;
  dueDate: string;
}

class IssueProjectBoard {
  private issues: Map<number, GitHubIssue> = new Map();
  private milestones: Map<string, Milestone> = new Map();

  addMilestone(id: string, title: string, dueDate: string): void {
    this.milestones.set(id, { id, title, dueDate });
  }

  createIssue(id: number, title: string, labels: string[], milestoneId?: string): GitHubIssue {
    const issue: GitHubIssue = { id, title, labels, status: 'open', milestoneId };
    this.issues.set(id, issue);
    return issue;
  }

  // Parses PR descriptions for keywords like "closes #101" or "fixes #102"
  processPullRequestMerge(prMessage: string): number[] {
    const closedIds: number[] = [];
    const keywordRegex = /\\b(close|closes|closed|fix|fixes|fixed|resolve|resolves|resolved)\\s+#(\\d+)/gi;
    let match: RegExpExecArray | null;

    while ((match = keywordRegex.exec(prMessage)) !== null) {
      const issueId = parseInt(match[2], 10);
      const issue = this.issues.get(issueId);
      if (issue && issue.status === 'open') {
        issue.status = 'closed';
        closedIds.push(issueId);
      }
    }
    return closedIds;
  }

  getMilestoneProgress(milestoneId: string): { total: number; closed: number; percent: number } {
    let total = 0;
    let closed = 0;
    for (const issue of this.issues.values()) {
      if (issue.milestoneId === milestoneId) {
        total++;
        if (issue.status === 'closed') closed++;
      }
    }
    const percent = total === 0 ? 0 : Math.round((closed / total) * 100);
    return { total, closed, percent };
  }
}

// 1. Initialize project board and milestone
const board = new IssueProjectBoard();
board.addMilestone('v2.0', 'Release 2.0 MVP', '2026-12-31');

// 2. Create 3 issues assigned to v2.0
board.createIssue(101, 'Fix auth token expiration bug', ['bug', 'p0-critical'], 'v2.0');
board.createIssue(102, 'Add dark mode theme toggle', ['enhancement', 'ui'], 'v2.0');
board.createIssue(103, 'Optimize image compression pipeline', ['performance'], 'v2.0');

// Initial Progress: 0 of 3 issues closed
const initialMetrics = board.getMilestoneProgress('v2.0');
console.log('Initial Milestone Progress: ' + initialMetrics.percent + '%'); // -> 0%

// 3. Merge PR with closing keywords: "Fixes #101 and Closes #102"
const prLog = 'feat: complete core sprint tasks. Fixes #101 and Closes #102';
const closedList = board.processPullRequestMerge(prLog);
console.log('Issues automatically closed: ' + closedList.length); // -> 2

// Updated Progress: 2 of 3 issues closed (67%)
const updatedMetrics = board.getMilestoneProgress('v2.0');
console.log('Updated Milestone Progress: ' + updatedMetrics.percent + '%'); // -> 67%
console.log('Remaining open issues: ' + (updatedMetrics.total - updatedMetrics.closed)); // -> 1`
    }
  ],
  exercises: [
    {
      id: 'issue-ex-1',
      kind: 'mcq',
      question: {
        en: 'Which PR description phrase will automatically close issue 42 when merged into the default branch?',
        bn: 'কোন PR বিবরণের বাক্যটি ডিফল্ট ব্রাঞ্চে মার্জ হওয়ার সাথে সাথে ৪২ নম্বর ইস্যুটি স্বয়ংক্রিয়ভাবে বন্ধ করবে?'
      },
      options: [
        {
          en: 'Closes #42',
          bn: 'Closes #42'
        },
        {
          en: 'Mentioning issue 42 in review',
          bn: 'রিভিউতে ৪২ নম্বর ইস্যুর উল্লেখ'
        },
        {
          en: 'Looking at ticket 42 later',
          bn: 'পরে ৪২ নম্বর টিকেট দেখার ইঙ্গিত'
        },
        {
          en: 'Branch named issue-42-temp',
          bn: 'issue-42-temp নামের একটি ব্রাঞ্চ'
        }
      ],
      answer: 0,
      hint: {
        en: 'GitHub looks for specific closing verbs followed by the hash and issue number.',
        bn: 'GitHub নির্দিষ্ট ক্লোজিং ভার্ব এবং তারপর হ্যাশ সহ ইস্যু নম্বর খোঁজে।'
      },
      explanation: {
        en: 'GitHub recognizes keywords like "closes #42", "fixes #42", or "resolves #42" to trigger automated issue closure upon merging into default branch.',
        bn: 'ডিফল্ট ব্রাঞ্চে মার্জের সময় স্বয়ংক্রিয়ভাবে ইস্যু বন্ধ করতে GitHub "closes #42", "fixes #42" বা "resolves #42" কিওয়ার্ড শনাক্ত করে।'
      }
    },
    {
      id: 'issue-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the primary benefit of GitHub YAML Issue Forms (.yml) over basic Markdown templates (.md)?',
        bn: 'সাধারণ Markdown টেমপ্লেটের (.md) তুলনায় GitHub YAML ইস্যু ফর্মের (.yml) প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'They enforce required fields, dropdown selections, and input validations in the web UI',
          bn: 'তারা ওয়েব UI-তে বাধ্যতামূলক ইনপুট ফিল্ড, ড্রপডাউন এবং ভ্যালিডেশন নিশ্চিত করে'
        },
        {
          en: 'They automatically compile TypeScript code into WebAssembly binaries',
          bn: 'তারা স্বয়ংক্রিয়ভাবে TypeScript কোডকে WebAssembly বাইনারিতে রূপান্তর করে'
        },
        {
          en: 'They prevent all public internet users from opening any issues',
          bn: 'তারা ইন্টারনেটের সব সাধারণ ব্যবহারকারীদের ইস্যু তৈরি করা সম্পূর্ণ বন্ধ করে'
        },
        {
          en: 'They double the maximum storage capacity of the repository Git LFS',
          bn: 'তারা রিপোজিটরির Git LFS স্টোরেজ ক্ষমতা দ্বিগুণ করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Forms provide web inputs rather than an unconstrained plain text box.',
        bn: 'ফর্মগুলো সাধারণ টেক্সট বক্সের বদলে সুনির্দিষ্ট ওয়েব ইনপুট প্রদান করে।'
      },
      explanation: {
        en: 'YAML Issue Forms generate structured web forms with validation rules, dropdowns, and mandatory fields, preventing users from submitting blank or low-quality reports.',
        bn: 'YAML ইস্যু ফর্ম নির্দিষ্ট নিয়ম, ড্রপডাউন এবং বাধ্যতামূলক ক্ষেত্র সহ সুসংগঠিত ফর্ম তৈরি করে, যা খালি বা অস্পষ্ট রিপোর্ট সাবমিট করা প্রতিহত করে।'
      }
    },
    {
      id: 'issue-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does GitHub visually represent progress inside a Milestone?',
        bn: 'একটি মাইলস্টোনের ভেতরে GitHub কীভাবে অগ্রগতির হার প্রদর্শন করে?'
      },
      options: [
        {
          en: 'A percentage progress bar calculating closed issues versus total assigned issues',
          bn: 'মোট ইস্যুর বিপরীতে বন্ধ হওয়া ইস্যুর সংখ্যার ভিত্তিতে একটি প্রগ্রেস বার প্রদর্শন করে'
        },
        {
          en: 'A red warning banner that locks the entire repository from new commits',
          bn: 'একটি লাল ব্যানার যা রিপোজিটরিতে নতুন কমিট করা সম্পূর্ণরূপে লক করে দেয়'
        },
        {
          en: 'An automated email sent to all 100 enterprise organization members daily',
          bn: 'প্রতিদিন অর্গানাইজেশনের ১০০ জন সদস্যকে পাঠানো একটি স্বয়ংক্রিয় ইমেইল'
        },
        {
          en: 'A pie chart tracking the lines of code written by each developer',
          bn: 'প্রতিটি ডেভেলপারের লেখা কোডের লাইনের অনুপাত ট্র্যাক করা একটি পাই চার্ট'
        }
      ],
      answer: 0,
      hint: {
        en: 'It compares closed items against open items in that milestone group.',
        bn: 'এটি সেই মাইলস্টোন দলের বন্ধ হওয়া আইটেমের সাথে খোলা আইটেমের তুলনা করে।'
      },
      explanation: {
        en: 'GitHub calculates milestone completion percentage based on the ratio of closed issues and pull requests to total issues in that milestone.',
        bn: 'মাইলস্টোনে থাকা মোট ইস্যুর মাঝে কতটি ক্লোজ হয়েছে তার অনুপাত হিসাব করে GitHub প্রগ্রেস বার দেখায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-issues-and-the-issue',
    title: {
      en: 'GitHub Issues, Projects, and Workflows Quiz',
      bn: 'GitHub ইস্যু, প্রজেক্টস এবং ওয়ার্কফ্লো কুইজ'
    },
    questions: [
      {
        id: 'issue-q1',
        kind: 'mcq',
        question: {
          en: 'When should a team use GitHub Discussions instead of GitHub Issues?',
          bn: 'কখন একটি টিমের GitHub ইস্যুর পরিবর্তে GitHub ডিসকাশন ব্যবহার করা উচিত?'
        },
        options: [
          {
            en: 'For open-ended brainstorming, community Q&A, and general ideas that lack immediate code action',
            bn: 'উন্মুক্ত আলোচনা, প্রশ্নোত্তর ও সাধারণ ধারণার জন্য যাতে তাৎক্ষণিক কোড পরিবর্তনের প্রয়োজন নেই'
          },
          {
            en: 'For reporting production crashes that require an immediate hotfix commit',
            bn: 'প্রোডাকশনের ক্রিটিক্যাল ক্র্যাশ রিপোর্টের জন্য যাতে তাৎক্ষণিক হটফিক্স প্রয়োজন'
          },
          {
            en: 'For defining CI/CD deployment pipelines inside GitHub Actions',
            bn: 'GitHub Actions এর ভেতর CI/CD ডিপ্লয়মেন্ট পাইপলাইন নির্ধারণ করার জন্য'
          },
          {
            en: 'For purchasing enterprise software license seats for teammates',
            bn: 'টিম মেম্বারদের জন্য এন্টারপ্রাইজ সফটওয়্যার লাইসেন্স সিট কেনার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Discussions provide forum-style conversations rather than actionable task tickets.',
          bn: 'ডিসকাশন মূলত ফোরামের মতো আলোচনার সুবিধা দেয়, নির্দিষ্ট কাজের টিকেট নয়।'
        },
        explanation: {
          en: 'Discussions are intended for conversation, brainstorming, and community help. Issues are reserved for actionable engineering tasks with concrete deliverables.',
          bn: 'ডিসকাশন উন্মুক্ত ব্রেনস্টর্মিং ও মতামতের জন্য আদর্শ। নির্দিষ্ট ইঞ্জিনিয়ারিং কাজ বা বাগকে ইস্যু হিসেবে ট্র্যাক করা হয়।'
        }
      },
      {
        id: 'issue-q2',
        kind: 'mcq',
        question: {
          en: 'In which repository folder must issue templates and forms be stored?',
          bn: 'রিপোজিটরির কোন ফোল্ডারে ইস্যু টেমপ্লেট ও ফর্মগুলো সংরক্ষণ করতে হয়?'
        },
        options: [
          {
            en: '.github/ISSUE_TEMPLATE/',
            bn: '.github/ISSUE_TEMPLATE/'
          },
          {
            en: 'src/templates/issues/',
            bn: 'src/templates/issues/'
          },
          {
            en: '.git/hooks/templates/',
            bn: '.git/hooks/templates/'
          },
          {
            en: 'config/github/forms/',
            bn: 'config/github/forms/'
          }
        ],
        answer: 0,
        hint: {
          en: 'It lives inside the dot-github folder under an issue template directory.',
          bn: 'এটি ডট-গিটহাব ফোল্ডারের ভেতর ইস্যু টেমপ্লেট ডিরেক্টরিতে থাকে।'
        },
        explanation: {
          en: 'GitHub automatically discovers templates located inside the .github/ISSUE_TEMPLATE/ directory in the default branch.',
          bn: 'ডিফল্ট ব্রাঞ্চের .github/ISSUE_TEMPLATE/ ডিরেক্টরিতে রাখা টেমপ্লেটগুলোকে GitHub স্বয়ংক্রিয়ভাবে প্রদর্শন করে।'
        }
      },
      {
        id: 'issue-q3',
        kind: 'mcq',
        question: {
          en: 'What is the maximum number of team members that can be assigned to a single GitHub Issue?',
          bn: 'একটিমাত্র GitHub ইস্যুতে সর্বোচ্চ কতজন টিম সদস্যকে অ্যাসাইনি হিসেবে নিযুক্ত করা যায়?'
        },
        options: [
          {
            en: '10 assignees',
            bn: '১০ জন অ্যাসাইনি'
          },
          {
            en: '1 assignee only',
            bn: '১ জন মাত্র অ্যাসাইনি'
          },
          {
            en: '50 assignees',
            bn: '৫০ জন অ্যাসাইনি'
          },
          {
            en: 'Unlimited assignees across the entire platform',
            bn: 'প্ল্যাটফর্মজুড়ে সীমাহীন অ্যাসাইনি'
          }
        ],
        answer: 0,
        hint: {
          en: 'GitHub caps assignees at ten developers per issue.',
          bn: 'GitHub প্রতি ইস্যুতে সর্বোচ্চ দশজন ডেভেলপারকে অনুমতি দেয়।'
        },
        explanation: {
          en: 'GitHub allows up to 10 assignees on an issue or pull request to indicate shared responsibility without spamming entire organizations.',
          bn: 'শেয়ার্ড রেসপনসিবিলিটি নিশ্চিত করতে GitHub প্রতি ইস্যুতে সর্বোচ্চ ১০ জন অ্যাসাইনি যুক্ত করার সুবিধা দেয়।'
        }
      },
      {
        id: 'issue-q4',
        kind: 'mcq',
        question: {
          en: 'Which view in GitHub Projects (v2) displays tasks chronologically on a timeline like a Gantt chart?',
          bn: 'GitHub প্রজেক্টস (v2)-এর কোন ভিউটি গ্যান্ট চার্টের মতো সময়রেখায় কাজগুলো ধারাবাহিকভাবে প্রদর্শন করে?'
        },
        options: [
          {
            en: 'Roadmap view',
            bn: 'রোডম্যাপ ভিউ'
          },
          {
            en: 'Table view',
            bn: 'টেবিল ভিউ'
          },
          {
            en: 'Board view',
            bn: 'বোর্ড ভিউ'
          },
          {
            en: 'Terminal view',
            bn: 'টার্মিনাল ভিউ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Roadmaps display time duration and date intervals across quarters.',
          bn: 'রোডম্যাপ সময়কাল ও তারিখের ব্যবধান চার্টে প্রদর্শন করে।'
        },
        explanation: {
          en: 'The Roadmap view plots issues and items on an interactive timeline based on date fields, providing an enterprise Gantt-chart perspective.',
          bn: 'রোডম্যাপ ভিউ তারিখের ওপর ভিত্তি করে টাইমলাইনে কাজগুলোকে উপস্থাপন করে যা গ্যান্ট চার্টের মতো কাজ করে।'
        }
      },
      {
        id: 'issue-q5',
        kind: 'mcq',
        question: {
          en: 'How do you cross-reference an issue from a completely different repository in the same organization?',
          bn: 'একই অর্গানাইজেশনের সম্পূর্ণ ভিন্ন একটি রিপোজিটরির ইস্যুকে কীভাবে রেফারেন্স করবেন?'
        },
        options: [
          {
            en: 'org/repo#issue-number (e.g. acme/backend#42)',
            bn: 'org/repo#issue-number (যেমন acme/backend#42)'
          },
          {
            en: 'git checkout issue-42',
            bn: 'git checkout issue-42 কমান্ড'
          },
          {
            en: 'import issue 42 from cloud',
            bn: 'ক্লাউড থেকে import issue 42 কমান্ড'
          },
          {
            en: 'tag @issue-42 in terminal',
            bn: 'টার্মিনালে @issue-42 ট্যাগ কমান্ড'
          }
        ],
        answer: 0,
        hint: {
          en: 'Specify the organization or owner, slash, repository name, followed by hash and number.',
          bn: 'অর্গানাইজেশনের নাম, স্ল্যাশ, রিপোজিটরির নাম এবং তারপর হ্যাশ ও নম্বর লিখুন।'
        },
        explanation: {
          en: 'Cross-repository issue references use the format "owner/repo#number" (or "Fixes owner/repo#number" to automatically close it on merge).',
          bn: 'অন্য রিপোজিটরির ইস্যু উল্লেখ করতে "owner/repo#number" ফরম্যাট ব্যবহার করা হয় (অথবা অটো-ক্লোজের জন্য "Fixes owner/repo#number")।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'reviews-and-the-review',
    title: {
      en: 'Code Reviews: Workflows, Suggestions & CODEOWNERS',
      bn: 'কোড রিভিউ: ওয়ার্কফ্লো, সাজেশন এবং CODEOWNERS'
    }
  }
};
