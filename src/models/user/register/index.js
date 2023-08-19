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

const getCampus = () => {
  return new Promise((resolve) => {
    console.log('campus: ');
    const campus = [
      {
        "id": 1,
        "nome": "UFERSA - Pau dos Ferros",
        "endereco": "BR-226, s/n, Pau dos Ferros - RN, 59900-000"
      }
    ]
    // Simulate an asynchronous operation
    setTimeout(() => {
      // if (data.email && data.password) {
      //   resolve(`Success: Data processed - ${data}`);
      // } else {
        resolve(campus);
      // }
    }, 1000); // Simulating a delay of 1 second
  });
};

const getProjects = () => {
  return new Promise((resolve) => {
    console.log('campus: ');
    const campus = [
      {
        "id": 1,
        "nome": "Projeto I - Sistemas",
        "descricao": "Aplicações WEB",
        "data_inicio": "2023-08-19",
        "data_fim": "2024-08-19",
        "campus": 1,
        "coordenador": null
      }
    ]
    // Simulate an asynchronous operation
    setTimeout(() => {
      // if (data.email && data.password) {
      //   resolve(`Success: Data processed - ${data}`);
      // } else {
        resolve(campus);
      // }
    }, 1000); // Simulating a delay of 1 second
  });
};

export { getCampus,getProjects, postRegister };
