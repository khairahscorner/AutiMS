<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <div class="">
                <div class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Monthly Report</h4>
                         <button v-if="loading" class="btn btn-sm btn-bold btn-primary text-center" disabled>
                            <circle-spin class="m-0" ></circle-spin>
                        </button>
                        <button v-else
                        :disabled="$v.$invalid || month==''"
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="createMonthlyReport()"
                        >CREATE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-xl-3 col-md-4 br-1">
                    <form>
                        <!-- <div class="form-group pt-10">
                            <label>Patient</label>
                            <multiselect v-model="patient" :options="patient_list" class="form-control"
                            :close-on-select="true" :show-labels="false" placeholder="Choose Patient:">
                            </multiselect>
                        </div> -->
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
                                <textarea id="recep_baseline" cols="30" rows='2' @blur="$v.recep_baseline.$touch()" class="form-control" v-model="recep_baseline" style="resize: none"></textarea>
                                <div v-if="$v.recep_baseline.$dirty">
                                    <div class="error" v-if="!$v.recep_baseline.required">*Baseline summary is required.</div>
                                </div>
                            </div>
                            <div class="form-group pt-10">
                                <label for="name">Improvement</label>
                                <textarea id="recep_improv" cols="30" rows='2' @blur="$v.recep_improv.$touch()" class="form-control" v-model="recep_improv" style="resize: none"></textarea>
                                <div v-if="$v.recep_improv.$dirty">
                                    <div class="error" v-if="!$v.recep_improv.required">*Improvement summary is required.</div>
                                </div>
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
            loading: false,
            month: "",
            month_list: ['January','February','March','April','May','June','July','August','September','October',
            'November','December'],
            patient_id: null,
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
    validations: {
        recep_baseline: { required },
        recep_improv: { required },
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
        createMonthlyReport() {
            this.loading = true
            let userData = {
                month: this.month,
                recep_base: this.recep_baseline,
                recep_comm: this.recep_comment,
                recep_improv: this.recep_improv,
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
            console.log(userData)
            axios.post(`/monthly_report/${this.patient_id}`, userData)
            .then(res => {
                this.loading = false
                console.log(res)
                this.$notify({
                    group: 'response',
                    type: 'success',
                    title: `${res.data.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                });
                // setTimeout(() => {
                //     this.$router.push('/therapist/monthly-reports')
                // }, 3000)
            })
            .catch(err => {
                this.loading = false
                console.log(err.response)
                this.$notify({
                    group: 'response',
                    type: 'error',
                    title: `${err.response.message}`,
                    // text: `${res.data.message}`,
                    duration: 2500,
                    ignoreDuplicates: true
                });
            })
        }

    },
    mounted() {
        this.patient_id = this.$route.params.patient_id
        console.log(this.patient_id)
    }
}
</script>