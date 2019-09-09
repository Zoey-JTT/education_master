import * as http from '@/libs/axios'
import query from '@/libs/query'

export const actions = {
  // 获取轮播图
  getBannerList ({commit}, params) {
    return new Promise((resolve, reject) => {
      let url = '/ski/news/webList'
      http.get(url, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取新闻动态，政策法规，公告通知，活动风采
  getFrontList ({commit}, params) {
    return new Promise((resolve, reject) => {
      let url = '/ski/news/webPage'
      switch (params.type) {
        case 'news':
          params.param = query.toW(params.param, 'catCd', '30060.260.110')
          break
        case 'policies':
          params.param = query.toW(params.param, 'catCd', '30060.260.120')
          break
        case 'notice':
          params.param = query.toW(params.param, 'catCd', '30060.260.130')
          break
        case 'active':
          params.param = query.toW(params.param, 'catCd', '30060.260.140')
          break
        default:
      }
      http.get(url, {}, params.param).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  },
  // 获取首页列表详情
  getFrontListDetail ({commit}, params) {
    return new Promise((resolve, reject) => {
      let url = '/ski/news/webInfo'
      http.get(url, params).then(res => {
        resolve(res)
      }).catch(err => {
        reject(err)
      })
    })
  }
}
