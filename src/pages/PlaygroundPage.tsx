import { useEffect } from 'react';
import { useI18n } from '../lib/i18n';
import { useProgress } from '../lib/progress';
import { EditorLite } from '../components/EditorLite';

export default function PlaygroundPage() {
  const { T, ui } = useI18n();
  const { pushRecent } = useProgress();

  useEffect(() => {
    pushRecent({ path: '/playground', kind: 'lab', title: { en: 'Code Playground', bn: 'কোড প্লেগ্রাউন্ড' } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="mx-auto max-w-350">
      <header className="mb-4">
        <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">⚡ {ui('nav.playground')}</h1>
        <p className="mt-1 text-muted">
          {T({
            en: 'Write HTML, CSS and JavaScript. Press Run. Break things safely.',
            bn: 'HTML, CSS, JavaScript লিখুন। Run চাপুন। নিরাপদে ভেঙে ফেলুন।',
          })}
        </p>
      </header>
      <EditorLite />
    </div>
  );
}
