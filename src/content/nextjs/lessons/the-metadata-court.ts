import type { Lesson } from '../../../lib/types';

export const metadataCourtLesson: Lesson = {
  slug: 'the-metadata-court',
  tech: 'nextjs',
  title: {
    en: 'Metadata, SEO & Production Deployment — OpenGraph, Standalone Docker & Performance',
    bn: 'মেটাডাটা, এসইও ও প্রোডাকশন ডেপ্লয়মেন্ট — OpenGraph, স্ট্যান্ডঅ্যালোন ডকার ও পারফরম্যান্স'
  },
  summary: {
    en: 'Taking a Next.js application to production requires comprehensive SEO metadata, optimized media assets, and hardened container deployment architectures. In this capstone lesson, you will master static and dynamic metadata generation, social OpenGraph cards, route-served sitemaps and robots files, next/image optimization, and lightweight standalone Docker builds.',
    bn: 'একটি Next.js অ্যাপ্লিকেশনকে প্রোডাকশনে সফলভাবে ডেপ্লয় করতে মানসম্মত এসইও মেটাডাটা, অপটিমাইজড মিডিয়া অ্যাসেট এবং স্থিতিশীল ডকার কন্টেইনার আর্কিটেকচার প্রয়োজন। এই সমাপনী পাঠে আপনি স্ট্যাটিক ও ডায়নামিক মেটাডাটা জেনারেশন, সোশ্যাল OpenGraph কার্ড, সাইটম্যাপ ও robots ফাইল, next/image অপটিমাইজেশন এবং হালকা স্ট্যান্ডঅ্যালোন ডকার বিল্ড গভীরভাবে শিখবেন।'
  },
  minutes: 35,
  blocks: [
    {
      type: 'heading',
      id: 'metadata-production-architecture',
      text: {
        en: 'The SEO Metadata and Production Architecture',
        bn: 'এসইও মেটাডাটা ও প্রোডাকশন আর্কিটেকচার'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When web crawlers and social media platforms visit your Next.js application, the framework compiles your metadata definitions directly into the HTML document head. By combining title templates in your root layout with dynamic metadata functions on individual product pages, you achieve enterprise search ranking without duplicating database queries.',
        bn: 'যখন সার্চ ইঞ্জিন ক্রলার এবং সোশ্যাল মিডিয়া প্ল্যাটফর্ম আপনার Next.js সাইট পরিদর্শন করে, তখন ফ্রেমওয়ার্ক আপনার ঘোষিত মেটাডাটাকে সরাসরি এইচটিএমএল হেডারে কম্পাইল করে দেয়। রুট লেআউটের টাইটেল টেমপ্লেটের সাথে প্রতিটি প্রোডাক্ট পেজে ডায়নামিক মেটাডাটা ফাংশন মিলিয়ে অতিরিক্ত কুয়েরি ছাড়াই চমৎকার সার্চ র‍্যাংকিং নিশ্চিত করা যায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'generateMetadata()',
          def: {
            en: 'An asynchronous function in page.tsx that fetches dynamic parameters to produce tailored SEO titles, descriptions, and OpenGraph tags.',
            bn: 'page.tsx-এ ব্যবহৃত একটি অ্যাসিনক্রোনাস ফাংশন যা ডায়নামিক ডাটা দিয়ে কাস্টম এসইও টাইটেল ও মেটা বিবরণ তৈরি করে।'
          }
        },
        {
          term: 'metadataBase',
          def: {
            en: 'A root metadata URL configuring the base domain so relative OpenGraph image URLs and canonical links resolve into absolute addresses.',
            bn: 'রুট লেআউটে নির্ধারিত মূল ডোমেন ইউআরএল যা দিয়ে সব আপেক্ষিক ইমেজ ও ক্যানোনিকাল লিংক সম্পূর্ণ পূর্ণাঙ্গ ঠিকানায় পরিণত হয়।'
          }
        },
        {
          term: 'sitemap.ts & robots.ts',
          def: {
            en: 'Special code-driven route files that dynamically generate /sitemap.xml and /robots.txt from live database records.',
            bn: 'বিশেষ ফাইল যা ডাটাবেজের আসল ডাটা পড়ে স্বয়ংক্রিয়ভাবে /sitemap.xml এবং /robots.txt তৈরি করে সার্চ ইঞ্জিনকে জানায়।'
          }
        },
        {
          term: 'output: "standalone"',
          def: {
            en: 'A Next.js build configuration tracing only required production dependencies, shrinking Docker images from over 1 GB down to approximately 100 MB.',
            bn: 'একটি নেক্সট.জেএস বিল্ড কনফিগ যা বাড়তি ফাইল বাদ দিয়ে ডকার ইমেজ সাইজ ১ গিগাবাইট থেকে কমিয়ে প্রায় ১০০ মেগাবাইটে নামিয়ে আনে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'seo-production-matrix',
      text: {
        en: 'Production Optimization Components Matrix',
        bn: 'প্রোডাকশন অপটিমাইজেশন উপাদান ম্যাট্রিক্স'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Optimization Feature', bn: 'ফিচার' },
        { en: 'Next.js Implementation File', bn: 'ফাইলের ধরন' },
        { en: 'Production Performance Benefit', bn: 'পারফরম্যান্স সুবিধা' }
      ],
      rows: [
        [
          { en: 'Dynamic SEO Metadata', bn: 'ডায়নামিক এসইও মেটাডাটা' },
          { en: 'export async function generateMetadata()', bn: 'export async function generateMetadata()' },
          { en: 'Page-specific title and social card unfurling on platforms', bn: 'সোশ্যাল মিডিয়ায় পেজ শেয়ার করলে সুন্দর প্রিভিউ কার্ড প্রদর্শন' }
        ],
        [
          { en: 'Crawling Rules', bn: 'ক্রলিং নিয়মাবলী' },
          { en: 'app/robots.ts generating /robots.txt', bn: 'app/robots.ts (তৈরি করে /robots.txt)' },
          { en: 'Fences private admin areas from crawler indexation', bn: 'সার্চ ইঞ্জিনকে গোপন অ্যাডমিন পেজ ইনডেক্স করা থেকে বিরত রাখে' }
        ],
        [
          { en: 'Image Delivery Optimization', bn: 'ইমেজ অপটিমাইজেশন' },
          { en: 'import Image from "next/image"', bn: 'import Image from "next/image"' },
          { en: 'Auto WebP conversion, responsive srcset, zero Cumulative Layout Shift', bn: 'স্বয়ংক্রিয় WebP ফরম্যাট ও লেআউট শিফট ছাড়া দ্রুত ইমেজ লোড' }
        ],
        [
          { en: 'Docker Standalone Image', bn: 'ডকার স্ট্যান্ডঅ্যালোন বিল্ড' },
          { en: 'next.config.js { output: "standalone" }', bn: 'next.config.js { output: "standalone" }' },
          { en: 'Shrinks production deployment container by 90% for fast scaling', bn: 'কন্টেইনারের ওজন ৯০% কমিয়ে ক্লাউডে বিদ্যুৎ গতিতে ডিপ্লয়মেন্ট নিশ্চিত' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'metadata-simulation-code',
      text: {
        en: 'Working Metadata Hierarchy and Standalone Size Simulation',
        bn: 'কার্যকরী মেটাডাটা উত্তরাধিকার ও স্ট্যান্ডঅ্যালোন সাইজ সিমুলেশন'
      }
    },
    {
      type: 'code',
      code: `// Simulation of Next.js Metadata Resolution and Container Size Reduction
class MockMetadataCompiler {
  constructor(rootConfig) {
    this.rootConfig = rootConfig;
  }

  // Resolves metadata title with template inheritance
  resolveTitle(pageTitle) {
    if (!pageTitle) return this.rootConfig.title.default;
    return this.rootConfig.title.template.replace('%s', pageTitle);
  }

  // Compares standard Docker image vs standalone traced container
  calculateImageSizes() {
    const fullNodeModulesMb = 1050; // Standard monolithic container
    const standaloneTracedMb = 95;   // Traced standalone output
    const savingsPercent = Math.round(((fullNodeModulesMb - standaloneTracedMb) / fullNodeModulesMb) * 100);
    return { fullMb: fullNodeModulesMb, standaloneMb: standaloneTracedMb, savings: savingsPercent };
  }
}

const compiler = new MockMetadataCompiler({
  title: {
    template: '%s | TechStore',
    default: 'TechStore — Modern Hardware'
  }
});

// 1. Resolve title for home page (default)
const homeTitle = compiler.resolveTitle(null);

// 2. Resolve title for product page (templated)
const productTitle = compiler.resolveTitle('Mechanical Keyboard');

// 3. Compute container optimization metric
const metrics = compiler.calculateImageSizes();

console.log('Home page title:', homeTitle);
// -> Home page title: TechStore — Modern Hardware
console.log('Product page templated title:', productTitle);
// -> Product page templated title: Mechanical Keyboard | TechStore
console.log('Standalone container size in MB:', metrics.standaloneMb);
// -> Standalone container size in MB: 95
console.log('Container disk savings percentage:', metrics.savings);
// -> Container disk savings percentage: 91`,
      caption: {
        en: 'Metadata compiler templates product title and reduces container size to 95 MB with 91 percent disk savings',
        bn: 'মেটাডাটা কম্পাইলার প্রোডাক্ট টাইটেল টেমপ্লেট করছে এবং ডকার সাইজ ৯৫ মেগাবাইটে নামিয়ে ৯১ শতাংশ সেভিং দিচ্ছে'
      }
    },
    {
      type: 'heading',
      id: 'production-hardening-guidelines',
      text: {
        en: 'Production Hardening and Deployment Guidelines',
        bn: 'প্রোডাকশন হার্ডেনিং ও ডেপ্লয়মেন্ট নির্দেশিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Deploying Next.js to production requires configuring strict security headers and optimizing font delivery. Utilize next/font to download Google fonts at build time and host them alongside your static assets, eliminating render-blocking third-party network requests. Configure Content Security Policies (CSP) and HSTS headers in your configuration to protect users against cross-site scripting.',
        bn: 'প্রোডাকশনে Next.js ডেপ্লয় করার জন্য কঠোর নিরাপত্তা হেডার এবং ফন্ট অপটিমাইজেশন নিশ্চিত করা উচিত। next/font ব্যবহার করে বিল্ডের সময়ই গুগল ফন্ট সেলফ-হোস্ট করে নিন, যাতে ব্রাউজারের থার্ড-পার্টি নেটওয়ার্ক রিকোয়েস্ট বেঁচে যায়। আর ব্যবহারকারীদের ক্রস-সাইট স্ক্রিপ্টিং আক্রমণ থেকে বাঁচাতে কনফিগারেশনে Content Security Policy (CSP) ও HSTS হেডার যুক্ত করুন।'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Use metadataBase: Define metadataBase in your root layout so social cards and canonical URLs always generate absolute URLs.',
          bn: '১. metadataBase নির্ধারণ: রুট লেআউটে metadataBase দিয়ে রাখুন যাতে সোশ্যাল কার্ডের ছবির লিংক সম্পূর্ণ সঠিক ডোমেন সহ তৈরি হয়।'
        },
        {
          en: '2. Zero CLS with next/image: Always supply width and height attributes (or fill with parent container) on <Image /> to prevent layout shift.',
          bn: '২. next/image দিয়ে লেআউট শিফট রোধ: ইমেজ কম্পোনেন্টে নির্দিষ্ট সাইজ বা fill দিন যাতে ছবি লোডের সময় পেজ কেঁপে না ওঠে।'
        },
        {
          en: '3. Enable Standalone Builds: Configure output: "standalone" in next.config.js for minimal Docker containers without bloated node_modules.',
          bn: '৩. স্ট্যান্ডঅ্যালোন আউটপুট চালু: অপ্রয়োজনীয় ফাইল বাদ দিয়ে হালকা ডকার ইমেজ পেতে next.config.js-এ output: "standalone" ব্যবহার করুন।'
        },
        {
          en: '4. Zero Runtime Requests with next/font: Self-host web fonts automatically using next/font/google to eliminate external Google CDN latency.',
          bn: '৪. next/font দিয়ে ফন্ট সেলফ-হোস্টিং: রানটাইমে বাইরের নেটওয়ার্ক কল এড়াতে next/font দিয়ে ফন্ট লোকাল অ্যাসেট হিসেবে লোড করুন।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'nx-met-ex1',
      kind: 'mcq',
      topic: 'purpose of generateMetadata in dynamic routes',
      question: {
        en: 'Why do developers use "export async function generateMetadata()" instead of static "export const metadata" in dynamic route segments like "app/products/[id]/page.tsx"?',
        bn: 'ডায়নামিক রুট সেগমেন্টে (যেমন "app/products/[id]/page.tsx") স্ট্যাটিক মেটাডাটার বদলে "export async function generateMetadata()" কেন ব্যবহার করা হয়?'
      },
      options: [
        {
          en: 'It receives the dynamic route parameters asynchronously, allowing the application to fetch product details from the database and generate custom titles, descriptions, and OpenGraph tags dynamically for each product',
          bn: 'এটি অ্যাসিনক্রোনাসভাবে ডায়নামিক প্যারামিটার গ্রহণ করে, যা ডাটাবেজ থেকে তথ্য এনে প্রতিটি নির্দিষ্ট পণ্যের জন্য আলাদা এসইও টাইটেল ও সোশ্যাল কার্ড তৈরি করতে সাহায্য করে'
        },
        {
          en: 'It converts the webpage into an executable Windows program',
          bn: 'এটি ওয়েবপেজকে একটি উইন্ডোজ সফটওয়্যারে বদলে দেয়'
        },
        {
          en: 'generateMetadata is only used for playing background music',
          bn: 'generateMetadata কেবল ব্যাকগ্রাউন্ড মিউজিক বাজানোর জন্য ব্যবহৃত হয়'
        },
        {
          en: 'Static metadata is forbidden in all versions of React',
          bn: 'রিঅ্যাক্টের কোনো সংস্করণেই স্ট্যাটিক মেটাডাটা ব্যবহারের সুযোগ নেই'
        }
      ],
      answer: 0,
      hint: {
        en: 'generateMetadata fetches data per dynamic segment to craft tailored SEO tags.',
        bn: 'generateMetadata প্রতিটি ডায়নামিক পণ্যের জন্য আলাদা তথ্য দিয়ে এসইও ট্যাগ তৈরি করে।'
      },
      explanation: {
        en: 'generateMetadata receives { params } and can query your backend. Next.js automatically dedupes identical data fetches between generateMetadata and the page component.',
        bn: 'generateMetadata প্যারামিটার নিয়ে ডাটাবেজ থেকে নির্দিষ্ট তথ্য তুলে আনে। মেমোইজেশনের কারণে পেজ এবং মেটাডাটা দুটোই একই কুয়েরি চালালে কোনো অতিরিক্ত নেটওয়ার্ক চার্জ হয় না।'
      }
    },
    {
      id: 'nx-met-ex2',
      kind: 'mcq',
      topic: 'role of metadataBase in nextjs layout',
      question: {
        en: 'What critical issue does defining "metadataBase: new URL(\'https://example.com\')" in the root layout prevent?',
        bn: 'রুট লেআউটে "metadataBase: new URL(\'https://example.com\')" নির্ধারণ করলে কোন মারাত্মক সমস্যা দূর হয়?'
      },
      options: [
        {
          en: 'It prevents social platforms (like Twitter and Facebook) from failing to display preview cards by ensuring relative image paths ("/og-image.png") resolve into required absolute URLs ("https://example.com/og-image.png")',
          bn: 'এটি সোশ্যাল মিডিয়ায় প্রিভিউ কার্ড নষ্ট হওয়া রোধ করে, কারণ আপেক্ষিক পাথগুলোকে ("/og-image.png") তা পূর্ণাঙ্গ ডোমেনযুক্ত অ্যাবসোলিউট ইউআরএলে ("https://example.com/og-image.png") পরিণত করে'
        },
        {
          en: 'It makes the webpage load offline without internet',
          bn: 'এটি ইন্টারনেট ছাড়াই অফলাইনে পেজ লোড হতে সাহায্য করে'
        },
        {
          en: 'It changes the database password every 30 days',
          bn: 'এটি প্রতি ৩০ দিন পর পর ডাটাবেজ পাসওয়ার্ড বদলে দেয়'
        },
        {
          en: 'metadataBase is only needed when using SQLite databases',
          bn: 'metadataBase কেবল SQLite ডাটাবেজ ব্যবহারের সময়ই প্রয়োজন হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Social crawlers strictly require absolute URLs for OpenGraph image unfurling.',
        bn: 'সোশ্যাল মিডিয়ার ক্রলারগুলো ইমেজ প্রিভিউ দেখানোর জন্য পূর্ণাঙ্গ অ্যাবসোলিউট ইউআরএল দাবি করে।'
      },
      explanation: {
        en: 'OpenGraph and Twitter card protocols mandate absolute URLs for image links. metadataBase provides the domain base so developers can safely write relative image paths.',
        bn: 'ওপেন-গ্রাফ স্ট্যান্ডার্ডে সম্পূর্ণ ডোমেন লিংক ছাড়া ছবি আসে না। metadataBase মূল ঠিকানা ঠিক করে দেয় যাতে আপেক্ষিক পাথ লিখলেও ব্রাউজারে তা নিখুঁত লিংকে বদলে যায়।'
      }
    },
    {
      id: 'nx-met-ex3',
      kind: 'mcq',
      topic: 'next image layout shift prevention',
      question: {
        en: 'How does Next.js\'s "<Image />" component prevent Cumulative Layout Shift (CLS) during page loading?',
        bn: 'Next.js-এর "<Image />" কম্পোনেন্ট পেজ লোড হওয়ার সময় Cumulative Layout Shift (CLS) বা অনাকাঙ্ক্ষিত কাঁপুনি কীভাবে প্রতিরোধ করে?'
      },
      options: [
        {
          en: 'By requiring explicit width and height dimensions (or fill layout with aspect-ratio), the browser reserves the exact physical pixel area before the image file finishes downloading over the network',
          bn: 'নির্দিষ্ট width ও height (বা fill) বাধ্যতামূলক করার মাধ্যমে ব্রাউজার ছবি ডাউনলোড হওয়ার আগেই তার জন্য সঠিক স্থান সংরক্ষণ করে রাখে'
        },
        {
          en: 'By blurring the entire webpage until all images finish downloading',
          bn: 'সব ছবি ডাউনলোড না হওয়া পর্যন্ত পুরো ওয়েবপেজটি ঝাপসা করে রেখে'
        },
        {
          en: 'By deleting image files larger than 1 megabyte',
          bn: '১ মেগাবাইটের চেয়ে বড় সমস্ত ইমেজ ফাইল মুছে ফেলে'
        },
        {
          en: 'The Image component does not prevent layout shifts',
          bn: 'ইমেজ কম্পোনেন্ট লেআউট শিফট প্রতিরোধ করতে পারে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Pre-reserving pixel dimensions eliminates sudden layout jumps.',
        bn: 'আগেই সঠিক উচ্চতা ও প্রস্থ জায়গা দখল করে রাখলে হঠাৎ পেজ লাফিয়ে ওঠে না।'
      },
      explanation: {
        en: 'next/image enforces aspect ratio reservations using CSS and HTML attributes, completely eliminating layout jumps when images pop into the viewport.',
        bn: 'next/image আগে থেকেই এইচটিএমএলে জায়গা নির্ধারণ করে রাখে। ফলে ছবি লোড হলেও আশেপাশের লেখা এক চুলও সরে না, যা গুগলের কোর ওয়েব ভাইটাল স্কোর দারুণ রাখে।'
      }
    },
    {
      id: 'nx-met-ex4',
      kind: 'mcq',
      topic: 'standalone output mode docker size reduction',
      question: {
        en: 'How does setting "output: \'standalone\'" in "next.config.js" reduce the size of production Docker deployment containers?',
        bn: '"next.config.js"-এ "output: \'standalone\'" নির্ধারণ করলে প্রোডাকশন ডকার কন্টেইনারের সাইজ কীভাবে নাটকীয়ভাবে কমে যায়?'
      },
      options: [
        {
          en: 'Next.js uses dependency tracing to bundle only the exact production node_modules files necessary to run the server, omitting thousands of unused devDependencies and non-essential packages',
          bn: 'Next.js ডিপেন্ডেন্সি ট্রেসিং ব্যবহার করে কেবল সার্ভার চালানোর জন্য অপরিহার্য ফাইলগুলোই বান্ডল করে, ফলে হাজার হাজার অপ্রয়োজনীয় প্যাকেজ বাদ পড়ে সাইজ বহুগুণ কমে যায়'
        },
        {
          en: 'It compresses all JavaScript files into ZIP archives',
          bn: 'এটি সব জাভাস্ক্রিপ্ট ফাইলকে জিপ ফাইলে সংকুচিত করে'
        },
        {
          en: 'It deletes all HTML files from the build output',
          bn: 'এটি বিল্ড থেকে সমস্ত এইচটিএমএল ফাইল মুছে ফেলে'
        },
        {
          en: 'Standalone mode can only be used on Google Cloud Platform',
          bn: 'স্ট্যান্ডঅ্যালোন মোড কেবল গুগল ক্লাউড প্ল্যাটফর্মেই ব্যবহার করা যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Standalone mode traces and bundles only the minimal required runtime dependencies.',
        bn: 'স্ট্যান্ডঅ্যালোন মোড অনুসন্ধান করে কেবল সার্ভার চলার জন্য দরকারি প্যাকেজগুলোই রাখে।'
      },
      explanation: {
        en: 'The standalone build copies a minimal server.js and traced production dependencies into .next/standalone. This allows building ultra-lean Docker images (~100MB) without copying the full node_modules directory.',
        bn: 'স্ট্যান্ডঅ্যালোন বিল্ড পুরো node_modules কপি করার ঝামেলা দূর করে। ট্রেসিংয়ের মাধ্যমে শুধু প্রয়োজনীয় কোড .next/standalone-এ রাখে, ফলে কন্টেইনার সাইজ ১ জিবি থেকে নেমে ১০০ এমবি হয়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'the-metadata-court-quiz',
    title: {
      en: 'Next.js Metadata, SEO & Production Quiz',
      bn: 'Next.js মেটাডাটা, এসইও ও প্রোডাকশন কুইজ'
    },
    questions: [
      {
        id: 'q-sitemap-dynamic-generation',
        kind: 'mcq',
        topic: 'dynamic sitemap generation in app/sitemap.ts',
        question: {
          en: 'How can an application dynamically generate a complete "sitemap.xml" containing thousands of active product URLs in Next.js?',
          bn: 'Next.js-এ হাজার হাজার সক্রিয় পণ্যের ইউআরএল সহ একটি সম্পূর্ণ ডায়নামিক "sitemap.xml" কীভাবে তৈরি করা যায়?'
        },
        options: [
          {
            en: 'Create an "app/sitemap.ts" file exporting a default async function that queries the database and returns an array of objects specifying URL, lastModified timestamp, and changeFrequency',
            bn: 'একটি "app/sitemap.ts" ফাইল তৈরি করে যা ডাটাবেজ থেকে তথ্য এনে URL, lastModified টাইমস্ট্যাম্প এবং পরিবর্তন কম্পাঙ্ক সহ অবজেক্টের তালিকা রিটার্ন করে'
          },
          {
            en: 'Manually type all 10,000 URLs into an Excel spreadsheet',
            bn: 'একটি এক্সেল ফাইলে হাতে টাইপ করে ১০,০০০টি ইউআরএল লিখে'
          },
          {
            en: 'Submit a paper form to the Google search headquarters',
            bn: 'গুগলের সদর দপ্তরে কাগজের চিঠি পাঠিয়ে'
          },
          {
            en: 'Dynamic sitemaps cannot be generated in Next.js',
            bn: 'Next.js-এ ডায়নামিক সাইটম্যাপ তৈরি করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Export a default async function from app/sitemap.ts that returns sitemap objects.',
          bn: 'app/sitemap.ts থেকে একটি ডিফল্ট ফাংশন এক্সপোর্ট করুন যা সাইটম্যাপ অবজেক্টের অ্যারে দেয়।'
        },
        explanation: {
          en: 'Next.js supports code-generated sitemaps via app/sitemap.ts. The function queries your database and returns a MetadataRoute.Sitemap array served automatically at /sitemap.xml.',
          bn: 'app/sitemap.ts দিয়ে সহজেই ডাটাবেজের সব সক্রিয় পোস্ট বা পণ্যের ইউআরএল তুলে এনে ডায়নামিক সাইটম্যাপ তৈরি করা যায়, যা /sitemap.xml পাথে স্বয়ংক্রিয়ভাবে পাওয়া যায়।'
        }
      },
      {
        id: 'q-next-font-zero-layout-shift',
        kind: 'mcq',
        topic: 'zero layout shift mechanism in next/font',
        question: {
          en: 'Why does "next/font" completely eliminate layout shifts (FOUT - Flash of Unstyled Text) when loading web fonts?',
          bn: 'ওয়েব ফন্ট লোড করার সময় "next/font" কীভাবে ফন্টের অপ্রত্যাশিত পরিবর্তন (FOUT) বা লেআউট শিফট পুরোপুরি দূর করে?'
        },
        options: [
          {
            en: 'It downloads font files at build time to self-host them with static assets and automatically matches font fallback metrics (size-adjust, ascent-override) to the local system font',
            bn: 'এটি বিল্ড-টাইমে ফন্ট ডাউনলোড করে লোকাল অ্যাসেট হিসেবে রাখে এবং স্বয়ংক্রিয়ভাবে সিস্টেম ফন্টের মাপের সাথে মেট্রিক্স সমন্বয় করে রাখে'
          },
          {
            en: 'It deletes all non-English letters from the website',
            bn: 'এটি ওয়েবসাইট থেকে সমস্ত অ-ইংরেজি বর্ণ মুছে ফেলে'
          },
          {
            en: 'It disables all bold and italic font variations',
            bn: 'এটি সব বোল্ড ও ইটালিক ফন্ট বন্ধ করে দেয়'
          },
          {
            en: 'next/font only works if the user has installed the font on their computer',
            bn: 'next/font কেবল তখনই চলে যদি ব্যবহারকারী নিজে তার পিসিতে ফন্ট ইনস্টল করে রাখে'
          }
        ],
        answer: 0,
        hint: {
          en: 'next/font automatically adjusts fallback metrics to eliminate layout shift.',
          bn: 'next/font স্বয়ংক্রিয়ভাবে সিস্টেম ফন্টের সাথে মাপ সমন্বয় করে কাঁপুনি দূর করে।'
        },
        explanation: {
          en: 'next/font self-hosts font files to avoid external Google network hops. It injects CSS size-adjust rules matching fallback fonts exactly, preventing visual layout jumps.',
          bn: 'next/font ফন্ট ফাইলগুলো নিজের সার্ভারেই রেখে দেয়। এটি সিএসএস সাইজ-অ্যাডজাস্ট দিয়ে ব্যাকআপ ফন্টের মাপ নিখুঁত রাখে, ফলে ফন্ট লোড হলেও কোনো ঝাঁকুনি তৈরি হয় না।'
        }
      },
      {
        id: 'q-opengraph-image-dynamic-generation',
        kind: 'mcq',
        topic: 'dynamic social cards with opengraph-image.tsx and ImageResponse',
        question: {
          en: 'How does Next.js allow developers to generate dynamic, personalized social preview images for every article or product?',
          bn: 'Next.js কীভাবে প্রতিটি নিবন্ধ বা পণ্যের জন্য ডায়নামিক ও ব্যক্তিগতকৃত সোশ্যাল প্রিভিউ ছবি তৈরির সুবিধা দেয়?'
        },
        options: [
          {
            en: 'By adding an "opengraph-image.tsx" file that uses "ImageResponse" to render JSX markup and CSS into an optimized PNG/JPEG image directly on the server',
            bn: 'একটি "opengraph-image.tsx" ফাইল যুক্ত করে যা "ImageResponse" ব্যবহার করে সার্ভারেই JSX ও সিএসএস কোডকে একটি অপটিমাইজড PNG/JPEG ছবিতে রূপান্তর করে'
          },
          {
            en: 'By opening Photoshop in the background on the server',
            bn: 'সার্ভারের ব্যাকগ্রাউন্ডে ফটোশপ সফটওয়্যার চালু করে'
          },
          {
            en: 'By asking the user to take a screenshot and upload it',
            bn: 'ব্যবহারকারীকে স্ক্রিনশট তুলে তা আপলোড করার অনুরোধ জানিয়ে'
          },
          {
            en: 'Dynamic social images cannot be generated in Next.js',
            bn: 'Next.js-এ ডায়নামিক সোশ্যাল ইমেজ তৈরি করা অসম্ভব'
          }
        ],
        answer: 0,
        hint: {
          en: 'Use opengraph-image.tsx with ImageResponse to render JSX into social card images.',
          bn: 'JSX কোড দিয়ে ছবি বানাতে ImageResponse সহ opengraph-image.tsx ব্যবহার করুন।'
        },
        explanation: {
          en: 'opengraph-image.tsx uses Satori and Edge rendering via ImageResponse. You write standard JSX (flexbox, headings, avatars), and Next.js converts it into a high-res OpenGraph image dynamically.',
          bn: 'opengraph-image.tsx ফাইলের ভেতর সাধারণ রিঅ্যাক্ট কোড লিখে ছবির কাঠামো বানানো যায়। ImageResponse স্বয়ংক্রিয়ভাবে সেই JSX-কে একটি সুন্দর সোশ্যাল মিডিয়া শেয়ারিং ছবিতে রূপান্তর করে দেয়।'
        }
      },
      {
        id: 'q-production-readiness-checklist',
        kind: 'mcq',
        topic: 'production readiness audit checklist for nextjs',
        question: {
          en: 'Which production configuration combination represents the gold standard for deploying a secure, high-traffic Next.js application?',
          bn: 'নিরাপদ এবং উচ্চ ট্রাফিকের Next.js অ্যাপ্লিকেশন ডেপ্লয় করার জন্য কোন কনফিগারেশন সমন্বয়টি ইন্ডাস্ট্রির মানদণ্ড?'
        },
        options: [
          {
            en: 'output: "standalone" for lightweight Docker containers, strict Content Security Policy headers, self-hosted fonts via next/font, and pre-computed static paths with generateStaticParams',
            bn: 'হালকা ডকার ইমেজের জন্য output: "standalone", কঠোর নিরাপত্তা হেডার (CSP), next/font দিয়ে ফন্ট হোস্টিং এবং generateStaticParams দিয়ে পূর্ব-প্রস্তুত স্ট্যাটিক পাথ'
          },
          {
            en: 'Running next dev on a public HTTP server with all firewalls disabled',
            bn: 'সমস্ত ফায়ারওয়াল বন্ধ করে একটি উন্মুক্ত এইচটিটিপি সার্ভারে next dev চালানো'
          },
          {
            en: 'Disabling all caching and deleting the next.config.js file',
            bn: 'সমস্ত ক্যাশিং বন্ধ রাখা এবং next.config.js ফাইলটি মুছে ফেলা'
          },
          {
            en: 'Deploying the uncompiled source code to an FTP server without Node.js',
            bn: 'নোড.জেএস ছাড়া একটি এফটিপি সার্ভারে আনকম্পাইল্ড কোড সরাসরি ফেলে রাখা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standalone Docker, strict security headers, next/font, and static pre-rendering yield peak performance.',
          bn: 'স্ট্যান্ডঅ্যালোন ডকার, নিরাপত্তা হেডার, লোকাল ফন্ট এবং স্ট্যাটিক রেন্ডারিংয়ের সমন্বয়েই সেরা পারফরম্যান্স আসে।'
        },
        explanation: {
          en: 'A production-grade Next.js application combines standalone Docker builds for minimal container weight, strict security headers (CSP, HSTS), next/font for zero layout shift, and pre-rendered static paths for instant CDN delivery.',
          bn: 'প্রোডাকশন-গ্রেড Next.js সিস্টেমে থাকে হালকা ডকার কন্টেইনার, কঠোর নিরাপত্তা হেডার, ফন্ট অপটিমাইজেশন এবং সিডিএন থেকে দ্রুত স্ট্যাটিক ডেলিভারি।'
        }
      }
    ]
  }
};
