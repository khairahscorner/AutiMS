<template>
  <main class="pd-main">
    <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
    <div v-else class="main-content">
        <div class="card no-radius text-center card-body" v-if="no_therapist">
                                    <i class="fs-svg ion-ios-list-outline"></i>
                <p>No Therapist has added you to a patient yet or you haven't verfied your relationship.</p>
        </div>
        <div v-else class="row no-margin">
            <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">therapist list</h4>
                    </div>
                </header>
                <div class="scroll h-general card-body media-list media-list-hover media-list-divided">
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                        <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="name" slot-scope="props">{{props.row.therapist.name}}</div>
                            <div slot="action" slot-scope="props">
                                <nav class="flexbox fs-16">
                                    <a href="#" class="btn btn-xs bg-1" @click="viewChildObservationReports(props.row)">
                                        <span>
                                            <i class="ion-ios-eye"></i>
                                        </span>     
                                    </a>
                                </nav>
                            </div>                       
                    </v-client-table> 
                </div>
                
            </div>
            <circle-spin class="mt-sm-10 p-30 no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="loading"></circle-spin>
            <div v-else class="mt-sm-10 no-border card col-xl-8 col-md-7 mb-0 no-radius">
                    <div class="text-center card-body m-50" v-if="!showDetails">
                                    <i class="fs-svg ion-ios-list-outline"></i>
                        <p>This shows an overview of all observation reports by each therapist. Click on a therapist to view.</p>
                    </div>
                    <observation-report-layout v-else :has_observation_report="has_observation_report" :all_reports="all_reports" 
                    :therapist_name="therapist_name" :patient_id="patient_id"></observation-report-layout>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import {mapActions} from 'vuex'
import observationReportLayout from "./ObservationReportLayout.vue"
import allMixins from '../../mixins'

export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true,
            loading: false,
            showDetails: false,
            no_therapist: false,
            creator_type: null,
            therapist_name: '',
            patient_id: null,
            all_reports: [],
            has_observation_report: null,
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
        viewChildObservationReports(payload) {
            this.loading = true
            this.therapist_name = payload.therapist.name
            this.patient_id = payload.id
            axios.get(`/observation_report/${payload.id}`)
            .then(res => {
                this.all_reports = res.data.data.filter(report => report.creator_type == this.creator_type)
                    if(this.all_reports.length > 0){
                        this.has_observation_report = true
                    }
                    else this.has_observation_report = false

                this.loading = false
                    //console.log(this.all_reports)
                this.showDetails = true  
            })
        }
    },
    mounted() {
        this.firstLoad = true
       
            axios.get('/caregiver')
            .then(res => {
                let email = res.data.data.caregiver.parent_email
                this.creator_type = res.data.data.user_type
                axios.get(`/parent/view_patients/${email}`) 
                .then(res => {
                    this.firstLoad = false
                    //console.log(res)
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
                })   
            })
    },
    components: {
        observationReportLayout
    }
}
</script>