import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login components
const Login = Loadable(lazy(() => import('views/authentication/login')));
const Register = Loadable(lazy(() => import('views/authentication/register')));

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
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
