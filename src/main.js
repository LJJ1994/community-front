// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import iView from 'iview';
import 'iview/dist/styles/iview.css';

import store from './store'
import '@/assets/css/common.css'

Vue.use(VueAxios, axios)
Vue.use(ElementUI)
Vue.use(iView)
Vue.config.productionTip = false


// axios.interceptors.request.use((config) => {
//   config.headers['X-Requested-With'] = 'XMLHttpRequest';
//   let regex = /.*csrftoken=([^;.]*).*$/; // 用于从cookie中匹配 csrftoken值
//   config.headers['X-CSRFToken'] = document.cookie.match(regex) === null ? null : document.cookie.match(regex)[1];
//   return config
// })

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})
