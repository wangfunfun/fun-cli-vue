import axios from 'axios'
import { APP_BASE_URL } from '@/common/constant'

// axios 配置
const AXIOS = axios.create({
  baseURL: APP_BASE_URL,
  timeout: 10000,
  headers: {}
})

// axios 前置拦截器
AXIOS.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// axios 后置拦截器
AXIOS.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default AXIOS
