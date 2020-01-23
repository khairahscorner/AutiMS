<template>
    <div class=" modal-content">
      <div class="boxed boxed--lg boxed--border">
        <header class="no-border">
          <div class="header-bar flexbox pl-20 justify-content-between">
            <h4>
              {{report.month}} Report by {{therapist_name}}
            </h4>
            <div>
              <span class="close" @click="hideModal($modal)" aria-label="Close" data-dismiss="close"><i class="fa fa-close"></i></span>
            </div>
          </div>
        </header>
       
        <div class="mt-modal">
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase"><strong>Month</strong></div>
            <div class="col-8"> {{report.month}}</div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Receptive Language</h5>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
              <div class="col-md-8">{{report.recap_base}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
              <div class="col-md-8">{{report.recap_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
              <div class="col-md-8">{{report.recap_comm}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Alternative Communcation</h5>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
              <div class="col-md-8">{{report.alt_base}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
              <div class="col-md-8">{{report.alt_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
              <div class="col-md-8">{{report.alt_comm}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Fine Motor</h5>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
              <div class="col-md-8">{{report.motor_base}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
              <div class="col-md-8">{{report.motor_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
              <div class="col-md-8">{{report.motor_comm}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Self Care</h5>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
              <div class="col-md-8">{{report.self_base}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
              <div class="col-md-8">{{report.self_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
              <div class="col-md-8">{{report.self_comm}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Behaviour</h5>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Baseline</strong></div>
              <div class="col-md-8">{{report.behav_base}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Improvement</strong></div>
              <div class="col-md-8">{{report.behav_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-md-4 text-uppercase"><strong>Comments</strong></div>
              <div class="col-md-8">{{report.behav_comm}}</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
</template>

<script>
export default {
  props: ['report', 'therapist_name'],
  methods: {
    hideModal(a) {
      a.hide('single-monthly-report')
    },  
  },
  mounted() {
    //console.log(this.report)
  }
};
</script>