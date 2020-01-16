<template>
    <div class=" modal-content">
      <div class="boxed boxed--lg boxed--border">
        <header class="no-border">
          <div class="header-bar flexbox pl-20 justify-content-between">
            <h4>
              {{month}} Report for {{patient_name}}
            </h4>
            <div>
              <!-- <router-link tag="a" :to="'/therapist/monthly-reports/' + report_id" class="btn mr-10 btn-xs bg-1">
                <span>
                  <i class="fa fa-edit"></i>
                </span>     
              </router-link>  -->
              <!-- <router-link tag="a" to="" class="btn mr-10 btn-xs bg-danger">
                <span  @click="deleteReport">
                  <i class="fa fa-trash-o"></i>
                </span>     
              </router-link>           -->
              <span class="close" @click="hideModal($modal)" aria-label="Close" data-dismiss="close"><i class="fa fa-close"></i></span>
            </div>
          </div>
        </header>
       
        <div class="mt-modal">
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Month</div>
            <div class="col-8"> {{month}}</div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Receptive Language</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">{{recap_baseline}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">{{recap_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">{{recap_comment}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Alternative Communcation</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">{{alt_baseline}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">{{alt_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">{{alt_comment}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Fine Motor</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">{{motor_baseline}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">{{motor_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">{{motor_comment}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Self Care</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">{{self_baseline}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">{{self_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">{{self_comment}}</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Behaviour</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">{{behav_baseline}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">{{behav_improv}}</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">{{behav_comment}}</div>
            </div>
          </div>
        </div>
      </div>

      
    </div>
</template>

<script>
export default {
  props: ['patient_name','report'],
  data() {
    return {
      report_id: null,
      month: "",
      recap_baseline: "",
            recap_comment: "",
            recap_improv: "",
            alt_baseline: "",
            alt_improv: "",
            alt_comment: "",
            motor_baseline: "",
            motor_improv: "",
            motor_comment: "",
            self_baseline: "",
            self_improv: "",
            self_comment: "",
            behav_baseline: "",
            behav_improv: "",
            behav_comment: "",
    }
  },
  methods: {
    hideModal(a) {
      a.hide('month-single-report')
    },
    
  },
  mounted() {
    console.log(this.report)
    this.month = this.report.month
    this.report_id = this.report.id
    this.recap_baseline = this.report.recap_base
    this.recap_comment = this.report.recap_comm
    this.recap_improv = this.report.recap_improv
    this.alt_baseline = this.report.alt_base
    this.alt_improv = this.report.alt_improv
    this.alt_comment = this.report.alt_comm
    this.motor_baseline = this.report.motor_base
    this.motor_improv = this.report.motor_improv
    this.motor_comment = this.report.motor_comm
    this.self_baseline = this.report.self_base
    this.self_improv = this.report.self_improv
    this.self_comment = this.report.self_comm
    this.behav_baseline = this.report.behav_base
    this.behav_improv = this.report.behav_improv
    this.behav_comment = this.report.behav_comm
  }
};
</script>