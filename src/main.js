// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import navbar from './components/navbar'
import carousel from './components/carousel'
import footer from './components/footer'

Vue.config.productionTip = false

Vue.component('navbar', navbar)
Vue.component('carousel', carousel)
Vue.component('footer', footer)

/* eslint-disable */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
