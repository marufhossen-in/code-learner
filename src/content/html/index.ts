import type { Hub } from '../../lib/types';
import { documentSkeletonLesson } from './lessons/the-document-skeleton';
import { textPaletteLesson } from './lessons/the-text-palette';
import { linkedWorldLesson } from './lessons/the-linked-world';
import { tableArchiveLesson } from './lessons/the-table-archive';
import { mediaWardrobeLesson } from './lessons/the-media-wardrobe';
import { landmarkLayerLesson } from './lessons/the-landmark-layer';
import { modernShelfLesson } from './lessons/the-modern-shelf';
import { shelfOfOddmentsLesson } from './lessons/the-shelf-of-oddments';
import { domLesson } from './lessons/dom';
import { formsLesson } from './lessons/forms';

export const htmlHub: Hub = {
  slug: 'html',
  name: 'HTML',
  icon: '📄',
  tagline: {
    en: 'The skeleton of every web page ever made.',
    bn: 'পৃথিবীর প্রতিটি ওয়েবপেজের কাঠামো।',
  },
  about: {
    en: 'HTML is not "just tags" — it is the contract between your content and every consumer of it: browsers, search engines, screen readers, and the JavaScript that brings pages alive. This hub teaches document structure, semantics, forms, media and accessibility from the ground up, always showing what the browser actually does with your markup.',
    bn: 'HTML শুধু "ট্যাগ" নয় — এটি আপনার কনটেন্ট আর তার প্রতিটি ভোক্তার মধ্যে চুক্তি: ব্রাউজার, সার্চ ইঞ্জিন, স্ক্রিন রিডার, আর পেজকে জীবন্ত করা জাভাস্ক্রিপ্ট। এই হাবে শেখানো হয় ডকুমেন্ট কাঠামো, সিমান্টিক, ফর্ম, মিডিয়া ও অ্যাক্সেসিবিলিটি — সবসময় দেখিয়ে ব্রাউজার আপনার মার্কআপ নিয়ে আসলে কী করে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Document basics', bn: 'ধাপ ১ — ডকুমেন্টের বেসিক' },
      items: [
        { en: 'Tags, elements, attributes', bn: 'ট্যাগ, এলিমেন্ট, অ্যাট্রিবিউট' },
        { en: 'head vs body — metadata that matters', bn: 'head বনাম body — গুরুত্বপূর্ণ মেটাডেটা' },
        { en: 'Text: headings, paragraphs, lists, links', bn: 'টেক্সট: হেডিং, প্যারাগ্রাফ, লিস্ট, লিংক' },
      ],
    },
    {
      title: { en: 'Stage 2 — Meaning', bn: 'ধাপ ২ — অর্থ' },
      items: [
        { en: 'Semantic layout: header, nav, main, article, footer (lesson 1)', bn: 'সিমান্টিক লেআউট: header, nav, main, article, footer (লেসন ১)' },
        { en: 'The DOM — text becomes a tree (lesson 1)', bn: 'DOM — টেক্সট থেকে ট্রি (লেসন ১)' },
        { en: 'Images, alt text, figures, media', bn: 'ছবি, alt টেক্সট, ফিগার, মিডিয়া' },
      ],
    },
    {
      title: { en: 'Stage 3 — Interaction', bn: 'ধাপ ৩ — ইন্টারঅ্যাকশন' },
      items: [
        { en: 'Forms: inputs, labels, validation', bn: 'ফর্ম: ইনপুট, লেবেল, ভ্যালিডেশন' },
        { en: 'Tables done accessibly', bn: 'অ্যাক্সেসিবল টেবিল' },
        { en: 'Embedding: iframe, video, audio', bn: 'এমবেডিং: iframe, ভিডিও, অডিও' },
      ],
    },
    {
      title: { en: 'Stage 4 — Professional HTML', bn: 'ধাপ ৪ — প্রফেশনাল HTML' },
      items: [
        { en: 'Accessibility deep-dive: ARIA, focus, keyboard', bn: 'অ্যাক্সেসিবিলিটি গভীরে: ARIA, ফোকাস, কিবোর্ড' },
        { en: 'SEO & social meta (Open Graph)', bn: 'SEO ও সোশ্যাল মেটা (Open Graph)' },
        { en: 'Web Components: custom elements', bn: 'ওয়েব কম্পোনেন্ট: কাস্টম এলিমেন্ট' },
      ],
    },
  ],
  lessons: [documentSkeletonLesson, textPaletteLesson, linkedWorldLesson, tableArchiveLesson, mediaWardrobeLesson, landmarkLayerLesson, domLesson, formsLesson, modernShelfLesson, shelfOfOddmentsLesson],
  reference: [
    {
      group: 'Document',
      methods: [
        {
          name: '<!doctype html>',
          signature: 'First line of every HTML5 document',
          params: { en: 'None.', bn: 'কিছুই না।' },
          returns: {
            en: 'Switches the browser to standards mode (no quirks mode box model).',
            bn: 'ব্রাউজারকে স্ট্যান্ডার্ডস মোডে রাখে (quirks মোডের পুরোনো বক্স মডেল নয়)।',
          },
          example: '<!doctype html>\n<html lang="en">…',
          mistake: {
            en: 'Forgetting it can trigger quirks mode with legacy layout bugs.',
            bn: 'না দিলে quirks মোড চালু হয়ে পুরোনো লেআউট বাগ দেখা দিতে পারে।',
          },
          related: ['<html>', '<head>'],
        },
        {
          name: '<meta charset>',
          signature: '<meta charset="utf-8">',
          params: { en: 'Character encoding name.', bn: 'ক্যারেক্টার এনকোডিংয়ের নাম।' },
          returns: {
            en: 'Correct decoding of text — Bengali included.',
            bn: 'টেক্সটের সঠিক ডিকোডিং — বাংলাসহ।',
          },
          example: '<head>\n  <meta charset="utf-8" />\n  <title>…',
          mistake: {
            en: 'Missing/late charset causes mojibake — readable text turns into symbols.',
            bn: 'না থাকলে বা দেরি হলে মোজিবেক — পরিষ্কার টেক্সট চিহ্নের গন্ডগোল হয়ে যায়।',
          },
          related: ['<title>'],
        },
      ],
    },
    {
      group: 'Text',
      methods: [
        {
          name: '<h1>–<h6>',
          signature: 'Heading levels — outline of the page',
          params: { en: 'Flow content.', bn: 'ফ্লো কনটেন্ট।' },
          returns: {
            en: 'Document outline used by screen readers and search engines.',
            bn: 'স্ক্রিন রিডার ও সার্চ ইঞ্জিনের ব্যবহৃত ডকুমেন্ট রূপরেখা।',
          },
          example: '<h1>Page title</h1>\n<h2>Section</h2>',
          mistake: {
            en: 'Skipping levels for looks (h1 → h4) breaks the outline — style with CSS instead.',
            bn: 'চেহারার জন্য লেভেল লাফানো (h1 → h4) রূপরেখা ভাঙে — চেহারা CSS-এ করুন।',
          },
          related: ['<p>', '<section>'],
        },
        {
          name: '<a>',
          signature: '<a href="…">link</a>',
          params: { en: 'href, target, rel, download.', bn: 'href, target, rel, download।' },
          returns: {
            en: 'Navigation — the single feature that makes the web a web.',
            bn: 'নেভিগেশন — যে একটি বৈশিষ্ট্য ওয়েবকেই ওয়েব বানিয়েছে।',
          },
          example: '<a href="/learn/javascript" rel="noopener">JS</a>',
          mistake: {
            en: 'Using <a> without href for clicks — it stops being focusable. Use <button>.',
            bn: 'ক্লিকের জন্য href ছাড়া <a> — ফোকাসযোগ্যতা হারায়। <button> ব্যবহার করুন।',
          },
          related: ['<button>', '<nav>'],
        },
      ],
    },
    {
      group: 'Media',
      methods: [
        {
          name: '<img>',
          signature: '<img src="…" alt="…">',
          params: { en: 'src, alt, width, height, loading.', bn: 'src, alt, width, height, loading।' },
          returns: {
            en: 'Embeds an image; alt is its text equivalent.',
            bn: 'ছবি বসায়; alt হলো তার টেক্সট সমতুল্য।',
          },
          example: '<img src="team.jpg" alt="The 2026 team" loading="lazy" />',
          mistake: {
            en: 'Omitting width/height causes layout shift (CLS) when the image loads.',
            bn: 'width/height না দিলে ছবি লোডে লেআউট সরে যায় (CLS)।',
          },
          related: ['<figure>', 'loading="lazy"'],
        },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Personal Portfolio', bn: 'ব্যক্তিগত পোর্টফোলিও' },
      diff: 'beginner',
      desc: {
        en: 'Semantic single page: header, projects, about, contact. Pure HTML, graded on structure.',
        bn: 'সিমান্টিক এক পৃষ্ঠা: হেডার, প্রজেক্ট, পরিচিতি, যোগাযোগ। খাঁটি HTML — কাঠামোতে মূল্যায়ন।',
      },
    },
    {
      title: { en: 'Multi-page Blog', bn: 'বহু-পৃষ্ঠার ব্লগ' },
      diff: 'beginner',
      desc: {
        en: 'Index + article pages with proper nav, figures and footers.',
        bn: 'সঠিক নেভ, ফিগার ও ফুটারসহ ইনডেক্স + আর্টিকেল পেজ।',
      },
    },
    {
      title: { en: 'Documentation Site', bn: 'ডকুমেন্টেশন সাইট' },
      diff: 'intermediate',
      desc: {
        en: 'Sticky sidebar, deep-linked headings, accessible tables of contents.',
        bn: 'স্টিকি সাইডবার, ডিপ-লিংকড হেডিং, অ্যাক্সেসিবল সূচিপত্র।',
      },
    },
  ],
  bestPractices: [
    { en: 'One <h1> per page; headings form a logical outline.', bn: 'পেজে একটি <h1>; হেডিংগুলো তর্কসঙ্গত রূপরেখা বানায়।' },
    { en: 'Every <img> gets alt — empty (alt="") if decorative.', bn: 'প্রতিটি <img>-এ alt — সাজসজ্জার হলে ফাঁকা (alt="")।' },
    { en: 'Use buttons for actions, links for navigation.', bn: 'অ্যাকশনে বাটন, নেভিগেশনে লিংক।' },
    { en: 'Label every form input — placeholder is NOT a label.', bn: 'প্রতিটি ইনপুটে লেবেল — প্লেসহোল্ডার লেবেল নয়।' },
    { en: 'Set lang on <html> — pronunciation and hyphenation depend on it.', bn: '<html>-এ lang দিন — উচ্চারণ ও হায়ফেনেশন এর উপর নির্ভর করে।' },
    { en: 'Never put block content inside <p>.', bn: '<p>-র ভেতরে ব্লক কনটেন্ট রাখবেন না।' },
  ],
  interview: [
    {
      q: { en: 'Difference between HTML and the DOM?', bn: 'HTML আর DOM-এর পার্থক্য?' },
      a: {
        en: 'HTML is the source text; the DOM is the live, repair-corrected object tree the browser builds from it (and JavaScript can mutate).',
        bn: 'HTML হলো সোর্স টেক্সট; DOM হলো ব্রাউজারের তৈরি, সংশোধনকৃত জীবন্ত অবজেক্ট-ট্রি (জাভাস্ক্রিপ্ট বদলাতে পারে)।',
      },
    },
    {
      q: { en: 'Why semantic HTML?', bn: 'সিমান্টিক HTML কেন?' },
      a: {
        en: 'Accessibility (landmarks for screen readers), SEO (understandable structure), maintainability (self-describing markup).',
        bn: 'অ্যাক্সেসিবিলিটি (স্ক্রিন রিডারের ল্যান্ডমার্ক), SEO (বোধগম্য কাঠামো), রক্ষণাবেক্ষণ (আত্মব্যাখ্যামূলক মার্কআপ)।',
      },
    },
    {
      q: { en: 'defer vs async scripts?', bn: 'defer বনাম async স্ক্রিপ্ট?' },
      a: {
        en: 'Both download without blocking; defer executes in order after parsing, async executes whenever it arrives (order not guaranteed).',
        bn: 'দুটোই ব্লক না করে ডাউনলোড হয়; defer পার্সিংয়ের পর ক্রমে চলে, async পৌঁছামাত্র চলে (ক্রমের গ্যারান্টি নেই)।',
      },
    },
    {
      q: { en: 'What is quirks mode?', bn: 'quirks মোড কী?' },
      a: {
        en: 'Legacy layout emulation triggered by a missing/invalid doctype — old box model and other IE5-era behaviors.',
        bn: 'ডকটাইপ না থাকলে চালু হওয়া উত্তরাধিকার লেআউট অনুকরণ — পুরোনো বক্স মডেলসহ IE5-যুগের আচরণ।',
      },
    },
  ],
  realWorld: [
    { en: 'This very page — the platform you are learning on — is DOM nodes.', bn: 'এই পেজটিও — যে প্ল্যাটফর্মে শিখছেন — DOM নোডই।' },
    { en: 'Every email template is HTML with constraints from 2004.', bn: 'প্রতিটি ইমেইল টেমপ্লেট হলো ২০০৪ সালের সীমাবাধ HTML।' },
    { en: 'WebViews in mobile apps render your DOM, quirks included.', bn: 'মোবাইল অ্যাপের WebView আপনার DOM-ই রেন্ডার করে, quirks-সহ।' },
    { en: 'Accessibility lawsuits globally cite missing semantic structure.', bn: 'বিশ্বজুড়ে অ্যাক্সেসিবিলিটি মামলায় উঠে আসে সিমান্টিক কাঠামোর অভাব।' },
  ],
};
