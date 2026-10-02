import type { Lesson } from '../../../lib/types';

export const pixelVaultLesson: Lesson = {
  slug: 'the-pixel-vault',
  tech: 'canvas',
  title: {
    en: 'ImageData, Byte Offset Math & Pixel Manipulation',
    bn: 'ImageData, বাইট অফসেট গণিত ও পিক্সেল পরিবর্তন'
  },
  summary: {
    en: 'Direct pixel access in the 2D canvas API enables image processing, custom shaders, computer vision filters, and chroma-key greenscreen extraction. Pixel buffers are extracted using ctx.getImageData and committed back via ctx.putImageData. The returned ImageData object encapsulates raw color data inside a Uint8ClampedArray named data. In this 1D array, every pixel occupies exactly 4 consecutive bytes representing Red, Green, Blue, and Alpha (RGBA) channels bounded between 0 and 255. Converting 2D coordinates (x, y) into a 1D array offset follows the byte offset formula: offset equals (y multiplied by width plus x) multiplied by 4. For instance, in an image measuring 200 pixels wide by 100 pixels tall (containing 80000 total bytes across all pixels), pixel coordinate (10, 20) resides at byte offset 16040. This lesson teaches ImageData extraction, stride math, grayscale filters, and CORS cross-origin security rules.',
    bn: 'ক্যানভাস ২ডি এপিআই-তে সরাসরি পিক্সেল নিয়ে কাজ করার মাধ্যমে ছবি এডিটিং, কাস্টম ফিল্টার এবং গ্রিন স্ক্রিনের ব্যাকগ্রাউন্ড পরিবর্তনের মতো কাজ করা যায়। ctx.getImageData দিয়ে পিক্সেল বাফার বের করা হয় এবং ctx.putImageData দিয়ে আবার ক্যানভাসে বসানো হয়। ImageData অবজেক্টের ভেতর data নামের একটি Uint8ClampedArray থাকে। এই ১ডি অ্যারেতে প্রতিটি পিক্সেল ঠিক ৪টি পরপর বাইট দখল করে—যা ০ থেকে ২৫৫ পর্যন্ত Red, Green, Blue এবং Alpha (RGBA) নির্দেশ করে। ২ডি স্থানাঙ্ক (x, y)-কে ১ডি অ্যারে অফসেটে রূপান্তরের সূত্র হলো: অফসেট সমান (y গুণ প্রস্থ যোগ x) গুণ ৪। যেমন ২০০ পিক্সেল চওড়া ও ১০০ পিক্সেল লম্বা একটি ছবিতে (যেখানে মোট ৮০০০০ বাইট থাকে), (১০, ২০) স্থানাঙ্কের পিক্সেলটি ১৬০৪০ নম্বর বাইট অফসেটে পাওয়া যায়। এই পাঠে ImageData এক্সট্র্যাকশন, স্ট্রাইড গণিত, সাদাকালো ফিল্টার এবং কর্শ (CORS) সিকিউরিটি বিধিনিষেধ শেখানো হয়েছে।'
  },
  minutes: 25,
  blocks: [
    {
      type: 'heading',
      id: 'opener',
      text: {
        en: 'The Core Concept: Accessing the Hardware Framebuffer',
        bn: 'মূল ধারণা: হার্ডওয়্যার ফ্রেমবাফারে সরাসরি প্রবেশ'
      }
    },
    {
      type: 'visual',
      id: 'flow-chart'
    },
    {
      type: 'para',
      text: {
        en: 'While vector commands (such as drawing straight lines or arcs) treat the screen as mathematical geometry, rasterization ultimately boils down to a massive grid of colored pixels. The Canvas 2D API exposes this underlying hardware framebuffer through the ImageData interface, giving JavaScript direct, unmediated read and write access to every color byte.',
        bn: 'লাইন বা বৃত্তচাপ আঁকার মতো ভেক্টর কমান্ডগুলো গণিত মেনে চললেও শেষ পর্যন্ত সবকিছুই ছোট ছোট রঙিন পিক্সেলের গ্রিডে পরিণত হয়। ক্যানভাস ২ডি এপিআই ImageData ইন্টারফেসের মাধ্যমে পেছনের এই হার্ডওয়্যার বাফার সরাসরি উন্মুক্ত করে দেয়, যার ফলে জাভাস্ক্রিপ্ট প্রতিটি রঙের বাইট সরাসরি পড়তে এবং পরিবর্তন করতে পারে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'ImageData Object',
          def: {
            en: 'The wrapper containing width, height, and a Uint8ClampedArray holding raw RGBA pixel data',
            bn: 'ক্যানভাসের অবজেক্ট যাতে ছবির প্রস্থ, উচ্চতা এবং প্রতিটি পিক্সেলের কাঁচা আরজিবিএ (RGBA) ডেটা অ্যারে থাকে'
          }
        },
        {
          term: 'Uint8ClampedArray',
          def: {
            en: 'A typed array whose values are strictly clamped to integers between 0 and 255, automatically rounding floats and preventing overflow',
            bn: 'টাইপড অ্যারে যার মান স্বয়ংক্রিয়ভাবে ০ থেকে ২৫৫ এর মধ্যে সীমাবদ্ধ থাকে এবং কোনো ঋণাত্মক সংখ্যা বা উপচে পড়া মান নেয় না'
          }
        },
        {
          term: 'RGBA Channel Quad',
          def: {
            en: 'The consecutive channel bytes representing Red, Green, Blue, and Alpha in array order',
            bn: 'পরপর চ্যানেল বাইট যা একটি একক পিক্সেলের লাল, সবুজ, নীল এবং স্বচ্ছতা প্রকাশ করে'
          }
        },
        {
          term: 'Tainted Canvas Exception',
          def: {
            en: 'The SecurityError thrown by getImageData when an image drawn onto the canvas lacks CORS cross-origin authorization',
            bn: 'ক্যানভাসে ক্রস-অরিজিন পারমিশন ছাড়া অন্য ডোমেনের ছবি আঁকলে getImageData কল করার সময় তৈরি হওয়া সিকিউরিটি এরর'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'pixel-manipulation-table',
      text: {
        en: 'Common Pixel Manipulation Operations',
        bn: 'পিক্সেল পরিবর্তনের প্রধান প্রধান কাজসমূহ'
      }
    },
    {
      type: 'table',
      caption: {
        en: 'Mathematical Formulas for Raw ImageData Pixel Manipulation',
        bn: 'ImageData-র পিক্সেল পরিবর্তনের গাণিতিক সূত্রসমূহ'
      },
      head: [
        { en: 'Visual Effect', bn: 'এফেক্ট' },
        { en: 'Channel Transformation Formula', bn: 'চ্যানেল রূপান্তর সূত্র' },
        { en: 'Outcome', bn: 'ফলাফল' }
      ],
      rows: [
        [
          { en: 'Color Inversion (Negative)', bn: 'কালার ইনভার্ট (নেগেটিভ)' },
          { en: 'R = 255 - R; G = 255 - G; B = 255 - B', bn: 'R = ২৫৫ - R; G = ২৫৫ - G; B = ২৫৫ - B' },
          { en: 'Reverses color intensities into photo-negative appearance', bn: 'রঙগুলোকে উল্টে দিয়ে এক্স-রে বা নেগেটিভ ছবির রূপ দেয়' }
        ],
        [
          { en: 'Grayscale (Luminance)', bn: 'গ্রেস্কেল (সাদাকালো)' },
          { en: 'gray = 0.299*R + 0.587*G + 0.114*B; R = G = B = gray', bn: 'gray = ০.২৯৯*R + ০.৫৮৭*G + ০.১১৪*B; R = G = B = gray' },
          { en: 'Converts full color photography into perceptually accurate black & white', bn: 'মানুষের চোখের সংবেদনশীলতা বজায় রেখে রঙিন ছবিকে নিখুঁত সাদাকালো বানায়' }
        ],
        [
          { en: 'Chroma-Key (Greenscreen)', bn: 'ক্রোমা-কি (গ্রিন স্ক্রিন)' },
          { en: 'if (G > 100 && G > R*1.4 && G > B*1.4) A = 0', bn: 'if (G > ১০০ && G > R*১.৪ && G > B*১.৪) A = ০' },
          { en: 'Renders green studio background pixels completely transparent', bn: 'সবুজ ব্যাকগ্রাউন্ডকে সম্পূর্ণ স্বচ্ছ করে দেয় যাতে পেছনের দৃশ্য দেখা যায়' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'run',
      text: {
        en: 'Executable Simulation: Buffer Allocation & Byte Offset Math',
        bn: 'চালনাযোগ্য সিমুলেশন: বাফার বরাদ্দ ও বাইট অফসেট গণিত'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following Node.js script calculates the memory size for a 200 by 100 pixel canvas buffer and locates the exact 1D byte offset for coordinate (10, 20):',
        bn: 'নিচের নোড.জেএস স্ক্রিপ্টটি ২০০ বাই ১০০ পিক্সেল ক্যানভাস বাফারের মেমোরি সাইজ এবং (১০, ২০) স্থানাঙ্কের ১ডি বাইট অফসেট নিখুঁতভাবে বের করে দেখায়:'
      }
    },
    {
      type: 'code',
      id: 'canvas-imagedata-sim',
      lang: 'javascript',
      code: `// Canvas ImageData Pixel Array & Stride Math Engine
const width = 200;
const height = 100;
const bytesPerPixel = 4; // R, G, B, A

// Calculate total buffer allocation size in bytes
const totalBytes = width * height * bytesPerPixel;

// Target coordinate inside the 200x100 grid
const targetX = 10;
const targetY = 20;

// Byte offset formula: (y * width + x) * bytesPerPixel
const byteOffset = (targetY * width + targetX) * bytesPerPixel;

console.log('Canvas image width in pixels:', width);
// -> Canvas image width in pixels: 200

console.log('Canvas image height in pixels:', height);
// -> Canvas image height in pixels: 100

console.log('Total allocated buffer size in bytes:', totalBytes);
// -> Total allocated buffer size in bytes: 80000

console.log('Target coordinate X:', targetX);
// -> Target coordinate X: 10

console.log('Target coordinate Y:', targetY);
// -> Target coordinate Y: 20

console.log('Calculated 1D byte offset in Uint8ClampedArray:', byteOffset);
// -> Calculated 1D byte offset in Uint8ClampedArray: 16040`,
      caption: {
        en: 'Figure 1: In a 200 by 100 pixel buffer with 80000 total bytes, pixel (10, 20) is located at byte offset 16040',
        bn: 'চিত্র ১: ২০০ বাই ১০০ পিক্সেলের মোট ৮০০০০ বাইট বাফারে (১০, ২০) স্থানাঙ্কের পিক্সেলটি ১৬০৪০ নম্বর বাইট অফসেটে অবস্থিত'
      }
    },
    {
      type: 'heading',
      id: 'cors-taint-security-guide',
      text: {
        en: 'The Tainted Canvas Trap: Cross-Origin Security',
        bn: 'টেইন্টেড ক্যানভাস ফাঁদ: ক্রস-অরিজিন নিরাপত্তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'If you load an image from another domain without proper CORS headers and render it via ctx.drawImage, the browser marks the canvas as tainted. The moment you call getImageData or toDataURL, the browser throws a SecurityError to prevent cross-origin data theft. Always configure img.crossOrigin = "anonymous" and ensure the host server serves Access-Control-Allow-Origin.',
        bn: 'অনুমতি ছাড়া অন্য কোনো ওয়েবসাইটের ছবি ক্যানভাসে এঁকে যদি আপনি getImageData বা toDataURL কল করেন, তবে ব্রাউজার সিকিউরিটি এরর দিয়ে কোড আটকে দেবে। তথ্য চুরি রোধে ব্রাউজার এই সুরক্ষাব্যবস্থা রাখে। অন্য ডোমেনের ছবি ব্যবহার করতে হলে অবশ্যই জাভাস্ক্রিপ্টে img.crossOrigin = "anonymous" সেট করতে হবে এবং সার্ভারে উপযুক্ত হেডার থাকতে হবে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'putImageData(imageData, dx, dy)',
          def: {
            en: 'Writes raw pixel data directly back into the canvas surface without applying transformation matrices or globalCompositeOperation',
            bn: 'কোনো স্কেল বা রোটেশন ছাড়াই সরাসরি ক্যানভাসের পিক্সেল বাফারে ডেটা লিখে দেয়'
          }
        },
        {
          term: 'crossOrigin = "anonymous"',
          def: {
            en: 'The image property requesting CORS credentials-free cross-origin resource sharing before rendering to canvas',
            bn: 'ছবির প্রপার্টি যা সার্ভার থেকে অনুমতি নিয়ে ক্যানভাসকে টেইন্ট বা ব্লক হওয়া থেকে বাঁচায়'
          }
        },
        {
          term: 'createImageData(width, height)',
          def: {
            en: 'Allocates an empty transparent-black ImageData buffer in memory without reading existing canvas pixels',
            bn: 'ক্যানভাস থেকে না পড়ে সরাসরি মেমোরিতে একটি নতুন স্বচ্ছ ফাঁকা ImageData বাফার তৈরি করে'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'canvas-byte-offset-calc-ex',
      kind: 'mcq',
      topic: 'Calculating 1D byte offset for coordinate (10, 20)',
      question: {
        en: 'According to our byte offset simulation for a 200 pixel wide canvas, what is the starting byte offset in the Uint8ClampedArray for pixel coordinate (10, 20)?',
        bn: '২০০ পিক্সেল চওড়া ক্যানভাসের ক্ষেত্রে আমাদের সিমুলেশন অনুযায়ী (১০, ২০) স্থানাঙ্কের পিক্সেলের জন্য Uint8ClampedArray-তে শুরুর বাইট অফসেট কত?'
      },
      options: [
        {
          en: '16040 ((20 * 200 + 10) * 4)',
          bn: '১৬০৪০ ((২০ * ২০০ + ১০) * ৪)'
        },
        {
          en: '80000',
          bn: '৮০০০০'
        },
        {
          en: '2000',
          bn: '২০০০'
        },
        {
          en: '400',
          bn: '৪০০'
        }
      ],
      answer: 0,
      hint: {
        en: 'Formula: (y * width + x) * 4.',
        bn: 'সূত্র: (y * প্রস্থ + x) * ৪।'
      },
      explanation: {
        en: '(20 * 200 + 10) = 4010th pixel. Multiplied by 4 bytes per pixel (RGBA) = byte index 16040.',
        bn: '(২০ * ২০০ + ১০) = ৪০১০ নম্বর পিক্সেল। প্রতি পিক্সেলে ৪ বাইট করে গুণ করলে ১৬০৪০ অফসেট পাওয়া যায়।'
      }
    },
    {
      id: 'canvas-clamped-array-behavior-ex',
      kind: 'mcq',
      topic: 'Uint8ClampedArray out-of-bounds value handling',
      question: {
        en: 'What happens if you assign the number 300 to a color channel in a canvas Uint8ClampedArray?',
        bn: 'ক্যানভাসের Uint8ClampedArray-তে কোনো কালার চ্যানেলের মান ৩০০ সেট করলে কী ঘটবে?'
      },
      options: [
        {
          en: 'The array clamps the value automatically to the maximum allowed limit of 255 without throwing an error',
          bn: 'অ্যারে কোনো এরর না দিয়েই সংখ্যাটিকে সর্বোচ্চ গ্রহণযোগ্য সীমা ২৫৫ তে নামিয়ে আটকে রাখে'
        },
        {
          en: 'The JavaScript runtime crashes with an integer overflow error',
          bn: 'জাভাস্ক্রিপ্ট ইন্টিজার ওভারফ্লো এরর দিয়ে ক্র্যাশ করে'
        },
        {
          en: 'The value wraps around to 45',
          bn: 'মানটি ঘুরে গিয়ে ৪৫ হয়ে যায়'
        },
        {
          en: 'The entire canvas becomes invisible',
          bn: 'পুরো ক্যানভাস অদৃশ্য হয়ে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Clamping bounds values strictly between 0 and 255.',
        bn: 'মানগুলোকে ০ থেকে ২৫৫ এর মধ্যে আটকে রাখার কথা ভাবুন।'
      },
      explanation: {
        en: 'Uint8ClampedArray automatically clamps values: negative numbers become 0, numbers greater than 255 become 255, and decimals are rounded.',
        bn: 'Uint8ClampedArray স্বয়ংক্রিয়ভাবে অতিরিক্ত মানকে ২৫৫ এবং ঋণাত্মক মানকে ০ তে বেঁধে রাখে।'
      }
    },
    {
      id: 'canvas-tainted-security-ex',
      kind: 'mcq',
      topic: 'How cross-origin images taint a canvas',
      question: {
        en: 'Why does calling ctx.getImageData() throw a SecurityError exception when inspecting a canvas containing a remote image?',
        bn: 'দূরবর্তী কোনো ওয়েবসাইটের ছবি আঁকা ক্যানভাসে ctx.getImageData() কল করলে কেন ব্রাউজার SecurityError দেখায়?'
      },
      options: [
        {
          en: 'The canvas is tainted because the remote image was loaded without CORS permission, preventing cross-origin data extraction and user tracking',
          bn: 'অনুমতি ছাড়া অন্য ডোমেনের ছবি ব্যবহারের কারণে ক্যানভাস টেইন্ট হয়ে যায়, যা ডেটা চুরি রোধে ব্রাউজার আটকে দেয়'
        },
        {
          en: 'The computer lacks enough RAM memory to process pixels',
          bn: 'কম্পিউটারে পিক্সেল প্রসেস করার মতো পর্যাপ্ত র্যাম নেই'
        },
        {
          en: 'The image was saved in GIF format instead of PNG',
          bn: 'ছবিটি পিএনজির বদলে জিআইএফ ফরম্যাটে সেভ করা হয়েছিল'
        },
        {
          en: 'Canvas 2D contexts do not support image loading',
          bn: 'ক্যানভাস ২ডি কনটেক্সট ছবি লোড করা সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'CORS security restrictions protect user privacy against unauthorized pixel sniffing.',
        bn: 'অননুমোদিত পিক্সেল চুরি ঠেকানোর সিকিউরিটি নিয়মের কথা ভাবুন।'
      },
      explanation: {
        en: 'Cross-origin images taint the canvas unless fetched with proper CORS headers. Tainted canvases block pixel readout APIs.',
        bn: 'সিওআরএস (CORS) অনুমতি ছাড়া ছবি লোড করলে ক্যানভাস টেইন্ট হয় এবং ব্রাউজার পিক্সেল ডেটা পড়তে বাধা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-pixel-vault',
    title: {
      en: 'Canvas ImageData & Pixel Manipulation Quiz',
      bn: 'ক্যানভাস ImageData ও পিক্সেল পরিবর্তন কুইজ'
    },
    questions: [
      {
        id: 'q-canvas-rgba-stride-order',
        kind: 'mcq',
        topic: 'Order of color channels in ImageData Uint8ClampedArray',
        question: {
          en: 'What is the exact sequence of the 4 bytes representing a single pixel in an ImageData typed array?',
          bn: 'ImageData টাইপড অ্যারেতে একটি একক পিক্সেল নির্দেশকারী ৪টি বাইটের ধারাবাহিক ক্রম কী?'
        },
        options: [
          {
            en: 'Red, Green, Blue, Alpha (RGBA)',
            bn: 'লাল, সবুজ, নীল, আলফা (RGBA)'
          },
          {
            en: 'Alpha, Red, Green, Blue (ARGB)',
            bn: 'আলফা, লাল, সবুজ, নীল (ARGB)'
          },
          {
            en: 'Blue, Green, Red, Alpha (BGRA)',
            bn: 'নীল, সবুজ, লাল, আলফা (BGRA)'
          },
          {
            en: 'Hue, Saturation, Lightness, Alpha (HSLA)',
            bn: 'হিউ, স্যাচুরেশন, লাইটনেস, আলফা (HSLA)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Standard RGBA byte sequence.',
          bn: 'সাধারণ আরজিবিএ (RGBA) বাইট ক্রম।'
        },
        explanation: {
          en: 'Canvas ImageData stores channels in RGBA order: the first byte is Red, the second is Green, the third is Blue, and the fourth is Alpha.',
          bn: 'ক্যানভাস ImageData সর্বদা RGBA ক্রমে থাকে: প্রথম বাইট লাল, দ্বিতীয়টি সবুজ, তৃতীয়টি নীল এবং চতুর্থটি আলফা।'
        }
      },
      {
        id: 'q-canvas-grayscale-formula',
        kind: 'mcq',
        topic: 'Luminance formula for accurate grayscale conversion',
        question: {
          en: 'Why do image processing engineers use (0.299*R + 0.587*G + 0.114*B) rather than a simple average (R+G+B)/3 to convert color photos to grayscale?',
          bn: 'ছবিকে সাদাকালো করতে ইঞ্জিনিয়াররা সাধারণ গড়ের ((R+G+B)/৩) বদলে কেন (০.২৯৯*R + ০.৫৮৭*G + ০.১১৪*B) সূত্র ব্যবহার করেন?'
        },
        options: [
          {
            en: 'Human eyes are far more sensitive to green wavelengths and less sensitive to blue, making weighted luminance visually accurate',
            bn: 'মানুষের চোখ সবুজ আলোর প্রতি অনেক বেশি সংবেদনশীল এবং নীল আলোর প্রতি কম, তাই এই ওজনযুক্ত মান প্রাকৃতিক সাদাকালো রূপ দেয়'
          },
          {
            en: 'The simple average formula produces invisible pixels',
            bn: 'সাধারণ গড় করলে পিক্সেলগুলো অদৃশ্য হয়ে যায়'
          },
          {
            en: 'Green pixels require more battery power to display',
            bn: 'সবুজ পিক্সেল জ্বালাতে বেশি ব্যাটারি চার্জ লাগে'
          },
          {
            en: 'W3C specifications ban mathematical division in canvas code',
            bn: 'ডব্লিউথ্রিসি নিয়মে ক্যানভাসে ভাগ করা নিষিদ্ধ'
          }
        ],
        answer: 0,
        hint: {
          en: 'Photometric luminance matches human ocular cone cell sensitivity.',
          bn: 'মানুষের চোখের আলোর সংবেদনশীলতার কথা ভাবুন।'
        },
        explanation: {
          en: 'Human visual receptors perceive green as brightest and blue as darkest. The ITU-R BT.601 formula weights colors accordingly.',
          bn: 'মানুষের চোখ সবুজকে সবচেয়ে উজ্জ্বল দেখে। তাই ০.৫৮৭ ওজন দিয়ে সবুজ চ্যানেল রাখলে নিখুঁত সাদাকালো ছবি পাওয়া যায়।'
        }
      },
      {
        id: 'q-canvas-putimagedata-transforms',
        kind: 'mcq',
        topic: 'How putImageData ignores active transformation matrices',
        question: {
          en: 'If you apply ctx.rotate(45) and then call ctx.putImageData(data, 0, 0), how does the image render?',
          bn: 'যদি আপনি ctx.rotate(৪৫) কল করার পর ctx.putImageData(data, ০, ০) কল করেন, তবে ছবিটি কীভাবে আঁকা হবে?'
        },
        options: [
          {
            en: 'It draws completely upright at coordinates (0, 0), ignoring the rotation entirely because putImageData writes directly to physical buffer pixels',
            bn: 'ঘূর্ণন সম্পূর্ণ উপেক্ষা করে একদম সোজাভাবে (০, ০) অবস্থানে আঁকা হবে কারণ putImageData সরাসরি বাফারের মেমোরিতে লেখে'
          },
          {
            en: 'It draws rotated at 45 degrees',
            bn: 'এটি ৪৫ ডিগ্রি ঘুরে আঁকা হবে'
          },
          {
            en: 'It rotates backwards by 45 degrees',
            bn: 'এটি উল্টো দিকে ৪৫ ডিগ্রি ঘুরবে'
          },
          {
            en: 'The canvas throws an INVALID_STATE_ERR exception',
            bn: 'ক্যানভাসে একটি এরর দেখা দেবে'
          }
        ],
        answer: 0,
        hint: {
          en: 'putImageData is a low-level pixel blit that bypasses the transform matrix.',
          bn: 'putImageData সরাসরি পিক্সেল কপিয়ার হওয়ায় এটি ট্রান্সফর্মেশন উপেক্ষা করে।'
        },
        explanation: {
          en: 'putImageData operates at the physical raster buffer level, completely ignoring active matrices, clipping paths, and composite modes.',
          bn: 'putImageData সরাসরি হার্ডওয়্যার বাফারে কাজ করায় এটি রোটেশন বা স্কেলিং ম্যাট্রিক্স কোনো কিছুই মানে না।'
        }
      },
      {
        id: 'q-canvas-chroma-key-alpha-zero',
        kind: 'mcq',
        topic: 'How greenscreen filters remove studio backgrounds',
        question: {
          en: 'In a chroma-key greenscreen algorithm, what value is written to the pixel Alpha channel (data[i + 3]) when a green background pixel is identified?',
          bn: 'ক্রোমা-কি গ্রিন স্ক্রিন অ্যালগরিদমে সবুজ ব্যাকগ্রাউন্ডের পিক্সেল শনাক্ত হলে আলফা চ্যানেলে (data[i + ৩]) কত মান লেখা হয়?'
        },
        options: [
          {
            en: '0 (making the pixel fully transparent)',
            bn: '০ (পিক্সেলটিকে সম্পূর্ণ স্বচ্ছ বা ট্রান্সপারেন্ট করে দেওয়া হয়)'
          },
          {
            en: '255 (making the pixel solid black)',
            bn: '২৫৫ (পিক্সেলটিকে কালো করা হয়)'
          },
          {
            en: '128 (making the pixel gray)',
            bn: '১২৮ (পিক্সেলটিকে ধূসর করা হয়)'
          },
          {
            en: '500 (turning the pixel white)',
            bn: '৫০০ (পিক্সেলটিকে সাদা করা হয়)'
          }
        ],
        answer: 0,
        hint: {
          en: 'Alpha 0 creates complete transparency.',
          bn: 'আলফা ০ হলে পিক্সেল পুরোপুরি স্বচ্ছ হয়ে যাওয়ার কথা ভাবুন।'
        },
        explanation: {
          en: 'Setting the Alpha byte to 0 makes the green studio background completely transparent, revealing the scene behind.',
          bn: 'আলফা চ্যানেল ০ করে দিলে সবুজ রঙ উধাও হয়ে সেখানে পেছনের ব্যাকগ্রাউন্ড ফুটে ওঠে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'the-loom-of-touch',
    tech: 'canvas',
    title: {
      en: 'Pointer Events, Coordinates & Hit-Testing',
      bn: 'পয়েন্টার ইভেন্ট, স্থানাঙ্ক ও হিট-টেস্টিং'
    }
  }
};
