import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { GlobalStyle } from './globalStyle.ts';
import { RouterProvider } from 'react-router-dom';
import { routes } from './routes.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
    <GlobalStyle />
  </StrictMode>
);
