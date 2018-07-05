import axios from 'axios'
import store from '../../store/index'
// import router from '../router'
import { sha256 } from 'js-sha256'
// axios 配置
axios.defaults.timeout = 5000
// http request 拦截器
axios.interceptors.request.use(
  config => {
  let nowDate = new Date()
  let signTime = nowDate.getTime()
  if (store.state.token != null && store.state.expireTime > nowDate.getTime()) {
  config.headers.sign_time = signTime
  config.headers.auth_Code = store.state.authCode
  config.headers.sign = sha256.hmac(store.state.token, signTime + store.state.authCode)
}
return config
},
err => {
  return Promise.reject(err)
}
)

// // http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error.response) {
//       switch (error.response.status) {
//         case 401:
//         // 401 清除token信息并跳转到登录页面
//           store.commit('loginout')
//           router.replace({
//             path: '/login',
//             query: {redirect: router.currentRoute.fullPath}
//           })
//       }
//     }
//     // console.log(JSON.stringify(error));//console : Error: Request failed with status code 402
//     return Promise.reject(error.response.data)
//   }
// )

export default axios
