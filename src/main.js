// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Weui from 'weui'
// import adaptive from './plugins/adaptive-version.js'
import iconfont from './plugins/iconfont.js'
import Swiper from 'vue-awesome-swiper'
import axios from 'axios'

Vue.use(Swiper)
Vue.prototype.$ajax = axios

import VueScroller from 'vue-scroller'
Vue.use(VueScroller)

Vue.use(Weui,iconfont)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  data () {
    return {
      msg: []
    }
  }
})
