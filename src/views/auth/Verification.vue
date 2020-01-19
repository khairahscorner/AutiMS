<template>
  <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
            <div class="card p-30 w-500px mb-0 no-radius">
                <img class="img-tb align-self-center" src="../../assets/logo.png" alt="...">
                <h4 class="text-uppercase fw-600 mt16 text-center">Activate Careigver Account</h4>
                <span>Set your password to activate your account and be able to log in.</span>
                <form>
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
                  <button class="btn btn-bold btn-primary" disabled v-if="loading">
                    <circle-spin class="m-0"></circle-spin>
                  </button>
                  <button class="btn btn-bold btn-primary" v-else :disabled="$v.$invalid" @click="createPassword" type="button">Create Password</button>
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
          loading: false,
          password: "",
          confirm_password: ""
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
  methods: {
    createPassword() {
      this.loading = true
      let userData = {
        password: this.password
      }
      axios.post(`/register/activate/${this.token}`, userData)
      .then(res => {
        this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    // text: `${err.response}`,
                    duration: 2500,
                    ignoreDuplicates: true
            });
            setTimeout(() => {
              this.$router.push('/')
            }, 3000)
      })
      .catch(err => {
        this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'An Error Occured. Try again',
                    // text: `${err.response}`,
                    duration: 5000,
                    ignoreDuplicates: true
            });
      })
    }
  },
  mounted() {
    localStorage.clear()
    this.token = this.$route.params.confirmation_token
  } 
}
</script>
