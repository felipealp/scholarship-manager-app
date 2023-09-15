import { get } from 'services/request';

const getAdvisors = async () => {
  const advisors = await get('/orientadores');

  if (advisors.data && !advisors.error) {
    return advisors.data;
  }

  return [];
};

export { getAdvisors };
