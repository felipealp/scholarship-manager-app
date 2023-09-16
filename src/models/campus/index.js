import { get, post, patch, remove } from 'services/request';

const getAll = async () => {
  const campus = await get('/campus');

  if (campus.data && !campus.error) {
    return campus.data;
  }

  return [];
};

const getRegister = async (id, data) => {
  const register = await get(`/campus/${id}`, data);

  if (register.data) {
    return register.data;
  }

  return register;
};

const postRegister = async (data) => {
  const dataFormatted = { nome: data.name, endereco: data.address };

  if (data.id) return patchRegister(data.id, dataFormatted);

  const register = await post('/campus/', dataFormatted);

  if (register.data) {
    return register.data;
  }

  return register;
};

const patchRegister = async (id, data) => {
  const register = await patch(`/campus/${id}/`, data);

  if (register.data) {
    return register.data;
  }

  return register;
};

const deleteRegister = async (id) => {
  const register = await remove(`/campus/${id}`);

  if (register.data) {
    return register.data;
  }

  return register;
};

export { getAll, getRegister, postRegister, patchRegister, deleteRegister };
