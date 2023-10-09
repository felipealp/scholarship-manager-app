import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

// project imports
import Loadable from 'components/loadable';
import MinimalLayout from 'layout/minimalLayout';

// login components
const Login = Loadable(lazy(() => import('views/authentication')));

const UnprotectedRoute = ({ element }) => {
  const isAuthenticated = localStorage.getItem('user_token');
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return element;
};

const AuthenticationRoutes = {
  path: '/',
  element: <UnprotectedRoute element={<MinimalLayout />} />,
  children: [
    {
      path: 'login',
      element: <Login />
    }
  ]
};

UnprotectedRoute.propTypes = {
  element: PropTypes.node
};

export default AuthenticationRoutes;
