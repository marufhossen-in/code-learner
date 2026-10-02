/** Shared content & registry types for the CodeShikhon platform. */

export type Lang = 'en' | 'bn';

/** A bilingual text pair. All educational content uses this shape. */
export interface LText {
  en: string;
  bn: string;
  [key: string]: any;
}

export type Difficulty = 'beginner' | 'intermediate' | 'advanced' | string;
export type TechStatus = 'available' | 'planned';

export interface Technology {
  slug: string;
  name: string;
  icon: string;
  cat: string;
  diff: Difficulty;
  status: TechStatus;
  en: string;
  bn: string;
  prereq?: string[];
  [key: string]: any;
}

export interface Category {
  id: string;
  icon: string;
  en: string;
  bn: string;
}

/* ---------- lesson content blocks (content engine) ---------- */

/** Cell/label that may be authored as a plain English string (legacy lessons) or a full LText. */
export type BText = string | LText;

/** Chip colorations for table cells ("cell coloring instead of a narrative forest") and for
 * quiz examinee chips: ok/warn/err for verdicts; stay (LEAN_STAY), hit, off (LEAN_OFF), heal,
 * flip, miss, band, last for beam/ledger masters. */
export type CellKind = 'ok' | 'warn' | 'err' | 'stay' | 'hit' | 'off' | 'heal' | 'flip' | 'miss' | 'band' | 'last';

/** Rich table text: full text with an optional status chip (`k`), caller-tailwind (`cls`) and
 * an optional tiny `badge` (count/proximity-like marks such as (↷30) / (2/16) — text, not chips). */
export type TableCellText =
  | string
  | LText
  | { s: string; k?: CellKind; cls?: string; badge?: LText };

export type Block =
  | { type: 'heading'; id?: string; text?: LText; title?: LText; [key: string]: any }
  | { type: 'para'; text: LText; [key: string]: any }
  | { type: 'code'; id?: string; lang?: string; code: string; filename?: string; caption?: LText; lineCls?: Record<number, string>; callout?: string | LText; [key: string]: any }
  | { type: 'list'; ordered?: boolean; items: LText[]; [key: string]: any }
  | { type: 'callout'; kind?: 'info' | 'tip' | 'warn' | 'mistake' | 'warning' | string; variant?: string; title?: LText; text: LText; [key: string]: any }
  | { type: 'keyterms'; items: { term?: string; name?: string; def?: LText; desc?: LText; [key: string]: any }[]; [key: string]: any }
  | {
      type: 'table';
      head: TableCellText[];
      rows: TableCellText[][];
      caption?: LText;
      captionText?: LText;
      emptyShell?: LText;
      footnotes?: LText[];
      srOnlyHead?: LText;
      align?: ('l' | 'c' | 'r')[];
      tighten?: boolean;
      sumRows?: (number | '.')[];
      sumCols?: Record<string, number[]>;
      [key: string]: any;
    }
  | { type: 'compare'; title?: LText; left: { title: LText; points: LText[] }; right: { title: LText; points: LText[] }; [key: string]: any }
  | { type: 'steps'; items?: { title: LText; text: LText }[]; steps?: any; [key: string]: any }
  | { type: 'tryit'; title?: LText; description?: LText | string; html?: string; css?: string; js?: string; code?: string; tests?: any; [key: string]: any }
  | { type: 'diagram'; id?: string; svg: string; title?: LText; caption?: LText; [key: string]: any }
  | { type: 'visual'; id?: string; scenario?: string; title?: LText; caption?: LText; data?: any; [key: string]: any }
  | { type: 'takeaways'; items?: any[]; [key: string]: any }
  | { type: 'terminal'; [key: string]: any };

export interface Exercise {
  id?: string;
  kind?: 'mcq' | 'fill' | 'predict' | string;
  topic?: string;
  question: LText;
  code?: string;
  options?: (string | LText | { en?: string; bn?: string } | any)[];
  answer: number | string;
  accept?: string[];
  hint: LText;
  explanation: LText;
  solution?: string;
  reported?: LText;
  arms?: { ctx?: LText; sols?: boolean | null }[];
  solutionLines?: { ctx?: string; text: LText }[];
}

export interface QuizQuestion extends Exercise {
  loc?: string;
}

export interface Quiz {
  id?: string;
  title: LText;
  questions: QuizQuestion[];
  box?: number;
  examinee?: ('✓' | 'x' | '✗')[];
}

export interface Lesson {
  slug: string;
  tech: string;
  title: LText;
  summary: LText;
  minutes: number;
  blocks: Block[];
  exercises: Exercise[];
  quiz: Quiz;
  next?: { slug: string; title: LText; tech?: string } | null;
  nextLesson?: { slug: string; tech?: string; title: LText } | null;
}

export interface RefMethod {
  name: string;
  signature?: string;
  params?: LText | string;
  returns?: LText | string;
  example?: string;
  mistake?: LText;
  related?: string[];
  company?: string;
  practices?: string[];
  [key: string]: any;
}

export interface RefGroup {
  group: string | LText;
  methods?: RefMethod[];
  items?: { term?: string; name?: string; def?: LText; desc?: LText; [key: string]: any }[];
  [key: string]: any;
}

export interface RoadmapEntry {
  title: LText;
  items?: (LText | string | { title?: LText; text?: LText; desc?: LText; en?: string; bn?: string } | any)[];
  stage?: number;
  detail?: LText;
  [key: string]: any;
}

export interface ProjectEntry {
  title: LText;
  diff?: Difficulty | LText | any;
  desc?: LText;
  description?: LText;
  difficulty?: Difficulty | LText | any;
  brief?: LText;
  id?: string;
  topics?: string[];
  [key: string]: any;
}

export interface Hub {
  slug: string;
  name: string;
  icon: string;
  tagline: LText;
  about?: LText;
  intro?: LText;
  roadmap: RoadmapEntry[];
  lessons: Lesson[];
  reference?: RefGroup[];
  references?: RefGroup[];
  projects: ProjectEntry[];
  bestPractices: (LText | string | any)[];
  interview: { q: LText; a: LText }[];
  realWorld: (LText | string | any)[];
  [key: string]: any;
}

export type TechHub = Hub;

export interface GlossaryTerm {
  term: string;
  en: string;
  bn: string;
  simpleEn: string;
  simpleBn: string;
  techEn: string;
  techBn: string;
  example?: string;
  related: string[];
  link?: { to: string; en: string; bn: string };
  [key: string]: any;
}
