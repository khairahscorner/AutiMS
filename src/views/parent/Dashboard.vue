<template>
    <main class="pd-main">
        <div class="main-content">
            <header class="header no-border">
                <div class="header-bar">
                <h4 class="text-uppercase">Dashboard</h4>
                </div>
            </header>
            <circle-spin class="mt-50" v-if="loading"></circle-spin>
            <div v-else class="row">
                <div class=" col-md-4">
                    <a href="#">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Caregivers</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">{{caregivers}}</h6>
                    </div>
                    </div> 
                    </a>   
                </div>
                <div class=" col-md-4">
                    <a href="#">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Therapists</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">{{therapists}}</h6>
                    </div>
                    </div> 
                    </a>   
                </div>
                <div class=" col-md-4">
                    <div class="card card-body">
                    <h5 class="text-uppercase">Observation Reports</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-people text-primary font-s"></span>
                        <h6 class="mb-0 font-s">{{reports}}</h6>
                    </div>
                    </div>
                </div>
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
            therapists: 0,
            caregivers: 0,
            reports: 0
        }
    },
    mounted() {
        this.loading = true
        axios.get('/parent')
            .then(res => {
                let email = res.data.data.email
                axios.get(`/parent/view_patients/${email}`) 
                .then(res => {
                    //console.log(res)
                    this.therapists = res.data.data.length
                    axios.get('/parent/dashboard')
                    .then(res => {
                        this.loading = false
                        this.caregivers = res.data.data.caregivers.length
                        this.reports = res.data.data.observation_reports.filter(report => report.creator_type == 'parent').length
                    })
                    .catch(err => {
                        //console.log(err)
                        // this.loading = false
                        // this.$notify({
                        //         group: 'response',
                        //         type: 'error',
                        //         title: 'An Error occured',
                        //         // text: `${res.data.message}`,
                        //         duration: 2500,
                        //         ignoreDuplicates: true
                        // });
                    })
                })
                .catch(err => {
                        //console.log(err)
                        // this.loading = false
                })   
            })
    }
}
</script>