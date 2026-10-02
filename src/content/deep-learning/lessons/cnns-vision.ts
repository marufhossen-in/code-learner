import type { Lesson } from '../../../lib/types';

export const CnnsVisionLesson: Lesson = {
  slug: 'cnns-vision',
  tech: 'deep-learning',
  title: {
    en: 'CNNs and Vision',
    bn: 'Net-এর চোখ গজায়: ক্ষুদ্র-filter ছবিজুড়ে পিছলে প্রতি patch-ডট করে'
  },
  summary: {
    en: 'Nets grow eyes: tiny filters slide across images, dot-producting every patch — a [[−1,1],[−1,1]] filter prints +2 down an edge column and 0 elsewhere. You will convolve a real 4×4 image live, pool for position-shrug, and see the edges→objects hierarchy assemble.',
    bn: 'Net-এর চোখ গজায়: ক্ষুদ্র-filter ছবিজুড়ে পিছলে প্রতি patch-ডট করে — [[−১,১],[−১,১]] filter কিনারা-কলামে +২ ছাপে, অন্যত্র ০। আসল ৪×৪ ছবি live convolve করবেন, অবস্থা-ঝাঁকানিতে pool করবেন, কিনারা→বস্তু ক্রম-জোড়া দেখবেন।',
  },
  minutes: 17,
  nextLesson: {
    slug: 'sequences-attention',
    title: {
      en: 'Sequences and Attention: Recurrence, QKV & Transformers',
      bn: 'সিকোয়েন্স ও অ্যাটেনশন: রিকারেন্স, QKV ও ট্রান্সফরমার'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: { en: 'WHAT — Filters that scan', bn: 'WHAT — স্ক্যান-করা filter' },
    },
    {
      type: 'para',
      text: {
        en: 'Convolution slides a compact filter kernel (e.g. 2×2) over the image, computing one dot-product per patch: high response = “my pattern lives here.” The same 4 numbers scan everywhere across the image (parameter sharing: one edge-detector serves a megapixel). Stacking dozens of filters produces a stack of feature maps (edge map, texture map). Pooling (such as max over 2×2) then shrugs at exact pixel position: “edge located somewhere here” — creating smaller maps and tougher vision. Repeat this ladder: edges → textures → parts → whole objects.',
        bn: 'কনভোলিউশন একটি ছোট ফিল্টার কার্নেলকে (যেমন 2×2) পুরো ছবির ওপর দিয়ে স্লাইড করায় এবং প্রতিটি প্যাচে একটি করে ডট প্রোডাক্ট গণনা করে: উচ্চ মান নির্দেশ করে যে কাঙ্ক্ষিত প্যাটার্নটি এখানে রয়েছে। একই 4 টি সংখ্যা পুরো ছবি জুড়ে স্ক্যান করে (প্যারামিটার শেয়ারিং: একটি একক এজ ডিটেক্টর লক্ষ লক্ষ পিক্সেলে কাজ করে)। ডজন ডজন ফিল্টার স্ট্যাক করে ফিচার ম্যাপ তৈরি হয়। এরপর ম্যাক্স পুলিং (2×2 ব্লকে সর্বোচ্চ মান নেওয়া) নির্দিষ্ট অবস্থান নিরপেক্ষতা দেয়। এভাবে ধাপে ধাপে প্রান্ত বা এজ থেকে শুরু করে বুনন, অংশ এবং পূর্ণাঙ্গ বস্তু শনাক্ত করা হয়।',
      },
    },
    {
      type: 'diagram',
      title: { en: 'One filter finds the edge column', bn: 'এক filter কিনারা-কলাম পায়' },
      svg: `<svg viewBox="0 0 640 230" font-family="system-ui, sans-serif" role="img" aria-label="4x4 image with vertical edge, 2x2 filter, 3x3 output with bright column">
<g font-size="12" font-weight="800" fill="currentColor" text-anchor="middle">
<text x="110" y="22">image 4×4: edge ↓</text>
<text x="330" y="22">filter 2×2</text>
<text x="520" y="22">feature map 3×3</text>
</g>
<g font-size="11" font-weight="700" text-anchor="middle">
<rect x="40" y="40" width="35" height="35" fill="#0f172a"/><rect x="75" y="40" width="35" height="35" fill="#0f172a"/><rect x="110" y="40" width="35" height="35" fill="#e2e8f0"/><rect x="145" y="40" width="35" height="35" fill="#e2e8f0"/>
<rect x="40" y="75" width="35" height="35" fill="#0f172a"/><rect x="75" y="75" width="35" height="35" fill="#0f172a"/><rect x="110" y="75" width="35" height="35" fill="#e2e8f0"/><rect x="145" y="75" width="35" height="35" fill="#e2e8f0"/>
<rect x="40" y="110" width="35" height="35" fill="#0f172a"/><rect x="75" y="110" width="35" height="35" fill="#0f172a"/><rect x="110" y="110" width="35" height="35" fill="#e2e8f0"/><rect x="145" y="110" width="35" height="35" fill="#e2e8f0"/>
<rect x="40" y="145" width="35" height="35" fill="#0f172a"/><rect x="75" y="145" width="35" height="35" fill="#0f172a"/><rect x="110" y="145" width="35" height="35" fill="#e2e8f0"/><rect x="145" y="145" width="35" height="35" fill="#e2e8f0"/>
<text x="57" y="62" fill="#e2e8f0">0</text><text x="92" y="62" fill="#e2e8f0">0</text><text x="127" y="62" fill="#0f172a">1</text><text x="162" y="62" fill="#0f172a">1</text>
</g>
<g font-size="14" font-weight="800" text-anchor="middle">
<rect x="290" y="75" width="40" height="40" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" stroke-width="2"/>
<rect x="330" y="75" width="40" height="40" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" stroke-width="2"/>
<rect x="290" y="115" width="40" height="40" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" stroke-width="2"/>
<rect x="330" y="115" width="40" height="40" fill="#4f46e5" opacity="0.2" stroke="#4f46e5" stroke-width="2"/>
<text x="310" y="101" fill="currentColor">−1</text><text x="350" y="101" fill="currentColor">1</text>
<text x="310" y="141" fill="currentColor">−1</text><text x="350" y="141" fill="currentColor">1</text>
</g>
<text x="235" y="120" font-size="22" font-weight="800" fill="currentColor">∗</text>
<text x="415" y="120" font-size="22" font-weight="800" fill="currentColor">=</text>
<g font-size="13" font-weight="800" text-anchor="middle">
<rect x="460" y="55" width="40" height="40" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="500" y="55" width="40" height="40" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
<rect x="540" y="55" width="40" height="40" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="460" y="95" width="40" height="40" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="500" y="95" width="40" height="40" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
<rect x="540" y="95" width="40" height="40" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="460" y="135" width="40" height="40" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
<rect x="500" y="135" width="40" height="40" fill="#f59e0b" stroke="#b45309" stroke-width="2"/>
<rect x="540" y="135" width="40" height="40" fill="#f1f5f9" stroke="#94a3b8" stroke-width="1.5"/>
<text x="480" y="80" fill="currentColor">0</text><text x="520" y="80" fill="currentColor">2</text><text x="560" y="80" fill="currentColor">0</text>
<text x="480" y="120" fill="currentColor">0</text><text x="520" y="120" fill="currentColor">2</text><text x="560" y="120" fill="currentColor">0</text>
<text x="480" y="160" fill="currentColor">0</text><text x="520" y="160" fill="currentColor">2</text><text x="560" y="160" fill="currentColor">0</text>
</g>
<text x="320" y="210" text-anchor="middle" font-size="12" font-weight="600" fill="currentColor">slide → dot → print: the +2 column IS the detected edge</text>
</svg>`,
      caption: {
        en: 'Dark-light boundary in, glowing column out. Four numbers found every edge pixel at once.',
        bn: 'কালো-আলো সীমানা ঢোকে, জ্বলজ্বলে-কলাম বেরোয়। চার সংখ্যা প্রতি কিনারা-পিক্সেল একসাথে পেয়েছে।',
      },
    },
    {
      type: 'code',
      lang: 'python',
      filename: 'convolution_2d.py',
      code: `def convolve2d(image, kernel):
    h, w = len(image), len(image[0])
    kh, kw = len(kernel), len(kernel[0])
    out_h, out_w = h - kh + 1, w - kw + 1
    output = []
    for r in range(out_h):
        row = []
        for c in range(out_w):
            val = sum(image[r + kr][c + kc] * kernel[kr][kc]
                      for kr in range(kh) for kc in range(kw))
            row.append(val)
        output.append(row)
    return output

# 4x4 image with vertical edge: left 2 cols dark (0), right 2 cols light (1)
img = [[0, 0, 1, 1],
       [0, 0, 1, 1],
       [0, 0, 1, 1],
       [0, 0, 1, 1]]

# 2x2 vertical edge kernel
kernel = [[-1, 1],
          [-1, 1]]

fmap = convolve2d(img, kernel)
for row in fmap:
    print(row)
# Output: [0, 2, 0]
# Output: [0, 2, 0]
# Output: [0, 2, 0]`,
      caption: {
        en: '2D convolution in pure Python sliding a 2x2 vertical kernel over a 4x4 image, cleanly detecting the vertical boundary with values of 2.',
        bn: 'পাইথনে 2D কনভোলিউশন যেখানে 4x4 ছবির ওপর 2x2 কার্নেল পিছলে 2 মান দ্বারা উল্লম্ব কিনারা শনাক্ত করা হয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'Convolution', def: { en: 'Slide filter, dot each patch, print map.', bn: 'Filter পিছলান, প্রতি patch-ডট, মানচিত্র ছাপুন।' } },
        { term: 'Filter / kernel', def: { en: 'The small pattern-hunter (2×2, 3×3…). Learned, not designed.', bn: 'ছোট প্যাটার্ন-শিকারি (২×২, ৩×৩…)। শেখা, নকশা নয়।' } },
        { term: 'Feature map', def: { en: 'One filter’s response sheet: “pattern HERE.”', bn: 'এক filter-সাড়া পাতা: “প্যাটার্ন এখানে।”' } },
        { term: 'Pooling', def: { en: 'Max over windows: smaller maps, position-shrug.', bn: 'জানালায় max: ছোট-মানচিত্র, অবস্থা-ঝাঁকানি।' } },
        { term: 'Channel', def: { en: 'Stacked maps (RGB in; learned maps inside).', bn: 'স্তূপ-মানচিত্র (RGB ঢোকে; ভেতরে শেখা-মানচিত্র)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'why',
      text: { en: 'WHY — Sharing beats brute force', bn: 'WHY — ভাগাভাগি brute force হারায়' },
    },
    {
      type: 'list',
      items: [
        { en: 'A dense layer on 224×224×3 needs 150,000 weights PER neuron; a 3×3 filter needs 9 TOTAL. Sharing makes vision affordable.', bn: '224×224×3 তে dense layer প্রতি নিউরনে 150,000 ওজন চায়; একটি 3×3 ফিল্টারে মোট 9 টি প্যারামিটার থাকে। ভাগাভাগি ভিশনকে সাশ্রয়ী করে।' },
        { en: 'Translation tolerance: the edge-detector fires wherever the edge sits — no retraining per position.', bn: 'স্থান-সহনশীলতা: কিনারা-শনাক্তকারী কিনারা-যেখানেই জ্বলে — অবস্থান-প্রতি পুনঃtraining নেই।' },
        { en: '2012→now: every vision breakthrough (AlexNet→ResNet→ViT hybrids) stands on convolve-pool-stack.', bn: '২০১২→এখন: প্রতি vision-সাফল্য (AlexNet→ResNet→ViT hybrid) convolve-pool-stack-এ দাঁড়ায়।' },
      ],
    },
    {
      type: 'heading',
      id: 'how',
      text: { en: 'HOW — Convolve in 4 steps', bn: 'HOW — Convolve ৪ ধাপে' },
    },
    {
      type: 'steps',
      items: [
        { title: { en: '1. Place the filter', bn: '১. Filter বসান' }, text: { en: 'Top-left patch [[0,0],[0,0]] under [[−1,1],[−1,1]].', bn: '[[−১,১],[−১,১]]-নিচে ওপরে-বাম patch [[০,০],[০,০]]।' } },
        { title: { en: '2. Dot + print', bn: '২. ডট + ছাপুন' }, text: { en: '0×−1+0×1+0×−1+0×1 = 0. Map[0,0] = 0.', bn: '০×−১+০×১+০×−১+০×১ = ০। Map[০,০] = ০।' } },
        { title: { en: '3. Slide everywhere', bn: '৩. সর্বত্র পিছলান' }, text: { en: '3×3 placements on 4×4. Straddling patches print +2.', bn: '৪×৪-তে ৩×৩ বসানো। চড়া-patch +২ ছাপে।' } },
        { title: { en: '4. Pool the map', bn: '৪. মানচিত্র pool' }, text: { en: 'Global max = 2: “vertical edge present.” ReLU first (kills −0s? none here).', bn: 'Global max = ২: “খাড়া-কিনারা আছে।” আগে ReLU (এখানে মারার − নেই)।' } },
      ],
    },
    {
      type: 'heading',
      id: 'internal',
      text: { en: 'INSIDE — The edge column appears', bn: 'INSIDE — কিনারা-কলাম দেখা দেয়' },
    },
    {
      type: 'para',
      text: {
        en: 'This tryit convolves the diagram’s 4×4 edge image with [[−1,1],[−1,1]] and prints the 3×3 map: +2 down the middle column, 0 elsewhere — then global-max-pools to 2. Swap in the horizontal hunter [[1,1],[−1,−1]]: all zeros, correctly bored — no horizontal edge exists. Edit and re-run both.',
        bn: 'এই tryit diagram-৪×৪ কিনারা-ছবি [[−১,১],[−১,১]]-তে convolve করে ৩×৩ মানচিত্র ছাপে: মাঝ-কলামে +২, অন্যত্র ০ — তারপর global-max-pool ২-তে। অনুভূমিক-শিকারি [[১,১],[−১,−১]] বসান: সব শূন্য, সঠিক-বিরক্ত — অনুভূমিক-কিনারা নেই। দুটো বদলে আবার চালান।',
      },
    },
    {
      type: 'tryit',
      title: { en: 'Convolve + pool (try the horizontal filter, press Run)', bn: 'Convolve + pool (অনুভূমিক filter দিয়ে Run)' },
      html: '<h3>Feature map + edge energy</h3>\n<pre id="out"></pre>\n<p>Console narrates one patch dot-product.</p>',
      css: 'body { font-family: system-ui, sans-serif; padding: 12px; }\n#out { background: #eff6ff; border: 1px solid #93c5fd; border-radius: 8px; padding: 10px; }',
      js: 'const IMG = [[0,0,1,1],[0,0,1,1],[0,0,1,1],[0,0,1,1]]; // vertical edge\nconst F = [[-1,1],[-1,1]]; // ← try [[1,1],[-1,-1]]: horizontal hunter\nconst dot = (r, c) => IMG[r][c]*F[0][0] + IMG[r][c+1]*F[0][1] + IMG[r+1][c]*F[1][0] + IMG[r+1][c+1]*F[1][1];\nconsole.log("patch(0,1) = [" + IMG[0][1] + "," + IMG[0][2] + ";" + IMG[1][1] + "," + IMG[1][2] + "] · F = " + dot(0,1));\nconst map = [];\nfor (let r = 0; r <= 2; r++) { map.push([]); for (let c = 0; c <= 2; c++) map[r].push(dot(r, c)); }\nconst relu = map.map((row) => row.map((v) => Math.max(0, v)));\nconst energy = Math.max(...relu.flat());\ndocument.getElementById("out").textContent =\n  "map:\\n" + map.map((row) => row.map((v) => String(v).padStart(3)).join(" ")).join("\\n") +\n  "\\nedge energy (global max) = " + energy;',
    },
    {
      type: 'heading',
      id: 'result',
      text: { en: 'RESULT — Vision instincts', bn: 'RESULT — Vision-বোধ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Hand-convolve any tiny image: place, dot, slide. The bright column always marks the match.', bn: 'যেকোনো ক্ষুদ্র-ছবি হাতে-convolve করুন: বসান, ডট, পিছলান। উজ্জ্বল-কলাম সবসময় মিল-চিহ্নিত করে।' },
        { en: 'Filters are questions (“vertical edge here?”), maps are answer sheets, pooling is the shrug.', bn: 'Filter প্রশ্ন (“এখানে খাড়া-কিনারা?”), মানচিত্র উত্তরপত্র, pooling কাঁধ-ঝাঁকানি।' },
      ],
    },
    {
      type: 'heading',
      id: 'debug',
      text: { en: 'DEBUG — CNN blind spots', bn: 'DEBUG — CNN অন্ধ-বিন্দু' },
    },
    {
      type: 'callout',
      kind: 'warn',
      title: { en: 'Texture bias: CNNs pet fur, ignore shape (adversarial stickers win)', bn: 'Texture-পক্ষপাত: CNN পশম-আদর করে, আকৃতি এড়ায় (adversarial স্টিকার জেতে)' },
      text: {
        en: 'CNNs often classify by LOCAL texture, not global shape: a cat-textured elephant = “cat.” Symptoms: sticker attacks flip predictions, sketch-versions fail. Cure: shape-biased augmentation (stylized images), vision transformers for global context — and never trust pixels alone in safety systems.',
        bn: 'CNN প্রায়ই স্থানীয়-texture-এ শ্রেণিকরণ করে, global-আকৃতিতে নয়: বিড়াল-বুনন হাতি = “বিড়াল।” লক্ষণ: স্টিকার-আক্রমণ prediction উল্টায়, sketch-সংস্করণ ব্যর্থ। ওষুধ: আকৃতি-পক্ষপাত augmentation (stylized ছবি), global-প্রসঙ্গে vision transformer — আর নিরাপত্তা-ব্যবস্থায় কখনো শুধু-পিক্সেল বিশ্বাস নয়।',
      },
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Stacks of 3×3 beat one 7×7 (fewer weights, more bends)', bn: '৩×৩-স্তূপ এক ৭×৭ হারায় (কম ওজন, বেশি-বাঁক)' },
      text: {
        en: 'Two 3×3 layers see 5×5 with 18 weights + a ReLU bend between; one 5×5 uses 25 weights, no mid-bend. Symptoms of giant filters: param bloat, sluggish training. Cure: default to 3×3 stacks (VGG’s gift), 1×1 for channel-mixing.',
        bn: 'দুই ৩×৩ layer ১৮ ওজন + মাঝ-ReLU বাঁকে ৫×৫ দেখে; এক ৫×৫ ২৫ ওজন, মাঝ-বাঁক নেই। দৈত্য-filter লক্ষণ: param-স্ফীতি, মন্থর-training। ওষুধ: default ৩×৩ স্তূপ (VGG-উপহার), channel-মেশানোতে ১×১।',
      },
    },
    {
      type: 'heading',
      id: 'realworld',
      text: { en: 'REAL WORLD — Eyes everywhere', bn: 'REAL WORLD — সর্বত্র চোখ' },
    },
    {
      type: 'list',
      items: [
        { en: 'Medical scans: CNNs flag tumors in X-rays — convolve-pool-stack saving lives.', bn: 'মেডিকেল-স্ক্যান: CNN X-ray-টিউমার পতাকা দেয় — জীবন-বাঁচানো convolve-pool-stack।' },
        { en: 'Self-driving: lane/car/pedestrian maps at 30fps — this lesson, hardened.', bn: 'স্বচালিত: ৩০fps-এ লেন/গাড়ি/পথচারী-মানচিত্র — এই পাঠ, কঠিন।' },
        { en: 'Phone cameras: night-mode denoise + portrait blur — tiny CNNs per photo.', bn: 'ফোন-ক্যামেরা: night-mode denoise + portrait blur — ছবি-প্রতি ক্ষুদ্র-CNN।' },
      ],
    },
    {
      type: 'heading',
      id: 'next',
      text: { en: 'NEXT — Sequences and Attention', bn: 'পরবর্তী পাঠ — Sequences ও Attention' },
    },
    {
      type: 'para',
      text: {
        en: 'Eyes owned. Lesson 7 gives nets EARS and MEMORY: sequences, the recurrence idea, and attention — the mechanism that ate language and now eyes vision too.',
        bn: 'চোখ অর্জিত। পাঠ 7 net-কে কান-স্মৃতি দেয়: sequence, recurrence-ধারণা, attention — ভাষা-খাওয়া প্রক্রিয়া, এখন vision-ও দেখে।',
      },
    },
  ],
  exercises: [
    {
      id: 'cvn-ex-1',
      kind: 'mcq',
      topic: 'dot-one',
      question: {
        en: 'When the 2x2 vertical edge filter [[-1, 1], [-1, 1]] convolves over the input patch [[0, 1], [0, 1]], what is the resulting dot product?',
        bn: 'যখন 2x2 উল্লম্ব এজ ফিল্টার [[-1, 1], [-1, 1]] ইনপুট প্যাচ [[0, 1], [0, 1]] এর ওপর কনভল্ভ করে, তখন ডট প্রোডাক্টের ফলাফল কত হয়?'
      },
      options: [
        { en: '+2 (edge straddled)', bn: '+2 (কিনারা শনাক্ত)' },
        { en: '0 (uniform patch)', bn: '0 (একরূপ প্যাচ)' },
        { en: '−2 (reversed edge)', bn: '-2 (উল্টো কিনারা)' },
        { en: '+4 (double edge)', bn: '+4 (দ্বৈত কিনারা)' },
      ],
      answer: 0,
      hint: { en: '0×−1 + 1×1 + 0×−1 + 1×1.', bn: '০×−১ + ১×১ + ০×−১ + ১×১।' },
      explanation: {
        en: '0+1+0+1 = 2: left-dark right-bright straddles the filter’s question. Uniform patches (all-0/all-1) print 0 — filters answer only their question.',
        bn: '০+১+০+১ = ২: বাম-কালো ডান-উজ্জ্বল filter-প্রশ্নে চড়ে। একরূপ-patch (সব-০/সব-১) ০ ছাপে — filter শুধু নিজ-প্রশ্নের উত্তর দেয়।',
      },
    },
    {
      id: 'cvn-ex-2',
      kind: 'mcq',
      topic: 'map-shape',
      question: { en: '4×4 image, 2×2 filter, stride 1, no padding. Map?', bn: '৪×৪ ছবি, ২×২ filter, stride ১, padding নেই। মানচিত্র?' },
      options: [
        { en: '3×3 (three placements per side)', bn: '৩×৩ (পাশ-প্রতি তিন বসানো)' },
        { en: '4×4 (same size)', bn: '৪×৪ (একই আকার)' },
        { en: '2×2 (filter size)', bn: '২×২ (filter-আকার)' },
        { en: '1×1 (single dot)', bn: '১×১ (এক ডট)' },
      ],
      answer: 0,
      hint: { en: 'Placements = image − filter + 1.', bn: 'বসানো = ছবি − filter + ১।' },
      explanation: {
        en: '4−2+1 = 3 per side: the filter fits 3 across, 3 down. Valid convolution shrinks; padding preserves — shape aloud, always.',
        bn: 'প্রতি পাশে ৪−২+১ = ৩: filter ৩-জুড়ে, ৩-নিচে বসে। Valid convolution সংকোচে; padding রাখে — আকৃতি জোরে, সবসময়।',
      },
    },
    {
      id: 'cvn-ex-3',
      kind: 'mcq',
      topic: 'pool-why',
      question: { en: 'Max-pooling’s gift?', bn: 'Max-pooling-উপহার?' },
      options: [
        { en: 'Smaller maps + position tolerance (“edge somewhere here”)', bn: 'ছোট-মানচিত্র + অবস্থান-সহনশীলতা (“কোথাও-এখানে কিনারা”)' },
        { en: 'Larger maps + exact positions', bn: 'বড়-মানচিত্র + ঠিক-অবস্থান' },
        { en: 'More parameters', bn: 'বেশি-parameter' },
        { en: 'Color vision', bn: 'রঙিন-দৃষ্টি' },
      ],
      answer: 0,
      hint: { en: 'The shrug.', bn: 'কাঁধ-ঝাঁকানি।' },
      explanation: {
        en: 'Max keeps “strongest response nearby,” discarding WHERE exactly: 2×2 shrink + shift-tolerance in one free op (pooling has ZERO weights).',
        bn: 'Max “কাছে-শক্তিশালী সাড়া” রাখে, ঠিক-কোথায় ফেলে: এক ফ্রি-op-এ ২×২ সংকোচন + সরণ-সহনশীলতা (pooling-ওজন শূন্য)।',
      },
    },
    {
      id: 'cvn-ex-4',
      kind: 'predict',
      topic: 'horizontal-bored',
      question: { en: 'Horizontal hunter [[1,1],[−1,−1]] on the vertical-edge image prints all… what? Why?', bn: 'খাড়া-কিনারা ছবিতে অনুভূমিক-শিকারি [[১,১],[−১,−১]] সব… কী ছাপে? কেন?' },
      options: [
        { en: 'Zeros — every patch’s top row equals its bottom row', bn: 'শূন্য — প্রতি patch-ওপরসারি নিচসারি-সমান' },
        { en: 'Twos — edges are edges', bn: 'দুই — কিনারা কিনারাই' },
        { en: 'Fours — double detection', bn: 'চার — দ্বৈত-শনাক্তকরণ' },
        { en: 'Random noise', bn: 'এলোমেলো-noise' },
      ],
      answer: 0,
      hint: { en: 'Rows are constant down the image; the filter subtracts rows.', bn: 'ছবি-নিচে সারি স্থির; filter সারি বিয়োগ করে।' },
      explanation: {
        en: 'Each patch = [[a,b],[a,b]]: (a+b)−(a+b) = 0. The filter asks “horizontal change?” — the image answers “none, everywhere.” Right question, wrong image.',
        bn: 'প্রতি patch = [[a,b],[a,b]]: (a+b)−(a+b) = ০। Filter প্রশ্ন করে “অনুভূমিক-বদল?” — ছবি উত্তর দেয় “কোথাও না।” সঠিক-প্রশ্ন, ভুল-ছবি।',
      },
    },
  ],
  quiz: {
    id: 'cnns-vision-quiz',
    title: { en: 'Lesson 6 exam', bn: 'পাঠ ৬ পরীক্ষা' },
    questions: [
      {
        id: 'cvnq1',
        kind: 'mcq',
        topic: 'sharing-math',
        question: { en: '3×3 filter on any image size: weights?', bn: 'যেকোনো ছবি-আকারে ৩×৩ filter: ওজন?' },
        options: [
          { en: '9 (+1 bias) — shared everywhere', bn: '৯ (+১ bias) — সর্বত্র-ভাগ' },
          { en: '9 per pixel', bn: 'পিক্সেল-প্রতি ৯' },
          { en: 'Image-size squared', bn: 'ছবি-আকার বর্গ' },
          { en: 'Zero — filters are free', bn: 'শূন্য — filter ফ্রি' },
        ],
        answer: 0,
        hint: { en: 'Parameter sharing.', bn: 'Parameter sharing।' },
        explanation: {
          en: 'Same 9 numbers at every placement: megapixel in, 9 weights out. Dense would bill per-pixel — sharing is the whole economy of vision.',
          bn: 'প্রতি বসানোয় একই ৯ সংখ্যা: মেগাপিক্সেল ঢোকে, ৯ ওজন বেরোয়। Dense পিক্সেল-প্রতি বিল করত — ভাগাভাগি vision-পুরো অর্থনীতি।',
        },
      },
      {
        id: 'cvnq2',
        kind: 'mcq',
        topic: 'hierarchy-order',
        question: { en: 'Vision hierarchy order?', bn: 'Vision-ক্রম?' },
        options: [
          { en: 'Edges → textures → parts → objects', bn: 'কিনারা → বুনন → অংশ → বস্তু' },
          { en: 'Objects → parts → textures → edges', bn: 'বস্তু → অংশ → বুনন → কিনারা' },
          { en: 'Pixels → objects directly', bn: 'পিক্সেল → সরাসরি বস্তু' },
          { en: 'Random per layer', bn: 'Layer-প্রতি এলোমেলো' },
        ],
        answer: 0,
        hint: { en: 'Compose upward.', bn: 'ওপরে মিলান।' },
        explanation: {
          en: 'Early layers see patches (edges), late layers compose (fur+whisker+ear = cat). Depth climbs abstraction — the ladder from L3, visualized.',
          bn: 'আগের-layer patch দেখে (কিনারা), পরের-layer মিলায় (পশম+গোঁফ+কান = বিড়াল)। গভীরতা বিমূর্ততায় ওঠে — পাঠ-৩-এর মই, দৃশ্যায়িত।',
        },
      },
      {
        id: 'cvnq3',
        kind: 'mcq',
        topic: 'texture-trap',
        question: { en: 'Cat-fur elephant classified “cat.” Disease + cure?', bn: 'বিড়াল-পশম হাতি “বিড়াল” শ্রেণিকৃত। রোগ + ওষুধ?' },
        options: [
          { en: 'Texture bias — shape-biased augmentation / transformers', bn: 'Texture-পক্ষপাত — আকৃতি-পক্ষপাত augmentation / transformer' },
          { en: 'Too many filters — delete half', bn: 'বেশি-filter — অর্ধেক মুছুন' },
          { en: 'LR too small — raise it', bn: 'LR ছোট — তুলুন' },
          { en: 'Pooling too honest — remove it', bn: 'Pooling বেশি-সৎ — সরান' },
        ],
        answer: 0,
        hint: { en: 'DEBUG warn.', bn: 'DEBUG warn।' },
        explanation: {
          en: 'Local textures shout louder than global shape to CNNs. Stylized training (same shape, scrambled texture) rebalances; transformers add global eyes.',
          bn: 'স্থানীয়-texture CNN-কানে global-আকৃতির চেয়ে জোরে চেঁচায়। Stylized training (একই আকৃতি, এলোমেলো-texture) পুনঃসাম্য করে; transformer global-চোখ যোগায়।',
        },
      },
      {
        id: 'cvnq4',
        kind: 'predict',
        topic: 'filter-design',
        question: { en: 'Design (in words) a 2×2 filter hunting HORIZONTAL edges + state its print on a vertical edge.', bn: 'অনুভূমিক-কিনারা শিকারি ২×২ filter (কথায়) নকশা + খাড়া-কিনারায় ছাপ বলুন।' },
        answer: 'Top row +1s, bottom row −1s (subtract rows): prints 0 on vertical edges — rows identical, difference zero.',
        accept: ['top', 'bottom', 'subtract', 'rows', '0', 'zero'],
        hint: { en: 'cvn-ex-4’s hunter.', bn: 'cvn-ex-৪ শিকারি।' },
        explanation: {
          en: '[[1,1],[−1,−1]]: top-minus-bottom. Vertical edges run ALONG rows (no row-change) → 0 everywhere. Filters are loyal to one geometry only.',
          bn: '[[১,১],[−১,−১]]: ওপর-বিয়োগ-নিচ। খাড়া-কিনারা সারি-বরাবর চলে (সারি-বদল নেই) → সর্বত্র ০। Filter এক জ্যামিতিতে অনুগত।',
        },
      },
    ],
  },
};