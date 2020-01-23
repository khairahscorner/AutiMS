<template> 
    <div>
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Session Reports of {{patient_name}}</h4>
                        <router-link :to="'/therapist/session-reports/'+ patient_id + '/new'" tag="button"
                        class="btn btn-xs btn-bold btn-primary text-center"
                        >New<i class="fa fa-plus-square"></i>
                        </router-link>
                    </div>
                </header>
                <no-view v-if="!has_session_report" :doc_type="doc_type"></no-view>
                <div class="card-body h-general scroll" v-else>
                  <div class="row no-margin">
                      <div class="col-md-6 col-xl-3 mb-20" v-for="(report, i) in all_reports" :key="i">
                            <div class="fs-40 fw-400 color-2"><i class="ion-ios-list-outline"></i></div>
                            <p class="mb-0">{{datey(new Date(report.date))}}</p>
                            <router-link tag="a" :to="'/therapist/session-reports/'+ report.id" class=" mr-10 btn btn-xs" href="#">
                              <span class="text-uppercase">View</span>
                            </router-link>
                      </div>
                  </div>
                </div>
            </div>
</template>

<script>
// import axios from 'axios'
import NoView from '../../noView.vue'

export default {
  props:['patient_id','patient_name', 'all_reports', 'has_session_report'],
  data() {
    return {
      doc_type: 'Session Report',
      report: {}
    }
  },
  methods: {
    datey(en) {
        return en.toLocaleDateString('en-GB')
      },
  },
  components: {
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