<template>
            <div class="card br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Edit Profile</h4>
                        <div>
                            <button v-if="loading_save" class="btn btn-xs btn-bold mr-10 btn-primary text-center" disabled>
                                <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else class="btn btn-xs btn-bold  mr-10  btn-primary text-center" type="button" @click="saveProfile">
                            SAVE
                            </button>
                            <button class="btn btn-xs btn-bold bg-1 text-center" type="button" @click="refresh">Cancel</button>
                        </div>
                    </div>
                </header>
                <div class="card-body p-0 m-30 row no-margin b-1">
                    <div class="col-md-6 br-1 br-primary pt-10">
                        <img v-if="img_url == null" class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                        <img v-else class="avatar avatar-xxl" :src="img_url" />
                        <div class="mt16">
                            <input class="text-center file-browser" placeholder="Upload Picture" type="file" ref="selected_img" @change="imageSelected"/>
                        </div>
                        <hr class="mb-10 mt-10"/>
                        <form>
                            <div class="form-group pt-10">
                                <label for="name">Name</label>
                                <input type="text" v-model="name" class="form-control" id="name">
                            </div>
                            <div class="form-group pt-10">
                                <label for="email">Email</label>
                                <input disabled type="text" v-model="email" class="form-control" id="email">
                            </div>
                           
                    </form>
                    </div>
                    <div class="col-md-6 pt-10">
                        <form>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <label for="phone_no">Phone Number</label>
                                    <input type="text" v-model="phone_no" class="form-control" id="phone_no">
                                </div>
                                <div class="col-6 form-group">
                                            <label for="gender">Gender</label>
                                            <multiselect v-model="gender" :options="['Male', 'Female']"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                </div>
                            </div> 
                            <div class="form-group pt-10">
                                <label for="child_name">Child Name</label>
                                <input v-model="child_name" type="text" class="form-control" id="child_name">
                            </div>
                            <div class="row">
                                <div class="col-6 form-group">
                                    <label for="age">Child Age</label>
                                    <input type="number" v-model="child_age" class="form-control" id="child_age">
                                </div>
                                <div class="col-6 form-group">
                                            <label for="child_gender">Gender</label>
                                            <multiselect v-model="child_gender" :options="['Male', 'Female']"
                                            :close-on-select="true" class="form-control" :show-labels="false" placeholder="Select Gender:">
                                            </multiselect>
                                </div>
                            </div> 
                    </form>
                    </div>
                </div>
                
            </div>
</template>

<script>
import {store} from '../../store'
import axios from 'axios'
import { instance } from "../../main";

export default {
    data() {
        return {
            loading_save: false,
            id: null,
            name: "",
            email: "",
            phone_no: '',
            gender: "",
            child_name: "",
            child_age: '',
            child_gender: "",
            img_url: null,
            selected_img: ''
    }
  },
    methods: {
      refresh() {
        location.reload()
      },
      imageSelected(event) {
        this.selected_img = event.target.files[0];
        //console.log(this.selected_img)
      },
      saveDetails() {
        let userData = {
            name: this.name,
            gender: this.gender,
            phone_no: this.phone_no,
            child_name: this.child_name,
            child_age: this.child_age,
            child_gender: this.child_gender,
            img_url: this.img_url
        }
          axios.put(`/parent/${this.id}`, userData)
          .then(res => {
            this.loading_save = false
            this.$notify({
                      group: 'response',
                      type: 'success',
                      title: `${res.data.message}`,
                      // text: `${res.data.message}`,
                      duration: 2500,
                  })
                  setTimeout(() => {
                      location.reload()
                  }, 3000)
          })
          .catch(err => {
            this.loading_save = false
          })
      },
      saveProfile() {
        this.loading_save = true 
        if(this.selected_img == ''){
          this.saveDetails()
        }
        else {
          var url = "/";
          const formData = new FormData();
          formData.append("file", this.selected_img);
          formData.append("public_id", this.selected_img.name);
          formData.append("upload_preset", "acaav0zf");
          instance.post(url, formData)
          .then(res => {
            this.img_url = res.data.secure_url
            this.saveDetails()
          })
          .catch(err => {
              this.loading_save = false
              //console.log(err)
              this.$notify({
                        group: 'response',
                        type: 'error',
                        title: `An error occured while uploading image. Please try again`,
                        duration: 2500,
                        ignoreDuplicates: true
                    });
          })
        }
      }
    },
  mounted() {
        this.id = store.state.user_id
        this.name = store.state.parent_details.name
        this.phone_no = store.state.parent_details.phone_no
        this.gender = store.state.parent_details.gender
        this.child_name = store.state.parent_details.child_name
        this.child_age = store.state.parent_details.child_age
        this.child_gender = store.state.parent_details.child_gender
        this.img_url = store.state.parent_details.img_url
        this.email = store.state.parent_details.email
  }
}
</script>