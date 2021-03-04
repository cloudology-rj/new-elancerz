import axios from 'axios';

// axios.defaults.baseURL = 'http://127.0.0.1:8000/rest/v1';
axios.defaults.baseURL = 'https://ppm-backend.tk/rest/v1';

const apiCall = async (url, method, token, data) => {
  const headersFresh = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const headers = {
    Authorization: `Bearer ${token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  const response = await axios({
    url: `${url}`,
    method: `${method}`,
    headers: token != '' ? headers : headersFresh,
    data: data
  })

  return response.data;
};

export default apiCall;
