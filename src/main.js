import Vue from 'vue'
import App from './App.vue'

//vue-router
import router from './routes.js'; 


new Vue({
  router, //vue-router
  el: '#app',
  render: h => h(App)
})
