<template> 
  <main class="pd-main">
    <div class="main-content">
      <circle-spin class="mt-50" v-if="loading"></circle-spin>
      <div v-else>
        <div class="row" v-if="!edit">
          <div class="col-lg-6 col-xl-7">
              <div class="card">
                  <header class="no-border">
                    <div class="header-bar flexbox pl-20 py-10">
                        <h4 class="fw-600 text-uppercase">My Profile</h4>
                        <button class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="edit=true">
                          EDIT<i class="ion-edit"></i>
                        </button>
                    </div>
                  </header>
                  <div class="card-body">
                    <div>
                        <img v-if="details.img_url == null" class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                        <img v-else class="avatar avatar-xxl" :src="details.img_url" />
                        <hr class="mb-10 mt-10" />
                        <div class="mb16 flexbox align-items-center justify-content-start">
                        <div class="mb-0"><strong>Full Name:</strong></div>
                        <div class>{{details.name}}</div>
                        </div>
                        <div class="mb16 flexbox align-items-center justify-content-start">
                        <div class="mb-0"><strong>Email:</strong></div>
                        <div class>{{details.email}}</div>
                        </div>
                        <div class="mb16 flexbox align-items-center justify-content-start">
                        <div class="mb-0"><strong>Relationship to Child:</strong></div>
                        <div class>{{details.relationship}}</div>
                        </div>
                        <div class="mb16 flexbox align-items-center justify-content-start">
                          <div class="mb-0"><strong>Phone Number:</strong></div>
                            <div class>{{details.phone_no}}</div>
                        </div>
                    </div>
                  </div>
              </div>
          </div>
          <div class="col-lg-6 col-xl-5">
            <div class="callout callout-bg1" role="alert">
                <h4 class="fw-600 text-uppercase">Child Information</h4>
                  <div class="mb16 flexbox align-items-center justify-content-start">
                    <div class="mb-0"><strong>Name:</strong></div>
                      <div class>{{details.child_name}}</div>
                  </div>
                  <div class="mb16 flexbox align-items-center justify-content-start">
                    <div class="mb-0"><strong>Age:</strong></div>
                      <div class>{{details.child_age}}</div>
                  </div>
                  <div class="mb16 flexbox align-items-center justify-content-start">
                    <div class="mb-0"><strong>Gender:</strong></div>
                      <div class>{{details.child_gender}}</div>
                  </div>
            </div>
          </div>
        </div>
        <component :is="editComponent" v-else></component>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
import editProfile from './EditProfile.vue'

export default {
  data() {
    return {
      loading: true,
      details: {},
      edit: false,
      editComponent: 'app-edit-profile'
    };
  },
  mounted() {
    this.loading = true
    axios.get('/caregiver')
    .then(res => {
      this.loading = false
      store.commit('SAVE_USER_ID',res.data.data.id)
      //console.log(res.data.data)
      this.details = res.data.data.caregiver
      store.commit('SAVE_CAREGIVER_DETAILS', res.data.data.caregiver)
    })
    .catch(err => {
      // this.loading = false
    })
  },
  components: {
      appEditProfile: editProfile
  }
};
</script>