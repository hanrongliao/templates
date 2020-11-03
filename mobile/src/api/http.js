import axios from 'axios';

export const get = (url, params) => axios.get(url, { params })
  .then(({ data }) => data);

export const post = (url, params) => axios.post(url, params)
  .then(({ data }) => data);
