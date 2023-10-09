import { get, post, patch, remove } from 'services/request';
import { getStringDate } from 'utils/dates';

const getEndpoint = (userType) => {
  if (userType === 'bolsista') {
    return 'bolsistas';
  } else if (userType === 'orientador') {
    return 'orientadores';
  } else if (userType === 'coordenador') {
    return 'coordenadores';
  } else if (userType === 'reitor' || userType === 'proreitor') {
    return 'proreitoria';
  } else {
    return '';
  }
};

const getAll = async (type) => {
  const register = await get(`/${getEndpoint(type)}`);

  if (register.data) {
    return register.data;
  }

  return register;
};

const getRegister = async (type, id) => {
  const register = await get(`/${getEndpoint(type)}/${id}`);

  if (register.data) {
    return register.data;
  }

  return register;
};

const postRegister = async (data) => {
  if (data.id) return patchRegister(data.id, data);

  let userData;
  let userEndpoint;

  if (data.userType === 'Bolsista') {
    userEndpoint = '/bolsistas/';
    userData = {
      matricula: data.matriculation,
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
      matricula: data.matriculation,
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
      matricula: data.matriculation,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus
    };
  } else if (data.userType === 'Reitor') {
    userEndpoint = '/proreitoria/';
    userData = {
      matricula: data.matriculation,
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

  return register;
};

const patchRegister = async (id, data) => {
  let userData;
  let userEndpoint;

  if (data.userType === 'Bolsista') {
    userEndpoint = `/bolsistas/${id}/`;
    userData = {
      matricula: data.matriculation,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus,
      projeto_id: data.project
    };
  } else if (data.userType === 'Orientador') {
    userEndpoint = `/orientadores/${id}/`;
    userData = {
      matricula: data.matriculation,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      projeto_id: data.project,
      campus_id: data.campus
    };
  } else if (data.userType === 'Coordenador') {
    userEndpoint = `/coordenadores/${id}/`;
    userData = {
      matricula: data.matriculation,
      nome: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus
    };
  } else if (data.userType === 'Reitor') {
    userEndpoint = `/proreitoria/${id}/`;
    userData = {
      matricula: data.matriculation,
      name: data.name,
      username: data.username,
      password: data.password,
      email: data.email,
      campus_id: data.campus,
      inicio_m: getStringDate(data.atualDate),
      fim_m: getStringDate(data.futureDate)
    };
  }

  const register = await patch(userEndpoint, userData);

  if (register.data) {
    return register.data;
  }

  return register;
};

const deleteRegister = async (type, id) => {
  const register = await remove(`/${getEndpoint(type)}/${id}`);

  if (register.data) {
    return register.data;
  }

  return register;
};

export { getAll, getRegister, postRegister, patchRegister, deleteRegister };
