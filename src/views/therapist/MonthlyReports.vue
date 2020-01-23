<template>
  <main class="pd-main">
    <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
    <div v-else class="main-content">
        <div class="card no-radius text-center card-body p-50" v-if="no_therapist">
                <div class="pb-10">
                    <img src="../../assets/img/patients.svg" alt>
                </div>
                <p>You haven't added any patient yet.</p>
                <div>
                   <router-link tag="a" to="/therapist/patients/new" class="btn-bold mr-10 btn btn-xs bg-1" href="#">
                        <span class="text-uppercase">Add New</span>
                    </router-link> 
                </div>
                 
        </div>
        <div v-else class="row no-margin">
            <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">patients list</h4> 
                    </div>
                </header>
                <div class="scroll h-general card-body media-list media-list-hover media-list-divided">
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                            <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="action" slot-scope="props">
                                <nav class="flexbox fs-16">
                                    <a href="#" class="btn btn-xs bg-1" @click="viewPatientMonthlyReports(props.row)">
                                        <span>
                                            <i class="fa fa-eye"></i>
                                        </span>     
                                    </a>
                                </nav>
                            </div>                      
                    </v-client-table> 
                </div>
                
            </div>
            <circle-spin class="mt-sm-10 p-30 no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="loading"></circle-spin>
            <div class="mt-sm-10 no-border card col-xl-8 col-md-7 mb-0 no-radius" v-else>
                    <div class="text-center card-body m-50" v-if="!showDetails">
                            <div class="pb-30">
                            <img src="../../assets/img/patients.svg" alt>
                            </div>
                            <p>This shows an overview of all monthly reports for each patient. Click on a patient to view.</p>
                    </div>
                <monthly-report-layout v-else :has_monthly_report="has_monthly_report" :all_reports="all_reports" :patient_name="patient_name" :patient_id="patient_id"></monthly-report-layout>
            </div>
                
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import monthlyReportLayout from "../../components/therapist/monthlyreports/MonthlyReportLayout.vue"
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            firstLoad: true,
            loading: false,
            showDetails: false,
            no_therapist: false,
            patient_id: 0,
            patient_name: '',
            all_reports: [],
            has_monthly_report: null,
            columns: ["id", "name", 'action'],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Patient Name",
                action: "Actions"
              },
              sortable: ["name"],
              filterable: ["name"]
            }
        }
    },
    methods: {
        ...mapActions([
            'fetchAllTherapistPatients'
        ]),
        viewPatientMonthlyReports(payload) {
            this.loading = true
            //console.log(payload)
            this.patient_id = payload.id
            this.patient_name = payload.name
            axios.get(`/monthly_report/${payload.id}`)
            .then(res => {
                //console.log(res)
                if(res.data.data.length>0){
                    this.has_monthly_report = true
                }
                else {
                    this.has_monthly_report = false
                }
                this.all_reports = res.data.data
                this.loading = false
                    //console.log(this.all_reports)
                this.showDetails = true
                
            })
            
            // Fetch patient details using ID
        }
    },
    mounted() {
        this.firstLoad = true
        this.fetchAllTherapistPatients()
        .then(res => {
            this.firstLoad = false
            if(res.data.data.length > 0) {
                    return this.data = res.data.data
                }
                else this.no_therapist = true
        })
        .catch(err => {
                //console.log(err)
                this.firstLoad = false
                this.$notify({
                        group: 'response',
                        type: 'error',
                        title: 'Failed to load Patients. Try again',
                        duration: 2500,
                        ignoreDuplicates: true
                });
        })
    }, 
    components: {
        monthlyReportLayout
    }
}
</script>