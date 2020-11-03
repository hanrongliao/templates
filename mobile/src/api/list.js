// 此处是一个请求demo
import { get } from './http';

export const getList = () => {
  const api = '/list';
  return get(api);
};
