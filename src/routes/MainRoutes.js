import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// project imports
import MainLayout from 'layout/MainLayout';
import Loadable from 'components/Loadable';

const Campus = Loadable(lazy(() => import('views/management/campus')));
// const Campus = Loadable(lazy(() => import('views/management/campus')));
// const Campus = Loadable(lazy(() => import('views/management/campus')));
// const Campus = Loadable(lazy(() => import('views/management/campus')));
// const Campus = Loadable(lazy(() => import('views/management/campus')));

// registers routing
const CampusRegister = Loadable(lazy(() => import('views/registers/campusRegister')));
const ProjectRegister = Loadable(lazy(() => import('views/registers/projectRegister')));
const UserRegister = Loadable(lazy(() => import('views/registers/userRegister')));
const Frequency = Loadable(lazy(() => import('views/management/frequency')));

// dashboard routing
const Dashboard = Loadable(lazy(() => import('views/management/dashboard')));

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
        }
      ]
    },
    {
      path: 'campus',
      element: <Campus />
    },
    {
      path: 'projetos',
      element: <Campus />
    },
    {
      path: 'bolsistas',
      element: <Campus />
    },
    {
      path: 'coordenadores',
      element: <Campus />
    },
    {
      path: 'pro-reitores',
      element: <Campus />
    },
    {
      path: 'cadastro-de-campus',
      element: <CampusRegister />
    },
    {
      path: 'cadastro-de-projeto',
      element: <ProjectRegister />
    },
    {
      path: 'cadastro-de-usuario',
      children: [
        {
          path: '',
          element: <UserRegister />
        },
        {
          path: ':tipo',
          element: <UserRegister />
        }
      ]
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
