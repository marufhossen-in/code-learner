import type { Lesson } from '../../../lib/types';

/**
 * Ten complete points consolidating the entire w3schools Links, Bookmarks, and Paths curriculum:
 * 1. Hyperlink fundamentals: the <a> tag, href attribute, and destination resolution
 * 2. Link targets and security: target="_blank" with rel="noopener noreferrer"
 * 3. Link colors and interaction states: link, visited, hover, and active
 * 4. Link bookmarks: in-page fragment navigation with id and href="#section"
 * 5. File paths: relative (./, ../, /) vs absolute URLs (https://)
 * 6. Links vs Buttons: architectural roles of <a> for navigation and <button> for actions
 * 7. Mailto and Telephone schemes: mailto: and tel: protocols
 * 8. The download attribute: forcing browser file downloads with custom names
 * 9. Accessible link text: descriptive phrasing and avoiding the "click here" anti-pattern
 * 10. The <base> element: setting a document-wide root path for all relative links
 */
export const linkedWorldLesson: Lesson = {
  slug: 'html-links-urls',
  tech: 'html',
  title: {
    en: 'Links, bookmarks, and file paths, point by point: targets, paths, states, and mailto',
    bn: 'লিংক, বুকমার্ক ও ফাইল পাথ, পয়েন্ট ধরে: টার্গেট, পাথ, স্টেট ও মেইলটু'
  },
  summary: {
    en: 'Hyperlinks form the connective tissue of the World Wide Web. Master absolute vs relative file path resolution, secure new tab windows with rel="noopener", construct in-page bookmarks with fragment identifiers, style link interaction states, handle mailto and tel schemes, and format accessible anchor text.',
    bn: 'হাইপারলিংক ইন্টারনেটের বিশ্বজুড়ে বিস্তৃত সংযোগ জাল গড়ে তোলে। পরম বনাম আপেক্ষিক ফাইল পাথ, rel="noopener" দিয়ে সুরক্ষিত নতুন ট্যাব, ফ্র্যাগমেন্ট দিয়ে পেজের ভেতরের বুকমার্ক, লিংকের বিভিন্ন স্টেট স্টাইলিং, mailto ও tel স্কিম এবং অ্যাক্সেসিবল অ্যাংকর টেক্সটের সঠিক ব্যবহার শিখুন।'
  },
  minutes: 24,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'The hyperlinked web and path resolution mechanics', bn: 'হাইপারলিংক ওয়েব ও পাথ সমাধানের কার্যপদ্ধতি' } },
    {
      type: 'para',
      text: {
        en: 'In this lesson we cover all ten link, path, and bookmark topics from w3schools. Each point provides practical code snippets with exact rendered output comments.',
        bn: 'এই পাঠে আমরা ডাব্লু থ্রি স্কুলের লিংক, পাথ ও বুকমার্কের দশটি বিষয় বিস্তারিতভাবে শিখব। প্রতিটিতে রেন্ডার করা আউটপুট কমেন্টসহ রানযোগ্য কোড রয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'hyperlink reference', def: { en: 'the destination URL specified inside the href attribute of an anchor tag', bn: 'অ্যাংকর ট্যাগের href অ্যাট্রিবিউটে নির্দিষ্ট করা গন্তব্য ঠিকানা' } },
        { term: 'reverse tabnabbing', def: { en: 'a security exploit where an opened blank tab redirects the original parent page', bn: 'একটি নিরাপত্তা ঝুঁকি যেখানে নতুন খোলা ট্যাব মূল পেজটিকে ক্ষতিকর সাইটে রিডাইরেক্ট করে' } },
        { term: 'fragment identifier', def: { en: 'the hash symbol followed by an element id pointing to an in-page scroll target', bn: 'হ্যাশ চিহ্নের পর কোনো আইডির নাম যা পেজের ভেতরের নির্দিষ্ট অবস্থানে স্ক্রল করায়' } },
        { term: 'relative file path', def: { en: 'a file location specified relative to the current working document directory', bn: 'বর্তমান ডকুমেন্টের ফোল্ডারের অবস্থানের ওপর ভিত্তি করে নির্দিষ্ট করা ফাইল পাথ' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. HTML Links: the <a> tag and the href attribute', bn: '১. এইচটিএমএল লিংক: <a> ট্যাগ ও href অ্যাট্রিবিউট' } },
    {
      type: 'para',
      text: {
        en: 'The <a> (anchor) tag creates a hyperlink to another document or web address. The href attribute specifies the destination URL of the link.',
        bn: '<a> (অ্যাংকর) ট্যাগ অন্য কোনো ডকুমেন্ট বা ওয়েব ঠিকানায় হাইপারলিংক তৈরি করে। href অ্যাট্রিবিউট লিংকের গন্তব্য ঠিকানাটি নির্দিষ্ট করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'basic-link.html',
      code: `<!-- Standard external hyperlink -->
<a href="https://example.com/docs">Read Documentation</a>

<!-- Linking an image: clicking the graphic opens the link -->
<a href="/dashboard">
  <img src="/logo.png" alt="Company Dashboard" width="120" height="40">
</a>
<!-- Output: Text and image render as clickable pointer links -->`,
      caption: {
        en: 'An anchor tag without an href attribute creates an unclickable placeholder that does not participate in keyboard tab navigation.',
        bn: 'href ছাড়া <a> ট্যাগ লিখলে তা সাধারণ অপাঠযোগ্য টেক্সটের মতো থাকে এবং কিবোর্ড ট্যাবে ক্লিক করা যায় না।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Link Targets: target="_blank" and rel="noopener noreferrer"', bn: '২. লিংক টার্গেট: target="_blank" এবং rel="noopener noreferrer"' } },
    {
      type: 'para',
      text: {
        en: 'The target attribute controls where the linked document opens. Use target="_blank" to open links in a new browser tab, always pairing it with rel="noopener noreferrer" for security.',
        bn: 'target অ্যাট্রিবিউট নির্ধারণ করে লিংকটি কোথায় খুলবে। নতুন ট্যাবে লিংক খুলতে target="_blank" ব্যবহার করা হয়, তবে নিরাপত্তার জন্য সর্বদা rel="noopener noreferrer" দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'link-targets.html',
      code: `<!-- 1. Default: opens in same window/tab -->
<a href="/profile" target="_self">My Profile</a>

<!-- 2. Secure new tab link -->
<a href="https://external-api.com" target="_blank" rel="noopener noreferrer">
  External API Portal
</a>

<!-- Security protection:
     rel="noopener" prevents the newly opened page from controlling window.opener
     rel="noreferrer" prevents leaking the referrer header to third parties -->`,
      caption: {
        en: 'Failing to provide rel="noopener" when opening external links with target="_blank" exposes users to reverse tabnabbing phishing attacks.',
        bn: 'target="_blank"-এ rel="noopener" না দিলে বাইরের পেজ আপনার সাইটের ট্যাবে ক্ষতিকর ফিশিং পেজ লোড করে দিতে পারে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Link Colors and States: :link, :visited, :hover, and :active', bn: '৩. লিংকের রঙ ও স্টেট: :link, :visited, :hover ও :active' } },
    {
      type: 'para',
      text: {
        en: 'Browsers style links using default states: unvisited (blue), visited (purple), and active (red). CSS customizes these states using pseudoclasses.',
        bn: 'ব্রাউজার ডিফল্টভাবে লিংককে কয়েকটি রঙে দেখায়: নতুন লিংক (নীল), ভিজিট করা লিংক (বেগুনি) ও সক্রিয় লিংক (লাল)। সিএসএস দিয়ে এসব স্টেট সাজানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'link-states.html',
      code: `<style>
  /* Standard order: LVHA (Link, Visited, Hover, Active) */
  a:link {
    color: #2563eb;       /* Unvisited link: blue */
    text-decoration: underline;
  }
  a:visited {
    color: #7c3aed;       /* Visited link: purple */
  }
  a:hover {
    color: #b91c1c;       /* Mouse hover: red */
    text-decoration: none;
  }
  a:active {
    color: #ea580c;       /* Moment of clicking: orange */
  }
</style>`,
      caption: {
        en: 'CSS link pseudoclasses must be declared in strict LVHA order: Link, Visited, Hover, Active. Otherwise, later cascade rules override earlier states.',
        bn: 'সিএসএসে লিংকের স্টেট সর্বদা LVHA (Link, Visited, Hover, Active) ক্রমানুসারে লিখতে হয়, না হলে নিচের রুল উপরেরটাকে নষ্ট করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Link Bookmarks: in-page fragment navigation with #id', bn: '৪. লিংক বুকমার্ক: #id দিয়ে পেজের ভেতরের নির্দিষ্ট স্থানে গমন' } },
    {
      type: 'para',
      text: {
        en: 'Link bookmarks jump to a specific section on the same web page. Give the destination element an id attribute and link to it using a hash symbol href="#section-id".',
        bn: 'লিংক বুকমার্ক একই পেজের নির্দিষ্ট সেকশনে লাফ দিতে সাহায্য করে। গন্তব্য উপাদানে একটি id দিন এবং লিংকে হ্যাশ চিহ্নসহ href="#section-id" লিখুন।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'bookmarks.html',
      code: `<!-- Navigation jump links at top of page -->
<nav>
  <a href="#summary">Jump to Summary</a> |
  <a href="#changelog">Jump to Changelog</a>
</nav>

<!-- Page content spacer -->
<div style="height: 400px;">Scrolling content...</div>

<!-- Destination section with matching id -->
<h2 id="summary">Executive Summary</h2>
<p>Summary of the Q3 infrastructure deployment.</p>

<h2 id="changelog">Changelog</h2>
<p>Version 2.4.0 deployed successfully.</p>

<!-- Link to jump back to top of document: -->
<a href="#top">Back to top</a>`,
      caption: {
        en: 'Fragment identifiers are resolved entirely on the client side by the browser and are never transmitted across the network to web servers.',
        bn: 'হ্যাশযুক্ত বুকমার্ক কেবল ব্রাউজারের ভেতর কাজ করে, এগুলো সার্ভারে নেটওয়ার্ক রিকোয়েস্ট আকারে পাঠানো হয় না।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. File Paths: relative vs absolute directory resolution', bn: '৫. ফাইল পাথ: আপেক্ষিক বনাম পরম ডিরেক্টরি পাথ' } },
    {
      type: 'para',
      text: {
        en: 'Relative file paths point to files in relation to the current page folder. Absolute file paths point to the complete URL address including the domain name.',
        bn: 'আপেক্ষিক ফাইল পাথ বর্তমান ফোল্ডারের অবস্থানের সাপেক্ষে ফাইল খুঁজে নেয়। পরম ফাইল পাথ ডোমেন নামসহ ইন্টারনেটের সম্পূর্ণ ঠিকানা প্রকাশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'file-paths.html',
      code: `<!-- 1. Same folder as current page -->
<a href="contact.html">Contact</a>

<!-- 2. Inside a subfolder named 'docs' -->
<a href="docs/manual.html">Manual</a>

<!-- 3. One folder level up (parent directory) -->
<a href="../index.html">Parent Home</a>

<!-- 4. Root of current website domain -->
<a href="/assets/spec.pdf">Root Specification</a>

<!-- 5. Absolute full web address -->
<a href="https://example.com/index.html">External Home</a>`,
      caption: {
        en: 'Using root-relative paths like /assets/ prevents broken links when moving pages into subdirectories during website reorganizations.',
        bn: '/assets/-এর মতো রুট পাথ ব্যবহার করলে পেজ এক ফোল্ডার থেকে অন্য ফোল্ডারে সরালেও লিংকের সংযোগ অক্ষত থাকে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Links vs Buttons: navigation vs state mutation actions', bn: '৬. লিংক বনাম বাটন: পেজ বদল বনাম কাজের বাটন' } },
    {
      type: 'para',
      text: {
        en: 'Use the <a> anchor tag when navigating to a new URL or document. Use the <button> tag when performing an action, opening a modal, or submitting data.',
        bn: 'নতুন ইউআরএল বা পেজে যেতে <a> অ্যাংকর ট্যাগ ব্যবহার করুন। কোনো কাজ করতে, পপআপ খুলতে বা ফর্ম সাবমিট করতে <button> ট্যাগ ব্যবহার করুন।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'links-vs-buttons.html',
      code: `<!-- Correct: Link takes user to a new location -->
<a href="/settings" class="btn-style">Account Settings</a>

<!-- Correct: Button triggers an action on the current page -->
<button type="button" onclick="openModal()">Open Dialog</button>

<!-- ANTI-PATTERN: Never use anchor tags for JavaScript click events!
<a href="#" onclick="deleteAccount()">Delete Account</a> (BAD!)
-->`,
      caption: {
        en: 'Screen readers announce links as "link" and buttons as "button". Using a link with href="#" for an action confuses keyboard and voice users.',
        bn: 'স্ক্রিন রিডার লিংককে "লিংক" এবং বাটনকে "বাটন" হিসেবে পড়ে। href="#" দিয়ে বোতাম বানালে দৃষ্টিপ্রতিবন্ধী ব্যবহারকারীরা বিভ্রান্ত হন।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Email and Telephone Schemes: mailto: and tel: links', bn: '৭. ইমেইল ও টেলিফোন স্কিম: mailto: এবং tel: লিংক' } },
    {
      type: 'para',
      text: {
        en: 'Anchor tags can launch desktop email clients using mailto: and trigger native smartphone phone dialers using the tel: URL scheme.',
        bn: 'অ্যাংকর ট্যাগ mailto: দিয়ে কম্পিউটারের ইমেইল সফটওয়্যার এবং tel: দিয়ে স্মার্টফোনের ফোন ডায়ালার চালু করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'schemes.html',
      code: `<!-- Launch mail client with prefilled recipient and subject -->
<a href="mailto:support@example.com?subject=Platform%20Inquiry">
  Email Support Team
</a>

<!-- Trigger native smartphone dialer -->
<a href="tel:+8801700000000">
  Call Operations Center
</a>
<!-- Note: Spaces in email subjects must be URL-encoded as %20 -->`,
      caption: {
        en: 'Always include the international country code 880 for Bangladesh in tel: links so mobile devices can dial successfully from any network.',
        bn: 'tel: লিংকে সর্বদা আন্তর্জাতিক কান্ট্রি কোড 880 যুক্ত রাখুন যাতে যে কোনো মোবাইল অপারেটর থেকে কল সহজে যায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. The Download Attribute: forcing file downloads with custom names', bn: '৮. Download অ্যাট্রিবিউট: নির্দিষ্ট নামে ফাইল ডাউনলোড' } },
    {
      type: 'para',
      text: {
        en: 'Adding the download attribute instructs the browser to download the target URL as a local file instead of opening it inside the browser tab.',
        bn: 'download অ্যাট্রিবিউট দিলে ব্রাউজার ফাইলটি নতুন ট্যাবে না খুলে সরাসরি ইউজারের ডিভাইসে ডাউনলোড হিসেবে সেভ করার নির্দেশ পায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'download.html',
      code: `<!-- Browser downloads the file as 'annual-audit-2026.pdf' -->
<a href="/reports/raw_output_id998.pdf" download="annual-audit-2026.pdf">
  Download Audit Report (PDF)
</a>

<!-- Empty download attribute preserves original server filename -->
<a href="/release.zip" download>
  Download Binary Release
</a>`,
      caption: {
        en: 'The download attribute only works for same-origin URLs or files served with content-disposition attachment headers.',
        bn: 'download অ্যাট্রিবিউট কেবল একই ডোমেনের ফাইল অথবা ডাউনলোড হেডারযুক্ত ফাইলের ক্ষেত্রে কাজ করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Accessible Link Text: eliminating the "click here" anti-pattern', bn: '৯. অ্যাক্সেসিবল লিংক টেক্সট: "এখানে ক্লিক করুন" ভুল দূরীকরণ' } },
    {
      type: 'para',
      text: {
        en: 'Screen readers allow users to pull up a list of all links on a page. Links labeled "click here" or "read more" are useless out of context.',
        bn: 'স্ক্রিন রিডার ব্যবহারকারীরা পেজের সব লিংকের আলাদা তালিকা দেখতে পারেন। "এখানে ক্লিক করুন" বা "আরো পড়ুন" লেখা থাকলে লিংকের গন্তব্য বোঝা অসম্ভব হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'accessible-links.html',
      code: `<!-- BAD ACCESSIBILITY: Out of context, user has no idea where this goes -->
<p>To view our pricing plans, <a href="/pricing">click here</a>.</p>

<!-- GOOD ACCESSIBILITY: Descriptive, clear anchor phrasing -->
<p>Review our <a href="/pricing">Cloud Infrastructure Pricing Plans</a>.</p>

<!-- GOOD: Image link with explicit alt description -->
<a href="/status">
  <img src="/pulse.svg" alt="Live Cloud System Status">
</a>`,
      caption: {
        en: 'Write anchor text that explicitly names the target document or resource so the link makes sense when read in complete isolation.',
        bn: 'অ্যাংকর টেক্সটে গন্তব্যের সুনির্দিষ্ট নাম লিখুন যাতে বাক্যের বাকি অংশ ছাড়াও একা পড়লে লিংকের উদ্দেশ্য পরিষ্কার থাকে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. The <base> Element: document-wide URL prefixing', bn: '১০. <base> উপাদান: পেজজুড়ে আপেক্ষিক পাথের মূল ঠিকানা' } },
    {
      type: 'para',
      text: {
        en: 'The <base> tag sits inside <head> and specifies the base URL and target for all relative URLs on the document. It must appear before any link or script tags.',
        bn: '<base> ট্যাগ <head>-এর ভেতর বসে পেজের সব আপেক্ষিক লিংকের শুরুর রুট পাথ ঠিক করে দেয়। এটি সব লিংক বা স্ক্রিপ্টের আগে লিখতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'base-element.html',
      code: `<head>
  <!-- All relative links resolve starting from this base path: -->
  <base href="https://cdn.example.com/assets/" target="_blank">
  <title>Asset Mirror</title>
</head>
<body>
  <!-- Resolves to: https://cdn.example.com/assets/images/logo.png -->
  <img src="images/logo.png" alt="Company Logo">

  <!-- Resolves to: https://cdn.example.com/assets/styles/main.css -->
  <a href="styles/main.css">View Stylesheet</a>
</body>`,
      caption: {
        en: 'Use <base> with caution. A forgotten base tag quietly rewrites every relative path and in-page anchor bookmark on the page.',
        bn: '<base> ব্যবহারের সময় সতর্ক থাকুন। এটি পেজের সব আপেক্ষিক পাথ ও ভেতরের বুকমার্কের হিসাব পুরোপুরি বদলে দেয়।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why hyperlink discipline dictates web architecture', bn: 'কেন লিংকের নিয়মাবলী ওয়েব আর্কিটেকচার নির্ধারণ করে' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'rel="noopener" shuts down dangerous cross-window JavaScript access from external third-party pages', bn: 'rel="noopener" বাইরের অজানা পেজ থেকে ক্ষতিকর উইন্ডো হাইজ্যাকিং পুরোপুরি বন্ধ করে' },
        { en: 'Descriptive anchor copy improves organic search engine keyword indexing and SEO rankings', bn: 'বর্ণনামূলক অ্যাংকর টেক্সট সার্চ ইঞ্জিনে কীওয়ার্ড ইনডেক্সিং এবং এসইও র‍্যাংকিং বাড়ায়' },
        { en: 'In-page bookmarks provide instant keyboard navigation without consuming network round-trip latency', bn: 'পেজের ভেতরের বুকমার্ক নেটওয়ার্কে সময় নষ্ট না করে তাৎক্ষণিকভাবে কাঙ্ক্ষিত অংশে নিয়ে যায়' },
        { en: 'tel: and mailto: protocols integrate mobile web interfaces natively with device telephony apps', bn: 'tel: ও mailto: প্রোটোকল মোবাইল ব্রাউজারকে সরাসরি ফোনের কল ও ইমেইল অ্যাপের সাথে যুক্ত করে' },
        { en: 'Strict LVHA order prevents visited links from getting stuck in incorrect visual color states', bn: 'সঠিক LVHA ক্রম ভিজিট করা লিংকের রঙ আটকে যাওয়া বা ভুল স্টেট দেখানো রোধ করে' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Link Type / Scheme', bn: 'লিংকের ধরন' }, { en: 'Example Syntax', bn: 'সিনট্যাক্স উদাহরণ' }, { en: 'Browser Handling', bn: 'ব্রাউজারের আচরণ' }, { en: 'Primary Use Case', bn: 'প্রধান ব্যবহার' }],
      rows: [
        [{ en: 'Absolute URL', bn: 'পরম ইউআরএল' }, { en: 'href="https://site.com/docs"', bn: 'href="https://site.com/docs"' }, { en: 'Full DNS resolution across network', bn: 'নেটওয়ার্কে পূর্ণ ডিএনএস সমাধান' }, { en: 'Linking to external websites', bn: 'বাইরের ওয়েবসাইটে সংযোগ' }],
        [{ en: 'Root-Relative Path', bn: 'রুট-আপেক্ষিক পাথ' }, { en: 'href="/assets/logo.svg"', bn: 'href="/assets/logo.svg"' }, { en: 'Resolves from website domain root', bn: 'ওয়েবসাইটের মূল ডোমেন থেকে খোঁজা' }, { en: 'Internal website navigation', bn: 'সাইটের ভেতরের লিংক' }],
        [{ en: 'In-Page Bookmark', bn: 'পেজ বুকমার্ক' }, { en: 'href="#summary"', bn: 'href="#summary"' }, { en: 'Smooth scrolls to element with id="summary"', bn: 'id="summary" উপাদানে সরাসরি স্ক্রল' }, { en: 'Tables of contents and top jumps', bn: 'সূচিপত্র ও উপরে ওঠার বাটন' }],
        [{ en: 'Email Protocol', bn: 'ইমেইল স্কিম' }, { en: 'href="mailto:ops@site.com"', bn: 'href="mailto:ops@site.com"' }, { en: 'Launches native desktop mail client', bn: 'ডিভাইসের ইমেইল সফটওয়্যার চালু' }, { en: 'Customer support contact points', bn: 'সাপোর্ট ও যোগাযোগ' }],
        [{ en: 'Telephone Protocol', bn: 'টেলিফোন স্কিম' }, { en: 'href="tel:+8801700000000"', bn: 'href="tel:+8801700000000"' }, { en: 'Opens mobile dialer with prefilled number', bn: 'মোবাইলে ডায়াল প্যাড চালু' }, { en: 'Direct emergency calling', bn: 'জরুরি কল করার লিংক' }]
      ],
      caption: { en: 'Hyperlink scheme protocols, path resolution modes, and target workflows.', bn: 'হাইপারলিংক প্রোটোকল, পাথ সমাধানের মোড এবং তাদের ব্যবহারের ক্ষেত্র।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to audit and maintain site hyperlinks', bn: 'কীভাবে সাইটের লিংক নিরীক্ষণ ও রক্ষণাবেক্ষণ করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Audit external targets', bn: 'বাইরের লিংক যাচাই' }, text: { en: 'Ensure all links using target="_blank" include rel="noopener noreferrer" for security.', bn: 'নিরাপত্তা রক্ষায় target="_blank" থাকা সব লিংকে rel="noopener noreferrer" নিশ্চিত করুন।' } },
        { title: { en: 'Eliminate vague link text', bn: 'অস্পষ্ট টেক্সট পরিহার' }, text: { en: 'Search and replace generic labels like "click here" with descriptive titles naming the destination.', bn: '"এখানে ক্লিক করুন" লেখা বাদ দিয়ে গন্তব্য স্পষ্ট করে এমন অর্থবহ নাম লিখুন।' } },
        { title: { en: 'Verify in-page bookmark IDs', bn: 'বুকমার্কের আইডি মিলিয়ে নিন' }, text: { en: 'Confirm that every href="#hash" matches an existing, unique id attribute on the page.', bn: 'নিশ্চিত করুন প্রতি href="#hash"-এর সাথে পেজের কোনো উপাদানের অনন্য id মিল রয়েছে।' } },
        { title: { en: 'Standardize on root-relative paths', bn: 'রুট পাথ ব্যবহার করুন' }, text: { en: 'Use /folder/page.html for internal assets to protect against folder reorganization breakage.', bn: 'ফোল্ডার স্থানান্তরে লিংক ভাঙা রোধ করতে ভেতরের লিংকে /folder/page.html ব্যবহার করুন।' } },
        { title: { en: 'Test mobile telephone links', bn: 'মোবাইল ফোন লিংক পরীক্ষা' }, text: { en: 'Verify that all tel: numbers include international country codes without special characters.', bn: 'সব tel: লিংকে কান্ট্রি কোড (+880) সঠিকভাবে আছে কিনা পরীক্ষা করুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'URL anatomy and path resolution directions', bn: 'ইউআরএল গঠন ও পাথ সমাধানের গতিপথ' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="diagram of url structure showing protocol host path query and fragment"><g font-size="11" fill="currentColor"><rect x="20" y="25" width="80" height="32" rx="4" fill="none" stroke="currentColor"/><text x="60" y="46" text-anchor="middle">https://</text><rect x="110" y="25" width="130" height="32" rx="4" fill="none" stroke="currentColor"/><text x="175" y="46" text-anchor="middle">example.com</text><rect x="250" y="25" width="120" height="32" rx="4" fill="none" stroke="currentColor"/><text x="310" y="46" text-anchor="middle">/docs/guide</text><rect x="380" y="25" width="130" height="32" rx="4" fill="none" stroke="currentColor"/><text x="445" y="46" text-anchor="middle">?lang=bn&amp;v=2</text><rect x="520" y="25" width="110" height="32" rx="4" fill="none" stroke="currentColor"/><text x="575" y="46" text-anchor="middle">#section-4</text><text x="60" y="75" font-size="9" text-anchor="middle">Scheme</text><text x="175" y="75" font-size="9" text-anchor="middle">Host Domain</text><text x="310" y="75" font-size="9" text-anchor="middle">Path</text><text x="445" y="75" font-size="9" text-anchor="middle">Query String</text><text x="575" y="75" font-size="9" text-anchor="middle">Fragment</text><rect x="100" y="115" width="460" height="45" rx="6" fill="none" stroke="currentColor"/><text x="330" y="135" text-anchor="middle">Browser sends: Scheme + Host + Path + Query to Web Server</text><text x="330" y="150" font-size="9" text-anchor="middle">Fragment (#section-4) stays in client browser for in-page scrolling</text></g></svg>`,
      caption: { en: 'The fragment identifier is resolved strictly on client machines and is never transmitted to the server.', bn: 'ফ্র্যাগমেন্ট (#section-4) ব্রাউজার নিজে ব্যবহার করে এবং সার্ভারে কখনো পাঠানো হয় না।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Button styling tip', bn: 'বাটন ডিজাইনের টিপ' },
      text: {
        en: 'If a navigation link needs to look like a button, style the <a> tag using a CSS class like .btn. Never replace the anchor with a <button> that triggers location.href via JavaScript, which breaks right-click "Open in New Tab".',
        bn: 'কোনো লিংককে বোতামের মতো দেখাতে চাইলে <a> ট্যাগে .btn সিএসএস ক্লাস দিন। কখনোই জাভাস্ক্রিপ্টযুক্ত <button> ব্যবহার করবেন না, কারণ তাতে ডান ক্লিক করে "Open in New Tab" করা যায় না।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The reverse tabnabbing vulnerability', bn: 'রিভার্স ট্যাবন্যাবিং নিরাপত্তা ত্রুটি' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Using target="_blank" without rel="noopener"', bn: 'rel="noopener" ছাড়া target="_blank" ব্যবহারের বিপদ' },
      text: {
        en: 'Opening external links with target="_blank" allows the newly opened third-party page to access window.opener in JavaScript. The malicious site can quietly redirect your original tab to a fake phishing login page without the user noticing. Always write rel="noopener noreferrer".',
        bn: 'বাইরের লিংকে target="_blank" দিলে নতুন পেজটি জাভাস্ক্রিপ্টের window.opener দিয়ে আপনার মূল ট্যাবের নিয়ন্ত্রণ নিতে পারে। ক্ষতিকর সাইটটি আসল ট্যাবে ভুয়া লগইন পেজ খুলে ব্যবহারকারীর পাসওয়ার্ড হাতিয়ে নিতে পারে। তাই সর্বদা rel="noopener noreferrer" লিখুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-links-ex1', kind: 'predict', topic: 'html: Links and URLs',
      question: { en: 'Which security attribute value must be added to links with target="_blank"?', bn: 'target="_blank" থাকা লিংকে কোন নিরাপত্তা অ্যাট্রিবিউট মান যোগ করা আবশ্যক?' },
      code: `attr = 'noopener'\nprint(attr)`,
      answer: 'noopener',
      accept: ['noopener', 'rel="noopener"', 'rel="noopener noreferrer"'],
      hint: { en: 'Prevents window.opener hijacking.', bn: 'উইন্ডো অপেনার হাইজ্যাক প্রতিরোধ করে।' },
      explanation: { en: 'rel="noopener" cuts the JavaScript window.opener bridge between the parent and child tabs.', bn: 'rel="noopener" নতুন পেজ থেকে মূল পেজের উইন্ডো নিয়ন্ত্রণ বিচ্ছিন্ন করে দেয়।' }
    },
    {
      id: 'html-links-ex2', kind: 'mcq', topic: 'html: Links and URLs',
      question: { en: 'Which URL scheme is used to launch a mobile smartphone dialer with a phone number?', bn: 'স্মার্টফোনে সরাসরি কল করার ডায়াল প্যাড খুলতে কোন ইউআরএল স্কিম ব্যবহৃত হয়?' },
      options: [
        { en: 'tel:', bn: 'tel:' },
        { en: 'call:', bn: 'call:' },
        { en: 'phone:', bn: 'phone:' },
        { en: 'dial:', bn: 'dial:' }
      ],
      answer: 0,
      hint: { en: 'Short for telephone.', bn: 'টেলিফোনের সংক্ষিপ্ত রূপ।' },
      explanation: { en: 'The tel: scheme initiates phone calls on mobile devices when tapped.', bn: 'tel: স্কিম মোবাইল ডিভাইসে চাপ দিলে সাথে সাথে কল করার অপশন চালু করে।' }
    },
    {
      id: 'html-links-ex3', kind: 'fill', topic: 'html: Links and URLs',
      question: { en: 'Fill the blank with the attribute that jumps to an element with id="billing".', bn: 'id="billing" থাকা উপাদানে লাফ দিতে href-এ ফাঁকা জায়গায় কী বসবে?' },
      code: `<a href="________">View Billing</a>`,
      answer: '#billing',
      accept: ['#billing', '#'],
      hint: { en: 'The hash symbol fragment prefix.', bn: 'হ্যাশ চিহ্ন ফ্র্যাগমেন্ট প্রিফিক্স।' },
      explanation: { en: 'The hash symbol # indicates an in-page fragment identifier matching an element id.', bn: 'হ্যাশ (#) চিহ্ন পেজের ভেতরের নির্দিষ্ট আইডিতে স্ক্রল করার নির্দেশ দেয়।' }
    },
    {
      id: 'html-links-ex4', kind: 'predict', topic: 'html: Links and URLs',
      question: { en: 'In a relative path, what do two leading dots (../) represent?', bn: 'আপেক্ষিক পাথে শুরুতে দুটি ডট (../) কী নির্দেশ করে?' },
      code: `meaning = 'parent directory'\nprint(meaning)`,
      answer: 'parent directory',
      accept: ['parent directory', 'one level up', 'parent folder'],
      hint: { en: 'One level up in the folder tree.', bn: 'ফোল্ডার ট্রিতে এক স্তর উপরে।' },
      explanation: { en: '../ navigates one directory level up into the parent folder.', bn: '../ ফাইল সিস্টেমে বর্তমান ফোল্ডারের এক ধাপ উপরের প্যারেন্ট ফোল্ডারকে নির্দেশ করে।' }
    }
  ],
  quiz: {
    id: 'html-links-urls-quiz',
    title: { en: 'Quiz — Links, bookmarks, and file paths', bn: 'কুইজ — লিংক, বুকমার্ক ও ফাইল পাথ' },
    questions: [
      {
        id: 'html-links-q1', kind: 'mcq', topic: 'html: Links and URLs',
        question: { en: 'Why is anchor text labeled "click here" considered bad practice?', bn: '"এখানে ক্লিক করুন" লেখা লিংক কেন অনুচিত হিসেবে গণ্য হয়?' },
        options: [
          { en: 'Screen readers read links out of context and users cannot tell where they lead', bn: 'স্ক্রিন রিডার লিংক আলাদা করে পড়ে, ফলে ব্যবহারকারী গন্তব্য বুঝতে পারে না' },
          { en: 'Browsers refuse to render links containing the word click', bn: 'ব্রাউজার click লেখা থাকা লিংক লোড করতে চায় না' },
          { en: 'Click here triggers a 404 error on web servers', bn: 'এটি ওয়েব সার্ভারে ৪০৪ এরর তৈরি করে' },
          { en: 'Links cannot contain English text', bn: 'লিংকে ইংরেজি টেক্সট লেখা নিষিদ্ধ' }
        ],
        answer: 0,
        hint: { en: 'Accessibility and descriptive context.', bn: 'অ্যাক্সেসিবিলিটি ও অর্থবহতা।' },
        explanation: { en: 'Assistive tech lists links independently; descriptive anchor copy explains destination clearly.', bn: 'স্ক্রিন রিডার লিংকের তালিকা আলাদাভাবে দেখায়, তাই অর্থবহ লেখা থাকলে গন্তব্য সহজে বোঝা যায়।' }
      },
      {
        id: 'html-links-q2', kind: 'predict', topic: 'html: Links and URLs',
        question: { en: 'What does the download attribute do when placed on an anchor tag?', bn: 'অ্যাংকর ট্যাগে download অ্যাট্রিবিউট যোগ করলে কী ঘটে?' },
        code: `print('downloads file')`,
        answer: 'downloads file',
        accept: ['downloads file', 'download', 'downloads'],
        hint: { en: 'Saves file locally.', bn: 'ফাইলটি ডিভাইসে সেভ করে।' },
        explanation: { en: 'The download attribute instructs the browser to save the resource locally.', bn: 'download অ্যাট্রিবিউট ব্রাউজারকে ফাইলটি না খুলে সরাসরি সেভ করার নির্দেশ দেয়।' }
      },
      {
        id: 'html-links-q3', kind: 'mcq', topic: 'html: Links and URLs',
        question: { en: 'What is the correct declaration order for CSS link pseudoclasses?', bn: 'সিএসএসে লিংকের স্টেট লেখার সঠিক ক্রম কোনটি?' },
        options: [
          { en: 'link, visited, hover, active (LVHA)', bn: 'লিংক, ভিজিটেড, হোভার, অ্যাক্টিভ (LVHA ক্রম)' },
          { en: 'hover, link, active, visited', bn: 'হোভার, লিংক, অ্যাক্টিভ, ভিজিটেড' },
          { en: 'active, hover, visited, link', bn: 'অ্যাক্টিভ, হোভার, ভিজিটেড, লিংক' },
          { en: 'visited, active, link, hover', bn: 'ভিজিটেড, অ্যাক্টিভ, লিংক, হোভার' }
        ],
        answer: 0,
        hint: { en: 'Remember the acronym LVHA.', bn: 'LVHA শব্দটি মনে রাখুন।' },
        explanation: { en: 'CSS link states must follow LVHA order so earlier rules do not override later interactions.', bn: 'ক্যাসকেডিং নিয়ম ঠিক রাখতে সিএসএসে সর্বদা LVHA ক্রম মেনে চলতে হয়।' }
      },
      {
        id: 'html-links-q4', kind: 'mcq', topic: 'html: Links and URLs',
        question: { en: 'Does the fragment identifier portion of a URL (#section) get sent to the web server?', bn: 'ইউআরএলের হ্যাশযুক্ত অংশ (#section) কি ওয়েব সার্ভারে পাঠানো হয়?' },
        options: [
          { en: 'No, it is strictly resolved client-side by the browser', bn: 'না, এটি কেবল ব্রাউজারের ভেতর ক্লায়েন্ট প্রান্তে কাজ করে' },
          { en: 'Yes, it is sent in the HTTP query string', bn: 'হ্যাঁ, এটি এইচটিটিপি কোয়েরি স্ট্রিংয়ে যায়' },
          { en: 'Yes, but only for HTTPS connections', bn: 'হ্যাঁ, তবে কেবল এইচটিটিপিএস লিংকে' },
          { en: 'Only when cookies are enabled', bn: 'কেবল কুকি চালু থাকলে যায়' }
        ],
        answer: 0,
        hint: { en: 'Client-side only navigation.', bn: 'কেবল ক্লায়েন্ট প্রান্তের নেভিগেশন।' },
        explanation: { en: 'The browser strips fragment identifiers (#hash) before sending the HTTP request to the server.', bn: 'সার্ভারে রিকোয়েস্ট পাঠানোর আগে ব্রাউজার হ্যাশ অংশটুকু আলাদা করে নিজের কাছে রেখে দেয়।' }
      }
    ]
  },
  nextLesson: {
    slug: 'html-tables-lists',
    title: {
      en: 'The Table Archive: Tables, Lists, and Data Grid Semantics',
      bn: 'টেবিল আর্কাইভ: টেবিল, লিস্ট এবং ডেটা গ্রিড সিমান্টিক'
    }
  }
};
