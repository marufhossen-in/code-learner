import type { Hub } from '../../lib/types';
import { LinearRegressionLesson } from './lessons/linear-regression';
import { ClassificationLogisticLesson } from './lessons/classification-logistic';
import { DecisionTreesLesson } from './lessons/decision-trees';
import { ForestsEnsemblesLesson } from './lessons/forests-ensembles';
import { ClusteringLesson } from './lessons/clustering';
import { EvaluationSelectionLesson } from './lessons/evaluation-selection';
import { MathOfLearningLesson } from './lessons/math-of-learning';
import { MlCapstoneLesson } from './lessons/ml-capstone';

export const machineLearningHub: Hub = {
  slug: 'machine-learning',
  name: 'Machine Learning',
  icon: '📊',
  tagline: {
    en: 'Fit lines, draw boundaries, grow trees and forests, find clusters, grade honestly, descend loss — then pipe it all into one shippable whole.',
    bn: 'রেখা বসান, সীমানা আঁকুন, tree-forest গজান, cluster খুঁজুন, সৎ-গ্রেড দিন, loss নামুন — তারপর সব এক চালুযোগ্য-পাইপে জুড়ুন।',
  },
  intro: {
    en: 'LESSON 1 fits lines with least squares in closed form — no training loop, just arithmetic — and learns when lines stop being enough. LESSON 2 upgrades yes/no into probabilities: decision boundaries, the sigmoid, and thresholds placed by COST. LESSON 3 bends boundaries with decision trees: greedy splits, purity, pruning, and the stump you grow by brute force. LESSON 4 votes: bagging, random forests, and boosting — the crowd that outvotes noise. LESSON 5 crosses to unsupervised land: k-means, the elbow picking k=2 live, and why scaling decides everything. LESSON 6 is the profession’s conscience: sacred splits, leakage, confusion matrices, and the 95%-accurate fraud exposed live. LESSON 7 opens the engine room: loss bowls, gradients, and learning-rate 0.1 gliding where 1.1 explodes. LESSON 8 pipes everything — split, baseline, fit, grade-once, verdict — into one honest pipeline. Graduate with 8 owned skills and a straight road into deep learning.',
    bn: 'পাঠ ১ closed-form least squares-এ রেখা বসায় — training loop নেই, শুধু গাণিতিক — আর শেখে রেখা কখন যথেষ্ট থাকে না। পাঠ ২ হ্যাঁ/না probability-তে উন্নীত করে: decision boundary, sigmoid, খরচে-বসা threshold। পাঠ ৩ decision tree-তে সীমানা বাঁকায়: লোভী-split, বিশুদ্ধতা, ছাঁটাই, brute force-গজানো stump। পাঠ ৪ ভোট দেয়: bagging, random forest, boosting — noise-হারানো ভিড়। পাঠ ৫ unsupervised ভূমিতে: k-means, live-তে k=২-বাছা elbow, scaling কেন সব ঠিক করে। পাঠ ৬ পেশার বিবেক: পবিত্র-ভাগ, leakage, confusion matrix, live-ফাঁস ৯৫%-নির্ভুল জালিয়াতি। পাঠ ৭ ইঞ্জিনরুম খোলে: loss-বাটি, gradient, learning-rate ০.১ পিছলায় যেখানে ১.১ ফাটে। পাঠ ৮ সব pipe করে — ভাগ, baseline, ফিট, একবার-গ্রেড, রায় — এক সৎ-pipeline-এ। ৮ অর্জিত দক্ষতা আর deep learning-এর সোজা পথ নিয়ে গ্র্যাজুয়েট হোন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Supervised core (L1–L3)', bn: 'ধাপ ১ — Supervised মূল (পাঠ ১–৩)' },
      items: [
        { en: 'Linear Regression: least squares closed form, MSE, range honesty', bn: 'Linear Regression: closed-form least squares, MSE, সীমা-সততা' },
        { en: 'Classification with Logistic Regression: boundaries, sigmoid, cost-placed thresholds', bn: 'Logistic Regression-এ Classification: সীমানা, sigmoid, খরচে-বসা threshold' },
        { en: 'Decision Trees: greedy splits, purity, pruning, the brute-force stump', bn: 'Decision Tree: লোভী-split, বিশুদ্ধতা, ছাঁটাই, brute force-stump' },
        { en: 'Exit ticket: fit a line, place a threshold by cost, trace a tree by hand', bn: 'বিদায়-টিকিট: রেখা-ফিট, খরচে-threshold, হাতে-tree চালানো' },
      ],
    },
    {
      title: { en: 'Stage 2 — Crowds, groups, grades (L4–L6)', bn: 'ধাপ ২ — ভিড়, দল, গ্রেড (পাঠ ৪–৬)' },
      items: [
        { en: 'Forests and Ensembles: bootstrap crowds, random forests, boosting', bn: 'Forest আর Ensemble: bootstrap-ভিড়, random forest, boosting' },
        { en: 'Clustering with k-Means: assign-average loop, elbow, scale-first law', bn: 'k-Means-এ Clustering: বরাদ্দ-গড় loop, elbow, আগে-scale আইন' },
        { en: 'Evaluation and Selection: sacred splits, leakage, precision/recall/F1', bn: 'মূল্যায়ন ও নির্বাচন: পবিত্র-ভাগ, leakage, precision/recall/F1' },
        { en: 'Exit ticket: run a forest, elbow-pick k, expose accuracy fraud with recall', bn: 'বিদায়-টিকিট: forest চালানো, elbow-তে k বাছা, recall-এ accuracy-জাল ফাঁস' },
      ],
    },
    {
      title: { en: 'Stage 3 — Engine and pipe (L7–L8)', bn: 'ধাপ ৩ — ইঞ্জিন আর পাইপ (পাঠ ৭–৮)' },
      items: [
        { en: 'Math of Learning: loss bowls, gradients, the learning-rate edge', bn: 'শেখার গণিত: loss-বাটি, gradient, learning-rate কিনারা' },
        { en: 'ML Capstone: split → baseline → fit → grade-once → SHIP', bn: 'ML Capstone: ভাগ → baseline → ফিট → একবার-গ্রেড → SHIP' },
        { en: 'Graduation: rerun the capstone pipe on YOUR dataset and defend the verdict', bn: 'গ্র্যাজুয়েশন: আপনার-ডেটাসেটে capstone-পাইপ আবার চালিয়ে রায়-সমর্থন' },
      ],
    },
  ],
  lessons: [
    LinearRegressionLesson,
    ClassificationLogisticLesson,
    DecisionTreesLesson,
    ForestsEnsemblesLesson,
    ClusteringLesson,
    EvaluationSelectionLesson,
    MathOfLearningLesson,
    MlCapstoneLesson,
  ],
  projects: [
    {
      title: { en: 'Project 1 — The honest housing pipe', bn: 'প্রজেক্ট ১ — সৎ-হাউজিং পাইপ' },
      brief: {
        en: 'Collect 30+ real listings (size, area, age → price). Run the full capstone pipe: stratified split, mean-price baseline, line fit AND stump fit, grade-once report (MSE + baseline gap), verdict with a bootstrap spread. Deliverable: one page with the plot, the report card, and a limits doc.',
        bn: '৩০+ আসল লিস্টিং জোগাড় (আকার, এলাকা, বয়স → দাম)। পুরো capstone-পাইপ চালান: স্তরিত-ভাগ, গড়-দাম baseline, রেখা-ফিট ও stump-ফিট, একবার-গ্রেড প্রতিবেদন (MSE + baseline-ফাঁক), bootstrap-ছড়ানোসহ রায়। ডেলিভারেবল: প্লট, রিপোর্ট-কার্ড, সীমা-নথি — এক পেজ।',
      },
    },
    {
      title: { en: 'Project 2 — Threshold clinic on real imbalance', bn: 'প্রজেক্ট ২ — আসল-অসাম্যে threshold-ক্লিনিক' },
      brief: {
        en: 'Take any imbalanced binary dataset (spam, churn, defects). Fit logistic regression, sweep thresholds 0.1–0.9, and plot the precision/recall trade with costs attached; place T by cost and defend it against “just use 0.5.” Deliverable: the trade curve + a one-page cost memo.',
        bn: 'যেকোনো অসাম্য-বাইনারি ডেটাসেট নিন (স্প্যাম, churn, ত্রুটি)। Logistic regression ফিট করে threshold ০.১–০.৯ ঝাড়ুন, খরচ-সহ precision/recall-trade প্লট করুন; খরচে T বসিয়ে “শুধু ০.৫”-এর বিরুদ্ধে সমর্থন করুন। ডেলিভারেবল: trade-curve + এক-পেজ খরচ-স্মারক।',
      },
    },
  ],
  bestPractices: [
    { en: 'Baseline first (line, majority, mean) — no baseline, no bragging.', bn: 'আগে baseline (রেখা, সংখ্যাগরিষ্ঠ, গড়) — baseline নেই, বড়াই নেই।' },
    { en: 'Split before touching, lock test, grade once — order is honesty.', bn: 'ছোঁয়ার আগে ভাগ, test তালা, একবার গ্রেড — ক্রমই সততা।' },
    { en: 'Place thresholds by cost; never ship 0.5 unexamined.', bn: 'খরচে threshold বসান; অপরীক্ষিত ০.৫ কখনো চালু নয়।' },
    { en: 'Scale before distance (k-means, k-NN); skip scaling for trees.', bn: 'দূরত্বের আগে scale (k-means, k-NN); tree-তে scaling এড়ান।' },
    { en: 'Tune learning rate before architecture — one digit beats one layer.', bn: 'স্থাপত্যের আগে learning rate ঠিক করুন — এক অঙ্ক এক layer হারায়।' },
  ],
  interview: [
    {
      q: { en: 'Your classifier scores 97% accuracy but recall is 40%. Ship?', bn: 'Classifier accuracy ৯৭%, recall ৪০%। চালু?' },
      a: { en: 'Depends on miss-cost, but probably no: 40% recall means most positives escape. Name the cost, slide the threshold down the precision/recall curve, and re-grade on locked test — never tune T on test.', bn: 'মিস-খরচে নির্ভর, সম্ভবত না: ৪০% recall মানে বেশিরভাগ positive পালায়। খরচ বলুন, precision/recall-curve-এ threshold নামান, তালা-test-এ আবার গ্রেড দিন — test-এ T ঠিক কখনো নয়।' },
    },
    {
      q: { en: 'Why does a random forest beat a single deep tree?', bn: 'Random forest এক গভীর-tree হারায় কেন?' },
      a: { en: 'Bagging + random feature subsets make members err independently; majority vote cancels noise while shared signal survives. Same bias family, far less variance — plus free OOB grades.', bn: 'Bagging + এলোমেলো-feature উপসেট সদস্য-ভুল স্বাধীন করে; সংখ্যাগরিষ্ঠ-ভোট noise বাতিল করে, ভাগ-সংকেত টিকে। একই bias-পরিবার, অনেক কম variance — সাথে ফ্রি OOB-গ্রেড।' },
    },
    {
      q: { en: 'k-means returns different clusters every run. Fix?', bn: 'k-means প্রতি চালানে আলাদা-cluster দেয়। সমাধান?' },
      a: { en: 'Expected: random seeds land in different local minima. Standardize features, restart from many seeds, keep lowest WCSS; if still unstable, question k (elbow/silhouette) or the round-blob assumption (try DBSCAN).', bn: 'প্রত্যাশিত: এলোমেলো-seed আলাদা স্থানীয়-তলায় নামে। Feature standardize, অনেক seed-restart, সর্বনিম্ন WCSS রাখুন; তবু অস্থির হলে k প্রশ্ন করুন (elbow/silhouette) বা গোল-blob ধারণা (DBSCAN দিন)।' },
    },
    {
      q: {
        en: 'Explain the bias-variance tradeoff in machine learning models.',
        bn: 'মেশিন লার্নিং মডেলে bias-variance tradeoff বিষয়টি ব্যাখ্যা করুন।',
      },
      a: {
        en: 'High bias causes underfitting (model is too simple to capture patterns); high variance causes overfitting (model captures noise from training data). The goal is to find the sweet spot that minimizes total error on unseen test data.',
        bn: 'বেশি bias থাকলে underfitting হয় (মডেল অতিরিক্ত সহজ হওয়ায় প্যাটার্ন ধরতে পারে না); বেশি variance থাকলে overfitting হয় (মডেল নয়েজ মুখস্থ করে ফেলে)। আসল উদ্দেশ্য হলো এমন ভারসাম্য খোঁজা যা টেস্ট ডেটায় মোট ভুল সর্বনিম্ন রাখে।',
      },
    },
  ],
  realWorld: [
    { en: 'Credit scoring: logistic regression on applicant features — interpretable enough to explain every decline.', bn: 'ক্রেডিট-স্কোরিং: আবেদন-feature-এ logistic regression — প্রতি প্রত্যাখ্যান-ব্যাখ্যায় যথেষ্ট।' },
    { en: 'Demand planning: boosted trees on sales history — the tabular champion restocking shelves.', bn: 'চাহিদা-পরিকল্পনা: বিক্রি-ইতিহাসে boosted tree — তাক-ভরানো tabular চ্যাম্পিয়ন।' },
    { en: 'Support triage: clustered ticket embeddings routing bugs vs billing — unsupervised value, daily.', bn: 'সাপোর্ট-বাছাই: cluster-করা টিকিট-embedding বাগ বনাম বিলিং পাঠায় — লেবেলহীন-মূল্য, দৈনিক।' },
  ],
};