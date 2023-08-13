const authentication = (data) => {
  return new Promise((resolve, reject) => {
    console.log('logar: ', data);
    // Simulate an asynchronous operation
    setTimeout(() => {
      if (data.email === 'felipealvesalp@gmail.com' && data.password === '123') {
        resolve(`Success: Data processed - ${data}`);
      } else {
        reject({ message: 'Credenciais inválidas' });
      }
    }, 1000); // Simulating a delay of 1 second
  });
};

const register = (data) => {
  return new Promise((resolve, reject) => {
    console.log('cadastrar: ', data);
    // Simulate an asynchronous operation
    setTimeout(() => {
      // if (data.email && data.password) {
      //   resolve(`Success: Data processed - ${data}`);
      // } else {
        reject({ message: 'Falha ao cadastrar' });
      // }
    }, 1000); // Simulating a delay of 1 second
  });
};

export { authentication, register };
