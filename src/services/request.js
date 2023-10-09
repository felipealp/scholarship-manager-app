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

const patch = (url, data) => {
  try {
    const response = axios.patch(url, data, {
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

const remove = (url) => {
  try {
    const response = axios.delete(url, {
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

const auth = async (data) => {
  try {
    const response = await axios.post('/api/auth-token/', data, {
      baseURL: configApi.url
    });

    return response;
  } catch (err) {
    return {
      error: {
        message: err.response.data.error || 'Falha o realizar login.'
      }
    };
  }
};

export { get, post, patch, remove, auth };
