import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

function patch(file, replacements) {
  const p = resolve('src/content/graphql/lessons', file);
  let s = readFileSync(p, 'utf8');
  for (const [from, to] of replacements) {
    if (!s.includes(from)) {
      console.error(`In ${file}, text not found:`, from);
    } else {
      s = s.replace(from, to);
    }
  }
  writeFileSync(p, s, 'utf8');
}

// 1. the-cache-gallery.ts
patch('the-cache-gallery.ts', [
  [
    "bn: 'merge ফাংশন না থাকলে পেজ ২ ক্যাশে এসে পেজ ১-এর ওপর বসে পুরোনো ডেটা মুছে দেয়।'",
    "bn: 'merge ফাংশন না থাকলে পেজ ২ ক্যাশে এসে পেজ ১ এর ওপর বসে পুরোনো ডেটা মুছে দেয়।'"
  ]
]);

// 2. the-evolution-ledger.ts
patch('the-evolution-ledger.ts', [
  [
    'In Stage 1, the new replacement attribute is introduced alongside the legacy entry. In Stage 2, the older property is marked with @deprecated(reason: "Use fullName instead").',
    'In the first stage, the new replacement attribute is introduced alongside the legacy entry. In the second stage, the older property is marked with @deprecated(reason: "Use fullName instead").'
  ],
  [
    'In Stage 3, telemetry tools track real-world query usage to measure which client versions still request the deprecated field. In Stage 4, engineering coordinates with client teams to migrate active operations to the modern field. Once the telemetry reports exactly zero requests, Stage 5 cleanly deletes the field from the schema file.',
    'In the third stage, telemetry tools track real-world query usage to measure which client versions still request the deprecated field. In the fourth stage, engineering coordinates with client teams to migrate active operations to the modern field. Once the telemetry reports zero requests, the fifth stage cleanly deletes the field from the schema file.'
  ],
  [
    "en: 'Never delete until traffic reaches 0 across all active versions.'",
    "en: 'Never delete until traffic reaches zero across all active versions.'"
  ]
]);

// 3. the-federation-court.ts
patch('the-federation-court.ts', [
  [
    "bn: 'সিমুলেশন: ২ টি পণ্য সংযুক্ত করে; পণ্য ১০১ এর দাম ১২০ ও রিভিউ ২ টি; দ্বিতীয় পণ্যের রিভিউ ১ টি'",
    "bn: 'সিমুলেশন: ২ টি পণ্য সংযুক্ত করে; পণ্য ১০১ এর দাম ১২০ ও রিভিউ ২ টি; পণ্য ১০২ এর রিভিউ ১ টি'"
  ],
  [
    "en: 'Rule 3: Ensure entity resolvers implement representation batching. Resolving representations in bulk within the _entities query prevents microservice-level N+1 network storms across downstream backends.'",
    "en: 'Rule 3: Ensure entity resolvers implement representation batching. Resolving representations in bulk within the _entities query prevents microservice-level excessive network round-trip storms across downstream backends.'"
  ],
  [
    "bn: 'অ্যাপোলো ফেডারেশন ২-এ কোনো অবজেক্ট ফিল্ডের ওপর @shareable নির্দেশক ঘোষণা করলে কী বোঝায়?'",
    "bn: 'অ্যাপোলো ফেডারেশন ২ এ কোনো অবজেক্ট ফিল্ডের ওপর @shareable নির্দেশক ঘোষণা করলে কী বোঝায়?'"
  ],
  [
    "bn: 'ফেডারেশন ২-এ একাধিক সাবগ্রাফের অধীনে থাকা ফিল্ডগুলোকে অবশ্যই শেয়ার্ড হিসেবে চিহ্নিত করতে হয়।'",
    "bn: 'ফেডারেশন ২ এ একাধিক সাবগ্রাফের অধীনে থাকা ফিল্ডগুলোকে অবশ্যই শেয়ার্ড হিসেবে চিহ্নিত করতে হয়।'"
  ],
  [
    "bn: 'ডিফল্টভাবে ফেডারেশন ২-এ একটি ফিল্ডের একজনই মালিক থাকে। @shareable নির্দেশক ব্যবহারের মাধ্যমে একাধিক সাবগ্রাফকে সেই ফিল্ড সমাধানের অনুমতি দেওয়া হয়।'",
    "bn: 'ডিফল্টভাবে ফেডারেশন ২ এ একটি ফিল্ডের একজনই মালিক থাকে। @shareable নির্দেশক ব্যবহারের মাধ্যমে একাধিক সাবগ্রাফকে সেই ফিল্ড সমাধানের অনুমতি দেওয়া হয়।'"
  ]
]);

// 4. the-grain-interview.ts
patch('the-grain-interview.ts', [
  [
    "bn: 'ঘনঘন ওয়াটারফল (একটি স্ক্রিনের জন্য ৩ থেকে ৭ টি ধারাবাহিক কল)'",
    "bn: 'ঘনঘন ওয়াটারফল (১টি স্ক্রিনের জন্য ৩ থেকে ৭ টি ধারাবাহিক কল)'"
  ],
  [
    "bn: 'HTTP 200-এর অধীনে ফিরে আসা { data, errors } কাঠামোর কথা বিবেচনা করুন।'",
    "bn: 'HTTP ২০০ এর অধীনে ফিরে আসা { data, errors } কাঠামোর কথা বিবেচনা করুন।'"
  ]
]);

// 5. the-mutation-chapel.ts
patch('the-mutation-chapel.ts', [
  [
    "en: 'Mobile connections frequently fail at the final hop: the server completes a payment charge and writes to the database, but the cellular tower drops before the HTTP 200 response reaches the phone. If the user clicks Submit Order again or the mobile client automatically retries, the server naively charges the credit card a second time.'",
    "en: 'Mobile connections frequently fail at the final hop: the server completes a payment charge and writes to the database, but the cellular tower drops before the HTTP success response reaches the phone. If the user clicks Submit Order again or the mobile client automatically retries, the server naively charges the credit card a second time.'"
  ]
]);

// 6. the-resolver-foundry.ts
patch('the-resolver-foundry.ts', [
  [
    "en: 'The engine randomly cancels 50 percent of all sibling resolvers to save CPU time'",
    "en: 'The engine randomly cancels half of all sibling resolvers to save CPU time'"
  ]
]);

// 7. the-trust-budget.ts
patch('the-trust-budget.ts', [
  [
    "bn: 'এর গভীরতা মাত্র ৩ হলেও এটি সার্ভারকে একবারে ১০,০০০ নেস্টেড কমেন্ট অবজেক্ট প্রসেস ও সিরিয়ালাইজ করতে বাধ্য করে।'",
    "bn: 'এর গভীরতা মাত্র ৩ হলেও এটি সার্ভারকে একবারে ১০০০০ নেস্টেড কমেন্ট অবজেক্ট প্রসেস ও সিরিয়ালাইজ করতে বাধ্য করে।'"
  ],
  [
    "bn: 'first: ৫০-এর মতো পেজিনেশন আর্গুমেন্ট গ্রহণকারী লিস্ট ফিল্ডের ক্ষেত্রে কোয়েরি জটিলতা বিশ্লেষণ কীভাবে হিসাব করে?'",
    "bn: 'first: ৫০ এর মতো পেজিনেশন আর্গুমেন্ট গ্রহণকারী লিস্ট ফিল্ডের ক্ষেত্রে কোয়েরি জটিলতা বিশ্লেষণ কীভাবে হিসাব করে?'"
  ]
]);

console.log('Applied all GraphQL digit patches');
