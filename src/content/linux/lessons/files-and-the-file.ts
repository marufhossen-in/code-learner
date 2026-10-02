import type { Lesson } from '../../../lib/types';

export const FilesAndTheFileLesson: Lesson = {
  slug: 'files-and-the-file',
  tech: 'linux',
  title: {
    en: 'Linux Filesystem Hierarchy: FHS, Inodes & Link Architecture',
    bn: 'Linux ফাইলসিস্টেম হায়ারার্কি: FHS, ইনোড ও লিঙ্ক আর্কিটেকচার'
  },
  summary: {
    en: 'Master the Linux filesystem layout, inode architecture, and storage inspection across 10 structured topics. Explore the Filesystem Hierarchy Standard (FHS) across /etc, /var, /proc, and /sys. Demystify the Inode metadata structure and inspect blocks with stat. Differentiate Hard Links from Symbolic Links (symlinks) and resolve dangling pointers. Execute core file operations including mkdir, cp, and atomic mv. Analyze disk capacity using df -h and du -sh. Mount block storage via /etc/fstab, and inspect filesystem inodes using Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux ফাইলসিস্টেম কাঠামো, ইনোড আর্কিটেকচার এবং স্টোরেজ ব্যবস্থাপনা আয়ত্ত করুন। /etc, /var, /proc এবং /sys এর সমন্বয়ে গঠিত ফাইলসিস্টেম হায়ারার্কি স্ট্যান্ডার্ড (FHS) বুঝুন। ইনোড মেটাডেটা কাঠামো জানুন এবং stat কমান্ড দিয়ে ব্লক বিশ্লেষণ করুন। হার্ড লিঙ্ক ও সিম্বলিক লিঙ্কের পার্থক্য এবং নষ্ট লিঙ্ক সমাধান শিখুন। mkdir, cp এবং mv দিয়ে নিখুঁত ফাইল অপারেশন চালান। df -h এবং du -sh দিয়ে ডিস্কের ব্যবহার পরিমাপ করুন। /etc/fstab দিয়ে ব্লক ড্রাইভ মাউন্ট করুন এবং Node.js-এ ফাইল ইনোড বিশ্লেষণ করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'perms-and-the-perm',
    tech: 'linux',
    title: {
      en: 'Linux File Permissions: POSIX Modes, SUID & Access Control Lists',
      bn: 'Linux ফাইল পারমিশন: পজিক্স মোড, SUID ও অ্যাক্সেস কন্ট্রোল লিস্ট'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The Filesystem Hierarchy Standard (FHS)', bn: '১. ফাইলসিস্টেম হায়ারার্কি স্ট্যান্ডার্ড (FHS)' } },
    {
      type: 'para',
      text: {
        en: 'Windows organizes storage into separated drive letters like C and D. Linux works differently: it organizes every file and folder under a single root directory marked with a forward slash (/). The Filesystem Hierarchy Standard sets clear rules for top-level folders. For example, /etc holds system configurations, /var stores logs, and /usr holds software binaries.',
        bn: 'উইন্ডোজ অপারেটিং সিস্টেম সি বা ডি-এর মতো আলাদা ড্রাইভ লেটার ব্যবহার করে। Linux সম্পূর্ণ ভিন্নভাবে কাজ করে: এটি সমস্ত ফাইল ও ফোল্ডারকে একটিমাত্র মূল ডিরেক্টরি বা রুটের (/) অধীনে সাজায়। ফাইলসিস্টেম হায়ারার্কি স্ট্যান্ডার্ড প্রতিটি প্রধান ফোল্ডারের দায়িত্ব ঠিক করে দেয়। উদাহরণস্বরূপ, /etc ফোল্ডারে সমস্ত কনফিগারেশন থাকে, /var ফোল্ডারে সার্ভার লগ থাকে এবং /usr ফোল্ডারে সফটওয়্যার থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `LINUX FILESYSTEM HIERARCHY STANDARD (FHS):
/ (Root Directory)
├── bin -> usr/bin       (Essential user command binaries: ls, bash, cp)
├── boot                 (Kernel vmlinuz images & GRUB bootloader files)
├── dev                  (Device nodes: /dev/sda, /dev/null, /dev/urandom)
├── etc                  (System-wide configuration files: /etc/nginx, /etc/hosts)
├── home                 (User home directories: /home/alice, /home/bob)
├── lib -> usr/lib       (Shared system dynamic C libraries: libc.so)
├── proc                 (Virtual pseudo-filesystem representing kernel memory)
├── sys                  (Virtual pseudo-filesystem exposing hardware buses)
├── tmp                  (Volatile scratch directory; cleared on boot)
├── usr                  (Secondary user hierarchy: /usr/local/bin, /usr/share)
└── var                  (Variable state data: /var/log/syslog, /var/lib/docker)`,
      caption: {
        en: 'The FHS structure guarantees standardized system layouts across all Linux distributions.',
        bn: 'FHS কাঠামো সমস্ত Linux ডিস্ট্রিবিউশনে ফাইল ব্যবস্থাপনার একটি সার্বজনীন নিয়ম নিশ্চিত করে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Hard Links vs Symbolic Links Inode Architecture', bn: 'হার্ড লিঙ্ক বনাম সিম্বলিক লিঙ্ক ইনোড আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Linux Inode and Linking Architecture Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="180" height="60" rx="6" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="90" y="32" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle">Directory Entry A</text>
<text x="90" y="52" font-size="9" fill="#cbd5e1" text-anchor="middle">file1.txt (Inode 1042)</text>

<rect x="0" y="85" width="180" height="60" rx="6" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="90" y="107" font-size="10" font-weight="700" fill="#38bdf8" text-anchor="middle">Hard Link: file_hard.txt</text>
<text x="90" y="127" font-size="9" fill="#cbd5e1" text-anchor="middle">file_hard.txt (Inode 1042)</text>

<path d="M185,40 L285,75" stroke="#38bdf8" stroke-width="2"/>
<path d="M185,115 L285,75" stroke="#38bdf8" stroke-width="2"/>

<rect x="290" y="25" width="160" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="370" y="50" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Physical Inode 1042</text>
<text x="370" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">Links Count: 2</text>
<text x="370" y="88" font-size="9" fill="#e2e8f0" text-anchor="middle">Size: 4096 bytes</text>
<text x="370" y="106" font-size="9" fill="#fbbf24" text-anchor="middle">Pointers to Disk Blocks</text>

<path d="M455,75 L525,75" stroke="#10b981" stroke-width="2"/>

<rect x="530" y="10" width="140" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="600" y="32" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Symlink: link.txt</text>
<text x="600" y="52" font-size="8" fill="#cbd5e1" text-anchor="middle">New Inode (9981)</text>
<rect x="540" y="65" width="120" height="30" rx="4" fill="#1e293b" stroke="#f59e0b"/>
<text x="600" y="84" font-size="8" fill="#e2e8f0" text-anchor="middle">Path: "file1.txt"</text>
<text x="600" y="120" font-size="8" fill="#f87171" text-anchor="middle">Breaks if target deleted</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Virtual Filesystems: The /proc and /sys Windows', bn: '২. ভার্চুয়াল ফাইলসিস্টেম: /proc ও /sys উইন্ডো' } },
    {
      type: 'para',
      text: {
        en: 'In Linux, everything is treated as a file, including running processes and hardware devices. The /proc and /sys directories are not physical directories on a hard drive; they are virtual filesystems generated dynamically by the Linux kernel in memory. Querying files in /proc provides instant telemetry on CPU cores, RAM consumption, and process states without executing heavy binaries.',
        bn: 'Linux-এ চলমান প্রসেস থেকে শুরু করে হার্ডওয়্যার ডিভাইস সবকিছুকেই একটি ফাইল হিসেবে বিবেচনা করা হয়। /proc এবং /sys কিন্তু হার্ডড্রাইভের সাধারণ ফোল্ডার নয়; এগুলো কার্নেল দ্বারা মেমরিতে সরাসরি তৈরি হওয়া ভার্চুয়াল ফাইলসিস্টেম। /proc-এর ভেতর থাকা ফাইলগুলো পড়ে ভারী কোনো সফটওয়্যার ছাড়াই তাৎক্ষণিকভাবে প্রসেসরের তথ্য বা মেমরির অবস্থা জানা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Query CPU architecture and core count directly from kernel memory:
cat /proc/cpuinfo | grep "model name" | head -n 1
# Output: model name : AMD EPYC 7763 64-Core Processor

# Inspect memory metrics directly from procfs:
cat /proc/meminfo | head -n 3
# Output:
# MemTotal:       32845920 kB
# MemFree:        18230144 kB
# MemAvailable:   27912400 kB

# Query current process ID 1 status:
head -n 5 /proc/1/status
# Output: Name: systemd, State: S (sleeping), Tgid: 1, Pid: 1`,
      caption: {
        en: 'Virtual filesystems grant direct window access into the live state of kernel memory.',
        bn: 'ভার্চুয়াল ফাইলসিস্টেম কার্নেল মেমরির বর্তমান অবস্থা সরাসরি পর্যবেক্ষণের সুযোগ দেয়।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. The Inode Architecture: What is an Inode?', bn: '৩. ইনোড আর্কিটেকচার: ইনোড কী?' } },
    {
      type: 'para',
      text: {
        en: 'Every file on a Linux filesystem is represented by an Index Node (Inode). An inode stores all metadata about a file: file size, ownership, permission bits, and physical storage block pointers. Crucially, the filename itself is never stored inside the inode: a directory is simply a special file containing a list of filename-to-inode mappings.',
        bn: 'Linux ফাইলসিস্টেমে প্রতিটি ফাইল একটি ইনডেক্স নোড (ইনোদ বা Inode) দ্বারা পরিচালিত হয়। একটি ইনোড ফাইলের সমস্ত মেটাডেটা সংরক্ষণ করে: ফাইলের আকার, মালিকানা, পারমিশন এবং ডিস্ক ব্লকের অ্যাড্রেস। মনে রাখা দরকার, ফাইলের নামটি কখনো ইনোডের ভেতর থাকে না: একটি ডিরেক্টরি হলো কেবল একটি ফাইল যা নামের সাথে ইনোড নম্বরের তালিকা ধরে রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect file inode metadata using the stat command:
stat /etc/hosts
# Output:
#   File: /etc/hosts
#   Size: 221        Blocks: 8          IO Block: 4096   regular file
# Device: 8,1        Inode: 131102      Links: 1
# Access: (0644/-rw-r--r--)  Uid: ( 0/ root)   Gid: ( 0/ root)
# Access: 2026-10-01 08:30:00.000000000 +0000
# Modify: 2026-09-15 12:00:00.000000000 +0000
# Change: 2026-09-15 12:00:00.000000000 +0000`,
      caption: {
        en: 'stat reveals block counts, exact inode numbers, link counts, and timestamp attributes.',
        bn: 'stat কমান্ড ফাইলের ব্লক, ইনোড নম্বর, লিঙ্কের সংখ্যা ও সময় সংক্রান্ত তথ্য প্রকাশ করে।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Hard Links: Multiple Names for the Identical Inode', bn: '৪. হার্ড লিঙ্ক: একই ইনোডের একাধিক নাম' } },
    {
      type: 'para',
      text: {
        en: 'A hard link creates a new directory entry pointing to an existing inode number. Because both filenames share the identical inode, modifying either file changes both immediately. Deleting the original filename merely decrements the inode link count by 1; the physical data remains safely on disk until all hard links are deleted and no running process holds the file open.',
        bn: 'একটি হার্ড লিঙ্ক বিদ্যমান কোনো ইনোড নম্বরের জন্য নতুন একটি নাম তৈরি করে। যেহেতু দুটি নামই একই ইনোড নির্দেশ করে, তাই যেকোনো একটি ফাইলে পরিবর্তন করলে সাথে সাথে অন্যটিতে প্রতিফলিত হয়। মূল ফাইলটি মুছে ফেললে কেবল ইনোডের রেফারেন্স সংখ্যা ১ কমে; কিন্তু যতক্ষণ অন্তত একটি হার্ড লিঙ্ক থাকবে ডেটা ডিস্কে শতভাগ অক্ষত থাকে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create original file:
echo "Critical configuration payload" > /tmp/config.json

# Create a hard link to the file:
ln /tmp/config.json /tmp/config_backup.json

# Inspect inode numbers (both share exact same inode!):
ls -i /tmp/config*
# Output:
# 1042589 /tmp/config.json
# 1042589 /tmp/config_backup.json

# Delete the original file:
rm /tmp/config.json

# Data is STILL accessible via the hard link!
cat /tmp/config_backup.json
# Output: Critical configuration payload`,
      caption: {
        en: 'Hard links share the identical inode number, preserving data even if the original name is deleted.',
        bn: 'হার্ড লিঙ্ক একই ইনোড শেয়ার করে, ফলে মূল ফাইল মুছে ফেললেও ডেটা সুরক্ষিত থাকে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Symbolic (Soft) Links: Path-Referencing Pointers', bn: '৫. সিম্বলিক বা সফট লিঙ্ক: পাথ নির্দেশকারী পয়েন্টার' } },
    {
      type: 'para',
      text: {
        en: 'Unlike hard links, a Symbolic Link (created with ln -s) is a completely separate file with its own distinct inode number. The contents of a symlink are simply a text string pointing to the target path. Symlinks can cross different disk partitions and link to directories, but deleting the target file leaves the symlink broken as a dangling pointer.',
        bn: 'হার্ড লিঙ্কের মতো নয়, একটি সিম্বলিক লিঙ্ক (ln -s দিয়ে তৈরি) সম্পূর্ণ পৃথক একটি নতুন ফাইল যার নিজস্ব আলাদা ইনোড নম্বর থাকে। এই ফাইলের ভেতর মূল ফাইলের পাথটি একটি সাধারণ টেক্সট স্ট্রিং হিসেবে লেখা থাকে। সিম্বলিক লিঙ্ক ভিন্ন ড্রাইভ বা ডিরেক্টরির সাথে কাজ করতে পারে, তবে মূল ফাইলটি মুছে ফেললে লিঙ্কটি নষ্ট হয়ে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create a symbolic link pointing to Nginx configuration:
ln -s /etc/nginx/sites-available/app.conf /etc/nginx/sites-enabled/app.conf

# Inspect symlink details (notice "->" arrow and separate inode):
ls -li /etc/nginx/sites-enabled/app.conf
# Output:
# 9981245 lrwxrwxrwx 1 root root 36 Oct 01 10:00 app.conf -> /etc/nginx/sites-available/app.conf

# If target is removed, the symlink turns into a broken dangling pointer:
# cat app.conf -> No such file or directory`,
      caption: {
        en: 'Symlinks point to paths, making them ideal for enabling services and crossing partitions.',
        bn: 'সিম্বলিক লিঙ্ক পাথের ওপর কাজ করে, যা সার্ভিস চালু করতে ও পার্টিশন পার হতে উপযোগী।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Essential File Operations: mkdir, cp, and Atomic mv', bn: '৬. প্রধান ফাইল অপারেশন: mkdir, cp ও অ্যাটমিক mv' } },
    {
      type: 'para',
      text: {
        en: 'Daily server administration relies on core file manipulation primitives. The mkdir -p command creates nested parent directory trees without failing if paths already exist. The cp -r command recursively copies directory trees. The mv command moves files: when moving within the same filesystem partition, mv is a lightning-fast atomic inode pointer reassignment.',
        bn: 'সার্ভার পরিচালনায় ফাইল অপারেশনের মূল কমান্ডগুলো অত্যন্ত গুরুত্বপূর্ণ। mkdir -p কমান্ড একসাথে অনেকগুলো নেস্টেড ডিরেক্টরি তৈরি করে। cp -r কমান্ড রিকার্সিভভাবে পুরো ফোল্ডার কপি করে। আর mv কমান্ড ফাইল স্থানান্তরে ব্যবহৃত হয়: একই পার্টিশনের মধ্যে ফাইল সরালে এটি কোনো কপি না করে তাৎক্ষণিকভাবে অ্যাটমিকভাবে ইনোড পয়েন্টার বদলে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create nested directory structure:
mkdir -p /opt/myapp/releases/v1.0.4/config

# Recursive copy with preservation of permissions and timestamps (-p):
cp -rp /tmp/source_dir /opt/myapp/backup/

# Atomic release deployment using directory rename:
mv /opt/myapp/releases/v1.0.4 /opt/myapp/current
# Zero-downtime release: Inodes updated instantaneously!`,
      caption: {
        en: 'Same-filesystem mv renames directory entries atomically without moving data blocks.',
        bn: 'একই পার্টিশনে mv কমান্ড কোনো ডেটা না সরিয়েই তাৎক্ষণিকভাবে ফাইলের নাম পরিবর্তন করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Storage Capacity Analysis: df -h vs du -sh', bn: '৭. স্টোরেজ বিশ্লেষণ: df -h বনাম du -sh' } },
    {
      type: 'para',
      text: {
        en: 'Distinguishing disk partition capacity from directory size is vital when storage runs low. The df -h command queries filesystem superblock metadata to report total, used, and available space across mounted disks. The du -sh command traverses physical directories to sum up space occupied by files. When df shows 100 percent full but du cannot find large files, deleted unlinked files held open by running processes are usually the culprit.',
        bn: 'ডিস্কের জায়গা কমে গেলে পার্টিশনের সক্ষমতা এবং নির্দিষ্ট ফোল্ডারের আকারের পার্থক্য বোঝা খুব জরুরি। df -h কমান্ড মাউন্ট করা সমস্ত ড্রাইভের মোট ও ব্যবহৃত স্পেস এক নজরে দেখায়। অন্যদিকে du -sh নির্দিষ্ট ফোল্ডারের ভেতরের সমস্ত ফাইল হিসাব করে মোট সাইজ প্রকাশ করে। df-এ মেমরি ১০০ শতাংশ ফুল দেখালেও du-তে ফাইল না পেলে বুঝতে হবে কোনো চলমান প্রসেস মুছে ফেলা ফাইল এখনো মেমরিতে ধরে রেখেছে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect all mounted filesystems in human-readable gigabytes:
df -h
# Output:
# Filesystem      Size  Used Avail Use% Mounted on
# /dev/sda1        50G   18G   30G  38% /
# /dev/sdb1       500G  320G  180G  64% /var/lib/docker

# Find size of current directory and subfolders:
du -sh /var/log/
# Output: 2.4G    /var/log/

# Discover the top 3 largest directories consuming disk space:
du -h --max-depth=1 /var | sort -hr | head -n 3
# Output:
# 18G     /var
# 12G     /var/lib
# 4.2G    /var/log`,
      caption: {
        en: 'df examines filesystem superblocks; du walks directory trees to tally block consumption.',
        bn: 'df সরাসরি ড্রাইভের অবস্থা জানায় এবং du ফোল্ডার ঘুরে ফাইলের সঠিক হিসাব তুলে আনে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Mounting Storage Devices & /etc/fstab', bn: '৮. স্টোরেজ মাউন্ট ও /etc/fstab' } },
    {
      type: 'para',
      text: {
        en: 'Before a physical hard drive, SSD, or cloud network volume can be accessed, it must be attached to a directory in the filesystem tree via the mount command. The /etc/fstab file defines permanent mount points loaded automatically during system boot. Production servers always mount storage using persistent filesystem UUIDs rather than volatile device names like /dev/sdb1.',
        bn: 'কোনো নতুন হার্ডডিস্ক, এসএসডি বা ক্লাউড স্টোরেজ ব্যবহার করার আগে mount কমান্ডের মাধ্যমে সেটিকে ফাইলসিস্টেম ট্রির একটি ফোল্ডারের সাথে যুক্ত করতে হয়। /etc/fstab ফাইলটি বুটের সময় স্বয়ংক্রিয়ভাবে ড্রাইভ মাউন্ট করার স্থায়ী নিয়ম ধারণ করে। প্রোডাকশনে অস্থির /dev/sdb1 নামের বদলে সর্বদা ড্রাইভের স্থায়ী UUID ব্যবহার করে মাউন্ট করা হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# List all block storage devices and unique UUIDs:
lsblk -f
# Output:
# sda
# └─sda1 ext4  5b82e04f-1042-4f91-8890-e79495111111 /
# sdb
# └─sdb1 ext4  c9431872-9988-4c12-b231-f11122233344 /mnt/data

# Persistent record inside /etc/fstab:
# UUID=<uuid>                                 <mount_point> <type> <options> <dump> <pass>
# UUID=c9431872-9988-4c12-b231-f11122233344  /mnt/data     ext4   defaults  0      2

# Test /etc/fstab without rebooting:
mount -a`,
      caption: {
        en: 'Mounting by UUID in /etc/fstab prevents boot failures caused by shifting device names.',
        bn: '/etc/fstab-এ UUID ব্যবহার করলে ড্রাইভের নাম বদলালেও সার্ভার সফলভাবে বুট হয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Architecture Matrix: Hard Links vs Symlinks vs Copy', bn: '৯. সিদ্ধান্ত ম্যাট্রিক্স: হার্ড লিঙ্ক বনাম সিম্বলিক লিঙ্ক বনাম কপি' } },
    {
      type: 'para',
      text: {
        en: 'Comparing link mechanisms prevents structural storage mistakes: Use Hard Links when data must survive original file deletions and stay on the same filesystem. Use Symbolic Links for software shortcuts, version switching, and crossing partition boundaries. Use Standard Copy when creating true independent replicas with isolated lifecycles.',
        bn: 'ফাইল লিঙ্কের সঠিক পদ্ধতি জানা স্টোরেজের জটিলতা এড়ায়: যখন মূল ফাইল মুছে গেলেও ডেটা রক্ষা করতে চান এবং একই ড্রাইভে কাজ করছেন তখন হার্ড লিঙ্ক বেছে নিন। সফটওয়্যার শর্টকাট, ভার্সন পরিবর্তন ও অন্য ড্রাইভের ক্ষেত্রে সিম্বলিক লিঙ্ক ব্যবহার করুন। আর সম্পূর্ণ স্বাধীন ও আলাদা ফাইল চাইলে সাধারণ কপি ব্যবহার করুন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `FILE LINKING & REPLICATION SPECTRUM:
+-------------------+--------------------+--------------------+--------------------+
| Dimension         | Hard Link (ln)     | Symlink (ln -s)    | Full Copy (cp)     |
+-------------------+--------------------+--------------------+--------------------+
| Inode Number      | Same as original   | New independent    | New independent    |
| Extra Disk Blocks | 0 Bytes            | Microscopic (Path) | Full size duplicate|
| Cross Partitions  | Not Allowed        | Allowed            | Allowed            |
| Link Directories  | Prohibited         | Supported          | Supported (-r)     |
| Target Deleted    | Data remains safe  | Broken (Dangling)  | Data remains safe  |
+-------------------+--------------------+--------------------+--------------------+`,
      caption: {
        en: 'Hard links duplicate directory pointers; symlinks store relative or absolute path strings.',
        bn: 'হার্ড লিঙ্ক ইনোড পয়েন্টার শেয়ার করে; সিম্বলিক লিঙ্ক কেবল মূল ফাইলের পাথ লিখে রাখে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Inspecting Inodes and File Stats in Node.js', bn: '১০. Node.js-এ ফাইল ইনোড ও স্ট্যাটাস পর্যবেক্ষণ' } },
    {
      type: 'para',
      text: {
        en: 'Here is a Node.js filesystem utility using fs.promises.stat and fs.promises.readlink to inspect inode numbers, detect symbolic links, and calculate physical disk usage.',
        bn: 'নিচে fs.promises.stat এবং fs.promises.readlink ব্যবহার করে ফাইলের ইনোড নম্বর যাচাই, সিম্বলিক লিঙ্ক শনাক্তকরণ ও মেমরি পরিমাপের একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

async function inspectFileInode(filePath) {
  // Use lstat to inspect link itself rather than resolving target:
  const stats = await fs.lstat(filePath);

  const fileTelemetry = {
    path: filePath,
    inodeNumber: stats.ino,
    isSymbolicLink: stats.isSymbolicLink(),
    sizeInBytes: stats.size,
    hardLinksCount: stats.nlink,
    modeOctal: (stats.mode & 0o777).toString(8)
  };

  if (stats.isSymbolicLink()) {
    fileTelemetry.targetPath = await fs.readlink(filePath);
  }

  console.log("Linux File Inode Telemetry:", fileTelemetry);
  return fileTelemetry;
}

await inspectFileInode("/etc/hosts");
console.log("Inode inspection completed successfully");
// Output: Inode inspection completed successfully`,
      caption: {
        en: 'Node.js fs.lstat exposes native Linux inode numbers, link counts, and octal permission modes.',
        bn: 'Node.js fs.lstat সরাসরি Linux ইনোড নম্বর, লিঙ্কের সংখ্যা ও অক্টাল পারমিশন তুলে আনে।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-fil-ex1',
      kind: 'predict',
      topic: 'linux: hard link shared inode identity',
      question: {
        en: 'When a hard link is created with "ln source.txt dest.txt", what is the relationship between the inode numbers of source.txt and dest.txt (identical vs different)?',
        bn: '"ln source.txt dest.txt" দিয়ে হার্ড লিঙ্ক তৈরি করলে source.txt এবং dest.txt এর ইনোড নম্বর কেমন হবে (সমান নাকি ভিন্ন)?'
      },
      code: `/* Inode relationship between hard linked files: */
/* source.inode === dest.inode -> _________ */`,
      answer: 'identical',
      accept: ['identical', 'same', 'equal'],
      hint: {
        en: 'They share the identical inode.',
        bn: 'তারা হুবহু একই ইনোড শেয়ার করে।'
      },
      explanation: {
        en: 'Hard links are directory entries pointing to the exact same inode on the filesystem.',
        bn: 'হার্ড লিঙ্ক একই ফাইলসিস্টেমের ভেতরের হুবহু একই ইনোড নম্বরের দিকে নির্দেশ করে।'
      }
    },
    {
      id: 'lnx-fil-ex2',
      kind: 'mcq',
      topic: 'linux: symbolic link creation flag',
      question: {
        en: 'Which command-line flag is passed to ln to create a Symbolic (Soft) link rather than a Hard link?',
        bn: 'হার্ড লিঙ্কের বদলে সিম্বলিক বা সফট লিঙ্ক তৈরি করতে ln কমান্ডের সাথে কোন ফ্ল্যাগটি ব্যবহার করা হয়?'
      },
      options: [
        { en: '-s', bn: '-s' },
        { en: '-h', bn: '-h' },
        { en: '-f', bn: '-f' },
        { en: '-l', bn: '-l' }
      ],
      answer: 0,
      hint: {
        en: 'The -s flag (symbolic).',
        bn: '-s ফ্ল্যাগ (সিম্বলিক)।'
      },
      explanation: {
        en: 'The -s flag instructs ln to create a symbolic link file containing a path pointer.',
        bn: '-s ফ্ল্যাগটি ln কমান্ডকে একটি স্বাধীন সিম্বলিক লিঙ্ক ফাইল তৈরি করতে নির্দেশ দেয়।'
      }
    },
    {
      id: 'lnx-fil-ex3',
      kind: 'mcq',
      topic: 'linux: filesystem disk free inspection command',
      question: {
        en: 'Which command displays the total, used, and available disk space across all mounted filesystem partitions in human-readable units?',
        bn: 'মাউন্ট করা সমস্ত ফাইলসিস্টেম পার্টিশনের মোট ও ব্যবহৃত ডিস্ক স্পেস মানুষের পাঠযোগ্য ইউনিটে দেখতে কোন কমান্ডটি ব্যবহৃত হয়?'
      },
      options: [
        { en: 'df -h', bn: 'df -h' },
        { en: 'du -sh', bn: 'du -sh' },
        { en: 'ls -la', bn: 'ls -la' },
        { en: 'free -m', bn: 'free -m' }
      ],
      answer: 0,
      hint: {
        en: 'df -h (Disk Free).',
        bn: 'df -h (ডিস্ক ফ্রি)।'
      },
      explanation: {
        en: 'df -h checks filesystem superblocks to report mounted partition capacities, while du measures specific directory trees.',
        bn: 'df -h সমস্ত মাউন্ট করা পার্টিশনের মোট অবস্থা দেখায়, আর du নির্দিষ্ট ফোল্ডারের সাইজ মাপে।'
      }
    }
  ],
  quiz: {
    id: 'lnx-fil-quiz',
    title: { en: 'Linux Filesystem Hierarchy & Inodes Quiz', bn: 'Linux ফাইলসিস্টেম হায়ারার্কি ও ইনোড কুইজ' },
    questions: [
      {
        id: 'lfilq1',
        kind: 'mcq',
        topic: 'linux: inode filename storage location',
        question: {
          en: 'Where is a file’s human-readable name stored in the Linux filesystem architecture?',
          bn: 'Linux ফাইলসিস্টেম আর্কিটেকচারে একটি ফাইলের নাম আসলে কোথায় সংরক্ষিত থাকে?'
        },
        options: [
          { en: 'Inside the parent directory file entry as a filename-to-inode mapping, NOT inside the inode itself', bn: 'প্যারেন্ট ডিরেক্টরি ফাইলে নাম থেকে ইনোডের ম্যাপিং হিসেবে সংরক্ষিত থাকে, ইনোডের ভেতরে নয়' },
          { en: 'Directly in the computer BIOS', bn: 'সরাসরি কম্পিউটার বায়োসে' },
          { en: 'On a web server in California', bn: 'ক্যালিফোর্নিয়ার ওয়েব সার্ভারে' },
          { en: 'Inside the user RAM cache only', bn: 'কেবলমাত্র ইউজারের র‍্যামে' }
        ],
        answer: 0,
        hint: {
          en: 'In the directory file entry.',
          bn: 'ডিরেক্টরি ফাইলের ভেতরের তালিকায়।'
        },
        explanation: {
          en: 'An inode stores permissions, timestamps, and block addresses. Filenames exist purely as directory entry pointers to inodes.',
          bn: 'ইনোড সমস্ত মেটাডেটা রাখলেও ফাইলের নামটি থাকে ডিরেক্টরির নিজস্ব তালিকার ভেতর।'
        }
      },
      {
        id: 'lfilq2',
        kind: 'mcq',
        topic: 'linux: virtual filesystem definition',
        question: {
          en: 'What makes /proc and /sys unique compared to standard directories like /etc or /var?',
          bn: '/etc বা /var-এর মতো সাধারণ ফোল্ডারগুলোর তুলনায় /proc এবং /sys কেন সম্পূর্ণ ব্যতিক্রমধর্মী?'
        },
        options: [
          { en: 'They do not occupy disk space; they are virtual filesystems synthesized in RAM by the kernel to expose system state', bn: 'এগুলো ডিস্কে কোনো জায়গা নেয় না; সিস্টেমের তথ্য তুলে ধরতে কার্নেল সরাসরি মেমরিতে এই ভার্চুয়াল ফাইল তৈরি করে' },
          { en: 'They can only be opened using Google Chrome', bn: 'কেবল গুগল ক্রোম দিয়ে খোলা যায়' },
          { en: 'They are written in JavaScript', bn: 'জাভাস্ক্রিপ্টে লেখা' },
          { en: 'They contain deleted movie files', bn: 'মুছে ফেলা মুভি ফাইল থাকে' }
        ],
        answer: 0,
        hint: {
          en: 'Virtual filesystems generated in RAM by the kernel.',
          bn: 'কার্নেল দ্বারা মেমরিতে তৈরি হওয়া ভার্চুয়াল ফাইলসিস্টেম।'
        },
        explanation: {
          en: '/proc and /sys are procfs and sysfs virtual filesystems generated on the fly by the Linux kernel.',
          bn: '/proc এবং /sys হলো কার্নেলের সরাসরি লাইভ মেমরি যা সাধারণ ফাইলের মতো পড়া যায়।'
        }
      },
      {
        id: 'lfilq3',
        kind: 'mcq',
        topic: 'linux: persistent mounting configuration file',
        question: {
          en: 'Which configuration file controls persistent block device mounting rules during system boot in Linux?',
          bn: 'Linux-এ সিস্টেম বুটের সময় ড্রাইভগুলো স্বয়ংক্রিয়ভাবে মাউন্ট করার স্থায়ী নিয়ম কোন ফাইলে লেখা থাকে?'
        },
        options: [
          { en: '/etc/fstab', bn: '/etc/fstab ফাইল' },
          { en: '/etc/hosts', bn: '/etc/hosts ফাইল' },
          { en: '/var/log/boot.log', bn: '/var/log/boot.log ফাইল' },
          { en: '/usr/bin/mount', bn: '/usr/bin/mount ফাইল' }
        ],
        answer: 0,
        hint: {
          en: '/etc/fstab file.',
          bn: '/etc/fstab ফাইল।'
        },
        explanation: {
          en: '/etc/fstab (Filesystem Table) defines disk UUIDs, mount directories, filesystem types, and mount options.',
          bn: '/etc/fstab ফাইলে ড্রাইভের UUID, মাউন্ট ফোল্ডার ও মাউন্ট অপশন সংরক্ষিত থাকে।'
        }
      },
      {
        id: 'lfilq4',
        kind: 'mcq',
        topic: 'linux: broken symlink behavior',
        question: {
          en: 'What happens to a symbolic link when its target destination file is deleted or moved?',
          bn: 'একটি সিম্বলিক লিঙ্কের মূল টার্গেট ফাইলটি মুছে ফেললে বা সরিয়ে নিলে লিঙ্কটির কী অবস্থা হয়?'
        },
        options: [
          { en: 'The symlink remains on disk but becomes a broken "dangling link" that fails when opened', bn: 'সিম্বলিক লিঙ্কটি ডিস্কে ঠিকই থাকে কিন্তু একটি নষ্ট (dangling) লিঙ্কে রূপ নেয় যা খুলতে গেলে এরর দেয়' },
          { en: 'The symlink automatically recreates the original file with all data', bn: 'আগের ফাইলটি নিজে থেকেই তৈরি করে নেয়' },
          { en: 'The entire operating system crashes', bn: 'পুরো অপারেটিং সিস্টেম ক্র্যাশ করে' },
          { en: 'The computer catches fire', bn: 'কম্পিউটার নষ্ট হয়ে যায়' }
        ],
        answer: 0,
        hint: {
          en: 'Becomes a dangling link.',
          bn: 'নষ্ট বা ড্যাঙ্গলিং লিঙ্কে রূপ নেয়।'
        },
        explanation: {
          en: 'A symlink merely stores a text path; when the target is gone, the link points to a non-existent path.',
          bn: 'সিম্বলিক লিঙ্ক কেবল একটি পাথ মনে রাখে; টার্গেট না থাকলে এটি অস্তিত্বহীন পাথের দিকে নির্দেশ করে আটকে থাকে।'
        }
      }
    ]
  }
};
