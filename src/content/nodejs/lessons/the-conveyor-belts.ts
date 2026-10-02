import type { Lesson } from '../../../lib/types';

export const TheConveyorBeltsLesson: Lesson = {
  slug: 'the-conveyor-belts',
  tech: 'nodejs',
  title: {
    en: 'Streams and Backpressure — Handling Massive Data Efficiently',
    bn: 'স্ট্রিম এবং ব্যাকপ্রেশার: দক্ষতার সাথে বিশাল ডাটা পরিচালনা'
  },
  summary: {
    en: 'When applications process multi-gigabyte video files, database exports, or network telemetry, loading entire files into memory using fs.readFile causes fatal out-of-memory crashes. Node.js Streams solve this limitation by processing data sequentially in continuous chunks. Node provides four fundamental stream types: Readable, Writable, Duplex, and Transform. To prevent memory exhaustion when a fast producer overwhelms a slow consumer, streams implement Backpressure: writable.write() signals when buffers exceed highWaterMark, pausing the source until the consumer emits the drain event. Modern production applications leverage stream.pipeline to manage backpressure automatically and ensure zero memory leaks during stream failures.',
    bn: 'অ্যাপ্লিকেশনে যখন গিগাবাইট আকারের ভিডিও ফাইল, ডেটাবেস এক্সপোর্ট বা নেটওয়ার্ক ডাটা প্রসেস করতে হয়, তখন পুরো ফাইল মেমরিতে লোড করতে গেলে মেমরি ক্র্যাশ ঘটে। নোড.জেএস স্ট্রিম (Streams) ছোট ছোট খণ্ডে ধারাবাহিকভাবে ডাটা প্রসেস করে এই সীমাবদ্ধতা দূর করে। নোড.জেএসে ৪ ধরনের স্ট্রিম রয়েছে: রিডেবল, রাইটেবল, ডুপ্লেক্স এবং ট্রান্সফর্ম। যখন কোনো দ্রুতগতির ডাটা উৎস ধীরগতির রিসিভারকে অতিরিক্ত ডাটা দিয়ে ভারাক্রান্ত করে ফেলে, তখন ব্যাকপ্রেশার (Backpressure) কৌশল প্রয়োগ করা হয়: বাফার পূর্ণ হলে রাইট ফাংশন ফলস রিটার্ন করে উৎসকে থামায় এবং ড্রেন (drain) ইভেন্ট পেলে পুনরায় চালু করে। আধুনিক সিস্টেমে stream.pipeline এর মাধ্যমে স্বয়ংক্রিয়ভাবে ব্যাকপ্রেশার ও মেমরি লিক রোধ করা হয়।'
  },
  minutes: 28,
  nextLesson: {
    slug: 'the-cold-room',
    tech: 'nodejs',
    title: {
      en: 'File System and Buffers — Asynchronous File I/O and Binary Data',
      bn: 'ফাইল সিস্টেম ও বাফার: অ্যাসিঙ্ক্রোনাস ফাইল আই/ও এবং বাইনারি ডাটা'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'streams-architecture-overview',
      text: {
        en: 'The Architecture of Node.js Streams',
        bn: 'নোড.জেএস স্ট্রিম আর্কিটেকচারের রূপরেখা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When you build data pipelines in Node.js, reading large multi-gigabyte files directly into memory exhausts server RAM and crashes your application. Buffering a 5 GB file requires 5 GB of continuous memory, which quickly exceeds the default V8 heap limit.',
        bn: 'যখন আপনি নোড.জেএসে ডাটা পাইপলাইন তৈরি করেন, তখন বড় গিগাবাইট আকারের ফাইল একবারে মেমরিতে লোড করতে গেলে সার্ভারের র‍্যাম ফুরিয়ে যায় এবং অ্যাপ্লিকেশন ক্র্যাশ করে। একটি ৫ গিগাবাইট ফাইল বাফার করতে ৫ গিগাবাইট মেমরির প্রয়োজন হয়, যা V8 এর সীমা অতিক্রম করে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Node.js Streams solve this challenge by processing data chunk by chunk as a continuous flow. Instead of waiting for an entire file to load, a stream reads small pieces (typically 64 KB chunks), processes them, and passes them to the next consumer. This allows a 10 GB file to stream seamlessly using only a few megabytes of RAM.',
        bn: 'নোড.জেএস স্ট্রিম ছোট ছোট খণ্ডে ধারাবাহিকভাবে ডাটা প্রসেস করে এই সমস্যার সমাধান করে। পুরো ফাইল শেষ হওয়ার জন্য অপেক্ষা না করে স্ট্রিম ছোট ছোট অংশ (সাধারণত ৬৪ কিলোবাইট) পড়ে, প্রসেস করে এবং পরবর্তী ধাপে পাঠায়। এর ফলে মাত্র কয়েক মেগাবাইট র‍্যাম ব্যবহার করেই একটি ১০ গিগাবাইট ফাইল অতি সহজে প্রসেস করা সম্ভব হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'readable-stream',
          def: {
            en: 'A stream abstraction for a data source from which sequential chunks of data can be consumed.',
            bn: 'একটি ডাটা উৎসের অ্যাবস্ট্রাকশন যেখান থেকে ধারাবাহিকভাবে খণ্ড খণ্ড ডাটা পড়া যায়।'
          }
        },
        {
          term: 'writable-stream',
          def: {
            en: 'A stream abstraction representing a destination sink to which sequential chunks of data can be written.',
            bn: 'এমন একটি গন্তব্য বা সিঙ্ক যার ভেতর ধারাবাহিকভাবে খণ্ড খণ্ড ডাটা লেখা সম্ভব।'
          }
        },
        {
          term: 'backpressure',
          def: {
            en: 'The flow-control mechanism that pauses a fast data producer when a slow consumer’s internal buffer exceeds capacity.',
            bn: 'একটি প্রবাহ-নিয়ন্ত্রণ ব্যবস্থা যা ধীরগতির গ্রাহকের বাফার পূর্ণ হলে দ্রুতগতির ডাটা উৎপাদককে সাময়িক থামিয়ে রাখে।'
          }
        },
        {
          term: 'stream-pipeline',
          def: {
            en: 'A utility function that safely pipes multiple streams together, forwarding errors and destroying all streams on failure.',
            bn: 'একটি ইউটিলিটি ফাংশন যা একাধিক স্ট্রিমকে নিরাপদে সংযুক্ত করে এবং যেকোনো ব্যর্থতায় স্বয়ংক্রিয়ভাবে সমস্ত স্ট্রিম বন্ধ করে মেমরি লিক রোধ করে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'matrix'
    },
    {
      type: 'heading',
      id: 'four-stream-types-table',
      text: {
        en: 'Comparison Matrix of the Four Core Stream Types',
        bn: 'চারটি মূল স্ট্রিম ধরনের তুলনামূলক ম্যাট্রিক্স'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Node.js provides four distinct stream types designed for specific reading, writing, and bidirectional data transformation roles.',
        bn: 'নোড.জেএস পড়া, লেখা এবং দ্বিমুখী রূপান্তরের জন্য ৪টি সুনির্দিষ্ট স্ট্রিম কাঠামো প্রদান করে।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Stream Type', bn: 'স্ট্রিম ধরন' },
        { en: 'Read / Write Capabilities', bn: 'পড়া ও লেখার ক্ষমতা' },
        { en: 'Core Methods & Events', bn: 'প্রধান মেথড ও ইভেন্ট' },
        { en: 'Real-World Production Example', bn: 'বাস্তব প্রোডাকশন উদাহরণ' }
      ],
      rows: [
        [
          { en: 'Readable Stream', bn: 'রিডেবল স্ট্রিম' },
          { en: 'Read-only source of data', bn: 'কেবলমাত্র ডাটা পড়ার উৎস' },
          { en: 'on("data"), on("end"), pause(), resume()', bn: 'on("data"), on("end"), pause(), resume()' },
          { en: 'fs.createReadStream, http.IncomingMessage', bn: 'fs.createReadStream, http.IncomingMessage' }
        ],
        [
          { en: 'Writable Stream', bn: 'রাইটেবল স্ট্রিম' },
          { en: 'Write-only destination sink', bn: 'কেবলমাত্র ডাটা লেখার গন্তব্য' },
          { en: 'write(chunk), end(), on("drain"), on("finish")', bn: 'write(chunk), end(), on("drain"), on("finish")' },
          { en: 'fs.createWriteStream, http.ServerResponse', bn: 'fs.createWriteStream, http.ServerResponse' }
        ],
        [
          { en: 'Duplex Stream', bn: 'ডুপ্লেক্স স্ট্রিম' },
          { en: 'Both Readable and Writable independently', bn: 'স্বাধীনভাবে পড়া ও লেখা উভয়ই সক্ষম' },
          { en: 'Combines full Readable and Writable APIs', bn: 'রিডেবল ও রাইটেবল উভয়ের পূর্ণাঙ্গ এপিআই' },
          { en: 'net.Socket (bidirectional TCP network connection)', bn: 'net.Socket (দ্বিমুখী টিসিপি নেটওয়ার্ক সংযোগ)' }
        ],
        [
          { en: 'Transform Stream', bn: 'ট্রান্সফর্ম স্ট্রিম' },
          { en: 'Duplex stream where output is modified input', bn: 'ডুপ্লেক্স স্ট্রিম যেখানে আউটপুট ইনপুটের রূপান্তর' },
          { en: 'transform(chunk, encoding, cb), flush(cb)', bn: 'transform(chunk, encoding, cb), flush(cb)' },
          { en: 'zlib.createGzip (compression), crypto ciphers', bn: 'zlib.createGzip (কম্প্রেশন), ক্রিপ্টো সাইফার' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-pipeline-code',
      text: {
        en: 'Executable Transform Stream Pipeline Implementation',
        bn: 'ট্রান্সফর্ম স্ট্রিম এবং পাইপলাইনের সম্পূর্ণ বাস্তবায়ন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program creates a custom Transform stream that converts incoming text chunks to uppercase, and uses stream/promises pipeline to pipe data safely into a writable collector.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি কাস্টম ট্রান্সফর্ম স্ট্রিম তৈরি করে যা লেখাকে বড় হাতের অক্ষরে রূপান্তর করে, এবং stream/promises pipeline এর সাহায্যে ডাটা নিরাপদে রাইটেবল সংগ্রহশালায় পাঠায়।'
      }
    },
    {
      type: 'code',
      code: `import { Readable, Writable, Transform } from 'node:stream';
import { pipeline } from 'node:stream/promises';

// Create a custom Transform stream
let transformedCount = 0;
const upperTransform = new Transform({
  transform(chunk, encoding, callback) {
    transformedCount += 1;
    callback(null, chunk.toString().toUpperCase());
  }
});

const chunks = [];
const collector = new Writable({
  write(chunk, encoding, callback) {
    chunks.push(chunk.toString());
    callback();
  }
});

const source = Readable.from(['hello ', 'world ', 'streams!']);

await pipeline(source, upperTransform, collector);

console.log('Stream Pipeline Output:', chunks.join(''));
// prints: Stream Pipeline Output: HELLO WORLD STREAMS!
// transformed chunks count = 3`
    },
    {
      type: 'heading',
      id: 'backpressure-and-highwatermark',
      text: {
        en: 'Mastering Backpressure and HighWaterMark Buffer Bounds',
        bn: 'ব্যাকপ্রেশার নিয়ন্ত্রণ এবং highWaterMark বাফারের ভূমিকা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When a fast Readable stream reads from a high-speed SSD at 500 MB/s while a Writable stream writes to a slow network client at 1 MB/s, unwritten data accumulates in server RAM. Node.js prevents this through Backpressure. The stream’s highWaterMark sets a buffer threshold (64 KB default). When the buffer fills, writable.write() returns false, signaling the producer to pause. Once the buffer drains, the writable emits the "drain" event, signaling the producer to resume reading.',
        bn: 'যখন একটি দ্রুতগতির রিডেবল স্ট্রিম সেকেন্ডে ৫০০ মেগাবাইট পড়ে অথচ রাইটেবল স্ট্রিম ধীরগতির ইন্টারনেটে সেকেন্ডে মাত্র ১ মেগাবাইট পাঠায়, তখন অতিরিক্ত ডাটা সার্ভারের র‍্যামে জমতে থাকে। নোড.জেএস ব্যাকপ্রেশার (Backpressure) দিয়ে এটি রোধ করে। স্ট্রিমের highWaterMark বাফারের একটি নির্দিষ্ট সীমা (ডিফল্ট ৬৪ কিলোবাইট) নির্ধারণ করে। বাফার ভরে গেলে writable.write() ফলস রিটার্ন করে ডাটা পড়া স্থগিত করতে বলে। গ্রাহক ডাটা পাঠিয়ে বাফার খালি করলে "drain" ইভেন্ট নির্গত হয়, যা উৎপাদককে পুনরায় পড়া শুরু করার সংকেত দেয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Constant memory bounds: Streams process infinite data streams using a fixed small memory footprint bounded by highWaterMark.',
          bn: 'নির্দিষ্ট মেমরি সীমা: highWaterMark এর মাধ্যমে স্ট্রিম বিশাল ডাটাকে নির্দিষ্ট ও স্বল্প পরিমাণ মেমরিতে প্রসেস করে।'
        },
        {
          en: 'Four stream families: Master Readable for input, Writable for output, Duplex for sockets, and Transform for processing.',
          bn: 'চার ধরনের স্ট্রিম: ইনপুটের জন্য রিডেবল, আউটপুটের জন্য রাইটেবল, সকেটে ডুপ্লেক্স এবং রূপান্তরের জন্য ট্রান্সফর্ম ব্যবহার করুন।'
        },
        {
          en: 'Backpressure flow control: The write(chunk) === false return value and drain event prevent slow consumers from crashing.',
          bn: 'ব্যাকপ্রেশার নিয়ন্ত্রণ: write() এর ফলস রিটার্ন এবং drain ইভেন্ট গ্রাহকের মেমরি উপচে পড়া রোধ করে।'
        },
        {
          en: 'Use stream.pipeline: Always prefer pipeline over legacy pipe() to ensure automatic error forwarding and stream destruction.',
          bn: 'pipeline এর সুরক্ষা: পুরনো pipe() এর বদলে সর্বদা pipeline ব্যবহার করুন যাতে কোনো ত্রুটিতে মেমরি লিক না ঘটে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'cb-ex1',
      kind: 'mcq',
      topic: 'backpressure-mechanism',
      question: {
        en: 'What does a return value of false from writable.write(chunk) indicate in Node.js streams?',
        bn: 'নোড.জেএস স্ট্রিমে writable.write(chunk) থেকে false রিটার্ন আসার অর্থ কী?'
      },
      options: [
        {
          en: 'The writable stream’s internal buffer has exceeded highWaterMark, and the producer should pause writing until the "drain" event fires',
          bn: 'রাইটেবল স্ট্রিমের অভ্যন্তরীণ বাফার highWaterMark ছাড়িয়ে গেছে, এবং "drain" ইভেন্ট না আসা পর্যন্ত নতুন লেখা সাময়িক স্থগিত রাখতে হবে'
        },
        {
          en: 'The operating system hard drive has completely crashed',
          bn: 'অপারেটিং সিস্টেমের হার্ডড্রাইভ পুরোপুরি নষ্ট হয়ে গেছে'
        },
        {
          en: 'The chunk was rejected and deleted permanently',
          bn: 'ডাটা খণ্ডটি বর্জন করে চিরতরে মুছে ফেলা হয়েছে'
        },
        {
          en: 'The network connection was encrypted with SSL',
          bn: 'নেটওয়ার্ক সংযোগটি এসএসএল (SSL) দিয়ে এনক্রিপ্ট করা হয়েছে'
        }
      ],
      answer: 0,
      hint: {
        en: 'This is the backpressure signal. When the buffer is full, what event does the consumer emit once it empties?',
        bn: 'এটি ব্যাকপ্রেশারের সংকেত। বাফার পূর্ণ হলে গ্রাহক তা খালি করে কোন ইভেন্ট নির্গত করে?'
      },
      explanation: {
        en: 'Returning false is the backpressure flow control signal. The caller must stop pushing chunks until the drain event notifies it that buffer space is available.',
        bn: 'false রিটার্ন হলো ব্যাকপ্রেশারের সংকেত। বাফার খালি হয়ে drain ইভেন্ট না দেওয়া পর্যন্ত প্রেরককে ডাটা পাঠানো থামাতে হয়।'
      }
    },
    {
      id: 'cb-ex2',
      kind: 'mcq',
      topic: 'pipeline-vs-pipe-advantage',
      question: {
        en: 'Why is stream.pipeline() universally preferred over the legacy readable.pipe() method in production systems?',
        bn: 'প্রোডাকশন সিস্টেমে পুরনো readable.pipe() পদ্ধতির চেয়ে stream.pipeline() কেন সর্বজনীনভাবে বেশি গ্রহণযোগ্য?'
      },
      options: [
        {
          en: 'pipeline automatically forwards errors from all intermediate streams and cleans up (destroys) all streams if any failure occurs, preventing file descriptor leaks',
          bn: 'pipeline সমস্ত মধ্যবর্তী স্ট্রিমের ত্রুটি স্বয়ংক্রিয়ভাবে ট্র্যাক করে এবং কোনো ত্রুটি হলে সব স্ট্রিম ধ্বংস করে ফাইল ডেসক্রিপ্টর লিক রোধ করে'
        },
        {
          en: 'pipeline runs 10 times faster because it bypasses the CPU',
          bn: 'pipeline সিপিইউ বাইপাস করে ১০ গুণ দ্রুত চলে'
        },
        {
          en: 'pipe() can only handle text files smaller than 10 bytes',
          bn: 'pipe() কেবল ১০ বাইটের চেয়ে ছোট টেক্সট ফাইল পরিচালনা করতে পারে'
        },
        {
          en: 'pipeline converts JavaScript into C++ binary code',
          bn: 'pipeline জাভাস্ক্রিপ্টকে সি++ বাইনারি কোডে রূপান্তর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'If the destination stream closes unexpectedly in pipe(), does pipe() automatically close the source stream?',
        bn: 'pipe() পদ্ধতিতে গন্তব্য স্ট্রিম হঠাৎ বন্ধ হয়ে গেলে উৎস স্ট্রিম কি নিজে থেকে বন্ধ হয়?'
      },
      explanation: {
        en: 'readable.pipe() does not destroy the source stream if the destination fails, causing resource leaks. stream.pipeline guarantees full teardown on error.',
        bn: 'readable.pipe() গন্তব্য নষ্ট হলেও উৎস বন্ধ করে না, ফলে মেমরি লিক হয়। stream.pipeline সব স্ট্রিম নিরাপদে বন্ধ করে।'
      }
    },
    {
      id: 'cb-ex3',
      kind: 'mcq',
      topic: 'transform-stream-definition',
      question: {
        en: 'What architectural characteristic uniquely identifies a Transform stream in Node.js?',
        bn: 'কোন স্থাপত্যিক বৈশিষ্ট্যটি নোড.জেএসে একটি ট্রান্সফর্ম স্ট্রিমকে সঠিকভাবে চিহ্নিত করে?'
      },
      options: [
        {
          en: 'It is a Duplex stream where the output is causally computed by transforming its input chunks (e.g. gzip compression or encryption)',
          bn: 'এটি এমন একটি ডুপ্লেক্স স্ট্রিম যার আউটপুট তার ইনপুট খণ্ডগুলোকে রূপান্তর করে তৈরি হয় (যেমন জিপ কম্প্রেশন বা এনক্রিপশন)'
        },
        {
          en: 'It is a stream that only runs on graphics cards (GPUs)',
          bn: 'এটি এমন একটি স্ট্রিম যা কেবল গ্রাফিক্স কার্ডে (GPU) চলে'
        },
        {
          en: 'It can only write data and never produces output',
          bn: 'এটি কেবল ডাটা লিখতে পারে এবং কখনো কোনো আউটপুট দেয় না'
        },
        {
          en: 'It deletes the input file from disk after reading',
          bn: 'পড়ার পর এটি ডিস্ক থেকে মূল ফাইলটি মুছে ফেলে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Think of zlib.createGzip(): uncompressed bytes go in, compressed bytes come out.',
        bn: 'zlib.createGzip() এর কথা ভাবুন: সাধারণ ডাটা প্রবেশ করে এবং কমপ্রেসড ডাটা নির্গত হয়।'
      },
      explanation: {
        en: 'A Transform stream acts as an inline filter, taking input chunks, applying an algorithm, and emitting modified output chunks.',
        bn: 'ট্রান্সফর্ম স্ট্রিম একটি ফিল্টারের মতো কাজ করে, যা ইনপুট গ্রহণ করে নির্দিষ্ট নিয়ম অনুযায়ী বদলে আউটপুটে পাঠায়।'
      }
    }
  ],
  quiz: {
    id: 'the-conveyor-belts-quiz',
    title: {
      en: 'Streams and Backpressure Quiz',
      bn: 'স্ট্রিম এবং ব্যাকপ্রেশার কুইজ'
    },
    questions: [
      {
        id: 'cb-q1',
        kind: 'mcq',
        topic: 'default-highwatermark-size',
        question: {
          en: 'What is the default buffer size (highWaterMark) for standard Node.js byte streams?',
          bn: 'সাধারণ নোড.জেএস বাইট স্ট্রিমের জন্য ডিফল্ট বাফার আকার (highWaterMark) কত?'
        },
        options: [
          {
            en: '64 KB (65,536 bytes) for standard streams, and 16 KB for fs file streams',
            bn: 'সাধারণ স্ট্রিমের জন্য ৬৪ কিলোবাইট (৬৫,৫৩৬ বাইট), এবং fs ফাইল স্ট্রিমের জন্য ১৬ কিলোবাইট'
          },
          {
            en: '10 GB of memory',
            bn: '১০ গিগাবাইট মেমরি'
          },
          {
            en: 'Exactly 1 byte',
            bn: 'ঠিক ১ বাইট'
          },
          {
            en: 'Infinite bytes with no limits',
            bn: 'কোনো সীমা ছাড়া অসীম বাইট'
          }
        ],
        answer: 0,
        hint: {
          en: 'The default is 64 KB for generic streams and 16 KB for file streams, preventing high memory consumption per connection.',
          bn: 'সাধারণ স্ট্রিমের ক্ষেত্রে ডিফল্ট ৬৪ KB এবং ফাইলের ক্ষেত্রে ১৬ KB, যা প্রতিটি সংযোগের মেমরি খরচ সীমিত রাখে।'
        },
        explanation: {
          en: 'Node.js sets highWaterMark to 64 KB (16 KB for fs.createReadStream) to strike an optimal balance between throughput and RAM usage.',
          bn: 'নোড.জেএস মেমরি ও গতির চমৎকার ভারসাম্যের জন্য highWaterMark ডিফল্টভাবে ৬৪ KB (ফাইলে ১৬ KB) নির্ধারণ করে।'
        }
      },
      {
        id: 'cb-q2',
        kind: 'mcq',
        topic: 'readable-stream-modes',
        question: {
          en: 'What are the two operating modes of a Readable stream, and how do they differ?',
          bn: 'একটি রিডেবল স্ট্রিমের দুটি অপারেটিং মোড কী কী এবং তাদের মধ্যে পার্থক্য কী?'
        },
        options: [
          {
            en: 'Flowing mode (data is pushed automatically via "data" events) and Paused mode (data must be pulled explicitly using stream.read())',
            bn: 'ফ্লোয়িং মোড (data ইভেন্টের মাধ্যমে ডাটা নিজে নিজে প্রবাহিত হয়) এবং পজড মোড (stream.read() দিয়ে টেনে ডাটা নিতে হয়)'
          },
          {
            en: 'Online mode and Airplane mode',
            bn: 'অনলাইন মোড এবং এয়ারপ্লেন মোড'
          },
          {
            en: 'Fast mode (runs in 0 ms) and Slow mode (runs in 10 minutes)',
            bn: 'ফাস্ট মোড (০ মিলিসেকেন্ডে চলে) এবং স্লো মোড (১০ মিনিটে চলে)'
          },
          {
            en: 'Encrypted mode and Plaintext mode',
            bn: 'এনক্রিপ্টেড মোড এবং প্লেইনটেক্সট মোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'In flowing mode, you attach a listener for "data". In paused mode, you call read() or use a "for await...of" loop.',
          bn: 'ফ্লোয়িং মোডে "data" ইভেন্ট শোনা হয়। পজড মোডে read() কল করা হয় বা "for await...of" লুপ চালানো হয়।'
        },
        explanation: {
          en: 'Readable streams operate either in flowing mode (push-driven by event emissions) or paused mode (pull-driven on demand).',
          bn: 'রিডেবল স্ট্রিম হয় ফ্লোয়িং মোডে (ইভেন্টের মাধ্যমে ধাক্কা দিয়ে) অথবা পজড মোডে (চাহিদামতো টেনে নিয়ে) কাজ করে।'
        }
      },
      {
        id: 'cb-q3',
        kind: 'mcq',
        topic: 'async-iteration-readable-stream',
        question: {
          en: 'How can a developer modernly consume chunks from a Readable stream using standard ES2018 JavaScript syntax?',
          bn: 'আধুনিক ES2018 জাভাস্ক্রিপ্ট সিনট্যাক্স ব্যবহার করে কীভাবে কোনো ডেভেলপার একটি রিডেবল স্ট্রিম থেকে ডাটা খণ্ডগুলো পড়তে পারেন?'
        },
        options: [
          {
            en: 'Using the "for await (const chunk of readableStream)" loop inside an async function',
            bn: 'একটি অ্যাসিঙ্ক ফাংশনের ভেতর "for await (const chunk of readableStream)" লুপ ব্যবহার করে'
          },
          {
            en: 'Using a standard CSS selector document.querySelectorAll("stream")',
            bn: 'একটি সাধারণ সিএসএস সিলেক্টর document.querySelectorAll("stream") ব্যবহার করে'
          },
          {
            en: 'By converting the stream to a JSON string with JSON.stringify()',
            bn: 'JSON.stringify() দিয়ে স্ট্রিমটিকে একটি টেক্সট স্ট্রিংয়ে রূপান্তর করে'
          },
          {
            en: 'Streams cannot be consumed in modern JavaScript',
            bn: 'আধুনিক জাভাস্ক্রিপ্টে স্ট্রিম কোনোভাবেই পড়া সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Readable streams implement the Symbol.asyncIterator protocol, allowing native asynchronous iteration.',
          bn: 'রিডেবল স্ট্রিম Symbol.asyncIterator প্রোটোকল মেনে চলে, যা সরাসরি অ্যাসিঙ্ক্রোনাস লুপ সমর্থন করে।'
        },
        explanation: {
          en: 'Readable streams are async iterables, enabling clean and intuitive consumption via "for await (const chunk of stream)".',
          bn: 'রিডেবল স্ট্রিম অ্যাসিঙ্ক ইটারেবল হওয়ায় "for await...of" লুপের মাধ্যমে অত্যন্ত পরিষ্কারভাবে ডাটা খণ্ডগুলো পড়া যায়।'
        }
      },
      {
        id: 'cb-q4',
        kind: 'mcq',
        topic: 'object-mode-streams',
        question: {
          en: 'What occurs when a Node.js stream is configured with { objectMode: true }?',
          bn: 'যখন কোনো নোড.জেএস স্ট্রিমকে { objectMode: true } দিয়ে কনফিগার করা হয়, তখন কী ঘটে?'
        },
        options: [
          {
            en: 'The stream emits and accepts arbitrary JavaScript objects rather than being restricted strictly to Buffers and Strings',
            bn: 'স্ট্রিমটি কেবল বাফার বা স্ট্রিংয়ে সীমাবদ্ধ না থেকে যেকোনো জাভাস্ক্রিপ্ট অবজেক্ট গ্রহণ ও নির্গমন করতে পারে'
          },
          {
            en: 'The stream deletes all objects in memory',
            bn: 'স্ট্রিমটি মেমরির সমস্ত অবজেক্ট মুছে ফেলে'
          },
          {
            en: 'The stream converts all data into 3D graphics objects',
            bn: 'স্ট্রিমটি সমস্ত ডাটাকে থ্রি-ডি গ্রাফিক্স অবজেক্টে রূপান্তর করে'
          },
          {
            en: 'It doubles the size of every file on disk',
            bn: 'এটি ডিস্কের প্রতিটি ফাইলের আকার দ্বিগুণ করে দেয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Normally streams only transmit Buffers or Strings. In objectMode, you can stream database rows as JavaScript objects.',
          bn: 'সাধারণত স্ট্রিম কেবল বাফার বা স্ট্রিং পাঠায়। objectMode চালু করলে ডেটাবেসের সারি অবজেক্ট হিসেবে সরাসরি পাঠানো যায়।'
        },
        explanation: {
          en: 'objectMode switches the stream from byte-oriented chunks to arbitrary JavaScript value chunks, useful for ETL pipelines.',
          bn: 'objectMode স্ট্রিমকে বাইট ভিত্তিক ডাটা থেকে যেকোনো অবজেক্ট ভিত্তিক ডাটা প্রসেস করার উপযোগী করে তোলে।'
        }
      }
    ]
  }
};
