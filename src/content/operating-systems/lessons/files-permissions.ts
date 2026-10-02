import type { Lesson } from '../../../lib/types';

export const FilesPermissionsLesson: Lesson = {
  slug: 'files-permissions',
  tech: 'operating-systems',
  title: {
    en: 'Filesystem Architecture, Inode Metadata & POSIX Discretionary Access Control',
    bn: 'ফাইলসিস্টেম আর্কিটেকচার, ইনোড মেটাডেটা এবং পসিক্স ডিসক্রিশনারি অ্যাক্সেস কন্ট্রোল',
  },
  summary: {
    en: 'Explore how operating systems structure persistent storage via the Virtual File System (VFS), superblock, inode tables, directory entries (dentries), and data blocks. Master POSIX file permission bitmasks (read, write, execute), octal calculation, hard vs symbolic links, and sticky bit isolation.',
    bn: 'ভার্চুয়াল ফাইলসিস্টেম (VFS), সুপারব্লক, ইনোড টেবিল, ডিরেক্টরি এন্ট্রি (dentry) এবং ডেটা ব্লকের মাধ্যমে অপারেটিং সিস্টেম কীভাবে স্টোরেজ সাজায় তা জানুন। পসিক্স ফাইল পারমিশন বিটমাস্ক (read, write, execute), অক্টাল হিসাব, হার্ড বনাম সিম্বলিক লিঙ্ক এবং স্টিকি বিট আইসোলেশন আয়ত্ত করুন।',
  },
  minutes: 20,
  next: {
    slug: 'users-groups',
    title: {
      en: 'Process Isolation, User Contexts & Multi-Tenant Security',
      bn: 'প্রসেস আইসোলেশন, ইউজার কনটেক্সট এবং মাল্টি-টেন্যান্ট সিকিউরিটি',
    },
  },
  blocks: [
    {
      type: 'heading',
      id: 'vfs-and-inodes',
      text: {
        en: 'The Virtual File System & Inode Metadata Separation',
        bn: 'ভার্চুয়াল ফাইলসিস্টেম এবং ইনোড মেটাডেটার বিভাজন',
      },
    },
    {
      type: 'para',
      text: {
        en: 'Modern operating systems decouple physical disk layouts from user applications using the Virtual File System (VFS) abstraction. On standard (POSIX) filesystems like ext4, a file is not a monolithic container. Instead, the architecture cleanly splits filenames from physical storage. The filename lives inside a directory entry (dentry). All core file attributes — including ownership UID, group GID, permission bits, size, and pointers to 4096-byte data blocks — reside inside a distinct data structure called an inode (index node).',
        bn: 'আধুনিক অপারেটিং সিস্টেম ভার্চুয়াল ফাইলসিস্টেম (VFS) অ্যাবস্ট্রাকশনের মাধ্যমে ফিজিক্যাল ডিস্কের বিন্যাসকে ইউজার অ্যাপ্লিকেশন থেকে আলাদা রাখে। ext4-এর মতো স্ট্যান্ডার্ড ( পসিক্স ) ফাইলসিস্টেমে একটি ফাইল একক কোনো পাত্র নয়। এর বদলে আর্কিটেকচারটি ফাইলের নামকে মূল স্টোরেজ থেকে আলাদা করে। ফাইলের নামটি থাকে ডিরেক্টরি এন্ট্রির (dentry) ভেতরে। মালিকানার UID, গ্রুপ GID, পারমিশন বিট, আকার এবং ৪০৯৬ বাইটের ডেটা ব্লক পয়েন্টারগুলো সংরক্ষিত থাকে ইনোড (inode) নামের একটি স্বতন্ত্র ডেটা কাঠামোতে।',
      },
    },
    {
      type: 'diagram',
      title: {
        en: 'VFS Path Resolution: Inodes, Dentries & Data Blocks',
        bn: 'ভিএফএস পাথ সমাধান: ইনোড, ডেনট্রি এবং ডেটা ব্লক',
      },
      svg: `<svg viewBox="0 0 820 440" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg" font-family="system-ui, -apple-system, sans-serif">
  <defs>
    <linearGradient id="dentryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#0284c7" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="inodeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#a855f7" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#7e22ce" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="blockGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#10b981" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="#047857" stop-opacity="0.25"/>
    </linearGradient>
    <marker id="vfsArrow" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
      <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569"/>
    </marker>
  </defs>

  <!-- Level 1: Directory Entries (Dentries) -->
  <rect x="30" y="30" width="230" height="370" rx="10" fill="url(#dentryGrad)" stroke="#0284c7" stroke-width="2"/>
  <text x="45" y="60" font-size="15" font-weight="700" fill="#0369a1">DIRECTORY ENTRIES</text>
  <text x="45" y="80" font-size="12" fill="#64748b">(Human-readable Names)</text>

  <rect x="45" y="100" width="200" height="60" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="125" font-size="13" font-weight="600" fill="#0f172a">dentry: "app.log"</text>
  <text x="55" y="145" font-size="12" fill="#475569">Target Inode: 8920</text>

  <rect x="45" y="180" width="200" height="60" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="205" font-size="13" font-weight="600" fill="#0f172a">dentry: "backup.log"</text>
  <text x="55" y="225" font-size="12" fill="#047857">Hard Link -> Inode: 8920</text>

  <rect x="45" y="260" width="200" height="60" rx="6" fill="#ffffff" stroke="#7dd3fc" stroke-width="1.5"/>
  <text x="55" y="285" font-size="13" font-weight="600" fill="#0f172a">dentry: "symlink.log"</text>
  <text x="55" y="305" font-size="12" fill="#b45309">Target Inode: 9144 (Soft)</text>

  <!-- Connectors from dentries to inodes -->
  <path d="M 245 130 L 305 150" stroke="#475569" stroke-width="2" marker-end="url(#vfsArrow)"/>
  <path d="M 245 210 L 305 180" stroke="#047857" stroke-width="2" marker-end="url(#vfsArrow)"/>
  <path d="M 245 290 L 305 320" stroke="#b45309" stroke-width="2" marker-end="url(#vfsArrow)"/>

  <!-- Level 2: Inode Metadata Table -->
  <rect x="310" y="30" width="250" height="370" rx="10" fill="url(#inodeGrad)" stroke="#7e22ce" stroke-width="2"/>
  <text x="325" y="60" font-size="15" font-weight="700" fill="#6b21a8">INODE METADATA TABLE</text>
  <text x="325" y="80" font-size="12" fill="#64748b">(Physical File Descriptors)</text>

  <rect x="325" y="100" width="220" height="150" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="335" y="125" font-size="14" font-weight="700" fill="#581c87">Inode #8920 (Regular File)</text>
  <text x="335" y="147" font-size="11" fill="#334155">Mode: -rw-r--r-- (0644 octal)</text>
  <text x="335" y="167" font-size="11" fill="#334155">UID: 1000 | GID: 1000</text>
  <text x="335" y="187" font-size="11" fill="#334155">Link Count: 2 (Hard Links)</text>
  <text x="335" y="207" font-size="11" fill="#334155">Size: 6144 Bytes</text>
  <text x="335" y="227" font-size="11" fill="#047857">Blocks: [Block 402, Block 403]</text>

  <rect x="325" y="275" width="220" height="100" rx="6" fill="#ffffff" stroke="#d8b4fe" stroke-width="1.5"/>
  <text x="335" y="300" font-size="14" font-weight="700" fill="#581c87">Inode #9144 (Symlink)</text>
  <text x="335" y="322" font-size="11" fill="#334155">Mode: lrwxrwxrwx (0777)</text>
  <text x="335" y="342" font-size="11" fill="#334155">Size: 7 Bytes ("app.log")</text>
  <text x="335" y="360" font-size="11" fill="#b45309">Stores target path string</text>

  <!-- Connectors from inodes to data blocks -->
  <path d="M 545 220 L 595 150" stroke="#047857" stroke-width="2" marker-end="url(#vfsArrow)"/>
  <path d="M 545 230 L 595 240" stroke="#047857" stroke-width="2" marker-end="url(#vfsArrow)"/>

  <!-- Level 3: Physical Data Blocks -->
  <rect x="600" y="30" width="190" height="370" rx="10" fill="url(#blockGrad)" stroke="#047857" stroke-width="2"/>
  <text x="615" y="60" font-size="15" font-weight="700" fill="#065f46">DATA BLOCKS</text>
  <text x="615" y="80" font-size="12" fill="#64748b">(4096-Byte Clusters)</text>

  <rect x="615" y="105" width="160" height="80" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="625" y="132" font-size="12" font-weight="700" fill="#0f172a">Data Block #402</text>
  <text x="625" y="152" font-size="11" fill="#475569">First 4096 bytes</text>
  <text x="625" y="170" font-size="10" fill="#059669">[Log header payload...]</text>

  <rect x="615" y="200" width="160" height="80" rx="6" fill="#ffffff" stroke="#6ee7b7" stroke-width="1.5"/>
  <text x="625" y="227" font-size="12" font-weight="700" fill="#0f172a">Data Block #403</text>
  <text x="625" y="247" font-size="11" fill="#475569">Next 2048 bytes</text>
  <text x="625" y="265" font-size="10" fill="#059669">[Log trace records...]</text>

  <rect x="615" y="295" width="160" height="80" rx="6" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
  <text x="625" y="325" font-size="12" font-weight="600" fill="#64748b">Free Block #404</text>
  <text x="625" y="345" font-size="11" fill="#94a3b8">Unallocated storage</text>
</svg>`,
      caption: {
        en: 'The three-tier VFS architecture: directory entries (dentries) map human-readable names to inode numbers; inodes record metadata and block pointers; physical 4096-byte blocks store the raw bytes.',
        bn: 'ভিএফএস আর্কিটেকচারের ৩ টি স্তর: ডেনট্রি ফাইলের নাম ইনোড নম্বরে ম্যাপ করে, ইনোড মেটাডেটা ও ব্লক পয়েন্টার সংরক্ষণ করে এবং ৪০৯৬ বাইটের ফিজিক্যাল ব্লকগুলো ডেটা ধারণ করে।',
      },
    },
    {
      type: 'heading',
      id: 'posix-permission-octals',
      text: {
        en: 'POSIX Permission Bitmasks & Octal Mathematics',
        bn: 'পসিক্স পারমিশন বিটমাস্ক এবং অক্টাল গাণিতিক পদ্ধতি',
      },
    },
    {
      type: 'para',
      text: {
        en: 'POSIX security classifies file access permissions into three distinct identity tiers: User (owner), Group, and Other (everyone else). Each tier contains three binary bits: Read (4, binary 100), Write (2, binary 010), and Execute (1, binary 001). Adding these numerical values produces a concise three-digit octal representation. For example, Read + Write (4 + 2 = 6) for owner, and Read-only (4) for group and others yields the familiar mode 644.',
        bn: 'পসিক্স নিরাপত্তা কাঠামো ফাইল ব্যবহারের অধিকারকে তিনটি ভিন্ন স্তরে বিভক্ত করে: ইউজার (মালিক), গ্রুপ এবং আদার (অন্যান্য সবাই)। প্রতিটি স্তরে তিনটি বাইনারি বিট থাকে: রিড ( ৪ , বাইনারি ১০০), রাইট ( ২ , বাইনারি ০১০) এবং এক্সিকিউট ( ১ , বাইনারি ০০১)। এই মানগুলো যোগ করে ৩ অঙ্কের একটি অক্টাল সংখ্যা তৈরি হয়। উদাহরণস্বরূপ, মালিকের জন্য রিড + রাইট ( ৪ + ২ = ৬ ) এবং গ্রুপ ও অন্যদের জন্য কেবল রিড ( ৪ ) যোগ করলে সুপরিচিত ৬৪৪ মোড গঠিত হয়।',
      },
    },
    {
      type: 'code',
      code: `// Deterministic POSIX Inode Table & Permission Verification Engine
class Inode {
  constructor(id, mode, uid, gid) {
    this.id = id;
    this.mode = mode; // Octal representation (e.g. 0o644 or 0o755)
    this.uid = uid;
    this.gid = gid;
    this.size = 0;
    this.linkCount = 1;
    this.blocks = [];
  }
}

class VirtualFileSystem {
  constructor() {
    this.nextInodeId = 100;
    this.inodes = new Map();
    this.dentries = new Map(); // filename -> inodeId
  }

  // Allocate inode and link it to directory entry
  createFile(filename, mode, uid, gid, payload) {
    const inodeId = this.nextInodeId++;
    const inode = new Inode(inodeId, mode, uid, gid);
    const blockSize = 4096;
    const blockCount = Math.ceil(payload.length / blockSize) || 1;

    for (let i = 0; i < blockCount; i++) {
      inode.blocks.push(20000 + inodeId * 10 + i);
    }
    inode.size = payload.length;
    this.inodes.set(inodeId, inode);
    this.dentries.set(filename, inodeId);
    return inode;
  }

  // Hard link: Second dentry referencing identical inode
  createHardLink(targetFile, linkName) {
    const targetInodeId = this.dentries.get(targetFile);
    if (!targetInodeId) return false;

    const inode = this.inodes.get(targetInodeId);
    inode.linkCount++;
    this.dentries.set(linkName, targetInodeId);
    return true;
  }

  // POSIX Access check: evaluates owner (bits 8-6), group (bits 5-3), other (bits 2-0)
  checkPermission(filename, requesterUid, requesterGid, requestedAccess) {
    const inodeId = this.dentries.get(filename);
    if (!inodeId) return false;

    const inode = this.inodes.get(inodeId);
    let effectiveBits = 0;

    if (requesterUid === inode.uid) {
      effectiveBits = (inode.mode >> 6) & 7; // Owner bits
    } else if (requesterGid === inode.gid) {
      effectiveBits = (inode.mode >> 3) & 7; // Group bits
    } else {
      effectiveBits = inode.mode & 7;        // Other bits
    }

    // 4 = Read, 2 = Write, 1 = Execute
    return (effectiveBits & requestedAccess) === requestedAccess;
  }

  // Unlink file: data destroyed ONLY when linkCount drops to 0
  unlink(filename) {
    const inodeId = this.dentries.get(filename);
    if (!inodeId) return false;

    this.dentries.delete(filename);
    const inode = this.inodes.get(inodeId);
    inode.linkCount--;

    if (inode.linkCount <= 0) {
      this.inodes.delete(inodeId);
      return 'DATA_DEALLOCATED';
    }
    return 'DATA_PRESERVED_VIA_HARD_LINK';
  }
}

// Verification Scenario
const fs = new VirtualFileSystem();
const configInode = fs.createFile('app.conf', 0o644, 1000, 1000, 'PORT=3000\\nHOST=0.0.0.0');
fs.createHardLink('app.conf', 'app.backup');

console.log('Initial Inode ID:', configInode.id);
console.log('Hard link count:', configInode.linkCount);

// Test permission: 2 = Write permission
const ownerCanWrite = fs.checkPermission('app.conf', 1000, 1000, 2);
const strangerCanWrite = fs.checkPermission('app.conf', 1001, 1001, 2);

console.log('Owner write permission:', ownerCanWrite);
console.log('Stranger write permission:', strangerCanWrite);

// Remove original file name; inspect persistent hard link
const unlinkResult = fs.unlink('app.conf');
console.log('Unlink original file result:', unlinkResult);
console.log('Remaining hard link count:', configInode.linkCount);`,
      caption: {
        en: 'A working simulation of POSIX inode allocation, bitwise permission evaluation, and hard link reference count preservation upon unlinking.',
        bn: 'পসিক্স ইনোড বরাদ্দ, বিটওয়াইজ পারমিশন যাচাই এবং আনলিঙ্ক করার পরও হার্ড লিঙ্কের মাধ্যমে ডেটা সংরক্ষণের বাস্তব সিমুলেশন।',
      },
    },
    {
      type: 'keyterms',
      items: [
        {
          term: 'Virtual File System (VFS)',
          def: {
            en: 'The operating system kernel abstraction layer exposing standard POSIX system call APIs (read, write, open) across diverse underlying filesystem implementations.',
            bn: 'অপারেটিং সিস্টেম কার্নেলের অ্যাবস্ট্রাকশন স্তর যা বিভিন্ন ধরনের ফাইলসিস্টেমের উপরে অভিন্ন পসিক্স সিস্টেম কল এপিআই সরবরাহ করে।',
          },
        },
        {
          term: 'Inode (Index Node)',
          def: {
            en: 'A fixed-size filesystem data structure storing file metadata, permissions, owner identity, and physical storage block addresses, excluding the human filename.',
            bn: 'ফাইলসিস্টেমের নির্দিষ্ট আকারের ডেটা কাঠামো যা ফাইলের মেটাডেটা, পারমিশন, মালিকানা এবং ব্লক ঠিকানা সংরক্ষণ করে, তবে ফাইলের নাম সংরক্ষণ করে না।',
          },
        },
        {
          term: 'Directory Entry (dentry)',
          def: {
            en: 'A memory-cached mapping structure inside the kernel that associates a string filename path component with its corresponding numeric inode number.',
            bn: 'কার্নেলের ভেতরের মেমোরি কাঠামো যা একটি পাঠ্য ফাইলের নামকে তার সংশ্লিষ্ট সংখ্যাসূচক ইনোড নম্বরের সাথে যুক্ত করে।',
          },
        },
        {
          term: 'Hard Link',
          def: {
            en: 'An additional directory entry pointing directly to an existing inode number on the same filesystem partition, incrementing its link counter.',
            bn: 'একই ফাইলসিস্টেম পার্টিশনে বিদ্যমান একটি ইনোড নম্বরের দিকে সরাসরি নির্দেশকারী অতিরিক্ত ডিরেক্টরি এন্ট্রি, যা লিঙ্কের সংখ্যা বাড়িয়ে দেয়।',
          },
        },
      ],
    },
    {
      type: 'callout',
      text: {
        en: 'Operating system administrators frequently encounter "Disk full: No space left on device" errors even when physical drive capacity shows 50 gigabytes free. This happens due to inode exhaustion: storing millions of tiny zero-byte files can consume every available inode table slot, preventing the OS from creating new files.',
        bn: 'ফিজিক্যাল ডিস্কে ৫০ গিগাবাইট জায়গা খালি থাকার পরেও সিস্টেম অ্যাডমিনিস্ট্রেটররা মাঝে মাঝে "Disk full: No space left on device" এরর দেখতে পান। এটি ঘটে ইনোড শেষ হয়ে যাওয়ার কারণে: লাখ লাখ অতি ক্ষুদ্র ফাইল তৈরি করলে ইনোড টেবিল পূর্ণ হয়ে যায় এবং নতুন ফাইল তৈরি অসম্ভব হয়।',
      },
    },
  ],
  exercises: [
        {
          id: 'os-files-ex-1',
          kind: 'predict',
          question: {
            en: 'Calculate the 3-digit octal permission value for a file where the owner has Read and Write permissions (4 + 2 = 6), and both group and others have Read-only permissions (4).',
            bn: 'এমন একটি ফাইলের ৩ অঙ্কের অক্টাল পারমিশন মান গণনা করুন যেখানে মালিকের রিড এবং রাইট পারমিশন আছে ( ৪ + ২ = ৬ ), এবং গ্রুপ ও অন্যদের কেবল রিড পারমিশন আছে ( ৪ )।',
          },
          answer: '644',
          hint: {
            en: 'Combine the three computed digits: owner digit followed by group digit followed by other digit.',
            bn: 'তিনটি অঙ্ক পরপর সাজান: মালিকের অঙ্ক, তারপর গ্রুপের অঙ্ক এবং সবশেষে অন্যদের অঙ্ক।',
          },
          explanation: {
            en: 'Owner: 4 (read) + 2 (write) = 6. Group: 4 (read) = 4. Others: 4 (read) = 4. Assembling the three digits yields octal 644.',
            bn: 'মালিক: ৪ (রিড) + ২ (রাইট) = ৬। গ্রুপ: ৪ (রিড) = ৪। অন্যান্য: ৪ (রিড) = ৪। ৩ টি অঙ্ক মেলালে ৬৪৪ পাওয়া যায়।',
          },
        },
        {
          id: 'os-files-ex-2',
          kind: 'mcq',
          question: {
            en: 'What happens to the underlying disk storage blocks when a hard link to a file with link count 2 is removed using unlink()?',
            bn: 'যখন ২ টি লিঙ্ক কাউন্ট থাকা কোনো ফাইলের হার্ড লিঙ্ক unlink() দিয়ে মুছে ফেলা হয়, তখন ডিস্কের ডেটা ব্লকের কী ঘটে?',
          },
          options: [
            {
              en: 'The disk data blocks remain completely untouched; the kernel decrements the inode link count to 1, and the file remains accessible via the remaining link',
              bn: 'ডিস্কের ডেটা ব্লক সম্পূর্ণ অপরিবর্তিত থাকে; কার্নেল ইনোডের লিঙ্ক কাউন্ট কমিয়ে ১ করে এবং অবশিষ্ট লিঙ্ক দিয়ে ফাইলটি ব্যবহারযোগ্য থাকে',
            },
            {
              en: 'The entire hard drive partition is immediately reformatted to raw zeros',
              bn: 'সম্পূর্ণ হার্ড ড্রাইভ পার্টিশন সাথে সাথে ফরম্যাট হয়ে মুছে যায়',
            },
            {
              en: 'The operating system converts the remaining link into a broken web hyperlink',
              bn: 'অপারেটিং সিস্টেম অবশিষ্ট লিঙ্কটিকে একটি নষ্ট ওয়েব লিঙ্কে রূপান্তর করে',
            },
            {
              en: 'The processor halts and requires manual physical motherboard repair',
              bn: 'প্রসেসর কাজ বন্ধ করে দেয় এবং মাদারবোর্ড মেরামতের প্রয়োজন হয়',
            },
          ],
          answer: 0,
          hint: {
            en: 'File blocks are only freed back to the filesystem block allocator when the inode link counter reaches zero.',
            bn: 'ইনোডের লিঙ্ক কাউন্টার শূন্যে পৌঁছালেই কেবল ডেটা ব্লকগুলো পুনরায় ব্যবহারের জন্য মুক্ত হয়।',
          },
          explanation: {
            en: 'In POSIX filesystems, data blocks are deallocated only when an inode link count reaches 0 and no active running process holds an open file descriptor to it.',
            bn: 'পসিক্স ফাইলসিস্টেমে ইনোডের লিঙ্ক কাউন্ট ০ হলে এবং কোনো রানিং প্রসেস ফাইলটি খোলা না রাখলেই কেবল ডেটা ব্লক মুক্ত হয়।',
          },
        },
        {
          id: 'os-files-ex-3',
          kind: 'mcq',
          question: {
            en: 'Why does the POSIX inode data structure store permissions, timestamps, and block pointers, but deliberately exclude the human-readable filename?',
            bn: 'পসিক্স ইনোড ডেটা কাঠামোতে পারমিশন, টাইমস্ট্যাম্প এবং ব্লক পয়েন্টার রাখা হলেও কেন ইচ্ছাকৃতভাবে ফাইলের নাম রাখা হয় না?'
          },
          options: [
            {
              en: 'Excluding filenames allows multiple directory entries across different folders to reference the identical underlying inode as hard links',
              bn: 'ফাইলের নাম আলাদা রাখায় বিভিন্ন ফোল্ডারে থাকা একাধিক ডিরেক্টরি এন্ট্রি হার্ড লিঙ্ক হিসেবে একই ইনোডকে নির্দেশ করতে পারে',
            },
            {
              en: 'CPUs can only understand binary numbers and cannot parse English alphabet characters',
              bn: 'সিপিইউ শুধু বাইনারি সংখ্যা বোঝে এবং ইংরেজি বর্ণমালা পড়তে পারে না',
            },
            {
              en: 'Filenames are stored exclusively in the central processing unit L1 cache registers',
              bn: 'ফাইলের নামগুলো শুধুমাত্র প্রসেসরের এল ১ ক্যাশ রেজিস্টারে জমা থাকে',
            },
            {
              en: 'Storing filenames in inodes was banned by international networking standards in 1999',
              bn: '১৯৯৯ সালে আন্তর্জাতিক নেটওয়ার্কিং মান সংস্থা ইনোডে ফাইলের নাম রাখা নিষিদ্ধ করেছিল',
            },
          ],
          answer: 0,
          hint: {
            en: 'Consider how a single file can exist in multiple directories simultaneously under different names.',
            bn: 'চিন্তা করুন কীভাবে একটি একক ফাইল বিভিন্ন ডিরেক্টরিতে আলাদা নামে একই সাথে অবস্থান করতে পারে।',
          },
          explanation: {
            en: 'By keeping filenames in dentries and metadata in inodes, POSIX systems support hard linking: multiple names pointing to one shared inode without data duplication.',
            bn: 'ডেনট্রিতে ফাইলের নাম এবং ইনোডে মেটাডেটা আলাদা রাখার ফলে পসিক্স সিস্টেমে হার্ড লিঙ্ক সম্ভব হয়, যেখানে ডেটার প্রতিলিপি ছাড়াই বহু নাম থাকতে পারে।',
          },
        },
        {
          id: 'os-files-ex-4',
          kind: 'predict',
          question: {
            en: 'What is the default standard data block cluster size (in bytes) allocated by modern Linux ext4 and xfs filesystems for data storage?',
            bn: 'আধুনিক লিনাক্স ext4 এবং xfs ফাইলসিস্টেমে ডেটা সংরক্ষণের জন্য স্ট্যান্ডার্ড ডিফল্ট ব্লক সাইজ কত বাইট থাকে?'
          },
          answer: '4096',
          hint: {
            en: 'It corresponds exactly to the 4 KiB standard virtual memory page size on x86 processors.',
            bn: 'এটি x86 প্রসেসরের স্ট্যান্ডার্ড ৪ কিলোবাইট ভার্চুয়াল মেমোরি পেজের সমান।',
          },
          explanation: {
            en: 'Modern Linux filesystems allocate storage in 4096-byte (4 KiB) blocks to align directly with the CPU hardware memory paging architecture.',
            bn: 'আধুনিক লিনাক্স ফাইলসিস্টেমগুলো প্রসেসরের ভার্চুয়াল মেমোরি পেজিংয়ের সাথে মেলাতে ৪০৯৬ বাইট ( ৪ কিলোবাইট) ব্লকে জায়গা বরাদ্দ করে।',
          },
        },
  ],
  quiz: {
    title: {
      en: 'Filesystem Architecture & Permissions Knowledge Check',
      bn: 'ফাইলসিস্টেম আর্কিটেকচার এবং পারমিশন জ্ঞান যাচাই',
    },
    questions: [
        {
          id: 'os-files-qz-1',
          kind: 'mcq',
          topic: 'vfs-architecture',
          question: {
            en: 'What primary role does the Linux Virtual File System (VFS) abstraction perform in modern operating system architecture?',
            bn: 'আধুনিক অপারেটিং সিস্টেম আর্কিটেকচারে লিনাক্স ভার্চুয়াল ফাইলসিস্টেম (VFS) অ্যাবস্ট্রাকশন কোন মূল ভূমিকা পালন করে?'
          },
          options: [
            {
              en: 'It provides a uniform POSIX system call interface allowing applications to interact with ext4, XFS, Btrfs, and network NFS filesystems transparently',
              bn: 'এটি একটি অভিন্ন পসিক্স সিস্টেম কল ইন্টারফেস প্রদান করে যার মাধ্যমে অ্যাপ্লিকেশনগুলো ext4, XFS, Btrfs এবং এনএফএস ফাইলসিস্টেমের সাথে নির্বিঘ্নে কাজ করে',
            },
            {
              en: 'It compresses user video files to free up motherboard cache space',
              bn: 'এটি মাদারবোর্ডের জায়গা খালি করতে ভিডিও ফাইল কম্প্রেস করে',
            },
            {
              en: 'It encrypts the monitor display output cable during power outages',
              bn: 'এটি বিদ্যুৎ চলে গেলে মনিটরের ডিসপ্লে তারের সিগন্যাল এনক্রিপ্ট করে',
            },
            {
              en: 'It converts every file on the system into HTML web documents',
              bn: 'এটি সিস্টেমের প্রতিটি ফাইলকে এইচটিএমএল ওয়েব ডকুমেন্টে রূপান্তর করে',
            },
          ],
          answer: 0,
          hint: {
            en: 'VFS unifies diverse physical storage drivers behind standardized open(), read(), and write() syscalls.',
            bn: 'ভিএফএস বিভিন্ন স্টোরেজ ড্রাইভারকে স্ট্যান্ডার্ড open(), read() এবং write() সিস্টেম কলের আড়ালে সমন্বয় করে।',
          },
          explanation: {
            en: 'The VFS implements an object-oriented C layer with struct inode_operations and struct file_operations, translating generic POSIX calls to device-specific drivers.',
            bn: 'ভিএফএস একটি অবজেক্ট-ওরিয়েন্টেড সি স্তর বাস্তবায়ন করে, যা সাধারণ পসিক্স কলগুলোকে নির্দিষ্ট ড্রাইভারের উপযোগী নির্দেশে অনুবাদ করে।',
          },
        },
        {
          id: 'os-files-qz-2',
          kind: 'mcq',
          topic: 'links-cross-partition',
          question: {
            en: 'Why cannot a hard link bridge across two separate disk partitions or filesystems (such as linking /dev/sda1 to /dev/sdb1)?',
            bn: 'কেন দুটি ভিন্ন ডিস্ক পার্টিশন বা ফাইলসিস্টেমের মধ্যে (যেমন /dev/sda1 থেকে /dev/sdb1) একটি হার্ড লিঙ্ক তৈরি করা যায় না?'
          },
          options: [
            {
              en: 'Inode numbers are unique only within a specific local filesystem partition; another partition has its own independent inode table',
              bn: 'ইনোড নম্বরগুলো কেবল নিজস্ব লোকাল পার্টিশনে ইউনিক থাকে; অন্য পার্টিশনের সম্পূর্ণ নিজস্ব ও স্বাধীন ইনোড টেবিল থাকে',
            },
            {
              en: 'Disk drive magnets would overheat and reverse polarity',
              bn: 'হার্ড ড্রাইভের চুম্বক অতিরিক্ত গরম হয়ে বিপরীত মেরু তৈরি করবে',
            },
            {
              en: 'SATA data cables only allow electricity to flow in one direction',
              bn: 'সাটা কেবল বিদ্যুৎকে কেবল একদিকে প্রবাহিত হতে দেয়',
            },
            {
              en: 'The BIOS chips reject cross-partition links during hardware manufacturing',
              bn: 'বায়োস চিপ তৈরির সময় ভিন্ন পার্টিশনের লিঙ্ক নিষিদ্ধ করা হয়েছিল',
            },
          ],
          answer: 0,
          hint: {
            en: 'Remember that an inode number is merely an index in a specific partition table.',
            bn: 'মনে রাখবেন ইনোড নম্বর হলো নির্দিষ্ট একটি পার্টিশন টেবিলের তালিকা সূচক মাত্র।',
          },
          explanation: {
            en: 'A hard link stores only an inode number. Because each filesystem manages its own isolated inode sequence, pointing an inode number across partitions would reference an unrelated file.',
            bn: 'হার্ড লিঙ্ক কেবল একটি ইনোড নম্বর সংরক্ষণ করে। প্রতি পার্টিশনে ইনোড টেবিল আলাদা হওয়ায় ভিন্ন পার্টিশনে একই নম্বরে সম্পূর্ণ ভিন্ন ফাইল থাকতে পারে।',
          },
        },
        {
          id: 'os-files-qz-3',
          kind: 'mcq',
          topic: 'sticky-bit-security',
          question: {
            en: 'What critical security protection is enforced by applying the Sticky Bit (mode 1777, displayed as "t") to shared world-writable directories like /tmp?',
            bn: 'শেয়ার্ড ডিরেক্টরি যেমন /tmp-তে স্টিকি বিট (মোড ১৭৭৭, যা "t" হিসেবে দৃশ্যমান) যুক্ত করলে কোন গুরুত্বপূর্ণ নিরাপত্তা সুরক্ষা নিশ্চিত হয়?'
          },
          options: [
            {
              en: 'Only the file owner (or root) can delete or rename a file inside the directory, even though all users possess write permissions in that folder',
              bn: 'সব ব্যবহারকারীর রাইট পারমিশন থাকা সত্ত্বেও কেবল ফাইলের প্রকৃত মালিক (বা রুট) ফাইলটি মুছতে বা নাম বদলাতে পারে',
            },
            {
              en: 'All files inside the folder are deleted automatically after 60 seconds of inactivity',
              bn: 'ফোল্ডারের সব ফাইল ৬০ সেকেন্ড নিষ্ক্রিয় থাকলে স্বয়ংক্রিয়ভাবে মুছে যায়',
            },
            {
              en: 'Files become completely read-only and no user can ever edit them again',
              bn: 'ফাইলগুলো সম্পূর্ণ রিড-অনলি হয়ে যায় এবং কেউ কখনো সেগুলো এডিট করতে পারে না',
            },
            {
              en: 'The folder sends an alert notification email to every active user on the server',
              bn: 'ফোল্ডারটি সার্ভারের প্রতিটি সক্রিয় ব্যবহারকারীকে একটি সতর্কবার্তা ইমেইল পাঠায়',
            },
          ],
          answer: 0,
          hint: {
            en: 'Without the sticky bit, anyone with directory write access could delete other users files.',
            bn: 'স্টিকি বিট না থাকলে ডিরেক্টরিতে রাইট পারমিশন থাকা যে কেউ অন্য ব্যবহারকারীর ফাইল মুছে ফেলতে পারত।',
          },
          explanation: {
            en: 'The sticky bit (S_ISVTX) on directories prevents unprivileged users from deleting or renaming files owned by other users in shared public directories like /tmp.',
            bn: 'ডিরেক্টরিতে স্টিকি বিট থাকার ফলে /tmp-এর মতো উন্মুক্ত স্থানে সাধারণ ব্যবহারকারীরা অন্য কারও তৈরি করা ফাইল মুছতে বা তার নাম পরিবর্তন করতে পারে না।',
          },
        },
        {
          id: 'os-files-qz-4',
          kind: 'mcq',
          topic: 'inode-capacity-exhaustion',
          question: {
            en: 'A production server reports 0 free inodes available (100% inode utilization), while df -h indicates 60% free physical disk space. What is the observable system behavior?',
            bn: 'একটি প্রোডাকশন সার্ভারে ০ টি ইনোড খালি আছে (১০০% ইনোড ব্যবহৃত), অথচ df -h দেখাচ্ছে ৬০% ফিজিক্যাল ডিস্ক স্পেস খালি আছে। সিস্টেমে কী আচরণ দেখা যাবে?'
          },
          options: [
            {
              en: 'New files or temporary sockets cannot be created anywhere on that partition, returning "No space left on device" (ENOSPC)',
              bn: 'ঐ পার্টিশনে কোনো নতুন ফাইল বা অস্থায়ী সকেট তৈরি করা যাবে না এবং "No space left on device" (ENOSPC) এরর আসবে',
            },
            {
              en: 'The operating system automatically doubles the physical size of the hard drive',
              bn: 'অপারেটিং সিস্টেম স্বয়ংক্রিয়ভাবে হার্ড ড্রাইভের আকার দ্বিগুণ করে দেবে',
            },
            {
              en: 'The system switches to operating in read-only audio mode through the speakers',
              bn: 'সিস্টেমটি স্পিকারের মাধ্যমে অডিও মোডে রূপান্তর করে চলবে',
            },
            {
              en: 'All existing processes are migrated automatically to an offshore datacenter',
              bn: 'চলমান সব প্রসেস স্বয়ংক্রিয়ভাবে অন্য কোনো দূরবর্তী ডেটাসেন্টারে চলে যাবে',
            },
          ],
          answer: 0,
          hint: {
            en: 'Every file requires an inode entry to store its metadata, regardless of byte size.',
            bn: 'ফাইলের আকার যত ক্ষুদ্রই হোক না কেন, তার মেটাডেটা ধারণ করার জন্য একটি ইনোড এন্ট্রি আবশ্যক।',
          },
          explanation: {
            en: 'Even with abundant free disk blocks, the OS cannot allocate a file without an available inode table index, triggering the POSIX ENOSPC error.',
            bn: 'ডিস্কে পর্যাপ্ত জায়গা থাকলেও খালি ইনোড ছাড়া নতুন ফাইল তৈরি করা সম্ভব হয় না, ফলে পসিক্স ENOSPC এরর দেখা দেয়।',
          },
        },
    ],
  },
};
