import { createBrowserRouter } from 'react-router-dom';

import LayoutPublic from '../layout/LayoutPublic';

import Home from '../pages/Home';
import About from '../pages/About';
import Location from '../pages/Location';
import Careers from '../pages/Careers';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/location',
        element: <Location />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
    ],
  },
]);
