import type { Lesson } from '../../../lib/types';

export const UsersAndTheUserLesson: Lesson = {
  slug: 'users-and-the-user',
  tech: 'linux',
  title: {
    en: 'Linux User & Group Management: Passwords, Sudoers & PAM Security',
    bn: 'Linux ব্যবহারকারী ও গ্রুপ ব্যবস্থাপনা: পাসওয়ার্ড, সুডোয়ার্স ও PAM সিকিউরিটি'
  },
  summary: {
    en: 'Master Linux identity architecture, password cryptography, and administrative privilege delegation across 10 structured topics. Classify root (UID 0), system service daemons, and human accounts. Parse the 7 fields of /etc/passwd and inspect salted hashes in /etc/shadow. Provision users with useradd and usermod. Delegate controlled administrative powers safely using visudo and /etc/sudoers.d drop-ins. Understand Pluggable Authentication Modules (PAM) stack directives. Audit account security, lock compromised logins, and parse user databases in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux আইডেন্টিটি আর্কিটেকচার, পাসওয়ার্ড ক্রিপ্টোগ্রাফি এবং অ্যাডমিনিস্ট্রেটিভ প্রিভিলেজ ডেলিগেশন আয়ত্ত করুন। রুট (UID ০), সিস্টেম সার্ভিস ডিমেন এবং সাধারণ ব্যবহারকারী অ্যাকাউন্ট চিহ্নিত করুন। /etc/passwd-এর ৭টি ফিল্ড বুঝুন এবং /etc/shadow-এর সল্টেড হ্যাশ বিশ্লেষণ করুন। useradd ও usermod দিয়ে নতুন ইউজার তৈরি ও গ্রুপে যুক্ত করুন। visudo এবং /etc/sudoers.d ফাইল দিয়ে নিরাপদে সুডো পারমিশন বরাদ্দ করুন। প্লাগঅ্যাবল অথেনটিকেশন মডিউল (PAM) স্ট্যাকের কার্যপদ্ধতি জানুন। একাউন্ট সিকিউরিটি অডিট করুন, সন্দেহভাজন লগইন লক করুন এবং Node.js-এ ইউজার ডাটাবেস পার্স করুন।'
  },
  minutes: 25,
  nextLesson: {
    slug: 'packages-and-the-package',
    tech: 'linux',
    title: {
      en: 'Linux Package Management: APT, DPKG & Repository Architecture',
      bn: 'Linux প্যাকেজ ম্যানেজমেন্ট: APT, DPKG ও রিপোজিটরি আর্কিটেকচার'
    }
  },
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Linux User Taxonomy: Root, System, and Human Accounts', bn: '১. Linux ইউজার বিভাজন: রুট, সিস্টেম ও সাধারণ ব্যবহারকারী' } },
    {
      type: 'para',
      text: {
        en: 'Linux enforces access boundaries by organizing accounts based on numeric User IDs (UID). The first group is the Superuser (root), uniquely identified by UID 0 with unrestricted kernel power. The second group contains System Service accounts (UIDs 1 through 999) such as nginx, postgres, and systemd, which run background daemons without login shells. The third group contains Human Users (UID 1000 and above).',
        bn: 'Linux অপারেটিং সিস্টেম সাংখ্যিক ইউজার আইডি (UID)-র ওপর ভিত্তি করে ব্যবহারকারীদের বিভিন্ন দলে ভাগ করে নিরাপত্তা রক্ষা করে। প্রথম দল হলো সুপারইউজার (রুট), যার UID ০ এবং কার্নেলে তার ক্ষমতা অপরিসীম। দ্বিতীয় দলে থাকে সিস্টেম সার্ভিস অ্যাকাউন্টগুলো (UID ১ থেকে ৯৯৯) যেমন nginx বা postgres, যা কোনো লগইন শেল ছাড়াই ব্যাকগ্রাউন্ড সার্ভিস চালায়। আর তৃতীয় দলে থাকে সাধারণ মানব ব্যবহারকারীরা (UID ১০০০ বা তার বেশি)।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `LINUX USER ACCOUNT TAXONOMY & UID RANGES:
+------------+------------------+-----------------------------------------------+
| Account    | UID Range        | Operational Purpose & Shell Configuration    |
+------------+------------------+-----------------------------------------------+
| root       | 0                | Full kernel privileges; shell: /bin/bash      |
| System     | 1 - 999          | Daemons (nginx, mysql); shell: /usr/sbin/nologin|
| Humans     | 1000 - 60000     | Interactive engineers; shell: /bin/bash       |
| nobody     | 65534            | Minimal unprivileged fallback user            |
+------------+------------------+-----------------------------------------------+`,
      caption: {
        en: 'UID numeric ranges cleanly separate background service daemons from human logins.',
        bn: 'UID সংখ্যার সীমা ব্যাকগ্রাউন্ড সার্ভিস ও সাধারণ মানব অ্যাকাউন্টের মধ্যে স্পষ্ট পার্থক্য গড়ে তোলে।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Linux Authentication & Sudo Elevation Architecture', bn: 'Linux অথেনটিকেশন ও সুডো এলিভেশন আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Linux User and Sudo Architecture Diagram">
<g transform="translate(20, 20)">
<rect x="0" y="20" width="160" height="110" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="80" y="45" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">User: alice (1001)</text>
<text x="80" y="68" font-size="9" fill="#cbd5e1" text-anchor="middle">Group: developers</text>
<text x="80" y="88" font-size="9" fill="#cbd5e1" text-anchor="middle">Shell: /bin/bash</text>
<text x="80" y="112" font-size="9" fill="#fbbf24" text-anchor="middle">Executes: sudo nginx -s reload</text>

<path d="M165,75 L245,75" stroke="#38bdf8" stroke-width="2"/>
<text x="205" y="68" font-size="8" fill="#38bdf8" text-anchor="middle">sudoers check</text>

<rect x="250" y="20" width="180" height="110" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
<text x="340" y="45" font-size="11" font-weight="700" fill="#4ade80" text-anchor="middle">Security Policy Gate</text>
<text x="340" y="68" font-size="9" fill="#cbd5e1" text-anchor="middle">/etc/sudoers.d/developers</text>
<text x="340" y="88" font-size="9" fill="#94a3b8" text-anchor="middle">PAM Auth Stack: Passwd Hash</text>
<text x="340" y="112" font-size="9" fill="#4ade80" text-anchor="middle">Matches Rule: ALLOWED</text>

<path d="M435,75 L505,75" stroke="#10b981" stroke-width="2"/>
<text x="470" y="68" font-size="8" fill="#10b981" text-anchor="middle">Elevate</text>

<rect x="510" y="20" width="150" height="110" rx="8" fill="#0f172a" stroke="#f59e0b" stroke-width="2"/>
<text x="585" y="45" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">Root Execution (UID 0)</text>
<text x="585" y="70" font-size="9" fill="#cbd5e1" text-anchor="middle">Effective UID: 0</text>
<text x="585" y="92" font-size="9" fill="#cbd5e1" text-anchor="middle">Full Kernel Control</text>
<text x="585" y="114" font-size="8" fill="#4ade80" text-anchor="middle">Logged to /var/log/auth.log</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Identity Databases: /etc/passwd and /etc/shadow', bn: '২. পরিচয় ডাটাবেস: /etc/passwd ও /etc/shadow' } },
    {
      type: 'para',
      text: {
        en: 'User identities are declared in /etc/passwd, a world-readable text file composed of 7 colon-delimited fields: Username, Password placeholder (x), UID, primary GID, Comment description, Home directory, and Default shell. The sensitive cryptographic password hashes are stored separately inside /etc/shadow, which is readable exclusively by root.',
        bn: 'ব্যবহারকারীর পরিচিতি /etc/passwd ফাইলে সংরক্ষিত থাকে, যা কোলন দ্বারা বিভক্ত ৭টি ফিল্ড নিয়ে গঠিত একটি উন্মুক্ত টেক্সট ফাইল: ইউজারনেম, পাসওয়ার্ডের স্থানধারক (x), UID, প্রাথমিক GID, বিবরণ, হোম ডিরেক্টরি এবং ডিফল্ট শেল। তবে পাসওয়ার্ডের সংবেদনশীল ক্রিপ্টোগ্রাফিক হ্যাশ থাকে /etc/shadow ফাইলে, যা শুধুমাত্র রুট পড়তে পারে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect an entry in /etc/passwd:
grep "^deploy:" /etc/passwd
# Output: deploy:x:1001:1001:Deploy Engineer:/home/deploy:/bin/bash

# Parse the 7 colon-separated fields:
# Field 1: deploy          (Username)
# Field 2: x               (Password stored safely in /etc/shadow)
# Field 3: 1001            (User ID - UID)
# Field 4: 1001            (Group ID - GID)
# Field 5: Deploy Engineer (GECOS comment metadata)
# Field 6: /home/deploy    (Home directory path)
# Field 7: /bin/bash       (Default login shell)

# Inspect encrypted password hash in /etc/shadow (root only):
sudo grep "^deploy:" /etc/shadow
# Output: deploy:$6$rounds=5000$saltstring$hashedpassword...:19600:0:90:7:::`,
      caption: {
        en: '/etc/passwd defines accounts; /etc/shadow securely isolates salted password hashes.',
        bn: '/etc/passwd অ্যাকাউন্ট সংজ্ঞায়িত করে এবং /etc/shadow পাসওয়ার্ড হ্যাশ সুরক্ষিত রাখে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Provisioning Accounts: useradd and usermod', bn: '৩. অ্যাকাউন্ট তৈরি ও পরিচালনা: useradd ও usermod' } },
    {
      type: 'para',
      text: {
        en: 'Low-level account creation utilizes the useradd command. Flags configure the profile: -m creates the home directory populated from /etc/skel templates; -s assigns the login shell; and -g sets the primary group. The usermod command updates existing accounts, where appending the -aG flag safely adds secondary supplementary groups without stripping existing memberships.',
        bn: 'নতুন অ্যাকাউন্ট তৈরিতে useradd কমান্ড ব্যবহার করা হয়। বিভিন্ন ফ্ল্যাগ প্রোফাইল সাজাতে সাহায্য করে: -m ফ্ল্যাগ /etc/skel থেকে ফাইল কপি করে হোম ডিরেক্টরি বানায়; -s ফ্ল্যাগ শেল নির্ধারণ করে; আর -g প্রাথমিক গ্রুপ ঠিক করে। তৈরি করা অ্যাকাউন্টে নতুন গ্রুপ যোগ করতে usermod -aG ব্যবহার করা হয়, যা পুরনো গ্রুপগুলো না মুছেই নতুন গ্রুপ যোগ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create a developer account with home directory and Bash shell:
sudo useradd -m -s /bin/bash -c "Alice Developer" alice

# Set account password securely:
sudo passwd alice

# Add alice to the docker secondary group (-a for append is vital!):
sudo usermod -aG docker alice

# Verify active groups assigned to user:
id alice
# Output: uid=1002(alice) gid=1002(alice) groups=1002(alice),998(docker)`,
      caption: {
        en: 'Always use usermod -aG: omitting the -a flag accidentally strips all other supplementary groups.',
        bn: 'usermod-এ সর্বদা -aG ব্যবহার করুন: -a বাদ দিলে ইউজার আগের সমস্ত গ্রুপ থেকে বিচ্ছিন্ন হয়ে যায়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Password Cryptography & Aging Policy: chage', bn: '৪. পাসওয়ার্ড ক্রিপ্টোগ্রাফি ও বয়স নীতি: chage' } },
    {
      type: 'para',
      text: {
        en: 'Modern Linux systems hash passwords using modern algorithms specified by prefixes in /etc/shadow: $6$ indicates SHA-512 with salt, while $y$ represents yescrypt. Enterprise compliance requires enforcing password expiration policies. The chage command configures maximum password lifetimes, warning intervals, and automatic account expiration dates.',
        bn: 'আধুনিক Linux ডিস্ট্রিবিউশন শক্তিশালী অ্যালগরিদম দিয়ে পাসওয়ার্ড হ্যাশ করে: $6$ দিয়ে SHA-512 এবং $y$ দিয়ে yescrypt নির্দেশ করা হয়। এন্টারপ্রাইজ সিস্টেমে নির্দিষ্ট সময় পর পর পাসওয়ার্ড পরিবর্তনের নিয়ম কার্যকর করতে chage কমান্ড ব্যবহৃত হয়, যার মাধ্যমে পাসওয়ার্ডের মেয়াদ, সতর্কবার্তা এবং অ্যাকাউন্ট বন্ধের দিন নির্ধারণ করা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect password aging telemetry for alice:
sudo chage -l alice
# Output:
# Minimum password age               : 0
# Maximum password age               : 90
# Password expiration warning period : 7

# Enforce 90-day password rotation with 7-day warning period:
sudo chage -M 90 -W 7 alice`,
      caption: {
        en: 'chage establishes automated password rotation policies required by security frameworks.',
        bn: 'chage কমান্ড নির্দিষ্ট দিন পর পর পাসওয়ার্ড পরিবর্তনের স্বয়ংক্রিয় নিয়ম প্রয়োগ করে।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. Privilege Delegation with Sudo & visudo', bn: '৫. প্রিভিলেজ ডেলিগেশন: সুডো ও visudo' } },
    {
      type: 'para',
      text: {
        en: 'Logging in directly as root is dangerous because an errant typo can destroy the operating system. The sudo (Superuser Do) tool grants authorized accounts temporary root capabilities for specific commands. Administrative rules are configured inside /etc/sudoers. Never edit this file directly with a generic text editor: always use the visudo command, which validates syntax before saving to prevent lockouts.',
        bn: 'সরাসরি রুট হিসেবে লগইন থাকা অত্যন্ত ঝুঁকিপূর্ণ, কারণ একটি ভুলের কারণে পুরো সিস্টেম ধ্বংস হতে পারে। sudo টুল সাধারণ ইউজারকে সাময়িকভাবে রুট ক্ষমতায় নির্দিষ্ট কমান্ড চালানোর অনুমতি দেয়। এই নিয়মগুলো /etc/sudoers ফাইলে থাকে। সাধারণ কোনো এডিটর দিয়ে এটি কখনো এডিট করবেন না: সর্বদা visudo ব্যবহার করুন, যা সিনট্যাক্স যাচাই করে নিশ্চিত করে যাতে লকআউট না ঘটে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Safely edit the sudoers configuration file:
sudo visudo

# Sudoers rule syntax:
# USER/GROUP    HOSTS=(RUN_AS_USERS:RUN_AS_GROUPS)    COMMANDS
# Allow members of group 'sudo' full administrative power:
# %sudo   ALL=(ALL:ALL) ALL

# Grant user 'deploy' passwordless permission to restart system services:
# deploy  ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart myapp`,
      caption: {
        en: 'visudo performs syntax verification, preventing catastrophic administrative lockout.',
        bn: 'visudo ফাইলে ভুল থাকলে সেভ হতে দেয় না, ফলে কোনো লকআউট হওয়ার সম্ভাবনা থাকে না।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Modular Sudo Policies: /etc/sudoers.d/', bn: '৬. মডুলার সুডো পলিসি: /etc/sudoers.d/' } },
    {
      type: 'para',
      text: {
        en: 'Instead of appending lines to the central /etc/sudoers file, modern configuration management tools like Ansible install isolated drop-in configuration files inside /etc/sudoers.d/. Files in this directory must have 0440 octal permissions and must not contain periods in their filenames; otherwise sudo ignores them for security.',
        bn: 'মূল /etc/sudoers ফাইলে লাইন যোগ করার বদলে আধুনিক অটোমেশন টুলগুলো /etc/sudoers.d/ ফোল্ডারে আলাদা ফাইল হিসেবে নিয়ম সংরক্ষণ করে। এই ফোল্ডারের ফাইলগুলোর পারমিশন কঠোরভাবে ০৪৪০ হতে হয় এবং ফাইলে কোনো ডট (.) থাকা নিষিদ্ধ; অন্যথায় নিরাপত্তার কারণে সুডো ফাইলটিকে উপেক্ষা করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Create a drop-in sudoers policy for automated deploy pipelines:
echo "deploy ALL=(ALL) NOPASSWD: /usr/bin/docker" | sudo tee /etc/sudoers.d/deploy-docker

# Set mandatory strict 0440 permissions:
sudo chmod 0440 /etc/sudoers.d/deploy-docker

# Validate configuration syntax across all sudoers files:
sudo visudo -c
# Output: /etc/sudoers.d/deploy-docker: parsed OK`,
      caption: {
        en: 'Modular drop-in files in /etc/sudoers.d streamline infrastructure-as-code automation.',
        bn: '/etc/sudoers.d-এর মডুলার ফাইল অটোমেশন ও সিআই/সিডি পাইপলাইনে পলিসি যুক্ত করা সহজ করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Pluggable Authentication Modules (PAM)', bn: '৭. প্লাগঅ্যাবল অথেনটিকেশন মডিউল (PAM)' } },
    {
      type: 'para',
      text: {
        en: 'Linux centralizes all user authentication through Pluggable Authentication Modules (PAM) located in /etc/pam.d/. Whether logging in via SSH, local console, or sudo, the system routes credentials through a stack of PAM modules. Module control flags (required, requisite, sufficient, optional) govern whether authentication proceeds or immediately fails.',
        bn: 'Linux সিস্টেমে যেকোনো ব্যবহারকারী লগইন ও পাসওয়ার্ড যাচাই /etc/pam.d/ ফোল্ডারে থাকা প্লাগঅ্যাবল অথেনটিকেশন মডিউল (PAM) দ্বারা নিয়ন্ত্রিত হয়। এসএসএইচ, টার্মিনাল বা সুডো যেখানেই লগইন করা হোক না কেন, তা PAM মডিউলের মধ্য দিয়ে যায়। এর ভেতরের বিভিন্ন ফ্ল্যাগ (required, sufficient ইত্যাদি) ঠিক করে ব্যবহারকারী প্রবেশ করতে পারবে নাকি ব্যর্থ হবে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `PAM STACK CONTROL FLOW IN /etc/pam.d/sshd:
+-------------------+----------------+------------------------------------------+
| Management Group  | Control Flag   | Module Path & Options                   |
+-------------------+----------------+------------------------------------------+
| auth              | required       | pam_env.so                              |
| auth              | sufficient     | pam_unix.so nullok_secure               |
| auth              | required       | pam_deny.so                             |
| account           | required       | pam_nologin.so                          |
| session           | required       | pam_limits.so                           |
+-------------------+----------------+------------------------------------------+`,
      caption: {
        en: 'PAM allows attaching Multi-Factor Authentication (MFA) and rate limiting to any service.',
        bn: 'PAM-এর মাধ্যমে যেকোনো সার্ভিসে টু-ফ্যাক্টর অথেনটিকেশন (MFA) ও রেট লিমিটিং যুক্ত করা যায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. User Shell Initialization: .bashrc vs .profile', bn: '৮. ইউজার শেল সূচনা: .bashrc বনাম .profile' } },
    {
      type: 'para',
      text: {
        en: 'When a user logs into a Linux machine, the shell executes startup configuration scripts. For interactive login shells (such as SSH logins), the shell runs /etc/profile followed by ~/.profile. For interactive non-login shells (such as opening a new tmux pane or running a subshell), ~/.bashrc is executed to load aliases and functions.',
        bn: 'Linux সার্ভারে ইউজার লগইন করার সময় শেল বেশ কিছু কনফিগারেশন স্ক্রিপ্ট স্বয়ংক্রিয়ভাবে চালায়। এসএসএইচের মতো ইন্টারঅ্যাক্টিভ লগইন শেলের ক্ষেত্রে প্রথমে /etc/profile এবং এরপর ~/.profile চলে। আর tmux উইন্ডো বা সাবশেলের মতো নন-লগইন শেলের ক্ষেত্রে সরাসরি ~/.bashrc চলে যা আলিয়াস ও ফাংশন লোড করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Standard environment configuration in ~/.bashrc:
export PATH="$HOME/.local/bin:$PATH"
export EDITOR="nano"
alias ll="ls -la --color=auto"

# Source changes immediately into the current active shell:
source ~/.bashrc`,
      caption: {
        en: '~/.bashrc configures interactive aliases and prompt settings for Bash sessions.',
        bn: '~/.bashrc টার্মিনাল সেশনের জন্য বিভিন্ন শর্টকাট আলিয়াস ও সেটিংস সক্রিয় করে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Account Security Auditing: Locking & Shell Disabling', bn: '৯. অ্যাকাউন্ট অডিট: লগইন লক ও শেল নিষ্ক্রিয়করণ' } },
    {
      type: 'para',
      text: {
        en: 'When offboarding an employee or handling an incident, system administrators must instantly terminate user access. Executing passwd -l places an exclamation point in front of the password hash in /etc/shadow, disabling password logins. Additionally, changing the user shell to /usr/sbin/nologin blocks SSH and console sessions completely.',
        bn: 'কোনো কর্মী প্রতিষ্ঠান ছেড়ে গেলে বা নিরাপত্তা ঝুঁকি দেখা দিলে অ্যাডমিনিস্ট্রেটরদের দ্রুত অ্যাক্সেস বন্ধ করতে হয়। passwd -l কমান্ড চালালে /etc/shadow-এ পাসওয়ার্ডের সামনে একটি বিস্ময়বোধক (!) চিহ্ন বসে যায়, ফলে পাসওয়ার্ড দিয়ে আর ঢোকা যায় না। এছাড়া শেলের ঠিকানা /usr/sbin/nologin করে দিলে কোনোভাবেই আর এসএসএইচ করা সম্ভব হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Lock user password immediately:
sudo passwd -l bob

# Change login shell to nologin to reject SSH interactive connections:
sudo usermod -s /usr/sbin/nologin bob

# Verify account status:
sudo passwd -S bob
# Output: bob L 10/01/2026 0 90 7 -1  ('L' indicates Locked!)

# Kill all active processes currently running under user bob:
sudo pkill -u bob`,
      caption: {
        en: 'Combining passwd -l, nologin shell, and pkill terminates active and future user sessions.',
        bn: 'passwd -l, nologin শেল এবং pkill একসাথে প্রয়োগ করলে ইউজারের সমস্ত সেশন সম্পূর্ণ বিচ্ছিন্ন হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Auditing Linux Users & UIDs in Node.js', bn: '১০. Node.js-এ Linux ইউজার ও UID অডিট করা' } },
    {
      type: 'para',
      text: {
        en: 'Here is a Node.js system auditing script that parses /etc/passwd records, identifies dangerous non-root accounts holding UID 0, and flags human accounts with valid login shells.',
        bn: 'নিচে /etc/passwd ফাইল পার্স করে UID ০ প্রাপ্ত বিপজ্জনক আনঅথরাইজড রুট অ্যাকাউন্ট এবং শেলপ্রাপ্ত সাধারণ ইউজার শনাক্ত করার একটি Node.js কোড দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import fs from "fs/promises";

async function auditLinuxAccounts() {
  const content = await fs.readFile("/etc/passwd", "utf8");
  const lines = content.trim().split("\\n");

  const users = lines.map(line => {
    const [username, , uidStr, gidStr, comment, home, shell] = line.split(":");
    return {
      username,
      uid: parseInt(uidStr, 10),
      gid: parseInt(gidStr, 10),
      comment,
      home,
      shell
    };
  });

  // Security check: Flag any user other than 'root' possessing UID 0 (backdoor indicator):
  const rogueRootAccounts = users.filter(u => u.uid === 0 && u.username !== "root");
  console.log("Rogue Root Accounts (UID 0):", rogueRootAccounts.length);

  // Filter human users (UID >= 1000) with interactive shells:
  const humanUsers = users.filter(u => u.uid >= 1000 && !u.shell.includes("nologin"));
  console.log("Interactive Human Accounts:", humanUsers.map(u => u.username));

  return { totalAccounts: users.length, humanUsers: humanUsers.length };
}

await auditLinuxAccounts();
console.log("User accounts audit completed successfully");
// Output: User accounts audit completed successfully`,
      caption: {
        en: 'Parsing /etc/passwd enables security tools to detect backdoor accounts holding UID 0 privileges.',
        bn: '/etc/passwd পার্স করার মাধ্যমে সিস্টেমে কোনো গোপন UID ০ ব্যাকডোর অ্যাকাউন্ট আছে কিনা তা ধরা পড়ে।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-usr-ex1',
      kind: 'predict',
      topic: 'linux: root user numeric uid identity',
      question: {
        en: 'What is the numeric User ID (UID) of the root superuser account in Linux?',
        bn: 'Linux অপারেটিং সিস্টেমে রুট (root) সুপারইউজার অ্যাকাউন্টের সাংখ্যিক ইউজার আইডি (UID) কত?'
      },
      code: `/* Numeric UID of the root user: */
/* root.uid === _ */`,
      answer: '0',
      accept: ['0', 'zero'],
      hint: {
        en: 'UID 0 is root.',
        bn: 'UID ০ হলো রুট।'
      },
      explanation: {
        en: 'UID 0 belongs uniquely to the superuser root account in all Unix/Linux systems.',
        bn: 'সমস্ত ইউনিক্স ও Linux সিস্টেমে UID ০ সুনির্দিষ্টভাবে সুপারইউজার রুটের জন্য বরাদ্দ।'
      }
    },
    {
      id: 'lnx-usr-ex2',
      kind: 'mcq',
      topic: 'linux: visudo syntax validation purpose',
      question: {
        en: 'Why is it critical to edit the /etc/sudoers file using the visudo command rather than standard nano or vim?',
        bn: 'সাধারণ ন্যানো বা ভিম এডিটরের বদলে visudo কমান্ড ব্যবহার করে /etc/sudoers ফাইল এডিট করা কেন অপরিহার্য?'
      },
      options: [
        { en: 'visudo performs strict syntax checking before saving, preventing administrative lockouts caused by syntax errors', bn: 'visudo ফাইলটি সেভ করার আগে সিনট্যাক্স যাচাই করে, যাতে ভুলের কারণে কোনো প্রশাসনিক লকআউট না ঘটে' },
        { en: 'visudo encrypts the hard drive with AES', bn: 'হার্ডড্রাইভ এনক্রিপ্ট করে' },
        { en: 'visudo makes the computer boot faster', bn: 'কম্পিউটার দ্রুত চালু করে' },
        { en: 'visudo sends emails to employees', bn: 'কর্মীদের ইমেল পাঠায়' }
      ],
      answer: 0,
      hint: {
        en: 'Syntax checking prevents lockouts.',
        bn: 'সিনট্যাক্স যাচাই লকআউট রোধ করে।'
      },
      explanation: {
        en: 'If /etc/sudoers has a syntax error, sudo fails for all users. visudo parses changes before writing to disk.',
        bn: '/etc/sudoers ফাইলে সামান্য সিনট্যাক্স ভুল থাকলে কেউই আর সুডো ব্যবহার করতে পারে না; visudo তা ঠেকায়।'
      }
    },
    {
      id: 'lnx-usr-ex3',
      kind: 'mcq',
      topic: 'linux: append flag for supplementary groups',
      question: {
        en: 'When adding a user to a supplementary group with usermod, which flag must accompany -G to avoid stripping existing groups?',
        bn: 'usermod কমান্ড দিয়ে ব্যবহারকারীকে নতুন গ্রুপে যুক্ত করার সময় আগের গ্রুপগুলো ঠিক রাখতে -G এর সাথে কোন ফ্ল্যাগটি দেওয়া আবশ্যক?'
      },
      options: [
        { en: '-a (append)', bn: '-a (অ্যাপেন্ড)' },
        { en: '-r (recursive)', bn: '-r (রিকার্সিভ)' },
        { en: '-f (force)', bn: '-f (ফোর্স)' },
        { en: '-v (verbose)', bn: '-v (ভারবোস)' }
      ],
      answer: 0,
      hint: {
        en: 'The -a flag (append).',
        bn: '-a ফ্ল্যাগ (অ্যাপেন্ড)।'
      },
      explanation: {
        en: 'usermod -aG appends the group; without -a, usermod replaces all supplementary groups with only the specified group.',
        bn: 'usermod -aG দিলে আগের গ্রুপ ঠিক রেখে নতুন গ্রুপ যোগ হয়; -a না দিলে আগের সব গ্রুপ বাদ পড়ে যায়।'
      }
    }
  ],
  quiz: {
    id: 'lnx-usr-quiz',
    title: { en: 'Linux User Accounts & Sudo Security Quiz', bn: 'Linux ইউজার অ্যাকাউন্ট ও সুডো সিকিউরিটি কুইজ' },
    questions: [
      {
        id: 'lusrq1',
        kind: 'mcq',
        topic: 'linux: password hash isolation in shadow',
        question: {
          en: 'Why are cryptographic password hashes stored in /etc/shadow rather than /etc/passwd?',
          bn: 'পাসওয়ার্ডের ক্রিপ্টোগ্রাফিক হ্যাশ /etc/passwd-এর বদলে /etc/shadow ফাইলে কেন আলাদা করে রাখা হয়?'
        },
        options: [
          { en: '/etc/passwd must be readable by all users to map UIDs to names, whereas /etc/shadow is restricted strictly to root to prevent offline brute-force attacks', bn: '/etc/passwd সবাইকে পড়ার অধিকার দিতে হয় নাম ও UID মিলানোর জন্য, আর /etc/shadow কেবল রুটের জন্য সংরক্ষিত থাকে যাতে কেউ হ্যাশ চুরি করে অফলাইন ক্র্যাক করতে না পারে' },
          { en: 'Because /etc/passwd cannot store more than 100 characters', bn: 'কারণ /etc/passwd-এ ১০০ অক্ষরের বেশি আঁটে না' },
          { en: 'Because /etc/shadow is stored on a remote server', bn: 'কারণ /etc/shadow অন্য সার্ভারে থাকে' },
          { en: 'Because shadow files run faster on SSDs', bn: 'কারণ শ্যাডো ফাইল এসএসডিতে দ্রুত চলে' }
        ],
        answer: 0,
        hint: {
          en: 'Passwd is world-readable; shadow is restricted to root.',
          bn: 'passwd সবাই পড়তে পারে; shadow শুধুমাত্র রুট পড়তে পারে।'
        },
        explanation: {
          en: 'Allowing all users to read password hashes would enable offline dictionary and brute-force cracking attacks.',
          bn: 'সাধারণ ইউজাররা পাসওয়ার্ড হ্যাশ দেখতে পারলে অফলাইনে ডিকশনারি অ্যাটাক চালিয়ে তা সহজে বের করে ফেলতে পারত।'
        }
      },
      {
        id: 'lusrq2',
        kind: 'mcq',
        topic: 'linux: nologin shell utility',
        question: {
          en: 'What is the purpose of setting a service account’s shell to /usr/sbin/nologin?',
          bn: 'কোনো সিস্টেম সার্ভিস অ্যাকাউন্টের শেল হিসেবে /usr/sbin/nologin নির্ধারণ করার মূল উদ্দেশ্য কী?'
        },
        options: [
          { en: 'It prevents human users or attackers from opening an interactive terminal shell using that account', bn: 'এটি সাধারণ মানুষ বা আক্রমণকারীদের ওই অ্যাকাউন্ট ব্যবহার করে টার্মিনাল শেলে লগইন করা প্রতিহত করে' },
          { en: 'It deletes the user account immediately', bn: 'অ্যাকাউন্টটি মুছে ফেলে' },
          { en: 'It turns the account into root', bn: 'অ্যাকাউন্টকে রুটে পরিণত করে' },
          { en: 'It encrypts all files in the account', bn: 'সব ফাইল এনক্রিপ্ট করে' }
        ],
        answer: 0,
        hint: {
          en: 'Blocks interactive terminal logins.',
          bn: 'ইন্টারঅ্যাক্টিভ টার্মিনাল লগইন বন্ধ করে দেয়।'
        },
        explanation: {
          en: '/usr/sbin/nologin prints a message and terminates the session, securing daemon accounts against interactive logins.',
          bn: '/usr/sbin/nologin একটি নোটিশ দিয়ে সেশন শেষ করে দেয়, ফলে সার্ভিসের অ্যাকাউন্টে কেউ টার্মিনালে ঢুকতে পারে না।'
        }
      },
      {
        id: 'lusrq3',
        kind: 'mcq',
        topic: 'linux: sudoers drop-in permissions requirement',
        question: {
          en: 'What octal permission mode is strictly required on files placed inside /etc/sudoers.d/?',
          bn: '/etc/sudoers.d/ ফোল্ডারে রাখা ফাইলগুলোর জন্য কঠোরভাবে কোন অক্টাল পারমিশন থাকা বাধ্যতামূলক?'
        },
        options: [
          { en: '0440 (read-only for owner and group, no write/exec)', bn: '০৪৪০ (মালিক ও গ্রুপের জন্য রিড-অনলি, রাইট বা এক্সিকিউট নেই)' },
          { en: '0777 (world-writable)', bn: '০৭৭৭ (সবার জন্য উন্মুক্ত)' },
          { en: '0666 (world read-write)', bn: '০৬৬৬ (সবার রিড-রাইট)' },
          { en: '0755 (executable for everyone)', bn: '০৭৫৫ (সবার এক্সিকিউটেবল)' }
        ],
        answer: 0,
        hint: {
          en: 'Strict mode 0440.',
          bn: 'কঠোর পারমিশন ০৪৪০।'
        },
        explanation: {
          en: 'Sudo refuses to parse files in /etc/sudoers.d/ if permissions are writable by unauthorized users. 0440 is the standard.',
          bn: 'সুডো ফাইলে অন্য কারো লেখার অধিকার থাকলে নিরাপত্তা ঝুঁকিতে সুডো কাজ করা বন্ধ করে দেয়; ০৪৪০ হলো প্রমিত মান।'
        }
      },
      {
        id: 'lusrq4',
        kind: 'mcq',
        topic: 'linux: pam architecture function',
        question: {
          en: 'What role does PAM (Pluggable Authentication Modules) play in modern Linux system security?',
          bn: 'আধুনিক Linux সিস্টেম নিরাপত্তায় PAM (প্লাগঅ্যাবল অথেনটিকেশন মডিউল)-এর ভূমিকা কী?'
        },
        options: [
          { en: 'It provides a modular, pluggable pipeline for authenticating credentials across SSH, console, and administrative services', bn: 'এটি এসএসএইচ, কনসোল এবং অ্যাডমিন সার্ভিসগুলোতে ব্যবহারকারীর পরিচয় যাচাই করার একটি মডুলার পাইপলাইন সরবরাহ করে' },
          { en: 'It controls motherboard fan speed', bn: 'মাদারবোর্ড ফ্যানের গতি নিয়ন্ত্রণ করে' },
          { en: 'It acts as the primary web browser', bn: 'ওয়েব ব্রাউজার হিসেবে কাজ করে' },
          { en: 'It replaces the Linux kernel', bn: 'কার্নেলকে প্রতিস্থাপন করে' }
        ],
        answer: 0,
        hint: {
          en: 'Pluggable authentication pipeline for services.',
          bn: 'সার্ভিসগুলোর জন্য মডুলার অথেনটিকেশন ব্যবস্থা।'
        },
        explanation: {
          en: 'PAM decouples application code from authentication mechanisms, allowing policies like MFA and LDAP to integrate cleanly.',
          bn: 'PAM যেকোনো অ্যাপ্লিকেশনকে পাসওয়ার্ড বা টু-ফ্যাক্টর অথেনটিকেশনের সাথে মডুলারভাবে যুক্ত করতে সাহায্য করে।'
        }
      }
    ]
  }
};
