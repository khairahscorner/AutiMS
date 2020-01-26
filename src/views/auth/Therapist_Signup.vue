<template>
    <div class="tab-pane fade active show" id="therapist">
                        <form>
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" class="form-control" id="name" @blur="$v.name.$touch()" v-model="name">
                                <div v-if="$v.name.$dirty">
                                    <div class="error" v-if="!$v.name.required">*Your name is required.</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email" @blur="$v.email.$touch()" v-model="email">
                                <div v-if="$v.email.$dirty">
                                    <div class="error" v-if="!$v.email.required">*Your email is required.</div>
                                    <div class="error" v-if="!$v.email.email">
                                        *Please provide a valid email.
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input type="text" class="form-control" id="phone_no" @blur="$v.phone_no.$touch()" v-model="phone_no">
                                        <div v-if="$v.phone_no.$dirty">
                                            <div class="error" v-if="!$v.phone_no.required">*Your phone number is required.</div>
                                            <div
                                                class="error"
                                                v-if="!$v.phone_no.minLength"
                                            >*Phone numbers must be at least {{$v.phone_no.$params.minLength.min}} digits.</div>
                                        </div> 
                                    </div> 
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="gender">Gender</label>
                                        <multiselect v-model="gender" :options="['Male', 'Female']" class="form-control"
                                            :close-on-select="true" :show-labels="false" placeholder="Choose:">
                                        </multiselect>
                                    </div>
                                    <div v-if="$v.gender.$dirty">
                                        <div class="error" v-if="!$v.gender.required">*Your gender is required.</div>>
                                    </div>
                                </div>
                            </div>
                                <div class="form-group">
                                        <label for="workplace">Name of Workplace</label>
                                        <input type="text" class="form-control" id="workplace" v-model="workplace">
                                    </div> 
                                    <div class="form-group">
                                        <label for="address">Workplace Address</label>
                                        <input type="text" class="form-control" id="address" v-model="address">
                                    </div> 
                            <div class="form-group">
                                <label for="specialization">Area(s) of Specialisation</label>
                                <multiselect v-model="specialization" :options="skills_list" class="form-control" id="specialization"
                                    :multiple="true" :close-on-select="true" :show-labels="false" placeholder="Choose:">
                                </multiselect>
                                <!-- <input type="text" class="form-control" id="specialization"  @blur="$v.specialization.$touch()" v-model="specialization"> -->
                                <!-- <div v-if="$v.specialization.$dirty">
                                    <div class="error" v-if="!$v.specialization.required">*Your specialization is required.</div>
                                </div> -->
                            </div>
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="password">Password</label>
                                            <input type="password" class="form-control" id="password" @blur="$v.password.$touch()" v-model="password">
                                            <div v-if="$v.password.$dirty">
                                                <div class="error" v-if="!$v.password.required">*You need to set a password.</div>
                                                <div
                                                    class="error"
                                                    v-if="!$v.password.minLength"
                                                >*Password must be at least {{$v.password.$params.minLength.min}} characters.</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="confirm_password">Confirm Password</label>
                                            <input type="password" class="form-control" id="confirm_password"  @blur="$v.confirm_password.$touch()" v-model="confirm_password">
                                            <div v-if="$v.confirm_password.$dirty">
                                                <div class="error"
                                                v-if="!$v.confirm_password.sameAsPassword" >*Passwords do not match.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="form-group">
                                <button class="btn btn-bold btn-primary" disabled v-if="loading">
                                    <circle-spin class="m-0"></circle-spin>
                                </button>
                                <button class="btn btn-bold btn-primary" v-else :disabled="$v.$invalid || gender=='' || specialization.length<1" @click="register" type="button">Sign up</button>
                            </div>
                        </form>
                  </div>
</template>

<script>
import axios from "axios";
import {
  required,
  email,
  numeric,
  minLength,
  sameAs
} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            loading: false,
            name: "",
            email: '',
            phone_no: '',
            gender: '',
            workplace: '',
            address: '',
            skills_list:['Speech and Language Therapy','Behaviour Modification Therapy', 'Social Skills Therapy'],
            specialization: [],
            password: '',
            confirm_password: ''
        }
    },
    validations: {
        name: { required },
        email: {
            required,
            email
        },
        gender: {
            required
        },
        specialization: {
            required
        },
        phone_no: {
            required,
            minLength: minLength(11)
        },
        password: {
            required,
            minLength: minLength(8)
        },
        confirm_password: {
            sameAsPassword: sameAs("password")
        }
    }, 
    methods: {
        register() {
            this.loading = true
            let userData = {
                name: this.name,
                email: this.email,
                gender: this.gender,
                phone_no: this.phone_no,
                workplace: this.workplace,
                address: this.address,
                specialization: this.specialization,
                password: this.password,
            }
            axios.post('/therapist/register', userData)
            .then(res => {
                this.loading = false
                //console.log(res)
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: 'Registration Successful. Kindly check your email to activate your account.',
                    // text: `${res.data.message}`,
                    duration: 2500,
                });
                setTimeout(() => {
                    this.$router.push('/')
                }, 3000)
            })
            .catch(err => {
                if (!err.response) {
                    this.$notify({
                    group: "response",
                    type: "error",
                    title: `${err}`,
                    duration: -2,
                    ignoreDuplicates: true
                    });
                } 
                else {
                    this.$notify({
                    group: "response",
                    type: "error",
                    title: `${err.response.data.message}`,
                    text: `${err.response.data.details}`,
                    duration: 5000,
                    ignoreDuplicates: true
                    });
                }
                this.loading = false
            })
        }
    }
}
</script>