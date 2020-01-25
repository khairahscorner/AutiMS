<template>
  <main class="pd-main">
    <div class="main-content">
      <circle-spin class="mt-50" v-if="loading"></circle-spin>
      <div v-else class="row">
        <div class="col-xl-12">
            <div class="card" v-if="!edit">
                <header class="no-border">
                <div class="header-bar flexbox pl-20">
                    <h4>My Profile Information</h4>
                    <button
                    class="btn btn-xs btn-bold btn-primary text-center"
                    type="button"
                    @click="edit=true"
                    >Edit</button>
                </div>
                </header>
                <div class="card-body">
                <div>
                    <img v-if="details.img_url == null" class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                    <img v-else class="avatar avatar-xxl" :src="details.img_url" />
                    <hr class="mb-10 mt-10" />
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong>Full Name:</strong></div>
                    <div class>{{details.name}}</div>
                    </div>
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong>Email:</strong></div>
                    <div class>{{details.email}}</div>
                    </div>
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong>Gender:</strong></div>
                    <div class>{{details.gender}}</div>
                    </div>
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong> Number:</strong></div>
                    <div class>{{details.phone_no}}</div>
                    </div>
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong>Place of Work:</strong></div>
                    <div>{{details.workplace}}</div>
                    </div>
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong>Address:</strong></div>
                    <div>{{details.address}}</div>
                    </div>
                    <div class="mb16 flexbox align-items-start justify-content-start">
                    <div class="mb-0"><strong>Area(s) of Specialisation:</strong></div>
                    <div>
                      <span v-for="(skill, i) in details.therapist_specializations" :key="i">
                        <div :class="(i%2)==1? 'bg-2': 'bg-1'" class="badge mb-10 mr-10 badge-lg">{{skill.specialization_title}}</div>
                      </span>
                    </div>
                  </div>
                </div>
                </div>
            </div>
            <component :is="editComponent" v-else></component>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
import editProfile from '../../components/therapist/EditProfile'

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
    axios.get('/therapist')
    .then(res => {
      this.loading = false
      store.commit('SAVE_USER_ID',res.data.data.id)
      //console.log(res.data.data)
      this.details = res.data.data.therapist
      store.commit('SAVE_THERAPIST_DETAILS', res.data.data.therapist)
    })
    .catch(err => {
      // this.loading = false
      //console.log(err.response)
      this.$notify({
          group: 'response',
          type: 'error',
          title: `An Error Occured`,
                      // text: `${res.data.message}`,
          duration: 2500,
          ignoreDuplicates: true
        });
    })
  },
  components: {
      appEditProfile: editProfile
  }
};
</script>