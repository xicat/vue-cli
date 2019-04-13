import axios from 'axios'
const timeout = 50000
let instance = null
if (process.env.VUE_APP_MOCK !== 'mock') {
  instance = axios.create({
    baseURL: process.env.VUE_APP_URL,
    timeout: timeout
  })
} else {
  instance = axios
}

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
