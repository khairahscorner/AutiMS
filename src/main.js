import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";

import axios from 'axios'
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'
import { CircleSpinner } from 'vue-spinners'
import {ClientTable} from 'vue-tables-2';

// Static files
import  './assets/css/ionicons.min.css';
import  './assets/css/core.min.css';
import  './assets/css/app.min.css';
import  './assets/css/custom.css';
import  './assets/css/spacing.css';

// require('popper.js/dist/umd/popper');
// import  './assets/js/custom.js'; 
// import  '../public/core.min.js'; 
// import  './assets/js/app.min.js';
// import  './assets/js/script.min.js';

// import  './assets/vendor/datepicker.js';
// import  './assets/vendor/popper/popper.min.js';

Vue.use(ClientTable);
Vue.use(Notifications)
Vue.use(Vuelidate)


Vue.component('circle-spin', CircleSpinner)

// For API calls
axios.defaults.baseURL = 'https://mcfapi.herokuapp.com/api/v1';
axios.interceptors.request.use(function(config) {
  const token = localStorage.getItem("userToken");
  config.headers.Authorization = token ? `Bearer ${token}` : "";
  return config;
});
// For Cloudinary img uploads
const instance = axios.create({
  baseURL: 'https://api.cloudinary.com/v1_1/mcf/image/upload',
})
// instance.defaults.headers.common['Authorization'] = 'No Auth';
export {instance};

router.beforeEach((to, from, next) => {
  let userToken = localStorage.getItem("userToken");
  if (to.matched.some(record => record.meta.reqToken)) {
    console.log("requires token");
    if (userToken === null) {
      // console.log("not logged in");
      next("/");
    } else {
      // console.log("token is :", userToken);
      next();
    }
  } else {
    console.log("requires no token");
    next();
  }
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
