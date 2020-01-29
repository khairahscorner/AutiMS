<template>
    <main class="pd-main">
        <div class="main-content">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Activity List</h4>
                        <router-link to="/therapist/activity-lists" tag="button"
                                class="btn btn-xs btn-bold btn-primary text-center">
                                SAVE<i class="fa fa-check-circle"></i>
                            </router-link>
                    </div>
                </header>
                <div class="no-border card mb-0 no-radius card-body">
                        <form>
                            <div class="py-10">
                                <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Morning Activities</h5>
                                <div class="row no-margin">
                                    <div class="pl-0 col-md-6">
                                        <div class="form-group pt-10">
                                            <label for="activity">New Activity</label>
                                            <input type="text" v-model="morn_activity" class="form-control" id="morn_activity">
                                        </div>
                                        <button v-if="loadMorn" class="btn btn-xs btn-bold btn-primary text-center" disabled>
                                            <circle-spin class="m-0" ></circle-spin>
                                        </button>
                                        <button v-else class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="addMorn" >
                                            Add
                                        </button>
                                    </div>
                                    <div class="col-md-6 b-1 mt-20">
                                        <p v-if="no_morn_activities"> No Activity Added</p>
                                        <div v-else>
                                            <circle-spin v-if="delMorn" class="m-0 pt-30"></circle-spin>
                                            <ul v-else class="list-unstyled py-10 m-0">
                                                <li class="flexbox px-10 bg-1 mb-10 align-items-baseline" v-for="(activity,i) in details.morning_activities" :key="i"
                                                    :class="i%2==0?'bg-1':'bg-2'">
                                                    {{activity.activity_title}}
                                                    <a href="#" @click="deleteMorn(activity.id)"><i class="text-white ion-close-circled"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="py-10">
                                <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Afternoon Activities</h5>
                                <div class="row no-margin">
                                    <div class="pl-0 col-md-6">
                                        <div class="form-group pt-10">
                                            <label for="activity">New Activity</label>
                                            <input type="text" v-model="after_activity" class="form-control" id="after_activity">
                                        </div>
                                        <button v-if="loadAfter" class="btn btn-xs btn-bold btn-primary text-center" disabled>
                                            <circle-spin class="m-0" ></circle-spin>
                                        </button>
                                        <button v-else class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="addAfter" >
                                            Add
                                        </button>
                                    </div>
                                    <div class="col-md-6 b-1 mt-20">
                                        <p v-if="no_after_activities"> No Activity Added</p>
                                        <div v-else>
                                            <circle-spin v-if="delEven" class="m-0 pt-30"></circle-spin>
                                            <ul v-else class="list-unstyled py-10 m-0">
                                                <li class="flexbox px-10 mb-10 align-items-baseline" v-for="(activity,i) in details.afternoon_activities" :key="i"
                                                    :class="i%2==0?'bg-1':'bg-2'">
                                                    {{activity.activity_title}}
                                                    <a href="#" @click="deleteAfter(activity.id)"><i class="text-white ion-close-circled"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="py-10">
                                <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Evening Activities</h5>
                                <div class="row no-margin">
                                    <div class="pl-0 col-md-6">
                                        <div class="form-group pt-10">
                                            <label for="activity">New Activity</label>
                                            <input type="text" v-model="even_activity" class="form-control" id="even_activity">
                                        </div>
                                        <button v-if="loadEven" class="btn btn-xs btn-bold btn-primary text-center" disabled>
                                            <circle-spin class="m-0" ></circle-spin>
                                        </button>
                                        <button v-else class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="addEven" >
                                            Add
                                        </button>
                                    </div>
                                    <div class="col-md-6 b-1 mt-20">
                                        <p v-if="no_even_activities"> No Activity Added</p>
                                        <div v-else>
                                            <circle-spin v-if="delEven" class="m-0 pt-30"></circle-spin>
                                            <ul v-else class="list-unstyled py-10 m-0">
                                                <li class="flexbox px-10 mb-10 align-items-baseline" v-for="(activity,i) in details.evening_activities" :key="i"
                                                    :class="i%2==0?'bg-1':'bg-2'">
                                                    {{activity.activity_title}}
                                                    <a href="#" @click="deleteEven(activity.id)"><i class="text-white ion-close-circled"></i></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                </div>
        </div>
    </main>
