import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import type { ReactNode } from 'react';
import type { LText } from './types';

const LS_KEY = 'csh.progress.v1';

export interface RecentItem {
  path: string;
  kind: 'lesson' | 'lab' | 'page';
  title: LText;
  at: number;
}

interface ProgressData {
  lessons: string[];
  exercises: Record<string, boolean>;
  quizzes: Record<string, { score: number; total: number }>;
  debugPoints: Record<string, number>;
  recent: RecentItem[];
  days: string[];
}

interface ProgressCtx extends ProgressData {
  completeLesson: (id: string, meta: { path: string; title: LText }) => void;
  isLessonDone: (id: string) => boolean;
  markExercise: (id: string, correct: boolean) => void;
  recordQuiz: (id: string, score: number, total: number) => void;
  solveDebug: (id: string, points: number) => void;
  pushRecent: (item: Omit<RecentItem, 'at'>) => void;
  doneCount: (ids: string[]) => number;
  streak: number;
  bestQuiz: { score: number; total: number } | null;
  debugTotal: number;
}

const Ctx = createContext<ProgressCtx | null>(null);

const EMPTY: ProgressData = { lessons: [], exercises: {}, quizzes: {}, debugPoints: {}, recent: [], days: [] };

function load(): ProgressData {
  try {
    const raw = localStorage.getItem(LS_KEY);
    if (raw) return { ...EMPTY, ...(JSON.parse(raw) as ProgressData) };
  } catch { /* ignore */ }
  return EMPTY;
}

function save(d: ProgressData) {
  try { localStorage.setItem(LS_KEY, JSON.stringify(d)); } catch { /* ignore */ }
}

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

export function ProgressProvider({ children }: { children: ReactNode }) {
  const [data, setData] = useState<ProgressData>(load);

  const touch = useCallback((fn: (d: ProgressData) => ProgressData) => {
    setData((prev) => {
      const withDay: ProgressData = prev.days.includes(todayKey())
        ? prev
        : { ...prev, days: [...prev.days, todayKey()] };
      const next = fn(withDay);
      save(next);
      return next;
    });
  }, []);

  const completeLesson = useCallback(
    (id: string, meta: { path: string; title: LText }) =>
      touch((d) => ({
        ...d,
        lessons: d.lessons.includes(id) ? d.lessons : [...d.lessons, id],
        recent: [
          { path: meta.path, title: meta.title, kind: 'lesson' as const, at: Date.now() },
          ...d.recent.filter((r) => r.path !== meta.path),
        ].slice(0, 8),
      })),
    [touch],
  );

  const markExercise = useCallback(
    (id: string, correct: boolean) =>
      touch((d) => ({ ...d, exercises: { ...d.exercises, [id]: correct } })),
    [touch],
  );

  const recordQuiz = useCallback(
    (id: string, score: number, total: number) =>
      touch((d) => {
        const prev = d.quizzes[id];
        if (prev && prev.score >= score) return d;
        return { ...d, quizzes: { ...d.quizzes, [id]: { score, total } } };
      }),
    [touch],
  );

  const solveDebug = useCallback(
    (id: string, points: number) =>
      touch((d) => {
        const prev = d.debugPoints[id];
        if (prev && prev >= points) return d;
        return { ...d, debugPoints: { ...d.debugPoints, [id]: points } };
      }),
    [touch],
  );

  const pushRecent = useCallback(
    (item: Omit<RecentItem, 'at'>) =>
      touch((d) => ({
        ...d,
        recent: [{ ...item, at: Date.now() }, ...d.recent.filter((r) => r.path !== item.path)].slice(0, 8),
      })),
    [touch],
  );

  const value = useMemo<ProgressCtx>(() => {
    const sorted = [...data.days].sort().reverse();
    let streak = 0;
    const day = 24 * 3600 * 1000;
    let cursor = new Date(todayKey()).getTime();
    // allow streak to count if most recent activity was yesterday
    if (sorted.length > 0 && new Date(sorted[0]).getTime() < cursor) cursor -= day;
    for (const k of sorted) {
      if (Math.abs(new Date(k).getTime() - cursor) < day / 2) {
        streak += 1;
        cursor -= day;
      } else if (new Date(k).getTime() < cursor - day / 2) {
        break;
      }
    }
    const bests = Object.values(data.quizzes);
    return {
      ...data,
      completeLesson,
      isLessonDone: (id) => data.lessons.includes(id),
      markExercise,
      recordQuiz,
      solveDebug,
      pushRecent,
      doneCount: (ids) => ids.filter((i) => data.exercises[i]).length,
      streak,
      bestQuiz: bests.length ? bests.reduce((a, b) => (a.score / a.total >= b.score / b.total ? a : b)) : null,
      debugTotal: Object.values(data.debugPoints).reduce((a, b) => a + b, 0),
    };
  }, [data, completeLesson, markExercise, recordQuiz, solveDebug, pushRecent]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useProgress(): ProgressCtx {
  const v = useContext(Ctx);
  if (!v) throw new Error('useProgress must be used inside <ProgressProvider>');
  return v;
}
