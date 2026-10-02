import type { Lesson } from '../../../lib/types';

export const ConfigurationAndTheOptionsLesson: Lesson = {
  slug: 'configuration-and-the-options',
  tech: 'dotnet',
  title: {
    en: 'Configuration Providers & The Options Pattern',
    bn: 'কনফিগারেশন প্রোভাইডার এবং অপশনস প্যাটার্ন'
  },
  summary: {
    en: 'Master hierarchical configuration in .NET. Understand configuration provider precedence from appsettings.json to environment variables and CLI arguments, bind strongly-typed settings using the Options Pattern, and compare IOptions, IOptionsSnapshot, and IOptionsMonitor.',
    bn: '.NET-এর হায়ারার্কিকাল কনফিগারেশন ব্যবস্থা আয়ত্ত করুন। appsettings.json থেকে এনভায়রনমেন্ট ভেরিয়েবল ও সিএলআই আর্গুমেন্টের অগ্রাধিকার ক্রম, অপশনস প্যাটার্ন দিয়ে টাইপ-সেফ সেটিংস বাইন্ডিং এবং IOptions, IOptionsSnapshot ও IOptionsMonitor-এর গভীর তুলনা।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'configuration-providers-and-precedence-heading',
      text: {
        en: 'Hierarchical Configuration and Provider Precedence',
        bn: 'হায়ারার্কিকাল কনফিগারেশন এবং প্রোভাইডারের অগ্রাধিকার'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In modern cloud architectures, the .NET (dotnet application runtime) configuration system aggregates settings from multiple distinct sources into a unified key-value hierarchy. When WebApplicationBuilder initializes, it registers configuration providers in a deliberate precedence order. Providers registered later overwrite values supplied by earlier providers. The base layer begins with "appsettings.json", followed by environment-specific overrides such as "appsettings.Production.json". In development, User Secrets shield sensitive API keys. In production container platforms, Environment Variables and Command-Line arguments occupy the highest precedence, allowing DevOps operators to inject secrets and runtime toggles without rebuilding application code.',
        bn: 'আধুনিক ক্লাউড আর্কিটেকচারে .NET (ডটনেট রানটাইম) কনফিগারেশন ব্যবস্থা একাধিক ভিন্ন উৎস থেকে কি-ভ্যালু জোড়া সংগ্রহ করে একটি সুসংহত হায়ারার্কিতে সাজায়। WebApplicationBuilder চালুর সময় কনফিগারেশন প্রোভাইডারগুলোকে একটি নির্দিষ্ট অগ্রাধিকার ক্রমে সাজিয়ে নেয়। পরবর্তী প্রোভাইডারগুলো আগের প্রোভাইডারের মানকে ওভাররাইট করে। ভিত্তিমূলে থাকে "appsettings.json", যার ওপর বসে পরিবেশভিত্তিক "appsettings.Production.json"। ডেভেলপমেন্টের সময় User Secrets এপিআই কি নিরাপদে রাখে। আর প্রোডাকশন কনটেইনার সিস্টেমে Environment Variables এবং Command-Line আর্গুমেন্ট সবচেয়ে শীর্ষে অবস্থান করে, যার ফলে কোড পুনরায় বিল্ড না করেই অপশন বা সিক্রেট পরিবর্তন করা সম্ভব হয়।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: The 4-tier configuration provider precedence pyramid in .NET, demonstrating how upper layers override lower layers.',
        bn: 'চিত্র ১: .NET-এ কনফিগারেশন প্রোভাইডারের ৪-স্তরের অগ্রাধিকার পিরামিড, যেখানে ওপরের স্তর নিচের স্তরকে প্রতিস্থাপন করে।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">.NET CONFIGURATION PROVIDER PRECEDENCE</text>

  <!-- Level 1: appsettings.json -->
  <g transform="translate(40, 65)">
    <rect width="170" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="170" height="30" rx="8" fill="#0284c7" />
    <text x="85" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Base File</text>

    <rect x="10" y="45" width="150" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">appsettings.json</text>
    <text x="15" y="85" fill="#38bdf8" font-size="8" font-family="monospace">Default Fallbacks</text>

    <rect x="10" y="105" width="150" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="8" font-family="monospace">Timeout: 30s</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Committed with Git</text>
  </g>

  <!-- Level 2: Environment Specific -->
  <g transform="translate(235, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#059669" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. Environment Overrides</text>

    <rect x="10" y="45" width="160" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">appsettings.{Env}.json</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Production vs Staging</text>

    <rect x="10" y="105" width="160" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">Logging: Warning</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Stage Targeted</text>
  </g>

  <!-- Level 3: Environment Variables -->
  <g transform="translate(440, 65)">
    <rect width="180" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="180" height="30" rx="8" fill="#d97706" />
    <text x="90" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. Env Variables</text>

    <rect x="10" y="45" width="160" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">Db__Password=secret</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">Double Underscore Key</text>

    <rect x="10" y="105" width="160" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="8" font-family="monospace">Cloud ConfigMaps</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">Zero Hardcoded Keys</text>
  </g>

  <!-- Level 4: CLI Arguments -->
  <g transform="translate(645, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. CLI Args</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">--Urls="http://*"</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Absolute Highest</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="8" font-family="monospace">Overrides All Else</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Runtime Injection</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'options-pattern-and-lifetimes-heading',
      text: {
        en: 'The Options Pattern: IOptions, IOptionsSnapshot, and IOptionsMonitor',
        bn: 'অপশনস প্যাটার্ন: IOptions, IOptionsSnapshot এবং IOptionsMonitor'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Rather than injecting raw IConfiguration string indexers across business services, .NET promotes the strongly-typed Options Pattern. Developers bind configuration sections to POCO (Plain Old CLR Object) classes using "services.Configure<TOptions>()". To consume these settings, .NET provides 3 distinct interfaces tailored to specific lifetimes. IOptions<T> registers as a Singleton, reading configuration once at boot with zero subsequent allocation overhead. IOptionsSnapshot<T> registers as Scoped, reloading values once per HTTP request to support hot reloading in per-request services. Finally, IOptionsMonitor<T> registers as a Singleton, listening to reload tokens via "OnChange(callback)" and exposing the live "CurrentValue" across threads.',
        bn: 'কোডের ভেতর IConfiguration-এর কাঁচা স্ট্রিং ইনডেক্স ব্যবহারের বদলে .NET টাইপ-সেফ অপশনস প্যাটার্ন ব্যবহারের পরামর্শ দেয়। ডেভেলপাররা "services.Configure<TOptions>()" দিয়ে কনফিগারেশন সেকশনগুলোকে POCO (Plain Old CLR Object) ক্লাসে রূপান্তর করেন। সেটিংস ব্যবহারের জন্য .NET লাইফটাইমের ভিত্তিতে ৩ টি ভিন্ন ইন্টারফেস দেয়। IOptions<T> একটি Singleton হিসেবে নিবন্ধিত হয়, যা বুট করার সময় একবার মান পড়ে এবং পরবর্তীতে কোনো মেমোরি খরচ করে না। IOptionsSnapshot<T> একটি Scoped সার্ভিস, যা প্রতি রিকোয়েস্টে নতুন মান পড়ে হট-রিলোড সমর্থন করে। আর IOptionsMonitor<T> একটি Singleton, যা "OnChange(callback)" দিয়ে রিয়েল-টাইমে ফাইলের পরিবর্তন শনাক্ত করে এবং সব থ্রেডে লাইভ "CurrentValue" প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of .NET hierarchical configuration merging and Options Pattern lifetimes: Static IOptions, Scoped IOptionsSnapshot, and Live IOptionsMonitor.',
        bn: '.NET হায়ারার্কিকাল কনফিগারেশন মার্জিং এবং অপশনস প্যাটার্নের ৩ টি লাইফটাইমের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of .NET Configuration Merging and Options Pattern

export interface AppSettings {
  timeoutSeconds: number;
  environmentName: string;
  cacheTtlMinutes: number;
}

export class ConfigurationSimulator {
  private configStore: Record<string, any> = {};

  // Step 1: Layering configurations (Base -> Overrides)
  public loadSource(sourceName: string, data: Record<string, any>): void {
    console.log('[ConfigBuilder] Merging layer:', sourceName);
    this.configStore = { ...this.configStore, ...data };
  }

  public getSection(sectionName: string): any {
    return this.configStore[sectionName] ?? {};
  }
}

// Simulating Options Pattern Lifetimes
export class OptionsPatternSimulator {
  constructor(private currentConfig: AppSettings) {}

  // 1. IOptions<T>: Read once at startup, immutable forever
  public createIOptions(): { value: AppSettings } {
    const snapshot = { ...this.currentConfig };
    return { value: snapshot };
  }

  // 2. IOptionsSnapshot<T>: Evaluated fresh per request scope
  public createIOptionsSnapshot(liveConfigSupplier: () => AppSettings): { value: AppSettings } {
    return { value: { ...liveConfigSupplier() } };
  }

  // 3. IOptionsMonitor<T>: Dynamic singleton with OnChange event listener
  public createIOptionsMonitor(liveConfigSupplier: () => AppSettings) {
    return {
      get currentValue(): AppSettings {
        return liveConfigSupplier();
      },
      onChange: (callback: (newConfig: AppSettings) => void) => {
        console.log('[IOptionsMonitor] Change listener attached.');
      }
    };
  }
}

// Execution demonstration
const configBuilder = new ConfigurationSimulator();

// 1. Base appsettings.json
configBuilder.loadSource('appsettings.json', {
  Database: { timeoutSeconds: 30, environmentName: 'Base', cacheTtlMinutes: 10 }
});

// 2. Environment override (appsettings.Production.json)
configBuilder.loadSource('appsettings.Production.json', {
  Database: { timeoutSeconds: 60, environmentName: 'Production', cacheTtlMinutes: 10 }
});

// 3. Environment Variable override (Cloud container injection)
configBuilder.loadSource('EnvironmentVariables', {
  Database: { timeoutSeconds: 90, environmentName: 'Production', cacheTtlMinutes: 15 }
});

const merged = configBuilder.getSection('Database') as AppSettings;
console.log('Merged Timeout Seconds:', merged.timeoutSeconds); // 90
console.log('Merged Cache TTL Minutes:', merged.cacheTtlMinutes); // 15

const optionsSim = new OptionsPatternSimulator(merged);
const staticOptions = optionsSim.createIOptions();
console.log('Static IOptions Initialized Timeout:', staticOptions.value.timeoutSeconds); // 90`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Configuration Provider',
          def: {
            en: 'Component loading raw configuration keys and values from sources like JSON files, environment variables, or secret vaults.',
            bn: 'কম্পোনেন্ট যা জেসন ফাইল, এনভায়রনমেন্ট ভেরিয়েবল বা ক্লাউড ভল্ট থেকে কনফিগারেশন সংগ্রহ করে।'
          }
        },
        {
          term: 'The Options Pattern',
          def: {
            en: 'Architectural pattern binding unstructured configuration sections to strongly typed C# classes with validation.',
            bn: 'আর্কিটেকচারাল প্যাটার্ন যা কাঁচা কনফিগারেশনকে টাইপ-সেফ ক্লাসে রূপান্তর করে ভ্যালিডেশন নিশ্চিত করে।'
          }
        },
        {
          term: 'IOptionsSnapshot',
          def: {
            en: 'Scoped options accessor recomputed once per HTTP request, enabling live configuration reloads in scoped services.',
            bn: 'Scoped ইন্টারফেস যা প্রতিটি এইচটিটিপি রিকোয়েস্টে নতুন মান পড়ে পরিবর্তনের সুযোগ দেয়।'
          }
        },
        {
          term: 'IOptionsMonitor',
          def: {
            en: 'Singleton options accessor supporting live configuration reloads and change notifications across global background services.',
            bn: 'Singleton ইন্টারফেস যা সার্বক্ষণিক পরিবর্তন পর্যবেক্ষণ করে লাইভ মান সরবরাহ করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'config-provider-precedence-ex1',
      kind: 'mcq',
      topic: 'configuration-provider-precedence-order',
      question: {
        en: 'If a setting is defined in both "appsettings.json" and as an Environment Variable in ASP.NET Core, which value wins by default?',
        bn: 'ASP.NET Core-এ যদি একটি সেটিং "appsettings.json" এবং Environment Variable উভয় স্থানে নির্ধারিত থাকে, তবে ডিফল্টভাবে কোনটির মান অগ্রাধিকার পাবে?'
      },
      options: [
        {
          en: 'The Environment Variable wins, because environment variables are registered after appsettings files in the default WebApplication host builder',
          bn: 'Environment Variable অগ্রাধিকার পাবে, কারণ ডিফল্ট হোস্ট বিল্ডারে ফাইল লোড করার পরে এনভায়রনমেন্ট ভেরিয়েবল যুক্ত করা হয়'
        },
        {
          en: 'appsettings.json always wins because it is written in JSON format',
          bn: 'appsettings.json সর্বদা অগ্রাধিকার পাবে কারণ এটি জেসন ফরম্যাটে লেখা'
        },
        {
          en: 'The application crashes due to duplicate configuration error',
          bn: 'ডুপ্লিকেট কনফিগারেশনের কারণে অ্যাপ্লিকেশন ক্র্যাশ করবে'
        },
        {
          en: 'The shorter string wins alphabetically',
          bn: 'বর্ণানুক্রমিক নিয়মে যে স্ট্রিংটি ছোট সেটি জয়ী হবে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Environment variables override configuration files in the provider hierarchy.',
        bn: 'প্রোভাইডার তালিকায় পরে আসার কারণে এনভায়রনমেন্ট ভেরিয়েবল ফাইলকে ওভাররাইড করে।'
      },
      explanation: {
        en: 'Configuration providers registered later overwrite earlier keys. Environment variables execute after JSON files to facilitate container deployments.',
        bn: 'ক্লাউড ডেপ্লয়মেন্ট সহজ করতে কনটেইনারের এনভায়রনমেন্ট ভেরিয়েবলকে ফাইলের চেয়ে বেশি অগ্রাধিকার দেওয়া হয়।'
      }
    },
    {
      id: 'ioptionssnapshot-captive-dependency-ex2',
      kind: 'mcq',
      topic: 'ioptionssnapshot-cannot-be-injected-into-singleton',
      question: {
        en: 'Why does ASP.NET Core throw an InvalidOperationException if you attempt to inject "IOptionsSnapshot<T>" into a Singleton service?',
        bn: 'একটি Singleton সার্ভিসের ভেতর "IOptionsSnapshot<T>" ইনজেক্ট করার চেষ্টা করলে ASP.NET Core কেন InvalidOperationException দেয়?'
      },
      options: [
        {
          en: 'IOptionsSnapshot is registered as a Scoped service; capturing it in a Singleton causes a captive dependency error violating scope isolation',
          bn: 'IOptionsSnapshot একটি Scoped সার্ভিস হিসেবে নিবন্ধিত; একে সিঙ্গেলটনে ইনজেক্ট করলে ক্যাপটিভ ডিপেনডেন্সি সৃষ্টি হয় যা স্কোপ আইসোলেশন লঙ্ঘন করে'
        },
        {
          en: 'IOptionsSnapshot requires 10 gigabytes of memory to run',
          bn: 'IOptionsSnapshot চলার জন্য ১০ গিগাবাইট মেমোরির প্রয়োজন হয়'
        },
        {
          en: 'Singletons cannot read any configuration files',
          bn: 'সিঙ্গেলটন কোনো কনফিগারেশন ফাইল পড়তে পারে না'
        },
        {
          en: 'IOptionsSnapshot was removed in modern .NET',
          bn: 'আধুনিক .NET-এ IOptionsSnapshot বাদ দেওয়া হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'IOptionsSnapshot is Scoped and cannot be captured by Singletons. Use IOptionsMonitor instead.',
        bn: 'IOptionsSnapshot হলো Scoped; সিঙ্গেলটনে ব্যবহারের জন্য IOptionsMonitor বা IOptions ব্যবহার করতে হয়।'
      },
      explanation: {
        en: 'Because IOptionsSnapshot is scoped per request, injecting it into a singleton traps the request scope. Singletons must inject IOptionsMonitor<T> or IOptions<T>.',
        bn: 'সিঙ্গেলটনে স্কোপড সার্ভিস আটকে গেলে মেমোরি লিক ও থ্রেড সমস্যা তৈরি হয়।'
      }
    },
    {
      id: 'env-var-double-underscore-hierarchical-ex3',
      kind: 'mcq',
      topic: 'environment-variables-double-underscore-delimiter',
      question: {
        en: 'How should the nested JSON key "Database:ConnectionStrings:Primary" be formatted as an Environment Variable in Linux and Docker containers for .NET?',
        bn: 'লিনাক্স এবং ডকার কনটেইনারে .NET-এর নেস্টেড জেসন কি "Database:ConnectionStrings:Primary"-কে কীভাবে Environment Variable হিসেবে ফরম্যাট করতে হয়?'
      },
      options: [
        {
          en: 'Database__ConnectionStrings__Primary (using double underscores to represent hierarchy)',
          bn: 'Database__ConnectionStrings__Primary (হায়ারার্কি বোঝাতে ডাবল আন্ডারস্কোর ব্যবহার করে)'
        },
        {
          en: 'Database.ConnectionStrings.Primary (using single dots)',
          bn: 'Database.ConnectionStrings.Primary (সিঙ্গেল ডট ব্যবহার করে)'
        },
        {
          en: 'Database->ConnectionStrings->Primary (using arrow operators)',
          bn: 'Database->ConnectionStrings->Primary (অ্যারো অপারেটর ব্যবহার করে)'
        },
        {
          en: 'DATABASE/CONNECTIONSTRINGS/PRIMARY (using forward slashes)',
          bn: 'DATABASE/CONNECTIONSTRINGS/PRIMARY (ফরওয়ার্ড স্ল্যাশ ব্যবহার করে)'
        }
      ],
      answer: 0,
      hint: {
        en: 'Double underscores represent colons in Linux/Bash environment variables.',
        bn: 'লিনাক্স বা বাশে কোলন চিহ্নের বদলে ডাবল আন্ডারস্কোর ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'Standard Bash shells do not permit colons in variable names. .NET configuration automatically maps double underscores "__" to section colons ":".',
        bn: 'শেল কমান্ডে কোলন সাপোর্ট না করায় .NET নিজে থেকেই "__" কে ":" হিসেবে রূপান্তর করে।'
      }
    },
    {
      id: 'validateonstart-fail-fast-ex4',
      kind: 'mcq',
      topic: 'validateonstart-options-fail-fast-startup',
      question: {
        en: 'What critical operational benefit does calling ".ValidateOnStart()" provide when registering Options in modern .NET 8?',
        bn: 'আধুনিক .NET ৮ সংস্করণে অপশন নিবন্ধনের সময় ".ValidateOnStart()" মেথড কল করার প্রধান অপারেশনাল সুবিধা কী?'
      },
      options: [
        {
          en: 'It executes DataAnnotations validation immediately during application startup, failing fast and crashing early if critical configuration is missing before serving traffic',
          bn: 'এটি অ্যাপ চালুর মুহূর্তেই DataAnnotations যাচাই সম্পন্ন করে, ফলে ট্রাফিক গ্রহণের আগেই কোনো কনফিগারেশন বাদ পড়লে দ্রুত ক্র্যাশ করে সতর্ক করে'
        },
        {
          en: 'It encrypts all configuration files on the hard drive',
          bn: 'এটি হার্ড ড্রাইভের সমস্ত কনফিগারেশন ফাইল এনক্রিপ্ট করে'
        },
        {
          en: 'It disables logging to increase server speed',
          bn: 'এটি সার্ভারের গতি বাড়াতে লগিং বন্ধ করে দেয়'
        },
        {
          en: 'ValidateOnStart is only executed when running unit tests',
          bn: 'ValidateOnStart কেবল ইউনিট টেস্ট চলার সময় কার্যকর হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'ValidateOnStart validates options at boot rather than on first access.',
        bn: 'ValidateOnStart প্রথম রিকোয়েস্টের অপেক্ষা না করে অ্যাপ চালুর সময়েই ভুল সেটিংস শনাক্ত করে।'
      },
      explanation: {
        en: 'Without ValidateOnStart, invalid configuration is only discovered when a service first resolves the option at runtime. ValidateOnStart guarantees fail-fast reliability.',
        bn: 'ক্লায়েন্টের রিকোয়েস্টে এরর আসার চেয়ে শুরুতেই এরর দিয়ে থেমে যাওয়া প্রোডাকশনের জন্য অনেক নিরাপদ।'
      }
    }
  ],
  quiz: {
    id: 'quiz-configuration-and-the-options',
    title: {
      en: '.NET Configuration & Options Pattern Mastery Quiz',
      bn: '.NET কনফিগারেশন এবং অপশনস প্যাটার্ন কুইজ'
    },
    questions: [
      {
        id: 'quiz-ioptionsmonitor-onchange-hot-reload',
        kind: 'mcq',
        topic: 'ioptionsmonitor-onchange-registration',
        question: {
          en: 'How can a Singleton background worker react dynamically when an operator updates an underlying configuration file without restarting the application?',
          bn: 'অ্যাপ্লিকেশন রিস্টার্ট না করেই কোনো কনফিগারেশন ফাইল পরিবর্তন হলে একটি Singleton ব্যাকগ্রাউন্ড সার্ভিস কীভাবে তা তাৎক্ষণিকভাবে গ্রহণ করতে পারে?'
        },
        options: [
          {
            en: 'Inject IOptionsMonitor<TOptions> and subscribe to the "optionsMonitor.OnChange(newOptions => ...)" event to update internal runtime parameters live',
            bn: 'IOptionsMonitor<TOptions> ইনজেক্ট করে "optionsMonitor.OnChange(newOptions => ...)" ইভেন্টে সাবস্ক্রাইব করে লাইভ প্যারামিটার আপডেট করার মাধ্যমে'
          },
          {
            en: 'By restarting the operating system every 5 minutes',
            bn: 'প্রতি ৫ মিনিট পর পর পুরো অপারেটিং সিস্টেম রিস্টার্ট করে'
          },
          {
            en: 'By manually opening and reading the JSON file with FileStream inside a while loop',
            bn: 'একটি while লুপের ভেতর FileStream দিয়ে ম্যানুয়ালি জেসন ফাইল পড়ে'
          },
          {
            en: 'Hot reloading of configuration is impossible in compiled .NET apps',
            bn: 'কম্পাইল করা .NET অ্যাপে কনফিগারেশন হট-রিলোড করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'IOptionsMonitor exposes OnChange() to listen for reload tokens.',
          bn: 'IOptionsMonitor-এর OnChange মেথড ফাইলের পরিবর্তনের সাথে সাথে নোটিফিকেশন দেয়।'
        },
        explanation: {
          en: 'IOptionsMonitor uses IChangeToken under the hood to notify subscribers whenever underlying configuration files on disk are modified.',
          bn: 'অ্যাপ বন্ধ না করেই রিয়েল-টাইমে ক্যাশ টাইমআউট বা লগের লেভেল পরিবর্তন করা সম্ভব হয়।'
        }
      },
      {
        id: 'quiz-user-secrets-development-only',
        kind: 'mcq',
        topic: 'user-secrets-local-development-safety',
        question: {
          en: 'Where are User Secrets stored on developer machines, and why must they never be used in production environments?',
          bn: 'ডেভেলপারের কম্পিউটারে User Secrets কোথায় সংরক্ষিত থাকে এবং প্রোডাকশনে এটি ব্যবহার করা কেন নিষিদ্ধ?'
        },
        options: [
          {
            en: 'They are stored unencrypted in the user\'s local profile directory outside the source code repository, making them safe from accidental Git commits but unsafe for production security',
            bn: 'এগুলো সোর্স কোড রিপোজিটরির বাইরে ডেভেলপারের লোকাল প্রোফাইল ডিরেক্টরিতে আন-এনক্রিপ্ট অবস্থায় থাকে, যা গিট কমিট রোধ করে কিন্তু প্রোডাকশনের নিরাপত্তার জন্য উপযুক্ত নয়'
          },
          {
            en: 'They are saved directly inside the SQL database engine',
            bn: 'এগুলো সরাসরি এসকিউএল ডেটাবেস ইঞ্জিনে সংরক্ষিত থাকে'
          },
          {
            en: 'They are uploaded automatically to a public GitHub repository',
            bn: 'এগুলো স্বয়ংক্রিয়ভাবে পাবলিক গিটহাব রিপোজিটরিতে আপলোড হয়ে যায়'
          },
          {
            en: 'User Secrets can only be decrypted by Microsoft Azure',
            bn: 'User Secrets কেবল মাইক্রোসফট এজুরে ডিক্রিপ্ট করা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'User Secrets live in local user profiles to prevent secrets leaking to Git.',
          bn: 'গিটহাবে ভুলবশত পাসওয়ার্ড পুশ হওয়া ঠেকাতে এগুলো লোকাল কম্পিউটারের আলাদা ফোল্ডারে থাকে।'
        },
        explanation: {
          en: 'User Secrets prevent developers from committing passwords to source control. In production, secure secret managers like Azure Key Vault or AWS Secrets Manager must be used.',
          bn: 'প্রোডাকশনের জন্য নিরাপদ ক্লাউড সিক্রেট ভল্ট ব্যবহার করাই নিয়ম।'
        }
      },
      {
        id: 'quiz-postconfigure-options-transformation',
        kind: 'mcq',
        topic: 'postconfigure-options-modification',
        question: {
          en: 'What is the purpose of "services.PostConfigure<TOptions>()" in the .NET configuration pipeline?',
          bn: '.NET কনফিগারেশন পাইপলাইনে "services.PostConfigure<TOptions>()"-এর উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To execute initialization logic, set derived fallback values, or override settings after all standard Configure<TOptions> registrations have completed',
            bn: 'সমস্ত সাধারণ Configure<TOptions> সমাপ্ত হওয়ার পরে অতিরিক্ত ইনিশিয়ালাইজেশন সম্পন্ন করা, বিকল্প মান বসানো বা মান সমন্বয় করা'
          },
          {
            en: 'To delete all configuration settings from memory',
            bn: 'মেমোরি থেকে সমস্ত কনফিগারেশন মুছে ফেলা'
          },
          {
            en: 'To convert JSON files into XML files',
            bn: 'জেসন ফাইলগুলোকে এক্সএমএল ফাইলে রূপান্তর করা'
          },
          {
            en: 'PostConfigure is only available on 32-bit hardware',
            bn: 'PostConfigure কেবল ৩২-বিট হার্ডওয়্যারে কাজ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'PostConfigure executes after all Configure calls to finalize options.',
          bn: 'সব কনফিগারেশন শেষ হওয়ার পর একদম শেষে সমন্বয় করতে PostConfigure লাগে।'
        },
        explanation: {
          en: 'PostConfigure runs after all standard configuration actions have executed, making it ideal for calculating dependent properties or applying final validation safeguards.',
          bn: 'অন্যান্য সেটিংসের ওপর ভিত্তি করে কোনো হিসাব বা চূড়ান্ত চেক করার জন্য এটি সেরা।'
        }
      },
      {
        id: 'quiz-azure-key-vault-configuration-provider',
        kind: 'mcq',
        topic: 'azure-key-vault-external-configuration-provider',
        question: {
          en: 'How do cloud-native external configuration providers (such as Azure Key Vault or AWS AppConfig) integrate into the .NET configuration system?',
          bn: 'ক্লাউড-নেটিভ বাহ্যিক কনফিগারেশন প্রোভাইডারগুলো (যেমন Azure Key Vault বা AWS AppConfig) কীভাবে .NET কনফিগারেশনে যুক্ত হয়?'
        },
        options: [
          {
            en: 'They implement IConfigurationSource and IConfigurationProvider, exposing remote cloud secrets as transparent keys directly accessible via IConfiguration and the Options Pattern',
            bn: 'তারা IConfigurationSource এবং IConfigurationProvider ইন্টারফেস বাস্তবায়ন করে ক্লাউড সিক্রেটগুলোকে সাধারণ কি হিসেবে IConfiguration ও অপশনস প্যাটার্নের মাধ্যমে দৃশ্যমান করে'
          },
          {
            en: 'They require modifying the C# compiler binary',
            bn: 'তারা C# কম্পাইলারের বাইনারি ফাইল পরিবর্তনের দাবি করে'
          },
          {
            en: 'They replace the Kestrel web server completely',
            bn: 'তারা Kestrel ওয়েব সার্ভারকে পুরোপুরি প্রতিস্থাপন করে'
          },
          {
            en: 'External providers cannot be combined with appsettings.json',
            bn: 'বাহ্যিক প্রোভাইডারগুলোকে appsettings.json এর সাথে কখনোই মেলানো যায় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'Custom providers implement IConfigurationProvider to seamlessly inject secrets.',
          bn: 'IConfigurationProvider বাস্তবায়নের মাধ্যমে ক্লাউড সিক্রেট সরাসরি কনফিগারেশনে মিশে যায়।'
        },
        explanation: {
          en: 'Because .NET configuration is provider-agnostic, cloud vaults plug in naturally as configuration providers, allowing application code to remain completely decoupled from the secret store.',
          bn: 'কোডে কোনো পরিবর্তন ছাড়াই ক্লাউডের সুরক্ষিত ভল্ট থেকে পাসওয়ার্ড বা টোকেন লোড করা যায়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'entity-framework-and-the-dbcontext',
    title: {
      en: 'Entity Framework Core & DbContext',
      bn: 'Entity Framework Core এবং DbContext'
    }
  }
};
