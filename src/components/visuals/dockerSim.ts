import type { LText } from '../../lib/types';

/** Pure Docker simulation logic (Section 11) — build cache, layers, containers. */

export interface ParsedInstruction {
  op: string;
  arg: string;
  raw: string;
}
export interface Layer {
  instruction: string;
  size: number; // MB
  cached: boolean;
}
export interface Image {
  id: string;
  name: string; // repo:tag
  layers: Layer[];
}
export interface Container {
  id: string;
  name: string;
  image: string;
  status: 'running' | 'exited';
  port: string | null;
  volume: boolean;
}
export interface DockerState {
  images: Image[];
  containers: Container[];
  counter: number;
  nameCounter: number;
}

export type DockerAction =
  | { type: 'build'; lines: string[]; name: string }
  | { type: 'run'; image?: string; withVolume?: boolean }
  | { type: 'stop'; id: string }
  | { type: 'start'; id: string }
  | { type: 'rm'; id: string }
  | { type: 'rmi'; id: string }
  | { type: 'reset' };

export interface DockerResult {
  state: DockerState;
  cmd: string;
  out: string[];
  caption: LText;
  ok: boolean;
}

export function initialDockerState(): DockerState {
  return { images: [], containers: [], counter: 0, nameCounter: 0 };
}

export const VALID_OPS = ['FROM', 'WORKDIR', 'COPY', 'ADD', 'RUN', 'ENV', 'ARG', 'EXPOSE', 'ENTRYPOINT', 'CMD', 'USER', 'VOLUME'];

export const DEFAULT_DOCKERFILE = [
  'FROM node:alpine',
  'WORKDIR /app',
  'COPY package.json .',
  'RUN npm install',
  'COPY src ./src',
  'EXPOSE 3000',
  'CMD ["node", "src/app.js"]',
].join('\n');

export function parseDockerfile(text: string): { ok: ParsedInstruction[]; errors: string[] } {
  const ok: ParsedInstruction[] = [];
  const errors: string[] = [];
  const lines = text.split('\n');
  lines.forEach((line, i) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return;
    const space = trimmed.indexOf(' ');
    const op = (space === -1 ? trimmed : trimmed.slice(0, space)).toUpperCase();
    const arg = space === -1 ? '' : trimmed.slice(space + 1).trim();
    if (!VALID_OPS.includes(op)) {
      errors.push(`dockerfile: unknown instruction on line ${i + 1}: ${op}`);
      return;
    }
    if (!arg && op !== 'CMD') {
      errors.push(`dockerfile: ${op} requires at least one argument (line ${i + 1})`);
      return;
    }
    ok.push({ op, arg, raw: trimmed });
  });
  if (errors.length === 0 && ok.length === 0) errors.push('dockerfile: file is empty — nothing to build');
  else if (errors.length === 0 && ok[0].op !== 'FROM') errors.push(`dockerfile: first instruction must be FROM (got ${ok[0].op})`);
  return { ok, errors };
}

function hash(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 100000;
  return h;
}

function layerSize(ins: ParsedInstruction): number {
  switch (ins.op) {
    case 'FROM': return 128;
    case 'WORKDIR': case 'ENV': case 'ARG': case 'EXPOSE': case 'CMD': case 'ENTRYPOINT': case 'USER': case 'VOLUME': return 0;
    case 'COPY': case 'ADD': return 2 + (hash(ins.arg) % 8);
    case 'RUN': return 12 + (hash(ins.arg) % 40);
    default: return 0;
  }
}

export const NAME_POOL = ['nifty_bohr', 'brave_turing', 'calm_lovelace', 'jolly_fermi', 'swift_curie', 'proud_hopper', 'eager_euler', 'quiet_pike'];

function fail(cmd: string, out: string[], caption: LText, state: DockerState): DockerResult {
  return { state, cmd, out, caption, ok: false };
}

