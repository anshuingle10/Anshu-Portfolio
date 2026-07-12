import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/components/layout/Layout';
import Home from '@/pages/Home';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        // Future page routes (e.g. Projects, Experience, Blog) can be added here
      ],
    },
  ],
  {
    basename: '/Anshu-Portfolio',
  }
);
