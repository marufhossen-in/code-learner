import type { Lesson } from '../../../lib/types';

/**
 * A consolidated page, written on purpose. w3schools spends ten separate tutorial pages on the
 * small HTML topics below. Each one gets a titled point here — a plain explanation, one snippet
 * with the real values, and the mistake people actually make. One page instead of ten, and the
 * point titles are what the table of contents and `tools/coverage/check.mjs` both read.
 *
 * Absorbs: HTML Color Values (RGB, HEX, HSL), Background Images, Symbols, URL Encode,
 * HTML vs. XHTML, Input Form Attributes, YouTube embedding, and the Web API index page.
 */
export const shelfOfOddmentsLesson: Lesson = {
  slug: 'html-the-long-tail',
  tech: 'html',
  title: {
    en: 'The shelf of oddments: colour, media, encoding and ten loose ends',
    bn: 'অন্যসবের তাকে: রঙ, মিডিয়া, এনকোডিং আর দশটি খুচরা বিষয়'
  },
  summary: {
    en: 'Three notations for one tomato red, a picture that hides your text, a link that breaks on a space, and a button that quietly overrides its own form. Each point below is one w3schools page, kept in full.',
    bn: 'একটি টমেটো লালের তিনটি লেখার ধরন, একটি ছবি যা টেক্সট ঢেকে দেয়, একটি লিংক যা ফাঁকা জায়গায় ভেঙে পড়ে, আর একটি বোতাম যা নিজের ফর্মকেই উপেক্ষা করে। নিচের প্রতিটি পয়েন্ট w3schools-এর একটি পূর্ণাঙ্গ পাতা।'
  },
  minutes: 26,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'What this shelf holds', bn: 'এই তাকে যা আছে' } },
    {
      type: 'para',
      text: {
        en: 'Open each point by typing its snippet, then read the printed value. Nothing here needs a library or a build step: it is markup, one stylesheet line, or one browser call.',
        bn: 'প্রতিটি পয়েন্ট শুরু করুন স্নিপেটটি টেনে, তারপর ছাপা মানটি পড়ুন। কোথাও লাইব্রেরি বা বিল্ড দরকার নেই: শুধু markup, স্টাইলশিটের এক লাইন, বা ব্রাউজারের এক কল।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'channel value', def: { en: 'one of the three amounts a display mixes to paint a pixel, from 0 to 255', bn: 'ডিসপ্লে যা মিশিয়ে পিক্সেল রাঙে তার ৩টি পরিমাণের ১টি, ০ থেকে ২৫৫' } },
        { term: 'escape', def: { en: 'write a character so the parser reads it as text, not as syntax', bn: 'একটি চিহ্ন এমনভাবে লেখা যাতে পarsers সেটিকে টেক্সট বোঝে, নিয়ম নয়' } },
        { term: 'percent-encoding', def: { en: 'swap a forbidden URL character for a percent and two hex digits, space becomes %20', bn: 'URL-এ নিষিদ্ধ চিহ্নের বদলে শতকরা চিহ্ন ও দুই হেক্স অঙ্ক, ফাঁকা জায়গা হয় %20' } },
        { term: 'override attribute', def: { en: 'a per-button setting that wins over the one written on the enclosing form', bn: 'প্রতি-বোতাম সেটিং যা ভেতরের ফর্মের লেখা সেটিংকে হারিয়ে দেয়' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. RGB colours: three amounts, no mystery', bn: '১. RGB রঙ: তিনটি পরিমাণ, কোনো রহস্য নেই' } },
    {
      type: 'para',
      text: {
        en: 'A screen paints every pixel by adding red, green and blue light. Write those three amounts in order and you have written a colour. Each amount runs from 0 (that lamp off) to 255 (fully on), so 256 times 256 times 256 gives about 16.7 million mixtures.',
        bn: 'স্ক্রিন প্রতিটি পিক্সেল বানায় লাল, সবুজ ও নীল আলো জোড়া দিয়ে। এই ৩টি পরিমাণ ক্রমে লিখলেই রঙ লেখা হলো। প্রতিটি ০ (ল্যাম্প নেভানো) থেকে ২৫৫ (পুরোদমে জ্বলা) পর্যন্ত, তাই ২৫৬ গুণ ২৫৬ গুণ ২৫৬ মিলিয়ে প্রায় ১ কোটি ৬৭ লক্ষ মিশ্রণ।',
      }
    },
    {
      type: 'code',
      lang: 'css',
      filename: 'colour-rgb.css',
      code: `/* one channel value per lamp, in the fixed order red, green, blue */
.swatch { background-color: rgb(255, 99, 71); }      /* tomato */
.off    { background-color: rgb(0, 0, 0); }          /* black: no light at all */
.white  { background-color: rgb(255, 255, 255); }   /* white: every lamp full */
.grey   { background-color: rgb(128, 128, 128); }   /* equal channels give grey */
.half   { background-color: rgba(255, 99, 71, 0.5); } /* a: alpha, 0 to 1 */

/* out of range is clamped, not rejected: 300 lands on 255 */
.overset { background-color: rgb(300, -20, 71); }   /* paints rgb(255, 0, 71) */`,
      caption: {
        en: 'Negative values and values above 255 do not throw. The browser squeezes them into range, which is why a typo can turn into a colour you did not mean.',
        bn: 'ঋণাত্মক বা ২৫৫ এর বেশি মান ব্রাউজার ঠেলে সীমার ভেতর আনে। তাই এক বানান-ভুল অচেনা রঙ হয়ে যেতে পারে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The 148 named colours in the standard are shortcuts for fixed channel values: `tomato` is exactly `rgb(255, 99, 71)`. Names are fine for a demo and useless in a design system, because nobody can tell which is darker by reading the word.',
        bn: 'মানক-এর ১৪৮টি নাম-করা রঙ আসলে স্থির channel মানের সংক্ষেপ: `tomato` মানে ঠিক `rgb(255, 99, 71)`। ডেমোতে নাম ভালো, ডিজাইন সিস্টেমে বিপদ, কারণ নাম পড়ে কেউ বলতে পারে না কোনটি গাঢ়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. HEX colours: the same three numbers, in base 16', bn: '২. HEX রঙ: ওই ৩টি সংখ্যাই, ১৬ ভিত্তিতে' } },
    {
      type: 'para',
      text: {
        en: 'A hex triplet writes each channel value as two digits instead of up to three: 255 becomes `ff`, 99 becomes `63`, 71 becomes `47`. That is the whole difference. Design tools hand you these strings, so learn to read them at a glance.',
        bn: 'হেক্স ট্রিপলেট প্রতিটি channel মান দুই অঙ্কে লেখে, ৩টি নয়: ২৫৫ হয় `ff`, ৯৯ হয় `63`, ৭১ হয় `47`। ব্যাপারটাই এতটুকু। ডিজাইন টুল এই স্ট্রিং-ই দেয়, তাই এক নজরে পড়া শিখে নিন।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      filename: 'colour-hex.css',
      code: `.a { color: #ff6347; }        /* rrggbb, lowercase or upper, both legal */
.b { color: #f63; }           /* three digits expand by doubling: #ff6633 */
.c { color: #ff6347cc; }      /* four pairs add alpha: cc is about 80% opaque */
.d { color: #FFF; }           /* white, the short form again */

/* two arithmetic facts worth memorising */
/* 0x10 = 16, so the tens digit counts sixteens: 0x63 = 6*16 + 3 = 99 */
/* 0x00 0x80 0xff = 0, 128, 255 -> the midpoint is 0x80, not 0x7f */`,
      caption: {
        en: 'The three-digit form only works when both digits of a pair match. #f63 is legal, #f64 is not, because 4 cannot be doubled into 44.',
        bn: 'তিন-অঙ্কের ধরন তখনই চলবে যখন একটি জোড়ার দুই অঙ্ক সমান। #f63 বৈধ, #f64 নয়, কারণ 4 কে 44 বানানো যায় না।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. HSL colours: pick the hue first, then the strength', bn: '৩. HSL রঙ: আগে হু বাছুন, তারপর তীব্রতা' } },
    {
      type: 'para',
      text: {
        en: 'HSL describes a colour the way a person names one: which colour on the wheel, how strong, how light. Hue is an angle from 0 to 360 with red at 0, green at 120 and blue at 240. Saturation and lightness are percentages, both from the same centre at 50 and 50.',
        bn: 'HSL রঙ বোঝায় যেভাবে একজন মানুষ ১টি নাম দেয়: চাকতির কোন রঙ, কত জোর, কত উজ্জ্বল। Hue হলো ০ থেকে ৩৬০ ডিগ্রি কোণ, লাল ০ ডিগ্রিতে, সবুজ ১২০ ডিগ্রিতে এবং নীল ২৪০ ডিগ্রিতে। Saturation ও lightness দুটোই শতাংশ, কেন্দ্র ৫০ ও ৫০।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      filename: 'palette.css',
      code: `/* one hue, five lightness steps: a usable ramp for a card, its border and text */
.r1 { background: hsl(9, 100%, 96%); }  /* almost white with a warm cast */
.r2 { background: hsl(9, 100%, 82%); }
.r3 { background: hsl(9, 100%, 64%); }  /* the tomato we mixed in point 1 */
.r4 { background: hsl(9, 100%, 44%); }
.r5 { background: hsl(9, 100%, 20%); }  /* dark enough for body text on r1 */

/* grey needs no saturation at all */
.line { background: hsl(9, 0%, 80%); }   /* any hue with 0% saturation is grey */

/* hsla() takes alpha last, exactly like rgba() */
.veil { background: hsla(9, 100%, 64%, 0.35); }`,
      caption: {
        en: 'Lightness is not what the eye measures as brightness, so an even ladder in lightness is uneven on screen. Check text contrast anyway: 4.5 to 1 for body copy.',
        bn: 'Lightness চোখের দেখা উজ্জ্বলতার সমান নয়, তাই সমান ধাপেও তালিকা অসম দেখায়। তবু টেক্সট contrast যাচাই করুন: সাধারণ লেখায় ৪.৫ অনুপাত ১।'
      }
    },
    {
      type: 'table',
      head: [{ en: 'Notation', bn: 'লেখার ধরন' }, { en: 'Good at', bn: 'কীসে ভালো' }, { en: 'Costs you', bn: 'কী খরচ' }],
      rows: [
        [{ en: 'rgb(255, 99, 71)', bn: 'rgb(255, 99, 71)' }, { en: 'mixing by hand, arithmetic you can check', bn: 'নিজে মেশানো, হিসাব যাচাই করা যায়' }, { en: 'three numbers per channel is wide', bn: 'প্রতি channel-এ তিন অঙ্ক জায়গা নেয়' }],
        [{ en: '#ff6347', bn: '#ff6347' }, { en: 'copying out of a design tool, short literals', bn: 'ডিজাইন টুল থেকে কপি, ছোট লিটারেল' }, { en: '63 is not obviously 99', bn: '৬৩ যে ৯৯ বোঝা যায় না' }],
        [{ en: 'hsl(9, 100%, 64%)', bn: 'hsl(9, 100%, 64%)' }, { en: 'building a palette, dimming one colour', bn: 'প্যালেট বানানো, একটি রঙ হালকা করা' }, { en: 'hue is an angle, not a familiar quantity', bn: 'hue কোণ, চেনা পরিমাণ নয়' }]
      ],
      caption: { en: 'All three rows are the same paint; only the question you can ask about it changes.', bn: 'তিন সারিতেই রঙ এক, বদলায় শুধু প্রশ্ন যেটি আপনি জিজ্ঞেস করতে পারেন।' }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Background images: the layer under your words', bn: '৪. Background image: লেখার নিচের স্তর' } },
    {
      type: 'para',
      text: {
        en: 'A background picture is decoration, not content. Browsers never announce it to a screen reader and it carries no `alt` text, so anything a reader must not miss belongs in an `img` element instead. Four properties decide how it sits.',
        bn: 'Background ছবি সাজানো অংশ, বিষয়বস্তু নয়। ব্রাউজার এটি screen reader-কে জানায় না, `alt`-ও বহন করে না, তাই যা বাদ দেওয়ার নয় তা `img` এলিমেন্টে দিন। বসার ধরন ঠিক করে চারটি property।'
      }
    },
    {
      type: 'code',
      lang: 'css',
      filename: 'backdrop.css',
      code: `header {
  background-color: #2b1d14;                  /* painted first, shows through gaps */
  background-image: url("dusk.webp");
  background-repeat: no-repeat;                /* one copy, not a tiled wallpaper */
  background-position: center 30%;             /* keep the horizon in frame on a short window */
  background-size: cover;                      /* fill the box, crop what hangs over */
  color: #fff;
}
.card { background-size: contain; }             /* whole picture inside, letterboxed */
.pinned { background-attachment: fixed; }       /* the page scrolls, the image does not */

/* layers stack bottom to bottom-most last; a gradient can darken text */
.hero {
  background:
    linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)),
    url("dusk.webp") center / cover no-repeat #2b1d14;
}
@media (prefers-reduced-motion: reduce) { .pinned { background-attachment: scroll; } }`,
      caption: {
        en: 'cover crops, contain fits. On a phone, fixed attachment repaints on scroll and stutters, so the media query above swaps it for plain scrolling.',
        bn: 'cover কেটে ফেলে, contain ভেতরে বসায়। ফোনে fixed attachment স্ক্রলে বারবার আঁকা হয় আর লাগে, তাই media query-টি সেটিকে সাধারণ scrolling বানিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Symbols: entity codes for characters you cannot type', bn: '৫. Symbol: যে অক্ষর টাইপ করা যায় না তার entity code' } },
    {
      type: 'para',
      text: {
        en: 'Two characters are syntax in HTML and must be written as entities even inside a paragraph: less-than is `&lt;` and the ampersand is `&amp;`. Everything else is a convenience. A name like `&copy;` and its number form `&#169;` mean one glyph, and a number may also be hex as `&#xA9;`.',
        bn: '২টি অক্ষর HTML-এ নিয়মের অংশ, তাই অনুচ্ছেদের ভেতরেও এদের entity লিখতে হয়: less-than হলো `&lt;`, ampersand হলো `&amp;`। বাকি সব সুবিধা। `&copy;` নাম আর `&#169;` সংখ্যা ১টি নির্দিষ্ট চিহ্ন, আর সংখ্যাটি হেক্স-ও লেখা যায় `&#xA9;`।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'symbols.html',
      code: `<p>Tom &amp; Jerry &mdash; cost 500&nbsp;&#2547; only.</p>
<!-- prints: Tom & Jerry — cost 500৳ only.  &nbsp; keeps the number and ৳ on one line -->

<p>Write &lt;div&gt; inside a code sample, never a bare &lt;div&gt;.</p>
<p>Copyright &copy; 2026, licensed under CC BY-SA.</p>
<p>A tick &#10003; and a cross &#10007; need no font file at all.</p>

<!-- what is NOT needed: &ccedil; style escapes for Bengali. UTF-8 carries it. -->
<p class="bn">স্বাগতম — এখানে কোনো entity লাগেনি।</p>`,
      caption: {
        en: 'A bare & in a URL query string is the classic slip: write two links joined by &amp; or the second parameter may vanish.',
        bn: 'URL-এর query-তে খালি & লেখাই সবচেয়ে বড় ভুল: দুটি লিংক জোড়া দিতে &amp; লিখুন, না হলে দ্বিতীয় প্যারামিটার হারিয়ে যেতে পারে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. URL encode: a space in a link is not a space', bn: '৬. URL encode: লিংকের ফাঁকা জায়গা আসলে ফাঁকা নয়' } },
    {
      type: 'para',
      text: {
        en: 'A URL has reserved marks that hold it together: `/` separates path parts, `?` opens the query, `&` splits parameters, `#` starts a fragment. Any of those inside your own text must be replaced by a percent sign and two hex digits, so a space becomes `%20`.',
        bn: 'URL-এ কিছু চিহ্ন বন্ধনের জন্য সংরক্ষিত: `/` পথ আলাদা করে, `?` query খোলে, `&` প্যারামিটার ভাগ করে, `#` fragment শুরু করে। আপনার নিজের লেখায় সেগুলো থাকলে বদলে দিতে হয় শতকরা চিহ্ন ও দুই হেক্স অঙ্ক, তাই ফাঁকা জায়গা হয় `%20`।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'encode.mjs',
      code: `const raw = 'Lalon Geeti?album=1&x=5';

console.log(encodeURI(raw));
// Lalon%20Geeti?album=1&x=5   --- keeps / ? & # , so a whole URL survives as-is

console.log(encodeURIComponent(raw));
// Lalon%20Geeti%3Falbum%3D1%26x%3D5   --- escapes them too; use it per parameter value

console.log(decodeURIComponent('Lalon%20Geeti'));
// Lalon Geeti

/* a percent sign itself is %25, or decoding bites your own output */
console.log(encodeURIComponent('100%'));   // 100%25

/* in markup: encode the path segment, never the slash */
// <img src="/photos/lalon%20geeti.webp">     works
// <img src="/photos/lalon geeti.webp">       still loads in practice, still invalid`,
      caption: {
        en: 'Two rules settle most bugs: build each query value with encodeURIComponent, and prefer a hyphen or underscore in filenames so nothing needs escaping.',
        bn: 'দুটি নিয়মেই বেশির ভাগ সমস্যা মিটে যায়: প্রতিটি query মান encodeURIComponent দিয়ে বানান, আর ফাইলের নামে হাইফেন বা আন্ডারস্কোর ব্যবহার করুন যাতে এনকোডের দরকারই না পড়ে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. HTML versus XHTML: the rules that outlived the format', bn: '৭. HTML বনাম XHTML: নিয়মগুলো টিকে গেছে, ফরম্যাট নয়' } },
    {
      type: 'para',
      text: {
        en: 'XHTML was HTML rewritten to obey XML: every tag closed, every name lowercase, every attribute quoted, no loose syntax. Browsers never treated it as XML unless the server sent the right content type, and the strictness it sold is now just good practice inside HTML5.',
        bn: 'XHTML ছিল HTML-এর XML-নিয়ম মেনে লেখা সংস্করণ: প্রতিটি tag বন্ধ, প্রতিটি নাম ছোট হাতের, প্রতিটি attribute কোটেশনে, এলোমেলো লেখা নিষেধ। সার্ভার সঠিক content type না পাঠালে ব্রাউজার একে XML হিসেবেই দেখত না, আর যে কড়াকড়ি এটি বিক্রি করত সে আজ HTML5-এর ভালো অভ্যাস মাত্র।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'compare.html',
      code: `<!-- HTML5: one doctype, void tags stand alone, attributes may go unquoted -->
<!DOCTYPE html>
<img src="cat.webp" alt=A cat>
<br>
<p>Loose, and legal.

<!-- XHTML 1.0 Strict: an XML document, so it must be well-formed -->
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
  <img src="cat.webp" alt="A cat" />
  <br />
  <p>Loose, and a parse error: the server sent application/xhtml+xml, so one
     missing end tag stops the page entirely.</p>
</html>

<!-- the habits worth stealing, in order of how often they save you -->
<!-- 1. quote every attribute value   2. close or self-mark every tag
     3. keep names lowercase           4. never nest a block inside an inline -->`,
      caption: {
        en: 'An XML parser stops at the first fault; an HTML parser patches and continues. That difference is the whole argument, and the web chose the forgiving one.',
        bn: 'XML parser প্রথম ত্রুটিতেই থামে; HTML parser জোড়া দিয়ে এগোয়। পুরো বিতর্কটাই এই ফারাক, আর ওয়েব মাফিক চেয়েছে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Input form attributes: one button that disagrees with its form', bn: '৮. Input-এর form attribute: একটি বোতাম যা ফর্মের সঙ্গে দ্বন্দ্ব করে' } },
    {
      type: 'para',
      text: {
        en: 'Every submit button may answer to a different door. Six attributes placed on the button override what the form element declares, and the button wins. Their names all start with the same word, which is why they are easy to forget and easy to spot.',
        bn: 'প্রতিটি submit বোতাম ভিন্ন দরজার হতে পারে। ছয়টি attribute বোতামের গায়ে দিলে সেগুলো form এলিমেন্টের ঘোষণাকে উপেক্ষা করে, আর জয় বোতামের। নামগুলো একই শব্দ দিয়ে শুরু, তাই ভোলা সহজ আবার চেনাও সহজ।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'two-doors.html',
      code: `<form action="/publish" method="post" enctype="application/x-www-form-urlencoded" novalidate>
  <input name="title" required>

  <!-- saves a draft instead: new target, new verb, and validation skipped -->
  <button formaction="/draft" formmethod="post" formnovalidate>Save draft</button>

  <!-- previews in a new tab with a GET, so the record is untouched -->
  <button formaction="/preview" formmethod="get" formtarget="_blank">Preview</button>

  <!-- a file upload needs a different encoding, only on the button that uploads -->
  <button formaction="/cover" formenctype="multipart/form-data">Send cover</button>
</form>

<!-- form also works on an input that sits outside the form element entirely -->
<input name="note" form="noteForm">`,
      caption: {
        en: 'formnovalidate does not disable required on the field; it only skips the check for that submission, so a draft can be incomplete and a publish still cannot.',
        bn: 'formnovalidate field থেকে required সরায় না; সে শুধু সেই জমা-তে চেক এড়িয়ে দেয়, তাই খসরা অসম্পূর্ণ থাকতে পারে কিন্তু প্রকাশ তবু পার হয় না।'
      }
    },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: '`form` points a control at a form by id, even from across the page', bn: '`form` id দিয়ে control-কে ফর্মে যুক্ত করে, পৃষ্ঠার অন্য প্রান্ত থেকেও' },
        { en: '`formaction` replaces the destination address for this click', bn: '`formaction` এই ক্লিকের গন্তব্য বদলে দেয়' },
        { en: '`formmethod` chooses get or post for this click only', bn: '`formmethod` কেবল এই ক্লিকে get বা post বেছে নেয়' },
        { en: '`formenctype` switches to multipart/form-data when a file rides along', bn: '`formenctype` ফাইল উঠলে multipart/form-data-তে বদলায়' },
        { en: '`formtarget` opens the answer in a tab, `_blank` being the usual', bn: '`formtarget` উত্তর নতুন ট্যাবে খোলে, সাধারণত `_blank`' },
        { en: '`formnovalidate` waives the browser check for this submission', bn: '`formnovalidate` এই জমার জন্য ব্রাউজার-চেক মওকুফ করে' }
      ]
    },

    { type: 'heading', id: 'p9', text: { en: '9. YouTube: one iframe, and the 500 KB it costs', bn: '৯. YouTube: ১টি iframe, আর তার ৫০০ KB খরচ' } },
    {
      type: 'para',
      text: {
        en: 'Embedding is an `iframe` pointed at an address built from the video id, taken from the URL after `v=`. The player then loads its own scripts, styles and fonts inside that frame, which is why an average page pays several hundred kilobytes per clip before anyone presses play.',
        bn: 'এমবেড মানে `iframe`, যার ঠিকানা বানানো হয় video id থেকে — সেটি মূল URL-এ `v=`-এর পরে থাকে। প্লেয়ার তখন সেই ফ্রেমের ভেতরে নিজের স্ক্রিপ্ট, স্টাইল ও ফন্ট লোড করে, তাই কেউ প্লে চাপার আগেই প্রতি ক্লিপে কয়েক শ KB খরচ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'embed.html',
      code: `<!-- https://www.youtube.com/watch?v=ScMzIvxBSi4  ->  id ScMzIvxBSi4 -->
<figure class="clip">
  <iframe width="560" height="315"
          src="https://www.youtube-nocookie.com/embed/ScMzIvxBSi4?rel=0&start=42"
          title="A river, filmed in one take"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen></iframe>
  <figcaption>Filmed at Padma bridge, one take, no cuts.</figcaption>
</figure>

<style>
/* 16:9 without hard-coding a height: the frame fills the wrapper */
.clip { position: relative; aspect-ratio: 16 / 9; margin: 0; }
.clip iframe { position: absolute; inset: 0; width: 100%; height: 100%; border: 0; }
</style>`,
      caption: {
        en: 'A title is required: several clips on one page are otherwise announced as the same thing. The no-cookie host sends no tracking cookie until the viewer interacts.',
        bn: 'title বাধ্যতামূলক: একই পাতায় কয়েকটি ক্লিপ না হলে screen reader-এগুলোকে একই জিনিস বলা হয়। nocookie হোস্ট দর্শক কিছু না করা পর্যন্ত ট্র্যাকিং cookie পাঠায় না।'
      }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'The poster trick', bn: 'পোস্টার-কৌশল' },
      text: {
        en: 'Show the thumbnail image `https://i.ytimg.com/vi/ID/maxresdefault.jpg` with a button over it, and swap in the iframe on click. Load time drops by several hundred kilobytes per clip and the page stops shipping a player to readers who never watch.',
        bn: 'বোতাম-সহ thumbnail `https://i.ytimg.com/vi/ID/maxresdefault.jpg` দেখান, ক্লিকে iframe বসান। প্রতি ক্লিপে কয়েক শ KB কমে যায়, আর যারা দেখেই না তাদের কাছে প্লেয়ার পাঠানো বন্ধ হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Web APIs: the browser features a page can ask for', bn: '১০. Web API: পৃষ্ঠা চাইতে পারে এমন ব্রাউজার-সুবিধা' } },
    {
      type: 'para',
      text: {
        en: 'The phrase means a capability the browser adds on top of markup and script: location, files, background threads, storage, push. The markup is only the door. Each one is tested for before it is used, because a feature present on a laptop may be missing in a WebView on an old phone.',
        bn: 'এই কথাটির মানে markup ও script-এর উপর ব্রাউজার যে সামর্থ্য যোগ করে: অবস্থান, ফাইল, পটভূমির থ্রেড, সংরক্ষণ, push। markup তো শুধু দরজা। ল্যাপটপে থাকা সুবিধা পুরোনো ফোনের WebView-এ নাও থাকতে পারে, তাই ব্যবহারের আগে পরীক্ষা করুন।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'features.js',
      code: `/* one guard per feature, and a plan for the reader who lacks it */
if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(
    (pos) => console.log(pos.coords.latitude.toFixed(4), pos.coords.longitude.toFixed(4)),
    (err) => console.log('denied:', err.message),      // permission prompt, dismissed
    { enableHighAccuracy: true, timeout: 8000 }
  );
} else console.log('no geolocation; fall back to the city the reader typed');

const box = document.querySelector('[data-drop]');
box.addEventListener('dragover', (e) => e.preventDefault());  // without this, drop never fires
box.addEventListener('drop', (e) => {
  e.preventDefault();
  const name = e.dataTransfer.getData('text/plain');
  console.log('dropped:', name);
});

localStorage.setItem('draft', 'two lines');        // 5 MB, survives a restart
localStorage.getItem('draft');                     // 'two lines'
sessionStorage.setItem('step', '3');               // dies with the tab
localStorage.setItem('big', 'x'.repeat(6e6));      // throws QuotaExceededError

const w = new Worker('ticks.js');                  // a thread beside the page
w.postMessage(42);                                 // main thread stays responsive
w.onmessage = (e) => console.log('worker answered', e.data);

const ticks = new EventSource('/ticks');             // server pushes rows, no polling loop
ticks.onmessage = (e) => console.log('server:', e.data);`,
      caption: {
        en: 'Geolocation and camera need a secure origin: http on a LAN address is treated as unsafe by current browsers except localhost.',
        bn: 'geolocation ও ক্যামেরা নিরাপদ origin চায়: বর্তমান ব্রাউজারে LAN ঠিকানার http localhost বাদে অনিরাপদ ধরা হয়।'
      }
    },

    { type: 'heading', id: 'how', text: { en: 'How to settle each choice', bn: 'কীভাবে প্রতিটি সিদ্ধান্ত চুকান' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Colour', bn: 'রঙ' }, text: { en: 'Write values as hsl when you need a ramp, hex when they come from a design file, rgb when you are mixing by hand.', bn: 'ধাপ-তালিকা দরকার হলে hsl, ডিজাইন ফাইল থেকে এলে hex, হাতে মেশালে rgb লিখুন।' } },
        { title: { en: 'Background or picture', bn: 'ব্যাকগ্রাউন্ড না ছবি' }, text: { en: 'If removing it loses meaning, it is an img with alt text. If removing it changes nothing, it is a background.', bn: 'সরালে অর্থ হারায় তবে alt-সহ img, কিছু না গেলে background।' } },
        { title: { en: 'Characters', bn: 'অক্ষর' }, text: { en: 'Escape lt and ampersand always. Type everything else as UTF-8, including ৳, — and বাংলা.', bn: 'শুধু lt ও ampersand সবসময় escape করুন, বাকি সব UTF-8-এ টাইপ করুন, ৳, — ও বাংলাসহ।' } },
        { title: { en: 'URLs', bn: 'URL' }, text: { en: 'Encode each parameter value, not the whole string, and rename files so spaces never appear.', bn: 'পুরো স্ট্রিং নয়, প্রতিটি প্যারামিটার মান encode করুন, আর ফাইলের নাম বদলে ফাঁকা জায়গাই বাদ দিন।' } },
        { title: { en: 'Buttons', bn: 'বোতাম' }, text: { en: 'One form, many destinations: put the overrides on the buttons rather than juggling three forms.', bn: 'এক ফর্ম, অনেক গন্তব্য: ৩টি ফর্ম ঘোরানোর বদলে override বোতামের গায়ে দিন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'One tomato, three spellings, same paint', bn: 'একটি টমেটো, তিন বানান, রঙ এক' },
      svg: `<svg viewBox="0 0660 210" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="three notations for the same colour mixing to one swatch"><g font-size="12" fill="currentColor"><rect x="24" y="26" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="114" y="46" text-anchor="middle">rgb(255, 99, 71)</text><rect x="24" y="76" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="114" y="96" text-anchor="middle">#ff6347</text><rect x="24" y="126" width="180" height="30" rx="6" fill="none" stroke="currentColor"/><text x="114" y="146" text-anchor="middle">hsl(9, 100%, 64%)</text></g><g stroke="currentColor" stroke-width="1.4" fill="none"><path d="M204 41 H300 V100"/><path d="M204 91 H300"/><path d="M204 141 H300 V108"/></g><rect x="300" y="76" width="120" height="48" rx="8" fill="#ff6347" stroke="none"/><text x="360" y="106" font-size="12" text-anchor="middle" fill="#fff">one swatch</text><g font-size="11" fill="currentColor"><path d="M420 100 H500" stroke="currentColor" stroke-width="1.4" fill="none"/><text x="508" y="88">255, 99, 71 = three channel amounts</text><text x="508" y="106">ff, 63, 47 = the same amounts in 16s</text><text x="508" y="124">9deg, 100%, 64% = angle, force, light</text></g></svg>`,
      caption: { en: 'Convert once, then stop arithmetic: keep the notation your tool already speaks.', bn: 'একবার বদলে নিন, তারপর হিসাব বন্ধ রাখুন: যে ধরনে আপনার টুল লেখে সেটিই রাখুন।' }
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'The one that ships', bn: 'যেটি প্রোডাকশনে যায়' },
      text: {
        en: 'A marketing page sets white text on a background photo, looks fine on the desk monitor, and turns unreadable when the image is cropped on a phone. The fix is not a colour but a scrim: a translucent dark layer under the words, or a `backdrop-filter: blur` and a solid fallback colour painted first.',
        bn: 'মার্কেটিং পাতায় ছবির উপর সাদা লেখা ডেস্কটপে ঠিক দেখায়, ফোনে ছবি কেটে গেলে অপাঠযোগ্য হয়ে যায়। সমাধান রঙ নয়, আস্তর: লেখার নিচে অর্ধ-স্বচ্ছ গাঢ় স্তর, অথবা `backdrop-filter: blur` আর আগে আঁকা একটি সাবলীল solid রঙ।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-the-long-tail-ex1', kind: 'predict', topic: 'html: The long tail',
      question: { en: 'What does `background-color: rgb(300, -20, 71)` paint?', bn: '`background-color: rgb(300, -20, 71)` কী রাঙায়?' },
      code: `.overset { background-color: rgb(300, -20, 71); }`,
      answer: 'rgb(255, 0, 71) — clamped into range',
      accept: ['255, 0, 71', 'rgb(255, 0, 71)', '#ff0047', '255 0 71'],
      hint: { en: 'Out-of-range channel values are not an error.', bn: 'সীমার বাইরের মান error নয়।' },
      explanation: { en: 'Each channel is squeezed into 0 to 255 before painting, so 300 lands on 255 and minus twenty on zero.', bn: 'আঁকার আগে প্রতিটি channel ০ থেকে ২৫৫-এ ঠেলে দেওয়া হয়, তাই ৩০০ হয় ২৫৫ আর ঋণাত্মক বিশ হয় ০।' }
    },
    {
      id: 'html-the-long-tail-ex2', kind: 'mcq', topic: 'html: The long tail',
      question: { en: 'Which short hex literal is valid?', bn: 'ছোট হেক্স লিটারেলগুলোর কোনটি বৈধ?' },
      options: [
        { en: '#f63', bn: '#f63' },
        { en: '#f64', bn: '#f64' },
        { en: '#ff63', bn: '#ff63' },
        { en: '#gg6347', bn: '#gg6347' }
      ],
      answer: 0,
      hint: { en: 'Three digits expand by doubling each digit.', bn: 'তিন অঙ্ক প্রতিটি দ্বিগুণ করে খোলে।' },
      explanation: { en: 'Each digit must repeat to form a pair, so #f63 becomes #ff6633. The other three fail that rule or use a non-hex digit.', bn: 'প্রতিটি অঙ্ক জোড়ায় বদলাতে হয়, তাই #f63 হয় #ff6633। বাকি তিনটি নিয়মে বা হেক্স-অঙ্কে ব্যর্থ।' }
    },
    {
      id: 'html-the-long-tail-ex3', kind: 'fill', topic: 'html: The long tail',
      question: { en: 'Fill the blank so this button saves a draft without running the browser validation.', bn: 'ফাঁকা জায়গায় লিখুন যাতে এই বোতাম draft জমা দেয় কিন্তু ব্রাউজার-যাচাই চালায় না।' },
      code: `<form action="/publish" method="post">\n  <input name="title" required>\n  <button ____>Save draft</button>\n</form>`,
      answer: 'formnovalidate',
      accept: ['formnovalidate', 'formnovalidate formaction="/draft"', 'formnovalidate formmethod="post"'],
      hint: { en: 'The per-button name starts like the attribute on the form element.', bn: 'বোতামের নামটি ফর্ম-এলিমেন্টের attribute-টির মতোই শুরু হয়।' },
      explanation: { en: 'The form does validate, so the draft button has to carry formnovalidate on itself. Adding formaction "/draft" finishes the job, and that button stays the only one which skips the required check.', bn: 'ফর্ম যাচাই চালায়, তাই draft বোতামের গায়েই formnovalidate লাগবে। formaction "/draft" যোগ করলে কাজ শেষ হয়, আর required চেক এড়ানো এই বোতামটাই একমাত্র।' },
    },
    {
      id: 'html-the-long-tail-ex4', kind: 'mcq', topic: 'html: The long tail',
      question: { en: 'A path contains a space: /photos/lalon geeti.webp. What is the safe fix?', bn: 'পথে ফাঁকা জায়গা আছে: /photos/lalon geeti.webp। নিরাপদ সমাধান কী?' },
      options: [
        { en: 'write %20 in the path, or rename the file with a hyphen', bn: 'পথে %20 লিখুন, নয়তো হাইফেন দিয়ে নাম বদলান' },
        { en: 'wrap the src value in double quotes', bn: 'src মানটি দো-উদ্ধৃতিতে দিন' },
        { en: 'write &nbsp; between the words', bn: 'দুই শব্দের মাঝে &nbsp; লিখুন' },
        { en: 'encode the whole URL with encodeURI', bn: 'পুরো URL encodeURI দিয়ে এনকোড করুন' }
      ],
      answer: 0,
      hint: { en: 'Quotes protect the attribute value, not the address itself.', bn: 'কোটেশন attribute-কে বাঁচায়, ঠিকানাকে নয়।' },
      explanation: { en: 'Percent-encoding the space fixes the address; a hyphen in the filename removes the problem at its root. Option four works too but encodes marks the path needs.', bn: 'ফাঁকা জায়গাটি percent-encode করলে ঠিকানা ঠিক হয়; নামে হাইফেন দিলে সমস্যার গোড়াই থাকে না। চতুর্থটিও চলে, তবে পথের দরকারি চিহ্নগুলোও এনকোড হয়ে যায়।' }
    }
  ],
  quiz: {
    id: 'html-the-long-tail-quiz',
    title: { en: 'Quiz — the shelf of oddments', bn: 'কুইজ — অন্যসবের তাকে' },
    questions: [
      {
        id: 'html-the-long-tail-q1', kind: 'mcq', topic: 'html: The long tail',
        question: { en: 'Why must `&amp;` appear inside a query string in HTML source?', bn: 'HTML সোর্সের query string-এ `&amp;` কেন লাগে?' },
        options: [
          { en: 'an unescaped & can start an old entity name and eat the letters after it', bn: 'আনএস্কেপ & পুরোনো কোনো entity নাম শুরু করে তার পরের অক্ষর খাইয়ে দিতে পারে' },
          { en: 'the parser rejects a bare ampersand outright', bn: 'parser খালি ampersand পুরোপুরি ফিরিয়ে দেয়' },
          { en: 'it becomes a space when read back', bn: 'পড়ার সময় সেটি ফাঁকা জায়গা হয়ে যায়' },
          { en: 'only escaped names reach the server', bn: 'escape করা নামই সার্ভারে পৌঁছায়' }
        ],
        answer: 0,
        hint: { en: 'Ampersand starts an entity reference, so the parser tries to finish one.', bn: 'ampersand entity শুরু করে, তাই parser একটি শেষ করার চেষ্টা করে।' },
        explanation: { en: 'Legacy entity names need no semicolon, so ?a=1&copy=2 arrives as ?a=1©=2 and the second parameter loses its name. Writing &amp; stops the parser from starting an entity at all.', bn: 'পুরোনো entity নামের শেষে সেমিকোলন লাগে না, তাই ?a=1&copy=2 পৌঁছায় ?a=1©=2 হিসেবে আর দ্বিতীয় প্যারামিটার নাম হারায়। &amp; লিখলে parser আর entity শুরুই করে না।' }
      },
      {
        id: 'html-the-long-tail-q2', kind: 'mcq', topic: 'html: The long tail',
        question: { en: 'What makes an XHTML document fail to open while HTML would still render?', bn: 'কীসে XHTML নথি খোলে না, অথচ HTML দেখাত?' },
        options: [
          { en: 'one unclosed tag, with the XML content type', bn: 'একটি অবন্ধ tag, আর XML content type' },
          { en: 'any unquoted attribute', bn: 'কোনো uncquoted attribute থাকলে' },
          { en: 'an uppercase tag name', bn: 'বড় হাতের tag নাম' },
          { en: 'a missing doctype', bn: 'doctype না থাকলে' }
        ],
        answer: 0,
        hint: { en: 'It depends on how the server announces the bytes.', bn: 'বাইটগুলো কীভাবে ঘোষণা করা হচ্ছে তাতে নির্ভর করে।' },
        explanation: { en: 'Sent as application/xhtml+xml, the file is parsed as XML and stops at the first well-formedness fault. Sent as text/html it degrades to plain HTML rules.', bn: 'application/xhtml+xml হিসেবে পাঠালে ফাইল XML হিসেবে parse হয় আর প্রথম ত্রুটিতেই থামে। text/html পাঠালে সে সাধারণ HTML-এ নামে।' }
      },
      {
        id: 'html-the-long-tail-q3', kind: 'predict', topic: 'html: The long tail',
        question: { en: 'What does the second log print?', bn: 'দ্বিতীয় log কী ছাপে?' },
        code: `console.log(encodeURI('a b?c=1'));\nconsole.log(encodeURIComponent('a b?c=1'));`,
        answer: 'a%20b%3Fc%3D1',
        accept: ['a%20b%3Fc%3D1', 'a%20b?c=1', 'a b?c=1'],
        hint: { en: 'One of the two keeps the reserved marks, one does not.', bn: 'দুটির একটি সংরক্ষিত চিহ্ন রাখে, অন্যটি রাখে না।' },
        explanation: { en: 'encodeURIComponent escapes ? and = as well, which is what you want inside a parameter value and what would ruin a whole URL.', bn: 'encodeURIComponent ? ও = ও এনকোড করে — প্যারামিটার মানের ভেতরে এটিই দরকার, আর পুরো URL-এ এটিই বিপর্যয়।' }
      },
      {
        id: 'html-the-long-tail-q4', kind: 'mcq', topic: 'html: The long tail',
        question: { en: 'A photo on a page must be described to a blind reader, and it is painted with CSS. What breaks?', bn: 'একটি ছবি screen reader-কে বর্ণনা করতে হবে, অথচ তা CSS-এ আঁকা। কী ভাঙে?' },
        options: [
          { en: 'nothing can describe it: a background carries no text alternative', bn: 'কিছুই বর্ণনা করতে পারে না: background-এ বিকল্প-লেখা থাকে না' },
          { en: 'alt on the element that carries the background', bn: 'যে এলিমেন্টে background তার alt' },
          { en: 'aria-label on the same element works the same as alt', bn: 'একই এলিমেন্টে aria-label ঠিক alt-এর মতো কাজ করে' },
          { en: 'a title attribute on the element', bn: 'এলিমেন্টের title attribute' }
        ],
        answer: 0,
        hint: { en: 'Ask what the picture is doing there.', bn: 'জিজ্ঞেস করুন ছবিটি সেখানে কী করছে।' },
        explanation: { en: 'Backgrounds are decoration by definition. If the image carries meaning, move it into an img element with alt text; a label bolted onto a div is a workaround, not a description.', bn: 'background সংজ্ঞাই সাজানো অংশ। অর্থ বহন করলে ছবিটি alt-সহ img এলিমেন্টে নিন; div-এর গায়ে label লাগানো জুগলবন্দি, বর্ণনা নয়।' }
      }
    ]
  }
};
