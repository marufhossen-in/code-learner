import type { Lesson } from '../../../lib/types';

export const ShellsAndTheShellLesson: Lesson = {
  slug: 'shells-and-the-shell',
  tech: 'linux',
  title: {
    en: 'Linux Architecture & The Shell: Terminal, Navigation & Pipelines',
    bn: 'Linux আর্কিটেকচার ও শেল: টার্মিনাল, নেভিগেশন ও পাইপলাইন'
  },
  summary: {
    en: 'Beginner to expert guide to Linux shell architecture across 10 structured topics. Understand the monolithic kernel versus userspace boundary. Navigate directory trees using absolute and relative paths. Master file descriptors 0, 1, and 2 for standard streams (stdin, stdout, stderr). Redirect outputs and merge error streams using > and 2>&1. Chain processes in memory using Unix pipes (|). Filter log telemetry with grep, awk, and sed. Configure environment variables and PATH lookups, evaluate exit codes ($?), and execute shell pipelines in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux শেল আর্কিটেকচারের শুরু থেকে অ্যাডভান্সড গাইড। মনোলিথিক কার্নেল ও ইউজারস্পেসের বিভাজন বুঝুন। পরম (absolute) ও আপেক্ষিক (relative) পাথ ব্যবহার করে ডিরেক্টরি নেভিগেট করুন। ফাইল ডেসক্রিপ্টর ০, ১ এবং ২ ভিত্তিক স্ট্যান্ডার্ড স্ট্রিম আয়ত্ত করুন। আউটপুট রিডাইরেকশন এবং ২>&১ দিয়ে এরর স্ট্রিম একত্রীকরণ শিখুন। ইউনিক্স পাইপ (\|) সহযোগে মেমরিতে প্রসেস শৃঙ্খলিত করুন। grep, awk ও sed দিয়ে লগ ফিল্টার করুন। এনভায়রনমেন্ট ভেরিয়েবল ও PATH কনফিগার করুন, এক্সিট কোড ($?) যাচাই করুন এবং Node.js-এ শেল পাইপলাইন চালান।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'files-and-the-file',
    tech: 'linux',
    title: {
      en: 'Linux Filesystem Hierarchy: FHS, Inodes & Link Architecture',
      bn: 'Linux ফাইলসিস্টেম হায়ারার্কি: FHS, ইনোড ও লিঙ্ক আর্কিটেকচার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Kernel vs Userspace: What is the Shell?', bn: '১. কার্নেল বনাম ইউজারস্পেস: শেল কী?' } },
    {
      type: 'para',
      text: {
        en: 'The Linux architecture separates the core operating system into two distinct rings. The Linux Kernel executes in privileged kernel space, directly controlling physical CPU cores, RAM allocations, and hardware peripherals. Applications, web servers, and terminals run in unprivileged userspace. The Shell (such as Bash or Zsh) is a command-line interpreter that reads user instructions and translates them into system calls executed by the kernel.',
        bn: 'Linux অপারেটিং সিস্টেম তার অভ্যন্তরীণ গঠনকে দুটি প্রধান স্তরে ভাগ করে। কার্নেল (Kernel) প্রিভিলেজড মোডে থেকে সরাসরি সিপিইউ, র‍্যাম এবং হার্ডওয়্যার নিয়ন্ত্রণ করে। অন্যদিকে অ্যাপ্লিকেশন ও টার্মিনাল চলে সাধারণ ইউজারস্পেসে। শেল (যেমন Bash বা Zsh) হলো একটি কমান্ড ইন্টারপ্রেটার যা ব্যবহারকারীর নির্দেশ গ্রহণ করে কার্নেলের উপযোগী সিস্টেম কলে রূপান্তর করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Identify your current active shell:
echo $SHELL
# Output: /bin/bash

# Query current running Linux kernel version:
uname -r
# Output: 6.5.0-28-generic

# Inspect operating system release distribution:
cat /etc/os-release | grep PRETTY_NAME
# Output: PRETTY_NAME="Ubuntu 24.04 LTS"`,
      caption: {
        en: 'The shell bridges user commands with privileged kernel system call routines.',
        bn: 'শেল ব্যবহারকারীর কমান্ড গ্রহণ করে সুরক্ষিত কার্নেল সিস্টেম কলের সাথে সংযোগ ঘটায়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Standard Streams (0, 1, 2) & Pipeline Redirection Architecture', bn: 'স্ট্যান্ডার্ড স্ট্রিম (০, ১, ২) ও পাইপলাইন রিডাইরেকশন আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Linux Standard Streams and Pipe Flow">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="160" height="100" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Process A: cat app.log</text>
<text x="80" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">FD 0: stdin (Keyboard)</text>
<text x="80" y="90" font-size="9" fill="#4ade80" text-anchor="middle">FD 1: stdout (Data)</text>
<text x="80" y="108" font-size="9" fill="#f87171" text-anchor="middle">FD 2: stderr (Errors)</text>

<path d="M165,70 L255,70" stroke="#4ade80" stroke-width="2"/>
<text x="210" y="60" font-size="10" font-weight="700" fill="#4ade80" text-anchor="middle">Pipe |</text>

<rect x="260" y="20" width="160" height="100" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="340" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Process B: grep ERROR</text>
<text x="340" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">Piped into FD 0</text>
<text x="340" y="90" font-size="9" fill="#fbbf24" text-anchor="middle">Filters Target Lines</text>

<path d="M425,70 L505,70" stroke="#10b981" stroke-width="2"/>
<text x="465" y="60" font-size="10" font-weight="700" fill="#10b981" text-anchor="middle">&gt;&gt; Append</text>

<rect x="510" y="20" width="150" height="100" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="585" y="45" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Disk Target</text>
<text x="585" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">errors_archive.log</text>
<text x="585" y="95" font-size="9" fill="#4ade80" text-anchor="middle">Zero intermediate file!</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Directory Navigation: Absolute vs Relative Paths', bn: '২. ডিরেক্টরি নেভিগেশন: পরম বনাম আপেক্ষিক পাথ' } },
    {
      type: 'para',
      text: {
        en: 'In Linux, all files and folders exist within a single hierarchical tree rooted at / (forward slash). An absolute path starts with / and uniquely identifies a location regardless of where you currently stand (e.g. /var/log/nginx). A relative path is resolved relative to your current working directory (e.g. ./config or ../parent).',
        bn: 'Linux-এ সমস্ত ফাইল ও ফোল্ডার একটি একক মূল ডিরেক্টরি বা রুটের (/) অধীনে সাজানো থাকে। একটি পরম বা অ্যাবসোলিউট পাথ সর্বদা / দিয়ে শুরু হয় এবং আপনি বর্তমানে যেখানেই থাকুন না কেন নির্দিষ্ট অবস্থান খুঁজে দেয় (যেমন /var/log/nginx)। আর একটি আপেক্ষিক বা রিলেটিভ পাথ বর্তমান ডিরেক্টরির ওপর ভিত্তি করে কাজ করে (যেমন ./config বা ../parent)।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Print current working directory:
pwd
# Output: /home/developer

# Navigate using relative path (move up one level):
cd ..
pwd
# Output: /home

# Navigate using absolute path:
cd /var/log/nginx

# List files with detailed permissions, human sizes, and hidden files:
ls -la
# Output:
# drwxr-xr-x  2 root root  4096 Oct 01 10:00 .
# drwxr-xr-x 12 root root  4096 Oct 01 09:30 ..
# -rw-r-----  1 www-data adm 14205 Oct 01 12:45 access.log
# -rw-r-----  1 www-data adm   840 Oct 01 11:20 error.log`,
      caption: {
        en: 'pwd confirms active paths, and ls -la exposes hidden configuration dotfiles.',
        bn: 'pwd বর্তমান অবস্থান দেখায় এবং ls -la লুকানো কনফিগারেশন ফাইল প্রকাশ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Standard Streams: File Descriptors 0, 1, and 2', bn: '৩. স্ট্যান্ডার্ড স্ট্রিম: ফাইল ডেসক্রিপ্টর ০, ১ ও ২' } },
    {
      type: 'para',
      text: {
        en: 'Every process spawned in Linux automatically opens three default I/O data channels called standard streams, identified by numeric file descriptors. File Descriptor 0 is standard input (stdin), reading from keyboard or piped data. File Descriptor 1 is standard output (stdout), carrying normal program results. File Descriptor 2 is standard error (stderr), carrying error diagnostics independently.',
        bn: 'Linux-এ চালু হওয়া প্রতিটি প্রসেস স্বয়ংক্রিয়ভাবে ৩টি প্রধান ডেটা চ্যানেল খোলে, যা ফাইল ডেসক্রিপ্টর নামে পরিচিত। ফাইল ডেসক্রিপ্টর ০ হলো স্ট্যান্ডার্ড ইনপুট (stdin), যা কীবোর্ড বা পাইপ থেকে ইনপুট নেয়। ফাইল ডেসক্রিপ্টর ১ হলো স্ট্যান্ডার্ড আউটপুট (stdout), যা সফল আউটপুট বহন করে। আর ফাইল ডেসক্রিপ্টর ২ হলো স্ট্যান্ডার্ড এরর (stderr), যা ত্রুটির বার্তা আলাদাভাবে পৌঁছে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `STANDARD STREAM CHANNELS:
+-------------------+-------------------+--------------------+--------------------+
| File Descriptor   | Stream Name       | Default Source     | Primary Purpose    |
+-------------------+-------------------+--------------------+--------------------+
| 0                 | stdin             | Keyboard / Socket  | Incoming data text |
| 1                 | stdout            | Terminal Display   | Normal data stream |
| 2                 | stderr            | Terminal Display   | Error diagnostics  |
+-------------------+-------------------+--------------------+--------------------+`,
      caption: {
        en: 'Standard stream separation allows programs to distinguish real data from error messages.',
        bn: 'স্ট্রিমগুলো আলাদা থাকার কারণে কাজের ডেটা এবং এরর ম্যাসেজ সহজে পৃথক করা যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Output Redirection: Overwriting (>) vs Appending (>>)', bn: '৪. আউটপুট রিডাইরেকশন: প্রতিস্থাপন (>) বনাম সংযোজন (>>)' } },
    {
      type: 'para',
      text: {
        en: 'By default, stdout writes to the terminal screen. The single greater-than operator (>) redirects this output into a file, clearing and overwriting previous contents completely. In contrast, the double operator (>>) appends incoming text to the end of the destination file, keeping historical logs intact. To feed file contents into standard input, use the less-than operator (<).',
        bn: 'ডিফল্টভাবে সমস্ত আউটপুট টার্মিনাল স্ক্রিনে দেখা যায়। একক গ্রেটার-দ্যান (>) অপারেটর ব্যবহার করলে শেল আগের সব লেখা মুছে নতুন করে ফাইল তৈরি করে। এর বিপরীতে ডাবল অপারেটর (>>) ফাইলের পুরনো তথ্য ঠিক রেখে শেষে নতুন ডেটা যোগ করে। কোনো ফাইলের তথ্য ইনপুট হিসেবে পাঠাতে লেস-দ্যান (<) ব্যবহৃত হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Overwrite target file (clears previous lines!):
echo "Server Initialized at 10:00" > /tmp/deploy.log

# Append lines without destroying prior history:
echo "Database migration completed successfully" >> /tmp/deploy.log
echo "Worker cluster active" >> /tmp/deploy.log

# Inspect written contents:
cat /tmp/deploy.log
# Output:
# Server Initialized at 10:00
# Database migration completed successfully
# Worker cluster active`,
      caption: {
        en: 'Use > to overwrite initial configuration state, and >> for continuous event logging.',
        bn: 'নতুন কনফিগারেশনের জন্য > এবং চলমান ইভেন্ট লগিংয়ের জন্য >> ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Redirecting and Merging Errors: 2> and 2>&1', bn: '৫. এরর রিডাইরেকশন ও একত্রীকরণ: ২> ও ২>&১' } },
    {
      type: 'para',
      text: {
        en: 'Because standard redirection (>) captures only stdout (FD 1), error messages from failed commands still spill onto the screen. To isolate errors, 2> redirects stderr into a dedicated log. To merge both streams into a unified chronological log, 2>&1 instructs the shell to redirect File Descriptor 2 into File Descriptor 1.',
        bn: 'যেহেতু সাধারণ রিডাইরেকশন (>) কেবল stdout (১) ধরে, তাই কোনো কমান্ড ব্যর্থ হলে এরর ম্যাসেজ সরাসরি স্ক্রিনে ভেসে ওঠে। এরর আলাদা করতে ২> ব্যবহার করে stderr অন্য ফাইলে পাঠানো যায়। আর সফল আউটপুট এবং এরর উভয়কে একসাথে এক ফাইলে রাখতে ২>&১ ব্যবহার করা হয়, যা ফাইল ডেসক্রিপ্টর ২ কে ১ এর সাথে মিলিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. Redirect stdout to out.log, and stderr to error.log separately:
find /var/log -name "*.log" > /tmp/found.log 2> /tmp/denied_errors.log

# 2. Merge both streams into a single unified audit file:
./run_nightly_backup.sh > /var/log/backup.log 2>&1

# 3. Modern shorthand to merge both streams:
./run_nightly_backup.sh &> /var/log/backup.log

# 4. Silence all output and errors completely (discard to bit bucket):
command_to_silence > /dev/null 2>&1`,
      caption: {
        en: '2>&1 guarantees that automated cron jobs capture both runtime errors and normal logs.',
        bn: '২>&১ নিশ্চিত করে যেন স্বয়ংক্রিয় কাজের ক্ষেত্রে এরর এবং আউটপুট উভয়ই এক ফাইলে থাকে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. The Unix Pipeline (|): Composing Modular Tools', bn: '৬. ইউনিক্স পাইপলাইন (\|): মডুলার টুলের মেলবন্ধন' } },
    {
      type: 'para',
      text: {
        en: 'The core Unix philosophy advocates building small, focused utilities that do one job exceptionally well and compose cleanly with others. The pipe operator (|) connects the standard output of the left command directly into the standard input of the right command entirely within server RAM, avoiding slow intermediate temporary disk files.',
        bn: 'ইউনিক্স দর্শনের মূল কথা হলো এমন ছোট ছোট টুল তৈরি করা যা একটি নির্দিষ্ট কাজ নিখুঁতভাবে করতে পারে এবং অন্যের সাথে যুক্ত হতে পারে। পাইপ (\|) অপারেটর বাম পাশের কমান্ডের আউটপুটকে সরাসরি ডান পাশের কমান্ডের ইনপুট বানিয়ে দেয়। এটি পুরো কাজটি মেমরির ভেতর সম্পন্ন করে বলে ডিস্কে কোনো সাময়িক ফাইল তৈরির প্রয়োজন হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Real-world DevOps pipeline: Find top 3 IP addresses with failed requests:
cat /var/log/nginx/access.log | grep " 500 " | awk '{print $1}' | sort | uniq -c | sort -rn | head -n 3
# Output:
# 142 192.168.1.105
#  89 10.0.4.22
#  31 172.16.0.8

# Check total count of active TCP sockets:
ss -tulpn | grep LISTEN | wc -l
# Output: 18`,
      caption: {
        en: 'Pipelines stream data between tools in memory, eliminating disk I/O bottlenecks.',
        bn: 'পাইপলাইন মেমরির মাধ্যমে তথ্য আদান-প্রদান করে ডিস্কের ধীরগতির সমস্যা দূর করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Text Processing Triad: grep, awk, and sed', bn: '৭. টেক্সট প্রসেসিং ত্রয়ী: grep, awk ও sed' } },
    {
      type: 'para',
      text: {
        en: 'Three command-line tools dominate Linux log analysis. grep filters rows matching regular expressions. awk processes structured tabular columns using delimiter fields ($1, $2, and others). sed (stream editor) performs in-place text transformations and substitutions without opening an interactive GUI editor.',
        bn: 'Linux সার্ভারের লগ পর্যবেক্ষণে ৩টি কমান্ড সবচেয়ে বেশি ব্যবহৃত হয়। grep রেগুলার এক্সপ্রেশন ব্যবহার করে নির্দিষ্ট লাইন খুঁজে বের করে। awk কলামভিত্তিক সাজানো তথ্যের নির্দিষ্ট অংশ ($1, $2 এবং অন্যান্য) তুলে আনতে পারে। আর sed (স্ট্রিম এডিটর) কোনো টেক্সট এডিটর না খুলেই সরাসরি ফাইলের ভেতর টেক্সট রিপ্লেস বা রূপান্তর করতে সাহায্য করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# 1. grep: Extract lines containing FATAL case-insensitively:
grep -i "fatal" /var/log/application.log

# 2. awk: Print username (column 1) and user ID (column 3) from /etc/passwd:
awk -F':' '{print "User: " $1 " -> UID: " $3}' /etc/passwd | head -n 3
# Output:
# User: root -> UID: 0
# User: daemon -> UID: 1
# User: bin -> UID: 2

# 3. sed: Replace port 8080 with 3000 across a configuration file:
sed -i 's/8080/3000/g' /etc/app/config.env`,
      caption: {
        en: 'Combining grep, awk, and sed allows instant parsing of multi-gigabyte server logs.',
        bn: 'grep, awk ও sed মিলিয়ে গিগাবাইট আকারের বড় বড় লগ নিমিষেই বিশ্লেষণ করা যায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Environment Variables and The $PATH Lookup', bn: '৮. এনভায়রনমেন্ট ভেরিয়েবল ও $PATH লুকআপ' } },
    {
      type: 'para',
      text: {
        en: 'When a user executes a command like node, the shell does not search the entire hard drive. It searches the colon-separated directory paths declared inside the $PATH environment variable in priority order. Local shell variables are private to the current shell; the export command promotes a variable into an environment variable inherited by all child processes.',
        bn: 'ব্যবহারকারী যখন node কমান্ড চালায়, তখন শেল পুরো হার্ডড্রাইভ খোঁজে না। এটি $PATH ভেরিয়েবলে কোলন দিয়ে সাজানো ডিরেক্টরিগুলোতে ক্রমানুসারে খুঁজে প্রথম পাওয়া প্রোগ্রামটি চালায়। সাধারণ লোকাল ভেরিয়েবল কেবল ওই শেলটিতে থাকে; কিন্তু export কমান্ড দিলে ভেরিয়েবলটি এনভায়রনমেন্ট ভেরিয়েবলে রূপ নেয় যা সমস্ত চাইল্ড প্রসেসে পৌঁছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect global executable lookup PATH:
echo $PATH
# Output: /usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Local variable (Not inherited by child commands):
MY_API_KEY="secret_key_101"

# Promote to environment variable inherited by Node.js or scripts:
export MY_API_KEY="secret_key_101"

# Add custom binary directory to beginning of PATH:
export PATH="/opt/custom_bin:$PATH"`,
      caption: {
        en: 'The PATH variable dictates executable search order; export passes variables down to child processes.',
        bn: 'PATH এক্সিকিউটেবল খোঁজার ক্রম ঠিক করে এবং export চাইল্ড প্রসেসে মান পাঠায়।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Exit Status Codes ($?) & Conditional Execution', bn: '৯. এক্সিট স্ট্যাটাস কোড ($?) ও শর্তাধীন এক্সেকিউশন' } },
    {
      type: 'para',
      text: {
        en: 'Every command that terminates in Linux returns an integer exit code between 0 and 255 to the kernel, inspectable via $?. A return code of 0 represents successful execution without error. Any non-zero code (1 to 255) represents an error. The && operator executes the subsequent command only if the previous command returned 0; the || operator executes only if it failed.',
        bn: 'Linux-এ যেকোনো কমান্ড শেষ হওয়ার পর ০ থেকে ২৫৫ পর্যন্ত একটি পূর্ণসংখ্যা কোড ফেরত দেয়, যা $? দিয়ে দেখা যায়। ০ মানে কাজটি শতভাগ সফলভাবে শেষ হয়েছে। ০ ছাড়া অন্য যেকোনো মান (১ থেকে ২৫৫) ত্রুটি বা ব্যর্থতা নির্দেশ করে। && অপারেটর আগের কমান্ড সফল (০) হলেই পরেরটি চালায়; আর || অপারেটর আগেরটি ব্যর্থ হলেই পরেরটি কার্যকর করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Verify exit code of successful command:
ls /tmp > /dev/null
echo $?
# Output: 0 (Success!)

# Verify exit code of non-existent path:
ls /non_existent_folder 2> /dev/null
echo $?
# Output: 2 (Non-zero exit indicates failure!)

# Conditional build and deploy pipeline:
# Only restarts application if build command succeeded with code 0:
npm run build && systemctl restart my_app || echo "Build failed; aborting restart!"`,
      caption: {
        en: 'Exit code 0 confirms success; conditional operators && and || automate robust pipeline gates.',
        bn: 'এক্সিট কোড ০ সাফল্য নির্দেশ করে; && ও || অপারেটর ব্যর্থতা সামলে অটোমেশন পরিচালনা করে।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Executing Shell Pipelines in Node.js', bn: '১০. Node.js-এ শেল পাইপলাইন বাস্তবায়ন' } },
    {
      type: 'para',
      text: {
        en: 'Here is a production child process wrapper in Node.js using child_process.spawn to pipe streaming stdout data between processes without loading large files into Node memory.',
        bn: 'নিচে Node.js-এর child_process.spawn ব্যবহার করে পুরো ফাইল মেমরিতে না এনেই প্রসেসের মাঝে পাইপলাইন ডেটা আদান-প্রদান করার একটি প্রোডাকশন কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { spawn } from "child_process";

// Stream /var/log/syslog through grep to find memory alerts:
const logProcess = spawn("cat", ["/var/log/syslog"]);
const grepProcess = spawn("grep", ["-i", "oom-killer"]);

// Pipe stdout of cat directly into stdin of grep (In-memory Linux stream!):
logProcess.stdout.pipe(grepProcess.stdin);

grepProcess.stdout.on("data", (chunk) => {
  console.warn("Out of Memory Alert Detected:", chunk.toString());
});

grepProcess.on("close", (exitCode) => {
  console.log("Pipeline executed with exit code:", exitCode);
});

console.log("Linux child process pipeline initialized successfully");
// Output: Linux child process pipeline initialized successfully`,
      caption: {
        en: 'Node.js spawn streams pipeline data directly across Linux file descriptors.',
        bn: 'Node.js spawn সরাসরি Linux ফাইল ডেসক্রিপ্টরের মাধ্যমে পাইপলাইন ডেটা প্রবাহিত করে।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-shl-ex1',
      kind: 'predict',
      topic: 'linux: successful command exit status code',
      question: {
        en: 'What is the standard integer exit status code returned by a Linux command when it completes successfully without errors?',
        bn: 'কোনো ত্রুটি ছাড়া একটি Linux কমান্ড সফলভাবে সম্পন্ন হলে স্ট্যান্ডার্ড পূর্ণসংখ্যা এক্সিট কোড কত হয়?'
      },
      code: `/* Exit code of successful command: */
/* echo $? -> _ */`,
      answer: '0',
      accept: ['0', 'zero'],
      hint: {
        en: 'Exit code 0.',
        bn: 'এক্সিট কোড ০।'
      },
      explanation: {
        en: 'In POSIX systems, exit code 0 indicates success, whereas non-zero values (1-255) indicate various error conditions.',
        bn: 'পজিক্স সিস্টেমে এক্সিট কোড ০ সাফল্য নির্দেশ করে এবং ১ থেকে ২৫৫ পর্যন্ত যেকোনো মান ত্রুটি প্রকাশ করে।'
      }
    },
    {
      id: 'lnx-shl-ex2',
      kind: 'mcq',
      topic: 'linux: standard error file descriptor number',
      question: {
        en: 'Which numeric file descriptor represents the Standard Error (stderr) data stream in Linux?',
        bn: 'Linux-এ কোন সংখ্যাক্রমিক ফাইল ডেসক্রিপ্টরটি স্ট্যান্ডার্ড এরর (stderr) ডেটা চ্যানেলকে উপস্থাপন করে?'
      },
      options: [
        { en: '2', bn: '২' },
        { en: '1', bn: '১' },
        { en: '0', bn: '০' },
        { en: '4', bn: '৪' }
      ],
      answer: 0,
      hint: {
        en: 'File descriptor 2.',
        bn: 'ফাইল ডেসক্রিপ্টর ২।'
      },
      explanation: {
        en: 'File descriptor 0 is stdin, 1 is stdout, and 2 is stderr.',
        bn: 'ফাইল ডেসক্রিপ্টর ০ হলো stdin, ১ হলো stdout এবং ২ হলো stderr।'
      }
    },
    {
      id: 'lnx-shl-ex3',
      kind: 'mcq',
      topic: 'linux: stdout and stderr merge redirection syntax',
      question: {
        en: 'Which redirection operator sequence directs Standard Error (FD 2) into the same file stream as Standard Output (FD 1)?',
        bn: 'কোন রিডাইরেকশন বাক্যরীতিটি স্ট্যান্ডার্ড এরর (২)-কে স্ট্যান্ডার্ড আউটপুটের (১) সাথে একই ফাইলে একত্রিত করে দেয়?'
      },
      options: [
        { en: '2>&1', bn: '২>&১' },
        { en: '1>&2', bn: '১>&২' },
        { en: '>>2', bn: '>>২' },
        { en: '<2', bn: '<২' }
      ],
      answer: 0,
      hint: {
        en: '2>&1 syntax.',
        bn: '২>&১ বাক্যরীতি।'
      },
      explanation: {
        en: '2>&1 redirects file descriptor 2 to wherever file descriptor 1 is currently pointing, merging output and error streams.',
        bn: '২>&১ ফাইল ডেসক্রিপ্টর ২-কে ১-এর সাথে যুক্ত করে আউটপুট ও এরর উভয়কে একসাথে রাখে।'
      }
    }
  ],
  quiz: {
    id: 'lnx-shl-quiz',
    title: { en: 'Linux Architecture & The Shell Quiz', bn: 'Linux আর্কিটেকচার ও শেল কুইজ' },
    questions: [
      {
        id: 'lshlq1',
        kind: 'mcq',
        topic: 'linux: unix pipe functionality',
        question: {
          en: 'How does the Unix pipe operator (|) connect two commands together?',
          bn: 'ইউনিক্স পাইপ (\|) অপারেটর কীভাবে দুটি কমান্ডকে পরস্পরের সাথে যুক্ত করে?'
        },
        options: [
          { en: 'It connects the standard output (stdout) of the first command directly to the standard input (stdin) of the second command in RAM', bn: 'এটি প্রথম কমান্ডের স্ট্যান্ডার্ড আউটপুটকে (stdout) সরাসরি মেমরির ভেতর দ্বিতীয় কমান্ডের স্ট্যান্ডার্ড ইনপুট (stdin) হিসেবে পৌঁছে দেয়' },
          { en: 'It reboots the operating system', bn: 'অপারেটিং সিস্টেম রিস্টার্ট করে' },
          { en: 'It writes data to an external optical disk', bn: 'অপটিক্যাল ডিস্কে ডেটা লেখে' },
          { en: 'It sends an email notification to the system administrator', bn: 'অ্যাডমিনের কাছে ইমেইল পাঠায়' }
        ],
        answer: 0,
        hint: {
          en: 'Connects stdout to stdin in memory.',
          bn: 'মেমরিতে stdout-কে stdin-এর সাথে যুক্ত করে।'
        },
        explanation: {
          en: 'A pipe connects the stdout of one process to the stdin of another through a memory buffer, avoiding disk I/O.',
          bn: 'পাইপ কোনো সাময়িক ফাইল ছাড়াই মেমরির বাফার দিয়ে এক প্রসেসের আউটপুট অন্য প্রসেসে পাঠায়।'
        }
      },
      {
        id: 'lshlq2',
        kind: 'mcq',
        topic: 'linux: appending redirection operator',
        question: {
          en: 'Which redirection operator appends stdout data to the end of a file without overwriting existing contents?',
          bn: 'কোন রিডাইরেকশন অপারেটরটি আগের লেখা না মুছে ফাইলের শেষে নতুন আউটপুট যোগ করে?'
        },
        options: [
          { en: '>>', bn: '>>' },
          { en: '>', bn: '>' },
          { en: '<', bn: '<' },
          { en: '|', bn: '|' }
        ],
        answer: 0,
        hint: {
          en: 'Double greater-than >>.',
          bn: 'ডাবল গ্রেটার-দ্যান >>।'
        },
        explanation: {
          en: 'The single > overwrites the destination file, while double >> appends new data to the tail.',
          bn: 'একক > আগের তথ্য মুছে ফেলে, কিন্তু ডাবল >> ফাইলের শেষে নতুন তথ্য যোগ করে।'
        }
      },
      {
        id: 'lshlq3',
        kind: 'mcq',
        topic: 'linux: path environment variable function',
        question: {
          en: 'What is the purpose of the $PATH environment variable in the Linux shell?',
          bn: 'Linux শেলে $PATH এনভায়রনমেন্ট ভেরিয়েবলের মূল কাজ কী?'
        },
        options: [
          { en: 'It defines the list of directories checked in order to locate executable commands entered by the user', bn: 'ব্যবহারকারী কোনো কমান্ড লিখলে কোন কোন ডিরেক্টরিতে সেই এক্সিকিউটেবল ফাইলটি খোঁজা হবে তার তালিকা নির্দেশ করে' },
          { en: 'It stores encrypted user passwords', bn: 'পাসওয়ার্ড এনক্রিপ্ট করে রাখে' },
          { en: 'It controls the screen display resolution', bn: 'স্ক্রিন রেজোলিউশন নিয়ন্ত্রণ করে' },
          { en: 'It limits internet network bandwidth', bn: 'ইন্টারনেট স্পিড সীমাবদ্ধ করে' }
        ],
        answer: 0,
        hint: {
          en: 'Executable search directory list.',
          bn: 'প্রোগ্রাম খোঁজার ডিরেক্টরি তালিকা।'
        },
        explanation: {
          en: 'When a command is executed without a path, the shell searches the directories listed in $PATH from left to right.',
          bn: 'কমান্ডের নির্দিষ্ট পাথ না দিলে শেল $PATH-এ থাকা ফোল্ডারগুলোতে ক্রমানুসারে প্রোগ্রামটি খুঁজে নেয়।'
        }
      },
      {
        id: 'lshlq4',
        kind: 'mcq',
        topic: 'linux: export command function',
        question: {
          en: 'Why is the export command used when assigning a variable in the shell?',
          bn: 'শেলে কোনো ভেরিয়েবল সেট করার সময় export কমান্ড কেন ব্যবহার করা হয়?'
        },
        options: [
          { en: 'To make the variable an environment variable inherited by child processes spawned from the current shell', bn: 'ভেরিয়েবলটিকে একটি এনভায়রনমেন্ট ভেরিয়েবলে রূপ দিতে যাতে বর্তমান শেল থেকে তৈরি সব চাইল্ড প্রসেস এর মান পেতে পারে' },
          { en: 'To delete the variable permanently from memory', bn: 'মেমরি থেকে ভেরিয়েবল মুছে ফেলতে' },
          { en: 'To send the variable value over an HTTP network request', bn: 'এইচটিটিপি রিকোয়েস্টে পাঠাতে' },
          { en: 'To convert numbers into uppercase letters', bn: 'সংখ্যাকে অক্ষরে রূপ দিতে' }
        ],
        answer: 0,
        hint: {
          en: 'Inherited by child processes.',
          bn: 'চাইল্ড প্রসেসে মান হস্তান্তরের জন্য।'
        },
        explanation: {
          en: 'Without export, a variable remains private to the current shell and is invisible to commands and scripts executed inside it.',
          bn: 'export ছাড়া ভেরিয়েবল কেবল বর্তমান শেলে সীমাবদ্ধ থাকে এবং অন্য কোনো স্ক্রিপ্ট তা দেখতে পায় না।'
        }
      }
    ]
  }
};
