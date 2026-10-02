import type { Lesson } from '../../../lib/types';

export const PackagesAndThePackageLesson: Lesson = {
  slug: 'packages-and-the-package',
  tech: 'linux',
  title: {
    en: 'Linux Package Management: APT, DPKG & Repository Architecture',
    bn: 'Linux প্যাকেজ ম্যানেজমেন্ট: APT, DPKG ও রিপোজিটরি আর্কিটেকচার'
  },
  summary: {
    en: 'Master Debian and Ubuntu package management, repository architectures, and automated patching across 10 structured topics. Contrast low-level dpkg archive extractors against high-level APT dependency graph solvers. Deconstruct .deb archive internals including control and data payloads. Query package file ownership using dpkg -S. Refresh remote mirror caches with apt update and upgrade safely. Configure third-party repositories using modern GPG keyrings in /etc/apt/keyrings. Clean orphaned dependencies with autoremove and purge configs. Automate security patches with unattended-upgrades, and inspect installed packages in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে ডেবিয়ান ও উবুন্টু প্যাকেজ ব্যবস্থাপনা, রিপোজিটরি আর্কিটেকচার এবং স্বয়ংক্রিয় সিকিউরিটি প্যাচিং বিস্তারিত শিখুন। লো-লেভেল dpkg আর্কাইভ এক্সট্রাক্টর এবং হাই-লেভেল APT ডিপেন্ডেন্সি গ্রাফ সলভারের পার্থক্য জানুন। কন্ট্রোল এবং ডেটা পে-লোডসহ .deb আর্কাইভের ভেতরের গঠন পর্যালোচনা করুন। dpkg -S দিয়ে ফাইলের প্যাকেজ মালিকানা খুঁজে বের করার কৌশল দেখুন। apt update ও apt upgrade দিয়ে দূরবর্তী মিরর থেকে নিরাপদ সফটওয়্যার আপডেট দিন। /etc/apt/keyrings-এ আধুনিক জিপিজির মাধ্যমে থার্ড-পার্টি রিপোজিটরি যোগের নিয়ম জানুন। autoremove ও purge দিয়ে অপ্রয়োজনীয় ফাইল সাফ করুন। স্বয়ংক্রিয় সিকিউরিটি আপডেট ব্যবস্থাপনা আয়ত্ত করুন এবং Node.js-এ ইনস্টল করা প্যাকেজ অডিট চালান।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'services-and-the-service',
    tech: 'linux',
    title: {
      en: 'Linux Services & Systemd: Unit Files, Timers & Journalctl Logs',
      bn: 'Linux সার্ভিস ও Systemd: ইউনিট ফাইল, টাইমার ও জার্নালসিটিএল লগ'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Package Managers: Low-Level dpkg vs High-Level APT', bn: '১. প্যাকেজ ম্যানেজার: লো-লেভেল dpkg বনাম হাই-লেভেল APT' } },
    {
      type: 'para',
      text: {
        en: 'Linux software installation is structured in two distinct layers. The low-level tool (dpkg in Debian/Ubuntu or rpm in RHEL) unpacks and installs individual archive files directly on disk, but it lacks network connectivity and cannot resolve missing dependencies. The high-level package manager (APT or DNF) queries remote mirrors over HTTP, calculates dependency trees, and downloads prerequisite packages automatically.',
        bn: 'Linux সিস্টেমে সফটওয়্যার ইনস্টলেশন দুটি ধাপে সম্পন্ন হয়। লো-লেভেল টুল (Debian/Ubuntu-তে dpkg বা RedHat-এ rpm) সরাসরি ডিস্কে একক প্যাকেজ ফাইল আনপ্যাক করে, তবে এতে কোনো নেটওয়ার্ক সংযোগ নেই এবং এটি প্রয়োজনীয় ডিপেন্ডেন্সি নিজে সমাধান করতে পারে না। অন্যদিকে হাই-লেভেল টুল (APT বা DNF) ইন্টারনেটের মাধ্যমে দূরবর্তী মিরর থেকে ডিপেন্ডেন্সি হিসাব করে সব ফাইল একসাথে ডাউনলোড ও ইনস্টল করে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `LINUX PACKAGE MANAGEMENT STACK:
User Command: apt install nginx
     │
     ▼
┌─────────────────────────────────────────────────────────────┐
│ High-Level Dependency Solver: APT (Advanced Package Tool)    │
│ • Reads /etc/apt/sources.list & /etc/apt/keyrings/          │
│ • Downloads Release file, validates GPG cryptographic hash   │
│ • Resolves dependency tree: libssl, libc6, nginx-common      │
│ • Fetches .deb packages via HTTP/HTTPS                      │
└──────────────────────────────┬──────────────────────────────┘
                               │
                               ▼ Passes .deb archive list
┌─────────────────────────────────────────────────────────────┐
│ Low-Level Package Unpacker: DPKG (Debian Package Manager)    │
│ • Executes pre-installation hooks                           │
│ • Extracts binaries to /usr/bin and configs to /etc/nginx   │
│ • Updates /var/lib/dpkg/status local installation database  │
│ • Runs post-installation service startup hooks              │
└─────────────────────────────────────────────────────────────┘`,
      caption: {
        en: 'APT solves dependency graphs and downloads files; dpkg executes local disk unpacking.',
        bn: 'APT ইন্টারনেটের মাধ্যমে ডিপেন্ডেন্সি নামায়; dpkg লোকাল ডিস্কে ফাইল ইনস্টল করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'The Debian .deb Package Anatomy', bn: 'ডেবিয়ান .deb প্যাকেজের অভ্যন্তরীণ গঠন' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Deb Package Architecture">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="190" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="95" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">debian-binary</text>
<text x="95" y="55" font-size="9" fill="#cbd5e1" text-anchor="middle">Format Version String</text>
<rect x="15" y="70" width="160" height="55" rx="4" fill="#1e293b"/>
<text x="95" y="95" font-size="10" fill="#4ade80" text-anchor="middle">"2.0\n"</text>
<text x="95" y="112" font-size="8" fill="#94a3b8" text-anchor="middle">Specifies .deb archive protocol</text>

<rect x="225" y="10" width="200" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="325" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">control.tar.xz</text>
<text x="325" y="52" font-size="9" fill="#cbd5e1" text-anchor="middle">Package Metadata & Hooks</text>
<text x="325" y="72" font-size="8" fill="#cbd5e1" text-anchor="middle">• control (Name, Version, Depends)</text>
<text x="325" y="88" font-size="8" fill="#cbd5e1" text-anchor="middle">• preinst / postinst (Lifecycle scripts)</text>
<text x="325" y="104" font-size="8" fill="#cbd5e1" text-anchor="middle">• prerm / postrm (Teardown hooks)</text>
<text x="325" y="120" font-size="8" fill="#fbbf24" text-anchor="middle">• md5sums (Checksums)</text>

<rect x="460" y="10" width="200" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="560" y="32" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">data.tar.xz</text>
<text x="560" y="52" font-size="9" fill="#cbd5e1" text-anchor="middle">Physical Filesystem Payload</text>
<text x="560" y="75" font-size="8" fill="#cbd5e1" text-anchor="middle">• usr/bin/nginx (Compiled binary)</text>
<text x="560" y="93" font-size="8" fill="#cbd5e1" text-anchor="middle">• etc/nginx/nginx.conf (Config)</text>
<text x="560" y="111" font-size="8" fill="#cbd5e1" text-anchor="middle">• usr/share/man/man8 (Docs)</text>
<text x="560" y="127" font-size="8" fill="#4ade80" text-anchor="middle">Extracted directly to / root</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. The Structure of a Debian Archive (.deb)', bn: '২. ডেবিয়ান আর্কাইভের (.deb) গঠন' } },
    {
      type: 'para',
      text: {
        en: 'A .deb package is not a proprietary black box: it is a standard Unix ar archive containing three files. The debian-binary file specifies package format version 2.0. The control.tar.xz archive holds metadata including dependency prerequisites, package descriptions, and lifecycle installation scripts (preinst, postinst). The data.tar.xz archive holds the actual compiled executable binaries, libraries, and default configuration files.',
        bn: 'একটি .deb প্যাকেজ কোনো দুর্বোধ্য ফাইল নয়: এটি মূলত একটি সাধারণ ইউনিক্স ar আর্কাইভ যা তিনটি ফাইল ধারণ করে। debian-binary ফাইলটি প্যাকেজের ভার্সন ২.০ নির্দিষ্ট করে। control.tar.xz ফাইলে প্যাকেজের নাম, নির্ভরতা তালিকা এবং ইনস্টলেশন স্ক্রিপ্ট (preinst, postinst) থাকে। আর data.tar.xz ফাইলে থাকে আসল কম্পাইল করা বাইনারি প্রোগ্রাম, লাইব্রেরি এবং কনফিগারেশন ফাইল।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Deconstruct an arbitrary .deb package without installing it:
ar -x htop_3.2.2-1_amd64.deb

# Inspect the three extracted member files:
ls -lh
# Output:
# -rw-r--r-- 1 root root    4 debian-binary
# -rw-r--r-- 1 root root 2.1K control.tar.xz
# -rw-r--r-- 1 root root 142K data.tar.xz

# Inspect the metadata control manifest:
tar -xf control.tar.xz
cat control | grep -E "Package|Version|Depends"
# Output:
# Package: htop
# Version: 3.2.2-1
# Depends: libc6 (>= 2.34), libncursesw6 (>= 6.1)`,
      caption: {
        en: 'The control file declares strict semantic version requirements on shared C libraries.',
        bn: 'কন্ট্রোল ফাইলটি সি লাইব্রেরির ওপর প্যাকেজের সুনির্দিষ্ট ভার্সন নির্ভরতা ঘোষণা করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Low-Level Package Inspection with dpkg', bn: '৩. dpkg দিয়ে প্যাকেজ বিশ্লেষণ ও ট্র্যাকিং' } },
    {
      type: 'para',
      text: {
        en: 'When debugging server anomalies, system administrators use dpkg to inspect locally installed assets. The dpkg -l command lists all installed packages and operational states. Running dpkg -L <package> reveals every physical file and folder placed on disk by a package. Running dpkg -S /path/to/file determines which installed package owns that specific binary.',
        bn: 'সার্ভারে কোনো ত্রুটি দেখা দিলে প্রকৌশলীরা dpkg দিয়ে লোকাল ফাইল ও প্যাকেজ পরীক্ষা করেন। dpkg -l কমান্ড সিস্টেমে ইনস্টল থাকা সমস্ত সফটওয়্যারের তালিকা দেখায়। dpkg -L চালিয়ে নির্দিষ্ট প্যাকেজটি ডিস্কের কোথায় কোথায় ফাইল রেখেছে তা জানা যায়। আর dpkg -S দিয়ে কোনো অজানা প্রোগ্রাম ফাইলের মূল প্যাকেজ মালিক খুঁজে বের করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Find which package owns the /usr/bin/curl binary:
dpkg -S /usr/bin/curl
# Output: curl: /usr/bin/curl

# List all files and directories installed by the curl package:
dpkg -L curl | head -n 4
# Output:
# /usr/bin/curl
# /usr/share/doc/curl
# /usr/share/man/man1/curl.1.gz

# Directly install a downloaded standalone .deb file:
sudo dpkg -i mypackage.deb

# If dependencies are missing after dpkg -i, fix them using APT:
sudo apt-get install -f -y`,
      caption: {
        en: 'dpkg -S maps unknown binaries back to their originating Debian package package registry.',
        bn: 'dpkg -S কমান্ড সার্ভারের যেকোনো অজানা ফাইলের মূল প্যাকেজ উৎস শনাক্ত করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. The APT Lifecycle: update vs upgrade vs dist-upgrade', bn: '৪. APT লাইফসাইকেল: update বনাম upgrade বনাম dist-upgrade' } },
    {
      type: 'para',
      text: {
        en: 'Understanding the distinction between updating package indices and upgrading installed software is critical. The command apt update does not install any software: it contacts remote repositories and downloads the latest package manifests into /var/lib/apt/lists/. The command apt upgrade reads those lists and installs newer versions without removing packages. In contrast, apt dist-upgrade intelligently handles changing dependencies, installing new prerequisites or removing obsolete packages.',
        bn: 'প্যাকেজ ইনডেক্স আপডেট করা এবং মূল সফটওয়্যার আপগ্রেড করার পার্থক্য বোঝা খুবই গুরুত্বপূর্ণ। apt update কোনো সফটওয়্যার ইনস্টল করে না: এটি কেবল রিমোট সার্ভার থেকে নতুন ভার্সনের তালিকা /var/lib/apt/lists/-এ নামায়। এরপর apt upgrade সেই তালিকা দেখে কোনো প্যাকেজ না মুছেই সফটওয়্যারের নতুন ভার্সন ইনস্টল করে। অন্যদিকে apt dist-upgrade পরিবর্তিত ডিপেন্ডেন্সি অনুযায়ী নতুন প্যাকেজ যোগ বা পুরনো প্যাকেজ মুছে নিখুঁত আপগ্রেড সম্পন্ন করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Refresh local package cache from remote mirrors:
sudo apt update
# Output: Reading package lists... Done; 12 packages can be upgraded.

# Step 2: Preview upgradeable packages before executing:
apt list --upgradable

# Step 3: Upgrade existing packages safely:
sudo apt upgrade -y

# Check specific package candidate versions without upgrading:
apt-cache policy nginx
# Output:
#   Installed: 1.18.0-6ubuntu14.4
#   Candidate: 1.18.0-6ubuntu14.5`,
      caption: {
        en: 'apt update refreshes metadata catalogues; apt upgrade installs the newest patched binaries.',
        bn: 'apt update প্যাকেজের তালিকা হালনাগাদ করে; apt upgrade নতুন প্যাচ করা ফাইল ইনস্টল করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Repository Architecture: sources.list & Components', bn: '৫. রিপোজিটরি আর্কিটেকচার: sources.list ও কম্পোনেন্ট' } },
    {
      type: 'para',
      text: {
        en: 'APT locates software mirrors using /etc/apt/sources.list and directory /etc/apt/sources.list.d/. Repositories are divided into four standard components: main (officially supported open source software), restricted (proprietary device drivers), universe (community-maintained open source packages), and multiverse (software restricted by patent or copyright law).',
        bn: 'APT সফটওয়্যার খুঁজে পেতে /etc/apt/sources.list এবং /etc/apt/sources.list.d/ ফোল্ডার ব্যবহার করে। রিপোজিটরিগুলোকে চারটি প্রধান অংশে ভাগ করা হয়: main (অফিসিয়াল সাপোর্টপ্রাপ্ত ওপেন সোর্স সফটওয়্যার), restricted (মালিকানাধীন হার্ডওয়্যার ড্রাইভার), universe (কমিউনিটি পরিচালিত ওপেন সোর্স প্যাকেজ) এবং multiverse (পেটেন্ট বা কপিরাইট সীমাবদ্ধতাসম্পন্ন সফটওয়্যার)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `CLASSIC SOURCES.LIST LINE ANATOMY:
deb https://archive.ubuntu.com/ubuntu jammy main restricted universe
┬   ┬──────────────────────────────── ┬──── ┬───────────────────────────┘
│   │                                 │     │
│   │                                 │     └── Repository Components
│   │                                 └──────── Distribution Codename (Jammy 22.04)
│   └────────────────────────────────────────── Mirror URI Endpoint
└────────────────────────────────────────────── Archive Type (deb binary vs deb-src)`,
      caption: {
        en: 'Sources entries define mirror protocols, release distribution codenames, and licensing categories.',
        bn: 'সোর্সেস ফাইল মিরর অ্যাড্রেস, অপারেটিং সিস্টেম কোডনেম ও লাইসেন্স ক্যাটাগরি নির্ধারণ করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Modern GPG Keyrings: Moving Away from apt-key', bn: '৬. আধুনিক জিপিজি কি-রিং: apt-key পরিহার' } },
    {
      type: 'para',
      text: {
        en: 'Historically, third-party repositories were added by executing apt-key add, which placed foreign signing keys into the trusted global keyring /etc/apt/trusted.gpg. This created a severe vulnerability because an untrusted third party could theoretically forge signatures for official core system packages. Modern systems place isolated GPG keys into /etc/apt/keyrings/ and link them explicitly with signed-by directives.',
        bn: 'অতীতে apt-key add কমান্ড চালিয়ে থার্ড-পার্টি রিপোজিটরির কি সরাসরি মূল /etc/apt/trusted.gpg ফাইলে যুক্ত করা হতো। এটি মারাত্মক নিরাপত্তা ঝুঁকি তৈরি করত, কারণ যেকোনো থার্ড-পার্টি চাইলে সিস্টেমের মূল প্যাকেজের ভুয়া স্বাক্ষর বানাতে পারত। আধুনিক নিয়মে প্রতিটি কি /etc/apt/keyrings/-এ আলাদা রাখা হয় এবং signed-by ফ্ল্যাগ দিয়ে নির্দিষ্ট রিপোজিটরির সাথে বেঁধে দেওয়া হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# MODERN BEST PRACTICE: Adding Docker repository safely
# Step 1: Create dedicated keyrings directory:
sudo install -m 0755 -d /etc/apt/keyrings

# Step 2: Download armored key and de-armor into binary GPG keyring:
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
sudo chmod a+r /etc/apt/keyrings/docker.gpg

# Step 3: Add repo referencing ONLY this specific keyring via [signed-by]:
echo \
  "deb [arch=amd64 signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Step 4: Refresh cache safely:
sudo apt update`,
      caption: {
        en: 'Scoped signed-by GPG keyrings prevent third-party repositories from spoofing base system packages.',
        bn: 'signed-by ব্যবহার করলে কোনো থার্ড-পার্টি রিপোজিটরি মূল সিস্টেম প্যাকেজ স্পুফ করতে পারে না।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Package Removal & System Hygiene: remove vs purge', bn: '৭. প্যাকেজ অপসারণ ও পরিচ্ছন্নতা: remove বনাম purge' } },
    {
      type: 'para',
      text: {
        en: 'When removing software, apt remove uninstalls the executable binaries while preserving configuration files in /etc. If you reinstall the software later, your custom configurations remain intact. To completely eradicate all binaries, database files, and configuration scripts from the system, use apt purge. To clean dangling prerequisite libraries no longer required by any installed application, execute apt autoremove.',
        bn: 'সফটওয়্যার মোছার ক্ষেত্রে apt remove কেবল মূল বাইনারি ফাইল মুছে ফেলে কিন্তু /etc-এর কনফিগারেশন ফাইল ঠিক রাখে। পরবর্তীতে আবার ইনস্টল করলে পুরনো সেটিংস ফিরে পাওয়া যায়। কিন্তু কনফিগারেশনসহ সব কিছু চিরতরে মুছে ফেলতে চাইলে apt purge ব্যবহার করতে হয়। আর কোনো অ্যাপ্লিকেশনের ফেলে যাওয়া অপ্রয়োজনীয় পুরনো লাইব্রেরিগুলো সাফ করতে apt autoremove চালানো হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard removal: leaves config files behind:
sudo apt remove nginx

# Complete eradication: deletes all configs in /etc/nginx/:
sudo apt purge nginx

# Remove orphaned libraries installed as obsolete dependencies:
sudo apt autoremove --purge -y

# Clean downloaded .deb archives caching in /var/cache/apt/archives/:
sudo apt clean`,
      caption: {
        en: 'Combining apt purge and apt autoremove frees disk space and removes obsolete config files.',
        bn: 'apt purge এবং autoremove অপ্রয়োজনীয় ফাইল মুছে ডিস্কের প্রচুর জায়গা খালি করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Automated Security Patching: unattended-upgrades', bn: '৮. স্বয়ংক্রিয় সিকিউরিটি প্যাচিং: unattended-upgrades' } },
    {
      type: 'para',
      text: {
        en: 'Production servers cannot rely on manual administrative logins to patch zero-day vulnerabilities. The unattended-upgrades package runs as a background systemd timer, silently downloading and applying critical CVE security patches while leaving general feature packages untouched. When a kernel patch requires a reboot, the system sets flag /var/run/reboot-required.',
        bn: 'জিরো-ডে নিরাপত্তা ত্রুটি থেকে বাঁচতে প্রোডাকশন সার্ভারে ম্যানুয়ালি আপডেট করার অপেক্ষা করা চলে না। unattended-upgrades প্যাকেজটি systemd টাইমারের মাধ্যমে ব্যাকগ্রাউন্ডে চলে এবং সাধারণ সফটওয়্যার না ছুঁয়ে কেবল জরুরি সিকিউরিটি প্যাচগুলো ইনস্টল করে। কোনো কার্নেল আপডেটের জন্য সার্ভার রিস্টার্টের দরকার হলে এটি /var/run/reboot-required ফাইল তৈরি করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Install and configure unattended security patching:
sudo apt install unattended-upgrades -y
sudo dpkg-reconfigure --priority=low unattended-upgrades

# Test dry run of automatic security patches:
sudo unattended-upgrade --dry-run --debug

# Check if a pending kernel upgrade demands a server reboot:
if [ -f /var/run/reboot-required ]; then
  echo "Reboot required by: $(cat /var/run/reboot-required.pkgs)"
fi
# Output: Reboot required by: linux-image-5.15.0-88-generic`,
      caption: {
        en: 'unattended-upgrades applies critical security updates automatically to protect exposed servers.',
        bn: 'unattended-upgrades স্বয়ংক্রিয়ভাবে জরুরি সিকিউরিটি আপডেট দিয়ে সার্ভার নিরাপদ রাখে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: Package Managers Compared', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: প্যাকেজ ম্যানেজারের তুলনা' } },
    {
      type: 'para',
      text: {
        en: 'Different Linux distributions adopt different package ecosystems. Debian, Ubuntu, and Raspberry Pi OS use dpkg and APT (.deb). RHEL, CentOS, Rocky Linux, and Fedora use RPM and DNF (.rpm). Arch Linux uses Pacman with rolling binary archives (.pkg.tar.zst). Alpine Linux uses apk for microscopic container images.',
        bn: 'ভিন্ন ভিন্ন Linux ডিস্ট্রিবিউশন ভিন্ন ভিন্ন প্যাকেজ ইকোসিস্টেম ব্যবহার করে। ডেবিয়ান, উবুন্টু ও রাস্পবেরি পাই ওএস-এ চলে dpkg এবং APT (.deb)। রেডহ্যাট, সেন্টওএস এবং ফেডোরায় চলে RPM এবং DNF (.rpm)। আর্চ লিনাক্সে ব্যবহৃত হয় Pacman (.pkg.tar.zst)। আর ডকার কন্টেইনারের জন্য ক্ষুদ্র আলপাইন লিনাক্স ব্যবহার করে apk।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `LINUX PACKAGE ECOSYSTEM COMPARISON:
+---------------------+-------------------+-------------------+--------------------+
| Feature             | Debian / Ubuntu   | RHEL / Fedora     | Alpine Linux       |
+---------------------+-------------------+-------------------+--------------------+
| Package Format      | .deb              | .rpm              | .apk               |
| Low-Level Tool      | dpkg              | rpm               | apk                |
| High-Level Manager  | apt (apt-get)     | dnf (yum)         | apk add            |
| Repo Configuration  | /etc/apt/sources* | /etc/yum.repos.d/ | /etc/apk/repos*    |
| C Standard Library  | glibc             | glibc             | musl libc          |
| Target Deployment   | General Cloud     | Enterprise RHEL   | Micro Containers   |
+---------------------+-------------------+-------------------+--------------------+`,
      caption: {
        en: 'Mastering the package manager across ecosystems allows seamless movement across Linux distros.',
        bn: 'বিভিন্ন ইকোসিস্টেমের প্যাকেজ ম্যানেজার জানলে যেকোনো Linux সার্ভারে সহজে কাজ করা যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Auditing Installed Packages in Node.js', bn: '১০. Node.js-এ ইনস্টল করা প্যাকেজ অডিট করা' } },
    {
      type: 'para',
      text: {
        en: 'Here is a Node.js auditing script that executes dpkg-query to extract all installed packages, parse package architectures, and detect whether critical security agents like OpenSSH or Nginx are active.',
        bn: 'নিচে dpkg-query চালিয়ে সিস্টেমে ইনস্টল থাকা সমস্ত প্যাকেজ ফিল্টার করা এবং OpenSSH বা Nginx-এর মতো গুরুত্বপূর্ণ প্যাকেজের উপস্থিতি অডিট করার একটি Node.js কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { execFile } from "child_process";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

async function auditInstalledPackages() {
  // Query installed packages with tab-delimited formatting:
  const format = "\${binary:Package}\\t\${Version}\\t\${Architecture}\\t\${Status}\\n";
  const { stdout } = await execFileAsync("dpkg-query", ["-W", \`-f=\${format}\`]);

  const packages = stdout.trim().split("\\n").map(line => {
    const [name, version, arch, status] = line.split("\\t");
    return { name, version, arch, status };
  });

  console.log("Total Installed Packages:", packages.length);

  // Audit for critical server software:
  const critical = ["openssh-server", "nginx", "curl", "git"];
  const auditReport = critical.map(pkgName => {
    const found = packages.find(p => p.name === pkgName);
    return {
      package: pkgName,
      installed: Boolean(found),
      version: found ? found.version : null
    };
  });

  console.log("Critical Infrastructure Audit:", auditReport);
  return { total: packages.length, audit: auditReport };
}

await auditInstalledPackages();
console.log("Package management audit completed successfully");
// Output: Package management audit completed successfully`,
      caption: {
        en: 'dpkg-query allows programmatic extraction of installed package versions and status flags.',
        bn: 'dpkg-query প্রোগ্রামের মাধ্যমে সরাসরি ইনস্টল করা প্যাকেজের নাম ও ভার্সন বের করতে দেয়।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-pkg-ex1',
      kind: 'predict',
      topic: 'linux: apt update action verification',
      question: {
        en: 'Does running "apt update" install or upgrade any software binaries on the system (yes vs no)?',
        bn: '"apt update" কমান্ড চালালে কি সিস্টেমে কোনো সফটওয়্যার ইনস্টল বা আপগ্রেড হয় (yes নাকি no)?',
      },
      code: `/* Does "apt update" install or upgrade any binaries? */
/* result === "___" */`,
      answer: 'no',
      accept: ['no', 'false'],
      hint: {
        en: 'Answer is no (it only refreshes metadata catalogues).',
        bn: 'উত্তর হলো no (এটি কেবল নতুন প্যাকেজের তালিকা হালনাগাদ করে)।'
      },
      explanation: {
        en: 'apt update contacts repositories to refresh local lists of available versions; apt upgrade is required to actually install updates.',
        bn: 'apt update কেবল রিমোট সার্ভার থেকে তালিকা সংগ্রহ করে; সফটওয়্যার ইনস্টল করতে apt upgrade দিতে হয়।'
      }
    },
    {
      id: 'lnx-pkg-ex2',
      kind: 'mcq',
      topic: 'linux: purge versus remove distinction',
      question: {
        en: 'What is the operational difference between "apt remove <pkg>" and "apt purge <pkg>" in Debian/Ubuntu?',
        bn: 'Debian/Ubuntu-তে "apt remove" এবং "apt purge" কমান্ডের মধ্যে মূল কাজের পার্থক্য কী?'
      },
      options: [
        { en: 'apt remove leaves configuration files in /etc, while apt purge completely deletes binaries AND all configuration files', bn: 'apt remove কনফিগারেশন ফাইল অক্ষত রাখে, আর apt purge কনফিগারেশনসহ সমস্ত ফাইল চিরতরে মুছে ফেলে' },
        { en: 'apt purge shuts down the computer', bn: 'কম্পিউটার বন্ধ করে' },
        { en: 'apt remove installs a newer version', bn: 'নতুন ভার্সন ইনস্টল করে' },
        { en: 'There is no difference between them', bn: 'দুটোর মধ্যে কোনো পার্থক্য নেই' }
      ],
      answer: 0,
      hint: {
        en: 'Purge removes all configuration files too.',
        bn: 'Purge সমস্ত কনফিগারেশন ফাইলও মুছে ফেলে।'
      },
      explanation: {
        en: 'apt purge strips both binary files and all corresponding configuration files in /etc.',
        bn: 'apt purge প্রোগ্রামের বাইনারির সাথে সাথে /etc ফোল্ডারে থাকা কনফিগারেশন ফাইলও মুছে পরিষ্কার করে।'
      }
    },
    {
      id: 'lnx-pkg-ex3',
      kind: 'mcq',
      topic: 'linux: package ownership lookup command',
      question: {
        en: 'Which dpkg command identifies which installed package owns a specific file path like /usr/bin/curl?',
        bn: '/usr/bin/curl এর মতো নির্দিষ্ট কোনো ফাইলের মূল প্যাকেজ মালিক খুঁজে বের করতে কোন dpkg কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'dpkg -S /usr/bin/curl', bn: 'dpkg -S /usr/bin/curl' },
        { en: 'dpkg -i /usr/bin/curl', bn: 'dpkg -i /usr/bin/curl' },
        { en: 'dpkg -r /usr/bin/curl', bn: 'dpkg -r /usr/bin/curl' },
        { en: 'dpkg -p /usr/bin/curl', bn: 'dpkg -p /usr/bin/curl' }
      ],
      answer: 0,
      hint: {
        en: 'dpkg -S (search).',
        bn: 'dpkg -S (সার্চ)।'
      },
      explanation: {
        en: 'dpkg -S searches the local package database to identify the originating package of any file.',
        bn: 'dpkg -S লোকাল ডাটাবেস সার্চ করে নির্দিষ্ট ফাইলের মালিক প্যাকেজটি শনাক্ত করে।'
      }
    }
  ],
  quiz: {
    id: 'lnx-pkg-quiz',
    title: { en: 'Linux Package Management & APT Quiz', bn: 'Linux প্যাকেজ ম্যানেজমেন্ট ও APT কুইজ' },
    questions: [
      {
        id: 'lpkgq1',
        kind: 'mcq',
        topic: 'linux: apt-key deprecation security vulnerability',
        question: {
          en: 'Why was the historic "apt-key add" workflow deprecated in modern Linux distributions?',
          bn: 'আধুনিক Linux ডিস্ট্রিবিউশনে পুরনো "apt-key add" পদ্ধতি কেন বাতিল করা হয়েছে?'
        },
        options: [
          { en: 'It placed foreign keys in the global trusted keyring, allowing third-party repositories to potentially sign and replace core system packages', bn: 'এটি গ্লোবাল কি-রিংয়ে কি যুক্ত করত, ফলে কোনো থার্ড-পার্টি রিপোজিটরি চাইলেই মূল সিস্টেম প্যাকেজের ভুয়া কপি বানাতে পারত' },
          { en: 'Because GPG keys are no longer used on the internet', bn: 'ইন্টারনেটে জিপিজি আর ব্যবহৃত হয় না' },
          { en: 'Because apt-key caused hard disk hardware damage', bn: 'হার্ডডিস্কের ক্ষতি করত' },
          { en: 'Because Python replaced APT', bn: 'পাইথন এপিটি-কে সরিয়ে দিয়েছে' }
        ],
        answer: 0,
        hint: {
          en: 'Global keyring allowed spoofing base packages.',
          bn: 'গ্লোবাল কি-রিং মূল সিস্টেম প্যাকেজ স্পুফ করার সুযোগ দিত।'
        },
        explanation: {
          en: 'Scoped keyrings in /etc/apt/keyrings/ combined with signed-by isolate signing authorities per repository.',
          bn: 'আধুনিক নিয়মে signed-by ব্যবহারের মাধ্যমে প্রতিটি রিপোজিটরিকে নিজস্ব কি-তে সীমাবদ্ধ রাখা হয়।'
        }
      },
      {
        id: 'lpkgq2',
        kind: 'mcq',
        topic: 'linux: deb package member archives',
        question: {
          en: 'Which internal archive inside a .deb package holds the actual compiled executable binaries extracted to the filesystem?',
          bn: 'একটি .deb প্যাকেজের ভেতরের কোন ফাইলটিতে আসল কম্পাইল করা প্রোগ্রাম থাকে যা ফাইলসিস্টেমে এক্সট্রাক্ট করা হয়?'
        },
        options: [
          { en: 'data.tar.xz', bn: 'data.tar.xz ফাইল' },
          { en: 'control.tar.xz', bn: 'control.tar.xz ফাইল' },
          { en: 'debian-binary', bn: 'debian-binary ফাইল' },
          { en: 'manifest.json', bn: 'manifest.json ফাইল' }
        ],
        answer: 0,
        hint: {
          en: 'data.tar.xz contains the files.',
          bn: 'data.tar.xz ফাইলে আসল ডেটা থাকে।'
        },
        explanation: {
          en: 'data.tar.xz stores the payload files, while control.tar.xz contains dependency metadata and scripts.',
          bn: 'data.tar.xz ফাইলে মূল প্রোগ্রাম ফাইল থাকে এবং control.tar.xz ফাইলে মেটাডেটা থাকে।'
        }
      },
      {
        id: 'lpkgq3',
        kind: 'mcq',
        topic: 'linux: autoremove duty',
        question: {
          en: 'What is the primary function of executing "apt autoremove"?',
          bn: '"apt autoremove" কমান্ডটি চালানোর মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'It uninstalls orphaned dependencies that were automatically installed for an application that has since been deleted', bn: 'এটি সেইসব অপ্রয়োজনীয় ডিপেন্ডেন্সি মুছে ফেলে যা অন্য কোনো মুছে ফেলা অ্যাপ্লিকেশনের জন্য আগে স্বয়ংক্রিয়ভাবে ইনস্টল হয়েছিল' },
          { en: 'It reboots the operating system automatically', bn: 'অপারেটিং সিস্টেম রিস্টার্ট করে' },
          { en: 'It empties the user Trash can', bn: 'ট্র্যাশ ফোল্ডার খালি করে' },
          { en: 'It scans the server for viruses', bn: 'সার্ভারে ভাইরাস স্ক্যান করে' }
        ],
        answer: 0,
        hint: {
          en: 'Cleans orphaned dependencies.',
          bn: 'ফেলে যাওয়া অপ্রয়োজনীয় ডিপেন্ডেন্সি পরিষ্কার করে।'
        },
        explanation: {
          en: 'autoremove cleans dangling prerequisite packages whose parent applications were previously removed.',
          bn: 'মূল অ্যাপ্লিকেশন মুছে ফেলার পর তার সাথে আসা অবশিষ্ট ডিপেন্ডেন্সি লাইব্রেরিগুলো সাফ করে autoremove।'
        }
      },
      {
        id: 'lpkgq4',
        kind: 'mcq',
        topic: 'linux: reboot required detection file',
        question: {
          en: 'Which file’s presence on an Ubuntu or Debian server indicates that a recently installed kernel patch demands a system reboot?',
          bn: 'উবুন্টু বা ডেবিয়ান সার্ভারে কোন ফাইলটির উপস্থিতি নির্দেশ করে যে সম্প্রতি ইনস্টল করা কার্নেল প্যাচের জন্য সার্ভারটি রিস্টার্ট দেওয়া জরুরি?'
        },
        options: [
          { en: '/var/run/reboot-required', bn: '/var/run/reboot-required ফাইল' },
          { en: '/etc/reboot.conf', bn: '/etc/reboot.conf ফাইল' },
          { en: '/boot/kernel.lock', bn: '/boot/kernel.lock ফাইল' },
          { en: '/tmp/restart.now', bn: '/tmp/restart.now ফাইল' }
        ],
        answer: 0,
        hint: {
          en: '/var/run/reboot-required file.',
          bn: '/var/run/reboot-required ফাইল।'
        },
        explanation: {
          en: 'When kernel or core libc packages are patched, the system creates /var/run/reboot-required to flag monitoring tools.',
          bn: 'কার্নেল আপডেটের পর সিস্টেম /var/run/reboot-required ফাইল তৈরি করে রিস্টার্টের প্রয়োজন জানায়।'
        }
      }
    ]
  }
};
