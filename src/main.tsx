import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App.tsx';
import TrainingPage from './pages/TrainingPage.tsx';
import TrilhaPage from './pages/TrilhaPage.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/treinamento/:id" element={<TrainingPage />} />
        <Route path="/trilha" element={<TrilhaPage />} />
        <Route path="/trilha/:id" element={<TrilhaPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
