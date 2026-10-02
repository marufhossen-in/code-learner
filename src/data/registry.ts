import type { Category, Difficulty, Technology } from '../lib/types';

/** Master technology directory (Section 2). Data-driven — no menu is hardcoded. */

export const CATEGORIES: Category[] = [
  { id: 'web', icon: '🌐', en: 'Web Development', bn: 'ওয়েব ডেভেলপমেন্ট' },
  { id: 'backend', icon: '⚙️', en: 'Backend', bn: 'ব্যাকএন্ড' },
  { id: 'languages', icon: '⌨️', en: 'Programming Languages', bn: 'প্রোগ্রামিং ভাষা' },
  { id: 'database', icon: '🗄️', en: 'Database', bn: 'ডেটাবেস' },
  { id: 'dsa', icon: '🧮', en: 'Data Structures & Algorithms', bn: 'ডেটা স্ট্রাকচার ও অ্যালগরিদম' },
  { id: 'devops', icon: '🚀', en: 'DevOps', bn: 'ডেভঅপস' },
  { id: 'cloud', icon: '☁️', en: 'Cloud', bn: 'ক্লাউড' },
  { id: 'aiml', icon: '🤖', en: 'AI / ML', bn: 'এআই / এমএল' },
  { id: 'security', icon: '🔐', en: 'Cybersecurity', bn: 'সাইবারসিকিউরিটি' },
  { id: 'systems', icon: '🧠', en: 'Systems', bn: 'সিস্টেমস' },
];

export function categoryById(id: string): Category | undefined {
  return CATEGORIES.find((c) => c.id === id);
}

const AVAILABLE = new Set(['html', 'css', 'javascript', 'git', 'react', 'sql', 'networking', 'security-fundamentals', 'docker', 'kubernetes', 'typescript', 'python', 'sorting', 'hash-tables', 'linked-lists', 'stacks', 'queues', 'trees', 'heaps', 'graphs', 'graph-algorithms', 'searching', 'system-design', 'caching', 'distributed-systems', 'http', 'rest', 'graphql', 'node', 'nextjs', 'vue', 'angular', 'tanstack-query', 'tailwind', 'web-apis', 'dom', 'canvas', 'svg', 'accessibility', 'jquery', 'bootstrap', 'sass', 'web-components', 'responsive-design', 'nodejs', 'express', 'nestjs', 'django', 'flask', 'fastapi', 'php', 'laravel', 'java', 'spring', 'csharp', 'dotnet', 'go', 'rust', 'ruby', 'c', 'cpp', 'lang-csharp', 'lang-java', 'lang-python', 'lang-javascript', 'lang-typescript', 'lang-go', 'lang-rust', 'kotlin', 'swift', 'lang-php', 'lang-ruby', 'r', 'dart', 'scala', 'mysql', 'postgresql', 'mongodb', 'redis', 'sqlite', 'db-fundamentals', 'db-design', 'normalization', 'transactions', 'indexes', 'query-optimization', 'arrays', 'recursion', 'dynamic-programming', 'greedy', 'github', 'cicd', 'linux', 'nginx', 'reverse-proxy', 'load-balancing', 'monitoring', 'logging', 'iac', 'aws', 'azure', 'gcp', 'cloud-fundamentals', 'object-storage', 'compute', 'cloud-networking', 'serverless', 'containers', 'ai-fundamentals', 'machine-learning', 'deep-learning', 'generative-ai', 'llms', 'prompt-engineering', 'ai-apis', 'embeddings', 'vector-databases', 'rag', 'web-security', 'authentication', 'authorization', 'encryption', 'hashing', 'owasp', 'network-security', 'secure-coding', 'operating-systems', 'computer-architecture', 'memory', 'cpu', 'processes', 'threads', 'dns', 'tcpip', 'linux-sys']);

type Row = [slug: string, name: string, icon: string, diff: Difficulty, en: string, bn: string, prereq?: string[]];

function t(cat: string) {
  return (r: Row): Technology => ({
    slug: r[0],
    name: r[1],
    icon: r[2],
    cat,
    diff: r[3],
    status: AVAILABLE.has(r[0]) ? 'available' : 'planned',
    en: r[4],
    bn: r[5],
    prereq: r[6],
  });
}

