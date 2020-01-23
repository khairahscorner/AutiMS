<template>
    <main class="pd-main">
        <circle-spin class="p-30" v-if="firstLoad"></circle-spin>
        <div class="main-content" v-else>
            <div v-if="!edit">
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">{{datey(new Date(report.date))}} Report  for {{therapist_name}}</h4>
                            <div>
                                <a @click="editReport" class="text-white btn btn-xs btn-bold mr-10 bg-1 text-center">
                                    Edit<i class=" fa fa-edit"></i>
                                </a>
                                <router-link to="/observation-reports" tag="button"
                                    class="btn btn-xs btn-bold btn-primary text-center">
                                    Back<i class="fa fa-arrow-circle-o-left"></i>
                                </router-link>
                            </div> 
                        </div>
                    </header>
                    <div class="no-border card mb-0 no-radius card-body">
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Title</h5>
                                    <div class="b-1 p-10">
                                        {{report.title}}
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Date</h5>
                                    <div class="b-1 p-10">
                                        {{datey(new Date(report.date))}}
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Summary</h5>
                                    <div class="b-1 p-10">
                                        {{report.summary}}
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Suggestions</h5>
                                    <div class="b-1 p-10">
                                        {{report.suggestions}}
                                    </div>
                                </div>
                    </div>
            </div>
            <component v-else :is="'edit-report'" @saved='saved'></component>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import EditReport from './EditSingleObservationReport.vue'
import {store} from '../../store'

export default {
    data() {
        return {
            firstLoad: true,
            report_id: null,
            therapist_name: '',
            report: {},
            edit: false
        }
    },
    methods: {
        datey(en) {
            return en.toLocaleDateString('en-GB')
        },
       editReport() {
           this.edit = true
       },
       saved() {
           this.fetchReport()
       },
       fetchReport() {
            store.commit('SAVE_THERAPIST_NAME', this.therapist_name)
            axios.get(`/observation_report/single_report/${this.report_id}`)
            .then(res => {
                this.firstLoad = false
                this.edit = false
                //console.log(res.data)
                store.commit('SAVE_OBSERVATION_REPORT', res.data.data)
                this.report = res.data.data
            })
            .catch(err => {
                this.firstLoad = false
                this.edit = false
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'Failed to fetch report. Try again',
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
       }  
    },
    mounted() {
        let payload = this.$route.params.payload.split('&')
        this.report_id = payload[0]
        this.therapist_name = payload[1]
        this.fetchReport()    
    },
    components: {
        EditReport
    }
}
</script>