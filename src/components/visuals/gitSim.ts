import type { LText } from '../../lib/types';

/** Pure Git simulation logic (Section 11) — a reducer, fully unit-testable. */

export const FILE_POOL = ['index.html', 'style.css', 'app.js', 'api.js', 'test.js', 'docs.md'];

export interface Commit {
  id: string;
  branch: string;
  msg: string;
  parents: string[];
}
export interface Branch {
  name: string;
  tip: string | null;
}
export interface GitState {
  initialized: boolean;
  working: string[];
  staged: string[];
  local: Commit[];
  localBranches: Branch[];
  remote: Commit[];
  remoteBranches: Branch[];
  head: string | null;
  counter: number;
  remoteCounter: number;
  fileCounter: number;
  allFiles: string[];
}

export type GitAction =
  | { type: 'init' }
  | { type: 'edit' }
  | { type: 'add'; file?: string }
  | { type: 'commit'; msg?: string }
  | { type: 'branch'; name: string }
  | { type: 'switch'; name: string }
  | { type: 'merge'; name: string }
  | { type: 'push' }
  | { type: 'pull' }
  | { type: 'teammate' }
  | { type: 'reset' };

export interface GitResult {
  state: GitState;
  cmd: string;
  out: string;
  caption: LText;
}

export function initialGitState(): GitState {
  return {
    initialized: false,
    working: [],
    staged: [],
    local: [],
    localBranches: [],
    remote: [],
    remoteBranches: [],
    head: null,
    counter: 0,
    remoteCounter: 0,
    fileCounter: 0,
    allFiles: [],
  };
}

function tip(s: GitState, name: string, remote = false): string | null {
  const bs = remote ? s.remoteBranches : s.localBranches;
  return bs.find((b) => b.name === name)?.tip ?? null;
}

function setTip(s: GitState, name: string, id: string | null, remote = false): void {
  const bs = remote ? s.remoteBranches : s.localBranches;
  const b = bs.find((x) => x.name === name);
  if (b) b.tip = id;
}

function fail(cmd: string, out: string, caption: LText, state: GitState): GitResult {
  return { state, cmd, out, caption };
}

