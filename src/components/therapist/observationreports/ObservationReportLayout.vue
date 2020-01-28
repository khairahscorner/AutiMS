<template>
    <div>
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                      <h4 class="text-uppercase">All Observation Reports of {{patient_name}}</h4>
                    </div>
                </header> 
                <div class="card-body m-50" v-if="!has_observation_report">
                  <div class="text-center">
                                    <i class="fs-svg ion-ios-list-outline"></i>
                    <p>No Observation Reports yet.</p>
                  </div>
                </div>
                <div v-else class="card-body  scroll h-general">
                  <div class="row no-margin">
                    <div class="col-md-6 col-xl-3 mb-20" v-for="(report, i) in all_reports" :key="i">
                            <div class="fs-40 fw-400 color-2"><i class="ion-ios-list-outline"></i></div>
                            <p class="mb-0">{{datey(new Date(report.date))}}</p>
                            <a @click="show(report)" class="modal-trigger btn btn-xs" href="#">
                            <span class="text-uppercase">View</span>
                            </a>
                      </div>
                  </div>
                </div>
                <modal name="observation-single-report" class="report modal-container" height="auto" :clickToClose="false">
                  <single-observation-report :report="report" :patient_name="patient_name"></single-observation-report>
                </modal>
            </div>
</template>

<script>
import SingleObservationReport from './SingleObservationReport.vue'

export default {
  props: ['all_reports', 'patient_name', 'has_observation_report'],
  data() {
    return {
      report: {}
    }
  }, 
  methods: {
    show(payload) {
      this.report = payload
      this.$modal.show("observation-single-report");
    },
    datey(en) {
      return en.toLocaleDateString('en-GB')
    },
  },
  components: {
    SingleObservationReport
  }
};
</script>

<style scoped>
.modal-container {
  visibility: visible;
    background-color: #0000008a !important;
}
</style>