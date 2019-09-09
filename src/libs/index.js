import Vue from 'vue'
import * as http from '@/libs/axios'
import * as constant from './constant'
import * as method from './methods'
// import validate from './validate'
// import * as initForm from './initRules'
// import * as formRules from './formRules'
// import './filter'   // 过滤器

Vue.prototype.$http = http // ajax请求方法
Vue.prototype.$baseUrl = constant.baseUrl     // 请求api基础路径
Vue.prototype.$maxlen = constant.maxlen       // 表单限制字符
Vue.prototype.$validReg = constant.validReg   // 正则表达式
Vue.prototype.$pickOpt = constant.pickOpt   // 正则表达式
Vue.prototype.$valid = constant.validReg   // 正则表达式

Vue.prototype.$method = method   // 公共方法

// Vue.prototype.$validate = validate  // 验证方法
// Vue.prototype.$initRules = initForm.initRules // 初始化表单验证规则
// Vue.prototype.$initLabel = initForm.initLabel // 初始化表单验证规则
// Vue.prototype.$formRules = formRules //表单验证方法
