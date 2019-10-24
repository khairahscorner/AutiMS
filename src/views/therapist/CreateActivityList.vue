<template>
<main class="pd-main pb-80">
    <div class="main-content">
        <div class="">
                <div class="no-border p-0 card mb-0 no-radius">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">New Activity List</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="saveNewActivityList()"
                        >CREATE
                        </button>
                    </div>
                </header>
                <div class="m-20 b-1 row no-margin">
                  <div class="col-xl-3 col-md-4 br-1">
                    <form>
                        <div class="form-group pt-10">
                            <label>Patient</label>
                            <!-- All patients with no activity list only -->
                            <multiselect v-model="patient" :options="patient_list" class="form-control"
                            :close-on-select="true" :show-labels="false" placeholder="Choose Patient:">
                            </multiselect>
                        </div>
                    </form>
                  </div>
                  <div class="col-xl-9 col-md-8">
                    <form>
                        <div class="py-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Morning</h5>
                            <div class="row no-margin">
                                <div class="col-md-6">
                                    <div class="form-group pt-10">
                                        <label for="activity">Activity</label>
                                        <input type="text" v-model="activity" class="form-control" id="activity">
                                    </div>
                                    <button class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="addActivity" >
                                        Add
                                    </button>
                                </div>
                                <div class="col-md-6 b-1 mt-20">
                                    <p v-if="no_activity"> No Activity Added</p>
                                    <div v-else>
                                        <ul>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Afternoon</h5>
                            <div class="row no-margin">
                                <div class="col-md-6">
                                    <div class="form-group pt-10">
                                        <label for="activity">Activity</label>
                                        <input type="text" v-model="activity" class="form-control" id="activity">
                                    </div>
                                    <button class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="addActivity" >
                                        Add
                                    </button>
                                </div>
                                <div class="col-md-6 b-1 mt-20">
                                    <p v-if="no_activity"> No Activity Added</p>
                                    <div v-else>
                                        <ul>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="py-10">
                            <h5 class="b-1 border-secondary bg-secondary p-10 mb-0">Evening</h5>
                            <div class="row no-margin">
                                <div class="col-md-6">
                                    <div class="form-group pt-10">
                                        <label for="activity">Activity</label>
                                        <input type="text" v-model="activity" class="form-control" id="activity">
                                    </div>
                                    <button class="btn btn-xs btn-bold btn-primary text-center" type="button" @click="addActivity" >
                                        Add
                                    </button>
                                </div>
                                <div class="col-md-6 b-1 mt-20">
                                    <p v-if="no_activity"> No Activity Added</p>
                                    <div v-else>
                                        <ul>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                            <li>SDFGHJKGFDSSZDXFCBGVBN</li>
                                        </ul>
                                    </div>
                                </div>
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
export default {
    data() {
        return {
            date: new Date (),
            patient: "",
            patient_list: [],
            activity: "",
            morn_activity_list: [],
            noon_activity_list: [],
            even_activity_list: [],
            no_activity: true
        }
    },
    methods: {
      
    },
    mounted() {
    }
}
</script>