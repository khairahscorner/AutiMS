<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <circle-spin v-if="firstLoad" class="pt-30" ></circle-spin>
        <div v-else class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Observation Report for {{patient_name}}</h4>
                        <button v-if="loading" class="btn btn-xs btn-bold btn-primary text-center" disabled>
                                <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else
                            :disabled="$v.$invalid || date == null"
                            class="btn btn-xs btn-bold btn-primary text-center"
                            type="button"
                            @click="createObservationReport()"
                            >CREATE
                            </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-xl-3 col-md-4 br-1">
                    <form>
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
                                <input id="tile" class="form-control" v-model="title" @blur="$v.title.$touch()">
                                <div v-if="$v.title.$dirty">
                                    <div class="error" v-if="!$v.title.required">*Required.</div>
                                </div>
                            </div>
                            <div class="form-group pt-10">
                                <label for="summary">Summary</label>
                                <textarea id="summary" cols="30" rows='5' @blur="$v.summary.$touch()" class="form-control" v-model="summary" style="resize: none"></textarea>
                                <div v-if="$v.summary.$dirty">
                                    <div class="error" v-if="!$v.summary.required">*Required.</div>
                                </div>
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
  </main>

</template>

<script>
import axios from 'axios'
import {required} from "vuelidate/lib/validators";
import allMixins from '../../mixins.js'

export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true,
            loading: false,
            patient_id: null,
            patient_name: '',
            date: null,
            title: "",
            summary: "",
            suggestions: ""
        }
    },
    validations: {
        title: { required },
        summary: { required }
    }, 
    methods: {
      datey(en) {
        this.date = new Date (en)
        this.date = en.toLocaleDateString('en-GB')
        //console.log(this.date)
      },
      createObservationReport() {
            this.loading = true
            let userData = {
                date: this.date,
                title: this.title,
                summary: this.summary,
                suggestions: this.suggestions,
            }
            axios.post(`/observation_report/${this.patient_id}`, userData)
            .then(res => {
                this.loading = false
                //console.log(res)
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    duration: 2500,
                })
                setTimeout(() => {
                    this.$router.push('/observation-reports')
                  }, 3000)
            })
            .catch(err => {
                this.loading = false
            })
        }
    },
    mounted() {
        this.patient_id = this.$route.params.patient_id
        axios.get(`/view_patient/${this.patient_id}`)
        .then(res => {
            this.firstLoad = false
            this.patient_name = res.data.data.parent.child_name
        })
        .catch(err => {
        })
    } 
}
</script>