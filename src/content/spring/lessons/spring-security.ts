import type { Lesson } from '../../../lib/types';

export const SpringSecurityLesson: Lesson = {
  slug: 'spring-security',
  tech: 'spring',
  title: {
    en: 'Spring Security, JWT & Filter Chains',
    bn: 'স্প্রিং সিকিউরিটি, JWT এবং ফিল্টার চেইন'
  },
  summary: {
    en: 'Protect enterprise microservices with Spring Security: configure the modern SecurityFilterChain bean without deprecated adapters, execute stateless JWT authentication, securely hash credentials using BCrypt, and enforce role-based authorization with @PreAuthorize annotations.',
    bn: 'স্প্রিং সিকিউরিটি দিয়ে এন্টারপ্রাইজ মাইক্রোসার্ভিস সুরক্ষিত করুন: আধুনিক SecurityFilterChain বিন কনফিগারেশন, স্টেটলেস JWT অথেনটিকেশন, BCrypt দিয়ে পাসওয়ার্ড হ্যাশিং এবং @PreAuthorize অ্যানোটেশনের মাধ্যমে রোল-ভিত্তিক অনুমোদন প্রয়োগ।'
  },
  minutes: 30,
  blocks: [
    {
      type: 'heading',
      id: 'securityfilterchain-and-stateless-jwt-heading',
      text: {
        en: 'The Modern SecurityFilterChain and Stateless JWT Authentication',
        bn: 'আধুনিক SecurityFilterChain এবং স্টেটলেস JWT অথেনটিকেশন'
      }
    },
    {
      type: 'para',
      text: {
        en: 'In Spring Security 5.7 and Spring Boot 3, the legacy WebSecurityConfigurerAdapter was officially deprecated and removed. Modern Spring Security configures defenses component-style by declaring a "@Bean public SecurityFilterChain securityFilterChain(HttpSecurity http)". In cloud microservices, authentication is strictly stateless: server-side HTTP sessions and CSRF (Cross-Site Request Forgery) defenses are disabled, and incoming requests pass through a custom JwtAuthenticationFilter positioned before UsernamePasswordAuthenticationFilter. The filter inspects the "Authorization: Bearer <token>" header, validates cryptographic signatures, extracts user claims, and sets an Authentication token in the SecurityContextHolder.',
        bn: 'স্প্রিং সিকিউরিটি ৫.৭ এবং স্প্রিং বুট ৩ সংস্করণে পুরনো WebSecurityConfigurerAdapter সম্পূর্ণভাবে বাদ দেওয়া হয়েছে। আধুনিক স্প্রিং সিকিউরিটিতে একটি কম্পোনেন্ট-ভিত্তিক "@Bean public SecurityFilterChain securityFilterChain(HttpSecurity http)" ঘোষণার মাধ্যমে সমস্ত নিরাপত্তা কনফিগার করা হয়। ক্লাউড মাইক্রোসার্ভিসে অথেনটিকেশন সম্পূর্ণভাবে স্টেটলেস রাখা হয়: সার্ভার সেশন ও CSRF (Cross-Site Request Forgery) সুরক্ষা নিষ্ক্রিয় থাকে এবং সমস্ত রিকোয়েস্ট একটি কাস্টম JwtAuthenticationFilter এর মধ্য দিয়ে যায়। এই ফিল্টারটি "Authorization: Bearer <token>" হেডার থেকে টোকেন সংগ্রহ করে, ডিজিটাল স্বাক্ষর যাচাই করে, ইউজারের ভূমিকা বা রোল বের করে এবং SecurityContextHolder এ একটি Authentication অবজেক্ট সংরক্ষণ করে।'
      }
    },
    {
      type: 'diagram',
      caption: {
        en: 'Figure 1: Architectural lifecycle of the Spring Security filter chain: From bearer token extraction and JWT cryptographic verification to role-based endpoint authorization.',
        bn: 'চিত্র ১: স্প্রিং সিকিউরিটি ফিল্টার চেইনের পূর্ণাঙ্গ কার্যপ্রবাহ: বিয়ারার টোকেন সংগ্রহ ও ক্রিপ্টোগ্রাফিক যাচাই থেকে রোল-ভিত্তিক অনুমোদন প্রদান পর্যন্ত।'
      },
      svg: `<svg viewBox="0 0 840 330" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
  <rect width="840" height="330" rx="12" fill="#0f172a" />
  <text x="420" y="32" fill="#f8fafc" font-size="16" font-family="monospace" font-weight="bold" text-anchor="middle">SPRING SECURITY FILTER CHAIN &amp; STATELESS JWT PIPELINE</text>

  <!-- Step 1: HTTP Bearer Header -->
  <g transform="translate(35, 65)">
    <rect width="165" height="235" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2" />
    <rect width="165" height="30" rx="8" fill="#0284c7" />
    <text x="82" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">1. Client Request</text>

    <rect x="10" y="45" width="145" height="50" rx="5" fill="#0f172a" />
    <text x="15" y="68" fill="#38bdf8" font-size="9" font-family="monospace">Authorization: Bearer</text>
    <text x="15" y="85" fill="#38bdf8" font-size="9" font-family="monospace">eyJh... (JWT Token)</text>

    <rect x="10" y="105" width="145" height="40" rx="5" fill="#0f172a" />
    <text x="15" y="130" fill="#cbd5e1" font-size="9" font-family="monospace">Stateless Request</text>

    <text x="15" y="215" fill="#cbd5e1" font-size="10" font-family="sans-serif">Zero Server Session</text>
  </g>

  <!-- Step 2: Filter Chain Intercept -->
  <g transform="translate(230, 65)">
    <rect width="185" height="235" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2" />
    <rect width="185" height="30" rx="8" fill="#059669" />
    <text x="92" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">2. FilterChain Bean</text>

    <rect x="10" y="45" width="165" height="50" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="68" fill="#34d399" font-size="9" font-family="monospace">JwtAuthFilter</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">Extracts Claims</text>

    <rect x="10" y="105" width="165" height="40" rx="5" fill="#0f172a" stroke="#10b981" />
    <text x="15" y="130" fill="#34d399" font-size="8" font-family="monospace">401 If Signature Bad</text>

    <text x="15" y="215" fill="#34d399" font-size="10" font-family="sans-serif">Authentication Gate</text>
  </g>

  <!-- Step 3: SecurityContextHolder -->
  <g transform="translate(445, 65)">
    <rect width="175" height="235" rx="8" fill="#1e293b" stroke="#f59e0b" stroke-width="2" />
    <rect width="175" height="30" rx="8" fill="#d97706" />
    <text x="87" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">3. SecurityContext</text>

    <rect x="10" y="45" width="155" height="50" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="68" fill="#fbbf24" font-size="9" font-family="monospace">SecurityContextHolder</text>
    <text x="15" y="85" fill="#cbd5e1" font-size="8" font-family="monospace">setAuthentication(tok)</text>

    <rect x="10" y="105" width="155" height="40" rx="5" fill="#0f172a" stroke="#f59e0b" />
    <text x="15" y="130" fill="#fbbf24" font-size="9" font-family="monospace">User + Roles Loaded</text>

    <text x="15" y="215" fill="#fbbf24" font-size="10" font-family="sans-serif">ThreadLocal Context</text>
  </g>

  <!-- Step 4: Authorization Access -->
  <g transform="translate(650, 65)">
    <rect width="155" height="235" rx="8" fill="#1e293b" stroke="#a855f7" stroke-width="2" />
    <rect width="155" height="30" rx="8" fill="#7e22ce" />
    <text x="77" y="20" fill="#ffffff" font-size="11" font-family="sans-serif" font-weight="bold" text-anchor="middle">4. Authorization</text>

    <rect x="10" y="45" width="135" height="50" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="68" fill="#c084fc" font-size="9" font-family="monospace">@PreAuthorize</text>
    <text x="15" y="85" fill="#34d399" font-size="8" font-family="monospace">hasRole('ADMIN')</text>

    <rect x="10" y="105" width="135" height="40" rx="5" fill="#0f172a" stroke="#a855f7" />
    <text x="15" y="130" fill="#c084fc" font-size="9" font-family="monospace">403 Forbidden Guard</text>

    <text x="15" y="215" fill="#c084fc" font-size="10" font-family="sans-serif">Role-Based Access</text>
  </g>
</svg>`
    },
    {
      type: 'heading',
      id: 'bcrypt-and-method-security-heading',
      text: {
        en: 'BCrypt Password Hashing and Method Security with @PreAuthorize',
        bn: 'BCrypt পাসওয়ার্ড হ্যাশিং এবং @PreAuthorize দিয়ে মেথড সিকিউরিটি'
      }
    },
    {
      type: 'para',
      text: {
        en: 'Storing plaintext or simple MD5 passwords violates enterprise security compliance. Spring Security standardizes on BCryptPasswordEncoder, which incorporates a random 16-byte salt and an adaptive work factor (defaulting to 10 rounds of key expansion). This computational hardness defeats rainbow table attacks and brute force cracking. Furthermore, enterprise architectures protect critical operations using method-level security. Enabling "@EnableMethodSecurity" activates SpEL expressions such as "@PreAuthorize(\'hasRole(\\"ADMIN\\")\')". If a caller has valid authentication but lacks the necessary role, Spring halts execution and returns an HTTP 403 Forbidden status code.',
        bn: 'সাধারণ প্লেইনটেক্সট বা পুরনো MD5 দিয়ে পাসওয়ার্ড সংরক্ষণ করা এন্টারপ্রাইজ নিরাপত্তা নীতিমালার চরম লঙ্ঘন। স্প্রিং সিকিউরিটি এর জন্য BCryptPasswordEncoder ব্যবহারকে প্রমিত করেছে, যা একটি ১৬-বাইটের র্যান্ডম সল্ট এবং অ্যাডাপটিভ ওয়ার্ক ফ্যাক্টর (ডিফল্টভাবে ১০ রাউন্ড) যুক্ত করে। এই জটিল হিসাব রেইনবো টেবিল বা ব্রুট-ফোর্স আক্রমণ সম্পূর্ণ ব্যর্থ করে দেয়। তাছাড়া স্পর্শকাতর ব্যবসায়িক কাজগুলোকে রক্ষা করতে মেথড-লেভেল সিকিউরিটি প্রয়োগ করা হয়। "@EnableMethodSecurity" সক্রিয় করার মাধ্যমে মেথডের ওপর "@PreAuthorize(\'hasRole(\\"ADMIN\\")\')" লেখা যায়। কলারের লগইন তথ্য সঠিক হলেও যদি কাঙ্ক্ষিত রোল বা অনুমতি না থাকে, তবে স্প্রিং অবিলম্বে মেথড চালানো আটকে দিয়ে HTTP 403 Forbidden স্ট্যাটাস কোড প্রদান করে।'
      }
    },
    {
      type: 'code',
      lang: 'typescript',
      caption: {
        en: 'TypeScript simulation of Spring Security filter chain pipeline, stateless JWT bearer token authentication, and role-based authorization guards.',
        bn: 'স্প্রিং সিকিউরিটি ফিল্টার চেইন, স্টেটলেস JWT অথেনটিকেশন এবং রোল-ভিত্তিক অনুমোদনের TypeScript রূপায়ণ।'
      },
      code: `// Simulation of Spring Security Filter Chain & Role-Based Authorization

export interface UserPrincipal {
  username: string;
  roles: string[];
}

export class SecurityContextSimulator {
  private static currentUser: UserPrincipal | null = null;

  public static setAuthentication(user: UserPrincipal | null): void {
    this.currentUser = user;
  }

  public static getAuthentication(): UserPrincipal | null {
    return this.currentUser;
  }
}

// Simulating JWT Authentication Filter
export class JwtFilterSimulator {
  public doFilter(authHeader: string | undefined): { authenticated: boolean; error?: string } {
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return { authenticated: false, error: 'Missing or malformed Authorization header' };
    }

    const token = authHeader.substring(7);
    // Simulating token signature verification & role extraction
    if (token === 'valid_admin_token') {
      SecurityContextSimulator.setAuthentication({ username: 'superadmin', roles: ['ROLE_ADMIN'] });
      return { authenticated: true };
    } else if (token === 'valid_user_token') {
      SecurityContextSimulator.setAuthentication({ username: 'john_doe', roles: ['ROLE_USER'] });
      return { authenticated: true };
    }

    return { authenticated: false, error: 'Invalid or expired JWT signature' };
  }
}

// Simulating @PreAuthorize("hasRole('ADMIN')") Endpoint Guard
export function deleteCustomerAccount(accountId: number): { status: number; message: string } {
  const user = SecurityContextSimulator.getAuthentication();
  if (!user) {
    return { status: 401, message: 'HTTP 401 Unauthorized: please log in' };
  }

  if (!user.roles.includes('ROLE_ADMIN')) {
    return { status: 403, message: 'HTTP 403 Forbidden: requires ROLE_ADMIN' };
  }

  return { status: 200, message: 'Account #' + accountId + ' deleted successfully' };
}

// Execution demonstration
const filter = new JwtFilterSimulator();

// Case 1: Client with User token attempts admin endpoint
filter.doFilter('Bearer valid_user_token');
const userAttempt = deleteCustomerAccount(501);
console.log('User Role Access Outcome:', userAttempt.status); // 403 (Forbidden)

// Case 2: Client with Admin token attempts admin endpoint
filter.doFilter('Bearer valid_admin_token');
const adminAttempt = deleteCustomerAccount(501);
console.log('Admin Role Access Outcome:', adminAttempt.status); // 200 (Success)`
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'SecurityFilterChain',
          def: {
            en: 'Spring bean defining the pipeline of security filters processing incoming HTTP requests in modern Spring Boot 3.',
            bn: 'স্প্রিং বিন যা আধুনিক স্প্রিং বুট ৩ এ সমস্ত ইনকামিং এইচটিটিপি রিকোয়েস্ট যাচাইয়ের ফিল্টার পাইপলাইন নির্ধারণ করে।'
          }
        },
        {
          term: 'JWT (JSON Web Token)',
          def: {
            en: 'Compact, URL-safe cryptographic token used to verify identity in stateless microservice architectures.',
            bn: 'ক্রিপ্টোগ্রাফিকভাবে স্বাক্ষরিত টোকেন যা স্টেটলেস মাইক্রোসার্ভিসে কোনো সার্ভার সেশন ছাড়াই পরিচয় নিশ্চিত করে।'
          }
        },
        {
          term: 'BCryptPasswordEncoder',
          def: {
            en: 'Adaptive, salted password hashing implementation standard in enterprise Spring applications.',
            bn: 'অ্যাডাপটিভ সল্টযুক্ত পাসওয়ার্ড হ্যাশিং মেকানিজম যা এন্টারপ্রাইজ সিস্টেমে পাসওয়ার্ডের সর্বোচ্চ নিরাপত্তা দেয়।'
          }
        },
        {
          term: '@PreAuthorize',
          def: {
            en: 'Method-level authorization annotation evaluating Spring Expression Language (SpEL) before executing methods.',
            bn: 'মেথড-লেভেল অ্যানোটেশন যা মেথড চলার আগেই ইউজারের নির্দিষ্ট রোল বা অনুমতি আছে কিনা তা স্প্রিং SpEL দিয়ে যাচাই করে।'
          }
        }
      ]
    }
  ],
  exercises: [
    {
      id: 'spring-boot-3-securityfilterchain-bean-ex1',
      kind: 'mcq',
      topic: 'securityfilterchain-bean-configuration',
      question: {
        en: 'How do developers configure Spring Security in modern Spring Boot 3 without WebSecurityConfigurerAdapter?',
        bn: 'WebSecurityConfigurerAdapter ছাড়া আধুনিক স্প্রিং বুট ৩ এ কীভাবে স্প্রিং সিকিউরিটি কনফিগার করা হয়?'
      },
      options: [
        {
          en: 'By declaring a "@Bean public SecurityFilterChain filterChain(HttpSecurity http)" method that returns the configured filter chain',
          bn: 'একটি "@Bean public SecurityFilterChain filterChain(HttpSecurity http)" মেথড ঘোষণা করে যা কনফিগার করা ফিল্টার চেইন ফেরত দেয়'
        },
        {
          en: 'By creating a text file named security.txt in the root directory',
          bn: 'রুট ডিরেক্টরিতে security.txt নামের একটি সাধারণ টেক্সট ফাইল তৈরি করে'
        },
        {
          en: 'By disabling the Java Virtual Machine security manager',
          bn: 'জাভা ভার্চুয়াল মেশিন সিকিউরিটি ম্যানেজার বন্ধ করে দিয়ে'
        },
        {
          en: 'Spring Boot 3 does not support Spring Security',
          bn: 'স্প্রিং বুট ৩ স্প্রিং সিকিউরিটি সমর্থন করে না'
        }
      ],
      answer: 0,
      hint: {
        en: 'Declare a SecurityFilterChain bean accepting HttpSecurity.',
        bn: 'HttpSecurity গ্রহণকারী একটি SecurityFilterChain বিন ঘোষণা করাই আধুনিক নিয়ম।'
      },
      explanation: {
        en: 'Spring Security 5.7+ replaced adapter inheritance with component-based SecurityFilterChain bean declarations.',
        bn: 'উত্তরাধিকার পদ্ধতির বদলে সরাসরি বিন হিসেবে ফিল্টার চেইন ঘোষণা করাই স্প্রিং-এর আধুনিক রীতি।'
      }
    },
    {
      id: 'bcrypt-salt-rounds-adaptive-hardness-ex2',
      kind: 'mcq',
      topic: 'bcrypt-password-encoder-strength',
      question: {
        en: 'What fundamental security advantage does BCryptPasswordEncoder provide over older hashing algorithms like SHA-256 or MD5?',
        bn: 'SHA-256 বা MD5 এর মতো পুরনো অ্যালগরিদমের তুলনায় BCryptPasswordEncoder কোন মৌলিক নিরাপত্তা সুবিধা দেয়?'
      },
      options: [
        {
          en: 'It incorporates a random salt and slow key expansion rounds (work factor) to computationally thwart rainbow table and GPU brute force attacks',
          bn: 'এটি একটি র্যান্ডম সল্ট এবং ধীরগতির কি-এক্সপ্যানশন রাউন্ড যুক্ত করে, ফলে রেইনবো টেবিল এবং জিপিইউ ব্রুট-ফোর্স আক্রমণ পুরোপুরি ব্যর্থ হয়'
        },
        {
          en: 'It encrypts passwords into 1 single integer',
          bn: 'এটি পাসওয়ার্ডকে ১ টি একক পূর্ণসংখ্যায় এনক্রিপ্ট করে'
        },
        {
          en: 'BCrypt allows passwords to be read in plain text by administrators',
          bn: 'BCrypt অ্যাডমিনদের প্লেইন টেক্সটে পাসওয়ার্ড পড়ার সুযোগ দেয়'
        },
        {
          en: 'It requires zero CPU power to compute',
          bn: 'এটি গণনা করতে কোনো সিপিইউ মেমোরির দরকার হয় না'
        }
      ],
      answer: 0,
      hint: {
        en: 'BCrypt is intentionally slow and salted to defeat hardware-accelerated cracking.',
        bn: 'BCrypt ইচ্ছাকৃতভাবে ধীরগতির এবং সল্টযুক্ত যাতে কোনো প্রসেসর দ্রুত পাসওয়ার্ড ভাঙতে না পারে।'
      },
      explanation: {
        en: 'Fast hashes like SHA-256 are easily cracked on modern GPUs. BCrypt uses adaptive work factors and salt to resist hardware attacks.',
        bn: 'দ্রুতগতির হ্যাশ খুব সহজে ভেঙে ফেলা যায়; তাই নিরাপত্তা বাড়াতে ধীরগতির BCrypt আদর্শ।'
      }
    },
    {
      id: 'unauthorized-vs-forbidden-http-status-ex3',
      kind: 'mcq',
      topic: 'http-status-401-vs-403',
      question: {
        en: 'What is the precise distinction between HTTP 401 Unauthorized and HTTP 403 Forbidden in Spring Security?',
        bn: 'স্প্রিং সিকিউরিটিতে HTTP 401 Unauthorized এবং HTTP 403 Forbidden এর মধ্যকার সুনির্দিষ্ট পার্থক্য কী?'
      },
      options: [
        {
          en: '401 Unauthorized means the user is not authenticated (missing or invalid credentials), while 403 Forbidden means the user is authenticated but lacks required authority/roles',
          bn: '৪০১ Unauthorized মানে হলো ব্যবহারকারী লগইন করেননি (অথেনটিকেশন মিসিং বা ভুল), আর ৪০৩ Forbidden মানে হলো ব্যবহারকারী লগইন করেছেন কিন্তু তার প্রয়োজনীয় রোল বা অনুমতি নেই'
        },
        {
          en: '401 means the server is down and 403 means the database is empty',
          bn: '৪০১ মানে সার্ভার বন্ধ এবং ৪০৩ মানে ডেটাবেস খালি'
        },
        {
          en: '401 is for mobile phones and 403 is for desktop computers',
          bn: '৪০১ মোবাইলের জন্য এবং ৪০৩ কম্পিউটারের জন্য'
        },
        {
          en: 'Both status codes represent identical scenarios in HTTP',
          bn: 'উভয় কোড এইচটিটিপিতে অবিকল একই অর্থ বহন করে'
        }
      ],
      answer: 0,
      hint: {
        en: '401 = Who are you? (Authentication). 403 = You cannot enter here! (Authorization).',
        bn: '৪০১ = আপনি কে? (লগইন প্রয়োজন)। ৪০৩ = আপনার এখানে ঢোকার অনুমতি নেই! (অনুমোদন সমস্যা)।'
      },
      explanation: {
        en: 'Authentication failures trigger 401 Unauthorized. Access control authorization failures trigger 403 Forbidden.',
        bn: 'লগইন ব্যর্থতায় ৪০১ এবং লগইন থাকা সত্ত্বেও বিশেষ অধিকার না থাকলে ৪০৩ রেসপন্স পাঠানো হয়।'
      }
    },
    {
      id: 'method-security-enable-annotation-ex4',
      kind: 'mcq',
      topic: 'enablemethodsecurity-annotation',
      question: {
        en: 'Which configuration annotation must be placed on a Spring configuration class to enable @PreAuthorize and @Secured method-level security?',
        bn: '@PreAuthorize এবং @Secured মেথড-লেভেল সিকিউরিটি চালু করতে স্প্রিং কনফিগারেশন ক্লাসে কোন অ্যানোটেশনটি ব্যবহার করতে হয়?'
      },
      options: [
        { en: '@EnableMethodSecurity', bn: '@EnableMethodSecurity' },
        { en: '@EnableWebSecurity only', bn: 'শুধুমাত্র @EnableWebSecurity' },
        { en: '@SecurityEnabled', bn: '@SecurityEnabled' },
        { en: '@ProtectAllMethods', bn: '@ProtectAllMethods' }
      ],
      answer: 0,
      hint: {
        en: '@EnableMethodSecurity is the modern standard replacing @EnableGlobalMethodSecurity.',
        bn: '@EnableMethodSecurity হলো আধুনিক স্প্রিং-এ মেথড সিকিউরিটি সক্রিয় করার অ্যানোটেশন।'
      },
      explanation: {
        en: '@EnableMethodSecurity enables Spring Security\'s method interceptor, activating @PreAuthorize and @PostAuthorize annotations.',
        bn: 'এই অ্যানোটেশনটি মেথড ইন্টারসেপ্টর সক্রিয় করে কোডের ভেতরে সূক্ষ্ম রোল যাচাইয়ের সুবিধা দেয়।'
      }
    }
  ],
  quiz: {
    id: 'quiz-spring-security',
    title: {
      en: 'Spring Security & JWT Authentication Mastery Quiz',
      bn: 'স্প্রিং সিকিউরিটি এবং JWT অথেনটিকেশন কুইজ'
    },
    questions: [
      {
        id: 'quiz-csrf-disable-stateless-jwt',
        kind: 'mcq',
        topic: 'csrf-disable-in-stateless-apis',
        question: {
          en: 'Why is disabling CSRF (Cross-Site Request Forgery) protection safe and recommended in stateless REST APIs using JWT Bearer authentication?',
          bn: 'JWT Bearer টোকেন ব্যবহারকারী স্টেটলেস REST এপিআই-তে CSRF সুরক্ষা নিষ্ক্রিয় করা কেন সম্পূর্ণ নিরাপদ এবং সুপারিশকৃত?'
        },
        options: [
          {
            en: 'Because stateless APIs do not rely on automatic browser cookies for authentication; browsers do not automatically send JWT headers on cross-site requests, making CSRF exploits impossible',
            bn: 'কারণ স্টেটলেস এপিআই স্বয়ংক্রিয় ব্রাউজার কুকির ওপর নির্ভর করে না; ব্রাউজার নিজে থেকে অন্য সাইটের রিকোয়েস্টে JWT হেডার পাঠায় না, ফলে CSRF আক্রমণ ঘটা অসম্ভব'
          },
          {
            en: 'Because CSRF protection slows down the CPU by 80 percent',
            bn: 'কারণ CSRF সুরক্ষা সিপিইউ গতি ৮০ শতাংশ কমিয়ে দেয়'
          },
          {
            en: 'Because modern web browsers blocked CSRF attacks in 1999',
            bn: 'কারণ ১৯৯৯ সালে ব্রাউজারগুলো CSRF আক্রমণ বন্ধ করে দিয়েছে'
          },
          {
            en: 'Disabling CSRF is always dangerous and never permitted in Spring',
            bn: 'CSRF বন্ধ করা সর্বদা ঝুঁকিপূর্ণ এবং স্প্রিং-এ কখনোই অনুমতি দেওয়া হয় না'
          }
        ],
        answer: 0,
        hint: {
          en: 'CSRF attacks exploit automatic browser cookie transmission. Custom Authorization headers are immune.',
          bn: 'CSRF আক্রমণ ব্রাউজারের স্বয়ংক্রিয় কুকি পাঠানোকে অপব্যবহার করে; কাস্টম হেডারের ক্ষেত্রে এটি অসম্ভব।'
        },
        explanation: {
          en: 'CSRF vulnerabilities exist only when authentication tokens (like JSESSIONID) are sent automatically by browsers via cookies. Explicit Bearer tokens are immune.',
          bn: 'যেহেতু বিয়ারার টোকেন ব্রাউজার নিজে নিজে পাঠাতে পারে না, তাই স্টেটলেস এপিআই-তে CSRF নিষ্ক্রিয় রাখা আদর্শ।'
        }
      },
      {
        id: 'quiz-securitycontextholder-threadlocal-strategy',
        kind: 'mcq',
        topic: 'securitycontextholder-threadlocal-strategy',
        question: {
          en: 'What default storage strategy does SecurityContextHolder use to associate authenticated user identity with the current executing thread?',
          bn: 'বর্তমান এক্সিকিউশন থ্রেডের সাথে ব্যবহারকারীর পরিচয় যুক্ত রাখতে SecurityContextHolder ডিফল্টভাবে কোন স্টোরেজ কৌশলটি ব্যবহার করে?'
        },
        options: [
          {
            en: 'MODE_THREADLOCAL (stores the SecurityContext in a ThreadLocal variable tied to the current thread)',
            bn: 'MODE_THREADLOCAL (বর্তমান থ্রেডের সাথে সংযুক্ত একটি ThreadLocal ভেরিয়েবলে সিকিউরিটি কনটেক্সট সংরক্ষণ করে)'
          },
          {
            en: 'MODE_GLOBAL (one single shared user for the entire universe)',
            bn: 'MODE_GLOBAL (পুরো ইউনিভার্সের জন্য একটি একক শেয়ার্ড ইউজার)'
          },
          {
            en: 'MODE_HARDDRIVE (saves the user to disk on every millisecond)',
            bn: 'MODE_HARDDRIVE (প্রতি মিলি-সেকেন্ডে ডিস্কে ইউজার সেভ করে)'
          },
          {
            en: 'MODE_STATIC_FILE',
            bn: 'MODE_STATIC_FILE'
          }
        ],
        answer: 0,
        hint: {
          en: 'SecurityContextHolder defaults to ThreadLocal storage per request thread.',
          bn: 'SecurityContextHolder প্রতি রিকোয়েস্ট থ্রেডের জন্য ThreadLocal মেমোরি ব্যবহার করে।'
        },
        explanation: {
          en: 'By default, SecurityContextHolder uses ThreadLocal, ensuring each worker thread isolatedly holds its own authentication context.',
          bn: 'ThreadLocal ব্যবহারের কারণে প্রতিটি স্বাধীন থ্রেড নিজস্ব সিকিউরিটি কনটেক্সট নিরাপদে আলাদা রাখতে পারে।'
        }
      },
      {
        id: 'quiz-jwt-refresh-token-rotation',
        kind: 'mcq',
        topic: 'jwt-refresh-token-rotation-architecture',
        question: {
          en: 'In an enterprise JWT architecture, what is the purpose of using short-lived Access Tokens (e.g. 15 minutes) paired with Refresh Token Rotation?',
          bn: 'এন্টারপ্রাইজ JWT আর্কিটেকচারে রিফ্রেশ টোকেন রোটেশনের সাথে স্বল্পস্থায়ী অ্যাক্সেস টোকেন (যেমন ১৫ মিনিট) ব্যবহারের উদ্দেশ্য কী?'
        },
        options: [
          {
            en: 'To minimize the exposure window if an access token is intercepted, while refresh token rotation detects token theft and invalidates compromised sessions immediately',
            bn: 'অ্যাক্সেস টোকেন চুরি হলেও ক্ষয়ক্ষতির সময়সীমা কমিয়ে আনা, এবং রিফ্রেশ টোকেন রোটেশনের মাধ্যমে টোকেন চুরি শনাক্ত করে আপস করা সেশন সাথে সাথে বাতিল করা'
          },
          {
            en: 'To double the amount of RAM on the server',
            bn: 'সার্ভারে র্যামের পরিমাণ দ্বিগুণ করার জন্য'
          },
          {
            en: 'Short-lived tokens make JSON strings 50 percent shorter',
            bn: 'স্বল্পস্থায়ী টোকেন জেসন স্ট্রিংকে ৫০ শতাংশ ছোট করে দেয়'
          },
          {
            en: 'Refresh tokens are required by the HTTP 1.1 specification',
            bn: 'এইচটিটিপি ১.১ স্পেসিফিকেশন অনুযায়ী রিফ্রেশ টোকেন বাধ্যতামূলক'
          }
        ],
        answer: 0,
        hint: {
          en: 'Short access token lifespans limit unauthorized use if stolen.',
          bn: 'স্বল্পস্থায়ী টোকেন চুরি হলেও হ্যাকার সামান্য সময় ছাড়া আর ক্ষতি করতে পারে না।'
        },
        explanation: {
          en: 'Short-lived access tokens limit blast radius. Rotating refresh tokens invalidates previous refresh tokens, exposing breach attempts.',
          bn: 'টোকেন রোটেশন সিস্টেমকে নিরাপদ রাখে এবং পুরোনো টোকেন পুনরায় ব্যবহারের চেষ্টা শনাক্ত করে নিরাপত্তা জোরদার করে।'
        }
      },
      {
        id: 'quiz-hasrole-vs-hasauthority-spring-security',
        kind: 'mcq',
        topic: 'hasrole-vs-hasauthority-prefix-rule',
        question: {
          en: 'What automatic prefix convention does Spring Security enforce when using "hasRole(\'ADMIN\')" versus "hasAuthority(\'ADMIN\')"?',
          bn: '"hasRole(\'ADMIN\')" এবং "hasAuthority(\'ADMIN\')" ব্যবহারের সময় স্প্রিং সিকিউরিটি কোন স্বয়ংক্রিয় প্রিফিক্স নিয়মটি প্রয়োগ করে?'
        },
        options: [
          {
            en: '"hasRole(\'ADMIN\')" automatically prepends the "ROLE_" prefix (checking for "ROLE_ADMIN"), while "hasAuthority(\'ADMIN\')" checks for the exact raw string "ADMIN"',
            bn: '"hasRole(\'ADMIN\')" স্বয়ংক্রিয়ভাবে "ROLE_" প্রিফিক্স যুক্ত করে (অর্থাৎ "ROLE_ADMIN" আছে কি না দেখে), আর "hasAuthority(\'ADMIN\')" অবিকল কাঁচা স্ট্রিং "ADMIN" যাচাই করে'
          },
          {
            en: 'hasRole only works on Tuesdays',
            bn: 'hasRole শুধুমাত্র মঙ্গলবারে কাজ করে'
          },
          {
            en: 'hasAuthority was removed from Spring Security in 2020',
            bn: '২০২০ সালে স্প্রিং সিকিউরিটি থেকে hasAuthority মুছে ফেলা হয়'
          },
          {
            en: 'There is zero difference between hasRole and hasAuthority',
            bn: 'hasRole এবং hasAuthority এর মাঝে কোনো পার্থক্য নেই'
          }
        ],
        answer: 0,
        hint: {
          en: 'hasRole automatically prepends the "ROLE_" prefix.',
          bn: 'hasRole মেথডটি নিজে থেকেই সামনে "ROLE_" প্রিফিক্স জুড়ে নেয়।'
        },
        explanation: {
          en: 'Spring Security reserves hasRole() for authorities starting with "ROLE_". hasAuthority() compares the raw granted authority string directly.',
          bn: 'রোল ভিত্তিক চেক করার সময় স্প্রিং নিজে থেকেই "ROLE_" যোগ করে, কিন্তু অথরিটিতে হুবহু স্ট্রিং মেলানো হয়।'
        }
      }
    ]
  },
  nextLesson: {
    slug: 'spring-boot-and-the-actuator',
    title: {
      en: 'Spring Boot, Auto-Configuration & Actuator Metrics',
      bn: 'স্প্রিং বুট, অটো-কনফিগারেশন এবং অ্যাকচুয়েটর মেট্রিক্স'
    }
  }
};
