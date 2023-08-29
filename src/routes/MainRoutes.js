import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/management/dashboard')));
const UserRegister = Loadable(lazy(() => import('views/registers/userRegister')));
const Frequency = Loadable(lazy(() => import('views/management/frequency')));

// sample page routing
const SamplePage = Loadable(lazy(() => import('views/reports')));

const ProtectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('user_token');
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return element;
};

const MainRoutes = {
  path: '/',
  element: <ProtectedRoute element={<MainLayout />} />,
  children: [
    {
      path: '/',
      children: [
        {
          path: '',
          element: <Navigate to="/dashboard" />
        },
        {
          path: 'dashboard',
          element: <Dashboard />
        },
        {
          path: 'usuarios/cadastro',
          element: <UserRegister />
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

ProtectedRoute.propTypes = {
  element: PropTypes.node
};

export default MainRoutes;
