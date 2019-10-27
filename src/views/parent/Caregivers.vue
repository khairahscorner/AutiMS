<template>
  <main class="pd-main">
    <div class="main-content">
        <div class="row no-margin">
            <div class="card br-1 col-xl-8 col-md-9 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Caregivers</h4>
                    </div>
                </header>
                <div class="card-body">
                    <v-client-table :columns="columns" :data="data" :options="options">
                        <div slot="id" slot-scope="props">{{props.index}}</div>
                        <div slot="name" slot-scope="props" class="title">{{props.row.firstname}} {{props.row.lastname}}</div>
                        <div slot="actions">
                                <nav class="flexbox fs-16">
                                  <a href="#" data-provide="tooltip" data-original-title="Delete">
                                    <span class="btn btn-sm btn-danger icon ion-android-delete"></span>
                                  </a>
                                </nav>
                        </div>                     
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
                                <input :value="name" type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input :value="email" type="text" class="form-control" id="email">
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input :value="phone_no" type="text" class="form-control" id="phone_no">
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <input :value="relationship" type="text" class="form-control" id="relationship">
                            </div> 
                            <button class="mb-10 btn btn-xs btn-bold btn-primary" @click="addNewCaregiver" type="button">Add Caregiver</button>
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
            patientId: 0,
            add_new: false,
            columns: ["id", "name", "email", "phone", "relation", "actions"],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Therapist Name",
                email: "Email",
                phone: "Phone Number",
                relation: "Relationship",
                actions: 'Actions'
              },
              sortable: ["name","email"],
              filterable: ["name", "email"]
            }
        }
    },
    methods: {
        deleteCaregiverProfile(value) {
            this.patientId = value
            // Fetch patient details using ID
        },
        openForm() {
            this.add_new = true
        },
        addNewCaregiver() {
            
        }
    }
}
</script>