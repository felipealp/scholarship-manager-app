import { get } from 'services/request';

const getCoordinators = async () => {
  const coordinators = await get('/coordenadores');

  if (coordinators.data && !coordinators.error) {
    return coordinators.data;
  }

  return [];
};

export { getCoordinators };
