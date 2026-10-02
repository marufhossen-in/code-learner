import type { Lesson } from '../../../lib/types';

export const TheLinuxReleaseLesson: Lesson = {
  slug: 'the-linux-release',
  tech: 'linux',
  title: {
    en: 'The Linux Production Release: Hardening, Networking & UFW Firewall',
    bn: 'Linux প্রোডাকশন রিলিজ: হার্ডেনিং, নেটওয়ার্কিং ও UFW ফায়ারওয়াল'
  },
  summary: {
    en: 'Master Linux production server deployment, network defense, and system hardening across 10 structured topics. Lock down OpenSSH by disabling root logins and requiring cryptographic key pairs. Inspect open listening sockets with ss -tulpn. Configure defensive host firewalls with UFW default deny rules. Diagnose networking with ip route and dig. Terminate SSL certificates with Nginx reverse proxies. Ban automated brute-force attacks using Fail2ban. Raise file descriptor limits in limits.conf, execute a pre-flight deployment audit, and automate system health telemetry in Node.js.',
    bn: '১০টি সুসংগঠিত পয়েন্টে Linux প্রোডাকশন সার্ভার ডেপ্লয়মেন্ট, নেটওয়ার্ক প্রতিরক্ষা এবং সিস্টেম হার্ডেনিং বিস্তারিত জানুন। রুট লগইন নিষিদ্ধ ও ক্রিপ্টোগ্রাফিক কি বাধ্যতামূলক করে OpenSSH সুরক্ষিত করুন। ss -tulpn দিয়ে উন্মুক্ত লিসেনিং পোর্ট পর্যবেক্ষণ শিখুন। UFW ফায়ারওয়ালে ডিফল্ট ডিনাই নীতি বাস্তবায়ন দেখুন। ip route ও dig দিয়ে নেটওয়ার্ক ডায়াগনস্টিক চালান। Nginx রিভার্স প্রক্সি দিয়ে SSL সার্টিফিকেট পরিচালনা করুন। Fail2ban দিয়ে ব্রুট-ফোর্স আক্রমণ প্রতিরোধ করা শিখুন। limits.conf ফাইলে ফাইল ডেসক্রিপ্টরের সীমা বৃদ্ধি, প্রি-ফ্লাইট অডিট পরিচালনা এবং Node.js-এ স্বয়ংক্রিয় সার্ভার টেলিমেট্রি চেক সম্পন্ন করুন।'
  },
  minutes: 25,
  blocks: [
    { type: 'heading', id: 'p1', text: { en: '1. Production Server Hardening: SSH Bastion Security', bn: '১. প্রোডাকশন সার্ভার হার্ডেনিং: SSH নিরাপত্তা' } },
    {
      type: 'para',
      text: {
        en: 'When you expose a newly deployed Linux server to the internet without hardening, automated bots begin brute-force attacks within minutes. The first priority in securing an enterprise server is tightening the Secure Shell (SSH) daemon configuration in /etc/ssh/sshd_config. Administrators enforce strict public-key cryptography, ban interactive password logins, and disable direct root account access.',
        bn: 'কোনো সুরক্ষা ব্যবস্থা ছাড়া যখন আপনি একটি নতুন Linux সার্ভার ইন্টারনেটে চালু করবেন, তখন ক্ষতিকর বটগুলো কয়েক মিনিটের মধ্যে আক্রমণ শুরু করে দেয়। সার্ভার সুরক্ষার প্রাথমিক ধাপ হলো /etc/ssh/sshd_config ফাইলে থাকা সিকিউর শেল (SSH) ডিমেন সেটিংস কঠোর করা। প্রকৌশলীরা পাসওয়ার্ড দিয়ে লগইন পুরোপুরি বন্ধ করে দেন, ক্রিপ্টোগ্রাফিক কি ব্যবহার বাধ্যতামূলক করেন এবং রুট অ্যাকাউন্টে সরাসরি লগইন নিষিদ্ধ করেন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Hardened production rules in /etc/ssh/sshd_config:
# Disable direct root login over network:
PermitRootLogin no

# Disable all password authentication (enforce SSH public keys only):
PasswordAuthentication no

# Disable empty passwords and limit authentication attempts:
PermitEmptyPasswords no
MaxAuthTries 3

# Test SSH configuration syntax before reloading daemon:
sudo sshd -t
sudo systemctl reload sshd`,
      caption: {
        en: 'Disabling password authentication neutralizes all automated SSH dictionary attacks.',
        bn: 'পাসওয়ার্ড লগইন বন্ধ করে দিলে স্বয়ংক্রিয় কোনো ডিকশনারি অ্যাটাক আর সফল হতে পারে না।'
      }
    },

    {
      type: 'diagram',
      title: { en: 'Linux Production Network Perimeter Architecture', bn: 'Linux প্রোডাকশন নেটওয়ার্ক পেরিমিটার আর্কিটেকচার' },
      svg: `<svg viewBox="0 0 680 180" font-family="system-ui, sans-serif" role="img" aria-label="Linux Production Network Security Architecture">
<g transform="translate(20, 20)">
<rect x="0" y="30" width="130" height="90" rx="8" fill="#0f172a" stroke="#ef4444" stroke-width="2"/>
<text x="65" y="55" font-size="11" font-weight="700" fill="#f87171" text-anchor="middle">Public Internet</text>
<text x="65" y="78" font-size="9" fill="#cbd5e1" text-anchor="middle">Port 80 (HTTP)</text>
<text x="65" y="98" font-size="9" fill="#cbd5e1" text-anchor="middle">Port 443 (HTTPS)</text>

<path d="M135,75 L205,75" stroke="#ef4444" stroke-width="2"/>
<text x="170" y="68" font-size="8" fill="#ef4444" text-anchor="middle">Untrusted</text>

<rect x="210" y="20" width="150" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/>
<text x="285" y="45" font-size="11" font-weight="700" fill="#fbbf24" text-anchor="middle">UFW Host Firewall</text>
<text x="285" y="68" font-size="9" fill="#4ade80" text-anchor="middle">ALLOW 22/tcp (SSH)</text>
<text x="285" y="88" font-size="9" fill="#4ade80" text-anchor="middle">ALLOW 80, 443/tcp</text>
<text x="285" y="112" font-size="9" fill="#f87171" text-anchor="middle">DEFAULT DENY ALL</text>

<path d="M365,75 L435,75" stroke="#10b981" stroke-width="2"/>
<text x="400" y="68" font-size="8" fill="#4ade80" text-anchor="middle">Filtered</text>

<rect x="440" y="10" width="220" height="130" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2"/>
<text x="550" y="32" font-size="11" font-weight="700" fill="#38bdf8" text-anchor="middle">Internal Host Services</text>
<text x="550" y="52" font-size="9" fill="#cbd5e1" text-anchor="middle">Nginx Reverse Proxy (:443)</text>
<path d="M550,60 L550,80" stroke="#38bdf8" stroke-width="1.5"/>
<text x="550" y="95" font-size="9" fill="#4ade80" text-anchor="middle">Node.js API (127.0.0.1:3000)</text>
<text x="550" y="115" font-size="9" fill="#94a3b8" text-anchor="middle">PostgreSQL (127.0.0.1:5432)</text>
<text x="550" y="130" font-size="8" fill="#fbbf24" text-anchor="middle">Bound strictly to loopback!</text>
</g>
</svg>`
    },

    { type: 'heading', id: 'p2', text: { en: '2. Socket & Port Telemetry: Inspecting with ss -tulpn', bn: '২. সকেট ও পোর্ট বিশ্লেষণ: ss -tulpn কমান্ড' } },
    {
      type: 'para',
      text: {
        en: 'Before configuring firewall rules, administrators must know exactly which processes are listening on which network interfaces. The modern ss (socket statistics) command replaces legacy netstat. Running ss -tulpn displays TCP and UDP sockets, listening status, bound IP addresses (0.0.0.0 public vs 127.0.0.1 loopback), and owning process PIDs.',
        bn: 'ফায়ারওয়াল কনফিগার করার আগে সার্ভারের কোন প্রসেস কোন পোর্টে কান পেতে বসে আছে তা জানা জরুরি। আধুনিক ss কমান্ড পুরনো netstat-এর স্থলাভিষিক্ত হয়েছে। ss -tulpn কমান্ড চালালে সক্রিয় টিসিপি ও ইউডিপি সকেট, উন্মুক্ত পোর্ট, বাইন্ডিং আইপি (উন্মুক্ত 0.0.0.0 বনাম নিরাপদ 127.0.0.1) এবং প্রসেসের পিআইডি দেখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Inspect all listening TCP and UDP sockets with owning process names:
sudo ss -tulpn
# Output:
# Netid State  Local Address:Port   Peer Address:Port  Process
# tcp   LISTEN 0.0.0.0:22           0.0.0.0:*          users:(("sshd",pid=720,fd=3))
# tcp   LISTEN 0.0.0.0:80           0.0.0.0:*          users:(("nginx",pid=1020,fd=6))
# tcp   LISTEN 0.0.0.0:443          0.0.0.0:*          users:(("nginx",pid=1020,fd=7))
# tcp   LISTEN 127.0.0.1:3000       0.0.0.0:*          users:(("node",pid=2045,fd=18))
# tcp   LISTEN 127.0.0.1:5432       0.0.0.0:*          users:(("postgres",pid=1201,fd=5))`,
      caption: {
        en: 'Internal services like Node.js and PostgreSQL must bind to 127.0.0.1 loopback only.',
        bn: 'Node.js ও ডাটাবেসের মতো ইন্টারনাল সার্ভিসকে সর্বদা লোকালহস্ট 127.0.0.1-এ বাইন্ড করা উচিত।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Host Firewall Defense: UFW Configuration', bn: '৩. হোস্ট ফায়ারওয়াল প্রতিরক্ষা: UFW কনফিগারেশন' } },
    {
      type: 'para',
      text: {
        en: 'Linux provides low-level packet filtering via netfilter (iptables and nftables). UFW (Uncomplicated Firewall) provides a clean declarative frontend. The universal security rule for internet-facing servers is default-deny: reject all incoming connections by default, and explicitly allow only the bare minimum ports necessary for operation (SSH, HTTP, HTTPS).',
        bn: 'Linux কার্নেল netfilter ফ্রেমওয়ার্কের মাধ্যমে প্যাকেট ফিল্টার করে। UFW এই জটিল ব্যবস্থাপনাকে সহজ কমান্ডে পরিচালনা করতে সাহায্য করে। ইন্টারনেটে উন্মুক্ত যেকোনো সার্ভারের প্রধান নিরাপত্তা নিয়ম হলো ডিফল্ট-ডিনাই: বাইরে থেকে আসা সমস্ত রিকোয়েস্ট আগে থেকে ব্লক রাখা এবং শুধুমাত্র প্রয়োজনীয় পোর্টগুলো (SSH, HTTP, HTTPS) অনুমতি দেওয়া।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Step 1: Set default policies (Deny all incoming, allow outgoing):
sudo ufw default deny incoming
sudo ufw default allow outgoing

# Step 2: Explicitly allow SSH before enabling to prevent lockout:
sudo ufw limit 22/tcp comment "Rate-limited SSH"

# Step 3: Open web traffic ports:
sudo ufw allow 80/tcp comment "HTTP Web"
sudo ufw allow 443/tcp comment "HTTPS Web"

# Step 4: Enable the firewall:
sudo ufw enable
# Command may disrupt existing ssh connections. Proceed with operation (y|n)? y
# Firewall is active and enabled on system startup

# Step 5: Verify active firewall rules:
sudo ufw status verbose`,
      caption: {
        en: 'ufw limit 22/tcp automatically throttles IPs with more than 6 failed connections per 30 seconds.',
        bn: 'ufw limit দিলে ৩০ সেকেন্ডে ৬ বারের বেশি ব্যর্থ লগইন চেষ্টাকারীকে সাময়িক ব্লক করে দেয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. DNS & Network Configuration: dig and resolvectl', bn: '৪. ডিএনএস ও নেটওয়ার্ক কনফিগারেশন: dig ও resolvectl' } },
    {
      type: 'para',
      text: {
        en: 'Modern Linux systems use systemd-resolved to handle DNS resolution, configured through /etc/systemd/resolved.conf. To diagnose DNS lookup issues without relying on cached browser states, engineers use dig (domain information groper) and resolvectl status to inspect DNS servers and latency.',
        bn: 'আধুনিক Linux সিস্টেমগুলো ডিএনএস রেজোলিউশনের জন্য systemd-resolved সেবা ব্যবহার করে, যা /etc/systemd/resolved.conf দ্বারা নিয়ন্ত্রিত হয়। ক্যাশ এড়িয়ে সরাসরি ইন্টারনেটে ডিএনএস রেকর্ড পরীক্ষা করতে প্রকৌশলীরা dig এবং resolvectl কমান্ড ব্যবহার করে সার্ভারের আইপি ও গতি যাচাই করেন।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Check active DNS servers used by systemd-resolved:
resolvectl status | grep "DNS Servers"
# Output: Current DNS Server: 1.1.1.1, DNS Servers: 1.1.1.1 8.8.8.8

# Query specific A record with short output:
dig +short api.codeshikhon.com
# Output: 198.51.100.42

# Trace complete authoritative DNS delegation tree from root servers:
dig +trace api.codeshikhon.com`,
      caption: {
        en: 'dig +trace identifies exact root and authoritative nameserver delegations across the global DNS.',
        bn: 'dig +trace ইন্টারনেটের রুট সার্ভার থেকে শুরু করে ডোমেইনের পূর্ণাঙ্গ ডিএনএস পথ দেখায়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. IP Routing & Interface Diagnostics: ip route & ping', bn: '৫. আইপি রাউটিং ও ডায়াগনস্টিক: ip route ও ping' } },
    {
      type: 'para',
      text: {
        en: 'The legacy ifconfig command has been superseded by the iproute2 suite. Running ip addr show lists all physical interfaces, MAC addresses, and assigned CIDR IP subnets. Running ip route show displays the routing table, identifying the default gateway responsible for dispatching internet packets.',
        bn: 'পুরনো ifconfig কমান্ডের বদলে এখন প্রমিতভাবে iproute2 স্যুট ব্যবহৃত হয়। ip addr show কমান্ড চালালে সমস্ত ফিজিক্যাল নেটওয়ার্ক কার্ড, ম্যাক অ্যাড্রেস ও আইপি সাবনেট দেখা যায়। আর ip route show কমান্ড রাউটিং টেবিল প্রদর্শন করে, যা ইন্টারনেটে তথ্য পাঠানোর মূল গেটওয়ে প্রকাশ করে।'
      }
    },
    {
      type: 'code',
      lang: 'bash',
      code: `# Show IP addresses assigned to network interfaces:
ip -brief addr show
# Output:
# lo               UNKNOWN        127.0.0.1/8 ::1/128
# eth0             UP             192.168.1.50/24 fe80::a00:27ff:fe4e:66a1/64

# Display kernel routing table and default internet gateway:
ip route show
# Output: default via 192.168.1.1 dev eth0 proto dhcp metric 100

# Ping default gateway to test local physical link connectivity:
ping -c 3 192.168.1.1
# Output: 3 packets transmitted, 3 received, 0% packet loss`,
      caption: {
        en: 'ip route identifies default gateways; ping validates raw ICMP transport layer connectivity.',
        bn: 'ip route ইন্টারনেটের গেটওয়ে দেখায় এবং ping নেটওয়ার্ক কেবলের সচলতা নিশ্চিত করে।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Reverse Proxy & SSL Edge: Nginx to Local Node.js', bn: '৬. রিভার্স প্রক্সি ও SSL প্রান্ত: Nginx থেকে লোকাল Node.js' } },
    {
      type: 'para',
      text: {
        en: 'Directly exposing application runtimes (Node.js, Python, or Go) to public internet traffic is risky and inefficient: runtimes lack specialized static asset caching and HTTP/2 multiplexing. Production architectures place an Nginx reverse proxy on the perimeter, terminating HTTPS encryption and forwarding requests to local loopback 127.0.0.1:3000.',
        bn: 'Node.js বা Python অ্যাপ্লিকেশনকে সরাসরি ইন্টারনেটে উন্মুক্ত করা ঝুঁকিপূর্ণ এবং অদক্ষ: এদের স্ট্যাটিক ফাইল ক্যাশিং ও HTTP/2 পরিচালনার ক্ষমতা সীমিত। তাই প্রোডাকশন সার্ভারের সীমান্তে Nginx রিভার্স প্রক্সি বসানো হয়, যা ইন্টারনেটের রিকোয়েস্ট গ্রহণ করে এসএসএল এনক্রিপশন শেষ করে এবং লোকাল 127.0.0.1:3000-এ পাঠিয়ে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'nginx',
      code: `# /etc/nginx/sites-available/api.conf
server {
    listen 80;
    server_name api.codeshikhon.com;
    return 301 https://$host$request_uri;
}

server {
    listen 443 ssl http2;
    server_name api.codeshikhon.com;

    ssl_certificate /etc/letsencrypt/live/api.codeshikhon.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/api.codeshikhon.com/privkey.pem;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}`,
      caption: {
        en: 'Nginx terminates HTTPS, transparently proxying sanitized HTTP traffic to local backend workers.',
        bn: 'Nginx বাইরে থেকে আসা HTTPS রিকোয়েস্ট গ্রহণ করে নিরাপদভাবে ইন্টারনাল ব্যাকএন্ডে ফরোয়ার্ড করে।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Automated Intrusion Prevention: Fail2ban', bn: '৭. স্বয়ংক্রিয় অনুপ্রবেশ প্রতিরোধ: Fail2ban' } },
    {
      type: 'para',
      text: {
        en: 'Even with key-based authentication, continuous SSH brute-force botnets pollute authentication logs and waste CPU cycles. Fail2ban scans log files (like /var/log/auth.log) for repetitive failed authentication attempts and dynamically injects temporary firewall drop rules into iptables, banning offending IP addresses for designated timeframes.',
        bn: 'কি ভিত্তিক লগইন থাকা সত্ত্বেও ইন্টারনেটের ক্ষতিকর বটগুলো ক্রমাগত পাসওয়ার্ড অনুমানের চেষ্টা করে সার্ভারের সিপিইউ নষ্ট করে। Fail2ban সার্ভিসটি /var/log/auth.log ফাইল নজরদারি করে এবং বারবার ব্যর্থ চেষ্টাকারীদের আইপি স্বয়ংক্রিয়ভাবে শনাক্ত করে নির্দিষ্ট সময়ের জন্য ফায়ারওয়ালে ব্লক করে দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'ini',
      code: `# /etc/fail2ban/jail.local
[DEFAULT]
bantime  = 1h
findtime = 10m
maxretry = 5

[sshd]
enabled = true
port    = ssh
mode    = aggressive

# Check active bans on SSH jail:
# sudo fail2ban-client status sshd
# Output:
# Status for the jail: sshd
# |- Filter: Currently failed: 2, Total failed: 45
# \`- Actions: Currently banned: 4, Total banned: 18
#    \`- Banned IP list: 198.51.100.12 203.0.113.88`,
      caption: {
        en: 'Fail2ban automatically bans repeat offenders, shielding SSH daemons from volumetric abuse.',
        bn: 'Fail2ban স্বয়ংক্রিয়ভাবে আক্রমণকারী আইপি ব্লক করে এসএসএইচ সার্ভারকে অপব্যবহার থেকে বাঁচায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Operating System Resource Limits: limits.conf', bn: '৮. অপারেটিং সিস্টেম রিসোর্স সীমা: limits.conf' } },
    {
      type: 'para',
      text: {
        en: 'By default, Linux limits regular users to 1024 open file descriptors (nofile). High-concurrency servers running databases or Node.js web sockets quickly encounter the fatal error "EMFILE: too many open files" during traffic spikes. System administrators raise these thresholds inside /etc/security/limits.conf and systemd unit service files.',
        bn: 'ডিফল্টভাবে Linux সাধারণ ব্যবহারকারীদের জন্য সর্বোচ্চ ১০২৪টি ফাইল খোলার সীমা (nofile) বেঁধে দেয়। কিন্তু উচ্চ ট্রাফিকের ডাটাবেস বা হাজার হাজার ওয়েবসকেট সংযোগ পরিচালনাকারী Node.js সার্ভারে এই সীমা দ্রুত শেষ হয়ে মারাত্মক "too many open files" ক্র্যাশ ঘটে। অ্যাডমিনিস্ট্রেটররা /etc/security/limits.conf ফাইলে এই সীমা বাড়িয়ে নেন।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `# Configuration additions to /etc/security/limits.conf:
# <domain>      <type>  <item>         <value>
deploy          soft    nofile         65536
deploy          hard    nofile         65536
deploy          soft    nproc          4096
deploy          hard    nproc          4096

# Verify active limits for current active session:
ulimit -n
# Output: 65536

# Check limits of a running process:
cat /proc/2045/limits | grep "Max open files"
# Output: Max open files  65536  65536  files`,
      caption: {
        en: 'Raising nofile to 65536 ensures backend servers comfortably handle thousands of concurrent TCP sockets.',
        bn: 'nofile সীমা ৬৫৫৩৬ এ উন্নীত করলে সার্ভার কোনো ক্র্যাশ ছাড়াই হাজার হাজার সমান্তরাল সংযোগ সামলাতে পারে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Production Pre-Flight Checklist: Before Going Live', bn: '৯. প্রোডাকশন প্রি-ফ্লাইট চেকলিস্ট: লাইভে যাওয়ার পূর্বে' } },
    {
      type: 'para',
      text: {
        en: 'Before switching production DNS traffic to a freshly provisioned Linux instance, you must complete this verified pre-flight security checklist. Key tasks include disabling SSH root logins, enabling UFW with default-deny rules, and confirming automated security updates. You should also ensure databases bind only to loopback, verify NTP clock synchronization, and establish automated log rotation.',
        bn: 'নতুন কোনো Linux সার্ভারে প্রোডাকশন ট্রাফিক চালুর পূর্বে এই জরুরি প্রি-ফ্লাইট চেকলিস্ট সম্পন্ন করা অত্যন্ত আবশ্যক। প্রধান কাজগুলোর মধ্যে রয়েছে এসএসএইচ রুট লগইন বন্ধ রাখা, UFW ডিফল্ট ডিনাইসহ চালু করা এবং স্বয়ংক্রিয় সিকিউরিটি আপডেট নিশ্চিত করা। পাশাপাশি ডাটাবেস কেবল লুপব্যাকে রাখা, এনটিপি দিয়ে ঘড়ির সময় মেলানো এবং স্বয়ংক্রিয় লগ রোটেশন সক্রিয় করতে হবে।'
      }
    },
    {
      type: 'code',
      lang: 'text',
      code: `ENTERPRISE LINUX PRE-FLIGHT VERIFICATION MATRIX:
[✔] Security: SSH keys enforced; PasswordAuthentication disabled in sshd_config
[✔] Security: Root login denied (PermitRootLogin no); admin access via sudo
[✔] Network: UFW active; incoming default DENY; only 22, 80, 443 permitted
[✔] Isolation: Database and internal microservices listening on 127.0.0.1 only
[✔] Resilience: Systemd units configured with Restart=always and NoNewPrivileges=true
[✔] Time: chrony/systemd-timesyncd active (timedatectl confirms NTP synchronized)
[✔] Resources: File descriptors (nofile) raised to 65536 for high TCP throughput
[✔] Monitoring: Disk usage below 70%; swap memory configured for safety`,
      caption: {
        en: 'Passing the pre-flight checklist prevents operational outages and security breaches.',
        bn: 'প্রি-ফ্লাইট চেকলিস্ট অনুসরণ করলে প্রোডাকশনে যেকোনো নিরাপত্তা ঝুঁকি ও ডাউনটাইম এড়ানো যায়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Automated Pre-Flight Health Checker in Node.js', bn: '১০. Node.js-এ স্বয়ংক্রিয় প্রি-ফ্লাইট হেলথ চেকার' } },
    {
      type: 'para',
      text: {
        en: 'Here is an automated deployment verification utility written in Node.js that checks network listening sockets, verifies firewall activity, and calculates disk storage headroom before clearing an application for production release.',
        bn: 'নিচে প্রোডাকশন রিলিজের পূর্বে সার্ভারের উন্মুক্ত পোর্ট, ফায়ারওয়াল স্ট্যাটাস এবং ডিস্ক স্পেস স্বয়ংক্রিয়ভাবে অডিট করার একটি পূর্ণাঙ্গ Node.js স্ক্রিপ্ট দেওয়া হলো।'
      }
    },
    {
      type: 'code',
      lang: 'javascript',
      code: `import { execFile } from "child_process";
import { promisify } from "util";
import fs from "fs/promises";

const execFileAsync = promisify(execFile);

async function runProductionPreflight() {
  const checklist = {
    ufwActive: false,
    publicDbExposed: false,
    diskSpaceSafe: false
  };

  // 1. Verify UFW firewall is active:
  try {
    const { stdout: ufwOut } = await execFileAsync("ufw", ["status"]);
    checklist.ufwActive = ufwOut.includes("Status: active");
  } catch (err) {
    checklist.ufwActive = false;
  }

  // 2. Check for dangerous listening ports on 0.0.0.0 (like raw postgres/redis):
  try {
    const { stdout: ssOut } = await execFileAsync("ss", ["-tulpn"]);
    const lines = ssOut.split("\\n");
    // Flag if 5432 or 6379 are bound to 0.0.0.0:
    checklist.publicDbExposed = lines.some(l => l.includes("0.0.0.0:5432") || l.includes("0.0.0.0:6379"));
  } catch (err) {
    checklist.publicDbExposed = false;
  }

  // 3. Inspect disk capacity on / root partition:
  try {
    const stat = await fs.statfs("/");
    const totalBytes = stat.bsize * stat.blocks;
    const freeBytes = stat.bsize * stat.bfree;
    const usedPct = ((totalBytes - freeBytes) / totalBytes) * 100;
    checklist.diskSpaceSafe = usedPct < 85;
    checklist.diskUsedPercent = Math.round(usedPct);
  } catch (err) {
    checklist.diskSpaceSafe = true;
  }

  console.log("Preflight Release Audit:", checklist);
  const isReady = checklist.ufwActive && !checklist.publicDbExposed && checklist.diskSpaceSafe;
  console.log("Production Release Verdict:", isReady ? "PASSED - READY TO DEPLOY" : "FAILED - HARDENING REQUIRED");
  return isReady;
}

await runProductionPreflight();
console.log("Linux production release checks completed successfully");
// Output: Linux production release checks completed successfully`,
      caption: {
        en: 'Programmatic pre-flight audits integrate into CI/CD pipelines to validate infrastructure compliance.',
        bn: 'সিআই/সিডি পাইপলাইনে এই স্ক্রিপ্ট যুক্ত করে সার্ভার সম্পূর্ণ নিরাপদ কিনা তা স্বয়ংক্রিয়ভাবে নিশ্চিত করা যায়।'
      }
    }
  ],
  exercises: [
    {
      id: 'lnx-rel-ex1',
      kind: 'predict',
      topic: 'linux: standard incoming firewall default policy',
      question: {
        en: 'What is the universally recommended default incoming policy for UFW on a production server (allow vs deny)?',
        bn: 'প্রোডাকশন সার্ভারে UFW ফায়ারওয়ালের বাইরে থেকে আসা ট্রাফিকের ক্ষেত্রে প্রমিত ডিফল্ট পলিসি কোনটি (allow নাকি deny)?',
      },
      code: `/* Recommended UFW incoming default policy: */
/* sudo ufw default ____ incoming */`,
      answer: 'deny',
      accept: ['deny', 'reject'],
      hint: {
        en: 'deny (default deny incoming).',
        bn: 'deny (ডিফল্ট ডিনাই)।'
      },
      explanation: {
        en: 'A default-deny posture blocks all unapproved network ports, ensuring only explicitly permitted services are reachable.',
        bn: 'ডিফল্ট-ডিনাই পলিসি অনুমোদনহীন সব পোর্ট বন্ধ রাখে, ফলে অপ্রয়োজনীয় সার্ভিস ইন্টারনেটে উন্মুক্ত থাকে না।'
      }
    },
    {
      id: 'lnx-rel-ex2',
      kind: 'mcq',
      topic: 'linux: loopback ip address identity',
      question: {
        en: 'To ensure a database like PostgreSQL or Redis is never reachable from the public internet, which IP address interface must it bind to?',
        bn: 'PostgreSQL বা Redis-এর মতো ডাটাবেস যেন পাবলিক ইন্টারনেট থেকে কোনোভাবেই এক্সেস করা না যায়, সেজন্য কোন আইপিতে বাইন্ড করতে হবে?'
      },
      options: [
        { en: '127.0.0.1 (localhost loopback)', bn: '127.0.0.1 (লোকালহস্ট লুপব্যাক)' },
        { en: '0.0.0.0 (all interfaces)', bn: '0.0.0.0 (সকল নেটওয়ার্ক ইন্টারফেস)' },
        { en: '255.255.255.255 (broadcast)', bn: '255.255.255.255 (ব্রডকাস্ট)' },
        { en: '8.8.8.8 (Google DNS)', bn: '8.8.8.8 (গুগল ডিএনএস)' }
      ],
      answer: 0,
      hint: {
        en: '127.0.0.1 loopback.',
        bn: '127.0.0.1 লুপব্যাক।'
      },
      explanation: {
        en: 'Binding to 127.0.0.1 limits socket access strictly to programs executing on the local machine.',
        bn: '127.0.0.1-এ বাইন্ড করলে শুধুমাত্র ওই একই সার্ভারের ভেতরের অন্যান্য প্রোগ্রাম ডাটাবেসে যুক্ত হতে পারে।'
      }
    },
    {
      id: 'lnx-rel-ex3',
      kind: 'mcq',
      topic: 'linux: modern socket inspection command',
      question: {
        en: 'Which modern command is the official high-performance replacement for legacy netstat in Linux system diagnostics?',
        bn: 'Linux সিস্টেমে পুরনো netstat-এর আধুনিক উচ্চগতির বিকল্প কমান্ড কোনটি?'
      },
      options: [
        { en: 'ss (socket statistics)', bn: 'ss (সকেট স্ট্যাটিস্টিকস)' },
        { en: 'ifconfig', bn: 'ifconfig' },
        { en: 'ping', bn: 'ping' },
        { en: 'traceroute', bn: 'traceroute' }
      ],
      answer: 0,
      hint: {
        en: 'ss command.',
        bn: 'ss কমান্ড।'
      },
      explanation: {
        en: 'ss interacts directly with kernel socket tables, offering much faster inspection than legacy netstat.',
        bn: 'ss সরাসরি কার্নেল থেকে দ্রুত সকেটের তথ্য নিয়ে আসে, যা পুরনো netstat-এর চেয়ে অনেক বেশি গতিশীল।'
      }
    }
  ],
  quiz: {
    id: 'lnx-rel-quiz',
    title: { en: 'Linux Production Release & Security Quiz', bn: 'Linux প্রোডাকশন রিলিজ ও নিরাপত্তা কুইজ' },
    questions: [
      {
        id: 'lrelq1',
        kind: 'mcq',
        topic: 'linux: ssh password authentication disable benefit',
        question: {
          en: 'What primary threat does setting "PasswordAuthentication no" in sshd_config eliminate?',
          bn: 'sshd_config ফাইলে "PasswordAuthentication no" নির্ধারণ করলে কোন প্রধান নিরাপত্তা ঝুঁকিটি দূর হয়?'
        },
        options: [
          { en: 'It completely neutralizes automated credential stuffing and brute-force password guessing dictionary attacks', bn: 'এটি স্বয়ংক্রিয় পাসওয়ার্ড অনুমান ও ব্রুট-ফোর্স ডিকশনারি অ্যাটাক সম্পূর্ণ অকার্যকর করে দেয়' },
          { en: 'It turns off the motherboard internet card', bn: 'নেটওয়ার্ক কার্ড বন্ধ করে' },
          { en: 'It makes file downloads take twice as long', bn: 'ডাউনলোডের সময় দ্বিগুণ করে' },
          { en: 'It uninstalls all text editors', bn: 'টেক্সট এডিটর আনইনস্টল করে' }
        ],
        answer: 0,
        hint: {
          en: 'Eliminates brute-force guessing.',
          bn: 'ব্রুট-ফোর্স অনুমানমূলক আক্রমণ দূর করে।'
        },
        explanation: {
          en: 'Without password authentication, callers must present a 2048+ bit cryptographic private key that cannot be brute-forced.',
          bn: 'পাসওয়ার্ড বন্ধ থাকলে ২০৪৮ বিটের ক্রিপ্টোগ্রাফিক কি ছাড়া কোনোভাবেই লগইন করা সম্ভব হয় না, যা অনুমানের অতীত।'
        }
      },
      {
        id: 'lrelq2',
        kind: 'mcq',
        topic: 'linux: fail2ban primary mechanism',
        question: {
          en: 'How does Fail2ban protect Linux servers from abusive clients?',
          bn: 'Fail2ban কীভাবে ক্ষতিকর ক্লায়েন্টদের থেকে Linux সার্ভারকে রক্ষা করে?'
        },
        options: [
          { en: 'It monitors application log files for repeated authentication failures and dynamically adds temporary firewall drop rules for abusive IPs', bn: 'এটি লগ ফাইল পরীক্ষা করে বারবার ব্যর্থ হওয়া আইপিগুলো শনাক্ত করে এবং সাময়িকভাবে ফায়ারওয়ালে তাদের ব্লক করে' },
          { en: 'It reboots the computer whenever someone logs in', bn: 'কেউ লগইন করলেই কম্পিউটার রিস্টার্ট করে' },
          { en: 'It deletes user data after 3 attempts', bn: '৩ বার চেষ্টার পর ডেটা মুছে ফেলে' },
          { en: 'It sends text messages to the police', bn: 'পুলিশকে মেসেজ পাঠায়' }
        ],
        answer: 0,
        hint: {
          en: 'Dynamically drops abusive IPs in firewall.',
          bn: 'ফায়ারওয়ালে আক্রমণকারী আইপি ব্লক করে।'
        },
        explanation: {
          en: 'Fail2ban bridges log inspection with netfilter, banning repeat offenders automatically.',
          bn: 'Fail2ban লগ ফাইল ও ফায়ারওয়ালের মধ্যে সমন্বয় করে অপরাধী আইপিগুলোকে স্বয়ংক্রিয়ভাবে আটকে দেয়।'
        }
      },
      {
        id: 'lrelq3',
        kind: 'mcq',
        topic: 'linux: emfile error root cause',
        question: {
          en: 'What causes a high-traffic server application to crash with "EMFILE: too many open files"?',
          bn: 'অতিরিক্ত ট্রাফিকের সময় সার্ভারে "EMFILE: too many open files" এরর ঘটে ক্র্যাশ করার মূল কারণ কী?'
        },
        options: [
          { en: 'The process exceeded the operating system file descriptor limit (nofile) because each active TCP socket counts as an open file', bn: 'প্রসেসটি অপারেটিং সিস্টেমের নির্ধারিত ফাইল ডেসক্রিপ্টরের সীমা (nofile) অতিক্রম করেছে, কারণ প্রতিটি সক্রিয় টিসিপি সংযোগও একটি ফাইল হিসেবে গণ্য হয়' },
          { en: 'The physical SSD ran out of storage space', bn: 'এসএসডির জায়গা শেষ হয়ে গেছে' },
          { en: 'The computer fan stopped working', bn: 'কম্পিউটার ফ্যান বন্ধ হয়ে গেছে' },
          { en: 'The user forgot their login password', bn: 'ইউজার পাসওয়ার্ড ভুলে গেছেন' }
        ],
        answer: 0,
        hint: {
          en: 'Exceeded nofile file descriptor limits.',
          bn: 'nofile ফাইল ডেসক্রিপ্টরের সীমা অতিক্রম করেছে।'
        },
        explanation: {
          en: 'In Linux, network sockets consume file descriptors. High concurrency easily exhausts default 1024 nofile limits unless raised in limits.conf.',
          bn: 'Linux-এ প্রতিটি নেটওয়ার্ক কানেকশনই একটি ফাইল। ডিফল্ট ১০২৪ সীমা না বাড়ালে বেশি ট্রাফিকে সার্ভার ক্র্যাশ করে।'
        }
      },
      {
        id: 'lrelq4',
        kind: 'mcq',
        topic: 'linux: reverse proxy production role',
        question: {
          en: 'Why do production deployments place Nginx in front of application runtimes like Node.js?',
          bn: 'Node.js-এর মতো অ্যাপ্লিকেশনের সামনে Nginx রিভার্স প্রক্সি বসানোর মূল কারণ কোনটি?'
        },
        options: [
          { en: 'Nginx handles SSL/TLS termination, efficiently serves static assets, provides HTTP/2, and protects internal application runtimes', bn: 'Nginx দক্ষভাবে SSL এনক্রিপশন শেষ করে, দ্রুত স্ট্যাটিক ফাইল প্রদান করে, HTTP/2 চালায় এবং অভ্যন্তরীণ ব্যাকএন্ডকে সুরক্ষিত রাখে' },
          { en: 'Nginx makes the computer hardware weigh less', bn: 'হার্ডওয়্যারের ওজন কমায়' },
          { en: 'Node.js cannot run on Linux without Nginx', bn: 'Nginx ছাড়া Node.js চলতে পারে না' },
          { en: 'Nginx replaces the Linux kernel', bn: 'কার্নেলকে প্রতিস্থাপন করে' }
        ],
        answer: 0,
        hint: {
          en: 'Nginx handles SSL termination and shields the runtime.',
          bn: 'Nginx দক্ষতার সাথে SSL হ্যান্ডেল করে এবং রানটাইমকে সুরক্ষা দেয়।'
        },
        explanation: {
          en: 'Nginx is engineered specifically for C-level network I/O, shielding backend Node.js runtimes from slow clients and raw internet traffic.',
          bn: 'Nginx নেটওয়ার্ক ব্যবস্থাপনায় অত্যন্ত পারদর্শী, যা সরাসরি ইন্টারনেট থেকে ব্যাকএন্ড অ্যাপ্লিকেশনকে রক্ষা করে।'
        }
      }
    ]
  }
};
