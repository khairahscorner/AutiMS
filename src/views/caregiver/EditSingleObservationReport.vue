<template>
    <div>
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">Edit {{datey(new Date(date))}} Report for {{therapist_name}}</h4>
                            <button v-if="loading" class="btn btn-sm btn-bold btn-primary text-center" disabled>
                                <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else
                            :disabled="$v.$invalid"
                            class="btn btn-sm btn-bold btn-primary text-center"
                            type="button"
                            @click="saveObservationReport()"
                            >SAVE
                            </button>
                        </div>
                    </header>
                    <div class="no-border card mb-0 no-radius card-body">
                         <form>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Title</h5>
                                    <div class="form-group pt-10">
                                        <input id="tile" class="form-control" v-model="title" @blur="$v.title.$touch()">
                                        <div v-if="$v.title.$dirty">
                                            <div class="error" v-if="!$v.title.required">*Required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Summary</h5>
                                    <div class="form-group pt-10">
                                        <textarea id="summary" v-model="summary"  cols="30" rows='5' @blur="$v.summary.$touch()" class="form-control" style="resize: none"></textarea>
                                        <div v-if="$v.summary.$dirty">
                                            <div class="error" v-if="!$v.summary.required">*Required.</div>
                                        </div>
                                    </div>
                                </div>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Suggestions</h5>
                                    <div class="form-group pt-10">
                                        <textarea id="suggestions" cols="30" rows='5' @blur="$v.suggestions.$touch()" class="form-control" v-model="suggestions" style="resize: none"></textarea>
                                        <div v-if="$v.suggestions.$dirty">
                                            <div class="error" v-if="!$v.suggestions.required">*Required.</div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                    </div>
    </div>
</template>

<script>
import axios from 'axios'
import {store} from '../../store'
import {required} from "vuelidate/lib/validators";

export default {
    data() {
        return {
            loading: false,
            report_id: null,
            therapist_name: '',
            date: "",
            title: "",
            summary: "",
            suggestions: ""
        }
    },
    validations: {
        title: { required },
        summary: { required },
        suggestions: { required }
    }, 
    methods: {
        datey(en) {
            return en.toLocaleDateString('en-GB')
        },
        saveObservationReport() {
            this.loading = true
            let userData = {
                date: this.date,
                title: this.title,
                summary: this.summary,
                suggestions: this.suggestions
            }
            axios.put(`/observation_report/${this.report_id}`, userData)
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
            })
        }
        
    },
    mounted() { 
        this.report_id = store.state.observation_report.id
        this.therapist_name = store.state.therapist_name
        this.date = store.state.observation_report.date
        this.title = store.state.observation_report.title
        this.summary = store.state.observation_report.summary
        this.suggestions = store.state.observation_report.suggestions
    }
}
</script>