const web: Row[] = [
  ['html', 'HTML', '📄', 'beginner', 'The skeleton of every web page.', 'প্রতিটি ওয়েবপেজের কাঠামো।'],
  ['css', 'CSS', '🎨', 'beginner', 'Styling, layout and visual design.', 'স্টাইল, লেআউট ও ভিজ্যুয়াল ডিজাইন।', ['html']],
  ['javascript', 'JavaScript', '⚡', 'beginner', 'The language of the browser — and beyond.', 'ব্রাউজারের ভাষা — এবং তারও অনেক বেশি।', ['html', 'css']],
  ['typescript', 'TypeScript', '🔷', 'intermediate', 'JavaScript with static types.', 'স্ট্যাটিক টাইপসহ জাভাস্ক্রিপ্ট।', ['javascript']],
  ['react', 'React', '⚛️', 'intermediate', 'Component-based UI library.', 'কম্পোনেন্ট-ভিত্তিক UI লাইব্রেরি।', ['javascript']],
  ['nextjs', 'Next.js', '▲', 'intermediate', 'Full-stack React framework.', 'ফুল-স্ট্যাক React ফ্রেমওয়ার্ক।', ['react']],
  ['vue', 'Vue', '💚', 'intermediate', 'Progressive UI framework.', 'প্রোগ্রেসিভ UI ফ্রেমওয়ার্ক।', ['javascript']],
  ['angular', 'Angular', '🅰️', 'advanced', 'Opinionated full platform (TypeScript).', 'মতামতবাদী পূর্ণ প্ল্যাটফর্ম (TypeScript)।', ['typescript']],
  ['tanstack-query', 'TanStack Query', '🏭', 'intermediate', 'Async state and data-fetching libraries.', 'অ্যাসিংক-স্টেট ও ডেটা-ফেচিং লাইব্রেরি।', ['javascript', 'react']],
  ['jquery', 'jQuery', '💲', 'beginner', 'Classic DOM utility library.', 'ক্লাসিক DOM ইউটিলিটি লাইব্রেরি।', ['javascript']],
  ['bootstrap', 'Bootstrap', '🅱️', 'beginner', 'Component CSS framework.', 'কম্পোনেন্ট-ভিত্তিক CSS ফ্রেমওয়ার্ক।', ['css']],
  ['tailwind', 'Tailwind CSS', '🌬️', 'beginner', 'Utility-first CSS framework.', 'ইউটিলিটি-ফার্স্ট CSS ফ্রেমওয়ার্ক।', ['css']],
  ['sass', 'Sass', '💅', 'intermediate', 'CSS with variables, nesting, mixins.', 'ভেরিয়েবল, নেস্টিং, মিক্সিনসহ CSS।', ['css']],
  ['web-apis', 'Web APIs', '🔌', 'intermediate', 'Fetch, storage, observers and more.', 'Fetch, স্টোরেজ, অবজারভার — আরও অনেক কিছু।', ['javascript']],
  ['dom', 'DOM', '🌳', 'beginner', 'The live tree behind every page.', 'প্রতিটি পেজের পেছনের জীবন্ত ট্রি।', ['html', 'javascript']],
  ['canvas', 'Canvas', '🖌️', 'intermediate', 'Pixel-level 2D drawing in the browser.', 'ব্রাউজারে পিক্সেল-লেভেল 2D আঁকা।', ['javascript']],
  ['svg', 'SVG', '📐', 'beginner', 'Scalable vector graphics on the web.', 'ওয়েবে স্কেলেবল ভেক্টর গ্রাফিক্স।', ['html']],
  ['web-components', 'Web Components', '🧩', 'advanced', 'Reusable native custom elements.', 'রিইউজেবল নেটিভ কাস্টম এলিমেন্ট।', ['javascript', 'dom']],
  ['accessibility', 'Accessibility', '♿', 'intermediate', 'Build for every user.', 'সব ব্যবহারকারীর জন্য তৈরি করুন।', ['html']],
  ['responsive-design', 'Responsive Web Design', '📱', 'beginner', 'One site, every screen size.', 'একই সাইট — সব স্ক্রিন সাইজে।', ['css']],
];

