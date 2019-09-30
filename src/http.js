import Vue from 'vue'
import axios from 'axios'
import router from './router'
import store from './store'

// axios.defaults.baseURL = 'http://127.0.0.1:5000'
axios.defaults.timeout = 20000  // 超时时间（毫秒, axios等待后端返回数据的时间
axios.defaults.retry = 2  // 重试次数
axios.defaults.retryDelay = 100  // 重试之间的间隔时间（毫秒）


// 请求拦截器
axios.interceptors.request.use(function (config) {
  // Do something before request is sent
  const token = window.localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// 响应拦截器
axios.interceptors.response.use(function (response) {
  return response
}, function (error) {
  if (error.response) {
    switch  (error.response.status) {
      case 401:
        // 清除 Token 及 已认证 等状态
        store.user.logoutAction()
        // 跳转到登录页
        if (router.currentRoute.path !== '/me/login') {
          alert('401: 认证已失效，请先登录')
          router.replace({
            path: '/me/login',
            query: { redirect: router.currentRoute.path },
          })
        }
        break

      case 403:
        alert('403: Forbidden')
        router.back()
        break

      case 404:
        alert('404: Not Found')
        router.back()
        break

      case 500:  // 服务器错误
        alert('500: INTERNAL SERVER ERROR')
        router.back()
        break
    }
  } else if (error.request) {
    alert('The request has not been sent to Flask API，because OPTIONS get error')
  } else {
    console.log('Error: ', error.message)
  }
  console.log(error.config)

  return Promise.reject(error)
})

export default axios
