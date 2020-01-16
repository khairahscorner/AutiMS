<template>
  <main class="pd-main">
    <div class="main-content">
        <div class="row no-margin">
            <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">therapist list</h4>
                    </div>
                </header>
                <div class="card-body media-list media-list-hover media-list-divided">
                    <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="viewPatientMonthlyReports"
                        >EDIT
                        </button>
                    <v-client-table :columns="columns" :data="data" :options="options"> 
                        <a href="#" class="media media-single">
                            <span slot="id" slot-scope="props">{{props.index}}</span>
                            <span slot="name" slot-scope="props" class="title">{{props.row.firstname}} {{props.row.lastname}}</span>
                            <span class="btn btn-sm btn-danger" @click="viewPatientMonthlyReports(props.row.id)">
                                <i class="fa fa-eye"></i>
                            </span>
                        </a>                        
                    </v-client-table> 
                </div>
                
            </div>
            <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius" v-if="!showDetails">
                <div class="card-body m-50">
                  <div class="text-center">
                    <div class="pb-30">
                      <img src="../../../assets/img/patients.svg" alt>
                    </div>
                    <p>This shows an overview of all monthly reports by each therapist. Click on a therapist to view.</p>
                  </div>
                </div>
            </div>
            <component :is="mode" v-else></component>
        </div>
    </div>
  </main>
</template>

<script>
import reportLayout from "./MonthlyReportLayout.vue"

export default {
    data() {
        return {
            showDetails: false,
            mode: "report-layout",
            patientId: 0,
            columns: ["id", "name"],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Therapist Name"
              },
              sortable: ["name"],
              filterable: ["name"]
            }
        }
    },
    methods: {
        viewPatientMonthlyReports(value) {
            this.patientId = value
            this.showDetails = true
            // Fetch patient details using ID
        }
    },
    mounted() {
        // fetch all therapists attached to parent/caregiver and then the patient's all monthly reports. 
        // this can then be filtered based on therapist id.
    },
    components: {
        reportLayout
    }
}
</script>