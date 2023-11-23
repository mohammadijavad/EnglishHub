import React, { Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routePath } from './index';
const Landing = React.lazy(() => import('../components/Layout/Landing'));
const About = React.lazy(() => import('../pages/About/About'));
const Concat = React.lazy(() => import('../pages/Concat/Concat'));
const Login = React.lazy(() => import('../pages/Login/Login'));
export const providerRoute = createBrowserRouter([
  {
    path: '/',
    element: <Landing />,
    children: [
      {
        path: '/harchi',
        element: <About />,
      },
      {
        path: routePath.concat,
        element: <Concat />,
      },
    ],
  },
  {
    path: routePath.login,
    element: <Login />,
  },
]);
