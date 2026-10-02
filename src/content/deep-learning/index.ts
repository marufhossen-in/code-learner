import type { Hub } from '../../lib/types';
import { TheNeuronLesson } from './lessons/the-neuron';
import { ActivationsLesson } from './lessons/activations';
import { NetworksForwardLesson } from './lessons/networks-forward';
import { BackpropTrainingLesson } from './lessons/backprop-training';
import { OverfittingDropoutLesson } from './lessons/overfitting-dropout';
import { CnnsVisionLesson } from './lessons/cnns-vision';
import { SequencesAttentionLesson } from './lessons/sequences-attention';
import { DlCapstoneLesson } from './lessons/dl-capstone';

export const deepLearningHub: Hub = {
  slug: 'deep-learning',
  name: 'Deep Learning',
  icon: '🕳️',
  tagline: {
    en: 'Neurons, squeezes, forward passes, backprop blame, honest discipline, eyes, spotlights — then a wall crossed live: XOR learned, 0.73 to 0.001.',
    bn: 'Neuron, চাপা, forward pass, backprop-দোষ, সৎ-শাসন, চোখ, spotlight — তারপর live-পার দেয়াল: XOR-শেখা, ০.৭৩ থেকে ০.০০১।',
  },
  intro: {
    en: 'LESSON 1 hand-runs one neuron — z=1.2 → σ≈0.77 — and learns why smoothness (not steps) makes weights learnable. LESSON 2 opens the squeeze-box: sigmoid, tanh, ReLU, softmax, run live across z=−3..3, plus the collapse sentence (linear stacks = one line). LESSON 3 stacks neurons into layers: a 2→2→1 net forward-passes to [0.5,0]→0.56, with shape discipline throughout. LESSON 4 flows blame left: gradient-check (+0.2685 = +0.2685), one SGD step (loss 0.86→0.71), and LR=5 overshooting to 1.47. LESSON 5 fights memorization: U-turn curves, early stopping, dropout masks averaging to honesty (0.57 ≈ 0.58). LESSON 6 grows eyes: a 2×2 filter printing +2 down an edge column, pooling, the hierarchy. LESSON 7 gives ears: hand-run attention ([0.31,0.19,0.51]→22.0), the query-shift, transformers. LESSON 8 trains XOR end to end — 0.73 → 0.001, [0,1,1,0] — the perceptron’s wall, crossed. Graduate with 8 owned skills and a straight road into generative AI.',
    bn: 'পাঠ ১ এক neuron হাতে চালায় — z=১.২ → σ≈০.৭৭ — আর শেখে মসৃণতা (ধাপ নয়) কেন ওজন-শেখার যোগ্য করে। পাঠ ২ চাপা-বাক্স খোলে: sigmoid, tanh, ReLU, softmax, z=−৩..৩-জুড়ে live, সাথে ধস-বাক্য (linear-স্তূপ = এক রেখা)। পাঠ ৩ neuron layer-স্তূপ করে: ২→২→১ net forward-pass [০.৫,০]→০.৫৬, সর্বত্র shape-শৃঙ্খলা। পাঠ ৪ দোষ বামে বয়ায়: gradient-check (+০.২৬৮৫ = +০.২৬৮৫), এক SGD-ধাপ (loss ০.৮৬→০.৭১), LR=৫ ডিঙিয়ে ১.৪৭। পাঠ ৫ মুখস্থ-বিরোধিতা করে: U-ঘোরা curve, early stopping, সততায়-গড় dropout-mask (০.৫৭ ≈ ০.৫৮)। পাঠ ৬ চোখ গজায়: কিনারা-কলামে +২-ছাপা ২×২ filter, pooling, ক্রম। পাঠ ৭ কান দেয়: হাতে-Attention ([০.৩১,০.১৯,০.৫১]→২২.০), query-সরা, transformer। পাঠ ৮ XOR শুরু-শেষ train করে — ০.৭৩ → ০.০০১, [০,১,১,০] — perceptron-দেয়াল, পার। ৮ অর্জিত দক্ষতা আর generative AI-এর সোজা পথ নিয়ে গ্র্যাজুয়েট হোন।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Atom and squeeze (L1–L2)', bn: 'ধাপ ১ — পরমাণু আর চাপা (পাঠ ১–২)' },
      items: [
        { en: 'The Neuron: weigh-shift-squeeze, bias, smoothness = learnability', bn: 'Neuron: ওজন-সরানো-চাপা, bias, মসৃণতা = শেখার-যোগ্যতা' },
        { en: 'Activations: sigmoid/tanh/ReLU/softmax live + the collapse sentence', bn: 'Activation: live sigmoid/tanh/ReLU/softmax + ধস-বাক্য' },
        { en: 'Exit ticket: hand-run a neuron, pick heads by position', bn: 'বিদায়-টিকিট: হাতে-neuron চালানো, অবস্থানে-head বাছা' },
      ],
    },
    {
      title: { en: 'Stage 2 — Networks that learn (L3–L5)', bn: 'ধাপ ২ — শেখা-network (পাঠ ৩–৫)' },
      items: [
        { en: 'Networks Forward: 2→2→1 by hand, shapes, dead-neuron wakeups', bn: 'Network Forward: হাতে ২→২→১, আকৃতি, মৃত-neuron জাগানো' },
        { en: 'Backprop Training: gradient-check, one SGD step, LR=5 overshoot', bn: 'Backprop Training: gradient-check, এক SGD-ধাপ, LR=৫ ডিঙানো' },
        { en: 'Overfitting and Dropout: U-turn valleys, masks averaging honest', bn: 'Overfitting আর Dropout: U-ঘোরা-valley, সৎ-গড় mask' },
        { en: 'Exit ticket: forward any small net, read any training curve', bn: 'বিদায়-টিকিট: যেকোনো ছোট-net forward, যেকোনো training-curve পড়া' },
      ],
    },
    {
      title: { en: 'Stage 3 — Senses and graduation (L6–L8)', bn: 'ধাপ ৩ — ইন্দ্রিয় আর গ্র্যাজুয়েশন (পাঠ ৬–৮)' },
      items: [
        { en: 'CNNs and Vision: live convolution, pooling, hierarchy', bn: 'CNN আর Vision: live convolution, pooling, ক্রম' },
        { en: 'Sequences and Attention: hand-run spotlight, transformers', bn: 'Sequence আর Attention: হাতে-spotlight, transformer' },
        { en: 'DL Capstone: XOR 0.73 → 0.001, the wall crossed', bn: 'DL Capstone: XOR ০.৭৩ → ০.০০১, দেয়াল-পার' },
        { en: 'Graduation: retrain the capstone with new inits and defend the curve', bn: 'গ্র্যাজুয়েশন: নতুন-init-এ capstone আবার train করে curve-সমর্থন' },
      ],
    },
  ],
  lessons: [
    TheNeuronLesson,
    ActivationsLesson,
    NetworksForwardLesson,
    BackpropTrainingLesson,
    OverfittingDropoutLesson,
    CnnsVisionLesson,
    SequencesAttentionLesson,
    DlCapstoneLesson,
  ],
  projects: [
    {
      title: { en: 'Project 1 — The XOR laboratory', bn: 'প্রজেক্ট ১ — XOR গবেষণাগার' },
      brief: {
        en: 'Fork the capstone trainer: sweep learning rates {0.5, 1, 5, 10}, inits (small/large), and hidden sizes {1, 2, 4}; log every curve and tabulate which cross 0.01 and which stall. Deliverable: one page with the curves, the table, and a one-paragraph law of “what made XOR learn.”',
        bn: 'Capstone-trainer fork করুন: learning rate {০.৫, ১, ৫, ১০}, init (ছোট/বড়), hidden আকার {১, ২, ৪} ঝাড়ুন; প্রতি curve লগ করে কোনটা ০.০১ পারে, কোনটা থামে টেবিল করুন। ডেলিভারেবল: curve, টেবিল, “XOR-শেখালো কী” এক-অনুচ্ছেদ আইন — এক পেজ।',
      },
    },
    {
      title: { en: 'Project 2 — Attention from scratch', bn: 'প্রজেক্ট ২ — গোড়া থেকে Attention' },
      brief: {
        en: 'Extend lesson 7’s tryit to 5 keys/values of your own design: craft two queries that attend oppositely (prove with printed weights), then break it with a 50-key run and time the n² bill. Deliverable: the running page + a short note on what attention can and cannot “understand.”',
        bn: 'পাঠ-৭ tryit নিজ-নকশা ৫ key/value-তে বাড়ান: বিপরীত-মনোযোগী দুই query বানান (ছাপা-ওজনে প্রমাণ), তারপর ৫০-key চালানে ভেঙে n²-বিল সময় মাপুন। ডেলিভারেবল: চলন্ত পেজ + attention কী “বুঝতে” পারে/পারে না — ছোট নোট।',
      },
    },
  ],
  bestPractices: [
    { en: 'Say shapes aloud before running anything — mismatch is bug #1.', bn: 'কিছু চালানোর আগে আকৃতি জোরে বলুন — mismatch বাগ #১।' },
    { en: 'ReLU inside, sigmoid/softmax only at exits.', bn: 'ভেতরে ReLU, sigmoid/softmax শুধু প্রস্থানে।' },
    { en: 'Tune LR before architecture — one digit beats one layer.', bn: 'স্থাপত্যের আগে LR ঠিক করুন — এক অঙ্ক এক layer হারায়।' },
    { en: 'Ship valley weights, never final-epoch weights.', bn: 'Valley-ওজন চালু করুন, শেষ-epoch ওজন কখনো নয়।' },
    { en: 'Dropout masks train, full nets test — call .eval().', bn: 'Dropout-mask train করে, পূর্ণ-net test করে — .eval() ডাকুন।' },
  ],
  interview: [
    {
      q: { en: 'Why can a 2→2→1 net learn XOR when no line can?', bn: 'রেখা না-পারলেও ২→২→১ net XOR শেখে কেন?' },
      a: { en: 'The hidden layer + nonlinearity learns a bent representation (h-space) where the corners ARE line-separable; the output neuron then draws one line. Depth buys representation, not just parameters.', bn: 'Hidden layer + nonlinearity বাঁকা-representation (h-জায়গা) শেখে যেখানে কোণ রেখা-আলাদাযোগ্য; output-neuron এক রেখা আঁকে। গভীরতা representation কেনে, শুধু parameter নয়।' },
    },
    {
      q: { en: 'Train 99%, validation 70%, gap widening. Diagnose and fix in order.', bn: 'Train ৯৯%, validation ৭০%, ফাঁক বাড়ছে। ক্রমে রোগ-ওষুধ বলুন।' },
      a: { en: 'Overfitting past the valley. Order: early-stop at valley weights (free), dropout 0.2–0.5 + augmentation (cheap), more data (real money) — then re-check the valley deepens.', bn: 'Valley-পার overfitting। ক্রম: valley-ওজনে early-stop (ফ্রি), dropout ০.২–০.৫ + augmentation (সস্তা), বেশি-ডেটা (আসল-টাকা) — তারপর valley-গভীরতা পুনঃযাচাই।' },
    },
    {
      q: { en: 'Attention weights spike on one word. Does that explain the decision?', bn: 'Attention-ওজন এক শব্দে লাফায়। সিদ্ধান্ত ব্যাখ্যা করে?' },
      a: { en: 'No: weights show mixing, not reasoning — downstream layers decide. Test behaviorally (edit the word, watch output); heatmaps decorate, behavior evidences.', bn: 'না: ওজন মেশানো দেখায়, যুক্তি নয় — নিচের-layer সিদ্ধান্ত নেয়। আচরণে পরীক্ষা করুন (শব্দ বদলে আউটপুট দেখুন); heatmap সাজায়, আচরণ প্রমাণ করে।' },
    },
    {
      q: {
        en: 'What is the vanishing gradient problem and how did modern activations like ReLU address it?',
        bn: 'ভ্যানিশিং গ্র্যাডিয়েন্ট সমস্যা কী এবং ReLU-এর মতো আধুনিক অ্যাক্টিভেশন কীভাবে এর সমাধান করেছে?'
      },
      a: {
        en: 'In deep networks, sigmoid derivatives max out at 0.25; chained across many layers, gradients diminish exponentially toward zero, preventing earlier layers from updating. ReLU maintains a constant derivative of 1.0 for positive inputs, eliminating derivative decay across depth.',
        bn: 'গভীর নেটওয়ার্কে সিগময়েডের ডেরিভেটিভ সর্বোচ্চ ০.২৫ হয়; বহু স্তরজুড়ে চেইন রুলে গুণ হতে হতে তা শূন্যের কাছাকাছি পৌঁছে প্রাথমিক স্তরের আপডেট বন্ধ করে দেয়। ReLU ধনাত্মক মানে ১.০ ধ্রুবক ডেরিভেটিভ ধরে রেখে এই সমস্যা দূর করে।'
      },
    },
  ],
  realWorld: [
    { en: 'Phone keyboards: tiny nets predicting words in milliseconds — L3 forward passes, quantized.', bn: 'ফোন-কিবোর্ড: মিলিসেকেন্ডে শব্দ-predict ক্ষুদ্র-net — পাঠ-৩ forward pass, quantized।' },
    { en: 'Medical imaging: CNNs flagging tumors — L6 convolve-pool-stack in hospitals.', bn: 'মেডিকেল-ইমেজিং: টিউমার-পতাকা CNN — হাসপাতালে পাঠ-৬ convolve-pool-stack।' },
    { en: 'Chatbots: transformers attending whole conversations — L7 spotlights at planetary scale.', bn: 'Chatbot: পুরো-কথোপকথনে মনোযোগী transformer — গ্রহ-স্কেলে পাঠ-৭ spotlight।' },
  ],
};