<template> 
    <div>
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Monthly Reports by {{therapist_name}}</h4>
                    </div>
                </header>
                <no-view v-if="!has_monthly_report" :doc_type="doc_type"></no-view>
                <div v-else class="scroll h-general card-body">
                  <div class="row no-margin">
                    <div class="col-md-6 col-xl-3 mb-20" v-for="(report, i) in all_reports" :key="i">
                            <div class="fs-40 fw-400 color-2"><i class="ion-ios-list-outline"></i></div>
                            <p class="mb-0 lead">{{report.month}}</p>
                            <a @click="show(report)" class="modal-trigger btn btn-xs" href="#">
                              <span class="text-uppercase">View</span>
                            </a>
                      </div>
                  </div>
                </div>
                <modal name="single-monthly-report" class="report modal-container" height="auto" :clickToClose="false">
                  <single-monthly-report :report="report" :therapist_name="therapist_name"></single-monthly-report>
                </modal>
            </div>
</template>

<script>
import axios from 'axios'
import NoView from '../../noReport.vue'
import SingleMonthlyReport from "./MonthlySingleReport.vue";

export default {
  props:['therapist_name', 'all_reports', 'has_monthly_report'],
  data() {
    return {
      doc_type: 'Observation Report',
      report: {},
    }
  },
  methods: {
    show(payload) {
      this.$modal.show("single-monthly-report");
      this.report = payload
    }
  },
  components: {
    SingleMonthlyReport,
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