<template>
    <div>
       <app-navbar></app-navbar>
        <app-header></app-header>
        <router-view></router-view> 
        <app-footer></app-footer>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios';
import router from '../../router'
// @ is an alias to /src
import Header from '../../components/therapist/Header.vue'
import Navbar from '../../components/therapist/Navbar.vue'
import Footer from '../../components/Footer.vue'

export default {
  mounted(){
    // Add a response interceptor
    axios.interceptors.response.use(function (response) {
      return response;
    }, 
    function (err) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      if (!err.response) {
        Vue.notify({
          group: "response",
          type: "error",
          title: "No Internet connection, try again.",
          duration: 5000,
          ignoreDuplicates: true
        })
        // router.push('/login', () => {})
        return Promise.reject(err);
      } 
      else {
        return Promise.reject(err);
      }
    });
  },
  components: {
    appHeader: Header,
    appNavbar: Navbar,
    appFooter: Footer,
  }
};
</script>
