import { get } from 'services/request';

const getAll = async () => {
  const coordinators = await get('/coordenadores');

  if (coordinators.data && !coordinators.error) {
    return coordinators.data;
  }

  return [];
};

const getCoordinators = async () => {
  const coordinators = await get('/coordenadores');

  if (coordinators.data && !coordinators.error) {
    return coordinators.data;
  }

  return [];
};

export { getAll, getCoordinators };
