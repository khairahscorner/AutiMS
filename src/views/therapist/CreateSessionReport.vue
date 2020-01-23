<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <circle-spin v-if="firstLoad" class="pt-30" ></circle-spin>
            <div v-else class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Session Report for {{patient_name}}</h4>
                        <button v-if="loading" class="btn btn-xs btn-bold btn-primary text-center" disabled>
                                <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else
                            :disabled="$v.$invalid || date == null"
                            class="btn btn-xs btn-bold btn-primary text-center"
                            type="button"
                            @click="createSessionReport()"
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
                                <label for="initial_assesment">Before-Session Assessment</label>
                                <textarea id="initial_assesment" cols="30" rows='5' @blur="$v.initial_assesment.$touch()" class="form-control" v-model="initial_assesment" style="resize: none"></textarea>
                                <div v-if="$v.initial_assesment.$dirty">
                                    <div class="error" v-if="!$v.initial_assesment.required">*Required.</div>
                                </div>
                            </div>
                            <div class="form-group pt-10">
                                <label for="session_summary">Session Summary</label>
                                <textarea id="session_summary" cols="30" rows='5' @blur="$v.session_summary.$touch()" class="form-control" v-model="session_summary" style="resize: none"></textarea>
                                <div v-if="$v.session_summary.$dirty">
                                    <div class="error" v-if="!$v.session_summary.required">*Required.</div>
                                </div>
                            </div>
                            <div class="form-group pt-10">
                                <label for="final_assesment">End-of-Session Assessment</label>
                                <textarea id="final_assesment" cols="30" rows='5' @blur="$v.final_assesment.$touch()" class="form-control" v-model="final_assesment" style="resize: none"></textarea>
                                <div v-if="$v.final_assesment.$dirty">
                                    <div class="error" v-if="!$v.final_assesment.required">*Required.</div>
                                </div>
                            </div> 
                            <div class="form-group pt-10">
                                <label for="other_notes">Notes</label>
                                <textarea id="other_notes" cols="30" rows='2' class="form-control" v-model="other_notes" style="resize: none"></textarea>
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

export default {
    data() {
        return {
            firstLoad: true,
            loading: false,
            patient_id: null,
            patient_name: '',
            date: null,
            initial_assesment: "",
            session_summary: "",
            final_assesment: "",
            other_notes: ""
        }
    },
     validations: {
        initial_assesment: { required },
        session_summary: { required },
        final_assesment: { required }
    }, 
    methods: {
      datey(en) {
        this.date = new Date (en)
        this.date = en.toLocaleDateString('en-GB')
        //console.log(this.date)
      },
      createSessionReport() {
            this.loading = true
            let userData = {
                date: this.date,
                initial_assesment: this.initial_assesment,
                session_summary: this.session_summary,
                final_assesment: this.final_assesment,
                other_notes: this.other_notes
            }
            axios.post(`/session_report/${this.patient_id}`, userData)
            .then(res => {
                this.loading = false
                //console.log(res)
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    duration: 2500,
                });
                setTimeout(() => {
                    this.$router.push('/therapist/session-reports')
                }, 3000)
            })
            .catch(err => {
                this.loading = false
                //console.log(err.response)
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'An error occured. Try again',
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
        }
    },
    mounted() {
        this.patient_id = this.$route.params.patient_id
        axios.get(`/view_patient/${this.patient_id}`)
        .then(res => {
            this.firstLoad = false
            this.patient_name = res.data.data.name
        })
        .catch(err => {
            //console.log(err)
            this.firstLoad = false
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'Error fetching patient. Try again',
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                })
                setTimeout(() => {
                    this.$router.push('/therapist/session-reports')
                }, 3000)
        })
    }
}
</script>