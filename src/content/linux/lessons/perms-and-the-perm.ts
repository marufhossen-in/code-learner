import type { Lesson } from '../../../lib/types';

export const PermsAndThePermLesson: Lesson = {
  slug: 'perms-and-the-perm',
  tech: 'linux',
  title: {
    en: 'Linux File Permissions: POSIX Modes, SUID & Access Control Lists',
    bn: 'Linux ফাইল পারমিশন: পজিক্স মোড, SUID ও অ্যাক্সেস কন্ট্রোল লিস্ট'
  },
  summary: {
    en: 'Master Linux permission architectures, special permission bits, and Access Control Lists across 10 structured topics. Understand the User, Group, and Others (UGO) security model. Calculate octal permission masks like 755, 644, and 600. Manage ownership with chown. Configure defensive umask defaults such as 027. Audit privilege escalation vectors using SUID (4000) on executables. Enforce directory group inheritance with SGID (2000). Protect shared directories with the Sticky Bit (1000), apply fine-grained ACLs with setfacl, and audit permission octals in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux ফাইল পারমিশন আর্কিটেকচার, বিশেষ বিট এবং অ্যাক্সেস কন্ট্রোল লিস্ট (ACL) আয়ত্ত করুন। ব্যবহারকারী, গ্রুপ ও অন্যদের (UGO) নিরাপত্তা মডেল বুঝুন। ৭৫৫, ৬৪৪ ও ৬০০ এর মতো অক্টাল পারমিশন হিসাব করুন। chown দিয়ে মালিকানা পরিচালনা করুন। ০২৭ এর মতো সুরক্ষিত umask নির্ধারণ করুন। SUID (৪০০০) বিটের সুবিধা ও ঝুঁকি জানুন। SGID (২০০০) দিয়ে ডিরেক্টরিতে গ্রুপ অধিকার বজায় রাখুন। স্টিকি বিট (১০০০) দিয়ে শেয়ার্ড ফোল্ডার সুরক্ষিত রাখুন, setfacl দিয়ে সূক্ষ্ম পারমিশন প্রয়োগ করুন এবং Node.js-এ ফাইল পারমিশন অডিট করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'procs-and-the-proc',
    tech: 'linux',
    title: {
      en: 'Linux Process Management: Signals, Job Control & System Telemetry',
      bn: 'Linux প্রসেস ম্যানেজমেন্ট: সিগন্যাল, জব কন্ট্রোল ও সিস্টেম টেলিমেট্রি'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. The POSIX Permission Model: User, Group & Others', bn: '১. পজিক্স পারমিশন মডেল: ব্যবহারকারী, গ্রুপ ও অন্যান্য' } },
    {
      type: 'para',
      text: {
        en: 'In Linux multi-user systems, security relies on standard Unix file permissions (often called POSIX permissions). Every file and directory assigns access rights across three distinct identity scopes: User (the individual user who owns the file), Group (the team or service group sharing access), and Others (all other system accounts). Each scope defines independent read, write, and execute permissions.',
        bn: 'Linux মাল্টি-ইউজার সিস্টেমে নিরাপত্তা নিশ্চিত করতে প্রমিত ইউনিক্স ফাইল পারমিশন (যাকে পজিক্স পারমিশন বলা হয়) কাজ করে। প্রতিটি ফাইল ও ডিরেক্টরি তিনটি স্তরে অধিকার নির্ধারণ করে: ইউজার (ফাইলের মূল মালিক), গ্রুপ (নির্দিষ্ট দল বা সার্ভিস যারা অধিকার শেয়ার করে) এবং অন্যান্য (সিস্টেমের বাকি সমস্ত ইউজার)। প্রতিটি স্তরের জন্য পড়া, লেখা এবং চালানোর অধিকার আলাদাভাবে নির্ধারণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `POSIX PERMISSION STRING BREAKDOWN:
- r w x r - x r - -
┬ └───┘ └───┘ └───┘
│   │     │     │
│   │     │     └── Others permissions (Read only)
│   │     └──────── Group permissions  (Read & Execute)
│   └────────────── User permissions   (Read, Write & Execute)
└────────────────── File type (- = regular file, d = directory, l = symlink)`,
      caption: {
        en: 'The 10-character permission string defines access rights across user, group, and others.',
        bn: '১০ অক্ষরের পারমিশন স্ট্রিং ব্যবহারকারী, গ্রুপ ও অন্যদের অধিকার স্পষ্টভাবে তুলে ধরে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Octal Permission Calculation (Read 4, Write 2, Execute 1)', bn: 'অক্টাল পারমিশন গণনা (পড়া ৪, লেখা ২, চালানো ১)' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Octal Permission Matrix">
<g transform="translate(20, 20)">
<rect x="0" y="10" width="190" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="95" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">User (Owner): 7</text>
<text x="95" y="55" font-size="10" fill="#4ade80" text-anchor="middle">Read (4) = 4</text>
<text x="95" y="75" font-size="10" fill="#4ade80" text-anchor="middle">Write (2) = 2</text>
<text x="95" y="95" font-size="10" fill="#4ade80" text-anchor="middle">Execute (1) = 1</text>
<text x="95" y="125" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Total: 4 + 2 + 1 = 7</text>

<rect x="225" y="10" width="190" height="130" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="320" y="32" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Group (Team): 5</text>
<text x="320" y="55" font-size="10" fill="#4ade80" text-anchor="middle">Read (4) = 4</text>
<text x="320" y="75" font-size="10" fill="#94a3b8" text-anchor="middle">No Write (-) = 0</text>
<text x="320" y="95" font-size="10" fill="#4ade80" text-anchor="middle">Execute (1) = 1</text>
<text x="320" y="125" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Total: 4 + 0 + 1 = 5</text>

<rect x="450" y="10" width="190" height="130" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="545" y="32" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Others (Public): 5</text>
<text x="545" y="55" font-size="10" fill="#4ade80" text-anchor="middle">Read (4) = 4</text>
<text x="545" y="75" font-size="10" fill="#94a3b8" text-anchor="middle">No Write (-) = 0</text>
<text x="545" y="95" font-size="10" fill="#4ade80" text-anchor="middle">Execute (1) = 1</text>
<text x="545" y="125" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Result Octal: 755</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Files vs Directories: What Execute (x) Really Means', bn: '২. ফাইল বনাম ডিরেক্টরি: এক্সিকিউট (x)-এর প্রকৃত অর্থ' } },
    {
      type: 'para',
      text: {
        en: 'The meaning of read, write, and execute bits differs between regular files and directories. For regular files, read lets users view text, write allows altering contents, and execute enables running the binary. For directories, read allows listing filenames with ls, write grants creating or deleting files inside, and execute permits traversing (cd) into the folder.',
        bn: 'সাধারণ ফাইল এবং ফোল্ডারের ক্ষেত্রে পারমিশন বিটগুলোর অর্থ সম্পূর্ণ আলাদা হয়। সাধারণ ফাইলে রিড দিয়ে লেখা পড়া যায়, রাইট দিয়ে সংশোধন করা যায় এবং এক্সিকিউট দিয়ে ফাইলটি প্রোগ্রাম হিসেবে চালানো যায়। কিন্তু একটি ডিরেক্টরির ক্ষেত্রে রিড মানে ls দিয়ে ফাইলের নাম দেখা, রাইট মানে ফাইল তৈরি বা মোছা এবং এক্সিকিউট মানে cd চালিয়ে ওই ফোল্ডারে প্রবেশের অধিকার।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Directory with Read (r) but WITHOUT Execute (x):
chmod 0644 /tmp/locked_dir

# Listing files works:
ls /tmp/locked_dir
# Output: secret_report.pdf

# But entering or reading the file FAILS:
cd /tmp/locked_dir
# Output: bash: cd: /tmp/locked_dir: Permission denied!`,
      caption: {
        en: 'Directories require execute (x) permissions to allow entering and opening nested files.',
        bn: 'ফোল্ডারের ভেতরে প্রবেশ করতে ও ফাইল খুলতে ডিরেক্টরিতে এক্সিকিউট (x) অধিকার থাকা আবশ্যক।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Octal Representation: chmod 755, 644, and 600', bn: '৩. অক্টাল মান: chmod ৭৫৫, ৬৪৪ ও ৬০০' } },
    {
      type: 'para',
      text: {
        en: 'Each permission bit is assigned a binary power-of-two numerical value: Read is 4, Write is 2, and Execute is 1. Adding these values produces an octal digit from 0 to 7. Common production octals include: 755 for scripts and public directories; 644 for regular readable files; and 600 for private cryptographic SSH keys.',
        bn: 'প্রতিটি পারমিশন বিটের একটি নির্দিষ্ট বাইনারি সাংখ্যিক মান থাকে: Read হলো ৪, Write হলো ২ এবং Execute হলো ১। এগুলো যোগ করে ০ থেকে ৭ পর্যন্ত অক্টাল সংখ্যা পাওয়া যায়। প্রোডাকশনে বহুল ব্যবহৃত মানগুলো হলো: স্ক্রিপ্ট ও ডিরেক্টরির জন্য ৭৫৫; সাধারণ ফাইলের জন্য ৬৪৪; এবং গোপনীয় এসএসএইচ কি-র সুরক্ষার জন্য ৬০০।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Secure an SSH private key (owner read/write ONLY):
chmod 600 ~/.ssh/id_rsa

# Make a Bash deployment script executable:
chmod 755 /opt/deploy.sh

# Secure a shared configuration file:
chmod 644 /etc/app.conf

# Symbolic chmod syntax (add execute to user only):
chmod u+x build.sh`,
      caption: {
        en: 'Setting chmod 600 on SSH private keys prevents unauthorized local account inspection.',
        bn: 'এসএসএইচ কি-তে chmod ৬০০ দিলে অন্য কোনো লোকাল ইউজার গোপন কি পড়তে পারে না।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Ownership Management: chown and chgrp', bn: '৪. মালিকানা পরিচালনা: chown ও chgrp' } },
    {
      type: 'para',
      text: {
        en: 'Permissions are evaluated against file ownership. The chown command changes both the owning user and owning group simultaneously using the user:group syntax. Adding the -R flag recursively cascades ownership changes across entire nested directory trees, which is standard procedure when deploying web applications to /var/www/html.',
        bn: 'পারমিশন কার্যকর হয় ফাইলের মালিকানার ভিত্তিতে। chown কমান্ড user:group বাক্যরীতি ব্যবহার করে একই সাথে ফাইলের মালিক ও গ্রুপ উভয়ই পরিবর্তন করতে পারে। এর সাথে -R ফ্ল্যাগ যোগ করলে তা রিকার্সিভভাবে ফোল্ডারের ভেতরের সমস্ত ফাইলে কার্যকর হয়, যা /var/www/html-এ ওয়েব অ্যাপ ডেপ্লয় করার জন্য আদর্শ।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Transfer ownership of web directory to Nginx service account:
chown -R www-data:www-data /var/www/html/

# Change group ownership only:
chgrp -R engineering /opt/team_workspace/

# Verify ownership changes:
ls -ld /var/www/html
# Output: drwxr-xr-x 4 www-data www-data 4096 Oct 01 10:00 /var/www/html`,
      caption: {
        en: 'chown -R binds entire directory trees to target service users and daemon groups.',
        bn: 'chown -R পুরো ডিরেক্টরির মালিকানা নির্দিষ্ট সার্ভিস ইউজারের নামে হস্তান্তর করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. The Default Creation Mask: umask Mechanics', bn: '৫. ডিফল্ট ক্রিয়েশন মাস্ক: umask মেকানিজম' } },
    {
      type: 'para',
      text: {
        en: 'When a program creates a new file, it requests maximum base permissions: 666 for regular files, and 777 for directories. The system umask (User Mask) specifies permission bits subtracted from these base values upon creation. A default umask of 022 results in 644 files (666 - 022) and 755 directories; a hardened server umask of 027 creates 640 files and 750 directories.',
        bn: 'কোনো প্রোগ্রাম নতুন ফাইল তৈরির সময় সর্বোচ্চ পারমিশন চায়: ফাইলের জন্য ৬৬৬ এবং ডিরেক্টরির জন্য ৭৭৭। সিস্টেমের umask মানটি এই বেস পারমিশন থেকে বিয়োগ হয়ে নতুন ফাইলের পারমিশন ঠিক করে। স্বাভাবিক umask ০২২ হলে তৈরি হওয়া ফাইলের পারমিশন হয় ৬৪৪ (৬৬৬ - ০২২) এবং ডিরেক্টরি হয় ৭৫৫; আর নিরাপদ সার্ভারে ০২৭ ব্যবহার করলে ফাইল হয় ৬৪০ এবং ডিরেক্টরি হয় ৭৫০।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Check current shell creation mask:
umask
# Output: 0022

# Temporarily enforce strict umask for sensitive batch export:
umask 0027

# Create new test file and directory:
touch sensitive_export.csv
mkdir sensitive_backup

# Inspect resulting permissions:
ls -ld sensitive_export.csv sensitive_backup
# Output:
# -rw-r----- 1 root root    0 Oct 01 10:00 sensitive_export.csv  (640!)
# drwxr-x--- 2 root root 4096 Oct 01 10:00 sensitive_backup      (750!)`,
      caption: {
        en: 'umask 027 prevents public "others" from reading newly generated database exports.',
        bn: 'umask ০২৭ নিশ্চিত করে সাধারণ ইউজাররা যেন নতুন তৈরি হওয়া ব্যাকআপ পড়তে না পারে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Special Permission: SUID (Set User ID, 4000)', bn: '৬. বিশেষ পারমিশন: SUID (সেট ইউজার আইডি, ৪০০০)' } },
    {
      type: 'para',
      text: {
        en: 'Standard executables run with the permissions of the user launching the command. When the SUID bit (octal 4000) is enabled on an executable, the program runs with the privileges of the file owner instead. For example, /usr/bin/passwd is owned by root and has SUID enabled: this allows regular unprivileged users to update their encrypted password inside /etc/shadow safely.',
        bn: 'সাধারণ প্রোগ্রামগুলো যে ইউজার চালু করে তার পারমিশনেই চলে। কিন্তু কোনো ফাইলে SUID বিট (অক্টাল ৪০০০) সক্রিয় থাকলে প্রোগ্রামটি চালনাকারীর বদলে ফাইলের আসল মালিকের (যেমন রুটের) ক্ষমতায় চলে। উদাহরণস্বরূপ, /usr/bin/passwd ফাইলের মালিক রুট এবং এতে SUID চালু থাকে, ফলে সাধারণ ইউজার নিজের পাসওয়ার্ড নিরাপদে বদলাতে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect SUID on the passwd binary (notice the 's' in the user block):
ls -l /usr/bin/passwd
# Output: -rwsr-xr-x 1 root root 68208 Apr 09 12:00 /usr/bin/passwd

# Enabling SUID on a custom binary:
chmod 4755 /usr/local/bin/custom_tool

# SECURITY AUDIT: Search system for unauthorized SUID root binaries:
find / -perm -4000 -type f 2>/dev/null`,
      caption: {
        en: 'SUID elevates execution privileges to the binary owner, requiring strict security audits.',
        bn: 'SUID প্রোগ্রামকে মালিকের ক্ষমতায় চলতে দেয়, তাই নিয়মিত সিকিউরিটি অডিট করা আবশ্যক।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Special Permission: SGID (Set Group ID, 2000)', bn: '৭. বিশেষ পারমিশন: SGID (সেট গ্রুপ আইডি, ২০০০)' } },
    {
      type: 'para',
      text: {
        en: 'When applied to a shared directory, the SGID bit (octal 2000) changes file inheritance. Any newly created file or subdirectory automatically inherits the group ownership of the parent folder, rather than the primary group of the creator. This mechanism is indispensable for collaborative shared folders across developer teams.',
        bn: 'কোনো ডিরেক্টরিতে SGID বিট (অক্টাল ২০০০) দেওয়া থাকলে ফাইলের গ্রুপ নির্ধারণ বদলে যায়। তার ভেতরে তৈরি হওয়া যেকোনো নতুন ফাইল বা ফোল্ডার স্বয়ংক্রিয়ভাবে প্যারেন্ট ডিরেক্টরির গ্রুপ মালিকানা লাভ করে, ইউজারের নিজস্ব গ্রুপ নয়। দলগত কাজের জন্য এটি অপরিহার্য, কারণ অন্য সহকর্মীরা সহজেই ফাইলগুলোতে এক্সেস করতে পারেন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create shared engineering team directory:
mkdir /opt/engineering_collab
chown root:engineering /opt/engineering_collab

# Set permissions to 2775 (SGID + rwxrwxr-x):
chmod 2775 /opt/engineering_collab

# Notice the 's' in the group permission block:
ls -ld /opt/engineering_collab
# Output: drwxrwsr-x 2 root engineering 4096 Oct 01 10:00 /opt/engineering_collab`,
      caption: {
        en: 'SGID ensures seamless file sharing by inheriting parent directory group ownership.',
        bn: 'SGID নতুন ফাইলে মূল ফোল্ডারের গ্রুপ পারমিশন দিয়ে সহজ দলগত সহযোগিতা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Special Permission: The Sticky Bit (1000)', bn: '৮. বিশেষ পারমিশন: স্টিকি বিট (১০০০)' } },
    {
      type: 'para',
      text: {
        en: 'In an unprotected directory with 777 permissions, any user can delete or rename files belonging to another account. The Sticky Bit (octal 1000) eliminates this risk by restricting removal rights. Under this bit, users can modify or delete only the files they personally own, even inside world-writable directories. This safeguard keeps shared areas like /tmp safe from malicious deletions.',
        bn: '৭৭৭ পারমিশন দেওয়া কোনো উন্মুক্ত ডিরেক্টরিতে যেকোনো ইউজার অন্যের যেকোনো ফাইল মুছে দিতে বা নাম বদলে দিতে পারে। স্টিকি বিট (অক্টাল ১০০০) ফাইল মোছার ক্ষমতা সীমিত করে এই মারাত্মক নিরাপত্তা ঝুঁকি দূর করে। এটি সক্রিয় থাকলে উন্মুক্ত ফোল্ডারেও ইউজাররা কেবল নিজেদের তৈরি করা ফাইল মুছতে পারে। এই নিরাপত্তা ব্যবস্থা /tmp ফোল্ডারকে সুরক্ষিত রাখে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect the /tmp directory (notice the 't' at the very end):
ls -ld /tmp
# Output: drwxrwxrwt 28 root root 4096 Oct 01 10:00 /tmp

# Applying the sticky bit to a shared scratch space:
chmod 1777 /var/shared_scratch
# Or symbolic notation:
chmod +t /var/shared_scratch`,
      caption: {
        en: 'The Sticky Bit (indicated by "t") restricts file deletion strictly to file owners.',
        bn: 'স্টিকি বিট (t দ্বারা চিহ্নিত) অন্যের ফাইল মুছে ফেলা ঠেকিয়ে ডেটা সুরক্ষা দেয়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Access Control Lists (ACLs): getfacl and setfacl', bn: '৯. অ্যাক্সেস কন্ট্রোল লিস্ট (ACL): getfacl ও setfacl' } },
    {
      type: 'para',
      text: {
        en: 'Standard POSIX UGO permissions allow assigning only one owning user and one owning group per file. When a file must be accessible to two different users with different permissions, POSIX permissions fail. POSIX Access Control Lists (ACLs) extend permissions, granting access to multiple specific users or groups explicitly.',
        bn: 'সাধারণ পজিক্স মডেলে প্রতি ফাইলে মাত্র একজন মালিক এবং একটি গ্রুপ রাখা যায়। কিন্তু একটি ফাইল যদি আলাদা দুজন ইউজারের সাথে ভিন্ন ভিন্ন অধিকারে শেয়ার করতে হয়, তখন সাধারণ পারমিশন ব্যর্থ হয়। অ্যাক্সেস কন্ট্রোল লিস্ট (ACL) এই সীমাবদ্ধতা দূর করে যেকোনো সংখ্যক নির্দিষ্ট ইউজার বা গ্রুপকে আলাদা পারমিশন দিতে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# View active extended ACLs on a file:
getfacl /var/log/audit.log

# Grant read/write access explicitly to developer 'alice' without changing group:
setfacl -m u:alice:rw /var/log/audit.log

# Notice the '+' indicator appended to standard permissions:
ls -l /var/log/audit.log
# Output: -rw-rw-r--+ 1 root root 1024 Oct 01 10:00 /var/log/audit.log

# Remove all custom extended ACLs:
setfacl -b /var/log/audit.log`,
      caption: {
        en: 'The "+" sign on ls -l indicates active fine-grained Access Control Lists (ACLs).',
        bn: 'ls -l কমান্ডে "+" চিহ্ন দেখলে বুঝতে হবে ফাইলটিতে আধুনিক ACL কার্যকর রয়েছে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Auditing File Permissions in Node.js', bn: '১০. Node.js-এ ফাইল পারমিশন অডিট করা' } },
    {
      type: 'para',
      text: {
        en: 'Here is a security utility in Node.js using fs.promises.stat to inspect file modes, calculate octal permissions, and verify whether dangerous SUID or world-writable bits are enabled.',
        bn: 'নিচে fs.promises.stat ব্যবহার করে ফাইলের অক্টাল মান হিসাব করা এবং বিপজ্জনক SUID বা সবার জন্য উন্মুক্ত রাইট পারমিশন আছে কিনা তা অডিট করার একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

async function auditFileSecurity(filePath) {
  const stats = await fs.stat(filePath);
  const rawMode = stats.mode;

  // Extract permission octal (masking with 0o7777):
  const octal = (rawMode & 0o7777).toString(8);

  const securityReport = {
    file: filePath,
    octalPermission: octal,
    isSuidEnabled: Boolean(rawMode & 0o4000),
    isSgidEnabled: Boolean(rawMode & 0o2000),
    isStickyBitEnabled: Boolean(rawMode & 0o1000),
    isWorldWritable: Boolean(rawMode & 0o0002)
  };

  console.log("Security Audit Report:", securityReport);
  return securityReport;
}

await auditFileSecurity("/etc/hosts");
console.log("Permission security audit completed");
// Output: Permission security audit completed`,
      caption: {
        en: 'Bitwise masking in Node.js calculates exact octal values and checks special SUID bits.',
        bn: 'Node.js বিটওয়াইজ অপারেশনের মাধ্যমে নিখুঁত অক্টাল মান বের করে নিরাপত্তা অডিট করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-prm-ex1',
      kind: 'predict',
      topic: 'linux: octal value for read only permission',
      question: {
        en: 'What is the numeric value of the Read (r) permission bit in the Linux octal permission system?',
        bn: 'Linux অক্টাল পারমিশন পদ্ধতিতে শুধুমাত্র পড়ার বা Read (r) অধিকারের সাংখ্যিক মান কত?'
      },
      code: `/* Numeric octal value of Read (r): */
/* Read = _ */`,
      answer: '4',
      accept: ['4', 'four'],
      hint: {
        en: 'Read is 4 (Write is 2, Execute is 1).',
        bn: 'Read হলো ৪ (Write হলো ২, Execute হলো ১)।'
      },
      explanation: {
        en: 'Read has an octal value of 4, Write is 2, and Execute is 1.',
        bn: 'অক্টাল পদ্ধতিতে Read হলো ৪, Write হলো ২ এবং Execute হলো ১।'
      }
    },
    {
      id: 'lnx-prm-ex2',
      kind: 'mcq',
      topic: 'linux: sticky bit primary purpose',
      question: {
        en: 'What is the primary security duty of the Sticky Bit (octal 1000) when placed on a public shared directory like /tmp?',
        bn: '/tmp-এর মতো উন্মুক্ত ডিরেক্টরিতে স্টিকি বিট (১০০০) ব্যবহারের মূল নিরাপত্তা সুবিধা কোনটি?'
      },
      options: [
        { en: 'It ensures that users can delete or rename only the files they personally own', bn: 'এটি নিশ্চিত করে যে ইউজাররা কেবলমাত্র তাদের নিজস্ব তৈরি করা ফাইলই মুছতে বা পরিবর্তন করতে পারে' },
        { en: 'It encrypts all files with military grade AES', bn: 'সব ফাইল এনক্রিপ্ট করে' },
        { en: 'It turns off the internet network', bn: 'ইন্টারনেট বন্ধ করে দেয়' },
        { en: 'It deletes all files after 5 minutes', bn: '৫ মিনিট পর সব ফাইল মুছে ফেলে' }
      ],
      answer: 0,
      hint: {
        en: 'Restricts deletion strictly to file owners.',
        bn: 'শুধুমাত্র ফাইলের মালিককে ফাইল মোছার অধিকার দেয়।'
      },
      explanation: {
        en: 'The Sticky Bit prevents users from deleting or renaming files owned by other users in world-writable folders.',
        bn: 'স্টিকি বিট চালু থাকলে উন্মুক্ত ফোল্ডারেও কেউ অন্যের ফাইল মুছতে পারে না।'
      }
    },
    {
      id: 'lnx-prm-ex3',
      kind: 'mcq',
      topic: 'linux: suid special bit octal value',
      question: {
        en: 'What is the leading octal digit used to set the SUID (Set User ID) bit on an executable file?',
        bn: 'কোনো এক্সিকিউটেবল ফাইলে SUID (সেট ইউজার আইডি) বিট সক্রিয় করতে কোন অগ্রণী অক্টাল সংখ্যাটি ব্যবহার করা হয়?'
      },
      options: [
        { en: '4000 (leading 4)', bn: '৪০০০ (শুরুর ৪)' },
        { en: '2000 (leading 2)', bn: '২০০০ (শুরুর ২)' },
        { en: '1000 (leading 1)', bn: '১০০০ (শুরুর ১)' },
        { en: '7777 (all bits)', bn: '৭৭৭৭ (সব বিট)' }
      ],
      answer: 0,
      hint: {
        en: 'SUID is 4000 (SGID is 2000, Sticky is 1000).',
        bn: 'SUID হলো ৪০০০ (SGID হলো ২০০০, স্টিকি হলো ১০০০)।'
      },
      explanation: {
        en: 'SUID has an octal value of 4000, SGID is 2000, and the Sticky Bit is 1000.',
        bn: 'SUID-এর মান ৪০০০, SGID-এর মান ২০০০ এবং স্টিকি বিটের মান ১০০০।'
      }
    }
  ],
  quiz: {
    id: 'lnx-prm-quiz',
    title: { en: 'Linux Permissions & Security Quiz', bn: 'Linux পারমিশন ও নিরাপত্তা কুইজ' },
    questions: [
      {
        id: 'lprmq1',
        kind: 'mcq',
        topic: 'linux: execute permission on directories',
        question: {
          en: 'What operational capability does Execute (x) permission grant when assigned to a directory?',
          bn: 'একটি ডিরেক্টরিতে Execute (x) পারমিশন থাকলে ব্যবহারকারী কোন কাজটি করার অধিকার পায়?'
        },
        options: [
          { en: 'It permits traversing (cd) into the directory and opening files within it', bn: 'ডিরেক্টরিতে প্রবেশ করার (cd) এবং তার ভেতরের ফাইলগুলো খোলার অধিকার দেয়' },
          { en: 'It runs the directory as a C program', bn: 'ডিরেক্টরিকে প্রোগ্রাম হিসেবে চালায়' },
          { en: 'It permanently deletes all files in the folder', bn: 'সব ফাইল মুছে ফেলে' },
          { en: 'It reboots the computer hardware', bn: 'কম্পিউটার রিস্টার্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Permits cd and accessing files within.',
          bn: 'cd করে প্রবেশ ও ফাইল এক্সেসের অধিকার দেয়।'
        },
        explanation: {
          en: 'On directories, read permits listing filenames, while execute is required to enter the folder and access file inodes.',
          bn: 'ফোল্ডারে প্রবেশের অধিকার নিশ্চিত করতে এক্সিকিউট (x) পারমিশন থাকা আবশ্যক।'
        }
      },
      {
        id: 'lprmq2',
        kind: 'mcq',
        topic: 'linux: suid security hazard',
        question: {
          en: 'Why is SUID considered a major security risk if enabled carelessly on system binaries?',
          bn: 'সিস্টেমের ফাইলে অসতর্কভাবে SUID বিট চালু রাখলে তা কেন মারাত্মক নিরাপত্তা ঝুঁকি হিসেবে বিবেচিত হয়?'
        },
        options: [
          { en: 'Because any user executing the binary inherits the root permissions of the file owner, enabling potential privilege escalation', bn: 'কারণ যে কোনো ইউজার প্রোগ্রামটি চালালেই ফাইলের মালিকের (রুটের) ক্ষমতা পেয়ে যায়, যা প্রিভিলেজ এসকেলেশন ঘটাতে পারে' },
          { en: 'Because SUID shuts down all firewall rules', bn: 'ফায়ারওয়াল বন্ধ করে দেয়' },
          { en: 'Because it doubles the physical CPU heat', bn: 'সিপিইউ গরম করে' },
          { en: 'Because it deletes the operating system', bn: 'অপারেটিং সিস্টেম মুছে ফেলে' }
        ],
        answer: 0,
        hint: {
          en: 'Executes with file owner root privileges.',
          bn: 'ফাইলের মালিকের রুট পারমিশনে চলে।'
        },
        explanation: {
          en: 'SUID allows callers to run tools with owner privileges, meaning an exploitable bug in an SUID binary yields root access.',
          bn: 'SUID চালু থাকলে প্রোগ্রামে কোনো বাগ থাকলে আক্রমণকারী সহজেই সম্পূর্ণ রুট ক্ষমতা দখল করতে পারে।'
        }
      },
      {
        id: 'lprmq3',
        kind: 'mcq',
        topic: 'linux: umask subtraction operation',
        question: {
          en: 'What are the resulting permissions of a newly created text file if the system umask is set to 022?',
          bn: 'সিস্টেমে umask ০২২ সেট করা থাকলে নতুন তৈরি হওয়া একটি সাধারণ টেক্সট ফাইলের পারমিশন কত হবে?'
        },
        options: [
          { en: '644 (-rw-r--r--)', bn: '৬৪৪ (-rw-r--r--)' },
          { en: '755 (-rwxr-xr-x)', bn: '৭৫৫ (-rwxr-xr-x)' },
          { en: '777 (-rwxrwxrwx)', bn: '৭৭৭ (-rwxrwxrwx)' },
          { en: '600 (-rw-------)', bn: '৬০০ (-rw-------)' }
        ],
        answer: 0,
        hint: {
          en: 'Base 666 minus 022 equals 644.',
          bn: 'বেস ৬৬৬ থেকে ০২২ বাদ দিলে ৬৪৪ হয়।'
        },
        explanation: {
          en: 'Regular files start with base 666. Subtracting umask 022 produces 644 (owner read/write, group/others read-only).',
          bn: 'ফাইলের বেস পারমিশন ৬৬৬ থেকে ০২২ বিয়োগ হয়ে ফলাফল দাঁড়ায় ৬৪৪।'
        }
      },
      {
        id: 'lprmq4',
        kind: 'mcq',
        topic: 'linux: access control lists advantage',
        question: {
          en: 'What is the primary advantage of POSIX Access Control Lists (setfacl) over standard chmod permissions?',
          bn: 'সাধারণ chmod পারমিশনের তুলনায় পজিক্স অ্যাক্সেস কন্ট্রোল লিস্টের (setfacl) মূল সুবিধা কোনটি?'
        },
        options: [
          { en: 'They allow granting specific permissions to multiple distinct users and groups beyond the single UGO limits', bn: 'তারা সাধারণ একজন মালিক ও গ্রুপের বাইরে গিয়ে একাধিক নির্দিষ্ট ইউজার বা গ্রুপকে আলাদা পারমিশন দিতে পারে' },
          { en: 'They eliminate the need for hard drives', bn: 'হার্ডড্রাইভের দরকার হয় না' },
          { en: 'They make files execute twice as fast', bn: 'ফাইল দ্বিগুণ গতিতে চলে' },
          { en: 'They turn off all file logging', bn: 'লগিং বন্ধ করে দেয়' }
        ],
        answer: 0,
        hint: {
          en: 'Fine-grained permissions for multiple users and groups.',
          bn: 'একাধিক ইউজার ও গ্রুপের জন্য সূক্ষ্ম পারমিশন।'
        },
        explanation: {
          en: 'ACLs remove the single-user single-group restriction of basic POSIX, permitting rich multi-user access rules.',
          bn: 'ACL সাধারণ পারমিশনের সীমাবদ্ধতা দূর করে বিভিন্ন ব্যবহারকারীকে আলাদা আলাদা অধিকার দিতে সাহায্য করে।'
        }
      }
    ]
  }
};
