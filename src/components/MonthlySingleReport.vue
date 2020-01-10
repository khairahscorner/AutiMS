<template>
  <modal name="month-single-report" class="report modal-container" height="auto" :clickToClose="false">
    <div class=" modal-content">
      <div class="boxed boxed--lg boxed--border">
        <header class="no-border">
          <div class="header-bar flexbox pl-20 justify-content-between">
            <h4>
              Monthly Report for September
            </h4>
            <span class="close" @click="hideModal($modal)" aria-label="Close" data-dismiss="close"><i class="fa fa-close"></i></span>
          </div>
        </header>
       
        <div class="mt-20">
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Month</div>
            <div class="col-8"> September</div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Receptive Language</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Alternative Communcation</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Fine Motor</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Self Care</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
          </div>
          <div class="pt-10">
            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Behaviour</h5>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Baseline</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Improvement</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
            <div class="row no-margin lead">
              <div class="col-4 text-uppercase">Comments</div>
              <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      month: "",
      recep_baseline: "",
            recep_comment: "",
            recep_improv: "",
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
            behav_comment: ""
    }
  },
  methods: {
    hideModal(a) {
      a.hide('month-single-report')
    },
    
  }
};
</script>