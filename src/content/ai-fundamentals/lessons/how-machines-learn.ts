import type { Lesson } from '../../../lib/types';

export const HowMachinesLearnLesson: Lesson = {
  slug: 'how-machines-learn',
  tech: 'ai-fundamentals',
  title: {
    en: 'How Machines Learn',
    bn: 'মেশিন কীভাবে শেখে'
  },
  summary: {
    en: 'All machine learning is one of three ideas: learn from answered examples (supervised), find structure in raw data (unsupervised), or learn from rewards and punishments (reinforcement). This lesson teaches you to look at any problem and name which one it is — plus the four words (feature, label, model, prediction) the whole field speaks.',
    bn: 'সব machine learning তিন ধারণার একটা: উত্তর-দেওয়া উদাহরণ থেকে শেখা (supervised), কাঁচা ডেটায় কাঠামো খোঁজা (unsupervised), বা পুরস্কার-শাস্তি থেকে শেখা (reinforcement)। এই পাঠে শিখবেন যেকোনো সমস্যা দেখে বলা — এটা কোনটা — আর চার শব্দ (feature, label, model, prediction), যা পুরো ফিল্ড বলে।'
  },
  minutes: 14,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'WHAT — Three ways to learn',
        bn: 'WHAT — শেখার তিন পথ'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Supervised learning studies with an answer key: every example comes with the right answer (this email → spam). Unsupervised learning gets no answers — it must find groups and patterns alone (these customers naturally fall into 4 clusters). Reinforcement learning learns like a gamer: try actions, collect rewards, repeat what scores.',
        bn: 'Supervised learning উত্তরপত্র নিয়ে পড়ে: প্রতি উদাহরণের সাথে সঠিক উত্তর থাকে (এই ইমেইল → স্প্যাম)। Unsupervised learning উত্তর পায় না — একাই দল আর প্যাটার্ন খুঁজতে হয় (এই গ্রাহকরা স্বাভাবিকভাবে ৪ দলে ভাগ হয়)। Reinforcement learning গেমারের মতো শেখে: কাজ করে দেখো, পুরস্কার জমাও, যেটায় স্কোর হয় সেটা আবার করো।'
      }
    },
    {
      type: 'table',
      head: [
        {
          en: 'Paradigm',
          bn: 'ধারা'
        },
        {
          en: 'Learns from',
          bn: 'শেখে'
        },
        {
          en: 'Classic example',
          bn: 'চিরায়ত উদাহরণ'
        }
      ],
      rows: [
        [
          {
            en: 'Supervised',
            bn: 'Supervised'
          },
          {
            en: 'Labeled pairs: input + correct answer',
            bn: 'লেবেল-জোড়া: ইনপুট + সঠিক উত্তর'
          },
          {
            en: 'Spam filter, house-price predictor',
            bn: 'স্প্যাম ফিল্টার, বাড়ির-দাম পূর্বাভাস'
          }
        ],
        [
          {
            en: 'Unsupervised',
            bn: 'Unsupervised'
          },
          {
            en: 'Raw data, no answers',
            bn: 'কাঁচা ডেটা, উত্তর নেই'
          },
          {
            en: 'Customer segments, anomaly detection',
            bn: 'গ্রাহক-ভাগ, অস্বাভাবিকতা শনাক্ত'
          }
        ],
        [
          {
            en: 'Reinforcement',
            bn: 'Reinforcement'
          },
          {
            en: 'Rewards after actions',
            bn: 'কাজের পর পুরস্কার'
          },
          {
            en: 'Game players, robot control',
            bn: 'গেম-খেলোয়াড়, রোবট-নিয়ন্ত্রণ'
          }
        ]
      ],
      caption: {
        en: '90% of industry ML is supervised. The other two shine where labels are impossible or the world is a game.',
        bn: 'ইন্ডাস্ট্রির ৯০% ML supervised। বাকি ২টি ক্ষেত্র জ্বলে যেখানে লেবেল অসম্ভব বা পৃথিবীটাই খেলা।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Feature',
          def: {
            en: 'One input signal the model reads (email length, sender, word counts).',
            bn: 'মডেল পড়ে এমন এক ইনপুট-সংকেত (ইমেইলের দৈর্ঘ্য, প্রেরক, শব্দ-গণনা)।'
          }
        },
        {
          term: 'Label',
          def: {
            en: 'The correct answer attached to an example (spam / not spam).',
            bn: 'উদাহরণের গায়ে লাগানো সঠিক উত্তর (স্প্যাম / স্প্যাম-নয়)।'
          }
        },
        {
          term: 'Model',
          def: {
            en: 'The trained machine: features in, prediction out.',
            bn: 'প্রশিক্ষিত যন্ত্র: feature ঢোকে, prediction বেরোয়।'
          }
        },
        {
          term: 'Prediction',
          def: {
            en: 'What the model outputs for new, unseen input.',
            bn: 'নতুন, অদেখা ইনপুটে মডেল যা আউটপুট দেয়।'
          }
        },
        {
          term: 'Training',
          def: {
            en: 'Showing examples so the model adjusts itself to be less wrong.',
            bn: 'উদাহরণ দেখিয়ে মডেলকে কম-ভুলের দিকে নিজেকে ঠিক করতে দেওয়া।'
          }
        },
        {
          term: 'Cluster',
          def: {
            en: 'A group unsupervised learning discovers (no one named the groups first).',
            bn: 'unsupervised learning আবিষ্কার করা দল (আগে কেউ দলের নাম দেয়নি)।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'why',
      text: {
        en: 'WHY — The paradigm decides the project',
        bn: 'WHY — ধারাই প্রজেক্ট ঠিক করে'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Pick supervised when you can get answers: past spam verdicts, past house sale prices. Labels are fuel.',
          bn: 'উত্তর পাওয়া গেলে supervised নিন: পুরনো স্প্যাম-রায়, পুরনো বাড়ি-বিক্রির দাম। লেবেলই জ্বালানি।'
        },
        {
          en: 'Pick unsupervised when answers do not exist: “what kinds of customers do we even have?” Nobody knows yet — that is the question.',
          bn: 'উত্তর না থাকলে unsupervised নিন: “আমাদের কী ধরনের গ্রাহকই আছে?” কেউ জানে না — এটাই প্রশ্ন।'
        },
        {
          en: 'Pick reinforcement when the world gives scores: games, robots, trading sims. No answer key — just win/lose.',
          bn: 'পৃথিবী স্কোর দিলে reinforcement নিন: গেম, রোবট, ট্রেডিং-সিম। উত্তরপত্র নেই — শুধু জয়/পরাজয়।'
        },
        {
          en: 'Senior habit: state the paradigm in the first sentence of any ML design. If you cannot, you do not understand the problem yet.',
          bn: 'সিনিয়র-অভ্যাস: ML ডিজাইনের প্রথম বাক্যেই ধারা বলুন। না পারলে সমস্যাটাই এখনো বোঝেননি।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'how',
      text: {
        en: 'HOW — Name the paradigm in 30 seconds',
        bn: 'HOW — ৩০ সেকেন্ডে ধারা চেনা'
      }
    },
    {
      type: 'diagram',
      title: {
        en: 'The path this lesson walks',
        bn: 'এই পাঠ যে-পথ হাঁটে'
      },
      svg: '<svg viewBox="0 0 640 168" font-family="system-ui, sans-serif" role="img" aria-label="Lesson flow: Three ways to learn to The paradigm decides the … to Name the paradigm in 30 s… to What “supervision” actual… to Your 30-second classifier">\n<g font-size="12" font-weight="700" fill="currentColor">\n<rect x="26" y="44" width="108" height="56" rx="10" fill="hsl(203 65% 46% / .12)" stroke="hsl(203 60% 45%)" stroke-width="1.2"/>\n<text x="36" y="59" font-size="10" fill="hsl(203 55% 38%)" font-weight="800">1 · Three ways to learn</text>\n<text x="36" y="78" font-size="10.5" fill="currentColor" opacity=".85">WHAT — শেখার তিন পথ</text>\n<path d="M 135 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar203)"/>\n<rect x="146" y="44" width="108" height="56" rx="10" fill="hsl(227 65% 46% / .12)" stroke="hsl(227 60% 45%)" stroke-width="1.2"/>\n<text x="156" y="59" font-size="10" fill="hsl(227 55% 38%)" font-weight="800">2 · The paradigm decides the …</text>\n<text x="156" y="78" font-size="10.5" fill="currentColor" opacity=".85">WHY — ধারাই প্রজেক্ট ঠিক করে</text>\n<path d="M 255 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar203)"/>\n<rect x="266" y="44" width="108" height="56" rx="10" fill="hsl(251 65% 46% / .12)" stroke="hsl(251 60% 45%)" stroke-width="1.2"/>\n<text x="276" y="59" font-size="10" fill="hsl(251 55% 38%)" font-weight="800">3 · Name the paradigm in 30 s…</text>\n<text x="276" y="78" font-size="10.5" fill="currentColor" opacity=".85">HOW — ৩০ সেকেন্ডে ধারা চেনা</text>\n<path d="M 375 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar203)"/>\n<rect x="386" y="44" width="108" height="56" rx="10" fill="hsl(275 65% 46% / .12)" stroke="hsl(275 60% 45%)" stroke-width="1.2"/>\n<text x="396" y="59" font-size="10" fill="hsl(275 55% 38%)" font-weight="800">4 · What “supervision” actual…</text>\n<text x="396" y="78" font-size="10.5" fill="currentColor" opacity=".85">INSIDE — “supervision” আসলে ম…</text>\n<path d="M 495 72 h 9" stroke="currentColor" stroke-opacity=".45" stroke-width="1.4" marker-end="url(#ar203)"/>\n<rect x="506" y="44" width="108" height="56" rx="10" fill="hsl(299 65% 46% / .12)" stroke="hsl(299 60% 45%)" stroke-width="1.2"/>\n<text x="516" y="59" font-size="10" fill="hsl(299 55% 38%)" font-weight="800">5 · Your 30-second classifier</text>\n<text x="516" y="78" font-size="10.5" fill="currentColor" opacity=".85">RESULT — আপনার ৩০-সেকেন্ড শ্র…</text>\n<defs><marker id="ar203" markerWidth="7" markerHeight="7" refX="5.5" refY="3" orient="auto"><path d="M0,0 L6,3 L0,6 z" fill="currentColor" opacity=".55"/></marker></defs>\n</g>\n<text x="26" y="126" font-size="10.5" fill="currentColor" opacity=".7" font-weight="700">terms on this path</text>\n<rect x="26" y="134" width="60.800000000000004" height="18" rx="9" fill="hsl(23 60% 50% / .16)" stroke="hsl(23 55% 45%)" stroke-opacity=".5"/>\n<text x="56.400000000000006" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Feature</text>\n<rect x="94.80000000000001" y="134" width="48" height="18" rx="9" fill="hsl(23 60% 50% / .16)" stroke="hsl(23 55% 45%)" stroke-opacity=".5"/>\n<text x="118.80000000000001" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Label</text>\n<rect x="150.8" y="134" width="48" height="18" rx="9" fill="hsl(23 60% 50% / .16)" stroke="hsl(23 55% 45%)" stroke-opacity=".5"/>\n<text x="174.8" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Model</text>\n<rect x="206.8" y="134" width="80" height="18" rx="9" fill="hsl(23 60% 50% / .16)" stroke="hsl(23 55% 45%)" stroke-opacity=".5"/>\n<text x="246.8" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Prediction</text>\n<rect x="294.8" y="134" width="67.2" height="18" rx="9" fill="hsl(23 60% 50% / .16)" stroke="hsl(23 55% 45%)" stroke-opacity=".5"/>\n<text x="328.40000000000003" y="146.5" text-anchor="middle" font-size="10" fill="currentColor" opacity=".85">Training</text>\n</svg>',
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
            en: '1. Ask: do correct answers exist?',
            bn: '১. প্রশ্ন: সঠিক উত্তর কি আছে?'
          },
          text: {
            en: 'Old emails marked spam/not-spam? Old houses with sale prices? Yes → supervised candidate.',
            bn: 'স্প্যাম/নয়-স্প্যাম চিহ্নিত পুরনো ইমেইল? বিক্রি-দামসহ পুরনো বাড়ি? হ্যাঁ → supervised প্রার্থী।'
          }
        },
        {
          title: {
            en: '2. Ask: is the goal to discover?',
            bn: '২. প্রশ্ন: লক্ষ্য কি আবিষ্কার?'
          },
          text: {
            en: '“Group my users”, “flag weird transactions” with no examples of weird → unsupervised.',
            bn: '“ব্যবহারকারী দলে ভাগ করো”, “অদ্ভুত লেনদেন ধরো” — অদ্ভুতের উদাহরণ ছাড়াই → unsupervised।'
          }
        },
        {
          title: {
            en: '3. Ask: does the world score actions?',
            bn: '৩. প্রশ্ন: পৃথিবী কি কাজে স্কোর দেয়?'
          },
          text: {
            en: 'Win/lose, profit/loss, reached the goal or crashed → reinforcement.',
            bn: 'জয়/পরাজয়, লাভ/ক্ষতি, লক্ষ্যে পৌঁছেছে না বিধ্বস্ত → reinforcement।'
          }
        },
        {
          title: {
            en: '4. Say it in one line',
            bn: '৪. এক লাইনে বলুন'
          },
          text: {
            en: '“Supervised classification: email feature inputs → spam label.” If the line is fuzzy, the project will be too.',
            bn: '“Supervised classification: ইমেইল-feature → স্প্যাম-label।” লাইন ঝাপসা হলে প্রজেক্টও হবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'internal',
      text: {
        en: 'INSIDE — What “supervision” actually means',
        bn: 'INSIDE — “supervision” আসলে মানে কী'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Supervision is just answer keys. Training shows the pair (features → label), the model guesses, the gap between guess and label becomes an error signal, and the model nudges itself to shrink that error. Repeat a million times: learning. Unsupervised has no error signal from answers — it optimizes structure instead (tight clusters, faithful compression). Reinforcement’s signal is delayed reward — the hardest, slowest teacher of the three.',
        bn: 'Supervision মানে শুধু উত্তরপত্র। Training-এ জোড়া দেখানো হয় (feature → label), মডেল অনুমান করে, অনুমান আর label-এর ফারাক error-signal হয়, আর মডেল সেই error কমাতে নিজেকে ঠেলে। অনেক বার চালাও: শেখা। Unsupervised-এ উত্তরের error-signal নেই — সে কাঠামো ঠিক করে (আঁটসাঁট cluster, বিশ্বস্ত সংকোচন)। Reinforcement-এর signal দেরিতে-আসা পুরস্কার — ৩ পদ্ধতির মধ্যে কঠিনতম, ধীরতম শিক্ষক।'
      }
    },
    {
      type: 'compare',
      title: {
        en: 'Same customer data, two questions',
        bn: 'একই গ্রাহক-ডেটা, দুই প্রশ্ন'
      },
      left: {
        title: {
          en: 'Supervised question',
          bn: 'Supervised প্রশ্ন'
        },
        points: [
          {
            en: '“Which customers will cancel?” — history has cancel/stay labels.',
            bn: '“কোন গ্রাহক বাতিল করবে?” — ইতিহাসে বাতিল/থাকা লেবেল আছে।'
          },
          {
            en: 'Success is measurable: accuracy on past months.',
            bn: 'সাফল্য মাপা যায়: গত মাসগুলোতে accuracy।'
          }
        ]
      },
      right: {
        title: {
          en: 'Unsupervised question',
          bn: 'Unsupervised প্রশ্ন'
        },
        points: [
          {
            en: '“What natural groups exist?” — nobody labeled groups before.',
            bn: '“স্বাভাবিক দল কী কী আছে?” — আগে কেউ দলে লেবেল দেয়নি।'
          },
          {
            en: 'Success is usefulness: do the groups change a business decision?',
            bn: 'সাফল্য উপযোগিতা: দলগুলো কি ব্যবসায়িক সিদ্ধান্ত বদলায়?'
          }
        ]
      }
    },
    {
      type: 'heading',
      id: 'result',
      text: {
        en: 'RESULT — Your 30-second classifier',
        bn: 'RESULT — আপনার ৩০-সেকেন্ড শ্রেণিকারক'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Answers exist → supervised. Discovery goal → unsupervised. World scores actions → reinforcement.',
          bn: 'উত্তর আছে → supervised। লক্ষ্য আবিষ্কার → unsupervised। পৃথিবী কাজে স্কোর দেয় → reinforcement।'
        },
        {
          en: 'Speak the four words fluently: features go in, the model computes, a prediction comes out, labels judge training.',
          bn: 'চার শব্দে সাবলীল হোন: feature ঢোকে, মডেল হিসাব করে, prediction বেরোয়, label training-এর বিচার করে।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'debug',
      text: {
        en: 'DEBUG — Two paradigm traps',
        bn: 'DEBUG — দুই ধারা-ফাঁদ'
      }
    },
    {
      type: 'callout',
      kind: 'mistake',
      title: {
        en: 'Trap: “Supervised is always best”',
        bn: 'ফাঁদ: “Supervised সবসময় সেরা”'
      },
      text: {
        en: 'Labels cost money — sometimes a fortune (doctors labeling X-rays for months). If labels are scarce, a clever unsupervised or semi-supervised approach beats a starved supervised model. Match the paradigm to the data you HAVE.',
        bn: 'লেবেলে টাকা লাগে — কখনো কপাল-ভাঙা টাকা (মাসের পর মাস X-ray-তে ডাক্তারের লেবেল)। লেবেল কম থাকলে চালাক unsupervised বা semi-supervised পদ্ধতি না-খাওয়া supervised মডেলকে হারায়। যে ডেটা আছে, ধারা তার সাথে মেলান।'
      }
    },
    {
      type: 'callout',
      kind: 'warn',
      title: {
        en: 'Trap: “Unsupervised means no work”',
        bn: 'ফাঁদ: “Unsupervised মানে কাজ নেই”'
      },
      text: {
        en: 'Clusters still need a human to ask “so what?” An algorithm can group customers; only a person can decide the groups mean “students vs parents” and act on it. Unsupervised finds; humans conclude.',
        bn: 'Cluster-এরও মানুষ লাগে “তাতে কী?” বলতে। অ্যালগরিদম গ্রাহক দলে ভাগ করতে পারে; শুধু মানুষই সিদ্ধান্ত নিতে পারে দল মানে “ছাত্র বনাম অভিভাবক”, আর ব্যবস্থা নিতে পারে। Unsupervised খোঁজে; মানুষ সিদ্ধান্তে পৌঁছায়।'
      }
    },
    {
      type: 'heading',
      id: 'realworld',
      text: {
        en: 'REAL WORLD — Paradigm spotting',
        bn: 'REAL WORLD — ধারা-শনাক্ত'
      }
    },
    {
      type: 'list',
      items: [
        {
          en: 'Supervised: email spam filters (labeled verdicts), loan default scores (labeled repayments), translation (paired sentences).',
          bn: 'Supervised: ইমেইল-স্প্যাম ফিল্টার (লেবেল-রায়), ঋণ-খেলাপি স্কোর (লেবেল-পরিশোধ), অনুবাদ (জোড়া-বাক্য)।'
        },
        {
          en: 'Unsupervised: “customers like you” segments, fraud anomaly flags, news-topic grouping.',
          bn: 'Unsupervised: “আপনার মতো গ্রাহক” ভাগ, জালিয়াতি-অস্বাভাবিকতা পতাকা, খবর-বিষয় দল।'
        },
        {
          en: 'Reinforcement: chess/Go champions, warehouse robots, data-center cooling ( DeepMind cut Google’s cooling bill ~40%).',
          bn: 'Reinforcement: দাবা/Go চ্যাম্পিয়ন, গুদাম-রোবট, ডেটা-সেন্টার শীতলীকরণ (DeepMind Google-এর শীতল-বিল ~৪০% কমিয়েছিল)।'
        }
      ]
    },
    {
      type: 'heading',
      id: 'next',
      text: {
        en: 'NEXT — Data first',
        bn: 'NEXT — আগে ডেটা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Paradigms chosen, vocabulary loaded. Lesson 3 is the most practical in the hub: what training data really looks like, how to split it honestly, and why data quality decides everything — with a scatter plot you run yourself.',
        bn: 'ধারা বাছা, শব্দভাণ্ডার লোড। পাঠ ৩ হাবের সবচেয়ে প্রায়োগিক: training data আসলে দেখতে কেমন, সৎভাবে কীভাবে ভাগ করবেন, আর ডেটার মান কেন সব ঠিক করে — নিজে চালানো scatter plot সহ।'
      }
    },
    { type: 'heading', id: 'run', text: { en: 'Run it: the claim, in a terminal', bn: 'চালিয়ে দেখা: একই কথা টার্মিনালে' } },
    {
      type: 'para',
      text: {
        en: 'Training is a loop that nudges two numbers downhill on the error. Run it and read the two columns: the loss, and what the model now believes.',
        bn: 'ট্রেনিং মানে দুটি সংখ্যাকে ত্রুটির ঢালে নিচের দিকে ঠেলে দেওয়া লুপ। চালিয়ে দুই কলাম পড়ুন: loss কত, আর মডেল এখন কী বিশ্বাস করে।'
      }
    },
    {
      type: 'code',
      lang: 'js',
      filename: 'descent.js',
      code: `// y = 3x + 7 with noise. Learn a and b by gradient descent, watching the loss fall.
let seed = 7;
const rnd = () => ((seed = (seed * 1103515245 + 12345) & 0x7fffffff) / 0x7fffffff);
const pts = Array.from({ length: 40 }, (_, i) => {
  const x = i / 4;
  return { x, y: 3 * x + 7 + (rnd() - 0.5) * 2 };
});
let a = 0, b = 0;
const rate = 0.02;
const loss = () => pts.reduce((s, p) => s + (a * p.x + b - p.y) ** 2, 0) / pts.length;
for (let epoch = 0; epoch <= 200; epoch++) {
  let ga = 0, gb = 0;
  for (const p of pts) { const e = a * p.x + b - p.y; ga += 2 * e * p.x; gb += 2 * e; }
  a -= rate * ga / pts.length;
  b -= rate * gb / pts.length;
  if (epoch % 50 === 0) console.log('epoch', String(epoch).padStart(3), 'loss', loss().toFixed(3), 'a', a.toFixed(2), 'b', b.toFixed(2));
}

// --- what this file prints, one run ---
// epoch   0 loss 63.599 a 5.22 b 0.87
// epoch  50 loss 4.334 a 3.58 b 3.25
// epoch 100 loss 1.844 a 3.34 b 4.80
// epoch 150 loss 0.945 a 3.20 b 5.73
// epoch 200 loss 0.621 a 3.11 b 6.29`,
      caption: {
        en: 'Nothing in that loop is magic. Epoch zero believes the slope is 5.22; epoch 200 lands at 3.11 against a truth of 3, and the intercept creeps from 0.87 to 6.29.',
        bn: 'লুপটিতে কিছুই জাদু নয়। প্রথম ধাপে ঢাল ৫.২২ ভেবে বসানো হয়, ২০০ তম ধাপে ৩.১১ — আসল মান ৩ এর কাছে; আর ছেদবিন্দু ০.৮৭ থেকে ৬.২৯ এ উঠে আসে।'
      }
    },
  ],
  exercises: [
    {
      id: 'hml-ex-1',
      kind: 'mcq',
      topic: 'paradigm-pick',
      question: {
        en: 'A bank has 5 years of loans labeled “repaid / defaulted” and wants risk scores. Paradigm?',
        bn: 'ব্যাংকের ৫ বছরের ঋণে “পরিশোধ/খেলাপি” লেবেল আছে; risk score চায়। ধারা?'
      },
      options: [
        {
          en: 'Supervised — answers exist in history',
          bn: 'Supervised — ইতিহাসে উত্তর আছে'
        },
        {
          en: 'Unsupervised — no labels at all',
          bn: 'Unsupervised — লেবেলই নেই'
        },
        {
          en: 'Reinforcement — the bank is a game',
          bn: 'Reinforcement — ব্যাংক একটা খেলা'
        },
        {
          en: 'No ML possible',
          bn: 'ML সম্ভব নয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Step 1 of the 30-second test: do correct answers exist?',
        bn: '৩০-সেকেন্ড পরীক্ষার ধাপ ১: সঠিক উত্তর কি আছে?'
      },
      explanation: {
        en: 'Repaid/defaulted labels + features (income, history) = textbook supervised learning: predict the label for new applicants.',
        bn: 'পরিশোধ/খেলাপি লেবেল + feature (আয়, ইতিহাস) = পাঠ্যবইয়ের supervised learning: নতুন আবেদনকারীর লেবেল predict করো।'
      }
    },
    {
      id: 'hml-ex-2',
      kind: 'mcq',
      topic: 'paradigm-pick-2',
      question: {
        en: '“Find groups of shoppers I never thought of.” No group labels exist. Paradigm?',
        bn: '“ভাবিনি এমন ক্রেতা-দল খুঁজে দাও।” দলের লেবেল নেই। ধারা?'
      },
      options: [
        {
          en: 'Unsupervised — the goal is discovery',
          bn: 'Unsupervised — লক্ষ্য আবিষ্কার'
        },
        {
          en: 'Supervised — everything is supervised',
          bn: 'Supervised — সবই supervised'
        },
        {
          en: 'Reinforcement — shoppers give rewards',
          bn: 'Reinforcement — ক্রেতা পুরস্কার দেয়'
        },
        {
          en: 'Rule-based programming only',
          bn: 'শুধু নিয়ম-প্রোগ্রামিং'
        }
      ],
      answer: 0,
      hint: {
        en: 'Nobody knows the groups — that IS the question.',
        bn: 'দল কেউ জানে না — এটাই প্রশ্ন।'
      },
      explanation: {
        en: 'No labels + discovery goal = clustering (unsupervised). A human then interprets the clusters — lesson 2’s “humans conclude” rule.',
        bn: 'লেবেল নেই + আবিষ্কার-লক্ষ্য = clustering (unsupervised)। তারপর মানুষ cluster ব্যাখ্যা করে — পাঠ ২ এর “মানুষ সিদ্ধান্তে পৌঁছায়” নিয়ম।'
      }
    },
    {
      id: 'hml-ex-3',
      kind: 'mcq',
      topic: 'vocabulary',
      question: {
        en: 'In “predict house prices from size and location”: what is the label?',
        bn: '“আকার-অবস্থান থেকে বাড়ির দাম predict”: label কী?'
      },
      options: [
        {
          en: 'The sale price',
          bn: 'বিক্রি-দাম'
        },
        {
          en: 'The size',
          bn: 'আকার'
        },
        {
          en: 'The location',
          bn: 'অবস্থান'
        },
        {
          en: 'The model',
          bn: 'মডেল'
        }
      ],
      answer: 0,
      hint: {
        en: 'Label = the correct answer the model tries to output.',
        bn: 'Label = সঠিক উত্তর, যা মডেল আউটপুট দিতে চায়।'
      },
      explanation: {
        en: 'Size and location are features (inputs). The price is the answer attached to each example — the label. The model maps features → label.',
        bn: 'আকার-অবস্থান feature (ইনপুট)। দাম প্রতি উদাহরণের উত্তর — label। মডেল feature → label ম্যাপ করে।'
      }
    },
    {
      id: 'hml-ex-4',
      kind: 'predict',
      topic: 'one-line-design',
      question: {
        en: 'Write the one-line ML design for: “flag fraudulent card transactions.” Name paradigm + features + label/signal.',
        bn: 'এক-লাইন ML ডিজাইন লিখুন: “জাল কার্ড-লেনদেন ধরো।” ধারা + feature + label/signal নামসহ।'
      },
      answer: 'Supervised classification: transaction features (amount, merchant, time, location) → fraud/legit label.',
      accept: [
        'supervised',
        'fraud',
        'transaction',
        'label'
      ],
      hint: {
        en: 'Past fraud verdicts exist — step 4 of HOW.',
        bn: 'পুরনো জালিয়াতি-রায় আছে — HOW-এর ধাপ ৪।'
      },
      explanation: {
        en: 'Banks keep fraud verdicts, so labeled pairs exist → supervised. Features describe each transaction; the label is fraud-or-not. Full credit needs all three named.',
        bn: 'ব্যাংক জালিয়াতি-রায় রাখে, তাই লেবেল-জোড়া আছে → supervised। Feature প্রতি লেনদেন বর্ণনা করে; label জাল-না-আসল। পূর্ণ নম্বরে তিনটার নাম চাই।'
      }
    }
  ],
  quiz: {
    id: 'how-machines-learn-quiz',
    title: {
      en: 'Lesson 2 exam',
      bn: 'পাঠ ২ পরীক্ষা'
    },
    questions: [
      {
        id: 'hmlq1',
        kind: 'mcq',
        topic: 'rl-signal',
        question: {
          en: 'What does reinforcement learning learn from?',
          bn: 'Reinforcement learning কী থেকে শেখে?'
        },
        options: [
          {
            en: 'Rewards earned after actions',
            bn: 'কাজের পর পাওয়া পুরস্কার'
          },
          {
            en: 'Labeled input-output pairs',
            bn: 'লেবেল ইনপুট-আউটপুট জোড়া'
          },
          {
            en: 'Pre-grouped clusters',
            bn: 'আগে-দলে-ভাগ cluster'
          },
          {
            en: 'Hand-written if-rules',
            bn: 'হাতে-লেখা if-নিয়ম'
          }
        ],
        answer: 0,
        hint: {
          en: 'The gamer analogy: no answer key, just scores.',
          bn: 'গেমার-উপমা: উত্তরপত্র নেই, শুধু স্কোর।'
        },
        explanation: {
          en: 'RL’s only teacher is reward: win/lose, profit/loss. Pairs are supervised; clusters are unsupervised’s OUTPUT, not input.',
          bn: 'RL-এর একমাত্র শিক্ষক পুরস্কার: জয়/পরাজয়, লাভ/ক্ষতি। জোড়া supervised-এর; cluster unsupervised-এর আউটপুট, ইনপুট নয়।'
        }
      },
      {
        id: 'hmlq2',
        kind: 'mcq',
        topic: 'label-cost',
        question: {
          en: 'Why might a team choose unsupervised learning even though supervised is more accurate?',
          bn: 'Supervised নির্ভুল হলেও দল unsupervised নিতে পারে কেন?'
        },
        options: [
          {
            en: 'Labels are too expensive or impossible to get',
            bn: 'লেবেল খুব ব্যয়বহুল বা অসম্ভব'
          },
          {
            en: 'Unsupervised needs no humans at all',
            bn: 'Unsupervised-এ মানুষই লাগে না'
          },
          {
            en: 'Supervised cannot use computers',
            bn: 'Supervised কম্পিউটার ব্যবহার করতে পারে না'
          },
          {
            en: 'Labels make models worse',
            bn: 'লেবেল মডেল খারাপ করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'DEBUG trap 1: the doctor-labeling-X-rays example.',
          bn: 'DEBUG ফাঁদ ১: ডাক্তার-X-ray উদাহরণ।'
        },
        explanation: {
          en: 'Label cost decides: months of expert labeling can exceed the budget. Unsupervised still needs humans to interpret — just not to label.',
          bn: 'লেবেল-খরচ সিদ্ধান্ত নেয়: মাসের বিশেষজ্ঞ-লেবেল বাজেট ছাড়াতে পারে। Unsupervised-এও ব্যাখ্যায় মানুষ লাগে — শুধু লেবেলে নয়।'
        }
      },
      {
        id: 'hmlq3',
        kind: 'mcq',
        topic: 'error-signal',
        question: {
          en: 'In supervised training, what is the “error signal”?',
          bn: 'Supervised training-এ “error signal” কী?'
        },
        options: [
          {
            en: 'The gap between the model’s guess and the true label',
            bn: 'মডেলের অনুমান আর আসল label-এর ফারাক'
          },
          {
            en: 'A power cut during training',
            bn: 'Training-চলাকালীন বিদ্যুৎ-বিভ্রাট'
          },
          {
            en: 'The programmer’s typing mistakes',
            bn: 'প্রোগ্রামারের টাইপ-ভুল'
          },
          {
            en: 'Internet disconnection errors',
            bn: 'ইন্টারনেট-বিচ্ছেদ error'
          }
        ],
        answer: 0,
        hint: {
          en: 'INSIDE section: guess vs label.',
          bn: 'INSIDE অংশ: অনুমান বনাম label।'
        },
        explanation: {
          en: 'Guess − label = error. The model nudges itself to shrink it, millions of times. That loop IS learning.',
          bn: 'অনুমান − label = error। মডেল এটা কমাতে নিজেকে ঠেলে, লাখোবার। এই loop-ই শেখা।'
        }
      },
      {
        id: 'hmlq4',
        kind: 'predict',
        topic: 'paradigm-spot',
        question: {
          en: 'A music app wants “songs cluster into moods automatically.” Name the paradigm and what a human must still do.',
          bn: 'মিউজিক অ্যাপ চায় “গান নিজে মুডে দলে ভাগ হোক।” ধারা বলুন, আর মানুষের কী কাজ বাকি থাকে।'
        },
        answer: 'Unsupervised clustering; humans must listen, name the moods, and judge whether the groups are useful.',
        accept: [
          'unsupervised',
          'cluster',
          'name',
          'human'
        ],
        hint: {
          en: '“Finds; humans conclude.”',
          bn: '“খোঁজে; মানুষ সিদ্ধান্তে পৌঁছায়।”'
        },
        explanation: {
          en: 'No mood labels exist → unsupervised clustering on audio feature signals. The algorithm groups; humans name moods (“rainy focus”) and decide if the groups ship.',
          bn: 'মুড-লেবেল নেই → অডিও-feature-এ unsupervised clustering। অ্যালগরিদম দলে ভাগ করে; মানুষ মুডের নাম দেয় (“বৃষ্টির মনোযোগ”) আর দল চালু হবে কিনা ঠিক করে।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'data-first',
    title: {
      en: 'Data First',
      bn: 'আগে ডেটা'
    }
  }
};
