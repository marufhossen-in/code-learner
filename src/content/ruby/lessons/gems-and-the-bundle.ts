import type { Lesson } from '../../../lib/types';

export const GemsAndTheBundleLesson: Lesson = {
  slug: 'gems-and-the-bundle',
  tech: 'ruby',
  title: {
    en: 'Gems, Bundler, Gemfile & Isolated Runtime Environments',
    bn: 'জেমস, Bundler, Gemfile এবং আইসোলেটেড রানটাইম পরিবেশ'
  },
  summary: {
    en: 'Master package distribution and dependency resolution in the Ruby ecosystem. Understand RubyGems package architecture, declare reproducible dependencies in Gemfile manifests, master pessimistic version constraints (~> 2.4.0), lock deterministic dependency trees using Gemfile.lock, and isolate application runtimes using "bundle exec".',
    bn: 'Ruby ইকোসিস্টেমে প্যাকেজ ডিস্ট্রিবিউশন এবং ডিপেন্ডেন্সি রেজোলিউশন সম্পূর্ণ আয়ত্ত করুন। RubyGems প্যাকেজ আর্কিটেকচার, Gemfile ম্যানিফেস্টে নির্ভরতা ঘোষণা, পেসিমিস্টিক ভার্সন কনস্ট্রেইন্ট (~> 2.4.0), Gemfile.lock দিয়ে নির্ভরযোগ্য ভার্সন লকিং এবং "bundle exec" দিয়ে অ্যাপ্লিকেশনের রানটাইম আইসোলেশন শিখুন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'rubygems-and-gemfile-manifest-heading',
      text: {
        en: 'The RubyGems Ecosystem, Gemfile, and Version Constraints',
        bn: 'RubyGems ইকোসিস্টেম, Gemfile এবং ভার্সন কনস্ট্রেইন্ট'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Collaborative development across distributed software teams requires strict, reproducible library management. In Ruby (the dynamic object-oriented programming language designed for programmer productivity), third-party packages are distributed as "gems". Every gem bundles compiled C extensions or Ruby source code along with a ".gemspec" metadata descriptor. To coordinate multiple interdependent gems across an application, developers rely on the official package manager, Bundler. An application declares its library requirements inside a declarative "Gemfile". Through pessimistic version operators ("~> 2.4.0"), engineers allow safe patch bug fixes while locking the minor and major boundaries.',
        bn: 'বড় সফটওয়্যার টিমে কাজ করার সময় নির্ভরযোগ্য ও পুনরাবৃত্তিযোগ্য লাইব্রেরি ব্যবস্থাপনা অপরিহার্য। কিন্তু Ruby (প্রোগ্রামারদের আনন্দের জন্য তৈরি ডাইনামিক অবজেক্ট-ওরিয়েন্টেড ভাষা)-তে বাইরের সমস্ত থার্ড-পার্টি প্যাকেজ "gem" হিসেবে বিতরণ করা হয়। প্রতিটি জেম তার নিজস্ব C এক্সটেনশন বা Ruby কোড এবং একটি ".gemspec" মেটাডেটা ফাইল সাথে রাখে। একটি অ্যাপ্লিকেশনের অসংখ্য জটিল ও পারস্পরিক নির্ভরশীল জেম নিয়ন্ত্রণ করতে ডেভেলপাররা অফিসিয়াল টুল Bundler ব্যবহার করেন। অ্যাপ্লিকেশন তার প্রয়োজনীয় প্যাকেজগুলো একটি ডিক্লেয়ারেটিভ "Gemfile"-এ ঘোষণা করে। পেসিমিস্টিক ভার্সন অপারেটরের ("~> 2.4.0") মাধ্যমে কোনো ঝুঁকি ছাড়াই নিরাপদ বাগ ফিক্স গ্রহণ করা হয় এবং ব্রেকিং পরিবর্তন প্রতিরোধ করা হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Bundler dependency resolution architecture: Gemfile constraints are resolved into Gemfile.lock and sandboxed at runtime via bundle exec.',
        bn: 'চিত্র ১: Bundler ডিপেন্ডেন্সি রেজোলিউশন আর্কিটেকচার: Gemfile শর্তগুলো সমাধান হয়ে Gemfile.lock-এ জমা হয় এবং bundle exec দিয়ে আইসোলেটেড চলে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">BUNDLER DEPENDENCY LIFECYCLE &amp; RUNTIME ISOLATION</text>

  <!-- Left: Gemfile -->
  <g transform="translate(35, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#0284c7" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Declarative Gemfile</text>

    <rect x="15" y="45" width="210" height="65" rx="5" fill="#0f172a" stroke="#0284c7" />
    <text x="25" y="65" fill="#38bdf8" font-size="10" font-family="monospace">source "https://rubygems.org"</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="10" font-family="monospace">gem "puma", "~&gt; 6.4.0"</text>
    <text x="25" y="100" fill="#34d399" font-size="9" font-family="sans-serif">&gt;= 6.4.0 and &lt; 6.5.0</text>

    <rect x="15" y="120" width="210" height="60" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="140" fill="#34d399" font-size="10" font-family="monospace">group :development, :test do</text>
    <text x="35" y="158" fill="#cbd5e1" font-size="10" font-family="monospace">  gem "rspec-rails"</text>
    <text x="25" y="172" fill="#34d399" font-size="10" font-family="monospace">end</text>

    <rect x="15" y="190" width="210" height="35" rx="5" fill="#0284c7" fill-opacity="0.15" stroke="#38bdf8" />
    <text x="25" y="210" fill="#38bdf8" font-size="9" font-family="sans-serif">Environment group scoping</text>
  </g>

  <!-- Middle: Resolver & Lockfile -->
  <g transform="translate(300, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#d97706" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Resolution &amp; Lockfile</text>

    <rect x="15" y="45" width="210" height="50" rx="5" fill="#0f172a" stroke="#d97706" />
    <text x="25" y="65" fill="#fbbf24" font-size="10" font-family="monospace">bundle install</text>
    <text x="25" y="83" fill="#cbd5e1" font-size="9" font-family="sans-serif">Molinillo dependency solver</text>

    <rect x="15" y="105" width="210" height="75" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="125" fill="#34d399" font-size="10" font-family="monospace">Gemfile.lock Generated</text>
    <text x="25" y="145" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Pins exact resolved versions</text>
    <text x="25" y="162" fill="#cbd5e1" font-size="9" font-family="sans-serif">• Records SHA256 checksums</text>

    <rect x="15" y="190" width="210" height="35" rx="5" fill="#d97706" fill-opacity="0.15" stroke="#f59e0b" />
    <text x="25" y="210" fill="#fbbf24" font-size="9" font-family="sans-serif">Deterministic across all servers</text>
  </g>

  <!-- Right: Runtime Sandbox -->
  <g transform="translate(565, 65)">
    <rect width="240" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="240" height="30" rx="8" fill="#7c3aed" />
    <text x="120" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. bundle exec Isolation</text>

    <rect x="15" y="45" width="210" height="55" rx="5" fill="#0f172a" stroke="#7c3aed" />
    <text x="25" y="65" fill="#c084fc" font-size="10" font-family="monospace">bundle exec puma</text>
    <text x="25" y="85" fill="#cbd5e1" font-size="9" font-family="sans-serif">Sandboxes the Ruby $LOAD_PATH</text>

    <rect x="15" y="110" width="210" height="70" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="25" y="130" fill="#34d399" font-size="10" font-family="sans-serif" font-weight="bold">Collision Prevention:</text>
    <text x="25" y="148" fill="#cbd5e1" font-size="9" font-family="sans-serif">Ignores conflicting global gems</text>
    <text x="25" y="165" fill="#cbd5e1" font-size="9" font-family="sans-serif">installed on host machine</text>

    <rect x="15" y="190" width="210" height="35" rx="5" fill="#7c3aed" fill-opacity="0.15" stroke="#a855f7" />
    <text x="25" y="210" fill="#c084fc" font-size="9" font-family="sans-serif">100% Hermetic execution</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'lockfiles-and-bundle-exec-heading',
      text: {
        en: 'Deterministic Lockfiles and the bundle exec Sandbox',
        bn: 'নির্ধারিত লকফাইল এবং bundle exec স্যান্ডবক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Running "bundle install" executes a mathematical SAT dependency solver that resolves all direct and transitive requirements into "Gemfile.lock". Committing this lockfile to version control ensures that every team member, staging cluster, and production server builds against identical code hashes. Crucially, executing scripts using "bundle exec" (e.g. "bundle exec rake db:migrate") configures Ruby\'s global "$LOAD_PATH" variable at startup. This prevents collisions with newer or incompatible versions of libraries installed globally on the host operating system.',
        bn: '"bundle install" কমান্ডটি একটি শক্তিশালী ডিপেন্ডেন্সি সলভার চালিয়ে সমস্ত প্রত্যক্ষ ও পরোক্ষ প্যাকেজের সম্পর্ক সমাধান করে "Gemfile.lock" তৈরি করে। এই লকফাইলটি গিট ভার্সন কন্ট্রোলে জমা রাখা নিশ্চিত করে যে প্রতিটি টিম মেম্বার, স্টেজিং সার্ভার এবং প্রোডাকশন ক্লাস্টার হুবহু একই কোড হ্যাশ ব্যবহার করছে। সবচেয়ে গুরুত্বপূর্ণ হলো স্ক্রিপ্ট চালানোর সময় "bundle exec" (যেমন "bundle exec rake db:migrate") ব্যবহার করা। এটি স্টার্টআপের সময় Ruby-র গ্লোবাল "$LOAD_PATH" ভ্যারিয়েবলটি লক করা জেমের সাথে কনফিগার করে, ফলে অপারেটিং সিস্টেমে থাকা অন্যান্য অসামঞ্জস্যপূর্ণ গ্লোবাল জেমের সাথে কোনো সংঘর্ষ তৈরি হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Bundler pessimistic version constraint matching, deterministic lockfile pinning, and $LOAD_PATH sandboxing.',
        bn: 'Bundler পেসিমিস্টিক ভার্সন কনস্ট্রেইন্ট মেলানো, লকফাইল পিনিং এবং $LOAD_PATH স্যান্ডবক্সিংয়ের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Ruby Bundler Dependency Resolution and bundle exec Sandbox

export interface GemManifestSpec {
  name: string;
  pessimisticConstraint: string; // e.g. "~> 2.4.0"
  availableRemoteVersions: string[];
}

export class RubyBundlerSimulator {
  // Simulates pessimistic constraint "~> X.Y.Z":
  // "~> 2.4.0" means: >= 2.4.0 and < 2.5.0 (locks major and minor, allows patch updates)
  // "~> 2.4" means: >= 2.4.0 and < 3.0.0 (locks major, allows minor and patch updates)
  public static resolvePessimistic(constraint: string, available: string[]): string {
    const baseVer = constraint.replace('~>', '').trim();
    const parts = baseVer.split('.').map(Number);

    let maxMajor = parts[0];
    let maxMinor = parts[1];

    const isValid = (v: string): boolean => {
      const [vMaj, vMin, vPatch] = v.split('.').map(Number);
      if (parts.length === 3) {
        // Locks major and minor: must match major and minor exactly, patch >= base patch
        return vMaj === maxMajor && vMin === maxMinor && vPatch >= parts[2];
      } else {
        // Locks only major: must match major, minor >= base minor
        return vMaj === maxMajor && vMin >= parts[1];
      }
    };

    const matches = available.filter(isValid);
    return matches.sort().reverse()[0] ?? baseVer;
  }

  // Simulates bundle exec sandboxing the $LOAD_PATH
  public static bundleExec(lockedGems: Record<string, string>, requestedGem: string, hostInstalledVersion: string): string {
    const lockedVer = lockedGems[requestedGem];
    if (lockedVer) {
      // bundle exec forces the process to load the exact locked version!
      return 'Loaded isolated locked version ' + lockedVer + ' (bypassed host system version ' + hostInstalledVersion + ')';
    }
    return 'Gem not found in Gemfile.lock';
  }
}

// Execution Demonstration
console.log('--- 1. Testing Pessimistic Version Resolution (~> 2.4.0) ---');
const pumaSpec: GemManifestSpec = {
  name: 'puma',
  pessimisticConstraint: '~> 2.4.0', // >= 2.4.0 and < 2.5.0
  availableRemoteVersions: ['2.3.9', '2.4.0', '2.4.2', '2.5.0', '3.0.0']
};

const resolvedPuma = RubyBundlerSimulator.resolvePessimistic(pumaSpec.pessimisticConstraint, pumaSpec.availableRemoteVersions);
console.log('Gem Requested:', pumaSpec.name);
console.log('Constraint:', pumaSpec.pessimisticConstraint); // ~> 2.4.0
console.log('Resolved Version in Gemfile.lock:', resolvedPuma); // 2.4.2 (Highest safe patch!)

console.log('\n--- 2. Testing bundle exec Isolation Sandbox ---');
const projectLockfile: Record<string, string> = {
  puma: '2.4.2',
  rails: '7.1.3'
};

const execResult = RubyBundlerSimulator.bundleExec(projectLockfile, 'puma', '3.1.0');
console.log('bundle exec puma Result:', execResult);
// Loaded isolated locked version 2.4.2 (bypassed host system version 3.1.0)`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'RubyGems & Gemfile',
          def: {
            en: 'Package standard and declarative project manifest listing application dependencies and repository sources.',
            bn: 'প্যাকেজ স্ট্যান্ডার্ড এবং প্রজেক্ট ম্যানিফেস্ট যাতে সমস্ত লাইব্রেরি নির্ভরতা ও রিপোজিটরি উল্লেখ থাকে।'
          }
        },
        {
          term: 'Pessimistic Constraint (~>)',
          def: {
            en: 'Version operator allowing safe patch updates up to the next non-breaking boundary (e.g. ~> 2.4.0).',
            bn: 'ভার্সন অপারেটর যা পরবর্তী ব্রেকিং পরিবর্তনের আগ পর্যন্ত নিরাপদ প্যাচ আপডেট গ্রহণের অনুমতি দেয়।'
          }
        },
        {
          term: 'Gemfile.lock',
          def: {
            en: 'Generated lockfile recording exact resolved versions and checksums for deterministic environments.',
            bn: 'জেনারেটেড লকফাইল যা সমস্ত প্যাকেজের সঠিক ভার্সন ও চেকসাম রেকর্ড করে একরূপ পরিবেশ নিশ্চিত করে।'
          }
        },
        {
          term: 'bundle exec ($LOAD_PATH)',
          def: {
            en: 'Command running scripts strictly in the locked gem context, modifying $LOAD_PATH to prevent collisions.',
            bn: 'কমান্ড যা লক করা সংস্করণের ভেতর স্ক্রিপ্ট চালায় এবং গ্লোবাল প্যাকেজের সাথে সংঘর্ষ প্রতিরোধ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'pessimistic-version-operator-ex1',
      kind: 'mcq',
      topic: 'ruby-pessimistic-version-operator-semantics',
      question: {
        en: 'What exact version range does the pessimistic constraint "gem \'sidekiq\', \'~> 7.1.0\'" allow in a Gemfile?',
        bn: 'একটি Gemfile-এ "gem \'sidekiq\', \'~> 7.1.0\'" লিখলে সুনির্দিষ্টভাবে কোন ভার্সন সীমাটি গৃহীত হয়?'
      },
      options: [
        {
          en: 'Any version greater than or equal to 7.1.0 and strictly less than 7.2.0 (>= 7.1.0 and < 7.2.0), permitting safe patch updates while locking the minor version',
          bn: '৭.১.০-এর সমান বা বড় এবং কঠোরভাবে ৭.২.০-এর ছোট যেকোনো ভার্সন (>= 7.1.0 and < 7.2.0), যা নিরাপদ প্যাচ আপডেট দেয় কিন্তু মাইনর ভার্সন লক রাখে'
        },
        {
          en: 'Strictly version 7.1.0 only, forbidding all patch releases',
          bn: 'কঠোরভাবে কেবল ৭.১.০ সংস্করণ এবং অন্য কোনো আপডেট নিষিদ্ধ'
        },
        {
          en: 'Any version up to version 99.0.0',
          bn: '৯৯.০.০ সংস্করণ পর্যন্ত প্রকাশিত যেকোনো ভার্সন'
        },
        {
          en: 'The tilde operator was deprecated in Bundler 2.0',
          bn: 'Bundler ২.০ সংস্করণে টিল্ডা অপারেটর বাদ দেওয়া হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: '~> with 3 digits locks major and minor, allowing only patch releases.',
        bn: 'তিন সংখ্যার পেসিমিস্টিক অপারেটর শেষ সংখ্যাটি পরিবর্তনের সুযোগ দিয়ে বাকিগুলো লক রাখে।'
      },
      explanation: {
        en: 'The pessimistic operator ("~>") locks the most significant specified segment. "~> 7.1.0" locks 7.1, accepting only patch upgrades < 7.2.0.',
        bn: 'এর মাধ্যমে কোনো ব্রেকিং পরিবর্তন ছাড়া শুধুমাত্র বাগ ফিক্স স্বয়ংক্রিয়ভাবে পাওয়া যায়।'
      }
    },
    {
      id: 'gemfile-lock-source-control-ex2',
      kind: 'mcq',
      topic: 'gemfile-lock-source-control-reproducibility',
      question: {
        en: 'Why is committing "Gemfile.lock" to Git mandatory for web applications?',
        bn: 'ওয়েব অ্যাপ্লিকেশনের জন্য কেন "Gemfile.lock" ফাইলটি গিট ভার্সন কন্ট্রোলে জমা রাখা বাধ্যতামূলক?'
      },
      options: [
        {
          en: 'It guarantees that every developer, test suite, and production deployment compiles against identical package versions and SHA checksums',
          bn: 'এটি নিশ্চিত করে যে প্রতিটি ডেভেলপার, টেস্ট স্যুট এবং প্রোডাকশন সার্ভার হুবহু একই প্যাকেজ ভার্সন ও SHA চেকসাম নিয়ে চলবে'
        },
        {
          en: 'It accelerates computer hardware clock speeds by 20 percent',
          bn: 'এটি কম্পিউটারের প্রসেসর ক্লক স্পিড ২০ শতাংশ বাড়িয়ে দেয়'
        },
        {
          en: 'It automatically fixes all syntax errors in Ruby code',
          bn: 'এটি স্বয়ংক্রিয়ভাবে Ruby কোডের সমস্ত সিনট্যাক্স ভুল ঠিক করে'
        },
        {
          en: 'Gemfile.lock should only be kept on floppy disks',
          bn: 'Gemfile.lock কেবল ফ্লপি ডিস্কেই সংরক্ষণ করা উচিত'
        }
      ],
      answer: 0,
      hint: {
        en: 'Gemfile.lock prevents "it works on my machine" bugs by freezing exact versions.',
        bn: 'আমার কম্পিউটারে চলে কিন্তু সার্ভারে চলে না—এই কুখ্যাত সমস্যা দূর করাই এর কাজ।'
      },
      explanation: {
        en: 'Without Gemfile.lock, running "bundle install" on different days installs the latest allowable versions, causing subtle bugs. Lockfiles enforce deterministic builds.',
        bn: 'লকফাইল থাকায় প্রতি মেশিনে হুবহু একই জেম ডাউনলোড হয় এবং অনাকাঙ্ক্ষিত বাগ রোধ হয়।'
      }
    },
    {
      id: 'bundle-exec-load-path-ex3',
      kind: 'mcq',
      topic: 'bundle-exec-runtime-isolation-load-path',
      question: {
        en: 'What problem does running commands through "bundle exec" (e.g. "bundle exec rails server") resolve?',
        bn: '"bundle exec"-এর মাধ্যমে কমান্ড চালানো (যেমন "bundle exec rails server") কোন গুরুতর সমস্যার সমাধান করে?'
      },
      options: [
        {
          en: 'It modifies the Ruby $LOAD_PATH to load exclusively the gem versions specified in Gemfile.lock, ignoring conflicting newer gems installed on the host system',
          bn: 'এটি Ruby-র $LOAD_PATH পরিবর্তন করে কেবল Gemfile.lock-এ উল্লিখিত জেমগুলোকে লোড করে এবং সিস্টেমের অন্যান্য নতুন জেমের সাথে সংঘর্ষ এড়ায়'
        },
        {
          en: 'It encrypts the database password with RSA keys',
          bn: 'এটি আরএসএ কি দিয়ে ডেটাবেসের পাসওয়ার্ড এনক্রিপ্ট করে'
        },
        {
          en: 'It converts the Ruby server into an Apache web server',
          bn: 'এটি Ruby সার্ভারকে অ্যাপাচি ওয়েব সার্ভারে রূপান্তর করে'
        },
        {
          en: 'bundle exec was replaced by docker run in 2020',
          bn: '২০২০ সালে bundle exec-এর বদলে docker run চালু করা হয়েছিল'
        }
      ],
      answer: 0,
      hint: {
        en: 'bundle exec isolates the execution environment to locked dependencies.',
        bn: 'সার্ভারে অন্য কোনো জেমের নতুন ভার্সন থাকলেও প্রজেক্টের নিজস্ব ভার্সনেই কোড চালানোর সুরক্ষা।'
      },
      explanation: {
        en: 'A developer machine may have multiple versions of Rails installed. "bundle exec" ensures that the script runs against the exact version specified in the project lockfile.',
        bn: 'এর মাধ্যমে একাধিক প্রোজেক্টে কাজ করার সময় বিভিন্ন ভার্সনের মাঝে কোনো মেথড সংঘর্ষ ঘটে না।'
      }
    },
    {
      id: 'gemfile-environment-groups-ex4',
      kind: 'mcq',
      topic: 'gemfile-environment-groups-scoping',
      question: {
        en: 'What is the purpose of placing testing libraries inside "group :test do ... end" in a Gemfile?',
        bn: 'Gemfile-এ "group :test do ... end"-এর ভেতরে টেস্টিং লাইব্রেরিগুলো রাখার উদ্দেশ্য কী?'
      },
      options: [
        {
          en: 'It allows production servers to run "bundle install --without test", reducing deployment download size and memory overhead',
          bn: 'এটি প্রোডাকশন সার্ভারে "bundle install --without test" চালানোর সুযোগ দেয়, ফলে রিলিজের আকার ছোট হয় এবং মেমোরি বাঁচে'
        },
        {
          en: 'It forces testing gems to run on separate Linux kernels',
          bn: 'এটি টেস্টিং জেমগুলোকে আলাদা লিনাক্স কার্নেলে চলতে বাধ্য করে'
        },
        {
          en: 'It converts tests into PDF documents for printing',
          bn: 'এটি টেস্টগুলোকে প্রিন্ট করার জন্য পিডিএফ ফাইলে রূপান্তর করে'
        },
        {
          en: 'Groups are not supported in Bundler 2',
          bn: 'Bundler ২-এ কোনো গ্রুপ সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Groups isolate test and development tools from production servers.',
        bn: 'প্রোডাকশন সার্ভারে অপ্রয়োজনীয় টেস্টিং টুল ডাউনলোড না করে অ্যাপ হালকা রাখার কৌশল।'
      },
      explanation: {
        en: 'Libraries like RSpec and debuggers are unnecessary in production. Grouping lets CI and deployment scripts omit heavy development tools from production containers.',
        bn: 'এর ফলে প্রোডাকশন কন্টেইনার দ্রুত ডিপ্লয় হয় এবং নিরাপত্তা ঝুঁকি হ্রাস পায়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-gems-and-the-bundle',
    title: {
      en: 'Ruby Gems & Bundler Quiz',
      bn: 'Ruby জেমস এবং Bundler কুইজ'
    },
    questions: [
      {
        id: 'quiz-bundle-binstubs-performance',
        kind: 'mcq',
        topic: 'bundle-binstubs-bin-directory-executables',
        question: {
          en: 'Why do production Rails applications generate binstubs in "bin/" (like "bin/rails" and "bin/puma")?',
          bn: 'প্রোডাকশন Rails অ্যাপ্লিকেশন কেন "bin/" ফোল্ডারে বিনস্টাব তৈরি করে (যেমন "bin/rails" এবং "bin/puma")?'
        },
        options: [
          {
            en: 'Binstubs bootstrap the Bundler environment directly without the slow startup latency of executing the "bundle exec" wrapper script',
            bn: 'বিনস্টাবগুলো "bundle exec" স্ক্রিপ্টের ধীরগতির বিলম্ব এড়িয়ে সরাসরি অতি দ্রুত Bundler পরিবেশ সক্রিয় করে'
          },
          {
            en: 'They translate Ruby code into WebAssembly',
            bn: 'তারা Ruby কোডকে ওয়েবঅ্যাসেম্বলিতে রূপান্তর করে'
          },
          {
            en: 'They reboot the database on every HTTP request',
            bn: 'তারা প্রতিটি HTTP রিকোয়েস্টে ডেটাবেস রিবুট করে'
          },
          {
            en: 'Binstubs were removed in Rails 6.0',
            bn: 'Rails ৬.০ সংস্করণে বিনস্টাব বাদ দেওয়া হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Binstubs provide fast, direct wrappers around bundle exec.',
          bn: 'বারবার দীর্ঘ কমান্ড টাইপ না করে চোখের পলকে স্ক্রিপ্ট চালু করার চমৎকার ব্যবস্থা।'
        },
        explanation: {
          en: 'Binstubs (generated via "bundle binstubs") load the exact Gemfile environment efficiently, allowing developers to type "./bin/puma" instead of the slower "bundle exec puma".',
          bn: 'এর মাধ্যমে অ্যাপ্লিকেশনের স্টার্টআপ স্পিড দ্রুত হয় এবং কমান্ড চালানো সহজ হয়।'
        }
      },
      {
        id: 'quiz-c-extensions-in-gems',
        kind: 'mcq',
        topic: 'native-c-extensions-gem-compilation',
        question: {
          en: 'Why do performance-critical gems like "nokogiri" and "pg" require a C compiler (like gcc or clang) during "bundle install"?',
          bn: '"nokogiri" এবং "pg"-এর মতো দ্রুতগতির জেমগুলো "bundle install"-এর সময় কেন C কম্পাইলারের (যেমন gcc বা clang) প্রয়োজন হয়?'
        },
        options: [
          {
            en: 'They contain native C extensions that compile directly to CPU machine code to achieve high-throughput XML parsing and PostgreSQL database connectivity',
            bn: 'এগুলোতে নেটিভ C এক্সটেনশন থাকে যা দ্রুত XML পার্সিং ও PostgreSQL সংযোগের জন্য সরাসরি CPU মেশিন কোডে কম্পাইল হয়'
          },
          {
            en: 'They rewrite the entire Linux operating system during installation',
            bn: 'তারা ইনস্টলেশনের সময় পুরো লিনাক্স অপারেটিং সিস্টেম পুনরায় লিখে'
          },
          {
            en: 'Ruby cannot parse text without a C compiler',
            bn: 'C কম্পাইলার ছাড়া Ruby কোনো টেক্সট পার্স করতে পারে না'
          },
          {
            en: 'Native gems were banned by RubyGems in 2022',
            bn: '২০২২ সালে RubyGems নেটিভ জেম নিষিদ্ধ করেছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'Native C extensions interface directly with C libraries for extreme speed.',
          bn: 'সরাসরি প্রসেসরের গতিতে ডেটাবেস ও পার্সিং কাজ করানোর জন্য C কোড কম্পাইল করা হয়।'
        },
        explanation: {
          en: 'Ruby allows gems to bridge with native C code. Tools like Nokogiri compile C headers against libxml2, delivering massive performance boosts over pure-Ruby parsers.',
          bn: 'ফলে সাধারণ স্ক্রিপ্টের চেয়ে শত গুণ দ্রুত গতিতে জটিল কাজ সম্পন্ন করা যায়।'
        }
      },
      {
        id: 'quiz-gem-specification-gemspec-files',
        kind: 'mcq',
        topic: 'gemspec-metadata-and-publishing',
        question: {
          en: 'What is the role of the ".gemspec" file when authoring and publishing a reusable Ruby library to RubyGems.org?',
          bn: 'RubyGems.org-এ একটি পুনর্ব্যবহারযোগ্য লাইব্রেরি প্রকাশ করার সময় ".gemspec" ফাইলের ভূমিকা কী?'
        },
        options: [
          {
            en: 'It defines library metadata including package name, semantic version, author info, required Ruby versions, and runtime dependencies for package consumers',
            bn: 'এটি প্যাকেজের নাম, সেমভার সংস্করণ, লেখকের তথ্য, প্রয়োজনীয় Ruby সংস্করণ এবং ব্যবহারের জন্য আবশ্যকীয় ডিপেন্ডেন্সির তালিকা ঘোষণা করে'
          },
          {
            en: 'It stores the user credit card details for billing',
            bn: 'এটি বিলিংয়ের জন্য ব্যবহারকারীর ক্রেডিট কার্ডের বিবরণ সংরক্ষণ করে'
          },
          {
            en: 'It converts the library into a mobile Android APK',
            bn: 'এটি লাইব্রেরিটিকে মোবাইল অ্যান্ড্রয়েড এপিকে-তে রূপান্তর করে'
          },
          {
            en: 'gemspec files were replaced by package.json in Ruby 3',
            bn: 'Ruby ৩-এ gemspec ফাইলকে package.json দিয়ে প্রতিস্থাপন করা হয়েছিল'
          }
        ],
        answer: 0,
        hint: {
          en: 'The gemspec holds the manifest for publishing a gem to the community.',
          bn: 'লাইব্রেরির পরিচয়পত্র ও ডিপেন্ডেন্সি বিবরণী যা দেখে অন্যরা জেমটি ব্যবহার করতে পারে।'
        },
        explanation: {
          en: 'A ".gemspec" is the formal package manifest. It tells "gem build" which files to pack and tells "gem install" which dependencies must be pulled down.',
          bn: 'এর মাধ্যমেই একটি জেমের সমস্ত প্রয়োজনীয় নিয়ম ও ফাইল কাঠামো সার্বজনীনভাবে স্বীকৃত হয়।'
        }
      },
      {
        id: 'quiz-bundler-git-sources-branching',
        kind: 'mcq',
        topic: 'bundler-git-source-repositories',
        question: {
          en: 'How can an engineering team temporarily use an unreleased bug fix from a GitHub repository in their Gemfile?',
          bn: 'কোনো গিটহাব রিপোজিটরি থেকে অপ্রকাশিত বাগ ফিক্স সাময়িকভাবে Gemfile-এ ব্যবহার করার উপায় কী?'
        },
        options: [
          {
            en: 'Specifying the git repository and branch directly: gem \'faraday\', git: \'https://github.com/lostisland/faraday.git\', branch: \'main\'',
            bn: 'সরাসরি গিট রিপোজিটরি এবং ব্রাঞ্চ উল্লেখ করে: gem \'faraday\', git: \'https://github.com/lostisland/faraday.git\', branch: \'main\''
          },
          {
            en: 'By sending a pull request to the Ruby core VM team',
            bn: 'Ruby কোর ভার্চুয়াল মেশিন টিমের কাছে একটি পুল রিকোয়েস্ট পাঠিয়ে'
          },
          {
            en: 'By disabling the computer firewall',
            bn: 'কম্পিউটারের ফায়ারওয়াল বন্ধ করে'
          },
          {
            en: 'Git sources are strictly prohibited by Bundler',
            bn: 'Bundler-এ গিট সোর্স ব্যবহার সম্পূর্ণ নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Bundler supports pulling gems directly from Git repositories and branches.',
          bn: 'অফিসিয়াল রিলিজের অপেক্ষা না করে সরাসরি গিটহাবে থাকা কোড প্রজেক্টে যুক্ত করার সহজ উপায়।'
        },
        explanation: {
          en: 'Bundler can clone and build gems directly from GitHub branches or commit SHAs, pinning the exact commit hash into Gemfile.lock until an official gem is released.',
          bn: 'লকফাইলটি গিটের সুনির্দিষ্ট কমিট হ্যাশ পিন করে রাখে, ফলে রিলিজের আগেও সুরক্ষিত থাকে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'rails-and-the-route',
    title: {
      en: 'Ruby on Rails: RESTful Routing, MVC & Active Record',
      bn: 'Ruby on Rails: RESTful রাউটিং, MVC এবং অ্যাক্টিভ রেকর্ড'
    }
  }
};
