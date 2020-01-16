<template>
    <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius px-0">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Session Reports of Patient</h4>
                        <router-link to="/therapist/session-reports/new" tag="button"
                        class="btn btn-sm btn-bold btn-primary text-center"
                        >New<i class="fa fa-plus-square"></i>
                        </router-link>
                    </div>
                </header>
                <no-view v-if="!has_session_report" :doc_type="doc_type"></no-view>
                <div class="card-body" v-else>
                  <div class="row no-margin">
                      <div class="col-xs-6 col-lg-4 col-xl-3 mb-20">
                        <div class="text-center">
                            <div class="fs-40 fw-400 color-2"><i class="fa fa-user"></i></div>
                            <p class="mb-0 lead">22/09/19</p>
                            <a @click="show" class="modal-trigger btn btn-sm" href="#">
                            <span class="text-uppercase">View</span>
                            </a>
                            <single-report></single-report>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
</template>

<script>
import NoView from '../../noView.vue'
import SingleReport from "../../SessionSingleReport.vue";
export default {
  data() {
    return {
      has_session_report: false,
      doc_type: 'Session Report'
    }
  },
  methods: {
    show() {
      this.$modal.show("single-report");
    }
  },
  components: {
    SingleReport,
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