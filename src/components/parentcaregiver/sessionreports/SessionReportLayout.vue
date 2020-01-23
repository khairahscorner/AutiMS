<template>
    <div>
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Session Reports by {{therapist_name}}</h4>
                    </div>
                </header>
                <no-view v-if="!has_session_report" :doc_type="doc_type"></no-view>
                <div v-else class="scroll h-general card-body">
                  <div class="row no-margin">
                      <div class="col-md-6 col-xl-3 mb-20" v-for="(report, i) in all_reports" :key="i">
                            <div class="fs-40 fw-400 color-2"><i class="ion-ios-list-outline"></i></div>
                            <p class="mb-0 lead">{{datey(new Date(report.date))}}</p>
                            <a @click="show(report)" class="modal-trigger btn btn-xs" href="#">
                              <span class="text-uppercase">View</span>
                            </a>
                      </div>
                  </div>
                </div>
                <modal name="single-session-report" class="report modal-container" height="auto" :clickToClose="false">
                  <single-session-report :report="report" :therapist_name="therapist_name"></single-session-report>
                </modal>
            </div>
</template>

<script>
import axios from 'axios'
import NoView from '../../noReport.vue'
import SingleSessionReport from "./SessionSingleReport.vue";

export default {
  props:['therapist_name', 'all_reports', 'has_session_report'],
  data() {
    return {
      doc_type: 'Session Report',
      report: {},
    }
  },
  methods: {
    show(payload) {
      this.$modal.show("single-session-report");
      this.report = payload
    },
    datey(en) {
      return en.toLocaleDateString('en-GB')
    }
  },
  components: {
    SingleSessionReport,
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