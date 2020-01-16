<template>
    <div class="modal-content">
      <div class="boxed boxed--lg boxed--border">
        <header class="no-border">
          <div class="header-bar flexbox pl-20 justify-content-between">
            <h4>
              {{datey(new Date(report.date))}} Report for {{patient_name}}
            </h4>
            <span class="close" @click="hideModal($modal)" aria-label="Close" data-dismiss="close"><i class="fa fa-close"></i></span>
          </div>
        </header>
       
        <div class="mt-modal">
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">Title</div>
            <div class="col-md-8">{{report.title}}</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">Summary</div>
            <div class="col-md-8">
              {{report.summary}}
            </div>
          </div>
          <div class="row no-margin lead">
            <div class="col-md-4 text-uppercase">Summary</div>
            <div class="col-md-8">
              {{report.summary}}
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  props: ['report', 'patient_name'],
  data() {
    return {
      
    }
  },
  methods: {
    datey(en) {
      return en.toLocaleDateString('en-GB')
    },
    hideModal(a) {
      a.hide('observation-single-report')
    },  
  }
};
</script>