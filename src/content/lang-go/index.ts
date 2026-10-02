import type { Hub } from '../../lib/types';
import { PackagesAndTheImportLesson } from './lessons/packages-and-the-import';
import { SlicesAndTheAppendLesson } from './lessons/slices-and-the-append';
import { MapsAndTheRangeLesson } from './lessons/maps-and-the-range';
import { StructsAndTheEmbedLesson } from './lessons/structs-and-the-embed';
import { MethodsAndTheReceiverLesson } from './lessons/methods-and-the-receiver';
import { GoroutinesAndTheChannelLesson } from './lessons/goroutines-and-the-channel';
import { SelectsAndTheContextLesson } from './lessons/selects-and-the-context';
import { TheGopherReleaseLesson } from './lessons/the-gopher-release';

export const langGoHub: Hub = {
  slug: 'lang-go',
  name: 'Go',
  icon: '🐹',
  tagline: {
    en: 'Master Go from syntax fundamentals to extreme-concurrency mastery: packages, slices, structs, interfaces, goroutines, channels, and production releases.',
    bn: 'সিনট্যাক্সের মূল ভিত্তি থেকে চরম কনকারেন্সি দক্ষতা পর্যন্ত গো আয়ত্ত করুন: প্যাকেজ, স্লাইস, স্ট্রাক্ট, ইন্টারফেস, গোরুটিন, চ্যানেল ও প্রোডাকশন রিলিজ।',
  },
  intro: {
    en: 'Go (Golang) is an open-source, statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Engineered for cloud infrastructure, distributed microservices, and high-performance network services, Go combines the development velocity of dynamic languages with the raw execution speed and memory efficiency of C++. This comprehensive curriculum guides you from beginner package imports, dynamic slices, and hash maps to advanced struct embedding, implicit interface contracts, CSP-style channel concurrency, context cancellations, and single-binary production releases.',
    bn: 'গো (Golang) হলো গুগল কর্তৃক রবার্ট গ্রিসেমার, রব পাইক এবং কেন থম্পসনের ডিজাইনে তৈরি একটি ওপেন-সোর্স, স্ট্যাটিকালি টাইপড ও কম্পাইল্ড প্রোগ্রামিং ভাষা। ক্লাউড অবকাঠামো, ডিস্ট্রিবিউটেড মাইক্রোসার্ভিস এবং উচ্চ-গতির নেটওয়ার্ক সার্ভিসের জন্য নির্মিত গো ডায়নামিক ভাষার সহজ প্রোগ্রামিং গতির সাথে সি++ এর সমান দ্রুত এক্সিকিউশন ও মেমরি দক্ষতার সমন্বয় ঘটায়। এই পূর্ণাঙ্গ পাঠ্যক্রমটি আপনাকে প্রাথমিক প্যাকেজ ইমপোর্ট, ডায়নামিক স্লাইস এবং হ্যাশ ম্যাপ থেকে শুরু করে উন্নত স্ট্রাক্ট এম্বেডিং, অন্তর্নিহিত ইন্টারফেস চুক্তি, সিএসপি চ্যানেল কনকারেন্সি, কনটেক্সট ক্যান্সেলেশন এবং একক-বাইনারি প্রোডাকশন রিলিজ পর্যন্ত ধাপে ধাপে দক্ষ করে তুলবে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Core Syntax, Slices, and Maps', bn: 'ধাপ ১ — মূল সিনট্যাক্স, স্লাইস ও ম্যাপ' },
      items: [
        { en: 'Packages, imports, and main entrypoint: compilation model and module boundaries (Lesson 1)', bn: 'প্যাকেজ, ইমপোর্ট ও মেইন এন্ট্রি-পয়েন্ট: কম্পাইলেশন মডেল ও মডিউল সীমানা (পাঠ ১)' },
        { en: 'Slices and memory headers: length, capacity, backing arrays, and append reallocation (Lesson 2)', bn: 'স্লাইস ও মেমরি হেডার: দৈর্ঘ্য, ক্যাপাসিটি, ব্যাকিং অ্যারে এবং অ্যাপেন্ড রিলোকেশন (পাঠ ২)' },
        { en: 'Hash maps and iteration: make, key lookups, the comma-ok idiom, and range loops (Lesson 3)', bn: 'হ্যাশ ম্যাপ ও ইটারেশন: make, কি লুকআপ, comma-ok ইডিয়ম এবং range লুপ (পাঠ ৩)' },
      ],
    },
    {
      title: { en: 'Stage 2 — Data Modeling, Structs, and Interfaces', bn: 'ধাপ ২ — ডেটা মডেলিং, স্ট্রাক্ট ও ইন্টারফেস' },
      items: [
        { en: 'Structs and composition: custom data types, memory alignment, and struct embedding (Lesson 4)', bn: 'স্ট্রাক্ট ও কম্পোজিশন: কাস্টম ডেটা টাইপ, মেমরি অ্যালাইনমেন্ট এবং স্ট্রাক্ট এম্বেডিং (পাঠ ৪)' },
        { en: 'Methods, receivers, and implicit interfaces: value vs pointer receivers and duck typing (Lesson 5)', bn: 'মেথড, রিসিভার ও ইন্টারফেস: ভ্যালু বনাম পয়েন্টার রিসিভার এবং ডাক টাইপিং (পাঠ ৫)' },
      ],
    },
    {
      title: { en: 'Stage 3 — Concurrency, Context, and Production Release', bn: 'ধাপ ৩ — কনকারেন্সি, কনটেক্সট ও প্রোডাকশন রিলিজ' },
      items: [
        { en: 'Goroutines and channels: lightweight green threads and message-passing synchronization (Lesson 6)', bn: 'গোরুটিন ও চ্যানেল: হালকা গ্রিন থ্রেড এবং মেসেজ-পাসিং সিঙ্ক্রোনাইজেশন (পাঠ ৬)' },
        { en: 'Select multiplexing and context timeouts: graceful cancellation across microservices (Lesson 7)', bn: 'সিলেক্ট মাল্টিপ্লেক্সিং ও কনটেক্সট টাইমআউট: মাইক্রোসার্ভিসে নির্ভরযোগ্য ক্যান্সেলেশন (পাঠ ৭)' },
        { en: 'Production builds, cross-compilation, and testing: single static binaries with zero dependencies (Lesson 8)', bn: 'প্রোডাকশন বিল্ড, ক্রস-কম্পাইলেশন ও টেস্টিং: শূন্য ডিপেনডেন্সিসহ একক স্ট্যাটিক বাইনারি (পাঠ ৮)' },
      ],
    },
  ],
  lessons: [
    PackagesAndTheImportLesson,
    SlicesAndTheAppendLesson,
    MapsAndTheRangeLesson,
    StructsAndTheEmbedLesson,
    MethodsAndTheReceiverLesson,
    GoroutinesAndTheChannelLesson,
    SelectsAndTheContextLesson,
    TheGopherReleaseLesson,
  ],
  references: [],
  projects: [
    {
      title: { en: 'Project 1 — High-Throughput Concurrent Worker Pool', bn: 'প্রজেক্ট ১ — উচ্চ-গতির কনকারেন্ট ওয়ার্কার পুল' },
      brief: {
        en: 'Build a production-grade worker pool in Go that consumes jobs from a buffered channel, processes them concurrently across N worker goroutines, coordinates completion with sync.WaitGroup, and aggregates results safely with zero race conditions. Deliverable: a runnable Go program with benchmark tests measuring throughput.',
        bn: 'গো-তে একটি প্রোডাকশন-গ্রেড ওয়ার্কার পুল তৈরি করুন যা বাফার্ড চ্যানেল থেকে কাজ গ্রহণ করে, N সংখ্যক ওয়ার্কার গোরুটিনে সমান্তরালভাবে প্রসেস করে, sync.WaitGroup দিয়ে সমাপ্তি সমন্বয় করে এবং রেস কন্ডিশন ছাড়া ফলাফল সংগ্রহ করে। আউটপুট: বেঞ্চমার্ক টেস্টসহ একটি এক্সিকিউটেবল গো প্রোগ্রাম।',
      },
    },
    {
      title: { en: 'Project 2 — Production REST API Microservice with Context Timeouts', bn: 'প্রজেক্ট ২ — কনটেক্সট টাইমআউটসহ প্রোডাকশন রেস্ট এপিআই' },
      brief: {
        en: 'Develop an HTTP microservice using standard net/http, struct JSON marshalling, custom error middleware, context.WithTimeout for downstream database queries, and OS signal listening (SIGINT/SIGTERM) for graceful server shutdown. Deliverable: a compiled cross-platform binary with zero third-party dependencies.',
        bn: 'স্ট্যান্ডার্ড net/http, স্ট্রাক্ট জেসন মার্শাল, কাস্টম এরর মিডলওয়্যার, ডাটাবেস কুয়েরির জন্য context.WithTimeout এবং গ্রেসফুল শাটডাউনের জন্য ওএস সিগন্যাল লিসেনিং ব্যবহার করে একটি এইচটিটিপি মাইক্রোসার্ভিস তৈরি করুন। আউটপুট: কোনো বাড়তি ডিপেনডেন্সি ছাড়া ক্রস-প্ল্যাটফর্ম কম্পাইল্ড বাইনারি।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Share memory by communicating: prefer typed channels to pass data ownership between goroutines instead of locking shared memory with mutexes.',
      bn: 'যোগাযোগের মাধ্যমে মেমরি শেয়ার করুন: মিউটেক্স দিয়ে শেয়ার্ড মেমরি লক করার বদলে টাইপড চ্যানেল দিয়ে গোরুটিনগুলোর মধ্যে ডেটার মালিকানা বিনিময় করুন।',
    },
    {
      en: 'Choose pointer receivers when mutating struct state: use pointer receivers (*T) when methods modify fields or when the struct is large enough that copying causes performance penalties.',
      bn: 'স্ট্রাক্ট পরিবর্তন করতে পয়েন্টার রিসিভার ব্যবহার করুন: মেথড যখন ফিল্ড পরিবর্তন করে বা স্ট্রাক্ট বড় আকারের হয় তখন কপি করার খরচ বাঁচাতে পয়েন্টার রিসিভার (*T) ব্যবহার করুন।',
    },
    {
      en: 'Handle errors explicitly at call sites: check if err != nil immediately after function execution; wrap context using fmt.Errorf("%w", err) rather than ignoring failures.',
      bn: 'কল সাইটেই সরাসরি এরর হ্যান্ডেল করুন: ফাংশন কলের সাথে সাথে if err != nil পরীক্ষা করুন; এরর উপেক্ষা না করে fmt.Errorf("%w", err) দিয়ে কনটেক্সট র‍্যাপ করুন।',
    },
    {
      en: 'Always propagate context.Context: accept ctx as the first parameter of I/O functions and respect ctx.Done() to terminate leaked goroutines on client disconnects.',
      bn: 'সর্বদা context.Context ফরোয়ার্ড করুন: আই/ও ফাংশনের প্রথম প্যারামিটার হিসেবে ctx গ্রহণ করুন এবং ক্লায়েন্ট বিচ্ছিন্ন হলে লিক হওয়া গোরুটিন থামাতে ctx.Done() মেনে চলুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the internal difference between an array and a slice in Go, and how does append operate?',
        bn: 'গো-তে অ্যারে এবং স্লাইসের অভ্যন্তরীণ পার্থক্য কী এবং append কীভাবে কাজ করে?',
      },
      a: {
        en: 'An array in Go is a fixed-size, contiguous memory block whose size is part of its type ([5]int != [10]int), and passing an array copies its entire data. A slice is a lightweight 24-byte header consisting of a pointer to a backing array, a length (len), and a capacity (cap). When append() is called and length exceeds capacity, Go allocates a new, larger backing array (typically doubling capacity), copies existing elements, and returns a new slice header pointing to the new memory.',
        bn: 'গো-তে অ্যারে হলো একটি নির্দিষ্ট আকারের অবিচ্ছিন্ন মেমরি ব্লক যার আকার তার টাইপের অংশ ([5]int এবং [10]int ভিন্ন টাইপ) এবং অ্যারে পাস করলে পুরো ডেটা কপি হয়। অন্যদিকে স্লাইস হলো একটি হালকা ২৪-বাইটের হেডার যা একটি ব্যাকিং অ্যারের পয়েন্টার, দৈর্ঘ্য (len) এবং ধারণক্ষমতা (cap) ধারণ করে। যখন append() ডাকা হয় এবং দৈর্ঘ্য ক্যাপাসিটি ছাড়িয়ে যায়, তখন গো নতুন একটি বড় ব্যাকিং অ্যারে বরাদ্দ করে (সাধারণত দ্বিগুণ আকারের), পুরনো উপাদানগুলো কপি করে এবং নতুন মেমরির পয়েন্টারযুক্ত একটি নতুন স্লাইস হেডার ফেরত দেয়।',
      },
    },
    {
      q: {
        en: 'When should you define a method with a value receiver versus a pointer receiver in Go?',
        bn: 'গো-তে কখন ভ্যালু রিসিভার এবং কখন পয়েন্টার রিসিভার দিয়ে মেথড সংজ্ঞায়িত করা উচিত?',
      },
      a: {
        en: 'Use a pointer receiver (*T) if: (1) the method needs to mutate the struct fields; (2) the struct is large and copying its values on each call would incur noticeable memory overhead; or (3) the struct contains synchronization primitives like sync.Mutex which must never be copied. Use a value receiver (T) if the struct is small, immutable, or a basic primitive alias (like time.Time) where safe thread isolation is desired.',
        bn: 'পয়েন্টার রিসিভার (*T) ব্যবহার করবেন যদি: (১) মেথডের স্ট্রাক্ট ফিল্ডের মান পরিবর্তনের প্রয়োজন হয়; (২) স্ট্রাক্টটি আকারে বড় হয় এবং প্রতি কলে কপি করা মেমরির অপচয় ঘটায়; অথবা (৩) স্ট্রাক্টে sync.Mutex এর মতো সিঙ্ক্রোনাইজেশন উপাদান থাকে যা কখনোই কপি করা উচিত নয়। আর ভ্যালু রিসিভার (T) ব্যবহার করবেন যদি স্ট্রাক্টটি ছোট হয়, অপরিবর্তনীয় হয় অথবা সময় (time.Time) এর মতো প্রিমিটিভ টাইপ হয় যেখানে কপি করে কাজ করা নিরাপদ।',
      },
    },
    {
      q: {
        en: 'What is the difference between unbuffered and buffered channels, and how does channel blocking work?',
        bn: 'আনবাফার্ড এবং বাফার্ড চ্যানেলের মধ্যে পার্থক্য কী এবং চ্যানেল ব্লকিং কীভাবে কাজ করে?',
      },
      a: {
        en: 'An unbuffered channel (make(chan T)) has zero capacity and requires synchronous rendezvous: a send blocks until a receiver is ready to receive, and a receive blocks until a sender sends. A buffered channel (make(chan T, cap)) contains a circular ring buffer: sends only block when the buffer is completely full, and receives only block when the buffer is completely empty. Closing a closed channel or sending to a closed channel causes a runtime panic.',
        bn: 'একটি আনবাফার্ড চ্যানেলের (make(chan T)) ক্যাপাসিটি শূন্য এবং এতে প্রেরক ও প্রাপকের তাৎক্ষণিক উপস্থিতি আবশ্যক: কোনো মান পাঠালে তা প্রাপক গ্রহণ না করা পর্যন্ত সেন্ডার আটকে (block) থাকে, এবং প্রাপক কোনো ডেটা না আসা পর্যন্ত আটকে থাকে। অপরদিকে বাফার্ড চ্যানেলে (make(chan T, cap)) একটি রিং বাফার থাকে: বাফার পূর্ণ না হওয়া পর্যন্ত ডেটা পাঠানো ব্লক হয় না এবং বাফার পুরোপুরি খালি না হওয়া পর্যন্ত রিসিভ ব্লক হয় না। বন্ধ চ্যানেলে পাঠাতে গেলে বা দ্বিতীয়বার ক্লোজ করলে রানটাইম প্যানিক ঘটে।',
      },
    },
    {
      q: {
        en: 'How does sync.WaitGroup synchronize multiple concurrent goroutines, and what mistake leads to deadlocks?',
        bn: 'sync.WaitGroup কীভাবে একাধিক কনকারেন্ট গোরুটিন সমন্বয় করে এবং কোন ভুলের কারণে ডেডলক ঘটে?',
      },
      a: {
        en: 'sync.WaitGroup maintains an internal atomic counter. You call wg.Add(n) before launching goroutines to increment the counter, call wg.Done() (typically via defer) inside each goroutine to decrement it, and call wg.Wait() in the main thread to block until the counter reaches zero. Common fatal mistakes include: (1) calling wg.Add(1) inside the goroutine rather than before launching it, causing a race where wg.Wait() finishes prematurely; and (2) passing WaitGroup by value instead of by pointer, copying the counter and causing permanent deadlocks.',
        bn: 'sync.WaitGroup একটি অভ্যন্তরীণ অ্যাটমিক কাউন্টার বজায় রাখে। গোরুটিন চালুর আগে wg.Add(n) ডেকে কাউন্টার বাড়ানো হয়, প্রতিটি গোরুটিনের ভেতরে wg.Done() (সাধারণত defer দিয়ে) ডেকে কাউন্টার কমানো হয় এবং মূল থ্রেডে wg.Wait() ডেকে কাউন্টার শূন্য না হওয়া পর্যন্ত অপেক্ষা করা হয়। মারাত্মক সাধারণ ভুলগুলো হলো: (১) গোরুটিন চালুর পূর্বে Add না ডেকে ভেতরে ডাকা, যার ফলে Wait() আগেই শেষ হয়ে যায়; এবং (২) WaitGroup পয়েন্টারের বদলে ভ্যালু হিসেবে পাস করা, যার ফলে কাউন্টার কপি হয়ে অনন্তকালের ডেডলক সৃষ্টি হয়।',
      },
    },
  ],
  realWorld: [
    {
      company: 'Docker & Kubernetes',
      description: {
        en: 'Both cloud container runtimes and cluster orchestrators are written entirely in Go, leveraging low-overhead goroutines and direct Linux kernel syscall interfaces.',
        bn: 'ক্লাউড কন্টেইনার রানটাইম (Docker) এবং ক্লাস্টার অর্কেস্ট্রেটর (Kubernetes) উভয়ই সম্পূর্ণ গো-তে লেখা, যা হালকা গোরুটিন এবং লিনাক্স কার্নেলের সাথে সরাসরি যোগাযোগের সুবিধা কাজে লাগায়।',
      },
    },
    {
      company: 'Cloudflare',
      description: {
        en: 'Handles edge network proxying, SSL termination, and DDoS mitigation routing trillions of monthly HTTP requests using high-throughput Go network servers.',
        bn: 'উচ্চ-গতির গো নেটওয়ার্ক সার্ভারের মাধ্যমে প্রতি মাসে ট্রিলিয়ন ট্রিলিয়ন এইচটিটিপি রিকোয়েস্ট রাউটিং, এজ প্রক্সি এবং ডিডিওএস প্রতিরোধ পরিচালনা করে।',
      },
    },
    {
      company: 'Uber',
      description: {
        en: 'Powers high-frequency geo-spatial dispatch systems and real-time trip matching engines with low-latency concurrent Go microservices.',
        bn: 'কম ল্যাটেন্সির কনকারেন্ট গো মাইক্রোসার্ভিস ব্যবহার করে উচ্চ-ফ্রিকোয়েন্সির রিয়েল-টাইম রাইড ম্যাচিং ও জিও-স্প্যাশিয়াল ডিসপ্যাচ সিস্টেম পরিচালনা করে।',
      },
    },
  ],
};
