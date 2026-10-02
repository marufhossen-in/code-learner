import type { Lesson } from '../../../lib/types';

export const TheGithubReleaseLesson: Lesson = {
  slug: 'the-github-release',
  tech: 'github',
  title: {
    en: 'GitHub Releases: Tags, SemVer & Software Distribution',
    bn: 'GitHub রিলিজ: ট্যাগ, SemVer এবং সফটওয়্যার বিতরণ'
  },
  summary: {
    en: 'Distribute software packages with Git tags, Semantic Versioning (SemVer), automated GitHub release notes, multi-platform binary assets, and checksum verification.',
    bn: 'Git ট্যাগ, সিম্যান্টিক ভার্সনিং (SemVer), স্বয়ংক্রিয় GitHub রিলিজ নোট, মাল্টি-প্ল্যাটফর্ম বাইনারি ফাইল এবং চেকসাম যাচাইয়ের মাধ্যমে সফটওয়্যার প্যাকেজ বিতরণ করুন।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'tags-vs-releases',
      text: {
        en: '1. Git Tags versus GitHub Releases',
        bn: '১. Git ট্যাগ বনাম GitHub রিলিজ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you ship software to customers, Git tags mark milestones in your history. A Git tag points to a specific commit, freezing a point in time so you can inspect past versions reliably.',
        bn: 'যখন আপনি গ্রাহকদের কাছে সফটওয়্যার সরবরাহ করেন, Git ট্যাগ ইতিহাসের নির্দিষ্ট মাইলফলক চিহ্নিত করে। একটি Git ট্যাগ নির্দিষ্ট কমিটকে নির্দেশ করে সময়কে ফ্রেমবন্দী করে, ফলে যেকোনো অতীত সংস্করণ নির্ভরযোগ্যভাবে দেখা যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'While Git itself supports lightweight and annotated tags, GitHub Releases build an entire software distribution tier on top of Git tags. Engineers leverage 3 distinct capabilities provided by GitHub Releases:',
        bn: 'Git নিজস্বভাবে সাধারণ ও অ্যানোটেটেড ট্যাগ সমর্থন করে, কিন্তু GitHub Releases এই ট্যাগের ওপর ভিত্তি করে একটি পূর্ণাঙ্গ সফটওয়্যার বিতরণ প্ল্যাটফর্ম প্রদান করে। ডেভেলপাররা GitHub রিলিজের ৩ টি অনন্য সুবিধা ব্যবহার করেন:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Binary Asset Hosting: Attach compiled binaries, executable installers (.exe, .dmg, .deb), container bundles, and tarballs directly to the release page without bloating Git repository history.',
          bn: 'বাইনারি ফাইল হোস্টিং: Git রিপোজিটরির সাইজ বৃদ্ধি না করেই কম্পাইল করা বাইনারি, সফটওয়্যার ইনস্টলার (.exe, .dmg, .deb) বা টারবল সরাসরি রিলিজ পাতায় আপলোড করা যায়।'
        },
        {
          en: 'Automated Release Notes: GitHub automatically aggregates merged pull requests since the previous release, categorizing new features, bug fixes, and attributing external contributors.',
          bn: 'স্বয়ংক্রিয় রিলিজ নোট: পূর্ববর্তী রিলিজের পর থেকে মার্জ হওয়া সমস্ত পুল রিকোয়েস্ট একত্রিত করে GitHub নতুন ফিচার, বাগ ফিক্স এবং কন্ট্রিবিউটরদের তালিকা তৈরি করে।'
        },
        {
          en: 'Pre-release Flags: Mark builds as alpha, beta, or release candidate (RC) so automated package managers and risk-averse end users do not upgrade prematurely.',
          bn: 'প্রি-রিলিজ ফ্ল্যাগ: কোনো সংস্করণকে আলফা, বেটা বা রিলিজ ক্যান্ডিডেট (RC) চিহ্নিত করা যায় যেন সাধারণ ব্যবহারকারীরা অপরিপক্ক ভার্সনে আপগ্রেড না করেন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'semver-mechanics',
      text: {
        en: '2. Semantic Versioning (SemVer 2.0.0)',
        bn: '২. সিম্যান্টিক ভার্সনিং (SemVer 2.0.0)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Professional open source and enterprise projects adhere to the Semantic Versioning specification (SemVer 2.0.0). Versions follow the standard 3-part format: MAJOR.MINOR.PATCH (for example, 2.4.1):',
        bn: 'পেশাদার ওপেন সোর্স এবং এন্টারপ্রাইজ প্রজেক্টগুলো সিম্যান্টিক ভার্সনিং (SemVer 2.0.0) স্পেসিফিকেশন কঠোরভাবে অনুসরণ করে। ভার্সন নম্বর ৩ টি অংশে বিভক্ত থাকে: MAJOR.MINOR.PATCH (যেমন ২.৪.১):'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'MAJOR (e.g. 2.0.0): Incremented when you introduce breaking API changes that are incompatible with previous versions. Upgrading requires code changes by consumers.',
          bn: 'MAJOR (যেমন ২.০.০): পূর্বে থাকা API-তে কোনো ব্রেকিং পরিবর্তন আনলে এই সংখ্যা বাড়ে। এটি আপগ্রেড করলে ব্যবহারকারীদের তাদের কোডে সংশোধন আনতে হয়।'
        },
        {
          en: 'MINOR (e.g. 2.4.0): Incremented when you add new functionality in a backward-compatible manner. Existing code continues functioning without modifications.',
          bn: 'MINOR (যেমন ২.৪.০): সম্পূর্ণ ব্যাকওয়ার্ড-কম্প্যাটিবলভাবে নতুন ফিচার যোগ করলে এই সংখ্যা বাড়ে। ব্যবহারকারীদের বর্তমান কোড কোনো পরিবর্তন ছাড়াই স্বাভাবিকভাবে চলে।'
        },
        {
          en: 'PATCH (e.g. 2.4.1): Incremented when you make backward-compatible bug fixes or security patches that introduce 0 new features.',
          bn: 'PATCH (যেমন ২.৪.১): কোনো নতুন ফিচার না এনে শুধুমাত্র বাগ ফিক্স বা নিরাপত্তা প্যাচ প্রয়োগ করলে এই সংখ্যা বাড়ানো হয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'release-pipeline-diagram',
      title: {
        en: 'GitHub Release & Software Distribution Flow',
        bn: 'GitHub রিলিজ এবং সফটওয়্যার বিতরণ প্রক্রিয়া'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">Git Tag to GitHub Release Pipeline</text>' +
          '<!-- Stage 1 -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="160" height="320" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="80" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. GIT TAG PUSH</text>' +
            '<rect x="12" y="45" width="136" height="70" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="68" fill="#38bdf8" font-size="10" font-weight="bold">git tag -a v2.4.0</text>' +
            '<text x="20" y="86" fill="#94a3b8" font-size="9">-m "Release 2.4.0"</text>' +
            '<text x="20" y="102" fill="#34d399" font-size="9">git push origin v2.4.0</text>' +
            '<rect x="12" y="130" width="136" height="80" rx="6" fill="#0f172a" stroke="#3b82f6" stroke-width="1"/>' +
            '<text x="80" y="152" fill="#60a5fa" font-size="10" font-weight="bold" text-anchor="middle">Annotated Tag</text>' +
            '<text x="20" y="172" fill="#cbd5e1" font-size="9">Tagger: @lead</text>' +
            '<text x="20" y="190" fill="#cbd5e1" font-size="9">GPG Signed &#x2714;</text>' +
            '<text x="80" y="250" fill="#94a3b8" font-size="10" text-anchor="middle">Triggers CI Action</text>' +
            '<text x="80" y="268" fill="#38bdf8" font-size="10" text-anchor="middle">on: push: tags: [\'v*\']</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 200 200 L 225 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Stage 2 -->' +
          '<g transform="translate(235, 60)">' +
            '<rect width="170" height="320" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="85" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2. CI BUILD &amp; ASSETS</text>' +
            '<rect x="12" y="45" width="146" height="60" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="20" y="68" fill="#c084fc" font-size="10" font-weight="bold">Linux x86_64</text>' +
            '<text x="20" y="88" fill="#94a3b8" font-size="9">app-v2.4.0-linux.tar.gz</text>' +
            '<rect x="12" y="115" width="146" height="60" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="20" y="138" fill="#c084fc" font-size="10" font-weight="bold">macOS ARM64</text>' +
            '<text x="20" y="158" fill="#94a3b8" font-size="9">app-v2.4.0-darwin.dmg</text>' +
            '<rect x="12" y="185" width="146" height="60" rx="6" fill="#0f172a" stroke="#a855f7" stroke-width="1"/>' +
            '<text x="20" y="208" fill="#c084fc" font-size="10" font-weight="bold">Windows x64</text>' +
            '<text x="20" y="228" fill="#94a3b8" font-size="9">app-v2.4.0-win.exe</text>' +
            '<text x="85" y="280" fill="#34d399" font-size="10" text-anchor="middle">SHA-256 Checksums</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 415 200 L 440 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Stage 3 -->' +
          '<g transform="translate(450, 60)">' +
            '<rect width="170" height="320" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="85" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. AUTO CHANGELOG</text>' +
            '<rect x="12" y="45" width="146" height="150" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="68" fill="#34d399" font-size="10" font-weight="bold">Release Notes</text>' +
            '<text x="20" y="90" fill="#38bdf8" font-size="9">&#x2728; New Features:</text>' +
            '<text x="20" y="106" fill="#94a3b8" font-size="8">- JWT Auth (#104) @dev1</text>' +
            '<text x="20" y="120" fill="#94a3b8" font-size="8">- Dark mode (#105) @dev2</text>' +
            '<text x="20" y="140" fill="#facc15" font-size="9">&#x1F41B; Bug Fixes:</text>' +
            '<text x="20" y="156" fill="#94a3b8" font-size="8">- Memory leak (#108)</text>' +
            '<text x="20" y="176" fill="#c084fc" font-size="8">Full Changelog: v2.3...v2.4</text>' +
            '<text x="85" y="240" fill="#cbd5e1" font-size="10" text-anchor="middle">Parsed from PR titles</text>' +
            '<text x="85" y="258" fill="#34d399" font-size="10" text-anchor="middle">.github/release.yml</text>' +
          '</g>' +
          '<!-- Arrow 3 -->' +
          '<path d="M 630 200 L 650 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Stage 4 -->' +
          '<g transform="translate(660, 60)">' +
            '<rect width="115" height="320" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="57" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">4. PUBLISHED</text>' +
            '<rect x="10" y="45" width="95" height="70" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="57" y="70" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Release v2.4.0</text>' +
            '<text x="57" y="88" fill="#38bdf8" font-size="9" text-anchor="middle">Latest Release</text>' +
            '<text x="57" y="102" fill="#94a3b8" font-size="8" text-anchor="middle">3 binary assets</text>' +
            '<text x="57" y="160" fill="#cbd5e1" font-size="10" text-anchor="middle">GitHub CDN</text>' +
            '<text x="57" y="178" fill="#94a3b8" font-size="9" text-anchor="middle">npm / Docker</text>' +
            '<text x="57" y="196" fill="#34d399" font-size="9" text-anchor="middle">Live to world</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'automated-release-notes',
      text: {
        en: '3. Automated Release Notes Configuration (.github/release.yml)',
        bn: '৩. স্বয়ংক্রিয় রিলিজ নোট কনফিগারেশন (.github/release.yml)'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Teams configure changelog generation by adding a .github/release.yml configuration file. GitHub parses pull request labels to organize release notes into categorized sections:',
        bn: 'টিমগুলো .github/release.yml কনফিগারেশন ফাইল যোগ করে স্বয়ংক্রিয় চেঞ্জলগ তৈরি নিয়ন্ত্রণ করে। GitHub পুল রিকোয়েস্টের লেবেল স্ক্যান করে রিলিজ নোটকে বিভিন্ন বিভাগে সাজায়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Changelog Categories: Group PRs with label "feature" under "New Features", label "bug" under "Bug Fixes", and label "breaking" under "Breaking Changes".',
          bn: 'চেঞ্জলগ বিভাগ: "feature" লেবেলের PR গুলোকে "New Features", "bug" লেবেলের PR গুলোকে "Bug Fixes" এবং "breaking" লেবেলের PR গুলোকে "Breaking Changes" বিভাগে সাজানো হয়।'
        },
        {
          en: 'Exclude Rules: Automatically omit internal maintenance commits (such as Dependabot version updates) from public release notes to keep announcements concise.',
          bn: 'অপ্রয়োজনীয় কমিট বাদ দেওয়া: অভ্যন্তরীণ রক্ষণাবেক্ষণ বা ডিপেন্ডাবটের মতো অটোমেটেড আপডেটগুলোকে সাধারণ রিলিজ নোট থেকে বাদ দেওয়া যায়।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'semver-simulator',
      text: {
        en: '4. SemVer & Release Packaging Engine in TypeScript',
        bn: '৪. TypeScript এ SemVer ও রিলিজ প্যাকেজিং ইঞ্জিন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how a release automation engine parses semantic version strings, computes the next version based on change severity, and formats categorized release notes:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি রিলিজ অটোমেশন ইঞ্জিন সিম্যান্টিক ভার্সন পার্স করে, পরিবর্তনের তীব্রতা অনুযায়ী পরবর্তী ভার্সন নির্ধারণ করে এবং রিলিজ নোট তৈরি করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Semantic Versioning (SemVer), release note formatting, and asset packaging.',
        bn: 'সিম্যান্টিক ভার্সনিং (SemVer), রিলিজ নোট ফরম্যাটিং এবং অ্যাসেট প্যাকেজিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of Semantic Versioning (SemVer) and Automated GitHub Releases
interface SemVer {
  major: number;
  minor: number;
  patch: number;
}

interface PullRequestSummary {
  id: number;
  title: string;
  author: string;
  type: 'breaking' | 'feature' | 'fix';
}

function parseSemVer(v: string): SemVer {
  const clean = v.replace(/^v/, '');
  const [major, minor, patch] = clean.split('.').map((n) => parseInt(n, 10));
  return { major: major || 0, minor: minor || 0, patch: patch || 0 };
}

function formatSemVer(v: SemVer): string {
  return 'v' + v.major + '.' + v.minor + '.' + v.patch;
}

function bumpVersion(current: SemVer, bumpType: 'major' | 'minor' | 'patch'): SemVer {
  if (bumpType === 'major') {
    return { major: current.major + 1, minor: 0, patch: 0 };
  } else if (bumpType === 'minor') {
    return { major: current.major, minor: current.minor + 1, patch: 0 };
  } else {
    return { major: current.major, minor: current.minor, patch: current.patch + 1 };
  }
}

function generateRelease(
  currentTag: string,
  pullRequests: PullRequestSummary[]
): { nextTag: string; releaseNotes: string; assetCount: number } {
  const currentVer = parseSemVer(currentTag);
  
  // Determine highest bump severity
  let bumpType: 'major' | 'minor' | 'patch' = 'patch';
  if (pullRequests.some((p) => p.type === 'breaking')) {
    bumpType = 'major';
  } else if (pullRequests.some((p) => p.type === 'feature')) {
    bumpType = 'minor';
  }

  const nextVer = bumpVersion(currentVer, bumpType);
  const nextTag = formatSemVer(nextVer);

  // Group notes into categories
  const features = pullRequests.filter((p) => p.type === 'feature');
  const fixes = pullRequests.filter((p) => p.type === 'fix');

  let notes = '## Release ' + nextTag + '\\n\\n';
  if (features.length > 0) {
    notes += '### Features\\n';
    for (const f of features) {
      notes += '- #' + f.id + ' ' + f.title + ' (@' + f.author + ')\\n';
    }
  }
  if (fixes.length > 0) {
    notes += '### Bug Fixes\\n';
    for (const fx of fixes) {
      notes += '- #' + fx.id + ' ' + fx.title + ' (@' + fx.author + ')\\n';
    }
  }

  return { nextTag, releaseNotes: notes, assetCount: 3 };
}

// 1. Current release is v2.4.0
const currentReleaseTag = 'v2.4.0';

// 2. Incoming merged pull requests in this sprint
const sprintPRs: PullRequestSummary[] = [
  { id: 201, title: 'Add OAuth2 login support', author: 'alice', type: 'feature' },
  { id: 202, title: 'Fix token memory leak in cache', author: 'bob', type: 'fix' }
];

// 3. Generate new minor release: v2.5.0
const release = generateRelease(currentReleaseTag, sprintPRs);
console.log('Current Release: ' + currentReleaseTag); // -> v2.4.0
console.log('Next Release Tag: ' + release.nextTag); // -> v2.5.0
console.log('Attached Binary Assets Count: ' + release.assetCount); // -> 3

// 4. Test scenario: Breaking change forces major bump to v3.0.0
const breakingPRs: PullRequestSummary[] = [
  { id: 203, title: 'Redesign entire public API', author: 'charlie', type: 'breaking' }
];
const majorRelease = generateRelease(release.nextTag, breakingPRs);
console.log('Breaking Change Release: ' + majorRelease.nextTag); // -> v3.0.0`
    }
  ],
  exercises: [
    {
      id: 'rel-ex-1',
      kind: 'mcq',
      question: {
        en: 'According to Semantic Versioning (SemVer), which version component must be incremented when introducing a breaking API change?',
        bn: 'সিম্যান্টিক ভার্সনিং (SemVer) অনুযায়ী ব্রেকিং API পরিবর্তন আনলে ভার্সনের কোন অংশটি বাড়াতে হয়?'
      },
      options: [
        {
          en: 'MAJOR version (e.g. from 1.4.2 to 2.0.0)',
          bn: 'MAJOR ভার্সন (যেমন ১.৪.২ থেকে ২.০.০)'
        },
        {
          en: 'MINOR version (e.g. from 1.4.2 to 1.5.0)',
          bn: 'MINOR ভার্সন (যেমন ১.৪.২ থেকে ১.৫.০)'
        },
        {
          en: 'PATCH version (e.g. from 1.4.2 to 1.4.3)',
          bn: 'PATCH ভার্সন (যেমন ১.৪.২ থেকে ১.৪.৩)'
        },
        {
          en: 'BUILD metadata tag only',
          bn: 'শুধুমাত্র BUILD মেটাডাটা ট্যাগ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Breaking changes require incrementing the first number (MAJOR) and resetting the rest to 0.',
        bn: 'ব্রেকিং পরিবর্তনের জন্য প্রথম সংখ্যাটি (MAJOR) বাড়িয়ে বাকিগুলোকে ০ করতে হয়।'
      },
      explanation: {
        en: 'SemVer mandates that the MAJOR version number is incremented whenever incompatible, breaking API modifications are introduced.',
        bn: 'SemVer স্পেসিফিকেশন অনুযায়ী ব্যাকওয়ার্ড কম্প্যাটিবিলিটি নষ্টকারী ব্রেকিং পরিবর্তন আনলে MAJOR ভার্সন বৃদ্ধি করা আবশ্যক।'
      }
    },
    {
      id: 'rel-ex-2',
      kind: 'mcq',
      question: {
        en: 'What is the primary advantage of attaching compiled binaries to a GitHub Release rather than committing them into Git history?',
        bn: 'কম্পাইল করা বাইনারি ফাইলকে Git হিস্ট্রিতে কমিট করার চেয়ে GitHub রিলিজের সাথে যুক্ত করার প্রধান সুবিধা কী?'
      },
      options: [
        {
          en: 'It keeps the Git repository cloning fast and lightweight by avoiding Git object database bloat',
          bn: 'এটি Git অবজেক্ট ডাটাবেস স্ফীত হওয়া রোধ করে রিপোজিটরি ক্লোন করার গতি হালকা ও দ্রুত রাখে'
        },
        {
          en: 'It automatically translates software binaries into Python script code',
          bn: 'এটি স্বয়ংক্রিয়ভাবে সফটওয়্যার বাইনারিকে পাইথন স্ক্রিপ্ট কোডে রূপান্তর করে'
        },
        {
          en: 'It permanently disables pull requests from outside contributors',
          bn: 'এটি বাইরের কন্ট্রিবিউটরদের পুল রিকোয়েস্ট তৈরি করা চিরতরে বন্ধ করে'
        },
        {
          en: 'It eliminates the requirement of creating Git tags for releases',
          bn: 'এটি রিলিজের জন্য কোনো Git ট্যাগ তৈরির প্রয়োজনীয়তা দূর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Committing huge 50MB binaries into Git permanently bloats the .git directory forever.',
        bn: 'Git-এ ৫০ মেগাবাইটের বাইনারি কমিট করলে .git ডিরেক্টরি চিরতরে ভারী হয়ে যায়।'
      },
      explanation: {
        en: 'Git is designed to track delta text changes, not large opaque binaries. GitHub Releases host binaries on external CDN storage without bloating repository clone size.',
        bn: 'Git টেক্সটের পার্থক্য ট্র্যাক করতে তৈরি, ভারী বাইনারির জন্য নয়। GitHub রিলিজ সিডিএন স্টোরেজে বাইনারি রাখে ফলে রিপোজিটরির সাইজ বাড়ে না।'
      }
    },
    {
      id: 'rel-ex-3',
      kind: 'mcq',
      question: {
        en: 'Which configuration file controls the categorization of auto-generated release notes in GitHub?',
        bn: 'কোন কনফিগারেশন ফাইলটি GitHub-এ স্বয়ংক্রিয়ভাবে তৈরি হওয়া রিলিজ নোটের শ্রেণিবিন্যাস নিয়ন্ত্রণ করে?'
      },
      options: [
        {
          en: '.github/release.yml',
          bn: '.github/release.yml'
        },
        {
          en: 'config/releases.json',
          bn: 'config/releases.json'
        },
        {
          en: '.git/release-notes.xml',
          bn: '.git/release-notes.xml'
        },
        {
          en: 'assets/changelog.txt',
          bn: 'assets/changelog.txt'
        }
      ],
      answer: 0,
      hint: {
        en: 'It is stored in the dot-github folder as release.yml.',
        bn: 'এটি ডট-গিটহাব ফোল্ডারে release.yml হিসেবে থাকে।'
      },
      explanation: {
        en: 'GitHub parses .github/release.yml to define categories, label filters, and excluded contributors for automated changelogs.',
        bn: 'GitHub .github/release.yml ফাইলটি পড়ে স্বয়ংক্রিয় চেঞ্জলগের ক্যাটাগরি ও লেবেল ফিল্টারিং নির্ধারণ করে।'
      }
    }
  ],
  quiz: {
    id: 'quiz-the-github-release',
    title: {
      en: 'GitHub Releases and Semantic Versioning Quiz',
      bn: 'GitHub রিলিজ এবং সিম্যান্টিক ভার্সনিং কুইজ'
    },
    questions: [
      {
        id: 'rel-q1',
        kind: 'mcq',
        question: {
          en: 'What Git command creates an annotated tag with a release message and metadata?',
          bn: 'কোন Git কমান্ডটি রিলিজ বার্তা ও মেটাডাটা সহ একটি অ্যানোটেটেড ট্যাগ তৈরি করে?'
        },
        options: [
          {
            en: 'git tag -a v1.0.0 -m "Release v1.0.0"',
            bn: 'git tag -a v1.0.0 -m "Release v1.0.0"'
          },
          {
            en: 'git commit -m "tag v1.0.0"',
            bn: 'git commit -m "tag v1.0.0"'
          },
          {
            en: 'git checkout --release 1.0.0',
            bn: 'git checkout --release 1.0.0'
          },
          {
            en: 'git push --new-version 1.0.0',
            bn: 'git push --new-version 1.0.0'
          }
        ],
        answer: 0,
        hint: {
          en: 'The "-a" flag creates an annotated tag containing author, date, and message.',
          bn: '"-a" ফ্ল্যাগ লেখক, তারিখ ও বার্তা সহ একটি অ্যানোটেটেড ট্যাগ তৈরি করে।'
        },
        explanation: {
          en: 'Annotated tags (created with "git tag -a") are full Git objects with author identity, timestamp, and message, making them standard for software releases.',
          bn: '"git tag -a" দিয়ে তৈরি অ্যানোটেটেড ট্যাগ সম্পূর্ণ অবজেক্ট হিসেবে লেখক, তারিখ ও বার্তা সংরক্ষণ করে যা রিলিজের জন্য আদর্শ।'
        }
      },
      {
        id: 'rel-q2',
        kind: 'mcq',
        question: {
          en: 'In SemVer 2.0.0, what does a version string like "v2.0.0-rc.1" indicate?',
          bn: 'SemVer 2.0.0 তে "v2.0.0-rc.1" এর মতো একটি ভার্সন স্ট্রিং কী নির্দেশ করে?'
        },
        options: [
          {
            en: 'A pre-release candidate build intended for testing before official general availability',
            bn: 'একটি প্রি-রিলিজ ক্যান্ডিডেট সংস্করণ যা চূড়ান্ত রিলিজের আগে পরীক্ষার জন্য প্রস্তুত'
          },
          {
            en: 'A permanently broken commit that cannot be checked out',
            bn: 'একটি ত্রুটিপূর্ণ কমিট যা চেকআউট করা সম্ভব নয়'
          },
          {
            en: 'An internal draft pull request with zero reviews',
            bn: 'কোনো রিভিউ না থাকা একটি ড্রাফট পুল রিকোয়েস্ট'
          },
          {
            en: 'A release containing 0 lines of executable code',
            bn: '০ লাইন এক্সিকিউটেবল কোড বিশিষ্ট একটি রিলিজ'
          }
        ],
        answer: 0,
        hint: {
          en: '"rc" stands for Release Candidate, a pre-release version.',
          bn: '"rc" মানে রিলিজ ক্যান্ডিডেট (Release Candidate), যা একটি প্রি-রিলিজ ভার্সন।'
        },
        explanation: {
          en: 'Suffixes with a hyphen (such as -alpha, -beta, or -rc.1) denote pre-release builds, informing users that the version is under evaluation and not yet final.',
          bn: 'হাইফেনযুক্ত প্রত্যয় (যেমন -alpha, -beta, বা -rc.1) প্রি-রিলিজ সংস্করণ নির্দেশ করে যা এখনও চূড়ান্ত নয় এবং মূল্যায়নাধীন রয়েছে।'
        }
      },
      {
        id: 'rel-q3',
        kind: 'mcq',
        question: {
          en: 'Why is publishing SHA-256 checksum files alongside binary release assets an enterprise security best practice?',
          bn: 'বাইনারি রিলিজ ফাইলের সাথে SHA-256 চেকসাম প্রকাশ করা কেন এন্টারপ্রাইজ নিরাপত্তার সর্বোত্তম রীতি?'
        },
        options: [
          {
            en: 'It enables users to verify file integrity and confirm binaries have not been tampered with or corrupted in transit',
            bn: 'এটি ব্যবহারকারীদের ফাইলের অক্ষত অবস্থা যাচাই করতে দেয় এবং নিশ্চিত করে যে ফাইলটিতে কোনো কারচুপি হয়নি'
          },
          {
            en: 'It reduces the downloaded file size by exactly 50 percent',
            bn: 'এটি ডাউনলোড করা ফাইলের সাইজ ঠিক ৫০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'It allows the binary to run on macOS without a CPU processor',
            bn: 'এটি কোনো সিপিইউ প্রসেসর ছাড়াই ম্যাক ওএসে ফাইল চালানোর সুযোগ দেয়'
          },
          {
            en: 'It removes the need for compiling source code into machine instructions',
            bn: 'এটি সোর্স কোডকে মেশিন নির্দেশে কম্পাইল করার প্রয়োজনীয়তা দূর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Checksums prove that downloaded files match the author compiled hash.',
          bn: 'চেকসাম প্রমাণ করে যে ডাউনলোড করা ফাইলের হ্যাশ লেখকের তৈরি হ্যাশের সাথে হুবহু মিলেছে।'
        },
        explanation: {
          en: 'Publishing cryptographic checksums (such as sha256sums.txt) allows consumers to mathematically verify that downloaded packages have not been altered or compromised.',
          bn: 'SHA-256 চেকসাম প্রকাশের ফলে ব্যবহারকারীরা নিশ্চিত হতে পারেন যে ডাউনলোড করা ফাইলে কোনো ম্যালওয়্যার ঢোকানো হয়নি বা ফাইল নষ্ট হয়নি।'
        }
      },
      {
        id: 'rel-q4',
        kind: 'mcq',
        question: {
          en: 'Which GitHub Actions event trigger is standardly configured to automate software releases upon pushing a version tag?',
          bn: 'কোন GitHub Actions ইভেন্ট ট্রিগারটি একটি ভার্সন ট্যাগ পুশ করার সাথে সাথে সফটওয়্যার রিলিজ স্বয়ংক্রিয় করতে মানসম্মতভাবে ব্যবহৃত হয়?'
        },
        options: [
          {
            en: 'on: push: tags: [\'v*\']',
            bn: 'on: push: tags: [\'v*\']'
          },
          {
            en: 'on: pull_request_closed',
            bn: 'on: pull_request_closed'
          },
          {
            en: 'on: issues_opened',
            bn: 'on: issues_opened'
          },
          {
            en: 'on: wiki_edited',
            bn: 'on: wiki_edited'
          }
        ],
        answer: 0,
        hint: {
          en: 'It triggers on pushes to tags matching the "v*" glob pattern.',
          bn: 'এটি "v*" গ্লব প্যাটার্নের সাথে মিল থাকা ট্যাগে পুশ হলে সক্রিয় হয়।'
        },
        explanation: {
          en: 'Configuring "on: push: tags: [\'v*\']" triggers the workflow whenever a tag starting with "v" (like v1.0.0) is pushed to GitHub, kicking off the build and release pipeline.',
          bn: '"on: push: tags: [\'v*\']" কনফিগার করলে "v" দিয়ে শুরু হওয়া যেকোনো ট্যাগ পুশ করলেই স্বয়ংক্রিয়ভাবে রিলিজ পাইপলাইন চালু হয়ে যায়।'
        }
      },
      {
        id: 'rel-q5',
        kind: 'mcq',
        question: {
          en: 'What occurs when an existing release on GitHub is marked with the "Latest release" badge?',
          bn: 'GitHub-এ কোনো রিলিজকে "Latest release" ব্যাজ দিয়ে চিহ্নিত করলে কী ঘটে?'
        },
        options: [
          {
            en: 'It becomes the primary recommended production version displayed on the repository homepage and API endpoints',
            bn: 'এটি রিপোজিটরির হোমপেজ এবং API এন্ডপয়েন্টে প্রদর্শিত মূল প্রস্তাবিত প্রোডাকশন ভার্সন হয়ে ওঠে'
          },
          {
            en: 'All older releases are permanently deleted from GitHub servers',
            bn: 'পুরোনো সব রিলিজ GitHub সার্ভার থেকে চিরতরে মুছে ফেলা হয়'
          },
          {
            en: 'The repository is converted into read-only archive mode',
            bn: 'রিপোজিটরিটি রিড-অনলি আর্কাইভ মোডে রূপান্তরিত হয়'
          },
          {
            en: 'Git renames the default branch from main to latest',
            bn: 'Git ডিফল্ট ব্রাঞ্চের নাম main থেকে বদলে latest করে ফেলে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The latest release is highlighted on the right sidebar of the repository page.',
          bn: 'সর্বশেষ রিলিজটি রিপোজিটরির ডানপাশের সাইডবারে বিশেষভাবে প্রদর্শিত হয়।'
        },
        explanation: {
          en: 'The "Latest" badge identifies the stable production version for downloaders, directing users and package managers to the most current reliable build.',
          bn: '"Latest" ব্যাজটি ব্যবহারকারীদের জন্য সবচেয়ে নির্ভরযোগ্য ও স্থিতিশীল প্রোডাকশন ভার্সন নির্দেশ করে।'
        }
      }
    ]
  }
};
