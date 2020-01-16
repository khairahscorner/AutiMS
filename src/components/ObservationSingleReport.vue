<template>
  <modal name="observation-single-report" class="report modal-container" height="auto" :clickToClose="false">
    <div class="modal-content">
      <div class="boxed boxed--lg boxed--border">
        <header class="no-border">
          <div class="header-bar flexbox pl-20 justify-content-between">
            <h4>
              Observation Report for
            </h4>
            <span class="close" @click="hideModal($modal)" aria-label="Close" data-dismiss="close"><i class="fa fa-close"></i></span>
          </div>
        </header>
       
        <div class="mt-modal">
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Title</div>
            <div class="col-8">Unusual Restlessness</div>
          </div><div class="row no-margin lead">
            <div class="col-4 text-uppercase">Date</div>
            <div class="col-8">12th September, 2019</div>
          </div>
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Summary</div>
            <div class="col-8">
              werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc
              werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc
              werdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc
            </div>
          </div>
          <div class="row no-margin lead">
            <div class="col-4 text-uppercase">Highlighted Suggestions</div>
            <div class="col-8">qwerdftghj fghgjmn fcbgvb n erfhc vergnbasadv gbxc</div>
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
      a.hide('observation-single-report')
    },
    
  }
};
</script>