<template>
    <div >
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Activity List of {{details.name}}</h4>
                        <router-link v-if="!has_activity_list" :to="'/therapist/activity-lists/'+patient_id+'/new'" tag="button"
                        class="btn btn-xs btn-bold btn-primary text-center">
                        Add New<i class="fa fa-plus-square"></i>
                        </router-link>
                        <router-link v-else tag="button"
                        class="btn btn-xs btn-bold btn-primary text-center"
                        :to="'/therapist/activity-lists/'+ patient_id +'/edit'"
                        >
                        Edit<i class="fa fa-edit"></i>
                        </router-link>
                    </div>
                </header>
                <div>
                    <no-view v-if="!has_activity_list" :doc_type="doc_type"></no-view>
                    <div v-else class="card-body">
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Morning</h5>
                                    <div class="b-1 pt-10">
                                        <ul class="list-unstyled p-10 m-0">
                                            <li class="flexbox px-10 mb-10 align-items-baseline" v-for="(activity,i) in details.morning_activities" :key="i"
                                                :class="i%2==0?'bg-1':'bg-2'">
                                                {{activity.activity_title}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Afternoon</h5>
                                    <div class="b-1 pt-10">
                                        <ul class="list-unstyled p-10 m-0">
                                            <li class="flexbox px-10 mb-10 align-items-baseline" v-for="(activity,i) in details.afternoon_activities" :key="i"
                                                :class="i%2==0?'bg-1':'bg-2'">
                                                {{activity.activity_title}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Evening</h5>
                                    <div class="b-1 pt-10">
                                        <ul class="list-unstyled p-10 m-0">
                                            <li class="flexbox px-10 mb-10 align-items-baseline" v-for="(activity,i) in details.evening_activities" :key="i"
                                                :class="i%2==0?'bg-1':'bg-2'">
                                                {{activity.activity_title}}
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                    </div>
                </div>
                    
            </div>
</template>

<script>
import axios from "axios";
import NoView from '../../noView.vue'
import { store} from '../../../store'
export default {
    props: ['has_activity_list','patient_id','details'],
    data() {
        return {
            doc_type: 'Activity List',
            therapist_id: this.details.therapist_id,
        }
    },
    methods: {
    },
    mounted() {
    },
    components: {
        NoView
    }
}
</script>