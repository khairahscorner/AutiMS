<template>
    <main class="pd-main">
        <div class="main-content">
            <header class="header no-border">
                <div class="header-bar">
                <h4 class="text-uppercase">Dashboard</h4>
                </div>
            </header>
            <circle-spin class="m-0" v-if="loading"></circle-spin>
            <div class="row" v-else>
                <div class="col-md-4">
                    <a href="#">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Patients</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">{{details.patients.length}}</h6>
                    </div>
                    </div> 
                    </a>
                    
                </div>
                <div class="col-md-4">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Total Session Reports</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">{{details.session_reports.length}}</h6>
                    </div>
                    </div>
                </div>
                <div class=" col-md-4">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Total Monthly Reports</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">{{details.monthly_reports.length}}</h6>
                    </div>
                    </div>
                </div>
                <!-- <div class="col-lg-3 col-md-4">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Observation Reports</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">9,357</h6>
                    </div>
                    </div>
                </div> -->
            </div>
            
        </div>
    </main>
</template>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            loading: true,
            details: {}
        }
    },
    mounted() {
        axios.get('/therapist/dashboard')
        .then(res => {
            this.loading = false
            this.details = res.data.data
        })
        .catch(err => {
            this.loading = false
            console.log(err.response)
            this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'An Error Occured.',
                    // text: `${err.response}`,
                    duration: 5000,
                    ignoreDuplicates: true
            });
      })
    }
}
</script>