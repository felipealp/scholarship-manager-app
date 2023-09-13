import { get } from 'services/request';

const getStudents = async () => {
  const students = await get('/bolsistas');

  if (students.data && !students.error) {
    return students.data;
  }

  return [];
};

export { getStudents };
