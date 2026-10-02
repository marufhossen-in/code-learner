import type { Lesson } from '../../../lib/types';

/**
 * Ten complete points consolidating the entire w3schools Text, Style, and Code curriculum:
 * 1. Headings: <h1> to <h6>, heading hierarchy, and one-king rule
 * 2. Paragraphs: <p>, thematic <hr>, and line breaks with <br>
 * 3. Styles: the style attribute, inline css, colors, fonts, and text alignment
 * 4. Formatting: semantic tags (strong, em, mark, del, ins, sub, sup) vs cosmetic (b, i)
 * 5. Quotations: <blockquote>, <q>, <abbr>, <address>, <cite>, and <bdo>
 * 6. Comments: <!-- comment -->, debugging markup, and security rules
 * 7. Computercode: <code>, <kbd>, <samp>, <var>, and preformatted <pre>
 * 8. Entities and symbols: &lt;, &gt;, &amp;, &quot;, &copy;, &euro;
 * 9. Emojis and charsets: UTF-8 encoding and numeric codes like &#128512;
 * 10. HTML5 Style Guide: lowercase tags, closing elements, and quoted attributes
 */
export const textPaletteLesson: Lesson = {
  slug: 'html-text-formatting',
  tech: 'html',
  title: {
    en: 'Text formatting and styles, point by point: headings, quotes, code, entities, style guide',
    bn: 'টেক্সট ফরম্যাটিং ও স্টাইল, পয়েন্ট ধরে: হেডিং, উদ্ধৃতি, কোড, এন্টিটি ও স্টাইল গাইড'
  },
  summary: {
    en: 'Master every text formatting instrument in HTML. Understand heading ladder hierarchy, inline style attributes, semantic vs cosmetic emphasis, computer code markup with kbd and samp, character entity escaping, emojis, and professional HTML5 style guide conventions.',
    bn: 'এইচটিএমএলের প্রতিটি টেক্সট ফরম্যাটিং উপাদান নিখুঁতভাবে আয়ত্ত করুন। হেডিং সিঁড়ির শ্রেণিভেদ, ইনলাইন স্টাইল অ্যাট্রিবিউট, অর্থবহ বনাম চাক্ষুষ জোর, kbd ও samp দিয়ে কোড ডিসপ্লে, বিশেষ ক্যারেক্টার এন্টিটি, ইমোজি এবং পেশাদার এইচটিএমএল৫ স্টাইল গাইড শিখুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'The text palette: meaning first, presentation second', bn: 'টেক্সট প্যালেট: আগে অর্থ, পরে উপস্থাপনা' } },
    {
      type: 'para',
      text: {
        en: 'When you build a web page, HTML provides specialized elements for headings, paragraphs, emphasis, quotations, and computer code. Here are the ten core text topics taught with practical runnable snippets.',
        bn: 'যখন আপনি ওয়েব পেজ তৈরি করবেন, তখন এইচটিএমএল হেডিং, প্যারাগ্রাফ, বিশেষ জোর, উদ্ধৃতি এবং কোডের জন্য নির্দিষ্ট উপাদান প্রদান করে। এখানে বাস্তব রানযোগ্য কোডসহ দশটি মূল বিষয় সাজানো হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'heading ladder', def: { en: 'the hierarchical rank from h1 to h6 structuring document outlines', bn: 'ডকুমেন্টের রূপরেখা তৈরিকারী h1 থেকে h6 পর্যন্ত ক্রমিক স্তরবিন্যাস' } },
        { term: 'semantic emphasis', def: { en: 'marking words as important or stressed so screen readers alter pronunciation', bn: 'শব্দকে গুরুত্বপূর্ণ বা জোরযুক্ত হিসেবে চিহ্নিত করা যাতে স্ক্রিন রিডার কণ্ঠে পরিবর্তন আনে' } },
        { term: 'entity escaping', def: { en: 'using character references like &lt; to prevent browser parser misinterpretation', bn: '&lt;-এর মতো ক্যারেক্টার রেফারেন্স ব্যবহার করে ব্রাউজার পার্সারের ভুল রোধ' } },
        { term: 'preformatted block', def: { en: 'rendering text with exact preserved spaces and line breaks in monospace', bn: 'মনোস্পেস ফন্টে অক্ষরের হুবহু স্পেস ও লাইন ব্রেক অপরিবর্তিত রেখে প্রদর্শন' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. HTML Headings: <h1> to <h6> and heading hierarchy', bn: '১. এইচটিএমএল হেডিং: <h1> থেকে <h6> এবং হেডিং সিঁড়ির নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'Headings run from <h1> (highest importance) down to <h6> (lowest importance). Search engines and screen readers rely on this heading hierarchy to navigate sections. Never use headings simply to resize text.',
        bn: 'হেডিং <h1> (সর্বোচ্চ গুরুত্ব) থেকে শুরু করে <h6> (সর্বনিম্ন গুরুত্ব) পর্যন্ত বিস্তৃত। সার্চ ইঞ্জিন ও স্ক্রিন রিডার এই হেডিং ক্রম দেখে পেজের কাঠামো বোঝে। কেবল ফন্ট বড় দেখানোর জন্য হেডিং ব্যবহার করবেন না।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'headings.html',
      code: `<h1>Engineering Architecture Manual</h1>
<p>Top-level introduction to the infrastructure platform.</p>

<h2>1. Compute Services</h2>
<p>Overview of cloud virtual machines and containers.</p>

<h3>1.1 Container Orchestration</h3>
<p>Kubernetes cluster topology and pod deployment pipelines.</p>

<!-- Rule: Never skip from <h1> directly to <h3> without an intervening <h2> -->`,
      caption: {
        en: 'A page should have exactly one <h1> representing its main title, followed by logically nested <h2> and <h3> subheadings.',
        bn: 'একটি পৃষ্ঠায় মূল শিরোনাম হিসেবে কেবল একটি <h1> থাকা উচিত, যার নিচে ক্রমানুসারে <h2> ও <h3> উপ-শিরোনাম বসবে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. HTML Paragraphs: <p>, thematic <hr>, and line breaks with <br>', bn: '২. এইচটিএমএল অনুচ্ছেদ: <p>, থিম্যাটিক <hr> ও <br> দিয়ে লাইন ব্রেক' } },
    {
      type: 'para',
      text: {
        en: 'Browsers automatically collapse multiple whitespace spaces and line breaks inside a <p> into a single space. Use <br> strictly for line breaks in poems or addresses, and <hr> for thematic scene shifts.',
        bn: 'ব্রাউজার <p>-এর ভেতরের একাধিক স্পেস ও নতুন লাইনকে একটিমাত্র স্পেসে রূপান্তর করে। কবিতা বা ঠিকানায় লাইন ভাঙতে <br> এবং বিষয়ভিত্তিক দৃশ্যপট বদলাতে <hr> ব্যবহার করুন।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'paragraphs.html',
      code: `<p>First paragraph explaining the incident response timeline.</p>

<hr> <!-- Thematic divider between chapters or scenes -->

<p>
  Emergency Operations Center<br>
  Building 4, Sector 7<br>
  Dhaka 1212
</p>
<!-- <br> creates a line break without beginning a fresh paragraph -->`,
      caption: {
        en: 'Never stack multiple <br> tags to create vertical spacing between sections; vertical spacing belongs in CSS margins.',
        bn: 'দুটি সেকশনের মাঝে ফাঁকা জায়গা তৈরি করতে একাধিক <br> স্তূপ করবেন না; উল্লম্ব ফাঁকা জায়গা তৈরি করা সিএসএস মার্জিনের কাজ।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. HTML Styles: the style attribute and inline CSS', bn: '৩. এইচটিএমএল স্টাইল: style অ্যাট্রিবিউট ও ইনলাইন সিএসএস' } },
    {
      type: 'para',
      text: {
        en: 'The style attribute allows inline CSS declarations such as color, font-size, and text-align directly on HTML elements for quick isolated overrides.',
        bn: 'style অ্যাট্রিবিউট এইচটিএমএল উপাদানের ওপর সরাসরি color, font-size এবং text-align-এর মতো ইনলাইন সিএসএস লেখার সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'styles.html',
      code: `<p style="color: #b91c1c; font-weight: bold;">
  CRITICAL: Database connection lost.
</p>

<div style="background-color: #f1f5f9; padding: 16px; text-align: center;">
  <p style="font-size: 18px; margin: 0;">Status: System Operational</p>
</div>
<!-- Inline CSS overrides external stylesheets due to high specificity -->`,
      caption: {
        en: 'Inline styles are useful for testing or email templates, but external stylesheets are preferred for maintainable website code.',
        bn: 'ইনলাইন স্টাইল টেস্টিং বা ইমেইল টেমপ্লেটের জন্য কার্যকর হলেও সহজে রক্ষণাবেক্ষণের জন্য এক্সটার্নাল স্টাইলশিট ব্যবহার করাই উত্তম।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Formatting: semantic tags vs cosmetic tags', bn: '৪. ফরম্যাটিং: অর্থপূর্ণ ট্যাগ বনাম চাক্ষুষ ট্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Semantic tags like <strong> and <em> convey urgency and verbal stress to machines and screen readers. Purely cosmetic tags like <b> and <i> merely paint bold or italic text without adding meaning.',
        bn: 'strong ও em-এর মতো সিমান্টিক ট্যাগ স্ক্রিন রিডারকে গুরুত্ব ও কথার জোর বুঝিয়ে দেয়। অপরদিকে b ও i শুধুই চাক্ষুষভাবে হরফ মোটা বা বাঁকা করে, কোনো অর্থ যোগ করে না।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'formatting.html',
      code: `<p>
  <strong>Warning:</strong> Deleting this volume is <em>permanent</em>.
</p>

<p>
  Discount: <del>500 BDT</del> <ins>350 BDT</ins>
</p>

<p>
  Search highlight: <mark>authentication</mark> token verified.
</p>

<p>
  Chemistry and math: H<sub>2</sub>O and 2<sup>10</sup> = 1024
</p>
<!-- strong conveys importance; del and ins track document revisions -->`,
      caption: {
        en: 'Use del and ins to represent editorial revisions, mark for search result matches, and sub/sup for chemical formulas and exponents.',
        bn: 'লেখা কাটা বা সংশোধনে del ও ins, সার্চ রেজাল্ট হাইলাইটে mark এবং রসায়নের সংকেত বা সূচকে sub ও sup ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. HTML Quotations: blockquote, q, abbr, address, and cite', bn: '৫. এইচটিএমএল উদ্ধৃতি: blockquote, q, abbr, address ও cite' } },
    {
      type: 'para',
      text: {
        en: 'HTML provides specialized quotation elements. Use blockquote for multi-line block quotations, q for inline quotes with automatic quotation marks, and abbr for tooltips.',
        bn: 'উদ্ধৃতির জন্য এইচটিএমএলে সুনির্দিষ্ট ট্যাগ রয়েছে। বড় উদ্ধৃতিতে blockquote, বাক্যের ভেতরের উদ্ধৃতিতে q এবং শব্দের সংক্ষিপ্ত রূপ ব্যাখ্যায় abbr ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'quotations.html',
      code: `<blockquote cite="https://tools.ietf.org/html/rfc2616">
  <p>The Hypertext Transfer Protocol is an application-level protocol for distributed hypermedia information systems.</p>
</blockquote>

<p>
  As Tim Berners-Lee said, <q>The Web does not just connect machines, it connects people.</q>
</p>

<p>
  Protocol: <abbr title="Hypertext Transfer Protocol">HTTP</abbr>/3
</p>

<address>
  Written by SRE Team<br>
  Email: ops@example.com
</address>
<!-- <q> automatically inserts localized quotation marks around text -->`,
      caption: {
        en: 'Browsers automatically insert proper opening and closing quote marks around text wrapped in <q>, respecting language punctuation rules.',
        bn: '<q> ট্যাগের ভেতর থাকা লেখার দুই পাশে ব্রাউজার নিজে থেকেই সঠিক কোটেশন চিহ্ন বসিয়ে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. HTML Comments: <!-- comment --> and security cautions', bn: '৬. এইচটিএমএল কমেন্ট: <!-- কমেন্ট --> ও নিরাপত্তা সতর্কতা' } },
    {
      type: 'para',
      text: {
        en: 'HTML comments are written between <!-- and -->. Comments are ignored by browser rendering engines, making them useful for documenting layout sections.',
        bn: 'এইচটিএমএল কমেন্ট <!-- এবং --> চিহ্নের মাঝে লেখা হয়। ব্রাউজার কমেন্ট রেন্ডার করে না, তাই কোডের বিভিন্ন অংশ চিহ্নিত করতে এগুলো ব্যবহার করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'comments.html',
      code: `<!-- Main navigation landmark begin -->
<nav>
  <a href="/home">Home</a>
  <a href="/status">Status</a>
</nav>
<!-- Main navigation landmark end -->

<!-- Temporary debug block disabled during maintenance:
<div class="beta-banner">New API Live</div>
-->

<!-- SECURITY WARNING:
     Never leave API keys, passwords, or internal server IPs in HTML comments!
     Anyone can view page source in their browser. -->`,
      caption: {
        en: 'Never put sensitive credentials in HTML comments. Comments sent over the wire are completely visible to anyone opening "View Source".',
        bn: 'এইচটিএমএল কমেন্টে কখনো পাসওয়ার্ড বা গোপন এপিআই কি রাখবেন না। ব্রাউজারে "View Source" করলেই যে কেউ কমেন্ট দেখতে পারে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Computercode: <code>, <kbd>, <samp>, <var>, and <pre>', bn: '৭. কম্পিউটার কোড: <code>, <kbd>, <samp>, <var> ও <pre>' } },
    {
      type: 'para',
      text: {
        en: 'Technical documentation relies on five semantic computer code elements: code for snippets, kbd for keyboard keys, samp for terminal outputs, var for variables, and pre for blocks.',
        bn: 'কারিগরি ডকুমেন্টে পাঁচটি কোড ট্যাগ থাকে: কোডের টুকরোয় code, কিবোর্ড কি বোঝাতে kbd, টার্মিনাল আউটপুটে samp, চলকে var এবং পূর্ণাঙ্গ ব্লকে pre।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'computercode.html',
      code: `<p>
  To save your changes, press <kbd>Ctrl</kbd> + <kbd>S</kbd>.
</p>

<p>
  The command <var>x</var> evaluates in <code>run_diagnostics(<var>x</var>)</code>.
</p>

<p>Terminal output returned:</p>
<pre>
<samp>
$ curl -I https://example.com
HTTP/2 200 OK
content-type: text/html
</samp>
</pre>
<!-- <pre> preserves indentation, spaces, and line breaks exactly as typed -->`,
      caption: {
        en: 'Wrapping samp inside pre preserves terminal layout indentation and newlines exactly as emitted by shell commands.',
        bn: 'pre-এর ভেতর samp রাখলে টার্মিনাল কমান্ডের আউটপুটের স্পেস ও নতুন লাইন হুবহু সংরক্ষিত থাকে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. HTML Entities and Symbols: reserved characters and copyright', bn: '৮. এইচটিএমএল এন্টিটি ও প্রতীক: সংরক্ষিত ক্যারেক্টার ও কপিরাইট' } },
    {
      type: 'para',
      text: {
        en: 'Certain characters are reserved by the HTML parser. The less-than sign (<) must be escaped as &lt; to prevent the browser from treating it as a new opening tag.',
        bn: 'এইচটিএমএল পার্সারে কিছু চিহ্ন সংরক্ষিত। লেস-দ্যান চিহ্ন (<) লিখতে হলে &lt; ব্যবহার করতে হয়, যাতে ব্রাউজার এটিকে নতুন ট্যাগ মনে না করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'entities.html',
      code: `<!-- Writing bare < inside text confuses the parser: -->
<p>Formula: a &lt; b and c &gt; d</p>

<p>Entity escapes for common characters:</p>
<ul>
  <li>Less than: &lt; (&amp;lt;)</li>
  <li>Greater than: &gt; (&amp;gt;)</li>
  <li>Ampersand: &amp; (&amp;amp;)</li>
  <li>Double quote: &quot; (&amp;quot;)</li>
  <li>Non-breaking space: &nbsp; (&amp;nbsp;)</li>
  <li>Copyright symbol: &copy; 2026 (&amp;copy;)</li>
  <li>Euro symbol: &euro; (&amp;euro;)</li>
</ul>`,
      caption: {
        en: 'Use &nbsp; where two words must never wrap onto separate lines, such as between numbers and currency abbreviations.',
        bn: 'যেখানে দুটি শব্দ ভেঙে দুই লাইনে যাওয়া নিষেধ (যেমন সংখ্যা ও মুদ্রার নাম), সেখানে &nbsp; ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Emojis and Character Sets: UTF-8 encoding and unicode', bn: '৯. ইমোজি ও ক্যারেক্টার সেট: ইউটিএফ-৮ এনকোডিং ও ইউনিকোড' } },
    {
      type: 'para',
      text: {
        en: 'Declaring meta charset="UTF-8" ensures browsers correctly display worldwide writing systems and emojis without scrambled character rendering.',
        bn: '<meta charset="UTF-8"> ঘোষণা নিশ্চিত করে যে ব্রাউজার বাংলাসহ বিশ্বের সব ভাষা ও ইমোজি কোনো ভাঙা অক্ষর ছাড়া সঠিকভাবে প্রদর্শন করবে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'emojis.html',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Unicode and Emojis</title>
</head>
<body>
  <!-- Direct UTF-8 emoji character -->
  <p>System status: Active 🔥</p>

  <!-- Numeric decimal character entity reference -->
  <p>Grinning face: &#128512;</p>
  <p>Rocket symbol: &#128640;</p>
</body>
</html>
<!-- UTF-8 covers over 140000 characters across all human writing systems -->`,
      caption: {
        en: 'Modern websites can paste emojis directly into HTML source files provided the document declares UTF-8 encoding in its head.',
        bn: 'ডকুমেন্টের head-এ UTF-8 এনকোডিং ঘোষণা থাকলে এইচটিএমএল সোর্স ফাইলে সরাসরি ইমোজি পেস্ট করে কাজ করা যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. HTML5 Style Guide: clean syntax and professional conventions', bn: '১০. এইচটিএমএল৫ স্টাইল গাইড: পরিচ্ছন্ন সিনট্যাক্স ও পেশাদার নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'Clean, production-grade HTML5 adheres to standard conventions: lowercase element names, closing all opened tags, quoting attribute values, and declaring alt on every image.',
        bn: 'উন্নত প্রোডাকশন কোডে এইচটিএমএল৫ স্ট্যান্ডার্ড নিয়ম মেনে চলে: ছোট হাতের ট্যাগ, ট্যাগ যথাযথভাবে বন্ধ করা, কোটেশনের ভেতর অ্যাট্রিবিউট রাখা এবং ছবিতে alt দেওয়া।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'style-guide.html',
      code: `<!-- 1. Always declare clean standard doctype -->
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Clean HTML5 Architecture</title>
</head>
<body>
  <!-- 2. Use lowercase element and attribute names -->
  <header>
    <!-- 3. Always quote attribute values -->
    <a href="/dashboard" class="nav-link">Dashboard</a>
  </header>

  <main>
    <!-- 4. Always provide meaningful alt attributes on images -->
    <img src="/logo.png" alt="Company Logo" width="120" height="40">
  </main>
</body>
</html>`,
      caption: {
        en: 'Following these style rules ensures consistent parsing across modern web browsers, validators, and automated deployment pipelines.',
        bn: 'এই স্টাইল নিয়মগুলো মেনে চললে সব ব্রাউজার, ভ্যালিডেটর ও স্বয়ংক্রিয় বিল্ড সিস্টেমে কোড ত্রুটিহীনভাবে কাজ করে।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why semantic text markup matters for users and robots', bn: 'ব্যবহারকারী ও সার্চ ইঞ্জিনের জন্য সিমান্টিক মার্কআপের গুরুত্ব' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'Heading hierarchy allows blind screen-reader users to jump directly to target sections', bn: 'হেডিং সিঁড়ি দেখে দৃষ্টিপ্রতিবন্ধী স্ক্রিন রিডার ব্যবহারকারীরা সরাসরি কাঙ্ক্ষিত সেকশনে লাফ দিতে পারে' },
        { en: 'Search engine crawlers extract keywords and outline summaries from structured headings', bn: 'সার্চ ইঞ্জিন রোবট কাঠামোগত হেডিং বিশ্লেষণ করে পেজের মূল বিষয়বস্তু ও সারাংশ সংগ্রহ করে' },
        { en: 'Computer code elements enable documentation readers to distinguish inputs from outputs', bn: 'কম্পিউটার কোড ট্যাগ ব্যবহারকারীদের কিবোর্ড ইনপুট এবং সিস্টেম আউটপুটের পার্থক্য বুঝতে সাহায্য করে' },
        { en: 'Entity escaping prevents accidental tag injection and cross-site scripting vulnerabilities', bn: 'ক্যারেক্টার এন্টিটি এস্কেপিং অযাচিত ট্যাগ ইনজেকশন ও নিরাপত্তা ঝুঁকি প্রতিরোধ করে' },
        { en: 'Standardized style guide conventions maintain readability across large engineering teams', bn: 'অভিন্ন স্টাইল গাইড বড় ইঞ্জিনিয়ারিং টিমের কোড পরিচ্ছন্ন ও সহজে পাঠযোগ্য রাখে' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Element', bn: 'উপাদান' }, { en: 'Category', bn: 'ক্যাটাগরি' }, { en: 'Visual Appearance', bn: 'চাক্ষুষ রূপ' }, { en: 'Semantic Meaning', bn: 'সিমান্টিক অর্থ' }],
      rows: [
        [{ en: '<h1> - <h6>', bn: '<h1> - <h6>' }, { en: 'Headings', bn: 'শিরোনাম' }, { en: 'Bold text sized 32px to 10px', bn: 'বোল্ড টেক্সট ৩২ থেকে ১০ পিক্সেল' }, { en: 'Document outline levels 1 through 6', bn: 'ডকুমেন্ট রূপরেখার স্তর ১ থেকে ৬' }],
        [{ en: '<strong>', bn: '<strong>' }, { en: 'Formatting', bn: 'ফরম্যাটিং' }, { en: 'Bold font weight', bn: 'বোল্ড ফন্ট ওয়েট' }, { en: 'Serious importance or urgency', bn: 'জরুরি গুরুত্ব বা সতর্কতা' }],
        [{ en: '<em>', bn: '<em>' }, { en: 'Formatting', bn: 'ফরম্যাটিং' }, { en: 'Italic slanted text', bn: 'বাঁকা ইতালিক টেক্সট' }, { en: 'Verbal stress emphasis', bn: 'উচ্চারণে কথার জোর বা গুরুত্ব' }],
        [{ en: '<kbd>', bn: '<kbd>' }, { en: 'Computercode', bn: 'কম্পিউটার কোড' }, { en: 'Monospace font', bn: 'মনোস্পেস ফন্ট' }, { en: 'Keyboard key sequence for user input', bn: 'ব্যবহারকারীর কিবোর্ড কি চাপার নির্দেশ' }],
        [{ en: '<samp>', bn: '<samp>' }, { en: 'Computercode', bn: 'কম্পিউটার কোড' }, { en: 'Monospace font', bn: 'মনোস্পেস ফন্ট' }, { en: 'Output emitted by a computer program', bn: 'প্রোগ্রাম বা টার্মিনাল থেকে আসা আউটপুট' }],
        [{ en: '&lt; &gt; &amp;', bn: '&lt; &gt; &amp;' }, { en: 'Entities', bn: 'এন্টিটি' }, { en: '<, >, & symbols', bn: '<, >, & প্রতীক' }, { en: 'Escaped characters preventing parser tags', bn: 'ট্যাগ রূপান্তর রোধকারী বিশেষ চিহ্ন' }]
      ],
      caption: { en: 'Summary of HTML text elements, appearance, and machine meaning.', bn: 'এইচটিএমএল টেক্সট উপাদান, চাক্ষুষ রূপ এবং সিমান্টিক অর্থের সারসংক্ষেপ।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to structure readable, accessible article copy', bn: 'কীভাবে পাঠযোগ্য ও গ্রহণযোগ্য কনটেন্ট তৈরি করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Establish one primary h1', bn: 'একটি প্রধান h1 নির্ধারণ' }, text: { en: 'Give the page exactly one <h1> that summarizes the topic, matching the document title.', bn: 'ডকুমেন্ট টাইটেলের সাথে মিল রেখে পেজে বিষয়বস্তুর সারাংশ হিসেবে কেবল একটি <h1> দিন।' } },
        { title: { en: 'Maintain heading order', bn: 'হেডিংয়ের ধারাবাহিকতা রক্ষা' }, text: { en: 'Step downward from <h2> to <h3> without skipping levels for visual styling.', bn: 'ফন্ট ছোট-বড় করার জন্য স্তর না টপকিয়ে <h2>-এর নিচে ধারাবাহিকভাবে <h3> রাখুন।' } },
        { title: { en: 'Choose strong over b', bn: 'b-এর বদলে strong নির্বাচন' }, text: { en: 'Use <strong> when text has genuine importance and <em> when an auditory stress applies.', bn: 'বাস্তব গুরুত্ব বোঝাতে <strong> এবং উচ্চারণের জোর প্রকাশ করতে <em> ব্যবহার করুন।' } },
        { title: { en: 'Wrap code in semantic tags', bn: 'কোডে সিমান্টিক ট্যাগ প্রয়োগ' }, text: { en: 'Use kbd for keyboard commands and samp for terminal outputs inside pre blocks.', bn: 'pre ব্লকের ভেতরে কিবোর্ড নির্দেশে kbd এবং টার্মিনাল আউটপুটে samp ব্যবহার করুন।' } },
        { title: { en: 'Escape reserved characters', bn: 'সংরক্ষিত চিহ্ন এস্কেপ করুন' }, text: { en: 'Always replace < with &lt; and & with &amp; whenever displaying HTML syntax.', bn: 'এইচটিএমএল সিনট্যাক্স প্রদর্শনের সময় সর্বদা < কে &lt; এবং & কে &amp; দিয়ে লিখুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Document outline tree created by heading hierarchy', bn: 'হেডিং সিঁড়ি দিয়ে তৈরি ডকুমেন্ট রূপরেখা ট্রি' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="tree diagram showing h1 branching into multiple h2 and h3 sections"><g font-size="11" fill="currentColor"><rect x="230" y="20" width="200" height="32" rx="4" fill="none" stroke="currentColor"/><text x="330" y="41" text-anchor="middle">h1: Engineering Manual</text><line x1="330" y1="52" x2="160" y2="85" stroke="currentColor" stroke-width="1.2"/><line x1="330" y1="52" x2="500" y2="85" stroke="currentColor" stroke-width="1.2"/><rect x="70" y="85" width="180" height="32" rx="4" fill="none" stroke="currentColor"/><text x="160" y="106" text-anchor="middle">h2: 1. Compute Services</text><rect x="410" y="85" width="180" height="32" rx="4" fill="none" stroke="currentColor"/><text x="500" y="106" text-anchor="middle">h2: 2. Storage Systems</text><line x1="160" y1="117" x2="160" y2="145" stroke="currentColor" stroke-width="1.2"/><rect x="60" y="145" width="200" height="32" rx="4" fill="none" stroke="currentColor"/><text x="160" y="166" text-anchor="middle">h3: 1.1 Kubernetes Clusters</text><line x1="500" y1="117" x2="500" y2="145" stroke="currentColor" stroke-width="1.2"/><rect x="400" y="145" width="200" height="32" rx="4" fill="none" stroke="currentColor"/><text x="500" y="166" text-anchor="middle">h3: 2.1 Object Buckets</text></g></svg>`,
      caption: { en: 'Screen readers and crawlers parse this outline tree to provide instant section jumping.', bn: 'স্ক্রিন রিডার ও সার্চ ইঞ্জিন এই রূপরেখা ট্রি দেখে দ্রুত সেকশনে স্থানান্তরের সুবিধা দেয়।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Accessibility shortcut', bn: 'অ্যাক্সেসিবিলিটি শর্টকাট' },
      text: {
        en: 'Blind users frequently navigate web pages by pressing the "H" key in screen readers to skip directly from heading to heading. Maintaining strict heading levels turns your document into an accessible table of contents automatically.',
        bn: 'দৃষ্টিপ্রতিবন্ধী ব্যক্তিরা স্ক্রিন রিডারে "H" কি চেপে এক হেডিং থেকে অন্য হেডিংয়ে দ্রুত যাতায়াত করেন। সঠিক হেডিং সিঁড়ি বজায় রাখলে আপনার পেজটি স্বয়ংক্রিয়ভাবেই এক পরিচ্ছন্ন সূচিপত্রে পরিণত হয়।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The heading level skipping error', bn: 'হেডিং স্তর টপকানোর ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Choosing heading tags based on visual font size instead of hierarchy', bn: 'সাইজ দেখে হেডিং ট্যাগ বেছে নেওয়ার ভুল' },
      text: {
        en: 'Jumping from <h1> directly to <h4> because <h4> matches a desired visual font size breaks the accessibility tree. Screen reader users assume parent sections <h2> and <h3> are missing. Always pick the semantically correct heading level and use CSS font-size to style its appearance.',
        bn: 'ফন্ট ছোট দেখানোর জন্য <h1>-এর পর সরাসরি <h4> বসালে অ্যাক্সেসিবিলিটি নষ্ট হয়। স্ক্রিন রিডার ব্যবহারকারীরা মনে করেন <h2> ও <h3> অংশগুলো হারিয়ে গেছে। সর্বদা নিয়মানুযায়ী সঠিক হেডিং স্তর দিন এবং আকার পরিবর্তনের জন্য সিএসএস ফন্ট-সাইজ ব্যবহার করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-text-ex1', kind: 'predict', topic: 'html: Text formatting',
      question: { en: 'Which character entity is used to represent the less-than sign (<)?', bn: 'লেস-দ্যান চিহ্ন (<) প্রদর্শনে কোন ক্যারেক্টার এন্টিটি ব্যবহৃত হয়?' },
      code: `entity = '&lt;'\nprint(entity)`,
      answer: '&lt;',
      accept: ['&lt;', '&lt; '],
      hint: { en: 'Starts with ampersand and ends with semicolon.', bn: 'অ্যাম্পারস্যান্ড দিয়ে শুরু এবং সেমিকোলন দিয়ে শেষ।' },
      explanation: { en: '&lt; stands for "less than" and prevents the parser from confusing < with a tag start.', bn: '&lt; মানে "less than", যা ব্রাউজারকে চিহ্নটিকে ট্যাগের শুরু হিসেবে ভুল করা থেকে রক্ষা করে।' }
    },
    {
      id: 'html-text-ex2', kind: 'mcq', topic: 'html: Text formatting',
      question: { en: 'Which tag semantically indicates user keyboard input?', bn: 'ব্যবহারকারীর কিবোর্ড কি ইনপুট নির্দেশ করতে কোন সিমান্টিক ট্যাগ ব্যবহৃত হয়?' },
      options: [
        { en: '<kbd>', bn: '<kbd>' },
        { en: '<code>', bn: '<code>' },
        { en: '<samp>', bn: '<samp>' },
        { en: '<var>', bn: '<var>' }
      ],
      answer: 0,
      hint: { en: 'Short for keyboard.', bn: 'কিবোর্ডের সংক্ষিপ্ত রূপ।' },
      explanation: { en: '<kbd> represents user keyboard input such as shortcut keys.', bn: '<kbd> শর্টকাট কি-র মতো ব্যবহারকারীর কিবোর্ড ইনপুট নির্দেশ করে।' }
    },
    {
      id: 'html-text-ex3', kind: 'fill', topic: 'html: Text formatting',
      question: { en: 'Fill the blank with the attribute used on <abbr> to show the full term tooltip.', bn: 'মাউস রাখলে পুরো শব্দ দেখাতে <abbr> ট্যাগে কোন অ্যাট্রিবিউট ব্যবহার করা হয়?' },
      code: `<abbr ________="Hypertext Transfer Protocol">HTTP</abbr>`,
      answer: 'title',
      accept: ['title', 'title="Hypertext Transfer Protocol"'],
      hint: { en: 'The standard tooltip attribute.', bn: 'স্ট্যান্ডার্ড টুলটিপ অ্যাট্রিবিউট।' },
      explanation: { en: 'The title attribute provides the expanded description shown when hovering over the abbreviation.', bn: 'title অ্যাট্রিবিউটটি মাউস হোভার করলে সংক্ষিপ্ত শব্দের পূর্ণ রূপ প্রকাশ করে।' }
    },
    {
      id: 'html-text-ex4', kind: 'predict', topic: 'html: Text formatting',
      question: { en: 'In standard HTML5 conventions, should element tag names be written in uppercase or lowercase?', bn: 'এইচটিএমএল৫ স্টাইল গাইড অনুযায়ী ট্যাগের নাম বড় হাতের না ছোট হাতের অক্ষরে লেখা উচিত?' },
      code: `convention = 'lowercase'\nprint(convention)`,
      answer: 'lowercase',
      accept: ['lowercase', 'small'],
      hint: { en: 'The opposite of uppercase.', bn: 'বড় হাতের বিপরীত রূপ।' },
      explanation: { en: 'HTML5 style guides recommend lowercase for all element names and attribute names.', bn: 'এইচটিএমএল৫ স্টাইল গাইড সব ট্যাগ ও অ্যাট্রিবিউটের নাম ছোট হাতের অক্ষরে লেখার সুপারিশ করে।' }
    }
  ],
  quiz: {
    id: 'html-text-formatting-quiz',
    title: { en: 'Quiz — Text formatting and styles', bn: 'কুইজ — টেক্সট ফরম্যাটিং ও স্টাইল' },
    questions: [
      {
        id: 'html-text-q1', kind: 'mcq', topic: 'html: Text formatting',
        question: { en: 'How many <h1> heading elements should ideally exist on a single web page?', bn: 'একটি ওয়েব পেজে আদর্শভাবে কতটি <h1> হেডিং উপাদান থাকা উচিত?' },
        options: [
          { en: 'Exactly 1', bn: 'ঠিক ১টি' },
          { en: 'At least 5', bn: 'কমপক্ষে ৫টি' },
          { en: 'None', bn: 'একটিও না' },
          { en: 'One per paragraph', bn: 'প্রতি প্যারাগ্রাফে একটি করে' }
        ],
        answer: 0,
        hint: { en: 'One primary subject title.', bn: 'একটি প্রধান বিষয় শিরোনাম।' },
        explanation: { en: 'A web document should have exactly one <h1> representing the primary subject title.', bn: 'একটি ওয়েব ডকুমেন্টে মূল বিষয় প্রকাশের জন্য আদর্শভাবে একটিমাত্র <h1> থাকা উচিত।' }
      },
      {
        id: 'html-text-q2', kind: 'predict', topic: 'html: Text formatting',
        question: { en: 'What does <del> represent in document editing?', bn: 'ডকুমেন্ট এডিটিংয়ে <del> ট্যাগ কী প্রকাশ করে?' },
        code: `print('deleted')`,
        answer: 'deleted',
        accept: ['deleted', 'removed', 'strike'],
        hint: { en: 'Removed or deleted text.', bn: 'বাদ দেওয়া বা মুছে ফেলা লেখা।' },
        explanation: { en: '<del> represents deleted or struck-out text during document revisions.', bn: '<del> ডকুমেন্টে কেটে বাদ দেওয়া লেখা নির্দেশ করে।' }
      },
      {
        id: 'html-text-q3', kind: 'mcq', topic: 'html: Text formatting',
        question: { en: 'Why should sensitive credentials never be placed inside HTML comments?', bn: 'এইচটিএমএল কমেন্টের ভেতর কেন পাসওয়ার্ড বা গোপন তথ্য রাখা উচিত নয়?' },
        options: [
          { en: 'HTML comments are delivered over the wire and visible in "View Source"', bn: 'এইচটিএমএল কমেন্ট ব্রাউজারে পাঠানো হয় এবং "View Source" করলেই দেখা যায়' },
          { en: 'Comments break JavaScript code', bn: 'কমেন্ট জাভাস্ক্রিপ্ট কোড নষ্ট করে দেয়' },
          { en: 'Browsers crash on comments longer than 10 words', bn: '১০ শব্দের বেশি কমেন্ট হলে ব্রাউজার ক্র্যাশ করে' },
          { en: 'Comments are automatically indexed by Google as passwords', bn: 'গুগল কমেন্টগুলোকে স্বয়ংক্রিয়ভাবে পাসওয়ার্ড হিসেবে সংরক্ষণ করে' }
        ],
        answer: 0,
        hint: { en: 'Source code visibility.', bn: 'সোর্স কোড উন্মুক্ত থাকা।' },
        explanation: { en: 'HTML comments are completely readable by anyone inspecting the page source code.', bn: 'যে কেউ পেজের সোর্স কোড পরীক্ষা করলেই এইচটিএমএল কমেন্ট পড়তে পারে।' }
      },
      {
        id: 'html-text-q4', kind: 'mcq', topic: 'html: Text formatting',
        question: { en: 'Which element preserves whitespaces, indentation, and newlines exactly as written in the source?', bn: 'কোন উপাদান সোর্সে লেখা অক্ষরের ফাঁকা স্পেস, ইনডেন্টেশন ও নতুন লাইন হুবহু ধরে রাখে?' },
        options: [
          { en: '<pre>', bn: '<pre>' },
          { en: '<p>', bn: '<p>' },
          { en: '<span>', bn: '<span>' },
          { en: '<b>', bn: '<b>' }
        ],
        answer: 0,
        hint: { en: 'Preformatted text tag.', bn: 'প্রি-ফরম্যাটেড টেক্সট ট্যাগ।' },
        explanation: { en: '<pre> instructs the browser to render text with preserved spacing and line breaks in monospace.', bn: '<pre> ট্যাগ ব্রাউজারকে কোনো স্পেস না কমিয়ে হুবহু মনোস্পেস ফন্টে লেখা দেখানোর নির্দেশ দেয়।' }
      }
    ]
  },
  nextLesson: {
    slug: 'html-links-urls',
    title: {
      en: 'The Linked World: Hyperlinks, URLs, Bookmarks, and File Paths',
      bn: 'যুক্ত দুনিয়া: হাইপারলিংক, ইউআরএল, বুকমার্ক এবং ফাইল পাথ'
    }
  }
};
