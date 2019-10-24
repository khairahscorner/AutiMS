<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <div class="">
                <div class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Session Report</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="saveNewSessionReport()"
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
                            <label>Date</label>
                            <datepicker v-model="date" @selected="datey" :full-month-name='true' inputClass="form-control" placeholder="Choose date" ></datepicker>
                        </div>
                    </form>
                  </div>
                  <div class="col-xl-9 col-md-8">
                    <form>
                            <div class="form-group pt-10">
                                <label for="before_session">Before-Session Assessment</label>
                                <textarea id="before_session" cols="30" rows='5' class="form-control" v-model="before_session" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="session_summ">Session Summary</label>
                                <textarea id="session_summ" cols="30" rows='5' class="form-control" v-model="session_summ" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="end_session">End-of-Session Assessment</label>
                                <textarea id="end_session" cols="30" rows='5' class="form-control" v-model="end_session" style="resize: none"></textarea>
                            </div> 
                            <div class="form-group pt-10">
                                <label for="other">Other Notes</label>
                                <textarea id="other" cols="30" rows='2' class="form-control" v-model="other" style="resize: none"></textarea>
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
            date: new Date (),
            patient: "",
            patient_list: [],
            before_session: "",
            session_summ: "",
            end_session: "",
            other: ""
        }
    },
    methods: {
      datey(en) {
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        this.date = en.toLocaleDateString('en-US', options)
        console.log(this.date)
      }
    },
    mounted() {
    }
}
</script>