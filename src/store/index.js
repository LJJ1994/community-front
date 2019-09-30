import Vue from 'vue'
import Vuex from 'vuex'

import UserMutation from './user/mutations'
import CategoryMutation from './category/mutations'

import CategoryGetter from './category/getters'

Vue.use(Vuex)

const footer = {
  state: {
    isShow: true
  }
}

const user = {
  state: {
    is_authenticated: !!window.localStorage.getItem('token'),
    user_id: window.localStorage.getItem('token') ? JSON.parse(atob(window.localStorage.getItem('token').split('.')[1])).user_id : 0,
    user_name: window.localStorage.getItem('token') ? JSON.parse(atob(window.localStorage.getItem('token').split('.')[1])).user_name : '',
  },
  mutations: UserMutation
}

const category = {
  state: {
    category_id: 0,
    category_name: '添加话题',
    isSelected: false,
  },
  mutations: CategoryMutation,
  getters: CategoryGetter
}

export default new Vuex.Store({
  modules: {
    footer,
    user,
    category
  }
})
