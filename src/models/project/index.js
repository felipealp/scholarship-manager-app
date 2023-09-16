import { get, post, patch, remove } from 'services/request';

const getAll = async () => {
  const registers = await get('/projetos');

  if (registers.data && !registers.error) {
    return registers.data;
  }

  return [];
};

const getRegister = async (id, data) => {
  const register = await get(`/projetos/${id}`, data);

  if (register.data) {
    return register.data;
  }

  return register;
};

const postRegister = async (data) => {
  const dataFormatted = { nome: data.name, endereco: data.address };

  if (data.id) return patchRegister(data.id, dataFormatted);

  const register = await post('/projetos/', dataFormatted);

  if (register.data) {
    return register.data;
  }

  return register;
};

const patchRegister = async (id, data) => {
  const register = await patch(`/projetos/${id}/`, data);

  if (register.data) {
    return register.data;
  }

  return register;
};

const deleteRegister = async (id) => {
  const register = await remove(`/projetos/${id}`);

  if (register.data) {
    return register.data;
  }

  return register;
};

export { getAll, getRegister, postRegister, patchRegister, deleteRegister };
