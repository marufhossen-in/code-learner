import type { Lesson } from '../../../lib/types';

/**
 * Rewritten 2026-09-26: the old page ("Public Square") talked around the DOM for 500 lines without
 * once showing a handler. This one teaches registration, the three phases, what `this` is inside a
 * listener, delegation with real numbers, and the two ways a listener quietly stops working.
 * Carries the w3schools pages: Event Listener, Mouse/Keyboard/Load events, Manage events,
 * modal popup, form validation.
 */
export const publicSquareLesson: Lesson = {
  slug: 'js-dom-events',
  tech: 'javascript',
  title: {
    en: 'DOM and events: how a click reaches your function',
    bn: 'DOM আর event: ক্লিক আপনার function পর্যন্ত কীভাবে পৌঁছায়'
  },
  summary: {
    en: 'A web page is a tree of nodes, and event listeners react when actions occur. Understand how event handlers attach, the 3 phases of event propagation (capture, target, bubble), and why 1 listener on a parent container efficiently handles 1,000 child rows.',
    bn: 'একটি ওয়েব পেজ হলো নোডের গাছ, এবং অ্যাকশন ঘটলে ইভেন্ট লিসেনার প্রতিক্রিয়া জানায়। ইভেন্ট লিসেনার কীভাবে কাজ করে, ইভেন্টের ৩টি পর্যায় (ক্যাপচার, টার্গেট, বাবল), এবং কেন প্যারেন্ট কন্টেইনারে ১টি লিসেনার দিয়ে ১,০০০টি চাইল্ড রো দক্ষতার সাথে পরিচালনা করা যায় তা শিখুন।'
  },
  minutes: 20,
  nextLesson: {
    slug: 'js-async-promises',
    tech: 'javascript',
    title: { en: 'The Clocktower: Timers, Promises, and the Microtask Chute', bn: 'ঘড়ি-মিনার: টাইমার, প্রমিজ আর মাইক্রোটাস্কের খাঁচা' }
  },
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'WHAT — a node, a name, a function', bn: 'কী — একটি node, একটি নাম, একটি function' } },
    {
      type: 'para',
      text: {
        en: 'Three parts make any interaction on a page: the element, the event name, and the function you hand over. `btn.addEventListener("click", onSave)` says all three. Nothing runs yet — you have only filed the promise, and the browser keeps a small list of them per element.',
        bn: 'পাতার যেকোনো মিথস্ক্রিয়তায় তিনটি অংশ থাকে: উপাদান, event-এর নাম, আর আপনি দেওয়া function। `btn.addEventListener("click", onSave)` তিনটিই বলে দেয়। এখনো কিছু চলে না — আপনি কেবল প্রতিশ্রুটি জমা দিয়েছেন, browser প্রতিটি উপাদানের জন্য ছোট একটি তালিকা রাখে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'When the click lands, the browser builds an object describing it — the target, the coordinates, whether a modifier key was down — and calls your function with that object as the only argument. Everything else in this lesson follows from those two facts.',
        bn: 'ক্লিক পড়লে browser একটি অবজেক্ট বানায় যে ঘটনাটি বর্ণনা করে — কোনটি লক্ষ্য, কোথায় পড়ল, কোনো modifier চেপে ছিল কি না — আর আপনার function-কে ওই অবজেক্টটি একমাত্র argument হিসেবে দিয়ে ডাকে। এই পাঠের বাকি সব এই দুটি সত্য থেকে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'register.js',
      code: `const btn = document.querySelector('#save');

function onSave(event) {
  event.target;              // the element the click actually landed on
  event.currentTarget;       // the element whose listener is running — btn here
  this === btn;              // true for a normal function listener
  event.preventDefault();    // cancel the link submit or form send
  event.stopPropagation();   // do not let the click travel further
}

btn.addEventListener('click', onSave);            // registered
btn.removeEventListener('click', onSave);         // same name, same function -> removed
btn.addEventListener('click', onSave, { once: true }); // runs once, then unhooks itself`,
      caption: {
        en: 'Removal only works with the identical function reference. An inline arrow cannot be unhooked later, which is the number one reason a listener outlives its component.',
        bn: 'সরানো কেবল হুবহু একই function রেফারেন্স দিয়ে চলে। ভেতরে লেখা arrow পরে খুলে ফেলার উপায় নেই — এজন্যই listener এর কম্পোনেন্টটি বেঁচে থাকে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'event object', def: { en: 'The description the browser writes for one occurrence and passes as the only argument.', bn: 'একটি ঘটনার বর্ণনা browser লিখে একমাত্র argument হিসেবে পাঠায়।' } },
        { term: 'target', def: { en: 'The deepest node the interaction actually hit, which can sit far below the node you hooked.', bn: 'সবচেয়ে গভীরের node যেটি সত্যিই ছুঁয়েছে — আপনি যেটিতে বাঁধলেন সেটি নয়ও হতে পারে।' } },
        { term: 'bubbling', def: { en: 'The trip back out to the root after the target ran its own listeners.', bn: 'লক্ষ্য নিজের listener চালাবার পর গাছের গোড়া পর্যন্ত ফিরে যাওয়া।' } },
        { term: 'delegation', def: { en: 'One listener on an ancestor that decides what to do by reading the target.', bn: 'ওপরের একটি উপাদানে একটিই listener, যা target পড়ে সিদ্ধান্ত নেয়।' } },
        { term: 'preventDefault', def: { en: 'A call that cancels the browser’s own action for this event, like sending a form.', bn: 'এই event-এ browser-এর নিজের কাজ — যেমন form পাঠানো — বাতিল করার ডাক।' } }
      ]
    },
    { type: 'heading', id: 'how', text: { en: 'HOW it runs — three stops, twice', bn: 'কীভাবে চলে — তিনটি থাম, দুইবার' } },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Down the tree, capture', bn: '১. গাছের নিচে, capture' }, text: { en: 'The event starts at the root and visits each ancestor of the target. A listener bound with `{ capture: true }` answers on the way down.', bn: 'ঘটনা গোড়া থেকে শুরু হয়ে লক্ষ্যের প্রতিটি ওপরের স্তরে নামে। `{ capture: true }` দিয়ে বাঁধা listener পথে জবাব দেয়।' } },
        { title: { en: '2. At the target', bn: '২. লক্ষ্যে পৌঁছে' }, text: { en: 'Every listener on the clicked element runs, in the order they were added, regardless of which phase flag they used.', bn: 'যেটিতে ক্লিক হয়েছে তার প্রতিটি listener যোগ করার ক্রমে চলে, যে-flag-ই থাকুক না কেন।' } },
        { title: { en: '3. Back up, bubbling', bn: '৩. আবার ওপরে, bubbling' }, text: { en: 'The same ancestors are visited in reverse. This is what a parent listener relies on, and why a click inside 1,000 rows reaches one function.', bn: 'একই ওপরের স্তরগুলো উল্টো ক্রমে পড়া হয়। প্যারেন্টের listener এই-টুকুর ওপরই দাঁড়ায়, তাই ১,০০০ row-এর ভেতরের ক্লিক একটিই function-এ পৌঁছায়।' } },
        { title: { en: '4. stopPropagation cuts the trip', bn: '৪. stopPropagation পথ কেটে দেয়' }, text: { en: 'The target’s own listeners still run; the ones above never hear about it. Use it when a button inside a clickable card should not also open the card.', bn: 'লক্ষ্যের নিজের listener চলেই; ওপরেরগুলো খবর পায় না। ক্লিকযোগ্য কার্ডের ভেতরের button যেন কার্ড না-খোলে, সেখানে এটি লাগে।' } }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'family', bn: 'পরিবার' }, { en: 'names you will use', bn: 'যে নামগুলো লাগবে' }, { en: 'note', bn: 'মনে রাখুন' }],
      rows: [
        [{ en: 'pointer', bn: 'pointer' }, { en: 'click, contextmenu, pointerdown, pointerup', bn: 'click, contextmenu, pointerdown, pointerup' }, { en: 'pointer events cover mouse, pen and touch', bn: 'pointer event mouse, pen আর touch ধরে' }],
        [{ en: 'keyboard', bn: 'keyboard' }, { en: 'keydown, keyup, and event.key', bn: 'keydown, keyup আর event.key' }, { en: 'check key, not keyCode — keyCode is retired', bn: 'keyCode নয়, key দেখুন — keyCode বাদ পড়েছে' }],
        [{ en: 'form', bn: 'form' }, { en: 'submit, input, change', bn: 'submit, input, change' }, { en: 'submit is where validation belongs', bn: 'validation বসে submit-এ' }],
        [{ en: 'life of a page', bn: 'পাতার জীবন' }, { en: 'DOMContentLoaded, load, beforeunload', bn: 'DOMContentLoaded, load, beforeunload' }, { en: 'DOMContentLoaded needs only the tree, not the images', bn: 'DOMContentLoaded-এর দরকার শুধু গাছ, ছবি নয়' }],
        [{ en: 'window', bn: 'window' }, { en: 'resize, scroll, visibilitychange', bn: 'resize, scroll, visibilitychange' }, { en: 'fires many times a second — throttle it', bn: 'সেকেন্ডে বহুবার চলে — throttle করুন' }]
      ],
      caption: { en: 'Every name in the middle column is just a string you pass to addEventListener; the third column is what people get wrong.', bn: 'মাঝের কলামের প্রতিটি নাম addEventListener-এ দেওয়া একটুকরো string; শেষ কলামটিই মানুষ ভুল করে।' },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'delegation.js',
      code: `// 1,000 rows: the naive way binds 1,000 functions.
const list = document.querySelector('#rows');

// One listener instead. It learns what was clicked by reading the target.
list.addEventListener('click', (event) => {
  const row = event.target.closest('li');   // the li this click belongs to, if any
  if (!row || !list.contains(row)) return; // clicked padding, or outside our list
  list.querySelector('.sel')?.classList.remove('sel');
  row.classList.add('sel');
});

// Works for rows added after the listener, because nothing was bound to them.
for (let i = 0; i < 1000; i++) {
  list.insertAdjacentHTML('beforeend', \`<li>row \${i}</li>\`);
}`,
      caption: {
        en: '1 listener, 1,000 rows, and new rows are covered without re-binding anything. The cost is one `closest` walk up from the target, usually three steps.',
        bn: '১টি listener, ১,০০০টি row, আর নতুন row-ও আগের বাঁধনেই চলে। খরচ target থেকে `closest`-এর তিন-চার ধাপ হাঁটা।'
      }
    },
    {
      type: 'diagram',
      title: { en: 'One click, six calls', bn: 'একটি ক্লিক, ছয়টি ডাক' },
      svg: `<svg viewBox="0 0 620 250" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="click travelling down to the button and back up to the page"><defs><marker id="a2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 Z" fill="currentColor"/></marker></defs><rect x="20" y="20" width="180" height="42" rx="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="110" y="46" font-size="12" text-anchor="middle" fill="currentColor">document</text><rect x="60" y="82" width="180" height="42" rx="9" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="150" y="108" font-size="12" text-anchor="middle" fill="currentColor">div#rows</text><rect x="100" y="144" width="180" height="42" rx="9" fill="none" stroke="currentColor" stroke-width="1.8"/><text x="190" y="170" font-size="12" text-anchor="middle" fill="currentColor">button (target)</text><path d="M300 41 H390 V165 H292" fill="none" stroke="currentColor" stroke-width="1.4" marker-end="url(#a2)"/><text x="398" y="60" font-size="11" fill="currentColor" opacity=".85">capture phase: down</text><text x="398" y="76" font-size="11" fill="currentColor" opacity=".85">document → div → button</text><path d="M292 186 H400 V186" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M420 186 H500 V62 H300" fill="none" stroke="currentColor" stroke-width="1.4" marker-end="url(#a2)"/><text x="428" y="204" font-size="11" fill="currentColor" opacity=".85">bubble phase: back up</text><text x="428" y="220" font-size="11" fill="currentColor" opacity=".85">button → div → document</text><text x="20" y="238" font-size="11" fill="currentColor" opacity=".7">stopPropagation() at the button ends the trip here; the div above never runs its listener.</text></svg>`,
      caption: {
        en: 'A listener bound without the capture flag waits for the way back up.',
        bn: 'capture flag না-দিলে listener ফেরার পথের অপেক্ষা করে।'
      }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Worth remembering', bn: 'মনে রাখার মতো' },
      text: {
        en: 'Inside a listener, `event.currentTarget` is what you bound to and `event.target` is where it landed. Delegation code reads the second; almost every other line reads the first.',
        bn: 'listener-এর ভেতরে `event.currentTarget` যেখানে বেঁধেছিলেন সেটি, আর `event.target` যেখানে ক্লিক পড়েছে সেটি। delegation কোড দ্বিতীয়টি পড়ে; বাকি প্রায় সব জায়গায় প্রথমটি।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'COMMON MISTAKE', bn: 'সাধারণ ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Rebuilding the HTML under your listeners', bn: 'listener-এর নিচের HTML বারবার বদলানো' },
      text: {
        en: '`list.innerHTML = rows.map(...)` throws away the elements and everything bound to them. The page looks updated and the buttons are dead. Bind once to the container that survives, rebuild only its children, and re-run your tests by clicking.',
        bn: '`list.innerHTML = rows.map(...)` উপাদানগুলোকে ও তাদের সঙ্গে বাঁধা সবকিছু ফেলে দেয়। পাতা বদলানো মনে হয়, কিন্তু button-গুলো অচল। যে প্যারেন্ট থেকে যায় সেটিতে একবার বাঁধুন, শুধু সন্তান বদলান, আর ক্লিক করে পরীক্ষা করুন।'
      }
    }
  ],
  exercises: [
    {
      id: 'js-dom-ex1',
      kind: 'mcq',
      topic: 'javascript: DOM and events',
      question: {
        en: 'A 500-row table needs a click handler per row. What is the cheapest correct setup?',
        bn: '৫০০ row-এর টেবিলে প্রতিটি row-এর জন্য click handler চাই। সবচেয়ে সস্তা সঠিক উপায় কী?'
      },
      options: [
        { en: 'one listener on the table, using event.target.closest("tr")', bn: 'টেবিলে একটিই listener, event.target.closest("tr") দিয়ে' },
        { en: '500 listeners, one per row', bn: '৫০০টি listener, প্রতি row-এ একটি' },
        { en: 'one listener on document, no filtering', bn: 'document-এ একটি listener, ছাঁকনি ছাড়া' },
        { en: 'onclick attributes on each row, no JS file', bn: 'প্রতিটি row-এ onclick attribute, JS ফাইল ছাড়া' }
      ],
      answer: 0,
      hint: { en: 'Bubbling already brings the click to the table.', bn: 'bubbling ক্লিক টেবিল পর্যন্ত নিয়ে আসেই।' },
      explanation: {
        en: 'The table listener fires for clicks on any row because of bubbling; `closest("tr")` names the row and `contains` keeps stray clicks out. Same behaviour, 1 listener instead of 500, and rows added later still work.',
        bn: 'bubbling-এর জন্য যেকোনো row-এর ক্লিকে টেবিলের listener চলে; `closest("tr")` বলে কোন row, `contains` অলাগতিয়াল ক্লিক আটকায়। ফল একই, listener ১টি ৫০০টি নয়, আর পরে যোগ হওয়া row-ও চলে।'
      }
    },
    {
      id: 'js-dom-ex2',
      kind: 'predict',
      topic: 'javascript: DOM and events',
      question: { en: 'How many lines are printed? Give the number.', bn: 'কতটি লাইন ছাপা হয়? সংখ্যাটি দিন।' },
      code: `const box = document.querySelector('#box');
box.addEventListener('click', () => console.log('a'));
box.addEventListener('click', () => console.log('b'));
box.click();
box.removeEventListener('click', () => console.log('a'));
box.click();`,
      answer: '4',
      accept: ['4', 'four', '৪'],
      hint: { en: 'The second removal passes a brand-new function.', bn: 'দ্বিতীয়বার সরানোর সময় একদম নতুন function দেওয়া হলো।' },
      explanation: {
        en: 'Two listeners, two lines per click. The removal passes a different function object, so nothing is unhooked and the second click prints two more — 4 in total.',
        bn: 'দুটি listener, ক্লিকে দুটি লাইন। সরানোর সময় আলাদা function অবজেক্ট দেওয়া বলে কিছুই খোলে না, দ্বিতীয় ক্লিকে আরও দুটি — মোট ৪টি।'
      }
    },
    {
      id: 'js-dom-ex3',
      kind: 'fill',
      topic: 'javascript: DOM and events',
      question: {
        en: 'In a submit handler you must stop the browser from sending the form. Which single call on the event object does it?',
        bn: 'submit handler-এ form পাঠানো আটকাতে হবে। event অবজেক্টের কোন একটি ডাক সেটি করে?'
      },
      answer: 'event.preventDefault()',
      accept: ['event.preventDefault()', 'e.preventDefault()', 'ev.preventDefault()', 'preventDefault()'],
      hint: { en: 'It cancels the browser’s own step, not the travel of the event.', bn: 'এটি browser-এর নিজের কাজ বাতিল করে, event-এর যাত্রাপথ নয়।' },
      explanation: {
        en: 'preventDefault stops the form from being sent; stopPropagation only stops the event climbing to ancestors. Confusing them is why a “handled” form still reloads the page.',
        bn: 'preventDefault form পাঠানো আটকায়; stopPropagation কেবল event-এর ওপরে ওঠা বন্ধ করে। এই দুটি গুলিয়ে ফেলার কারণেই “handle” করা form পাতা রিলোড করে।'
      }
    }
  ],
  quiz: {
    id: 'js-dom-events-quiz',
    title: { en: 'Quiz — DOM and events', bn: 'কুইজ — DOM আর event' },
    questions: [
      {
        id: 'domq1', kind: 'mcq', topic: 'javascript: DOM and events',
        question: { en: 'What decides the order two listeners on the same element run in?', bn: 'একই উপাদানের দুটি listener কোন ক্রমে চলবে — কী ঠিক করে?' },
        options: [{ en: 'the order they were added', bn: 'যে ক্রমে যোগ করা হয়েছে' }, { en: 'alphabetical by event name', bn: 'নামের বর্ণানুক্রমে' }, { en: 'the fastest one first', bn: 'যেটি দ্রুত সেটি আগে' }, { en: 'capture always beats bubble', bn: 'capture সবসময় আগে' }],
        answer: 0,
        hint: {
          en: 'Execution follows the order of addEventListener registrations.',
          bn: 'লিসেনারগুলো যোগ করার ক্রম অনুসারেই চলে।'
        },
        explanation: { en: 'Same element, same phase: registration order. Only a capture flag moves a listener to the earlier stop.', bn: 'একই উপাদান, একই ধাপ: যোগ করার ক্রম। শুধু capture flag শব্দটি listener-কে আগের ধাপে সরায়।' }
      },
      {
        id: 'domq2', kind: 'mcq', topic: 'javascript: DOM and events',
        question: { en: 'A click on a button inside a card opens both the button’s panel and the card. Which call, in the button’s listener, fixes it?', bn: 'কার্ডের ভেতরের button-এ ক্লিকে button-এর panel আর কার্ড দুটোই খোলে — button-এর listener-এ কোন ডাক ঠিক করবে?' },
        options: [{ en: 'event.stopPropagation()', bn: 'event.stopPropagation()' }, { en: 'event.preventDefault()', bn: 'event.preventDefault()' }, { en: 'return false', bn: 'return false' }, { en: 'event.target = null', bn: 'event.target = null' }],
        answer: 0,
        hint: {
          en: 'Halts event propagation up through ancestor elements.',
          bn: 'প্যারেন্ট এলিমেন্টে ইভেন্ট ছড়িয়ে পড়া বন্ধ করে।'
        },
        explanation: { en: 'The card only learns about the click by bubbling, so cutting the trip keeps it shut while the button still works.', bn: 'কার্ড খবর পায় bubbling থেকে; পথ কেটলে সে আর খোলে না, button নিজের কাজ করে।' }
      },
      {
        id: 'domq3', kind: 'mcq', topic: 'javascript: DOM and events',
        question: { en: 'Why is DOMContentLoaded the usual place to run setup code?', bn: 'সাজসজকার কোড চালানোর জায়গা হিসেবে DOMContentLoaded কেন নেওয়া হয়?' },
        options: [{ en: 'the tree is ready, images may still be loading', bn: 'গাছ তৈরি, ছবি বাকিও থাকতে পারে' }, { en: 'it fires after every image finishes', bn: 'প্রতিটি ছবি শেষ হলে বাজে' }, { en: 'it fires once per second', bn: 'প্রতি সেকেন্ডে একবার বাজে' }, { en: 'it cancels the load event', bn: 'এটি load বাতিল করে দেয়' }],
        answer: 0,
        hint: {
          en: 'Fires when HTML parsing finishes, without waiting for stylesheets and images.',
          bn: 'ছবি বা মিডিয়া ফাইলের অপেক্ষা না করে DOM তৈরি হলেই এটি কার্যকর হয়।'
        },
        explanation: { en: 'Querying needs nodes, not pixels. load waits for images and frames, which can be seconds later.', bn: 'খুঁজতে দরকার node, ছবি নয়। load ছবি আর frame-এর জন্য অপেক্ষা করে — কয়েক সেকেন্ড লেগে যায়।' }
      },
      {
        id: 'domq4', kind: 'mcq', topic: 'javascript: DOM and events',
        question: { en: 'Your table is re-rendered with innerHTML after each fetch and the row buttons stop working. What broke?', bn: 'প্রতি fetch-এর পর innerHTML দিয়ে টেবিল বদলানো হয়, তারপর row button-গুলো অচল। কী ভাঙল?' },
        options: [{ en: 'the elements they were bound to were replaced', bn: 'যে উপাদানে বাঁধা ছিল সেটিই বদলে গেছে' }, { en: 'innerHTML cancels bubbling', bn: 'innerHTML bubbling বাতিল করে' }, { en: 'fetch drops event listeners globally', bn: 'fetch সব listener ফেলে দেয়' }, { en: 'a table cannot hold listeners', bn: 'টেবিল listener ধরে না' }],
        answer: 0,
        hint: {
          en: 'Replacing innerHTML destroys existing DOM nodes and their attached listeners.',
          bn: 'innerHTML প্রতিস্থাপন করলে পুরোনো নোড ও তাদের লিসেনার নষ্ট হয়ে যায়।'
        },
        explanation: { en: 'Listeners live on elements. Rebuild the children and any per-child binding dies — bind the surviving container instead.', bn: 'listener থাকে উপাদানের ওপর। সন্তান বদলালে তাদের বাঁধা সব শেষ — যে প্যারেন্ট থেকে যায় সেটিতে বাঁধুন।' }
      }
    ]
  }
};
