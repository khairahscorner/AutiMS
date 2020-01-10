<template>
    <div class="no-border p-0 card col-xl-8 col-md-7 mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Edit Details of {{name}}</h4>
                        <button v-if="loading_save" class="btn btn-sm btn-bold btn-primary text-center" disabled>
                            <circle-spin class="m-0" ></circle-spin>
                        </button>
                        <button v-else  class="btn btn-sm btn-bold btn-primary text-center" @click="savePatientProfile()">
                            SAVE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-md-6 br-1">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <input type="text" v-model="patient_name" class="form-control" id="name">
                            </div>
                                        <div class="form-group">
                                            <label for="age">Age</label>
                                            <input v-model="patient_age" type="text" class="form-control" id="age"> 
                                        </div> 
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <multiselect v-model="gender" :options="['Male', 'Female']" @blur="$v.gender.$touch()"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                        </div>
                                <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <input v-model="diagnosis" type="text" class="form-control" id="diagnosis">
                                    </div> 
                                    <div class="form-group">
                                        <label for="diagnosis">Diagnosis Summary</label>
                                        <input v-model="summary" type="text" class="form-control" id="summary">
                                    </div>
                    </form>
                  </div>
                  <div class="col-md-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <input v-model="parent_name" type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="parent_email" type="text" class="form-control" id="email">
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input v-model="parent_phone" type="text" class="form-control" id="phone_no">
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship
                                            <small v-if="verified == 1" class="pl-10 success">** Verified</small>
                                            <small v-else class="pl-10 error">**Not Verified</small>
                                        </label>
                                        <input v-model="relationship" disabled type="text" class="form-control" id="relationship">
                            </div> 
                    </form>
                  </div>
                </div>
            </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store.js'
export default {
    props: [
        'patient_id'
    ],
    data() {
        return {
            loading_save: false,
            name: '',
            patient_name: "",
            patient_age: "",
            gender: "",
            diagnosis: "",
            summary: '',
            parent_name: "",
            parent_email: "",
            parent_phone: "",
            relationship: "",
            verified: 0
        }
    },
    methods: {
        savePatientProfile() {
            this.loading_save = true
            let userData = {
                name: this.patient_name,
                age: this.patient_age,
                gender: this.gender,
                diagnosis: this.diagnosis,
                summary: this.summary,
                parent_name: this.parent_name,
                parent_email: this.parent_email,
                parent_phone: this.parent_phone,
                relationship: this.relationship
            }
            axios.put(`/therapist/edit_patient/${this.patient_id}`, userData)
            .then(res => {
                console.log(res)
                this.loading_save = false
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                })
                setTimeout(() => {
                    this.$emit('saveProfile')
                }, 3000)  
            })
            .catch(err => {
                this.loading_save = false
                console.log(err)
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: `${err}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
            
        }
    },
    mounted () {
        this.patient_name = store.state.patient_details.name
        this.name = this.patient_name
        this.patient_age = store.state.patient_details.age
        this.gender = store.state.patient_details.gender
        this.diagnosis = store.state.patient_details.diagnosis
        this.summary = store.state.patient_details.summary
        this.parent_name = store.state.patient_details.parent_name
        this.parent_email = store.state.patient_details.parent_email
        this.parent_phone = store.state.patient_details.parent_phone
        this.relationship = store.state.patient_details.relationship
        this.verified = store.state.patient_details.parent_verified
    }
}
</script>