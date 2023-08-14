import { lazy } from 'react';
import { Navigate } from 'react-router-dom';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login components
const Login = Loadable(lazy(() => import('views/authentication/login')));
const Register = Loadable(lazy(() => import('views/authentication/register')));

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
    },
    {
      path: 'cadastro',
      element: <Register />
    }
  ]
};

export default AuthenticationRoutes;
