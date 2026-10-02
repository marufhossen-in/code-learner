import type { Hub } from '../../lib/types';
import { LinuxBasicsLesson } from './lessons/linux-basics';
import { LinuxFilesystemLesson } from './lessons/linux-filesystem';
import { LinuxPermissionsLesson } from './lessons/linux-permissions';
import { LinuxProcessesLesson } from './lessons/linux-processes';
import { ShellScriptingLesson } from './lessons/shell-scripting';
import { LinuxNetworkingLesson } from './lessons/linux-networking';
import { LinuxSecurityLesson } from './lessons/linux-security';
import { LinuxSysCapstoneLesson } from './lessons/linux-sys-capstone';

export const linuxSysHub: Hub = {
  slug: 'linux-sys',
  name: 'Linux System Administration',
  icon: '🐧',
  tagline: {
    en: 'Master Linux kernel architecture, systemd, filesystem hierarchies, process lifecycle, networking, and production server hardening.',
    bn: 'লিনাক্স কার্নেল আর্কিটেকচার, systemd, ফাইলসিস্টেম হায়ারার্কি, প্রসেস লাইফসাইকেল, নেটওয়ার্কিং এবং প্রোডাকশন সার্ভার হার্ডেনিং আয়ত্ত করুন।',
  },
  intro: {
    en: 'Linux powers over 90 percent of the global cloud infrastructure, container workloads, high-frequency trading platforms, and enterprise production clusters. Operating production servers requires deep mastery of kernel subsystems, POSIX system calls, virtual filesystem layouts, process hierarchy, network socket routing, and mandatory access control. This curriculum takes you from core kernel fundamentals to enterprise performance tuning and incident triage.',
    bn: 'বিশ্বের ৯০ শতাংশের বেশি ক্লাউড অবকাঠামো, কন্টেইনার ওয়ার্কলোড, উচ্চ-ফ্রিকোয়েন্সি ট্রেডিং প্ল্যাটফর্ম এবং এন্টারপ্রাইজ প্রোডাকশন ক্লাস্টার লিনাক্সে পরিচালিত হয়। প্রোডাকশন সার্ভার পরিচালনার জন্য কার্নেল সাবসিস্টেম, পজিক্স সিস্টেম কল, ভার্চুয়াল ফাইলসিস্টেম লেআউট, প্রসেস হায়ারার্কি, নেটওয়ার্ক সকেট রাউটিং এবং ম্যান্ডেটরি অ্যাক্সেস কন্ট্রোলের গভীর জ্ঞান আবশ্যক। এই কারিকুলাম আপনাকে কার্নেলের মৌলিক ভিত্তি থেকে এন্টারপ্রাইজ পারফরম্যান্স টিউনিং এবং ইনসিডেন্ট ট্রায়াজে পারদর্শী করে তুলবে।',
  },
  roadmap: [
    {
      title: {
        en: 'Stage 1 — Kernel, Bootloader, and Filesystems (Lessons 1–2)',
        bn: 'ধাপ ১ — কার্নেল, বুটলোডার এবং ফাইলসিস্টেম (পাঠ ১–২)',
      },
      items: [
        {
          en: 'Kernel initialization, GRUB bootloader, systemd PID 1 init process, and runlevels',
          bn: 'কার্নেল ইনিশিয়ালাইজেশন, GRUB বুটলোডার, systemd পিআইডি ১ ইনিট প্রসেস এবং রানলেভেল',
        },
        {
          en: 'Filesystem Hierarchy Standard (FHS), inode tables, mount namespaces, and disk management',
          bn: 'ফাইলসিস্টেম হায়ারার্কি স্ট্যান্ডার্ড (FHS), ইনোড টেবিল, মাউন্ট নেমস্পেস এবং ডিস্ক ম্যানেজমেন্ট',
        },
      ],
    },
    {
      title: {
        en: 'Stage 2 — Security, Permissions, and Process Control (Lessons 3–4)',
        bn: 'ধাপ ২ — নিরাপত্তা, পারমিশন এবং প্রসেস নিয়ন্ত্রণ (পাঠ ৩–৪)',
      },
      items: [
        {
          en: 'POSIX file permissions, ownership delegation, SUID/SGID special bits, and POSIX ACLs',
          bn: 'পজিক্স ফাইল পারমিশন, মালিকানা নির্ধারণ, SUID/SGID বিশেষ বিট এবং পজিক্স ACL',
        },
        {
          en: 'Process lifecycles, states, POSIX signals, cgroup resource limits, and systemd service units',
          bn: 'প্রসেস লাইফসাইকেল, প্রসেস অবস্থা, পজিক্স সিগন্যাল, cgroup রিসোর্স লিমিট এবং systemd সার্ভিস',
        },
      ],
    },
    {
      title: {
        en: 'Stage 3 — Automation, Networking, and Hardening (Lessons 5–6)',
        bn: 'ধাপ ৩ — অটোমেশন, নেটওয়ার্কিং এবং হার্ডেনিং (পাঠ ৫–৬)',
      },
      items: [
        {
          en: 'Bash shell scripting, pipeline error handling, subshells, and stream processing with sed and awk',
          bn: 'ব্যাশ শেল স্ক্রিপ্টিং, পাইপলাইন এরর হ্যান্ডলিং, সাবশেল এবং sed ও awk দিয়ে স্ট্রিম প্রসেসিং',
        },
        {
          en: 'Network stack diagnostics, IP routing tables, socket states with ss, and nftables firewalls',
          bn: 'নেটওয়ার্ক স্ট্যাক ডায়াগনস্টিকস, আইপি রাউটিং টেবিল, ss দিয়ে সকেট অবস্থা এবং nftables ফায়ারওয়াল',
        },
      ],
    },
    {
      title: {
        en: 'Stage 4 — Production Hardening and Performance Tuning (Lessons 7–8)',
        bn: 'ধাপ ৪ — প্রোডাকশন হার্ডেনিং এবং পারফরম্যান্স টিউনিং (পাঠ ৭–৮)',
      },
      items: [
        {
          en: 'SSH hardening, PAM authentication stack, fail2ban brute-force protection, and AppArmor/SELinux',
          bn: 'এসএসএইচ হার্ডেনিং, PAM প্রমাণীকরণ স্ট্যাক, fail2ban ব্রুট-ফোর্স প্রতিরোধ এবং AppArmor/SELinux',
        },
        {
          en: 'Enterprise Linux engineering: sysctl kernel tuning, memory pressure, OOM killer, and runbooks',
          bn: 'এন্টারপ্রাইজ লিনাক্স ইঞ্জিনিয়ারিং: sysctl কার্নেল টিউনিং, মেমোরি চাপ, OOM কিলার এবং রানবুক',
        },
      ],
    },
  ],
  lessons: [
    LinuxBasicsLesson,
    LinuxFilesystemLesson,
    LinuxPermissionsLesson,
    LinuxProcessesLesson,
    ShellScriptingLesson,
    LinuxNetworkingLesson,
    LinuxSecurityLesson,
    LinuxSysCapstoneLesson,
  ],
  projects: [
    {
      title: {
        en: 'Enterprise Linux Server Hardening & Automated Bastion Host',
        bn: 'এন্টারপ্রাইজ লিনাক্স সার্ভার হার্ডেনিং এবং স্বয়ংক্রিয় ব্যাস্টিয়ন হোস্ট',
      },
      brief: {
        en: 'Build and deploy an automated production-grade Linux bastion host featuring SSH public key enforcement, fail2ban brute-force defense, nftables stateful firewalling, and auditd system call monitoring.',
        bn: 'এসএসএইচ পাবলিক কি নিরাপত্তা, fail2ban ব্রুট-ফোর্স প্রতিরক্ষা, nftables স্টেটফুল ফায়ারওয়াল এবং auditd সিস্টেম কল মনিটরিং সমৃদ্ধ একটি স্বয়ংক্রিয় এন্টারপ্রাইজ লিনাক্স ব্যাস্টিয়ন হোস্ট তৈরি ও ডিপ্লয় করুন।',
      },
    },
    {
      title: {
        en: 'High-Availability Linux Cluster & Automated Disaster Recovery Runbook',
        bn: 'হাই-অ্যাভেইলেবিলিটি লিনাক্স ক্লাস্টার এবং স্বয়ংক্রিয় দুর্যোগ উদ্ধার রানবুক',
      },
      brief: {
        en: 'Architect a redundant Linux cluster configured with systemd health watchers, automated LVM storage snapshotting, cgroup resource throttling, and sysctl network stack kernel tuning for high throughput.',
        bn: 'সিস্টেমডি হেলথ ওয়াচার, স্বয়ংক্রিয় LVM স্টোরেজ স্ন্যাপশট, cgroup রিসোর্স নিয়ন্ত্রণ এবং উচ্চ থ্রুপুটের জন্য sysctl নেটওয়ার্ক কার্নেল টিউনিং সমন্বিত একটি রিডান্ড্যান্ট লিনাক্স ক্লাস্টার আর্কিটেক্ট করুন।',
      },
    },
  ],
  bestPractices: [
    {
      en: 'Enforce the principle of least privilege by running services under unprivileged dedicated system accounts rather than root.',
      bn: 'রুট ব্যবহারকারীর বদলে সুবিধাহীন নির্দিষ্ট সিস্টেম অ্যাকাউন্টের অধীনে সার্ভিস চালিয়ে সর্বনিম্ন সুবিধার নীতি কঠোরভাবে প্রয়োগ করুন।',
    },
    {
      en: 'Always use strict Bash safety flags (set -euo pipefail) in production automation scripts to abort immediately on unbound variables or pipeline failures.',
      bn: 'অনির্ধারিত ভেরিয়েবল বা পাইপলাইনের ত্রুটিতে তাৎক্ষণিক স্ক্রিপ্ট বন্ধ করতে প্রোডাকশন অটোমেশনে সর্বদা কড়া ফ্ল্যাগ (set -euo pipefail) ব্যবহার করুন।',
    },
    {
      en: 'Manage system services exclusively through declarative systemd unit files rather than rogue background daemon scripts.',
      bn: 'অনিবন্ধিত ব্যাকগ্রাউন্ড ডেমন স্ক্রিপ্টের বদলে সর্বদা সুনির্দিষ্ট systemd ইউনিট ফাইলের মাধ্যমে নির্ভরযোগ্যভাবে সিস্টেম সার্ভিস পরিচালনা করুন।',
    },
    {
      en: 'Protect internet-facing servers with SSH public key authentication, disabling root login and password authentication entirely.',
      bn: 'ইন্টারনেট সংযুক্ত সার্ভারে রুট লগইন ও পাসওয়ার্ড প্রমাণীকরণ সম্পূর্ণরূপে বন্ধ করে কেবল এসএসএইচ পাবলিক কি প্রমাণীকরণ বাধ্যতামূলক করুন।',
    },
    {
      en: 'Tune kernel parameters declaratively inside /etc/sysctl.d/ rather than relying on ephemeral runtime echo commands.',
      bn: 'অস্থায়ী রানটাইম কম্যান্ডের ওপর নির্ভর না করে /etc/sysctl.d/ ডিরেক্টরিতে সুনির্দিষ্ট ফাইলের মাধ্যমে কার্নেল প্যারামিটার স্থায়ীভাবে টিউন করুন।',
    },
  ],
  interview: [
    {
      q: {
        en: 'What is the architectural difference between a process and a thread in the Linux kernel?',
        bn: 'লিনাক্স কার্নেলে একটি প্রসেস এবং একটি থ্রেডের মধ্যে আর্কিটেকচারাল পার্থক্য কী?',
      },
      a: {
        en: 'In Linux, both processes and threads are unified under the task_struct descriptor created by the clone() system call. Threads are lightweight tasks that share memory address space and file descriptors with their parent, whereas separate processes maintain isolated virtual memory maps.',
        bn: 'লিনাক্সে প্রসেস এবং থ্রেড উভয়ই clone() সিস্টেম কলের মাধ্যমে তৈরি হওয়া task_struct কাঠামোর অধীনে পরিচালিত হয়। থ্রেডগুলো তাদের প্যারেন্ট প্রসেসের সাথে মেমোরি অ্যাড্রেস স্পেস ও ফাইল ডেসক্রিপ্টর ভাগ করে নেয়, যেখানে আলাদা প্রসেস সম্পূর্ণ পৃথক ভার্চুয়াল মেমোরি বজায় রাখে।',
      },
    },
    {
      q: {
        en: 'What causes a Linux process to enter the Uninterruptible Sleep (D state) and how do you resolve it?',
        bn: 'লিনাক্সে একটি প্রসেস কেন আনইন্টারাপ্টিবল স্লিপ (D স্টেট) এ চলে যায় এবং এটি কীভাবে সমাধান করা যায়?',
      },
      a: {
        en: 'The D state indicates that a process is blocked waiting directly for hardware I/O or a kernel disk mutex that cannot safely be interrupted by signals. The process cannot be terminated with SIGKILL until the underlying driver completes or hardware timeouts fire, directly inflating the system load average.',
        bn: 'ডি স্টেট নির্দেশ করে যে প্রসেসটি হার্ডওয়্যার আই/ও অথবা কার্নেল ডিস্ক লকের জন্য সরাসরি অপেক্ষমাণ যা সিগন্যাল দ্বারা বিঘ্নিত করা যায় না। হার্ডওয়্যার ড্রাইভের কাজ শেষ না হওয়া পর্যন্ত এটিকে SIGKILL দিয়েও থামানো যায় না এবং এটি সিস্টেমের লোড এভারেজ সরাসরি বাড়িয়ে দেয়।',
      },
    },
    {
      q: {
        en: 'How does the Linux Out-Of-Memory (OOM) Killer select which process to terminate during memory exhaustion?',
        bn: 'মেমোরি সম্পূর্ণ নিঃশেষ হয়ে গেলে লিনাক্স আউট-অব-মেমোরি (OOM) কিলার কোন প্রসেসটিকে বন্ধ করবে তা কীভাবে নির্বাচন করে?',
      },
      a: {
        en: 'The kernel calculates a badness score for every running process based on its proportion of physical RAM consumed and its oom_score_adj priority setting. Critical system daemons are protected with negative scores, while memory-hungry processes are terminated to reclaim page frames.',
        bn: 'কার্নেল শারীরিক র‍্যাম ব্যবহারের অনুপাত এবং oom_score_adj সেটিংসের ওপর ভিত্তি করে প্রতিটি চলমান প্রসেসের একটি স্কোর হিসাব করে। গুরুত্বপূর্ণ সিস্টেম প্রসেসগুলো নেতিবাচক স্কোরের মাধ্যমে সুরক্ষিত থাকে, এবং সবচেয়ে বেশি মেমোরি দখলকারী প্রসেসটিকে টার্মিনেট করা হয়।',
      },
    },
    {
      q: {
        en: 'How does systemd establish service startup ordering and dependency resolution at boot time?',
        bn: 'বুট হওয়ার সময় systemd কীভাবে সার্ভিসের শুরুর ক্রম এবং নির্ভরতা সমাধান পরিচালনা করে?',
      },
      a: {
        en: 'Systemd parses declarative unit files using Wants and Requires directives to establish structural dependencies, while After and Before directives dictate ordering. Services lacking inter-dependencies are launched concurrently in parallel, achieving rapid boot performance.',
        bn: 'systemd স্ট্রাকচারাল নির্ভরতা নির্ধারণের জন্য Wants এবং Requires নির্দেশাবলি এবং শুরুর ক্রম নিয়ন্ত্রণের জন্য After ও Before ব্যবহার করে। পরস্পরের ওপর নির্ভরশীল নয় এমন সার্ভিসগুলোকে সমান্তরালভাবে চালু করার মাধ্যমে এটি দ্রুত বুট নিশ্চিত করে।',
      },
    },
  ],
  realWorld: [
    {
      en: 'systemctl: Managing systemd service units, sockets, and targets across enterprise Linux servers.',
      bn: 'systemctl: এন্টারপ্রাইজ লিনাক্স সার্ভারে systemd সার্ভিস ইউনিট, সকেট এবং টার্গেট পরিচালনা করা।',
    },
    {
      en: 'journalctl: Querying structured binary system and application logs with time and priority filters.',
      bn: 'journalctl: সময় এবং অগ্রাধিকার ফিল্টারের মাধ্যমে স্ট্রাকচার্ড বাইনারি সিস্টেম ও অ্যাপ্লিকেশন লগ বিশ্লেষণ করা।',
    },
    {
      en: 'nftables: Next-generation packet filtering and stateful firewall rule management replacing iptables.',
      bn: 'nftables: iptables-এর বিকল্প হিসেবে আধুনিক প্যাকেট ফিল্টারিং ও স্টেটফুল ফায়ারওয়াল রুল পরিচালনা।',
    },
    {
      en: 'sysctl: Modifying dynamic Linux kernel runtime parameters to optimize TCP buffers and virtual memory.',
      bn: 'sysctl: টিসিপি বাফার ও ভার্চুয়াল মেমোরি অপ্টিমাইজ করতে লিনাক্স কার্নেলের রানটাইম প্যারামিটার কনফিগার করা।',
    },
  ],
};
