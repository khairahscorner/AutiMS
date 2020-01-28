<template> 
    <div >
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Activity List of {{details.name}}</h4>
                        <router-link v-if="!has_activity_list" :to="'/therapist/activity-lists/'+patient_id+'/new'" tag="button"
                        class="btn btn-xs btn-bold btn-primary text-center">
                        Add New<i class="ion-android-add-circle"></i>
                        </router-link>
                        <router-link v-else tag="button"
                        class="btn btn-xs btn-bold btn-primary text-center"
                        :to="'/therapist/activity-lists/'+ patient_id +'/edit'"
                        >
                        Edit<i class="ion-edit"></i>
                        </router-link>
                    </div>
                </header>
                <div>
                    <div v-if="!has_activity_list" class="card-body m-50">
                        <div class="text-center">
                            <div class="pb-10">
                            <i class="fs-svg ion-ios-list-outline"></i>
                            </div>
                            <p>No {{doc_type}} yet. Start by creating one.</p>
                        </div>
                    </div>
                    <div v-else class="card-body scroll h-400px">
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Morning</h5>
                                    <div class="b-1 pt-10">
                                        <ul class="list-unstyled p-10 m-0">
                                            <li class="px-10 mb-10" v-for="(activity,i) in details.morning_activities" :key="i">
                                                {{i+1}}. <strong>{{activity.activity_title}}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Afternoon</h5>
                                    <div class="b-1 pt-10">
                                        <ul class="list-unstyled p-10 m-0">
                                            <li class="px-10 mb-10" v-for="(activity,i) in details.afternoon_activities" :key="i">
                                               {{i+1}}. <strong>{{activity.activity_title}}</strong>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="pb-20">
                                    <h5 class="b-1 border-secondary bg-secondary p-10 mb-0 text-uppercase">Evening</h5>
                                    <div class="b-1 pt-10">
                                        <ul class="list-unstyled p-10 m-0">
                                            <li class=" px-10 mb-10" v-for="(activity,i) in details.evening_activities" :key="i">
                                                {{i+1}}. <strong>{{activity.activity_title}}</strong>
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
// import NoView from '../../noView.vue'
import { store} from '../../../store'
export default {
    props: ['has_activity_list','patient_id','details'],
    data() {
        return {
            doc_type: 'Activity List',
            // therapist_id: this.details.therapist_id,
        }
    },
    methods: {
    },
    mounted() {
    },
    // components: {
    //     NoView
    // }
}
</script>