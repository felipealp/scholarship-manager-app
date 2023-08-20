import { get } from 'services/request';

const getCampus = async () => {
  const campus = await get('/campus');

  if (campus.data) {
    return campus.data;
  }

  return [];
};

const getProjects = async () => {
  const projects = await get('/projetos');

  if (projects.data) {
    return projects.data;
  }

  return [];
};

const postRegister = (data) => {
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

export { getCampus, getProjects, postRegister };
