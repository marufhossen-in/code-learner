import type { Lesson } from '../../../lib/types';

/**
 * Ten complete points consolidating the entire w3schools Semantics, Layout, and Block/Inline curriculum:
 * 1. Semantic Elements: meaning vs div-soup
 * 2. <header> and <footer>: page banners and registry footers
 * 3. <nav>: primary navigation districts and skip links
 * 4. <main>: the one-king main content area for reader mode
 * 5. <article>: self-contained, distributable cards and posts
 * 6. <section>: thematic chapters requiring explicit headings
 * 7. <aside>: tangential sidebars and complementary callouts
 * 8. Block vs Inline: display behaviors, box models, and line flows
 * 9. <div> and <span>: non-semantic styling hooks and structural grouping
 * 10. HTML Classes and IDs: reusable class names vs unique document IDs
 */
export const landmarkLayerLesson: Lesson = {
  slug: 'html-semantics-layout',
  tech: 'html',
  title: {
    en: 'Semantics, layout, and landmarks, point by point: header, nav, main, article, section, div',
    bn: 'সিমান্টিকস, লেআউট ও ল্যান্ডমার্ক, পয়েন্ট ধরে: হেডার, ন্যাভ, মেইন, আর্টিকেল, সেকশন, ডিভ'
  },
  summary: {
    en: 'Move beyond uninformative div-soup to build accessible, searchable page layouts. Master semantic landmark elements, distinguish between self-contained articles and thematic sections, control block and inline flow behaviors, use div and span responsibly as CSS hooks, and manage classes versus unique IDs.',
    bn: 'অর্থহীন div-সুপ পরিহার করে অ্যাক্সেসিবল ও সার্চ-বান্ধব পেজ লেআউট তৈরি করুন। সিমান্টিক ল্যান্ডমার্ক উপাদান, স্বয়ংসম্পূর্ণ আর্টিকেল বনাম থিম্যাটিক সেকশনের পার্থক্য, ব্লক ও ইনলাইনের স্বভাব, ডিভ ও স্প্যানের পরিমিত ব্যবহার এবং ক্লাস বনাম অনন্য আইডির সঠিক নিয়ম শিখুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'The landmark blueprint of modern web architecture', bn: 'আধুনিক ওয়েব লেআউটের সিমান্টিক মানচিত্র' } },
    {
      type: 'para',
      text: {
        en: 'In this lesson we cover all ten semantic layout and element hierarchy topics from w3schools. Each point provides clear runnable markup with exact rendered structure comments.',
        bn: 'এই পাঠে আমরা ডাব্লু থ্রি স্কুলের সিমান্টিক লেআউট ও উপাদান কাঠামোর দশটি বিষয় বিস্তারিতভাবে শিখব। প্রতিটিতে রেন্ডার করা আউটপুট কমেন্টসহ রানযোগ্য কোড রয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'semantic element', def: { en: 'an element that clearly communicates its meaning to both browser and developer', bn: 'যে উপাদান ব্রাউজার ও ডেভেলপার উভয়ের কাছে নিজের সুনির্দিষ্ট অর্থ প্রকাশ করে' } },
        { term: 'block element', def: { en: 'an element that begins on a new line and expands to fill the available width', bn: 'যে উপাদান নতুন লাইনে শুরু হয় এবং ডানে সম্পূর্ণ খালি জায়গা দখল করে' } },
        { term: 'inline element', def: { en: 'an element that flows within running text and only occupies content width', bn: 'যে উপাদান লেখার ভেতরে স্বাভাবিকভাবে বসে এবং কেবল নিজের কনটেন্টের মাপের জায়গা নেয়' } },
        { term: 'skip link', def: { en: 'an accessible anchor allowing keyboard and screen-reader users to bypass repeated menus', bn: 'বারবার আসা মেনু এড়িয়ে সরাসরি মূল কনটেন্টে যাওয়ার অ্যাক্সেসিবল লিংক' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. Semantic Elements: meaning vs div-soup', bn: '১. সিমান্টিক উপাদান: অর্থবহ ট্যাগ বনাম ডিভ-সুপ' } },
    {
      type: 'para',
      text: {
        en: 'Before HTML5, web pages relied entirely on anonymous <div> tags with custom class names. Semantic elements inform search engines, screen readers, and browsers about the exact structural role of each content area.',
        bn: 'এইচটিএমএল৫ আসার আগে পেজের সব কিছু অর্থহীন <div> ট্যাগে ক্লাস বসিয়ে করা হতো। সিমান্টিক উপাদান সার্চ ইঞ্জিন ও স্ক্রিন রিডারকে প্রতিটি অংশের সুনির্দিষ্ট ভূমিকা জানিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'semantic-comparison.html',
      code: `<!-- Old Div-Soup approach (1999 era, zero machine meaning):
<div id="header">
  <div class="menu">...</div>
</div>
<div id="content">...</div>
<div id="footer">...</div>
-->

<!-- Modern Semantic HTML5 Architecture: -->
<header>
  <nav>...</nav>
</header>
<main>
  <article>...</article>
</main>
<footer>...</footer>`,
      caption: {
        en: 'Semantic tags improve search engine indexing, enable screen reader landmark jumping, and reduce styling maintenance costs.',
        bn: 'সিমান্টিক ট্যাগ সার্চ ইঞ্জিন অপটিমাইজেশন বৃদ্ধি করে, স্ক্রিন রিডারের চলাচল সহজ করে এবং কোডের রক্ষণাবেক্ষণ খরচ কমায়।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. <header> and <footer>: page banners and local registries', bn: '২. <header> ও <footer>: পেজ ব্যানার ও তথ্য পাদটীকা' } },
    {
      type: 'para',
      text: {
        en: 'The <header> represents introductory content or navigational links. The <footer> contains copyright notices, authorship details, and legal disclaimers. Both can repeat inside individual articles.',
        bn: '<header> পরিচিতিমূলক লেখা বা নেভিগেশন লিংক ধরে রাখে। <footer> কপিরাইট, লেখকের নাম ও আইনি নোটিশ বহন করে। উভয় ট্যাগই আর্টিকেলের ভেতরে বারবার বসতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'header-footer.html',
      code: `<!-- 1. Top-level page header -->
<header>
  <h1>Cloud Platform Operations</h1>
  <p>Engineering Reliability Portal</p>
</header>

<main>
  <!-- 2. Section or Article local header and footer -->
  <article>
    <header>
      <h2>PostgreSQL Failover Incident</h2>
      <p>Published: 2026-09-26 by SRE Team</p>
    </header>
    <p>Detailed analysis of primary database election latency.</p>
    <footer>
      <p>Tags: database, replication, high-availability</p>
    </footer>
  </article>
</main>

<!-- 3. Top-level page footer -->
<footer>
  <p>&copy; 2026 Platform Engineering. All rights reserved.</p>
</footer>`,
      caption: {
        en: 'Header and footer are context-dependent roles, not page-level singletons. They belong to their nearest article or section parent.',
        bn: 'হেডার ও ফুটার পেজে মাত্র একবার বসার ট্যাগ নয়; এরা যে আর্টিকেল বা সেকশনে থাকে তারই সূচনা ও সমাপ্তি প্রকাশ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. <nav>: primary navigation districts and skip links', bn: '৩. <nav>: প্রধান নেভিগেশন জোন ও স্কিপ লিংক' } },
    {
      type: 'para',
      text: {
        en: 'The <nav> tag designates major navigation link blocks. Reserve <nav> strictly for primary site menus, breadcrumb trails, or tables of contents, not every footer link collection.',
        bn: '<nav> ট্যাগ প্রধান নেভিগেশন লিংক গুচ্ছ নির্দেশ করে। সাইটের মূল মেনু, ব্রেডক্রাম্ব বা সূচিপত্রে <nav> দিন; ফুটারের প্রতিটি ছোটখাটো লিংকে nav দেওয়ার প্রয়োজন নেই।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'nav-landmarks.html',
      code: `<!-- Accessible Skip Link: First focusable element for keyboard users -->
<a href="#main-content" class="skip-link">Skip to main content</a>

<!-- Primary Site Navigation -->
<nav aria-label="Primary Site Navigation">
  <ul>
    <li><a href="/home">Home</a></li>
    <li><a href="/clusters">Clusters</a></li>
    <li><a href="/metrics">Metrics</a></li>
  </ul>
</nav>

<!-- Secondary Breadcrumb Navigation -->
<nav aria-label="Breadcrumb Trail">
  <ol>
    <li><a href="/clusters">Clusters</a></li>
    <li><a href="/clusters/ap-south-1">ap-south-1</a></li>
    <li>Production DB</li>
  </ol>
</nav>`,
      caption: {
        en: 'When a page features multiple <nav> landmarks, distinguish them for screen readers by adding unique aria-label descriptions.',
        bn: 'পেজে একাধিক <nav> থাকলে স্ক্রিন রিডারকে আলাদা করে বোঝাতে aria-label দিয়ে পরিচয় লিখে দিন।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. <main>: the unique central content of the document', bn: '৪. <main>: ডকুমেন্টের একক মূল কনটেন্ট এলাকা' } },
    {
      type: 'para',
      text: {
        en: 'The <main> element houses the unique, central topic of the web document. There must not be more than one visible <main> element per page, and it must never be nested inside header, nav, or footer.',
        bn: '<main> উপাদান পেজের মূল ও অনন্য বিষয়বস্তু ধারণ করে। এক পৃষ্ঠায় একটির বেশি দৃশ্যমান <main> থাকতে পারে না এবং এটি কখনো header, nav বা footer-এর ভেতরে ঢোকানো যাবে না।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'main-landmark.html',
      code: `<header>
  <nav><a href="/">Home</a></nav>
</header>

<!-- Exactly one <main> per document -->
<main id="main-content">
  <h1>Kubernetes Cluster Deployment</h1>
  <p>Cluster provisioning steps completed in region ap-south-1.</p>
</main>

<footer>
  <p>System Status: Green</p>
</footer>`,
      caption: {
        en: 'Browser reader-mode features and accessibility skip links rely strictly on <main> to isolate article copy from surrounding navigation clutter.',
        bn: 'ব্রাউজারের রিডার-মোড এবং স্কিপ-লিংক <main> ট্যাগের সাহায্যেই সাইডবার বা মেনুর জঞ্জাল বাদ দিয়ে মূল লেখাটি সামনে আনে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. <article>: self-contained, distributable entities', bn: '৫. <article>: স্বয়ংসম্পূর্ণ ও বণ্টনযোগ্য কনটেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'An <article> represents an independent, self-contained piece of content that makes complete sense when syndicated on its own, such as blog posts, news stories, or forum comments.',
        bn: '<article> এমন স্বাধীন কনটেন্ট প্রকাশ করে যা পেজ থেকে আলাদা করে অন্য কোথাও প্রকাশ করলেও সম্পূর্ণ অর্থ প্রকাশ করে, যেমন ব্লগ পোস্ট বা ফোরামের মন্তব্য।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'article-nesting.html',
      code: `<!-- Parent Article: Independent Blog Post -->
<article class="post">
  <h2>Understanding TCP Slow Start</h2>
  <p>Congestion windows double every RTT until ssthresh is reached.</p>

  <section class="comments">
    <h3>Reader Comments</h3>
    <!-- Nested Child Article: Each comment is also a self-contained entity -->
    <article class="comment">
      <p>Great explanation! Does HTTP/3 over QUIC use the same slow start?</p>
      <footer>— Comment by Nadia</footer>
    </article>
  </section>
</article>`,
      caption: {
        en: 'The test of an article: could this block be distributed via RSS feed or syndicated on another site and still remain completely intelligible? If yes, it is an article.',
        bn: 'আর্টিকেল চেনার পরীক্ষা: এই অংশটুকু আরএসএস ফিডে বা অন্য সাইটে একাকী পাঠালেও কি পুরো অর্থ স্পষ্ট থাকবে? উত্তর হ্যাঁ হলে এটি একটি <article>।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. <section>: thematic chapters requiring explicit headings', bn: '৬. <section>: শিরোনামযুক্ত সুনির্দিষ্ট বিষয়ভিত্তিক অধ্যায়' } },
    {
      type: 'para',
      text: {
        en: 'A <section> groups thematically related content together, typically functioning as a chapter or major tab of a document. Every valid section must include an explicit heading tag.',
        bn: '<section> কোনো লেখার বিষয়ভিত্তিক অধ্যায় বা খণ্ডকে একত্রিত করে। প্রতিটি বৈধ সেকশনে নিজস্ব একটি হেডিং ট্যাগ থাকা আবশ্যক।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'section-heading.html',
      code: `<article>
  <h1>Database Performance Optimization</h1>

  <!-- Section 1: Requires its own heading -->
  <section>
    <h2>1. Indexing Strategies</h2>
    <p>B-Tree indexes reduce disk seek latency from O(n) to O(log n).</p>
  </section>

  <!-- Section 2: Requires its own heading -->
  <section>
    <h2>2. Connection Pooling</h2>
    <p>PgBouncer maintains warm connections to prevent TCP handshake storms.</p>
  </section>
</article>
<!-- Rule: If a section has no heading, it is simply a styling <div> in disguise -->`,
      caption: {
        en: 'If removing a section heading leaves the block without an identifiable theme, it is a generic styling container and should be written as a <div> instead.',
        bn: 'শিরোনাম সরিয়ে নিলে যদি সেকশনের কোনো নির্দিষ্ট পরিচয় না থাকে, তবে সেটি সেকশন নয়—বরং সাধারণ স্টাইলিং <div>।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. <aside>: tangential sidebars and complementary callouts', bn: '৭. <aside>: পার্শ্ববর্তী সাইডবার ও সম্পূরক কনটেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'The <aside> element marks content that is indirectly related to surrounding text, such as sidebars, pull quotes, related reading links, or glossary callouts.',
        bn: '<aside> মূল প্রসঙ্গের সাথে পরোক্ষভাবে যুক্ত তথ্য ধারণ করে, যেমন সাইডবার, উদ্ধৃতি বক্স, সম্পর্কিত লিংক বা সহায়ক ব্যাখ্যা।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'aside-sidebar.html',
      code: `<main>
  <article>
    <h2>Migrating from HTTP/2 to HTTP/3</h2>
    <p>Deploying UDP listeners for QUIC transport on port 443.</p>

    <!-- In-article tangential note -->
    <aside>
      <h3>Did you know?</h3>
      <p>QUIC was originally designed by Google in 2012 before IETF standardization.</p>
    </aside>

    <p>Performance metrics show 30% reduction in handshake latency.</p>
  </article>

  <!-- Page-level sidebar -->
  <aside class="sidebar">
    <h3>Related Case Studies</h3>
    <ul>
      <li><a href="/case-1">CDN Anycast Routing</a></li>
      <li><a href="/case-2">TLS 1.3 0-RTT Resumption</a></li>
    </ul>
  </aside>
</main>`,
      caption: {
        en: 'Screen readers allow users to skip aside landmarks when focusing strictly on the primary narrative text.',
        bn: 'স্ক্রিন রিডার ব্যবহারকারীরা মূল লেখা পড়ার সময় ইচ্ছে করলে aside অংশটিকে এড়িয়ে যেতে পারেন।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Block vs Inline: display behaviors and flow models', bn: '৮. ব্লক বনাম ইনলাইন: ডিসপ্লে স্বভাব ও লাইন প্রবাহ' } },
    {
      type: 'para',
      text: {
        en: 'Block elements always begin on a fresh line and span the full available container width. Inline elements flow smoothly within sentences, occupying only content width.',
        bn: 'ব্লক উপাদান সর্বদা নতুন লাইনে শুরু হয় এবং পুরো প্রস্থ দখল করে। ইনলাইন উপাদান লেখার ভেতরে স্বাভাবিকভাবে বসে এবং কেবল নিজের কনটেন্টের মাপে জায়গা নেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'block-vs-inline.html',
      code: `<!-- Block elements: start on new line, fill full width -->
<div>Block 1: Takes entire line width</div>
<p>Block 2: Takes entire line width</p>

<!-- Inline elements: flow side by side inside text -->
<p>
  Here is regular text with
  <span style="color: blue;">inline span</span>,
  <a href="/link">inline link</a>, and
  <strong>inline bold text</strong>
  all continuing on the exact same line.
</p>

<!-- Box Model Difference:
     Block elements accept width, height, top/bottom margins, and padding.
     Inline elements ignore top/bottom width, height, and margins. -->`,
      caption: {
        en: 'Never nest block-level elements like <div> or <p> inside inline elements like <span> or <a>. Valid document hierarchy requires blocks to enclose inlines.',
        bn: 'ইনলাইন উপাদানের (যেমন <span> বা <a>) ভেতর কখনো ব্লক উপাদান (যেমন <div> বা <p>) ঢুকাবেন না। ব্লক উপাদানের ভেতরেই ইনলাইন থাকা সমীচীন।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. <div> and <span>: non-semantic styling hooks', bn: '৯. <div> ও <span>: অর্থহীন কিন্তু দরকারী সিএসএস হুক' } },
    {
      type: 'para',
      text: {
        en: '<div> is a generic block container and <span> is a generic inline container. Both convey zero semantic meaning, making them the lawful choice strictly for styling and JavaScript hooks.',
        bn: '<div> হলো সাধারণ ব্লক ধারক এবং <span> হলো সাধারণ ইনলাইন ধারক। এদের কোনো নিজস্ব অর্থ নেই, তাই কেবল সিএসএস ডিজাইন ও জাভাস্ক্রিপ্ট হুক হিসেবে এদের ব্যবহার বৈধ।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'div-span.html',
      code: `<!-- <div> used purely as a CSS Flexbox grid layout wrapper: -->
<div class="card-grid">
  <article class="card">
    <h3>Worker Node 1</h3>
    <!-- <span> used strictly to apply a badge color hook: -->
    <p>Status: <span class="badge badge-green">Healthy</span></p>
  </article>

  <article class="card">
    <h3>Worker Node 2</h3>
    <p>Status: <span class="badge badge-yellow">Degraded</span></p>
  </article>
</div>`,
      caption: {
        en: 'Because div and span promise no semantic contracts to assistive technologies, using them purely for visual alignment and CSS flex layouts never misleads crawlers.',
        bn: 'যেহেতু div ও span কোনো সিমান্টিক অর্থ প্রকাশ করে না, তাই শুধুই সিএসএস ফ্লেক্সবক্স বা ডিজাইনের জন্য এদের ব্যবহার করলে সার্চ ইঞ্জিন বিভ্রান্ত হয় না।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. HTML Classes and IDs: reusable styles vs unique nodes', bn: '১০. এইচটিএমএল ক্লাস ও আইডি: পুনর্ব্যবহারযোগ্য নাম বনাম অনন্য নোড' } },
    {
      type: 'para',
      text: {
        en: 'The class attribute applies reusable style names across multiple elements. The id attribute defines a strictly unique document identifier for anchors and targeted scripts.',
        bn: 'class অ্যাট্রিবিউট একাধিক উপাদানে একই স্টাইল প্রয়োগ করতে ব্যবহৃত হয়। id অ্যাট্রিবিউট পেজের কেবল একটি উপাদানের জন্য অনন্য নাম নির্ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'classes-and-ids.html',
      code: `<!-- Classes: Multiple elements can share the same class name -->
<!-- Elements can also have multiple space-separated classes -->
<button class="btn btn-primary btn-large">Deploy</button>
<button class="btn btn-secondary">Cancel</button>

<!-- ID: Must be completely UNIQUE across the entire HTML document -->
<div id="deployment-progress-bar" class="progress-bar">
  <span class="fill"></span>
</div>

<!-- JavaScript targeting:
     document.querySelectorAll('.btn') -> matches both buttons
     document.getElementById('deployment-progress-bar') -> matches single unique node -->`,
      caption: {
        en: 'Reusing duplicate IDs across multiple elements breaks HTML validation, corrupts in-page hash links, and causes subtle JavaScript document.getElementById query bugs.',
        bn: 'একই id একাধিক উপাদানে দিলে এইচটিএমএল ভ্যালিডেশন ভাঙে, পেজ বুকমার্ক নষ্ট হয় এবং জাভাস্ক্রিপ্টের কোড ভুল নোড খুঁজে পায়।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why semantic landmarks govern real-world accessibility', bn: 'বাস্তব ক্ষেত্রে সিমান্টিক ল্যান্ডমার্কের অপরিহার্যতা' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'Assistive screen readers allow blind users to jump directly between landmarks like main and nav', bn: 'স্ক্রিন রিডার দৃষ্টিপ্রতিবন্ধী ব্যবহারকারীদের সরাসরি main ও nav-এর মতো ল্যান্ডমার্কে লাফ দেওয়ার সুযোগ দেয়' },
        { en: 'Automated search crawlers weight text inside article and main higher than footers and sidebars', bn: 'সার্চ ইঞ্জিন রোবট ফুটার বা সাইডবারের চেয়ে article ও main-এর ভেতরের লেখাকে বেশি গুরুত্ব দেয়' },
        { en: 'Browser reader modes extract clean article copy instantly when properly wrapped in article and main', bn: 'article ও main সঠিকভাবে সাজানো থাকলে ব্রাউজারের রিডার মোড তাৎক্ষণিক বিজ্ঞাপনহীন রিডিং ভিউ বানাতে পারে' },
        { en: 'Eliminating div-soup makes large codebases drastically easier for engineering teams to maintain', bn: 'অপ্রয়োজনীয় div-সুপ দূর করলে বড় সফটওয়্যার টিমের জন্য কোড রক্ষণাবেক্ষণ অনেক সহজ হয়' },
        { en: 'Unique IDs enable robust in-page bookmarking and targeted end-to-end automated test suites', bn: 'অনন্য আইডি পেজের নিখুঁত বুকমার্কিং এবং স্বয়ংক্রিয় সফটওয়্যার টেস্টিং নিশ্চিত করে' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Landmark Element', bn: 'ল্যান্ডমার্ক উপাদান' }, { en: 'Structural Role', bn: 'কাঠামোগত ভূমিকা' }, { en: 'Quantity per Page', bn: 'প্রতি পেজে সংখ্যা' }, { en: 'Heading Requirement', bn: 'হেডিংয়ের প্রয়োজনীয়তা' }],
      rows: [
        [{ en: '<header>', bn: '<header>' }, { en: 'Introductory banner or title block', bn: 'পরিচিতিমূলক ব্যানার বা শিরোনাম ব্লক' }, { en: 'Multiple allowed (page & articles)', bn: 'একাধিক বৈধ (পেজ ও আর্টিকেলে)' }, { en: 'Recommended', bn: 'সুপারিশকৃত' }],
        [{ en: '<nav>', bn: '<nav>' }, { en: 'Major navigation link district', bn: 'প্রধান নেভিগেশন লিংক জোন' }, { en: 'Multiple allowed (distinguish with aria-label)', bn: 'একাধিক বৈধ (aria-label দিয়ে চিহ্নিত)' }, { en: 'Optional', bn: 'ঐচ্ছিক' }],
        [{ en: '<main>', bn: '<main>' }, { en: 'Central unique content of document', bn: 'ডকুমেন্টের একক মূল বিষয়বস্তু' }, { en: 'Exactly 1 visible per page', bn: 'প্রতি পেজে কেবল ১টি দৃশ্যমান' }, { en: 'Required', bn: 'বাধ্যতামূলক' }],
        [{ en: '<article>', bn: '<article>' }, { en: 'Self-contained syndicated copy', bn: 'স্বয়ংসম্পূর্ণ ও বণ্টনযোগ্য কনটেন্ট' }, { en: 'Multiple allowed', bn: 'একাধিক বৈধ' }, { en: 'Required', bn: 'বাধ্যতামূলক' }],
        [{ en: '<section>', bn: '<section>' }, { en: 'Thematic chapter of document', bn: 'বিষয়ভিত্তিক সুনির্দিষ্ট অধ্যায়' }, { en: 'Multiple allowed', bn: 'একাধিক বৈধ' }, { en: 'Required (strictly enforced)', bn: 'বাধ্যতামূলক (কড়াকড়ি)' }],
        [{ en: '<aside>', bn: '<aside>' }, { en: 'Tangential or complementary sidebar', bn: 'পরোক্ষ বা সম্পূরক সাইডবার' }, { en: 'Multiple allowed', bn: 'একাধিক বৈধ' }, { en: 'Recommended', bn: 'সুপারিশকৃত' }]
      ],
      caption: { en: 'Structural specifications for HTML5 landmark elements and heading rules.', bn: 'এইচটিএমএল৫ ল্যান্ডমার্ক উপাদান ও তাদের হেডিং সংক্রান্ত নিয়মাবলীর তালিকা।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to structure semantic responsive page layouts', bn: 'কীভাবে সিমান্টিক রেসপন্সিভ পেজ লেআউট তৈরি করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Lay down landmark regions', bn: 'ল্যান্ডমার্ক অঞ্চল ঠিক করুন' }, text: { en: 'Frame the document using header, nav, main, and footer before writing any styling code.', bn: 'কোনো সিএসএস লেখার আগেই পেজটিকে header, nav, main ও footer দিয়ে সাজিয়ে নিন।' } },
        { title: { en: 'Enclose main content in main', bn: 'মেইন কনটেন্ট মেইনে রাখুন' }, text: { en: 'Ensure there is exactly one visible <main> tag and that it contains the primary topic.', bn: 'নিশ্চিত করুন পেজে একটিমাত্র দৃশ্যমান <main> ট্যাগ আছে এবং তা মূল বিষয়কে ধারণ করছে।' } },
        { title: { en: 'Apply out-of-context article rule', bn: 'আর্টিকেল নিয়ম মেনে চলুন' }, text: { en: 'Wrap cards and blog posts in <article> only if they remain fully understandable on their own.', bn: 'পোস্ট বা কার্ড একা আলাদা করলেও অর্থ স্পষ্ট থাকলে কেবল তখনই <article> ব্যবহার করুন।' } },
        { title: { en: 'Attach headings to sections', bn: 'সেকশনে হেডিং দিন' }, text: { en: 'Verify that every <section> element starts with an explicit heading level <h2> or <h3>.', bn: 'নিশ্চিত করুন প্রতিটি <section> উপাদানে নিজস্ব <h2> বা <h3> হেডিং ট্যাগ উপস্থিত রয়েছে।' } },
        { title: { en: 'Reserve div for flexbox and grid', bn: 'ডিভ শুধু ডিজাইনে রাখুন' }, text: { en: 'Use <div> strictly as structural wrappers for CSS Flexbox and Grid layouts without text semantics.', bn: '<div> উপাদানকে কেবল সিএসএস ফ্লেক্সবক্স ও গ্রিড লেআউট তৈরির ধারক হিসেবে ব্যবহার করুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Semantic landmark layout grid hierarchy', bn: 'সিমান্টিক ল্যান্ডমার্ক লেআউট গ্রিড কাঠামো' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="layout blueprint showing header nav main with articles and aside and footer"><g font-size="11" fill="currentColor"><rect x="20" y="15" width="620" height="30" rx="4" fill="none" stroke="currentColor"/><text x="330" y="34" text-anchor="middle">&lt;header&gt; Logo and Branding</text><rect x="20" y="50" width="620" height="25" rx="4" fill="none" stroke="currentColor"/><text x="330" y="66" text-anchor="middle">&lt;nav&gt; Primary Navigation Links</text><rect x="20" y="80" width="430" height="70" rx="4" fill="none" stroke="currentColor"/><text x="235" y="100" text-anchor="middle">&lt;main&gt; Primary Topic</text><rect x="35" y="110" width="190" height="30" rx="4" fill="none" stroke="currentColor"/><text x="130" y="129" font-size="10" text-anchor="middle">&lt;article&gt; Card 1</text><rect x="245" y="110" width="190" height="30" rx="4" fill="none" stroke="currentColor"/><text x="340" y="129" font-size="10" text-anchor="middle">&lt;article&gt; Card 2</text><rect x="460" y="80" width="180" height="70" rx="4" fill="none" stroke="currentColor"/><text x="550" y="115" text-anchor="middle">&lt;aside&gt; Sidebar</text><text x="550" y="130" font-size="9" text-anchor="middle">Related links &amp; callouts</text><rect x="20" y="155" width="620" height="25" rx="4" fill="none" stroke="currentColor"/><text x="330" y="171" text-anchor="middle">&lt;footer&gt; Copyright, Legal &amp; Author Address</text></g></svg>`,
      caption: { en: 'The standard semantic layout blueprint forming an accessible document outline.', bn: 'স্ট্যান্ডার্ড সিমান্টিক লেআউট ব্লুপ্রিন্ট যা একটি অ্যাক্সেসিবল ডকুমেন্ট রূপরেখা তৈরি করে।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Screen reader skip link tip', bn: 'স্কিপ লিংকের গুরুত্ব' },
      text: {
        en: 'Keyboard and blind users appreciate having an invisible skip link as the very first element inside <body> (<a href="#main" class="skip-link">Skip to content</a>). When tabbed into, it appears and lets users bypass hundreds of repetitive header navigation links directly.',
        bn: 'কিবোর্ড ও স্ক্রিন রিডার ব্যবহারকারীদের সুবিধার জন্য <body>-এর ঠিক শুরুতে একটি স্কিপ লিংক (<a href="#main" class="skip-link">Skip to content</a>) দিন, যাতে প্রতি পেজে বারবার মেনু না শুনে সরাসরি মূল কনটেন্টে যাওয়া যায়।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The headless section mistake', bn: 'হেডিংহীন সেকশনের ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Using <section> as a generic styling wrapper without a heading', bn: 'হেডিং ছাড়া সাধারণ স্টাইলিংয়ে সেকশন ব্যবহার' },
      text: {
        en: 'A <section> without a heading element (<h2>, <h3>) violates HTML5 specification intent. Accessibility validation tools flag heading-less sections as structural errors. If a container exists purely for CSS layout or styling backgrounds, use a generic <div>.',
        bn: 'হেডিং ট্যাগ (<h2>, <h3>) ছাড়া <section> লেখা এইচটিএমএল৫ স্পেসিফিকেশনের লঙ্ঘন। ভ্যালিডেশন টুল একে ত্রুটি হিসেবে ধরে। কোনো ধারক যদি শুধুই সিএসএস লেআউট বা ব্যাকগ্রাউন্ডের জন্য লাগে, তবে নির্দ্বিধায় <div> ব্যবহার করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-semantics-ex1', kind: 'predict', topic: 'html: Semantics and layout',
      question: { en: 'How many visible <main> landmark elements are legally allowed per web page?', bn: 'একটি ওয়েব পেজে সর্বোচ্চ কতটি দৃশ্যমান <main> উপাদান থাকা বৈধ?' },
      code: `main_count = 1\nprint(main_count)`,
      answer: '1',
      accept: ['1'],
      hint: { en: 'Exactly one central topic.', bn: 'ঠিক একটি প্রধান বিষয়।' },
      explanation: { en: 'HTML specifications mandate exactly one visible <main> element per document.', bn: 'এইচটিএমএল স্পেসিফিকেশন প্রতি পেজে কেবল একটি দৃশ্যমান <main> উপাদানের নির্দেশ দেয়।' }
    },
    {
      id: 'html-semantics-ex2', kind: 'mcq', topic: 'html: Semantics and layout',
      question: { en: 'Which semantic element requires an explicit heading tag to be structurally valid?', bn: 'কাঠামোগতভাবে বৈধ হতে কোন সিমান্টিক উপাদানের ভেতরে হেডিং ট্যাগ থাকা আবশ্যক?' },
      options: [
        { en: '<section>', bn: '<section>' },
        { en: '<div>', bn: '<div>' },
        { en: '<span>', bn: '<span>' },
        { en: '<br>', bn: '<br>' }
      ],
      answer: 0,
      hint: { en: 'A thematic chapter must have a title.', bn: 'একটি বিষয়ভিত্তিক অধ্যায়ের শিরোনাম থাকা জরুরি।' },
      explanation: { en: '<section> represents a thematic chapter and requires a heading to identify its theme.', bn: '<section> বিষয়ভিত্তিক অধ্যায় প্রকাশ করে বলে এর পরিচয় দিতে হেডিং থাকা আবশ্যক।' }
    },
    {
      id: 'html-semantics-ex3', kind: 'fill', topic: 'html: Semantics and layout',
      question: { en: 'Fill the blank with the landmark element used for sidebars and pull quotes.', bn: 'সাইডবার ও প্রাসঙ্গিক সম্পূরক লেখার জন্য কোন ল্যান্ডমার্ক উপাদান বসে?' },
      code: `<________ class="sidebar">Related reading</________>`,
      answer: 'aside',
      accept: ['aside', '<aside>'],
      hint: { en: 'Tangentially related content.', bn: 'পরোক্ষভাবে সম্পূরক কনটেন্ট।' },
      explanation: { en: '<aside> wraps content that is tangentially related to the main document text.', bn: '<aside> মূল প্রসঙ্গের সাথে পরোক্ষভাবে যুক্ত সম্পূরক তথ্য বহন করে।' }
    },
    {
      id: 'html-semantics-ex4', kind: 'predict', topic: 'html: Semantics and layout',
      question: { en: 'Does a <div> element convey any semantic meaning to assistive screen readers?', bn: 'একটি <div> উপাদান কি স্ক্রিন রিডারকে কোনো অর্থপূর্ণ সিমান্টিক তথ্য প্রদান করে?' },
      code: `semantics = 'none'\nprint(semantics)`,
      answer: 'none',
      accept: ['none', 'no', 'zero'],
      hint: { en: 'Zero semantic meaning.', bn: 'কোনো সিমান্টিক অর্থ নেই।' },
      explanation: { en: '<div> is a completely non-semantic generic container used strictly for layout styling.', bn: '<div> কোনো সিমান্টিক অর্থ বহন করে না, এটি শুধুই ডিজাইনের ধারক হিসেবে কাজ করে।' }
    }
  ],
  quiz: {
    id: 'html-semantics-layout-quiz',
    title: { en: 'Quiz — Semantics and layout', bn: 'কুইজ — সিমান্টিকস ও লেআউট' },
    questions: [
      {
        id: 'html-semantics-q1', kind: 'mcq', topic: 'html: Semantics and layout',
        question: { en: 'What is the key difference between <article> and <section>?', bn: '<article> এবং <section>-এর মূল পার্থক্য কোনটি?' },
        options: [
          { en: '<article> is self-contained and syndicatable; <section> is a thematic chapter', bn: '<article> একাকী বণ্টনযোগ্য স্বয়ংসম্পূর্ণ কনটেন্ট; <section> হলো লেখার অধ্যায়' },
          { en: '<article> cannot contain paragraphs', bn: '<article> কোনো প্যারাগ্রাফ ধারণ করতে পারে না' },
          { en: '<section> is deprecated in modern HTML5', bn: '<section> আধুনিক এইচটিএমএল৫-এ বাদ দেওয়া হয়েছে' },
          { en: '<article> is strictly for legal contracts', bn: '<article> কেবল আইনি চুক্তির জন্য বরাদ্দ' }
        ],
        answer: 0,
        hint: { en: 'Out-of-context syndication test.', bn: 'অন্যত্র একাকী প্রকাশের পরীক্ষা।' },
        explanation: { en: '<article> can be distributed independently (like an RSS post); <section> groups a chapter.', bn: '<article> পেজ থেকে আলাদা করে অন্য কোথাও দিলেও অর্থপূর্ণ থাকে; <section> হলো অধ্যায়।' }
      },
      {
        id: 'html-semantics-q2', kind: 'predict', topic: 'html: Semantics and layout',
        question: { en: 'Is it legal to have multiple <header> elements on a single page if used inside articles?', bn: 'আর্টিকেলের ভেতরে থাকলে কি এক পেজে একাধিক <header> উপাদান থাকা বৈধ?' },
        code: `print('yes')`,
        answer: 'yes',
        accept: ['yes', 'legal', 'true'],
        hint: { en: 'Headers belong to their nearest parent section or article.', bn: 'হেডার তার নিকটতম প্যারেন্ট আর্টিকেলের ভূমিকা পালন করে।' },
        explanation: { en: 'Yes, <header> can legally appear at the top of the page and also within individual articles.', bn: 'হ্যাঁ, পেজের শুরুতে এবং প্রতিটি আর্টিকেলের মাথায় আলাদা <header> থাকা সম্পূর্ণ বৈধ।' }
      },
      {
        id: 'html-semantics-q3', kind: 'mcq', topic: 'html: Semantics and layout',
        question: { en: 'Why should an id attribute be strictly unique across the entire HTML page?', bn: 'পুরো এইচটিএমএল পেজজুড়ে id অ্যাট্রিবিউট কেন কঠোরভাবে অনন্য হওয়া উচিত?' },
        options: [
          { en: 'Duplicate IDs break document.getElementById and in-page anchor bookmark links', bn: 'একই আইডি বারবার দিলে document.getElementById ও পেজ বুকমার্ক নষ্ট হয়ে যায়' },
          { en: 'Browsers crash immediately on duplicate IDs', bn: 'ডুপ্লিকেট আইডি দেখলে ব্রাউজার সাথে সাথে ক্র্যাশ করে' },
          { en: 'IDs can only contain numbers', bn: 'আইডিতে কেবল সংখ্যা লেখা যায়' },
          { en: 'IDs are visible in browser URLs by default', bn: 'আইডি ডিফল্টভাবেই ইউআরএলে দেখা যায়' }
        ],
        answer: 0,
        hint: { en: 'JavaScript targeting and bookmarking.', bn: 'জাভাস্ক্রিপ্ট সিলেকশন ও বুকমার্কিং।' },
        explanation: { en: 'Duplicate IDs corrupt script selectors, break CSS hash targeting, and fail validation.', bn: 'একই আইডি একাধিকবার ব্যবহার করলে জাভাস্ক্রিপ্ট বিভ্রান্ত হয় এবং বুকমার্ক লিংক নষ্ট হয়।' }
      },
      {
        id: 'html-semantics-q4', kind: 'mcq', topic: 'html: Semantics and layout',
        question: { en: 'Which element is an inline element that does not start on a new line?', bn: 'কোনটি একটি ইনলাইন উপাদান যা নতুন লাইনে শুরু হয় না?' },
        options: [
          { en: '<span>', bn: '<span>' },
          { en: '<div>', bn: '<div>' },
          { en: '<p>', bn: '<p>' },
          { en: '<h2>', bn: '<h2>' }
        ],
        answer: 0,
        hint: { en: 'Generic inline container.', bn: 'সাধারণ ইনলাইন ধারক।' },
        explanation: { en: '<span> is an inline element that flows inside running text without line breaks.', bn: '<span> একটি ইনলাইন উপাদান যা কোনো নতুন লাইন না ভেঙে লেখার ভেতরে বসে।' }
      }
    ]
  },
  nextLesson: {
    slug: 'dom-essentials',
    title: {
      en: 'The DOM: Text Becomes a Tree',
      bn: 'DOM: টেক্সট থেকে ট্রি'
    }
  }
};
