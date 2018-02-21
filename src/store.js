import Vue from 'vue'
import Vuex from 'vuex'

import user from './components/modules/user/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    user
  }
})
