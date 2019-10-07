<template>
  <main class="pd-main">
    <div class="main-content">
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
                <div class="card-body media-list media-list-hover media-list-divided">
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                        <a href="#" class="media media-single">
                            <span slot="id" slot-scope="props">{{props.index}}</span>
                            <span slot="name" slot-scope="props" class="title">{{props.row.firstname}} {{props.row.lastname}}</span>
                            <span class="btn btn-sm btn-danger" @click="viewPatientProfile(props.row.id)">
                                <i class="fa fa-eye"></i>
                            </span>
                        </a>                        
                    </v-client-table> 
                </div>
                
            </div>
            <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="!showPatient">
                <div class="card-body">
                  <div class="text-center">
                    <div class="pb-30">
                      <img src="../../assets/img/patients.svg" alt>
                    </div>
                    <p>This shows each patient's profile information. Click on a patient to view their information.</p>
                  </div>
                </div>
            </div>
            
            <component :is="mode" v-else @editProfile="editProfile" @saveProfile="saveProfile"></component>
        </div>
    </div>
  </main>
</template>

<script>
import patientProfile from "../../components/therapist/patientProfile.vue"
import editPatientProfile from "../../components/therapist/EditPatient.vue"

export default {
    data() {
        return {
            showPatient: false,
            mode: "patient-profile",
            patientId: 0,
            columns: ["id", "name"],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Patient Name"
              },
              sortable: ["name"],
              filterable: ["name"]
            }
        }
    },
    methods: {
        viewPatientProfile(value) {
            this.patientId = value
            this.showPatient = true
            // Fetch patient details using ID
        },
        editProfile() {
            this.mode = "edit-patient-profile"
        },
        saveProfile() {
            this.mode = "patient-profile"
        }
    },
    components: {
        patientProfile,
        editPatientProfile
    }
}
</script>