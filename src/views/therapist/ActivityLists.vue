<template>
    <main class="pd-main">
        <div class="main-content">
            <div class="row no-margin">
                <div class="card col-xl-4 col-md-5 br-1 mb-0 no-radius px-0 br-primary">
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">patients list</h4>
                            <router-link to="/therapist/activity-lists/new" tag="button"
                            class="btn btn-sm btn-bold btn-primary text-center"
                            >NEW <i class="fa fa-plus-square"></i>
                            </router-link>
                        </div>
                    </header>
                    <div class="card-body media-list media-list-hover media-list-divided">
                        <button
                            class="btn btn-sm btn-bold btn-primary text-center"
                            type="button"
                            @click="viewPatientActivityList"
                            >EDIT
                            </button>
                        <v-client-table :columns="columns" :data="data" :options="options"> 
                            <a href="#" class="media media-single">
                                <span slot="id" slot-scope="props">{{props.index}}</span>
                                <span slot="name" slot-scope="props" class="title">{{props.row.firstname}} {{props.row.lastname}}</span>
                                <span class="btn btn-sm btn-danger" @click="viewPatientActivityList(props.row.id)">
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
                        <img src="../../assets/img/patients.svg" alt>
                        </div>
                        <p>This shows each patient's activity list. Click on a patient to view.</p>
                    </div>
                    </div>
                </div>
                <component :is="mode" v-else @editActivityList="editActivityList" @saveActivityList="saveActivityList"></component>
            </div>
        </div>
    </main>
</template>

<script>
import singleActivityList from "../../components/therapist/SingleActivityList.vue"
import editActivityList from "../../components/therapist/EditActivityList.vue"

export default {
    data() {
        return {
            showDetails: false,
            patient_d: 0,
            mode: "single-activity-list",
            columns: ["id", "name"],
            data: [],
            options: {
              headings: {
                id: "S/N",
                name: "Patient Name"
              },
              sortable: ["name"],
              filterable: ["name"]
            }
        }
    },
    methods: {
       viewPatientActivityList(value) {
            this.patient_id = value
            this.showDetails = true
            // Fetch patient details using ID
        },
        editActivityList() {
            this.mode = "edit-activity-list"
        },
        // saveActivityList() {
        //     this.mode = "save-activity-list"
        // }
    },
    mounted() {
        
    },
    components: {
        singleActivityList,
        editActivityList,
    }
}
</script>