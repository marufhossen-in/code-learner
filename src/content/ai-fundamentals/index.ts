import type { Hub } from '../../lib/types';
import { WhatIsAiLesson } from './lessons/what-is-ai';
import { HowMachinesLearnLesson } from './lessons/how-machines-learn';
import { DataFirstLesson } from './lessons/data-first';
import { ThePerceptronLesson } from './lessons/the-perceptron';
import { TrainingAndTestingLesson } from './lessons/training-and-testing';
import { NetworksAndDeepLearningLesson } from './lessons/networks-and-deep-learning';
import { LimitsBiasSafetyLesson } from './lessons/limits-bias-safety';
import { AiCapstoneLesson } from './lessons/ai-capstone';

export const aiFundamentalsHub: Hub = {
  slug: 'ai-fundamentals',
  name: 'AI Fundamentals',
  icon: '🧠',
  tagline: {
    en: 'What AI really is, how machines learn, and how to build and judge your first models — intuition first, math later, honesty throughout.',
    bn: 'AI আসলে কী, মেশিন কীভাবে শেখে, আর প্রথম মডেল বানানো-বিচার — আগে intuition, পরে গণিত, সবখানে সততা।',
  },
  intro: {
    en: 'LESSON 1 draws the honest map: AI learns rules from examples; deep learning sits inside machine learning inside AI; all deployed AI today is narrow. LESSON 2 names the three paradigms — supervised, unsupervised, reinforcement — and the four words the field speaks: feature, label, model, prediction. LESSON 3 puts data first: train/test honesty, plotting before modeling, and your first live prediction. LESSON 4 runs the 1958 perceptron by hand and in code — and proves its XOR limit. LESSON 5 opens the engine room: loss, gradient descent, overfitting, and the curves practitioners read daily. LESSON 6 stacks neurons into deep networks, crosses the XOR wall, and maps CNNs vs Transformers. LESSON 7 is the senior lesson: bias, hallucinations, sliced metrics, and the pre-ship safety checklist. LESSON 8 graduates you by building: a live k-NN classifier in your browser. Graduate with 8 owned skills and a straight road into machine learning.',
    bn: 'পাঠ ১ সৎ মানচিত্র আঁকে: AI উদাহরণ থেকে নিয়ম শেখে; AI-এর ভেতর machine learning, তার ভেতর deep learning; আজকের চালু সব AI narrow। পাঠ ২ তিন ধারা নামায় — supervised, unsupervised, reinforcement — আর ফিল্ডের চার শব্দ: feature, label, model, prediction। পাঠ ৩ ডেটা আগে: train/test সততা, মডেলের আগে প্লট, আর প্রথম live prediction। পাঠ ৪ ১৯৫৮-এর perceptron হাতে-কোডে চালায় — আর XOR-সীমা প্রমাণ করে। পাঠ ৫ ইঞ্জিন-ঘর খোলে: loss, gradient descent, overfitting, practitioner-দের দৈনিক curve। পাঠ ৬ নিউরন স্তূপে deep network বানায়, XOR-দেয়াল পেরোয়, CNN বনাম Transformer ম্যাপ করে। পাঠ ৭ সিনিয়র-পাঠ: bias, hallucination, কাটা-মেট্রিক, চালুর-আগে নিরাপত্তা-চেকলিস্ট। পাঠ ৮ বানিয়ে গ্র্যাজুয়েট করে: ব্রাউজারে live k-NN classifier। ৮ অর্জিত দক্ষতা আর machine learning-এর সোজা পথ নিয়ে গ্র্যাজুয়েট হোন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Map and vocabulary (L1–L2)', bn: 'ধাপ ১ — মানচিত্র আর শব্দ (পাঠ ১–২)' },
      items: [
        { en: 'What AI Really Is: narrow AI, the AI ⊃ ML ⊃ DL nesting, rules-vs-learning', bn: 'AI আসলে কী: narrow AI, AI ⊃ ML ⊃ DL, নিয়ম-বনাম-শেখা' },
        { en: 'How Machines Learn: supervised / unsupervised / reinforcement + feature·label·model·prediction', bn: 'মেশিন কীভাবে শেখে: supervised / unsupervised / reinforcement + feature·label·model·prediction' },
        { en: 'Exit ticket: name any product’s paradigm in 30 seconds', bn: 'বিদায়-টিকিট: যেকোনো পণ্যের ধারা ৩০ সেকেন্ডে বলা' },
      ],
    },
    {
      title: { en: 'Stage 2 — Hands on the machine (L3–L5)', bn: 'ধাপ ২ — যন্ত্রে হাত (পাঠ ৩–৫)' },
      items: [
        { en: 'Data First: honest splits, plotting, first live prediction', bn: 'আগে ডেটা: সৎ ভাগ, প্লট, প্রথম live prediction' },
        { en: 'The Perceptron: hand-run votes, weights-as-knowledge, the XOR wall', bn: 'Perceptron: হাতে-ভোট, ওজন-জ্ঞান, XOR-দেয়াল' },
        { en: 'Training and Testing: loss, gradient descent live, overfitting curves', bn: 'Training আর Testing: loss, live gradient descent, overfitting curve' },
        { en: 'Exit ticket: train a line and read its curves in the browser', bn: 'বিদায়-টিকিট: ব্রাউজারে রেখা train আর curve পড়া' },
      ],
    },
    {
      title: { en: 'Stage 3 — Depth, honesty, build (L6–L8)', bn: 'ধাপ ৩ — গভীরতা, সততা, বানানো (পাঠ ৬–৮)' },
      items: [
        { en: 'Networks and Deep Learning: forward pass, hierarchy, CNN vs Transformer', bn: 'Network আর Deep Learning: forward pass, hierarchy, CNN বনাম Transformer' },
        { en: 'Limits, Bias, Safety: sliced metrics, failure catalog, safety checklist', bn: 'সীমা, Bias, নিরাপত্তা: কাটা-মেট্রিক, ব্যর্থতা-তালিকা, নিরাপত্তা-চেকলিস্ট' },
        { en: 'Capstone: live k-NN classifier + graduation into machine learning', bn: 'Capstone: live k-NN classifier + machine learning-এ গ্র্যাজুয়েশন' },
        { en: 'Exit ticket: demo your classifier and state its limits doc', bn: 'বিদায়-টিকিট: classifier demo আর সীমা-নথি বলা' },
      ],
    },
  ],
  lessons: [
    WhatIsAiLesson,
    HowMachinesLearnLesson,
    DataFirstLesson,
    ThePerceptronLesson,
    TrainingAndTestingLesson,
    NetworksAndDeepLearningLesson,
    LimitsBiasSafetyLesson,
    AiCapstoneLesson,
  ],
  references: [
    {
      group: { en: 'Core vocabulary', bn: 'মূল শব্দভাণ্ডার' },
      items: [
        { term: 'feature', def: { en: 'One input signal (size, age, word count).', bn: 'এক ইনপুট-সংকেত (আকার, বয়স, শব্দ-গণনা)।' } },
        { term: 'label', def: { en: 'The correct answer on a training example.', bn: 'Training উদাহরণে সঠিক উত্তর।' } },
        { term: 'model', def: { en: 'Trained machine: features in, prediction out.', bn: 'প্রশিক্ষিত যন্ত্র: feature ঢোকে, prediction বেরোয়।' } },
        { term: 'prediction', def: { en: 'Model output on new input.', bn: 'নতুন ইনপুটে মডেল-আউটপুট।' } },
        { term: 'loss', def: { en: 'Average wrongness; training minimizes it.', bn: 'গড়-ভুল; training কমায়।' } },
        { term: 'epoch', def: { en: 'One full pass over training data.', bn: 'Training data-তে এক পূর্ণ চক্কর।' } },
      ],
    },
    {
      group: { en: 'Honesty toolkit', bn: 'সততা-টুলকিট' },
      items: [
        { term: 'test set', def: { en: 'Locked data, graded once. Peeking voids the grade.', bn: 'তালা-ডেটা, একবার মূল্যায়ন। উঁকিতে গ্রেড বাতিল।' } },
        { term: 'overfitting', def: { en: 'Memorizing rows instead of patterns.', bn: 'প্যাটার্নের বদলে সারি মুখস্থ।' } },
        { term: 'sliced metric', def: { en: 'Accuracy reported per group, not just overall.', bn: 'শুধু মোট নয়, দল-প্রতি accuracy।' } },
        { term: 'red-teaming', def: { en: 'Attacking your own model pre-ship.', bn: 'চালুর আগে নিজ মডেলে আক্রমণ।' } },
        { term: 'human-in-the-loop', def: { en: 'Person reviews outputs before they bite.', bn: 'কামড়ানোর আগে মানুষ আউটপুট দেখে।' } },
      ],
    },
  ],
  projects: [
    {
      title: { en: 'Project 1 — Honest house predictor', bn: 'প্রজেক্ট ১ — সৎ বাড়ি-predictor' },
      brief: {
        en: 'Collect 30+ real listings (size, area, age → price). Split 80/20 locked, plot, fit a line, report locked-test error sliced by area. Deliverable: one page with the plot, the error, and a limits doc.',
        bn: '৩০+ আসল লিস্টিং জোগাড় (আকার, এলাকা, বয়স → দাম)। ৮০/২০ তালা-ভাগ, প্লট, রেখা-বসানো, এলাকায়-কাটা তালা-test error। ডেলিভারেবল: প্লট, error, সীমা-নথি — এক পেজ।',
      },
    },
    {
      title: { en: 'Project 2 — Extend the capstone classifier', bn: 'প্রজেক্ট ২ — Capstone classifier বাড়ানো' },
      brief: {
        en: 'Fork lesson 8’s k-NN: add a third class, show per-class vote counts, and measure accuracy on 20 held-out points you click yourself. Deliverable: the running page + a short write-up of where it fails and why.',
        bn: 'পাঠ ৮-এর k-NN fork করুন: তৃতীয় শ্রেণি, দল-ভোট গণনা, নিজে-ক্লিক ২০ সরিয়ে-রাখা বিন্দুতে accuracy। ডেলিভারেবল: চলন্ত পেজ + কোথায় ফেল, কেন — ছোট লেখা।',
      },
    },
  ],
  bestPractices: [
    { en: 'Plot before modeling, split before training, slice before shipping.', bn: 'মডেলের আগে প্লট, training-এর আগে ভাগ, চালুর আগে কাটা।' },
    { en: 'Name the paradigm in the first sentence of any ML design.', bn: 'ML ডিজাইনের প্রথম বাক্যে ধারা বলুন।' },
    { en: 'Report locked-test scores only; train scores are diaries.', bn: 'শুধু তালা-test স্কোর জানান; train স্কোর ডায়েরি।' },
    { en: 'Try the simple baseline (line, k-NN) before the neural net.', bn: 'Neural net-এর আগে সরল baseline (রেখা, k-NN)।' },
    { en: 'Write the limits doc first — works for / fails for / unknown for.', bn: 'আগে সীমা-নথি — চলে / ফেল / অজানা।' },
  ],
  interview: [
    {
      q: { en: 'Your model scores 99% train, 70% test. Diagnose and fix.', bn: 'মডেল train ৯৯%, test ৭০%। রোগ আর ওষুধ বলুন।' },
      a: { en: 'Overfitting: memorized rows. Fix ladder: early-stop at the test peak, simplify, regularize, add data — in that order of cheapness.', bn: 'Overfitting: সারি মুখস্থ। ওষুধ-মই: test-শিখরে early-stop, সরল, regularize, ডেটা — সস্তা-ক্রমে।' },
    },
    {
      q: { en: 'Why can one perceptron not learn XOR?', bn: 'এক perceptron XOR শিখতে পারে না কেন?' },
      a: { en: 'XOR’s 1s sit on opposite corners — no single line separates them, and a perceptron IS one line. One hidden layer (OR + AND, then subtract) solves it.', bn: 'XOR-এর ১ বিপরীত কোণে — এক রেখায় আলাদা হয় না, perceptron মানেই এক রেখা। এক hidden layer (OR + AND, তারপর বিয়োগ) সমাধান করে।' },
    },
    {
      q: { en: 'Overall 95% but one group 70%. Ship?', bn: 'মোট ৯৫% কিন্তু এক দল ৭০%। চালু?' },
      a: { en: 'No. Worst slice is the real grade: audit data balance, fix representation, re-slice, and keep humans in the loop for that group until it clears the gate.', bn: 'না। খারাপ-কাটাই আসল গ্রেড: ডেটা-সাম্য অডিট, প্রতিনিধিত্ব ঠিক, আবার কাটা, ফটক-না-পেরোনো পর্যন্ত ওই দলে মানুষ রাখুন।' },
    },
    {
      q: {
        en: 'What is the fundamental difference between parameters and hyperparameters?',
        bn: 'Parameter আর Hyperparameter-এর মধ্যকার মূল পার্থক্য কী?',
      },
      a: {
        en: 'Parameters (weights, biases) are learned automatically from data during training. Hyperparameters (learning rate, batch size, number of layers) are configured by the engineer before training starts.',
        bn: 'Parameter (ওজন, বায়াস) ট্রেনিং চলাকালে ডেটা থেকে স্বয়ংক্রিয়ভাবে শেখা হয়। Hyperparameter (learning rate, batch size, লেয়ার সংখ্যা) ট্রেনিং শুরুর আগে ইঞ্জিনিয়ার নিজে নির্ধারণ করেন।',
      },
    },
  ],
  realWorld: [
    { en: 'Spam filters: supervised classification on email features — the oldest production ML most people meet.', bn: 'স্প্যাম ফিল্টার: ইমেইল-feature-এ supervised classification — সবচেয়ে পুরনো production ML।' },
    { en: 'Face unlock: a CNN deciding “owner or not” in milliseconds, on-device.', bn: 'ফেস আনলক: “মালিক না” মিলিসেকেন্ডে ঠিক করা CNN, ডিভাইসেই।' },
    { en: 'Fraud flags: anomaly + supervised scores with human review — distance and voting at billion-dollar scale.', bn: 'জালিয়াতি-পতাকা: মানুষের দেখাসহ anomaly + supervised স্কোর — কোটি-ডলার স্কেলে দূরত্ব-ভোট।' },
  ],
};