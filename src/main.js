import Vue from "vue";
import VueJWT from 'vuejs-jwt'
import App from "./App.vue";
import router from "./router";
import {store} from "./store";

import axios from 'axios'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import Multiselect from 'vue-multiselect'
import VModal from 'vue-js-modal'
import { CircleSpinner, BounceSpinner } from 'vue-spinners'
import {ClientTable} from 'vue-tables-2';
import Datepicker from 'vuejs-datepicker'; 


// Static files
import  './assets/css/ionicons.min.css';
import  './assets/css/core.min.css';
import  './assets/css/app.min.css';
import  './assets/css/custom.css';
import  './assets/css/spacing.css';
import  './assets/css/vue-multiselect.min.css';

import  './assets/vendor/datepicker.js';

import "./registerServiceWorker";

Vue.use(VueJWT)
Vue.use(ClientTable);
Vue.use(Notifications)
Vue.use(Vuelidate)
Vue.use(VModal)

Vue.component('circle-spin', CircleSpinner)
Vue.component('bounce', BounceSpinner)
Vue.component('multiselect', Multiselect)
Vue.component('datepicker', Datepicker)

function retrieveToken(name) {
  return localStorage.getItem(name)
}

// For API calls
// axios.defaults.baseURL = 'https://autims.herokuapp.com/api/v1';
axios.defaults.baseURL = 'http://localhost:3333/api';
axios.interceptors.request.use(function(config) {
  const token = retrieveToken(window.btoa('userToken'))
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
// For Cloudinary img uploads
const instance = axios.create({
  baseURL: 'https://api.cloudinary.com/v1_1/khairahscorner/image/upload',
})
// instance.defaults.headers.common['Authorization'] = 'No Auth';
export {instance};

router.beforeEach((to, from, next) => {

  let userToken = retrieveToken(window.btoa('userToken'))
  
  if (to.matched.some(record => record.meta.reqToken)) {
    // console.log("requires token");
    if (userToken === null) {
      console.log("not logged in");
      next("/")
    } 
    else {
      // console.log("token is :", userToken);
      next();
    }
  } 
  else {
    // console.log("requires no token");
    next();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
