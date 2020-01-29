<template>
    <div>
                    <header class="no-border">
                        <div class="header-bar flexbox pl-20">
                            <h4 class="text-uppercase">Edit {{month}} Report of {{patient_name}}</h4>
                            <button v-if="loading" class="btn btn-xs btn-bold btn-primary text-center" disabled>
                                <circle-spin class="m-0" ></circle-spin>
                            </button>
                            <button v-else
                            :disabled="$v.$invalid"
                            class="btn btn-xs btn-bold btn-primary text-center"
                            type="button"
                            @click="saveMonthlyReport()"
                            >SAVE
                            </button>
                        </div>
                    </header>
                    <div class="no-border card mb-0 no-radius card-body">
                         <form>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Receptive Language</h5>
                                    <div class="form-group pt-10">
                                        <label for="name">Baseline</label>
                                        <textarea id="recap_baseline" cols="30" rows='2' @blur="$v.recap_baseline.$touch()" class="form-control" v-model="recap_baseline" style="resize: none"></textarea>
                                        <div v-if="$v.recap_baseline.$dirty">
                                            <div class="error" v-if="!$v.recap_baseline.required">*Baseline summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Improvement</label>
                                        <textarea id="recap_improv" cols="30" rows='2' @blur="$v.recap_improv.$touch()" class="form-control" v-model="recap_improv" style="resize: none"></textarea>
                                        <div v-if="$v.recap_improv.$dirty">
                                            <div class="error" v-if="!$v.recap_improv.required">*Improvement summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Comments</label>
                                        <textarea id="recap_comment" cols="30" rows='2' class="form-control" v-model="recap_comment" style="resize: none"></textarea>
                                    </div>
                                </div>
                                <div class="pt-10">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Alternative Communcation</h5>
                                    <div class="form-group pt-10">
                                        <label for="name">Baseline</label>
                                        <textarea id="alt_baseline" cols="30" rows='2' @blur="$v.alt_baseline.$touch()" class="form-control" v-model="alt_baseline" style="resize: none"></textarea>
                                        <div v-if="$v.alt_baseline.$dirty">
                                            <div class="error" v-if="!$v.alt_baseline.required">*Baseline summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Improvement</label>
                                        <textarea id="alt_improv" cols="30" rows='2' @blur="$v.alt_improv.$touch()" class="form-control" v-model="alt_improv" style="resize: none"></textarea>
                                        <div v-if="$v.alt_improv.$dirty">
                                            <div class="error" v-if="!$v.alt_improv.required">*Improvement summary is required.</div>
                                        </div>
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
                                        <textarea id="motor_baseline" cols="30" rows='2' @blur="$v.motor_baseline.$touch()" class="form-control" v-model="motor_baseline" style="resize: none"></textarea>
                                        <div v-if="$v.motor_baseline.$dirty">
                                            <div class="error" v-if="!$v.motor_baseline.required">*Baseline summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Improvement</label>
                                        <textarea id="motor_improv" cols="30" rows='2' @blur="$v.motor_improv.$touch()" class="form-control" v-model="motor_improv" style="resize: none"></textarea>
                                        <div v-if="$v.motor_improv.$dirty">
                                            <div class="error" v-if="!$v.motor_improv.required">*Improvement summary is required.</div>
                                        </div>
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
                                        <textarea id="self_baseline" cols="30" rows='2' @blur="$v.self_baseline.$touch()" class="form-control" v-model="self_baseline" style="resize: none"></textarea>
                                        <div v-if="$v.self_baseline.$dirty">
                                            <div class="error" v-if="!$v.self_baseline.required">*Baseline summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Improvement</label>
                                        <textarea id="self_improv" cols="30" rows='2' @blur="$v.self_improv.$touch()" class="form-control" v-model="self_improv" style="resize: none"></textarea>
                                        <div v-if="$v.self_improv.$dirty">
                                            <div class="error" v-if="!$v.self_improv.required">*Improvement summary is required.</div>
                                        </div>
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
                                        <textarea id="behav_baseline" cols="30" rows='2' @blur="$v.behav_baseline.$touch()" class="form-control" v-model="behav_baseline" style="resize: none"></textarea>
                                        <div v-if="$v.behav_baseline.$dirty">
                                            <div class="error" v-if="!$v.behav_baseline.required">*Baseline summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Improvement</label>
                                        <textarea id="behav_improv" cols="30" rows='2' @blur="$v.behav_improv.$touch()" class="form-control" v-model="behav_improv" style="resize: none"></textarea>
                                        <div v-if="$v.behav_improv.$dirty">
                                            <div class="error" v-if="!$v.behav_improv.required">*Improvement summary is required.</div>
                                        </div>
                                    </div>
                                    <div class="form-group pt-10">
                                        <label for="name">Comments</label>
                                        <textarea id="behav_comment" cols="30" rows='2' class="form-control" v-model="behav_comment" style="resize: none"></textarea>
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
            month: "",
            recap_baseline: "",
            recap_comment: "",
            recap_improv: "",
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
            behav_comment: "",
        }
    },
    validations: {
        recap_baseline: { required },
        recap_improv: { required },
        alt_baseline: { required },
        alt_improv: {
        required
        },
        motor_baseline: {
        required
        },
        motor_improv: { required},
        self_baseline: { required},
        self_improv: { required},
        behav_baseline: { required},
        behav_improv: { required
        }
    }, 
    methods: {
        saveMonthlyReport() {
            this.loading = true
            let userData = {
                month: this.month,
                recap_base: this.recap_baseline,
                recap_comm: this.recap_comment,
                recap_improv: this.recap_improv,
                alt_base: this.alt_baseline,
                alt_improv: this.alt_improv,
                alt_comm: this.alt_comment,
                motor_base: this.motor_baseline,
                motor_improv: this.motor_improv,
                motor_comm: this.motor_comment,
                self_base: this.self_baseline,
                self_improv: this.self_improv,
                self_comm: this.self_comment,
                behav_base: this.behav_baseline,
                behav_improv: this.behav_improv,
                behav_comm: this.behav_comment
            }
            axios.put(`/monthly_report/${this.report_id}`, userData)
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
                //console.log(err.response)
            })
        }
        
    },
    mounted() { 
        this.month = store.state.monthly_report.month
        this.report_id = store.state.monthly_report.id
        this.patient_name = store.state.monthly_report.patient.name
        this.recap_baseline = store.state.monthly_report.recap_base
        this.recap_comment = store.state.monthly_report.recap_comm
        this.recap_improv = store.state.monthly_report.recap_improv
        this.alt_baseline = store.state.monthly_report.alt_base
        this.alt_improv = store.state.monthly_report.alt_improv
        this.alt_comment = store.state.monthly_report.alt_comm
        this.motor_baseline = store.state.monthly_report.motor_base
        this.motor_improv = store.state.monthly_report.motor_improv
        this.motor_comment = store.state.monthly_report.motor_comm
        this.self_baseline = store.state.monthly_report.self_base
        this.self_improv = store.state.monthly_report.self_improv
        this.self_comment = store.state.monthly_report.self_comm
        this.behav_baseline = store.state.monthly_report.behav_base
        this.behav_improv = store.state.monthly_report.behav_improv
        this.behav_comment = store.state.monthly_report.behav_comm 
    }
}
</script>