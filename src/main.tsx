import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { I18nProvider } from './lib/i18n.tsx';
import { ThemeProvider } from './lib/theme.tsx';
import { ProgressProvider } from './lib/progress.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <I18nProvider>
        <ProgressProvider>
          <App />
        </ProgressProvider>
      </I18nProvider>
    </ThemeProvider>
  </StrictMode>,
);
