import { get } from 'services/request';

const getDeans = async () => {
  const deans = await get('/proreitoria');

  if (deans.data && !deans.error) {
    return deans.data;
  }

  return [];
};

export { getDeans };
