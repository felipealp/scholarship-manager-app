import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const Login = Loadable(lazy(() => import('views/authentication/login')));
const Register = Loadable(lazy(() => import('views/authentication/register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: 'autenticacao',
      children: [
        {
          path: '',
          element: <Login />
        },
        {
          path: 'cadastro',
          element: <Register />
        }
      ]
    }
  ]
};

export default AuthenticationRoutes;
