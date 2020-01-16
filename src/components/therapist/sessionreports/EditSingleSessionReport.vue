<template>
    <div>
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">Edit {{datey(new Date(date))}} Report of {{patient_name}}</h4>
                            <button v-if="loading" class="btn btn-sm btn-bold btn-primary text-center" disabled>
                                <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else
                            :disabled="$v.$invalid"
                            class="btn btn-sm btn-bold btn-primary text-center"
                            type="button"
                            @click="saveSessionReport()"
                            >SAVE
                            </button>
                        </div>
                    </header>
                    <div class="no-border card mb-0 no-radius card-body">
                         <form>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Before-Session Assessment</h5>
                                    <div class="form-group pt-10">
                                        <textarea id="initial_assesment" cols="30" rows='5' @blur="$v.initial_assesment.$touch()" class="form-control" v-model="initial_assesment" style="resize: none"></textarea>
                                        <div v-if="$v.initial_assesment.$dirty">
                                            <div class="error" v-if="!$v.initial_assesment.required">*Required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Session Summary</h5>
                                    <div class="form-group pt-10">
                                        <textarea id="session_summary" cols="30" rows='5' @blur="$v.session_summary.$touch()" class="form-control" v-model="session_summary" style="resize: none"></textarea>
                                        <div v-if="$v.session_summary.$dirty">
                                            <div class="error" v-if="!$v.session_summary.required">*Required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">End-of-Session Assessment</h5>
                                    <div class="form-group pt-10">
                                        <textarea id="final_assesment" cols="30" rows='5' @blur="$v.final_assesment.$touch()" class="form-control" v-model="final_assesment" style="resize: none"></textarea>
                                        <div v-if="$v.final_assesment.$dirty">
                                            <div class="error" v-if="!$v.final_assesment.required">*Required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Other Notes</h5>
                                    <div class="form-group pt-10">
                                        <textarea id="other_notes" cols="30" rows='2' class="form-control" v-model="other_notes" style="resize: none"></textarea>
                                    </div>
                                </div>
                            </form>
                    </div>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../../store'
import {required} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            loading: false,
            report_id: null,
            patient_name: '',
            date: "",
            initial_assesment: "",
            session_summary: "",
            final_assesment: "",
            other_notes: "",
        }
    },
    validations: {
        initial_assesment: { required },
        session_summary: { required },
        final_assesment: {
        required
        }
    }, 
    methods: {
        datey(en) {
            return en.toLocaleDateString('en-GB')
        },
        saveSessionReport() {
            this.loading = true
            let userData = {
                date: this.date,
                initial_assesment: this.initial_assesment,
                session_summary: this.session_summary,
                final_assesment: this.final_assesment,
                other_notes: this.other_notes,
            }
            axios.put(`/session_report/${this.report_id}`, userData)
            .then(res => {
                this.loading = false
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                });
                setTimeout(() => {
                    this.$emit('saved')
                }, 3000)
            })
            .catch(err => {
                this.loading = false
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: 'Failed to save report. Try again',
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
        }
        
    },
    mounted() { 
        this.report_id = store.state.session_report.id
        this.patient_name = store.state.session_report.patient.name
        this.date = store.state.session_report.date
        this.initial_assesment = store.state.session_report.initial_assesment
        this.session_summary = store.state.session_report.session_summary
        this.final_assesment = store.state.session_report.final_assesment
        this.other_notes = store.state.session_report.other_notes
    }
}
</script>