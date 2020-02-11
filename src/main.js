// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Abb from './Abb'
import router from './router'
import store from './vuex/store'
import VueResource from 'vue-resource'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// import Qs from 'qs'
 
Vue.use(VueResource);
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.axios = axios;
// Vue.prototype.qs = Qs;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#abb',
  components: {Abb},
  template: '<Abb/>'
})