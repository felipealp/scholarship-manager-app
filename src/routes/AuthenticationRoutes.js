import { lazy } from 'react';

// project imports
import Loadable from 'components/Loadable';
import MinimalLayout from 'layout/MinimalLayout';

// login option 3 routing
const AuthLogin3 = Loadable(lazy(() => import('views/authentication/login')));
const AuthRegister3 = Loadable(lazy(() => import('views/authentication/register')));

// ==============================|| AUTHENTICATION ROUTING ||============================== //

const AuthenticationRoutes = {
  path: '/',
  element: <MinimalLayout />,
  children: [
    {
      path: '/autenticacao/login',
      element: <AuthLogin3 />
    },
    {
      path: '/autenticacao/register',
      element: <AuthRegister3 />
    }
  ]
};

export default AuthenticationRoutes;