export function gitReducer(prev: GitState, action: GitAction): GitResult {
  const s: GitState = structuredClone(prev);

  // git init is always allowed; everything else needs a repo (except reset).
  if (action.type !== 'init' && action.type !== 'reset' && !s.initialized) {
    return fail('', 'fatal: not a git repository — run git init first', { en: 'Press "git init" first — every repo starts there.', bn: 'আগে "git init" চাপুন — প্রতিটি রিপোজিটরি সেখানেই শুরু।' }, s);
  }

  switch (action.type) {
    case 'init': {
      if (s.initialized) {
        return fail('git init', 'Reinitialized existing Git repository', { en: 'The repository already exists — harmless.', bn: 'রিপোজিটরি আগে থেকেই আছে — কোনো ক্ষতি নেই।' }, s);
      }
      s.initialized = true;
      s.localBranches = [{ name: 'main', tip: null }];
      s.head = 'main';
      s.working = ['README.md'];
      s.allFiles = ['README.md'];
      return {
        state: s,
        cmd: 'git init',
        out: 'Initialized empty Git repository in ~/project/.git/',
        caption: {
          en: 'A hidden .git folder is born. README.md exists on disk but Git ignores it — it is UNTRACKED.',
          bn: 'লুকানো .git ফোল্ডার জন্ম নিলো। README.md ডিস্কে আছে কিন্তু Git তা চেনে না — এটি UNTRACKED।',
        },
      };
    }
    case 'edit': {
      const candidates = FILE_POOL.filter((f) => !s.allFiles.includes(f));
      let name: string;
      if (candidates.length > 0) {
        name = candidates[0];
        s.allFiles.push(name);
      } else {
        s.fileCounter += 1;
        name = `notes-${s.fileCounter}.txt`;
        s.allFiles.push(name);
      }
      s.working.push(name);
      return {
        state: s,
        cmd: `# edit ${name}`,
        out: `(you wrote code into ${name})`,
        caption: {
          en: `${name} changed on disk. Git watches it but remembers NOTHING yet — that needs add + commit.`,
          bn: `${name} ডিস্কে বদলালো। Git দেখছে কিন্তু কিছুই মনে রাখেনি — সেটা লাগবে add + commit।`,
        },
      };
    }
    case 'add': {
      if (s.working.length === 0) {
        return fail('git add .', 'nothing to add — working directory clean', { en: 'No changes waiting. Edit files first.', bn: 'অপেক্ষমাণ পরিবর্তন নেই। আগে ফাইল বদলান।' }, s);
      }
      const moved = action.file ? s.working.filter((f) => f === action.file) : [...s.working];
      if (moved.length === 0) return fail('git add', 'file not found in working directory', { en: 'That file is not modified.', bn: 'ফাইলটি পরিবর্তিত নয়।' }, s);
      s.working = s.working.filter((f) => !moved.includes(f));
      s.staged.push(...moved);
      return {
        state: s,
        cmd: action.file ? `git add ${action.file}` : 'git add .',
        out: `${moved.length} file(s) staged`,
        caption: {
          en: 'Snapshots moved Working Directory → Staging Area. Commits are built ONLY from what is staged.',
          bn: 'স্ন্যাপশট গেল Working Directory → Staging Area। কমিট বানে কেবল স্টেজ করা জিনিস থেকে।',
        },
      };
    }
    case 'commit': {
      if (s.staged.length === 0) {
        return fail('git commit', 'nothing to commit, working tree clean', { en: 'The staging area is empty — run git add first.', bn: 'স্টেজিং এরিয়া খালি — আগে git add চালান।' }, s);
      }
      s.counter += 1;
      const id = `c${s.counter}`;
      const parent = s.head ? tip(s, s.head) : null;
      const msg = action.msg ?? `${s.staged.join(', ')} on ${s.head}`;
      s.local.push({ id, branch: s.head!, msg, parents: parent ? [parent] : [] });
      setTip(s, s.head!, id);
      const n = s.staged.length;
      s.staged = [];
      return {
        state: s,
        cmd: `git commit -m "${msg}"`,
        out: `[${s.head} ${id}] ${msg} — ${n} file(s)`,
        caption: {
          en: `Staging became permanent commit ${id}. The ${s.head} label moved forward; the four-zone cycle continues.`,
          bn: `স্টেজিং হয়ে গেলো স্থায়ী কমিট ${id}। ${s.head} লেবেল এগিয়ে গেল; চক্র চলতে থাকে।`,
        },
      };
    }
    case 'branch': {
      if (s.local.length === 0) {
        return fail(`git switch -c ${action.name}`, 'fatal: no commits yet — branches point at commits', { en: 'Branches are labels ON commits — commit something first.', bn: 'ব্রাঞ্চ হলো কমিটের উপর লেবেল — আগে কমিট করুন।' }, s);
      }
      if (s.localBranches.some((b) => b.name === action.name)) {
        return fail(`git switch -c ${action.name}`, `fatal: branch '${action.name}' already exists`, { en: 'That branch exists — switch to it instead.', bn: 'ব্রাঞ্চটি আছে — বরং সেটাতে সুইচ করুন।' }, s);
      }
      const at = tip(s, s.head!);
      s.localBranches.push({ name: action.name, tip: at });
      s.head = action.name;
      return {
        state: s,
        cmd: `git switch -c ${action.name}`,
        out: `Switched to a new branch '${action.name}'`,
        caption: {
          en: `A branch is just a movable LABEL on ${at}. Creating one costs nothing; HEAD now points at ${action.name}.`,
          bn: `ব্রাঞ্চ হলো ${at}-এর উপর সরণীয় একটি লেবেল মাত্র। বানাতে খরচ শূন্য; HEAD এখন ${action.name}-এ।`,
        },
      };
    }
    case 'switch': {
      if (!s.localBranches.some((b) => b.name === action.name)) {
        return fail(`git switch ${action.name}`, `error: pathspec '${action.name}' did not match any branch`, { en: 'No such local branch.', bn: 'এমন লোকাল ব্রাঞ্চ নেই।' }, s);
      }
      s.head = action.name;
      return {
        state: s,
        cmd: `git switch ${action.name}`,
        out: `Switched to branch '${action.name}'`,
        caption: {
          en: `HEAD now points at ${action.name}. New commits will belong to this branch.`,
          bn: `HEAD এখন ${action.name}-এ। নতুন কমিট এই ব্রাঞ্চের হবে।`,
        },
      };
    }
    case 'merge': {
      const cur = tip(s, s.head!);
      const oth = tip(s, action.name);
      if (!cur || !oth) {
        return fail(`git merge ${action.name}`, 'merge failed: one side has no commits', { en: 'Both branches need commits to merge.', bn: 'মার্জ করতে দুই ব্রাঞ্চেই কমিট লাগবে।' }, s);
      }
      if (cur === oth) {
        return fail(`git merge ${action.name}`, 'Already up to date.', { en: 'Nothing to merge — the histories are identical.', bn: 'মার্জের কিছু নেই — ইতিহাস একই।' }, s);
      }
      s.counter += 1;
      const id = `c${s.counter}`;
      s.local.push({ id, branch: s.head!, msg: `Merge branch '${action.name}'`, parents: [cur, oth] });
      setTip(s, s.head!, id);
      return {
        state: s,
        cmd: `git merge ${action.name}`,
        out: `Merge made by the 'ort' strategy → ${id}`,
        caption: {
          en: `Merge commit ${id} has TWO parents (${cur} + ${oth}) — that is how Git joins two lines of history without losing either.`,
          bn: `মার্জ কমিট ${id}-এর দুইটি parent (${cur} + ${oth}) — এভাবেই Git দুই ইতিহাস কোনোটাই না হারিয়ে জোড়া দেয়।`,
        },
      };
    }
    case 'push': {
      if (s.local.length === 0) {
        return fail('git push origin main', 'error: src refspec main does not match any', { en: 'Nothing to push until you commit.', bn: 'কমিট না করলে পুশ করার কিছু নেই।' }, s);
      }
      let pushed = 0;
      const missing = s.local.filter((c) => !s.remote.some((r) => r.id === c.id));
      pushed = missing.length;
      s.remote.push(...missing);
      for (const b of s.localBranches) {
        const rb = s.remoteBranches.find((x) => x.name === b.name);
        if (rb) rb.tip = b.tip;
        else s.remoteBranches.push({ name: b.name, tip: b.tip });
      }
      return {
        state: s,
        cmd: 'git push origin --all',
        out: pushed === 0 ? 'Everything up-to-date' : `${pushed} commit(s) → origin`,
        caption: {
          en: pushed === 0
            ? 'The remote already has your history — nothing travelled.'
            : 'Your commits were COPIED to the remote. Local and remote are separate stores of the same history.',
          bn: pushed === 0
            ? 'রিমোটে আপনার ইতিহাস আগেই আছে — কিছু যায়নি।'
            : 'আপনার কমিটগুলো রিমোটে কপি হলো। লোকাল আর রিমোট — একই ইতিহাসের দুটি আলাদা ভাণ্ডার।',
        },
      };
    }
    case 'teammate': {
      s.remoteCounter += 1;
      const id = `r${s.remoteCounter}`;
      const parent = tip(s, 'main', true);
      s.remote.push({ id, branch: 'main', msg: `teammate work #${s.remoteCounter}`, parents: parent ? [parent] : [] });
      const rb = s.remoteBranches.find((b) => b.name === 'main');
      if (rb) rb.tip = id;
      else s.remoteBranches.push({ name: 'main', tip: id });
      return {
        state: s,
        cmd: '# (a teammate runs: git push)',
        out: `remote: main → ${id}`,
        caption: {
          en: 'Someone else pushed. Your local copy is now BEHIND — this is what pull exists for.',
          bn: 'অন্য কেউ পুশ করেছে। আপনার লোকাল কপি এখন পিছিয়ে — pull এর জন্যই আছে।',
        },
      };
    }
    case 'pull': {
      if (s.remote.length === 0) {
        return fail('git pull', 'There is no tracking information for the current branch', { en: 'No remote branch yet — push first, or wait for a teammate.', bn: 'রিমোট ব্রাঞ্চ এখনো নেই — আগে পুশ করুন, নয়তো সতীর্থের জন্য অপেক্ষা।' }, s);
      }
      const remoteTip = tip(s, 'main', true);
      const localTip = tip(s, 'main');
      if (remoteTip === localTip) {
        return fail('git pull', 'Already up to date.', { en: 'Your history already includes the remote one.', bn: 'আপনার ইতিহাস রিমোটটিকে আগেই ধারণ করে।' }, s);
      }
      const missing = s.remote.filter((c) => !s.local.some((l) => l.id === c.id));
      s.local.push(...missing);
      if (s.localBranches.some((b) => b.name === 'main')) setTip(s, 'main', remoteTip);
      else s.localBranches.push({ name: 'main', tip: remoteTip });
      return {
        state: s,
        cmd: 'git pull origin main',
        out: `Updating ${localTip ?? '·'}..${remoteTip} — fast-forward, ${missing.length} commit(s)`,
        caption: {
          en: 'Remote commits downloaded (fetch) and your branch label moved to catch up (merge/fast-forward). Two steps in one command.',
          bn: 'রিমোট কমিট নেমে এলো (fetch) আর আপনার ব্রাঞ্চ লেবেল সামনে সরে গেল (merge/fast-forward)। এক কমান্ডে দুই ধাপ।',
        },
      };
    }
    case 'reset': {
      return {
        state: initialGitState(),
        cmd: '# reset simulation',
        out: 'simulation cleared',
        caption: { en: 'Fresh state — run git init to start again.', bn: 'নতুন অবস্থা — আবার শুরু করতে git init চালান।' },
      };
    }
    default:
      return fail('', 'unknown action', { en: 'Unknown action.', bn: 'অজানা অ্যাকশন।' }, s);
  }
}

export const BRANCH_COLORS = ['var(--accent)', 'var(--accent-2)', 'var(--ok)', 'var(--warn)', 'var(--err)'];

export function branchColor(name: string, names: string[]): string {
  const i = Math.max(0, names.indexOf(name));
  return BRANCH_COLORS[i % BRANCH_COLORS.length];
}
