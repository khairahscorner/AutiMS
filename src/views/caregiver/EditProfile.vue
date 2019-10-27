<template>
  <main class="pd-main">
    <div class="main-content">
            <div class="card col-md-6 br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Edit Profile</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                         @click="saveProfile"
                        >SAVE
                        </button>
                    </div>
                </header>
                <div class="card-body m-30 mt-10 px-0">
                    <div>
                        <img class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                        <div class="file-group mt16">
                        <button class="btn btn-bold bg-2 text-center file-browser" type="button">
                            <input type="file" style="display:none" />
                            Upload Picture
                        </button>
                        </div>
                        <hr class="mb-10 mt-10" />
                        <form>
                            <div class="form-group">
                                <label for="name">Full Name</label>
                                <input type="text" :value="full_name" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input type="text" :value="email" class="form-control" id="email">
                            </div>
                                <div class="form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="text" :value="phone" class="form-control" id="phone">
                                </div>
                                <div class="form-group">
                                            <label for="gender">Gender</label>
                                            <multiselect v-model="gender" :options="['Male', 'Female']" @blur="$v.gender.$touch()"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                </div>
                        </form>
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
            name: "",
            email: "",
            phone: "",
            gender: ""
        }
    },
    methods: {
        saveProfile() {

        }
    }
}
</script>