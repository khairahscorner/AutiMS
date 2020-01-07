<template>
    <div class="no-border p-0 card col-xl-8 col-md-7 mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Patient Name Details</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="editPatientProfile()"
                        >EDIT
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-6 br-1">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <div>{{patient_name}}</div>
                            </div>
                                        <div class="form-group">
                                            <label for="age">Age</label>
                                            <div>{{patient_age}}</div>
                                        </div> 
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <div>{{gender}}</div>
                                        </div>
                                <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <div>{{diagnosis}}</div>
                                    </div> 
                    </form>
                  </div>
                  <div class="col-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <div>{{parent_name}}</div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <div>{{parent_email}}</div>
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <div>{{parent_phone}}</div>
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <div>
                                            {{relationship}}
                                            <small class="pl-10 error">**Not Verified</small>
                                        </div>
                            </div> 
                    </form>
                  </div>
                </div>
            </div>
</template>

<script>
import axios from 'axios'

export default {
    props: [
        'patient_id'
    ],
    data() {
        return {
            loading: true,
            details: {},
            patient_name: "",
            patient_age: "",
            gender: "",
            diagnosis: "",
            parent_name: "",
            parent_email: "",
            parent_phone: "",
            relationship: "",
            verified: 'Not verified'
        }
    },
    methods: {
        editPatientProfile(id) {
            this.$emit('editProfile')
        }
    },
    mounted () {
        this.loading = true
        
        axios.get(`/view_patient/${this.patient_id}`)
        .then(res => {
            this.loading = false
            console.log(res.data)
            this.details = res.data
        })
        .catch(err => {
            console.log(err)
            this.loading = false
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: `${res.data.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
        })
    }
}
</script>