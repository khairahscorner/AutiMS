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
                    <h5 class="text-uppercase">Total Observation Reports</h5>
                    <div class="flexbox mt-2">
                        <span class="ion-ios-albums text-primary font-s"></span>
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
    methods: {
        async metrics(payload) {
            for(let i=0; i< payload.length; i++) {
                        await axios.get(`/observation_report/${payload[i].id}`)
                        .then(res => {
                            this.reports += res.data.data.filter(report => report.creator_type == 'caregiver').length
                        })
                    }
                    this.loading = false
        }
    },
    mounted() {
        this.loading = true
        axios.get('/caregiver')
            .then(res => {
                let email = res.data.data.caregiver.parent_email
                axios.get(`/parent/view_patients/${email}`) 
                .then(res => {
                    let all_therapists = res.data.data.filter(patient => patient.parent_verified == 1)
                    this.therapists = all_therapists.length
                    this.metrics(all_therapists)
                    
                })
                .catch(err => {
                })   
            })
    }
}
</script>