import { lazy, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';

/** Route-level code splitting (Section 44): every page ships as its own chunk. */
const Home = lazy(() => import('./pages/Home'));
const Explore = lazy(() => import('./pages/Explore'));
const TechHub = lazy(() => import('./pages/TechHub'));
const LessonPage = lazy(() => import('./pages/LessonPage'));
const PlaygroundPage = lazy(() => import('./pages/PlaygroundPage'));
const LabsPage = lazy(() => import('./pages/LabsPage'));
const RoadmapsPage = lazy(() => import('./pages/RoadmapsPage'));
const GlossaryPage = lazy(() => import('./pages/GlossaryPage'));
const DebugPage = lazy(() => import('./pages/DebugPage'));

function Fallback() {
  return (
    <div className="flex min-h-64 items-center justify-center" role="status" aria-label="Loading">
      <span className="soft-pulse text-sm text-muted">…</span>
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="learn/:slug" element={<TechHub />} />
            <Route path="learn/:slug/lessons/:lesson" element={<LessonPage />} />
            <Route path="labs" element={<LabsPage />} />
            <Route path="playground" element={<PlaygroundPage />} />
            <Route path="roadmaps" element={<RoadmapsPage />} />
            <Route path="debug" element={<DebugPage />} />
            <Route path="glossary" element={<GlossaryPage />} />
            <Route path="*" element={<TechHub />} />
          </Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
}
