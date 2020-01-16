<template>
  <div>
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Monthly Reports of {{patient_name}}</h4>
                        <router-link :to="'/therapist/monthly-reports/'+ patient_id + '/new'" tag="button"
                        class="btn btn-sm btn-bold btn-primary text-center"
                        >New<i class="fa fa-plus-square"></i>
                        </router-link>
                    </div>
                </header> 
                <no-view v-if="!has_monthly_report" :doc_type="doc_type"></no-view>
                <div class="card-body" v-else>
                  <div class="row no-margin">
                      <div class="col-md-6 col-xl-3 mb-20" v-for="(report, i) in all_reports" :key="i">
                        <div class="text-center">
                            <div class="fs-40 fw-400 color-2"><i class="ion-ios-list-outline"></i></div>
                            <p class="mb-0 lead">{{report.month}}</p>
                            <a @click="show(report)" class="modal-trigger mr-10 btn btn-xs" href="#">
                              <span class="text-uppercase">View</span>
                            </a>
                        </div>
                      </div>
                  </div>
                </div>

                <modal name="month-single-report" class="report modal-container" height="auto" :clickToClose="false">
                    <month-single-report :report="report" :patient_name="patient_name"></month-single-report>                    
                </modal>

                <!-- Modal for delete report -->
              <!-- <modal name="delete-report" :width="400" height="auto" class="modal-container" :clickToClose="false">
                  <div class="modal-content">
                      <div class="callout callout-danger1 py-10 px-0 mb-0" role="alert">
                          <span class="close mr-10" @click="hideDeleteModal($modal)" aria-label="Close" data-dismiss="close"><i class="ion-close-round"></i></span>
                          <h5 class="px-10">Delete Patient</h5>
                          <div class="p-10">
                              <p>Are you sure you want to this patient? You will no longer have access to patient's details or any of the records of the patient.</p>
                              <button class="btn btn-bold btn-danger" disabled v-if="load_delete">
                                  <circle-spin class="m-0"></circle-spin>
                              </button>
                              <button class="btn btn-bold btn-sm btn-danger" v-else type="button" @click="delPatient">Delete</button>
                          </div>
                      </div>
                  </div> 
              </modal> -->
  </div>
</template>

<script>
import axios from 'axios'
import NoView from '../../noView.vue'
import MonthSingleReport from "../../MonthlySingleReport";

export default {
  props:['patient_id','patient_name', 'all_reports', 'has_monthly_report'],
  data() {
    return {
      doc_type: 'Monthly Report',
      report: {},
    }
  },
  methods: {
    hideModal(a) {
      a.hide('month-single-report')
    },
    show(payload) {
       this.report = payload
      this.$modal.show("month-single-report");
    }
  },
  mounted() {
    
  },
  components: {
    MonthSingleReport,
    NoView
  }
};
</script>

<style scoped>
.modal-container {
  visibility: visible;
    background-color: #0000008a !important;
}
</style>