const backend: Row[] = [
  ['nodejs', 'Node.js', '🟩', 'intermediate', 'JavaScript on the server.', 'সার্ভারে জাভাস্ক্রিপ্ট।', ['javascript']],
  ['express', 'Express', '🚂', 'intermediate', 'Minimal Node web framework.', 'মিনিমাল Node ওয়েব ফ্রেমওয়ার্ক।', ['nodejs']],
  ['nestjs', 'NestJS', '🐈', 'advanced', 'Structured TypeScript backend framework.', 'স্ট্রাকচার্ড TypeScript ব্যাকএন্ড ফ্রেমওয়ার্ক।', ['typescript', 'nodejs']],
  ['python', 'Python', '🐍', 'beginner', 'Readable, general-purpose language.', 'পড়তে সহজ, সর্বজনীন ভাষা।'],
  ['django', 'Django', '🎸', 'intermediate', 'Batteries-included Python framework.', 'সবকিছু-সহ Python ফ্রেমওয়ার্ক।', ['python']],
  ['flask', 'Flask', '🍶', 'intermediate', 'Lightweight Python framework.', 'হালকা Python ফ্রেমওয়ার্ক।', ['python']],
  ['fastapi', 'FastAPI', '⚡', 'intermediate', 'Fast, typed Python APIs.', 'দ্রুত, টাইপড Python API।', ['python']],
  ['php', 'PHP', '🐘', 'beginner', 'The classic web backend language.', 'ক্লাসিক ওয়েব ব্যাকএন্ড ভাষা।'],
  ['laravel', 'Laravel', '🧡', 'intermediate', 'Elegant PHP framework.', 'এলিগ্যান্ট PHP ফ্রেমওয়ার্ক।', ['php']],
  ['java', 'Java', '☕', 'intermediate', 'Enterprise-grade JVM language.', 'এন্টারপ্রাইজ-গ্রেড JVM ভাষা।'],
  ['spring', 'Spring', '🌱', 'advanced', 'Java enterprise framework.', 'Java এন্টারপ্রাইজ ফ্রেমওয়ার্ক।', ['java']],
  ['csharp', 'C#', '🎵', 'intermediate', 'Modern language on .NET.', '.NET-এর আধুনিক ভাষা।'],
  ['dotnet', '.NET', '🟣', 'intermediate', 'Cross-platform Microsoft runtime.', 'ক্রস-প্ল্যাটফর্ম Microsoft রানটাইম।', ['csharp']],
  ['go', 'Go', '🐹', 'intermediate', 'Simple, fast, concurrent.', 'সহজ, দ্রুত, কনকারেন্ট।'],
  ['rust', 'Rust', '🦀', 'advanced', 'Memory-safe systems language.', 'মেমোরি-সেফ সিস্টেমস ভাষা।'],
  ['ruby', 'Ruby', '💎', 'beginner', 'Developer happiness first.', 'ডেভেলপারের আনন্দই আগে।'],
];

const languages: Row[] = [
  ['c', 'C', '🇨', 'intermediate', 'The mother of modern languages.', 'আধুনিক ভাষার জননী।'],
  ['cpp', 'C++', '➕', 'advanced', 'Performance with abstraction.', 'অ্যাবস্ট্রাকশনসহ পারফরম্যান্স।', ['c']],
  ['lang-csharp', 'C#', '🎵', 'intermediate', 'Modern object-oriented language.', 'আধুনিক অবজেক্ট-ওরিয়েন্টেড ভাষা।'],
  ['lang-java', 'Java', '☕', 'intermediate', 'Write once, run anywhere.', 'একবার লিখুন, সবখানে চালান।'],
  ['lang-python', 'Python', '🐍', 'beginner', 'The friendliest first language.', 'প্রথম ভাষা হিসেবে সবচেয়ে বন্ধুসুলভ।'],
  ['lang-javascript', 'JavaScript', '⚡', 'beginner', 'The web’s native language.', 'ওয়েবের নিজস্ব ভাষা।'],
  ['lang-typescript', 'TypeScript', '🔷', 'intermediate', 'Types for safer JavaScript.', 'নিরাপদ জাভাস্ক্রিপ্টের জন্য টাইপ।', ['lang-javascript']],
  ['lang-go', 'Go', '🐹', 'intermediate', 'Cloud-native simplicity.', 'ক্লাউড-নেটিভ সরলতা।'],
  ['lang-rust', 'Rust', '🦀', 'advanced', 'Safety without a garbage collector.', 'গার্বেজ কালেক্টর ছাড়াই নিরাপত্তা।'],
  ['kotlin', 'Kotlin', '🅺', 'intermediate', 'Modern Android and JVM language.', 'আধুনিক Android ও JVM ভাষা।'],
  ['swift', 'Swift', '🕊️', 'intermediate', 'Apple’s modern language.', 'Apple-এর আধুনিক ভাষা।'],
  ['lang-php', 'PHP', '🐘', 'beginner', 'Powers much of the web.', 'ওয়েবের বড় একটা অংশ চালায়।'],
  ['lang-ruby', 'Ruby', '💎', 'beginner', 'Elegant and expressive.', 'এলিগ্যান্ট ও এক্সপ্রেসিভ।'],
  ['r', 'R', '📊', 'intermediate', 'Statistics and data language.', 'পরিসংখ্যান ও ডেটার ভাষা।'],
  ['dart', 'Dart', '🎯', 'intermediate', 'The language behind Flutter.', 'Flutter-এর পেছনের ভাষা।'],
  ['scala', 'Scala', '🆂', 'advanced', 'Functional meets object-oriented.', 'ফাংশনাল ও অবজেক্ট-ওরিয়েন্টেডের মিলন।'],
];

