<template>
        <div class="card">
            <header class="no-border">
              <div class="header-bar flexbox pl-20">
                <h4>Edit Profile</h4>
              </div>
            </header>
            <div class="card-body">
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
                    <div class="mb24 form-group">
                    <label for="name">Full Name</label>
                    <input type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb24 form-group">
                    <label for="email">Email</label>
                    <input type="text" class="form-control" id="email" />
                    </div>
                    <div class="row">
                    <div class="mb24 col-md-6 form-group">
                        <label for="phone_no">Phone Number</label>
                        <input type="text" class="form-control" id="phone_no" />
                    </div>
                    <div class="mb24 col-md-6 form-group">
                        <label for="gender">Gender</label>
                        <select class="form-control" aria-placeholder="Select Gender:">
                        <option>Male</option>
                        <option>Female</option>
                        </select>
                    </div>
                    </div>
                    <div class="mb24 form-group">
                    <label for="workplace">Name of Workplace</label>
                    <input type="text" class="form-control" id="workplace" />
                    </div>
                    <div class="mb24 form-group">
                    <label for="address">Workplace Address</label>
                    <input type="text" class="form-control" id="address" />
                    </div>
                    <div class="mb24 form-group">
                    <label for="specialisation">
                        Area(s) of Specialisation
                        <small>**Separate by comma</small>
                    </label>
                    <input type="text" class="form-control" id="specialisation" />
                    </div>
                    <button class="btn btn-sm btn-bold btn-primary text-center" type="button" @click="saveProfile">Save</button>
                </form>
                
              </div>
            </div>
        </div>
</template>

<script>
export default {
    methods: {
        saveProfile() {
            this.$emit('saved')
        }
    }
}
</script>
