import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// project imports
import MainLayout from 'layout/mainLayout';
import Loadable from 'components/loadable';

const Campus = Loadable(lazy(() => import('views/management/campus')));
const Project = Loadable(lazy(() => import('views/management/project')));
const Student = Loadable(lazy(() => import('views/management/student')));
const Advisor = Loadable(lazy(() => import('views/management/advisor')));
const Coordinator = Loadable(lazy(() => import('views/management/coordinator')));
const Dean = Loadable(lazy(() => import('views/management/dean')));

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
      element: <Project />
    },
    {
      path: 'bolsistas',
      element: <Student />
    },
    {
      path: 'orientadores',
      element: <Advisor />
    },
    {
      path: 'coordenadores',
      element: <Coordinator />
    },
    {
      path: 'reitores',
      element: <Dean />
    },
    {
      path: 'cadastro-de-campus',
      children: [
        {
          path: '',
          element: <CampusRegister />
        },
        {
          path: ':id',
          element: <CampusRegister />
        }
      ]
    },
    {
      path: 'cadastro-de-projeto',
      children: [
        {
          path: '',
          element: <ProjectRegister />
        },
        {
          path: ':id',
          element: <ProjectRegister />
        }
      ]
    },
    {
      path: 'cadastro-de-usuario',
      children: [
        {
          path: '',
          element: <UserRegister />
        },
        {
          path: ':type',
          children: [
            {
              path: '',
              element: <UserRegister />
            },
            {
              path: ':id',
              element: <UserRegister />
            }
          ]
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
      path: 'pesquisa',
      element: <SamplePage />
    },
    {
      path: 'frequencias',
      element: <SamplePage />
    },
    {
      path: 'relatorios',
      element: <SamplePage />
    },
    {
      path: 'plano-trabalho',
      element: <SamplePage />
    }
  ]
};

ProtectedRoute.propTypes = {
  element: PropTypes.node
};

export default MainRoutes;
