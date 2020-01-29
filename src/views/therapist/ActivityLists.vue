<template>
    <main class="pd-main">
        <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
        <div v-else class="main-content">
            <div class="card no-radius text-center card-body p-50" v-if="no_therapist">
                                    <i class="fs-svg ion-ios-people"></i>
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
                        <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
                        <v-client-table v-else :columns="columns" :data="data" :options="options"> 
                            <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="action" slot-scope="props">
                                <nav class="flexbox fs-16">
                                    <a href="#" class="btn btn-xs bg-1"  @click="viewPatientActivityList(props.row.id)">
                                        <span>
                                            <i class="ion-ios-eye"></i>
                                        </span>     
                                    </a>
                                </nav>
                                  
                            </div>                         
                        </v-client-table> 
                    </div>
                    
                </div>
                <div class="mt-sm-10 no-border card col-xl-8 col-md-7 mb-0 no-radius">
                    <circle-spin class="p-30" v-if="loading"></circle-spin>
                    <div v-else >
                        <div class="text-center card-body m-50" v-if="!showDetails">
                                    <i class="fs-svg ion-ios-list-outline"></i>
                                <p>This shows each patient's activity list. Click on a patient to view.</p>
                        </div>
                        <component :is="mode" v-else :patient_id="patient_id" 
                        :has_activity_list="has_activity_list" :details="details"></component>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import singleActivityList from "../../components/therapist/activitylists/SingleActivityList.vue"
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            firstLoad: true,
            loading: false,
            showDetails: false,
            no_therapist: false,
            patient_id: null,
            details: {},
            mode: "single-activity-list",
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
        viewPatientActivityList(value) {
           this.loading = true
           this.mode = "single-activity-list"
            this.patient_id = value 
            axios.get(`/view_patient/${value}`)
            .then(res => {
                //console.log(res.data)
                this.loading = false
                if(res.data.data.morning_activities.length > 0 || res.data.data.afternoon_activities.length > 0 || res.data.data.evening_activities.length > 0){
                    this.has_activity_list = true
                }
                else { this.has_activity_list = false}
                this.details = res.data.data
                //console.log(this.details)
            })
            .catch(err => {
                //console.log(err)
                // this.loading = false
            })
            this.showDetails = true
            // Fetch patient details using ID
        },
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
                // this.firstLoad = false
                // this.$notify({
                //         group: 'response',
                //         type: 'error',
                //         title: 'An Error occured',
                //         // text: `${res.data.message}`,
                //         duration: 2500,
                //         ignoreDuplicates: true
                // });
        })
    },
    components: {
        singleActivityList
    }
}
</script>