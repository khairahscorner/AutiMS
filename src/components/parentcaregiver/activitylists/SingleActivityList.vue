<template>
    <div >
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Activity List by Therapist {{therapist_name}}</h4>
                    </div>
                </header>
                <div>
                    <no-view v-if="!has_activity_list" :doc_type="doc_type"></no-view>
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
import NoView from '../../noReport.vue'
import { store} from '../../../store'

export default {
    props: ['has_activity_list','details', 'therapist_name'],
    data() {
        return {
            doc_type: 'Activity List'
        }
    },
    components: {
        NoView
    }
}
</script>