const database: Row[] = [
  ['sql', 'SQL', '🧾', 'beginner', 'The language of relational data.', 'রিলেশনাল ডেটার ভাষা।'],
  ['mysql', 'MySQL', '🐬', 'beginner', 'Popular open-source database.', 'জনপ্রিয় ওপেন-সোর্স ডেটাবেস।', ['sql']],
  ['postgresql', 'PostgreSQL', '🐘', 'intermediate', 'Advanced relational database.', 'অ্যাডভান্সড রিলেশনাল ডেটাবেস।', ['sql']],
  ['mongodb', 'MongoDB', '🍃', 'beginner', 'Document-oriented NoSQL.', 'ডকুমেন্ট-ভিত্তিক NoSQL।'],
  ['redis', 'Redis', '🟥', 'intermediate', 'In-memory cache and store.', 'ইন-মেমোরি ক্যাশ ও স্টোর।'],
  ['sqlite', 'SQLite', '🪶', 'beginner', 'Serverless embedded database.', 'সার্ভারহীন এমবেডেড ডেটাবেস।'],
  ['db-fundamentals', 'Database Fundamentals', '📚', 'beginner', 'Tables, rows, keys, queries.', 'টেবিল, রো, কি, কোয়েরি।'],
  ['db-design', 'Database Design', '📐', 'intermediate', 'Modeling real systems in tables.', 'বাস্তব সিস্টেমকে টেবিলে মডেল করা।', ['db-fundamentals']],
  ['normalization', 'Normalization', '🏺', 'intermediate', 'Removing redundancy by design.', 'ডিজাইন দিয়েই রিডানডেন্সি দূর করা।', ['db-design']],
  ['transactions', 'Transactions', '🔁', 'intermediate', 'All-or-nothing operations.', 'সব-অথবা-কিছুই-না ধরনের অপারেশন।', ['db-fundamentals']],
  ['indexes', 'Indexes', '⚡', 'intermediate', 'Trading storage for speed.', 'গতির জন্য স্টোরেজ বিনিয়োগ।', ['sql']],
  ['query-optimization', 'Query Optimization', '🔍', 'advanced', 'Making slow queries fast.', 'ধীর কোয়েরিকে দ্রুত করা।', ['indexes']],
];

const dsa: Row[] = [
  ['arrays', 'Arrays', '📦', 'beginner', 'Contiguous, indexable storage.', 'পাশাপাশি, ইনডেক্সযোগ্য স্টোরেজ।'],
  ['linked-lists', 'Linked Lists', '🔗', 'beginner', 'Nodes connected by pointers.', 'পয়েন্টারে জড়ানো নোড।', ['arrays']],
  ['stacks', 'Stacks', '🥞', 'beginner', 'Last in, first out.', 'শেষে ঢুকে, আগে বের হয়।'],
  ['queues', 'Queues', '🚶', 'beginner', 'First in, first out.', 'আগে ঢুকে, আগে বের হয়।'],
  ['trees', 'Trees', '🌲', 'intermediate', 'Hierarchical data.', 'হায়ারার্কিক্যাল ডেটা।', ['linked-lists']],
  ['graphs', 'Graphs', '🕸️', 'advanced', 'Networks of connected nodes.', 'সংযুক্ত নোডের নেটওয়ার্ক।', ['trees']],
  ['hash-tables', 'Hash Tables', '#️⃣', 'intermediate', 'Constant-time lookups.', 'কনস্ট্যান্ট-টাইম লুকআপ।', ['arrays']],
  ['heaps', 'Heaps', '⛰️', 'intermediate', 'Priority via partial order.', 'আংশিক ক্রমে প্রায়োরিটি।', ['trees']],
  ['sorting', 'Sorting', '↕️', 'beginner', 'Ordering data efficiently.', 'দক্ষতার সাথে ডেটা সাজানো।', ['arrays']],
  ['searching', 'Searching', '🔎', 'beginner', 'Finding data efficiently.', 'দক্ষতার সাথে ডেটা খোঁজা।', ['arrays']],
  ['recursion', 'Recursion', '🔂', 'intermediate', 'Functions that call themselves.', 'নিজেকে ডাকা ফাংশন।'],
  ['dynamic-programming', 'Dynamic Programming', '🧩', 'advanced', 'Optimal substructure, memoized.', 'অপটিমাল সাবস্ট্রাকচার ও মেমোইজেশন।', ['recursion']],
  ['greedy', 'Greedy Algorithms', '🏃', 'advanced', 'Local best, global hope.', 'লোকাল সেরা, গ্লোবাল সম্ভাবনা।'],
  ['graph-algorithms', 'Graph Algorithms', '🧭', 'advanced', 'BFS, DFS, shortest paths.', 'BFS, DFS, শর্টেস্ট পাথ।', ['graphs']],
];

