import axios from 'axios'

const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com'
})
// 添加请求拦截器，在请求头中加token
request.interceptors.request.use(
  config => {
   
  return config;
}, error => {
  return Promise.reject(error);
});

export default request
// https://api.realworld.io
