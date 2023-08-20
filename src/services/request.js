import axios from 'axios';

const get = (url) => {
  const response = axios.get(url, {
    baseURL: 'http://127.0.0.1:8000/api',
    timeout: 1000,
    headers: {
      Authorization: `Token 674226d9712f6a1e4036101c8ba4bd6ad85d743d` // Token no cabeçalho "Authorization"
    }
  });

  return response;
};

export { get };
