import { auth as requestAuth } from 'services/request';

const sessionStorage = (token) => {
  localStorage.setItem('user_token', token);
  // requisitar whoami
  // localStorage.setItem('user_type', 'reitor');
};

const authentication = async (data) => {
  const auth = await requestAuth({ username: data.login, password: data.password });

  if (auth.data) {
    sessionStorage(auth.data);
    return auth.data;
  } else if (auth.error.message) {
    throw new Error(auth.error.message);
  }

  return auth;
};

const logout = () => {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_type');
  location.reload();
};

export { authentication, logout };
