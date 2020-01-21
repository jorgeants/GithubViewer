import axios from 'axios';

const baseUrl = 'https://api.github.com';
const api = axios.create({
  baseURL: baseUrl,
});

export default api;
