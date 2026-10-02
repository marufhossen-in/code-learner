import type { Lesson } from '../../../lib/types';

export const AiCapstoneLesson: Lesson = {
  slug: 'ai-capstone',
  tech: 'ai-fundamentals',
  title: {
    en: 'Ai Capstone — Graduation by building, a k-nearest-neighbors classifier',
    bn: 'বানিয়ে গ্র্যাজুয়েশন: live চলা k-nearest-neighbors classifier — AI'
  },
  summary: {
    en: 'Graduation by building: a k-nearest-neighbors classifier that runs live — click anywhere and watch majority vote decide red or blue. Then the honest map of what you now own (8 skills), what k-NN cannot do, and exactly how the machine-learning hub continues from here.',
    bn: 'বানিয়ে গ্র্যাজুয়েশন: live চলা k-nearest-neighbors classifier — যেকোনোখানে ক্লিক করুন, majority vote লাল না নীল ঠিক করবে। তারপর কী পেলেন (৮ দক্ষতা), k-NN কী পারে না, আর machine-learning হাব এখান থেকে ঠিক কীভাবে এগোয়।'
  },
  minutes: 20,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'WHAT — You are the average of your neighbors',
        bn: 'WHAT — প্রতিবেশীর গড়ই আপনি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'k-nearest neighbors (k-NN) is classification with no training loop at all: to label a new point, find the k closest labeled points and take a majority vote. k=3 and the neighbors vote red, red, blue → red. No weights, no gradients — just distance and democracy. It is the perfect capstone: every hub idea (features, labels, prediction, test honesty) in one tiny machine you can click.',
        bn: 'k-nearest neighbors (k-NN) training loop-ছাড়া classification: নতুন বিন্দুর label দিতে k-সংখ্যক কাছের label-বিন্দু খুঁজে majority vote নাও। k=৩, প্রতিবেশী লাল, লাল, নীল → লাল। ওজন নেই, gradient নেই — শুধু দূরত্ব আর গণতন্ত্র। নিখুঁত capstone: হাবের সব ধারণা (feature, label, prediction, test-সততা) এক ছোট ক্লিক-যন্ত্রে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'k-NN',
          def: {
            en: 'Classify by majority vote of the k nearest labeled points.',
            bn: 'k-কাছের label-বিন্দুর majority vote-এ শ্রেণিকরণ।'
          }
        },
        {
          term: 'Distance',
          def: {
            en: 'How “near” is measured (here: straight-line pixel distance).',
            bn: '“কাছে” কীভাবে মাপা (এখানে: সরলরেখা-পিক্সেল দূরত্ব)।'
          }
        },
        {
          term: 'Majority vote',
          def: {
            en: 'The winning label among the k neighbors decides.',
            bn: 'k-প্রতিবেশীর জয়ী label সিদ্ধান্ত নেয়।'
          }
        },
        {
          term: 'k',
          def: {
            en: 'How many neighbors vote. Small k: jumpy. Big k: smooth but dull.',
            bn: 'কত প্রতিবেশী ভোট দেয়। ছোট k: লাফানো। বড় k: মসৃণ কিন্তু ভোঁতা।'
          }
        },
        {
          term: 'Lazy learning',
          def: {
            en: 'No training phase — all work happens at prediction time.',
            bn: 'Training-পর্ব নেই — সব কাজ prediction-সময়ে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'WHY — Builders keep; readers leak',
        bn: 'WHY — বানানো থাকে; পড়া ঝরে'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Running beats reading: one clicked prediction teaches more than ten paragraphs about voting.',
          bn: 'চালানো পড়াকে হারায়: এক ক্লিক-prediction ভোট-নিয়ে দশ অনুচ্ছেদের চেয়ে বেশি শেখায়।'
        },
        {
          en: 'This is portfolio proof: “I built and can explain a classifier” outranks any certificate line.',
          bn: 'এটা portfolio-প্রমাণ: “classifier বানিয়ে বোঝাতে পারি” যেকোনো সার্টিফিকেট-লাইনকে হারায়।'
        },
        {
          en: 'k-NN is the baseline every team tries first: if a neural net cannot beat neighbors-voting, something is wrong.',
          bn: 'k-NN প্রতি দলের প্রথম baseline: প্রতিবেশী-ভোটকে neural net হারাতে না পারলে কিছু ভুল।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'HOW — Click, watch, break, fix',
        bn: 'HOW — ক্লিক, দেখো, ভাঙো, ঠিক করো'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The path this lesson walks',
        bn: 'এই পাঠ যে-পথ হাঁটে'
      },
      svg: '<svg viewBox="0 0 640 168" font-family="system-ui, sans-serif" role="img" aria-label="Lesson flow: You are the average of yo… to Builders keep; readers le… to Click, watch, break, fix to Your classifier, live to Graduation checklist: 8 o…">\n<g font-size="12" font-weight="700" fill="currentColor">\n<rect x="26" y="44" width="108" height="56" rx="10" fill="hsl(357 65% 46% / .12)" stroke="hsl(357 60% 45%)" stroke-width="1.2"/>\n<text x="36" y="59" font-size="10" fill="hsl(357 55% 38%)" font-weight="800">1 · You are the average of yo…</text>\n<text x="36" y="78" font-size="10.5" fill="currentColor" opacity=".85">WHAT — প্রতিবেশীর গড়ই আপনি</text>\n<path d="M 135 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar357)"/>\n<rect x="146" y="44" width="108" height="56" rx="10" fill="hsl(21 65% 46% / .12)" stroke="hsl(21 60% 45%)" stroke-width="1.2"/>\n<text x="156" y="59" font-size="10" fill="hsl(21 55% 38%)" font-weight="800">2 · Builders keep; readers le…</text>\n<text x="156" y="78" font-size="10.5" fill="currentColor" opacity=".85">WHY — বানানো থাকে; পড়া ঝরে</text>\n<path d="M 255 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar357)"/>\n<rect x="266" y="44" width="108" height="56" rx="10" fill="hsl(45 65% 46% / .12)" stroke="hsl(45 60% 45%)" stroke-width="1.2"/>\n<text x="276" y="59" font-size="10" fill="hsl(45 55% 38%)" font-weight="800">3 · Click, watch, break, fix</text>\n<text x="276" y="78" font-size="10.5" fill="currentColor" opacity=".85">HOW — ক্লিক, দেখো, ভাঙো, ঠিক …</text>\n<path d="M 375 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar357)"/>\n<rect x="386" y="44" width="108" height="56" rx="10" fill="hsl(69 65% 46% / .12)" stroke="hsl(69 60% 45%)" stroke-width="1.2"/>\n<text x="396" y="59" font-size="10" fill="hsl(69 55% 38%)" font-weight="800">4 · Your classifier, live</text>\n<text x="396" y="78" font-size="10.5" fill="currentColor" opacity=".85">INSIDE — আপনার classifier, li…</text>\n<path d="M 495 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar357)"/>\n<rect x="506" y="44" width="108" height="56" rx="10" fill="hsl(93 65% 46% / .12)" stroke="hsl(93 60% 45%)" stroke-width="1.2"/>\n<text x="516" y="59" font-size="10" fill="hsl(93 55% 38%)" font-weight="800">5 · Graduation checklist: 8 o…</text>\n<text x="516" y="78" font-size="10.5" fill="currentColor" opacity=".85">RESULT — গ্র্যাজুয়েশন-চেকলিস…</text>\n<defs><marker id="ar357" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor" opacity=".55"/></marker></defs>\n</g>\n<text x="26" y="126" font-size="10.5" fill="currentColor" opacity=".7" font-weight="700">terms on this path</text>\n<rect x="26" y="134" width="41.6" height="18" rx="9" fill="hsl(177 60% 50% / .16)" stroke="hsl(177 55% 45%)" stroke-opacity=".5"/>\n<text x="46.8" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">k-NN</text>\n<rect x="75.6" y="134" width="67.2" height="18" rx="9" fill="hsl(177 60% 50% / .16)" stroke="hsl(177 55% 45%)" stroke-opacity=".5"/>\n<text x="109.19999999999999" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Distance</text>\n<rect x="150.8" y="134" width="99.2" height="18" rx="9" fill="hsl(177 60% 50% / .16)" stroke="hsl(177 55% 45%)" stroke-opacity=".5"/>\n<text x="200.4" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Majority vote</text>\n<rect x="258" y="134" width="22.4" height="18" rx="9" fill="hsl(177 60% 50% / .16)" stroke="hsl(177 55% 45%)" stroke-opacity=".5"/>\n<text x="269.2" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">k</text>\n<rect x="288.4" y="134" width="99.2" height="18" rx="9" fill="hsl(177 60% 50% / .16)" stroke="hsl(177 55% 45%)" stroke-opacity=".5"/>\n<text x="338" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Lazy learning</text>\n</svg>',
      caption: {
        en: 'Numbered stages are the sections in order; the pills are the terms each stage must keep true. Read left to right, then open the section.',
        bn: 'নম্বর-দেওয়া ধাপগুলো ক্রম অনুযায়ী সেকশন; গোলক-চিপে সেই শব্দগুলো যা প্রতিটি ধাপে সত্যি থাকতে হবে। বাঁ থেকে ডানে পড়ুন, তারপর সেকশন খুলুন।'
      }
    },
    {
      type: 'steps',
      items: [
        {
          title: {
            en: '1. Click red territory',
            bn: '১. লাল-এলাকায় ক্লিক'
          },
          text: {
            en: 'Click near the red dots: 3 neighbors vote, red wins. Read the console’s vote log.',
            bn: 'লাল-বিন্দুর কাছে ক্লিক: ৩ প্রতিবেশী ভোট দেয়, লাল জেতে। Console-এর ভোট-লগ পড়ুন।'
          }
        },
        {
          title: {
            en: '2. Click the borderland',
            bn: '২. সীমান্তে ক্লিক'
          },
          text: {
            en: 'Click between colors: mixed votes, close calls. This is where classifiers earn trust.',
            bn: 'দুই রঙের মাঝে ক্লিক: মিশ্র ভোট, কঠিন সিদ্ধান্ত। এখানেই classifier আস্থা অর্জন করে।'
          }
        },
        {
          title: {
            en: '3. Change K to 1, then 7',
            bn: '৩. K ১, তারপর ৭ করুন'
          },
          text: {
            en: 'k=1 copies the single nearest dot (jumpy); k=7 smooths but may drown minorities. Feel the trade-off.',
            bn: 'k=১ এক প্রতিবেশী নকল করে (লাফানো); k=৭ মসৃণ কিন্তু সংখ্যালঘু ডুবাতে পারে। Trade-off টের পান।'
          }
        },
        {
          title: {
            en: '4. Extend it (your turn)',
            bn: '৪. বাড়ান (আপনার পালা)'
          },
          text: {
            en: 'Add dots, add a third color, or count votes per class in the panel. Breaking and fixing is the lesson.',
            bn: 'বিন্দু যোগ করুন, তৃতীয় রং, বা প্যানেলে দল-ভোট গুনুন। ভাঙা-ঠিক করাই পাঠ।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'INSIDE — Your classifier, live',
        bn: 'INSIDE — আপনার classifier, live'
      }
    },
    {
      type: 'tryit',
      title: {
        en: 'k-NN: click the canvas to classify (edit K, press Run)',
        bn: 'k-NN: classify-তে canvas-এ ক্লিক করুন (K বদলে Run)'
      },
      html: '<h3>Click anywhere → majority vote decides</h3>\n<canvas id="c" width="380" height="250"></canvas>\n<p id="out">Click the canvas!</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\ncanvas { border: 1px solid #c7d2fe; border-radius: 8px; background: #f8fafc; cursor: crosshair; }\n#out { font-weight: bold; }',
      js: 'const RED = [[60,60],[95,75],[70,115],[115,55],[45,100]];\nconst BLUE = [[250,180],[285,200],[235,225],[310,165],[265,235]];\nconst K = 3; // ← try 1, then 7. Press Run after editing.\nconst cv = document.getElementById("c");\nconst c = cv.getContext("2d");\nconst out = document.getElementById("out");\n\nfunction draw(test) {\n  c.clearRect(0, 0, 380, 250);\n  const dot = (p, col) => { c.fillStyle = col; c.beginPath(); c.arc(p[0], p[1], 7, 0, 7); c.fill(); };\n  RED.forEach(p => dot(p, "#dc2626"));\n  BLUE.forEach(p => dot(p, "#2563eb"));\n  if (!test) return;\n  // lines to the K voters\n  c.strokeStyle = "#94a3b8"; c.lineWidth = 1;\n  test.voters.forEach(v => { c.beginPath(); c.moveTo(test.x, test.y); c.lineTo(v[0], v[1]); c.stroke(); });\n  c.fillStyle = "#ffffff"; c.strokeStyle = test.color; c.lineWidth = 4;\n  c.beginPath(); c.arc(test.x, test.y, 9, 0, 7); c.fill(); c.stroke();\n}\nfunction classify(x, y) {\n  const all = RED.map(p => ({ p, col: "red" })).concat(BLUE.map(p => ({ p, col: "blue" })));\n  all.forEach(o => { o.d = Math.hypot(o.p[0]-x, o.p[1]-y); });\n  all.sort((a, b) => a.d - b.d);\n  const voters = all.slice(0, K);\n  const reds = voters.filter(v => v.col === "red").length;\n  const winner = reds * 2 >= K ? "red" : "blue";\n  console.log("votes:", voters.map(v => v.col).join(", "), "→", winner);\n  return { x, y, voters: voters.map(v => v.p), color: winner === "red" ? "#dc2626" : "#2563eb", winner, reds };\n}\ncv.onclick = (e) => {\n  const r = cv.getBoundingClientRect();\n  const t = classify(e.clientX - r.left, e.clientY - r.top);\n  draw(t);\n  out.textContent = "Verdict: " + t.winner.toUpperCase() + " (" + t.reds + " red of " + K + " voters)";\n  out.style.color = t.color;\n};\ndraw(null);\nconsole.log("k-NN ready with K=" + K + " — click the canvas!");'
    },
    {
      type: 'compare',
      title: {
        en: 'k=1 vs k=15: the eternal trade-off',
        bn: 'k=১ বনাম k=১৫: চিরন্তন trade-off'
      },
      left: {
        title: {
          en: 'Tiny k (jumpy)',
          bn: 'ছোট k (লাফানো)'
        },
        points: [
          {
            en: 'Copies the nearest dot — one mislabeled dot corrupts its whole neighborhood.',
            bn: 'কাছের বিন্দু নকল করে — এক ভুল-লেবেল পুরো পাড়া নষ্ট করে।'
          },
          {
            en: 'Low bias, high variance: bends to noise.',
            bn: 'কম bias, বেশি variance: noise-এ বাঁকে।'
          }
        ]
      },
      right: {
        title: {
          en: 'Huge k (dull)',
          bn: 'বড় k (ভোঁতা)'
        },
        points: [
          {
            en: 'Majority drowns small-but-real pockets (rare diseases, niche tastes).',
            bn: 'সংখ্যাগরিষ্ঠ ছোট-কিন্তু-আসল পকেট ডুবায় (বিরল রোগ, niche রুচি)।'
          },
          {
            en: 'High bias, low variance: smooths away truth.',
            bn: 'বেশি bias, কম variance: সত্যি মসৃণ করে মুছে।'
          }
        ]
      }
    },
    {
      type: 'heading',
      id: 'result',
      text: {
        en: 'RESULT — Graduation checklist: 8 owned skills',
        bn: 'RESULT — গ্র্যাজুয়েশন-চেকলিস্ট: ৮ অর্জিত দক্ষতা'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'L1: define AI honestly; place any product inside AI ⊃ ML ⊃ DL.',
          bn: 'পাঠ ১: AI সৎ-সংজ্ঞা; যেকোনো পণ্য AI ⊃ ML ⊃ DL-এ বসানো।'
        },
        {
          en: 'L2: name the paradigm of any problem in 30 seconds; speak feature/label/model/prediction.',
          bn: 'পাঠ ২: যেকোনো সমস্যার ধারা ৩০ সেকেন্ডে; feature/label/model/prediction বলা।'
        },
        {
          en: 'L3: split train/test without cheating; plot before modeling; spot leaks.',
          bn: 'পাঠ ৩: প্রতারণাহীন train/test ভাগ; মডেলের আগে প্লট; ফাঁস-শনাক্ত।'
        },
        {
          en: 'L4: hand-run a perceptron; explain weights-as-knowledge and the XOR wall.',
          bn: 'পাঠ ৪: হাতে perceptron; ওজন-জ্ঞান আর XOR-দেয়াল ব্যাখ্যা।'
        },
        {
          en: 'L5: read train/test curves; set learning rates sanely; report locked-test scores only.',
          bn: 'পাঠ ৫: train/test curve পড়া; সুস্থ learning rate; শুধু তালা-test স্কোর।'
        },
        {
          en: 'L6: trace a forward pass; explain depth-as-hierarchy; pick CNN vs Transformer.',
          bn: 'পাঠ ৬: forward pass trace; গভীরতা-hierarchy ব্যাখ্যা; CNN বনাম Transformer বাছা।'
        },
        {
          en: 'L7: slice metrics; run the safety checklist; write limits docs.',
          bn: 'পাঠ ৭: মেট্রিক কাটা; নিরাপত্তা-চেকলিস্ট; সীমা-নথি।'
        },
        {
          en: 'L8: build, demo, and extend a live classifier — done above. Graduate. 🎓',
          bn: 'পাঠ ৮: live classifier বানানো, demo, বাড়ানো — উপরে সম্পন্ন। গ্র্যাজুয়েট। 🎓'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'DEBUG — k-NN’s ceilings (why nets win at scale)',
        bn: 'DEBUG — k-NN-এর ছাদ (স্কেলে net জেতে কেন)'
      }
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Lazy learning bills arrive at scale',
        bn: 'Lazy learning-এর বিল স্কেলে আসে'
      },
      text: {
        en: 'k-NN stores EVERYTHING and compares against all of it per prediction: a million photos × every query = too slow. Worse, distance loses meaning in 1,000 dimensions (the curse of dimensionality): everything is “far” from everything. Neural nets compress knowledge into weights instead — prediction stays fast whatever the dataset size. k-NN for baselines and small data; nets for scale.',
        bn: 'k-NN সব জমায়, প্রতি prediction-এ সবের সাথে তুলনা: দশ লাখ ছবি × প্রতি query = খুব ধীর। আরো খারাপ, ১,০০০ dimension-এ দূরত্ব অর্থ হারায় (curse of dimensionality): সব সবকিছু থেকে “দূরে”। Neural net জ্ঞান ওজনে সংকুচিত করে — dataset যাই হোক prediction দ্রুত। Baseline আর ছোট-ডেটায় k-NN; স্কেলে net।'
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'REAL WORLD — Where neighbors vote professionally',
        bn: 'REAL WORLD — প্রতিবেশী পেশাদার-ভোট কোথায়'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Recommendations: “users near you liked…” is k-NN thinking on taste vectors.',
          bn: 'সুপারিশ: “কাছের ব্যবহারকারী পছন্দ করেছে…” রুচি-vector-এ k-NN-চিন্তা।'
        },
        {
          en: 'Anomaly flags: transactions far from ALL neighbors get reviewed — distance as suspicion.',
          bn: 'অস্বাভাবিকতা-পতাকা: সব প্রতিবেশী থেকে দূরের লেনদেন দেখা হয় — সন্দেহ-হিসেবে দূরত্ব।'
        },
        {
          en: 'Every serious team’s day one: beat k-NN before claiming the neural net earned its GPUs.',
          bn: 'প্রতি serious দলের দিন-এক: neural net GPU-যোগ্য দাবির আগে k-NN-কে হারাও।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'NEXT — The machine-learning hub',
        bn: 'পরবর্তী — মেশিন লার্নিং হাব'
      }
    },
    {
      type: 'para',
      text: {
        en: 'This hub gave intuition with minimal math. The machine-learning hub keeps every skill and adds the machinery: real algorithms (regression, trees, SVMs, clustering), the mathematics of learning (probability, optimization), backpropagation derived properly, and end-to-end projects on real datasets. Same loop, full power — see you there.',
        bn: 'এই হাব ন্যূনতম গণিতে intuition দিল। Machine-learning হাব সব দক্ষতা রেখে যন্ত্রপাতি যোগ করে: আসল অ্যালগরিদম (regression, tree, SVM, clustering), শেখার গণিত (probability, optimization), ঠিকভাবে backpropagation, আর আসল dataset-এ end-to-end প্রজেক্ট। একই loop, পূর্ণ শক্তি — ওখানে দেখা হবে।'
      }
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'A pure JavaScript k-NN classifier predicting the class of query points.',
        bn: 'কোয়ারি বিন্দুর শ্রেণি নির্ধারণ করে বিশুদ্ধ জাভাস্ক্রিপ্টে লেখা k-NN ক্লাসিফায়ার।',
      },
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'knn.js',
      code: `const points = [
  { x: 1, y: 2, label: 'A' },
  { x: 2, y: 1, label: 'A' },
  { x: 5, y: 6, label: 'B' },
  { x: 6, y: 5, label: 'B' },
];
function classify(qx, qy, k = 3) {
  const dists = points.map(p => ({
    label: p.label,
    d: Math.hypot(p.x - qx, p.y - qy)
  })).sort((a, b) => a.d - b.d);
  const votes = {};
  for (let i = 0; i < k; i++) votes[dists[i].label] = (votes[dists[i].label] || 0) + 1;
  return Object.entries(votes).sort((a, b) => b[1] - a[1])[0][0];
}
console.log("Point 1 (1.5, 1.8):", classify(1.5, 1.8)); // -> Point 1 (1.5, 1.8): A
console.log("Point 2 (5.2, 5.8):", classify(5.2, 5.8)); // -> Point 2 (5.2, 5.8): B`,
      caption: {
        en: 'The first query classifies as A and the second query classifies as B.',
        bn: 'প্রথম কোয়ারিটি A শ্রেণিতে এবং দ্বিতীয় কোয়ারিটি B শ্রেণিতে পড়ে।',
      },
    },
  ],
  exercises: [
    {
      id: 'acp-ex-1',
      kind: 'mcq',
      topic: 'knn-vote',
      question: {
        en: 'k=5, neighbors vote blue, red, blue, blue, red. Verdict?',
        bn: 'k=৫, ভোট নীল, লাল, নীল, নীল, লাল। রায়?'
      },
      options: [
        {
          en: 'Blue (3 vs 2)',
          bn: 'নীল (৩ বনাম ২)'
        },
        {
          en: 'Red (2 vs 3)',
          bn: 'লাল (২ বনাম ৩)'
        },
        {
          en: 'Tie — impossible',
          bn: 'ড্র — অসম্ভব'
        },
        {
          en: 'No prediction possible',
          bn: 'Prediction অসম্ভব'
        }
      ],
      answer: 0,
      hint: {
        en: 'Count.',
        bn: 'গুনুন।'
      },
      explanation: {
        en: 'Blue 3, red 2 → blue. Majority vote is all k-NN ever does.',
        bn: 'নীল ৩, লাল ২ → নীল। Majority vote-ই k-NN-এর সব।'
      }
    },
    {
      id: 'acp-ex-2',
      kind: 'mcq',
      topic: 'hub-cumulative-1',
      question: {
        en: 'Your k-NN scores 100% on its stored dots. Honest conclusion? (L3+L5)',
        bn: 'k-NN জমা-বিন্দুতে ১০০%। সৎ সিদ্ধান্ত? (পাঠ ৩+৫)'
      },
      options: [
        {
          en: 'Meaningless — it was tested on training dots; grade on held-out points',
          bn: 'অর্থহীন — training-বিন্দুতে পরীক্ষা; সরিয়ে-রাখা বিন্দুতে মূল্যায়ন'
        },
        {
          en: 'Perfect model — ship it',
          bn: 'নিখুঁত মডেল — চালু করো'
        },
        {
          en: 'k is too big',
          bn: 'k খুব বড়'
        },
        {
          en: 'Needs deep learning',
          bn: 'Deep learning লাগবে'
        }
      ],
      answer: 0,
      hint: {
        en: '“Grading your own homework.”',
        bn: '“নিজের বাড়ির-কাজে নম্বর।”'
      },
      explanation: {
        en: 'k-NN trivially “predicts” stored dots (each dot’s nearest neighbor is itself at distance 0). Only fresh, held-out points grade honestly — L3’s lock, L5’s mirror.',
        bn: 'k-NN জমা-বিন্দু তুচ্ছভাবে “predict” করে (প্রতি বিন্দুর কাছের প্রতিবেশী ০-দূরত্বে নিজে)। শুধু নতুন সরিয়ে-রাখা বিন্দু সৎ মূল্যায়ন দেয় — পাঠ ৩-এর তালা, পাঠ ৫-এর আয়না।'
      }
    },
    {
      id: 'acp-ex-3',
      kind: 'mcq',
      topic: 'hub-cumulative-2',
      question: {
        en: 'k-NN on 1M photos is too slow per query, but a small net is fast. Why? (L6+L8)',
        bn: '১০ লাখ ছবিতে k-NN ধীর, ছোট net দ্রুত। কেন? (পাঠ ৬+৮)'
      },
      options: [
        {
          en: 'k-NN compares against all stored data per query; nets compress knowledge into fixed weights',
          bn: 'k-NN প্রতি query-তে সব জমা-ডেটা তুলনা করে; net জ্ঞান নির্দিষ্ট ওজনে সংকুচিত করে'
        },
        {
          en: 'Nets skip the forward pass',
          bn: 'Net forward pass এড়ায়'
        },
        {
          en: 'k-NN uses no electricity',
          bn: 'k-NN বিদ্যুৎ ব্যবহার করে না'
        },
        {
          en: 'Photos dislike voting',
          bn: 'ছবি ভোট অপছন্দ করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Lazy vs compressed.',
        bn: 'Lazy বনাম সংকুচিত।'
      },
      explanation: {
        en: 'Lazy learning defers ALL work to prediction time (1M distance computations per query). A net’s forward pass costs the same whether it trained on thousands or billions.',
        bn: 'Lazy learning সব কাজ prediction-সময়ে ঠেলে (প্রতি query-তে ১০ লাখ দূরত্ব-হিসাব)। Net-এর forward pass হাজার বা কোটিতে একই খরচ।'
      }
    },
    {
      id: 'acp-ex-4',
      kind: 'predict',
      topic: 'graduate-proof',
      question: {
        en: 'Graduation proof in two lines: (1) define supervised learning using L2’s four words; (2) state the one test-set rule from L3.',
        bn: 'দুই লাইনে গ্র্যাজুয়েশন-প্রমাণ: (১) পাঠ ২-এর চার শব্দে supervised learning সংজ্ঞা; (২) পাঠ ৩-এর এক test-set নিয়ম।'
      },
      answer: '(1) Features in, model computes, prediction out, labels judge training. (2) Lock the test set before training; open once to report the final score.',
      accept: [
        'feature',
        'label',
        'model',
        'prediction',
        'lock',
        'test',
        'once'
      ],
      hint: {
        en: 'RESULT lists of L2 and L3.',
        bn: 'পাঠ ২ আর ৩-এর RESULT তালিকা।'
      },
      explanation: {
        en: 'Full credit: all four L2 words in a correct sentence + the lock-and-open-once rule. These two lines carry the hub’s spine.',
        bn: 'পূর্ণ নম্বর: সঠিক বাক্যে পাঠ ২-এর চার শব্দ + তালা-একবার-খোলা নিয়ম। এই দুই লাইন হাবের মেরুদণ্ড বহন করে।'
      }
    }
  ],
  quiz: {
    id: 'ai-capstone-quiz',
    title: {
      en: 'Capstone exam (whole hub)',
      bn: 'Capstone পরীক্ষা (পুরো হাব)'
    },
    questions: [
      {
        id: 'acpq1',
        kind: 'mcq',
        topic: 'paradigm-final',
        question: {
          en: 'k-NN with labeled dots is which paradigm? (L2)',
          bn: 'Label-বিন্দুর k-NN কোন ধারা? (পাঠ ২)'
        },
        options: [
          {
            en: 'Supervised — learns from labeled examples',
            bn: 'Supervised — label-উদাহরণ থেকে শেখে'
          },
          {
            en: 'Unsupervised — no training loop',
            bn: 'Unsupervised — training loop নেই'
          },
          {
            en: 'Reinforcement — clicks are rewards',
            bn: 'Reinforcement — ক্লিক পুরস্কার'
          },
          {
            en: 'Not ML at all',
            bn: 'ML-ই নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Labels present → ?',
          bn: 'Label আছে → ?'
        },
        explanation: {
          en: 'Labeled examples + predict-the-label = supervised, even with zero gradient steps. “No training loop” describes laziness, not paradigm.',
          bn: 'Label-উদাহরণ + label-predict = supervised, gradient-ধাপ শূন্য হলেও। “Training loop নেই” laziness বোঝায়, ধারা নয়।'
        }
      },
      {
        id: 'acpq2',
        kind: 'mcq',
        topic: 'safety-final',
        question: {
          en: 'Before shipping your classifier for loan decisions, the FIRST safety move is… (L7)',
          bn: 'ঋণ-সিদ্ধান্তে classifier চালুর আগে প্রথম নিরাপত্তা-চাল… (পাঠ ৭)'
        },
        options: [
          {
            en: 'Slice accuracy by group + human review for edge cases',
            bn: 'দলে accuracy কাটা + edge case-এ মানুষের দেখা'
          },
          {
            en: 'Delete the test set',
            bn: 'Test set মুছে ফেলা'
          },
          {
            en: 'Advertise the overall number',
            bn: 'মোট সংখ্যা বিজ্ঞাপন'
          },
          {
            en: 'Raise k to 1000',
            bn: 'k ১০০০ করা'
          }
        ],
        answer: 0,
        hint: {
          en: 'Checklist steps 2 and 4.',
          bn: 'চেকলিস্ট ধাপ ২ আর ৪।'
        },
        explanation: {
          en: 'High stakes demand sliced metrics and human-in-the-loop. Everything else is decoration.',
          bn: 'বেশি-ঝুঁকিতে কাটা-মেট্রিক আর human-in-the-loop বাধ্যতামূলক। বাকি সব সাজ।'
        }
      },
      {
        id: 'acpq3',
        kind: 'mcq',
        topic: 'depth-final',
        question: {
          en: 'Why did the hub teach perceptron → training → networks in that order? (L4–L6)',
          bn: 'হাব perceptron → training → network এই ক্রমে শেখাল কেন? (পাঠ ৪–৬)'
        },
        options: [
          {
            en: 'Atom, then how atoms learn, then atoms organized — each layer needs the last',
            bn: 'পরমাণু, তারপর পরমাণু শেখে কীভাবে, তারপর সাজানো-পরমাণু — প্রতি স্তরে আগেরটা লাগে'
          },
          {
            en: 'Alphabetical order',
            bn: 'বর্ণানুক্রম'
          },
          {
            en: 'Random shuffle',
            bn: 'এলোমেলো'
          },
          {
            en: 'Longest lesson last',
            bn: 'লম্বা পাঠ শেষে'
          }
        ],
        answer: 0,
        hint: {
          en: 'The L6 “more of these, organized” line.',
          bn: 'পাঠ ৬-এর “এগুলোই বেশি, সাজিয়ে” লাইন।'
        },
        explanation: {
          en: 'Networks are trained perceptrons, stacked. Without L4’s atom and L5’s loop, L6 would be magic words. Order is pedagogy.',
          bn: 'Network হলো train-করা perceptron, স্তূপে। পাঠ ৪-এর পরমাণু আর পাঠ ৫-এর loop ছাড়া পাঠ ৬ জাদু-শব্দ হতো। ক্রমই শিক্ষণ।'
        }
      },
      {
        id: 'acpq4',
        kind: 'predict',
        topic: 'teach-back',
        question: {
          en: 'Teach-back (graduation): explain to a friend in two sentences what a model is and how you would honestly test one.',
          bn: 'Teach-back (গ্র্যাজুয়েশন): বন্ধুকে ২ বাক্যে বোঝান ১টি মডেল কী, আর সৎভাবে পরীক্ষা কীভাবে করবেন।'
        },
        answer: 'A model is a machine that learned rules from labeled examples to predict new cases; test it once on locked unseen data and report that score, sliced by group.',
        accept: [
          'model',
          'examples',
          'predict',
          'locked',
          'test',
          'score'
        ],
        hint: {
          en: 'L1’s definition + L3’s lock + L7’s slice.',
          bn: 'পাঠ ১-এর সংজ্ঞা + পাঠ ৩-এর তালা + পাঠ ৭-এর কাটা।'
        },
        explanation: {
          en: 'Full credit weaves three lessons: learned-from-examples (L1), locked-test grading (L3), sliced reporting (L7). If you can teach it, you own it. 🎓',
          bn: 'পূর্ণ নম্বরে তিন পাঠের বুনন: উদাহরণ-থেকে-শেখা (পাঠ ১), তালা-test মূল্যায়ন (পাঠ ৩), কাটা-প্রতিবেদন (পাঠ ৭)। শেখাতে পারলে মালিক আপনি। 🎓'
        }
      }
    ]
  }
};