const devops: Row[] = [
  ['git', 'Git', '🌿', 'beginner', 'Version control for everything.', 'সবকিছুর ভার্সন কন্ট্রোল।'],
  ['github', 'GitHub', '🐙', 'beginner', 'Collaboration around Git.', 'Git-কেন্দ্রিক সহযোগিতা।', ['git']],
  ['docker', 'Docker', '🐳', 'intermediate', 'Package apps as containers.', 'অ্যাপকে কন্টেইনারে প্যাকেজ করা।'],
  ['kubernetes', 'Kubernetes', '☸️', 'advanced', 'Container orchestration at scale.', 'স্কেলে কন্টেইনার অর্কেস্ট্রেশন।', ['docker']],
  ['cicd', 'CI/CD', '🔁', 'intermediate', 'Automated build, test, deploy.', 'অটোমেটেড বিল্ড, টেস্ট, ডিপ্লয়।', ['git']],
  ['linux', 'Linux', '🐧', 'intermediate', 'The server operating system.', 'সার্ভার অপারেটিং সিস্টেম।'],
  ['nginx', 'Nginx', '🌐', 'intermediate', 'Web server and reverse proxy.', 'ওয়েব সার্ভার ও রিভার্স প্রক্সি।', ['linux']],
  ['reverse-proxy', 'Reverse Proxy', '🔀', 'intermediate', 'One door, many backends.', 'এক দরজা, অনেক ব্যাকএন্ড।', ['nginx']],
  ['system-design', 'System Design', '🏗️', 'advanced', 'Envelopes, scaling, no single point.', 'খাম-হিসাব, স্কেলিং, কোনো একক পয়েন্ট নয়।', ['networking']],
  ['caching', 'Caching', '🧊', 'beginner', 'Memoization, TTL and eviction law.', 'মেমোইজেশন, TTL ও এভিকশন-বিধান।'],
  ['distributed-systems', 'Distributed Systems', '🌐', 'intermediate', 'Quorums, partitions and the consensus choir.', 'কোরাম, পার্টিশন ও সম্মতি-সুরদল।'],
  ['load-balancing', 'Load Balancing', '⚖️', 'intermediate', 'Spreading traffic across servers.', 'ট্রাফিক সার্ভারগুলোতে ভাগ করা।', ['reverse-proxy']],
  ['monitoring', 'Monitoring', '📈', 'intermediate', 'Know when things break.', 'কিছু ভাঙলে সঙ্গে সঙ্গে জানুন।'],
  ['logging', 'Logging', '🧾', 'intermediate', 'The flight recorder of apps.', 'অ্যাপের ফ্লাইট রেকর্ডার।'],
  ['iac', 'Infrastructure as Code', '🏗️', 'advanced', 'Servers defined in files.', 'ফাইলে লেখা সার্ভার।'],
];

