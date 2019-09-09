import axios from 'axios'
import {baseUrl} from '@/libs/constant'
import qs from 'qs'
import router from '@/router'
import Vue from "vue"
import store from "@/store";
import {message} from '@/element-ui';

axios.defaults.timeout = 5000;
axios.defaults.baseURL = baseUrl;
axios.defaults.headers['Content-Type'] = 'application/json; charset=UTF-8'
axios.defaults.withCredentials = true;


//请求次数
axios.defaults.retry = 4;
//请求的间隙
axios.defaults.retryDelay = 1000;

/**
 * 请求拦截
 */
export const myInterceptor = axios.interceptors.request.use(config => {
  let token = store.state.user.token
  if (token) config.headers['token'] = token // 请求头带上token

  let defaults = {
    '_t': new Date().getTime()
  }
  if (config.params) {
    config.params = Object.assign({}, defaults, config.params)
  }
  if (config.data) {
    config.data = Object.assign({}, defaults, config.data)
  }

  if (config.method == 'post') {
    config.data = JSON.stringify(config.data)
  }
  return config
}, error => {
  return Promise.reject(error)
})


/**
 * 响应拦截
 */
axios.interceptors.response.use(res => {
  if (res.status == 200) {
    let code = res.data.code
    switch (code) {
      case 0:
        if (!res.data.page) {
          return res.data.data
        } else {
          let obj = {
            data: res.data.data,
            page: res.data.page
          }
          return obj
        }
        break
      case 400:
        return Promise.reject(res.data.msg)
      case 401:
        router.push({name: 'JXJY_F'})
        return Promise.reject(res.data.msg)
      default:
        return res
    }
  }
}, err => {

  //请求超时的之后，抛出 error.code = ECONNABORTED的错误..错误信息是 timeout of  xxx ms exceeded
  if (err.code == 'ECONNABORTED' && err.message.indexOf('timeout') != -1) {
    var config = err.config;
    config.__retryCount = config.__retryCount || 0;

    if (config.__retryCount >= config.retry) {
      // Reject with the error
      //window.location.reload();
      message("请求超时", "error")
      return Promise.reject(err);
    }

    // Increase the retry count
    config.__retryCount += 1;

    // Create new promise to handle exponential backoff
    var backoff = new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, config.retryDelay || 1);
    });

    return backoff.then(function () {
      return axios(config);
    });
  } else {
    return Promise.reject(err);
  }
  // return Promise.reject(err)
})


// export default axios


/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */

export function get(url, params = {}, query) {
  return new Promise((resolve, reject) => {
    if (query) url = `${url}?query=${encodeURI(JSON.stringify(query))}`
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err)
      })
  })
}


/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function post(url, data = {}, joinUrl) {
  return new Promise((resolve, reject) => {
    if (joinUrl) url = `${url}?${qs.stringify(joinUrl)}`
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err)
      })
  })
}


/**
 * 封装put请求
 * @param url
 * @param data
 * @returns {Promise}
 */

export function put(url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response);
      }, err => {
        reject(err)
      })
  })
}


/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
export function del(url, params = {}) {
  return new Promise((resolve, reject) => {
    axios.delete(url, {
      params: params
    })
      .then(response => {
        resolve(response);
      })
      .catch(err => {
        reject(err)
      })
  })
}
