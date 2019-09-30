<template>
    <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
        <div class="row no-margin" v-if="register">
            <div class="card px-50 py-30 col-5 mb-0 no-radius" style="border-right: 1px solid #406c74;">
                <div class="row h-100">
                    <div class=" align-self-center">
                        <img src="../../assets/logo.png" alt="...">
                        <p class="text-muted fs-13 pl16 mt64">Already got an account? <router-link to="/" tag="a" class="text-primary fw-500" href="#">Log in</router-link></p>

                    </div>
                </div>
                
            </div>
            <div class="card p-30 col-7 mb-0 no-radius">
                <h4 class="text-uppercase fw-600">New User? Sign Up</h4>
                <span class="mb8">**Register for a Therapist or Parent Account.</span>
                <ul class="mb-10 nav nav-tabs nav-justified nav-tabs-info">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#therapist">Therapists</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#parent">Parents</a>
                  </li>
                </ul>

                <!-- Tab panes -->
                <div class="tab-content">
                  <div class="tab-pane fade active show" id="therapist">
                        <form class="">
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                        <label for="email">Email</label>
                                        <input type="text" class="form-control" id="email">
                            </div>
                            <div class="row">
                                <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <select class="form-control" aria-placeholder="Select Gender:">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input type="text" class="form-control" id="phone_no"> 
                                    </div> 
                                </div>
                            </div>
                                <div class="form-group">
                                        <label for="workplace">Name of Workplace</label>
                                        <input type="text" class="form-control" id="workplace">
                                    </div> 
                                    <div class="form-group">
                                        <label for="address">Workplace Address</label>
                                        <input type="text" class="form-control" id="address">
                                    </div> 
                            <div class="form-group">
                                <label for="specialisation">Area(s) of Specialisation <small>**Separate by comma</small></label>
                                <input type="text" class="form-control" id="specialisation">
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
                                <button class="btn btn-bold btn-primary">Sign up</button>
                            </div>
                        </form>
                  </div>
                  <div class="tab-pane fade" id="parent">
                      <form >
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" class="form-control" id="email">
                            </div>  
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input type="text" class="form-control" id="phone_no">
                                    </div> 
                                </div>
                                <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <select class="form-control" aria-placeholder="Select Gender:">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="child_name">Name of Child</label>
                                <input type="text" class="form-control" id="child_nam">
                            </div> 
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="form-group">
                                        <label for="child_age">Age of Child</label>
                                        <input type="number" class="form-control" id="child_age">
                                    </div>  
                                </div>
                                <div class="col-md-6">
                                        <div class="form-group">
                                            <label for="child_gender">Gender of Child</label>
                                            <select class="form-control" aria-placeholder="Select Gender:">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
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
                            <button class="btn btn-bold btn-primary">Sign up</button>
                            </div>
                        </form>
                  </div>
                </div>

            </div>
        </div>
        <div class="card p-30 w-500px mb-0 no-radius" v-else>
                <h4 class="text-uppercase fw-600 mt16">Account successfully created.</h4>
                <span>You have successfully created an account. Kindly check your email to verify your account.</span>
                <div class="mt8">
                    <button class="btn btn-bold btn-primary text-center">Go Back</button>
                </div>
            </div>
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
            register: true
        }
    },
  validations: {
    name: { required },
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(8)
    },
    confirm_password: {
      sameAsPassword: sameAs("password")
    }
  },  
}
</script>