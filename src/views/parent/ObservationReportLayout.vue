<template>
    <div>
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Observation Reports For {{therapist_name}}</h4>
                        <router-link :to="'/parent/observation-reports/'+ patient_id + '/new'" tag="button"
                        class="btn btn-xs btn-bold btn-primary text-center"
                        >New<i class="fa fa-plus-square"></i>
                        </router-link>
                    </div>
                </header>
                <no-view v-if="!has_observation_report" :doc_type="doc_type"></no-view>
                <div v-else class="scroll h-400px card-body">
                  <div class="row no-margin">
                    <div class="col-md-6 col-xl-3 mb-20" v-for="(report, i) in all_reports" :key="i">
                            <div class="fs-40 fw-400 color-2"><i class="ion-ios-list-outline"></i></div>
                            <p class="mb-0">{{datey(new Date(report.date))}}</p>
                            <router-link tag="a" :to="'/parent/observation-reports/'+ report.id +'&'+therapist_name" class=" mr-10 btn btn-xs" href="#">
                              <span class="text-uppercase">View</span>
                            </router-link>
                      </div>
                  </div>
                </div>
            </div>
</template>

<script>
import NoView from '../../components/noView'

export default {
  props:['patient_id','therapist_name', 'all_reports', 'has_observation_report'],
  data() {
    return {
      doc_type: 'Observation Report',
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