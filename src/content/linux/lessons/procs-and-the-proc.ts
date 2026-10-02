import type { Lesson } from '../../../lib/types';

export const ProcsAndTheProcLesson: Lesson = {
  slug: 'procs-and-the-proc',
  tech: 'linux',
  title: {
    en: 'Linux Process Management: Signals, Job Control & System Telemetry',
    bn: 'Linux প্রসেস ম্যানেজমেন্ট: সিগন্যাল, জব কন্ট্রোল ও সিস্টেম টেলিমেট্রি'
  },
  summary: {
    en: 'Master Linux process lifecycle management, signal IPC, job control, and performance monitoring across 10 structured topics. Track Process IDs (PID, PPID) back to systemd PID 1. Decode process states from Running (R) and Sleeping (S) to Zombies (Z). Inspect system memory using ps aux and top, distinguishing VSZ from physical RSS. Dispatch POSIX signals including SIGTERM (15), SIGKILL (9), and SIGHUP (1). Master foreground and background job control with &, jobs, fg, and bg. Adjust execution priority with nice (-20 to 19). Evaluate CPU Load Averages, and implement graceful signal teardown in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux প্রসেস লাইফসাইকেল, সিগন্যাল যোগাযোগ, জব কন্ট্রোল এবং সিস্টেম পারফরম্যান্স পর্যবেক্ষণ আয়ত্ত করুন। প্রসেস আইডি (PID, PPID) থেকে systemd PID ১ পর্যন্ত ট্র্যাকিং শিখুন। Running (R), Sleeping (S) থেকে Zombie (Z) পর্যন্ত প্রসেসের বিভিন্ন অবস্থা বুঝুন। ps aux এবং top দিয়ে মেমরি পর্যবেক্ষণ করুন এবং VSZ ও বাস্তব RSS-এর পার্থক্য জানুন। SIGTERM (১৫), SIGKILL (৯) ও SIGHUP (১) এর মতো পজিক্স সিগন্যাল পাঠান। &, jobs, fg এবং bg দিয়ে ব্যাকগ্রাউন্ড জব নিয়ন্ত্রণ করুন। nice (-২০ থেকে ১৯) দিয়ে সিপিইউ অগ্রাধিকার নির্ধারণ করুন। লোড এভারেজ বিশ্লেষণ করুন এবং Node.js-এ গ্রেসফুল শাটডাউন বাস্তবায়ন করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'users-and-the-user',
    tech: 'linux',
    title: {
      en: 'Linux User & Group Management: Passwords, Sudoers & PAM Security',
      bn: 'Linux ব্যবহারকারী ও গ্রুপ ব্যবস্থাপনা: পাসওয়ার্ড, সুডোয়ার্স ও PAM সিকিউরিটি'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Process Fundamentals: PID, PPID & The Init Root', bn: '১. প্রসেস ফান্ডামেন্টালস: PID, PPID ও ইনিট রুট' } },
    {
      type: 'para',
      text: {
        en: 'A process is an active instance of a computer program running in system memory. The Linux kernel assigns every task a unique numeric Process ID (PID) alongside a Parent ID (PPID). When a Linux system powers on, the kernel spawns the initial user-space task with PID 1 (typically systemd), which then acts as the common ancestor of all services and background jobs.',
        bn: 'কম্পিউটার মেমরিতে চলা একটি সক্রিয় প্রোগ্রামকে প্রসেস বলা হয়। Linux কার্নেল প্রতিটি টাস্ককে একটি অনন্য সাংখ্যিক প্রসেস আইডি (PID) এবং প্যারেন্ট আইডি (PPID) প্রদান করে। সার্ভার চালু হওয়ার সাথে সাথে কার্নেল PID ১ হিসেবে মূল প্রোগ্রামটি (সাধারণত systemd) চালু করে, যা পরবর্তী সকল সার্ভিস ও ব্যাকগ্রাউন্ড কাজের মূল উৎস হিসেবে কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Display the complete process tree starting from PID 1:
pstree -p 1 | head -n 8
# Output:
# systemd(1)─┬─cron(450)
#            ├─dbus-daemon(455)
#            ├─dockerd(820)─┬─docker-containe(850)
#            ├─nginx(1020)───nginx(1021)
#            ├─sshd(720)───sshd(1420)───bash(1425)
#            └─systemd-journal(310)`,
      caption: {
        en: 'pstree traces ancestry lines from systemd PID 1 down to terminal shells and background daemons.',
        bn: 'pstree কমান্ড systemd PID ১ থেকে শুরু করে সমস্ত ব্যাকগ্রাউন্ড প্রসেসের বংশলতিকা দেখায়।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Linux Process States & POSIX Signals Lifecycle', bn: 'Linux প্রসেস অবস্থা ও পজিক্স সিগন্যাল লাইফসাইকেল' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Process States and Signals Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="45" width="130" height="60" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="65" y="70" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Ready / Runnable</text>
<text x="65" y="90" font-size="9" fill="#94a3b8" text-anchor="middle">State: R (Running)</text>

<path d="M135,75 L205,75" stroke="#38bdf8" stroke-width="2"/>
<text x="170" y="68" font-size="8" fill="#38bdf8" text-anchor="middle">Schedule</text>

<rect x="210" y="45" width="130" height="60" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="275" y="70" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Executing on CPU</text>
<text x="275" y="90" font-size="9" fill="#cbd5e1" text-anchor="middle">PID Active</text>

<path d="M345,60 L415,30" stroke="#f59e0b" stroke-width="2"/>
<text x="380" y="38" font-size="8" fill="#fbbf24" text-anchor="middle">I/O Wait</text>

<rect x="420" y="10" width="140" height="50" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="490" y="32" font-size="10" font-weight="700" fill="#fbbf24" text-anchor="middle">Sleeping (S or D)</text>
<text x="490" y="48" font-size="8" fill="#cbd5e1" text-anchor="middle">Waiting for Disk/Net</text>

<path d="M345,90 L415,120" stroke="#ef4444" stroke-width="2"/>
<text x="380" y="112" font-size="8" fill="#f87171" text-anchor="middle">SIGTERM / Exit</text>

<rect x="420" y="95" width="140" height="50" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
<text x="490" y="117" font-size="10" font-weight="700" fill="#f87171" text-anchor="middle">Zombie State (Z)</text>
<text x="490" y="133" font-size="8" fill="#cbd5e1" text-anchor="middle">Awaiting Parent wait()</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Process States: Running, Sleeping, Stopped & Zombies', bn: '২. প্রসেসের বিভিন্ন অবস্থা: রানিং, স্লিপিং, স্টপড ও জম্বি' } },
    {
      type: 'para',
      text: {
        en: 'A program transitions through multiple execution phases managed by the kernel scheduler. Flag R indicates that a task is running on a CPU core or sitting in the active queue. Phase S represents interruptible sleep while awaiting network or disk input. Phase D marks uninterruptible disk sleep that ignores signals. Phase T denotes a task paused by user signals. Finally, Z flags a Zombie: a finished child whose exit code has not yet been collected by its parent via the wait system call.',
        bn: 'কার্নেল শিডিউলারের অধীনে একটি প্রোগ্রাম বিভিন্ন কার্যকাল অতিক্রম করে। R ফ্ল্যাগ নির্দেশ করে টাস্কটি সরাসরি সিপিইউতে চলছে বা রেডি আছে। S হলো ইনপুটের অপেক্ষায় থাকা ইন্টারাপ্টিবল স্লিপ। D হলো অবিরত ডিস্ক স্লিপ যা কোনো সিগন্যাল গ্রহণ করে না। T দ্বারা সাময়িক স্থগিত কাজ বোঝায়। আর Z ফ্ল্যাগ নির্দেশ করে জম্বি অবস্থা: একটি সমাপ্ত চাইল্ড যার এক্সিট কোড প্যারেন্ট প্রসেস wait কলের মাধ্যমে এখনো গ্রহণ করেনি।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Query process state flag for all active tasks:
ps -eo pid,ppid,stat,comm | grep -E "nginx|node"
# Output:
# 1020     1 Ss   nginx      (Ss = Session leader sleeping)
# 1021  1020 S    nginx      (Worker process sleeping)
# 2045  1425 R+   node       (R+ = Running in foreground)
# 3099  1425 Z    defunct    (Z = Zombie process awaiting parent wait())`,
      caption: {
        en: 'Process state indicators reveal scheduler activity, sleep queues, and zombie accumulation.',
        bn: 'প্রসেস স্টেট ফ্ল্যাগ কার্নেল শিডিউলারের কার্যকলাপ এবং জম্বি প্রসেসের উপস্থিতি প্রকাশ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Process Telemetry: ps aux vs top and htop', bn: '৩. প্রসেস পর্যবেক্ষণ: ps aux বনাম top ও htop' } },
    {
      type: 'para',
      text: {
        en: 'Engineers diagnose server health using snapshot and interactive monitors. The command ps aux prints an instantaneous tabular snapshot of every running process across all users, displaying memory and execution arguments. In contrast, top and htop provide dynamic real-time dashboards refreshed every few seconds, allowing operators to monitor live CPU spikes and memory consumption.',
        bn: 'সার্ভারের গতি ও স্বাস্থ্য বিশ্লেষণে স্ন্যাপশট এবং ইন্টারঅ্যাক্টিভ মনিটর ব্যবহৃত হয়। ps aux কমান্ড এক মুহূর্তে সার্ভারে চলা প্রতিটি প্রসেসের বিস্তারিত তালিকা প্রিন্ট করে, যেখানে মেমরি ও কমান্ড আর্গুমেন্ট দেখা যায়। এর বিপরীতে top এবং htop প্রতি কয়েক সেকেন্ড পর পর রিয়েল-টাইমে লাইভ সিপিইউ ব্যবহার ও মেমরি খরচ আপডেট করে দেখায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Show the top 5 memory-consuming processes on the server:
ps aux --sort=-%mem | head -n 6
# Output:
# USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
# postgres  1201  1.2 14.5 982000 240000 ?       Ss   08:00   0:15 /usr/lib/postgresql
# node      2045  4.5  8.2 840000 135000 pts/1   Sl   09:30   1:12 node server.js
# nginx     1021  0.1  1.1  45000  18000 ?       S    08:00   0:02 nginx: worker process`,
      caption: {
        en: 'Sorting ps aux by %mem quickly isolates runaway backend processes consuming server RAM.',
        bn: 'ps aux মেমরি অনুসারে সাজালে সহজে অতিরিক্ত র‍্যাম ব্যবহারকারী প্রসেস খুঁজে পাওয়া যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Memory Metrics Demystified: VSZ vs RSS', bn: '৪. মেমরির হিসাব: VSZ বনাম RSS' } },
    {
      type: 'para',
      text: {
        en: 'When inspecting process memory, developers often confuse Virtual Size with Resident Size. VSZ (Virtual Memory Size) is the entire address space mapped by the process, including shared libraries, file caches, and unallocated swap memory. In contrast, RSS (Resident Set Size) represents the actual physical RAM currently occupied by the process. Diagnostic decisions must always be based on RSS, not VSZ.',
        bn: 'প্রসেসের মেমরি দেখার সময় ভার্চুয়াল সাইজ ও রেসিডেন্ট সাইজ গুলিয়ে ফেলা সাধারণ ভুল। VSZ হলো পুরো অ্যাড্রেস স্পেস যার মধ্যে শেয়ার্ড লাইব্রেরি ও সোয়াপ মেমরি অন্তর্ভুক্ত থাকে। কিন্তু RSS হলো মূল ফিজিক্যাল র‍্যামের সেই অংশ যা প্রসেসটি বর্তমানে সরাসরি দখল করে রেখেছে। সার্ভার ম্যানেজমেন্টের ক্ষেত্রে সর্বদা RSS-এর ওপর ভিত্তি করে সিদ্ধান্ত নিতে হয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect VSZ and RSS in kilobytes for a Node.js process:
ps -o pid,user,vsz,rss,comm -p 2045
# Output:
#   PID USER         VSZ    RSS COMMAND
#  2045 deploy    840000 135000 node
# Explanation:
# VSZ = 840,000 KB (~820 MB mapped virtual address space)
# RSS = 135,000 KB (~131 MB actual physical RAM occupied)`,
      caption: {
        en: 'RSS reflects real physical RAM usage, while VSZ includes mapped address spaces and shared caches.',
        bn: 'RSS বাস্তব ফিজিক্যাল র‍্যামের খরচ দেখায়, আর VSZ ভার্চুয়াল অ্যাড্রেস স্পেস পরিমাপ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. POSIX Signals Architecture: SIGTERM, SIGKILL & SIGHUP', bn: '৫. পজিক্স সিগন্যাল আর্কিটেকচার: SIGTERM, SIGKILL ও SIGHUP' } },
    {
      type: 'para',
      text: {
        en: 'Signals are asynchronous notifications dispatched by the kernel between tasks. The first key trigger is SIGHUP (1), which tells daemons like Nginx to reload configuration files without restarting. Next comes SIGTERM (15), the standard polite directive that gives programs time to finish work and close sockets. Finally, SIGKILL (9) serves as the non-catchable switch that stops execution instantly.',
        bn: 'সিগন্যাল হলো কার্নেল দ্বারা পরিচালিত প্রসেসগুলোর মধ্যকার দ্রুত বার্তা বিনিময় মাধ্যম। প্রথম গুরুত্বপূর্ণ নির্দেশ হলো SIGHUP (১), যা Nginx-এর মতো সার্ভারকে বন্ধ না করেই নতুন কনফিগারেশন রিলোড করতে বলে। দ্বিতীয়টি হলো SIGTERM (১৫), যা ফাইল সেভ ও ডাটাবেস সংযোগ বন্ধ করার জন্য উপযুক্ত সময় দেয়। আর তৃতীয়টি হলো SIGKILL (৯), যা কোনো সুযোগ না দিয়ে তাৎক্ষণিকভাবে প্রোগ্রামকে বন্ধ করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Reload Nginx configuration smoothly without dropping connections (SIGHUP):
kill -1 1020

# Request graceful application shutdown (SIGTERM - standard default):
kill -15 2045
# Equivalent to: kill 2045

# Forcefully kill an unresponsive hung process (SIGKILL - cannot be blocked!):
kill -9 9942`,
      caption: {
        en: 'Always send SIGTERM first to allow graceful teardown; reserve SIGKILL for frozen tasks.',
        bn: 'প্রথমে সর্বদা SIGTERM পাঠানো উচিত; প্রসেস পুরোপুরি আটকে গেলে তবেই SIGKILL ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Terminating Processes: pkill and killall', bn: '৬. প্রসেস বন্ধ করা: pkill ও killall' } },
    {
      type: 'para',
      text: {
        en: 'Manually searching for numeric PIDs to terminate processes is tedious during incident response. The pkill command accepts regular expression patterns to match process names or command-line arguments. The killall command terminates all processes sharing an exact program name. Using pkill -f matches full command-line strings, allowing operators to target specific Node.js scripts cleanly.',
        bn: 'সার্ভারে জরুরি মুহূর্তে ম্যানুয়ালি PID খুঁজে প্রসেস বন্ধ করা বেশ সময়সাপেক্ষ। pkill কমান্ড রেগুলার এক্সপ্রেশন বা প্যাটার্ন ব্যবহার করে নাম মিলিয়ে প্রসেস বন্ধ করতে পারে। অন্যদিকে killall কমান্ড একটি নির্দিষ্ট নামের সকল প্রোগ্রাম একযোগে বন্ধ করে। pkill -f দিয়ে পুরো কমান্ড লাইন মিলিয়ে সুনির্দিষ্ট Node.js স্ক্রিপ্ট থামানো যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Terminate all processes running worker.js:
pkill -f "node worker.js"

# Gracefully reload all Nginx worker instances:
killall -s HUP nginx

# Verify processes were successfully terminated:
pgrep -f "worker.js"
# Exit code 1: No matching processes running`,
      caption: {
        en: 'pkill matches command arguments directly, eliminating manual PID lookups.',
        bn: 'pkill সরাসরি কমান্ড লাইন প্যাটার্ন মিলিয়ে দ্রুত প্রসেস শনাক্ত ও বন্ধ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Job Control: Backgrounding with &, jobs, fg, and bg', bn: '৭. জব কন্ট্রোল: &, jobs, fg ও bg দিয়ে ব্যাকগ্রাউন্ড পরিচালনা' } },
    {
      type: 'para',
      text: {
        en: 'Interactive shell sessions allow backgrounding long-running tasks. Appending an ampersand (&) to a command launches it directly into the background, freeing the terminal prompt immediately. When an interactive command is running, pressing Ctrl+Z suspends it with SIGTSTP; typing bg resumes execution in the background; and typing fg brings the job back to the foreground.',
        bn: 'টার্মিনাল সেশনে দীর্ঘ সময় চলা কাজগুলোকে ব্যাকগ্রাউন্ডে পাঠিয়ে দেওয়া যায়। কমান্ডের শেষে একটি অ্যান্ড (&) চিহ্ন দিলে তা ব্যাকগ্রাউন্ডে চালু হয় এবং প্রম্পট খালি হয়ে যায়। কোনো কমান্ড চালু অবস্থায় কীবোর্ডে Ctrl+Z চাপলে তা সাময়িক স্থগিত হয়; এরপর bg লিখলে তা ব্যাকগ্রাউন্ডে চলতে থাকে; আর fg লিখলে তা আবার স্ক্রিনের সামনে ফিরে আসে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Launch long database backup directly in background:
tar -czf /backup/db.tar.gz /var/lib/postgresql/data &
# Shell reports job index and PID: [1] 28410

# List all active jobs managed by this shell session:
jobs -l
# Output: [1]+ 28410 Running   tar -czf /backup/db.tar.gz ... &

# Bring job 1 back to the foreground to monitor progress:
fg %1`,
      caption: {
        en: 'Job control commands allow seamless toggling between foreground monitoring and background execution.',
        bn: 'জব কন্ট্রোল কমান্ডের মাধ্যমে প্রসেসকে প্রয়োজনমতো ব্যাকগ্রাউন্ড ও ফোরগ্রাউন্ডে স্থানান্তর করা যায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Scheduling Priority: nice and renice', bn: '৮. শিডিউলিং অগ্রাধিকার: nice ও renice' } },
    {
      type: 'para',
      text: {
        en: 'The Linux kernel schedules CPU time based on process Niceness. Niceness values range from -20 (highest priority, least nice to other tasks) to 19 (lowest priority, sweetest to other tasks). Standard user processes default to a niceness of 0. Heavy batch computations should be launched with nice -n 19 to prevent them from starving user-facing web servers of CPU cycles.',
        bn: 'Linux কার্নেল নাইসনেস (Niceness) মানের ওপর ভিত্তি করে সিপিইউ অগ্রাধিকার ঠিক করে। নাইসনেসের মান -২০ (সর্বোচ্চ অগ্রাধিকার, অন্যদের সুযোগ কম দেয়) থেকে ১৯ (সর্বনিম্ন অগ্রাধিকার, অন্যদের বেশি সুযোগ দেয়) পর্যন্ত হয়। স্বাভাবিক প্রসেসের মান ০ থাকে। ভারী ব্যাচ জব ১৯ দিয়ে চালানো উচিত যাতে ওয়েব সার্ভারের গতিতে কোনো প্রভাব না পড়ে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Launch a heavy video encoding job with lowest CPU priority (nice 19):
nice -n 19 ffmpeg -i raw.mov -vcodec h264 compressed.mp4 &

# Alter priority of an already running database compilation (renice):
renice -n 5 -p 28410
# Output: 28410 (process ID) old priority 0, new priority 5`,
      caption: {
        en: 'Setting positive niceness values prevents CPU-intensive tasks from degrading server latency.',
        bn: 'পজিটিভ নাইসনেস নির্ধারণ করলে ভারী ব্যাকগ্রাউন্ড প্রসেস অন্যান্য ইউজারের সিস্টেমে ধীরগতি তৈরি করতে পারে না।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. System Resource Telemetry: Interpreting Load Average', bn: '৯. সিস্টেম টেলিমেট্রি: লোড এভারেজ বিশ্লেষণ' } },
    {
      type: 'para',
      text: {
        en: 'The uptime command outputs three numbers representing 1-minute, 5-minute, and 15-minute Load Averages. The load average counts processes currently executing on CPU cores plus those waiting in runnable queues or blocked in uninterruptible disk I/O. On a 4-core CPU system, a load average of 4.0 represents 100 percent saturation; a value above 4.0 indicates tasks are queuing.',
        bn: 'uptime কমান্ডের শেষে ৩টি সংখ্যা থাকে যা যথাক্রমে ১ মিনিট, ৫ মিনিট এবং ১৫ মিনিটের লোড এভারেজ প্রকাশ করে। লোড এভারেজ হলো সিপিইউতে চলমান এবং লাইনে দাঁড়িয়ে থাকা প্রসেসের মোট সংখ্যা। একটি ৪-কোর সিপিইউ সার্ভারে লোড এভারেজ ৪.০ হলে বুঝতে হবে সার্ভারের ক্ষমতা ১০০ শতাংশ ব্যবহৃত হচ্ছে; আর ৪.০-এর বেশি হলে কাজগুলো লাইনে আটকে আছে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Check uptime, active sessions, and load averages:
uptime
# Output: 14:32:10 up 45 days, 3 users, load average: 2.15, 1.80, 1.45

# Discover total physical CPU cores available:
nproc
# Output: 4
# Telemetry conclusion: On a 4-core machine, load of 2.15 means the system has ~46% spare headroom!`,
      caption: {
        en: 'Compare load average to nproc: values exceeding core count signal CPU or disk bottlenecks.',
        bn: 'লোড এভারেজকে nproc দিয়ে ভাগ করলে সার্ভারের আসল চাপ এবং সিপিইউ ঘাটতি বোঝা যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Graceful Teardown & Signals in Node.js', bn: '১০. Node.js-এ গ্রেসফুল শাটডাউন ও সিগন্যাল হ্যান্ডলিং' } },
    {
      type: 'para',
      text: {
        en: 'Production containerized applications running in Kubernetes or systemd must listen for SIGTERM to flush active requests and disconnect database pools before termination.',
        bn: 'কিউবারনেটিস বা systemd-তে চলা প্রোডাকশন অ্যাপ্লিকেশনে SIGTERM সিগন্যাল হ্যান্ডেল করে ডাটাবেস সংযোগ নিরাপদভাবে বন্ধ করা অপরিহার্য।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: "healthy", pid: process.pid }));
});

server.listen(3000, () => {
  console.log("Server listening on port 3000, PID:", process.pid);
});

// Intercept SIGTERM (kill -15 or Kubernetes pod shutdown):
process.on("SIGTERM", () => {
  console.log("Received SIGTERM: Closing HTTP listener cleanly...");
  server.close(() => {
    console.log("HTTP connections closed; releasing database pools.");
    process.exit(0);
  });
});

// Intercept SIGINT (Ctrl+C in terminal):
process.on("SIGINT", () => {
  console.log("Received SIGINT: Exiting process immediately.");
  process.exit(0);
});

console.log("Process signals configured successfully");
// Output: Process signals configured successfully`,
      caption: {
        en: 'Listening for SIGTERM allows Node.js to shut down gracefully without dropping active HTTP requests.',
        bn: 'SIGTERM সিগন্যাল শুনলে Node.js চলমান কোনো রিকোয়েস্ট না কেটেই সুন্দরভাবে বন্ধ হতে পারে।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-prc-ex1',
      kind: 'predict',
      topic: 'linux: graceful shutdown signal numeric value',
      question: {
        en: 'What is the numeric value of the standard SIGTERM signal used to request graceful process shutdown?',
        bn: 'একটি প্রসেসকে নিরাপদভাবে বন্ধ করার অনুরোধ জানাতে ব্যবহৃত সাধারণ SIGTERM সিগন্যালের সাংখ্যিক মান কত?'
      },
      code: `/* Standard numeric signal for SIGTERM: */
/* SIGTERM = __ */`,
      answer: '15',
      accept: ['15', 'fifteen'],
      hint: {
        en: 'SIGTERM is 15 (SIGKILL is 9).',
        bn: 'SIGTERM হলো ১৫ (SIGKILL হলো ৯)।'
      },
      explanation: {
        en: 'Signal 15 is SIGTERM, the standard polite termination signal caught by applications for cleanup.',
        bn: '১৫ নম্বর সিগন্যাল হলো SIGTERM যা প্রসেসকে সমস্ত রিসোর্স খালি করে বন্ধ হতে সময় দেয়।'
      }
    },
    {
      id: 'lnx-prc-ex2',
      kind: 'mcq',
      topic: 'linux: zombie process cause',
      question: {
        en: 'What causes a process to remain in the Zombie (Z) state in the Linux kernel?',
        bn: 'Linux কার্নেলে একটি প্রসেস জম্বি (Zombie - Z) অবস্থায় আটকে থাকার মূল কারণ কী?'
      },
      options: [
        { en: 'The child process terminated, but its parent has not yet collected its exit status using wait()', bn: 'চাইল্ড প্রসেস শেষ হয়ে গেছে, কিন্তু তার প্যারেন্ট প্রসেস wait() কলের মাধ্যমে এখনো তার এক্সিট স্ট্যাটাস গ্রহণ করেনি' },
        { en: 'The computer hard disk ran out of space', bn: 'হার্ডডিস্কের জায়গা শেষ হয়ে গেছে' },
        { en: 'The process has a computer virus', bn: 'প্রসেসে ভাইরাস ঢুকেছে' },
        { en: 'The monitor screen resolution changed', bn: 'মনিটরের রেজোলিউশন বদলে গেছে' }
      ],
      answer: 0,
      hint: {
        en: 'Parent process has not collected exit status.',
        bn: 'প্যারেন্ট প্রসেস তার চাইল্ডের এক্সিট স্ট্যাটাস গ্রহণ করেনি।'
      },
      explanation: {
        en: 'A zombie process holds an entry in the kernel process table until its parent reads its exit code with wait().',
        bn: 'প্যারেন্ট প্রসেস wait() না ডাকা পর্যন্ত কার্নেল প্রসেস টেবিলে জম্বি প্রসেসের রেকর্ড রেখে দেয়।'
      }
    },
    {
      id: 'lnx-prc-ex3',
      kind: 'mcq',
      topic: 'linux: physical ram consumption metric',
      question: {
        en: 'Which memory metric in ps aux reflects the actual physical RAM currently occupied by a process?',
        bn: 'ps aux কমান্ডে দেখানো কোন মেট্রিকটি একটি প্রসেস দ্বারা সরাসরি দখল করা বাস্তব ফিজিক্যাল র‍্যামের পরিমাণ নির্দেশ করে?'
      },
      options: [
        { en: 'RSS (Resident Set Size)', bn: 'RSS (রেসিডেন্ট সেট সাইজ)' },
        { en: 'VSZ (Virtual Memory Size)', bn: 'VSZ (ভার্চুয়াল মেমরি সাইজ)' },
        { en: 'TTY', bn: 'TTY' },
        { en: 'STAT', bn: 'STAT' }
      ],
      answer: 0,
      hint: {
        en: 'RSS (Resident Set Size).',
        bn: 'RSS (রেসিডেন্ট সেট সাইজ)।'
      },
      explanation: {
        en: 'RSS measures exact physical RAM pages held in memory, while VSZ accounts for all mapped virtual address space.',
        bn: 'RSS বাস্তব ফিজিক্যাল মেমরি পরিমাপ করে, অন্যদিকে VSZ ভার্চুয়াল মেমরির সামগ্রিক সীমা নির্দেশ করে।'
      }
    }
  ],
  quiz: {
    id: 'lnx-prc-quiz',
    title: { en: 'Linux Process Management & Signals Quiz', bn: 'Linux প্রসেস ম্যানেজমেন্ট ও সিগন্যাল কুইজ' },
    questions: [
      {
        id: 'lprcq1',
        kind: 'mcq',
        topic: 'linux: sigkill non-catchable property',
        question: {
          en: 'What distinguishes SIGKILL (Signal 9) from SIGTERM (Signal 15)?',
          bn: 'SIGTERM (সিগন্যাল ১৫) এর তুলনায় SIGKILL (সিগন্যাল ৯) এর মূল বিশেষত্ব কোনটি?'
        },
        options: [
          { en: 'SIGKILL cannot be caught, blocked, or ignored by the process; the kernel terminates the task immediately', bn: 'SIGKILL কোনো প্রসেস আটকাতে বা উপেক্ষা করতে পারে না; কার্নেল সরাসরি প্রসেসটি বন্ধ করে দেয়' },
          { en: 'SIGKILL only works on Windows computers', bn: 'শুধুমাত্র উইন্ডোজে কাজ করে' },
          { en: 'SIGKILL saves all unsaved documents to disk', bn: 'সব ডকুমেন্ট সেভ করে' },
          { en: 'SIGKILL reboots the physical motherboard', bn: 'মাদারবোর্ড রিস্টার্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Cannot be caught or ignored.',
          bn: 'কখনোই আটকানো বা উপেক্ষা করা যায় না।'
        },
        explanation: {
          en: 'SIGKILL bypasses process user-space signal handlers entirely: the kernel terminates the process without granting cleanup time.',
          bn: 'SIGKILL কার্নেল দ্বারা সরাসরি প্রয়োগ করা হয়, ফলে কোনো প্রসেস এটি ঠেকাতে পারে না।'
        }
      },
      {
        id: 'lprcq2',
        kind: 'mcq',
        topic: 'linux: foreground suspension shortcut',
        question: {
          en: 'Which keyboard shortcut suspends a running foreground process with SIGTSTP and returns control to the shell prompt?',
          bn: 'কোন কীবোর্ড শর্টকাটটি ফোরগ্রাউন্ডে চলমান প্রসেসকে SIGTSTP সিগন্যাল দিয়ে সাময়িক স্থগিত করে শেল প্রম্পট ফিরিয়ে দেয়?'
        },
        options: [
          { en: 'Ctrl + Z', bn: 'Ctrl + Z' },
          { en: 'Ctrl + C', bn: 'Ctrl + C' },
          { en: 'Ctrl + D', bn: 'Ctrl + D' },
          { en: 'Ctrl + L', bn: 'Ctrl + L' }
        ],
        answer: 0,
        hint: {
          en: 'Ctrl + Z.',
          bn: 'Ctrl + Z।'
        },
        explanation: {
          en: 'Ctrl+Z suspends the foreground process into state T; the user can then background it using bg.',
          bn: 'Ctrl+Z চলমান কাজকে পজ করে, যা পরবর্তীতে bg লিখে ব্যাকগ্রাউন্ডে চালানো যায়।'
        }
      },
      {
        id: 'lprcq3',
        kind: 'mcq',
        topic: 'linux: load average saturation interpretation',
        question: {
          en: 'On a Linux dedicated server with 4 physical CPU cores, what does a sustained 1-minute load average of 8.0 indicate?',
          bn: '৪টি ফিজিক্যাল সিপিইউ কোর বিশিষ্ট একটি Linux সার্ভারে ১ মিনিটের লোড এভারেজ ৮.০ হলে তা কী নির্দেশ করে?'
        },
        options: [
          { en: 'The system is at 200% capacity; CPU or disk queues have double the workload the hardware can immediately process', bn: 'সিস্টেমটি ২০০% চাপে রয়েছে; হার্ডওয়্যার যা সামলাতে পারে তার দ্বিগুণ কাজ লাইনে জমে আছে' },
          { en: 'The system is 50% idle', bn: 'সিস্টেম ৫০% অলস বসে আছে' },
          { en: 'The server has permanently failed', bn: 'সার্ভার নষ্ট হয়ে গেছে' },
          { en: 'All network cards are disconnected', bn: 'নেটওয়ার্ক বিচ্ছিন্ন হয়েছে' }
        ],
        answer: 0,
        hint: {
          en: '8.0 on a 4-core machine is 200% load.',
          bn: '৪-কোরের জন্য ৮.০ মানে ২০০% লোড।'
        },
        explanation: {
          en: 'A load average equal to core count represents 100% capacity. A load of 8.0 on 4 cores means an average of 4 tasks are queuing waiting for CPU time.',
          bn: 'কোর সংখ্যার সমান লোড মানে ১০০% ব্যবহার। ৪ কোরে ৮.০ মানে প্রতি মুহূর্তে আরও ৪টি কাজ লাইনে আটকে থাকছে।'
        }
      },
      {
        id: 'lprcq4',
        kind: 'mcq',
        topic: 'linux: pid 1 historical identity',
        question: {
          en: 'What is the standard name of the process assigned PID 1 in modern mainstream Linux operating systems?',
          bn: 'আধুনিক জনপ্রিয় Linux অপারেটিং সিস্টেমে PID ১ প্রাপ্ত প্রাথমিক প্রসেসটির নাম কী?'
        },
        options: [
          { en: 'systemd', bn: 'systemd' },
          { en: 'bash', bn: 'bash' },
          { en: 'dockerd', bn: 'dockerd' },
          { en: 'nginx', bn: 'nginx' }
        ],
        answer: 0,
        hint: {
          en: 'systemd.',
          bn: 'systemd।'
        },
        explanation: {
          en: 'systemd is the standard init system and service manager that bootstraps user space with PID 1 on modern Linux distributions.',
          bn: 'আধুনিক Linux সিস্টেমে systemd হলো প্রধান ইনিট সিস্টেম যা PID ১ ধারণ করে সমস্ত সার্ভিস চালু করে।'
        }
      }
    ]
  }
};
