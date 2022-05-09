import axios from 'axios'

export const request = axios.create({
  baseURL: 'http://realworld.api.fed.lagounews.com'
})

//默认到导出一个上下文对象，可以访问到query，store，app
export default(({store}) =>{
  // 添加请求拦截器，在请求头中加token
  request.interceptors.request.use(
    config => {
      const { user } = store.state
      if(user && user.token){
        config.headers.Authorization = `Token ${user.token}`
      }
    return config;
  }, error => {
    return Promise.reject(error);
  });
})


// https://api.realworld.io