const cloud: Row[] = [
  ['aws', 'AWS', '🟠', 'intermediate', 'Amazon’s cloud platform.', 'Amazon-এর ক্লাউড প্ল্যাটফর্ম।'],
  ['azure', 'Azure', '🔵', 'intermediate', 'Microsoft’s cloud platform.', 'Microsoft-এর ক্লাউড প্ল্যাটফর্ম।'],
  ['gcp', 'Google Cloud', '🔴', 'intermediate', 'Google’s cloud platform.', 'Google-এর ক্লাউড প্ল্যাটফর্ম।'],
  ['cloud-fundamentals', 'Cloud Fundamentals', '☁️', 'beginner', 'What “the cloud” really is.', '“ক্লাউড” আসলে কী।'],
  ['object-storage', 'Object Storage', '🪣', 'beginner', 'Files as API objects.', 'API অবজেক্ট হিসেবে ফাইল।', ['cloud-fundamentals']],
  ['compute', 'Compute', '🖥️', 'beginner', 'Renting machines by the second.', 'সেকেন্ড ধরে মেশিন ভাড়া।', ['cloud-fundamentals']],
  ['cloud-networking', 'Networking', '🕸️', 'intermediate', 'VPCs, subnets, firewalls.', 'VPC, সাবনেট, ফায়ারওয়াল।', ['cloud-fundamentals']],
  ['serverless', 'Serverless', '✨', 'intermediate', 'Functions without servers.', 'সার্ভার ছাড়াই ফাংশন।', ['compute']],
  ['containers', 'Containers', '📦', 'intermediate', 'Isolated, portable workloads.', 'আইসোলেটেড, পোর্টেবল ওয়ার্কলোড।', ['cloud-fundamentals']],
];

const aiml: Row[] = [
  ['ai-fundamentals', 'AI Fundamentals', '🧠', 'beginner', 'What AI can and cannot do.', 'এআই কী পারে আর কী পারে না।'],
  ['machine-learning', 'Machine Learning', '📊', 'intermediate', 'Learning patterns from data.', 'ডেটা থেকে প্যাটার্ন শেখা।', ['ai-fundamentals', 'python']],
  ['deep-learning', 'Deep Learning', '🕳️', 'advanced', 'Neural networks, many layers deep.', 'নিউরাল নেটওয়ার্ক — অনেক লেয়ার গভীরে।', ['machine-learning']],
  ['generative-ai', 'Generative AI', '🎨', 'intermediate', 'Models that create.', 'যেসব মডেল নিজে তৈরি করে।', ['ai-fundamentals']],
  ['llms', 'LLMs', '💬', 'intermediate', 'Large language models.', 'বড় ভাষার মডেল।', ['generative-ai']],
  ['prompt-engineering', 'Prompt Engineering', '🪄', 'beginner', 'Getting the best from models.', 'মডেল থেকে সেরাটা বের করা।', ['llms']],
  ['ai-apis', 'AI APIs', '🔌', 'intermediate', 'Calling models from code.', 'কোড থেকে মডেল ডাকা।', ['llms']],
  ['embeddings', 'Embeddings', '🧮', 'intermediate', 'Meaning as vectors.', 'ভেক্টর হিসেবে অর্থ।', ['machine-learning']],
  ['vector-databases', 'Vector Databases', '📐', 'intermediate', 'Search by similarity.', 'সাদৃশ্য দিয়ে খোঁজা।', ['embeddings']],
  ['rag', 'RAG', '📚', 'advanced', 'Grounding models in your data.', 'নিজের ডেটায় মডেলকে ভিত্তি দেওয়া।', ['vector-databases', 'llms']],
];

const security: Row[] = [
  ['security-fundamentals', 'Security Fundamentals', '🛡️', 'beginner', 'CIA triad and threat thinking.', 'CIA ট্রায়াড ও থ্রেট চিহ্নিতকরণ।'],
  ['web-security', 'Web Security', '🌐', 'intermediate', 'Defending web applications.', 'ওয়েব অ্যাপ্লিকেশন রক্ষা করা।', ['security-fundamentals']],
  ['authentication', 'Authentication', '🪪', 'intermediate', 'Proving who you are.', 'আপনি কে — তার প্রমাণ।', ['web-security']],
  ['authorization', 'Authorization', '🔑', 'intermediate', 'Controlling what you may do.', 'আপনি কী করতে পারবেন — তার নিয়ন্ত্রণ।', ['authentication']],
  ['encryption', 'Encryption', '🔒', 'intermediate', 'Scrambling data by math.', 'গণিত দিয়ে ডেটা এলোমেলো করা।', ['security-fundamentals']],
  ['hashing', 'Hashing', '#️⃣', 'beginner', 'One-way fingerprints of data.', 'ডেটার একমুখী ফিঙ্গারপ্রিন্ট।', ['security-fundamentals']],
  ['owasp', 'OWASP', '🐝', 'intermediate', 'The top web vulnerabilities.', 'শীর্ষ ওয়েব দুর্বলতাগুলো।', ['web-security']],
  ['network-security', 'Network Security', '🕸️', 'advanced', 'Defending traffic and infra.', 'ট্রাফিক ও ইনফ্রার প্রতিরক্ষা।', ['security-fundamentals']],
  ['secure-coding', 'Secure Coding', '🧑‍💻', 'intermediate', 'Writing code that resists abuse.', 'অপব্যবহার-প্রতিরোধী কোড লেখা।', ['owasp']],
];

