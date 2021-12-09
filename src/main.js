import Vue from 'vue'
import App from './App.vue'

//vue-router
import router from './routes.js'; 


//fortawesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
library.add(faUserSecret);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;


new Vue({
  router, //vue-router
  el: '#app',
  render: h => h(App)
})
