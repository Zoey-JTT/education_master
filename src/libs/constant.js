// 请求基本路径
const isPro = Object.is(process.env.NODE_ENV, 'development')
export const baseUrl = isPro && process.env.OPEN_PROXY ? '/proxyApi' : 'http://106.12.22.8'
// export const baseUrl = isPro && process.env.OPEN_PROXY ? '/proxyApi' : 'http://NBJN.rcpx.net'

// 表单限制最大长度
export const maxlen = {
  phone: 11,         // 手机
  tel: 8,            // 固话
  idCard: 18,        // 二代身份证
  password: [6, 20], // 密码
  code: 4,           // 验证码
  priMaxLen: 200    // 默认最大
}


export const pickOpt = {
  disabledDate: (time) => {
    return time.getTime() > new Date();
  }
}

// 验证正则表达式
export const validReg = {
  idCard: /^[1-9]\d{5}((((19|[2-9][0-9])\d{2})(0?[13578]|1[02])(0?[1-9]|[12][0-9]|3[01]))|(((19|[2-9][0-9])\d{2})(0?[13456789]|1[012])(0?[1-9]|[12][0-9]|30))|(((19|[2-9][0-9])\d{2})0?2(0?[1-9]|1[0-9]|2[0-8]))|(((1[6-9]|[2-9][0-9])(0[48]|[2468][048]|[13579][26])|((16|[2468][048]|[3579][26])00))0?229))\d{3}[0-9Xx]$/,
  phone: /^1[34578]\d{9}$/,
  tel: /^([0-9]{3,4}-)?[0-9]{7,8}$/,
  email: /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
}

