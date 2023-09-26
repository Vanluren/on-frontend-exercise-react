import '@/assets/styles/main.scss';
import router from '@/router';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { QuizProvider } from './contexts/QuizContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QuizProvider>
      <RouterProvider router={router} />
    </QuizProvider>
  </React.StrictMode>,
);
