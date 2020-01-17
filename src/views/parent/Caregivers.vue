<template>
  <main class="pd-main">
    <div class="main-content">
        <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
       <div v-else class="row no-margin">
            <div class="card br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Caregivers</h4>
                    </div>
                </header>
                <div class="card-body">
                    <v-client-table :columns="columns" :data="data" :options="options">
                        <div slot="id" slot-scope="props">{{props.index}}</div>
                        <!-- <div slot="action" slot-scope="props">
                                <nav class="flexbox fs-16">
                                    <a href="#" class="btn btn-xs bg-1" @click="suspendCaregiverAccount(props.row.id)">
                                        <span>
                                            <i class="fa fa-eye"></i>
                                        </span>     
                                    </a>
                                </nav>
                            </div>                      -->
                    </v-client-table> 
                </div>   
            </div>
            <div class="no-border card col-xl-4 col-md-5 px-0 mb-0 no-radius" v-if="!add_new">
                <h4 class="card-title"><strong>NEW CAREGIVER</strong></h4>
                <div class="card-body m-50">
                  <div class="text-center">
                    <div class="pb-30">
                      <img src="../../assets/img/patients.svg" alt>
                    </div>
                    <a class="btn btn-sm btn-round btn-primary" href="#" @click="openForm">Add New</a>
                  </div>
                </div>
            </div>
            <div class="no-border card col-xl-4 col-md-5 px-0 mb-0 no-radius" v-else>
                <h4 class="card-title"><strong>NEW CAREGIVER</strong></h4>
                <div class="card-body">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Name</label>
                                <input v-model="name" @blur="$v.name.$touch()" type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="email" @blur="$v.email.$touch()" type="text" class="form-control" id="email">
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input v-model="phone_no" @blur="$v.phone_no.$touch()" type="text" class="form-control" id="phone_no">
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <input v-model="relationship" @blur="$v.relationship.$touch()" type="text" class="form-control" id="relationship">
                            </div> 
                            <button class="mb-10 btn btn-xs btn-bold btn-primary" v-if="load_add" disabled>
                              <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else class="mb-10 btn btn-xs btn-bold btn-primary" @click="addNewCaregiver" type="button">Add Caregiver</button>
                    </form>
                </div>
          </div>
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import {required} from "vuelidate/lib/validators";

export default {
    data() {
        return {
          firstLoad: true,
          load_add: false,
            patientId: 0,
            add_new: false,
            columns: ["id", "name", "email", "phone_no", "relationship"],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Name",
                email: "Email",
                phone_no: "Phone Number",
                relationship: "Relationship"
              },
              sortable: ["name","email"],
              filterable: ["name", "email"]
            },
            name: '',
            email: '',
            phone_no: '',
            relationship:''
        }
    },
    validations: {
        title: { required },
        summary: { required }
    },
    methods: {
        // suspendCaregiverAccount(value) {
        //     this.caregiver_id = value
        // },
        openForm() {
            this.add_new = true
        },
        addNewCaregiver() {
          this.load_add = true
            let userData = {
              name: this.name,
              email: this.email,
              phone_no: this.phone_no,
              relationship: this.relationship
            }
            axios.post('/parent/add_caregiver', userData)
            .then(res => {
              this.load_add = false
                console.log(res)
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
              this.load_add = false
                console.log(err)
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'An error occured. Try again',
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
        }
    },
    // mounted() {
    //   this.patient_id = this.$route.params.patient_id
    //     axios.get(`/view_patient/${this.patient_id}`)
    //     .then(res => {
    //         this.firstLoad = false
    //         this.patient_name = res.data.data.parent.child_name
    //     })
    //     .catch(err => {
    //         console.log(err)
    //         this.firstLoad = false
    //             this.$notify({
    //                 group: 'response',
    //                 type: 'error',
    //                 title: 'Error fetching patient. Try again',
    //                 // text: `${res.data.message}`,
    //                 duration: 2500,
    //                 ignoreDuplicates: true
    //             })
    //     })
    // }
}
</script>