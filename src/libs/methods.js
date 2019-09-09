// 元素的补零计算
function addZero(val) {
  return val < 10 ? `0${val}` : val
}

// 元素的补零零计算
function padLeftZero(str) {
  return ('00' + str).substr(str.length)
}

// /**
//  * mergeQuery: 合并query
//  */
// export function mergeQuery(param) {
//   let query = {"w": [], "o": [], "p": {}}
//   return Object.assign({}, query, param)
// }

/**
 * formatDate: 日期格式转化
 * fmt：'yyyy-MM-dd','yyyy-MM-dd hh:mm;ss','yyyy-MM-dd hh','yyyy-MM-dd hh:mm'
 */
export function formatDate(date, fmt = 'yyyy-MM-dd') {
  if (!date) return ''
  if (((date instanceof String) || (typeof date).toLowerCase() == 'string')) date = date.replace(/-/, '/')   // IE下new Date('2019-08-01 12:00:00') Invalid Date
  date = new Date(date)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  let o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
}

/**
 *  mCardToSex：身份证计算出性别
 *  倒数第二位：偶数女，奇数男
 **/
export function mCardToSex(param) {
  return param.substring(param.length - 2, param.length - 1) % 2
}

/**
 *  mCardToBirth：身份证计算出生日
 *  format：year,month,day （到年/ 到月/ 到日，默认到日），默认值可根据项目变化
 **/
export function mCardToBirth(param, format = 'day') {
  if (!param) return ""
  let y = param.substring(6, 10)
  let m = param.substring(10, 12)
  let d = param.substring(12, 14)
  switch (format) {
    case 'day':
      return `${y}-${m}-${d}`
    case 'month':
      return `${y}-${m}`
    case 'year':
      return `${y}`
  }
}

/**
 * 判断是否都有值
 */
export function isBothVal(obj) {
  let flag = true
  Object.keys(obj).find(key => {
    // let typeSort = Object.prototype.toString.call(obj[key])
    // typeSort = typeSort.substr(0, typeSort.length - 1)
    // typeSort = typeSort.substr(1, typeSort.length - 1).split(" ").pop()
    // let type = typeSort.split(":").pop()
    let type = whichType(obj[key])
    switch (type) {
      case 'Null':
        flag = false
        break
      case 'Array':
        if (obj[key].length == '') {
          flag = false
        } else {
          flag = isBothVal(obj[key])
        }
        break
      case 'Object':
        if (JSON.stringify(obj) == "{}") {
          flag = false
        } else {
          flag = isBothVal(obj[key])
        }
        break
      default:
        if (obj[key].toString() == '') flag = false
    }
    return flag == false
  })
  return flag
}


/**
 * 判断是否有值
 */
export function isHasVal(obj) {
  let flag = false
  Object.keys(obj).find(key => {
    // let typeSort = Object.prototype.toString.call(obj[key])
    // typeSort = typeSort.substr(0, typeSort.length - 1)
    // typeSort = typeSort.substr(1, typeSort.length - 1).split(" ").pop()
    // let type = typeSort.split(":").pop()
    let type = whichType(obj[key])
    switch (type) {
      case 'Null':
        break
      case 'Array':
        if (obj[key].length) flag = isHasVal(obj[key])
        break
      case 'Object':
        if (JSON.stringify(obj[key]) != "{}") flag = isHasVal(obj[key])
        break
      default:
        if (obj[key].toString()) flag = true
    }
    return flag == true
  })
  return flag
}

/**
 * 判断数据类型
 */
export function whichType(x) {
  let arr = ['String', 'Number', 'Boolean', 'Undefined', 'Null', 'Symbol', 'Array', 'Object', 'Function', 'Date', 'RegExp']
  return arr.find(item => (Object.prototype.toString.call(x).indexOf(item) > -1))
}

/**
 * 深拷贝
 */
export function deepClone(origin, target) {
  this.whichType(origin) === 'Object' && (target = target || {});
  this.whichType(origin) === 'Array' && (target = target || []);
  for (let key in origin) {
    if (!origin.hasOwnProperty(key)) return //判读是否为对象自己的属性  排除原型链干扰
    if (this.whichType(origin[key]) === 'Object' || this.whichType(origin[key]) === 'Array') {
      target[key] = this.deepClone(origin[key]);
    } else {
      target[key] = origin[key];
    }
  }
  return target
}

//// 下载文件兼容IE
export function downLoadFile(file) {
  if (window.navigator.msSaveBlob) {
    window.open(file.url, '_target')
  } else {
    let link = document.createElement('a')
    link.style.display = 'none'
    link.href = file.url
    link.setAttribute('download', file.name)
    document.body.appendChild(link)
    link.click()
  }
}

