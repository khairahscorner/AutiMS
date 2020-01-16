<template>
    <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius px-0">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">All Observation Reports of Patient</h4>
                    </div>
                </header>
                <no-view v-if="!has_obs_report" :doc_type="doc_type"></no-view>
                <div v-else class="card-body">
                  <div class="row no-margin">
                      <div class="col-xs-6 col-lg-4 col-xl-3 mb-20">
                        <div class="text-center">
                            <div class="fs-40 fw-400 color-2"><i class="fa fa-user"></i></div>
                            <p class="mb-0 lead">22/09/19</p>
                            <a @click="show" class="modal-trigger btn btn-sm" href="#">
                            <span class="text-uppercase">View</span>
                            </a>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
</template>

<script>
import NoView from '../../noView.vue'

export default {
  data() {
    return {
      has_obs_report: false,
      doc_type: 'Observation Report'
    }
  },
  methods: {
    
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