<template>
    <header class="topbar topbar-expand-lg" id="app-topbar">
      <div class="topbar-left">
            <button class="topbar-btn sidebar-toggler">&#9776;</button>
      </div>
      <div class="topbar-center text-center">
            <span class="topbar-brand"><img class="img-tb" src="../../assets/logo1.png" alt="logo"></span>
      </div>

      <div class="topbar-right">
             <span>
                <img v-if="img_url == null" class="avatar" src="../../assets/img/avatar.jpg" alt="...">
                <img v-else class="avatar" :src="img_url" alt="...">
            </span>
      </div>
    </header>
    <!-- END Topbar -->
</template>

<script>
import axios from 'axios'
import {store} from '../../store'

export default {
  data() {
        return {
            img_url: null
        }
  },
  mounted() {
    axios.get('/parent')
        .then(res => {
            this.loading = false
            this.img_url = res.data.data.parent.img_url
        })
        .catch(err => {
            // this.loading = false
            this.$notify({
                group: 'response',
                type: 'error',
                title: 'An error occurred. Try again',
                duration: 5000
                })
        })
  }
}
</script>