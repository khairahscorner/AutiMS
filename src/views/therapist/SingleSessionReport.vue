<template>
    <main class="pd-main">
        <circle-spin class="p-30" v-if="firstLoad"></circle-spin>
        <div class="main-content" v-else>
            <div v-if="!edit">
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">{{datey(new Date(report.date))}} Report of {{report.patient.name}}</h4>
                            <div>
                                <a @click="editReport" class="text-white btn btn-xs btn-bold mr-10 bg-1 text-center">
                                    Edit<i class=" fa fa-edit"></i>
                                </a>
                                <router-link to="/therapist/session-reports" tag="button"
                                    class="btn btn-xs btn-bold btn-primary text-center">
                                    Back<i class="fa fa-arrow-circle-o-left"></i>
                                </router-link>
                            </div> 
                        </div>
                    </header>
                    <div class="no-border card mb-0 no-radius card-body">
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Before-Session Assessment</h5>
                                    <div class="b-1 p-10">
                                        {{report.initial_assesment}}
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Session Summary</h5>
                                    <div class="b-1 p-10">
                                        {{report.session_summary}}
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">End-of-Session Assessment</h5>
                                    <div class="b-1 p-10">
                                        {{report.final_assesment}}
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Other Notes</h5>
                                    <div class="b-1 p-10">
                                        {{report.other_notes}}
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
import EditReport from '../../components/therapist/sessionreports/EditSingleSessionReport.vue'
import {store} from '../../store'

export default {
    data() {
        return {
            firstLoad: true,
            report_id: null,
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
           axios.get(`/session_report/single_report/${this.report_id}`)
            .then(res => {
                this.firstLoad = false
                this.edit = false
                store.commit('SAVE_SESSION_REPORT', res.data.data)
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
        this.report_id = this.$route.params.report_id
        this.fetchReport()
        
    },
    components: {
        EditReport
    }
}
</script>