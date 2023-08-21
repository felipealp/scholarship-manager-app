import axios from 'axios';
import configApi from 'services/configAPi';

const get = async (url) => {
  try {
    const response = await axios.get(url, {
      baseURL: configApi.apiUrl,
      headers: {
        Authorization: `Token ${configApi.token}`
      }
    });

    return response;
  } catch (err) {
    return { error: err };
  }
};

const post = (url, data) => {
  try {
    const response = axios.post(url, data, {
      baseURL: configApi.apiUrl,
      headers: {
        Authorization: `Token ${configApi.token}`
      }
    });

    return response;
  } catch (err) {
    return { error: err };
  }
};

const auth = (data) => {
  try {
    const response = axios.post('/auth-token/', data, {
      baseURL: configApi.url
    });

    return response;
  } catch (err) {
    return { error: err };
  }
};

export { get, post, auth };
