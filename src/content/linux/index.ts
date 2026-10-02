import type { Hub } from '../../lib/types';
import { ShellsAndTheShellLesson } from './lessons/shells-and-the-shell';
import { FilesAndTheFileLesson } from './lessons/files-and-the-file';
import { PermsAndThePermLesson } from './lessons/perms-and-the-perm';
import { ProcsAndTheProcLesson } from './lessons/procs-and-the-proc';
import { UsersAndTheUserLesson } from './lessons/users-and-the-user';
import { PackagesAndThePackageLesson } from './lessons/packages-and-the-package';
import { ServicesAndTheServiceLesson } from './lessons/services-and-the-service';
import { TheLinuxReleaseLesson } from './lessons/the-linux-release';

export const linuxHub: Hub = {
  slug: 'linux',
  name: 'Linux',
  icon: '🐧',
  tagline: {
    en: 'Master Linux kernel architecture, Bash shell pipelines, Filesystem Hierarchy, POSIX permissions, process signals, systemd services, and production server hardening.',
    bn: 'Linux কার্নেল আর্কিটেকচার, ব্যাশ শেল পাইপলাইন, ফাইলসিস্টেম হায়ারার্কি, পজিক্স পারমিশন, প্রসেস সিগন্যাল, systemd সার্ভিস এবং সার্ভার হার্ডেনিং আয়ত্ত করুন।'
  },
  intro: {
    en: 'Linux powers the vast majority of the world\'s cloud infrastructure, container platforms, high-performance databases, and production servers. Built on a monolithic kernel with virtual filesystem abstractions and standard POSIX system calls, mastering Linux is the ultimate foundational skill for software developers, backend engineers, and DevOps professionals. This curriculum guides you through the shell environment, filesystem navigation, permission matrices, systemd daemon management, network debugging, and production kernel tuning.',
    bn: 'বিশ্বের অধিকাংশ ক্লাউড অবকাঠামো, কন্টেইনার প্ল্যাটফর্ম, উচ্চ ক্ষমতাসম্পন্ন ডাটাবেস এবং প্রোডাকশন সার্ভার Linux দ্বারা পরিচালিত। ভার্চুয়াল ফাইলসিস্টেম ও আদর্শ পজিক্স (POSIX) সিস্টেম কল ভিত্তিক এই অপারেটিং সিস্টেমের ওপর দক্ষতা অর্জন করা প্রতিটি সফটওয়্যার ডেভেলপার, ব্যাকএন্ড ইঞ্জিনিয়ার ও ডেভঅ্পস প্রফেশনালের জন্য অন্যতম মৌলিক ভিত্তি। এই কারিকুলামটি আপনাকে শেল পরিবেশ ও ফাইল ব্যবস্থাপনা থেকে শুরু করে প্রসেস সিগন্যাল, systemd ডেমন সার্ভিস, নেটওয়ার্ক পর্যবেক্ষণ ও কার্নেল টিউনিং পর্যন্ত দক্ষ করে তুলবে।'
  },
  roadmap: [
    {
      title: { en: 'Stage 1: Shell Navigation, Filesystem & Permissions', bn: 'ধাপ ১: শেল নেভিগেশন, ফাইলসিস্টেম ও পারমিশন' },
      items: [
        { en: 'Kernel vs userspace, standard streams (stdin/stdout/stderr), redirection, and pipeline chaining.', bn: 'কার্নেল বনাম ইউজারস্পেস, স্ট্যান্ডার্ড স্ট্রিম, রিডাইরেকশন এবং পাইপলাইন শৃঙ্খল।' },
        { en: 'Filesystem Hierarchy Standard (FHS), inode architecture, and hard vs symbolic links.', bn: 'ফাইলসিস্টেম হায়ারার্কি স্ট্যান্ডার্ড (FHS), ইনোড আর্কিটেকচার এবং হার্ড বনাম সিম্বলিক লিঙ্ক।' },
        { en: 'POSIX file permissions (rwx), octal masks, umask, SUID/SGID/Sticky bit, and ACL controls.', bn: 'পজিক্স পারমিশন (rwx), অক্টাল মান, umask, বিশেষ বিট এবং অ্যাক্সেস কন্ট্রোল লিস্ট (ACL)।' }
      ]
    },
    {
      title: { en: 'Stage 2: Process Control, Users & Package Management', bn: 'ধাপ ২: প্রসেস নিয়ন্ত্রণ, ব্যবহারকারী ও প্যাকেজ ব্যবস্থাপনা' },
      items: [
        { en: 'Process lifecycles, PID 1, POSIX signals (SIGTERM/SIGKILL), and procfs monitoring.', bn: 'প্রসেসের জীবনচক্র, পিআইডি ১, পজিক্স সিগন্যাল এবং /proc ফাইলসিস্টেম পর্যবেক্ষণ।' },
        { en: 'User/group administration, /etc/shadow security, sudoers delegation, and SSH keys.', bn: 'ব্যবহারকারী ও গ্রুপ পরিচালনা, শ্যাডো ফাইল নিরাপত্তা, sudoers নিয়মাবলী এবং SSH কি।' },
        { en: 'Package managers (APT, DNF), shared dynamic libraries (ldd), and source compilation.', bn: 'প্যাকেজ ম্যানেজার (APT, DNF), শেয়ার্ড লাইব্রেরি এবং সোর্স কোড থেকে সফটওয়্যার কম্পাইলেশন।' }
      ]
    },
    {
      title: { en: 'Stage 3: Daemons, Networking & Production Operations', bn: 'ধাপ ৩: ডেমন, নেটওয়ার্কিং ও প্রোডাকশন পরিচালনা' },
      items: [
        { en: 'Systemd service unit creation, lifecycle management, and journalctl log aggregation.', bn: 'Systemd সার্ভিস তৈরি, লাইফসাইকেল নিয়ন্ত্রণ এবং journalctl দিয়ে লগ পর্যবেক্ষণ।' },
        { en: 'Network socket troubleshooting (ss, ip), sysctl kernel tuning, cron jobs, and firewall security.', bn: 'নেটওয়ার্ক সকেট অনুসন্ধান (ss, ip), sysctl কার্নেল টিউনিং, ক্রন জব এবং ফায়ারওয়াল নিরাপত্তা।' }
      ]
    }
  ],
  lessons: [
    ShellsAndTheShellLesson,
    FilesAndTheFileLesson,
    PermsAndThePermLesson,
    ProcsAndTheProcLesson,
    UsersAndTheUserLesson,
    PackagesAndThePackageLesson,
    ServicesAndTheServiceLesson,
    TheLinuxReleaseLesson
  ],
  projects: [
    {
      title: { en: 'Automated Microservice Deployment & Systemd Daemonization', bn: 'স্বয়ংক্রিয় মাইক্রোসার্ভিস ডেপ্লয়মেন্ট ও Systemd ডেমোনাইজেশন' },
      brief: {
        en: 'Write production Bash provisioning scripts to configure an isolated service user account, establish secure directory permissions, deploy a Node.js API application, and register a auto-restarting systemd unit with journald logging.',
        bn: 'একটি প্রোডাকশন ব্যাশ স্ক্রিপ্ট তৈরি করে স্বাধীন সার্ভিস ইউজার প্রস্তুত করুন, নিরাপদ ডিরেক্টরি পারমিশন দিন, Node.js API ডেপ্লয় করুন এবং স্বয়ংক্রিয় রিস্টার্ট সুবিধা সহ systemd সার্ভিস চালু করুন।'
      }
    },
    {
      title: { en: 'Enterprise Linux Server Hardening & Telemetry Pipeline', bn: 'এন্টারপ্রাইজ Linux সার্ভার হার্ডেনিং ও টেলিমেট্রি পাইপলাইন' },
      brief: {
        en: 'Harden an Ubuntu cloud server by locking down SSH to key-only authentication, configuring UFW firewall rules, establishing automated cron backups, and streaming sysctl performance tuning metrics for high-throughput network workloads.',
        bn: 'SSH পাসওয়ার্ড বন্ধ করে কি-অনলি লগইন চালু করুন, UFW ফায়ারওয়াল রুল দিন, ক্রন দিয়ে স্বয়ংক্রিয় ব্যাকআপ নিশ্চিত করুন এবং উচ্চ ট্রাফিকের জন্য sysctl কার্নেল টিউনিং সম্পন্ন করুন।'
      }
    }
  ],
  bestPractices: [
    {
      en: 'Never run routine administrative commands as the root user directly; always log in as an unprivileged user and elevate permissions selectively via sudo.',
      bn: 'সরাসরি রুট (root) ইউজার হিসেবে নিয়মিত কাজ করবেন না; সর্বদা সাধারণ ইউজার হিসেবে লগইন করে প্রয়োজনে sudo দিয়ে ক্ষমতা ব্যবহার করুন।'
    },
    {
      en: 'Always index and test permission changes with strict umask settings (such as 027) to prevent unauthorized read access across multi-tenant environments.',
      bn: 'অনাকাঙ্ক্ষিত ব্যবহারকারীদের থেকে ফাইল সুরক্ষিত রাখতে সর্বদা কঠোর umask (যেমন 027) ব্যবহার করে ডিরেক্টরি প্রস্তুত করুন।'
    },
    {
      en: 'Configure systemd unit files with Restart=always and defensive RestartSec intervals to guarantee automatic microservice recovery following unhandled exceptions.',
      bn: 'সার্ভার বা অ্যাপ ক্র্যাশ করলে স্বয়ংক্রিয়ভাবে পুনরায় চালু হতে systemd ইউনিটে সর্বদা Restart=always এবং RestartSec নির্দিষ্ট করুন।'
    },
    {
      en: 'Verify listening network ports and connected sockets with ss -tulpn before modifying firewall rules to prevent unexpected service outages.',
      bn: 'ফায়ারওয়াল রুল পরিবর্তনের আগে সর্বদা ss -tulpn চালিয়ে দেখে নিন কোন কোন পোর্টে কোন প্রসেসগুলো কানেকশনের জন্য প্রস্তুত রয়েছে।'
    },
    {
      en: 'Inspect system memory and swap pressure via free -m and /proc/meminfo to tune vm.swappiness before memory saturation causes OOM killer kernel termination.',
      bn: 'মেমরি শেষ হয়ে সিস্টেম ক্র্যাশ করা রোধ করতে free -m এবং /proc/meminfo পর্যবেক্ষণ করে vm.swappiness টিউন করুন।'
    }
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between a Hard Link and a Symbolic (Soft) Link in Linux?',
        bn: 'Linux-এ হার্ড লিঙ্ক (Hard Link) এবং সিম্বলিক বা সফট লিঙ্কের (Soft Link) মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'A Hard Link creates an additional directory entry pointing directly to the exact same inode number as the original file; the data remains intact on disk as long as at least one hard link exists, but hard links cannot span across different disk partitions or link to directories. A Symbolic Link creates a completely new, independent file holding a text string path referencing the target file; if the target file is deleted or moved, the symbolic link breaks into a dangling link.',
        bn: 'একটি হার্ড লিঙ্ক একই ইনোড (inode) নম্বরের দিকে নির্দেশকারী আরেকটি নাম তৈরি করে; মূল ফাইল মুছে ফেললেও যতক্ষণ একটি হার্ড লিঙ্ক থাকবে ডেটা ডিস্কে অক্ষত থাকে, তবে এটি ভিন্ন পার্টিশনে কাজ করে না। অন্যদিকে সিম্বলিক লিঙ্ক হলো একটি সম্পূর্ণ নতুন ফাইল যা মূল ফাইলের পাথটি লিখে রাখে; মূল ফাইল মুছে ফেললে বা সরালে সিম্বলিক লিঙ্কটি নষ্ট (dangling) হয়ে যায়।'
      }
    },
    {
      q: {
        en: 'How does the Linux kernel handle the process lifecycle, and what is the role of PID 1?',
        bn: 'Linux কার্নেল কীভাবে প্রসেসের জীবনচক্র পরিচালনা করে এবং পিআইডি ১ (PID 1)-এর ভূমিকা কী?'
      },
      a: {
        en: 'All Linux processes are spawned using the fork() and exec() system calls, forming a hierarchical tree rooted at Process ID 1 (systemd on modern distributions). PID 1 is initialized directly by the kernel during boot, supervises all user-space daemons, adopts orphaned child processes whose parents terminated abruptly, and reaps zombie processes from the kernel process table.',
        bn: 'Linux-এর প্রতিটি প্রসেস fork() এবং exec() সিস্টেম কলের মাধ্যমে তৈরি হয় এবং এরা সবাই প্রসেস আইডি ১ (আধুনিক ওএসে systemd)-এর অধীনে একটি ট্রি আকারে থাকে। কার্নেল বুট হওয়ার সময় সরাসরি PID 1 তৈরি করে যা সমস্ত ব্যাকগ্রাউন্ড ডেমন পরিচালনা করে, অনাথ প্রসেসগুলোকে দত্তক নেয় এবং জোম্বি প্রসেসগুলোকে মেমরি থেকে পরিষ্কার করে।'
      }
    },
    {
      q: {
        en: 'What is the difference between POSIX signals SIGTERM (15) and SIGKILL (9)?',
        bn: 'পজিক্স সিগন্যাল SIGTERM (১৫) এবং SIGKILL (৯)-এর মধ্যে পার্থক্য কী?'
      },
      a: {
        en: 'SIGTERM (Signal 15) is the polite termination request: the target process can catch or intercept the signal, execute graceful shutdown handlers (closing database connections, writing open buffers to disk), and exit cleanly. In contrast, SIGKILL (Signal 9) cannot be caught, blocked, or ignored by the process; the Linux kernel immediately terminates the process memory pages, which can cause uncommitted state corruption.',
        bn: 'SIGTERM (সিগন্যাল ১৫) হলো একটি মার্জিত বন্ধের অনুরোধ: প্রসেসটি এই সিগন্যাল ধরতে পারে এবং ডাটাবেস সংযোগ বা ফাইল বাফার সেভ করে সুন্দরভাবে বন্ধ হতে পারে। বিপরীতে SIGKILL (সিগন্যাল ৯) প্রসেস দ্বারা আটকানো বা উপেক্ষা করা অসম্ভব; কার্নেল সাথে সাথে প্রসেসটির মেমরি খালি করে দেয়, যার ফলে ডেটা নষ্ট হওয়ার ঝুঁকি থাকে।'
      }
    },
    {
      q: {
        en: 'How do SUID, SGID, and the Sticky Bit extend the standard POSIX permission model?',
        bn: 'SUID, SGID এবং স্টিকি বিট (Sticky Bit) কীভাবে সাধারণ পজিক্স পারমিশন মডেলকে সম্প্রসারিত করে?'
      },
      a: {
        en: 'SUID (Set User ID, octal 4000) causes an executable to run with the privileges of the file owner (such as passwd running as root) rather than the calling user. SGID (Set Group ID, octal 2000) makes files created within a directory inherit the parent directory\'s group ownership, ideal for shared team folders. The Sticky Bit (octal 1000, seen on /tmp) ensures that only the file owner or root can delete or rename files in a shared writable directory.',
        bn: 'SUID (অক্টাল ৪০০০) কোনো এক্সিকিউটেবলকে সাধারণ ইউজারের বদলে ফাইল মালিকের (যেমন রুটের) ক্ষমতায় চলতে দেয়। SGID (অক্টাল ২০০০) কোনো ডিরেক্টরির ভেতর তৈরি সব নতুন ফাইলকে প্যারেন্ট ডিরেক্টরির গ্রুপ পারমিশন দেয়, যা দলগত ফোল্ডারের জন্য আদর্শ। আর স্টিকি বিট (অক্টাল ১০০০, যেমন /tmp-তে) উন্মুক্ত ডিরেক্টরিতে কেবল ফাইলের আসল মালিককে ফাইল মোছার বা নাম বদলানোর অধিকার দেয়।'
      }
    }
  ],
  realWorld: [
    {
      en: 'Major cloud providers like Amazon Web Services and Google Cloud build their serverless and virtual machine hypervisors on stripped, hardened Linux kernels.',
      bn: 'অ্যামাজন ওয়েব সার্ভিসেস এবং গুগল ক্লাউডের মতো শীর্ষ ক্লাউড কোম্পানিগুলো তাদের সমস্ত ভার্চুয়াল মেশিন ও সার্ভারলেস অবকাঠামো বিশেষ সুরক্ষিত Linux কার্নেলের ওপর পরিচালনা করে।'
    },
    {
      en: 'Containerization engines like Docker and Kubernetes rely fundamentally on native Linux kernel primitives including cgroups (resource limits) and namespaces (process isolation).',
      bn: 'ডকার ও কুবারনেটিসের মতো কন্টেইনার প্রযুক্তি পুরোপুরি Linux কার্নেলের cgroups (রিসোর্স সীমা) এবং namespaces (আইসোলেশন)-এর ওপর ভিত্তি করে তৈরি।'
    },
    {
      en: 'High-frequency trading platforms deploy real-time low-latency Linux kernels (PREEMPT_RT) to execute millisecond financial transactions deterministically.',
      bn: 'আন্তর্জাতিক শেয়ার বাজারের লাইভ ট্রেডিং প্ল্যাটফর্মগুলো কয়েক মিলিসেকেন্ডের মধ্যে আর্থিক লেনদেন সম্পন্ন করতে রিয়েল-টাইম Linux কার্নেল ব্যবহার করে।'
    }
  ]
};
