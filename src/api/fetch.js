
import axios from 'axios' //导入axios
import qs from 'qs'
import {DEV_HOST} from './config'

const instance = axios.create({
    // 设置默认根地址
    baseURL: DEV_HOST,
    // 设置请求超时设置
    timeout: 5000,
    // 设置请求时的header
    header: {
      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      'hwh': '916879598@qq.com'
    },
    headers:{
      token: 'dc97d65cffe81a2b32ed9bb62e89c3b6'
    },
    // 公用参数
    data: {
      version: 'version',
      email: '916879598@qq.com',
      access_token: ''
    }
  })

  // POST传参序列化
  instance.interceptors.request.use((config) => {
    // if (store.state.user_info.user && store.state.user_info.user.open_id) {
    //   config.data.access_token = store.state.user_info.user.open_id
    // }
    if (config.method === 'post') {
      // config.data = qs.stringify(config.data)
    }
    return config
  }, (error) => {
    return Promise.reject(error)
  })
  
  // 返回状态判断
  instance.interceptors.response.use((res) => {
    if (res.data.code === 400 ) {
      router.replace({ name: "login" })
      return Promise.reject(res)
    }
    return res
  }, (error) => {
    return Promise.reject(error)
  })
  

  export default (options) => {
    return new Promise((resolve, reject) => {
      instance(options)
        .then(response => {
          resolve(response.data)
        }, err => {
          reject(err)
        })
        .catch((error) => {
          reject(error)
        })
    })
  }