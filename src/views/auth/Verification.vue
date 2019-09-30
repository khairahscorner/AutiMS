<template>
  <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
            <div class="card p-30 w-500px mb-0 no-radius text-center">
                <img class="img-tb align-self-center" src="../../assets/logo.png" alt="...">
                <h4 class="text-uppercase fw-600 mt16">Account Verified</h4>
                <span>You have successfully verified your account. You can now log in.</span>
                <div class="mt8">
                    <button class="btn btn-bold btn-primary text-center">Log in</button>
                </div>
            </div>
            <div class="card p-30 w-500px mb-0 no-radius text-center">
                <img class="img-tb align-self-center" src="../../assets/logo.png" alt="...">
                <h4 class="text-uppercase fw-600 mt16">Account Verified</h4>
                <span>You have successfully verified your account. You can now set your password and log in.</span>
                <form class="form-type-line">
                  <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" class="form-control" id="password"  @blur="$v.password.$touch()" v-model="password">
                    <div v-if="$v.password.$dirty">
                      <div class="error" v-if="!$v.password.required">*You need to set a password.</div>
                      <div class="error" v-if="!$v.password.minLength">*Password must be at least {{$v.password.$params.minLength.min}} characters.</div>
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="confirm_password">Confirm Password</label>
                    <input type="password" class="form-control" id="confirm_password"  @blur="$v.confirm_password.$touch()" v-model="confirm_password">
                    <div v-if="$v.confirm_password.$dirty">
                      <div class="error" v-if="!$v.confirm_password.sameAsPassword">*Passwords do not match.</div>
                    </div>
                  </div>
                  <button class="btn btn-bold btn-primary">Log in</button>
                </form>
            </div>
    </div>
</template>

<script>
import axios from "axios";
import {
  required,
  minLength,
  sameAs
} from "vuelidate/lib/validators";

export default {
    data() {
        return {

        }
    },
  validations: {
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
