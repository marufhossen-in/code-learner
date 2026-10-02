import type { Lesson } from '../../../lib/types';

export const PicturesThatFitLesson: Lesson = {
  slug: 'pictures-that-fit',
  tech: 'responsive-design',
  title: {
    en: 'Responsive Images & Media — <picture>, srcset, and Art Direction',
    bn: 'রেসপনসিভ ইমেজ ও মিডিয়া — <picture>, srcset এবং আর্ট ডিরেকশন'
  },
  summary: {
    en: 'Images frequently account for over sixty percent of total website byte payloads. In this lesson, we master responsive image techniques to deliver optimized visuals without wasting network bandwidth. We explore resolution switching using img with srcset and sizes, format negotiation with AVIF and WebP, art direction cropping using the picture element, and loading performance with lazy loading and fetchpriority.',
    bn: 'ওয়েবসাইটের মোট ডেটা খরচের ৬০ শতাংশেরও বেশি সাধারণত ছবির কারণে হয়। এই পাঠে আমরা ব্যান্ডউইথ অপচয় না করে অপ্টিমাইজড ভিজ্যুয়াল সরবরাহের জন্য রেসপনসিভ ইমেজ কৌশল শিখব। আমরা img-এ srcset ও sizes দিয়ে রেজোলিউশন সুইচিং, AVIF ও WebP দিয়ে আধুনিক ফরম্যাট নেগোসিয়েশন, picture এলিমেন্ট দিয়ে আর্ট ডিরেকশন এবং lazy ও fetchpriority দিয়ে লোডিং পারফরম্যান্স বৃদ্ধি শিখব।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'responsive-images-overview',
      text: {
        en: 'The Core Problem: Resolution vs Art Direction',
        bn: 'মূল সমস্যা: রেজোলিউশন সুইচিং বনাম আর্ট ডিরেকশন'
      }
    },
    {
      type: 'visual',
      id: 'box-model'
    },
    {
      type: 'para',
      text: {
        en: 'When mobile phones load desktop-sized images, users waste cellular data downloading millions of unnecessary pixels. Responsive image standards solve two distinct challenges: resolution switching (serving smaller files of the same picture to smaller screens) and art direction (cropping or altering the composition for small vertical screens).',
        bn: 'মোবাইল ফোনে ডেস্কটপ সাইজের বড় ছবি লোড করলে অহেতুক সেলুলার ডেটা নষ্ট হয় এবং পেজ ধীরগতির হয়ে পড়ে। রেসপনসিভ ইমেজ স্ট্যান্ডার্ড দুটি প্রধান সমস্যার সমাধান করে: রেজোলিউশন সুইচিং (একই ছবির ছোট বা বড় ফাইল পরিবেশন) এবং আর্ট ডিরেকশন (ছোট উল্লম্ব স্ক্রিনের জন্য ছবি ক্রপ বা কম্পোজিশন পরিবর্তন)।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'srcset (with w descriptors)',
          def: {
            en: 'An image attribute listing source file URLs paired with their native pixel widths (e.g. hero-800.jpg 800w).',
            bn: 'একটি ইমেজ অ্যাট্রিবিউট যেখানে ছবির ফাইলের সাথে তার আসল পিক্সেল প্রস্থ উল্লেখ থাকে (যেমন hero-800.jpg 800w)।'
          }
        },
        {
          term: 'sizes Attribute',
          def: {
            en: 'An attribute informing the browser how wide the image will render on screen before stylesheets download.',
            bn: 'একটি অ্যাট্রিবিউট যা স্টাইলশিট ডাউনলোডের আগেই ব্রাউজারকে জানিয়ে দেয় পেজে ছবিটি কত চওড়া প্রদর্শিত হবে।'
          }
        },
        {
          term: '<picture> Element',
          def: {
            en: 'A wrapper element containing <source> tags used for art direction and modern image format fallbacks (AVIF/WebP).',
            bn: 'একটি র‍্যাপার ট্যাগ যা <source> ট্যাগের সাহায্যে আর্ট ডিরেকশন এবং আধুনিক AVIF বা WebP ছবির বিকল্প ব্যবস্থা নিশ্চিত করে।'
          }
        },
        {
          term: 'fetchpriority="high"',
          def: {
            en: 'An HTML hint requesting the browser to prioritize network requests for above-the-fold hero images.',
            bn: 'একটি এইচটিএমএল হিন্ট যা ব্রাউজারকে সবার উপরে থাকা মূল হিরো ছবি দ্রুত ডাউনলোড করার নির্দেশ দেয়।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'resolution-vs-art-direction',
      text: {
        en: 'Resolution Switching vs Art Direction',
        bn: 'রেজোলিউশন সুইচিং বনাম আর্ট ডিরেকশন'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: '1. Resolution Switching with <img>: For standard photos that look great scaled down, use <img srcset="photo-400.jpg 400w, photo-800.jpg 800w" sizes="(max-width: 48em) 100vw, 50vw">. The browser automatically picks the smallest file satisfying the screen DPR.',
          bn: '১. <img> দিয়ে রেজোলিউশন সুইচিং: সাধারণ ছবির জন্য srcset এবং sizes ব্যবহার করুন। ব্রাউজার স্ক্রিনের ডিপিআর এবং প্রদর্শনের মাপ দেখে সবচেয়ে হালকা উপযুক্ত ফাইলটি নিজে বেছে নেয়।'
        },
        {
          en: '2. Art Direction with <picture>: When a wide landscape photo becomes unreadable on a phone, use <picture> with <source media="(width < 48em)" srcset="portrait-crop.jpg"> to deliver a tightly focused vertical crop on mobile.',
          bn: '২. <picture> দিয়ে আর্ট ডিরেকশন: ল্যান্ডস্কেপ ছবি মোবাইলে অতি ক্ষুদ্র দেখালে <picture> ও <source media="(width < 48em)"> দিয়ে মোবাইলের জন্য ক্লোজ-আপ ক্রপ করা ছবি দেখানো যায়।'
        },
        {
          en: '3. Next-Gen Formats: Use <source type="image/avif"> followed by <source type="image/webp"> and a fallback JPEG <img>. AVIF delivers up to 50% smaller files with identical visual clarity.',
          bn: '৩. আধুনিক ফরম্যাটের ব্যবহার: প্রথমে <source type="image/avif"> এবং পরে WebP ও সাধারণ JPEG ফলব্যাক রাখুন। AVIF একই মানের ছবিতে প্রায় ৫০% পর্যন্ত সাইজ কমিয়ে দেয়।'
        },
        {
          en: '4. Loading Strategies: Add loading="lazy" and decoding="async" to images below the fold to speed up initial page render. For the primary hero image, use loading="eager" and fetchpriority="high".',
          bn: '৪. লোডিং কৌশল: স্ক্রিনের নিচের ছবিতে loading="lazy" ব্যবহার করুন যাতে পেজ দ্রুত লোড হয়। আর উপরের মূল হিরো ছবিতে loading="eager" ও fetchpriority="high" ব্যবহার করুন।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'working-code-example',
      text: {
        en: 'Practical Responsive Image Implementation',
        bn: 'রেসপনসিভ ইমেজের ব্যবহারিক কোড'
      }
    },
    {
      type: 'code',
      code: `<!-- Complete Modern Responsive Image Pattern -->
<picture>
  <!-- 1. Serve AVIF format to supported modern browsers -->
  <source
    type="image/avif"
    srcset="hero-480.avif 480w, hero-960.avif 960w, hero-1600.avif 1600w"
    sizes="(width < 48em) 100vw, 1200px">

  <!-- 2. Serve WebP format to intermediate browsers -->
  <source
    type="image/webp"
    srcset="hero-480.webp 480w, hero-960.webp 960w, hero-1600.webp 1600w"
    sizes="(width < 48em) 100vw, 1200px">

  <!-- 3. Standard JPEG fallback with intrinsic dimensions -->
  <img
    src="hero-960.jpg"
    srcset="hero-480.jpg 480w, hero-960.jpg 960w, hero-1600.jpg 1600w"
    sizes="(width < 48em) 100vw, 1200px"
    alt="Modern cityscape skyline at dusk"
    width="1600"
    height="900"
    loading="eager"
    fetchpriority="high"
    decoding="async">
</picture>

// 4. Verify native browser support for AVIF in JavaScript
const img = new Image();
img.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAG1pZjFhdmlm';
img.onload = () => console.log('AVIF support active:', true);
// -> AVIF support active: true`,
      caption: {
        en: 'Configuring responsive picture with 3 image formats and high fetch priority',
        bn: '৩টি ইমেজ ফরম্যাট ও উচ্চ প্রায়োরিটি সহ রেসপনসিভ পিকচার সেটআপ করা'
      }
    },
    {
      type: 'heading',
      id: 'srcset-vs-picture-compare',
      text: {
        en: 'Choosing Between <img> srcset and <picture>',
        bn: '<img> srcset এবং <picture>-এর মধ্যে সঠিক পছন্দ'
      }
    },
    {
      type: 'compare',
      left: {
        title: {
          en: '<img> with srcset and sizes',
          bn: 'srcset ও sizes সহ <img>'
        },
        points: [
          {
            en: 'Designed for resolution switching of the exact same image.',
            bn: 'হুবহু একই ছবির রেজোলিউশন পরিবর্তনের জন্য তৈরি।'
          },
          {
            en: 'Browser has complete freedom to pick file based on network and DPR.',
            bn: 'ব্রাউজার নেটওয়ার্ক ও ডিপিআর বুঝে সবচেয়ে সঠিক ফাইলটি বেছে নিতে পারে।'
          },
          {
            en: 'Requires less boilerplate HTML markup.',
            bn: 'তুলনামূলকভাবে অনেক কম এইচটিএমএল কোডের প্রয়োজন হয়।'
          },
          {
            en: 'Ideal for 90% of web content, product cards, and blog photography.',
            bn: 'ব্লগ ও প্রোডাক্ট কার্ডের ৯০% সাধারণ ছবির ক্ষেত্রে আদর্শ সমাধান।'
          }
        ]
      },
      right: {
        title: {
          en: '<picture> with <source>',
          bn: '<source> সহ <picture>'
        },
        points: [
          {
            en: 'Designed for art direction and format negotiation (AVIF/WebP).',
            bn: 'আর্ট ডিরেকশন ক্রপিং ও নতুন ফরম্যাট (AVIF/WebP) সরবরাহের জন্য তৈরি।'
          },
          {
            en: 'Enforces strict author-defined media query breakpoints.',
            bn: 'ডেভেলপারের বেঁধে দেওয়া মিডিয়া কুয়েরি নিয়ম কঠোরভাবে মেনে চলে।'
          },
          {
            en: 'Allows showing completely different images on mobile versus desktop.',
            bn: 'মোবাইলে সম্পূর্ণ আলাদা ক্রপ করা ছবি এবং ডেস্কে ওয়াইড ছবি দেখানো যায়।'
          },
          {
            en: 'Essential for hero marketing banners requiring focal changes.',
            bn: 'ওয়েবসাইটের মূল হিরো ব্যানারের ফোকাল পয়েন্ট পরিবর্তনের জন্য অপরিহার্য।'
          }
        ]
      }
    }
  ],
  exercises: [
    {
      id: 'rd-pic-ex1',
      kind: 'mcq',
      topic: 'w descriptor meaning',
      question: {
        en: 'In srcset="card-400.jpg 400w, card-800.jpg 800w", what does the "w" unit represent?',
        bn: 'srcset="card-400.jpg 400w, card-800.jpg 800w"-এ "w" ইউনিটটি কী নির্দেশ করে?'
      },
      options: [
        {
          en: 'The intrinsic natural pixel width of the image file, allowing the browser to calculate density math without downloading headers',
          bn: 'ছবিটির আসল ফিজিক্যাল পিক্সেল প্রস্থ, যার ফলে ফাইল ডাউনলোড না করেই ব্রাউজার হিসাব করতে পারে'
        },
        {
          en: 'The width of the entire computer monitor in inches',
          bn: 'পুরো কম্পিউটার মনিটরের ইঞ্চি পরিমাপ'
        },
        {
          en: 'The weight of the image file in kilobytes',
          bn: 'কিলোবাইটে ছবির ফাইলের ওজনের পরিমাপ'
        },
        {
          en: 'The percentage of the viewport occupied by the card',
          bn: 'ভিউোর্টের কত শতাংশ জায়গা কার্ডটি দখল করে আছে তার মান'
        }
      ],
      answer: 0,
      hint: {
        en: 'The w descriptor states the real physical pixel width of the file.',
        bn: 'w বর্ণনাকারী ছবির আসল ফিজিক্যাল পিক্সেল প্রস্থ উল্লেখ করে।'
      },
      explanation: {
        en: 'The w descriptor tells the browser the true pixel width of the asset. Combined with sizes, the browser divides width by display size to determine optimal resolution.',
        bn: 'w বর্ণনাকারী ব্রাউজারকে ছবির আসল প্রস্থ জানিয়ে দেয়। sizes-এর সাথে মিলিয়ে ব্রাউজার সেরা রেজোলিউশনের ছবিটি বেছে নেয়।'
      }
    },
    {
      id: 'rd-pic-ex2',
      kind: 'mcq',
      topic: 'sizes attribute necessity',
      question: {
        en: 'Why is the sizes attribute required when using w descriptors in an <img> tag?',
        bn: '<img> ট্যাগে w বর্ণনাকারী ব্যবহারের সময় sizes অ্যাট্রিবিউট দেওয়া কেন আবশ্যক?'
      },
      options: [
        {
          en: 'The browser initiates image downloads before CSS stylesheets are parsed; sizes tells the preloader how wide the image will be on screen',
          bn: 'সিএসএস পার্স হওয়ার আগেই ব্রাউজার ছবি ডাউনলোড শুরু করে; sizes প্রিলোডারকে বলে দেয় স্ক্রিনে ছবিটি কত চওড়া হবে'
        },
        {
          en: 'Without sizes, the browser displays all images as 0px wide black boxes',
          bn: 'sizes না থাকলে ব্রাউজার সমস্ত ছবিকে ০px চওড়া কালো বাক্স হিসেবে দেখায়'
        },
        {
          en: 'sizes is used to set the font size of the image alt text caption',
          bn: 'sizes মূলত ছবির অল্টারনেটিভ টেক্সট ফন্ট সাইজ নির্ধারণে ব্যবহৃত হয়'
        },
        {
          en: 'sizes forces images to upload to cloud storage automatically',
          bn: 'sizes ছবিগুলোকে স্বয়ংক্রিয়ভাবে ক্লাউড স্টোরেজে আপলোড করতে বাধ্য করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'The browser preload scanner runs before external CSS finishes downloading.',
        bn: 'বাইরের সিএসএস ফাইল আসার আগেই ব্রাউজারের প্রিলোড স্ক্যানার ছবি নামাতে শুরু করে।'
      },
      explanation: {
        en: 'The browser preloader needs to know rendered image dimensions before CSS loads. Without sizes, the browser assumes 100vw, often downloading unnecessarily huge images.',
        bn: 'সিএসএস লোডের আগেই ব্রাউজারকে ছবির মাপ জানতে হয়। sizes না দিলে ব্রাউজার পুরো স্ক্রিন (100vw) ধরে নিয়ে অযথা বিশাল ছবি নামিয়ে ফেলে।'
      }
    },
    {
      id: 'rd-pic-ex3',
      kind: 'mcq',
      topic: 'art direction with picture',
      question: {
        en: 'What is the primary technical use case for the HTML <picture> element over a plain <img> with srcset?',
        bn: 'সাধারণ <img> srcset-এর তুলনায় এইচটিএমএল <picture> এলিমেন্টের প্রধান প্রযুক্তিগত ব্যবহারের ক্ষেত্র কোনটি?'
      },
      options: [
        {
          en: 'Enforcing art direction (serving different crops for mobile vs desktop) and format negotiation (AVIF, WebP, JPEG)',
          bn: 'আর্ট ডিরেকশন প্রয়োগ (মোবাইলে ক্রপ করা ছবি ও ডেস্কে ওয়াইড ছবি) এবং আধুনিক ফরম্যাট (AVIF, WebP) নিশ্চিত করা'
        },
        {
          en: 'Streaming live MP4 video over WebSocket connections',
          bn: 'ওয়েবসকেট সংযোগের মাধ্যমে সরাসরি লাইভ এমপি৪ ভিডিও স্ট্রিম করা'
        },
        {
          en: 'Applying 3D WebGL camera filters to user webcam video',
          bn: 'ব্যবহারকারীর ওয়েবক্যাম ভিডিওতে ৩ডি ফিল্টার প্রয়োগ করা'
        },
        {
          en: 'Encrypting JPEG metadata to protect copyright watermarks',
          bn: 'কপিরাইট ওয়াটারমার্ক রক্ষার জন্য জেপিইজি মেটাডেটা এনক্রিপ্ট করা'
        }
      ],
      answer: 0,
      hint: {
        en: 'Look for art direction and format switching with source tags.',
        bn: 'আর্ট ডিরেকশন এবং একাধিক ফরম্যাটের জন্য <source> ট্যাগ ব্যবহার করা হয়।'
      },
      explanation: {
        en: 'The <picture> element lets authors mandate specific image sources based on media queries (art direction) or MIME types (format negotiation), overriding browser discretion.',
        bn: '<picture> এলিমেন্ট ডেভেলপারকে নির্দিষ্ট মিডিয়া কুয়েরি বা ফাইল টাইপ অনুযায়ী ব্রাউজারকে সুনির্দিষ্ট ছবি দেখাতে বাধ্য করার ক্ষমতা দেয়।'
      }
    },
    {
      id: 'rd-pic-ex4',
      kind: 'mcq',
      topic: 'hero image loading priority',
      question: {
        en: 'Why should above-the-fold hero banner images NEVER be given loading="lazy"?',
        bn: 'ওয়েবসাইটের সবার উপরে থাকা মূল হিরো ব্যানারে loading="lazy" কেন কখনোই দেওয়া উচিত নয়?'
      },
      options: [
        {
          en: 'Lazy loading delays image fetching until the layout phase completes, severely harming Largest Contentful Paint (LCP) performance scores',
          bn: 'লেজি লোডিং ছবি নামানোকে পেজ লেআউট শেষ হওয়া পর্যন্ত পিছিয়ে দেয়, যা লার্জেস্ট কনটেন্টফুল পেইন্ট (LCP) স্কোর মারাত্মকভাবে নষ্ট করে'
        },
        {
          en: 'Lazy loading causes hero images to invert their color palette',
          bn: 'লেজি লোডিংয়ের কারণে হিরো ছবির রং উল্টে যায়'
        },
        {
          en: 'Modern browsers crash when lazy loading is applied to images wider than 800px',
          bn: '৮০০px-এর চেয়ে বড় ছবিতে লেজি লোডিং দিলে আধুনিক ব্রাউজার ক্র্যাশ করে'
        },
        {
          en: 'Lazy loading converts hero images into SVG vector icons',
          bn: 'লেজি লোডিং হিরো ছবিকে এসভিজি ভেক্টর আইকনে রূপান্তর করে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Hero images are visible immediately and should load with the highest urgency.',
        bn: 'হিরো ছবি সাথে সাথে দৃশ্যমান থাকে, তাই এটি সর্বোচ্চ অগ্রাধিকারে লোড হওয়া আবশ্যক।'
      },
      explanation: {
        en: 'loading="lazy" tells the browser to defer the image until near the viewport. Above-the-fold images are already in the viewport, so lazy loading only introduces an unnecessary delay to LCP.',
        bn: 'loading="lazy" ছবি নামানোর কাজ পিছিয়ে দেয়। উপরের মূল ছবি স্ক্রিনেই থাকায় এটি পিছিয়ে দিলে সাইটের স্পিড স্কোর ভয়াবহভাবে কমে যায়।'
      }
    }
  ],
  quiz: {
    id: 'responsive-images-quiz',
    title: {
      en: 'Responsive Images & Media Quiz',
      bn: 'রেসপনসিভ ইমেজ এবং মিডিয়া কুইজ'
    },
    questions: [
      {
        id: 'q-avif-compression-advantage',
        kind: 'mcq',
        topic: 'avif modern image format',
        question: {
          en: 'What advantage does the AVIF image format provide over traditional JPEG and PNG formats?',
          bn: 'ঐতিহ্যবাহী জেপিইজি এবং পিএনজি ফরম্যাটের তুলনায় AVIF ফরম্যাট কোন সুবিধা প্রদান করে?'
        },
        options: [
          {
            en: 'Significantly higher compression efficiency (up to 50% smaller files) with support for 10-bit and 12-bit color depths and transparency',
            bn: 'উল্লেখযোগ্য কম ফাইল সাইজ (প্রায় ৫০% পর্যন্ত ছোট), সাথে ১০ ও ১২ বিট কালার গভীরতা এবং ট্রান্সপারেন্সি সুবিধা'
          },
          {
            en: 'AVIF files contain executable JavaScript code inside image headers',
            bn: 'AVIF ছবির হেডারে কার্যকর জাভাস্ক্রিপ্ট কোড রাখা সম্ভব'
          },
          {
            en: 'AVIF completely eliminates the need for HTTP network requests',
            bn: 'AVIF ব্যবহারে কোনো এইচটিটিপি নেটওয়ার্ক রিকোয়েস্টের প্রয়োজন হয় না'
          },
          {
            en: 'AVIF images can only be viewed through virtual reality goggles',
            bn: 'AVIF ছবি শুধুমাত্র ভার্চুয়াল রিয়েলিটি গগলস দিয়ে দেখা যায়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Modern video-derived codecs achieve superior compression ratios.',
          bn: 'আধুনিক কোডেক ছবির সাইজ অনেক কমিয়ে এনে দ্রুত লোড হতে সাহায্য করে।'
        },
        explanation: {
          en: 'AVIF uses the AV1 video compression standard to compress still images, offering dramatically superior byte reduction while preserving sharp details.',
          bn: 'AV1 ভিডিও অ্যালগরিদম ব্যবহারের কারণে AVIF অনেক কম কিলোবাইটে অসাধারণ নিখুঁত ছবি পরিবেশন করতে সক্ষম।'
        }
      },
      {
        id: 'q-intrinsic-size-attributes',
        kind: 'mcq',
        topic: 'width and height attributes for cls',
        question: {
          en: 'Why is it critical to include width="1200" height="800" attributes on responsive <img> tags alongside CSS max-width: 100%?',
          bn: 'সিএসএসে max-width: 100% থাকা সত্ত্বেও <img> ট্যাগে width="1200" ও height="800" অ্যাট্রিবিউট রাখা কেন জরুরি?'
        },
        options: [
          {
            en: 'Browsers calculate intrinsic aspect ratio from HTML width and height attributes, reserving correct space before image bytes arrive to prevent layout shift',
            bn: 'ব্রাউজার এইচটিএমএলের প্রস্থ ও উচ্চতা থেকে ছবির অনুপাত জেনে আগেই সঠিক স্থান খালি রাখে, যাতে ছবি আসার পর লেআউট শিফট না হয়'
          },
          {
            en: 'The attributes are required by web server operating systems to parse HTML',
            bn: 'এইচটিএমএল পার্স করার জন্য সার্ভারের এই অ্যাট্রিবিউটগুলো বাধ্যতামূলক'
          },
          {
            en: 'Without these attributes, Google search engines permanently ban the website',
            bn: 'এই অ্যাট্রিবিউটগুলো না থাকলে গুগল সার্চ ইঞ্জিন সাইটটিকে চিরতরে ব্যান করে দেয়'
          },
          {
            en: 'They restrict the image from ever scaling down on mobile phones',
            bn: 'তারা ছবিটিকে মোবাইলে ছোট হতে সম্পূর্ণরূপে বাধা প্রদান করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The browser computes aspect-ratio automatically from HTML width and height attributes.',
          bn: 'এইচটিএমএল উইডথ ও হাইট দেখে ব্রাউজার নিজে থেকেই ছবির অনুপাত ঠিক করে নেয়।'
        },
        explanation: {
          en: 'Modern browsers automatically compute aspect-ratio from HTML width and height attributes. Paired with CSS max-width: 100%; height: auto;, this prevents Cumulative Layout Shift (CLS).',
          bn: 'এইচটিএমএলের width ও height থেকে ব্রাউজার অনুপাত হিসাব করে এবং সিএসএস max-width: 100% এর সাথে সমন্বয় করে জায়গা ধরে রাখে, ফলে ছবি নামার সময় পেজের অন্য লেখা নড়াচড়া করে না।'
        }
      },
      {
        id: 'q-picture-fallback-requirement',
        kind: 'mcq',
        topic: 'picture element fallback tag',
        question: {
          en: 'What element must ALWAYS be placed as the final child inside a <picture> block?',
          bn: '<picture> ব্লকের ভেতরে সর্বশেষ চাইল্ড উপাদান হিসেবে সর্বদা কোন ট্যাগটি থাকা বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'An <img> tag, which provides the rendered DOM box, accessibility alt text, and fallback rendering for browsers lacking modern format support',
            bn: 'একটি <img> ট্যাগ, যা আসল ডম নোড, অল্টারনেটিভ টেক্সট এবং পুরোনো ব্রাউজারের জন্য ব্যাকআপ প্রদর্শন নিশ্চিত করে'
          },
          {
            en: 'A <canvas> drawing context element',
            bn: 'একটি <canvas> ড্রয়িং কনটেক্সট উপাদান'
          },
          {
            en: 'A <video> media streaming player tag',
            bn: 'একটি <video> মিডিয়া প্লেয়ার ট্যাগ'
          },
          {
            en: 'An <hr> horizontal thematic divider rule',
            bn: 'একটি <hr> অনুভূমিক দাগ কাটার ট্যাগ'
          }
        ],
        answer: 0,
        hint: {
          en: 'The picture element is an invisible container; the inner img actually renders.',
          bn: '<picture> শুধুমাত্র একটি পাত্র; পেজে মূল ছবি দেখানোর কাজটা ভেতরের <img>-ই করে।'
        },
        explanation: {
          en: '<picture> is purely an invisible wrapper that provides alternative image sources. The enclosed <img> element is the actual DOM node that renders on screen and holds the alt attribute.',
          bn: '<picture> মূলত বিভিন্ন সোর্সের তালিকা রাখার ধারক মাত্র। পেজে আসল ছবি প্রদর্শন ও অ্যাক্সেসিবিলিটি alt টেক্সট বহনের দায়িত্ব থাকে ভেতরের <img> ট্যাগের।'
        }
      },
      {
        id: 'q-mixed-descriptors-forbidden',
        kind: 'mcq',
        topic: 'srcset descriptor mixing rule',
        question: {
          en: 'Can an author mix pixel density descriptors (1x, 2x) with width descriptors (400w, 800w) in the same srcset attribute?',
          bn: 'একজন ডেভেলপার কি একই srcset অ্যাট্রিবিউটে পিক্সেল ডেনসিটি (1x, 2x) এবং উইডথ (400w, 800w) উভয় বর্ণনাকারী একসাথে মেশাতে পারেন?'
        },
        options: [
          {
            en: 'No, the specification strictly forbids mixing x and w descriptors in a single srcset; you must choose one descriptor type',
            bn: 'না, স্পেসিফিকেশন অনুযায়ী একটি srcset-এ x এবং w বর্ণনাকারী মেশানো সম্পূর্ণ নিষিদ্ধ; যেকোনো একটি পদ্ধতি বেছে নিতে হবে'
          },
          {
            en: 'Yes, modern browsers encourage mixing both descriptors for maximum precision',
            bn: 'হ্যাঁ, নিখুঁত ফলাফলের জন্য ব্রাউজার উভয় বর্ণনাকারী একসাথে মেশাতে উৎসাহিত করে'
          },
          {
            en: 'Only if the images are encoded using SVG vector format',
            bn: 'শুধুমাত্র যদি ছবিগুলো এসভিজি ভেক্টর ফরম্যাটে তৈরি করা থাকে'
          },
          {
            en: 'Only when developing offline progressive web apps',
            bn: 'শুধুমাত্র অফলাইন প্রোগ্রেসিভ ওয়েব অ্যাপ্লিকেশনে এটি প্রযোজ্য'
          }
        ],
        answer: 0,
        hint: {
          en: 'Choose either density descriptors (x) or width descriptors (w) exclusively.',
          bn: 'হয় ঘনত্বের মান (x) নতুবা প্রস্থের মান (w)—যেকোনো একটি পদ্ধতি বেছে নিন।'
        },
        explanation: {
          en: 'The HTML standard disallows mixing x and w descriptors within a single srcset list. For responsive responsive layouts, always standardize on w descriptors with sizes.',
          bn: 'একই তালিকায় x এবং w একসাথে মেশানো অবৈধ। রেসপনসিভ ওয়েবসাইটের জন্য সর্বদা sizes-এর সাথে w বর্ণনাকারী ব্যবহার করাই স্ট্যান্ডার্ড।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'beyond-the-width',
    title: {
      en: 'Container Queries & Modern Media — @container and Interaction Queries',
      bn: 'কন্টেইনার কুয়েরি ও আধুনিক মিডিয়া — @container এবং ইন্টারঅ্যাকশন কুয়েরি'
    }
  }
};
