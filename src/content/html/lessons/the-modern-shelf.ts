import type { Lesson } from '../../../lib/types';

/**
 * Ten complete points consolidating the entire w3schools Graphics and Web APIs curriculum:
 * 1. HTML Canvas: <canvas>, getContext('2d'), and drawing methods
 * 2. HTML SVG: scalable vector graphics, DOM nodes, and CSS styling
 * 3. Canvas vs SVG: immediate-mode bitmaps vs retained-mode elements
 * 4. Geolocation API: navigator.geolocation, permissions, and coordinates
 * 5. Drag and Drop API: draggable, dataTransfer, dragover, and drop
 * 6. Web Storage: localStorage persistent key-value store (5-10MB)
 * 7. Web Storage: sessionStorage tab-scoped temporary storage
 * 8. Web Workers: multi-threading with new Worker() and postMessage
 * 9. Server-Sent Events (SSE): EventSource streaming over HTTP
 * 10. Feature Detection: navigator checks and progressive enhancement
 */
export const modernShelfLesson: Lesson = {
  slug: 'html-modern-apis',
  tech: 'html',
  title: {
    en: 'Modern HTML APIs and graphics, point by point: canvas, svg, storage, workers, sse',
    bn: 'আধুনিক এইচটিএমএল এপিআই ও গ্রাফিক্স, পয়েন্ট ধরে: ক্যানভাস, এসভিজি, স্টোরেজ, ওয়ার্কার ও এসএসই'
  },
  summary: {
    en: 'Transform static web documents into high-performance web applications. Master immediate-mode graphics with Canvas and vector objects with SVG, store offline data with localStorage and sessionStorage, access user location with Geolocation, implement native drag-and-drop, spawn background Web Workers, and stream real-time updates via Server-Sent Events.',
    bn: 'স্থির ওয়েব ডকুমেন্টকে উচ্চগতির ওয়েব অ্যাপ্লিকেশনে রূপান্তর করুন। ক্যানভাস দিয়ে পিক্সেল ড্রয়িং ও এসভিজি দিয়ে ভেক্টর গ্রাফিক্স, লোকালস্টোরেজ ও সেশনস্টোরেজ দিয়ে অফলাইন ডেটা সংরক্ষণ, জিওলোকেশন, ড্র্যাগ-অ্যান্ড-ড্রপ, ব্যাকগ্রাউন্ড ওয়েব ওয়ার্কার এবং সার্ভার-সেন্ট ইভেন্টসের বাস্তব ব্যবহার শিখুন।'
  },
  minutes: 26,
  blocks: [
    { type: 'heading', id: 'what', text: { en: 'The client capability shelf of modern browsers', bn: 'আধুনিক ব্রাউজারের ক্লায়েন্ট এপিআই ও গ্রাফিক্স ভাণ্ডার' } },
    {
      type: 'para',
      text: {
        en: 'In this lesson we cover all ten HTML graphics and web API topics from w3schools. Each point provides concrete code snippets with verified comments and rendered outputs.',
        bn: 'এই পাঠে আমরা ডাব্লু থ্রি স্কুলের গ্রাফিক্স ও ওয়েব এপিআই-এর দশটি বিষয় বিস্তারিতভাবে শিখব। প্রতিটিতে রেন্ডার করা আউটপুট ও কমেন্টসহ রানযোগ্য কোড রয়েছে।'
      }
    },
    {
      type: 'keyterms',
      items: [
        { term: 'immediate mode', def: { en: 'a rendering system where pixels are drawn directly without retaining DOM element memory', bn: 'যে সিস্টেমে পিক্সেল সরাসরি আঁকা হয় এবং ব্রাউজার কোনো ডম নোড মনে রাখে না' } },
        { term: 'retained mode', def: { en: 'a graphics system where shapes persist as inspectable, stylable DOM element nodes', bn: 'যে সিস্টেমে গ্রাফিক্সের প্রতিটি আকৃতি ডম নোড হিসেবে জীবিত ও স্টাইলযোগ্য থাকে' } },
        { term: 'same origin policy', def: { en: 'the browser security boundary restricting storage access to matching protocol, host, and port', bn: 'প্রোটোকল, হোস্ট ও পোর্ট হুবহু এক না হলে স্টোরেজে প্রবেশাধিকার আটকানোর ব্রাউজার নীতি' } },
        { term: 'web worker', def: { en: 'a background JavaScript thread that executes computationally heavy scripts off the main UI thread', bn: 'মূল ইউআই থ্রেডকে মুক্ত রেখে ব্যাকগ্রাউন্ডে ভারী কাজ চালানোর জাভাস্ক্রিপ্ট থ্রেড' } }
      ]
    },

    { type: 'heading', id: 'p1', text: { en: '1. HTML Canvas: <canvas>, 2D context, and drawing', bn: '১. এইচটিএমএল ক্যানভাস: <canvas>, 2D কনটেক্সট ও অঙ্কন' } },
    {
      type: 'para',
      text: {
        en: 'The <canvas> element provides a blank bitmap drawing area. JavaScript accesses its 2D rendering context to draw shapes, lines, images, and text programmatically.',
        bn: '<canvas> উপাদান একটি ফাঁকা বিটম্যাপ ক্যানভাস দেয়। জাভাস্ক্রিপ্ট 2D রেন্ডারিং কনটেক্সটের মাধ্যমে কোড লিখে তাতে রেখা, বৃত্ত, ছবি ও টেক্সট আঁকে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'canvas-basic.html',
      code: `<canvas id="chartCanvas" width="300" height="150" style="border: 1px solid #ccc;"></canvas>

<script>
  const canvas = document.getElementById('chartCanvas');
  const ctx = canvas.getContext('2d');

  // Fill a blue rectangle: fillRect(x, y, width, height)
  ctx.fillStyle = '#2563eb';
  ctx.fillRect(20, 20, 100, 60);

  // Draw a red line
  ctx.beginPath();
  ctx.moveTo(140, 20);
  ctx.lineTo(240, 80);
  ctx.strokeStyle = '#dc2626';
  ctx.lineWidth = 3;
  ctx.stroke();
</script>
<!-- Canvas renders immediate-mode pixels; shapes do not exist as DOM elements -->`,
      caption: {
        en: 'Canvas is an immediate-mode bitmap surface: once drawn, pixels are burned into the grid and the browser forgets the original shapes.',
        bn: 'ক্যানভাসে একবার ছবি বা লাইন আঁকার সাথে সাথে তা পিক্সেলে রূপ নেয় এবং ব্রাউজার আকৃতিগুলোর কোনো পৃথক অস্তিত্ব মনে রাখে না।'
      }
    },

    { type: 'heading', id: 'p2', text: { en: '2. HTML SVG: scalable vector graphics as DOM nodes', bn: '২. এইচটিএমএল এসভিজি: ডম নোড হিসেবে স্কেলেবল ভেক্টর গ্রাফিক্স' } },
    {
      type: 'para',
      text: {
        en: 'Scalable Vector Graphics (SVG) represents shapes as XML elements inside the DOM tree. Because shapes are vectors, they scale infinitely without pixelation.',
        bn: 'স্কেলেবল ভেক্টর গ্রাফিক্স (এসভিজি) ডম ট্রির ভেতরে এক্সএমএল ট্যাগ হিসেবে আকৃতি প্রকাশ করে। এগুলো ভেক্টর হওয়ায় জুম করলেও পিক্সেলেশন হয় না।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'svg-basic.html',
      code: `<svg width="300" height="100" viewBox="0 0 300 100" style="border: 1px solid #ccc;">
  <!-- Accessible title announced by screen readers -->
  <title>Green status indicator circle and metric bar</title>

  <!-- Vector circle element -->
  <circle cx="50" cy="50" r="30" fill="#16a34a" stroke="#15803d" stroke-width="3" />

  <!-- Vector rectangle element -->
  <rect x="110" y="30" width="160" height="40" rx="6" fill="#3b82f6" />
</svg>
<!-- SVG shapes are live DOM nodes: inspectable and stylable via CSS -->`,
      caption: {
        en: 'Unlike Canvas, SVG shapes are actual elements in the DOM tree that can respond to CSS hover states and JavaScript click events.',
        bn: 'ক্যানভাসের মতো নয়, এসভিজি আকৃতিগুলো ডম ট্রির একেকটি নোড, যার ফলে এদের ওপর সিএসএস হোভার বা জাভাস্ক্রিপ্ট ক্লিক ইভেন্ট সরাসরি কাজ করে।'
      }
    },

    { type: 'heading', id: 'p3', text: { en: '3. Canvas vs SVG: choosing between pixels and vectors', bn: '৩. ক্যানভাস বনাম এসভিজি: পিক্সেল বনাম ভেক্টর নির্বাচন' } },
    {
      type: 'para',
      text: {
        en: 'Choose Canvas for high-frequency pixel manipulation, physics simulations, and video games. Choose SVG for UI icons, charts, maps, and responsive diagrams.',
        bn: 'ভিডিও গেম, ফটো এডিটিং ও দ্রুতগতির পিক্সেল প্রসেসিংয়ে ক্যানভাস বাছুন। ইউআই আইকন, ইন্টারঅ্যাক্টিভ চার্ট ও ম্যাপের জন্য এসভিজি নির্বাচন করুন।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'canvas-vs-svg.html',
      code: `<!-- Canvas: High performance for 10000 moving game particles -->
<canvas id="gameLoop" width="640" height="360"></canvas>

<!-- SVG: High precision for responsive scalable vector icons -->
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke-width="2"/>
</svg>`,
      caption: {
        en: 'SVG files scale smoothly to high-density Retina displays; Canvas requires manual devicePixelRatio scaling to prevent blurriness.',
        bn: 'এসভিজি রেটিনা ডিসপ্লেতে নিজে থেকেই নিখুঁতভাবে স্কেল হয়, যেখানে ক্যানভাসে ব্লার ঠেকাতে devicePixelRatio দিয়ে ম্যানুয়ালি হিসাব করতে হয়।'
      }
    },

    { type: 'heading', id: 'p4', text: { en: '4. Geolocation API: navigator.geolocation and permissions', bn: '৪. জিওলোকেশন এপিআই: navigator.geolocation ও পারমিশন' } },
    {
      type: 'para',
      text: {
        en: 'The Geolocation API allows web applications to access the physical coordinates of a device after explicit user permission on secure HTTPS origins.',
        bn: 'জিওলোকেশন এপিআই ব্যবহারকারীর অনুমতি নিয়ে ডিভাইসের অক্ষাংশ ও দ্রাঘিমাংশ প্রদান করে। এটি কেবল সুরক্ষিত HTTPS সাইটে কাজ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'geolocation.html',
      code: `<button type="button" onclick="findLocation()">Detect Coordinates</button>
<p id="geoOutput">Coordinates: unknown</p>

<script>
  function findLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;
          document.getElementById('geoOutput').textContent =
            'Coordinates: Lat ' + lat + ', Lon ' + lon;
        },
        (error) => {
          console.error('Location error code:', error.code, error.message);
        }
      );
    }
  }
</script>
<!-- Browser prompts user with permission dialog before revealing GPS coordinates -->`,
      caption: {
        en: 'Modern browsers block geolocation on unencrypted HTTP connections. Always test geolocation features under HTTPS or localhost.',
        bn: 'অসুরক্ষিত HTTP সাইটে ব্রাউজার জিওলোকেশন বন্ধ করে রাখে। তাই সর্বদা HTTPS অথবা localhost-এ এটি পরীক্ষা করতে হয়।'
      }
    },

    { type: 'heading', id: 'p5', text: { en: '5. HTML Drag and Drop API: draggable and dataTransfer', bn: '৫. এইচটিএমএল ড্র্যাগ অ্যান্ড ড্রপ এপিআই: draggable ও dataTransfer' } },
    {
      type: 'para',
      text: {
        en: 'The native Drag and Drop API enables moving elements and desktop files into web pages using draggable="true", dragover, and drop event handlers.',
        bn: 'এইচটিএমএল৫ ড্র্যাগ অ্যান্ড ড্রপ এপিআই draggable="true", dragover ও drop ইভেন্টের মাধ্যমে ফাইল ও উপাদান টেনে এনে ফেলার সুবিধা দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'drag-and-drop.html',
      code: `<div id="dragItem" draggable="true" style="padding: 8px; background: #93c5fd; width: 120px;">
  Drag Me
</div>

<div id="dropZone" style="width: 200px; height: 100px; border: 2px dashed #3b82f6; margin-top: 10px;">
  Drop Zone
</div>

<script>
  const item = document.getElementById('dragItem');
  const zone = document.getElementById('dropZone');

  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });

  zone.addEventListener('dragover', (e) => {
    e.preventDefault(); // Required: allows drop action to execute
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('text/plain');
    zone.appendChild(document.getElementById(id));
  });
</script>`,
      caption: {
        en: 'Calling e.preventDefault() inside the dragover event handler is strictly mandatory; otherwise, the browser cancels the drop event.',
        bn: 'dragover ইভেন্টের ভেতরে e.preventDefault() ডাকা বাধ্যতামূলক; এটি না দিলে ব্রাউজার ড্রপ ইভেন্ট বাতিল করে দেয়।'
      }
    },

    { type: 'heading', id: 'p6', text: { en: '6. Web Storage: localStorage persistent key-value store', bn: '৬. ওয়েব স্টোরেজ: localStorage স্থায়ী কি-ভ্যালু স্টোর' } },
    {
      type: 'para',
      text: {
        en: 'localStorage stores string key-value pairs persistently with no expiration date. Data survives browser restarts and has a capacity of 5 to 10 MB per origin.',
        bn: 'localStorage ব্রাউজার বন্ধ করলেও তথ্য অক্ষত রাখে। এতে কোনো মেয়াদোত্তীর্ণের তারিখ থাকে না এবং ডোমেনপ্রতি ৫ থেকে ১০ মেগাবাইট পর্যন্ত ডেটা রাখা যায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'local-storage.html',
      code: `<script>
  // 1. Store a key-value string
  localStorage.setItem('theme', 'dark');

  // 2. Retrieve the stored value
  const activeTheme = localStorage.getItem('theme');
  console.log('Saved theme:', activeTheme);    // Saved theme: dark

  // 3. Storing JSON objects: must stringify first
  const user = { name: 'Asha', role: 'admin' };
  localStorage.setItem('userProfile', JSON.stringify(user));

  // 4. Retrieving JSON objects
  const profile = JSON.parse(localStorage.getItem('userProfile'));
  console.log('User role:', profile.role);      // User role: admin

  // 5. Remove key or clear all origin entries
  localStorage.removeItem('theme');
  console.log('Theme after removal:', localStorage.getItem('theme')); // null
</script>`,
      caption: {
        en: 'localStorage is synchronous: accessing large data structures blocks the main UI rendering thread. Use IndexedDB for large datasets.',
        bn: 'localStorage সিঙ্ক্রোনাস হওয়ায় এতে বিশাল ডেটা নিয়ে কাজ করলে মূল ইউআই থ্রেড সাময়িক আটকে যায়। বড় তথ্যে IndexedDB ব্যবহার করুন।'
      }
    },

    { type: 'heading', id: 'p7', text: { en: '7. Web Storage: sessionStorage tab-scoped temporary storage', bn: '৭. ওয়েব স্টোরেজ: sessionStorage ট্যাব-সীমাবদ্ধ সাময়িক স্টোর' } },
    {
      type: 'para',
      text: {
        en: 'sessionStorage stores data strictly for the duration of the browser tab session. Closing the tab or window permanently erases all session data.',
        bn: 'sessionStorage কেবল বর্তমান ব্রাউজার ট্যাব চালু থাকা পর্যন্ত ডেটা রাখে। ট্যাব বা উইন্ডো বন্ধ করামাত্র সব সেশন ডেটা চিরতরে মুছে যায়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'session-storage.html',
      code: `<script>
  // Saving temporary workflow state (e.g. multi-step wizard step)
  sessionStorage.setItem('currentStep', '3');

  // Reading step count in same tab
  const step = sessionStorage.getItem('currentStep');
  console.log('Active step:', step);             // Active step: 3

  // Opening the same URL in a new tab creates an isolated, empty sessionStorage
  console.log('Total session keys:', sessionStorage.length);
</script>
<!-- sessionStorage is isolated per tab; opening a duplicate tab gets an independent sandbox -->`,
      caption: {
        en: 'Opening the same website in two separate tabs provides each tab with its own isolated sessionStorage sandbox.',
        bn: 'একই ওয়েবসাইট দুটি আলাদা ট্যাবে খুললে প্রতিটি ট্যাব নিজস্ব স্বাধীন sessionStorage স্যান্ডবক্স পায়।'
      }
    },

    { type: 'heading', id: 'p8', text: { en: '8. Web Workers: background JavaScript execution', bn: '৮. ওয়েব ওয়ার্কার: ব্যাকগ্রাউন্ডে জাভাস্ক্রিপ্ট চালানো' } },
    {
      type: 'para',
      text: {
        en: 'Web Workers run intensive computations on background worker threads without freezing the main browser UI. Workers communicate using postMessage.',
        bn: 'ওয়েব ওয়ার্কার ব্রাউজার ইউআই হ্যাং না করে ব্যাকগ্রাউন্ড থ্রেডে ভারী ক্যালকুলেশন চালায়। এরা postMessage-এর মাধ্যমে মূল থ্রেডের সাথে যোগাযোগ করে।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'web-worker.html',
      code: `<script>
  // 1. Check browser support and spawn worker thread
  if (window.Worker) {
    const worker = new Worker('/compute-worker.js');

    // 2. Send payload to worker thread
    worker.postMessage({ task: 'calculate_primes', limit: 1000000 });

    // 3. Receive finished result from worker thread
    worker.onmessage = function(event) {
      console.log('Worker computation complete:', event.data.result);
    };

    // 4. Handle worker errors
    worker.onerror = function(err) {
      console.error('Worker error:', err.message);
    };
  }
</script>
<!-- Web Workers have NO access to document, window, or DOM nodes -->`,
      caption: {
        en: 'Web Workers do not have access to the window, document, or DOM tree. They operate strictly through message-passing diplomacy.',
        bn: 'ওয়েব ওয়ার্কার উইন্ডো বা ডম নোড সরাসরি দেখতে পায় না; এরা কেবল বার্তা আদান-প্রদানের মাধ্যমেই মূল থ্রেডের সাথে যুক্ত থাকে।'
      }
    },

    { type: 'heading', id: 'p9', text: { en: '9. Server-Sent Events (SSE): EventSource real-time streams', bn: '৯. সার্ভার-সেন্ট ইভেন্টস (এসএসই): EventSource লাইভ ডাটা স্ট্রিম' } },
    {
      type: 'para',
      text: {
        en: 'Server-Sent Events allow a web server to push live data updates to the client browser over a persistent HTTP connection using the EventSource API.',
        bn: 'সার্ভার-সেন্ট ইভেন্টস একটি স্থায়ী এইচটিএমএল সংযোগের মাধ্যমে সার্ভার থেকে ক্লায়েন্টে তাৎক্ষণিক লাইভ আপডেট পাঠানোর সুযোগ দেয়।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'sse-stream.html',
      code: `<script>
  if (typeof EventSource !== 'undefined') {
    // Open persistent HTTP event stream
    const source = new EventSource('/api/live-metrics');

    // Listen for incoming server messages
    source.onmessage = function(event) {
      console.log('Live server metric event:', event.data);
    };

    // Auto-reconnect handling on connection loss
    source.onerror = function(err) {
      console.log('Stream disconnected, browser will auto-reconnect');
    };
  }
</script>
<!-- Unlike WebSockets, SSE is one-way (server-to-client) and reconnects automatically -->`,
      caption: {
        en: 'Unlike full-duplex WebSockets, Server-Sent Events stream one-way from server to client over plain HTTP and reconnect automatically if dropped.',
        bn: 'ওয়েবসকেটের মতো উভয়মুখী না হয়ে এসএসই কেবল সার্ভার থেকে ক্লায়েন্টে ডেটা পাঠায় এবং সংযোগ বিচ্ছিন্ন হলে নিজে থেকেই পুনরায় যুক্ত হয়।'
      }
    },

    { type: 'heading', id: 'p10', text: { en: '10. Feature Detection: progressive enhancement without sniffing', bn: '১০. ফিচার ডিটেকশন: ইউজার-এজেন্ট না শুঁকে ফিচার পরীক্ষা' } },
    {
      type: 'para',
      text: {
        en: 'Never sniff the browser navigator.userAgent string. Test whether specific capabilities exist directly on navigator or window objects before using them.',
        bn: 'কখনোই navigator.userAgent স্ট্রিং দেখে ব্রাউজার অনুমান করবেন না। কোনো সুবিধা ব্যবহারের আগে navigator বা window অবজেক্টে সরাসরি পরীক্ষা করুন।'
      }
    },
    {
      type: 'code',
      lang: 'html',
      filename: 'feature-detection.html',
      code: `<script>
  // Robust Feature Detection Pattern:
  const capabilities = {
    canvas: !!window.CanvasRenderingContext2D,
    geolocation: 'geolocation' in navigator,
    storage: typeof localStorage !== 'undefined',
    workers: typeof Worker !== 'undefined',
    sse: typeof EventSource !== 'undefined'
  };

  console.log('System Capabilities:', capabilities);
  // System Capabilities: { canvas: true, geolocation: true, storage: true, workers: true, sse: true }

  if (!capabilities.storage) {
    console.warn('Falling back to in-memory cookies dictionary');
  }
</script>`,
      caption: {
        en: 'Feature detection ensures code adapts gracefully across browsers, older devices, and constrained privacy sandboxes.',
        bn: 'সরাসরি ফিচার পরীক্ষা করলে কোড সব ব্রাউজার, পুরোনো ডিভাইস ও প্রাইভেসি মোডে কোনো ক্র্যাশ ছাড়াই সুন্দরভাবে চলে।'
      }
    },

    { type: 'heading', id: 'why', text: { en: 'Why client APIs power modern responsive web applications', bn: 'কেন ক্লায়েন্ট এপিআই আধুনিক ওয়েব অ্যাপ্লিকেশনকে গতিশীল করে' } },
    {
      type: 'list',
      ordered: false,
      items: [
        { en: 'Web Storage saves user preferences locally, eliminating redundant database API round-trips', bn: 'ওয়েব স্টোরেজ ইউজারের পছন্দ লোকাল মেমরিতে রেখে অপ্রয়োজনীয় ডাটাবেজ রিকোয়েস্ট কমায়' },
        { en: 'Web Workers prevent long-running cryptographic or mathematical algorithms from freezing user interfaces', bn: 'ওয়েব ওয়ার্কার ভারী গাণিতিক হিসাব ব্যাকগ্রাউন্ডে চালিয়ে ইউজার ইন্টারফেস সচল রাখে' },
        { en: 'SVG vectors deliver crisp icons on high-density mobile screens without multi-resolution bitmap downloads', bn: 'এসভিজি ভেক্টর একাধিক সাইজের ছবি ডাউনলোড না করেই রেটিনা স্ক্রিনে নিখুঁত আইকন দেখায়' },
        { en: 'Server-Sent Events provide lightweight real-time dashboards over standard HTTP without WebSocket overhead', bn: 'এসএসই বাড়তি প্রোটোকলের বোঝা ছাড়াই সাধারণ এইচটিএমএল দিয়ে রিয়েল-টাইম ড্যাশবোর্ড চালায়' },
        { en: 'Native Drag and Drop allows users to upload local filesystem files intuitively into browser drop zones', bn: 'ড্র্যাগ অ্যান্ড ড্রপ ব্যবহারকারীকে কম্পিউটার থেকে সরাসরি ফাইলে টেনে এনে আপলোড করার সুবিধা দেয়' }
      ]
    },
    {
      type: 'table',
      head: [{ en: 'API / Technology', bn: 'এপিআই / প্রযুক্তি' }, { en: 'Mechanism Type', bn: 'কাজের ধরন' }, { en: 'Persistence / Scope', bn: 'স্থায়িত্ব / পরিধি' }, { en: 'Primary Use Case', bn: 'প্রধান ব্যবহার' }],
      rows: [
        [{ en: 'HTML Canvas', bn: 'এইচটিএমএল ক্যানভাস' }, { en: 'Immediate-mode bitmap', bn: 'তৎক্ষণাৎ বিটম্যাপ' }, { en: 'In-memory pixels', bn: 'মেমরির পিক্সেল' }, { en: 'Games, charts, image filters', bn: 'গেম, চার্ট, ফটো এডিটিং' }],
        [{ en: 'HTML SVG', bn: 'এইচটিএমএল এসভিজি' }, { en: 'Retained-mode DOM nodes', bn: 'জীবন্ত ডম নোড' }, { en: 'Document tree lifecycle', bn: 'ডকুমেন্ট ট্রি' }, { en: 'Scalable icons, UI vector art', bn: 'আইকন ও ভেক্টর গ্রাফিক্স' }],
        [{ en: 'localStorage', bn: 'localStorage' }, { en: 'Synchronous key-value', bn: 'সিঙ্ক্রোনাস কি-ভ্যালু' }, { en: 'Persistent across sessions', bn: 'স্থায়ী মেমরি' }, { en: 'User theme, auth tokens', bn: 'থিম ও ইউজার সেটিংস' }],
        [{ en: 'sessionStorage', bn: 'sessionStorage' }, { en: 'Synchronous key-value', bn: 'সিঙ্ক্রোনাস কি-ভ্যালু' }, { en: 'Dies with browser tab', bn: 'ট্যাব বন্ধে শেষ' }, { en: 'Multi-step form wizard state', bn: 'সাময়িক ফর্ম স্টেট' }],
        [{ en: 'Web Workers', bn: 'ওয়েব ওয়ার্কার' }, { en: 'Background thread', bn: 'ব্যাকগ্রাউন্ড থ্রেড' }, { en: 'Isolated script thread', bn: 'আলাদা স্ক্রিপ্ট' }, { en: 'Heavy data crunching, parsing', bn: 'ভারী ডেটা প্রসেসিং' }],
        [{ en: 'EventSource (SSE)', bn: 'EventSource (এসএসই)' }, { en: 'HTTP persistent stream', bn: 'এইচটিটিপি লাইভ স্ট্রিম' }, { en: 'Open connection', bn: 'উন্মুক্ত সংযোগ' }, { en: 'Live tickers, status feeds', bn: 'লাইভ নোটিফিকেশন ফিড' }]
      ],
      caption: { en: 'Comparison of HTML5 client graphics, storage, threading, and streaming APIs.', bn: 'এইচটিএমএল৫ ক্লায়েন্ট গ্রাফিক্স, স্টোরেজ, থ্রেডিং ও স্ট্রিমিং এপিআইয়ের তুলনামূলক তালিকা।' }
    },

    { type: 'heading', id: 'how', text: { en: 'How to implement progressive capability enhancement', bn: 'কীভাবে প্রগ্রেসিভ ক্যাপাবিলিটি এনহ্যান্সমেন্ট বাস্তবায়ন করবেন' } },
    {
      type: 'steps',
      items: [
        { title: { en: 'Detect capability upfront', bn: 'শুরুতেই ফিচার পরীক্ষা করুন' }, text: { en: 'Wrap feature-specific code in simple checks like if (window.Worker) before calling APIs.', bn: 'কোনো এপিআই ডাকার আগে if (window.Worker)-এর মতো সহজ শর্ত দিয়ে ব্রাউজার সাপোর্ট যাচাই করুন।' } },
        { title: { en: 'Provide fallbacks for storage', bn: 'স্টোরেজে বিকল্প ব্যবস্থা রাখুন' }, text: { en: 'When localStorage is disabled in private browsing, gracefully fall back to an in-memory Map.', bn: 'প্রাইভেট মোডে লোকালস্টোরেজ বন্ধ থাকলে ক্র্যাশ না করে মেমরি ম্যাপ ব্যবহার করুন।' } },
        { title: { en: 'Offload heavy computations', bn: 'ভারী কাজ ওয়ার্কারে পাঠান' }, text: { en: 'Identify CPU tasks exceeding 50ms and delegate them to a Web Worker to preserve 60fps UI.', bn: '৫০ মিলিসেকেন্ডের বেশি লাগা ভারী হিসাবগুলোকে ওয়েব ওয়ার্কারে পাঠিয়ে ইউআই সচল রাখুন।' } },
        { title: { en: 'Use SVG for crisp UI icons', bn: 'আইকনে এসভিজি ব্যবহার করুন' }, text: { en: 'Standardize on inline SVG icons with currentColor fills to inherit active text themes.', bn: 'currentColor যুক্ত এসভিজি আইকন ব্যবহার করুন যাতে লেখার রঙের সাথে আইকনের রঙ নিজে থেকেই মিলে যায়।' } },
        { title: { en: 'Handle network reconnects in SSE', bn: 'এসএসই সংযোগ বিচ্ছিন্নতা সামলান' }, text: { en: 'Listen to source.onerror in EventSource connections to inform users during connection drops.', bn: 'নেটওয়ার্ক চলে গেলে ইউজারকে সচেতন করতে EventSource-এর onerror ইভেন্ট ব্যবহার করুন।' } }
      ]
    },
    {
      type: 'diagram',
      title: { en: 'Client API architecture: Main thread vs worker thread and storage', bn: 'ক্লায়েন্ট এপিআই আর্কিটেকচার: মূল থ্রেড বনাম ওয়ার্কার ও স্টোরেজ' },
      svg: `<svg viewBox="0 0 660 190" font-family="ui-sans-serif, system-ui, sans-serif" role="img" aria-label="diagram showing main UI thread communicating with worker thread and accessing local storage"><g font-size="11" fill="currentColor"><rect x="30" y="25" width="220" height="140" rx="6" fill="none" stroke="currentColor"/><text x="140" y="48" text-anchor="middle">Main Thread (UI &amp; DOM)</text><text x="140" y="75" font-size="9" text-anchor="middle">Canvas 2D Rendering</text><text x="140" y="95" font-size="9" text-anchor="middle">SVG DOM Elements</text><text x="140" y="115" font-size="9" text-anchor="middle">Geolocation Permissions</text><text x="140" y="135" font-size="9" text-anchor="middle">localStorage / sessionStorage</text><rect x="410" y="25" width="220" height="65" rx="6" fill="none" stroke="currentColor"/><text x="520" y="50" text-anchor="middle">Web Worker Thread</text><text x="520" y="70" font-size="9" text-anchor="middle">Heavy background computation</text><line x1="250" y1="58" x2="410" y2="58" stroke="currentColor" stroke-width="1.2"/><text x="330" y="52" font-size="9" text-anchor="middle">postMessage</text><rect x="410" y="105" width="220" height="60" rx="6" fill="none" stroke="currentColor"/><text x="520" y="130" text-anchor="middle">Server (SSE Endpoint)</text><text x="520" y="148" font-size="9" text-anchor="middle">text/event-stream push</text><line x1="410" y1="135" x2="250" y2="135" stroke="currentColor" stroke-width="1.2"/><text x="330" y="130" font-size="9" text-anchor="middle">EventSource</text></g></svg>`,
      caption: { en: 'The main UI thread offloading intensive compute tasks to background workers while streaming server updates.', bn: 'মূল ইউআই থ্রেড ব্যাকগ্রাউন্ড ওয়ার্কারে ভারী কাজ পাঠিয়ে এবং সার্ভার থেকে লাইভ ডেটা গ্রহণ করে সচল থাকে।' }
    },
    {
      type: 'callout',
      kind: 'tip',
      title: { en: 'Storage quota recommendation', bn: 'স্টোরেজ কোটার টিপ' },
      text: {
        en: 'Never store multi-megabyte payloads in localStorage because every read and write runs synchronously on the main UI thread. For caching audio files, photos, or databases, migrate to IndexedDB.',
        bn: 'localStorage-এ মেগাবাইট আকারের বিশাল ডেটা রাখবেন না, কারণ এটি সিঙ্ক্রোনাসভাবে মূল থ্রেডে চলে। ছবি, গান বা বড় ডাটাবেজ লোকালি সেভ করতে IndexedDB ব্যবহার করুন।'
      }
    },
    { type: 'heading', id: 'misstep', text: { en: 'The missing preventDefault in dragover error', bn: 'dragover-এ preventDefault না দেওয়ার ভুল' } },
    {
      type: 'callout',
      kind: 'mistake',
      title: { en: 'Forgetting e.preventDefault() in the dragover event handler', bn: 'dragover হ্যান্ডলারে e.preventDefault() বাদ পড়া' },
      text: {
        en: 'In the HTML Drag and Drop API, the browser default behavior is to reject dropped items. If you forget to call e.preventDefault() inside the dragover event listener, the drop event will never fire on your target drop zone.',
        bn: 'এইচটিএমএল ড্র্যাগ অ্যান্ড ড্রপ এপিআইতে ব্রাউজারের ডিফল্ট আচরণ হলো যেকোনো ড্রপ বাতিল করে দেওয়া। dragover ইভেন্টের ভেতরে e.preventDefault() না ডাকলে আপনার ড্রপ জোনে drop ইভেন্ট কখনো চালু হবে না।'
      }
    }
  ],
  exercises: [
    {
      id: 'html-modern-ex1', kind: 'predict', topic: 'html: Modern APIs',
      question: { en: 'Which method obtains the 2D drawing context on an HTML <canvas> element?', bn: 'এইচটিএমএল <canvas> উপাদান থেকে 2D ড্রয়িং কনটেক্সট পেতে কোন মেথড ডাকা হয়?' },
      code: `method = "getContext('2d')"\nprint(method)`,
      answer: "getContext('2d')",
      accept: ["getContext('2d')", 'getContext("2d")', 'getContext'],
      hint: { en: 'getContext with parameter 2d.', bn: '2d প্যারামিটারসহ getContext।' },
      explanation: { en: "canvas.getContext('2d') returns the CanvasRenderingContext2D object used to draw pixels.", bn: "canvas.getContext('2d') পিক্সেল আঁকার জন্য প্রয়োজনীয় 2D কনটেক্সট অবজেক্ট ফেরত দেয়।" }
    },
    {
      id: 'html-modern-ex2', kind: 'mcq', topic: 'html: Modern APIs',
      question: { en: 'What happens to data stored in sessionStorage when the user closes their browser tab?', bn: 'ব্যবহারকারী ব্রাউজার ট্যাব বন্ধ করে দিলে sessionStorage-এ থাকা তথ্যের কী ঘটে?' },
      options: [
        { en: 'It is permanently erased immediately', bn: 'তা সাথে সাথে চিরতরে মুছে যায়' },
        { en: 'It is transferred to localStorage automatically', bn: 'তা স্বয়ংক্রিয়ভাবে localStorage-এ জমা হয়' },
        { en: 'It is uploaded to the cloud server', bn: 'তা ক্লাউড সার্ভারে আপলোড হয়ে যায়' },
        { en: 'It remains preserved forever', bn: 'তা চিরকাল অপরিবর্তিত থেকে যায়' }
      ],
      answer: 0,
      hint: { en: 'Session lifetime is tied to the tab.', bn: 'সেশনের জীবনকাল ট্যাবের সাথে সীমাবদ্ধ।' },
      explanation: { en: 'sessionStorage is strictly scoped to the lifecycle of the individual browser tab.', bn: 'sessionStorage কেবল নির্দিষ্ট ট্যাবের আয়ুষ্কাল পর্যন্তই তথ্য সংরক্ষণ করে রাখে।' }
    },
    {
      id: 'html-modern-ex3', kind: 'fill', topic: 'html: Modern APIs',
      question: { en: 'Fill the blank with the attribute that makes an HTML element draggable.', bn: 'কোনো উপাদানকে মাউস দিয়ে টানার যোগ্য করতে কোন অ্যাট্রিবিউট বসাতে হয়?' },
      code: `<div ________="true">Drag me</div>`,
      answer: 'draggable',
      accept: ['draggable', 'draggable="true"'],
      hint: { en: 'The draggable attribute.', bn: 'ড্র্যাগেবল অ্যাট্রিবিউট।' },
      explanation: { en: 'draggable="true" signals to the browser that an element can be dragged by the user.', bn: 'draggable="true" ব্রাউজারকে নির্দেশ দেয় যে ব্যবহারকারী উপাদানটি টেনে সরাতে পারবেন।' }
    },
    {
      id: 'html-modern-ex4', kind: 'predict', topic: 'html: Modern APIs',
      question: { en: 'Can Web Workers directly manipulate the DOM tree or window object?', bn: 'ওয়েব ওয়ার্কার কি সরাসরি ডম ট্রি বা উইন্ডো অবজেক্ট পরিবর্তন করতে পারে?' },
      code: `dom_access = 'no'\nprint(dom_access)`,
      answer: 'no',
      accept: ['no', 'false', 'never'],
      hint: { en: 'They have no DOM access.', bn: 'তাদের কোনো ডম অ্যাক্সেস নেই।' },
      explanation: { en: 'Web Workers run in isolated threads and communicate only through postMessage, with zero DOM access.', bn: 'ওয়েব ওয়ার্কার পৃথক থ্রেডে চলে এবং ডম অ্যাক্সেস ছাড়া কেবল বার্তার মাধ্যমেই যোগাযোগ করে।' }
    }
  ],
  quiz: {
    id: 'html-modern-apis-quiz',
    title: { en: 'Quiz — Modern HTML APIs and graphics', bn: 'কুইজ — আধুনিক এইচটিএমএল এপিআই ও গ্রাফিক্স' },
    questions: [
      {
        id: 'html-modern-q1', kind: 'mcq', topic: 'html: Modern APIs',
        question: { en: 'What is the key rendering difference between Canvas and SVG?', bn: 'ক্যানভাস এবং এসভিজির মধ্যে রেন্ডারিংয়ের মূল পার্থক্য কোনটি?' },
        options: [
          { en: 'Canvas is an immediate-mode pixel raster; SVG shapes exist as live DOM nodes', bn: 'ক্যানভাস হলো তাৎক্ষণিক পিক্সেল রাস্টার; এসভিজি আকৃতিগুলো লাইভ ডম নোড' },
          { en: 'Canvas cannot be scripted with JavaScript', bn: 'ক্যানভাসে জাভাস্ক্রিপ্ট চালানো যায় না' },
          { en: 'SVG only supports black and white graphics', bn: 'এসভিজি কেবল সাদা-কালো গ্রাফিক্স সমর্থন করে' },
          { en: 'Canvas is vector-based while SVG is pixel-based', bn: 'ক্যানভাস ভেক্টরভিত্তিক আর এসভিজি পিক্সেলভিত্তিক' }
        ],
        answer: 0,
        hint: { en: 'Immediate bitmap vs retained DOM tree.', bn: 'তৎক্ষণাৎ বিটম্যাপ বনাম ডম ট্রি নোড।' },
        explanation: { en: 'Canvas paints pixels and drops shape memory; SVG retains each shape as a selectable, styleable DOM element.', bn: 'ক্যানভাস পিক্সেল এঁকে আকৃতি ভুলে যায়; এসভিজি প্রতিটি আকৃতিকে স্টাইলযোগ্য ডম নোড হিসেবে বাঁচিয়ে রাখে।' }
      },
      {
        id: 'html-modern-q2', kind: 'predict', topic: 'html: Modern APIs',
        question: { en: 'What method is called on localStorage to retrieve a saved string value?', bn: 'সংরক্ষিত মানটি পড়তে localStorage-এ কোন মেথড ডাকা হয়?' },
        code: `method = 'getItem'\nprint(method)`,
        answer: 'getItem',
        accept: ['getItem', 'localStorage.getItem'],
        hint: { en: 'The getter method.', bn: 'মান পাওয়ার মেথড।' },
        explanation: { en: 'localStorage.getItem(key) returns the string value associated with the specified key.', bn: 'localStorage.getItem(key) নির্দিষ্ট চাবির সাথে থাকা স্ট্রিং মানটি ফেরত দেয়।' }
      },
      {
        id: 'html-modern-q3', kind: 'mcq', topic: 'html: Modern APIs',
        question: { en: 'Why must e.preventDefault() be called inside the dragover event handler?', bn: 'dragover ইভেন্টের ভেতরে কেন e.preventDefault() ডাকা আবশ্যক?' },
        options: [
          { en: 'Because browsers default to rejecting drop actions unless prevented', bn: 'কারণ ব্রাউজারের ডিফল্ট আচরণ হলো ড্রপ বাতিল করা, যা প্রতিরোধ করা জরুরি' },
          { en: 'To change the cursor color to green', bn: 'কার্সারের রঙ সবুজ করতে' },
          { en: 'To download the file automatically', bn: 'ফাইল স্বয়ংক্রিয়ভাবে ডাউনলোড করতে' },
          { en: 'To clear the console log', bn: 'কনসোল পরিস্কার করতে' }
        ],
        answer: 0,
        hint: { en: 'Allowing the drop event to fire.', bn: 'ড্রপ ইভেন্ট চালু করার অনুমতি।' },
        explanation: { en: 'Calling e.preventDefault() overrides the browser default behavior of refusing dropped content.', bn: 'e.preventDefault() ব্রাউজারের ড্রপ বাতিলের ডিফল্ট আচরণ বন্ধ করে ড্রপ সম্পন্ন করতে দেয়।' }
      },
      {
        id: 'html-modern-q4', kind: 'mcq', topic: 'html: Modern APIs',
        question: { en: 'Which protocol does the Geolocation API require in production for security reasons?', bn: 'নিরাপত্তার স্বার্থে প্রোডাকশনে জিওলোকেশন এপিআইর জন্য কোন প্রোটোকল আবশ্যক?' },
        options: [
          { en: 'HTTPS', bn: 'HTTPS' },
          { en: 'HTTP', bn: 'HTTP' },
          { en: 'FTP', bn: 'FTP' },
          { en: 'SMTP', bn: 'SMTP' }
        ],
        answer: 0,
        hint: { en: 'Encrypted secure web protocol.', bn: 'এনক্রিপ্ট করা সুরক্ষিত ওয়েব প্রোটোকল।' },
        explanation: { en: 'Browsers strictly disallow geolocation on unencrypted HTTP connections to protect user location privacy.', bn: 'ব্যবহারকারীর অবস্থানের গোপনীয়তা রক্ষায় ব্রাউজার অসুরক্ষিত HTTP-তে জিওলোকেশন বন্ধ রাখে।' }
      }
    ]
  },
  nextLesson: {
    slug: 'html-the-long-tail',
    title: {
      en: 'The Shelf of Oddments: Colors, Entities, Charsets, and Advanced HTML',
      bn: 'অদ্ভুত জিনিসের তাক: রঙ, এন্টিটি, ক্যারেক্টার সেট এবং আধুনিক এইচটিএমএল'
    }
  }
};
