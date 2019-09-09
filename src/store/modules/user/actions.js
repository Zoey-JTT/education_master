// import * as http from '@/libs/axios'
// import * as method from '@/libs/methods'
//
export const actions = {
//   /////////// 通用接口：获取数据字典数据
//   getSelectList({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = '/sys/cat/listByPrntCd'
//       http.get(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   ////////////////////////////////////////////////////////////////////////////
//
//   // 登录
//   webLogin(store, params) {
//     const {commit, dispatch, state, rootState} = store
//     return new Promise((resolve, reject) => {
//       let url = ''
//       switch (params.type) {
//         case 'personal':
//           url = '/general/access/webLogin'
//           break
//         case 'company':
//           url = '/general/access/webCompLogin'
//           break
//         default:
//           url = '/general/access/webLogin'
//       }
//       http.get(url, params.param).then(res => {
//         let {roles, nickname, topDeclareId, areaCd, attrMap, avatar, declareId, openId, subId, tntId, unionId, ...other} = res.userInfo
//         commit('setUserInfo', {...other, nm: nickname})   // 修改用户信息
//         commit('setToken', res.token)  // 修改token
//         let role = null
//         switch (roles[0]) {
//           case 'ROLE_TOP_USER':
//             role = 'personal'
//             break
//           case 'ROLE_TOP_COMPANY':
//             role = 'company'
//             break
//           default:
//             role = null
//         }
//         if (role === 'personal') commit('declare/setDeclareId', topDeclareId, {root: true})   // 修改用户信息
//         commit('setRole', role)  // 修改用户角色
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   // 登出
//   webLogOut(store, params) {
//     const {commit, dispatch, state, rootState} = store
//     return new Promise((resolve, reject) => {
//       let url = '/general/access/logout'
//       http.get(url, params).then(res => {
//         commit('setUserInfo', {isDeclare: null})
//         commit('setToken', null)
//         if (state.role === 'personal') commit('declare/setStep', 'baseInfo', {root: true})
//         if (state.role === 'personal') commit('declare/setApplyType', {cd: null, nm: null}, {root: true})
//         commit('setRole', null)
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//
//   // 获取注册/忘记密码/修改手机号的验证码 params:{type:'forget/register',phone:xxxxxx}
//   sendPwdCode({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = ''
//       switch (params.type) {
//         case 'forget':
//           url = '/general/sms/sendPwdCode'
//           break
//         case 'register':
//           url = '/general/sms/sendRegisterCode'
//           break
//         case 'modifyPhone':
//           url = '/general/sms/sendChgPhoneCode'
//           break
//         default:
//           url = '/general/sms/sendPwdCode'
//       }
//       http.get(url, {phone: params.phone}).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   // 注册
//   webRegister({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = ''
//       switch (params.type) {
//         case 'personal':
//           url = '/top/userExt/webRegister'
//           break
//         case 'company':
//           url = '/top/company/webRegister'
//           break
//         default:
//           url = '/top/userExt/webRegister'
//       }
//       http.post(url, params.param).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//
//
//   //// 忘记密码接口
//   forgetPassword({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = ''
//       switch (params.type) {
//         case 'personal':
//           url = '/top/userExt/updPwd'
//           break
//         case 'company':
//           url = '/top/company/updPwd'
//           break
//         default:
//           url = '/top/userExt/updPwd'
//       }
//       http.post(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   //// 修改密码接口
//   modifyPassword({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = ''
//       switch (params.type) {
//         case 'personal':
//           url = '/sys/user/password'
//           break
//         case 'company':
//           url = '/sys/user/password'
//           break
//         default:
//           url = '/sys/user/password'
//       }
//       http.post(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   //// 修改手机号
//   modifyPhone({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = ''
//       switch (params.type) {
//         case 'personal':
//           url = '/top/userExt/webPhoneUpd'
//           break
//         case 'company':
//           url = '/top/company/webPhoneUpd'
//           break
//         default:
//           url = '/top/userExt/webPhoneUpd'
//       }
//       http.get(url, params.param).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//
//
//   /////////////////////////////////////////////////////////////////////////////////////////////
//   /////////// 获取工作单位列表(个人注册)
//   getCompanyWebList({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = '/top/company/webList'
//       http.get(url, {}, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//
//
//   //// 个人：获取用户中心个人信息
//   getUserPersonalInfo(store, params) {
//     const {commit, dispatch, state, rootState} = store
//     return new Promise((resolve, reject) => {
//       let url = '/top/userExt/webUserInfo'
//       http.get(url, params).then(res => {
//         let {img, topDeclareDataBd, topDeclareDataEdu, id, ...other} = res
//         commit('setUserInfo', {...state.userInfo, ...other})  // 修改用户信息
//         commit('declare/setIsHasInfo', method.isBothVal(other), {root: true})
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//
//   //// 个人：完善个人信息
//   submitPersonInfo(store, params) {
//     const {commit, dispatch, state, rootState} = store
//     return new Promise((resolve, reject) => {
//       let url = '/top/userExt/webPerf'
//       http.post(url, params).then(res => {
//         let {img, topDeclareDataBdRo, topDeclareDataEduRo, id, ...other} = params
//         commit('declare/setIsHasInfo', method.isBothVal(other), {root: true})
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   /////////////////////////////////////////////////////////////////////////////////////////////
//
//
//   /////////////////////////////////////////////////////////////////////////////////////////////
//   ///单位角色
//   /// 组织机构代码验证：
//   companyWebTinCheck({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = '/top/company/webTinCheck'
//       http.get(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   /// 推荐单位列表（三级联动）
//   getUnitListWebList({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = '/top/unit/webList'
//       http.get(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   // 单位：获取用户中心列表
//   getCompanyWebInfo({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = '/top/company/webInfo'
//       http.get(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   },
//   // 单位：修改用户中心列表
//   submitCompanyWebInfo({commit}, params) {
//     return new Promise((resolve, reject) => {
//       let url = '/top/company/webUpd'
//       http.post(url, params).then(res => {
//         resolve(res)
//       }).catch(err => {
//         reject(err)
//       })
//     })
//   }
//
//   /////////////////////////////////////////////////////////////////////////////////////////////
//
//
}
