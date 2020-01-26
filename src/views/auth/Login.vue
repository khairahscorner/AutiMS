<template>
  <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
    <div class="row no-margin">
      <div
        class="sm-hidden card px-50 py-30 col-md-5 mb-0 no-radius"
        style="border-right: 1px solid #406c74;"
      >
        <div class="row h-100">
          <div class=" align-self-center">
            <img src="../../assets/logo.png" alt="..." />
            <p class="text-center text-muted fs-13 pl8 mt64">
              Don't have an account?
              <router-link
                to="/signup"
                tag="a"
                class="text-primary fw-500"
                href="#"
                >Sign up</router-link
              >
            </p>
          </div>
        </div>
      </div>
      <div class="card p-30 col-sm-12 col-md-7 mb-0 no-radius">
        <div class="md-hidden text-center">
          <img class="half-img" src="../../assets/logo.png" alt="..." />
        </div>
        <h4 class="my-20 text-uppercase fw-600">Log in to your account</h4>
        <form>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="text"
              class="form-control"
              id="email"
              @blur="$v.email.$touch()"
              v-model="email"
            />
            <div v-if="$v.email.$dirty">
              <div class="error" v-if="!$v.email.required">
                *Your email is required.
              </div>
              <div class="error" v-if="!$v.email.email">
                *Please enter a valid email.
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              id="password"
              @blur="$v.password.$touch()"
              v-model="password"
            />
            <div v-if="$v.password.$dirty">
              <div class="error" v-if="!$v.password.required">
                *Your password is required.
              </div>
            </div>
          </div>
          <div class="form-group">
            <button class="btn btn-bold btn-primary" disabled v-if="loading">
              <circle-spin class="m-0"></circle-spin>
            </button>
            <button
              class="btn btn-bold btn-primary"
              v-else
              :disabled="$v.$invalid"
              @click="loginUser"
              type="button"
            >
              Log In
            </button>
          </div>
        </form>
        <p class="md-hidden mt8 text-muted">
          Don't have an account?
          <router-link to="/signup" tag="a" class="text-primary fw-500" href="#"
            >Sign up</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import allMixins from "../../mixins.js";
import { required, email } from "vuelidate/lib/validators";

export default {
  name: "login",
  mixins: [allMixins],
  data() {
    return {
      loading: false,
      email: "",
      password: ""
    };
  },
  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },
  methods: {
    loginUser() {
      let userData = {
        email: this.email,
        password: this.password
      };
      this.loading = true;
      axios
        .post("/login", userData)
        .then(res => {
          this.loading = false;
          //console.log(res)
          localStorage.setItem(window.btoa("userToken"), res.data.token.token);
          this.$notify({
            group: "response",
            type: "success",
            title: `${res.data.message}`,
            duration: 2500
          });

          let details = this.$jwt.decode(
            this.retrieveToken(window.btoa("userToken"))
          );
          //console.log(details)
          if (details.data.user_type == "therapist") {
            setTimeout(() => {
              this.$router.push("/therapist/dashboard");
            }, 3000);
          } else if (details.data.user_type == "parent") {
            setTimeout(() => {
              this.$router.push("/parent/dashboard");
            }, 3000);
          } else {
            setTimeout(() => {
              this.$router.push("/dashboard");
            }, 3000);
          }
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
              duration: 5000,
              ignoreDuplicates: true
            });
          }
          this.loading = false;
        });
    }
  }
};
</script>
