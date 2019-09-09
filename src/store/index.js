import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import user from './modules/user/index'
import front from './modules/front/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {user, front},
  plugins: [createPersistedState({storage: window.sessionStorage})],
  strict: process.env.NODE_ENV !== 'production'
})
