<template>
    <div class="no-border p-0 card col-xl-8 col-md-7 mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Edit Patient Name Details</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="savePatientProfile()"
                        >SAVE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-6 br-1">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <input type="text" :value="patient_name" class="form-control" id="name">
                            </div>
                                        <div class="form-group">
                                            <label for="age">Age</label>
                                            <input :value="patient_age" type="text" class="form-control" id="age"> 
                                        </div> 
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <multiselect v-model="gender" :options="['Male', 'Female']" @blur="$v.gender.$touch()"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                        </div>
                                <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <input :value="diagnosis" type="text" class="form-control" id="diagnosis">
                                    </div> 
                    </form>
                  </div>
                  <div class="col-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <input :value="parent_name" type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input :value="parent_email" type="text" class="form-control" id="email">
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input :value="parent_phone" type="text" class="form-control" id="phone_no">
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <input :value="relationship" type="text" class="form-control" id="relationship">
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
        savePatientProfile(id) {
            this.$emit('saveProfile')
        }
    },
    mounted () {

    }
}
</script>