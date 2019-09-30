<template>
    <div>
       <app-navbar></app-navbar>
        <app-header></app-header>
        <router-view></router-view> 
        <app-footer></app-footer>
    </div>
</template>

<script>
// @ is an alias to /src
import Header from '../../components/therapist/Header.vue'
import Navbar from '../../components/therapist/Navbar.vue'
import Footer from '../../components/Footer.vue'

export default {
  components: {
    appHeader: Header,
    appNavbar: Navbar,
    appFooter: Footer,
  }
};
</script>
