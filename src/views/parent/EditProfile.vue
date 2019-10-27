<template>
  <main class="pd-main">
    <div class="main-content">
            <div class="card br-1 mb-0 no-radius px-0 br-primary">
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
                <div class="card-body p-0 m-30 row no-margin b-1">
                    <div class="col-md-6 br-1 br-primary pt-10">
                        <img class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                        <div class="file-group mt16">
                        <button class="btn btn-bold bg-2 text-center file-browser" type="button">
                            <input type="file" style="display:none" />
                            Upload Picture
                        </button>
                        </div>
                        <hr class="mb-10 mt-10" />
                        <form>
                            <div class="form-group pt-10">
                                <label for="name">Full Name</label>
                                <input type="text" :value="full_name" class="form-control" id="name">
                            </div>
                            <div class="form-group pt-10">
                                <label for="email">Email</label>
                                <input type="text" :value="email" class="form-control" id="email">
                            </div>
                           
                    </form>
                    </div>
                    <div class="col-md-6 pt-10">
                        <form>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <label for="phone">Phone Number</label>
                                    <input type="text" :value="phone" class="form-control" id="phone">
                                </div>
                                <div class="col-6 form-group">
                                            <label for="gender">Gender</label>
                                            <multiselect v-model="gender" :options="['Male', 'Female']" @blur="$v.gender.$touch()"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                </div>
                            </div> 
                            <div class="form-group pt-10">
                                <label for="child_name">Child Name</label>
                                <input :value="child_name" type="text" class="form-control" id="child_name">
                            </div>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <label for="age">Age</label>
                                    <input type="number" :value="age" class="form-control" id="age">
                                </div>
                                <div class="col-6 form-group">
                                            <label for="child_gender">Gender</label>
                                            <multiselect v-model="child_gender" :options="['Male', 'Female']" @blur="$v.child_gender.$touch()"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                </div>
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
            gender: "",
            child_name: "",
            age: 0,
            child_gender: ""
        }
    },
    methods: {
        saveProfile() {

        }
    }
}
</script>