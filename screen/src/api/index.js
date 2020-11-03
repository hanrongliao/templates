import axios from 'axios';

/* eslint-disable */
// 全局发送请求前的拦截器
axios.interceptors.request.use(function (config) {
  // 在此处加入处理逻辑
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// 请求响应后拦截器
axios.interceptors.response.use(function (response) {
  // http响应码为2xx
  // 在此处加入处理逻辑
  return response;
}, function (error) {
  // http响应码为非2xx
  // 在此处加入请求出错处理逻辑
  return Promise.reject(error);
});
