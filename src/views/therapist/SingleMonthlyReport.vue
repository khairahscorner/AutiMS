<template>
    <main class="pd-main">
        <circle-spin class="p-30" v-if="firstLoad"></circle-spin>
        <div class="main-content" v-else>
            <div v-if="!edit">
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">{{report.month}} Report of {{report.patient.name}}</h4>
                            <div>
                                <a @click="editReport" class="text-white btn btn-xs btn-bold mr-10 bg-1 text-center">
                                    Edit<i class=" fa fa-edit"></i>
                                </a>
                                <router-link to="/therapist/monthly-reports" tag="button"
                                    class="mt-sm-10 btn btn-xs btn-bold btn-primary text-center">
                                    Back<i class="fa fa-arrow-circle-o-left"></i>
                                </router-link>
                            </div>
                        </div>
                    </header>
                    <div class="no-border card mb-0 no-radius card-body">
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Receptive Language</h5>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
                            <div class="col-md-8">{{report.recap_base}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
                            <div class="col-md-8">{{report.recap_improv}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
                            <div class="col-md-8">{{report.recap_comm}}</div>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Alternative Communcation</h5>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
                            <div class="col-md-8">{{report.alt_base}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
                            <div class="col-md-8">{{report.alt_improv}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
                            <div class="col-md-8">{{report.alt_comm}}</div>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Fine Motor</h5>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
                            <div class="col-md-8">{{report.motor_base}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
                            <div class="col-md-8">{{report.motor_improv}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
                            <div class="col-md-8">{{report.motor_comm}}</div>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Self Care</h5>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
                            <div class="col-md-8">{{report.self_base}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
                            <div class="col-md-8">{{report.self_improv}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
                            <div class="col-md-8">{{report.self_comm}}</div>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Behaviour</h5>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
                            <div class="col-md-8">{{report.behav_base}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
                            <div class="col-md-8">{{report.behav_improv}}</div>
                            </div>
                            <div class="row no-margin lead">
                            <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
                            <div class="col-md-8">{{report.behav_comm}}</div>
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
import EditReport from '../../components/therapist/monthlyreports/EditSingleMonthlyReport.vue'
import {store} from '../../store'

export default {
    data() {
        return {
            firstLoad: true,
            report_id: null,
            month: "",
            report: {},
            edit: false
        }
    },
    methods: {
       editReport() {
           this.edit = true
       },
       saved() {
           this.fetchReport()
       },
       fetchReport() {
           axios.get(`/monthly_report/single_report/${this.report_id}`)
            .then(res => {
                this.firstLoad = false
                this.edit = false
                store.commit('SAVE_MONTHLY_REPORT', res.data.data)
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