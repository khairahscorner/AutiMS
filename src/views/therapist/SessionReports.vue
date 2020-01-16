<template>
  <main class="pd-main">
    <div class="main-content">
        <div class="row no-margin">
            <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">patients list</h4>
                    </div>
                </header>
                <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
                <div v-else class="scroll h-400px card-body media-list media-list-hover media-list-divided">
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                        <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="action" slot-scope="props">
                                <nav class="flexbox fs-16">
                                    <a href="#" class="btn btn-xs bg-1" @click="viewPatientSessionReports(props.row)">
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
            <div v-else class="no-border card col-xl-8 col-md-7 mb-0 no-radius">
                <div class="card-body m-50" v-if="!showDetails">
                  <div class="text-center">
                    <div class="pb-30">
                      <img src="../../assets/img/patients.svg" alt>
                    </div>
                    <p>This shows an overview of all session reports for each patient. Click on a patient to view.</p>
                  </div>
                </div>
                <session-report-layout v-else :has_session_report="has_session_report" :all_reports="all_reports" :patient_name="patient_name" :patient_id="patient_id"></session-report-layout>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import {mapActions, mapMutations} from 'vuex'
import sessionReportLayout from "../../components/therapist/sessionreports/SessionReportLayout.vue"

export default {
    data() {
        return {
            firstLoad: true,
            loading: false,
            showDetails: false,
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
        viewPatientSessionReports(payload) {
            this.loading = true
            // console.log(payload)
            this.patient_id = payload.id
            this.patient_name = payload.name
            axios.get(`/session_report/${payload.id}`)
            .then(res => {
                // console.log(res)
                if(res.data.data.length>0){
                    this.has_session_report = true
                }
                else {
                    this.has_session_report = false
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
        this.fetchAllTherapistPatients()
        .then(res => {
            this.firstLoad = false
                return this.data = res.data.data
        })
        .catch(err => {
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
        sessionReportLayout
    }
}
</script>