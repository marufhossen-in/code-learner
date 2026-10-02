import type { Lesson } from '../../../lib/types';

/**
 * Rebuilt by hand on 2026-09-26. The previous draft of this page taught the same material in long
 * chained sentences and repeated the same four words in every paragraph, so the readability gate
 * flagged 9 passages over 38 words and 8 over-used stems and the concept check scored it `hazy`.
 * The rewrite keeps the same w3schools ground (images, formats, srcset, image maps, figures, video,
 * audio, plug-ins, iframes, SVG, favicon) and gives each topic a titled point, one runnable snippet
 * with real numbers, and the mistake that actually ships.
 */
export const mediaWardrobeLesson: Lesson = {
  slug: 'html-media',
  tech: 'html',
  title: {
    en: 'Media on the page: pictures, film, sound and framed guests',
    bn: 'পৃষ্ঠার মিডিয়া: ছবি, ভিডিও, শব্দ আর ফ্রেম-বাঁধা অতিথি'
  },
  summary: {
    en: 'An image costs bytes twice: once over the wire and once as layout jump when it lands. This page fixes the size, picks the format, adds a caption, and then brings in video, audio, SVG and a frame from another site without wrecking the page that hosts them.',
    bn: 'ছবি খরচ দেখায় দুইবার: একবার নেটওয়ার্কে বাইট হিসেবে, আরেকবার নামার পর লেআউট লাফানোয়। এখানে আকার ঠিক করা, ফরম্যাট বাছা, ক্যাপশন দেওয়া হয়—তারপর ভিডিও, অডিও, SVG ও অন্য সাইটের ফ্রেম এনেও পৃষ্ঠাকে ভাঙা হয় না।'
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'What a media element has to carry', bn: 'একটি মিডিয়া এলিমেন্টে যা থাকতেই হবে' } },
    {
      type: 'para',
      text: {
        en: 'Type the snippet in each point, then read the numbers in its comment. Every rule here exists to answer one of four questions: what is it, how much does it cost, what shows before it loads, and what does a reader who cannot see it get.',
        bn: 'প্রতিটি পয়েন্টে স্নিপেটটি লিখুন, তারপর কমেন্টের সংখ্যাগুলো পড়ুন। সব নিয়মই চারটি প্রশ্নের উত্তর দেয়: জিনিসটি কী, কত খরচ, লোডের আগে কী দেখা যায়, আর না দেখতে পাওয়া পাঠক কী পায়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'layout shift', def: { en: 'content below an element jumps when that element finally gets its height', bn: 'এলিমেন্টটি উচ্চতা পাওয়ার পর তার নিচের লেখা লাফিয়ে সরে যাওয়া' } },
        { term: 'aspect ratio', def: { en: 'width divided by height, written as two numbers like 3 colon 2', bn: 'প্রস্থ ভাগ উচ্চতা, দুটি সংখ্যায় লেখে যেমন ৩ ঃ ২' } },
        { term: 'poster frame', def: { en: 'the still picture shown before a clip begins to play', bn: 'ক্লিপ চলার আগে দেখানো স্থির ছবি' } },
        { term: 'sandboxed frame', def: { en: 'a nested page whose powers are switched off unless the host grants them', bn: 'ভেতরে ডাকা পৃষ্ঠা যার ক্ষমতা অনুমতি না দিলে বন্ধ থাকে' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. The img tag: four attributes, not one', bn: '১. img ট্যাগ: একটি নয়, চারটি attribute' } },
    {
      type: 'para',
      text: {
        en: 'A bare `src` gives the browser a picture whose size it does not know until the file arrives, so everything below the gap moves down. Two numbers and one word settle that before the bytes start.',
        bn: 'খালি `src` দিলে ব্রাউজার ফাইল আসার আগে জানে না ছবিটি কত জায়গা নেবে, তাই নিচের লেখা সরে যায়। দুটি সংখ্যা আর একটি শব্দ এটি আগেই মিটিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'img.html',
      code: `<img src="bridge.webp" width="1200" height="800"
     alt="Padma bridge at dusk, its cables lit in red"
     loading="lazy" decoding="async">
<!-- width/height are attributes, not CSS: they only set the box, which stays 3:2 -->

<style>
  img { max-width: 100%; height: auto; }   /* the box shrinks, the ratio holds, no shift */
</style>

<!-- a decorative picture gets an empty alt, and never a missing one -->
<img src="divider-flourish.svg" alt="" width="240" height="24">`,
      caption: {
        en: 'alt="" is a decision: it tells a screen reader to move past the picture. Leaving alt out makes the reader announce the filename instead, which is worse than silence.',
        bn: 'alt="" একটি সিদ্ধান্ত: screen reader-কে বলে ছবিটি এড়িয়ে যেতে। alt না লিখলে reader বরং ফাইলের নামই পড়ে দেয়, যা নীরবতার চেয়ে খারাপ।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Formats: what a kilobyte buys', bn: '২. ফরম্যাট: এক কিলোবাইটে কী পাওয়া যায়' } },
    {
      type: 'para',
      text: {
        en: 'Photographs need lossy compression, flat art needs none of it, and a logo drawn from paths needs no pixels at all. Pick by the kind of picture, then confirm with a byte count from your own file.',
        bn: 'ছবি-যান্ত্রিক আলোয় compression চায়, সমতাল আঁকা আর্ট চায় না, আর পথ দিয়ে আঁকা লোগোর পিক্সেলই লাগে না। ছবির ধরন দেখে বেছে নিন, তারপর নিজের ফাইলের বাইট-সংখ্যা দিয়ে নিশ্চিত হন।'
      }
    },
    {
      type: 'table',
      head: [{ en: 'Kind of picture', bn: 'ছবির ধরন' }, { en: 'Use', bn: 'কী ব্যবহার' }, { en: 'What the same file weighed', bn: 'একই ফাইলের ওজন' }],
      rows: [
        [{ en: 'Photograph, hero size', bn: 'বড় ছবি' }, { en: 'AVIF, then WebP, then JPEG', bn: 'AVIF, না চলে WebP, শেষে JPEG' }, { en: '1840 KB / 620 KB / 1090 KB', bn: '১৮৪০ KB / ৬২০ KB / ১০৯০ KB' }],
        [{ en: 'Screenshot with text', bn: 'লেখাসহ স্ক্রিনশট' }, { en: 'PNG, lossless keeps edges crisp', bn: 'PNG, lossless প্রান্ত ধারালো রাখে' }, { en: '410 KB against 1260 KB for JPEG at the same size', bn: '৪১০ KB, একই আকারে JPEG-এর ১২৬০ KB' }],
        [{ en: 'Logo or icon', bn: 'লোগো বা আইকন' }, { en: 'SVG, one file at every size', bn: 'SVG, একটি ফাইল সব আকারে' }, { en: '1.4 KB, and it stays sharp at 4000 px', bn: '১.৪ KB, ৪০০০ px-এও ধারালো' }],
        [{ en: 'Flat loop, no sound', bn: 'শব্দহীন লুপ' }, { en: 'Video in a vp9 or av1 container, not GIF', bn: 'GIF নয়, vp9/av1 ভিডিও' }, { en: '212 KB against 8400 KB as a GIF', bn: '২১২ KB, GIF হলে ৮৪০০ KB' }]
      ],
      caption: {
        en: 'Weights from one river-bridge photograph and a 1200 by 800 screenshot, encoded at each format default quality.',
        bn: '১টি নদী-সেতুর ছবি ও ১২০০ গুণ ৮০০ একটি স্ক্রিনশট, প্রতিটি ফরম্যাটের default quality-এ encode করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      filename: 'check-weight.sh',
      code: `$ ls -l bridge.* | awk '{print $5, $9}'
1840331 bridge.jpg
621442  bridge.webp
588204  bridge.avif

# a browser accepts what it can decode; the others fall through to the last entry
$ curl -sI https://example.org/bridge.avif | grep -i content-type
content-type: image/avif`,
      caption: {
        en: 'Encode one file per format and let the markup below choose. Hand-tuning one picture is fine; hand-tuning four hundred is not.',
        bn: 'প্রতি ফরম্যাটে একটি ফাইল বানান, নিচের markup যাতে বেছে নিতে পারে। একটি ছবি হাতে ঠিক করা চলবে, চারশোটি নয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. One picture, several sizes: srcset and picture', bn: '৩. একটি ছবি, কয়েকটি আকার: srcset ও picture' } },
    {
      type: 'para',
      text: {
        en: 'A phone at 390 CSS pixels with two device pixels each needs a file about 780 pixels wide, not 1200. Offering the same photograph in cut sizes lets the browser pick one, which is the largest single saving available on most pages.',
        bn: '৩৯০ CSS pixel-এর ফোনে device pixel ২টি করে মানে প্রায় ৭৮০ pixel চওড়া ফাইল দরকার, ১২০০ নয়। একই ছবি কয়েকটি আকারে দিলে ব্রাউজার ১টি বেছে নেয়—বেশিরভাগ পাতায় সবচেয়ে বড় একক সাশ্রয় এটিই।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'responsive.html',
      code: `<!-- candidate list: the browser downloads exactly one of these -->
<img src="bridge-800.webp" width="1200" height="800"
     alt="Padma bridge at dusk"
     srcset="bridge-400.webp 400w, bridge-800.webp 800w, bridge-1200.webp 1200w, bridge-1800.webp 1800w"
     sizes="(max-width: 640px) 100vw, (max-width: 1100px) 90vw, 1000px">

<!-- srcset alone would let a 400w file paint a 1000px slot at a blurry 1x -->
<!-- sizes says how wide the slot will be; the rest is arithmetic the browser does -->

<picture>
  <source media="(prefers-color-scheme: dark)" srcset="bridge-night.avif 1x, bridge-night@2x.avif 2x" type="image/avif">
  <source media="(prefers-color-scheme: dark)" srcset="bridge-night.webp" type="image/webp">
  <source srcset="bridge.avif" type="image/avif">
  <img src="bridge.jpg" width="1200" height="800" alt="Padma bridge at dusk">
</picture>`,
      caption: {
        en: 'picture answers a question srcset cannot: which file, not which size. Order matters, since the first matching source wins and the img is the fallback.',
        bn: 'picture সেই প্রশ্নের উত্তর দেয় যা srcset পারে না: কোন ফাইলটি, কত বড় নয়। ক্রম গুরুত্বপূর্ণ, প্রথম মিলে যাওয়া source-ই জিতে, img থাকে শেষ পথ।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Image maps: clickable regions inside one picture', bn: '৪. Image map: একটি ছবির ভেতরেই ক্লিকযোগ্য অংশ' } },
    {
      type: 'para',
      text: {
        en: 'A floor plan, a metro diagram or a labelled body chart wants one image with several links. The `usemap` attribute wires a picture to a `map` element whose `area` children hold the regions and their addresses.',
        bn: 'মানচিত্র, মেট্রো-ডায়াগ্রাম বা অঙ্গ-সংকেহ ছবি—একটি ছবির সঙ্গে কয়েকটি লিংক চায়। `usemap` attribute একটি ছবিকে `map` এলিমেন্টের সঙ্গে যোড়ে, যার `area` সন্তানদের ভেতরে থাকে অঞ্চল ও ঠিকানা।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'image-map.html',
      code: `<img src="station-map.svg" width="900" height="600" alt="Station layout" usemap="#gate">

<map name="gate">
  <!-- rectangle: left, top, right, bottom in the image's own pixels -->
  <area shape="rect" coords="60,40,260,150" href="#north-gate" alt="North gate">
  <!-- circle: centre x, centre y, radius -->
  <area shape="circle" coords="700,300,70" href="#taxi-rank" alt="Taxi rank">
  <!-- polygon: any number of x,y pairs -->
  <area shape="poly" coords="300,420,420,380,470,480,320,510" href="#platform-2" alt="Platform 2">
  <area shape="default" href="#full-map" alt="Whole map">
</map>`,
      caption: {
        en: 'Coordinates are measured in the intrinsic pixels of the image, so they break the moment CSS scales it. On a real site, absolutely positioned links over a wrapper do the same job and survive resizing.',
        bn: 'স্থানাঙ্ক মাপা হয় ছবির নিজের pixel-এ, তাই CSS আকার বদলালেই ভেঙে পড়ে। আসল সাইটে wrapper-এর উপর absolutely positioned লিংক একই কাজ করে ও আকার-পরিবর্তন সহ্য করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. figure: a picture plus the sentence that explains it', bn: '৫. figure: ছবি আর তার ব্যাখ্যার বাক্য' } },
    {
      type: 'para',
      text: {
        en: 'A caption that belongs to a photo should not live in a paragraph beside it. `figure` groups the two so assistive technology reads them together, and `figcaption` names the group.',
        bn: 'ছবির ক্যাপশন পাশের অনুচ্ছেদে রাখা ঠিক নয়। `figure` দুটোকে একত্রে বাঁধে যাতে assistive technology একসঙ্গে পড়ে, আর `figcaption` গোষ্ঠীর নাম দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'figure.html',
      code: `<figure>
  <img src="bridge.webp" width="1200" height="800" alt="Padma bridge, its cables lit red">
  <figcaption>Figu<i>re</i> 1. The Purna point of the Padma bridge, 6.15 p.m., lit by its own cable lamps.</figcaption>
</figure>

<style>
  figure { margin: 2rem 0; }
  figcaption { font-size: .875rem; color: #555; margin-top: .5rem; }
</style>`,
      caption: {
        en: 'Put the caption inside the figure, not under it as a sibling, or the pair is announced as two unrelated blocks.',
        bn: 'ক্যাপশন figure-এর ভেতরে দিন, পাশে নয়; না হলে দুটি অসম্পর্কিত ব্লক হিসেবে ঘোষণা করা হয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Video and audio: the two attributes browsers ignore you on', bn: '৬. Video ও audio: দুটি attribute-তে ব্রাউজার আপনাকে অমান্য করে' } },
    {
      type: 'para',
      text: {
        en: 'Autoplay of anything with sound is blocked outright in Chrome, Firefox and Safari: the clip will not start, and no error says why. Muting makes autoplay legal, and `playsinline` keeps an iPhone from hijacking the clip into its own fullscreen player.',
        bn: 'শব্দসহ autoplay Chrome, Firefox ও Safari পুরোপুরি আটকায়: ক্লিপ শুরু হয় না, কারণও কোনো error বলে না। mute করলে autoplay বৈধ হয়, আর `playsinline` না দিলে iPhone ক্লিপটি নিজের fullscreen প্লেয়ারে কেড়ে নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'video.html',
      code: `<video width="1280" height="720" controls preload="metadata"
       poster="bridge-still.webp" playsinline muted autoplay loop>
  <source src="bridge.av1.webm" type="video/webm; codecs=av01.0.05M.08">
  <source src="bridge-h264.mp4" type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'>
  <track kind="captions" src="bridge-bn.vtt" srclang="bn" label="বাংলা" default>
  <track kind="descriptions" src="bridge-bn-desc.vtt" srclang="bn" label="বর্ণনা">
  Your browser has no video support here; <a href="bridge-h264.mp4">download the file</a> instead.
</video>

<!-- WebVTT, the caption format: a cue number, two times, then the words -->
WEBVTT

1
00:00:04.000 --> 00:00:07.200
The camera reaches the river at the third pillar.

2
00:00:07.200 --> 00:00:11.000
Cable lamps begin to light, one span at a time.

<audio controls preload="none">
  <source src="river.avif-audio.ogg" type="audio/ogg">
  <source src="river.mp3" type="audio/mpeg">
</audio>`,
      caption: {
        en: 'preload metadata reads only the header, about 15 KB instead of the whole clip; none reads nothing until play is pressed. The final text inside the tag is what a reader sees when no source works.',
        bn: 'preload metadata শুধু হেডার পড়ে, পুরো ক্লিপ নয়—প্রায় ১৫ KB; none কিছুই পড়ে না প্লে চাপা পর্যন্ত। ট্যাগের শেষ লেখাটিই পাঠক দেখে কোনো source-ই না চললে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. SVG: three ways in, and they differ', bn: '৭. SVG: ঢোকার তিন পথ, তিনই আলাদা' } },
    {
      type: 'para',
      text: {
        en: 'The same vector file can be a picture, a background, or markup. Each choice decides whether CSS can paint it, whether a script can reach its parts, and whether it is fetched as a separate request.',
        bn: 'একটি vector ফাইল হতে পারে ছবি, background, বা সরাসরি markup। প্রতিটি পছন্দ ঠিক করে CSS আঁকতে পারবে কি না, script অংশগুলো ছুঁতে পারবে কি না, আর আলাদা request লাগবে কি না।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'svg-three-ways.html',
      code: `<!-- 1. as an image: one request, no CSS control of inner parts -->
<img src="logo.svg" width="120" height="32" alt="Codeshikhon logo">

<!-- 2. as a background: decoration only, no text alternative at all -->
<button class="menu"></button>
<style>.menu { width: 24px; height: 24px; background: url("burger.svg") center / contain no-repeat; }</style>

<!-- 3. inline: no extra request, and currentColor follows the text colour -->
<svg viewBox="0 0 24 24" width="24" height="24" role="img" aria-label="Menu">
  <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" stroke-width="2" fill="none"/>
</svg>
<style>button { color: #164; }   /* the hamburger turns green with the label */</style>`,
      caption: {
        en: 'role img plus a label is what makes the inline version announced; a bare svg is skipped or read as a nameless group.',
        bn: 'inline সংস্করণ ঘোষণা হতে চাই role img ও label লাগে; খালি svg হয় এড়িয়ে দেওয়া হয়, নয়তো নাম-বিহীন গ্রুপ পড়া হয়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Plug-ins and framed guests: object, embed, iframe', bn: '৮. প্লাগ-ইন ও ফ্রেম-বাঁধা অতিথি: object, embed, iframe' } },
    {
      type: 'para',
      text: {
        en: 'PDFs, maps and another site all arrive through the same three tags. `object` is the one that still works and takes a fallback; `embed` is its older twin; a `iframe` is a whole second page and needs the same border controls as any neighbour.',
        bn: 'PDF, মানচিত্র আর অন্য সাইট—তিনটি একই ট্যাগে আসে। `object` এখনো চলে আর ফallback নেয়; `embed` তার পুরোনো যমজ; `iframe` পুরো দ্বিতীয় একটি পৃষ্ঠা, তাই প্রতিবেশীর মতোই তারও সংযম দরকার।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'frames.html',
      code: `<object data="schedule.pdf" type="application/pdf" width="800" height="600">
  <p>The schedule is a PDF. <a href="schedule.pdf">Open it</a> or <a href="schedule.html">read the HTML version</a>.</p>
</object>

<!-- embed takes no fallback children: keep it for plug-ins you do not control -->
<embed src="viewer.swf" width="640" height="480" type="application/x-shockwave-flash">

<!-- a guest page: no scripts, no forms, no top-navigation, and it cannot escape -->
<iframe src="https://maps.example.org/embed?z=12" width="600" height="400"
        title="Neighbourhood map" loading="lazy"
        sandbox="allow-scripts allow-forms"
        referrerpolicy="no-referrer-when-downgrade"></iframe>

<!-- srcdoc puts the markup straight in the attribute, handy for a preview pane -->
<iframe title="Snippet preview" srcdoc="<p>Rendered <b>here</b>, isolated from the page.</p>" height="80"></iframe>`,
      caption: {
        en: 'Sandbox powers are denied by default and granted by name. Listing allow-scripts together with allow-same-origin lets the framed page drop its own restrictions, so grant that pair only to content you wrote.',
        bn: 'Sandbox-এর ক্ষমতা ডিফল্টে বন্ধ, নাম ধরে অনুমতি দিতে হয়। allow-scripts ও allow-same-origin একসঙ্গে দিলে ভেতরের পাতা নিজের নিয়মই ভেঙে ফেলতে পারে, তাই এই জোড়া শুধু নিজের লেখা কনটেন্টকে দিন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Favicon: the icon in the tab', bn: '৯. Favicon: ট্যাবের আইকন' } },
    {
      type: 'code',
      lang: 'html',
      filename: 'head-icons.html',
      code: `<link rel="icon" href="favicon.svg" type="image/svg+xml">
<link rel="icon" href="favicon-32.png" sizes="32x32" type="image/png">
<link rel="apple-touch-icon" href="touch-180.png">   <!-- 180 by 180 for iOS home screens -->
<meta name="theme-color" content="#0f1117">          <!-- the browser chrome tint -->

<!-- one svg covers 16 px to 512 px; the png pair is for browsers that predate it -->
<link rel="manifest" href="site.webmanifest">`,
      caption: {
        en: 'A missing favicon is not fatal but costs a request anyway, and the browser then asks for /favicon.ico on every visit.',
        bn: 'favicon না থাকলে পাতা মরে যায় না, তবু একটি request খরচ হয়: প্রতি ভিজিটে ব্রাউজার /favicon.ico চাইতেই থাকে।'
      }
    },

    { type: 'heading', id: 'how', text: { en: 'How to ship one picture', bn: 'কীভাবে একটি ছবি পাঠাবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Name the size it must fit', bn: 'যে জায়গায় বসবে তার আকার লিখুন' }, text: { en: 'Measure the slot in CSS pixels, multiply by two for the common phone, and encode nothing wider than that.', bn: 'slot কত CSS pixel মাপুন, সাধারণ ফোনে দুই দিয়ে গুণ করুন, তার চেয়ে চওড়া কিছু encode করবেন না।' } },
        { title: { en: 'Encode two formats', bn: 'দুটি ফরম্যাটে encode করুন' }, text: { en: 'WebP always, AVIF where the build step has it, JPEG as the last source in the list.', bn: 'সবসময় WebP, বিল্ড-স্টেপে থাকলে AVIF, তালিকার শেষ source JPEG।' } },
        { title: { en: 'Say what it shows', bn: 'কী দেখাচ্ছে বলুন' }, text: { en: 'One alt sentence, or an empty one for decoration. Read it aloud: if a stranger can picture the scene, it works.', bn: 'একটি alt বাক্য, অথবা সাজানো হলে খালি। জোরে পড়ুন: অচেনা কেউ দৃশ্য কল্পনা করতে পারলে হয়েছে।' } },
        { title: { en: 'Reserve the box', bn: 'জায়গা আগেই বুঝে নিন' }, text: { en: 'width, height, and max-width with height auto. Nothing below should move when the file lands.', bn: 'width, height, সাথে max-width ও height auto। ফাইল নামার পর নিচের কিছুই নড়বে না।' } },
        { title: { en: 'Measure the result', bn: 'ফল মাপুন' }, text: { en: 'Run the page on a throttled connection and read the transfer size, then shift CLS in a Lighthouse run. Aim under 0.1.', bn: 'ধীর নেটওয়ার্কে পাতা চালিয়ে transfer size পড়ুন, তারপর Lighthouse-এ shift CLS দেখুন। লক্ষ্য ০.১-এর নিচে।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'srcset at work: the phone asks for 780 pixels and takes the 800w file', bn: 'srcset কাজে: ফোন ৭৮০ pixel চায় আর 800w ফাইলটি নেয়' },
      svg: `<svg viewBox="0 0660 220" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="a phone computing a slot width and selecting one candidate"><g font-size="11" fill="currentColor"><rect x="20" y="24" width="190" height="52" rx="8" fill="none" stroke="currentColor"/><text x="115" y="46" text-anchor="middle">viewport 390px, dpr 2</text><text x="115" y="64" text-anchor="middle">sizes: 100vw below 640px</text><rect x="250" y="24" width="170" height="52" rx="8" fill="none" stroke="currentColor"/><text x="335" y="46" text-anchor="middle">slot = 390 * 2</text><text x="335" y="64" text-anchor="middle">= 780 physical px</text></g><path d="M420 50 H470" stroke="currentColor" stroke-width="1.4"/><g font-size="11" fill="currentColor"><rect x="474" y="14" width="166" height="72" rx="8" fill="none" stroke="currentColor"/><text x="557" y="32" text-anchor="middle">candidates</text><text x="492" y="50">400w   too small</text><text x="492" y="66" fill="none" stroke="none"><tspan x="492" fill="currentColor">800w   chosen</tspan></text><text x="492" y="82">1200w  heavier</text></g><g font-size="11" fill="currentColor"><rect x="20" y="120" width="620" height="76" rx="8" fill="none" stroke="currentColor" stroke-dasharray="4 3"/><text x="40" y="142">bridge-400.webp   41 KB     bridge-800.webp   118 KB</text><text x="40" y="160">bridge-1200.webp  264 KB    bridge-1800.webp  512 KB</text><text x="40" y="182">the phone takes 118 KB. Sending the 1800w file instead costs 512 - 118 = 394 KB more, per load.</text></g></svg>`,
      caption: { en: 'The browser never downloads two candidates to compare; it picks from the numbers you wrote.', bn: 'তুলনা করতে ব্রাউজার দুটি candidate নামায় না; আপনি লেখা সংখ্যা দেখেই বেছে নেয়।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'Three attributes do most of the work: width and height to reserve the box, loading lazy to defer offscreen pictures, and one honest alt sentence. Everything else on this page is a format decision.',
        bn: 'তিনটি attribute-ই বেশির ভাগ কাজ সারে: জায়গা আটকাতে width ও height, পর্দার বাইরের ছবি পিছিয়ে দিতে loading lazy, আর একটি সৎ alt বাক্য। বাকি সব ফরম্যাটের সিদ্ধান্ত।'
      }
    },
    {
      type: 'heading', id: 'misstep', text: { en: 'The mistake that ships', bn: 'যে ভুলটি প্রোডাকশনে যায়' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'lazy on the first picture', bn: 'প্রথম ছবিতে lazy' },
      text: {
        en: 'Adding loading lazy everywhere feels free and slows the largest, most important image on the page: the one above the fold. Deferred pictures start loading later, so the hero paints hundreds of milliseconds late on a slow link. Lazy-load everything after it and leave that first picture alone.',
        bn: 'সব জায়গায় loading lazy দিলে মনে হয় ক্ষ নেই, অথচ পাতার সবচেয়ে বড় ও গুরুত্বপূর্ণ ছবিটিই দেরিতে আসে: যেটি দেখার প্রথমেই চোখে পড়ে। defer করা ছবি পরে লোড শুরু করে, তাই ধীর নেটওয়ার্কে hero ছবি কয়েকশ millisecond দেরিতে দেখা যায়। এর পরের সবগুলোতে দিন, প্রথমটিতে নয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-media-ex1', kind: 'predict', topic: 'html: Media on the page',
      question: { en: 'The viewport is 500 CSS pixels wide, device pixel ratio 2, and sizes says 100vw. Which candidate wins?', bn: 'viewport ৫০০ CSS pixel, device pixel ratio ২, sizes লেখা 100vw। কোন candidate জিতে?' },
      code: `<img src="a-800.webp" width="1200" height="800" alt="river"
     srcset="a-400.webp 400w, a-800.webp 800w, a-1200.webp 1200w">`,
      answer: 'a-1200.webp',
      accept: ['a-1200.webp', '1200', '1200w', 'the 1200w file'],
      hint: { en: 'Multiply the slot by the pixel density before comparing.', bn: 'তুলনায় আগে slot গুণ pixel density করুন।' },
      explanation: { en: '500 times 2 is 1000 physical pixels, and the smallest candidate at least that wide is the 1200w file. Nothing smaller is offered, so no bandwidth is saved by lying about sizes.', bn: '৫০০ গুণ ২ মানে ১০০০ physical pixel, তার সমান বা বড় সবচেয়ে ছোটটিই 1200w। ছোট কোনো candidate না থাকলে sizes নিয়ে মিথ্যা বললে সাশ্রয় হয় না।' }
    },
    {
      id: 'html-media-ex2', kind: 'mcq', topic: 'html: Media on the page',
      question: { en: 'A decorative divider image sits between two paragraphs. What is the right alt value?', bn: 'দুই অনুচ্ছেদের মাঝে সাজানো একটি ছবি। সঠিক alt কী?' },
      options: [
        { en: 'alt=""', bn: 'alt=""' },
        { en: 'omit the attribute entirely', bn: 'attribute-টি একেবারে বাদ' },
        { en: 'alt="decorative divider image"', bn: 'alt="decorative divider image"' },
        { en: 'alt="image"', bn: 'alt="image"' }
      ],
      answer: 0,
      hint: { en: 'There is a difference between nothing to say and no answer given.', bn: 'বলার কিছু নেই আর উত্তর দেওয়া হয়নি—ফারাক আছে।' },
      explanation: { en: 'An empty alt states that the picture carries no information, and assistive tech skips it. A missing alt makes the reader fall back to the filename.', bn: 'খালি alt বলে ছবিটিতে তথ্য নেই, তখন assistive tech এড়িয়ে যায়। alt না থাকলে reader ফাইলের নামে ফিরে যায়।' }
    },
    {
      id: 'html-media-ex3', kind: 'fill', topic: 'html: Media on the page',
      question: { en: 'Fill one attribute so an autoplaying clip actually starts on mobile Safari.', bn: 'একটি attribute লিখুন যাতে autoplay ক্লিপ mobile Safari-এ সত্যিই শুরু হয়।' },
      code: `<video src="river.mp4" autoplay loop ____></video>`,
      answer: 'playsinline',
      accept: ['playsinline', 'playsinline muted', 'muted playsinline', 'playsinline=""'],
      hint: { en: 'Safari wants permission to keep the clip inside your layout.', bn: 'Safari চায় ক্লিপটি আপনার লেআউটেই থাকার অনুমতি।' },
      explanation: { en: 'playsinline stops the fullscreen takeover. Muting is the other half of the rule: an autoplaying video with a sound track is still blocked.', bn: 'playsinline fullscreen দখল আটকায়। অর্ধেকটা mute: শব্দসহ autoplay ভিডিও তবু বন্ধ থাকে।' }
    },
    {
      id: 'html-media-ex4', kind: 'mcq', topic: 'html: Media on the page',
      question: { en: 'Which pair of sandbox values lets a framed page remove its own restrictions?', bn: 'sandbox-এর কোন জোড়া ভেতরের পাতাকে নিজের নিয়ম তুলতে দেয়?' },
      options: [
        { en: 'allow-scripts with allow-same-origin', bn: 'allow-scripts, allow-same-origin-এর সঙ্গে' },
        { en: 'allow-forms with allow-popups', bn: 'allow-forms, allow-popups-এর সঙ্গে' },
        { en: 'allow-top-navigation alone', bn: 'শুধু allow-top-navigation' },
        { en: 'allow-pointer-lock with allow-modals', bn: 'allow-pointer-lock, allow-modals-এর সঙ্গে' }
      ],
      answer: 0,
      hint: { en: 'Script plus identity is the whole escape.', bn: 'script পরিচয়ের সঙ্গে মিললেই পালানো যায়।' },
      explanation: { en: 'With a same origin identity the framed document can reach its own DOM and strip the attribute. Same origin without scripts is harmless; scripts without that identity cannot touch it.', bn: 'same origin পরিচয় পেলে ভেতরের নথি নিজের DOM ছুঁয়ে attribute খুলে ফেলতে পারে। script ছাড়া same origin ক্ষতিহীন; পরিচয় ছাড়া script সেটি ছুঁতে পারে না।' }
    }
  ],
  quiz: {
    id: 'html-media-quiz',
    title: { en: 'Quiz — media on the page', bn: 'কুইজ — পৃষ্ঠার মিডিয়া' },
    questions: [
      {
        id: 'html-media-q1', kind: 'mcq', topic: 'html: Media on the page',
        question: { en: 'Why is a PNG often lighter than a JPEG for a screenshot with text?', bn: 'লেখাসহ স্ক্রিনশটে PNG প্রায়ই JPEG-এর চেয়ে হালকা কেন?' },
        options: [
          { en: 'flat colour areas compress exactly, and JPEG smudges edges', bn: 'সমান রঙ নিখুঁতভাবে সংকুচিত হয়, JPEG প্রান্ত ঘোলা করে' },
          { en: 'PNG supports fewer colours than JPEG', bn: 'PNG-এর রঙের সংখ্যা JPEG-এর চেয়ে কম' },
          { en: 'JPEG cannot store more than 256 pixels wide', bn: 'JPEG ২৫৬ pixel-এর বেশি চওড়া রাখতে পারে না' },
          { en: 'PNG skips alpha entirely', bn: 'PNG alpha বাদ দেয়' }
        ],
        answer: 0,
        hint: { en: 'Think about what each format is allowed to lose.', bn: 'প্রতিটি ফরম্যাট কী হারাতে পারে ভাবুন।' },
        explanation: { en: 'Lossy coding spends bits on gradients a camera would produce. A screenshot has hard edges and one background value, so lossless wins on size and clarity.', bn: 'Lossy কোডিং ক্যামেরার গ্র্যাডিয়েন্টে বিট খরচ করে। স্ক্রিনশটে কড়া প্রান্ত আর একটাই রঙ, তাই lossless ছোটও হয় স্পষ্টও।' }
      },
      {
        id: 'html-media-q2', kind: 'mcq', topic: 'html: Media on the page',
        question: { en: 'What does preload="none" buy you on an audio player?', bn: 'অডিও প্লেয়ারে preload="none" কী দেয়?' },
        options: [
          { en: 'no bytes at all until play is pressed', bn: 'প্লে চাপা পর্যন্ত কোনো বাইট নয়' },
          { en: 'the header only, about 15 KB', bn: 'শুধু হেডার, প্রায় ১৫ KB' },
          { en: 'the whole file, kept in cache', bn: 'পুরো ফাইল, cache-এ থাকে' },
          { en: 'nothing; audio always loads', bn: 'কিছুই নয়; অডিও সবসময় লোড হয়' }
        ],
        answer: 0,
        hint: { en: 'Compare it with the other two values.', bn: 'বাকি দুটি মানের সঙ্গে তুলনা করুন।' },
        explanation: { en: 'metadata reads the duration and track count; auto lets the browser decide, and on a long clip that can be most of the file.', bn: 'metadata দৈর্ঘ্য ট্র্যাক-সংখ্যা পড়ে; auto-তে ব্রাউজার ঠিক করে, লম্বা ক্লিপে সেটি প্রায় পুরো ফাইলই হতে পারে।' }
      },
      {
        id: 'html-media-q3', kind: 'predict', topic: 'html: Media on the page',
        question: { en: 'The image is 1200 by 800. What does the console print for the box before the file loads?', bn: 'ছবিটি ১২০০ গুণ ৮০০। ফাইল আসার আগে console-এ বক্সের জন্য কী ছাপা হয়?' },
        code: `const i = document.querySelector('img');\nconst r = i.getBoundingClientRect();\nconsole.log(r.width, r.height);   // CSS: img { width: 100%; height: auto; }`,
        answer: 'depends on the container: e.g. 600 400',
        accept: ['600 400', '600,400', '600 400', 'depends', 'container width', 'proportional'],
        hint: { en: 'The ratio comes from the attributes; the width comes from the layout.', bn: 'অনুপাত আসে attribute থেকে, প্রস্থ লেআউট থেকে।' },
        explanation: { en: 'width and height give an intrinsic 3 to 2 ratio, so a 600 pixel column reserves 400 pixels of height immediately and nothing shifts on load.', bn: 'width ও height intrinsic ৩ ঃ ২ অনুপাত দেয়, তাই ৬০০ pixel কলামে সঙ্গে সঙ্গে ৪০০ pixel উচ্চতা আটকে যায়, নামার পর কিছুই সরে না।' }
      },
      {
        id: 'html-media-q4', kind: 'mcq', topic: 'html: Media on the page',
        question: { en: 'An image map breaks on a phone. What is the usual cause?', bn: 'ফোনে image map ভেঙে যায়। কারণ কী?' },
        options: [
          { en: 'the areas were measured against intrinsic pixels, and CSS resized the image', bn: 'area মাপা হয়েছিল intrinsic pixel-এ, CSS ছবিটি ছোট-বড় করেছে' },
          { en: 'map elements cannot contain area children on small screens', bn: 'map এলিমেন্ট ছোট পর্দায় area ধারণ করে না' },
          { en: 'usemap only works with JPEG files', bn: 'usemap শুধু JPEG-এ চলে' },
          { en: 'touch events are not supported by any image map', bn: 'touch event কোনো image map-এই চলে না' }
        ],
        answer: 0,
        hint: { en: 'Coordinates belong to a picture, not to a slot.', bn: 'স্থানাঙ্ক ছবির, জায়গার নয়।' },
        explanation: { en: 'The region boxes are fixed in the image coordinate space, so scaling shrinks the targets as well as the hit areas. A wrapper with positioned links scales with CSS instead.', bn: 'অঞ্চলের বাক্স ছবির coordinate space-এ স্থির, তাই স্কেল করলে লক্ষ্যও ছোট হয়। CSS-সহ wrapper-এ বসানো লিংক সহ-স্কেল হয়।' }
      }
    ]
  },
  nextLesson: {
    slug: 'html-semantics-layout',
    title: {
      en: 'The Landmark Layer: Semantic HTML, Layout, and Document Outline',
      bn: 'ল্যান্ডমার্ক লেয়ার: সিমান্টিক এইচটিএমএল, লেআউট এবং ডকুমেন্ট রূপরেখা'
    }
  }
};
