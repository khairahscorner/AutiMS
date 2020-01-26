<template>
    <main class="pd-main">
        <div class="main-content">
            <header class="header no-border">
                <div class="header-bar">
                <h4 class="text-uppercase">Dashboard</h4>
                </div>
            </header>
            <div class="row">
                <div class="col-md-4">
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
                <div class="col-md-4">
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
            reports: 0
        }
    },
    mounted() {
        this.loading = true
        axios.get('/caregiver')
            .then(res => {
                let email = res.data.data.caregiver.parent_email
                axios.get(`/parent/view_patients/${email}`) 
                .then(res => {
                    //console.log(res)
                    this.therapists = res.data.data.length
                    axios.get('/caregiver/dashboard')
                    .then(res => {
                        this.loading = false
                        this.reports = res.data.data.observation_reports.filter(report => report.creator_type == 'caregiver').length
                    })
                    .catch(err => {
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