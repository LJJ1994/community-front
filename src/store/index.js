import Vue from 'vue'
import Vuex from 'vuex'

import FooterMutations from './footer/mutations'

Vue.use(Vuex)

const footer = {
  state: {
    isShow: true
  },
  mutations: FooterMutations
}

export default new Vuex.Store({
  modules: {
    footer
  }
})

