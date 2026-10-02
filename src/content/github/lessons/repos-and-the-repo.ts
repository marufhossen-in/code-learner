import type { Lesson } from '../../../lib/types';

export const ReposAndTheRepoLesson: Lesson = {
  slug: 'repos-and-the-repo',
  tech: 'github',
  title: {
    en: 'Repository Architecture: Remotes, Forks, Clones & Git LFS',
    bn: 'রিপোজিটরি আর্কিটেকচার: রিমোট, ফর্ক, ক্লোন এবং Git LFS'
  },
  summary: {
    en: 'Master repository topography and asset management on GitHub. Understand remote tracking across origin and upstream targets, contrast enterprise clone models with open-source fork workflows, handle gigabyte-scale binary files efficiently using Git LFS (Large File Storage) pointers, and bootstrap standardized projects using Repository Templates.',
    bn: 'GitHub-এ রিপোজিটরি আর্কিটেকচার এবং এসেট ম্যানেজমেন্ট সম্পূর্ণ আয়ত্ত করুন। origin এবং upstream রিমোট ট্র্যাকিং, এন্টারপ্রাইজ ক্লোন বনাম ওপেন-সোর্স ফর্ক ওয়ার্কফ্লো, Git LFS (Large File Storage) পয়েন্টার দিয়ে গিগাবাইট আকারের বড় বাইনারি ফাইল পরিচালনা এবং রিপোজিটরি টেমপ্লেট দিয়ে প্রমিত প্রজেক্ট শুরুর কৌশল শিখুন।'
  },
  minutes: 43,
  blocks: [
    {
      type: 'heading',
      id: 'remotes-forks-and-clones-heading',
      text: {
        en: 'Remote Topography: Tracking origin and upstream Across Forks',
        bn: 'রিমোট টপোগ্রাফি: ফর্কের মাঝে origin এবং upstream ট্র্যাকিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Coordinating decentralized software development requires an organized map of remote server targets. In GitHub (the cloud-hosted Git collaboration platform), codebases are hosted inside repositories containing the complete commit history and file tree. Within enterprise private teams, engineers clone repositories directly and push feature branches to the central "origin" remote. In open-source or multi-organization workflows, developers "fork" the repository, creating an independent server-side copy under their personal account. The original repository is tracked locally as the "upstream" remote, allowing contributors to fetch and synchronize upstream updates.',
        bn: 'বিকেন্দ্রীভূত সফটওয়্যার ডেভেলপমেন্টে বিভিন্ন রিমোট সার্ভার লক্ষ্যের মাঝে সুবিন্যস্ত সমন্বয় অপরিহার্য। কিন্তু GitHub (ক্লাউড-হোস্টেড গিট কোলাবোরেশন প্ল্যাটফর্ম)-এ সম্পূর্ণ কমিট ইতিহাস এবং ফাইল ট্রি একটি রিপোজিটরির ভেতরে সংরক্ষিত থাকে। এন্টারপ্রাইজ টিমে কাজ করার সময় ইঞ্জিনিয়াররা সরাসরি রিপোজিটরি ক্লোন করেন এবং কেন্দ্রীয় "origin" রিমোটে কোড পুশ করেন। ওপেন-সোর্স বা বড় প্রজেক্টে অবদান রাখতে ডেভেলপাররা প্রজেক্টটি "fork" করে নিজেদের একাউন্টে একটি স্বাধীন সার্ভার কপি তৈরি করেন। মূল রিপোজিটরিটিকে লোকাল মেশিনে "upstream" রিমোট হিসেবে ট্র্যাক করা হয়, যা মূল প্রজেক্টের সর্বশেষ আপডেট সহজে টেনে এনে সমন্বয় করতে সাহায্য করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: GitHub distributed repository topography (origin vs upstream) alongside Git LFS pointer replacement architecture.',
        bn: 'চিত্র ১: GitHub ডিস্ট্রিবিউটেড রিপোজিটরি টপোগ্রাফি (origin বনাম upstream) এবং Git LFS পয়েন্টার প্রতিস্থাপন আর্কিটেকচার।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">GITHUB REPOSITORY ARCHITECTURE &amp; GIT LFS</text>

  <!-- Left: Remote Topography -->
  <g transform="translate(30, 65)">
    <rect width="365" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="365" height="30" rx="8" fill="#0284c7" />
    <text x="182" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Fork &amp; Remote Tracking Topography</text>

    <!-- Upstream Box -->
    <rect x="15" y="45" width="335" height="42" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="65" fill="#34d399" font-size="10" font-family="monospace">upstream: github.com/organization/core</text>
    <text x="25" y="78" fill="#cbd5e1" font-size="9" font-family="sans-serif">Authoritative central source of truth</text>

    <!-- Fork Box -->
    <rect x="15" y="98" width="335" height="42" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="25" y="118" fill="#fbbf24" font-size="10" font-family="monospace">origin: github.com/developer/core (Fork)</text>
    <text x="25" y="131" fill="#cbd5e1" font-size="9" font-family="sans-serif">Personal write-enabled server clone</text>

    <!-- Local Workstation -->
    <rect x="15" y="150" width="335" height="70" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="172" fill="#38bdf8" font-size="10" font-family="sans-serif" font-weight="bold">Local Workstation Workflow:</text>
    <text x="25" y="190" fill="#f8fafc" font-size="9" font-family="monospace">git fetch upstream &amp;&amp; git merge upstream/main</text>
    <text x="25" y="208" fill="#34d399" font-size="9" font-family="monospace">git push origin feature-branch # ready for PR</text>
  </g>

  <!-- Right: Git LFS -->
  <g transform="translate(435, 65)">
    <rect width="375" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="375" height="30" rx="8" fill="#7c3aed" />
    <text x="187" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Git Large File Storage (Git LFS)</text>

    <!-- Pointer file in repo -->
    <rect x="15" y="45" width="345" height="70" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="monospace">model.bin (130-byte pointer in Git):</text>
    <text x="25" y="82" fill="#cbd5e1" font-size="9" font-family="monospace">version https://git-lfs.github.com/spec/v1</text>
    <text x="25" y="96" fill="#cbd5e1" font-size="9" font-family="monospace">oid sha256:739a8f... size 2450000000</text>

    <!-- Real asset on S3 -->
    <rect x="15" y="125" width="345" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="145" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">External LFS Binary Storage (S3 / Cloud)</text>
    <text x="25" y="162" fill="#cbd5e1" font-size="9" font-family="sans-serif">Stores actual 2.45 GB file payload outside git history</text>

    <rect x="15" y="185" width="345" height="35" rx="5" fill="#7c3aed" fill-opacity="0.15" stroke="#a855f7" />
    <text x="25" y="205" fill="#c084fc" font-size="9" font-family="sans-serif">Prevents permanent repository clone bloat</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'git-lfs-and-templates-heading',
      text: {
        en: 'Git Large File Storage (LFS) and Repository Templates',
        bn: 'Git Large File Storage (LFS) এবং রিপোজিটরি টেমপ্লেট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Standard Git is designed for text files, compressing source code with delta encoding. When storing large binary assets (like machine learning models, 4K video textures, or datasets), every commit permanently inflates the ".git" object database, causing clone commands to slow down or fail. To solve this, GitHub supports Git LFS (Large File Storage). Declaring file patterns in ".gitattributes" replaces multi-gigabyte binaries in the Git tree with tiny 130-byte text pointer files containing SHA-256 checksums, transferring actual binaries directly to scalable object storage. Additionally, organizations use Repository Templates to seed new repositories with standard CI workflows and configurations.',
        bn: 'সাধারণ Git মূলত টেক্সট ফাইলের জন্য তৈরি এবং ডেল্টা এনকোডিং দিয়ে সোর্স কোড সংকুচিত করে। কিন্তু যখন বড় বাইনারি ফাইল (যেমন মেশিন লার্নিং মডেল, 4K ভিডিও বা বড় ডেটাসেট) জমা করা হয়, তখন প্রতি কমিটে ".git" অবজেক্ট ডেটাবেস অস্বাভাবিক ফুলে ওঠে, যার ফলে রিপোজিটরি ক্লোন করতে প্রচুর সময় নষ্ট হয় বা ব্যর্থ হয়। এই সমস্যা সমাধানে GitHub তৈরি করেছে Git LFS (Large File Storage)। ".gitattributes" ফাইলে নিয়ম ঘোষণা করলে Git মূল ফাইলে গিগাবাইট ডেটা না রেখে মাত্র ১৩০ বাইটের একটি টেক্সট পয়েন্টার ফাইল রাখে যাতে SHA-256 চেকসাম থাকে, আর আসল বড় ফাইলটি ক্লাউড অবজেক্ট স্টোরেজে চলে যায়। তাছাড়া স্ট্যান্ডার্ড ওয়ার্কফ্লো ও কনফিগারেশন দিয়ে নতুন প্রজেক্ট শুরু করতে প্রতিষ্ঠানগুলো রিপোজিটরি টেমপ্লেট ব্যবহার করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of GitHub remote tracking (origin vs upstream) and Git LFS 130-byte pointer file generation.',
        bn: 'GitHub রিমোট ট্র্যাকিং (origin বনাম upstream) এবং Git LFS ১৩০ বাইট পয়েন্টার ফাইল তৈরির TypeScript রূপায়ণ।'
      },
      code: `// Simulation of GitHub Remote Topography and Git LFS Pointer Synthesis

export interface GitRemote {
  name: string;
  url: string;
  fetchUrl: string;
}

export class GitHubRepoArchitecture {
  private remotes: Map<string, GitRemote> = new Map();

  // Simulates configuring "git remote add upstream <url>"
  public configureRemote(name: string, url: string): string {
    this.remotes.set(name, { name, url, fetchUrl: url });
    return 'Configured remote [' + name + '] -> ' + url;
  }

  // Simulates Git LFS replacing a massive 2.5 GB binary file with a 130-byte pointer
  public static createLFSPointer(fileName: string, fileSizeBytes: number, sha256Checksum: string): {
    fileName: string;
    pointerContent: string;
    pointerSizeBytes: number;
    spaceSavedPercentage: number;
  } {
    const pointerContent = [
      'version https://git-lfs.github.com/spec/v1',
      'oid sha256:' + sha256Checksum,
      'size ' + fileSizeBytes
    ].join('\\n');

    const pointerSizeBytes = 130;
    const spaceSaved = ((fileSizeBytes - pointerSizeBytes) / fileSizeBytes) * 100;

    return {
      fileName,
      pointerContent,
      pointerSizeBytes,
      spaceSavedPercentage: parseFloat(spaceSaved.toFixed(4))
    };
  }
}

// Execution Demonstration
console.log('--- 1. Testing Remote Topography (Fork & Upstream) ---');
const repo = new GitHubRepoArchitecture();
console.log(repo.configureRemote('origin', 'git@github.com:developer/kubernetes-fork.git'));
console.log(repo.configureRemote('upstream', 'git@github.com:kubernetes/kubernetes.git'));

console.log('\n--- 2. Testing Git LFS Pointer Generation ---');
const rawAssetSize = 2500000000; // 2.5 GB Machine Learning weights
const assetSha = 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855';

const lfsResult = GitHubRepoArchitecture.createLFSPointer('weights.bin', rawAssetSize, assetSha);
console.log('Asset File Name:', lfsResult.fileName);
console.log('Git Repository Stored Pointer Size (Bytes):', lfsResult.pointerSizeBytes); // 130
console.log('Storage Space Saved in .git Directory (%):', lfsResult.spaceSavedPercentage + '%');
console.log('Synthesized Git LFS Pointer Content:\n' + lfsResult.pointerContent);`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Remote & origin/upstream',
          def: {
            en: 'Server targets: origin is your primary repository clone; upstream is the authoritative parent repo.',
            bn: 'সার্ভার ঠিকানা: origin হলো আপনার নিজস্ব ক্লোন; আর upstream হলো মূল অথরিটেটিভ মূল রিপোজিটরি।'
          }
        },
        {
          term: 'Fork vs Clone',
          def: {
            en: 'Clones are local disk copies; Forks are server-side GitHub repository clones under your personal account.',
            bn: 'ক্লোন হলো লোকাল কম্পিউটারে কপি; আর ফর্ক হলো আপনার ব্যক্তিগত অ্যাকাউন্টে ক্লাউডে তৈরি কপি।'
          }
        },
        {
          term: 'Git LFS (Large File Storage)',
          def: {
            en: 'Extension replacing large binary files in git commits with lightweight 130-byte text pointer files.',
            bn: 'এক্সটেনশন যা বড় বাইনারি ফাইলের বদলে ১৩০ বাইটের টেক্সট পয়েন্টার রেখে মেমোরি সাশ্রয় করে।'
          }
        },
        {
          term: 'Repository Templates',
          def: {
            en: 'Blueprint repositories allowing teams to generate new repositories with pre-configured CI and configs.',
            bn: 'ব্লুপ্রিন্ট রিপোজিটরি যা পূর্ব-নির্ধারিত CI ও ফাইল কাঠামো দিয়ে নতুন প্রজেক্ট তৈরি করতে দেয়।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'fork-vs-clone-architectural-difference-ex1',
      kind: 'mcq',
      topic: 'github-fork-vs-clone-distinction',
      question: {
        en: 'What is the fundamental architectural distinction between a "Fork" and a "Clone" in GitHub engineering workflows?',
        bn: 'GitHub ইঞ্জিনিয়ারিং ওয়ার্কফ্লোতে একটি "Fork" এবং একটি "Clone"-এর মধ্যে মৌলিক স্থাপত্যিক পার্থক্য কী?'
      },
      options: [
        {
          en: 'A Fork is a server-side repository clone created on GitHub under your account (enabling pull requests to upstream without write access); a Clone is a local copy downloaded to your developer workstation disk',
          bn: 'Fork হলো আপনার অ্যাকাউন্টের অধীনে GitHub ক্লাউডে তৈরি সার্ভার-সাইড কপি (যা মূল প্রজেক্টে রাইট পারমিশন ছাড়াই পিআর দিতে সাহায্য করে); আর Clone হলো লোকাল কম্পিউটারে ডাউনলোড করা ফাইল কপি'
        },
        {
          en: 'A Fork deletes the original repository after 24 hours',
          bn: 'একটি Fork ২৪ ঘণ্টা পর মূল রিপোজিটরি মুছে ফেলে'
        },
        {
          en: 'Clones only work on Linux servers; Forks only work on Apple computers',
          bn: 'Clone কেবল লিনাক্স সার্ভারে কাজ করে আর Fork কেবল অ্যাপল কম্পিউটারে'
        },
        {
          en: 'There is zero difference between forks and clones',
          bn: 'Fork এবং Clone-এর মাঝে কোনো পার্থক্য নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'Forks live on GitHub servers; clones live on your local machine.',
        bn: 'ফর্ক ক্লাউডে আপনার নিজের অ্যাকাউন্টে থাকে, আর ক্লোন আপনার নিজের ল্যাপটপে থাকে।'
      },
      explanation: {
        en: 'Forking copies a repo to your GitHub account so you can push feature branches freely and submit PRs to the upstream source repository without requiring write credentials.',
        bn: 'এর ফলে কোনো অনুমোদন ছাড়াই যে কেউ যেকোনো ওপেন-সোর্স প্রজেক্টে কাজ করে অবদান রাখতে পারে।'
      }
    },
    {
      id: 'git-lfs-pointer-file-solution-ex2',
      kind: 'mcq',
      topic: 'git-lfs-pointer-file-storage-mechanics',
      question: {
        en: 'How does Git LFS (Large File Storage) prevent repository bloat when committing multi-gigabyte binary files?',
        bn: 'গিগাবাইট আকারের বড় বাইনারি ফাইল কমিট করার সময় Git LFS (Large File Storage) কীভাবে রিপোজিটরির আকার স্ফীতি রোধ করে?'
      },
      options: [
        {
          en: 'It stores a lightweight 130-byte text pointer file containing the SHA-256 hash in the Git tree, uploading the heavy binary payload directly to dedicated cloud object storage',
          bn: 'এটি Git ট্রির ভেতরে SHA-256 হ্যাশযুক্ত মাত্র ১৩০ বাইটের হালকা টেক্সট পয়েন্টার ফাইল রাখে এবং আসল ভারী ফাইলটিকে সরাসরি ক্লাউড অবজেক্ট স্টোরেজে পাঠিয়ে দেয়'
        },
        {
          en: 'It permanently deletes all previous git commit history to make room',
          bn: 'জায়গা বাঁচাতে এটি আগের সমস্ত গিট কমিট ইতিহাস চিরতরে মুছে ফেলে'
        },
        {
          en: 'It compresses 10 gigabyte files into 10 kilobytes using magic algorithms',
          bn: 'এটি ১০ গিগাবাইটের ফাইলকে ১০ কিলোবাইটে রূপান্তর করে ফেলে'
        },
        {
          en: 'Git LFS was removed from GitHub in 2021',
          bn: '২০২১ সালে GitHub থেকে Git LFS বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Git LFS replaces large binaries in Git with tiny pointer files.',
        bn: 'ভারী ফাইল গিট হিস্ট্রিতে না ঢুকিয়ে হালকা নির্দেশক রেখে আসল ফাইল ক্লাউডে রাখার প্রযুক্তি।'
      },
      explanation: {
        en: 'Normal Git stores every version of binary files forever in .git/objects. Git LFS intercepts matching files defined in .gitattributes and stores only tiny metadata pointers.',
        bn: 'এর ফলে রিপোজিটরি ক্লোন করার সময় গিগাবাইট ফাইলের অপ্রয়োজনীয় ইতিহাস নামাতে হয় না।'
      }
    },
    {
      id: 'syncing-fork-upstream-commands-ex3',
      kind: 'mcq',
      topic: 'syncing-fork-upstream-remote-fetch',
      question: {
        en: 'What sequence of Git terminal commands synchronizes a local fork with the latest upstream changes?',
        bn: 'কোন গিট টার্মিনাল কমান্ডগুলোর মাধ্যমে একটি লোকাল ফর্ককে মূল upstream রিপোজিটরির সর্বশেষ পরিবর্তনের সাথে সিঙ্ক করা হয়?'
      },
      options: [
        {
          en: 'git fetch upstream && git merge upstream/main (or git rebase upstream/main)',
          bn: 'git fetch upstream && git merge upstream/main (বা git rebase upstream/main)'
        },
        {
          en: 'git delete all && git start over',
          bn: 'git delete all && git start over'
        },
        {
          en: 'git push origin main --force-everything',
          bn: 'git push origin main --force-everything'
        },
        {
          en: 'Forks cannot be synchronized after creation',
          bn: 'তৈরির পর ফর্ক আর কখনো সিঙ্ক করা যায় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Fetch upstream branches and merge upstream/main into your local branch.',
        bn: 'আগে মূল প্রজেক্ট থেকে ডেটা নামিয়ে নিজের মেইন ব্রাঞ্চে মার্জ করে নেওয়ার নিয়ম।'
      },
      explanation: {
        en: 'Fetching upstream downloads the latest commits from the authoritative parent repo. Merging "upstream/main" updates your local branch before you push to your origin fork.',
        bn: 'এর ফলে মূল প্রজেক্টের নতুন কাজের সাথে নিজের ব্রাঞ্চ সর্বদা আপ-টু-ডেট থাকে।'
      }
    },
    {
      id: 'template-repositories-vs-forks-ex4',
      kind: 'mcq',
      topic: 'github-template-repositories-vs-forks',
      question: {
        en: 'Why do organizations prefer "Repository Templates" over forks when bootstrapping new microservice projects?',
        bn: 'নতুন মাইক্রোসার্ভিস প্রজেক্ট শুরুর ক্ষেত্রে প্রতিষ্ঠানগুলো কেন ফর্কের চেয়ে "রিপোজিটরি টেমপ্লেট" বেশি পছন্দ করে?'
      },
      options: [
        {
          en: 'A template generates a brand-new repository with a single clean root commit, omitting historical commit clutter and avoiding a permanent upstream link back to the parent repo',
          bn: 'টেমপ্লেট একটি নতুন পরিষ্কার রুট কমিট দিয়ে রিপোজিটরি তৈরি করে, যা পুরোনো কমিটের আবর্জনা দূর করে এবং মূল প্যারেন্ট রিপোজিটরির সাথে স্থায়ী সম্পর্ক তৈরি করে না'
        },
        {
          en: 'Templates run 10 times faster in production',
          bn: 'টেমপ্লেট প্রোডাকশনে ১০ গুণ দ্রুত চলে'
        },
        {
          en: 'Templates make all source code open-source to the public',
          bn: 'টেমপ্লেট সমস্ত সোর্স কোড সর্বসাধারণের জন্য উন্মুক্ত করে দেয়'
        },
        {
          en: 'Forks are forbidden in commercial software engineering',
          bn: 'বাণিজ্যিক সফটওয়্যার ইঞ্জিনিয়ারিংয়ে ফর্ক ব্যবহার নিষিদ্ধ'
        }
      ],
      answer: 0,
      hint: {
        en: 'Templates start with a clean commit history, whereas forks inherit the entire history.',
        bn: 'ফর্ক আগের শত শত কমিটের বোঝা টেনে আনে, কিন্তু টেমপ্লেট একদম পরিষ্কার নতুন শুরু উপহার দেয়।'
      },
      explanation: {
        en: 'Forking is meant for contributing back to the same project. Repository Templates provide a clean scaffold with a single initial commit, perfect for new services.',
        bn: 'এর ফলে নতুন প্রজেক্টের ইতিহাস থাকে পরিষ্কার এবং কোনো অপ্রয়োজনীয় পুরোনো ডেটা থাকে না।'
      }
    }
  ],
  quiz: {
    id: 'quiz-repos-and-the-repo',
    title: {
      en: 'GitHub Repositories & Git LFS Quiz',
      bn: 'GitHub রিপোজিটরি এবং Git LFS কুইজ'
    },
    questions: [
      {
        id: 'quiz-bare-repository-concept',
        kind: 'mcq',
        topic: 'git-bare-repository-architecture',
        question: {
          en: 'What is a "bare" Git repository (git init --bare) as utilized on GitHub hosting servers?',
          bn: 'GitHub হোস্টিং সার্ভারে ব্যবহৃত "bare" Git রিপোজিটরির (git init --bare) প্রকৃত অর্থ কী?'
        },
        options: [
          {
            en: 'A repository containing only the ".git" object database and references without a local working directory or checked-out files, designed purely as a centralized remote for pushes and fetches',
            bn: 'এমন একটি রিপোজিটরি যাতে কোনো লোকাল ওয়ার্কিং ডিরেক্টরি বা ফাইল থাকে না, বরং কেবল ".git" অবজেক্ট ডেটাবেস থাকে; যা শুধু পুশ ও ফেচ আদান-প্রদানের কেন্দ্রীয় হাব হিসেবে ব্যবহৃত হয়'
          },
          {
            en: 'A repository with all security protections disabled',
            bn: 'এমন রিপোজিটরি যার সমস্ত নিরাপত্তা সুরক্ষা বন্ধ রাখা হয়েছে'
          },
          {
            en: 'A repository that has run out of disk storage',
            bn: 'এমন রিপোজিটরি যার সমস্ত ডিস্ক স্টোরেজ শেষ হয়ে গেছে'
          },
          {
            en: 'Bare repositories were deprecated in Git 2.0',
            bn: 'Git ২.০ সংস্করণে Bare রিপোজিটরি বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'A bare repository has no working directory and exists only for sharing code.',
          bn: 'সার্ভারে কেউ সরাসরি এডিট করে না, তাই ফাইল দৃশ্যমান না রেখে কেবল ডেটাবেস সংরক্ষণ করা হয়।'
        },
        explanation: {
          en: 'GitHub servers store bare repositories. Because no developer edits code on the server, a working tree is unnecessary, saving disk space and avoiding working tree conflicts.',
          bn: 'এটি সার্ভারের স্টোরেজ বাঁচায় এবং রিমোট ট্র্যাকিংকে সর্বোচ্চ দ্রুতগতির করে।'
        }
      },
      {
        id: 'quiz-git-attributes-lfs-filter',
        kind: 'mcq',
        topic: 'git-attributes-lfs-filter-configuration',
        question: {
          en: 'What is the role of the ".gitattributes" file in configuring Git LFS for binary file tracking?',
          bn: 'বাইনারি ফাইল ট্র্যাকিংয়ে Git LFS কনফিগার করার ক্ষেত্রে ".gitattributes" ফাইলের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It defines pattern filters (e.g. "*.onnx filter=lfs diff=lfs merge=lfs -text") instructing the Git client to route matching files through the Git LFS pointer smudge/clean filters',
            bn: 'এটি ফিল্টার প্যাটার্ন নির্ধারণ করে (যেমন "*.onnx filter=lfs diff=lfs merge=lfs -text") যা গিট ক্লায়েন্টকে নির্দিষ্ট ফাইলগুলোকে LFS পয়েন্টার ফিল্টারে পাঠাতে নির্দেশ দেয়'
          },
          {
            en: 'It converts the repository into a WordPress plugin',
            bn: 'এটি রিপোজিটরিটিকে একটি ওয়ার্ডপ্রেস প্লাগইনে রূপান্তর করে'
          },
          {
            en: 'It deletes large files whenever someone clones the repo',
            bn: 'কেউ ক্লোন করলেই এটি বড় ফাইলগুলোকে মুছে ফেলে'
          },
          {
            en: '.gitattributes is only supported on Windows operating systems',
            bn: '.gitattributes কেবল উইন্ডোজ অপারেটিং সিস্টেমেই সমর্থিত'
          }
        ],
        answer: 0,
        hint: {
          en: '.gitattributes tells Git which file extensions should be tracked by LFS.',
          bn: 'কোন কোন ফরম্যাটের ফাইল পয়েন্টার দিয়ে চালাতে হবে তা গিটকে চেনানোর নির্দেশিকা।'
        },
        explanation: {
          en: '.gitattributes configures Git filter drivers. Git LFS hooks into "clean" (generating pointers on commit) and "smudge" (downloading actual binaries on checkout).',
          bn: 'কমিট করার সময় পয়েন্টার তৈরি এবং চেকআউটের সময় আসল ফাইল নামানোর কাজ এটি নিশ্চিত করে।'
        }
      },
      {
        id: 'quiz-github-git-clone-depth-shallow',
        kind: 'mcq',
        topic: 'git-shallow-clone-depth-optimization',
        question: {
          en: 'Why do automated CI/CD pipelines use shallow cloning ("git clone --depth 1") instead of full repository clones?',
          bn: 'স্বয়ংক্রিয় CI/CD পাইপলাইনে পুরো রিপোজিটরি ক্লোন করার বদলে কেন শ্যালো ক্লোনিং ("git clone --depth 1") ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'It downloads only the single most recent commit without downloading years of historical commit objects, drastically cutting network transfer times and CI runner startup latency',
            bn: 'এটি বহু বছরের পুরোনো ইতিহাস না নামিয়ে কেবল সর্বশেষ ১ টি কমিট ডাউনলোড করে, যা নেটওয়ার্কের সময় ও সিআই রানারের স্টার্টআপ বিলম্ব নাটকীয়ভাবে কমিয়ে আনে'
          },
          {
            en: 'It deletes all user passwords from the cloud',
            bn: 'এটি ক্লাউড থেকে ব্যবহারকারীর সমস্ত পাসওয়ার্ড মুছে ফেলে'
          },
          {
            en: 'It compresses the operating system kernel',
            bn: 'এটি অপারেটিং সিস্টেম কার্নেল সংকুচিত করে'
          },
          {
            en: 'Shallow clones cannot run unit tests',
            bn: 'শ্যালো ক্লোনে কোনো ইউনিট টেস্ট চালানো যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: '--depth 1 downloads only the tip commit for extreme speed in automated CI.',
          bn: 'পুরো ইতিহাস না টেনে কেবল টেস্ট করার জন্য সর্বশেষ কোডটুকু নিমেষে নামানোর কৌশল।'
        },
        explanation: {
          en: 'For building and testing, historical commits are irrelevant. Shallow clones fetch only the tip of the branch, cutting gigabytes of git history down to megabytes in seconds.',
          bn: 'এর মাধ্যমে সিআই পাইপলাইনে অহেতুক সময় অপচয় বন্ধ হয় এবং বিল্ড দ্রুত শুরু হয়।'
        }
      },
      {
        id: 'quiz-repository-visibility-public-private-internal',
        kind: 'mcq',
        topic: 'github-repository-visibility-internal-tier',
        question: {
          en: 'In GitHub Enterprise, what is the architectural security boundary of an "Internal" repository compared to "Public" or "Private"?',
          bn: 'GitHub Enterprise-এ "Public" বা "Private"-এর তুলনায় একটি "Internal" রিপোজিটরির নিরাপত্তা সীমানা কী?'
        },
        options: [
          {
            en: 'An Internal repository is visible and accessible exclusively to authenticated members of the GitHub Enterprise organization, facilitating innersource collaboration across enterprise teams while keeping code hidden from the outside world',
            bn: 'একটি Internal রিপোজিটরি কেবল এন্টারপ্রাইজ অর্গানাইজেশনের অনুমোদিত সদস্যদের কাছে দৃশ্যমান হয়, যা বাইরের পৃথিবী থেকে কোড গোপন রেখে ভেতরের দলগুলোর মাঝে মুক্ত কোলাবোরেশন নিশ্চিত করে'
          },
          {
            en: 'Internal repositories can only be accessed between 9 AM and 5 PM',
            bn: 'Internal রিপোজিটরি কেবল সকাল ৯টা থেকে বিকেল ৫টার মধ্যেই অ্যাক্সেস করা যায়'
          },
          {
            en: 'Internal repositories are visible to everyone on Google Search',
            bn: 'Internal রিপোজিটরি গুগল সার্চের মাধ্যমে সবার কাছে দৃশ্যমান থাকে'
          },
          {
            en: 'Internal visibility was removed in GitHub Enterprise 3.0',
            bn: 'GitHub Enterprise ৩.০ সংস্করণে Internal দৃশ্যমানতা বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Internal repos are visible to all enterprise members but private from the public.',
          bn: 'কোম্পানির সমস্ত ইঞ্জিনিয়ারের জন্য উন্মুক্ত কিন্তু বাইরের পৃথিবীর জন্য সম্পূর্ণ বন্ধ।'
        },
        explanation: {
          en: 'Internal repositories foster "innersource" inside corporations. Any employee in the enterprise can view and fork the code, but it remains strictly invisible to the public internet.',
          bn: 'এর মাধ্যমে প্রতিষ্ঠানের ভেতরে বিভিন্ন দলের মাঝে কোড শেয়ারিং ও সহযোগিতা বৃদ্ধি পায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'pulls-and-the-pull',
    title: {
      en: 'Pull Requests: Diffs, Merge Strategies & Conflict Resolution',
      bn: 'পুল রিকোয়েস্ট: ডিফস, মার্জ কৌশল এবং কনফ্লিক্ট নিরসন'
    }
  }
};
