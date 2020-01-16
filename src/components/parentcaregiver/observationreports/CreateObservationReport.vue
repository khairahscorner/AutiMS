<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <div class="">
                <div class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Observation Report</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="saveNewObservationReport()"
                        >CREATE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-xl-3 col-md-4 br-1">
                    <form>
                        <div class="form-group pt-10">
                            <label>Therapist</label>
                            <multiselect v-model="therapist" :options="therapist_list" class="form-control"
                            :close-on-select="true" :show-labels="false" placeholder="Choose Therapist:">
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
                                <label for="title">Title</label>
                                <input id="tile" class="form-control" v-model="title">
                            </div>
                            <div class="form-group pt-10">
                                <label for="summary">Summary</label>
                                <textarea id="summary" cols="30" rows='5' class="form-control" v-model="summary" style="resize: none"></textarea>
                            </div>
                            <div class="form-group pt-10">
                                <label for="suggestions">Suggestions</label>
                                <textarea id="suggestions" cols="30" rows='5' class="form-control" v-model="suggestions" style="resize: none"></textarea>
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
            therapist: "",
            therapist_list: [],
            title: "",
            summary: "",
            suggestions: ""
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