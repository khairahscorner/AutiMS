<template>
    <main class="pd-main">
        <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
        <div v-else class="main-content">
            <div class="card no-radius text-center card-body" v-if="no_therapist">
                <div class="pb-30">
                    <img src="../../../assets/img/patients.svg" alt>
                </div>
                <p>No Therapist has added you to a patient yet or you haven't verfied your relationship.</p>
            </div>
            <div v-else class="row no-margin">
                <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">therapist list</h4>
                        </div>
                    </header>
                    <div class="scroll h-400px card-body media-list media-list-hover media-list-divided">
                        <v-client-table :columns="columns" :data="data" :options="options">
                            <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="name" slot-scope="props">{{props.row.therapist.name}}</div>
                                <div slot="action" slot-scope="props">
                                    <nav class="flexbox fs-16">
                                        <a href="#" class="btn btn-xs bg-1" @click="viewChildMonthlyReports(props.row)">
                                            <span>
                                                <i class="fa fa-eye"></i>
                                            </span>     
                                        </a>
                                    </nav>
                                </div>                     
                        </v-client-table> 
                    </div>
                    
                </div>
                <circle-spin class="p-30 no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="loading"></circle-spin>
                <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius" v-else>
                        <div class="text-center card-body m-50" v-if="!showDetails">
                            <div class="pb-30">
                                <img src="../../../assets/img/patients.svg" alt>
                            </div>
                            <p>This shows an overview of all monthly reports by each therapist. Click on a therapist to view.</p>
                        </div>
                        <monthly-report-layout v-else :has_monthly_report="has_monthly_report" :all_reports="all_reports" :therapist_name="therapist_name"></monthly-report-layout>
                </div>
            </div>
        </div>
  </main>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import monthlyReportLayout from "./MonthlyReportLayout.vue"
import allMixins from '../../../mixins'

export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true,
            loading: false,
            showDetails: false,
            therapist_name: '',
            no_therapist: false,
            all_reports: [],
            has_monthly_report: null,
            columns: ["id", "name", 'action'],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Therapist Name"
              },
              sortable: ["name"],
              filterable: ["name"]
            }
        }
    },
    methods: {
        viewChildMonthlyReports(payload) {
            this.loading = true
            this.therapist_name = payload.therapist.name
            axios.get(`/monthly_report/${payload.id}`)
            .then(res => {
                // console.log(res)
                if(res.data.data.length>0){
                    this.has_monthly_report = true
                }
                else {
                    this.has_monthly_report = false
                }
                this.all_reports = res.data.data
                this.loading = false
                    // console.log(this.all_reports)
                this.showDetails = true      
            })
        }
    },
    mounted() {
        this.firstLoad = true
        let details = this.$jwt.decode(this.retrieveToken(window.btoa('userToken')))
            console.log(details)
        if(details.data.user_type == 'parent') {
            axios.get('/parent')
            .then(res => {
                let email = res.data.data.email
                axios.get(`/parent/view_patients/${email}`) 
                .then(res => {
                    this.firstLoad = false
                    console.log(res)
                    if(res.data.data.length > 0) {
                        this.data =  res.data.data.filter(patient => patient.parent_verified == 1)
                        if(this.data.length > 0) {
                            return this.data
                        }
                        else this.no_therapist = true
                    }
                    else this.no_therapist = true
                })
                .catch(err => {
                        console.log(err)
                        this.firstLoad = false
                        this.$notify({
                                group: 'response',
                                type: 'error',
                                title: 'An Error occured',
                                // text: `${res.data.message}`,
                                duration: 2500,
                                ignoreDuplicates: true
                        });
                })   
            })
        }
        else {
            axios.get('/caregiver')
            .then(res => {
                let email = res.data.data.caregiver.parent_email
                // let email = 'parent@gmail.com'
                axios.get(`/parent/view_patients/${email}`) 
                .then(res => {
                    this.firstLoad = false
                    console.log(res)
                    if(res.data.data.length > 0) {
                        this.data =  res.data.data.filter(patient => patient.parent_verified == 1)
                        if(this.data.length > 0) {
                            return this.data
                        }
                        else this.no_therapist = true
                    }
                    else this.no_therapist = true
                })
                .catch(err => {
                        console.log(err)
                        this.firstLoad = false
                        this.$notify({
                                group: 'response',
                                type: 'error',
                                title: 'An Error occured',
                                // text: `${res.data.message}`,
                                duration: 2500,
                                ignoreDuplicates: true
                        });
                })   
            })
        }
    },
    components: {
        monthlyReportLayout
    }
}
</script>