<template>
<main class="pd-main">
    <div class="main-content">
        <div class="">
                <div class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Monthly Report for</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="saveNewSessionReport()"
                        >CREATE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-6 br-1">
                    <form>
                         </form>
                  </div>
                  <div class="col-6">
                    <form>
                            <div class="form-group pt-10">
                                <label for="name">Parent Name</label>
                                <input :value="parent_name" type="text" class="form-control" id="name">
                            </div>
                            <div class="form-group">
                                <label for="email">Email</label>
                                <input :value="parent_email" type="text" class="form-control" id="email">
                            </div> 
                                    <div class="form-group">
                                        <label for="phone_no">Phone Number</label>
                                        <input :value="parent_phone" type="text" class="form-control" id="phone_no">
                                    </div> 
                            <div class="form-group">
                                        <label for="relationship">Relationship</label>
                                        <input :value="relationship" type="text" class="form-control" id="relationship" readonly>
                                        <small class="error">**Not Verified</small>
                            </div> 
                    </form>
                  </div>
                </div>
            </div>
        </div>
    </div>
  </main>

</template>
<script>
export default {
    mounted() {
    }
}
</script>