</template>

<script>
import axios from 'axios'
import allMixins from '../../mixins.js'
export default {
    mixins: [allMixins],
    data() {
        return {
            firstLoad: true,
            delMorn: false,
            delAfter: false,
            delEven: false,
            loadMorn: false,
            loadAfter: false,
            loadEven: false,
            patient_id: null,
            no_morn_activities: true,
            no_after_activities: true,
            no_even_activities: true,
            details: {},
            morn_activity: '',
            after_activity: '',
            even_activity: '',
            indexClicked: null
        }
    },
    methods: {
        reloadActivities() {
            axios.get(`/view_patient/${this.patient_id}`)
            .then(res => {
                this.firstLoad = false
                this.details = res.data.data
                if(this.details.morning_activities.length> 0){
                    this.no_morn_activities = false
                }
                if(this.details.afternoon_activities.length> 0){
                    this.no_after_activities = false
                }
                if(this.details.evening_activities.length> 0){
                    this.no_even_activities = false
                }
            })
            .catch(err => {
                    //console.log(err)
                    this.firstLoad = false
                    this.$notify({
                            group: 'response',
                            type: 'error',
                            title: 'Failed to refresh activities.',
                            // text: `${res.data.message}`,
                            duration: 2500,
                            ignoreDuplicates: true
                    })
                    setTimeout(() => {
                        location.reload()
                    }, 3000)
            })
        },
        addMorn() {
            this.loadMorn = true
            let userData = {
                activity_title: this.morn_activity
            }
            axios.post(`/activity_list/morning_activity/${this.patient_id}`, userData)
            .then(res => {
                this.loadMorn = false
                this.morn_activity = ''
                this.reloadActivities()
            })
            .catch(err => {
                this.loadMorn = false
            })
        },
        deleteMorn(id) {
            this.delMorn = true
            axios.delete(`/activity_list/morning_activity/${id}`)
            .then(res => {
                this.delMorn = false
                this.reloadActivities()
            })
            .catch(err => {
                this.delMorn = false
            })
        },
        addAfter() {
            this.loadAfter = true
            let userData = {
                activity_title: this.after_activity
            }
            axios.post(`/activity_list/afternoon_activity/${this.patient_id}`, userData)
            .then(res => {
                this.loadAfter = false
                this.after_activity = ''
                this.reloadActivities()
            })
            .catch(err => {
                this.loadAfter = false
            })
        },
        deleteAfter(id) {
            this.delAfter = true
            axios.delete(`/activity_list/afternoon_activity/${id}`)
            .then(res => {
                this.delAfter = false
                this.reloadActivities()
            })
            .catch(err => {
                this.delAfter = false
            })
        },
        addEven() {
            this.loadEven = true
            let userData = {
                activity_title: this.even_activity
            }
            axios.post(`/activity_list/evening_activity/${this.patient_id}`, userData)
            .then(res => {
                this.even_activity = ''
                this.loadEven = false
                this.reloadActivities()
            })
            .catch(err => {
                this.loadEven = false
            })
        },
        deleteEven(id) {
            this.delEven = true
            axios.delete(`/activity_list/evening_activity/${id}`)
            .then(res => {
                this.delEven = false
                this.reloadActivities()
            })
            .catch(err => {
                this.delEven = false
            })
        },
    },
    mounted() {
        this.patient_id = this.$route.params.patient_id
        axios.get(`/view_patient/${this.patient_id}`)
        .then(res => {
            this.firstLoad = false
            this.details = res.data.data
            // this.morn_activities = res.data.data.morning_activities.filter(activity => activity.therapist_id == this.therapist_id)
            if(this.details.morning_activities.length> 0){
                this.no_morn_activities = false
            }
            if(this.details.afternoon_activities.length> 0){
                this.no_after_activities = false
            }
            if(this.details.evening_activities.length> 0){
                this.no_even_activities = false
            }
        })
        .catch(err => {
                //console.log(err)
                // this.firstLoad = false
        })
    }
}
</script>
