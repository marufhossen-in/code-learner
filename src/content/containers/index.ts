import type { Hub } from '../../lib/types';
import { ContainersAndTheContainerLesson } from './lessons/containers-and-the-container';
import { ImagesAndTheImageLesson } from './lessons/images-and-the-image';
import { LayersAndTheLayerLesson } from './lessons/layers-and-the-layer';
import { VolumesAndTheVolumeLesson } from './lessons/volumes-and-the-volume';
import { PortsAndThePortLesson } from './lessons/ports-and-the-port';
import { RegistriesAndTheRegistryLesson } from './lessons/registries-and-the-registry';
import { FleetsAndTheFleetLesson } from './lessons/fleets-and-the-fleet';
import { TheContainersReleaseLesson } from './lessons/the-containers-release';

export const containersHub: Hub = {
  slug: 'containers',
  name: 'Containers',
  icon: '📦',
  tagline: {
    en: 'Master containerization: Linux namespaces, cgroups, layered images, persistent volumes, networking, and production orchestration.',
    bn: 'কন্টেইনারাইজেশন শিখুন: লিনাক্স নেমস্পেস, সিগ্রুপস, লেয়ার্ড ইমেজ, পারসিসটেন্ট ভলিউম, নেটওয়ার্কিং এবং প্রোডাকশন অর্কেস্ট্রেশন।',
  },
  intro: {
    en: 'Containers package application code, system libraries, and runtime dependencies into isolated, reproducible execution environments. Unlike heavyweight virtual machines that emulate entire hardware stacks and run guest operating systems, containers run directly on the host Linux kernel using kernel namespaces for process and network isolation and control groups (cgroups) for CPU and memory resource throttling. This lightweight architecture enables instant startup, minimal memory overhead, and 100% environment parity between local development machines and large-scale cloud clusters.',
    bn: 'কন্টেইনার অ্যাপ্লিকেশন কোড, সিস্টেম লাইব্রেরি এবং রানটাইম ডিপেন্ডেন্সিকে একটি সম্পূর্ণ বিচ্ছিন্ন ও নির্ভরযোগ্য এক্সিকিউশন এনভায়রনমেন্টে রূপ দেয়। ভারী ভার্চুয়াল মেশিনের মতো পুরো অপারেটিং সিস্টেম অনুকরণ না করে, কন্টেইনার সরাসরি হোস্ট লিনাক্স কার্নেলের ওপর চলে। এটি প্রসেস ও নেটওয়ার্ক আলাদা রাখতে কার্নেল নেমস্পেস এবং মেমরি ও সিপিইউ নিয়ন্ত্রণের জন্য কন্ট্রোল গ্রুপ (cgroups) ব্যবহার করে। ফলে কোনো অতিরিক্ত অপচয় ছাড়াই সেকেন্ডের মধ্যে অ্যাপ্লিকেশন চালু হয় এবং লোকাল পিসি থেকে ক্লাউড সার্ভার পর্যন্ত ১০০% পরিবেশগত সামঞ্জস্য বজায় থাকে।',
  },
  roadmap: [
    {
      title: { en: 'Stage 1 — Core Linux Primitives and Image Layers', bn: 'ধাপ ১ — লিনাক্স প্রিমিটিভস ও ইমেজ লেয়ার্স' },
      items: [
        {
          en: 'Linux Namespaces and Control Groups: discover how the kernel isolates PID, network, mount points, and throttles CPU and RAM allocations.',
          bn: 'লিনাক্স নেমস্পেস ও কন্ট্রোল গ্রুপ: জানুন কীভাবে কার্নেল পিআইডি, নেটওয়ার্ক ও মাউন্ট পয়েন্ট আলাদা রাখে এবং সিপিইউ ও র্যামের সীমা নিয়ন্ত্রণ করে।',
        },
        {
          en: 'OCI Images and Dockerfiles: write reproducible container manifests using FROM, RUN, COPY, WORKDIR, and multi-stage builds.',
          bn: 'ওআইসি ইমেজ ও ডকারফাইল: বিভিন্ন বিল্ড নির্দেশ যেমন FROM, RUN, COPY এবং মাল্টি-স্টেজ বিল্ড ব্যবহার করে কার্যকর ইমেজ তৈরি করুন।',
        },
        {
          en: 'OverlayFS and Copy-on-Write: master read-only lower layers, ephemeral upper write layers, and efficient cache sharing across hosts.',
          bn: 'ওভারলে ফাইলসিস্টেম ও কপি-অন-রাইট: রিড-অনলি লোয়ার লেয়ার, ক্ষণস্থায়ী আপার রাইট লেয়ার এবং হোস্টজুড়ে দক্ষ ক্যাশ শেয়ারিং বুঝুন।',
        },
      ],
    },
    {
      title: { en: 'Stage 2 — Storage, Networking, and Image Registries', bn: 'ধাপ ২ — স্টোরেজ, নেটওয়ার্কিং ও ইমেজ রেজিস্ট্রি' },
      items: [
        {
          en: 'Persistent Volumes and Bind Mounts: decouple persistent state from container lifecycles to safely run databases and file storage.',
          bn: 'পারসিসটেন্ট ভলিউম ও বাইন্ড মাউন্ট: কন্টেইনারের জীবনচক্র থেকে ডেটা আলাদা করে নিরাপদে ডেটাবেজ ও ফাইল স্টোরেজ পরিচালনা করুন।',
        },
        {
          en: 'Container Networking: configure bridge networks, host networking, port mappings, and embedded DNS service discovery.',
          bn: 'কন্টেইনার নেটওয়ার্কিং: ব্রিজ নেটওয়ার্ক, হোস্ট নেটওয়ার্কিং, পোর্ট ম্যাপিং এবং অভ্যন্তরীণ ডিএনএস সার্ভিস ডিসকভারি কনফিগার করুন।',
        },
        {
          en: 'Container Registries and Security Scanning: push signed images, pin immutable sha256 digests, and scan for CVE vulnerabilities.',
          bn: 'কন্টেইনার রেজিস্ট্রি ও নিরাপত্তা স্ক্যান: ইমেজ পুশ করা, অপরিবর্তনীয় sha256 ডাইজেস্ট পিন করা এবং সিভিই দুর্বলতা স্ক্যান করা শিখুন।',
        },
      ],
    },
    {
      title: { en: 'Stage 3 — Multi-Container Fleets and Zero-Downtime Releases', bn: 'ধাপ ৩ — মাল্টি-কন্টেইনার ফ্লিট ও ডাউনটাইমহীন রিলিজ' },
      items: [
        {
          en: 'Docker Compose Fleets: orchestrate microservices, internal networking, shared environment variables, and dependent health checks.',
          bn: 'ডকার কম্পোজ ফ্লিট: মাইক্রোসার্ভিস, ইন্টারনাল নেটওয়ার্কিং, এনভায়রনমেন্ট ভ্যারিয়েবল এবং হেলথ চেক সমন্বয় করুন।',
        },
        {
          en: 'Zero-Downtime Deployments: implement blue-green cutovers, rolling updates, graceful SIGTERM handling, and instant rollback procedures.',
          bn: 'ডাউনটাইমহীন ডিপ্লয়মেন্ট: ব্লু-গ্রিন কাটওভার, রোলিং আপডেট, নিখুঁত SIGTERM হ্যান্ডলিং এবং স্বয়ংক্রিয় রোলব্যাক পদ্ধতি বাস্তবায়ন করুন।',
        },
      ],
    },
  ],
  lessons: [
    ContainersAndTheContainerLesson,
    ImagesAndTheImageLesson,
    LayersAndTheLayerLesson,
    VolumesAndTheVolumeLesson,
    PortsAndThePortLesson,
    RegistriesAndTheRegistryLesson,
    FleetsAndTheFleetLesson,
    TheContainersReleaseLesson,
  ],
  projects: [
    {
      title: { en: 'Production Microservice with Multi-Stage Dockerfile', bn: 'মাল্টি-স্টেজ ডকারফাইল সহ প্রোডাকশন মাইক্রোসার্ভিস' },
      brief: {
        en: 'Author an optimized, secure Node.js microservice image using a 2-stage build that compiles TypeScript in the build stage and copies only production artifacts into an unprivileged distroless container.',
        bn: '২টি ধাপে মাল্টি-স্টেজ বিল্ড ব্যবহার করে টাইপস্ক্রিপ্ট কম্পাইল করে শুধুমাত্র প্রোডাকশন ফাইলসহ একটি নিরাপদ ও নন-রুট নোডজেএস কন্টেইনার তৈরি করুন।',
      },
    },
    {
      title: { en: 'Distributed Application Fleet with Docker Compose', bn: 'ডকার কম্পোজ দিয়ে ডিস্ট্রিবিউটেড অ্যাপ্লিকেশন ফ্লিট' },
      brief: {
        en: 'Orchestrate a complete full-stack environment containing an Express backend, a Redis caching layer, and a PostgreSQL database with health checks, persistent volumes, and internal bridge networking.',
        bn: 'এক্সপ্রেস ব্যাকএন্ড, রেডিস ক্যাশ এবং পোস্টগ্রেস ডেটাবেজ মিলিয়ে একটি সম্পূর্ণ ফুল-স্ট্যাক পরিবেশ তৈরি করুন যাতে হেলথ চেক ও পারসিসটেন্ট ভলিউম থাকবে।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Never run container processes as root in production: specify a dedicated non-root user (e.g. USER node) to minimize the security blast radius of container escapes.',
      bn: 'প্রোডাকশনে কন্টেইনার প্রসেস কখনোই রুট হিসেবে চালাবেন না: কন্টেইনার এস্কেপের ঝুঁকি কমাতে সর্বদা নির্দিষ্ট নন-রুট ইউজার (যেমন USER node) ব্যবহার করুন।',
    },
    {
      en: 'Leverage multi-stage builds to strip build tools: separate compilation dependencies from runtime packages to produce lean, attack-surface-minimized images.',
      bn: 'বিল্ড টুলস বাদ দিতে মাল্টি-স্টেজ বিল্ড ব্যবহার করুন: কোড কম্পাইল করার ভারী টুলগুলো বাদ দিয়ে শুধুমাত্র প্রয়োজনীয় ফাইল রানটাইমে রাখুন।',
    },
    {
      en: 'Pin images using immutable sha256 digests in production: relying on mutable tags like latest causes unpredictable builds and unverified upstream changes.',
      bn: 'প্রোডাকশনে অপরিবর্তনীয় sha256 ডাইজেস্ট পিন করুন: latest ট্যাগের ওপর নির্ভর করলে অনাকাঙ্ক্ষিত পরিবর্তন ও বিল্ড ভেঙে যাওয়ার ঝুঁকি থাকে।',
    },
    {
      en: 'Handle SIGTERM signals gracefully inside container processes: allow active database transactions and in-flight HTTP requests to drain cleanly before exiting.',
      bn: 'কন্টেইনার প্রসেসে SIGTERM সিগন্যাল সঠিকভাবে হ্যান্ডেল করুন: শাটডাউনের সময় চলমান ডেটাবেজ কুয়েরি ও এইচটিটিপি রিকোয়েস্ট নিরাপদে শেষ করার সুযোগ দিন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the fundamental architectural difference between a container and a virtual machine?',
        bn: 'কন্টেইনার এবং ভার্চুয়াল মেশিনের মধ্যে মৌলিক আর্কিটেকচারাল পার্থক্য কী?',
      },
      a: {
        en: 'A virtual machine (VM) runs on top of a hypervisor (Type 1 or Type 2) that virtualizes physical hardware (CPU, memory, storage, network cards). Each VM runs its own full guest operating system with a dedicated kernel, requiring several gigabytes of disk storage and minutes to boot. In contrast, a container is simply an isolated process running directly on the host Linux kernel. It utilizes Linux namespaces (PID, NET, MNT, IPC, UTS, USER) for isolation and control groups (cgroups) for resource limits. Containers share the host kernel, enabling sub-second startup times, near-zero virtualization overhead, and maximum compute density.',
        bn: 'ভার্চুয়াল মেশিন হাইপারভাইজারের ওপর চলে যা পুরো ফিজিক্যাল হার্ডওয়্যারকে অনুকরণ করে। প্রতিটি ভিএম নিজস্ব পূর্ণাঙ্গ গেস্ট অপারেটিং সিস্টেম ও কার্নেল চালায়, যার ফলে প্রচুর মেমরি ও স্টোরেজ লাগে এবং চালু হতে কয়েক মিনিট সময় নেয়। অপরদিকে কন্টেইনার হলো হোস্ট লিনাক্স কার্নেলের ওপর সরাসরি চলা একটি আইসোলেটেড প্রসেস। এটি নেমস্পেস দিয়ে প্রসেস ও নেটওয়ার্ক আলাদা রাখে এবং সিগ্রুপস দিয়ে মেমরি ও সিপিইউর সীমা ঠিক করে। হোস্ট কার্নেল শেয়ার করার কারণে কন্টেইনার নিমেষেই চালু হয় এবং সিস্টেমের ওপর কোনো অতিরিক্ত চাপ ফেলে না।',
      },
    },
    {
      q: {
        en: 'What is the difference between Docker bind mounts and named volumes, and when should each be used?',
        bn: 'ডকার বাইন্ড মাউন্ট এবং নেমড ভলিউমের মধ্যে পার্থক্য কী এবং কখন কোনটি ব্যবহার করা উচিত?',
      },
      a: {
        en: 'A bind mount maps an exact file or directory path from the host machine filesystem directly into the container (e.g. -v /home/user/app:/usr/src/app). Changes made on the host immediately reflect inside the container, making bind mounts ideal for local development and live hot-reloading. However, bind mounts depend heavily on the host directory structure and file permissions. A named volume is fully managed by Docker and stored in a designated internal storage directory (e.g. /var/lib/docker/volumes/ on Linux). Named volumes isolate container storage from host OS details, support volume drivers for cloud storage (such as AWS EBS), and provide superior I/O performance and backup safety for production databases.',
        bn: 'বাইন্ড মাউন্ট হোস্ট কম্পিউটারের একটি নির্দিষ্ট ফোল্ডার সরাসরি কন্টেইনারের সাথে সংযুক্ত করে। হোস্টে কোড পরিবর্তন করলে সাথে সাথে কন্টেইনারে পরিবর্তন ঘটে, যা লোকাল ডেভেলপমেন্ট ও লাইভ কোডিংয়ের জন্য সেরা। তবে এটি হোস্টের নির্দিষ্ট পাথ ও পারমিশনের ওপর নির্ভরশীল। অন্যদিকে নেমড ভলিউম সম্পূর্ণভাবে ডকার ম্যানেজ করে এবং এটি ডকারের নিজস্ব ডিরেক্টরিতে সংরক্ষিত থাকে। নেমড ভলিউম ক্লাউড স্টোরেজের সাথে সহজে ইন্টিগ্রেট করা যায় এবং প্রোডাকশন ডেটাবেজের ব্যাকআপ ও দ্রুত রিড-রাইটের জন্য এটিই আদর্শ পছন্দ।',
      },
    },
    {
      q: {
        en: 'How does container networking function under the default bridge driver, and how do containers resolve each other by name?',
        bn: 'ডিফল্ট ব্রিজ নেটওয়ার্কে কন্টেইনার নেটওয়ার্কিং কীভাবে কাজ করে এবং কন্টেইনারগুলো কীভাবে একে অপরকে নাম দিয়ে খুঁজে পায়?',
      },
      a: {
        en: 'When the Docker daemon starts, it creates a virtual Linux network bridge named docker0. Each container attached to a bridge network gets its own network namespace, virtual ethernet pair (veth), private IP address (such as 172.17.0.2), and default gateway pointing to the bridge. Host port mapping (-p 8080:80) uses iptables Network Address Translation (NAT) rules to route external incoming host traffic to the private container port. On user-defined custom bridge networks, Docker runs an embedded DNS server at 127.0.0.11 that automatically resolves container names to their internal IP addresses, enabling seamless service-to-service communication without hardcoded IPs.',
        bn: 'ডকার চালু হলে এটি docker0 নামের একটি ভার্চুয়াল নেটওয়ার্ক ব্রিজ তৈরি করে। প্রতিটি কন্টেইনার নিজস্ব নেটওয়ার্ক নেমস্পেস, প্রাইভেট আইপি এবং ডিফল্ট গেটওয়ে পায়। পোর্ট ম্যাপিং (-p 8080:80) লিনাক্স iptables এবং NAT ব্যবহার করে বাইরের ট্রাফিককে কন্টেইনারের ভেতরের নির্দিষ্ট পোর্টে পাঠিয়ে দেয়। কাস্টম ব্রিজ নেটওয়ার্কে ডকারের নিজস্ব একটি অভ্যন্তরীণ ডিএনএস সার্ভার থাকে (127.0.0.11), যা কন্টেইনারের নাম দেখেই সঠিক অভ্যন্তরীণ আইপি অ্যাড্রেস বের করে দেয়। ফলে কোনো আইপি মুখস্থ না রেখেই কন্টেইনারগুলো একে অপরের সাথে যোগাযোগ করতে পারে।',
      },
    },
    {
      q: {
        en: 'What is the operational difference between the CMD and ENTRYPOINT instructions in a Dockerfile?',
        bn: 'ডকারফাইলে CMD এবং ENTRYPOINT নির্দেশের মধ্যে প্রায়োগিক পার্থক্য কী?',
      },
      a: {
        en: 'ENTRYPOINT defines the fixed default executable that is invoked when the container starts, turning the container into an executable binary (e.g. ENTRYPOINT ["node"]). CMD defines default arguments that are passed to the ENTRYPOINT, or acts as the standalone command if ENTRYPOINT is omitted. When executing docker run my-image server.js, the command-line arguments override the CMD entirely while keeping the ENTRYPOINT intact. Combining them allows you to configure a permanent executable via ENTRYPOINT and provide customizable default flags or parameters via CMD.',
        bn: 'ENTRYPOINT নির্ধারণ করে কন্টেইনার চালু হলে কোন প্রোগ্রামটি প্রধান হিসেবে চলবে (যেমন ENTRYPOINT ["node"])। আর CMD হলো সেই প্রোগ্রামের জন্য ডিফল্ট আর্গুমেন্ট যা ব্যবহারকারী চাইলে কমান্ড লাইন থেকে সহজে পরিবর্তন করে দিতে পারেন। যদি docker run my-image server.js চালানো হয়, তবে server.js অংশটি CMD-কে ওভাররাইড করে কিন্তু ENTRYPOINT অপরিবর্তিত থাকে। উভয় নির্দেশ একসাথে ব্যবহার করে একটি স্থায়ী এক্সিকিউটেবল ও পরিবর্তনযোগ্য ডিফল্ট প্যারামিটার সেট করা যায়।',
      },
    },
  ],
  realWorld: [
    {
      en: 'Spotify: operates hundreds of thousands of microservices packaged as Docker containers, running across internal clusters to process music streaming, audio recommendations, and artist analytics with sub-second scaling.',
      bn: 'স্পটিফাই: তাদের গান স্ট্রিমিং ও রেকমেন্ডেশন সিস্টেম পরিচালনার জন্য শত শত মাইক্রোসার্ভিস কন্টেইনার হিসেবে চালায়, যা সেকেন্ডের মধ্যে প্রয়োজনমতো স্কেল করতে পারে।',
    },
    {
      en: 'Uber: coordinates massive containerized dispatch engines and geospatial matching services, migrating from monolithic backends to container microservices to achieve resilient real-time ride tracking worldwide.',
      bn: 'উবার: তাদের গাড়ি রাইড ম্যাচিং ও রিয়েলটাইম লোকেশন ট্র্যাকিং নিশ্চিত করতে বিশ্বজুড়ে কন্টেইনারাইজড মাইক্রোসার্ভিস ব্যবহার করে নিরবচ্ছিন্ন সেবা নিশ্চিত করে।',
    },
    {
      en: 'Cloudflare: builds secure, sandboxed multi-tenant edge execution infrastructure utilizing lightweight container primitives, Linux namespaces, and cgroups to process trillions of daily edge requests.',
      bn: 'ক্লাউডফ্লেয়ার: বিশ্বব্যাপী তাদের এজ নেটওয়ার্কে প্রতিদিন ট্রিলিয়ন ট্রিলিয়ন ওয়েব রিকোয়েস্ট নিরাপদ ও সুরক্ষিতভাবে প্রসেস করতে লিনাক্স কন্টেইনার প্রিমিটিভস ব্যবহার করে।',
    },
  ],
  references: [],
};
