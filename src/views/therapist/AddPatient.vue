<template>
  <main class="pd-main">
    <div class="main-content">
            <div class="card br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Add New Patient</h4>
                        <button v-if="loading" class="btn btn-sm btn-bold btn-primary text-center" disabled>
                            <circle-spin class="m-0" ></circle-spin>
                        </button>
                        <button v-else :disabled="$v.$invalid" class="btn btn-sm btn-bold btn-primary text-center"  @click="addNewPatient">
                            SAVE
                        </button>
                    </div>
                </header>
                <div class="card-body p-0 m-30 row no-margin b-1">
                    <div class="col-md-7 br-1 br-primary">
                        <form>
                            <div class="form-group pt-10">
                                <label for="patient_name">Patient Name</label>
                                <input type="text" v-model="patient_name" class="form-control" id="name" @blur="$v.patient_name.$touch()">
                                <div v-if="$v.patient_name.$dirty">
                                    <div class="error" v-if="!$v.patient_name.required">*Patient name is required.</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6 form-group">
                                    <label for="patient_age">Age</label>
                                    <input v-model="patient_age" type="text" class="form-control" id="age" @blur="$v.patient_age.$touch()"> 
                                    <div v-if="$v.patient_age.$dirty">
                                        <div class="error" v-if="!$v.patient_age.required">*Patient age is required.</div>
                                    </div>
                                </div> 
                                <div class="col-md-6 form-group">
                                    <label for="gender">Gender</label>
                                    <multiselect v-model="gender" :options="['Male', 'Female']" @blur="$v.gender.$touch()"
                                        :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                    </multiselect>
                                    <div v-if="$v.gender.$dirty">
                                        <div class="error" v-if="!$v.gender.required">*Patient gender is required.</div>
                                    </div>
                                </div>
                            </div>
                                 <div class="form-group">
                                        <label for="diagnosis">Diagnosis</label>
                                        <input v-model="diagnosis" type="text" class="form-control" id="diagnosis" @blur="$v.diagnosis.$touch()">
                                        <div v-if="$v.diagnosis.$dirty">
                                            <div class="error" v-if="!$v.diagnosis.required">*Patient diagnosis is required.</div>
                                        </div>
                                    </div>       
                                <div class="form-group">
                                        <label for="summary">Brief Summary</label>
                                        <input v-model="summary" type="text" class="form-control" id="summary" @blur="$v.summary.$touch()">
                                        <div v-if="$v.summary.$dirty">
                                            <div class="error" v-if="!$v.summary.required">*Patient summary is required.</div>
                                        </div>
                                    </div> 
                    </form>
                    </div>
                    <div class="col-md-5">
                        <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <input v-model="parent_name" type="text" class="form-control" id="name" @blur="$v.parent_name.$touch()">
                                <div v-if="$v.parent_name.$dirty">
                                        <div class="error" v-if="!$v.parent_name.required">*Parent name is required.</div>
                                    </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Parent Email</label>
                                <input v-model="parent_email" type="text" class="form-control" id="email" @blur="$v.parent_email.$touch()">
                                <div v-if="$v.parent_email.$dirty">
                                    <div class="error" v-if="!$v.parent_email.required">*An email address is required.</div>
                                    <div class="error" v-if="!$v.parent_email.email">*Please enter a valid email address.</div>
                                </div>
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Parent Phone Number</label>
                                        <input v-model="parent_phone" type="text" class="form-control" id="phone_no" @blur="$v.parent_phone.$touch()">
                                        <div v-if="$v.parent_phone.$dirty">
                                            <div class="error" v-if="!$v.parent_phone.required">*Parent phone number is required.</div>
                                        </div>
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship to Patient</label>
                                        <input v-model="relationship" type="text" class="form-control" id="relationship" @blur="$v.relationship.$touch()">
                                        <div v-if="$v.relationship.$dirty">
                                            <div class="error" v-if="!$v.relationship.required">*Relationship to patient is required.</div>
                                        </div>
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
    validations: {
        patient_name: { required },
        patient_age: { required },
        gender: { required },
        parent_email: {
        required,
        email
        },
        parent_name: {
        required
        },
        parent_phone: { required},
        relationship: { required
        },
        diagnosis: {required},
        summary: {required}
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
                //console.log(res)
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
                //console.log(err.response)
                if(err.response.status == 404) {
                    this.$notify({
                        group: 'response',
                        type: 'error',
                        title: 'An Error Occured',
                        text: 'Parent does not have an existing account on the platform.',
                        duration: 2500,
                        ignoreDuplicates: true
                    });
                }
            })
        }
    }
}
</script>