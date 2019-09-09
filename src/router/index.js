import Vue from 'vue'
import Router from 'vue-router'
import routes from './modules/front'

Vue.use(Router)

const router=new Router({routes})

// router.beforeEach((to, from, next) => {
//   // console.log('to', to)
//   // console.log('from', from)
//   // console.log('next', next)
//   router.replace({name: 'JXJY_F'})
// })

export default router
