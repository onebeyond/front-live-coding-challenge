import axios from 'axios';
import AppConfig from '../config/app_config';

const api = axios.create({
  baseURL: AppConfig.host(),
  timeout: 60000,
});

const ApiNetwork = {
  _getHeaders: () => {
    let headers = AppConfig.defaultHeaders;
    headers = {...headers, ...AppConfig.authHeaders()};
    return headers;
  },
  get: async (url, params = {}) => {
    const res = await api.get(url, params);
    return res;
  },
  post: async (url, body) => {
    const res = await api.post(url, body);
    return res;
  },
  postFormData: async (url, body) => {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    //@TODO - review
    // const res = await RNFetchBlob.fetch('POST', AppConfig.host() + url, headers, body);
    // return res;
  },
  put: async (url, body) => {
    const res = await api.put(url, body);
    return res;
  },
  putFormData: async (url, body) => {
    const headers = {
      'Content-Type': 'multipart/form-data',
    };
    //@TODO - review
    // const res = await RNFetchBlob.fetch('PUT', AppConfig.host() + url, headers, body);
    // return res;
  },
  patch: async (url, body) => {
    const res = await api.patch(url, body);
    return res;
  },
};

export default ApiNetwork;
