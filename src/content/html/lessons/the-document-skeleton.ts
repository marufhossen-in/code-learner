import type { Lesson } from '../../../lib/types';

/**
 * Ten complete points consolidating the entire w3schools Document Skeleton & Basics curriculum:
 * 1. Document anatomy: <!DOCTYPE html>, <html>, <head>, and <body>
 * 2. HTML Editors and tooling: VS Code, .html files, live reloading, and DevTools
 * 3. HTML Elements: opening tag, closing tag, element content, and void elements
 * 4. HTML Attributes: name="value" syntax, lang attribute, and global attributes
 * 5. The <head> envelope: machine metadata, scripts, and linked resources
 * 6. Character encoding: <meta charset="UTF-8"> and byte translation
 * 7. Mobile Viewport: <meta name="viewport" content="width=device-width, initial-scale=1.0">
 * 8. Page Title: <title> for browser tabs, bookmarks, and search crawlers
 * 9. Favicons: <link rel="icon"> for tab branding and identity
 * 10. View Source vs Inspect Element: wire bytes vs live DOM tree
 */
export const documentSkeletonLesson: Lesson = {
  slug: 'html-skeleton',
  tech: 'html',
  title: {
    en: 'The document skeleton, point by point: doctype, head, body, viewport, and title',
    bn: 'ডকুমেন্ট কঙ্কাল, পয়েন্ট ধরে: ডকটাইপ, হেড, বডি, ভিউপোর্ট ও টাইটেল'
  },
  summary: {
    en: 'A beginner tour of HTML document structure and basic web standards. Every web page begins with a structural contract between text bytes and browser layout engines. Master modern standards mode with doctype, configure UTF-8 encoding and responsive mobile viewports in the head, structure body content cleanly, brand tabs with titles and favicons, and inspect live DOM trees.',
    bn: 'এইচটিএমএল ডকুমেন্ট কাঠামো এবং ওয়েবের বেসিক স্ট্যান্ডার্ডের একটি সহজ সূচনা। প্রতিটি ওয়েব পেজ টেক্সট বাইট এবং ব্রাউজার রেন্ডারিং ইঞ্জিনের মাঝে একটি কাঠামোগত চুক্তির মাধ্যমে শুরু হয়। ডকটাইপ দিয়ে স্ট্যান্ডার্ডস মোড, হেডে ইউটিএফ-৮ এনকোডিং ও রেসপন্সিভ ভিউপোর্ট কনফিগারেশন, পরিচ্ছন্ন বডি স্ট্রাকচার, টাইটেল ও ফেভিকন এবং লাইভ ডম ট্রি পর্যবেক্ষণ আয়ত্ত করুন।'
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'The anatomical envelope of every web document', bn: 'প্রতিটি ওয়েব ডকুমেন্টের মৌলিক কাঠামো' } },
    {
      type: 'para',
      text: {
        en: 'In this lesson we cover all ten foundational document structure topics from w3schools. Each point includes complete, executable code snippets with rendered output comments.',
        bn: 'এই পাঠে আমরা ডাব্লু থ্রি স্কুলের ডকুমেন্টের দশটি মৌলিক ভিত্তি বিস্তারিতভাবে শিখব। প্রতিটিতে রেন্ডার করা আউটপুট কমেন্টসহ রানযোগ্য কোড রয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'standards mode', def: { en: 'the modern rendering mode triggered by the standard doctype declaration', bn: 'স্ট্যান্ডার্ড ডকটাইপ ঘোষণার মাধ্যমে সক্রিয় হওয়া আধুনিক রেন্ডারিং মোড' } },
        { term: 'void element', def: { en: 'a self-closing element that cannot contain text content or closing tags', bn: 'যে ট্যাগের ভেতরে কোনো টেক্সট বা পৃথক ক্লোজিং ট্যাগ থাকে না' } },
        { term: 'viewport meta', def: { en: 'the declaration instructing mobile devices to match screen width without zooming out', bn: 'মোবাইল ডিভাইসকে স্ক্রিনের মাপে পেজ দেখানোর নির্দেশক মেটা ট্যাগ' } },
        { term: 'dom tree', def: { en: 'the living object hierarchy constructed by the browser after parsing html bytes', bn: 'এইচটিএমএল পার্স করার পর ব্রাউজারের তৈরি করা লাইভ অবজেক্ট কাঠামো' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. Document Anatomy: <!DOCTYPE html>, <html>, <head>, and <body>', bn: '১. ডকুমেন্ট কাঠামো: <!DOCTYPE html>, <html>, <head> ও <body>' } },
    {
      type: 'para',
      text: {
        en: 'The <!DOCTYPE html> declaration tells the browser to render using modern HTML5 standards mode. The <html> root contains exactly two sections: <head> for machine instructions and <body> for visible content.',
        bn: '<!DOCTYPE html> ঘোষণা ব্রাউজারকে আধুনিক এইচটিএমএল৫ স্ট্যান্ডার্ডস মোডে চলার নির্দেশ দেয়। <html> রুটের ভেতর ঠিক ২টি অংশ থাকে: নির্দেশনার জন্য <head> এবং দৃশ্যমান কনটেন্টের জন্য <body>।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'minimal-skeleton.html',
      code: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Platform Documentation</title>
  </head>
  <body>
    <h1>System Operational</h1>
    <p>All cloud services are running normally.</p>
  </body>
</html>
<!-- Output in browser:
     Tab Title: Platform Documentation
     Heading: System Operational
     Body Paragraph: All cloud services are running normally. -->`,
      caption: {
        en: 'Omitting <!DOCTYPE html> forces the browser into quirks mode, where CSS box sizing and layouts emulate outdated 1999 engines.',
        bn: '<!DOCTYPE html> বাদ দিলে ব্রাউজার quirks মোডে চলে যায়, যেখানে ১৯৯৯ সালের পুরোনো ইঞ্জিনের মতো সিএসএস উল্টোপাল্টা আচরণ করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. HTML Editors and Tooling: VS Code, .html files, and DevTools', bn: '২. এডিটর ও টুলিং: ভিএস কোড, .html ফাইল ও ডেভটুলস' } },
    {
      type: 'para',
      text: {
        en: 'HTML files are plain text files saved with the .html extension. Use professional code editors like VS Code with syntax highlighting and press F12 in browsers to inspect markup.',
        bn: 'এইচটিএমএল ফাইল হলো সাধারণ টেক্সট ফাইল যা .html এক্সটেনশন দিয়ে সেভ করা হয়। ভিএস কোডের মতো এডিটরে কোড লিখে ব্রাউজারে F12 চেপে মার্কআপ পরীক্ষা করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      filename: 'developer-workflow.sh',
      code: `# 1. Create a clean project folder and index.html file
mkdir -p my-site && cd my-site
echo "<!DOCTYPE html><title>Test</title><p>Hello</p>" > index.html

# 2. View file in terminal or open with default web browser
cat index.html

# 3. In Google Chrome or Firefox, press F12 or Ctrl+Shift+I to open DevTools
# Inspect Element tab shows the active DOM tree built from this file`,
      caption: {
        en: 'Never write HTML in word processors like Microsoft Word, which insert hidden rich-text formatting tags that corrupt browser parsers.',
        bn: 'মাইক্রোসফট ওয়ার্ডের মতো সফটওয়্যারে এইচটিএমএল লিখবেন না, কারণ সেগুলো বাড়তি ফরম্যাটিং ট্যাগ ঢুকিয়ে কোড নষ্ট করে দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. HTML Elements: opening tag, closing tag, and void tags', bn: '৩. উপাদান: শুরুর ট্যাগ, শেষের ট্যাগ ও ভয়েড ট্যাগ' } },
    {
      type: 'para',
      text: {
        en: 'Most HTML elements consist of an opening tag, inner content, and a closing tag. Void elements like <img>, <br>, and <hr> cannot hold children and do not require closing tags.',
        bn: 'অধিকাংশ এইচটিএমএল উপাদানে শুরুর ট্যাগ, ভেতরের কনটেন্ট এবং শেষের ট্যাগ থাকে। <img>, <br> ও <hr>-এর মতো ভয়েড ট্যাগের কোনো সন্তান থাকে না বলে এগুলো বন্ধ করতে হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'elements.html',
      code: `<!-- Standard element: <tag>content</tag> -->
<p>This is paragraph content.</p>

<!-- Nested elements: child elements inside parent -->
<p>Logging status: <strong>active</strong></p>

<!-- Void elements: self-contained, no closing tag -->
<hr>
<img src="/avatar.png" alt="User Avatar" width="64" height="64">
<br>`,
      caption: {
        en: 'In HTML5, writing a closing </br> or <hr></hr> is invalid syntax. Void elements are complete in their single opening tag.',
        bn: 'এইচটিএমএল৫-এ </br> বা <hr></hr> লেখা ভুল। ভয়েড উপাদানগুলো তাদের একক ট্যাগেই সম্পূর্ণ।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. HTML Attributes: name="value" syntax and the lang attribute', bn: '৪. অ্যাট্রিবিউট: name="value" সিনট্যাক্স ও lang অ্যাট্রিবিউট' } },
    {
      type: 'para',
      text: {
        en: 'Attributes provide additional settings to elements and always appear in the opening tag. The lang attribute on <html> tells search engines and text-to-speech tools the document language.',
        bn: 'অ্যাট্রিবিউট উপাদান সম্পর্কে বাড়তি তথ্য দেয় এবং সর্বদা শুরুর ট্যাগে বসে। <html>-এ lang অ্যাট্রিবিউট সার্চ ইঞ্জিন ও স্ক্রিন রিডারকে ভাষার পরিচয় জানায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'attributes.html',
      code: `<!-- The lang attribute specifies language for screen readers and translators -->
<html lang="bn">
  <body>
    <!-- href provides the link target destination -->
    <a href="/login" title="Account Authentication" target="_blank">Login</a>

    <!-- src provides resource URL; alt provides accessibility alternative -->
    <img src="/diagram.svg" alt="System Network Map" width="400" height="200">
  </body>
</html>`,
      caption: {
        en: 'Always wrap attribute values in double quotes. Omitting quotes causes parser bugs when values contain spaces or special characters.',
        bn: 'অ্যাট্রিবিউটের মান সর্বদা ডাবল কোটেশনের ভেতর রাখুন। কোটেশন বাদ দিলে স্পেস থাকা মানগুলো ব্রাউজার পার্সার ভুলভাবে পড়ে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The <head> Element: machine instructions and linked resources', bn: '৫. <head> উপাদান: মেশিনের নির্দেশনা ও সংযুক্ত রিসোর্স' } },
    {
      type: 'para',
      text: {
        en: 'The <head> section houses machine-readable metadata. It links external stylesheets, declares character encodings, defines viewport scaling, and embeds scripts.',
        bn: '<head> অংশে মেশিনের জন্য মেটাডেটা থাকে। এটি এক্সটার্নাল সিএসএস ফাইল যুক্ত করে, এনকোডিং ঠিক করে, মোবাইল ভিউপোর্ট নির্ধারণ করে এবং স্ক্রিপ্ট লোড করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'head-complete.html',
      code: `<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Production cloud infrastructure monitoring platform">
  <title>Dashboard Overview</title>

  <!-- External Stylesheet -->
  <link rel="stylesheet" href="/styles.css">

  <!-- Shortcut Icon -->
  <link rel="icon" type="image/x-icon" href="/favicon.ico">
</head>`,
      caption: {
        en: 'Content inside <head> never renders as visible body pixels, but it controls how all body pixels are styled, sized, and interpreted.',
        bn: '<head>-এর কনটেন্ট পেজে সরাসরি দেখা যায় না, তবে এটি বডির সব পিক্সেলের সাইজ, ডিজাইন ও অর্থ নিয়ন্ত্রণ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Character Encoding: <meta charset="UTF-8"> prevents mojibake', bn: '৬. ক্যারেক্টার এনকোডিং: <meta charset="UTF-8"> অক্ষর ভাঙা রোধ করে' } },
    {
      type: 'para',
      text: {
        en: 'Browsers receive files as raw numbers and bytes. Declaring meta charset="UTF-8" provides the universal translation table covering Latin, Bengali, and all global scripts.',
        bn: 'ব্রাউজার ফাইলকে বাইট হিসেবে গ্রহণ করে। <meta charset="UTF-8"> দিলে ইংরেজি ও বাংলাসহ বিশ্বের সব লিপির সঠিক ডিকোড নিশ্চিত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'charset.html',
      code: `<!DOCTYPE html>
<html lang="bn">
<head>
  <meta charset="UTF-8">
  <title>দ্বিভাষিক ড্যাশবোর্ড</title>
</head>
<body>
  <!-- UTF-8 renders Bengali text correctly without scrambled mojibake characters -->
  <h1>স্বাগতম</h1>
  <p>সিস্টেম সফলভাবে চালু হয়েছে।</p>
</body>
</html>`,
      caption: {
        en: 'Without UTF-8, non-Latin languages degrade into mojibake question marks and garbled symbols because the browser defaults to Windows-1252 or ASCII.',
        bn: 'ইউটিএফ-৮ না থাকলে ব্রাউজার পুরোনো অ্যাসকি মোডে চলে গিয়ে বাংলা লেখাকে হিজিবিজি প্রশ্নবোধক চিহ্নে নষ্ট করে ফেলে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Mobile Viewport: width=device-width and initial-scale=1.0', bn: '৭. মোবাইল ভিউপোর্ট: width=device-width ও initial-scale=1.0' } },
    {
      type: 'para',
      text: {
        en: 'Without a viewport meta tag, mobile phone browsers pretend the screen is 980 pixels wide and zoom far out. Setting width=device-width enables responsive layouts.',
        bn: 'ভিউপোর্ট ট্যাগ না দিলে মোবাইল ব্রাউজার স্ক্রিনকে ৯৮০ পিক্সেল চওড়া ভেবে জুম-আউট করে রাখে। width=device-width দিলে রেসপন্সিভ ডিজাইন সঠিকভাবে খোলে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'viewport.html',
      code: `<!-- Critical line for every responsive website: -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- Breakdown:
     1. width=device-width sets page width to match device screen in CSS pixels (~390px on phones)
     2. initial-scale=1.0 establishes a 1:1 zoom ratio when the page loads -->`,
      caption: {
        en: 'This single meta tag is the required foundation for all CSS media queries and mobile-friendly responsive websites.',
        bn: 'এই একটি মেটা ট্যাগ সব সিএসএস মিডিয়া কুয়েরি এবং মোবাইল ফ্রেন্ডলি ওয়েবসাইটের প্রধান ভিত্তি।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Page Title: <title> for tabs, bookmarks, and search results', bn: '৮. পেজ টাইটেল: <title> ট্যাব, বুকমার্ক ও সার্চ রেজাল্টের জন্য' } },
    {
      type: 'para',
      text: {
        en: 'The <title> tag defines the document name shown on browser tabs, saved bookmarks, and the blue clickable link headline in search engine search results.',
        bn: '<title> ট্যাগ ব্রাউজার ট্যাবে, বুকমার্কে এবং সার্চ ইঞ্জিন ফলাফলের নীল শিরোনামের লিংকে প্রদর্শিত পেজের নাম নির্ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'title.html',
      code: `<!-- Specific, descriptive page title: -->
<title>PostgreSQL Cluster Scaling Guide | Platform SRE</title>

<!-- Bad titles to avoid:
<title>Untitled Document</title>
<title>Home</title>
<title>Page 1</title>
-->`,
      caption: {
        en: 'Search engines give significant ranking weight to keywords inside <title>. Keep titles under 60 characters so they do not get truncated in search previews.',
        bn: 'সার্চ ইঞ্জিন টাইটেলের ভেতরের শব্দকে বেশি গুরুত্ব দেয়। শিরোনাম ৬০ অক্ষরের মধ্যে রাখুন যাতে সার্চ রেজাল্টে লেখা কেটে না যায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Favicons: <link rel="icon"> for tab branding', bn: '৯. ফেভিকন: ট্যাবের লোগোর জন্য <link rel="icon">' } },
    {
      type: 'para',
      text: {
        en: 'A favicon is the small branding icon displayed next to the page title in browser tabs and history lists, linked via <link rel="icon">.',
        bn: 'ফেভিকন হলো ব্রাউজার ট্যাবে পেজ টাইটেলের পাশে থাকা ছোট ব্র্যান্ডিং লোগো, যা <link rel="icon"> দিয়ে যুক্ত করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'favicon.html',
      code: `<head>
  <!-- Modern standard PNG favicon -->
  <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">

  <!-- Scalable SVG favicon supporting dark and light themes -->
  <link rel="icon" type="image/svg+xml" href="/logo.svg">

  <!-- Apple touch icon for mobile home screen shortcuts -->
  <link rel="apple-touch-icon" href="/apple-touch-icon.png">
</head>`,
      caption: {
        en: 'Modern browsers support SVG favicons, which automatically adapt their colors to match the user operating system dark mode preference.',
        bn: 'আধুনিক ব্রাউজারে এসভিজি ফেভিকন দেওয়া যায়, যা ইউজারের ডার্ক মোড অন থাকলে নিজে থেকেই রঙ পরিবর্তন করে নিতে পারে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. View Source vs Inspect Element: wire bytes vs live DOM', bn: '১০. View Source বনাম Inspect Element: আসল কোড বনাম লাইভ ডম' } },
    {
      type: 'para',
      text: {
        en: 'Right-clicking and choosing "View Page Source" shows the raw HTML bytes sent across the network. Choosing "Inspect" opens the live DOM tree after JavaScript modifications.',
        bn: 'ডান ক্লিক করে "View Page Source" দিলে সার্ভার থেকে আসা আসল এইচটিএমএল দেখা যায়। আর "Inspect" করলে জাভাস্ক্রিপ্ট চলার পরের লাইভ ডম দেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'dom-inspection.html',
      code: `<!-- 1. What View Page Source sees (Raw wire bytes): -->
<div id="container"></div>

<!-- 2. What Inspect Element sees after client JavaScript executes: -->
<div id="container">
  <p class="hydrated">Rendered by client-side JavaScript</p>
</div>`,
      caption: {
        en: 'Inspect Element reflects real-time DOM changes made by JavaScript scripts and CSS rules, whereas View Source is a frozen record of the initial HTTP response.',
        bn: 'Inspect Element স্ক্রিপ্টের মাধ্যমে ডমে ঘটা তাৎক্ষণিক পরিবর্তন দেখায়, আর View Source হলো সার্ভারের পাঠানো প্রাথমিক ফাইলের রেকর্ড।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why the document envelope dictates rendering success', bn: 'কেন ডকুমেন্টের খাম রেন্ডারিংয়ের সাফল্য নির্ধারণ করে' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'The doctype declaration guarantees standardized CSS box model calculations across all browsers', bn: 'ডকটাইপ ঘোষণা সব ব্রাউজারে সিএসএস বক্স মডেলের পরিমাপকে নিখুঁত ও অভিন্ন রাখে' },
        { en: 'UTF-8 metadata protects multilingual content from degrading into illegible question marks', bn: 'ইউটিএফ-৮ মেটাডেটা বহুভাষিক কনটেন্ট নষ্ট হয়ে প্রশ্নবোধক চিহ্নে রূপ নেওয়া প্রতিরোধ করে' },
        { en: 'Viewport directives eliminate tiny unreadable text and horizontal scrolling on smartphones', bn: 'ভিউপোর্ট নির্দেশিকা স্মার্টফোনে অতি ক্ষুদ্র লেখা ও অনুভূমিক স্ক্রলিংয়ের ভোগান্তি দূর করে' },
        { en: 'Descriptive title elements provide high-value signals to search engine indexing algorithms', bn: 'অর্থবহ টাইটেল উপাদান সার্চ ইঞ্জিনের র‍্যাংকিং অ্যালগরিদমে অত্যন্ত কার্যকর ভূমিকা রাখে' },
        { en: 'Favicons establish visual recognition in crowded multi-tab browser workspaces', bn: 'ফেভিকন ব্রাউজারে একসাথে বহু ট্যাব খোলা থাকলে সাইটটিকে সহজে চিনতে সাহায্য করে' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Tag / Directive', bn: 'ট্যাগ / নির্দেশক' }, { en: 'Location', bn: 'অবস্থান' }, { en: 'Purpose', bn: 'উদ্দেশ্য' }, { en: 'Omission Penalty', bn: 'বাদ দিলে ক্ষতি' }],
      rows: [
        [{ en: '<!DOCTYPE html>', bn: '<!DOCTYPE html>' }, { en: 'Line 1 of file', bn: 'ফাইলের প্রথম লাইন' }, { en: 'Trigger modern standards mode', bn: 'আধুনিক স্ট্যান্ডার্ডস মোড সক্রিয় করা' }, { en: 'Browser falls into 1999 quirks mode', bn: 'ব্রাউজার ১৯৯৯ সালের quirks মোডে চলে যায়' }],
        [{ en: '<meta charset="UTF-8">', bn: '<meta charset="UTF-8">' }, { en: 'Inside <head>', bn: '<head>-এর ভেতর' }, { en: 'Decode international characters and emojis', bn: 'আন্তর্জাতিক ভাষা ও ইমোজি প্রদর্শন' }, { en: 'Non-ASCII text renders as broken mojibake', bn: 'বাংলাসহ অন্যান্য লিপি ভেঙে নষ্ট হয়ে যায়' }],
        [{ en: '<meta name="viewport">', bn: '<meta name="viewport">' }, { en: 'Inside <head>', bn: '<head>-এর ভেতর' }, { en: 'Match mobile device width at 1:1 scale', bn: 'মোবাইল স্ক্রিনের মাপে রেসপন্সিভ করা' }, { en: 'Phone renders zoomed-out 980px desktop view', bn: 'মোবাইলে ৯৮০ পিক্সেলের জুম-আউট ভিউ আসে' }],
        [{ en: '<title>', bn: '<title>' }, { en: 'Inside <head>', bn: '<head>-এর ভেতর' }, { en: 'Name tab and search snippet headline', bn: 'ট্যাব ও সার্চ রেজাল্টের শিরোনাম' }, { en: 'Tab displays raw URL or Untitled Document', bn: 'ট্যাবে ফাইলের র পাথ বা শিরোনামহীন দেখায়' }],
        [{ en: '<link rel="icon">', bn: '<link rel="icon">' }, { en: 'Inside <head>', bn: '<head>-এর ভেতর' }, { en: 'Brand browser tab icon', bn: 'ট্যাবের লোগো প্রদর্শন' }, { en: 'Default blank globe placeholder icon', bn: 'ডিফল্ট ফাঁকা গ্লোব আইকন দেখায়' }]
      ],
      caption: { en: 'Essential document envelope declarations and their failure modes.', bn: 'ডকুমেন্টের মৌলিক ঘোষণা এবং সেগুলো বাদ দিলে সৃষ্ট ত্রুটির তালিকা।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to construct a production-ready HTML template', bn: 'কীভাবে প্রোডাকশন-মানের এইচটিএমএল টেমপ্লেট তৈরি করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Declare doctype first', bn: 'শুরুতেই ডকটাইপ লিখুন' }, text: { en: 'Always write <!DOCTYPE html> as the very first line before any blank lines or comments.', bn: 'কোনো ফাঁকা লাইন বা কমেন্ট না রেখে ফাইলের ১ নম্বর লাইনে <!DOCTYPE html> লিখুন।' } },
        { title: { en: 'Set document language', bn: 'ভাষার কোড নির্ধারণ করুন' }, text: { en: 'Specify lang="en" or lang="bn" on the root <html> tag for accessible speech synthesis.', bn: 'স্ক্রিন রিডার ও অনুবাদের সুবিধার্থে <html> ট্যাগে lang="en" বা lang="bn" দিন।' } },
        { title: { en: 'Configure head metadata', bn: 'হেড মেটাডেটা সাজান' }, text: { en: 'Add charset UTF-8 first, followed immediately by the responsive viewport tag.', bn: 'সবার আগে charset UTF-8 এবং ঠিক পরেই রেসপন্সিভ ভিউপোর্ট মেটা ট্যাগ বসান।' } },
        { title: { en: 'Craft an explicit title', bn: 'সুনির্দিষ্ট টাইটেল দিন' }, text: { en: 'Write a unique, concise title combining the page topic and site brand under 60 characters.', bn: '৬০ অক্ষরের মধ্যে পেজের মূল বিষয় ও ব্র্যান্ডের নাম মিলিয়ে অনন্য শিরোনাম লিখুন।' } },
        { title: { en: 'Validate with browser DevTools', bn: 'ডেভটুলস দিয়ে যাচাই করুন' }, text: { en: 'Open DevTools (F12) to ensure there are no parser warnings or broken asset link errors.', bn: 'F12 চেপে ডেভটুলস খুলে নিশ্চিত করুন কনসোলে কোনো লিঙ্ক ভাঙা বা পার্সিং এরর নেই।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'HTML document structural hierarchy', bn: 'এইচটিএমএল ডকুমেন্টের কাঠামোগত স্তরবিন্যাস' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="hierarchy diagram showing doctype leading into html root with head and body child branches"><g font-size="11" fill="currentColor"><rect x="230" y="15" width="200" height="30" rx="4" fill="none" stroke="currentColor"/><text x="330" y="34" text-anchor="middle">&lt;!DOCTYPE html&gt;</text><line x1="330" y1="45" x2="330" y2="70" stroke="currentColor" stroke-width="1.2"/><rect x="230" y="70" width="200" height="30" rx="4" fill="none" stroke="currentColor"/><text x="330" y="89" text-anchor="middle">&lt;html lang="en"&gt;</text><line x1="330" y1="100" x2="160" y2="125" stroke="currentColor" stroke-width="1.2"/><line x1="330" y1="100" x2="500" y2="125" stroke="currentColor" stroke-width="1.2"/><rect x="60" y="125" width="200" height="45" rx="4" fill="none" stroke="currentColor"/><text x="160" y="145" text-anchor="middle">&lt;head&gt; (Envelope)</text><text x="160" y="160" font-size="9" text-anchor="middle">charset, viewport, title, links</text><rect x="400" y="125" width="200" height="45" rx="4" fill="none" stroke="currentColor"/><text x="500" y="145" text-anchor="middle">&lt;body&gt; (Letter)</text><text x="500" y="160" font-size="9" text-anchor="middle">h1, p, img, form, table</text></g></svg>`,
      caption: { en: 'The clean separation of concerns between machine instructions in head and human content in body.', bn: 'হেডে মেশিনের নির্দেশনা এবং বডিতে মানুষের জন্য কনটেন্টের স্পষ্ট ও পরিচ্ছন্ন বিভাজন।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Charset placement tip', bn: 'এনকোডিং বসানোর নিয়ম' },
      text: {
        en: 'The <meta charset="UTF-8"> tag should always sit within the first 1024 bytes of the HTML document so browsers detect the encoding before reading any non-ASCII text.',
        bn: '<meta charset="UTF-8"> ট্যাগটি সর্বদা ডকুমেন্টের প্রথম ১০২৪ বাইটের মধ্যে রাখা উচিত যাতে ব্রাউজার কোনো লেখা পড়ার আগেই এনকোডিং বুঝে নিতে পারে।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The missing viewport mistake', bn: 'ভিউপোর্ট মেটা ট্যাগ বাদ দেওয়ার ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Forgetting the viewport meta tag on modern web pages', bn: 'আধুনিক পেজে ভিউপোর্ট মেটা ট্যাগ না দেওয়া' },
      text: {
        en: 'Forgetting <meta name="viewport" content="width=device-width, initial-scale=1.0"> causes smartphones to render your page as a tiny, zoomed-out 980-pixel poster. Users are forced to pinch-and-zoom horizontally to read text, breaking your responsive CSS completely.',
        bn: '<meta name="viewport" content="width=device-width, initial-scale=1.0"> না দিলে স্মার্টফোন আপনার পেজকে অতি ক্ষুদ্র ৯৮০ পিক্সেলের ডেস্কটপ পোস্টার হিসেবে দেখায়। ব্যবহারকারীদের জুম করে পড়তে হয়, ফলে সব রেসপন্সিভ সিএসএস ডিজাইন সম্পূর্ণ অকেজো হয়ে যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-skeleton-ex1', kind: 'predict', topic: 'html: Document skeleton',
      question: { en: 'What is the required declaration on first line of modern HTML5 documents?', bn: 'আধুনিক এইচটিএমএল৫ ডকুমেন্টের প্রথম লাইনে কোন ঘোষণা থাকা আবশ্যক?' },
      code: `decl = '<!DOCTYPE html>'\nprint(decl)`,
      answer: '<!DOCTYPE html>',
      accept: ['<!DOCTYPE html>', '<!doctype html>', '<!DOCTYPE html> '],
      hint: { en: 'Doctype standards declaration.', bn: 'ডকটাইপ স্ট্যান্ডার্ডস ঘোষণা।' },
      explanation: { en: '<!DOCTYPE html> triggers modern standards mode rendering across all web browsers.', bn: '<!DOCTYPE html> সব ব্রাউজারে আধুনিক স্ট্যান্ডার্ডস মোড সক্রিয় করে।' }
    },
    {
      id: 'html-skeleton-ex2', kind: 'mcq', topic: 'html: Document skeleton',
      question: { en: 'Which element contains machine metadata, charset declarations, and the document title?', bn: 'কোন উপাদানের ভেতর মেটাডেটা, এনকোডিং এবং পেজের টাইটেল থাকে?' },
      options: [
        { en: '<head>', bn: '<head>' },
        { en: '<body>', bn: '<body>' },
        { en: '<footer>', bn: '<footer>' },
        { en: '<section>', bn: '<section>' }
      ],
      answer: 0,
      hint: { en: 'The envelope element.', bn: 'ডকুমেন্টের খাম রূপী উপাদান।' },
      explanation: { en: '<head> holds document metadata, charset, viewport, title, and link tags.', bn: '<head> মেটাডেটা, এনকোডিং, ভিউপোর্ট, টাইটেল ও সিএসএস লিংক ধারণ করে।' }
    },
    {
      id: 'html-skeleton-ex3', kind: 'fill', topic: 'html: Document skeleton',
      question: { en: 'Fill the blank with the attribute that specifies UTF-8 encoding in a meta tag.', bn: 'মেটা ট্যাগে ইউটিএফ-৮ এনকোডিং নির্দিষ্ট করতে শূন্যস্থানে কোন অ্যাট্রিবিউট বসবে?' },
      code: `<meta ________="UTF-8">`,
      answer: 'charset',
      accept: ['charset', 'charset="UTF-8"'],
      hint: { en: 'Short for character set.', bn: 'ক্যারেক্টার সেটের সংক্ষিপ্ত রূপ।' },
      explanation: { en: 'charset="UTF-8" defines the character encoding table for international text.', bn: 'charset="UTF-8" বহুভাষিক টেক্সটের জন্য এনকোডিং নির্ধারণ করে।' }
    },
    {
      id: 'html-skeleton-ex4', kind: 'predict', topic: 'html: Document skeleton',
      question: { en: 'What text does the browser tab display for a document with <title>Status</title>?', bn: '<title>Status</title> যুক্ত ডকুমেন্টের জন্য ব্রাউজার ট্যাবে কী লেখা দেখা যাবে?' },
      code: `tab = 'Status'\nprint(tab)`,
      answer: 'Status',
      accept: ['Status', 'Status '],
      hint: { en: 'The text inside the title tag.', bn: 'টাইটেল ট্যাগের ভেতরের লেখা।' },
      explanation: { en: 'Browsers display the text of the <title> tag in the tab header.', bn: 'ব্রাউজার ট্যাবের শিরোনামে <title> ট্যাগের ভেতরের লেখাটি প্রদর্শন করে।' }
    }
  ],
  quiz: {
    id: 'html-skeleton-quiz',
    title: { en: 'Quiz — The document skeleton', bn: 'কুইজ — ডকুমেন্ট কঙ্কাল' },
    questions: [
      {
        id: 'html-skeleton-q1', kind: 'mcq', topic: 'html: Document skeleton',
        question: { en: 'What happens if the <!DOCTYPE html> declaration is omitted from an HTML file?', bn: 'এইচটিএমএল ফাইল থেকে <!DOCTYPE html> বাদ দিলে কী ঘটে?' },
        options: [
          { en: 'The browser drops into quirks mode with buggy legacy box sizing', bn: 'ব্রাউজার quirks মোডে চলে গিয়ে পুরোনো ত্রুটিপূর্ণ নিয়মে পেজ রেন্ডার করে' },
          { en: 'The browser refuses to load the page completely', bn: 'ব্রাউজার পেজটি লোড করতে পুরোপুরি অস্বীকৃতি জানায়' },
          { en: 'All images are automatically hidden', bn: 'সব ছবি স্বয়ংক্রিয়ভাবে লুকিয়ে যায়' },
          { en: 'The file is converted into plain text', bn: 'ফাইলটি সাধারণ টেক্সটে রূপান্তরিত হয়' }
        ],
        answer: 0,
        hint: { en: 'Legacy quirks mode.', bn: 'পুরোনো quirks মোড।' },
        explanation: { en: 'Without the modern doctype, browsers emulate 1990s quirks mode box sizing.', bn: 'আধুনিক ডকটাইপ না থাকলে ব্রাউজার ১৯৯০-এর দশকের পুরোনো অদ্ভুত আচরণে চলে যায়।' }
      },
      {
        id: 'html-skeleton-q2', kind: 'predict', topic: 'html: Document skeleton',
        question: { en: 'How many children should the root <html> element have?', bn: 'মূল <html> উপাদানের সরাসরি কতটি চাইল্ড থাকা উচিত?' },
        code: `children = ['head', 'body']\nprint(len(children))`,
        answer: '2',
        accept: ['2'],
        hint: { en: 'head and body.', bn: 'head এবং body।' },
        explanation: { en: 'The root <html> element should have exactly two direct children: <head> and <body>.', bn: 'মূল <html> উপাদানের সরাসরি দুটি চাইল্ড থাকে: <head> এবং <body>।' }
      },
      {
        id: 'html-skeleton-q3', kind: 'mcq', topic: 'html: Document skeleton',
        question: { en: 'Why is the viewport meta tag necessary for mobile web design?', bn: 'মোবাইল ওয়েব ডিজাইনে ভিউপোর্ট মেটা ট্যাগ কেন অপরিহার্য?' },
        options: [
          { en: 'It matches page width to device screen width and prevents 980px zoom-out', bn: 'এটি স্ক্রিনের মাপে পেজ সাজায় এবং ৯৮০ পিক্সেলের জুম-আউট হওয়া ঠেকায়' },
          { en: 'It downloads the mobile version of the website from the app store', bn: 'এটি অ্যাপ স্টোর থেকে ওয়েবসাইটের মোবাইল ভার্সন ডাউনলোড করে' },
          { en: 'It disables internet access on mobile devices', bn: 'এটি মোবাইলে ইন্টারনেট সংযোগ বন্ধ করে দেয়' },
          { en: 'It turns HTML elements into PNG images', bn: 'এটি এইচটিএমএল উপাদানগুলোকে ছবিতে রূপান্তর করে' }
        ],
        answer: 0,
        hint: { en: 'Responsive scaling on smartphones.', bn: 'স্মার্টফোনে রেসপন্সিভ স্কেলিং।' },
        explanation: { en: 'The viewport meta tag matches CSS pixel width to device hardware width, enabling responsive CSS.', bn: 'ভিউপোর্ট মেটা ট্যাগ সিএসএস পিক্সেলকে ডিভাইসের স্ক্রিনের সাথে মিলিয়ে রেসপন্সিভ ডিজাইন কার্যকর করে।' }
      },
      {
        id: 'html-skeleton-q4', kind: 'mcq', topic: 'html: Document skeleton',
        question: { en: 'Which element is an example of an HTML void element that does not take a closing tag?', bn: 'কোনটি এইচটিএমএল ভয়েড উপাদানের উদাহরণ যার কোনো ক্লোজিং ট্যাগ লাগে না?' },
        options: [
          { en: '<hr>', bn: '<hr>' },
          { en: '<p>', bn: '<p>' },
          { en: '<div>', bn: '<div>' },
          { en: '<h1>', bn: '<h1>' }
        ],
        answer: 0,
        hint: { en: 'Thematic break horizontal rule.', bn: 'অনুভূমিক দৃশ্যপট পরিবর্তনকারী ট্যাগ।' },
        explanation: { en: '<hr>, <img>, and <br> are void elements and cannot have closing tags or inner children.', bn: '<hr>, <img> ও <br> ভয়েড উপাদান, এদের কোনো ক্লোজিং ট্যাগ বা চাইল্ড থাকে না।' }
      }
    ]
  },
  nextLesson: {
    slug: 'html-text-formatting',
    title: {
      en: 'The Text Palette: Headings, Paragraphs, Lists, and Typography',
      bn: 'টেক্সট প্যালেট: হেডিং, প্যারাগ্রাফ, লিস্ট এবং টাইপোগ্রাফি'
    }
  }
};
