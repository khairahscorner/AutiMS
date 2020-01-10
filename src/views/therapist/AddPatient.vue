<template>
  <main class="pd-main">
    <div class="main-content">
            <div class="card br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Add New Patient</h4>
                        <button v-if="loading_add" class="btn btn-sm btn-bold btn-primary text-center" disabled>
                            <circle-spin class="m-0" ></circle-spin>
                        </button>
                        <button v-else class="btn btn-sm btn-bold btn-primary text-center"  @click="addNewPatient">
                            SAVE
                        </button>
                    </div>
                </header>
                <div class="card-body p-0 m-30 row no-margin b-1">
                    <div class="col-md-7 br-1 br-primary">
                        <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <input type="text" v-model="patient_name" class="form-control" id="name">
                            </div>
                            <div class="row">
                                <div class="col-6 form-group">
                                            <label for="age">Age</label>
                                            <input v-model="patient_age" type="text" class="form-control" id="age"> 
                                        </div> 
                                        <div class="col-6 form-group">
                                            <label for="gender">Gender</label>
                                            <multiselect v-model="gender" :options="['Male', 'Female']" @blur="$v.gender.$touch()"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                        </div>
                            </div>
                                 <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <input v-model="diagnosis" type="text" class="form-control" id="diagnosis">
                                    </div>       
                                <div class="form-group">
                                        <label for="summary">Brief Summary</label>
                                        <input v-model="summary" type="text" class="form-control" id="summary">
                                    </div> 
                    </form>
                    </div>
                    <div class="col-md-5">
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
                                        <label for="relationship">Relationship</label>
                                        <input v-model="relationship" type="text" class="form-control" id="relationship">
                            </div> 
                        </form>
                    </div>
                </div>
                
            </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import {
  required,
  email,
} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            loading: false,
            patient_name: "",
            patient_age: '',
            diagnosis: '',
            gender: '',
            summary: '',
            parent_name: '',
            parent_email: '',
            parent_phone: '',
            relationship: ''
        }
    },
    methods: {
        addNewPatient() {
            this.loading = true
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
            axios.post('/therapist/add_patient', userData)
            .then(res => {
                this.loading = false
                console.log(res)
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                });
                setTimeout(() => {
                    this.$router.push('/therapist/patients')
                }, 3000)
            })
            .catch(err => {
                this.loading = false
                console.log(err.response)
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: `${err.response.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
        }
    }
}
</script>