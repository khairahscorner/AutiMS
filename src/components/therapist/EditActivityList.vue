<template>
    <div class="no-border card col-xl-8 col-md-7 mb-0 no-radius px-0">
                <header class="no-border">
                    <div class="header-bar flexbox pl-20">
                        <h4 class="text-uppercase">Edit Activity List of Patient</h4>
                        <button
                        class="btn btn-sm btn-bold btn-primary text-center"
                        type="button"
                        @click="saveActivityList()"
                        >CREATE
                        </button>
                    </div>
                </header>
                <div class="card-body">
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
</template>
