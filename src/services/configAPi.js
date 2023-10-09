const configApi = {
  url: process.env.REACT_APP_API_URL,
  apiUrl: `${process.env.REACT_APP_API_URL}/api`,
  token: localStorage.getItem('user_token')
};

export default configApi;
