import { auth as requestAuth } from 'services/request';
import { get } from 'services/request';

const sessionStorage = (data) => {
  localStorage.setItem('user_token', data.token);
  localStorage.setItem('user_type', data.user_type);
};

const authentication = async (data) => {
  const requestData = { username: data.login, password: data.password };
  const auth = await requestAuth(requestData);

  if (auth.data) {
    sessionStorage(auth.data);
    return auth.data;
  } else if (auth.error) {
    throw new Error(auth.error.message);
  }

  return auth;
};

const getWhosIsMe = async () => {
  const user = await get('/users/me');

  if (user.data && !user.error) {
    return user.data;
  }

  return [];
};

const logout = () => {
  localStorage.removeItem('user_token');
  localStorage.removeItem('user_type');
  location.reload();
};

export { authentication, getWhosIsMe, logout };
