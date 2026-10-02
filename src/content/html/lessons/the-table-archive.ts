import type { Lesson } from '../../../lib/types';

/**
 * Ten complete points consolidating the entire w3schools Table and List curriculum:
 * 1. Table fundamentals: <table>, <tr>, <th>, and <td>
 * 2. Table borders: border-collapse: collapse vs separate
 * 3. Table sizes: table width, column width, and table-layout: fixed
 * 4. Table headers and captions: <th>, scope="col", scope="row", and <caption>
 * 5. Cell padding and border-spacing
 * 6. Merging cells: colspan and rowspan accounting
 * 7. Table styling: zebra stripes with nth-child(even) and hover highlights
 * 8. Column groups: <colgroup> and <col span="...">
 * 9. Lists: <ul>, <ol>, <li>, list-style-type, start, and reversed
 * 10. Description lists: <dl>, <dt>, and <dd> for key-value records
 */
export const tableArchiveLesson: Lesson = {
  slug: 'html-tables-lists',
  tech: 'html',
  title: {
    en: 'Tables and lists, point by point: borders, sizes, spans, styling, and lists',
    bn: 'টেবিল ও লিস্ট, পয়েন্ট ধরে: বর্ডার, সাইজ, স্প্যান, স্টাইলিং ও তালিকা'
  },
  summary: {
    en: 'Organize structured records and sequences cleanly. Master two-dimensional table architecture with border-collapse, column widths, accessible headers, colspan and rowspan merging, zebra styling, colgroup formatting, and both ordered and description lists.',
    bn: 'কাঠামোবদ্ধ রেকর্ড ও ক্রমিক তথ্য নিখুঁতভাবে সাজান। border-collapse, কলামের প্রস্থ, অ্যাক্সেসিবল হেডার, colspan ও rowspan মার্জিং, জেব্রা স্টাইলিং, colgroup ফরম্যাটিং এবং অর্ডার্ড ও ডেসক্রিপশন লিস্টসহ টেবিলের পূর্ণাঙ্গ ব্যবহার শিখুন।'
  },
  minutes: 26,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'Two-dimensional grids and sequence vocabularies', bn: 'দ্বিমাত্রিক গ্রিড ও ক্রমিক ডেটা কাঠামো' } },
    {
      type: 'para',
      text: {
        en: 'In this lesson we cover all ten table and list topics from w3schools. Each point provides runnable markup with rendered output comments and practical rules.',
        bn: 'এই পাঠে আমরা ডাব্লু থ্রি স্কুলের টেবিল ও লিস্টের দশটি বিষয় বিস্তারিতভাবে শিখব। প্রতিটিতে রেন্ডার করা আউটপুট কমেন্টসহ রানযোগ্য মার্কআপ দেওয়া হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'border collapse', def: { en: 'merging adjacent cell borders into a single shared rule', bn: 'পাশাপাশি ঘরের বর্ডারগুলোকে একটি অভিন্ন রেখায় মিলিয়ে দেওয়া' } },
        { term: 'accessible header', def: { en: 'a th element with scope defining whether it labels a column or a row', bn: 'scope-যুক্ত th উপাদান যা কলাম বা সারির শিরোনাম নির্ধারণ করে' } },
        { term: 'span accounting', def: { en: 'adjusting cell counts in subsequent rows when colspan or rowspan is applied', bn: 'colspan বা rowspan ব্যবহারের পর পরবর্তী সারির ঘর সংখ্যার সমন্বয়' } },
        { term: 'description list', def: { en: 'a key-value list structure composed of terms and descriptive definitions', bn: 'টার্ম ও বর্ণনামূলক সংজ্ঞা নিয়ে গঠিত কি-ভ্যালু তালিকা কাঠামো' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. HTML Tables: rows, header cells, and data cells', bn: '১. এইচটিএমএল টেবিল: সারি, হেডার সেল ও ডেটা সেল' } },
    {
      type: 'para',
      text: {
        en: 'A table is built from rows using tr. Inside each row, th represents header labels and td holds data values.',
        bn: 'টেবিল tr দিয়ে তৈরি সারির সমষ্টি। প্রতিটি সারির ভেতরে th হেডার লেবেল নির্দেশ করে এবং td মূল ডেটা ধারণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'table-basic.html',
      code: `<table>
  <thead>
    <tr>
      <th>City</th>
      <th>Temperature</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Dhaka</td>
      <td>32 C</td>
    </tr>
    <tr>
      <td>Sylhet</td>
      <td>28 C</td>
    </tr>
  </tbody>
</table>
<!-- Rendered structure:
  City    | Temperature
  --------+------------
  Dhaka   | 32 C
  Sylhet  | 28 C
-->`,
      caption: {
        en: 'Thead groups column labels, tbody holds data rows, and tfoot wraps totals. Browsers repeat thead across printed page breaks.',
        bn: 'thead কলামের লেবেল গুচ্ছ করে, tbody ডেটা সারি রাখে, আর tfoot মোট হিসাব ধরে। প্রিন্ট করার সময় ব্রাউজার প্রতি পৃষ্ঠায় thead পুনরাবৃত্তি করে।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. Table Borders: border-collapse vs separate borders', bn: '২. টেবিল বর্ডার: border-collapse বনাম পৃথক বর্ডার' } },
    {
      type: 'para',
      text: {
        en: 'By default, browser engines give every table cell its own independent border. Set border-collapse: collapse on the table to weld them into single lines.',
        bn: 'ডিফল্ট অবস্থায় ব্রাউজার প্রতিটি ঘরে আলাদা স্বাধীন বর্ডার দেয়। টেবিলের ওপর border-collapse: collapse দিলে সেগুলো একক রেখায় মিশে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'table-borders.html',
      code: `<style>
  table.collapsed {
    border-collapse: collapse;
    width: 100%;
  }
  table.collapsed th,
  table.collapsed td {
    border: 1px solid #333333;
    padding: 8px;
  }
</style>

<table class="collapsed">
  <tr>
    <th>Service</th>
    <th>Port</th>
  </tr>
  <tr>
    <td>HTTP</td>
    <td>80</td>
  </tr>
  <tr>
    <td>HTTPS</td>
    <td>443</td>
  </tr>
</table>
<!-- border-collapse: collapse merges shared borders into 1px dividers -->`,
      caption: {
        en: 'Without border-collapse: collapse, adjacent cell borders form double lines separated by border-spacing.',
        bn: 'border-collapse: collapse না দিলে পাশাপাশি ঘরের বর্ডারগুলো ফাঁকা জায়গা রেখে ডাবল লাইনের মতো দেখায়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Table Sizes: table width, col width, and table-layout: fixed', bn: '৩. টেবিলের সাইজ: টেবিলের প্রস্থ, কলামের প্রস্থ ও table-layout: fixed' } },
    {
      type: 'para',
      text: {
        en: 'By default, tables resize columns based on text length. Using table-layout: fixed forces the browser to obey specified widths on the first row, rendering huge tables much faster.',
        bn: 'ডিফল্টভাবে টেবিল ভেতরের লেখার দৈর্ঘ্য দেখে কলামের মাপ ঠিক করে। table-layout: fixed দিলে ব্রাউজার প্রথম সারির নির্দিষ্ট প্রস্থ মেনে দ্রুত রেন্ডার করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'table-sizes.html',
      code: `<style>
  table.fixed-layout {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
  }
  th.col-id { width: 20%; }
  th.col-name { width: 50%; }
  th.col-status { width: 30%; }
</style>

<table class="fixed-layout">
  <tr>
    <th class="col-id">ID</th>
    <th class="col-name">Endpoint</th>
    <th class="col-status">Status</th>
  </tr>
  <tr>
    <td>101</td>
    <td>/api/v1/health</td>
    <td>Healthy</td>
  </tr>
</table>
<!-- Widths: 20% + 50% + 30% = 100% total table width -->`,
      caption: {
        en: 'Setting explicit column widths in the first row prevents content length from reflowing subsequent rows.',
        bn: 'প্রথম সারিতে কলামের নির্দিষ্ট প্রস্থ নির্ধারণ করে দিলে ভেতরের লেখার কারণে পরবর্তী সারিগুলোর মাপ নড়েচড়ে না।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Table Headers: th scope="col", scope="row", and caption', bn: '৪. টেবিল হেডার: th scope="col", scope="row" ও caption' } },
    {
      type: 'para',
      text: {
        en: 'Use scope="col" for column headers and scope="row" for row headers. The caption element sits immediately after table to provide an accessible title.',
        bn: 'কলাম হেডারের জন্য scope="col" এবং সারি হেডারের জন্য scope="row" দিন। টেবিলের পরপরই caption দিয়ে গ্রহণযোগ্য শিরোনাম দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'table-headers.html',
      code: `<table>
  <caption>Quarterly Infrastructure Costs (USD)</caption>
  <thead>
    <tr>
      <th scope="col">Region</th>
      <th scope="col">Compute</th>
      <th scope="col">Storage</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ap-south-1</th>
      <td>1200</td>
      <td>450</td>
    </tr>
    <tr>
      <th scope="row">us-east-1</th>
      <td>1800</td>
      <td>600</td>
    </tr>
  </tbody>
</table>
<!-- Screen readers announce: "ap-south-1, Compute: 1200" instead of bare numbers -->`,
      caption: {
        en: 'The scope attribute enables screen readers to pair every numeric cell with both its column and row titles.',
        bn: 'scope অ্যাট্রিবিউট স্ক্রিন রিডারকে প্রতিটি ঘরের সংখ্যার সাথে কলাম ও সারির শিরোনাম মিলিয়ে পড়তে সাহায্য করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Cell Padding and Spacing: internal breathing room', bn: '৫. সেল প্যাডিং ও স্পেসিং: ভেতরের ফাঁকা জায়গা' } },
    {
      type: 'para',
      text: {
        en: 'Padding adds space inside cells between borders and text. When borders are separate, border-spacing controls the distance between individual cells.',
        bn: 'প্যাডিং ঘরের বর্ডার ও লেখার মাঝে ভেতরের ফাঁকা জায়গা বাড়ায়। বর্ডার আলাদা থাকলে border-spacing ঘরগুলোর মধ্যবর্তী দূরত্ব ঠিক করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'padding-spacing.html',
      code: `<style>
  table.spaced {
    border-collapse: separate;
    border-spacing: 10px;    /* 10px gap between cell boxes */
  }
  table.spaced td {
    padding: 12px 16px;       /* 12px vertical, 16px horizontal */
    background-color: #f4f4f4;
  }
</style>

<table class="spaced">
  <tr>
    <td>Cell 1</td>
    <td>Cell 2</td>
  </tr>
</table>
<!-- border-spacing is ignored when border-collapse: collapse is active -->`,
      caption: {
        en: 'Note that border-spacing only applies when border-collapse is set to separate. Collapsed tables ignore border-spacing.',
        bn: 'মনে রাখবেন border-spacing কেবল separate বর্ডারে কাজ করে। border-collapse দিলে border-spacing কাজ করে না।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Merging Cells: colspan and rowspan accounting', bn: '৬. সেল মার্জিং: colspan ও rowspan-এর সঠিক হিসাব' } },
    {
      type: 'para',
      text: {
        en: 'colspan stretches a cell horizontally across columns. rowspan stretches a cell vertically down rows. Every merged span must subtract cells from later slots.',
        bn: 'colspan একটি ঘরকে ডানে একাধিক কলামজুড়ে প্রসারিত করে। rowspan একটি ঘরকে নিচে একাধিক সারিজুড়ে নামায়। মার্জ করলে পরের ঘরগুলো বাদ দিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'colspan-rowspan.html',
      code: `<table border="1">
  <tr>
    <th colspan="2">Cluster Status (2 Columns Wide)</th>
  </tr>
  <tr>
    <td rowspan="2">Node 1 (2 Rows Tall)</td>
    <td>CPU: 45%</td>
  </tr>
  <tr>
    <!-- Notice: first cell omitted because Node 1 occupies this row space -->
    <td>RAM: 62%</td>
  </tr>
</table>
<!-- Row 1: 1 cell spanning 2 cols = 2 slots
     Row 2: 1 cell spanning 2 rows + 1 td = 2 slots
     Row 3: 1 td (paired with Node 1) = 2 slots -->`,
      caption: {
        en: 'Forgetting to omit cells in rows covered by a rowspan causes row protrusion bugs where trailing cells push out past the table border.',
        bn: 'rowspan-এর আওতাধীন সারিতে বাড়তি ঘর বাদ না দিলে টেবিলের সীমানা উপচে বাইরে চলে যাওয়ার ত্রুটি ঘটে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Table Styling: zebra stripes and hover highlights', bn: '৭. টেবিল স্টাইলিং: জেব্রা স্ট্রাইপ ও হোভার হাইলাইট' } },
    {
      type: 'para',
      text: {
        en: 'Zebra striping alternates background color on even rows using tr:nth-child(even). Adding :hover makes dense tables easier to read across columns.',
        bn: 'tr:nth-child(even) দিয়ে প্রতি দ্বিতীয় সারিতে আলাদা ব্যাকগ্রাউন্ড দিয়ে জেব্রা স্ট্রাইপ তৈরি হয়। :hover দিলে ঘন টেবিল এক নজরে পড়া সহজ হয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'zebra-table.html',
      code: `<style>
  table.zebra {
    width: 100%;
    border-collapse: collapse;
  }
  table.zebra th {
    background-color: #1e293b;
    color: #ffffff;
    padding: 10px;
    text-align: left;
  }
  table.zebra td {
    padding: 8px 10px;
    border-bottom: 1px solid #e2e8f0;
  }
  table.zebra tbody tr:nth-child(even) {
    background-color: #f8fafc;  /* subtle zebra stripe */
  }
  table.zebra tbody tr:hover {
    background-color: #e0f2fe;  /* active hover line */
  }
</style>`,
      caption: {
        en: 'Target tbody tr:nth-child to avoid alternating colors on the table header row.',
        bn: 'সরাসরি tbody tr:nth-child ব্যবহার করুন যাতে টেবিলের হেডার সারিতে জেব্রা রঙের প্রভাব না পড়ে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Table Colgroup: styling entire columns without touching cells', bn: '৮. টেবিল Colgroup: কোষে হাত না দিয়ে পুরো কলাম স্টাইল' } },
    {
      type: 'para',
      text: {
        en: 'The colgroup element groups one or more col elements, allowing background colors and widths to be applied to entire columns in a single declaration.',
        bn: 'colgroup উপাদান এক বা একাধিক col-কে দলভুক্ত করে, ফলে প্রতিটি কোষে ক্লাস না বসিয়ে এক লাইনেই পুরো কলামের রঙ বা প্রস্থ নির্ধারণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'colgroup-example.html',
      code: `<table border="1">
  <colgroup>
    <col span="1" style="background-color: #f1f5f9; width: 120px;">
    <col span="2" style="background-color: #ffffff; width: 200px;">
  </colgroup>
  <tr>
    <th>Account</th>
    <th>Credit</th>
    <th>Debit</th>
  </tr>
  <tr>
    <td>Acct-01</td>
    <td>5000</td>
    <td>1200</td>
  </tr>
</table>
<!-- col span="2" formats both Credit and Debit columns simultaneously -->`,
      caption: {
        en: 'Colgroup styling supports background, width, border, and visibility properties without duplicating CSS across hundreds of td tags.',
        bn: 'প্রতিটি td-তে সিএসএস না লিখে colgroup দিয়ে একযোগে কলামের ব্যাকগ্রাউন্ড, প্রস্থ ও বর্ডার নিয়ন্ত্রণ করা যায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Lists: Unordered, Ordered, start, and reversed', bn: '৯. তালিকা: আনঅর্ডার্ড, অর্ডার্ড, start ও reversed' } },
    {
      type: 'para',
      text: {
        en: 'Use ul for unordered bullet lists and ol for numbered sequences. Ordered lists support start, reversed, and type attributes.',
        bn: 'বুলেট চিহ্নের জন্য ul এবং ক্রমিক সংখ্যার জন্য ol ব্যবহার করুন। ol তালিকায় start, reversed ও type অ্যাট্রিবিউট কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'lists.html',
      code: `<!-- Unordered list with bullet points -->
<ul style="list-style-type: square;">
  <li>Deploy binary</li>
  <li>Restart service</li>
</ul>

<!-- Ordered countdown list -->
<ol reversed start="3">
  <li>Ignition</li>
  <li>Telemetry check</li>
  <li>Launch</li>
</ol>
<!-- Output numbering:
  3. Ignition
  2. Telemetry check
  1. Launch
-->`,
      caption: {
        en: 'Use reversed for countdowns and start to resume sequence numbering across split paragraphs.',
        bn: 'উল্টো গণনার জন্য reversed এবং লেখার মাঝে বিরতির পর নতুন নম্বর থেকে শুরু করতে start ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Description Lists: dl, dt, and dd for glossaries', bn: '১০. ডেসক্রিপশন লিস্ট: dl, dt ও dd দিয়ে শব্দকোষ' } },
    {
      type: 'para',
      text: {
        en: 'A description list dl pairs terms dt with their descriptive definitions dd, making it ideal for glossaries, API specifications, and key-value metadata.',
        bn: 'ডেসক্রিপশন লিস্ট dl কোনো শব্দ dt-এর সাথে তার ব্যাখ্যামূলক সংজ্ঞা dd-কে জোড়া লাগায়, যা শব্দকোষ, এপিআই বিবরণ ও তথ্যের তালিকার জন্য চমৎকার।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'description-list.html',
      code: `<dl>
  <dt>MTU</dt>
  <dd>Maximum Transmission Unit: 1500 bytes on standard Ethernet.</dd>

  <dt>MSS</dt>
  <dd>Maximum Segment Size: 1460 bytes for IPv4 TCP payload.</dd>

  <dt>DNS</dt>
  <dd>Domain Name System: translates human names to IP addresses.</dd>
</dl>
<!-- dt renders as bold term; dd renders indented beneath it -->`,
      caption: {
        en: 'Multiple dd elements can follow a single dt term when a concept has multiple definitions or synonyms.',
        bn: 'একটি শব্দ dt-এর একাধিক সংজ্ঞা বা সমার্থক অর্থ থাকলে তার নিচে একাধিক dd উপাদান রাখা সম্পূর্ণ বৈধ।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why structured markup outlives visual styling', bn: 'কেন কাঠামোগত মার্কআপ চাক্ষুষ সাজসজ্জার চেয়ে বেশি স্থায়ী' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'Screen readers use table headers to announce data context for every single cell', bn: 'স্ক্রিন রিডার প্রতিটি ডেটা ঘরের আগে তার সংশ্লিষ্ট কলাম ও সারির শিরোনাম পড়ে শোনায়' },
        { en: 'table-layout: fixed allows browsers to render millions of rows without blocking main threads', bn: 'table-layout: fixed ব্যবহারের ফলে কোটি সারির টেবিল ব্রাউজারকে হ্যাং না করে দ্রুত লোড হয়' },
        { en: 'colgroup eliminates thousands of redundant style rules on individual table cells', bn: 'colgroup প্রতিটি কোষে আলাদা ক্লাস বা স্টাইল লেখার ঝামেলা দূর করে কোড হালকা রাখে' },
        { en: 'Semantic dl elements provide structured metadata crawlable by search engine bots', bn: 'সিমান্টিক dl উপাদান সার্চ ইঞ্জিন রোবটকে টার্ম ও সংজ্ঞার নির্ভুল সম্পর্ক বুঝতে সাহায্য করে' },
        { en: 'Proper span accounting prevents table layout breakages on mobile screen reflows', bn: 'সঠিক স্প্যান হিসাবের কারণে মোবাইল স্ক্রিনে টেবিল ভেঙে যাওয়া বা এলোমেলো হওয়া রোধ হয়' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'Element / Property', bn: 'উপাদান / প্রোপার্টি' }, { en: 'Context', bn: 'প্রয়োগ ক্ষেত্র' }, { en: 'Default Behavior', bn: 'ডিফল্ট আচরণ' }, { en: 'Production Recommended', bn: 'প্রোডাকশন সুপারিশ' }],
      rows: [
        [{ en: 'border-collapse', bn: 'border-collapse' }, { en: 'CSS on <table>', bn: 'টেবিলের সিএসএস' }, { en: 'separate (double lines)', bn: 'separate (ডাবল লাইন)' }, { en: 'collapse for clean 1px borders', bn: 'একক ১ পিক্সেল বর্ডারের জন্য collapse' }],
        [{ en: 'table-layout', bn: 'table-layout' }, { en: 'CSS on <table>', bn: 'টেবিলের সিএসএস' }, { en: 'auto (scans all cells)', bn: 'auto (সব ঘর স্ক্যান করে)' }, { en: 'fixed with first-row widths for speed', bn: 'গতির জন্য প্রথম সারির মাপে fixed' }],
        [{ en: 'th scope', bn: 'th scope' }, { en: 'HTML on <th>', bn: 'th-এর অ্যাট্রিবিউট' }, { en: 'none (ambiguous direction)', bn: 'কিছু নেই (দিক অস্পষ্ট)' }, { en: 'scope="col" or scope="row"', bn: 'সর্বদা scope="col" বা scope="row"' }],
        [{ en: 'colgroup', bn: 'colgroup' }, { en: 'Child of <table>', bn: 'টেবিলের সরাসরি চাইল্ড' }, { en: 'none', bn: 'কিছু নেই' }, { en: 'Use for batch column widths and tints', bn: 'কলামের সামগ্রিক প্রস্থ ও রঙের জন্য ব্যবহার' }],
        [{ en: 'dl / dt / dd', bn: 'dl / dt / dd' }, { en: 'Semantic List', bn: 'সিমান্টিক লিস্ট' }, { en: 'dl block, dd indented', bn: 'dl ব্লক, dd ইনডেন্ট করা' }, { en: 'Use for key-value pairs instead of div soup', bn: 'অপ্রয়োজনীয় div-এর বদলে কি-ভ্যালু তথ্যে ব্যবহার' }]
      ],
      caption: { en: 'Architectural summary of HTML table layout and list standards.', bn: 'এইচটিএমএল টেবিল লেআউট ও লিস্টের নিয়মাবলীর স্থাপত্য সংক্ষেপ।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to build high-performance data tables', bn: 'কীভাবে দ্রুতগতির ডেটা টেবিল তৈরি করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Declare semantic table anatomy', bn: 'সিমান্টিক কাঠামো লিখুন' }, text: { en: 'Always include caption, thead, tbody, and tfoot to separate headers, records, and summaries.', bn: 'শিরোনাম, মূল তথ্য ও মোট যোগফল আলাদা করতে caption, thead, tbody ও tfoot লিখুন।' } },
        { title: { en: 'Enforce collapsed borders', bn: 'বর্ডার একত্রিত করুন' }, text: { en: 'Set border-collapse: collapse and apply border rules to th and td rather than the table element.', bn: 'border-collapse: collapse দিন এবং টেবিলের বদলে th ও td-তে বর্ডার বসান।' } },
        { title: { en: 'Lock column widths in thead', bn: 'কলামের প্রস্থ নির্দিষ্ট করুন' }, text: { en: 'Use table-layout: fixed and assign percentage widths on header cells in the first row.', bn: 'table-layout: fixed দিন এবং প্রথম সারির হেডার সেলে শতাংশে প্রস্থ নির্দিষ্ট করুন।' } },
        { title: { en: 'Double-check span mathematics', bn: 'স্প্যান হিসাব যাচাই করুন' }, text: { en: 'Ensure the sum of colspans in every row equals the total column count of the table.', bn: 'নিশ্চিত করুন প্রতি সারির মোট সেল ও colspan-এর যোগফল টেবিলের কলাম সংখ্যার সমান।' } },
        { title: { en: 'Style with colgroup and zebra classes', bn: 'কলাম ও জেব্রা স্টাইল প্রয়োগ করুন' }, text: { en: 'Use colgroup for vertical stripes and tbody tr:nth-child(even) for horizontal alternating rows.', bn: 'উল্লম্ব কলামে colgroup এবং অনুভূমিক সারিতে tbody tr:nth-child(even) ব্যবহার করুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Table anatomy and cell merge arithmetic', bn: 'টেবিলের শারীরস্থান ও সেল মার্জের হিসাব' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="diagram of table anatomy showing thead tbody tfoot and colspan rowspan"><g font-size="11" fill="currentColor"><rect x="20" y="20" width="620" height="30" rx="4" fill="none" stroke="currentColor"/><text x="330" y="40" text-anchor="middle">caption: Infrastructure Ledger</text><rect x="20" y="55" width="620" height="30" rx="4" fill="none" stroke="currentColor"/><text x="170" y="74" text-anchor="middle">thead th: Region (col 1)</text><text x="480" y="74" text-anchor="middle">thead th: Cost (col 2)</text><rect x="20" y="90" width="310" height="60" rx="4" fill="none" stroke="currentColor"/><text x="170" y="125" text-anchor="middle">rowspan="2" (Node A)</text><rect x="330" y="90" width="310" height="30" rx="4" fill="none" stroke="currentColor"/><text x="480" y="109" text-anchor="middle">td: Compute (Row 1)</text><rect x="330" y="120" width="310" height="30" rx="4" fill="none" stroke="currentColor"/><text x="480" y="139" text-anchor="middle">td: Storage (Row 2)</text><rect x="20" y="155" width="620" height="28" rx="4" fill="none" stroke="currentColor"/><text x="330" y="173" text-anchor="middle">tfoot td colspan="2": Total Cost = $1800</text></g></svg>`,
      caption: { en: 'Visual map of table sections and how rowspan and colspan balance row slot totals.', bn: 'টেবিলের অংশসমূহ এবং rowspan ও colspan যেভাবে কলামের মোট হিসাব সমন্বয় করে।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Responsive table tip', bn: 'রেসপন্সিভ টেবিল টিপ' },
      text: {
        en: 'Never let wide data tables break mobile screens. Wrap the table in a div with overflow-x: auto to enable smooth horizontal scrolling without shrinking text.',
        bn: 'মোবাইল স্ক্রিনে চওড়া টেবিল ভেঙে যাওয়া রোধ করতে টেবিলটিকে overflow-x: auto যুক্ত একটি div-এর ভেতরে রাখুন যাতে লেখা না চেপে ডানে-বামে স্ক্রল করা যায়।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The layout table anti-pattern', bn: 'লেআউটে টেবিল ব্যবহারের ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Using tables for page layout instead of CSS Grid or Flexbox', bn: 'সিএসএস গ্রিডের বদলে পেজ লেআউটে টেবিল ব্যবহার' },
      text: {
        en: 'Tables are designed strictly for two-dimensional tabular data. Using table tags to position sidebars, headers, and navigation ruins document accessibility, makes responsive redesigns impossible, and confuses search engine crawlers. Use CSS Flexbox and Grid for page layouts.',
        bn: 'টেবিল কেবল দ্বিমাত্রিক ডেটা প্রদর্শনের জন্য তৈরি। সাইডবার বা মেনুর অবস্থান ঠিক করতে টেবিল বসালে স্ক্রিন রিডার বিভ্রান্ত হয়, মোবাইল রেসপন্সিভ করা অসম্ভব হয়ে পড়ে এবং সার্চ ইঞ্জিন র‍্যাংকিং ক্ষতিগ্রস্ত হয়। লেআউটের জন্য সর্বদা CSS Flexbox ও Grid ব্যবহার করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-tables-ex1', kind: 'predict', topic: 'html: Tables and lists',
      question: { en: 'How many total column slots does a cell with colspan="3" occupy?', bn: 'colspan="3" যুক্ত একটি সেল অনুভূমিকভাবে মোট কতটি কলামের জায়গা দখল করে?' },
      code: `slots = 3\nprint(slots)`,
      answer: '3',
      accept: ['3'],
      hint: { en: 'The span number directly indicates the occupied column count.', bn: 'স্প্যান সংখ্যাটি সরাসরি দখল করা কলামের সংখ্যা নির্দেশ করে।' },
      explanation: { en: 'colspan="3" merges three adjacent column slots into a single cell.', bn: 'colspan="3" পাশাপাশি ৩টি কলামের স্থানকে একটি একক ঘরে রূপান্তর করে।' }
    },
    {
      id: 'html-tables-ex2', kind: 'mcq', topic: 'html: Tables and lists',
      question: { en: 'Which CSS property merges adjacent table cell borders into a single line?', bn: 'কোন সিএসএস প্রোপার্টি পাশাপাশি থাকা টেবিল সেলের বর্ডারগুলোকে একক লাইনে মিলিয়ে দেয়?' },
      options: [
        { en: 'border-collapse: collapse', bn: 'border-collapse: collapse' },
        { en: 'border-spacing: 0', bn: 'border-spacing: 0' },
        { en: 'table-layout: fixed', bn: 'table-layout: fixed' },
        { en: 'border-style: solid', bn: 'border-style: solid' }
      ],
      answer: 0,
      hint: { en: 'The collapsing border model property.', bn: 'বর্ডার একত্রিত করার প্রোপার্টি।' },
      explanation: { en: 'border-collapse: collapse eliminates double borders by welding adjacent boundaries together.', bn: 'border-collapse: collapse সংলগ্ন বর্ডারগুলোকে একত্র করে একক নিখুঁত রেখায় পরিণত করে।' }
    },
    {
      id: 'html-tables-ex3', kind: 'fill', topic: 'html: Tables and lists',
      question: { en: 'Fill the blank with the attribute that indicates a th labels an entire vertical column.', bn: 'একটি th উপাদান পুরো উল্লম্ব কলামের হেডার তা নির্দেশ করতে শূন্যস্থানে কী বসবে?' },
      code: `<th ________="col">Username</th>`,
      answer: 'scope',
      accept: ['scope', 'scope="col"'],
      hint: { en: 'Accessibility attribute for header direction.', bn: 'হেডারের দিক নির্দেশকারী অ্যাক্সেসিবিলিটি অ্যাট্রিবিউট।' },
      explanation: { en: 'scope="col" informs assistive technologies that the cell provides the label for all cells beneath it.', bn: 'scope="col" সহায়ক প্রযুক্তিকে জানায় যে এই ঘরটি নিচের সব ডেটা ঘরের কলাম শিরোনাম।' }
    },
    {
      id: 'html-tables-ex4', kind: 'predict', topic: 'html: Tables and lists',
      question: { en: 'In a description list, which tag defines the description or definition for a term dt?', bn: 'ডেসক্রিপশন লিস্টে dt শব্দের ব্যাখ্যা বা সংজ্ঞা দিতে কোন ট্যাগ ব্যবহৃত হয়?' },
      code: `tag = 'dd'\nprint(tag)`,
      answer: 'dd',
      accept: ['dd', '<dd>'],
      hint: { en: 'Description Definition tag.', bn: 'ডেসক্রিপশন ডেফিনিশন ট্যাগ।' },
      explanation: { en: '<dd> holds the definition or description corresponding to the preceding <dt> term.', bn: '<dd> ট্যাগ পূর্ববর্তী <dt> শব্দের বিস্তারিত সংজ্ঞা বা বর্ণনা ধারণ করে।' }
    }
  ],
  quiz: {
    id: 'html-tables-lists-quiz',
    title: { en: 'Quiz — Tables and lists', bn: 'কুইজ — টেবিল ও তালিকা' },
    questions: [
      {
        id: 'html-tables-q1', kind: 'mcq', topic: 'html: Tables and lists',
        question: { en: 'Which element is used to style an entire column of a table in one place?', bn: 'টেবিলের পুরো একটি কলামকে এক জায়গায় স্টাইল করতে কোন উপাদান ব্যবহার করা হয়?' },
        options: [
          { en: '<colgroup>', bn: '<colgroup>' },
          { en: '<column>', bn: '<column>' },
          { en: '<colrow>', bn: '<colrow>' },
          { en: '<thead>', bn: '<thead>' }
        ],
        answer: 0,
        hint: { en: 'Column group tag.', bn: 'কলাম গ্রুপ ট্যাগ।' },
        explanation: { en: '<colgroup> and <col> apply styles like width and background to entire columns without touching each td.', bn: '<colgroup> ও <col> প্রতিটি td পরিবর্তন না করেই পুরো কলামে প্রস্থ ও ব্যাকগ্রাউন্ড প্রয়োগ করে।' }
      },
      {
        id: 'html-tables-q2', kind: 'predict', topic: 'html: Tables and lists',
        question: { en: 'What is the starting number of this list?', bn: 'এই তালিকার শুরুর নম্বর কত হবে?' },
        code: `<ol start="5"><li>Step</li></ol>`,
        answer: '5',
        accept: ['5'],
        hint: { en: 'The start attribute explicitly overrides the starting count.', bn: 'start অ্যাট্রিবিউট শুরুর সংখ্যা নির্ধারণ করে।' },
        explanation: { en: 'start="5" instructs the browser to number the first list item as 5.', bn: 'start="5" ব্রাউজারকে প্রথম আইটেমটি ৫ নম্বর দিয়ে শুরু করার নির্দেশ দেয়।' }
      },
      {
        id: 'html-tables-q3', kind: 'mcq', topic: 'html: Tables and lists',
        question: { en: 'Why should CSS Flexbox or Grid be used instead of tables for page layout?', bn: 'ওয়েব পেজ লেআউটে টেবিলের বদলে কেন CSS Flexbox বা Grid ব্যবহার করা উচিত?' },
        options: [
          { en: 'Tables break accessibility tree navigation and prevent responsive mobile reflow', bn: 'টেবিল অ্যাক্সেসিবিলিটি নষ্ট করে এবং মোবাইল রেসপন্সিভ রিফ্লো বাধাগ্রস্ত করে' },
          { en: 'Modern browsers refuse to render tables', bn: 'আধুনিক ব্রাউজার টেবিল রেন্ডার করতে অস্বীকৃতি জানায়' },
          { en: 'Tables cannot contain text', bn: 'টেবিল কোনো টেক্সট ধারণ করতে পারে না' },
          { en: 'CSS Grid requires less HTML tags than anything else', bn: 'সিএসএস গ্রিডে সবচেয়ে কম এইচটিএমএল ট্যাগ লাগে' }
        ],
        answer: 0,
        hint: { en: 'Accessibility and mobile responsiveness.', bn: 'অ্যাক্সেসিবিলিটি ও মোবাইল রেসপন্সিভনেস।' },
        explanation: { en: 'Layout tables confuse screen readers and make responsive mobile layout reflows virtually impossible.', bn: 'লেআউট টেবিল স্ক্রিন রিডারকে বিভ্রান্ত করে এবং মোবাইলের জন্য রেসপন্সিভ সাজসজ্জা অসম্ভব করে তোলে।' }
      },
      {
        id: 'html-tables-q4', kind: 'mcq', topic: 'html: Tables and lists',
        question: { en: 'What CSS property allows huge tables to render without waiting to calculate full content dimensions?', bn: 'কোন সিএসএস প্রোপার্টি ব্যবহারের ফলে বিশাল টেবিল পুরো কনটেন্টের মাপ না মেপেই দ্রুত রেন্ডার হতে পারে?' },
        options: [
          { en: 'table-layout: fixed', bn: 'table-layout: fixed' },
          { en: 'border-collapse: separate', bn: 'border-collapse: separate' },
          { en: 'display: block', bn: 'display: block' },
          { en: 'overflow: hidden', bn: 'overflow: hidden' }
        ],
        answer: 0,
        hint: { en: 'Fixed layout algorithm.', bn: 'ফিক্সড লেআউট অ্যালগরিদম।' },
        explanation: { en: 'table-layout: fixed calculates column widths strictly from the first row, avoiding costly whole-table reflows.', bn: 'table-layout: fixed কেবল প্রথম সারির মাপ দেখে কলামের প্রস্থ নির্ধারণ করে, ফলে পুরো টেবিল রিফ্লো হয় না।' }
      }
    ]
  },
  nextLesson: {
    slug: 'html-media',
    title: {
      en: 'The Media Wardrobe: Images, Audio, Video, and Responsive Visuals',
      bn: 'মিডিয়া ওয়ারড্রোব: ছবি, অডিও, ভিডিও এবং রেসপন্সিভ ভিজ্যুয়াল'
    }
  }
};
