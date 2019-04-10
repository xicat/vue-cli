import axios from 'axios'
const timeout = 50000
let instance = null
if (process.env.VUE_APP_MOCK === 'mock') {
  instance = axios.create({
    baseURL: process.env.VUE_APP_MOCK,
    timeout: timeout
  })
} else {
  instance = axios
}
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
function getData (url, params = null, callback, errFun) {
  instance.get(url, !params || params && params.params ? params : { params })
    .then(function (response) {
      callback && callback(response)
    })
    .catch(function (error) {
      errFun && errFun(error)
    })
}
function postData (url, params, callback, errFun) {
  instance.post(url, params)
    .then(function (response) {
      callback && callback(response)
    })
    .catch(function (error) {
      errFun && errFun(error)
    })
}
export {
  getData,
  postData
}
