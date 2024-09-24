// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Element from 'element-ui'
import App from './App.vue'

Vue.use(Element, {size: 'small'})

new Vue({
  el: '#app',
  render: h => h(App)
})
