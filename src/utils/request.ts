import axios from 'axios'
import { getToken, removeToken } from './storage'
import { ElMessage } from 'element-plus'

declare module "axios" {
  interface AxiosResponse<T = any> {
    message: '';
    code: Number;
    token: ''
  }
  export function create(config?: AxiosRequestConfig): AxiosInstance;
}

// const BASEURL = String(import.meta.env.VITE_BASE_URL)
const BASEURL = ''

axios.defaults.timeout = 5000 // 响应超时时间
axios.defaults.baseURL = BASEURL // 请求的根路径

// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // const token = getToken()
  // if (token) {
  //   config.headers['Authorization'] = 'Bearer ' + token
  // }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return error;
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {

  const code: Number = response.data.code
  
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  if (code === 200) {
    return response.data
  } else {
    showError(response.data)
    return false
  }

}, function (error) {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  return error.response;
});


// 错误处理
function showError(error: any) {
  // token过期，清除本地数据，刷新页面
  if (error.code === 401) {
    removeToken()
    location.reload()
  } else {
    ElMessage({
      message: error.msg || error.message || '服务异常',
      type: 'error',
      duration: 3 * 1000
    })
  }

}


export default axios