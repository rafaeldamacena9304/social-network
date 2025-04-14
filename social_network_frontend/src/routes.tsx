import { createBrowserRouter } from 'react-router-dom';
import { FeedPage } from './pages/Feed';
import { LoginPage } from './pages/Login';
import { UserProfilePage } from './pages/UserProfile';
import { UserRegisterPage } from './pages/Register';

export const routes = createBrowserRouter([
  { path: '/', element: <FeedPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/user_profile/:username', element: <UserProfilePage /> },
  { path: '/register', element: <UserRegisterPage /> },
]);
