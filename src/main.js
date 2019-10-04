import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'lib-flexible/flexible.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'

import animate from 'animate.css'
require('./css/reset.css')

Vue.use(VueI18n);
Vue.use(VueAxios, axios);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false
const lang = localStorage.lang || navigator.language; 

const i18n = new VueI18n({
  locale: lang,    // 语言标识
  messages: {
    'zh-CN': require('./assets/lang/cn').message,   // 中文语言包
    'en-us': require('./assets/lang/en').message    // 英文语言包
  },
})

new Vue({
  router,
  i18n,
  render: h => h(App),
}).$mount('#app')
