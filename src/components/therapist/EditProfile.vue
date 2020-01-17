<template>
        <div class="card">
            <header class="no-border">
              <div class="header-bar flexbox pl-20">
                <h4>Edit My Profile</h4>
              </div>
            </header>
            <div class="card-body">
              <div>
                <img v-if="img_url == null" class="avatar avatar-xxl" src="../../assets/img/avatar.jpg" />
                <img v-else class="avatar avatar-xxl" :src="img_url" />
                <div class=" mt16">
                    <input class="text-center file-browser" placeholder="Upload Picture" type="file" ref="selected_img" @change="imageSelected"/>
                </div>
                <hr class="mb-10 mt-10"/>
                <form>
                    <div class="mb24 form-group">
                    <label for="name">Full Name</label>
                    <input v-model="name" type="text" class="form-control" id="name" />
                    </div>
                    <div class="mb24 form-group">
                    <label for="email">Email</label>
                    <input disabled v-model="email" type="text" class="form-control" id="email" />
                    </div>
                    <div class="row">
                    <div class="mb24 col-md-6 form-group">
                        <label for="phone_no">Phone Number</label>
                        <input v-model="phone_no" type="text" class="form-control" id="phone_no" />
                    </div>
                    <div class="mb24 col-md-6 form-group">
                        <label for="gender">Gender</label>
                        <multiselect v-model="gender" :options="['Male', 'Female']"  class="form-control"
                        :close-on-select="true" :show-labels="false" placeholder="Choose your gender:">
                        </multiselect>
                    </div>
                    </div>
                    <div class="mb24 form-group">
                    <label for="workplace">Name of Workplace</label>
                    <input v-model="workplace" type="text" class="form-control" id="workplace" />
                    </div>
                    <div class="mb24 form-group">
                    <label for="address">Workplace Address</label>
                    <input v-model="address" type="text" class="form-control" id="address" />
                    </div>
                    <div class="mb24 form-group">
                    <label for="specialisation">
                        Area(s) of Specialisation</label>
                    <multiselect disabled v-model="specialization" :options="skills_list" class="form-control" id="specialization"
                        :multiple="true" :close-on-select="true" :show-labels="false" placeholder="Choose:">
                    </multiselect>
                    <!-- <input disabled v-model="skills" type="text" class="form-control" id="skills" /> -->
                    </div>
                    <button v-if="loading_save" class="btn btn-xs btn-bold mr-10 btn-primary text-center" disabled>
                            <circle-spin class="m-0" ></circle-spin>
                    </button>
                    <button v-else class="btn btn-xs btn-bold btn-primary mr-10 text-center" type="button" @click="saveProfile">Save</button>
                    <button class="btn btn-xs btn-bold bg-1 text-center" type="button" @click="refresh">Cancel</button>
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
      gender: "",
      phone_no: "",
      workplace: '',
      address: "",
      img_url: null,
      selected_img: '',
      specialization: [],
      skills_list: ['Speech and Language Therapy','Behaviour Modification Therapy', 'Social Skills Therapy']
    }
  },
    methods: {
      refresh() {
        location.reload()
      },
      imageSelected(event) {
        this.selected_img = event.target.files[0];
        console.log(this.selected_img)
      },
      saveDetails() {
        console.log(this.id)
          let userData = {
            name: this.name,
            gender: this.gender,
            phone_no: this.phone_no,
            workplace: this.workplace,
            address: this.address,
            // specialization: this.skills.split(","),
            img_url: this.img_url
          }
          axios.put(`/therapist/${this.id}`, userData)
          .then(res => {
            this.loading_save = false
            this.$notify({
                      group: 'response',
                      type: 'success',
                      title: `${res.data.message}`,
                      duration: 2500,
                  })
                  setTimeout(() => {
                    location.reload()
                  }, 3000)
          })
          .catch(err => {
            this.loading_save = false
            this.$notify({
                      group: 'response',
                      type: 'error',
                      title: `An Error Occured`,
                      duration: 2500,
                      ignoreDuplicates: true
                  });
          })
      },
      saveProfile() {
        this.loading_save = true 
        if(this.selected_img == ''){
          // save updated details without image
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
              console.log(err)
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
    this.name = store.state.therapist_details.name
        this.phone_no = store.state.therapist_details.phone_no
        this.gender = store.state.patient_details.gender
        this.workplace = store.state.therapist_details.workplace
        this.address = store.state.therapist_details.address
        this.img_url = store.state.therapist_details.img_url
        this.email = store.state.therapist_details.email
        for(let i=0; i<  store.state.therapist_details.therapist_specializations.length; i++) {
          this.specialization.push( store.state.therapist_details.therapist_specializations[i].specialization_title)
        }
  }
}
</script>