const systems: Row[] = [
  ['operating-systems', 'Operating Systems', '💻', 'intermediate', 'The manager of hardware.', 'হার্ডওয়্যারের ম্যানেজার।'],
  ['computer-architecture', 'Computer Architecture', '🏛️', 'intermediate', 'How machines actually compute.', 'মেশিন আসলে কীভাবে হিসাব করে।'],
  ['memory', 'Memory', '🧠', 'intermediate', 'RAM, stack, heap, caches.', 'RAM, স্ট্যাক, হিপ, ক্যাশ।'],
  ['cpu', 'CPU', '⚙️', 'intermediate', 'The machine that runs your code.', 'যে মেশিন আপনার কোড চালায়।'],
  ['processes', 'Processes', '📦', 'intermediate', 'Running programs, isolated.', 'আইসোলেটেড চলমান প্রোগ্রাম।', ['operating-systems']],
  ['threads', 'Threads', '🧵', 'intermediate', 'Concurrency inside a process.', 'প্রসেসের ভেতরে কনকারেন্সি।', ['processes']],
  ['networking', 'Networking', '🌐', 'beginner', 'How computers talk.', 'কম্পিউটার কীভাবে কথা বলে।'],
  ['http', 'HTTP', '📨', 'beginner', 'The protocol of the web.', 'ওয়েবের প্রোটোকল।', ['networking']],
  ['rest', 'REST', '🗂️', 'intermediate', 'API grammar: nouns, verbs, payloads priced.', 'API ব্যাকরণ: বিশেষ্য, ক্রিয়া, মূল্যায়িত পেলোড।', ['http']],
  ['graphql', 'GraphQL', '⬡', 'intermediate', 'Client names shape, gate prices trust, shelf costs memory.', 'ক্লায়েন্ট আকৃতি বলে, ফাটক বিশ্বাস মূল্যায়ে, তাক স্মৃতির খরচ দেয়।', ['http', 'rest']],
  ['node', 'Node.js & Express', '🧵', 'intermediate', 'One register never waits; vows on chain, byte, author, process.', 'এক রওকদারি কখনো অপেক্ষা করে না; চেইন, বাইট, লেখক, প্রক্রিয়ায় শপথ।', ['javascript', 'networking']],
  ['dns', 'DNS', '📇', 'beginner', 'Names to numbers.', 'নাম থেকে নাম্বার।', ['networking']],
  ['tcpip', 'TCP/IP', '🔗', 'intermediate', 'Reliable delivery of packets.', 'প্যাকেটের নির্ভরযোগ্য ডেলিভারি।', ['networking']],
  ['linux-sys', 'Linux', '🐧', 'intermediate', 'The systems hacker’s OS.', 'সিস্টেমস হ্যাকারের OS।'],
];

const ROWS: [string, Row[]][] = [
  ['web', web],
  ['backend', backend],
  ['languages', languages],
  ['database', database],
  ['dsa', dsa],
  ['devops', devops],
  ['cloud', cloud],
  ['aiml', aiml],
  ['security', security],
  ['systems', systems],
];

export const TECHS: Technology[] = ROWS.flatMap(([cat, rows]) => rows.map(t(cat)));

export function techBySlug(slug: string): Technology | undefined {
  return TECHS.find((t) => t.slug === slug);
}

export function techsByCategory(cat: string): Technology[] {
  return TECHS.filter((t) => t.cat === cat);
}

export function searchTechs(q: string): Technology[] {
  const s = q.trim().toLowerCase();
  if (!s) return [];
  return TECHS.filter(
    (t) =>
      t.name.toLowerCase().includes(s) ||
      t.slug.includes(s) ||
      t.en.toLowerCase().includes(s) ||
      t.bn.includes(s),
  );
}
