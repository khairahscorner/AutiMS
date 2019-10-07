<template>
  <modal name="month-single-report" class="modal-container" height="auto" :clickToClose="false">
    <div class="modal-content">
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
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Before-Session Assessment</div>
            <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Session Summary</div>
            <div class="col-8">
              werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc
              werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc
              werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc
            </div>
          </div>
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">End-of-Session Assessment</div>
            <div class="col-8">qwerdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Other Notes</div>
            <div class="col-8">werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
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
      
    }
  },
  methods: {
    hideModal(a) {
      a.hide('month-single-report')
    },
    
  }
};
</script>