<template>
  <main class="pd-main">
    <div class="main-content">
      <div class="row">
        <div class="col-lg-6 col-xl-7">
            <div class="card">
                <header class="no-border">
                <div class="header-bar flexbox pl-20 py-10">
                    <h4 class="fw-600 text-uppercase">My Profile</h4>
                    <router-link to="/profile/edit" tag="button" class="btn btn-xs btn-bold btn-primary text-center">
                        <i class="fs-20 fa fa-edit"></i>
                    </router-link>
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
                </div>
                <div></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6 col-xl-5">
          <div class="callout callout-bg1" role="alert">
              <h4 class="fw-600 text-uppercase">Patient Information</h4>
                <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Name:</h6>
                    <div class>Hamdalah Yusuff</div>
                </div>
                <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Age:</h6>
                    <div class>8 years</div>
                </div>
                <div class="mb16 flexbox align-items-center justify-content-start">
                    <h6 class="mb-0">Gender:</h6>
                    <div class>Female</div>
                </div>
                <div>
                    <h6>Therapists:</h6>
                    <ul>
                        <li>Maryam Amiri</li>
                        <li>Maryam Amiri</li>
                        <li>Maryam Amiri</li>
                    </ul>
                </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  data() {
    return {

    }
  },
  methods: {
      
  }
};
</script>