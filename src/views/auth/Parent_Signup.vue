<template>
    <div class="tab-pane fade" id="parent">
                      <form >
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
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="child_name">Name of Child</label>
                                <input type="text" class="form-control" id="child_name" @blur="$v.child_name.$touch()" v-model="child_name">
                                <div v-if="$v.child_name.$dirty">
                                    <div class="error" v-if="!$v.child_name.required">*Your Child's name is required.</div>
                                </div>
                            </div> 
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="child_age">Age of Child</label>
                                        <input type="number" class="form-control" id="child_age" @blur="$v.child_age.$touch()" v-model="child_age">
                                        <div v-if="$v.child_age.$dirty">
                                            <div class="error" v-if="!$v.child_age.required">*Your Child's age is required.</div>
                                        </div>
                                    </div>  
                                </div>
                                <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="child_gender">Gender of Child</label>
                                            <multiselect v-model="child_gender" :options="['Male', 'Female']" class="form-control"
                                                :close-on-select="true" :show-labels="false" placeholder="Choose:">
                                            </multiselect>
                                        </div>
                                </div>
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
                                        <div
                                            class="error"
                                            v-if="!$v.confirm_password.sameAsPassword"
                                        >*Passwords do not match.</div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            <div class="form-group">
                                <button class="btn btn-bold btn-primary" disabled v-if="loading">
                                    <circle-spin class="m-0"></circle-spin>
                                </button>
                                <button class="btn btn-bold btn-primary" v-else :disabled="$v.$invalid" @click="register" type="button">Sign up</button>
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
            child_name: '',
            child_age: '',
            child_gender: '',
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
        phone_no: {
            required,
            minLength: minLength(11)
        },
        child_age: {
            required
        },
        child_name: {
            required
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
                child_name: this.child_name,
                child_age: this.child_age,
                child_gender: this.child_gender,
                password: this.password,
            }
            axios.post('/parent/register', userData)
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
                    title: "No Internet connection, try again. Click to close",
                    duration: 5000,
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