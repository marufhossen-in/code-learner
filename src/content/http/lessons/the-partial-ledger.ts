import type { Lesson } from '../../../lib/types';

export const thePartialLedgerLesson: Lesson = {
  slug: 'the-partial-ledger',
  tech: 'http',
  title: {
    en: 'Range Requests, 206 Partial Content & Resumable Downloads',
    bn: 'রেঞ্জ রিকোয়েস্ট, ২০৬ Partial Content ও রেজুমেবল ডাউনলোড'
  },
  summary: {
    en: 'Master HTTP byte range protocols across 10 structured topics. Understand whole-cloth downloads versus partial transfers. Learn how Accept-Ranges advertises server support. Master the three Range request syntax forms: closed interval, open resumption, and suffix tail. Inspect 206 Partial Content and the Content-Range response header. Handle 416 Range Not Satisfiable errors. Protect resumable transfers from corruption using If-Range with ETags. Study multipart/byteranges, video seeking mechanics, and compression safety.',
    bn: '১০টি সুসংগঠিত পয়েন্টে HTTP বাইট রেঞ্জ প্রোটোকল আয়ত্ত করুন। সম্পূর্ণ ফাইল ডাউনলোড বনাম আংশিক ট্রান্সফারের সুবিধা বুঝুন। Accept-Ranges হেডারের ভূমিকা শিখুন। Range রিকোয়েস্টের তিনটি রূপ আয়ত্ত করুন: নির্দিষ্ট রেঞ্জ, রেজুমেবল রিকোয়েস্ট এবং শেষাংশের সাফিক্স রেঞ্জ। ২০৬ Partial Content এবং Content-Range হেডার বিশ্লেষণ করুন। ৪১৬ Range Not Satisfiable হ্যান্ডেল করুন। If-Range এবং ETag দিয়ে ফাইল নষ্ট হওয়া প্রতিরোধ করুন। multipart/byteranges, ভিডিও সিকিং এবং কম্প্রেশন নিরাপত্তা শিখুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-redirect-bench',
    tech: 'http',
    title: {
      en: 'HTTP Redirects: 301, 302, 307, 308 & Post-Redirect-Get Patterns',
      bn: 'HTTP রিডাইরেক্টস: ৩০১, ৩০২, ৩০৭, ৩০৮ ও Post-Redirect-Get প্যাটার্ন'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Whole-Cloth Downloads vs Byte Range Slicing', bn: '১. সম্পূর্ণ ডাউনলোড বনাম বাইট রেঞ্জ স্লাইসিং' } },
    {
      type: 'para',
      text: {
        en: 'By default, HTTP serves resources whole-cloth: the server sends the body from the first byte to the last byte. If a 10 GB download drops at 99%, an unassisted client must restart from byte zero. Byte range slicing transforms a linear stream into random-access storage, allowing clients to request specific byte subsets.',
        bn: 'সাধারণ অবস্থায় HTTP পুরো রিসোর্স একেবারে শুরু থেকে শেষ পর্যন্ত পাঠায়। ১০ গিগাবাইট ডাউনলোডের ৯৯% সম্পন্ন হওয়ার পর নেটওয়ার্ক বিচ্ছিন্ন হলে ক্লায়েন্টকে আবার শূন্য থেকে শুরু করতে হয়। বাইট রেঞ্জ স্লাইসিং এই ধারা বদলে ফাইলকে র্যান্ডম-অ্যাক্সেস মেমরিতে পরিণত করে, ফলে নির্দিষ্ট যেকোনো অংশের বাইট আনা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Resuming an interrupted download at byte offset:
const totalSize = 10737418240; // 10 GB in bytes
const downloadedBytes = 10630044057; // 99% downloaded

const resumptionHeader = {
  Range: \`bytes=\${downloadedBytes}-\`
};

console.log("Resuming from byte:", downloadedBytes);
console.log("Remaining to download:", totalSize - downloadedBytes, "bytes");
// Output: Resuming from byte: 10630044057
// Output: Remaining to download: 107374183 bytes (~102 MB instead of 10 GB!)`,
      caption: {
        en: 'Range requests save bandwidth by resuming interrupted downloads right from the failure point.',
        bn: 'রেঞ্জ রিকোয়েস্ট মাঝপথে বন্ধ হওয়া ডাউনলোড ঠিক সেখান থেকেই শুরু করে ব্যান্ডউইথ বাঁচায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Server Capability Advertisement: Accept-Ranges', bn: '২. সার্ভারের সক্ষমতা প্রকাশ: Accept-Ranges হেডার' } },
    {
      type: 'para',
      text: {
        en: 'Servers indicate support for partial content using the Accept-Ranges response header. A value of "bytes" confirms that the server can fulfill byte range requests. A value of "none" informs clients that partial requests are unsupported and any Range header will be ignored in favor of full 200 OK delivery.',
        bn: 'সার্ভার আংশিক ফাইল পাঠানো সমর্থন করে কিনা তা জানাতে Accept-Ranges রেসপন্স হেডার ব্যবহার করে। "bytes" মান থাকলে বোঝায় সার্ভার বাইট রেঞ্জ গ্রহণে প্রস্তুত। আর "none" থাকলে ক্লায়েন্ট বোঝে সার্ভার এটি সমর্থন করে না এবং Range হেডার দিলেও পুরো ফাইল ২০০ OK হিসেবে পাঠিয়ে দেবে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Initial probing request to check server support: */
HEAD /videos/tutorial-hd.mp4 HTTP/1.1
Host: cdn.codeshikhon.com

/* Server responds advertising byte-range capability: */
HTTP/1.1 200 OK
Accept-Ranges: bytes
Content-Length: 524288000
Content-Type: video/mp4`,
      caption: {
        en: 'The Accept-Ranges: bytes header informs clients and video players that seeking is supported.',
        bn: 'Accept-Ranges: bytes হেডার ক্লায়েন্ট ও ভিডিও প্লেয়ারকে জানায় যে ভিডিও টেনে দেখা সম্ভব।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Three Syntax Forms of the Range Request Header', bn: '৩. Range রিকোয়েস্ট হেডারের তিনটি রূপ' } },
    {
      type: 'para',
      text: {
        en: 'Range offsets are zero-based and inclusive at both boundaries. A closed interval like range=0-1023 fetches the opening 1024 payload units. An open span like 1024- streams to completion, while suffix forms like -500 retrieve the trailing 500 bytes.',
        bn: 'রেঞ্জ অফসেটগুলো ০ থেকে শুরু হয় এবং দুই প্রান্তই অন্তর্ভুক্ত থাকে। একটি সুনির্দিষ্ট সীমা যেমন range=0-1023 প্রথম ১০২৪ বাইট বা একক এনে দেয়। মুক্ত সীমা যেমন 1024- ফাইলের শেষ পর্যন্ত টেনে আনে, আর সাফিক্স প্যাটার্ন যেমন -500 ফাইলের শেষ ৫০০ বাইট সংগ্রহ করে।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Calculating byte counts for inclusive HTTP ranges:
function getRangeLength(start, end) {
  return end - start + 1; // Inclusive math!
}

console.log("Bytes in 0-499:", getRangeLength(0, 499));     // 500 bytes
console.log("Bytes in 0-1023:", getRangeLength(0, 1023));   // 1024 bytes
console.log("Bytes in 100-199:", getRangeLength(100, 199)); // 100 bytes`,
      caption: {
        en: 'HTTP range offsets are inclusive; bytes=0-499 transfers exactly 500 bytes.',
        bn: 'HTTP রেঞ্জ ইনক্লুসিভ; bytes=0-499 ঠিক ৫০০ বাইট ডেটা পাঠায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The Successful Response: 206 Partial Content & Content-Range', bn: '৪. সফল রেসপন্স: 206 Partial Content ও Content-Range' } },
    {
      type: 'para',
      text: {
        en: 'When a server successfully fulfills a Range request, it returns status HTTP 206 Partial Content. This response MUST include a Content-Range header indicating the fulfilled byte span and the total size of the resource representation: Content-Range: bytes <start>-<end>/<total>. The Content-Length header matches only the transmitted slice.',
        bn: 'সার্ভার সফলভাবে রেঞ্জ রিকোয়েস্ট কার্যকর করলে HTTP 206 Partial Content স্ট্যাটাস ফেরত দেয়। এই রেসপন্সে অবশ্যই একটি Content-Range হেডার থাকতে হয় যা প্রেরিত বাইটের পরিসীমা এবং মোট সাইজ জানিয়ে দেয়: Content-Range: bytes <start>-<end>/<total>। Content-Length হেডার শুধুমাত্র বর্তমান প্রেরিত অংশের সাইজ নির্দেশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Requesting the first 1 KB chunk: */
GET /archive.tar.gz HTTP/1.1
Host: download.codeshikhon.com
Range: bytes=0-1023

/* Server returns 206 Partial Content with precise metadata: */
HTTP/1.1 206 Partial Content
Content-Range: bytes 0-1023/10485760
Content-Length: 1024
Content-Type: application/gzip

[Binary payload of exactly 1024 bytes]`,
      caption: {
        en: 'Content-Range communicates the exact slice served alongside the full resource size.',
        bn: 'Content-Range প্রেরিত টুকরোর পাশাপাশি ফাইলের মোট দৈর্ঘ্যও পরিষ্কার জানিয়ে দেয়।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'HTTP Range Request & 206 Partial Content Slicing', bn: 'HTTP রেঞ্জ রিকোয়েস্ট ও ২০৬ আংশিক কনটেন্ট স্লাইসিং' },
      svg: `<svg viewBox="0 0 700 230" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="HTTP Byte Range Slicing Diagram"><g font-size="12" fill="currentColor"><rect x="15" y="15" width="670" height="200" rx="8" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="350" y="38" text-anchor="middle" font-weight="bold">HTTP Byte-Range Slicing &amp; Resumption Protocol</text><rect x="30" y="55" width="640" height="35" rx="6" fill="none" stroke="currentColor" stroke-width="1"/><rect x="30" y="55" width="120" height="35" rx="6" fill="#10b981" opacity="0.3"/><text x="90" y="77" text-anchor="middle" font-size="11" font-weight="bold">Slice 1: 0-1023</text><rect x="150" y="55" width="220" height="35" fill="#3b82f6" opacity="0.3"/><text x="260" y="77" text-anchor="middle" font-size="11" font-weight="bold">Slice 2: 1024-5242879</text><rect x="370" y="55" width="300" height="35" rx="6" fill="#f59e0b" opacity="0.3"/><text x="520" y="77" text-anchor="middle" font-size="11" font-weight="bold">Slice 3: 5242880-9999999 (Resuming)</text><rect x="30" y="105" width="200" height="95" rx="6" fill="none" stroke="#10b981" stroke-width="1"/><text x="130" y="125" text-anchor="middle" font-weight="bold" fill="#10b981">Range: bytes=0-1023</text><text x="40" y="145" font-size="10">• Metadata / header preview</text><text x="40" y="160" font-size="10">• Reads MP4 moov / ZIP index</text><text x="40" y="175" font-size="10">• Instant media start</text><rect x="250" y="105" width="200" height="95" rx="6" fill="none" stroke="#f59e0b" stroke-width="1"/><text x="350" y="125" text-anchor="middle" font-weight="bold" fill="#f59e0b">Range: bytes=5242880-</text><text x="260" y="145" font-size="10">• Resumes paused download</text><text x="260" y="160" font-size="10">• Skips downloaded 5 MB</text><text x="260" y="175" font-size="10">• Saves time &amp; bandwidth</text><rect x="470" y="105" width="200" height="95" rx="6" fill="none" stroke="#3b82f6" stroke-width="1"/><text x="570" y="125" text-anchor="middle" font-weight="bold" fill="#3b82f6">HTTP 206 Partial Content</text><text x="480" y="145" font-size="10">• Content-Range: bytes X-Y/Total</text><text x="480" y="160" font-size="10">• Content-Length: slice bytes</text><text x="480" y="175" font-size="10">• Status 206 confirms partial</text></g></svg>`,
      caption: {
        en: 'Range requests partition large binary transfers into independent byte spans, enabling media seeking and download resumption.',
        bn: 'রেঞ্জ রিকোয়েস্ট বিশাল ফাইলকে খণ্ডে খণ্ডে ভাগ করে পাঠায়, যা অডিও-ভিডিও স্ট্রিমিং ও মাঝপথে থামা ডাউনলোড চালুর পথ সুগম করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Boundary Violations: 416 Range Not Satisfiable', bn: '৫. সীমা লঙ্ঘন: 416 Range Not Satisfiable' } },
    {
      type: 'para',
      text: {
        en: 'If a client requests byte offsets that fall completely outside the file boundaries (e.g. requesting byte 500000 on a 100000-byte file), the server rejects the request with HTTP 416 Range Not Satisfiable. In this response, the server returns Content-Range: bytes */<total> so the client immediately learns the actual resource size.',
        bn: 'ক্লায়েন্ট যদি এমন বাইট রেঞ্জ চায় যা ফাইলের মোট সাইজের বাইরে (যেমন 100000 বাইটের ফাইলে 500000 নম্বর বাইট চাওয়া), সার্ভার HTTP 416 Range Not Satisfiable দিয়ে রিকোয়েস্ট বাতিল করে। এ সময় সার্ভার Content-Range: bytes */<মোট_সাইজ> পাঠায় যাতে ক্লায়েন্ট ফাইলের আসল আকার জেনে নিতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Client requests an invalid offset beyond file end: */
GET /data.bin HTTP/1.1
Host: cdn.codeshikhon.com
Range: bytes=9000000-9999999

/* Server refuses with 416 and reveals true resource size: */
HTTP/1.1 416 Range Not Satisfiable
Content-Range: bytes */5242880
Content-Length: 0

/* The client now knows the file is only 5,242,880 bytes and can reset */`,
      caption: {
        en: 'HTTP 416 provides a star Content-Range indicating the true resource boundary.',
        bn: 'HTTP ৪১৬ একটি স্টার Content-Range ফেরত দিয়ে ফাইলের আসল সীমানা জানিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Safe Resumption with If-Range: Preventing Splicing Corruption', bn: '৬. If-Range দিয়ে নিরাপদ রেজুমেবল ডাউনলোড: ফাইল করাপশন প্রতিরোধ' } },
    {
      type: 'para',
      text: {
        en: 'A dangerous race condition occurs if a file is updated on the server while a download is paused. Resuming from byte 500000 would stitch the first half of Version 1 to the second half of Version 2, creating a corrupted binary. The If-Range header solves this: if the ETag or Last-Modified matches, return 206; if it changed, return 200 OK with the entire new file.',
        bn: 'ডাউনলোড থামিয়ে রাখার সময় সার্ভারে ফাইলটি আপডেট হয়ে গেলে মারাত্মক সমস্যা হয়। 500000 বাইট থেকে পুনরায় শুরু করলে ভার্সন ১ এর প্রথমাংশের সাথে ভার্সন ২ এর শেষাংশ জোড়া লেগে ফাইলটি সম্পূর্ণ করাপ্ট হয়ে যায়। If-Range হেডার এটি ঠেকায়: যদি ETag মেলে তবে ২০৬ দিয়ে বাকিটুকু দেয়; আর যদি ফাইল বদলে যায় তবে ২০০ OK দিয়ে পুরো নতুন ফাইল পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Safe resumption request using an ETag validator: */
GET /installer.iso HTTP/1.1
Host: releases.codeshikhon.com
Range: bytes=4194304-
If-Range: "v2.4.0-hash998"

/* Case A: File unchanged -> Server returns remaining bytes */
HTTP/1.1 206 Partial Content
Content-Range: bytes 4194304-8388607/8388608

/* Case B: File modified -> Server gracefully sends full new file from byte 0 */
HTTP/1.1 200 OK
Content-Length: 9437184
ETag: "v2.5.0-hash112"`,
      caption: {
        en: 'If-Range prevents Frankenstein files by falling back to 200 OK if the resource changed.',
        bn: 'If-Range ফাইল বদলে গেলে ২০০ OK দিয়ে পুরো ফাইল পাঠিয়ে ফাইল নষ্ট হওয়া রোধ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Multipart Byte Ranges: Non-Contiguous Slices', bn: '৭. মাল্টিপার্ট বাইট রেঞ্জ: একাধিক বিচ্ছিন্ন অংশের রিকোয়েস্ট' } },
    {
      type: 'para',
      text: {
        en: 'Clients can request multiple disconnected byte ranges within a single HTTP request using comma separation: Range: bytes=0-499, 1000-1499. The server returns HTTP 206 with Content-Type: multipart/byteranges; boundary=<delimiter>. Each body part carries its own Content-Range and Content-Type headers.',
        bn: 'ক্লায়েন্ট একটিমাত্র রিকোয়েস্টে কমা দিয়ে একাধিক বিচ্ছিন্ন বাইট রেঞ্জ চাইতে পারে: Range: bytes=0-499, 1000-1499। সার্ভার তখন Content-Type: multipart/byteranges; boundary=<সীমানা> সহ ২০৬ পাঠায়। প্রতিটি অংশের ভেতরে নিজস্ব Content-Range এবং Content-Type আলাদাভাবে সাজানো থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'http',
      code: `/* Requesting two distinct byte windows: */
GET /document.pdf HTTP/1.1
Range: bytes=0-99, 500-599

/* Multipart response payload: */
HTTP/1.1 206 Partial Content
Content-Type: multipart/byteranges; boundary=3d9f28af67ee0

--3d9f28af67ee0
Content-Type: application/pdf
Content-Range: bytes 0-99/8000

[First 100 bytes]
--3d9f28af67ee0
Content-Type: application/pdf
Content-Range: bytes 500-599/8000

[Next 100 bytes]
--3d9f28af67ee0--`,
      caption: {
        en: 'Multipart byte ranges package non-contiguous segments inside boundary markers.',
        bn: 'মাল্টিপার্ট বাইট রেঞ্জ বাউন্ডারি মার্কার দিয়ে বিচ্ছিন্ন ডাটা খণ্ডগুলো একসাথে পাঠায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Video Streaming & Progressive Seeking Mechanics', bn: '৮. ভিডিও স্ট্রিমিং ও প্রগ্রেসিভ সিকিং মেকানিক্স' } },
    {
      type: 'para',
      text: {
        en: 'HTML5 video players (<video>) use Range requests for fast scrubbing and scrubbing playback. Rather than downloading a 2-hour movie linearly, the browser fetches the container metadata (the MP4 "moov" atom). When the user scrubs to minute 45, the player calculates the corresponding byte offset and immediately issues a Range request for that slice.',
        bn: 'HTML5 ভিডিও প্লেয়ার (<video>) দ্রুত সিকিং এবং ভিডিও টেনে দেখার জন্য Range রিকোয়েস্ট কাজে লাগায়। ২ ঘণ্টার পুরো সিনেমা একনাগাড়ে ডাউনলোড না করে ব্রাউজার প্রথমে মেটাডাটা পড়ে। ইউজার যখন ৪৫ মিনিটে টেনে দেয়, প্লেয়ার মুহূর্তের মধ্যে সেই সময়ের বাইট অফসেট বের করে সরাসরি সেই অংশটি ডাউনলোড করে চালায়।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Media player calculating target byte offset for video seek:
const totalDurationSec = 7200; // 2 hours
const totalFileSize = 2000000000; // 2 GB
const targetTimeSec = 2700; // Seek to 45 minutes

const estimatedByteOffset = Math.floor((targetTimeSec / totalDurationSec) * totalFileSize);
console.log("Player seeking to 45:00");
console.log("Generated Range Header: Range: bytes=" + estimatedByteOffset + "-");
// Output: Player seeking to 45:00
// Output: Generated Range Header: Range: bytes=750000000-`,
      caption: {
        en: 'Video players request byte intervals dynamically based on scrubbing timeline positions.',
        bn: 'ভিডিও প্লেয়ার টাইমলাইনের অবস্থানের ওপর ভিত্তি করে সরাসরি নির্দিষ্ট বাইট রেঞ্জ চায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Compression & Range Hazards: Encoding Space Conflicts', bn: '৯. কম্প্রেশন ও রেঞ্জ সংঘাত: এনকোডিং স্পেস জটিলতা' } },
    {
      type: 'para',
      text: {
        en: 'Byte ranges must operate strictly on the raw bytes transferred over the network wire. If a server dynamically gzips a file, byte 1000 of the compressed payload does NOT correspond to byte 1000 of the original plaintext. Therefore, servers must either disable dynamic compression for range requests or pre-compress the resource statically.',
        bn: 'বাইট রেঞ্জ অবশ্যই তারের ওপর দিয়ে প্রবাহিত আসল বাইট সংখ্যার ওপর ভিত্তি করে চলতে হয়। সার্ভার যদি ফ্লাইতে gzip কম্প্রেশন করে, তবে কম্প্রেশনের ১০০০তম বাইট আর আসল ফাইলের ১০০০তম বাইট এক থাকে না। তাই রেঞ্জ রিকোয়েস্টের ক্ষেত্রে ডায়নামিক কম্প্রেশন বন্ধ রাখতে হয় অথবা আগে থেকে স্ট্যাটিকভাবে কম্প্রেস করে রাখতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `❌ FLAWED: Range on raw file + dynamic on-the-fly Gzip
Original File (10 MB) -> Dynamically Gzipped (3 MB)
Request: Range: bytes=1000-2000 -> Server slices raw file -> Compresses slice -> Client corrupted!

✅ CORRECT ARCHITECTURE:
Either pre-compress static asset:
Content-Encoding: gzip + Content-Range: bytes 1000-2000/3145728 (Range applies to compressed file)
Or serve raw media without compression:
Accept-Ranges: bytes + Content-Type: video/mp4 (Ranges apply cleanly to raw bytes)`,
      caption: {
        en: 'Range requests must never slice uncompressed data and subsequently compress on the fly.',
        bn: 'রেঞ্জ রিকোয়েস্টে আনকম্প্রেসড ফাইল কেটে তারপর ফ্লাইতে কম্প্রেস করা মারাত্মক ভুল।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Architectural Boundary: Byte Ranges vs REST Pagination', bn: '১০. আর্কিটেকচারাল সীমানা: বাইট রেঞ্জ বনাম REST পেজিনেশন' } },
    {
      type: 'para',
      text: {
        en: 'A common anti-pattern is using HTTP Range headers for API list pagination (e.g. Range: items=20-39). RFC 9110 designed Range specifically for raw byte representations. For application data collections, use standard REST pagination patterns: query parameters (?page=2&limit=20), cursor tokens, and RFC 8288 Link headers (rel="next").',
        bn: 'এপিআই ডাটা পেজিনেশনের জন্য HTTP Range হেডার ব্যবহার করা (যেমন Range: items=20-39) একটি বড় ভুল বা অ্যান্টি-প্যাটার্ন। RFC 9110 রেঞ্জ হেডার তৈরি করেছে শুধুই র-বাইট ট্রান্সফারের জন্য। অ্যাপ্লিকেশনের ডাটা লিস্টের জন্য কুয়েরি প্যারামিটার (?page=২&limit=২০), কার্সার টোকেন এবং RFC 8288 Link হেডার (rel="next") ব্যবহার করাই সঠিক নিয়ম।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `// Express.js clean pagination pattern vs byte ranges:
function paginateUsers(req, res) {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 20;
  const offset = (page - 1) * limit;

  // Set RFC 8288 standard Link headers for navigation:
  res.set("Link", \`</users?page=\${page + 1}&limit=\${limit}>; rel="next"\`);
  
  console.log("Serving items from offset:", offset, "count:", limit);
  // Output: Serving items from offset: 0 count: 20
  res.json({ page, limit, data: ["UserA", "UserB"] });
}`,
      caption: {
        en: 'Use query parameters and Link headers for data collections; reserve 206 Range for raw byte streams.',
        bn: 'ডাটা কালেকশনের জন্য কুয়েরি প্যারাম ও Link হেডার ব্যবহার করুন; বাইট স্ট্রিমের জন্য ২০৬ রেঞ্জ রাখুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'htt-prt-ex1',
      kind: 'predict',
      topic: 'http: range request status code',
      question: {
        en: 'What HTTP status code is returned by the server when successfully fulfilling a partial Range request?',
        bn: 'আংশিক রেঞ্জ রিকোয়েস্ট সফলভাবে কার্যকর হলে সার্ভার কোন HTTP স্ট্যাটাস কোড প্রদান করে?'
      },
      code: `/* Range request fulfilled successfully: */
/* HTTP/1.1 ___ Partial Content */`,
      answer: '206',
      accept: ['206'],
      hint: {
        en: 'Status 206.',
        bn: 'স্ট্যাটাস ২০৬।'
      },
      explanation: {
        en: 'HTTP 206 Partial Content is the standard status code indicating that the response payload contains only the requested sub-range.',
        bn: 'HTTP 206 Partial Content নির্দেশ করে যে রেসপন্সে পুরো ফাইলের বদলে শুধু চাওয়া অংশটি এসেছে।'
      }
    },
    {
      id: 'htt-prt-ex2',
      kind: 'mcq',
      topic: 'http: If-Range behavior on change',
      question: {
        en: 'How does an HTTP server respond when a client issues a range request with an "If-Range" header whose ETag no longer matches the server file?',
        bn: 'ক্লায়েন্ট If-Range হেডারে যে ETag পাঠিয়েছে তা যদি সার্ভারের বর্তমান ফাইলের সাথে না মেলে, তবে সার্ভার কীভাবে রেসপন্স করবে?'
      },
      options: [
        { en: 'It returns HTTP 200 OK along with the entire new resource from byte 0 to prevent file corruption', bn: 'এটি ফাইল করাপ্ট হওয়া রুখতে HTTP 200 OK সহ পুরো নতুন ফাইলটি ০ (শূন্যতম) বাইট থেকে পাঠায়' },
        { en: 'It returns HTTP 404 Not Found', bn: 'HTTP 404 Not Found ফেরত দেয়' },
        { en: 'It crashes the client connection', bn: 'কানেকশন কেটে দেয়' },
        { en: 'It returns HTTP 416 and deletes the file', bn: '৪১৬ ফেরত দিয়ে ফাইল মুছে দেয়' }
      ],
      answer: 0,
      hint: {
        en: 'Falls back to 200 OK whole-cloth.',
        bn: '২০০ OK দিয়ে পুরো নতুন ফাইল পাঠায়।'
      },
      explanation: {
        en: 'If-Range provides a seamless fallback: if the resource was modified, the server ignores the Range header and safely delivers the full new file with 200 OK.',
        bn: 'If-Range ফাইল বদলে গেলে আংশিক না দিয়ে ২০০ OK দিয়ে সম্পূর্ণ নতুন ফাইলটি পাঠিয়ে দেয়।'
      }
    },
    {
      id: 'htt-prt-ex3',
      kind: 'mcq',
      topic: 'http: 416 out of bounds response',
      question: {
        en: 'What HTTP status code indicates that the requested byte offsets fall outside the actual length of the resource?',
        bn: 'চাওয়া বাইট রেঞ্জ ফাইলের মোট সাইজের চেয়ে বেশি বা বাইরে চলে গেলে কোন HTTP স্ট্যাটাস কোড দেওয়া হয়?'
      },
      options: [
        { en: '416 Range Not Satisfiable', bn: '416 Range Not Satisfiable' },
        { en: '400 Bad Request', bn: '400 Bad Request' },
        { en: '410 Gone', bn: '410 Gone' },
        { en: '502 Bad Gateway', bn: '502 Bad Gateway' }
      ],
      answer: 0,
      hint: {
        en: 'Status 416.',
        bn: 'স্ট্যাটাস ৪১৬।'
      },
      explanation: {
        en: 'HTTP 416 Range Not Satisfiable informs the client that the requested byte range cannot be satisfied by the current representation length.',
        bn: 'HTTP 416 নির্দেশ করে যে ক্লায়েন্টের চাওয়া বাইট রেঞ্জ ফাইলের সীমানার বাইরে চলে গেছে।'
      }
    }
  ],
  quiz: {
    id: 'htt-prt-quiz',
    title: { en: 'HTTP Range Requests & 206 Partial Content Quiz', bn: 'HTTP রেঞ্জ রিকোয়েস্ট ও ২০৬ Partial Content কুইজ' },
    questions: [
      {
        id: 'hpq1',
        kind: 'mcq',
        topic: 'http: range inclusive math',
        question: {
          en: 'How many bytes are delivered when a client requests "Range: bytes=0-999"?',
          bn: 'ক্লায়েন্ট যখন "Range: bytes=0-999" রিকোয়েস্ট পাঠায়, তখন মোট কত বাইট ডেটা আসে?'
        },
        options: [
          { en: '1000 bytes (0 through 999 inclusive)', bn: '১০০০ বাইট (০ থেকে ৯৯৯ উভয় প্রান্ত অন্তর্ভুক্ত)' },
          { en: '999 bytes', bn: '৯৯৯ বাইট' },
          { en: '1001 bytes', bn: '১০০১ বাইট' },
          { en: '0 bytes', bn: '০ বাইট' }
        ],
        answer: 0,
        hint: {
          en: 'Inclusive: 999 - 0 + 1 = 1000.',
          bn: 'ইনক্লুসিভ: ৯৯৯ - ০ + ১ = ১০০০।'
        },
        explanation: {
          en: 'HTTP range offsets are inclusive at both ends. Slicing from 0 to 999 yields exactly 1,000 bytes.',
          bn: 'HTTP বাইট রেঞ্জ ইনক্লুসিভ হওয়ায় ০ থেকে ৯৯৯ পর্যন্ত হিসেবে মোট ১,০০০ বাইট পাওয়া যায়।'
        }
      },
      {
        id: 'hpq2',
        kind: 'mcq',
        topic: 'http: suffix range request',
        question: {
          en: 'What does the header "Range: bytes=-1024" request from the server?',
          bn: 'সার্ভারের কাছে "Range: bytes=-1024" হেডারটি ঠিক কী দাবি করে?'
        },
        options: [
          { en: 'The final 1024 bytes (suffix) of the resource', bn: 'ফাইলের একদম শেষ ১০২৪ বাইট (সাফিক্স অংশ)' },
          { en: 'All bytes except the first 1024 bytes', bn: 'প্রথম ১০২৪ বাইট বাদে বাকি সব' },
          { en: 'Negative byte index error', bn: 'নেগেটিভ বাইট ত্রুটি' },
          { en: 'The first 1024 bytes', bn: 'প্রথম ১০২৪ বাইট' }
        ],
        answer: 0,
        hint: {
          en: 'Suffix form fetches the tail.',
          bn: 'সাফিক্স ফর্ম ফাইলের শেষাংশ আনে।'
        },
        explanation: {
          en: 'The suffix range syntax (bytes=-N) requests the last N bytes of the representation, commonly used to read zip directories or media footers.',
          bn: 'সাফিক্স সিনট্যাক্স bytes=-N ফাইলের শেষ N সংখ্যক বাইট এনে দেয়, যা জিপ বা মিডিয়া ফুটার পড়তে ব্যবহৃত হয়।'
        }
      },
      {
        id: 'hpq3',
        kind: 'mcq',
        topic: 'http: multipart byteranges content-type',
        question: {
          en: 'When a client requests multiple disjoint ranges in a single request (e.g. Range: bytes=0-50, 100-150), which Content-Type does the server return?',
          bn: 'ক্লায়েন্ট যখন একটিমাত্র রিকোয়েস্টে একাধিক বিচ্ছিন্ন রেঞ্জ চায় (যেমন Range: bytes=0-50, 100-150), তখন সার্ভার কোন Content-Type ফেরত দেয়?'
        },
        options: [
          { en: 'multipart/byteranges with a unique boundary delimiter string', bn: 'একটি অনন্য বাউন্ডারি স্ট্রিংসহ multipart/byteranges' },
          { en: 'application/json', bn: 'application/json' },
          { en: 'text/html', bn: 'text/html' },
          { en: 'image/png', bn: 'image/png' }
        ],
        answer: 0,
        hint: {
          en: 'Multipart byteranges with boundary separation.',
          bn: 'বাউন্ডারিসহ multipart/byteranges।'
        },
        explanation: {
          en: 'Disjoint range requests are bundled inside a multipart/byteranges response, where each sub-range has its own Content-Range header and boundary.',
          bn: 'একাধিক বিচ্ছিন্ন রেঞ্জের ক্ষেত্রে সার্ভার multipart/byteranges ব্যবহার করে প্রতিটি খণ্ডকে নির্দিষ্ট বাউন্ডারি দিয়ে পৃথক করে পাঠায়।'
        }
      },
      {
        id: 'hpq4',
        kind: 'mcq',
        topic: 'http: If-Range race condition defense',
        question: {
          en: 'What race condition does the "If-Range" header solve during interrupted file downloads?',
          bn: 'মাঝপথে থেমে যাওয়া ফাইল পুনরায় ডাউনলোডের সময় "If-Range" হেডার কোন মারাত্মক ত্রুটি বা রেস কন্ডিশন সমাধান করে?'
        },
        options: [
          { en: 'It prevents file corruption caused by resuming a download when the underlying file on the server was modified while paused', bn: 'ডাউনলোড পজ থাকা অবস্থায় সার্ভারের ফাইল আপডেট হয়ে গেলে পুরনো অংশের সাথে নতুন অংশ জোড়া লেগে ফাইল নষ্ট হওয়া রোধ করে' },
          { en: 'It doubles the network internet bandwidth', bn: 'ইন্টারনেট স্পিড দ্বিগুণ করে' },
          { en: 'It automatically bypasses firewall ports', bn: 'ফায়ারওয়াল পোর্ট এড়িয়ে যায়' },
          { en: 'It encrypts the download with SSH', bn: 'এসএসএইচ দিয়ে ফাইল লক করে' }
        ],
        answer: 0,
        hint: {
          en: 'Prevents splicing mismatched file versions.',
          bn: 'ভিন্ন ভার্সনের ফাইলের খণ্ড জোড়া লাগা আটকায়।'
        },
        explanation: {
          en: 'If-Range verifies the entity validator (ETag or Date). If unchanged, it returns 206 with the slice; if modified, it gracefully serves 200 with the whole new file.',
          bn: 'If-Range যাচাই করে ফাইল বদল হয়েছে কিনা; না বদলালে ২০৬ দিয়ে বাকিটুকু দেয়, আর বদলে গেলে ২০০ দিয়ে পুরো নতুন ফাইল পাঠায়।'
        }
      }
    ]
  }
};
