import axios from 'axios';
import { AppConfig } from 'common/config/app_config';

const api = axios.create({
  baseURL: AppConfig.host(),
  timeout: 60000,
});

const ApiNetwork = {
  get: async (url) => {
    const headers = { ...AppConfig.defaultHeaders, ...AppConfig.authHeaders() };
    const res = await api.get(url, { headers });
    return res;
  },
  delete: async (url) => {
    const headers = { ...AppConfig.defaultHeaders, ...AppConfig.authHeaders() };
    const res = await api.delete(url, { headers });
    return res;
  }
};

export default ApiNetwork;
