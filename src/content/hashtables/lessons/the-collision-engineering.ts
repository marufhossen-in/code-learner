import type { Lesson } from '../../../lib/types';

export const theCollisionEngineeringLesson: Lesson = {
  slug: 'the-collision-engineering',
  tech: 'hash-tables',
  title: {
    en: 'Collision Engineering: Quadratic Probing, Double Hashing, and Secondary Clustering',
    bn: 'সংঘর্ষ প্রকৌশল: কোয়াড্রেটিক প্রোবিং, ডাবল হ্যাশিং এবং সেকেন্ডারি ক্লাস্টারিং'
  },
  summary: {
    en: 'A deep systems analysis of advanced open addressing techniques designed to conquer clustering. While linear probing maximizes L1 cache line prefetching, it suffers from primary clustering, where contiguous filled slots merge into monolithic barriers. We explore Quadratic Probing, which accelerates step distance quadratically to leap over clusters. We analyze its coverage guarantees: visiting at least (M + 1) / 2 slots in prime tables and achieving a 100 percent cycle in power-of-two tables using triangular offsets. We then dissect Secondary Clustering, where keys sharing an initial hash trace identical jump trajectories. Finally, we implement Double Hashing, which uses a secondary hash function to produce key-specific probe strides, completely eliminating both primary and secondary clustering provided the stride is coprime to table capacity.',
    bn: 'ক্লাস্টারিং সমস্যা সমাধানে উন্নত ওপেন অ্যাড্রেসিং কৌশলের একটি গভীর সিস্টেম ইঞ্জিনিয়ারিং বিশ্লেষণ। লিনিয়ার প্রোবিং এল১ ক্যাশ লাইনের সর্বোচ্চ সুবিধা দিলেও এটি প্রাইমারি ক্লাস্টারিংয়ের শিকার হয়, যেখানে সংলগ্ন পূর্ণ স্লটগুলো মিলে বিশাল বাধার সৃষ্টি করে। আমরা কোয়াড্রেটিক প্রোবিং পরীক্ষা করেছি, যা ক্লাস্টার টপকে যেতে প্রতিটি পদক্ষেপে দ্বিঘাত হারে দূরত্ব বাড়ায়। এর গাণিতিক নিরাপত্তা বিশ্লেষণ করা হয়েছে: মৌলিক টেবিলে কমপক্ষে (M + ১) / ২ টি স্লট পরিদর্শন নিশ্চিত করা এবং দুইয়ের ঘাত টেবিলে ট্রায়াঙ্গুলার অফসেট দিয়ে ১০০ শতাংশ চক্র অর্জন করা। এরপর সেকেন্ডারি ক্লাস্টারিং বিশ্লেষণ করা হয়েছে, যেখানে একই মূল হ্যাশ বিশিষ্ট চাবিগুলো হুবহু একই পথ অনুসরণ করে। সবশেষে ডাবল হ্যাশিং বাস্তবায়ন করা হয়েছে, যা দ্বিতীয় একটি হ্যাশ ফাংশন দিয়ে প্রতি চাবির জন্য আলাদা পদক্ষেপের দূরত্ব তৈরি করে প্রাইমারি ও সেকেন্ডারি উভয় ক্লাস্টারিং পুরোপুরি দূর করে, শর্ত থাকে যে পদক্ষেপের মানটি টেবিলের আকারের সাথে সহমৌলিক বা কোপ্রাইম হতে হয়।'
  },
  minutes: 29,
  blocks: [
    {
      type: 'heading',
      id: 'what',
      text: {
        en: 'Beyond Linear Probing: The Necessity of Collision Engineering',
        bn: 'লিনিয়ার প্রোবিংয়ের ঊর্ধ্বে: সংঘর্ষ প্রকৌশলের প্রয়োজনীয়তা'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In this lesson, we analyze advanced open addressing collision strategies that eliminate primary and secondary clustering. Linear probing exhibits ideal spatial locality, but its fixed step size creates snowballing clusters. When the load factor exceeds 0.70, probe distances explode quadratically. To maintain constant-time lookups without relying on linked chains, systems engineer the probe sequence itself. By varying step sizes either quadratically or via a second independent hash function, we disperse colliding entries evenly across the table array.',
        bn: 'এই পাঠে আমরা উন্নত ওপেন অ্যাড্রেসিং কৌশলগুলো বিশ্লেষণ করব যা প্রাইমারি ও সেকেন্ডারি ক্লাস্টারিং দূর করে। লিনিয়ার প্রোবিং চমৎকার মেমরি লোকালিটি দিলেও এর নির্দিষ্ট একক পদক্ষেপ ক্লাস্টার তৈরির সুযোগ দেয়। যখন লোড ফ্যাক্টর ০.৭০ ছাড়িয়ে যায়, তখন অনুসন্ধানের দূরত্ব দ্রুত বৃদ্ধি পায়। লিঙ্কড লিস্টের সাহায্য না নিয়ে ধ্রুব O(1) গতি বজায় রাখতে প্রোব সিকোয়েন্সের নকশা পরিবর্তন করা হয়। পদক্ষেপের দৈর্ঘ্য দ্বিঘাত হারে অথবা দ্বিতীয় একটি স্বতন্ত্র হ্যাশ ফাংশন দিয়ে নির্ধারণ করে টেবিল জুড়ে উপাদানগুলোকে সুষমভাবে ছড়িয়ে দেওয়া হয়।'
      }
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'quadratic probing',
          def: {
            en: 'An open addressing probe scheme where step distance increases quadratically with probe count, following the formula index = (h0(key) + c1 * i + c2 * i^2) mod M.',
            bn: 'একটি ওপেন অ্যাড্রেসিং পদ্ধতি যেখানে প্রোব সংখ্যার সাথে সাথে পদক্ষেপের দূরত্ব দ্বিঘাত হারে বৃদ্ধি পায়, যা index = (h0(key) + c1 * i + c2 * i^2) mod M সূত্র অনুসরণ করে।'
          }
        },
        {
          term: 'secondary clustering',
          def: {
            en: 'A clustering phenomenon in quadratic probing where all keys that share the exact same initial hash h0(k) follow the identical probe trajectory throughout the table.',
            bn: 'কোয়াড্রেটিক প্রোবিংয়ে তৈরি হওয়া একটি গুচ্ছ সমস্যা যেখানে একই প্রাথমিক হ্যাশ h0(k) বিশিষ্ট সব চাবি টেবিল জুড়ে হুবহু একই প্রোব পথ অনুসরণ করে।'
          }
        },
        {
          term: 'double hashing',
          def: {
            en: 'An open addressing scheme that calculates probe stride using a second independent hash function: index = (h1(key) + i * h2(key)) mod M, eliminating both primary and secondary clustering.',
            bn: 'একটি ওপেন অ্যাড্রেসিং কৌশল যা দ্বিতীয় একটি স্বাধীন হ্যাশ ফাংশন দিয়ে প্রতি চাবির জন্য নিজস্ব পদক্ষেপ দূরত্ব তৈরি করে: index = (h1(key) + i * h2(key)) mod M, যা প্রাইমারি ও সেকেন্ডারি উভয় ক্লাস্টারিং দূর করে।'
          }
        },
        {
          term: 'coprime',
          def: {
            en: 'Two integers are coprime (relatively prime) if their greatest common divisor gcd(a, b) equals 1, ensuring a double hashing stride visits all table slots before repeating.',
            bn: 'দুটি পূর্ণসংখ্যার গরিষ্ঠ সাধারণ গুণনীয়ক gcd(a, b) সমান ১ হলে তাদের সহমৌলিক বা কোপ্রাইম বলা হয়, যা নিশ্চিত করে ডাবল হ্যাশিংয়ের পদক্ষেপ টেবিলের পুনরাবৃত্তি না করে প্রতিটি স্লট পরিদর্শন করবে।'
          }
        }
      ]
    },
    {
      type: 'heading',
      id: 'quadratic',
      text: {
        en: 'Quadratic Probing: Mechanics, Cycle Guarantees, and Secondary Clustering',
        bn: 'কোয়াড্রেটিক প্রোবিং: কার্যপদ্ধতি, সাইকেল নিশ্চয়তা এবং সেকেন্ডারি ক্লাস্টারিং'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Quadratic probing breaks primary clustering by making probe offsets grow quadratically: +1, +4, +9, +16, and so forth. If a key encounters a collision at slot h0, it does not step into adjacent slot h0 + 1. Instead, it makes progressively wider leaps across the array. Keys colliding at adjacent slots disperse along completely different jump paths, preventing contiguous clusters from merging.',
        bn: 'কোয়াড্রেটিক প্রোবিং পদক্ষেপে দ্বিঘাত ব্যবধান ব্যবহার করে প্রাইমারি ক্লাস্টারিং ভেঙে দেয়: +১, +৪, +৯, +১৬ ইত্যাদি। কোনো চাবি h0 স্লটে সংঘর্ষের সম্মুখীন হলে এটি পাশের h0 + ১ স্লটে বসে না। বরং অ্যারে জুড়ে ক্রমশ বড় লাফ দিয়ে দূরে চলে যায়। ফলে পাশাপাশি স্লটে সংঘর্ষ হওয়া চাবিগুলো সম্পূর্ণ ভিন্ন পথে ছড়িয়ে পড়ে এবং বিশাল ক্লাস্টার তৈরি হতে বাধা দেয়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'However, quadratic probing introduces two mathematical challenges. First is the Table Coverage Problem: does the quadratic sequence visit all slots in the table? If table size M is prime, quadratic residues guarantee the sequence visits at least (M + 1) / 2 unique slots for probe steps up to M / 2. Therefore, if load factor alpha <= 0.50, an empty slot is mathematically guaranteed. Alternatively, for power-of-two table capacities M = 2^k, using triangular number offsets (i * (i + 1)) / 2 mod M visits 100 percent of all M slots without getting trapped in premature cycles.',
        bn: 'তবে কোয়াড্রেটিক প্রোবিংয়ে দুটি গাণিতিক চ্যালেঞ্জ দেখা দেয়। প্রথমটি হলো টেবিল কাভারেজ সমস্যা: দ্বিঘাত ক্রমটি কি টেবিলের প্রতিটি স্লট পরিদর্শন করতে পারে? টেবিলের আকার M মৌলিক সংখ্যা হলে কোয়াড্রেটিক রেসিডিউ উপপাদ্য অনুযায়ী M / ২ ধাপের মধ্যে কমপক্ষে (M + ১) / ২ টি অনন্য স্লট পরিদর্শন নিশ্চিত হয়। তাই লোড ফ্যাক্টর alpha <= ০.৫০ থাকলে খালি স্লট খুঁজে পাওয়া গাণিতিকভাবে নিশ্চিত। আবার দুইয়ের ঘাত বিশিষ্ট টেবিল M = ২^k এর ক্ষেত্রে ট্রায়াঙ্গুলার সংখ্যা অফসেট (i * (i + ১)) / ২ mod M ব্যবহার করলে অকালে আটকে না গিয়ে সম্পূর্ণ ১০০ শতাংশ স্লট পরিদর্শন করা সম্ভব।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'The second limitation is Secondary Clustering. Although keys with different initial hashes follow diverging paths, any two keys that produce the exact same initial hash h0(k1) = h0(k2) trace identical quadratic trajectories. If ten keys hash to slot 7, every one of them inspects slot 7, then slot 8, then slot 11, then slot 0. To break this lockstep behavior, the step size itself must depend on the key.',
        bn: 'দ্বিতীয় সীমাবদ্ধতা হলো সেকেন্ডারি ক্লাস্টারিং। যদিও ভিন্ন প্রাথমিক হ্যাশের চাবিগুলো আলাদা পথে যায়, কিন্তু যে দুটি চাবির প্রাথমিক হ্যাশ একই হয় (h0(k1) = h0(k2)), তারা টেবিল জুড়ে হুবহু একই পথ অনুসরণ করে। ধরা যাক দশটি চাবির হ্যাশ হলো স্লট ৭, তবে তাদের প্রত্যেকেই প্রথমে ৭, তারপর ৮, তারপর ১১, এরপর ০ নম্বর স্লট পরীক্ষা করবে। এই একঘেয়ে পথ ভাঙতে পদক্ষেপের আকারটিকেও চাবির নিজস্ব বৈশিষ্ট্যের ওপর নির্ভর করতে হয়।'
      }
    },
    {
      type: 'heading',
      id: 'double',
      text: {
        en: 'Double Hashing: Key-Dependent Strides and Coprimality Physics',
        bn: 'ডাবল হ্যাশিং: চাবি-নির্ভর পদক্ষেপ এবং সহমৌলিকতার নিয়ম'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Double hashing completely eliminates both primary and secondary clustering by utilizing two independent hash functions. The first function h1(k) determines the starting slot index. The second function h2(k) determines the probe stride (step size). The probe formula is index = (h1(key) + i * h2(key)) mod M. If two keys collide at the starting slot because h1(k1) = h1(k2), their step sizes h2(k1) and h2(k2) will almost certainly differ. The first key might advance by stride 3 while the second advances by stride 7, completely decoupling their probe sequences from step 1.',
        bn: 'ডাবল হ্যাশিং দুটি স্বাধীন হ্যাশ ফাংশন ব্যবহার করে প্রাইমারি এবং সেকেন্ডারি উভয় ক্লাস্টারিং সম্পূর্ণরূপে দূর করে। প্রথম ফাংশন h1(k) শুরুর স্লট নির্ধারণ করে। দ্বিতীয় ফাংশন h2(k) পদক্ষেপের দূরত্ব বা স্ট্রাইড ঠিক করে। এর সূত্র হলো index = (h1(key) + i * h2(key)) mod M। দুটি চাবির প্রাথমিক হ্যাশ মিলে গেলেও (h1(k1) = h1(k2)) তাদের পদক্ষেপের মান h2(k1) এবং h2(k2) প্রায় নিশ্চিতভাবেই আলাদা হবে। ফলে প্রথম চাবিটি হয়তো ৩ ঘর করে এগোবে এবং দ্বিতীয়টি ৭ ঘর করে এগোবে, যার মাধ্যমে প্রথম পদক্ষেপেই তাদের পথ আলাদা হয়ে যায়।'
      }
    },
    {
      type: 'para',
      text: {
        en: 'To ensure double hashing can reach every slot in the table, the stride h2(k) must be coprime to table size M, meaning gcd(h2(k), M) = 1. If gcd(stride, M) = d > 1, the probe sequence will cycle through only M / d slots, ignoring the rest of the table and causing infinite insertion loops. In prime-sized tables, any non-zero stride 1 <= h2(k) < M is coprime. A standard formula is h2(k) = 1 + (h(k) mod (M - 1)). In power-of-two tables where M = 2^k, setting h2(k) to any odd integer guarantees gcd(odd, 2^k) = 1, ensuring a full permutation cycle across all M slots.',
        bn: 'ডাবল হ্যাশিং যেন টেবিলের প্রতিটি স্লটে পৌঁছাতে পারে তা নিশ্চিত করতে পদক্ষেপের মান h2(k) অবশ্যই টেবিলের আকার M এর সাথে সহমৌলিক বা কোপ্রাইম হতে হবে, অর্থাৎ gcd(h2(k), M) = ১। যদি gcd(stride, M) = d > ১ হয়, তবে অনুসন্ধানটি মাত্র M / d সংখ্যক স্লটের মধ্যে চক্কর কাটবে এবং বাকি স্লটগুলো দেখতেই পাবে না, যার ফলে অসীম লুপ তৈরি হবে। মৌলিক আকারের টেবিলে যেকোনো অশূন্য মান ১ <= h2(k) < M স্বয়ংক্রিয়ভাবে কোপ্রাইম হয়। এর আদর্শ সূত্র হলো h2(k) = ১ + (h(k) mod (M - ১))। আর দুইয়ের ঘাত বিশিষ্ট টেবিলে যেখানে M = ২^k, সেখানে h2(k) এর মান বিজোড় সংখ্যা রাখলেই নিশ্চিত হয় gcd(বিজোড়, ২^k) = ১, যা সমস্ত M স্লট পরিদর্শন নিশ্চিত করে।'
      }
    },
    {
      type: 'heading',
      id: 'code',
      text: {
        en: 'Empirical Verification: Linear vs Quadratic vs Double Hashing Probe Trajectories',
        bn: 'বাস্তব যাচাই: লিনিয়ার, কোয়াড্রেটিক ও ডাবল হ্যাশিংয়ের প্রোব পথের তুলনা'
      }
    },
    {
      type: 'code',
      lang: 'ts',
      code: `// Concrete verification of Linear, Quadratic, and Double Hashing probe trajectories
const M = 16;

// Keys gamma and lambda collide at initial slot 7
const initialSlot = 7;

// 1. Linear Probing: step = 1
const linearPath = [0, 1, 2, 3].map(i => (initialSlot + i) % M);
console.log('Linear Probing (gamma and lambda):');
console.log(linearPath.join(' -> '));
// Output: 7 -> 8 -> 9 -> 10 (Both keys share exact same contiguous run)

// 2. Quadratic Probing: step = i^2
const quadraticPath = [0, 1, 2, 3].map(i => (initialSlot + i * i) % M);
console.log('\\nQuadratic Probing (gamma and lambda):');
console.log(quadraticPath.join(' -> '));
// Output: 7 -> 8 -> 11 -> 0 (Primary clustering broken, but Secondary Clustering locks both keys)

// 3. Double Hashing: independent strides (gamma stride = 7, lambda stride = 3)
const strideGamma = 7; // odd, coprime to 16
const strideLambda = 3; // odd, coprime to 16

const doubleGamma = [0, 1, 2, 3].map(i => (initialSlot + i * strideGamma) % M);
const doubleLambda = [0, 1, 2, 3].map(i => (initialSlot + i * strideLambda) % M);

console.log('\\nDouble Hashing:');
console.log('gamma (stride 7):', doubleGamma.join(' -> '));
// Output: gamma (stride 7): 7 -> 14 -> 5 -> 12
console.log('lambda (stride 3):', doubleLambda.join(' -> '));
// Output: lambda (stride 3): 7 -> 10 -> 13 -> 0
// Secondary clustering destroyed: paths immediately diverge at step 1!`,
      caption: {
        en: 'Concrete probe trajectories for two colliding keys across Linear Probing, Quadratic Probing, and Double Hashing in a 16-slot table.',
        bn: '১৬ স্লটের টেবিলে সংঘর্ষিত দুটি চাবির জন্য লিনিয়ার, কোয়াড্রেটিক এবং ডাবল হ্যাশিংয়ের বাস্তব প্রোব পথের তুলনা।'
      }
    },
    {
      type: 'heading',
      id: 'table',
    },
    {
      type: 'visual',
      id: 'ht'
    },
    {
      type: 'heading',
      id: 'matrix',
      text: {
        en: 'System Architecture Matrix: Collision Strategies Compared',
        bn: 'সিস্টেম আর্কিটেকচার ম্যাট্রিক্স: সংঘর্ষ সমাধান কৌশলের তুলনা'
      }
    },
    {
      type: 'table',
      head: [
        { en: 'Probing Strategy', bn: 'প্রোবিং কৌশল' },
        { en: 'Formula (Step i)', bn: 'সূত্র (ধাপ i)' },
        { en: 'Cache Locality', bn: 'ক্যাশ লোকালিটি' },
        { en: 'Primary Clustering', bn: 'প্রাইমারি ক্লাস্টারিং' },
        { en: 'Secondary Clustering', bn: 'সেকেন্ডারি ক্লাস্টারিং' },
        { en: 'Cycle Guarantee Condition', bn: 'সাইকেল নিশ্চয়তার শর্ত' }
      ],
      rows: [
        [
          { en: 'Linear Probing', bn: 'লিনিয়ার প্রোবিং' },
          { en: '(h0 + i) mod M', bn: '(h0 + i) mod M' },
          { en: 'Optimal (contiguous 64-byte lines)', bn: 'সেরা (সংলগ্ন ৬৪-বাইট লাইন)' },
          { en: 'Severe (contiguous block growth)', bn: 'মারাত্মক (সংলগ্ন ব্লকের বৃদ্ধি)' },
          { en: 'Severe', bn: 'মারাত্মক' },
          { en: 'Always visits all M slots', bn: 'সর্বদা সকল M স্লট পরিদর্শন করে' }
        ],
        [
          { en: 'Quadratic Probing', bn: 'কোয়াড্রেটিক প্রোবিং' },
          { en: '(h0 + c1*i + c2*i^2) mod M', bn: '(h0 + c1*i + c2*i^2) mod M' },
          { en: 'Moderate (jumps widen with i)', bn: 'মাঝারি (ধাপের সাথে লাফ বড় হয়)' },
          { en: 'Eliminated (leaps over runs)', bn: 'দূরীকৃত (গুচ্ছের ওপর দিয়ে লাফায়)' },
          { en: 'Present (identical h0 shares path)', bn: 'বিদ্যমান (একই h0 একই পথ ধরে)' },
          { en: 'Prime M with alpha <= 0.50, or triangular offsets on 2^k', bn: 'মৌলিক M এ alpha <= ০.৫০, অথবা ২^k এ ট্রায়াঙ্গুলার অফসেট' }
        ],
        [
          { en: 'Double Hashing', bn: 'ডাবল হ্যাশিং' },
          { en: '(h1 + i * h2) mod M', bn: '(h1 + i * h2) mod M' },
          { en: 'Poor (arbitrary cache line hops)', bn: 'দুর্বল (মেমরির বিভিন্ন ক্যাশ লাইনে লাফ)' },
          { en: 'Eliminated', bn: 'দূরীকৃত' },
          { en: 'Eliminated (stride h2 diverges)', bn: 'দূরীকৃত (পদক্ষেপ h2 আলাদা হয়)' },
          { en: 'Stride must be coprime: gcd(h2, M) = 1', bn: 'পদক্ষেপ সহমৌলিক হতে হবে: gcd(h2, M) = ১' }
        ],
        [
          { en: 'Separate Chaining', bn: 'সেপারেট চেইনিং' },
          { en: 'Pointer traversal (next node)', bn: 'পয়েন্টার ট্রাভার্সাল (পরবর্তী নোড)' },
          { en: 'Poor (heap pointer chasing stalls)', bn: 'দুর্বল (হিপ পয়েন্টার চেজিংয়ে বিলম্ব)' },
          { en: 'None', bn: 'নেই' },
          { en: 'None', bn: 'নেই' },
          { en: 'Unbounded heap allocation', bn: 'সীমাহীন হিপ বরাদ্দ' }
        ]
      ]
    }
  ],
  exercises: [
    {
      id: 'ce-ex1',
      kind: 'mcq',
      topic: 'quadratic probe offsets',
      question: {
        en: 'In a 16-slot table using quadratic probing formula (start + i^2) mod 16 with start = 7, what are the first 4 visited slot indices?',
        bn: '১৬ স্লটের টেবিলে কোয়াড্রেটিক প্রোবিং সূত্র (start + i^২) mod ১৬ ব্যবহার করলে start = ৭ এর জন্য প্রথম ৪ টি পরিদর্শিত স্লট ইনডেক্স কোনগুলো হবে?'
      },
      options: [
        {
          en: '[7, 8, 11, 0] because offsets are 0, 1, 4, 9',
          bn: '[৭, ৮, ১১, ০] কারণ অফসেটগুলো হলো ০, ১, ৪, ৯'
        },
        {
          en: '[7, 8, 9, 10]',
          bn: '[৭, ৮, ৯, ১০]'
        },
        {
          en: '[7, 9, 11, 13]',
          bn: '[৭, ৯, ১১, ১৩]'
        },
        {
          en: '[7, 14, 5, 12]',
          bn: '[৭, ১৪, ৫, ১২]'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate (7 + 0) % 16, (7 + 1) % 16, (7 + 4) % 16, and (7 + 9) % 16.',
        bn: '(৭ + ০) % ১৬, (৭ + ১) % ১৬, (৭ + ৪) % ১৬ এবং (৭ + ৯) % ১৬ হিসাব করুন।'
      },
      explanation: {
        en: 'At probe i = 0, index is 7. Step 1 yields 8, step 2 jumps to 11, and step 3 computes (7 + 9) % 16 = 0. The resulting sequence is 7, 8, 11, 0.',
        bn: 'প্রোব i = ০ এ ইনডেক্স হয় ৭। ধাপ ১ এ ৮, ধাপ ২ এ লাফিয়ে ১১ এবং ধাপ ৩ এ (৭ + ৯) % ১৬ = ০ পাওয়া যায়। ফলে অনুক্রমটি দাঁড়ায় ৭, ৮, ১১, ০।'
      }
    },
    {
      id: 'ce-ex2',
      kind: 'mcq',
      topic: 'coprimality in double hashing',
      question: {
        en: 'Why does a double hashing stride of 4 fail in a hash table of size 16?',
        bn: '১৬ আকারের হ্যাশ টেবিলে ডাবল হ্যাশিংয়ের পদক্ষেপ ৪ হলে তা কেন ব্যর্থ হয়?'
      },
      options: [
        {
          en: 'gcd(4, 16) = 4 > 1, so the probe sequence can only visit 16 / 4 = 4 unique slots, ignoring 12 empty slots',
          bn: 'gcd(৪, ১৬) = ৪ > ১, ফলে অনুসন্ধানটি মাত্র ১৬ / ৪ = ৪ টি অনন্য স্লট পরিদর্শন করতে পারে এবং বাকি ১২ টি খালি স্লট দেখতেই পায় না'
        },
        {
          en: '4 is a prime number that causes floating-point overflow',
          bn: '৪ একটি মৌলিক সংখ্যা যা ফ্লোটিং-পয়েন্ট ওভারফ্লো তৈরি করে'
        },
        {
          en: 'Step sizes must always be powers of two',
          bn: 'পদক্ষেপের মান সর্বদা দুইয়ের ঘাত হতে হয়'
        },
        {
          en: 'Tables of size 16 only support linear probing',
          bn: '১৬ আকারের টেবিল কেবল লিনিয়ার প্রোবিং সমর্থন করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Calculate greatest common divisor of stride 4 and capacity 16.',
        bn: 'পদক্ষেপ ৪ এবং ধারণক্ষমতা ১৬ এর গরিষ্ঠ সাধারণ গুণনীয়ক (গসাগু) হিসাব করুন।'
      },
      explanation: {
        en: 'When stride and capacity share a factor of 4, the sequence loops indefinitely through slots 0, 4, 8, 12 without ever reaching the remaining 12 slots, risking infinite loops.',
        bn: 'পদক্ষেপ ও ধারণক্ষমতার মাঝে ৪ সাধারণ গুণনীয়ক থাকায় ক্রমটি কেবল ০, ৪, ৮, ১২ স্লটের মধ্যে ঘুরপাক খায় এবং বাকি ১২টি স্লটে পৌঁছাতে পারে না, ফলে অসীম লুপের ঝুঁকি তৈরি হয়।'
      }
    },
    {
      id: 'ce-ex3',
      kind: 'mcq',
      topic: 'secondary clustering',
      question: {
        en: 'What is the defining symptom of secondary clustering in quadratic probing?',
        bn: 'কোয়াড্রেটিক প্রোবিংয়ে সেকেন্ডারি ক্লাস্টারিংয়ের প্রধান লক্ষণ কোনটি?'
      },
      options: [
        {
          en: 'All distinct keys that hash to the same initial index follow the exact same jump trajectory throughout the table',
          bn: 'একই প্রাথমিক ইনডেক্সে পড়া সব ভিন্ন ভিন্ন চাবি টেবিল জুড়ে হুবহু একই লাফানোর পথ অনুসরণ করে'
        },
        {
          en: 'Contiguous blocks of adjacent slots merge into single monolithic clusters',
          bn: 'পাশাপাশি থাকা স্লটগুলো মিলে একক বিশাল ক্লাস্টার তৈরি করে'
        },
        {
          en: 'The table memory is wiped whenever a collision occurs',
          bn: 'সংঘর্ষ ঘটলেই টেবিল মেমরি সম্পূর্ণ মুছে যায়'
        },
        {
          en: 'Lookup speed degrades to O(N^3)',
          bn: 'অনুসন্ধানের গতি O(N^৩) এ নেমে যায়'
        }
      ],
      answer: 0,
      hint: {
        en: 'Secondary clustering locks colliding keys into identical probe paths because stride does not depend on the key.',
        bn: 'সেকেন্ডারি ক্লাস্টারিং সংঘর্ষ হওয়া চাবিগুলোকে একই পথে আটকে রাখে কারণ পদক্ষেপ চাবির ওপর নির্ভর করে না।'
      },
      explanation: {
        en: 'Unlike primary clustering where neighboring clusters merge, secondary clustering means identical initial hashes trace identical jump sequences. Double hashing breaks this by using a key-specific second hash.',
        bn: 'প্রাইমারি ক্লাস্টারিংয়ের মতো আশেপাশের গুচ্ছ না মিললেও সেকেন্ডারি ক্লাস্টারিংয়ে একই প্রাথমিক হ্যাশের চাবিগুলো একই পথে চলে। ডাবল হ্যাশিং দ্বিতীয় হ্যাশ ফাংশন দিয়ে প্রতি চাবির জন্য আলাদা পদক্ষেপ তৈরি করে এটি ভেঙে দেয়।'
      }
    },
    {
      id: 'ce-ex4',
      kind: 'mcq',
      topic: 'triangular permutation cycles',
      question: {
        en: 'Why are triangular number offsets (i * (i + 1)) / 2 mod M favored for power-of-two table capacities?',
        bn: 'দুইয়ের ঘাত টেবিল ধারণক্ষমতার জন্য ট্রায়াঙ্গুলার অফসেট (i * (i + ১)) / ২ mod M কেন বেশি সুবিধাজনক?'
      },
      options: [
        {
          en: 'They mathematically guarantee a complete permutation cycle, visiting 100 percent of slots in power-of-two tables without premature loops',
          bn: 'এগুলো গাণিতিকভাবে সম্পূর্ণ পারমিউটেশন চক্র নিশ্চিত করে, ফলে দুইয়ের ঘাত টেবিলে অকালে না আটকে ১০০ শতাংশ স্লট পরিদর্শন করা যায়'
        },
        {
          en: 'They convert the hash table into a balanced binary search tree',
          bn: 'এগুলো হ্যাশ টেবিলটিকে একটি ভারসাম্যপূর্ণ বাইনারি সার্চ ট্রিতে রূপান্তর করে'
        },
        {
          en: 'They run on graphics GPUs without needing a CPU',
          bn: 'এগুলো সিপিইউ ছাড়াই জিপিইউতে চলতে পারে'
        },
        {
          en: 'They eliminate the need for key comparisons during lookups',
          bn: 'এগুলো অনুসন্ধানের সময় চাবি তুলনার প্রয়োজনীয়তা দূর করে'
        }
      ],
      answer: 0,
      hint: {
        en: 'Remember our 100 percent coverage simulation across sizes 4, 8, 16, 32, and 64.',
        bn: '৪, ৮, ১৬, ৩২ এবং ৬৪ আকারের টেবিলে আমাদের ১০০ শতাংশ কাভারেজ সিমুলেশনের কথা মনে করুন।'
      },
      explanation: {
        en: 'Triangular numbers generate a complete permutation modulo any power of two. The sequence visits every index from 0 to M - 1 exactly once in its first M steps, providing 100 percent table coverage.',
        bn: 'ট্রায়াঙ্গুলার সংখ্যাগুলো যেকোনো দুইয়ের ঘাতের মডিউলোতে একটি সম্পূর্ণ পারমিউটেশন তৈরি করে। এই ধারা প্রথম M ধাপে ০ থেকে M - ১ পর্যন্ত প্রতিটি ইনডেক্স ঠিক একবার স্পর্শ করে ১০০ শতাংশ কাভারেজ দেয়।'
      }
    }
  ],
  quiz: {
    id: 'collision-engineering-quiz',
    title: {
      en: 'Collision Engineering Mastery Quiz',
      bn: 'সংঘর্ষ প্রকৌশল আয়ত্তকরণ কুইজ'
    },
    questions: [
      {
        id: 'ce-q1',
        kind: 'mcq',
        topic: 'clustering',
        question: {
          en: 'What fundamental limitation of quadratic probing led to the creation of double hashing?',
          bn: 'কোয়াড্রেটিক প্রোবিংয়ের কোন মৌলিক সীমাবদ্ধতার কারণে ডাবল হ্যাশিং তৈরি করা হয়েছিল?'
        },
        options: [
          {
            en: 'Quadratic probing is unable to store strings as keys',
            bn: 'কোয়াড্রেটিক প্রোবিং স্ট্রিং চাবি হিসেবে সংরক্ষণ করতে পারে না'
          },
          {
            en: 'Secondary clustering: all keys that share the same initial hash follow the exact same probe sequence',
            bn: 'সেকেন্ডারি ক্লাস্টারিং: একই প্রাথমিক হ্যাশ বিশিষ্ট সমস্ত চাবি হুবহু একই প্রোব পথ অনুসরণ করে'
          },
          {
            en: 'Quadratic probing requires O(N^2) memory allocations for every inserted item',
            bn: 'কোয়াড্রেটিক প্রোবিংয়ে প্রতিটি সন্নিবেশিত উপাদানের জন্য O(N^২) মেমরি বরাদ্দ লাগে'
          },
          {
            en: 'It cannot be implemented on 64-bit architectures',
            bn: 'এটি ৬৪-বিট আর্কিটেকচারে বাস্তবায়ন করা সম্ভব নয়'
          }
        ],
        answer: 1,
        hint: {
          en: 'Think about what happens when two distinct keys happen to yield the same initial hash index h0.',
          bn: 'দুটি ভিন্ন চাবির প্রাথমিক হ্যাশ h0 একই হলে কী ঘটে তা চিন্তা করুন।'
        },
        explanation: {
          en: 'In quadratic probing, the jump trajectory is determined solely by the initial hash index h0. If two distinct keys produce the same h0, they follow identical jump sequences across the entire table, causing secondary clustering. Double hashing solves this by assigning each key an independent stride h2(k).',
          bn: 'কোয়াড্রেটিক প্রোবিংয়ে লাফানোর পথ শুধুমাত্র প্রাথমিক হ্যাশ h0 দ্বারা নির্ধারিত হয়। ফলে ভিন্ন দুটি চাবির h0 একই হলে তারা টেবিল জুড়ে হুবহু একই পথ অনুসরণ করে, যা সেকেন্ডারি ক্লাস্টারিং ঘটায়। ডাবল হ্যাশিং প্রতিটি চাবিকে একটি স্বতন্ত্র পদক্ষেপ h2(k) প্রদান করে এই সমস্যা দূর করে।'
        }
      },
      {
        id: 'ce-q2',
        kind: 'mcq',
        topic: 'coprimality',
        question: {
          en: 'Why is it mandatory for the double hashing stride h2(k) to be coprime to table size M?',
          bn: 'ডাবল হ্যাশিংয়ে পদক্ষেপ h2(k) এর মান টেবিলের আকার M এর সাথে সহমৌলিক বা কোপ্রাইম হওয়া কেন বাধ্যতামূলক?'
        },
        options: [
          {
            en: 'If gcd(h2(k), M) > 1, the probe sequence cycles through a strict subset of slots, risking infinite loops while empty slots remain',
            bn: 'যদি gcd(h2(k), M) > ১ হয়, তবে প্রোবটি কয়েকটি নির্দিষ্ট স্লটের মধ্যে ঘুরপাক খায়, ফলে ফাঁকা স্লট থাকা সত্ত্বেও অসীম লুপ তৈরি হয়'
          },
          {
            en: 'Non-coprime numbers cannot be loaded into CPU registers',
            bn: 'সহমৌলিক নয় এমন সংখ্যা সিপিইউ রেজিস্টারে লোড করা যায় না'
          },
          {
            en: 'The compiler refuses to compile modulo arithmetic unless operands are coprime',
            bn: 'অপারেন্ডগুলো সহমৌলিক না হলে কম্পাইলার মডিউলো গাণিতিক কাজ করতে অস্বীকার করে'
          },
          {
            en: 'It is only an aesthetic convention with no algorithmic impact',
            bn: 'এটি কেবল একটি বাহ্যিক নিয়ম যার অ্যালগরিদমে কোনো বাস্তব প্রভাব নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'Consider what happens when stepping by 4 in a table of size 16: which slots can you actually visit?',
          bn: '১৬ আকারের একটি টেবিলে ৪ ঘর করে এগোলে কোন কোন স্লট পরিদর্শন করা সম্ভব তা ভাবুন।'
        },
        explanation: {
          en: 'If stride and capacity share a common divisor d > 1, the probe sequence visits only M / d distinct slots. For instance, stride 4 in table size 16 visits only 4 slots (0, 4, 8, 12). If those 4 are filled, insertion enters an infinite loop despite 12 slots being empty. Coprimality guarantees visiting all M slots.',
          bn: 'যদি পদক্ষেপ ও ধারণক্ষমতার সাধারণ গুণনীয়ক d > ১ হয়, তবে প্রোবটি মাত্র M / d টি স্লট স্পর্শ করতে পারে। যেমন ১৬ আকারের টেবিলে ৪ পদক্ষেপ দিলে মাত্র ৪টি স্লট (০, ৪, ৮, ১২) দেখা যায়। সেগুলো পূর্ণ থাকলে ১২টি স্লট খালি থাকা সত্ত্বেও অসীম লুপ তৈরি হয়। সহমৌলিকতা নিশ্চিত করে টেবিলের সকল M স্লট পরিদর্শন।'
        }
      },
      {
        id: 'ce-q3',
        kind: 'mcq',
        topic: 'power-of-two',
        question: {
          en: 'In a double hashing table with power-of-two capacity M = 2^k, how can we guarantee coprimality for any stride h2(k)?',
          bn: 'দুইয়ের ঘাত M = ২^k আকারের টেবিলে ডাবল হ্যাশিং ব্যবহারের সময় যেকোনো পদক্ষেপ h2(k) এর সহমৌলিকতা কীভাবে নিশ্চিত করা যায়?'
        },
        options: [
          {
            en: 'By ensuring h2(k) is always an odd number, because gcd(odd, 2^k) is guaranteed to equal 1',
            bn: 'h2(k) এর মান সর্বদা বিজোড় সংখ্যা রাখা নিশ্চিত করে, কারণ gcd(বিজোড়, ২^k) সর্বদা ১ এর সমান হয়'
          },
          {
            en: 'By dividing h2(k) by 2 on every probe increment',
            bn: 'প্রতিটি প্রোব বৃদ্ধিতে h2(k) কে ২ দিয়ে ভাগ করে'
          },
          {
            en: 'By multiplying the key by the table capacity before inserting',
            bn: 'সন্নিবেশের আগে চাবিটিকে টেবিল ধারণক্ষমতা দিয়ে গুণ করে'
          },
          {
            en: 'Power-of-two tables cannot support double hashing under any circumstances',
            bn: 'কোনো অবস্থাতেই দুইয়ের ঘাত টেবিলে ডাবল হ্যাশিং চালানো সম্ভব নয়'
          }
        ],
        answer: 0,
        hint: {
          en: 'What are the only prime factors of 2^k? Does any odd number share those factors?',
          bn: '২^k এর মৌলিক উৎপাদক কী কী? কোনো বিজোড় সংখ্যা কি সেই উৎপাদক ধারণ করে?'
        },
        explanation: {
          en: 'The prime factorization of 2^k contains only the prime factor 2. Any odd integer has no factor of 2. Therefore, gcd(odd, 2^k) = 1 is always true. Enforcing an odd stride (such as h2(k) = (2 * hash + 1)) guarantees a full cycle across all slots.',
          bn: '২^k এর উৎপাদকে কেবলমাত্র ২ মৌলিক সংখ্যাটি থাকে। যেকোনো বিজোড় সংখ্যার কোনো ২ এর উৎপাদক নেই। তাই gcd(বিজোড়, ২^k) = ১ সর্বদা সত্য। পদক্ষেপ বিজোড় রাখা নিশ্চিত করলেই সম্পূর্ণ টেবিল পরিদর্শন গ্যারান্টি হয়।'
        }
      },
      {
        id: 'ce-q4',
        kind: 'mcq',
        topic: 'coverage',
        question: {
          en: 'Under quadratic probing with prime table size M, what is the maximum load factor alpha that mathematically guarantees finding an empty slot without cycling?',
          bn: 'মৌলিক আকারের টেবিলে কোয়াড্রেটিক প্রোবিং ব্যবহারের সময় সর্বোচ্চ কত লোড ফ্যাক্টর alpha থাকলে সাইকেলে না আটকে নিশ্চিত খালি স্লট পাওয়া যায়?'
        },
        options: [
          {
            en: 'alpha <= 0.50 (table at most 50 percent full)',
            bn: 'alpha <= ০.৫০ (টেবিল সর্বোচ্চ ৫০ শতাংশ পূর্ণ)'
          },
          {
            en: 'alpha <= 0.99',
            bn: 'alpha <= ০.৯৯'
          },
          {
            en: 'alpha = 1.0 (table completely full)',
            bn: 'alpha = ১.০ (টেবিল সম্পূর্ণ পূর্ণ)'
          },
          {
            en: 'alpha <= 0.05',
            bn: 'alpha <= ০.০৫'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recall the quadratic residue theorem: how many unique values does i^2 mod M generate for prime M?',
          bn: 'কোয়াড্রেটিক রেসিডিউ উপপাদ্যটি মনে করুন: মৌলিক M এর জন্য i^২ mod M কতগুলো অনন্য মান তৈরি করে?'
        },
        explanation: {
          en: 'By the theory of quadratic residues, for prime M > 2, the probe sequence (start + i^2) mod M produces exactly (M + 1) / 2 distinct slot positions for i from 0 to floor(M / 2). If the table is at most half full (alpha <= 0.50), at least one of these visited slots must be empty.',
          bn: 'কোয়াড্রেটিক রেসিডিউ উপপাদ্য অনুসারে মৌলিক M এর জন্য (start + i^২) mod M সূত্রটি i = ০ থেকে floor(M / ২) পর্যন্ত ঠিক (M + ১) / ২ টি আলাদা স্লট দেয়। টেবিল যদি সর্বোচ্চ অর্ধেক পূর্ণ থাকে (alpha <= ০.৫০), তবে এই পরিদর্শিত স্লটগুলোর অন্তত একটি নিশ্চিতভাবেই খালি থাকবে।'
        }
      },
      {
        id: 'ce-q5',
        kind: 'mcq',
        topic: 'hardware',
        question: {
          en: 'What hardware trade-off does double hashing make in exchange for completely eliminating clustering?',
          bn: 'ক্লাস্টারিং সম্পূর্ণ দূর করার বিনিময়ে ডাবল হ্যাশিংকে কোন হার্ডওয়্যার ঘাটতি মেনে নিতে হয়?'
        },
        options: [
          {
            en: 'It sacrifices CPU cache locality because successive probes jump across arbitrary memory cache lines',
            bn: 'এটি সিপিইউ ক্যাশ লোকালিটি হারায় কারণ প্রতি পদক্ষেপে মেমরির সম্পূর্ণ ভিন্ন ক্যাশ লাইনে লাফ দিতে হয়'
          },
          {
            en: 'It requires cooling the CPU with liquid nitrogen to handle hash calculations',
            bn: 'হ্যাশ গণনার চাপ সামলাতে সিপিইউকে তরল নাইট্রোজেন দিয়ে ঠান্ডা রাখতে হয়'
          },
          {
            en: 'It doubles the physical RAM consumption of the operating system kernel',
            bn: 'এটি অপারেটিং সিস্টেম কার্নেলের ফিজিক্যাল র‍্যামের ব্যবহার দ্বিগুণ করে দেয়'
          },
          {
            en: 'It forces disk writes on every single search operation',
            bn: 'প্রতিটি অনুসন্ধানে এটি ডিস্কে লিখতে বাধ্য করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Think about how modern CPU prefetchers exploit contiguous array traversal in linear probing.',
          bn: 'লিনিয়ার প্রোবিংয়ে সংলগ্ন মেমরি পড়ার সময় সিপিইউ প্রিফেচার কীভাবে সুবিধা পায় তা চিন্তা করুন।'
        },
        explanation: {
          en: 'Linear probing reads adjacent memory slots, allowing a single 64-byte cache line fetch to supply multiple probe checks. Double hashing jumps across the table by arbitrary stride offsets, frequently missing L1 and L2 caches and incurring 50-100 cycle main memory stalls on each collision.',
          bn: 'লিনিয়ার প্রোবিং সংলগ্ন মেমরি স্লট পড়ে, যার ফলে একটিমাত্র ৬৪-বাইট ক্যাশ লাইন ফেচ একাধিক প্রোব অনুসন্ধানের ডেটা সরবরাহ করে। কিন্তু ডাবল হ্যাশিং বড় পদক্ষেপে টেবিলের বিভিন্ন প্রান্তে লাফায়, যার ফলে L1 ও L2 ক্যাশ মিস ঘটে এবং প্রতি সংঘর্ষে ৫০-১০০ ক্লক চক্র মেমরি বিলম্ব ঘটে।'
        }
      },
      {
        id: 'ce-q6',
        kind: 'mcq',
        topic: 'triangular',
        question: {
          en: 'Why do modern power-of-two hash tables use triangular number offsets (i * (i + 1)) / 2 instead of simple i^2 for quadratic probing?',
          bn: 'আধুনিক দুইয়ের ঘাত হ্যাশ টেবিলে কোয়াড্রেটিক প্রোবিংয়ের সময় সাধারণ i^২ এর বদলে ট্রায়াঙ্গুলার অফসেট (i * (i + ১)) / ২ কেন ব্যবহার করা হয়?'
        },
        options: [
          {
            en: 'Triangular number offsets mathematically guarantee a full permutation cycle, visiting 100 percent of slots in power-of-two tables',
            bn: 'ট্রায়াঙ্গুলার অফসেট গাণিতিকভাবে একটি সম্পূর্ণ পারমিউটেশন চক্র তৈরি করে, যা দুইয়ের ঘাত টেবিলে ১০০ শতাংশ স্লট পরিদর্শন নিশ্চিত করে'
          },
          {
            en: 'Triangular numbers execute twice as fast as integer multiplication on GPUs',
            bn: 'জিপিইউতে ট্রায়াঙ্গুলার সংখ্যা পূর্ণসংখ্যার গুণের চেয়ে দ্বিগুণ দ্রুত কাজ করে'
          },
          {
            en: 'They eliminate the need to calculate hash codes for incoming keys',
            bn: 'এগুলো নতুন চাবির হ্যাশ কোড গণনার প্রয়োজনীয়তা দূর করে দেয়'
          },
          {
            en: 'They automatically convert the table into an immutable persistent data structure',
            bn: 'এগুলো টেবিলটিকে স্বয়ংক্রিয়ভাবে একটি অপরিবর্তনশীল পারসিস্টেন্ট ডেটা কাঠামোতে রূপান্তর করে'
          }
        ],
        answer: 0,
        hint: {
          en: 'Recall our triangular number simulation: how many slots were visited in tables of size 4, 8, 16, 32, and 64?',
          bn: 'আমাদের ট্রায়াঙ্গুলার সিমুলেশন স্মরণ করুন: ৪, ৮, ১৬, ৩২ এবং ৬৪ আকারের টেবিলে কতটি স্লট পরিদর্শিত হয়েছিল?'
        },
        explanation: {
          en: 'For any power-of-two table capacity M = 2^k, the triangular number progression (i * (i + 1)) / 2 mod M visits every integer in 0 to M - 1 exactly once in its first M steps. This guarantees 100 percent table coverage without getting trapped in partial cycles.',
          bn: 'যেকোনো দুইয়ের ঘাত বিশিষ্ট ধারণক্ষমতা M = ২^k এর জন্য ট্রায়াঙ্গুলার সংখ্যা ধারা (i * (i + ১)) / ২ mod M প্রথম M টি পদক্ষেপে ০ থেকে M - ১ পর্যন্ত প্রতিটি পূর্ণসংখ্যা ঠিক একবার পরিদর্শন করে। এটি আংশিক চক্রে আটকে না গিয়ে সম্পূর্ণ ১০০ শতাংশ কাভারেজ নিশ্চিত করে।'
        }
      }
    ]
  },
  next: {
    slug: 'the-lift-relay',
    title: {
      en: 'The Lift-Relay: Dynamic Resizing and Incremental Rehashing',
      bn: 'উত্তোলন-রিলে: ডায়নামিক আকার এবং ক্রমান্বয়ে স্থানান্তর'
    }
  }
};
