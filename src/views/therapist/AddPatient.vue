<template>
  <main class="pd-main">
    <div class="main-content">
            <div class="card br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Add New Patient</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                         @click="addNewPatient"
                        >SAVE
                        </button>
                    </div>
                </header>
                <div class="card-body p-0 m-30 row no-margin b-1">
                    <div class="col-md-7 br-1 br-primary">
                        <form>
                            <div class="form-group pt-10">
                                <label for="name">Patient Name</label>
                                <input type="text" :value="patient_name" class="form-control" id="name">
                            </div>
                            <div class="row">
                                <div class="col-6 form-group">
                                            <label for="age">Age</label>
                                            <input :value="patient_age" type="text" class="form-control" id="age"> 
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
                                        <input :value="diagnosis" type="text" class="form-control" id="diagnosis">
                                    </div>       
                                <div class="form-group">
                                        <label for="summary">Brief Summary</label>
                                        <input :value="summary" type="text" class="form-control" id="summary">
                                    </div> 
                    </form>
                    </div>
                    <div class="col-md-5">
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
            let userData = {
                name: this.name,
                age: this.age,
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
                console.log(res)
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
}
</script>