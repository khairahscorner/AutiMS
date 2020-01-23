<template>
    <div >
                <!-- For mobile screens -->
                <header class=" no-border">
                    <!-- <a v-if="!patient_list" href="#" @click="goToPatientList" class="md-hidden">
                        <i class="fa fa-arrow-left"></i>
                    </a> -->
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Details of {{details.name}}</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="editPatientProfile()"
                        >EDIT
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-md-6 br-1">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <div>{{details.name}}</div>
                            </div>
                                        <div class="form-group">
                                            <label for="age">Age</label>
                                            <div>{{details.age}}</div>
                                        </div> 
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <div>{{details.gender}}</div>
                                        </div>
                                <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <div>{{details.diagnosis}}</div>
                                    </div> 
                                    <div class="form-group">
                                        <label for="diagnosis">Diagnosis Summary</label>
                                        <div>{{details.summary}}</div>
                                    </div>
                    </form>
                  </div>
                  <div class="col-md-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <div>{{details.parent_name}}</div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <div>{{details.parent_email}}</div>
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <div>{{details.parent_phone}}</div>
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <div>
                                            {{details.relationship}}
                                            <small v-if="details.parent_verified == 1" class="pl-10 success">** Verified</small>
                                            <small v-else class="pl-10 error">**Not Verified</small>
                                        </div>
                            </div> 
                    </form>
                  </div>
                </div>
            </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../../store.js'
export default {
    props: [
        'patient_id', 'patient_list', 'details'
    ],
    methods: {
        goToPatientList() {
            this.patient_list = true
        },
        editPatientProfile(id) {
            this.$emit('editProfile')
        }
    },
}
</script>