import type { Lesson } from '../../../lib/types';

export const ServicesAndTheServiceLesson: Lesson = {
  slug: 'services-and-the-service',
  tech: 'linux',
  title: {
    en: 'Linux Services & Systemd: Unit Files, Timers & Journalctl Logs',
    bn: 'Linux সার্ভিস ও Systemd: ইউনিট ফাইল, টাইমার ও জার্নালসিটিএল লগ'
  },
  summary: {
    en: 'Master Linux background service orchestration, unit file engineering, and telemetry logging across 10 structured topics. Understand systemd architecture and PID 1 supervision. Control daemon lifecycles with systemctl start, stop, reload, and enable. Deconstruct the three core sections of unit files: Unit, Service, and Install. Deploy production service definitions with automatic restarts. Replace classic cron jobs with modern monotonic and calendar Systemd Timers. Stream structured binary logs using journalctl -u and vacuum storage. Harden service execution environments with NoNewPrivileges, and generate unit files in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux সার্ভিস ম্যানেজমেন্ট, ইউনিট ফাইল আর্কিটেকচার এবং লগিং ব্যবস্থা আয়ত্তে আনুন। systemd আর্কিটেকচার এবং PID ১ তদারকি জানুন। systemctl start, stop, reload ও enable দিয়ে ডিমেন পরিচালনা শিখুন। ইউনিট ফাইলের তিনটি মূল অংশ (Unit, Service, Install) বিশ্লেষণ করুন। স্বয়ংক্রিয় রিস্টার্ট সুবিধাসহ প্রোডাকশন সার্ভিস ডেপ্লয় করা দেখুন। পুরনো ক্রনজবের বদলে আধুনিক systemd টাইমার ব্যবহারের নিয়ম বুঝুন। journalctl -u দিয়ে রিয়েল-টাইমে স্ট্রাকচার্ড বাইনারি লগ পর্যালোচনা এবং অতিরিক্ত ফাইল ভ্যাকুয়াম করা শিখুন। NoNewPrivileges দিয়ে সার্ভিস সিকিউরিটি মজবুত করতে পারেন এবং Node.js-এ ইউনিট ফাইল তৈরির উপায় জানুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'the-linux-release',
    tech: 'linux',
    title: {
      en: 'The Linux Production Release: Hardening, Networking & UFW Firewall',
      bn: 'Linux প্রোডাকশন রিলিজ: হার্ডেনিং, নেটওয়ার্কিং ও UFW ফায়ারওয়াল'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Systemd Init Architecture: PID 1 Supervision', bn: '১. Systemd ইনিট আর্কিটেকচার: PID ১ তদারকি' } },
    {
      type: 'para',
      text: {
        en: 'Systemd is the modern init system and service orchestrator for Linux distributions. Running as the initial process with Process ID 1 (PID 1), systemd initializes the hardware environment, manages cgroups resource isolation, and supervises system daemons. Unlike legacy SysVinit shell scripts that booted sequentially, systemd boots targets in parallel through socket activation and dependency resolution.',
        bn: 'Systemd হলো Linux ডিস্ট্রিবিউশনের আধুনিক ইনিট সিস্টেম এবং সার্ভিস ম্যানেজার। প্রসেস আইডি ১ (PID ১) হিসেবে সিস্টেমের শীর্ষে থেকে systemd কম্পিউটারের হার্ডওয়্যার সক্রিয় করে, cgroups দিয়ে রিসোর্স নিয়ন্ত্রণ করে এবং সকল ব্যাকগ্রাউন্ড সার্ভিস তদারকি করে। পুরনো SysVinit স্ক্রিপ্টের ধীরগতির বদলে systemd প্যারালাল প্রক্রিয়ায় সমস্ত সার্ভিস দ্রুত চালু করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `SYSTEMD UNIT TYPES & ROLES:
• .service : Manages executable background daemons (e.g. nginx.service)
• .timer   : Schedules periodic jobs replacing classic cron (e.g. backup.timer)
• .socket  : Implements socket activation listening on TCP/UDP ports
• .target  : Logical synchronization groups (e.g. multi-user.target, graphical.target)
• .mount   : Controls filesystem mount points equivalent to /etc/fstab entries`,
      caption: {
        en: 'Systemd unifies service management, scheduled timers, and hardware mounts under modular units.',
        bn: 'Systemd সার্ভিস, শিডিউল করা টাইমার এবং ড্রাইভ মাউন্টকে একটি সমন্বিত কাঠামোর অধীনে আনে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Systemd Service Lifecycle & Automatic Recovery', bn: 'Systemd সার্ভিস লাইফসাইকেল ও স্বয়ংক্রিয় রিকভারি' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Systemd Service Lifecycle Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="45" width="130" height="60" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="65" y="70" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">systemctl start</text>
<text x="65" y="90" font-size="9" fill="#cbd5e1" text-anchor="middle">Spawns ExecStart</text>

<path d="M135,75 L205,75" stroke="#38bdf8" stroke-width="2"/>
<text x="170" y="68" font-size="8" fill="#38bdf8" text-anchor="middle">Activate</text>

<rect x="210" y="45" width="140" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="280" y="70" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Active (Running)</text>
<text x="280" y="90" font-size="9" fill="#cbd5e1" text-anchor="middle">Supervised by PID 1</text>

<path d="M355,60 L425,30" stroke="#ef4444" stroke-width="2"/>
<text x="390" y="38" font-size="8" fill="#f87171" text-anchor="middle">Crash (Exit > 0)</text>

<rect x="430" y="10" width="150" height="50" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
<text x="505" y="32" font-size="10" font-weight="700" fill="#f87171" text-anchor="middle">Failed State</text>
<text x="505" y="48" font-size="8" fill="#cbd5e1" text-anchor="middle">Restart=always Triggered</text>

<path d="M505,65 L505,100 L355,100" stroke="#fbbf24" stroke-width="2" stroke-dasharray="4,4"/>
<text x="440" y="95" font-size="8" fill="#fbbf24" text-anchor="middle">RestartSec=5s</text>

<path d="M280,110 L280,140 L140,140" stroke="#94a3b8" stroke-width="2"/>
<text x="210" y="135" font-size="8" fill="#cbd5e1" text-anchor="middle">systemctl stop</text>
<rect x="0" y="115" width="135" height="45" rx="6" fill="#0f172a" stroke="#94a3b8"/>
<text x="67" y="142" font-size="10" fill="#94a3b8" text-anchor="middle">Inactive (Dead)</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Daemon Management: The systemctl Suite', bn: '২. ডিমেন ম্যানেজমেন্ট: systemctl কমান্ড সেট' } },
    {
      type: 'para',
      text: {
        en: 'The systemctl command is the primary control interface for services. Engineers use start and stop for immediate execution, restart to cycle processes, and reload to reread configuration files without closing active client TCP connections. The status command prints live operational health, process trees, and the most recent journal log messages.',
        bn: 'সার্ভিস পরিচালনার মূল ইন্টারফেস হলো systemctl কমান্ড। প্রকৌশলীরা সার্ভিস চালানো ও বন্ধ করতে start এবং stop ব্যবহার করেন; পুরো প্রসেস রিস্টার্ট করতে restart দেন; এবং চলমান সংযোগ বিচ্ছিন্ন না করে কনফিগারেশন আপডেট করতে reload দেন। status কমান্ডের মাধ্যমে লাইভ অবস্থা, পিআইডি এবং সর্বশেষ এরর লগ পর্যবেক্ষণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Check real-time status of Nginx web server:
systemctl status nginx
# Output:
# ● nginx.service - A high performance web server and a reverse proxy
#      Loaded: loaded (/lib/systemd/system/nginx.service; enabled)
#      Active: active (running) since Wed 2026-10-01 10:00:00 UTC; 2h ago
#    Main PID: 1020 (nginx)
#       Tasks: 3 (limit: 4680)
#      Memory: 18.2M
#         CPU: 1.240s
#      CGroup: /system.slice/nginx.service
#              ├─1020 "nginx: master process /usr/sbin/nginx"
#              └─1021 "nginx: worker process"

# Reload configuration without zero downtime:
sudo systemctl reload nginx`,
      caption: {
        en: 'systemctl status gives instant visibility into memory, CPU time, and running worker processes.',
        bn: 'systemctl status সার্ভিসটির মেমরি, সিপিইউ খরচ এবং ওয়ার্কার প্রসেসের পরিষ্কার চিত্র তুলে ধরে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Boot Persistence: enable vs disable', bn: '৩. বুট পারসিসটেন্স: enable বনাম disable' } },
    {
      type: 'para',
      text: {
        en: 'Starting a service with systemctl start affects only the current runtime session: if the server reboots, the service will not start automatically. To ensure a service launches on system boot, execute systemctl enable. Under the hood, this creates a symbolic link in /etc/systemd/system/multi-user.target.wants/ pointing to the unit definition file.',
        bn: 'শুধুমাত্র systemctl start দিলে সার্ভিসটি বর্তমান সেশনের জন্য চালু হয়: সার্ভার রিস্টার্ট দিলে এটি আর নিজে থেকে চালু হবে না। কম্পিউটার বুট হওয়ার সাথে সাথে সার্ভিসটি স্বয়ংক্রিয়ভাবে চালু রাখতে systemctl enable দিতে হয়। এটি অভ্যন্তরীণভাবে /etc/systemd/system/multi-user.target.wants/ ফোল্ডারে একটি সিম্বলিক লিঙ্ক তৈরি করে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Enable PostgreSQL database to start automatically upon server boot:
sudo systemctl enable postgresql
# Output: Created symlink /etc/systemd/system/multi-user.target.wants/postgresql.service → /lib/systemd/system/postgresql.service.

# Check if a service is configured for boot startup:
systemctl is-enabled postgresql
# Output: enabled

# Disable service from launching on boot:
sudo systemctl disable postgresql`,
      caption: {
        en: 'Enabling a service creates a target symlink; disabling removes the symlink pointer.',
        bn: 'সার্ভিস enable করলে বুট ফোল্ডারে সিম্বলিক লিঙ্ক তৈরি হয়; disable করলে লিঙ্ক মুছে যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Anatomy of a Service Unit File: [Unit], [Service], [Install]', bn: '৪. সার্ভিস ইউনিট ফাইলের গঠন: [Unit], [Service], [Install]' } },
    {
      type: 'para',
      text: {
        en: 'Systemd service files are declarative ini-style manifests divided into three clear sections. The [Unit] block defines metadata, documentation links, and startup sequencing dependencies like After=network.target. Next, the [Service] block specifies the exact execution command (ExecStart), runtime user, working directory, and restart policies. Finally, the [Install] block defines the target level that pulls in the service upon boot.',
        bn: 'Systemd সার্ভিস ফাইলগুলো তিনটি পরিষ্কার সেকশনে বিভক্ত কনফিগারেশন ফাইল। [Unit] ব্লকে মেটাডেটা এবং নেটওয়ার্ক চালু হওয়ার পর চলার শর্ত (After=network.target) থাকে। এরপর [Service] ব্লকে মূল প্রোগ্রাম চালানোর কমান্ড (ExecStart), ইউজার, ওয়ার্কিং ডিরেক্টরি এবং রিস্টার্টের নিয়ম থাকে। সবশেষে [Install] ব্লকে কোন বুট লেভেলে এটি কাজ করবে তা নির্ধারণ করা থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'ini',
      code: `[Unit]
Description=Production Node.js API Service
Documentation=https://api.internal.corp/docs
After=network.target postgresql.service
Wants=postgresql.service

[Service]
Type=simple
User=deploy
Group=deploy
WorkingDirectory=/var/www/api
EnvironmentFile=/etc/api.env
ExecStart=/usr/bin/node /var/www/api/dist/server.js
Restart=always
RestartSec=5s
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target`,
      caption: {
        en: 'A production service unit with restart resilience and dependency ordering on postgresql.',
        bn: 'একটি প্রোডাকশন সার্ভিস ইউনিট যা ক্র্যাশ করলে ৫ সেকেন্ড পর নিজে থেকেই রিস্টার্ট নেয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Deploying Custom Services: /etc/systemd/system/', bn: '৫. কাস্টম সার্ভিস ডেপ্লয়: /etc/systemd/system/' } },
    {
      type: 'para',
      text: {
        en: 'Custom system services must always be placed inside /etc/systemd/system/. Never place custom unit files in /lib/systemd/system/, as package updates overwrite that directory. Whenever you create or modify a service unit file, you must run systemctl daemon-reload so systemd recompiles its internal dependency graph and registers the new unit.',
        bn: 'কাস্টম সার্ভিস ফাইল সর্বদা /etc/systemd/system/ ফোল্ডারে রাখতে হয়। কখনো /lib/systemd/system/-এ ফাইল রাখবেন না, কারণ প্যাকেজ আপগ্রেড দিলে সেখানকার ফাইল মুছে যায়। যেকোনো নতুন ইউনিট ফাইল তৈরি বা এডিট করার পর systemctl daemon-reload চালানো আবশ্যক, যাতে systemd নতুন কনফিগারেশন মেমরিতে রিফ্রেশ করতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Install custom unit file:
sudo cp myapp.service /etc/systemd/system/myapp.service

# Step 2: Set strict 0644 permissions (owner root):
sudo chmod 0644 /etc/systemd/system/myapp.service

# Step 3: Instruct systemd to reload all unit definitions:
sudo systemctl daemon-reload

# Step 4: Start and enable the new service:
sudo systemctl enable --now myapp.service
# (--now flag enables and starts in a single atomic command!)`,
      caption: {
        en: 'Always run daemon-reload after unit file edits; use --now to enable and start simultaneously.',
        bn: 'ইউনিট ফাইল বদলালে সর্বদা daemon-reload দিন; --now দিয়ে একসাথে চালু ও enable করুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Systemd Timers: Modern Replacement for Cron', bn: '৬. Systemd টাইমার: ক্রনজবের আধুনিক বিকল্প' } },
    {
      type: 'para',
      text: {
        en: 'Classic crontab lacks observability, fails to catch up on missed jobs if the server was powered down, and routes error output only through unconfigured local email. Systemd Timers (.timer units paired with matching .service units) solve these issues with sub-second accuracy, catchup execution via Persistent=true, and full logging in journalctl.',
        bn: 'ঐতিহ্যবাহী ক্রনজবে সঠিক মনিটরিং থাকে না এবং সার্ভার বন্ধ থাকলে কোনো কাজ মিস হলে তা পরে আর চলে না। এর বিপরীতে Systemd টাইমার (.timer ফাইল) আধুনিক সমাধান দেয়: Persistent=true ফ্ল্যাগ দিয়ে সার্ভার বন্ধের সময় মিস হওয়া কাজগুলো পরে চালিয়ে নেয় এবং প্রতিটি কাজের বিস্তারিত লগ journalctl-এ সংরক্ষণ করে।'
      }
    },
    {
      type: 'code',
      lang: 'ini',
      code: `# /etc/systemd/system/nightly-backup.timer
[Unit]
Description=Trigger Nightly Database Backup Service
Requires=nightly-backup.service

[Timer]
# Run every night at 02:00 UTC:
OnCalendar=*-*-* 02:00:00
# Run immediately upon boot if system was offline at 02:00:
Persistent=true
Unit=nightly-backup.service

[Install]
WantedBy=timers.target`,
      caption: {
        en: 'Systemd timers use OnCalendar declarations and catch up automatically on missed jobs.',
        bn: 'Systemd টাইমার ক্যালেন্ডার অনুযায়ী চলে এবং মিস হওয়া কাজ স্বয়ংক্রিয়ভাবে সম্পন্ন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Structured Logging with journalctl', bn: '৭. journalctl দিয়ে স্ট্রাকচার্ড লগিং' } },
    {
      type: 'para',
      text: {
        en: 'Systemd consolidates console output and syslog messages into an indexed binary journal managed by systemd-journald. The journalctl command provides instantaneous filtering across service units, priority levels, and chronological time windows without parsing slow flat text files.',
        bn: 'Systemd সমস্ত কনসোল আউটপুট এবং সিস্টেম বার্তাকে একটি সুসংগঠিত বাইনারি জার্নালে জমা করে। journalctl কমান্ডের মাধ্যমে ধীরগতির সাধারণ টেক্সট ফাইল না খুঁজে সরাসরি সার্ভিস নাম, সময় ও এরর লেভেল দিয়ে খুব দ্রুত যেকোনো লগ ফিল্টার করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Follow live logs for myapp in real time (equivalent to tail -f):
journalctl -u myapp.service -f

# Filter to show only ERROR and CRITICAL priority entries:
journalctl -u myapp.service -p err

# Query logs emitted within a specific time window:
journalctl -u myapp.service --since "2026-10-01 08:00:00" --until "2026-10-01 10:00:00"

# Print last 50 lines without paging:
journalctl -u myapp.service -n 50 --no-pager`,
      caption: {
        en: 'journalctl -f streams live logs; -p err isolates operational errors and fatal exceptions.',
        bn: 'journalctl -f লাইভ লগ প্রদর্শন করে; -p err সিস্টেমের মারাত্মক এররগুলো আলাদা করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Journal Storage & Vacuuming', bn: '৮. জার্নাল স্টোরেজ ও ডিস্ক পরিচ্ছন্নতা' } },
    {
      type: 'para',
      text: {
        en: 'Persistent journal logs are saved in /var/log/journal/. If left unchecked on high-traffic servers, binary logs can consume excessive gigabytes of disk space. Administrators enforce storage limits using journalctl vacuum commands by size or retention age, and configure max limits in /etc/systemd/journald.conf.',
        bn: 'সার্ভারের স্থায়ী লগ ফাইলগুলো /var/log/journal/ ফোল্ডারে সংরক্ষিত হয়। ব্যস্ত প্রোডাকশন সার্ভারে নজর না দিলে এই বাইনারি লগ গিগাবাইট আকারে ডিস্কের জায়গা দখল করতে পারে। অ্যাডমিনিস্ট্রেটররা journalctl vacuum কমান্ড ব্যবহার করে নির্দিষ্ট সাইজ বা দিন অনুযায়ী পুরনো লগ ফাইল মুছে ডিস্কের জায়গা খালি করেন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Check current disk space consumed by systemd journals:
journalctl --disk-usage
# Output: Archived and active journals take up 1.8G in the filesystem.

# Retain only the most recent 500 Megabytes of logs:
sudo journalctl --vacuum-size=500M

# Purge logs older than 14 days:
sudo journalctl --vacuum-time=14d`,
      caption: {
        en: 'Vacuuming prevents binary journal logs from exhausting root partition storage capacity.',
        bn: 'ভ্যাকুয়ামিং অতিরিক্ত লগ মুছে ফেলে রুট ড্রাইভের স্টোরেজ ফুল হওয়া থেকে রক্ষা করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Hardening Service Execution: Sandboxing Directives', bn: '৯. সার্ভিস সিকিউরিটি হার্ডেনিং: স্যান্ডবক্সিং নিয়ম' } },
    {
      type: 'para',
      text: {
        en: 'Systemd incorporates kernel-level sandboxing directives directly within unit files. Even if an attacker compromises a web application via Remote Code Execution, hardened unit directives block access to user homes, restrict write operations to system binaries, and prohibit privilege escalation.',
        bn: 'Systemd ইউনিট ফাইলের ভেতরেই সরাসরি কার্নেল-স্তরের নিরাপত্তা স্যান্ডবক্সিং সুবিধা প্রদান করে। কোনো আক্রমণকারী ওয়েব অ্যাপ্লিকেশনের দুর্বলতা কাজে লাগিয়ে সার্ভারে ঢুকলেও এই নিয়মগুলো তাকে হোম ডিরেক্টরিতে ঢুকতে বাধা দেয় এবং রুট ক্ষমতা দখল করা প্রতিহত করে।'
      }
    },
    {
      type: 'code',
      lang: 'ini',
      code: `# SECURITY HARDENING DIRECTIVES INSIDE [Service]:
# Prohibit process from gaining new privileges (disables SUID exploitation):
NoNewPrivileges=true

# Mount /usr, /boot, and /etc as strictly READ-ONLY for this service:
ProtectSystem=strict

# Hide all /home directories completely from the application:
ProtectHome=true

# Give service an isolated volatile /tmp directory invisible to other users:
PrivateTmp=true

# Restrict network protocols to IPv4 and IPv6 only:
RestrictAddressFamilies=AF_INET AF_INET6`,
      caption: {
        en: 'Declarative systemd sandboxing protects the host system against compromised daemon processes.',
        bn: 'systemd স্যান্ডবক্সিং অ্যাপ্লিকেশন হ্যাক হলেও মূল সার্ভারকে সম্পূর্ণ সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Programmatic Service Generation in Node.js', bn: '১০. Node.js-এ স্বয়ংক্রিয় সার্ভিস ফাইল তৈরি' } },
    {
      type: 'para',
      text: {
        en: 'Here is a Node.js utility that generates hardened systemd service manifests dynamically, writes them to /etc/systemd/system/, and automates daemon-reload.',
        bn: 'নিচে ডায়নামিকভাবে নিরাপদ systemd সার্ভিস ইউনিট ফাইল তৈরি করা এবং তা সার্ভারে লোড করার একটি Node.js অটোমেশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

function generateServiceUnit(config) {
  return \`[Unit]
Description=\${config.description}
After=network.target

[Service]
Type=simple
User=\${config.user}
WorkingDirectory=\${config.workDir}
ExecStart=\${config.execCommand}
Restart=always
RestartSec=5s
NoNewPrivileges=true
ProtectSystem=strict
PrivateTmp=true

[Install]
WantedBy=multi-user.target
\`;
}

const unitContent = generateServiceUnit({
  description: "Automated Microservice Worker",
  user: "deploy",
  workDir: "/opt/worker",
  execCommand: "/usr/bin/node /opt/worker/index.js"
});

console.log("Generated Hardened Unit Manifest:\\n" + unitContent);
console.log("Service configuration generation completed successfully");
// Output: Service configuration generation completed successfully`,
      caption: {
        en: 'Automated unit generation ensures standardized security sandboxing across all backend services.',
        bn: 'অটোমেটেড ইউনিট তৈরির মাধ্যমে প্রতিটি সার্ভিসে একই ধরনের মজবুত নিরাপত্তা নিশ্চিত করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-srv-ex1',
      kind: 'predict',
      topic: 'linux: daemon-reload required command',
      question: {
        en: 'Which systemctl subcommand must be executed whenever a unit file in /etc/systemd/system/ is created or modified?',
        bn: '/etc/systemd/system/ ফোল্ডারে কোনো ইউনিট ফাইল তৈরি বা এডিট করার পর systemctl-এর কোন সাবকমান্ডটি চালানো আবশ্যক?',
      },
      code: `/* Command to reload systemd internal state: */
/* sudo systemctl ______-reload */`,
      answer: 'daemon',
      accept: ['daemon', 'daemon-reload'],
      hint: {
        en: 'daemon-reload (daemon).',
        bn: 'daemon-reload (daemon)।'
      },
      explanation: {
        en: 'systemctl daemon-reload forces systemd to re-read all unit files and recompile its internal execution graph.',
        bn: 'systemctl daemon-reload দিলে systemd নতুন সমস্ত ইউনিট ফাইল মেমরিতে রিফ্রেশ করে নেয়।'
      }
    },
    {
      id: 'lnx-srv-ex2',
      kind: 'mcq',
      topic: 'linux: persistent catchup timer setting',
      question: {
        en: 'Which setting inside a Systemd Timer unit ensures that a scheduled job runs immediately on boot if the server was powered off during its scheduled window?',
        bn: 'Systemd টাইমার ফাইলে কোন সেটিংটি চালু থাকলে নির্ধারিত সময়ে সার্ভার বন্ধ থাকলেও বুট হওয়ার সাথে সাথে মিস হওয়া কাজগুলো চলে?',
      },
      options: [
        { en: 'Persistent=true', bn: 'Persistent=true' },
        { en: 'Restart=always', bn: 'Restart=always' },
        { en: 'NoNewPrivileges=true', bn: 'NoNewPrivileges=true' },
        { en: 'Type=simple', bn: 'Type=simple' }
      ],
      answer: 0,
      hint: {
        en: 'Persistent=true.',
        bn: 'Persistent=true।'
      },
      explanation: {
        en: 'Persistent=true tells systemd to record when the timer last triggered on disk and catch up on missed runs.',
        bn: 'Persistent=true ডিস্কে শেষ চলার সময় মনে রাখে এবং মিস হওয়া কাজ বুটের পর দ্রুত সম্পন্ন করে।'
      }
    },
    {
      id: 'lnx-srv-ex3',
      kind: 'mcq',
      topic: 'linux: live log streaming flag for journalctl',
      question: {
        en: 'Which command streams live log outputs from a service in real time, mirroring the behavior of "tail -f"?',
        bn: 'কোন কমান্ডটি "tail -f"-এর মতো রিয়েল-টাইমে কোনো সার্ভিসের লাইভ লগ স্ক্রিনে প্রদর্শন করে?'
      },
      options: [
        { en: 'journalctl -u myapp.service -f', bn: 'journalctl -u myapp.service -f' },
        { en: 'systemctl show myapp.service', bn: 'systemctl show myapp.service' },
        { en: 'journalctl --disk-usage', bn: 'journalctl --disk-usage' },
        { en: 'cat /var/log/syslog', bn: 'cat /var/log/syslog' }
      ],
      answer: 0,
      hint: {
        en: 'journalctl -u <service> -f (-f for follow).',
        bn: 'journalctl -u <service> -f (-f মানে ফলো)।'
      },
      explanation: {
        en: 'The -f flag instructs journalctl to follow live entries as they are committed to the system journal.',
        bn: '-f ফ্ল্যাগ journalctl-কে সরাসরি লাইভ আসা নতুন লগ প্রদর্শন করার নির্দেশ দেয়।'
      }
    }
  ],
  quiz: {
    id: 'lnx-srv-quiz',
    title: { en: 'Systemd Services & Journalctl Quiz', bn: 'Systemd সার্ভিস ও জার্নালসিটিএল কুইজ' },
    questions: [
      {
        id: 'lsrvq1',
        kind: 'mcq',
        topic: 'linux: systemctl reload versus restart',
        question: {
          en: 'Why is "systemctl reload" preferred over "systemctl restart" when pushing Nginx configuration changes in production?',
          bn: 'প্রোডাকশনে Nginx কনফিগারেশন আপডেটের সময় "systemctl restart"-এর চেয়ে "systemctl reload" কেন বেশি গ্রহণযোগ্য?'
        },
        options: [
          { en: 'Reload instructs the daemon to reread configurations in-flight without dropping active client connections, whereas restart kills and recreates the process', bn: 'Reload চলমান ক্লায়েন্ট সংযোগ বিচ্ছিন্ন না করেই নতুন কনফিগারেশন প্রয়োগ করে, আর restart পুরো প্রসেস বন্ধ করে ফেলে' },
          { en: 'Reload deletes all temporary files', bn: 'সব ফাইল মুছে ফেলে' },
          { en: 'Reload changes the root password', bn: 'পাসওয়ার্ড বদলায়' },
          { en: 'There is zero difference between them', bn: 'দুটোর মধ্যে কোনো পার্থক্য নেই' }
        ],
        answer: 0,
        hint: {
          en: 'Reload preserves active connections.',
          bn: 'Reload চলমান সংযোগ অক্ষত রাখে।'
        },
        explanation: {
          en: 'Reload dispatches SIGHUP, allowing worker processes to finish in-flight requests and spawn new workers gracefully.',
          bn: 'Reload সিগন্যাল পাঠিয়ে চলমান রিকোয়েস্ট শেষ করার সুযোগ দেয় এবং জিরো-ডাউনটাইম নিশ্চিত করে।'
        }
      },
      {
        id: 'lsrvq2',
        kind: 'mcq',
        topic: 'linux: nonewprivileges security directive',
        question: {
          en: 'What security benefit does "NoNewPrivileges=true" provide when added to a systemd service unit?',
          bn: 'Systemd সার্ভিস ফাইলে "NoNewPrivileges=true" যোগ করলে কোন মূল নিরাপত্তা সুবিধাটি পাওয়া যায়?'
        },
        options: [
          { en: 'It prevents the child process or any spawned sub-process from escalating privileges via SUID binaries', bn: 'এটি প্রোগ্রাম বা তার সাব-প্রসেসকে কোনো SUID ফাইল কাজে লাগিয়ে রুট বা উচ্চ ক্ষমতা দখল করা থেকে প্রতিহত করে' },
          { en: 'It turns off the CPU cache', bn: 'সিপিইউ ক্যাশ বন্ধ করে' },
          { en: 'It reduces internet bandwidth costs', bn: 'ইন্টারনেট খরচ কমায়' },
          { en: 'It disables hard drive writes completely', bn: 'হার্ডডিস্কে লেখা বন্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Blocks privilege escalation via SUID.',
          bn: 'SUID-এর মাধ্যমে রুট ক্ষমতা দখল ঠেকায়।'
        },
        explanation: {
          en: 'NoNewPrivileges sets the PR_SET_NO_NEW_PRIVS bit in the kernel, making it impossible to gain privileges through SUID executables.',
          bn: 'NoNewPrivileges কার্নেল ফ্ল্যাগ সক্রিয় করে, ফলে হ্যাক হলেও আক্রমণকারী কোনোভাবেই রুট হতে পারে না।'
        }
      },
      {
        id: 'lsrvq3',
        kind: 'mcq',
        topic: 'linux: custom unit file directory priority',
        question: {
          en: 'Where should administrators place custom system service unit files to ensure they override system defaults and survive OS updates?',
          bn: 'অপারেটিং সিস্টেম আপডেটের পরও সুরক্ষিত রাখতে এবং কাস্টম নিয়ম কার্যকর করতে সার্ভিস ফাইলগুলো কোথায় রাখা উচিত?'
        },
        options: [
          { en: '/etc/systemd/system/', bn: '/etc/systemd/system/ ডিরেক্টরি' },
          { en: '/lib/systemd/system/', bn: '/lib/systemd/system/ ডিরেক্টরি' },
          { en: '/tmp/systemd/', bn: '/tmp/systemd/ ডিরেক্টরি' },
          { en: '/usr/share/systemd/', bn: '/usr/share/systemd/ ডিরেক্টরি' }
        ],
        answer: 0,
        hint: {
          en: '/etc/systemd/system/ directory.',
          bn: '/etc/systemd/system/ ফোল্ডার।'
        },
        explanation: {
          en: '/etc/systemd/system/ has the highest priority and is reserved for administrator custom units. /lib is managed by package managers.',
          bn: '/etc/systemd/system/ ফোল্ডারের অগ্রাধিকার সর্বোচ্চ এবং প্যাকেজ আপডেটে এখানকার ফাইল ক্ষতিগ্রস্ত হয় না।'
        }
      },
      {
        id: 'lsrvq4',
        kind: 'mcq',
        topic: 'linux: journalctl disk cleanup command',
        question: {
          en: 'Which command cleans up archived systemd journal logs so that total disk consumption does not exceed 500 Megabytes?',
          bn: 'কোন কমান্ডটি পুরনো systemd লগগুলো সাফ করে নিশ্চিত করে যে মোট লগের সাইজ ৫০০ মেগাবাইটের বেশি হবে না?'
        },
        options: [
          { en: 'journalctl --vacuum-size=500M', bn: 'journalctl --vacuum-size=500M কমান্ড' },
          { en: 'systemctl purge logs', bn: 'systemctl purge logs কমান্ড' },
          { en: 'rm -rf /var/log', bn: 'rm -rf /var/log কমান্ড' },
          { en: 'killall journald', bn: 'killall journald কমান্ড' }
        ],
        answer: 0,
        hint: {
          en: 'journalctl --vacuum-size=500M.',
          bn: 'journalctl --vacuum-size=500M।'
        },
        explanation: {
          en: 'The --vacuum-size flag prunes oldest journal files until total disk usage falls below the specified threshold.',
          bn: '--vacuum-size ফ্ল্যাগ পুরনো লগগুলো ডিলিট করে মোট ডিস্ক ব্যবহার নির্দিষ্ট সীমার মধ্যে নামিয়ে আনে।'
        }
      }
    ]
  }
};
