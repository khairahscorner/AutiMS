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
                        <router-link to="/therapist/patients/new" tag="button"
                        class="btn btn-sm btn-bold btn-primary text-center"
                        >NEW <i class="ion-android-add-circle"></i>
                        </router-link>
                    </div>
                </header>
                <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
                <div v-else>
                    <div class="h-general scroll card-body media-list media-list-hover media-list-divided">
                        <!-- <button @click="viewPatientProfile">view</button> -->
                        <v-client-table :columns="columns" :data="data" :options="options"> 
                                <div slot="id" slot-scope="props">{{props.index}}</div>
                                <div slot="action" slot-scope="props">
                                    <nav class="flexbox fs-16">
                                        <a href="#" class="btn btn-xs bg-1" @click="viewPatientProfile(props.row.id)">
                                            <span>
                                                <i class="ion-ios-eye"></i>
                                            </span>     
                                        </a>
                                        <a href="#" class="btn btn-xs btn-danger"  @click="deletePatient(props.row.id)">
                                            <span>
                                                <i class="ion-android-delete"></i>
                                            </span>     
                                        </a> 
                                    </nav>
                                    
                                </div>
                                            
                        </v-client-table> 
                    </div>
                </div>  
                
            </div>
            <circle-spin class="mt-sm-10 p-30 no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="loading"></circle-spin>
            <div class="mt-sm-10 no-border card col-xl-8 col-md-7 mb-0 no-radius" v-else>
                <div v-if="!showPatient">
                    <div class="py-50 card-body">
                    <div class="text-center">
                                    <i class="fs-svg ion-ios-people"></i>
                        <p>This shows each patient's profile information. Click on a patient to view their information.</p>
                    </div>
                    </div>
                </div>
                <component :is="mode" v-else :details="details" :patient_list="patient_list" :patient_id="patient_id"
                @editProfile="editProfile" @saveProfile="saveProfile"></component>
            </div>
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
import {store} from '../../store.js'

export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true, 
            loading: false,
            load_delete: false,
            showPatient: false,
            no_therapist: false,
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
            },
            details: {}
        }
    },
    methods: {
        ...mapActions([
            'fetchAllTherapistPatients'
        ]),
        viewPatientProfile(value) {
            this.loading = true
            this.patient_id = value
            axios.get(`/view_patient/${this.patient_id}`)
            .then(res => {
                this.loading = false
                //console.log(res.data)
                store.commit('SAVE_PATIENT_DETAILS', res.data.data)
                this.details = res.data.data
            })
            .catch(err => {
                //console.log(err)
            })
            this.showPatient = true
        },
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
            if(res.data.data.length > 0) {
                    return this.data = res.data.data
                }
                else this.no_therapist = true
        })
        .catch(err => {
                //console.log(err)
                // this.firstLoad = false
        })
    },
    components: {
        patientProfile,
        editPatientProfile
    }
}
</script>