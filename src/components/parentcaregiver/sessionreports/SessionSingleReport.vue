<template>
    <div class="modal-content">
      <div class="boxed boxed--lg boxed--border">
        <header class="no-border">
          <div class="header-bar flexbox pl-20 justify-content-between">
            <h4>
              {{datey(new Date(report.date))}} Report by {{therapist_name}}
            </h4>
            <span class="close" @click="hideModal($modal)" aria-label="Close" data-dismiss="close"><i class="fa fa-close"></i></span>
          </div>
        </header>
       
        <div class="mt-modal">
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Date</div>
            <div class="col-8">{{datey(new Date(report.date))}}</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">Before-Session Assessment</div>
            <div class="col-md-8">{{report.initial_assesment}}</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">Session Summary</div>
            <div class="col-md-8">
              {{report.session_summary}}
            </div>
          </div>
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">End-of-Session Assessment</div>
            <div class="col-md-8">{{report.final_assesment}}</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">Other Notes</div>
            <div class="col-md-8">{{report.other_notes}}</div>
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
      a.hide('single-session-report')
    },  
    datey(en) {
      return en.toLocaleDateString('en-GB')
    }
  },
  mounted() {
    console.log(this.report)
  }
};
</script>