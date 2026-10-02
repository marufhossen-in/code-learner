import { useEffect, useMemo } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { findLesson, getHub } from '../content';
import { Blocks } from '../components/Blocks';
import { ExerciseCard } from '../components/ExerciseCard';
import { QuizPanel } from '../components/QuizPanel';

export default function LessonPage() {
  const { slug = '', lesson: lessonSlug = '' } = useParams();
  const { T, ui } = useI18n();
  const prog = useProgress();
  const lesson = findLesson(slug, lessonSlug);
  const hub = getHub(slug);

  useEffect(() => {
    if (lesson) {
      prog.pushRecent({
        path: `/learn/${lesson.tech}/lessons/${lesson.slug}`,
        kind: 'lesson',
        title: lesson.title,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lesson?.tech, lesson?.slug]);

  const toc = useMemo(
    () =>
      (lesson?.blocks ?? [])
        .filter((b) => b.type === 'heading')
        .map((b) => (b.type === 'heading' ? { id: b.id, text: b.text } : null))
        .filter((x): x is { id: string; text: { en: string; bn: string } } => x !== null),
    [lesson],
  );

  if (!lesson || !hub) {
    return (
      <div className="mx-auto max-w-2xl py-16 text-center">
        <div className="mb-3 text-4xl" aria-hidden="true">🔍</div>
        <h1 className="text-xl font-bold">{ui('notfound.title')}</h1>
        <p className="mt-2 text-muted">{ui('notfound.body')}</p>
        <Link to={`/learn/${slug}`} className="mt-4 inline-block rounded-xl bg-accent px-5 py-2 font-bold text-onaccent">
          {ui('cta.back')}
        </Link>
      </div>
    );
  }

  const lessonId = `${lesson.tech}/${lesson.slug}`;
  const done = prog.isLessonDone(lessonId);
  const nextLink = lesson.next ?? lesson.nextLesson;
  const exIds = lesson.exercises.map((e) => e.id || '');
  const exDone = prog.doneCount(exIds);

  return (
    <div className="mx-auto grid max-w-350 gap-8 xl:grid-cols-[minmax(0,1fr)_240px]">
      <article className="min-w-0">
        <nav aria-label="breadcrumb" className="mb-3 text-sm text-muted">
          <Link to={`/learn/${hub.slug}`} className="hover:text-accent">
            {hub.icon} {hub.name}
          </Link>
          <span aria-hidden="true"> / </span>
          <span>{T(lesson.title)}</span>
        </nav>

        <header className="mb-6 border-b border-border pb-5">
          <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{T(lesson.title)}</h1>
          <p className="mt-2 max-w-2xl leading-7 text-muted">{T(lesson.summary)}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted">
            <span className="rounded-full bg-elev px-2.5 py-1">⏱ {lesson.minutes} {ui('lesson.minutes')}</span>
            <span className="rounded-full bg-elev px-2.5 py-1">✍️ {lesson.exercises.length} {ui('lesson.exercises')}</span>
            <span className="rounded-full bg-elev px-2.5 py-1">📝 {lesson.quiz.questions.length} {ui('lesson.quiz')}</span>
            {done && <span className="rounded-full bg-ok/15 px-2.5 py-1 font-bold text-ok">{ui('lesson.completed')}</span>}
          </div>
        </header>

        <Blocks blocks={lesson.blocks} />

        <section className="mt-10 border-t border-border pt-6" aria-labelledby="ex-heading">
          <h2 id="ex-heading" className="mb-1 text-xl font-bold">
            ✍️ {ui('lesson.exercises')}
            <span className="ml-2 text-sm font-semibold text-muted">
              {exDone}/{exIds.length} {ui('ex.progress')}
            </span>
          </h2>
          <div className="mt-4 space-y-4">
            {lesson.exercises.map((e, i) => (
              <ExerciseCard key={e.id} ex={e} index={i} total={exIds.length} />
            ))}
          </div>
        </section>

        <section className="mt-10 border-t border-border pt-6" aria-labelledby="quiz-heading">
          <h2 id="quiz-heading" className="mb-4 text-xl font-bold">📝 {ui('lesson.quiz')}</h2>
          <QuizPanel quiz={lesson.quiz} />
        </section>

        <footer className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6">
          <button
            type="button"
            disabled={done}
            onClick={() =>
              prog.completeLesson(lessonId, {
                path: `/learn/${lesson.tech}/lessons/${lesson.slug}`,
                title: lesson.title,
              })
            }
            className={`rounded-xl px-5 py-2.5 font-bold transition ${
              done ? 'cursor-default bg-ok/15 text-ok' : 'bg-accent text-onaccent hover:opacity-90'
            }`}
          >
            {done ? '✓ ' + ui('lesson.completed') : ui('lesson.complete')}
          </button>
          {nextLink && (
            <Link
              to={`/learn/${nextLink.tech ?? lesson.tech}/lessons/${nextLink.slug}`}
              className="rounded-xl border border-border px-5 py-2.5 font-semibold transition hover:border-accent/60"
            >
              {ui('lesson.next')}: {T(nextLink.title)} →
            </Link>
          )}
        </footer>
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-32 rounded-xl border border-border bg-surface p-4">
          <div className="mb-2 text-xs font-bold uppercase tracking-wider text-muted">{ui('lesson.onpage')}</div>
          <ul className="space-y-1.5 text-sm">
            {toc.map((t) => (
              <li key={t.id}>
                <a href={`#${t.id}`} className="text-muted transition hover:text-accent">
                  {T(t.text)}
                </a>
              </li>
            ))}
            <li><a href="#ex-heading" className="text-muted transition hover:text-accent">✍️ {ui('lesson.exercises')}</a></li>
            <li><a href="#quiz-heading" className="text-muted transition hover:text-accent">📝 {ui('lesson.quiz')}</a></li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
