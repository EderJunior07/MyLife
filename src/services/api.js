import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.0.11:3001/api',
  responseType: 'json'
})

api.interceptors.response.use(
  (response) => {
    return response.data
  },
  (err) => {
    if (err.response.status === 401) {
    }

    if (err.response.status === 403) {
      // .error("Você não possui permissão para utilizar essa tela.")
    }
    return Promise.reject(err);
  },
);

export default api;