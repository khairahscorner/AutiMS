<template>
  <main class="pd-main">
    <circle-spin class="mt-50" v-if="firstLoad"></circle-spin>
    <div v-else class="main-content">
            <div class="card no-radius text-center card-body p-50" v-if="no_caregiver">
                                    <i class="fs-svg ion-ios-people"></i>
                <p>You haven't added any caregivers yet.</p>   
            </div>
        <div v-else class="card br-1 mb-0 no-radius px-0 br-primary">
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
                                            <i class="ion-ios-eye"></i>
                                        </span>     
                                    </a>
                                </nav>
                            </div>                      -->
                    </v-client-table> 
                </div>   
          </div>
        <div class="row no-margin mt-20">
            <div class="no-border card col-md-6 px-0 mb-0 no-radius" v-if="!add_new">
                <h4 class="card-title"><strong>NEW CAREGIVER</strong></h4>
                <div class="card-body m-50">
                  <div class="text-center">
                    <i class="fs-svg ion-ios-people"></i>
                    <p> Caregivers are like mini-parents. Add one to give access to your child's reports.</p>
                    <a class="btn btn-sm btn-round btn-primary" href="#" @click="openForm">Add New</a>
                  </div>
                </div>
            </div>
            <div class="no-border card col-md-6 px-0 mb-0 no-radius" v-else>
                <h4 class="card-title"><strong>NEW CAREGIVER</strong></h4>
                <div class="card-body">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Name</label>
                                <input v-model="name" @blur="$v.name.$touch()" type="text" class="form-control" id="name">
                                <div v-if="$v.name.$dirty">
                                  <div class="error" v-if="!$v.name.required">*Required.</div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input v-model="email" @blur="$v.email.$touch()" type="text" class="form-control" id="email">
                              <div v-if="$v.email.$dirty">
                                  <div class="error" v-if="!$v.email.required">*Required.</div>
                                </div>
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input v-model="phone_no" @blur="$v.phone_no.$touch()" type="text" class="form-control" id="phone_no">
                                      <div v-if="$v.phone_no.$dirty">
                                        <div class="error" v-if="!$v.phone_no.required">*Required.</div>
                                      </div>
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <input v-model="relationship" @blur="$v.relationship.$touch()" type="text" class="form-control" id="relationship">
                              <div v-if="$v.relationship.$dirty">
                                  <div class="error" v-if="!$v.relationship.required">*Required.</div>
                                </div>
                            </div> 
                            <button class="mb-10 btn btn-xs btn-bold btn-primary" v-if="load_add" disabled>
                              <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else class="mb-10 btn btn-xs btn-bold btn-primary" :disabled="$v.$invalid" @click="addNewCaregiver" type="button">Add Caregiver</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  </main>
</template>

<script>
import axios from 'axios'
import {required, email} from "vuelidate/lib/validators"

export default {
    data() {
        return {
          firstLoad: true,
          load_add: false,
          no_caregiver: false,
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
      name: { required },
      phone_no: { required },
      relationship: { required },
      email: { required, email },
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
                //console.log(res)
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
                //console.log(err)
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
    mounted() {
      axios.get('/parent/caregivers')
        .then(res => {
          //console.log(res)
          this.firstLoad = false
          if(res.data.data.caregivers.length > 0){
            return this.data = res.data.data.caregivers
          }
          else this.no_caregiver = true
          })
          .catch(err => {
            //console.log(err)
            // this.firstLoad = false
          })
    }
}
</script>