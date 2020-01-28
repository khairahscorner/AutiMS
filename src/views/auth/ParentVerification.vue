<template>
  <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
            <div class="card p-30 w-500px mb-0 no-radius">
                <circle-spin class="m-30" v-if="loading"></circle-spin>
                <div v-else>
                    <img class="img-tb align-self-center" src="../../assets/logo.png" alt="...">
                    <h4 class="text-uppercase fw-600 mt16 text-center">Relationship Verified</h4>
                    <span>You've succesfully verified your relationship. Log in to have access to therapist's documentation.</span>
                    <div>
                        <router-link to="/login" tag="button" class="text-uppercase btn btn-bold btn-primary">Log in</router-link>
                    </div>
                </div> 
            </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
          loading: true
        }
    },
    mounted() {
        this.loading = true
        localStorage.clear()
        let email = this.$route.params.parent_email
        axios.post(`/register/verify/${email}`)
        .then(res => {
            this.loading = false
            this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
            })
        })
        .catch(err => {
            this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'An Error Occured. Try again',
                    duration: 2500,
                    ignoreDuplicates: true
            });
        })
    } 
}
</script>
