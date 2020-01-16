<template>
  <main class="pd-main">
    <div class="main-content">
        <div class="card md-hidden no-border mb-10 no-radius">
                <div class="card-body">
                    <div class="text-center">
                        <p class="mb-0">This shows each patient's profile information. Click on a patient to view their information.</p>
                    </div>
                </div>
        </div>
        <div class="row no-margin">
            <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">patients list</h4>
                        <router-link to="/therapist/patients/new" tag="button"
                        class="btn btn-sm btn-bold btn-primary text-center"
                        >NEW <i class="fa fa-plus-square"></i>
                        </router-link>
                    </div>
                </header>
                <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
                <div v-else class="sm-hidden card-body media-list media-list-hover media-list-divided">
                    <!-- <button @click="viewPatientProfile">view</button> -->
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                            <div slot="id" slot-scope="props">{{props.index}}</div>
                            <div slot="action" slot-scope="props">
                                <nav class="flexbox fs-16">
                                    <a href="#" class="btn btn-xs bg-1" @click="viewPatientProfile(props.row.id)">
                                        <span>
                                            <i class="fa fa-eye"></i>
                                        </span>     
                                    </a>
                                    <a href="#" class="btn btn-xs btn-danger"  @click="deletePatient(props.row.id)">
                                        <span>
                                            <i class="fa fa-trash-o"></i>
                                        </span>     
                                    </a> 
                                </nav>
                                  
                            </div>
                                        
                    </v-client-table> 
                </div>
                <!-- <div :class="patient_list?'sm-visible':'sm-hidden'" class="md-hidden card-body media-list media-list-hover media-list-divided">
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                        <div slot="id" slot-scope="props">{{props.index}}</div>
                        <a href="#" slot="action" slot-scope="props" class="btn btn-sm btn-danger">
                                <span  @click="viewPatientProfileMobile(props.row.id)">
                                     <i class="fa fa-eye"></i>
                                </span>     
                        </a>                         
                    </v-client-table> 
                </div> -->
                
            </div>
            <div class="sm-hidden no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="!showPatient">
                <div class="py-50 card-body">
                  <div class="text-center">
                    <div class="pb-30">
                      <img src="../../assets/img/patients.svg" alt>
                    </div>
                    <p>This shows each patient's profile information. Click on a patient to view their information.</p>
                  </div>
                </div>
            </div>
            
            <component :is="mode" v-else :patient_list="patient_list" :patient_id="patient_id" @editProfile="editProfile" @saveProfile="saveProfile"></component>
        </div>

        <!-- Modal for delete patient -->
            <modal name="delete-patient" :width="400" height="auto" class="modal-container" :clickToClose="false">
                <div class="modal-content">
                    <div class="callout callout-danger1 py-10 px-0 mb-0" role="alert">
                        <span class="close mr-10" @click="hideDeleteModal($modal)" aria-label="Close" data-dismiss="close"><i class="ion-close-round"></i></span>
                        <h5 class="px-10">Delete Patient</h5>
                        <div class="p-10">
                            <p>Are you sure you want to this patient? You will no longer have access to patient's details or any of the records of the patient.</p>
                            <button class="btn btn-bold btn-danger" disabled v-if="load_delete">
                                <circle-spin class="m-0"></circle-spin>
                            </button>
                            <button class="btn btn-bold btn-sm btn-danger" v-else type="button" @click="delPatient">Delete</button>
                        </div>
                    </div>
                </div> 
            </modal>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import allMixins from '../../mixins.js'
import patientProfile from "../../components/therapist/patients/patientProfile.vue"
import editPatientProfile from "../../components/therapist/patients/EditPatientProfile.vue"
import {mapActions, mapMutations} from 'vuex'
// import {store} from '../../store.js'
export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true, 
            load_delete: false,
            showPatient: false,
            mode: "patient-profile",
            patient_id: 0,
            all_patients: [],
            patient_list: true,
            columns: ["id", "name", 'action'],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Patient Name",
                action: 'Actions'
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
        viewPatientProfile(value) {
            this.patient_id = value
            this.showPatient = true
        },
        // viewPatientProfileMobile(value){
        //     this.patient_id = value
        //     this.showPatient = true
        //     this.patient_list = false
        // },
        editProfile() {
            this.mode = "edit-patient-profile"
        },
        saveProfile() {
            this.mode = "patient-profile"
        },
        deletePatient(value) {
            this.patient_id = value
            this.$modal.show("delete-patient")
        },
        delPatient() {
            this.load_delete = true
            axios.delete(`/therapist/delete_patient/${this.patient_id}`)
            .then(res => {
                this.load_delete = false
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                })
                setTimeout(() => {
                    location.reload()
                }, 3000)  
            })
            .catch(err => {
                this.load_delete = false
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: `${err.response.message}`,
                    // text: `${res.data.message}`,
                    duration: 5000,
                    ignoreDuplicates: true
                });
            })
        },
        hideDeleteModal(a) {
            a.hide('delete-patient')
        },
    },
    mounted() {
        this.firstLoad = true
        this.fetchAllTherapistPatients()
        // axios.get('/therapist/view_patients/')
        .then(res => {
            this.firstLoad = false
                console.log(res.data.data)
                return this.data = res.data.data
        })
        .catch(err => {
                console.log(err)
                this.firstLoad = false
                this.$notify({
                        group: 'response',
                        type: 'error',
                        title: `${err}`,
                        // text: `${res.data.message}`,
                        duration: 2500,
                        ignoreDuplicates: true
                });
        })
    },
    components: {
        patientProfile,
        editPatientProfile
    }
}
</script>