export function dockerReducer(prev: DockerState, action: DockerAction): DockerResult {
  const s: DockerState = structuredClone(prev);

  switch (action.type) {
    case 'build': {
      const name = action.name || 'myapp:latest';
      const { ok, errors } = parseDockerfile(action.lines.join('\n'));
      if (errors.length > 0) {
        return fail(`docker build -t ${name} .`, ['Sending build context to Docker daemon...', ...errors, 'The command failed.'], {
          en: 'Real builds fail exactly like this — fix the Dockerfile and retry.',
          bn: 'আসল বিল্ডও ঠিক এভাবেই ব্যর্থ হয় — Dockerfile ঠিক করে আবার চেষ্টা করুন।',
        }, s);
      }
      // Cache: compare instructions with the latest existing image.
      const prevLayers = s.images.length > 0 ? s.images[s.images.length - 1].layers.map((l) => l.instruction) : [];
      const out: string[] = ['Sending build context to Docker daemon... 2.4kB'];
      let cacheBusted = s.images.length === 0; // first build: no cache at all
      const layers: Layer[] = ok.map((ins, i) => {
        const hit = !cacheBusted && prevLayers[i] === ins.raw;
        if (!hit) cacheBusted = true;
        out.push(`Step ${i + 1}/${ok.length} : ${ins.raw}`, hit ? ' ---> Using cache' : ` ---> Running in ${(hash(ins.raw) % 900 + 100).toString(16)}`);
        return { instruction: ins.raw, size: layerSize(ins), cached: hit };
      });
      s.counter += 1;
      const id = `img${s.counter}`;
      s.images = s.images.filter((im) => im.name !== name);
      s.images.push({ id, name, layers });
      out.push(`Successfully built ${id}`, `Successfully tagged ${name}`);
      const cachedCount = layers.filter((l) => l.cached).length;
      return {
        state: s,
        cmd: `docker build -t ${name} .`,
        out,
        caption: {
          en: cachedCount === layers.length
            ? `Every instruction hit the CACHE — rebuild took ~0s. Layers only rebuild from the FIRST changed line downward.`
            : cachedCount > 0
              ? `${cachedCount}/${layers.length} layers from cache; everything below the first change rebuilt. Put stable lines (FROM, deps) at the TOP.`
              : `Fresh build: ${layers.length} layers stacked into image ${name}. Rebuild without changes to see the cache work.`,
          bn: cachedCount === layers.length
            ? `সব ইনস্ট্রাকশন ক্যাশে পাওয়া গেছে — রিবিল্ড ~০ সেকেন্ড! প্রথম বদলে যাওয়া লাইন থেকে নিচের সব লেয়ার নতুন করে বানে।`
            : cachedCount > 0
              ? `${layers.length}টি লেয়ারের ${cachedCount}টি ক্যাশ থেকে; প্রথম পরিবর্তনের নিচের সব নতুন করে বানল। স্থির লাইনগুলো (FROM, ডিপেনডেন্সি) উপরে রাখুন।`
              : `নতুন বিল্ড: ${layers.length}টি লেয়ার স্তূপ হয়ে ${name} ইমেজ বানাল। অপরিবর্তিত রেখে রিবিল্ড করলে ক্যাশের জাদু দেখবেন।`,
        },
        ok: true,
      };
    }
    case 'run': {
      if (s.images.length === 0) {
        return fail('docker run myapp', ['Unable to find image locally'], {
          en: 'No image yet — build one first (text → image → container).',
          bn: 'ইমেজ এখনো নেই — আগে বিল্ড করুন (টেক্সট → ইমেজ → কন্টেইনার)।',
        }, s);
      }
      const img = action.image ? s.images.find((im) => im.name === action.image || im.id === action.image) : s.images[s.images.length - 1];
      if (!img) {
        return fail('docker run', [`Error: No such image: ${action.image}`], { en: 'That image does not exist.', bn: 'এই ইমেজ নেই।' }, s);
      }
      const expose = img.layers.map((l) => l.instruction).find((raw) => raw.startsWith('EXPOSE'));
      const port = expose ? expose.split(/\s+/)[1] : null;
      s.counter += 1;
      const c: Container = {
        id: `ctr${s.counter}`,
        name: NAME_POOL[s.nameCounter % NAME_POOL.length],
        image: img.name,
        status: 'running',
        port: port ? `${port}:${port}` : null,
        volume: !!action.withVolume,
      };
      s.nameCounter += 1;
      s.containers.push(c);
      return {
        state: s,
        cmd: `docker run -d --name ${c.name}${port ? ` -p ${c.port}` : ''}${c.volume ? ' -v $(pwd)/data:/app/data' : ''} ${img.name}`,
        out: [c.id],
        caption: {
          en: `A container is a RUNNING instance of ${img.name} — the read-only image plus a thin writable top layer. Same image → many containers.`,
          bn: `কন্টেইনার হলো ${img.name} ইমেজের চলমান ইনস্ট্যান্স — read-only ইমেজের উপর পাতলা writable লেয়ার। একই ইমেজ থেকে বহু কন্টেইনার।`,
        },
        ok: true,
      };
    }
    case 'stop': {
      const c = s.containers.find((x) => x.id === action.id);
      if (!c || c.status === 'exited') return fail(`docker stop ${action.id}`, ['No such running container'], { en: 'Already stopped.', bn: 'আগেই বন্ধ।' }, s);
      c.status = 'exited';
      return {
        state: s,
        cmd: `docker stop ${c.name}`,
        out: [c.name],
        caption: {
          en: 'The main process received SIGTERM; the filesystem is KEPT — that is why exited containers still appear in ps -a.',
          bn: 'মূল প্রসেস SIGTERM পেল; ফাইলসিস্টেম থেকে গেছে — এইজন্যই exited কন্টেইনারও ps -a-তে দেখা যায়।',
        },
        ok: true,
      };
    }
    case 'start': {
      const c = s.containers.find((x) => x.id === action.id);
      if (!c || c.status === 'running') return fail(`docker start ${action.id}`, ['Already running'], { en: 'Already running.', bn: 'আগেই চলছে।' }, s);
      c.status = 'running';
      return {
        state: s,
        cmd: `docker start ${c.name}`,
        out: [c.name],
        caption: { en: 'Same container, back to life — its writable layer was preserved.', bn: 'সেই একই কন্টেইনার আবার জীবিত — writable লেয়ার অক্ষত ছিল।' },
        ok: true,
      };
    }
    case 'rm': {
      const c = s.containers.find((x) => x.id === action.id);
      if (!c) return fail('docker rm', ['No such container'], { en: 'No such container.', bn: 'এমন কন্টেইনার নেই।' }, s);
      if (c.status === 'running') {
        return fail(`docker rm ${c.name}`, [`Error response from daemon: cannot remove container "${c.name}": container is running: stop the container before removing`], {
          en: 'Docker refuses — stop it first. (Docker protects you from losing a live process.)',
          bn: 'Docker রাজি হলো না — আগে থামান। (চলমান প্রসেস হারানো থেকে Docker আপনাকে রক্ষা করে।)',
        }, s);
      }
      s.containers = s.containers.filter((x) => x.id !== action.id);
      return {
        state: s,
        cmd: `docker rm ${c.name}`,
        out: [c.name],
        caption: { en: 'Writable layer deleted — the image underneath is untouched.', bn: 'Writable লেয়ার মুছে গেল — নিচের ইমেজ অক্ষত।' },
        ok: true,
      };
    }
    case 'rmi': {
      const img = s.images.find((im) => im.id === action.id);
      if (!img) return fail('docker rmi', ['No such image'], { en: 'No such image.', bn: 'এমন ইমেজ নেই।' }, s);
      if (s.containers.some((c) => c.image === img.name)) {
        return fail(`docker rmi ${img.name}`, [`Error: conflict — unable to remove: image is being used by a container`], {
          en: 'Remove the containers first; images are protected while in use.',
          bn: 'আগে কন্টেইনারগুলো সরান; ব্যবহারের সময় ইমেজ সুরক্ষিত থাকে।',
        }, s);
      }
      s.images = s.images.filter((im) => im.id !== action.id);
      return {
        state: s,
        cmd: `docker rmi ${img.name}`,
        out: [`Untagged: ${img.name}`, `Deleted: ${img.id}`],
        caption: { en: 'The layer stack is gone — that disk space is reclaimed.', bn: 'লেয়ার স্তূপ শেষ — ডিস্কের জায়গা ফেরত পাওয়া গেল।' },
        ok: true,
      };
    }
    case 'reset': {
      return {
        state: initialDockerState(),
        cmd: '# reset simulation',
        out: ['simulation cleared'],
        caption: { en: 'Fresh state — build an image to start again.', bn: 'নতুন অবস্থা — আবার শুরু করতে ইমেজ বিল্ড করুন।' },
        ok: true,
      };
    }
    default:
      return fail('', ['unknown action'], { en: 'Unknown action.', bn: 'অজানা অ্যাকশন।' }, s);
  }
}
