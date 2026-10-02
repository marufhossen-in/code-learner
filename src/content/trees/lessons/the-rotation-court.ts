import type { Lesson } from '../../../lib/types';

export const theRotationCourtLesson: Lesson = {
  slug: 'the-rotation-court',
  tech: 'trees',
  title: {
    en: 'Tree Rotations — Rebalancing AVL Trees via LL, RR, LR, and RL Cases',
    bn: 'ট্রি রোটেশন: LL, RR, LR এবং RL কেসে এভিএল ট্রি পুনর্ভারসাম্য'
  },
  summary: {
    en: 'When insertions or deletions disturb the balance of an AVL tree, the data structure restores logarithmic height using deterministic tree rotations. Every structural imbalance reduces to four geometric configurations: Left-Left (LL), Right-Right (RR), Left-Right (LR), and Right-Left (RL). LL and RR imbalances are resolved with a single clockwise or counter-clockwise rotation, while LR and RL knee shapes require double rotations. We analyze the balance factor triggers, trace pointer reassignments in O(1) time, and verify how rotations preserve the BST invariant.',
    bn: 'সন্নিবেশ বা মোচনের ফলে এভিএল ট্রির ভারসাম্য বিঘ্নিত হলে ডেটা স্ট্রাকচারটি সুনির্দিষ্ট ট্রি রোটেশনের মাধ্যমে লগারিদমিক উচ্চতা পুনরুদ্ধার করে। প্রতিটি কাঠামোগত অসাম্য চারটি জ্যামিতিক বিন্যাসে বিভক্ত: লেফট-লেফট (LL), রাইট-রাইট (RR), লেফট-রাইট (LR), এবং রাইট-লেফট (RL)। LL এবং RR অসাম্য একক রোটেশনের মাধ্যমে সমাধান হয়, যেখানে LR এবং RL এর মতো বাঁকা আকৃতিগুলোতে ডাবল রোটেশনের প্রয়োজন হয়। আমরা ব্যালান্স ফ্যাক্টর শর্তগুলো বিশ্লেষণ করি, O(1) সময়ে পয়েন্টার অদলবদল ট্রেস করি এবং প্রমাণ করি কীভাবে রোটেশন বিএসটি বৈশিষ্ট্য অক্ষুণ্ন রাখে।'
  },
  minutes: 26,
  nextLesson: {
    slug: 'the-successor-knot',
    tech: 'trees',
    title: {
      en: 'BST Deletion and Inorder Successors — The Hibbard Deletion Knot',
      bn: 'বিএসটি উপাদান মোচন এবং ইনঅর্ডার সাকসেসর: হিবার্ড ডিলিশন প্রক্রিয়া'
    }
  },
  blocks: [
    {
      type: 'heading',
      id: 'rotation-taxonomy',
      text: {
        en: 'The Four Imbalance Cases: LL, RR, LR, and RL',
        bn: 'চারটি অসাম্য পরিস্থিতি: LL, RR, LR এবং RL'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In an Adelson-Velsky and Landis (AVL) self-balancing tree, every recursive insertion unwinds back to the root, recalculating node heights and balance factors. When a balance factor reaches +2 or -2, that node is the lowest point of imbalance. Depending on the insertion trajectory, the imbalance falls into one of four distinct cases.',
        bn: 'একটি এভিএল (AVL) সেলফ-ব্যালান্সিং ট্রিতে প্রতিটি রিকার্সিভ সন্নিবেশের পর রুট পর্যন্ত ফিরে যাওয়ার পথে নোডগুলোর উচ্চতা এবং ব্যালান্স ফ্যাক্টর পুনরায় হিসাব করা হয়। যখন কোনো নোডের ব্যালান্স ফ্যাক্টর +২ বা -২ এ পৌঁছায়, তখন সেটি ভারসাম্যের প্রথম ত্রুটি হিসেবে চিহ্নিত হয়। ইনপুটের পথের ওপর নির্ভর করে এই অসাম্য চারটি নির্দিষ্ট ক্ষেত্রের যেকোনো একটিতে পড়ে।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Straight imbalances occur when the heavy branch extends along a single direction. An LL shape leans left and is resolved by rotating right, while an RR shape leans right and requires rotating left. Dog-leg knee imbalances occur when a path zig-zags (Left-Right or Right-Left), requiring a double rotation to straighten and balance the tree.',
        bn: 'সোজা অসাম্য তখন ঘটে যখন ভারী শাখাটি কেবল একটি নির্দিষ্ট দিকে বিস্তৃত থাকে। LL বিন্যাসে বাম দিকে ঝুঁকে থাকা গাছকে রাইট রোটেশনে এবং RR বিন্যাসে ডান দিকে ঝুঁকে থাকা গাছকে লেফট রোটেশনে ঠিক করা হয়। কিন্তু বাঁকা অসাম্য তখন ঘটে যখন পথটি আঁকাবাঁকা হয় (লেফট-রাইট বা রাইট-লেফট), যার জন্য ট্রি সোজা করতে ডাবল রোটেশনের প্রয়োজন হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'left-left-case',
          def: {
            en: 'An imbalance where a node has BF > 1 and the new key was inserted into the left child left subtree, repaired by a single right rotation.',
            bn: 'এমন অসাম্য যেখানে BF > ১ এবং নতুন মানটি বাম সন্তানের বাম সাব-ট্রিতে যুক্ত হয়, যা একটি একক রাইট রোটেশনে ঠিক হয়।'
          }
        },
        {
          term: 'right-right-case',
          def: {
            en: 'An imbalance where a node has BF < -1 and the new key was inserted into the right child right subtree, repaired by a single left rotation.',
            bn: 'এমন অসাম্য যেখানে BF < -১ এবং নতুন মানটি ডান সন্তানের ডান সাব-ট্রিতে যুক্ত হয়, যা একটি একক লেফট রোটেশনে ঠিক হয়।'
          }
        },
        {
          term: 'left-right-case',
          def: {
            en: 'A dog-leg knee imbalance where a node has BF > 1 and insertion went into the left child right subtree, requiring a double rotation (left on child, then right on parent).',
            bn: 'একটি বাঁকা অসাম্য যেখানে BF > ১ এবং নতুন মানটি বাম সন্তানের ডানে ঢোকে, যার জন্য ডাবল রোটেশন লাগে।'
          }
        },
        {
          term: 'right-left-case',
          def: {
            en: 'A dog-leg knee imbalance where a node has BF < -1 and insertion went into the right child left subtree, requiring a double rotation (right on child, then left on parent).',
            bn: 'একটি বাঁকা অসাম্য যেখানে BF < -১ এবং নতুন মানটি ডান সন্তানের বামে ঢোকে, যার জন্য ডাবল রোটেশন লাগে।'
          }
        }
      ]
    },
    {
      type: 'visual',
      id: 'tree'
    },
    {
      type: 'heading',
      id: 'rotation-action-matrix',
      text: {
        en: 'Decision Matrix: Balancing Rotations and Geometry',
        bn: 'সিদ্ধান্ত ম্যাট্রিক্স: ভারসাম্যের রোটেশন এবং জ্যামিতিক বিন্যাস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The decision to execute a single or double rotation depends strictly on the balance factor of the parent and the sign of the child balance factor. Double rotations first apply a rotation to the child to convert the dog-leg knee into a straight chain, followed by a rotation on the parent to restore equilibrium.',
        bn: 'একক বা ডাবল রোটেশন চালানোর সিদ্ধান্তটি সম্পূর্ণভাবে প্যারেন্টের ব্যালান্স ফ্যাক্টর এবং চাইল্ডের চিহ্নের ওপর নির্ভর করে। ডাবল রোটেশন প্রথমে সন্তানের ওপর রোটেশন চালিয়ে বাঁকা অংশটিকে সোজা চেইনে রূপান্তর করে, যার পর প্যারেন্টের ওপর রোটেশন চালিয়ে চূড়ান্ত ভারসাম্য নিশ্চিত করা হয়।'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Imbalance Case', bn: 'অসাম্য পরিস্থিতি' },
        { en: 'Balance Factor Signs', bn: 'ব্যালান্স ফ্যাক্টর চিহ্ন' },
        { en: 'Geometric Trajectory', bn: 'জ্যামিতিক রূপ' },
        { en: 'Required Rotations', bn: 'প্রয়োজনীয় রোটেশন' }
      ],
      rows: [
        [
          { en: 'LL (Left-Left)', bn: 'LL (লেফট-লেফট)' },
          { en: 'BF(parent) > 1 and BF(left) >= 0', bn: 'BF(প্যারেন্ট) > ১ এবং BF(বাম) >= ০' },
          { en: 'Straight line leaning left', bn: 'বামে হেলে থাকা সোজা রেখা' },
          { en: 'Single Right Rotation on parent', bn: 'প্যারেন্টে একক রাইট রোটেশন' }
        ],
        [
          { en: 'RR (Right-Right)', bn: 'RR (রাইট-রাইট)' },
          { en: 'BF(parent) < -1 and BF(right) <= 0', bn: 'BF(প্যারেন্ট) < -১ এবং BF(ডান) <= ০' },
          { en: 'Straight line leaning right', bn: 'ডানে হেলে থাকা সোজা রেখা' },
          { en: 'Single Left Rotation on parent', bn: 'প্যারেন্টে একক লেফট রোটেশন' }
        ],
        [
          { en: 'LR (Left-Right)', bn: 'LR (লেফট-রাইট)' },
          { en: 'BF(parent) > 1 and BF(left) < 0', bn: 'BF(প্যারেন্ট) > ১ এবং BF(বাম) < ০' },
          { en: 'Knee leaning left-then-right', bn: 'বামে গিয়ে ডানে বাঁকা হাঁটু' },
          { en: 'Rotate left on child, then right on parent', bn: 'সন্তানে লেফট, তারপর প্যারেন্টে রাইট' }
        ],
        [
          { en: 'RL (Right-Left)', bn: 'RL (রাইট-লেফট)' },
          { en: 'BF(parent) < -1 and BF(right) > 0', bn: 'BF(প্যারেন্ট) < -১ এবং BF(ডান) > ০' },
          { en: 'Knee leaning right-then-left', bn: 'ডানে গিয়ে বামে বাঁকা হাঁটু' },
          { en: 'Rotate right on child, then left on parent', bn: 'সন্তানে রাইট, তারপর প্যারেন্টে লেফট' }
        ]
      ]
    },
    {
      type: 'heading',
      id: 'executable-rotation-code',
      text: {
        en: 'Executable LR Double Rotation Implementation',
        bn: 'এলআর ডাবল রোটেশনের সম্পূর্ণ বাস্তবায়ন ও ট্রেস'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The following TypeScript program inserts 30, 10, 20 into an AVL Tree. In a standard BST, inserting 20 creates an LR dog-leg knee under 30. The AVL logic executes an LR double rotation, elevating 20 to the root and reducing height to 1.',
        bn: 'নিচের টাইপস্ক্রিপ্ট প্রোগ্রামটি একটি এভিএল ট্রিতে ৩০, ১০, ২০ মানগুলো যোগ করে। সাধারণ বিএসটিতে ২০ যুক্ত করলে ৩০ এর নিচে একটি LR বাঁকা হাঁটু তৈরি হতো। এভিএল লজিক একটি LR ডাবল রোটেশন সম্পাদন করে ২০ কে রুটে উন্নীত করে এবং উচ্চতা ১ এ নামিয়ে আনে।'
      }
    },
    {
      type: 'code',
      code: `class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
    this.h = 0;
  }
}

class FullAVL {
  height(n) { return n ? n.h : -1; }
  update(n) { n.h = 1 + Math.max(this.height(n.left), this.height(n.right)); }
  bf(n) { return n ? this.height(n.left) - this.height(n.right) : 0; }

  rotateRight(y) {
    const x = y.left;
    const T2 = x.right;
    x.right = y;
    y.left = T2;
    this.update(y);
    this.update(x);
    return x;
  }

  rotateLeft(x) {
    const y = x.right;
    const T2 = y.left;
    y.left = x;
    x.right = T2;
    this.update(x);
    this.update(y);
    return y;
  }

  insert(node, val) {
    if (!node) return new Node(val);
    if (val < node.val) node.left = this.insert(node.left, val);
    else if (val > node.val) node.right = this.insert(node.right, val);
    else return node;

    this.update(node);
    const balance = this.bf(node);

    // LL Case
    if (balance > 1 && val < node.left.val) return this.rotateRight(node);
    // RR Case
    if (balance < -1 && val > node.right.val) return this.rotateLeft(node);
    // LR Case (Double rotation)
    if (balance > 1 && val > node.left.val) {
      node.left = this.rotateLeft(node.left);
      return this.rotateRight(node);
    }
    // RL Case (Double rotation)
    if (balance < -1 && val < node.right.val) {
      node.right = this.rotateRight(node.right);
      return this.rotateLeft(node);
    }

    return node;
  }
}

const avl = new FullAVL();
let root = null;
const seq = [30, 10, 20];
for (const x of seq) root = avl.insert(root, x);

console.log('Root element after LR double rotation:', root.val);
// Output: Root element after LR double rotation: 20
console.log('Left child:', root.left.val);
// Output: Left child: 10
console.log('Right child:', root.right.val);
// Output: Right child: 30
console.log('Tree height:', avl.height(root));
// Output: Tree height: 1
console.log('Balance factor of root:', avl.bf(root));
// Output: Balance factor of root: 0`
    },
    {
      type: 'heading',
      id: 'pointer-efficiency',
      text: {
        en: 'Memory Efficiency: Why Rotations Move Zero Keys',
        bn: 'মেমোরি দক্ষতা: রোটেশন কেন কোনো ডেটা স্থানান্তর করে না'
      }
    },
    {
      type: 'para',
      text: {
        en: 'A common misconception is that rebalancing requires copying values or reallocating array buffers. In reality, a tree rotation never copies key data or reallocates node memory. A rotation simply reassigns 3 child pointers in CPU registers, completing in a fraction of a nanosecond with strictly O(1) auxiliary space.',
        bn: 'অনেকে ভুল করে ভাবেন যে ভারসাম্য ফেরাতে হয়তো মান কপি করতে হয় বা নতুন বাফার মেমোরি নিতে হয়। বাস্তবে ট্রি রোটেশন কখনোই ডেটা কপি করে না বা নতুন মেমোরি বরাদ্দ করে না। একটি রোটেশন সিপিইউ রেজিস্টারে মাত্র ৩টি চাইল্ড পয়েন্টার পরিবর্তন করে, যা ন্যানোসেকেন্ডেরও কম সময়ে O(1) স্পেসে সম্পন্ন হয়।'
      }
    },
    {
      type: 'takeaways',
      items: [
        {
          en: 'Four universal cases: Every AVL imbalance reduces to either single rotations (LL, RR) or double rotations (LR, RL).',
          bn: 'চারটি সার্বজনীন রূপ: এভিএলের সমস্ত অসাম্য একক রোটেশন (LL, RR) অথবা ডাবল রোটেশনের (LR, RL) মাধ্যমে সমাধান হয়।'
        },
        {
          en: 'Double rotation mechanics: An LR or RL knee is straightened by rotating the child first, followed by rotating the parent.',
          bn: 'ডাবল রোটেশন কৌশল: LR বা RL এর বাঁকা হাঁটু প্রথমে সন্তানে রোটেশন দিয়ে সোজা করা হয়, তারপর প্যারেন্টে প্রয়োগ করা হয়।'
        },
        {
          en: 'Constant time execution: Rotations modify 3 to 5 reference pointers in O(1) time without moving stored key values.',
          bn: 'ধ্রুবক সময়ে সমাপ্তি: রোটেশন কোনো মূল মান না সরিয়ে O(1) সময়ে মাত্র ৩ থেকে ৫টি পয়েন্টার পুনর্বিন্যাস করে।'
        },
        {
          en: 'BST invariant preservation: Inorder traversal output before and after any rotation remains completely identical.',
          bn: 'বিএসটি বৈশিষ্ট্য অক্ষুণ্ন রাখা: যেকোনো রোটেশনের আগে এবং পরে ইনঅর্ডার ট্রাভার্সালের ফলাফল হুবহু একই থাকে।'
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'rc-ex1',
      kind: 'mcq',
      topic: 'rl-double-rotation-sequence',
      question: {
        en: 'In an AVL tree with a Right-Left (RL) imbalance (BF < -1 and newcomer inserted into right child’s left subtree), what is the correct sequence of rotations?',
        bn: 'একটি এভিএল ট্রিতে রাইট-লেফট (RL) অসাম্য দেখা দিলে (BF < -১ এবং নতুন মানটি ডান সন্তানের বামে ঢুকলে), সঠিক রোটেশন ক্রম কোনটি?'
      },
      options: [
        {
          en: 'Right rotation on the right child, followed by Left rotation on the parent',
          bn: 'ডান সন্তানের ওপর রাইট রোটেশন এবং এরপর প্যারেন্টের ওপর লেফট রোটেশন'
        },
        {
          en: 'Left rotation on the parent, followed by Right rotation on the child',
          bn: 'প্যারেন্টের ওপর লেফট রোটেশন এবং এরপর সন্তানের ওপর রাইট রোটেশন'
        },
        {
          en: 'Two consecutive Right rotations on the root',
          bn: 'রুটের ওপর পরপর দুটি রাইট রোটেশন'
        },
        {
          en: 'A single Left rotation on the root',
          bn: 'রুটের ওপর একটি একক লেফট রোটেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'First straighten the Right-Left dogleg into a straight Right-Right line.',
        bn: 'প্রথমে রাইট-লেফট বাঁকা অংশকে সোজা রাইট-রাইট রেখায় পরিণত করুন।'
      },
      explanation: {
        en: 'Rotating the right child to the right converts the RL shape into an RR shape. Then, rotating the parent to the left restores AVL balance.',
        bn: 'ডান সন্তানকে ডানে ঘোরালে RL রূপটি RR এ পরিণত হয়। এরপর প্যারেন্টকে বামে ঘোরালে এভিএল ভারসাম্য পুনরুদ্ধার হয়।'
      }
    },
    {
      id: 'rc-ex2',
      kind: 'mcq',
      topic: 'number-of-rotations-on-insert',
      question: {
        en: 'In an AVL tree, what is the maximum number of rotation operations (single or double) required to rebalance the tree after a single element insertion?',
        bn: 'একটি এভিএল ট্রিতে একটি একক উপাদান যোগ করার পর ভারসাম্য ফেরাতে সর্বোচ্চ কতটি রোটেশন অপারেশনের (একক বা ডাবল) প্রয়োজন হয়?'
      },
      options: [
        {
          en: 'At most 1 rotation operation (either 1 single rotation or 1 double rotation) at the lowest unbalanced ancestor',
          bn: 'সর্বোচ্চ ১টি রোটেশন অপারেশন (হয় ১টি একক রোটেশন অথবা ১টি ডাবল রোটেশন) সর্বনিম্ন ভারসাম্যহীন পূর্বপুরুষের ওপর'
        },
        {
          en: 'Up to n rotations along the entire tree',
          bn: 'পুরো ট্রি জুড়ে সর্বোচ্চ n টি রোটেশন'
        },
        {
          en: 'Strictly 0 rotations always',
          bn: 'সর্বদা কঠোরভাবে ০টি রোটেশন'
        },
        {
          en: 'Exactly 100 rotations per insert',
          bn: 'প্রতি সন্নিবেশে ঠিক ১০০টি রোটেশন'
        }
      ],
      answer: 0,
      hint: {
        en: 'Does rebalancing the lowest unbalanced node restore the height of that subtree to its pre-insertion height?',
        bn: 'সর্বনিম্ন ভারসাম্যহীন নোডকে মেরামত করলে কি সেই সাব-ট্রির উচ্চতা আগের মতো হয়ে যায়?'
      },
      explanation: {
        en: 'After inserting, a single rotation operation at the first unbalanced node reduces that subtree height by 1, restoring balance all the way to the root.',
        bn: 'সন্নিবেশের পর প্রথম ভারসাম্যহীন নোডে মাত্র একটি রোটেশন চালালেই সাব-ট্রির উচ্চতা ১ কমে যায় এবং পুরো রুট পর্যন্ত ভারসাম্য ফিরে আসে।'
      }
    },
    {
      id: 'rc-ex3',
      kind: 'mcq',
      topic: 'keys-moved-during-rotation',
      question: {
        en: 'How many data key values are copied or moved in RAM memory during an AVL tree rotation?',
        bn: 'একটি এভিএল ট্রি রোটেশনের সময় র্যাম মেমোরিতে কতটি ডেটা মান কপি বা স্থানান্তর করা হয়?'
      },
      options: [
        {
          en: 'Zero keys, because rotations only reassign child reference pointers without moving or copying stored values',
          bn: 'শূন্যটি মান, কারণ রোটেশন কোনো ডেটা স্থানান্তর না করে কেবল চাইল্ড রেফারেন্স পয়েন্টার অদলবদল করে'
        },
        {
          en: 'All keys in the subtree are copied',
          bn: 'সাব-ট্রির সমস্ত মান কপি করা হয়'
        },
        {
          en: 'Exactly 32 bytes per key',
          bn: 'কি প্রতি ঠিক ৩২ বাইট'
        },
        {
          en: 'One key is deleted and re-inserted',
          bn: 'একটি কি মুছে ফেলে পুনরায় যোগ করা হয়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Do the nodes change memory addresses during a pointer rotation?',
        bn: 'পয়েন্টার ঘোরানোর সময় নোডগুলো কি মেমোরি ঠিকানা পরিবর্তন করে?'
      },
      explanation: {
        en: 'Nodes stay in their existing memory addresses. Rotations strictly change the pointer variables connecting parents to children.',
        bn: 'নোডগুলো তাদের নির্দিষ্ট মেমোরি ঠিকানায় বহাল থাকে। রোটেশন কেবল প্যারেন্ট-চাইল্ড সংযোগকারী পয়েন্টারগুলো পরিবর্তন করে।'
      }
    }
  ],
  quiz: {
    id: 'the-rotation-court-quiz',
    title: {
      en: 'Tree Rotations and AVL Balancing Quiz',
      bn: 'ট্রি রোটেশন এবং এভিএল ব্যালান্সিং কুইজ'
    },
    questions: [
      {
        id: 'rc-q1',
        kind: 'mcq',
        topic: 'identifying-ll-case',
        question: {
          en: 'When node 30 has left child 20, and new node 10 is inserted as the left child of 20, which imbalance case is created at node 30?',
          bn: 'নোড ৩০ এর বাম সন্তান ২০ এবং নতুন নোড ১০ কে ২০ এর বাম সন্তান হিসেবে যোগ করা হলে ৩০ নম্বর নোডে কোন অসাম্য সৃষ্টি হয়?'
        },
        options: [
          {
            en: 'Left-Left (LL) case, resolved with a single Right rotation on node 30',
            bn: 'লেফট-লেফট (LL) কেস, যা নোড ৩০ এর ওপর একটি একক রাইট রোটেশনে সমাধান হয়'
          },
          {
            en: 'Right-Right (RR) case',
            bn: 'রাইট-রাইট (RR) কেস'
          },
          {
            en: 'Left-Right (LR) case',
            bn: 'লেফট-রাইট (LR) কেস'
          },
          {
            en: 'Right-Left (RL) case',
            bn: 'রাইট-লেফট (RL) কেস'
          }
        ],
        answer: 0,
        hint: {
          en: 'The path from 30 descends left to 20, then left to 10.',
          bn: '৩০ থেকে পথটি বামে ২০ এ যায়, তারপর আবার বামে ১০ এ যায়।'
        },
        explanation: {
          en: 'Both steps go left (30 -> left 20 -> left 10). This is the canonical Left-Left case, fixed by rotating 30 to the right.',
          bn: 'উভয় ধাপই বামে গেছে (৩০ -> বাম ২০ -> বাম ১০)। এটি আদর্শ লেফট-লেফট কেস, যা ৩০ কে ডানে ঘুরিয়ে সমাধান করা হয়।'
        }
      },
      {
        id: 'rc-q2',
        kind: 'mcq',
        topic: 'double-rotation-promoted-node',
        question: {
          en: 'During a Left-Right (LR) double rotation on parent node y with left child x and grandchild z, which node becomes the new root of the subtree?',
          bn: 'প্যারেন্ট y, বাম সন্তান x এবং নাতি z এর ওপর লেফট-রাইট (LR) ডাবল রোটেশন চালালে কোন নোডটি সাব-ট্রির নতুন রুট হিসেবে প্রতিষ্ঠিত হয়?'
        },
        options: [
          {
            en: 'Grandchild z, with x as its left child and y as its right child',
            bn: 'নাতি z, যার বাম সন্তান হয় x এবং ডান সন্তান হয় y'
          },
          {
            en: 'Child x',
            bn: 'সন্তান x'
          },
          {
            en: 'Parent y remains the root',
            bn: 'প্যারেন্ট y রুটে বহাল থাকে'
          },
          {
            en: 'A newly allocated empty node',
            bn: 'একটি নতুন বরাদ্দকৃত খালি নোড'
          }
        ],
        answer: 0,
        hint: {
          en: 'The middle value between x and y is z (x < z < y). In a balanced tree, the median should be at the root.',
          bn: 'x এবং y এর মধ্যবর্তী মান হলো z (x < z < y)। ব্যালান্সড ট্রিতে মধ্যমা মানটি রুটে যাওয়া উচিত।'
        },
        explanation: {
          en: 'Because x < z < y, hoisting z to the root places x on the left and y on the right, perfectly preserving the BST property.',
          bn: 'যেহেতু x < z < y, তাই z কে রুটে তুলে বামে x এবং ডানে y বসালে বিএসটি নিয়ম নিখুঁতভাবে রক্ষা পায়।'
        }
      },
      {
        id: 'rc-q3',
        kind: 'mcq',
        topic: 'avl-deletion-rotation-count',
        question: {
          en: 'Unlike insertion which requires at most 1 rotation operation, how many rotations can an element deletion trigger in an AVL tree in the worst case?',
          bn: 'সন্নিবেশে যেখানে সর্বোচ্চ ১টি রোটেশন লাগে, সেখানে এভিএল ট্রিতে একটি উপাদান মুছে ফেললে সবচেয়ে খারাপ ক্ষেত্রে সর্বোচ্চ কতটি রোটেশন ঘটতে পারে?'
        },
        options: [
          {
            en: 'Up to O(log n) rotations, potentially requiring one rotation at every level up to the root',
            bn: 'সর্বোচ্চ O(log n) টি রোটেশন, রুট পর্যন্ত প্রতিটি স্তরে একটি করে রোটেশনের প্রয়োজন হতে পারে'
          },
          {
            en: 'Strictly 0 rotations always',
            bn: 'সর্বদা কঠোরভাবে ০টি রোটেশন'
          },
          {
            en: 'Exactly 1 rotation only',
            bn: 'সর্বদা ঠিক ১টি রোটেশন'
          },
          {
            en: 'O(n^2) rotations',
            bn: 'O(n^2) টি রোটেশন'
          }
        ],
        answer: 0,
        hint: {
          en: 'Can shortening a subtree cause an imbalance that propagates to the parent above it?',
          bn: 'একটি সাব-ট্রি খাটো হয়ে গেলে কি তার ওপরের প্যারেন্টেও নতুন করে ভারসাম্যহীনতা ছড়াতে পারে?'
        },
        explanation: {
          en: 'Deleting a node shrinks a subtree height, which can unbalance its parent, cascading rebalancing rotations all the way up to the root in O(log n) time.',
          bn: 'নোড মুছলে সাব-ট্রি খাটো হয় যা প্যারেন্টকে ভারসাম্যহীন করতে পারে। ফলে রুট পর্যন্ত ধাপে ধাপে সর্বোচ্চ O(log n) রোটেশন লাগতে পারে।'
        }
      },
      {
        id: 'rc-q4',
        kind: 'mcq',
        topic: 'time-complexity-of-avl-insertion',
        question: {
          en: 'What is the total time complexity of an AVL tree insertion, including search, insertion, and rebalancing rotations?',
          bn: 'অনুসন্ধান, সন্নিবেশ এবং পুনর্ভারসাম্য রোটেশন সহ একটি এভিএল ট্রি সন্নিবেশের সামগ্রিক সময় জটিলতা কত?'
        },
        options: [
          {
            en: 'O(log n) logarithmic time',
            bn: 'O(log n) লগারিদমিক সময়'
          },
          {
            en: 'O(n) linear time',
            bn: 'O(n) রৈখিক সময়'
          },
          {
            en: 'O(1) constant time',
            bn: 'O(1) ধ্রুবক সময়'
          },
          {
            en: 'O(n log n) time',
            bn: 'O(n log n) সময়'
          }
        ],
        answer: 0,
        hint: {
          en: 'Traversing down takes O(log n), and at most one O(1) rotation is performed on the way back up.',
          bn: 'নিচে নামতে O(log n) লাগে এবং ফেরার পথে সর্বোচ্চ একটি O(1) রোটেশন সম্পন্ন হয়।'
        },
        explanation: {
          en: 'Finding the insertion position takes O(log n) steps. Unwinding the stack to update heights takes O(log n), and rotation takes O(1), maintaining O(log n) overall.',
          bn: 'সন্নিবেশের জায়গা খুঁজতে O(log n) এবং উচ্চতা আপডেট করতে O(log n) লাগে। রোটেশনে O(1) লাগায় মোট সময় O(log n) থাকে।'
        }
      }
    ]
  }
};
