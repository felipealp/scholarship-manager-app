import { auth as requestAuth } from 'services/request';

const authentication = async (data) => {
  console.log(data);
  // requisitar token
  localStorage.setItem('user_token', '445545');
  // requisitar whoami
  localStorage.setItem('user_type', 'reitor');
  const whoami = { userType: 'reitor', data: {} };
  localStorage.setItem('whoami', JSON.stringify(whoami));
  const auth = await requestAuth(data);
  console.log('auth');
  if (auth.data) {
    return auth.data;
  }

  return auth;

  // return new Promise((resolve, reject) => {
  //   console.log('logar: ', data);
  //   // Simulate an asynchronous operation
  //   setTimeout(() => {
  //     // if (data.login === 'felipe@email.com' && data.password === '123') {

  //     if (data.password) {
  //       // [armazenar token e redirecionar página]
  //       console.log('autenticou');
  //       localStorage.setItem('user_token', '445545');
  //       resolve(`Success: Data processed - ${data}`);
  //     } else {
  //       reject({ message: 'Credenciais inválidas' });
  //     }
  //   }, 1000); // Simulating a delay of 1 second
  // });
};

const logout = () => {
  localStorage.removeItem('user_token');
  location.reload();
};

export { authentication, logout };
