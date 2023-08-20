import { get, post } from 'services/request';
import { getStringDate } from 'utils/dates';

const getCampus = async () => {
  const campus = await get('/campus');

  if (campus.data && !campus.error) {
    return campus.data;
  }

  return [];
};

const getProjects = async () => {
  const projects = await get('/projetos');

  if (projects.data && !projects.error) {
    return projects.data;
  }

  return [];
};

const postRegister = async (data) => {
  let userData;
  let userEndpoint;

  if (data.userType === 'Bolsista') {
    userEndpoint = '/bolsistas/';
    userData = {
      matricula: data.email,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus,
      projeto_id: data.project
    };
  } else if (data.userType === 'Orientador') {
    userEndpoint = '/orientadores/';
    userData = {
      matricula: data.email,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      projeto_id: data.project,
      campus_id: data.campus
    };
  } else if (data.userType === 'Coordenador') {
    userEndpoint = '/coordenadores/';
    userData = {
      matricula: data.email,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus
    };
  } else if (data.userType === 'Pró-Reitor') {
    userEndpoint = '/proreitoria/';
    userData = {
      matricula: data.email,
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus,
      inicio_m: getStringDate(data.atualDate),
      fim_m: getStringDate(data.futureDate)
    };
  }

  const register = await post(userEndpoint, userData);

  if (register.data) {
    return register.data;
  }

  return [];
};

export { getCampus, getProjects, postRegister };
