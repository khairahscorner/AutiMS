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
                <div class="scroll h-general card-body media-list media-list-hover media-list-divided">
                        <v-client-table :columns="columns" :data="data" :options="options">
                            <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="name" slot-scope="props">{{props.row.therapist.name}}</div>
                                <div slot="action" slot-scope="props">
                                    <nav class="flexbox fs-16">
                                        <a href="#" class="btn btn-xs bg-1"  @click="viewChildActivityList(props.row)">
                                            <span>
                                                <i class="fa fa-eye"></i>
                                            </span>     
                                        </a>
                                    </nav>
                                </div>                    
                        </v-client-table> 
                    </div>
                    
                </div>
                <div class="mt-sm-10 no-border card col-xl-8 col-md-7 mb-0 no-radius">
                    <circle-spin class="p-30" v-if="loading"></circle-spin>
                    <div v-else>
                        <div class="text-center card-body m-50" v-if="!showDetails">
                            <div class="pb-30">
                            <img src="../../../assets/img/patients.svg" alt>
                            </div>
                            <p>This shows the activity list of the patient for each therapist. Click on a therapist to view.</p>
                        </div>
                        <component :is="mode" v-else :therapist_name="therapist_name" 
                            :has_activity_list="has_activity_list" :details="details">
                        </component>
                    </div>
                </div>
            </div>
        </div>
  </main>
</template>

<script>
import axios from 'axios'
import singleActivityList from "./SingleActivityList.vue"
import allMixins from '../../../mixins'

export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true,
            loading: false,
            showDetails: false,
            no_therapist: false,
            therapist_name: '',
            details: {},
            mode: "single-activity-list",
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
        viewChildActivityList(payload) {
           this.loading = true
           this.mode = "single-activity-list"
           this.therapist_name = payload.therapist.name
            axios.get(`/view_patient/${payload.id}`)
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
                    this.loading = false
                    this.$notify({
                        group: 'response',
                        type: 'error',
                        title: 'An Error Occured',
                        duration: 2500,
                        ignoreDuplicates: true
                    });
            })
            this.showDetails = true
            // Fetch patient details using ID
        },
    },
    mounted() {
        this.firstLoad = true
        let details = this.$jwt.decode(this.retrieveToken(window.btoa('userToken')))
            //console.log(details)
        if(details.data.user_type == 'parent') {
            axios.get('/parent')
            .then(res => {
                let email = res.data.data.email
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
                        //console.log(err)
                        // this.firstLoad = false
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
                        //console.log(err)
                        // this.firstLoad = false
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
        singleActivityList
    }
}
</script>