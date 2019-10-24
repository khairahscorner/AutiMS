<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <div class="">
                <div class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Monthly Report</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="saveNewMonthlyReport()"
                        >CREATE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-xl-3 col-md-4 br-1">
                    <form>
                        <div class="form-group pt-10">
                            <label>Patient</label>
                            <multiselect v-model="patient" :options="patient_list" class="form-control"
                            :close-on-select="true" :show-labels="false" placeholder="Choose Patient:">
                            </multiselect>
                        </div>
                        <div class="form-group pt-10">
                            <label>Month</label>
                            <multiselect v-model="month" :options="month_list" class="form-control"
                            :close-on-select="true" :show-labels="false" placeholder="Select month:">
                            </multiselect>
                        </div>
                    </form>
                  </div>
                  <div class="col-xl-9 col-md-8">
                    <form>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Receptive Language</h5>
                            <div class="form-group pt-10">
                                <label for="name">Baseline</label>
                                <textarea id="recep_baseline" cols="30" rows='2' class="form-control" v-model="recep_baseline" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Improvement</label>
                                <textarea id="recep_improv" cols="30" rows='2' class="form-control" v-model="recep_improv" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Comments</label>
                                <textarea id="recep_comment" cols="30" rows='2' class="form-control" v-model="recep_comment" style="resize: none"></textarea>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Alternative Communcation</h5>
                            <div class="form-group pt-10">
                                <label for="name">Baseline</label>
                                <textarea id="alt_baseline" cols="30" rows='2' class="form-control" v-model="alt_baseline" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Improvement</label>
                                <textarea id="alt_improv" cols="30" rows='2' class="form-control" v-model="alt_improv" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Comments</label>
                                <textarea id="alt_comment" cols="30" rows='2' class="form-control" v-model="alt_comment" style="resize: none"></textarea>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Fine Motor</h5>
                            <div class="form-group pt-10">
                                <label for="name">Baseline</label>
                                <textarea id="motor_baseline" cols="30" rows='2' class="form-control" v-model="motor_baseline" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Improvement</label>
                                <textarea id="motor_improv" cols="30" rows='2' class="form-control" v-model="motor_improv" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Comments</label>
                                <textarea id="motor_comment" cols="30" rows='2' class="form-control" v-model="motor_comment" style="resize: none"></textarea>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Self Care</h5>
                            <div class="form-group pt-10">
                                <label for="name">Baseline</label>
                                <textarea id="self_baseline" cols="30" rows='2' class="form-control" v-model="self_baseline" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Improvement</label>
                                <textarea id="self_improv" cols="30" rows='2' class="form-control" v-model="self_improv" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Comments</label>
                                <textarea id="self_comment" cols="30" rows='2' class="form-control" v-model="self_comment" style="resize: none"></textarea>
                            </div>
                        </div>
                        <div class="pt-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Behaviour</h5>
                            <div class="form-group pt-10">
                                <label for="name">Baseline</label>
                                <textarea id="behav_baseline" cols="30" rows='2' class="form-control" v-model="behav_baseline" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Improvement</label>
                                <textarea id="behav_improv" cols="30" rows='2' class="form-control" v-model="behav_improv" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Comments</label>
                                <textarea id="behav_comment" cols="30" rows='2' class="form-control" v-model="behav_comment" style="resize: none"></textarea>
                            </div>
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
    data() {
        return {
            month: "",
            month_list: ['January','February','March','April','May','June','July','August','September','October',
            'November','December'],
            patient: "",
            patient_list: [],
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
    mounted() {
    }
}
</script>