<template>
    <div class="min-h-fullscreen bg-img p-20 center-vh" data-overlay="7">
        <div class="row no-margin">
            <div class="sm-hidden card px-50 py-30 col-md-5 mb-0 no-radius" style="border-right: 1px solid #406c74;">
                <div class="row h-100">
                    <div class=" align-self-center">
                        <img src="../../assets/logo.png" alt="...">
                        <p class="text-muted fs-13 pl16 mt64">Already got an account? <router-link to="/" tag="a" class="text-primary fw-500" href="#">Log in</router-link></p>

                    </div>
                </div>
                
            </div>
            <div class="card p-30 col-md-7 mb-0 no-radius">
                <div class="mb-20 md-hidden text-center">
                  <img class="half-img" src="../../assets/logo.png" alt="...">
                </div>
                <h4 class="text-uppercase fw-600">New User? Sign Up</h4>
                <span class="mb8">**Register for a Therapist or Parent Account.</span>
                <ul class="mb-10 nav nav-tabs nav-justified nav-tabs-info">
                  <li class="nav-item">
                    <a class="nav-link active" data-toggle="tab" href="#therapist" @click="mode='therapist'">Therapists</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" data-toggle="tab" href="#parent" @click="mode='parent'">Parents</a>
                  </li>
                </ul>

                <!-- Tab panes for therapist and parent registration-->
                <div class="tab-content">
                  <component :is="mode"></component> 
                </div>
                <p class="md-hidden mt8 text-muted">Already got an account? <router-link to="/" tag="a" class="text-primary fw-500" href="#">Log in</router-link></p>

            </div>
        </div>
    </div>

</template>

<script>
import therapist from "./Therapist_Signup.vue"
import parent from "./Parent_Signup.vue"

export default {
    data() {
        return {
            mode: "therapist"
        }
    },
  
  methods: {

  },
  components: {
      therapist,
      parent
  } 
}
</script>