import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login components
const Login = Loadable(lazy(() => import('views/authentication/login')));

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
