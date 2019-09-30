<template>
  <main class="pd-main">
    <div class="main-content">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
            <div class="card" v-if="!edit">
                <header class="no-border">
                <div class="header-bar flexbox pl-20">
                    <h4>My Profile Information</h4>
                    <button
                    class="btn btn-sm btn-bold btn-primary text-center"
                    type="button"
                    @click="edit=true"
                    >Edit</button>
                </div>
                </header>
                <div class="card-body">
                <div>
                    <img class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                    <hr class="mb-10 mt-10" />
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Full Name:</h6>
                    <div class>Maryam Amiri</div>
                    </div>
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Email:</h6>
                    <div class>maryamamiri@gmail.com</div>
                    </div>
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Gender:</h6>
                    <div class>Female</div>
                    </div>
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Phone Number:</h6>
                    <div class>080123456678</div>
                    </div>
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Place of Work:</h6>
                    <div>Maryam and Associate Speech and Language Therapy Center</div>
                    </div>
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Address:</h6>
                    <div>9, Living Rock Street , Iyana Iyesi Ota, Lagos.</div>
                    </div>
                    <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Area(s) of Specialisation:</h6>
                    <div class="badge badge-lg bg-2">Speech and Language Therapy</div>
                    <div class="badge badge-lg bg-1">Behavioural Therapy</div>
                    </div>
                </div>
                <div></div>
                </div>
            </div>
            <component :is="editComponent" v-else @saved="showUpdatedProfile"></component>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="callout callout-bg1" role="alert">
            <div class="flexbox align-items-center mt-2">
              <h6 class="mb-0 font-s">9,357</h6>
              <h4 class="fw-600 text-uppercase">Registered Patients</h4>
            </div>
          </div>
          <div class="callout callout-bg2" role="alert">
            <div class="flexbox align-items-center mt-2">
              <h6 class="mb-0 font-s">93</h6>
              <h4 class="fw-600 text-uppercase">Activity Lists</h4>
            </div>
          </div>
          <div class="callout callout-bg2" role="alert">
            <div class="flexbox align-items-center mt-2">
              <h6 class="mb-0 font-s">935</h6>
              <h4 class="fw-600 text-uppercase">Total Reports</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import editProfile from '../../components/therapist/EditProfile'

export default {
  data() {
    return {
      edit: false,
      editComponent: 'app-edit-profile'
    };
  },
  methods: {
      showUpdatedProfile() {
          this.edit = false
      }
  },
  components: {
      appEditProfile: editProfile
  }
};
</script>