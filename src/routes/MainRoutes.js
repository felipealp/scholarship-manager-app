import { lazy } from 'react';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// dashboard routing
const DashboardDefault = Loadable(lazy(() => import('views/management/dashboard')));
const Frequency = Loadable(lazy(() => import('views/management/frequency')));

// utilities routing

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/reports')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      children: [
        {
          path: 'dashboard',
          element: <DashboardDefault />
        },
        {
          path: 'frequencia',
          children: [
            {
              path: '',
              element: <Frequency />
            },
            {
              path: ':mes',
              element: <Frequency />
            }
          ]
        }
      ]
    },
    {
      path: 'relatorios',
      element: <SamplePage />
    }
  ]
};

export default MainRoutes;
