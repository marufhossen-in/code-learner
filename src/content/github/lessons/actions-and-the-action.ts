import type { Lesson } from '../../../lib/types';

export const ActionsAndTheActionLesson: Lesson = {
  slug: 'actions-and-the-action',
  tech: 'github',
  title: {
    en: 'GitHub Actions: Workflows, Triggers & CI/CD Pipelines',
    bn: 'GitHub অ্যাকশনস: ওয়ার্কফ্লো, ট্রিগার ও CI/CD পাইপলাইন'
  },
  summary: {
    en: 'Build automated CI/CD pipelines with GitHub Actions: YAML workflows, event triggers, parallel matrix jobs, encrypted secrets, caching, and runner environments.',
    bn: 'GitHub অ্যাকশনস দিয়ে স্বয়ংক্রিয় CI/CD পাইপলাইন তৈরি করুন: YAML ওয়ার্কফ্লো, ইভেন্ট ট্রিগার, প্যারালাল ম্যাট্রিক্স জব, এনক্রিপ্টেড সিক্রেট, ক্যাশিং এবং রানার পরিবেশ।'
  },
  minutes: 26,
  blocks: [
    {
      type: 'heading',
      id: 'actions-fundamentals',
      text: {
        en: '1. What is GitHub Actions?',
        bn: '১. GitHub Actions কী?'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build modern software, GitHub Actions automates your build, test, and deployment workflows directly inside your repository. Instead of managing external continuous integration servers, you define automation as code inside YAML files located in .github/workflows/.',
        bn: 'যখন আপনি আধুনিক সফটওয়্যার তৈরি করেন, GitHub Actions সরাসরি রিপোজিটরির ভেতর আপনার বিল্ড, টেস্ট ও ডিপ্লয়মেন্ট ওয়ার্কফ্লো স্বয়ংক্রিয় করে। বাইরের সিআই সার্ভার পরিচালনার বদলে আপনি .github/workflows/ ডিরেক্টরিতে YAML ফাইলের মাধ্যমে কোড হিসেবে অটোমেশন লিখে রাখেন।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The architecture of GitHub Actions consists of 5 fundamental building blocks:',
        bn: 'GitHub Actions এর আর্কিটেকচার ৫ টি মৌলিক উপাদানের সমন্বয়ে গঠিত:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Workflows: Automated procedures defined in YAML that run when triggered by an event in your repository.',
          bn: 'Workflows (ওয়ার্কফ্লো): YAML এ সংজ্ঞায়িত স্বয়ংক্রিয় প্রক্রিয়া যা রিপোজিটরির কোনো ইভেন্ট দ্বারা ট্রিগার হলে চালু হয়।'
        },
        {
          en: 'Events (Triggers): Specific activities (such as a git push, opening a PR, a cron schedule, or manual button click) that initiate a workflow run.',
          bn: 'Events (ইভেন্ট বা ট্রিগার): নির্দিষ্ট কোনো ক্রিয়াকলাপ (যেমন git push, PR তৈরি, ক্রন শিডিউল বা ম্যানুয়াল বোতাম ক্লিক) যা ওয়ার্কফ্লো শুরু করে।'
        },
        {
          en: 'Jobs: A set of steps executed on the same runner virtual machine. By default, multiple jobs run concurrently in parallel unless ordered with the "needs" keyword.',
          bn: 'Jobs (জব): একই রানার ভার্চুয়াল মেশিনে চলা কয়েকটি পদক্ষেপের সমষ্টি। ডিফল্টভাবে একাধিক জব সমান্তরালে চলে, তবে "needs" কিওয়ার্ড দিয়ে এদের ধারাবাহিক করা যায়।'
        },
        {
          en: 'Steps: Individual executable units within a job. A step can execute a bash shell command ("run:") or call a pre-packaged action ("uses:").',
          bn: 'Steps (স্টেপ): একটি জবের অন্তর্গত পৃথক এক্সিকিউটেবল কাজ। প্রতিটি স্টেপ ব্যাশ কমান্ড চালাতে পারে ("run:") অথবা তৈরি করা অ্যাকশন কল করতে পারে ("uses:")।'
        },
        {
          en: 'Runners: Virtual machines or containers provisioned to execute jobs. GitHub provides cloud runners (such as ubuntu-latest, windows-latest, or macos-latest) and allows private self-hosted runners.',
          bn: 'Runners (রানার): জব চালানোর জন্য বরাদ্দ করা ভার্চুয়াল মেশিন বা কন্টেইনার। GitHub নিজস্ব ক্লাউড রানার (যেমন ubuntu-latest, windows-latest, macos-latest) দেয় এবং নিজস্ব সার্ভারে সেলফ-হোস্টেড রানার চালানোর অনুমতি দেয়।'
        }
      ]
    },
    {
      type: 'visual',
      id: 'actions-pipeline-diagram',
      title: {
        en: 'GitHub Actions CI/CD Pipeline Architecture',
        bn: 'GitHub Actions CI/CD পাইপলাইন আর্কিটেকচার'
      },
      data: {
        format: 'svg',
        content: '<svg viewBox="0 0 800 420" width="100%" height="420" xmlns="http://www.w3.org/2000/svg">' +
          '<rect width="800" height="420" rx="12" fill="#0f172a" />' +
          '<text x="400" y="32" fill="#38bdf8" font-size="18" font-weight="bold" font-family="system-ui, sans-serif" text-anchor="middle">GitHub Actions: Workflow Pipeline Architecture</text>' +
          '<!-- Column 1: Event Trigger -->' +
          '<g transform="translate(30, 60)">' +
            '<rect width="140" height="330" rx="8" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5"/>' +
            '<text x="70" y="26" fill="#60a5fa" font-size="12" font-weight="bold" text-anchor="middle">1. EVENT TRIGGER</text>' +
            '<rect x="12" y="45" width="116" height="50" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="66" fill="#38bdf8" font-size="10" font-weight="bold">on: push</text>' +
            '<text x="20" y="82" fill="#94a3b8" font-size="9">branches: [main]</text>' +
            '<rect x="12" y="105" width="116" height="50" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="126" fill="#facc15" font-size="10" font-weight="bold">on: pull_request</text>' +
            '<text x="20" y="142" fill="#94a3b8" font-size="9">types: [opened, sync]</text>' +
            '<rect x="12" y="165" width="116" height="50" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="186" fill="#c084fc" font-size="10" font-weight="bold">on: schedule</text>' +
            '<text x="20" y="202" fill="#94a3b8" font-size="9">cron: \'0 0 * * *\'</text>' +
            '<text x="70" y="260" fill="#64748b" font-size="10" text-anchor="middle">Webhook payload</text>' +
            '<text x="70" y="278" fill="#38bdf8" font-size="10" text-anchor="middle">Dispatches runner</text>' +
          '</g>' +
          '<!-- Arrow 1 -->' +
          '<path d="M 180 200 L 205 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Column 2: Runner VM -->' +
          '<g transform="translate(215, 60)">' +
            '<rect width="165" height="330" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="1.5"/>' +
            '<text x="82" y="26" fill="#c084fc" font-size="12" font-weight="bold" text-anchor="middle">2. RUNNER VM</text>' +
            '<rect x="12" y="45" width="141" height="60" rx="6" fill="#0f172a"/>' +
            '<text x="20" y="68" fill="#c084fc" font-size="10" font-weight="bold">runs-on: ubuntu-latest</text>' +
            '<text x="20" y="88" fill="#94a3b8" font-size="9">2-core CPU, 7GB RAM</text>' +
            '<rect x="12" y="115" width="141" height="95" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="82" y="136" fill="#34d399" font-size="10" font-weight="bold" text-anchor="middle">Cache &amp; Secrets</text>' +
            '<text x="20" y="156" fill="#cbd5e1" font-size="9">actions/cache@v4</text>' +
            '<text x="20" y="174" fill="#cbd5e1" font-size="9">${{ secrets.PROD_KEY }}</text>' +
            '<text x="20" y="192" fill="#34d399" font-size="8">Masked: *** in logs</text>' +
            '<text x="82" y="260" fill="#94a3b8" font-size="10" text-anchor="middle">Isolated Docker container</text>' +
            '<text x="82" y="278" fill="#cbd5e1" font-size="10" text-anchor="middle">Ephemeral environment</text>' +
          '</g>' +
          '<!-- Arrow 2 -->' +
          '<path d="M 390 200 L 415 200" stroke="#38bdf8" stroke-width="2"/>' +
          '<!-- Column 3: Parallel Matrix Jobs -->' +
          '<g transform="translate(425, 60)">' +
            '<rect width="175" height="330" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="1.5"/>' +
            '<text x="87" y="26" fill="#34d399" font-size="12" font-weight="bold" text-anchor="middle">3. MATRIX TEST JOBS</text>' +
            '<rect x="12" y="45" width="151" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="20" y="68" fill="#34d399" font-size="10" font-weight="bold">Job: test (Node 18)</text>' +
            '<text x="20" y="88" fill="#94a3b8" font-size="9">npm test &#x2714; PASS (24s)</text>' +
            '<rect x="12" y="115" width="151" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="20" y="138" fill="#34d399" font-size="10" font-weight="bold">Job: test (Node 20)</text>' +
            '<text x="20" y="158" fill="#94a3b8" font-size="9">npm test &#x2714; PASS (21s)</text>' +
            '<rect x="12" y="185" width="151" height="60" rx="6" fill="#0f172a" stroke="#10b981" stroke-width="1"/>' +
            '<text x="20" y="208" fill="#34d399" font-size="10" font-weight="bold">Job: test (Node 22)</text>' +
            '<text x="20" y="228" fill="#94a3b8" font-size="9">npm test &#x2714; PASS (19s)</text>' +
            '<text x="87" y="280" fill="#38bdf8" font-size="10" text-anchor="middle">Parallel execution</text>' +
          '</g>' +
          '<!-- Arrow 3 -->' +
          '<path d="M 610 200 L 635 200" stroke="#10b981" stroke-width="2"/>' +
          '<!-- Column 4: Deploy Job -->' +
          '<g transform="translate(645, 60)">' +
            '<rect width="125" height="330" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="1.5"/>' +
            '<text x="62" y="26" fill="#38bdf8" font-size="12" font-weight="bold" text-anchor="middle">4. DEPLOY</text>' +
            '<rect x="10" y="45" width="105" height="70" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="1"/>' +
            '<text x="16" y="68" fill="#38bdf8" font-size="9" font-weight="bold">Job: deploy</text>' +
            '<text x="16" y="86" fill="#cbd5e1" font-size="8">needs: [test]</text>' +
            '<text x="16" y="102" fill="#34d399" font-size="8">environment: prod</text>' +
            '<rect x="10" y="130" width="105" height="70" rx="6" fill="#0f172a"/>' +
            '<text x="16" y="152" fill="#facc15" font-size="9" font-weight="bold">Protection Gate</text>' +
            '<text x="16" y="170" fill="#94a3b8" font-size="8">Manual approval</text>' +
            '<text x="16" y="186" fill="#34d399" font-size="8">Deployed &#x2714;</text>' +
          '</g>' +
        '</svg>'
      }
    },
    {
      type: 'heading',
      id: 'workflow-syntax',
      text: {
        en: '2. Anatomy of a Production YAML Workflow',
        bn: '২. প্রোডাকশন YAML ওয়ার্কফ্লোর গঠন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A standard continuous integration workflow illustrates how triggers, job dependencies, and action steps coordinate inside .github/workflows/ci.yml:',
        bn: 'একটি স্ট্যান্ডার্ড কন্টিনিউয়াস ইন্টিগ্রেশন ওয়ার্কফ্লো দেখায় কীভাবে .github/workflows/ci.yml ফাইলে ট্রিগার, জবের নির্ভরতা এবং অ্যাকশন স্টেপ সমন্বিত হয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'actions/checkout@v4: Clones your repository into the runner workspace so subsequent steps can access project source code.',
          bn: 'actions/checkout@v4: রানারের ওয়ার্কস্পেসে আপনার রিপোজিটরি ক্লোন করে যেন পরবর্তী পদক্ষেপগুলো সোর্স কোড ব্যবহার করতে পারে।'
        },
        {
          en: 'actions/setup-node@v4: Installs the required runtime environment and enables automated dependency caching from package-lock.json.',
          bn: 'actions/setup-node@v4: রানারে নির্দিষ্ট রানটাইম পরিবেশ ইনস্টল করে এবং package-lock.json থেকে স্বয়ংক্রিয় ডিপেন্ডেন্সি ক্যাশিং সক্রিয় করে।'
        },
        {
          en: 'needs: [test]: Ensures the deployment job runs only if all 3 parallel test matrix jobs exit with 0 errors.',
          bn: 'needs: [test]: নিশ্চিত করে যে ডিপ্লয়মেন্ট জব তখনই চলবে যখন ৩ টি সমান্তরাল টেস্ট ম্যাট্রিক্স জব ০ টি ত্রুটি নিয়ে সফল হবে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'secrets-and-environments',
      text: {
        en: '3. Encrypted Secrets and Deployment Environments',
        bn: '৩. এনক্রিপ্টেড সিক্রেট এবং ডিপ্লয়মেন্ট পরিবেশ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Security is paramount when running continuous delivery pipelines. GitHub provides 2 critical features to protect production credentials:',
        bn: 'কন্টিনিউয়াস ডেলিভারি পাইপলাইনে নিরাপত্তা অত্যন্ত গুরুত্বপূর্ণ। প্রোডাকশন ক্রেডেনশিয়াল সুরক্ষিত রাখতে GitHub ২ টি আবশ্যকীয় সুবিধা দেয়:'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Encrypted Secrets: Store confidential credentials (like AWS keys, database connection strings, or npm tokens) in repository settings. GitHub injects them at runtime via ${{ secrets.SECRET_NAME }} and masks them with asterisks (***) in console output.',
          bn: 'এনক্রিপ্টেড সিক্রেট: সংবেদনশীল তথ্য (যেমন AWS কি, ডাটাবেস স্ট্রিং, বা npm টোকেন) রিপোজিটরির সেটিংসে এনক্রিপ্ট করে রাখুন। রানটাইমে ${{ secrets.SECRET_NAME }} দিয়ে প্রবেশাধিকার দেওয়া হয় এবং কনসোল লগে স্বয়ংক্রিয়ভাবে অ্যাস্টেরিস্ক (***) দিয়ে মাস্ক করা হয়।'
        },
        {
          en: 'Deployment Environments: Define target environments (like "production" or "staging") with manual review gates. When a job targets "production", GitHub halts execution until an authorized team lead clicks "Approve and deploy".',
          bn: 'ডিপ্লয়মেন্ট পরিবেশ: নির্দিষ্ট টার্গেট পরিবেশ (যেমন "production" বা "staging") তৈরি করে ম্যানুয়াল রিভিউ গেট নির্ধারণ করা যায়। যখন কোনো জব "production"-এ যেতে চায়, অনুমোদিত টিম লিড "Approve and deploy" না করা পর্যন্ত রানার অপেক্ষা করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'actions-simulator',
      text: {
        en: '4. Workflow Execution & Matrix Simulator in TypeScript',
        bn: '৪. TypeScript এ ওয়ার্কফ্লো এক্সিকিউশন ও ম্যাট্রিক্স সিমুলেটর'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program demonstrates how a continuous integration runner expands a build matrix, resolves job dependencies with needs, and masks sensitive secrets during step execution:',
        bn: 'নিচের TypeScript প্রোগ্রামটি দেখায় কীভাবে একটি কন্টিনিউয়াস ইন্টিগ্রেশন রানার বিল্ড ম্যাট্রিক্স প্রসারিত করে, needs দিয়ে জবের নির্ভরতা মেটায় এবং স্টেপ এক্সিকিউশনের সময় সংবেদনশীল সিক্রেট মাস্ক করে:'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of GitHub Actions workflow triggers, parallel matrix jobs, and secret masking.',
        bn: 'GitHub Actions ওয়ার্কফ্লো ট্রিগার, প্যারালাল ম্যাট্রিক্স জব এবং সিক্রেট মাস্কিংয়ের TypeScript সিমুলেশন।'
      },
      code: `// Simulation of GitHub Actions Workflow Engine, Matrix Expansion & Secrets
interface WorkflowJob {
  name: string;
  matrixVersions?: number[];
  needs?: string[];
  runCommand: string;
}

interface WorkflowRunResult {
  totalJobsExecuted: number;
  allPassed: boolean;
  logs: string[];
}

class GitHubActionsEngine {
  private secrets: Map<string, string> = new Map();

  setSecret(key: string, value: string): void {
    this.secrets.set(key, value);
  }

  // Masks all secret values in logs with asterisks (***)
  maskSecrets(logMessage: string): string {
    let sanitized = logMessage;
    for (const [key, val] of this.secrets.entries()) {
      sanitized = sanitized.split(val).join('***');
    }
    return sanitized;
  }

  // Executes a pipeline of jobs, expanding matrix dimensions
  runWorkflow(jobs: WorkflowJob[]): WorkflowRunResult {
    const logs: string[] = [];
    let jobExecutionCount = 0;
    let allPassed = true;

    for (const job of jobs) {
      if (job.matrixVersions && job.matrixVersions.length > 0) {
        // Expand matrix: run 1 instance per version
        for (const ver of job.matrixVersions) {
          jobExecutionCount++;
          const rawLog = 'Job ' + job.name + ' (version ' + ver + '): running [' + job.runCommand + ']';
          logs.push(this.maskSecrets(rawLog));
        }
      } else {
        jobExecutionCount++;
        const rawLog = 'Job ' + job.name + ': running [' + job.runCommand + ']';
        logs.push(this.maskSecrets(rawLog));
      }
    }

    return {
      totalJobsExecuted: jobExecutionCount,
      allPassed,
      logs
    };
  }
}

// 1. Initialize runner and configure deployment secret
const runner = new GitHubActionsEngine();
runner.setSecret('PROD_API_KEY', 'secret_token_live_9944');

// 2. Define workflow with 3-version matrix test job and 1 deployment job
const workflowJobs: WorkflowJob[] = [
  {
    name: 'test-matrix',
    matrixVersions: [18, 20, 22], // 3 parallel test matrix runs
    runCommand: 'npm test -- --reporter=tap'
  },
  {
    name: 'deploy-production',
    needs: ['test-matrix'],
    runCommand: 'deploy.sh --token=secret_token_live_9944'
  }
];

// 3. Execute workflow run
const runReport = runner.runWorkflow(workflowJobs);
console.log('Total Jobs Executed: ' + runReport.totalJobsExecuted); // -> 4
console.log('Pipeline Success Status: ' + runReport.allPassed); // -> true

// 4. Verify secret was masked in logs
console.log('Deploy Log Line: ' + runReport.logs[3]); // -> deploy.sh --token=***
const secretExposed = runReport.logs[3].includes('secret_token_live_9944');
console.log('Secret Exposed in Logs?: ' + secretExposed); // -> false`
    }
  ],
  exercises: [
    {
      id: 'act-ex-1',
      kind: 'mcq',
      question: {
        en: 'In which repository directory must GitHub Actions YAML workflow files be placed?',
        bn: 'রিপোজিটরির কোন ডিরেক্টরিতে GitHub Actions YAML ওয়ার্কফ্লো ফাইল রাখতে হয়?'
      },
      options: [
        {
          en: '.github/workflows/',
          bn: '.github/workflows/'
        },
        {
          en: 'src/ci/pipelines/',
          bn: 'src/ci/pipelines/'
        },
        {
          en: '.actions/config/',
          bn: '.actions/config/'
        },
        {
          en: 'build/workflows/',
          bn: 'build/workflows/'
        }
      ],
      answer: 0,
      hint: {
        en: 'It sits in the dot-github folder under a subfolder named workflows.',
        bn: 'এটি ডট-গিটহাব ফোল্ডারের ভেতর workflows নামের সাব-ফোল্ডারে থাকে।'
      },
      explanation: {
        en: 'GitHub Actions scans the .github/workflows/ directory in your repository for any .yml or .yaml files to parse as workflows.',
        bn: 'GitHub Actions স্বয়ংক্রিয়ভাবে রিপোজিটরির .github/workflows/ ডিরেক্টরি থেকে .yml বা .yaml ফাইলগুলো পড়ে ওয়ার্কফ্লো তৈরি করে।'
      }
    },
    {
      id: 'act-ex-2',
      kind: 'mcq',
      question: {
        en: 'What does the "needs: [jobA]" setting accomplish inside a GitHub Actions workflow job?',
        bn: 'GitHub Actions ওয়ার্কফ্লো জবে "needs: [jobA]" সেটিং কী ভূমিকা পালন করে?'
      },
      options: [
        {
          en: 'It blocks this job from running until jobA completes successfully with 0 errors',
          bn: 'এটি jobA সফলভাবে ০ টি ত্রুটি নিয়ে শেষ না হওয়া পর্যন্ত বর্তমান জব চলা আটকে রাখে'
        },
        {
          en: 'It runs both jobs in reverse chronological order inside the browser',
          bn: 'এটি ব্রাউজারের ভেতর উভয় জবকে উল্টো ক্রমানুসারে চালায়'
        },
        {
          en: 'It permanently deletes all log files produced by jobA',
          bn: 'এটি jobA দ্বারা তৈরি সমস্ত লগ ফাইল চিরতরে মুছে ফেলে'
        },
        {
          en: 'It converts the operating system from Linux into macOS',
          bn: 'এটি অপারেটিং সিস্টেমকে লিনাক্স থেকে ম্যাক ওএসে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The "needs" keyword establishes sequential job dependency chains.',
        bn: '"needs" কিওয়ার্ড ধারাবাহিক জবের নির্ভরতা তৈরি করে।'
      },
      explanation: {
        en: 'By default, jobs run in parallel. Specifying "needs" enforces sequential dependencies, ensuring jobs like deploy run only after test suites succeed.',
        bn: 'ডিফল্টভাবে জবগুলো সমান্তরালে চলে। "needs" ব্যবহারের ফলে টেস্ট পাস করার পরেই কেবল ডিপ্লয়মেন্ট জবের মতো পরবর্তী কাজ চালু হয়।'
      }
    },
    {
      id: 'act-ex-3',
      kind: 'mcq',
      question: {
        en: 'How does GitHub Actions protect sensitive credentials stored in repository secrets when printing logs?',
        bn: 'লগ প্রিন্ট করার সময় GitHub Actions রিপোজিটরি সিক্রেটে সংরক্ষিত সংবেদনশীল তথ্য কীভাবে সুরক্ষা দেয়?'
      },
      options: [
        {
          en: 'It masks secret strings with asterisks (***) automatically in console output',
          bn: 'কনসোল আউটপুটে এটি সিক্রেট স্ট্রিংগুলোকে স্বয়ংক্রিয়ভাবে অ্যাস্টেরিস্ক (***) দিয়ে ঢেকে রাখে'
        },
        {
          en: 'It sends encrypted SMS alerts to developers whenever a secret is read',
          bn: 'যেকোনো সিক্রেট পড়ার সময় এটি ডেভেলপারদের কাছে এনক্রিপ্ট করা এসএমএস পাঠায়'
        },
        {
          en: 'It disables all internet connectivity from the runner virtual machine',
          bn: 'এটি রানার ভার্চুয়াল মেশিনের ইন্টারনেট সংযোগ সম্পূর্ণ বন্ধ করে দেয়'
        },
        {
          en: 'It terminates the workflow after exactly 10 seconds of execution',
          bn: 'এটি ঠিক ১০ সেকেন্ড চলার পর ওয়ার্কফ্লো প্রক্রিয়াটি বন্ধ করে দেয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Secret values are replaced with asterisks before logs are streamed to the UI.',
        bn: 'লগ ওয়েবসাইটে প্রদর্শনের আগেই সিক্রেট মানগুলোকে তিনটি তারা দিয়ে ঢেকে দেওয়া হয়।'
      },
      explanation: {
        en: 'GitHub Actions automatically parses console output and replaces registered secret values with ***, preventing accidental credential leakage in public logs.',
        bn: 'GitHub Actions স্বয়ংক্রিয়ভাবে আউটপুট যাচাই করে সিক্রেট মানগুলোকে *** দিয়ে প্রতিস্থাপন করে যাতে অসাবধানতাবশত পাসওয়ার্ড বা কি ফাঁস না হয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-actions-and-the-action',
    title: {
      en: 'GitHub Actions CI/CD Architecture Quiz',
      bn: 'GitHub Actions CI/CD আর্কিটেকচার কুইজ'
    },
    questions: [
      {
        id: 'act-q1',
        kind: 'mcq',
        question: {
          en: 'Which GitHub Actions trigger allows a developer to run a workflow manually on demand via the web UI or API?',
          bn: 'কোন GitHub Actions ট্রিগারটি একজন ডেভেলপারকে ওয়েব UI বা API-এর মাধ্যমে ইচ্ছেমতো ম্যানুয়ালি ওয়ার্কফ্লো চালাতে দেয়?'
        },
        options: [
          {
            en: 'workflow_dispatch',
            bn: 'workflow_dispatch'
          },
          {
            en: 'repository_dispatch_cron',
            bn: 'repository_dispatch_cron'
          },
          {
            en: 'pull_request_target_manual',
            bn: 'pull_request_target_manual'
          },
          {
            en: 'git_checkout_on_demand',
            bn: 'git_checkout_on_demand'
          }
        ],
        answer: 0,
        hint: {
          en: 'Look for the trigger named "workflow_dispatch" which renders a "Run workflow" button.',
          bn: '"workflow_dispatch" ট্রিগারটি GitHub ইন্টারফেসে "Run workflow" বাটন তৈরি করে।'
        },
        explanation: {
          en: '"workflow_dispatch" enables manual trigger buttons in GitHub Actions and supports custom input parameters.',
          bn: '"workflow_dispatch" ব্যবহার করলে ওয়েব ইন্টারফেসে ম্যানুয়ালি ওয়ার্কফ্লো চালানোর বাটন সক্রিয় হয় এবং কাস্টম ইনপুট দেওয়া যায়।'
        }
      },
      {
        id: 'act-q2',
        kind: 'mcq',
        question: {
          en: 'What is the purpose of a build matrix (strategy: matrix:) in a GitHub Actions workflow?',
          bn: 'GitHub Actions ওয়ার্কফ্লোতে বিল্ড ম্যাট্রিক্সের (strategy: matrix:) উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To execute a single job across multiple OS environments and language versions simultaneously in parallel',
            bn: 'একই সাথে সমান্তরালে একাধিক অপারেটিং সিস্টেম এবং ল্যাঙ্গুয়েজ ভার্সনে একটি একক জব পরীক্ষা করা'
          },
          {
            en: 'To store encrypted passwords inside the Git commit database',
            bn: 'Git কমিট ডাটাবেসের ভেতর এনক্রিপ্ট করা পাসওয়ার্ড সংরক্ষণ করা'
          },
          {
            en: 'To automatically translate English comments into Bengali in pull requests',
            bn: 'পুল রিকোয়েস্টে ইংরেজি মন্তব্যকে স্বয়ংক্রিয়ভাবে বাংলায় অনুবাদ করা'
          },
          {
            en: 'To restrict repository access to a single authorized developer',
            bn: 'রিপোজিটরি অ্যাক্সেস কেবল একজন অনুমোদিত ডেভেলপারের জন্য সীমাবদ্ধ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'A matrix expands 1 job into multiple job variations across versions like Node 18, 20, and 22.',
          bn: 'একটি ম্যাট্রিক্স ১ টি জবকে বিভিন্ন ভার্সন (যেমন Node 18, 20, 22)-এর একাধিক সমান্তরাল জবে প্রসারিত করে।'
        },
        explanation: {
          en: 'A matrix strategy tests code against combinations of operating systems and runtime versions concurrently, maximizing testing coverage.',
          bn: 'ম্যাট্রিক্স স্ট্র্যাটেজি একাধিক ওএস ও রানটাইম ভার্সনের সমন্বয়ে একসাথে কোড পরীক্ষা করে বিস্তৃত টেস্ট কভারেজ নিশ্চিত করে।'
        }
      },
      {
        id: 'act-q3',
        kind: 'mcq',
        question: {
          en: 'Why is pinning a third-party Action by a full 40-character commit SHA recommended for production workflows?',
          bn: 'প্রোডাকশন ওয়ার্কফ্লোতে থার্ড-পার্টি অ্যাকশনকে একটি সম্পূর্ণ ৪০-অক্ষরের কমিট SHA দিয়ে পিন করা কেন সুপারিশ করা হয়?'
        },
        options: [
          {
            en: 'To defend against supply chain attacks where a mutable tag like @v1 could be maliciously updated',
            bn: 'সাপ্লাই চেইন আক্রমণ প্রতিহত করতে যেখানে @v1 এর মতো পরিবর্তনশীল ট্যাগ ক্ষতিকরভাবে আপডেট হতে পারে'
          },
          {
            en: 'Because GitHub Actions fails to execute any action referenced by a major version tag',
            bn: 'কারণ প্রধান ভার্সন ট্যাগ দিয়ে রেফারেন্স করলে GitHub Actions কোনো অ্যাকশন চালাতে পারে না'
          },
          {
            en: 'To compress runner storage space on the virtual machine',
            bn: 'ভার্চুয়াল মেশিনে রানার স্টোরেজ স্পেস সংকুচিত করার জন্য'
          },
          {
            en: 'To reduce the pricing tier cost of private repositories to 0 dollars',
            bn: 'প্রাইভেট রিপোজিটরির খরচের স্তর ০ ডলারে নামিয়ে আনার জন্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Git tags can be moved to point to new malicious code, while a Git commit SHA is immutable.',
          bn: 'Git ট্যাগ পরিবর্তন করা সম্ভব হলেও একটি কমিট SHA চিরতরে অপরিবর্তনশীল থাকে।'
        },
        explanation: {
          en: 'Tags like @v1 can be overwritten if a third-party maintainer account is compromised. Pinning an immutable 40-character SHA ensures supply chain security.',
          bn: 'থার্ড-পার্টি অ্যাকাউন্টের অ্যাক্সেস হ্যাক হলে @v1 ট্যাগ বদলানো সম্ভব। তাই অপরিবর্তনশীল ৪০ অক্ষরের SHA পিন করলে কোড বদলানোর ঝুঁকি থাকে না।'
        }
      },
      {
        id: 'act-q4',
        kind: 'mcq',
        question: {
          en: 'How does actions/setup-node caching package dependencies improve CI workflow speed?',
          bn: 'actions/setup-node প্যাকেজ ডিপেন্ডেন্সি ক্যাশ করে কীভাবে CI ওয়ার্কফ্লোর গতি বৃদ্ধি করে?'
        },
        options: [
          {
            en: 'It saves downloaded npm modules so subsequent runs reuse cached files instead of downloading over the internet',
            bn: 'এটি ডাউনলোড করা npm মডিউল সংরক্ষণ করে ফলে পরবর্তী রানগুলো ইন্টারনেট থেকে পুনরায় ডাউনলোড না করে ক্যাশ ব্যবহার করে'
          },
          {
            en: 'It deletes all TypeScript files before starting the test suite',
            bn: 'এটি টেস্ট শুরু করার আগে সমস্ত TypeScript ফাইল মুছে ফেলে'
          },
          {
            en: 'It skips executing all test assertions in unit tests',
            bn: 'এটি ইউনিট টেস্টের সমস্ত অ্যাসারশন চালানো এড়িয়ে যায়'
          },
          {
            en: 'It runs the build command on localhost instead of GitHub cloud runners',
            bn: 'এটি GitHub ক্লাউড রানারের বদলে লোকালহোস্টে বিল্ড চালায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Caching avoids downloading hundreds of megabytes of node_modules on every commit.',
          bn: 'ক্যাশিং প্রতিটি কমিটে শত শত মেগাবাইট node_modules ডাউনলোড করার অপচয় রোধ করে।'
        },
        explanation: {
          en: 'Dependency caching stores downloaded packages between runs. When package-lock.json is unchanged, packages restore in seconds rather than downloading anew.',
          bn: 'ডিপেন্ডেন্সি ক্যাশিং প্যাকেজগুলোকে রানারদের মাঝে সংরক্ষণ করে। ফাইলের পরিবর্তন না থাকলে কয়েক সেকেন্ডের মধ্যে ক্যাশ রিস্টোর হয়।'
        }
      },
      {
        id: 'act-q5',
        kind: 'mcq',
        question: {
          en: 'What is the purpose of configuring an "environment" with Protection Rules on a production deployment job?',
          bn: 'প্রোডাকশন ডিপ্লয়মেন্ট জবে প্রটেকশন রুলস সহ একটি "environment" কনফিগার করার উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To pause automated execution until designated team reviewers provide manual sign-off and approval',
            bn: 'অনুমোদিত টিম রিভিউয়াররা ম্যানুয়াল অনুমোদন না দেওয়া পর্যন্ত স্বয়ংক্রিয় ডিপ্লয়মেন্ট থামিয়ে রাখা'
          },
          {
            en: 'To permanently wipe the target server operating system',
            bn: 'টার্গেট সার্ভারের অপারেটিং সিস্টেম চিরতরে মুছে ফেলা'
          },
          {
            en: 'To prevent any code commits from ever merging into the repository',
            bn: 'রিপোজিটরিতে কোনো কোড কমিট মার্জ হওয়া চিরতরে বন্ধ করা'
          },
          {
            en: 'To enforce that all workflow files are written in pure C++ instead of YAML',
            bn: 'ওয়ার্কফ্লো ফাইলগুলো YAML-এর বদলে খাঁটি C++ এ লেখা বাধ্যতামূলক করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Protected environments require human approval before shipping code to production.',
          bn: 'সুরক্ষিত পরিবেশে প্রোডাকশনে কোড পাঠানোর আগে মানুষের ম্যানুয়াল অনুমোদন আবশ্যক।'
        },
        explanation: {
          en: 'Environment protection rules introduce manual approvals and wait timers. This ensures production deployments require explicit human verification before release.',
          bn: 'এনভায়রনমেন্ট প্রটেকশন রুলস ম্যানুয়াল অনুমোদন যুক্ত করে। এর ফলে প্রোডাকশনে রিলিজের আগে দায়িত্বশীলদের স্পষ্ট সম্মতি প্রয়োজন হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'teams-and-the-team',
    title: {
      en: 'GitHub Teams: Organizations, RBAC & Enterprise Security',
      bn: 'GitHub টিমস: অর্গানাইজেশন, RBAC এবং এন্টারপ্রাইজ সিকিউরিটি'
    }
  }
};
